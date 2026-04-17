import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '尼什要塞 Niš Fortress｜巴尔干半岛保存最完好的奥斯曼堡垒，聆听多瑙河以南的石头史诗 - 最佳欧洲景点',
  description: '第一眼看到尼什要塞，你可能会觉得它有点……过于平静了。它不像童话里的城堡那样尖顶耸立，也不像一些博物馆式的堡垒那样被精心打扮。它是一大片敦实、泛着黄褐色光泽的石头建筑群，稳稳地坐在尼沙瓦河的拐弯处，像一头晒着太阳的巨兽，懒洋洋地，却又充满不容置疑的存在感。走近它，最先感受到的不是历史的肃杀，而是生活...',
}

export default function NisFortressPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '尼什要塞', href: '/attractions/nis-fortress' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`尼什要塞・Niš Fortress・塞尔维亚・尼什`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到尼什要塞，你可能会觉得它有点……过于平静了。它不像童话里的城堡那样尖顶耸立，也不像一些博物馆式的堡垒那样被精心打扮。它是一大片敦实、泛着黄褐色光泽的石头建筑群，稳稳地坐在尼沙瓦河的拐弯处，像一头晒着太阳的巨兽，懒洋洋地，却又充满不容置疑的存在感。走近它，最先感受到的不是历史的肃杀，而是生活气息：城墙脚下是开阔的公园，草地上躺着晒太阳的年轻人，慢跑的人从你身边掠过，孩子们在古老的炮筒边玩耍。空气中混合着青草、河水以及从附近咖啡馆飘来的咖啡香。这座堡垒，早已卸下了盔甲，成了尼什人最爱的后院。
穿过那座宏伟的、刻着奥斯曼帝国题记的主城门“斯坦博尔门”，仿佛穿过一道时间的过滤网。门洞里的石头被岁月和无数手掌打磨得异常光滑，阴凉瞬间裹挟了你，还能闻到一种潮湿的、属于石头本身的凉沁气味。门内的世界豁然开朗，是一片巨大的绿色草坪，被高大的城墙环抱。你会发现，这里简直是个建筑“混血儿”的展览场：一眼就能认出的奥斯曼式饮水亭、一座小小的东正教教堂、一片罗马遗址的挖掘现场、还有塞尔维亚现代艺术的雕塑点缀其间。这种毫无违和感的杂糅，恰恰是它最迷人的地方——历史在这里不是被清除，而是被一层层地接纳和展示。
最打动人的，或许是它的“日常性”。傍晚时分，本地人会三三两两地走上宽阔的城墙顶端散步。站在炮位旁，脚下是平静流淌的尼沙瓦河，对岸是现代城市的灯火。你会看到老人静静地坐着看夕阳，情侣倚着雉堞轻声交谈。没有激昂的解说，没有隔离的围栏。战争与和平、征服与生活、异族统治者与本地居民的故事，全都凝结在这些冰冷的石头里，又被当代人温暖的日常活动所融化。它不是一座供人远观的历史标本，而是一个依然在呼吸、在参与城市生命进程的有机体。在这里，你触摸到的不仅是石头，更是一座城市坚韧而包容的心跳。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到尼什要塞，你可能会觉得它有点……过于平静了。它不像童话里的城堡那样尖顶耸立，也不像一些博物馆式的堡垒那样被精心打扮。它是一大片敦实、泛着黄褐色光泽的石头建筑群，稳稳地坐在尼沙瓦河的拐弯处，像一头晒着太阳的巨兽，懒洋洋地，却又充满不容置疑的存在感。走近它，最先感受到的不是历史的肃杀，而是生活气息：城墙脚下是开阔的公园，草地上躺着晒太阳的年轻人，慢跑的人从你身边掠过，孩子们在古老的炮筒边玩耍。空气中混合着青草、河水以及从附近咖啡馆飘来的咖啡香。这座堡垒，早已卸下了盔甲，成了尼什人最爱的后院。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过那座宏伟的、刻着奥斯曼帝国题记的主城门“斯坦博尔门”，仿佛穿过一道时间的过滤网。门洞里的石头被岁月和无数手掌打磨得异常光滑，阴凉瞬间裹挟了你，还能闻到一种潮湿的、属于石头本身的凉沁气味。门内的世界豁然开朗，是一片巨大的绿色草坪，被高大的城墙环抱。你会发现，这里简直是个建筑“混血儿”的展览场：一眼就能认出的奥斯曼式饮水亭、一座小小的东正教教堂、一片罗马遗址的挖掘现场、还有塞尔维亚现代艺术的雕塑点缀其间。这种毫无违和感的杂糅，恰恰是它最迷人的地方——历史在这里不是被清除，而是被一层层地接纳和展示。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，或许是它的“日常性”。傍晚时分，本地人会三三两两地走上宽阔的城墙顶端散步。站在炮位旁，脚下是平静流淌的尼沙瓦河，对岸是现代城市的灯火。你会看到老人静静地坐着看夕阳，情侣倚着雉堞轻声交谈。没有激昂的解说，没有隔离的围栏。战争与和平、征服与生活、异族统治者与本地居民的故事，全都凝结在这些冰冷的石头里，又被当代人温暖的日常活动所融化。它不是一座供人远观的历史标本，而是一个依然在呼吸、在参与城市生命进程的有机体。在这里，你触摸到的不仅是石头，更是一座城市坚韧而包容的心跳。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`尼什要塞`} />
                <InfoRow label="英文名称" value={`Niš Fortress`} />
                <InfoRow label="正式名称" value={`Niš Fortress`} />
                <InfoRow label="国家" value={`塞尔维亚`} />
                <InfoRow label="城市" value={`尼什`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座要塞是奥斯曼帝国在巴尔干半岛北部最重要的军事堡垒之一，扼守着从伊斯坦布尔通往中欧的战略要道。`} />
                <InfoRow label="建筑特色" value={`一座宏大的星形棱堡式要塞，拥有保存完好的巨大城墙、城门、炮台以及内部混杂着不同历史时期留下的建筑“痕迹”。`} />
                <InfoRow label="建筑风格" value={`主体为18世纪初重建的奥斯曼帝国军事建筑风格，但基石中大量再利用了更早的罗马、拜占庭及中世纪塞尔维亚的材料。`} />
                <InfoRow label="文化价值" value={`它是尼什城市层叠历史的物理缩影，直观展现了数个世纪以来征服、抵抗与共存在这片土地上的复杂叙事。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`要塞公园区域全天24小时开放。城墙、城门及主要历史建筑内部参观受自然光线限制，建议白天游览。地下通道（如有开放）等特殊部分可能有季节性开放安排，通常在五月至十月的白天有向导带领参观，行前建议在尼什旅游信息中心确认当日具体安排。`} />
              <InfoRow label="门票价格" value={`进入要塞主体区域及公园完全免费。个别临时性的艺术展览或文化活动可能在堡垒内特定建筑中举办，届时可能收取象征性门票（约200-300第纳尔）。聘请持证向导进行深度历史讲解服务需额外付费，约每小时1500-2500第纳尔，建议在旅游信息中心预约。`} />
              <InfoRow label="地址" value={`Niš Fortress, Niš, Serbia`} />
              <InfoRow label="交通方式" value={`从尼什康斯坦丁大帝机场出发，搭乘出租车是最便捷的方式，车程约20分钟，费用在1000-1500第纳尔之间。若从贝尔格莱德乘火车或大巴抵达尼什主站，前往要塞非常方便：出站后，搭乘4路或5路公交车，在“中心广场（Trg Kralja Milana）”站下车，步行穿过热闹的步行街约10分钟即可抵达要塞东侧的主入口；或者，直接沿着尼沙瓦河岸散步约25分钟也可到达。公交车票可在报亭购买或上车向司机购买，单程约50第纳尔。尼什市区不大，从任何市中心酒店步行至要塞基本都在15分钟范围内。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲尼什要塞的故事，就不能只从奥斯曼时代讲起，因为这里的每一块石头，都可能背负着更古老的记忆。我们现在看到的堡垒地基之下，沉睡着罗马时期的纳伊苏斯（Naissus）——那可是罗马皇帝君士坦丁大帝的出生地。想象一下，早在奥斯曼人到来的千年前，罗马军团就在这里筑起了营垒。后来的拜占庭人、斯拉夫人、保加利亚人、中世纪塞尔维亚王国，都曾在此争夺、修建。所以，当奥斯曼帝国在15世纪中叶最终占领尼什后，他们面对的已经是一个历经千年争夺的战略要冲。最初，他们沿用并加固了中世纪留下的城堡，但真正决定性的转变，发生在18世纪初。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`那是一个风声鹤唳的时代。奥地利军队在欧根亲王带领下势如破竹，一度从奥斯曼手中夺取了尼什。虽然奥斯曼帝国后来又重新夺回，但惨痛的教训让他们下定决心，要建造一座无法被攻破的现代堡垒。于是，在1719-1723年间，一场浩大的工程启动了。帝国调集了最优秀的工程师，采用了当时欧洲最先进的“棱堡”防御体系——就是我们现在看到的星形结构，这种形状能让防守方的火力无死角地覆盖城墙的每一个角度。据说，建造时征用了成千上万的当地劳工，石料不够？那就从罗马和拜占庭的废墟上直接取用。如果你仔细观察城墙底部，很容易发现那些雕刻着拉丁铭文或早期基督教符号的石头，它们被随意地、甚至颠倒地砌进了新的墙体中。这不是浪费，而是一种冷酷的宣告：旧的时代已被彻底碾碎，成为新帝国基业的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`堡垒建成后，确实一度固若金汤，成为奥斯曼帝国向中欧扩张和防御欧洲反扑的绝对支点。但历史的车轮从未停止。19世纪，塞尔维亚民族复兴的浪潮汹涌澎湃，尼什成了斗争的前沿。1878年，在俄土战争的大背景下，经过激烈战斗，塞尔维亚军队终于攻克了这座象征奥斯曼统治的坚强堡垒。你可以在要塞里找到一块纪念这场“尼什解放”的石碑。颇具意味的是，胜利者并没有选择摧毁它，就像当年奥斯曼人没有摧毁更早的遗迹一样。塞尔维亚人接管后，拆除了里面的清真寺和奥斯曼兵营，但保留了主体城墙结构，并在里面建起了军营、监狱（后来还真关押过一些政治犯），甚至电影院。它从奥斯曼的矛头，转变为新生民族国家的盾牌与工具。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`二十世纪的战火再次洗礼了它。两次世界大战中，它先后被德军和盟军轰炸，伤痕累累。但也许正是因为它的结构太过敦实，主体又一次幸存了下来。战后，南斯拉夫政府没有对它进行大规模修复，反而采取了一种“放任”的态度——不清洗，不粉饰，就让它保持着沧桑的模样，只清理了废墟，将其开辟为市民公园。这个决定，在今天看来充满了智慧。它让这座要塞避免了成为迪士尼式的历史布景，而是保留了所有历史层理的原始质感。每一道弹痕，每一块修补的砖石，都在无声地讲述最近的故事。从罗马的基石，到奥斯曼的骄傲，再到塞尔维亚独立的见证，以及二十世纪战争的伤疤——尼什要塞就像一本摊开的、用石头写成的立体史书，每一页都清晰可触。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正领略尼什要塞的韵味，我强烈建议你在下午晚些时候，大约日落前三个小时开始你的探索。这个时间点，白天的暑气开始消退，光线变得金黄柔和，正是拍照和感受氛围的黄金时刻。整体游览可以安排2-3个小时的悠闲节奏。路线可以从东面的主城门（斯坦博尔门）开始，这是最经典的入场方式，然后逆时针沿着城墙内侧漫步，逐一探访内部的“历史碎片”，最后登上西北角的城墙，等待日落。这样安排的好处是，你能先沉浸在堡垒宏大的内部空间和复杂的历史层理中，最后以一场俯瞰全城和尼沙瓦河的壮丽日落作为高潮收尾，体验会非常有层次感。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季正午阳光暴晒，城墙上毫无遮阴，务必避开此时段游览，并随时携带饮用水。部分城墙边缘缺乏防护栏，行走和拍照时务必注意脚下安全。要塞内部几乎没有商业设施，只有零星小卖部，建议自带少量零食。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从刻有华丽阿拉伯书法的大门洞穿过，用手掌感受一下那被无数代人触摸得如皮革般温润光滑的中央石柱。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直走向要塞中心那片开阔的绿地，故意放慢脚步，感受脚下可能踩过的罗马街道与奥斯曼地基。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`去寻找那座小巧可爱的圣天使长加百列东正教堂，听听里面可能传来的晚祷歌声，对比它与周围军事建筑的截然不同的气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着北侧城墙根散步，仔细辨认砌墙石料中那些“不协调”的罗马雕花柱头或早期基督教十字架纹样。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`爬上西北角的棱堡制高点，找一处古老的炮位坐下，看着尼沙瓦河在西斜的阳光下变成一条金色的缎带。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果开放，一定要低头钻进那个阴暗潮湿的地下弹药库通道，体验一下绝对寂静中自己心跳放大的感觉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在黄昏时分走下城墙，回到内部草坪，观察当地人如何在这片历史场域里遛狗、慢跑、约会，完成从历史观察者到生活见证者的视角转换。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`斯坦博尔门洞内向外拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光能完美勾勒出门洞的深邃轮廓，将门洞作为画框，对准门外流动的城市生活或绿地公园的人物剪影。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`西北角棱堡顶端拍摄河景与城市全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，利用城墙的垛口作为前景框架，将金色的尼沙瓦河、对岸的城市建筑以及远山一同纳入镜中。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`东侧城墙外护城河边的仰视角度`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，从公园的草地上仰拍，可以拍到宏伟的城墙与天空构成的极简几何图形，突出其庞大与静谧。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`内部罗马遗址与奥斯曼饮水亭同框`}</h4>
                  <p className="text-sm text-gray-700">{`找到能将罗马石柱废墟和后方典型的奥斯曼八角形饮水亭置于同一画面的角度，用一张照片浓缩时空的交叠。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`捕捉石头细节`}</h4>
                  <p className="text-sm text-gray-700">{`寻找那些镶嵌在奥斯曼墙体内的、带有明显罗马浮雕或中世纪纹章的石块，使用大光圈镜头进行特写拍摄，讲述“石头中的历史”。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机拍摄前务必了解当地法规，要塞作为历史遗迹可能有空域限制。尊重当地人的隐私，拍摄人物时最好先微笑示意。塞尔维亚的日出日落时间季节差异大，出行前请查好具体时间以规划拍摄。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在要塞仅一街之隔的老城区步行街旁的家庭公寓，开窗就能看到要塞城墙的侧面，晚上听着楼下咖啡馆隐约的吉他和笑声入睡。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`选择尼沙瓦河畔由老房子改造的精品设计酒店，房间保留着原始的砖石墙壁，现代设计与历史感碰撞，步行到要塞只需五分钟。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`入住位于尼什市区边缘山丘上的四星级度假酒店，拥有全景餐厅和泳池，在房间里就能远眺要塞全景和城市灯火，享受静谧与便利的平衡。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要塞周边是尼什最安全、最富活力的区域之一，晚上散步非常舒服。住在步行可达的距离内，能让你在不同时段（清晨、午后、夜晚）多次轻松造访要塞，感受它不同的面貌。夏季是旅游旺季，这类位置佳的住宿很紧俏，建议提前数周预订。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开尼什要塞很久以后，我脑海里反复出现的，不是它某个宏伟的城门或某段具体的史实，而是一种奇特的“触觉记忆”——那种手心贴在古老门洞石柱上的微凉与光滑。那种感觉，像是一个跨越数百年的握手。这座要塞教给我的，不是简单的胜利或失败的故事，而是关于“ persistence ”（存续）的深沉力量。它没有被塑造成单一的英雄史诗，而是坦然展示着自己的每一道伤疤、每一次改造、每一种文化的叠加。这种不掩饰的复杂，反而赋予它一种令人安心的真实感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个我们习惯于消费被精心净化过的历史景观的时代，尼什要塞的存在像一个温和的提醒。它告诉我们，历史本就是混浊的、层叠的、甚至充满矛盾的。真正的深度，不在于看到多么纯粹的古迹，而在于理解和感受这种层叠本身。站在它的城墙上，看着现代尼什的灯火逐一亮起，你会明白，生活永远是最终的胜利者。它值得每一位旅人专程而来，不仅仅是为了一座保存完好的奥斯曼军事建筑杰作，更是为了上一堂关于时间、记忆与和解的，无声而深刻的课。在这里，你能触摸到巴尔干灵魂中那份特有的坚韧与包容。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/manasija-monastery-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马纳西亚修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Manasija Monastery</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/smederevo-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯梅代雷沃城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Smederevo Fortress</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/novi-sad-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    诺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">诺维萨德要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Petrovaradin Fortress</p>
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
