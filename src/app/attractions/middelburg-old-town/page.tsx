import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '米德尔堡老城 Middelburg Old Town｜未被游客淹没的“小阿姆斯特丹”，泽兰省的珍宝 - 最佳欧洲景点',
  description: '当我第一次从火车站那条略显现代的马路上拐进老城的入口时，时间仿佛被瞬间调慢了一个世纪。空气里最先捕捉到的，不是运河城市常有的水腥气，而是一种混合了烤焦糖华夫饼的甜腻、从古老砖石缝隙里透出的微凉潮气，还有咖啡馆飘出的现磨咖啡豆醇香。耳朵立刻被驯服了——远处市政厅钟楼传来的悠扬钟声，近处自行车轮胎碾过鹅...',
}

export default function MiddelburgOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '荷兰', href: '/destinations/netherlands' },
            { label: '米德尔堡老城', href: '/attractions/middelburg-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`米德尔堡老城・Middelburg Old Town・荷兰・米德尔堡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当我第一次从火车站那条略显现代的马路上拐进老城的入口时，时间仿佛被瞬间调慢了一个世纪。空气里最先捕捉到的，不是运河城市常有的水腥气，而是一种混合了烤焦糖华夫饼的甜腻、从古老砖石缝隙里透出的微凉潮气，还有咖啡馆飘出的现磨咖啡豆醇香。耳朵立刻被驯服了——远处市政厅钟楼传来的悠扬钟声，近处自行车轮胎碾过鹅卵石路面有节奏的“咔哒”声，还有运河边咖啡馆露台上酒杯轻碰的脆响，交织成一首专属此地的慵懒背景乐。
视线所及，几乎是一场荷兰建筑山墙的博览会。不是阿姆斯特丹那种普遍的红砖朴素，这里的山墙要“争奇斗艳”得多。阶梯式的、钟楼式的、颈状式的，每一栋都像戴着不同的冠冕，墙壁的颜色也从深红、赭石到明黄不等，在北方清透却不灼人的阳光下，像一排排被精心上过釉的积木。运河在这里不像在阿姆斯特丹那样是宽阔的交通动脉，它们更像是老城温柔佩戴的银色项链，窄窄的，静静的，倒映着两岸山墙清晰的轮廓和蓝天白云，偶尔一只小船滑过，水面碎成万片金鳞，过一会儿又自己拼凑回完整的油画。
你会发现，这里虽然游客不少，但绝对没有到摩肩接踵的地步。更多的，是本地人的生活场景。西装笔挺的男士骑着老式自行车匆匆穿过拱桥；主妇在运河边的石阶上弯腰擦拭自家小船的甲板；白发老先生坐在长椅上，对着面前的教堂尖顶，慢条斯理地读着一份报纸。市政厅前的广场（Markt）在周二和周四上午会变身成一个热闹却不喧嚣的市集，摊位上堆着泽兰省刚捕捞上来的鲜亮鲱鱼、本地农场的奶酪，还有成捆的鲜花。这里保留了荷兰黄金时代的富足骨架，却填充着现代泽兰人从容不迫的日常血肉，这种奇妙的平衡，正是它最核心的魅力——你闯入的不是一个博物馆式的标本，而是一个依然在平缓呼吸、带着体温的活生生的历史街区。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当我第一次从火车站那条略显现代的马路上拐进老城的入口时，时间仿佛被瞬间调慢了一个世纪。空气里最先捕捉到的，不是运河城市常有的水腥气，而是一种混合了烤焦糖华夫饼的甜腻、从古老砖石缝隙里透出的微凉潮气，还有咖啡馆飘出的现磨咖啡豆醇香。耳朵立刻被驯服了——远处市政厅钟楼传来的悠扬钟声，近处自行车轮胎碾过鹅卵石路面有节奏的“咔哒”声，还有运河边咖啡馆露台上酒杯轻碰的脆响，交织成一首专属此地的慵懒背景乐。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`视线所及，几乎是一场荷兰建筑山墙的博览会。不是阿姆斯特丹那种普遍的红砖朴素，这里的山墙要“争奇斗艳”得多。阶梯式的、钟楼式的、颈状式的，每一栋都像戴着不同的冠冕，墙壁的颜色也从深红、赭石到明黄不等，在北方清透却不灼人的阳光下，像一排排被精心上过釉的积木。运河在这里不像在阿姆斯特丹那样是宽阔的交通动脉，它们更像是老城温柔佩戴的银色项链，窄窄的，静静的，倒映着两岸山墙清晰的轮廓和蓝天白云，偶尔一只小船滑过，水面碎成万片金鳞，过一会儿又自己拼凑回完整的油画。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你会发现，这里虽然游客不少，但绝对没有到摩肩接踵的地步。更多的，是本地人的生活场景。西装笔挺的男士骑着老式自行车匆匆穿过拱桥；主妇在运河边的石阶上弯腰擦拭自家小船的甲板；白发老先生坐在长椅上，对着面前的教堂尖顶，慢条斯理地读着一份报纸。市政厅前的广场（Markt）在周二和周四上午会变身成一个热闹却不喧嚣的市集，摊位上堆着泽兰省刚捕捞上来的鲜亮鲱鱼、本地农场的奶酪，还有成捆的鲜花。这里保留了荷兰黄金时代的富足骨架，却填充着现代泽兰人从容不迫的日常血肉，这种奇妙的平衡，正是它最核心的魅力——你闯入的不是一个博物馆式的标本，而是一个依然在平缓呼吸、带着体温的活生生的历史街区。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`米德尔堡老城`} />
                <InfoRow label="英文名称" value={`Middelburg Old Town`} />
                <InfoRow label="正式名称" value={`Historic Centre of Middelburg`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`米德尔堡`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`曾是荷兰东印度公司（VOC）六大商会之一的所在地，泽兰省历史上无可争议的政治与经济心脏。`} />
                <InfoRow label="建筑特色" value={`一座融合了荷兰黄金时代商贸辉煌与中世纪宗教庄严的“运河环城”，其紧凑的布局和大量幸存的阶梯山墙建筑群堪称奇迹。`} />
                <InfoRow label="建筑风格" value={`以华丽精致的晚期哥特式与荷兰文艺复兴风格为主导，并混入了新古典主义与路易十四风格的优雅元素。`} />
                <InfoRow label="文化价值" value={`它不仅是一座城市，更是一本关于荷兰人如何从大海夺取土地、并通过全球贸易积累财富与文化的立体教科书。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城公共区域全天24小时开放。城内主要建筑（如市政厅、修道院）的开放时间各异，通常为周二至周日10:00-17:00，周一多数闭馆。部分博物馆冬季（11月至次年3月）会缩短开放时间或仅在下午开放。节假日（如国王节、圣诞节）许多室内景点关闭，但老城街道氛围反而更浓郁。建议行前务必查询具体目标景点的官方网站。`} />
              <InfoRow label="门票价格" value={`漫步老城街区本身完全免费。进入核心建筑需购票：市政厅导览游成人约8欧元；泽兰博物馆成人约12欧元；阿布迪修道院建筑群门票约10欧元。通常提供联票优惠（如市政厅+博物馆联票约16欧元）。持有荷兰博物馆卡可免费进入多数博物馆。6-17岁青少年及65岁以上老人享有折扣，6岁以下儿童普遍免费。`} />
              <InfoRow label="地址" value={`Markt 1, 4331 LK Middelburg, Netherlands`} />
              <InfoRow label="交通方式" value={`从阿姆斯特丹史基浦机场出发，最便捷的方式是乘坐火车。在机场火车站直接搭乘前往弗利辛恩（Vlissingen）方向的城际列车，约2小时车程，直达米德尔堡火车站，班次频繁（约每小时2-3班）。从鹿特丹中央火车站出发更快，约1小时20分钟。米德尔堡火车站就坐落在老城边缘，出站后步行5分钟即可进入古老街巷。自驾车可将车停放在老城外围的停车场（如‘Kousteensedijk’停车场），老城内街道狭窄且多为步行区，不建议驾车进入。城内游览最佳方式就是步行或租一辆当地自行车。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`米德尔堡的故事，始于对海洋的征服与恐惧。早在8-9世纪，第一批定居者就选择了这片位于瓦尔赫伦岛（Walcheren）中心的稍高地带，在四周环绕的沼泽与潮汐中建立起一个避难所，“Middelburg”这个名字本身，就是“中间的堡垒”之意。它的命运在1123年迎来第一次飞跃，当时一位来自佛兰德斯的诺伯特会修道士在此建立了一座修道院。这座后来被称为“阿布迪修道院”的建筑群，不仅是一个宗教中心，更迅速成长为地区的行政与经济核心，米德尔堡也于1217年获得了城市权利，城墙拔地而起，城市轮廓初定。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，真正将米德尔堡推向巅峰的，不是神权，而是全球贸易的东风。16-17世纪，荷兰东印度公司（VOC）的成立如同给这个低地国家注入了强心剂。米德尔堡凭借其优越的港口位置（通过运河连接外海）和雄厚的资本，成为VOC六大商会之一——“泽兰商会”的所在地。巨大的财富如潮水般涌入，今天老城里那些最华丽的山墙住宅、市政厅的精致雕饰，大多建于这个“黄金时代”。商人们从亚洲运来香料、瓷器、丝绸，也带回了异域的文化与审美，你可以从一些建筑的装饰细节中，隐约窥见那些东方影响的痕迹。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但历史总是起伏不定。18世纪后，随着VOC的衰落和斯海尔德河航道的淤塞，米德尔堡的经济光彩逐渐黯淡。更大的灾难来自第二次世界大战。1940年5月，德军入侵，老城在战火中遭受重创。而最毁灭性的打击发生在1944年，盟军为解放斯海尔德河口并打开安特卫普港，对瓦尔赫伦岛进行了大规模轰炸和蓄意 inundation（引海水淹没）。米德尔堡老城中心几乎被夷为平地，包括市政厅在内的标志性建筑都严重损毁。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战后，是泽兰人令人惊叹的坚韧与对历史的深情，成就了今天我们所见的奇迹。他们没有选择推倒重建一个现代化的城市，而是发起了一项雄心勃勃的“重建”计划。利用保存完好的旧图纸、照片，甚至是17世纪画家留下的油画作为蓝本，人们一砖一瓦地复原了老城的样貌。这不是简单的仿古，而是一次精确到厘米的“记忆重现”。工匠们用传统技艺修复雕刻，寻找匹配的老砖，让那些阶梯山墙重新矗立在原来的街巷格局中。这场持续数十年的重建，本身就成了米德尔堡历史中最动人的篇章之一，它告诉世人，这座城市真正的灵魂不在砖石里，而在世代居住于此的人们心中。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正领略米德尔堡老城的精髓，建议安排一整天时间，从清晨到日暮。上午光线柔和，游客稀少，最适合专注欣赏建筑立面和运河倒影的宁静之美。中午前后可以参观主要室内景点，避开最热的时段。下午则将节奏放慢，融入市井生活，体验咖啡馆和街头氛围。傍晚时分，金色的夕阳会为整个老城披上最华丽的衣装，是拍照和漫步的黄金时刻。这样的安排张弛有度，既能深入历史，又能捕捉到老城在不同时间光影下的多变表情。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周二和周四上午广场有市集，非常值得体验本地生活，但此时市政厅内部参观可能会受团队影响略嘈杂。老城几乎所有街道都是鹅卵石或砖块铺就，请务必穿一双舒适且鞋底较厚的步行鞋。自行车是本地人主要交通工具，在人行道上行走时也要注意身后传来的清脆车铃声，及时礼貌让路。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一早从火车站步行五分钟，先一头扎进老城西侧蜿蜒如迷宫般的“Kuiperspoort”小巷，这里是中世纪工匠区的遗存，感受最原始狭窄的街道尺度与宁静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`漫步至庄严的市政厅广场（Markt），花时间仰望这座被称为“石质诗篇”的晚期哥特式建筑正面，数一数上面那数十尊历代伯爵与女士的雕像。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`买票进入市政厅内部，一定要参加导览，亲眼看看那间装饰着精美挂毯和油画、曾决定东印度公司事务的“VOC房间”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过广场，步入气势恢宏的阿布迪修道院建筑群，在修道院教堂的静谧中坐下，听一听巨大的管风琴是否恰好被奏响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着运河（如“Rouaanse Kaai”）随意漫步，找一座小拱桥驻足，看船只缓缓通过，两岸山墙与绿树完美倒映在如镜的水面上。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在运河边找一家有露天座位的咖啡馆坐下，点一杯咖啡或本地特色的“泽兰啤酒”，纯粹地观察往来行人与自行车流。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果还有精力，登上老城中心的“Lange Jan”高塔（属于阿布迪修道院），在盘旋而上的楼梯后，将整个瓦尔赫伦岛棋盘格般的田园与远方的大海尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分，再次回到市政厅广场，此时建筑在暖金色夕阳下会呈现出与上午截然不同的温暖色调，广场上的咖啡馆也热闹起来，融入这份悠闲的结束氛围。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`市政厅东南角仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨八点左右，阳光刚好侧面照亮建筑精致的雕像立面，站在广场东南角用广角镜头仰拍，能将华丽的阶梯山墙与蓝天一同纳入构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`Kuiperspoort小巷深处`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点前后，阳光能斜射入狭窄巷弄，捕捉砖墙上的光影斑驳和爬藤植物的绿意，营造出静谧而古老的故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`Rouaanse Kaai运河拱桥`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，太阳西斜，光线温暖柔和，站在任一座小拱桥的顶端，拍摄运河笔直延伸的透视感，以及两岸色彩明丽的建筑在水中的完美对称倒影。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`阿布迪修道院回廊庭院`}</h4>
                  <p className="text-sm text-gray-700">{`任何阳光明媚的白天，站在回廊的拱门下，利用框架构图拍摄中心修剪整齐的绿色庭院和巍峨的“Lange Jan”钟塔，体现宗教建筑的几何秩序与宁静。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`“Lange Jan”钟塔顶俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗的傍晚日落前半小时登塔，向西拍摄，可以捕捉到老城红色屋顶海洋、远处蜿蜒的运河，以及天际线被染成金红色的壮丽全景。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`荷兰天气多变，善用多云或雨后的散射光，能拍出建筑色彩更加饱和、质感细腻的照片。使用偏振镜可以有效减少运河反光，让水中倒影更清晰。拍摄当地人时请务必保持礼貌，最好先微笑示意获得默许，荷兰人普遍友善但注重隐私。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`运河边精品酒店`}</h4>
                  <p className="text-sm text-blue-800">{`由一栋17世纪商人豪宅改造，房间天花板保留着原始油画横梁，推开窗就是静谧的运河景色，晚上能听到细微的水波声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计感历史旅馆`}</h4>
                  <p className="text-sm text-green-800">{`坐落在一座经过巧妙现代改造的古老建筑内，将极简设计与历史元素（如裸露的砖墙）完美结合，位于老城核心却异常安静。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`温馨家庭式民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`位于老城边缘一条安静小巷里，由一对热情的本地夫妇经营，早餐有女主人自制的特色蜂蜜和新鲜果汁，能获得最地道的旅行建议。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`郊外田园民宿`}</h4>
                  <p className="text-sm text-purple-800">{`如果自驾，可以选择老城外几分钟车程的典型泽兰农场改造民宿，住在宽敞的谷仓式房间里，早晨在田野散步，享受绝对的宁静与开阔。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿数量有限且非常抢手，尤其是在夏季和周末，务必提前数月预订。住在老城内固然方便，但夜间可能能听到教堂钟声（对一些人来说是情趣，对另一些人可能是干扰）。选择外围住宿通常性价比更高，且能体验更本地的社区氛围，凭借高效的自行车租赁系统，通勤也完全不是问题。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开米德尔堡时，我的背包里没有多出什么纪念品，但心里却仿佛被塞进了一整个小而坚实的宇宙。这座城市教会我的，是一种关于“韧性”的具象化表达。它历经水患、战火、几乎从地图上被抹去，却又凭借着人们对家园记忆的固执坚守，一砖一瓦地从灰烬中重新生长出来，且生长得与旧日如此神似。这不仅仅是修复建筑，更是在接续一段被强行中断的城市生命史。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求新奇与刺激的时代，米德尔堡提供了一种截然不同的旅行价值：它不是让你去惊叹人类的创造能有多高、多奇，而是让你去感受一种文明的“存续”之力有多深、多韧。走在它的街道上，你不会感到压抑于历史的沉重，反而被一种平和与从容包围。这里的辉煌是内敛的，藏在每一块精心复原的砖石里，藏在运河不动声色的倒影里，藏在本地人骑着自行车掠过你身边时那声随意的“Goedemorgen”（早上好）里。它像一位历经沧桑却依然衣着得体、风度翩翩的老绅士，不需要大声言语，他的存在本身，就是一种抚慰人心的力量。对于任何想要暂时逃离喧嚣，在历史深度与生活气息之间找到一个完美平衡点的旅人来说，米德尔堡老城，都是一个不容错过的、会呼吸的梦。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/krems-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克雷姆斯老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Krems Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/civita-di-bagnoregio" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    白
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">白露里治奥（天空之城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Civita di Bagnoregio</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/jaen-historic-quarter" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈恩古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">The Historic Quarter of Jaén</p>
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
