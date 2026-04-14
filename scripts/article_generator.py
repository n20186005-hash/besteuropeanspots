import os
import json
import re
import tkinter as tk
from tkinter import ttk, messagebox, scrolledtext
from pathlib import Path

# ================= 配置区 =================
# 定义项目根目录（脚本存放在 scripts/ 目录下，所以父目录是项目根目录）
PROJECT_ROOT = Path(__file__).parent.parent
DATA_FILE = PROJECT_ROOT / 'src' / 'data' / 'attractions.json'
PAGES_DIR = PROJECT_ROOT / 'src' / 'app' / 'attractions'
INPUTS_DIR = PROJECT_ROOT / 'scripts' / 'inputs'
ARCHIVE_DIR = PROJECT_ROOT / 'scripts' / 'archive'

# 确保目录存在
INPUTS_DIR.mkdir(parents=True, exist_ok=True)
ARCHIVE_DIR.mkdir(parents=True, exist_ok=True)

# 定义可能出现的文章章节标题，用于自动分段解析
KNOWN_HEADERS = [
    "基本信息", "开放时间", "门票", "地址", "交通",
    "最佳游览季节", "建议游览时长", "注意事项", "历史背景",
    "游览路线", "拍照机位", "附近景点", "住宿小贴士", "住宿贴士"
]

# ================= 模板区 =================
# 你可以直接在这里修改生成页面的 TSX 模板内容。花括号 {} 里的内容会被自动替换。
PAGE_TEMPLATE = """import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '__SEO_TITLE__ - 最佳欧洲景点',
  description: '__SHORT_DESC__',
}

export default function __COMPONENT_NAME__Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '__NAME__', href: '/attractions/__SLUG__' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">__NAME__</h1>
          <p className="text-xl text-gray-600 mb-4">__ENGLISH_NAME__</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">__COUNTRY__</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">__CITY__</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
__DESCRIPTION_HTML__
            </Section>
__CONTENT_SECTIONS__

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <p className="text-sm text-gray-600 text-center">
                本文由旅行作者 Winter Grady 实地走访整理，专注欧洲小众景点深度攻略，持续分享真实游览体验。
              </p>
              <p className="text-xs text-gray-500 text-center mt-2">
                本站内容仅供旅行参考使用，商务合作与转载事宜请通过联系页脚提交申请。
              </p>
              <p className="text-xs text-gray-500 text-center">
                管理团队保留所有内容版权，未经许可禁止搬运、摘抄或商用。
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">实用信息</h3>
              <div className="space-y-4">
                <InfoRow icon="🕒" label="开放时间" value="__OPENING_HOURS__" />
                <InfoRow icon="🎫" label="门票" value="__TICKET_PRICE__" />
                <InfoRow icon="📍" label="地址" value="__ADDRESS__" />
                <InfoRow icon="🚌" label="交通" value="__TRANSPORT__" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
"""

# ================= 逻辑处理区 =================
def parse_raw_text(raw_text):
    """解析原始文章文本为结构化数据"""
    # 移除版权声明等固定文字，去除空行
    lines = [line.strip() for line in raw_text.split('\n')]
    lines = [line for line in lines if line and not line.startswith('本文由旅行作者') and not line.startswith('本站内容仅供') and not line.startswith('管理团队保留')]
    
    if not lines:
        return None

    data = {
        'seo_title': '',
        'name': '',
        'englishName': '',
        'country': '',
        'city': '',
        'slug': '',
        'description': [],
        'sections': {h: [] for h in KNOWN_HEADERS}
    }

    # 1. 提取标题和基本信息（前5行中寻找）
    for i, line in enumerate(lines[:5]):
        # 清理可能存在的#号
        line = line.replace('#', '').strip()
        if '・' in line or '-' in line:
            parts = re.split(r'[・\-]', line)
            parts = [p.strip() for p in parts if p.strip()]
            if len(parts) >= 3:
                data['name'] = parts[0]
                data['englishName'] = parts[1]
                data['country'] = parts[2]
                if len(parts) >= 4:
                    data['city'] = parts[3].replace('旅游攻略', '')
                else:
                    data['city'] = data['country']

                # 自动生成slug
                slug = data['englishName'].lower()
                slug = re.sub(r'[^a-z0-9\s-]', '', slug)
                data['slug'] = re.sub(r'[\s]+', '-', slug.strip())
                
                # 上一行通常是SEO标题
                if i > 0:
                    data['seo_title'] = lines[i-1].replace('#', '').strip()
                break

    # 2. 找到正文的起始位置
    start_idx = 0
    for i, line in enumerate(lines):
        line = line.replace('#', '').strip()
        if line == data.get('seo_title') or ('・' in line and data.get('name') in line):
            continue
        start_idx = i
        break

    # 3. 逐行解析并归类到不同章节
    current_section = 'description'
    for line in lines[start_idx:]:
        # 强制过滤掉所有的 # 号以满足前端渲染需求
        clean_line = line.replace('#', '').strip()
        if not clean_line:
            continue
            
        # 检查是否为已知章节标题
        matched_header = None
        for h in KNOWN_HEADERS:
            if clean_line == h:
                matched_header = h
                break

        if matched_header:
            current_section = matched_header
        else:
            if current_section == 'description':
                data['description'].append(clean_line)
            else:
                data['sections'][current_section].append(clean_line)

    return data

