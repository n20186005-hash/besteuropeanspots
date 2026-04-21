import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '劳马古城历史溯源｜木构世界遗产的北欧低语与女巫传奇',
  description: '走进联合国教科文组织世界遗产Old Rauma。这不是寻常的北欧古城，它的心跳由木头雕刻，它的记忆缠绕着海风、焦油与中世纪女巫的传说。',
}

export default function OldRaumaHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '劳马古城', href: '/attractions/old-rauma-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`劳马古城・Old Rauma・芬兰・劳马`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在芬兰西海岸，时间被精细地雕刻在松木的纹路里。<strong>劳马古城</strong>，并非恢弘的石砌堡垒，而是一座由600多座古老木屋安然构成的梦境。它是北欧保存最完整的木构建筑群，一部活着的中世纪城镇编年史。然而， UNESCO 的世界遗产光环之下，涌动着更为隐秘的暗流——这里曾是芬兰“女巫”最密集的土壤，焦油、航运与民间巫术共同熬煮出它独一无二的灵魂。抛开游玩攻略，走进劳马的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`劳马古城`} />
                <InfoRow label="英文名称" value={`Old Rauma`} />
                <InfoRow label="正式名称" value={`Old Rauma`} />
                <InfoRow label="国家" value={`芬兰`} />
                <InfoRow label="城市" value={`劳马`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "劳马的呼吸，始于波罗的海咸涩的海风与茂密森林的松香。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的官方“生日”是 <strong>1442年</strong>。那一年，一份特许状确认了这座围绕<strong>圣方济各修道院</strong>发展起来的小镇的贸易权利。但它的脉搏，或许早在数百年前就已开始搏动。这里天然是一个良港，一个通往瑞典和汉萨同盟世界的窗口。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇的名字 “Rauma” 本身，就是一个关于“空间”的古老故事。它源自古诺尔斯语或德语中的 “ <em>Raumr</em> ” 或 “ <em>Raum</em> ”，意为“广阔的空间、空地”。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一种当地流传的解释是，早期的水手航行至此，看到这片被森林环绕的宽阔海湾与滩涂，会松一口气喊道：“看，一片空地（Raum）！我们终于可以靠岸了。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城最初的骨骼与血肉，完全来自森林。广袤的北欧森林提供了取之不尽的木材，而焦油——将松木干馏得到的黑色“黄金”——则是劳马最早、最著名的出口商品。焦油用于涂刷船体防水，是航海时代的战略物资。劳马，就这样以最北欧的方式，从森林走向海洋。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不是王公贵族的造物，而是一个由商人、工匠、水手和修道士共同建造的实用主义家园。这种务实的、与自然材料紧密相连的起源，为它此后数百年的风貌与命运，定下了坚实的基调。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "劳马的编年史，是用火焰、灰烬与一次次重生书写的。它的历史印记，深深刻在那些被熏黑又刷白的木墙肌理之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道无法磨灭的烙印，来自宗教改革的风暴。<strong>1538年</strong>，瑞典国王古斯塔夫·瓦萨下令拆除劳马的圣方济各修道院。石料被运往赫尔辛基建造城堡，修道院的辉煌轰然倒塌。这场变故并未杀死小镇，反而以一种残酷的方式“解放”了它。城镇的中心从宗教场所，彻底转向了蓬勃的市民商业。原修道院的教堂得以保留，成为今天的<strong>圣十字教堂</strong>，沉默地见证着这场转型。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，木构之城永恒的梦魇是火灾。<strong>1640年</strong>与 <strong>1682年</strong> 的两次 catastrophic 大火，几乎将劳马夷为平地。尤其是1682年那场“巨火”，吞噬了全镇四分之三的建筑。但灰烬中生长出的，是秩序与韧性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "灾后重建遵循了当时最新的城市规划理念，形成了今天所见的清晰<strong>棋盘式街道格局</strong>。更关键的是，一种独特的建筑美学被固化下来：窄长的木屋地块（为了更多家庭能拥有临街的商铺与仓库），优雅的新古典主义立面装饰，以及为了保护脆弱木墙而发明的<strong>“劳马蓝”</strong>——一种用油漆、硫酸铜和焦油混合而成的独特靛蓝色颜料。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "进入19世纪，劳马迎来了“黑色的辉煌”。它成为芬兰最重要的帆船港之一，拥有庞大的商船队，航运业达到顶峰。码头边船桅如林，造船厂敲打声不绝。这笔海洋财富，化作了木屋门窗上更精美的雕刻、室内更豪华的陈设。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但时代的浪潮再次转向，蒸汽船终结了帆船时代。劳马陷入了停滞，而这份停滞，在后来看来竟成了仁慈的馈赠。因为无力大规模翻新，古城被“冻结”在了19世纪末的模样。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1897年</strong>，眼光超前的市政当局划定了<strong>保护区</strong>，这是整个芬兰、乃至北欧最早的城市保护法令之一。正是这份超前的珍视，使得这座木构珍宝得以完整留存，最终在 <strong>1991年</strong>，敲开了联合国教科文组织世界遗产的大门。这不是一段关于永恒胜利的历史，而是一部关于脆弱、毁灭、重建与执着守护的史诗。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在劳马，历史并非由遥远的帝王书写，而是被生活于此的普通人用生命刻入木纹。这里要讲述的，不是一位，而是一个家族、一对父女交织的传奇——他们用不同的方式，成为了这座古城的记忆守护者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一位是牧师兼作家 <strong>尤哈内斯·布鲁纽斯</strong>。他生于 <strong>1843年</strong>，卒于 <strong>1915年</strong>，一生绝大部分时光都未离开劳马。他的本职是劳马乡村教区的牧师，但他的热情与使命，却倾注在了记录正在飞速消逝的传统生活方式上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在工业化的脚步震颤芬兰大地之时，布鲁纽斯像一位焦急的考古学家，细致入微地记录了劳马及周边地区的古老木构建筑细节、室内布局、家具样式、民间手工艺技法。他出版了详尽的研究著作，并留下了大量草图与笔记。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在他的笔记中，他如此写道：“每一栋老房子都是一个音节，组合起来便是我们祖先的语言。如果我们任由它们消失，就等于烧掉了我们最宝贵的书籍。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的工作远远超出了美学欣赏。他认识到这些木建筑不仅是住所，更是社会结构、家庭关系和经济活动的空间容器。他记录下谷仓、桑拿房、船屋的每一种具体形式与功能，保存了一整套即将失传的“生活语法”。可以说，后来世界遗产申报中那份无可辩驳的历史价值论证，其基石早在布鲁纽斯牧师伏案疾书的那个时代就已奠定。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更为动人的传奇，在他的女儿身上延续。<strong>玛格丽特·布鲁纽斯</strong>，这位在父亲书卷气中成长的女性，走上了另一条激烈得多的道路，却同样根植于对劳马底层人民的深切关怀。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她成为了芬兰第一位职业女记者，也是早期劳工权益与社会改革的猛烈鼓吹者。她的笔锋锐利，为码头工人、工厂女工、贫困家庭的权益大声疾呼。她继承了父亲对“人”的关注，却将视线从静止的建筑，投向了建筑中挣扎求存的生命。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在一篇报道劳马童工状况的文章中，她写道：“我们的古城有着世界上最美丽的木雕窗棂，但有多少雕刻这些花纹的手，属于那些从未有过童年的孩子？美，不能建立在无声的痛苦之上。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这对父女，一个守护物质的遗存，一个捍卫人的尊严；一个回溯过去，一个直面当下。他们的故事并行不悖，共同揭示了劳马历史的全景：它不仅是风景明信片上恬静的蓝白木屋，更是一个真实的、充满汗水和呐喊的社区。布鲁纽斯家族的故居至今仍矗立在古城一隅，他们的精神遗产，使得劳马的世界遗产称号，有了温度与人性。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "阳光下的劳马古城色彩柔和，但它的阴影里，却流传着一段令人脊背发凉、又带着奇异力量的过往。这里是芬兰历史上著名的“女巫之地”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在17世纪席卷北欧的猎巫狂潮中，劳马及所在的萨塔昆塔地区，是芬兰的“震中”。根据现存法庭记录，这里进行的巫术审判数量惊人。这些所谓的“女巫”，绝大多数是普通的底层妇女。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她们被指控的能力充满了劳马的地方特色：召唤风浪破坏敌人的航船，用巫术偷取邻居牛奶的“精华”，或是调配让爱情降临或消失的药水。其中，一种被称为 <strong>“劳马之夜”</strong> 的仪式广为流传——据说女巫们会聚集在偏远的十字路口或海滩，与“小恶魔”共舞，寻求超自然的力量。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一个典型的指控是这样描述的：“她承认，在一个没有月亮的夜晚，她滑出后门，沿着‘看不见的小路’来到码头。她对着从自家壁炉里取出的一撮灰烬低语，然后将灰撒向海面，诅咒那艘载着她负心汉的船永远遇不到顺风。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "有趣的是，与欧洲大陆很多地方不同，芬兰的“女巫”审判极少以火刑告终，更多的处罚是鞭笞、流放或罚款。人类学家认为，这或许与芬兰古老的萨满教传统有关，民间对拥有“特殊知识”的女性，存在着一种根深蒂固的畏惧与隐秘的敬畏交织的复杂情感。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，为古城平添了一层神秘、阴郁而又强大的滤镜。它提醒着我们，在精致的木雕和宁静的庭院之下，这片土地曾浸透着恐惧、迷信，也潜藏着对自然力量原始而顽强的理解与抗争。今天的劳马人，已不再畏惧这些“女巫”，反而将她们视为本地文化遗产中一个独特、甚至带有一丝叛逆骄傲的章节。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在劳马古城的街巷，你触摸的不仅是木材，更是一段幸存下来的时间。它的价值，远不止于“古老”或“美丽”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这是一座将平凡材料淬炼成永恒的诗意之城。它见证了北欧城镇从中世纪修道院中心，向商业公民社会转型的完整剖面。它展示了人类如何在火灾的毁灭循环中，用智慧与秩序一次次重建家园，并最终领悟到“守护”比“新建”更需要勇气与远见。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更重要的是，劳马是一个<strong>活着的社区</strong>。这里没有将居民清空做成博物馆标本，人们依然在这些300年的老屋里生活、工作、喝咖啡。世界遗产的身份不是封印，而是为一种可持续的生活方式提供了庇护。木门的开合声、窗台盛开的鲜花、飘出的咖啡香，才是它历史最动人的回响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂劳马，便是读懂一种北欧精神：务实、坚韧、与自然材料亲密共处，以及在沉默低调中，对自身根脉的深深执着。来这里，不是寻找惊心动魄的史诗，而是聆听木头、海风与时光共同吟唱的，一首悠长而细腻的叙事诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/riihimki" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    里
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">里希拉赫蒂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Riihimäki</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/koli-national-park" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科利国家公园</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Koli National Park</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/petajavesi-old-church" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩泰耶韦西老教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Petäjävesi Old Church</p>
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
