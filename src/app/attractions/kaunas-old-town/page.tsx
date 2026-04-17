import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '考纳斯老城 Kaunas Old Town｜立陶宛的现代之心与中世纪之魂 - 最佳欧洲景点',
  description: '朋友，想象一下，你从一条宽阔的、种满菩提树的现代林荫大道（他们叫它自由大道）突然拐进一条窄窄的、用鹅卵石铺成的小巷。脚底的感觉立刻不同了，那些被几个世纪的雨水和脚步打磨得光滑圆润的石头，会让你的步伐不自觉放慢。空气里的味道也变了，刚出炉的“基贝林”馅饼的焦香，从一扇黄色的木门里飘出来，混合着老建筑石...',
}

export default function KaunasOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '考纳斯老城', href: '/attractions/kaunas-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`考纳斯老城・Kaunas Old Town・立陶宛・考纳斯`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，你从一条宽阔的、种满菩提树的现代林荫大道（他们叫它自由大道）突然拐进一条窄窄的、用鹅卵石铺成的小巷。脚底的感觉立刻不同了，那些被几个世纪的雨水和脚步打磨得光滑圆润的石头，会让你的步伐不自觉放慢。空气里的味道也变了，刚出炉的“基贝林”馅饼的焦香，从一扇黄色的木门里飘出来，混合着老建筑石头墙根淡淡的苔藓湿气。你的第一印象不会是那种令人屏息的、教科书式的壮观，而是一种被生活紧紧包裹的亲切感。穿着时髦的年轻人坐在露天咖啡座摆弄着苹果电脑，隔壁可能就是一座有着精美山墙的16世纪商人宅邸。
这就是考纳斯老城，它不像一位端坐在王座上的威严老者，更像一个穿着复古西装却打着鲜艳领带的翩翩绅士，身上同时散发着历史的醇厚与现代的活力。它的核心魅力，就在于这种奇妙的“分层感”。你的眼睛可以同时看到：中世纪城堡残垣的粗粝红砖，巴洛克教堂立面繁复到令人眼花缭乱的灰泥装饰，还有那些线条简洁、几何感强烈、被漆成明亮黄、绿或蓝色的现代主义建筑。它们挤在一起，非但不打架，反而像在聊天。
最打动人心的是，这里依然是活生生的城市客厅。市政厅广场（当地人昵称“白天鹅”，因为那座纯白色的文艺复兴式市政厅）上，永远不缺人。白天，游客在喷泉边拍照，小贩推着卖琥珀和亚麻制品的小车；黄昏时分，下班的人匆匆穿过，学生们聚在长椅上分享一瓶啤酒；周末的清晨，或许你能撞见一场即兴的小型音乐会，手风琴的声音在古老的立面之间清脆地回荡。在这里，历史不是被供在玻璃柜里的标本，而是你脚下踩着的石头，耳边听到的方言，和手里那杯带着本地蜂蜜味的格瓦斯饮料。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，想象一下，你从一条宽阔的、种满菩提树的现代林荫大道（他们叫它自由大道）突然拐进一条窄窄的、用鹅卵石铺成的小巷。脚底的感觉立刻不同了，那些被几个世纪的雨水和脚步打磨得光滑圆润的石头，会让你的步伐不自觉放慢。空气里的味道也变了，刚出炉的“基贝林”馅饼的焦香，从一扇黄色的木门里飘出来，混合着老建筑石头墙根淡淡的苔藓湿气。你的第一印象不会是那种令人屏息的、教科书式的壮观，而是一种被生活紧紧包裹的亲切感。穿着时髦的年轻人坐在露天咖啡座摆弄着苹果电脑，隔壁可能就是一座有着精美山墙的16世纪商人宅邸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这就是考纳斯老城，它不像一位端坐在王座上的威严老者，更像一个穿着复古西装却打着鲜艳领带的翩翩绅士，身上同时散发着历史的醇厚与现代的活力。它的核心魅力，就在于这种奇妙的“分层感”。你的眼睛可以同时看到：中世纪城堡残垣的粗粝红砖，巴洛克教堂立面繁复到令人眼花缭乱的灰泥装饰，还有那些线条简洁、几何感强烈、被漆成明亮黄、绿或蓝色的现代主义建筑。它们挤在一起，非但不打架，反而像在聊天。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的是，这里依然是活生生的城市客厅。市政厅广场（当地人昵称“白天鹅”，因为那座纯白色的文艺复兴式市政厅）上，永远不缺人。白天，游客在喷泉边拍照，小贩推着卖琥珀和亚麻制品的小车；黄昏时分，下班的人匆匆穿过，学生们聚在长椅上分享一瓶啤酒；周末的清晨，或许你能撞见一场即兴的小型音乐会，手风琴的声音在古老的立面之间清脆地回荡。在这里，历史不是被供在玻璃柜里的标本，而是你脚下踩着的石头，耳边听到的方言，和手里那杯带着本地蜂蜜味的格瓦斯饮料。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`考纳斯老城`} />
                <InfoRow label="英文名称" value={`Kaunas Old Town`} />
                <InfoRow label="正式名称" value={`Kaunas Old Town`} />
                <InfoRow label="国家" value={`立陶宛`} />
                <InfoRow label="城市" value={`考纳斯`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`立陶宛在两次世界大战期间的临时首都，其历史核心是立陶宛民族精神与文化韧性最生动的见证。`} />
                <InfoRow label="建筑特色" value={`内里斯河与尼曼河交汇处山丘上的红色砖石城堡，与山下棋盘格布局的老城广场、蜿蜒的鹅卵石街巷，共同构成一幅错落有致的立体画卷。`} />
                <InfoRow label="建筑风格" value={`哥特式、文艺复兴式、巴洛克式建筑与20世纪早期现代主义（尤其是独特的考纳斯现代主义）建筑惊人地和谐共存。`} />
                <InfoRow label="文化价值" value={`不仅是中世纪古城，更是20世纪初立陶宛民族复兴和现代国家构建时期的“青春首都”，充满了先锋艺术与独立精神的烙印。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`公共区域（街道、广场）全天开放。内部各景点开放时间不一：考纳斯城堡博物馆夏季（5-9月）10:00-18:00，冬季（10-4月）周二至周日10:00-17:00，周一闭馆；圣彼得与圣保罗大教堂通常在白天开放，具体时间建议现场查看；众多小型画廊、咖啡馆和店铺的营业时间通常在10:00-20:00之间。节假日部分场所可能缩短营业时间或关闭。`} />
              <InfoRow label="门票价格" value={`漫步老城街道与广场免费。进入单个景点需购票：考纳斯城堡博物馆成人票约6欧元，学生票半价；市政厅塔楼观景台约3欧元；其他博物馆和教堂门票一般在2-6欧元区间。强烈推荐购买“考纳斯文化卡”（Kaunas City Card），可无限次乘坐公共交通并免费或折扣进入绝大多数景点，24小时卡约15欧元，非常超值。`} />
              <InfoRow label="地址" value={`市政厅广场周边区域，主要围绕 Vilniaus g. 和 Laisvės al. 街道，考纳斯，立陶宛，邮编 LT-44280`} />
              <InfoRow label="交通方式" value={`从考纳斯国际机场（KUN）出发：乘坐29路公交车直达市中心“火车站”（Geležinkelio Stotis）附近，车程约25分钟，班次每小时1-2班，票价约1欧元，上车向司机购票。从维尔纽斯乘火车或巴士：火车约1.5小时，巴士约1.2小时，班次频繁，抵达考纳斯中央车站或巴士总站后，步行15-20分钟或搭乘任一开往市中心方向的公交车（如5路、12路）即可到达老城边缘。老城内部最适合步行探索。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`考纳斯的故事，始于一场战略联姻。不过，联姻的不是王子公主，而是两条河——内里斯河与尼曼河。早在13世纪，立陶宛大公们就在这两河交汇处的制高点上，用坚固的橡木建起了第一座堡垒，用来抵御条顿骑士团的猛烈进攻。到了14世纪，石头城堡取代了木堡，那座红色的、有着巨大圆形塔楼的考纳斯城堡，至今仍守卫着河岸，虽然只剩下残躯，但它斑驳的墙体里，锁着立陶宛大公国与十字军血战的呐喊声。城堡脚下，商人、手工艺人逐渐聚集，形成了方格网布局的城镇，这就是老城的雏形。你可以想象，中世纪的这里，码头上停满了运载着木材、蜂蜡和毛皮的船只，市场上充斥着各种语言，是个热闹的边境贸易中心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，让考纳斯命运发生戏剧性转折的，是20世纪的风云。第一次世界大战后，立陶宛宣布独立，但首都维尔纽斯地区被波兰占领。就在这时，不那么起眼的、地处国家地理中心的考纳斯，被推上了历史的前台。从1919年到1939年，它成了立陶宛的“临时首都”。这二十年，是考纳斯乃至整个立陶宛的“黄金青春期”。政府机关、外国使馆、大学、剧院、报社如雨后春笋般涌现。最重要的是，一大批受过良好教育、满怀建国热情的建筑师、艺术家和知识分子汇聚于此，他们急于为这个新生的国家塑造一个现代形象。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，一场建筑革命在老城的边缘和新区悄然发生。他们没有推倒旧世界，而是在旁边建造新世界。受当时德国包豪斯和法国装饰艺术运动的影响，一种被称为“考纳斯现代主义”的独特风格诞生了。这些建筑摒弃了古典的繁复，采用流畅的曲线、水平的带状窗、几何图案的浮雕，以及大胆的、象征乐观主义的明亮色彩。你能在自由大道两侧看到它们最集中的展示：一座银行大楼的立面可能装饰着象征工业的齿轮图案，一座公寓的门厅里藏着线条优雅的螺旋楼梯。这段时期，考纳斯从一个中世纪商贸小镇，一跃成为波罗的海地区现代主义建筑的宝库，空气中弥漫着自由、创造和未来的味道。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当然，美好的时光总是易碎。第二次世界大战和紧随其后的苏联占领，给这座城市带来了深重的创伤。犹太社区被摧毁，知识分子遭到迫害，许多现代主义建筑被挪作他用，积满灰尘。在苏联时期，考纳斯成为了重要的工业中心，老城的许多角落不可避免地显得灰暗和破败。但即便在最压抑的年代，那份深植于石头和血液中的独立精神也未曾熄灭。考纳斯一直是立陶宛民族抵抗运动的重要温床。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到1990年立陶宛再次恢复独立，考纳斯老城开始了缓慢而坚定的修复与复兴。人们不仅精心修缮了中世纪的教堂和广场，更重新发现了那些被遗忘的现代主义杰作，将它们从仓库和办公室变回住宅、画廊和设计酒店。今天，当你漫步其中，你走过的每一段路，都重叠着至少三层历史：中世纪立陶宛大公国的、战间期青春共和国的、以及当代重获新生的立陶宛的。这种穿越时空的对话感，是考纳斯最独一无二的叙事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味考纳斯的层次，建议留出一整天时间，从清晨开始。早上9点前抵达市政厅广场，此时游客未至，阳光斜射在“白天鹅”建筑上，最适合感受老城苏醒的宁静。然后以广场为圆心，先深入中世纪街巷，触摸砖石的古老体温；午后，将重心转向自由大道及周边的现代主义建筑群，体会20世纪的先锋脉搏；傍晚时分，登上城堡山或市政厅塔楼，在金色的夕阳下俯瞰两河交汇与全城景色，将历史的各个层次尽收眼底。这样的节奏张弛有度，由古及今，能让你最完整地体验考纳斯的时空交响。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周六上午市政厅广场常有热闹的创意市集，是淘手工纪念品和与当地人交流的好时机，但也会比较拥挤。自由大道上的现代主义建筑内部很多仍是私人住宅或办公室，参观时请保持安静，不要擅闯。考纳斯的天气多变，即便是夏天，傍晚河边也可能起风，记得带一件薄外套。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从市政厅广场的“白天鹅”脚下出发，绕着它走一圈，欣赏每一面墙上不同时期留下的建筑装饰细节`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`随意钻进一条向东延伸的鹅卵石小巷，比如Vilniaus街，让好奇心带领你发现那些隐藏在颜色柔和的门脸后的独立设计师小店或迷你画廊`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`务必推开圣彼得与圣保罗大教堂那扇厚重的大门，走进去，让你的眼睛在昏暗光线中适应，然后猛然抬头，被那令人震撼的、拥有大量巴洛克灰塑装饰的高耸白色内殿所击中`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着步行街一直走到老城的东端，在帕涅韦日斯街附近寻找那面著名的、绘有考纳斯历史人物的巨大彩色壁画墙，它是老城现代活力的绝妙注脚`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从老城漫步至宽阔的自由大道，放慢脚步，像个建筑侦探一样，仔细打量大道两侧那些线条简洁、色彩明快的战间期现代主义建筑立面和入口`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访大道旁的“魔鬼博物馆”，这个古怪又迷人的收藏会让你从另一个角度理解立陶宛的民间灵魂和黑色幽默`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前一个小时，沿着内里斯河岸散步走到考纳斯城堡下，从河对岸欣赏城堡、老城屋顶与教堂尖顶共同勾勒出的经典天际线`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后回到市政厅广场，找一家有露天座位的餐厅，点一份土豆饺子或冷甜菜汤，看着广场的灯光逐一亮起，融入夜晚的本地人群之中`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`市政厅广场东南角仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在广场东南角的鹅卵石地面上，用广角镜头仰拍纯白色的市政厅塔楼，将一部分古老的石头街道纳入前景，构图充满古典的纵深感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`Vilniaus街与Maironio街交叉口`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光西斜时，站在路口，拍摄色彩斑斓的联排建筑立面与蜿蜒的鹅卵石道路形成的和谐曲线，捕捉行人走过的动态瞬间。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`自由大道中段的人行天桥上`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，走上天桥，向西拍摄自由大道笔直延伸的透视景观，两侧的现代主义建筑在温暖侧光下轮廓分明，极具韵律感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`考纳斯城堡对面的内里斯河岸`}</h4>
                  <p className="text-sm text-gray-700">{`黄昏蓝调时刻，在城堡对面的河岸边，用长焦镜头压缩空间，拍摄城堡红砖塔楼、后方老城建筑以及水面倒影共同构成的静谧画面。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`立陶宛人普遍对拍照很友善，但拍摄私人住宅窗户或室内时请务必征得同意。教堂内部通常允许非闪光灯摄影，但举行仪式时请绝对保持安静并避免拍照。利用考纳斯多云的天气，云层可以成为戏剧性天空的完美背景。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`文艺青年之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在老城一栋经过修复的战间期现代主义公寓楼里，房间有高高的天花板、原始的拼花地板和复古家具，窗外就是宁静的庭院。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史沉浸体验`}</h4>
                  <p className="text-sm text-green-800">{`选择市政厅广场旁由16世纪贵族宅邸改造的精品酒店，躺在四柱床上就能听到广场上传来的钟声，石墙的厚度保证了你一夜安眠。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计爱好者天堂`}</h4>
                  <p className="text-sm text-yellow-800">{`自由大道附近一栋地标性现代主义建筑内的设计酒店，每个房间都独一无二，家具是立陶宛本土设计师的作品，本身就是一场美学之旅。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`河景静谧处`}</h4>
                  <p className="text-sm text-purple-800">{`内里斯河对岸一栋安静的家庭式民宿，主人会为你准备丰盛的立陶宛早餐，从房间窗户望出去，考纳斯城堡和老城全景就像一幅活动的油画。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城中心的住宿夜晚可能会听到酒吧传来的轻微声响，浅眠者可以选择靠近自由大道内侧或河岸的住处。考纳斯的旅游旺季是夏季和圣诞市场期间，这些时段的特色住宿非常紧俏，务必提前数月预订。城市治安良好，夜晚独行也感觉安全。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开考纳斯好些日子了，我脑海里反复出现的，不是某个具体的建筑画面，而是一种感觉。那是一种在厚重历史中轻盈穿行的自由感。你在这里永远不会感到历史的压迫，因为它从未死去，它被喝进了咖啡里，画在了墙上，穿在了年轻人的身上。考纳斯老城教会我，一座城市的伟大，不在于它保存了多少完美的古迹，而在于它如何让所有的时代痕迹——荣耀的、伤痛的、实验的、平凡的——都继续呼吸，并彼此对话。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求崭新和同质化的世界里，考纳斯像一颗有着复杂切面的宝石。它提醒我们，民族的身份不是单一的，它可以同时是中世纪骑士的后裔、战间期满怀理想的现代主义者、以及今天拥抱欧盟的欧洲公民。来这里，你不是参观一个景点，而是阅读一部立陶宛民族的立体自传。它或许没有巴黎的浪漫或罗马的恢弘，但它有的，是那种在逆境中开出创新之花的韧性，是那种将过去与未来编织进日常生活的智慧。对于任何厌倦了浮光掠影、渴望触摸一个地方真实灵魂的旅人来说，考纳斯老城都是一次必须的、深度的抵达。你会带走的故事，远比你拍下的照片要丰富得多。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/vilnius-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维尔纽斯老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vilnius Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/klaipeda-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克莱佩达老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Klaipėda Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kernav--archaeological-site" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克尔纳韦</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kernavė</p>
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
