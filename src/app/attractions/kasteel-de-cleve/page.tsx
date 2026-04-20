import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '克莱沃城堡 Kasteel de Cleve｜从废墟中重生的中世纪骑士梦 - 最佳欧洲景点',
  description: '你得把车停在远处那条林荫道旁，然后步行过去。第一眼看见克莱沃城堡，它不像那些教科书里完美无缺的明信片宫殿。它更像是从大地和水泽中自然生长出来的一个古老的、略带忧伤的梦。巨大的双层护城河像两道沉睡的墨绿色丝带，静静环绕着城堡的倒影，水面上飘着些睡莲的叶子。最震撼的是它的主塔，那敦实的砖石结构依然倔强地...',
}

export default function KasteelDeClevePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '克莱沃城堡', href: '/attractions/kasteel-de-cleve' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`克莱沃城堡・Kasteel de Cleve・荷兰・阿纳姆附近 / 海尔德兰省雷嫩市`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你得把车停在远处那条林荫道旁，然后步行过去。第一眼看见克莱沃城堡，它不像那些教科书里完美无缺的明信片宫殿。它更像是从大地和水泽中自然生长出来的一个古老的、略带忧伤的梦。巨大的双层护城河像两道沉睡的墨绿色丝带，静静环绕着城堡的倒影，水面上飘着些睡莲的叶子。最震撼的是它的主塔，那敦实的砖石结构依然倔强地刺向天空，而与之相连的一侧翼楼，却只剩下精雕细琢的窗框轮廓镶嵌在空气里——那是二战炮火留下的、未曾被填补的伤口。风穿过那些空荡的窗口，发出低沉如管风琴般的鸣响，混合着近处草地被修剪后的清冽气味，还有远处莱茵河支流带来的潮湿水汽。
走近了，你会发现它并非纯粹的废墟。一种极其精妙的现代修复介入其中。新的钢构玻璃结构轻巧地嵌入古老的石墙缺口，透明的电梯井像水晶柱一样依附在斑驳的砖面上。这种对话毫不突兀，反而让古老的石头显得更加真实、更具岁月质感。这里没有喧嚣的旅游团，只有零星几个当地人推着婴儿车，或牵着狗在广阔的城堡公园里散步。你会看到有人在护城河边的长椅上安静地看书，鸽子扑棱着翅膀从塔楼的一个破窗飞进另一个。它早已不是权贵的私产，而是融入了社区肌理的一片肺叶，一个让人沉思的公共场所。
它的核心魅力，正在于这种“未完成”的状态和深邃的宁静。它不急于向你炫耀它曾经的辉煌，反而坦然展示它的伤疤与重生。你在新旧交织的庭院里漫步，指尖划过冰凉湿润的古老砖石，再触碰光滑温润的现代钢材，时间仿佛在这里被压缩、折叠。你能同时感受到14世纪骑士的呼吸、1944年战火的灼热，以及当代建筑师试图与历史和解的冷静手笔。这是一种罕见的、充满哲学意味的旅行体验，它让你思考什么是永恒，什么是记忆，以及我们该如何面对历史的断章。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你得把车停在远处那条林荫道旁，然后步行过去。第一眼看见克莱沃城堡，它不像那些教科书里完美无缺的明信片宫殿。它更像是从大地和水泽中自然生长出来的一个古老的、略带忧伤的梦。巨大的双层护城河像两道沉睡的墨绿色丝带，静静环绕着城堡的倒影，水面上飘着些睡莲的叶子。最震撼的是它的主塔，那敦实的砖石结构依然倔强地刺向天空，而与之相连的一侧翼楼，却只剩下精雕细琢的窗框轮廓镶嵌在空气里——那是二战炮火留下的、未曾被填补的伤口。风穿过那些空荡的窗口，发出低沉如管风琴般的鸣响，混合着近处草地被修剪后的清冽气味，还有远处莱茵河支流带来的潮湿水汽。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，你会发现它并非纯粹的废墟。一种极其精妙的现代修复介入其中。新的钢构玻璃结构轻巧地嵌入古老的石墙缺口，透明的电梯井像水晶柱一样依附在斑驳的砖面上。这种对话毫不突兀，反而让古老的石头显得更加真实、更具岁月质感。这里没有喧嚣的旅游团，只有零星几个当地人推着婴儿车，或牵着狗在广阔的城堡公园里散步。你会看到有人在护城河边的长椅上安静地看书，鸽子扑棱着翅膀从塔楼的一个破窗飞进另一个。它早已不是权贵的私产，而是融入了社区肌理的一片肺叶，一个让人沉思的公共场所。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，正在于这种“未完成”的状态和深邃的宁静。它不急于向你炫耀它曾经的辉煌，反而坦然展示它的伤疤与重生。你在新旧交织的庭院里漫步，指尖划过冰凉湿润的古老砖石，再触碰光滑温润的现代钢材，时间仿佛在这里被压缩、折叠。你能同时感受到14世纪骑士的呼吸、1944年战火的灼热，以及当代建筑师试图与历史和解的冷静手笔。这是一种罕见的、充满哲学意味的旅行体验，它让你思考什么是永恒，什么是记忆，以及我们该如何面对历史的断章。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`克莱沃城堡`} />
                <InfoRow label="英文名称" value={`Kasteel de Cleve`} />
                <InfoRow label="正式名称" value={`Kasteel de Cleve`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`阿纳姆附近 / 海尔德兰省雷嫩市`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座历经毁灭与重生，见证了荷兰与普鲁士边境数百年权力更迭的中世纪水畔要塞。`} />
                <InfoRow label="建筑特色" value={`典型的荷兰砖石结构水堡，拥有标志性的双层护城河、高大的主塔（donjon）以及经过现代手法修复、新旧材质对话鲜明的废墟墙体。`} />
                <InfoRow label="建筑风格" value={`最初建于中世纪的罗马式风格，后融合了文艺复兴时期的扩建元素，其修复部分则体现了21世纪极简主义的建筑哲学。`} />
                <InfoRow label="文化价值" value={`它不仅是一座城堡，更是一个关于记忆、失去与修复的鲜活课堂，是荷兰历史遗迹保护与可持续再生的典范。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡主体及博物馆开放时间为每年4月1日至10月31日，周二至周日上午10点至下午5点，周一闭馆（节假日除外）。11月1日至次年3月31日仅周末开放，时间为上午11点至下午4点。城堡公园全年免费向公众开放，日出至日落。请注意，内部导览团需提前预订，且冬季部分区域可能因维护关闭。`} />
              <InfoRow label="门票价格" value={`成人票：12.5欧元；65岁以上老人及学生票：10欧元；6-17岁儿童：7.5欧元；6岁以下儿童免费。家庭套票（2成人+2儿童）35欧元。门票包含城堡主体、历史博物馆、骑士厅及临时展览的参观。花园参观免费。`} />
              <InfoRow label="地址" value={`Cleverensestraat 8, 6566 BB Millingen aan de Rijn, Netherlands`} />
              <InfoRow label="交通方式" value={`从阿姆斯特丹史基浦机场出发最方便：乘坐直达火车前往奈梅亨中央车站，车程约1小时20分钟，班次频繁（每15-30分钟一班）。在奈梅亨换乘前往“Millingen aan de Rijn”方向的 regional bus 43路，在“Millingen, Cleverensestraat”站下车，步行5分钟即达城堡入口，巴士车程约40分钟，每小时1-2班。建议购买OV-chipkaart交通卡或在NS App上购买火车电子票。从德国杜塞尔多夫机场自驾前来约1.5小时，城堡外有免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`让我们把时钟拨回到14世纪初，那时这片位于莱茵河与瓦尔河之间的肥沃土地，是各方势力垂涎的边境地带。克莱沃城堡最初的故事，始于一个名叫“克莱夫”的骑士家族。他们需要一座坚固的堡垒，来宣示对这片土地的控制权，并抵御来自邻邦的骚扰。于是，他们选中了这片天然的湿地，利用错综的水道，建造了最初的核心——那座你今天依然能看到地基的罗马式主塔。石头是从远处运来的，砖是在当地烧制的，整个工程耗费了数年。可以想象，最初的克莱沃城堡是一个功能大于形式的军事据点，厚重的墙壁、狭小的窗户，骑士和他们的家眷在此生活，瞭望着平缓的荷兰地平线上可能出现的威胁。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡的“黄金时代”大概在16至17世纪。随着边境相对稳定，军事功能减弱，生活舒适度的需求提高了。当时的领主拆除了部分防御工事，增建了拥有更大窗户、更精美装饰的居住翼楼。文艺复兴的风潮也吹到了这里，庭院里可能种上了观赏植物，房间里挂起了壁毯。它从一个单纯的堡垒，转变为一个带有防御功能的乡间宅邸。这段时期，它可能见证过不少贵族间的宴会、狩猎和秘密谈判。然而，好景不长，欧洲大陆连绵的战争阴影再次笼罩。尤其是在80年战争和后来的法荷战争期间，城堡因其战略位置数次易主，城墙在一次次的围攻中变得斑驳。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但它真正的“死亡”，是在20世纪那场人类最大的浩劫中。1944年秋天，市场花园行动在这里附近展开，盟军与德军在莱茵河沿岸展开激烈拉锯。克莱沃城堡不幸被卷入了战火的核心。有记载说，它被炮火直接命中，也有说法是撤退的德军为防止其被用作据点而进行了破坏。总之，当硝烟散去，城堡的主体建筑已成为一片燃烧后的废墟，只剩下焦黑的主塔和部分外墙倔强地屹立。战后，这片废墟被遗忘在公园里，任由藤蔓攀爬，成为孩子们探险的乐园和鸽子筑巢的家园，一躺就是近半个世纪。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机发生在20世纪末。人们开始重新审视这些战争遗迹的价值——它们不仅是伤疤，也是不能再被遗忘的集体记忆载体。一个大胆的修复计划被提上日程。但这一次，不是要把它恢复成假古董。著名的荷兰建筑师们接受了挑战，他们的理念是“保护现状，谨慎介入”。于是，你看到了我们今天所见的奇迹：他们用最少的干预加固了危墙，清理了废墟，但在被炸毁的翼楼位置，他们没有选择复建，而是用轻盈的玻璃和钢结构搭建了新的多功能空间。古老的废墟成为了新建筑的“画框”。这个项目获得了诸多建筑大奖，它让克莱沃城堡从历史的受害者，变成了一个关于创伤、记忆与未来的强大象征。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`我强烈建议你在一个晴朗的 weekday 早晨，大约9点前抵达。这时公园里几乎没人，晨光斜射，给城堡的废墟镀上一层金边，护城河水面平静如镜，是感受它那份寂寥之美的最佳时刻。整体游览可以安排3到4个小时，节奏一定要慢。先从外围开始，让这座建筑的轮廓和它与环境的关系深深印入脑海，再进入内部探索细节与故事。这样的顺序能让你更好地理解从“毁灭”到“重生”的叙事弧线。下午阳光会转向，适合在另一侧拍照，但人也可能会多起来。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡内部部分地板是古老的石板或现代钢板，穿一双舒适防滑的鞋子至关重要。室内展览以荷兰语和英语为主，可免费租借语音导览器，务必领取。公园区域很大且免费，但傍晚后照明有限，建议日落前离开。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡公园西侧的主入口进入，沿着宽阔的砂石路慢慢走，让远处那座带着“伤疤”的城堡塔楼逐渐填满你的视野。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要绕到城堡的北面，站在外护城河的小木桥上，静静凝视水中完整的倒影和那些真实与倒影间残缺部分的对称。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`通过古老的石桥进入城堡内院，第一时间不要进室内，而是站在庭院中央，仰头360度转一圈，感受新旧材料如何在这个露天剧场里对话。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进那座被修复得极具现代感的主厅，用手触摸那些特意保留的焦黑原木与冰冷的新建钢柱，感受温度与质感的双重历史。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着透明的观光电梯或古老的旋转楼梯登上主塔的顶层平台，在那里迎着风，眺望无垠的荷兰田园与蜿蜒的莱茵河支流。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`抽时间在地下的小型博物馆里，看看那些从废墟中挖掘出的陶器碎片、生锈的铠甲扣和战前的老照片，让抽象的历史变得具体。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果天气好，游览结束后在护城河边的露天咖啡馆坐坐，点一杯荷兰咖啡，看着天鹅缓缓游过，把刚才的震撼慢慢消化。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`外护城河桥上的经典倒影`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前一小时，阳光角度低平，站在北侧小桥的中段，将相机贴近水面，能拍到城堡废墟与它在墨绿色水面上完美对称的倒影，画面宁静而富有超现实感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主塔顶楼的框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`登上主塔顶层后，寻找那些空荡的窗洞或炮眼，以它们为画框，将对岸的田园风光、风车或远处教堂的尖顶框入其中，形成强烈的古今对比与景深。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`骑士厅长廊的纵深引导线`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，阳光会射入南翼修复后的玻璃长廊，利用抛光混凝土地面和钢结构形成的强烈透视线条，拍摄人物行走其中的剪影或背影，极具现代建筑美感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城堡南翼玫瑰园仰拍主塔`}</h4>
                  <p className="text-sm text-gray-700">{`春季或夏季，在城堡南侧修复后的规则式玫瑰园中，以盛放的玫瑰为前景，低角度仰拍布满爬山虎的古老主塔，柔和的花朵与粗粝的石头形成绝妙碰撞。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效消除护城河面的反光，让倒影更清澈。航拍器在此区域飞行有严格限制，需提前查阅荷兰当地无人机法规，通常禁止在古迹上空飞行。拍摄内部空间时请关闭闪光灯，以保护展品并还原真实的光影氛围。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河岸田园风`}</h4>
                  <p className="text-sm text-blue-800">{`住在几公里外莱茵河畔的精品农庄民宿，醒来是满窗的绿意与牛羊的轻咩，主人会为你准备装满本地奶酪和新鲜鸡蛋的乡村早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计爱好者之选`}</h4>
                  <p className="text-sm text-green-800">{`奈梅亨市中心由旧火车站改造的设计酒店，工业风 loft 与中世纪古城景观结合，乘巴士往返城堡非常方便。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`历史沉浸体验`}</h4>
                  <p className="text-sm text-yellow-800">{`选择阿纳姆市中心战前老建筑里的特色酒店，房间挑高且装饰古典，傍晚可在阳台上回想《遥远的桥》那段历史，并与白天的城堡参观感受联动。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`背包客据点`}</h4>
                  <p className="text-sm text-purple-800">{`雷嫩市镇中心安静的家庭旅馆，价格亲切，公共厨房设施齐全，容易结识其他来自世界各地的独立旅行者，交换旅途故事。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果追求极致宁静，首选城堡周边村庄的住宿，但晚餐选择有限，需提前询问房东或自备。奈梅亨和阿纳姆的城市酒店生活便利，但往返城堡需预留交通时间。旺季（7-8月）周边住宿紧张，建议至少提前两个月预订。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开克莱沃城堡许久，那种独特的情绪依然包裹着我。它不像那些保存完好的宫殿，给你一种轻易就能触摸到辉煌过去的错觉。恰恰相反，它用一种近乎残酷的诚实，告诉你历史不仅是冠冕与盛宴，更是炮火、断裂与漫长的遗忘。但最打动我的，是它没有停留在废墟的哀伤里。那种充满敬意又大胆创新的修复，仿佛一场与历史的深情对话。它说：“我看到了你的伤口，我承认它，我不会掩盖它。但我仍要在此继续生活，继续创造。” 这是一种多么勇敢而智慧的生活态度。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个崇尚完美、滤镜和速成故事的世界里，克莱沃城堡是一个珍贵的异数。它教会我们，真正的力量不是来自无懈可击的表象，而是来自承载并超越伤痕的能力。它让我们慢下来，在断壁残垣与玻璃幕墙之间，思考时间、记忆与传承的真正含义。对于任何一位不满足于走马观花，渴望在旅途中获得更深层心灵共鸣的旅行者来说，这里都不该被错过。它不是一个景点，而是一堂课，一个让你内心变得沉静而丰盈的哲学课堂。在你离开时，你会带走的不只是照片，还有一份关于如何面对自身与时代伤痕的、沉甸甸的启示。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
