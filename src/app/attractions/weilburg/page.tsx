import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '威尔堡旅游攻略：探索拉恩河畔阶梯宫殿与神秘航道的王室之城',
  description: '德国威尔堡(Weilburg)深度游攻略。揭秘拉恩河畔独一无二的阶梯式宫殿、幽深航道与童话小镇，包含门票交通、打卡路线和避坑指南。',
}

export default function WeilburgPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '威尔堡', href: '/attractions/weilburg' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`威尔堡・Weilburg・德国・黑森州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你已经看腻了那些平铺直叙的城堡，今天这份**威尔堡私藏旅游攻略**，就带你躲开人潮，去一个真正“立体”的王室之城。想象一下：在德国黑森州宁静的拉恩河畔，一座庞大的宫殿群不是“坐落”在山坡上，而是像巨型阶梯一样，从河岸码头一级一级“生长”到山顶，足足跨越了90米的高度差！这可不是普通的山城，这是曾经的“国家首都”——拿骚-威尔堡伯国的心脏。你的视线会不由自主地跟着那些红砂岩建筑、层层叠叠的巴洛克花园和隐蔽的塔楼向上攀爬。而最神奇的是，山体内部还藏着一个长达195米的幽深隧道，过去的王室船只竟能直接从河里开进去，宛如《盗梦空间》里的场景。作为你的专属向导，这份**威尔堡自由行指南**将带你摸清它的每一级台阶，从最佳拍摄机位到那趟穿越山腹的奇妙船行，我们一一解锁。准备好进行一次垂直维度的时空穿梭了吗？`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友，如果你已经看腻了那些平铺直叙的城堡，今天这份<strong>威尔堡私藏旅游攻略</strong>，就带你躲开人潮，去一个真正“立体”的王室之城。想象一下：在德国黑森州宁静的拉恩河畔，一座庞大的宫殿群不是“坐落”在山坡上，而是像巨型阶梯一样，从河岸码头一级一级“生长”到山顶，足足跨越了90米的高度差！这可不是普通的山城，这是曾经的“国家首都”——拿骚-威尔堡伯国的心脏。你的视线会不由自主地跟着那些红砂岩建筑、层层叠叠的巴洛克花园和隐蔽的塔楼向上攀爬。而最神奇的是，山体内部还藏着一个长达195米的幽深隧道，过去的王室船只竟能直接从河里开进去，宛如《盗梦空间》里的场景。作为你的专属向导，这份<strong>威尔堡自由行指南</strong>将带你摸清它的每一级台阶，从最佳拍摄机位到那趟穿越山腹的奇妙船行，我们一一解锁。准备好进行一次垂直维度的时空穿梭了吗？" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`威尔堡`} />
                <InfoRow label="英文名称" value={`Weilburg`} />
                <InfoRow label="正式名称" value={`Weilburg`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`黑森州`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`别看威尔堡现在是个宁静的小城，在1806年之前，它可是一个独立小国——拿骚-威尔堡伯国（后来升为公国）的首都。这就像一个精心设计的“微缩王国”模型。它的历史重要性不在于像柏林或维也纳那样影响欧洲大局，而在于它完美展现了一个德意志邦国如何利用有限的地理空间，构建出功能齐全、象征权力至上的完整都城。从山顶的宫殿（政府与居住中心），到山腰的宫廷花园（娱乐与展示），再到河岸的码头（经济与交通命脉），这条垂直轴线就是一部立体的政治宣言。更值得一提的是，统治这里的拿骚家族通过精明的联姻和统治，其血脉后来流淌进了荷兰王室和卢森堡大公家族。所以，漫步在威尔堡，你不仅仅是在参观一个“城堡”，而是在丈量一个消失了的小王国的全部疆域与雄心，这种完整性和独特性，在欧洲都极其罕见。`} />
                <InfoRow label="建筑特色" value={`威尔堡宫殿建筑群最震撼的，是它适应地形的“生长”方式。从拉恩河对岸望过去，那绝不是一片平坦的建筑群，而是一座由暖色调红砂岩和深色石板瓦构成的、层层堆叠的立体迷宫。建筑的材质厚重而坚实，历经数百年风雨，砂岩表面呈现出蜂蜜色到赭石色的柔和过渡。最底层直接“插”入河岸，带有拱门的船库和厚重的墙体仿佛从岩石中凿出。往上看，每一层平台都承载着不同功能的建筑和几何形状的巴洛克花园，以巨大的挡土墙和拱廊作为支撑。窗户的排列随着高度变化，低层是朴实的方窗，越高处，窗户的装饰越精致，仿佛在强调地位的上开。在阳光下，建筑的立体感被光影雕刻得无比锋利，阴影处是凉丝丝的墨蓝色，向阳面则是一片金黄，整个复合体就像一块巨大的、精心切割过的琥珀，镶嵌在翠绿的山坡与湛蓝的河水之间。`} />
                <InfoRow label="建筑风格" value={`威尔堡宫殿主要融合了文艺复兴晚期和巴洛克风格。文艺复兴风格体现在它对古典秩序和对称性的追求上，尽管地形陡峭，建筑师仍努力在每一层平台上创造出对称的庭院和建筑立面，比如宫殿主楼严谨的窗户布局和三角形的山花饰。而巴洛克风格则在这里找到了戏剧性的用武之地：它完美驾驭了这块“不可能”的场地，将陡坡的挑战转化为彰显权力与荣耀的舞台。那种动态、宏伟、追求视觉冲击力的巴洛克精神，不是通过繁复的雕塑，而是通过这气势磅礴的阶梯式布局本身来展现的——将自然地形直接驯化为建筑的一部分。走进宫殿内部，巴洛克风格就更明显了：华丽炫目的灰泥装饰、天顶画、以及巨大的宴会厅，无不诉说着王公贵族想要震撼访客的意图。可以说，这里的建筑风格是“务实巴洛克”，用最震撼的总体布局征服你，再用精致的内部细节取悦你。`} />
                <InfoRow label="文化价值" value={`对于威尔堡人而言，这座阶梯宫殿不是冰冷博物馆，而是他们城市跳动的心脏和日常生活的背景板。宫殿里至今仍有州政府的办公室在运作，花园是市民散步、遛狗的公园，河岸长廊是年轻人约会的地方。它完美诠释了德国人“历史活在当下”的理念。每年夏季的“威尔堡城堡节”，整个宫殿和花园会变身成巨大的露天剧场和音乐会现场，古典乐与戏剧的回响让古老石墙再次“呼吸”。而那个幽深的航道隧道，早已从王室的交通特权，变成了游客惊叹的奇观和当地人津津乐道的城市传奇，它象征着人类智慧对自然的巧妙利用。在现代社会，威尔堡提供了一种截然不同的遗产体验：它不是将你隔绝在历史之外，而是邀请你走进一个仍然在使用的、充满生活气息的历史模型里，让你亲身感受，一个小而精的王国都城，是如何有机地长在山水之间，并持续滋养着一方水土与人民。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 威尔堡一日游终极打卡路线：从俯瞰全景到探秘地下航道`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`经典步行路线推荐`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的专属向导，这份**威尔堡自由行指南**规划了一条不走回头路的精华路线。**上午**，我们“自上而下”征服它。先从火车站出来，别急着进城，过桥到拉恩河对岸的“观景台”。这里是**拍摄阶梯宫殿全景的黄金机位**，晨光洒在建筑群上，光影分明。拍够后过桥回到城区，沿着“Oberstadt”上坡路，穿过古老的城门，直奔山顶的**威尔堡宫殿**。用一上午时间细细参观宫殿内部博物馆，在骑士厅感受威严，在宴会厅仰望华丽的天顶画。**中午**，从宫殿出来，就在山腰的**宫廷花园**找张长椅坐下，享用自备的简单午餐，俯瞰拉恩河在脚下拐出巨大的弯道。**下午**，开启探险模式！从花园下层的小门出去，沿着“Schlossgarten”路向下，找到通往**航道隧道**的入口。感受完山腹内部的清凉与回音后，从河岸层的隧道口出来，你已身处码头。在这里可以参加**观光船游览**，从水面上再次仰望你刚刚征服的“立体之城”。下船后，漫步**老城区**，在集市广场的咖啡馆喝杯下午茶。**傍晚**，沿着河岸长廊散步，等待灯光渐次点亮宫殿，那是另一番梦幻景象。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>宫殿阶梯花园的几何学</strong>：站在花园的某一层平台回望，你会被德国巴洛克园林的极致理性之美击中。修剪得如同绿色雕塑的紫杉树篱，构成复杂的星形或涡卷图案；砂砾小径划出尖锐的线条，将你的视线引向中央的喷泉或远处的亭台。最妙的是，这些平面图案因为建在陡坡的“台阶”上，形成了令人眩晕的立体透视效果。蹲下来，让视线与黄杨树篱齐平，你会看到一个由植物构成的、精准而魔幻的几何世界。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>大宴会厅的“湿壁画”天顶</strong>：抬头仰望那个令人脖子发酸的天顶，壁画仿佛要挣脱引力向你扑来。艺术家巧妙地利用透视，将平面的穹顶画成了拥有多层立柱和拱廊的开放性建筑结构，天使和神话人物在其中穿梭。仔细看，画中人物的衣袂飘飘，似乎能感受到画师当年在脚手架上，趁着石膏未干迅速作画时留下的那种流动的笔触。当阳光从高侧窗射入，尘埃在光柱中飞舞，画中世界与现实的光影交织，那一刻，你真的会相信天国就在头顶。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>航道隧道的“听觉奇观”</strong>：走进隧道口，河水的气息扑面而来，带着石壁特有的阴凉土腥味。隧道内只有昏暗的灯光，你的其他感官会立刻敏锐起来。最震撼的是声音——脚步声在拱形岩壁上碰撞出长长的回音，偶尔从隧道深处传来水滴落入水面的“叮咚”声，清脆得吓人。试着低声说句话，声音会被放大、扭曲，仿佛在跟山体本身对话。闭上眼睛，想象一艘18世纪的平底船，载着盛装的王公贵族，沉默地滑入这片黑暗，只有船桨划水声和火把噼啪作响，这是何等超现实的旅行方式。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>河畔长廊的黄昏光影</strong>：日落时分，一定要回到拉恩河对岸。夕阳将宫殿建筑群的西立面染成炽烈的金红色，而东面则沉入深邃的蓝灰色阴影中。每一级阶梯、每一个窗户的窗棂，都被勾勒出金色的轮廓。河面像一面暗调的绸缎，倒映着这温暖的光辉。你会看到灯光从宫殿的窗户里一格一格亮起，先是温暖的黄色，随后花园里的地灯也亮了，宛如给这座阶梯城堡系上了一条发光的腰带。此刻，这座坚硬的石头之城，变得无比温柔、梦幻。" }} />
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>最佳时间与“人流错峰”</strong>：最美的季节是春末到秋初（5月-9月），花园葱郁，游船开放。但请<strong>务必避开周日和德国公共假期</strong>，那时宫殿内部博物馆可能关闭（花园仍开放），且小镇会涌入较多周边游客。理想时间是工作日前往，上午10点前抵达观景台拍照，光线柔和人又少。<strong>门票</strong>建议提前在宫殿官网查看开放时间并考虑在线购买，尤其是如果你计划参观多个博物馆联票。<strong>交通</strong>上，威尔堡火车站步行到老城约15分钟，一路是上坡，行李多的朋友要有心理准备。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>穿着与装备的硬核建议</strong>：这是一次“登山”之旅！<strong>鞋子是第一要务</strong>，必须穿最舒适防滑的步行鞋或运动鞋。城里的石板路、宫殿内光滑的木地板、花园的砂砾路、隧道里潮湿的地面，都在考验你的脚力。隧道内常年只有10度左右，<strong>哪怕夏天也建议带一件薄外套或披肩</strong>。参观宫殿内部禁止使用闪光灯，背包通常需要寄存。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>航道隧道与游船的“坑”</strong>：隧道入口不太好找，留意“Schifffahrtstunnel”的指示牌，它不在主路上。最重要的一点：<strong>隧道并非随时可以步行穿过！</strong> 它的开放取决于水位和游船运营时间，有时会关闭。出发前一定要在游客中心或官网确认当天是否开放。想体验乘船穿过隧道的感觉，务必查好<strong>观光船的时刻表</strong>，班次并不密集，错过一班可能要等很久。游船码头就在隧道河岸出口旁。" }} />
            </div>
          </Section>

          <Section title={`6. 威尔堡住宿与美食攻略：住在童话里，吃在河畔`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "住在威尔堡，强烈推荐选择能看到拉恩河或宫殿景观的住宿。<strong>Hotel & Restaurant ‘Anker’</strong> 位置绝佳，就在河畔，部分房间带阳台，推窗就是宫殿在水中的倒影。早餐时，看着河面上的薄雾渐渐散去，宫殿显出身形，是一天完美的开始。如果想住在古老建筑里，老城中心有一些由半木结构房屋改造的温馨<strong>民宿(Pension)</strong>，木头梁柱嘎吱作响，充满历史感，但隔音可能稍差。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "美食方面，一定要尝试拉恩河里的新鲜鱼类。河边那家历史悠久的<strong>‘Zum Schwarzen Bären’</strong> 餐厅，招牌是“威尔堡鲤鱼”或河鳟，用当地简单的方式烹制，肉质鲜美。点一份，配上一杯清爽的雷司令白葡萄酒，坐在户外的座位上，边吃边看河景，这就是最地道的体验。下午茶可以去集市广场的咖啡馆，点一块黑森林蛋糕，感受小镇慢时光。总体而言，这里的餐饮价格比大城市亲切，氛围却十足浪漫。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果你有一天半的时间，强烈推荐探索周边。首推<strong>‘Grube Fortuna’ 矿业博物馆</strong>（距威尔堡约10分钟车程）。这可不是普通的博物馆，你可以戴上安全帽，乘坐原始的矿工小火车，深入一个真实的废弃铁矿隧道，了解这片地区“地下”的财富历史，恰好与你上午探访的“水上”航道隧道形成奇妙呼应。另一个选择是租一辆自行车，沿着<strong>拉恩河自行车道</strong>骑行一段。这条绿道风景如画，两岸是宁静的村庄和起伏的葡萄园，骑行到下一个如画的小镇比如 <strong>‘Runkel’</strong>（有一座迷人的河边城堡废墟），会让人彻底沉醉在德国乡村的田园诗意中。这些延伸探索，能让你从威尔堡这个精致的“盆景”，跳出来看到更广阔的、充满自然与工业遗产的黑森州乡土画卷。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "威尔堡的灵魂，在于它将“不可能”化为“奇迹”的那种从容与智慧。它不像那些高踞孤崖、拒人千里的城堡，而是敞开怀抱，从水岸到山巅，将生活、权力、艺术与自然，编织进一层层上升的阶梯里。在这里，你不仅看到了历史，更亲身走过了历史构建它的逻辑与诗意——一种垂直向上的、与山河共舞的生存美学。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bad-pyrmont-historic-spa-palm-garden" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴特皮尔蒙特</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bad Pyrmont</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/schloss-weikersheim" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    魏
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">魏克斯海姆宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Schloss Weikersheim</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lohr-am-main-snow-white" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    美
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">美因河畔洛尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lohr am Main</p>
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
