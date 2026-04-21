import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '许迈格城堡历史溯源｜匈牙利“牧羊人王座”的前世今生与主教传奇',
  description: '穿越七个世纪的匈牙利守护者。从蒙古铁蹄到奥斯曼烽烟，探寻许迈格城堡的石墙内，一位大主教如何用信仰与火炮，守护一个时代的灵魂。',
}

export default function SumegCastleHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '匈牙利', href: '/destinations/europe' },
            { label: '许迈格', href: '/destinations/europe' },
            { label: '许迈格城堡', href: '/attractions/sumeg-castle-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`许迈格城堡・Sümeg Castle・匈牙利・许迈格`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在匈牙利西部的巴拉顿湖北岸，一座孤山拔地而起，山顶盘踞的巨石要塞，并非为醉心湖光的游客所建。它是<strong>“牧羊人王座”</strong>，是中世纪匈牙利王权在地方投射的冰冷铁拳，更是天主教会在狂飙时代最后的坚实堡垒。它的历史，与一位鲜为人知的大主教区守护者紧密相连，共同谱写了一曲信仰、权力与生存的铿锵史诗。抛开游玩攻略，走进许迈格城堡的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`许迈格城堡`} />
                <InfoRow label="英文名称" value={`Sümeg Castle`} />
                <InfoRow label="正式名称" value={`Sümeg Castle`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`许迈格`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "许迈格小镇的名字，很可能源于古斯拉夫语中的“守护者”或“卫士”。这片土地的历史可以追溯到史前时代，但它的命运真正被改写，是在匈牙利第一位国王<strong>圣伊什特万</strong>于11世纪建立国家之后。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "王国需要巩固对新征服领土的控制。这片森林密布、丘陵起伏的区域，被划为皇家森林猎场，归王室直接管辖。而那座海拔270米的石灰岩山丘，因其扼守东西通道、俯瞰广阔平原的战略位置，很早就进入了统治者的视野。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的基石，大约在<strong>13世纪中期</strong>奠定。最初的建筑并非我们今天看到的庞大复合体，很可能是一座简朴的<strong>石制看守塔</strong>，用于监视皇家林地，并作为地区权力的象征。它的诞生，无关浪漫，纯粹出于实用主义的控制与防御。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，一场来自东方的风暴，永久改变了匈牙利，也提升了这座堡垒的等级。<strong>1241-1242年</strong>，蒙古铁骑如闪电般席卷匈牙利平原，王国军队在莫希战役中惨败，几乎覆灭。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场灾难让匈牙利人刻骨铭心。国王贝拉四世在流亡归来后，发起了一场轰轰烈烈的<strong>“城堡建设运动”</strong>。他深知，没有遍布全国的石制要塞，王国将在下一次入侵面前不堪一击。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是在这样的国策背景下，许迈格山丘上的看守塔，开始了它的第一次重要蜕变。它被系统性地扩建，城墙加厚，塔楼增高，从一个前哨站，升级为真正的<strong>皇家城堡</strong>。它不再是森林的看守，而是平原的卫士，默默注视着东方，提防着可能再度出现的尘烟。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "许迈格城堡的轮廓，在数次历史的剧震中被锻造得愈发清晰。它不仅是地理上的制高点，更是权力天平上的一枚重要砝码。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>中世纪盛世的堡垒</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "14-15世纪，随着匈牙利安茹王朝和后来的匈雅提王朝的统治，王国进入国力强盛的“黄金时代”。许迈格城堡作为皇家财产，其军事与行政功能不断完善。它成为维斯普雷姆主教区重要的世俗支撑点之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这一时期，城堡内部修建了宫殿、礼拜堂和复杂的地下储水系统。它不再是单纯的军事堡垒，而是一个<strong>自给自足的小型权力中心</strong>。国王的官员在此管理土地、征收税赋、执行法律。石墙上每日升降的王室旗帜，象征着山脚下广袤土地的所有权与秩序。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>奥斯曼风暴中的磐石</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>16世纪</strong>，匈牙利的历史被染上血色。1526年莫哈奇战役，国王战死，王国分裂，中部被奥斯曼帝国占领。匈牙利陷入与奥斯曼人长达近两百年的拉锯战。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "许迈格，因其位置处于抵抗前线（“军事边区”）的相对后方，反而成为了一个<strong>关键的后勤基地、避难所和反击支点</strong>。城堡的防御被紧急强化，加筑了抵御火炮的厚重棱堡。它庇护了从南方逃难而来的贵族、教士和百姓，仓库里囤积着粮食与军火。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更重要的是，它成为天主教反抗奥斯曼扩张及国内新教传播的一个精神象征。在动荡的年代，这座坚固的石堡，给了人们一种看得见、摸得着的安全感。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>从要塞到废墟的转折</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥斯曼的威胁在17世纪末逐渐消退，但城堡的军事价值并未立刻消失。在<strong>18世纪初</strong>，它卷入了另一场重大冲突——拉科齐自由战争。反对哈布斯堡王朝统治的起义军曾一度占领城堡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，战争的最后，给城堡带来致命一击的，并非敌人，而是主人。<strong>1713年</strong>，为了防止城堡再次被叛军利用，哈布斯堡王朝军队奉命将其<strong>付之一炬</strong>。大火烧了数日，木制结构化为灰烬，石墙被烈焰灼烤得开裂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "自此，这座荣耀了四个多世纪的巨人，陷入长达两百年的漫长沉睡，成为山顶上一座威严而悲怆的废墟，唯有风雨与传说相伴。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "若要为许迈格城堡寻找一位灵魂人物，那非<strong>塔西·西尔维斯特</strong>主教莫属。他并非声名响彻欧洲的君主或将领，却是这座城堡历史篇章中，最浓墨重彩的执笔人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>“火炮主教”的崛起</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>塔西·西尔维斯特</strong>于16世纪中叶出生在许迈格附近的贵族家庭。他聪颖好学，投身教会，在反宗教改革的风潮中崭露头角。1600年，他被任命为<strong>维斯普雷姆教区主教</strong>。这是一个充满挑战的职位：教区部分领土被奥斯曼人占据，新教思想在贵族中传播，而教廷的财产与权威亟待恢复与巩固。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "西尔维斯特是一位典型的“战斗主教”。他深谙在乱世中，神权需要剑与盾来捍卫。他将主教座堂从沦陷区迁至安全的肖普朗，同时，将目光投向了许迈格城堡——这座他童年时代就仰望的岩石要塞。当时城堡虽属王室，但已部分划归主教区使用，且年久失修。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>打造不落的神殿</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "西尔维斯特主教启动了一项雄心勃勃的工程：将许迈格城堡彻底重建、现代化，并将其打造为<strong>主教区的终极避难所和权力堡垒</strong>。他投入巨资，聘请最好的军事工程师。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "工程的核心是强化火炮防御。他主持修建了低矮而厚重的<strong>五角形棱堡</strong>，这是当时最先进的意大利式防御工事，能有效抵御和反弹炮弹。他在城墙上开辟了密集的炮眼和火枪射击孔。城堡内部，他重建了宫殿、宏伟的巴洛克风格小礼拜堂、深达40米的饮水井以及庞大的仓库。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在一封保存至今的拉丁文信件中，西尔维斯特写道：“…在此动荡之世，上帝的居所亦需铜墙铁壁。我将许迈格视为诺亚的方舟，当洪水（指奥斯曼军队或异端）来袭时，它必须能承载信仰的薪火，岿然不动。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在他的经营下，城堡储存了足以维持数年的粮食、腌肉和酒，军火库中堆满了火枪、火药和超过20门各种口径的重炮。许迈格城堡从一个中世纪要塞，蜕变为一座令人望而生畏的<strong>早期现代炮兵堡垒</strong>，“火炮主教”的绰号不胫而走。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>传奇轶事与永恒羁绊</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于西尔维斯特，流传最广的轶事与他坚定的天主教立场有关。据说，他雇佣了一批瑞士雇佣军担任城堡卫队。后来发现这些士兵私下信奉新教，他毫不犹豫地将其全部解雇，宁愿用可靠性更高的本地天主教徒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1605年</strong>，他的远见得到了检验。 Bocskai叛军（得到奥斯曼支持）兵临城下，围攻许迈格城堡。然而，面对西尔维斯特打造的完善防御和猛烈炮火，叛军久攻不克，最终只得悻悻退去。这场胜利极大地巩固了他的声望和城堡“不可攻克”的威名。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "塔西·西尔维斯特主教于1613年去世，葬于他钟爱的维斯普雷姆主教座堂。但他一生的心血，都凝结在许迈格山的巨石之中。他赋予城堡的防御体系是如此有效，以至于在他死后一个多世纪，城堡依然发挥着重要作用。直到那场1713年的大火，才终止了它的使命。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如今，当你漫步在城堡废墟中，触摸那些厚重棱堡的墙砖，仿佛仍能感受到那位“火炮主教”的意志——在信仰与理性、祈祷与火炮之间，为守护一个即将逝去的世界，所做出的最坚韧的努力。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "与许多古堡一样，许迈格的巨石也萦绕着神秘的传说，其中最动人的，莫过于 <strong>“哨兵之石”</strong> 的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说在遥远的过去，城堡有一位年轻的哨兵。他忠于职守，日复一日地站在最高的塔楼上，眺望远方。他爱上了一位山脚下村庄里的美丽姑娘。两人约定，每当夕阳西下，哨兵换岗之后，便在城堡山腰的一棵老橡树下相会。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，战争突然爆发。敌军围城，形势危急，所有士兵被命令不得离开岗位半步。哨兵焦急万分，却无法下山告知爱人。他只能站在塔楼，朝着村庄的方向日夜凝望。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "围城持续了数月。解围之后，哨兵第一时间冲向那棵老橡树，但姑娘已不知所踪。有人说她在等待中忧郁成疾，已经离世；有人说她以为哨兵战死，远走他乡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "心碎的哨兵没有回到军营。他失魂落魄地走到城堡外一处突出的悬崖边，那是他往日眺望村庄最清晰的地方。他就那样站着，望着，任凭风吹雨打，再也不曾移动。渐渐地，他的身体与脚下的岩石融为一体，化作了一尊人形的石柱。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地老人说，在月光清冷的夜晚，如果你靠近城堡东侧的那片崖壁，屏息静听，风穿过石缝的声音，仿佛还夹杂着一声声若有若无的叹息。而那尊“哨兵之石”，至今仍以永恒的姿势，守望着山脚下的家园与逝去的爱情。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说代代相传，为冰冷的军事堡垒注入了一丝人性的温度。它解释了悬崖上某一处天然石柱的由来，更隐喻了这座城堡数百年来无数无名守卫者的共同命运：他们的一生，都与孤独的守望、突如其来的离别和坚韧的职责紧密相连。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "许迈格城堡不是一座童话里的浪漫城堡。它的美，是粗粝的、雄浑的、带着硝烟与执念的。它矗立在那里，本身就是一部石刻的史书，记载着匈牙利民族从中世纪建国，历经蒙古、奥斯曼的劫难，在分裂与抗争中求存的坎坷历程。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "攀登它的过程，如同翻阅这部史书。脚下的每一步，都可能踏在<strong>塔西·西尔维斯特</strong>主教亲自督建的棱堡上，或是中世纪骑士巡逻的甬道中。站在制高点，俯瞰巴拉顿湖区如画的风景时，你才会真切体会到，当年守卫者眼中的景象：这绝美的山河，正是需要用生命去捍卫的家园。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有太多皇室爱情故事，却有一个地方主教将信仰转化为石墙与火炮的惊人决心。它让我们看到，历史不仅仅是国王和将军的舞台，更是无数像西尔维斯特这样的地方精英，用他们的智慧、资源与固执，在具体的地理坐标上，塑造出的真实轨迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂许迈格，便是读懂了匈牙利历史中，那种深植于骨髓的<strong>危机感与韧性</strong>。它提醒我们，欧洲的深处，藏着许多这样沉默的见证者。它们的故事或许不够广为人知，却同样深刻，同样能触动探寻历史肌理的心灵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、鹰术表演打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/old-town-of-sopron" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    肖
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">肖普朗老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Old Town of Sopron</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/s-rospatak-renaissance-castle-and-college" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沙罗什保陶克</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sárospatak</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/zirc-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    齐
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">齐尔茨修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Zirc Abbey</p>
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
