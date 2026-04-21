import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿尔克马尔称重房 Alkmaar Cheese Market｜亲历百年奶酪搬运与交易仪式 - 最佳欧洲景点',
  description: '说实话，在抵达阿尔克马尔之前，我想象中的奶酪市场大概就是个大型农贸市场，摆满各种奶酪而已。但当我穿过蜿蜒的运河和小桥，在周五上午九点半挤进那个叫做Waagplein的广场时，我才意识到自己错得有多离谱。空气里最先俘获你的不是视觉，而是那股浓烈、复杂、带着农场阳光和青草气息的奶酪醇香，它热烘烘地包裹着',
}

export default function AlkmaarCheeseMarketWeighingHousePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '荷兰', href: '/destinations/netherlands' },
            { label: '阿尔克马尔称重房', href: '/attractions/alkmaar-cheese-market-weighing-house' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿尔克马尔称重房・Alkmaar Cheese Market・荷兰・阿尔克马尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，在抵达阿尔克马尔之前，我想象中的奶酪市场大概就是个大型农贸市场，摆满各种奶酪而已。但当我穿过蜿蜒的运河和小桥，在周五上午九点半挤进那个叫做Waagplein的广场时，我才意识到自己错得有多离谱。空气里最先俘获你的不是视觉，而是那股浓烈、复杂、带着农场阳光和青草气息的奶酪醇香，它热烘烘地包裹着你，像一块巨大的、无形的金黄奶酪。然后才是声音——叮当作响的钟声从称重房顶楼传来，穿着白衬衫、系着彩色腰带的搬运工们正用长长的木担架两两一组地练习，木屐踩在鹅卵石上发出清脆又沉稳的“咔哒”声，混杂着游客各种语言的嗡嗡声，仿佛一场盛大歌剧开演前的序曲。
广场中央，一块块圆如车轮、色泽乳黄或橘红的豪达奶酪和艾登奶酪，像巨大的多米诺骨牌一样整齐码放，在晨光下泛着温润的光泽。但真正的主角，是那座矗立在北侧的称重房。它不像教堂那么威严，也不像宫殿那样奢华，它敦实、稳重，砖红色的墙面被岁月打磨得深浅不一，那个伸出的吊臂和悬挂的巨大铸铁秤砣，无声地宣告着它的功能与权威。你会立刻明白，这里不是为游客准备的秀场，而是一个社区数百年来赖以生存的经济仪式中心。本地老爷爷会指着钟楼跟你讲述时间，孩子们在奶酪垛间追逐，这种“生活在此发生”的质感，比任何复原表演都动人。
最打动人心的，是那份传承中的严肃与欢乐并存。当十点的钟声正式敲响，戴着彩色草帽的“奶酪之父”（交易负责人）用力摇响手铃，整个广场瞬间进入一种有序的忙碌。搬运工们喊着号子，迈着一种独特的小碎步，将沉重的奶酪担架一路小跑着运往秤台。交易员们用手刀切开奶酪样品，用手指捻碎、闻香、品尝，然后开始那套快如闪电、旁人根本听不懂的“握手竞价”。整个过程一丝不苟，犹如一套精密运转了四百年的古老机器。然而，在这份严肃之下，是搬运工们向观众俏皮眨眼的瞬间，是孩子们被允许触摸奶酪时的雀跃，是交易结束后大家举起啤酒的爽朗笑声。你感受到的，是一种将生计、传统与社区凝聚力完美融合的、活生生的文化心跳。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`说实话，在抵达阿尔克马尔之前，我想象中的奶酪市场大概就是个大型农贸市场，摆满各种奶酪而已。但当我穿过蜿蜒的运河和小桥，在周五上午九点半挤进那个叫做Waagplein的广场时，我才意识到自己错得有多离谱。空气里最先俘获你的不是视觉，而是那股浓烈、复杂、带着农场阳光和青草气息的奶酪醇香，它热烘烘地包裹着你，像一块巨大的、无形的金黄奶酪。然后才是声音——叮当作响的钟声从称重房顶楼传来，穿着白衬衫、系着彩色腰带的搬运工们正用长长的木担架两两一组地练习，木屐踩在鹅卵石上发出清脆又沉稳的“咔哒”声，混杂着游客各种语言的嗡嗡声，仿佛一场盛大歌剧开演前的序曲。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`广场中央，一块块圆如车轮、色泽乳黄或橘红的豪达奶酪和艾登奶酪，像巨大的多米诺骨牌一样整齐码放，在晨光下泛着温润的光泽。但真正的主角，是那座矗立在北侧的称重房。它不像教堂那么威严，也不像宫殿那样奢华，它敦实、稳重，砖红色的墙面被岁月打磨得深浅不一，那个伸出的吊臂和悬挂的巨大铸铁秤砣，无声地宣告着它的功能与权威。你会立刻明白，这里不是为游客准备的秀场，而是一个社区数百年来赖以生存的经济仪式中心。本地老爷爷会指着钟楼跟你讲述时间，孩子们在奶酪垛间追逐，这种“生活在此发生”的质感，比任何复原表演都动人。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，是那份传承中的严肃与欢乐并存。当十点的钟声正式敲响，戴着彩色草帽的“奶酪之父”（交易负责人）用力摇响手铃，整个广场瞬间进入一种有序的忙碌。搬运工们喊着号子，迈着一种独特的小碎步，将沉重的奶酪担架一路小跑着运往秤台。交易员们用手刀切开奶酪样品，用手指捻碎、闻香、品尝，然后开始那套快如闪电、旁人根本听不懂的“握手竞价”。整个过程一丝不苟，犹如一套精密运转了四百年的古老机器。然而，在这份严肃之下，是搬运工们向观众俏皮眨眼的瞬间，是孩子们被允许触摸奶酪时的雀跃，是交易结束后大家举起啤酒的爽朗笑声。你感受到的，是一种将生计、传统与社区凝聚力完美融合的、活生生的文化心跳。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿尔克马尔称重房`} />
                <InfoRow label="英文名称" value={`Alkmaar Cheese Market`} />
                <InfoRow label="正式名称" value={`Alkmaar Cheese Market`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`阿尔克马尔`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是荷兰最古老、最负盛名的奶酪交易中心，自14世纪以来便是衡量荷兰农业经济与贸易传统的心脏。`} />
                <InfoRow label="建筑特色" value={`一座带有优雅山形墙和钟楼的晚期哥特式砖石建筑，其最显著的特征是外墙上悬挂的巨大奶酪秤砣。`} />
                <InfoRow label="建筑风格" value={`荷兰文艺复兴风格，带有鲜明的北荷兰省砖砌建筑特征。`} />
                <InfoRow label="文化价值" value={`不仅是一座建筑，更是一个持续了数百年、活态传承的民俗剧场，生动展示了荷兰作为“奶酪王国”的贸易规则、社区协作与身份认同。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`称重房（Waaggebouw）建筑内部作为奶酪博物馆常年开放，通常为周一至周六 10:00-16:00。核心的奶酪市场活动仅在每年四月第一个周五至九月最后一个周五的每周五上午10:00至下午1:00举行。具体日期每年微调，需提前在官网确认。圣诞节及新年期间博物馆可能闭馆。`} />
              <InfoRow label="门票价格" value={`进入广场观看奶酪市场仪式完全免费。进入称重房建筑内部的奶酪博物馆需购票，成人票约6欧元，儿童、学生及65岁以上老人有优惠票（约4欧元）。可现场购票，也提供线上预订选项。`} />
              <InfoRow label="地址" value={`Waagplein 2, 1811 JP Alkmaar, Netherlands`} />
              <InfoRow label="交通方式" value={`从阿姆斯特丹史基浦机场出发最便捷：在机场火车站乘坐开往阿尔克马尔方向的区间列车（Sprinter），约40分钟直达阿尔克马尔中央车站，班次频繁（约每15-20分钟一班）。出火车站后，步行约10-15分钟即可抵达市中心的称重房广场。使用OV卡（荷兰公共交通卡）可直接刷卡上下车，比购买单程票更方便。如果从阿姆斯特丹中央车站出发，车程约30-40分钟。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`阿尔克马尔和奶酪的故事，始于这片土地本身的馈赠。北荷兰省肥沃的草地和充足的水源，自中世纪起就养育了优质的奶牛，制作奶酪自然成为了农民最重要的生计之一。但早期的交易是分散且缺乏标准的，买家卖家在街头巷议价，重量和质量全凭一张嘴，纠纷自然少不了。于是，一个权威的、官方的交易场所和标准制定者的需求变得迫切起来。这，就是称重房诞生的最原始动力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`故事的关键转折点发生在1582年。没错，就在荷兰为独立与西班牙浴血奋战的“八十年战争”期间，阿尔克马尔这座城市却做出了一项关于和平与繁荣的投资——他们决定建造一座专门的称重房。最初的建筑可能更简陋，但到了16世纪末至17世纪初，随着荷兰黄金时代的到来和奶酪贸易的爆炸式增长，原有的建筑已不敷使用。我们现在看到的这座雄伟的砖石建筑，主要建于1768年。不过，它并非凭空而起，而是在更早期建筑的基础上重建与扩建的。一场火灾曾吞噬了部分结构，但阿尔克马尔人毫不犹豫地选择了重建，并且建得更加宏伟，这足以证明奶酪贸易对这座城市的经济命脉意义。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`称重房不仅仅是个“秤奶酪”的地方。它底层是巨大的秤台和交易大厅，二楼是奶酪搬运工行会的会所，顶楼则是守夜人巡视全城的瞭望塔和钟楼。它集交易所、质检中心、行会俱乐部、城市防御点和地标于一身。几个世纪以来，每周五的早晨，来自周边乡村的农民们用马车或船只运来他们的奶酪，在这里接受官方质检员的严格检查，根据品质分级，然后在交易员的主持下进行公开竞价。成交的奶酪会被盖上官方的质量印章，再由那些隶属于古老行会的专业搬运工们，用特制的担架和步伐，运往各地的仓库或码头。这套流程，规范了市场，保障了公平，也打响了“阿尔克马尔奶酪”的金字招牌。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，时代终会变迁。20世纪，随着现代冷链物流和工业化食品交易体系的完善，这种古老、集中的现货交易市场在经济上逐渐失去了效率。到了20世纪中叶，真正的商业性奶酪交易早已转移到了现代化的拍卖市场。很多人以为，阿尔克马尔的奶酪市场会就此消失，成为书本上的一个名词。但阿尔克马尔人做出了一个充满智慧的决定：他们选择将这项传统，不是为了经济效益，而是作为一项珍贵的文化遗产和社区仪式，完整地保留下来。从1947年开始，它被有组织地恢复，所有的角色——交易员、搬运工、质检员——仍然由本地相关的行会和家族成员担任，他们并非职业演员，而是医生、教师、公司职员，在周五上午脱下现代服装，换上传统行头，虔诚地扮演好祖先的角色。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，今天我们看到的，是一场“真实的表演”。它保留了历史上每一个严谨的步骤和细节，但其目的已从纯粹的经济活动，转化为文化传承、社区认同和与世界分享荷兰精神的窗口。这座称重房，也从忙碌的经济枢纽，转变为一个活态的博物馆、一个文化记忆的容器。它见证了荷兰从农业社会到商业帝国，再到现代国家的历程，而它自身也成功地完成了从“实用工具”到“文化符号”的华丽转身。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要获得最完美的体验，你必须瞄准一个周五前来。建议在上午9点前抵达广场。这时搬运工和交易员们正在做最后准备，游客尚未形成人海，你能从容地感受仪式前的宁静与期待，并找到绝佳的观赏位置。整个市场仪式从10点持续到下午1点左右，建议至少留出2-2.5小时沉浸其中，不要只是匆匆一瞥。仪式结束后，别急着离开，此时大部分一日游游客开始散去，正是你深入探索称重房内部奶酪博物馆和宁静老城的好时机。这样的节奏让你既能感受高潮的喧闹，又能品味余韵的悠长。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周五市场日人流量巨大，看好随身财物，特别是拥挤在秤台周围时。如果想获得最佳视野，可以提前在广场周边建筑的二楼餐厅预订一个靠窗的早餐位（需很早预订）。穿着舒适的步行鞋至关重要，因为你要在坚硬的鹅卵石地面上站立和走动很久。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨九点前到达Waagplein广场，先在周边咖啡馆找个露天座位，点一杯咖啡静静观察广场如何像舞台一样被奶酪块和忙碌的工人逐渐填满`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`仪式开始后不要只盯着秤台，跟着一队搬运工从堆码区到秤房再返回，完整看一遍他们的小碎步、吆喝和默契的交接动作`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`挤到交易员附近，努力分辨他们快速握手中隐含的出价密码，观察买家如何用手刀切下一小块奶酪并细细品鉴的专注神情`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`仪式临近尾声时，走进称重房大楼的一楼，参观那个仍在使用的古老巨型秤台，触摸光滑的木制秤杆`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`上楼探索荷兰奶酪博物馆，了解从牧场到餐桌的全过程，并品尝几种不同熟成度的豪达奶酪`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出博物馆，绕到建筑侧面，仰头欣赏那些装饰山墙上精致的石雕和象征着贸易与公正的图案`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着广场旁的运河散步，看看那些曾经用来运输奶酪的平底船，想象几个世纪前的繁忙景象`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后钻进一条小巷，找一家本地人常去的棕色咖啡馆，点一杯啤酒和一份用本地奶酪做的三明治，融入午后的悠闲`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`广场东南角运河桥上的全景机位`}</h4>
                  <p className="text-sm text-gray-700">{`上午9点半到10点之间，阳光正好洒在称重房正面，可以拍到建筑、广场上成排的奶酪和运河倒影构成的完美对称画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`搬运工行进路径的侧方低角度`}</h4>
                  <p className="text-sm text-gray-700">{`蹲在奶酪垛附近，用广角镜头低角度拍摄搬运工们抬着担架小跑过来的瞬间，能捕捉到他们的动感和木屐离地的细节，背景是模糊的人群和古老建筑。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`称重房大门内侧向外拍`}</h4>
                  <p className="text-sm text-gray-700">{`仪式开始后，可以尝试站在称重房大门里面，向外拍摄交易员和买家在门口阳光下握手议价的剪影，框架构图能增强故事感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`奶酪博物馆顶楼窗口俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`参观博物馆时，记得去顶楼的小窗口，从这里可以俯拍到整个广场密密麻麻的人群和奶酪块的彩色图案，充满活力。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重仪式和参与者，使用长焦镜头在远处捕捉特写，避免使用闪光灯或为了拍照而阻挡搬运工的行进路线。拍摄本地人或行会成员时，最好先报以微笑或简单询问，他们通常很友好。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`运河边温馨B&B`}</h4>
                  <p className="text-sm text-blue-800">{`住在某条静谧运河旁的历史住宅里，房东会为你准备丰盛的荷兰式早餐，并告诉你哪些小巷的夜景最美。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`市中心设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`由老银行改造的精品酒店，距离称重房仅三分钟步程，现代设计与古董家具混搭，让你在喧嚣结束后迅速回归舒适。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`城郊田园民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`如果自驾，可以选择稍远一点的奶牛场民宿，清晨在奶香中醒来，真正体验“奶酪源头”的生活。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`传统酒店经典之选`}</h4>
                  <p className="text-sm text-purple-800">{`广场边上那家有着古老招牌的酒店，部分房间窗户正对市场，足不出户就能俯瞰周五清晨的准备工作。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`阿尔克马尔老城非常安全，夜晚散步极具风情。但如果计划周五前来，请务必提前数月预订市中心住宿，因为市场日非常火爆。周末的阿尔克马尔会从热闹复归平静，是体验本地生活节奏的好时机。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开阿尔克马尔很久以后，我记忆最深的不是某一块奶酪的味道，也不是某一张照片，而是一种“声音的质感”。那是木屐规律地敲击鹅卵石的咔嗒声，是钟声，是交易员摇响的清脆铃铛，是搬运工们低沉的号子，所有这些声音混合在一起，形成了一种沉稳而欢快的节奏。这种节奏，仿佛是这个地方的心跳，平稳地跳动了四百多年。在一切都追求数字化、虚拟化和效率至上的今天，站在这里，亲眼见证、亲耳聆听这种由真实的人力、古老的工具和传承的规则共同奏响的乐章，是一种难以言喻的慰藉。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它提醒我们，有些价值无法被算法量化，有些连接无法被网络替代。这座称重房和每周五的仪式，守护的不仅仅是一项非物质文化遗产，更是一种关于社区信任、手工尊严和对待生活的郑重态度。每一位搬运工肩上扛起的，不仅是几十公斤的奶酪，更是一份对祖先和同行兄弟的承诺。每一位交易员的手势里，延续的是一套无需合同、却比任何合同都坚固的信用体系。对于旅人而言，这里不是一个被抽空灵魂的景点，而是一扇难得敞开的门，让你得以窥见一个民族性格中务实、协作、坚守传统的核心。所以，如果你厌倦了走马观花，渴望一次有温度、有重量、能触动心灵的旅行，请一定把某个周五留给阿尔克马尔。去感受那带着奶香的风，去成为那古老心跳声中的一个短暂音符。这趟旅程，会让你对“传统”二字，产生全新的、充满敬意的理解。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kampen-hanza-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    坎
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">坎彭汉萨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kampen Hanseatic Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/zierikzee-historic-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    济
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">济里克泽历史老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Zierikzee</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/zwolle-hanseatic-star-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    兹
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">兹沃勒</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Zwolle</p>
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
