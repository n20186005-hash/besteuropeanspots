import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿拉霍瓦 Arachova｜帕尔纳索斯山麓的悬崖小镇，在云端编织羊毛与神话 - 最佳欧洲景点',
  description: '车子在帕尔纳索斯山的盘山公路上绕了不知道多少个弯，正当你觉得眼前除了裸露的灰色岩石和零星的松树再无他物时，一个转弯，阿拉霍瓦就像是从童话里被倾倒出来一样，哗啦一下铺满了对面整片向阳的山坡。第一眼的感觉不是“看到”，而是“撞见”——撞见一片令人屏息的白色奇迹。那些房子并不是规规矩矩地排列着，而是你拉着...',
}

export default function ArachovaParnassusPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '希腊', href: '/destinations/greece' },
            { label: '阿拉霍瓦', href: '/attractions/arachova-parnassus' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿拉霍瓦・Arachova・希腊・阿拉霍瓦（隶属中希腊大区）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在帕尔纳索斯山的盘山公路上绕了不知道多少个弯，正当你觉得眼前除了裸露的灰色岩石和零星的松树再无他物时，一个转弯，阿拉霍瓦就像是从童话里被倾倒出来一样，哗啦一下铺满了对面整片向阳的山坡。第一眼的感觉不是“看到”，而是“撞见”——撞见一片令人屏息的白色奇迹。那些房子并不是规规矩矩地排列着，而是你拉着我、我拽着你，争先恐后地从悬崖边缘向上“生长”，屋顶压着邻居的窗台，蓝色的窗扉像一只只好奇的眼睛，打量着山谷里来的风。整个小镇散发出一种既坚韧又慵懒的奇妙气质。
停好车，双脚真正踏上那些被岁月打磨得光滑如鹅卵石的主街台阶时，所有的感官才被正式激活。空气是清冽的，带着松针和远处雪线的冷香，深深吸一口，肺腑都像被洗过。耳边是错综复杂的声音谱：某扇门后传来老式织布机有节奏的“咔哒”声；风掠过山谷，摇晃着无数人家阳台上的铜制风铃，发出一片细碎、空灵的叮当声，这是属于阿拉霍瓦的背景音；还有咖啡馆外椅子的挪动声、希腊语的谈笑声。最强烈的气味来自那些敞开门的羊毛制品商店，新织的厚毯子、蓬松的羊毛帽，散发出一种温暖的、略带羊膻味的原始气息，这气味如此浓厚，几乎成了可以触摸的实体，包裹着每一个路过的人。
这里的生活是垂直的。你不只是在平面上行走，更是在不断地攀登。顺着Z字形的阶梯往上，气喘吁吁地抵达小镇最高点的钟楼时，回望来路，会发现居民的生活轨迹就写在这些阶梯上。老太太提着菜篮，步伐稳健得让你羞愧；孩子们抱着足球，咚咚咚地从你身边跑过；穿着时髦滑雪服的年轻人，扛着雪板，正从山上的雪场归来，与穿着传统黑色服饰、坐在门口晒太阳的老爷爷形成奇妙的时空叠影。阿拉霍瓦最打动人的，正是这种毫不违和的混合——它是古老的、扎根于岩石和羊毛的；它也是时髦的、充满滑雪后的热红酒香和夜店的电子音乐的。它不为你停留，它自顾自地、热气腾腾地活着。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在帕尔纳索斯山的盘山公路上绕了不知道多少个弯，正当你觉得眼前除了裸露的灰色岩石和零星的松树再无他物时，一个转弯，阿拉霍瓦就像是从童话里被倾倒出来一样，哗啦一下铺满了对面整片向阳的山坡。第一眼的感觉不是“看到”，而是“撞见”——撞见一片令人屏息的白色奇迹。那些房子并不是规规矩矩地排列着，而是你拉着我、我拽着你，争先恐后地从悬崖边缘向上“生长”，屋顶压着邻居的窗台，蓝色的窗扉像一只只好奇的眼睛，打量着山谷里来的风。整个小镇散发出一种既坚韧又慵懒的奇妙气质。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`停好车，双脚真正踏上那些被岁月打磨得光滑如鹅卵石的主街台阶时，所有的感官才被正式激活。空气是清冽的，带着松针和远处雪线的冷香，深深吸一口，肺腑都像被洗过。耳边是错综复杂的声音谱：某扇门后传来老式织布机有节奏的“咔哒”声；风掠过山谷，摇晃着无数人家阳台上的铜制风铃，发出一片细碎、空灵的叮当声，这是属于阿拉霍瓦的背景音；还有咖啡馆外椅子的挪动声、希腊语的谈笑声。最强烈的气味来自那些敞开门的羊毛制品商店，新织的厚毯子、蓬松的羊毛帽，散发出一种温暖的、略带羊膻味的原始气息，这气味如此浓厚，几乎成了可以触摸的实体，包裹着每一个路过的人。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里的生活是垂直的。你不只是在平面上行走，更是在不断地攀登。顺着Z字形的阶梯往上，气喘吁吁地抵达小镇最高点的钟楼时，回望来路，会发现居民的生活轨迹就写在这些阶梯上。老太太提着菜篮，步伐稳健得让你羞愧；孩子们抱着足球，咚咚咚地从你身边跑过；穿着时髦滑雪服的年轻人，扛着雪板，正从山上的雪场归来，与穿着传统黑色服饰、坐在门口晒太阳的老爷爷形成奇妙的时空叠影。阿拉霍瓦最打动人的，正是这种毫不违和的混合——它是古老的、扎根于岩石和羊毛的；它也是时髦的、充满滑雪后的热红酒香和夜店的电子音乐的。它不为你停留，它自顾自地、热气腾腾地活着。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿拉霍瓦`} />
                <InfoRow label="英文名称" value={`Arachova`} />
                <InfoRow label="正式名称" value={`Arachova`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`阿拉霍瓦（隶属中希腊大区）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座在帕尔纳索斯山陡坡上顽强生长了数百年的“羊毛重镇”，连接着古希腊神谕圣地德尔斐与现代世界的隐秘门户。`} />
                <InfoRow label="建筑特色" value={`白色的房屋像梯田一样层层叠叠，紧紧攀附在山崖之上，狭窄的石头阶梯和拱廊街道构成了立体的迷宫。`} />
                <InfoRow label="建筑风格" value={`典型的希腊山地建筑风格，混合了奥斯曼帝国时期的民间建筑元素与本地功能性设计。`} />
                <InfoRow label="文化价值" value={`保存了希腊大陆腹地最鲜活的高山生活传统、羊毛编织技艺和浓郁的冬季节庆文化。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇公共区域全天开放。各类商店、咖啡馆和餐厅的营业时间较为灵活，通常在上午10点至晚上11点之间，冬季旺季可能延长。镇上最主要的景点——圣乔治亚教堂（Church of Agios Georgios）通常从清晨开放至日落后不久。小型民俗博物馆的开放时间不定，建议在旅游信息中心查询或向当地人询问。滑雪季（通常为12月至次年4月）期间，整个小镇活力充沛，几乎所有服务设施都会开放。`} />
              <InfoRow label="门票价格" value={`进入阿拉霍瓦小镇本身无需门票。参观圣乔治亚教堂免费。如果存在小型地方民俗博物馆，门票约2-3欧元。主要的消费在于餐饮、购物及冬季的滑雪活动（滑雪缆车票需另行购买）。`} />
              <InfoRow label="地址" value={`Arachova 320 04, Greece`} />
              <InfoRow label="交通方式" value={`最近的国际机场是雅典埃莱夫塞里奥斯·韦尼泽洛斯国际机场（ATH）。从雅典出发最便捷的方式是自驾，沿E75高速公路向北，转入48号国道，朝着阿拉霍瓦/德尔斐方向行驶，全程约170公里，耗时约2小时，沿途可欣赏壮丽的山区和海滨景色。公共交通方面，可从雅典Liossion长途汽车站乘坐前往德尔斐的KTEL巴士，告诉司机在阿拉霍瓦下车，班次每天约有4-6班，车程约2.5-3小时。小镇内部完全步行，鹅卵石街道陡峭，请穿舒适的鞋子。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解阿拉霍瓦，你得先忘记爱琴海的蓝白浪漫，把目光投向希腊中部这些嶙峋、坚硬的山脉。它的故事，和它脚下这片名叫“帕尔纳索斯”的神圣土地紧密相连。在古代，这片区域是供奉阿波罗和缪斯女神的圣地，德尔斐的神谕声名远播。而阿拉霍瓦所在的险峻山坡，或许正是朝圣者们漫长旅途中的一个歇脚点，或是牧羊人躲避风雪的庇护所。不过，关于它最早的清晰记载，要等到拜占庭帝国晚期。它的名字“Arachova”很可能来源于斯拉夫语词汇“orah”，意为“核桃”，暗示着这片土地曾经的物产，也诉说着历史上斯拉夫族群在此地的迁徙与融合。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正塑造了阿拉霍瓦筋骨与灵魂的，是奥斯曼土耳其帝国统治时期。在漫长的数百年里，希腊山区的居民往往依靠险要地势来保持相对的自治与文化独立性。阿拉霍瓦易守难攻的地理位置成全了它。但更重要的是，这里的居民找到了生存的“黄金”——羊毛。帕尔纳索斯山坡丰茂的草场养育了优质的羊群，阿拉霍瓦人发展出了精湛的羊毛纺织、染色和编织技艺。他们织造的厚实毯子、叫“flokati”的蓬松地毯，以及著名的“阿拉霍瓦编织袋”（一种色彩鲜艳、图案几何的羊毛手提袋），不仅满足了自身御寒需求，更成为了重要的贸易商品。小镇逐渐富庶起来，那些我们今天看到的、坚固而精美的石屋，很多都建于这个时期。羊毛，成了流淌在阿拉霍瓦血脉里的经济与文化密码。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`十九世纪希腊独立战争的烽火，也在这座山城留下了英勇的刻痕。1826年，一场决定性的战役就在阿拉霍瓦附近打响。由希腊独立英雄们率领的军队，在此成功阻击了奥斯曼帝国的一支精锐部队，这场胜利极大地鼓舞了士气。传说中，战斗异常惨烈，甚至影响了小镇的圣乔治亚教堂的建造——为了纪念逝者，教堂的钟楼被特意建得格外高大醒目，成为小镇直至今日的地标。这场战役让阿拉霍瓦不仅是一个工艺小镇，更成为了一个承载着民族自由记忆的符号。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`进入二十世纪，尤其是后半叶，阿拉霍瓦的命运迎来了第二次华丽转身。人们发现了它作为冬季运动天堂的潜力。帕尔纳索斯山拥有希腊最大、设备最完善的滑雪场之一。几乎是一夜之间，这座宁静的山城变成了雅典和周边国家游客蜂拥而至的滑雪度假胜地。新建的酒店、时尚的餐厅、喧闹的酒吧依附着老城区生长开来。你可能会担心这种浪潮会吞噬传统，但有趣的是，阿拉霍瓦似乎找到了平衡之道。白天，人们上山滑雪；夜晚，他们依然聚集在传统的“塔维纳”（小酒馆）里，就着炭火烤羊肉和松香味希腊葡萄酒，听着古老的音乐。羊毛商店的生意依然兴隆，因为游客们发现，没有比一条阿拉霍瓦产的羊毛披肩更能抵御山顶寒风的物件了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，今天的阿拉霍瓦呈现出一幅迷人的双重画卷。它既是“悬崖上的迈锡尼”，保留着古老的建筑肌理、手工技艺和节庆（比如著名的“圣乔治节”前后，小镇会举办盛大的狂欢）；它也是“希腊的圣莫里茨”，充满着活力的度假氛围。它没有被博物馆化，它聪明地利用了自己的所有历史层次——神话的、历史的、工艺的、自然的——将它们编织成了一条足够坚韧也足够美丽的当代地毯，供每一个到来的人在上面留下自己的足迹。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排完整的一天来沉浸式体验阿拉霍瓦。最好前一晚抵达并住下，这样你才能捕捉到它清晨的宁静与夜晚的璀璨。早晨九点左右开始游览，这时阳光正好洒满小镇，店铺陆续开门，游客尚未大批涌入。整个游览以步行为主，是一场持续的“爬升”之旅，请务必保存体力。路线设计为从主入口由低向高，逐步探索，最终抵达最高点钟楼俯瞰全景，然后悠闲下山，深入小巷和商店。傍晚时分，留给一场美味的晚餐和随性的漫步。这样安排能让你感受小镇从苏醒到活跃的全过程，并避开午后可能出现的拥挤人潮。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇街道极陡且多为光滑的鹅卵石，请务必穿防滑性能极好的运动鞋或徒步鞋，高跟鞋在这里是“灾难级”选择。
冬季（尤其是周末和节假日）这里异常火爆，住宿和热门餐厅务必提前数周甚至数月预订，否则很可能一房难求。
警惕过于热情的“导购”，进入羊毛商店欣赏即可，价格可以适当议价，但大多数商店明码标价、品质可靠，购买时认准“Made in Arachova”的标签。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主停车场出发，沿着那条最宽阔、店铺林立的“主街”（25is Martiou）慢慢向上走，让眼睛适应两旁琳琅满目的羊毛制品和陶器店铺。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在第一个主要广场稍作停留，买一杯滚烫的希腊咖啡，观察当地人如何开始他们的一天，并抬头寻找那座矗立在高处的白色钟楼——它将是你的终极目标。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开主商业街，拐入左侧一条更陡峭、更古老的石头阶梯小巷，感受居民区的宁静，偶尔能瞥见种满天竺葵的庭院和古老的石雕门楣。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一鼓作气攀登数百级台阶，抵达小镇的制高点——圣乔治亚教堂和那座标志性的独立钟楼，绕着钟楼走一圈，将帕尔纳索斯山谷和层层叠叠的红色屋顶全景尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从钟楼另一侧较缓的坡道下山，刻意迷路般地穿行在那些宽度只容一人通过、挂着晾衣绳的隐秘小巷，感受小镇的生活气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一家口碑好的传统“塔维纳”享用午餐，必须点一份慢火烤制的羊肉“arni sto fourno”或野猪肉，配上本地葡萄酒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后时光留给一家心仪的羊毛作坊或商店，不仅可以购物，更可以观看匠人如何操作古老的织机，了解图案背后的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时值冬季，可以乘坐短途出租车前往帕尔纳索斯滑雪场，体验几小时的高山滑雪或仅仅在雪场边的咖啡馆欣赏雪山夕阳；若非冬季，则可以在小镇边缘找一个视野开阔的咖啡馆，静静等待黄昏为白色的房屋披上金色和粉色的光晕。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`钟楼脚下仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点的侧光最能勾勒出白色钟楼和教堂建筑的立体感与石材质感，以一部分红色屋顶作为前景，构图饱满有力。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主街中段回望山谷`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前，站在某段阶梯的拐角，使用长焦镜头压缩空间，捕捉蜿蜒的街道、行人与远处开阔山谷形成的纵深感极强的画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`悬崖边民居全景`}</h4>
                  <p className="text-sm text-gray-700">{`无需无人机，从通往滑雪场的公路上的几个指定观景台拍摄，最佳光线是日出后一小时，晨雾未完全散去，阳光刚刚照亮小镇，能拍出仙境般的悬浮感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`羊毛作坊内部`}</h4>
                  <p className="text-sm text-gray-700">{`征得店主同意后，在室内自然光窗口拍摄匠人编织的瞬间，重点捕捉飞梭、双手的细节以及羊毛细腻的纹理，故事感十足。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`夜晚亮灯时分`}</h4>
                  <p className="text-sm text-gray-700">{`日落后蓝调时刻，在小镇半山腰寻找一个角度，拍摄暖黄色灯光从千家万户窗口溢出，与深蓝色天空和星点灯光形成冷暖对比，氛围感绝佳。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重当地居民隐私，拍摄居民、尤其是老人和儿童前，请务必用微笑或简单问候征求同意，希腊人通常很友好。`}</li>
                <li>• {`使用三脚架拍摄夜景时，注意不要阻塞本已狭窄的通道，尽量选择人少的角落。教堂内部是否允许拍摄需现场确认，通常可以但不允许使用闪光灯。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`性价比之选`}</h4>
                  <p className="text-sm text-blue-800">{`主街旁由家族经营的传统石屋客栈，房间不大但一尘不染，带有小小的阳台，老板会热情地为你推荐最地道的餐馆并送上家酿的柠檬酒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`位于小镇中上层、由百年羊毛商人宅邸改建的精品酒店，完整保留了原始的石头墙壁、木梁天花板和壁炉，装饰着复古的编织挂毯，仿佛睡在历史里。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在小镇边缘更高处的现代设计酒店，拥有直面山谷的无边泳池和全景落地窗，将传统的山居元素与极简奢华完美结合，适合蜜月或寻求宁静的旅人。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`冬季活力之选`}</h4>
                  <p className="text-sm text-purple-800">{`滑雪场附近方便快捷的公寓式酒店，配备小厨房和暖气，出门即可步行至缆车站，适合以滑雪为主要目的的年轻人和家庭。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`阿拉霍瓦的住宿普遍价格不菲，尤其是在滑雪季，但提前预订总能找到性价比相对较高的。选择住在小镇中心固然方便，但需要忍受夜晚（特别是周末）酒吧传来的音乐声；选择稍远一点的住处则更安静，但意味着每天要多走一段陡坡。无论住哪里，隔音和保暖（冬季）是挑选时需要重点关注的因素。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开阿拉霍瓦好几天后，手指拂过从那里带回来的羊毛披肩，粗糙而温暖的触感瞬间又把我拉回了那些陡峭的阶梯和清冽的空气里。这个地方给予我的，远不止一张明信片般的风景照。它给予的是一种关于“坚韧生活”的具象化体验。你看，他们选择了最艰苦的悬崖，却建起了最美丽的家园；他们利用最原始的羊毛，却编织出了最具生命力的文化与经济网络。在阿拉霍瓦，你找不到那种被精心供奉起来的、仅供观赏的“传统”。它的传统是活着的，在老婆婆织布的梭子上，在炭火烤肉的滋滋声里，在年轻人踩着滑雪板冲下山的呼啸中。这种传统不是负担，而是他们面对现代世界时，最自信的底色和创意的源泉。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，为什么要来阿拉霍瓦？或许不是为了寻找希腊的典型阳光海滩，而是为了见证另一种希腊——一种山地的、内向的、却充满强悍生命力的希腊。它像一个寓言，告诉我们：真正的魅力，往往诞生于约束与挑战之中。在垂直的极限空间里，人们反而创造出了水平方向难以企及的社区密度与温暖。对于厌倦了扁平化旅行体验的深度游者来说，阿拉霍瓦就是一剂强心针。它让你用酸痛的小腿肌肉记住道路，用被羊毛包裹的体温记住温暖，用钟楼俯瞰的眩晕记住高度。它不轻松，但它真实、浓郁、层次丰富。它会让你觉得，旅行不仅是去看一个地方，更是去学习一种在陡坡上也能舞蹈的生活智慧。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/rhodes-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    罗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">罗德岛骑士街</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rhodes Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/veria" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    韦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">韦里亚古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Veria</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/xanthi-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克桑西古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Xanthi Old Town</p>
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
