import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '泰尔奇历史中心 Telč Historic Centre｜童话般的波西米亚珍珠，被彩虹房子与池塘环绕的世界遗产 - 最佳欧洲景点',
  description: '当我第一眼看到泰尔奇的萨哈利亚修广场时，脑子里只有一个词：不真实。它不是那种宏伟到让你屏息的地方，而是一种精致、甜美、像从童话绘本里直接搬出来的不真实。你从一条普通的小巷拐进来，视线豁然开朗，一个被彩虹糖般房子包围的狭长广场就在脚下延伸开去。脚下的石板路被岁月磨得温润发亮，反射着清晨柔和的阳光。空气...',
}

export default function TelcHistoricCentrePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '泰尔奇历史中心', href: '/attractions/telc-historic-centre' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`泰尔奇历史中心・Telč Historic Centre・捷克・泰尔奇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当我第一眼看到泰尔奇的萨哈利亚修广场时，脑子里只有一个词：不真实。它不是那种宏伟到让你屏息的地方，而是一种精致、甜美、像从童话绘本里直接搬出来的不真实。你从一条普通的小巷拐进来，视线豁然开朗，一个被彩虹糖般房子包围的狭长广场就在脚下延伸开去。脚下的石板路被岁月磨得温润发亮，反射着清晨柔和的阳光。空气里有淡淡的咖啡香，夹杂着旁边面包店刚出炉的“trdelník”（肉桂卷）的甜腻气味，还有从广场中央文艺复兴式喷泉传来的潺潺水声，轻轻盖过了远处教堂偶尔敲响的钟声。
这些房子啊，每一栋都在跟你讲故事。它们肩并肩站在一起，却绝不雷同。粉的、鹅黄的、淡绿的、天蓝的……色彩是经过时间沉淀后的温柔，绝不是崭新的刺眼。你的眼睛会不由自主地向上移动，欣赏那些被称为“山墙”的屋顶立面，有的像楼梯，有的像波浪，有的装饰着精致的壁画或浮雕。很多拱廊下开着小店、咖啡馆或画廊，当地老人就坐在长椅上，看着寥寥几个游客，眼神平静。这里的生活节奏，仿佛还停留在几个世纪前马车辘辘的时代，缓慢、宁静、自成一体。
最妙的是广场两端各有一个池塘——就像给这幅画镶嵌了两面清澈的镜框。站在北端回望，水中的倒影将那一排童话房子和教堂的尖塔完美复制，随着微风轻轻荡漾。那一刻，你会真正理解为什么泰尔奇被称为“摩拉维亚的威尼斯”。当然，它没有威尼斯的拥挤与喧嚣，这份水景是独属于它的宁静注解，让坚硬的建筑线条在水中变得柔软而梦幻。这里最核心的魅力，就是一种被完好封存下来的、日常的奇迹感。它不是冰冷的博物馆，而是一个依然呼吸、生活着的美丽小镇，只不过恰好把16世纪最美的模样，原封不动地带到了今天。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当我第一眼看到泰尔奇的萨哈利亚修广场时，脑子里只有一个词：不真实。它不是那种宏伟到让你屏息的地方，而是一种精致、甜美、像从童话绘本里直接搬出来的不真实。你从一条普通的小巷拐进来，视线豁然开朗，一个被彩虹糖般房子包围的狭长广场就在脚下延伸开去。脚下的石板路被岁月磨得温润发亮，反射着清晨柔和的阳光。空气里有淡淡的咖啡香，夹杂着旁边面包店刚出炉的“trdelník”（肉桂卷）的甜腻气味，还有从广场中央文艺复兴式喷泉传来的潺潺水声，轻轻盖过了远处教堂偶尔敲响的钟声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这些房子啊，每一栋都在跟你讲故事。它们肩并肩站在一起，却绝不雷同。粉的、鹅黄的、淡绿的、天蓝的……色彩是经过时间沉淀后的温柔，绝不是崭新的刺眼。你的眼睛会不由自主地向上移动，欣赏那些被称为“山墙”的屋顶立面，有的像楼梯，有的像波浪，有的装饰着精致的壁画或浮雕。很多拱廊下开着小店、咖啡馆或画廊，当地老人就坐在长椅上，看着寥寥几个游客，眼神平静。这里的生活节奏，仿佛还停留在几个世纪前马车辘辘的时代，缓慢、宁静、自成一体。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最妙的是广场两端各有一个池塘——就像给这幅画镶嵌了两面清澈的镜框。站在北端回望，水中的倒影将那一排童话房子和教堂的尖塔完美复制，随着微风轻轻荡漾。那一刻，你会真正理解为什么泰尔奇被称为“摩拉维亚的威尼斯”。当然，它没有威尼斯的拥挤与喧嚣，这份水景是独属于它的宁静注解，让坚硬的建筑线条在水中变得柔软而梦幻。这里最核心的魅力，就是一种被完好封存下来的、日常的奇迹感。它不是冰冷的博物馆，而是一个依然呼吸、生活着的美丽小镇，只不过恰好把16世纪最美的模样，原封不动地带到了今天。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`泰尔奇历史中心`} />
                <InfoRow label="英文名称" value={`Telč Historic Centre`} />
                <InfoRow label="正式名称" value={`Telč Historic Centre`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`泰尔奇`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`被誉为“波西米亚的玫瑰”，是欧洲保存最完好的文艺复兴城镇规划典范之一。`} />
                <InfoRow label="建筑特色" value={`以中央长条形广场为核心，两侧林立着连绵不绝、色彩柔和、山墙造型各异的中产市民住宅。`} />
                <InfoRow label="建筑风格" value={`以北意大利文艺复兴风格为主，融合了本土的哥特式元素与后来的巴洛克装饰细节。`} />
                <InfoRow label="文化价值" value={`是16世纪捷克贵族文化与意大利文艺复兴艺术完美融合的活化石，展现了中世纪城镇向近代优雅市镇转变的完整标本。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`历史中心为开放区域，全天可进入。萨哈利亚修广场周边建筑及店铺开放时间各异，一般为上午9点至下午6点。核心景点泰尔奇城堡（Zámek Telč）开放时间有季节性变化：四月至十月，周二至周日开放，通常为上午10点至下午5点；十一月至次年三月，仅周末开放或需预约。市政厅塔楼开放时间与城堡类似，但可能更短。元旦、复活节及圣诞节期间大部分室内景点关闭。建议出行前在官方旅游网站再次确认。`} />
              <InfoRow label="门票价格" value={`漫步历史中心区域免费。参观主要景点需购票：泰尔奇城堡导览游，成人约180捷克克朗，学生、老人及儿童有优惠。市政厅塔楼登顶，成人约60捷克克朗。联票（城堡+塔楼）更划算。广场上的圣灵教堂通常免费开放。部分小型博物馆或画廊门票约30-50克朗。`} />
              <InfoRow label="地址" value={`náměstí Zachariáše z Hradce 1, 588 56 Telč, Czech Republic`} />
              <InfoRow label="交通方式" value={`泰尔奇无机场和主要火车站，需通过周边城市中转。最近的主要交通枢纽是捷克布杰约维采或伊赫拉瓦。从布拉格出发最方便：在布拉格Florenc巴士总站乘坐RegioJet或FlixBus直达泰尔奇，车程约2.5小时，班次每天约4-6班，建议提前在线购票以确保座位。若乘坐火车，需在伊赫拉瓦或哈夫利奇库夫布罗德换乘地方小火车，总耗时约3-4小时，班次较少但沿途乡村风景绝佳。自驾是最灵活的方式，从布拉格沿D1高速转地方公路，约1小时45分钟，古城外有多个付费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`泰尔奇的故事，绕不开一场大火和一位有品位的贵族。在13世纪，这里只是一个普通的边境定居点，木结构房屋围绕着一个市场。命运的转折点在1386年，一场灾难性的大火几乎将小镇化为灰烬。但废墟之上，却埋下了重生的种子。中世纪晚期的重建让城镇有了初步的石头基础，而真正的黄金时代，要等到16世纪中叶，一位名叫扎哈里亚什的领主登场。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`扎哈里亚什可不是一般的贵族。他曾作为波西米亚王国的使者出访意大利，深深迷醉于当时正如火如荼的文艺复兴艺术与文化。回到自己这片略显粗犷的波西米亚领地后，他决心打造一个属于自己的“小佛罗伦萨”。他聘请了来自意大利的建筑师，以最前沿的理念重新规划他的领地中心。于是，那个原本可能杂乱无章的市场广场，被设计成了一个规则、狭长、气势恢宏的公共空间。广场两侧的地皮被划分出售给富有的市民，但有一个关键条件：必须按照领主统一批准的文艺复兴风格来建造他们的住宅立面。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这就解释了为什么广场上的房子看起来如此和谐又各具特色。市民们可以在房屋结构和内部布局上发挥，但面向广场的“脸面”必须符合统一的优雅审美。这种自上而下的美学管控，在今天是难以想象的，却在当时创造了一个建筑艺术的奇迹。意大利式的拱廊、彩绘的立面、造型各异的山墙，就这样在波西米亚的心脏地带生根发芽。扎哈里亚什也没忘记自己的居所，他将原本的哥特式城堡大规模改建，加入了华丽的拱廊庭院和壁画装饰，使其成为文艺复兴精神的宫廷象征。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`令人唏嘘的是，泰尔奇的辉煌在扎哈里亚什家族绝嗣后并未持续太久。随之而来的三十年战争（1618-1648）给中欧带来了深重苦难，泰尔奇虽然未遭彻底毁灭，但经济与文化发展陷入了长期停滞。然而，塞翁失马，焉知非福。正是因为后来的经济衰退和边缘化，泰尔奇没有经历剧烈的工业化改造和现代化扩张。那些美丽的文艺复兴房子，没有被拆除重建为时髦的新楼，而是被一代代居民简单地居住和维护着，仿佛时间在这里打了个盹。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到20世纪，人们才惊觉这个小镇保存了何等珍贵的遗产。二战期间它幸运地躲过了战火，在共产主义时期，它被列为国家保护单位，得到了系统的修缮。1992年，它被联合国教科文组织列入世界遗产名录，理由是“展现了欧洲文艺复兴时期城镇规划与建筑艺术的最高水准，其建筑群的整体性与保存状态无与伦比”。从一场灰烬中的重生，到一位领主的文艺复兴之梦，再到因祸得福的历史封存，泰尔奇的历史，本身就是一部关于毁灭、创造与保存的动人史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天时间，从容地品味泰尔奇。最好的抵达时间是清晨九点前，那时旅游巴士还未到达，广场几乎属于你一个人。整体游览节奏应极慢，遵循“由外到内，由全景到细节”的原则。上午光线柔和，适合拍摄广场全景和池塘倒影，并参观核心的城堡内部。中午在广场找一家咖啡馆观察当地生活。下午可以探索外围的城墙遗迹、小巷，或登上塔楼俯瞰，傍晚时分则等待金色夕阳洒在五彩立面上。这样的安排能让你体验到小镇从静谧到生动，再回归宁静的完整日常韵律。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避免周六下午和周日全天，那时许多本地家庭出游，广场和城堡可能非常拥挤。参观城堡内部必须参加导览团，且可能只有捷克语讲解，记得在入口处询问是否有英文文本说明书。小镇石板路多，请务必穿一双舒适耐走的平底鞋。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从古城北端的圣灵教堂与布拉尼斯基门进入，让自己像中世纪旅人一样，穿过拱门第一次看到狭长广场在眼前展开的震撼景象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着广场西侧（有城堡的一侧）的拱廊慢慢向南走，抬头仔细观察每一栋房屋山墙上不同的装饰、壁画和徽章，猜猜它们曾经主人的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进泰尔奇城堡，跟随导览穿过那挂满祖先肖像画的华丽长廊，在意大利风格的拱廊庭院里驻足，想象当年贵族们在此交谈的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上城堡旁边的市政厅塔楼，在狭窄的旋转楼梯攀升后，获得一个俯瞰整个“彩虹广场”和远处池塘湖泊的上帝视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从塔楼下来后，绕到广场东侧，选一家拱廊下的传统咖啡馆坐下，点一杯捷克啤酒或咖啡，静静观察广场上逐渐增多又逐渐散去的人流。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过广场南端，走下几步台阶，来到圣母玛利亚教堂前的小广场，这里气氛更加本地化，然后沿着城墙边的宁静小路散步。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要走到南侧的圣玛丽亚教堂后方，那里是观赏城堡建筑群倒映在宽阔的斯塔尼采池塘中最经典的位置。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果还有余力，沿着环绕老城的池塘小径走上一段，从不同距离和角度回望这座仿佛漂浮在水上的童话之城。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡塔楼俯拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，从市政厅塔楼顶层，使用广角镜头将整个狭长的广场、五彩房屋和远端教堂一并收入画面，构图上让广场的线条形成视觉引导。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`南侧池塘倒影拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`下午顺光时分，站在斯塔尼采池塘北岸，等待微风稍停的片刻，拍摄城堡、教堂与一排房屋在水中的完美对称倒影，建议使用偏光镜消除水面反光。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`北端拱门框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`站在北端布拉尼斯基门内的圣灵教堂前，以古老的石拱门作为画框，拍摄框内延伸的广场街道与尽头的城堡，增加照片的纵深感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`东侧小巷仰拍山墙`}</h4>
                  <p className="text-sm text-gray-700">{`找一条通往广场东侧房屋背后的小巷，仰拍那些装饰华丽的文艺复兴山墙衬着蓝天白云，凸显建筑的细节和色彩。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`广场喷泉与生活抓拍`}</h4>
                  <p className="text-sm text-gray-700">{`中午前后，以广场中央的参孙喷泉为前景，捕捉当地居民在长椅上休息、孩童奔跑或集市日热闹的场景，展现古镇的生机。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`日出后一小时和日落前一小时是拍摄建筑色彩的黄金时间，光线温暖柔和。使用三脚架在池塘边拍摄长曝光倒影时，请留意不要妨碍行人通道。当地人一般对拍照很友善，但拍摄私人店铺内部或居民窗台时，请先微笑示意。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`波西米亚梦幻民宿`}</h4>
                  <p className="text-sm text-blue-800">{`入住广场周边一栋经过精心修复的文艺复兴房屋，房东老太太会为你准备丰盛的 homemade 早餐，晚上能听见广场的钟声和归家的细碎脚步声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`湖畔宁静公寓`}</h4>
                  <p className="text-sm text-green-800">{`选择斯塔尼采池塘边上的现代公寓，拥有直面水面和老城天际线的超大落地窗，清晨在阳台上就能独享一幅无人打扰的油画般景色。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`城堡风格精品酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻由历史建筑改造的小型精品酒店，房间内有裸露的原始木梁和老式瓷砖壁炉，提供 spa 服务，让你在穿越历史的同时享受现代舒适。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济型家庭旅馆`}</h4>
                  <p className="text-sm text-purple-800">{`住在老城边缘步行五分钟可达的安静居民区，家庭经营的旅馆温馨整洁，价格亲民，是深度体验本地日常生活的绝佳选择。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`泰尔奇住宿数量有限，尤其在夏季和圣诞市场期间，务必提前数月预订。选择住在老城内虽然价格稍高，但能体验入夜后和清晨游客散去时那份独有的静谧。小镇非常安全，夜间散步也别有风味。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开泰尔奇许久后，我脑海里反复回放的，不是某一张具体的明信片画面，而是一种整体的、宁静的、被美好包围的感觉。在这个追求宏大叙事和刺激体验的时代，泰尔奇提供了一种截然不同的旅行价值：它教你慢下来，去欣赏细节的魔力。那些窗台上的小花，拱廊下光影的变幻，池塘里天鹅划过的涟漪，还有当地人向你投来的平静目光……这些细微之处，共同编织成了它无可替代的童话氛围。它提醒我们，美有时并非来自于惊世骇俗的创造，而是来自于对日常的精心雕琢和对历史的虔敬保存。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位厌倦了走马观花、渴望真正沉浸感的旅人，都应该把泰尔奇列入清单。它不仅仅是一个“景点”，更是一个可以走进去生活的梦境。在这里，你可以暂时逃离现代的喧嚣，让心灵在文艺复兴的比例与色彩中得到抚慰。你会明白，为什么联合国教科文组织要保护这样的地方——它守护的不仅是石头和颜料，更是人类对和谐、秩序与美好生活的一种古老理想。这颗波西米亚的珍珠，虽小却光芒永恒，静静等待着懂得品味时光的旅人，来读一首关于永恒之美的立体诗篇。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/sedlec-ossuary-kutna-hora-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    库
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">库特纳霍拉（人骨教堂及老城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kutná Hora (Sedlec Ossuary & Old Town)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/brno" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布尔诺老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Brno</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cesky-krumlov-castle-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克鲁姆洛夫（CK小镇）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cesky Krumlov</p>
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
