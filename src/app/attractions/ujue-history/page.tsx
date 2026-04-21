import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '乌胡埃历史溯源｜山顶石头要塞的千年信仰与王权往事',
  description: '揭秘西班牙纳瓦拉山顶秘境乌胡埃：一座由牧羊人发现的圣地，如何演变为捍卫基督世界的石制堡垒，并承载着“着魔者”国王最深的虔诚与遗憾。',
}

export default function UjueHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '西班牙', href: '/destinations/europe' },
            { label: '纳瓦拉', href: '/destinations/europe' },
            { label: '乌胡埃', href: '/attractions/ujue-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`乌胡埃・Ujué・西班牙・纳瓦拉`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在纳瓦拉起伏的麦田与橄榄园尽头，一座石头村落如同战舰的船首，劈开荒原的风，永恒地锚定在海拔800米的山巅。这不是普通的村庄，而是一部以岩石书写的三幕剧：<strong>9世纪</strong>的军事前哨、<strong>11世纪</strong>的朝圣圣殿、<strong>14世纪</strong>的皇家祭坛。它的名字<strong>乌胡埃</strong>，在巴斯克语中意为“鸽子”，却生就一副鹰隼般凛冽的骨骼。抛开游玩攻略，走进乌胡埃的尘封往事，遇见属于它的信仰、王权与时光传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`乌胡埃`} />
                <InfoRow label="英文名称" value={`Ujué`} />
                <InfoRow label="正式名称" value={`Ujué`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`纳瓦拉`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "乌胡埃的诞生，始于一道神谕与一项紧迫的军事需求。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元<strong>9世纪</strong>，纳瓦拉王国正处于扩张与防御的关键时期。基督教势力与北方的科尔多瓦哈里发国在此拉锯。这片名为“中地带”的边境山区，亟需一系列瞭望哨所。传说，一位牧羊人在此山顶的岩洞中，发现了一尊神秘的圣母木雕像。消息不胫而走，被视为神圣的征兆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，一座城堡应运而生。它的选址极具战略眼光：360度的无死角视野，足以监控从埃布罗河谷而来的任何军事动向。村庄围绕着城堡生长，所有的房屋都用当地粗糙的米黄色石材砌成，紧密相连，巷道狭窄陡峭，其本身就成了防御工事的一部分。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于其名“Ujué”的由来，学界众说纷纭。最浪漫也最被当地人接受的说法，源于巴斯克语“<strong>usoa</strong>”（鸽子）。或许指代此地曾经的鸟类，或许隐喻圣母与圣灵的和平象征。然而，与这温柔名字形成讽刺对比的，是它接下来数百年充满刀光剑影的命运。它最初并非为了宁静生活而建，而是为了战争与守望。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "乌胡埃的历史，被清晰地镌刻在它那标志性的建筑——<strong>圣玛利亚皇家教堂</strong>的肌理之中。这座建筑本身就是一部石头编年史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一幕：从城堡到圣殿（11-12世纪）</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "纳瓦拉国王<strong>桑乔·拉米雷斯</strong>（<strong>1043-1094</strong>）是一位虔诚且富有远见的君主。他大力推动“再征服运动”，并积极促进通往圣地亚哥的朝圣之路。在乌胡埃，他做了一项决定性转变：将山顶的军事城堡，改建为一座供奉圣母的教堂。这标志着乌胡埃从纯粹的<strong>军事要塞</strong>，转向兼具<strong>宗教圣所</strong>的身份。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "教堂最初的罗马式风格部分（尤其是后殿），厚重、坚固，窗户狭小，依然保留着堡垒的基因。然而，它的存在吸引了大批朝圣者。一条重要的朝圣支线由此诞生，乌胡埃成为纳瓦拉王国精神版图上的重要灯塔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二幕：哥特式的加冕与献祭（14世纪）</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "乌胡埃的巅峰时刻，与一位悲剧性的国王紧密相连：<strong>卡洛斯二世</strong>（<strong>1332-1387</strong>），绰号“<strong>恶人</strong>”。尽管他在政治上的声誉复杂，但对乌胡埃的圣母却怀有近乎痴迷的虔诚。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我，纳瓦拉的卡洛斯国王，在此立誓，将我最珍贵的礼物献于乌胡埃的圣母，祈求她的庇护贯穿我的统治与我族的血脉。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他下令对教堂进行大规模扩建，增添了宏伟的哥特式中殿、复杂的回廊和坚固的城墙。这项工程与其说是宗教奉献，不如说是一项<strong>政治与心灵的双重投资</strong>。他希望将这里打造成王室的万神殿和精神的堡垒。<strong>1363年</strong>，他甚至选择在这座偏远山顶教堂，而非首都潘普洛纳，举行自己的加冕典礼，并向圣母献上纯金的王冠，其寓意不言而喻。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "乌胡埃的故事，几乎就是纳瓦拉王国<strong>卡洛斯二世</strong>国王及其母亲<strong>胡安娜</strong>王后个人虔诚史的缩影。他们让这座石头城堡，充满了人性的温度与悲剧的色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1. “恶人”国王与他的灵魂堡垒：卡洛斯二世</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "卡洛斯二世的一生充满矛盾。他周旋于法兰西与英格兰百年战争的夹缝中，权谋狡黠，树敌众多，故得“恶人”之名。然而，这位在政治上冷酷的国王，内心却有一块异常柔软的圣地——乌胡埃。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他将这里视为个人的庇护所和王室的根基。除了投入巨资建设，他更留下了感人的遗嘱：<strong>请求将自己的心脏，安放在乌胡埃圣母祭坛之下</strong>。这是一个极具象征意义的举动，意味着他将自己最终的归宿，交给了这位山顶的圣母，而非任何一座大教堂或王室陵墓。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "（据宫廷记录）国王晚年多次病重，每次危机时都会向乌胡埃的圣母发出恳求，并在康复后捐献大量财物。他的虔诚，带有一种孩子般的依赖感和契约色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，命运弄人。尽管他如此深爱此地，他的遗体最终并未完整运回。他的心脏据说被保存在教堂内一个银制圣物匣中（今已不存），而身躯葬于潘普洛纳。这份<strong>未竟的归乡之愿</strong>，为乌胡埃增添了一抹永恒的忧伤与神秘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>2. 胡安娜王后：信仰的奠基者</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "卡洛斯二世的虔诚，很大程度上继承自他的母亲——<strong>胡安娜王后</strong>。她是法兰西的公主，却将后半生的心血倾注于纳瓦拉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在卡洛斯二世年幼时，胡安娜便频繁造访乌胡埃，并主持了早期的重要修缮。她不仅是出资者，更是信仰的推动者。正是在她的影响下，乌胡埃圣母的崇拜得以系统化、王室化，为她儿子日后狂热的奉献奠定了基础。在教堂中，我们仍能看到与她相关的纹章与捐献记录。这对母子，用两代人的时间，将一座边境堡垒，浇铸成了一个王朝的精神图腾。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>一个被医学揭示的轶事</strong>：现代历史学家和医学家分析，卡洛斯二世及其家族成员（包括其子“高贵者”卡洛斯三世）可能患有某种遗传性疾病，导致其面容独特、身体虚弱且情绪不稳。这或许能部分解释他那种<strong>狂热、偏执而又充满不安的虔诚</strong>——在动荡的政局与痛苦的躯体中，山顶那座坚不可摧的石头圣所，成了他唯一能抓住的永恒与慰藉。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "乌胡埃的灵魂，始于一个所有村民都耳熟能详的传说。这个故事没有确切的年份，只有“很久以前”的开头，但它定义了这座城的本质。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "传说，一位牧羊人在山顶追随一只洁白鸽子的指引，发现了一个岩洞。洞中，一尊古老的圣母木雕像静静矗立，散发着柔和的光芒。牧羊人试图将圣像请到更便利的山下村庄，但每次移走，圣像都会奇迹般地回到山洞。人们终于明白：“圣母选择了这座山巅。”于是，他们围绕神迹，建起了最初的礼拜堂，而后是城堡，最终是整座村庄。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个“<strong>不愿离开的圣母</strong>”传说，解释了乌胡埃为何存在于如此不便的险峻之地。它也赋予了当地圣母像“<strong>乌胡埃圣母</strong>”独特的称号与权威。她是自主的，是有选择权的守护神。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个流传的传说是关于“<strong>哭泣的圣母</strong>”。在纳瓦拉遭遇重大灾难或战乱前，有信徒声称目睹圣像眼中流出泪珠。这个传说将乌胡埃与整个王国的命运紧紧捆绑，它不再只是一地的庇护所，而是关乎国运的晴雨表和守护者。每年<strong>9月</strong>的“圣像下降”节（Bajada de la Virgen），壮汉们抬着沉重的圣母像沿着古老陡峭的步道巡游，便是对那个古老发现传说的年度重演，也是人与神之间千年契约的鲜活更新。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客喘着粗气爬完最后一段坡道，站在乌胡埃教堂前的广场上时，他看到的不仅仅是一个风景如画的“西班牙最美村庄”。他站在一个<strong>多重时空的交汇点</strong>上：脚下是摩尔人骑兵可能驰骋过的原野；身后是罗马式石墙上十字军战士留下的磨损痕迹；抬头是卡洛斯二世献上的哥特式穹顶，承载着一个国王未安息的心愿；空气中，似乎还回荡着中世纪朝圣者的颂歌与牧羊人传说中的鸽哨。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂乌胡埃，便是读懂一种欧洲边缘地带的生存智慧：如何将<strong>军事的防御</strong>、<strong>信仰的寄托</strong>与<strong>王权的象征</strong>，熔铸进同一堆岩石之中。它不曾是繁华大都，却以极致的地理和执着的信仰，雕刻出了一段不可复制的深邃历史。在这里，每一块石头都不是沉默的，它们诉说着恐惧、虔诚、野心与慰藉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？如何抵达这座天空之城、探秘教堂迷宫、品尝当地美酒，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/girona-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    赫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">赫罗纳古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Girona</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/alquezar-huesca-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔克萨尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alquézar</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/merida-roman-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅里达罗马遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mérida Roman Ruins</p>
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
