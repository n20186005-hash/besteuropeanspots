import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃希特纳赫修道院 Abbey of Echternach｜聆听千年手稿的低语与跳跃的朝圣之舞 - 最佳欧洲景点',
  description: '如果你从卢森堡市那座满是玻璃大厦的现代河谷过来，一脚踏入埃希特纳赫的那一刻，时间仿佛被拧慢了发条。空气立刻变得不同，混着绍尔河带来的湿润水汽，还有老房子石墙缝隙里苔藓的淡淡土腥味。小镇安静得能听到自己的脚步声在鹅卵石路上回响，然后，一转弯，它就在那里——埃希特纳赫修道院。它不是那种直插云霄、让你脖子...',
}

export default function AbbeyOfEchternachPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '卢森堡', href: '/destinations/luxembourg' },
            { label: '埃希特纳赫', href: '/destinations/luxembourg' },
            { label: '埃希特纳赫修道院', href: '/attractions/abbey-of-echternach' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`埃希特纳赫修道院・Abbey of Echternach・卢森堡・埃希特纳赫`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`如果你从卢森堡市那座满是玻璃大厦的现代河谷过来，一脚踏入埃希特纳赫的那一刻，时间仿佛被拧慢了发条。空气立刻变得不同，混着绍尔河带来的湿润水汽，还有老房子石墙缝隙里苔藓的淡淡土腥味。小镇安静得能听到自己的脚步声在鹅卵石路上回响，然后，一转弯，它就在那里——埃希特纳赫修道院。它不是那种直插云霄、让你脖子发酸的哥特式怪物，而是一片舒展的、奶油黄色的庞大建筑群，稳稳地坐在镇子的心脏地带，像一位宽厚的长者，已经坐了一千多年。
阳光好的时候，修道院外墙的石材会泛出蜂蜜般温润的光泽，阴影处则是深深的赭石色。走近了，你会先被那个宽阔的、铺着碎石的庭院吸引。这里没有栅栏，没有售票亭，它就那么敞开着，融进了小镇的日常生活。推着婴儿车的妈妈会穿过这里去集市，老先生坐在长椅上读报，鸽子在角落里咕咕叫着。修道院的大教堂，有着优雅的对称立面和双塔，但它最动人的部分，或许是你需要低头才能发现的——那扇通往地下的、不起眼的小门。那里藏着整个故事的起点。
推开那扇沉重的木门，一股凉意混合着古老的石头气息扑面而来，瞬间隔绝了外面的世界。这里是罗马式地穴，光线昏暗，只有几盏小灯照着粗糙的岩石墙壁。你的指尖触碰到墙面，能感觉到千年来的冰凉与凹凸不平。就是在这片看似简陋的空间里，公元698年，一位来自英格兰的传教士圣威利布罗，奠定了这座伟大修道院的基石。站在这里，你几乎能想象中世纪僧侣们在此祈祷时低沉的吟诵声，还有隔壁缮写室里鹅毛笔划过羊皮纸的沙沙声——那里曾是整个欧洲北部最明亮的思想灯塔之一。
而最奇妙的反差在于，这座以静默与学识闻名的修道院，却孕育了欧洲最活泼、最独特的节庆之一：跳跃游行。每年圣灵降临节后的星期二，平时肃穆的庭院和街道，会变成一片跳跃的海洋。成千上万的人，手拉着手，伴随着一首简单而古老的旋律，三步一进，两步一跳，蜿蜒前行。那是一种极具感染力的、近乎孩童般的虔诚。当你平日站在空荡的庭院里，耳边仿佛还能隐约听到那有节奏的踏步声和Polka旋律，让你明白，这座石头建筑里沉睡的，不仅是历史，还是一种依然在强劲跳动的、活生生的文化心脏。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果你从卢森堡市那座满是玻璃大厦的现代河谷过来，一脚踏入埃希特纳赫的那一刻，时间仿佛被拧慢了发条。空气立刻变得不同，混着绍尔河带来的湿润水汽，还有老房子石墙缝隙里苔藓的淡淡土腥味。小镇安静得能听到自己的脚步声在鹅卵石路上回响，然后，一转弯，它就在那里——埃希特纳赫修道院。它不是那种直插云霄、让你脖子发酸的哥特式怪物，而是一片舒展的、奶油黄色的庞大建筑群，稳稳地坐在镇子的心脏地带，像一位宽厚的长者，已经坐了一千多年。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`阳光好的时候，修道院外墙的石材会泛出蜂蜜般温润的光泽，阴影处则是深深的赭石色。走近了，你会先被那个宽阔的、铺着碎石的庭院吸引。这里没有栅栏，没有售票亭，它就那么敞开着，融进了小镇的日常生活。推着婴儿车的妈妈会穿过这里去集市，老先生坐在长椅上读报，鸽子在角落里咕咕叫着。修道院的大教堂，有着优雅的对称立面和双塔，但它最动人的部分，或许是你需要低头才能发现的——那扇通往地下的、不起眼的小门。那里藏着整个故事的起点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`推开那扇沉重的木门，一股凉意混合着古老的石头气息扑面而来，瞬间隔绝了外面的世界。这里是罗马式地穴，光线昏暗，只有几盏小灯照着粗糙的岩石墙壁。你的指尖触碰到墙面，能感觉到千年来的冰凉与凹凸不平。就是在这片看似简陋的空间里，公元698年，一位来自英格兰的传教士圣威利布罗，奠定了这座伟大修道院的基石。站在这里，你几乎能想象中世纪僧侣们在此祈祷时低沉的吟诵声，还有隔壁缮写室里鹅毛笔划过羊皮纸的沙沙声——那里曾是整个欧洲北部最明亮的思想灯塔之一。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而最奇妙的反差在于，这座以静默与学识闻名的修道院，却孕育了欧洲最活泼、最独特的节庆之一：跳跃游行。每年圣灵降临节后的星期二，平时肃穆的庭院和街道，会变成一片跳跃的海洋。成千上万的人，手拉着手，伴随着一首简单而古老的旋律，三步一进，两步一跳，蜿蜒前行。那是一种极具感染力的、近乎孩童般的虔诚。当你平日站在空荡的庭院里，耳边仿佛还能隐约听到那有节奏的踏步声和Polka旋律，让你明白，这座石头建筑里沉睡的，不仅是历史，还是一种依然在强劲跳动的、活生生的文化心脏。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`埃希特纳赫修道院`} />
                <InfoRow label="英文名称" value={`Abbey of Echternach`} />
                <InfoRow label="正式名称" value={`The Abbey of Echternach`} />
                <InfoRow label="国家" value={`卢森堡`} />
                <InfoRow label="城市" value={`埃希特纳赫`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`本笃会修道院的典范，曾作为中世纪欧洲最重要的学术与手稿抄写中心之一，享有“北部蒙特卡西诺”的盛誉。`} />
                <InfoRow label="建筑特色" value={`恢弘而不失庄严的复合建筑群，以奶油色的当地石材砌成，融合了罗马式地穴的古老根基与18世纪古典主义风格的优雅立面。`} />
                <InfoRow label="建筑风格" value={`主体为后巴洛克与新古典主义风格，但核心保存了可追溯至7世纪的罗马式地穴遗迹。`} />
                <InfoRow label="文化价值" value={`不仅是宗教圣地，更是承载了卢森堡乃至欧洲基督教文化传播、音乐与手工艺传统的活态文化遗产，其“跳跃游行”被列入联合国教科文组织人类非物质文化遗产名录。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`修道院建筑群外部庭院及周边花园全年全天开放。内部参观（主要包括地下室、博物馆及大教堂）开放时间复杂，需特别注意：大教堂每日上午9点至下午5点开放，但午间可能关闭1-2小时。地穴与博物馆仅在每年4月至10月的周二至周日开放，时间为下午2点至5点。周一通常闭馆（除法定节假日）。每年春季“跳跃游行”期间及圣诞节、元旦部分区域关闭。强烈建议出行前在其官方网站或当地旅游信息中心核实最新时刻表。`} />
              <InfoRow label="门票价格" value={`进入大教堂和修道院庭院免费。参观地穴与圣威利布罗博物馆需购票，标准票价为5欧元。学生、65岁以上长者及10人以上团体享有优惠票价3欧元。12岁以下儿童在成人陪同下免费。提供包含当地其他景点的联票，约10欧元。`} />
              <InfoRow label="地址" value={`Place du Marché, 6486 Echternach, Luxembourg`} />
              <InfoRow label="交通方式" value={`从卢森堡市出发最为便捷。在卢森堡中央火车站（Gare Centrale）乘坐110路或111路公共巴士，方向标有“Echternach”，车程约50分钟至1小时，班次频繁，约每20-30分钟一班。使用卢森堡全国免费的公共交通系统，无需购票。若自驾，从卢森堡市沿N11公路向东行驶约30公里即可抵达，小镇外围有清晰的指示牌和收费停车场（约1欧元/小时）。从最近的卢森堡芬德尔国际机场出发，建议先乘火车（约20分钟）或出租车（约30分钟）至卢森堡市，再转乘上述巴士。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲埃希特纳赫修道院的故事，我们得把时钟拨回到公元7世纪末的欧洲。那是一个黑暗时代刚刚透出一丝微光的年代，罗马帝国崩塌后的混乱尚未完全平息，基督教文明正艰难地向莱茵河以东的日耳曼部落地区渗透。这时，一位关键人物登场了：圣威利布罗。他可不是个普通的传教士，传说他出身英格兰贵族，在罗马和爱尔兰的修道院受过顶级教育，怀揣着将福音传向四方的热忱。据说，他之所以来到这片摩泽尔河支流的山谷，是因为在一次梦境中得到了神谕。公元698年，他获得了法兰克王太后伊尔姆伽的慷慨赠地——就在今天埃希特纳赫的这片土地上。想象一下当时的场景：一片原始的河畔林地，一位意志坚定的圣人，用木头和石头搭建起了最初的祈祷所。这不是结束，而是传奇的开始。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`威利布罗的野心远不止建立一个隐居点。他将其建立为一个严格遵循本笃会会规的修道院，而本笃会的核心正是“祈祷与工作”，尤其重视学术与抄写。威利布罗从英格兰和爱尔兰带来了珍贵的书籍和学识。他去世后，被安葬在修道院教堂内，他的坟墓很快成为朝圣中心，吸引了源源不断的信徒，也为修道院带来了巨大的声望和捐赠。到了8世纪，在虔诚者加洛林王朝皇帝们的庇护下，埃希特纳赫修道院迎来了它的黄金时代。它的缮写室成为了阿尔卑斯山以北最耀眼的明星之一。僧侣们在这里夜以继日地抄写、装饰、注释古代文献和圣经。他们发展出独特的“埃希特纳赫风格”手稿，色彩明亮，构图充满活力，这些精美绝伦的书卷被送往欧洲各地的教堂和宫廷，成为传播知识与信仰的火种。那时的修道院，不仅是一座宗教建筑，更是一座顶尖的“大学”和“出版社”，是黑暗中的一座灯塔。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，中世纪的繁华总是与动荡相伴。修道院的巨大财富也使它成为维京人、匈牙利骑兵等劫掠者眼中的肥肉。它在9到10世纪多次被洗劫和焚烧，珍贵的图书馆也损失惨重。但每一次，它都像凤凰一样从灰烬中重生。罗马式的教堂在地基上一次次被重建和扩大。转折点出现在11世纪，当时修道院院长决定将圣威利布罗的遗骸迁葬，并为此修建了一座华美的地下墓穴，也就是我们今天看到的罗马式地穴的核心部分。这次迁葬极大地促进了朝圣活动，也为后来那个独一无二的“跳跃传统”埋下了伏笔。传说，中世纪时这里曾爆发过一场严重的舞蹈病（或称圣维特斯舞蹈病），人们相信通过模仿这种跳跃的动作并祈求圣威利布罗，能够治愈疾病。这逐渐演变成一种庄严的宗教游行仪式。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间的车轮无情碾过。宗教改革、战争、法国大革命的浪潮一次次冲击着这座古老的机构。1794年，法国革命军解散了修道院，修士被驱逐，建筑被拍卖，沦为采石场、陶瓷厂甚至监狱，遭遇了它历史上最黑暗的时期。那些无价的手稿流散四方，如今只能在巴黎、维也纳的博物馆里才能见到。直到19世纪中叶，随着卢森堡的国家意识觉醒，人们才开始重新审视这片废墟的价值。一场漫长而审慎的重建工程开始了。我们今天看到的主体建筑，包括那庄严的巴洛克-古典主义风格的立面和大教堂内部，大多是19世纪末到20世纪初重建的成果。它不再是严格意义上的修道院，而变成了一个教区教堂和文化中心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但历史在这里画了一个奇妙的圆。虽然建筑是“新”的，但精神从未断绝。每年一度的“跳跃游行”从未长时间中断，即使在二战纳粹占领期间，人们也以沉默的行走来坚持这一传统。1944年，修道院在突出部战役的炮火中再次严重受损，战后的修复让它重获新生。如今，当你漫步其中，你走过的是20世纪的石板，触摸的是19世纪重建的墙壁，但你的脚下，是7世纪的基石，你的呼吸里，混合着一千三百年的祈祷、学识、劫难与庆典。它不再有抄写僧侣，但它成了音乐学校、博物馆和社区中心，继续以新的方式滋养着这片土地和来到这里的人们。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议将整个游览安排为大半天（约4-5小时），最好在上午10点前抵达，以避开可能的旅游小团队，并享受清晨柔和的光线。整体节奏宜慢不宜快，因为这里的魅力在于沉浸和感受，而非打卡。先从外部环境和庭院开始，建立整体空间感；然后进入大教堂感受其内部庄严氛围；紧接着探访核心历史区域——罗马式地穴和博物馆，这是需要静心理解的部分；最后，以漫步修道院花园和周边历史街区作为放松和回味。这样的安排由表及里，从空间到时间，能让你最完整地体验修道院的多重层次。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必提前查清楚地穴和博物馆的开放日，它们经常在淡季或周一闭馆，白跑一趟会很遗憾。小镇地面多为鹅卵石，请务必穿一双舒适且鞋底防滑的步行鞋。尊重宗教场所的礼仪，在教堂内保持安静，拍照时关闭闪光灯。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从宁静的市集广场开始，先别急着进门，绕着修道院建筑群的外围慢慢走一圈，感受它奶油色石材在晨光下的色泽变化和庞大的规模。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主立面走进开阔的中央庭院，停下来观察这里如何自然地融入小镇生活，听听鸽子振翅和远处咖啡馆隐约传来的杯碟碰撞声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开大教堂沉重的木门，让眼睛适应内部昏暗的光线，然后顺着中殿走向祭坛，抬头看管风琴和彩绘玻璃，感受空间带来的肃穆与宁静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到通往地下的小门，沿着石阶步入阴凉而古老的罗马式地穴，在静谧中用手触摸那些千年未变的粗糙石壁，寻找圣威利布罗最初的安息处标识。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观毗邻的圣威利布罗博物馆，即便不大也要仔细看那些复制的手稿插图和考古发现，想象当年缮写室里灯火通明的景象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从地下室出来后，穿过回廊或侧门，来到修道院后方临河的静谧花园，在长椅上坐一会儿，看着绍尔河静静流淌，整理方才接收的厚重信息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，以庭院边那家历史悠久的咖啡馆作为终点，点一杯卢森堡本地咖啡或啤酒，看着广场上来往的行人，把历史的尘埃与现世的烟火气融合在一起。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`中央庭院仰拍双塔`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点前，站在庭院中央稍微靠近大教堂的位置，用广角镜头仰拍，将对称的古典主义立面、双塔和纯净的蓝天一同纳入构图，最能体现其庄严气势。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`罗马式地穴拱门光影`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，当一缕阳光从地穴唯一的高侧窗斜射入内时，抓紧时间拍摄光线切割古老拱门和石柱的瞬间，明暗对比极具戏剧性和历史感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`修道院花园河畔视角`}</h4>
                  <p className="text-sm text-gray-700">{`下午晚些时候，走到花园尽头靠近绍尔河的木栏处，回望修道院的建筑群，将其作为背景，前景是河流与绿植，可以拍出建筑与自然和谐共存的诗意画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`市集广场远观全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，从广场另一端的市政厅附近看过来，温暖的夕阳光线会给整个修道院建筑群披上金色的外衣，捕捉这时刻的暖色调全景。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内拍摄尽量使用大光圈和高感光度，以捕捉自然光影，避免使用三脚架妨碍他人。拍摄跳跃游行等节庆活动时，务必尊重参与者，以抓拍自然瞬间为主，避免使用突兀的闪光灯或阻挡游行队伍。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河景静谧之选`}</h4>
                  <p className="text-sm text-blue-800">{`位于绍尔河畔的家庭式旅馆，房间窗户正对潺潺流水和远处的修道院背影，晚上能听到水声伴你入眠，早餐是女主人自制的果酱和新鲜面包。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史中心精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`由一栋18世纪贵族宅邸改造，坐落于修道院步行两分钟的鹅卵石小街上，房间保留了原始的木梁和石墙，现代舒适的设施藏在复古的装饰之下，体验真正的“住在历史里”。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端度假体验`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在小镇外围山丘上的四星级高级酒店，拥有开阔的露台和游泳池，在房间阳台或餐厅就能俯瞰整个埃希特纳赫镇和修道院建筑群的全景，尤其适合自驾的旅行者。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济便捷旅舍`}</h4>
                  <p className="text-sm text-purple-800">{`镇口巴士站附近由年轻夫妇经营的现代旅舍，设计简洁明亮，提供自行车租赁，方便你以更自由的方式探索小镇和周边的穆勒塔尔徒步小径。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`埃希特纳赫是非常安全宁静的小镇，夜间漫步毫无压力。如果计划在跳跃游行期间到访，必须提前至少半年预订住宿，那是小镇一年中最热闹也最拥挤的时刻。平日则非常宽松，甚至可以尝试当天抵达后寻找住处。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开埃希特纳赫的时候，我的背包里没有多一件纪念品，但心里却感觉被填得满满的。那种充盈感，不是来自于看到了多么炫目的建筑，而是来自于一种罕见的“连续性”的体验。在这里，你几乎能亲手触碰到时间流动的质感——从7世纪圣人赤脚踩过的泥土，到中世纪僧侣指尖摩挲的羊皮纸，从法国大革命时期的破碎瓦砾，到今天孩童在广场上追逐嬉笑的身影。这座修道院像一个巨大的时空胶囊，但它不是密封的，而是敞开的、呼吸着的。它告诉我们，文化遗产最鲜活的样子，不是被锁在玻璃柜里供人瞻仰，而是像一条河，从古老的泉眼发源，流过战火与和平，接纳沿途的支流，最终依然能滋润今天的生活。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、迷恋新鲜感的时代，埃希特纳赫提供了一种截然不同的旅行价值：那就是学习“停留”与“聆听”。它或许没有巴黎的时尚，没有罗马的磅礴，但它有一种能让心静下来的力量。它让你看到，真正的深度不在于打卡名录上的又一个名字，而在于你是否愿意花一个下午，去想象一千年前一盏油灯下，一个无名僧侣是如何用一整个冬天，细心描绘出一个字母的镶边。它让你相信，那些关于信仰、知识和社区的故事，从未真正死去，它们只是换了一种方式，在跳跃的舞步中，在静谧的祈祷里，在每一个推开那扇古老木门的旅人心中，继续生长。这就是为什么，每一位厌倦了浮光掠影的旅人，都应该来一次埃希特纳赫，不是为了收集另一个景点，而是为了给自己的灵魂，做一次深度的、跨越千年的SPA。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/vianden-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维安登城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vianden Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/esch-sur-sure-luxembourg" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃施叙尔叙尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Esch-sur-Sûre</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/echternach-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃希特纳赫修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Echternach Abbey</p>
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
