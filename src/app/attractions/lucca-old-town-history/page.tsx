import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卢卡历史溯源｜环绕千年的古城墙、美第奇传奇与普契尼的乡愁',
  description: '探索意大利托斯卡纳的卢卡古城墙。不止是防御工事，更是美第奇治下的和平象征、拿破仑妹妹的“后花园”，以及普契尼记忆里的“家”。走进城墙内的千年故事。',
}

export default function LuccaOldTownHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '卢卡古城墙', href: '/attractions/lucca-old-town-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卢卡古城墙・Lucca Old Town Walls・意大利・卢卡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在托斯卡纳，有一座被时间厚爱的“岛屿”之城。它不在海边，却拥有欧洲保存最完好、最独特的文艺复兴时期城墙——这圈4.2公里的砖石堡垒，从未被战火真正攻破，反而在和平年代化身为环绕老城的空中林荫大道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城墙之内，时间仿佛被按下了暂停键。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "中世纪的塔楼、文艺复兴的宫殿、罗马式的教堂，与宁静的巷陌交织，保存着比佛罗伦萨或锡耶纳更慵懒、更本真的古老气息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "抛开游玩攻略，走进卢卡的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卢卡古城墙`} />
                <InfoRow label="英文名称" value={`Lucca Old Town Walls`} />
                <InfoRow label="正式名称" value={`Lucca Old Town Walls`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`卢卡`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "卢卡的故事，深埋在伊特鲁里亚的土壤与罗马的石基之下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早在公元前180年，这里已成为罗马帝国重要的殖民地，被命名为 <strong>“卢卡”</strong>。关于其名由来，众说纷纭。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一说源自利古里亚语的“沼泽之地”，描绘了城边塞尔基奥河泛滥形成的原始地貌；更浪漫的解释则指向拉丁语的“光明”或凯尔特语的“圣地”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "无论如何，罗马人用严谨的棋盘格规划，为卢卡奠定了千年格局。两条主干道——东西向的“德库马努斯”与南北向的“卡尔多”，在今天的菲伦戈街与罗马街下依然可循。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "帝国的衰亡并未让卢卡沉寂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它因其地处通往罗马的<strong>法兰奇杰纳朝圣之路</strong>要冲而重获生机。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "丝绸与银行业在中世纪蓬勃兴起，让这座小城富甲一方，并为其赢得了长达五个世纪的独立共和国地位（1160-1799年）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而守护这份繁荣与自由的，正是那一圈圈不断迭代的城墙。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "卢卡的城墙，是一部层叠的石头编年史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的印记属于罗马时代，遗迹深埋地下，勾勒出最早的防御轮廓。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "到了动荡的中世纪，自由城邦的公民们于<strong>11至13世纪</strong>修建了第二道城墙。今天，你仍能在圣米歇尔教堂附近的街区，看到那些粗粝的红色砖石遗迹，它们曾是抵挡神圣罗马帝国皇帝巴巴罗萨军队的屏障。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“卢卡人用城墙与高塔武装自己，决心捍卫他们的自由，对抗任何强权。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "——中世纪编年史片段" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，真正的城市标志，始于<strong>1504年</strong>那个改变命运的决定。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "面对日益强大的佛罗伦萨和革新后的火炮威胁，卢卡共和国议会投票通过了一项史诗级的工程：建造一座前所未有的、符合新时代战争逻辑的堡垒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "工程断断续续，直到<strong>1544年</strong>，在建筑大师<strong>雅各布·塞维里</strong>和<strong>多梅尼科·阿方西</strong>的主持下，最终设计方案才尘埃落定。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座文艺复兴新城墙，并非为了扩张，而是为了绝对防御。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它拥有11座庞大的棱堡、宽阔的护城河，以及倾斜的土质斜坡，能有效吸收炮弹冲击。讽刺的是，这道耗资巨大的“不朽之作”建成后，卢卡却迎来了长期的和平。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它从未经受真正的炮火考验，反而成了和平的象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>拿破仑时代</strong>，为城墙赋予了新的角色。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1805年</strong>，拿破仑将卢卡封给了他那野心勃勃的妹妹<strong>埃莉萨·波拿巴</strong>。她拆除了部分军事设施，在城墙上开辟了步道，种下了第一排梧桐树，将其变成了自己宫殿的“景观长廊”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从军事堡垒到皇家花园，城墙的功能发生了第一次浪漫的蜕变。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>埃莉莎·波拿巴：托斯卡纳的女公爵</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在卢卡，拿破仑的妹妹<strong>埃莉萨·波拿巴</strong>绝非一个匆匆过客。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1805年</strong>，她被兄长册封为卢卡和皮翁比诺的女公爵，后来更晋升为托斯卡纳大公夫人。这位波拿巴家族中最具政治头脑的女性，决心将卢卡打造成配得上其地位的首府。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她住进由旧总督府改建的宫殿（今省督府），以巴黎的品味改造城市。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她下令拓宽街道，建造新古典主义立面的广场，并将城墙顶部的防御工事系统改造为优雅的<strong>林荫大道</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我在这里就像在自己的王国里一样……卢卡虽小，但很美丽，我将让它变得更加迷人。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "——埃莉萨·波拿巴书信" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，她的统治也充满争议。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "为了筹集建设资金，她大量出售教堂财产，关闭修道院，此举激怒了虔诚的市民。她的宫廷以奢华和风流韵事闻名，与卢卡人保守的作风格格不入。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1814年</strong>，随着拿破仑的倒台，埃莉萨的统治戛然而止。她留下的，是一座被悄然“现代化”了的古城，以及城墙上那条再也无法与军事联系起来的浪漫步道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>贾科莫·普契尼：城墙内的乡音</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说埃莉萨是外来强权的印记，那么<strong>贾科莫·普契尼</strong>就是卢卡土壤里生长出的灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1858年</strong>，他出生在卢卡老城中心一栋朴素的公寓里（今普契尼故居博物馆），距离大教堂仅几步之遥。他的家族世代都是这座城市的教堂乐师。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "青年普契尼在老城的音乐学院学习，在圣米歇尔和圣马蒂诺教堂里演奏管风琴。卢卡的街巷、城墙的轮廓、教堂的钟声，构成了他最初的音乐语境。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "即便日后功成名就，在米兰和湖畔别墅创作出《波西米亚人》、《托斯卡》等不朽歌剧，卢卡始终是他精神的故乡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他最爱回到卢卡，在城墙上骑自行车，在老朋友开的“迪·西莫咖啡馆”里消磨时光。据说，他歌剧中的许多旋律灵感，就来自托斯卡纳乡间和这座小城的空气。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1924年</strong>，普契尼在布鲁塞尔病逝。根据他的遗愿，其遗体被运回卢卡，安葬在位于城墙东南角的乡间别墅里。如今，每年夏天的“卢卡普契尼音乐节”在城墙外的广场上演，全世界的歌剧爱好者汇聚于此。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当《今夜星光灿烂》的旋律响起时，你会发现，卢卡城墙围护的，不仅是砖石建筑，更是一位伟大作曲家永远的乡愁。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在卢卡，最动人的传说与一尊黑色圣像有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在圣弗雷迪亚诺教堂的罗马式立面上，镶嵌着一幅精美的<strong>13世纪马赛克镶嵌画</strong>。画中的圣母玛利亚庄严而慈悲。传说，这幅圣像并非人力所造。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>12世纪</strong>某天，一位盲眼石匠在天使的指引下，用神圣的双手“感受”着完成了这幅作品。当最后一颗镶嵌石落下，奇迹发生：石匠重见光明，而圣像在阳光下熠熠生辉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，它被称为 <strong>“卢卡的面容”</strong> ，成为城市的守护象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则萦绕在<strong>圭尼吉塔</strong>的塔顶。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座拥有标志性顶层橡树林的塔楼，属于中世纪卢卡最显赫的家族之一——圭尼吉家族。传说，家族族长为了向心爱的女子证明自己的爱意与力量，发誓要在塔顶种下一片森林。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他竟真的命人用牛车将土壤运上塔顶，种下了七棵橡树。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如今，这些树依然郁郁葱葱，成为卢卡天际线最独特的风景。人们说，在树下许愿，爱情便能如橡树般坚韧长青。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“爬上圭尼吉塔，触摸那些塔顶的橡树根须，你就会得到卢卡永恒的好运与一份忠贞不渝的爱情。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "——当地古老谚语" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "卢卡的城墙，早已超越了“防御工事”的单一维度。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它是罗马殖民地的边界，是中世纪城邦自由的宣言，是文艺复兴工程学的杰作，是拿破仑时代权力与品味的秀场，最终，演化为一条承载着市民散步、骑行、眺望家园的“空中公园”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂卢卡，便是读懂一种“以守为生”的智慧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在意大利城邦征伐不断的年代，卢卡凭借精明的外交、坚韧的防守和繁荣的经济，奇迹般地维持了独立与和平。这道城墙，正是这种集体性格最坚实的物化。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它没有向外扩张的野心，只有向内守护的决心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "因此，城墙内的世界才得以如此完整、宁静，像一颗被精心保存在天鹅绒匣子里的时光胶囊。穿行其中，你触摸到的不仅是石头，更是一整部关于自治、和平、艺术与乡愁的欧洲微观史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、漫步路线全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/giardini-naxos-genoa" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贾
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贾尔迪尼纳克索斯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Giardini Naxos</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tarquinia-etruscan-necropolis" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塔尔奎尼亚</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tarquinia</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/spello-flower-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯佩洛花城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Spello</p>
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
