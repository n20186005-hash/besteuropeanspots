import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃尔堡旅游攻略：漫步在“几何奇迹”中的中世纪渔港自由行指南',
  description: '探索荷兰埃尔堡(Elburg)深度游攻略，揭秘完美方形中世纪城墙网格与渔港风情。提供完整路线、避坑指南与小众玩法。',
}

export default function ElburgPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '埃尔堡', href: '/attractions/elburg' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`埃尔堡・Elburg・荷兰・海尔德兰省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你已经看腻了阿姆斯特丹的运河和风车村的明信片风景，今天这份 埃尔堡私藏旅游攻略 ，就带你躲开人潮，钻进荷兰东部一个“强迫症患者”都会爱上的中世纪小镇。埃尔堡就像一个被时光精心封存的琥珀，它的核心秘密就藏在地图上——一个近乎完美得不可思议的正方形城墙，里面包裹着棋盘格般整齐的街道。这可不是现代城市规划的产物，而是源于14世纪一次悲壮的重生。作为你的专属向导，这份 埃尔堡自由行指南 将带你抚摸那些被海水气息浸润了数百年的砖石，走过吱呀作响的木筋屋，品尝最地道的烟熏鳗鱼。这里没有大批旅行团，只有宁静的运河、慵懒的渔船和当地人友好的微笑。准备好，我们这就开启一场穿越回中世纪荷兰的 深度游 。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，如果你已经看腻了阿姆斯特丹的运河和风车村的明信片风景，今天这份 埃尔堡私藏旅游攻略 ，就带你躲开人潮，钻进荷兰东部一个“强迫症患者”都会爱上的中世纪小镇。埃尔堡就像一个被时光精心封存的琥珀，它的核心秘密就藏在地图上——一个近乎完美得不可思议的正方形城墙，里面包裹着棋盘格般整齐的街道。这可不是现代城市规划的产物，而是源于14世纪一次悲壮的重生。作为你的专属向导，这份 埃尔堡自由行指南 将带你抚摸那些被海水气息浸润了数百年的砖石，走过吱呀作响的木筋屋，品尝最地道的烟熏鳗鱼。这里没有大批旅行团，只有宁静的运河、慵懒的渔船和当地人友好的微笑。准备好，我们这就开启一场穿越回中世纪荷兰的 深度游 。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`埃尔堡`} />
                <InfoRow label="英文名称" value={`Elburg`} />
                <InfoRow label="正式名称" value={`Elburg`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`海尔德兰省`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`别看埃尔堡现在恬静如水，它的历史可是惊心动魄。早在13世纪，它只是一个临海（当时还是须德海）的普通渔村。然而，一场毁灭性的洪水（圣伊丽莎白洪水）在14世纪末几乎将旧镇完全摧毁。灾难后，埃尔堡迎来了一位极具远见的领主——范·彼尔斯坦的约翰。他做了一个大胆决定：不退反进，将整个城镇向东南方向内陆迁移约1.5公里，并按照当时最先进（也最奢侈）的军事防御理念和城市规划思想，从头建造一座“理想城市”。于是，这座崭新的埃尔堡在1392年至1396年间拔地而起，其核心就是一个边长约350米、带有护城河和防御土墙的完美正方形。这在当时欧洲是极其罕见和昂贵的工程，其目的是打造一个易守难攻、管理高效的据点。它不仅是中世纪荷兰城市规划的罕见实物标本，更见证了荷兰人与大海搏斗、在灾难中重塑家园的顽强精神。相比于后来文艺复兴时期的“理想城市”理论，埃尔堡是一个更早、更朴实的实践，是研究欧洲中世纪晚期城镇军事、社会与空间结构的活化石。`} />
                <InfoRow label="建筑特色" value={`走在埃尔堡，你会被一种奇妙的秩序感包围。最震撼的无疑是那道完整的 中世纪城墙 。它不是冰冷的巨石，而是由深棕红色的烧制砖块砌成，砖块不大，排列紧密，历经风雨后色泽温润。城墙不高，但非常敦实，顶部是缓坡状的草地，你可以直接走上去。四角曾有圆形的角楼，如今只存基座。城墙外，是宽阔的护城河（现在是宁静的运河），倒映着墙体和绿树。走进城内， 街道的几何精准度 令人惊叹。两条主干道（Voorstraat和Achterstraat）笔直地十字交叉，将正方形内部分割成四个几乎均等的矩形街区，次级小巷再进一步划分，形成一个个豆腐块似的宅基。房屋大多是经典的 荷兰木筋屋 ，黑白对比鲜明，但埃尔堡的许多房子外墙覆盖着一层精致的仿砖瓷砖，在阳光下泛着釉光。屋顶是陡峭的红色陶瓦，烟囱细长。一切都在方正的框架内演绎着变化，这种严谨与生机并存的美学，是埃尔堡建筑的灵魂。`} />
                <InfoRow label="建筑风格" value={`严格来说，埃尔堡的整体 布局风格 是典型的 中世纪晚期防御型城镇规划 ，深受当时军事工程学的影响。其方形网格并非为了美观，而是出于极致的实用主义：便于快速调兵防御、最大化利用土地、并方便管理和收税。这种“网格规划”在中世纪欧洲城堡附属城镇中偶有出现，但像埃尔堡这样规模完整、保存至今的，堪称凤毛麟角。而在单体建筑上，则主要体现为 荷兰传统民居风格 。其中最主要的是 木骨架结构（俗称木筋屋），即用深色木梁构成房屋骨架，中间用砖或灰泥填充，刷成白色，形成强烈的色彩与线条对比。这种风格在荷兰黄金时代盛行，既节省建材又坚固。埃尔堡的许多房屋虽历经翻新，但依然保留了这一核心结构。此外，你也能看到一些 新古典主义 的装饰元素出现在门楣或窗楣上，那是后世修缮时增添的优雅笔触。所以，埃尔堡是两种风格的完美融合：宏观上，是冷峻理性的军事网格；微观上，是温暖感性的传统家园。`} />
                <InfoRow label="文化价值" value={`对于今天的埃尔堡人来说，这座方正的小镇不是博物馆，而是他们鲜活的家园。城墙不仅是景点，更是日常散步遛狗的后花园；护城河里有天鹅嬉戏，也是孩子们练习划船的水道。这种 历史与生活的无缝衔接 ，是埃尔堡最动人的文化价值。它向现代人展示了一种可能：如何在不沦为僵硬标本的前提下，完整地保存历史遗产。小镇每年举办的“渔夫节”等传统活动，让历史记忆得以延续。对于现代社会，埃尔堡是一个关于 “秩序与社区” 的永恒启示。它的网格布局在当代城市规划学界被反复研究，其高效、公平的空间分配理念至今仍有借鉴意义。更重要的是，它代表了一种在逆境中（洪水后）依靠严谨规划和社区协作重建美好生活的精神。来到这里的游客，不仅能拍下几何感极强的照片，更能感受到一种被精心呵护的、缓慢而笃定的时光节奏，这是在许多喧嚣景点中无法获得的治愈力量。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 埃尔堡一日游打卡路线攻略：从城墙漫步到渔港夕阳`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行步行路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的向导，我们最好挑一个晴朗的早晨开始这次 埃尔堡深度游 。建议从 南城门（Vispoort） 进入，这是中世纪的主要入口，气势恢宏。穿过门洞的瞬间，你就正式踏入了那个方正的世界。先别急着往里冲，沿着城门旁的阶梯走上 城墙顶部 ，来一次顺时针的漫步。从高处俯瞰整个棋盘格小镇的全貌，护城河如一条碧绿的丝带环绕。大约半小时后，从东侧下来，钻进 Voorstraat街 ，这是镇中心主街，两旁是精致的商铺和咖啡馆。在街中段别忘了拐进 埃尔堡博物馆（Museum Elburg） ，它由一座中世纪女修道院和武器库改造而成，能帮你快速理清小镇的前世今生。午餐后，去北边的 渔港（Haven） 区，这里停靠着彩色的老式帆船和渔船，海风气息扑面而来。随后探访附近的 大教堂（Grote of Sint Nicolaaskerk） ，虽然内部经过改建，但其宏大的空间感仍值得感受。下午晚些时候，去 小镇广场（Beestenmarkt） 和周围的巷弄随意逛逛，寻找那些最有味道的木筋屋细节。日落时分，一定要回到 西侧的城墙 或港口边，看夕阳将砖墙、帆船桅杆和运河染成金色。一天下来，你正好画了一个完美的“口”字，将埃尔堡的精华尽收眼底。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  Vischpoort（鱼市门）的阴影与光斑：这座北城门曾是渔获进出的要道。下午阳光斜射时，穿过拱门厚壁上的箭窗，会在内侧的石板地上投下清晰而狭长的菱形光斑。触摸城门内部粗糙的砖石，冰凉而坚实，上面还留有当年马车铁轮摩擦出的凹痕。站在门洞中央，仿佛能听到几个世纪前渔夫的吆喝声、海浪声与城门开合的吱呀声在这里交汇、回荡。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  小巷地面的“琴键”石板：在Kerkstraat等次要小巷，注意脚下。这里的铺路石板并非随意铺设，而是采用长条状青石与普通方石间隔排列的方式，远远看去，就像一架巨大的、伸向远方的地面钢琴琴键。这种铺设方式不仅美观，更兼具防滑和引导排水的实用功能。阳光照在湿润的青石上，泛起幽幽的冷光，与暖色调的方石形成微妙对话，是小镇工匠朴素美学的极致体现。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  渔港木屋的彩色门与铜把手：渔港边一排排小巧的木屋，曾是渔民仓库。如今它们漆成薄荷绿、鹅蛋黄、淡天蓝等柔和色彩。请凑近看那些厚重的木门，上面钉着巨大的、手工锻打的铁质铰链和门扣，岁月让它们覆盖上一层斑驳的铜绿。其中不少门环被设计成海豚、船锚的形状。轻轻叩响，声音沉闷而厚重，仿佛在敲击一段沉睡的航海记忆。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  城墙顶部的“秘密花园”视角：从任何一段城墙的土坡走上去，你都会获得一个独特的私密视角。这里草皮柔软，经常开着小野花。从这个高度平视，你可以清晰地看到城内屋顶的陶瓦连绵起伏，烟囱像树林般矗立。望向城外，护城河对岸的现代住宅区与城内中世纪景观形成宁静的对比。找一个树荫下的长椅坐下，看本地居民在城墙下遛狗、骑车，你会发现，历史遗产最美好的状态，正是如此自然地融入日常的呼吸之中。`}</p>
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  时机就是一切，避开无形的人潮：埃尔堡虽小众，但周末和夏季午后，荷兰本地家庭游客会显著增多。最佳游览时间是工作日（周二至周四）的上午，或傍晚时分。小镇不大，2-3小时可走完主要景点，但建议预留大半天来感受其宁静。如果想拍摄空无一人的街道和倒影，清晨8点前是黄金时间。另外，留意官网，避免与小镇大型活动日撞期（如渔夫节），否则你会看到完全不同的、热闹非凡但也拥挤的埃尔堡。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  穿着与交通的明智之选：小镇街道以鹅卵石和砖石为主，请务必穿一双绝对舒适、鞋底防滑的步行鞋，高跟鞋和硬底鞋会是噩梦。埃尔堡火车站距离老城约有1.5公里步行距离，沿途风景不错，但拖着大行李箱会很不便。如果行李多，建议提前联系住宿是否提供接送，或考虑乘坐出租车（车不多，需预约）。自驾者可将车停在城墙外的指定停车场（如‘P+R Elburg’），切勿尝试开车进城，小巷极窄且多为步行区。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  享受宁静，也保持警觉：这里治安很好，但仍需保持基本警惕。在咖啡馆露天座休息时，包不要随意放在空椅子上。由于游客相对少，一些小巷非常安静，单独游览时建议保持手机电量充足。此外，护城河和运河没有护栏，拍照或行走时，尤其是带小朋友，需注意脚下安全。最后，尊重当地居民隐私，很多美丽木筋屋是私人住宅，拍照时避免过于贴近窗户或庭院。`}</p>
            </div>
          </Section>

          <Section title={`6. 埃尔堡周边住宿与美食攻略：住在历史中，尝尽鲜滋味`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`想真正沉浸在中世纪氛围中，强烈推荐住在老城墙内的特色民宿（B&B）。许多都由历史木筋屋改造，房间低矮但极具风情，木梁裸露，清晨会被透过古老窗格的光线唤醒。例如“Bed & Breakfast De Kap那里”就坐落在一栋迷人的老建筑内。如果追求更多酒店设施，可以住在城外步行可达的现代酒店，如Van der Valk Hotel，性价比高，且能远眺古城风貌。美食方面，来到渔港，怎能不尝鱼？港口边的“Visrestaurant De Smaeck van Elburg”是品尝新鲜捕获的鲈鱼、鳕鱼或经典荷兰鱼汤（Vissoep）的好去处。想吃点更地道的，可以去老城中心的“‘t Weeshuus”，这家餐厅也位于历史建筑内，提供改良的荷兰传统菜肴，环境温馨。别忘了点一份当地的烟熏鳗鱼（gerookte paling），配上一杯啤酒，才是完整的埃尔堡体验。下午茶推荐去“Café-Restaurant De Oude Wal”，坐在运河边，点一份现做的荷兰苹果派（appeltaart）加奶油，看船只缓缓划过，时光仿佛都慢了下来。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  须德海博物馆（Zuiderzeemuseum），恩克赫伊曾：从埃尔堡开车或乘公交约20分钟，就能到达这个独一无二的户外博物馆。它分为室内馆和室外馆两部分，室外馆简直是一个“搬”来的旧须德海沿岸村庄！真实的 historic buildings、渔船、从各地迁移重建的教堂、邮局、奶酪作坊……工作人员穿着传统服饰，演示着百年前的技艺。这里能让你更宏观、更生动地理解埃尔堡所在的须德海区域文化，绝对是深度游的完美延伸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  “光明之地”（De Lichtstad），德龙滕：如果你对现代艺术和奇特景观感兴趣，不妨驱车半小时前往附近的德龙滕（Dronten）。这里的田野中，矗立着一座名为“光明之地”的巨型混凝土废弃无线电望远镜。它造型极具未来感和废墟美学，与周围平坦的农田形成超现实对比。这里是摄影师和喜欢探索非常规景点的旅行者的秘密基地，尤其在日落时分，景象极为震撼。从极致规整的中世纪网格，到这片荒原上的现代主义废墟，会是一场有趣的思想碰撞。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`埃尔堡的灵魂，在于那份极致的几何秩序与鲜活的生活气息之间达成的美妙平衡。它告诉我们，最严谨的规划之下，可以生长出最温暖的人情；最方正的结构之中，能够容纳最柔软的时光。这里没有惊心动魄的故事，只有被海水、砖石和绿意温柔包裹的日常，一种被精心测量过、却又无比从容的生活诗篇。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/koppelpoort" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿默斯福特中世纪城门</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Koppelpoort</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kasteel-de-cleve" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克莱沃城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kasteel de Cleve</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/zutphen-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    聚
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">聚特芬古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Zutphen Old Town</p>
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
