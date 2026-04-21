import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '蒙斯钟楼及老城 Belfry of Mons｜探寻比利时唯一巴洛克钟楼与世界遗产老城的时光迷宫 - 最佳欧洲景点',
  description: '说实话，第一眼看到蒙斯钟楼，和我想象中那些棱角分明的中世纪堡垒式钟楼完全不同。我是从火车站那条长长的、略带坡度的石板路走上来的，空气里飘着刚出炉的华夫饼那股甜腻的黄油香，还有咖啡馆里研磨豆子的焦苦味。然后，在一个街角的转弯处，它毫无预兆地出现了——不是咄咄逼人地耸立，而是像一个穿着绿色丝绒外套、戴着...',
}

export default function BelfryOfMonsOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '比利时', href: '/destinations/belgium' },
            { label: '蒙斯（埃诺省）', href: '/destinations/belgium' },
            { label: '蒙斯钟楼及老城', href: '/attractions/belfry-of-mons-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`蒙斯钟楼及老城・Belfry of Mons and the Old Town・比利时・蒙斯（埃诺省）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，第一眼看到蒙斯钟楼，和我想象中那些棱角分明的中世纪堡垒式钟楼完全不同。我是从火车站那条长长的、略带坡度的石板路走上来的，空气里飘着刚出炉的华夫饼那股甜腻的黄油香，还有咖啡馆里研磨豆子的焦苦味。然后，在一个街角的转弯处，它毫无预兆地出现了——不是咄咄逼人地耸立，而是像一个穿着绿色丝绒外套、戴着金色小帽的优雅老者，静静伫立在老城的屋顶海洋之上。下午的阳光斜斜地打在它圆润的塔身上，那些砂岩仿佛有了温度，散发出蜂蜜般柔和的光泽。钟声就在这时响起了，不是急促的报时，而是悠扬的、带着些许金属颤音的一段旋律，懒洋洋地滚过红色的瓦片屋顶，惊起一群鸽子。
这座钟楼和它脚下缠绕的古老街巷，是活着的。你很难在蒙斯老城里找到一条笔直的路，它们全是弯弯绕绕的，像小孩子随手丢在地上的鞋带，把一栋栋山墙陡峭、色彩斑驳的联排屋紧紧系在一起。当地的老太太拎着藤编的菜篮，慢悠悠地穿过拱廊，面包店的门一开一合，带出一股热腾腾的酵母气息。钟楼就在这里，它不是一座需要你屏息凝神仰望的冰冷纪念碑，而是你逛着逛着，一抬头，又能从某个意想不到的缝隙里看到它的身影，仿佛一个沉默而可靠的向导。
最打动人的，是那种“被时间轻轻放过”的感觉。布鲁日太完美，像明信片；布鲁塞尔太忙碌，充满政治气息。而蒙斯，它有一种漫不经心的优雅和略带磨损的真实。你会看到17世纪 guild house（行会会馆）的华丽金雕门楣旁边，是一家嬉皮风格的 vintage 古着店；古老的圣沃德吕教堂脚下，年轻人在长椅上分享一瓶啤酒。钟楼见证了这一切的更迭，但它从未高高在上。它的存在，就像是这座城市的集体记忆中枢和心跳仪，用每一个整点沉稳的钟鸣告诉你：别急，慢慢来，日子还长着呢。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`说实话，第一眼看到蒙斯钟楼，和我想象中那些棱角分明的中世纪堡垒式钟楼完全不同。我是从火车站那条长长的、略带坡度的石板路走上来的，空气里飘着刚出炉的华夫饼那股甜腻的黄油香，还有咖啡馆里研磨豆子的焦苦味。然后，在一个街角的转弯处，它毫无预兆地出现了——不是咄咄逼人地耸立，而是像一个穿着绿色丝绒外套、戴着金色小帽的优雅老者，静静伫立在老城的屋顶海洋之上。下午的阳光斜斜地打在它圆润的塔身上，那些砂岩仿佛有了温度，散发出蜂蜜般柔和的光泽。钟声就在这时响起了，不是急促的报时，而是悠扬的、带着些许金属颤音的一段旋律，懒洋洋地滚过红色的瓦片屋顶，惊起一群鸽子。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座钟楼和它脚下缠绕的古老街巷，是活着的。你很难在蒙斯老城里找到一条笔直的路，它们全是弯弯绕绕的，像小孩子随手丢在地上的鞋带，把一栋栋山墙陡峭、色彩斑驳的联排屋紧紧系在一起。当地的老太太拎着藤编的菜篮，慢悠悠地穿过拱廊，面包店的门一开一合，带出一股热腾腾的酵母气息。钟楼就在这里，它不是一座需要你屏息凝神仰望的冰冷纪念碑，而是你逛着逛着，一抬头，又能从某个意想不到的缝隙里看到它的身影，仿佛一个沉默而可靠的向导。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，是那种“被时间轻轻放过”的感觉。布鲁日太完美，像明信片；布鲁塞尔太忙碌，充满政治气息。而蒙斯，它有一种漫不经心的优雅和略带磨损的真实。你会看到17世纪 guild house（行会会馆）的华丽金雕门楣旁边，是一家嬉皮风格的 vintage 古着店；古老的圣沃德吕教堂脚下，年轻人在长椅上分享一瓶啤酒。钟楼见证了这一切的更迭，但它从未高高在上。它的存在，就像是这座城市的集体记忆中枢和心跳仪，用每一个整点沉稳的钟鸣告诉你：别急，慢慢来，日子还长着呢。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`蒙斯钟楼及老城`} />
                <InfoRow label="英文名称" value={`Belfry of Mons and the Old Town`} />
                <InfoRow label="正式名称" value={`Belfry of Mons`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`蒙斯（埃诺省）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`比利时唯一一座巴洛克风格的钟楼，联合国教科文组织世界文化遗产，也是蒙斯城市历史与市民自治精神的永恒象征。`} />
                <InfoRow label="建筑特色" value={`一座优雅而不失威严的87米高石塔，顶部冠以独特的洋葱形圆顶和镀金风标，绿色石板覆盖的塔身在阳光下宛如翡翠。`} />
                <InfoRow label="建筑风格" value={`巴洛克风格`} />
                <InfoRow label="文化价值" value={`它不仅是城市的天际线主宰，更是一部石头的编年史，见证了从中世纪行会自治到近代工业革命的完整城市脉搏，其钟声至今仍是社区生活的节拍器。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`钟楼内部开放时间通常为每年4月至9月，每日上午10点至下午6点（最后入场时间为下午5点15分）；10月至次年3月，开放时间缩短，通常为上午10点至下午5点，且周一可能关闭。具体开放日期每年可能有微调，强烈建议出行前在蒙斯旅游局官网查询。老城区街道及广场全天开放，但其中的圣沃德吕教堂等独立景点有各自的开放时间。`} />
              <InfoRow label="门票价格" value={`钟楼登顶门票约为9欧元（成人）。常设与特展联票约为12欧元。持有比利时艺术卡或“埃诺省通行证”可享折扣。65岁以上长者、学生及团体（10人以上）享有优惠票价（约7欧元）。12岁以下儿童在成人陪同下免费。蒙斯旅游局也提供包含钟楼、教堂和博物馆的“蒙斯通票”，价格更具优势。`} />
              <InfoRow label="地址" value={`Belfry of Mons, Grand-Place 21, 7000 Mons, Belgium`} />
              <InfoRow label="交通方式" value={`从布鲁塞尔南沙勒罗瓦机场（CRL）出发：最便捷方式是乘坐机场巴士至沙勒罗瓦中央火车站，再转乘前往蒙斯的火车（IC或IR列车），全程约1小时20分钟。从布鲁塞尔中央火车站（Brussels-Central）出发：直达蒙斯的火车班次非常频繁（IC列车），车程约50分钟。抵达蒙斯火车站后，钟楼和老城位于山顶，步行约15-20分钟的上坡路即可到达大广场；也可在站前乘坐前往“Grand-Place”的市内公交（如4路），几分钟即可抵达市中心。建议使用比利时铁路APP（SNCB/NMBS）查询实时火车班次。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`蒙斯钟楼的故事，得从一场火灾和一座更古老的木塔讲起。早在14世纪，蒙斯作为繁荣的布料贸易中心，就已经有了一座木结构的钟楼，肩负着警报警报、召集市民和炫耀城市财富的重任。可惜在1380年，一场大火把它吞没了。之后的几百年里，市民们只能在市政厅的矮塔上凑合着挂口钟。转机出现在17世纪，那正是西班牙南尼德兰地区（如今的比利时）相对和平与繁荣的一段时期。蒙斯的市民们口袋里有了钱，心里也燃起了一股想要拥有配得上自己城市身份的、真正不朽的地标建筑的雄心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1661年，基石终于落下。设计任务交给了本土建筑师路易·勒杜瓦。有趣的是，他没有选择当时在低地国家更常见的哥特式或佛拉芒文艺复兴式，而是大胆地采用了当时正从意大利和法国吹来的新风——巴洛克风格。你可以想象一下当时的争议：一座用于警戒和防御的钟楼，怎么能用上这么多柔和的曲线、华丽的装饰和那个看起来有点“异域风情”的洋葱形圆顶？但这恰恰体现了蒙斯市民的独特个性：他们想要的不是一座冰冷的军事瞭望塔，而是一件能体现城市文化品位、艺术追求和乐观精神的艺术品。建造过程断断续续，资金时有时无，就像老城的石板路一样坎坷。传说，负责雕刻石像的匠人因为等不到工钱，一气之下把圣乔治屠龙像的脸雕成了市长的模样，带着一丝嘲讽的微笑。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`钟楼真正成为我们今天看到的样子，是在18世纪。它躲过了法国大革命时期的破坏（当时很多宗教和贵族建筑都被毁），却在19世纪初拿破仑时代被法国军队占为电报站。那些巨大的木质横梁上，据说还能找到当年士兵刻下的痕迹。工业革命的浓烟笼罩过蒙斯附近的矿区，但钟楼依然洁净，它成了从煤矿下班归来的工人们抬头寻找的家园坐标。两次世界大战的炮火奇迹般地绕开了它，只是在墙面上留下了一些岁月的擦痕。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1999年，它和比利时、法国其他32座钟楼一起，被列入联合国教科文组织世界遗产名录。这份荣誉认可的不是它孤立的美丽，而是作为一种建筑类型——“钟楼”，在欧洲西北部城市社会生活中扮演的非凡公民角色。它们象征着城市的自由与繁荣，是市民自治精神对抗封建领主权力的石质宣言。今天，当你登上它的257级台阶，触摸那些被无数手掌磨得光滑的木扶手，透过狭窄的瞭望窗俯瞰整个埃诺省的绿色平原时，你触摸的是一整部关于坚韧、野心与日常生活的史诗。它不再敲响警报，但它的钟声，依旧在为这座城市的每一个平凡日子加冕。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味蒙斯钟楼和老城，你需要一整天的时间，并准备好你的双腿和一颗闲散的心。建议在早上九点前抵达大广场，这时旅游巴士尚未涌入，阳光正好温柔地照亮钟楼的东立面。整个游览节奏应该是“聚焦-发散-再聚焦”：先专心探索钟楼本身（约1.5小时），然后以钟楼为中心，像投石入水般让涟漪扩散到老城的肌理中（约3-4小时），最后在傍晚时分回到大广场附近，感受气氛的转变。这样的安排能让你既深入核心地标，又不错过街头巷尾那些意外的惊喜，同时完美捕捉晨昏两种光线下的城市之美。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周一通常是博物馆和小型景点的闭馆日，务必提前规划好行程。老城很多街道是凹凸不平的鹅卵石路，请务必穿一双绝对舒适耐走的鞋子。虽然蒙斯治安良好，但在热闹的广场用餐时，还是建议将包放在视线之内。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨趁大广场的露天咖啡馆刚摆好桌椅，先绕钟楼走一圈，感受它不同角度的光影变幻和石墙上丰富的雕刻细节。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`买票进入钟楼，在攀登那盘旋而上的古老石阶时，留心聆听自己的脚步声在筒状空间里的回响，并触摸那些被无数访客磨得温润的木质扶手。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上顶层观景台，不要急着拍照，先静静地环视一周，辨认远方的森林、古老的煤矿遗址以及老城内其他教堂的尖顶，把自己当成这座城市曾经的瞭望哨兵。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下塔后，从大广场的西北角钻进那条名为“Rue de la Coupe”的狭窄老街，任由自己迷失在蜿蜒的巷弄中，寻找墙面上的古老壁画和那些藏着古董书店或手工巧克力店的小角落。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着缓坡走到圣沃德吕教堂，仰头看看门口那尊著名的“圣乔治屠龙”雕像，然后进入教堂内部，感受与钟楼巴洛克风格截然不同的晚期哥特式空间的肃穆与崇高。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂后方的小路穿出，前往附近的蒙斯美术馆（BAM）或朵拉博物馆（一间有趣的私人收藏馆），让古老的艺术与现当代的创作在脑海中对话。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午餐后，寻着咖啡香找一家非主广场的老街区咖啡馆，坐在室外观察本地人的日常节奏，或许还能偶遇周末的小型集市。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚前，慢慢溜达回大广场，找一家有露台的餐厅坐下，点一杯当地的特色啤酒，看着夕阳给钟楼的圆顶和整个广场的建筑立面镀上浓郁的金色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`钟楼南侧斜坡仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，从Rue des Clercs街向上拍摄，可以利用斜坡的延伸感构图，让钟楼占据画面上方，下方是蜿蜒的石板路和老建筑，光线柔和时能拍出极具纵深感和故事感的画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`大广场拱门框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`站在广场北侧市政厅拱廊下，以拱门为天然画框，将远处的钟楼完整框入其中，前景带入广场上行走的人群或咖啡馆的伞蓬，生动展现地标与日常生活的交融。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`钟楼顶俯瞰红屋顶海洋`}</h4>
                  <p className="text-sm text-gray-700">{`登顶后，使用广角镜头向西北方向拍摄，将老城连绵不绝的砖红色屋顶、圣沃德吕教堂的尖顶以及远方绿色的乡村田野全部收纳，这是蒙斯最经典的鸟瞰视角。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣沃德吕教堂前平台侧拍`}</h4>
                  <p className="text-sm text-gray-700">{`在教堂前的空地上，侧向拍摄钟楼，可以将教堂部分哥特式建筑作为前景，与巴洛克风格的钟楼形成有趣的风格对比，下午的光线尤为适合。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`Rue d‘En Haut街的缝隙视角`}</h4>
                  <p className="text-sm text-gray-700">{`在这条老街上，寻找两栋房屋之间的狭窄缝隙，可以拍到钟楼像“羞怯的巨人”一样从屋顶线中探出头的独特画面，充满几何趣味和偶然性。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄建筑内部或登塔过程时，可以使用高ISO以保证手持拍摄的清晰度，因为内部光线较暗且禁止使用三脚架。当地人对拍照非常友好，但拍摄店铺内部或特定人物时，一个微笑和简单的手势征询会显得更有礼貌。傍晚的“蓝色时刻”（日落后的短暂时间）是拍摄钟楼夜景灯光与深蓝色天空对比的绝佳时机。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`火车站附近步行可达的现代风格连锁酒店，房间干净明亮，交通极其便利，适合作为探索城市的大本营，晚上回来还能享受安静的睡眠。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`大广场旁一栋17世纪商人宅邸改造的精品酒店，房间保留着古老的木梁和壁炉，推开窗就是钟楼的全景，晚上能听见隐约的钟声，仿佛住在历史里。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`位于蒙斯近郊一座19世纪庄园内的五星级酒店，拥有广阔的花园和顶级水疗中心，提供专车接送服务，让你在深度探索古城后能回归绝对的宁静与奢华。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`独特之选`}</h4>
                  <p className="text-sm text-purple-800">{`老城中心由艺术家经营的民宿，每个房间都是不同的主题，布置得像小型画廊，主人会热情地为你手绘一份独家探店地图，体验最地道的本地生活。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果选择住在老城内，请做好心理准备，周末的夜晚大广场周围可能比较热闹，酒吧和餐厅的人声会持续到较晚。相反，工作日的夜晚老城会非常宁静。许多特色小型酒店房间数量有限，尤其是在蒙斯著名的“杜尔杜鲁”节期间，务必提前数月预订。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开蒙斯很久以后，我发现自己最常回味的，不是某一张惊艳的照片，而是那种“不着急”的节奏感。在这个被火车线串联起的、高速运转的欧洲，蒙斯像一个被无意间保存下来的琥珀。钟楼就是那颗最核心的松脂，包裹住了几个世纪以来从容不迫的生活态度。它提醒着我们，旅行的意义，有时不在于征服多少地标，而在于你是否允许自己在一座陌生的城市里，彻底地慢下来，去倾听钟声之间的寂静，去留意光影在石墙上移动的轨迹。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了那些被旅游指南彻底“解构”和“消费”的热门城市，如果你想寻找一个仍有自己的心跳和呼吸节奏，能让你的思绪真正沉淀下来的地方，那么，请来蒙斯。专程为这座巴洛克钟楼而来，然后你会发现自己收获的，是整个老城馈赠的、关于时间与生活的温柔哲思。它或许不会给你即刻的、戏剧性的震撼，但它那种细腻的、缓缓渗透的 charm，会在你离开后的许多个平凡日子里，突然浮现心头，让你会心一笑。这，大概就是深度旅行最珍贵的礼物吧。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/dinant-saxophone-town-belgium" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迪南（铜管乐器之乡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dinant</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/citadelle-de-namur" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    那
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">那慕尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Citadelle de Namur</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/durbuy-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迪尔比</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Durbuy</p>
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
