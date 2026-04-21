import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '维安登历史溯源｜卢森堡秘境古堡的前世今生与雨果传奇',
  description: '深入探索维安登城堡千年史诗：从罗马哨所到伯爵宫殿，再到雨果流亡地。揭开卢森堡“最美河谷”中，一座石头史诗的兴衰与重生。',
}

export default function ViandenCastleHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '卢森堡', href: '/destinations/europe' },
            { label: '维安登', href: '/destinations/europe' },
            { label: '维安登城堡', href: '/attractions/vianden-castle-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`维安登城堡・Vianden Castle・卢森堡・维安登`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在卢森堡东部蜿蜒的乌尔河峡谷之上，一座恢弘的石制堡垒仿佛从山岩中生长出来，俯瞰着脚下童话般的红色屋顶小镇。这不是迪士尼的布景，而是历经千年风雨、权力更迭与文学浸润的<strong>维安登城堡</strong>。它不仅是欧洲最宏伟的封建城堡之一，更是一部镌刻在石头上的编年史，见证了<strong>维安登伯爵</strong>的辉煌、拿破仑时代的没落，以及一位文学巨匠的流亡岁月。抛开游玩攻略，走进维安登的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`维安登城堡`} />
                <InfoRow label="英文名称" value={`Vianden Castle`} />
                <InfoRow label="正式名称" value={`Vianden Castle`} />
                <InfoRow label="国家" value={`卢森堡`} />
                <InfoRow label="城市" value={`维安登`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "维安登的根，深扎在罗马帝国的边疆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早在<strong>公元4世纪</strong>，罗马人便在这处俯瞰乌尔河的战略高地上，建立了一座坚固的<strong>城堡式哨所</strong>。其目的明确：守卫从兰斯通往特里尔的罗马重要军道。今天城堡地基中那些最古老、最巨大的石块，便是这段遥远历史的沉默证人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“维安登”这个名字本身，就是一部语言演变史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它源自凯尔特语词汇 “<em>vien</em>” ，意为“岩石”或“陡峭之地”。后来，法兰克人在此定居，将其演变为 “<em>Viennensis</em>” ，最终在历史长河中固化为我们今天所知的 <strong>Vianden</strong> 。名字即命运，这座城从一开始，就与它的岩石地基不可分割。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的城市雏形，围绕城堡的庇护而生长。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "中世纪早期，随着城堡的不断扩建，工匠、商人、农民开始在城堡下方的斜坡上聚集，寻求保护。到<strong>13世纪</strong>，维安登已发展成为一座拥有自治权的繁荣城镇，其命运与统治它的伯爵家族紧紧绑定。城堡不仅是军事要塞，更是权力、司法与经济的中心，牵引着整个山谷的脉搏。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "维安登城堡的轮廓，本身就是一部立体的建筑史书。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从罗马地基，到<strong>11至14世纪</strong>陆续修建的宫殿、小教堂与防御工事，它的每一次扩建都对应着<strong>维安登伯爵</strong>权势的巅峰。这个家族曾是神圣罗马帝国境内最显赫、最富有的诸侯之一，其领地一度横跨今日卢森堡、德国与法国的部分区域。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡核心的<strong>宫殿建筑群</strong>，是莱茵河以西罕见的晚期罗马式与早期哥特式风格的杰作。尤其是那座拥有华丽拱窗的大厅，不仅用于宴饮，更是伯爵行使权力的法庭。石头在这里诉说着威严。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: " “维安登伯爵的权势，仅次于国王。” —— 中世纪编年史记载" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，盛极必衰。<strong>1417年</strong>，随着最后一位男性继承人的离世，维安登伯爵的头衔与领地通过联姻，转归<strong>拿骚家族</strong>（即现今卢森堡大公家族的祖先）。城堡虽仍被使用，但其作为独立权力中心的光辉逐渐黯淡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的劫难来自近代。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>法国大革命</strong>的浪潮席卷欧洲。<strong>1795年</strong>，法国军队占领此地。新政权视城堡为“封建残余的象征”，于<strong>1798年</strong>将其作为国家财产公开拍卖。中标者将其拆解，一块砖、一片瓦、一根房梁地卖作建筑材料。短短几十年，辉煌的宫殿沦为被掏空的废墟，在风雨中飘摇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到<strong>19世纪后期</strong>，浪漫主义思潮兴起，人们重新审视历史废墟的价值。大公家族开始回购城堡残骸。而真正的重生，始于<strong>1977年</strong>：卢森堡政府从大公手中取得了城堡的所有权，并开启了一项庞大而精细的<strong>修复工程</strong>。工程严格依据历史文献与考古发现，历时数十年。我们今天看到的，已不是迪士尼式的虚构城堡，而是一次基于学术的、对历史的庄严致敬与重建。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说石头筑就了城堡的筋骨，那么一位文豪的短暂居留，则为它注入了不朽的灵魂。这位文豪就是<strong>维克多·雨果</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1871年</strong>，<strong>雨果</strong>因公开反对拿破仑三世而被迫流亡海外。在长达十九年的流亡生涯末期，他多次造访卢森堡，并深深爱上了维安登。他并非只是匆匆过客，而是曾两次在此<strong>长居</strong>，第一次在<strong>1863年</strong>，第二次则是<strong>1871年的夏天</strong>，住在乌尔河畔一间名为“金船”的简朴小旅馆里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "对雨果而言，维安登是动荡政治生涯中一处宁静的避风港，更是激发灵感的缪斯之地。他日复一日地描绘城堡的素描，用文字记录小镇生活。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“维安登有两个孪生的奇迹：它的教堂和它的客栈，一个是上帝的居所，另一个是旅行者的家园。而我，一个过客，在两个圣地都找到了慰藉。” —— 维克多·雨果书信" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但雨果与维安登的羁绊，远不止于个人情感。当他目睹心爱的城堡因长期荒废而持续崩塌时，感到了切肤之痛。他成为了城堡最早的、也是最著名的“保护倡议者”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当时，拆毁古堡废墟取石料是普遍做法。雨果利用自己的影响力，发出了振聋发聩的呼吁。他撰写文章，游说各方，极力反对拆除计划。在一封著名的公开信中，他写道：" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“<strong>不要再碰维安登城堡的一块石头！</strong>保护这些令人赞叹的废墟……它们属于国家遗产，是艺术的瑰宝，是全人类的财富。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管他当时的直接干预未能立刻阻止城堡被继续出售和拆解，但他充满激情与远见的呼声，像一粒种子埋在了土壤里。它唤醒了一种意识：这些废墟并非无用的石头堆，而是承载着民族记忆与美学价值的珍贵遗产。这为近一个世纪后城堡的全面修复，奠定了最早的思想基础。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如今，在维安登小镇的雨果故居博物馆里，参观者能看到他留下的素描、信函和那些充满力量的呼吁文字。小镇的主广场也以他命名。雨果让世界注意到了维安登，而维安登则回报他以永恒的纪念。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正如所有古老的城堡一样，维安登也不乏笼罩在迷雾中的传说。其中最著名的，是关于“<strong>无头骑士</strong>”的幽灵故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说在很久以前，城堡里有一位严厉而勇敢的骑士。他由于在一次决斗或战争中犯下了不可饶恕的错误（版本各异，有的说是背叛，有的说是误杀），受到了诅咒。惩罚并非死亡，而是永世的徘徊：他的头颅与身躯分离，必须在每个<strong>月圆之夜</strong>，骑着他那匹同样幽灵般的战马，沿着城堡阴森的地道和古老的城墙巡逻，寻找他丢失的头颅，直至永远。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地老人会说，在万籁俱寂的深夜，如果你仔细倾听峡谷的风声，有时能分辨出那不是风，而是<strong>沉闷的马蹄声</strong>和铠甲摩擦的窸窣声。那是无头骑士在履行他永恒的、无望的职责。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则与城堡地下神秘的<strong>地牢</strong>有关。据说有一条秘密通道，从城堡深处一直通往数公里外的森林。这条通道曾在战乱时期供伯爵家族秘密逃生使用。但后来入口被封死，再也无人找到。传说通道里藏有伯爵家族未能带走的<strong>宝藏</strong>，由骑士的幽灵守护着。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说或许荒诞，但它们为冰冷的石头注入了人性的温度与恐惧的想象。它们代代相传，成为维安登地方认同感的一部分，也让每一位仰望城堡暗影的访客，心头多了一丝对历史幽深之处的敬畏。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客站在修缮一新的城堡大厅，透过高大的哥特式窗户眺望翠绿的山谷与宁静的小镇时，所感受到的，远不止是“风景如画”那么简单。脚下是罗马军团踏过的地基，手中触摸的是中世纪伯爵砌筑的石墙，耳畔仿佛回响着雨果为保护废墟而疾呼的声音。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "维安登城堡是一部浓缩的欧洲史。它讲述了边境要塞的起源、封建权力的兴衰、革命浪潮的无情，以及现代社会中历史意识的觉醒与文化遗产保护的胜利。它的每一块砖石，都从“有用的建材”，变成了“无价的史册”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂维安登，便是读懂了一种对待历史的态度：不是选择性遗忘或浪漫化虚构，而是基于事实的尊重、痛苦的直面与充满责任感的重建。它提醒我们，最动人的风景之下，往往层叠着最深邃的时间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当你离开时，带走的不仅是照片，还有一段关于 resilience（复原力）的叙事——关于石头如何破碎，又如何被精心拾起、复位，最终在时光中赢得比以往更崇高的地位。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/neumunster-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    诺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">诺伊明斯特修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Neumünster Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/abbey-of-echternach-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃希特纳赫修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Abbey of Echternach</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/esch-sur-sure" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃施河畔绍尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Esch-sur-Sûre</p>
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
