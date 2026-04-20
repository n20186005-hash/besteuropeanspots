import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '罗阿雷城堡 Loarre Castle｜登上欧洲保存最古老、最完好的罗马式城堡之巅，触摸千年史诗 - 最佳欧洲景点',
  description: '车子在阿拉贡的乡野间行驶，窗外是绵延的橄榄园与低矮的山丘，一切都显得平和慵懒。直到一个拐弯，它毫无征兆地撞进你的视野——罗阿雷城堡。那一刻，呼吸会为之一滞。那不是童话里精致的尖塔，而是一头沉睡的、由岩石构成的巨兽，傲然盘踞在一座孤山的顶端，石灰岩的墙体与山体几乎融为一体，在炽烈的西班牙阳光下泛着冷峻...',
}

export default function LoarreCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '罗阿雷城堡', href: '/attractions/loarre-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`罗阿雷城堡・Loarre Castle・西班牙・韦斯卡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在阿拉贡的乡野间行驶，窗外是绵延的橄榄园与低矮的山丘，一切都显得平和慵懒。直到一个拐弯，它毫无征兆地撞进你的视野——罗阿雷城堡。那一刻，呼吸会为之一滞。那不是童话里精致的尖塔，而是一头沉睡的、由岩石构成的巨兽，傲然盘踞在一座孤山的顶端，石灰岩的墙体与山体几乎融为一体，在炽烈的西班牙阳光下泛着冷峻的金白色光芒。你瞬间就理解了“要塞”二字的全部含义：它不是用来观赏的，是用来征服与坚守的。
停好车，开始沿着之字形山路向上攀登。风立刻变得不一样，干燥、猛烈，带着荆棘与岩石被晒烫后的粗砺气味。脚下的碎石沙沙作响，每一步都在拉近与那个庞然大物的距离。当你穿过第一道厚重的拱形门洞，踏入内庭的瞬间，世界骤然安静下来。外面呼啸的风声被高墙隔绝，只剩下自己的脚步声在石壁间空洞地回响。空气是阴凉的，带着一种地窖般的、潮湿的石头与古老尘土混合的气息。光线透过狭小的箭窗射入，在斑驳的地面上切割出锐利的光斑。这里没有多余的装饰，只有石头，无尽的、充满力量的石头，它们沉默地诉说着关于生存、关于信仰、关于战争最原始的故事。
但罗阿雷最动人的，恰恰是这极端刚硬中的一抹温柔——圣佩德罗教堂。当你从粗犷的军营般的通道转入这座位于城堡心脏的小教堂时，会感到一种神圣的眩晕。虽然依旧是罗马式的厚重，但这里有了精致的柱头雕刻，有了优雅的拱廊。正午的阳光从高侧窗倾泻而下，仿佛被这虔诚的空间净化过，变得柔和而肃穆。你可以触摸那些被无数信徒和士兵摩挲得光滑的柱石，想象在征战间隙，骑士们在此祈祷，铠甲与石地碰撞出清脆的声响，与低沉的拉丁语祷文交织。它是灵魂的盔甲，与外面物理的盔甲同等重要。
在当地人心中，罗阿雷不仅仅是景点，它是地标，是传说，是家乡永恒的脊梁。你会看到老人在山下小镇的广场上，眯着眼望着它，那目光如同望向一位沉默寡言却值得完全信赖的老族长。它的核心魅力，就在于这种极致的反差与统一：暴力与宁静，粗野与精致，战争的铁血与信仰的微光，全部被凝固在这座石头奇迹里，历经千年，未曾褪色。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在阿拉贡的乡野间行驶，窗外是绵延的橄榄园与低矮的山丘，一切都显得平和慵懒。直到一个拐弯，它毫无征兆地撞进你的视野——罗阿雷城堡。那一刻，呼吸会为之一滞。那不是童话里精致的尖塔，而是一头沉睡的、由岩石构成的巨兽，傲然盘踞在一座孤山的顶端，石灰岩的墙体与山体几乎融为一体，在炽烈的西班牙阳光下泛着冷峻的金白色光芒。你瞬间就理解了“要塞”二字的全部含义：它不是用来观赏的，是用来征服与坚守的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`停好车，开始沿着之字形山路向上攀登。风立刻变得不一样，干燥、猛烈，带着荆棘与岩石被晒烫后的粗砺气味。脚下的碎石沙沙作响，每一步都在拉近与那个庞然大物的距离。当你穿过第一道厚重的拱形门洞，踏入内庭的瞬间，世界骤然安静下来。外面呼啸的风声被高墙隔绝，只剩下自己的脚步声在石壁间空洞地回响。空气是阴凉的，带着一种地窖般的、潮湿的石头与古老尘土混合的气息。光线透过狭小的箭窗射入，在斑驳的地面上切割出锐利的光斑。这里没有多余的装饰，只有石头，无尽的、充满力量的石头，它们沉默地诉说着关于生存、关于信仰、关于战争最原始的故事。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但罗阿雷最动人的，恰恰是这极端刚硬中的一抹温柔——圣佩德罗教堂。当你从粗犷的军营般的通道转入这座位于城堡心脏的小教堂时，会感到一种神圣的眩晕。虽然依旧是罗马式的厚重，但这里有了精致的柱头雕刻，有了优雅的拱廊。正午的阳光从高侧窗倾泻而下，仿佛被这虔诚的空间净化过，变得柔和而肃穆。你可以触摸那些被无数信徒和士兵摩挲得光滑的柱石，想象在征战间隙，骑士们在此祈祷，铠甲与石地碰撞出清脆的声响，与低沉的拉丁语祷文交织。它是灵魂的盔甲，与外面物理的盔甲同等重要。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当地人心中，罗阿雷不仅仅是景点，它是地标，是传说，是家乡永恒的脊梁。你会看到老人在山下小镇的广场上，眯着眼望着它，那目光如同望向一位沉默寡言却值得完全信赖的老族长。它的核心魅力，就在于这种极致的反差与统一：暴力与宁静，粗野与精致，战争的铁血与信仰的微光，全部被凝固在这座石头奇迹里，历经千年，未曾褪色。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`罗阿雷城堡`} />
                <InfoRow label="英文名称" value={`Loarre Castle`} />
                <InfoRow label="正式名称" value={`Loarre Castle`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`韦斯卡`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它不仅是西班牙罗马式军事建筑的巅峰之作，更是欧洲现存最古老且保存最完好的罗马式城堡，见证了基督教王国在伊比利亚半岛“收复失地运动”中的关键扩张。`} />
                <InfoRow label="建筑特色" value={`一座雄踞于石灰岩山巅的庞然石造要塞，完美融合了军事防御的雄浑与宗教建筑的优雅，其双重城墙、圆形塔楼与内部的圣佩德罗教堂构成了无与伦比的整体。`} />
                <InfoRow label="建筑风格" value={`以纯粹的罗马式风格为主体，其厚重敦实的墙体、半圆形拱券和简朴有力的装饰，在后世虽有部分哥特式增建，但依然保留了11世纪原始风貌的精髓。`} />
                <InfoRow label="文化价值" value={`它是活生生的中世纪史诗，其建筑本身、留存的雕刻以及所承载的记忆，为我们理解西班牙北部基督教王国的形成、中世纪战争与信仰的共生关系提供了不可替代的实物教科书。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡全年开放，但开放时间随季节变化：夏季（4月至9月）通常为上午10点至晚上7点，最晚入场时间为闭馆前一小时；冬季（10月至次年3月）开放时间缩短，通常为上午10点至下午2点及下午3点至5点。每周一上午闭馆（节假日除外），1月1日、1月6日和12月25日全天关闭。因城堡时常作为影视取景地，建议出行前务必在其官网核实最新开放安排，以防临时闭门。`} />
              <InfoRow label="门票价格" value={`标准成人票为7欧元。优惠票（适用于学生、65岁以上老人及8-14岁儿童）价格为5欧元。8岁以下儿童免费。建议在线购票以避免旺季排队。部分特定导览团（如夜间导览或摄影工作坊）价格可能上浮至12-15欧元。`} />
              <InfoRow label="地址" value={`Castillo de Loarre, 22809 Loarre, Huesca, Spain`} />
              <InfoRow label="交通方式" value={`最便捷的国际枢纽是萨拉戈萨机场（ZAZ）。从萨拉戈萨出发：租车自驾是最推荐的方式，沿A-23高速公路向北行驶约45分钟至韦斯卡方向，然后根据路牌指示驶向Loarre镇，车程总计约1小时10分钟。若搭乘公共交通：从萨拉戈萨或韦斯卡市乘坐区域巴士可抵达Loarre镇，但班次稀疏（通常每天仅1-2班），且从镇上至城堡仍有约3公里的陡峭山路，步行吃力且无接驳车，强烈建议提前规划或预订当地出租车。从巴塞罗那或马德里出发，乘高铁至萨拉戈萨后再转车是常用路线。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从一千多年前说起，那时的伊比利亚半岛正是一片沸腾的熔炉。穆斯林政权控制着南方大片土地，而北方的基督教小王国正在艰难地生存与扩张。时间来到11世纪初，纳瓦拉王国那位雄心勃勃的国王桑乔三世，将目光投向了这片战略要地——韦斯卡平原的边缘。这里俯瞰着富饶的平原，是进军、防御、宣示主权的绝佳地点。于是，大约在1020年，第一块基石被奠定。最初的罗阿雷，纯粹是一个军事前哨，一个瞭望塔，它的使命简单而残酷：盯住敌人，守住土地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，城堡的命运很快与一位传奇人物紧密相连。国王桑乔·拉米雷斯，他不仅是一位战士，更是一位虔诚的君王和精明的统治者。在他的时代，“收复失地运动”不仅是军事征服，更是一场文化和信仰的复兴。约在1070年，他做了一件决定城堡未来气质的事：在城堡的核心位置，建立了圣佩德罗教堂，并引入了一群奥古斯丁会的修道士。从此，罗阿雷不再仅仅是一座兵营，它成了一个兼具军事堡垒与宗教社区双重身份的独特存在。修道士们在此祈祷、抄经，他们的精神力量与骑士们的武力，共同铸就了王国南扩的基石。你可以想象，在那些寒冷的夜晚，城堡内既有兵器打磨的铿锵，也有唱诗班弥撒的悠扬。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡的城墙见证了无数次惊心动魄的时刻，但它最著名的“战斗”，或许是一场未曾发生的围攻。传说中，城堡曾面对一支庞大的穆斯林军队。守军人数寥寥，形势危急。这时，一位聪明的守将想出了绝妙的计策：他让所有妇女和儿童穿上军装，手持一切反光的器物（甚至包括厨房的锅盖），在城垛后来回走动。从山下望去，城堡瞬间“布满”了密密麻麻、盔甲闪亮的士兵。敌军统帅被这“雄厚的兵力”震慑，以为情报有误，最终放弃了进攻，撤兵离去。这个充满智慧与幽默的传说，至今仍在当地人口中流传，为这座硬朗的城堡增添了一丝人性的狡黠与温情。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`随着基督教王国边境不断南推，罗阿雷的战略重要性逐渐下降。它褪去了前线要塞的紧张感，修道院的功能也慢慢转移。它沉寂下来，近乎被遗忘，这种遗忘反而成了它最好的保护伞。没有经历大规模的战火摧毁，也没有赶上后来文艺复兴或巴洛克时期的“现代化”改造浪潮，它就像被时间封存在了琥珀里，完整地保留了其11世纪的罗马式原貌。直到19世纪，浪漫主义的浪潮重新“发现”了中世纪，学者和旅行家们才开始惊叹于这座几乎原封未动的“化石”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`进入现代，它以一种意想不到的方式重获全球关注——成为影视巨作的舞台。电影《天国王朝》中，它化身為耶路撒冷城；在《末日浩劫》等作品中，它神秘而雄伟的身姿屡次出现。摄像机镜头追逐着它，但它不为所动。无论是千年前的战鼓，还是今天的导演口令，它只是静静地屹立在山巅，任由光影在它嶙峋的骨骼上变幻。从军事要塞到信仰堡垒，从被遗忘的废墟到文化地标，罗阿雷城堡的每一块石头，都浸透了历史的层叠。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完全感受罗阿雷的魂魄，请务必安排一整天的时间，并尽量在开门的第一个小时就抵达。清晨的光线不仅柔和，能拍出城堡最壮丽的照片，更重要的是，你能在几乎无人的寂静中独自拥有这座千年堡垒。整体游览需要至少3-4小时，节奏宜慢不宜快。建议先从外部远观，然后沉浸式探索内部，最后在制高点长时间停留、眺望与沉思。这样的安排能让你逐步由远及近、由表及里地理解它，让历史的回响有足够的时间在你心中沉淀。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双绝对防滑、支撑性好的徒步鞋，城堡内外的石阶历经千年已被磨得光滑，且多有高低不平之处。西班牙正午阳光极其暴烈，城堡内荫凉处不多，务必携带充足饮水、防晒霜和帽子。尽量避开周末下午，那时游客最多，会破坏城堡本身的静谧史诗感。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨先从城堡下方西侧的瞭望点开始，看着金色的阳光一寸寸爬满整个石灰岩城堡的东立面，倾听山谷苏醒的声音。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着古老的朝圣者步道缓步上行，用手触摸路边被风雨侵蚀的岩石，感受脚下坡度带来的喘息，体会当年士兵与修士每日必经的艰辛。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过那扇令人过目不忘的、带有精美雕刻的罗马式大门，踏入幽暗凉爽的第一进庭院，让眼睛适应从明亮到昏暗的光线变化。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`直接前往城堡心脏——圣佩德罗教堂，在清晨最安静的时刻独自坐在石凳上，看阳光透过狭窗变成一道光柱，尘埃在其中飞舞。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`细细探寻教堂回廊和小礼拜堂里那些保存完好的罗马式柱头雕刻，寻找上面刻着的奇异野兽、圣经故事和古老符号。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`勇敢地攀爬狭窄而旋转的楼梯，登上王后塔或守望塔的顶端，让猛烈的山风吹拂脸庞，360度俯瞰如画卷般铺展的韦斯卡平原。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着雄伟的双层城墙漫步，从一个个箭垛和炮口望出去，想象守军在此御敌的视角，感受冷兵器时代防御工事的精巧与压迫感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后回到城堡入口附近的阴影处坐下，喝一口自带的水，只是静静地看着光影在古老庭院中移动，直到心满意足才缓缓离开。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡西南侧约一公里处的公路转弯处`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，使用长焦镜头可以捕捉到城堡雄踞于孤山之上、背景是绵延平原和远山的全景，构图时将蜿蜒的上山路也纳入画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣佩德罗教堂回廊中央`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个晴天的正午时分，站在回廊一角，等待阳光直射入院落，拍摄拱廊形成的强烈明暗对比与几何光影，人物可作为一个沉思的剪影点缀其中。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`王后塔的顶层箭窗`}</h4>
                  <p className="text-sm text-gray-700">{`将相机镜头紧贴箭窗石壁向外拍摄，以厚重的、被岁月侵蚀的石头窗框作为前景画框，框住窗外无限延伸的平原与天空，形成强烈的古今与内外对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城堡地下储水池入口的螺旋楼梯`}</h4>
                  <p className="text-sm text-gray-700">{`利用手机或相机的广角功能，从楼梯底部向上仰拍，捕捉螺旋石阶盘旋而上、通向一小片圆形天空的深邃构图，充满神秘感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`建议携带一支广角镜头以拍摄内部空间的恢弘，一支中长焦镜头用于捕捉建筑细节和远方全景。使用无人机需极其谨慎，城堡周边常有强风，且属于受保护文化遗产，最好提前了解当地法规。尊重场所，避免使用闪光灯拍摄教堂内部脆弱的雕刻。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`城堡山脚下Loarre小镇里由石屋改造的乡村民宿，房东会给你讲述家族代代相传的城堡故事，早晨在鸡鸣声中醒来，推开窗就是那座山巅巨兽。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`驱车半小时可达的锡雷萨镇上，一家由百年修道院部分建筑修复而成的精品酒店，保留了拱顶石室和宁静的回廊庭院，夜宿其中是另一种中世纪余韵。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`韦斯卡市郊一座建于19世纪的优雅庄园别墅酒店，拥有宽阔的花园和泳池，在经历一天的城堡探险后，可以享受一顿精致的阿拉贡晚餐和柔软的床榻。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`自然亲近`}</h4>
                  <p className="text-sm text-purple-800">{`在通往城堡的山谷中，有几处设施完备的露营地或小木屋，适合自驾的冒险者，夜晚在无光污染的环境下仰望星空，城堡在山顶剪影的衬托下更具魔幻色彩。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果选择住在Loarre小镇，请做好乡村生活的准备，夜晚极其安静，餐饮选择有限，但体验绝对真实。旺季（特别是春秋两季和电影节期间）韦斯卡市及周边的优质住宿非常紧俏，务必提前数月预订。阿拉贡地区治安良好，但乡村地区夜间照明不足，驾车需留意。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开罗阿雷城堡许久，那由石头、光影和风声共同谱写的寂静轰鸣，依然在耳边回响。它不像那些被过度修饰的宫殿，用金碧辉煌诉说权力；它更像一位卸甲归隐的老兵，沉默地坐在山巅，身上每一道疤痕都是一个故事。在这里，你触摸到的不是冰冷的历史课本，而是有温度、有质感、甚至有呼吸的往昔。你能感受到建造者手掌摩擦石块的粗糙，能听到修士在 chapel 中低语的虔诚，也能体会到守军凝望平原时，那份混合着警惕、孤独与决绝的心跳。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在一切都追求快速、平滑、娱乐化的今天，罗阿雷的存在，是一种倔强的提醒。它提醒我们，有些美源于实用与生存的苛刻要求，有些伟大诞生于信仰与刀剑的并存。它不讨好你，甚至用陡峭的山路和粗粝的环境考验你。但正是这份“不讨好”，赋予了抵达后的震撼以双倍的力量。它告诉我们，真正的深度旅行，不是收集打卡照，而是去聆听一座山、一块石头、一段残垣的沉默诉说。每一位渴望在旅途中获得内心回响，而不仅仅是视觉刺激的旅人，都应该来一次罗阿雷。它不是旅程的调味品，它就是主菜本身——一道厚重、耐嚼、回味无穷，关于时间、坚韧与人类精神的主菜。登上那座山巅，你会带回的，远不止照片。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/rapperswil-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉珀斯维尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rapperswil Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/albarracin-medieval-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔瓦拉辛</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Albarracín</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/burghausen-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博格豪森城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Burghausen Castle</p>
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
