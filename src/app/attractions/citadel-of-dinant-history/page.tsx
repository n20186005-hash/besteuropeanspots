import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '迪南历史溯源｜默兹河畔铜器之城的战争创伤、萨克斯之魂与重生传奇',
  description: '深入比利时迪南，聆听默兹河畔悬崖要塞的低语。从血洗之灾到萨克斯管诞生地，探索一座被战争反复雕刻，却在音乐与坚韧中获得永生的小城传奇。',
}

export default function CitadelOfDinantHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '比利时', href: '/destinations/europe' },
            { label: '迪南', href: '/destinations/europe' },
            { label: '迪南要塞', href: '/attractions/citadel-of-dinant-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`迪南要塞・Citadel of Dinant・比利时・迪南`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在比利时瓦隆尼亚的褶皱深处，<strong>迪南</strong>如同一枚被时光钉在默兹河岩壁上的勋章。它并非典型的风情小镇，其灵魂由两种截然相反的力量铸就：<strong>极致的创造与极致的毁灭</strong>。这里是萨克斯管的诞生地，乐声婉转；也见证了欧洲史上最残酷的围城与屠杀，伤痕累累。高踞百米的<strong>迪南要塞</strong>，并非一座炫耀武力的城堡，而是一位沉默的创伤记录者。抛开游玩攻略，走进迪南的尘封往事，遇见属于它的毁灭、创造与重生传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`迪南要塞`} />
                <InfoRow label="英文名称" value={`Citadel of Dinant`} />
                <InfoRow label="正式名称" value={`Citadel of Dinant`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`迪南`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "迪南的名字，源于凯尔特神话中的水神 <strong>“迪维娜”（Divona）</strong>。这条丰沛的<strong>默兹河</strong>，是它一切故事的起点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早在古罗马时期，这里就是一个重要的渡口和驿站。河流提供了交通，而河畔拔地而起、近乎垂直的<strong>石灰岩悬崖</strong>，则提供了天然屏障。公元7世纪左右，一个定居点在此稳固形成。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但真正让迪南登上历史舞台的，并非战略，而是手艺。中世纪，这里发现了独特的<strong>铜矿与锌矿</strong>资源。迪南的能工巧匠们发展出精湛的<strong>Dinanderie</strong>（迪南铜器工艺），将黄铜打造成精美的圣物箱、烛台和水盆。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“来自迪南的铜器，其光泽与工艺，堪比黄金。”——一位14世纪的法国商人游记" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "整个欧洲的教堂和宫廷都以拥有迪南铜器为荣。这座小镇因此富甲一方，赢得了 <strong>“铜器之城”</strong> 的别称。财富吸引了觊觎，而那道守护它的悬崖，也即将迎来血腥的宿命。最初的防御工事在11世纪便已出现，但当时它守护的，更多是作坊里的炉火与匠人的美梦，而非单纯的军事野心。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "迪南的历史，是一部在悬崖上反复书写又反复被血与火擦除的编年史。三个时刻，如同三道深刻的刀痕，定义了它的容颜。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道痕，是<strong>1421年</strong>的天灾。那一年，巨大的岩体从要塞下方的山壁崩塌，坠入默兹河，摧毁了大部分建在河岸上的铜器作坊与教堂。这场灾难并未击垮迪南，却预示了其命运的多舛——自然与人为的毁灭将接踵而至。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二道痕，也是最深的一道，来自<strong>1466年</strong>。勃艮第公爵 <strong>“大胆的查理”</strong> ，为了惩罚迪南对其仇敌列日主教的忠诚支持，率领大军兵临城下。城破之后，查理实施了令人发指的惩罚：他将<strong>八百名市民</strong>捆绑手脚，从悬崖顶端抛入默兹河中溺毙，并下令将城市几乎夷为平地。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“河水为之染红，悲鸣数日不绝。”——当代编年史家对1466年屠杀的记述" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场“迪南的血洗”彻底摧毁了其铜器产业的根基，大部分工匠流亡他乡，辉煌的中世纪手工业中心就此陨落。现在的要塞主体，正是在这场灾难后，由重建者巩固加强的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三道痕，刻在<strong>1914年8月23日</strong>。第一次世界大战初期，德军因遭遇不明抵抗（后来证实可能仅是法军小股部队或误会），在迪南展开了疯狂的报复。<strong>674名平民</strong>，包括妇女和儿童，被随意处决。连接新城与老城的<strong>“硫磺桥”</strong> 畔，成为了屠场。今天的要塞博物馆，用大量照片和遗物，冷静而沉重地诉说着这场近代悲剧。要塞本身，也曾在此时被德军占领并用作指挥部。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每一次毁灭，迪南都从灰烬与血泊中重新站起。悬崖上的堡垒，就是这部循环史诗最坚硬的书脊。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说悬崖要塞代表着迪南的“刚”，那么，从这座城市流淌出的一个音符，则代表了它的“柔”。这个音符，就是<strong>萨克斯管</strong>。而将刚柔汇聚于一身的，是天才与悲情交织的发明家——<strong>阿道夫·萨克斯</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1814年</strong>，阿道夫·萨克斯出生在迪南一个普通的乐器工匠家庭。他的父亲夏尔·约瑟夫·萨克斯本身就是一位卓有成就的乐器制造师。童年的阿道夫，是在父亲作坊里的刨花、铜管与调试音准的敲击声中度过的。迪南的铜器加工传统，早已融入这座城市的血脉，也为萨克斯提供了最初始的材料感知与工艺熏陶。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，他的青年时代恰逢迪南的又一次低谷。在经历法国大革命后的动荡与战火后，城市奄奄一息。<strong>1851年</strong>，早已移居巴黎并崭露头角的阿道夫，做出了一个惊世之举：他发明了一种全新的乐器，融合了木管的指法与铜管的音色，声音如同“覆着天鹅绒的金属”。这就是以他姓氏命名的——<strong>萨克斯管</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我渴望创造一种能最接近人声情感的乐器，它该是理性与感性的结合体。”——阿道夫·萨克斯" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但天才的道路布满荆棘。萨克斯管在巴黎音乐界引发了轰动，也招致了疯狂的嫉妒与排挤。竞争对手们联合起来，用恶意的诉讼、剽窃指控甚至人身威胁来攻击他。萨克斯赢得了几乎所有官司，却耗尽了财富与健康。他的晚年穷困潦倒，在专利纠纷与商业破产中郁郁而终。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "迪南从未忘记这位儿子。如今，城中的桥梁以他命名，河岸遍布萨克斯管造型的雕塑，还有一座专门的<strong>阿道夫·萨克斯故居博物馆</strong>。但最具象征意义的，是他在<strong>1894年</strong>于巴黎去世后，最终魂归故里。他的遗体被安葬在迪南的墓地。这位一生在异乡饱受风雨的发明家，最终在默兹河畔的崖壁下找到了永恒的宁静。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "萨克斯的一生，仿佛是迪南城市命运的缩影：出身于技艺传统（铜器/乐器制造），历经毁灭性打击（城市屠杀/同行迫害），却以惊人的创造力留下不朽遗产（萨克斯管/城市精神），并在创伤后执着回归。他不仅是迪南的名人，更是这座城市精神的人格化体现。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在迪南圣母 collegiate 教堂内，供奉着一尊特殊的<strong>“黑圣母”</strong>像。与许多欧洲教堂里洁白慈祥的圣母不同，这尊木雕圣母与圣子像通体漆黑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于她的“黑”，有一个流传甚广的传说。故事要追溯到那场<strong>1466年</strong>“大胆的查理”纵火焚城的大火。凶猛的火舌吞没了教堂，圣像与建筑本应一同化为灰烬。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，当劫后余生的市民带着悲痛重返废墟，在祭坛的焦木与灰烬中，他们奇迹般地发现了这尊圣母像。她未被烧毁，却被浓烟深深地熏成了黑色。圣母的脸庞在烟炱之下依然宁静，仿佛在无言地见证并承受了子民所有的苦难。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“圣母与我们一同经历了火焰，她吸收了所有的黑暗，从而护佑了我们的灵魂。”——当地古老传说" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，“黑圣母”成为了迪南的守护神与精神图腾。她不再是遥远的、完美无瑕的天国之后，而是一位与小镇同历劫难、共担伤痛的“战友”。她的黑色，不是污损，而是勋章；是集体创伤的可见记忆，也是 resilience（韧性）的象征。每年，当地都有相关的纪念活动，人们向这位“黑色的希望”祈祷，缅怀过去，也祈求庇护。这个传说，将历史的残酷与信仰的慰藉完美融合，深深嵌入了迪南的身份认同之中。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当你乘坐缆车登上<strong>迪南要塞</strong>，俯瞰脚下蜿蜒的默兹河与色彩明丽的屋舍，你所见的并非一张宁静的明信片。你看到的，是一幅用坚韧绘成的三维历史地图。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "崖壁上的弹孔，河畔广场的纪念碑，黑色圣母的凝视，还有随风隐约可闻的、或许是一段萨克斯风试音的旋律……所有这些元素，都在低声讲述同一个故事：关于人类文明如何在其最脆弱（河畔小镇）、最珍贵（艺术创造）的形态下，承受一次又一次野蛮的打击，却又一次又一次地，从废墟中捡起铜片与木材，锻造出新的工具——有时是谋生的铜器，有时是抒情的萨克斯管，有时， simply，就是生活下去的勇气。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "迪南的魅力，正在于这种复杂的“不完美”。它不提供田园诗般的逃避，而是提供一种深沉的共情。它让我们理解，欧洲的底蕴不止于文艺复兴的华美与启蒙运动的理性，也同样深藏于这些<strong>创伤地标</strong>所承载的集体记忆与重生力量中。在这里，历史不是课本上的章节，而是脚下岩石的质感、河水的气息，以及空气中那份沉静却不屈的颤动。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂迪南，便是读懂了欧洲褶皱里，那些未被广泛言说，却至关重要的坚韧灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/villers-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维莱尔修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Villers Abbey</p>
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
              <a href="/attractions/baarle-hertog-baarle-nassau" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴尔勒-赫尔托赫与巴尔勒-拿骚（双国镇）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Baarle-Hertog / Baarle-Nassau</p>
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
