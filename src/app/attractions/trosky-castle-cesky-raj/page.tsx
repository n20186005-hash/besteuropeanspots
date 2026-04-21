import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '特罗斯克城堡 Trosky Castle｜探访“恶魔与老妇人”，登顶捷克最魔幻火山双塔废墟 - 最佳欧洲景点',
  description: '嘿，朋友，想象一下：当你开车穿过波希米亚天堂那一片片墨绿色森林和宁静的鱼塘，突然，远方的地平线上，两座漆黑、陡峭、近乎垂直的岩石山峰刺破天空，而山峰之巅，赫然矗立着塔楼的废墟剪影。那一瞬间，你一定会屏住呼吸。那不是普通的山，那是亿万年前火山喷发后凝固的“喉咙”；那也不是普通的城堡，那是人类胆大包天的',
}

export default function TroskyCastleCeskyRajPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '捷克', href: '/destinations/czech-republic' },
            { label: '利贝雷茨州（位于“波希米亚天堂”地质公园的核心区域）', href: '/destinations/czech-republic' },
            { label: '特罗斯克城堡', href: '/attractions/trosky-castle-cesky-raj' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`特罗斯克城堡・Trosky Castle・捷克・利贝雷茨州（位于“波希米亚天堂”地质公园的核心区域）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，想象一下：当你开车穿过波希米亚天堂那一片片墨绿色森林和宁静的鱼塘，突然，远方的地平线上，两座漆黑、陡峭、近乎垂直的岩石山峰刺破天空，而山峰之巅，赫然矗立着塔楼的废墟剪影。那一瞬间，你一定会屏住呼吸。那不是普通的山，那是亿万年前火山喷发后凝固的“喉咙”；那也不是普通的城堡，那是人类胆大包天的明证——特罗斯克城堡到了。
越走近，那种混合着荒凉与威严的气息就越发扑面而来。风很大，在岩石缝隙间呼啸，声音像从时间的裂缝里吹出来。空气里是松针、潮湿苔藓和远处田野混合的干净气味。你得沿着之字形的小路向上爬，脚下是散落的碎石和盘根错节的树根。抬头看，较高的那座“恶魔”塔（Panna）如同一个沉默的巨人，冷酷地俯瞰众生；较矮的“老妇人”塔（Baba）则显得敦实倔强。它们不像那些修缮完好的华美宫殿，这里的一切都是粗粝的、未完成的、被风雨和战火撕扯过的模样。然而，正是这种“未完成”，赋予了它致命的吸引力。在当地人心中，它不是什么需要顶礼膜拜的圣地，而是一个熟悉的地标，一个周末徒步的目的地，一个代代相传的、关于恶魔与老妇人打架的童话故事的背景板。
它的核心魅力，就在于这种极致的矛盾与和谐。坚硬无比的火山岩，与脆弱易逝的人类建筑遗迹；宏伟的军事野心，与最终归于尘土的废墟宿命；地理学上的冷静事实，与民间传说中炽热的情感投射。当你终于气喘吁吁地站在废墟的残垣断壁之间，触摸着冰凉粗糙的石墙，你会感到自己同时站在了地质时间、历史时间和个人体验时间的交汇点上。这里没有精美的壁画和镀金的装饰来取悦你，它只用绝对的形体和空间，以及那份不容置疑的荒芜感，向你提问：什么是永恒？什么是存在？答案，就藏在掠过塔尖的风声里。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，想象一下：当你开车穿过波希米亚天堂那一片片墨绿色森林和宁静的鱼塘，突然，远方的地平线上，两座漆黑、陡峭、近乎垂直的岩石山峰刺破天空，而山峰之巅，赫然矗立着塔楼的废墟剪影。那一瞬间，你一定会屏住呼吸。那不是普通的山，那是亿万年前火山喷发后凝固的“喉咙”；那也不是普通的城堡，那是人类胆大包天的明证——特罗斯克城堡到了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`越走近，那种混合着荒凉与威严的气息就越发扑面而来。风很大，在岩石缝隙间呼啸，声音像从时间的裂缝里吹出来。空气里是松针、潮湿苔藓和远处田野混合的干净气味。你得沿着之字形的小路向上爬，脚下是散落的碎石和盘根错节的树根。抬头看，较高的那座“恶魔”塔（Panna）如同一个沉默的巨人，冷酷地俯瞰众生；较矮的“老妇人”塔（Baba）则显得敦实倔强。它们不像那些修缮完好的华美宫殿，这里的一切都是粗粝的、未完成的、被风雨和战火撕扯过的模样。然而，正是这种“未完成”，赋予了它致命的吸引力。在当地人心中，它不是什么需要顶礼膜拜的圣地，而是一个熟悉的地标，一个周末徒步的目的地，一个代代相传的、关于恶魔与老妇人打架的童话故事的背景板。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，就在于这种极致的矛盾与和谐。坚硬无比的火山岩，与脆弱易逝的人类建筑遗迹；宏伟的军事野心，与最终归于尘土的废墟宿命；地理学上的冷静事实，与民间传说中炽热的情感投射。当你终于气喘吁吁地站在废墟的残垣断壁之间，触摸着冰凉粗糙的石墙，你会感到自己同时站在了地质时间、历史时间和个人体验时间的交汇点上。这里没有精美的壁画和镀金的装饰来取悦你，它只用绝对的形体和空间，以及那份不容置疑的荒芜感，向你提问：什么是永恒？什么是存在？答案，就藏在掠过塔尖的风声里。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`特罗斯克城堡`} />
                <InfoRow label="英文名称" value={`Trosky Castle`} />
                <InfoRow label="正式名称" value={`Trosky Castle`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`利贝雷茨州（位于“波希米亚天堂”地质公园的核心区域）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`捷克波希米亚地区最标志性的城堡废墟，其独特的双塔火山岩地貌已成为整个国家的文化地理象征。`} />
                <InfoRow label="建筑特色" value={`完全依据两座拔地而起的对称火山玄武岩颈而建，形成“一高一矮”双塔的惊险格局。`} />
                <InfoRow label="建筑风格" value={`晚期哥特式军事堡垒与自然地质奇观的完美结合，体现了因地制宜的极致建筑智慧。`} />
                <InfoRow label="文化价值" value={`一处见证了权力争夺、浪漫想象与自然力量的史诗性地标，是理解捷克民族性格中坚韧与诗意一面的窗口。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡主体及两座塔楼的开放时间随季节变化极大。通常四月至十月开放，每日上午9点至下午4点或5点（夏季可能延长至6点）。十一月到次年三月通常只在外围区域开放或完全关闭维修，具体开放窗口非常有限，强烈建议出行前务必在其官网或当地旅游信息中心确认最新时刻表。周一有时会闭馆。`} />
              <InfoRow label="门票价格" value={`进入城堡废墟区域需要购买门票。成人票约为150捷克克朗（约6欧元），学生、儿童及老人享有优惠票。门票通常包含登临其中一座塔楼（“老妇人”塔），有时另一座塔（“恶魔”塔）可能因安全或维护原因单独收费或关闭。支持捷克克朗现金现场购票，部分时段可能开放在线预订。`} />
              <InfoRow label="地址" value={`Trosky 1, 512 63 Rovensko pod Troskami, Czechia`} />
              <InfoRow label="交通方式" value={`从布拉格出发，最便捷的方式是自驾，沿E65公路向东北行驶约90公里，车程约1小时15分钟，城堡有指定停车场。如果依靠公共交通，过程稍显曲折：先从布拉格中央火车站（Hlavní nádraží）乘坐火车到Turnov（特诺夫）镇，约1.5小时车程；在Turnov换乘当地的乡村巴士（前往Rovensko pod Troskami方向），班次可能每小时或更少一班，车程约30分钟，在“Trosky, rozc.”或类似站点下车后，仍需徒步爬山约20-30分钟才能抵达城堡入口。强烈建议提前查询巴士时刻表并留足缓冲时间。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`这座城堡的故事，始于一个不那么“浪漫”的实用主义决定。14世纪后期，捷克贵族切内克·瓦尔滕贝克的切内克看中了这两座孤零零的火山颈。它们的天然形态简直就是为防御天工开物——四面陡峭，易守难攻。于是，在1380年左右，他下令在较高的岩石上建造较高的塔楼（后来的“恶魔”塔），在较矮的岩石上建造较矮的塔楼（“老妇人”塔），并在两座岩石之间的鞍部修建宫殿和城墙，将它们连接成一个完整的堡垒。从一开始，它的设计就是纯军事化的，目的就是控制周边富庶的领地。你看，它的诞生并非为了美，而是为了权力和安全。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，城堡的宁静很快被席卷波希米亚的胡斯战争打破。15世纪，城堡被胡斯派军队占领，并成为了一个坚固的据点。想象一下那个画面：狂热的战士们据守在这几乎无法被攻破的双塔之中，俯瞰着下方的战场。城堡经受住了围攻的考验，这证明了建造者眼光的毒辣。但战争也给它留下了最初的伤痕。接下来的几个世纪，它像一件珍贵的战利品，在多个贵族家族间转手。有人试图扩建和美化它，增加文艺复兴式的居住元素，让它变得更宜居一些。但它的核心，始终是那座冰冷、不适宜居住的岩石。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的转折点发生在三十年战争期间。1648年，也就是战争结束的那一年，胜利的瑞典军队在撤退途中，一把火点燃了特罗斯克城堡。大火吞噬了木质的屋顶、内饰和所有可以燃烧的东西，只留下被熏黑的石壳。自那以后，它便被遗弃了。大自然开始缓慢而坚定地收回失地：藤蔓爬上墙壁，鸟儿在箭垛里筑巢，风雨一点点侵蚀着灰浆。它从一座功能性的城堡，彻底变成了一幅描绘“废墟之美”的立体画卷。有趣的是，正是这种荒废状态，在浪漫主义思潮兴起的18、19世纪，让它备受诗人和画家的青睐。它不再是失败的象征，而成了激发怀古幽情、探索自然之力的完美对象。“恶魔与老妇人”的民间传说也被广泛传播，为这两座没有生命的岩石塔楼注入了鲜活的性格和戏剧冲突。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`进入20世纪，人们开始用新的眼光看待它。它被认定为国家级文化古迹，并进行了谨慎的加固和修复，不是为了重建，而是为了确保这片震撼的废墟不会彻底消失。安装了安全的楼梯和观景台，让普通人也能安全地征服“老妇人”塔的顶端。今天，它归属于捷克国家遗产研究所管理，是“波希米亚天堂”自然保护区内最耀眼的人文明珠。它的历史，是一部从军事工具到荒芜遗迹，再到文化符号的蜕变史，每一道裂缝都写满了故事。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受特罗斯克城堡的魔力，建议安排一个完整的上午或下午，总耗时约3-4小时。最佳抵达时间是早上开门后不久，光线适合拍照，游客也相对稀少。整体的游览节奏应该是“由远及近，由外及内，先爬后赏”。首先在山下停车场或远处视角好好欣赏它的全景构图，然后开启一段轻量级的登山徒步抵达城堡入口。进入后，先征服较易攀登的“老妇人”塔获取第一个全景视野，接着探索连接两塔的废墟核心区，如果体力胆量允许且开放，再挑战更陡峭的“恶魔”塔。最后，留一段时间静静地坐在废墟的某一处，让感官充分吸收这里的氛围。这样的安排能让你逐步解锁城堡的不同层次，体验从仰望到征服，再到沉思的全过程。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双防滑性能好的徒步鞋或运动鞋，上山路径和塔楼台阶常有碎石且陡峭，安全第一。
城堡内部几乎没有商业设施，记得自带一瓶水和少许能量零食，夏季防晒和防风外套都很有用。
尽量避开周末下午的客流高峰，否则在狭窄的塔楼楼梯上排队会严重影响体验的沉浸感。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在树林边的停车场后，别急着上山，先走到空旷处好好仰望一下那两座从绿色海洋中猛然升起的黑色巨岩与塔楼，用手机广角拍下第一张定妆照。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着标志清晰的森林小径开始徒步上山，耳边是鸟鸣和风声，脚踩在铺满松针的松软土地上，感受坡度逐渐增加。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先选择攀登较为平缓的“老妇人”塔，沿着现代加固的钢铁楼梯旋转而上，在狭窄的塔顶平台收获第一个360度的震撼视野，辨认远方小镇和森林的脉络。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从“老妇人”塔下来，穿过连接两座岩颈的废墟中庭，用手触摸那些被火焚烧过、表面坑洼的古老墙砖，想象大厅昔日的模样。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果“恶魔”塔开放，鼓起勇气挑战那条更陡峭、视野更封闭的攀登路径，体验一种近乎垂直上升的压迫感，并在最高的顶点享受君临天下的快感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在中庭的某段残墙下找个石头坐下，拿出随身带的水和简单零食，静静地看光影在石壁上移动，听其他游客隐约的赞叹声从塔顶随风飘下来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡东侧的观景平台回望整个建筑群，这个角度能看到两塔并立最经典的侧面轮廓，是告别前最后品味其形体的好地方。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后不要立刻离开，开车五分钟到山脚下名为Rovensko pod Troskami的宁静小村庄，找一家本地餐馆尝尝捷克炖牛肉，和村民聊两句关于城堡的天气。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`村庄入口远眺点`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，在通往城堡的主路刚出Rovensko pod Troskami村庄的位置，利用长焦镜头压缩空间，可以拍到城堡双塔在田野和树林衬托下的全景，雾气弥漫时效果尤佳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“恶魔”塔俯拍“老妇人”`}</h4>
                  <p className="text-sm text-gray-700">{`登上较高的“恶魔”塔后（如果开放），将镜头从垛口向下对准较矮的“老妇人”塔及其中庭废墟，这个居高临下的视角能极致展现建筑的险峻与空间的几何关系。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`中庭拱门框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`站在中庭的某个石拱门或窗洞内部，以门框为画框，将对面的塔楼或远处的风景纳入其中，增加画面的层次感和故事性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`森林边缘剪影`}</h4>
                  <p className="text-sm text-gray-700">{`日落时分，退到城堡下方森林的边缘，以繁密的深色树冠为前景，拍摄城堡双塔在绚烂晚霞背景下的清晰剪影，充满史诗感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`东侧观景台经典侧影`}</h4>
                  <p className="text-sm text-gray-700">{`在官方设立的东侧观景台，使用中焦段拍摄城堡的标准侧面像，确保两座塔楼一高一矮的形态完整收入画面，这是最标志性的明信片角度。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`无人机飞行在当地可能有严格限制，因城堡属于自然保护区和文化遗产，起飞前务必查清规定并尊重隐私。`}</li>
                <li>• {`尝试拍摄不同季节的城堡——秋季的斑斓森林、冬季的积雪覆盖、春季的新绿环绕，都能赋予这不变的岩石以变化的情绪。`}</li>
                <li>• {`拍摄人物时，可以尝试让人物在巨大的废墟墙体前显得渺小，以突出建筑的宏伟与历史的苍茫感。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`特诺夫（Turnov）镇中心温馨的家庭旅馆，主人能提供最地道的城堡旅行建议，晚上可以悠闲地探索这个充满宝石加工传统的古镇。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`城堡山脚下真正的农庄民宿，住在由石头谷仓改造的房间里，清晨被牧场的牛铃声唤醒，推开窗就能看到被晨光染红的双塔。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`位于波希米亚天堂腹地的奢华历史酒店，由19世纪的贵族庄园改建，拥有宁静的花园和顶级的水疗中心，是经历一天徒步探险后完美的避世港湾。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`露营亲近自然`}</h4>
                  <p className="text-sm text-purple-800">{`在“波希米亚天堂”保护区指定的露营地搭起帐篷，夜里没有光污染，可以仰望璀璨星河，想象几个世纪前城堡守军看到的同一片夜空。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`特罗斯克城堡周边的住宿资源并不密集，尤其在旅游旺季，山脚下的特色民宿非常抢手，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`住在特诺夫（Turnov）镇是折中且方便的选择，既有更多的餐饮交通选择，也能以它为基地探索整个“波希米亚天堂”地质公园。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果选择农庄或露营，请充分享受乡村的宁静，并做好相应设施可能比较简单朴素的心理准备，这正是体验的一部分。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开特罗斯克城堡许久之后，那两座黑色塔楼的形象依然会固执地停留在脑海里。它不像那些金碧辉煌的宫殿，用奢华直接冲击你的眼球；它更像一个沉思者，用它的残缺和沉默，在你心里种下一些需要时间发酵的东西。这里教会你的，是一种关于“痕迹”的美学。你会开始欣赏裂缝的走向，苔藓的分布，岩石与砖石咬合的接口，以及光线在残破窗洞中停留的短暂形状。这是一种更高级、更耐人寻味的对话，是与时间和自然本身的对话。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求崭新、快速、平滑的世界里，特罗斯克城堡的存在是一种温柔的叛逆。它自豪地展示着自己的伤疤和衰老，并因此变得无比强大和真实。它提醒我们，不朽未必来自完美的保存，而可能源于坦然地接受消亡的过程，并在过程中凝结成一种永恒的姿态。对于每一位厌倦了标准景点的深度旅人来说，这里不是休闲放松的终点，而是一次精神的短暂出走。来这里，攀登的不仅是岩石和塔楼，更是某种内心的维度。当你站在废墟之巅，感受着从波希米亚平原吹来的亘古长风，你会明白，为什么有些地方，仅仅是因为“存在”本身，就足以成为一生必去的理由。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/zelen--hora-pilgrimage-church" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    绿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">绿山圣约翰朝圣教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">The Pilgrimage Church of St. John of Nepomuk at Zelená hora</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kuks-hospital-czechia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    库
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">库克堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kuks Hospital</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kromeriz-archbishops-palace" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克罗梅日什总主教宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kroměříž Archbishop's Palace</p>
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
