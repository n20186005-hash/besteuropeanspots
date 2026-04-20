import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃斯泰尔戈姆大教堂 Esztergom Basilica｜匈牙利最大教堂，多瑙河畔的白色信仰巨塔 - 最佳欧洲景点',
  description: '还记得第一次看见它时的震撼吗？我从多瑙河对岸的斯洛伐克小镇过来，坐着一艘小小的渡轮，河水是那种灰绿色的、沉静的颜色。船缓缓靠岸，我一抬头，心脏好像漏跳了一拍。在城堡山的最高处，一座巨大无比的白色教堂，像一个从神话里走出来的巨人，正把它那个宏伟得不可思议的圆顶，沉沉地压向铅灰色的天空。那一刻，风从河面...',
}

export default function EsztergomBasilicaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '埃斯泰尔戈姆大教堂', href: '/attractions/esztergom-basilica' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`埃斯泰尔戈姆大教堂・Esztergom Basilica・匈牙利・埃斯泰尔戈姆`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`还记得第一次看见它时的震撼吗？我从多瑙河对岸的斯洛伐克小镇过来，坐着一艘小小的渡轮，河水是那种灰绿色的、沉静的颜色。船缓缓靠岸，我一抬头，心脏好像漏跳了一拍。在城堡山的最高处，一座巨大无比的白色教堂，像一个从神话里走出来的巨人，正把它那个宏伟得不可思议的圆顶，沉沉地压向铅灰色的天空。那一刻，风从河面上吹来，带着水汽和远方树林的味道，而你耳边只剩下自己咚咚的心跳，和渡轮引擎渐渐熄灭的噗噗声。它太高了，太巨大了，那种威严和压迫感，隔着一条河都能准确无误地传递过来。
开始沿着之字形的山路向上爬。脚下的石板被无数朝圣者和游客磨得光滑温润，路两旁是安静的民居，偶尔有老奶奶从窗户里探出头来晾衣服。离得越近，越觉得自己的渺小。走到教堂广场前的最后一段阶梯，你需要仰起头，几乎九十度，才能看到正门上方的三角楣和那些圣徒的雕像。巨大的科林斯式圆柱，每一根都需要几个人才能环抱，它们沉默地站立着，撑起了整片天空。推开那扇厚重的青铜大门，光线骤然暗下来，一股混合了古老石头、蜡烛烟和微弱霉味的、属于“历史”的独特气味，温柔地将你包裹。
走进主殿，第一个感觉是空阔，然后是明亮。光线从高达100米的圆顶中央倾泻而下，像一道神圣的追光，正好打在主祭坛上。你得花好几分钟，才能让眼睛适应这宏伟的尺度，才能看清那些繁复的金色装饰、色彩鲜艳的壁画，以及支撑起整个穹顶的、肋条分明的骨架。最不能错过的是主圣坛，那上面有一幅由米开朗基罗的弟子创作的、用一整块红木雕刻的《圣母升天》图，据说是世界上最大的单幅祭坛画。在某个安静的午后，阳光透过高高的彩绘玻璃，把红、蓝、绿的光斑投在冰凉的大理石地面上，你或许会看到一两个当地人，静静地坐在长椅上，低头祈祷。对他们而言，这里不止是一个景点，它是这个国家信仰的心脏，每一次跳动，都回荡着一千年的声音。
走到侧面的小门，买一张票，去攀登圆顶吧。那三百多级旋转台阶是段小小的考验，狭窄、昏暗，只听得见自己粗重的呼吸和脚步的回声。但当你终于从那个小小的出口钻出来，站在环绕圆顶的露天回廊上时，整个世界都在你脚下铺开。多瑙河像一条银色的缎带，把匈牙利和斯洛伐克温柔地分开，对岸的房屋小得像积木，远处的群山层叠如浪。风毫无阻挡地吹过，你会真切地感受到，这座建筑不仅连接着大地与天空，也连接着过去与现在，连接着凡俗与神圣。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`还记得第一次看见它时的震撼吗？我从多瑙河对岸的斯洛伐克小镇过来，坐着一艘小小的渡轮，河水是那种灰绿色的、沉静的颜色。船缓缓靠岸，我一抬头，心脏好像漏跳了一拍。在城堡山的最高处，一座巨大无比的白色教堂，像一个从神话里走出来的巨人，正把它那个宏伟得不可思议的圆顶，沉沉地压向铅灰色的天空。那一刻，风从河面上吹来，带着水汽和远方树林的味道，而你耳边只剩下自己咚咚的心跳，和渡轮引擎渐渐熄灭的噗噗声。它太高了，太巨大了，那种威严和压迫感，隔着一条河都能准确无误地传递过来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`开始沿着之字形的山路向上爬。脚下的石板被无数朝圣者和游客磨得光滑温润，路两旁是安静的民居，偶尔有老奶奶从窗户里探出头来晾衣服。离得越近，越觉得自己的渺小。走到教堂广场前的最后一段阶梯，你需要仰起头，几乎九十度，才能看到正门上方的三角楣和那些圣徒的雕像。巨大的科林斯式圆柱，每一根都需要几个人才能环抱，它们沉默地站立着，撑起了整片天空。推开那扇厚重的青铜大门，光线骤然暗下来，一股混合了古老石头、蜡烛烟和微弱霉味的、属于“历史”的独特气味，温柔地将你包裹。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进主殿，第一个感觉是空阔，然后是明亮。光线从高达100米的圆顶中央倾泻而下，像一道神圣的追光，正好打在主祭坛上。你得花好几分钟，才能让眼睛适应这宏伟的尺度，才能看清那些繁复的金色装饰、色彩鲜艳的壁画，以及支撑起整个穹顶的、肋条分明的骨架。最不能错过的是主圣坛，那上面有一幅由米开朗基罗的弟子创作的、用一整块红木雕刻的《圣母升天》图，据说是世界上最大的单幅祭坛画。在某个安静的午后，阳光透过高高的彩绘玻璃，把红、蓝、绿的光斑投在冰凉的大理石地面上，你或许会看到一两个当地人，静静地坐在长椅上，低头祈祷。对他们而言，这里不止是一个景点，它是这个国家信仰的心脏，每一次跳动，都回荡着一千年的声音。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走到侧面的小门，买一张票，去攀登圆顶吧。那三百多级旋转台阶是段小小的考验，狭窄、昏暗，只听得见自己粗重的呼吸和脚步的回声。但当你终于从那个小小的出口钻出来，站在环绕圆顶的露天回廊上时，整个世界都在你脚下铺开。多瑙河像一条银色的缎带，把匈牙利和斯洛伐克温柔地分开，对岸的房屋小得像积木，远处的群山层叠如浪。风毫无阻挡地吹过，你会真切地感受到，这座建筑不仅连接着大地与天空，也连接着过去与现在，连接着凡俗与神圣。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`埃斯泰尔戈姆大教堂`} />
                <InfoRow label="英文名称" value={`Esztergom Basilica`} />
                <InfoRow label="正式名称" value={`埃斯泰尔戈姆宗座圣殿（Esztergomi Bazilika）`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`埃斯泰尔戈姆`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`匈牙利天主教会的最高圣地，国家历史与宗教的诞生地。`} />
                <InfoRow label="建筑特色" value={`拥有匈牙利最大、世界第四大的教堂圆顶，以及令人惊叹的地下墓室和欧洲最大的单幅祭坛画。`} />
                <InfoRow label="建筑风格" value={`新古典主义与部分文艺复兴元素的宏伟结合。`} />
                <InfoRow label="文化价值" value={`见证了匈牙利王国的建立、奥斯曼帝国的占领与哈布斯堡王朝统治下的复兴，是民族精神与信仰的永恒象征。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`大教堂主体开放时间通常为每日上午8:30至下午5:00。圆顶观景台、教堂珍宝馆及地下墓室的开放时间可能有所不同，通常为上午9:00至下午4:30。冬季（11月至次年3月）开放时间可能缩短，夏季（7-8月）可能延长至下午6:00。具体日期请以官网公告为准，天主教重要节日（如圣诞节、复活节）期间开放时间变动较大。`} />
              <InfoRow label="门票价格" value={`进入大教堂主殿免费。参观圆顶观景台、教堂珍宝馆及地下墓室需要购买门票。常规联票价格约为2000匈牙利福林（约5欧元）。学生、老人及团体通常有折扣，约为1500福林。6岁以下儿童免费。购票地点位于教堂入口左侧的游客中心。`} />
              <InfoRow label="地址" value={`Szent István tér 1, Esztergom 2500, Hungary`} />
              <InfoRow label="交通方式" value={`最近的国际机场是布达佩斯李斯特·费伦茨国际机场（BUD）。从布达佩斯出发最为方便：在布达佩斯火车西站（Nyugati pályaudvar）乘坐前往埃斯泰尔戈姆的火车，车程约1小时15分钟，班次频繁（约每小时一班）。出埃斯泰尔戈姆火车站后，步行上山约25分钟即可抵达大教堂，也可在站前乘坐公交（如1路或8路）到“Bazilika”站下，节省体力。自驾可将车停在山脚下的付费停车场。建议使用匈牙利国铁（MÁV）APP提前查询火车时刻表并在线购票。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从一千多年前说起。公元10世纪末，匈牙利人的首领，后来被尊为圣人的伊什特万一世，就在这里，埃斯泰尔戈姆的城堡山上，接受了天主教的洗礼，并加冕成为匈牙利的第一位国王。这里顺理成章地成为了王国的第一个首都和宗教中心。最早建在这里的，是一座罗马式的教堂，规模不大，却是整个匈牙利基督教信仰的摇篮。你可以想象，在那些篝火摇曳的夜晚，来自拉丁世界的传教士们，就是在这里，向刚刚结束游牧生涯的马扎尔人，讲述着另一个关于上帝和救赎的故事。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`接下来的几个世纪，埃斯泰尔戈姆作为大主教驻地，不断扩建。一座哥特式的宏伟主教座堂拔地而起，成为了中欧最壮丽的建筑之一。然而，历史的转折点伴随着刀剑与硝烟到来。16世纪，所向披靡的奥斯曼土耳其帝国大军压境。1526年，匈牙利军队在莫哈奇战役中惨败，王国陷入分裂。1543年，埃斯泰尔戈姆城堡在顽强的抵抗后最终陷落。土耳其人把这座伟大的教堂改成了清真寺，华丽的基督教装饰被覆盖或摧毁，钟声被宣礼声取代。那长达150年的占领期，是这座圣殿最黑暗的岁月，它在异教的旗帜下沉默，但深埋在地基里的信仰火种，从未真正熄灭。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到17世纪末，哈布斯堡王朝的军队将土耳其人逐出匈牙利。胜利的喜悦很快被眼前的荒凉冲淡——昔日辉煌的教堂已成一片废墟，只剩下残垣断壁。整个18世纪，人们都在缓慢地进行清理和初步重建，一座巴洛克风格的新教堂被规划出来。但真正的转机，出现在19世纪初的民族觉醒时代。匈牙利人渴望一座能与民族荣耀相匹配的、前所未有的宏伟建筑，来宣告他们的复兴。1820年，在著名建筑师帕克·亚诺什等人的主持下，新教堂的奠基仪式举行。他们摒弃了巴洛克风格，选择了当时象征理性、秩序与古典复兴的新古典主义，立意要建造一座“永恒”的丰碑。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`建造过程本身就是一部史诗。它跨越了将近半个世纪，历经资金短缺、设计修改，甚至是一场灾难——1868年，已经建到70米高的巨大圆顶，在一次施工事故中轰然倒塌，瓦砾堆满了广场。这场灾难没有击垮人们，反而激起了全国上下更强烈的支持。最终，在建筑师约瑟夫·希尔德的设计监督下，新的、更坚固的圆顶重新竖立起来，并采用了当时最先进的铸铁骨架技术。1875年，这座经历了无数磨难的大教堂终于举行了盛大的祝圣典礼。它的落成，不仅仅是一座建筑的完工，更是一个民族在历经外族统治、战争创伤后，重新站立起来的精神宣言。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`进入20世纪，它继续见证着风云变幻。二战时期，它奇迹般地躲过了严重的轰炸。但在冷战期间，它矗立在“铁幕”的最前线，河对岸就是另一个阵营。它的尖塔成了瞭望塔，它的钟声成了希望的回响。1991年，教皇约翰·保罗二世到访，在这里主持了盛大的弥撒，数十万信众聚集，那场景仿佛让人看到了中世纪全民信仰的回归。今天，你触摸到的每一块石头，都浸透着这部跌宕起伏的民族史诗。它不再仅仅是石头和灰泥的造物，它是活着的史书，每一道纹理都在无声地诉说着坚守、毁灭与重生的永恒循环。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正感受埃斯泰尔戈姆大教堂的灵魂，我建议你留出至少4到5个小时，并最好在一个工作日的上午抵达（比如9点左右）。这样可以避开周末的人潮和旅行团，享受相对宁静的清晨氛围。整体的游览节奏应该是“由外而内，自下而上，最后归于宁静”。先从外部感受它的磅礴气势，然后进入内部沉浸于神圣的艺术空间，接着挑战圆顶获得上帝的视角，最后在周边的古迹和河畔漫步中消化所有的震撼。这样的安排能让你从视觉、身体到心灵，层层递进地体验这座建筑的伟大。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`进入教堂主殿内部，请务必保持安静并着装得体，避免无袖上衣和过短的裤裙，这是对当地信众的基本尊重。
购买门票时，强烈推荐选择包含圆顶、地下墓室和珍宝馆的联票，单独购买非常不划算，珍宝馆的价值被严重低估。
如果时间充裕，一定要体验一下往返于埃斯泰尔戈姆和斯洛伐克Štúrovo小镇之间的渡轮，从河中央回望大教堂的视角是无与伦比的。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从多瑙河畔的码头或停车场出发，先别急着上山，绕到教堂的东南侧，找一个开阔的位置，好好端详这座矗立在城堡山之巅的白色巨塔与背后广阔天空构成的完整画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着古老的“之”字形步道缓缓上山，感受脚下的历史石阶，并留意沿途那些可以俯瞰多瑙河与对岸斯洛伐克的绝佳缝隙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从正面的巨大阶梯步入教堂前广场，仰头凝视那宏伟的新古典主义立面和高耸的圆顶，让那种肃穆的压迫感完全笼罩你。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开沉重的青铜大门进入主殿，先在入口附近静立几分钟，让你的眼睛适应昏暗，然后慢慢走向中殿中央，感受从圆顶天窗倾泻而下的神圣光柱。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花足够的时间细细观摩主祭坛上那幅巨大的《圣母升天》镀金木雕画，并绕到祭坛后方，看看那些精美的小礼拜堂和红衣主教们的墓碑。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从侧殿的小门进入，购买联票后先不要急着登顶，而是向下走入阴凉而庄严的地下墓室，那里安息着历代大主教，气氛凝重而神秘。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从地下返回后，开始攀登通往圆顶观景台的狭窄螺旋楼梯，在气喘吁吁和心跳加速中完成这段小小的朝圣之路。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在圆顶外围的回廊上，360度环视多瑙河弯道、埃斯泰尔戈姆老城以及远处的群山，将这一刻的辽阔永远印在脑海里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 9 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开主建筑后，不要错过毗邻的教堂珍宝馆，那里收藏着匈牙利最华丽的中世纪金器、圣物和纺织品，其奢华程度超乎想象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 10 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，漫步到教堂建筑群后方的城堡博物馆区域，在古堡的断壁残垣间坐下来，看着夕阳将大教堂的白色身影染成金黄。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`多瑙河对岸（斯洛伐克Štúrovo一侧）的河堤`}</h4>
                  <p className="text-sm text-gray-700">{`日落前后一小时，使用长焦镜头压缩空间，可以拍摄到大教堂、城堡山与它在多瑙河中倒影构成的完美对称全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`教堂前广场的右侧（南侧）角落`}</h4>
                  <p className="text-sm text-gray-700">{`上午阳光照亮教堂正面时，以巨大的科林斯柱廊为前景框架，拍摄圆顶和钟楼，能凸显建筑的纵深感和雄伟气势。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`主殿内部中殿后方`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，阳光从西侧窗户射入，站在中殿走道末端，利用拱廊形成天然画框，拍摄通往主祭坛的深邃长廊以及从天窗射下的光柱。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圆顶观景台回廊的东北角`}</h4>
                  <p className="text-sm text-gray-700">{`全天皆可，但以晴朗的早晨为佳，将大教堂的局部石雕或铜顶作为前景，远眺多瑙河大拐弯和对岸斯洛伐克的田园风光，形成大小与远近的强烈对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`地下墓室的入口楼梯处`}</h4>
                  <p className="text-sm text-gray-700">{`借助墓室内柔和的永久性灯光，从楼梯中部向上或向下拍摄，捕捉哥特式拱顶通道的幽深与神秘感，建议使用三脚架进行长时间曝光。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在教堂内部拍摄时，请绝对关闭闪光灯，这不仅是为了保护珍贵的壁画和文物，也是基本礼仪。使用大光圈镜头和高感光度相机，可以捕捉到自然光影下的神圣氛围。航拍无人机在教堂及城堡山区域是严格禁止飞行的，请务必遵守规定。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河景之选`}</h4>
                  <p className="text-sm text-blue-800">{`多瑙河畔由老房子改造的精品酒店，房间窗户正对着城堡山和大教堂，晚上看着灯光点亮白色巨塔的感觉如梦似幻。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老城中心`}</h4>
                  <p className="text-sm text-green-800">{`藏在小巷里的家庭式公寓，房东老爷爷会给你手绘一张美食地图，早晨被附近面包房飘来的黄油香气唤醒，步行五分钟就能上山。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-yellow-800">{`住在对岸斯洛伐克Štúrovo小镇的温泉酒店，晚上泡着露天温泉遥望匈牙利方向灯火通明的山巅圣殿，是一种奇妙的跨国体验。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-purple-800">{`布达佩斯英雄广场附近的五星级酒店，虽然不在埃斯泰尔戈姆，但搭配一趟舒适的火车当日往返，能让你在享受首都便利的同时，深度探访这座圣城。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`埃斯泰尔戈姆本身是个安静的小城，夜间非常安全，但娱乐活动较少。如果追求丰富的夜生活，建议以布达佩斯为基地进行一日游。夏季旅游旺季和宗教节日期间，本地住宿非常紧俏，务必提前数周甚至数月预订。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开埃斯泰尔戈姆大教堂很久以后，我脑海里反复出现的，不是它那令人惊叹的尺寸，也不是教科书上那些历史日期，而是一种非常具体的“感觉”。那是一种厚重的、沉默的、但又充满韧性的存在感。它像一块巨大的文化磁石，经历了王权的奠基、异教的侵占、战火的摧残乃至时代的冷落，却始终牢牢地吸附在这座山丘上。它告诉我们，一个民族的记忆和信仰，可以如此具象地凝结在石头与砂浆之中，任凭多瑙河的流水带走了多少个春秋，它自岿然不动。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都在追求“快”和“新”的世界里，埃斯泰尔戈姆大教堂提供了一种截然相反的旅行价值——那就是学习“凝视”与“感受”。它不提供瞬时的娱乐刺激，它要求你付出体力去攀登，付出耐心去阅读那些沧桑的痕迹，付出想象力去聆听石头背后的故事。但当你做到这些，你所获得的回报是无价的：一种与浩瀚历史相连的笃定，一种在巨大建筑面前感知自身渺小后反而获得的平静。它不仅仅是一座教堂，它是一个坐标，标记着匈牙利这个民族从哪里走来，它的精神曾经并且依然建立在何处。对于任何渴望超越表面观光、去触摸欧洲历史深层脉搏的旅人来说，这里不是清单上的一个打卡点，而是一次心灵的必修课。站在那圆顶之上，让河风吹过脸颊时，你会明白，有些风景，关乎眼界，更关乎心境。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/pannonhalma-archabbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    潘
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">潘诺恩哈尔马千年修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pannonhalma Archabbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/miskolc" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    米
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">米什科尔茨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Miskolc</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tata-water-castle-old-lake" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    陶
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">陶陶（老湖上的水上城堡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tata (Water Castle on theOld Lake)</p>
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
