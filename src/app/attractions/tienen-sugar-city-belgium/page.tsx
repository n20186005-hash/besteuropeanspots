import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '蒂嫩 Tienen｜探访比利时的“糖之城”，在甜菜香气中漫步中世纪广场与静谧贝居安会院 - 最佳欧洲景点',
  description: '朋友，如果你和我一样，厌倦了那些被明信片印满的欧洲大都市，想找个地方闻闻真正属于土地和劳动的味道，那就来蒂嫩吧。我第一眼看到它，是从火车车窗望出去——一片平坦的弗拉芒田野尽头，几根巨大的、锈红色的工业烟囱像沉默的巨人，与一座纤细的教堂尖塔并肩站在天际线上。那种奇妙的混搭感，瞬间就抓住了我。 走出小小',
}

export default function TienenSugarCityBelgiumPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '比利时', href: '/destinations/europe' },
            { label: '蒂嫩', href: '/destinations/europe' },
            { label: '蒂嫩（糖之城）', href: '/attractions/tienen-sugar-city-belgium' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`蒂嫩（糖之城）・Tienen・比利时・蒂嫩`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，如果你和我一样，厌倦了那些被明信片印满的欧洲大都市，想找个地方闻闻真正属于土地和劳动的味道，那就来蒂嫩吧。我第一眼看到它，是从火车车窗望出去——一片平坦的弗拉芒田野尽头，几根巨大的、锈红色的工业烟囱像沉默的巨人，与一座纤细的教堂尖塔并肩站在天际线上。那种奇妙的混搭感，瞬间就抓住了我。
走出小小的火车站，空气里真的有股味道。不是花香，不是咖啡香，而是一种淡淡的、温暖的甜，混合着一点泥土和焦糖的气息，若有若无。当地人告诉我，这就是“糖城”的味道，即便老的糖厂早已不再日夜轰鸣，但甜菜收获季节，空气里依然会飘着这种标志性的甜腻。我跟着这股味道，沿着安静的街道走向市中心。这里没有汹涌的人潮，只有骑着自行车叮铃而过的居民，和坐在自家窗台边晒太阳的老奶奶。生活，在这里是以糖的酿造周期为节拍的。
然后，我拐进了大广场（Grote Markt）。那一刻，中世纪的气息扑面而来。广场不算大，但被一圈色调温暖、山形墙精美的老房子环抱，地面是光滑的旧石板。广场一侧，圣日耳曼教堂那雄浑的哥特式身躯稳稳地矗立着， sandstone 石材在下午的光线下泛着蜂蜜般的光泽。人们坐在广场周边的咖啡馆里，喝着啤酒，聊着天，孩子们在喷泉边玩耍。这座广场不是舞台布景，它就是蒂嫩人日常生活的客厅。
但最打动我的，是穿过几条小巷后突然闯入的贝居安会院。这里太静了，静得能听到风吹过庭院里古树的声音。一圈简朴的红砖小房子，围着中央一片翠绿的草地。几个世纪前，那些选择宗教生活但不愿完全与世隔绝的“贝居安女”就住在这里。如今，这里依然是宁静的住宅区。我坐在长椅上，看着阳光把窗台上的天竺葵照得透亮，远处糖厂的烟囱在树梢间露出一角。信仰的宁静与工业的力量，在这座小城里达成了某种诗意的和解。这份独特的静谧与反差，才是蒂嫩最核心的魅力。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "朋友，如果你和我一样，厌倦了那些被明信片印满的欧洲大都市，想找个地方闻闻真正属于土地和劳动的味道，那就来蒂嫩吧。我第一眼看到它，是从火车车窗望出去——一片平坦的弗拉芒田野尽头，几根巨大的、锈红色的工业烟囱像沉默的巨人，与一座纤细的教堂尖塔并肩站在天际线上。那种奇妙的混搭感，瞬间就抓住了我。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走出小小的火车站，空气里真的有股味道。不是花香，不是咖啡香，而是一种淡淡的、温暖的甜，混合着一点泥土和焦糖的气息，若有若无。当地人告诉我，这就是“糖城”的味道，即便老的糖厂早已不再日夜轰鸣，但甜菜收获季节，空气里依然会飘着这种标志性的甜腻。我跟着这股味道，沿着安静的街道走向市中心。这里没有汹涌的人潮，只有骑着自行车叮铃而过的居民，和坐在自家窗台边晒太阳的老奶奶。生活，在这里是以糖的酿造周期为节拍的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然后，我拐进了大广场（Grote Markt）。那一刻，中世纪的气息扑面而来。广场不算大，但被一圈色调温暖、山形墙精美的老房子环抱，地面是光滑的旧石板。广场一侧，圣日耳曼教堂那雄浑的哥特式身躯稳稳地矗立着， sandstone 石材在下午的光线下泛着蜂蜜般的光泽。人们坐在广场周边的咖啡馆里，喝着啤酒，聊着天，孩子们在喷泉边玩耍。这座广场不是舞台布景，它就是蒂嫩人日常生活的客厅。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但最打动我的，是穿过几条小巷后突然闯入的贝居安会院。这里太静了，静得能听到风吹过庭院里古树的声音。一圈简朴的红砖小房子，围着中央一片翠绿的草地。几个世纪前，那些选择宗教生活但不愿完全与世隔绝的“贝居安女”就住在这里。如今，这里依然是宁静的住宅区。我坐在长椅上，看着阳光把窗台上的天竺葵照得透亮，远处糖厂的烟囱在树梢间露出一角。信仰的宁静与工业的力量，在这座小城里达成了某种诗意的和解。这份独特的静谧与反差，才是蒂嫩最核心的魅力。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`蒂嫩（糖之城）`} />
                <InfoRow label="英文名称" value={`Tienen`} />
                <InfoRow label="正式名称" value={`Tienen`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`蒂嫩`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座将中世纪灵魂与近代工业血脉完美融合的弗拉芒城市，其长达两个多世纪的甜菜糖生产史深刻塑造了它的肌理与气息。`} />
                <InfoRow label="建筑特色" value={`以宏伟的布拉班特哥特式教堂为制高点，环绕着朴素而优美的贝居安会院砖房，远处巨大的旧糖厂工业建筑群形成震撼的天际线对比。`} />
                <InfoRow label="建筑风格" value={`以哥特式与中世纪民用砖石建筑为核心，混搭19-20世纪工业建筑风格。`} />
                <InfoRow label="文化价值" value={`这里是体验比利时“甜蜜工业”遗产的活化石，展现了信仰、社区生活与规模化农业经济如何在一座小镇中交织共存数百年。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城市公共空间全天开放。核心景点圣日耳曼教堂（Sint-Germanuskerk）开放时间为周一至周六上午9点至下午5点，周日下午1点至5点。蒂嫩贝居安会院（Begijnhof Tienen）庭院全天可进入，部分建筑内部开放时间不定，建议提前在旅游信息中心查询。糖业博物馆（Supermuseum）通常于周三、周六和周日下午1点至5点开放，但开放时间可能调整，行前务必官网确认。主要节庆如“糖节”（Suikerrock）期间，全市会有特别活动与临时安排。`} />
              <InfoRow label="门票价格" value={`进入蒂嫩城市本身免费。圣日耳曼教堂免费入内，登塔可能需要小额捐赠（约2-3欧元）。贝居安会院庭院免费，参观内部博物馆或特定房间费用约为5欧元。糖业博物馆门票约为6欧元，学生及65岁以上老人可享折扣，12岁以下儿童常免费。旅游信息中心提供的地图及导览册通常免费。`} />
              <InfoRow label="地址" value={`Grote Markt, 3300 Tienen, Belgium`} />
              <InfoRow label="交通方式" value={`蒂嫩位于布鲁塞尔以东约40公里。最便捷方式是乘坐火车。从布鲁塞尔中央站（Brussels-Central）出发，乘坐前往列日（Liège）或哈瑟尔特（Hasselt）方向的IC或L列车，在“Tienen”站下车，车程约25-35分钟，班次频繁（约每小时2-4班）。火车站位于市中心步行约10分钟范围内。若自驾，从布鲁塞尔沿E40高速公路向东，于“Tienen”出口驶出即可，注意市中心多为石板路且停车位有限，建议使用城墙周边的付费停车场（如Hoegaardsestraat停车场）。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "蒂嫩的故事，得从它的土壤讲起。这片位于德默尔河（Demeer）畔的土地，肥沃得不像话。早在罗马时代，这里就有了定居点。但真正让它登上历史地图的，是中世纪。大约10世纪左右，蒂嫩作为一个贸易站发展起来，到了12世纪，它获得了城市特许状，那座宏伟的圣日耳曼教堂也开始动工。教堂的建造断断续续持续了几个世纪，你可以从它混合了罗马式基底和华丽布拉班特哥特式上部主体的风格中读到时间的层叠。它就像一位历经沧桑的老者，看着脚下广场上的集市从售卖羊毛、谷物，慢慢变成了别的东西。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间快进到19世纪初，一个叫拿破仑的法国人改变了欧洲的农业版图。因为对英封锁导致蔗糖短缺，他大力推广甜菜制糖。蒂嫩肥沃的土壤一下子找到了它的天命。1813年，这里建立了第一家甜菜糖厂。你能想象吗？从此，秋天的空气不再只有落叶的腐败气息，而是弥漫着甜菜根被收割、清洗、压榨后散发出的浓烈、近乎发酵的甜味。铁路修通了，巨大的工厂拔地而起，烟囱日夜喷吐着白烟。农民们的生活节奏被甜菜的种植周期牢牢锁定，整个城市的经济命脉都与那白色的晶体息息相关。蒂嫩成了比利时，乃至欧洲重要的糖业中心，人们称它为“甜城”。糖，给这里带来了财富，也塑造了它刚毅的工业面貌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，蒂嫩的中世纪灵魂从未离去。就在机器轰鸣的同时，那座始建于13世纪的贝居安会院一直安静地存在着。贝居安会是一场中世纪晚期独特的女性宗教运动，成员们发誓保持贞洁和服从，但不住在封闭的修道院，而是在这种社区里共同生活，从事纺织、慈善等工作。蒂嫩的贝居安会院规模不小，鼎盛时有上百名女性居住。她们的红砖小屋简单而坚固，围成一个与世无争的方庭。即便在糖业最鼎盛的时期，这里依然是一个宁静的避风港，仿佛城市急促的工业心跳旁，一个沉稳而永恒的呼吸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "二十世纪，糖业经历了合并、全球化竞争。蒂嫩最大的糖厂最终在20世纪末停止了生产。那些巨大的厂房和烟囱没有倒下，它们作为工业遗产沉默地站立着，成为了天际线上最具冲击力的纪念碑。与此同时，人们开始重新珍视那些古老的部分：大广场经过精心修缮，贝居安会院被列入联合国教科文组织世界遗产名录（作为“弗兰德地区的贝居安会院”之一）。今天的蒂嫩，不再是一个单纯的工业城镇，它聪明地将自己的两段传奇历史——中世纪的信仰社区与近代的工业雄心——并置在一起，供人阅读。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更有趣的是，糖的基因已经融入它的文化血液。每年夏天，蒂嫩会举办盛大的“糖摇滚”（Suikerrock）音乐节，这个名字直白得可爱。音乐、啤酒、狂欢的人群，这何尝不是另一种形式的“甜”？从农田到工厂，从教堂到音乐节，蒂嫩的历史就像一块夹心糖果，外层是坚硬的工业外壳，内核是绵长的人文甜意。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天（约8-9小时）来慢慢品味蒂嫩。最佳抵达时间是上午9点左右，这时大广场的咖啡馆刚开门，晨光柔和，适合拍照。游览节奏宜缓不宜急，重点在于感受“糖”与“古”的双重气息。上午聚焦于中世纪核心区，下午探索工业遗产和静谧的贝居安社区，傍晚登高望远。这样的安排能让你在光线最佳时捕捉不同区域的韵味，并避开可能的中午炎热或下午人流（虽然这里人流本就稀少）。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`糖业博物馆和教堂塔楼开放时间可能变化且不重合，出发前务必在蒂嫩旅游官网进行最后确认。市中心石板路漂亮但高跟鞋不友好，请务必穿一双舒适结实的步行鞋。这里不是旅游陷阱区，几乎不存在针对游客的骗局，可以完全放松警惕，享受本地人的慢节奏。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从火车站出来，先别急着去中心，绕一点路走到 Kapelstraat 街，远远地拍一张糖厂巨大烟囱与圣日耳曼教堂尖塔同框的经典对比照。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`信步走到大广场（Grote Markt），绕着广场走一圈，仔细看看每栋山形墙老房子立面上各不相同的装饰和金色字号。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开圣日耳曼教堂厚重的木门，让眼睛适应内部昏暗的光线，然后径直走向祭坛后方，仰望那扇描绘着圣徒故事的巨大彩色玻璃窗。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在广场边随便找一家有户外座位的咖啡馆，点一杯本地啤酒或咖啡，像当地人一样无所事事地坐上半小时，看鸽子起落。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`朝着 Veemarkt 方向走，穿过几条小巷，不经意间走进被低矮红砖房环绕的贝居安会院中央草坪，在树下的长椅上静静听一会儿风声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从会院另一个门出来，前往糖业博物馆（Supermuseum），看看那些古老的制糖机器和老照片，闻一闻那里是否还残留着甜菜的味道。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`根据体力，尝试攀登圣日耳曼教堂的塔楼（如果开放），在狭窄的旋转楼梯尽头，收获一个将红色屋顶、绿色庭院和远方工业遗迹尽收眼底的全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐前，漫步到古老的城墙遗迹（如 Zoutleeuwsepoort 附近），沿着护城河改建的绿地走一走，结束一天的行程。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`大广场东侧仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到日落前，站在广场东侧房屋的阴影里，向西拍摄圣日耳曼教堂全景，暖黄色的夕阳会给砂岩立面染上浓郁的金色，天空呈现渐变蓝。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`贝居安会院拱门框景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚柔和光线下，站在会院入口的拱门内，向外拍摄中央草坪和对面的一排小屋，用拱门自然形成画框，营造深邃宁静的故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`糖厂烟囱与教堂的远景`}</h4>
                  <p className="text-sm text-gray-700">{`从火车站通往市中心的路上（如 Leopold II-laan），寻找一个能将前景的民居、中景的教堂尖塔和背景的工业烟囱压缩在同一画面的角度，使用长焦镜头效果更震撼。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣日耳曼教堂内部光柱`}</h4>
                  <p className="text-sm text-gray-700">{`如果赶上晴朗的上午，阳光会从南侧的彩窗射入教堂中殿，耐心等待光柱恰好洒在古老石柱或长椅上的那一刻，捕捉尘埃在光线中飞舞的瞬间。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄贝居安会院住宅区时请保持安静并尊重居民隐私，避免将镜头直接对准住户的窗户或私人活动区域。工业区部分建筑可能仍属私产或废弃，远观拍照即可，切勿擅自闯入。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`下榻在大广场周边由16世纪商人宅邸改造的精品酒店，晚上可以独自拥有空旷的广场夜景，在古老的木梁下安然入梦。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`静谧庭院体验`}</h4>
                  <p className="text-sm text-green-800">{`入住贝居安会院内经过现代化改造的古老小屋民宿，清晨在只有鸟鸣的私人小花园里享用房东准备的homemade果酱和面包。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`实用便利住所`}</h4>
                  <p className="text-sm text-yellow-800">{`选择火车站附近设计简约的现代酒店，交通极其方便，且通常配备停车场，是探索城市和周边布拉班特乡村的完美基地。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`甜蜜主题尝试`}</h4>
                  <p className="text-sm text-purple-800">{`寻找郊外由旧糖厂附属建筑（如经理别墅）改造的舒适B&B，房间可能保留着工业风的元素，早餐桌上少不了本地特色的糖制品。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "蒂嫩非常安全宁静，但夜生活相对安静，喜欢热闹的旅者可能会觉得入夜后过于沉寂。若遇上“糖摇滚”音乐节等大型活动期间，全城住宿会非常紧俏且价格飙升，务必提前数月预订。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开蒂嫩的时候，我嘴里仿佛还留着那股淡淡的甜味。但这份甜，不是糖果店里的那种直白讨好，而是复杂的、有层次的。它是甜菜根从黑土地里带来的质朴土腥气，是工厂锅炉里蒸腾出的热浪焦香，也是几个世纪以来，女人们在贝居安会院的烛光下默默祈祷时，那份内心的笃定与安宁。蒂嫩教会我一件事：真正的深度，不在于景点的密集与宏伟，而在于一个地方如何诚实地保留并展示它所有的历史层理——光荣的、劳作的、平凡的、神圣的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求快速消费和网红打卡的世界里，蒂嫩像一位温和而固执的讲述者。它不急于炫耀，只是静静地摊开自己的故事书：一页是石砌的教堂与广场，一页是砖垒的厂房与烟囱。它提醒我们，欧洲的韵味不仅存在于巴黎的铁塔或罗马的废墟，也存在于这些“次要”的城市里，存在于糖的甜蜜与钢铁的冷硬交织的日常史诗中。如果你渴望一次脱离常规轨迹的旅行，想用双脚丈量一段真实可触的、关于信仰、土地与工业的欧洲记忆，那么蒂嫩，这个呼吸间都带着历史甜味的小城，绝对值得你绕道而来，住上一晚，听它慢慢诉说。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/beringen-mine-be-mine" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝灵恩煤矿遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Beringen Mine (Be-MINE)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/maaseik-historical-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马赛克</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Maaseik</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/citadel-of-dinant-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迪南要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Citadel of Dinant</p>
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
