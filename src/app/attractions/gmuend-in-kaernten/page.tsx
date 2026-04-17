import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '格明德 Gmünd in Kärnten｜高堡下的中世纪古镇与奥地利汽车博物馆的奇趣融合 - 最佳欧洲景点',
  description: '车子驶出最后一个隧道，眼前的景象会让你情不自禁地“哇”出声来。不是那种面对巨大纪念碑的震撼，而是一种被温柔击中的惊喜。格明德就那样静静地卧在雪山脚下，一条清澈见底的冰川溪流——马尔他河，像一条碧蓝的丝带，将小镇轻轻环绕。红瓦屋顶层层叠叠，墙壁刷成鹅黄、淡粉和薄荷绿，在阿尔卑斯山纯净的阳光下，色彩饱和...',
}

export default function GmuendInKaerntenPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '格明德（隐秘在国家公园旁的艺术家之城）', href: '/attractions/gmuend-in-kaernten' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`格明德（隐秘在国家公园旁的艺术家之城）・Gmünd in Kärnten・奥地利・克恩顿州格明德`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶出最后一个隧道，眼前的景象会让你情不自禁地“哇”出声来。不是那种面对巨大纪念碑的震撼，而是一种被温柔击中的惊喜。格明德就那样静静地卧在雪山脚下，一条清澈见底的冰川溪流——马尔他河，像一条碧蓝的丝带，将小镇轻轻环绕。红瓦屋顶层层叠叠，墙壁刷成鹅黄、淡粉和薄荷绿，在阿尔卑斯山纯净的阳光下，色彩饱和得像是刚刚上过新漆，却又透着被时光抚摸过的温润光泽。空气里有松木的清香，混合着从面包店飘出的、刚刚烤好的“Kärntner Reindling”（一种本地特色甜面包）的肉桂和黄油香气，甜丝丝的，暖融融的。
你很快会发现，这里的“静”不是死寂，而是一种充满生命力的宁静。脚步声在湿漉漉的卵石路上发出清脆的回响，广场中央的喷泉水声潺潺，是这里永恒的背景音。当地的老先生们聚在咖啡馆的露天座位上，用缓慢的克恩顿方言聊着天，手边是一小杯金色的白葡萄酒。而你的视线，总会不由自主地被那些窗户吸引——不是商店的橱窗，而是普通民居的窗台。上面可能摆着一尊造型奇特的现代雕塑，或是一盆开得正好的天竺葵，窗帘后隐约可见画架上未完成的油画。这里几乎每走几步，就能看到一个不起眼的小门牌，上面写着“Atelier”（工作室）或“Galerie”（画廊）。艺术家不是这里的点缀，他们就是呼吸的一部分。
而最奇妙的碰撞，就藏在那座威严的白色高堡——格明德城堡之下。当你还沉浸在数百年前骑士与领主的中世纪想象中时，一转弯，一座充满现代感的玻璃与钢铁建筑赫然出现，里面陈列的，是线条流畅、光泽冷冽的保时捷跑车。古典城堡与现代汽车博物馆比邻而居，这看似违和的组合，在格明德却显得异常和谐。它仿佛在告诉你：这座小镇守护的，从来不只是石头里的历史，更是人类对“美”与“极致”永不疲倦的追求，无论这追求体现在画布上，还是引擎的轰鸣里。这种跨越时空的对话感，正是格明德最核心、也最打动人心的魅力。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子驶出最后一个隧道，眼前的景象会让你情不自禁地“哇”出声来。不是那种面对巨大纪念碑的震撼，而是一种被温柔击中的惊喜。格明德就那样静静地卧在雪山脚下，一条清澈见底的冰川溪流——马尔他河，像一条碧蓝的丝带，将小镇轻轻环绕。红瓦屋顶层层叠叠，墙壁刷成鹅黄、淡粉和薄荷绿，在阿尔卑斯山纯净的阳光下，色彩饱和得像是刚刚上过新漆，却又透着被时光抚摸过的温润光泽。空气里有松木的清香，混合着从面包店飘出的、刚刚烤好的“Kärntner Reindling”（一种本地特色甜面包）的肉桂和黄油香气，甜丝丝的，暖融融的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你很快会发现，这里的“静”不是死寂，而是一种充满生命力的宁静。脚步声在湿漉漉的卵石路上发出清脆的回响，广场中央的喷泉水声潺潺，是这里永恒的背景音。当地的老先生们聚在咖啡馆的露天座位上，用缓慢的克恩顿方言聊着天，手边是一小杯金色的白葡萄酒。而你的视线，总会不由自主地被那些窗户吸引——不是商店的橱窗，而是普通民居的窗台。上面可能摆着一尊造型奇特的现代雕塑，或是一盆开得正好的天竺葵，窗帘后隐约可见画架上未完成的油画。这里几乎每走几步，就能看到一个不起眼的小门牌，上面写着“Atelier”（工作室）或“Galerie”（画廊）。艺术家不是这里的点缀，他们就是呼吸的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而最奇妙的碰撞，就藏在那座威严的白色高堡——格明德城堡之下。当你还沉浸在数百年前骑士与领主的中世纪想象中时，一转弯，一座充满现代感的玻璃与钢铁建筑赫然出现，里面陈列的，是线条流畅、光泽冷冽的保时捷跑车。古典城堡与现代汽车博物馆比邻而居，这看似违和的组合，在格明德却显得异常和谐。它仿佛在告诉你：这座小镇守护的，从来不只是石头里的历史，更是人类对“美”与“极致”永不疲倦的追求，无论这追求体现在画布上，还是引擎的轰鸣里。这种跨越时空的对话感，正是格明德最核心、也最打动人心的魅力。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`格明德（隐秘在国家公园旁的艺术家之城）`} />
                <InfoRow label="英文名称" value={`Gmünd in Kärnten`} />
                <InfoRow label="正式名称" value={`Gmünd in Kärnten`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`克恩顿州格明德`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座由中世纪城堡守护发展而来、因现代汽车博物馆而获得“保时捷第二故乡”昵称的传奇小镇。`} />
                <InfoRow label="建筑特色" value={`色彩柔和的文艺复兴与巴洛克立面房屋环绕着卵石广场，山顶矗立着标志性的白色高堡塔楼。`} />
                <InfoRow label="建筑风格" value={`以中世纪城堡为核心，融合了后哥特式、文艺复兴晚期及本土阿尔卑斯山地风格的建筑群落。`} />
                <InfoRow label="文化价值" value={`是克恩顿州北部重要的历史文化地标，也是古典艺术精神与现当代机械美学意外交汇的独特文化现场。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇公共区域全天开放。核心景点“格明德老城博物馆”及“保时捷博物馆”开放时间通常为每日上午10点至下午5点，冬季（11月至次年3月）部分博物馆可能调整为周二至周日开放或缩短开放时间，建议行前在其官网确认。小镇内的多家私人画廊和艺术家工作室开放时间较为随性，多数在下午1点至6点间欢迎访客，最好在门口查看标识或礼貌询问。`} />
              <InfoRow label="门票价格" value={`漫步古镇街道本身完全免费。参观“格明德老城博物馆”成人票约为8欧元，学生及老人优惠票约为6欧元。“保时捷博物馆”成人票约为12欧元，家庭套票有优惠。若购买“格明德文化通票”（约15欧元）可涵盖镇上主要博物馆及部分合作画廊。6岁以下儿童在大多数场馆免费。`} />
              <InfoRow label="地址" value={`Hauptpl. 1, 9853 Gmünd in Kärnten, 奥地利`} />
              <InfoRow label="交通方式" value={`最近的主要国际机场是克拉根福机场（KLU），距离约50公里。从机场可搭乘出租车（约50分钟，费用较高）或先乘坐巴士到克拉根福火车总站再换乘。最推荐的方式是从萨尔茨堡或维也纳乘坐奥地利国铁（ÖBB）抵达斯皮特安德劳（Spittal an der Drau）主火车站，这里是区域交通枢纽。从斯皮特安德劳火车站前，换乘邮政巴士（Postbus）511路或512路，约30-40分钟即可直达格明德巴士总站（Bahnhof Gmünd），班次平日每小时1-2班，周末减少，建议使用ÖBB App查询实时班次并购买联程票。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`格明德的故事，得从山头上那座白塔说起。大约在公元11世纪左右，为了控制马尔他河谷这条重要的贸易与军事通道，巴伐利亚的贵族们在这里的山脊上建起了一座堡垒，这就是格明德城堡的雏形。它的名字“Gmünd”源自古高地德语，意为“河流汇合处”或“河口”，精准地描述了它的地理位置——守护着河流交汇的要冲。在漫长的中世纪，这座城堡就像一位沉默的巨人，俯瞰着山谷，它的主人换了一茬又一茬，从奥尔滕堡伯爵到哈布斯堡王朝，每一位领主都在这里留下了自己的印记。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正让格明德从城堡脚下的附属村落成长为一座繁荣市镇的，是1243年颁发的那张“市场特许状”。这意味着，这里可以合法地举办每周集市和年度大型市集。你可以想象那时的景象：穿着各色服装的商贩从四面八方涌来，广场上支起帐篷，牲口的叫声、讨价还价的喧嚣、铁匠铺的打铁声混成一片。来自威尼斯的丝绸、来自北方的毛皮、本地的木材和铁器在这里交换。这座小镇的脉搏，随着每一次集市的钟声而强劲跳动。到14世纪，它甚至获得了酿造和销售葡萄酒的垄断权，富庶可见一斑。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的馈赠总是伴随着考验。格明德经历了多次大火，最严重的一次在1662年，几乎将整个木质结构的小镇付之一炬。也正是这次灾难，促成了小镇的重生。重建后的房屋大多采用了更耐火的石料，并装饰上了当时流行的文艺复兴晚期及巴洛克风格的立面，那些精美的壁画、凸窗和山墙，构成了我们今天看到的老城主要风貌。城堡本身也在17世纪被改建成了更适宜居住的文艺复兴式宫殿，少了几分战争的戾气，多了几分生活的贵气。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间快进到20世纪中叶，格明德迎来了一位意想不到的“新居民”——费迪南德·保时捷。这位汽车设计天才在二战后面临困境，于1950年左右，将他的工程办公室和一部分原型车生产，迁到了相对隐蔽的格明德。据说，选择这里部分是因为其宁静的环境有利于创意工作，部分也是看中了当地熟练的工匠。在城堡附近的工厂里，传奇的保时捷356车型得以继续生产和改进。这段历史，为这座古老小镇注入了一股强劲的现代工业灵魂。当保时捷公司主体迁回斯图加特后，格明德并没有忘记这段缘分，反而将它骄傲地展示出来，于是便有了那座世界闻名的保时捷博物馆。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，今天的格明德就这样奇妙地融合了它的三层身份：中世纪的守卫者、巴洛克时期的商贸明珠、以及保时捷传奇的摇篮。它没有在某个时代凝固，而是像一条河，不断吸纳新的支流，最终形成了自己独特而深厚的文化河床。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在上午9点左右抵达，这时阳光正好洒满东面的城堡和广场，游客稀少，小镇刚刚苏醒，最适合捕捉宁静的晨间氛围。整体游览可以安排一整天（约6-8小时），上午专注于老城的历史与艺术气息，下午沉浸于机械美学的世界，傍晚则留给闲散的漫步和发现惊喜。节奏宜慢不宜快，格明德的美在于细节和氛围，需要你放慢脚步，甚至在某张长椅上发一会儿呆，才能充分体会。这样的安排能让你感受到小镇从静谧到生动，再重归宁静的完整韵律。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇大部分区域是光滑的卵石路，请务必穿一双舒适防滑的鞋子，高跟鞋在这里绝对是灾难。
许多小型画廊和工作室的开放非常随性，如果门关着但挂着“开放”的牌子，可以轻轻敲门或按铃，主人很可能就在后院创作。
如果计划参观保时捷博物馆，尤其是对汽车历史深度感兴趣的，建议预留至少2小时，里面的藏品和史料非常丰富。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在镇外的免费停车场，然后步行穿过那座横跨马尔他河的古桥，听着脚下碧蓝冰河之水奔流的轰鸣声正式进入老城范围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直走向老城中心的主广场，先在广场边的传统面包房买一个刚出炉的、裹着糖霜的“林兹蛋糕”，配一杯咖啡，坐在喷泉边看着彩绘立面在晨光中慢慢变亮。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着广场一侧的狭窄楼梯“Schlosssteig”向上攀登，穿过宁静的住宅花园，去探访那座白色威严的格明德高堡，抚摸它冰凉厚重的城墙石砖。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡的观景台俯瞰整个小镇红屋顶的海洋和远处巍峨的霍赫卡尔山脉的雪顶，看清澈的马尔他河如何像护城河一样将小镇温柔拥抱。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后信步走进主广场旁任何一条挂着“Galerie”牌子的小巷，推门进入某间艺术家工作室，和可能正在调色的画家聊上几句，看看墙上前卫的画作与窗外古老的窗棂如何对话。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在本地人推荐的“Gasthof”享用一顿丰盛的克恩顿州午餐，必点裹着面包屑煎炸的“Kärntner Kasnudeln”（奶酪饺子），感受扎实的乡土风味。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午将时光交给城堡山脚下的保时捷博物馆，在充满未来感的展厅里，近距离观赏那些光泽如镜的经典跑车，读懂它们曲线背后关于速度与梦想的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前再次回到马尔他河边，顺着河畔小径往下游散步，你会路过古老的水车磨坊，也可能遇到正在写生的学生，让流水声洗去一天的疲惫。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡登山小径的中段回望`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到日落前，阳光为西侧的老城房屋镀上金边，从这个高度可以用蔓延的红屋顶作为前景，远方的雪山作为背景，构成层次分明的全景图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主广场喷泉东侧仰拍高堡`}</h4>
                  <p className="text-sm text-gray-700">{`清晨九点前后，阳光从东面完全照亮白色的城堡塔楼，而广场建筑还在阴影中，利用喷泉作为前景，可以拍出城堡挺拔雄伟、沐浴在圣洁晨光中的经典画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`马尔他河古桥正中`}</h4>
                  <p className="text-sm text-gray-700">{`全天皆可，但尤以正午阳光直射时，能完美捕捉到河底每一块鹅卵石和那令人心醉的蒂芙尼蓝河水，以对称构图将河岸两侧色彩斑斓的房子一同纳入镜中。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`保时捷博物馆玻璃幕墙内`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个晴朗的白天，站在博物馆内部，以一辆经典保时捷（如银色356）为前景，透过巨大的玻璃幕墙，将窗外古老的高堡作为背景一同拍摄，完成古今对话的绝妙构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`老城某条小巷的转角`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚时分，利用小巷狭窄的空间营造纵深感，聚焦于一扇装饰着鲜花的古老木门，或一个点着灯的凸窗，让温暖的光晕与石墙的冷调形成对比，拍出富有故事感的局部特写。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在拍摄私人住宅、工作室内部或正在创作的艺术家时，请务必先征得对方同意，一个微笑和简单的手势就能解决。`}</li>
                <li>• {`利用小镇丰富的水元素——喷泉、河流、甚至雨后地上的倒影，能让你拍出的照片立刻多一份灵动和诗意。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`下榻由15世纪贵族宅邸改造的精品酒店，房间里有裸露的原始木梁和石墙，早餐在带拱顶的古老地窖中享用，仿佛睡在历史里。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`艺术爱好者之家`}</h4>
                  <p className="text-sm text-green-800">{`选择一位本地画家经营的民宿，每个房间都挂着他/她的原作，早晨在充满松节油和颜料气味的阳光房里，和主人一起喝咖啡聊艺术。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`乡村宁静 retreat`}</h4>
                  <p className="text-sm text-yellow-800">{`住在小镇外2公里处、马尔他河畔的传统农庄，房间阳台正对雪山和牧场，晚上只有溪流和牛铃声相伴，享受绝对的静谧阿尔卑斯之夜。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端设计体验`}</h4>
                  <p className="text-sm text-purple-800">{`入住将保时捷设计美学与阿尔卑斯奢华结合的现代设计酒店，房间线条极简，视野极佳，浴室水龙头都像跑车零件般精致，体验格明德的另一面。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`旺季（7-8月及圣诞市场期间）建议提前数月预订，尤其是那些特色鲜明的家庭民宿，通常只有寥寥几间房。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇治安极好，夜晚独自散步也非常安全，但大部分商店和餐厅关门较早（晚8点后），建议提前安排好晚餐或选择带厨房的住宿。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开格明德好些天了，但闭上眼，那些画面和感觉依然清晰：冰凉清甜的空气，卵石路的触感，咖啡与油画颜料混合的独特气味，还有那座白色城堡，既古老地矗立着，又温柔地包容着脚下关于速度与线条的现代神话。这个地方教会我的，是一种“融合”的智慧。它没有将自己禁锢在某个辉煌的过去，也没有盲目追逐崭新的潮流。它只是从容地让时间层叠，让中世纪骑士的传说、巴洛克商人的精明、以及二十世纪工程师的狂热，都在同一片雪山和蓝天下，找到了共存的方式，并且发酵出一种独一无二的气质。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个凡事追求效率、标签化和非此即彼的世界里，格明德像一首轻缓而深邃的多声部乐曲。它告诉我们，深度之美往往在于复杂性，在于那些看似矛盾的灵魂能够和谐共鸣。你可以是一个追寻历史尘埃的旅人，也可以是一个痴迷机械美学的极客，在这里，你都能找到触动心弦的片段。它不大，一天足以走遍，但它又很深，足以让你思考很久。这就是为什么，每一位厌倦了浮光掠影、渴望在旅途中遇见故事、碰撞想法的深度旅行者，都应该来格明德住上几天。它不张扬，不喧嚣，只是静静地在阿尔卑斯山的一隅，为你提供一种关于时间、创造与生活的，格外优美的参考答案。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/krems-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克雷姆斯老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Krems Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bregenz" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布雷根茨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bregenz</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/innsbruck-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    因
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">因斯布鲁克老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Innsbruck Old Town</p>
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
