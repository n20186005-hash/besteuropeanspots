import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '乌尔齐尼 Ulcinj｜地中海海盗老巢与十里银滩的魔幻交响 - 最佳欧洲景点',
  description: '车子沿着海岸公路向南，当亚得里亚海那种教科书般的蓝开始混合进一种更野性、更不羁的气息时，乌尔齐尼就到了。你的第一眼绝不会错过它——老城像一头沉睡的史前巨兽，蜷伏在伸向大海的石灰岩岬角上，赭石色的城墙在烈日下泛着白光，与脚下拍岸的翡翠色海浪形成强烈对比。空气中不再只是海水咸味，还飘散着烤鱼的焦香、咖啡',
}

export default function UlcinjOldTownPirateBeachPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '黑山', href: '/destinations/europe' },
            { label: '乌尔齐尼', href: '/destinations/europe' },
            { label: '乌尔齐尼', href: '/attractions/ulcinj-old-town-pirate-beach' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`乌尔齐尼・Ulcinj・黑山・乌尔齐尼`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着海岸公路向南，当亚得里亚海那种教科书般的蓝开始混合进一种更野性、更不羁的气息时，乌尔齐尼就到了。你的第一眼绝不会错过它——老城像一头沉睡的史前巨兽，蜷伏在伸向大海的石灰岩岬角上，赭石色的城墙在烈日下泛着白光，与脚下拍岸的翡翠色海浪形成强烈对比。空气中不再只是海水咸味，还飘散着烤鱼的焦香、咖啡的浓醇，以及某种难以言喻的、混合了古老石头和干燥灌木的尘土气息。这里没有科托尔湾的精致童话感，而是一种粗粝的、带着刀疤的英俊。
走进老城，瞬间就从21世纪坠入了另一个时空。脚下是千百年来被无数鞋履和风雨打磨得光滑凹凸的石板路，窄得只容两人侧身而过。两侧石屋的墙壁厚得惊人，斑驳的表面留着各个时代的印记：可能是威尼斯统治时期的家族徽章残迹，也可能是一行模糊的奥斯曼土耳其语铭文。冷不丁从一个拱门穿出，眼前豁然开朗，一整片无垠的亚得里亚海蓝得像假的，直接撞进你的眼眶。海风呼啸着穿过城墙的垛口，发出呜呜的声响，那声音里仿佛还夹杂着几个世纪前海盗瞭望员的呼喊与船帆猎猎作响的回音。
最打动人的是它的“活”气。这里不是被精心供奉起来的遗址，而是当地人生活的一部分。阳台上晾晒着五颜六色的床单，某扇虚掩的门后传来电视新闻的声音，小猫在古老的喷泉边打盹。下午时分，男人们聚在广场唯一的咖啡摊，用小小的瓷杯喝着黑咖啡，下着永不结束的棋局。你会意识到，这座城的历史不是封存在玻璃柜里，它就流动在每一杯咖啡、每一次海风的吹拂和每一个居民慵懒的眼神里。它的核心魅力，就在于这种传奇过往与日常烟火气的无缝交织——一边是海盗劫掠的惊心动魄，一边是午后小憩的宁静平和，两种截然相反的节奏在这里达成了奇妙的和谐。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子沿着海岸公路向南，当亚得里亚海那种教科书般的蓝开始混合进一种更野性、更不羁的气息时，乌尔齐尼就到了。你的第一眼绝不会错过它——老城像一头沉睡的史前巨兽，蜷伏在伸向大海的石灰岩岬角上，赭石色的城墙在烈日下泛着白光，与脚下拍岸的翡翠色海浪形成强烈对比。空气中不再只是海水咸味，还飘散着烤鱼的焦香、咖啡的浓醇，以及某种难以言喻的、混合了古老石头和干燥灌木的尘土气息。这里没有科托尔湾的精致童话感，而是一种粗粝的、带着刀疤的英俊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走进老城，瞬间就从21世纪坠入了另一个时空。脚下是千百年来被无数鞋履和风雨打磨得光滑凹凸的石板路，窄得只容两人侧身而过。两侧石屋的墙壁厚得惊人，斑驳的表面留着各个时代的印记：可能是威尼斯统治时期的家族徽章残迹，也可能是一行模糊的奥斯曼土耳其语铭文。冷不丁从一个拱门穿出，眼前豁然开朗，一整片无垠的亚得里亚海蓝得像假的，直接撞进你的眼眶。海风呼啸着穿过城墙的垛口，发出呜呜的声响，那声音里仿佛还夹杂着几个世纪前海盗瞭望员的呼喊与船帆猎猎作响的回音。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动人的是它的“活”气。这里不是被精心供奉起来的遗址，而是当地人生活的一部分。阳台上晾晒着五颜六色的床单，某扇虚掩的门后传来电视新闻的声音，小猫在古老的喷泉边打盹。下午时分，男人们聚在广场唯一的咖啡摊，用小小的瓷杯喝着黑咖啡，下着永不结束的棋局。你会意识到，这座城的历史不是封存在玻璃柜里，它就流动在每一杯咖啡、每一次海风的吹拂和每一个居民慵懒的眼神里。它的核心魅力，就在于这种传奇过往与日常烟火气的无缝交织——一边是海盗劫掠的惊心动魄，一边是午后小憩的宁静平和，两种截然相反的节奏在这里达成了奇妙的和谐。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`乌尔齐尼`} />
                <InfoRow label="英文名称" value={`Ulcinj`} />
                <InfoRow label="正式名称" value={`Ulcinj Old Town`} />
                <InfoRow label="国家" value={`黑山`} />
                <InfoRow label="城市" value={`乌尔齐尼`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`地中海上最后一个臭名昭著的“巴巴里海盗”共和国，也是跨越罗马、斯拉夫、威尼斯与奥斯曼文明的战略与文化熔炉。`} />
                <InfoRow label="建筑特色" value={`一座从海中陡峭岩岬上“生长”出来的坚固石城，城墙与房屋仿佛与岩石本身融为一体，狭窄阶梯迷宫般盘旋，处处是面朝蔚蓝大海的惊人视野。`} />
                <InfoRow label="建筑风格" value={`地中海防御性城镇的典范，混合了粗粝的伊利里亚基石、威尼斯哥特式的窗户轮廓与优雅的奥斯曼帝国木质阳台和红瓦屋顶。`} />
                <InfoRow label="文化价值" value={`一个将海盗传奇、奴隶贸易史、多元宗教共存与纯粹的海洋休闲文化浓缩于一体的露天博物馆，展现了巴尔干半岛最南端复杂而迷人的身份认同。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`乌尔齐尼老城（城墙及公共区域）全天24小时开放。城内的小型博物馆和艺术画廊开放时间较为灵活，通常在夏季（5月至9月）的上午9点至晚上7点开放，冬季缩短为上午10点至下午4点，且周一可能闭馆。著名的“长滩”（Velika Plaža）是公共海滩，任何时候都可进入。建议出行前查阅具体场馆的临时公告，宗教节日期间部分设施可能关闭。`} />
              <InfoRow label="门票价格" value={`进入乌尔齐尼老城本身是免费的，漫步在城墙和街道上无需任何费用。老城内的考古博物馆门票约为2-3欧元。若想登上最高的城堡塔楼或进入某些特定修复的宅邸参观，可能需支付少量费用（约1-2欧元）。总的来说，这是一处对钱包极其友好的深度游目的地。`} />
              <InfoRow label="地址" value={`Stari grad, Ulcinj, Montenegro`} />
              <InfoRow label="交通方式" value={`最近的国际机场是黑山蒂瓦特机场（TIV）或阿尔巴尼亚的地拉那机场（TIA）。从蒂瓦特机场出发，最便捷的方式是提前预订租车或乘坐出租车（车程约1.5小时，费用较高）。更经济的选择是乘坐机场巴士到科托尔或布德瓦，再转乘前往乌尔齐尼的城际巴士。黑山沿海巴士线路发达，从布德瓦或巴尔出发，每小时都有班车前往乌尔齐尼，车程约1-1.5小时。从地拉那机场出发，可以乘出租车至斯库台湖附近再换车，过程稍复杂但也是一次冒险。自驾是最推荐的方式，沿着亚得里亚海公路南下，风景绝美。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "乌尔齐尼的故事，得从那些把这里当作家的“海上狼群”讲起。但早在海盗到来之前，伊利里亚人就在这块易守难攻的海岬上建立了据点。罗马人来了，称它为“奥尔齐尼乌姆”，把它变成繁荣的贸易站。然而，真正给它刻上独一无二印记的，是中世纪后期。随着威尼斯共和国与奥斯曼帝国在亚得里亚海争夺霸权，这片“三不管”地带成了冒险家的乐园。特别是从16世纪开始，这里逐渐演变成令人闻风丧胆的“乌尔齐尼海盗共和国”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些海盗可不是普通的海盗。他们许多人是被西班牙天主教势力驱逐的摩尔人和犹太人，精通航海与战斗，将乌尔齐尼变成了一个组织严密的海上劫掠王国。他们的目标主要是威尼斯和后来哈布斯堡王朝的商船，但最臭名昭著的是其奴隶贸易。被俘虏的船员和乘客会被带到老城中心的“奴隶广场”拍卖，其中不乏来自欧洲显赫家族的成员。传说，甚至有一位西班牙大文豪在此被短暂囚禁，这段经历后来成为了他笔下某个经典角色的灵感来源。海盗们用劫掠来的财富加固城墙，修建宅邸，使乌尔齐尼固若金汤，连强大的威尼斯海军也多次铩羽而归。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1571年，奥斯曼帝国最终征服了乌尔齐尼，但有趣的是，他们并没有摧毁这个海盗巢穴，而是聪明地将其纳为己用。海盗们成了苏丹的“非正式海军”，继续袭扰基督教船只。在奥斯曼统治的近三百年里，城市的文化面貌发生了深刻变化。清真寺的尖塔竖立起来，与原有的天主教堂钟楼比邻而立（尽管教堂大多被改建）。带有宽阔悬挑木阳台的奥斯曼风格住宅，点缀在了威尼斯式石屋之间。伊斯兰文化、斯拉夫文化、阿尔巴尼亚文化与残留的地中海拉丁文化在这里碰撞、融合，形成了独特的社会结构。城内甚至有一个专门的“犹太区”，显示出惊人的宗教宽容——毕竟在海上，实用主义往往胜过教条。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "19世纪，随着蒸汽船时代的到来和欧洲列强对海盗活动的严厉打击，乌尔齐尼的海盗黄金时代终于落幕。它先后归属黑山王国和南斯拉夫。二战后，作为社会主义南斯拉夫的一部分，它南面那长达十三公里的“长滩”被开发成了著名的天体浴场，吸引了来自全欧洲追求自由与阳光的游客。这段历史又为它增添了一层另类的文化色彩。1990年代南斯拉夫解体的动荡波及此地，但坚韧的乌尔齐尼再次挺了过来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如今漫步老城，你指尖触摸的每一块石头，都可能是海盗藏宝的墙壁，也可能是奥斯曼总督远眺的窗台。历史在这里不是线性的前进，而是层层叠叠的沉淀。战争、贸易、掠夺、信仰、休闲……所有这些人类活动的痕迹，都被大海的风盐腌制在了一起，酿成了乌尔齐尼这杯口感复杂、后劲十足的陈年烈酒。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要充分领略乌尔齐尼的日与夜，我强烈建议你在下午三点左右抵达。此时，最酷热难当的午时已过，阳光开始变得金黄柔软。整体游览可以耗时半天到一整天，节奏宜慢不宜快。先从老城外南侧的“海盗沙滩”（Mala Plaža）开始，用碧海蓝天的轻松模式开启旅程，然后带着一身海风盐味，从面朝大海的“海之门”进入老城，逆着光向上攀登。这样安排，你能在黄昏时分恰好登临城堡制高点，见证地中海落日将整座石城和浩瀚海面熔铸成金的魔法时刻。入夜后，老城广场和城墙边的餐馆亮起灯火，又是另一番迷人景象。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季正午的老城石巷如同烤箱，尽量避开11点到15点之间的时段进行高强度探索。一定要穿一双绝对舒适防滑的鞋子，那些古老石阶被磨得光滑且起伏不平。老城内商业设施有限，最好随身携带一瓶水和少量现金，虽然大部分餐馆和咖啡馆都接受信用卡。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先躺在老城脚下小巧的“海盗沙滩”上，让脚趾陷入深色沙粒，抬头仰望悬崖顶上那排沉默的堡垒与城墙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从最具画面感的“海之门”钻进老城内部，立刻陷入清凉与昏暗，眼睛需要几秒钟来适应石缝中透进来的缕缕阳光。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在曾经令人不寒而栗的“奴隶广场”中央稍作停留，触摸那棵可能见证过无数交易的老树，听风声代替了昔日的喧嚣。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`钻进小巷里不起眼的市立博物馆，看看从海底打捞上来的海盗船锚和来自各个文明的陶器碎片，拼接历史的拼图。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找那块被当地人称为“爱情故事”的奇特墙体，感受威尼斯与奥斯曼建筑风格如何在一面墙上尴尬又和谐地共存。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`手脚并用地爬上城堡最高处的瞭望塔，让360度的全景海风狠狠拥抱你，辨认远方阿尔巴尼亚海岸线的轮廓。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城墙西侧找一家悬空在岩石上的餐厅，点一盘用传统方式烤制的乌尔齐尼海鲜，等待夕阳把整个海面点燃。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果意犹未尽，趁着夜色沿着城墙漫步，看月光下的海面泛着银鳞，幻想古代海盗船是否会从这片光晕中悄然归来。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`“海盗沙滩”仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到六点，躺在沙滩上或用低角度广角镜头拍摄，将戏水的游人、深色沙滩、蔚蓝海水与巍峨耸立的老城悬崖一同纳入画框，构成完美的层次感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“奴隶广场”拱门光影`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，阳光斜射进广场入口的拱门，站在门内向外拍摄，拱门成为天然画框，框住广场上的人物剪影和远处波光粼粼的大海，故事感极强。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`威尼斯-奥斯曼“爱情墙”细节`}</h4>
                  <p className="text-sm text-gray-700">{`利用上午或下午的侧光，贴近拍摄那面混合了哥特式石雕窗框和奥斯曼木质阳台的墙壁，特写两种风格交接的缝隙，光线能突出石材的纹理和岁月的质感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城堡塔楼顶俯瞰长滩`}</h4>
                  <p className="text-sm text-gray-700">{`日落时分，在塔楼西侧用长焦镜头拍摄，可以将脚下老城的红瓦屋顶作为前景，中景是蜿蜒的城墙剪影，远景是绵延至天际线的“长滩”和在上面漫步的微小人群，画面极具张力。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`码头渔船与老城夜景`}</h4>
                  <p className="text-sm text-gray-700">{`日落后蓝色时刻，在老城下方的现代码头区，以停泊的彩色小渔船为前景，拍摄灯火初上的古老城堡倒映在平静的海水中，冷暖色调对比鲜明。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`老城居民生活于此，拍摄街景和人物时请保持尊重，最好先微笑示意或征得同意。想要捕捉小巷中迷人的光影对比，建议使用相机并准备好大光圈镜头，因为巷内光线较暗。无人机飞行在理论上需要许可，且强劲的海风对飞行器是个挑战，需格外谨慎。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`老城石屋民宿`}</h4>
                  <p className="text-sm text-blue-800">{`直接住在老城墙内由数百年历史石屋改造的公寓里，夜晚游人散去后，你独享整座古城的海风与星空，能听到最纯粹的历史回响。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`“海盗沙滩”畔设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`出门即是沙滩，拥有直面老城悬崖的无敌景观阳台，现代舒适的设施与古老的背景形成有趣对话，适合既爱历史又离不开便利的旅行者。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`宁静海岬精品酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`位于老城西侧 quieter 的海岬上，由传统别墅改造，每个房间都有独特的海景视角，提供宁静隐秘的度假体验，步行至老城仅十分钟。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`“长滩”起点处的设计型民宿`}</h4>
                  <p className="text-sm text-purple-800">{`如果你想体验世界级长滩的辽阔，可以选择北端起点处的时髦民宿，清晨可以成为第一个在十三公里沙滩上留下脚印的人，享受绝对的孤独与自由。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（七月八月）是绝对旺季，务必提前数月预订，尤其是老城内的稀有房源。住在老城内虽然体验绝佳，但需要提着行李爬一段石阶，且夜间娱乐选择较少，喜欢热闹的话可以考虑老城下方的海滨区。无论住在哪里，都请准备好防蚊液，滨海地区的蚊子颇为热情。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开乌尔齐尼好些天了，但闭上眼睛，那种感觉还在——是粗糙石壁划过掌心的触感，是海风裹挟的远古咸味，是黄昏时分金色光线里飞舞的尘埃。这个地方教会我一件事：历史并非总是庄严沉重的教科书，它也可以是狂野的、浪漫的，甚至带着一丝危险的诱惑。乌尔齐尼不屑于扮演一个完美无瑕的明信片小镇，它坦然展示着自己的伤疤（海盗的、战争的）与荣耀，让阳光和海水一起为它们镀上光泽。在这里，你感受到的是一种强大的生命力，一种文明无论经历多少次碰撞、摧毁与重建，依然能牢牢扎根于岩石之上、面向大海生生不息的力量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当今这个高度同质化、被精心策划过的旅行时代，乌尔齐尼是一剂清醒剂。它不迎合，不粉饰，只是静静地在那里，把它复杂迷人的多层身世摊开给你看。从海盗的烽烟到游客的比基尼，从奴隶市场的哭喊到咖啡馆里的笑语，这种极致的反差与共存，正是深度旅行的精髓所在。它邀请你不是来“打卡”，而是来“解读”，来感受时间如何像海浪一样，一层层冲刷塑造出一个地方的灵魂。所以，如果你厌倦了那些过于完美的风景，渴望一场带着咸味、阳光和古老传说的真正冒险，那么，请一定来乌尔齐尼。让地中海的最后一片海盗故土，告诉你关于自由、生存与融合的，另一个版本的故事。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/sveti-stefan" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣斯特凡岛</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sveti Stefan</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/budva-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布德瓦老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Budva Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ostrog-monastery" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥斯特罗格修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ostrog Monastery</p>
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
