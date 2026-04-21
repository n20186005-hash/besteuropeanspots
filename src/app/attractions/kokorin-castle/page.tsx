import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科科日恩城堡 Kokořín Castle｜深藏在砂岩峡谷秘境中的浪漫骑士古堡 - 最佳欧洲景点',
  description: '你得先穿过一片魔法森林，才能真正遇见科科日恩。我说的“穿过”，可不是在平坦的公园散步。当你把车停在那个静谧的村庄边缘，顺着指示牌拐进一条向下延伸的泥土小径时，整个世界的声音仿佛瞬间被吸走了。取而代之的，是脚下厚厚落叶的沙沙声，混合着湿润泥土和腐烂树根散发出的、略带甜腥的肥沃气息。阳光被头顶茂密的山毛',
}

export default function KokorinCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '捷克', href: '/destinations/europe' },
            { label: '中波希米亚州（具体位于科科日恩地区）', href: '/destinations/europe' },
            { label: '科科日恩城堡', href: '/attractions/kokorin-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`科科日恩城堡・Kokořín Castle・捷克・中波希米亚州（具体位于科科日恩地区）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你得先穿过一片魔法森林，才能真正遇见科科日恩。我说的“穿过”，可不是在平坦的公园散步。当你把车停在那个静谧的村庄边缘，顺着指示牌拐进一条向下延伸的泥土小径时，整个世界的声音仿佛瞬间被吸走了。取而代之的，是脚下厚厚落叶的沙沙声，混合着湿润泥土和腐烂树根散发出的、略带甜腥的肥沃气息。阳光被头顶茂密的山毛榉和松树切成碎片，斑驳地洒在路径上。然后，那些石头开始出现——不是普通的石头，是巨大、扭曲、被风和水侵蚀了千万年的砂岩怪石。它们像沉睡的巨兽，像奇幻城堡的废墟，又像现代雕塑大师随意丢弃的作品，以不可思议的角度从苔藓地毯中崛起。
走着走着，峡谷越来越深，两侧的岩壁几乎要合拢。空气变得清凉，你能听到自己呼吸的回音，还有远处隐约的溪流声。就在你开始怀疑是不是走错了路时，一个转弯，它毫无预兆地出现了。密林的绿色帷幕忽然拉开，一座浅褐色的、有着完美圆柱形高塔的城堡，就那样孤傲地矗立在对面陡峭的山崖之巅。那一瞬间的感觉非常奇异，它不是雄伟的布拉格城堡，也不是精致的捷克克鲁姆洛夫，它更像一个从童话绘本里直接撕下来、被轻轻放在这片原始峡谷之上的梦境模型。塔楼笔直地刺向天空，而城堡的基座仿佛是从岩石里生长出来的，与大地血脉相连。你听不到任何城市的喧嚣，只有风穿过塔楼窗洞的呜咽，和鸟群在城堡上空盘旋的鸣叫。这里的时间，是以树木的年轮和岩石的风化速度来计算的。
这座城堡在当地人心中，与其说是一个热门景点，不如说是一个精神地标和徒步天堂的终点。你会遇到带着登山杖、装备专业的捷克家庭，他们的目标可能不是仔细研究城堡里的盔甲，而是享受从各个角度仰望它、环绕它的过程。孩子们把那些砂岩怪石当成天然的游乐场，爬上爬下。它完美诠释了波西米亚土地那种深植于自然的浪漫——不是矫饰的浪漫，而是带着荒野气息、孤独而坚毅的浪漫。它的核心魅力，就在于这种极致的“隐藏感”和“反差感”：在距离首都仅仅一小时车程的地方，竟藏着如此原始、静谧、超现实的自然与人文结合体。你不是去“参观”一座城堡，而是去“发现”一个秘密，并成为这个秘密的一部分。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你得先穿过一片魔法森林，才能真正遇见科科日恩。我说的“穿过”，可不是在平坦的公园散步。当你把车停在那个静谧的村庄边缘，顺着指示牌拐进一条向下延伸的泥土小径时，整个世界的声音仿佛瞬间被吸走了。取而代之的，是脚下厚厚落叶的沙沙声，混合着湿润泥土和腐烂树根散发出的、略带甜腥的肥沃气息。阳光被头顶茂密的山毛榉和松树切成碎片，斑驳地洒在路径上。然后，那些石头开始出现——不是普通的石头，是巨大、扭曲、被风和水侵蚀了千万年的砂岩怪石。它们像沉睡的巨兽，像奇幻城堡的废墟，又像现代雕塑大师随意丢弃的作品，以不可思议的角度从苔藓地毯中崛起。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走着走着，峡谷越来越深，两侧的岩壁几乎要合拢。空气变得清凉，你能听到自己呼吸的回音，还有远处隐约的溪流声。就在你开始怀疑是不是走错了路时，一个转弯，它毫无预兆地出现了。密林的绿色帷幕忽然拉开，一座浅褐色的、有着完美圆柱形高塔的城堡，就那样孤傲地矗立在对面陡峭的山崖之巅。那一瞬间的感觉非常奇异，它不是雄伟的布拉格城堡，也不是精致的捷克克鲁姆洛夫，它更像一个从童话绘本里直接撕下来、被轻轻放在这片原始峡谷之上的梦境模型。塔楼笔直地刺向天空，而城堡的基座仿佛是从岩石里生长出来的，与大地血脉相连。你听不到任何城市的喧嚣，只有风穿过塔楼窗洞的呜咽，和鸟群在城堡上空盘旋的鸣叫。这里的时间，是以树木的年轮和岩石的风化速度来计算的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城堡在当地人心中，与其说是一个热门景点，不如说是一个精神地标和徒步天堂的终点。你会遇到带着登山杖、装备专业的捷克家庭，他们的目标可能不是仔细研究城堡里的盔甲，而是享受从各个角度仰望它、环绕它的过程。孩子们把那些砂岩怪石当成天然的游乐场，爬上爬下。它完美诠释了波西米亚土地那种深植于自然的浪漫——不是矫饰的浪漫，而是带着荒野气息、孤独而坚毅的浪漫。它的核心魅力，就在于这种极致的“隐藏感”和“反差感”：在距离首都仅仅一小时车程的地方，竟藏着如此原始、静谧、超现实的自然与人文结合体。你不是去“参观”一座城堡，而是去“发现”一个秘密，并成为这个秘密的一部分。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`科科日恩城堡`} />
                <InfoRow label="英文名称" value={`Kokořín Castle`} />
                <InfoRow label="正式名称" value={`Kokořín Castle`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`中波希米亚州（具体位于科科日恩地区）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座起源于14世纪、后在19世纪浪漫主义浪潮中被诗意重建的波西米亚骑士城堡，是捷克国家文化遗产中“浪漫城堡”的典范。`} />
                <InfoRow label="建筑特色" value={`以其标志性的高大圆柱形主塔（圆塔）为核心，与陡峭的砂岩悬崖和密林融为一体，呈现出易守难攻又极具画面感的姿态。`} />
                <InfoRow label="建筑风格" value={`最初为哥特式军事堡垒，19世纪的重建融合了新哥特式浪漫主义风格，使其外观更具戏剧性和童话色彩。`} />
                <InfoRow label="文化价值" value={`它不仅是中世纪军事建筑的见证，更是捷克民族浪漫主义精神与自然景观崇拜的完美物质载体，激发了无数艺术家和诗人的创作灵感。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡全年开放，但开放季与冬季有较大差异。主体城堡（包括塔楼和展览）通常在四月至十月的周二至周日开放，具体时间为上午9点至下午4点（夏季可能延长至下午5点）。十一月至三月为冬季期，仅周末或预约开放，且内部参观受限。城堡庭院全年可免费进入。重要提示：开放时间可能因天气和维修调整，务必在出行前查阅官网最新公告。`} />
              <InfoRow label="门票价格" value={`参观分为不同区域，价格如下：基础庭院参观免费。完整城堡导览游（含主楼、骑士大厅、塔楼攀登）成人票约为150捷克克朗（约6欧元），儿童、学生及老人享有优惠票价。家庭套票更划算。仅攀登塔楼俯瞰峡谷的票价为约80捷克克朗。支持现金（捷克克朗）及部分信用卡支付。`} />
              <InfoRow label="地址" value={`Kokořín 1, 277 23 Kokořín, Czechia`} />
              <InfoRow label="交通方式" value={`从布拉格出发是最佳选择。首先抵达布拉格中央火车站或地铁B线Černý Most站旁的公交总站。乘坐前往Mělník方向的巴士（如编号388路），在Kokořín, rozc.或Kokořín, Podhradí站下车，车程约1小时15分钟。下车后，需要沿着清晰的森林小径步行约20-30分钟，穿过神奇的砂岩峡谷才能抵达城堡脚下。自驾是最灵活的方式，从布拉格出发约50分钟车程，可将车停在村庄指定的免费停车场，然后享受穿越森林的最后一段徒步。班车频率不高，建议提前查询巴士时刻表并规划好返程时间。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科科日恩的故事，是一部典型的“兴起-衰落-浪漫重生”的捷克史诗，而它的命运，始终与脚下这片奇异的砂岩土地紧密相连。它的诞生要追溯到14世纪中叶，大约是1320年左右。那时，波希米亚的贵族们热衷于在战略要地修建堡垒，以彰显权力和保护领地。一个名叫海内克（Hynek）的伯科维茨（Berkov）家族成员，看中了科科日恩深谷中这块几乎无法从侧面攻打的岩石山脊。于是，最初的哥特式城堡在这里拔地而起，它包含了一座坚固的宫殿和一座用于瞭望和最后防御的巨型圆塔。在随后的胡斯战争（15世纪初）风暴中，这座坚固的城堡发挥了作用，它一度成为胡斯派军队的据点，见证了那个宗教与战火纷飞的动荡年代。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，就像许多中世纪城堡的命运一样，随着军事技术的进步（特别是火炮的出现）和贵族居住习惯的改变，科科日恩的战略价值逐渐丧失。它不再舒适，也不够宏大。到了16世纪，它已被遗弃，沦为废墟。此后的三百多年里，风雨和藤蔓成了它的主人。圆塔无言地矗立，宫殿的屋顶坍塌，野树从墙壁的裂缝中长出。它变成了一个纯粹的浪漫意象，一个沉睡在森林深处的梦，偶尔出现在当地传说和流浪诗人的篇章里。这种“被遗忘”的状态，反而为它19世纪的华丽转身埋下了伏笔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转机发生在19世纪的浪漫主义浪潮席卷欧洲之时。捷克民族复兴运动方兴未艾，知识分子和艺术家们热衷于寻找和重建那些能象征民族历史与精神的历史遗迹。科科日恩，这座与壮丽自然完美融合的废墟，恰好击中了浪漫主义的所有要点：孤独、崇高、自然之力、历史的沧桑。于是，它被一位颇具眼光和财力的人物“拯救”了——他就是来自布拉格的商人瓦茨拉夫·什帕切克。在19世纪末到20世纪初（具体是1911年至1916年），什帕切克投入巨资，对城堡进行了大规模修复和重建。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但这次重建并非严格的考古还原，而是一次充满浪漫主义情怀的“再创作”。建筑师爱德华·索阿雷克在保留原始哥特式核心（尤其是那座珍贵的圆塔）的基础上，为城堡添加了大量新哥特式的装饰元素，比如更高的尖顶、更华丽的窗棂，让城堡的轮廓在森林的映衬下更具戏剧性和画面感。它的内部也被重新设计，布置成符合当时人们对“中世纪骑士时代”想象的样子，挂上盔甲、武器和挂毯。这次重建，本质上是将一座废弃的军事堡垒，变成了一件献给浪漫主义的艺术品，一座献给所有渴望逃离工业时代、向往田园诗歌的人们的“理想城堡”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "进入20世纪，城堡经历了国有化，并作为文化遗产对公众开放。它甚至因为其无可替代的浪漫气质，在众多电影和童话改编作品中担任背景。今天，我们看到的科科日恩，正是这次浪漫主义重建的杰作。它不是一个“原汁原味”的中世纪遗址，却是一个更能代表捷克民族灵魂中那份对自然、历史和诗意无限眷恋的文化符号。它的每一块石头，都讲述着从实用到废弃，再从废墟中被梦想重新点亮的传奇历程。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完全沉浸于科科日恩的魔力，请务必安排一整天的时间，并将重点放在“旅程”本身，而不仅仅是城堡建筑。最佳方案是选择一个晴朗的工作日清晨出发，上午九点左右抵达徒步起点。这样你能避开周末拥挤的人潮，独享森林与峡谷的宁静，并且在光线最柔和的上午拍摄城堡。整体耗时约为5-6小时，其中徒步往返约1.5-2小时，城堡内部仔细参观约1.5小时，剩下的时间用于在城堡庭院或下方峡谷野餐、发呆、从不同角度欣赏。节奏应该是放松的、探索式的，允许自己不时偏离主径，去摸摸那些奇怪的砂岩，或坐在某块巨石上听听风声。记住，抵达城堡是高潮，但穿越奇幻峡谷的过程才是这趟体验的灵魂。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿着舒适防滑的徒步鞋或运动鞋，峡谷小径布满树根、沙石和潮湿的苔藓，普通休闲鞋极易打滑。夏季请携带充足的饮用水和简单的零食，城堡内的餐饮选择非常有限，峡谷中也没有商店。警惕天气变化，如果预报有雨，峡谷小路会变得非常泥泞难行，建议更改行程。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从科科日恩村停车场旁的信息板出发，毫不犹豫地钻进那条标记清晰、向下通往“Podhradí”（城堡下）的幽深林间小径。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`放慢脚步，仔细观察并触摸小径两旁开始出现的那些形态各异的巨大砂岩 formations，感受它们被时光雕琢出的光滑曲线和冰冷体温。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在峡谷最狭窄、岩壁近乎合拢的“咽喉”地段停留片刻，仰头感受那份被巨石包围的压迫感和清凉的空气。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出密林，在第一个开阔的观景平台停下脚步，完成与科科日恩城堡震撼的初次对视，并用相机记录下它镶嵌在翠绿山崖上的全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着“城堡环线”的标识继续前行，绕到城堡的东侧和北侧，从不同角度欣赏城堡与岩石根基融为一体的雄姿，并寻找通往城堡大门的上坡路。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`通过古老的石桥进入城堡外墙大门，先在内部庭院里转一圈，感受被高墙环绕的氛围，并仰望那座标志性的圆柱主塔。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参加城堡组织的导览团（如果开放），登上狭窄的旋转楼梯，攀上圆塔的顶端，将整个科科日恩峡谷森林的壮阔绿毯尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观结束后，不要原路快速返回，可以沿着城堡下方的另一条小径探索，或许会发现一个隐蔽的、能拍到城堡倒影的小水潭。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`峡谷入口仰角`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点前，从主徒步小径刚进入峡谷约200米处的一个小拐弯，用广角镜头低角度拍摄，可以将前景的巨大怪石与远处若隐若现的城堡塔尖一同纳入画面，营造探索与发现的叙事感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡正南观景台全景`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光能充分照亮城堡浅色墙面时，站在城堡正南方森林边缘的官方观景台，使用中焦段拍摄，能获得城堡、悬崖与底部森林层次分明的标准明信片式全景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圆塔之巅俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`登上圆塔顶部后，将相机或手机镜头从垛口小心伸出，垂直向下拍摄城堡的内院和蜿蜒上山的路径，几何感强烈，极具视觉冲击力。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`黄昏剪影与蓝调时刻`}</h4>
                  <p className="text-sm text-gray-700">{`在城堡关闭后（夏季傍晚），退回到峡谷对面的小山坡上，等待日落之后天空呈现深蓝色调的时刻，拍摄城堡和圆塔灯光初亮的剪影，氛围感绝佳。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`峡谷内光线复杂，树林遮蔽处和阳光直射处光比极大，建议使用HDR模式或准备好后期处理。使用无人机拍摄前，务必确认当地法规，城堡上空可能有飞行限制。尊重其他游客和自然环境，避免为了拍照而攀爬危险的未设防岩石区域。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`波西米亚乡村民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在科科日恩村或邻近如Mšeno这样的小镇里由家庭经营的温馨民宿，清晨在花园里享用女主人自制的果酱和新鲜面包，感受真正的乡村苏醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`森林边缘隐居木屋`}</h4>
                  <p className="text-sm text-green-800">{`在Booking上寻找隐藏于科科日恩自然保护区边缘的独栋小木屋，夜晚只有壁炉的火光和窗外的虫鸣相伴，是彻底逃离都市的完美选择。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`梅尔尼克古城酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`如果追求更多便利和餐饮选择，可以驱车20分钟住进历史名城梅尔尼克（Mělník）的河畔酒店，那里以葡萄酒庄闻名，晚上可以品尝本地美酒，远眺两河交汇。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`布拉格基地往返`}</h4>
                  <p className="text-sm text-purple-800">{`对于时间极其紧凑的旅行者，最实际的选择仍是住在布拉格，利用一整天早出晚归进行科科日恩的探险之旅，毕竟交通还算方便。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "保护区内的住宿数量稀少且非常热门，尤其是在夏季和秋季周末，务必提前数月预订。乡村地区夜晚非常黑暗安静，几乎没有任何夜生活，适合追求静谧和自然体验的旅行者。自驾是体验周边住宿灵活性的关键。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开科科日恩很久以后，脑海里挥之不去的，不是城堡内部某件具体的展品，而是那种混合着泥土、树皮、冷石和远处野花的气味，是光线在砂岩怪石上移动的轨迹，是攀爬最后一段陡坡时心跳加速、抬头看见塔楼门洞的瞬间悸动。这座城堡教给我的，是关于“抵达”的真正意义。在这个所有名胜古迹都被高效交通线直接连接到停车场、拍照打卡即走的时代，科科日恩固执地保留着一份古老的仪式感——你必须用双脚走过一段路，必须付出一点汗水，必须亲身穿过那片具有魔法的森林，才能最终站在它面前。这份“不易”，让最终的“相遇”变得无比珍贵和深刻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它更像一个提醒，提醒我们最美的风景往往不在明确的目的地，而在通往它的路上；最动人的历史不总是陈列在玻璃柜里，而是呼吸在它周围的山风与密林之中。在快得让人眩晕的世界里，科科日恩和它的峡谷是一个按下暂停键的角落。它让我们重新学习“漫步”，学习用所有的感官去触碰一个地方，而不只是用眼睛扫描。每一位热爱深度游的旅人，都应该来一次科科日恩。不仅是为了看一座漂亮的城堡，更是为了体验一次完整的、从身体到心灵的“沉浸式抵达”，找回旅行最初那份探险的兴奋与宁静的归属。在这里，你会明白，有些地方，注定不是为了被匆匆路过，而是为了被慢慢发现，并长久地珍藏于记忆的秘境里。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/rapperswil-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉珀斯维尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rapperswil Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/the-ancient-city-of-acerenza" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿切伦扎古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">The Ancient City of Acerenza</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bourglinster-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布尔格林斯特城堡（隐秘的十二世纪贵族双堡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bourglinster Castle</p>
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
