import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '塔西安神庙 Tarxien Temples｜探秘五千年前的地中海巨石文明与螺旋谜题 - 最佳欧洲景点',
  description: '说实话，第一眼看到塔西安神庙，你可能会有点懵。它不是雅典卫城那样巍然矗立在山巅的宏伟遗迹，而是低调地“嵌”在马耳他岛东南部一个安静居民区的边缘。穿过一道不起眼的铁门，走过一小段缓坡，那片被现代保护棚笼罩着的、泛着蜂蜜色的巨石阵就突然出现在你眼前。那种感觉很奇怪，就像不小心闯进了一个被时间遗忘的后院，...',
}

export default function TarxienTemplesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '马耳他', href: '/destinations/malta' },
            { label: '塔西安神庙', href: '/attractions/tarxien-temples' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`塔西安神庙・Tarxien Temples・马耳他・塔西安`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，第一眼看到塔西安神庙，你可能会有点懵。它不是雅典卫城那样巍然矗立在山巅的宏伟遗迹，而是低调地“嵌”在马耳他岛东南部一个安静居民区的边缘。穿过一道不起眼的铁门，走过一小段缓坡，那片被现代保护棚笼罩着的、泛着蜂蜜色的巨石阵就突然出现在你眼前。那种感觉很奇怪，就像不小心闯进了一个被时间遗忘的后院，而隔壁就是晾着衣服的普通民宅。风很大，带着地中海特有的咸味和干燥的尘土气息，吹过那些屹立了五千年的石头，发出低沉的呜咽。阳光透过棚顶的格栅洒下来，在凹凸不平的巨石表面切割出明明暗暗的光影，让那些刻在上面的螺旋纹和动物图案仿佛在缓慢蠕动。
蹲下身，凑近去看那些石块。指尖触摸到的石灰岩表面，被五千年的风雨打磨得粗糙而温暖，有些地方还残留着当年工匠用燧石工具雕刻时留下的、细密而有力的划痕。最震撼的是一种视觉与嗅觉的混合冲击：在一些祭祀用的石坛表面，你能清晰地看到一种深深的、发黑的赭红色渗入石头的肌理——考古学家说，那是牛血祭祀留下的痕迹。闭上眼睛，你几乎能闻到那股浓烈的、带着铁锈味的腥气，能听到石器时代祭司低沉的吟唱与牲口的喘息。这些石头不是冰冷的展品，它们是一部用石头和血液写就的、活生生的史书。
这里最打动人心的，是一种极致的“反差感”。神庙的外面，是21世纪汽车的鸣笛和孩子们的嬉闹；神庙的里面，却封印着人类文明童年时期最虔诚、最狂野的梦。那些精美的螺旋纹、植物浮雕和肥胖的女性雕像（被考古学家昵称为“马耳他维纳斯”），诉说着一个崇拜大地母神、生死轮回的古老民族。他们耗尽数代人之力，将这些数十吨的巨石从远方运来，精心雕琢，只为建造一座与神灵沟通的殿堂。站在中央庭院，你会感到一种渺小，不是对规模的敬畏，而是对时间深度的晕眩。我们和这些雕刻者之间，隔着两百代人的距离，但我们凝视这些螺旋时所产生的、那种对宇宙和生命奥秘的莫名悸动，或许并无不同。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`说实话，第一眼看到塔西安神庙，你可能会有点懵。它不是雅典卫城那样巍然矗立在山巅的宏伟遗迹，而是低调地“嵌”在马耳他岛东南部一个安静居民区的边缘。穿过一道不起眼的铁门，走过一小段缓坡，那片被现代保护棚笼罩着的、泛着蜂蜜色的巨石阵就突然出现在你眼前。那种感觉很奇怪，就像不小心闯进了一个被时间遗忘的后院，而隔壁就是晾着衣服的普通民宅。风很大，带着地中海特有的咸味和干燥的尘土气息，吹过那些屹立了五千年的石头，发出低沉的呜咽。阳光透过棚顶的格栅洒下来，在凹凸不平的巨石表面切割出明明暗暗的光影，让那些刻在上面的螺旋纹和动物图案仿佛在缓慢蠕动。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`蹲下身，凑近去看那些石块。指尖触摸到的石灰岩表面，被五千年的风雨打磨得粗糙而温暖，有些地方还残留着当年工匠用燧石工具雕刻时留下的、细密而有力的划痕。最震撼的是一种视觉与嗅觉的混合冲击：在一些祭祀用的石坛表面，你能清晰地看到一种深深的、发黑的赭红色渗入石头的肌理——考古学家说，那是牛血祭祀留下的痕迹。闭上眼睛，你几乎能闻到那股浓烈的、带着铁锈味的腥气，能听到石器时代祭司低沉的吟唱与牲口的喘息。这些石头不是冰冷的展品，它们是一部用石头和血液写就的、活生生的史书。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里最打动人心的，是一种极致的“反差感”。神庙的外面，是21世纪汽车的鸣笛和孩子们的嬉闹；神庙的里面，却封印着人类文明童年时期最虔诚、最狂野的梦。那些精美的螺旋纹、植物浮雕和肥胖的女性雕像（被考古学家昵称为“马耳他维纳斯”），诉说着一个崇拜大地母神、生死轮回的古老民族。他们耗尽数代人之力，将这些数十吨的巨石从远方运来，精心雕琢，只为建造一座与神灵沟通的殿堂。站在中央庭院，你会感到一种渺小，不是对规模的敬畏，而是对时间深度的晕眩。我们和这些雕刻者之间，隔着两百代人的距离，但我们凝视这些螺旋时所产生的、那种对宇宙和生命奥秘的莫名悸动，或许并无不同。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`塔西安神庙`} />
                <InfoRow label="英文名称" value={`Tarxien Temples`} />
                <InfoRow label="正式名称" value={`Tarxien Temples`} />
                <InfoRow label="国家" value={`马耳他`} />
                <InfoRow label="城市" value={`塔西安`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`马耳他群岛巨石神庙文化的巅峰之作，是史前地中海世界最复杂、装饰最丰富的宗教建筑群之一。`} />
                <InfoRow label="建筑特色" value={`由四座相连的、以巨大石灰岩板精心垒砌的椭圆形神殿组成，内部布满精美的史前浮雕与雕像。`} />
                <InfoRow label="建筑风格" value={`马耳他巨石神庙建筑，其特点是运用“托梁系统”建造的半椭圆室和复杂的内部隔间设计。`} />
                <InfoRow label="文化价值" value={`为理解公元前3600-2500年间马耳他先民的社会组织、宗教信仰和艺术成就提供了无可替代的实物证据，其螺旋纹饰被视为该文明的象征符号。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年开放，周一至周日，上午9:00至下午17:00。最后入场时间为下午16:30。全年无休，但在圣诞节、新年和耶稣受难日这三个公共假日会关闭。夏季（6月至9月）午后非常炎热，建议清晨或傍晚游览。有时会因恶劣天气或必要的考古维护工作而临时关闭，出行前建议在其官网或社交媒体页面确认。`} />
              <InfoRow label="门票价格" value={`成人票价为6.50欧元。60岁以上老年人、12-17岁青少年、以及全日制学生凭有效证件可享受5欧元优惠票价。12岁以下儿童免费入场。持有马耳他遗产多景点通票（Heritage Malta Multisite Pass）可包含此景点。门票在现场售票处购买，支持现金和主要信用卡。`} />
              <InfoRow label="地址" value={`Neolithic Temples Street, Tarxien, TXN 1063, Malta`} />
              <InfoRow label="交通方式" value={`从马耳他国际机场（MLA）出发最方便。最推荐的方式是搭乘出租车或预约网约车（如Bolt、eCabs），车程约15-20分钟，费用约15-20欧元。若从首都瓦莱塔出发，可乘坐公共巴士：在瓦莱塔巴士总站乘坐线路81、82或85路，在“Tarxien”站下车，车程约25-35分钟，巴士班次频繁，约每15-20分钟一班。下车后沿指示牌步行约5-7分钟即可到达。马耳他公交票可在上车时向司机购买，单次票2欧元（夏季）/1.5欧元（冬季），两小时内有效，也可购买更划算的7天无限次乘车卡。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`塔西安的故事，始于一片农田之下的漫长沉睡。在超过四千年的时间里，它被泥土和荒草彻底掩埋，当地农民在上面耕作、生活，完全不知道脚下踩着的是一个震惊世界的秘密。转变发生在1913年，一个当地农夫约瑟夫·博格在犁地时，他的犁头突然卡住了——不是碰到普通的石头，而是一块巨大得异乎寻常、且带有明显人工雕琢痕迹的石灰岩板。他报告了这一发现，但第一次世界大战的炮火延缓了一切。直到1920年，马耳他著名的考古学家特米斯托克勒斯·扎米特爵士才正式主持发掘。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`随着泥土被一层层小心地剥离，一个失落的世界逐渐显露真容。扎米特爵士和他的团队惊呆了：他们发现的不是单一建筑，而是一个由四座相互连通的神庙组成的庞大复合体，其布局之复杂、雕刻之精美，完全颠覆了当时人们对欧洲史前文明的认知。最古老的部分可以追溯到公元前3600年左右（即Ġgantija时期），而最晚近的扩建和使用则持续到了公元前2500年（即Tarxien时期）。这些神庙不是一次建成的，而是在长达千年的时光里，由一代又一代人不断增建、改造，就像一个不断生长的有机生命体，记录着这个文明的兴起、繁荣与最终的谜之沉寂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这个文明没有留下文字，但石头就是他们的语言。在东庙，考古学家发现了巨大的“胖夫人”雕像残骸，她的臀部丰满得夸张，脚踝纤细，被认为是大地母神或丰产女神的具体化身，是整个社会信仰的核心。在中央神庙，那个著名的“动物浮雕带”栩栩如生：一头公牛、一头母猪和一窝小猪，这很可能与献祭仪式有关。而无处不在的螺旋纹饰，从墙壁到祭坛，像藤蔓一样蔓延，被学者们解释为生命、轮回或无限的水的象征。这些雕刻的精细程度令人叹为观止，证明当时的工匠已经掌握了高度成熟的石雕技术，并且拥有一个能够支撑如此非生产性奢华工程的高度组织化社会。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，大约在公元前2500年之后，一切活动戛然而止。塔西安神庙被有意地废弃了。大量的考古证据表明，这不是一场突如其来的灾难导致的匆忙逃离，而更像是一种庄重的“封存”。入口被用石块小心地封堵，一些重要的雕像和祭器被整齐地放置。然后，这个创造了马耳他巨石神庙奇迹的民族，就从历史上消失了，只留下这些沉默的巨石。他们去了哪里？为何离开？是资源枯竭、气候变迁，还是外敌入侵？至今没有确切的答案。这层神秘的面纱，让塔西安在学术价值之外，更增添了一份令人着迷的苍凉与忧伤。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在青铜时代晚期（约公元前2400年后），这片神圣之地被后来者用作火葬墓地，但他们对这些宏伟建筑的意义显然已一无所知。再往后，便是漫长的遗忘。直到二十世纪的重见天日，它被联合国教科文组织列为世界文化遗产，那座巨大的保护棚在2015年建成，为这些脆弱的石刻遮风挡雨。今天的塔西安，就像一个时空胶囊，静静地躺在现代社区的怀抱里，提醒着我们：在金字塔尚未建起、巨石阵还在规划之时，地中海的这个小岛上，已经绽放出了人类早期文明一朵极其绚烂而怪异的花。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`一次完美的塔西安深度游，关键在于“慢”和“想象”。建议你在早上九点开门时就抵达，这时光线柔和，游客稀少，更能感受遗迹的静谧与神圣气息。整体游览时间建议预留2-3小时，这绝非走马观花，而是允许你长时间驻足、观察细节、并在那些关键点位展开想象的翅膀。路线是单向且清晰的，围绕着保护棚下的遗址展开，但你的注意力应该像探照灯一样，从宏大的布局慢慢聚焦到最微小的刻痕上。这样的节奏能让你从最初的视觉震撼，逐步深入到对那个失落文明的精神世界的理解与共鸣之中。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双舒适且鞋底防滑的鞋子，遗址内是原始的石灰岩地面，粗糙且可能因露水而湿滑。马耳他阳光极其强烈，哪怕在保护棚下，也务必戴好帽子、涂抹高倍数防晒霜并携带足量饮用水。强烈建议在参观前做些功课或租用语音导览（如有提供），否则你看到的可能只是一堆“有花纹的旧石头”而错过无数精彩细节。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从入口处的缓坡向下走，先不要急于进入，在坡道尽头停下，花五分钟静静凝视整个神庙群的全景，试着在脑海中抹去那座现代保护棚，想象它五千年前矗立在蓝天下的原始模样。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先靠近东庙的入口，仔细端详那尊残缺的“胖夫人”巨石雕像复制品（真品在马耳他国家考古博物馆），感受那种夸张的、强调生育与丰饶的原始艺术力量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着参观步道绕到中央庙宇的侧面，蹲下来，让视线与墙壁齐平，近距离观察那条著名的动物浮雕带，看石头上牡牛肌肉的线条和母猪慵懒的神态。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在连接不同庙宇的通道处停留，用手（如果可以的话）或目光抚摸两侧巨石墙接缝的严丝合缝，惊叹于史前工匠在没有金属工具的情况下实现的惊人精度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到遗址的核心区域——那个有着复杂螺旋纹饰的大型石祭坛前，绕着它走一圈，从不同角度观察这些螺旋如何交织缠绕，思考它们可能代表的宇宙观。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`不要错过散落在各处的、用于搬运巨石的“轨道石球”，试着推一推（当然纹丝不动），直观地感受当年工程的艰巨与先民的协作智慧。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在参观路线的中段，找一块阴影处的长凳坐下，闭上眼睛，只听风声和远处的市井声，尝试“听”出这片空间在祭祀时的鼓声与吟唱。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，在出口附近的复原模型和图文展板区花上二十分钟，将你刚才看到的碎片化景象，在脑中拼合成一个动态的、活生生的史前社会图景。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`保护棚入口内侧的坡道中段`}</h4>
                  <p className="text-sm text-gray-700">{`利用坡道的栏杆作为前景框架，拍摄神庙群的全景，上午的光线从东侧打入，能为巨石镀上一层温暖的金色。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`东庙“胖夫人”雕像的斜侧方`}</h4>
                  <p className="text-sm text-gray-700">{`蹲下采用低角度仰拍，将巨大的雕像残骸与背后深邃的庙宇空间一同纳入镜头，营造神圣而神秘的氛围。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`中央庭院螺旋祭坛的特写`}</h4>
                  <p className="text-sm text-gray-700">{`使用手机或相机的微距模式，在阳光侧射的上午或午后，贴近拍摄螺旋纹饰的细节，让光影突出雕刻的深浅，捕捉石头的质感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从连接通道的内侧向外拍`}</h4>
                  <p className="text-sm text-gray-700">{`站在一个庙宇的通道口，拍摄通向另一个庙宇的深邃视角，利用巨石墙壁形成的天然引导线，构成一幅充满几何美感和纵深感的画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`将现代元素与古老遗迹结合`}</h4>
                  <p className="text-sm text-gray-700">{`在参观步道的边缘，将远处塔西安社区的典型马耳他窗台、教堂钟楼与近处的巨石同框，形成强烈的时空对话感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`正午时分顶光强烈，石雕的细节会因缺乏阴影而显得平淡，建议将深度拍摄安排在上午或下午三点以后。保护棚的格栅结构有时会在画面中形成不可避免的线条，可尝试将其作为构图元素，或通过调整角度尽量规避。请注意，无人机飞行在遗址上空通常是严格禁止的，务必遵守规定。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`塔西安村中心由家族经营的小型宾馆，房间干净明亮，拥有一个种满柠檬树的小庭院，老板会热情地为你手绘一张去往神庙的捷径地图。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`住在三公里外、氛围更加古老的古镇泽通，那里有由传统排屋改造的精品客栈，石头墙壁厚实凉爽，晚上在屋顶露台能望见远方神庙遗址保护区模糊的轮廓。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`返回十五分钟车程外的首都瓦莱塔，下榻古城墙内由骑士团宫殿修复而成的五星级酒店，在极致的历史奢华与便利中，回味白天在原始巨石阵中感受到的文明震撼。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`隐居之选`}</h4>
                  <p className="text-sm text-purple-800">{`租下戈佐岛或马耳他岛西海岸一处偏僻的农舍，白天探访包括塔西安在内的多个分散的神庙，夜晚在绝对的静谧和星空下，让史前文明的余韵慢慢沉淀。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`马耳他夏季（6-9月）是旅游旺季，住宿价格飙升且很快订满，务必提前数月规划。塔西安本身是安静的居民区，夜晚非常宁静，但餐饮和娱乐选择有限，更适合喜欢清净的旅行者。如果追求便利和夜生活，以瓦莱塔或斯利马为基地是更灵活的选择，只需注意往返交通时间即可。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开塔西安很久以后，脑海里反复出现的，不是某一块具体的石头或浮雕，而是一种挥之不去的“连接感”。我们习惯了在博物馆里，通过玻璃橱窗观看被精心标签化的过去。但在塔西安，你是直接站在了“过去”的客厅里。脚下是先民踩踏过的地面，手边是他们亲手雕琢、并可能曾涂抹过牲血的祭坛。这种零距离的接触，让历史从知识变成了可感知的温度、质地和气息。它告诉我们，文明的演进并非一条笔直向上的坦途，而更像是星丛，有些光芒璀璨一时却骤然熄灭，只留下谜题，比如塔西安的先民；有些则蜿蜒传承，演变至今。站在这个文明的终点（亦是我们的发现起点），你感受到的不是优越，而是一种深刻的谦卑与好奇。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个快节奏、一切追求即时满足的世界里，塔西安神庙是一剂有效的“减速剂”。它要求你慢下来，用眼睛仔细地看，用想象力努力地填补空白。这里没有惊艳的网红背景板，它的美是内敛的、智性的、需要耐心解读的。每一位热爱深度游的旅人都应该来一次，不仅仅是为了一睹世界文化遗产的风采，更是为了完成一场与人类文明童年期的直接对话。当你触摸着那些冰凉的螺旋纹，思索着它们为何与爱尔兰、与米诺斯文明有着千丝万缕的相似时，你便参与了一场跨越时空的谜题游戏。这种在寂静废墟中与亘古奥秘相遇的战栗感，是任何攻略都无法赋予的，它将成为你旅行记忆中，一颗沉重而闪光的基石。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/cittadella-citadel-gozo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维多利亚城堡（戈佐岛城堡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cittadella</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/mdina-silent-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    姆
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">姆迪纳静寂之城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mdina</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/marsaxlokk-fishing-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马尔萨什洛克</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Marsaxlokk</p>
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
