import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '南锡斯坦尼斯拉斯广场・Place Stanislas・法国・南锡 | 最佳欧洲景点',
  description: '探索南锡斯坦尼斯拉斯广场，被联合国教科文组织列为世界文化遗产，以恢弘的巴洛克与洛可可融合风格建筑、精致的镀金铁门与中央雕像闻名。',
}

export default function PlaceStanislasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '南锡斯坦尼斯拉斯广场', href: '/attractions/place-stanislas' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">南锡斯坦尼斯拉斯广场・Place Stanislas・法国・南锡</h1>
          <p className="text-lg text-gray-600 mb-6">
            斯坦尼斯拉斯广场是南锡市的核心地标，被联合国教科文组织列为世界文化遗产，以恢弘的巴洛克与洛可可融合风格建筑、精致的镀金铁门与中央雕像闻名，是18世纪欧洲城市规划与建筑艺术的典范，兼具历史底蕴与浪漫气息，是感受法国东部人文风情、打卡复古美学的必访胜地。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              南锡斯坦尼斯拉斯广场是法国标志性公共广场，坐落于南锡市中心，始建于18世纪中期，是巴洛克与洛可可风格融合的建筑杰作。广场布局规整，中央矗立着斯坦尼斯瓦夫一世雕像，周边环绕着市政厅、歌剧院等精美建筑，搭配让·拉穆尔设计的镀金铁门，兼具恢弘气势与精致细节，是南锡的城市象征，也是感受欧洲古典建筑美学与历史氛围的绝佳去处。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="南锡斯坦尼斯拉斯广场" />
                <InfoRow label="英文名称" value="Place Stanislas" />
                <InfoRow label="国家" value="法国（France）" />
                <InfoRow label="城市" value="南锡（Nancy）" />
                <InfoRow label="所属区域" value="法国大东部大区默尔特-摩泽尔省" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="被联合国教科文组织列为世界文化遗产" />
                <InfoRow label="建筑风格" value="巴洛克与洛可可融合风格" />
                <InfoRow label="核心特色" value="精致的镀金铁门与中央雕像" />
                <InfoRow label="文化价值" value="18世纪欧洲城市规划与建筑艺术的典范" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="广场全天免费开放；周边建筑开放时间不同" />
              <InfoRow label="门票价格" value="广场免费；美术博物馆成人8欧元，青少年5欧元" />
              <InfoRow label="地址" value="Place Stanislas, 54000 Nancy, France" />
              <InfoRow label="交通方式" value="从南锡火车站乘巴士约10分钟；从机场出发约30分钟" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                斯坦尼斯拉斯广场的历史可追溯至18世纪中期，由前波兰国王、洛林公爵斯坦尼斯瓦夫一世下令修建，是18世纪欧洲城市规划与建筑艺术的杰出代表，历经近300年的变迁，见证了南锡市的发展与法国东部的历史更迭，从一座皇家广场逐步发展为南锡市的核心地标与市民休闲中心，最终成为全球闻名的世界文化遗产，保留着最完整的18世纪欧洲古典广场风貌。
              </p>
              <p>
                18世纪中期（1752-1756年），是广场的始建与鼎盛期。1735年，斯坦尼斯瓦夫一世被迫退位后，被法国国王路易十五封为洛林公爵，掌管洛林地区。为了改善南锡的城市面貌，彰显自身的统治地位，同时为市民提供一个公共休闲场所，他下令修建这座广场，并以自己的名字命名。广场由著名建筑师埃马纽埃尔·埃尔·德·科尔尼设计，耗时4年建成，总面积约13250平方米，长125米、宽106米，地面铺设浅赭色石块，以两条深色石块形成对角线十字图案，布局规整对称，尽显恢弘气势。这一时期，广场周边陆续建成市政厅、歌剧院、美术博物馆等建筑，搭配让·拉穆尔设计的镀金铁门与巴泰勒米·吉巴尔设计的精美喷泉，形成了建筑风格统一、气势恢宏的广场建筑群，成为当时欧洲最具代表性的公共广场之一，也让南锡获得了"金 gate之城"的美誉。
              </p>
              <p>
                18世纪末至19世纪，广场历经动荡与小幅变迁。1789年法国大革命爆发，斯坦尼斯瓦夫一世的雕像被推倒，广场曾一度被改名，周边部分建筑的装饰遭到损毁，镀金铁门也被部分拆除。19世纪初，拿破仑时期，广场恢复原名，政府对受损建筑与铁门进行了修复，重新竖立起斯坦尼斯瓦夫一世的雕像，广场再次成为南锡市的核心公共区域，成为市民集会、休闲、庆祝的重要场所。这一时期，广场周边的商业逐渐兴起，商铺、咖啡馆陆续开设，让广场兼具历史氛围与生活气息。
              </p>
              <p>
                20世纪至21世纪，广场迎来保护与复兴。20世纪初，法国政府将斯坦尼斯拉斯广场列为国家级历史遗迹，组织人员对广场建筑群进行系统性修复，严格遵循"修旧如旧"的原则，保留了18世纪的建筑原貌与布局。1983年，斯坦尼斯拉斯广场与周边的卡里耶尔广场、联盟广场一同被联合国教科文组织列为世界文化遗产，成为全球游客探寻欧洲古典建筑艺术的重要景点。2010年，广场经历了一次大规模修复，重新打磨地面石块、翻新镀金铁门，让这座古老广场重新焕发活力。如今，斯坦尼斯拉斯广场不仅是南锡市的标志性景点，更是市民日常休闲、举办节庆活动的重要场所，每年吸引着数百万游客前来参观，成为历史与现代、古典与时尚交融的典范。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐游览路线（1-1.5小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  广场东侧入口 → 镀金铁门（Portes d'Or） → 歌剧院（Opéra de Nancy） → 中央斯坦尼斯瓦夫一世雕像 → 市政厅（Hôtel de Ville） → 美术博物馆（Musée des Beaux-Arts） → 西北角喷泉 → 广场西侧出口（可前往卡里耶尔广场）
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>可从广场周边停车场或巴士站步行至广场入口，全程步行游览，路线平缓，兼顾建筑景观、历史遗迹与人文气息，可租赁语音导览（支持多语言），也可跟随当地导览团（约1小时，提供英、法双语服务，需提前预约）
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 广场东侧入口</h4>
                  <p className="text-sm text-gray-700 mb-2">从周边停车场或巴士站步行5分钟即可抵达广场东侧入口，入口处便是让·拉穆尔设计的镀金铁门，铁门造型精美，雕刻细致，镀金装饰在阳光下熠熠生辉。</p>
                  <div className="text-xs text-gray-500">🚶 步行5分钟 | 🏛️ 镀金铁门</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 镀金铁门（Portes d'Or）</h4>
                  <p className="text-sm text-gray-700 mb-2">广场东侧与西侧各有一座镀金铁门，由著名铁匠让·拉穆尔设计，是18世纪铁艺艺术的杰作。铁门采用洛可可风格，雕刻有精美的花卉、卷轴图案。</p>
                  <div className="text-xs text-gray-500">🎨 洛可可风格 | 🌟 镀金装饰</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 歌剧院（Opéra de Nancy）</h4>
                  <p className="text-sm text-gray-700 mb-2">位于广场东侧，紧邻镀金铁门，始建于18世纪中期，最初为主教宫，后改建为歌剧院，采用巴洛克与洛可可融合风格，建筑外观精美。</p>
                  <div className="text-xs text-gray-500">🎭 巴洛克与洛可可融合 | 🏛️ 建筑精美</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 中央斯坦尼斯瓦夫一世雕像</h4>
                  <p className="text-sm text-gray-700 mb-2">从歌剧院步行2分钟即可抵达广场中央，这里矗立着斯坦尼斯瓦夫一世的雕像，由乔治·雅克设计，雕像中的斯坦尼斯瓦夫一世身着长袍，左手持剑，右手指向北方。</p>
                  <div className="text-xs text-gray-500">🗿 中央雕像 | ⚔️ 历史纪念</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 市政厅（Hôtel de Ville）</h4>
                  <p className="text-sm text-gray-700 mb-2">位于广场南侧，占据了广场南侧的整个区域，是广场内最大的建筑，长98米，采用巴洛克风格，建筑立面装饰精美，设有高大的柱式与浮雕。</p>
                  <div className="text-xs text-gray-500">🏛️ 巴洛克风格 | 🏛️ 市政建筑</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 美术博物馆（Musée des Beaux-Arts）</h4>
                  <p className="text-sm text-gray-700 mb-2">位于广场西侧，最初为医学院，后改建为美术博物馆，采用古典主义建筑风格，外观简洁庄重，内部收藏着大量17至19世纪的绘画、雕塑作品。</p>
                  <div className="text-xs text-gray-500">🎨 古典主义建筑 | 🖼️ 艺术珍品</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">7. 西北角喷泉</h4>
                  <p className="text-sm text-gray-700 mb-2">位于广场西北角，由巴泰勒米·吉巴尔设计，喷泉造型精美，设有多个喷水口，周边装饰有精美的雕塑，泉水清澈，搭配周边的建筑。</p>
                  <div className="text-xs text-gray-500">⛲ 精美喷泉 | 🌊 清澈泉水</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">8. 广场西侧出口与卡里耶尔广场</h4>
                  <p className="text-sm text-gray-700 mb-2">从西北角喷泉步行3分钟即可抵达广场西侧出口，出口处连接着卡里耶尔广场，两个广场相连，形成了南锡市中心的古典建筑群。</p>
                  <div className="text-xs text-gray-500">🚪 广场出口 | 🏛️ 古典建筑群</div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 广场全景机位</h4>
                  <p className="text-sm text-gray-700">位于市政厅前的台阶上，采用俯拍角度，拍摄广场的整体布局，清晰捕捉广场的对称之美、浅赭色地面的对角线十字图案与周边的建筑群。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 镀金铁门特写机位</h4>
                  <p className="text-sm text-gray-700">位于广场东侧或西侧的镀金铁门前，采用平视角度，聚焦铁门的雕刻细节与镀金装饰，清晰捕捉洛可可风格的花卉、卷轴图案。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 中央雕像机位</h4>
                  <p className="text-sm text-gray-700">位于广场中央雕像旁，采用侧拍角度，拍摄雕像的全貌与广场的部分建筑，将雕像与周边的市政厅、歌剧院融为一体。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 歌剧院立面机位</h4>
                  <p className="text-sm text-gray-700">位于歌剧院正前方，采用平视角度，拍摄歌剧院的完整立面，聚焦建筑的浮雕、柱式与屋顶线条，清晰捕捉巴洛克与洛可可融合风格的建筑细节。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 喷泉人文机位</h4>
                  <p className="text-sm text-gray-700">位于广场西北角喷泉旁，采用平视或俯拍角度，拍摄喷泉的造型、流水与过往的游客、当地市民，捕捉广场的人文气息与灵动氛围。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 广场对角线机位</h4>
                  <p className="text-sm text-gray-700">位于广场东侧入口处，采用平视角度，沿广场的对角线拍摄，捕捉广场的纵深感与对称之美，将中央雕像、市政厅、美术博物馆串联起来。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照注意事项</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 游览广场时，禁止攀爬建筑、刻画墙体与镀金铁门，避免损坏文物</li>
                <li>• 禁止在雕像、喷泉旁追逐打闹，注意脚下安全</li>
                <li>• 尊重当地市民的休闲活动，不随意打扰他人</li>
                <li>• 拍摄市政厅、歌剧院内部时，需遵守相关规定，部分区域禁止拍摄</li>
                <li>• 遵守景区规定，共同保护历史遗迹与景区环境，不随意丢弃垃圾</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">卡里耶尔广场（Place de la Carrière）</h4>
                <p className="text-sm text-gray-700 mb-2">距离广场约100米，步行2分钟可达，与斯坦尼斯拉斯广场相连，是南锡市中心的另一处重要广场，采用对称式布局，中央有林荫大道。</p>
                <div className="text-xs text-gray-500">🚶 步行2分钟 | 🏛️ 对称式布局</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">苗圃公园（Jardin des Plantes）</h4>
                <p className="text-sm text-gray-700 mb-2">距离广场约638米，步行10分钟可达，是南锡最古老的公园之一，也是洛林地区知名的赏花踏青胜地，公园内种植着大量的花卉、树木与草药。</p>
                <div className="text-xs text-gray-500">🚶 步行10分钟 | 🌸 赏花踏青胜地</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">洛林博物馆（Musée Lorrain）</h4>
                <p className="text-sm text-gray-700 mb-2">距离广场约800米，步行12分钟可达，是南锡最重要的博物馆之一，收藏着大量洛林地区的历史文物、艺术品与民俗展品。</p>
                <div className="text-xs text-gray-500">🚶 步行12分钟 | 🏛️ 历史文化</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">南锡老城（Vieux Nancy）</h4>
                <p className="text-sm text-gray-700 mb-2">距离广场约1公里，步行15分钟可达，是南锡的历史核心区域，保留着完整的中世纪与文艺复兴时期的建筑，街巷蜿蜒曲折，石屋错落有致。</p>
                <div className="text-xs text-gray-500">🚶 步行15分钟 | 🏘️ 中世纪建筑</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">广场周边或南锡老城区</h4>
                  <p className="text-sm text-blue-800">优先选择广场周边或南锡老城区的住宿，步行可达广场、老城核心景点与周边商铺，交通便捷，同时能深度感受南锡的古典人文氛围。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">居民区住宿</h4>
                  <p className="text-sm text-green-800">如果喜欢安静，可选择距离广场1-2公里的居民区住宿，环境静谧，价格相对实惠，乘坐巴士10分钟即可抵达广场。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">交通枢纽附近</h4>
                  <p className="text-sm text-yellow-800">若计划游览周边景点（如苗圃公园、洛林博物馆），可选择靠近巴士站的住宿，交通更便捷，便于出行。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">可选择广场周边或老城区的青年旅社，普遍干净整洁、价格实惠，大多步行可达公交站，部分提供公共厨房，适合背包客与预算有限的游客。</p>
                  <div className="text-xs text-gray-500">💰 预算友好 | 🎒 背包客首选</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中档三星级酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于广场周边或交通便利的区域，房间舒适，部分设有餐厅，提供当地传统美食，适合家庭与情侣。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭出游</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高档四星级以上酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于广场周边的核心地段，环境优雅，房间装饰精美，部分可欣赏到广场全景，设有露台与高级餐厅，适合追求品质的游客。</p>
                  <div className="text-xs text-gray-500">🏰 豪华住宿 | 🏛️ 广场全景</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">特色法式民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">可选择老城区的石质民居改造的房源，装修古朴，充满法式风情，常提供当地特色早餐，适合喜欢体验当地生活的游客。</p>
                  <div className="text-xs text-gray-500">🏡 石质民居 | 🥐 法式早餐</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季预订：</strong>斯坦尼斯拉斯广场的旅游旺季为4-10月（春秋季气候适宜，景色优美），游客较多，建议提前1-2个月预订住宿</p>
                    <p className="mb-2"><strong>淡季优惠：</strong>冬季游客较少，可提前1-2周预订，部分住宿会推出优惠活动，性价比更高</p>
                    <p><strong>特色服务：</strong>部分住宿提供美术博物馆、歌剧院门票折扣券，可节省游览成本</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>法国的酒店与民宿通常不提供一次性洗漱用品，需自备牙刷、牙膏、毛巾等</p>
                    <p className="mb-2"><strong>电器准备：</strong>当地电压为230V，插头为Type F型，与德国、比利时一致，可提前准备转换插头</p>
                    <p><strong>特殊注意：</strong>夏季南锡气候温和，早晚温差较大，建议携带薄外套；冬季气温较低，住宿需确认是否有供暖设施</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                斯坦尼斯拉斯广场，这座矗立在南锡市中心的古典广场，承载着18世纪的建筑艺术与历史记忆，融合了巴洛克与洛可可风格的恢弘与精致，兼具历史底蕴与生活气息。在这里，你可以漫步广场，触摸镀金铁门的精致雕刻；驻足雕像前，追忆斯坦尼斯瓦夫一世的历史功绩；穿梭周边建筑，感受古典艺术的魅力；静坐咖啡馆，体验南锡的慢生活节奏。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                希望这份攻略能帮助你更好地游览斯坦尼斯拉斯广场，深入了解南锡的历史与文化，留下一段难忘的法国东部旅行记忆。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在巴洛克与洛可可交融的古典广场上，邂逅一段跨越时空的欧洲建筑艺术之旅。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}