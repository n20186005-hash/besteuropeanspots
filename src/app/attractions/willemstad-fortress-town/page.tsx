import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '威廉斯塔德 Willemstad｜探秘荷兰独一无二的七角星形水上堡垒小镇 - 最佳欧洲景点',
  description: '我第一眼看到威廉斯塔德，是从那座横跨在福尔克拉克运河上的古老吊桥。眼前的景象像极了孩子用圆规和直尺在蓝色画布上精心绘制的几何图案——一个无比规则的七角星，静静地躺在水中央。那种精确到近乎刻板的对称美，带着文艺复兴时期特有的理性与骄傲，扑面而来。空气里是北海吹来的、略带咸腥的清风，混合着岸边老砖石被午...',
}

export default function WillemstadFortressTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '威廉斯塔德', href: '/attractions/willemstad-fortress-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`威廉斯塔德・Willemstad・荷兰・威廉斯塔德（北布拉班特省）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`我第一眼看到威廉斯塔德，是从那座横跨在福尔克拉克运河上的古老吊桥。眼前的景象像极了孩子用圆规和直尺在蓝色画布上精心绘制的几何图案——一个无比规则的七角星，静静地躺在水中央。那种精确到近乎刻板的对称美，带着文艺复兴时期特有的理性与骄傲，扑面而来。空气里是北海吹来的、略带咸腥的清风，混合着岸边老砖石被午后阳光晒出的暖洋洋的味道。耳边只有风声、水波轻拍石岸的哗哗声，还有远处不知谁家院子里传来的、被风吹得断断续续的自行车铃声。
走下桥，就进入了这颗“星星”的内部。奇妙的感觉发生了：外面看是严阵以待的军事堡垒，里面却是一个活色生香、慢悠悠的荷兰小镇生活图景。狭窄的街道两旁，是漆成巧克力棕、奶酪黄和砖红色的山墙房屋，窗台上一定少不了盛开的天竺葵。中央的圆形港湾里，停靠着几艘白色的休闲小艇，随着波浪轻轻摇摆。当地人骑着老式自行车，车筐里装着刚买的面包，叮铃铃地从你身边经过。你会瞬间明白，这座堡垒从未死去，它只是温柔地褪下了铠甲，把棱堡变成了花园，把兵营变成了家园，把护城河变成了自家后院的风景。
在这里，最打动人的就是一种“秩序中的温柔”。你能处处感受到最初设计者那种掌控一切的几何雄心——每一条路都笔直地指向一个棱堡，每一个转角都经过计算。但几个世纪的生活气息，早已像藤蔓一样爬满了这些冰冷的线条。咖啡馆的露天座侵占了城墙一角，孩子们在曾经的炮台上追逐玩耍，老教堂的钟声准时敲响，不是为了警报，而是为了晚餐时间。这种强烈的反差，这种军事工程的严谨与日常生活的散漫之间的奇妙共生，就是威廉斯塔德独一无二的灵魂。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`我第一眼看到威廉斯塔德，是从那座横跨在福尔克拉克运河上的古老吊桥。眼前的景象像极了孩子用圆规和直尺在蓝色画布上精心绘制的几何图案——一个无比规则的七角星，静静地躺在水中央。那种精确到近乎刻板的对称美，带着文艺复兴时期特有的理性与骄傲，扑面而来。空气里是北海吹来的、略带咸腥的清风，混合着岸边老砖石被午后阳光晒出的暖洋洋的味道。耳边只有风声、水波轻拍石岸的哗哗声，还有远处不知谁家院子里传来的、被风吹得断断续续的自行车铃声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走下桥，就进入了这颗“星星”的内部。奇妙的感觉发生了：外面看是严阵以待的军事堡垒，里面却是一个活色生香、慢悠悠的荷兰小镇生活图景。狭窄的街道两旁，是漆成巧克力棕、奶酪黄和砖红色的山墙房屋，窗台上一定少不了盛开的天竺葵。中央的圆形港湾里，停靠着几艘白色的休闲小艇，随着波浪轻轻摇摆。当地人骑着老式自行车，车筐里装着刚买的面包，叮铃铃地从你身边经过。你会瞬间明白，这座堡垒从未死去，它只是温柔地褪下了铠甲，把棱堡变成了花园，把兵营变成了家园，把护城河变成了自家后院的风景。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这里，最打动人的就是一种“秩序中的温柔”。你能处处感受到最初设计者那种掌控一切的几何雄心——每一条路都笔直地指向一个棱堡，每一个转角都经过计算。但几个世纪的生活气息，早已像藤蔓一样爬满了这些冰冷的线条。咖啡馆的露天座侵占了城墙一角，孩子们在曾经的炮台上追逐玩耍，老教堂的钟声准时敲响，不是为了警报，而是为了晚餐时间。这种强烈的反差，这种军事工程的严谨与日常生活的散漫之间的奇妙共生，就是威廉斯塔德独一无二的灵魂。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`威廉斯塔德`} />
                <InfoRow label="英文名称" value={`Willemstad`} />
                <InfoRow label="正式名称" value={`Willemstad`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`威廉斯塔德（北布拉班特省）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`16世纪荷兰独立战争时期由奥兰治亲王威廉一世亲自规划并命名的战略性水上堡垒，是荷兰黄金时代早期军事防御工程的杰出典范。`} />
                <InfoRow label="建筑特色" value={`以中央港湾为核心，七座棱堡通过城墙和堤坝完美连接，从空中俯瞰呈现为一个标准的几何七角星形，与运河水系融为一体。`} />
                <InfoRow label="建筑风格" value={`文艺复兴时期的堡垒建筑与典型的荷兰砖砌山墙民居风格和谐共存。`} />
                <InfoRow label="文化价值" value={`一座“活着的”防御工事博物馆，完美体现了荷兰人“与水博弈”和“精于规划”的民族智慧，从军事要塞宁静过渡为生活小镇的独特案例。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇公共区域全天开放。核心历史建筑如市政厅、荷兰归正宗教堂等内部参观时间一般为周二至周六 10:00-16:00，周日13:00-16:00，周一大多闭馆。乘船游览及部分博物馆的开放时间随季节变动，夏季（4月-10月）延长，冬季缩短。建议行前在镇中心游客信息处（VVV）确认当日具体安排。`} />
              <InfoRow label="门票价格" value={`进入小镇免费。主要景点如莫里茨豪斯博物馆门票约7欧元，荷兰归正宗教堂登塔门票约3欧元。运河游船约8-12欧元。联合通票（包含多个景点）约15欧元，可在游客中心购买。持有博物馆卡（Museumkaart）可免费进入合作博物馆。`} />
              <InfoRow label="地址" value={`Haven, 4797 AJ Willemstad, Netherlands`} />
              <InfoRow label="交通方式" value={`从阿姆斯特丹史基浦机场出发：最便捷方式是乘坐火车。在机场火车站乘坐IC列车前往多德雷赫特中央车站，车程约1小时15分钟，班次频繁。在多德雷赫特换乘前往罗森达尔方向的区域列车，在“威廉斯塔德”小站下车，车程约25分钟，每小时约2班。从火车站步行10分钟即可进入星形堡垒的核心区域。从鹿特丹中央车站出发更近，火车至多德雷赫特约20分钟，后续换乘相同。自驾的话，小镇外围有免费停车场（P1），非常方便。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`时间拨回到1572年，那是荷兰八十年独立战争初期烽火连天的岁月。这片位于荷兰泽兰省与北布拉班特省交界处、扼守着通往安特卫普和鹿特丹水路咽喉的泥泞地带，战略地位骤然凸显。当时的起义军领袖，沉默者威廉·奥兰治，以他卓越的战略眼光看中了这里。他并非要建一座普通的城堡，而是要打造一个前所未有的、现代化的水上要塞，一个能驻扎军队、控制航道、且自身极难被攻破的据点。于是，一个基于当时最先进意大利防御理论的设计诞生了：七角星形。七个突出的棱堡消除了任何射击死角，可以让交叉火力覆盖每一寸城墙；宽阔的护城河与背后的福尔克拉克运河相连，既是天堑，也是生命线。威廉亲王以自己的名字为其命名——“威廉的城”（Willemstad）。这个名字，寄托着他对一个新生国家的全部期望。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最初的威廉斯塔德，是一个彻头彻尾的军事工程。城墙之内，一切都是为了战争服务。仓库里堆满火药和粮食，兵营里住着操练的士兵，棱堡上架着黑黝黝的重炮。它的成长与荷兰共和国的命运紧紧捆绑。在随后的“黄金世纪”，它成功地抵挡了西班牙军队的多次围攻，像一颗坚固的铆钉，死死钉在荷兰南部的防线上。繁荣的贸易船队也从它的港湾前驶过，为它带来补给和见闻。小镇的轮廓，在和平年代得到了进一步完善，比如那座标志性的八角形教堂，就是在17世纪初增建的，它的尖塔成为了水手们归航时最先看到的陆地标志之一。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，军事技术的进步最终让古老的星形堡垒失去了战略价值。19世纪后，火炮的射程和威力已非昔日可比。威廉斯塔德幸运地没有经历残酷的近代战争摧毁，而是逐渐被时代“遗忘”在安静的运河边。驻军慢慢撤走，大炮被移走，但小镇的物理结构却完整地保存了下来。居民们开始填补军队留下的空白。棱堡的斜坡被开垦成菜园和花园，军官的住所变成了寻常百姓家，港湾里停靠的不再是军舰，而是渔船和商船。它完成了一次静默而成功的转型，从国家的盾牌，变成了社区的摇篮。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的宁静，也曾被现代的硝烟短暂打破。二战期间，德军占领了小镇，并在其周边修筑了防御工事。1944年，为解放荷兰而战的加拿大军队在此与德军激战，小镇的墙壁上至今还能找到些许弹痕，像老年人皮肤上淡淡的疤痕，诉说着并不久远的伤痛。战后，荷兰人用他们特有的务实和珍视，迅速修复了家园。他们意识到，威廉斯塔德不仅仅是一个家乡，更是一件不可复制的历史艺术品。它被精心维护，被列为国家保护遗产，最终活成了我们现在看到的模样——一部用砖石、水和生活写成的立体史书。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你将整个上午和午后时光都留给威廉斯塔德，它小巧，但值得慢品。最佳抵达时间是早上9点左右，这时游客还未涌入，阳光柔和，能拍到堡垒最干净的全景。整个深度游览大约需要4-5小时。节奏应该是“先整体，后局部，再沉浸”：先从外围的堤坝或桥上远观，理解其星形格局；然后走进小镇，沿着主轴线探索建筑和历史；最后，把自己丢进码头边的咖啡馆或坐在棱堡的草地上，感受它的生活气息。这样的安排能让你从宏观到微观，从历史到当下，完整地捕获它的灵魂。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇石板路多且略有起伏，建议穿一双舒适好走的平底鞋。
内港周边的餐厅在午餐时段很受欢迎，若想坐在水边最好稍早或稍晚前去。
这里几乎没有大型旅游团，非常安静，请尊重当地居民的生活隐私，拍照时尽量避免对准私人住宅的窗户。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从古老的“鹿特丹门”进入小镇，这是星形堡垒现存的主要城门，抚摸那厚重砖石感受几个世纪的风霜。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着笔直的“港口街”走向圆形内港，让视线越过波光粼粼的水面，将对岸色彩柔和的房屋和教堂尖塔尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要登上荷兰归正宗教堂的塔楼，这是小镇的制高点，转着圈看脚下那个完美的几何图形在你眼前缓缓展开。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探访古老的市政厅，留意其立面精致的狮子雕刻和内部可能展出的小镇历史地图与模型。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选一个棱堡（比如“西棱堡”）走上去，躺在斜坡的草地上，想象当年炮手的位置，如今眼前只有吃草的羊群和滑过的帆船。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在内港边的“港口咖啡馆”找一张露天座位，点一杯咖啡或本地啤酒，看船只进出和水鸟盘旋，真正像当地人一样浪费时间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果你对军事史着迷，不要错过小镇南侧的“防御工事博物馆”，里面详细解释了星形堡垒的设计奥秘。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在离开前，散步到福尔克拉克运河对岸的堤坝上，回望整个小镇，这是与初遇时不同的、告别性的全景视角。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`福尔克拉克运河东侧堤坝远眺`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗的傍晚，夕阳从西侧打在建筑立面上，使用长焦镜头压缩空间，能拍出星形堡垒倒映在运河中的标准对称全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`内港圆形码头边缘`}</h4>
                  <p className="text-sm text-gray-700">{`清晨八点左右，阳光刚刚照亮对岸房屋的山墙，利用港湾的弧形线条作为前景，将教堂塔楼置于画面中央，构图极具引导感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`西棱堡的斜坡草地`}</h4>
                  <p className="text-sm text-gray-700">{`午后，以草地上悠闲的绵羊为前景，将背景虚化为港湾和远处的风车，营造宁静的田园堡垒诗意画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`“鹿特丹门”门洞内向外拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个阳光强烈的正午，站在门洞的阴影里，向外拍摄港口街和水面，形成强烈的明暗对比和景深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`荷兰归正宗教堂塔楼顶部`}</h4>
                  <p className="text-sm text-gray-700">{`这是唯一的360度全景机位，广角镜头可以囊括整个七角星形状，记得将一部分古老的铜制屋顶或塔楼栏杆作为前景。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`无人机航拍是展现星形全景的绝佳方式，但务必遵守荷兰严格的无人机法规，远离人群和私人区域，并注意风力。`}</li>
                <li>• {`小镇的光线在上午和黄昏最为迷人，柔和的光线能让砖石的颜色呈现出丰富的层次。`}</li>
                <li>• {`拍摄当地居民和他们的日常生活时，请务必先微笑示意并获得同意，这是基本的尊重。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经典体验`}</h4>
                  <p className="text-sm text-blue-800">{`入住港口边由17世纪商人房屋改造的家庭旅馆，推开木格窗就是停满小船的内港，夜晚能听到轻柔的水浪声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色之选`}</h4>
                  <p className="text-sm text-green-800">{`位于其中一个棱堡内的独特B&B，房间拥有原始的厚重墙壁和拱形天花板，花园直通古老的城墙步道。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车10分钟可达的郊外城堡酒店，坐落在静谧的森林与湖泊之间，提供极致的宁静和历史氛围，适合想要彻底放松的旅客。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`预算友好`}</h4>
                  <p className="text-sm text-purple-800">{`小镇入口附近现代而简洁的酒店式公寓，自带小厨房，方便灵活，且停车免费，是探索周边地区的完美基地。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇内的住宿数量非常有限，尤其在夏季和周末，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`住在镇上能体验到入夜后和清晨游客散去时，那份只属于居民的绝对宁静，这是白天游览无法获得的珍贵体验。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果你自驾，选择郊外的住宿往往性价比更高，且能享受荷兰乡村的田园风光。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开威廉斯塔德许久，那个清晰的几何形状还会不时浮现在我的脑海里。它让我思考，人类对于“秩序”和“安全”的追求，竟然可以创造出如此一种近乎艺术的形式。最初，它是恐惧的产物，是战火催生的精密机器。但时间这位伟大的艺术家，却用最平凡的生活点滴——咖啡的香气、孩子的欢笑、窗台的花朵——作为颜料，一点点涂抹、渗透，最终将那份冰冷的理性，融化成了触手可及的温柔。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个崇尚流动、变化和模糊边界的快节奏世界，威廉斯塔德像是一个坚定的提醒。它告诉我们，清晰的边界和严谨的结构，未必意味着禁锢；它们也可以成为守护生活、孕育美好的摇篮。这里没有惊心动魄的传奇故事，没有令人眩晕的宏伟景观，它的力量在于一种“完整的幸存”。它幸存了形态，更幸存了一种在秩序中自在生活的能力。每一位热爱深度游的旅人都该来此驻足，不仅仅是为了一眼看到头的星形地图，更是为了亲身走进这幅地图里，感受历史如何从一张紧绷的弓，松弛成一首漂浮在水上的、轻快的摇篮曲。在这里，你会找到一种久违的、关于“家园”的确定性和安宁。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kasteel-de-haar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    德
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">德哈尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kasteel de Haar</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/roermond-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    鲁
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">鲁尔蒙德老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Roermond Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/veere-historic-port" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    费
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">费勒</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Veere</p>
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
