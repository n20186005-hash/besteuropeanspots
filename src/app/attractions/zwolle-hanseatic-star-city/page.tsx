import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '兹沃勒 Zwolle｜被星形运河环绕的活着的汉萨名城 - 最佳欧洲景点',
  description: '想象一下，清晨七点，整座城市还在薄雾与睡梦中。你从火车站走出来，绕过几个弯，一道宽阔的水面突然横在眼前。这不是普通的河道，而是笔直如尺、平静如镜的古老护城河，河对岸，一排排带阶梯山墙的砖红色房子在晨光里泛着暖色。空气凉丝丝的，带着水汽和青草的味道，安静得只能听见自己踩在桥板上咚咚的声响，以及远处几声...',
}

export default function ZwolleHanseaticStarCityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '荷兰', href: '/destinations/netherlands' },
            { label: '兹沃勒', href: '/attractions/zwolle-hanseatic-star-city' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`兹沃勒・Zwolle・荷兰・兹沃勒`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下，清晨七点，整座城市还在薄雾与睡梦中。你从火车站走出来，绕过几个弯，一道宽阔的水面突然横在眼前。这不是普通的河道，而是笔直如尺、平静如镜的古老护城河，河对岸，一排排带阶梯山墙的砖红色房子在晨光里泛着暖色。空气凉丝丝的，带着水汽和青草的味道，安静得只能听见自己踩在桥板上咚咚的声响，以及远处几声清脆的自行车铃。这座名为兹沃勒的古城，就这样被一道完美的星形水环静静地拥抱着，像一颗被时光妥善保管的琥珀。
当你走过桥梁，穿过依然保存着厚重木门的城门，便正式踏入了它的心跳。上午九十点钟，城市醒来了。运河边开始有慢跑的人，咖啡馆摆出了露天座椅，奶酪店卸下了门板，那股浓烈又醇厚的奶香瞬间飘满小巷。这里的感觉和阿姆斯特丹或乌得勒支截然不同——游客稀稀拉拉，主角是本地人。你会看到西装革履的律师骑着自行车去上班，主妇们在有顶棚的古老市集里挑选鲜花，学生们坐在运河边的矮墙上晒着太阳看书。那座名为“佩珀库尔”的倾斜塔楼，就像一个顽皮的老哨兵，歪着头，注视着脚下这个既古老又充满活力的日常剧场。
兹沃勒最迷人的，正是这种“活着的”质感。它的历史不是被封存在玻璃罩里供人远观的，而是被编织进了每一条铺着鹅卵石的小巷、每一家藏着惊喜的设计师买手店、甚至每一个飘着拿铁香味的角落。中世纪的教堂钟声准时敲响，但钟声之下，可能是广场上正在举办的露天美食节。你在欣赏15世纪商人豪宅的精美山墙时，一转头，发现它的一楼现在是家极简风格的北欧家居店。这种穿越时空的对话，毫无违和感，反而生出一种奇妙的温暖与生动。
到了傍晚，当夕阳把星形运河染成一条流动的金带，整个城市会陷入一种温柔的宁静。当地人或许会带着一瓶啤酒，坐在古老的防御土墙斜坡上，看鸭子在金光粼粼的水面划出一道道涟漪。这时你会明白，兹沃勒的核心魅力不在于某个震撼的单体建筑，而在于它作为一个完整有机体的和谐。它让你看到一个历史名城，如何在今天，依然能够充满尊严、惬意且充满创意地“生活”下去，而不是仅仅“存在”着。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下，清晨七点，整座城市还在薄雾与睡梦中。你从火车站走出来，绕过几个弯，一道宽阔的水面突然横在眼前。这不是普通的河道，而是笔直如尺、平静如镜的古老护城河，河对岸，一排排带阶梯山墙的砖红色房子在晨光里泛着暖色。空气凉丝丝的，带着水汽和青草的味道，安静得只能听见自己踩在桥板上咚咚的声响，以及远处几声清脆的自行车铃。这座名为兹沃勒的古城，就这样被一道完美的星形水环静静地拥抱着，像一颗被时光妥善保管的琥珀。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你走过桥梁，穿过依然保存着厚重木门的城门，便正式踏入了它的心跳。上午九十点钟，城市醒来了。运河边开始有慢跑的人，咖啡馆摆出了露天座椅，奶酪店卸下了门板，那股浓烈又醇厚的奶香瞬间飘满小巷。这里的感觉和阿姆斯特丹或乌得勒支截然不同——游客稀稀拉拉，主角是本地人。你会看到西装革履的律师骑着自行车去上班，主妇们在有顶棚的古老市集里挑选鲜花，学生们坐在运河边的矮墙上晒着太阳看书。那座名为“佩珀库尔”的倾斜塔楼，就像一个顽皮的老哨兵，歪着头，注视着脚下这个既古老又充满活力的日常剧场。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`兹沃勒最迷人的，正是这种“活着的”质感。它的历史不是被封存在玻璃罩里供人远观的，而是被编织进了每一条铺着鹅卵石的小巷、每一家藏着惊喜的设计师买手店、甚至每一个飘着拿铁香味的角落。中世纪的教堂钟声准时敲响，但钟声之下，可能是广场上正在举办的露天美食节。你在欣赏15世纪商人豪宅的精美山墙时，一转头，发现它的一楼现在是家极简风格的北欧家居店。这种穿越时空的对话，毫无违和感，反而生出一种奇妙的温暖与生动。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了傍晚，当夕阳把星形运河染成一条流动的金带，整个城市会陷入一种温柔的宁静。当地人或许会带着一瓶啤酒，坐在古老的防御土墙斜坡上，看鸭子在金光粼粼的水面划出一道道涟漪。这时你会明白，兹沃勒的核心魅力不在于某个震撼的单体建筑，而在于它作为一个完整有机体的和谐。它让你看到一个历史名城，如何在今天，依然能够充满尊严、惬意且充满创意地“生活”下去，而不是仅仅“存在”着。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`兹沃勒`} />
                <InfoRow label="英文名称" value={`Zwolle`} />
                <InfoRow label="正式名称" value={`Zwolle`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`兹沃勒`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`荷兰保存最完好的汉萨同盟城市之一，其独特的星形运河防御体系见证了中世纪北荷兰的贸易繁荣与军事智慧。`} />
                <InfoRow label="建筑特色" value={`由一圈完整的星形运河与防御工事环绕的紧凑古城，城内密布着山形墙砖宅、幽静庭院和蜿蜒小巷，天际线由数座中世纪高塔主宰。`} />
                <InfoRow label="建筑风格" value={`以哥特式和荷兰文艺复兴风格为主，砖砌建筑与阶梯式山形墙构成典型荷兰城市风貌，防御工事则体现了文艺复兴时期的军事工程学。`} />
                <InfoRow label="文化价值" value={`一座将辉煌历史与生动当下完美融合的“活着”的博物馆，在这里，中世纪汉萨商人的遗产与荷兰人现代、务实、充满设计感的生活方式和谐共鸣。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城区域全天开放，城内各景点开放时间各异。主要景点如哥利亚故居博物馆开放时间为周二至周日 10:00 - 17:00。佩珀库尔塔楼开放时间一般为周二至周日 11:00 - 16:00，登塔时间需单独确认。圣母教堂通常在下午对游客开放（13:00-17:00）。大部分商店周一上午可能歇业，但每周四和周六上午有热闹的市集。具体景点开放时间可能随季节（冬季可能缩短）和节假日调整，出行前务必查询官网。`} />
              <InfoRow label="门票价格" value={`进入古城及运河沿岸漫步免费。主要景点单独售票：哥利亚故居博物馆成人票约12欧元；佩珀库尔塔楼登塔票约4欧元；圣母教堂参观通常为捐赠性质。持有荷兰博物馆卡可免费参观合作博物馆。部分景点对12岁以下儿童免费，学生及65岁以上老人可能有折扣。推荐购买“兹沃勒欢迎卡”，可享受多个景点及餐饮的折扣组合。`} />
              <InfoRow label="地址" value={`Grote Markt, 8011 LW Zwolle, Netherlands`} />
              <InfoRow label="交通方式" value={`从阿姆斯特丹史基浦机场出发最为方便。在机场火车站乘坐直达兹沃勒的区间快车（Sprinter），车程约1小时15分钟，班次频繁，每小时有多趟列车，建议使用荷兰公共交通卡（OV-chipkaart）刷卡进出站。从阿姆斯特丹中央火车站出发，有直达的城际列车（IC），车程约1小时10分钟。兹沃勒火车站位于古城边缘，步行5-10分钟即可进入古老的城门。若自驾前往，古城外围有多个P+R（停车换乘）停车场，如“P+R Hanzeland”，停车后步行或搭乘接驳巴士进入市中心，古城内停车位紧张且昂贵。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`兹沃勒的故事，始于八百多年前艾瑟尔河畔的一片沼泽高地。“Zwolle”这个名字本身就源于“山丘”，最早的定居者在这片干燥的土地上建起了最初的圣堂。但真正让它登上历史舞台的，是13世纪那张入会邀请——汉萨同盟。这个由北欧商业城市组成的强大联盟，就像中世纪版的欧盟加北约，为兹沃勒打开了通向波罗的海和北海贸易的黄金大门。想象一下，14、15世纪的兹沃勒港口，桅杆如林，来自吕贝克的毛皮、卑尔根的鱼干、俄国的蜂蜡在这里堆积如山，而荷兰的布匹、盐和啤酒则被运往远方。财富如运河之水般源源流入，城里的商人们竞相修建起炫耀财富的砖石豪宅，哥特式的圣母教堂拔地而起，城市规模迅速扩张。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，财富也带来了觊觎。在那个战乱频仍的年代，没有城墙的城市就像没有壳的蜗牛。于是，一场持续百年的“筑壳”工程开始了。兹沃勒人没有简单地筑起一圈围墙，他们展现了惊人的前瞻性——利用低洼的地势，开挖了一道宽阔的星形护城河系统。这不仅仅是一道水沟，它是一套结合了水利工程与军事防御的杰作。五角星形的设计确保了没有任何防御死角，每一面城墙都能得到相邻两面火力的交叉掩护。河水可以引入，也可以排出，在必要时能淹没周边地区，形成一片汪洋屏障。到16世纪初，这道全长近四公里的星形水环终于合拢，将兹沃勒变成了一个近乎无敌的水上堡垒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城市的守护神，或许要算那位名叫托马斯·肯皮斯的僧侣。这位《效法基督》的作者，虽然一生大部分时间在兹沃勒附近的修道院潜心著述，但他的精神遗产却深深影响了这座城市的气质。他的思想强调内省与灵修，与兹沃勒商人务实、勤奋的作风形成了一种微妙的平衡。黄金世纪（17世纪），兹沃勒虽不如阿姆斯特丹耀眼，却依然是重要的内陆贸易中心和出版业重镇。宁静的运河边，也许就藏着某位哲学家或地图绘制家的作坊。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`19世纪，随着铁路时代的到来和战争形态的改变，星形防御工事失去了军事价值。但兹沃勒人没有像许多城市那样填平运河以拓展空间，他们做出了一个充满智慧的决定：改造它。堡垒被推平，变成了环绕城市的带状公园；防御土墙成了绿草如茵的散步道；护城河则成了风景如画的城市缎带。这场“由剑变犁”的改造，让历史遗产完美转型为市民的休闲空间。二战期间，古城幸运地躲过了大规模破坏，大量中世纪建筑得以存留。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的兹沃勒，是这段层层累积历史的集大成者。汉萨时代的商业基因，让它对创新和设计保持开放；堡垒时代的严谨规划，赋予了它清晰有序的城市肌理；而那份源自托马斯·肯皮斯的內向气质，则让它保持了一份不随波逐流的沉静与自信。走在城中，你脚下的每一块砖，窗前的每一道水，都在无声地讲述着这个关于贸易、信仰、防御与重生的漫长故事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在清晨（9点前）抵达，用一天时间（约8-9小时）慢速、沉浸式地品味兹沃勒。上午侧重感受古城的静谧与宏伟结构，从外围的星形运河开始，由外向内探索，光线最佳，人也最少。中午至下午深入城市心脏，逛市集、探小店、参观核心室内景点，感受它的生活脉搏。傍晚则留给运河夕阳与城墙漫步，体验从喧嚣复归宁静的节奏变化。这样的安排顺应了光线的变化，也契合了城市自身的呼吸韵律。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周四和周六上午的市集是体验当地生活的绝佳窗口，但此时主广场会非常拥挤，看好个人物品。古城内几乎所有街道都适合步行，但小巷路面多为鹅卵石，请务必穿一双舒适防滑的鞋子。许多精品小店和餐厅可能下午6点后就关门了，计划购物或晚餐要趁早。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从火车站出发，沿着“生态护城河”的指示牌，先完整地走一段东南侧的星形运河岸，看阳光如何一点点点燃对岸老房子的山墙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从萨森门这座雄伟的文艺复兴城门进入古城，摸一摸那厚重木板上的铁钉，想象汉萨商队从此进出的景象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直走向高耸的圣母教堂，别急着进去，先绕到教堂后方那个被古老建筑围合的秘密庭院，感受一下绝对的中世纪寂静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在教堂内部抬头寻找那架华丽的管风琴，然后静坐片刻，等待整点的钟声在巨大的空间里轰鸣、回荡、直至消散。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`前往哥利亚故居博物馆，在这座最华丽的商人宅邸里，不要错过顶楼那间用数千张德尔夫特蓝瓷片装饰的惊奇房间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`逛一逛大广场周四或周六的露天市集，买一份新鲜的鲱鱼三明治或一块带着焦糖层的“兹沃勒甜派”，和当地人一起站在路边吃完。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一家运河边的咖啡馆坐下，什么都不做，就看驳船缓缓通过低矮的桥洞，自行车铃声在两岸叮当作响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`赶在日落前，爬上“罗德托伦”那段保留的古城墙斜坡，找一处草坪坐下，看着夕阳将整个星形运河系统勾勒成一幅发光的几何画。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`萨森门水畔倒影`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在城门外的桥边，利用平静的运河水面拍摄城门及其完美倒影，对称构图尽显古典与宁静。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`佩珀库尔塔楼街巷视角`}</h4>
                  <p className="text-sm text-gray-700">{`从“Melkmarkt”小巷向东北方向望去，可以拍到那座倾斜的塔楼夹在两排山形墙老宅之间的经典画面，下午的阳光能勾勒出建筑的立体感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`星形运河航拍点（模拟）`}</h4>
                  <p className="text-sm text-gray-700">{`登上圣母教堂塔楼（如果开放）或“Het Bastion”酒店高层餐厅，从高处俯瞰，可以清晰地拍出古城被完整星形运河环绕的震撼地理格局。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`哥利亚故居山墙细节`}</h4>
                  <p className="text-sm text-gray-700">{`将镜头对准这座博物馆精致繁复的阶梯式山墙，聚焦于那些石雕装饰和彩色玻璃窗，利用侧光（上午或下午）展现砖石的质感和雕刻的深度。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`罗德托伦城墙俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`日落时分，站在这段城墙的制高点，向西拍摄，可以将运河、老城屋顶、远处的现代城区一同纳入镜头，冷暖色调对比极具故事感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`荷兰天气多变，善用阴天柔和的光线拍摄建筑细节和街道氛围，雨后的鹅卵石路面反光也很美。拍摄当地人尤其是市集商贩时，请务必先微笑示意并获得同意，荷兰人通常友善但注重隐私。无人机飞行在古城上空有严格限制，基本禁止，请勿尝试。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`设计爱好者之选`}</h4>
                  <p className="text-sm text-blue-800">{`由古老运河仓库改造的设计酒店，保留了原始的砖墙和木梁，但内部是清爽的北欧风，房间窗户正对着缓缓流动的河水。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史沉浸体验`}</h4>
                  <p className="text-sm text-green-800">{`位于一栋17世纪商人住宅内的精品酒店，房间天花板有着精美的彩绘横梁，楼梯窄陡充满年代感，早餐在带壁炉的古老客厅享用。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`现代舒适据点`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在古城边缘现代化建筑里的高端酒店，拥有开阔的屋顶酒吧，可以一边小酌一边欣赏古城天际线和星形运河的全景，闹中取静。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`亲切民宿体验`}</h4>
                  <p className="text-sm text-purple-800">{`藏在某条安静小巷里的家庭经营民宿，主人会为你手绘美食地图，早晨厨房飘来现烤华夫饼的香味，像住在荷兰朋友家里一样自在。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古城内的住宿数量有限且非常受欢迎，尤其是周末和夏季，务必提前数月预订。住在古城内固然方便，但选择紧邻星形运河外侧的酒店，往往能以更优的价格获得同样美妙的古城景观，且更加安静。兹沃勒治安很好，但老建筑隔音可能一般，对睡眠环境要求极高的旅人可以选择古城外更新的酒店。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开兹沃勒好些天了，但闭上眼睛，脑海里浮现的不是某个具体的建筑画面，而是一种整体的、宁静而丰盈的感觉。它不像那些被游客洪流淹没的世界名城，需要你奋力拨开人群才能瞥见历史的一角。在这里，历史是背景，也是日常。你可以从容地呼吸，漫无目的地游走，让发现惊喜的节奏完全由自己掌控。这种“可亲近的深度”，在当今过度旅游化的欧洲，显得尤为珍贵。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座城市教会我，最好的遗产保护，不是把过去做成标本，而是让它持续为今天的生活提供养分、美感和灵感。兹沃勒的星形运河，从抵御敌人的刀剑，变成了滋养市民心灵的绿带；它的古老宅邸，从储存货物的仓库，变成了孵化创意的工作室。它证明了，一座城市完全可以既古老又年轻，既厚重又轻盈。对于厌倦了打卡式旅行、渴望真正融入一地脉搏的深度游者来说，兹沃勒就是这样一个理想国。它不会用惊世骇俗的景观冲击你，却会用一种温和而持久的力量，邀请你慢下来，看水，看云，看人们如何把日子过得像运河般平静而自有方向。这是一次对“慢旅行”意义的完美诠释，也是一次与荷兰历史、乃至与一种更自洽生活方式的深情拥抱。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/lesund" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥勒松老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ålesund</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/szentendre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣安德烈（艺术小镇）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Szentendre</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/grado" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格拉多古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Grado</p>
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
