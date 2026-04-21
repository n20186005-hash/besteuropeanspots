import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '莱顿古堡旅游攻略：爬上十一世纪人工丘堡，俯瞰红屋顶大学城的秘密指南',
  description: '探索荷兰莱顿古堡（Burcht van Leiden）深度游攻略。揭秘这座罕见建于人工土丘上的圆形贝壳石城堡，如何成为俯瞰全城红屋顶的最佳观景台。包含门票、交通及一日游路线。',
}

export default function BurchtVanLeidenPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '莱顿古堡', href: '/attractions/burcht-van-leiden' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`莱顿古堡・Burcht van Leiden・荷兰・莱顿`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，想象一下：你穿梭在莱顿充满年轻活力的运河街道间，耳边是自行车的铃声和大学生的笑语，拐过一个弯，眼前突然出现一座郁郁葱葱的圆形山丘，一条石径蜿蜒而上，山顶一座厚重的石堡若隐若现——这不是梦境，这就是莱顿古堡，一个被繁华大学城温柔包裹的千年秘密。今天这份**莱顿古堡旅游攻略**，就是你的专属钥匙。作为欧洲极其罕见的、完全建造在人工堆积土丘上的11世纪防御城堡，它没有恢弘的宫殿房间，却拥有整个莱顿最无敌的360度全景。接下来这份**自由行指南**，就带你避开寻常游客的打卡点，像本地人一样，爬上山丘，触摸那些温暖的贝壳石，等待一场只属于你的落日与钟声。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友，想象一下：你穿梭在莱顿充满年轻活力的运河街道间，耳边是自行车的铃声和大学生的笑语，拐过一个弯，眼前突然出现一座郁郁葱葱的圆形山丘，一条石径蜿蜒而上，山顶一座厚重的石堡若隐若现——这不是梦境，这就是莱顿古堡，一个被繁华大学城温柔包裹的千年秘密。今天这份<strong>莱顿古堡旅游攻略</strong>，就是你的专属钥匙。作为欧洲极其罕见的、完全建造在人工堆积土丘上的11世纪防御城堡，它没有恢弘的宫殿房间，却拥有整个莱顿最无敌的360度全景。接下来这份<strong>自由行指南</strong>，就带你避开寻常游客的打卡点，像本地人一样，爬上山丘，触摸那些温暖的贝壳石，等待一场只属于你的落日与钟声。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`莱顿古堡`} />
                <InfoRow label="英文名称" value={`Burcht van Leiden`} />
                <InfoRow label="正式名称" value={`Burcht van Leiden`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`莱顿`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`莱顿古堡的历史地位，简直是一部浓缩的荷兰早期生存史诗。我们都知道荷兰以“低地之国”闻名，莱顿地区在古代更是遍布沼泽与河流。大约在公元11世纪左右，当地的领主为了在这样平坦、易涝的土地上建立有效的防御据点和控制河道贸易，做出了一个极具智慧且耗费惊人的决定：**用人力一筐一筐泥土堆起一座高大的山丘**。这座人工土丘（Motte）便是古堡的根基。在当时，这不仅是权力和技术的象征，更是在自然灾害频发的环境中，创造出一个绝对干燥、安全的制高点。它最初属于荷兰伯爵，是莱顿地区早期行政与军事权力的核心。有趣的是，随着莱顿城市在12-13世纪逐步发展并建造了更宏大的城墙体系，这座古堡的原始军事防御功能逐渐褪去。它没有在战火中被摧毁，反而因其独特的景观价值被保留下来，从一座军事堡垒转型为一座“景观亭阁”，这在欧洲城堡史上是非常独特的轨迹。它见证了莱顿从一个河边定居点成长为文艺复兴时期重要的纺织业中心和欧洲知名的大学城（莱顿大学成立于1575年）的全过程，是沉默而坚固的奠基者。`} />
                <InfoRow label="建筑特色" value={`莱顿古堡的建筑，第一眼看去就是一种质朴而强大的力量感。最震撼的莫过于它**浑圆、完整的圆形城墙**，像一个巨大的石头手镯，紧扣在山丘顶端。城墙并非由规整的方石砌成，而是采用了当地特有的**贝壳石（Schelpensteen）**。凑近看，这些石头表面粗糙，嵌满了无数细小的贝壳化石，在阳光下泛着淡淡的暖黄色和灰白色光泽，用手触摸，能感受到历史的颗粒感和北海沉积物的温度。城墙高度约八米，厚重敦实，墙上开有狭长的射击孔。城堡没有传统意义上的主楼，整个结构就是一个空心的环形城墙，中间围出一片宁静的、绿草如茵的庭院。登上城墙的步道是沿着内壁修建的斜坡，蜿蜒而上。城墙顶部非常宽阔，你可以绕着它走完整整一圈。这里的细节在于，城墙垛口的形态并不完全统一，有些地方保留了原始的粗糙，仿佛能看到当年工匠施工的痕迹。整个建筑没有任何多余的装饰，它的美纯粹来自于几何的圆满、材料的天然，以及与脚下人工山丘浑然一体的奇特形态。`} />
                <InfoRow label="建筑风格" value={`莱顿古堡是**罗马式建筑风格**在防御工事上的典型体现，这种风格盛行于11-12世纪。它的核心特点就是“厚重、坚固、实用”，一切为了防御服务。在这里，你可以清晰地看到这种风格的表现：**极其敦实、几乎无窗的墙体**（除了必要的射击孔），用以抵御攻击和投石器的撞击；**简约的半圆形拱门**作为入口，虽然现在的入口是后来修缮的，但仍遵循了原始的形制；**整体紧凑、集中的圆形布局**，这种设计在军事上能消除防守死角，提供无死角的视野和射击范围，是早期城堡常见的“城楼”（Keep）设计的一种演变。与后来追求高大、华丽、居住舒适性的哥特式或文艺复兴式城堡截然不同，莱顿古堡的罗马式风格散发着一种原始而直接的力量。它没有尖塔，没有繁复的雕刻，它的语言就是泥土、石头和几何图形。站在这座城堡上，你能最直观地理解中世纪早期人们对于“安全”的定义：那就是用最简单的材料和最有效的形式，创造一个居高临下、坚不可摧的庇护所。这种风格与它脚下后来兴建的、带有山形墙和精美窗棂的荷兰黄金时代民居形成了跨越数百年的有趣对话。`} />
                <InfoRow label="文化价值" value={`对于今天的莱顿人和来访者而言，莱顿古堡的文化价值早已超越了其最初的军事意义。它已经深深融入城市的身份认同与日常生活中。首先，它是莱顿最醒目、最受爱戴的**地理与精神坐标**。无论你在城市的哪个角落，抬头几乎都能望见这座绿意盎然的山丘和它顶部的石环，它就像一个永恒的守望者，给予这座城市安全感和历史纵深感。其次，它是一个**免费的、充满亲和力的公共空间**。这里没有高昂的门票，没有严格的开放时间（庭院常年开放），它属于每一个市民。你会看到游客在此惊叹拍照，学生带着书本在草地上复习，恋人们并肩坐着看日落，附近居民晚饭后上来散步消食。这种开放性，让古老的历史建筑不再是冰冷的博物馆展品，而是城市呼吸的一部分。最后，它承载着**集体记忆与庆祝活动**。在一些特殊节日，古堡会披上灯饰，成为庆祝的背景。它提醒着人们，历史并非遥不可及，它可以是一个放学后可以爬上去玩耍的地方，一个思考时可以寻求宁静的地方。从堡垒到观景台，再到社区客厅，莱顿古堡完成了可能是历史建筑最美好的一种转型。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 莱顿古堡一日游打卡路线攻略：从运河街巷到城堡之巅`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的专属向导，这份**一日游路线攻略**请收好。我们不走马观花，而是沉浸式体验莱顿的古今交融。**上午10点**，从莱顿中央火车站出发，沿着运河悠闲漫步15分钟，感受大学城的朝气。不要急着直奔古堡，先在山脚下的**莱顿市政厅**前广场看看那些华丽的文艺复兴立面，喝杯咖啡醒醒神。**11点左右**，开始我们的重头戏——寻找上古堡的小径（入口在Nieuwstraat和Burgsteeg交界处附近，有点隐蔽，跟着地图走）。花30-40分钟慢慢爬上土丘，在城堡庭院里转转，然后一定要登上环形城墙，此时光线正好，适合拍摄全城红屋顶的明媚景色。**下午1点**，下山后，到**Pieterskerk（彼得教堂）**附近，找一家地道的小餐馆吃午餐，推荐试试荷兰传统的“Uitsmijter”（开放三明治）。**饭后2点半**，可以参观附近的**莱顿大学最古老建筑**（Academiegebouw），或者根据兴趣选择一家博物馆，如国立民族学博物馆。**傍晚5点**，这是本攻略的黄金提示：**再次返回莱顿古堡**。夕阳西下时，游客稀少，整座城堡和莱顿老城会被染上金黄和粉红的色泽，运河开始倒映出温暖的光，钟声依次响起。这一刻，你会明白这座城堡存在的全部意义。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>贝壳石墙的触感与光泽</strong>：不要只是远观，请一定要用手掌轻轻贴在那斑驳的城墙表面。你会发现它不像普通石头那样冰凉光滑，而是带着一种温润的粗糙感。仔细看，无数细小的、已经化石化的贝壳密密麻麻地嵌在石料中，在斜阳照射下，这些贝壳碎片会闪烁着星星点点的、珍珠母贝般的光芒。这面墙本身就是一本关于荷兰地质历史的书——它源自古老的北海海底，经过地壳运动抬升，又被中世纪的人们开采、垒砌，如今在你的掌心之下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>环形城墙顶部的“全景影院”</strong>：当你绕行城墙顶部时，请放慢脚步，每隔几步就停下来看看。东北方，是<strong>圣彼得教堂</strong>高耸的塔楼，它是莱顿的城市天际线主宰；正南方，层层叠叠的<strong>经典荷兰山形墙红屋顶</strong>像温暖的波浪一样蔓延开去，其间点缀着绿色的树木和闪烁的运河支流；向西望去，如果天气晴朗，甚至能看到遥远的<strong>北海海岸线</strong>模糊的影子。这个无死角的环形观景台，本身就是一件最伟大的“建筑作品”，它框出了莱顿生生不息的动态画卷。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>古堡城门上的盾徽与门槛石</strong>：进入城堡庭院的那个低矮拱门，值得你低头细看。门楣上方可能已风化模糊，但仔细辨认或许能找到古老的石刻痕迹。更重要的是脚下的<strong>门槛石</strong>，数百年来被无数人的脚步磨得中间微微凹陷，光滑如镜。站在这块石头上，想象一下11世纪的士兵、16世纪的市民、19世纪的学生都曾和你踏在同一个位置，这种穿越时空的连接感会瞬间击中你。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>庭院中央的宁静与声响</strong>：走进城堡环抱的中央庭院，找张长椅或在草地边坐下。这里与墙外的城市喧嚣仿佛是两个世界。你听到的只有风声、鸟鸣，以及从城墙外遥远街道传来的、被过滤得模糊而温柔的市井之声——自行车的铃声、孩子的欢笑。这种极致的宁静与隐约的背景音交织在一起，创造出一种奇妙的、属于莱顿古堡独有的冥想氛围。抬头看，是圆形的天空被石墙规整地框住，云朵缓缓飘过。" }} />
            </div>
          </Section>

          <Section title={`5. 莱顿古堡自由行避坑指南与行前须知`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这份<strong>避坑指南</strong>能让你的旅程更顺畅。第一，<strong>时间与人流</strong>：古堡本身不收门票且庭院全天开放，这是优点也是“缺点”——它随时都可能有游客。想避开人流，最佳时间是<strong>工作日的清晨或傍晚</strong>，旅游团很少在这两个时间出现。周末下午通常人最多。第二，<strong>穿着与装备</strong>：务必穿一双<strong>舒适防滑的鞋子</strong>！上山的小径是鹅卵石和土路，有些坡度，下雨后会比较湿滑。城堡顶部风通常比下面大，即便是夏天，也建议带一件薄外套。第三，<strong>防盗与安全</strong>：莱顿整体治安很好，古堡区域也安全。但在上山的小径（有些路段较窄且僻静）和拥挤的城墙上，还是建议将背包背在前面，看管好随身物品。城堡城墙没有很高的护栏，带小朋友的游客一定要牵好孩子的手。最后一个小贴士：城堡没有厕所和商店，请在参观前在山下的市区解决好。按照这份指南准备，你就能轻松享受探索的乐趣了。" }} />
            </div>
          </Section>

          <Section title={`6. 莱顿古堡周边住宿与美食攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "想在莱顿住一晚，深度感受这座大学城入夜后的魅力？古堡周边步行10分钟范围内有很多选择。推荐住在<strong>运河边的精品酒店或B&B</strong>，开窗就能看到河水与古老的桥梁，晚上非常安静。如果想体验学生氛围，也可以选择大学附近的授权民宿。<strong>美食方面</strong>，下山后强烈推荐去<strong>Pieterskerkchoorsteeg</strong>（彼得教堂小巷）或<strong>Nieuwe Rijn</strong>运河边找餐厅。一定要尝尝莱顿的特色美食“<strong>Leidse kaas</strong>”（莱顿奶酪），这是一种加入茴香籽的奶酪，风味独特。午餐可以试试前面提到的“Uitsmijter”，或者在一家“eetcafé”（小餐吧）点份简单的煎饼。喝咖啡推荐去<strong>Koppie</strong>这样的本地咖啡馆，氛围轻松。晚餐后，别忘了再散散步到古堡山下，看它在夜色中被灯光微微照亮的样子，又是另一番神秘韵味。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开古堡，莱顿老城本身就是一个巨大的露天博物馆，步行即可探索。首推<strong>德法尔克风车博物馆（Molenmuseum De Valk）</strong>，这是一座建于18世纪的城内风车，步行约10分钟可达。你可以进入风车内部，了解荷兰风车的运作原理，并登上顶层，获得另一个视角的城市风景，与古堡的视野形成有趣的对比。另一个小众选择是<strong>莱顿美国 Pilgrim 父亲档案馆</strong>，距离古堡也很近。这里记录了清教徒前辈移民在前往美洲前在莱顿停留的重要历史，展馆虽小但内容独特，能让你了解到这座城市除了大学之外，另一段影响世界的历史篇章。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "莱顿古堡的灵魂，在于它那近乎哲学的“双重性”——它由人类双手艰难堆砌而起，为了防御与分隔，却最终成为了连接历史与当下、城市与自然、喧嚣与宁静最慷慨的纽带。它不再需要保护任何人，却以永恒的圆环，温柔地拥抱着每一个登上它的人，并赠与整个莱顿。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
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
              <a href="/attractions/gennep" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    亨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">亨讷普</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gennep</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kasteel-amerongen" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿梅龙根城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kasteel Amerongen</p>
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
