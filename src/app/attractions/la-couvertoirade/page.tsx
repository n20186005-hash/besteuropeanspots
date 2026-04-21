import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '拉库韦尔图瓦拉德 La Couvertoirade｜圣殿骑士团留在法国南部高原的完整时光胶囊 - 最佳欧洲景点',
  description: '车子在法国南部的拉尔扎克高原上行驶，窗外是一望无际、被低矮石墙分割的牧地，风吹过稀疏的草丛，发出干燥的沙沙声。就在你觉得这片土地空旷得有些苍凉时，它突然出现在地平线上——不是童话里尖顶的城堡，而是一圈敦实、灰黄色的石墙，紧紧环抱着内部高高低低的石屋屋顶，像一枚被时光遗忘的古老印章，牢牢盖在这片赭红色...',
}

export default function LaCouvertoiradePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '法国', href: '/destinations/france' },
            { label: '拉库韦尔图瓦拉德', href: '/attractions/la-couvertoirade' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`拉库韦尔图瓦拉德・La Couvertoirade・法国・阿韦龙省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在法国南部的拉尔扎克高原上行驶，窗外是一望无际、被低矮石墙分割的牧地，风吹过稀疏的草丛，发出干燥的沙沙声。就在你觉得这片土地空旷得有些苍凉时，它突然出现在地平线上——不是童话里尖顶的城堡，而是一圈敦实、灰黄色的石墙，紧紧环抱着内部高高低低的石屋屋顶，像一枚被时光遗忘的古老印章，牢牢盖在这片赭红色的大地上。这就是拉库韦尔图瓦拉德给你的第一眼印象：不是惊艳，而是一种沉甸甸的、来自土地本身的召唤。
把车停在村外的空地上，步行穿过那道低矮的拱形主城门（Porte de la Maladrerie），世界瞬间切换。外面的风声被厚重的石墙滤去大半，取而代之的是你自己脚步在石板路上清脆的回响。空气里弥漫着一股好闻的混合气味：被正午太阳晒暖的石头散发出微微的热尘味，角落里顽强生长的薰衣草和百里香送来一丝清苦的香气，或许还有某户人家厨房飘出的、炖煮豆子与香料的温暖气息。村庄小得惊人，两条主街呈十字交叉，你几乎能一眼望到头。但这“小”里却充满了细节：每一栋房子都由巨大的石灰岩块砌成，窗户窄小，门楣低矮，屋顶是典型的拉尔扎克式石板瓦，层层叠叠，像鱼鳞也像史书。
最奇妙的是，这里并非一个空壳博物馆。虽然常驻居民可能只有几十人，但你仍能清晰地感觉到生活的脉搏。窗台上摆着天竺葵的陶罐，木门上挂着手工编织的门垫，小小的广场边有一两家兼卖明信片和本地蜂蜜的咖啡馆。一位老奶奶正不紧不慢地擦拭着她古董店橱窗的玻璃，看见你张望，会露出缺了牙的、温和的微笑。这种“依然活着”的感觉，是拉库韦尔图瓦拉德最珍贵的魅力。它不是被精心供奉起来的遗产，而是一个虽然缓慢、却依然随着自己节奏心跳的古老生命体。
站在村子中心的小广场上，抬头四望，那些沉默的石墙仿佛在低语。它们讲述的不是王侯将相的丰功伟绩，而是关于守护、关于劳作、关于在严酷自然与动荡时局中寻求一方安宁的、普通而坚韧的故事。阳光把屋脊的影子拉得长长的，投在凹凸不平的路面上，光影的界限分明，时间在这里仿佛有了具体的形状和重量。你忽然明白，你来这里寻找的，不是某个著名的雕塑或壁画，而是这样一种完整的、触手可及的“过去”的质感。这种质感，就渗透在每一块被手打磨过的石头里，每一条被脚步磨亮的沟槽中。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在法国南部的拉尔扎克高原上行驶，窗外是一望无际、被低矮石墙分割的牧地，风吹过稀疏的草丛，发出干燥的沙沙声。就在你觉得这片土地空旷得有些苍凉时，它突然出现在地平线上——不是童话里尖顶的城堡，而是一圈敦实、灰黄色的石墙，紧紧环抱着内部高高低低的石屋屋顶，像一枚被时光遗忘的古老印章，牢牢盖在这片赭红色的大地上。这就是拉库韦尔图瓦拉德给你的第一眼印象：不是惊艳，而是一种沉甸甸的、来自土地本身的召唤。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`把车停在村外的空地上，步行穿过那道低矮的拱形主城门（Porte de la Maladrerie），世界瞬间切换。外面的风声被厚重的石墙滤去大半，取而代之的是你自己脚步在石板路上清脆的回响。空气里弥漫着一股好闻的混合气味：被正午太阳晒暖的石头散发出微微的热尘味，角落里顽强生长的薰衣草和百里香送来一丝清苦的香气，或许还有某户人家厨房飘出的、炖煮豆子与香料的温暖气息。村庄小得惊人，两条主街呈十字交叉，你几乎能一眼望到头。但这“小”里却充满了细节：每一栋房子都由巨大的石灰岩块砌成，窗户窄小，门楣低矮，屋顶是典型的拉尔扎克式石板瓦，层层叠叠，像鱼鳞也像史书。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最奇妙的是，这里并非一个空壳博物馆。虽然常驻居民可能只有几十人，但你仍能清晰地感觉到生活的脉搏。窗台上摆着天竺葵的陶罐，木门上挂着手工编织的门垫，小小的广场边有一两家兼卖明信片和本地蜂蜜的咖啡馆。一位老奶奶正不紧不慢地擦拭着她古董店橱窗的玻璃，看见你张望，会露出缺了牙的、温和的微笑。这种“依然活着”的感觉，是拉库韦尔图瓦拉德最珍贵的魅力。它不是被精心供奉起来的遗产，而是一个虽然缓慢、却依然随着自己节奏心跳的古老生命体。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`站在村子中心的小广场上，抬头四望，那些沉默的石墙仿佛在低语。它们讲述的不是王侯将相的丰功伟绩，而是关于守护、关于劳作、关于在严酷自然与动荡时局中寻求一方安宁的、普通而坚韧的故事。阳光把屋脊的影子拉得长长的，投在凹凸不平的路面上，光影的界限分明，时间在这里仿佛有了具体的形状和重量。你忽然明白，你来这里寻找的，不是某个著名的雕塑或壁画，而是这样一种完整的、触手可及的“过去”的质感。这种质感，就渗透在每一块被手打磨过的石头里，每一条被脚步磨亮的沟槽中。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`拉库韦尔图瓦拉德`} />
                <InfoRow label="英文名称" value={`La Couvertoirade`} />
                <InfoRow label="正式名称" value={`La Couvertoirade`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`阿韦龙省`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`欧洲保存最完好的圣殿骑士团堡垒村庄之一，见证了中世纪军事修会在南法的兴衰。`} />
                <InfoRow label="建筑特色" value={`完全由当地石灰岩建造，集防御性城墙、居住性房屋与宗教性教堂于一体的自给自足微型社区。`} />
                <InfoRow label="建筑风格" value={`简朴而坚固的罗马式风格与后期哥特式元素的融合，体现圣殿骑士团的实用主义美学。`} />
                <InfoRow label="文化价值" value={`活生生的中世纪农业与军事共同体标本，其完整的空间布局和建筑群为研究中世纪骑士团生活提供了无可替代的实物教材。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`村庄公共区域全年全天开放；圣殿骑士教堂开放时间一般为4月至10月 10:00-12:30, 14:00-18:00，11月至次年3月开放时间缩短或需预约；城墙漫步道开放时间同教堂；具体时间可能因季节和节日调整，建议行前查阅官网或当地旅游信息中心。`} />
              <InfoRow label="门票价格" value={`进入村庄免费；参观圣殿骑士教堂及登城墙联票约5欧元；优惠票（学生、儿童）约3欧元；6岁以下儿童免费；每月第一个周日或文化遗产日等特定日期可能免费开放。`} />
              <InfoRow label="地址" value={`La Couvertoirade, 12230 La Couvertoirade, France`} />
              <InfoRow label="交通方式" value={`最近的主要交通枢纽是米洛（Millau）火车站或罗德兹（Rodez）机场。从米洛火车站出发，最推荐的方式是租车自驾，沿D999号公路向东行驶约40分钟即可抵达，沿途是壮丽的拉尔扎克高原石灰岩地貌。公共交通选择有限，夏季可能有从米洛出发的旅游巴士，但班次稀少，务必提前查询时刻表。从罗德兹机场驾车前往约需1小时15分钟。村庄入口外有免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要听懂石头的低语，我们得把时钟拨回将近九百年前。12世纪中叶，十字军东征的浪潮正盛，一个既像修士又像战士的独特组织——圣殿骑士团，在欧洲如日中天。他们不仅是耶路撒冷的守护者，也在西欧各地建立了庞大的地产网络，用以支持遥远的圣战。拉尔扎克这片贫瘠但广阔的高原，进入了他们的视野。大约在1150年左右，圣殿骑士团在这里获得了一片土地，建立了“拉库韦尔图瓦拉德”这个据点。最初，它可能只是一个简陋的农场（grange），饲养绵羊，生产羊毛和奶酪，为骑士团的东方事业提供源源不断的资金。骑士们选择这里，看中的正是其与世隔绝的地理位置和易于防守的地形。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`一个多世纪的经营让这个据点逐渐成型。到了13世纪，最初的农场周围，开始聚集起为骑士团服务的农民、牧羊人和工匠。简单的石屋沿着山坡搭建起来，一个微型社会的雏形出现了。然而，时代的巨轮无情碾过。1307年，法国国王腓力四世出于政治和财务目的，突然下令逮捕全法国的圣殿骑士，这个显赫一时的修会迅速土崩瓦解。拉库韦尔图瓦拉德的命运也随之悬于一线。但历史在这里拐了个弯，财产并未被国王完全没收，而是被转移给了另一个骑士团——医院骑士团（又称马耳他骑士团）。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`接手后的医院骑士团面临着一个棘手的问题：英法百年战争的战火已经蔓延至法国南部，四处劫掠的“大公司”散兵游勇威胁着每一个没有防御的村庄。于是，在1439年至1450年这关键十年里，我们今天看到的、决定村庄最终形态的工程启动了。医院骑士们决定，用一道坚固的城墙将整个村庄保护起来。他们就地取材，用高原上取之不尽的石灰岩，建造了长约400米、高约8米的防御墙，并配备了 walkway 和箭垛。为了加强防御，他们甚至填平了村庄南侧原有的圣殿骑士时期建造的教堂，将其部分结构融入城墙，并在其原址上方，建造了一座新的、更具防御功能的教堂——圣克里斯托利教堂。这道城墙，不是为了一场宏大的战役，而是为了在乱世中，给百来个村民和他们的牲畜一个可以紧闭大门、熬过危机的庇护所。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城墙建好后的几百年，拉库韦尔图瓦拉德进入了它漫长而平静的“琥珀时光”。它按照中世纪的设计，完美地运转着：村民们在墙内的土地上耕种（你至今能在村里看到那些被称作“cadoles”的小型田间石屋），在公共面包烤炉分享热量，在教堂钟声的指引下作息。法国大革命的风暴对它影响相对较小，它只是默默更换了主人，从骑士团变成了私人财产。真正的挑战来自19世纪末和20世纪的现代化浪潮。高原的生活艰苦，年轻人纷纷离开，去往城市寻找机会。村庄一度濒临废弃，许多房屋坍塌，只剩下断壁残垣。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机出现在20世纪60年代。人们开始重新珍视这种不可再生的文化遗产。拉库韦尔图瓦拉德被列为法国历史古迹，一项漫长而细致的修复工程开始了。修复者们遵循“修旧如旧”的原则，小心翼翼地将坍塌的石墙重新垒起，修补屋顶的石板瓦，加固拱门。最关键的是，他们鼓励人们回到这里生活，用现代的舒适设施小心地装点这些古老的石壳，让历史建筑重新焕发活力。正是这种充满敬意的修复和持续的生活气息，才让今天的我们，能够如此完整地走进一个中世纪骑士团村庄的日与夜，触摸那段遥远而真实的时光。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要彻底感受拉库韦尔图瓦拉德的精髓，建议安排整整大半天的时间。最佳抵达时间是上午九点前后，此时旅行团的大巴还未涌入，阳光斜射，能给城墙和街道投下富有戏剧性的长长影子，是拍照和静静感受的黄金时段。整体游览节奏宜慢不宜快，核心在于“沉浸”而非“打卡”。建议先用约2小时沿城墙完整走一圈，从外部和内部两个视角建立对村庄格局的宏观印象；再用1-1.5小时深入街巷，探索细节和室内空间（主要是教堂）；最后留出至少1小时在村子里“无所事事”，比如在咖啡馆小坐，或只是坐在某处石阶上发呆，看光影移动。这样的安排能让你从宏观到微观，最终融入它的节奏，真正体会“时光胶囊”的含义。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季（7-8月）上午十一点后到下午四点前是游客高峰，狭窄的主街会非常拥挤，尽量早到或晚留以避开人潮。村庄内几乎全是凹凸不平的石板路和台阶，务必穿一双绝对舒适防滑的鞋子。村里仅有的一两家小餐馆选择有限且可能排队，如果计划用餐，要么提早，要么自备一些简单的野餐食物在城墙外风景优美处享用。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主城门（Porte de la Maladrerie）进入后，不要急于深入，先左转沿着内侧的城墙根走一段，用手触摸那冰凉粗糙、布满凿痕的巨石，感受最初的防御脉搏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过宁静的洗衣池广场，顺着缓坡向上来到村庄心脏位置的圣克里斯托利教堂，在昏暗室内静立片刻，让眼睛适应后寻找那些幸存的中世纪壁画碎片和简朴的圣殿骑士十字标志。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂侧门出来，毫不犹豫地爬上通往城墙步道的狭窄石阶，花至少半小时在上面慢行一圈，从制高点俯瞰整个村庄如迷宫般的石板屋顶和远处无垠的高原旷野。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下城墙后迷失在仅容一人通过的“羊肠小道”里，刻意避开主街，去发现那些被鲜花装点的隐秘庭院、古老的公共面包烤炉遗迹和门楣上刻着古老符号的民居。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到南城墙外那口被古老石屋环抱的“丰特纳德”地下水池，沿着阶梯走入地下，感受那里沁人心脾的凉意和回荡的水滴声，想象几个世纪以来村民在此取水的日常。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在村子西侧高处的“贝尔维尤”空地长椅上坐下，面对夕阳的方向，看傍晚的金色光芒如何一点点为整个石头村庄镀上蜂蜜般的暖色，直至阴影吞噬最后一道屋脊。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`村庄西南侧外墙脚下仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到日落前，阳光从西侧照亮整个城墙立面，站在远处草地上用广角镜头拍摄，能将雄伟的城墙、教堂塔楼和高原天空一同纳入画面，构图时注意利用地面的野花或石墙作为前景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主街中段光影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`清晨九点前或下午五点后，阳光斜射入狭窄的街道，在古老的石板路上投下明暗交替的光斑，蹲低机位，拍摄一双走过光影的脚或一只在门边打盹的猫，极具故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城墙步道转角俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`登上城墙后，在东北角的箭垛处向下拍摄，可以框取到层层叠叠的石板屋顶、教堂的钟楼以及远处蜿蜒的小路，使用中焦段避免画面过于杂乱，最佳光线在晴天的上午。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣克里斯托利教堂内部光影`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，当阳光恰好从南侧的小窗射入教堂内部，会在古老的石柱和地面上形成一道明亮的“光之路径”，关闭闪光灯，提高ISO，捕捉这静谧而神圣的一刻。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`村口橄榄树旁的全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落时分，走到主停车场东侧的那棵孤零零的老橄榄树旁，以它的虬枝为画框，拍摄夕阳余晖下村庄的剪影，展现其遗世独立的孤独美感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机拍摄前务必确认当地法规，村庄及周边空域可能有飞行限制。尊重居民隐私，避免将镜头直接对准民居窗户或院内活动的居民进行拍摄。室内尤其是教堂内，绝对禁止使用闪光灯和三脚架（如果未获特别许可），保护脆弱的古迹。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在村庄城墙内由15世纪石屋改造的精品民宿，夜晚当最后一波游客散去，你便能独占整个星空下的中世纪街巷，在绝对的寂静中聆听历史。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`乡村风情`}</h4>
                  <p className="text-sm text-green-800">{`选择村庄外一公里处由传统农场（mas）改造的乡村旅馆，享受宽敞的房间和私人花园露台，早餐能品尝到主人自制的果酱和新鲜羊奶酪，真正融入高原农牧生活。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计避世`}</h4>
                  <p className="text-sm text-yellow-800">{`位于拉尔扎克高原另一处僻静村庄的现代设计型小型酒店，将极简美学与粗犷的石材结合，提供舒适的住宿和一流的高原全景视野，适合追求独特体验的旅人。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`历史爱好者之选`}</h4>
                  <p className="text-sm text-purple-800">{`驱车半小时前往米洛镇，入住一座19世纪庄园改建的酒店，在享受现代舒适的同时，也能以这里为基地，探索周边更多的骑士团遗址和著名的米洛高架桥。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`村庄内的住宿数量极其有限（可能只有两三处），必须提前数月预订，尤其是夏季和节假日。高原夜晚温差大，即便盛夏，入夜后也可能很凉，预订时确认住宿是否提供保暖设施。周边地区治安非常好，但夜间村庄和乡间道路几乎没有路灯，自驾者需小心驾驶。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开拉库韦尔图瓦拉德时，我的手里没有带回什么纪念品，但心里却像被那些石头填满了。填满的并非具体的知识，而是一种沉静而坚实的感觉。在这个崇尚宏大、追求速成的时代，这个小村庄固执地展示着另一种存在哲学：关于如何在局限中构筑完整（一道墙内就是一个世界），关于如何用最朴素的材料（石头和汗水）应对最漫长的时光，关于守护的终极意义或许不是为了进攻，而仅仅是为了让平凡的生活得以延续。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它不像巴黎或罗马那样，用辉煌的艺术冲击你的感官。它的力量是内向的、收敛的。它邀请你慢下来，停下脚步，去观察一道墙缝里长出的野草，去聆听风吹过城墙垛口的轻啸。在这里，你会突然意识到，历史从来不是教科书上扁平的文字，它曾经是，并且依然是，一群人生活的全部细节——他们从哪里取水，在哪里聚会，如何保护家园，又如何在日复一日的劳作中寻找意义。拉库韦尔图瓦拉德保存下来的，正是这份完整的“生活图纸”。对于每一位厌倦了浅尝辄止、渴望触摸时光真实纹理的旅人来说，这里不是景点，而是一次珍贵的时空对话。来这儿，不是为了看“它”，而是为了通过它，看见那个更厚重、更坚韧，也更真实的欧洲底色。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/dinan-medieval-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迪南中世纪古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dinan</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/place-vendome-paris" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    旺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">旺多姆广场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Place Vendôme</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rocamadour-sanctuary" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    罗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">罗卡马杜尔宗教圣地</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rocamadour</p>
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
