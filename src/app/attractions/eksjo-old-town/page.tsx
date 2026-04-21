import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃克舍老城 Eksjö Old Town｜穿越回那个火柴与松香弥漫的年代 - 最佳欧洲景点',
  description: '第一眼看到埃克舍老城，你会误以为自己跌入了一本泛黄的童话绘本。这里没有恢弘的宫殿或尖啸的现代感，有的只是一种被阳光晒暖的、近乎温柔的秩序感。视线所及，是一排排肩膀挨着肩膀的二层小木屋，它们被刷成赭石黄、茜草红、淡普鲁士蓝和温柔的豆沙绿。这些颜色经过数百年的风雨调和，没有丝毫刺目，像是被时间的手掌反复...',
}

export default function EksjoOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '瑞典', href: '/destinations/sweden' },
            { label: '埃克舍老城', href: '/attractions/eksjo-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`埃克舍老城・Eksjö Old Town・瑞典・埃克舍`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到埃克舍老城，你会误以为自己跌入了一本泛黄的童话绘本。这里没有恢弘的宫殿或尖啸的现代感，有的只是一种被阳光晒暖的、近乎温柔的秩序感。视线所及，是一排排肩膀挨着肩膀的二层小木屋，它们被刷成赭石黄、茜草红、淡普鲁士蓝和温柔的豆沙绿。这些颜色经过数百年的风雨调和，没有丝毫刺目，像是被时间的手掌反复摩挲后，晕染出的独特色泽。空气里飘着一股好闻的复合气味——老松木在阳光下散发出的微甜清香，混合着从某家后院飘来的现磨咖啡香，以及石板缝里青苔的湿润土腥气。
你很快会发现，这座老城的魔力在于它的“活着”。那些挂着白色蕾丝窗帘的窗台后面，是真实的住家。清晨，你会看到穿着家居服的老人推开厚重的木门，取走门外的牛奶瓶和报纸。下午，某个开着半扇窗的工作室里，传出老式刨床打磨木头的“沙沙”声，那是本地木匠在延续祖辈的手艺。街角的面包房，那股让唾液腺瞬间苏醒的焦糖肉桂香气，是每天准时上演的嗅觉交响曲。这里的节奏不是为游客设定的“表演”，而是小镇自己平稳的心跳。你不再是闯入者，而像是一个被允许暂时窥见他们日常的、安静的客人。
最打动人心的是那种深厚的社区感。每条街道似乎都认识它的居民。你会看到邻居隔着花园篱笆闲聊，孩子们在不宽的石板路上追逐，自行车慢悠悠地晃过，车篮里装着刚买的鲜花。这里没有隔离的景区栏杆，居民的花园、晾着衣物的后院，都坦然成为街景的一部分。这种不设防的坦诚，让你感受到一种久违的信任与温暖。埃克舍老城的核心魅力，就在于它提供了一种可能性：让你亲眼见证，历史遗产并非一定要被真空封存，它可以如此自然、如此充满烟火气地，与当代生活温柔共存。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到埃克舍老城，你会误以为自己跌入了一本泛黄的童话绘本。这里没有恢弘的宫殿或尖啸的现代感，有的只是一种被阳光晒暖的、近乎温柔的秩序感。视线所及，是一排排肩膀挨着肩膀的二层小木屋，它们被刷成赭石黄、茜草红、淡普鲁士蓝和温柔的豆沙绿。这些颜色经过数百年的风雨调和，没有丝毫刺目，像是被时间的手掌反复摩挲后，晕染出的独特色泽。空气里飘着一股好闻的复合气味——老松木在阳光下散发出的微甜清香，混合着从某家后院飘来的现磨咖啡香，以及石板缝里青苔的湿润土腥气。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你很快会发现，这座老城的魔力在于它的“活着”。那些挂着白色蕾丝窗帘的窗台后面，是真实的住家。清晨，你会看到穿着家居服的老人推开厚重的木门，取走门外的牛奶瓶和报纸。下午，某个开着半扇窗的工作室里，传出老式刨床打磨木头的“沙沙”声，那是本地木匠在延续祖辈的手艺。街角的面包房，那股让唾液腺瞬间苏醒的焦糖肉桂香气，是每天准时上演的嗅觉交响曲。这里的节奏不是为游客设定的“表演”，而是小镇自己平稳的心跳。你不再是闯入者，而像是一个被允许暂时窥见他们日常的、安静的客人。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的是那种深厚的社区感。每条街道似乎都认识它的居民。你会看到邻居隔着花园篱笆闲聊，孩子们在不宽的石板路上追逐，自行车慢悠悠地晃过，车篮里装着刚买的鲜花。这里没有隔离的景区栏杆，居民的花园、晾着衣物的后院，都坦然成为街景的一部分。这种不设防的坦诚，让你感受到一种久违的信任与温暖。埃克舍老城的核心魅力，就在于它提供了一种可能性：让你亲眼见证，历史遗产并非一定要被真空封存，它可以如此自然、如此充满烟火气地，与当代生活温柔共存。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`埃克舍老城`} />
                <InfoRow label="英文名称" value={`Eksjö Old Town`} />
                <InfoRow label="正式名称" value={`Eksjö Old Town`} />
                <InfoRow label="国家" value={`瑞典`} />
                <InfoRow label="城市" value={`埃克舍`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`瑞典乃至整个北欧保存最完好的木结构城镇典范，一部“活着”的瑞典小镇编年史。`} />
                <InfoRow label="建筑特色" value={`超过200栋色彩柔和、结构精巧的两层木屋连绵成片，构成了一个完整且仍在呼吸的古代城镇肌理。`} />
                <InfoRow label="建筑风格" value={`以16-19世纪瑞典传统木构建筑风格为主，融合了文艺复兴后期、古斯塔夫时期及浪漫民族风格的装饰元素。`} />
                <InfoRow label="文化价值" value={`它并非冰冻的博物馆，而是一个社区，真实展现了工业化之前，瑞典小镇以手工业、贸易和紧密邻里关系为核心的传统生活方式与文化韧性。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`公共区域全天开放。城内各小型博物馆及工作坊开放时间各异，通常为夏季（6月至8月）每日10:00-17:00；春秋季（5月、9月）周二至周日11:00-16:00；冬季（10月至次年4月）多数室内景点仅在周末开放或需预约。重要提示：瑞典的公共假期（如仲夏节、圣诞节）期间几乎所有室内场所都会关闭，但漫步街区不受影响。`} />
              <InfoRow label="门票价格" value={`漫步老城街区完全免费。个别博物馆（如埃克舍木工博物馆、老城博物馆）需购票，成人票约80-100瑞典克朗，学生及青少年有优惠，通常16岁以下免费。建议购买“埃克舍文化通行证”，约150克朗，可进入城内所有合作场馆。`} />
              <InfoRow label="地址" value={`Eksjö Gamla Stan, 575 31 Eksjö, Sweden`} />
              <InfoRow label="交通方式" value={`最近的国际机场是斯德哥尔摩的阿兰达机场（ARN）或哥德堡的兰德维特机场（GOT）。从机场出发，最便捷的方式是乘坐铁路。从斯德哥尔摩中央车站乘坐SJ高速列车前往Nässjö站（约2.5-3小时，班次频繁），然后在Nässjö换乘区域列车（Östgötapendeln）前往埃克舍站（约20分钟，每小时1-2班）。从哥德堡出发，可先乘列车到阿尔维斯塔（Alvesta）再转车，总耗时约3小时。埃克舍火车站步行至老城北门仅需8分钟。购票建议使用SJ或Öresundståg官方App提前预订，有折扣。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`埃克舍的故事，始于一场毁灭性的火焰。早在中世纪，这里就是一个重要的市集地点，但我们现在看到的这座迷人老城，其真正的生日是1568年。那一年，一场席卷全城的大火将几乎所有的木造建筑化为灰烬。这场灾难，却意外地催生了一个城市规划的奇迹。当时的瑞典国王约翰三世没有任由城镇在废墟中杂乱重生，而是下达了一项前瞻性的命令：必须按照统一的规划和防火标准进行重建。于是，一个棋盘格式的街道布局被设计出来，宽阔的主街和整齐的街区得以诞生，这不仅是为了美观，更是为了在火灾发生时能有效阻隔火势。我们今天漫步时感受到的那种和谐与秩序，其基因正来源于这场五百年前的“凤凰涅槃”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`重建后的埃克舍，凭借着地处瑞典南部交通要道的地理优势，迅速繁荣起来。17到19世纪，是它的黄金时代。城镇里聚集了众多技艺精湛的木匠、马车制造商、铁匠和皮革工匠。老城里那些看似朴素的木屋山墙上，常常装饰着精美的风信鸡、雕刻着日期和屋主姓名缩写的小匾额，这便是当时富足市民展示自豪感的方式。要知道，在当时的瑞典，能拥有一栋体面的两层木屋，相当于今天拥有独栋别墅加豪华座驾。这里也是瑞典著名的“火柴之乡”，周边森林提供了充足的木材，使得火柴制造业一度成为支柱产业。你可以想象，当年空气中或许不仅弥漫着松香，还有淡淡的硫磺味，街上满是运送木材和成品火柴的马车。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它能够如此完好地保存至今，堪称一个历史的幸运儿。当欧洲许多古城在工业革命的浪潮中被改造得面目全非，或在两次世界大战的炮火中损毁时，埃克舍却因为瑞典的中立国地位和相对偏远的地理位置，奇迹般地躲过了最直接的破坏。更重要的是，当地居民对自己的遗产有着惊人的自觉与深情。上世纪五六十年代，当“现代化”之风刮遍全球，许多地方热衷于拆旧建新时，埃克舍的市民却发起了一场影响深远的保护运动。他们不是将老房子当作古董供起来，而是倡导“活化利用”：修缮老屋，改善内部设施（比如加入现代化卫生间和厨房），但严格保留其外部历史风貌。这场自下而上的运动，让老城避免了沦为博物馆式的空壳，始终保持着社区的活力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天，当你抚摸那些被岁月打磨得光滑圆润的木栏杆，走过那些微微下凹的石板路时，你触摸的不仅是十六世纪的木材和石头，更是二十世纪中叶那一代埃克舍人充满远见的选择与坚持。每一栋被保留下来的房子背后，可能都有一户家庭为了维持原貌而付出更多修缮成本的故事。正是这种代代相传的珍视，让埃克舍没有成为历史教科书里一张褪色的插图，而是成为一页仍然在书写新鲜故事的、活生生的篇章。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`游览埃克舍老城，精髓在于“慢”和“细”。建议你在一个晴朗的平日早晨，大约9点左右抵达。这时候旅游巴士还未到来，小镇刚刚苏醒，光线柔和，是感受本地生活气息和拍照的黄金时间。整体游览可以安排4-5个小时，节奏务必悠闲。从老城北端的火车站方向开始，慢慢向南渗透到街区深处，最后以湖边漫步收尾。这样的路线符合历史发展的脉络（从主要商业街向住宅区延伸），也能在体力消耗最大的中午前后，安排一些室内博物馆参观作为调剂。请务必穿一双极其舒适、适合走石板路的鞋子。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避免周六上午前往，那是本地大集市日，虽然热闹但人潮汹涌，难以静心品味老城的宁静之美。
许多小博物馆和手工作坊周一闭馆，规划行程时务必提前查看官网确认。
这里的石板路和鹅卵石路对行李箱轮子和高跟鞋极不友好，请务必选择双肩包和平底鞋。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从北面沿着Österlånggatan街走进老城，让第一缕阳光把那些彩色的木屋立面照得透亮，像是给整个小镇刷上了一层蜂蜜。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在老城中心的Stora Torget广场停下，找一张长椅坐下，观察市政厅那栋朴素的黄色建筑，看本地人如何在广场周围的咖啡馆开始他们的一天。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要钻进那条最窄的巷子Gränden，侧身通过时用手掌感受两边古老木板墙的纹理，抬头看一线天的奇妙景致。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访那家总飘出诱人香气的传统面包房，买一个刚出炉的“kanelbulle”肉桂卷，站在路边趁热吃完，让糖霜沾满嘴角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进埃克舍木工博物馆，不只是看展品，更要留意听工作人员讲述他们祖父辈是如何用这些工具打造出一整个城镇的。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选一条安静的后街，比如Smedjegatan，慢慢踱步，仔细欣赏每栋房子门口各不相同的小花园、独特的门环和窗台上的装饰品。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在午餐时间，找一家由老房子改造的餐厅，坐在靠窗的位置，点一份经典的瑞典肉丸配越橘酱，看着窗外行人悠闲往来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`饭后散步走到老城南端的埃克舍湖，沿着栈道走一走，从水面的倒影中回望老城那片宁静的屋顶轮廓线。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`北门入口仰拍长街`}</h4>
                  <p className="text-sm text-gray-700">{`早晨8-10点间，站在Österlånggatan街北端，用长焦镜头压缩街道景深，捕捉阳光洒在连绵彩色木屋立面上形成的冷暖色调对比与纵深感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`Gränden窄巷透视`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时（约11点-13点），巷子底部会被照亮，站在巷口往里拍，能拍出强烈的明暗对比和深邃的线条透视，人物侧影剪裁会非常出彩。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`Stora Torget广场侧角`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点的侧光时分，从广场东南角拍摄市政厅及其倒影在湿润石板路上的画面，等待一个骑自行车的人或一位戴帽子的老人走入构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`湖边倒影全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时（夏季约晚上8点后），走到湖南侧的小坡上，用广角镜头捕捉老城建筑群倒映在平静湖面的完整镜像，天空若有晚霞则色彩绝美。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`某扇彩窗的特写`}</h4>
                  <p className="text-sm text-gray-700">{`随时发现一扇漂亮的窗户，可能是挂着白色蕾丝窗帘的蓝色窗框，凑近拍摄其细节，将虚化的街景作为背景，营造故事感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`建议携带一支24-70mm和一支70-200mm镜头，分别用于拍摄街景环境和建筑细节、压缩街巷空间。`}</li>
                <li>• {`拍摄居民房屋和花园时务必保持尊重，未经明确许可不要将镜头对准私人庭院内部或窗口的人，瑞典人非常重视隐私。`}</li>
                <li>• {`冬季雪后是拍摄的绝佳时机，白雪覆盖的屋顶和彩色的木墙形成强烈反差，但需注意保暖和防滑。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`老城边缘的“Värdshuset Eksjö”家庭旅馆，由一栋19世纪商人住宅改建，房间小巧温馨，楼梯吱呀作响，包含丰盛的自制早餐，老板娘会热情推荐本地人最爱去的面包店。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`“Hotell Eksjö”本身就在老城保护建筑内，部分房间保留了原始的木梁和壁炉，推开窗就是宁静的后街，晚上能听到远处教堂的钟声，仿佛睡在历史里。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`位于埃克舍湖畔的“Eksjö Södra Berg”度假酒店，距离老城步行约15分钟，房间拥有直面湖景和森林的阳台或露台，提供桑拿和自行车租赁，适合想要在静谧自然中放松的旅客。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`独特尝试`}</h4>
                  <p className="text-sm text-purple-800">{`租住老城内由传统木屋整体改造的度假公寓，通常拥有设施齐全的小厨房和客厅，让你像本地人一样去广场买菜、回家做饭，沉浸式体验“小镇居民”的一日生活。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿数量非常有限且极其抢手，尤其是在夏季和圣诞市场期间，务必提前至少2-3个月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`埃克舍整体治安极好，夜晚街道安静明亮，独自旅行也完全不必担心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果选择住在老城外，请确认住宿地点在步行可达范围内（1.5公里内），因为小镇的公交系统并不发达，而步行是体验其氛围不可或缺的部分。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开埃克舍许久后，我发现自己最怀念的，不是某栋特别的房子，而是那种弥漫在整个街区的、从容不迫的“时间感”。在这个一切都在追求更快、更亮、更刺激的世界里，埃克舍像一个温柔的“异类”。它不试图用震撼的景观冲击你，而是用日常的细节浸润你。它让你相信，美不一定需要宏伟的尺度，幸福可以藏在一扇刷得仔细的窗框里，一杯午后阳台上的咖啡里，或者邻居间一声熟悉的问候里。这里的时间流速似乎是不同的，它允许你发呆，允许你无所事事地观察一片云怎样掠过教堂的尖顶。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`对于那些厌倦了打卡式旅行、渴望真正触摸历史纹理和在地生活温度的深度旅者来说，埃克舍是一剂良药。它教会我们的，是一种“深度的注视”。它告诉我们，遗产保护最高的境界，不是把它锁进玻璃柜，而是让它继续呼吸，继续容纳早晨的面包香气和孩子的笑声。来这里，不仅仅是看一个“景点”，更是经历一场关于如何与历史共处、如何在现代化洪流中守护精神原乡的深刻启示。在埃克舍弯弯曲曲的街巷里走上一整天，你带走的会不止是照片，更是一种内心被熨帖平整的宁静，以及一个关于“家园”可以多么美好、多么坚韧的珍贵信念。这，或许才是旅行能赋予我们的，最宝贵的礼物。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/visby" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维斯比老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Visby</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kalmar-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡尔马城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kalmar Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lund-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    隆
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">隆德大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lund Cathedral</p>
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
