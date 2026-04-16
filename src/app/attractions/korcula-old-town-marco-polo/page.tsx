import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科尔丘拉岛 Korčula｜探访马可波罗的石头故乡与亚得里亚海明珠 - 最佳欧洲景点',
  description: '你还记得第一次在地图上看到它的样子吗？一个狭长的、墨绿色的小岛，像一条沉睡的龙，蜿蜒在亚得里亚海蓝得近乎发紫的海水中。而科尔丘拉老城，就盘踞在岛东北角一个微微凸起的海岬上。坐船靠近时，那种视觉冲击是缓慢而坚定的：一片密不透风的红瓦屋顶，被一圈高耸的、蜂蜜色的石头城墙紧紧箍住，几座方塔像忠诚的卫兵一样...',
}

export default function KorculaOldTownMarcoPoloPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '科尔丘拉岛（马可波罗故乡）', href: '/attractions/korcula-old-town-marco-polo' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">科尔丘拉岛（马可波罗故乡）・Korčula・克罗地亚・科尔丘拉</h1>
          <p className="text-lg text-gray-600 mb-6">
            你还记得第一次在地图上看到它的样子吗？一个狭长的、墨绿色的小岛，像一条沉睡的龙，蜿蜒在亚得里亚海蓝得近乎发紫的海水中。而科尔丘拉老城，就盘踞在岛东北角一个微微凸起的海岬上。坐船靠近时，那种视觉冲击是缓慢而坚定的：一片密不透风的红瓦屋顶，被一圈高耸的、蜂蜜色的石头城墙紧紧箍住，几座方塔像忠诚的卫兵一样刺向天空。阳光洒下来，整座城在发光，硬朗又温柔。
