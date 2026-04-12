import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '维塞乌古城・Viseu・葡萄牙・维塞乌 | 最佳欧洲景点',
  description: '探索维塞乌古城，葡萄牙北部的千年人文秘境，承载着两千多年历史的古城，以花岗岩建筑的沉稳、中世纪街巷的静谧、宗教艺术的璀璨闻名。',
}

export default function ViseuOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '维塞乌古城', href: '/attractions/viseu-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">维塞乌古城・Viseu・葡萄牙・维塞乌</h1>
          <p className="text-lg text-gray-600 mb-6">
            维塞乌古城是葡萄牙北部标志性人文景点，起源于公元前二世纪罗马时期，保留了罗马、中世纪、文艺复兴等多个时代的建筑遗迹。古城以维塞乌大教堂、格朗·瓦斯科博物馆为核心，鹅卵石街巷蜿蜒交错，花岗岩建筑错落有致，既有宗教建筑的庄严恢弘，又有市井生活的烟火气息，是领略葡萄牙古典建筑美学、宗教文化与民俗风情的必访之地。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              维塞乌古城是葡萄牙北部标志性人文景点，起源于公元前二世纪罗马时期，保留了罗马、中世纪、文艺复兴等多个时代的建筑遗迹。古城以维塞乌大教堂、格朗·瓦斯科博物馆为核心，鹅卵石街巷蜿蜒交错，花岗岩建筑错落有致，既有宗教建筑的庄严恢弘，又有市井生活的烟火气息，是领略葡萄牙古典建筑美学、宗教文化与民俗风情的必访之地。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="维塞乌古城" />
                <InfoRow label="英文名称" value="Viseu Old Town" />
                <InfoRow label="国家" value="葡萄牙（Portugal）" />
                <InfoRow label="城市" value="维塞乌（Viseu）" />
                <InfoRow label="所属区域" value="葡萄牙维塞乌区，北部内陆山地" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史起源" value="公元前二世纪罗马时期" />
                <InfoRow label="建筑风格" value="罗马、中世纪、文艺复兴等多时代建筑" />
                <InfoRow label="核心景点" value="维塞乌大教堂、格朗·瓦斯科博物馆" />
                <InfoRow label="特色" value="花岗岩建筑、鹅卵石街巷、宗教艺术" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="古城全天开放；大教堂夏季9:00-18:00，冬季10:00-17:00；博物馆周二至周日10:00-17:00" />
              <InfoRow label="门票价格" value="古城免费；大教堂免费，特殊展厅5欧元；博物馆成人8欧元；缆车单程2欧元" />
              <InfoRow label="地址" value="Praça da República, 3500-072 Viseu, Portugal" />
              <InfoRow label="交通方式" value="从里斯本乘火车约2小时30分钟，从波尔图约1小时15分钟；火车站乘公交4站可达" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                维塞乌古城的历史渊源可追溯至公元前二世纪，当时古罗马人在维里亚托山谷的高地上修建军事要塞，这便是维塞乌的雏形，也是伊比利亚半岛北部早期的人类聚居地之一。古罗马人在此修建道路、堡垒，传播农业技术与文化，为古城的发展奠定了基础，如今在古城周边仍能找到古罗马时期的遗址——维里亚托洞穴，这处有着两千多年历史的土制堡垒，见证了古城最初的文明印记。
              </p>
              <p>
                中世纪初期，维塞乌逐渐发展成为宗教与商业重镇，公元8世纪，摩尔人入侵伊比利亚半岛，维塞乌一度被摩尔人统治，这段时期，摩尔文化与基督教文化相互交融，在建筑风格、民俗风情中留下了深刻印记。11世纪，基督教势力收复维塞乌，这里成为葡萄牙北部重要的宗教中心，开始大规模修建教堂、修道院，其中最具代表性的便是维塞乌大教堂，始建于13世纪，融合了罗曼式的厚重与哥特式的轻盈，历经数百年修缮，成为古城的标志性建筑。
              </p>
              <p>
                13至14世纪，维塞乌迎来第一个鼎盛时期，作为葡萄牙北部的交通枢纽与商业中心，这里聚集了大量商人、工匠与学者，鹅卵石街巷不断延伸，花岗岩建筑鳞次栉比，形成了如今古城的基本格局。1383年，维塞乌遭到卡斯蒂利亚军队洗劫，许多建筑遭到损毁，随后在若奥一世时代，古城进行了大规模重建，修建了新的防御墙，修复了受损的教堂与民居，进一步完善了城市设施。
              </p>
              <p>
                文艺复兴时期，维塞乌的文化与艺术迎来繁荣，16世纪，当地修建了格朗·瓦斯科博物馆的前身——主教宫，收藏了大量文艺复兴时期的艺术品，其中以葡萄牙著名画家瓦斯科·费尔南德斯的作品最为珍贵，这位画家的作品兼具宗教虔诚与人文情怀，成为葡萄牙文艺复兴艺术的代表。这一时期，古城的建筑也融入了文艺复兴风格，精致的雕塑、华丽的壁画与古朴的花岗岩墙体相得益彰，形成了独特的建筑风貌。
              </p>
              <p>
                20世纪以来，葡萄牙政府对维塞乌古城进行了多次保护性修缮，严格遵循"修旧如旧"的原则，保留了古城的鹅卵石街巷、花岗岩建筑与历史遗迹，同时完善了基础设施，让古城既能承载千年历史，又能适配现代游览需求。如今，维塞乌古城不仅是葡萄牙北部的文化地标，更是全球游客感受伊比利亚半岛中世纪人文风情的重要窗口，每年吸引着数十万游客前来探访。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（2-3小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从维塞乌火车站出发，乘坐1路公交抵达共和国广场，这是古城的核心枢纽，也是游览的起点。首先参观维塞乌大教堂，走进教堂内部，欣赏罗曼式与哥特式交融的建筑结构、华丽的巴洛克式祭坛与珍贵的宗教文物，感受宗教建筑的庄严与神圣；随后前往旁边的格朗·瓦斯科博物馆，参观馆内收藏的文艺复兴时期艺术品，重点观赏瓦斯科·费尔南德斯的单幅祭坛画，感受葡萄牙古典艺术的魅力。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  参观完博物馆后，漫步共和国广场，欣赏广场上的雕塑与喷泉，感受古城的市井烟火气，随后穿梭于周边的鹅卵石街巷，欣赏沿途的花岗岩民居、复古小店与精致的窗台装饰，感受中世纪街巷的静谧与韵味；最后乘坐缆车前往老城区高处，俯瞰古城全景，感受花岗岩建筑与田园风光的交融，随后沿原路返回，结束精华游览。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速体验古城精华
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（4-5小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加历史遗址探访、民俗体验与美食品尝，深入感受维塞乌古城的多元魅力。参观完缆车观景台后，前往维里亚托洞穴，探访古罗马时期的军事要塞遗址，感受古城最古老的文明印记，了解古罗马人在伊比利亚半岛的生活与文化。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  离开遗址后，返回古城核心区域，打卡慈悲教堂，这座以洛可可风格装饰的教堂，外墙精美华丽，与维塞乌大教堂的庄严形成鲜明对比，内部的壁画与雕塑极具艺术价值；随后深度漫步古城街巷，探访当地的民俗小店，购买传统手工艺品、葡萄酒与特色甜点，感受当地的民俗风情。午后前往古城周边的田园小径，徒步30分钟，欣赏葡萄牙北部的田园风光，感受自然与人文的交融。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  徒步结束后，前往古城内的特色餐厅，品尝葡萄牙传统美食，如烤鳕鱼、葡式蛋挞、奶酪焗饭等，搭配当地产的白葡萄酒，体验葡萄牙北部的饮食文化；傍晚时分，再次漫步共和国广场，欣赏夕阳下的古城建筑，感受夜幕降临前的静谧氛围，结束深度游览。
                </p>
                <div className="text-sm text-green-800 bg-green-100 p-3 rounded">
                  <strong>适合人群：</strong>喜欢细致游览的游客，想要深度体验古城文化
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-800 mb-2">游览小贴士</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• 进入教堂需着装端庄，避免穿着短裤、短裙、露肩装</li>
                <li>• 博物馆内禁止拍照、触摸展品，参观时需保持安静，遵守工作人员指引</li>
                <li>• 夏季（6-8月）是旅游旺季，博物馆参观人数较多，建议错峰前往</li>
                <li>• 冬季部分街巷可能有积水，需穿着防滑步行鞋</li>
                <li>• 古城周边售卖点较少，建议提前准备好饮用水与小零食</li>
                <li>• 缆车可携带行李，适合携带大件行李的游客</li>
              </ul>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 共和国广场中央</h4>
                  <p className="text-sm text-gray-700">拍摄古城核心景观的最佳机位，以维塞乌大教堂为背景，前景是广场上的雕塑与喷泉，两侧是复古的花岗岩建筑，画面层次丰富。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 格朗·瓦斯科博物馆入口</h4>
                  <p className="text-sm text-gray-700">博物馆入口的文艺复兴式走廊是拍摄建筑细节的核心机位，走廊两侧的雕花立柱、拱形穹顶与精美壁画，尽显古典艺术的精致与优雅。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 缆车观景台</h4>
                  <p className="text-sm text-gray-700">位于古城高处，乘坐缆车即可抵达，是俯瞰维塞乌古城全景的绝佳机位。从这里可将古城的鹅卵石街巷、花岗岩民居、大教堂全貌尽收眼底。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 古城鹅卵石街巷拐角</h4>
                  <p className="text-sm text-gray-700">维塞乌古城的蜿蜒街巷是拍摄复古氛围的绝佳机位，以古朴的花岗岩墙体为背景，街巷尽头隐约可见教堂的塔楼，脚下的鹅卵石路面纹理清晰。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 慈悲教堂外墙前</h4>
                  <p className="text-sm text-gray-700">慈悲教堂的洛可可式外墙是拍摄建筑特写的小众机位，外墙的精美雕花、华丽装饰与柔和的色彩，尽显洛可可艺术的优雅，与周边沉稳的花岗岩建筑形成鲜明对比。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 古城田园小径旁</h4>
                  <p className="text-sm text-gray-700">位于古城外围的田园小径，是拍摄古城与自然景观同框的独特机位。以翠绿的田园为前景，古城的花岗岩建筑与教堂塔楼在远处矗立，远处的山川连绵起伏。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 古城建筑以深灰色花岗岩为主，建议穿搭亮色衣物（如红色、黄色），形成鲜明对比，提升照片质感</li>
                <li>• 拍摄街巷时，可携带草帽、披肩等道具，增强复古氛围感</li>
                <li>• 室内拍摄时，避免使用闪光灯，以免影响建筑装饰与展品</li>
                <li>• 尊重当地规定，博物馆内部、教堂祭坛区域禁止拍照，拍摄人物时需提前征得同意</li>
                <li>• 徒步拍摄时，注意脚下的鹅卵石路面，避免滑倒</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">维里亚托考古遗址</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城约3公里，步行40分钟可达，古罗马时期的军事要塞遗址，有着两千多年的历史，遗址内保留了古罗马人的堡垒、道路与生活遗迹。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行40分钟 | 🏛️ 古罗马遗址</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">维塞乌市政公园</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城核心区域约1公里，步行15分钟可达，是维塞乌市最大的城市公园，园内绿植繁茂、溪流潺潺，还有雕塑、喷泉与休闲步道。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行15分钟 | 🌳 城市公园</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">埃斯特雷拉修道院</h4>
                <p className="text-sm text-gray-700 mb-2">距离维塞乌约30分钟车程，葡萄牙北部著名的宗教遗址，始建于12世纪，融合了罗曼式与哥特式建筑风格，周边环绕着翠绿的山林。</p>
                <div className="text-xs text-gray-500">🚗 车程30分钟 | ⛪ 宗教遗址</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">蒙德古河峡谷</h4>
                <p className="text-sm text-gray-700 mb-2">距离维塞乌约40分钟车程，葡萄牙北部著名的自然景观，峡谷内河流蜿蜒，两岸青山耸立，还有瀑布、溶洞等自然景观，可乘坐游船游览。</p>
                <div className="text-xs text-gray-500">🚗 车程40分钟 | 🌊 自然景观</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">塔沃拉小镇</h4>
                <p className="text-sm text-gray-700 mb-2">距离维塞乌约25分钟车程，是一座保留完好的中世纪小镇，小镇内鹅卵石街巷蜿蜒，花岗岩民居错落有致，还有古老的教堂、城堡遗址与民俗小店。</p>
                <div className="text-xs text-gray-500">🚗 车程25分钟 | 🏘️ 中世纪小镇</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">维塞乌葡萄酒庄园</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城约15分钟车程，葡萄牙北部是著名的葡萄酒产区，这里的葡萄酒庄园历史悠久，可参观葡萄园、酿酒车间，了解葡萄酒的酿造过程。</p>
                <div className="text-xs text-gray-500">🚗 车程15分钟 | 🍷 葡萄酒文化</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">古城核心区域</h4>
                  <p className="text-sm text-blue-800">首选区域，距离共和国广场、维塞乌大教堂、格朗·瓦斯科博物馆等核心景点较近，步行即可抵达，周边环境安静复古。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">火车站附近</h4>
                  <p className="text-sm text-green-800">交通便捷，距离火车站步行5-10分钟，适合需要乘坐火车前往周边景点的游客，周边有餐厅、便利店。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">市政公园周边</h4>
                  <p className="text-sm text-yellow-800">距离古城约1公里，环境清幽，推窗即可欣赏公园风光，适合休闲度假的游客。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端文化主题酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于古城核心区域，部分由历史建筑改建而成，融合了复古与现代元素，自带餐厅、观景露台，部分房型可欣赏古城景观。</p>
                  <div className="text-xs text-gray-500">💎 文化体验 | 🏰 历史建筑</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于火车站附近或古城外围，步行可达核心景点，房间干净整洁，设施齐全，价格适中。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭情侣</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">多为家庭经营，风格温馨，部分民宿带有厨房，可自己烹饪，价格实惠，还能感受当地居民的生活氛围。</p>
                  <div className="text-xs text-gray-500">💰 预算友好 | 🏡 家庭氛围</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">适合独自旅行或预算有限的游客，价格实惠，通常位于交通便利的位置，可结识来自世界各地的旅行者。</p>
                  <div className="text-xs text-gray-500">🎒 背包客首选 | 🌍 国际交流</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季（6-8月、10月）：</strong>建议提前1-2个月预订，秋季风光最佳</p>
                    <p className="mb-2"><strong>淡季（11月-次年5月）：</strong>可提前1-2周预订，价格相对实惠</p>
                    <p><strong>文化套餐：</strong>部分高端酒店推出住宿+博物馆联票的优惠套餐</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>葡萄牙住宿通常不提供洗漱用品，需自备牙刷、牙膏等</p>
                    <p className="mb-2"><strong>货币注意：</strong>葡萄牙通用欧元，酒店均支持欧元支付</p>
                    <p><strong>注意事项：</strong>古城夜间安静，需保持安静；大部分酒店为无烟酒店</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                维塞乌古城，这座矗立在葡萄牙北部山川间的千年秘境，历经两千多年的风雨变迁，依然以古朴的花岗岩建筑、蜿蜒的鹅卵石街巷、璀璨的艺术藏品，诉说着伊比利亚半岛的历史传奇与人文底蕴。它既有古罗马遗址的沧桑厚重，又有中世纪宗教建筑的庄严恢弘；既有文艺复兴艺术的精致优雅，又有市井生活的烟火气息。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                在这里，你可以漫步大教堂，感受宗教的神圣与建筑的美感；可以走进博物馆，触摸文艺复兴时期的艺术温度；可以穿梭街巷，感受中世纪的静谧与复古；可以漫步田园，领略葡萄牙北部的自然之美。无论是独自旅行、情侣出游还是家庭度假，维塞乌古城都能给你带来难忘的旅行体验。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在历史与文化的浸润中，读懂葡萄牙北部的独特魅力，爱上这片兼具人文底蕴与自然之美的土地。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}