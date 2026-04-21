import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '丰特莱修道院・Fontenay Abbey・法国・蒙巴尔 | 最佳欧洲景点',
  description: '探索丰特莱修道院，法国保存最完整的中世纪西多会修道院之一，被联合国教科文组织列为世界文化遗产，以纯净的罗马式建筑、静谧的修道院庭院闻名。',
}

export default function FontenayAbbeyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/france' },
            { label: 'Montbard', href: '/destinations/france' },
            { label: '丰特莱修道院', href: '/attractions/fontenay-abbey' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">丰特莱修道院・Fontenay Abbey・法国・蒙巴尔</h1>
          <p className="text-lg text-gray-600 mb-6">
            丰特莱修道院是法国保存最完整的中世纪西多会修道院之一，被联合国教科文组织列为世界文化遗产，以纯净的罗马式建筑、静谧的修道院庭院与深厚的宗教历史闻名，兼具宗教庄严与田园静谧，是探寻中世纪宗教文化、感受古朴禅意的绝佳去处，也是建筑爱好者的必访胜地。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              丰特莱修道院是法国标志性中世纪西多会修道院，坐落于蒙巴尔近郊的山谷之中，保留着完整的罗马式建筑群落与修道院格局。这里远离都市喧嚣，兼具宗教的庄严肃穆与田园的清幽静谧，石砌教堂、回廊、作坊错落有致，留存着中世纪的宗教遗迹与生活痕迹，是感受西多会修士生活、探寻中世纪宗教文化与建筑艺术的必访胜地，也是逃离喧嚣、享受静谧时光的理想之地。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="丰特莱修道院" />
                <InfoRow label="英文名称" value="Fontenay Abbey" />
                <InfoRow label="国家" value="法国（France）" />
                <InfoRow label="城市" value="蒙巴尔（Montbard）" />
                <InfoRow label="所属区域" value="法国勃艮第-弗朗什-孔泰大区科多尔省" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="法国保存最完整的中世纪西多会修道院之一" />
                <InfoRow label="文化价值" value="被联合国教科文组织列为世界文化遗产" />
                <InfoRow label="建筑风格" value="纯净的罗马式建筑" />
                <InfoRow label="核心特色" value="静谧的修道院庭院与深厚的宗教历史" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="修道院整体淡季10:00-16:00，旺季9:30-17:30" />
              <InfoRow label="门票价格" value="成人门票11欧元，青少年7欧元，儿童5欧元" />
              <InfoRow label="地址" value="Fontenay Abbey, 21130 Montbard, France" />
              <InfoRow label="交通方式" value="从蒙巴尔市区乘巴士约15分钟；从第戎出发约1小时" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                丰特莱修道院的历史可追溯至12世纪，由西多会修士始建，是中世纪法国西多会修道院的杰出代表，历经近千年的变迁，见证了法国中世纪宗教的兴衰、政权更迭与文化融合，从一座静谧的修士修行地，逐步发展为兼具宗教、文化与教育功能的重要场所，最终成为法国乃至欧洲重要的历史文化遗产，保留着最完整的中世纪西多会建筑与生活遗迹。
              </p>
              <p>
                12世纪初至13世纪，是修道院的初创与鼎盛期。1119年，西多会修士伯纳德·德·克莱尔沃（Bernard de Clairvaux）倡议修建丰特莱修道院，选址于蒙巴尔近郊的山谷之中，远离世俗喧嚣，契合西多会"禁欲、简朴、隐逸"的修行理念。修道院始建于1139年，耗时近20年建成，采用纯罗马式建筑风格，不追求华丽装饰，以简洁、庄重、坚固为核心，建成后迅速成为西多会在勃艮第地区的重要修行中心，吸引了大量修士前来修行，最多时修士数量达百余人。这一时期，修道院不仅是宗教修行场所，还兼具农业生产、手工业制作与文化传承功能，修士们开垦农田、修建作坊，发展纺织、酿酒、制铁等手工业，同时整理宗教典籍、开展宗教教育，成为当地文化与经济的重要组成部分。
              </p>
              <p>
                14世纪至16世纪，修道院历经动荡与小幅衰落。14世纪，黑死病席卷欧洲，修道院的修士数量大幅减少，农业与手工业生产受到严重影响，部分建筑因年久失修出现破损。16世纪，法国宗教改革爆发，新教与天主教的冲突波及修道院，部分宗教器物被损毁，修士们被迫缩减修行规模，修道院的影响力逐渐下降，但整体建筑格局与核心遗迹得以保留，未遭到大规模破坏。这一时期，修道院对部分破损建筑进行了小幅修复，依旧坚持西多会的修行传统，维持着基本的宗教活动。
              </p>
              <p>
                17世纪至18世纪，修道院迎来短暂的复兴与后期的衰落。17世纪，法国王权逐渐集中，国王路易十四时期，政府对宗教场所进行扶持，丰特莱修道院获得资金支持，对破损的教堂、回廊等建筑进行了系统性修复，重新恢复了部分生机，修士数量有所回升，再次成为勃艮第地区重要的宗教场所。18世纪末，法国大革命爆发，宗教场所遭到严重冲击，丰特莱修道院被世俗化，修士们被驱逐，修道院的宗教器物被没收，部分建筑被改为民用仓库、作坊，甚至遭到部分损毁，逐渐陷入沉寂。
              </p>
              <p>
                19世纪至今，修道院迎来复兴与新生。19世纪末，法国政府开始重视历史文化遗产保护，将丰特莱修道院列为国家级历史遗迹，组织人员对受损建筑进行系统性修复，严格遵循"修旧如旧"的原则，保留了中世纪西多会建筑的原貌与格局。1981年，丰特莱修道院被联合国教科文组织列为世界文化遗产，逐渐被世人熟知，成为全球游客探寻中世纪宗教文化与建筑艺术的重要景点。如今，丰特莱修道院不仅是重要的旅游景点与历史文化遗产，还会定期举办宗教文化活动、建筑艺术展览，传承西多会的文化与精神，让这座千年修道院重新焕发出生机与活力，成为历史与现代、宗教与人文交融的典范。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐游览路线（1.5-2小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  修道院入口 → 前庭广场 → 主教堂（Abbatial Church） → 回廊（Cloister） → 修士宿舍 → 西多会作坊（制铁坊、酿酒坊） → 修道院花园 → 出口（可前往周边田园步道）
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>可从停车场步行至修道院入口，全程步行游览，路线平缓，兼顾宗教遗迹、建筑景观与田园风光，可租赁语音导览（支持多语言），也可跟随当地导览团（约1小时，提供英、法双语服务，需提前预约）
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 修道院入口</h4>
                  <p className="text-sm text-gray-700 mb-2">从停车场步行5分钟即可抵达修道院入口，入口处是一座古朴的石砌拱门，由当地石材砌成，简洁庄重，彰显着西多会"简朴"的理念。</p>
                  <div className="text-xs text-gray-500">🚶 步行5分钟 | 🏛️ 石砌拱门</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 前庭广场</h4>
                  <p className="text-sm text-gray-700 mb-2">进入入口后，便是前庭广场，广场地面由鹅卵石铺成，周边环绕着低矮的石砌围墙，广场中央矗立着一座小型石质纪念碑。</p>
                  <div className="text-xs text-gray-500">🏛️ 前庭广场 | 🌳 古树环绕</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 主教堂（Abbatial Church）</h4>
                  <p className="text-sm text-gray-700 mb-2">从前庭广场步行2分钟即可抵达主教堂，这是修道院的核心建筑，始建于1140年，采用纯罗马式建筑风格，石质墙体高大厚重。</p>
                  <div className="text-xs text-gray-500">⛪ 1140年主教堂 | 🎨 罗马式建筑</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 回廊（Cloister）</h4>
                  <p className="text-sm text-gray-700 mb-2">主教堂西侧便是回廊，始建于12世纪中期，是西多会修道院的标志性景观之一，由石质立柱与拱券构成，形成环绕式的走廊。</p>
                  <div className="text-xs text-gray-500">🧱 12世纪回廊 | 🌅 光影交错</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 修士宿舍</h4>
                  <p className="text-sm text-gray-700 mb-2">回廊北侧便是修士宿舍，始建于12世纪，是修士们居住、修行的场所，建筑为两层石砌结构，屋顶覆盖着灰色瓦片。</p>
                  <div className="text-xs text-gray-500">🏘️ 修士宿舍 | 📚 生活展示</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 西多会作坊（制铁坊、酿酒坊）</h4>
                  <p className="text-sm text-gray-700 mb-2">修士宿舍西侧便是西多会作坊，包括制铁坊与酿酒坊，始建于12世纪，是修士们开展手工业生产与自给自足的场所。</p>
                  <div className="text-xs text-gray-500">🔨 制铁酿酒 | 🏭 手工业展示</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">7. 修道院花园</h4>
                  <p className="text-sm text-gray-700 mb-2">作坊南侧便是修道院花园，是修士们劳作、冥想的场所，花园布局简洁，种植着蔬菜、草药与花卉。</p>
                  <div className="text-xs text-gray-500">🌿 修道院花园 | 🧘 冥想场所</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">8. 出口与周边田园步道</h4>
                  <p className="text-sm text-gray-700 mb-2">从花园步行3分钟即可抵达修道院出口，出口处设有纪念品商铺与休息区。出修道院后，可前往周边的田园步道。</p>
                  <div className="text-xs text-gray-500">🚪 修道院出口 | 🥾 田园步道</div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 修道院全景机位</h4>
                  <p className="text-sm text-gray-700">位于修道院入口处的石砌拱门外，采用平视角度，拍摄修道院的整体轮廓，清晰捕捉石砌建筑群的布局与罗马式建筑的简洁庄重。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 主教堂正面特写机位</h4>
                  <p className="text-sm text-gray-700">位于主教堂正门前，采用平视角度，拍摄主教堂的正面全貌，聚焦石质墙体、半圆形拱顶与简洁的门窗，清晰捕捉罗马式建筑的细节。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 回廊光影机位</h4>
                  <p className="text-sm text-gray-700">位于回廊中段，采用侧拍角度，拍摄回廊的石质立柱、拱券与地面的光影，利用阳光的光影交错，凸显回廊的线条美与静谧氛围。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 修道院花园人文机位</h4>
                  <p className="text-sm text-gray-700">位于修道院花园内，采用平视或俯拍角度，拍摄花园的植被、石凳与过往的游客，捕捉修道院的静谧氛围与人文气息。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 作坊复古机位</h4>
                  <p className="text-sm text-gray-700">位于西多会作坊内，采用平视角度，拍摄中世纪的制铁工具、酿酒设备，捕捉手工业生产的复古氛围，凸显修道院的历史底蕴。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 田园同框机位</h4>
                  <p className="text-sm text-gray-700">位于修道院出口附近的田园步道旁，采用平视角度，将修道院的石砌屋顶、回廊与周边的农田、树林融为一体，展现修道院与自然的和谐之美。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照注意事项</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 游览修道院时，禁止攀爬石质建筑、刻画墙体，避免损坏文物</li>
                <li>• 主教堂内禁止大声喧哗，拍摄时禁止使用闪光灯，避免损坏宗教壁画与雕像</li>
                <li>• 禁止在回廊、花园内追逐打闹，注意脚下安全</li>
                <li>• 尊重宗教习俗，不随意触碰宗教器物</li>
                <li>• 遵守景区规定，共同保护历史遗迹与景区环境，不随意丢弃垃圾</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">蒙巴尔老城（Vieux Montbard）</h4>
                <p className="text-sm text-gray-700 mb-2">距离修道院约4.2公里，驾车10分钟可达，乘坐巴士15分钟可达，是蒙巴尔市的历史核心区域，保留着完整的中世纪与文艺复兴时期的建筑。</p>
                <div className="text-xs text-gray-500">🚗 车程10分钟 | 🏛️ 中世纪建筑</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">第戎老城（Vieux Dijon）</h4>
                <p className="text-sm text-gray-700 mb-2">距离修道院约50公里，驾车45分钟可达，乘坐巴士1小时可达，是勃艮第大区的首府，被联合国教科文组织列为世界文化遗产。</p>
                <div className="text-xs text-gray-500">🚗 车程45分钟 | 🏛️ 世界文化遗产</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">勃艮第葡萄酒庄园（Burgundy Wine Estates）</h4>
                <p className="text-sm text-gray-700 mb-2">距离修道院约30公里，驾车30分钟可达，是勃艮第葡萄酒的核心产区之一，分布着众多古老的葡萄酒庄园，种植着优质的葡萄品种。</p>
                <div className="text-xs text-gray-500">🚗 车程30分钟 | 🍷 葡萄酒文化</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">莫尔旺自然公园（Parc Naturel Régional du Morvan）</h4>
                <p className="text-sm text-gray-700 mb-2">距离修道院约40公里，驾车40分钟可达，是法国中部重要的自然保护区，公园内有连绵的山丘、茂密的树林、清澈的湖泊与蜿蜒的溪流。</p>
                <div className="text-xs text-gray-500">🚗 车程40分钟 | 🏞️ 自然保护区</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">蒙巴尔老城区</h4>
                  <p className="text-sm text-blue-800">优先选择蒙巴尔老城区的住宿，步行可达老城核心景点、商铺与咖啡馆，交通便捷，同时能深度感受蒙巴尔的人文氛围，距离修道院仅10分钟车程。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">修道院周边乡村</h4>
                  <p className="text-sm text-green-800">如果喜欢安静，可选择修道院周边的乡村民宿，环境静谧，能欣赏到田园风光，步行即可抵达修道院，适合追求静谧体验的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">交通枢纽附近</h4>
                  <p className="text-sm text-yellow-800">若计划游览周边景点（如第戎老城、葡萄酒庄园），可选择靠近高速公路入口或巴士站的住宿，交通更便捷，便于驾车或乘坐巴士前往周边景点。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">可选择蒙巴尔老城区或修道院周边的青年旅社，普遍干净整洁、价格实惠，大多步行可达公交站，部分提供公共厨房，适合背包客与预算有限的游客。</p>
                  <div className="text-xs text-gray-500">💰 预算友好 | 🎒 背包客首选</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中档三星级酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于蒙巴尔老城区或交通便利的区域，房间舒适，部分设有餐厅，提供当地传统美食与勃艮第葡萄酒，适合家庭与情侣。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭出游</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高档四星级以上酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于蒙巴尔近郊的山丘或田园之中，环境优雅，房间装饰精美，部分可欣赏到田园风光或修道院远景，设有露台与高级餐厅，适合追求品质的游客。</p>
                  <div className="text-xs text-gray-500">🏰 豪华住宿 | 🏞️ 自然景观</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">特色乡村民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">可选择修道院周边的乡村石屋民宿，装修古朴，充满乡村风情，常提供当地特色早餐，部分民宿还可体验葡萄酒品鉴，适合喜欢体验当地生活的游客。</p>
                  <div className="text-xs text-gray-500">🏡 石屋民宿 | 🍷 葡萄酒品鉴</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季预订：</strong>丰特莱修道院的旅游旺季为4-10月（春秋季气候适宜，景色优美），游客较多，建议提前1-2个月预订住宿</p>
                    <p className="mb-2"><strong>淡季优惠：</strong>冬季游客较少，可提前1-2周预订，部分住宿会推出优惠活动，性价比更高</p>
                    <p><strong>特色服务：</strong>部分住宿提供丰特莱修道院门票折扣券，可节省游览成本</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>法国的酒店与民宿通常不提供一次性洗漱用品，需自备牙刷、牙膏、毛巾等</p>
                    <p className="mb-2"><strong>电器准备：</strong>当地电压为230V，插头为Type F型，与德国、比利时一致，可提前准备转换插头</p>
                    <p><strong>特殊注意：</strong>夏季法国中部气候温和，无需空调，早晚温差较大，建议携带薄外套；冬季气温较低，部分乡村民宿可能采用壁炉供暖</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                丰特莱修道院，这座矗立在法国中部乡村山谷中的千年修道院，承载着西多会的宗教精神与中世纪的历史记忆，融合了罗马式建筑的简洁庄严、田园风光的静谧清幽与宗教文化的厚重底蕴。在这里，你可以漫步古朴的回廊，触摸中世纪建筑的纹理；静坐修道院花园，感受禅意与宁静；穿梭于修士宿舍与作坊，探寻千年修行生活的痕迹；远眺周边田园，享受远离喧嚣的惬意。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                希望这份攻略能帮助你更好地游览丰特莱修道院，深入了解法国中世纪的宗教文化与建筑艺术，留下一段难忘的法国乡村旅行记忆。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在千年修道院与法国乡村田园的交融中，邂逅一段跨越时空的宗教文化之旅。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}