import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '中东欧小众旅行｜匈牙利维斯普雷姆，山顶上的皇家老城 - 最佳欧洲景点',
  description: '考洛乔是匈牙利南部巴奇-基什孔州的一个小镇，位于布达佩斯以南142公里处的多瑙河左岸。它坐落在肥沃的平原上，历史上曾是匈牙利四大主教驻地之一，政治和宗教地位远高于今日。如今它以手工刺绣和辣椒粉闻名，是...',
}

export default function VeszpremPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '维斯普雷姆老城', href: '/attractions/veszprem' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">维斯普雷姆老城</h1>
          <p className="text-xl text-gray-600 mb-4">veszprem</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">匈牙利</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">维斯普雷姆</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">考洛乔是匈牙利南部巴奇-基什孔州的一个小镇，位于布达佩斯以南142公里处的多瑙河左岸。它坐落在肥沃的平原上，历史上曾是匈牙利四大主教驻地之一，政治和宗教地位远高于今日。如今它以手工刺绣和辣椒粉闻名，是一座安静、古朴、几乎没有游客喧闹的匈牙利老城。</p>
              <p className="text-gray-700 leading-relaxed mb-4">考洛乔老城不大，步行半小时就能从一头逛到另一头。镇子的核心是圣三一广场，巴洛克风格的大教堂和亮黄色的大主教宫面对面站着，像两个老朋友在默默打量彼此。说实话，来这里之前我对考洛乔的认知几乎为零，只知道匈牙利除了布达佩斯还有佩奇、埃格尔那些地方。逛着逛着发现，这种名不见经传的小镇反而最容易让人静下心来，慢慢走慢慢看。</p>
            </Section>
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">小镇不大，说是一座城不如说是一个安静的小镇。多数人都是跟着多瑙河游轮顺道停靠过来的，单独坐车来的游客很少。如果你喜欢东欧小众城市那种不紧不慢的节奏，考洛乔的刺绣文化氛围会让你觉得很舒服。匈牙利考洛乔攻略里常提到的两样东西——辣椒粉和刺绣，走在街上一抬眼就能看到痕迹，橱窗里挂着刺绣桌布，路边的商店门口堆着成串的干辣椒。</p>
            </Section>
            <Section title="最佳游览季节">
              <p className="text-gray-700 leading-relaxed mb-4">4月到10月，跟匈牙利绝大多数小众景点一样，这段时间天气暖和、阳光充足，博物馆也都正常开着。我是五月去的，多瑙河边的风吹过来带着青草和泥土的气味，太阳晒在身上不烫，刚刚好。夏季七、八月的午后石板路会晒得发烫，热浪从脚底往上涌，走几步就出汗，建议避开正午那段时间。秋天过来可以看到家家户户门口挂着的红辣椒串，空气里有一股隐隐约约的辛香。冬季来的话很多地方都关了，镇子会显得格外安静甚至有点冷清，但如果你就喜欢这种没有人打扰的感觉，反倒是个好时候。</p>
            </Section>
            <Section title="建议游览时长">
              <p className="text-gray-700 leading-relaxed mb-4">亲测半天（4到5小时）完全足够逛完老城的核心景点。大教堂里转半小时到四十分钟，辣椒博物馆大概半小时，民俗艺术馆细细看的话一个小时都不一定够——那些刺绣作品的细节真的值得坐下来慢慢看。剩下的时间就在圣三一广场周边随便走走，找家咖啡馆坐坐，看看当地人遛狗聊天。如果想顺道去郊外的巴科德普斯塔马术中心看匈牙利传统马术表演，那就得留出一整天。马术表演大概一个多小时，加上往返路上的时间，半天是肯定不够的。</p>
            </Section>
            <Section title="注意事项">
              <p className="text-gray-700 leading-relaxed mb-4">1、福林现金一定要带，有些小博物馆和街边小店只收现金，我就在一家卖刺绣杯垫的小店因为没带够福林而眼睁睁放走了一堆心头好，教训深刻。</p>
              <p className="text-gray-700 leading-relaxed mb-4">2、别像我一样没提前查开放时间。我周一到的，大教堂关门，广场上空荡荡的，只能绕着外墙拍了几张照片就走了。</p>
              <p className="text-gray-700 leading-relaxed mb-4">3、匈牙利语路牌比较难认，谷歌地图提前下载离线地图省心很多。</p>
              <p className="text-gray-700 leading-relaxed mb-4">4、镇上英语普及度一般，年长的店主基本只会匈语，但微笑加比划总能解决问题。</p>
            </Section>
            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">考洛乔的历史可不止几百年那么简单。它早在一千多年前的公元1009年就被匈牙利第一任国王圣史蒂芬一世确立为大主教驻地，是整个匈牙利最古老的城镇之一。走在圣三一广场上，脚下踩着的石板不知道经历过多少次马蹄的敲打和朝圣者的脚步。大教堂是第四代建筑了，最早的那座教堂可能在1050年之前就矗立在这里，后来被奥斯曼帝国洗劫过、被大火烧毁过，一次次重建又一次次被毁，现在的巴洛克教堂是1770年前后建起来的。</p>
              <p className="text-gray-700 leading-relaxed mb-4">站在教堂里抬头看穹顶壁画的那一刻，阳光透过彩色玻璃洒下来，粉色和白色相间的内饰在光线里变得特别柔和，那种感觉用“震撼”两个字反而说浅了反正不知道怎么描述就对了，自己去体验下吧。据说李斯特本人曾在这架管风琴上演奏过，如果你分不清楚那个李斯特是那个被誉为 “钢琴之王的那个弗朗茨・李斯特（Franz Liszt）</p>
              <p className="text-gray-700 leading-relaxed mb-4">想到这一点，耳朵里听到的每一个音符好像都有一种变得沉甸甸的感觉。</p>
              <p className="text-gray-700 leading-relaxed mb-4">这个教堂的钟楼有76米那么高，在整个镇子上无论走到哪里都能看到那个尖顶，像是一个沉默的守护者。逛着逛着你会发现，考洛乔的历史感存在这里的每个角落里是这里活生生的日常。</p>
            </Section>
            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">墙裂建议可以试试从圣三一广场开始逛。这里是整个考洛乔的心脏，大教堂和大主教宫面对面，中间是宽敞的广场。先进大教堂（注意避开周一闭馆日），在里面待上半小时到四十分钟，看看穹顶壁画、彩色玻璃，运气好的话能听到管风琴演奏。出来后直接去广场对面院子里的辣椒博物馆，不大，但红辣椒串挂满了房梁，满屋子都是辛辣中带点甜的气味。然后沿着Szent István király út这条主街往南走，大概六七分钟就到民俗艺术馆，这条路两边有不少小店，橱窗里摆着刺绣桌布和手绘瓷器，光是window shopping就能逛上好久。民俗艺术馆本身是一座茅草屋顶的老农舍，冬天保温夏天凉快，里面的刺绣收藏真的让人挪不开眼。逛完民俗艺术馆如果还有时间，可以去附近的Károly Viski博物馆看看矿物标本和钱币收藏，不过说实话，如果不是特别感兴趣，跳过也行。逛完古城顺道走过去就行，真心没必要打车。</p>
            </Section>
            <Section title="拍照机位">
              <p className="text-gray-700 leading-relaxed mb-4">亲测，圣三一广场东南角、大教堂正对面大主教宫门口的那几级台阶上，是拍大教堂全景的最佳机位。上午9点到11点左右顺光，教堂的淡黄色立面在阳光里特别上镜，蓝天白云做背景，随便按快门都好看。傍晚5点到6点的逆光时段也别有味道，教堂的轮廓被落日镶上一圈金边，广场上的人影被拉得很长，复古石板地的肌理在这个光线下特别清楚。另外，从大教堂正面稍微往西走几十米，在一排老房子的拱廊下面把相机放低、仰拍，能把76米高的钟楼完整收进取景框，人像出片效果意外的好。民俗艺术馆的茅草屋顶也是拍人文感照片的好地方，尤其是下午三四点的侧光，茅草的质感和墙面剥落的斑驳感在画面里特别有层次。</p>
            </Section>
            <Section title="附近景点">
              <p className="text-gray-700 leading-relaxed mb-4">逛完古城如果还有时间，那就去郊外的巴科德普斯塔马术中心看看吧。</p>
              <p className="text-gray-700 leading-relaxed mb-4">离镇中心大概几公里，开车十分钟左右就到了是不是很近。这里可以看到匈牙利传统的“奇科斯”骑手表演，穿着蓝色传统服装的小伙子站在飞奔的马背上，鞭子在空中甩出啪啪的响声，场面相当带劲儿。</p>
              <p className="text-gray-700 leading-relaxed mb-4">不过说实话，如果你对马术没什么兴趣，或者时间比较紧，这个地方就别去，在镇子里瞎悠悠地逛儿反而更贴合考洛乔的生活节奏。</p>
              <p className="text-gray-700 leading-relaxed mb-4">沿途会经过大片大片的农田和草地，这就得看来的时候了如果是春夏之交的时候野花遍地，空气里飘着青草和泥土的味道，光是坐车这段路本身就是一种享受。</p>
              <p className="text-gray-700 leading-relaxed mb-4">还有一个选择顺着多瑙河边散步走，从码头往镇里走的那条路视野开阔，河对岸是一望无际的平原，傍晚时分河面上碎金一样的光特别好看的。</p>
              <p className="text-gray-700 leading-relaxed mb-4">如果这时候你想到多瑙河那么故事就多了...</p>
            </Section>
            <Section title="住宿小贴士">
              <p className="text-gray-700 leading-relaxed mb-4">考洛乔的住宿选项不多，但质量还行吧。</p>
              <p className="text-gray-700 leading-relaxed mb-4">亲测建议住在圣三一广场附近，出门就是大教堂，晚上广场上的灯光把教堂照得特别有氛围感，而且不用担心晚班公交的问题因为——镇上本来就没几趟公交哈哈哈。</p>
              <p className="text-gray-700 leading-relaxed mb-4">老城区的民宿很有味道，有些是翻修过的老房子，木头楼梯踩上会有声音但是别怕不会塌的，房间里的布置也透着匈牙利的乡间气息。</p>
              <p className="text-gray-700 leading-relaxed mb-4">不过真心提醒一句，老房子的楼梯普遍窄且陡，如果你拖着大行李箱，搬上搬下真的会累到怀疑自己为什么要没苦硬吃way。</p>
              <p className="text-gray-700 leading-relaxed mb-4">我住的那家就在大教堂步行五分钟的位置，窗户推开就能看到钟楼的尖顶，傍晚坐在窗台上听教堂的钟声，那种感觉是用钱买不到的。</p>
              <p className="text-gray-700 leading-relaxed mb-4">郊区也有几家酒店，价格比老城便宜一些，但晚上进城吃饭或者散步基本只能靠步行或打车，打车又不一定随时叫得到。所以——建议自己研究研究适合自己的。</p>
              <p className="text-gray-700 leading-relaxed mb-4">提前在预订平台上多翻翻评论，尤其是看有没有提到噪音、热水、Wi-Fi这几个关键词。</p>
              <p className="text-gray-700 leading-relaxed mb-4">另外匈牙利小城镇的住宿一般都可以发邮件沟通，提前问问能不能帮忙订出租车或者存行李，服务态度都挺好的。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="民俗艺术馆（Folk Art House）：每年4月1日到10月31日，周一到周日10:00-17:00开放。这个时间段正好是匈牙利天气最舒服的时候，冬天来的话就闭馆了，别像我一样没查时间白跑一趟。