踏上码头，海水咸湿的气味混合着岸边松树与迷迭香的清冽，扑面而来。耳边是永恒的协奏曲：海浪有节奏地拍打着岸边的礁石和石阶，发出“哗——唰——”的安抚声；海鸥的鸣叫划破长空；再往里走，是游客隐约的惊叹，和从某扇敞开的窗户里飘出的、刀叉轻碰瓷盘的清脆声响。老城没有汽车，唯一的通行方式是步行。你的脚底立刻开始阅读这座城的历史——每一块铺路的石灰岩都被岁月和无数脚步打磨得温润光滑，在正午的阳光下泛着象牙般的光泽。小巷如此之窄，你甚至可以在中间伸直手臂，同时触碰到两边房屋冰凉的石头墙壁。
但科尔丘拉最动人的，不是它作为“博物馆”的完美，而是它至今仍是一个活生生的社区。傍晚时分，当一日游的船只离开，你会看到本地居民拎着购物袋，慢悠悠地穿过古老的城门回家。阳台上晾晒着床单，窗台上点缀着天竺葵，从某个地窖门里飘出炖肉的浓香。孩子们在教堂广场上追逐，笑声在石头建筑间清脆地回荡。你会突然觉得，马可波罗那个关于遥远东方的伟大梦想，其最初的萌芽，或许就诞生于这样一条寻常的、飘着晚饭香气的小巷里。这里的魔力，在于它将恢弘的历史与温热的日常，完美地缝纫在了一起。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">你还记得第一次在地图上看到它的样子吗？一个狭长的、墨绿色的小岛，像一条沉睡的龙，蜿蜒在亚得里亚海蓝得近乎发紫的海水中。而科尔丘拉老城，就盘踞在岛东北角一个微微凸起的海岬上。坐船靠近时，那种视觉冲击是缓慢而坚定的：一片密不透风的红瓦屋顶，被一圈高耸的、蜂蜜色的石头城墙紧紧箍住，几座方塔像忠诚的卫兵一样刺向天空。阳光洒下来，整座城在发光，硬朗又温柔。</p>
              <p className="text-gray-700 leading-relaxed mb-4">踏上码头，海水咸湿的气味混合着岸边松树与迷迭香的清冽，扑面而来。耳边是永恒的协奏曲：海浪有节奏地拍打着岸边的礁石和石阶，发出“哗——唰——”的安抚声；海鸥的鸣叫划破长空；再往里走，是游客隐约的惊叹，和从某扇敞开的窗户里飘出的、刀叉轻碰瓷盘的清脆声响。老城没有汽车，唯一的通行方式是步行。你的脚底立刻开始阅读这座城的历史——每一块铺路的石灰岩都被岁月和无数脚步打磨得温润光滑，在正午的阳光下泛着象牙般的光泽。小巷如此之窄，你甚至可以在中间伸直手臂，同时触碰到两边房屋冰凉的石头墙壁。</p>
              <p className="text-gray-700 leading-relaxed mb-4">但科尔丘拉最动人的，不是它作为“博物馆”的完美，而是它至今仍是一个活生生的社区。傍晚时分，当一日游的船只离开，你会看到本地居民拎着购物袋，慢悠悠地穿过古老的城门回家。阳台上晾晒着床单，窗台上点缀着天竺葵，从某个地窖门里飘出炖肉的浓香。孩子们在教堂广场上追逐，笑声在石头建筑间清脆地回荡。你会突然觉得，马可波罗那个关于遥远东方的伟大梦想，其最初的萌芽，或许就诞生于这样一条寻常的、飘着晚饭香气的小巷里。这里的魔力，在于它将恢弘的历史与温热的日常，完美地缝纫在了一起。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="科尔丘拉岛（马可波罗故乡）" />
                <InfoRow label="英文名称" value="Korčula" />
                <InfoRow label="正式名称" value="Korčula Old Town" />
                <InfoRow label="国家" value="克罗地亚" />
                <InfoRow label="城市" value="科尔丘拉" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="亚得里亚海东部保存最完好的中世纪防御城镇之一，被广泛传为伟大探险家马可·波罗的出生地。" />
                <InfoRow label="建筑特色" value="独特的“鱼骨”状街巷布局，兼具精巧的防御功能与生活便利，使整座石城宛若一件巨大的石雕艺术品。" />
                <InfoRow label="建筑风格" value="威尼斯哥特式建筑风格占据主导，并融合了达尔马提亚本土的罗马式与早期文艺复兴元素。" />
                <InfoRow label="文化价值" value="一座活着的、呼吸着的“石头之城”，其城市肌理、传统节日（如“摩尔之剑舞”）和航海传统，是达尔马提亚沿海岛屿文化的生动缩影。" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="科尔丘拉老城城门和街道全天24小时开放。城内主要景点如圣马可大教堂、马可波罗故居博物馆、城邦博物馆等开放时间通常为夏季（4月至10月）上午9点至晚上7点，冬季（11月至3月）开放时间缩短，一般为上午10点至下午3点，且部分小景点可能闭馆或仅在周末开放。主要塔楼（如雷韦林塔）的开放时间与博物馆类似。具体时间在旅游旺季可能会有微调，建议行前查看官网或当地旅游信息中心告示。节假日如圣诞节和元旦当天，所有室内景点通常关闭。" />
              <InfoRow label="门票价格" value="漫步科尔丘拉老城蜿蜒的街道和城墙是完全免费的。各个独立景点需单独购票：圣马可大教堂门票约20库纳，马可波罗故居博物馆门票约30库纳，城邦博物馆门票约20库纳，雷韦林塔登塔门票约25库纳。常见的联票（通常包含2-3个景点）价格在50-70库纳之间，性价比更高。学生、儿童及团体通常享有折扣。所有门票均在景点入口处购买，支持现金（欧元或库纳）和信用卡支付。" />
              <InfoRow label="地址" value="Korčula Old Town, 20260, Korčula, Croatia" />
              <InfoRow label="交通方式" value="抵达科尔丘拉岛本身就像一场航海冒险。从克罗地亚本土有两个主要门户：杜布罗夫尼克和斯普利特。从杜布罗夫尼克机场出发，乘坐机场巴士到杜布罗夫尼克主巴士站，换乘前往奥雷比奇（Orebić）的长途巴士（约2.5小时），再从奥雷比奇码头乘坐频繁的汽车渡轮（约15分钟）即可抵达科尔丘拉镇。从斯普利特出发更为常见：在斯普利特巴士总站搭乘直达科尔丘拉镇的长途巴士（夏季班次密集，约3-4小时），这条风景壮丽的路线的最后一段是搭乘大型汽车渡轮跨越海峡，巴士会直接开上渡轮，你可以在甲板上欣赏无与伦比的岛屿风光。此外，夏季还有从斯普利特、赫瓦尔等地直达科尔丘拉镇的快船（乘客渡轮），速度更快但价格较高。建议在克罗地亚巴士公司网站上提前查询时刻表，夏季车船联运票紧张，最好提前预订。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">想象一下，在遥远的古希腊时期，航海者就已经被这个树木葱郁、拥有天然良港的岛屿所吸引。它最初的名字“黑色科尔丘拉”，或许就源于茂密的黑松林。然而，真正为这座城打下不可磨灭烙印的，是中世纪那段风起云涌的岁月。从10世纪到18世纪，科尔丘拉的命运如同亚得里亚海的波涛，在几个强大的势力间起伏不定。它曾短暂地属于克罗地亚王国，后又被威尼斯共和国、匈牙利王国、乃至杜布罗夫尼克共和国反复争夺。而其中，威尼斯的影响最为深远，持续了数百年。</p>
              <p className="text-gray-700 leading-relaxed mb-4">为什么是威尼斯？因为财富与恐惧。科尔丘拉岛盛产优质的石头、木材，更重要的是，它位于重要的海上贸易路线上。财富引来了觊觎，尤其是来自奥斯曼帝国海盗的威胁。于是，在威尼斯人的主持下，从13世纪到16世纪，一座固若金汤的石头城池被一点点建造起来。我们今天看到的城墙、塔楼、以及那座令人叹为观止的“鱼骨”街道布局，都是这个时代的产物。这种设计绝非偶然：东西向的主街宽阔笔直，便于集会和通行；而南北向的小巷则狭窄曲折，且多为台阶，不仅有效地抵御了亚得里亚海强烈的北风，更在敌人攻入时，能极大地限制其行动，便于巷战。这是一座为生存而建的智慧之城。</p>
              <p className="text-gray-700 leading-relaxed mb-4">当然，绕不开的那个人是马可·波罗。尽管历史学家对此仍有争议，但科尔丘拉人坚信，这位伟大的旅行家于1254年出生在这里的一个商人贵族家庭。传说他的家就在那座以他名字命名的塔楼附近。你可以想象，年幼的马可波罗是如何在这些码头上，听着水手们讲述着关于君士坦丁堡、关于亚历山大港的奇异见闻，看着满载着东方丝绸、香料和故事的船只进港。这座城给了他航海的基因、商人的嗅觉和对远方无尽的好奇。无论真相如何，这个传说已经成为了科尔丘拉灵魂的一部分，为这座坚硬的石头城增添了一层浪漫、冒险的柔光。</p>
              <p className="text-gray-700 leading-relaxed mb-4">战争与和平的轮回在这里不断上演。城墙见证了奥斯曼帝国的数次围攻，也目睹了威尼斯共和国的最终衰落。拿破仑的军队曾短暂占领，随后又是奥匈帝国的统治。石头沉默地记录了一切。直到二十世纪，它才真正归于平静，成为南斯拉夫，乃至后来独立克罗地亚的一部分。令人惊奇的是，尽管经历了这么多，老城的核心结构几乎没有改变。二战期间，它幸运地躲过了大规模轰炸，得以将中世纪的容颜几乎完整地保留至今。这本身就是一个奇迹。</p>
              <p className="text-gray-700 leading-relaxed mb-4">今天的科尔丘拉，不再需要为防御而战。它的城墙成了观赏落日的最佳看台，它的塔楼里开设着迷人的小美术馆，它的地窖变成了品尝本地白葡萄酒“格克”（Grk）和“波西普”（Pošip）的酒吧。然而，当你用手抚摸那些粗糙的石头，当你参加夏季盛大的“摩尔之剑舞”表演（这一传统可追溯到中世纪），你会感到，历史并未远去，它只是换了一种更平和、更诗意的方式，在这座阳光与石头构成的舞台上，继续上演。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  要真正品味科尔丘拉，请务必给自己完整的一天，并尽量在过夜游轮的乘客大军抵达之前（上午10点前）进入老城。建议游览节奏为“先外后内，先高后低，最后沉浸”。上午光线最佳，适合从外围和制高点欣赏全景、拍摄建筑细节；午后当小巷里挤满人群时，你可以选择进入凉爽的博物馆或找家咖啡馆观察人间百态；傍晚则留给城墙和落日，这是老城一天中最富戏剧性的时刻。整体游览时间约6-8小时，别忘了留出松弛的时间迷路，因为在这里，迷路本身就是最美好的发现。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>上午十点半到下午三点是老城最拥挤的时段，大批一日游游客涌入，如果想安静拍照或感受氛围，请务必利用好清晨和傍晚。老城所有小巷几乎都是光滑的石板路和台阶，请绝对放弃高跟鞋，穿一双最舒适防滑的平底鞋。注意脚下，很多台阶高低不一，走路不看景，看景不走路。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从气势恢宏的“陆地之门”进入老城，仰头细看门上精致的圣马可飞狮浮雕和上方守护的雷韦林塔。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">沿着宽阔的“思维蒂·马可街”主街漫步，感受两边高大威尼斯宫殿带来的庄严气派，一直走到城市的中心——圣马可大教堂广场。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">花时间沉浸在大教堂内部，让眼睛适应昏暗光线后，寻找那尊由大师博诺创作的、表情异常生动的圣马可石狮，以及角落里的“最后的晚餐”浮雕。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">走进那栋标着“马可波罗故居”的黄石房子，虽然真实性存疑，但站在顶层小阳台上眺望鳞次栉比的屋顶与湛蓝大海时，你仿佛能触摸到那股渴望探索远方的悸动。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从大教堂广场随意拐进任何一条狭窄的“鱼骨”小巷，比如“乌兹扎迪奇宫”所在的小巷，用手触摸冰凉的墙壁，感受阳光如何在狭窄的空间里切割出明暗交错的光影画廊。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">沿着老城临海的城墙走一圈，从不同的角度和高度俯瞰深蓝色的海峡、对岸的佩列沙茨半岛，以及码头边随着波浪轻轻摇晃的白色游艇。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">在傍晚时分，登上西侧的“马可波罗塔”或附近的城墙段，找块石头坐下，安静地等待夕阳将整个石头城、天空和大海染成一片燃烧的金红。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">当暮色四合、华灯初上时，钻进一家老石头地窖改造的葡萄酒吧，点一杯本岛的“波西普”干白，让清爽的柑橘香气为这一天画上完美的句号。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 从海上的视角拍摄全景</h4>
                  <p className="text-sm text-gray-700">租一条小船或参加短途乘船游，在清晨或日落前从老城西北侧的海面上拍摄，可以得到城墙、塔楼与碧海蓝天构成的完美明信片角度。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 圣马可大教堂台阶仰拍</h4>
                  <p className="text-sm text-gray-700">上午阳光照亮教堂正面时，站在广场的台阶下向上仰拍，可以将哥特式玫瑰窗、精致的山花与蓝天一同纳入画面，构图宏伟。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. “鱼骨”小巷的光影捕捉</h4>
                  <p className="text-sm text-gray-700">午后阳光斜射时，选择一条东西走向的狭窄小巷，等待行人经过的瞬间，捕捉阳光将人影拉长投射在古老石壁上的生动画面，故事感极强。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 城墙上的俯瞰视角</h4>
                  <p className="text-sm text-gray-700">登上西门附近的城墙，使用中长焦镜头，压缩视角，拍摄红瓦屋顶层层叠叠、错落有致地蔓延至海边的经典场景，最佳光线在日落前两小时。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 雷韦林塔下的拱门框架</h4>
                  <p className="text-sm text-gray-700">从老城内，透过“陆地之门”的拱门向外拍摄雷韦林塔，用拱门作为天然画框，营造出深邃的历史纵深感，清晨侧光时效果最佳。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 亚得里亚海的阳光在夏季正午非常强烈且生硬，尽量利用日出后和日落前的“黄金时刻”与“蓝色时刻”进行拍摄，光线柔和，色彩梦幻。尊重当地居民隐私，避免将镜头直接对准居民家的窗户或阳台内部。尝试黑白摄影，能非常好地突出石头建筑的质感、线条和光影对比，赋予照片一种永恒的历史感。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">沉浸式石屋民宿</h4>
                  <p className="text-sm text-blue-800">住在老城城墙内一栋由15世纪石头房子改造的公寓里，睡在古老的石拱门下，清晨被从百叶窗缝隙透进的阳光和海鸥的叫声唤醒，完全融入中世纪氛围。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">设计感避世酒店</h4>
                  <p className="text-sm text-green-800">选择坐落在老城边缘松林中的一家精品设计酒店，房间拥有极简风格和无敌海景露台，在私密宁静中同时享有漫步至老城的便利，是现代与古老的完美结合。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">岛民生活体验</h4>
                  <p className="text-sm text-yellow-800">住在与老城一桥之隔的“新镇”区域的家庭式公寓，房东可能是一位老船长，他会告诉你哪里能买到最新鲜的鱼，体验更本地化、更松弛的日常生活节奏。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">奢华历史庄园</h4>
                  <p className="text-sm text-purple-800">下榻于距离老城几公里外、隐藏在橄榄园与葡萄园中的一座文艺复兴风格庄园别墅，享受无边泳池、私人海滩和顶级餐饮，将海岛度假与古城探访合二为一。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">老城内的住宿非常有特色，但需注意多数是老建筑，楼梯陡峭且隔音可能不佳，预订时仔细查看评价。夏季（7-8月）住宿异常紧俏，价格也最高，建议至少提前3-4个月预订。如果追求安静睡眠，老城外的“新镇”或东海岸的小海湾是更优选择，性价比也更高。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开科尔丘拉的时候，我的手里好像还留着那些石头墙面的触感，冰凉，坚实，带着阳光晒过后的余温。这座城教给我的，是一种“坚实的浪漫”。它没有虚幻的泡沫，它的美丽建立在数百年来人们为了生存、为了守护家园而付出的巨大艰辛之上。每一块石头都曾被精心打磨、垒砌，每一条“鱼骨”小巷都充满了生活的智慧。这里的浪漫，是马可波罗扬帆远航的雄心，是水手妻子在塔楼上眺望归帆的等待，是夕阳下每一扇窗户后亮起的温暖灯光。这是一种根植于现实，却又能超越现实的诗意。</p>
              <p className="text-gray-700 leading-relaxed mb-4">在当今这个追求瞬时刺激、一切快速流转的世界里，科尔丘拉像一座时间的锚点。它提醒我们，有些价值需要缓慢的累积和用心的守护。它不只是一处风景，更是一种生活状态的展示：如何在传统与现代之间找到平衡，如何让历史不仅仅是教科书上的文字，而是每天推开门就能呼吸到的空气。对于每一位热爱深度游的旅人来说，这里不是打卡地，而是一个可以让你安静下来、触摸历史脉络、并反思自身来路的驿站。当你穿行于它的光影之间，你不仅在探索一座岛、一座城，更是在与自己内心那份对坚实、美好与远方的渴望，进行一次深度的对话。这，或许才是旅行最珍贵的意义。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
