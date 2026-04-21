import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '希腊小众旅行攻略｜约阿尼纳老城实用指南，新手轻松出行 - 最佳欧洲景点',
  description: '帕姆沃提达湖边，城堡从水里直接长出来的那种老城。城墙里面住了人，石板巷子里有咖啡馆飘香，清真寺宣礼塔和东正教堂钟楼隔空对望。Ali Pasha在这儿称王称霸最后被砍了头，银匠的手艺传了几百年。亲测，这...',
}

export default function IoanninaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '希腊', href: '/destinations/greece' },
            { label: '约阿尼纳', href: '/destinations/greece' },
            { label: '约阿尼纳老城', href: '/attractions/ioannina' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">约阿尼纳老城</h1>
          <p className="text-xl text-gray-600 mb-4">Ioannina</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">希腊</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">约阿尼纳</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">帕姆沃提达湖边，城堡从水里直接长出来的那种老城。城墙里面住了人，石板巷子里有咖啡馆飘香，清真寺宣礼塔和东正教堂钟楼隔空对望。Ali Pasha在这儿称王称霸最后被砍了头，银匠的手艺传了几百年。亲测，这地方游客不多，逛着逛着就像掉进了拜占庭和奥斯曼的夹层里。</p>
            </Section>
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">开放时间：城堡区全天免费进，24小时开放。但里面的博物馆有时段限制：拜占庭博物馆夏季（4月至10月）8:00-20:00，冬季（11月至3月）8:30-15:30，周二闭馆。银器博物馆每天9:00-16:00，免费入场。考古博物馆夏季8:00-20:00，冬季8:30-15:30，周二闭馆，门票8欧。别像我一样周二兴冲冲跑过去，吃了两个闭门羹。</p>
              <p className="text-gray-700 leading-relaxed mb-4">门票：城堡区免费。拜占庭博物馆5欧。考古博物馆8欧。湖心岛船票往返3-5欧。Ali Pasha博物馆约4欧。真心建议买联票或者挑一两个感兴趣的，全看下来有点密集。</p>
              <p className="text-gray-700 leading-relaxed mb-4">地址：Castle of Ioannina, Glikidon 2, Ioannina 45221, Greece</p>
              <p className="text-gray-700 leading-relaxed mb-4">交通：从雅典坐KTEL大巴，每天5班，车程5个半小时左右，票价37-51欧。从塞萨洛尼基过来约3个半小时。从雅典飞过来45分钟，约阿尼纳机场（IOA）离市区只有4公里，打车10欧以内。机场到市区公交1.5欧。老城很小，基本靠腿就能逛完。</p>
              <p className="text-gray-700 leading-relaxed mb-4">最佳游览季节：亲测4月到6月、9月到10月最舒服，20度出头，不冷不热，光线也温柔。夏天7-8月能到35度，湖边还好但中午暴晒。冬天冷但人少，能拍到湖面起雾的魔幻画面。</p>
              <p className="text-gray-700 leading-relaxed mb-4">建议游览时长：一整天。上午逛城堡和博物馆，中午湖边吃鱼，下午坐船上岛，傍晚沿着湖滨大道散步。紧凑一点半天也能看完老城核心，但会错过坐船的感觉。</p>
              <p className="text-gray-700 leading-relaxed mb-4">注意事项：穿舒服的鞋子，石板路湿了有点滑。带现金，小摊和部分船票只收现金。夏天带防晒和水。周日部分店铺关门，但湖边咖啡馆开着。</p>
            </Section>
            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">逛着逛着发现，这座城的历史全刻在石头上了。城堡是6世纪拜占庭皇帝查士丁尼修的，号称希腊最古老的还在住人的城堡。奥斯曼时期Ali Pasha在这儿当土皇帝，把城堡扩成自己的地盘，连清真寺都改了几座。他的墓就在Its Kale里面，旁边是Fethiye清真寺，宣礼塔还在但早就不做礼拜了。最触动我的是城堡里住着人——老奶奶在自家门口择菜，小孩在城墙根踢球，历史不是锁在玻璃柜里的，是过出来的。银匠这门手艺传了几百年，街上银器店叮叮当当的声音从来没断过。罗马尼奥特犹太人在这里住了两千多年，二战期间几乎被纳粹连锅端，现在整个社区剩下不到50人。走在巷子里能闻到历史烧焦的味道，但又有人间烟火气往上冒。</p>
            </Section>
            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">真心建议早上8点半从城堡西门进去，人少光线好。先逛Its Kale卫城，Fethiye清真寺和Ali Pasha墓在一块儿，旁边是拜占庭博物馆，看完大概1小时。然后往西南角走，穿小巷到Aslan Pasha清真寺，1618年建的，现在是民俗博物馆，院子里的老梧桐树夏天能遮掉大半太阳。顺着城堡南墙往外走，到银器博物馆（就在城堡东门边上），免费，半小时够了。出来差不多11点半，去湖滨吃午饭。下午坐船上岛，船半小时一班，航程10来分钟。岛上没车，全是石头房子和窄巷子，Ali Pasha最后死在这个岛的Agios Panteleimon修道院里。逛完岛坐船回来，沿着Molos湖滨大道往南走，傍晚的时候湖面像镜子一样，能看到米齐克利山脉倒映在水里。全程不赶路大概6-7小时，慢慢晃一天刚好。</p>
            </Section>
            <Section title="拍照机位">
              <p className="text-gray-700 leading-relaxed mb-4">Its Kale卫城东侧城墙豁口——傍晚5-6点逆光，湖面和远处的山都镀上一层金色，人站墙边拍剪影很好看。城堡西门外的老台阶——上午9-10点顺光，台阶两侧是老石墙和野生九重葛，坐下来仰拍背景干净。湖心岛码头台阶——上午10点前，湖面平静的时候能拍到完整的倒影，云和房子都在水里。Aslan Pasha清真寺庭院的老梧桐树下——正午阳光透过树叶打碎光，人站在光影交接处出片。城堡南墙外的小广场——上午光线从东边过来，打在城堡外立面和石板路上，纹理很清晰。Molos湖滨大道靠近Mavili广场那一段——傍晚日落前20分钟，湖面变粉紫色，拍大景把湖、山、天都框进去。踩过一个小坑，上午在Its Kale拍的时候忘了调白平衡，回来一看全偏蓝，后来重新设成日光模式才正常。真心建议上午10点前和下午4点后光线最软，中午顶光不适合拍人。</p>
            </Section>
            <Section title="附近景点">
              <p className="text-gray-700 leading-relaxed mb-4">逛完老城顺道去Perama洞穴，从城堡北门走过去大概15分钟如果小孩或者老人可能会半小时的样子，路上经过居民区，有几家卖蜂蜜和橄榄油的小店。洞穴门票9欧，游览45分钟，里面钟乳石挺震撼的，常年15度，夏天进去很凉快的。有导游带着走，讲希腊语我一句没听懂，但不影响看。亲测值不值得专门去？说实话你对地质没什么兴趣的话就别去如果有好奇心也不是不可以走一趟，老城和湖心岛已经够逛了。</p>
              <p className="text-gray-700 leading-relaxed mb-4">至于考古博物馆嘛就在城堡西北边500米，走路7分钟，门票8欧。里面摆了很多陶罐、雕像、墓碑，从史前到罗马时期。不是考古迷的话可能会觉得闷没啥看头，我也就看了几尊大理石雕像，光线打在上面挺有味道的。时间紧跳过它不亏。</p>
              <p className="text-gray-700 leading-relaxed mb-4">如果时间充裕，真心建议租车往北开1小时去Zagori石头村，石拱桥和山景无敌，但至少要大半天这种得看行程安排。或者往东1.5小时去Meteora，悬崖修道院全世界独一份。从约阿尼纳当天往返有点赶——我试过早上8点出发，到那儿快10点，爬了两个修道院就下午两三点，再开回来天都黑了，累得不行。真心建议在卡兰巴卡住一晚，第二天慢慢逛。</p>
            </Section>
            <Section title="住宿小贴士">
              <p className="text-gray-700 leading-relaxed mb-4">住老城城堡里面氛围没得说，晚上推开窗就是石板巷子和暖黄灯光，走到哪都近。但我踩过一个坑——城堡里的民宿大多在老房子里，楼梯窄还陡，我拎着24寸箱子爬三楼，手差点磨出泡。真心建议带大行李箱的慎重选城堡内住宿，或者提前确认有没有电梯。住湖滨大道沿线视野好，但靠马路晚上车声有点吵，关窗能忍。住现代城区便宜不少，走路到老城10分钟以内，房子新电梯大。郊区便宜但晚间公交少，从老城玩到晚上9点想回去只能打车，每趟5-6欧，加起来不如住城里划算。预订的时候留意有没有空调——夏天中午屋里轻松过30度，没空调熬不住。我是提前三周在平台找的湖滨中段公寓，走路到城堡5分钟，带小阳台晚上看湖景吹风，比老城内便宜大概15-20欧。</p>
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
                <InfoRow icon="📍" label="地址" value="Castle of Ioannina, Ioannina 452 21, Greece" />
                <InfoRow icon="🚌" label="交通" value="从雅典乘 KTEL 大巴约 5.5 至 6 小时到约阿尼纳；从塞萨洛尼基约 3.5 小时。约阿尼纳机场距老城约 5 公里，打车约 10 至 15 分钟，市区公交可到湖滨和城堡周边。自驾走 Egnatia Odos 或 E90 进城，建议停在湖滨大道或城堡外停车区后步行入内。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
