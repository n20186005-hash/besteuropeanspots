import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科蒂尼亚克旅游攻略：漫步普罗旺斯悬崖洞穴村的奇幻一日游指南',
  description: '探索法国普罗旺斯腹地的科蒂尼亚克（Cotignac），这座背靠80米石灰岩悬崖的奇幻村庄。本深度游攻略带你揭秘古老穴居洞穴、规划完美路线，并提供实用避坑贴士。',
}

export default function CotignacProvenceVillagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/europe' },
            { label: '瓦尔省', href: '/destinations/europe' },
            { label: '科蒂尼亚克', href: '/attractions/cotignac-provence-village' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`科蒂尼亚克・Cotignac・法国・瓦尔省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你厌倦了普罗旺斯那些游人如织的经典小镇，今天这份**科蒂尼亚克私藏旅游攻略**，就是为你准备的。想象一下：一个被橄榄树和葡萄园环绕的典型南法村庄，生活节奏慢得像是凝固在琥珀里。但一抬头，你的呼吸会瞬间屏住——村庄身后，一道高达80米、绵延400米的巨大石灰岩悬崖赫然耸立，崖壁上密密麻麻布满了上百个黝黑的洞穴，像巨蜂的巢穴，又像大地沉默的眼睛。这里就是科蒂尼亚克，一个将田园诗与地质奇观完美融合的秘境。作为你的专属向导，这份**自由行指南**不仅会带你走进那些千年穴居人的历史，还会告诉你如何避开人群，独享悬崖下的咖啡馆时光，体验最地道的南法村居生活。准备好开始一场穿越时空的漫步了吗？`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友，如果你厌倦了普罗旺斯那些游人如织的经典小镇，今天这份<strong>科蒂尼亚克私藏旅游攻略</strong>，就是为你准备的。想象一下：一个被橄榄树和葡萄园环绕的典型南法村庄，生活节奏慢得像是凝固在琥珀里。但一抬头，你的呼吸会瞬间屏住——村庄身后，一道高达80米、绵延400米的巨大石灰岩悬崖赫然耸立，崖壁上密密麻麻布满了上百个黝黑的洞穴，像巨蜂的巢穴，又像大地沉默的眼睛。这里就是科蒂尼亚克，一个将田园诗与地质奇观完美融合的秘境。作为你的专属向导，这份<strong>自由行指南</strong>不仅会带你走进那些千年穴居人的历史，还会告诉你如何避开人群，独享悬崖下的咖啡馆时光，体验最地道的南法村居生活。准备好开始一场穿越时空的漫步了吗？" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`科蒂尼亚克`} />
                <InfoRow label="英文名称" value={`Cotignac`} />
                <InfoRow label="正式名称" value={`Cotignac`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`瓦尔省`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`科蒂尼亚克绝非一个“凭空出现”的风景明信片村庄。它的历史，就镌刻在那面巨大的悬崖上。早在史前时期，这面由松软石灰华（一种多孔石灰岩）构成的悬崖，就成为人类天然的避难所。考古证据显示，这些洞穴被持续使用了数千年。中世纪时期，它们的角色变得更加重要。当时，普罗旺斯地区并不太平，海盗袭击、领主纷争不断。悬崖上的洞穴成为了当地村民完美的防御工事和储藏室。你可以想象，当危险来临，钟声敲响，全村人带着粮食和牲畜，沿着如今已难以辨认的小径攀爬至崖壁上的“空中家园”，居高临下，易守难攻。到了16至18世纪，许多洞穴被改建得更加舒适，出现了石砌的墙面、壁炉甚至窗户，成为名副其实的“崖壁住宅”。法国大革命后，随着地面村庄的发展和安全环境的改善，人们才逐渐从悬崖迁下。因此，科蒂尼亚克的悬崖不仅是一个自然奇观，更是一部立体的、关于人类适应与生存的史书，是普罗旺斯地区独特穴居文化最壮观、最完整的露天博物馆。`} />
                <InfoRow label="建筑特色" value={`科蒂尼亚克的建筑是一场“上下对话”。地面的村庄是经典的普罗旺斯风格：蜜糖色的石头房子挤在蜿蜒的窄巷两侧，陶土瓦的屋顶被岁月磨成了暖红色，彩色的百叶窗半开着，窗台上必定有一盆盛放的天竺葵。鹅卵石铺就的广场上，古老的喷泉永不疲倦地潺潺流水。但所有的精致与柔美，都在你望向北方时，被一种原始的磅礴力量所压倒。那道80米高的悬崖是村庄沉默的巨人，它的主体是粗糙的、多孔的石灰华岩，呈现出一种从奶白到赭石色的渐变，在一天的不同光线里变幻着色彩：清晨是清冷的灰白，正午是闪耀的金黄，黄昏则被染成醉人的玫瑰色。悬崖表面布满了深深的纵向沟壑和蜂窝状的孔洞，这是千万年风雨侵蚀的杰作。而最令人着迷的，是那些镶嵌在崖壁上的洞穴口——它们大小不一，形状各异，有的低矮如野兽巢穴，有的规整如人工开凿的门廊。许多洞口边缘还能看到砖石的痕迹，那是后人加固或改造的证据。这些黑色的洞口与浅色的崖壁形成强烈对比，在视觉上充满神秘感和叙事性，仿佛每一个洞口后，都藏着一个等待被讲述的故事。`} />
                <InfoRow label="建筑风格" value={`在这里谈论“建筑风格”，我们需要分成两层来理解。地面的村庄是纯粹的**普罗旺斯乡土风格**。这种风格的核心是“与自然融为一体”：建筑材料全部取自本地——石灰华石头、陶土、木材；房屋低矮紧凑，以减少冬日的寒风和夏日的酷晒；厚实的石墙提供天然的隔热保温；红陶瓦屋顶坡度平缓；而最具标志性的彩色木制百叶窗（通常是蓝色或绿色），不仅是为了美观，更是为了在烈日午后调节室内光线与温度。这是一种极度务实、充满生活智慧的风格。
而悬崖上的“建筑”，则是一种更为古老和原始的 **“穴居建筑”或“岩石建筑”** 。这不是传统意义上的某种学派风格，而是一种基于地质条件的适应性建造。其核心是利用天然洞穴空间，进行最小限度的人工干预和加固。你可以看到，有些洞穴内部被凿出了规整的房间、壁龛甚至楼梯；洞口用本地石块砌出了门框和挡墙，安装了木门；为了采光，有的洞穴还在外侧崖壁上开凿了细小的窗口。这种风格毫无装饰性可言，一切以功能性、安全性和节省建材为目的。它代表了人类建筑最初始的形态之一——向大地索取庇护所。因此，漫步科蒂尼亚克，你实际上是在同时欣赏两种截然不同的建筑哲学：一种是经过千百年文明陶冶的、充满田园诗情的地面美学；另一种是直接根植于生存本能、充满原始力量感的崖壁奇观。二者的并置与对话，构成了此地无可替代的魔力。`} />
                <InfoRow label="文化价值" value={`对于科蒂尼亚克人而言，悬崖不是背景，而是他们身份认同的核心。它塑造了村落的格局，也深刻影响着当地的文化与生活节奏。每年的夏季，村庄会举办名为“Les Soirées de l‘Aven”的文化之夜，音乐会和戏剧表演有时会在某个经过改造的宏伟洞穴内举行，声学效果不可思议，那是一种在大地子宫中聆听艺术的独特体验。每周二的早晨，村庄主广场上的集市不仅是采购本地奶酪、橄榄油、蜂蜜和薰衣草的地方，更是社交中心。村民们在此交谈，话题可能关于葡萄的收成，也可能关于某处悬崖洞穴最新的维护情况——许多洞穴至今仍被私人拥有，用作酒窖、工作室或储藏间，这份与祖先遗产的日常连接，在现代社会尤为珍贵。
更重要的是，科蒂尼亚克代表了一种可持续的生活智慧。先民利用天然资源（洞穴）建造居所，节省能源和材料；地面村庄的建造同样遵循因地制宜的原则。这种与环境和谱共处的哲学，在今天看来极具启示性。村子没有因为奇观而过度商业化，它安静地保持着生活的本色。游客的到来并未冲淡这里的时间感，你依然能看到老人在广场上下棋，闻到家家户户飘出的炖菜香气。悬崖的存在，仿佛一个永恒的提醒，让生活在这里的人们和到访的我们，不忘敬畏自然，并从历史中汲取平静与坚韧的力量。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 科蒂尼亚克一日游打卡路线攻略：从洞穴探秘到广场咖啡`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行漫步路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好了，攻略来了！要完美体验科蒂尼亚克，我建议你留出一整天时间。**上午（9:00-12:30）**：把车停在村口免费停车场，先别急着进村。让我们从“仰望”开始。沿着村庄北侧的“Chemin de Roquette”小径走，这条路能让你从侧面和远处欣赏悬崖的全景，拍照光线极佳。然后，从“Place de la Mairie”（市政厅广场）进入村庄腹地。重点探索“Rue des Grottes”（洞穴街），这条街直接通向悬崖脚下，你能最近距离观察那些底层洞穴的洞口，有些还装着门和门牌号，非常有趣。**中午（12:30-14:30）**：回到主广场“Place de la Fontaine”（喷泉广场），挑一家有露天座位的餐厅午餐。推荐尝试普罗旺斯炖菜（Ratatouille）或本地山羊奶酪沙拉，配一杯瓦尔省的桃红葡萄酒。**下午（14:30-18:00）**：这是探秘精华时段。在广场上的旅游咨询处获取信息后，强烈建议参加有向导的 **“洞穴之旅”** （通常每日有固定场次），这是安全且能进入部分内部洞穴的唯一方式。向导会讲述精彩的历史故事。之后，沿着“Escaliers”（楼梯巷）等小巷悠闲漫步，逛逛手工艺小店。最后，在日落前，前往村庄西侧的高点，那里有一个小教堂，是**拍摄悬崖与村庄全景的黄金机位**，夕阳会将整个悬崖染成金色。晚餐后，如果恰逢夏季，查查是否有洞穴内的音乐会，为奇幻的一天画上句号。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>圣伯多禄岩洞教堂（Grotte de Saint-Pierre）</strong>：在向导的带领下，你会进入这个悬崖中部的标志性洞穴。它被改造成了一个小巧的礼拜堂。最动人的细节是：粗糙原始的岩壁与精致的祭坛、蜡烛并置。当阳光从洞口斜射进来，照亮空气中飞舞的微尘，光柱恰好落在古老的石雕圣母像上，那种神圣与野性交织的氛围，瞬间将你拉回中世纪信徒在此寻求庇护的虔诚时刻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>“蜂窝”崖壁的质感</strong>：一定要近距离触摸悬崖的岩石（在安全区域）。石灰华岩石轻得超乎想象，表面布满气孔，粗糙而温暖。仔细观察，你会发现岩壁上镶嵌着古老的贝壳化石，这是亿万年前这里曾是海底的沉默证词。光线在无数孔洞中穿梭跳跃，让整面悬崖在午后呈现出一种柔软的、毛茸茸的视觉质感，仿佛巨兽温顺的侧腹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>瀑布脚下的古老磨坊（Le Moulin）</strong>：一股清泉从悬崖中部涌出，形成一道纤细的瀑布，日夜不息地落入下方的水池。瀑布脚下，藏着一座17世纪建造的古老磨坊遗址。水流声是这里永恒的背景音，清凉的水汽扑面而来。站在这里，看着水流千年如一日地击打石轮（虽已停转），你能生动地感受到古人如何巧妙地利用每一份自然馈赠——洞穴用于居住，泉水用于动力，这是生态村庄的古老典范。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>广场上的百年悬铃木与喷泉</strong>：喷泉广场是村庄的心脏。广场中央的喷泉建于18世纪，雕刻着已经模糊的纹章。而真正的主角是那几棵巨大的百年悬铃木，它们的树冠交织成一片绿色的苍穹，投下令人心安的光斑。午后，坐在树下的咖啡馆，点一杯Pastis（茴香酒），看着光影在蜜色墙壁上缓慢移动，听着喷泉的叮咚声和法语的低语呢喃，你会明白什么叫“普罗旺斯的时光”。" }} />
            </div>
          </Section>

          <Section title={`5. 科蒂尼亚克自由行避坑指南与行前须知`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <li className="text-gray-700 leading-relaxed mb-2 ml-4 list-disc" dangerouslySetInnerHTML={{ __html: "  <strong>最佳游览时间</strong>：<strong>避开7-8月中午</strong>！普罗旺斯夏季炎热，悬崖反射阳光，广场和狭窄街道在正午会非常闷热。最佳时间是<strong>5-6月、9-10月</strong>的清晨或傍晚。春季野花烂漫，秋季葡萄丰收，气候宜人。如果想看周二集市的热闹，请早到（8点开始），但要做好人多拥挤的准备。" }} />
              <li className="text-gray-700 leading-relaxed mb-2 ml-4 list-disc" dangerouslySetInnerHTML={{ __html: "  <strong>穿着与装备建议</strong>：<strong>务必穿一双防滑、支撑好的徒步鞋或运动鞋</strong>！探索村庄需要上下石板坡路，如果想走近悬崖小径，路面更是崎岖不平。女士请放弃高跟鞋。夏季帽子、墨镜、防晒霜必不可少。春秋季早晚温差大，带一件薄外套。带一个手电筒或确保手机有电，部分洞穴内部即使白天也较暗（参加导览游时有用）。" }} />
              <li className="text-gray-700 leading-relaxed mb-2 ml-4 list-disc" dangerouslySetInnerHTML={{ __html: "  <strong>交通与参观避坑</strong>：村子很小，<strong>自驾是最佳方式</strong>，村口有免费停车场。请注意，<strong>切勿自行攀爬尝试进入未开放的洞穴</strong>！岩壁脆弱且无保护措施，极其危险。所有有价值的内部参观都必须通过旅游信息处报名付费导览团（通常有法语和英语场次）。提前在官网或致电信息处确认当日导览时间，避免扑空。村庄部分小巷极窄，开车进入核心区非常困难且容易刮蹭，强烈建议停外围步行。" }} />
            </div>
          </Section>

          <Section title={`6. 科蒂尼亚克周边住宿与美食攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科蒂尼亚克本身有几家非常迷人的<strong>家庭旅馆（Chambre d‘Hôte）</strong>，它们通常由老石头房子改造而成，主人热情好客，早餐能吃到自家制的果酱和新鲜烘焙的面包。如果你想体验“醒来就在风景画中”，可以选择这类住宿，推开窗就能看到悬崖。若追求更多酒店服务，可以住在车程15-20分钟内的周边小镇，如“Entrecasteaux”或“Salernes”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "餐饮方面，喷泉广场上的几家餐厅都不会让你失望。推荐<strong>Le Café de la Fontaine</strong>，它的露天座位正对瀑布视野。必点一道用本地黑松露调味的菜肴（冬季），或者“Daube Provençale”（普罗旺斯红酒炖牛肉），肉质酥烂，香气浓郁。另一家<strong>La Table du Moulin</strong>，位于老磨坊旁，环境更加清幽，擅长烹饪时令鱼鲜。别忘了品尝瓦尔省的<strong>桃红葡萄酒</strong>，清爽的口感非常适合搭配当地偏重橄榄油和香草的菜肴。饭后，去本地的面包店买一个“Tarte Tropézienne”（奶油布里欧修面包），这是普罗旺斯地区的甜蜜骄傲。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果时间充裕，强烈推荐两个方向进行延伸探索：" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>阿尔蒂比河的隐秘峡谷（Gorges de l‘Artuby）</strong>：驾车向东北方向约30分钟，你会进入一片壮丽的石灰岩峡谷区。这里是攀岩和徒步爱好者的天堂。最著名的“Pont de l‘Artuby”是欧洲最高的公路桥之一，站在桥上俯瞰深达180米的峡谷，令人腿软又震撼。与科蒂尼亚克的垂直崖壁不同，这里展现的是大地被水流深切后的雄伟剖面。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>萨拉贡（Salagon）博物馆与花园</strong>：驾车向西约20分钟，到达“Mane”小镇。这里的萨拉贡修道院拥有一个令人惊叹的<strong>民族植物学花园</strong>，按照中世纪用途划分成香料园、药用园等。它将普罗旺斯的植物与文化历史生动连接，让你从另一个维度理解这片土地的人文与自然。参观完科蒂尼亚克“硬核”的生存历史后，来这里感受南法温柔、馥郁的植物智慧，是完美的补充。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科蒂尼亚克的灵魂，在于那种“向上的庇护”与“向下的生活”之间形成的奇妙张力。悬崖是沉默的史书，记载着恐惧、坚韧与生存的智慧；地面村庄是流淌的诗歌，吟唱着阳光、美食与日常的欢愉。在这里，你不仅能拍到一张令人惊叹的照片，更能触摸到时间的不同层次，感受到人类如何在壮丽的自然面前，既心存敬畏，又努力经营出一份温暖、甜美、具体而微的生活。这大概就是普罗旺斯最深邃的魅力——它永远不止于薰衣草田和向日葵，更在于土地与人的故事。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/pont-du-gard" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    加
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">加尔桥</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pont du Gard</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/forteresse-de-salses" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨尔斯要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Forteresse de Salses</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/talmont-sur-gironde" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    吉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">吉伦特河畔塔尔蒙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Talmont-sur-Gironde</p>
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
