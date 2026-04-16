import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布尔日大教堂 Bourges Cathedral｜法国哥特艺术瑰宝，震撼的彩绘玻璃画廊 - 最佳欧洲景点',
  description: '第一眼看到布尔日大教堂，你绝对会被它的“宽度”震撼到！它不像巴黎圣母院那样追求冲天的高度，而是以一种无比舒展、沉稳的姿态横亘在布尔日的天际线下，像一座巨大的石制山脉。走进内部，那种空旷、深邃的空间感瞬间将你包裹。最绝的是它的彩绘玻璃窗，阳光好的时候，整个教堂内部就像一个流动的、五彩斑斓的光之海洋。那...',
}

export default function BourgesCathedralPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '布尔日大教堂', href: '/attractions/bourges-cathedral' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">布尔日大教堂</h1>
          <p className="text-xl text-gray-600 mb-4">Bourges Cathedral</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">法国</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">布尔日</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">第一眼看到布尔日大教堂，你绝对会被它的“宽度”震撼到！它不像巴黎圣母院那样追求冲天的高度，而是以一种无比舒展、沉稳的姿态横亘在布尔日的天际线下，像一座巨大的石制山脉。走进内部，那种空旷、深邃的空间感瞬间将你包裹。最绝的是它的彩绘玻璃窗，阳光好的时候，整个教堂内部就像一个流动的、五彩斑斓的光之海洋。那些13世纪的蓝色、红色、金色的光芒透过玻璃，在地面和石柱上投下梦幻的光影，你会感觉自己不是在看窗户，而是在看一部用光和色彩讲述的中世纪史诗。空气里混合着古老的石头气息和一丝蜡烛的味道，安静得能听到自己的呼吸声，特别治愈。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">教堂主体全年免费开放，但开放时间会随季节（夏季/冬季）和宗教活动微调，建议行前在官网确认。登塔楼（可俯瞰城市全景）和参观藏有珍贵圣物与法衣的珍宝室需要另外购票，且有固定的导览时间，通常每天有数个场次。地下室（Crypt）保存着大教堂最初建造时的部分遗迹，也需跟随导览进入。教堂偶尔会举办音乐会，届时氛围尤为独特。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">布尔日大教堂的故事始于1195年，当时的布尔日大主教亨利·德·苏利决心建造一座能与巴黎圣母院媲美，甚至超越它的宏伟教堂。选址很有意思，是在一片沼泽地上，这给建造带来了巨大挑战，但也让后来的建筑基础工程显得格外了不起。整个建造过程断断续续持续了近一个半世纪，直到13世纪末才基本完工。它完美体现了法国哥特式建筑从早期向盛期的过渡，尤其是它独创性的“五进式”设计——也就是没有明显的耳堂，侧廊一层套一层，形成了无比开阔、连贯的内部空间，这在当时是革命性的。大教堂幸运地躲过了法国大革命的严重破坏，也基本避开了两次世界大战的炮火，使得它那些无与伦比的13世纪彩绘玻璃窗（总计超过2000平方米！）得以近乎完整地保存下来。1992年，它被联合国教科文组织列为世界遗产。站在这里，你触摸的每一块石头，看到的每一片玻璃，都是中世纪工匠们用信仰和时间凝结的杰作，那种穿越时空的对话感非常强烈。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">建议游览时间约1.5-2小时。从西立面正门（Portail Royal）进入，先感受中殿的宏伟和彩绘玻璃，然后顺时针或逆时针参观侧廊及后殿回廊，最后可考虑登塔楼（北塔）或参观地下室。终点可回到中殿前方静坐片刻。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  仰望西立面正门，欣赏精美的“最后审判”雕塑。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  步入中殿，抬头感受惊人的拱顶高度和开阔空间。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  细细观赏北侧廊和南侧廊一系列13世纪的彩绘玻璃窗。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  绕行至后殿（chevet），从外部欣赏飞扶壁的壮观结构。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  进入后殿回廊，感受更私密的祈祷空间和更多彩窗。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  （可选）登上北塔“黄油塔”，俯瞰布尔日老城全景。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">教堂内部光线较暗，适应一下才能更好地欣赏彩窗细节。地面是古老石板，建议穿舒适的平底鞋。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **埃蒂安·多莱广场（教堂前广场）**：最佳拍摄时间为晴朗的下午，阳光能照亮西立面。用广角镜头拍摄大教堂全貌，突出其宽阔稳重的气势。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **中殿内部，面向西窗**：最佳拍摄时间为上午，阳光从背后射入。背对祭坛，拍摄中殿纵深和尽头玫瑰窗的光影，能拍出强烈的空间透视感和神圣光束。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **后殿外部花园**：最佳拍摄时间为黄昏“蓝调时刻”。从花园小径拍摄后殿高耸的飞扶壁和塔楼剪影，构图非常优美，富有建筑韵律感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **侧廊彩绘玻璃窗下**：任何有阳光的时间。近距离拍摄玻璃细节，或拍摄彩色光影投射在石柱和地面上的人物剪影，故事感十足。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">教堂内允许拍照，但请勿使用闪光灯和三脚架，并保持安静，尊重礼拜者。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **预算型**：选择布尔日火车站附近的连锁酒店或经济型旅馆，交通便利，性价比高。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **舒适型**：入住老城区内的精品酒店或特色民宿，步行即可到达大教堂，更能体验古城夜晚的宁静氛围。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **特色型**：寻找由历史建筑改造的酒店，如下午能望见教堂塔楼的房间，将历史感融入住宿体验。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">旅游旺季（特别是夏季音乐节期间）建议提前预订。住在老城区，晚上可以欣赏大教堂的夜景灯光，非常迷人。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">布尔日大教堂带给我的，不是那种咄咄逼人的震撼，而是一种深沉、宁静的感动。它像一个宽厚的长者，不张扬，却用最绚烂的光和最坚实的石头，默默守护着这座城市八百年的记忆。在这里待上半天，让那些古老的色彩洗涤眼睛，让心灵在空旷中沉静下来，你会明白为什么它被称为“法国哥特艺术的巅峰之一”。这绝对是一次值得专程前往的灵魂之旅。</p>
            </Section>

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
                <InfoRow icon="🕒" label="开放时间" value="教堂主体：全年开放，通常为上午9:00至下午7:15（夏季可能延长，冬季可能缩短）。塔楼和地下室有特定开放时段，需单独查询。" />
                <InfoRow icon="🎫" label="门票" value="进入教堂主体免费。登塔楼和参观珍宝室需要购票，成人票价约8欧元，有优惠票价（学生、儿童等）。" />
                <InfoRow icon="📍" label="地址" value="Place Étienne Dolet, 18000 Bourges, France" />
                <InfoRow icon="🚌" label="交通" value="从巴黎奥利机场或戴高乐机场出发，可乘坐TGV高速火车至布尔日站，车程约1小时40分钟至2小时。从布尔日火车站步行至大教堂约15-20分钟。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
