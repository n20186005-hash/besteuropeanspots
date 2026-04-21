import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布尔日大教堂 Bourges Cathedral｜哥特巅峰的幽蓝之光与平衡奇迹 - 最佳欧洲景点',
  description: '老实说，当我第一眼看到布尔日大教堂时，我愣了几秒钟。它不像巴黎圣母院那样从塞纳河畔优雅地升起，也不像亚眠大教堂那样以令人眩晕的高度冲击你。它匍匐在那里，在布尔日老城一片低矮的砖红色屋顶中，像一艘巨大的、用灰色骨骼搭建的诺亚方舟，宽阔得近乎霸道。走近了，那种压迫感变成了细腻的震撼。五扇大门像五本摊开的...',
}

export default function BourgesCathedralPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '法国', href: '/destinations/france' },
            { label: '布尔日大教堂', href: '/attractions/bourges-cathedral' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`布尔日大教堂・Bourges Cathedral・法国・布尔日`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`老实说，当我第一眼看到布尔日大教堂时，我愣了几秒钟。它不像巴黎圣母院那样从塞纳河畔优雅地升起，也不像亚眠大教堂那样以令人眩晕的高度冲击你。它匍匐在那里，在布尔日老城一片低矮的砖红色屋顶中，像一艘巨大的、用灰色骨骼搭建的诺亚方舟，宽阔得近乎霸道。走近了，那种压迫感变成了细腻的震撼。五扇大门像五本摊开的巨石之书，层层向里凹进，雕刻着最后的审判、圣徒与恶魔，砂岩在历经八百年的风雨后呈现出蜂蜜与灰烬交融的色泽。空气里有种清冷的石头气味，混合着附近面包店飘来的淡淡黄油香。
推开厚重的木门，跨入中殿的那一刻，所有先入为主的想象都被击碎了。声音先于画面抵达——一种深邃的、嗡嗡的背景音，像是建筑本身在呼吸。然后，光抓住了你。没有横亘在中间的耳堂来打断你的视线，你的目光可以毫无阻碍地从脚下一路奔跑到尽头祭坛的微光里，整整120米的纵深！两侧巨型束柱以不可思议的优雅弧度向上升腾，支撑起同样令人屏息的拱顶。但真正的主角是光，是那些从两侧高窗倾泻而下的、被染成宝石蓝色的光。成千上万片13世纪的玻璃，像拼贴的巨大万花筒，将圣经故事、骑士传奇、工匠日常和奇幻生物投射在古老的石地板上，空气里漂浮着彩色的尘埃。
你会发现，这里不像巴黎圣母院那样游人如织。更多的是一些本地人。一个老妇人静静地坐在角落的椅子上，手里攥着念珠；一个父亲低声向孩子解释彩窗上圣乔治屠龙的故事；管理员靠在柱子上，对每一个抬头仰望拱顶露出惊叹表情的游客报以理解的微笑。这座教堂从未远离它的社区，它依然是布尔日人心跳的一部分。傍晚时分，当管风琴声低沉地响起，填充每一个石头的孔隙时，你会明白，这座建筑的伟大不仅仅在于它的尺度和技巧，更在于它创造了一个让时间流速变慢、让心灵得以栖息的“场”。
最打动我的，是那种完美的平衡感。没有炫技般的高度，却用无与伦比的宽度和纵深营造了包容一切的恢弘；没有繁复到令人眼花缭乱的装饰，却将所有的艺术能量都灌注在了“光”这一媒介上。它不试图压倒你，而是邀请你进入，然后温柔地将你包裹。当你站在中殿中央，看着蓝色、红色、绿色的光斑在你身上缓缓移动，听着自己的脚步声在空旷中回响，你会感觉自己也成了这永恒交响乐中的一个音符。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`老实说，当我第一眼看到布尔日大教堂时，我愣了几秒钟。它不像巴黎圣母院那样从塞纳河畔优雅地升起，也不像亚眠大教堂那样以令人眩晕的高度冲击你。它匍匐在那里，在布尔日老城一片低矮的砖红色屋顶中，像一艘巨大的、用灰色骨骼搭建的诺亚方舟，宽阔得近乎霸道。走近了，那种压迫感变成了细腻的震撼。五扇大门像五本摊开的巨石之书，层层向里凹进，雕刻着最后的审判、圣徒与恶魔，砂岩在历经八百年的风雨后呈现出蜂蜜与灰烬交融的色泽。空气里有种清冷的石头气味，混合着附近面包店飘来的淡淡黄油香。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`推开厚重的木门，跨入中殿的那一刻，所有先入为主的想象都被击碎了。声音先于画面抵达——一种深邃的、嗡嗡的背景音，像是建筑本身在呼吸。然后，光抓住了你。没有横亘在中间的耳堂来打断你的视线，你的目光可以毫无阻碍地从脚下一路奔跑到尽头祭坛的微光里，整整120米的纵深！两侧巨型束柱以不可思议的优雅弧度向上升腾，支撑起同样令人屏息的拱顶。但真正的主角是光，是那些从两侧高窗倾泻而下的、被染成宝石蓝色的光。成千上万片13世纪的玻璃，像拼贴的巨大万花筒，将圣经故事、骑士传奇、工匠日常和奇幻生物投射在古老的石地板上，空气里漂浮着彩色的尘埃。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你会发现，这里不像巴黎圣母院那样游人如织。更多的是一些本地人。一个老妇人静静地坐在角落的椅子上，手里攥着念珠；一个父亲低声向孩子解释彩窗上圣乔治屠龙的故事；管理员靠在柱子上，对每一个抬头仰望拱顶露出惊叹表情的游客报以理解的微笑。这座教堂从未远离它的社区，它依然是布尔日人心跳的一部分。傍晚时分，当管风琴声低沉地响起，填充每一个石头的孔隙时，你会明白，这座建筑的伟大不仅仅在于它的尺度和技巧，更在于它创造了一个让时间流速变慢、让心灵得以栖息的“场”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动我的，是那种完美的平衡感。没有炫技般的高度，却用无与伦比的宽度和纵深营造了包容一切的恢弘；没有繁复到令人眼花缭乱的装饰，却将所有的艺术能量都灌注在了“光”这一媒介上。它不试图压倒你，而是邀请你进入，然后温柔地将你包裹。当你站在中殿中央，看着蓝色、红色、绿色的光斑在你身上缓缓移动，听着自己的脚步声在空旷中回响，你会感觉自己也成了这永恒交响乐中的一个音符。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`布尔日大教堂`} />
                <InfoRow label="英文名称" value={`Bourges Cathedral`} />
                <InfoRow label="正式名称" value={`Cathédrale Saint-Étienne de Bourges`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`布尔日`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`法国哥特式建筑鼎盛时期的里程碑，以其革命性的无耳堂结构和空前庞大的彩绘玻璃窗收藏而闻名于世，1992年被联合国教科文组织列为世界遗产。`} />
                <InfoRow label="建筑特色" value={`惊人的宽度与纵深，拥有五座不对称且层层递进的大门立面，以及完全摒弃了传统十字形耳堂的纯净纵向空间。`} />
                <InfoRow label="建筑风格" value={`盛期哥特式风格，兼具巴黎圣母院的典雅与沙特尔大教堂的壮丽，并发展出独特的“布尔日学派”建筑语言。`} />
                <InfoRow label="文化价值" value={`是中世纪神学思想“光即上帝”的完美石质化身，其保存完好的13世纪彩绘玻璃窗是研究当时社会、信仰与艺术的“彩色百科全书”。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年开放，但时间随季节调整。通常为：4月1日至9月30日，上午9:30至下午7:30（最后入场下午6:45）；10月1日至3月31日，上午10:00至下午5:30（最后入场下午4:45）。请注意，周日和宗教节日，上午的参观可能会因礼拜活动推迟开始。塔楼开放时间独立且更短，通常为下午，并可能因天气恶劣而关闭，出发前务必在官网二次确认。`} />
              <InfoRow label="门票价格" value={`主教堂中殿及地下考古地窖免费开放。攀登北塔（“黄油塔”）需购票，成人票价6欧元，优惠票价（学生、失业者等）5欧元，18岁以下免费。提供包含塔楼、圣器室和教堂花园的联票。语音导览租用费用约为3欧元。`} />
              <InfoRow label="地址" value={`Place Étienne Dolet, 18000 Bourges, France`} />
              <InfoRow label="交通方式" value={`布尔日是一个安静的小城，最近的国际机场是巴黎戴高乐机场或奥利机场。从巴黎出发最便捷的方式是乘坐法国高铁（TGV），从巴黎奥斯特里茨火车站出发，约1小时40分钟直达布尔日火车站。火车班次频繁，建议提前在SNCF官网或APP购票以获得优惠价格。从布尔日火车站出来，大教堂那惊人的轮廓就在眼前，步行只需15-20分钟即可抵达，沿着老城区的指示牌轻松漫步是最好的方式。城内也有公交，但线路简单，步行足以探索一切。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从1195年说起，那是一个信仰如火般燃烧的时代。布尔日的大主教亨利·德·苏利，一位与巴黎主教（也是建造巴黎圣母院的关键人物）关系密切的贵人，决心要为自己的教区建造一座配得上其重要地位的圣殿。当时的布尔日是法国中部的重要枢纽，财力雄厚。他们选择将旧罗曼式教堂推倒，在原址上从头开始一个前所未有的梦想。最初的建筑师，其名已湮没在历史中，但他一定是个大胆的梦想家兼精明的工程师。他拿到了一块地形微微倾斜的场地，怎么办？他没有选择费力平整，而是巧妙地将落差转化为戏剧性：西立面和东端的唱诗班位于高地，而中殿部分则建在低处，这为后来宏伟的多门立面和中殿巨大的窗户埋下了伏笔。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`关键的灵感迸发，在于对传统教堂“十字形”平面的决绝摒弃。在沙特尔、在兰斯，宏伟的耳堂是标配，它象征着基督伸展的双臂。但布尔日的建筑师提出了一个革命性的疑问：为什么一定要打断空间的连贯性？他想要一个纯粹的、具有强大方向感和凝聚力的纵向空间，让信徒的目光和灵魂能毫无阻滞地直抵圣坛。于是，我们看到了今天这个没有横向耳堂的“超级长廊”。这不仅是美学冒险，更是结构上的豪赌。为了支撑巨大的侧推力，他设计了两层飞扶壁的复杂系统，像石制的脚手架紧紧箍住建筑的两侧，这在当时是极为先锋的技术。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`建筑过程跨越了近一个世纪，历经多位主教和建筑师之手。你可以从建筑本身读出时间的层次。西立面最早建成，那五座深邃的门廊雕刻于13世纪初，风格还相对古朴庄重。而当我们走到北侧著名的“黄油塔”下，故事就变得有趣起来。这座建于1506年左右的后哥特式塔楼，名字源于一个传说：中世纪大斋期禁止食用黄油，但富有的布尔日市民们通过向教会捐钱（“黄油钱”）获得了特许，这笔“意外之财”据说就用来建造了这座精美的塔楼。它比教堂主体轻盈华丽得多，像一顶精致的石制皇冠，也告诉我们，这座大教堂的建造从未真正停止，它一直在吸收不同时代的审美。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它见证了无数历史时刻。1422年，未来的法国国王查理七世曾在此加冕（尽管他的王国大部分还在英国人手中）。它也幸运地躲过了最致命的摧残。法国大革命期间，暴民洗劫了许多教堂，布尔日大教堂的雕塑也遭到破坏，西立面上许多圣像的头部被凿去。但奇迹般地，那套无与伦比的彩绘玻璃窗几乎完整地保存了下来。有人说，是因为聪明的市民用木板将它们封存保护了起来；也有人说，是这些玻璃画本身描绘了太多市民和工匠的日常生活，让人们心生亲切，手下留情。这些玻璃不只是宗教画，它们是中世纪的“朋友圈”：你能看到农夫耕作、骑士比武、工匠用奇怪的工具劳作，甚至还有当时流行的服饰发型。每一扇窗，都是一段凝固的、发着光的历史。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`两次世界大战的炮火也仁慈地绕过了它。今天的宁静，或许是对它曾历经的动荡与创造艰辛的一份补偿。当你用手触摸那些被无数手掌磨亮的门环，或是坐在长椅上，看一缕阳光正好照亮某块玻璃上某个微笑的圣女面孔时，你连接的不只是石头和玻璃，而是八百年来在此祈祷、惊叹、劳作、生活过的所有生命的轻声回响。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要彻底感受布尔日大教堂，你需要至少留出3-4个小时，并最好选择一个晴朗的上午抵达。光线是这场体验的灵魂导师。建议9点半开门即入，此时游客稀少，晨光正从东端彩窗缓缓渗入，中殿里弥漫着神秘的金蓝色调。先花一个小时沉浸于内部空间，感受光影的流动，细读彩窗故事。然后从北侧出口前往考古地窖，了解这片土地的层层历史。接着，在中午前攀登北塔，这是体力要求最高但视野回报最丰厚的部分。下来后，可在教堂外围漫步，从不同角度欣赏飞扶壁的力学之美和花园的宁静。最后，在下午光线转为暖金色时，再次回到西立面外，你会看到五扇大门上的雕塑呈现出完全不同的质感与立体感。这样的节奏张弛有度，让你从内部的心灵震撼，过渡到外部的结构与历史洞察，完成一次完整的朝圣。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避免周末下午参观，那时可能会有大量旅游团涌入，破坏中殿那份珍贵的静谧与空灵。攀登塔楼的石阶非常原始、狭窄且陡峭，务必穿一双绝对舒适防滑的鞋子，有幽闭恐惧症或严重膝盖问题的朋友请慎重考虑。教堂内请始终保持低声交谈，尤其是在有信徒祈祷的区域，尊重它首先是一个活着的礼拜场所。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨推开西侧中央大门步入中殿，让眼睛慢慢适应从明亮到幽暗，最先捕捉到的是从远方祭坛高窗射下的那道仿佛通往天堂的“光之路径”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着右侧漫步，仰头仔细辨认北侧高窗上保存最完好的“耶稣受难”与“圣母生平”系列彩绘玻璃，寻找其中描绘中世纪日常生活的有趣细节。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到唱诗班席后方，静静地站在著名的“天使柱”前，看十二尊演奏乐器的天使石像如何在幽光中仿佛随时会开始演奏天国的乐章。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从北侧小门走出，沿着螺旋石阶深入凉爽的地下考古地窖，这里层叠的罗马式地基遗迹会无声地告诉你大教堂脚下更古老的千年故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`鼓起勇气攀登那387级狭窄陡峭的石阶登上“黄油塔”顶，在喘息平复后迎接你的将是布尔日老城红色屋顶如波浪般铺展到天际线的全景画卷。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下塔后绕到教堂南侧的花园，这里是从侧面欣赏大教堂庞大身躯与双层飞扶壁精妙结构的绝佳地点，也是当地人晒太阳读书的秘密角落。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后回到西立面广场，找一张长椅坐下，从远处整体观察五座不对称门廊的和谐构图，看日光如何一点点爬过圣徒与先知们的石头面容。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`西立面全景侧拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光时分，站在广场西北角的战神广场边缘，用长焦镜头压缩空间，将五座门廊、玫瑰窗与高耸的塔楼一同纳入构图，展现其宏伟的层次感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`中殿纵深与光影`}</h4>
                  <p className="text-sm text-gray-700">{`必须在晴天的正午前后进入，站在中殿约三分之一处向后拍摄，等待阳光穿透彩窗在地面投下清晰的彩色光斑，将路人作为剪影纳入，能极致展现空间的深邃与光的魔力。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“黄油塔”登顶俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`登塔后不要只拍大远景，将镜头对准近处教堂本身巨大的屋顶森林、错综复杂的飞扶壁骨架与远处老城屋顶的对比，营造强烈的结构感和故事性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`南侧花园仰拍飞扶壁`}</h4>
                  <p className="text-sm text-gray-700">{`下午光线柔和时，躺在南侧花园的草坪上（如果允许）或低角度仰拍，捕捉那些巨大飞扶壁如同巨兽肋骨般的夸张曲线与力量感，天空作为背景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`彩绘玻璃特写`}</h4>
                  <p className="text-sm text-gray-700">{`准备一支长焦或微距镜头，选取北侧高窗上人物表情最生动或色彩最绚丽的局部，如“天使报喜”中圣母蓝色的袍子，拍摄特写，注意关闭闪光灯。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`教堂内部原则上允许不用闪光灯和三脚架的非商业摄影，但使用三脚架可能会在人多时被管理员劝阻，如需长时间曝光，可以尝试用高感光度或寻找稳固的支撑物。拍摄礼拜活动或正在祈祷的个体是绝对禁忌，请始终保持尊重。黄昏后，教堂外部会有灯光打亮，是拍摄夜景魔幻效果的绝佳时机，但需要稳固的三脚架。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`百年老宅体验`}</h4>
                  <p className="text-sm text-blue-800">{`住在距大教堂仅五分钟脚程的一栋15世纪木筋墙老宅改造的精品酒店里，吱呀作响的楼梯、低矮的橡木梁和窗外直接对着教堂塔尖的风景，让你彻底沉浸在中古氛围中。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`宁静花园隐居`}</h4>
                  <p className="text-sm text-green-800">{`选择坐落在教堂北侧静谧街区里的一家小型高级酒店，房间围绕着一个内部庭院花园，早晨在鸟鸣和咖啡香中醒来，避开所有游客的喧嚣。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计感公寓之家`}</h4>
                  <p className="text-sm text-yellow-800">{`租住老城中心广场旁边一套带露台的顶层公寓，白天混迹于本地人的市集，晚上买一瓶桑塞尔白葡萄酒，在露台上伴着大教堂的灯光剪影小酌，假装自己是个布尔日人。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`郊区庄园悠闲`}</h4>
                  <p className="text-sm text-purple-800">{`如果自驾，不妨入住城外几公里处一座18世纪的贵族庄园改造的酒店，在广阔的园林中散步，远眺田野尽头大教堂的轮廓，享受真正的法式田园诗。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`布尔日老城区几乎全是古老的石板路，拖着大行李箱行走会是一场噩梦，选择住宿时请务必确认他们是否提供行李协助或有无电梯。夏季旅游旺季和每年四月的“布尔日之春”音乐节期间，酒店非常紧俏，必须提前数月预订。老城区夜间非常安全宁静，可以放心散步。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开布尔日很久以后，我闭上眼，脑海中浮现的不是某一张具体的照片，而是一种感觉——那种被温和而浩瀚的蓝色空间所包裹的宁静。在这个追求更高、更炫、更刺激的世界里，布尔日大教堂提供了一种截然不同的伟大范式：它不是向上刺破苍穹，而是向内拓展宇宙。它用宽度和深度拥抱你，用缓慢移动的、有温度的光安慰你。它告诉你，平静本身可以是一种磅礴的力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个景点沦为打卡背景、旅行变成速度竞赛的时代，布尔日像一个固执的守望者。它不在地铁口，没有便捷的旅行团套餐，它要求你专程前来，走过一段安静的乡野，进入一座生活节奏缓慢的小城。然后，它才向你展露真容。这种“抵达的过程”，本身就是一个筛选和沉淀心绪的仪式。最终站在它面前的你，已经抛却了一些浮躁。于是，你才能听到石头的声音，读懂光的语言，感受到那份穿越八百年依然鲜活的、属于人类的虔诚与创造力。这不是一次观赏，这是一次呼吸。对于每一个渴望在旅途中找回内心维度，而不只是收集地理坐标的深度旅人来说，布尔日大教堂不是清单上的一个名字，它是一个必须亲自去体验的、关于空间与光的哲学命题。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
