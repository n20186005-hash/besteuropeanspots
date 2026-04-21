import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '维尔茨堡主教宫 Würzburg Residence｜在巴洛克奇迹之巅，仰望提埃波罗的苍穹 - 最佳欧洲景点',
  description: '还记得我第一次推开维尔茨堡主教宫那扇厚重铜门时的情景吗？外面是阳光明媚的巴伐利亚普通一天，但门内却像是踏入了一个截然不同的时空结界。光线骤然暗了下来，空气中漂浮着一种特别的味道——是几个世纪以来抛光蜡渗透进橡木地板的味道，混合着古老织物一丝若有若无的、类似旧书的气味。你的脚步声在挑高的大理石前厅里发...',
}

export default function WuerzburgResidencePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '德国', href: '/destinations/germany' },
            { label: '维尔茨堡主教宫', href: '/attractions/wuerzburg-residence' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`维尔茨堡主教宫・Würzburg Residence・德国・维尔茨堡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`还记得我第一次推开维尔茨堡主教宫那扇厚重铜门时的情景吗？外面是阳光明媚的巴伐利亚普通一天，但门内却像是踏入了一个截然不同的时空结界。光线骤然暗了下来，空气中漂浮着一种特别的味道——是几个世纪以来抛光蜡渗透进橡木地板的味道，混合着古老织物一丝若有若无的、类似旧书的气味。你的脚步声在挑高的大理石前厅里发出轻微的回响，而引导员的声音也自动压低了，仿佛任何高声语都是对这里沉睡之美的惊扰。
但这一切的宁静，都是为了迎接那个终极的、令人失语的瞬间所做的铺垫。当你顺着人流，不知不觉间走入那个被称为“楼梯厅”的中央空间时，突然间，世界在你头顶上方轰然打开。那不是一个比喻。建筑师巴尔塔扎·诺伊曼仿佛用石头和灰泥偷走了一片天空，而画家乔瓦尼·巴蒂斯塔·提埃波罗则在这片人造苍穹上，绘制了整个已知的世界。从脚下光洁如镜的地面抬头望去，六十多米高的拱顶似乎没有尽头，天使、女神、君王和寓言人物在云端飞舞，色彩之绚烂，透视之精妙，让你瞬间忘记脖子酸疼，只是张着嘴，愣在原地。那一刻，你突然理解了什么叫“眩晕的美”——那不是生理上的，而是心灵被一种过于庞大的辉煌所震慑时的失重感。
这座宫殿对于维尔茨堡人来说，早已超越了旅游地标的范畴。它是城市的心脏与骄傲，是散步时会经过的巨大背景板，是夏日傍晚在花园长椅上约会的老地方。你常能看到本地人推着婴儿车在法式花园的沙砾小径上漫步，或在宫殿广场的喷泉边吃着冰淇淋，对身后的巴洛克奇迹习以为常。这种“日常与奇迹共存”的氛围，恰恰是它最动人的地方。它不是被供奉在神坛上的冰冷展品，而是一笔依然在呼吸、依然在参与城市脉搏的鲜活遗产。
它的核心魅力，就在于这种极致的矛盾与和谐。建筑本身的庄重与内部装饰的恣意狂欢；宗教统治的威严与壁画中流露出的、属于全人类的世俗智慧与欢愉；还有，它那近乎完美的巴洛克形体，曾在二战末期的轰炸中化为焦土，却又被德国人用“碎片拼接”的执着奇迹般复原。所以，你看到的每一寸金箔、每一块壁画碎片，都既是18世纪的荣光，也是20世纪人类对文明近乎忏悔的拯救。这种叠加的厚度，让任何单纯的“美”的赞叹，都显得轻飘了。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`还记得我第一次推开维尔茨堡主教宫那扇厚重铜门时的情景吗？外面是阳光明媚的巴伐利亚普通一天，但门内却像是踏入了一个截然不同的时空结界。光线骤然暗了下来，空气中漂浮着一种特别的味道——是几个世纪以来抛光蜡渗透进橡木地板的味道，混合着古老织物一丝若有若无的、类似旧书的气味。你的脚步声在挑高的大理石前厅里发出轻微的回响，而引导员的声音也自动压低了，仿佛任何高声语都是对这里沉睡之美的惊扰。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但这一切的宁静，都是为了迎接那个终极的、令人失语的瞬间所做的铺垫。当你顺着人流，不知不觉间走入那个被称为“楼梯厅”的中央空间时，突然间，世界在你头顶上方轰然打开。那不是一个比喻。建筑师巴尔塔扎·诺伊曼仿佛用石头和灰泥偷走了一片天空，而画家乔瓦尼·巴蒂斯塔·提埃波罗则在这片人造苍穹上，绘制了整个已知的世界。从脚下光洁如镜的地面抬头望去，六十多米高的拱顶似乎没有尽头，天使、女神、君王和寓言人物在云端飞舞，色彩之绚烂，透视之精妙，让你瞬间忘记脖子酸疼，只是张着嘴，愣在原地。那一刻，你突然理解了什么叫“眩晕的美”——那不是生理上的，而是心灵被一种过于庞大的辉煌所震慑时的失重感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座宫殿对于维尔茨堡人来说，早已超越了旅游地标的范畴。它是城市的心脏与骄傲，是散步时会经过的巨大背景板，是夏日傍晚在花园长椅上约会的老地方。你常能看到本地人推着婴儿车在法式花园的沙砾小径上漫步，或在宫殿广场的喷泉边吃着冰淇淋，对身后的巴洛克奇迹习以为常。这种“日常与奇迹共存”的氛围，恰恰是它最动人的地方。它不是被供奉在神坛上的冰冷展品，而是一笔依然在呼吸、依然在参与城市脉搏的鲜活遗产。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，就在于这种极致的矛盾与和谐。建筑本身的庄重与内部装饰的恣意狂欢；宗教统治的威严与壁画中流露出的、属于全人类的世俗智慧与欢愉；还有，它那近乎完美的巴洛克形体，曾在二战末期的轰炸中化为焦土，却又被德国人用“碎片拼接”的执着奇迹般复原。所以，你看到的每一寸金箔、每一块壁画碎片，都既是18世纪的荣光，也是20世纪人类对文明近乎忏悔的拯救。这种叠加的厚度，让任何单纯的“美”的赞叹，都显得轻飘了。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`维尔茨堡主教宫`} />
                <InfoRow label="英文名称" value={`Würzburg Residence`} />
                <InfoRow label="正式名称" value={`Würzburg Residence`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`维尔茨堡`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`18世纪南德巴洛克建筑最辉煌的代表作之一，被誉为“欧洲最美的主教宫殿”，是联合国教科文组织世界遗产。`} />
                <InfoRow label="建筑特色" value={`将雄伟的宫殿建筑、华丽的内部装饰（尤其是世界最大的连续湿壁画天顶）、优雅的法式花园与巧妙的城市空间设计完美融合的统一体。`} />
                <InfoRow label="建筑风格" value={`以巴洛克风格为主体，融合了洛可可装饰元素和新古典主义的早期影响。`} />
                <InfoRow label="文化价值" value={`它是主教世俗权力与艺术巅峰结合的见证，其保存完好的提埃波罗湿壁画是欧洲艺术史上无与伦比的珍宝，象征着启蒙时代前夕宗教与人文精神的一次辉煌共鸣。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`每年4月至10月：每日上午9点至下午6点；11月至3月：每日上午10点至下午4点30分。最后入场时间为闭馆前30分钟。平安夜（12月24日）、圣诞节（12月25日）、元旦（12月31日）及元旦（1月1日）全天闭馆。宫廷花园及广场全年全天免费开放。内部参观仅限跟随导览团进行，德语导览团每小时一次，英语导览团通常为每日上午11点、下午2点、下午3点30分（具体可能变动，建议官网查询）。冬季（11月至3月）部分次要房间可能不开放。`} />
              <InfoRow label="门票价格" value={`宫殿及宫廷教堂联票：成人9.5欧元，优惠票（学生、残障人士等）8.5欧元。仅参观宫廷花园：免费。18岁以下青少年及儿童免费。语音导览设备租用费为2欧元（含德语、英语、法语等多语种）。购买巴伐利亚宫殿联票（14天有效）可免费进入。现场购票，旺季（夏季）建议提前在线预订特定时间的导览票以避免长时间排队。`} />
              <InfoRow label="地址" value={`Residenzplatz 2, 97070 Würzburg, Germany`} />
              <InfoRow label="交通方式" value={`维尔茨堡主火车站（Würzburg Hauptbahnhof）是主要枢纽。从火车站出发，步行约20-25分钟即可到达主教宫，沿途会穿过部分老城区，路线清晰。亦可搭乘多条市内电车（Straßenbahn）线路，如1、2、3、5号线，在“Dom”或“Residenz”站下车，再步行3-5分钟，车程约5分钟。从法兰克福机场乘ICE高速列车直达维尔茨堡约1小时10分钟；从慕尼黑机场乘ICE约2小时。自驾可将车停在Residenzplatz附近的地下停车场（如“Parkhaus Residenz”），但老城区停车位紧张且贵，强烈建议使用公共交通。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从18世纪初讲起。那时的维尔茨堡，是神圣罗马帝国下一个富庶的主教采邑首府。1719年，一位雄心勃勃的王子主教约翰·菲利普·弗朗茨·冯·舍恩博恩上任了。他觉得家族传下来的老城堡配不上自己的权势与品味，决心要建造一座全新的、能媲美凡尔赛宫的官邸，来彰显舍恩博恩家族的荣耀与主教的无上权威。这不仅仅是一个建筑项目，更是一场政治宣言和文化竞赛。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，一场欧洲顶级的艺术“全明星赛”在这里拉开了帷幕。主教没有选择单一的建筑师，而是玩了一个天才（或者说疯狂）的主意：他让多位当时最负盛名的大师提交设计方案，其中包括了来自维也纳、巴黎等地的巨匠。最终，一位相对年轻、但才华横溢的本土建筑师脱颖而出——他就是时年33岁的巴尔塔扎·诺伊曼。诺伊曼的胜利并非偶然，他的设计大胆地将多个欧洲流派的精华融为一体，创造出一个既宏伟统一又充满动感变化的空间序列。建设工程始于1720年，整整持续了将近六十年，历经两代主教，耗费了难以计数的财富，动用了整个欧洲的能工巧匠。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`宫殿的灵魂，在那个无与伦比的楼梯厅。诺伊曼在这里展现了结构上的神迹：他取消了任何中间支撑，仅靠两侧的承重墙和巧妙的拱券结构，就托起了那个长达30米、宽近20米的巨大无柱空间。这为绘画留下了完美的画布。1749年，当时欧洲最炙手可热的壁画大师，威尼斯人提埃波罗，带着他的两个儿子应邀前来。面对这个前所未有的巨大拱顶，提埃波罗也感到了挑战。传说他一开始对透视计算犹豫不决，而诺伊曼则信心满满地保证结构绝对安全。最终，提埃波罗用了他生命中最辉煌的22个月，完成了这幅描绘四大洲（当时已知的欧、亚、非、美）环绕阿波罗与维尔茨堡守护神的巨作。当脚手架拆除，阳光从高窗涌入，照亮那片绚烂天堂时，所有质疑都烟消云散。这里诞生了世界上最大的连续湿壁画天顶。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的戏剧性总在巅峰时刻埋下转折。随着启蒙运动和世俗化浪潮的推进，主教们的世俗权力在19世纪初被终结，宫殿先后成为选帝侯府邸、皇家行宫，最终变为一座博物馆。它躲过了诸多纷争，却在最接近我们时代的1945年3月16日，遭遇了灭顶之灾。在二战结束前最后一场惨烈的空袭中，维尔茨堡老城几乎被彻底摧毁，主教宫超过三分之二的结构化为瓦砾和灰烬。那张著名的照片——烧得焦黑的楼梯厅残骸中，提埃波罗壁画碎片如落叶般飘零在废墟上——成为了欧洲文化遗产悲剧的象征。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但故事没有结束。战后，德国人面临一个选择：是在废墟上建新城，还是复原旧梦？他们选择了后者，而且是以一种近乎考古的精确和虔诚。工人们从数万吨瓦砾中，一片片捡起壁画和装饰的碎片，像完成一幅巨大的三维拼图。基于战前详细的测绘和照片，重建工作持续了几十年。今天，当你抚摸楼梯厅墙壁上那些颜色略有差异的修补痕迹时，你触摸到的是两段历史：一段是创造的辉煌，另一段是拯救的执着。这种“重生”的经历，让维尔茨堡主教宫超越了单纯的巴洛克杰作，成为一座关于记忆、毁灭与希望的纪念碑。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正领略主教宫的韵味，请务必赶在上午开门的第一批入场。这不仅能避开中午汹涌的旅行团人潮，更重要的是，清晨柔和的光线正适合欣赏花园，而室内参观开始时，人流相对稀疏，你才能在楼梯厅获得片刻相对宁静的震撼。整体游览建议预留至少3到4小时。节奏应该是“慢-快-慢”：先以悠闲的心境漫步宫廷花园（约45分钟），感受法式园林的几何秩序与清晨露水的气息；然后进入宫殿内部，跟随约1小时的导览（或使用语音导览）专注聆听和观看，这是信息吸收的“快”节奏；最后，留出时间在宫殿广场和周边回廊走走，或者在花园咖啡馆坐下回味，让感官沉淀下来。这样的安排符合光线变化和体力分配，能获得最完整的体验。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必提前在官网核查英语导览团的具体时间，并建议提前15分钟到场购票或换票，旺季时跟团名额可能很快满员。室内参观必须存包，且严禁拍照（花园和广场可以），请轻装简行。宫殿内大部分区域铺着古老的原木地板或大理石，穿一双舒适、安静的平底鞋是对历史建筑的尊重，也能让你的脚步更轻松。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从宫殿西侧的法式花园开始你的清晨漫步，沿着中轴线砂石小径前行，欣赏两侧精雕细琢的绿植图案和远处宫殿的雄伟侧影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`通过花园东侧的小门进入宫廷教堂，在这个相对私密的空间里静静仰望提埃波罗父子绘制的另一组华丽天顶画，感受金色与白色交织的洛可可狂热。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`加入上午第一批英语导览团，在专业讲解中推开宫殿正门，让楼梯厅的视觉冲击作为这场室内华彩乐章的第一个震撼音符。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在白厅驻足，被那极致的白色与金色洛可可灰泥装饰所包围，想象一下在没有电灯的年代，烛火如何让这满屋的金色纹饰如星河般闪烁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`缓缓走过一连串的国事厅与寝宫，关注细节——中国风墙纸、华丽的壁炉、镶嵌精细的拼花地板，每一件家具都在诉说着主教们世俗生活的奢华品味。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从宫殿南翼的出口走出，绕到宫殿正面的巨大广场，回头仰望整个巴洛克立面的恢弘气势，以及广场中央的弗兰肯尼亚喷泉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果有余力，步行约十五分钟登上美茵河对岸的玛丽恩山要塞，在那里你可以找到拍摄整个主教宫及老城全景的经典机位，将你的亲眼所见浓缩成一幅画卷。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`花园中轴线远眺宫殿`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在法式花园最西端的树篱前，利用长长的沙石步道作为引导线，将宫殿的东侧立面框入镜中，此时侧光能勾勒出建筑的立体感与花园的几何美。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`广场喷泉仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午太阳偏西时，躺在弗兰肯尼亚喷泉旁的草地上（如果允许），用广角镜头低角度仰拍，将喷泉雕塑与后方高耸的宫殿主入口一同收入画面，极具视觉张力。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`玛丽恩山要塞全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，从要塞的露台向东望去，整个主教宫、老城屋顶群和美茵河桥尽收眼底，使用长焦镜头可以压缩空间，拍出宫殿如模型般精致的全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`宫廷花园树墙迷宫`}</h4>
                  <p className="text-sm text-gray-700">{`在花园南侧修剪整齐的树墙迷宫中，利用对称的绿色通道作为天然画框，拍摄同伴行走其中的背影，能拍出充满秩序感与趣味的构图。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`宫殿内部严禁摄影，这是为了保护极其脆弱且不可替代的湿壁画和织物，请务必遵守规定，用心而非用镜头记忆。在花园拍摄时，注意不要踏入花坛或踩踏装饰性砂石图案。使用无人机在宫殿及花园上空飞行通常需要特殊许可，且很可能被禁止，操作前务必查清当地法规。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史中心民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在老城狭窄鹅卵石街道旁的百年老屋公寓里，推开木框窗就能看到教堂尖顶，晚上听着远处酒馆隐约的欢声入睡，体验最地道的弗兰肯生活。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计酒店之选`}</h4>
                  <p className="text-sm text-green-800">{`美茵河畔由历史建筑改造的现代设计酒店，房间拥有挑高天花板和落地窗，将古典外壳与极简内饰完美结合，并提供一流的早餐和河景露台。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`庄园静谧体验`}</h4>
                  <p className="text-sm text-yellow-800">{`位于维尔茨堡周边葡萄酒庄园的家庭式私人别墅，房间不多却充满家庭温暖，主人会邀请你品尝自家酿造的弗兰肯葡萄酒，享受远离游客喧嚣的田园清晨。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端宫殿视角`}</h4>
                  <p className="text-sm text-purple-800">{`选择位于Residenzplatz广场一侧的顶级酒店，部分房间的阳台正对主教宫立面，你可以在私密空间里，就着一杯葡萄酒，独享这座世界遗产的日夜光影变幻。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`维尔茨堡老城区面积不大，步行即可抵达主要景点，建议优先选择老城内的住宿，能最大化体验古城氛围。夏季（尤其是葡萄酒节期间）和圣诞市场期间住宿非常紧张，价格飙升，务必提前数月预订。弗兰肯地区以低调、务实著称，即使高端酒店也较少浮夸炫技，更注重舒适与内在品质，这与主教宫外敛内奢的气质一脉相承。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开维尔茨堡很多天后，我脑海里反复出现的，不是某一个具体的画面，而是一种混合的感觉：那种步入楼梯厅时，视觉与心灵同时被“提拉”向上的轻盈感；那种在花园里，闻到刚修剪过的青草气息与远处宫殿石墙散发出的、被太阳晒暖的淡淡土腥味的交织；还有，当你知道脚下光洁如镜的地板，每一片拼花都是从废墟里捡回来重新拼上时，心里涌起的那种复杂的敬意。这座宫殿教会我的，是“美”的坚韧。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、热衷速成的时代，维尔茨堡主教宫像是一个来自过去的、沉稳而有力的回响。它提醒我们，真正不朽的东西需要时间——不仅是建造它的六十年，更是拯救它的又一个六十年。它不是一个被快速消费的“打卡点”，而是一个需要你停下脚步，抬头，并且愿意让某种宏大之美进入内心的场所。在这里，艺术不是挂在墙上的装饰，而是你呼吸的空气，是包裹你的整个空间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你也相信旅行是为了在某些时刻，与人类精神所能达到的高度相遇，那么请务必来这里。来站在提埃波罗的苍穹之下，感受那份让时空都失重的辉煌；来触摸那些战争伤痕与重生印记并存的墙壁。你会带走一份关于“完整”的记忆——不仅是巴洛克艺术的完整，更是一段文明历经破碎后，依然选择相信美、并亲手将其修补完整的动人故事。这，或许是我们这个时代，最需要被提醒的事情。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
