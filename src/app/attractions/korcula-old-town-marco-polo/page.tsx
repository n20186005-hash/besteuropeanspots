import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科尔丘拉老城 Korčula Old Town｜探寻马可·波罗的传奇故乡与亚得里亚海上的“小杜布罗夫尼克” - 最佳欧洲景点',
  description: '你从海上靠近它时，会以为自己误入了一本中世纪航海图的扉页插图。科尔丘拉老城就那么静静地矗立在伸向蔚蓝海面的一个小小半岛上，赭红色的屋顶层层叠叠，像一堆被阳光晒暖了的威尼斯瓦罐，被一道灰白色的、齿状的城墙整整齐齐地箍住。海风带来咸湿的气味，混合着岸边松树和野生迷迭香的清新。城墙的轮廓在亚得里亚海耀眼的...',
}

export default function KorculaOldTownMarcoPoloPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '科尔丘拉老城', href: '/attractions/korcula-old-town-marco-polo' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`科尔丘拉老城・Korčula Old Town・克罗地亚・科尔丘拉`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你从海上靠近它时，会以为自己误入了一本中世纪航海图的扉页插图。科尔丘拉老城就那么静静地矗立在伸向蔚蓝海面的一个小小半岛上，赭红色的屋顶层层叠叠，像一堆被阳光晒暖了的威尼斯瓦罐，被一道灰白色的、齿状的城墙整整齐齐地箍住。海风带来咸湿的气味，混合着岸边松树和野生迷迭香的清新。城墙的轮廓在亚得里亚海耀眼的日光下，呈现出一种坚硬的、贝壳内侧的光泽。浪花轻轻拍打着堤岸的石阶，那声音不是冲击，更像是慵懒的抚摸。那一刻你就明白了，为什么人们叫它“小杜布罗夫尼克”——它拥有同样惊人的美貌，却把杜布罗夫尼克的喧嚣与华贵，替换成了一种更内敛、更私密的岛屿气质。
穿过海之门，时光的流速立刻变得粘稠起来。脚下的石板路被几个世纪的足迹打磨得温润发光，主街略微隆起，像一个光滑的石脊。奇妙的事情发生了：当你走在东西向的主要街道上，夏日午后的炎阳被两旁高耸的石屋完美地遮挡，留下一片舒适的阴凉；而当你拐进南北向的小巷，阳光又会像一把金色的利剑，精准地劈开狭窄的空间，在石墙上切割出明暗交替的、几何感强烈的光影。风在这里变成了听话的溪流，顺着设计好的“鱼骨”巷弄穿行，发出轻微的呜咽声。你还能闻到老石头深处散发出的、微凉潮湿的气息，某扇敞开的门里飘出午餐炖鱼的香味，以及从庭院探出头来的九重葛那甜腻的花香。
然后，你会不断与“马可·波罗”这个名字相遇。它出现在纪念品商店的招牌上，出现在餐馆的菜单名里，更出现在那座据说是他出生故居的瘦高塔楼上。关于他是否真的出生于此，学者们争论不休，但这重要吗？对科尔丘拉人来说，这位伟大的旅行家早已是岛屿灵魂的一部分。这份传说，就像给这座本就充满故事的石头城，又镀上了一层探险与远方的金色滤镜。你会看到孩子们在广场上奔跑，老人们坐在门廊下的石凳上，用快得像音乐一样的克罗地亚语闲聊，眼神扫过游客时带着一丝岛民特有的、见惯风浪的淡然。这座城不是博物馆里的标本，它依然在呼吸，在生活，只是把现代生活的节奏，调到了海浪摇摆的频率。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你从海上靠近它时，会以为自己误入了一本中世纪航海图的扉页插图。科尔丘拉老城就那么静静地矗立在伸向蔚蓝海面的一个小小半岛上，赭红色的屋顶层层叠叠，像一堆被阳光晒暖了的威尼斯瓦罐，被一道灰白色的、齿状的城墙整整齐齐地箍住。海风带来咸湿的气味，混合着岸边松树和野生迷迭香的清新。城墙的轮廓在亚得里亚海耀眼的日光下，呈现出一种坚硬的、贝壳内侧的光泽。浪花轻轻拍打着堤岸的石阶，那声音不是冲击，更像是慵懒的抚摸。那一刻你就明白了，为什么人们叫它“小杜布罗夫尼克”——它拥有同样惊人的美貌，却把杜布罗夫尼克的喧嚣与华贵，替换成了一种更内敛、更私密的岛屿气质。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过海之门，时光的流速立刻变得粘稠起来。脚下的石板路被几个世纪的足迹打磨得温润发光，主街略微隆起，像一个光滑的石脊。奇妙的事情发生了：当你走在东西向的主要街道上，夏日午后的炎阳被两旁高耸的石屋完美地遮挡，留下一片舒适的阴凉；而当你拐进南北向的小巷，阳光又会像一把金色的利剑，精准地劈开狭窄的空间，在石墙上切割出明暗交替的、几何感强烈的光影。风在这里变成了听话的溪流，顺着设计好的“鱼骨”巷弄穿行，发出轻微的呜咽声。你还能闻到老石头深处散发出的、微凉潮湿的气息，某扇敞开的门里飘出午餐炖鱼的香味，以及从庭院探出头来的九重葛那甜腻的花香。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然后，你会不断与“马可·波罗”这个名字相遇。它出现在纪念品商店的招牌上，出现在餐馆的菜单名里，更出现在那座据说是他出生故居的瘦高塔楼上。关于他是否真的出生于此，学者们争论不休，但这重要吗？对科尔丘拉人来说，这位伟大的旅行家早已是岛屿灵魂的一部分。这份传说，就像给这座本就充满故事的石头城，又镀上了一层探险与远方的金色滤镜。你会看到孩子们在广场上奔跑，老人们坐在门廊下的石凳上，用快得像音乐一样的克罗地亚语闲聊，眼神扫过游客时带着一丝岛民特有的、见惯风浪的淡然。这座城不是博物馆里的标本，它依然在呼吸，在生活，只是把现代生活的节奏，调到了海浪摇摆的频率。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`科尔丘拉老城`} />
                <InfoRow label="英文名称" value={`Korčula Old Town`} />
                <InfoRow label="正式名称" value={`Korčula Old Town`} />
                <InfoRow label="国家" value={`克罗地亚`} />
                <InfoRow label="城市" value={`科尔丘拉`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座被誉为“小杜布罗夫尼克”的、完美保存了中世纪威尼斯风格棋盘式布局的岛屿要塞城市，也是传奇旅行家马可·波罗的传说诞生地。`} />
                <InfoRow label="建筑特色" value={`由坚固的石灰岩城墙环绕，城内是精心规划的鱼骨状（或说“鲱鱼骨”式）街巷体系，以有效抵御强风和阳光直射，住宅多为哥特-文艺复兴风格的石头府邸，装饰着精美的石雕窗棂和家族徽章。`} />
                <InfoRow label="建筑风格" value={`以威尼斯哥特式风格为主导，混合了达尔马提亚本土的罗马式与后来的文艺复兴式元素，形成独特的亚得里亚海石头城市风貌。`} />
                <InfoRow label="文化价值" value={`是达尔马提亚海岸中世纪城市规划与防御建筑的杰出典范，承载了威尼斯共和国鼎盛时期的海上贸易文明，并围绕马可·波罗传说形成了丰富的民间文化与身份认同。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城本身全天24小时开放。城内主要景点（如圣马可主座教堂、马可·波罗故居博物馆、城市博物馆等）开放时间一般为夏季（4月至10月）每日上午9点至晚上7点；冬季（11月至次年3月）开放时间大幅缩短，通常为周一至周五上午10点至下午2点，且部分景点可能关闭维护。具体需查询各景点官网，夏季音乐节等活动期间夜间开放时间可能延长。`} />
              <InfoRow label="门票价格" value={`进入老城城墙区域免费。内部各景点单独售票：圣马可教堂及珍宝室联票约40库纳；马可·波罗故居博物馆约30库纳；科尔丘拉城市博物馆约30库纳。有出售涵盖多个主要景点的折扣联票，约80-100库纳，可在旅游信息中心购买。学生、儿童及团体通常有优惠。`} />
              <InfoRow label="地址" value={`Korčula Old Town, 20260, Korčula, Croatia`} />
              <InfoRow label="交通方式" value={`从克罗地亚首都萨格勒布或主要枢纽斯普利特出发：最常用方式是搭乘长途巴士抵达科尔丘拉岛上的科尔丘拉镇汽车站（距离老城约2公里），车程从斯普利特出发约3-4小时（含轮渡时间）。更浪漫的方式是从杜布罗夫尼克或斯普利特乘坐渡轮抵达科尔丘拉镇港口，港口就在老城脚下，极为方便。Jadrolinija是主要渡轮公司，夏季班次频繁，每日多班，航程从杜布罗夫尼克出发约2-3小时。从港口/车站步行至老城入口仅需5-15分钟。岛上无机场，最近机场在杜布罗夫尼克。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`科尔丘拉的故事，是一块被海洋反复浸染又风干的古老羊皮纸。早在古希腊时期，这里就有部落居住，但真正让它登上历史舞台的，是中世纪两大海上势力的激烈争夺。公元10世纪，威尼斯共和国那双攫取财富的眼睛，就已盯上了这个扼守达尔马提亚海岸中段、拥有优良港口和丰富森林（优质造船木材）的岛屿。而克罗地亚的本土王国也绝不会轻易放弃。于是，在接下来的几百年里，科尔丘拉就像一颗珍贵的棋子，在威尼斯、匈牙利-克罗地亚王国、乃至拉古萨共和国（杜布罗夫尼克）之间来回易手。每一次易主，都伴随着战火、谈判与妥协，也在这座岛的基因里，刻下了复杂的文化层叠。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到1420年，威尼斯共和国终于稳固地掌握了科尔丘拉，并将它纳入了自己庞大的海洋帝国体系。我们现在看到的这座老城的骨骼与肌理，正是在威尼斯统治时期（15-16世纪）被塑造和强化的。聪明的威尼斯工程师没有简单复制本土的模式，他们为这个多风的半岛量身打造了一套天才般的城市规划：将主要街道设计成东西走向的“主脊”，两侧延伸出南北向的狭窄小巷，整个格局酷似鱼骨或一把梳子。这不仅是为了防御（让入侵者在迷宫中迷失），更是为了生活——东西向主街享受穿堂风，南北向小巷则最大限度地保证每户人家都能获得一些日照和私密空间。石头，本地盛产的石灰岩，成为了唯一的建筑材料，从城墙到教堂，从贵族府邸到平民小屋，全部由这种坚固、耐候、泛着珍珠灰光泽的材料筑成，整座城仿佛是从岛屿基岩上自然生长出来的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`石头不仅仅是材料，更是一门传承至今的艺术。科尔丘拉的石匠学校闻名整个亚得里亚海地区。你能在圣马可教堂那华丽的山花墙上，看到繁复的石雕：咆哮的狮子（威尼斯的象征）、圣徒的面容、奇幻的动植物。你能在那些贵族豪宅的窗棂和拱门上，看到精美绝伦的玫瑰花窗、缠绕的藤蔓和家族的纹章。这些沉默的石头，在工匠的锤凿下，诉说着家族的荣耀、信仰的虔诚和对美的极致追求。甚至城市防御体系本身，也是一件石头杰作——那随着地势起伏的城墙、圆形的塔楼（如著名的“马可·波罗塔”）、设计巧妙的城门，共同构成了一件兼具力量与美感的军事艺术品。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而所有历史线索中，最引人遐想的一根，无疑与马可·波罗相连。尽管威尼斯档案中记载马可·波罗是威尼斯人，但科尔丘拉当地有一个古老而坚定的传统，认为他的家族起源于此（当时科尔丘拉岛上有许多威尼斯殖民家庭）。1254年，他的父亲和叔叔在一次航行中于科尔丘拉暂居，马可·波罗便在此诞生。后来全家迁往威尼斯，才有了后续的东方传奇。这座被称为“马可·波罗故居”的塔楼，或许并非确切的出生地，但它更像一个文化符号，将这座岛屿与“丝绸之路”、“元大都”、“《马可·波罗游记》”这些激动人心的词汇永恒地捆绑在了一起。它满足了世人对传奇起源地的所有想象。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`威尼斯共和国的荣光在18世纪末逐渐黯淡，科尔丘拉先后经历了哈布斯堡王朝、拿破仑法国、奥匈帝国的统治。两次世界大战的烽火也曾波及这里。但或许正是由于它偏居海岛，或许是因为它坚固的石头身躯，老城奇迹般地躲过了大规模的破坏。今天的科尔丘拉，不再是军事要塞，而是依靠渔业、葡萄酒（如著名的白葡萄品种“格拉”）和旅游业焕发新生。它的历史没有被封存，而是在每一个夏日夜晚，当“摩尔斯卡骑士剑舞”的表演者在广场上身着传统服饰，用剑与盾敲击出铿锵的节奏时，历史便以一种活生生的、充满力量的方式，重新苏醒过来。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要彻底领略科尔丘拉老城的精髓，建议预留一整天时间。最佳抵达时间是清晨9点前，这时旅游团还未涌入，阳光柔和，本地人刚开始一天的生活，老城最为宁静。整体游览节奏宜慢，遵循“先外后内，先高后低，穿插休憩”的原则。上午先环绕城墙外部，感受其宏伟气势并拍摄全景，然后进入城内，依次探访主要地标建筑和文化场馆。中午在最热闹的主街附近找一家konoba（传统小餐馆）享用午餐。下午则留给小巷深处的随意探索、寻找独特拍照角度，以及参观马可·波罗故居。傍晚时分，一定要登上城墙或海之门塔楼，等待落日将整座石头城和海面染成金黄。这样的安排既能系统了解历史，又能充分感受其生活气息与光影变幻。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季正午阳光非常强烈且主街游客最多，建议此时安排室内参观（如博物馆）或在阴凉小巷探索。穿着绝对要舒适，尤其是鞋子，因为全是光滑的石头路面和台阶。警惕过于热情的“导游”在城门口提供未经授权的服务，官方旅游信息中心能提供可靠地图和建议。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从“海之门”下方进入，首先仰头看看门上方的圣马可飞狮浮雕和城市守护神圣马可的雕像，感受威尼斯时代的威严烙印。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主街（Ulica Korčulanskog statuta）缓坡上行，像当地人几个世纪以来那样，感受脚下光滑的石脊和两旁高墙带来的穿堂凉风。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`右转钻进一条仅容一人通过的窄巷，让身体体会“鱼骨布局”的精妙，并在某个突然出现的豁口处，瞥见一线令人惊喜的碧海。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在圣马可广场驻足，花时间细细打量主座教堂那融合了哥特与文艺复兴风格的华丽正立面，以及上面每一个栩栩如生的石雕故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`买票进入圣马可教堂内部，让眼睛适应昏暗后，寻找那尊出自大师之手的“圣马可”木雕，并感受从彩色玻璃窗透进来的、仿佛有重量的静谧光线。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观完城市博物馆了解历史后，走进广场一侧的“主教珍宝馆”，在那些闪耀着中世纪虔诚之光的金银圣器前屏住呼吸。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着指示牌去寻找“马可·波罗故居”塔楼，虽然其历史真实性存疑，但攀爬狭窄的旋梯登上塔顶俯瞰红屋顶与蓝海交织的棋盘，本身就是一种奇妙的体验。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在夕阳西下前，从“陆之门”走出，沿着海岸步道绕到老城的南侧，从一个完美的侧影角度，回望这座浮于海上的石头城池。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`海之门外的堤坝回望`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，以海之门塔楼和老城城墙为背景，可以拍到经典的“海上城池”倒影照片，若有小船经过画面更佳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣马可广场钟楼仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`上午阳光照亮钟楼侧面时，站在广场角落用广角镜头仰拍，将哥特式的石雕细节与蓝天一同纳入构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“鱼骨”小巷光影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，阳光斜射入南北向小巷时，找一个有特色门廊或楼梯的巷子，等待行人走过，捕捉明暗对比强烈、富有几何美感的瞬间。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从“马可·波罗塔”顶俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`登上塔楼，用长焦镜头压缩空间，拍摄老城层层叠叠的红瓦屋顶、教堂钟楼与远处翠绿岛屿和湛蓝海面组成的全景图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城墙缺口处的框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`环绕城墙步行时，寻找那些古老的炮眼或拱门缺口，将其作为天然画框，框住远处亚得里亚海的碧波与帆影。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`石头城墙和建筑在正午顶光下会显得平淡，尽量利用清晨或傍晚的侧光与金色光线。携带一枚偏振镜可以有效消除石质表面和海面的反光，让色彩更加饱和。注意拍摄居民和私人庭院时保持尊重，最好先微笑示意。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`老城核心沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住由15世纪石头宫殿改造的精品酒店，睡在古老的石拱顶下，清晨被教堂钟声和海鸥鸣叫唤醒，推开木窗就是蜿蜒的小巷。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`港口边便利体验`}</h4>
                  <p className="text-sm text-green-800">{`选择坐落在老城入口附近、面朝港口的家庭公寓，拥有可以俯瞰游艇和渡轮往来的小阳台，既能享受便利又沉浸在海港氛围中。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`静谧花园隐居`}</h4>
                  <p className="text-sm text-yellow-800">{`位于老城城墙脚下、被茂密柠檬树和夹竹桃花园环绕的石头小屋，私密性极佳，夜晚只能听到蟋蟀声，步行到城门仅需三分钟。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`岛屿生活深度链接`}</h4>
                  <p className="text-sm text-purple-800">{`住在与老城一水之隔的科尔丘拉镇新城区本地人社区的民宿，搭乘几分钟的水上出租车即可抵达老城，却能体验更地道的岛民日常生活节奏。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内住宿数量有限且价格较高，夏季务必提前数月预订。城内的房间可能较为小巧且隔音一般（古老的石头建筑特性），但历史氛围无与伦比。选择港口或新城区住宿则性价比更高，且餐饮选择更多样。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开科尔丘拉许久后，记忆里最清晰的，不是某个具体的雕塑或博物馆的展品，而是一种整体的感觉。一种由坚固的石头、温柔的海风、精确的光影和悠缓的节奏共同调和出的“宁静的确定性”。在这个一切都在加速、都在变得虚拟和浮动的时代，这座老城像一块永恒的压舱石。它告诉你，有些美是经得起时间锤凿的，有些智慧（比如那条为风与光设计的街道）是跨越百世依然有效的，有些生活是可以用“日升月落、潮涨潮退”来计量的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它或许没有隔壁杜布罗夫尼克那般戏剧性的恢弘，但正因如此，它才更接近旅行的本质——不是追逐清单上的打卡点，而是让自己沉浸在一个不同的时空频率里。在这里，你很难匆忙。你会自然而然地停下，看一只猫在阳光斑驳的石阶上打盹，听两位老石匠在作坊里用方言讨论一块石头的纹理，或者 simply，就靠在某段城墙上，看帆船在白莲花般的云朵下慢慢滑过蓝丝绒般的海面。马可·波罗的传说，最终指向的不是一个确凿的故居，而是人类内心深处对远方的永恒渴望。而科尔丘拉，这个他传说中的起点，如今成了我们这些后来旅人的一个终点——一个让心灵靠岸、重新找回丈量世界原始尺度的终点。这就是为什么，它值得你漂洋过海而来，住上几日，让它的石头，在你心里也刻下一点什么。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
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
              <a href="/attractions/baroque-varazdin" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    瓦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">瓦拉日丁</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Varaždin</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/pula-arena" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普拉竞技场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pula Arena</p>
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
