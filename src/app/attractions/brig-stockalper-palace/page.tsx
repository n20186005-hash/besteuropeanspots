import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布里格 Brig｜辛普朗山口脚下的洋葱顶宫殿与冰川门户 - 最佳欧洲景点',
  description: '火车缓缓滑入布里格车站，你拖着行李走出来，第一口呼吸到的，是那种清冽、干脆得像阿尔卑斯山泉水一样的空气。环顾四周，这里没有想象中的瑞士小镇那种童话般的甜腻，反而有种硬朗的务实感——毕竟，这里是通往意大利的辛普朗山口的北大门，几百年来，南来北往的货物、军队和旅人都得在这里喘口气。火车站对面就是现代化的',
}

export default function BrigStockalperPalacePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '瑞士', href: '/destinations/europe' },
            { label: '布里格', href: '/destinations/europe' },
            { label: '布里格', href: '/attractions/brig-stockalper-palace' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`布里格・Brig・瑞士・布里格`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`火车缓缓滑入布里格车站，你拖着行李走出来，第一口呼吸到的，是那种清冽、干脆得像阿尔卑斯山泉水一样的空气。环顾四周，这里没有想象中的瑞士小镇那种童话般的甜腻，反而有种硬朗的务实感——毕竟，这里是通往意大利的辛普朗山口的北大门，几百年来，南来北往的货物、军队和旅人都得在这里喘口气。火车站对面就是现代化的超市和咖啡馆，人们行色匆匆。但只要你抬起头，视线越过那些普通的屋顶，就会瞬间愣住：三个巨大的、金灿灿的洋葱形圆顶，以一种近乎突兀的威严姿态，霸占着天际线。那就是斯托卡珀宫，它不像宫殿，更像一个从繁华旧梦里直接掉落到这个务实小镇的奇幻造物。
朝着那金色圆顶走去，不过五六分钟，周遭的时空仿佛被压缩了。现代的街道迅速退去，脚下变成了被岁月磨得光滑的卵石路。宫殿前的小广场安静得出奇，只能听到远处隐约的教堂钟声，和某个阳台上传来的风铃声。下午的阳光斜斜地打在宫殿米黄色的外墙上，照亮了那些精细的窗棂和家族纹章。空气里混合着老木头、石头和从附近面包店飘来的、温暖的黄油香气。你会看到本地老人坐在广场长椅上安静地读报，偶尔有穿着徒步装备、背着巨大行囊的旅人匆匆穿过，他们是去往阿莱奇冰川的。在这里，历史的厚重与户外探险的活力，奇妙地共存于同一幅画面里。
走进宫殿的拱廊庭院，那种震撼会更直接。巨大的方形庭院被三层楼的拱廊环绕，拱廊的阴影深邃而凉爽。你仰起头，那三个金色圆顶就在正上方，在瑞士湛蓝到不真实的天空背景下，闪烁着柔和而坚定的光芒。一瞬间，所有火车旅行的疲惫都消散了。你突然明白了这座宫殿的魅力所在：它不是一个被精心供奉在玻璃罩里的博物馆，而是一枚仍然跳动在城镇生活心脏里的历史印章。它傲慢地展示着过去一个家族的巨额财富与权力，同时又无比谦卑地融入了后来者的日常——它的部分房间现在是市政办公室，档案馆里藏着小镇的记忆。这种矛盾的真实感，比任何完美的复原都更打动人。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "火车缓缓滑入布里格车站，你拖着行李走出来，第一口呼吸到的，是那种清冽、干脆得像阿尔卑斯山泉水一样的空气。环顾四周，这里没有想象中的瑞士小镇那种童话般的甜腻，反而有种硬朗的务实感——毕竟，这里是通往意大利的辛普朗山口的北大门，几百年来，南来北往的货物、军队和旅人都得在这里喘口气。火车站对面就是现代化的超市和咖啡馆，人们行色匆匆。但只要你抬起头，视线越过那些普通的屋顶，就会瞬间愣住：三个巨大的、金灿灿的洋葱形圆顶，以一种近乎突兀的威严姿态，霸占着天际线。那就是斯托卡珀宫，它不像宫殿，更像一个从繁华旧梦里直接掉落到这个务实小镇的奇幻造物。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "朝着那金色圆顶走去，不过五六分钟，周遭的时空仿佛被压缩了。现代的街道迅速退去，脚下变成了被岁月磨得光滑的卵石路。宫殿前的小广场安静得出奇，只能听到远处隐约的教堂钟声，和某个阳台上传来的风铃声。下午的阳光斜斜地打在宫殿米黄色的外墙上，照亮了那些精细的窗棂和家族纹章。空气里混合着老木头、石头和从附近面包店飘来的、温暖的黄油香气。你会看到本地老人坐在广场长椅上安静地读报，偶尔有穿着徒步装备、背着巨大行囊的旅人匆匆穿过，他们是去往阿莱奇冰川的。在这里，历史的厚重与户外探险的活力，奇妙地共存于同一幅画面里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走进宫殿的拱廊庭院，那种震撼会更直接。巨大的方形庭院被三层楼的拱廊环绕，拱廊的阴影深邃而凉爽。你仰起头，那三个金色圆顶就在正上方，在瑞士湛蓝到不真实的天空背景下，闪烁着柔和而坚定的光芒。一瞬间，所有火车旅行的疲惫都消散了。你突然明白了这座宫殿的魅力所在：它不是一个被精心供奉在玻璃罩里的博物馆，而是一枚仍然跳动在城镇生活心脏里的历史印章。它傲慢地展示着过去一个家族的巨额财富与权力，同时又无比谦卑地融入了后来者的日常——它的部分房间现在是市政办公室，档案馆里藏着小镇的记忆。这种矛盾的真实感，比任何完美的复原都更打动人。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`布里格`} />
                <InfoRow label="英文名称" value={`Brig`} />
                <InfoRow label="正式名称" value={`Brig`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`布里格`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是统治了阿尔卑斯山南北贸易命脉数百年的斯托卡珀商业帝国的权力中心与心脏。`} />
                <InfoRow label="建筑特色" value={`一座融合了意大利宫殿气派与阿尔卑斯山民居功能的宏伟建筑，最耀眼的是其三个并排矗立的金色洋葱形圆顶。`} />
                <InfoRow label="建筑风格" value={`巴洛克风格与阿尔卑斯山区实用主义建筑的独特融合。`} />
                <InfoRow label="文化价值" value={`见证了欧洲近代早期跨国贸易、家族权力与宗教信仰在险峻高山通道中的复杂交汇。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`斯托卡珀宫内部导览开放时间因季节和展览而异，通常为每年4月至10月的周二至周日，上午10点至下午5点，冬季开放时间缩短或仅限预约。宫殿庭院和外墙全年24小时可免费参观。前往阿莱奇冰川的缆车和火车全年运行，但冬季班次可能减少，建议行前务必查阅最新时刻表。`} />
              <InfoRow label="门票价格" value={`斯托卡珀宫博物馆成人票约12瑞士法郎，学生及老人票约10瑞士法郎，16岁以下儿童免费。包含宫殿、档案馆及特别展览的联票价格可能变动。参观阿莱奇冰川地区需购买区域交通通票或单次缆车票，从布里格出发的一日往返通票约80-100瑞士法郎，持有瑞士旅行通票可享受折扣。`} />
              <InfoRow label="地址" value={`斯托卡珀宫：Alte Simplonstrasse 28, 3900 Brig, Switzerland`} />
              <InfoRow label="交通方式" value={`布里格是瑞士瓦莱州的核心交通枢纽。从苏黎世机场出发，乘坐直达的IC火车，约2小时15分钟即可抵达布里格火车站，班次频繁，每小时至少有1-2班。从米兰（意大利）出发，也有直达的欧洲城际列车，约2小时。布里格火车站本身就是一个宏伟的历史建筑，出站后，斯托卡珀宫那座标志性的金色洋葱顶就在步行5分钟的范围内，完全不需要其他交通工具。小镇所有景点均可轻松步行到达。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事得从一个人说起：卡斯帕·斯托卡珀。时间回到17世纪，那时的欧洲，翻越阿尔卑斯山是连接北欧和南欧最危险也最重要的旅程。辛普朗山口是其中最关键的一条通道。而卡斯帕，一个出生在布里格的聪明小子，就盯上了这门生意。他可不是简单的商人，他建立的是一个覆盖运输、仓储、信贷、甚至邮政的超级托拉斯。你可以想象一下：从地中海运来的丝绸、香料，从北方运来的毛皮、金属，所有货物到了山口两端，都得由斯托卡珀的骡队和挑夫接手，住进他的旅店，使用他的仓库，甚至向他借钱交关税。他成了阿尔卑斯山的“道路之王”，财富像雪崩一样累积起来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "有了泼天的财富，自然想要一座配得上身份的宫殿。1697年，斯托卡珀宫开始动工。卡斯帕的野心很大，他请来了意大利的建筑师，想把米兰或都灵的那种巴洛克宫殿搬到阿尔卑斯山脚来。但有意思的是，最终建成的宫殿，虽然有着意大利式的对称立面和华丽拱廊，骨子里却还是个阿尔卑斯山的大家伙。它没有那么多浮夸的装饰，房间布局实用，甚至有庞大的地下仓储空间和马厩——毕竟，贸易才是这个家族的根基。而那三个最标志性的金色洋葱顶，据说灵感来自卡斯帕在东方贸易中见过的东正教教堂，被他骄傲地安放在自己的宫殿上，成为权力与财富最直白的宣言，从几公里外就能看见，仿佛在向每一个经过山口的人宣告：看，这就是斯托卡珀的领地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，家族的辉煌并没有永恒。随着拿破仑时代到来，新的道路技术出现，铁路逐渐取代了骡马，斯托卡珀家族的商业帝国慢慢衰落。宫殿几经转手，甚至一度面临被拆除的威胁。幸运的是，到了19世纪末20世纪初，瑞士人意识到了它的价值。它被精心修复，变成了博物馆、档案馆和市政空间。它不再是某个家族的私产，而成为了整个地区，乃至瑞士国家记忆的一部分。那些账本、地图、贸易合同，安静地躺在档案室里，诉说着一个凭借个人才智与时代机遇铸就传奇的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更妙的是，宫殿的命运与它所在城镇的命运始终交织。布里格因为斯托卡珀的生意而繁荣，后来因为辛普朗铁路隧道的开通，再次成为重要的交通节点。今天，当你站在宫殿的塔楼上，能看到两种“通道”的遗迹：一边是蜿蜒而上、充满传奇故事的古山口小道；另一边，是现代化铁路线呼啸着钻入山腹的隧道入口。这座宫殿，就这样沉默地见证着人类跨越天堑的方式，从血肉之躯的艰辛跋涉，到钢铁巨轮的瞬间穿透。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天给布里格，它将完美融合历史深度与自然震撼。上午九点左右抵达最佳，此时旅游团还未涌入，小镇刚刚苏醒，柔和的光线非常适合拍摄宫殿的黄金圆顶。先用2-2.5小时沉浸式探索斯托卡珀宫殿内部及周边老城区，了解其厚重的历史。中午在本地小餐馆享用一顿瓦莱州特色的午餐。下午则完全交给自然，乘坐便捷的交通工具前往阿莱奇冰川区域，进行3-4小时的轻徒步或观景，亲身感受阿尔卑斯巨人的呼吸。傍晚返回布里格，在夕阳余晖下再次漫步宫殿庭院，体验日夜交替的不同氛围。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`参观宫殿内部时尽量跟上德语或英语的定时导览团，导游常会讲述许多生动有趣的历史八卦，比单纯看文字说明有趣得多。
小镇和冰川地区接受瑞士法郎，部分地方可使用欧元但汇率不佳，建议提前备好少量瑞郎现金用于小额消费。
前往冰川区域徒步，即使夏季也务必携带防风外套和抓地力好的鞋子，高海拔地区天气瞬息万变。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨第一缕阳光刚刚照亮金色洋葱顶时，从火车站步行五分钟，直接抵达斯托卡珀宫安静的内部庭院，感受没有游客的宁静时刻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随导览或语音讲解，缓缓走过宫殿里那些装饰着华丽湿壁画的天花板大厅，想象斯托卡珀家族在此举办盛大宴会的情景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要爬上宫殿的塔楼，在那里你将获得一个无与伦比的视角：一边是小镇的红色屋顶簇拥着宫殿，另一边是巍峨雪山背景下，火车缓缓驶入现代车站的奇妙画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出宫殿，在迷宫般的老城小巷里随意走走，留心那些古老商人宅邸门上精美的金属门环和墙上的日晷。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一家本地人聚集的咖啡馆，点一杯醇厚的咖啡和一块扎实的“黑麦面包”，听听周围的老人用德语或瓦莱州方言聊天。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`乘坐从布里格火车站出发的齿轨火车，大约半小时后，你便从历史宫殿来到了欧洲最长的阿莱奇冰川脚下，体验从人文到自然的剧烈转换。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在冰川观景台静静地坐上一会儿，听风的声音、冰川内部偶尔传来的低吼，看阳光在巨大的冰体上移动变幻出钻石般的光芒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚回到布里格，在斯托卡珀宫拱廊下的阴影里坐下，看金色的夕阳把三个圆顶染成炽热的铜色，结束这充实的一天。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`宫殿东南侧的小公园仰拍点`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时，阳光恰好照亮东侧墙面和圆顶，站在公园草坪上以古老雪松为前景，能拍出宫殿与自然、历史交融的经典构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`宫殿主庭院拱廊下的光影长廊`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，阳光斜射入庭院，在拱廊的柱子和地面上拉出长长的、规律的光影线条，人物站在明暗交界处，能拍出极具戏剧感和纵深感的人文大片。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从老城民居屋顶俯瞰宫殿`}</h4>
                  <p className="text-sm text-gray-700">{`寻找老城内向公众开放的酒店露台或餐厅（如老城中心的某些客栈），用长焦镜头压缩空间，拍出宫殿金色圆顶与周围质朴的棕色木屋瓦顶形成的强烈视觉对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`布里格至冰川的火车车窗`}</h4>
                  <p className="text-sm text-gray-700">{`选择列车前进方向的右侧座位，在火车攀爬过程中，抓拍车窗框住的、逐渐展开的冰川全景，动态模糊的前景树木与清晰宏伟的冰川背景结合，故事感十足。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`莫斯夫鲁山顶观景台`}</h4>
                  <p className="text-sm text-gray-700">{`搭乘缆车抵达后，使用广角镜头，将前景的徒步者剪影、中景的斯托卡珀宫（在遥远的下方，如同微缩模型）与背景的阿莱奇冰川巨龙一同纳入画面，形成震撼的空间尺度对比。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄当地居民或私人财产时务必先征得同意，瑞士人非常注重隐私。无人机飞行在居民区和自然保护区有严格限制，起飞前务必查清当地法规。`}</li>
                <li>• {`阿尔卑斯山的光线在上午十点前和下午四点后最为柔和迷人，是拍摄建筑和风景的黄金时间，正午的顶光反而容易让画面平淡。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`交通便捷之选`}</h4>
                  <p className="text-sm text-blue-800">{`火车站正对面那家设计感十足的现代酒店，房间窗户正对着斯托卡珀宫的洋葱顶，你可以一边泡澡一边欣赏历史景观与现代列车同框的奇异画面。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老城沉浸体验`}</h4>
                  <p className="text-sm text-green-800">{`由一栋16世纪商人宅邸改造的精品客栈，木头楼梯踩上去吱呀作响，房间里有裸露的原始石墙和古董家具，早餐在能看到宫殿塔楼的小花园里享用。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`山间静谧木屋`}</h4>
                  <p className="text-sm text-yellow-800">{`位于布里格上方山坡上的传统瑞士小木屋民宿，需要乘坐一段短短的登山巴士，但换来的是绝对的宁静、满天繁星，以及清晨在阳台直面雪山的壮阔早餐。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`冰川门户高端享乐`}</h4>
                  <p className="text-sm text-purple-800">{`坐落在前往冰川途中的贝城（Betten）或莫雷尔（Morel）的一处高山度假酒店，拥有正对阿莱奇冰川的无限泳池和桑拿房，适合想要深度体验 alpine luxury 的旅行者。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季徒步旺季和冬季滑雪季，布里格及周边住宿非常紧张，务必提前数月预订。即使小镇本身房源售罄，也可以考虑住在火车沿线上游或下游的一站，交通同样便利。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "住在老城虽然风情十足，但请注意部分古老建筑没有电梯，携带大件行李会稍有不便。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开布里格很久以后，我脑海里反复回响的，不是某一个具体的画面，而是一种独特的“通道”感。这个小镇，它本身就是一道门。一道看得见的门，是那座带着三个金色洋葱顶的宫殿，它通往一个依靠骡马、勇气和精明算计打通山脉的豪迈年代。一道看不见的门，是火车站里那些四通八达的列车时刻表，它们指向的是冰川、雪峰和无数条蜿蜒的徒步小径。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它慷慨地展示了历史的全部层次：从商业帝国的傲慢与荣光，到归于平淡后成为社区的一部分；从人类征服天险的野心，到如今怀着敬畏之心去仰望自然。在布里格，你不会感到那种被过度美化的、巧克力盒子般的瑞士风景。你感受到的是一种更坚实、更复杂，也因此更迷人的力量。那是生存的力量，是冒险的力量，是积累财富并渴望被铭记的力量，最终，也是一种与环境和历史和解的力量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，如果你也厌倦了那些千篇一律的明信片风景，渴望一次能同时触摸到历史纹理与自然脉动的旅行，请一定来布里格看看。在这里，花一个上午与一个17世纪的商业巨贾对话，再花一个下午，去拜访那位已存在万年的冰川巨人。这种在一天之内完成时空巨大跨越的体验，会让你的旅行记忆，变得像阿尔卑斯山岩一样层次分明，厚重而深刻。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/rhine-falls" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沙夫豪森莱茵瀑布</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rhine Falls</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/thun-castle-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    图
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">图恩城堡与老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Thun Castle and Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/romainmotier-priory" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    罗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">罗曼穆捷隐修院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Romainmôtier Priory</p>
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
