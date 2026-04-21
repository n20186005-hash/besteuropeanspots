import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '扎达尔老城 Zadar Old Town｜聆听大海与历史的低语 - 最佳欧洲景点',
  description: '当你穿过那座低矮的、带着威尼斯狮子徽章的陆地城门，一瞬间，整个世界都安静了下来。汽车的喧嚣被留在了身后，取而代之的是脚下被无数脚步打磨得温润如玉的大理石石板路发出的轻微回响。海风是这里的第一个向导，它带着亚得里亚海特有的、混合了咸味、阳光和远处松树清冽的气息，穿过狭窄的巷弄，拂过你的脸颊。光线在这里...',
}

export default function ZadarOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '克罗地亚', href: '/destinations/croatia' },
            { label: '扎达尔老城', href: '/attractions/zadar-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`扎达尔老城・Zadar Old Town・克罗地亚・扎达尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你穿过那座低矮的、带着威尼斯狮子徽章的陆地城门，一瞬间，整个世界都安静了下来。汽车的喧嚣被留在了身后，取而代之的是脚下被无数脚步打磨得温润如玉的大理石石板路发出的轻微回响。海风是这里的第一个向导，它带着亚得里亚海特有的、混合了咸味、阳光和远处松树清冽的气息，穿过狭窄的巷弄，拂过你的脸颊。光线在这里变得戏剧化，上午的阳光把圣多纳图斯教堂那厚重的罗马式圆筒形身躯照得一片金黄，而到了午后，狭长的巷子则沉浸在一片惬意的、蓝灰色的阴凉之中，只有高处晾晒的彩色床单在微风里飘动。
这里绝不是一个冰冷的露天博物馆。生活的气息无处不在。你会在广场边缘的咖啡馆里，看到老先生们一坐就是一下午，面前的小咖啡杯几乎不见移动，他们沉默地看着人来人往，仿佛自己也是这古城景观的一部分。穿着足球服的孩子抱着皮球，尖叫着从你身边跑过，冲进某条巷子深处，那里传来家庭主妇们聊天的嗡嗡声和烹饪的橄榄油香气。老城的核心魅力，就在于这种毫不违和的“层叠感”——公元一世纪的罗马广场石柱残骸，就这样坦然地躺在阳光下，旁边可能就是一家卖着诱人冰淇淋的小店；中世纪的教堂钟声敲响时，年轻人正斜靠在威尼斯共和国时期修建的城墙上看日落。
而这一切，最终都汇聚到西侧那片独一无二的海岸线上。这是扎达尔的灵魂所在。当黄昏降临，人们像完成某种仪式一样，缓缓走向海边。不是为了游泳，而是为了“聆听”和“感受”。海浪永不停歇地拍打着经过精心设计的石阶，石阶下隐藏的管道和共鸣腔，将海水的力量转化成一曲随机的、空灵的低吟——这就是世界闻名的“海风琴”。你坐下来，背靠千年的城墙，面朝无尽的大海，脚下是地球的呼吸谱成的乐曲。那一刻，历史、自然与艺术，从未如此和谐地融为一体。扎达尔老城教会你的，不是去“看”一个景点，而是去“沉浸”在一段持续了三千年的、仍然鲜活的城市生命之中。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你穿过那座低矮的、带着威尼斯狮子徽章的陆地城门，一瞬间，整个世界都安静了下来。汽车的喧嚣被留在了身后，取而代之的是脚下被无数脚步打磨得温润如玉的大理石石板路发出的轻微回响。海风是这里的第一个向导，它带着亚得里亚海特有的、混合了咸味、阳光和远处松树清冽的气息，穿过狭窄的巷弄，拂过你的脸颊。光线在这里变得戏剧化，上午的阳光把圣多纳图斯教堂那厚重的罗马式圆筒形身躯照得一片金黄，而到了午后，狭长的巷子则沉浸在一片惬意的、蓝灰色的阴凉之中，只有高处晾晒的彩色床单在微风里飘动。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里绝不是一个冰冷的露天博物馆。生活的气息无处不在。你会在广场边缘的咖啡馆里，看到老先生们一坐就是一下午，面前的小咖啡杯几乎不见移动，他们沉默地看着人来人往，仿佛自己也是这古城景观的一部分。穿着足球服的孩子抱着皮球，尖叫着从你身边跑过，冲进某条巷子深处，那里传来家庭主妇们聊天的嗡嗡声和烹饪的橄榄油香气。老城的核心魅力，就在于这种毫不违和的“层叠感”——公元一世纪的罗马广场石柱残骸，就这样坦然地躺在阳光下，旁边可能就是一家卖着诱人冰淇淋的小店；中世纪的教堂钟声敲响时，年轻人正斜靠在威尼斯共和国时期修建的城墙上看日落。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而这一切，最终都汇聚到西侧那片独一无二的海岸线上。这是扎达尔的灵魂所在。当黄昏降临，人们像完成某种仪式一样，缓缓走向海边。不是为了游泳，而是为了“聆听”和“感受”。海浪永不停歇地拍打着经过精心设计的石阶，石阶下隐藏的管道和共鸣腔，将海水的力量转化成一曲随机的、空灵的低吟——这就是世界闻名的“海风琴”。你坐下来，背靠千年的城墙，面朝无尽的大海，脚下是地球的呼吸谱成的乐曲。那一刻，历史、自然与艺术，从未如此和谐地融为一体。扎达尔老城教会你的，不是去“看”一个景点，而是去“沉浸”在一段持续了三千年的、仍然鲜活的城市生命之中。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`扎达尔老城`} />
                <InfoRow label="英文名称" value={`Zadar Old Town`} />
                <InfoRow label="正式名称" value={`扎达尔历史中心`} />
                <InfoRow label="国家" value={`克罗地亚`} />
                <InfoRow label="城市" value={`扎达尔`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座在半岛上连续生活了三千年，层叠了古罗马、中世纪、威尼斯共和国乃至现代艺术印记的亚得里亚海沿岸城市文明活标本。`} />
                <InfoRow label="建筑特色" value={`笔直的罗马街道网格与蜿蜒的中世纪小巷并存，厚重的威尼斯城墙环抱着大理石铺就的广场，现代的前卫艺术装置直接镶嵌在古老的海岸线上。`} />
                <InfoRow label="建筑风格" value={`罗马式、拜占庭式、威尼斯哥特式、奥匈帝国新古典主义风格的奇妙混合体。`} />
                <InfoRow label="文化价值" value={`不仅是克罗地亚达尔马提亚地区的历史中心，更因其将古老遗产与当代艺术完美融合的创举，成为全球“城市更新”与“人文海岸线”设计的典范。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城区域全天24小时开放。城内各博物馆、教堂等独立景点开放时间不一，通常为夏季（4月至10月）9:00-18:00，冬季（11月至3月）开放时间缩短或仅周末开放，建议行前具体查询。海风琴与“向太阳致敬”艺术装置区域无时间限制，但夜晚灯光效果在日落后开启。`} />
              <InfoRow label="门票价格" value={`进入扎达尔老城半岛区域免费。城内单独景点收费：圣多纳图斯教堂门票约20库纳，圣阿纳斯塔西亚大教堂钟楼登顶约15库纳，考古博物馆约30库纳。有联票可供选择。学生、儿童及团体通常有优惠。`} />
              <InfoRow label="地址" value={`Zadar Old Town, 23000 Zadar, Croatia`} />
              <InfoRow label="交通方式" value={`从扎达尔机场（Zadar Airport, ZAD）出发：乘坐机场巴士（线路：Zadar Airport - Zadar Bus Station），车程约20分钟，班次根据航班时间安排，票价约30库纳。出租车至老城约15分钟，费用在150-200库纳之间。
从扎达尔汽车站（Zadar Bus Station）出发：步行前往老城是最佳方式，仅需15-20分钟。沿着海岸线走，很快就能看到老城的轮廓。
从扎达尔火车站（Zadar Train Station）出发：火车站紧邻汽车站，同样步行可达。
城内交通：老城完全适合步行探索，所有街道均为石板路，不允许汽车进入。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`扎达尔的故事，始于海。大约三千年前，伊利里亚人就在这个伸入亚得里亚海的狭长半岛上建立了定居点，看中了它天然的良港和易守难攻的地形。但真正为这座城市奠定千年格局的，是罗马人。公元前1世纪，罗马人征服此地，将其命名为“Jadera”，并按照经典的罗马城市规划，修建了笔直的南北向主街“德库马努斯”和东西向的“卡尔多”，网格状的街道划分、广场、神庙和引水渠一应俱全。今天，你漫步在老城，脚下踩着的可能就是当年罗马军团的步道，而在人民广场附近，那些巨大的石柱和地基残骸，便是当年罗马广场沉默的证人，它们被后来各个时代的建筑毫无顾忌地“征用”，成为了房屋墙壁的一部分，历史在这里不是被清除，而是被吸收了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`罗马帝国分裂后，扎达尔进入了拜占庭帝国的漫长影响期。这段时期留给城市最珍贵的礼物，便是那座独一无二的圣多纳图斯教堂。它建于9世纪，其浑圆的、堡垒般的外观与内部空旷的环形空间，与典型的拉丁十字教堂截然不同，充满了拜占庭式的神秘与力量感。传说它建在古罗马朱诺神庙的基座之上，使用的石材不少就直接来自罗马废墟。中世纪的扎达尔是达尔马提亚地区的明珠，在与威尼斯共和国反复的争夺与拉锯中，城市逐渐塑造了自己的性格。1202年，一个改变历史的事件发生了：第四次十字军东征的舰队，本应前往圣地，却在威尼斯的操纵下，掉头攻打了同为基督教城市的扎达尔。这场残酷的劫掠，是十字军骑士贪婪与背叛的缩影，也让扎达尔元气大伤，最终在15世纪完全落入威尼斯共和国手中。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`威尼斯人统治了长达四个世纪。他们留下的印记最为直观：那道坚固的、将整个半岛包裹起来的巨大石墙和堡垒，就是为了抵御日益强大的奥斯曼土耳其帝国的威胁。他们在罗马广场的遗址旁，修建了优雅的带有拱廊的市政厅和总督官，圣阿纳斯塔西亚大教堂的正面也被赋予了精美的威尼斯哥特式外观。老城的轮廓，从此被定格。然而，威尼斯共和国的衰落并未带来和平。随着拿破仑战争的席卷和之后的奥匈帝国统治，扎达尔成为了哈布斯堡王朝的海军基地，城市东侧出现了宽阔的林荫道和新古典主义的建筑，与紧凑的中世纪老城形成了有趣的对比。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`扎达尔的20世纪充满了创伤。二战期间，它遭到了猛烈的轰炸，许多珍贵的历史建筑化为瓦砾。战后，作为南斯拉夫的一部分，城市开始了大规模的重建，但风格上难免留下了社会主义时期实用主义的烙印。真正让扎达尔老城重获全球声誉的，是进入21世纪后那堪称神来之笔的改造。2005年，克罗地亚本土建筑师尼古拉·巴希奇完成了他的杰作——“海风琴”和“向太阳致敬”。他没有在老城里添砖加瓦，而是将海岸线本身变成了艺术品。利用海浪和太阳能，他将古老的码头改造成了能与自然对话的乐器与光之画布。这个设计，天才般地将城市的过去（海洋文明、石工技艺）与未来（生态艺术、公共空间）连接起来，让扎达尔从一个“美丽的历史古镇”，一跃成为思考城市、自然与人文关系的朝圣之地。它告诉我们，最好的保护不是封存，而是创造性地延续其生命。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受扎达尔老城的层次与节奏，建议安排至少一整天的时间。最佳的抵达时间是下午，这样你可以先用半天时间熟悉老城的街巷肌理和主要历史遗迹，将一天中最梦幻的黄昏和夜晚留给海岸边的艺术装置。第二天上午则可以查漏补缺，或者登上钟楼俯瞰全景。路线总体上从东向西，从“陆地”走向“海洋”，象征性地重走这座古城从诞生到面向未来的历程。节奏宜慢，多留出发呆、喝咖啡和等待光影的时间。核心不是打卡，而是体验那种时空交织的氛围。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双绝对舒适的平底鞋，老城全是凹凸不平的石板路，高跟鞋是酷刑。
夏季中午阳光暴晒，建议避开最热的正午在户外暴走，找个室内博物馆或咖啡馆休息。
老城餐馆众多，避开那些门口有“多国语言大菜单”和拉客员的，往小巷深处走，看看哪家坐的本地人多就选哪家。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从最具象征意义的陆地城门进入，抚摸威尼斯石狮，正式踏入这座被城墙守护的时光胶囊。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着笔直的石板主街向西漫步，在圣多纳图斯教堂那巨大的圆形身躯前停下，绕它走一圈，感受不同角度的厚重与沧桑。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`钻进主街旁任何一条吸引你的小巷，迷路是必修课，目标可以是寻找那些被嵌入民宅墙壁的罗马石柱，或是某扇精美的哥特式窗户。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在人民广场的拱廊下找家咖啡馆坐下，点一杯“咖啡和闲谈”，观察广场上市政厅的钟楼和来来往往的本地人。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要在日落前一小时抵达海风琴的石阶，找一个位置坐下，静静地听海风琴随着潮汐变化奏出的独一无二的乐章。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当太阳完全沉入海平面，走到毗邻的“向太阳致敬”圆形玻璃地面上，看脚下由太阳能驱动的LED灯开始编织梦幻的光之图案。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第二天清晨，登上圣阿纳斯塔西亚大教堂的钟楼，在柔和的晨光中俯瞰红瓦屋顶、蔚蓝海峡与远处群岛构成的绝美全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，花点时间沿着完整的威尼斯城墙走一段，从防御者的视角，理解这座半岛城市的地理与历史命运。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`海风琴石阶俯拍人像剪影`}</h4>
                  <p className="text-sm text-gray-700">{`日落时分，让你的同伴站在较低的石阶上，你从较高的位置俯拍，以波光粼粼的大海和遥远的地平线为背景，人物成为聆听海洋乐曲的剪影。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣多纳图斯教堂与罗马广场遗址同框`}</h4>
                  <p className="text-sm text-gray-700">{`站在罗马广场遗址的石柱群中，用广角镜头仰拍圣多纳图斯教堂的圆形主体，将古罗马的残垣与中世纪的宏伟建筑收入同一画面，构图极具历史张力。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“向太阳致敬”的夜间光轨`}</h4>
                  <p className="text-sm text-gray-700">{`夜晚，将相机固定在三脚架上，使用慢速快门（如2-5秒），对准地面上变换的LED灯光图案，可以拍出抽象而梦幻的光轨效果。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从城墙俯瞰老城屋顶与小巷`}</h4>
                  <p className="text-sm text-gray-700">{`登上城墙的西北段（靠近“五个水井广场”），下午的阳光斜射时，可以拍到老城层层叠叠的橘红色瓦片屋顶、教堂钟楼以及如毛细血管般延伸的狭窄小巷，充满韵律感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`人民广场的拱廊光影`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，阳光低角度射入广场的威尼斯式拱廊，形成强烈的明暗对比和长长的光影线条，是拍摄建筑结构感和人文纪实片的绝佳地点。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用广角镜头（如16-35mm）非常适合捕捉老城的街道空间感和海岸线的壮阔场景。`}</li>
                <li>• {`拍摄教堂内部通常允许，但请务必关闭闪光灯，并保持安静尊重；有些小教堂可能明确禁止拍照，注意观察标识。`}</li>
                <li>• {`当地人对于被拍摄有时会敏感，尤其在咖啡馆或私人庭院附近，礼貌的微笑和事先示意（或快速抓拍后微笑致意）是基本的尊重。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸式历史公寓`}</h4>
                  <p className="text-sm text-blue-800">{`选择老城中心一栋经过精心修复的石质老宅内的公寓，晚上听着远处隐约的海浪声入睡，清晨被教堂钟声和石板路上的脚步声唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`海景阳台精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`住在老城西侧边缘、坐拥无敌海景的精品酒店，房间的阳台正对着海风琴和亚得里亚海，足不出户就能收藏每一场日落。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`城墙内的静谧民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`由本地家庭经营的民宿，可能藏在一座拥有内部庭院的老建筑里，房东会给你手绘地图，并推荐只有街坊才知道的秘制烤鱼小馆。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`新城区的现代舒适之选`}</h4>
                  <p className="text-sm text-purple-800">{`如果对夜间绝对安静有要求，可以选择与老城仅一桥之隔的新城区酒店，步行5分钟即可进入老城，享受现代设施的便利与静谧。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（7-8月）是绝对旺季，老城内的住宿非常紧俏且价格高昂，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内几乎所有历史建筑改造的住宿都没有电梯，且楼梯通常陡峭，携带大件行李会是不小的挑战。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果自驾前来，车辆无法进入老城，需要停在城墙外的付费停车场，选择住宿时确认其是否提供停车优惠或推荐附近的停车场信息非常重要。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开扎达尔很久以后，那海风琴的声音还会在某个安静的瞬间，突然回到耳边。那不是一段具体的旋律，而是一种感觉——一种大地与海洋在对话，历史在与当下共鸣的感觉。扎达尔老城最打动我的，正是这种超越视觉的、通感般的体验。它没有许多欧洲古城那种被精心供奉起来的距离感，相反，它充满了粗糙而生动的生命力。历史在这里不是被瞻仰的标本，而是日常生活坐着的长凳、走过的路面、依靠的城墙。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求快速和崭新的世界里，扎达尔提供了一种珍贵的“连续性”的范本。它告诉我们，一座城市可以如何优雅地老去，同时又充满好奇地新生。它不是简单地保护旧物，也不是粗暴地推倒重来，而是像一位智慧的老人，懂得聆听自然的声音（海风琴），并乐于用最现代的语言（向太阳致敬）与年轻一代交流。来这里，你不仅是在游览一个旅游目的地，更是在参与一场关于时间、记忆与创新的沉思。对于任何一位渴望在旅途中获得更深层共鸣的旅人来说，扎达尔老城都不只是一站，它是一个需要你用心去“听”、去“触”、去“呼吸”的生命体，是你清单上那个能让灵魂慢下来的、必须抵达的地方。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
