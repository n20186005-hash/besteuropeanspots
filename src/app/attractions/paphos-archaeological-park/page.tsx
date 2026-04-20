import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '帕福斯考古公园 Paphos Archaeological Park｜在地中海阳光下，解读众神与罗马皇帝的史诗马赛克 - 最佳欧洲景点',
  description: '当你穿过那道不起眼的入口，最先迎接你的不是任何宏伟的建筑，而是地中海上空那几乎有重量的、金灿灿的阳光，以及混合着干燥泥土、野生茴香和淡淡海盐气息的风。眼前展开的，不是一个被栏杆围起来的死气沉沉的“公园”，而是一片直接铺展在天地之间的、巨大的时间废墟。你的脚下是两千多年前的古罗马道路，碎石已被岁月和无...',
}

export default function PaphosArchaeologicalParkPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '帕福斯考古公园', href: '/attractions/paphos-archaeological-park' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`帕福斯考古公园・Paphos Archaeological Park・塞浦路斯・帕福斯`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你穿过那道不起眼的入口，最先迎接你的不是任何宏伟的建筑，而是地中海上空那几乎有重量的、金灿灿的阳光，以及混合着干燥泥土、野生茴香和淡淡海盐气息的风。眼前展开的，不是一个被栏杆围起来的死气沉沉的“公园”，而是一片直接铺展在天地之间的、巨大的时间废墟。你的脚下是两千多年前的古罗马道路，碎石已被岁月和无数访客的脚步打磨得光滑，蜿蜒着通向蔚蓝的海岸线。
这里最摄人心魄的，是那些被精心保护在简易棚屋下的马赛克画。蹲下身，凑近看，你会瞬间忘记时间。酒神狄俄尼索斯的狂欢队列栩栩如生，葡萄的紫色、肌肤的肉色、衣袍的鹅黄色，历经十几个世纪的风霜，依然鲜艳得令人屏息。你能想象公元二三世纪的贵族，穿着凉鞋，踱步在这冰凉而奢华的艺术品上，谈论着帝国的新闻或哲学。海涛声是恒久的背景音，与遗址的寂静形成奇妙的二重奏——一种繁华落尽后，被阳光和海风接管的、平静的永恒。
在当地人心中，这里不止是景点。你会看到塞浦路斯老夫妇在傍晚时分，来这里靠海的矮墙上并肩坐着，什么也不做，只是看着落日将罗马柱廊的残影拉长；孩子们在许可的空地上奔跑，把这里当作了解自己土地辉煌过去的最生动的课堂。它的核心魅力，就在于这种毫不刻意的“活着”的状态。历史不是被封存的标本，而是融入了风景、日常和每一次呼吸里，让你能以最放松的姿态，直接触摸到文明的温度与肌理。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你穿过那道不起眼的入口，最先迎接你的不是任何宏伟的建筑，而是地中海上空那几乎有重量的、金灿灿的阳光，以及混合着干燥泥土、野生茴香和淡淡海盐气息的风。眼前展开的，不是一个被栏杆围起来的死气沉沉的“公园”，而是一片直接铺展在天地之间的、巨大的时间废墟。你的脚下是两千多年前的古罗马道路，碎石已被岁月和无数访客的脚步打磨得光滑，蜿蜒着通向蔚蓝的海岸线。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里最摄人心魄的，是那些被精心保护在简易棚屋下的马赛克画。蹲下身，凑近看，你会瞬间忘记时间。酒神狄俄尼索斯的狂欢队列栩栩如生，葡萄的紫色、肌肤的肉色、衣袍的鹅黄色，历经十几个世纪的风霜，依然鲜艳得令人屏息。你能想象公元二三世纪的贵族，穿着凉鞋，踱步在这冰凉而奢华的艺术品上，谈论着帝国的新闻或哲学。海涛声是恒久的背景音，与遗址的寂静形成奇妙的二重奏——一种繁华落尽后，被阳光和海风接管的、平静的永恒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当地人心中，这里不止是景点。你会看到塞浦路斯老夫妇在傍晚时分，来这里靠海的矮墙上并肩坐着，什么也不做，只是看着落日将罗马柱廊的残影拉长；孩子们在许可的空地上奔跑，把这里当作了解自己土地辉煌过去的最生动的课堂。它的核心魅力，就在于这种毫不刻意的“活着”的状态。历史不是被封存的标本，而是融入了风景、日常和每一次呼吸里，让你能以最放松的姿态，直接触摸到文明的温度与肌理。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`帕福斯考古公园`} />
                <InfoRow label="英文名称" value={`Paphos Archaeological Park`} />
                <InfoRow label="正式名称" value={`Paphos Archaeological Park`} />
                <InfoRow label="国家" value={`塞浦路斯`} />
                <InfoRow label="城市" value={`帕福斯`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这里是整个塞浦路斯乃至地中海世界，从希腊化时期到拜占庭早期近千年间最重要的政治与文化中心之一。`} />
                <InfoRow label="建筑特色" value={`一片依偎着蔚蓝地中海的庞大露天遗址群，其灵魂是那些保存近乎完美、色彩依旧绚丽的罗马时期豪宅马赛克地板。`} />
                <InfoRow label="建筑风格" value={`以罗马时期建筑为核心，融合了希腊化时期的规划遗风与早期基督教的基础设施。`} />
                <InfoRow label="文化价值" value={`一部用石头、马赛克和地基写就的史诗，生动记载了古希腊神话信仰、罗马帝国奢华生活与早期基督教在此地的传播与碰撞。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`公园全年开放，但开放时间随季节变化。夏季（4月16日至9月15日）通常为上午8:30至晚上7:30；冬季（9月16日至4月15日）为上午8:30至下午5:00。最后入场时间在关闭前半小时。部分室内保护区域（如部分有顶棚的马赛克房屋）可能在午间最热时段有短暂的轮换关闭，以保护文物。主要的公众假期（如圣诞节、元旦）可能会全天关闭，而复活节等假日开放时间会缩短，建议行前务必在官方网站二次确认。`} />
              <InfoRow label="门票价格" value={`成人票价为4.5欧元。欧盟学生及65岁以上欧盟公民可享受半价优惠，需出示有效证件。塞浦路斯国立大学学生、18岁以下青少年及特定残疾人士可免费入场。门票是通票，包含公园内所有开放区域。现场购票只接受现金（欧元），不支持信用卡，这一点需要特别注意。门票当日有效，可以中途离场后再次进入（需在出口处盖章）。`} />
              <InfoRow label="地址" value={`Paphos Archaeological Park, Paphos, Cyprus`} />
              <InfoRow label="交通方式" value={`从帕福斯国际机场出发：最便捷的方式是乘坐出租车，车程约20分钟，费用在25-30欧元之间。如果选择公共交通，需先乘坐612路巴士到帕福斯市中心（Karavella）巴士站，耗时约30分钟，然后转乘610路巴士直达考古公园门口（“考古公园”站），全程约需1小时。从帕福斯港口或老城区：610路巴士是连接港口、老城和考古公园的专线，班次频繁（夏季每15-20分钟一班），票价1.5欧元。自驾前往的话，公园正门对面有一个大型免费停车场，非常方便。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事得从更早的时候说起。这片临海的土地，之所以被选中成为一座伟大城市——新帕福斯的基石，要归功于一位最后的希腊化时代君王。公元前4世纪末，托勒密王朝统治塞浦路斯，国王托勒密一世麾下的将军尼科克里昂，决定将都城从旧帕福斯（今库克里亚）迁移到这个拥有天然良港的地点。新城迅速崛起，成为托勒密帝国在东部地中海的关键行政与军事中心。你可以想象，第一批工匠在这里铺设街道、规划广场时，远方的亚历山大帝国刚刚分崩离析，希腊文明正与东方的埃及、波斯文化进行着激烈的交融。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的黄金时代，随着罗马战舰的到来而降临。公元前58年，塞浦路斯被并入罗马帝国。得益于其丰富的铜矿资源和战略位置，帕福斯被定为罗马塞浦路斯行省的首府。从此，这里成了总督府所在地，帝国精英、富商巨贾云集。我们现在看到的遗址核心，那些拥有惊人马赛克地板的豪宅，大多建于公元2至4世纪，正是罗马和平时期的顶峰。当时最富有的家族，竞相聘请来自亚历山大港或安条克的顶尖工匠，用数以百万计的小石块，在自家客厅和餐厅的地面上“绘制”出整套希腊神话故事，既是为了炫耀财富，也是彰显其希腊化的文化修养。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的篇章总是充满转折。公元4世纪，两次毁灭性的大地震重创了帕福斯。宏伟的建筑倒塌，许多豪宅被遗弃。但与此同时，另一股力量正在兴起——基督教。在地震的废墟之上，早期基督徒开始建造教堂，其中最具标志性的是遗址东侧那座庞大的早期基督教长方形会堂（Basilica of Chrysopolitissa）。传说使徒保罗曾在此地被绑在石柱上受鞭刑，那根“圣保罗之柱”至今仍矗立着。这片土地，从崇拜爱与美之女神阿佛洛狄忒（她的古神庙就在附近），转变为敬奉基督，其信仰的更迭脉络清晰可见。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`随后的几个世纪里，帕福斯的重要性逐渐被其他港口城市取代，这些辉煌的建筑被慢慢掩埋在尘土和遗忘之下。直到上世纪60年代，一次偶然的农民犁地，才让这些无价的马赛克重见天日。考古学家们小心翼翼地刷去泥土，如同开启一封封来自罗马时代的加密信件。如今，漫步其中，你走过的不仅是废墟，更是一个叠压着希腊化雄心、罗马奢华、地震灾难、基督教虔诚与最终沉寂的完整历史剖面。每一次潮起潮落，都在这片石头上留下了刻痕。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味这里，请务必预留至少3到4小时。最佳抵达时间是清晨公园一开门（夏季8:30，冬季8:30），或下午三四点以后。前者可以享受凉爽与宁静，独享遗址；后者则能邂逅地中海最迷人的黄昏，光线为马赛克和罗马柱镀上金边。游览节奏宜慢不宜快，这里不适合“打卡”，适合“沉浸”。建议从入口处的信息板和模型开始，建立整体空间概念，然后按从西向东的顺序游览，核心是几座以希腊神祇命名的马赛克豪宅（酒神之家、忒修斯之家等），最后以早期基督教大教堂遗址和海边罗马柱廊作为高潮与结束。记得穿一双绝对舒适、能走碎石子路的鞋，并带上充足的水和防晒用品，因为树荫非常稀少。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`绝对要避开正午12点到下午3点这段最炙热的时间，毫无遮蔽的遗址会迅速消耗你的体力和兴致。穿轻便透气的长袖衣物和宽檐帽比涂抹大量防晒霜更有效。公园内几乎没有餐饮点，只有入口处有一个小卖部，务必自备足量饮用水。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在游客中心稍作停留，看看那个巨大的遗址沙盘模型，让散乱的废墟在脑中先形成一个完整的古城蓝图。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主路径向西，第一个震撼来自“酒神之家”，蹲在那些描绘葡萄收获与狂欢场景的马赛克前，仔细找找那个醉态可掬的西勒诺斯老头。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`继续探索“忒修斯之家”，在宽阔的中庭想象罗马贵族的生活，并在地下室看到那幅描绘忒修斯杀死牛头怪米诺陶的杰作。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过一片公共建筑废墟，来到“埃翁之家”，欣赏那幅象征不朽的、美丽少年埃翁肖像马赛克，感受罗马人对永恒青春的迷恋。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`向东漫步至“早期基督教长方形会堂”遗址，赤脚感受被阳光晒得温热的古老石板，寻找那根传说中的“圣保罗之柱”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要走到遗址最东端的海岬，站在那排重新竖立的罗马柱廊下，面向无尽的地中海，感受作为古代世界中心之一的磅礴气势。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间允许，折返时探索一下不那么起眼的“阿斯克勒庇俄斯圣地”（医疗之神庙）遗址，体会古希腊罗马人对健康与神灵的诉求。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，在出口附近的小山丘上回望整个遗址，看夕阳如何将这片石头森林染成蜜糖色，为旅程画上一个完美的句号。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`海边罗马柱廊侧影`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，站在柱廊的西南侧，利用长焦镜头压缩空间，将一排罗马柱与蔚蓝的地中海和绚烂晚霞一同纳入画面，营造史诗感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`马赛克特写与光影`}</h4>
                  <p className="text-sm text-gray-700">{`选择正午阳光直射时（尽管热，但光线最好），进入有顶棚的马赛克房屋，将相机贴近地面，以极低角度拍摄马赛克图案的细节，让阳光形成的自然高光凸显石子的质感和色彩。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`剧场俯瞰全景`}</h4>
                  <p className="text-sm text-gray-700">{`爬上遗址内古罗马剧场（Odeon）的上层座位，以广角镜头拍摄，将剧场的石阶作为前景，中景是散落的遗址群，远景是湛蓝的地中海，层次感极强。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`“圣保罗之柱”框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`在早期基督教教堂遗址，利用残存的石拱门或窗洞作为天然画框，将孤立的“圣保罗之柱”框在中央，形成一种庄严而孤寂的历史凝视感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄马赛克时切勿使用闪光灯，强烈的光线会对千年颜料造成不可逆的损害。无人机飞行在考古公园上空通常是被严格禁止的，如需航拍必须提前向塞浦路斯文物部门申请特殊许可。尊重遗址，任何时候都不要为了拍照而踩踏或跨越保护围栏。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济便捷之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在帕福斯港口（Kato Paphos）步行可达考古公园的公寓式酒店，推窗见海，晚上能在海滨大道散步，早晨第一个步入寂静的遗址。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`中档特色体验`}</h4>
                  <p className="text-sm text-green-800">{`选择位于帕福斯老城（Ktima）山坡上的传统石屋民宿，感受更地道的塞浦路斯生活氛围，在露台享用早餐时能远眺蔚蓝海岸线和遗址所在的海角。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端奢华享受`}</h4>
                  <p className="text-sm text-yellow-800">{`入住考古公园以北海岸线旁的五星级度假村，拥有私人沙滩和顶级水疗，在历史与现代的极致享受间找到平衡，部分海景房阳台正对遗址风光。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`深度文化沉浸`}</h4>
                  <p className="text-sm text-purple-800">{`租下遗址附近村庄里一栋由传统农舍改造的别墅，享受私密庭院和无边泳池，自己从当地市场采购食材烹饪，像本地人一样生活几天。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`港口区（Kato Paphos）旅游设施最集中，夜晚热闹，但稍显嘈杂；老城区（Ktima）更安静、有本地生活气息，但需依赖巴士或出租车往返遗址。夏季（6-9月）是绝对旺季，住宿需提前数月预订；春秋季（4-5月，10-11月）气候宜人，价格也更优。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开帕福斯考古公园很久之后，那种奇特的感受依然萦绕着我。它不像那些修缮一新的城堡或宫殿，给你一个封闭的、确定的过去式答案。它更像一个巨大的、开放的谜题，邀请你用自己的脚步和想象力去参与解答。在这里，神话不再是书本上的故事，而是踩在脚下的、触手可及的画面；帝国的辉煌与脆弱，同时展现在精妙的马赛克和断裂的柱石之上。你能同时听到历史的宏大叙事与个体生命的细微回响——总督的权杖、主妇的陶罐、商人的钱币、信徒的祈祷，最后都归于同一种地中海的风化与宁静。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求高效、迷恋崭新的快节奏世界里，这样一个地方的存在，是一种温柔的抵抗。它提醒我们，文明最坚固的基底，或许不是永续的繁荣，而是面对地震、战争、信仰更迭后，那种在废墟上依然能被识别出来的、对美与意义的执着追求。每一位热爱深度游的旅人，都应该来此沉浸一天。不是为了收集又一个景点，而是为了获得一种珍贵的“时间感”——让自己慢下来，坐在两千年前的石阶上，看同一片地中海潮起潮落。那一刻，你会明白，我们并非历史的过客，而是这漫长、断续而美丽的故事中，最新的一行篇章。`}</p>
            </div>
          </Section>

        </div>
      </div>
    </div>
  )
}
