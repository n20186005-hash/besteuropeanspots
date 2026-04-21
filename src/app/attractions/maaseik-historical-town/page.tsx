import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '马赛克 Maaseik | 凡·艾克兄弟故乡，默兹河畔的彩色珍宝 - 最佳欧洲景点',
  description: '想象一下，你从一条狭窄的、铺着鹅卵石的巷子转出来，眼前豁然开朗。阳光正暖暖地洒在马克特广场那些五彩斑斓的建筑立面上，奶油黄、砖红、墨绿，每一栋房子的山墙都像一本精心装订的古书封面，诉说着不同的家族故事。空气里有种好闻的混合气味——隔壁面包房刚出炉的“林堡水果派”的甜香，混杂着从不远处默兹河飘来的、带',
}

export default function MaaseikHistoricalTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '马赛克', href: '/attractions/maaseik-historical-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`马赛克・Maaseik・比利时・马赛克`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下，你从一条狭窄的、铺着鹅卵石的巷子转出来，眼前豁然开朗。阳光正暖暖地洒在马克特广场那些五彩斑斓的建筑立面上，奶油黄、砖红、墨绿，每一栋房子的山墙都像一本精心装订的古书封面，诉说着不同的家族故事。空气里有种好闻的混合气味——隔壁面包房刚出炉的“林堡水果派”的甜香，混杂着从不远处默兹河飘来的、带着水汽的清冽气息。广场中心的文艺复兴式喷泉发出潺潺水声，几个老人坐在长椅上，用你听不懂的、柔软的林堡方言闲聊，时间在这里，仿佛被琥珀凝固了。
这里就是马赛克，一个名字念起来有点陌生，却能让你的心瞬间安静下来的地方。它不像布鲁日那样游人如织，也不像安特卫普那样时尚喧嚣。它的节奏，就是河边自行车轮轻轻碾过的节奏，就是咖啡馆露台上那杯修道院啤酒慢慢泛起泡沫的节奏。当地人骑着车，车筐里装着刚买的长棍面包，叮铃铃地从你身边经过，向你投来一个友善的微笑。你会感觉，你不是闯入了一个景点，而是偶然走进了一幅依然在呼吸的、十五世纪的画里。
而这一切宁静生活的背景音里，始终回荡着一个辉煌的名字：凡·艾克。是的，就是那位用超凡技艺画出《根特祭坛画》，几乎以一己之力定义了北方油画细腻与真实的大师扬·凡·艾克，以及他的兄长休伯特。他们的童年，很可能就在这些你看过的街道上奔跑，在这些砖墙后的院落里玩耍。当你意识到，脚下这些被岁月磨得光亮的石板，或许曾被艺术史上最伟大的革新者之一踩过时，整个小镇便蒙上了一层不可思议的滤镜。那种感觉，不是瞻仰一座冰冷的纪念碑，而是触摸到了一段依然温热的、艺术的血脉。
最打动我的，正是这种“伟大”与“平凡”的奇妙共生。你可以花一个下午，在博物馆里对着凡·艾克学派的手抄本惊叹；然后转眼就在市集上，跟一个卖自制奶酪的农夫学两句方言。艺术在这里，不是高悬在殿堂的神祇，而是融进了面包的香气、河水的波光、和人们从容的脸庞里。马赛克的核心魅力，就在于它让你相信，美与创造力，最初正是从这样具体而微、充满烟火气的生活中生长出来的。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "想象一下，你从一条狭窄的、铺着鹅卵石的巷子转出来，眼前豁然开朗。阳光正暖暖地洒在马克特广场那些五彩斑斓的建筑立面上，奶油黄、砖红、墨绿，每一栋房子的山墙都像一本精心装订的古书封面，诉说着不同的家族故事。空气里有种好闻的混合气味——隔壁面包房刚出炉的“林堡水果派”的甜香，混杂着从不远处默兹河飘来的、带着水汽的清冽气息。广场中心的文艺复兴式喷泉发出潺潺水声，几个老人坐在长椅上，用你听不懂的、柔软的林堡方言闲聊，时间在这里，仿佛被琥珀凝固了。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里就是马赛克，一个名字念起来有点陌生，却能让你的心瞬间安静下来的地方。它不像布鲁日那样游人如织，也不像安特卫普那样时尚喧嚣。它的节奏，就是河边自行车轮轻轻碾过的节奏，就是咖啡馆露台上那杯修道院啤酒慢慢泛起泡沫的节奏。当地人骑着车，车筐里装着刚买的长棍面包，叮铃铃地从你身边经过，向你投来一个友善的微笑。你会感觉，你不是闯入了一个景点，而是偶然走进了一幅依然在呼吸的、十五世纪的画里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而这一切宁静生活的背景音里，始终回荡着一个辉煌的名字：凡·艾克。是的，就是那位用超凡技艺画出《根特祭坛画》，几乎以一己之力定义了北方油画细腻与真实的大师扬·凡·艾克，以及他的兄长休伯特。他们的童年，很可能就在这些你看过的街道上奔跑，在这些砖墙后的院落里玩耍。当你意识到，脚下这些被岁月磨得光亮的石板，或许曾被艺术史上最伟大的革新者之一踩过时，整个小镇便蒙上了一层不可思议的滤镜。那种感觉，不是瞻仰一座冰冷的纪念碑，而是触摸到了一段依然温热的、艺术的血脉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动我的，正是这种“伟大”与“平凡”的奇妙共生。你可以花一个下午，在博物馆里对着凡·艾克学派的手抄本惊叹；然后转眼就在市集上，跟一个卖自制奶酪的农夫学两句方言。艺术在这里，不是高悬在殿堂的神祇，而是融进了面包的香气、河水的波光、和人们从容的脸庞里。马赛克的核心魅力，就在于它让你相信，美与创造力，最初正是从这样具体而微、充满烟火气的生活中生长出来的。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`马赛克`} />
                <InfoRow label="英文名称" value={`Maaseik`} />
                <InfoRow label="正式名称" value={`Maaseik`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`马赛克`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这里是欧洲油画艺术的摇篮之一，文艺复兴早期大师休伯特与扬·凡·艾克兄弟的诞生地。`} />
                <InfoRow label="建筑特色" value={`一座保存近乎完好的中世纪晚期至文艺复兴时期古城，拥有迷人的集市广场、蜿蜒的街道和古朴的砖砌山墙房屋。`} />
                <InfoRow label="建筑风格" value={`以弗兰德文艺复兴风格为主，混合了晚期哥特式与早期巴洛克元素。`} />
                <InfoRow label="文化价值" value={`不仅是一座宁静的河边小镇，更是理解北方文艺复兴艺术起源与弗兰德地区市民生活传统的活态窗口。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城公共区域全天开放。主要室内景点如市政厅（Stadhuis）通常在周一至周五上午9点至下午4点开放，周末开放时间缩短或需预约。老圣卡特琳教堂（Oude Sint-Catharinakerk）与马赛克博物馆（Museum Maaseik）开放时间为周二至周日上午10点至下午5点，周一闭馆。具体时间随季节（夏季延长）及宗教节日（如圣诞节上午仅对礼拜开放）调整，行前务必查看官网最新公告。`} />
              <InfoRow label="门票价格" value={`漫步古城免费。马赛克博物馆（包含圣卡特琳教堂宝藏馆）门票为成人8欧元，65岁以上长者及学生6欧元，12-18岁青少年4欧元，12岁以下儿童免费。持有“林堡省博物馆通票”可免费进入。教堂主体部分免费参观，但捐赠随意。`} />
              <InfoRow label="地址" value={`Markt 1, 3680 Maaseik, Belgium`} />
              <InfoRow label="交通方式" value={`从最近的国际机场布鲁塞尔机场（BRU）出发，最便捷的方式是乘坐火车。在机场火车站乘坐IC列车前往列日-吉耶曼车站（Liège-Guillemins），车程约1小时，班次频繁。在列日换乘前往哈瑟尔特（Hasselt）方向的区域列车，在“马赛克站（Station Maaseik）”下车，此段车程约50分钟，每小时1-2班。出站后，步行约15分钟即可抵达古城中心。亦可从荷兰的马斯特里赫特（Maastricht）乘坐公交线路（如45路）抵达，车程约40分钟。建议使用比利时铁路APP（SNCB/NMBS）查询实时班次并在线购票。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要讲马赛克的故事，我们得把时钟拨回到罗马时代。这里靠近重要的罗马道路，默兹河提供了天然的交通与防御优势，一个定居点早早便在此萌芽。不过，真正让马赛克登上历史舞台的，是中世纪的贸易。得益于默兹河这条“黄金水道”，它成了连接科隆、列日与北海港口的重要贸易节点。羊毛、布料、葡萄酒在这里集散，财富随之累积。你可以想象，十三世纪时，这里已经是一个拥有城墙、市场和一定自治权的繁荣小镇了，那种忙碌与生机，为后来的艺术萌芽准备了最肥沃的土壤。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然后，时光流转到十四世纪末。小镇里一个普通（或许并不那么普通）的家庭，诞生了两个男孩：休伯特和扬·凡·艾克。关于他们童年的具体记录很少，但马赛克当时作为贸易城镇相对开放和富裕的环境，很可能让兄弟俩早早接触到了各地的艺术制品与思想。他们如何习得那神乎其技的画艺，至今仍是艺术史之谜。但毫无疑问，是故乡这座色彩斑斓、注重细节与真实生活场景的小镇，最初塑造了他们的美学感官。那些砖墙的质感、集市上人物鲜活的表情、河面上变幻的光影，都是他们最早的“模特”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "兄弟俩的才华最终将他们带向了更广阔的舞台——勃艮第公爵的宫廷。但他们的艺术革命，其精神根源或许部分要回溯到马赛克。扬·凡·艾克对油画技术的革新，对光线、质感和人物心理深度的极致追求，某种程度上，正是将故乡那种对现实世界细腻入微的观察，提升到了神圣的哲学与美学高度。他的画作里，每一颗珠宝、每一丝衣褶、每一片风景都拥有慑人的真实感，这种“以油彩为世界镀上光辉”的执着，或许正源于弗兰德地区市民文化中对“物”的珍视与热爱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇的命运并未一直与艺术相伴。它经历了无数次战争的洗礼，尤其是在十六世纪的宗教战争和十七世纪的法荷战争中，马赛克多次被占领、劫掠甚至焚毁。我们今天看到的美丽广场建筑，很多都是在十七、十八世纪重建的。但有趣的是，重建时人们依然选择了延续传统的弗兰德文艺复兴风格，那些优雅的山墙、精美的砂岩装饰，仿佛是一种文化的坚韧宣言——无论经历什么，我们都要按照我们熟悉和热爱的方式，把家园重新建起来。这种集体的审美坚持，让马赛克虽然历经磨难，却依然保持了惊人的建筑风格统一性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "到了近现代，马赛克渐渐归于平静，成了比利时林堡省一个宁静的边陲小镇。它没有经历剧烈的工业化冲击，反而因祸得福地保存了古城肌理。二十世纪以来，当地人对文化遗产的保护意识空前高涨。他们精心修复老建筑，建立博物馆珍藏与凡·艾克相关的宝贵手稿（比如著名的《都灵-米兰时光之书》的部分页张），并不断挖掘和讲述小镇的故事。今天的马赛克，就像一个从容的智者，它不再急于向世界证明什么，只是安然地守在默兹河畔，用它砖石的颜色、河水的倒影和空气中面包的香味，向每一位到访者低声诉说着：看，伟大可以诞生于平凡，而最美的生活，往往就藏在这种不慌不忙的日常里。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你安排一整天给马赛克，最好在一个晴朗的平日前往，能避开周末略显热闹的集市人流。上午十点左右抵达最为理想，此时的阳光斜射，能将广场建筑的立面色彩照得最为饱满鲜亮。整体的节奏请务必放慢，这里不适合“打卡”，只适合“沉浸”。路线将以市场广场为圆心，先感受古城的心脏，然后探访核心的历史与艺术场所，最后沿着默兹河漫步，让思绪随水流飘荡。这样的安排由动入静，由外至内，能让你逐步从视觉的欣赏深入到历史的感知，最终收获内心的宁静。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周日大部分商店和部分博物馆可能关门或缩短营业时间，尽量避开周日进行深度文化参观。
小镇街道多为石板路，请务必穿一双绝对舒适耐走的鞋子，高跟鞋在这里将是灾难。
注意教堂在中午时分可能有短暂的弥撒或静默时间，参观时请保持安静，尊重当地的宗教活动。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨先从古城边缘沿着安静的居民区街道慢慢走向马克特广场，让脚步适应古老石板的起伏，顺便偷瞄几眼当地人精心打理的花园窗台。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在广场中央的文艺复兴喷泉边，顺时针慢慢转一圈，细细辨认每一栋山墙建筑上不同的装饰图案和标志，想象它们旧日主人的身份。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开老圣卡特琳教堂那扇厚重的木门，让眼睛适应内部昏暗的光线，然后径直走向祭坛后方去仰望那扇描绘着圣徒故事的巨大彩窗，感受光如何被过滤成神圣的色彩。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在市政厅一楼的游客中心取一份地图，然后踏上古老的木楼梯，在二楼的展厅里寻找与凡·艾克家族相关的那一星半点档案记录，哪怕只是一个名字。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到面包博物馆的地下室，闻着模拟中世纪面包房的气味，亲手摸一摸古老的石磨，理解食物如何构成这座小镇历史的基石。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午阳光变得柔和时，从古城西门出来，沿着默兹河岸向北散步，看驳船缓慢驶过，对岸荷兰的田园风光如同一幅延展的绿色画卷。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在河畔找一家有露天座位的咖啡馆，点一杯本地的皮特啤酒，什么都不做，就看云看水看飞鸟，直到夕阳给对岸的教堂尖顶镀上金边。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐不必走远，回到广场选择一家有着拱顶地窖的古老餐厅，尝试一道用默兹河鱼烹制的特色菜，让味蕾也为这一天画上圆满句号。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`马克特广场东侧拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点的光线最适合，站在拱廊的阴影里，以拱门为画框，拍摄被温暖阳光照亮的广场喷泉和五彩建筑立面，能获得极佳的纵深感和框架构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`老圣卡特琳教堂内南侧走廊`}</h4>
                  <p className="text-sm text-gray-700">{`选择阳光强烈的正午前后，等待光线穿透彩窗，在地面或对面墙壁上投下绚丽的光斑，将相机对准这些光与影的交汇处，捕捉动态的色彩流动。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`市政厅建筑的回廊庭院`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，阳光角度较低时，拍摄回廊优美的拱券在对面墙上投下的规律性阴影，形成强烈的几何美感，黑白模式往往能带来意想不到的古典效果。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`连接古城与河岸的古老石桥（如Bospoort附近）`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，登上石桥，面向古城方向，将默兹河温柔的倒影作为前景，拍摄古城建筑群在金色暖光下的天际线剪影。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`面包博物馆的临街橱窗`}</h4>
                  <p className="text-sm text-gray-700">{`华灯初上时，从街对面拍摄面包房暖黄色灯光映照下的古老烘焙工具和装饰，橱窗玻璃会反射出对面建筑的模糊影像，形成虚实交织的梦幻画面。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在教堂内部拍摄时严禁使用闪光灯和三脚架（除非获得特殊许可），高感光度相机或大光圈镜头是更好的选择，尊重礼拜场所的庄严。`}</li>
                <li>• {`当地人生活从容，拍摄街景时如涉及人物，尽量采用远景或背影，如需特写，一个微笑和事先示意是基本的礼貌。`}</li>
                <li>• {`多利用小镇无处不在的运河支流和窗户玻璃的反光，能拍出油画般质感、虚实结合的独特作品。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`“De Wikke”家庭旅馆，由一栋19世纪商人住宅改造，房间小巧温馨，主人会为你手绘一张隐藏的古城散步地图，并奉上家酿果酱的早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`“Hotel Maaseik”河畔设计师酒店，房间拥有直面默兹河的大落地窗，现代简约的设计与窗外古老风景形成奇妙对话，顶楼露台是私享日落鸡尾酒的绝佳地点。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`“Kasteelhoeve Helshoven”城堡庄园酒店，位于小镇外围一片静谧的森林绿地中，由17世纪庄园改造，客房充满古董家具和织品，提供米其林推荐的餐厅和私人管家服务。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`独特沉浸`}</h4>
                  <p className="text-sm text-purple-800">{`古城中心广场边的历史建筑公寓短租，推开木格窗就能俯瞰整个广场的日常流转，让你完全融入“本地人”的生活节奏，自己从市集买食材回来烹饪一顿晚餐。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "旺季（夏季和圣诞集市期间）住宿非常紧俏，务必提前数月预订，尤其是广场周边的特色住所。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果选择住在古城外（如火车站附近），步行进入老城也很方便，且夜晚更加安静，价格通常更实惠。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "林堡省自行车网络发达，选择一家提供免费品质自行车的酒店，能极大扩展你的探索半径，沿着默兹河骑行前往邻国荷兰的风景绝佳。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开马赛克好些日子了，我时常还会想起那里河水流动的声音，缓慢、平稳，带着一种不为所动的恒久韵律。在这个恨不得把每分钟都填满行程的世界里，马赛克教会了我“浪费”时间的奢侈。它没有令人屏息的奇观，没有必须朝圣的地标，它的力量在于一种整体的、弥漫性的温柔。当你放下相机，不再寻找特定的“景点”，只是坐在河边长椅上，看一只天鹅梳理羽毛，看云影掠过对岸的草场，你会感到一种久违的、属于内心的秩序正在缓缓重建。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这就是为什么，我认为每一位真正热爱深度游的旅人都该来一次马赛克。它不仅仅是为了瞻仰凡·艾克故乡的名头——事实上，那里的实物遗存并不多。它更像一个启示：伟大的创造，并非诞生于真空的崇高，而是根植于对平凡生活最深切的观察与热爱。在这里，你能触摸到那种连接——连接着十五世纪画师调色板上的油彩与今天面包房里的焦香，连接着历史书页上的荣光与普通人门廊前盛放的天竺葵。它让你相信，最深度的旅行，不是去征服多少名胜，而是找到一个地方，让它在你心里住下来，成为你理解世界与自我的、一块安静而丰饶的拼图。马赛克，就是那样一块拼图。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/grand-curtius" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    库
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">库尔提乌斯博物馆</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Grand Curtius</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/benelux" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    比
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">比利时・荷兰・卢森堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Benelux</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/zimmertoren-begijnhof-lier" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    利
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">利尔钟楼（齐默尔塔）与贝居安会院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Zimmertoren and Begijnhof of Lier</p>
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
