import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '蒙福特 Monforte｜探访葡萄牙边境的宁静废墟小镇，在山顶城堡与古罗马别墅间触摸时间断层 - 最佳欧洲景点',
  description: '开车驶近蒙福特的时候，你会先看到它——一座仿佛从金黄麦田和深绿橡树林里生长出来的小山丘，而山顶上，那些锯齿状的城墙和孤独的塔楼，像是被时间遗忘的石头王冠，沉默地刺向阿连特茹永远蔚蓝得有些过分的天空。空气里是干燥的、混合着野生迷迭香和尘土的气味，车窗外除了风声和偶尔掠过的鸟鸣，再无其他声响。那种第一眼',
}

export default function MonfortePortugalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '蒙福特', href: '/attractions/monforte-portugal' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`蒙福特・Monforte・葡萄牙・波塔莱格雷区（Portalegre District）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`开车驶近蒙福特的时候，你会先看到它——一座仿佛从金黄麦田和深绿橡树林里生长出来的小山丘，而山顶上，那些锯齿状的城墙和孤独的塔楼，像是被时间遗忘的石头王冠，沉默地刺向阿连特茹永远蔚蓝得有些过分的天空。空气里是干燥的、混合着野生迷迭香和尘土的气味，车窗外除了风声和偶尔掠过的鸟鸣，再无其他声响。那种第一眼的荒凉与壮美，会让你不自觉地把车速放慢，心里响起一个声音：就是这里了，一个被世界按下暂停键的地方。
停好车，沿着蜿蜒的碎石小径向上走。脚下是破碎的、被无数足迹磨得光滑的石子，阳光把影子拉得很长。当你终于穿过低矮的拱门，置身于城堡废墟的内部，感官会瞬间被一种巨大的“空”所充满。视觉上，是断壁残垣切割出的不规则蓝天，是墙壁缝隙里顽强探出头的野花那抹娇艳的紫色。听觉上，风在这里变得具体，它呼啸着穿过箭孔，在空荡的塔楼里打着旋，发出呜呜的吟唱，那是几百年来唯一不变的背景音。你用手触摸那些巨大的花岗岩块，石头是温暖的，带着白昼储存的热量，但缝隙里却是沁人的凉。
这里几乎没有游客。你可能遇到的，只有一位慢悠悠散步的本地老人，或者几只慵懒的猫咪。小镇本身蜷缩在山脚下，红瓦白墙的房屋簇拥着简朴的教堂，生活以一种近乎凝固的缓慢节奏进行着。咖啡馆里，老人们玩着永远不急不慢的纸牌游戏；面包店飘出的香气，在午后的热浪中显得格外真切。蒙福特最打动人心的，正是这种强烈的对比与和谐：山顶是宏大的、史诗性的荒废与寂寥，讲述着战争与权力；山下是细微的、生生不息的日常脉搏，延续着生活与传承。它不像那些被精心修复的博物馆式古镇，它坦诚地展露着时间的伤痕与平静，毫不修饰。
而当你驱车几分钟来到镇外的“蒙特达托雷”（Monte da Torre）罗马别墅遗址时，另一种时间层会扑面而来。这里没有恢弘的剧院或神庙，有的只是一个富裕庄园主的家：房间地基的划分清晰可辨，精美的几何图案马赛克在地面隐约浮现，复杂的供水管道系统展示了惊人的生活智慧。站在这里，你仿佛能听见一千多年前的午后，泉水流过庭院的声音，闻到厨房里橄榄油和香草的香气。城堡的“失序”与废墟的“壮美”，和别墅遗迹的“有序”与“生活感”，共同构成了蒙福特完整而立体的灵魂——它不仅是边境要塞，更曾是一个丰饶的、被精心经营过的家园。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "开车驶近蒙福特的时候，你会先看到它——一座仿佛从金黄麦田和深绿橡树林里生长出来的小山丘，而山顶上，那些锯齿状的城墙和孤独的塔楼，像是被时间遗忘的石头王冠，沉默地刺向阿连特茹永远蔚蓝得有些过分的天空。空气里是干燥的、混合着野生迷迭香和尘土的气味，车窗外除了风声和偶尔掠过的鸟鸣，再无其他声响。那种第一眼的荒凉与壮美，会让你不自觉地把车速放慢，心里响起一个声音：就是这里了，一个被世界按下暂停键的地方。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "停好车，沿着蜿蜒的碎石小径向上走。脚下是破碎的、被无数足迹磨得光滑的石子，阳光把影子拉得很长。当你终于穿过低矮的拱门，置身于城堡废墟的内部，感官会瞬间被一种巨大的“空”所充满。视觉上，是断壁残垣切割出的不规则蓝天，是墙壁缝隙里顽强探出头的野花那抹娇艳的紫色。听觉上，风在这里变得具体，它呼啸着穿过箭孔，在空荡的塔楼里打着旋，发出呜呜的吟唱，那是几百年来唯一不变的背景音。你用手触摸那些巨大的花岗岩块，石头是温暖的，带着白昼储存的热量，但缝隙里却是沁人的凉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里几乎没有游客。你可能遇到的，只有一位慢悠悠散步的本地老人，或者几只慵懒的猫咪。小镇本身蜷缩在山脚下，红瓦白墙的房屋簇拥着简朴的教堂，生活以一种近乎凝固的缓慢节奏进行着。咖啡馆里，老人们玩着永远不急不慢的纸牌游戏；面包店飘出的香气，在午后的热浪中显得格外真切。蒙福特最打动人心的，正是这种强烈的对比与和谐：山顶是宏大的、史诗性的荒废与寂寥，讲述着战争与权力；山下是细微的、生生不息的日常脉搏，延续着生活与传承。它不像那些被精心修复的博物馆式古镇，它坦诚地展露着时间的伤痕与平静，毫不修饰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而当你驱车几分钟来到镇外的“蒙特达托雷”（Monte da Torre）罗马别墅遗址时，另一种时间层会扑面而来。这里没有恢弘的剧院或神庙，有的只是一个富裕庄园主的家：房间地基的划分清晰可辨，精美的几何图案马赛克在地面隐约浮现，复杂的供水管道系统展示了惊人的生活智慧。站在这里，你仿佛能听见一千多年前的午后，泉水流过庭院的声音，闻到厨房里橄榄油和香草的香气。城堡的“失序”与废墟的“壮美”，和别墅遗迹的“有序”与“生活感”，共同构成了蒙福特完整而立体的灵魂——它不仅是边境要塞，更曾是一个丰饶的、被精心经营过的家园。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`蒙福特`} />
                <InfoRow label="英文名称" value={`Monforte`} />
                <InfoRow label="正式名称" value={`Monforte`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`波塔莱格雷区（Portalegre District）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座见证了从罗马庄园经济到中世纪边境防御，再到被现代文明悄然遗忘了的宁静小镇。`} />
                <InfoRow label="建筑特色" value={`山顶是粗粝沧桑的城堡军事废墟，山下是精致马赛克与完善供水系统并存的古罗马乡村别墅遗迹，形成跨越千年的建筑对话。`} />
                <InfoRow label="建筑风格" value={`融合了罗马时期的乡村实用主义与中世纪哥特-曼努埃尔风格的军事防御建筑。`} />
                <InfoRow label="文化价值" value={`如同一本摊开在阿连特茹平原上的立体历史书，直观呈现了伊比利亚半岛从罗马行省到葡萄牙王国边境的层叠文明。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡废墟及小镇公共区域：全天开放。镇外的古罗马别墅（Monte da Torre）遗迹：通常为日出至日落，无人看管，自由参观。建议最佳游览时间为白天光线充足时。小镇信息中心或有季节性的有限开放时间（例如夏季上午10点至下午1点，下午3点至6点），出行前最好通过当地旅游局网站确认。`} />
              <InfoRow label="门票价格" value={`完全免费。无论是漫步于山顶城堡的废墟中，还是探索镇外的罗马别墅遗迹，均无需支付任何门票费用。这是一处向所有时间旅人敞开的秘境。`} />
              <InfoRow label="地址" value={`Monforte, 7450-999 Portalegre, Portugal`} />
              <InfoRow label="交通方式" value={`最便捷的方式是自驾。从里斯本机场出发，沿A6高速公路向东行驶，在“Alcácer do Sal”或“Évora”附近转入A2/A6支线，再根据路标驶向波塔莱格雷区和蒙福特。全程约230公里，耗时约2小时45分钟。若乘坐公共交通则较为周折：先从里斯本乘坐火车或长途汽车到埃武拉（Évora，约1.5小时），再从埃武拉换乘班次稀疏的区域巴士前往蒙福特（班次可能一天仅1-2班，车程约1小时）。强烈建议租车前往，不仅能自由探索小镇，还能顺路游玩阿连特茹地区其他美丽村落。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "蒙福特的故事，得从比葡萄牙这个国家还要古老得多的时代说起。大约在公元一世纪到四世纪，罗马人统治着伊比利亚半岛这片他们称为“卢西塔尼亚”的土地。这里肥沃的平原和温和的气候，非常适合发展大型农业庄园。我们今天在镇外看到的“蒙特达托雷”遗址，就是这样一个典型的核心。想想看，一位罗马贵族或富裕的退伍老兵，在这里建起他的乡间别墅（villa），别墅不仅是住所，还是整个庄园的管理中心。奴隶和佃农们在广袤的土地上种植橄榄、葡萄和小麦，别墅里则铺着漂亮的马赛克，设有浴室、庭院和马厩。那些沉默的石头地基和残存的马赛克碎片，诉说着长达数百年的稳定、富足与罗马化的日常生活。泉水被巧妙地引入，生活污水被有序排出，这是一种基于秩序和工程技术的文明烙印。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马帝国衰落后，日耳曼部落和后来的摩尔人相继到来。山丘的战略价值开始凸显。摩尔人大概在8世纪或9世纪，首次在这座易于防守的山顶上修筑了防御工事，“蒙福特”这个名字，很可能就源于阿拉伯语中带有“坚固”之意的词汇。它成了一个前哨站，俯瞰并控制着周围的平原与通往巴达霍斯的重要路径。到了12世纪，基督教收复失地运动的浪潮推进至此。1166年，葡萄牙的第一位国王阿方索·恩里克斯的军队从摩尔人手中夺取了这座城堡。随后的几个世纪，它成为了葡萄牙新生王国东部边境防御体系中的一环，抵御着来自邻国卡斯蒂利亚可能的威胁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡在迪尼斯一世（13世纪末）和曼努埃尔一世（16世纪初）时期得到了重要的加固和扩建。我们现在看到的城堡主体遗迹，大多就带有那个时期的特征——曼努埃尔风格的窗户装饰依稀可辨，显示了即使在军事堡垒中，葡萄牙人对海洋和自然元素的浪漫雕琢也未完全缺席。可以想象，在中世纪鼎盛时期，这座城堡里驻扎着士兵，山下的小镇受到城墙的保护，教堂的钟声与城堡瞭望塔的号角声交织，一片边境社区的景象。小镇的繁荣也与城堡驻军和过往商旅的需求息息相关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史的车轮滚滚向前。随着葡萄牙国界在1580年后最终稳固，以及战争技术的变革（火炮使得这种中世纪城堡的防御价值大大降低），蒙福特城堡的军事意义迅速衰退。它不再是边境的剑与盾，逐渐沦为被人遗忘的遗迹。驻军撤走了，维护停止了，风雨和时光成了这里新的主人。石头开始松动、坍塌，野草和藤蔓占据了城墙。山下的罗马别墅，则更早地沉睡在了泥土之下，直到近代才被考古学家重新发现。蒙福特从历史的焦点，退居为阿连特茹腹地一个宁静的农业小镇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天的蒙福特，它的美正是源于这种“被遗忘”。没有大规模的重建，没有喧嚣的旅游开发。城堡的废墟以其最本真的状态存在，罗马别墅的遗迹安静地躺在田野边。它们是不加粉饰的历史证人，将罗马的秩序、中世纪的冲突、以及近代的宁静，层层叠叠地展现在每一位有心而来的访客面前。它不是一段被终结的历史，而是一个凝固了的时间剖面，邀请你用自己的脚步和想象，去串联起那些破碎的篇章。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天的时间来充分沉浸于蒙福特的时空魅力。最好的节奏是上午抵达，先征服山顶的城堡，在晨光与相对凉爽的气温中感受废墟的苍劲；中午下山，在小镇里享用一顿地道的阿连特茹午餐，体会当地的慢生活；下午再驱车前往不远处的罗马别墅遗迹，在斜阳柔和的光线下，细细辨认那些古老生活的细节。这样的安排顺应了光线的变化（上午顺光拍摄城堡外观最佳），也符合体力消耗的节奏（上午爬山，下午平地散步）。请务必穿一双非常舒适、适合走碎石路的鞋子，并带上充足的饮用水和防晒用品，因为整个环境中遮阴处很少。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇的餐馆午休时间可能很长（下午2点到晚上7点可能关门），计划好午餐时间，或者提前在咖啡馆买好简餐。参观罗马别墅遗址是户外的，没有任何服务设施，务必提前解决如厕问题。尊重遗址，不要试图撬动或带走任何石头、马赛克碎片。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从城堡山脚的碎石停车场出发，沿着清晰但崎岖的小径向上攀登，让身体在攀登中逐渐唤醒并适应这里古老的气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先抵达城堡的主城门废墟，停下来用手触摸那些冰冷而粗粝的花岗岩，想象士兵从此门进出巡逻的日常。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进城堡内部空旷的广场，找个阴凉处的断墙坐下，静静地听一会儿风在塔楼间穿梭回荡的独一无二的“废墟之声”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探索城堡各个角落和残存的塔楼，从不同的箭孔和缺口向外眺望，将阿连特茹无垠的平原、橡树林和红瓦小镇尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着另一条小路下山，缓缓走进山脚下的蒙福特小镇中心，在教堂前广场边的老咖啡馆点一杯浓咖啡，看当地老人不慌不忙地走过。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`就在小镇找一家家庭餐馆，享用一份用当地黑猪肉、阿连特茹面包和醇厚橄榄油制作的传统午餐，感受从历史回归人间的温暖。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午开车或步行（约20分钟）前往镇外的“蒙特达托雷”古罗马别墅遗址，沿着木板步道，仔细寻找地面那些色彩依然鲜丽的几何图案马赛克。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在罗马别墅遗址的庭院中心想象泉水流淌的样子，然后走到遗址边缘，回望远处山顶的城堡轮廓，完成一次跨越千年的目光连接。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡南侧外墙全景`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点前，从停车场稍远处的麦田边缘用广角镜头仰拍，能将城堡废墟的雄姿与完整的山形一同纳入画面，晨光会给石头镀上金色。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡主塔楼拱门框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`走进城堡内部，找到那个只剩拱门的结构，以拱门为画框，将对面的另一段残墙和小镇屋顶作为背景拍摄，极具纵深感和故事性。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`罗马别墅马赛克特写`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的斜射阳光最能凸显马赛克瓷砖的质感与色彩，蹲下来，放低机位，让阳光以低角度掠过地面，捕捉那些菱形和波浪纹的细节。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从罗马别墅回望城堡`}</h4>
                  <p className="text-sm text-gray-700">{`在别墅遗址靠近西侧的位置，用长焦镜头压缩空间，将远处山顶孤独的城堡塔楼与近处的罗马石基一同拍下，形成古今同框的震撼对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`小镇蜿蜒街道与城堡背景`}</h4>
                  <p className="text-sm text-gray-700">{`在下山后的小镇巷弄里，找一条向上延伸的石子路，将路作为引导线，尽头处捕捉城堡在山顶的剪影，生活与历史的结合瞬间定格。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`阿连特茹的阳光非常强烈且反差大，建议在RAW格式下拍摄，以便后期更好地恢复阴影和高光细节。拍摄当地居民时，务必先微笑并征得同意，这里的人们很友善但同样注重隐私。使用无人机前，请确认当地法规，并绝对避开可能有人居住的房屋上空。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`乡村石屋民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在小镇边缘一栋由古老农舍改造的石头房子里，房东老太太会为你准备自制的果酱和杏仁蛋糕，夜晚在院子里能看到漫天的繁星。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`埃武拉古城精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`如果追求更多舒适和餐饮选择，可以住在30分钟车程外的世界文化遗产城市埃武拉，白天来蒙福特探索，夜晚回到古城享受历史氛围与美食。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`阿连特茹庄园酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`在蒙福特周边的乡间，寻找一家由传统“蒙特”庄园改造的精品酒店，体验在无边泳池边眺望平原落日，并品尝庄园自产的葡萄酒和橄榄油。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`波塔莱格雷设计酒店`}</h4>
                  <p className="text-sm text-purple-800">{`开车约40分钟可到区首府波塔莱格雷，那里有将历史建筑与现代设计融合的酒店，是探索整个上阿连特茹地区的舒适大本营。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "蒙福特小镇本身的住宿选择极其有限且朴素，预订前一定要确认是否有空调（夏季至关重要）。如果夏季前往，强烈建议选择带游泳池的住宿，因为阿连特茹的白天非常炎热。住在周边更大的城镇（如埃武拉）会让餐饮和夜间活动丰富很多，但会失去清晨独占城堡废墟的绝佳机会。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开蒙福特的时候，你带走的可能不是一张张明信片般完美的照片，而是一种挥之不去的宁静感和对时间全新的感知维度。在这里，辉煌与衰落、喧嚣与沉寂、战争与生活，所有这些宏大的历史命题，都被简化为最朴素的物质存在：温暖的石头，破碎的陶片，野草在风中摇摆。它没有试图告诉你一个完整的故事，而是给了你一堆散落的词语，让你自己用心去串联、去想象。这种参与感，恰恰是深度旅行中最珍贵的部分。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个一切都追求快速、崭新、刺激的世界里，蒙福特像一位沉默的智者，提醒着我们另一种存在方式：缓慢的，残缺的，与自然共同呼吸的。它不值得你“打卡”，但值得你专程拜访，花上一整天，什么也不做，只是坐在废墟的阴影里，听风读史。对于每一位厌倦了人造景观和拥挤人潮的旅人来说，蒙福特是一片能让心灵真正沉静下来的净土。在这里，你触摸到的不仅是葡萄牙边境的石头，更是时间本身那粗糙而真实的肌理。这趟旅程，最终会成为一次对内心的朝圣。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/fortress-of-sagres" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨格里什要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Fortress of Sagres</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/belem-tower-lisbon" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝伦塔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Belém Tower</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/convent-of-christ-tomar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    托
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">托马尔骑士团修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Convent of Christ</p>
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
