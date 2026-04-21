import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '哈瑟尔特深度旅游攻略：运河老城、哥特教堂与丁香酒香的自由行指南',
  description: '探索荷兰哈瑟尔特（Hasselt）的运河网络、圣斯蒂芬大教堂与百年丁香酒酿造史。这份深度游攻略涵盖一日游路线、避坑指南与美食推荐，带你玩转这座活力古城。',
}

export default function HasseltPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '哈瑟尔特', href: '/attractions/hasselt' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`哈瑟尔特・Hasselt・荷兰・上艾瑟尔省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友！如果你正计划一场荷兰之旅，眼光可千万别只盯着阿姆斯特丹。今天这份哈瑟尔特私藏旅游攻略，就想带你躲开汹涌人潮，钻进荷兰东部这座被运河温柔环抱的“宝藏老城”。哈瑟尔特不仅是上艾瑟尔省一颗宁静的明珠，更是一座活生生的历史博物馆——脚下是交错的中世纪运河，眼前是拔地而起、令人屏息的哥特式大教堂，而空气里，总隐约飘着一丝甜蜜的、来自本地百年酿酒传统的丁香香气。作为你的专属向导，这份自由行指南请收好，我们将一起揭开它层层面纱，从如何规划完美一日游，到发现连当地人都珍爱的小众角落。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友！如果你正计划一场荷兰之旅，眼光可千万别只盯着阿姆斯特丹。今天这份哈瑟尔特私藏旅游攻略，就想带你躲开汹涌人潮，钻进荷兰东部这座被运河温柔环抱的“宝藏老城”。哈瑟尔特不仅是上艾瑟尔省一颗宁静的明珠，更是一座活生生的历史博物馆——脚下是交错的中世纪运河，眼前是拔地而起、令人屏息的哥特式大教堂，而空气里，总隐约飘着一丝甜蜜的、来自本地百年酿酒传统的丁香香气。作为你的专属向导，这份自由行指南请收好，我们将一起揭开它层层面纱，从如何规划完美一日游，到发现连当地人都珍爱的小众角落。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`哈瑟尔特`} />
                <InfoRow label="英文名称" value={`Hasselt`} />
                <InfoRow label="正式名称" value={`Hasselt`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`上艾瑟尔省`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`别看哈瑟尔特如今一副宁静祥和的模样，它在历史上可是个“狠角色”。早在中世纪，它就是汉萨同盟的重要贸易成员之一，那条穿城而过的运河网，当年可不是为了风景，而是实实在在的“经济动脉”，将货物从德国腹地运往荷兰乃至北海。这座城在历史上多次成为争夺的焦点，尤其是在八十年战争（荷兰独立战争）期间，其战略地位让它反复易手，城墙在战火中屡毁屡建。这段动荡的历史，反而塑造了它坚韧而包容的城市性格。到了17、18世纪，随着贸易路线的变化，哈瑟尔特逐渐转型，依托肥沃的土壤和运河运输之便，发展起了独特的酿酒业，特别是用本地植物酿造的“丁香酒”（Hasselter Bitter），让它的名字以另一种甜蜜的方式传遍了低地国家。可以说，哈瑟尔特是一部浓缩的荷兰东部发展史，从军事要塞到贸易枢纽，再到工艺名城，每一块运河边的卵石都记得。`} />
                <InfoRow label="建筑特色" value={`漫步老城，最震撼的莫过于圣斯蒂芬大教堂那雄伟的身影。这座晚期哥特式的巨构，用的并非我们印象中荷兰常见的红砖，而是来自附近采石场的浅灰色砂岩，在北方变幻的天光下，呈现出从银灰到淡金的微妙色泽。走近看，教堂外立面布满了令人惊叹的石雕细节：飞扶壁像巨人的肋骨般有力地拱卫着主体，高耸的尖塔上，石像鬼雨水口张着有趣的嘴巴。最迷人的是它那扇巨大的玫瑰窗，当午后的阳光以特定角度穿透时，内部的地面上会洒下一片绚烂如万花筒般的彩色光斑。而环绕教堂的，是那些沿着运河修建的、山形墙各异的老房子，它们的墙面常常被漆成柔和的芥末黄、砖红或墨绿，窗台上永远点缀着盛开的鲜花，与水中倒影相映成趣，构成了哈瑟尔特最经典的明信片画面。`} />
                <InfoRow label="建筑风格" value={`哈瑟尔特的建筑名片无疑是 **晚期哥特式**，这在圣斯蒂芬大教堂上体现得淋漓尽致。怎么理解呢？你可以想象，建筑师们不再满足于早期哥特式的沉重与敦实，他们追求一种“向天国冲刺”的极致轻盈感。于是，我们看到了教堂内部令人目眩的高耸穹顶，肋状拱顶交织成复杂的网状，将重量精巧地分散到纤细的束柱上，营造出空灵向上的空间感。巨大的彩色玻璃窗取代了厚重的墙壁，让神圣的光线成为建筑的一部分。同时，**荷兰文艺复兴风格**与**古典主义元素**也在市政厅和一些商人住宅上留下烙印，比如对称的立面、装饰性的山形墙和古典柱式的运用。这些风格在老城里和谐共处，哥特式的垂直冲动与文艺复兴的理性秩序对话，共同讲述着这座城市从宗教中心向繁荣商贸城市转型的故事。`} />
                <InfoRow label="文化价值" value={`对哈瑟尔特人而言，城市的核心记忆与认同，一半系于运河，另一半则沉浸在那琥珀色的丁香酒里。“Hasselter Bitter”不只是一种酒，它是一种代代相传的家庭秘方，是节庆日举杯时的必然选择，更是本地人招待远方来客的骄傲。每年相关的节庆和品酒活动，将社区紧密联结。而保存完好的运河系统，不仅是旅游景观，更是市民生活的延伸——夏季在河边咖啡馆晒太阳，冬季运河可能变成溜冰场。圣斯蒂芬大教堂除了宗教功能，更是全市最重要的文化地标，音乐会、展览常在此举办。在这里，历史不是封存在博物馆里的古董，而是酿在酒里、流淌在水里、回响在教堂钟声里的日常生活。这种将深厚传统与当下生活无缝衔接的能力，正是哈瑟尔特最动人的文化价值。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 哈瑟尔特一日游打卡路线攻略：从大教堂到酿酒厂的全景漫游`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行步行路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好啦，咱们的探索正式启程！我建议你早上9点左右到达，这时阳光正好，游客未至。第一站直奔 **圣斯蒂芬大教堂**，在晨光中仰望它的壮美，并进入内部感受那片宁静与绚烂的光影。之后，从教堂广场信步走到旁边的 **老运河（Oude Gracht）** 畔，沿着水边向北慢慢走，看鸭子嬉戏，欣赏两岸色彩斑斓的老房子。大约中午，走到 **市集广场（Grote Markt）**，这里有几家不错的咖啡馆，可以选个户外座位，点一份荷兰特色的煎饼（Pannenkoeken）当午餐，看着广场上人来人往。下午的重头戏是 **哈瑟尔特城市博物馆** 或 **丁香酒酿酒厂（像De Drie Haringen这样的传统酒馆或有展示的作坊）**，深入了解本地的历史与酿造秘密。随后，穿过 **Hoogstraat** 购物街（可以顺便逛逛特色小店），前往 **南部的运河区**，这里更静谧，适合拍照。傍晚，回到运河边的餐厅，品尝一顿融合当地食材的晚餐，并务必点上一杯地道的丁香酒。如果意犹未尽，夜景下的运河与灯光中的大教堂，会为这一天画上完美的句号。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>大教堂玫瑰窗的光之舞</strong>：千万别匆匆走过教堂中殿。选一个晴朗的午后，站在主祭坛前回望西侧那面巨大的玫瑰窗。当阳光穿透数百片彩色玻璃，整个教堂的石柱和地面上便会铺开一片流动的、宝石般的光影地毯。仔细观察，光斑中有深蓝、绛红和翠绿的图案，那是描绘圣经故事的玻璃画。这一刻，建筑、光与神性故事完美融合，静谧而震撼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>老运河桥下的倒影世界</strong>：找一座小巧的石拱桥，比如 near Vischmarkt 附近的。不要只是过桥，请靠在桥栏上，低头看水。哈瑟尔特的运河水质清澈，你将看到岸边那些山形墙老屋、蓝天白云和桥身自身优雅的拱形，以完美的对称性倒映在水中。微风拂过，倒影轻轻荡漾、破碎又重组，如同一幅不断变幻的立体主义油画，这是属于水城的独特浪漫。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>酿酒厂里的铜壶与香气</strong>：如果参观酿酒厂或相关展览，注意看那些闪闪发光的巨大老式铜制蒸馏器。它们不仅是工具，更是艺术品，表面在岁月摩挲下泛着温润的光泽。凑近些，你或许还能闻到铜器上残留的、混合了丁香、肉桂等数十种香料的复杂气息。这种气味，就是哈瑟尔特数个世纪以来甜蜜灵魂的浓缩，记得深吸一口，把记忆带回家。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>市集广场砖石地面的车辙痕</strong>：在市集广场闲坐时，别光看周围建筑，也低头看看脚下的砖石地面。在一些老砖上，依稀可见深深的车辙痕迹。那是几个世纪以来，运送货物的马车反复碾压留下的“伤疤”。这些无声的印记，是哈瑟尔特作为繁忙汉萨贸易城市最直白、最触手可及的历史证据，让人瞬间与过往的繁华喧嚣产生连接。" }} />
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "首先，<strong>时间就是体验</strong>：尽量避开周末和夏季（7-8月）的午后，那时大教堂和主运河边可能会比较拥挤。最佳游览时间是工作日清晨或春秋季的平日上午，你能独享一片宁静。其次，<strong>脚下功夫要足</strong>：哈瑟尔特老城遍布鹅卵石街道和拱桥，穿一双舒适、防滑的步行鞋至关重要，高跟鞋在这里简直是“刑具”。第三，<strong>防盗意识不能松</strong>：虽然哈瑟尔特总体很安全，但在市集广场、热闹的购物街等拥挤场所，务必看管好随身背包和手机，做到“财不外露”。最后一个小贴士：很多小博物馆、酿酒作坊周一或周二可能休息，出发前务必在官网确认开放时间，避免吃闭门羹。另外，荷兰天气多变，即使晴天也建议带件轻便防风外套。" }} />
            </div>
          </Section>

          <Section title={`6. 哈瑟尔特周边住宿与美食攻略：住在运河畔，品在地风味`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "想沉浸式体验，建议住在 <strong>老城运河区的精品酒店或B&B</strong>。比如有些由17世纪商人住宅改建的旅馆，房间天花板有裸露的古老木梁，窗外就是潺潺流水，充满历史感。餐饮方面，强烈推荐市集广场或运河边的餐厅。一定要试试将本地 <strong>丁香酒（Hasselter Bitter）</strong> 融入的菜肴，比如用它做酱汁的牛排或炖菜。甜品可以尝尝加入这种酒提香的冰淇淋。至于正宗的荷兰晚餐，可以去 <strong>“t Knijpje</strong> 或 <strong>Eetcafé de Zwaan</strong> 这类本地小馆，尝尝 “Stamppot”（蔬菜肉泥）或新鲜鲱鱼。别忘了在一家老式棕色咖啡馆（bruin café）里，像当地人一样点一杯琥珀色的丁香酒，慢慢啜饮，感受它甘甜中带一丝微苦的复杂余韵。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果时间充裕，有两个绝佳的去处值得延伸探索。一是向北驱车或乘坐短途火车（约20分钟）前往 <strong>兹沃勒（Zwolle）</strong>，另一座保存完好的汉萨同盟古城，拥有壮观的中世纪城墙和完全不同的城市氛围，可以对比游览。二是向东南方向，探索 <strong>“上艾瑟尔省湿地”</strong> 区域，租一辆自行车，沿着运河或湿地边缘的小径骑行，你会看到风车、牧场和成群的水鸟，体验完全不同于老城的、开阔而宁静的荷兰乡村风光。这两个选择都能让你对荷兰东部的多样性有更深刻的理解。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "哈瑟尔特的灵魂，是石砌教堂的宏伟与丁香酒的温柔共同谱写的和弦，是运河千年不变的流淌中，映照出的日常生活的坚韧与甜蜜。它教会我们，一座伟大的小城，无需喧嚣，自有其沉静而醇厚的力量。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/woudagemaal" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沃达蒸汽泵站</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Woudagemaal</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/orvelte-open-air-museum-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥尔韦尔特</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Orvelte</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/dokkum" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    多
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">多克姆</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dokkum</p>
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
