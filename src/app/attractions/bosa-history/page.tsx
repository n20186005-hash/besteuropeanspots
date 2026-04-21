import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '博萨历史溯源｜撒丁岛彩色河谷的前世今生与马拉斯皮纳家族传奇',
  description: '探秘撒丁岛西岸被时光凝固的中世纪哨站。走进博萨的彩色河谷，揭开马拉斯皮纳城堡的古老秘密，聆听一段关于皮革、海盗与没落贵族的地中海往事。',
}

export default function BosaHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '意大利', href: '/destinations/europe' },
            { label: '撒丁岛', href: '/destinations/europe' },
            { label: '博萨', href: '/attractions/bosa-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`博萨・Bosa・意大利・撒丁岛`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在撒丁岛狂野的西海岸，湍急的<strong>特莫河</strong>唯一航行的终点，藏着一座被颜料盘打翻染就的山城——<strong>博萨</strong>。它并非典型的地中海明珠，而是一座矗立在历史断层上的千年哨站。陡峭的街巷里，回荡着比萨商人的叫卖、阿拉贡骑士的铁蹄、以及萨伏依贵族远去的叹息。抛开游玩攻略，走进<strong>博萨</strong>的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`博萨`} />
                <InfoRow label="英文名称" value={`Bosa`} />
                <InfoRow label="正式名称" value={`Bosa`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`撒丁岛`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "博萨的起源，深埋在神话与实用主义的交界处。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最早的定居痕迹可追溯到<strong>公元前8世纪</strong>。腓尼基人并非被美景吸引，而是看中了<strong>特莫河</strong>这条深入内陆的天然通道。他们在河畔建立了名为 <strong>“Bosa”</strong> 的贸易站，这个名字可能源于腓尼基语，意为“高地”或“通道”，精准描述了它的战略位置。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马人到来后，将其发展为重要的港口和农业中心。但真正的城市雏形，源于对安全的极致渴求。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>8世纪</strong>左右，频繁的<strong>萨拉森海盗</strong>袭击迫使居民放弃便利的河岸，退守到内陆山上。他们在现今<strong>博萨韦基亚</strong>的地区建立了防御性聚居点。然而，命运的齿轮再次转动。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>12世纪初</strong>，比萨共和国为了巩固在撒丁岛的势力，决定在此建立一座更强大、更可控的堡垒城市。他们选择了河对岸一座更易守难攻的石灰岩山丘——<strong>塞拉瓦莱山</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "据地方编年史模糊记载，比萨人曾询问当地长老：“何处可建一城，既能御敌于外，又能控河于内？”长老指向云雾缭绕的山巅：“唯有鹰隼筑巢之处。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，一座以山顶城堡为核心、房屋如藤蔓般向下生长的中世纪山城，正式诞生。它的名字，沿用了古老的“Bosa”，但其灵魂，已然新生。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "博萨的历史，镌刻在石头与河水中，核心印记有三。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一道印记：马拉索城堡与家族王朝。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城市命运的转折点，在于那座俯瞰全城的 <strong>“马拉索城堡”</strong> 。它由<strong>比萨的马拉索内家族</strong>始建于<strong>1122年</strong>，但真正的辉煌属于后来者——<strong>马拉斯皮纳家族</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>14世纪</strong>，阿拉贡王国征服撒丁岛后，将城堡赐予这个来自托斯卡纳的显赫家族。马拉斯皮纳家族不仅是军事领主，更是精明的管理者。他们加固城堡，将其变成行政与司法中心，深刻塑造了博萨长达数个世纪的社会结构。城堡的灰墙，见证了家族的权谋、婚礼、决断与最终的没落。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二道印记：拿破仑的封锁与皮革业的崛起。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "19世纪初，<strong>拿破仑的大陆封锁政策</strong>意外地成为了博萨经济转型的催化剂。撒丁岛与欧洲大陆的贸易被切断，本地产业被迫自力更生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "博萨利用<strong>特莫河</strong>丰富的水源和周边牧场充足的兽皮，迅速发展起<strong>皮革鞣制业</strong>。一时间，河岸边建起了数十座鞣革作坊，刺鼻的气味与工匠的敲打声充斥河谷。这项产业让博萨在动荡时期保持了繁荣，其生产的优质皮革远销各地，独特的工业景观也留存至今。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第三道印记：色彩的重生。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "我们今天看到的博萨如彩虹般的风貌，并非自古如此。在相当长的岁月里，房屋是石材原本的灰褐色。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>20世纪70年代</strong>，一场名为 <strong>“Colour a Bosa”</strong> 的民间运动悄然兴起。当地居民和艺术家为了振兴战后略显衰败的老城，开始用明快的颜料粉刷外墙。<strong>赭石黄、大地红、海蓝、春日绿</strong>……这些色彩并非随意涂抹，许多灵感源自撒丁岛传统织物和自然景观。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这次色彩革命，意外地将一座濒临“空心化”的中世纪古城，变成了一个活着的艺术品，为其注入了全新的生命力。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在博萨的历史星图中，<strong>马拉斯皮纳家族</strong>是无法绕开的北极星。而这个家族在博萨的故事，又与一位极具争议的女性——<strong>埃莱奥诺拉·阿尔博雷亚</strong>女王紧紧交织。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>乔瓦尼·马拉斯皮纳</strong>是家族在博萨的奠基者。作为阿拉贡国王忠诚的封臣，他在<strong>14世纪后期</strong>被授予博萨的管辖权。但真正将家族命运推向巅峰与深渊的，是其后人与撒丁岛本土 Judicate（法官王国） 的博弈。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，撒丁岛最后的独立司法王国<strong>阿尔博雷亚</strong>的女法官<strong>埃莱奥诺拉</strong>，正致力于统一全岛，对抗外部势力（主要是阿拉贡）。马拉斯皮纳家族作为“外来”的阿拉贡代理人，自然站在了她的对立面。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "<strong>埃莱奥诺拉</strong>在其著名的 <strong>《卡塔罗法典》</strong> 中，曾隐晦地指责某些“山巅的鹰隼”（暗指马拉斯皮纳城堡）阻挠了岛屿的和平与律法。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史充满讽刺。在<strong>埃莱奥诺拉</strong>去世、阿尔博雷亚王国瓦解后，马拉斯皮纳家族通过联姻和权术，反而进一步扩大了对博萨及周边地区的控制，其权力在<strong>15至17世纪</strong>达到顶峰。他们修建宫殿、资助教堂、管理贸易，使博萨成为西撒丁岛的文化与经济次中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "家族的没落始于<strong>18世纪</strong>。随着萨伏依王朝统一撒丁岛，封建领主的特权被逐步剥夺。<strong>最后一位马拉斯皮纳领主</strong>在空虚的城堡中度过余生，家族最终于<strong>19世纪初</strong>彻底断绝。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡易主，家族湮灭，但“马拉斯皮纳”这个名字，已永远刻进了博萨的城墙与地名之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与博萨灵魂相通的名人，是撒丁岛诗人<strong>萨尔瓦托雷·“布埃”·梅利斯</strong>。他并非显贵，却用笔触捕捉了这座城的精髓。他在诗中描绘<strong>特莫河</strong>上渔夫的身影、老妇人窗台上的天竺葵、以及黄昏时城堡投下的漫长阴影。他的诗句，为博萨的石头与色彩注入了忧伤而坚韧的抒情灵魂，让外界透过文学，窥见了这座小城深处的脉搏。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在博萨，历史与传说在特莫河的雾气中难分彼此。最动人的传说，关乎城堡与等待。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地流传着 <strong>“白色贵妇”</strong> 的故事。据说，在月圆之夜，马拉索城堡最高的塔楼上，会出现一位身着白色长裙的幽雅女子身影。她并非恐怖的幽灵，而是马拉斯皮纳家族某位早逝的年轻新娘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说她来自遥远的意大利本土，在与领主成婚后深深爱上了博萨和这里的人民。然而，她不幸死于一场突如其来的热病。她的灵魂无法安息，并非因为怨恨，而是出于对这片土地深深的眷恋。于是，她化作“守护之灵”，每月归来，静静凝望她挚爱的彩色河谷与蜿蜒河流。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "老渔民们会说：“当你看到‘白色贵妇’，第二天捕鱼必定丰收。她在为我们祝福。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则解释了博萨房屋为何紧密相连。相传中世纪时，海盗威胁严重，市政官颁布法令：任何新建房屋的墙壁，必须与相邻房屋共享，以此让整个社区在物理上联结成一体，共同御敌。这条法令虽已无从考证，却完美诠释了博萨街巷如迷宫般错综复杂、邻里相依的独特格局，那是危机感刻入城市肌理的集体记忆。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在博萨，你并非在参观一个博物馆，而是步入一部仍在呼吸的<strong>石质编年史</strong>。每一抹鲜艳的色彩下，是腓尼基商人的基石；每一条陡峭的 <strong>“萨尔扎”</strong> 石阶，回响着比萨工匠的脚步声；城堡的残垣，诉说着一个家族的百年野心与寂灭；河畔废弃的鞣革坊，见证了小城在全球化初潮中的挣扎与智慧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有佛罗伦萨的文艺复兴巨浪，也没有威尼斯的商业帝国传奇。博萨的魅力，在于它作为<strong>地方权力中心</strong>的完整生命周期标本意义。它清晰地展示了一座中世纪城镇如何因战略而生，随家族而盛，借产业而存，最终以色彩重生，凝固成地中海上一个独特的历史琥珀。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂博萨，便是读懂撒丁岛乃至地中海世界，在宏大历史叙事缝隙中，那些沉默却坚韧的城镇命运。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/orvieto" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥尔维耶托古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Orvieto</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/craco-ghost-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克拉科鬼城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Craco</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/segesta" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塞
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塞杰斯塔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Segesta</p>
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