考洛乔大教堂：周二到周六10:00-16:00开门，周一和周日不开放。亲测，周日早上教堂有弥撒，虽然门开着但不适合观光游览。
大主教宫：同样是4月1日到10月31日开放，周二到周日9:00-17:00。个人参观的话，巴洛克式阅览室只在中午12:00和下午14:00两个时段对散客开放，踩过的小坑就是去早了只能干等。
辣椒博物馆：4月1日到10月31日，周二到周日9:00-17:00开门，就在大教堂对面的院子里，真心建议先去大教堂再来这里，顺路不绕。" />
                <InfoRow icon="🎫" label="门票" value="民俗艺术馆：成人950福林（大约2.5欧元），学生和退休人员750福林（2欧元左右）。
大主教宫：600福林（约1.6欧元），这个价格算是非常良心的了。
辣椒博物馆：门票我没记太清楚，大概也是几百福林的样子，反正没超过3欧元。
大教堂：免费进入，但如果想听管风琴演奏可能需要跟游轮团或提前预约。" />
                <InfoRow icon="📍" label="地址" value="考洛乔大教堂：Szentháromság tér 1, Kalocsa, 6300
民俗艺术馆：Tompa Mihály utca 5-7, Kalocsa, 6300
辣椒博物馆：Szentháromság tér 2-3（大教堂对面院子里的建筑）" />
                <InfoRow icon="🚌" label="交通" value="从布达佩斯过来，最方便的是坐Volánbusz大巴，从布达佩斯Népliget汽车站出发，大约2小时15分钟到考洛乔，车票差不多7到9欧元（2500到3500福林左右）。大巴班次大概是每小时一班，不过下午过了四点之后班次会变少，这一点亲测重要，千万别错过了末班车。火车的话也通，但考洛乔的火车站离镇中心有点距离，到了还得换公交或者步行，不是特别方便。打车从布达佩斯机场过来大概1.5小时车程，费用不便宜，估摸着要80到100欧元往上。到了镇上基本全靠走，老城小得很，从大教堂走到民俗艺术馆也就十分钟出头。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
