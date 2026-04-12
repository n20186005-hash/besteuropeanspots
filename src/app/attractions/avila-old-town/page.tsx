import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿维拉古城墙・Ávila Old Town・西班牙・阿维拉 | 最佳欧洲景点',
  description: '探索阿维拉古城墙，石砌千年的中世纪防御传奇，始建于12世纪，由花岗岩砌筑而成，是欧洲最完整的中世纪防御城墙之一，兼具军事防御智慧与古朴人文底蕴。',
}

export default function AvilaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '阿维拉古城墙', href: '/attractions/avila-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">阿维拉古城墙・Ávila Old Town・西班牙・阿维拉</h1>
          <p className="text-lg text-gray-600 mb-6">
            阿维拉古城墙是西班牙阿维拉的标志性景观，始建于12世纪，由花岗岩砌筑而成，周长约2460米，拥有9座城门、88个圆形碉堡，是欧洲最完整的中世纪防御城墙之一。它兼具军事防御与人文价值，环绕着古朴的老城区，与城内的哥特式教堂、圣特蕾莎相关遗迹相映成趣，1985年列入世界文化遗产，是解读西班牙中世纪历史与建筑艺术的核心地标。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              阿维拉古城墙是西班牙阿维拉的标志性景观，始建于12世纪，由花岗岩砌筑而成，周长约2460米，拥有9座城门、88个圆形碉堡，是欧洲最完整的中世纪防御城墙之一。它兼具军事防御与人文价值，环绕着古朴的老城区，与城内的哥特式教堂、圣特蕾莎相关遗迹相映成趣，1985年列入世界文化遗产，是解读西班牙中世纪历史与建筑艺术的核心地标。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="阿维拉古城墙" />
                <InfoRow label="英文名称" value="Ávila Old Town" />
                <InfoRow label="国家" value="西班牙（Spain）" />
                <InfoRow label="城市" value="阿维拉（Ávila）" />
                <InfoRow label="所属区域" value="西班牙卡斯蒂利亚-莱昂自治区" />
              </div>
              <div className="space-y-4">
                <InfoRow label="建造年代" value="12世纪" />
                <InfoRow label="建筑材料" value="花岗岩砌筑" />
                <InfoRow label="核心特色" value="中世纪防御城墙、9座城门、88个圆形碉堡" />
                <InfoRow label="历史地位" value="世界文化遗产、欧洲保存最完好的中世纪防御城墙" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="古城墙步道夏季9:00-20:00，冬季9:00-17:00；每周一闭馆" />
              <InfoRow label="门票价格" value="城墙步道成人票6欧元，优惠票3欧元；12岁以下儿童免费；联票12欧元" />
              <InfoRow label="地址" value="Muralla de Ávila, 05001 Ávila, Spain" />
              <InfoRow label="交通方式" value="从马德里乘高铁约1.5小时，票价40-60欧元；火车站乘2路、4路公交3站可达" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                阿维拉古城墙的历史可追溯至远古时期，最早由伊比利亚人在这片高原之上建立定居点，依托地势形成初步的防御格局，为后续城墙的建造奠定了基础。传说这里是神话中大力士海格力斯之子建立的城邦，虽无确切史料佐证，却为这座古城增添了浓厚的传奇色彩。公元711年，摩尔人入侵伊比利亚半岛，阿维拉被纳入摩尔人统治范围，成为当时重要的军事据点，此时开始出现简易的防御工事，用于抵御外敌入侵。
              </p>
              <p>
                公元1085年，阿方索六世带领基督军队收复阿维拉，这座城市成为西班牙基督教王国的重要前沿阵地，为抵御摩尔人反扑，统治者决定修建一座坚固的石质城墙。12世纪，城墙正式动工修建，工匠们采用当地出产的花岗岩，以糯米灰浆粘合，依托高原地形，建造出周长约2460米、高12米、厚3米的防御城墙，整体呈六边形，设有9座城门、88个圆形碉堡和2500个城楼，形成了"一夫当关，万夫莫开"的防御体系，历经4个世纪才彻底完工。
              </p>
              <p>
                中世纪时期，阿维拉古城墙不仅是军事防御屏障，更是城市发展的边界与象征。城墙内逐步建成了教堂、府邸、商铺、民居等建筑，形成了错落有致的中世纪城市格局，阿维拉也逐渐发展为卡斯蒂利亚地区的宗教与商业中心。这座城墙见证了无数历史变迁，抵御过摩尔人的多次反扑，也经历过基督教王国的扩张与繁荣，城墙的每一块花岗岩，都镌刻着中世纪西班牙的兴衰印记。
              </p>
              <p>
                此外，阿维拉还是天主教圣人特蕾莎圣女的出生地，中世纪后期，随着圣特蕾莎的影响力扩大，城墙内陆续建成了多座与圣特蕾莎相关的修道院、礼拜堂，古城墙也成为圣徒文化与军事防御文化交融的载体。15世纪至16世纪，阿维拉的商业与手工业逐渐繁荣，羊毛纺织业成为当地支柱产业，城墙周边陆续扩建了商铺与民居，城墙的防御功能逐渐弱化，但依然是城市的重要标志。
              </p>
              <p>
                20世纪以来，西班牙政府加大了对阿维拉老城的保护力度，成立专门的文物保护机构，对古城墙进行全面修复，还原其中世纪的防御风貌，同时对城墙周边的老建筑进行整治，保留中世纪城市格局。1985年，阿维拉老城（含古城墙）因其完整保留的中世纪防御体系与古朴的城市风貌，被联合国教科文组织列为世界文化遗产，古城墙也成为全球闻名的建筑奇观，吸引着世界各地的游客前来探访。
              </p>
              <p>
                如今，阿维拉古城墙依然屹立在高原之上，历经近900年的风雨洗礼，依然保留着中世纪的古朴风貌，花岗岩墙体泛着岁月的光泽，圆形碉堡错落有致，城门庄重古朴，与城内的哥特式建筑相互映衬，成为自然与人文、军事与宗教交融的典范。它不仅是阿维拉的城市象征，更是西班牙中世纪建筑智慧的结晶，承载着阿维拉千年的历史变迁与多元文化的交融印记。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（2-3小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从阿维拉火车站出发，步行15分钟或乘坐2路公交抵达圣维森特门（城墙主入口），购买门票后登上城墙步道，沿着步道漫步，欣赏城墙的花岗岩墙体、圆形碉堡与城楼，感受中世纪防御工事的恢弘气势，途中可俯瞰老城区的古朴风貌与远处的阿维拉山脉风光。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  之后从圣玛利亚门下车，前往阿维拉大教堂，这座建于12世纪的哥特式教堂，是西班牙第一座哥特式教堂，本身也是古城墙的一部分，兼具城堡防御功能，外观朴素与城墙融为一体，内部装饰精美，可参观教堂内的壁画、雕塑与彩色玻璃窗，感受中世纪宗教建筑的庄严与古朴；最后漫步在老城核心广场周边的石板街巷，欣赏周边的中世纪石质建筑，感受古城的静谧氛围，结束精华游览。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速体验城墙精华
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（4-5小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加导览服务、小众遗迹参观与美食品尝，深入感受阿维拉的历史与人文魅力。参观完老城石板街巷后，预约老城官方导览（导览费9欧元/人，全程1.5小时，有西班牙语、英语、中文三种语言可选），跟随导览深入了解古城墙的建筑工艺、历史典故，以及阿维拉从摩尔人统治到基督教收复的历史变迁，重点参观城墙的小众碉堡与城门遗迹。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  导览结束后，前往圣特蕾莎修道院，这座修道院建于圣特蕾莎圣女的故居原址，内部保留了圣特蕾莎的遗物与相关文物，巴洛克式礼拜堂精美华丽，可深入了解圣特蕾莎的生平与宗教文化；随后前往阿维拉考古博物馆，参观馆藏的古罗马时期、摩尔人时期与基督教时期的各类文物，包括陶器、硬币、雕塑、石碑等，快速了解阿维拉的千年历史发展历程。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  中午前往老城的特色餐厅，品尝卡斯蒂利亚-莱昂传统美食，如烤乳羊、曼彻戈奶酪、西班牙炖菜等，搭配当地产的葡萄酒，体验阿维拉的饮食文化；下午前往阿尔卡萨城堡遗址，这座童话般的堡垒曾是中世纪的军事要塞，如今虽只剩部分遗迹，但仍能俯瞰整个阿维拉老城与古城墙的全景，感受中世纪的军事防御格局；傍晚时分，返回古城墙步道，欣赏夕阳下的城墙与老城风光，感受古城的静谧与浪漫，结束深度游览。
                </p>
                <div className="text-sm text-green-800 bg-green-100 p-3 rounded">
                  <strong>适合人群：</strong>喜欢细致游览的游客，想要深度体验老城文化
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-800 mb-2">游览小贴士</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• 登上城墙步道需穿着舒适的步行鞋，步道部分路段较狭窄，注意脚下安全</li>
                <li>• 进入教堂、修道院等遗迹内部需着装端庄，避免穿着短裤、短裙、露肩装，需脱帽参观</li>
                <li>• 夏季（6-8月）是旅游旺季，参观人数较多，建议错峰前往（上午9:00前、下午18:00后）</li>
                <li>• 老城区部分街巷无饮用水售卖，建议提前准备好饮用水</li>
                <li>• 导览服务需提前在老城游客中心预约，避免排队等待</li>
                <li>• 城墙设有无障碍坡道与电梯，残障人士可便捷游览，可在游客中心租借轮椅</li>
              </ul>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 四柱台（Los Cuatro Postes）</h4>
                  <p className="text-sm text-gray-700">拍摄阿维拉古城墙全景的最佳机位，位于阿维拉城外，相传是圣特蕾莎圣女曾经停留的地方，站在这里，可将古城墙的全貌、老城区的建筑群落与远处的阿维拉山脉尽收眼底，城墙的六边形轮廓与圆形碉堡极具视觉冲击力，自然景观与人文建筑相互映衬，氛围感拉满。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 古城墙步道中段</h4>
                  <p className="text-sm text-gray-700">城墙步道中段是拍摄城墙特写与老城俯瞰景的绝佳机位，站在步道上，可近距离拍摄花岗岩墙体的纹理、圆形碉堡的细节与城楼的轮廓，同时能俯瞰老城区的石板街巷与哥特式建筑，既能凸显城墙的古朴厚重，又能展现老城的中世纪格局。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 圣维森特门</h4>
                  <p className="text-sm text-gray-700">圣维森特门是古城墙的主入口，也是拍摄城门特写与人物合影的绝佳机位，城门庄重古朴，花岗岩门框上刻有中世纪的浮雕，搭配两侧的碉堡，极具中世纪军事氛围。站在城门下方，可拍摄城门的仰视视角，凸显其恢弘气势。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 阿维拉大教堂钟楼</h4>
                  <p className="text-sm text-gray-700">大教堂的钟楼是老城的制高点之一，登上钟楼，可俯瞰整个阿维拉老城与古城墙的全景，城墙环绕老城的姿态清晰可见，远处的高原风光与近处的宗教建筑相互呼应，历史感与自然美完美融合。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 老城石板街巷</h4>
                  <p className="text-sm text-gray-700">老城的石板街巷狭窄幽深，两侧是中世纪石质建筑，从街巷中抬头可拍摄古城墙的局部景观，城墙的墙体与街巷的建筑形成鲜明对比，自带复古静谧的氛围。建议选择午后拍摄，利用阳光在石板路上形成的光影，拍摄城墙的局部特写与街巷细节。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 南连索观景点（Lienzo Sur）</h4>
                  <p className="text-sm text-gray-700">这个观景点位于城墙南侧，是拍摄城墙南面全景与安布尔斯山谷风光的绝佳位置，站在这里，可将城墙的南侧轮廓、圆形碉堡与山谷的自然景观尽收眼底，城墙的雄伟与山谷的秀丽相互映衬，画面层次感十足。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 古城墙以花岗岩的深灰色为主，建议穿搭素色或低饱和色衣物（如白色、米色、浅棕色），形成鲜明对比</li>
                <li>• 拍摄城墙全景时，可采用广角视角，凸显城墙的恢弘气势与六边形格局</li>
                <li>• 拍摄建筑特写时，可聚焦墙体的纹理、碉堡的细节与城门的浮雕，展现其历史沧桑感</li>
                <li>• 尊重当地文化与文物保护规定，禁止在建筑上刻画、攀爬，拍摄时避免损坏文物</li>
                <li>• 拍摄人物时，需避免遮挡城墙主体，兼顾建筑美感与人物形象</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">阿维拉大教堂</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城墙主入口（圣维森特门）约200米，步行3分钟可达，建于12世纪，是西班牙第一座哥特式教堂，本身也是古城墙的一部分，兼具城堡防御功能，外观朴素与城墙融为一体，内部装饰精美。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行3分钟 | ⛪ 哥特式教堂</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">圣特蕾莎修道院</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城墙约400米，步行6分钟可达，建于圣特蕾莎圣女的故居原址，是巴洛克式建筑风格，内部保留了圣特蕾莎的遗物、手稿与相关文物，设有专门的展厅介绍圣特蕾莎的生平与宗教贡献。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行6分钟 | 🏛️ 巴洛克建筑</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">阿维拉考古博物馆</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城墙约500米，步行8分钟可达，馆内收藏了阿维拉从古罗马时期、摩尔人时期到基督教时期的各类文物，包括陶器、硬币、雕塑、石碑、武器等，是了解阿维拉千年历史的重要场所。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行8分钟 | 🏺 考古文物</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">阿尔卡萨城堡遗址</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城墙约700米，步行10分钟可达，始建于摩尔人统治时期，是中世纪的军事要塞，如今虽只剩部分遗迹，但仍能俯瞰整个阿维拉老城与古城墙的全景，感受中世纪的军事防御格局。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行10分钟 | 🏰 军事遗迹</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">阿维拉中央市场</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城墙约300米，步行5分钟可达，是当地最具烟火气的场所，市场内售卖新鲜的海鲜、水果、蔬菜、奶酪、火腿等当地特产，还有各类小吃摊位，可品尝当地特色小吃。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行5分钟 | 🏪 当地市场</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">拉斯特罗大道（Paseo del Rastro）</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城墙约600米，步行9分钟可达，是一条沿着城墙南侧的景观大道，沿途可欣赏城墙的南侧风貌与安布尔斯山谷的风光，是散步、拍照的绝佳去处，沿途还有多家特色餐厅与咖啡馆。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行9分钟 | 🌄 景观大道</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">老城核心区域</h4>
                  <p className="text-sm text-blue-800">首选区域，距离古城墙、阿维拉大教堂等核心景点较近，步行即可抵达，周边环境古朴静谧，推窗即可欣赏老城的石质建筑与城墙风光。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">火车站附近</h4>
                  <p className="text-sm text-green-800">距离火车站步行5-10分钟，周边有餐厅、便利店，生活便利，适合需要乘坐火车前往马德里、萨拉曼卡等周边城市的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">老城外围</h4>
                  <p className="text-sm text-yellow-800">距离核心区域步行15分钟可达，价格相对实惠，环境清幽，适合预算有限的游客，性价比突出。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端历史主题酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于老城内部，由古老的宫殿、府邸改建而成，部分酒店可欣赏古城墙与老城风光，融合了复古与现代元素，自带餐厅、观景露台。</p>
                  <div className="text-xs text-gray-500">💎 历史体验 | 🏰 古建筑</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于老城附近或火车站周边，步行可达核心景点，房间干净整洁，设施齐全，价格约70-110欧元/晚，性价比突出。</p>
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
                    <p className="mb-2"><strong>旺季（6-9月）：</strong>夏季避暑旺季，高原风光最佳，建议提前1-2个月预订</p>
                    <p className="mb-2"><strong>淡季（12月至次年5月）：</strong>可提前1-2周预订，价格相对实惠</p>
                    <p><strong>文化套餐：</strong>部分高端酒店推出住宿+景点联票（如城墙、大教堂联票）的优惠套餐</p>
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
                阿维拉古城墙，这座石砌千年的中世纪防御传奇，历经摩尔人的入侵、基督教的收复，依然保留着最纯粹的中世纪风貌。它既有军事防御工事的恢弘气势，也有哥特式建筑的古朴庄严；既有高原风光的壮阔秀丽，也有中世纪老城的静谧烟火；既有圣徒文化的人文底蕴，也有千年历史的厚重印记。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                在这里，你可以漫步城墙步道，触摸花岗岩的岁月纹理，感受中世纪军事智慧的魅力；可以走进老城街巷，探访圣特蕾莎的遗迹，读懂阿维拉的千年变迁；可以品尝当地美食，感受卡斯蒂利亚-莱昂的饮食文化。无论是独自旅行、情侣出游还是家庭度假，阿维拉古城墙都能给你带来难忘的旅行体验。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在石砌城墙之下，邂逅一段跨越千年的中世纪传奇，爱上这座兼具古朴与厚重的高原古城。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}