import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '莫迪卡老城・Modica・意大利・莫迪卡 | 最佳欧洲景点',
  description: '探索莫迪卡老城，西西里巴洛克与巧克力的千年交融秘境，以巴洛克建筑为核心、以千年巧克力文化为特色，1997年被列为世界文化遗产，兼具历史厚重感、艺术精致感与市井烟火气。',
}

export default function ModicaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '莫迪卡老城', href: '/attractions/modica-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">莫迪卡老城・Modica・意大利・莫迪卡</h1>
          <p className="text-lg text-gray-600 mb-6">
            莫迪卡老城始建于古希腊时期，坐落于西西里岛东南部丘陵，是西西里巴洛克建筑的重要代表，也是世界闻名的"巧克力之城"。老城分为上城与下城，保留着大量1693年地震后重建的巴洛克风格教堂、宫殿与民居，建筑雕刻精美，融合古希腊、古罗马与阿拉伯文化印记，静谧古朴中藏着甜蜜烟火，是感受西西里历史、艺术与美食交融的核心地标。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              莫迪卡老城始建于古希腊时期，坐落于西西里岛东南部丘陵，是西西里巴洛克建筑的重要代表，也是世界闻名的"巧克力之城"。老城分为上城与下城，保留着大量1693年地震后重建的巴洛克风格教堂、宫殿与民居，建筑雕刻精美，融合古希腊、古罗马与阿拉伯文化印记，静谧古朴中藏着甜蜜烟火，是感受西西里历史、艺术与美食交融的核心地标。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="莫迪卡老城" />
                <InfoRow label="英文名称" value="Modica" />
                <InfoRow label="国家" value="意大利（Italy）" />
                <InfoRow label="城市" value="莫迪卡（Modica）" />
                <InfoRow label="所属区域" value="意大利西西里大区拉古萨省" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="世界文化遗产、巧克力之城" />
                <InfoRow label="核心特色" value="巴洛克建筑、千年巧克力文化" />
                <InfoRow label="文化价值" value="古希腊、古罗马、阿拉伯文化融合" />
                <InfoRow label="美食特色" value="传统巧克力制作工艺" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="老城整体全天开放，内部景点夏季9:00-18:30，冬季9:00-17:00；每周一闭馆" />
              <InfoRow label="门票价格" value="老城免费开放，莫迪卡大教堂钟楼5欧元，优惠票2.5欧元；12岁以下儿童免费" />
              <InfoRow label="地址" value="Centro Storico di Modica, 97015 Modica RG, Italy" />
              <InfoRow label="交通方式" value="从巴勒莫乘火车约2.5小时直达；从卡塔尼亚乘巴士约1.5小时直达" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                莫迪卡老城的历史可追溯至公元前8世纪，最初是古希腊人的定居点，因地处西西里岛东南部交通要道，是连接西西里岛南北与海陆的重要枢纽，逐渐发展为区域重镇。古希腊人在此修建了城墙、神庙与规整的街巷，奠定了老城的最初格局，如今在巧克力博物馆与老城遗址中，仍能看到当时的陶器、雕塑与生活遗迹，成为古希腊文明在西西里岛的重要见证。
              </p>
              <p>
                公元前3世纪，罗马人征服西西里岛，将莫迪卡纳入罗马共和国版图，莫迪卡成为罗马帝国在西西里岛的重要军事与商业据点。罗马人在古希腊建筑的基础上，进一步扩建城池，修建了剧院、浴场、水渠等公共建筑，完善了城市基础设施，此时的莫迪卡已成为西西里岛东南部的经济与文化中心，人口激增，商业繁荣，尤其以农产品贸易与手工业闻名，留下了深厚的古罗马文化印记。
              </p>
              <p>
                公元5世纪，罗马帝国衰落，莫迪卡先后被东哥特人、拜占庭人统治，这段时期，宗教文化逐渐兴起，当地修建了多座早期基督教教堂，将拜占庭建筑风格与当地传统建筑相结合，形成了独特的宗教建筑风貌。公元9世纪，阿拉伯人征服西西里岛，莫迪卡成为阿拉伯统治下的重要城市，阿拉伯人带来了先进的农业技术、建筑工艺与可可种植技术，对老城的街巷格局、建筑风格进行了改造，增添了阿拉伯文化元素，如今老城部分民居的门窗设计、庭院布局仍能看到阿拉伯风格的痕迹，而可可的引入，也为莫迪卡巧克力文化的诞生奠定了基础。
              </p>
              <p>
                11世纪，诺曼人征服西西里岛，结束了阿拉伯人的统治，莫迪卡重新回归基督教文化圈。诺曼人在老城修建了大量宗教建筑与宫殿，融合诺曼建筑风格与当地传统工艺，进一步完善了老城的格局，此时的莫迪卡成为西西里岛东南部的宗教中心，吸引了众多修士与艺术家前来，文化艺术得到快速发展，同时，可可加工工艺也在这一时期得到初步发展，成为当地特色手工业。
              </p>
              <p>
                1693年，西西里岛发生强烈地震，莫迪卡老城遭受重创，大部分建筑被损毁，城市几乎沦为废墟。地震后，当地居民在原址上进行重建，结合当时盛行的巴洛克建筑风格，耗时数十年完成了老城的重建工作。重建后的老城，建筑线条流畅、雕刻精美，教堂的穹顶、宫殿的浮雕、民居的阳台，都展现出巴洛克风格的恢弘与精致，同时保留了古希腊、古罗马与阿拉伯文化的痕迹，形成了独特的"西西里巴洛克"风格，成为世界建筑史上的瑰宝，而巧克力加工工艺也在重建过程中得以传承与发展，逐渐成为莫迪卡的城市名片。
              </p>
              <p>
                19世纪末，意大利统一后，政府开始对莫迪卡老城的历史遗迹进行系统性保护，修复了受损的巴洛克建筑与历史街巷，保留了老城的核心格局与建筑特色，同时扶持巧克力手工业，规范巧克力制作标准，让莫迪卡巧克力逐渐走向世界。1997年，莫迪卡老城与西西里岛的拉古萨、诺托等五座巴洛克城市一同被联合国教科文组织列为世界文化遗产，正式成为世界范围内极具价值的历史文化名城。
              </p>
              <p>
                20世纪以来，莫迪卡老城逐渐成为意大利小众旅游目的地，因其独特的巴洛克建筑、深厚的历史底蕴、静谧的市井氛围与独特的巧克力文化，吸引着世界各地的游客前来探访。如今，老城依然保留着古朴的生活气息，当地居民在古城内世代居住，传统的巧克力手工业、农耕文化与饮食文化得以传承，每年还会举办巴洛克文化节与巧克力节，让千年古城在艺术与甜蜜的滋养下焕发新的生机，成为一座兼具历史、宗教、艺术与美食之美的西西里秘境。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（2-3小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从莫迪卡火车站出发，步行10分钟抵达老城入口，首先前往上城的莫迪卡大教堂，这座始建于18世纪的巴洛克风格教堂，是莫迪卡老城的标志性建筑，教堂穹顶高耸，外墙雕刻精美，内部装饰华丽，重点欣赏教堂内的壁画与雕塑，感受巴洛克艺术的魅力；登顶教堂钟楼，可俯瞰整个老城的全景，将上城的规整街巷与下城的错落建筑、远处的丘陵田园尽收眼底。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  随后沿着石板台阶步行15分钟，前往下城（Modica Bassa），下城是莫迪卡老城的历史核心与巧克力文化聚集地，保留着最完整的巴洛克建筑群与传统巧克力工坊，漫步在狭窄幽深的石板街巷，欣赏两侧精美的巴洛克民居与挂满巧克力的商铺，感受老城的静谧氛围与甜蜜气息。之后前往圣乔治大教堂，这座融合了巴洛克与拜占庭风格的教堂，内部壁画色彩浓郁、细节精美，是下城最具代表性的宗教建筑；最后前往下城的中心广场，这里是当地居民的生活中心，周边有特色巧克力工坊与餐厅，可短暂休息，品尝一块正宗的莫迪卡巧克力，感受老城的市井烟火气，结束精华游览。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速体验古城精华
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（4-5小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加小众遗迹参观、巧克力品鉴与美食品尝，深入感受莫迪卡的人文、艺术与美食魅力。参观完圣乔治大教堂后，预约老城深度导览（导览费16欧元/人，全程1.5小时，有意大利语、英语两种语言可选），跟随导览深入了解老城的街巷历史、巴洛克建筑工艺、巧克力文化起源与发展，重点参观圣彼得教堂、巴洛克宫殿遗迹与莫迪卡巧克力博物馆，巧克力博物馆内收藏了不同时期的巧克力制作工具、配方与相关文物，可详细了解莫迪卡巧克力的千年历史与制作工艺，还可免费品尝一小块传统巧克力。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  导览结束后，前往老城周边的丘陵步道，徒步1小时左右，欣赏西西里岛的田园风光，远处的山脉、近处的巴洛克建筑与田间的农作物相映成趣，风景宜人，同时可俯瞰老城的全景，感受山城的独特韵味。中午前往老城内部的特色餐厅，品尝莫迪卡传统美食，如西西里风味意面、烤海鲜、当地特色甜点与葡萄酒，搭配一块莫迪卡巧克力，体验西西里的饮食文化与甜蜜风味；下午前往老城的民俗博物馆，距离下城中心约400米，步行6分钟可达，馆内展示了莫迪卡的传统手工业、农耕文化与民俗风情，可了解当地居民的生活方式与巧克力制作的传统流程；傍晚时分，返回下城中心广场，欣赏夕阳下的巴洛克建筑，夕阳洒在建筑的穹顶与浮雕上，呈现出温暖的金色，氛围感拉满，结束深度游览。
                </p>
                <div className="text-sm text-green-800 bg-green-100 p-3 rounded">
                  <strong>适合人群：</strong>喜欢细致游览的游客，想要深度体验老城文化
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-800 mb-2">游览小贴士</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• 老城上下城之间台阶较多，坡度较大，需穿着舒适的步行鞋</li>
                <li>• 夏季（6-8月）气候炎热干燥，建议携带遮阳帽、防晒霜与饮用水</li>
                <li>• 冬季（12月至次年2月）气候温和，偶有降雨，建议携带雨具</li>
                <li>• 参观宗教场所需穿着得体，避免短裤、短裙与露肩装</li>
                <li>• 老城部分街巷狭窄，禁止大声喧哗，尊重当地居民的生活</li>
                <li>• 导览服务与巧克力工坊品鉴需提前在官网预约，避免排队等待</li>
                <li>• 参观教堂与博物馆时，禁止使用闪光灯，避免损坏文物</li>
              </ul>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 莫迪卡大教堂钟楼</h4>
                  <p className="text-sm text-gray-700">拍摄老城全景的最佳机位，登上钟楼顶端，可将莫迪卡老城的上城与下城尽收眼底，巴洛克建筑的穹顶、错落的民居、狭窄的石板街巷与远处的丘陵田园相映成趣，画面层次感十足。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 下城巧克力工坊街巷</h4>
                  <p className="text-sm text-gray-700">下城的石板街巷狭窄幽深，两侧是精美的巴洛克民居与传统巧克力工坊，工坊门口摆放着各式巧克力与复古招牌，墙面爬满绿植，阳台摆放着鲜花，自带复古浪漫与甜蜜的氛围。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 圣乔治大教堂门前广场</h4>
                  <p className="text-sm text-gray-700">广场位于下城核心区域，周边环绕着巴洛克风格的建筑与雕塑，广场中央有喷泉，是拍摄巴洛克建筑集群的绝佳机位。可拍摄广场的全貌，将圣乔治大教堂的穹顶与周边建筑同框。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 上下城连接台阶</h4>
                  <p className="text-sm text-gray-700">连接上城与下城的石板台阶蜿蜒曲折，两侧是古朴的石质建筑与绿植，台阶本身就极具画面感，站在台阶中段，可拍摄台阶的延伸感与上下城的错落格局。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 老城外围丘陵步道</h4>
                  <p className="text-sm text-gray-700">丘陵步道沿途风景优美，可拍摄老城的远景与西西里田园风光，步道旁的野花、农田与远处的巴洛克建筑相映成趣，自带清新自然的氛围。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 莫迪卡巧克力博物馆庭院</h4>
                  <p className="text-sm text-gray-700">博物馆庭院内保留着古老的巧克力制作工具、雕塑与石柱，搭配巴洛克风格的庭院建筑，既有历史的厚重感，又有甜蜜的氛围感，是拍摄艺术特写与美食相关照片的绝佳机位。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 老城的巴洛克建筑以白色、米黄色为主，搭配深色的穹顶与雕刻，巧克力工坊多为暖色调，建议穿搭素色或低饱和色衣物，形成和谐的色调</li>
                <li>• 拍摄建筑全景时，可采用广角视角，凸显建筑的恢弘与街巷的错落</li>
                <li>• 拍摄巧克力相关照片时，可采用微距视角，捕捉巧克力的细节美感</li>
                <li>• 尊重当地文化与居民生活，拍摄人物时需提前征得同意</li>
                <li>• 禁止攀爬古建筑，拍摄时避免损坏文物与巧克力展品</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">拉古萨老城</h4>
                <p className="text-sm text-gray-700 mb-2">距离莫迪卡老城约20公里，车程约30分钟，是一座以巴洛克建筑为核心特色的千年古城，1997年与莫迪卡老城一同被列为世界文化遗产。古城保留着大量1693年地震后重建的巴洛克建筑群。</p>
                <div className="text-xs text-gray-500">🚗 车程30分钟 | 🏛️ 巴洛克建筑</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">诺托古城</h4>
                <p className="text-sm text-gray-700 mb-2">距离莫迪卡老城约45公里，车程约1小时，是西西里巴洛克建筑的典范，古城整体规划规整，所有建筑均为巴洛克风格，被誉为"巴洛克建筑博物馆"。</p>
                <div className="text-xs text-gray-500">🚗 车程1小时 | 🏛️ 巴洛克建筑</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">莫迪卡海滩</h4>
                <p className="text-sm text-gray-700 mb-2">距离莫迪卡老城约18公里，车程约25分钟，是一片干净整洁的海滨浴场，沙滩细腻，海水湛蓝，周边有餐厅、咖啡馆与海滨步道，可在游览老城后前往海滩休闲度假。</p>
                <div className="text-xs text-gray-500">🚗 车程25分钟 | 🏖️ 海滨风光</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">卡塔尼亚古城</h4>
                <p className="text-sm text-gray-700 mb-2">距离莫迪卡老城约85公里，车程约1.5小时，是西西里岛东部的重要城市，保留着古罗马遗迹、巴洛克建筑与火山景观，是埃特纳火山脚下的千年古城。</p>
                <div className="text-xs text-gray-500">🚗 车程1.5小时 | 🌋 火山景观</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">锡拉库萨古城</h4>
                <p className="text-sm text-gray-700 mb-2">距离莫迪卡老城约75公里，车程约1.2小时，是一座以古希腊文明闻名的古城，保留着古希腊剧院、阿波罗神庙等遗迹，是《西西里的美丽传说》的取景地之一。</p>
                <div className="text-xs text-gray-500">🚗 车程1.2小时 | 🏛️ 古希腊文明</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">巧克力工坊村落</h4>
                <p className="text-sm text-gray-700 mb-2">距离莫迪卡老城约5公里，车程约10分钟，是莫迪卡巧克力文化的发源地，村落内遍布传统巧克力工坊，可参观巧克力制作过程，品尝各种口味的莫迪卡巧克力。</p>
                <div className="text-xs text-gray-500">🚗 车程10分钟 | 🍫 巧克力文化</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">老城核心区域</h4>
                  <p className="text-sm text-blue-800">首选区域，分为上城与下城两个区域，下城靠近核心景点、巧克力工坊与市井街区，上城地势较高，视野开阔，可欣赏老城全景，环境更为静谧。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">火车站或巴士站附近</h4>
                  <p className="text-sm text-green-800">距离车站步行10分钟可达，周边有餐厅、便利店，生活便利，适合需要乘坐火车或巴士前往周边景点的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">巴洛克风格景观酒店</h4>
                  <p className="text-sm text-yellow-800">多位于老城核心区域或上城制高点，融合了巴洛克建筑元素与现代设施，自带观景露台与餐厅，部分酒店还提供巧克力品鉴、手工制作等特色服务。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端巴洛克风格酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于老城核心区域或上城制高点，融合了巴洛克建筑元素与现代设施，自带观景露台与餐厅，部分酒店还提供巧克力品鉴、手工制作等特色服务。</p>
                  <div className="text-xs text-gray-500">💎 巴洛克体验 | 🍫 巧克力特色</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于老城附近或车站周边，步行可达核心景点，房间干净整洁，设施齐全，部分酒店提供早餐与巧克力赠品，价格约65-110欧元/晚。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 🍫 巧克力赠品</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">多为家庭经营，风格温馨，部分民宿带有厨房，可自己烹饪，部分民宿还由巧克力工坊改造而成，充满特色，价格约28-60欧元/晚。</p>
                  <div className="text-xs text-gray-500">💰 预算友好 | 🏡 家庭氛围</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">适合独自旅行或预算有限的游客，价格实惠，通常位于交通便利的位置，可结识来自世界各地的旅行者，适合背包客和年轻游客。</p>
                  <div className="text-xs text-gray-500">🎒 背包客首选 | 🌍 国际交流</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季（6-9月）：</strong>夏季海滨度假旺季，巴洛克文化节、巧克力节期间，建议提前1-2个月预订</p>
                    <p className="mb-2"><strong>淡季（12月至次年5月）：</strong>可提前1-2周预订，价格相对实惠</p>
                    <p><strong>特色套餐：</strong>部分高端酒店推出住宿+巧克力品鉴、导览体验的优惠套餐</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>意大利住宿通常不提供洗漱用品，需自备牙刷、牙膏等</p>
                    <p className="mb-2"><strong>特殊注意：</strong>老城部分酒店位于丘陵地带，无电梯，预订时可提前咨询</p>
                    <p><strong>注意事项：</strong>老城及周边夜间安静，需保持安静；大部分酒店为无烟酒店</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                莫迪卡老城，这座藏在西西里岛东南部的巴洛克秘境，历经两千多年的岁月沉淀，既有古希腊、古罗马文明的痕迹，也有阿拉伯文化的印记，更有1693年重建后巴洛克建筑的璀璨夺目与千年巧克力文化的甜蜜滋养。在这里，你可以漫步石板街巷，触摸巴洛克建筑的精美雕刻；可以走进中世纪教堂，欣赏珍贵的壁画与雕塑，感受宗教的庄严与宁静；可以探访传统巧克力工坊，品尝一口千年传承的甜蜜；可以徒步丘陵步道，欣赏西西里的田园美景；可以品尝当地特色美食与葡萄酒，体验西西里的饮食文化。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                无论是独自旅行、情侣出游还是家庭度假，莫迪卡老城都能给你带来难忘的旅行体验，让你在静谧古朴的氛围中，邂逅一段跨越时空的人文、艺术与甜蜜之约，爱上这座兼具历史厚重、艺术清新与烟火气息的西西里小众古城。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在静谧古朴的氛围中，邂逅一段跨越时空的人文、艺术与甜蜜之约。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}