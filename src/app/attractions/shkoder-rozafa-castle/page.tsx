import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '斯库台罗扎法城堡深度旅游攻略：悬崖古堡与三河交汇之城的自由行指南',
  description: '探索阿尔巴尼亚的古老都城斯库台(Shkodër)。本深度游攻略涵盖罗扎法城堡打卡路线、历史文化与避坑指南，带你发现巴尔干半岛的隐秘瑰宝。',
}

export default function ShkoderRozafaCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '阿尔巴尼亚', href: '/destinations/albania' },
            { label: '斯库台', href: '/attractions/shkoder-rozafa-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`斯库台・Shkodër・阿尔巴尼亚・斯库台州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果让我推荐一个能让你瞬间忘记时间、仿佛一脚踏入史诗画卷的地方，那一定是斯库台。今天这份斯库台私藏旅游攻略，就带你躲开常规旅游团的人潮，去探访那座雄踞在石灰岩悬崖之上、俯瞰着布纳河、德林河和基里河三水交汇的罗扎法城堡。这里不只是阿尔巴尼亚北部的地理中心，更是这个国家千年历史的灵魂所在。作为你的专属向导，这份自由行指南请收好——我们会从如何抵达、怎样避开烈日人潮，讲到城堡里每一块石头诉说的故事。准备好了吗？让我们开始这场穿越时空的漫步。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，如果让我推荐一个能让你瞬间忘记时间、仿佛一脚踏入史诗画卷的地方，那一定是斯库台。今天这份斯库台私藏旅游攻略，就带你躲开常规旅游团的人潮，去探访那座雄踞在石灰岩悬崖之上、俯瞰着布纳河、德林河和基里河三水交汇的罗扎法城堡。这里不只是阿尔巴尼亚北部的地理中心，更是这个国家千年历史的灵魂所在。作为你的专属向导，这份自由行指南请收好——我们会从如何抵达、怎样避开烈日人潮，讲到城堡里每一块石头诉说的故事。准备好了吗？让我们开始这场穿越时空的漫步。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`斯库台`} />
                <InfoRow label="英文名称" value={`Shkodër`} />
                <InfoRow label="正式名称" value={`Shkodër`} />
                <InfoRow label="国家" value={`阿尔巴尼亚`} />
                <InfoRow label="城市" value={`斯库台州`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`斯库台的历史厚重得惊人，它是欧洲最古老的连续有人居住的城市之一。早在公元前4世纪，这里就是伊利里亚部落联盟的中心，一个令早期罗马共和国都头疼的强悍势力。到了中世纪，它成了塞尔维亚帝国、威尼斯共和国和后来的奥斯曼帝国反复争夺的焦点，这种拉锯战在罗扎法城堡的城墙上留下了层层叠叠的烙印。但斯库台最独特的历史地位，在于它长期作为宗教与文化多元共存的熔炉。在奥斯曼统治时期，这里的天主教徒、东正教徒和穆斯林比邻而居，教堂的钟声与清真寺的唤礼声交织，塑造了一种罕见的宽容氛围。正是这种深厚的、混杂了东西方文明的底蕴，让斯库台被誉为“阿尔巴尼亚的精神摇篮”，许多国家文化复兴运动的思想都从这里萌芽。`} />
                <InfoRow label="建筑特色" value={`罗扎法城堡本身就是一件由时间雕琢的巨型大地艺术。它不像那些修缮一新的童话城堡，而是粗粝、野性、充满了破碎的力量美。走近它，第一眼看到的是依山就势、与悬崖几乎融为一体的巨型石砌城墙。石材是就地取材的石灰岩，经数百年风雨，呈现出从灰白到赭石再到深褐的丰富层次，缝隙里顽强地钻出丛丛野草和灌木。城堡有三重主要的防御城墙，最核心的内堡高踞山顶。它的建筑细节充满了实用性带来的古朴美感：厚重的拱形门洞、仅容一人通过的狭窄甬道、以及那些用于倾倒滚油或射箭的垛口和射击孔。站在城堡上，你会看到不同时代的建筑残骸——威尼斯风格的拱门、奥斯曼时期加固的壁垒，它们交织在一起，没有任何修饰，却比任何完整的建筑都更具视觉冲击力。`} />
                <InfoRow label="建筑风格" value={`罗扎法城堡很难用单一的“哥特式”或“巴洛克式”来定义，它是一座典型的“层叠式”军事建筑，展示了从伊利里亚、罗马、中世纪到威尼斯和奥斯曼时期，不同防御理念和建筑技术的叠加。中世纪风格在这里体现得最为显著：极度强调防御功能，追求居高临下的威慑力。你会看到典型的中世纪城堡布局——外堡、中堡、内堡层层递进，每道城门都不在一条直线上，这是为了在敌人攻破一道门后，能进行有效的交叉火力狙击。而后期威尼斯共和国控制时期，则带来了一些更精细的石工技术，比如某些拱门和蓄水池的砌法。奥斯曼时期则增加了更多的火药时代防御工事的特点。这种风格的“混杂”恰恰是它最大的魅力，就像一本立体的、用石头写成的历史教科书，直观地告诉你这片土地经历了什么。`} />
                <InfoRow label="文化价值" value={`对于阿尔巴尼亚人而言，斯库台和罗扎法城堡远不止是一个旅游景点，它是民族坚韧精神的象征。城堡流传着一个悲壮而著名的“牺牲与永恒”的传说（罗扎法夫人传说），这深深融入了本地人的身份认同。今天，这里依然是文化生活的活跃中心。斯库台拥有阿尔巴尼亚最重要的摄影博物馆“马尔布里”，其爵士音乐节也在巴尔干地区享有盛名。走在老城街道，你会看到天主教堂、东正教堂和清真寺彼此相距不过百米，这种宗教和谐共生的景象是阿尔巴尼亚世俗化社会的缩影。城堡本身不仅吸引着游客，也是本地人家庭出游、年轻人约会、追思历史的地方。它从古代的军事堡垒，成功转型为连接过去与现在、承载集体记忆与当代生活的公共文化空间。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 斯库台罗扎法城堡一日游打卡路线攻略`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`经典自由行徒步路线推荐`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的专属向导，我为你规划了一条不走回头路的完美一日游路线。上午（9:00-12:30）：建议一早出发，避开暑热和人流。从斯库台市中心打车或乘坐当地小巴前往罗扎法城堡山脚。开始徒步上山，沿途欣赏三河交汇的壮丽全景。进入城堡后，先别急着登顶，沿着外围城墙漫步一圈，感受它的规模和气势。中午（12:30-14:00）：在内堡区域的阴凉处稍作休息，享用自带的简单午餐（记得带足水）。然后重点探索内堡的废墟、蓄水池和博物馆小展厅，了解关键历史。下午（14:00-17:00）：这是光线最好的时候，前往城堡西侧的最佳观景台，拍摄布纳河蜿蜒入湖的经典画面。随后下山，回到老城区。傍晚：将时间留给斯库台迷人的老城街道，逛逛步行街，为一天的震撼之旅画上宁静的句号。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  三河交汇全景：一定要找到城堡西侧那个毫无遮挡的悬崖观景台。站在这里，眼前是一幅活的地理画卷：左侧是墨绿色的布纳河从山洞中静静涌出，前方是宽阔的斯库台湖，右侧远方是德林河的河谷。阳光不同，水色变幻，尤其在傍晚，河流像镀金的缎带。你会瞬间理解为何历代君王都要争夺这个战略制高点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  城堡正门的浮雕：进入主城门时，抬头细看门楣。那里雕刻着威尼斯的圣马克飞狮徽章，虽然风化严重，但轮廓犹在。它的下方和周围，是更粗糙的、后来修补的石块。这一小块浮雕是城堡数次易主的沉默证人，轻轻触摸它，仿佛能触碰到15世纪威尼斯共和国鼎盛时期的海权野心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  地下蓄水池的穹顶与光影：内堡区域有一个巨大的地下蓄水池（如今已干涸）。走进这个阴凉的空间，你的注意力会被中央支撑柱和精美的砖砌穹顶吸引。阳光从唯一的入口斜射进来，在古老的砖石地面上投下清晰的光斑，空气中弥漫着凉爽的土石气味。这个空间异常宁静，回声悠长，是感受城堡内部建筑巧思和静谧氛围的绝佳地点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  废墟教堂的孤寂窗框：在内堡的一片空地上，伫立着一座只剩下三面墙和几个拱门的教堂废墟。其中一个石砌窗框保存相对完好，窗外正对着无尽的青山和原野。这个“取景框”将远处的自然风景完美地嵌入古老的石框中，形成一幅充满哲学意味的画面——当人类的文明归于废墟，自然依旧永恒。这是摄影师最爱的角落，也最适合一个人静静发呆。`}</p>
            </div>
          </Section>

          <Section title={`5. 斯库台自由行避坑指南与行前必备须知`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  时间与天气：最佳游览季节是春季（5-6月）和秋季（9-10月），气候宜人，风景翠绿或金黄。夏季（7-8月）务必赶早！ 阿尔巴尼亚夏日阳光非常猛烈，城堡上几乎无遮阴，建议早上9点前抵达开始游览，中午前后即可结束下山。带上充足的水、防晒霜、帽子和墨镜，这是保命配置。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  穿着与装备：一定一定要穿一双防滑、支撑性好的徒步鞋或运动鞋！ 城堡内的路全是原始的碎石、土路和凹凸不平的石阶，高跟鞋或凉鞋简直是灾难。穿着以轻便、透气、便于活动的衣物为佳。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  交通与门票：从市中心到城堡山脚，打车是最方便的选择（费用不高，可议价），告诉司机“Rozafa”即可。也有不定时的小巴。门票价格很便宜，直接在入口处购买。注意保管好个人财物，虽然阿尔巴尼亚整体治安不错，但景区人多眼杂，背包建议前背，贵重物品贴身放。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  饮食准备：城堡内没有任何餐厅，只有入口处可能有小贩售卖瓶装水。强烈建议在市区超市提前购买好午餐的干粮、水果和足量饮用水。下山后，再到老城找家餐馆好好慰劳自己。`}</p>
            </div>
          </Section>

          <Section title={`6. 斯库台特色住宿与地道美食攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`斯库台的住宿体验很特别，我强烈推荐住在老城（Qendra）附近，而不是现代化的新区。这里有不少由传统奥斯曼风格老宅改造的精品客栈（Guesthouse），石头外墙、木制阳台、内部庭院小巧精致，价格亲民且主人热情，能给你最地道的阿尔巴尼亚家庭式接待。餐饮方面，一定要尝试斯库台的湖鲜！“Restaurant Tradita Geg & Tosk” 不仅建筑本身是一座精美的民俗博物馆，其菜品更是经典。点一道 “鲤鱼配核桃酱”（Krap me Salcë Arra） ，这是斯库台湖区的招牌，鱼的鲜嫩与坚果酱的浓郁口感形成绝妙对比。此外，用当地羊肉制作的 “塔夫”（Tavë） 烘烤菜也值得一试。在老城步行街，傍晚时分找一家咖啡馆，点一杯阿尔巴尼亚特色的土耳其咖啡，看着街头人来人往，完美融入本地生活。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`除了城堡，斯库台老城本身就值得花半天细细品味。我特别推荐步行可达的 “被铅封的圣母教堂”（Kisha e Shna Ndout） 。这座天主教堂在共产主义时期被强行改为体育馆，但1990年人们冲破阻力在此举行弥撒，成为阿尔巴尼亚宗教自由回归的象征事件。它的故事就是一部微缩的现代史，外观朴素，内部氛围却无比肃穆感人。另一个步行稍远但值得一去的是 “斯库台历史博物馆” ，它坐落在一座漂亮的奥匈帝国时期建筑里，能帮你系统梳理从伊利里亚时期到20世纪这座城市跌宕起伏的历史脉络，让你在看过城堡的“形”之后，更能理解它的“魂”。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`斯库台的灵魂，就凝结在罗扎法城堡那粗糙的岩石与脚下不息的三河之水之间——它是一种层叠的坚韧，在无数次征服与重建中，始终保持着自我内核对多元与共生的追求。这座城市教会你的，不是历史的辉煌，而是历史如何在破碎中沉淀出力量与平静。这份斯库台深度游避坑指南，希望能带你触碰到这份平静的力量。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kruja-castle-bazaar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克鲁亚</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kruja</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/berat-thousand-windows" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    培
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">培拉特（千窗之城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Berat</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gjirokaster-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    吉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">吉诺卡斯特（石头城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gjirokastër</p>
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
