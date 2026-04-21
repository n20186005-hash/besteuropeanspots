import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡马尔多利修道院 Camaldoli Monastery｜探访亚平宁山脉深处千年古树林中的本笃会静修圣地与古老药房 - 最佳欧洲景点',
  description: '当你把车停在森林边缘的碎石空地上，关掉引擎的那一刻，一种前所未有的寂静便包裹了你。那不是无声，而是声音被层层过滤后剩下的本质：远处溪流的潺潺、风过千年冷杉林顶的沙沙声、以及你自己骤然放慢的心跳。沿着一条被苔藓微微覆盖的石板小径步行几分钟，卡马尔多利修道院建筑群那朴素的石墙便出现在眼前。它没有佛罗伦萨',
}

export default function CamaldoliMonasteryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '卡马尔多利修道院', href: '/attractions/camaldoli-monastery' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卡马尔多利修道院・Camaldoli Monastery・意大利・波波利（靠近阿雷佐省）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你把车停在森林边缘的碎石空地上，关掉引擎的那一刻，一种前所未有的寂静便包裹了你。那不是无声，而是声音被层层过滤后剩下的本质：远处溪流的潺潺、风过千年冷杉林顶的沙沙声、以及你自己骤然放慢的心跳。沿着一条被苔藓微微覆盖的石板小径步行几分钟，卡马尔多利修道院建筑群那朴素的石墙便出现在眼前。它没有佛罗伦萨教堂那种扑面而来的华丽压迫感，而是像从山体中自然生长出来的一样，低调、沉稳，颜色是那种被雨水和岁月浸润后的灰褐色。
走近了，你会先闻到一种复杂的气味——清冷的山间空气里，混合着从古老药房方向飘来的、若有若无的干燥草药香，还有石墙缝隙里潮湿的泥土味，以及从修士生活区传来的、最质朴的木柴烟熏气息。推开教堂沉重的木门，光线骤然暗下来，眼睛需要几秒钟适应。然后你会发现，内部的光线并非来自炫目的彩色玻璃窗，而是从高侧窗透进来的、经过森林过滤的柔和天光，静静地洒在简朴的长椅和石地上。这里没有喧哗的游客，只有一两个当地老人默默坐在角落祈祷，或者一个远道而来的徒步者进来歇脚，喘气声都显得小心翼翼。修士们穿着白色的长袍，身影在回廊间安静地穿梭，脚步声轻得几乎听不见，他们是这里流动的寂静的一部分。
最打动人的，是这种无处不在的“秩序感与静谧”的共生。修道院的一侧，是修士们共同生活、祈祷、工作的“修道院”；而沿着另一条更陡峭、更隐秘的小径向上深入森林，则是隐士们独自居住的“隐修院”（Eremo），一个个宛如蜂巢般的小石屋散布其中，完全与世隔绝。你可以参观的公共区域，如教堂、回廊和那间著名的古老药房，就像是这个巨大精神世界向外界敞开的一扇小小窗户。透过它，你窥见的是一个选择了极端简朴、静默与内省的生活方式，它已经在这片森林里平稳运转了超过一千年。在这里，时间不是线性流逝的，而是循环的，随着日课钟声、随着季节更迭、随着一代又一代修士的呼吸而循环。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你把车停在森林边缘的碎石空地上，关掉引擎的那一刻，一种前所未有的寂静便包裹了你。那不是无声，而是声音被层层过滤后剩下的本质：远处溪流的潺潺、风过千年冷杉林顶的沙沙声、以及你自己骤然放慢的心跳。沿着一条被苔藓微微覆盖的石板小径步行几分钟，卡马尔多利修道院建筑群那朴素的石墙便出现在眼前。它没有佛罗伦萨教堂那种扑面而来的华丽压迫感，而是像从山体中自然生长出来的一样，低调、沉稳，颜色是那种被雨水和岁月浸润后的灰褐色。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，你会先闻到一种复杂的气味——清冷的山间空气里，混合着从古老药房方向飘来的、若有若无的干燥草药香，还有石墙缝隙里潮湿的泥土味，以及从修士生活区传来的、最质朴的木柴烟熏气息。推开教堂沉重的木门，光线骤然暗下来，眼睛需要几秒钟适应。然后你会发现，内部的光线并非来自炫目的彩色玻璃窗，而是从高侧窗透进来的、经过森林过滤的柔和天光，静静地洒在简朴的长椅和石地上。这里没有喧哗的游客，只有一两个当地老人默默坐在角落祈祷，或者一个远道而来的徒步者进来歇脚，喘气声都显得小心翼翼。修士们穿着白色的长袍，身影在回廊间安静地穿梭，脚步声轻得几乎听不见，他们是这里流动的寂静的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，是这种无处不在的“秩序感与静谧”的共生。修道院的一侧，是修士们共同生活、祈祷、工作的“修道院”；而沿着另一条更陡峭、更隐秘的小径向上深入森林，则是隐士们独自居住的“隐修院”（Eremo），一个个宛如蜂巢般的小石屋散布其中，完全与世隔绝。你可以参观的公共区域，如教堂、回廊和那间著名的古老药房，就像是这个巨大精神世界向外界敞开的一扇小小窗户。透过它，你窥见的是一个选择了极端简朴、静默与内省的生活方式，它已经在这片森林里平稳运转了超过一千年。在这里，时间不是线性流逝的，而是循环的，随着日课钟声、随着季节更迭、随着一代又一代修士的呼吸而循环。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卡马尔多利修道院`} />
                <InfoRow label="英文名称" value={`Camaldoli Monastery`} />
                <InfoRow label="正式名称" value={`Camaldoli Monastery`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`波波利（靠近阿雷佐省）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`由圣罗穆阿尔多于1012年创立，是欧洲最古老、最严格的本笃会隐修制度之一——卡马尔多利会的母院和灵魂所在。`} />
                <InfoRow label="建筑特色" value={`一座质朴而庄严的石砌建筑群，完美融入冷杉与山毛榉的古老森林，包含供修士团体生活的修道院与供隐士独居的隐修小屋（“Eremo”）两大截然不同却又精神相连的部分。`} />
                <InfoRow label="建筑风格" value={`以简约、厚重的罗马式风格为基底，历经多次扩建与修葺，融合了后期哥特式与文艺复兴式的朴素装饰，整体呈现出一种摒弃浮华、返璞归真的精神性建筑语言。`} />
                <InfoRow label="文化价值" value={`它不仅是一座宗教建筑，更是一个持续运转了千年的自给自足的精神社区，其古老的药房传统、手抄本文化以及对周边浩瀚森林的千年守护，体现了人与自然、灵性与实践完美结合的活态文化遗产。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`修道院建筑群及教堂的开放时间因季节和宗教活动而异，通常为每日上午9:30至12:30，下午14:30至17:30（冬季下午闭馆时间会提前至16:30）。古老药房（Antica Farmacia）的开放时间稍短，建议提前查询。请注意，修道院在主要宗教节日（如圣诞节、复活节）及每周日早晨的弥撒时间可能不对游客开放，部分隐修士生活的核心区域永不对外开放。`} />
              <InfoRow label="门票价格" value={`进入修道院教堂及主要公共区域免费，遵循捐赠传统。参观古老药房或参加由修士带领的特定导览（如草药园讲解）可能需要支付少量费用（通常5-8欧元），用于维护修道院遗产。没有严格的票务系统，一切随缘且宁静。`} />
              <InfoRow label="地址" value={`Località Camaldoli, 1, 52010 Poppi AR, Italy`} />
              <InfoRow label="交通方式" value={`卡马尔多利深藏在托斯卡纳东部的亚平宁山脉中，抵达本身就是一场朝圣。最近的主要交通枢纽是佛罗伦萨或阿雷佐。从佛罗伦萨 Santa Maria Novella 火车站出发，乘坐区间火车约1小时到达阿雷佐（Arezzo）。在阿雷佐火车站前的公交站，换乘LAZZI公司前往波波利（Poppi）的巴士（班次稀疏，一天约3-4班，车程约1.5小时）。在波波利小镇，你需要再换乘极少量前往“Camaldoli”的本地巴士或提前预订出租车（车程约20分钟上山）。最灵活的方式无疑是自驾，从佛罗伦萨出发沿SR70公路向东，转入蜿蜒的山路SR310，沿途标志清晰指向“Eremo di Camaldoli”，山路狭窄多弯，请小心驾驶，总车程约2小时。请务必提前查好所有巴士时刻表，山区交通遵循自己的“慢节奏”。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从一位名叫罗穆阿尔多的贵族青年说起。大约在公元1012年，这位出身拉文纳贵族家庭的年轻人，在经历了一系列家庭悲剧和个人灵性危机后，决心彻底抛弃世俗财富与荣耀，追寻一种极致的隐修生活。他并非要创立什么新教派，只是单纯地想找到一处最荒凉、最远离人烟的地方，好能完全沉浸在与上帝的对话中。他一路向南，最终走进了托斯卡纳与艾米利亚-罗马涅交界的这片蛮荒而美丽的亚平宁山脉森林。据说，当他看到这片被高大冷杉覆盖的寂静山谷时，他确信自己找到了“理想之地”（Campus Maldoli，后人认为地名即来源于此）。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最初，这里只有罗穆阿尔多和他最初的几位追随者。他们并没有规划宏大的建筑，而是先搭建起最简陋的木屋或寻找天然洞穴栖身。他们的规则异常严苛：绝对的静默、深度的独处、繁重的手工劳动（尤其是抄写经文）以及长时间的祈祷。这种结合了本笃会团体生活传统与东方沙漠教父极端隐修精神的模式，逐渐成型，后来被称为“卡马尔多利会”。有趣的是，罗穆阿尔多本人后来因为名声太大、拜访者太多，觉得干扰了宁静，反而离开了这里，去寻找更隐秘的居所。但他种下的种子已经发芽。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`随后的几个世纪，这个社区在动荡中缓慢成长。最初的木结构被更永久的石屋和一座小教堂取代。森林不仅是屏障，也成了生存的依托。修士们学会了辨识和使用山间的数百种草药，逐渐发展出了一套独特的药学知识。到了中世纪鼎盛时期，这里的药房已经闻名遐迩，成为托斯卡纳地区重要的医疗和学术中心之一，甚至为美第奇家族提供服务。修士们抄写的精美手稿和绘制的植物图谱，也成为珍贵的文化遗产。然而，历史的风暴并未绕过这片净土。它曾多次在地方领主间的冲突中受损，也经历过修士数量锐减的萧条时期。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`文艺复兴时期，修道院得到了一些富有赞助人的支持，进行了扩建和美化，但你今天看到的依然不是富丽堂皇的宫殿，而是那种带着人文主义气息的、克制的优雅。最严峻的考验发生在19世纪。拿破仑的军队横扫欧洲，大量修道院被查封、财产被充公。卡马尔多利也未能幸免，修士们被驱逐，建筑被遗弃，药房关闭，森林也面临被砍伐的命运。那几十年，是它千年历史上最长的一段“沉默期”。直到19世纪末20世纪初，一批新的修士重返故地，开始了艰难的修复与重建。他们恢复的不仅是建筑，更是那种与世无争的生活节奏和精神传承。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天，你漫步于此，指尖触摸的每一块石头，呼吸的每一缕混合着草药香的空气，都承载着这千年的循环：创建与遗弃，繁荣与沉寂，永恒的静默追求与外部世界的不断变迁。它不是一个博物馆里的化石，而是一条依然流动着的、极其缓慢的生命之河。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天时间沉浸于此。最好在清晨（9点左右）抵达，这时森林晨雾未完全散去，光线柔和，游客极少，最能体会其静谧本质。整体游览节奏应极度缓慢，分为三大阶段：首先花2-3小时深度探索修道院核心公共区域（教堂、回廊、药房、小型博物馆），用心感受建筑与氛围；随后，用1-2小时进行一场必不可少的森林徒步，沿着标志清晰的小径走向隐修院（Eremo）外围（注意隐士居住区严禁进入），在自然中消化之前的文化冲击；最后，在下午返回修道院区域，或许在允许的地方静坐片刻，或再次流连药房，结束行程。这样的安排让你由外至内，再由内至外，完成一次身体与精神的双重漫步。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`绝对尊重静默区域，尤其是隐修院（Eremo）附近，有明确的标牌禁止游客进入和喧哗，请务必遵守。穿着务必端庄得体，进入教堂时避免露肩和短裤短裙。山区天气多变，即使是夏天也请带一件外套，并穿上舒适防滑的徒步鞋。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在森林入口的指定区域，深吸一口清冽并带着松针和冷杉香气的空气，沿着那条被高大树木荫蔽的宁静石板小径步行前往修道院建筑群。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先步入简朴而庄严的圣袍教堂，让你的眼睛适应内部幽暗的光线，静静坐在后排长椅上聆听自己的呼吸与远处依稀可辨的诵经声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过教堂侧门进入静谧的回廊，慢慢行走，观察拱廊下那些磨损的石柱和偶尔出现的朴素壁画，感受时间在这里沉淀下的平和节奏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要拜访那间传说中的古老药房，看满墙陈列着数百个绘有精美图案的陶瓷药罐，想象几个世纪以来修士们在此研磨草药、配制药剂的情景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在修士们经营的简朴小商店停留片刻，这里出售他们自产的蜂蜜、草药茶、香膏和宗教物品，是支持修道院生活的善意之举。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从修道院后方寻找到通往森林深处隐修院（Eremo）的小径起点，开始一段轻松的徒步，沉浸于被千年古树包围的宁静之中。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着小径走到指定的观景点，远远眺望那些散落在山坡上、供隐士独居的白色小石屋，理解这种与世隔绝的静默生活方式。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`徒步归来后，若时机合适，可以去修道院的招待所（Foresteria）附设的简单餐厅，品尝一顿由修士们准备的、取材于山间的质朴午餐（需提前询问或预订）。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`修道院正面全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在入口石板小径的开阔处，用广角镜头将朴素的石砌建筑立面与它背后层叠的深绿色冷杉林一同纳入画框，捕捉建筑与自然的天成合一。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`回廊拱门与光影`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个阳光明媚的上午，站在回廊的一角，等待阳光将拱廊的几何投影清晰地打在对面古老的石墙上，形成极富韵律感的光影构图，可以等待一位白衣修士安静走过作为点睛之笔。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`古老药房内部细节`}</h4>
                  <p className="text-sm text-gray-700">{`将相机感光度调高，在不使用闪光灯（通常严禁使用）的前提下，近距离拍摄那些彩绘陶瓷药罐的特写，罐子上描绘的植物图案与沧桑的木架背景讲述着古老的故事。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`森林小径仰视视角`}</h4>
                  <p className="text-sm text-gray-700">{`在通往隐修院的森林徒步途中，找一处古树参天、枝干交错的地方，抬头仰拍，让阳光从树叶缝隙中洒下道道耶稣光，表现这片神圣森林的幽深与灵性。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内拍摄，尤其是教堂和药房内，务必确认是否允许拍照，且永远禁用闪光灯和三脚架，以免打扰祈祷者和破坏宁静氛围。拍摄修士或隐修者时必须保持极大距离，并最好事先用眼神征得默许，尊重他们是这里的主人而非景观。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`修道院招待所（Foresteria）`}</h4>
                  <p className="text-sm text-blue-800">{`体验真正修道院简朴待客之道的唯一机会，房间干净至极，除床、桌、十字架外几乎无他物，夜晚的寂静震耳欲聋，包含简单的晨祷与素食餐食，需提前很久写信或电话预订。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`波波利（Poppi）古镇家庭旅馆`}</h4>
                  <p className="text-sm text-green-800">{`住在山脚下美丽的中世纪古镇波波利，选择一家由古老石屋改造的家庭旅馆，早晨在阳台上就能眺望笼罩在雾气中的远山，品尝女主人自制的果酱，性价比极高。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`卡斯泰尔弗兰科（Castelfranco）农家民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`位于更深的山谷中，由世代经营的农庄改造，提供真正的托斯卡纳农家风味晚餐，夜晚没有任何光污染，星空璀璨，适合自驾且追求静谧乡村体验的旅行者。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`阿雷佐（Arezzo）古城精品酒店`}</h4>
                  <p className="text-sm text-purple-800">{`如果希望有更丰富的夜生活与餐饮选择，可以住在历史名城阿雷佐，这里酒店选择多，品质上乘，白天开车上山拜访修道院，晚上回到古城享受舒适的现代设施与美食。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`预订修道院招待所是对其生活方式最深的致敬，但需适应其严格的作息（如晚间关门）和极简设施。山区民宿普遍暖和设施可能较基础，但主人热情好客。无论住在哪里，晚上驾车返回时务必注意蜿蜒漆黑的山路安全。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开卡马尔多利很久之后，那片森林的寂静似乎还在耳中回响。它带来的触动，并非那种看到绝世艺术品的剧烈震撼，而更像一滴清澈冰凉的水，慢慢渗入心里燥热的裂缝。在这个被信息轰炸、被日程驱赶的时代，我们习惯了“获取”和“体验”，但在这里，你学会的或许是“放下”和“存在”。仅仅是坐在回廊里，什么也不做，看着光影移动，听着遥远模糊的钟声，就完成了一次深刻的心灵疗愈。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这个地方之所以必须列入一生必去的清单，不是因为它有多宏伟或多稀有，而是因为它提供了一个绝无仅有的参照系。它像一个千年不变的锚点，让你看到，人类文明除了我们熟知的喧嚣、扩张与消费这条主线外，还有另外一条平行且持续了更久的精神线索：那就是内向的探索、极致的简朴、与自然的共生以及对静默力量的坚守。拜访卡马尔多利，就像是一次短暂的“出离”，一次深度的呼吸。它不会给你答案，但会给你一片能照见自己内心的、平静的湖水。当你重新驶入蜿蜒的山路，回到那个热闹纷繁的世界时，你会感觉内心被悄悄地清理过，多了一份难以言喻的澄明与安宁。这，或许就是一趟真正朝圣之旅的意义。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/ragusa-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉古萨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ragusa</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lecce-baroque-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莱
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莱切巴洛克老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lecce</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cagliari-castello" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡利亚里城堡区</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cagliari (Castello)</p>
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
