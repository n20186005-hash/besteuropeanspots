import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '费拉拉城堡・Ferrara Castle・意大利・费拉拉 | 最佳欧洲景点',
  description: '探索费拉拉城堡，埃斯特家族的千年防御秘境与文艺复兴瑰宝，以中世纪防御建筑为核心、融合文艺复兴艺术风格，是费拉拉老城世界文化遗产的核心组成部分，承载着埃斯特家族的权力印记与意大利中世纪至文艺复兴时期的历史变迁。',
}

export default function FerraraCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '费拉拉城堡', href: '/attractions/ferrara-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">费拉拉城堡・Ferrara Castle・意大利・费拉拉</h1>
          <p className="text-lg text-gray-600 mb-6">
            费拉拉城堡始建于1385年，由埃斯特家族下令修建，是意大利中世纪防御建筑的典范，融合哥特式与文艺复兴式风格。城堡以四座圆柱形塔楼、环绕的护城河与坚固城墙为标志，内部保留着公爵寝宫、议事厅、地牢等遗迹，藏有珍贵的艺术品与历史文物，见证了埃斯特家族的辉煌与费拉拉的城市兴衰，是感受意大利中世纪权力文化与建筑艺术的核心地标。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              费拉拉城堡始建于1385年，由埃斯特家族下令修建，是意大利中世纪防御建筑的典范，融合哥特式与文艺复兴式风格。城堡以四座圆柱形塔楼、环绕的护城河与坚固城墙为标志，内部保留着公爵寝宫、议事厅、地牢等遗迹，藏有珍贵的艺术品与历史文物，见证了埃斯特家族的辉煌与费拉拉的城市兴衰，是感受意大利中世纪权力文化与建筑艺术的核心地标。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="费拉拉城堡" />
                <InfoRow label="英文名称" value="Ferrara Castle（Castello Estense）" />
                <InfoRow label="国家" value="意大利（Italy）" />
                <InfoRow label="城市" value="费拉拉（Ferrara）" />
                <InfoRow label="所属区域" value="意大利艾米利亚-罗马涅大区费拉拉省" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="埃斯特家族权力象征、世界文化遗产" />
                <InfoRow label="核心特色" value="中世纪防御建筑、文艺复兴艺术融合" />
                <InfoRow label="建筑价值" value="哥特式与文艺复兴式风格结合" />
                <InfoRow label="文化价值" value="中世纪权力文化、家族历史见证" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="夏季9:30-13:30、15:30-19:30，冬季9:30-13:30、15:00-18:00；每周一闭馆" />
              <InfoRow label="门票价格" value="成人票10欧元，优惠票5欧元；12岁以下儿童免费" />
              <InfoRow label="地址" value="Castello Estense, Corso Ercole I d'Este, 21, 44121 Ferrara FE, Italy" />
              <InfoRow label="交通方式" value="从罗马乘高铁约2小时直达；从博洛尼亚乘区域火车约30分钟" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                费拉拉城堡的历史，与埃斯特家族的兴衰紧密相连，也见证了费拉拉从一个普通城镇发展为文艺复兴时期文化重镇的全过程。约从13世纪中后期开始，意大利的城市共和国纷纷演变为家族世袭统治，费拉拉附近的土地贵族埃斯特家族在当地贵族的支持下，于1264年夺取费拉拉的统治权，率先建立了领主制，开启了对费拉拉长达数百年的统治。
              </p>
              <p>
                1385年，埃斯特家族在镇压了一场民众叛乱后，为巩固统治、彰显权力，聘请著名军事工程师巴托利诺·达·诺瓦拉，在费拉拉城北、波河沿岸修建了这座防御性城堡，最初命名为"圣·米凯莱城堡"，后更名为"埃斯特城堡"，毫不含糊地展示了埃斯特家族意欲主宰费拉拉城的决心。城堡最初以防御为核心功能，设计了坚固的城墙、环绕的护城河、可升降的吊桥与四座高耸的圆柱形塔楼，塔楼内设有瞭望台与射击孔，可全方位监控周边动静，抵御外敌入侵，同时也用于关押叛乱者与囚徒，城堡内阴森的地牢墙壁上，至今仍能看到当年囚徒留下的文字印记。
              </p>
              <p>
                15世纪，埃斯特家族的权力达到顶峰，费拉拉成为意大利北部重要的政治、文化与艺术中心，城堡也迎来了大规模的扩建与改造。1472年，领主埃尔科莱一世委派建筑师比亚焦，建造了一座连接"旧宫"（费拉拉市政厅）与埃斯特城堡的高架"封闭走廊"，在紧急情况下，埃斯特家族的成员可通过这条走廊迅速从旧宫转移至戒备森严的城堡，进一步强化了城堡的防御功能与权力象征意义。这一时期，城堡的建筑风格逐渐从纯粹的哥特式防御风格，融入了文艺复兴时期的艺术元素，扩建了公爵寝宫、议事厅、花园等区域，装饰上采用精美的壁画、雕塑与挂毯，让这座军事城堡逐渐成为兼具防御、居住与社交功能的宫廷建筑群。
              </p>
              <p>
                文艺复兴时期，埃斯特家族大力扶持文化艺术，吸引了众多艺术家、学者与诗人前来费拉拉，城堡成为当时文化交流的重要场所。城堡内的藏书室收藏了大量珍贵的手稿、书籍与艺术品，公爵寝宫与议事厅的壁画均出自当时著名画家之手，展现了文艺复兴时期的艺术审美与人文精神。这一时期的费拉拉，经济繁荣、文化昌盛，与佛罗伦萨、威尼斯并称为意大利文艺复兴时期的三大文化中心，而埃斯特城堡则成为这一辉煌历史的重要载体。
              </p>
              <p>
                16世纪末，随着埃斯特家族势力的衰落，费拉拉被纳入教皇国版图，城堡的地位逐渐下降，不再作为宫廷居所，转而成为教皇国的行政办公场所与监狱。此后数百年间，城堡历经战乱与岁月侵蚀，部分建筑遭到损毁，壁画、雕塑等文物也受到不同程度的破坏。19世纪末，意大利统一后，政府开始对费拉拉城堡进行系统性的保护与修复，清理护城河、修复城墙与塔楼，还原城堡的原始风貌，同时整理城堡内的文物与遗迹，将其改造为博物馆，向公众开放。
              </p>
              <p>
                1995年，费拉拉老城（含埃斯特城堡）被联合国教科文组织列为世界文化遗产，理由是其完整保留了中世纪至文艺复兴时期的城市格局与建筑风貌，而埃斯特城堡作为老城的核心地标，更是被视为意大利中世纪防御建筑与文艺复兴艺术融合的典范。如今，城堡不仅是费拉拉最重要的旅游景点，也是研究意大利中世纪历史、建筑艺术与家族文化的重要基地，每年吸引着世界各地的游客前来探访，感受跨越千年的权力与艺术魅力。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（2-3小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从城堡主入口进入，首先经过可升降的吊桥与坚固的城门，感受中世纪城堡的防御氛围，城门上方的瞭望台的可短暂停留，欣赏城堡外围的护城河与城墙景观。进入城堡后，先前往主庭院，庭院为方形布局，四周环绕着拱形走廊与圆柱形塔楼，墙面保留着文艺复兴时期的壁画残片，可拍摄城堡的经典建筑轮廓。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  随后前往公爵寝宫，这里是埃斯特家族成员的居住区域，房间内摆放着中世纪至文艺复兴时期的家具、挂毯与艺术品，墙面的壁画展现了埃斯特家族的生活场景与历史事件，重点欣赏寝宫顶部的穹顶壁画与雕花大床，感受贵族生活的奢华。之后前往议事厅，这里是埃斯特家族召开会议、处理政务的场所，大厅宽敞宏伟，摆放着长长的议事桌与座椅，墙面挂着埃斯特家族历代领主的肖像画，氛围庄重肃穆。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  最后前往城堡的地牢，地牢位于城堡底层，阴暗潮湿，墙壁上布满了囚徒的刻字与涂鸦，展示了中世纪监狱的残酷景象，同时可参观地牢内的刑具展览，了解中世纪的刑罚文化；游览结束后，可在城堡出口的纪念品商店，购买城堡模型、壁画复制品等特色纪念品，结束精华游览。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速体验城堡精华
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（4-5小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加博物馆参观、花园游览与小众遗迹探访，深入感受城堡的历史与艺术魅力。参观完地牢后，前往城堡内的考古博物馆，馆内收藏了城堡遗址出土的陶器、雕塑、兵器等文物，涵盖古希腊、古罗马至中世纪时期，可详细了解费拉拉的历史变迁与城堡的建造历程，同时可欣赏到中世纪的盔甲与武器，感受城堡的防御文化。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  随后前往城堡的文艺复兴花园，花园位于城堡西侧，采用对称式布局，种植着当地特色的花草树木，摆放着雕塑与喷泉，是埃斯特家族成员休闲娱乐的场所，花园内的拱廊与雕塑融合了文艺复兴时期的艺术风格，适合漫步休憩，拍摄氛围感照片。之后预约城堡深度导览（导览费12欧元/人，全程1小时，有意大利语、英语两种语言可选），跟随导览深入了解城堡的建筑工艺、壁画历史与埃斯特家族的传奇故事，重点参观城堡的瞭望塔、秘密通道与藏书室，藏书室内保留着大量珍贵的中世纪手稿与书籍，部分可近距离观赏。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  中午前往城堡周边的特色餐厅，品尝费拉拉传统美食，如意大利千层面、烤乳猪、费拉拉特色甜点与当地葡萄酒，体验艾米利亚-罗马涅大区的饮食文化；下午前往城堡东侧的城墙步道，徒步约30分钟，欣赏费拉拉老城的全景与波河风光，感受老城的古朴韵味；傍晚时分，返回城堡主庭院，欣赏夕阳下的城堡轮廓，夕阳洒在城墙与塔楼之上，呈现出温暖的金色，氛围感拉满，结束深度游览。
                </p>
                <div className="text-sm text-green-800 bg-green-100 p-3 rounded">
                  <strong>适合人群：</strong>喜欢细致游览的游客，想要深度体验城堡文化
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 城堡吊桥与城门</h4>
                  <p className="text-sm text-gray-700">拍摄城堡正门的最佳机位，站在吊桥前方，可将城堡的城门、吊桥与两侧的圆柱形塔楼同框，城墙的斑驳痕迹、吊桥的木质结构与塔楼的高耸姿态，完美展现中世纪城堡的防御气势。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 主庭院拱廊</h4>
                  <p className="text-sm text-gray-700">主庭院四周的拱形走廊是拍摄城堡内部建筑的绝佳机位，拱廊的弧形线条与墙面的壁画残片、圆柱形立柱相映成趣，自带复古文艺的氛围。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 瞭望塔顶端</h4>
                  <p className="text-sm text-gray-700">登上城堡的瞭望塔顶端，是拍摄费拉拉老城全景的最佳机位，可将整个费拉拉老城的街巷格局、波河风光与远处的田园景色尽收眼底，城堡的护城河、城墙与老城的红瓦民居相映成趣。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 文艺复兴花园喷泉</h4>
                  <p className="text-sm text-gray-700">花园内的喷泉的是拍摄氛围感照片的绝佳机位，喷泉的流水与周边的雕塑、花草树木相搭配，自带清新雅致的氛围，同时可将花园的拱廊与城堡的塔楼作为背景。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 地牢入口通道</h4>
                  <p className="text-sm text-gray-700">地牢入口的狭窄通道极具画面感，昏暗的光线、斑驳的墙壁与厚重的石门，自带神秘、复古的氛围，适合拍摄氛围感特写与人文照片。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 城墙步道</h4>
                  <p className="text-sm text-gray-700">城堡东侧的城墙步道是拍摄城堡与波河同框的最佳机位，站在步道上，可将城堡的塔楼、城墙与波河的流水、远处的桥梁同框，既有建筑的雄浑，又有自然的灵动。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 城堡的建筑以灰色石质为主，搭配红瓦屋顶与绿色藤蔓，建议穿搭素色或复古风格衣物，形成和谐的色调</li>
                <li>• 拍摄建筑全景时，可采用广角视角，凸显城堡的恢弘与雄浑</li>
                <li>• 拍摄特写时，可聚焦建筑的雕刻、壁画残片等细节，展现历史的痕迹</li>
                <li>• 尊重当地文化，拍摄文物与壁画时禁止使用闪光灯，避免损坏文物</li>
                <li>• 禁止攀爬城墙与塔楼，拍摄时避免影响其他游客游览</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">费拉拉大教堂</h4>
                <p className="text-sm text-gray-700 mb-2">距离城堡约5分钟步行路程，始建于12世纪，是费拉拉最具代表性的宗教建筑，融合罗马式与哥特式风格，教堂穹顶高耸，外墙雕刻精美，内部藏有珍贵的壁画与雕塑。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行5分钟 | ⛪ 宗教建筑</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">施齐法诺亚宫</h4>
                <p className="text-sm text-gray-700 mb-2">距离城堡约10分钟步行路程，是埃斯特家族的夏季行宫，始建于15世纪，宫殿内的壁画堪称文艺复兴时期的艺术瑰宝，尤其是"月份厅"的壁画。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行10分钟 | 🏛️ 文艺复兴艺术</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">费拉拉犹太区</h4>
                <p className="text-sm text-gray-700 mb-2">距离城堡约15分钟步行路程，是欧洲保存最完整的犹太区之一，保留着大量中世纪至文艺复兴时期的犹太教堂、民居与商铺，街巷狭窄古朴。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行15分钟 | 🕍 小众文化</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">波河滨河步道</h4>
                <p className="text-sm text-gray-700 mb-2">距离城堡约10分钟步行路程，沿波河修建，步道旁种植着高大的树木，设有座椅与观景平台，可欣赏波河的流水风光与费拉拉的城市天际线。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行10分钟 | 🌊 自然景观</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">费拉拉国家考古博物馆</h4>
                <p className="text-sm text-gray-700 mb-2">距离城堡约8分钟步行路程，馆内收藏了费拉拉及周边地区出土的古希腊、古罗马、中世纪时期的文物，包括陶器、雕塑、兵器、手稿等。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行8分钟 | 🏺 考古文化</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Al Brindisi酒吧</h4>
                <p className="text-sm text-gray-700 mb-2">距离城堡约7分钟步行路程，位于费拉拉大教堂附近，建于1435年，被吉尼斯世界纪录列为世界上最古老的葡萄酒酒吧，内部装饰复古。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行7分钟 | 🍷 历史文化</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">城堡周边及老城核心区域</h4>
                  <p className="text-sm text-blue-800">首选区域，距离城堡、费拉拉大教堂、施齐法诺亚宫等核心景点步行可达，周边有特色餐厅、咖啡馆与纪念品商店，既能便捷游览景点，又能感受老城的古朴氛围。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">费拉拉火车站附近</h4>
                  <p className="text-sm text-green-800">距离车站步行10分钟可达，周边有餐厅、便利店，生活便利，适合需要乘坐火车前往周边城市的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">波河沿岸</h4>
                  <p className="text-sm text-yellow-800">距离城堡约15分钟步行路程，可欣赏波河风光，环境静谧舒适，适合喜欢自然景观的游客。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端中世纪风格景观酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于老城核心区域，融合中世纪建筑元素与现代设施，自带观景露台与餐厅，部分酒店还提供城堡导览、葡萄酒品鉴等特色服务。</p>
                  <div className="text-xs text-gray-500">💎 中世纪体验 | 🏰 城堡风光</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于城堡附近或车站周边，步行可达核心景点，房间干净整洁，设施齐全，部分酒店提供早餐与免费WiFi，价格约40-80欧元/晚。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 🏨 设施齐全</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">多为家庭经营，风格温馨，部分民宿由中世纪民居改造而成，充满特色，价格约20-40欧元/晚，还能感受当地居民的生活氛围。</p>
                  <div className="text-xs text-gray-500">💰 预算友好 | 🏡 家庭氛围</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">适合独自旅行或预算有限的游客，价格实惠，通常位于交通便利的位置，可结识来自世界各地的旅行者，价格约15-30欧元/晚。</p>
                  <div className="text-xs text-gray-500">🎒 背包客首选 | 🌍 国际交流</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季（6-9月）：</strong>夏季气候宜人，费拉拉文艺复兴节期间，建议提前1-2个月预订</p>
                    <p className="mb-2"><strong>淡季（12月至次年5月）：</strong>可提前1-2周预订，价格相对实惠</p>
                    <p><strong>特色套餐：</strong>部分高端酒店推出住宿+景点联票的优惠套餐</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>意大利住宿通常不提供洗漱用品，需自带牙刷、牙膏等</p>
                    <p className="mb-2"><strong>特殊注意：</strong>老城部分酒店位于石板街巷旁，无电梯，预订时可提前咨询</p>
                    <p><strong>注意事项：</strong>老城及周边夜间安静，需保持安静；大部分酒店为无烟酒店</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                费拉拉城堡，这座矗立在波河之畔的千年秘境，历经六百余年的岁月沉淀，既有中世纪防御建筑的雄浑厚重，又有文艺复兴艺术的精致典雅，承载着埃斯特家族的权力传奇与费拉拉的城市兴衰。在这里，你可以漫步在坚固的城墙之上，触摸中世纪的防御痕迹；可以走进公爵寝宫与议事厅，感受贵族的奢华生活与权力氛围；可以探访阴暗的地牢，聆听囚徒留下的历史低语；可以漫步文艺复兴花园，欣赏艺术与自然的完美融合；可以品尝当地特色美食与葡萄酒，体验艾米利亚-罗马涅大区的市井烟火。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                无论是独自旅行、情侣出游还是家庭度假，费拉拉城堡都能给你带来难忘的旅行体验，让你在古朴静谧的氛围中，邂逅一段跨越千年的权力、艺术与历史之约，爱上这座兼具历史厚重与文艺气息的意大利历史名城。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在古朴静谧的氛围中，邂逅一段跨越千年的权力、艺术与历史之约。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}