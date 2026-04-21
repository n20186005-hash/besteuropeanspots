import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '锡古尔达历史溯源｜加乌拉河谷的中世纪堡垒、印刷术传奇与悲情公主往事',
  description: '深入拉脱维亚“瑞士”锡古尔达。探索1207年宝剑骑士团城堡的废墟，追寻印刷商兼考古学家的救国足迹，聆听加乌拉河公主的千年传说。一段被遗忘的波罗的海史诗。',
}

export default function SiguldaMedievalCastleHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '锡古尔达中世纪城堡遗迹', href: '/attractions/sigulda-medieval-castle-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`锡古尔达中世纪城堡遗迹・Sigulda Medieval Castle Ruins・拉脱维亚・锡古尔达`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在拉脱维亚，若问起最美的秋色在哪里，十有八九的当地人会指向维泽梅高地的心脏——<strong>锡古尔达</strong>。这座被誉为“拉脱维亚瑞士”的小城，其灵魂并非全然源于林间与河谷的油画景致，而是深嵌在一堵堵斑驳的残垣与古老的密林传说之中。它的故事，始于剑与火的征服，盛于书籍与思想的传播，最终凝固成一首关于爱情与牺牲的永恒悲歌。抛开游玩攻略，走进锡古尔达的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`锡古尔达中世纪城堡遗迹`} />
                <InfoRow label="英文名称" value={`Sigulda Medieval Castle Ruins`} />
                <InfoRow label="正式名称" value={`Sigulda Medieval Castle Ruins`} />
                <InfoRow label="国家" value={`拉脱维亚`} />
                <InfoRow label="城市" value={`锡古尔达`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "锡古尔达的脉搏，始于一条深邃的河谷——<strong>加乌拉河</strong>。在13世纪之前，这里是利沃尼亚部落的领地，茂密的原始森林与险峻的河谷构成了天然屏障。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转折点发生在<strong>1202年</strong>，<strong>利沃尼亚宝剑骑士团</strong>的成立。这支德意志十字军的目标很明确：征服、基督教化这片波罗的海南岸的“异教”土地。为了巩固战线，骑士团需要战略支点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，在<strong>1207年</strong>，骑士团团长 <strong>温诺·冯·罗尔巴赫</strong> 下令，在加乌拉河一处高耸的右岸台地上，建造一座木制堡垒。这便是锡古尔达城堡的雏形。它的名字“Sigulda”源自利沃尼亚语“<em>Siguldā</em>”，意为“深山”或“密林之地”，精准地描述了它的环境。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的建立绝非为了诗意栖居。它是一个军事前哨，一个权力象征，一道插在利沃尼亚腹地的冰冷铁钉。它俯瞰河谷，控制着重要的水路与陆路交通，成为骑士团向北、向东扩张，并镇压当地部族反抗的桥头堡。从第一块基石落下起，锡古尔达的命运就与冲突、统治和文化碰撞紧密相连。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座石堡在历史上第一个高光时刻，却是一场惊心动魄的防守战。<strong>1248年</strong>，利沃尼亚原住民发动了一场大规模的起义，旨在将十字军驱逐出自己的土地。起义军包围了锡古尔达城堡，战斗异常惨烈。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "古老的编年史模糊地记载：“箭矢如蝗，火光映红了加乌拉河。守军几乎耗尽了一切。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡最终未被攻破，但这场围攻深刻表明，骑士团的统治远非稳固。它是一道在不安中耸立的边界。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间快进到<strong>1562年</strong>，利沃尼亚联邦解体，锡古尔达地区随同整个维泽梅落入<strong>波兰立陶宛联邦</strong>之手。城堡迎来了它最“舒适”的时期。新主人——波兰的卡普坦尼斯家族——将其从军事堡垒改建为带有文艺复兴风格的宜居宫殿。巨大的窗户、华丽的灰泥装饰取代了狭窄的射箭孔，花园里可能第一次飘起了悠闲的花香。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，和平如加乌拉河上的晨雾般短暂。<strong>17世纪</strong>的大北方战争带来了浩劫。<strong>1703年</strong>，横扫而来的<strong>沙俄军队</strong>将这座已经历数百年风雨的城堡彻底焚毁，只留下焦黑的断壁残垣。它作为权力中心的功能，就此永远定格在了历史之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但另一座更古老的堡垒，却在传说中获得了永生。在河对岸的悬崖上，矗立着<strong>图雷达城堡</strong>。而两堡之间，隐藏着<strong>古拉要塞</strong>——一个利沃尼亚首领的据点。传说，一位被骑士团囚禁在锡古尔达的利沃尼亚公主，与她被关在图雷达的爱人，挖掘了一条穿越加乌拉河底的秘密隧道，在古拉要塞相会。历史与传说在此交织，战争与爱情隔河相望。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说中世纪给锡古尔达留下了钢铁与石块的骨骼，那么到了19世纪，一位非凡的人物则为它注入了知识与民族的灵魂。他就是 <strong>爱德华·特罗曼斯</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "特罗曼斯是一位复杂的多重身份者：印刷商、出版商、古董商、考古学家，更是拉脱维亚民族觉醒的早期推动者之一。<strong>1822年</strong>，他做出了一个影响深远的决定——买下锡古尔达庄园（包含城堡废墟）。他的目的不仅是居住，更是“挖掘”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他对城堡废墟进行了拉脱维亚历史上最早的、具有科学意识的考古发掘之一。他仔细记录发现，收集文物，试图从泥土中解读这片土地尘封的记忆。但特罗曼斯更伟大的工程在精神层面。他在庄园内建立了一间印刷厂。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "他在日记中写道：“知识是打破枷锁的唯一工具。它必须像加乌拉河水一样，流遍这片土地的每个角落。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "就在城堡的阴影下，他的印刷机隆隆作响，源源不断地生产出书籍。其中最重要的，是大量的<strong>拉脱维亚语宗教书籍</strong>。在当时，拉脱维亚农民大多目不识丁且深受德意志地主控制，这些用本民族语言印制的书籍，无疑是暗夜中的星光。它们不仅传播教义，更守护和强化了拉脱维亚的语言文化认同。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更具象征意义的是，特罗曼斯选择在<strong>锡古尔达新城堡</strong>（一座19世纪新建的贵族宅邸，现为市政厅）附近的<strong>锡古尔达圣伯特利教堂</strong>安葬。这座教堂本身，也经由他出资修缮。他最终长眠于自己深爱并倾注心血的土地上，俯瞰着古老的河谷和城堡废墟。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "通过特罗曼斯，锡古尔达完成了一次奇妙的转身：从一个殖民征服的军事据点，悄然演变为一个民族文化保存与复兴的默默摇篮。印刷机的油墨味，仿佛中和了几个世纪前的烽火硝烟。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在锡古尔达，最动人、也最悲伤的声音，或许来自加乌拉河的水流声。那被一代代人附会成一位公主的哭泣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说，在利沃尼亚时代，加乌拉河边有一位美丽的酋长公主。她与一位勇敢的年轻猎人深深相爱。然而，她的父亲为了政治联盟，强行将她许配给了一位强大的邻邦首领。婚礼前夜，绝望的公主逃到悬崖边，对着深邃的河谷呼唤爱人的名字。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "她的哭诉随风飘荡：“我的爱比河水更深，比岩石更坚。若不能与你同在，我愿化作这河谷的回音，永世萦绕。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "说罢，她纵身一跃，投入滚滚的加乌拉河。猎人赶来，只见到河面上她最后漂浮的面纱。心碎之下，他也随之跳下。据说，从此以后，在特定的夜晚，河水声会变得格外凄婉，仿佛情侣在低语；河谷中时常升起的薄雾，则是公主永不消散的面纱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则与一座泉眼有关。在通往城堡废墟的小径旁，有一处被称为“女巫泉”或“圣泉”的小水源。相传，中世纪时，一位被指控为女巫的当地妇女，在此被处决。她的鲜血渗入大地，竟涌出了一股清泉。泉水后来被认为具有治愈之力，尤其是对于眼疾。这个传说阴暗又带着一丝神秘的生命力，反映了民间信仰如何在中世纪教权的严酷背景下顽强存续。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当旅行者站在<strong>锡古尔达城堡</strong>的瞭望台上，所见或许只是蔓草丛生的巨石、空洞的窗拱，以及一幅绝美的河谷全景。但若能倾听，风穿过废墟的声音会变得无比丰饶——那是十字军铁甲的碰撞、是文艺复兴时期的宴乐笙歌、是特罗曼斯印刷机的节奏、是公主传说中永恒的叹息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "锡古尔达不仅仅是一个“风景如画”的旅游目的地。它是拉脱维亚民族历史的一个<strong>微型剖面</strong>。在这里，你能直观看到层叠的历史：前基督时代的自然崇拜、中世纪德意志的征服与殖民、波兰立陶宛的文化影响、沙俄帝国的强权破坏，以及最终，拉脱维亚本土意识的觉醒与重建。每一块城堡的石头，都是这本立体史书的一个字符。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂锡古尔达，便读懂了波罗的海地区那种特有的、在强权夹缝中求存并塑造自我身份的坚韧与悲情。它的美，从来不止于表面的湖光山色，更在于那沉重而辉煌的“前世今生”。这，才是穿越加乌拉河谷的真正意义。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、徒步路线与打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/gauja-national-park-latvia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    高
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">高亚国家公园</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gauja National Park</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kuldiga-old-town-waterfall" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    库
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">库尔迪加</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kuldīga</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rundale-palace" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    伦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">伦达莱宫（波罗的海的凡尔赛宫）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rundāle Palace</p>
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
