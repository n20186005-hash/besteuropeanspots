import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '克莱佩达老城 Klaipėda Old Town｜汉萨同盟的北方记忆，琥珀与铁锈的混响 - 最佳欧洲景点',
  description: '想象一下，当你从宽阔的、带着一丝苏联式规划气息的现代街道，拐进一条铺着巨大鹅卵石的窄巷时，那种时空切换的恍惚感。首先迎接你的不是宏伟的建筑，而是一股复杂的气味——微咸的、带着凉意的海风从但泽湾吹来，混合着老砖石在雨后散发出的淡淡土腥味，还有从不远处面包房飘出的、温暖而扎实的黑麦香气。你的脚下，那些被...',
}

export default function KlaipedaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '立陶宛', href: '/destinations/lithuania' },
            { label: '克莱佩达老城', href: '/attractions/klaipeda-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`克莱佩达老城・Klaipėda Old Town・立陶宛・克莱佩达`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下，当你从宽阔的、带着一丝苏联式规划气息的现代街道，拐进一条铺着巨大鹅卵石的窄巷时，那种时空切换的恍惚感。首先迎接你的不是宏伟的建筑，而是一股复杂的气味——微咸的、带着凉意的海风从但泽湾吹来，混合着老砖石在雨后散发出的淡淡土腥味，还有从不远处面包房飘出的、温暖而扎实的黑麦香气。你的脚下，那些被几个世纪的车轮和脚步打磨得温润发亮的石头，在立陶宛清透的阳光下泛着青光。这里就是克莱佩达的老城，它不像那些被精心供奉的博物馆式古城，而更像一位叼着烟斗、手上有厚茧的老水手，沉默，但浑身都是故事。
走在这里，你会发现一种奇妙的“混搭”。一栋有着精美巴洛克山墙、漆成鹅黄色的三层小楼，旁边可能就是一座低矮的、用原木搭建的仓库，木头上还留着斧凿的粗糙痕迹。抬头看，许多山墙的顶端都装饰着风向标，不是常见的公鸡，而是帆船、海马或者锚——这是刻在DNA里的海洋记忆。周末的上午，剧院广场上会有小型市集，当地人慢悠悠地挑选着琥珀原石、手织的羊毛袜和自家酿的蜂蜜。手风琴声从某个开着门的咖啡馆里断断续续地飘出来，不激昂，带着点波罗的海式的忧郁调子。你会发现，老城不是橱窗，它就是克莱佩达人生活的一部分，是他们的客厅和后院。
这种亲切感，正是克莱佩达老城最打动人心的内核。它没有金碧辉煌的宫殿来震慑你，而是用生活的细节包裹你。你可能会在一条巷子的拐角，发现一堵嵌着“Memel 1683”字样的老墙；也可能在路过一扇绿色的门时，听到里面传来钢琴练习曲的生涩音符。它的魅力不在于保存得多么完美——事实上，二战摧毁了这里近60%的建筑——而在于那份顽强的、在废墟上重建生活的韧劲。每一块重新垒起的砖，每一笔在新山墙上涂刷的颜色，都是一次轻声的宣告：我们还在，我们的记忆和日常，都还在继续。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下，当你从宽阔的、带着一丝苏联式规划气息的现代街道，拐进一条铺着巨大鹅卵石的窄巷时，那种时空切换的恍惚感。首先迎接你的不是宏伟的建筑，而是一股复杂的气味——微咸的、带着凉意的海风从但泽湾吹来，混合着老砖石在雨后散发出的淡淡土腥味，还有从不远处面包房飘出的、温暖而扎实的黑麦香气。你的脚下，那些被几个世纪的车轮和脚步打磨得温润发亮的石头，在立陶宛清透的阳光下泛着青光。这里就是克莱佩达的老城，它不像那些被精心供奉的博物馆式古城，而更像一位叼着烟斗、手上有厚茧的老水手，沉默，但浑身都是故事。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走在这里，你会发现一种奇妙的“混搭”。一栋有着精美巴洛克山墙、漆成鹅黄色的三层小楼，旁边可能就是一座低矮的、用原木搭建的仓库，木头上还留着斧凿的粗糙痕迹。抬头看，许多山墙的顶端都装饰着风向标，不是常见的公鸡，而是帆船、海马或者锚——这是刻在DNA里的海洋记忆。周末的上午，剧院广场上会有小型市集，当地人慢悠悠地挑选着琥珀原石、手织的羊毛袜和自家酿的蜂蜜。手风琴声从某个开着门的咖啡馆里断断续续地飘出来，不激昂，带着点波罗的海式的忧郁调子。你会发现，老城不是橱窗，它就是克莱佩达人生活的一部分，是他们的客厅和后院。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这种亲切感，正是克莱佩达老城最打动人心的内核。它没有金碧辉煌的宫殿来震慑你，而是用生活的细节包裹你。你可能会在一条巷子的拐角，发现一堵嵌着“Memel 1683”字样的老墙；也可能在路过一扇绿色的门时，听到里面传来钢琴练习曲的生涩音符。它的魅力不在于保存得多么完美——事实上，二战摧毁了这里近60%的建筑——而在于那份顽强的、在废墟上重建生活的韧劲。每一块重新垒起的砖，每一笔在新山墙上涂刷的颜色，都是一次轻声的宣告：我们还在，我们的记忆和日常，都还在继续。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`克莱佩达老城`} />
                <InfoRow label="英文名称" value={`Klaipėda Old Town`} />
                <InfoRow label="正式名称" value={`Klaipėda Old Town`} />
                <InfoRow label="国家" value={`立陶宛`} />
                <InfoRow label="城市" value={`克莱佩达`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`波罗的海东岸唯一一座由条顿骑士团建立并保留了浓厚德意志印记的立陶宛港口古城。`} />
                <InfoRow label="建筑特色" value={`大量色彩柔和、山墙面向街道的北德风格联排建筑，与立陶宛传统的木结构民居奇妙共存。`} />
                <InfoRow label="建筑风格" value={`汉萨哥特式与巴洛克风格混搭，并以独特的“Fachwerk”（半木结构）山墙细节为标志。`} />
                <InfoRow label="文化价值" value={`见证了梅梅尔（Memel）到克莱佩达的身份变迁，是立陶宛海洋文化与日耳曼历史层理交织的活化石。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`开放式区域，全天24小时可自由漫步。区域内各博物馆、美术馆等独立场馆开放时间各异，通常为周二至周日10:00-18:00，周一闭馆。冬季（11月至3月）部分小型博物馆可能缩短开放时间或仅周末开放。圣诞夜、新年及复活节当天大部分室内场馆关闭。`} />
              <InfoRow label="门票价格" value={`老城街区本身免费开放。内部景点单独收费：克莱佩达历史博物馆门票约5欧元，立陶宛海事博物馆门票约8欧元（含海豚馆）。优惠票适用于学生、儿童及老年人。建议购买“克莱佩达卡”，可在24或48小时内无限次乘坐公共交通并享受多个博物馆门票折扣。`} />
              <InfoRow label="地址" value={`Didžioji Vandens g. 2, 91246 Klaipėda, Lithuania`} />
              <InfoRow label="交通方式" value={`从克莱佩达国际机场（PLQ）出发：乘坐29路公交车直达老城边缘的“Klaipėdos dramos teatras”（戏剧剧院）站，车程约25分钟，每小时2-3班，票价约1欧元，上车向司机购票。从克莱佩达中央火车站出发：步行是最佳方式，沿着H. Manto街向北直行约15分钟即可抵达老城标志性的剧院广场。从维尔纽斯或考纳斯乘坐长途巴士抵达克莱佩达汽车站后，可转乘8路或9路公交，约10分钟到达老城。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从1252年讲起。那时候，这里还不叫克莱佩达，也不属于立陶宛。条顿骑士团的骑士们乘船而来，在这条注入波罗的海的达涅河河口，用木头和泥土建起了一座堡垒，他们称之为“Memelburg”（梅梅尔堡）。他们的目的很明确：巩固基督教世界的前沿，并向异教的波罗的部落传教与扩张。这座堡垒，就是今天老城所有故事的起点。随堡垒而来的，是商人和工匠，一个定居点沿着河流生长开来。1283年，它获得了吕贝克城市法，这意味着它被纳入了强大的汉萨同盟网络。从此，梅梅尔的身份被锚定：它是一座商人的城市，一个连接着内陆与广阔海洋的北方港口。木材、蜂蜡、毛皮从这里运往西欧，而食盐、布匹和鲱鱼则从这里输入。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`此后的几百年里，梅梅尔就像波罗的海上的一叶扁舟，随着历史的巨浪起起伏伏。它先后属于普鲁士公国、勃兰登堡-普鲁士，乃至德意志帝国。城市的建筑风格也深深打上了北德汉萨城市的烙印：那些陡峭的、装饰性的山墙，是为了在狭窄的街区内最大化利用空间，同时也成为商人财富和品味的象征。你会发现老城的街道布局非常规整，呈棋盘状，这正是汉萨城市典型的实用主义规划。然而，立陶宛的文化血脉从未真正断绝。这座城市一直是普鲁士境内立陶宛语文化的重要中心，许多书籍和出版物在这里印刷，滋养着民族的意识。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`历史的转折点猛烈地发生在20世纪。一战后，根据《凡尔赛条约》，梅梅尔地区被从德国分离，成立了一个国际共管的“梅梅尔地区”。1923年，立陶宛出兵接管了这里，并更名为“Klaipėda”（克莱佩达）。这是老城第一次正式与立陶宛这个民族国家相连，德语招牌被陆续取下，立陶宛语的路牌竖立起来。然而，平静是短暂的。1939年，纳粹德国发出最后通牒，重新吞并了这里。紧接着，二战席卷一切。1945年1月，当战争接近尾声时，这座城市经历了地狱般的轰炸和巷战，几乎被夷为平地。我们今天看到的色彩缤纷的老城，其底色其实是无尽的灰烬与悲伤。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战后的重建是一个缓慢而艰难的过程。克莱佩达被并入苏联立陶宛苏维埃社会主义共和国。重建的方针带着那个时代的印记：许多历史建筑被按照简化的、标准化的方式重建，失去了原有的繁复装饰，但至少，街道的脉络和基本的体量被保留了下来。更重要的是，来自立陶宛各地的新移民填补了离开的德意志人口，为城市注入了全新的活力。苏联时期，这里成了重要的渔港和造船中心，那种粗犷、务实的工业气息，与老城的古典骨架形成了另一种奇特的共生。直到1990年立陶宛恢复独立，克莱佩达老城才真正开始了基于历史考据的、精细化的修复之旅。人们从老照片和档案中寻找线索，小心翼翼地恢复山墙的线条、窗棂的样式和墙面的色彩。这不是为了回到“梅梅尔”的过去，而是为了确认“克莱佩达”自己独一无二、层叠复杂的历史身份。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味克莱佩达老城的层次感，建议你留出完整的一天。最佳抵达时间是早晨九点之前，这时旅游巴士和邮轮带来的大批一日游游客尚未涌入，阳光斜射，给鹅卵石街道和彩色的山墙涂上金色的镶边，整个老城安静得只能听到海鸥的叫声和自己的脚步声。整体游览节奏应该舒缓、漫无目的些，以剧院广场为圆心，在蛛网般的街道里随心所欲地迷失。上午专注于建筑外观、广场氛围和几个核心博物馆；中午在老城边缘的旧港区感受海洋气息并用餐；下午则留给小巷探索、咖啡时光和细节发现。这样的安排能让你同时捕捉到老城的历史肃穆与鲜活的生活脉搏。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季（尤其是周末）午后可能会有从邮轮下来的大量游客，主要集中在剧院广场主街，想拍安静的照片请尽量避开这个时段。老城的鹅卵石路对行李箱和高跟鞋极不友好，务必换上最舒适耐磨的平底鞋。记得去游客中心拿一份免费的老城地图，上面标注了所有历史建筑的编号和简要说明，能让你自助探索更有收获。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从地标性的剧院广场开始，先绕着中央的“安娜”喷泉走一圈，观察广场四周每一栋建筑山墙的独特表情和风向标。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进广场一侧的克莱佩达历史博物馆，花一小时看懂从条顿骑士团的木堡到苏联渔港的沧桑变迁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着“大水道街”向达涅河方向漫步，感受街道尺度变化，并留意脚下那些刻有商号标记的古老界石。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在旧港区安静的木制码头边驻足，看锈迹斑斑的渔船与优雅的古帆船并排停靠，听缆绳拍打桅杆的声音。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拐进“工匠街”，这里的建筑更低矮古朴，偶尔能透过敞开的门洞瞥见仍在工作的琥珀匠人或木工坊。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻访隐藏在僻静角落的“西蒙·达赫纪念地”，在这位17世纪诗人的小庭院里感受城市的文化根系。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到那座著名的“戏剧时钟”，在正点时分等待小门打开，观看出自立陶宛经典剧目的机械人偶表演。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，在广场边任意一家地下室咖啡馆坐下，点一杯立陶宛传统的“吉尔”啤酒或野生浆果茶，看夜幕如何缓缓为老城披上深蓝色的外衣。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`剧院广场东南角仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到六点的侧光能完美勾勒出彩色山墙的立体感和质感，将广场上行走的人物作为比例尺纳入构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“鱼餐厅”附近的老木桥`}</h4>
                  <p className="text-sm text-gray-700">{`清晨日出时分，从这里可以拍摄达涅河倒映着对岸老仓库砖墙的静谧画面，常有天鹅游过点睛。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“工匠街”中段的拱门巷道`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，光影在狭窄的巷道里切割出强烈的明暗对比，适合拍摄富有几何感的纵深感画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`旧港区的起重机与帆船同框`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚蓝调时刻，以巨大的橙色港口起重机为背景，对焦在前景的复古帆船上，形成工业与怀旧的对话。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`寻找有特色的门与门环`}</h4>
                  <p className="text-sm text-gray-700">{`老城许多古老木门上都有精美的金属门环，利用上午柔和的光线进行特写拍摄，捕捉历史的细微表情。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`克莱佩达的天气变幻莫测，一片云过来光线就可能完全改变，耐心是出片的关键。建议携带偏振镜，可以有效消除老建筑湿滑表面和鹅卵石的反光，让色彩更饱和。拍摄当地居民或手工艺人时，务必先微笑并征得同意，这里的人们友好但注重隐私。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`藏在老城边缘安静小巷里的“老港口”民宿，由一对老夫妇经营，房间虽小但一尘不染，清晨能听到从厨房传来的煎培根香味和收音机里的立陶宛民谣。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`“琥珀商人宅邸”精品酒店，由一栋18世纪的商人住宅修复而成，房间保留着原始的木质横梁和砖墙，早餐在有着拱形天花板的古老地窖里享用。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在达涅河对岸的“河畔套房”设计酒店，拥有俯瞰老城全景的绝佳露台，现代简约的风格与对岸的历史景观形成有趣反差，服务贴心至极。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`独特尝试`}</h4>
                  <p className="text-sm text-purple-800">{`预订一艘停泊在旧港区的历史驳船改造的“船屋”，晚上随着水波轻轻摇晃入睡，体验真正水手式的克莱佩达之夜。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（6-8月）是克莱佩达的旺季，住宿紧张且价格高昂，务必提前至少两个月预订。老城内部以石板路为主，拖行李会非常吃力，选择住宿时请仔细查看其与最近停车点或石板路尽头的距离。许多家庭式民宿不提供24小时前台服务，预订时请确认好入住时间安排。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开克莱佩达老城时，我的脑海里回响的不是某座伟大建筑的形象，而是一种混合的感觉：手指触摸古老砖石时的粗糙感，海风咸湿的气息，还有那种在废墟上重建家园的、平静而坚韧的嗡鸣声。这个地方教会我，历史不总是以辉煌胜利者的姿态存在，更多的时候，它是以伤疤、以修补的痕迹、以不同文化层勉强而倔强的共生状态呈现的。它不试图掩饰自己的复杂性，无论是德国的山墙、立陶宛的木窗，还是苏联时期留下的实用主义方块，都坦然地站在阳光下，构成一个真实的、活着的整体。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求极致纯净“古色古香”的旅游时代，克莱佩达老城就像一股清流。它不迎合任何人对“完美中世纪古镇”的幻想，它只是诚实地做自己——一个饱经风霜的港口，一个努力记住一切又必须向前看的社区。来这里，你不是为了消费一张明信片风景，而是为了聆听一段多声部的、有些嘶哑却无比真诚的史诗。它或许不会让你瞬间热血沸腾，但会在你离开后的某个瞬间，让你突然想起那条小巷里斜射的阳光，和那个在门口安静打磨琥珀的老人，然后心里涌起一种深刻的、关于时间与 resilient（韧性）的宁静。这，正是深度旅行者所追寻的，超越风景的灵魂对话。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/otranto-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥特朗托老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Otranto Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/danube-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    多
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">多瑙沃特古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Danube Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/old-town-craiova" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克拉约瓦老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Old Town Craiova</p>
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
