import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃斯泰尔戈姆历史溯源｜匈牙利王权之源的千年故事与传奇',
  description: '探索匈牙利王国诞生地埃斯泰尔戈姆的千年传奇。从圣伊什特万加冕到塞切尼改革，走进大教堂的砖石记忆，触摸马扎尔民族的精神原乡。',
}

export default function EsztergomBasilicaHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '埃斯泰尔戈姆大教堂', href: '/attractions/esztergom-basilica-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`埃斯泰尔戈姆大教堂・Esztergom Basilica・匈牙利・科马罗姆-埃斯特戈姆州埃斯泰尔戈姆市`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在多瑙河壮丽的河弯处，一座白色大理石巨构静默耸立，俯瞰着脚下奔流的河水与对岸的斯洛伐克。这里不是布达佩斯，而是<strong>埃斯泰尔戈姆</strong>——匈牙利王国真正的摇篮。千年前，马扎尔部落在此完成从游牧到立国的关键一跃，皈依基督教，加冕了首位国王。其后千年，它历经辉煌、战火与重生，其核心圣殿的尺度与命运，几乎与这个民族的国运同频共振。抛开游玩攻略，走进埃斯泰尔戈姆的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`埃斯泰尔戈姆大教堂`} />
                <InfoRow label="英文名称" value={`Esztergom Basilica`} />
                <InfoRow label="正式名称" value={`Esztergom Basilica`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`科马罗姆-埃斯特戈姆州埃斯泰尔戈姆市`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃斯泰尔戈姆的故事，始于多瑙河的一道天然屏障。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这片战略高地的人类活动痕迹可追溯至古罗马时期，但它的 Magyar（马扎尔）时代，则始于公元十世纪。彼时，刚刚在多瑙河流域定居的匈牙利游牧部落七位首领中，<strong>盖佐大公</strong>（<strong>Géza</strong>）脱颖而出。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他敏锐地看中了这座扼守多瑙河大河湾、易守难攻的山丘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "约<strong>972年</strong>，盖佐将统治中心迁至于此，建立了城堡与宫殿。埃斯泰尔戈姆，由此成为匈牙利大公国的第一个真正意义上的“首都”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于其名字“Esztergom”的由来，学界众说纷纭。一种主流观点认为，它源于斯拉夫语“Strěgom”，意为“要塞”或“城堡”，这与它最初作为军事与权力中心的定位完美契合。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，盖佐的雄心不止于军事。他意识到，若要在这片欧洲腹地长治久安，必须融入基督教世界。他邀请西方传教士，并让儿子<strong>沃伊克</strong>（Vajk）受洗，取教名<strong>伊什特万</strong>（István）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是这一决定，奠定了埃斯泰尔戈姆不可取代的<strong>精神原乡</strong>地位。它从一个部落堡垒，转变为一个新生基督教国家的圣座所在。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当伊什特万于<strong>1000年</strong>或<strong>1001年</strong>在此加冕为匈牙利第一位国王时，埃斯泰尔戈姆便永久镌刻进了这个国家的建国神话之中。它不仅是政治首都，更成为了匈牙利天主教会的总舵。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃斯泰尔戈姆的历史，是一部以教堂为中心的兴衰史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一幕是<strong>建国与奠基</strong>。圣伊什特万一世加冕后，立即着手在这权力的核心之地建造与之匹配的信仰丰碑。他下令修建了一座规模宏大的宗座圣殿。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座最初的教堂于<strong>1038年</strong>伊什特万逝世当年建成，成为匈牙利基督教化的核心象征。随后的世纪里，它不断扩建、装饰，成为中世纪欧洲最辉煌的大主教座堂之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史的第二幕充满了<strong>毁灭与尘土</strong>。十六世纪，奥斯曼帝国如飓风般席卷匈牙利。<strong>1543年</strong>，土耳其军队攻陷埃斯泰尔戈姆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "宏伟的大教堂未能幸免，在战火中严重损毁，最终被废弃。此后一百五十年间，城市沦陷，大主教流亡，这座“王权之丘”沦为边境要塞，昔日的荣光仿佛被多瑙河水彻底冲刷殆尽。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到十八世纪末，随着哈布斯堡王朝将土耳其人逐出匈牙利，复兴的火种才被重新点燃。但真正让大教堂从图纸走向现实的，是一个充满戏剧性的<strong>国家工程</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1820年</strong>，一场大火意外烧毁了山顶残存的旧宫殿。这场灾难，反而成了重建的契机。两年后，<strong>1822年</strong>，大主教捐出巨资，在举国瞩目下，新教堂的奠基仪式隆重举行。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“这座教堂的基石，亦是这个民族信仰与民族认同的基石。”——一位当代编年史作者如此记录奠基时的公众情绪。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "工程浩大，历时近半个世纪。期间经历了设计变更、资金短缺、政治动荡，甚至<strong>1848年革命</strong>的炮火。但它已然成为一项民族精神的工程，凝聚着匈牙利人重拾历史尊严的渴望。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最终，在<strong>1869年</strong>，这座当时全国最大、世界前列的新古典主义教堂正式祝圣。它没有完全复刻中世纪原貌，而是以巨大的穹顶、华丽的科林斯柱廊，宣告着一个民族在近代的复兴与自信。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天，当你步入教堂地下室，仍能看到一道幸存的<strong>红色大理石墙基</strong>。那是千年以前，圣伊什特万最初建造的教堂遗迹。新旧之间，沉默的砖石完成了跨越八百年的对话。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃斯泰尔戈姆的传奇，不仅由君王书写，更被一位“最伟大的匈牙利人”深刻塑造。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他叫<strong>塞切尼·伊什特万伯爵</strong>（<strong>Gróf Széchenyi István</strong>，<strong>1791-1860</strong>）。虽然出生于维也纳，但其家族根系深植于匈牙利，他本人更被誉为“匈牙利改革时代的领航员”与现代化之父。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "塞切尼与埃斯泰尔戈姆的羁绊，始于血脉，终于毕生的文化复兴理想。他的父亲曾任埃斯泰尔戈姆大教堂的圣职，而这座城市的衰落与潜在复兴，始终牵动着他的心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "十九世纪初，当埃斯泰尔戈姆大教堂重建计划提上日程时，塞切尼看到了远超宗教意义的象征价值。他认为，重建这座民族的“精神首都”，是唤醒匈牙利民族历史意识、凝聚国家认同的关键之举。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他不仅是慷慨的捐助者，更是工程最有力的舆论推动者和文化诠释者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1832年</strong>，塞切尼在《信用》（Hitel）一书中写道：" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“一个民族若遗忘了自己的圣地，便如同失去了灵魂的航船。埃斯泰尔戈姆的石头，是我们历史的字母，必须被重新拼读。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他利用自己的巨大影响力，游说贵族、筹集资金，并主张教堂设计应兼具历史尊严与现代雄伟，以匹配一个觉醒中的民族。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，塞切尼的传奇远不止于此。他的一生如同匈牙利十九世纪的缩影：满怀启蒙理想，推动架设<strong>链子桥</strong>、开发多瑙河航运、建立匈牙利科学院，却最终在<strong>1848年革命</strong>后的政治幻灭与家族精神疾病阴影中，选择在维也纳的一家疗养院结束了自己的生命。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的悲剧性结局，为他与埃斯泰尔戈姆的联系增添了一抹深沉的色彩。他毕生推动的复兴，在他去世前数年，已随着大教堂穹顶的逐渐合拢而变为现实。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如今，当你仰望教堂主殿旁的小礼拜堂内，那幅由十九世纪大师<strong>格雷戈尔·乔科</strong>绘制的巨幅壁画《圣母加冕》时，或许会想到塞切尼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "画中庄严神圣的氛围，正是他所憧憬的、融合了信仰与民族自豪的匈牙利精神图景。他虽未亲眼见到<strong>1869年</strong>最终的祝圣盛典，但这座建筑的每一块砖石，都回荡着他未竟的理想与一个时代激越的心跳。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位不得不提的人物，是<strong>雅诺什·沃伊达</strong>（<strong>János Vajda</strong>，<strong>1827-1897</strong>），匈牙利浪漫主义诗人。他并非政要，却用诗句捕捉了这座城市的灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他曾长期居住在埃斯泰尔戈姆，多瑙河的景色与历史的厚重感浸透了他的诗篇。在一首名为《在埃斯泰尔戈姆山上》的诗中，他写道：" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“古老的石块在低语，/ 讲述着已被遗忘的世纪，/ 而多瑙河，永恒的见证者，/ 在它们脚下默默流淌。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "沃伊达的诗，为埃斯泰尔戈姆的砖石赋予了文学的温度，让历史的回响在普通旅者心中也能激起涟漪。他是这座城市的歌者，将君王与改革家的宏大叙事，化为了每个人都能感知的风景与哀愁。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "围绕这座圣山与巨构，民间自然滋生了无数传说，为冰冷的大理石注入了温暖的灵性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中最广为流传的，是关于大教堂内<strong>圣母加冕图</strong>的传说。这幅画并非原作，而是根据一幅在奥斯曼占领时期奇迹般保存下来的古老圣像绘制。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传，当年土耳其士兵攻入旧教堂，想要破坏或劫掠所有基督教圣物。当他们逼近这幅珍贵的圣母像时，画中的圣母玛利亚竟然流下了真实的眼泪。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "土耳其士兵见状大惊，认为是真主显灵警示，非但不敢损毁，反而恭敬地退去。这幅圣像因此得以秘密保存，并在和平年代重回教堂，成为信徒心中具有神迹的庇护象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则与教堂的<strong>建造过程</strong>本身有关。如此庞大的工程，在十九世纪的技术条件下堪称奇迹，工人们时常面临高空坠落的危险。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说称，在一次穹顶施工中，一名年轻的石匠失足从数十米高的脚手架跌落。下方的工友惊恐万分，以为必死无疑。然而，当他坠地时，身下的一堆沙土奇迹般地缓冲了冲击，他竟只受了轻伤。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "工人们纷纷相信，这是守护埃斯泰尔戈姆的<strong>圣伊什特万</strong>在庇佑着这座献给他的教堂。从此，工地上立起了一个小小的圣伊什特万像，工人们每日开工前都会祈祷，此后的工程中也再未发生致命的坠落事故。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "还有一则关于“<strong>隐形僧侣</strong>”的传说。有人说，在教堂最安静的清晨或日暮时分，偶尔能听到若有若无的格里高利圣咏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那声音仿佛来自墙壁深处，据说是中世纪那些在被毁教堂废墟下祈祷、最终殉道的修士们，他们的灵魂仍在守护着这片圣地，并用永恒的歌声为之祝圣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，无论关乎神迹、庇佑还是忠魂，都反映了当地人对这座建筑超越物理层面的情感依附。它不再只是一座教堂，而是承载了集体记忆、信仰与希望的活的精神容器。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客穿过巨大的科林斯柱廊，踏入欧洲现存第四大的教堂空间时，所感受的远不止宗教的肃穆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里回响着匈牙利王国诞生的第一声钟鸣，镌刻着从游牧到文明的转型阵痛，也铭记着异族统治的百年创伤与近代复兴的倔强雄心。埃斯泰尔戈姆大教堂，本身就是一部用石头写就的匈牙利民族史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它小众，因为它将聚光灯从热闹的布达佩斯移开，投向了国家真正诞生的原点。它深沉，因为它的每一级台阶都踏着历史的年轮。读懂埃斯泰尔戈姆，便是读懂了匈牙利这个中欧民族何以成为今日的模样——其坚韧、其虔诚、其对自身文化根源近乎执拗的守护。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "站在教堂前的观景平台，俯瞰多瑙河对岸的斯洛伐克小镇<strong>斯图罗沃</strong>（Štúrovo），昔日同一国度，今日隔河相望。这景象无言地诉说着中欧大地复杂的历史变迁。而埃斯泰尔戈姆大教堂，始终如一座永恒的坐标，锚定着匈牙利人的精神世界。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，历史不是教科书上的章节，而是可以触摸的砖石、可以仰望的穹顶、可以聆听的风声。它邀请每一位来访者，进行一场与千年时光的深度对话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、宝藏观景点全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kaposvar-new-art-nouveau-center" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡波什堡（多莫斯山丘包围的南特兰斯丹努比亚中心）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kaposvár</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/mohacs-hungary" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莫哈奇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mohács</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gyor-hungary-baroque-city-guide" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    久
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">久尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Győr</p>
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
