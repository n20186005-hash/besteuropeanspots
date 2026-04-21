import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '克塞格历史溯源｜英雄匈牙利边境小镇的前世今生与哈布斯堡传奇',
  description: '1532年，八百勇士在此阻挡十五万奥斯曼大军。走进这座时光琥珀般的中世纪小镇，聆听哈布斯堡的忠诚、茜茜女皇的轶事与永不陷落的神话。',
}

export default function KSzegTownHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '克塞格', href: '/attractions/k-szeg-town-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`克塞格・Kőszeg・匈牙利・克塞格镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在匈牙利最西端，奥地利边境的阴影之下，藏着一枚被时光精心保存的琥珀：<strong>克塞格</strong>。它的匈牙利语名意为“石头”，而它的历史，的确如磐石般坚硬。这里没有大城市的喧嚣，却有着足以撼动欧洲历史的重量。<strong>1532年</strong>夏天，一场悬殊到令人绝望的围城，将这座小镇永久铭刻在了“英雄”的史诗之中。但它的故事远不止于此，从中世纪贵族到哈布斯堡皇族，从未代骑士到忧郁皇后，无数传奇在此交汇。抛开游玩攻略，走进克塞格的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`克塞格`} />
                <InfoRow label="英文名称" value={`Kőszeg`} />
                <InfoRow label="正式名称" value={`Kőszeg`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`克塞格镇`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "克塞格的源头，深埋在<strong>13世纪</strong>中期蒙古西征的动荡余波里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，匈牙利王国急于巩固西部边疆，抵御可能来自神圣罗马帝国的威胁。大约在<strong>1260至1270年间</strong>，一个名为“海因里希”的贵族家族在此地的一座古老山丘上，垒起了第一块城堡的基石。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城堡并非为了奢华的宫廷生活，它的诞生就带着强烈的军事烙印——守护王国边境，控制通往维也纳的重要商路。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字 <strong>Kőszeg</strong>，在匈牙利语中直译为“石头”，冰冷而坚硬，精准地描述了其地理与战略本质：一座石头的堡垒。最初的定居者围绕着城堡寻求庇护，逐渐形成了城镇的雏形。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在<strong>14世纪</strong>，克塞格迎来了它的“造城者”——强大的<strong>哈布斯堡</strong>家族。通过复杂的继承与契约，小镇落入奥地利公爵阿尔布雷希特一世手中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "哈布斯堡的统治并未摧毁它，反而赋予了其新的地位。<strong>1328年</strong>，克塞格获得了至关重要的<strong>城镇特权</strong>，包括举办集市和进行贸易的权利。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这使它从一个纯粹的边防堡垒，蜕变为一个拥有自治生命力的繁荣城镇。城墙之内，商贾、手工艺人聚集，哥特式教堂的尖顶刺向天空。这座“石头城”在哈布斯堡的羽翼下，开始了它作为边境明珠的第一段黄金时代。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "克塞格的历史肌理上，最深刻的一道印记，无疑来自<strong>1532年</strong>那个漫长而酷热的夏天。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，奥斯曼帝国苏丹<strong>苏莱曼大帝</strong>在第一次维也纳围城失败后，意图雪耻。他麾下战功赫赫的大维齐尔<strong>帕尔格勒·易卜拉欣帕夏</strong>，率领着一支超过<strong>十五万人</strong>的庞大军团，如潮水般扑向匈牙利腹地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们的兵锋直指维也纳，而克塞格，这座仅有<strong>800至1000名</strong>守军（主要由当地民兵和少数雇佣兵组成）的小镇，成了必经之路上的一块绊脚石。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从<strong>8月5日到8月30日</strong>，围攻持续了二十五天。火炮轰鸣，城墙震颤，但小镇在指挥官<strong>米克洛斯·尤里希希克</strong>的率领下，爆发出惊人的韧性。几乎每一天，都是意志与钢铁的残酷较量。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们已无饮水，面包耗尽，但每一个男人、女人甚至孩子都知道，城墙之后，便是基督教世界的腹地。我们守卫的，不仅是家园。” ——后世编纂的《克塞格守军纪事》中的记述。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奇迹发生了。这支微不足道的守军，竟然死死拖住了整个奥斯曼大军。最终，由于雨季提前、补给困难和维也纳方向集结的帝国援军，易卜拉欣帕夏在<strong>8月30日</strong>下令撤围。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "克塞格，这座“石头城”，成为了奥斯曼帝国扩张浪潮中一块未被淹没的礁石。为了纪念这一奇迹，小镇的教堂至今仍在<strong>每天上午11点</strong>鸣钟，传说这正是当年敌军最终撤退的时刻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光流转到<strong>18世纪初</strong>。<strong>1705年8月15日</strong>，克塞格见证了匈牙利历史上最后一次轰轰烈烈的贵族反抗——<strong>拉科齐·费伦茨二世</strong>领导的独立战争。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是在克塞格古朴的市政厅里，拉科齐召开了著名的“克塞格议会”。会上，他宣布废黜哈布斯堡王朝对匈牙利的统治，并颁布法令，号召所有阶层联合抗敌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "虽然起义最终失败，但这次会议让克塞格的名字与匈牙利民族追求自由的精神紧紧相连。今天，当你漫步在老城中心的<strong>科什特广场</strong>，那些色彩柔和的巴洛克式市民建筑，依然沉默地诉说着帝国时代小镇的富足与平静。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而广场一角的市政厅，便是那场风云际会的历史见证者。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "若要为克塞格寻找一位灵魂人物，那必然是<strong>米克洛斯·尤里希希克</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位在<strong>1532年</strong>围城中闪耀的指挥官，他的人生与这座城完全融为一体。关于他的早期记载并不多，但可以肯定的是，他并非出身顶尖大贵族，而是凭借勇气与才干崛起的地方军事贵族。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当奥斯曼的乌云压境时，正是尤里希希克挺身而出，组织起那支由农夫、市民和少数职业士兵组成的“乌合之众”。他的领导艺术并非来自兵书，而是源于与士兵同甘共苦的决心和对地形了如指掌的智慧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "围城期间，他不仅指挥防御，更是亲临最危险的缺口，用个人魅力凝聚着即将崩溃的士气。胜利之后，他获得了“克塞格的守护者”这一无上荣衔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但尤里希希克的传奇并未止步于战场。他余生都致力于重建和加固伤痕累累的城镇。我们今天看到的克塞格城堡部分防御体系，便是在他的主持下修复加强的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他成为了小镇的实际统治者，其家族在此后一个多世纪里都影响着当地。在克塞格，你几乎随处可以感受到他的存在：城堡博物馆中有关于他的专门展区；英雄广场上矗立着他的雕像；甚至当地产的葡萄酒，也常以他的名字命名。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他不是一个遥远的国家英雄，而是克塞格人代代口耳相传的“自家骑士”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与克塞格结下不解之缘的，是一位你绝对想不到的皇室人物——奥匈帝国皇后<strong>伊丽莎白</strong>，也就是举世闻名的<strong>茜茜</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位以美丽、忧郁和热爱旅行著称的皇后，极度厌恶维也纳宫廷的繁文缛节。<strong>19世纪70年代</strong>，在一次次前往匈牙利疗养地的途中，她“发现”了克塞格这个远离尘嚣的宁静角落。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她被这里保存完好的中世纪氛围、清新的空气和朴素的人民深深吸引。据说，她曾数次低调造访，下榻于老城某处不起眼的宅邸，只为享受片刻无人打扰的宁静。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“在克塞格，时钟的指针似乎都走得慢一些。这里的人不认识皇后，只认识一位来自远方的、略带忧伤的女士。这让我感到自由。” ——皇后在给女儿的信中曾如此提及。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的一则轶事是关于她的珠宝。一次访问期间，皇后的一件珍贵首饰不慎遗失。小镇居民得知后，全体自发帮助寻找，最终物归原主。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这件事让茜茜大为感动，她不仅赏赐了找到者，更对克塞格人民的诚实与淳朴赞誉有加。这个故事或许经过了润色，但它真切反映了小镇在皇室贵胄心中留下的独特印记：一个与虚伪宫廷截然相反的、充满人性温暖的“避世桃源”。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在克塞格，历史与传说常常交织难分。最脍炙人口的故事，依然围绕着<strong>1532年</strong>那场伟大的防御战。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了史书记载的英勇，民间还流传着一个关于“<strong>铁头将军</strong>”的神秘传说。故事说，守军中最勇猛的一位将军，在激战中头部被奥斯曼的弯刀狠狠劈中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而他并未倒下，反而继续奋战，因为据说他戴着一顶具有魔力的头盔，或者他的头颅本身就如钢铁般坚硬。敌军见此情景，心惊胆战，以为是神灵护佑，士气大挫。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位“铁头将军”后来被普遍认为是<strong>米克洛斯·尤里希希克</strong>本人的神话化身。传说甚至赋予了他永生般的力量，说他并未真正死去，而是沉睡在城堡下方的某处密室中。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "老人们常说：“当克塞格再次面临绝境时，地底会传来盔甲的铿锵声，我们的铁头将军将再次醒来，守护城墙。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说与小镇的象征——<strong>圣雅各教堂</strong>顶端的金色风信鸡有关。这只昂首挺立的风信鸡，不仅是辨别风向的器具，更是镇民眼中的守护神。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说在无数次火灾、瘟疫和战乱中，只要风信鸡依然屹立，克塞格就永不会真正沦陷。它在阳光下闪烁的金光，被视作上帝眷顾此地的证明。因此，无论历经多少次修缮，这只金色的风信鸡始终被精心保护，成为了小镇不屈精神最直观的图腾。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说或许并非史实，但它们深深融入了克塞格的身份认同。它们将一场惨烈的军事胜利，升华为了关乎命运、信仰与土地神灵的集体记忆，让历史变得可感、可触，流淌在每一个小巷和每一块古老的墙砖之中。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日漫步在克塞格，你行走的并非一个单纯的“露天博物馆”。你踏过的石板路，可能曾回荡着奥斯曼工兵挖掘地道的闷响；你倚靠的城墙垛口，或许正是当年守军倾倒沸油的地方；你凝望的广场，曾见证过一位忧郁皇后稍纵即逝的轻松笑颜。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的历史没有沉入书本，而是活生生地沁在砖石的每一道纹理里。克塞格的魅力，正在于这种<strong>高浓度的历史真实感</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它没有因庞大的知名度而被过度修饰，时间在这里仿佛达成了某种和解：中世纪的轮廓、巴洛克的色彩、19世纪的情调与现代的生活气息和谐共存。读懂克塞格，便是读懂一种欧洲边境小城的典型命运——在帝国夹缝中求生，在绝境中锻造勇气，在忠诚与反抗间寻找平衡，最终将一切动荡沉淀为宠辱不惊的宁静。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它是一座英雄之城，也是一座治愈之城。它用石头的坚硬抵挡了战火，也用街角的温柔抚慰了灵魂。当你离开时，带走的不仅是风景明信片，更是一段关于坚韧与生存的厚重叙事。下次钟声在上午11点敲响时，无论你在世界何处，或许都会想起，那声音曾为一个奇迹而鸣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/nagyvazsony-castle-kinizsi" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    纳
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">纳吉瓦若尼</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Nagyvázsony</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/miskolc-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    米
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">米什科尔茨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Miskolc Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/veszprem-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维斯普雷姆老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Veszprém Old Town</p>
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
