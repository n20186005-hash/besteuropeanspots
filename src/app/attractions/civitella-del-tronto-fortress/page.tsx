import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奇维泰拉-德尔特龙托 Civitella del Tronto｜悬崖上的最后波旁王冠，欧洲最大要塞村的时空胶囊 - 最佳欧洲景点',
  description: '车子沿着Gran Sasso山脚下蜿蜒的公路盘旋而上时，你根本想象不到山顶藏着什么。直到转过最后一个弯，那片灰白色的、如同巨兽脊背般盘踞在整个狭长山巅的建筑群，毫无预警地撞进你的视野。那一瞬间，你会忘记呼吸——这不是一座普通的城堡，这是一整座为战争而生的山城，是直接从那嶙峋的石灰岩里雕刻出来的庞大梦...',
}

export default function CivitellaDelTrontoFortressPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '奇维泰拉-德尔特龙托', href: '/destinations/italy' },
            { label: '奇维泰拉-德尔特龙托', href: '/attractions/civitella-del-tronto-fortress' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`奇维泰拉-德尔特龙托・Civitella del Tronto・意大利・奇维泰拉-德尔特龙托`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着Gran Sasso山脚下蜿蜒的公路盘旋而上时，你根本想象不到山顶藏着什么。直到转过最后一个弯，那片灰白色的、如同巨兽脊背般盘踞在整个狭长山巅的建筑群，毫无预警地撞进你的视野。那一瞬间，你会忘记呼吸——这不是一座普通的城堡，这是一整座为战争而生的山城，是直接从那嶙峋的石灰岩里雕刻出来的庞大梦境。停好车，你得沿着陡峭的坡道步行进入主城门，石板路被几个世纪的脚步磨得发亮，空气中混合着老石头阴凉的尘土味、远处厨房飘来的烤胡椒香气，还有山风送来的、来自亚得里亚海方向的隐约咸腥。
穿过古老的拱门，时间仿佛立刻慢了半拍。你会发现自己身处一条仅容两人并肩通过的窄巷，两旁是蜜糖色的石头房屋，木门厚重，窗台上颤巍巍地开着天竺葵。老太太们坐在门前的矮凳上轻声聊天，用的是你听不懂的、喉音很重的当地方言。你的头顶是交错晾晒的床单，像节日的旗帜。这里的一切都与山下那个现代化的意大利无关。村庄的心脏，就是那座被称为“堡垒”的庞然大物，但它并非一个孤立的景点，而是村庄不可分割的屋顶、墙壁和地基。孩子们在它的阴影下踢球，餐厅的露台就搭在它古老的城墙根。
最打动人的，是那种无处不在的“坚韧感”。这不是一个被精心修饰的博物馆村庄，它有着粗粝的质地和真实的生活皱褶。你在要塞冰冷的炮台旁，能听到下方某户人家电视里传来足球赛的喧闹；你在纪念最后围城战的纪念碑前默哀时，隔壁面包房新鲜佛卡夏的暖香会固执地飘过来提醒你：生活永远在继续。这种历史悲剧与日常生机的奇特共生，是奇维泰拉最核心的魅力。它让你明白，真正的纪念不是将过去封存，而是背负着它，继续在陡峭的山路上前行。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子沿着Gran Sasso山脚下蜿蜒的公路盘旋而上时，你根本想象不到山顶藏着什么。直到转过最后一个弯，那片灰白色的、如同巨兽脊背般盘踞在整个狭长山巅的建筑群，毫无预警地撞进你的视野。那一瞬间，你会忘记呼吸——这不是一座普通的城堡，这是一整座为战争而生的山城，是直接从那嶙峋的石灰岩里雕刻出来的庞大梦境。停好车，你得沿着陡峭的坡道步行进入主城门，石板路被几个世纪的脚步磨得发亮，空气中混合着老石头阴凉的尘土味、远处厨房飘来的烤胡椒香气，还有山风送来的、来自亚得里亚海方向的隐约咸腥。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过古老的拱门，时间仿佛立刻慢了半拍。你会发现自己身处一条仅容两人并肩通过的窄巷，两旁是蜜糖色的石头房屋，木门厚重，窗台上颤巍巍地开着天竺葵。老太太们坐在门前的矮凳上轻声聊天，用的是你听不懂的、喉音很重的当地方言。你的头顶是交错晾晒的床单，像节日的旗帜。这里的一切都与山下那个现代化的意大利无关。村庄的心脏，就是那座被称为“堡垒”的庞然大物，但它并非一个孤立的景点，而是村庄不可分割的屋顶、墙壁和地基。孩子们在它的阴影下踢球，餐厅的露台就搭在它古老的城墙根。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，是那种无处不在的“坚韧感”。这不是一个被精心修饰的博物馆村庄，它有着粗粝的质地和真实的生活皱褶。你在要塞冰冷的炮台旁，能听到下方某户人家电视里传来足球赛的喧闹；你在纪念最后围城战的纪念碑前默哀时，隔壁面包房新鲜佛卡夏的暖香会固执地飘过来提醒你：生活永远在继续。这种历史悲剧与日常生机的奇特共生，是奇维泰拉最核心的魅力。它让你明白，真正的纪念不是将过去封存，而是背负着它，继续在陡峭的山路上前行。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`奇维泰拉-德尔特龙托`} />
                <InfoRow label="英文名称" value={`Civitella del Tronto`} />
                <InfoRow label="正式名称" value={`Fortezza di Civitella del Tronto`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`奇维泰拉-德尔特龙托`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`意大利统一（Risorgimento）进程中最后一座陷落的波旁王朝堡垒，见证了旧王国时代悲壮的终结。`} />
                <InfoRow label="建筑特色" value={`一座与山脊岩石完美融合的巨型军事建筑群，长达500多米，宛如从悬崖上自然生长出来的石龙。`} />
                <InfoRow label="建筑风格" value={`文艺复兴至巴洛克时期的军事防御建筑典范，强调实用性与地形结合，兼有后期加固的新古典主义元素。`} />
                <InfoRow label="文化价值" value={`一个仍然呼吸着的“活化石”村庄，其历史、建筑与当地社群坚韧的日常生活紧密交织，是理解意大利南部灵魂的密钥。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`要塞：通常夏季（4月至9月）每天上午9:30至晚上7:30开放；冬季（10月至3月）开放时间缩短，通常为上午10点至下午5点，每周一闭馆（节假日除外）。村庄本身全天可自由漫步。具体开放时间可能因季节和特殊活动调整，建议出行前查看官方网站。`} />
              <InfoRow label="门票价格" value={`完整门票约8欧元。优惠票（65岁以上、6-18岁青少年及学生）约5欧元。6岁以下儿童、当地居民及特定纪念日（如文化周）可免费入场。提供家庭套票。门票包含要塞、市立博物馆及所有临时展览的参观。`} />
              <InfoRow label="地址" value={`Via della Fortezza, 64010 Civitella del Tronto TE, Italy`} />
              <InfoRow label="交通方式" value={`最近的国际机场是佩斯卡拉（Abruzzo Airport，PSR），距离约50公里。从机场可租车自驾，沿SS16和SS81公路行驶，约1小时车程。公共交通较稀疏但可行：从佩斯卡拉中央火车站乘区间火车至圣贝内代托-德尔特龙托（San Benedetto del Tronto），约1.5小时；再转乘TUA公司的巴士前往奇维泰拉，班次有限（每天约3-4班），车程约45分钟。强烈建议提前在网上查询巴士时刻表或选择自驾/出租车，以获得最大灵活性。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲奇维泰拉的故事，你得先忘记罗马或文艺复兴那些辉煌的名字，把目光投向意大利长靴的“脚后跟”——阿布鲁佐。这里自古以来就是崎岖、封闭的代名词，是逃亡者、隐士和边境守卫的领土。村庄的起源可以追溯到罗马时代甚至更早，但让它命运发生根本转折的，是中世纪。它正好卡在教皇国和那不勒斯王国之间那条变动不定的边界线上，这种地理位置注定了它的军事宿命。最开始，这里只是山顶的瞭望塔和小型堡垒，守卫着下面的河谷与商路。每一块石头，都浸透着警惕与不安。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间跳到16世纪，欧洲的火药改变了战争规则。当时统治南意大利的西班牙哈布斯堡王朝，意识到了这个战略要冲的致命价值。他们开始投下巨资，将中世纪的小堡垒扩建成一个庞大的、能够抵御火炮攻击的现代要塞。但真正让奇维泰拉达到巅峰的，是18世纪中叶波旁王朝的查理三世。这位雄心勃勃的国王想把他的那不勒斯王国打造成一个强国，而奇维泰拉，就是守护他北方门户最坚硬的盾牌。在工程师的指挥下，无数工匠被征召，他们依着山势，建起了层层叠叠的城墙、棱堡、兵营、仓库和地下蓄水池。工程持续了几十年，最终形成了一座可以自给自足数月、驻扎上千士兵的“垂直城市”。它成了波旁王朝在意大利半岛军事力量的象征，也是南方王权对北方势力说“不”的最强硬姿态。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的洪流无人能挡。19世纪，意大利统一的浪潮席卷半岛。加里波第的红衫军势如破竹，南方王国纷纷投降或倒戈。但奇维泰拉，这座最坚固的要塞，却选择了最艰难的忠诚。1860年秋，当整个意大利南部几乎都已并入新生的意大利王国时，这里的波旁守军和部分誓死效忠的市民，紧闭城门。随之而来的，是长达数月的残酷围城。皮埃蒙特王国的军队用重炮日夜轰击，城内的粮食日益耗尽，但指挥官和士兵们拒绝投降。那是一个被世界遗忘的角落进行的绝望抵抗，为了一个注定要灭亡的旧王朝。直到1861年3月20日，在意大利王国宣布成立近三个月后，弹尽粮绝、伤病满营的奇维泰拉才最终陷落。它的投降，正式为波旁王朝在两西西里的统治画上了句号。这不是一场光荣的胜利，而是一场悲壮的终结，充满了饥饿、疾病和孤立无援的苦涩。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`围城结束后，胜利者为了消除这个反抗的象征，部分拆毁了要塞，并一度禁止居民返回山顶的村庄。奇维泰拉从此陷入了漫长的沉睡与贫困，成了被现代化进程遗忘的角落。但也正是这种遗忘，意外地保护了它。没有被大肆改造，没有涌入大量游客，它保留了最原始的风貌和那份倔强的气质。直到20世纪后期，人们才开始重新认识到它的历史与建筑价值，开始了缓慢而精细的修复。今天，当你走在那些修复后的城墙和幽深的隧道里，灯光精心设计，指示牌清晰明了，但你依然能触摸到当年炮火留下的焦黑痕迹，感受到那种冰冷彻骨的孤独。历史在这里从未远去，它只是换了一种方式，在每一阵山风里低语。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受奇维泰拉的灵魂，建议预留整整一个大半天，最好从午后开始。这样你可以避开上午可能来自周边城镇的一日游小高峰，拥有更静谧的体验。下午的阳光最适合拍摄村庄暖色调的石屋，而接近黄昏时登上要塞顶端，你将收获此生难忘的亚平宁山脉日落全景。整体节奏宜慢不宜快，核心是“漫步”与“沉浸”。路线可以设计为先感受山下村庄的生活脉搏，再攀登至历史的顶点——要塞，最后在暮色中带着感悟缓缓下山。全程步行，请务必穿上最舒适的鞋子，因为这里只有上坡和下坡。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季游览务必携带充足的饮用水，村庄内小店不多且爬坡极度消耗体力。要塞内部某些隧道和阶梯较暗且潮湿，行走时需小心看路。如果想要拍摄空旷的巷道和要塞，清晨（8点前）是绝佳时机，但你将错过村庄苏醒后那种生动的烟火气，各有利弊。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主停车场出发，深吸一口气，开始攀登那条著名的、通向Porta Napoli（那不勒斯门）的漫长斜坡，这是进入中世纪村庄的庄严序曲。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过拱门后立刻右转，让自己迷失在名为“Vicolo del Sacco”的迷宫般小巷里，用手指触摸那些凹凸不平的墙石，偷听院落里传来的生活声响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻着指示牌前往小小的市立博物馆，那里收藏着从史前到围城时期的文物，那张1861年守军最后的食物配给清单会让你沉默良久。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`正式开始探索要塞，从入口的兵器广场开始，顺着标志参观庞大的粮仓、士兵营房和圣巴巴拉小教堂，想象数百年前这里拥挤的军事生活。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要走进那条阴凉幽深、贯穿山腹的主要隧道（Galleria di Contromina），感受那种几乎能听到历史回声的压迫感与静谧。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着城墙走到最东端的“Il Cavaliere”棱堡，这里是整个建筑的尖端，脚下是令人眩晕的悬崖，眼前是无限延伸的 Gran Sasso 群山。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从要塞出来后，别急着下山，去村庄中心的圣母教堂（Chiesa di San Francesco）看看，内部朴素的巴洛克装饰与要塞的粗犷形成温柔对比。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，在 Piazza Filippi Pepe 广场找一家咖啡馆坐下，点一杯当地特产的中心酒（Centerbe），看着夕阳把远处的堡垒染成金黄。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`村庄全景拍摄点`}</h4>
                  <p className="text-sm text-gray-700">{`在抵达村庄前约一公里处的公路弯道（有观景台标识），用长焦镜头可以捕捉到整个村庄如同战舰般雄踞山脊的经典画面，日落前侧光时层次感最佳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`要塞城墙与山脉同框`}</h4>
                  <p className="text-sm text-gray-700">{`站在要塞最西侧的城墙上，以古老的雉堞为前景框架，将远方巍峨的Gran Sasso雪山作为背景，构图雄伟而富有历史纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“Vicolo del Sacco”小巷光影`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点时，阳光会斜射进这条最窄的小巷，在石板路和墙壁上形成强烈的明暗分割线，等待一个当地人走过，能拍出极具故事感的瞬间。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`地下隧道入口的框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`从明亮的兵器广场走向昏暗的主隧道入口，站在门外向内拍，利用门洞形成天然画框，捕捉隧道深处微弱灯光与石壁的质感，营造神秘氛围。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`堡垒东端悬崖观景台`}</h4>
                  <p className="text-sm text-gray-700">{`日落时分，以此为机位拍摄广角全景，脚下是村庄的红色屋顶，中间是堡垒的剪影，远方是沐浴在金色余晖中的山谷与远山，色彩层次极为丰富。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重当地居民隐私，拍摄民居内部或居民特写时请务必先微笑示意并征得同意。无人机飞行在要塞上空可能有严格限制，起飞前务必查询当地法规或询问信息中心。早晚的“金色时刻”和“蓝色时刻”是拍摄要塞外墙和村庄灯光的最佳时间，能获得电影般的质感。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`山脚田园民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在山脚下被橄榄树环绕的“Agriturismo”农家乐，享受主人自酿的葡萄酒和现榨的橄榄油，清晨在鸡鸣狗吠中醒来，抬头便是山顶的堡垒剪影。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`镇中心石头公寓`}</h4>
                  <p className="text-sm text-green-800">{`租住村庄中心一栋由古老石屋改造的公寓，拥有厚重的木门和原始的壁炉，晚上听着寂静中的风声入睡，真正成为“村里人”的一员。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`郊外宁静修道院`}</h4>
                  <p className="text-sm text-yellow-800">{`距离村庄几分钟车程有一间由古老修道院修复而成的精品酒店，房间环绕着宁静的回廊庭院，提供极致的静谧与灵性氛围。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`全景度假屋`}</h4>
                  <p className="text-sm text-purple-800">{`在对面山坡上寻找一家拥有无敌视野的度假屋，它的露台正对着整个奇维泰拉山脊，你可以整天什么都不做，就看着光影在城堡和村庄上移动。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`村庄内的住宿数量非常有限且极其抢手，尤其是旅游旺季和周末，务必提前数月预订。住在山脚下虽然需要每天开车或步行上山，但更能体验从仰视到征服的完整过程。许多本地民宿不提供晚餐，但主人会很乐意为你推荐他们亲戚或朋友经营的家庭餐馆，那是体验地道阿布鲁佐菜系的关键。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开奇维泰拉-德尔特龙托时，我的背包里没有多一件纪念品，但心里却仿佛被填进了一块有重量的石头。那不是悲伤，而是一种沉甸甸的踏实感。在这个一切都追求快速、光滑、即时的时代，这里依然固执地保持着它的陡峭、粗粝和缓慢。它没有试图讨好任何人，不掩饰战争的伤痕，也不粉饰生活的艰辛。它只是存在在那里，像那座山一样，沉默地讲述着关于忠诚与背叛、坚守与和解、毁灭与重生的复杂故事。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这或许就是深度旅行者应该来这里的原因。我们不只是为了看一座“欧洲最大的波旁要塞”——那个名号太冰冷了。我们来，是为了站在那条狭窄的城墙上，感受同样的山风如何吹拂过绝望的守军和今天悠闲的游客；是为了在昏暗的隧道里，思考是什么力量支撑人们在绝境中坚持数月；更是为了在小巷里与一位老太太交换一个微笑时明白，所有宏大的历史，最终都沉淀为普通人一日三餐的烟火气。奇维泰拉是一面镜子，照见的不仅是意大利的过去，也是我们每个人内心关于“家园”、“信念”与“生存”的永恒命题。它告诉你，有些地方，活着本身，就是最伟大的胜利。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/ferrara-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    费
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">费拉拉城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ferrara Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/anagni-papal-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿纳尼（教皇的故乡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Anagni</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/pienza" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    皮
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">皮恩扎古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pienza</p>
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
