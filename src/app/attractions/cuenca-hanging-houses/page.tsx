import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '昆卡悬屋・Cuenca Hanging Houses・西班牙・昆卡 | 最佳欧洲景点',
  description: '探索昆卡悬屋，悬崖之上的千年建筑奇迹，以悬空木制阳台为特色，哥特式建筑风格鲜明，是自然地貌与人类匠心完美融合的典范，兼具历史厚重感与视觉震撼力。',
}

export default function CuencaHangingHousesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '西班牙', href: '/destinations/spain' },
            { label: '昆卡悬屋', href: '/attractions/cuenca-hanging-houses' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">昆卡悬屋・Cuenca Hanging Houses・西班牙・昆卡</h1>
          <p className="text-lg text-gray-600 mb-6">
            昆卡悬屋是西班牙昆卡老城的标志性景观，建于15世纪，坐落于胡卡尔河与杰里河交汇处的悬崖峭壁之上，以悬空木制阳台为特色，哥特式建筑风格鲜明。曾作为皇家别墅与市政府使用，现改建为西班牙抽象艺术博物馆，保留了中世纪建筑的古朴与精巧，是自然与人文交融的杰作，也是解读昆卡千年历史与建筑智慧的鲜活样本。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              昆卡悬屋是西班牙昆卡老城的标志性景观，建于15世纪，坐落于胡卡尔河与杰里河交汇处的悬崖峭壁之上，以悬空木制阳台为特色，哥特式建筑风格鲜明。曾作为皇家别墅与市政府使用，现改建为西班牙抽象艺术博物馆，保留了中世纪建筑的古朴与精巧，是自然与人文交融的杰作，也是解读昆卡千年历史与建筑智慧的鲜活样本。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="昆卡悬屋" />
                <InfoRow label="英文名称" value="Cuenca Hanging Houses" />
                <InfoRow label="国家" value="西班牙（Spain）" />
                <InfoRow label="城市" value="昆卡（Cuenca）" />
                <InfoRow label="所属区域" value="西班牙卡斯蒂利亚-拉曼恰自治区" />
              </div>
              <div className="space-y-4">
                <InfoRow label="建造年代" value="15世纪" />
                <InfoRow label="建筑风格" value="哥特式建筑，悬空木制阳台" />
                <InfoRow label="核心特色" value="悬崖建筑、悬空阳台、抽象艺术博物馆" />
                <InfoRow label="历史地位" value="世界文化遗产、昆卡城市象征" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="悬屋夏季10:00-19:00，冬季10:00-17:00；每周一闭馆" />
              <InfoRow label="门票价格" value="悬屋成人票8欧元，优惠票4欧元；12岁以下儿童免费；联票15欧元" />
              <InfoRow label="地址" value="Casas Colgadas, 16001 Cuenca, Spain" />
              <InfoRow label="交通方式" value="从马德里乘高铁约1小时，票价35-55欧元；火车站乘1路、5路公交4站可达" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                昆卡悬屋的历史可追溯至公元8世纪，最早由洛贝达诺人在胡卡尔河与杰里河交汇处的白垩山脊上建立定居点，依托悬崖地势形成初步的居住格局，为悬屋的建造奠定了基础。公元711年，摩尔人入侵伊比利亚半岛，看中昆卡易守难攻的悬崖地势，将其建成坚固的中世纪军事要塞，此时开始出现依托悬崖建造的悬空式建筑，用于防御与居住，这便是悬屋的雏形。
              </p>
              <p>
                公元1177年，阿方索八世带领的基督军队收复昆卡，这里成为西班牙基督教王国的重要城镇，逐步发展为卡斯蒂利亚-拉曼恰地区的政治、军事与商业中心。基督教统治者在保留摩尔人建筑遗迹的基础上，大规模修建建筑，15世纪时，悬屋迎来大规模建造热潮，当时的工匠们利用悬崖的自然地形，采用石质基座与木制结构结合的方式，将房屋建在悬崖边缘，部分墙体嵌入崖壁，部分悬空延伸，既节省空间，又能利用悬崖地势防御外敌，形成了如今我们看到的悬屋风貌。
              </p>
              <p>
                中世纪时期，昆卡悬屋主要作为皇家别墅与市政府办公场所使用，是当时昆卡贵族与官员的居住、办公重地，房屋内部装饰精美，融合了哥特式建筑的挺拔与中世纪的实用风格，悬空的木制阳台不仅是装饰，更是观察悬崖下方河道与周边动向的瞭望台，兼具美观与防御功能。此外，由于早期悬屋住宅内无厕所，一位法国旅行者建议在房屋外墙上打洞延伸空间，用于建造厕所，如今悬屋外墙凸出的部分，便是当时的厕所遗迹，成为悬屋历史的独特印记。
              </p>
              <p>
                公元15世纪至16世纪，昆卡成为当时有名的纺织中心，出产羊毛等产品，商业与手工业的繁荣带动了悬屋周边区域的发展，悬屋的规模进一步扩大，周边陆续建成了教堂、府邸、商铺等建筑，形成了错落有致的中世纪山城格局。1588年，西班牙爆发瘟疫，严重影响了昆卡的发展，悬屋也因人口减少、资金短缺而停止扩建，部分建筑因岁月侵蚀出现损毁。
              </p>
              <p>
                20世纪以来，西班牙政府加大了对昆卡老城的保护力度，成立专门的文物保护机构，对悬屋进行系统性的修复，还原其中世纪的建筑原貌，同时将部分悬屋改建为博物馆，用于展示昆卡的历史文化与艺术作品。1996年，昆卡老城因其完整保留的中世纪城市格局与独特的悬屋建筑，被联合国教科文组织列为世界文化遗产，悬屋也成为全球闻名的建筑奇观，吸引着世界各地的游客前来探访。
              </p>
              <p>
                如今，昆卡悬屋依然屹立在悬崖之上，历经600余年的风雨洗礼，依然保留着中世纪的古朴风貌，石质基座嵌入崖壁，木制阳台悬空延伸，与胡卡尔河的峡谷风光相互映衬，成为自然与人文交融的典范。它不仅是昆卡的城市象征，更是西班牙中世纪建筑智慧的结晶，承载着昆卡千年的历史变迁与多元文化的交融印记。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（2-3小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从昆卡火车站出发，步行25分钟或乘坐1路公交抵达悬屋，首先参观悬屋（西班牙抽象艺术博物馆），欣赏悬空的木制阳台与哥特式建筑细节，参观馆内收藏的索拉、利亚雷斯等抽象艺术大师的作品，感受艺术与建筑的碰撞；随后登上悬屋的露台，俯瞰胡卡尔河峡谷的壮丽风光，感受悬崖之上的视觉震撼。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  之后前往昆卡大教堂，这座建于14世纪的哥特式教堂，是西班牙最古老的哥特式建筑之一，因资金不足未完全修缮完毕，呈现出独特的残缺之美，可参观教堂内的壁画、雕塑与彩色玻璃窗，感受中世纪宗教建筑的庄严与古朴；最后漫步在老城的石板街巷，欣赏周边的中世纪石质建筑，感受山城的静谧氛围，结束精华游览。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速体验悬屋精华
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（4-5小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加导览服务、小众遗迹参观与美食品尝，深入感受昆卡的历史与人文魅力。参观完老城石板街巷后，预约老城官方导览（导览费10欧元/人，全程1.5小时，有西班牙语、英语、中文三种语言可选），跟随导览深入了解悬屋的建筑工艺、历史典故，以及昆卡从摩尔人统治到基督教收复的历史变迁。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  导览结束后，前往昆卡考古博物馆，参观馆藏的古罗马时期、摩尔人时期与基督教时期的各类文物，包括陶器、硬币、雕塑、石碑等，快速了解昆卡的千年历史发展历程；随后前往圣巴勃罗桥，这座古老的石桥横跨胡卡尔河，是拍摄悬屋全景的绝佳位置，同时可欣赏河流与悬崖的自然景观。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  中午前往老城的特色餐厅，品尝卡斯蒂利亚-拉曼恰传统美食，如烤羊排、曼彻戈奶酪、西班牙烩饭等，搭配当地产的葡萄酒，体验昆卡的饮食文化；下午前往昆卡城堡遗址，这里曾是中世纪的军事要塞，如今虽只剩遗迹，但仍能俯瞰整个昆卡老城与悬屋的全景，感受中世纪的军事防御格局；傍晚时分，返回悬屋附近的悬崖步道，欣赏夕阳下的悬屋与峡谷风光，感受山城的静谧与浪漫，结束深度游览。
                </p>
                <div className="text-sm text-green-800 bg-green-100 p-3 rounded">
                  <strong>适合人群：</strong>喜欢细致游览的游客，想要深度体验老城文化
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-800 mb-2">游览小贴士</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• 进入悬屋、教堂等遗迹内部需着装端庄，避免穿着短裤、短裙、露肩装，需脱帽参观</li>
                <li>• 老城街巷多为石板路，且坡度较大，游览时注意脚下安全，建议穿着舒适的步行鞋</li>
                <li>• 参观悬屋时，禁止攀爬木制阳台，避免损坏建筑</li>
                <li>• 夏季（6-8月）是旅游旺季，参观人数较多，建议错峰前往（上午10:00前、下午17:00后）</li>
                <li>• 老城部分街巷无饮用水售卖，建议提前准备好饮用水</li>
                <li>• 导览服务需提前在老城游客中心预约，避免排队等待</li>
              </ul>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 圣巴勃罗桥</h4>
                  <p className="text-sm text-gray-700">拍摄悬屋全景的最佳机位，站在桥上，可将悬屋的全貌、悬空木制阳台与胡卡尔河峡谷风光尽收眼底，悬屋嵌入崖壁、悬空延伸的姿态极具视觉冲击力，河流与悬崖的自然景观与建筑相互映衬，氛围感拉满。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 悬屋露台</h4>
                  <p className="text-sm text-gray-700">悬屋自身的露台是拍摄特写与人物合影的绝佳机位，站在露台上，可近距离拍摄悬屋的木制阳台、石质墙体，同时能捕捉到峡谷的局部风光，既能凸显悬屋的建筑特色，又能展现悬崖之上的独特视角。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 老城悬崖步道</h4>
                  <p className="text-sm text-gray-700">悬崖步道蜿蜒曲折，一侧是悬屋与老城建筑，一侧是胡卡尔河峡谷，漫步在步道上，可拍摄悬屋的侧面轮廓与峡谷的壮阔风光，光影交错间充满历史厚重感与自然之美。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 昆卡大教堂钟楼</h4>
                  <p className="text-sm text-gray-700">大教堂的钟楼是老城的制高点之一，登上钟楼，可俯瞰整个昆卡老城与悬屋的全景，悬屋的悬空姿态与老城的石质建筑群落相互呼应，远处的峡谷风光尽收眼底，历史感与自然美完美融合。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 老城石板街巷</h4>
                  <p className="text-sm text-gray-700">老城的石板街巷狭窄幽深，两侧是中世纪石质建筑，从街巷中抬头可拍摄悬屋的局部景观，悬空的阳台与狭窄的街巷形成鲜明对比，自带复古静谧的氛围。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 胡卡尔河河畔</h4>
                  <p className="text-sm text-gray-700">站在胡卡尔河河畔，抬头可拍摄悬屋的仰视视角，悬屋屹立在悬崖之上，悬空延伸，极具视觉震撼力，河流作为前景，增添画面的层次感与自然气息。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 悬屋建筑以石质原色与木制棕色为主，建议穿搭素色或低饱和色衣物（如白色、米色、浅蓝色），形成鲜明对比</li>
                <li>• 拍摄悬屋全景时，可采用广角视角，凸显悬屋的悬空姿态与峡谷的壮阔</li>
                <li>• 拍摄建筑特写时，可聚焦木制阳台的纹理与石质墙体的痕迹，展现其历史沧桑感</li>
                <li>• 尊重当地文化与文物保护规定，禁止在建筑上刻画、攀爬，拍摄时避免损坏文物</li>
                <li>• 拍摄人物时，需避免遮挡悬屋主体，兼顾建筑美感与人物形象</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">昆卡大教堂</h4>
                <p className="text-sm text-gray-700 mb-2">距离悬屋约300米，步行5分钟可达，建于14世纪，是西班牙最古老的哥特式教堂之一，因未完全修缮呈现出独特的残缺之美，内部装饰精美，收藏了大量宗教艺术品。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行5分钟 | ⛪ 哥特式教堂</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">昆卡抽象艺术博物馆</h4>
                <p className="text-sm text-gray-700 mb-2">即悬屋本身，馆内收藏了索拉、利亚雷斯、塔皮耶斯等抽象艺术大师的作品，是西班牙重要的抽象艺术展示场所，参观悬屋即可同步游览博物馆，无需额外单独前往。</p>
                <div className="text-xs text-gray-500">🏛️ 抽象艺术 | 🎨 艺术收藏</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">昆卡考古博物馆</h4>
                <p className="text-sm text-gray-700 mb-2">距离悬屋约600米，步行10分钟可达，馆内收藏了昆卡从古罗马时期、摩尔人时期到基督教时期的各类文物，包括陶器、硬币、雕塑、石碑等，是了解昆卡千年历史的重要场所。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行10分钟 | 🏺 考古文物</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">胡卡尔河峡谷</h4>
                <p className="text-sm text-gray-700 mb-2">距离悬屋约1公里，步行15分钟可达，是胡卡尔河长期侵蚀形成的自然景观，峡谷两侧悬崖峭壁，风光壮阔，可沿着峡谷步道漫步，欣赏自然美景，感受峡谷的险峻与秀丽。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行15分钟 | 🏞️ 自然景观</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">昆卡城堡遗址</h4>
                <p className="text-sm text-gray-700 mb-2">距离悬屋约800米，步行12分钟可达，始建于摩尔人统治时期，是中世纪的军事要塞，如今虽只剩遗迹，但仍能俯瞰整个昆卡老城与悬屋全景，感受中世纪的军事防御格局。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行12分钟 | 🏰 军事遗迹</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">昆卡中央市场</h4>
                <p className="text-sm text-gray-700 mb-2">距离悬屋约700米，步行10分钟可达，是当地最具烟火气的场所，市场内售卖新鲜的海鲜、水果、蔬菜、奶酪、火腿等当地特产，还有各类小吃摊位，可品尝当地特色小吃。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行10分钟 | 🏪 当地市场</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">老城核心区域</h4>
                  <p className="text-sm text-blue-800">首选区域，距离悬屋、昆卡大教堂等核心景点较近，步行即可抵达，周边环境古朴静谧，推窗即可欣赏老城的石质建筑与悬崖风光。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">火车站附近</h4>
                  <p className="text-sm text-green-800">距离火车站步行5-10分钟，周边有餐厅、便利店，生活便利，适合需要乘坐火车前往马德里、瓦伦西亚等周边城市的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">老城外围</h4>
                  <p className="text-sm text-yellow-800">距离核心区域步行15分钟可达，价格相对实惠，环境清幽，适合预算有限的游客，性价比突出。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端历史主题酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于老城内部，由古老的宫殿、府邸改建而成，部分酒店可欣赏悬屋与峡谷风光，融合了复古与现代元素，自带餐厅、观景露台。</p>
                  <div className="text-xs text-gray-500">💎 历史体验 | 🏰 古建筑</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于老城附近或火车站周边，步行可达核心景点，房间干净整洁，设施齐全，价格约75-115欧元/晚，性价比突出。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭出游</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">多为家庭经营，风格温馨，部分民宿带有厨房，可自己烹饪，价格实惠，还能感受当地居民的生活氛围，体验地道的西班牙生活。</p>
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
                    <p className="mb-2"><strong>旺季（6-10月）：</strong>夏季避暑旺季，峡谷风光最佳，建议提前1-2个月预订</p>
                    <p className="mb-2"><strong>淡季（12月至次年5月）：</strong>可提前1-2周预订，价格相对实惠</p>
                    <p><strong>文化套餐：</strong>部分高端酒店推出住宿+景点联票（如悬屋、大教堂联票）的优惠套餐</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>西班牙住宿通常不提供洗漱用品，需自备牙刷、牙膏等</p>
                    <p className="mb-2"><strong>特殊注意：</strong>老城部分酒店由古老建筑改建而成，无电梯，且街巷坡度较大</p>
                    <p><strong>注意事项：</strong>老城内部夜间安静，需保持安静；大部分酒店为无烟酒店</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                昆卡悬屋，这座悬崖之上的千年建筑奇迹，历经摩尔人的防御开拓、基督教的修缮发展，依然保留着最纯粹的中世纪风貌。它既有悬空建筑的视觉震撼，也有哥特式建筑的古朴庄严；既有自然峡谷的壮阔秀丽，也有中世纪老城的静谧烟火；既有艺术博物馆的人文气息，也有千年历史的厚重底蕴。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                在这里，你可以漫步悬屋露台，俯瞰峡谷风光，感受人类匠心与自然的完美融合；可以走进老城街巷，触摸石墙纹理，读懂昆卡的千年变迁；可以品尝当地美食，感受卡斯蒂利亚-拉曼恰的饮食文化。无论是独自旅行、情侣出游还是家庭度假，昆卡悬屋都能给你带来难忘的旅行体验。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在悬崖之上，邂逅一段跨越千年的建筑传奇，爱上这座兼具古朴与浪漫的山城。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}