import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '普雷绍夫老城 Prešov｜走进斯洛伐克东部最具韵味的老城 - 最佳欧洲景点',
  description: '景点简介...',
}

export default function PresovPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '斯洛伐克', href: '/destinations/slovakia' },
            { label: '普雷绍夫老城', href: '/attractions/presov' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">普雷绍夫老城</h1>
          <p className="text-xl text-gray-600 mb-4">Presov</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">斯洛伐克</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">普雷绍夫</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">景点简介</p>
              <p className="text-gray-700 leading-relaxed mb-4">肖普朗是匈牙利西北部与奥地利接壤的一座千年古城，距维也纳仅六十公里。老城保留着近乎完整的中世纪格局，红色瓦顶错落有致，巴洛克建筑在广场四周环绕。一九二一年公投中以压倒性票数选择留在匈牙利，从此被称作“最忠诚之城”。这里游客不多，安静、耐逛，特别适合想避开大客流的人文慢游者。</p>
            </Section>
            <Section title="最佳游览季节">
              <p className="text-gray-700 leading-relaxed mb-4">四五月和九十月最舒服，气温在十二到二十度左右，人不多，阳光把红屋顶照得暖融融的。盛夏偶有音乐节活动，广场露天座热热闹闹，但午后石板路被晒得发烫，走了几步就想找阴凉处躲着。深秋晚风一吹微微凉，傍晚在老城散步得加件薄外套。冬季雪后古城的红瓦披一层白，好看是好看，不过防火塔等景点下午四点就关了，天黑得早，拍照得抢着来。</p>
            </Section>
            <Section title="建议游览时长">
              <p className="text-gray-700 leading-relaxed mb-4">亲测安排一整天比较从容，上午爬防火塔、逛主广场和山羊教堂，中午在老城找家地窖餐厅喝碗古拉什，下午钻彩色小巷和城垣步道，傍晚去卡利山等日落。时间充裕的话住一晚更好，夜晚的老城亮起暖黄街灯，石板路反射着湿润的光，氛围比白天还迷人。</p>
            </Section>
            <Section title="注意事项">
              <p className="text-gray-700 leading-relaxed mb-4">石板路几百年来被磨得又光又滑，尤其是下过雨之后，我有一次差点在Fő tér拐角摔了，千万别穿高跟鞋或薄底平底鞋。城垣步道大部分路段被建筑遮挡，没法站上墙头看全景，我绕了一大圈才发现这事儿，想俯瞰还得去登塔。老城不大但巷子弯弯绕绕，方向感不好的人很容易原地转圈，我亲身经历过两次——抬头找防火塔的绿顶，它就是你的天然指南针。部分地窖餐厅晚间预约很满，想吃最好提前订位。英语在老城通用，但市集小摊和出租车司机还是以匈语和德语为主，手机备好翻译App别高估自己的语言能力。</p>
            </Section>
            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">说实话来之前对肖普朗的了解很模糊，但逛着逛着发现，这座城的气质和很多东欧古城不一样。它几乎没有战火破坏的痕迹——蒙古人入侵没打到这里，奥斯曼大军也没真正踏进来，所以从罗马时期的城墙地基到哥特式教堂尖塔、从文艺复兴拱廊到巴洛克宫殿外墙，全部叠在同一片街区里。</p>
              <p className="text-gray-700 leading-relaxed mb-4">走在城垣步道上，脚下曾是护城河，头顶是沿墙建起来的民居，有些外墙还是十三世纪留下来的老石头，手指摸上去粗糙又冰凉，墙缝里长着细细的青苔，空气里飘着潮湿的泥土味。建筑风格杂而不乱，罗马、哥特、文艺复兴、巴洛克、洛可可全挤在一块儿，但一点不违和。十六到十七世纪城墙上还加建了棱堡防奥斯曼人，土耳其威胁解除后护城河被填平，富人沿河建起住宅，穷人挤进窄楼，慢慢形成了现在的城堡区格局。</p>
              <p className="text-gray-700 leading-relaxed mb-4">“忠诚之城”不是空名。一九二一年十二月，肖普朗及周边八个村镇公投，百分之六十五的票数选择留在匈牙利而非并入奥地利。至今城市各处都能看到Civitas Fidelissima的铭文和纪念标识。从当时被拆分的国土来看，这份选择沉甸甸的。逛完古城再去看看泛欧野餐纪念碑——一九八九年推倒铁幕的关键事件也发生在这里——就能感受到这座边境小城在百年欧洲史里扮演的角色比它体量大得多。</p>
            </Section>
            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">我是从主广场开始的。第一站直奔防火塔，二百级台阶爬得气喘吁吁，但登顶后红瓦海洋和远处奥地利丘陵同框的视野确实值回票价。下来后看看塔底的忠诚之门浮雕，上面铭刻着公投的历史瞬间。接着在广场上慢慢转，三位一体柱的巴洛克螺旋雕刻非常精细，广场四周的彩色巴洛克立面在上午九到十一点的顺光里饱和度最高，随便拍都好看。然后拐到山羊教堂，外观看上去不算夸张，但巴洛克内装确实华丽，地下还有一条一点五公里的古老墓穴可以探，氛围阴沉但很有穿越感。</p>
              <p className="text-gray-700 leading-relaxed mb-4">逛完教堂我本来计划走北门出去，结果方向搞反了，绕了二十分钟才走回正路——这也是肖普朗的一种玩法，反正怎么走最终都会被某个中世纪拱门吸引过去。下午钻进Új utca彩虹小巷，一边哥特一边文艺复兴，彩色外墙面被午后阳光照得暖烘烘的，空气中偶尔飘来街边咖啡馆刚出炉的烟囱卷甜香。然后沿城垣步道慢慢散步，沿途有信息牌解释罗马时代到中世纪的城墙演变，每走几步就能发现隐藏在民居间的古老石拱门。傍晚去卡利山，日落前半小时抵达，等着看夕阳把整片红屋顶从橘红染成暗金，远处奥地利丘陵的轮廓一点点融入暮色，那一刻觉得白天迷路的两次都值了。</p>
            </Section>
            <Section title="拍照机位">
              <p className="text-gray-700 leading-relaxed mb-4">亲测几个出片位置，直接记下来就行。防火塔顶层，上午九到十一点顺光，全景位，红屋顶层层叠叠一直延伸到远处边境丘陵，塔顶有铁栏杆，带相机的话镜头最好选窄一点的。主广场北侧靠近防火塔入口的位置，下午三到五点光线从西侧打过来，把塔身罗马地基、文艺复兴拱廊和巴洛克绿顶的层次照得清清楚楚，三层建筑风格叠在一起非常上镜。三位一体柱正面，傍晚五到六点逆光拍剪影氛围感拉满，广场上的巴洛克立面在暖调光线下颜色特别饱满。城垣步道Ikva-híd街和Ógabona tér之间的路段，中世纪民居外墙上残留的老石砖肌理极好，阴雨天湿润的石板路面反着微微的光，画面有一种天然的电影感。Új utca中段上午十点前光线最柔和，彩虹色外墙面没有强光硬照，人像很舒服。卡利山观景台日落前一小时上去，面朝东拍老城全景，等天色渐暗、广场灯逐一亮起，暖黄灯光在石板路上晕开，那个瞬间值得等。</p>
            </Section>
            <Section title="附近景点">
              <p className="text-gray-700 leading-relaxed mb-4">逛完古城顺道走过去就行，真心没必要打车。圣米迦勒教堂和访客中心在老城边上的圣米迦勒山丘上，哥特式建筑规模不小，是目前匈牙利仅次于布达佩斯马加什教堂的第二大哥特教堂。但目前访客中心暂时关闭，出发前最好确认一下开放状态。塔罗迪城堡在一个小山坡上，是一家人花了五十年亲手垒出来的石构私宅，外观粗犷，那种野生的建筑感很特别，傍晚去还能俯瞰整座城。从古城步行过去大概二十到二十五分钟，一路穿过安静的住宅区，街边偶尔能闻到花园里飘来的薰衣草味。要是时间充裕还可以去费尔特德湖，坐公交或骑自行车都行，春天水鸟成群，沿湖骑行吹着风特别惬意。泛欧野餐纪念碑也在城郊，了解那段东欧剧变前夕的历史很值得一看。</p>
            </Section>
            <Section title="住宿小贴士">
              <p className="text-gray-700 leading-relaxed mb-4">我住的是老城区一家藏在石拱门后面改建的老房子，房间不大但推开木窗就是红瓦屋顶和防火塔的绿顶，晚上安静到只听见远处教堂的钟声和自己踩在木地板上的吱呀声。</p>
              <p className="text-gray-700 leading-relaxed mb-4">不过得说实话——老城民宿很多没电梯对，部分民宿楼梯又窄又陡，大行李真得三思哦。</p>
              <p className="text-gray-700 leading-relaxed mb-4">城堡区附近很多家庭旅馆建于十八十九世纪的巴洛克或洛可可风格建筑内，氛围感和窗外景观没话说。</p>
              <p className="text-gray-700 leading-relaxed mb-4">如果想省钱，城郊旅馆便宜不少，但晚上七点后公交班次明显减少，打车回城郊得花一千五到两千福林。</p>
              <p className="text-gray-700 leading-relaxed mb-4">预订时一定要看清楚有没有空调——夏天午后房间晒透了，没空调真的闷得睡不着。</p>
              <p className="text-gray-700 leading-relaxed mb-4">另外很多民宿是密码锁自助入住，房东不一定当面接待，英语沟通有时不太顺畅，手机备好翻译软件才安心。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="防火塔（Tűztorony）是老城核心地标，四月到十月上午十点至下午六点开放，十一月到三月缩短到上午十点至下午四点，淡季来得晚的话容易吃闭门羹。山羊教堂（Kecske-templom）通常上午八点到下午四点，但具体时段随季节和宗教活动略有浮动。主广场全天开放，晚上灯光一亮氛围感极好。城里的博物馆开放时间比较杂，比如罗马石藏馆十到三月是周二到周日十点到十四点，四到九月延长到十点到十八点；老城历史展冬季十四点到十八点，夏季十点到十八点，别像我一样周一跑到博物馆门口才发现关门。" />
                <InfoRow icon="🎫" label="门票" value="防火塔成人票一千五百福林，大约四块五欧元。山羊教堂两千福林，折合六欧元左右。中小学生和六十五岁以上长者通常有优惠，三岁以下幼儿和持证残疾人士免费。罗马石藏馆成人三百福林、学生一百五十福林。老城主广场和城垣步道随便逛，不收钱。很多小店和地窖小酒馆只收福林现金，我忘了提前换汇，为了买杯街边热红酒在ATM前排了好一会儿队，真心建议在车站或市区先换好福林再进老城。" />
                <InfoRow icon="📍" label="地址" value="主广场Fő tér，9400 Sopron。防火塔就在广场北侧，走到广场抬头就看见了，根本不会错过。" />
                <InfoRow icon="🚌" label="交通" value="从维也纳坐火车过来最方便，GySEV或ÖBB线路直达，约一小时出头就能到。从布达佩斯出发大概两个半小时，通常要在杰尔换乘一次。大巴方面，FlixBus从维也纳到肖普朗约一小时，票价提前订大概八欧元起。维也纳市区打车到肖普朗约六十到八十欧元，贵是贵但人多分摊还行。抵达后老城全步行，方圆一公里出头，没公交线、没地铁，穿双舒服的鞋就行。火车站到主广场走路十五到二十分钟，实在走不动叫出租车也行，起步约一千福林，五公里大概一千五百福林。街边随机拦车比叫车软件更常见，但司机大多只说匈语或德语，英语沟通略吃力。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
