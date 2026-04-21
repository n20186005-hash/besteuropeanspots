import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡姆尼克旅游攻略：阿尔卑斯山麓中世纪小镇深度游与自由行指南',
  description: '探秘斯洛文尼亚的宝藏小镇卡姆尼克（Kamnik），一份超详细的中世纪古镇深度游攻略，涵盖必打卡景点、一日游路线、避坑指南与美食住宿推荐。',
}

export default function KamnikMedievalTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '卡姆尼克', href: '/attractions/kamnik-medieval-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卡姆尼克・Kamnik・斯洛文尼亚・中斯洛文尼亚`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果厌倦了卢布尔雅那的人潮，想找一个抬头就能看见雪山、脚下踩着几百年石板路，并且时间仿佛停在中世纪的地方，那今天这份**卡姆尼克私藏旅游攻略**，就是为你准备的。卡姆尼克，这个蜷缩在雄伟的卡姆尼克-萨维尼亚阿尔卑斯山脚下的“双塔小镇”，就像是童话书里不小心掉出来的一页。它不只是“迷你”，而是“精华”——完好保存的工匠老街、斑驳的城堡遗址、还有家家户户窗台上怒放的鲜花，共同构成了一幅活着的阿尔卑斯生活画卷。作为你的专属向导，这份**卡姆尼克自由行指南**将带你深入它的肌理，躲开大众旅游的套路，从如何抵达，到在哪家百年面包房排队，再到怎样捕捉小镇与雪山同框的绝美瞬间，全部毫无保留地告诉你。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友，如果厌倦了卢布尔雅那的人潮，想找一个抬头就能看见雪山、脚下踩着几百年石板路，并且时间仿佛停在中世纪的地方，那今天这份<strong>卡姆尼克私藏旅游攻略</strong>，就是为你准备的。卡姆尼克，这个蜷缩在雄伟的卡姆尼克-萨维尼亚阿尔卑斯山脚下的“双塔小镇”，就像是童话书里不小心掉出来的一页。它不只是“迷你”，而是“精华”——完好保存的工匠老街、斑驳的城堡遗址、还有家家户户窗台上怒放的鲜花，共同构成了一幅活着的阿尔卑斯生活画卷。作为你的专属向导，这份<strong>卡姆尼克自由行指南</strong>将带你深入它的肌理，躲开大众旅游的套路，从如何抵达，到在哪家百年面包房排队，再到怎样捕捉小镇与雪山同框的绝美瞬间，全部毫无保留地告诉你。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卡姆尼克`} />
                <InfoRow label="英文名称" value={`Kamnik`} />
                <InfoRow label="正式名称" value={`Kamnik`} />
                <InfoRow label="国家" value={`斯洛文尼亚`} />
                <InfoRow label="城市" value={`中斯洛文尼亚`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`别看卡姆尼克现在安安静静，它在历史上可是斯洛文尼亚的“老牌贵族”。公元11世纪，它就以“*ovnik*”（意为“采矿点”）的名字出现在文献中，得益于附近丰富的铁矿和战略位置，迅速繁荣起来。在12至13世纪，它曾是斯洛文尼亚地区最早的城镇之一，甚至在短短几十年间（13世纪中叶），与卢布尔雅那轮流担任卡尼奥拉公国的首府，风头一时无两。这种显赫的地位，直接体现在它至今仍保存完好的城镇布局和防御体系上。中世纪时，它是连接巴尔干与中欧的重要贸易路线上的枢纽，工匠和商贾云集。尽管后来政治中心转移，但它作为手工业和区域中心的角色从未褪色。漫步其中，你脚下踩的不仅是石板，更是一部浓缩的、关于斯洛文尼亚城镇如何从矿业、贸易中崛起并保有自我认同的微观史。`} />
                <InfoRow label="建筑特色" value={`卡姆尼克的建筑，是一场与材料的诚实对话。小镇中心的房屋多用本地开采的浅灰色石材砌成，石块未经精细打磨，粗粝的质感在阳光下泛着温润的光泽，缝隙里长着绒绒的青苔。屋顶是厚重的、近乎黑色的陶瓦，层层叠叠，像巨龙的鳞片。最引人注目的是那些突出的**木制悬窗**——它们从石墙中探出身子，被刷成墨绿、深棕或赭红色，窗台上无一例外摆满鲜红的天竺葵。当你走在**工匠街（Češnovarska ulica）** 上，这种感觉尤为强烈：低矮的门楣，厚重的木门虚掩着，门上的铁制门环被岁月磨得锃亮。有些作坊的橱窗里，还挂着正在晾干的陶器或铁艺品。整个小镇的色彩是克制的，以石材的本色和木头的深色为主，唯有鲜花的红与窗框的彩，像跳跃的音符，点亮了这幅沉稳的中世纪素描。`} />
                <InfoRow label="建筑风格" value={`卡姆尼克的建筑风格很难用单一的标签定义，它是**中世纪民间建筑**与后续**巴洛克、文艺复兴**元素的有趣融合。其核心是坚实、防御性的中世纪风格：狭窄的街道、高而少的窗户、厚重的墙壁，都是为了安全和保暖。**圣玛利亚升天教区教堂**的钟楼，是小镇天际线的标志，它的下半部分是敦实的罗马风基座，而上部则带有后期哥特式的修长感。小镇里许多民居的山墙，则露出了巴洛克影响的痕迹——线条变得柔和，出现了弧形的装饰。但最迷人的，是一种被称为“*Kamnik house*”的本地民居样式：石造底层用于作坊或储藏，木造的居住层向外悬挑，创造出更多的室内空间，也形成了街道上空亲密的覆盖感。这种务实又聪明的设计，正是阿尔卑斯山麓居民适应气候与生活需求的智慧结晶，风格在这里首先服务于生活。`} />
                <InfoRow label="文化价值" value={`卡姆尼克的文化价值，在于它是一座“活着的博物馆”，而不仅仅是供人参观的布景。这里的**工匠精神从未断绝**。在老街上，你依然能找到铁匠、陶艺师、木雕师和蜡烛匠人的作坊，敲打声、拉胚声时而可闻。这种延续性，让小镇充满了真实的烟火气，而非旅游表演。它也是斯洛文尼亚人“家园”概念的缩影：一种与雄伟自然（阿尔卑斯山）和谐共处、勤恳劳作、并珍视社区传统的生活方式。每年夏天的“中世纪节”，全镇居民会穿上古装，还原市集与庆典，这不是为了游客，而是社区对自己的历史进行一次集体重温与致敬。对于现代社会而言，卡姆尼克像一剂镇静剂，它提醒着人们慢下来、专注于手艺、珍视邻里关系，并在壮丽自然的怀抱中找到内心的平静。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 卡姆尼克精华一日游打卡路线攻略：从城堡到工匠老街`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行步行路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的向导，我设计的这条**卡姆尼克一日游路线**，能让你在一天内高效又深度地体验小镇精髓。**上午**，从主广场（Glavni trg）开始，先别急着钻小巷，去广场边的“Štrukelj”甜品店买个传统奶酪卷当早餐，然后登上**老城堡（Stari grad）** 遗址。这段爬升会有点喘，但山顶的视野绝对值回票价——整个小镇红瓦屋顶在你脚下铺开，背后是巨大的、积雪的阿尔卑斯山屏风，这是绝佳的打卡点。**中午**下山，直接扎进迷宫般的**工匠街（Češnovarska ulica）** ，慢慢逛那些小作坊，和手艺人聊聊天。午餐就选一家有户外座位的传统餐厅，尝尝斯洛文尼亚炖菜或香肠。**下午**，悠闲地参观**玛利亚升天教堂**和**小城堡（Mali grad）** 里的当地博物馆，了解小镇历史。之后，沿着**科库拉河（Kokra）** 散步，看河水碧绿，穿过一座座小桥。**傍晚**，再次回到主广场，在夕阳金光将双塔和雪山尖染成粉色时，找家咖啡馆坐下，享受阿尔卑斯山麓特有的宁静夜晚。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>工匠街的门环与工具墙</strong>：在Češnovarska街上，请务必仔细观察那些老作坊的木门。门环形状各异，有狮头、铁锚，甚至小锤子。有一家铁匠铺的外墙上，直接钉满了数百件不再使用的旧工具——生锈的钳子、变形的马蹄铁、锯齿状的锯片。它们不是装饰，而是一部无声的家族劳动史，每一件工具的磨损都诉说着一个故事、一份汗水。阳光斜射时，这些铁器在石墙上投下错综复杂的影子，仿佛古老的图腾。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>小城堡博物馆的“镇馆之宝”</strong>：在小城堡（Mali grad）的当地博物馆里，不要错过一个不起眼的玻璃柜，里面陈列着几把<strong>中世纪钥匙</strong>，长度堪比短剑。其中一把属于曾经的镇门。想象一下，夜幕降临，守卫用这把沉重的钥匙插入锁孔，转动时发出的金属摩擦声划破寂静，整个城镇的安全就系于其上。它冰冷的铁质和简单的结构，比任何金银珠宝都更能让你触摸到中世纪日常生活的质感。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>主广场的“瘟疫柱”阴影</strong>：广场中心的巴洛克式瘟疫纪念柱，顶端是圣母玛利亚雕像。在晴朗日子的正午前后，仔细观察柱子基座石阶上的<strong>光影</strong>。由于柱体复杂的雕刻，阳光会投射出异常清晰、几乎像雕刻出来的阴影花纹，随着时间缓慢移动，如同一个巨大的日晷。这个细节很少有人驻足品味，但它恰恰是小镇生活节奏缓慢、与自然光线同步的最佳隐喻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>从河岸看小镇的倒影</strong>：走到科库拉河的某座小桥下，找一个水面平静的位置回望小镇。你会发现，水中的倒影比实景更柔和、更梦幻。石桥的拱洞、岸边房子的木悬窗、以及远处教堂的尖塔，全部被碧绿的河水荡漾、重组。尤其是当阿尔卑斯山的风吹过，水面皱起，倒影里的卡姆尼克仿佛在轻轻晃动，像一幅刚刚画好、还未干透的油画，瞬间理解了为何这里是无数画家和诗人的灵感源泉。" }} />
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "首先，<strong>时间选择</strong>是避开人流的关键。小镇虽小众，但周末和夏季午后仍会有不少一日游巴士。<strong>最佳游览时间是工作日</strong>的上午，或夏季的傍晚（斯洛文尼亚夏日白昼长，晚上八点天还亮）。春秋两季的平日来访，体验最佳。其次，<strong>穿着务必舒适</strong>。小镇依山而建，参观老城堡需要爬一段坡度不小的山路，石板路也凹凸不平，<strong>绝对要放弃高跟鞋</strong>，选择一双抓地力好的步行鞋。第三，关于<strong>交通与门票</strong>：从卢布尔雅那乘坐巴士约40分钟即达，班次频繁，直接在巴士总站上车买票即可，这是最方便的<strong>自由行交通</strong>方式。小镇本身无需门票，但小城堡博物馆需要购票，费用不高。这里治安极好，但基本防盗意识要有，在拥挤的露天咖啡馆，包不要离身。最后一个小贴士：很多小作坊和家庭餐馆<strong>只收现金（欧元）</strong>，虽然不少地方也开始刷卡，但备些零钱总是更方便。" }} />
            </div>
          </Section>

          <Section title={`6. 卡姆尼克周边住宿与特色美食全攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果想沉浸式体验，非常推荐在卡姆尼克住一晚。小镇有几家由百年老宅改造的<strong>精品民宿（Guesthouse）</strong>，比如位于安静街角的“<em>Hiša Stare pravde</em>”，房间保留了原始的木梁石墙，但设施现代，主人会热情地为你准备丰盛的本地早餐。住在镇上，你才能感受到夜幕降临后，游客散去，只剩下路灯、流水声和居民窗口透出的温暖灯光那种静谧。餐饮方面，主广场附近的“<em>Gostišče Tulipan</em>”是品尝斯洛文尼亚家常菜的好地方，必试<strong>“štruklji”</strong>（奶酪/苹果卷）和用本地阿尔卑斯山草药调味的炖羊肉。想吃点特别的，可以去“<em>Restavracija Konec</em>”，它由一座历史建筑改造，环境优雅，擅长用当季食材做现代诠释。别忘了喝一杯本地产的“<em>Kamniška Gora</em>”啤酒，清冽的口感配上山景，完美。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从卡姆尼克出发，有两个短途延伸选择不容错过。第一个是<strong>维利卡普拉尼纳高地（Velika planina）</strong>，这是阿尔卑斯山一处独特的夏季高山牧场。乘坐缆车上山后，你会看到一片如波浪般起伏的绿野，点缀着几十座锥形屋顶的<strong>传统牧人小木屋</strong>，仿佛闯入海蒂的故乡。这里可以徒步，品尝现场制作的凝乳奶酪，从另一个角度俯瞰卡姆尼克山谷。另一个是驱车不远便可抵达的<strong>泰尔内利（Terme Snovik）温泉</strong>，坐落在森林之中，环境清幽。在阿尔卑斯山间徒步或探索古镇一天后，来这里泡个温泉放松肌肉，是当地人才懂的极致享受。这两个地方，一个展现自然牧歌，一个提供身心疗愈，都能让你的<strong>卡姆尼克深度游</strong>体验更加丰满立体。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "卡姆尼克的灵魂，在于它那毫不费力的“真实”。它不像一个精心维护的博物馆展品，而更像一位从容的老匠人，雪山是它的背景，叮当的锤打声是它的呼吸，石板路上的光影是它缓缓流动的时间。在这里，宏伟的自然与微小的人间烟火，达成了一种最动人的平衡。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/celje-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    采
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">采列城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Celje Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ptuj-castle-slovenia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普图伊城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ptuj Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/maribor-old-vine" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马里博尔老藤屋</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Maribor Old Vine</p>
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
