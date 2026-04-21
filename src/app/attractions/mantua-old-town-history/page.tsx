import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '曼托瓦历史溯源｜沉睡美人的文艺复兴宫廷往事与贡扎加家族传奇',
  description: '探秘意大利北部被湖水环绕的“沉睡美人”曼托瓦。走入贡扎加家族的权力剧场，追寻文艺复兴艺术赞助的巅峰，解码一座小城如何成为欧洲文化的心脏。',
}

export default function MantuaOldTownHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '曼托瓦老城', href: '/attractions/mantua-old-town-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`曼托瓦老城・Mantua Old Town・意大利・曼托瓦`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在意大利北部波河平原的迷雾与三个湖泊的柔波之间，<strong>曼托瓦</strong>如同一枚被时光精心封存的宝石。它的历史标签，并非罗马帝国的恢弘，也非威尼斯的水上繁华，而是一个家族——<strong>贡扎加家族</strong>——用权力、野心与无与伦比的艺术品味，在此缔造了近四个世纪的“文艺复兴宫廷传奇”。这里是权力的剧场，是艺术的圣殿，更是欧洲贵族政治与人文主义交织的微观宇宙。抛开游玩攻略，走进曼托瓦的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`曼托瓦老城`} />
                <InfoRow label="英文名称" value={`Mantua Old Town`} />
                <InfoRow label="正式名称" value={`Mantua Old Town`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`曼托瓦`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "曼托瓦的起源，深陷于北意大利平原的沼泽与神话之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字<strong>Mantua</strong>，被认为源自古伊特鲁里亚神话的预言家<strong>曼图斯（Manto）</strong>。传说中，曼图斯在特洛伊战争后流浪至此，她的儿子<strong>奥克诺斯（Ocnus）</strong>在此奠基筑城，并以母亲之名命名。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我从特洛伊的灰烬中走来，携带神谕与悲伤。在这片被水环绕的土地上，我预见了一个伟大的家族将在此升起，他们的名字将比青铜更持久。” —— 后世诗篇中虚构的曼图斯预言。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而考古证据将城市的根基建于更早的公元前2000年左右。它最初只是波河支流与明乔河形成的天然沼泽地带中，一片易于防守的岛屿。这种被水域环绕的地理特征，塑造了它易守难攻的军事属性，也赋予了它“<strong>沉睡于水上的城市</strong>”这一梦幻别称。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1328年</strong>，是一个决定性的年份。来自维罗纳附近的军事贵族<strong>贡扎加家族</strong>，通过一场精心策划的政变，取代了之前的统治者，开始了他们对曼托瓦长达<strong>381年</strong>的统治。城市的历史轨迹从此与这个家族的命运紧紧捆绑，从一个平凡的城镇，一步步迈向文艺复兴时期欧洲最辉煌的宫廷之一。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "贡扎加家族的统治，是曼托瓦城市肌理上最深刻的烙印。他们的每一次野心勃发，都化为砖石与壁画，留存至今。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个核心印记，是<strong>宫廷堡垒的嬗变</strong>。家族上台后，将原有的统治者宫殿不断扩建、连接，最终形成了庞大的<strong>公爵宫（Palazzo Ducale）</strong>建筑群。它不是一个单一的宫殿，而是一个包含城堡、宫殿、教堂、花园的“城中之城”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中，<strong>圣乔治城堡（Castello di San Giorgio）</strong> 是家族权力的军事基石。而城堡内的一间私人礼拜堂，却因<strong>安德烈亚·曼特尼亚</strong>在<strong>1465-1474年</strong>间绘制的天顶壁画《婚礼厅》而永载艺术史册。画中贡扎加家族成员与廷臣被描绘在一個仿佛敞向天空的穹顶回廊下，逼真的透视令人叹为观止，开创了欧洲幻觉主义天顶画的先河。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“当我仰望，仿佛宫殿的屋顶已然消失，白云与天使触手可及，公爵一家就在天堂的阳台上俯视着我。” —— 一位16世纪访客的记述。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个不可磨灭的印记，是<strong>城市规划的文艺复兴理想</strong>。<strong>卢多维科·贡扎加</strong>聘请了当时最伟大的人文主义建筑师<strong>莱昂·巴蒂斯塔·阿尔伯蒂</strong>，在城市的边缘设计并建造了<strong>圣塞巴斯蒂亚诺教堂</strong>和<strong>圣安德烈亚大教堂</strong>。尤其是后者，其宏伟的古典立面与恢宏的内部空间，彻底颠覆了中世纪教堂的形制，将古罗马的纪念性尺度与基督教精神结合，成为文艺复兴建筑理论的实物典范。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座教堂，本身就是贡扎加家族渴望将曼托瓦提升为文化与宗教中心的野心宣言。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三个印记，则是<strong>王朝的巅峰与猝然的终章</strong>。<strong>1627年</strong>，贡扎加家族直系血脉断绝。经过一场短暂的继承战争，曼托瓦公国落入法国旁支<strong>贡扎加-讷韦尔家族</strong>手中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，悲剧在<strong>1630年</strong>降临。神圣罗马帝国军队围攻曼托瓦（曼托瓦王位继承战争的一部分），破城后进行了长达三日的残酷洗劫，史称“<strong>曼托瓦之劫</strong>”。无数艺术珍品被掠夺，人口因战乱和随之而来的大瘟疫锐减近一半。这场灾难，不仅彻底终结了曼托瓦作为独立强权的地位，也如同一道沉重的帷幕，骤然拉上了它辉煌的文艺复兴黄金时代。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在贡扎加家族星光璀璨的宫廷中，有两位人物格外耀眼，他们并非君王，却用自己的方式定义了曼托瓦的文化基因。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>伊莎贝拉·德·埃斯特（1474-1539）</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她被誉为“<strong>文艺复兴第一夫人</strong>”，是曼托瓦历史上最著名、也最具影响力的女性。作为费拉拉公爵之女，她16岁嫁给了曼托瓦侯爵<strong>弗朗切斯科二世·贡扎加</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "伊莎贝拉的传奇，在于她是一位无与伦比的艺术赞助人、收藏家和时尚偶像。她的私人书房“<strong>珍宝洞（Studiolo）</strong>”和相邻的“<strong>洞穴（Grotta）</strong>”，是她文化与权力的核心密室。她不是被动地等待艺术家献上作品，而是主动“订购”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她写信给当时最顶尖的艺术家——包括<strong>佩鲁吉诺、曼特尼亚、科雷乔、达·芬奇</strong>——为他们设定复杂的古典寓言主题，对构图、用色甚至人物姿态提出具体、乃至苛刻的要求。现藏于卢浮宫的达·芬奇素描《女性头像》，很可能就是为她所作。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“尊敬的夫人，您关于‘爱与贞洁之战’主题的构思精妙绝伦，但您要求使用的那不勒斯蓝颜料，其价格堪比黄金……” —— 一位艺术家在给伊莎贝拉的回信中委婉诉苦。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她的宫廷是学者、诗人、音乐家的聚集地。她本人精通拉丁文，收藏古罗马钱币和雕塑，她的着装风格引领全意大利的时尚潮流。在丈夫常年外出征战、被俘期间，她以惊人的政治智慧代理统治曼托瓦，维护了公国的稳定。她的一生，完美诠释了文艺复兴时期贵族女性如何利用智慧、品味与坚韧，在男性主导的权力世界中开辟属于自己的王国。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>安德烈亚·曼特尼亚（1431-1506）</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说伊莎贝拉是导演和策划者，那么曼特尼亚就是将曼托瓦的宫廷梦想变为永恒视觉史诗的<strong>首席画家</strong>。他并非曼托瓦人，却被贡扎加家族“终身聘雇”，在此生活和工作了46年，直至去世。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "曼特尼亚的艺术，带有一种冷峻、坚硬、考古学般精确的古典气质。他为<strong>卢多维科·贡扎加</strong>绘制的家族肖像，背景就是曼托瓦真实的风景，开创了将现实统治地与统治者肖像结合的先例。而他为圣乔治城堡婚礼厅绘制的天顶画，更是革命性的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但他与贡扎加家族的关系，远非主仆那般简单。档案记载显示，曼特尼亚薪酬丰厚，拥有自己的宅邸，甚至与领主就报酬和创作自由进行谈判。他性格刚直，曾因报酬问题与<strong>伊莎贝拉·德·埃斯特</strong>发生争执并短暂中断合作。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“曼特尼亚先生以其卓越的才能，应享有与其才华相匹配的尊重与待遇，而非如普通匠人般被驱使。” —— 一位宫廷人文主义者为其辩护。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他晚年在曼托瓦郊区为自己建造了一座别墅，墙壁上画满了他个人钟爱的古典题材壁画。这座“<strong>画家之家</strong>”是他艺术人格的最终归宿，宣告了一位文艺复兴艺术家作为独立知识分子的自觉。曼特尼亚的骨灰，被安放在曼托瓦一座他以自己画作抵扣报酬而重建的教堂礼拜堂内。他最终与这座城市，在物质与精神上都融为一体。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "环绕曼托瓦的三片湖泊，不仅提供了防御与风景，也滋生了关于爱情与命运的忧郁传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最动人的故事关于<strong>里恩佐与西尔维娅</strong>。里恩佐是曼托瓦一位贫穷但英俊的青年，他深深爱上了贵族少女西尔维娅。两人的地位犹如天堑。他们只能在夜晚，于明乔湖畔秘密相会，西尔维娅从家中花园的小门溜出，与里恩佐在月光下的船中私语。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，西尔维娅的父亲发现了这段恋情，震怒之下，他决定将女儿远嫁他方。在婚礼前夜，西尔维娅试图与里恩佐乘船私奔。湖上突然升起浓雾，狂风大作。小船倾覆，两人双双溺亡。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“曼托瓦的湖水啊，你见证了多少誓言与眼泪。请将我的灵魂与他的缠绕，沉入你的柔波深处，那里没有贵族与平民，只有永不分离的爱人。” —— 传说中的西尔维娅遗言。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据说，从此以后，在特定有雾的夜晚，曼托瓦的居民偶尔能看见一艘幽灵般的小船在湖面飘荡，船上隐约有两个相依的年轻身影。这个悲剧为曼托瓦“水上城市”的浪漫底色，添上了一抹深沉的忧郁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则与城市中心的<strong>圣洛伦佐圆形教堂（Rotonda di San Lorenzo）</strong>有关。这是曼托瓦最古老的建筑之一，建于11世纪。民间相信，这座教堂的地下深处，隐藏着一条通往贡扎加公爵宫的秘密隧道。隧道里囚禁着一位因知晓家族秘密而被封口的炼金术士的幽灵，他至今仍在隧道中徘徊，守护着一个关于点石成金或长生不老的、被遗忘的秘密。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日漫步在曼托瓦宁静的广场与湖畔，依然能清晰听见历史的回响。贡扎加公爵宫的每一个房间，都是一页凝固的家族政治与艺术野心的日记；圣安德烈亚大教堂的穹顶，仍回响着阿尔伯蒂的人文主义理想；而街头巷尾的砖石颜色，仿佛还浸染着曼特尼亚画作中那种北意大利特有的灰冷光泽。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂曼托瓦，便是读懂了一个家族如何凭借眼光与魄力，将一片沼泽之地塑造为欧洲文化的磁场；读懂了一位女性如何以品味与智慧，在历史的夹缝中定义自己的王国；也读懂了文艺复兴那复杂而辉煌的真相——它不仅是巨匠的杰作，更是赞助人的胆识、艺术家的骄傲与一座城市命运交织而成的宏大戏剧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有佛罗伦萨的游客如织，没有威尼斯的喧嚣商业，只有一份沉淀下来的、可供细细品味的“完成的辉煌”与“静谧的颓败”。它邀请每一位来访者，做一位安静的读者，阅读这部以石头、颜料和湖水写就的史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/cortona-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科尔托纳</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cortona</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cascata-delle-marmore" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马尔莫雷瀑布</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cascata delle Marmore</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/camogli" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡莫利</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Camogli</p>
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