def process_and_generate(data):
    """将解析后的数据写入 json 和 tsx 文件"""
    # ================= 1. 更新 attractions.json =================
    try:
        with open(DATA_FILE, 'r', encoding='utf-8') as f:
            attractions = json.load(f)
    except Exception:
        attractions = []

    # 智能推断类型
    attr_type = "景点"
    if "老城" in data['name'] or "古城" in data['name']:
        attr_type = "古城"
    elif "要塞" in data['name'] or "堡" in data['name']:
        attr_type = "要塞"

    new_attr = {
        "name": data['name'],
        "englishName": data['englishName'],
        "country": data['country'],
        "city": data['city'],
        "slug": data['slug'],
        "description": '\n'.join(data['description']),
        "openingHours": '\n'.join(data['sections'].get('开放时间', [])),
        "ticketPrice": '\n'.join(data['sections'].get('门票', [])),
        "address": '\n'.join(data['sections'].get('地址', [])),
        "transport": '\n'.join(data['sections'].get('交通', [])),
        "bestSeason": '\n'.join(data['sections'].get('最佳游览季节', [])),
        "suggestedDuration": '\n'.join(data['sections'].get('建议游览时长', [])),
        "tips": '\n'.join(data['sections'].get('注意事项', [])),
        "region": data['country'],
        "type": attr_type
    }

    # 检查是否已存在（根据slug），存在则覆盖，不存在则追加
    updated = False
    for i, attr in enumerate(attractions):
        if attr['slug'] == data['slug']:
            attractions[i] = new_attr
            updated = True
            break
    if not updated:
        attractions.append(new_attr)

    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(attractions, f, ensure_ascii=False, indent=2)

    # ================= 2. 生成 page.tsx =================
    comp_name = ''.join(word.capitalize() for word in data['slug'].split('-'))

    # 生成简介段落 HTML
    desc_html = '\n'.join([f'              <p className="text-gray-700 leading-relaxed mb-4">{p}</p>' for p in data['description']])

    # 生成其他章节的 HTML（排除实用信息里单独展示的内容）
    sections_html = []
    for header, paras in data['sections'].items():
        if not paras or header in ['开放时间', '门票', '地址', '交通']: 
            continue
        sections_html.append(f'            <Section title="{header}">')
        for p in paras:
            sections_html.append(f'              <p className="text-gray-700 leading-relaxed mb-4">{p}</p>')
        sections_html.append(f'            </Section>')

    short_desc = data['description'][0][:100] + '...' if data['description'] else ''
    
    page_content = PAGE_TEMPLATE.replace('__SEO_TITLE__', data['seo_title'] or f"{data['name']}旅游攻略")
    page_content = page_content.replace('__SHORT_DESC__', short_desc)
    page_content = page_content.replace('__COMPONENT_NAME__', comp_name)
    page_content = page_content.replace('__NAME__', data['name'])
    page_content = page_content.replace('__ENGLISH_NAME__', data['englishName'])
    page_content = page_content.replace('__SLUG__', data['slug'])
    page_content = page_content.replace('__COUNTRY__', data['country'])
    page_content = page_content.replace('__CITY__', data['city'])
    page_content = page_content.replace('__DESCRIPTION_HTML__', desc_html)
    page_content = page_content.replace('__CONTENT_SECTIONS__', '\n'.join(sections_html))
    page_content = page_content.replace('__OPENING_HOURS__', new_attr['openingHours'] or '全天开放')
    page_content = page_content.replace('__TICKET_PRICE__', new_attr['ticketPrice'] or '免费')
    page_content = page_content.replace('__ADDRESS__', new_attr['address'] or '请参考地图导航')
    page_content = page_content.replace('__TRANSPORT__', new_attr['transport'] or '建议步行或公共交通')

    page_dir = PAGES_DIR / data['slug']
    page_dir.mkdir(parents=True, exist_ok=True)
    with open(page_dir / 'page.tsx', 'w', encoding='utf-8') as f:
        f.write(page_content)

    return True

