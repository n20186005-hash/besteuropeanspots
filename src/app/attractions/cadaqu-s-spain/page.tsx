import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡达克斯 Cadaqués｜布拉瓦海岸遗世独立的纯白渔村，萨尔瓦多·达利的灵感缪斯 - 最佳欧洲景点',
  description: '当你的车吃力地翻过最后一道山脊，眼前豁然开朗的那一刻，你会忘记呼吸。一整片宝石般湛蓝的地中海海湾，像一块巨大的蓝丝绒，温柔地铺展在脚下。而沿着海湾的弧度，一片密密麻麻、洁白如雪的房屋，正从蔚蓝的海水边一直蔓延到青灰色的山岩上。那就是卡达克斯。你闻到的第一缕空气是咸涩的，混杂着海藻、晒热的松树和远处隐',
}

export default function CadaquSSpainPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '卡达克斯', href: '/attractions/cadaqu-s-spain' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卡达克斯・Cadaqués・西班牙・卡达克斯`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你的车吃力地翻过最后一道山脊，眼前豁然开朗的那一刻，你会忘记呼吸。一整片宝石般湛蓝的地中海海湾，像一块巨大的蓝丝绒，温柔地铺展在脚下。而沿着海湾的弧度，一片密密麻麻、洁白如雪的房屋，正从蔚蓝的海水边一直蔓延到青灰色的山岩上。那就是卡达克斯。你闻到的第一缕空气是咸涩的，混杂着海藻、晒热的松树和远处隐约的油炸海鲜的香气。引擎声在这里是冒昧的，主导的声音是海浪永不止息地拍打卵石滩的哗哗声，以及海鸥划过耀眼阳光时的鸣叫。
顺着唯一的主路把车停好，你便彻底进入了这个白色的迷宫。这里没有宏伟的广场，没有醒目的地标，有的只是无数条窄得只容一人通过的巷子。地面是光滑的鹅卵石，被几个世纪的脚步磨得发亮。你只能步行，且必须慢下来。你的手会不自觉拂过那些粉刷得雪白的墙壁，触感粗糙而温暖。转角处，总有一盆盛放的三角梅从阳台倾泻而下，那紫红色在纯白的背景下鲜艳得几乎不真实。本地老人坐在自家门前的藤椅上，用加泰罗尼亚语低声聊天，对你投来淡然一瞥，仿佛你和那只在墙头打盹的猫没什么不同。这里的时间，是以渔船的归航和阳光在墙面上移动的刻度来计算的。
它的核心魅力，正藏在这份极致的“隔绝感”与“艺术性”的矛盾统一中。曾经，那道险峻的山脉保护了它，让它免于过度开发，保留了渔村最原始、最质朴的肌理。而正是这种与世隔绝的宁静和无比纯粹的光线，像磁石一样吸引了上世纪的艺术家们。你走在街上，会觉得每一面白墙都像一个画布，上面流淌着变幻莫测的光影；每一个海港的角落，都仿佛曾有一个画家在此支起画架。它不是博物馆，但它整个空间，都是一座活着的、关于光与海的露天美术馆。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你的车吃力地翻过最后一道山脊，眼前豁然开朗的那一刻，你会忘记呼吸。一整片宝石般湛蓝的地中海海湾，像一块巨大的蓝丝绒，温柔地铺展在脚下。而沿着海湾的弧度，一片密密麻麻、洁白如雪的房屋，正从蔚蓝的海水边一直蔓延到青灰色的山岩上。那就是卡达克斯。你闻到的第一缕空气是咸涩的，混杂着海藻、晒热的松树和远处隐约的油炸海鲜的香气。引擎声在这里是冒昧的，主导的声音是海浪永不止息地拍打卵石滩的哗哗声，以及海鸥划过耀眼阳光时的鸣叫。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`顺着唯一的主路把车停好，你便彻底进入了这个白色的迷宫。这里没有宏伟的广场，没有醒目的地标，有的只是无数条窄得只容一人通过的巷子。地面是光滑的鹅卵石，被几个世纪的脚步磨得发亮。你只能步行，且必须慢下来。你的手会不自觉拂过那些粉刷得雪白的墙壁，触感粗糙而温暖。转角处，总有一盆盛放的三角梅从阳台倾泻而下，那紫红色在纯白的背景下鲜艳得几乎不真实。本地老人坐在自家门前的藤椅上，用加泰罗尼亚语低声聊天，对你投来淡然一瞥，仿佛你和那只在墙头打盹的猫没什么不同。这里的时间，是以渔船的归航和阳光在墙面上移动的刻度来计算的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，正藏在这份极致的“隔绝感”与“艺术性”的矛盾统一中。曾经，那道险峻的山脉保护了它，让它免于过度开发，保留了渔村最原始、最质朴的肌理。而正是这种与世隔绝的宁静和无比纯粹的光线，像磁石一样吸引了上世纪的艺术家们。你走在街上，会觉得每一面白墙都像一个画布，上面流淌着变幻莫测的光影；每一个海港的角落，都仿佛曾有一个画家在此支起画架。它不是博物馆，但它整个空间，都是一座活着的、关于光与海的露天美术馆。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卡达克斯`} />
                <InfoRow label="英文名称" value={`Cadaqués`} />
                <InfoRow label="正式名称" value={`Cadaqués`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`卡达克斯`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座因地理隔绝而意外保存了纯净风貌的地中海渔村，最终成为20世纪超现实主义艺术的隐秘首都。`} />
                <InfoRow label="建筑特色" value={`依山而建、层层叠叠的纯白色立方体房屋，配以深棕色的木窗和瓦片，石板小巷窄如迷宫，一切都为了抵御海风和最大化捕捉阳光。`} />
                <InfoRow label="建筑风格" value={`纯粹的地中海加泰罗尼亚沿海风格，实用主义与美学的高度统一。`} />
                <InfoRow label="文化价值" value={`从毕加索、杜尚到达利，无数艺术巨匠在此寻找光与宁静，它的景观和光线本身已成为现代艺术史上的一件不朽作品。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`村镇公共区域全天开放。达利故居博物馆（Portlligat）开放时间复杂：通常三月中旬至一月初开放，需提前在官网预约特定时间段参观，冬季和周一闭馆。具体日期每年微调，务必行前确认。`} />
              <InfoRow label="门票价格" value={`进入卡达克斯村镇免费。达利故居博物馆全价票约20欧元，学生及65岁以上老人有优惠。建议官网购票，旺季现场基本无票。`} />
              <InfoRow label="地址" value={`Carrer des Portitxó, 1, 17488 Cadaqués, Girona, Spain`} />
              <InfoRow label="交通方式" value={`最便捷的方式是从巴塞罗那自驾（约2.5小时）。路线颇具戏剧性：从罗萨斯（Roses）开始，你需要翻越一段蜿蜒陡峭、风景壮丽的山路（注意晕车），这是村庄历史上与世隔绝的天然屏障。也可从巴塞罗那北站乘火车至菲格雷斯（Figueres），再换乘Sarfa公司的巴士（约1.5小时），巴士班次有限，务必提前查好时刻表。夏季有从罗萨斯港出发的渡轮，海路抵达的体验无与伦比。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`很久以前，卡达克斯只是一个普通的渔村，但又不那么普通。它蜷缩在克雷乌斯角半岛的怀抱里，背面是难以逾越的阿尔伯雷拉山脉。在汽车还未普及的年代，翻越那座山是一场真正的冒险。因此，卡达克斯的人们更多地望向大海。他们的生活节奏由撒网和收网决定，房子漆成白色以反射灼人的烈日，街道修得狭窄以抵挡冬天凶猛的北风“特拉蒙塔纳”。这种地理上的孤立，让它长久以来像一个被遗忘的秘密，也意外地封存了一种古老的地中海生活方式。这里的方言甚至都与内陆略有不同，带着海浪的韵律。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机发生在20世纪初。最先是一群不怕艰苦的画家和诗人，听说了这个“路的尽头”的村庄。他们乘船或骑着驴子翻山而来，立刻被这里征服。这里的光线不同寻常——海水反射的阳光异常强烈，照在白墙上的光影对比分明，色彩纯净到失真。毕加索年轻时曾在此短暂停留。但真正将卡达克斯刻上艺术版图的人，是一个本地孩子，他叫萨尔瓦多·达利。达利的父亲在附近的克雷乌斯角有一处夏日别墅，童年的达利就在这里的海湾里游泳，在奇形怪状的海岸岩石间幻想。这片风景塑造了他最初、也是最持久的超现实主义视野。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`成年后，功成名就的达利选择回归。他和一生的缪斯加拉，在卡达克斯旁边一个更隐秘的小海湾——Portlligat，买下了几间简陋的渔屋。接下来的几十年，他们像完成一件巨大的装置艺术一样，一点点收购、改造、连接这些小屋，最终建成了那座迷宫般的、充满奇思妙想的家。达利那两撇标志性的胡子，或许就是为了模仿这里海角的岩石和渔船桅杆的线条。他和加拉成为了卡达克斯最著名的居民，他们的存在像一盏灯塔，吸引了整个欧洲艺术界的名流：诗人洛尔迦、电影导演路易斯·布努埃尔、画家马格利特、甚至科学家爱因斯坦都曾到访。小小的渔村，一时间成了超现实主义的沙龙和圣地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战争和独裁时期曾让这里黯然，但艺术的种子已经埋下。 Franco政权结束后，卡达克斯重新向世界敞开大门，但这一次，它有了明确的身份：艺术之乡。村民们依然捕鱼，但也开始开设画廊、餐厅和家庭旅馆。他们小心翼翼地维护着村镇的白色外观，法规禁止破坏整体的建筑风貌。达利去世后，他的故居成为博物馆，人们得以窥见天才日常生活的碎片。今天的卡达克斯，依然面临着旅游化和保持本真的平衡难题，但当你看到傍晚时分，老渔民依然会坐在港口修补渔网，而画廊里亮着温暖的灯光时，你会知道，那个连接着大海与画布的灵魂，还在轻微地搏动。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排至少两天一夜，才能真正感受卡达克斯从白日喧嚣到夜间宁静的节奏变化。最佳抵达时间是下午，在山路上欣赏日落前抵达的绝景。第一天下午和傍晚专注于探索古镇本身，享受暮色与晚餐。第二天上午预留至少三小时给达利故居（必须提前预约），下午则可以去更野性的克雷乌斯角自然公园徒步或找个海湾游泳。这样的节奏让你既能融入游客的活力，也能捕捉到本地生活的缝隙。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对舒适、适合走粗糙石板路和鹅卵石路的平底鞋，高跟鞋在这里是“刑具”。
夏季（7-8月）是绝对旺季，人潮汹涌，建议选择5-6月或9-10月前往，体验会好十倍。
许多小商店和餐厅在下午2点到5点之间会休息，晚上8点后才用晚餐，请调整你的餐饮时钟以适应西班牙节奏。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午时分先从主海滩（Platja Gran）的卵石滩开始，把脚浸入清澈冰凉的海水，感受这个村庄最原始的脉搏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着海滨长廊（Passeig）漫步，左边是停满蓝白色小艇的港口，右边是飘着咖啡香的餐厅，找张桌子看归航的渔船如何扰碎一港金鳞。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`毫不犹豫地钻进任何一条吸引你的白色小巷往上坡走，让自己彻底迷失，你会发现最美丽的角落往往在无意间的抬头或转角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上最高处的圣玛丽亚教堂（Santa Maria），这座16世纪的堡垒式教堂内部是华丽的巴洛克祭坛，但更重要的是在它门前平台俯瞰全镇红瓦白墙跌入碧海的全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第二天上午按时前往Portlligat的达利故居，跟随导览穿梭于低矮的房间，留意那个蛋形屋顶、长颈鹿雕塑和面向海湾的工作室，想象主人在此生活的怪诞与诗意。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从达利故居出来，沿着海边岩石小径散步到Portlligat海湾的另一侧，回望那组著名的白色建筑群，这是达利每天看到的视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`租一艘皮划艇或参加一个小型乘船游，从海平面上欣赏卡达克斯的白色立面，并探访附近只有水路可达的隐秘小海湾。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间和体力允许，开车或徒步前往克雷乌斯角灯塔，站在伊比利亚半岛最东端，感受被称为“特拉蒙塔纳”的狂风如何塑造这里的景观与性格。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣玛丽亚教堂前平台`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，用长焦镜头压缩层层叠叠的白色房屋与海湾的关系，将教堂的钟楼作为前景，捕捉金光洒满全镇的魔幻时刻。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`任意一条陡峭小巷的仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，走进一条狭窄陡峭的小巷，将相机几乎贴地向上仰拍，让两侧纯白的高墙和一线蓝天形成强烈的几何构图，等待一个当地人走入画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`Portlligat海湾回望达利故居`}</h4>
                  <p className="text-sm text-gray-700">{`参观完故居后，走到海湾对岸的碎石滩，下午侧光时分，将前景的平静海水、中景的达利故居白色建筑群与远景的卡达克斯小镇一同纳入画面，故事感十足。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`主港口尽头防波堤`}</h4>
                  <p className="text-sm text-gray-700">{`清晨渔船出港前后，站在防波堤上，以港口停泊的彩色小船和白色村庄为背景，拍摄渔民整理渔网的劳作场景，充满生活气息。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`克雷乌斯角灯塔前的风蚀岩石`}</h4>
                  <p className="text-sm text-gray-700">{`在光线强烈的白天，利用广角镜头靠近那些被狂风和海浪侵蚀成超现实形状的深色岩石，以灯塔和狂暴的大海为背景，拍出具有达利风格的戏剧性风景。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`这里的阳光极其强烈，尤其在海面反射下，建议携带偏振镜（CPL）来控制反光并让天空更蓝。拍摄白色建筑时酌情增加一点曝光补偿，以免画面发灰。尊重当地居民隐私，避免将镜头直接对准他人住所的窗户或阳台。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-blue-800">{`入住一栋由百年老渔屋改造的精品酒店，房间保留着原始的石头拱顶和厚墙，配以简约的设计，打开木窗就能听到海浪声，是沉浸式体验小镇灵魂的选择。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`艺术家之选`}</h4>
                  <p className="text-sm text-green-800">{`坐落在半山腰、带有一个种满仙人掌和橄榄树露台的家庭旅馆，主人可能是位画家或摄影师，早餐丰盛，能给你最地道的探索建议。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`位于卡达克斯外围隐秘海湾旁的奢华小型酒店，拥有无敌海景无边泳池和米其林推荐餐厅，提供极致的宁静与私密，是蜜月或庆祝特殊日子的完美地点。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-purple-800">{`镇中心热闹街道上方由老奶奶经营的家庭公寓，房间简单干净带小厨房，阳台虽小但能瞥见海景，是深入本地生活的实惠选择。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季住宿非常紧张，价格也最高，务必提前数月预订。如果想体验绝对宁静，可以选择Portlligat或更远些的Llane Gran区域，但这意味着去镇上餐厅需要开车或走一段夜路。大部分老房子没有电梯，携带大件行李会是个挑战。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开卡达克斯，再次翻越那道山脉时，你会感到一种奇异的剥离感。仿佛刚刚离开的不仅仅是一个地方，而是一个用光、盐分和白色石头构筑的梦境。它教会你的，是一种“专注”的旅行方式。在这里，宏伟的叙事退场，细节成为主角：一扇门的蓝色阴影，一杯冰镇桑格利亚酒里的水果，岩石上贝类的纹路，午后小巷里空无一人的寂静。它逼着你慢下来，用眼睛去“绘画”，用皮肤去感受风和温度。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求效率、景点打卡的快节奏世界里，卡达克斯的存在像一个温柔的反对。它提醒我们，旅行的意义有时不在于收集了多少地标，而在于是否有一个地方，能让你内心的嘈杂安静下来，能重新唤醒你对光线、色彩和日常之美的感知。它是为那些愿意为了一道光线而驻足，为一个角落的和谐而心动，并相信艺术就生长在最朴素生活里的旅人准备的。如果说一生必去，那是因为它提供了一种解药——一种对抗粗粝、找回细腻感官的解药。你会发现，带走的最珍贵的纪念品，不是照片，而是你的眼睛被那片炫目的白与蓝洗涤过后，看待世界的方式那一点点微妙的、永久的改变。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/frias-castle-medieval-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    弗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">弗里亚斯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Frías</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cuenca-hanging-houses" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    昆
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">昆卡悬屋</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cuenca Hanging Houses</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/consuegra-windmills" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    孔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">孔苏埃格拉风车群</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Consuegra Windmills</p>
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
