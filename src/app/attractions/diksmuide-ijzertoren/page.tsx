import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '迪克斯迈德 Diksmuide｜爬上和平之塔，触摸一战战壕的伤疤与佛兰德平原的宁静 - 最佳欧洲景点',
  description: '车子驶离布鲁塞尔喧嚣的高速路，窗外的风景逐渐被一片无垠的绿色平原取代。佛兰德地区的天空总是压得很低，大朵大朵的云缓慢移动，投下的光影让田野、运河和零星的红砖农舍像在呼吸。当你第一眼看到迪克斯迈德时，它安静得几乎不像一个“景点”。运河静静穿城而过，鹅卵石广场上，当地人正骑着自行车叮铃铃经过，空气中飘着...',
}

export default function DiksmuideIjzertorenPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '迪克斯迈德（伊泽尔塔与一战弗拉芒平原重镇）', href: '/attractions/diksmuide-ijzertoren' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`迪克斯迈德（伊泽尔塔与一战弗拉芒平原重镇）・Diksmuide・比利时・迪克斯迈德，西佛兰德省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶离布鲁塞尔喧嚣的高速路，窗外的风景逐渐被一片无垠的绿色平原取代。佛兰德地区的天空总是压得很低，大朵大朵的云缓慢移动，投下的光影让田野、运河和零星的红砖农舍像在呼吸。当你第一眼看到迪克斯迈德时，它安静得几乎不像一个“景点”。运河静静穿城而过，鹅卵石广场上，当地人正骑着自行车叮铃铃经过，空气中飘着刚出炉的华夫饼的甜香和咖啡味。那种感觉，就像闯入了一个时间流速不同的地方，平和，甚至有些慵懒。
然而，地平线上那座深灰色的、宛如巨人手指般直指天空的塔楼——伊泽尔塔，会立刻抓住你的视线。它如此突兀，又如此坚定地矗立在平坦的地平线上。走近它，那种宁静感开始微妙地变化。风从平原上毫无阻挡地吹来，带着泥土和青草的气息，但你的耳朵似乎又能捕捉到另一种声音，一种来自地底深处的、历史的低语。在这里，生活的烟火气与沉重的记忆是交织在一起的。你会在面包店门口看到纪念第一次世界大战的陶瓷罂粟花，孩子们在曾经是战场边缘的草地上踢球。
最打动人心的，正是这种强烈的反差与共生。迪克斯迈德没有试图掩盖伤疤，而是把它变成了身体的一部分。你可以坐在运河边的长椅上，看天鹅悠游，同时知道一百多年前，这条运河的水曾被鲜血染红。这种体验不是惊心动魄的，而是一种缓慢的、沉浸式的渗透。它让你思考的不是战争的宏大叙事，而是具体的人，在具体的泥土里，经历的具体的恐惧与希望。这里的核心魅力，是一种带着痛感的宁静，一种在彻底的毁灭后，生活依然顽强绽放的证明。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子驶离布鲁塞尔喧嚣的高速路，窗外的风景逐渐被一片无垠的绿色平原取代。佛兰德地区的天空总是压得很低，大朵大朵的云缓慢移动，投下的光影让田野、运河和零星的红砖农舍像在呼吸。当你第一眼看到迪克斯迈德时，它安静得几乎不像一个“景点”。运河静静穿城而过，鹅卵石广场上，当地人正骑着自行车叮铃铃经过，空气中飘着刚出炉的华夫饼的甜香和咖啡味。那种感觉，就像闯入了一个时间流速不同的地方，平和，甚至有些慵懒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，地平线上那座深灰色的、宛如巨人手指般直指天空的塔楼——伊泽尔塔，会立刻抓住你的视线。它如此突兀，又如此坚定地矗立在平坦的地平线上。走近它，那种宁静感开始微妙地变化。风从平原上毫无阻挡地吹来，带着泥土和青草的气息，但你的耳朵似乎又能捕捉到另一种声音，一种来自地底深处的、历史的低语。在这里，生活的烟火气与沉重的记忆是交织在一起的。你会在面包店门口看到纪念第一次世界大战的陶瓷罂粟花，孩子们在曾经是战场边缘的草地上踢球。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，正是这种强烈的反差与共生。迪克斯迈德没有试图掩盖伤疤，而是把它变成了身体的一部分。你可以坐在运河边的长椅上，看天鹅悠游，同时知道一百多年前，这条运河的水曾被鲜血染红。这种体验不是惊心动魄的，而是一种缓慢的、沉浸式的渗透。它让你思考的不是战争的宏大叙事，而是具体的人，在具体的泥土里，经历的具体的恐惧与希望。这里的核心魅力，是一种带着痛感的宁静，一种在彻底的毁灭后，生活依然顽强绽放的证明。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`迪克斯迈德（伊泽尔塔与一战弗拉芒平原重镇）`} />
                <InfoRow label="英文名称" value={`Diksmuide`} />
                <InfoRow label="正式名称" value={`Diksmuide`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`迪克斯迈德，西佛兰德省`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`第一次世界大战伊珀尔战役（伊普尔战役）的关键前沿阵地，见证了佛兰德平原上最血腥的堑壕战，也是比利时弗拉芒人身份与和平主义运动的重要象征地。`} />
                <InfoRow label="建筑特色" value={`高达84米的伊泽尔塔，是一座用深色砖石砌成的巨大方塔，形似中世纪防御塔楼，但其顶部的十字架与巨大的“AVV-VVK”（“Alles Voor Vlaanderen – Vlaanderen Voor Kristus”，意为“一切为佛兰德，佛兰德为基督”）标语，赋予了它独一无二的现代纪念性。`} />
                <InfoRow label="建筑风格" value={`新哥特式与20世纪初纪念性建筑风格的融合，庄重、简洁而极具视觉冲击力。`} />
                <InfoRow label="文化价值" value={`它超越了单纯的战争纪念馆，是一座“和平之塔”，承载着弗拉芒地区复杂的战争记忆、身份诉求以及对“不再战争”的永恒祈求。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`伊泽尔塔与博物馆开放时间：每年4月1日至11月11日，每日上午9点至下午6点；11月12日至次年3月31日，每日上午10点至下午5点，周一闭馆（法定节假日除外）。战壕遗址（Dodengang）全年开放，但游客中心冬季开放时间缩短。请注意，11月11日停战纪念日前后会有特殊纪念活动，部分区域可能限流。`} />
              <InfoRow label="门票价格" value={`伊泽尔塔联票（含塔楼、博物馆及电影）：成人14欧元，65岁以上老人/学生12欧元，7-18岁青少年8欧元，7岁以下儿童免费。仅参观战壕遗址（Dodengang）门票为6欧元。建议提前在线购票以避免排队，网站时常有家庭票优惠。`} />
              <InfoRow label="地址" value={`伊泽尔塔地址：IJzerdijk 49， 8600 Diksmuide， Belgium`} />
              <InfoRow label="交通方式" value={`从布鲁塞尔国际机场出发，最便捷的方式是火车。在机场火车站乘坐IC列车前往根特，在根特换乘前往迪克斯迈德的当地列车，全程约2小时。从迪克斯迈德火车站步行至镇中心约15分钟，至伊泽尔塔约需30分钟。若自驾，从布鲁塞尔沿E40高速公路向西，在迪克斯迈德出口驶出，镇外有充足的免费停车场。小镇内部最适合步行或租用自行车探索，火车站附近即有租车点。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从1914年秋天讲起。那时的迪克斯迈德，只是一个拥有美丽哥特式市政厅和圣尼古拉斯教堂的繁荣市集小镇，以黄油和奶酪闻名。战争的铁蹄毫无预兆地踏碎了这片宁静。德国军队如潮水般涌向英吉利海峡港口，比利时军队在阿尔贝一世国王的指挥下，做出了一个悲壮的决定：打开伊泽尔河的水闸，让海水淹没这片低洼的平原，以洪水构筑最后防线。迪克斯迈德，正好位于这道防线的咽喉。顷刻间，肥沃的农田化为一片汪洋泽国，小镇变成了洪水中一座孤岛般的堡垒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`接下来的四年，这里成了人间地狱。交战双方在齐腰深的冰冷泥浆中对峙，战壕线最近处仅相隔几十米。所谓的“战壕”，不过是泥泞中的一段坑道，里面挤满了冻得瑟瑟发抖、满身泥泞和虱子的士兵。炮弹日夜不息地落下，将大地犁了一遍又一遍，没有任何生命能在“无人区”存活。今天你参观的“Dodengang”（死亡战壕），就是当年比利时军队守卫运河防线的最前沿，也是死亡率最高的地段之一。想象一下，年轻士兵们蜷缩在这里，听着对面敌人的呼吸，等待下一次不知为何而发的冲锋命令。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战争结束时，迪克斯迈德几乎从地图上被抹去，没有一栋建筑完好。战后，在重建家园的瓦砾中，一种复杂的情愫在佛兰德士兵心中滋生。他们为比利时而战，却在主要由法语军官指挥的军队中，因语言和文化差异常遭轻视。阵亡的佛兰德士兵的墓碑上，只被允许刻写法语。这种不公催生了“前线运动”，萌发了最初的弗拉芒自治意识。为了纪念阵亡同胞并彰显其诉求，1920年，第一座伊泽尔塔在战场的废墟上拔地而起，它完全由弗拉芒民众捐款、弗拉芒工人用战火中回收的砖石建造而成。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，和平的象征也逃不过纷争。这座塔因其政治象征意义，在二战期间被占领军怀疑为抵抗运动据点，并于1946年被不明身份者炸毁。但这并没有让记忆熄灭。1950年代，一座更高、更坚固的新塔在原址旁重建。今天你攀登的，就是这座“新”塔。它不再仅仅是一个民族主义的宣言，其内涵已演变为对所有战争受难者的哀悼，以及对和平的强烈祈求。塔内博物馆的结束语，是四种语言写就的“不再战争”。从血腥的战场，到身份诉求的纪念碑，再到普世的和平灯塔，伊泽尔塔的故事，本身就是一部浓缩的、痛苦的欧洲现代史。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你将整个游览安排为完整的一天，从布鲁塞尔或布鲁日一早出发，争取在上午十点前抵达。这样的安排能让你避开午后可能到来的旅行团，获得更宁静的体验。整体节奏应是“先抑后扬”：先从最具冲击力的伊泽尔塔开始，沉浸于那段沉重的历史；然后外扩到真实的战壕遗址，感受战场的地理环境；最后回到重建后的小镇中心，让鲜活的生活气息抚平心绪，完成一次从历史伤痛到现实生命力的完整情感循环。全程步行加上自行车（用于前往稍远的战壕）是最佳方式，总耗时约6-8小时。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿着绝对舒适耐脏的鞋，战壕遗址地面可能潮湿泥泞，且需要弯腰行走。小镇周一许多商店和餐厅可能休息，规划行程时请避开。在参观所有纪念场所时，请保持低声交谈和庄重的态度，这是对逝者最基本的尊重。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先直奔那矗立在平原上的巨人伊泽尔塔，乘电梯直抵84米高的观景台，让佛兰德平原那棋盘般整齐的田野与蜿蜒的伊泽尔河毫无保留地铺展在你脚下。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在观景台静静环视后，顺着螺旋步道逐层而下，沉浸在那座令人震撼的垂直博物馆里，读一封士兵的家书，看一件沾满泥浆的军大衣，让数字和影像变得具体。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从塔中走出，租一辆自行车，沿着平坦的伊泽尔河堤骑行约3公里，前往那片保存完好的“死亡战壕”遗址，弯腰走进那些潮湿阴冷的混凝土巷道。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在战壕的观测口，望向仅仅数十米外当年的敌军阵地，想象一下百年前那个泥泞、恐惧和死亡如此具体的世界。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`骑车返回小镇，把车还掉，然后让自己迷失在迪克斯迈德重建后的美丽广场和街道中，看看那些用战后砖石精心复原的佛兰德文艺复兴风格山墙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在Grote Markt（大市场广场）找一家露天咖啡馆坐下，点一杯本地的啤酒，观察广场上市政厅钟楼在下午阳光下的影子缓慢移动。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进圣尼古拉教堂，触摸那些在战后精心拼接修复的立柱，抬头看彩绘玻璃窗如何将和平的光影投射在石地上。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落时分，慢慢踱步到运河边，看着古老的石桥、水中的倒影和归家的水鸟，让这一天的沉重与宁静在此刻达成最终的和解。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`伊泽尔塔观景台全景`}</h4>
                  <p className="text-sm text-gray-700">{`登上塔顶，用广角镜头将前方蜿蜒的伊泽尔河、棋盘状的田野与后方小镇的红屋顶一同纳入画框，阴郁的天气更能烘托历史感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`死亡战壕的视角对比`}</h4>
                  <p className="text-sm text-gray-700">{`蹲在战壕的射击口后，以前景冰冷的混凝土和铁丝网为框，对准远处如今一片宁静翠绿的田野，形成战争与和平、禁锢与自由的强烈视觉对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣尼古拉教堂内部光影`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点的阳光会透过西侧的彩绘玻璃窗射入，找到光束洒在古老石柱和长椅上的位置，等待一位当地祈祷者安静入画，捕捉光与影、人与信仰的静谧时刻。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`运河与塔楼倒影`}</h4>
                  <p className="text-sm text-gray-700">{`从小镇中心往东，走到跨越运河的某座小桥下，在无风的清晨或黄昏，可以拍摄伊泽尔塔雄伟的身影完整倒映在平静运河中的对称画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`市政厅广场的生活气`}</h4>
                  <p className="text-sm text-gray-700">{`采用长焦镜头，从广场角落捕捉市政厅哥特式立面作为背景，前景是咖啡馆闲聊的老人、骑自行车穿梭的居民或周末热闹的集市，展现历史舞台上的当下生活。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在战壕遗址和和平纪念馆内部，请严格遵守禁止拍照的标志（如有），拍摄外部场景时也请心怀敬意，避免轻浮的摆拍。佛兰德平原天气瞬息万变，乌云压境的天空往往比纯粹的蓝天更能拍出符合此地气质的史诗感照片。记得带上镜头布，运河边的风可能卷起细小沙尘。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸历史之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在由一战时期护士站改造的小型精品酒店，房间保留了原始的砖墙和木梁，窗外正对着伊泽尔塔，夜晚塔身的灯光仿佛在对你讲述往事。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`运河边的宁静`}</h4>
                  <p className="text-sm text-green-800">{`选择一栋位于镇中心运河畔的17世纪老宅民宿，女主人会为你准备丰盛的佛兰德式早餐，在挂着蕾丝窗帘的房间里，你能听到运河水轻柔的流动声。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`田园风光体验`}</h4>
                  <p className="text-sm text-yellow-800">{`住在小镇外围一家真正的农场客栈，早晨被奶牛的低哞唤醒，品尝自家产的奶酪和鸡蛋，晚上在无光污染的夜空下能看到璀璨银河，感受战争伤痕之外这片土地的生命力。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`实用便捷之选`}</h4>
                  <p className="text-sm text-purple-800">{`火车站附近由家族经营的现代旅馆，房间干净明亮，提供免费的自行车租赁，主人对当地历史了如指掌，能给你最地道的游览路线建议。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇夜间非常安静，治安极佳，可以放心漫步。如果计划在11月11日停战纪念日前后到访，务必提前至少三个月预订住宿，这是当地最重要的纪念日，房间会非常紧张。夏季旺季时，选择农场客栈能让你获得更开阔、宁静的空间。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开迪克斯迈德许久，那个画面依然清晰：一边是孩子们在青翠的足球场上奔跑欢笑，另一边是沉默的灰色高塔与深陷地下的冰冷战壕。这里没有提供简单的答案，没有英雄主义的赞歌，它只是将两种极致的现实并置在你面前——人类制造毁灭的可怕能力，与生命追求幸福、重建家园的顽强本能。这种并置，比任何说教都更有力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求速成体验的时代，迪克斯迈德要求你慢下来，去感受泥土的潮湿，去读懂砖石上的弹痕，去想象风中的低语。它不仅仅是一个关于“过去”的地方，更是一面映照“现在”与“未来”的镜子。当你站在和平之塔上，眺望这片曾经被血与火浸透，如今却孕育着无限生机的平原时，你会明白，真正的深度旅行，是去触碰一个地方的记忆神经，是去理解它的痛与梦。对于任何想了解欧洲如何从废墟中站起，和平为何如此珍贵的人来说，迪克斯迈德，这个佛兰德平原上的小镇，都是一个无法绕过、且必将触动你灵魂的必访之地。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/huy" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    胡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">胡伊古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Huy</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/arlon-roman-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔隆古罗马遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Arlon Roman Ruins</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/notre-dame-de-namur-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    那
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">那慕尔圣母大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Notre-Dame de Namur Cathedral</p>
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
