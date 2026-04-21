import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '维尔茨堡主教宫历史溯源｜巴洛克瑰宝的前世今生与权力游戏',
  description: '探寻世界遗产维尔茨堡主教宫的权力史诗。从辉煌建造到战火重生，揭开选帝侯主教们的野心、天才建筑师的奇迹，以及一段被烈火考验的欧洲记忆。',
}

export default function WuerzburgResidenceHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '德国', href: '/destinations/europe' },
            { label: '维尔茨堡', href: '/destinations/europe' },
            { label: '维尔茨堡主教宫', href: '/attractions/wuerzburg-residence-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`维尔茨堡主教宫・Würzburg Residence・德国・维尔茨堡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在美因河畔，有一座宫殿，它并非王室居所，却比许多皇宫更为奢华壮丽。它是天主教世界在德意志土地上的一场权力宣言，是世俗君主与教会权威合二为一的巴洛克丰碑。这里的故事，关乎一位“建筑界魔术师”的毕生杰作，一场险些将其化为灰烬的灭顶之灾，以及一群市民拯救文明的火种行动。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "抛开游玩攻略，走进维尔茨堡主教宫的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`维尔茨堡主教宫`} />
                <InfoRow label="英文名称" value={`Würzburg Residence`} />
                <InfoRow label="正式名称" value={`Würzburg Residence`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`维尔茨堡`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "维尔茨堡的故事，始于一场神圣的授权。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元741年，圣卜尼法斯在此设立主教区。从此，这座河畔城市便与主教权力紧密捆绑。历经中世纪，维尔茨堡主教不仅掌管灵魂，更获得了作为法兰克尼亚公爵的世俗统治权，成为一股强大的政教合一力量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "主教们最初居住在山顶的<strong>玛利恩堡要塞</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但到了18世纪初，俯瞰全城的古堡已无法满足新时代主宰们的欲望。启蒙时代的理性之光与巴洛克艺术的感官盛宴交织，他们需要一座位于平原的、全新的、足以彰显无上权威与时代精神的宫殿。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，在<strong>1719年</strong>，雄心勃勃的<strong>约翰·菲利普·弗朗茨·冯·申博恩</strong>主教做出了决定。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他下令在城墙之外的空旷之地，建造一座前所未有的豪华宫殿（Residenz）。这个名字本身就意味深长——它并非“城堡”，而是“居所”，一种世俗君主的、充满宫廷文化气息的称谓。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这标志着主教的自我认知，已从教堂的守护者，彻底转变为一位光芒四射的“亲王”。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "宫殿的建造本身，就是这座城市最深刻的历史印记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它并非缓慢生长而成，而是在两代申博恩主教的强力推动下，于<strong>1720年至1744年</strong>间集中建成的“速成奇迹”。这背后，是维尔茨堡采邑主教国鼎盛国力的炫耀。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一块印记，刻在内部的墙壁上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1753年</strong>，未来的普鲁士国王<strong>腓特烈大帝</strong>到访。这位以简朴和理性著称的君主，在参观完刚刚竣工的辉煌内部后，也不禁对陪同的<strong>亚当·弗里德里希·冯·塞恩斯海姆</strong>主教发出惊叹：“阁下，这不是宫殿，这简直是一座配得上一位国王的宫殿！”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这句评价，完美印证了建造者们的初衷。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二块印记，则是20世纪那场惨烈的伤疤与重生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1945年3月16日</strong>，二战末期的轰炸将维尔茨堡老城近90%的区域夷为平地。主教宫这座巴洛克明珠也未能幸免。燃烧弹引发的大火持续了三天三夜。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“楼梯大厅的穹顶塌陷了，那些无价的提埃波罗壁画化为漫天飘散带着火星的灰烬。人们以为，一切都结束了。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，奇迹始于灾难发生的瞬间。当时的宫殿管理员和一些市民，冒着生命危险冲入火海。他们并非抢救金银财宝，而是奋力将宫殿内大量可移动的艺术品、家具、挂毯和藏书抢运出来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是这种超越时代的文明自觉，为重建保留了珍贵的实物依据。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战后，重建工作如同一次虔诚的考古。工匠们利用数万张战前照片、图纸和抢救出的碎片，开始了长达数十年的“拼图”。<strong>1987年</strong>，浴火重生的维尔茨堡主教宫被列入世界遗产名录。它不仅是艺术珍品，更是人类修复自身文明能力的纪念碑。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座宫殿的灵魂，与两位天才的名字永远相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一位，是它的总建筑师——<strong>巴尔塔萨·诺伊曼</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他并非出身名门，最初只是一个炮兵军官和土地测量员。但凭借惊人的数学天赋和空间想象力，他被主教选中，承担起这个看似不可能的任务。诺伊曼是一个真正的工程学与美学的跨界奇才。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的代表作，便是那座被誉为“世界最美楼梯间”的杰作。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在没有现代钢筋混凝土的时代，他设计了一个跨度近30米、没有任何中间支撑的桶形拱顶。这个拱顶轻盈地悬浮在空中，为<strong>乔瓦尼·巴蒂斯塔·提埃波罗</strong>的壁画提供了完美的天幕。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "诺伊曼的智慧无处不在：隐藏在花园墙壁中的排水系统，复杂精妙的机械舞台装置，都证明他是一位“巴洛克时代的达芬奇”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他与意大利壁画大师提埃波罗的合作，更是艺术史上的佳话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1750年</strong>，提埃波罗受邀带领儿子们从威尼斯前来，为楼梯大厅和帝王厅创作壁画。这位当时欧洲酬金最高的画家，用了近三年时间，在诺伊曼建筑的“第三维度”里，描绘了天堂的幻景与大洲的寓言。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "提埃波罗在信中写道：“我从未在如此巨大而明亮的空间里工作过，光线从四面八方涌来，仿佛建筑本身在呼吸。诺伊曼先生给了我一个天空，而我要还给世界一个宇宙。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二位与宫殿紧密相连的名人，是<strong>拿破仑·波拿巴</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1806年</strong>，在横扫德意志、重组莱茵邦联的途中，拿破仑与妻子约瑟芬曾下榻于此。此时，维尔茨堡的选帝侯时代已在帝国解体浪潮中终结，宫殿成了新统治者的行宫。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "拿破仑居住的房间里，曾发生一段趣闻。他对房间内一面巨大的威尼斯镜子颇为欣赏，半开玩笑地对随从表示想将其运回巴黎。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地官员听闻后紧张不已，却不知如何应对。最终，或许是行程匆忙，拿破仑并未真的带走这面镜子，但它“曾被拿破仑觊觎”的故事却流传了下来，为房间增添了一抹帝国政治的微妙色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的到访，象征着一个旧时代的彻底落幕，以及这座宫殿从权力中心向历史博物馆转变的开始。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于这座宫殿，最脍炙人口的传说与它的核心——那座伟大的楼梯穹顶壁画有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在提埃波罗创作的巨幅壁画《四大洲》中，代表欧洲的雍容女神位于中央，而非洲、美洲和亚洲的人物环绕四周。其中，描绘亚洲的部分里，有一个坐在大象背上的中国清朝官员形象，格外引人注目。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地传说讲述道：提埃波罗从未到过中国，他凭借商人口中的描述和有限的瓷器图画进行创作。当他完成这个中国人物后，总觉得缺少神韵。一天夜里，他梦见一位东方的智者，智者一言不发，只是用手指轻轻点了点画中人的眼睛。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "次日醒来，提埃波罗恍然领悟，他为那位官员添上了深邃而略带微笑的眼神。自此，画中的东方人物仿佛有了灵魂，与欧洲女神的目光形成了跨越大陆的 silent dialogue（无声对话）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说，不仅增添了艺术的浪漫色彩，也隐喻了18世纪欧洲对遥远东方既陌生又向往的复杂情结。游客们至今仍会抬头寻找那个传说中的眼神，感受巴洛克时代世界想象的辽阔。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当你站在维尔茨堡主教宫恢弘的楼梯大厅，仰望提埃波罗笔下那片永不落幕的天空时，你看到的远不止是巴洛克艺术。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你看到的，是一个微小城邦凭借信仰与世俗权力达到的巅峰；是一位天才建筑师挑战物理法则的勇气；是战火中普通人对文明火种的捍卫；更是一段欧洲历史从分裂教权到启蒙运动，再到近代民族国家变迁的浓缩史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它并非凡尔赛，却拥有同等的气魄；它曾近乎毁灭，却因人的意志而重生。这使得它的每一寸石膏装饰，每一缕金色线条，都承载着比单纯的美学更沉重的分量——那是生存、记忆与身份的重量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂这座宫殿，便读懂了法兰克尼亚的心脏，读懂了德意志历史中一段独特而辉煌的教会诸侯篇章。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/lauenburg-an-der-elbe" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    劳
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">劳恩堡（易北河畔）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lauenburg an der Elbe</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/melsungen" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅尔松根</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Melsungen</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/wewelsburg" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    韦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">韦韦尔斯堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Wewelsburg</p>
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