# ================= GUI 界面 =================
class App(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("欧洲景点文章自动化生成器 (本地免配置版)")
        self.geometry("1100x750")
        
        main_frame = ttk.Frame(self, padding="10")
        main_frame.pack(fill=tk.BOTH, expand=True)
        
        # === 左侧：文本输入区 ===
        left_frame = ttk.LabelFrame(main_frame, text="1. 粘贴文章原始内容 (自动忽略#号)", padding="5")
        left_frame.pack(side=tk.LEFT, fill=tk.BOTH, expand=True, padx=(0, 10))
        
        self.text_area = scrolledtext.ScrolledText(left_frame, wrap=tk.WORD, font=("Microsoft YaHei", 10))
        self.text_area.pack(fill=tk.BOTH, expand=True)
        
        btn_frame_left = ttk.Frame(left_frame)
        btn_frame_left.pack(fill=tk.X, pady=(5, 0))
        ttk.Button(btn_frame_left, text="清空输入", command=lambda: self.text_area.delete('1.0', tk.END)).pack(side=tk.LEFT)
        ttk.Button(btn_frame_left, text="→ 解析提取右侧数据", command=self.do_parse).pack(side=tk.RIGHT)
        
        # === 右侧：配置与生成区 ===
        right_frame = ttk.Frame(main_frame)
        right_frame.pack(side=tk.RIGHT, fill=tk.BOTH, expand=True)
        
        # 表单区
        form_frame = ttk.LabelFrame(right_frame, text="2. 确认/修改元数据 (解析后可手动修改)", padding="10")
        form_frame.pack(fill=tk.X, pady=(0, 10))
        
        self.fields = {}
        labels = [
            ('seo_title', 'SEO标题:'),
            ('name', '中文名:'),
            ('englishName', '英文名:'),
            ('slug', '路径(Slug):'),
            ('country', '国家:'),
            ('city', '城市:')
        ]
        
        for i, (key, label_text) in enumerate(labels):
            ttk.Label(form_frame, text=label_text).grid(row=i, column=0, sticky=tk.W, pady=8)
            entry = ttk.Entry(form_frame, width=45)
            entry.grid(row=i, column=1, sticky=tk.EW, pady=8, padx=10)
            self.fields[key] = entry
        
        form_frame.columnconfigure(1, weight=1)
        
        # 操作区
        action_frame = ttk.LabelFrame(right_frame, text="3. 生成文件", padding="10")
        action_frame.pack(fill=tk.BOTH, expand=True)
        
        # 核心样式
        style = ttk.Style()
        style.configure("Primary.TButton", font=("Microsoft YaHei", 11, "bold"))
        
        ttk.Button(action_frame, text="🚀 立即生成单篇文章", command=self.do_generate, style="Primary.TButton").pack(fill=tk.X, pady=15, ipady=5)
        
        ttk.Separator(action_frame, orient=tk.HORIZONTAL).pack(fill=tk.X, pady=10)
        
        # 批量处理说明
        batch_text = (
            "【批量生成功能】\n"
            f"你可以将多个 .txt 文章放到 {INPUTS_DIR.name} 文件夹下，\n"
            "点击下方按钮一键处理，完成后会自动移入 archive 文件夹。"
        )
        ttk.Label(action_frame, text=batch_text, foreground="gray", justify=tk.CENTER).pack(pady=10)
        ttk.Button(action_frame, text="📁 批量处理 inputs/ 目录", command=self.do_batch).pack(fill=tk.X, pady=5, ipady=3)
        
        self.status_var = tk.StringVar(value="就绪。请在左侧粘贴内容后点击解析。")
        ttk.Label(action_frame, textvariable=self.status_var, foreground="blue", font=("Microsoft YaHei", 10)).pack(pady=20)
        
        self.parsed_data = None

    def do_parse(self):
        raw_text = self.text_area.get('1.0', tk.END)
        data = parse_raw_text(raw_text)
        if not data or not data['name']:
            messagebox.showwarning("解析失败", "无法识别基本格式，请确保前几行包含标准格式：名称・英文名・国家・城市")
            return
        
        self.parsed_data = data
        
        for key, entry in self.fields.items():
            entry.delete(0, tk.END)
            entry.insert(0, data.get(key, ''))
            
        self.status_var.set("✅ 解析成功！请确认上方数据无误后，点击【立即生成单篇文章】。")

    def do_generate(self):
        if not self.parsed_data:
            messagebox.showwarning("提示", "请先解析内容！")
            return
            
        # 覆盖用户手动修改的值
        for key, entry in self.fields.items():
            self.parsed_data[key] = entry.get()
            
        try:
            process_and_generate(self.parsed_data)
            self.status_var.set(f"🎉 成功生成: {self.parsed_data['name']} !\nJSON已更新，TSX页面位于: src/app/attractions/{self.parsed_data['slug']}")
            messagebox.showinfo("成功", f"文章《{self.parsed_data['name']}》已成功生成并写入项目！")
        except Exception as e:
            messagebox.showerror("错误", f"生成失败: {str(e)}")

    def do_batch(self):
        files = list(INPUTS_DIR.glob('*.txt'))
        if not files:
            messagebox.showinfo("提示", f"没有在 {INPUTS_DIR.absolute()} 找到 .txt 文件。\n请将原始文章保存为txt文件放到该目录下。")
            return
            
        success_count = 0
        for file_path in files:
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    raw_text = f.read()
                data = parse_raw_text(raw_text)
                if data and data['name']:
                    process_and_generate(data)
                    success_count += 1
                    # 移动到归档
                    file_path.rename(ARCHIVE_DIR / file_path.name)
            except Exception as e:
                print(f"处理 {file_path.name} 失败: {e}")
                
        self.status_var.set(f"✅ 批量处理完成！成功生成 {success_count} 篇文章。")
        messagebox.showinfo("批量完成", f"共处理 {len(files)} 个文件，成功生成 {success_count} 个。\n原文件已移动至 scripts/archive 目录。")

if __name__ == "__main__":
    app = App()
    app.mainloop()
