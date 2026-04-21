import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奥尔维耶托古城・Orvieto・意大利・奥尔维耶托 | 最佳欧洲景点',
  description: '探索奥尔维耶托古城，意大利翁布里亚的悬崖上的千年文明瑰宝，被誉为"悬崖上的珍珠"，以独特的悬崖地貌、精美的哥特式大教堂和深厚的历史底蕴闻名，承载着伊特鲁里亚至文艺复兴的多元文明。',
}

export default function OrvietoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '奥尔维耶托', href: '/destinations/italy' },
            { label: '奥尔维耶托古城', href: '/attractions/orvieto' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">奥尔维耶托古城・Orvieto・意大利・奥尔维耶托</h1>
          <p className="text-lg text-gray-600 mb-6">
            奥尔维耶托古城是意大利翁布里亚的千年瑰宝，坐落于火山凝灰岩悬崖之上，承载着伊特鲁里亚至文艺复兴的多元文明。古城核心看点为哥特式大教堂、圣帕特里克井与伊特鲁里亚石窟遗迹，兼具自然奇观与人文底蕴，街巷蜿蜒古朴，建筑错落有致，既能俯瞰周边田园风光，又能探寻千年历史痕迹，是感受翁布里亚文化与中世纪风情的绝佳去处。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              奥尔维耶托古城是意大利翁布里亚的千年瑰宝，坐落于火山凝灰岩悬崖之上，承载着伊特鲁里亚至文艺复兴的多元文明。古城核心看点为哥特式大教堂、圣帕特里克井与伊特鲁里亚石窟遗迹，兼具自然奇观与人文底蕴，街巷蜿蜒古朴，建筑错落有致，既能俯瞰周边田园风光，又能探寻千年历史痕迹，是感受翁布里亚文化与中世纪风情的绝佳去处。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="奥尔维耶托古城" />
                <InfoRow label="英文名称" value="Orvieto" />
                <InfoRow label="国家" value="意大利（Italy）" />
                <InfoRow label="城市" value="奥尔维耶托（Orvieto）" />
                <InfoRow label="所属区域" value="意大利翁布里亚大区特尔尼省" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="千年古城、多元文明交汇地" />
                <InfoRow label="核心特色" value="悬崖地貌、哥特式大教堂" />
                <InfoRow label="建筑价值" value="伊特鲁里亚石窟、中世纪建筑" />
                <InfoRow label="自然价值" value="火山凝灰岩悬崖、田园风光" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="古城整体全天开放，核心景点夏季9:00-19:00，冬季9:00-17:00；圣帕特里克井每周一闭馆" />
              <InfoRow label="门票价格" value="古城公共区域免费开放，大教堂珍宝馆联票8欧元，圣帕特里克井6欧元，伊特鲁里亚石窟5欧元" />
              <InfoRow label="地址" value="Piazza del Duomo, 05018 Orvieto TR, Italy" />
              <InfoRow label="交通方式" value="从罗马乘火车直达约2小时8分钟；从佛罗伦萨乘长途巴士约2小时；可乘坐缆车上山" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                奥尔维耶托的历史可追溯至公元前8世纪的伊特鲁里亚时期，作为伊特鲁里亚文明的重要中心，当时被称为"Velzna"，是伊特鲁里亚人重要的定居点与宗教圣地。考古发现证实，这一时期的奥尔维耶托已形成规模较大的聚落，留存有大量伊特鲁里亚古墓、石窟与文物，其中戈利尼古墓（Golini Tomb）与坎尼切拉墓地（Cannicella Necropolis）最为著名，古墓内的壁画生动展现了伊特鲁里亚贵族的葬礼场景与生活风貌，见证了当时发达的文明与复杂的民族交融。
              </p>
              <p>
                公元前3世纪，奥尔维耶托被古罗马帝国吞并，成为古罗马行省的重要城镇，因其坐落于高耸的火山凝灰岩悬崖之上，地势险要、易守难攻，成为连接罗马与北部地区的重要交通要塞与防御重镇。古罗马时期，这里修建了规整的道路、公共建筑与防御工事，遗址内至今仍保留着古罗马时期的道路遗迹与建筑地基，当时的奥尔维耶托以农业与手工业为生，逐渐发展为区域内的商业集散地。
              </p>
              <p>
                西罗马帝国灭亡后，奥尔维耶托先后被哥特人、伦巴第人统治，逐渐发展为小型宗教聚落，基督教文化开始在此传播，修建了简易的教堂与修道院。中世纪时期，奥尔维耶托凭借险要的地势，成为翁布里亚地区的重要城邦，建立了自治公社，由执政官与主教共同治理，这一时期的建筑多以防御风格为主，石砌房屋、狭窄街巷与坚固的城墙，构成了古城早期的风貌，同时，当地的陶瓷制作工艺开始萌芽，成为区域内知名的陶瓷产地。
              </p>
              <p>
                13世纪至15世纪，奥尔维耶托迎来了发展的黄金时期，与教皇关系密切，多位教皇曾在此居住，修建了三座教皇宫殿，使古城成为重要的宗教中心。这一时期，奥尔维耶托大教堂开始修建，融合了哥特式与文艺复兴风格，耗时近300年才完工，成为古城的标志性建筑。同时，古城的商业与手工业持续繁荣，陶瓷、纺织与葡萄酒产业迅速发展，成为翁布里亚地区的经济重镇，人口在13世纪末达到约3万人，是当时翁布里亚地区规模较大的城市之一。文艺复兴时期，奥尔维耶托成为人文主义思想的传播地之一，众多艺术家、建筑师在此留下足迹，对古城的建筑与艺术发展产生了深远影响。圣帕特里克井便是这一时期的杰作，为解决古城的饮水问题，教皇克莱门特七世下令修建，井深达62米，设计精巧，成为当时工程技术的典范。意大利统一后，奥尔维耶托依然是翁布里亚地区的重要城市，重点保护历史遗迹与古建筑，陶瓷产业与旅游业逐渐成为当地的支柱产业。近代以来，奥尔维耶托因其独特的悬崖地貌、完整的历史遗迹与精美的建筑，吸引了全球各地的游客，成为翁布里亚大区最受欢迎的旅游胜地之一。如今，古城依然保留着千年以来的风貌，伊特鲁里亚的石窟、古罗马的遗迹、中世纪的街巷与文艺复兴的建筑交相辉映，成为一座"活态的千年博物馆"，承载着意大利多元的历史与文化，向世人展现着悬崖古城的独特魅力。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（2-3小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从古城山下的缆车站出发，乘坐缆车上山，抵达古城入口后，前往游客中心领取游览地图，随后直奔大教堂广场（Piazza del Duomo），这里是古城的核心，广场中央矗立着奥尔维耶托大教堂，周边环绕着复古商铺、露天咖啡馆与市政建筑，可驻足休憩，感受古城的静谧氛围，重点欣赏大教堂的哥特式外观与精美的雕塑。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  随后进入奥尔维耶托大教堂，重点参观教堂内部的礼拜堂与珍宝馆，欣赏文艺复兴时期的壁画、彩绘玻璃与珍贵文物，感受宗教文化与艺术美学的交融，尤其是教堂内的《最后的审判》壁画，工艺精湛，极具艺术价值。之后前往圣帕特里克井，这座深度达62米的古井，设计精巧，螺旋状的楼梯蜿蜒而下，可沿着楼梯下行，感受古代工程技术的神奇，俯瞰古井的独特结构。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  最后前往古城西侧的悬崖观景台，这里是俯瞰周边风光的绝佳位置，远处是连绵的翁布里亚田园、成片的橄榄林与葡萄园，近处是古城的红瓦屋顶与悬崖峭壁，风景绝美，游览结束后，可在大教堂广场周边的纪念品商店，购买当地特色的陶瓷制品、橄榄油与葡萄酒，结束精华游览。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速体验古城精华
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（4-5小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加小众遗迹、美食体验与文化探秘，深入感受奥尔维耶托的历史、文化与民俗魅力。参观完悬崖观景台后，前往伊特鲁里亚石窟遗迹，这里是伊特鲁里亚人的古老居所与墓地，石窟内保留着完整的壁画与生活痕迹，可深入了解伊特鲁里亚文明的发展历程，重点参观戈利尼古墓与坎尼切拉墓地的复刻遗迹。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  随后预约古城深度导览（导览费10欧元/人，全程1.5小时，有意大利语、英语两种语言可选），跟随导览深入了解古城的历史变迁、建筑特色与隐藏的历史细节，重点参观未完全开放的教皇宫殿遗迹与中世纪民居，聆听教皇与古城的相关故事。中午前往古城内的特色餐厅，品尝翁布里亚传统美食，如黑松露意面、烤羊排、当地特色的奶酪拼盘与奥尔维耶托葡萄酒，体验翁布里亚的饮食文化，推荐尝试当地特色的陶瓷盛装美食，兼具观赏性与风味。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  下午前往古城东侧的中世纪城墙遗迹，这里曾是古城的防御屏障，如今仍能看到石砌城墙与城门遗迹，可沿着城墙漫步，俯瞰悬崖下的田园风光，想象昔日古城的防御格局。之后前往当地的陶瓷工坊，参观陶瓷制作过程，亲手体验简单的陶瓷绘制，感受当地的手工业文化。傍晚时分，返回大教堂广场，欣赏夕阳下的大教堂与古城全景，夕阳洒在教堂的穹顶上，搭配悬崖与田园风光，氛围感拉满，之后可在广场周边的露天咖啡馆小坐，品尝当地甜点与咖啡，感受古城的夜晚氛围，结束深度游览。
                </p>
                <div className="text-sm text-green-800 bg-green-100 p-3 rounded">
                  <strong>适合人群：</strong>喜欢细致游览的游客，想要深度体验古城文化
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 大教堂广场中央</h4>
                  <p className="text-sm text-gray-700">拍摄古城核心风貌与人文气息的绝佳机位，广场上的奥尔维耶托大教堂、复古商铺、露天咖啡馆与往来的游客，能捕捉到古城的静谧氛围与烟火气，教堂的哥特式尖顶与精美的雕塑的是画面的核心。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 圣帕特里克井内部</h4>
                  <p className="text-sm text-gray-700">这是拍摄独特工程奇观的绝佳机位，古井的螺旋状楼梯蜿蜒而下，光影斑驳，线条感极强，既能拍摄楼梯的延伸感，又能捕捉古井的深邃与精巧，展现古代工程技术的魅力。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 古城西侧悬崖观景台</h4>
                  <p className="text-sm text-gray-700">这是拍摄悬崖风光与田园全景的最佳机位，站在观景台上，可俯瞰整个奥尔维耶托古城的全貌，红瓦屋顶错落有致，哥特式教堂的尖顶脱颖而出，远处是连绵的翁布里亚丘陵、橄榄林与葡萄园。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 伊特鲁里亚石窟遗迹内</h4>
                  <p className="text-sm text-gray-700">这是拍摄历史氛围感照片的绝佳机位，石窟内的壁画、石砌墙壁与古老的遗迹，自带复古滤镜，能捕捉到伊特鲁里亚文明的神秘与厚重，适合拍摄细节照、人像照。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 古城蜿蜒石板街巷</h4>
                  <p className="text-sm text-gray-700">奥尔维耶托的石板街巷狭窄蜿蜒，两侧是石砌房屋、复古窗台与盛开的鲜花，部分街巷还保留着中世纪的拱门，自带静谧复古的氛围，是拍摄人像与氛围感照片的绝佳机位。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 古城外围橄榄园内</h4>
                  <p className="text-sm text-gray-700">奥尔维耶托周边环绕着大片的橄榄林，橄榄树枝叶繁茂，光影斑驳，搭配远处的悬崖与古城轮廓，是拍摄清新自然照片的绝佳场景，既能展现当地的农业文化，又能拍出治愈系照片。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 古城建筑以石砌的深灰色、红瓦为主，田园呈现出绿色与黄色的层次，建议穿搭浅色系、复古风格或大地色系衣物，形成和谐的色调</li>
                <li>• 拍摄教堂内部与石窟遗迹时，禁止使用闪光灯，避免损坏壁画与文物，尊重文物保护规定</li>
                <li>• 禁止攀爬悬崖、触摸文物，拍摄时避免影响其他游客游览与古城保护</li>
                <li>• 傍晚时分的光线最适合拍摄，可呈现出温暖的氛围感，凸显古城的静谧与悬崖的壮阔</li>
                <li>• 拍摄悬崖全景时，可使用广角视角，完整展现悬崖、古城与田园的绝美风光</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">佩鲁贾古城</h4>
                <p className="text-sm text-gray-700 mb-2">距离奥尔维耶托约40分钟车程，是翁布里亚大区的首府，保留着大量中世纪与文艺复兴时期的建筑，核心景点有佩鲁贾大教堂、市政厅、翁布里亚国家考古博物馆等。</p>
                <div className="text-xs text-gray-500">🚗 车程40分钟 | 🏛️ 翁布里亚首府</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">蒂沃利花园</h4>
                <p className="text-sm text-gray-700 mb-2">距离奥尔维耶托约1小时车程，是意大利最著名的园林之一，也是世界文化遗产，园内有精美的喷泉、雕塑与绿植，融合了文艺复兴与巴洛克风格。</p>
                <div className="text-xs text-gray-500">🚗 车程1小时 | 🌿 世界文化遗产</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">科托纳古城</h4>
                <p className="text-sm text-gray-700 mb-2">距离奥尔维耶托约1小时车程，是一座建在山顶的中世纪古城，保留着完整的古城墙、城堡与教堂，核心景点有科托纳城堡、主教堂、伊特鲁里亚博物馆等。</p>
                <div className="text-xs text-gray-500">🚗 车程1小时 | 🏰 山顶古城</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Bolsena湖</h4>
                <p className="text-sm text-gray-700 mb-2">距离奥尔维耶托约30分钟车程，是意大利中部最大的湖泊，湖水清澈，周边环绕着古朴的村落与田园，可进行划船、垂钓等休闲活动。</p>
                <div className="text-xs text-gray-500">🚗 车程30分钟 | 🌊 湖泊风光</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">阿西西古城</h4>
                <p className="text-sm text-gray-700 mb-2">距离奥尔维耶托约1.5小时车程，是圣方济各的故乡，保留着大量中世纪与文艺复兴时期的建筑，核心景点有圣方济各大教堂、阿西西古城墙等。</p>
                <div className="text-xs text-gray-500">🚗 车程1.5小时 | ⛪ 宗教文化</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">特尔尼市</h4>
                <p className="text-sm text-gray-700 mb-2">距离奥尔维耶托约20分钟车程，是翁布里亚大区的重要城市，核心景点有特尔尼瀑布、古罗马剧院遗迹等，瀑布气势磅礴，古罗马剧院遗迹保存完整。</p>
                <div className="text-xs text-gray-500">🚗 车程20分钟 | 🏞️ 自然景观</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">古城核心区域</h4>
                  <p className="text-sm text-blue-800">首选区域，距离大教堂广场、圣帕特里克井、伊特鲁里亚石窟等核心景点步行可达，周边有特色餐厅、咖啡馆与陶瓷工坊，既能便捷游览景点，又能感受古城的静谧氛围。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">悬崖景观住宿</h4>
                  <p className="text-sm text-green-800">位于古城西侧的悬崖边，距离观景平台较近，可俯瞰翁布里亚田园与悬崖风光，环境静谧舒适，适合休闲度假、喜欢自然风光的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">火车站附近</h4>
                  <p className="text-sm text-yellow-800">距离车站步行10分钟可达，周边有餐厅、便利店，生活便利，适合需要乘坐火车前往周边城市的游客。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端悬崖景观酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于古城西侧的悬崖边，融合翁布里亚建筑元素与现代设施，自带观景露台、游泳池与葡萄酒品鉴区，部分酒店由古老贵族宅邸改造而成。</p>
                  <div className="text-xs text-gray-500">🏰 悬崖体验 | 🏞️ 景观优美</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于古城附近或火车站周边，步行可达核心景点，房间干净整洁，设施齐全，部分酒店提供早餐与免费WiFi，部分酒店还提供陶瓷品鉴与葡萄酒品尝服务，价格约40-70欧元/晚。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭出游</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">多为家庭经营，风格温馨，部分民宿由古城民居改造而成，充满中世纪特色，还能感受当地居民的生活氛围，价格约20-40欧元/晚。</p>
                  <div className="text-xs text-gray-500">💰 预算友好 | 🏡 家庭氛围</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">适合独自旅行或预算有限的游客，价格实惠，通常位于交通便利的位置，可结识来自世界各地的旅行者，价格约12-20欧元/晚。</p>
                  <div className="text-xs text-gray-500">🎒 背包客首选 | 🌍 国际交流</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季（5-10月）：</strong>春季气候宜人，秋季是橄榄与葡萄收获季节，游客较多，建议提前1-2个月预订</p>
                    <p className="mb-2"><strong>淡季（11月至次年4月）：</strong>可提前1-2周预订，价格相对实惠</p>
                    <p><strong>特色套餐：</strong>部分高端酒店推出住宿+陶瓷体验、住宿+景点联票的优惠套餐</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>意大利住宿通常不提供洗漱用品，需自带牙刷、牙膏等</p>
                    <p className="mb-2"><strong>特殊注意：</strong>古城内部分酒店位于石板街巷旁，地势有坡度且无电梯，预订时可提前咨询</p>
                    <p><strong>注意事项：</strong>古城夜间非常安静，需保持安静；大部分酒店为无烟酒店</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                奥尔维耶托，这座矗立在火山凝灰岩悬崖上的千年古城，历经伊特鲁里亚、古罗马、中世纪与文艺复兴的岁月沉淀，既有悬崖地貌的壮阔奇观，又有哥特式建筑的精致典雅，更有深厚的历史底蕴与淳朴的民俗风情。在这里，你可以漫步在蜿蜒的石板街巷，触摸千年以来的建筑痕迹；可以走进大教堂与石窟，探寻多元文明的交融历程；可以登上悬崖观景台，俯瞰翁布里亚的田园风光，感受自然的诗意与宁静；可以品尝正宗的翁布里亚美食与葡萄酒，品味岁月的醇香与当地的烟火气。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                无论是独自旅行、情侣出游还是家庭度假，奥尔维耶托都能给你带来难忘的旅行体验，让你在静谧与壮阔的交融中，邂逅一段跨越千年的文明之约，爱上这座兼具自然之美与人文之韵的翁布里亚明珠。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在静谧与壮阔的交融中，邂逅一段跨越千年的文明之约。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}