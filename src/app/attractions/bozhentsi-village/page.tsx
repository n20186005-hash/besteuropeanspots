import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '博仁齐旅游攻略：时光停驻的保加利亚民族复兴建筑珍宝村深度指南',
  description: '探索保加利亚博仁齐(Bozhentsi)村落深度游攻略。这座被列入联合国教科文组织暂列名录的建筑保护区，完美保留了18-19世纪白墙木顶豪宅原貌，是巴尔干半岛最纯净的时光胶囊。',
}

export default function BozhentsiVillagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '博仁齐', href: '/attractions/bozhentsi-village' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`博仁齐・Bozhentsi・保加利亚・加布罗沃州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你厌倦了人挤人的热门景点，今天这份**博仁齐私藏旅游攻略**，就带你躲进巴尔干山脉的褶皱里，找一个被时光遗忘的角落。博仁齐不是一个“景点”，而是一个依然在呼吸的“活态博物馆”。它坐落在保加利亚中部的加布罗沃州，在斯特拉山脉（巴尔干山脉）的怀抱中，海拔将近600米。这里没有售票亭的喧嚣，只有石板路、山泉水声和147座被严格保护起来的民族复兴时期豪宅。作为你的专属向导，这份**自由行指南**将告诉你，如何像个本地人一样，在这片纯净的建筑瑰宝中，体验最地道的保加利亚乡村隐居感。请收好，这不仅仅是一份路线图，更是一份关于如何“慢下来”的**避坑指南**。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友，如果你厌倦了人挤人的热门景点，今天这份<strong>博仁齐私藏旅游攻略</strong>，就带你躲进巴尔干山脉的褶皱里，找一个被时光遗忘的角落。博仁齐不是一个“景点”，而是一个依然在呼吸的“活态博物馆”。它坐落在保加利亚中部的加布罗沃州，在斯特拉山脉（巴尔干山脉）的怀抱中，海拔将近600米。这里没有售票亭的喧嚣，只有石板路、山泉水声和147座被严格保护起来的民族复兴时期豪宅。作为你的专属向导，这份<strong>自由行指南</strong>将告诉你，如何像个本地人一样，在这片纯净的建筑瑰宝中，体验最地道的保加利亚乡村隐居感。请收好，这不仅仅是一份路线图，更是一份关于如何“慢下来”的<strong>避坑指南</strong>。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`博仁齐`} />
                <InfoRow label="英文名称" value={`Bozhentsi`} />
                <InfoRow label="正式名称" value={`Bozhentsi`} />
                <InfoRow label="国家" value={`保加利亚`} />
                <InfoRow label="城市" value={`加布罗沃州`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`博仁齐的历史，是一部关于财富、火灾与选择的戏剧。它的崛起可以追溯到18世纪末，当时，附近大城特尔诺沃的富商和知识分子，为了逃避奥斯曼帝国的苛捐杂税与动荡，纷纷选择躲进这座易守难攻的深山村落。这里成了他们的“世外桃源”和秘密的贸易驿站。他们将财富与品味带入山中，建起了一栋栋气派的豪宅，让博仁齐在19世纪中叶达到了鼎盛，成为地区重要的商业与文化中心。然而，命运在1877-78年的俄土战争（保加利亚 liberation war）中转折。一场大火几乎将村庄夷为平地。战后，村民们面临选择：是像其他人一样，在平原重建更“现代”的居所，还是固执地、一砖一瓦地按原样复原祖辈的家园？他们选择了后者。这份近乎偏执的坚持，让博仁齐躲过了20世纪各种“现代化”改造的浪潮，奇迹般地保留了最纯粹、最完整的民族复兴时期建筑群风貌。它在1964年被宣布为建筑历史保护区，从此“封存”了那段富庶而优雅的旧时光，成为了整个巴尔干半岛研究该时期社会文化与建筑的“活化石”。`} />
                <InfoRow label="建筑特色" value={`走进博仁齐，你会怀疑自己跌入了一幅用石灰、木材和石板绘就的素雅油画。这里的建筑特色极其统一，却又在细节处千变万化。最震撼的视觉元素，就是那**白得晃眼的墙**——用本地石灰反复粉刷，在巴尔干清澈的阳光下，显得纯净又耀眼。墙体厚重，底层常用粗犷的石块垒砌，给人一种坚固、稳重的安全感。而建筑的灵魂，在于**深色原木**的运用。几乎每一栋两层豪宅的二层，都向外探出一个宽敞的开放式或半封闭式露台，由粗壮精美的木柱支撑。这些木结构——柱子、栏杆、屋檐——被漆成深棕色或近乎黑色，与白墙形成强烈的、戏剧性的对比。屋顶是厚重的**本地石板**，一片片叠压，颜色是沉稳的灰蓝色，与山峦的色调融为一体。窗户高而窄，木制窗棂的几何图案精巧别致。整座村子没有一丝多余的色彩，只有白、深棕、灰蓝的协奏，在四季光影中变幻无穷，宁静而充满力量。`} />
                <InfoRow label="建筑风格" value={`博仁齐是 **“保加利亚民族复兴风格”** 的露天教科书。这种风格并非某种单一的欧洲建筑流派，而是18-19世纪保加利亚在奥斯曼统治下，本土传统与外来元素（通过贸易带来的西欧、俄罗斯、奥斯曼帝国影响）碰撞、融合后催生的独特美学。在这里，你可以清晰地读懂它的“语法”。首先，是强烈的**防御与实用结合**的思维：高而封闭的石砌底层曾用作仓库、畜栏，体现了动荡年代对财富的保护；生活空间则全部置于采光更好、视野更佳的二层。其次，**木结构露台**是其最核心的标志，它不仅是扩展生活空间的巧妙设计，更是家庭社交、眺望风景的“空中客厅”，体现了人们对美好生活的向往。最后，无处不在的**木雕装饰**——露台支柱上的螺旋纹、栏杆上的几何镂空、屋檐下的精致雕花——虽然不像教堂那样繁复，却充满了质朴的、来自民间的生命力和几何美感。这种风格，是保加利亚民族意识觉醒时期，人们在建筑上对自身文化身份最自信、最优雅的一次表达。`} />
                <InfoRow label="文化价值" value={`对于保加利亚人而言，博仁齐远不止是一个旅游点。它是一个民族的“记忆之巢”，保存着关于尊严、传承与社区精神的鲜活样本。在奥斯曼统治后期，这里曾是保加利亚教育、手工艺和商业网络的秘密节点之一，滋养了民族复兴的星星之火。今天，它依然不是一个死气沉沉的博物馆。部分建筑仍有居民居住，他们延续着传统的生活方式，维护着祖屋；另一些被改造成小型博物馆、家庭旅馆和餐馆，让历史得以在当代“有用”地存活下去。它向现代世界展示了另一种可能：发展不一定意味着推倒重来，极致的保护可以与有温度的生活共存。对于每一位来访者，它提供了一种珍贵的“沉浸式”文化体验——你触摸的不仅是300年的木头和石头，更是一种从容不迫的生活哲学，一种在动荡世界中坚守本心的文化韧性。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 博仁齐一日游深度打卡路线攻略：慢节奏全览白墙木顶仙境`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`经典自由行步行路线推荐`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好了，故事听够了，咱们开走！这条**一日游路线**，就按最舒服的节奏来设计。**早上**，建议你从加布罗沃市区乘坐早班车（或自驾）出发，大约半小时就能抵达村口。别急着冲进去，先在入口处的观景台停留五分钟，俯瞰整个村子像白玉和黑檀木镶嵌在山谷里，拍下全景打卡照。**上午**的黄金时间，从主路“博仁齐村街”开始漫步，阳光正好斜射在白墙上，光影效果绝佳。我会带你重点看几栋最具代表性的豪宅外观。**中午**，一定要在村里的传统餐馆（Mehana）解决午餐，尝尝用老壁炉烤出来的食物。**下午**的时光更慵懒，我们去参观开放内部的博物馆老宅，坐在某个木露台上发发呆，听听山泉和鸟鸣。然后沿着石板小径往村子高处走，去教堂坐坐。**傍晚**，如果还有体力，走上村子西侧的小山坡，等待夕阳给所有白墙木顶镀上金边。之后心满意足地返程，或在村里的家庭旅馆住一晚，享受绝版的宁静夜晚。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>波波夫故居（Popova House）的木雕露台</strong>：这大概是全村最上镜的露台了。凑近了看，支撑露台的几根主柱上，雕刻着繁复而优雅的螺旋纹和植物藤蔓纹样，历经百年风雨，木头的纹理与雕工的痕迹融为一体，温润如玉。站在露台下抬头，阳光透过镂空的栏杆，在白色墙壁上投下不断变幻的光影棋盘格。你可以想象，百年前的女主人或许就是坐在这里，一边绣花，一边望着进村的石板路，等待经商的丈夫归来。这露台不是装饰，是家庭生活的舞台中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>圣先知伊利亚教堂（St. Prophet Iliya）的钟声</strong>：这座建于1839年的小教堂，是村子的精神核心。它小巧、朴素，石砌的墙身甚至有些粗粝。但走进内部，你会瞬间被一种温暖的宁静包裹。空气里有淡淡的蜡烛和旧木头的气味。东正教的圣像屏风并不宏大，但圣像的面容在摇曳烛光中显得格外柔和。如果运气好，遇到钟声响起，那古朴、悠远的声音在山谷间回荡，会瞬间洗净你心里所有的浮躁。坐在门外的长椅上，这一刻的安宁，是任何攻略都无法描述的宝藏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>民族志博物馆（原学校建筑）里的生活气息</strong>：这栋建筑曾是该地区的首所学校，现在展示了传统服饰、农具和家居摆设。别匆匆走过展柜。请仔细观察一件件手工刺绣的女装衬衫，上面用红黑丝线绣出的几何图案，每一个符号都可能寓意着祝福或护佑。凑近一个复原的厨房角落，那个巨大的壁炉和黑漆漆的铜壶，仿佛还能闻到炖菜的香气。这里陈列的不是文物，而是刚刚落幕的生活现场。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>通往泉水处的石阶小巷</strong>：随意挑一条从主路岔开的下行石板小巷。石阶被无数双脚磨得光滑如镜，缝隙里长出青苔。巷子窄得只容一人通过，两侧是高高的石墙和白墙。走着走着，你会先听到潺潺水声，清凉的水汽扑面而来——那是村民世代取用的山泉水口。水流从不间断，清冽见底。接一捧水尝尝，那是大山和时间的味道。这条小巷，是连接日常与生命的脉络，充满了最质朴的仪式感。" }} />
            </div>
          </Section>

          <Section title={`5. 博仁齐自由行避坑指南与关键行前须知`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>交通与时间规划是首要“坑”</strong>：博仁齐<strong>没有火车直达</strong>，主要靠公交或自驾。从加布罗沃（Gabrovo）汽车站发车的班次<strong>不多且时间固定</strong>，务必提前在车站查好往返时刻表，或向住宿处主人咨询。错过一班可能意味着等上好几小时。自驾是最佳选择，但村内停车场空间有限，旺季（5-10月）建议早到。<strong>最佳游览季节是春末到秋初</strong>（5月至10月），山花烂漫或秋色浓郁。冬季虽美但部分设施可能关闭，且山路或有冰雪。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>穿对鞋子，尊重“石板路权”</strong>：这里全是<strong>凹凸不平的古老石板路和陡峭的台阶</strong>！请务必、必须、一定要穿一双<strong>最舒适防滑的平底鞋</strong>（运动鞋、徒步鞋为佳），抛弃一切带跟的鞋子，否则你的脚和游览体验都会废掉。另外，村子里仍有常住居民，很多小巷直接通向私宅院落。拍照时请注意礼貌，避免将镜头直接对准居民窗户或私人活动区域，保持安静，尊重这份珍贵的居住氛围。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>享受“无商业化”的纯粹，并做好准备</strong>：博仁齐的魅力在于其未过度开发的原生态。这意味着：<strong>商铺和餐馆很少</strong>，选择有限，且大多在下午较早关门。建议自带一小瓶水和零食备用。纪念品商店卖的多是本地手工木雕、陶器和传统香料，价格实在，可以支持。这里民风淳朴，治安极好，但基本<strong>只使用现金（保加利亚列弗）</strong>，信用卡在大多数小餐馆和家庭旅馆可能无法使用，请提前备好现金。" }} />
            </div>
          </Section>

          <Section title={`6. 博仁齐周边住宿与美食攻略：沉浸式山居体验`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "想真正拥有博仁齐的晨昏，<strong>强烈建议在村里的传统家庭旅馆住上一晚</strong>。推荐 <strong>“House Daskalova”</strong> 或类似的由老宅改造的客栈。它们外表是原汁原味的白墙木窗，内部则温馨舒适，保留了原始的木梁和壁炉，主人会像对待远方亲戚一样欢迎你，早餐的自制果酱和奶酪是城市里尝不到的风味。夜晚，当一日游的游客散去，整个村子归于沉寂，只有星空和风声，这才是博仁齐的灵魂时刻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "餐饮方面，村子里的几家餐馆（Mehana）都提供地道的保加利亚山区菜。一定要试试 <strong>“Chushki Burek”</strong> （奶酪馅烤辣椒）或 <strong>“Kavarma”</strong> （陶罐炖肉），食材新鲜，做法古朴。推荐在 <strong>“Mehana Chuchura”</strong> 的露天座位用餐，身旁可能就是古老的石墙和盛开的绣球花。点一份烤猪肋排配本地酸奶酱，再来一份经典的 <strong>“Shopska Salad”</strong> （西红柿黄瓜洋葱奶酪沙拉），配上一杯保加利亚红酒或“拉基亚”水果白兰地。听着石板路上偶尔传来的脚步声，这顿饭吃的是百分百的山居意境。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从博仁齐驱车大约<strong>20分钟</strong>，就能到达另一个不可错过的宝藏——<strong>埃塔尔露天民族建筑博物馆（Etara Architectural-Ethnographic Complex）</strong>。如果说博仁齐是静止的“住”博物馆，埃塔尔就是动态的“工作”博物馆。它沿一条山溪而建，复原了传统的水车动力作坊群。你可以看到匠人现场操作，用古老的水锤锻造铁器、用水磨碾磨谷物、编织羊毛。这里充满了叮当作响的活力，是了解保加利亚传统手工艺的绝佳窗口。两个地方搭配游览，一静一动，能让你对保加利亚民族复兴时期的生活画卷有更完整的理解。时间充裕的话，还可以顺道探访以幽默和讽刺艺术闻名的<strong>加布罗沃市</strong>，看看那座标志性的“节俭之猫”雕塑，感受保加利亚人独特的智慧与乐观。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "博仁齐的灵魂，在于它那份“固执的完整”。它不仅仅保存了建筑，更保存了建筑与山峦、石板路与泉水、宁静与时光之间那种天衣无缝的关系。来到这里，你不是在参观一个景点，而是在轻轻叩开一扇通往旧时光的门，并受邀进去坐了一会儿，喝了一杯山泉水，听风讲了一个关于坚守与家园的故事。它会让你记住，在这个飞速旋转的世界里，总有一些地方，选择以永恒的姿态，温柔地对抗着时间。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/nesebar-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    内
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">内塞巴尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Nesebar</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/plovdiv-roman-theatre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普罗夫迪夫古罗马剧场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Plovdiv Roman Theatre</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/veliko-tarnovo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    大
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">大特尔诺沃（沙皇之城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Veliko Tarnovo</p>
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
