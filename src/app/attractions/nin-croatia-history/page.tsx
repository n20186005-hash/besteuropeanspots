import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '克罗地亚宁镇历史溯源｜失落的克罗地亚摇篮，盐与信仰交织的千年史诗',
  description: '探秘克罗地亚国家起源地宁镇。超越“世界最小大教堂”的标签，深入公元前盐田古城，追寻七位国王加冕的传奇、海盗贵族的纷争与海上圣物的神秘传说。',
}

export default function NinCroatiaHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '宁镇', href: '/attractions/nin-croatia-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`宁镇・Nin・克罗地亚・扎达尔县`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在克罗地亚达尔马提亚海岸，扎达尔与希贝尼克的光芒之下，藏着一座被时间偏爱的古镇——宁。世人因其拥有“世界上最小的大教堂”而投来一瞥，却鲜少深究，脚下这片盐碱地与石缝间，埋藏着克罗地亚民族最初的心跳。这里不仅是地理上的“克罗地亚摇篮”，更是一部用海盐书写、被亚得里亚海风翻动的石头史诗。抛开游玩攻略，走进宁镇的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`宁镇`} />
                <InfoRow label="英文名称" value={`Nin`} />
                <InfoRow label="正式名称" value={`Nin`} />
                <InfoRow label="国家" value={`克罗地亚`} />
                <InfoRow label="城市" value={`扎达尔县`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "宁镇的起源，深埋在公元前九世纪的迷雾之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最早在此定居的是伊利里亚人的利布尔尼亚部落。他们看中了这片独特的土地：一个通过两条狭长沙堤与大陆相连的小岛，易守难攻；周边广阔的浅水泻湖，在阳光下自然结晶出珍贵的海盐。盐，在古典时代等同于财富与权力。这座小岛因此成为战略与经济的双重要地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马人到来后，将其命名为 <strong>Aenona</strong>。关于这个名字的由来，语言学家们争论不休。一种浪漫的推测认为，它源于伊利里亚语，与“水”或“岛屿”相关；另一种更务实的观点则将其与拉丁语词根相连。无论源起何处，<strong>Aenona</strong> 在罗马帝国治下繁荣起来，获得了自治市的地位。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元7世纪，斯拉夫人（克罗地亚人的祖先）南下巴尔干，与残留的罗马化居民融合。城市的名字逐渐演变为 <strong>Nona</strong>，最终定格为今天的 <strong>Nin</strong>。它的命运始终与两样东西捆绑：一是赐予它财富与痛苦的<strong>盐田</strong>，二是赋予它无上荣耀与无尽纷争的<strong>政治宗教中心</strong>地位。这个名字，从此与克罗地亚国家的诞生紧紧相连。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "宁镇的历史，是克罗地亚王冠上最古老也最易碎的那颗宝石。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个无法绕开的印记，是它作为<strong>早期克罗地亚王国中心</strong>的黄金时代。公元9至11世纪，当克罗地亚民族国家雏形初现时，宁镇是其毫无争议的心脏。七位克罗地亚国王在这里的圣十字教堂（即“世界最小大教堂”）加冕。国王的权杖在这里举起，国家议会（Sabor）最早也在此召开。那段时期留下的最珍贵实物，是一尊<strong>宁镇公爵之像</strong>的祭坛屏风，上面用格拉哥里字母刻着<strong>公爵布兰尼米尔</strong>的名字和头衔，这是克罗地亚统治者首次获得教皇承认的实物证据，是国家主权的神圣宣章。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我，布兰尼米尔，蒙上帝恩典的克罗地亚公爵，兴建此教堂……” —— 刻于9世纪祭坛屏风上的铭文" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，荣耀引来觊觎。第二个深刻印记来自<strong>威尼斯共和国的征服与盐田争夺</strong>。从11世纪末开始，强大的威尼斯海上共和国将目光投向了达尔马提亚海岸，宁镇的战略位置和盐田成为首要目标。经过漫长而残酷的拉锯战，威尼斯最终在16世纪完全控制了宁镇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "威尼斯人深知盐即是白金。他们系统性扩建盐田，将宁盐销往整个亚得里亚海乃至地中海世界，带来了最后的繁荣。但这也是以牺牲宁镇的自主为代价。古老的克罗地亚政治中心，沦为了威尼斯帝国的一个经济前哨。城内的建筑风格，也深深烙上了威尼斯哥特式的印记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三个印记，镌刻在那座著名的<strong>圣十字教堂</strong>上。它建于9世纪，被誉为“世界上最小的大教堂”。这个称号充满历史讽刺与智慧：它或许从未是传统意义上主教座堂，但作为国王加冕之地，其政治与象征意义远超其物理尺寸。它的建造比例完美，按照克罗地亚古老的度量单位“一掷石之距”设计，其朝向与夏至冬至的太阳光线精确对齐。学者认为，它可能建于更古老的基督教遗址之上，是克罗地亚接受基督教并融入欧洲文明框架的<strong>石质奠基礼</strong>。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在宁镇这部史诗中，有两位人物如同双星闪耀，定义了它的两种命运：一位是缔造其辉煌的<strong>公爵</strong>，另一位是挑战其秩序的<strong>盐工</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1. 布兰尼米尔公爵：被教皇承认的“克罗地亚之星”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元9世纪，当克罗地亚部族仍在拜占庭帝国与法兰克王国之间摇摆不定时，<strong>公爵布兰尼米尔</strong> 登上了历史舞台。他的生卒年已模糊，但他的作为却异常清晰。他通过政治与军事手段，巩固了克罗地亚公国的独立，并将统治中心定于宁镇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他与罗马教廷的互动，是改变克罗地亚命运的关键。当时，克罗地亚处于东方（拜占庭）与西方（罗马）的文化与宗教影响夹缝中。布兰尼米尔做出了清晰的抉择：他邀请教皇派遣使者，并公开表示效忠圣座。作为回报，教皇<strong>约翰八世</strong>在879年的信函中，正式承认布兰尼米尔的统治地位，并称他为“亲爱的克罗地亚之子”。这一承认，在政治上为克罗地亚赢得了自主空间，在宗教上则将其牢固地纳入了拉丁基督教世界。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“致我们最亲爱的儿子布兰尼米尔……你的忠诚已广为人知。” —— 据后世史家引述的教皇约翰八世信件内容" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在宁镇圣尼古拉斯教堂（原圣母升天教堂）发现的祭坛屏风上，刻有布兰尼米尔的名字和头衔，这是上述历史最坚硬的物证。因此，布兰尼米尔不仅是宁镇的统治者，更是<strong>克罗地亚国家概念的奠基人之一</strong>。他将宁镇从一个重要的定居点，提升为克罗地亚政治与宗教的“首都”，开启了后续国王在此加冕的先河。他的传奇，让宁镇永远与“克罗地亚摇篮”的称号绑定。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>2. 马蒂亚·古贝茨：盐田上的农民王</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光快进到16世纪，宁镇已在威尼斯统治之下。盐田是财富之源，也是血泪之地。沉重的劳役和压迫，最终在1573年点燃了克罗地亚-斯洛文尼亚地区大规模的<strong>农民起义</strong>。而这场起义的核心领袖之一，正是来自宁镇地区的<strong>马蒂亚·古贝茨</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "古贝茨并非贵族，他是一位富有魅力和组织能力的农民。传说他声称自己拥有“神圣的使命”，并展现出非凡的军事才能。他领导的起义军，主要由像他一样的农奴和盐田工人组成。他们攻打贵族城堡，宣布废除封建特权，甚至计划建立一个“农民共和国”。古贝茨被拥戴为“农民王”，他的“宫廷”就设在一座被占领的城堡里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，起义最终被贵族联军残酷镇压。古贝茨被俘后，遭受了极其残忍的处决：他被戴上烧红的铁王冠，象征其“僭越”的王权，然后被分尸。他的故事，是欧洲农民抗争史上悲壮的一页。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在宁镇的语境中，古贝茨的传奇具有独特意义。它揭示了威尼斯统治时期，盐田经济辉煌背后的阴暗面——对底层劳动者的残酷剥削。他将宁镇与宏大的社会变革叙事连接起来。如今，在当地传说和民歌中，古贝茨的形象被塑造成反抗不义的悲剧英雄。他的故事提醒着世人，这座宁静古镇的盐粒中，不仅凝结着海水的结晶，也曾浸染过为自由而战的血与泪。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在宁镇，最动人的传说与大海和信仰有关，主角是一位神秘的<strong>海上圣人</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说在古老的年代，一艘来自东方的船只在地中海遭遇风暴。虔诚的船员们向圣母玛利亚祈祷，许诺若得拯救，便将船上最珍贵的圣物赠予他们靠岸后遇到的第一座圣母教堂。风暴奇迹般平息，船只随风漂流，最终在宁镇的小港湾搁浅。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "船员们上岸后，见到的第一座教堂正是宁镇的<strong>圣母升天教堂</strong>（今圣尼古拉斯教堂）。他们履行誓言，将船上守护的圣物献出。那并非寻常之物，而是一尊由<strong>圣路加</strong>亲手雕刻的<strong>黑圣母木像</strong>。圣路加作为圣史，据说曾为圣母画像，因此他雕刻的圣母像被认为具有无上的神圣性与真实的 likeness（真容）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这尊黑圣母像从此被供奉在宁镇，成为整个达尔马提亚海岸最受崇敬的圣像之一，吸引了无数朝圣者。传说她屡显神迹，尤其庇佑渔民和水手。然而，悲剧在后世降临。威尼斯统治时期，出于嫉妒或政治考量，威尼斯人强行将黑圣母像“请”到了威尼斯的一座教堂中。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们的圣母离开了，她的目光依然望着宁镇的方向。总有一天，海潮会将她带回盐田故乡。” —— 宁镇古老歌谣的片段" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管圣物已被夺走数个世纪，但这个传说至今仍在宁镇老人中口耳相传。它解释了宁镇曾经作为重要朝圣地的缘由，也将这座小城与更广阔的地中海基督教世界联系起来。传说中那份得而复失的怅惘，恰恰映射了宁镇自身的历史命运——曾拥有无上荣光，终在强权博弈中失去核心地位，只留下一个关于海上圣物的空灵念想，随着亚得里亚海的潮汐，起起落落。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日漫步宁镇，每一步都踩在历史的断层上。指尖划过圣十字教堂粗糙的石壁，触摸到的是克罗地亚国家诞生时的体温；脚下沙土中泛白的盐渍，是维系它千年兴衰的经济血脉；而远处威尼斯风格的钟楼与窗棂，则诉说着强权更迭的无奈。这里没有宏大炫目的宫殿群，它的魅力在于<strong>层叠</strong>：伊利里亚的根基、罗马的规划、克罗地亚王国的心脏、威尼斯的经济棋子……所有时代都压缩在这座微小的“岛屿城市”之中，如同一个活体的历史剖面。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂宁镇，便是读懂了克罗地亚民族坚韧的源头——如何在狭小的地理空间与强大的邻国夹缝中，凭借智慧、信仰与对盐（生存资源）的掌控，孕育并守护自己的身份。它提醒我们，一些最深刻的历史，并非总发生在恢弘的都城，也可能诞生于一座被盐田环绕的寂静古镇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/sibenik-old-town-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    希
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">希贝尼克老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sibenik Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/trako--an-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特拉科什恰恩城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trakošćan Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/nin" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    宁
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">宁</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Nin</p>
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
