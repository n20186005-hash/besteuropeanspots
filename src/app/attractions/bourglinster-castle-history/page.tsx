import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卢森堡历史溯源｜隐秘贵族双堡布尔格林斯特的前世今生与骑士传奇',
  description: '探秘卢森堡山谷中沉睡的双子古堡。从12世纪骑士要塞到文艺复兴沙龙，穿越800年权谋、艺术与传说，遇见被时光遗忘的欧洲隐秘角落。',
}

export default function BourglinsterCastleHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '卢森堡', href: '/destinations/europe' },
            { label: '格雷文马赫', href: '/destinations/europe' },
            { label: '布尔格林斯特城堡', href: '/attractions/bourglinster-castle-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`布尔格林斯特城堡・Bourglinster Castle・卢森堡・格雷文马赫`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在卢森堡东部绵延的<strong>“小瑞士”</strong> 山谷之中，布尔格林斯特并非一座孤立的堡垒，而是一对自中世纪便相互守望的<strong>“双子石堡”</strong>。它见证了卢森堡伯爵领地的边疆风云，也从军事要塞悄然蜕变为人文主义的隐秘沙龙。这里没有游客如织的喧嚣，只有石墙上深深镌刻的，关于<strong>生存、忠诚与文艺复兴之火</strong>如何在这片狭小公国悄然燎原的故事。抛开游玩攻略，走进布尔格林斯特的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`布尔格林斯特城堡`} />
                <InfoRow label="英文名称" value={`Bourglinster Castle`} />
                <InfoRow label="正式名称" value={`Bourglinster Castle`} />
                <InfoRow label="国家" value={`卢森堡`} />
                <InfoRow label="城市" value={`格雷文马赫`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "布尔格林斯特的诞生，与卢森堡早期建国史紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字源于拉丁语 <strong>“Burgus Linster”</strong> ，意为 <strong>“林斯特的堡垒”</strong> 。“林斯特”很可能指代最早在此垦殖的家族或小溪名。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的雏形可追溯至<strong>12世纪中期</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，强大的<strong>卢森堡伯爵亨利四世</strong>正致力于巩固其东部边境，以防范神圣罗马帝国内部的纷争与邻近领主的觊觎。布尔格林斯特所在的山脊，俯瞰着至关重要的<strong>阿尔泽特河谷</strong>与通往特里尔的古老商道，战略价值不言而喻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初，它并非一座宏伟宫殿，而是功能纯粹的<strong>边防哨所与骑士驻地</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其核心是两座独立的、由厚重毛石砌成的<strong>主塔</strong>。这种“双堡”格局在当时极为罕见，推测可能分属两位共同承担边防职责的骑士家族，或是一个家族内不同支系的居所。它们互为犄角，共享防御体系，却又彼此独立，奠定了此地独特的建筑基因与权力隐喻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在历史的长卷中，它从一开始，就是边疆的产物，是权力网络中的一个坚韧节点。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "布尔格林斯特的第一个历史高光时刻，出现在<strong>14世纪</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "随着卢森堡家族跻身神圣罗马帝国皇帝宝座，其领地重要性陡增。城堡在<strong>1322年</strong>的一份财产分割文件中被首次明确记载，归属<strong>卢森堡的约翰一世</strong>。此时，它已从简陋哨所升级为坚固的<strong>石质城堡复合体</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "两座主塔被扩建，并围以带有箭塔的防御墙。这段时期留下的<strong>哥特式窗棂</strong>与<strong>拱形地窖</strong>，至今仍可辨认。城堡不仅屯兵，更成为管理周边广阔林地与村庄的行政中心。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“伯爵的仆人自布尔格林斯特堡来，收取了本年度第三笔林地税。”—— 摘自1347年地方税收记录片段。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的转折点发生在<strong>文艺复兴的16世纪</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1551年</strong>，城堡被来自列日的显赫贵族——<strong>冯·德·马克家族</strong>购得。他们带来的不是战火，而是文明之风。家族成员，尤其是<strong>约翰内斯·冯·德·马克</strong>，是一位知名的人文主义者与艺术赞助人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他对城堡进行了大刀阔斧的<strong>文艺复兴式改造</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尖锐的哥特式塔楼被加上舒缓的斜顶，阴暗的内部空间被打开，装上了宽敞的、带有精美石雕窗框的窗户。防御性的壁垒内，出现了描绘古典神话的<strong>壁画</strong>与舒适的起居室。城堡的功能，从军事堡垒彻底转变为<strong>乡村贵族宅邸与文化沙龙</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史的波澜再次降临。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在<strong>十七世纪的战乱</strong>，特别是法王路易十四的扩张战争中，卢森堡烽火连天。布尔格林斯特虽未完全摧毁，但严重受损，一度荒废。直到<strong>19世纪末</strong>，才由<strong>比利时贵族</strong>进行了一次重要的<strong>新哥特式风格修复</strong>，赋予了它如今看到的、浪漫如画的轮廓。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每一块石头的增补，都是一次时代精神的更迭。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "布尔格林斯特最引人入胜的传奇，缠绕在<strong>文艺复兴时期</strong>的领主<strong>约翰内斯·冯·德·马克</strong>身上。他并非征战沙场的武将，而是一位被历史尘埃稍掩其光的<strong>学者型贵族</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "约翰内斯出生于<strong>约1520年</strong>，来自一个与欧洲多国王室有联姻的强大家族。他在卢汶大学受过顶尖教育，精通拉丁文、希腊文，对法学、哲学和新兴的印刷术充满热情。<strong>1551年</strong>购入布尔格林斯特城堡后，这里成了他远离宫廷政治的<strong>静修所与思想实验室</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他最非凡的贡献，在于将这座边境城堡，变成了一个<strong>微型的“北方文艺复兴”传播站</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "约翰内斯利用家族遍布欧洲的关系网，大量收集来自意大利、法国和低地国家的书籍、绘画与科学仪器。城堡的图书馆曾藏有数百册珍贵手抄本和早期印刷品，主题从古典文献到地理发现，无所不包。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“在布尔格林斯特的寂静中，我与先贤对话。西塞罗的雄辩透过羊皮纸传来，远比窗外领主间的争吵更有意义。”—— 后世学者根据约翰内斯书信风格重构的内心独白。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更关键的是，他慷慨地接待途经的学者、艺术家甚至敏感的<strong>新教思想者</strong>。在宗教冲突日益激烈的时代，他的城堡提供了一种难得的、相对宽容的交流空间。据信，著名人文主义者<strong>尤斯图斯·利普修斯</strong>在流亡期间曾秘密到访，与他就斯多葛哲学进行长夜漫谈。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "约翰内斯去世后，其精神遗产逐渐隐入尘烟。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡几经易手，藏书散佚，沙龙不再。直到20世纪，历史学家才从零散的档案与城堡残留的<strong>壁画符号</strong>（如古典寓言场景）中，重新拼凑出这位“布尔格林斯特的梅塞纳斯”的轮廓。他未能名留欧洲艺术史的中心篇章，却在这座山谷古堡中，证明了文艺复兴的火花曾如何倔强地在卢森堡的边陲闪烁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位值得一提的人物是<strong>20世纪的拯救者</strong>——<strong>查尔斯·埃米尔·马克斯</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位卢森堡企业家与艺术爱好者在<strong>1968年</strong>买下已显破败的城堡。他反对将其彻底商业化，而是发起了一场精心的、考究的<strong>历史性修复</strong>。他聘请专家，依据最严谨的考古与历史证据，剥离了19世纪过于浪漫的添加部分，让城堡更接近其文艺复兴鼎盛时期的样貌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的努力，使得布尔格林斯特在<strong>1988年</strong>被卢森堡国家收购后，能够以最本真的面貌，成为一座举办高雅文化活动和古典音乐会的历史场馆。马克斯本人，成了连接城堡往昔人文精神与现代传承的<strong>最后一位私人守护者</strong>。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在格雷文马赫的乡间，老人们至今仍会低声讲述关于布尔格林斯特 <strong>“地下骑士”</strong> 的传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事说，在很久以前的一场惨烈围城战中，城堡的领主自知不敌。为避免家族宝藏落入敌手，他命令最忠诚的骑士，将一箱箱的金币、珠宝以及最重要的——一枚象征统治权的<strong>古老戒指</strong>，藏入城堡地下迷宫般的最深处。随后，这位骑士自愿留在密室中，守护宝藏，并将入口永久封死。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说中，这位骑士并未死去，而是因强烈的忠诚誓言而进入了某种永恒的守夜状态。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每逢<strong>月圆之夜</strong>，或是暴风雨来临前夕，有些敏感的人声称能听到从城堡地基深处，传来缓慢而沉重的<strong>金属脚步声</strong>。那声音不疾不徐，仿佛仍在执行永无止境的巡逻。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我的祖父曾说，他在一个夏夜清晰地听到过。那不是风，是铠甲摩擦石头的声音，从地底传来，绕着圈子，一圈，又一圈……那是永远无法交班的岗哨。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则与城堡的<strong>双子结构</strong>有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "人们说，最初建造两座塔楼的，是一对兄弟。他们情深义重，共同立业，却因同时爱上一位远道而来的吟游诗人女儿而心生间隙。最终，女孩谁也未选，飘然离去，而兄弟俩至死未能和解。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "后人便说，城堡两塔之间那看似相连却又保持距离的格局，正是这对兄弟<strong>“永恒的并肩与沉默”</strong> 的化身。据说，在特定的光线下，两座塔楼的影子会交错重叠，宛如一次迟来的拥抱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，为冰冷的石墙注入了血肉与叹息。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日的布尔格林斯特，安静地栖身于卢森堡“小瑞士”的如画风光中。它不再需要履行边防职责，也不再举办人文主义沙龙。然而，当你穿过它的门廊，触摸那些<strong>12世纪的毛石、16世纪的雕窗、19世纪的修复痕迹</strong>时，你触摸的是一部浓缩的、立体的欧洲边疆史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它从<strong>分裂的“双堡”</strong> 到<strong>统一的宅邸</strong>，从<strong>军事前哨</strong>到<strong>文化绿洲</strong>，再到<strong>战火废墟</strong>与<strong>重生古迹</strong>的轮回，完美诠释了卢森堡这个“千堡之国”的深层命运——在强大的邻国夹缝中，始终以坚韧的适应力，守护着自身的独立与精神火种。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂布尔格林斯特，便是读懂了卢森堡超越金融与政治之外的，另一重<strong>深沉而高贵的文化身份</strong>。在这里，历史不是宏大的叙事，而是具体而微的生存智慧、忠诚的代价，以及对美与知识不懈的、隐秘的追求。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/remich-luxembourg" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    雷
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">雷米希</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Remich</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vianden-castle-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维安登城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vianden Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bourscheid-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布尔沙伊德城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bourscheid Castle</p>
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
