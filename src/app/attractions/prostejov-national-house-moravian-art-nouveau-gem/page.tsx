import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '普罗斯捷约夫 Prostějov｜探访捷克摩拉维亚的隐秘瑰宝，沉醉于扬·科捷拉设计的新艺术运动奇迹国家之家 - 最佳欧洲景点',
  description: '说实话，如果你只是匆匆路过普罗斯捷约夫火车站，你可能会以为这不过是摩拉维亚平原上一个宁静、甚至有些平凡的小城。空气里飘着面包房和咖啡的香气，电车叮叮当当地驶过铺着鹅卵石的街道。但当你跟着导航，或者仅仅是随着三三两两拎着乐谱或画具的当地人，拐进老城中心那个开阔的Masarykovo广场时，你的呼吸会为',
}

export default function ProstejovNationalHouseMoravianArtNouveauGemPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '捷克', href: '/destinations/europe' },
            { label: '普罗斯捷约夫 (位于摩拉维亚地区的奥洛穆茨州)', href: '/destinations/europe' },
            { label: '普罗斯捷约夫', href: '/attractions/prostejov-national-house-moravian-art-nouveau-gem' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`普罗斯捷约夫・Prostějov・捷克・普罗斯捷约夫 (位于摩拉维亚地区的奥洛穆茨州)`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，如果你只是匆匆路过普罗斯捷约夫火车站，你可能会以为这不过是摩拉维亚平原上一个宁静、甚至有些平凡的小城。空气里飘着面包房和咖啡的香气，电车叮叮当当地驶过铺着鹅卵石的街道。但当你跟着导航，或者仅仅是随着三三两两拎着乐谱或画具的当地人，拐进老城中心那个开阔的Masarykovo广场时，你的呼吸会为之一滞。那感觉，就像在翻阅一本朴素的古籍时，突然抖落出一张用金箔和珐琅彩绘制的华丽书签。
你的目光会不由自主地被广场一侧那座建筑牢牢抓住——那就是国家之家。它不像哥特教堂那样直刺苍穹，也不像巴洛克宫殿那样炫耀权势。它以一种奇妙的、充满生命力的姿态“生长”在那里。乳白色的立面不再是冰冷的石头，而是像被春风拂过的水面，泛起柔和的涟漪与曲线。巨大的窗户上，铁艺花纹缠绕成葡萄藤与百合花的形状，在午后的阳光下，把变幻的光影投映在行人的身上。正门上方的马赛克壁画色彩依然鲜亮，讲述着斯拉夫的神话与历史的篇章。你甚至能闻到空气中有一丝旧书、抛光木头和淡淡油彩混合的气息，那是从建筑内部漫溢出来的、经年累月的文化馨香。
对于普罗斯捷约夫人来说，国家之家绝非一个仅供参观的博物馆。你看，那位老先生正不紧不慢地踱步进去，他是去阅览室看今天的报纸；一群中学生兴奋地涌入门厅，他们学校的音乐会今晚将在主礼堂举行；傍晚时分，情侣们会相约在建筑侧面咖啡馆的露天座位。这座建筑完美地嵌入了城市的肌理与呼吸里，它是一颗依然强劲跳动的心脏。它的核心魅力，就在于这种“活着的华丽”。它没有在历史中凝固，而是持续不断地吸纳着当代的生活气息，让最先锋的艺术形式和最日常的市民生活，都在这些百年精美的浮雕与彩绘下和谐共处。在这里，美不是被供奉起来的，而是被使用、被聆听、被热爱的。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "说实话，如果你只是匆匆路过普罗斯捷约夫火车站，你可能会以为这不过是摩拉维亚平原上一个宁静、甚至有些平凡的小城。空气里飘着面包房和咖啡的香气，电车叮叮当当地驶过铺着鹅卵石的街道。但当你跟着导航，或者仅仅是随着三三两两拎着乐谱或画具的当地人，拐进老城中心那个开阔的Masarykovo广场时，你的呼吸会为之一滞。那感觉，就像在翻阅一本朴素的古籍时，突然抖落出一张用金箔和珐琅彩绘制的华丽书签。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你的目光会不由自主地被广场一侧那座建筑牢牢抓住——那就是国家之家。它不像哥特教堂那样直刺苍穹，也不像巴洛克宫殿那样炫耀权势。它以一种奇妙的、充满生命力的姿态“生长”在那里。乳白色的立面不再是冰冷的石头，而是像被春风拂过的水面，泛起柔和的涟漪与曲线。巨大的窗户上，铁艺花纹缠绕成葡萄藤与百合花的形状，在午后的阳光下，把变幻的光影投映在行人的身上。正门上方的马赛克壁画色彩依然鲜亮，讲述着斯拉夫的神话与历史的篇章。你甚至能闻到空气中有一丝旧书、抛光木头和淡淡油彩混合的气息，那是从建筑内部漫溢出来的、经年累月的文化馨香。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "对于普罗斯捷约夫人来说，国家之家绝非一个仅供参观的博物馆。你看，那位老先生正不紧不慢地踱步进去，他是去阅览室看今天的报纸；一群中学生兴奋地涌入门厅，他们学校的音乐会今晚将在主礼堂举行；傍晚时分，情侣们会相约在建筑侧面咖啡馆的露天座位。这座建筑完美地嵌入了城市的肌理与呼吸里，它是一颗依然强劲跳动的心脏。它的核心魅力，就在于这种“活着的华丽”。它没有在历史中凝固，而是持续不断地吸纳着当代的生活气息，让最先锋的艺术形式和最日常的市民生活，都在这些百年精美的浮雕与彩绘下和谐共处。在这里，美不是被供奉起来的，而是被使用、被聆听、被热爱的。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`普罗斯捷约夫`} />
                <InfoRow label="英文名称" value={`Prostějov`} />
                <InfoRow label="正式名称" value={`普罗斯捷约夫国家之家 (Národní dům v Prostějově)`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`普罗斯捷约夫 (位于摩拉维亚地区的奥洛穆茨州)`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`捷克摩拉维亚地区新艺术运动建筑无可争议的巅峰之作，是20世纪初捷克民族与文化复兴运动的物质象征与精神堡垒。`} />
                <InfoRow label="建筑特色" value={`将新艺术运动的有机曲线、华丽装饰与捷克民族象征元素完美融合，外部雕塑群叙事宏大，内部空间如流动的旋律，尤其是其令人屏息的玻璃与钢铁结构礼堂。`} />
                <InfoRow label="建筑风格" value={`以“捷克新艺术运动”或“青年风格”为主，并融入了维也纳分离派和早期现代主义的元素，具有鲜明的民族装饰特征。`} />
                <InfoRow label="文化价值" value={`不仅是一座建筑，更是一个活着的文化器官，百余年来持续作为剧院、音乐厅、展览馆和市民客厅，滋养着本地社区的文化认同与艺术生活。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`国家之家建筑外观可全天欣赏。内部参观（主要包括门厅、礼堂及部分公共区域）通常为周二至周日，上午10点至下午5点，周一闭馆。特定展览、音乐会或活动期间开放时间会延长。建筑内部导览团通常需提前在市政旅游局网站预约，夏季（5月至9月）频次较高，冬季可能仅周末开放。建议出行前务必查询普罗斯捷约夫市官方网站或文化中心的最新公告。`} />
              <InfoRow label="门票价格" value={`外部参观免费。内部基础参观门票约150捷克克朗（约合6欧元）。优惠票（学生、老人）约100捷克克朗。包含专业导游讲解的深度导览团价格约250捷克克朗。参加在此举办的音乐会、戏剧或展览需单独购票，价格视活动而定。6岁以下儿童免费。家庭套票常有优惠。`} />
              <InfoRow label="地址" value={`Národní dům, náměstí T. G. Masaryka 1, 796 01 Prostějov, Czechia`} />
              <InfoRow label="交通方式" value={`从布拉格出发：最方便的是乘坐火车。从布拉格 hlavní nádraží (中央火车站) 乘坐直达或经奥洛穆茨转车的列车前往普罗斯捷约夫火车站 (Prostějov hlavní nádraží)，车程约2.5至3小时，班次频繁。从布尔诺出发：火车或巴士均可，车程约1-1.5小时，火车班次更多。普罗斯捷约夫火车站步行至国家之家（位于市中心Masarykovo广场）约15-20分钟，沿途会经过老城区街道，是很好的预热。市内公共交通便利，但城市小巧，核心区步行即可轻松探索。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事要从19世纪末讲起。那时的普罗斯捷约夫是摩拉维亚重要的纺织工业中心，新兴的市民阶层和中产阶级口袋里有了钱，心中也燃起了文化的渴望。他们不再满足于模仿维也纳或布拉格，他们想要一个属于自己的、能彰显捷克民族身份与骄傲的文化殿堂。于是，“建造一座国家之家”的想法在城中酝酿，它不仅仅要是个剧院或礼堂，更要是捷克语言、音乐、戏剧和视觉艺术的圣殿，是对当时哈布斯堡王朝德意志化政策的一种温和而坚定的文化回应。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关键人物登场了——扬·科捷拉，一位当时还不到三十岁的年轻建筑师。他深受比利时和法国新艺术运动的影响，但骨子里流淌着斯拉夫的文化血脉。在激烈的设计竞赛中，他的方案脱颖而出。科捷拉的愿景是革命性的：他要打破建筑作为“盒子”的传统概念，让整座建筑像一件巨大的有机雕塑。他邀请了当时捷克最顶尖的艺术家联盟“马内斯”的成员们共同创作，雕塑家、画家、铁艺大师、玻璃工匠齐聚一堂。从1905年到1907年，这座建筑在争议与期待中拔地而起。有人说它太过花哨，不像“正经”建筑，但更多人被其澎湃的创造力征服。正立面那组名为“劳动与人文”的雕塑，由雕塑家卡雷尔·波尔卡创作，至今仍在讲述着人类从蒙昧走向启蒙的宏大叙事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，这座艺术的乌托邦很快经历了20世纪残酷历史的洗礼。两次世界大战的阴影掠过，幸运的是建筑本身在战火中得以幸存，但其承载的“民族复兴”理想却在复杂的政治变迁中不断被重新诠释。共产主义时期，它被更名为“文化之家”，继续履行着文化中心的职能，但一些原有的装饰被遮盖或忽视。就像一位穿着旧外套的贵族，内里的光华未曾真正熄灭，只是等待着被再次发现。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转机出现在天鹅绒革命之后。随着民主化进程，人们重新审视自身的历史与文化资产。国家之家被认定为国家级文化古迹，开始了漫长而精细的修复工程。专家们小心翼翼地将覆盖在壁画上的层层涂料剥离，让百年前的色彩重见天日；修复了精美绝伦的铁艺和玻璃；让那座标志性的、拥有绝佳声学效果的主礼堂恢复了昔日荣光。今天，当你走进其中，你看到的不再是一座静止的历史纪念碑，而是一幅历经风雨、被几代人精心守护并继续描绘的流动画卷。它从民族复兴的梦想中诞生，在历史的颠簸中存续，最终在当代人的珍视中重生，完成了它作为一个文化生命体的壮丽循环。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受国家之家的魅力，我建议你预留整整一天给普罗斯捷约夫。最好选择一个晴朗的周二到周六前往，这样可以确保有机会进入建筑内部。上午十点前抵达广场，这时阳光正好温柔地洒在建筑的西立面，适合外部细节的观察与拍照。先用一个多小时沉浸在建筑外部，从各个角度欣赏其雕塑和装饰。随后参加午后的官方导览团（务必提前预约），这是理解建筑灵魂的关键，耗时约1.5小时。导览结束后，可以在内部的咖啡馆小憩，感受氛围。傍晚时分，不妨在广场周边的传统餐馆享用一顿摩拉维亚晚餐，如果运气好，买一张当晚音乐会或戏剧的票，那将是体验的完美升华。这样的安排节奏张弛有度，由外而内，由表及里，从视觉震撼深入到文化肌理。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必提前在普罗斯捷约夫市官网或文化中心页面查询导览团时间并预约，现场很可能没有空位。
建筑内部许多区域（如舞台后方、部分办公区域）不对外开放，请遵循导览路线，不要擅自闯入。
穿着舒适的鞋子，因为内部参观包括楼梯，且老城区的石板路漫步是体验的一部分。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从火车站拖着行李箱漫步过来，故意绕过主干道，穿行在安静的居民区小巷，让这座小城的日常气息慢慢浸润你。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在Masarykovo广场的喷泉旁，第一次完整仰视国家之家那布满雕塑和曲线的正立面，让那种新旧艺术交织的震撼力击中你。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`凑近建筑外墙，仔细辨认那些浮雕的细节——肌肉贲张的劳动者、托举火炬的少女、缠绕的植物纹样，仿佛在阅读一部石头的史诗。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开那扇沉重的、饰有精美铁艺的大门，步入高阔的门厅，瞬间被内部温暖的光线、彩绘的天花板和空气中旧时光的味道所包围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟着导游走进主礼堂，抬头凝视那座令人惊叹的玻璃与钢铁结构的穹顶，想象一百多年前在这里首演德沃夏克歌剧的盛况。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着铺着红毯的弧形楼梯缓缓走上二楼回廊，从不同的高度和角度，捕捉光线透过彩色玻璃窗在墙面地板上流动的图案。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探访建筑侧翼常设的小型展览，了解扬·科捷拉的生平和其他新艺术运动作品，加深你对这座建筑杰作的理解。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分，坐在广场对面的咖啡馆外，点一杯比尔森啤酒，看着国家之家的立面在夕阳下染上金红色，华灯初上，感受它从历史地标变回城市夜生活温暖背景的魔法时刻。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`广场东南角全景位`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到日落时分，阳光为建筑勾勒出金色轮廓，利用广场上的行人和喷泉作为前景，可以拍出建筑融入城市生活的生动全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`正门铁艺与雕塑特写`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点至中午，阳光直射正门，能清晰展现铁艺大门上复杂植物纹样的细节和上方马赛克壁画的鲜艳色彩，对焦于局部能获得极具装饰感的画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`主礼堂仰拍穹顶`}</h4>
                  <p className="text-sm text-gray-700">{`参加导览进入礼堂后，务必寻找正中央的位置，将相机紧贴地面向上仰拍，可以完美捕捉那如同巨大透明水母或绽放花朵般的玻璃钢铁穹顶结构，对称构图极具冲击力。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`建筑侧面咖啡馆视角`}</h4>
                  <p className="text-sm text-gray-700">{`下午茶时间，在建筑侧面咖啡馆内找一个靠窗的位置，从内向外拍摄，将精美的室内木制窗框作为画框，捕捉广场上熙攘的人群和国家之家的局部立面，形成有趣的框景和内外互动。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`后花园连廊光影`}</h4>
                  <p className="text-sm text-gray-700">{`如果导览包含或允许进入建筑后方的小花园，留意那些带有弧形顶棚的连廊，在侧光强烈的下午，柱子会在墙面投下长长的、富有韵律感的阴影，是拍摄极简抽象风格照片的绝佳地点。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内摄影通常被允许，但严禁使用闪光灯和三脚架，以免干扰演出或损坏敏感的艺术品。`}</li>
                <li>• {`拍摄建筑外部时，不妨多关注细节：一个门把手、一盏路灯、一片瓷砖，都是新艺术运动精神的微观体现。`}</li>
                <li>• {`尊重当地人的隐私，避免将镜头直接对准在咖啡馆休息或广场上散步的居民的脸部。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济精选`}</h4>
                  <p className="text-sm text-blue-800">{`位于老城步行街一栋19世纪建筑里的温馨民宿，房间天花板很高，铺着老式镶木地板，房东奶奶会为你准备丰盛的自制摩拉维亚早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`由新艺术风格别墅改造的小型精品酒店，距离国家之家仅五分钟步程，室内装饰致敬了科捷拉的设计，仿佛住在艺术品中，后院还有一个安静的玫瑰花园。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在城市边缘宁静公园内的四星级历史酒店，由旧贵族官邸改建，拥有宽敞的复古套房和一流的水疗中心，提供接送服务，是探索后放松身心的完美绿洲。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`本地融合`}</h4>
                  <p className="text-sm text-purple-800">{`选择市中心公寓短租，自己从广场边的集市购买新鲜食材做饭，晚上像当地人一样拎着酒瓶去广场散步，沉浸在最地道的城市节奏里。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "旺季（夏季音乐节期间和圣诞集市期间）住宿紧俏，建议至少提前一个月预订。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "住在老城中心虽然方便，但周五、周六夜晚广场周边酒吧可能比较热闹，浅眠者可以选择内侧房间或稍远离广场的住宿。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "不妨将普罗斯捷约夫作为探索摩拉维亚地区（如奥洛穆茨、克罗梅日什）的基地，连住几晚，更能体会小城的深层韵味。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开普罗斯捷约夫许久之后，我脑海里反复回放的，不是某一张具体的照片，而是一种感觉。那是一种被“美”温柔包裹，并且知道这种美仍在蓬勃生长的踏实感。在这个世界上，有太多辉煌的遗迹让我们凭吊过去，有太多现代的奇观让我们惊叹未来，但像国家之家这样的地方，它罕见地串联起了时间的全部维度。它从历史的土壤中开花，其绚丽的姿态至今未曾凋谢，并且它的芬芳——那些音乐会、读书会、画展、甚至寻常的咖啡馆闲谈——依然在真实地滋养着今天的生活。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求效率、崇尚极简的快节奏时代，国家之家像一首绵长而华丽的复调音乐，提醒着我们生活可以有另一种密度和温度。它告诉我们，美可以不必高冷，不必被束之高阁；它可以是一扇每天被推开的门，一段每天被踩过的楼梯，一场每个市民都可参与的周末音乐会。它代表了一种捷克式的、或者说中欧式的生存智慧：在历史的夹缝中，始终精心守护着精神生活的火焰与民族文化的独特样貌。所以，如果你厌倦了走马观花的打卡，渴望一次真正能触动心灵、连接历史的深度旅行，请专程来普罗斯捷约夫看一看。它不会用喧嚣迎接你，但当你静下心来，与这座“活着的建筑”共度一日，你会带走一份关于“何为文化的生命力”的、宁静而坚定的答案。这，便是旅途中最珍贵的礼物。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/jihlava-historic-centre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    伊
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">伊赫拉瓦</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Jihlava</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/brno-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布尔诺老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Brno Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rozmberk-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    罗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">罗日姆贝尔克城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rožmberk Castle</p>
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
