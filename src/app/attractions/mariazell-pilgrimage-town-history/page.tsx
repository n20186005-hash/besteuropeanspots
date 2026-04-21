import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '玛丽亚采尔历史溯源｜奥地利的圣母之心与千年朝圣传奇',
  description: '走进奥地利腹地的信仰心脏玛丽亚采尔。揭秘其850年奇迹起源、哈布斯堡皇室的虔诚、拿破仑的铁蹄与茨威格的乡愁。一段雕刻在阿尔卑斯山中的灵性史诗。',
}

export default function MariazellPilgrimageTownHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '奥地利', href: '/destinations/europe' },
            { label: '施泰尔马克州', href: '/destinations/europe' },
            { label: '玛丽亚采尔', href: '/attractions/mariazell-pilgrimage-town-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`玛丽亚采尔・Mariazell・奥地利・施泰尔马克州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在奥地利苍翠的阿尔卑斯山谷深处，有一座小镇，它并非帝国都城，也非贸易枢纽，却被尊为整个中欧的“信仰心脏”。每年，百万朝圣者的脚步会踏过蜿蜒山路，只为抵达这里——玛丽亚采尔。它的历史，是一部由木雕圣母像、皇室誓言、战争创伤与平民希望共同写就的灵性编年史。这里是奥地利的圣母朝圣山城，一个用850年时光将传说锻造成现实的地方。抛开游玩攻略，走进玛丽亚采尔的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`玛丽亚采尔`} />
                <InfoRow label="英文名称" value={`Mariazell`} />
                <InfoRow label="正式名称" value={`Mariazell`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`施泰尔马克州`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事始于<strong>1157年</strong>。那是一个信仰驱动开拓的时代。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "施泰尔马克的领主邀请本笃会修士，深入当时还是蛮荒林地的山谷传教。修士<strong>海因里希</strong>奉命而来，他在林中建起一间简陋的隐修小室。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "按照修道院长的指示，他随身携带了一尊小型椴木圣母雕像。这尊雕像，将成为一切传奇的起点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“Zell”在古德语中意为“小室”或“修道单元”。于是，“<strong>Mariazell</strong>”——“玛丽亚的小室”——这个注定神圣的名字诞生了。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "起初，它只是一个服务于当地伐木工与农民的偏远祈祷所。然而，就在小室建成后不久，一个关于奇迹的传说迅速在山民间口耳相传。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "传说，修士海因里希在林中遇到一块巨大的岩石，挡住了去路。他向怀中的圣母像祈祷，岩石便如黄油般自动分开，为他让出了道路。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个“岩石奇迹”的故事，像野火一样蔓延。人们开始相信，这尊朴素的木雕圣母拥有非凡的力量。最初的朝圣者——那些寻求慰藉与治愈的山民——踏上了通往林间小室的道路。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一个以信仰为基石的小镇，就这样在奇迹的叙事中悄然萌芽。它最初的用途如此纯粹：一个精神的避难所，一个希望的象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从一间孤零零的“小室”，到汇聚人潮的圣地，命运的转折已然埋下伏笔。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "玛丽亚采尔的历史，并非平缓的溪流，而是与中欧大陆的每一次脉动深深共振。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个决定性时刻在<strong>1370年</strong>到来。教皇<strong>乌尔班五世</strong>正式授予此地“全大赦”特权。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这意味着，前来朝圣的信徒能获得罪孽的完全赦免。一纸教皇诏书，将玛丽亚采尔推上了欧洲顶级朝圣地的神坛。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "朝圣者从波西米亚、匈牙利、波兰乃至更远的地方汹涌而来。小镇不再只是区域中心，它成了哈布斯堡广阔领土内，凝聚多元民族信仰的共同符号。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>17世纪</strong>，在反宗教改革的浪潮中，玛丽亚采尔经历了巴洛克化的洗礼。原有的哥特式教堂被包裹在宏伟的巴洛克外观之下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1660年</strong>，著名的西立面与双塔开始建造。这不仅是建筑的升级，更是一次精心的政治与宗教宣言：彰显天主教在战胜新教“异端”后的荣耀与力量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，真正的试炼在<strong>拿破仑战争</strong>期间降临。<strong>1805年</strong>，法国军队洗劫了小镇，教堂珍宝被掠夺一空。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更具毁灭性的是，<strong>1809年</strong>，拿破仑的士兵试图将那座被视为核心圣物的<strong>木雕圣母像</strong>强行运走。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "据当地编年史记载，当士兵抬起圣母像时，雕像突然变得“沉重如山”，根本无法移动。惊恐的士兵只得放弃，圣物得以奇迹般保全。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个“不可移动的圣母”传说，极大增强了民众的精神韧性。战争创伤与神迹叙事交织，让玛丽亚采尔在苦难中更深地植根于人们的集体记忆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "进入20世纪，它的角色再次微妙转变。两次世界大战后，作为少数未遭严重破坏的圣地，它自然而然地成为奥地利国家身份与战后疗伤的精神寄托。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每一块砖石，每一幅壁画，都不仅是宗教艺术品，更是帝国兴衰、战争苦难与民族重生的沉默见证者。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "玛丽亚采尔的朝圣者名册，宛如一部缩微的欧洲王侯将相史。但与其罗列一串皇室姓名，不如聚焦一位与它情感羁绊极深的“灵魂朝圣者”——作家<strong>斯蒂芬·茨威格</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "茨威格并非本地人，他出生在维也纳，成名于世界。然而，玛丽亚采尔却在他生命的叙事中，扮演了一个温柔而伤感的背景板。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在他的不朽回忆录《<strong>昨日的世界</strong>》里，茨威格用充满乡愁的笔触描绘了这座城市：" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“在奥地利，有一种信仰的温暖，它最纯粹地体现在玛丽亚采尔……即使是社会主义者，在面临人生重大抉择或困境时，也会悄悄地去那里点上一支蜡烛。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "对茨威格这一代奥地利犹太人而言，玛丽亚采尔象征着旧日奥地利那种包容、温和、充满艺术与人文气息的天主教文化。这是一种超越了纯粹教义的精神家园认同。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他常常在夏季避居附近的塞默灵山区，玛丽亚采尔是他散步与思考时常去的方向。教堂里摇曳的烛光、农民虔诚的侧影、山中宁静的氛围，都契合了他对“和谐欧洲”的理想化想象。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，这座象征安宁的城市，也见证了他世界的崩塌。<strong>1934年</strong>，奥地利内战爆发，法西斯阴影笼罩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "茨威格在文字中痛苦地意识到，那个他熟悉的、玛丽亚采尔所代表的“昨日世界”，正在 violently 逝去。他于<strong>1942年</strong>在巴西绝望自尽，而彼时，他挚爱的奥地利正深陷纳粹统治，通往玛丽亚采尔的朝圣之路早已中断。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位不得不提的“建造者”是<strong>卡尔六世</strong>皇帝。<strong>1717年</strong>，在成功抵御奥斯曼帝国、赢得贝尔格莱德战役后，他认为是圣母庇佑了胜利。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "为还愿，他启动了玛丽亚采尔教堂史上最奢华的一次扩建。他捐赠了巨大的银质主祭坛，并邀请当时最顶尖的巴洛克大师参与装饰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的女儿，<strong>玛丽亚·特蕾莎</strong>女皇，同样是一位虔诚的捐助者。她赠送的镶嵌宝石的“<strong>奇迹圣母</strong>”礼服，至今仍在重要节日为木雕像穿戴。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些皇室成员不仅是赞助者，他们本身就是最显赫的朝圣者。他们的足迹，将玛丽亚采尔与哈布斯堡王朝的命运牢牢绑定，使它从民间圣地升格为“帝国圣所”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "茨威格的乡愁与皇帝的誓言，一暗一明，共同勾勒出这座小镇复杂而多层次的人文光谱。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了官方记载的“岩石奇迹”，玛丽亚采尔的民间记忆里，流淌着更多充满生活气息与神秘色彩的传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中最动人的之一，是关于三条溪流的“<strong>三泉传说</strong>”。朝圣者接近小镇时，会依次经过三条山涧：<strong>弗劳恩泉</strong>、<strong>约瑟夫泉</strong>和<strong>约翰尼斯泉</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "相传，一位重病的年轻骑士在梦中被指示，用这三处泉水分三次清洗患处。他拖着病体照做，在最后一次清洗后竟奇迹痊愈。从此，这三泉被分别赋予象征信仰、希望与慈善的美德，成为朝圣者净身、祈福的固定站点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于教堂本身，也有一个有趣的轶事。据说，主祭坛上永远燃烧着无数蜡烛，但空气却始终保持清新，毫无烟雾窒息之感。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "老人们会说，那是因为教堂的守护天使在默默扇动翅膀，将烟雾通过隐蔽的气窗送走，只为让信徒的祈祷能毫无阻碍地直达天庭。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "还有一个略带悲壮色彩的传说，与小镇后方的<strong> Bürgeralpe</strong> 山有关。据说，在一场古老的战争中，一支本地民兵队伍在此山中被敌军围困。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们在绝望中向玛丽亚采尔的圣母祈祷，随后整支军队竟“石化”为山间的岩石与树林，成功隐匿，逃过一劫。至今，人们仍指认某些岩石形状酷似士兵，称之为“<strong>凝固的军队</strong>”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，将自然景观（山泉、岩石、森林）与超自然信仰无缝连接。它们不是冰冷的历史，而是活着的、呼吸着的民间记忆，一代代父母讲述给孩子，让朝圣之路的每一步，都踏在故事之上。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当旅行者走入玛丽亚采尔宏伟的巴洛克教堂，目光越过摩肩接踵的游客与信徒，落在祭坛中心那尊黢黑、小巧的<strong>13世纪木雕圣母像</strong>上时，他所面对的，远不止一件宗教圣物。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那是一把打开<strong>850年精神史</strong>的钥匙。它见过修士海因里希的虔诚，承受过拿破仑士兵的觊觎，聆听过卡尔六世的感恩，也抚慰过茨威格那一代人的乡愁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "玛丽亚采尔的价值，在于它是一部“活态”的中欧心灵史。它未被完全博物馆化，信仰的火焰在这里从未熄灭。每一支新点燃的蜡烛，都是历史在当下的回响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，你能读懂哈布斯堡王朝如何用信仰凝聚多元帝国，能感受到普通人在战乱与疾病中寻求希望的永恒本能，也能瞥见一个早已消逝的、茨威格所哀悼的“昨日世界”的温柔余晖。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座阿尔卑斯山中的小镇，用它无言的石头与不灭的烛光证明：最强大的力量，往往源自最谦卑的初心——那间林中“玛丽亚的小室”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、徒步路线与最佳打卡点全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/salzburg-mozart-baroque" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨尔茨堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Salzburg</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gmunden-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格蒙登城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gmunden Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/krimml-waterfalls" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克里姆尔瀑布</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Krimml Waterfalls</p>
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
