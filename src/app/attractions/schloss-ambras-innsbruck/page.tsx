import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '安布拉斯城深度旅游攻略：揭秘因斯布鲁克山间的皇家奇珍博物馆',
  description: '探索奥地利因斯布鲁克的安布拉斯城（Schloss Ambras），一份完整的深度游攻略，带你走进欧洲最早博物馆的奇珍世界，包含门票交通与一日游路线。',
}

export default function SchlossAmbrasInnsbruckPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '奥地利', href: '/destinations/austria' },
            { label: '安布拉斯城', href: '/attractions/schloss-ambras-innsbruck' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`安布拉斯城・Schloss Ambras・奥地利・蒂罗尔州（因斯布鲁克）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你觉得因斯布鲁克只有金色屋顶和滑雪场，那你可错过了一个真正的宝藏。今天这份**安布拉斯城私藏旅游攻略**，就带你躲开老城的人潮，往东南方向的山林里走一小段。安布拉斯城不是一座普通的城堡，它是文艺复兴时期一位“收藏癖”大公的梦幻乐园，被誉为欧洲最早的博物馆雏形。在这里，你会看到令人瞠目结舌的“奇珍柜”——从华丽的铠甲、异域的风物到科学仪器和古怪的生物标本。它不仅仅是一座宫殿，更是一个16世纪的“世界微缩模型”。作为你的专属向导，这份**安布拉斯城自由行指南**将帮你规划完美的行程，从如何抵达，到如何看懂那些光怪陆离的收藏，让你一次看个明白，绝不走马观花。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友，如果你觉得因斯布鲁克只有金色屋顶和滑雪场，那你可错过了一个真正的宝藏。今天这份<strong>安布拉斯城私藏旅游攻略</strong>，就带你躲开老城的人潮，往东南方向的山林里走一小段。安布拉斯城不是一座普通的城堡，它是文艺复兴时期一位“收藏癖”大公的梦幻乐园，被誉为欧洲最早的博物馆雏形。在这里，你会看到令人瞠目结舌的“奇珍柜”——从华丽的铠甲、异域的风物到科学仪器和古怪的生物标本。它不仅仅是一座宫殿，更是一个16世纪的“世界微缩模型”。作为你的专属向导，这份<strong>安布拉斯城自由行指南</strong>将帮你规划完美的行程，从如何抵达，到如何看懂那些光怪陆离的收藏，让你一次看个明白，绝不走马观花。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`安布拉斯城`} />
                <InfoRow label="英文名称" value={`Schloss Ambras`} />
                <InfoRow label="正式名称" value={`Schloss Ambras`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`蒂罗尔州（因斯布鲁克）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`安布拉斯城的灵魂人物，是哈布斯堡王朝的费迪南德二世大公。这位文艺复兴时期的王子，不仅是一位统治者，更是一位狂热的艺术与科学收藏家。16世纪下半叶，他将一座中世纪城堡改建为自己的夏宫，并做了一件在当时极具开创性的事：他系统性地将自己的收藏向学者和尊贵的客人展示。这间“艺术与奇珍室”（Kunst- und Wunderkammer）的诞生，比牛津的阿什莫林博物馆和佛罗伦萨的乌菲兹美术馆都要早，被认为是现代博物馆概念的真正先驱。它代表的是一种文艺复兴时期的世界观：试图将人类知识、艺术创造和自然奇迹全部收纳于一室，构建一个微型的宇宙。因此，安布拉斯城在欧洲文化史上的地位，远远超出了一座皇家宫殿，它是一个思想启蒙的圣地，是“收藏即认知”这一理念的实体纪念碑。`} />
                <InfoRow label="建筑特色" value={`安布拉斯城依山而建，巧妙地与周围的森林景观融为一体，更像是一座大型的别墅庄园，而非威严的军事堡垒。其外观是典型的文艺复兴风格，但保留了许多中世纪的结构基础。最引人注目的是其温暖色调的外墙，红白相间的墙面在阿尔卑斯的阳光下显得格外明媚。建筑群分为上城堡和下城堡。下城堡的**西班牙大厅**拥有令人震撼的挑高和27幅巨大的蒂罗尔贵族肖像壁画，阳光从高大的窗户射入，在光滑的木地板上投下长长的光斑，整个空间回荡着一种庄严又空旷的历史感。连接上下城堡的通道和庭院，铺着碎石子，墙壁是粗糙的石材，当你用手触摸那些冰凉的石块，能瞬间感受到数百年的时光沉淀。`} />
                <InfoRow label="建筑风格" value={`安布拉斯城是文艺复兴风格在阿尔卑斯地区的杰出体现，同时又带有独特的“曼纳主义”装饰趣味。文艺复兴风格的核心——对称、比例、古典元素的复兴——在这里清晰可见，尤其是拱廊庭院和规整的立面设计。然而，让它与众不同的是其内部装饰所体现的“奇珍”美学。这不仅仅是建筑风格，更是内容风格。例如，在**奇珍室**里，建筑本身成为一个“展示柜”，精美的意大利式木镶板柜子被直接嵌入墙壁，用来陈列琳琅满目的藏品。这种将建筑内部空间与收藏功能深度结合的设计，本身就是一种风格宣言。它不像后期巴洛克那样繁复炫目，而是在一种古典的秩序框架内，填充以最大限度的好奇与幻想，建筑为奇观服务，营造出一种“知识的迷宫”般的独特氛围。`} />
                <InfoRow label="文化价值" value={`对于现代人而言，安布拉斯城是一座理解欧洲人如何“看世界”的活化石。它的“奇珍室”收藏——比如象牙雕、珊瑚、鸵鸟蛋、犀牛角、自动机械——展现了16世纪精英阶层对全球的认知欲望和分类尝试。它深深影响了蒂罗尔乃至奥地利的文化身份，使其不仅是滑雪胜地，更是拥有深厚人文底蕴的历史之州。今天，它持续吸引着艺术史家、博物馆学者和普通游客，提醒我们博物馆最初的魅力并非冰冷的陈列，而是充满个人激情、探险精神和对万物惊叹的“惊奇之屋”。它如同一面镜子，既照见了过去人类的好奇边界，也启发着当代关于收藏、展示与知识建构的思考。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 安布拉斯城一日游打卡路线攻略：从奇珍室到西班牙大厅`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行精华游览路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好啦，收好这份路线，我们出发！建议你上午从因斯布鲁克市中心搭乘电车或巴士（具体交通后面会讲），大约20分钟就能抵达。**上午**：先别急着进主楼，在城堡公园里散个步，从远处欣赏城堡与阿尔卑斯山同框的明信片视角。10点开门后，首先参观**下城堡**，重点是那个辉煌的**西班牙大厅**，感受一下皇家庆典的排场。接着，钻进下城堡内部的**铠甲馆**，看看那些精美绝伦、犹如钢铁雕塑的骑士盔甲。**中午**：就在城堡的庭院或咖啡馆休息，尝尝简单的奥地利小吃。**下午**：这是重头戏，前往**上城堡**。这里有三宝：**肖像画廊**、**奇珍室**和**浴室**。花最多的时间泡在奇珍室里，每一个柜子都像一本立体的探险小说。最后，别错过城堡小教堂，安静片刻。这样安排，节奏张弛有度，精华尽收眼底。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>西班牙大厅的肖像眼神</strong>：仰头看那27幅真人大小的贵族肖像。不要一扫而过，停下来，仔细看他们的眼睛和服饰细节。你会发现，尽管姿势庄重，但每个人的眼神都截然不同——有的傲慢，有的忧郁，有的甚至带着一丝狡黠。这些由画家 Giovanni Battista Fontana 创作的壁画，让冰冷的石头大厅充满了人的温度，仿佛一场跨越四百年的无声宴会仍在继续。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>奇珍室的“海妖”与象牙舟</strong>：在一个玻璃柜中，你会看到一个用鳐鱼标本精心制作成的“海妖”模型，这是当时人们对未知生物的奇幻想象。不远处的另一个柜子里，静静躺着一艘用整根象牙雕刻成的微型船只，精细到桅杆和绳索都清晰可辨。这两件物品并置，完美诠释了“奇珍室”的精神：将自然造物（哪怕是被误解的）与人类极致工艺平等地视为世界的奇迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>费迪南德大公的庆典铠甲</strong>：在铠甲馆，寻找那套装饰最为繁复、表面布满蚀刻花纹的白色铠甲。它并非为实战打造，而是用于宫廷庆典。靠近看，你会发现花纹中藏着神话场景和复杂的蔓藤纹，在灯光下闪着幽微的金属光泽。你能想象大公穿着它在西班牙大厅起舞时，铠甲如何随着动作发出清脆而富有节奏的声响，那是一种权力与艺术结合而成的独特乐章。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>浴室穹顶的星空壁画</strong>：在上城堡的私人浴室里，抬头看穹顶。这里绘着古老的星空图。文艺复兴时期的贵族，即使在最私密、最放松的时刻，也渴望将宇宙纳入自己的视野。躺在浴池中仰望自己绘制的星空，这种极致的浪漫与自恋，只有在安布拉斯城才能如此真切地体会到。" }} />
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>时间与交通是王道</strong>：城堡每周一闭馆（旺季可能调整，务必官网复核）。<strong>最佳游览时间</strong>是工作日早晨开门时，能独享清静。从因斯布鲁克火车站乘坐 <strong>Tram 3</strong> 或 <strong>Bus 4134</strong> 可直达“Ambras”站，这是最方便的方式。自驾的话停车场较小，旺季可能一位难求。购买<strong>因斯布鲁克卡</strong>通常包含门票和公共交通，非常划算。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>穿着与参观贴士</strong>：城堡内部需要大量步行和上下楼梯，请务必穿一双舒适的鞋子。部分房间为保护藏品，光线较暗且温度较低，夏季也建议带件薄外套。参观奇珍室时，请尽量压低说话声音，那些古老的木柜、脆弱的标本和静谧的氛围，值得你轻声细语地去欣赏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>防盗与深度体验</strong>：虽然蒂罗尔治安很好，但在旅游巴士上下车点和城堡入口处，仍需看管好随身物品。想要<strong>深度游</strong>，强烈推荐租用<strong>语音导览</strong>（有中文），否则你面对满屋子的奇珍异宝，很可能只看个热闹。导览会告诉你每件藏品背后的疯狂故事，比如那颗“独角兽的角”（其实是独角鲸的牙）在当时是多么珍贵。" }} />
            </div>
          </Section>

          <Section title={`6. 安布拉斯城周边住宿与美食攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "参观完城堡，如果意犹未尽，可以在其自家的<strong>城堡咖啡馆</strong>稍作停留。坐在露天座位，点一份经典的<strong>苹果卷</strong>或<strong>皇帝煎饼</strong>，配上一杯咖啡，俯瞰下方的花园，体验一把“大公的午后”。如果想品尝更地道的蒂罗尔农家菜，可以返回因斯布鲁克市区，在老城的小巷里寻找提供<strong>蒂罗尔拼盘</strong>的餐厅——里面有熏肉、香肠、酸菜和饺子，分量十足。住宿方面，不建议直接住在城堡附近（多为居民区），最好的选择是住在<strong>因斯布鲁克老城</strong>或火车站周边。这样晚上可以去逛逛老城，去 Nordkette 山看夜景，交通也四通八达。从老城坐车来安布拉斯城非常方便，完全可以实现“住市中心，游山间城堡”的完美搭配。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从安布拉斯城返回市区后，强烈推荐你去一个风格迥异但同样精彩的<strong>霍夫堡皇宫</strong>。它就在因斯布鲁克老城里，是哈布斯堡王朝的冬季行宫，与作为夏季“好奇之屋”的安布拉斯城形成鲜明对比。霍夫堡是极尽奢华的洛可可风格，尤其是那间令人眼花缭乱的<strong>巨人厅</strong>。在一天之内，看完费迪南德大公充满私人趣味的山间别墅，再看帝国中心威严华丽的官方宫殿，你会对哈布斯堡家族的权力与个性，有一个无比生动而立体的理解。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "安布拉斯城的灵魂，在于它完美封装了一个文艺复兴人面对广阔世界时，那份天真又执着的好奇心。它不像许多宫殿那样只讲述权力与荣耀，而是在轻声诉说：看啊，这个世界多么奇妙，从星辰到甲虫，从异域到本土，都值得被珍视、收藏并展示给后来者。这是一座由“惊叹”筑成的城堡。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/votive-church" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沃蒂夫教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Votive Church</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/mariazell-basilica-pilgrimage-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    玛
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">玛丽亚采尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mariazell</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/melk-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅尔克修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Melk Abbey</p>
                  </div>
                </div>
              </a>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
