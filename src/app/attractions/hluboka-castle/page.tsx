import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '赫卢博卡城堡 Hluboká Castle｜捷克纯白童话宫殿，波希米亚的温莎梦 - 最佳欧洲景点',
  description: '第一眼看到赫卢博卡城堡，你可能会以为自己不小心闯入了某部迪士尼电影的片场。它不是从山岩里生长出来的那种粗粝古堡，而是像一个巨大、精致、甜到过分的奶油蛋糕，被轻轻放置在伏尔塔瓦河畔平缓的绿色丘陵上。那种白，不是冷冰冰的苍白，而是带着奶油或象牙般温润光泽的白，在捷克清澈得近乎透明的天空下，与周围深绿色的...',
}

export default function HlubokaCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '捷克', href: '/destinations/czech-republic' },
            { label: '赫卢博卡城堡', href: '/attractions/hluboka-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`赫卢博卡城堡・Hluboká Castle・捷克・南波希米亚州，赫卢博卡镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到赫卢博卡城堡，你可能会以为自己不小心闯入了某部迪士尼电影的片场。它不是从山岩里生长出来的那种粗粝古堡，而是像一个巨大、精致、甜到过分的奶油蛋糕，被轻轻放置在伏尔塔瓦河畔平缓的绿色丘陵上。那种白，不是冷冰冰的苍白，而是带着奶油或象牙般温润光泽的白，在捷克清澈得近乎透明的天空下，与周围深绿色的针叶林、修剪齐整的英国式草坪形成了戏剧性的对比。车子沿着林荫道驶近时，它层层叠叠的尖塔、精巧的城垛和数不清的窗户，就像一首用石头写成的浪漫主义诗篇，每一个音节都在阳光下闪闪发亮。
走到护城河的石桥上，感官才真正被唤醒。空气里有松针、刚割过的青草和远处河水的湿润气息。脚下是粗粝的石板，抬头仰望，那些白色砂岩外墙上布满了精细到不可思议的雕刻——神话动物、家族纹章、缠绕的藤蔓，阳光在凹凸的纹路上投下深深浅浅的影子，仿佛墙壁本身在呼吸。你会听到鸟鸣，听到风穿过塔楼之间发出的轻微呼啸，偶尔还有远处花园里园丁修剪灌木的“咔嚓”声。它美得如此不真实，却又有实实在在的生活气息——当地人会在城堡围墙外的步道上遛狗、慢跑，仿佛这座庞然大物只是他们日常风景里一个理所当然的邻居。
穿过厚重的橡木大门，踏入内部，那股扑面而来的富丽堂皇会让你瞬间倒吸一口凉气。如果说外观看似童话，内部则是将“极致奢华”这个词诠释到了骨髓里。大厅的墙面完全被深色、闪着幽光的橡木雕刻覆盖，天花板上垂下重达数百公斤的水晶吊灯，光线经过无数切面折射，在描绘着骑士史诗的彩绘玻璃窗映衬下，洒下钻石般细碎的光斑。图书馆里，从地板到天花板的书架上塞满了皮革装订的珍本，空气里弥漫着旧纸张、羊皮和木头混合的、令人心安的味道。更不用说那间仿照英国温莎城堡圣乔治厅打造的宴会厅，长桌可以坐下几十位宾客，墙上挂满狩猎战利品和盔甲，仿佛下一秒就能听见刀叉轻碰和贵族们的低语。这里的每一寸空间，都在诉说着一个家族对于“完美居所”近乎偏执的梦想。
但最打动我的，并不是这些肉眼可见的奢华。而是在某个转角，你可能会看到一扇敞开的、不那么“展览”的窗，窗台上放着一盆小小的天竺葵；或者在马厩旁，闻到干草和马匹特有的温热气味，看到老饲养员不紧不慢地刷着马毛。这座城堡，既有作为博物馆被精心供奉起来的一面，也有依然“活着”的、充满温度的一面。它不仅仅是施瓦岑贝格家族的丰碑，更是一个关于美、权力、失落与重生，被小心翼翼地保存下来的波希米亚之梦。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到赫卢博卡城堡，你可能会以为自己不小心闯入了某部迪士尼电影的片场。它不是从山岩里生长出来的那种粗粝古堡，而是像一个巨大、精致、甜到过分的奶油蛋糕，被轻轻放置在伏尔塔瓦河畔平缓的绿色丘陵上。那种白，不是冷冰冰的苍白，而是带着奶油或象牙般温润光泽的白，在捷克清澈得近乎透明的天空下，与周围深绿色的针叶林、修剪齐整的英国式草坪形成了戏剧性的对比。车子沿着林荫道驶近时，它层层叠叠的尖塔、精巧的城垛和数不清的窗户，就像一首用石头写成的浪漫主义诗篇，每一个音节都在阳光下闪闪发亮。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走到护城河的石桥上，感官才真正被唤醒。空气里有松针、刚割过的青草和远处河水的湿润气息。脚下是粗粝的石板，抬头仰望，那些白色砂岩外墙上布满了精细到不可思议的雕刻——神话动物、家族纹章、缠绕的藤蔓，阳光在凹凸的纹路上投下深深浅浅的影子，仿佛墙壁本身在呼吸。你会听到鸟鸣，听到风穿过塔楼之间发出的轻微呼啸，偶尔还有远处花园里园丁修剪灌木的“咔嚓”声。它美得如此不真实，却又有实实在在的生活气息——当地人会在城堡围墙外的步道上遛狗、慢跑，仿佛这座庞然大物只是他们日常风景里一个理所当然的邻居。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过厚重的橡木大门，踏入内部，那股扑面而来的富丽堂皇会让你瞬间倒吸一口凉气。如果说外观看似童话，内部则是将“极致奢华”这个词诠释到了骨髓里。大厅的墙面完全被深色、闪着幽光的橡木雕刻覆盖，天花板上垂下重达数百公斤的水晶吊灯，光线经过无数切面折射，在描绘着骑士史诗的彩绘玻璃窗映衬下，洒下钻石般细碎的光斑。图书馆里，从地板到天花板的书架上塞满了皮革装订的珍本，空气里弥漫着旧纸张、羊皮和木头混合的、令人心安的味道。更不用说那间仿照英国温莎城堡圣乔治厅打造的宴会厅，长桌可以坐下几十位宾客，墙上挂满狩猎战利品和盔甲，仿佛下一秒就能听见刀叉轻碰和贵族们的低语。这里的每一寸空间，都在诉说着一个家族对于“完美居所”近乎偏执的梦想。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但最打动我的，并不是这些肉眼可见的奢华。而是在某个转角，你可能会看到一扇敞开的、不那么“展览”的窗，窗台上放着一盆小小的天竺葵；或者在马厩旁，闻到干草和马匹特有的温热气味，看到老饲养员不紧不慢地刷着马毛。这座城堡，既有作为博物馆被精心供奉起来的一面，也有依然“活着”的、充满温度的一面。它不仅仅是施瓦岑贝格家族的丰碑，更是一个关于美、权力、失落与重生，被小心翼翼地保存下来的波希米亚之梦。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`赫卢博卡城堡`} />
                <InfoRow label="英文名称" value={`Hluboká Castle`} />
                <InfoRow label="正式名称" value={`Hluboká nad Vltavou Castle`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`南波希米亚州，赫卢博卡镇`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`波希米亚地区新哥特式建筑的巅峰之作与浪漫主义的化身，被誉为“捷克的温莎城堡”。`} />
                <InfoRow label="建筑特色" value={`纯白色砂岩外观与无数尖塔、雉堞和精雕细琢的窗棂构成的梦幻轮廓，仿若从童话书中直接走出。`} />
                <InfoRow label="建筑风格" value={`19世纪英格兰温莎哥特复兴风格，融合了捷克本土的工艺与装饰细节。`} />
                <InfoRow label="文化价值" value={`见证了施瓦岑贝格家族数百年权力与艺术的交融，是贵族生活美学与民族精神认同的珍贵载体。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡主体通常于四月至十月对公众开放，具体为周二至周日 9:00 - 16:30（夏季旺季可能延长至17:30），周一闭馆休息（若遇法定假日可能开放）。十一月至次年三月开放时间大幅缩短，通常仅限周末或有组织的预约参观。城堡内部导览游分多条线路，每条线的开放时间可能略有不同，务必提前在官网核对。马厩、花园等附属设施开放时间可能更灵活。圣诞节至新年期间有特殊闭馆安排。`} />
              <InfoRow label="门票价格" value={`城堡导览游基础线路（如代表房间线路）成人票约为350捷克克朗（约14欧元）。第二条线路（如私人房间或厨房线路）票价约为250克朗。学生、青少年（6-17岁）及65岁以上老人可享受半价优惠。家庭套票（2成人+最多3名儿童）约为850克朗。仅参观城堡花园、马厩或观景塔费用更低，约100-150克朗。可通过官网在线预订获得小额折扣，部分国家法定假日可能有免费开放日。`} />
              <InfoRow label="地址" value={`Zámek 142, 373 41 Hluboká nad Vltavou, Czechia`} />
              <InfoRow label="交通方式" value={`最便捷的大交通枢纽是布拉格。从布拉格主火车站（Praha hl.n.）乘坐火车前往捷克布杰约维采（České Budějovice），车程约2-2.5小时，班次频繁。抵达捷克布杰约维采后，在火车站前的公交总站换乘11路或7路城市公交车，约20-25分钟即可直达赫卢博卡城堡（站名：Hluboká nad Vltavou, zámek）。公交车班次约每小时1-2班，周末可能减少。建议购买捷克铁路（ČD）的电子票，并在公交车上向司机购买单程票。自驾从布拉格出发约2小时，城堡设有大型收费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`赫卢博卡的故事，远在它变成今天这副纯白模样之前就开始了。13世纪中叶，波希米亚国王普热米斯尔·奥托卡二世在这里建造了一座坚固的哥特式城堡，用来守护重要的贸易路线，并炫耀王权。它最初的名字“Fraulb”，在古德语里是“深水”的意思，指的就是城堡脚下那段幽深的伏尔塔瓦河湾。在接下来的几个世纪里，它像棋盘上的棋子，在波希米亚的各位国王和贵族领主手中流转，见证了胡斯战争的烽烟，也经历了文艺复兴时期的初步改造，但本质上，它始终是一座军事功能大于审美功能的堡垒。它的命运转折点，出现在1661年。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`那一年，来自巴伐利亚的施瓦岑贝格家族买下了这座城堡。这个家族后来成为哈布斯堡帝国最有权势、最富有的贵族家族之一。他们最初按照当时流行的巴洛克风格对城堡进行了大规模改建，增加了华丽的装饰和法式花园，试图抹去中世纪的沉重感。然而，真正让赫卢博卡脱胎换骨的，是19世纪的一位女主人——埃莉奥诺拉·施瓦岑贝格公主。这位热爱艺术、受过极好教育的贵族女性，在陪伴丈夫出使英国时，深深迷恋上了温莎城堡所代表的、那种充满浪漫与骑士精神的哥特复兴风格。她心中萌生了一个宏大的梦想：要把自己那已经有些过时的巴洛克式家宅，改造成波希米亚的“温莎”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，从1840年开始，一场持续了近三十年的浩大工程开始了。公主和她的丈夫扬·阿道夫二世公爵聘请了当时顶尖的建筑师，彻底拆除了大部分巴洛克结构，仅保留了部分地下酒窖和墙体。他们以温莎城堡为蓝本，但并未简单照搬，而是融入了大量捷克本土工匠的智慧。那些洁白的外墙石材来自本地采石场，成千上万的木雕出自本地木匠之手，彩绘玻璃由布拉格的工坊烧制。整个城堡被赋予了全新的、童话般的轮廓：陡峭的屋顶、高耸的尖塔、带有垛口的围墙、无数精美的凸窗和阳台。内部则极尽奢华，公爵夫妇搜罗了整个欧洲最好的家具、挂毯、绘画和武器盔甲，将每一个房间都打造成艺术的圣殿。当工程最终完工时，这座纯白的宫殿不仅是一个家，更是施瓦岑贝格家族财富、权力和艺术品位的终极宣言。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，20世纪的动荡没有放过它。随着二战的结束和1947年《特殊化法案》的通过，施瓦岑贝格家族的财产被新成立的捷克斯洛伐克国家没收。城堡一度面临被改作行政机构甚至仓库的命运。幸运的是，它作为“人民文化遗产”被保留下来，并于1950年代作为博物馆向公众开放。但长期的忽视和管理不善，让这座精美的建筑一度陷入衰败。直到1990年代天鹅绒革命后，才开始了系统性的、耗资巨大的修复工程。今天，当我们漫步在光洁如新的走廊里，欣赏着被精心修复的壁画和家具时，背后是无数文物修复专家数十年的心血。赫卢博卡的故事，从王室的堡垒，到贵族的梦想之家，再到人民的博物馆，本身就是一部微缩的捷克历史。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整体验赫卢博卡的魔力，建议安排至少一整天的时间。最好在上午9点开门前就抵达，这时旅游团尚未涌入，清晨柔和的光线洒在白色城堡上是最佳的拍照时机。整体游览节奏应“先外后内，先高后低”：上午先围绕城堡外部和花园漫步，感受其整体气势与自然环境；午餐后参加一次导览游深入城堡内部，领略极致奢华；最后在下午时分前往马厩或河边散步，悠闲结束。这样的安排能让你避开室内游览的最高峰，也能在不同光线下欣赏城堡多变的美。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季（7-8月）是绝对的高峰期，内部导览游门票很可能提前售罄，务必在官网预订。城堡内部大部分房间禁止拍照，请尊重规定。花园和公园面积广阔且多坡道石子路，务必穿一双绝对舒适的步行鞋。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从停车场出发，先不要急着奔向主堡，而是绕到城堡东侧池塘的对岸，那里能拍到城堡连同其水中倒影的经典全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着林荫道走近城堡，仰头仔细观察那些白色外墙上密密麻麻、讲述着神话与家族故事的浮雕与滴水兽。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`通过石桥进入第一进庭院，在这里顺时针绕行一圈，感受不同角度的塔楼与城墙如何组合成如交响乐般丰富的轮廓线。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随英语导览团（或使用语音导览）进入城堡内部，从挂满鹿角与盔甲的狩猎厅开始，让橡木雕刻的香气与彩绘玻璃的光影将你包裹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在公爵那间拥有三万册藏书的图书馆里稍作停留，想象一下黄昏时分在此点灯阅读的宁静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着华丽的螺旋楼梯登上主塔楼（若开放），虽然台阶陡峭，但登顶后俯瞰整个南波希米亚如棋盘般的田野与森林的视野绝对值得。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡侧门走出，一头扎进占地近两百公顷的英式风景公园，沿着蜿蜒的小路寻找藏在林间的浪漫小亭与雕塑。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后参观城堡南翼的马厩，这里仍饲养着骏马，空气中弥漫着干草和皮革的味道，是感受城堡“活着”的一面的最佳地点。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡东侧池塘（Zámecký rybník）北岸`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，利用平静的水面拍摄城堡及其完美倒影，建议使用广角镜头，将前景的芦苇或野花也纳入构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`英式花园的玫瑰花丛小径`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点左右，阳光斜射，以低角度拍摄，让盛开的玫瑰作为前景，远端的白色城堡尖塔作为背景，营造浪漫的景深。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从城堡高塔（若开放）向西北方向拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`俯瞰伏尔塔瓦河巨大的“Ω”形河湾，以及河对岸的赫卢博卡小镇红屋顶，最佳光线在晴朗的下午。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城堡南翼马厩的拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`利用拱门形成的天然画框，拍摄城堡主体建筑，特别是当一匹马从拱门前经过时，能增添生动感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`冬季雪后从正门前广场拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`纯白的城堡与纯白的大地融为一体，只有深色的窗洞和塔尖勾勒出线条，宛如童话插图，全天光线皆可但需注意保暖。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`航拍器在城堡及花园上空严格禁止飞行。室内严禁使用闪光灯和三脚架（除非持有特殊许可证）。拍摄当地人或在马厩等区域，一个友好的微笑和事先示意总是受欢迎的。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`童话隔壁`}</h4>
                  <p className="text-sm text-blue-800">{`城堡步行五分钟距离内由老房子改造的家庭旅馆，主人会给你讲述爷爷辈在城堡工作的故事，早餐有家传的蜂蜜。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`河畔时光`}</h4>
                  <p className="text-sm text-green-800">{`伏尔塔瓦河对岸的精品设计酒店，房间拥有直面城堡的落地窗，晚上看着灯光勾勒的城堡轮廓入睡是独一无二的体验。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`贵族余韵`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车十五分钟可达的19世纪乡村庄园酒店，本身就像个小城堡，有壁炉酒吧和自家酒窖，适合追求宁静与品味的旅人。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`林中隐居`}</h4>
                  <p className="text-sm text-purple-800">{`藏在城堡后方森林公园里的木质小屋民宿，醒来只有鸟鸣和透过树叶的阳光，适合徒步爱好者与彻底想逃离喧嚣的人。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`赫卢博卡小镇本身非常小且宁静，大部分住宿都是家庭式经营，提前数月预订夏季房间是明智之举。自驾旅客可以考虑住在稍远但更有风情的捷克布杰约维采老城（车程20分钟），夜生活与餐饮选择丰富得多。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开赫卢博卡很久以后，脑海里挥之不去的，不是那些具体的水晶吊灯或橡木浮雕，而是一种感觉——一种关于“极致”与“梦想”得以被实现和保存的震撼。在这个世界上，有多少人有能力，更有魄力，去将一个遥不可及的浪漫幻想（比如“把我家变成温莎城堡”），投入三十年光阴和难以计数的财富，最终凝固成石头、木头和玻璃的现实？施瓦岑贝格家族做到了。这不仅仅关乎财富，更关乎一种强大的、近乎天真的信念，关乎对美的不妥协追求。站在今天回望，这份“任性”为我们留下了一件无与伦比的艺术品。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在一切都追求效率、实用和快速迭代的今天，赫卢博卡像是一个来自旧世界的、缓慢而悠长的叹息。它提醒我们，人类曾经如此热衷于创造“无用”之美，并愿意为此付出几代人的努力。它不仅仅是一个旅游景点，更是一个关于执着、传承与幸存的故事。每一位热爱深度游的旅人，都应该来这里待上一天。不只是为了看一座漂亮的白色城堡，更是为了感受这种将梦想变为现实的巨大能量，触摸那段将个人家族史与国家民族史紧密交织的复杂时光。在这里，你会明白，有些美，之所以能穿越时间直击人心，是因为它最初诞生于一颗充满热爱、毫无保留的心。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/olomouc-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥洛穆茨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Olomouc Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lednice-valtice" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莱
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莱德尼采–瓦尔季采庄园</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lednice–Valtice Cultural Landscape</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/telc-historic-centre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    泰
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">泰尔奇历史中心</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Telč Historic Centre</p>
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
