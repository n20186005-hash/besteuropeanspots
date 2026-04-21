import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '斯克拉丁 Skradin｜彩色威尼斯小镇与克尔卡河秘境入口 - 最佳欧洲景点',
  description: '说真的，在见到斯克拉丁之前，我从未想过一个“门户”小镇可以美得如此独立、如此静谧。我的第一眼是从停车场旁的小坡望下去的——那一刻，时间好像被克尔卡河的水流揉慢了。一整片蜂蜜色、陶土红和鹅黄色的房子，像被孩童随意却精心地堆叠在舒缓的山坡上，每一栋都戴着统一的红色“小帽子”（瓦片屋顶），肩并肩地望向那片',
}

export default function SkradinDalmatiaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '克罗地亚', href: '/destinations/europe' },
            { label: '希贝尼克-克宁县', href: '/destinations/europe' },
            { label: '斯克拉丁', href: '/attractions/skradin-dalmatia' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`斯克拉丁・Skradin・克罗地亚・希贝尼克-克宁县`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说真的，在见到斯克拉丁之前，我从未想过一个“门户”小镇可以美得如此独立、如此静谧。我的第一眼是从停车场旁的小坡望下去的——那一刻，时间好像被克尔卡河的水流揉慢了。一整片蜂蜜色、陶土红和鹅黄色的房子，像被孩童随意却精心地堆叠在舒缓的山坡上，每一栋都戴着统一的红色“小帽子”（瓦片屋顶），肩并肩地望向那片既不是河也不是海的宽阔水湾。空气中有一股特殊的、清冽的香气，混合了河水淡淡的腥甜、岸边野生迷迭香的辛香，还有从咖啡馆飘出的浓缩咖啡的焦香。
我拖着行李，轮子在古老的石灰岩石板路上发出咕噜咕噜的声响，这几乎是镇子里最大的噪音了。主街窄窄的，两侧房子的阳台几乎要碰在一起，晾晒的床单和衣服在亚得里亚海的阳光下轻轻摆动，影子在墙上跳舞。当地人坐在街角阴影里，面前摆着一小杯咖啡，他们不看你，只是安静地沉浸在午后的慵懒里，仿佛几百年来他们的祖先都是这样坐着。走到码头边，水面像一块巨大的、颤动的绿松石，那些彩色房子的倒影在水中被拉长、揉碎，随着偶尔驶过的快艇微微荡漾。这里没有沙滩，只有石砌的堤岸，几个孩子直接就从这里跃入清澈见底的水中，笑声和水花声清脆地传来。
斯克拉丁最打动人的，正是这种“生活在此发生”的宁静感。它不像一个被真空包装的景点，而是一个呼吸着的、有脉搏的古老生命体。游客们来了又走，多半是冲着隔壁声名赫赫的克尔卡瀑布群，但小镇本身始终保持着一种宠辱不惊的从容。夜晚，当最后一班载满游客的船只离开，码头复归宁静，小镇才真正显露出它的灵魂——餐馆里坐满了用克罗地亚语聊天的家庭，烛光映在石墙上，空气中飘荡着烤鱼和蒜油的香味。你突然明白，这条通往自然奇迹的水路，起点本身就是一个关于时光与色彩的人文奇迹。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "说真的，在见到斯克拉丁之前，我从未想过一个“门户”小镇可以美得如此独立、如此静谧。我的第一眼是从停车场旁的小坡望下去的——那一刻，时间好像被克尔卡河的水流揉慢了。一整片蜂蜜色、陶土红和鹅黄色的房子，像被孩童随意却精心地堆叠在舒缓的山坡上，每一栋都戴着统一的红色“小帽子”（瓦片屋顶），肩并肩地望向那片既不是河也不是海的宽阔水湾。空气中有一股特殊的、清冽的香气，混合了河水淡淡的腥甜、岸边野生迷迭香的辛香，还有从咖啡馆飘出的浓缩咖啡的焦香。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "我拖着行李，轮子在古老的石灰岩石板路上发出咕噜咕噜的声响，这几乎是镇子里最大的噪音了。主街窄窄的，两侧房子的阳台几乎要碰在一起，晾晒的床单和衣服在亚得里亚海的阳光下轻轻摆动，影子在墙上跳舞。当地人坐在街角阴影里，面前摆着一小杯咖啡，他们不看你，只是安静地沉浸在午后的慵懒里，仿佛几百年来他们的祖先都是这样坐着。走到码头边，水面像一块巨大的、颤动的绿松石，那些彩色房子的倒影在水中被拉长、揉碎，随着偶尔驶过的快艇微微荡漾。这里没有沙滩，只有石砌的堤岸，几个孩子直接就从这里跃入清澈见底的水中，笑声和水花声清脆地传来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "斯克拉丁最打动人的，正是这种“生活在此发生”的宁静感。它不像一个被真空包装的景点，而是一个呼吸着的、有脉搏的古老生命体。游客们来了又走，多半是冲着隔壁声名赫赫的克尔卡瀑布群，但小镇本身始终保持着一种宠辱不惊的从容。夜晚，当最后一班载满游客的船只离开，码头复归宁静，小镇才真正显露出它的灵魂——餐馆里坐满了用克罗地亚语聊天的家庭，烛光映在石墙上，空气中飘荡着烤鱼和蒜油的香味。你突然明白，这条通往自然奇迹的水路，起点本身就是一个关于时光与色彩的人文奇迹。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`斯克拉丁`} />
                <InfoRow label="英文名称" value={`Skradin`} />
                <InfoRow label="正式名称" value={`Skradin`} />
                <InfoRow label="国家" value={`克罗地亚`} />
                <InfoRow label="城市" value={`希贝尼克-克宁县`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座见证了从伊利里亚人到罗马人，再到威尼斯共和国与奥斯曼帝国反复争夺的达尔马提亚战略要塞与繁荣港口。`} />
                <InfoRow label="建筑特色" value={`密集簇拥的威尼斯风格联排房屋，色彩柔和（赭石黄、陶土红、蜂蜜色），拥有优雅的拱形窗和红色瓦片屋顶，沿舒缓的坡地层层叠落至水边。`} />
                <InfoRow label="建筑风格" value={`主要呈现达尔马提亚地区的威尼斯哥特式与文艺复兴风格，夹杂着后续巴洛克式的修整痕迹。`} />
                <InfoRow label="文化价值" value={`是活着的达尔马提亚生活博物馆，不仅作为自然奇观克尔卡国家公园的门户，其本身静谧的河畔生活与深厚的历史层理同样是不可替代的文化遗产。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇本身全天开放，街道和历史遗迹可随时漫步。主要的教堂和博物馆开放时间一般为夏季（4月至10月）上午9点至晚上7点，冬季（11月至3月）开放时间缩短或需提前预约。镇上的游客中心以及前往克尔卡国家公园的船班运营时间随季节变化极大，夏季船班频繁（约每小时一班），冬季可能大幅减少或停运，出行前务必在官网核查。`} />
              <InfoRow label="门票价格" value={`进入斯克拉丁小镇免费。参观小镇内的圣灵教堂和斯克拉丁博物馆需要少量门票，约20-30库纳。主要费用在于前往克尔卡国家公园（斯克拉丁是其官方入口之一）。公园门票：成人旺季约200库纳，淡季约110库纳；儿童、学生及团体有优惠。从斯克拉丁码头乘船进入公园的门票通常已包含公园入场费，具体船票价格约50-80库纳往返，需在码头售票处或官网购买。`} />
              <InfoRow label="地址" value={`Ul. Braće Radić 1, 22222 Skradin, Croatia`} />
              <InfoRow label="交通方式" value={`从最近的扎达尔机场出发：驾车或乘坐出租车，沿D8/E65沿海公路向南行驶约60公里，车程约50分钟至1小时。从希贝尼克市出发：驾车仅需20分钟（约15公里），也有频繁的本地巴士连接，班次每小时约1-2班，非常方便。最诗意的抵达方式是自驾：当你从山丘驶下，碧绿的克尔卡河湾与一片暖色调的屋顶突然跃入眼帘，那感觉无与伦比。小镇内禁止外部车辆进入历史中心，需将车停放在入口处的大型免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要听懂斯克拉丁的石头诉说的故事，你得把时钟拨回两千多年前。最初，这里是伊利里亚部落的定居点，他们看中了这个深入内陆的隐蔽河湾，易守难攻。罗马人来了之后，赋予了它第一个重要的名字“Scardona”，并把它建设成达尔马提亚行省重要的内陆港口和自治市镇。罗马大道从这里经过，河湾里停泊着运送粮食、橄榄油和葡萄酒的船只，那段繁华的基石，至今仍可能埋在你脚下的某处。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "中世纪的烽烟彻底塑造了斯克拉丁的筋骨。它先后被克罗地亚国王、匈牙利王国和威尼斯共和国争夺。尤其是威尼斯人，从15世纪到18世纪的大部分时间里，他们是这里的统治者。你现在看到的那些优雅的联排房屋、拱廊和精致的石雕窗框，正是威尼斯共和国鼎盛时期留下的最直观的签名。他们把这里作为从内陆向海岸运输货物的关键枢纽，木材、牲畜、皮革通过斯克拉丁的码头运往威尼斯乃至整个地中海世界。那时的河湾，想必帆樯如林，人声鼎沸，码头上回荡着意大利语、克罗地亚语和各种贸易行话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，和平并非永恒。奥斯曼帝国的铁骑多次兵临城下，最惨烈的一次发生在1647年。奥斯曼军队在撤退时，几乎将整个城镇付之一炬。我们今天看到的美丽小镇，绝大部分是在那场浩劫之后，由坚韧的居民在废墟上一点点重建起来的。你可以留意那些建筑的下半部分，有时能看到颜色更深的、被火燎过的原始石基，而上面的部分则是新生。这像极了达尔马提亚民族的性格——在无数次毁灭与重生中，始终牢牢扎根于此。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "威尼斯共和国衰落后，斯克拉丁经历了奥匈帝国的统治，但它的经济重要性随着贸易路线的改变而逐渐黯淡。它从一个繁忙的港口，慢慢蜕变为一个宁静的渔业和农业小镇。或许正是这种“被遗忘”，意外地保护了它的历史肌理，使其没有被现代大规模开发所破坏。直到二十世纪后期，随着隔壁克尔卡国家公园的建立和克罗地亚旅游业的兴起，斯克拉丁才以另一种身份——通往自然天堂的优雅门廊——重新回到世界的视野。它的历史，从军事要塞到贸易枢纽，再到宁静小镇和旅游门户，像克尔卡河的水一样，流淌、转折，但从未断流。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要深度感受斯克拉丁，建议安排整整一天时间。上午完全留给小镇本身，在游客尚未大批涌入时品味它的静谧晨光；下午则乘船探访克尔卡国家公园的瀑布群。最佳抵达时间是前一晚入住，次日清晨8点左右出发探索。这样的节奏让你既能捕获小镇最美的光影，又有充足时间享受国家公园，傍晚返回后还能在小镇享用一顿悠闲的晚餐。整体耗时约8-10小时，是一种张弛有度的深度体验。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季前往克尔卡国家公园的船票非常紧俏，务必在抵达斯克拉丁的当天早上就去码头售票处购买指定时间的船票，避免下午扑空。小镇石板路多且起伏，务必穿一双绝对舒适防滑的步行鞋，高跟鞋在这里是“灾难级”选择。尊重当地居民隐私，拍照时尽量避免将镜头直接对准民居窗户或阳台上的私人生活场景。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨第一缕阳光洒在码头时，先从主码头沿着水边向北散步，看彩色房屋的倒影在碧绿河面上轻轻破碎又重组。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拐进狭窄如迷宫般的上城石阶小巷，任由脚步带领，不时停下抚摸那些被岁月打磨得温润光滑的石墙和古老的木门。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到位于小镇最高点的圣灵教堂，推开厚重的木门，让眼睛适应内部昏暗的光线，静静感受这座巴洛克殿堂的肃穆与宁静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂旁的观景平台俯瞰整个小镇全景，红色的屋顶、湛蓝的河湾和远山构成一幅绝佳的构图，此刻拍下的照片无人打扰。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后直奔镇中心的小广场，在最有名的“Konoba”传统餐厅的露天座位坐下，点一份用本地橄榄油和香草烹饪的达尔马提亚章鱼沙拉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午前往码头搭乘标志性的游船，随着船只驶离，回望斯克拉丁小镇在山坡上渐渐缩小的全景，仿佛一场告别仪式。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在克尔卡国家公园的斯克拉丁斯基布克瀑布群花费至少两小时，沿木栈道漫步，在清澈见底的湖边游泳，感受与自然融合的极致快乐。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`乘船返回斯克拉丁后，别急着离开，在码头边的咖啡馆点一杯“bijela kava”（白咖啡），看夕阳将整个河湾染成金红色，等待小镇华灯初上。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`河湾对岸的公路拐角处`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，从这里可以拍摄到斯克拉丁小镇背倚青山、面朝碧水的经典全景，暖色调光线会让房屋色彩格外饱和。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`上城小巷的阶梯视角`}</h4>
                  <p className="text-sm text-gray-700">{`上午九十点阳光斜射时，找一条有特色的古老石阶，从下往上拍，利用阶梯的纵深感引导视线，两侧彩墙形成天然画框。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣灵教堂钟楼下的小平台`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，以教堂古老的石砌钟楼为前景，焦点对准下方层层叠叠的屋顶和河湾，能拍出极具层次感和历史感的照片。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`主码头尽头回望`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚蓝调时刻，站在伸向水面的码头尽头，用慢门拍摄水面倒映的灯火阑珊的小镇，模糊游船轨迹能为画面增添动感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`威尼斯风格拱窗与光影`}</h4>
                  <p className="text-sm text-gray-700">{`正午前后，在狭窄小巷里寻找阳光透过拱形窗户或走廊，在地面投下美妙光影的角落，拍摄细节和建筑纹理。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`达尔马提亚的阳光非常强烈，尤其在河面和水边，建议携带偏振镜以消除水面反光，让湖水颜色更显翠绿。当地人普遍友善，但拍摄人物特写前，一个微笑和眼神征询是基本的礼貌。飞无人机理论上需要申请许可，尤其在靠近国家公园的区域，务必事先查询克罗地亚最新法规。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河畔隐居`}</h4>
                  <p className="text-sm text-blue-800">{`直接坐落在水边的百年石头老屋改造的民宿，推开窗就能把桨扔进河里，夜晚在私人小露台上聆听轻柔的水波声入睡。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`家庭温情`}</h4>
                  <p className="text-sm text-green-800">{`由本地家庭经营的市中心公寓，房东妈妈会为你准备自制的果酱和早餐，并热情地用地图给你画出只有本地人才知道的散步小径。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计感格调`}</h4>
                  <p className="text-sm text-yellow-800">{`将传统达尔马提亚石屋与斯堪的纳维亚简约设计融合的精品酒店，拥有一个静谧的内庭花园，是探索一天后完美的避世绿洲。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`历史沉浸`}</h4>
                  <p className="text-sm text-purple-800">{`位于上城古老宫殿内的数间客房，保留了原始的石墙拱顶和古董家具，住在里面仿佛成了威尼斯时期某位商贾的客人。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（7-8月）住宿非常紧张且价格高昂，务必提前至少3-4个月预订。选择上城（靠近教堂）的住宿视野绝佳但需要爬坡，选择码头附近的住宿交通便利但夜晚可能略热闹。斯克拉丁治安极好，可以放心夜归，但老街灯光较暗，自备一个小手电会更加方便。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开斯克拉丁好些日子了，我脑海里最常浮现的，不是克尔卡瀑布那雷霆万钧的壮丽，反而是小镇某个午后，墙角一只打盹的猫，和空气中几乎凝固的宁静。这或许就是斯克拉丁最珍贵的馈赠：它教会你在奔赴那些“著名”风景的路上，学会停留，学会欣赏“过程”本身的美。这个世界有太多目的地直奔主题的景点，而斯克拉丁，是这个主题一段无比优美的序曲。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个一切都追求效率和直达的时代，斯克拉丁保持了一种古老的“迂回”智慧。它不让你直接看到奇迹，而是让你先乘一小段船，经历一段水面上的期待；它不只是一个睡觉的驿站，它本身就是一个完整的、值得细读的故事。它让我们记起，旅行的意义不仅仅是收集地标，更是去感受一个地方独特的节奏和呼吸。如果你也厌倦了打卡式的奔波，渴望一次能让心灵沉下来的旅行，那么请一定来斯克拉丁住上两晚。让这里的河水声洗去你的匆忙，你会带走的不只是照片，还有一份关于如何生活得更宁静、更专注的隐秘启示。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/rijeka-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    里
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">里耶卡老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rijeka Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bale-istria-dinosaur-fossil-stone-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴莱（伊斯特拉半岛的恐龙化石与石屋小镇）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bale / Valle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/mirogoj-cemetery" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    米
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">米罗戈伊公墓</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mirogoj Cemetery</p>
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
