import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '库尔老城 Chur Old Town｜漫步瑞士最古老城市的千年石板路，感受阿尔卑斯山门户的生活脉搏 - 最佳欧洲景点',
  description: '你从库尔火车站走出来，沿着Poststrasse大街往南走，不过五六分钟，喧嚣的现代交通声就像被一道无形的墙隔开了。拐进一条小巷的瞬间，世界变了。脚下是那种被无数双脚打磨了数百年的光滑鹅卵石，走起来有种温润的起伏感，行李箱轮子在上面发出咕噜咕噜的抗议，你只好把它提起来——这是老城给你的第一个下马威，...',
}

export default function ChurOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '瑞士', href: '/destinations/switzerland' },
            { label: '库尔老城', href: '/attractions/chur-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`库尔老城・Chur Old Town・瑞士・库尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你从库尔火车站走出来，沿着Poststrasse大街往南走，不过五六分钟，喧嚣的现代交通声就像被一道无形的墙隔开了。拐进一条小巷的瞬间，世界变了。脚下是那种被无数双脚打磨了数百年的光滑鹅卵石，走起来有种温润的起伏感，行李箱轮子在上面发出咕噜咕噜的抗议，你只好把它提起来——这是老城给你的第一个下马威，让你慢下来。
空气的味道是清冽的，混合着从旁边面包店飘出的、刚刚出炉的“库尔黑麦面包”那种微酸的焦香，还有从古老石墙缝隙里渗出的、一丝丝潮湿的凉意。阳光在这里变得很奢侈，它只能从那些高耸的、颜色各异的房屋尖顶之间斜射下来，在石板路上切割出一块块明亮的光斑和深邃的阴影。你抬头看，那些建筑的外墙仿佛在讲故事：淡黄色的墙面上是精致的文艺复兴壁画，虽然有些褪色，但骑士和花卉的轮廓依然清晰；隔壁那栋楼的木制凸窗（Erker）雕刻着繁复的葡萄藤图案，窗台上摆着鲜红的天竺葵，在逆光中毛茸茸的。
最打动人的，是这里的“活着”。这不是一个仅供参观的布景。你身边，一位老太太推开一扇厚重的、带着铁饰的木门，门铃叮当作响，她进去后，门缝里飘出咖啡的香味。穿着冲锋衣、背着登山包的徒步者，和拎着公文包、行色匆匆的本地人在狭窄的拱廊下擦肩而过。历史在这里不是被供奉起来的，它就是每天的呼吸、脚步声和邻居间的问候声。库尔老城最核心的魅力，就在于这种毫不费力的古今交融——五千年的历史，就沉淀在这些咖啡馆的桌椅下、玩具店的橱窗外、以及孩子们追逐跑过的巷弄里，厚重，却无比轻盈。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你从库尔火车站走出来，沿着Poststrasse大街往南走，不过五六分钟，喧嚣的现代交通声就像被一道无形的墙隔开了。拐进一条小巷的瞬间，世界变了。脚下是那种被无数双脚打磨了数百年的光滑鹅卵石，走起来有种温润的起伏感，行李箱轮子在上面发出咕噜咕噜的抗议，你只好把它提起来——这是老城给你的第一个下马威，让你慢下来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`空气的味道是清冽的，混合着从旁边面包店飘出的、刚刚出炉的“库尔黑麦面包”那种微酸的焦香，还有从古老石墙缝隙里渗出的、一丝丝潮湿的凉意。阳光在这里变得很奢侈，它只能从那些高耸的、颜色各异的房屋尖顶之间斜射下来，在石板路上切割出一块块明亮的光斑和深邃的阴影。你抬头看，那些建筑的外墙仿佛在讲故事：淡黄色的墙面上是精致的文艺复兴壁画，虽然有些褪色，但骑士和花卉的轮廓依然清晰；隔壁那栋楼的木制凸窗（Erker）雕刻着繁复的葡萄藤图案，窗台上摆着鲜红的天竺葵，在逆光中毛茸茸的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，是这里的“活着”。这不是一个仅供参观的布景。你身边，一位老太太推开一扇厚重的、带着铁饰的木门，门铃叮当作响，她进去后，门缝里飘出咖啡的香味。穿着冲锋衣、背着登山包的徒步者，和拎着公文包、行色匆匆的本地人在狭窄的拱廊下擦肩而过。历史在这里不是被供奉起来的，它就是每天的呼吸、脚步声和邻居间的问候声。库尔老城最核心的魅力，就在于这种毫不费力的古今交融——五千年的历史，就沉淀在这些咖啡馆的桌椅下、玩具店的橱窗外、以及孩子们追逐跑过的巷弄里，厚重，却无比轻盈。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`库尔老城`} />
                <InfoRow label="英文名称" value={`Chur Old Town`} />
                <InfoRow label="正式名称" value={`Chur Old Town`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`库尔`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`拥有超过五千年连续居住史的瑞士最古老城市，是阿尔卑斯山北部重要的文化和交通门户。`} />
                <InfoRow label="建筑特色" value={`中世纪街巷、文艺复兴时期的外墙壁画、哥特式教堂与现代精品店和谐共存，形成一个活生生的建筑编年史。`} />
                <InfoRow label="建筑风格" value={`以中世纪晚期和文艺复兴时期的民用建筑为主，混合了罗马式、哥特式及巴洛克式的宗教建筑元素。`} />
                <InfoRow label="文化价值" value={`一个并非博物馆式冻结的古城，而是当地居民日常生活的舞台，完美体现了历史传承与现代活力的共生。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城区的街道、广场和外部建筑全天24小时开放。内部重要景点如库尔大教堂（Cathedral of the Assumption of Mary）开放时间为周一至周六上午9:00至下午6:00，周日下午1:00开放；雷蒂亚博物馆（Rätisches Museum）开放时间为周二至周日上午10:00至下午5:00。部分小型教堂和庭院开放时间可能缩短，建议出行前再次核实。冬季（11月至3月）部分景点可能提前关闭或仅限预约参观。`} />
              <InfoRow label="门票价格" value={`漫步库尔老城本身是免费的。进入库尔大教堂免费，但鼓励捐赠。雷蒂亚博物馆门票为成人12瑞士法郎，学生及老年人10瑞士法郎，16岁以下儿童免费。圣马丁教堂塔楼登顶通常收取约2-5瑞士法郎的小额费用。城市导览徒步游（含英语）价格约为20-25瑞士法郎/人。持有瑞士旅行通票（Swiss Travel Pass）可免费进入雷蒂亚博物馆。`} />
              <InfoRow label="地址" value={`Altstadt, 7000 Chur, Switzerland`} />
              <InfoRow label="交通方式" value={`库尔是瑞士东部重要的交通枢纽。从苏黎世机场（ZRH）出发最方便：直接在机场火车站乘坐直达的城际列车（IC）或区间快车（IR），约1小时20分钟即可抵达库尔火车站，班次频繁，高峰时段每半小时一班。从火车站出站后，步行5-10分钟即可踏入老城区的边缘，全程无需换乘。强烈建议使用瑞士联邦铁路（SBB）的官方App购买车票，可实时查看班次和站台信息。如果在瑞士境内长线旅行，购买瑞士旅行通票是性价比最高的选择。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`让我们把时间倒回五千年以前。那时，在普莱苏尔河和莱茵河交汇处的这片台地上，最早的定居者已经在此生息。他们留下的痕迹无声，却奠定了这里“永恒之地”的基调。真正让库尔登上历史舞台的，是罗马人。大约公元前15年，罗马帝国在此设立了“库里亚·雷托鲁姆”的驻军点，作为控制阿尔卑斯山雷蒂亚行省的战略要冲。你可以想象一下，当时的士兵站在今日大教堂所在的山丘上，眺望着通往数个重要山口的道路，那种掌控大局的感觉。罗马市场、神殿和浴场的遗迹，至今仍沉睡在老城的石板路之下，偶尔在施工时重见天日，提醒人们这里的根有多深。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`罗马帝国崩塌后，混乱并未吞噬这里。相反，库尔在早期基督教时期的重要性与日俱增。公元451年，库尔教区被首次提及，它逐渐成为阿尔卑斯地区一个强大的宗教中心。到了中世纪，库尔主教不仅是精神领袖，更成为了拥有广袤领地的世俗君主，“主教亲王”的称号意味着权力与财富。我们今天看到的宏伟的库尔大教堂，就是这段辉煌时期的产物。它的建造始于12世纪，持续了数百年，厚重的罗马式地基与后期轻盈的哥特式拱顶奇妙地结合在一起，仿佛一部石头的史诗，记录着信仰与权威的变迁。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史从不总是一帆风顺。15世纪，库尔卷入了激烈的宗教改革浪潮。当地一位名叫约翰·科曼德的改革家，就在圣马丁教堂激烈地宣讲新教教义，与坚守天主教的主教势力分庭抗礼。这场精神上的撕裂最终以一种瑞士特有的方式解决：和平共存。1526年，库尔达成了宗教和解协议，城市被划分为天主教和新教两个社区，各自拥有自己的教堂和权利。你如今在老城里看到的天主教堂（大教堂）与新教教堂（圣马丁教堂）比邻而居，正是这段宽容历史的鲜活见证，它塑造了库尔兼容并包的城市性格。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`19世纪，火车的轰鸣改变了阿尔卑斯的宁静。当第一条铁路修到库尔时，它从一个相对封闭的山谷中心，一跃成为通往圣莫里茨、达沃斯等世界级度假胜地的门户。贵族和富有的旅行者们在此中转，老城的旅馆和商铺因此繁荣。但这股现代化的浪潮并没有推倒古老的城墙（实际上，大部分城墙在19世纪被拆除了以便城市扩张），而是为老城注入了新的活力。商人们将文艺复兴风格的壁画重新粉饰，银行家们建起了优雅的新古典主义宅邸，它们都巧妙地嵌入到了原有的城市肌理中。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`两次世界大战，瑞士的中立让库尔幸免于战火，古老街巷得以完整保存。战后的库尔继续扮演着“阿尔卑斯山门户”的角色，但它更聪明了。它没有把自己变成纯粹的旅游商品，而是坚定地保持了居住功能。政府有严格的法规保护历史建筑的外立面，但内部可以进行现代化的改造。于是，你看到的是：一栋15世纪的房子里，楼下是设计感十足的灯具店，楼上则住着年轻的家庭。五千年的历史层累于此，最终成就了一个不是化石、而是有机体的老城，每一天，它的故事都在被新的生活续写。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味库尔老城，我强烈建议你留出一整天的时间，并且一定要在早上9点之前抵达。清晨是老城的黄金时刻，本地居民开始一天的活动，送货的小车轻轻驶过，店铺陆续开门，阳光以极低的角度照亮那些壁画，而大批一日游的游客尚未涌入。整个游览节奏应该是悠闲的、漫无目的的“迷失”。从老城西北角的“上城门”开始，让弯弯曲曲的小巷自然地引领你，由西向东，由高到低，最终抵达莱茵河畔。这样的路线符合历史上海拔较高的区域是权力与宗教中心（大教堂山丘），而较低处是商业与民居区的格局，你能在步行中直观感受到这种微妙的城市社会学。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿一双绝对舒适的平底鞋是老城游览的第一铁律，高跟鞋和光滑底的鞋子在鹅卵石路上是灾难。
周末的下午老城中心可能会比较拥挤，尤其是靠近火车站的入口处，尽量错峰游览核心街道。
大部分餐厅的菜单都有德语和英语，但如果看到只有德语的“每日菜单”，那往往是地道又划算的选择。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从上城门（Obertor）那敦厚的石拱下穿过，仿佛正式跨入了中世纪的时光隧道。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`任由自己被错综复杂的小巷带着走，在每一个挂满鲜花的凸窗和褪色壁画前驻足发呆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`去老市政厅（Rathaus）前的广场，坐在长椅上观察本地人如何在此碰面、聊天、享受晨间咖啡。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要走进库尔大教堂那略显幽暗的内部，让眼睛适应光线后，寻找那些古老的浮雕和彩绘玻璃。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`摸一摸圣马丁教堂外墙上那个著名的、被摸得发亮的“幸运石”，听听当地关于它的传说。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在拱廊街（Arcaden）的阴影下漫步，浏览那些小巧的橱窗，从手工巧克力店到户外装备店应有尽有。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一家地窖餐厅或街边咖啡馆坐下，点一份格劳宾登风味的干肉配黑面包，像当地人一样午餐。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午的时间留给雷蒂亚博物馆，在那些精美的房间彩绘和考古发现里，读懂这片土地的灵魂。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 9 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果脚力尚可，慢慢散步到老城东侧的葡萄园平台，回望整个老城红瓦屋顶在阿尔卑斯山背景下的全景。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`大教堂山丘的侧面小巷`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点的侧光能完美勾勒出大教堂罗马式塔楼的坚实轮廓和石墙的质感，以狭窄的巷子作为前景框架。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`拱廊街的纵深视角`}</h4>
                  <p className="text-sm text-gray-700">{`选择一条有连续拱廊的街道（如Kornplatz附近），在正午阳光直射时拍摄，强烈的明暗对比能创造出戏剧性的光影长廊。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`葡萄园平台全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时前往老城东侧的“布兰塔山”葡萄园步行小径，用长焦镜头压缩空间，将红瓦屋顶、教堂尖塔和远处积雪的山峰一同纳入画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣马丁塔楼俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`如果塔楼开放登顶，这里是拍摄老城迷宫般街巷格局的最佳地点，建议使用广角镜头，并将广场上的人物作为画面的比例尺和生机点缀。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`文艺复兴壁画的微距`}</h4>
                  <p className="text-sm text-gray-700">{`找到一堵保存完好的外墙壁画（如Untere Gasse），在清晨柔和的光线下贴近拍摄细节，斑驳的色彩和剥落的痕迹本身就是历史的故事。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄居民住宅的窗户或私人庭院时务必保持尊重，如果院内有人，最好微笑示意或放弃拍摄。`}</li>
                <li>• {`瑞士的清晨和黄昏光线非常纯净且持续时间短，尤其是秋冬季节，务必提前规划好机位，珍惜黄金一小时。`}</li>
                <li>• {`老城街巷狭窄，使用广角镜头（如16-35mm）能更好地捕捉环境氛围，而一支大光圈定焦镜头（如35mm或50mm）则适合在室内或弱光下捕捉细节。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`下榻于老城中心由16世纪贵族宅邸改造的精品酒店，睡在厚重的木梁下，清晨在私密的内庭花园里被鸟鸣唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计爱好者之选`}</h4>
                  <p className="text-sm text-green-800">{`位于老城边缘一栋经过极致改造的现代风格酒店，将清水混凝土与古老的石墙并置，房间窗户正对着圣马丁教堂的钟楼。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`家庭温馨之选`}</h4>
                  <p className="text-sm text-yellow-800">{`选择住在离老城步行10分钟距离的安静住宅区家庭旅馆，主人会为你准备丰盛的格劳宾登早餐，并分享只有本地人才知道的小径。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`山景养生之选`}</h4>
                  <p className="text-sm text-purple-800">{`住在坐落在城市上方山坡上的四星级酒店，乘坐迷你缆车轻松上下，在房间阳台或露天温泉池中，将整个库尔盆地和阿尔卑斯群山的画卷尽收眼底。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的酒店通常不设停车场，且汽车无法进入，自驾者需使用城外的公共停车场并步行进入，预订时务必确认停车方案。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`库尔是前往多个阿尔卑斯度假区的起点，夏季徒步季和冬季滑雪季的住宿非常紧俏，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`选择包含早餐的住宿非常值得，你能品尝到本地特色的蜂蜜、奶酪和风干牛肉，为一天的探索充足电。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开库尔好些日子了，但闭上眼，最先想起的不是某个具体的建筑画面，而是一种混合的感觉：指尖触碰冰凉石墙的粗糙触感，空气中那种清冽又带着面包香的味道，还有在迷宫般小巷里“迷失”时，心中那份奇妙的安宁。库尔老城最深的触动，就在于它消除了“景点”与“生活”之间那堵看不见的墙。在这里，历史不是橱窗里被锁起来的展品，它就是老太太手提篮里的苹果，是木匠作坊里传出的锯木声，是孩子们在广场喷泉边溅起的水花。它让你相信，一个地方可以活得那么久，却依然保持如此生动鲜活的表情。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求速度和新奇的世界里，库尔提供了一种截然不同的旅行价值——它不是让你去“打卡”，而是邀请你来“体验一种延续性”。走在五千年来人类不断行走的同一条路上，你会对“时间”这个概念产生全新的感悟。时间在这里不是线性的消耗，而是层层的积淀，每一代人都在前人的地基上建造自己的生活，并小心地留下印记。对于每一位厌倦了浮光掠影、渴望触摸欧洲真实脉搏的深度旅行者来说，库尔老城都是一个必须到来的地方。它不会用惊心动魄的奇观震撼你，却会用一种绵绵不绝的、日常的诗意浸润你，最终让你带走一份关于“永恒”的、温暖而坚实的记忆。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/aigle-castle-vineyard-museum" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃格勒城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Aigle Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lindau-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    林
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">林道老城区</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lindau Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/murten-medieval-lake-city-walls" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    穆
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">穆尔滕环湖古城墙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Murten (Morat) City Walls</p>
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
