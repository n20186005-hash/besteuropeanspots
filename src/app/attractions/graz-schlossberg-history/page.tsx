import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '格拉茨城堡山历史溯源｜从铁壁堡垒到城市心脏的千年传奇',
  description: '探秘格拉茨的“心脏”与“铁冠”。城堡山千年史诗：从抵御土耳其的铁壁，到拿破仑也拆不掉的钟楼，一座山丘见证中欧风云与人文光辉。',
}

export default function GrazSchlossbergHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '奥地利', href: '/destinations/europe' },
            { label: '格拉茨', href: '/destinations/europe' },
            { label: '格拉茨城堡山', href: '/attractions/graz-schlossberg-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`格拉茨城堡山・Schlossberg・奥地利・格拉茨`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在奥地利东南，穆尔河畔，一座孤山拔地而起，它并非天然造就的景观，而是一部以岩石为书页、书写了近千年的立体史书。这里是<strong>格拉茨的城堡山（Schlossberg）</strong>，城市的起源之根，也是其永恒的精神象征。它头顶着“从未被武力攻克”的军事传奇光环，身披着从阴暗地牢到浪漫花园的岁月织锦。抛开游玩攻略，走进城堡山的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`格拉茨城堡山`} />
                <InfoRow label="英文名称" value={`Schlossberg`} />
                <InfoRow label="正式名称" value={`Schlossberg`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`格拉茨`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "格拉茨的故事，始于这座高耸473米的岩石山丘。它的名字“<strong>格拉茨（Graz）</strong>”本身，便源自于斯拉夫语“<strong>Gradec</strong>”，意为“小城堡”或“防御工事”。这直接点明了城堡山与这座城市共生共荣的起点：<strong>先有堡垒，后有城池</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早在公元9世纪左右，斯拉夫人便在此处的山丘上建立了一个简易的防御据点，用以监视穆尔河谷这条重要的贸易与军事通道。而关于城堡山有明确记载的历史，则始于<strong>1128年</strong>。当时，这片区域由<strong>特拉ungau的马克伯爵</strong>统治，山顶的木石结构堡垒已成为地区权力的中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "随着<strong>巴奔堡家族</strong>的利奥波德公爵于<strong>1122年</strong>获得施蒂里亚，城堡山的战略地位急速攀升。坚固的堡垒庇护着山脚下逐渐形成的集市与定居点，商人、工匠在此聚集，一座城市围绕这座“守护之山”慢慢生长出来。城堡山不仅是军事要塞，更是行政与司法权力的所在地，是这片土地名副其实的“心脏”。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡山近千年的历史，是一部浓缩的中欧攻防史。它最耀眼的标签，无疑是“<strong>永不陷落的堡垒</strong>”。这一荣誉，在奥斯曼土耳其帝国大军压境的年代，被锤炼得熠熠生辉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1529年和1532年</strong>，土耳其军队两次兵临格拉茨城下，烽火映红了穆尔河水。然而，凭借城堡山近乎垂直的陡峭崖壁、层层加固的城墙与守军的顽强，入侵者始终望山兴叹，未能踏上山顶一步。格拉茨因此成为阻挡奥斯曼帝国向中欧腹地进军的关键盾牌之一。这段传奇，为城堡山赢得了不朽的声名，也深刻塑造了格拉茨人坚韧的城市性格。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，真正的“陷落”并非来自外敌的刀剑，而是源于一纸条约。<strong>1809年</strong>，拿破仑的军队在经历激战后占领了格拉茨。根据随后签订的《申布伦和约》，胜利的法国人命令将城堡山上的宏伟堡垒彻底拆毁，以防奥地利人再次将其用作抵抗的据点。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们必须摧毁这座山上的所有防御工事，一砖一石都不留。它是奥地利人精神的堡垒，必须被抹去。” —— 据传出自拿破仑麾下将领的命令。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "就在这全面拆毁的命令中，一个奇迹般的“例外”发生了。格拉茨的市民们集资支付了巨额赎金，恳求保留山顶的<strong>钟楼（Uhrturm）</strong>和<strong>钟塔（Glockenturm）</strong>。他们的请求被应允了。于是，我们今天看到的钟楼，这座格拉茨无可争议的城市标志，之所以能屹立至今，全赖于当年市民们共同的珍视与赎买。这不是军事的胜利，而是人文情感对战争暴力的胜利。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "堡垒虽被拆，灵魂却未散。<strong>19世纪中叶</strong>，城堡山被改造为一座风景如画的<strong>公共公园</strong>。曾经的炮台遗址变成了观景平台，幽暗的地牢通道向好奇的市民开放，军事要塞彻底转型为市民的休闲花园与文化记忆的载体。这一转变，恰好印证了欧洲从纷争到和平的时代脉络。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡山的岩石间，不仅回荡着战争的号角，也萦绕着科学与艺术的低语。其中，与这座山丘羁绊最深的一位人物，当属天文学家<strong>约翰内斯·开普勒（Johannes Kepler）</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1594年</strong>，年仅23岁的开普勒接受邀请，来到格拉茨的路德宗学校担任数学教师。正是在格拉茨的六年时间里，他住在离城堡山不远的老城区，这座雄浑的山丘日日夜夜映入他的眼帘。教学之余，他沉迷于天文观测与思考。<strong>1596年</strong>，他在格拉茨出版了第一部重要著作《宇宙的奥秘》，勇敢地支持哥白尼的日心说，并试图用几何模型解释行星轨道的间距。这部著作为他赢得了声誉，也奠定了他未来伟大发现的基础。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“在格拉茨，从我的小窗望去，城堡山沉稳的轮廓总让我感到一种奇异的宁静。宇宙的秩序，或许就如这山峦一般，看似随意，实则蕴含着神圣的几何。” —— 后人根据开普勒书信精神演绎的感怀。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，格拉茨并非永远的避风港。随着反宗教改革运动加剧，新教徒受到严重排挤。<strong>1600年</strong>，开普勒被迫离开了格拉茨。城堡山见证了他学术生涯的起飞，也目睹了他作为异见者的无奈离去。如今，在格拉茨大学和城市的多处地方，人们以他的名字命名讲堂、设立纪念碑，纪念这位曾在此仰望星空的天才。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与城堡山相关的传奇人物，年代更为久远，她是一位女性统治者——<strong>施蒂里亚的艾格尼丝女公爵（Agnese von Andechs-Meranien）</strong>。她是<strong>巴奔堡家族的利奥波德六世</strong>的妻子。在丈夫频繁外出征战时，艾格尼丝常以格拉茨城堡山官邸为行政中心，治理施蒂里亚公国。她以智慧和仁慈著称，热衷于资助教会与慈善事业，在民间留下了许多关于她公正裁决、庇护弱小的传说。在城堡山的中世纪鼎盛时期，她的身影无疑是山顶宫廷中一抹亮色，象征着权力与慈悲的结合。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于城堡山，流传最广、最动人的传说，无疑与那座赎买回来的<strong>钟楼</strong>有关。钟楼上的大钟，被格拉茨人亲切地称为“<strong> Liesl</strong>”（莉塞尔）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说，这口大钟拥有神奇的力量。在古老的过去，每当有敌人逼近或城市面临重大危机时，即使无人敲击，莉塞尔也会自动鸣响，向市民发出预警。它的钟声洪亮而清澈，能涤荡人们心中的恐惧，唤起保卫家园的勇气。在土耳其围攻期间，它的钟声更是被视作不屈的象征。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“听啊，是莉塞尔在歌唱！它还在，山就在，城就在！” —— 格拉茨民间流传的关于钟楼钟声的古老谚语。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则与城堡山复杂的<strong>地下隧道系统</strong>有关。这些隧道本是军事工程的一部分，四通八达，深不可测。民间盛传，在隧道的最深处，沉睡着一支“<strong>三骑士</strong>”组成的幽灵卫队。他们身着古老的巴奔堡盔甲，只有在格拉茨遭遇灭顶之灾的至暗时刻才会醒来，骑上幽灵战马，从山腹中冲出，击退任何来犯之敌。这个传说，无疑是市民将城堡山“永不陷落”的神话，投射到了超自然的守护神身上，为这座石山增添了最后一抹神秘而英勇的色彩。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客搭乘现代电梯或沿着蜿蜒小径登上城堡山，所见的已是和平的景象：市民在花园散步，恋人在钟楼下拥吻，艺术家在古墙边写生。然而，每一缕风中，仿佛仍能听见历史的回响——土耳其攻城炮的轰鸣、拿破仑工兵的凿击、开普勒沉思的踱步、以及市民集资赎买钟楼时的恳切呼声。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡山早已超越了其物理存在。它是一部石质的城市传记，从军事强权的冰冷象征，转变为凝聚社区认同的文化图腾。它告诉我们，一座城市的真正力量，不仅在于它有多么难以攻克，更在于它的居民有多么珍视共同的历史记忆与身份标志。读懂城堡山，就读懂了格拉茨坚韧、智慧且充满温情的灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？如何登上城堡山、参观钟楼与地下堡垒遗址、最佳拍摄机位与周边美食，请点击 [格拉茨城堡山游玩全攻略] 相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/feldkirch-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    费
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">费尔德基希老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Feldkirch Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/hohenwerfen-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    霍
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">霍亨维尔芬城堡（飞鹰堡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hohenwerfen Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/st-wolfgang-white-horse-inn-pilgrimage-church" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣沃尔夫冈（白马酒店与绝美朝圣教堂）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">St. Wolfgang im Salzkammergut</p>
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
