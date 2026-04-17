import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '特拉凯半岛城堡 Trakai Island Castle｜立陶宛水中古堡，凯旋传说的灵魂栖所 - 最佳欧洲景点',
  description: '穿过特拉凯小镇那些售卖着热腾腾 kibinai（一种卡拉伊姆派）的木头小屋，当你沿着 Galvė 湖的岸边小路漫步，空气里是松树和水藻混合的清新气味。然后，一个转弯，它就在那里——仿佛直接从童话书的插页里浮出来，又像是从深蓝色的湖水中生长出来的一座红砖岛屿。第一眼看到特拉凯半岛城堡，那种不真实的美会...',
}

export default function TrakaiIslandCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '特拉凯半岛城堡', href: '/attractions/trakai-island-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`特拉凯半岛城堡・Trakai Island Castle・立陶宛・特拉凯`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`穿过特拉凯小镇那些售卖着热腾腾 kibinai（一种卡拉伊姆派）的木头小屋，当你沿着 Galvė 湖的岸边小路漫步，空气里是松树和水藻混合的清新气味。然后，一个转弯，它就在那里——仿佛直接从童话书的插页里浮出来，又像是从深蓝色的湖水中生长出来的一座红砖岛屿。第一眼看到特拉凯半岛城堡，那种不真实的美会让你不自觉地停下脚步，屏住呼吸。它不像那些修葺得过于完美的宫殿，它有种粗粝的、饱经风霜的质感，红色的砖墙在午后的阳光下泛着温暖的橘调，与周围墨绿的松林和湛蓝的湖水形成了油画般的强烈对比。风吹过湖面，带来湿润的气息，也带来木桥那头的喧闹人声与手风琴若有若无的旋律。
这座城堡绝不仅仅是一个孤零零的景点。在立陶宛人心中，它是心脏深处的回响。你会看到年轻的父母推着婴儿车在湖边散步，指着城堡给咿呀学语的孩子看；看到头发花白的老夫妇并肩坐在长椅上，静静地望着它，仿佛在看一部关于自己国家的老电影；也看到写生的学生，试图在画纸上捕捉水光与砖影瞬息万变的交织。它既是历史课本的封面，也是周末下午的家常去处。这种神圣与日常的奇妙交融，是特拉凯半岛城堡最动人的地方。
它的核心魅力，在于那种“悬浮于时间之上”的孤独与坚韧。站在长长的木桥上，脚下是微微晃动的木板和波光粼粼的湖水，你会感觉自己正走向一个被时光特意保存起来的孤岛。城堡厚重的墙壁里，封存着骑士的铁甲碰撞声、大公的密谈、围城时的呐喊与火焰。但当你登上塔楼，俯瞰着如镜面般破碎又聚合的湖泊与远处无垠的森林，一种辽阔的宁静又会将你包围。在这里，历史的沉重与自然的永恒达成了和解。它教会你的不是一段具体的历史编年史，而是一种感受：关于一个民族如何在湖泊与森林的环抱中，守护自己最初的火种。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过特拉凯小镇那些售卖着热腾腾 kibinai（一种卡拉伊姆派）的木头小屋，当你沿着 Galvė 湖的岸边小路漫步，空气里是松树和水藻混合的清新气味。然后，一个转弯，它就在那里——仿佛直接从童话书的插页里浮出来，又像是从深蓝色的湖水中生长出来的一座红砖岛屿。第一眼看到特拉凯半岛城堡，那种不真实的美会让你不自觉地停下脚步，屏住呼吸。它不像那些修葺得过于完美的宫殿，它有种粗粝的、饱经风霜的质感，红色的砖墙在午后的阳光下泛着温暖的橘调，与周围墨绿的松林和湛蓝的湖水形成了油画般的强烈对比。风吹过湖面，带来湿润的气息，也带来木桥那头的喧闹人声与手风琴若有若无的旋律。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座城堡绝不仅仅是一个孤零零的景点。在立陶宛人心中，它是心脏深处的回响。你会看到年轻的父母推着婴儿车在湖边散步，指着城堡给咿呀学语的孩子看；看到头发花白的老夫妇并肩坐在长椅上，静静地望着它，仿佛在看一部关于自己国家的老电影；也看到写生的学生，试图在画纸上捕捉水光与砖影瞬息万变的交织。它既是历史课本的封面，也是周末下午的家常去处。这种神圣与日常的奇妙交融，是特拉凯半岛城堡最动人的地方。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，在于那种“悬浮于时间之上”的孤独与坚韧。站在长长的木桥上，脚下是微微晃动的木板和波光粼粼的湖水，你会感觉自己正走向一个被时光特意保存起来的孤岛。城堡厚重的墙壁里，封存着骑士的铁甲碰撞声、大公的密谈、围城时的呐喊与火焰。但当你登上塔楼，俯瞰着如镜面般破碎又聚合的湖泊与远处无垠的森林，一种辽阔的宁静又会将你包围。在这里，历史的沉重与自然的永恒达成了和解。它教会你的不是一段具体的历史编年史，而是一种感受：关于一个民族如何在湖泊与森林的环抱中，守护自己最初的火种。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`特拉凯半岛城堡`} />
                <InfoRow label="英文名称" value={`Trakai Island Castle`} />
                <InfoRow label="正式名称" value={`Trakai Island Castle`} />
                <InfoRow label="国家" value={`立陶宛`} />
                <InfoRow label="城市" value={`特拉凯`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`14-15世纪立陶宛大公国最重要的防御与权力中心之一，见证了立陶宛从中世纪强国到与波兰联合的关键历程。`} />
                <InfoRow label="建筑特色" value={`一座完全建造在Galvė湖中岛屿上的红砖哥特式城堡，通过一座长长的木桥与陆地相连，是东欧独一无二的水上堡垒典范。`} />
                <InfoRow label="建筑风格" value={`以防御功能为主导的哥特式砖砌城堡，同时融合了立陶宛本地的一些建筑元素，风格质朴而雄伟。`} />
                <InfoRow label="文化价值" value={`立陶宛民族坚韧精神与独立历史的象征，是立陶宛国家身份认同的核心地理标志与文化图腾。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡主体建筑开放时间为每日上午10点至晚上7点（夏季4月至9月）；冬季（10月至次年3月）开放时间缩短为上午10点至下午5点，周一通常闭馆。博物馆的内部展厅在关门前1小时停止入场。每年1月1日、2月16日、3月11日、复活节、6月24日及12月24-26日关闭。湖区公园区域全天开放。`} />
              <InfoRow label="门票价格" value={`成人票价为12欧元。学生、老年人和儿童可享受优惠票价6欧元。7岁以下儿童免费。家庭套票（2位成人+最多3名儿童）价格为24欧元。购买门票后可参观城堡内所有博物馆常设展览及临时特展。每月最后一个周日为免费开放日（特展可能除外）。`} />
              <InfoRow label="地址" value={`Trakai Island Castle, Trakai 21106, Lithuania`} />
              <InfoRow label="交通方式" value={`从立陶宛首都维尔纽斯出发最为便捷。在维尔纽斯中央汽车站乘坐开往特拉凯的巴士，班次非常频繁，约每20-30分钟一班，车程约40分钟。巴士会停在特拉凯镇中心，从车站步行穿过小镇，沿着Galvė湖的步道走向城堡，约需15-20分钟，沿途风景极佳。也可从维尔纽斯火车站乘坐火车，但班次较少，耗时相近。自驾前往约30分钟，城堡附近有收费停车场。建议购买巴士往返票，经济方便。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从一位雄心勃勃的大公说起。14世纪，立陶宛大公国在伟大的格迪米纳斯家族统治下，成为东欧最后的异教强国，疆域辽阔，但也强敌环伺。尤其是西边那条顿骑士团，这些身披白袍、胸口画着黑十字的武士，总以“传播信仰”为名，不断侵扰边境。大约在1350年至1382年间，格迪米纳斯的儿子，那位以勇猛和智慧著称的凯斯图蒂斯大公，相中了特拉凯这片遍布湖泊的土地。这里星罗棋布的湖水本身就是天然的壕沟，而易守难攻的湖心岛，则是建造一座坚不可摧堡垒的绝佳地点。于是，第一批木结构防御工事开始在这座岛上搭建，特拉凯开始成为大公家族喜爱的居所和重要的前哨。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但真正让这座城堡镌刻进立陶宛命运脉络的，是凯斯图蒂斯的儿子，维陶塔斯大公。这位大公的一生堪称传奇，他年少时曾作为人质被困在条顿骑士团的城堡，后来与他的堂兄、波兰国王雅盖沃上演了又联合又争斗的复杂权力游戏。维陶塔斯将父亲的木堡彻底改建为一座宏伟的石砖城堡。他想把这里打造成一个配得上强大立陶宛的权力与军事中心。在他的主持下，我们今天看到的这座哥特式红砖城堡逐渐成形：高耸的主堡、坚固的防御墙、用于居住的宫殿翼楼。城堡的建造不仅是为了防御，更是为了彰显权威。据说，当时这里汇聚了立陶宛最好的石匠和工匠，甚至有来自远方的建筑师参与设计。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，最坚固的石头也敌不过历史的硝烟。在维陶塔斯之后，立陶宛的政治中心逐渐转移到了维尔纽斯。特拉凯城堡虽然仍是重要据点，但不可避免地被边缘化。在随后几个世纪的战乱中——尤其是17世纪中叶的俄波战争——城堡遭受了严重的破坏。入侵的军队或许没能彻底征服它，但炮火和劫掠让它千疮百孔。更致命的是被遗弃后的荒芜。城堡慢慢失去了主人，只剩下湖风和雨水为伴。屋顶坍塌，墙壁倾颓，曾经回荡着宫廷乐声的大厅长满了野草，奢华的内饰被洗劫一空。它从一个权力的象征，变成了一个巨大的、浪漫的废墟，沉睡在 Galvė 湖的中央，只在立陶宛的民歌和传说中被提起。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机出现在19世纪。当时立陶宛被沙俄帝国吞并，民族意识在压迫下开始觉醒。知识分子和艺术家们开始回首寻找民族精神的源头。那座在湖心日渐倾颓的红色废墟，以其悲壮而独特的形象，成为了立陶宛民族坚韧不拔的完美象征。画家们争相描绘它，诗人为它吟唱。人们开始讨论修复它的可能性，这不仅仅是为了保护古迹，更是为了重塑民族的骄傲。但真正的修复工程，要等到20世纪。一战、二战的烽火再次延误了计划。直到1961年，在苏联时期，一场大规模、系统性的重建工程才正式启动。这本身就是一个矛盾又值得玩味的举动：一个试图抹去民族特性的政权，却在修复一个最强烈的民族象征。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`我们今天看到的城堡，就是那次浩大重建的结果。考古学家和历史学家尽可能依据原始图纸和遗迹，一砖一瓦地让它“复活”。这不是单纯的仿古新建，而是一次与历史的对话。走入城堡内部，你会看到裸露的、颜色略新的砖块与古老的、被熏黑的原始墙体并置，清晰地区分着“过去”与“现在”。它不再是一个纯粹的14世纪遗物，而是一个承载了毁灭、遗忘、追寻与重生所有记忆的复合体。从凯斯图蒂斯的雄心，到维陶塔斯的辉煌，再到战火的摧残、民族的思念，最后是近乎执念的复现——这座湖中城堡的每一块砖，都浸透了立陶宛这个国家跌宕起伏的命运。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正领略特拉凯半岛城堡的神韵，请务必安排一整天的时间。理想的节奏是从容不迫的，将城堡本身与周围绝美的湖区风光融为一体。建议在上午十点左右从维尔纽斯出发，避开周末上午可能出现的短途游客小高峰。抵达特拉凯镇后，不要急于直奔城堡，先在镇上逛逛，感受一下当地独特的卡拉伊姆文化氛围。午餐后，约下午一点左右开始向城堡进发。此时光线从侧方照射城堡，非常适合远观和拍摄。游览城堡内部博物馆约需2-2.5小时，请预留充足时间细读展品（许多有英文说明）。从城堡出来后，正值傍晚，光线变得金黄柔和，是环湖漫步或租一条小船从湖上回望城堡的绝佳时机。这样安排，你能看到城堡在日光下、夕照中和华灯初上时的不同面貌，完成一次完整的感官体验。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季周末下午城堡内可能非常拥挤，尽量将室内参观安排在平日或上午稍晚时段。城堡内部石阶多且陡峭，请务必穿着舒适防滑的鞋子。警惕城堡入口附近过于热情的“导游”或商品推销，官方导览服务应在博物馆内柜台购买。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在镇中心的老字号店铺买一个热乎乎的、馅料满满的kibinai（传统卡拉伊姆肉派），边吃边沿着主街走向湖泊的方向。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`不要立刻上桥，先在湖岸的观景平台驻足，完整地欣赏城堡在水中的倒影，听风吹过松林的沙沙声和天鹅的鸣叫。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`缓缓走过那座长长的、吱呀作响的古老木桥，感受脚步下湖水的流动，让进入城堡的过程充满仪式感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过拱形门洞进入外堡庭院，先别急着进主楼，顺时针绕庭院走一圈，仰头观察不同角度的塔楼与城墙的防御结构设计。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入主堡的博物馆，重点参观二层的公爵大厅，想象当年维陶塔斯大公在此接待使节、举办盛宴的恢宏场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`攀爬狭窄的螺旋石梯登上最高的塔楼，气喘吁吁地推开小门，让360度无遮挡的湖泊与森林全景作为给你的奖励。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡出来后，沿着湖岸西侧的小径散步到“爱情岛”附近，从一个更安静、更偏僻的角度回望暮色中的城堡剪影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间和体力允许，在湖边码头租一艘划艇或脚踏船，从水中央的视角仰视城堡，这是最接近中世纪入侵者或远方来客的视角。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`湖泊南岸观景台全景位`}</h4>
                  <p className="text-sm text-gray-700">{`下午两点至四点，阳光从西侧照亮城堡正面，使用广角镜头将城堡、木桥、湖面及前景的野花或芦苇一同纳入构图，画面层次最为丰富。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡木桥中段对称构图点`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚人少时，站在木桥正中，将相机放低贴近木板，利用桥的线条引导视线至城堡门洞，可以拍出极具纵深感和水波动感的照片。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`主堡塔楼顶层拱窗框架位`}</h4>
                  <p className="text-sm text-gray-700">{`登上主塔后，找到面向陆地方向的石拱窗，将相机镜头对准窗外，用古老的石窗作为画框，框住远处特拉凯小镇的彩色木屋和森林，古今对比瞬间定格。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`外堡城墙转角仰拍角`}</h4>
                  <p className="text-sm text-gray-700">{`进入外堡庭院后，找到东北角的城墙下，下午的阳光会勾勒出城墙雄浑的轮廓，仰拍塔楼与天空，能拍出城堡威严、孤傲的气势。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`“爱情岛”西望黄昏剪影点`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，散步至城堡西侧小半岛（当地人称为“爱情岛”），等待太阳落到城堡后方，拍摄城堡清晰的黑色剪影与湖面上流淌的金色、紫色晚霞。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`湖面反光强烈，建议携带偏振镜（CPL）来消除水面的多余反光，让倒影更清澈，天空更蓝。使用无人机拍摄前，务必确认当地法规，城堡上空可能有飞行限制。尊重当地居民隐私，避免将镜头对准湖畔私人住宅的窗户。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济精选`}</h4>
                  <p className="text-sm text-blue-800">{`特拉凯镇中心的“Senasis Trakai”民宿，由一栋传统的木结构房屋改造，主人热情好客，会为你准备丰盛的立陶宛式早餐，晚上能听到湖畔传来的轻柔音乐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`位于Galvė湖另一侧森林边的“Karaimu Kempingas”小木屋，推开门就是湖光山色，夜晚极其宁静，可以独享星空下的城堡远景，适合追求自然与静谧的旅行者。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`维尔纽斯市内的“Hotel PACAI”精品设计酒店，由17世纪贵族宫殿修复而成，将历史奢华与现代设计完美融合，白天往返特拉凯探索，夜晚回到都市中心的顶级享受。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`避世之选`}</h4>
                  <p className="text-sm text-purple-800">{`距离特拉凯约15分钟车程的乡村庄园“Dvaras”，坐落于宁静的田野之中，提供真正的立陶宛乡村生活体验，房间充满古董家具，晚餐食材直接来自庄园菜园。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`特拉凯小镇本身住宿选择有限且季节性较强，夏季务必提前数月预订。如果选择住在维尔纽斯，虽然需要每日通勤，但能体验到更丰富的夜生活和餐饮选择，交通也非常便利。湖区周边民宿夏季蚊虫较多，建议备好驱蚊用品。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开特拉凯的时候，我的背包里除了相机内存卡装满的照片，还有一种沉静而坚实的感觉。这座城堡教会我的，远不止一段波罗的海沿岸的历史。它站在那里，被水环绕，被森林守望，像一个关于“坚持”的立体寓言。它曾荣耀，曾破碎，几乎被遗忘，又被一个民族从记忆的深潭里打捞起来，一片片拼回原状。这个过程本身，就是立陶宛民族灵魂最生动的写照——无论外部世界如何风云变幻，他们总能在自己的湖泊、森林与歌谣中，找到重建家园的力量原点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求效率、迷恋新奇、一切都在快速迭代的世界里，特拉凯半岛城堡提供了一种截然不同的时间维度。它不快，它甚至有些笨拙地矗立在水中央，要求你放慢脚步，走过长长的桥，花时间去聆听风声与历史的回响。它不新，它的砖墙斑驳，新旧交织，坦然展示着伤痕与修复的痕迹。而这，正是深度旅行最珍贵的所在：不是打卡，而是共鸣；不是获取知识，而是体验一种生存的状态。每一位渴望在旅途中触碰真实、感受土地与血脉之间深沉联系的旅人，都应该来这里，站在那座木桥上，感受从湖心吹来的、穿越了几个世纪的风。你会发现，有些风景，看进眼里，就住进了心里。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/gmunden-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格蒙登城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gmunden Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-pierrefonds" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    皮
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">皮埃尔丰城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Pierrefonds</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/castelo-branco" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布朗库堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Castelo Branco</p>
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
