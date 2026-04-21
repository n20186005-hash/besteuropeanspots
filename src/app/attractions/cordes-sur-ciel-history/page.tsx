import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科尔德圣谢鲁历史溯源｜法国天空之城的卡塔尔派前世今生与中世纪传奇',
  description: '揭秘法国最美小镇科尔德圣谢鲁。它不仅是“天空之城”，更是阿尔比十字军战争的活化石。跟随我们，探寻其700年石阶上镌刻的异端、繁荣与诗歌。',
}

export default function CordesSurCielHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '法国', href: '/destinations/europe' },
            { label: '塔恩省', href: '/destinations/europe' },
            { label: '科尔德圣谢鲁', href: '/attractions/cordes-sur-ciel-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`科尔德圣谢鲁・Cordes-sur-Ciel・法国・塔恩省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在法国南部的塔恩省，有一座常常被云雾托起、仿佛悬浮于天际的中世纪山城。它有一个如梦似幻的名字——<strong>科尔德圣谢鲁</strong>，意为“天空中的科尔德”。然而，这份仙境般的表象之下，埋藏的却是一段与血腥宗教战争、地下信仰和商业奇迹紧密相连的沉重史诗。它曾是异端“清洁派”信徒的秘密堡垒，也是南方财富最后的辉煌见证。抛开游玩攻略，走进这座“石头战舰”的尘封往事，遇见属于它的抵抗、繁荣与时光传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`科尔德圣谢鲁`} />
                <InfoRow label="英文名称" value={`Cordes-sur-Ciel`} />
                <InfoRow label="正式名称" value={`Cordes-sur-Ciel`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`塔恩省`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市的诞生，源于恐惧与防御。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间回到<strong>1209年</strong>。教皇英诺森三世发动的<strong>阿尔比十字军</strong>战争正在法国南部如火如荼地进行。这场以清剿被称为“卡塔尔派”（又称清洁派）的基督教异端为名的战争，实质上是北方法兰西贵族对富庶的南方奥克西塔尼亚地区的征服。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "面对北方十字军和宗教裁判所的步步紧逼，南方贵族急需建立不可攻破的防御据点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，在<strong>1222年</strong>，图卢兹伯爵<strong>雷蒙七世</strong>下令，在一座陡峭的石灰岩山丘上，建造一座全新的堡垒城镇。选址极为精妙：三面是天然的悬崖绝壁，仅有狭窄的斜坡可通山顶，易守难攻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字 <strong>“Cordes”</strong> ，并非源自法语，而是当地的奥克语。一种说法认为，它源于“Cordas”（绳索），象征其作为连接或防御的据点；更浪漫的传说则认为，初建时，规划城市布局的绳索被神奇地固定在了山顶岩石上，预示了此地注定不凡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从一开始，科尔德就是作为战时的避难所和军事前哨而存在的。第一批居民，正是从周边平原地区逃难而来的贵族、工匠和商人，其中很可能就包括遭受迫害的卡塔尔派同情者。这座城市，从石头缝里萌发的第一刻，就带着悲壮与坚韧的基因。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科尔德的历史，是由几道深刻的刀痕镌刻而成的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道刻痕，便是 <strong>“清洁派”的隐秘回声</strong>。尽管城市建立在十字军战争期间，旨在展示正统天主教的权威，但它却长期被视为异端的潜在庇护所。城市错综复杂如迷宫般的街巷、房屋下隐秘的地窖和通道，传说正是为了隐藏清洁派信徒和他们的“完人”教士。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地有古老的低语流传：“当夜幕降临，圣灵之鸽（清洁派的象征）会飞过石墙，在虔诚者的家中寻找安宁。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "宗教裁判所的影子始终笼罩这里。直到今天，你仍能在一些古老房屋的门楣上，看到模糊的雕刻——可能是鸽子的痕迹，也可能只是风化的花纹，但这无声的暧昧，正是那个恐怖时代留给科尔德最耐人寻味的历史密码。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二道刻痕，是<strong>黑死病后的黄金时代</strong>。14世纪中叶，瘟疫席卷欧洲，科尔德却因其相对封闭和洁净的地理环境，损失较小。大量幸存下来的熟练工匠——尤其是皮革工、织布工和手套匠人——涌入这里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从<strong>1350年到1450年</strong>这一个世纪，是科尔德难以置信的经济与文化繁荣期。富商巨贾们竞相建造奢华的石质公馆，这些建筑正是今日城市最瑰丽的风景线。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>布商之家</strong>、<strong>格罗德公馆</strong>……它们的外立面布满了极其繁复的石雕：嬉笑的人物、神话中的野兽、寓言场景。这些雕刻并非纯粹的宗教主题，更多地炫耀着世俗的财富、主人的品味与幽默感。这段时期留下的建筑，让科尔德赢得了“法国第一个哥特式防御城镇”的美誉，也记录了一个在战争阴霾后倔强盛开的商业奇迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，繁荣如同山顶的云雾，终会散去。随着宗教战争彻底平息，法国王室中央集权的加强，以及贸易路线的改变，科尔德在<strong>16世纪</strong>后逐渐褪去光环，陷入漫长的沉睡。正是这份“被遗忘”，才奇迹般地将其中世纪风貌完整地封印在了时间里。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科尔德的石头记忆里，铭刻着两位与她命运交织的“守护者”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一位，是她的缔造者与政治庇护人——<strong>雷蒙七世</strong>。作为最后一位独立的图卢兹伯爵，他的一生就是与北方法兰西势力和教皇权力抗争的缩影。他的父亲雷蒙六世在阿尔比十字军战争中惨败，失去了大片领土。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在雷蒙七世的回忆中，可能这样写道：“我父亲的失败不是终点。我要在山巅筑起新的希望，一个他们无法轻易摧毁的岩石巢穴。科尔德将是我的拳头，握紧南方最后的尊严与自由。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1222年</strong>建城后，他于<strong>1224年</strong>便授予科尔德一项宝贵的<strong>城市特许状</strong>，赋予其税收和市场等特权，吸引人口。更重要的是，他加固了城墙，使其成为连接自己破碎领土的关键防御节点。尽管他最终在<strong>1229年</strong>的《巴黎条约》中被迫屈服，但其建造的科尔德，已经成为南方抵抗精神的一个不朽象征。他留下的，不仅是一座城，更是一颗倔强的种子。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二位，是一位用诗歌唤醒沉睡之城的人——现代诗人<strong>约瑟夫·德拉格</strong>。在20世纪中叶，科尔德还只是一个破败、几乎被遗弃的山村，人口稀少，建筑倾颓。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1940年代</strong>，德拉格第一次来到科尔德，立即被其凄美与壮丽征服。他决定定居于此，并倾尽所有修复了一栋古老的房屋。他不仅是居民，更是科尔德最热情的“传教士”。他用动人的诗篇赞美这座城市：" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“科尔德，你是停泊在青绿色海面上的石船，龙骨朝向天空……你的街巷是时间的琴弦，风在上面弹奏着世纪的歌谣。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的文字和社交影响力，逐渐吸引了巴黎的艺术家、知识分子前来探访。摄影师、画家、作家纷至沓来，科尔德开始以“天空之城”的浪漫形象重新进入法国文化的视野。可以说，是德拉格的诗歌，为这座中世纪化石注入了新的灵魂，拉开了其作为旅游与文化目的地复兴的序幕。他从历史的尘埃中，擦拭出了科尔德夺目的光芒。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在科尔德，历史与传说在石缝间缠绕共生，最著名的莫过于 <strong>“圣文森特石磨坊”的传说</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个故事将城市的起源与神迹相连。据说在建城之初，工人们为寻找稳固地基和水源而苦恼。一位名叫<strong>圣文森特</strong>的牧师来到此地，他向上帝祈祷指引。一夜，他在梦中得到启示。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "次日，他带领人们来到山顶一块巨大的岩石前，用手杖轻敲三下。奇迹发生了：岩石表面竟变得如面团般柔软，并缓缓凹陷，形成一个完美的石臼。紧接着，一股清泉从石臼底部涌出，解决了饮水问题。而那块岩石，仿佛被无形的力量推动，开始缓缓自转，如同一个巨大的石磨。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "古老的歌谣这样唱道：“圣文森特敲击岩石，石头学会了舞蹈。它碾碎了饥饿与干渴，磨出了科尔德的第一缕炊烟。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "人们相信，这个“自动石磨”为最初的建造者提供了源源不断的粮食（象征性地），是上帝认可此地、保佑城市的明确标志。今天，你仍能在城中寻找与这个传说相关的古老痕迹，或许是一口古井，或许是一块形似磨盘的石头。这个传说超越了宗教派别，成为所有科尔德人共同的精神起源——他们的家园，是受上天祝福、从岩石中诞生的奇迹之地。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客沿着<strong>“Grand Rue Raimond VII”</strong> 盘旋而上，触摸那些被岁月打磨得温润的巨石，他们攀登的不仅是一座地理的山峰，更是一段层叠的历史断层。脚下每一级石阶，都可能踏过清洁派信徒匆匆的夜行足迹；眼前每一座雕花公馆，都在无声讲述着黑死病幸存者创造财富的蓬勃生命力；远方缭绕的云雾，依旧包裹着雷蒙七世的雄心与德拉格的詩句。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科尔德圣谢鲁的价值，远不止于一张“法国最美小镇”的明信片。它是一座<strong>露天的中世纪史书</strong>，一页关于宗教迫害与抵抗的灰色章节，一幅描绘商业文明巅峰的华丽插图，一首由诗人重新发现的、关于失落与重逢的田园诗。在这里，历史不是博物馆里僵硬的展品，而是你呼吸的空气、走过的路面和仰望的天空线。读懂科尔德，便是读懂了一种在绝境中建造天堂、在遗忘中守护记忆的南方精神。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/historic-centre-of-lyon" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    里
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">里昂历史中心</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Historic Centre of Lyon</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-beynac-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝纳克城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Beynac</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rochefort-en-terre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    罗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">罗什福尔昂泰尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rochefort-en-Terre</p>
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
