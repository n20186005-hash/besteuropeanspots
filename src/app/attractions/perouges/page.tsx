import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '佩鲁日古城・Pérouges・法国・佩鲁日 | 最佳欧洲景点',
  description: '探索佩鲁日古城，法国保存最完整的中世纪古城之一，被誉为"中世纪的活化石"，以鹅卵石街巷、石砌民居与浓郁的中世纪氛围闻名。',
}

export default function PerougesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/france' },
            { label: 'Pérouges', href: '/destinations/france' },
            { label: '佩鲁日古城', href: '/attractions/perouges' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">佩鲁日古城・Pérouges・法国・佩鲁日</h1>
          <p className="text-lg text-gray-600 mb-6">
            佩鲁日古城是法国保存最完整的中世纪古城之一，被誉为"中世纪的活化石"，以鹅卵石街巷、石砌民居与浓郁的中世纪氛围闻名，兼具历史底蕴与田园风情，是远离喧嚣、感受法国中世纪乡村生活的绝佳去处，也是众多影视剧组的取景地。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              佩鲁日古城是法国标志性中世纪古城，坐落于安省乡村山丘之上，保留着完整的中世纪石砌建筑、鹅卵石街巷与古城墙。这里远离都市喧嚣，兼具古朴静谧的乡村气息与厚重的历史底蕴，石板路蜿蜒曲折，石屋错落有致，留存着中世纪的教堂、广场与商铺，是感受法国中世纪人文风情、探寻历史遗迹的必访胜地，也是体验慢生活的理想之地。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="佩鲁日古城" />
                <InfoRow label="英文名称" value="Pérouges" />
                <InfoRow label="国家" value="法国（France）" />
                <InfoRow label="城市" value="佩鲁日（Pérouges）" />
                <InfoRow label="所属区域" value="法国奥弗涅-罗讷-阿尔卑斯大区安省" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="法国保存最完整的中世纪古城之一" />
                <InfoRow label="核心特色" value='被誉为"中世纪的活化石"' />
                <InfoRow label="文化价值" value="以鹅卵石街巷、石砌民居闻名" />
                <InfoRow label="建筑价值" value="完整的中世纪石砌建筑群" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="古城全天开放；博物馆淡季10:00-16:00，旺季9:30-17:30" />
              <InfoRow label="门票价格" value="古城免费；博物馆成人9欧元，青少年6欧元，儿童4欧元" />
              <InfoRow label="地址" value="Pérouges, 01210 Pérouges, France" />
              <InfoRow label="交通方式" value="从里昂乘巴士约40分钟；从布尔日乘巴士约1.5小时" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                佩鲁日古城的历史可追溯至公元前4世纪，最初是高卢人的定居点，因地处山丘之上，地势平缓且视野开阔，逐渐发展为村落，历经千年变迁，见证了法国中世纪的兴衰、政权更迭与文化融合，从普通村落逐步发展为兼具军事防御、商业贸易与乡村生活的中世纪古城，最终成为法国重要的历史文化遗产。
              </p>
              <p>
                公元前4世纪至公元5世纪，是古城的初创与发展期。高卢人在此定居，利用当地丰富的石材资源，修建了简易的石砌房屋与防御围栏，形成了最初的村落雏形。罗马帝国统治时期，这里成为重要的乡村聚居地，罗马人扩建了村落，铺设了简易的石板路，促进了当地的农业与手工业发展，村落逐渐形成一定规模，成为周边地区的农产品交易小中心，这一时期，当地的石砌建筑技艺开始兴起，为后续古城的发展奠定了基础。
              </p>
              <p>
                6世纪至15世纪，佩鲁日古城进入鼎盛时期，成为中世纪法国乡村地区最具影响力的聚居地之一。6世纪，随着法兰克王国的崛起，佩鲁日成为当地贵族的领地，贵族出资加固了村落的防御设施，修建了古城墙与城门，将村落改造为兼具居住与防御功能的古城。这一时期，古城内修建了大量石砌民居、教堂、商铺与广场，形成了完整的中世纪街巷格局，手工业与商业逐渐繁荣，纺织、制鞋、酿酒等行业兴起，成为周边地区的商业与手工业中心，吸引了大量商人与手工业者前来定居，人口数量大幅增长。
              </p>
              <p>
                16世纪至18世纪，古城历经动荡与衰落。16世纪，法国宗教战争爆发，佩鲁日古城因地处战略要道，成为双方争夺的焦点，古城墙与部分建筑遭到严重破坏，人口大量流失，商业与手工业逐渐萧条。17世纪，法国王权逐渐集中，周边城市兴起，佩鲁日的商业地位逐渐下降，古城逐渐沦为普通乡村聚居地，许多石砌建筑因年久失修而破损。法国大革命爆发后，古城进一步遭到冲击，部分贵族建筑被损毁，贵族逃离，古城逐渐沉寂，成为以农业为主的普通村落。
              </p>
              <p>
                19世纪至今，佩鲁日古城迎来复兴与新生。19世纪末，法国政府开始重视历史文化遗产保护，将佩鲁日古城列为国家级历史遗迹，组织人员对受损的古城墙、石砌建筑进行修复，严格保留了中世纪的建筑原貌与街巷格局。20世纪初，佩鲁日古城因其独特的中世纪风貌，成为众多影视剧组的取景地，逐渐被世人熟知，吸引了大量游客前来参观。如今，佩鲁日古城不仅是法国重要的历史文化遗产与旅游景点，仍保留着浓郁的中世纪乡村生活气息，当地居民依旧在古城内生活、劳作，让这座千年古城充满生机与活力，成为历史与现代、人文与自然交融的典范。此外，这里还是法国传统美食"佩鲁日奶油饼"的发源地，承载着当地独特的饮食文化记忆。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐游览路线（2-2.5小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  古城入口 → 古城墙（Porte de Lyon） → 主街巷（Rue Principale） → 佩鲁日古城博物馆 → 中世纪教堂（Église Saint-Pierre） → 古城广场（Place du Tilleul） → 乡村观景台 → 古城出口（可前往周边乡村步道）
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>可从古城入口停车场出发，全程步行游览，路线舒缓，兼顾历史遗迹、人文景观与乡村风情，可租赁语音导览（支持多语言），也可跟随当地导览团（约1小时，提供英、法双语服务，需提前预约）
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 古城入口</h4>
                  <p className="text-sm text-gray-700 mb-2">从停车场步行3分钟即可抵达古城入口，入口处是一座古朴的石砌城门（Porte de Lyon），城门由巨大的石块砌成，上方雕刻着古城的名称与历史铭文。</p>
                  <div className="text-xs text-gray-500">🚶 步行3分钟 | 🏰 石砌城门</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 古城墙（Porte de Lyon）</h4>
                  <p className="text-sm text-gray-700 mb-2">入口处的古城墙是佩鲁日古城的标志性景观之一，始建于12世纪，由巨大的石材砌成，墙体高大厚重，设有瞭望孔与城门。</p>
                  <div className="text-xs text-gray-500">🧱 12世纪古城墙 | 🛡️ 中世纪防御</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 主街巷（Rue Principale）</h4>
                  <p className="text-sm text-gray-700 mb-2">进入城门后，便是古城的主街巷，街巷由鹅卵石铺成，蜿蜒曲折，两侧是清一色的石砌民居，墙体由当地石材砌成。</p>
                  <div className="text-xs text-gray-500">🛤️ 鹅卵石街巷 | 🏘️ 石砌民居</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 佩鲁日古城博物馆</h4>
                  <p className="text-sm text-gray-700 mb-2">沿主街巷步行8分钟即可抵达佩鲁日古城博物馆，博物馆位于一座13世纪的石砌贵族宅邸内，保留着完整的中世纪建筑风貌。</p>
                  <div className="text-xs text-gray-500">🏛️ 13世纪宅邸 | 📚 历史文化</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 中世纪教堂（Église Saint-Pierre）</h4>
                  <p className="text-sm text-gray-700 mb-2">从博物馆步行5分钟即可抵达中世纪教堂，教堂始建于11世纪，采用罗马式建筑风格，石质墙体厚重，半圆拱券设计。</p>
                  <div className="text-xs text-gray-500">⛪ 11世纪教堂 | 🎨 罗马式建筑</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 古城广场（Place du Tilleul）</h4>
                  <p className="text-sm text-gray-700 mb-2">从教堂步行3分钟即可抵达古城广场，广场是古城的核心区域，地面由鹅卵石铺成，周边环绕着石质建筑、咖啡馆与商铺。</p>
                  <div className="text-xs text-gray-500">🏛️ 中心广场 | 🌳 千年椴树</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">7. 乡村观景台</h4>
                  <p className="text-sm text-gray-700 mb-2">从广场步行6分钟即可抵达乡村观景台，这里位于古城边缘，是欣赏周边乡村风光的绝佳地点，可远眺连绵的山丘与农田。</p>
                  <div className="text-xs text-gray-500">🌅 观景台 | 🏞️ 田园风光</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">8. 古城出口与周边乡村步道</h4>
                  <p className="text-sm text-gray-700 mb-2">从观景台步行4分钟即可抵达古城出口，出口处设有纪念品商铺与停车场。出古城后，可前往周边的乡村步道。</p>
                  <div className="text-xs text-gray-500">🛍️ 纪念品 | 🥾 乡村步道</div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 古城墙全景机位</h4>
                  <p className="text-sm text-gray-700">位于古城入口处的古城墙旁，采用仰拍或平视角度，拍摄古城墙的全貌与城门，清晰捕捉石砌墙体的纹理与中世纪防御建筑的厚重感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 主街巷纵深感机位</h4>
                  <p className="text-sm text-gray-700">位于主街巷中段，采用侧拍角度，拍摄蜿蜒的鹅卵石街巷与两侧的石砌民居，利用街巷的线条感与石质建筑的对称美。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 博物馆建筑特写机位</h4>
                  <p className="text-sm text-gray-700">位于佩鲁日古城博物馆正门前，采用平视角度，拍摄博物馆的石砌墙体、门窗装饰与屋顶结构，清晰捕捉中世纪贵族宅邸的建筑细节。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 古城广场人文机位</h4>
                  <p className="text-sm text-gray-700">位于古城广场中央，采用平视或俯拍角度，拍摄广场上的千年椴树、石砌建筑与过往的游客、当地居民，捕捉古城的人文气息。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 乡村田园同框机位</h4>
                  <p className="text-sm text-gray-700">位于乡村观景台，采用平视角度，将古城的石砌屋顶、蜿蜒街巷与周边的乡村田园、山丘融为一体，展现古城与自然的和谐之美。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 教堂细节机位</h4>
                  <p className="text-sm text-gray-700">位于中世纪教堂正门前，采用平视角度，拍摄教堂的罗马式拱券、彩绘玻璃窗与石质墙体，清晰捕捉宗教建筑的细节与艺术魅力。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照注意事项</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 游览古城时，禁止攀爬古城墙、刻画石质建筑，避免损坏文物</li>
                <li>• 教堂内禁止大声喧哗，拍摄时禁止使用闪光灯</li>
                <li>• 禁止在鹅卵石街巷内追逐打闹，注意脚下安全，避免滑倒</li>
                <li>• 尊重当地居民的生活，不随意拍摄居民住宅与私人区域</li>
                <li>• 遵守景区规定，共同保护历史遗迹与景区环境，不随意丢弃垃圾</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">里昂老城（Vieux Lyon）</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城约30公里，驾车35分钟可达，乘坐巴士40分钟可达，是法国保存最完整的老城之一，被联合国教科文组织列为世界文化遗产。里昂老城保留着完整的中世纪与文艺复兴时期的建筑。</p>
                <div className="text-xs text-gray-500">🚗 车程35分钟 | 🏛️ 世界文化遗产</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">安纳西湖（Lac d'Annecy）</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城约80公里，驾车1小时可达，是法国第三大湖，被誉为"欧洲最清澈的湖泊"。安纳西湖湖水清澈见底，周边环绕着连绵的山丘与古朴的小镇。</p>
                <div className="text-xs text-gray-500">🚗 车程1小时 | 🏞️ 清澈湖泊</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">布尔日古城（Bourges）</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城约80公里，驾车1.5小时可达，乘坐巴士2小时可达，是法国中部重要的历史文化名城，保留着完整的中世纪城墙、教堂与街巷。布尔日大教堂是世界文化遗产。</p>
                <div className="text-xs text-gray-500">🚗 车程1.5小时 | ⛪ 哥特式大教堂</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">多勒乡村步道（Sentier Rural de Dole）</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城约20公里，驾车25分钟可达，是一条全长10公里的乡村步道，蜿蜒穿过农田、树林与乡村村落，沿途风景优美，充满田园气息。</p>
                <div className="text-xs text-gray-500">🚗 车程25分钟 | 🥾 乡村步道</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">古城内住宿</h4>
                  <p className="text-sm text-blue-800">优先选择古城内的住宿，步行可达古城核心景点、主街巷与博物馆，方便游览，同时能深度感受中世纪古城的古朴氛围，古城内的住宿多为石砌民居改造。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">古城边缘或周边乡村</h4>
                  <p className="text-sm text-green-800">如果喜欢安静，可选择古城边缘或周边的乡村民宿，环境静谧，能欣赏到乡村田园风光，适合休息。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">古城入口或停车场附近</h4>
                  <p className="text-sm text-yellow-800">若计划游览周边景点（如里昂老城、安纳西湖），可选择靠近古城入口或停车场的住宿，交通更便捷。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">可选择古城内或周边的青年旅社，普遍干净整洁、价格实惠，大多步行可达核心景点，部分提供公共厨房，适合背包客与预算有限的游客。</p>
                  <div className="text-xs text-gray-500">💰 预算友好 | 🎒 背包客首选</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中档三星级酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">地理位置优越，房间舒适，部分设有餐厅，提供当地传统美食，适合家庭与情侣，性价比高，设施完善。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭出游</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高档四星级以上酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于古城周边的山丘之上，环境优雅，房间装饰精美，部分可欣赏到古城全景或田园风光，设有露台与高级餐厅，适合追求品质的游客。</p>
                  <div className="text-xs text-gray-500">🏰 豪华住宿 | 🏞️ 自然景观</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">特色民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">可选择古城内的石砌民居改造的房源，装修古朴，充满中世纪乡村风情，常提供当地特色早餐，充满乡土气息，适合喜欢体验当地生活的游客。</p>
                  <div className="text-xs text-gray-500">🏡 石砌民居 | 🍳 特色早餐</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季预订：</strong>佩鲁日古城的旅游旺季为4-10月（春秋季气候适宜，夏季凉爽），游客较多，建议提前1-2个月预订住宿</p>
                    <p className="mb-2"><strong>淡季优惠：</strong>冬季游客较少，可提前1-2周预订，部分住宿会推出优惠活动，性价比更高</p>
                    <p><strong>特色服务：</strong>部分住宿提供佩鲁日古城博物馆门票折扣券，可节省游览成本</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>法国的酒店与民宿通常不提供一次性洗漱用品，需自备牙刷、牙膏、毛巾等</p>
                    <p className="mb-2"><strong>电器准备：</strong>当地电压为230V，插头为Type F型，与德国、比利时一致，可提前准备转换插头</p>
                    <p><strong>特殊注意：</strong>夏季法国东部气候凉爽，无需空调，冬季气温较低，部分乡村民宿可能采用壁炉供暖，可提前确认</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                佩鲁日古城，这座矗立在法国东部乡村山丘上的中世纪古城，承载着千年的历史记忆，融合了石砌建筑的古朴、乡村田园的静谧与人文风情的厚重。在这里，你可以漫步鹅卵石街巷，触摸中世纪建筑的纹理；驻足古城墙之上，远眺乡村田园的美景；穿梭博物馆之中，探寻千年的历史变迁；静坐广场之上，品尝当地特色美食，感受慢生活的惬意。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                希望这份攻略能帮助你更好地游览佩鲁日古城，深入了解法国中世纪的历史与文化，留下一段难忘的法国乡村旅行记忆。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在千年古城与法国乡村田园的交融中，邂逅一段跨越时空的中世纪文化之旅。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}