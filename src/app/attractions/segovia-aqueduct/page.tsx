import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '塞戈维亚古罗马引水渠・Segovia Aqueduct・西班牙・塞戈维亚 | 最佳欧洲景点',
  description: '探索塞戈维亚古罗马引水渠，千年水利的石砌史诗，建于公元1世纪，由花岗岩砌筑而成，高约30米，拥有167个圆形拱洞，是欧洲保存最完整的古罗马水利工程之一。',
}

export default function SegoviaAqueductPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '塞戈维亚古罗马引水渠', href: '/attractions/segovia-aqueduct' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">塞戈维亚古罗马引水渠・Segovia Aqueduct・西班牙・塞戈维亚</h1>
          <p className="text-lg text-gray-600 mb-6">
            塞戈维亚古罗马引水渠是塞戈维亚的标志性景观，建于公元1世纪古罗马统治时期，由花岗岩砌筑而成，高约30米，拥有167个圆形拱洞，全长约15公里，无需任何黏合剂，仅靠石块重力拼接而成。它是欧洲保存最完整的古罗马水利工程，1985年随老城列入世界文化遗产，既承载着古罗马的水利智慧，也是解读古罗马建筑艺术的核心地标。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              塞戈维亚古罗马引水渠是塞戈维亚的标志性景观，建于公元1世纪古罗马统治时期，由花岗岩砌筑而成，高约30米，拥有167个圆形拱洞，全长约15公里，无需任何黏合剂，仅靠石块重力拼接而成。它是欧洲保存最完整的古罗马水利工程，1985年随老城列入世界文化遗产，既承载着古罗马的水利智慧，也是解读古罗马建筑艺术的核心地标。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="塞戈维亚古罗马引水渠" />
                <InfoRow label="英文名称" value="Segovia Aqueduct" />
                <InfoRow label="国家" value="西班牙（Spain）" />
                <InfoRow label="城市" value="塞戈维亚（Segovia）" />
                <InfoRow label="所属区域" value="西班牙卡斯蒂利亚-莱昂自治区" />
              </div>
              <div className="space-y-4">
                <InfoRow label="建造年代" value="公元1世纪" />
                <InfoRow label="建筑材料" value="花岗岩砌筑" />
                <InfoRow label="核心特色" value="167个圆形拱洞、无黏合剂拼接、高约30米" />
                <InfoRow label="历史地位" value="世界文化遗产、欧洲保存最完整的古罗马水利工程" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="引水渠主体全天开放，顶部步道夏季9:00-20:00，冬季9:00-17:00；每周一闭馆" />
              <InfoRow label="门票价格" value="引水渠顶部步道成人票8欧元，优惠票4欧元；12岁以下儿童免费；联票15欧元" />
              <InfoRow label="地址" value="Acueducto de Segovia, Plaza del Azoguejo, 40001 Segovia, Spain" />
              <InfoRow label="交通方式" value="从马德里乘高铁约1.5小时，票价45-65欧元；火车站乘1路、3路公交2站可达" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                塞戈维亚古罗马引水渠的历史可追溯至公元1世纪，正值古罗马帝国鼎盛时期，当时古罗马人统治伊比利亚半岛，塞戈维亚作为重要的军事与商业据点，因地处高原，海拔较高，除降雨外几乎无天然水源，夏季常面临严重水荒，无法满足居民生活与城市发展的需求，因此古罗马统治者决定修建一条引水工程，将城外的弗利奥河水引入城内。
              </p>
              <p>
                公元1世纪末，引水渠正式动工修建，由古罗马工程师设计，集结了当时最先进的水利与建筑技术，工匠们采用当地出产的花岗岩，摒弃了任何黏合剂与水泥，仅依靠石块之间的重力与精准的拼接工艺，将每块重达两吨的花岗岩紧密结合，历经约20年时间，完成了这座宏伟的水利工程。引水渠全长约15公里（部分史料记载为17公里），从城外的弗利奥河引水，通过极缓的坡度，跨越山谷与沟壑，最终将淡水引入城内，不仅解决了居民饮水问题，还能清除水中泥沙、提升水质，同时为城市的灌溉与公共设施提供水源。
              </p>
              <p>
                古罗马时期，这条引水渠是塞戈维亚城市发展的生命线，它的建成让塞戈维亚逐渐发展为伊比利亚半岛中部的重要城市，成为古罗马帝国在海外的重要据点。引水渠的设计极具科学性，工程师们精准计算坡度，确保水流平稳流动，无需任何动力驱动，实现了"水往高处走"的奇迹，展现了古罗马人高超的水利智慧与工程技术。
              </p>
              <p>
                公元5世纪，古罗马帝国衰落，塞戈维亚被西哥特人占领，引水渠虽遭到部分损坏，但核心结构依然完好，依然承担着城市的供水功能。中世纪时期，塞戈维亚成为卡斯蒂利亚王国的重要城市，统治者对引水渠进行了多次修缮，秉持"不改变外观与风格"的原则，保留了其古罗马时期的原貌，同时在引水渠周边修建了教堂、府邸、商铺等建筑，形成了错落有致的中世纪城市格局。
              </p>
              <p>
                15世纪至16世纪，塞戈维亚的商业与手工业逐渐繁荣，羊毛纺织业成为当地支柱产业，城市规模不断扩大，引水渠的供水功能依然不可或缺，成为城市发展的重要保障。17世纪，随着西班牙帝国的衰落，塞戈维亚的地位逐渐下降，引水渠因岁月侵蚀、战争破坏出现部分损毁，部分拱洞坍塌，墙体出现裂缝，当地居民自发组织修缮，延续了引水渠的历史风貌。
              </p>
              <p>
                19世纪，塞戈维亚政府开始对引水渠进行初步的系统性保护，重点加固坍塌的拱洞与墙体，防止进一步损毁，同时对引水渠周边的老建筑进行整治，保留中世纪城市格局。20世纪以来，西班牙政府加大了对塞戈维亚老城的保护力度，成立专门的文物保护机构，对引水渠进行全面修复，还原其古罗马时期的风貌，同时采用现代技术监测墙体稳定性，确保这座千年工程得以延续。
              </p>
              <p>
                1985年，塞戈维亚老城（含古罗马引水渠）因其完整保留的古罗马遗迹与中世纪城市风貌，被联合国教科文组织列为世界文化遗产，古罗马引水渠也成为全球闻名的建筑奇观，吸引着世界各地的游客前来探访。如今，这条历经两千多年风雨的引水渠依然在发挥作用，为塞戈维亚居民输送新鲜水源，成为古罗马文明与现代生活交融的见证。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（2-3小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从塞戈维亚火车站出发，步行12分钟或乘坐1路公交抵达阿索格霍广场，首先观赏引水渠主体景观，感受这座无黏合剂石砌工程的恢弘气势，近距离观察花岗岩的拼接细节与拱洞的对称之美，随后登上引水渠顶部步道，沿着步道漫步，俯瞰老城区的古朴风貌与远处的高原风光，感受古罗马水利工程的非凡智慧。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  之后从步道下来，前往塞戈维亚大教堂，这座被誉为"大教堂中的贵妇"的哥特式建筑，是西班牙修建的最后一座哥特式教堂，内部装饰精美，收藏了大量宗教艺术品，可参观教堂内的壁画、雕塑与彩色玻璃窗，感受中世纪宗教建筑的庄严与华丽；最后漫步在老城核心广场周边的石板街巷，欣赏周边的中世纪石质建筑，感受古城的静谧氛围，结束精华游览。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速体验引水渠精华
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（4-5小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加导览服务、小众遗迹参观与美食品尝，深入感受塞戈维亚的历史与人文魅力。参观完老城石板街巷后，预约老城官方导览（导览费10欧元/人，全程1.5小时，有西班牙语、英语、中文三种语言可选），跟随导览深入了解引水渠的建筑工艺、水利原理、历史典故，以及塞戈维亚从古罗马时期到中世纪的历史变迁，重点参观引水渠的修复遗迹与周边的小众古罗马遗址。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  导览结束后，前往阿尔卡萨城堡，这座童话般的城堡曾是伊莎贝拉女王即位的地方，也是迪士尼白雪公主城堡的原型，内部保留了中世纪的宫殿装饰、穆德哈尔式内饰与法式家具，可登上城堡塔楼，俯瞰整个塞戈维亚老城与引水渠的全景，感受中世纪的宫廷氛围与军事防御格局；随后前往塞戈维亚考古博物馆，参观馆藏的古罗马时期、西哥特时期与中世纪的各类文物，包括陶器、硬币、雕塑、古罗马水利工具等，快速了解塞戈维亚的千年历史发展历程。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  中午前往老城的特色餐厅，品尝塞戈维亚传统美食，如烤乳猪、曼彻戈奶酪、西班牙炖菜等，搭配当地产的葡萄酒，体验塞戈维亚的饮食文化；下午前往圣马丁教堂，这座罗马式与哥特式融合的教堂，外观古朴庄重，内部装饰简洁典雅，可感受不同建筑风格的碰撞；傍晚时分，返回阿索格霍广场，欣赏夕阳下的引水渠，夕阳洒在花岗岩墙体上，呈现出温暖的金色，氛围感拉满，结束深度游览。
                </p>
                <div className="text-sm text-green-800 bg-green-100 p-3 rounded">
                  <strong>适合人群：</strong>喜欢细致游览的游客，想要深度体验老城文化
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-800 mb-2">游览小贴士</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• 登上引水渠顶部步道需穿着舒适的步行鞋，步道部分路段较狭窄，注意脚下安全</li>
                <li>• 进入教堂、城堡等遗迹内部需着装端庄，避免穿着短裤、短裙、露肩装，需脱帽参观</li>
                <li>• 夏季（6-8月）是旅游旺季，参观人数较多，建议错峰前往（上午9:00前、下午18:00后）</li>
                <li>• 老城区部分街巷无饮用水售卖，建议提前准备好饮用水</li>
                <li>• 导览服务需提前在老城游客中心预约，避免排队等待</li>
                <li>• 引水渠设有无障碍坡道与电梯，残障人士可便捷游览，可在游客中心租借轮椅</li>
              </ul>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 阿索格霍广场（Plaza del Azoguejo）</h4>
                  <p className="text-sm text-gray-700">拍摄引水渠全景的最佳机位，站在广场中央，可将引水渠的主体、167个拱洞与周边的中世纪建筑尽收眼底，花岗岩墙体的古朴与拱洞的对称之美极具视觉冲击力，广场的石板路与周边商铺作为前景，增添了市井烟火气。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 引水渠顶部步道</h4>
                  <p className="text-sm text-gray-700">步道是拍摄引水渠特写与老城俯瞰景的绝佳机位，站在步道上，可近距离拍摄花岗岩的拼接纹理、拱洞的弧度与墙体的岁月痕迹，同时能俯瞰老城区的石板街巷、塞戈维亚大教堂与远处的高原风光，既能凸显引水渠的古朴厚重，又能展现老城的中世纪格局。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 引水渠底部仰视点</h4>
                  <p className="text-sm text-gray-700">站在引水渠底部，采用仰视视角拍摄，可凸显引水渠的恢弘气势，30米高的石砌拱洞层层叠叠，极具视觉震撼力，能清晰展现石块之间的拼接细节，展现古罗马工程师的精湛工艺。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 阿尔卡萨城堡塔楼</h4>
                  <p className="text-sm text-gray-700">城堡塔楼是老城的制高点之一，登上塔楼，可俯瞰整个塞戈维亚老城与引水渠的全景，引水渠的蜿蜒姿态与老城的建筑群落相互呼应，远处的高原风光尽收眼底，历史感与自然美完美融合。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 老城石板街巷</h4>
                  <p className="text-sm text-gray-700">老城的石板街巷狭窄幽深，两侧是中世纪石质建筑，从街巷中抬头可拍摄引水渠的局部景观，拱洞与街巷的建筑形成鲜明对比，自带复古静谧的氛围。建议选择午后拍摄，利用阳光在石板路上形成的光影，拍摄引水渠的局部特写与街巷细节。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 拉斯特罗步道（Paseo del Rastro）</h4>
                  <p className="text-sm text-gray-700">这条步道沿着引水渠西侧延伸，是拍摄引水渠侧面全景的绝佳机位，站在这里，可将引水渠的侧面轮廓、拱洞的排列与周边的自然景观尽收眼底，画面层次感十足，既能展现引水渠的雄伟，又能融入自然风光。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 引水渠以花岗岩的深灰色为主，建议穿搭素色或低饱和色衣物（如白色、米色、浅棕色），形成鲜明对比</li>
                <li>• 拍摄引水渠全景时，可采用广角视角，凸显引水渠的恢弘气势与拱洞的对称之美</li>
                <li>• 拍摄建筑特写时，可聚焦石块的拼接纹理与拱洞的弧度，展现其历史沧桑感</li>
                <li>• 尊重当地文化与文物保护规定，禁止在建筑上刻画、攀爬，拍摄时避免损坏文物</li>
                <li>• 拍摄人物时，需避免遮挡引水渠主体，兼顾建筑美感与人物形象</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">塞戈维亚大教堂</h4>
                <p className="text-sm text-gray-700 mb-2">距离引水渠约200米，步行3分钟可达，建于16世纪，是西班牙最后一座哥特式教堂，被誉为"大教堂中的贵妇"，外观庄重华丽，内部装饰精美，收藏了大量宗教艺术品与历史文物。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行3分钟 | ⛪ 哥特式教堂</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">阿尔卡萨城堡</h4>
                <p className="text-sm text-gray-700 mb-2">距离引水渠约500米，步行7分钟可达，始建于古罗马时期，中世纪时改建为宫殿与军事要塞，是伊莎贝拉女王即位的地方，也是迪士尼白雪公主城堡的原型，内部保留了中世纪的宫廷装饰与军事设施。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行7分钟 | 🏰 童话城堡</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">塞戈维亚考古博物馆</h4>
                <p className="text-sm text-gray-700 mb-2">距离引水渠约400米，步行6分钟可达，馆内收藏了塞戈维亚从古罗马时期、西哥特时期到中世纪的各类文物，包括古罗马水利工具、陶器、硬币、雕塑、石碑等，是了解塞戈维亚千年历史与古罗马文明的重要场所。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行6分钟 | 🏺 考古文物</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">圣马丁教堂</h4>
                <p className="text-sm text-gray-700 mb-2">距离引水渠约300米，步行4分钟可达，建于12世纪，融合了罗马式与哥特式建筑风格，外观古朴庄重，内部装饰简洁典雅，教堂的塔楼的可俯瞰老城局部风光。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行4分钟 | ⛪ 罗马式教堂</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">塞戈维亚中央市场</h4>
                <p className="text-sm text-gray-700 mb-2">距离引水渠约250米，步行4分钟可达，是当地最具烟火气的场所，市场内售卖新鲜的海鲜、水果、蔬菜、奶酪、火腿等当地特产，还有各类小吃摊位，可品尝当地特色小吃。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行4分钟 | 🏪 当地市场</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">弗利奥河景观带</h4>
                <p className="text-sm text-gray-700 mb-2">距离引水渠约1公里，步行15分钟可达，是古罗马引水渠的水源地，河流两岸风光秀丽，设有步行步道，可漫步河边，欣赏自然美景，感受引水渠的水利源头魅力。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行15分钟 | 🏞️ 自然景观</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">老城核心区域</h4>
                  <p className="text-sm text-blue-800">首选区域，距离古罗马引水渠、塞戈维亚大教堂等核心景点较近，步行即可抵达，周边环境古朴静谧，推窗即可欣赏老城的石质建筑与引水渠风光。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">火车站附近</h4>
                  <p className="text-sm text-green-800">距离火车站步行5-10分钟，周边有餐厅、便利店，生活便利，适合需要乘坐火车前往马德里、阿维拉等周边城市的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">老城外围</h4>
                  <p className="text-sm text-yellow-800">距离核心区域步行15分钟可达，价格相对实惠，环境清幽，适合预算有限的游客，性价比突出。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端历史主题酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于老城内部，由古老的宫殿、府邸改建而成，部分酒店可欣赏引水渠与老城风光，融合了复古与现代元素，自带餐厅、观景露台。</p>
                  <div className="text-xs text-gray-500">💎 历史体验 | 🏰 古建筑</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于老城附近或火车站周边，步行可达核心景点，房间干净整洁，设施齐全，价格约75-120欧元/晚，性价比突出。</p>
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
                    <p><strong>文化套餐：</strong>部分高端酒店推出住宿+景点联票（如引水渠、城堡联票）的优惠套餐</p>
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
                塞戈维亚古罗马引水渠，这座跨越两千多年的石砌水利史诗，历经古罗马的鼎盛、西哥特的统治、中世纪的繁荣，依然屹立在伊比利亚高原之上。它既有古罗马水利工程的精湛智慧，也有石砌建筑的恢弘气势；既有高原风光的壮阔秀丽，也有中世纪老城的静谧烟火；既有历史遗迹的厚重底蕴，也有现代生活的鲜活气息。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                在这里，你可以漫步引水渠步道，触摸花岗岩的岁月纹理，感受古罗马工程师的非凡匠心；可以走进老城街巷，探访城堡与教堂，读懂塞戈维亚的千年变迁；可以品尝当地美食，感受卡斯蒂利亚-莱昂的饮食文化。无论是独自旅行、情侣出游还是家庭度假，塞戈维亚古罗马引水渠都能给你带来难忘的旅行体验。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在千年石拱之下，邂逅一段跨越时空的古罗马传奇，爱上这座兼具古朴与浪漫的高原古城。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}