import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '巴尔代约夫历史溯源｜斯洛伐克“中世纪时间胶囊”的前世今生与疗愈传奇',
  description: '潜入斯洛伐克东北角的珍宝。探索完美保存的中世纪广场、独特的木构教堂群，以及一段与温泉疗愈交织的、鲜为人知的商贸传奇。不止于风景。',
}

export default function BardejovOldTownHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '斯洛伐克', href: '/destinations/europe' },
            { label: '巴尔代约夫', href: '/destinations/europe' },
            { label: '巴尔代约夫老城', href: '/attractions/bardejov-old-town-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`巴尔代约夫老城・Bardejov・斯洛伐克・巴尔代约夫`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在斯洛伐克东北部，与波兰接壤的丘陵地带，藏着一座被时光遗忘的“博物馆城市”。它并非由巨石城堡定义，而是以一个<strong>近乎完美的中世纪城市广场</strong>为核心，静静封存着<strong>14至16世纪的汉萨同盟贸易荣光</strong>与<strong>犹太社区的智慧足迹</strong>。联合国教科文组织的名录镌刻着它的完整，但更深层的灵魂，在于其作为<strong>东西欧文化十字路口</strong>的独特身份，以及从古老矿泉中流淌出的“疗愈”使命。抛开游玩攻略，走进巴尔代约夫的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`巴尔代约夫老城`} />
                <InfoRow label="英文名称" value={`Bardejov`} />
                <InfoRow label="正式名称" value={`Bardejov`} />
                <InfoRow label="国家" value={`斯洛伐克`} />
                <InfoRow label="城市" value={`巴尔代约夫`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "巴尔代约夫的起源，深埋在喀尔巴阡山麓的密林与贸易小径之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字第一次被清晰记载，是在<strong>1247年</strong>的国王敕令中，写作“Bardughev”。关于词源，历史学家们仍在争论。主流观点认为，它可能源于一个古老的斯拉夫语人名“Barděj”或“Barduj”，意为“巴尔德的定居地”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但这座城市真正的生命线，并非源于贵族封邑，而是<strong>商业</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>13世纪中期</strong>，德意志的移民——主要是来自西里西亚的矿工和商人——受匈牙利国王邀请，来此开拓。他们发现，这里正处于一条连接匈牙利王国与波兰的古老盐铁贸易路线上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，一个以贸易站为核心的小定居点迅速成长。地势略高的河岸台地，为它提供了天然防御。最初的规划就显现出务实：一个宽阔的、便于集结商队与举行市集的长方形广场，以及周边整齐划一的街区网格。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1320年</strong>是一个关键转折。国王<strong>查理·罗伯特</strong>授予它“自由皇家城市”的特权。这意味着它可以自行制定法律、征收税款，并拥有至关重要的<strong>举办年度市集的权利</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是这份特权，像一把钥匙，为巴尔代约夫打开了通往财富与繁荣的大门，将其推向了欧洲中世纪晚期商贸网络的中心舞台。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "巴尔代约夫的历史印记，镌刻在石头与羊皮纸上，讲述着贸易、信仰与战争的交响曲。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道深刻印记，是 <strong>“汉萨同盟的东方前哨”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "获得市集特权后，巴尔代约夫迅速融入了横跨北欧的汉萨同盟贸易网络。它成为羊毛、布匹、蜂蜜、蜡和葡萄酒的重要中转站。本地富商建造起宏伟的宅邸，其山墙紧邻广场，底层是商铺，上层是华丽的居住空间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种繁荣的顶峰，体现在<strong>市政厅</strong>的建造上。始于<strong>1505年</strong>的这座晚期哥特式杰作，不仅是行政中心，更是财富的象征。它的拱廊曾经摆满货摊，二楼巨大的议事厅墙上，绘有复杂的纹章与寓言画，彰显着市民阶层的自信与权力。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“从但泽运来的普鲁士羊毛，在这里换成匈牙利的葡萄酒和皮革。我们的广场，就是一张铺开的欧洲地图。”——19世纪当地编年史对黄金时代的追述。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二道印记，是 <strong>“信仰的壁垒与熔炉”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城市的防御体系不仅是军事工程，也是其独立性的宣言。<strong>14至15世纪</strong>建造的<strong>双层城墙</strong>和<strong>11座棱堡</strong>，至今保存完好。它们成功抵御了胡斯派教徒的围攻，守护了城内的多元信仰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "天主教始终占据主导，宏伟的<strong>圣吉尔吉斯教堂</strong>自15世纪起就是城市地标。但与之并存的，是强大的<strong>犹太社区</strong>。早在<strong>18世纪</strong>，他们就在城墙外建立了自己的街区、犹太会堂和著名的<strong>犹太浴场</strong>。这里成为了意第绪文化在东欧的一个重要中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三道印记，是 <strong>“衰败与重生”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>16世纪</strong>后，主要贸易路线改变，加上频发的瘟疫和火灾，巴尔代约夫的商业地位逐渐衰落。它仿佛进入了休眠，但也正因如此，其完整的中世纪肌理未被后来的大规模改建所破坏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>19世纪</strong>，一次意外的“发现”赋予了它新的生命。附近的矿泉被证实具有疗愈功效，<strong>巴尔代约夫温泉镇</strong>由此建立。这座中世纪老城，从商贸中心转型为疗养胜地，以一种宁静的方式迎来了它的“第二次生命”。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "巴尔代约夫的传奇，与两位人物的名字紧密相连：一位是文艺复兴巨匠，另一位则是当地的“医疗先知”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "首先，必须提及的是<strong>阿尔布雷希特·丢勒</strong>。这位德国文艺复兴大师虽未长居于此，但他的艺术却与这座城市结下不解之缘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>15世纪末至16世纪初</strong>，正值巴尔代约夫的商业巅峰。富裕的市民和宗教团体热衷于用艺术装饰教堂和宅邸。当时，丢勒的木刻版画和铜版画作品风靡整个中欧，成为各地画家临摹的“范本”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "圣吉尔吉斯教堂内<strong>11件极珍贵的晚期哥特式祭坛画</strong>（创作于<strong>1460-1520年间</strong>），就深受丢勒风格的影响。尤其是主祭坛上栩栩如生的人物刻画、对细节的执着以及对空间透视的运用，都能看到丢勒艺术的影子。可以说，是巴尔代约夫商人的财富，通过订购艺术品，将最前沿的文艺复兴气息引入了这座边陲小城，而丢勒的艺术灵魂，则借此得以在此回荡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位更接地气、更具本地色彩的传奇人物，是<strong>约翰·安德烈亚斯·西尔瓦西乌斯</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他并非王公贵族，而是一位<strong>医生</strong>。在<strong>17世纪</strong>，医学仍与神秘学纠缠不清的时代，西尔瓦西乌斯却凭借敏锐的观察力，成为了巴尔代约夫乃至整个上匈牙利地区的医学先驱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他最为人称道的贡献，在于对 <strong>“巴尔代约夫热”</strong> 的研究。这是一种当时在该地区周期性爆发的致命瘟疫。西尔瓦西乌斯没有将其简单归咎于天谴或瘴气，而是通过详细的病例记录和流行病学调查，大胆提出了<strong>人与人之间接触传染</strong>的可能性，并倡导隔离措施。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“当疾病在一个家庭中出现时，健康者应即刻远离，即便对方是至亲。痛苦在于分离，但生存的希望正源于此。”——西尔瓦西乌斯在其手稿中的记录。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他撰写了大量医学论文，并用拉丁文和当地语言向民众普及卫生知识。他的故居可能已湮没在历史中，但他的务实精神和人文关怀，却为这座城市注入了另一种“疗愈”的基因——这种基因，与后来温泉疗养地的兴盛，形成了跨越时空的奇妙呼应。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在巴尔代约夫，传奇既是丢勒那样高悬于祭坛的艺术星光，也是西尔瓦西乌斯这样行走于街巷、悬壶济世的朴素身影。两者共同构成了这座城市厚重的人文层理。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在巴尔代约夫，最动人的传说并非关于骑士或公主，而是围绕着<strong>城市广场中央那尊独特的罗兰雕像</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在中欧许多昔日享有市场特权的城市，罗兰（查理大帝麾下英勇的骑士）雕像象征着司法独立与商业公平。但巴尔代约夫的“罗兰”与众不同——它并非一位威风凛凛的持剑武士。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说在<strong>16世纪</strong>，城市议会决定建造一尊雕像。一位当地石匠承接了这项工作。就在雕刻期间，他的爱子不幸染上重病，高烧不退，奄奄一息。石匠悲痛欲绝，却无力支付昂贵的医药费。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一天夜里，他梦到一位周身散发着泉水清香的老人对他说：“用你雕刻的手，赋予石头以怜悯，而非武力。”石匠醒来后若有所悟。他没有按照传统雕刻持剑的罗兰，而是塑造了一个<strong>身着市民服装、一手持权杖（象征城市权利）、另一手却微微伸出，仿佛在安抚或给予的形象</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "雕像落成那天，奇迹发生了。石匠儿子的高热竟神奇地褪去。人们纷纷传言，是雕像仁慈的姿态带来了庇佑。更巧合的是，不久后，城市附近具有疗效的矿泉被正式“发现”。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "于是，代代相传的故事说：巴尔代约夫的罗兰，不是战争的守护神，而是<strong>健康与商业诚信的双重庇护者</strong>。他伸出的手，指引人们发现了疗愈的泉水，也象征着这座城市对公平交易的承诺。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说如此深入人心，以至于后来当<strong>巴尔代约夫温泉镇</strong>发展起来，人们依然认为，是广场上那位姿态独特的“罗兰”，在冥冥中为这座城市指明了从贸易枢纽到疗愈圣地的转型之路。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在巴尔代约夫卵石铺就的广场上，你触碰的不仅是光滑的石面，而是层层叠叠的时间。这里没有布拉格的喧嚣，也没有维也纳的华丽，它提供的是一种<strong>沉浸式的中世纪体验</strong>。每一栋颜色柔和的山墙住宅，都是一本未完全打开的家谱；每一段完整的城墙，都是一页关于自治与防御的史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的历史价值，正在于这种 <strong>“停滞的完整”</strong> 。它像一个被精心保存的“时间胶囊”，封存了汉萨同盟时代一个东欧商贸城市的全部生活样本：市民的骄傲、商人的精明、工匠的虔诚，以及不同信仰社群间脆弱的共生。从西尔瓦西乌斯的医学手稿到丢勒影响下的祭坛画，你会发现，即便在“边缘”，对知识、艺术和美好生活的追求也从未停止。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂巴尔代约夫，便是读懂一座城市如何在历史的转折中优雅转身——从喧嚣的商路枢纽变为沉思的遗产宝库，再借由大地馈赠的泉水，获得宁静而绵长的第二次生命。它提醒我们，历史不只是王侯的功绩，更是普通街巷中流淌的日常、智慧与坚韧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/spania-dolina" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    什
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">什帕尼亚多利纳</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Špania Dolina</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vychylovka-forest-railway-museum" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维希洛夫卡（露天博物馆）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vychylovka</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/spis-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯皮什城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Spiš Castle</p>
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
