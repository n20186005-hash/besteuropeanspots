import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '拉克韦雷中世纪城堡 Rakvere Castle｜钻进爱沙尼亚“黑暗之心”，在废墟与游戏中触摸真实中世纪 - 最佳欧洲景点',
  description: '车子刚拐过那片茂密的树林，那座灰褐色的、看起来有点“伤痕累累”的城堡塔楼就毫无防备地撞进了视线。它不像新天鹅堡那样精致如童话，也不像爱丁堡城堡那样威严地俯瞰全城。拉克韦雷城堡就这么随意地趴在一座不高的石灰岩山丘上，城墙蜿蜒，有些部分完整，有些则塌成了土坡，长满了野草和苔藓，像一头正在打盹的、皮毛斑驳...',
}

export default function RakvereMedievalCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '拉克韦雷中世纪城堡', href: '/attractions/rakvere-medieval-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`拉克韦雷中世纪城堡・Rakvere Castle・爱沙尼亚・西维鲁县，拉克韦雷镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚拐过那片茂密的树林，那座灰褐色的、看起来有点“伤痕累累”的城堡塔楼就毫无防备地撞进了视线。它不像新天鹅堡那样精致如童话，也不像爱丁堡城堡那样威严地俯瞰全城。拉克韦雷城堡就这么随意地趴在一座不高的石灰岩山丘上，城墙蜿蜒，有些部分完整，有些则塌成了土坡，长满了野草和苔藓，像一头正在打盹的、皮毛斑驳的巨兽。第一印象是粗粝，甚至有些破败，但一种无比真实的、带着泥土和时光重量的气息，已经扑面而来。
走近了，空气的味道开始变得复杂。远处飘来一丝烟熏火燎的香气，那是城堡内重现的中世纪厨房正在烤制食物。混杂其中的，是石头被正午阳光晒过后散发的微热气味，潮湿土壤的味道，还有——你绝不会闻错——淡淡的马匹和干草的气息。声音更是热闹，铁匠铺传来有节奏的“叮当”声，远处靶场有箭矢破空的“嗖嗖”响，孩子们穿着略显宽大的粗布衣在庭院里奔跑嬉笑。这里不像一个被玻璃罩起来的博物馆，而像一个刚刚按下暂停键的中世纪小镇，居民只是暂时离开，炉火还温着，面包还在烤炉里。
最打动人的，是这里“活过来”的方式。你会发现，来这里的爱沙尼亚家庭特别多。爸爸妈妈带着孩子，不是走马观花地看展板，而是一起去尝试拉开一张真正的长弓，去触摸冰冷沉重的锁子甲，或者围在“修道士”身边，听他讲解如何用羽毛笔和矿物颜料制作一本手抄本。城堡不再是高高在上的历史符号，它变成了一个巨大的、可以触摸的游乐场和课堂。它用一种近乎顽皮的方式，消解了历史的距离感。在这里，历史不是书本上枯燥的年份，而是拉弓时手臂的酸痛，是铁匠锤下飞溅的火星，是地牢里那股挥之不去的阴冷潮湿气。
这就是拉克韦雷的核心魅力：它坦然展示着自己的残缺与古老，不试图去美化或重建一个完美的幻象。它邀请你走进它的“伤口”和“皱纹”里，用所有感官去体验一段粗糙、生动、有时甚至有点阴暗的历史。它不是让你来“观看”中世纪，而是让你来“度过”一段中世纪时光，哪怕只有几个小时。当你离开时，指甲缝里可能还留着一点泥土，耳朵里回荡着铸铁的声响，那种沉浸感，是任何光洁如新的城堡都无法给予的。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子刚拐过那片茂密的树林，那座灰褐色的、看起来有点“伤痕累累”的城堡塔楼就毫无防备地撞进了视线。它不像新天鹅堡那样精致如童话，也不像爱丁堡城堡那样威严地俯瞰全城。拉克韦雷城堡就这么随意地趴在一座不高的石灰岩山丘上，城墙蜿蜒，有些部分完整，有些则塌成了土坡，长满了野草和苔藓，像一头正在打盹的、皮毛斑驳的巨兽。第一印象是粗粝，甚至有些破败，但一种无比真实的、带着泥土和时光重量的气息，已经扑面而来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，空气的味道开始变得复杂。远处飘来一丝烟熏火燎的香气，那是城堡内重现的中世纪厨房正在烤制食物。混杂其中的，是石头被正午阳光晒过后散发的微热气味，潮湿土壤的味道，还有——你绝不会闻错——淡淡的马匹和干草的气息。声音更是热闹，铁匠铺传来有节奏的“叮当”声，远处靶场有箭矢破空的“嗖嗖”响，孩子们穿着略显宽大的粗布衣在庭院里奔跑嬉笑。这里不像一个被玻璃罩起来的博物馆，而像一个刚刚按下暂停键的中世纪小镇，居民只是暂时离开，炉火还温着，面包还在烤炉里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，是这里“活过来”的方式。你会发现，来这里的爱沙尼亚家庭特别多。爸爸妈妈带着孩子，不是走马观花地看展板，而是一起去尝试拉开一张真正的长弓，去触摸冰冷沉重的锁子甲，或者围在“修道士”身边，听他讲解如何用羽毛笔和矿物颜料制作一本手抄本。城堡不再是高高在上的历史符号，它变成了一个巨大的、可以触摸的游乐场和课堂。它用一种近乎顽皮的方式，消解了历史的距离感。在这里，历史不是书本上枯燥的年份，而是拉弓时手臂的酸痛，是铁匠锤下飞溅的火星，是地牢里那股挥之不去的阴冷潮湿气。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这就是拉克韦雷的核心魅力：它坦然展示着自己的残缺与古老，不试图去美化或重建一个完美的幻象。它邀请你走进它的“伤口”和“皱纹”里，用所有感官去体验一段粗糙、生动、有时甚至有点阴暗的历史。它不是让你来“观看”中世纪，而是让你来“度过”一段中世纪时光，哪怕只有几个小时。当你离开时，指甲缝里可能还留着一点泥土，耳朵里回荡着铸铁的声响，那种沉浸感，是任何光洁如新的城堡都无法给予的。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`拉克韦雷中世纪城堡`} />
                <InfoRow label="英文名称" value={`Rakvere Castle`} />
                <InfoRow label="正式名称" value={`Rakvere Castle`} />
                <InfoRow label="国家" value={`爱沙尼亚`} />
                <InfoRow label="城市" value={`西维鲁县，拉克韦雷镇`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座城堡是爱沙尼亚北部最重要的中世纪防御工事之一，见证了丹麦、日耳曼骑士团、瑞典、波兰和俄罗斯等各方势力在波罗的海地区的激烈角逐。`} />
                <InfoRow label="建筑特色" value={`一座融合了防御工事、领主宅邸与生活区域的山丘城堡，以其部分保存完好的城墙、塔楼以及大量精心修复的室内生活场景而著称。`} />
                <InfoRow label="建筑风格" value={`主要体现为13-16世纪的波罗的海中世纪防御建筑风格，后期融合了文艺复兴时期的居住元素。`} />
                <InfoRow label="文化价值" value={`它不仅是一个历史遗迹，更是一个鲜活的“中世纪体验中心”，通过高度互动的方式，让参观者沉浸式地理解中世纪北欧的日常生活、军事技术与文化。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`夏季（5月15日至9月15日）：每日上午10点至下午7点。冬季（9月16日至次年5月14日）：周二至周日上午11点至下午4点，周一闭馆（节假日除外）。特别注意：冬季部分室外区域和互动体验项目可能关闭或减少，具体安排需提前查看官网。圣诞节（12月24-25日）及元旦（1月1日）闭馆。`} />
              <InfoRow label="门票价格" value={`成人票：12欧元。儿童票（7-17岁）：8欧元。家庭票（2大+最多4小）：32欧元。学生及老人（凭有效证件）：10欧元。7岁以下儿童免费。门票包含城堡大部分区域参观及基础互动展示，部分特殊体验如射箭、盔甲试穿等可能需额外支付小额费用（2-5欧元）。建议官网购票，有时有在线折扣。`} />
              <InfoRow label="地址" value={`Vallikraavi tn 2, 44306 Rakvere, Estonia`} />
              <InfoRow label="交通方式" value={`从首都塔林出发最为便捷。自驾：沿E20/E263公路向东北方向行驶约1小时即可抵达拉克韦雷镇，城堡有指示牌，镇中心有停车场。公共交通：从塔林中央汽车站（Tallinna Bussijaam）搭乘前往拉克韦雷的长途巴士，班次密集（约每30-60分钟一班），车程约1.5小时，票价约6-8欧元。抵达拉克韦雷汽车站后，步行约15分钟（1.2公里）即可到达城堡，沿途有清晰路标。从塔林机场直接出发，建议先乘巴士或出租车到塔林汽车站再转车。火车班次较少，不推荐。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从13世纪初说起，那时爱沙尼亚的土地上回荡着十字军东征的铁蹄声和本地部落的抵抗呐喊。丹麦国王瓦尔德马二世，那位野心勃勃的征服者，在1219年占领了塔林地区后，目光投向了内陆。大约在1226年前后，丹麦人在这座名叫“Rakvere”的山丘上，用木头建起了第一座堡垒，用来巩固他们对这片新领土的统治，并震慑附近的异教徒。这座木堡，便是今天城堡漫长岁月的起点。当时，它更像一个前沿哨所，在广袤而陌生的森林与沼泽边缘，孤独地宣示着远方王权的存在。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，丹麦人的统治并未持续很久。13世纪中叶，这片土地的控制权转到了更专业、也更冷酷的日耳曼修士骑士团——利沃尼亚骑士团手中。骑士们可瞧不上简陋的木栅栏，他们需要的是能屯兵、能固守、能彰显武力的石头城堡。于是，从14世纪开始，一场持续百年的石造工程开始了。厚重的城墙、坚固的塔楼（包括那座标志性的“皮克·赫尔曼”塔）、带有拱顶的大厅和仓库被逐一建造起来。拉克韦雷从一个前哨站，升级为骑士团在维鲁县（Wierland）的行政和军事中心。骑士、修士、工匠、仆役在此生活，城堡内回荡着拉丁语的祈祷声、德语的口令和下爱沙尼亚语的劳作声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡的黄金时代，也是它命运多舛的开始。它地处要冲，就成了兵家必争之地。16-17世纪，随着瑞典帝国和沙皇俄国的崛起，波罗的海变成了大国的角力场。拉克韦雷城堡在利沃尼亚战争、波瑞战争等一系列冲突中反复易主。瑞典人来了又走，波兰人短暂统治，最后俄国人取得了优势。最致命的一击来自大北方战争。1703年，彼得大帝的俄军在围攻中，用炮火严重摧毁了城堡。战火熄灭后，这座失去了军事价值的城堡便被遗弃了，它成了附近村民的采石场，石头被一块块搬走用以建造民居，华丽的厅堂沦为牛羊的栖息地。辉煌的中世纪堡垒，渐渐沉入蔓草和瓦砾之下，几乎被人遗忘。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间的转机出现在20世纪。爱沙尼亚获得独立后，开始有意识地寻找和修复自己的民族历史遗产。对拉克韦雷城堡的考古发掘和局部修复在30年代开始了，但进程被二战和接下来的苏联占领时期打断。在苏联时代，这座城堡的“西方骑士”历史并不受待见，它继续在沉寂中荒废。直到爱沙尼亚再次恢复独立，这座城堡才真正迎来了新生。不过，修复者们面临一个选择：是像许多地方一样，把它恢复到某个历史时期的“完美”原貌，还是另辟蹊径？他们选择了后者。90年代末，一个大胆的构想诞生了——不是重建一座死气沉沉的博物馆，而是创建一个“中世纪体验中心”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，我们今天看到的拉克韦雷城堡，是一种极具智慧的“层叠式”呈现。它保留了战争留下的废墟部分，让那些残垣断壁诉说着暴力与毁灭；它谨慎修复了部分建筑结构，确保安全；然后，它用可逆的、充满想象力的方式，将中世纪的生活场景“填充”进去。铁匠铺升起了火，酒馆摆上了木杯，地牢里设置了符合历史的刑具模型，演员们穿着当时的服装演示技艺。历史在这里不再是单向的讲述，而是一场跨越时空的对话。城堡从一堆冰冷的石头，变成了一个能呼吸、能互动、能让所有年龄层的人都能找到乐趣的时空隧道。它用一种举重若轻的方式，完成了从军事堡垒到文化桥梁的华丽转身。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在午后（大约下午1-2点）抵达城堡。这个时间避开了上午可能存在的学校团体，而城堡内的各种互动演示和活动在下午也正进行得如火如荼。整体游览建议预留至少3-4小时，节奏可以“慢-快-慢”。一开始慢下来，在城堡外围和庭院感受氛围，观察细节；然后快速参与一两个你最感兴趣的互动活动（如射箭或盔甲体验），融入其中；最后慢下来，在黄昏时分登上塔楼，静静地俯瞰全景，让一天的感受沉淀。这样的安排能让你既充分体验热闹的“活历史”，也能拥有属于自己和古老遗迹对话的静谧时刻。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双绝对舒适、防滑的鞋，城堡内外的地面都是原始的石块、泥土和草地，高跟鞋或薄底鞋会是一场灾难。
夏季的周末和节假日人可能较多，若想获得更宁静的体验，尽量选择工作日前往，或者利用上午刚开馆和傍晚临近闭馆的时间段。
尊重所有穿着中世纪服装的工作人员，他们是“沉浸感”的一部分，可以大方提问或互动，但拍照前最好先微笑示意。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从正门购票进入后，先别急着进建筑，在中央庭院的长椅上坐几分钟，听听风声、人声和远处的锻造声，让自己从现代时空“切换”过来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直前往城堡主楼内的核心展览“中世纪生活”，亲手掂量一下真正的骑士剑的重量，闻一闻古老药草柜里飘出的混合香气。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟着指示牌走到户外的射箭场，在教练简短指导下，花上几欧元尝试拉开一把传统长弓，感受箭矢离弦那一刻的振动与专注。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`带着一点兴奋感，去探索阴凉的地下区域，包括阴森的地牢和令人脊背发凉的“酷刑室”，那里昏暗的灯光和逼真的场景会瞬间让你收起笑容。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从地下出来，需要一点“净化”，正好去城堡酒馆点一份用古法烤制的黑麦面包配熏肉，用陶杯喝一口格瓦斯，补充体力。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`饭后参与或旁观一场在庭院举行的中世纪骑士比武或武器演示，听听金属碰撞的巨响和演员们充满戏剧性的呼喊。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`赶在闭馆前一个小时，沿着狭窄的螺旋石阶爬上“皮克·赫尔曼”塔楼，在瞭望口享受360度的视野，看夕阳将拉克韦雷小镇的屋顶染成金黄。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后回到入口处的纪念品商店，那里的手工制品比普通旅游商品精致得多，可以带一块城堡形状的皂石或一本关于爱沙尼亚民间传说的画册回家。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡南侧远处田野仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前约一小时，从城堡南面通往镇子的路上回望，可以拍到城堡雄踞山丘、城墙轮廓被金色夕阳勾勒的苍凉剪影，广角镜头能纳入前景的野花和道路，增加纵深感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`中央庭院“生活之景”`}</h4>
                  <p className="text-sm text-gray-700">{`下午当互动活动进行时，蹲在庭院一侧的台阶上，用中焦段捕捉铁匠打铁的火星四溅、孩子们试穿盔甲的憨态或演员们列队行走的瞬间，注意将部分古老的石墙作为背景，诉说古今交融的故事。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`骑士大厅的窗边光影`}</h4>
                  <p className="text-sm text-gray-700">{`若天气晴好，下午三四点的阳光会斜射进主楼大厅的窗户，站在大厅内侧，对准窗户拍摄，可以看到光线中飞舞的微尘，以及窗框在石地上投下的清晰几何光影，营造静谧而神圣的氛围。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`塔楼顶层俯拍城镇与废墟`}</h4>
                  <p className="text-sm text-gray-700">{`登上塔楼后，将相机镜头从瞭望口微微探出（注意安全），垂直向下拍摄，可以构图出城堡内部庭院的活动人群与远处小镇现代屋顶的对比，形成有趣的时空叠印。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城墙西北角废墟的戏剧性逆光`}</h4>
                  <p className="text-sm text-gray-700">{`在闭馆前半小时，走到西北角那段残破的城墙下，让同行人站在断壁边缘，拍摄者从低角度逆光拍摄，可以拍出人物轮廓与古老石墙在暖色调天空下的强烈戏剧感，充满故事性。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`城堡内部许多区域光线较暗，建议使用大光圈镜头或提高ISO，尽量避免使用闪光灯，以免破坏场景的历史氛围并影响其他游客。`}</li>
                <li>• {`拍摄穿着中世纪服装的工作人员或参与活动的游客时，务必尊重他人，以抓拍自然场景为佳，若需要正面特写，请先礼貌询问。`}</li>
                <li>• {`无人机飞行在城堡上空受到严格管制，通常禁止飞行，请勿擅自起飞，以免触犯当地法规并造成安全隐患。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济舒适之选`}</h4>
                  <p className="text-sm text-blue-800">{`位于拉克韦雷镇中心步行街的现代风格酒店，房间明亮整洁，步行至城堡仅十分钟，晚上可以悠闲地逛逛安静的小镇，在超市买点爱沙尼亚本地酸奶当早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色历史体验`}</h4>
                  <p className="text-sm text-green-800">{`由一栋19世纪老建筑改造的家庭式民宿，就在城堡山脚下，主人会热情地为你手绘游览地图，早餐是家庭自制的蜂蜜和新鲜面包，晚上能听到从城堡方向传来的隐约风声。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`宁静自然疗愈`}</h4>
                  <p className="text-sm text-yellow-800">{`位于城镇边缘、被松林环绕的温泉酒店，提供舒适的桑拿和温泉池，在城堡里“穿越”一天后，回到这里泡个澡消除疲惫是北欧式的最佳享受，需短途驾车或打车前往。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端设计隐居`}</h4>
                  <p className="text-sm text-purple-800">{`距离拉克韦雷约20分钟车程、坐落在乡村湖畔的精品设计酒店，由著名建筑师设计，将北欧极简与自然风光完美融合，适合追求绝对宁静和设计感的旅行者，是探索周边区域的完美基地。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`拉克韦雷是个安静的小镇，治安非常好，晚上独行也无需担心，但娱乐选择相对有限，夜生活主要集中在几家温馨的本地小酒馆。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（6-8月）是旅游旺季，尤其是周末，镇上条件较好的住宿很快会被订满，如果计划在此期间前往，务必提前至少一个月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果选择住在镇外乡村，请务必确认交通方式，爱沙尼亚的乡村公共交通班次很少，晚间更是几乎没有，自驾是最灵活的选择。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开拉克韦雷城堡好几天了，我手指上因为试拉弓弦留下的一点微痛感早已消失，但那种混合着铁锈味、烟火气和泥土芬芳的记忆，却越来越清晰。这不仅仅是一座城堡，它更像一个时间的“解压器”。在我们习惯的历史景点里，过去被小心翼翼地封装起来，贴上标签，只可远观。而在这里，过去被允许“弄脏”你的手，“吵到”你的耳朵，甚至以一种略带顽皮和戏谑的方式，撞进你的当下。它不追求庄严的完美，反而因为这种坦然的残缺和生动的填充，显得无比真诚和有力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求光滑、快速、虚拟化的时代，拉克韦雷提供了一种珍贵的“粗糙的真实”。它告诉你，历史不是屏幕上平滑滚动的图文，而是需要你弯腰钻过的低矮门洞，是掌心接触到的、被无数人摩挲过的冰凉石壁，是失败好几次后才能射中靶心的那一瞬间的雀跃。它用一种可触摸的方式，重建了我们与时间之间的联系。每一位热爱深度游的旅人都该来此，不是为了收集又一个城堡的打卡照，而是为了让自己沉浸在一种全然不同的时间质感里。在这里，你不仅是历史的访客，更是它短暂的同路人。当你走下那座山丘，你会带走一点中世纪的尘埃，而它，或许也因你的到来，在另一个人的记忆里，继续它未完的故事。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/parnu-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    派
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">派尔努老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pärnu Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tartu-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塔尔图老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tartu Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tartu-university-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塔尔图大学城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tartu University City</p>
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
