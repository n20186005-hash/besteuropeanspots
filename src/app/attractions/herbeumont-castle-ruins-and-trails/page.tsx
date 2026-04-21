import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃尔伯蒙 Herbeumont｜塞穆瓦河马蹄弯上的中世纪废墟与阿登森林秘径 - 最佳欧洲景点',
  description: '车子沿着蜿蜒的林间公路爬升，当转过一个急弯，视线豁然开朗的刹那，你一定会忍不住轻呼一声。眼前，是铺天盖地的、不同层次的绿。那是阿登森林，像一块厚重而起伏的天鹅绒毯，从你的脚下一直蔓延到天际线。而在这片绿色波涛的核心，一道深邃的“Ω”形峡谷将它切开——那就是塞穆瓦河留下的、近乎完美的马蹄形弯道。你的目',
}

export default function HerbeumontCastleRuinsAndTrailsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '比利时', href: '/destinations/europe' },
            { label: '卢森堡省', href: '/destinations/europe' },
            { label: '埃尔伯蒙城堡废墟与古道', href: '/attractions/herbeumont-castle-ruins-and-trails' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`埃尔伯蒙城堡废墟与古道・Herbeumont・比利时・卢森堡省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着蜿蜒的林间公路爬升，当转过一个急弯，视线豁然开朗的刹那，你一定会忍不住轻呼一声。眼前，是铺天盖地的、不同层次的绿。那是阿登森林，像一块厚重而起伏的天鹅绒毯，从你的脚下一直蔓延到天际线。而在这片绿色波涛的核心，一道深邃的“Ω”形峡谷将它切开——那就是塞穆瓦河留下的、近乎完美的马蹄形弯道。你的目的地，埃尔伯蒙城堡，就孤傲地矗立在那个马蹄弯的顶部制高点上，远远望去，只剩下一抹深灰色的剪影，像是大地生长出的坚硬骨骼，沉默，却充满故事感。
走近废墟，首先包裹你的是一种混合的气息。湿润的苔藓和腐殖土的味道，带着森林的清新，与被阳光晒暖的古老石头散发出的、略带金属感的矿物气息交织在一起。脚下是散落的碎石和盘根错节的树根，头顶是穿过残墙断壁洒下的、斑驳陆离的光柱。风是这里永恒的背景音，它穿过森林的松涛声，与掠过城堡箭孔时发出的、悠长而空洞的呜咽声，构成了一首无词的歌。偶尔一声清脆的鸟鸣，反而让四周显得更加幽深寂静。你会发现，这里几乎没有“游客”，只有零星几个带着登山杖、装备专业的徒步者对你点头致意，或是本地人牵着狗，在废墟旁的长椅上安静地坐着，眺望远方。这里不是喧闹的景点，而是他们生活的一部分，一个巨大的、露天的起居室和后花园。
而这座废墟最打动人心的魅力，恰恰在于这种“未完成”的颓败与周遭磅礴生机的强烈对比。坚硬的石头在时间面前显得如此脆弱，最终选择以一种最坦诚的姿态——倒下、碎裂、被植物侵占——与自然重新融为一体。它不再是一座需要你仰视的、辉煌的建筑，而是一个可以让你走进去、触摸、甚至依靠的“场域”。你可以坐在某段矮墙上，任由目光随着鹰隼在河谷上空盘旋；你可以触摸石头上深刻的刻痕，猜想那是石匠的标记还是士兵无聊的涂鸦。在这里，历史不是玻璃展柜里冰冷的文字，而是拂过你脸颊的风，是脚下松软的泥土，是那种瞬间将你从现代生活抽离、抛入时间长河深处的、无比真实的沉浸感。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子沿着蜿蜒的林间公路爬升，当转过一个急弯，视线豁然开朗的刹那，你一定会忍不住轻呼一声。眼前，是铺天盖地的、不同层次的绿。那是阿登森林，像一块厚重而起伏的天鹅绒毯，从你的脚下一直蔓延到天际线。而在这片绿色波涛的核心，一道深邃的“Ω”形峡谷将它切开——那就是塞穆瓦河留下的、近乎完美的马蹄形弯道。你的目的地，埃尔伯蒙城堡，就孤傲地矗立在那个马蹄弯的顶部制高点上，远远望去，只剩下一抹深灰色的剪影，像是大地生长出的坚硬骨骼，沉默，却充满故事感。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走近废墟，首先包裹你的是一种混合的气息。湿润的苔藓和腐殖土的味道，带着森林的清新，与被阳光晒暖的古老石头散发出的、略带金属感的矿物气息交织在一起。脚下是散落的碎石和盘根错节的树根，头顶是穿过残墙断壁洒下的、斑驳陆离的光柱。风是这里永恒的背景音，它穿过森林的松涛声，与掠过城堡箭孔时发出的、悠长而空洞的呜咽声，构成了一首无词的歌。偶尔一声清脆的鸟鸣，反而让四周显得更加幽深寂静。你会发现，这里几乎没有“游客”，只有零星几个带着登山杖、装备专业的徒步者对你点头致意，或是本地人牵着狗，在废墟旁的长椅上安静地坐着，眺望远方。这里不是喧闹的景点，而是他们生活的一部分，一个巨大的、露天的起居室和后花园。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而这座废墟最打动人心的魅力，恰恰在于这种“未完成”的颓败与周遭磅礴生机的强烈对比。坚硬的石头在时间面前显得如此脆弱，最终选择以一种最坦诚的姿态——倒下、碎裂、被植物侵占——与自然重新融为一体。它不再是一座需要你仰视的、辉煌的建筑，而是一个可以让你走进去、触摸、甚至依靠的“场域”。你可以坐在某段矮墙上，任由目光随着鹰隼在河谷上空盘旋；你可以触摸石头上深刻的刻痕，猜想那是石匠的标记还是士兵无聊的涂鸦。在这里，历史不是玻璃展柜里冰冷的文字，而是拂过你脸颊的风，是脚下松软的泥土，是那种瞬间将你从现代生活抽离、抛入时间长河深处的、无比真实的沉浸感。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`埃尔伯蒙城堡废墟与古道`} />
                <InfoRow label="英文名称" value={`Herbeumont`} />
                <InfoRow label="正式名称" value={`Herbeumont Castle Ruins and Hiking Trails`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`卢森堡省`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座曾扼守塞穆瓦河战略要冲、历经数百年权力更迭与战火洗礼，最终归于寂静的中世纪军事与贵族生活遗迹。`} />
                <InfoRow label="建筑特色" value={`依山势而建的防御体系，核心是残存的方形主塔与蜿蜒的城墙基址，完美融入粗犷的岩石地貌，形成天然与人工交织的沧桑景观。`} />
                <InfoRow label="建筑风格" value={`罗马式与早期哥特式混合的军事建筑风格，材料以当地产蓝灰色片岩为主，质朴而坚固。`} />
                <InfoRow label="文化价值" value={`它不仅是建筑废墟，更是阿登地区历史层理的露天教科书，以及当代比利时人与自然、与历史进行宁静对话的精神地标。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡废墟区域全天24小时开放，自由参观。森林古道在任何日光充足的时间均可进入。建议游览时间为日出至日落之间。冬季部分小径可能因积雪或结冰变得湿滑，需格外注意安全。游客中心（位于Herbeumont村内）的开放时间通常为夏季（4月至9月）的上午10点至下午5点，周末开放；冬季开放时间缩短或仅周末开放，出行前建议查询当地市政网站。`} />
              <InfoRow label="门票价格" value={`完全免费。无论是探索城堡废墟还是在广袤的阿登森林中徒步，均无需购买任何门票。村内的公共停车场也免费提供使用。`} />
              <InfoRow label="地址" value={`Rue du Château, 6887 Herbeumont, Belgium`} />
              <InfoRow label="交通方式" value={`最近的主要国际机场是布鲁塞尔机场（BRU）。从布鲁塞尔南站（Brussels-South Railway Station）乘坐开往卢森堡方向的IC火车，约1小时45分钟后在利布拉蒙（Libramont）站或阿尔隆（Arlon）站下车。从利布拉蒙站换乘当地公交线（TEC）164路或165路前往“Herbeumont Place”站，车程约30-40分钟，班次较少，尤其是周末，务必提前查好时刻表。更推荐的方式是在利布拉蒙或阿尔隆火车站租车自驾，沿N89公路行驶，转入N883公路后按路标指示前往Herbeumont，车程约25-30分钟，自由度更高，方便探索周边。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事要从近九百年前说起。大约在12世纪中叶，这片俯瞰着塞穆瓦河重要航路与渡口的岩石山脊，引起了当时一位有实力的领主的注意。他就是“野猪”纪尧姆，一位名字就充满阿登地区粗犷气息的贵族。选择这里建堡，眼光堪称毒辣。河流在此几乎折返，形成了天然的防御屏障，占据山顶，意味着你掌控了上下游数公里的视野与交通。最初的城堡可能相当简陋，就是用木栅栏和土垒围起来的据点，但它的战略地位已经注定。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "石头城堡的崛起，伴随着一个大家族的兴衰。13世纪，埃尔伯蒙转到了“奥尔利”家族手中。这个家族可不简单，他们是卢森堡伯爵的忠实封臣，也是地区事务的重要玩家。有钱有势了，自然要把家修得气派。木结构被逐渐替换，当地采石场运来的蓝灰色片岩被精心凿成方块，垒砌起高大的方形主塔（donjon）——那是领主权威与最后避难所的象征。城墙沿着山脊线延伸，塔楼耸立，一座兼具军事防御与行政管理的石制城堡初具规模。可以想象，在那个年代，城堡里不仅有盔甲的反光和兵器的碰撞声，也有大厅里的宴会、壁炉边的吟游诗，以及从狭小窗洞望出去，对自己领地的踌躇满志。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，阿登森林的宁静常被边境的烽火打破。埃尔伯蒙的命运在17世纪迎来了剧变。那时，整个欧洲都卷入了一场混战——三十年战争。1642年，一支法国军队如同风暴般席卷至此。他们的目标很明确：摧毁所有可能阻碍他们或为敌人提供庇护的堡垒。坚固的埃尔伯蒙城堡在近代火炮面前，不再不可攻克。我们不知道抵抗持续了多久，但结果是确定的：城堡被攻占，并被系统性地破坏。不是为了占领，而是为了让它永远失去军事价值。塔楼被炸塌，屋顶被焚毁，城墙被推倒。烈火与硝烟散去后，剩下的，便是我们今天看到的这片触目惊心却又无比壮美的废墟。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "被遗弃的城堡开始了它长达数百年的“第二次生命”。它不再是贵族的府邸或士兵的营房，而成了大自然缓慢回收的领地。风化和雨水侵蚀着石缝，鸟雀带来了种子，蕨类、灌木、乃至小树开始在墙壁间扎根。当地居民则把这些废墟当作了现成的采石场，悄悄搬走一些完好的石料去修建自家的谷仓或围墙。这种“挪用”在当年是生计所需，无意中却让废墟与周围的村庄产生了更血肉相连的关系。直到20世纪，人们开始重新审视它的价值——不是重建它，而是保护它作为历史见证与风景核心的现存状态。1977年，它被正式列为保护遗产。从此，它作为一座“活着的废墟”，迎接着那些不为寻找辉煌，而为感受时光力量的旅人。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受埃尔伯蒙的双重魅力——历史的厚重与自然的壮美，建议安排至少4-5小时的沉浸式游览。最佳抵达时间是上午9点左右，此时森林晨雾未完全散去，阳光斜射，为废墟披上金色纱衣，而且游人最为稀少，能独享那份宁静。整体节奏宜慢不宜快，这是一个适合放空和冥想的地方。路线大致分两步：先深度探索城堡废墟本身，花上1-1.5小时，细细触摸每一处残垣；随后，选择一条沿河或深入森林的徒步小径，用2-3小时的时间，从不同角度回望城堡，并沉浸于阿登森林的呼吸之中。这样的安排能让你从内部到外部，全方位理解这座地标与环境的共生关系。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿着防滑耐磨的徒步鞋，废墟内地面不平且常有碎石，森林小径也可能潮湿泥泞。除了水，可以带一些简单的能量零食，村里有小餐馆但选择有限。全程几乎没有商业设施，请自带所需。保护遗迹，切勿攀爬已经明确标识为危险的结构，也请带走所有垃圾。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在村口免费停车场后，先别急着上山，在信息牌前看一眼古老的城堡复原图，让想象先于脚步飞驰。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着明显修缮过的石阶小径缓缓上行，让心跳与海拔一同升高，第一个开阔平台会给你一个下马威般的全景视野。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走入废墟核心，伸手触摸主塔残壁上那些巨大而冰冷的石块，感受指尖下近千年的温度与沧桑。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到面向塞穆瓦河马蹄弯的最佳观景方位，靠在残存的墙垛上，看河流像一条碧绿的丝带在脚下静静环绕。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着城墙的根基走一圈，仔细观察那些被树根撑裂的缝隙和石头上斑驳的地衣，这是自然重新宣告主权的无声战争。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从废墟另一侧的小门出来，毫不犹豫地踏上标有“GR129”或“Sentier du Château”标志的森林徒步小径。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着小径下到河谷地带，从茂密的橡树和山毛榉的枝叶间隙，回头仰望山巅的城堡，你会发现它呈现出与近距离观察时截然不同的孤傲姿态。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果体力允许，沿着塞穆瓦河畔走一段，聆听潺潺水声，或许能在某个清澈的河湾边，遇到当地人推荐的隐秘野餐地点。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`废墟东侧城墙缺口处`}</h4>
                  <p className="text-sm text-gray-700">{`日落前约一小时，阳光会变成温暖的金橙色，从这个缺口以远处的阿登森林连绵山峦为背景框架式构图，能拍出废墟最苍凉孤寂的剪影。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`马蹄弯全景俯瞰点`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗的上午，阳光充分照亮河谷时，站在城堡西侧边缘的巨石上，使用广角镜头将脚下深邃的绿色峡谷、蜿蜒的碧绿河流与天际线全部收纳，展现地理奇观。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`主塔残壁细节特写`}</h4>
                  <p className="text-sm text-gray-700">{`在正午阳光直射时，虽然不适合拍大景，但却是捕捉石头纹理的最佳时机，侧光能完美勾勒出片岩的层理、刻痕以及苔藓丰富的色彩与质感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`森林小径仰拍视角`}</h4>
                  <p className="text-sm text-gray-700">{`选择一条从河谷向上通往城堡的小径，下午时分，阳光穿过层层树叶形成丁达尔效应，从下往上拍摄，城堡废墟在光晕和森林的簇拥下若隐若现，充满神秘感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`塞穆瓦河畔倒影`}</h4>
                  <p className="text-sm text-gray-700">{`在晴朗无风的清晨，找到一段平静的河面，将城堡和森林在水中的倒影一同拍下，上下对称的构图能营造出宛如幻境的宁静氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`阿登地区天气多变，阴雨雾天其实更能烘托废墟的历史氛围，不要因为天气不好而放弃拍摄。使用无人机需极其谨慎，强烈的山谷气流对飞行器是巨大挑战，且需尊重其他徒步者的宁静体验。拍摄当地人或在村庄内拍照，一个友好的微笑和示意是最好的沟通方式。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`森林小屋体验`}</h4>
                  <p className="text-sm text-blue-800">{`在Herbeumont村周边森林里散落着一些自炊式小木屋，醒来推开窗就是满眼绿色与鸟鸣，拥有绝对的私密与宁静，适合家庭或三五好友。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`温馨家庭旅馆`}</h4>
                  <p className="text-sm text-green-800">{`选择住在几公里外的布永（Bouillon）小镇，那是座更有活力的中世纪古镇，有许多由古老房屋改造的B&B，主人会热情地为你推荐本地酒馆和隐藏景点。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特色庄园酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车约半小时，在阿登森林腹地寻找一座19世纪的乡村庄园改造的酒店，享受厚重的石墙、壁炉和精致的本地菜肴，体验旧时乡绅的优雅生活。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济便捷酒店`}</h4>
                  <p className="text-sm text-purple-800">{`回到交通枢纽利布拉蒙（Libramont），那里有现代而干净的国际连锁酒店，对于需要赶早班火车或计划探索更广泛卢森堡省地区的旅行者来说最为方便。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（7-8月）和秋季赏叶季是阿登地区的旅游旺季，住宿务必提前数周甚至数月预订。Herbeumont村本身非常小且安静，夜晚几乎没有任何娱乐，追求静谧自然者会无比享受。该地区治安极好，民风淳朴。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开埃尔伯蒙许久，那幅画面依然会在脑海里自动播放：一边是人力倾尽所能垒砌的、象征秩序与权力的坚硬石头，另一边是温柔却无比坚韧的、缓慢覆盖与消化一切的自然生命。它们在这里并非对抗，而是达成了一种深刻的、关于时间的和解。这座废墟教会我的，不是关于建造的荣耀，而是关于放下的智慧。它没有试图被修复成金碧辉煌的假古董，而是坦然展示着自己的伤口与衰老，并因此获得了另一种更永恒、更动人的生命力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个凡事追求效率、更新和网红打卡的时代，埃尔伯蒙提供了一种截然相反的旅行价值。它不提供便捷的缆车、炫目的灯光秀或精致的纪念品。它只提供一片旷野、一阵风、一段沉默的历史和一条需要你亲自用双脚去丈量的路。来这里，你需要放下“收集景点”的急躁，学习如何与寂静共处，如何从一块顽石、一道光线、一声鸟鸣中读取故事。它或许不会出现在最热门的目的地清单上，但正是这份被主流忽略的静谧与深沉，让它成为每一位真正渴望在旅途中与自己对话、与古老时光连接的深度探索者的灵魂栖息地。在这里，你不是游客，你是时光的漫游者。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/alden-biesen-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔登·比森城堡（条顿骑士团的宏大封地）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alden Biesen Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/groot-bijgaarden-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    大
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">大拜加登城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Groot-Bijgaarden Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/fort-of-huy-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    于
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">于伊要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Fort of Huy</p>
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
