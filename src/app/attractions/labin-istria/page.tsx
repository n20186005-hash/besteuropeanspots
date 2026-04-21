import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '拉宾旅游攻略：伊斯特拉半岛隐秘山顶小镇，煤矿历史与威尼斯色彩的奇妙碰撞',
  description: '探索克罗地亚拉宾（Labin）的深度游攻略。这座伊斯特拉半岛的山顶老镇，混合了红砖工业风与威尼斯彩绘房屋，是一日游的完美选择。包含完整路线与避坑指南。',
}

export default function LabinIstriaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '克罗地亚', href: '/destinations/croatia' },
            { label: '拉宾', href: '/attractions/labin-istria' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`拉宾・Labin・克罗地亚・伊斯特拉县`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友！如果你已经看遍了克罗地亚的海岸线，想找一个真正有故事、还没被游客大军占领的地方，那今天这份拉宾私藏旅游攻略，就是为你准备的。它不在海边，而在伊斯特拉半岛内陆的一座小山丘上，俯瞰着前方的克瓦内尔湾和远处的拉布岛。第一眼，你会被它明媚的威尼斯风格彩色房子迷惑；但走近了，空气里仿佛还飘着一丝煤矿的炭灰味儿。是的，这里曾是一个繁荣的煤矿小镇。作为你的专属向导，这份自由行指南将带你穿梭于两种截然不同的时空：地上是浪漫的意大利风情，地下是硬核的工业遗产。准备好，我们一起躲开人潮，去揭开这座“双重人格”小镇的秘密。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友！如果你已经看遍了克罗地亚的海岸线，想找一个真正有故事、还没被游客大军占领的地方，那今天这份拉宾私藏旅游攻略，就是为你准备的。它不在海边，而在伊斯特拉半岛内陆的一座小山丘上，俯瞰着前方的克瓦内尔湾和远处的拉布岛。第一眼，你会被它明媚的威尼斯风格彩色房子迷惑；但走近了，空气里仿佛还飘着一丝煤矿的炭灰味儿。是的，这里曾是一个繁荣的煤矿小镇。作为你的专属向导，这份自由行指南将带你穿梭于两种截然不同的时空：地上是浪漫的意大利风情，地下是硬核的工业遗产。准备好，我们一起躲开人潮，去揭开这座“双重人格”小镇的秘密。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`拉宾`} />
                <InfoRow label="英文名称" value={`Labin`} />
                <InfoRow label="正式名称" value={`Labin`} />
                <InfoRow label="国家" value={`克罗地亚`} />
                <InfoRow label="城市" value={`伊斯特拉县`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`拉宾的历史，是一部写在煤灰与颜料上的双城记。它的故事远比你想象中厚重。早在古罗马时期，这里就有人定居。但它真正在欧洲历史舞台上留下深刻印记，是在中世纪后期到近代。从1420年到1797年，拉宾和伊斯特拉半岛的大部分地区一样，处于威尼斯共和国的统治之下。这段长达近四百年的时光，为小镇注入了优雅的意大利灵魂，那些彩绘的外墙、精致的窗棂，都是那个时代的遗产。然而，命运的转折发生在19世纪末。附近发现了丰富的煤矿资源，拉宾一夜之间从宁静的山城变成了奥匈帝国重要的工业中心。煤矿的开采吸引了来自克罗地亚各地、甚至意大利和斯洛文尼亚的工人，人口激增，小镇规模迅速扩大。二战及南斯拉夫时期，煤矿依然是这里的经济命脉。这段工业历史，塑造了拉宾坚韧、务实的性格，也让它在以田园风光和海岸度假闻名的伊斯特拉半岛中，显得如此独特而真实。它不仅仅是一个“漂亮的老镇”，更是一个欧洲工业遗产的活化石，见证了从农耕到工业，再到如今旅游转型的完整脉络。`} />
                <InfoRow label="建筑特色" value={`拉宾的建筑是一场视觉上的“混搭实验”，有趣极了。漫步在起伏的石板街上，你的眼睛会忙不过来。最抓人眼球的是老城区那些威尼斯风格的房屋。外墙被刷成明媚的鹅黄、温暖的陶土红、清新的天蓝或柔和的蜜桃粉，在亚得里亚海充沛的阳光下，鲜艳却不刺眼，像打翻了的调色盘。许多墙壁上还保留着古老的家族徽章、宗教壁画或单纯的装饰性彩绘，虽然历经风雨有些斑驳，却更添韵味。窗户通常是朴素的方形，配有木质的绿色或棕色百叶窗。但请别只盯着这些色彩！低下头，看看脚下的路，再抬头看看一些建筑的基座和侧墙，你会发现大量质朴、未经修饰的暗红色砖块。这种砖厚重、沉稳，与轻盈的色彩形成鲜明对比。它们大多来自19世纪末20世纪初的煤矿繁荣期，当时建造了许多实用的工人住宅、行政楼和仓库。这些红砖建筑线条简洁，几乎没有装饰，透着一种粗犷的力量感。这两种材质——浪漫的彩绘灰泥与硬朗的工业红砖，在拉宾和谐共生，共同讲述着小镇跨越几个世纪的双面故事。`} />
                <InfoRow label="建筑风格" value={`在拉宾，你很难用一种风格来概括它，因为它本质上是“威尼斯风格”与“工业实用主义”的对话。威尼斯风格在这里的体现非常直观，主要集中于老城核心区。这并非指宏伟的宫殿，而是一种渗透在市井生活中的“威尼斯乡土风格”。其特点是：鲜艳的外墙色彩（用以彰显家族身份或单纯为了美观）、相对对称的立面布局、石质的门框和窗框，以及带有小型铁艺阳台的窗户。你可以在市政厅广场（Trg Matije Vlačića）周围的建筑上找到最典型的例子。而工业实用主义风格则伴随着煤矿业兴起，主要分布在老城区外围和下山通往拉宾新区的路上。这种风格完全抛弃了装饰，核心是功能至上。建筑多采用本地烧制的红砖，结构方正，窗户规整，屋顶倾斜以利排水，一切为了耐用和高效。有趣的是，这两种风格在拉宾并没有严格的地理分隔，它们常常比邻而居。一栋彩绘房子的隔壁，可能就是一座朴实的红砖仓库。这种奇妙的并置，正是拉宾建筑魅力所在，它直观地告诉你：美与实用，历史与当下，在这里从未分离。`} />
                <InfoRow label="文化价值" value={`对拉宾人而言，煤矿不是一段需要掩埋的过去，而是塑造了社区精神的骄傲勋章。直到1999年最后一座煤矿关闭，采煤业贯穿了小镇近一个半世纪的生活。它意味着汗水、危险，也意味着工作、收入和紧密的邻里关系。如今，你可以从当地老人的眼神和讲述中，感受到他们对那个时代的复杂情感——有对艰苦的唏嘘，更有对集体奋斗的自豪。这种独特的工业遗产，成为了拉宾区别于伊斯特拉其他旅游小镇的文化基石。小镇聪明地将这段历史转化为旅游资源，而不是抛弃它。拉宾市博物馆就设在一座旧宫殿里，用大量篇幅讲述煤矿故事；而真正的拉宾国家煤矿博物馆（位于老城下方）更是直接让你戴上矿工帽，深入一段真实的矿道。这种对自身历史的诚实面对和创造性转化，让拉宾的文化体验格外有深度。它不仅仅是让游客拍拍照，更是邀请你来理解这片土地和人民的根。在现代社会，拉宾展示了如何将“工业伤疤”变成“文化勋章”，为类似的后工业城镇提供了宝贵的转型样本。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 拉宾一日游打卡路线攻略：从山顶彩绘老城到地下煤矿秘境`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行步行游览路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的向导，我设计的这条路线堪称完美的一日游路线，能让你由浅入深，全方位体验拉宾。上午（9:00-12:30）：从山下的主停车场出发，沿着蜿蜒的上坡路慢慢走进老城。别急着冲，感受一下从现代街区步入历史街区的过渡。首先抵达市政厅广场（Trg Matije Vlačića），这里是老城的心脏，四周环绕着最美的威尼斯彩绘房屋，喝杯咖啡醒醒神。然后参观广场上的拉宾市博物馆，快速了解小镇的双面历史。接着，随意迷失在通往圣玛丽升天教堂的窄巷里，拍拍那些迷人的彩色门窗。中午（12:30-14:00）：在老城找一家有露台的餐厅，享用伊斯特拉特色的意大利面、松露或新鲜海鲜，同时享受山顶的辽阔视野。下午（14:00-17:00）：这是重头戏。从老城步行约15分钟下山，前往拉宾国家煤矿博物馆。花上两个小时，真正下到矿井里，感受矿工的世界。出来后，你会对上午看到的红砖建筑有全新的理解。最后，如果还有精力，可以逛逛山下的新区，或者直接取车，前往不远处的海边小镇拉宾-拉宾（Rabac）看亚得里亚海的日落，为这一天画上圆满句号。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  弗兰克·拉迪奇街（Ulica Frana Radića）的一扇门：这条陡峭的街道是拍摄经典明信片角度的地方。请留意沿途一扇不起眼的旧木门，它可能漆成蓝色或绿色，门上的铁艺门环已经磨得发亮。透过门缝，你可能会窥见一个种满天竺葵、晾着衣服的静谧内院。这一瞥，瞬间将你从游客视角拉入当地人的生活场景。光影在斑驳的门墙上移动，仿佛能听到几十年来，矿工下班回家、孩子跑进跑出的声音。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  市政厅广场的钟楼光影：广场上的钟楼并不高，但在正午时分观察它特别有趣。阳光直射在它粗粝的石材表面，凹凸不平的纹理被光影强化，显得格外有雕塑感。仔细看，钟面的数字是朴素的罗马数字，指针走动的节奏缓慢而坚定。它就那样静静地矗立在五彩斑斓的建筑群中，像一个沉默的计时者，见证着从威尼斯总督到煤矿厂长，再到如今游客来来往往的所有时间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  煤矿博物馆矿道入口的“黑暗”：这不仅仅是一个视觉细节，更是一种全身心的感官冲击。当你戴上矿工帽，跟着向导走进那条向下延伸的、低矮潮湿的真实矿道时，灯光瞬间变得昏暗，温度骤降，空气中弥漫着泥土和一丝若有若无的煤炭气味。你需要低头弯腰前行，手可能会触碰到冰冷、粗糙的岩壁。这短短一瞬的“进入黑暗”，比任何文字描述都更能让你理解，什么是矿工日常工作的开端，那种混合着期待、艰辛与危险的复杂心情。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  从观景台远眺的“双景画”：在老城边缘的观景台，你一定要停下来。眼前展开的是一幅层次分明的画卷：近处是拉宾新城红色的屋顶和整齐的街道，那是煤矿时代扩建的成果；中间是郁郁葱葱的丘陵和山谷；最远方，是一抹晶莹剔透的蔚蓝——那是克瓦内尔湾。这幅画面精准地概括了拉宾：立足山巅的悠久历史（你所在的位置），经历工业化的发展（新城），最终面向蔚蓝的未来（大海）。拿出相机，但别忘了先用眼睛好好记住它。`}</p>
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  最佳游览时间与避开人流：拉宾还算小众，但夏季（7-8月）欧洲假期时，老城广场也会有些拥挤。最佳时间是五月下旬、六月、九月和十月上旬，天气温和，游客稀少，能真正享受宁静。一日游的话，尽量上午早点到（9点前），能拍到无人的街道，旅行团大多在10点后抵达。参观煤矿博物馆最好提前在官网查看开放时间并预订导览，尤其是非旺季，可能需凑团或特定时间开放。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  穿着与步行建议：这是最重要的贴士！拉宾老城建在山上，街道全是凹凸不平的石头路，且坡度很陡。务必！务必！穿一双绝对舒适、防滑的步行鞋，高跟鞋或凉鞋在这里是“刑具”。上下坡时慢行，注意脚下。参观煤矿博物馆时，内部阴冷潮湿（常年约12°C），即使夏天也建议带一件薄外套或长袖衬衫。矿井内部分通道低矮，如果个子很高或腰背不便，需要格外注意。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  交通与停车须知：自驾是最方便的方式。不要试图把车开进老城，迷宫般的单行线和狭窄街道会让你崩溃。山脚下有清晰的指示牌指向大型付费停车场，停在那里最省心。从停车场步行上山到老城中心约需10-15分钟（上坡），就当是热身。如果体力实在有限，可以询问是否有出租车能送到靠近广场的入口，但未必每次都能找到。`}</p>
            </div>
          </Section>

          <Section title={`6. 拉宾周边住宿与美食攻略：住在历史中，尝遍伊斯特拉风味`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`住宿方面，如果你想沉浸式体验，强烈推荐预订老城内的民宿或小型精品酒店。它们通常由历史建筑改建，房间可能保留了古老的石墙和木梁，推窗就是彩绘街道，夜晚和清晨的老城静谧感是无价的。如果追求更现代的设施和方便停车，山下的新区（Donji Labin） 或车程仅10分钟的海滨小镇拉宾-拉宾（Rabac） 有更多酒店和公寓选择，性价比往往更高。餐饮是拉宾的一大乐趣。在老城，找一家有露天座位的餐厅。必尝的是伊斯特拉半岛的特色：黑松露或白松露（季节不同），它们常被刨在意大利面或煎蛋上，香气浓郁；新鲜的海鲜，如烤鱼、章鱼沙拉；以及用本地橄榄油和香草烹饪的羊肉、牛肉。“Konoba Bass” 或 “Restoran Stari labin” 这类餐馆都能提供地道的风味。别忘了搭配一杯伊斯特拉本产的马尔瓦西亚（Malvazija）白葡萄酒，清爽宜人。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  拉宾-拉宾（Rabac）：距离拉宾老城仅10分钟车程。这里是完全不同的世界——一个平坦的、充满棕榈树的海滨度假小镇。从山上的历史风云下来，直接跳到蓝绿色的海水边晒太阳、游泳、沿着海滨长廊散步，冰激凌店和咖啡馆林立。这种“上山下海”的强烈对比体验，是拉宾地区独有的魅力。你可以把Rabac作为拉宾一日游的完美尾声，在那里享用海鲜晚餐看日落。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  茨尔斯（Črni）的圣福斯蒂娜教堂：如果你有车且对极度小众的地方感兴趣，可以从拉宾往内陆开一小段。这个宁静村庄里有一座不起眼的小教堂，内部却藏有惊人的15世纪哥特式湿壁画，保存状态相当好，描绘了圣经场景和圣徒生平。这里几乎没有游客，钥匙通常由村中某户人家保管，寻找过程本身就像一次小小的探险，能让你感受到伊斯特拉半岛乡村最原始、最虔诚的一面。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`拉宾的灵魂，就藏在那红砖的质朴与彩绘的明媚之间，藏在地下矿道的回声与山顶开阔的海风之间。它不曾掩饰自己沾满煤灰的双手，也大方展示着威尼斯赋予的彩衣。来到这里，你读到的不是一段被精心包装的单一历史，而是一个小镇真实、复杂、充满生命力的成长日记。这份坚韧与浪漫交织的独特性格，让它在克罗地亚无数明珠般的目的地中，散发着一种令人回味无穷的、温暖的金属光泽。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/rijeka-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    里
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">里耶卡老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rijeka Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/korcula" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科尔丘拉岛</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Korčula</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/baroque-varazdin" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    瓦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">瓦拉日丁</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Varaždin</p>
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
