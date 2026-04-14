import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布加勒斯特老城旅游攻略 - 最佳欧洲景点',
  description: '布加勒斯特老城是罗马尼亚首都的灵魂栖居地，静静依偎在登博维察河畔，作为这座城市历史最悠久的区域，承载着千年的时光沉淀。实地探访便会发现，这里没有过度商业化的浮躁喧嚣，红瓦覆顶的老建筑、蜿蜒曲折的石板小...',
}

export default function BucharestOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '布加勒斯特老城', href: '/attractions/bucharest-old-town' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">布加勒斯特老城</h1>
          <p className="text-xl text-gray-600 mb-4">Bucharest Old Town</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">罗马尼亚</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">布加勒斯特</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">布加勒斯特老城是罗马尼亚首都的灵魂栖居地，静静依偎在登博维察河畔，作为这座城市历史最悠久的区域，承载着千年的时光沉淀。实地探访便会发现，这里没有过度商业化的浮躁喧嚣，红瓦覆顶的老建筑、蜿蜒曲折的石板小径，与街头巷尾的烟火气息紧紧交织，融合了拜占庭、巴洛克与新古典主义的多元风貌——既有中世纪的古朴底蕴，又有不同文化碰撞的鲜活张力，是沉浸式感受布加勒斯特本土风情与历史厚重感的绝佳选择。</p>
            </Section>
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">开放时间：老城整体全年全天开放，无闭园限制，可随时自由进出；区域内核心景点开放时间各异：老皇宫（Curtea Veche）10:00-17:00，Stavropoleos修道院9:00-18:00，城市历史博物馆周三、周五至周日10:00-18:00、周四12:00-20:00。所有景点周一普遍闭馆，法定节假日开放情况请以现场公告为准。</p>
              <p className="text-gray-700 leading-relaxed mb-4">门票：老城整体免费开放，区域内各景点单独收费。老皇宫成人3列伊（约合4.6元人民币），学生免费；Stavropoleos修道院免费开放；城市历史博物馆成人7列伊、学生2列伊；议会宫（周边核心景点）成人22列伊、学生免费。目前无景点套票，持有罗马尼亚旅游通票可享受部分景点8折优惠，实测通票更适合多景点深度游，若仅单逛老城，无需额外购买。</p>
              <p className="text-gray-700 leading-relaxed mb-4">地址：Bucharest Old Town, 030018 București, Romania，核心区域集中在利普斯卡尼街（Strada Lipscani）及周边街巷；老皇宫具体地址为Str. Curtea Veche 1, București 030018，导航可直接定位。</p>
              <p className="text-gray-700 leading-relaxed mb-4">交通：公共交通方面，从布加勒斯特奥托佩尼机场乘坐780路公交至Unirii Square站，车程约40分钟，票价3.5列伊，下车后步行10分钟即可抵达老城入口；从布加勒斯特中央火车站乘坐地铁1号线至Unirii站，出站后步行5分钟即达，实测地铁比公交更快捷高效，避开高峰时段基本不会拥挤。自驾前往的话，老城周边设有3个收费停车场，每小时收费约5列伊，旺季（4-5月、9-10月）车位紧张，建议提前抵达；旅游大巴可直达老城入口附近的Unirii广场，从萨尔茨堡、布加勒斯特市区各景点均有直达班次，出行十分便捷。</p>
              <p className="text-gray-700 leading-relaxed mb-4">最佳游览季节：布加勒斯特属温带大陆性气候，四季分明，冬无严寒、夏无酷暑，最佳游览季节为春秋两季，即4-5月和9-10月。我于4月底前往，彼时日均气温15-20℃，天气晴朗少雨，路边缀满不知名的小花，拍照出片率极高，且游客相对较少，无需排队等候；夏季（6-8月）气候偏闷热，游客量大幅增加，偶尔会有阵雨突袭；冬季（11-3月）气温较低，部分小店会暂停营业，游览体验稍打折扣，但圣诞期间老城会被精心装饰，氛围感拉满，适合喜欢冬日氛围的游客。</p>
              <p className="text-gray-700 leading-relaxed mb-4">建议游览时长：精华游览2-3小时，适合时间紧张的游客，可高效逛完核心街巷与主要景点；深度游览4-5小时，更适合喜欢慢逛、注重人文体验的游客，可加入博物馆参观、本地小店探秘等环节。我实际游览时，从老皇宫下来后稍感疲惫，便拐进小巷的咖啡馆小憩了20分钟，跳过了琥珀博物馆，却意外发现一家本地人常去的手作店——这种不期而遇的惊喜，比按攻略刻板打卡更具乐趣，因此建议时间紧张的话，无需逐一打卡所有景点，随心而行更有收获。</p>
            </Section>
            <Section title="注意事项">
              <p className="text-gray-700 leading-relaxed mb-4">出行避坑注意事项（重中之重）</p>
              <p className="text-gray-700 leading-relaxed mb-4">周日尽量别去探店，这点我真的踩过坑。周日的时候，老城里大部分小众店铺和特色餐厅都会关门，我当时为了找个地方吃饭，绕着街区走了大半圈，最后就只找到一家营业的，特别影响心情。如果你们想好好逛小店、吃当地美食，一定要避开周日。</p>
              <p className="text-gray-700 leading-relaxed mb-4">​</p>
              <p className="text-gray-700 leading-relaxed mb-4">老城里的复古教堂很好看，但规矩挺多的，大家一定要注意。首先是严禁拍照，千万不要偷偷拍，显得很失礼；其次要全程保持安静，要是带了小孩，提前跟孩子说清楚，别喧哗，不然会很尴尬，尊重当地的信仰习惯是最基本的。</p>
              <p className="text-gray-700 leading-relaxed mb-4">​</p>
              <p className="text-gray-700 leading-relaxed mb-4">一定要带现金！现在大家都习惯用手机支付，我当时也忘了换钱，结果街边的小吃摊、手作小店几乎都不能移动支付，好多想吃的、想买的都没办成，特别遗憾。大家提前换点罗马尼亚列伊，不用多，够买零食、纪念品就够了。</p>
            </Section>
            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">布加勒斯特老城的历史能追溯到15世纪，1459年的时候，弗拉德三世大公（就是德古拉原型的家族）颁布了特许状，这片地方慢慢就成了公国的核心区域。说出来你们可能不信，这里最早其实是个大盐场，中世纪的时候盐商特别多，贸易也很热闹，现在大家爱去打卡的利普斯卡尼街，当年就是盐商们交易的主要地方，老房子的地基里，还能找到当年做生意的痕迹。​</p>
              <p className="text-gray-700 leading-relaxed mb-4">我个人最喜欢这里19世纪的建筑风格，特别有特色，算是“混搭风”——拜占庭风格的教堂穹顶、巴洛克风格的雕花墙面，还有新古典主义的廊柱，乱七八糟地分布在石板小巷里，走一步看一处景。虽然这片区域在80年代受过损毁，但修完之后那种斑驳的感觉，反而更有历史味儿，一点不影响它的好看。</p>
              <p className="text-gray-700 leading-relaxed mb-4">私藏人文体验</p>
              <p className="text-gray-700 leading-relaxed mb-4">我特别建议大家找一个下午，不用赶时间，就在老城的石板路上随便走一走。那些石板路凹凸不平，老墙上爬满了藤蔓，看着就很有年代感。路边经常能看到当地的老人坐在门口晒太阳、喝热饮，安安静静地待一下午，那种慢节奏的生活，真的很治愈。走在小巷里，还会有种穿越的感觉，好像每一块砖都藏着故事，比单纯逛景点有意思多了。</p>
            </Section>
            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">（一）浓缩精华路线（2-3小时，省时高效）​</p>
              <p className="text-gray-700 leading-relaxed mb-4">路线：老皇宫→Stavropoleos修道院→利普斯卡尼街→老城广场​</p>
              <p className="text-gray-700 leading-relaxed mb-4">我当时就是先去的老皇宫，虽然看起来有点破旧，但那种中世纪皇室的感觉很浓，门口的石狮子，就算经过这么多年风吹雨打，还是很威严。从老皇宫出来，走5分钟就到Stavropoleos修道院，院子不大，但特别安静，里面的壁画保存得很好，进去之后能明显感觉到那种宗教氛围，让人不自觉就静下来。接着就沿着利普斯卡尼街慢慢逛，路边有很多手作店、本地餐厅和咖啡馆，偶尔还能碰到街头艺人唱歌，喜欢的话可以买个小纪念品。最后到老城广场，找个地方坐下来，看看周围的彩色老房子，感受一下当地的烟火气，这样一圈下来，精华景点就都逛到了。</p>
              <p className="text-gray-700 leading-relaxed mb-4">（二）深度路线（4-5小时，沉浸式体验）​</p>
              <p className="text-gray-700 leading-relaxed mb-4">路线：精华路线全部内容+城市历史博物馆+老市政厅+本地美食体验​</p>
              <p className="text-gray-700 leading-relaxed mb-4">如果时间充裕，逛完精华路线之后，一定要去城市历史博物馆看看。里面有很多古罗马时期的文物，还有一个能拆开的图拉真圆柱复制品，特别有意思。我当时租了个导览器，5列伊一个，能听到很多文物背后的故事，比自己瞎逛强多了，建议大家也租一个。看完博物馆，再去老市政厅，建筑风格很复古，登上楼顶还能看到一部分老城的风景，红瓦连片，特别好看。最后一定要找一家本地餐厅，尝尝米哈伊炖牛肉、土豆泥饼这些特色菜，我个人觉得有点咸，搭配当地的果酒刚好解腻，能尝到最地道的罗马尼亚味道。</p>
              <p className="text-gray-700 leading-relaxed mb-4">拍照机位​</p>
              <p className="text-gray-700 leading-relaxed mb-4">利普斯卡尼街的马努克旅馆门口，这个机位真的巨出片。黄色的老建筑，配上复古路灯和蜿蜒的石板路，随便拍都有电影感。我本来计划17点拍，那天刚好多云，等到18点半才拍出满意的效果。给大家个小建议，穿衣服别选黄色，容易和建筑撞色，穿白色或者浅色系，拍出来更清爽；光线不用死等黄金时段，天气好、阳光足的时候拍就很好看。​</p>
              <p className="text-gray-700 leading-relaxed mb-4">钟楼露台，想拍老城全景就来这。站在上面能看到整片老城的红屋顶，特别有感觉。不过要注意，钟楼的楼梯很陡，穿高跟鞋会很不方便；露台也不大，人多的时候不好拍照，想拍没有路人的空镜，最好早上早点去，光线柔和，也不用排队。​</p>
              <p className="text-gray-700 leading-relaxed mb-4">Stavropoleos修道院，想拍复古、森系照片的一定要来。直接去修道院的院子里就行，上午10点左右拍最好，阳光透过树叶洒下来，落在雕花廊柱上，光影特别好看，很容易拍出中世纪的感觉。我第一次下午去，阳光太刺眼，拍出来效果很差，第二天早上再去补拍，才拍出满意的照片，大家别踩这个坑。​</p>
              <p className="text-gray-700 leading-relaxed mb-4">老皇宫旁边的手作街区，离老城核心区就5分钟步行路程，都是本地人开的小店，卖的手工陶瓷、编织品、饰品都很有特色，而且不贵，还都是独一无二的。我在这儿买了一个手工陶瓷杯，质感比景区卖的纪念品好多了，大家买的时候可以稍微砍砍价，一般能便宜10%-20%。​</p>
              <p className="text-gray-700 leading-relaxed mb-4">登博维察河畔步道，离老城大概8分钟步行路程，沿着河边能看到老城的全景，河水很清，偶尔还有游船经过，画面特别安静治愈。建议早上去，河边有薄雾，光线也柔和，拍出来很有意境。我早上去的时候，还碰到当地人在河边钓鱼，特别有生活气息，拍出来的照片也很生动。​</p>
              <p className="text-gray-700 leading-relaxed mb-4">老城广场的长椅旁边，想拍松弛感照片就坐这儿。以广场的彩色建筑为背景，买一杯当地的热巧克力，随便坐一坐、拍一拍，氛围感就拉满了。傍晚拍最好，夕阳洒在建筑上，暖暖的，拍出来的照片很温柔。拍的时候稍微注意一下，避开过往的人群就好。</p>
              <p className="text-gray-700 leading-relaxed mb-4">附近景点​</p>
              <p className="text-gray-700 leading-relaxed mb-4">议会宫，离老城大概15分钟步行路程，是欧洲最大的建筑，白色的大理石外墙，太阳一照特别显眼，里面有3100个房间，进去之后感觉特别震撼。门票22列伊，学生免费，里面很大，逛下来大概要1.5小时，一定要提前预约，我当时没预约，排了40分钟的队，差点没赶上闭馆。另外，里面不能拍照，只能靠眼睛看、记在心里。​</p>
              <p className="text-gray-700 leading-relaxed mb-4">赫勒斯特勒乌公园，离老城打车大概20分钟，算是布加勒斯特的“城市绿肺”，里面有湖、有很多绿植，还有步道，租个自行车绕湖骑一圈，特别舒服。我去的时候是春天，树都绿了，空气也特别好，湖边有很多椅子，逛完老城来这儿歇一歇，特别放松。傍晚的时候，很多本地人会来这儿散步、野餐，氛围很好，而且这里的日落也很好看，值得多待一会儿。​</p>
              <p className="text-gray-700 leading-relaxed mb-4">罗马尼亚雅典娜神庙，离老城10分钟步行路程，是新古典主义风格的建筑，穹顶的壁画和廊柱都很好看，晚上亮灯之后，就像童话里的城堡，特别梦幻。我特意晚上去的，比白天更好看，而且人也少，拍照很方便。提醒大家，晚上周边光线比较暗，最好和朋友一起去，注意安全。​</p>
              <p className="text-gray-700 leading-relaxed mb-4">还是那个皇宫周边的手作街区，再跟大家多说两句。从老城核心区走5分钟就到，都是本地艺术家做的东西，陶瓷器、编织包、配饰都很有特色，值得好好逛。我买的那个陶瓷杯，用到现在都觉得好看，砍价的时候跟店主好好说，一般能拿到8-9折。如果觉得人多，就往登博维察河边走，8分钟就到，早上去最好，河边有薄雾，看老城全景就像加了滤镜，还能碰到钓鱼的老人，安安静静的，特别治愈。</p>
              <p className="text-gray-700 leading-relaxed mb-4">住宿小贴士​</p>
              <p className="text-gray-700 leading-relaxed mb-4">想住得方便，就选老城核心区，就在利普斯卡尼街附近，下楼就是景点，晚上也热闹，能好好感受老城的烟火气。但缺点是噪音有点大，睡眠浅的朋友，别选临街的房间，找主街后面的小巷民宿，又方便又安静。​</p>
              <p className="text-gray-700 leading-relaxed mb-4">如果经常要坐公交、地铁去周边景点，就选尤尼里广场周边。这里是交通枢纽，坐车方便，周边超市、餐厅也多，买东西、吃饭都不用跑远，适合喜欢方便快捷的朋友。​</p>
              <p className="text-gray-700 leading-relaxed mb-4">学生党或者预算有限的朋友，建议选火车站片区。这里的住宿很便宜，性价比高，能省不少钱。就是离老城有点远，大概要走15分钟，不喜欢走路的朋友就别选了。​</p>
              <p className="text-gray-700 leading-relaxed mb-4">住宿预订技巧​</p>
              <p className="text-gray-700 leading-relaxed mb-4">老城的住宿旺季是4-5月和9-10月，这两个时间段是最佳游览季节，游客特别多，热门的民宿和酒店很容易订满。我当时行程定得太急，只提前20天订，心仪的几家核心区民宿都没房了，最后只能住得远一点，每天要多花时间赶路，还没体验到住老巷里的感觉，特别后悔。所以大家最好提前1个月就订好住宿，别耽误行程。​</p>
              <p className="text-gray-700 leading-relaxed mb-4">淡季是11月到第二年3月，这时候游客很少，住宿也便宜，一般能比旺季便宜30%左右，很多民宿还有优惠活动。不用提前太久订，提前一周就够了，预算有限的朋友可以这个时候去。</p>
              <p className="text-gray-700 leading-relaxed mb-4">订房时需仔细查看评价，重点关注卫生条件、房间隔音、交通位置三大核心要点。我曾因疏忽未查看隔音评价，入住后发现房间隔音极差，隔壁及走廊的声音清晰可闻，严重影响休息。建议多翻阅几页真实住户的评价，避开踩雷房源，让旅途更舒心。</p>
              <p className="text-gray-700 leading-relaxed mb-4">避坑要点：老建筑改造的民宿大多没有电梯，我入住的三楼民宿无电梯，只能徒手将28寸行李箱搬上楼，十分费力，后续发现同街区有价格相近且带电梯的小酒店，行李较多的游客建议优先选择带电梯的住宿。大部分民宿和酒店不提供一次性洗漱用品，我当时因忘记携带牙刷，只能在楼下小店临时购买，不仅价格偏高，使用体验也不佳，提醒大家提前自备牙刷、牙膏和拖鞋。此外，老城周边民宿价格波动较大，旺季价格可能翻倍，建议提前锁定价格，避免临时涨价，我曾遇到过临时涨价的情况，因提前支付定金，才未多花冤枉钱。另外，不建议在老城入口处的旅行社报名一日游，价格偏高且存在强制购物环节，实测自行前往附近景点，更自由、更划算，能更好地掌控游览节奏。</p>
            </Section>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <p className="text-sm text-gray-600 text-center">
                本文由旅行作者 Winter Grady 实地走访整理，专注欧洲小众景点深度攻略，持续分享真实游览体验。
              </p>
              <p className="text-xs text-gray-500 text-center mt-2">
                本站内容仅供旅行参考使用，商务合作与转载事宜请通过联系页脚提交申请。
              </p>
              <p className="text-xs text-gray-500 text-center">
                管理团队保留所有内容版权，未经许可禁止搬运、摘抄或商用。
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">实用信息</h3>
              <div className="space-y-4">
                <InfoRow icon="🕒" label="开放时间" value="全天开放" />
                <InfoRow icon="🎫" label="门票" value="免费" />
                <InfoRow icon="📍" label="地址" value="请参考地图导航" />
                <InfoRow icon="🚌" label="交通" value="建议步行或公共交通" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
