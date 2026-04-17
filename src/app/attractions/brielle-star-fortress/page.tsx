import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布里勒 Brielle｜荷兰独立第一枪，漫步在完美的星形水城防御工事中 - 最佳欧洲景点',
  description: '当你从现代火车站走出来，沿着一条平静的林荫道步行不到十分钟，一座古老的砖砌水门会突然出现在眼前。穿过那道幽暗的门洞，时间仿佛被瞬间调慢了四百年。首先包裹你的是一种由湿润空气、古老砖石和淡淡水藻混合而成的特殊气味——这是典型荷兰水城的气息，沉静而绵长。眼前豁然开朗，一条宽阔的运河静静流淌，两岸是色彩柔...',
}

export default function BrielleStarFortressPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '布里勒', href: '/attractions/brielle-star-fortress' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`布里勒・Brielle・荷兰・布里勒`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你从现代火车站走出来，沿着一条平静的林荫道步行不到十分钟，一座古老的砖砌水门会突然出现在眼前。穿过那道幽暗的门洞，时间仿佛被瞬间调慢了四百年。首先包裹你的是一种由湿润空气、古老砖石和淡淡水藻混合而成的特殊气味——这是典型荷兰水城的气息，沉静而绵长。眼前豁然开朗，一条宽阔的运河静静流淌，两岸是色彩柔和、山形墙精美的联排房屋，它们的倒影在水面被微风揉碎又拼起。没有蜂拥的游客，只有本地人骑着自行车清脆的铃声划过，或是一位老人临窗修剪着他的天竺葵。这里的节奏是心跳般平稳的。
你会立刻注意到这座城市与众不同的“形状”。沿着运河走，明明感觉是直线，却总在不经意间拐弯，而当你登上任意一座古老的城墙，谜底便揭晓了——整个城市被一道星芒状的水系与土垒严密地环绕着。这不是自然形成的村落，而是一件精心设计的军事杰作。棱角分明的棱堡像巨人的拳头伸向水面，而平静的护城河在四百年前是令人望而生畏的死亡陷阱。如今，这些壁垒成了绝佳的散步道，上面长满了野花，市民在这里慢跑、遛狗。战争与和平，在这里完成了最诗意的交接。
最打动人的，是历史以一种活生生的方式在这里呼吸。它不是被封存在玻璃柜里的古董。每年4月1日，全城会陷入一场盛大的狂欢，人们穿着16世纪的服装，重演“海上乞丐”攻占城市的戏剧，孩子们的笑声回荡在曾经架设火炮的城墙上。在平常日子里，你可以在集市广场的咖啡馆外坐下，看着市政厅那庄严的立面，想象1572年那个改变命运的春天，一群衣衫褴褛的水手就是在这里宣布了对西班牙统治的反抗。这座城市的核心魅力，正是一种低调的骄傲：它知道自己是这个国家故事的首页，却从不张扬，只是静静躺在水与光中，等你来阅读。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你从现代火车站走出来，沿着一条平静的林荫道步行不到十分钟，一座古老的砖砌水门会突然出现在眼前。穿过那道幽暗的门洞，时间仿佛被瞬间调慢了四百年。首先包裹你的是一种由湿润空气、古老砖石和淡淡水藻混合而成的特殊气味——这是典型荷兰水城的气息，沉静而绵长。眼前豁然开朗，一条宽阔的运河静静流淌，两岸是色彩柔和、山形墙精美的联排房屋，它们的倒影在水面被微风揉碎又拼起。没有蜂拥的游客，只有本地人骑着自行车清脆的铃声划过，或是一位老人临窗修剪着他的天竺葵。这里的节奏是心跳般平稳的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你会立刻注意到这座城市与众不同的“形状”。沿着运河走，明明感觉是直线，却总在不经意间拐弯，而当你登上任意一座古老的城墙，谜底便揭晓了——整个城市被一道星芒状的水系与土垒严密地环绕着。这不是自然形成的村落，而是一件精心设计的军事杰作。棱角分明的棱堡像巨人的拳头伸向水面，而平静的护城河在四百年前是令人望而生畏的死亡陷阱。如今，这些壁垒成了绝佳的散步道，上面长满了野花，市民在这里慢跑、遛狗。战争与和平，在这里完成了最诗意的交接。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，是历史以一种活生生的方式在这里呼吸。它不是被封存在玻璃柜里的古董。每年4月1日，全城会陷入一场盛大的狂欢，人们穿着16世纪的服装，重演“海上乞丐”攻占城市的戏剧，孩子们的笑声回荡在曾经架设火炮的城墙上。在平常日子里，你可以在集市广场的咖啡馆外坐下，看着市政厅那庄严的立面，想象1572年那个改变命运的春天，一群衣衫褴褛的水手就是在这里宣布了对西班牙统治的反抗。这座城市的核心魅力，正是一种低调的骄傲：它知道自己是这个国家故事的首页，却从不张扬，只是静静躺在水与光中，等你来阅读。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`布里勒`} />
                <InfoRow label="英文名称" value={`Brielle`} />
                <InfoRow label="正式名称" value={`Brielle`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`布里勒`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`1572年4月1日，“海上乞丐”占领布里勒，这一事件被普遍视为荷兰成功反抗西班牙哈布斯堡王朝统治的起点，是尼德兰独立战争（八十年战争）中首个被永久收复的城市，具有无可替代的象征意义。`} />
                <InfoRow label="建筑特色" value={`一座几乎被完整保存的星形防御工事，由厚重的城墙、多棱堡、宽阔的护城河及古老水闸系统构成，整个城市轮廓如同一颗落在水中的几何星星。`} />
                <InfoRow label="建筑风格" value={`以文艺复兴时期军事工程学为主导的防御建筑，融合了后期修复的荷兰古典主义与砖砌哥特式民用建筑风格。`} />
                <InfoRow label="文化价值" value={`它是荷兰国家身份认同的奠基之石，其“愚人节胜利”（1 April!）的庆典传统深植于国民记忆，生动展现了低地国家人民如何利用水文地理捍卫自由。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城公共区域全天开放。核心历史博物馆（历史博物馆德范·特龙彭）开放时间为周二至周日，上午10点至下午5点；冬季（11月至3月）开放时间缩短，并可能逢周一闭馆。重要节假日如圣诞节、元旦可能关闭。护城墙和城门可自由通行，但部分塔楼内部仅在特定导览团开放。`} />
              <InfoRow label="门票价格" value={`进入布里勒古城本身完全免费。主要收费点为历史博物馆德范·特龙彭，成人票约8.5欧元，65岁以上及学生票约6.5欧元，12岁以下儿童免费。持有博物馆卡（Museumkaart）可免费进入。部分季节性组织的城墙步行导览团价格在10-15欧元不等。`} />
              <InfoRow label="地址" value={`Historische Museum Den Briel, Markt 1, 3231 AH Brielle, Netherlands`} />
              <InfoRow label="交通方式" value={`从阿姆斯特丹史基浦机场出发，最便捷的方式是乘坐火车。在机场火车站乘坐前往鹿特丹中央车站的城际列车，约30分钟抵达鹿特丹后，换乘前往罗森达尔方向的Sprinter慢车，在“Brielle”站下车（约30-35分钟）。从鹿特丹中央车站直接出发总车程约50分钟。火车班次频繁，通常每15-30分钟一班。建议使用OV-chipkaart或通过NS（荷兰铁路）App购票。从布里勒火车站步行至古城核心区仅需10分钟，沿途风景宜人。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解布里勒为何如此重要，得把时钟拨回16世纪中叶的尼德兰。这片富庶的低地省份当时正处在西班牙国王腓力二世的沉重统治之下，严苛的税收和残酷的宗教迫害让不满情绪如地火般蔓延。一群反抗者，其中许多是被驱逐的新教水手和海盗，组成了所谓的“海上乞丐”（Geuzen）游击队，在北海沿岸神出鬼没。他们最初像丧家之犬，屡战屡败，直到1572年的春天，命运之神给了他们一个戏剧性的机会。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当时，一阵强烈的风暴将一支由24艘船组成的“海上乞丐”舰队吹离了航线，迫使他们寻找避风港。他们原本的目标并非布里勒，但阴差阳错下，他们发现这座当时由西班牙驻军把守的小城防御竟出乎意料的薄弱。更巧的是，守军指挥官当时恰好不在城中。在领袖吕梅·德·拉·马克和威廉·范·德·马克的带领下，这些绝望的战士于4月1日发动了突袭。一场混战后，西班牙守军出乎意料地迅速投降了。讽刺的是，这一天是愚人节。当消息传到西班牙总督阿尔瓦公爵耳中时，他轻蔑地认为这只是个无关紧要的愚人节笑话。但这个“笑话”，却点燃了燎原之火。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`占领布里勒，是一个前所未有的心理与现实双重胜利。这是反抗军夺取并成功守住的第一个城镇，它提供了一个稳固的据点，并向所有尼德兰人证明：强大的西班牙军队是可以被击败的。很快，一个接一个的城镇宣布支持奥兰治亲王威廉，反抗浪潮由此汹涌而起。布里勒，这个原本普通的小港口，一夜之间成了自由象征。正因如此，西班牙人随后发起了疯狂反扑，企图夺回这颗“叛逆的心脏”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这就引出了我们今天看到的星形城市的由来。在独立战争期间及之后的和平年代，荷兰人运用他们登峰造极的水利和军事工程技术，将布里勒彻底改造。原有的中世纪城墙被拆除，取而代之的是一套更为先进的、基于几何学原理的防御系统：巨大的土制棱堡、倾斜的城墙（幕墙）、深邃的护城河以及复杂的水闸控制系统。这套设计能让防守方形成无死角的交叉火力，而必要时可以引海水淹沒城市周边的低地，形成一片汪洋。此后的几个世纪，虽然战火远去，但这座城市作为关键要塞的地位一直延续到拿破仑时代。幸运的是，它从未经受彻底的摧毁，使得这套文艺复兴晚期的军事建筑杰作得以近乎完整地保存至今，像一个凝固在时光中的战略模型，向我们无声诉说着智慧与生存的故事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`理想的布里勒深度游览需要预留一整天时间（约6-8小时）。建议在上午9点前抵达，这时阳光柔和，古城刚刚苏醒，商铺陆续开门，你能捕捉到最宁静的市井画面。游览节奏宜慢不宜快，核心在于“环绕”与“深入”的结合：先沿着星形护城河外围漫步，从整体上把握城市的几何形态；然后深入城内迷宫般的街巷，探访具体的历史节点；最后登高俯瞰，将一切串联起来。这样的安排能让你从宏观到微观，全方位感受这座水城的防御智慧与生活气息。记得穿一双舒适的步行鞋，因为最好的风景都在步行的探索中。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城内石板路和城墙土路对婴儿车和轮椅不太友好，计划行程时需考虑同行者的身体状况。
许多小型博物馆和塔楼内部仅在下午1点至4点开放，且可能依赖志愿者，行程安排最好灵活一些。
当地餐馆打烊时间较早，若计划用晚餐，最好在晚上7点前寻找餐厅。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从南边的“Zwartewaal门”进入古城，立刻让自己沉浸在被高大砖墙包围的静谧感和脚下磨光的卵石路面上。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着“Voorstraat”主街慢慢向北逛，留意两侧山形墙建筑上各不相同的装饰性阶梯和石刻年份，它们是无声的家族史书。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在“Markt”集市广场停下，坐在露天咖啡馆观察市政厅的文艺复兴立面，并想象1572年4月1日这里人声鼎沸的历史场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观广场上的“历史博物馆德范·特龙彭”，花一个小时了解“海上乞丐”的故事，看看那艘著名的模型船和当时的武器与地图。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻访古老的“圣凯瑟琳教堂”，走进其简洁而庄严的内部，爬上塔楼（如果开放），感受从制高点俯瞰星形城郭的震撼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂出来后，随意钻进一条通往城墙的小巷，登上“Noordpoort”棱堡或“Langepoort”棱堡，沿着宽阔的城墙顶漫步，看护城河环绕全城。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城墙散步道的半途，找一条通往水边的台阶坐下，看着天鹅和小船静静划过，感受防御工事如何化为市民的休闲公园。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前，从“Stenen Baak”这座古老的灯塔附近走出城外，从对岸的草坪回望整个布里勒的剪影，看星形轮廓在暮色中被灯火逐一点亮。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`“Voorstraat”运河拱桥边`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，阳光斜射时，蹲低身子用广角镜头捕捉石桥、彩色房屋及其在水中的完美倒影，构成一幅对称的油画。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“Noordpoort”棱堡顶端`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，站在棱堡的尖端，用中焦段镜头沿着城墙线拍摄，能将蜿蜒的步道、护城河和对岸的棱堡一同纳入画面，突出星形结构的几何美感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣凯瑟琳教堂塔楼内部`}</h4>
                  <p className="text-sm text-gray-700">{`若塔楼开放，利用旋转楼梯形成的螺旋曲线构图，从下往上拍摄，捕捉从石窗射入的光束与古老的砖石结构形成的强烈明暗对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城外环城步道南侧`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚蓝调时刻，从护城河对岸的草坪用长焦镜头压缩空间，聚焦于一角棱堡和水中倒影，前景可以带入一些野花，营造静谧而有力的氛围。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`“Den Briel”历史博物馆内窗边`}</h4>
                  <p className="text-sm text-gray-700">{`透过博物馆古老的菱形玻璃窗向外拍摄集市广场上的人物活动，模糊的彩色玻璃光晕会将现代场景染上复古的色调。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`无人机飞行在古城及护城河上空区域有严格限制，需提前查询当地法规，通常禁止在历史遗迹上空飞行。拍摄当地居民和私人庭院时请保持尊重，尽量避免突兀的近距离特写。荷兰天气多变，善用阴雨天的漫射光拍摄砖石建筑，往往能获得更加细腻柔和的质感。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`运河边的历史小屋`}</h4>
                  <p className="text-sm text-blue-800">{`入住一栋17世纪商人住宅改造的精品酒店，房间拥有低矮的木梁和望向静谧运河的小窗，清晨能听到水鸟的叫声和远处教堂钟声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`古城中心的舒适民宿`}</h4>
                  <p className="text-sm text-green-800">{`由本地艺术家经营的温馨民宿，位于一条安静的巷弄里，装饰充满航海元素，主人会为你准备地道的荷兰早餐并分享城市秘史。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`城墙脚下的现代设计酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`一家将简约设计与历史环境巧妙融合的新酒店，房间宽敞明亮，部分房间拥有直接通往城墙步道的私人入口，非常适合晨跑或夜游。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`郊外田园风情的B&B`}</h4>
                  <p className="text-sm text-purple-800">{`如果追求绝对宁静，可以选择城外五分钟车程的一座古老农庄B&B，在奶牛群的轻哞声中醒来，骑上主人提供的自行车轻松进城。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`布里勒是非常热门的周末度假地，尤其在四月“解放日”庆典前后和夏季，住宿很快会被订满，务必提前数周甚至数月预订。古城内夜晚极为安全宁静，但大部分商业设施关门较早，喜欢夜生活的话可能需要调整预期。住在城外虽然宁静，但需注意公共交通末班车时间，自驾或租用自行车是最灵活的选择。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开布里勒很久以后，我脑海里反复出现的，不是某一张具体的照片，而是那种整体的感觉：一种被水与泥土构筑的智慧稳稳托住的感觉。在这个追求速度与效率的时代，它像一个从容的讲述者，不疾不徐地展开一卷关于生存、反抗与最终和解的长卷。它的故事始于一场充满偶然性的暴力冲突，但最终却凝结成一种极其理性、甚至充满数学之美的物理形态——星形堡垒。这仿佛是一种隐喻：人类最激烈的情感（对自由的渴望），最终需要通过最冷静的智慧（工程与设计）来捍卫和留存。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这就是为什么每一个热爱深度游的人，都应该来布里勒走一走。它不像阿姆斯特丹那样绚烂多元，也不像小孩堤防那样纯粹自然。它代表的是荷兰精神中那更为坚实、沉默的基石：务实、顽强、善于利用环境并赋予其秩序。在这里散步，你每一步都踩在历史上，但这份历史没有成为沉重的负担，反而化为了市民日常散步的公园、孩子玩耍的草地。这种将厚重的过去轻盈地融入当下的能力，本身就是一种了不起的文化成就。布里勒教会我们，真正的力量不是张扬的呐喊，而是静默的坚守；最好的纪念，不是将历史供奉起来，而是让它继续为今天的生活提供庇护与美感。它会让你慢下来，绕着那颗水中的星星走一圈，然后内心变得异常平静和清晰。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/gouda-cheese-market" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    豪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">豪达奶酪小镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gouda</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/muiderslot-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅登城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Muiderslot</p>
                  </div>
                </div>
              </a>
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
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
