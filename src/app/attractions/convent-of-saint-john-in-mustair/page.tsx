import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '米施泰尔圣约翰修道院 Convent of Saint John in Müstair｜深藏阿尔卑斯山谷的加洛林王朝艺术宝库 - 最佳欧洲景点',
  description: '当你终于驱车穿过漫长的隧道，将喧嚣彻底抛在脑后，米施泰尔山谷便如一块被精心隐藏的翡翠，豁然展现在眼前。空气瞬间变得清冽纯净，带着高山草甸与松木的冷香。你的第一眼可能不会感到震撼——远处山脚下，一片由浅黄色石墙和深灰色石板屋顶组成的建筑群，安静地匍匐着，那座罗马式的钟塔甚至有些敦实，与想象中尖耸入云的',
}

export default function ConventOfSaintJohnInMustairPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '瑞士', href: '/destinations/switzerland' },
            { label: '米施泰尔（格劳宾登州）', href: '/destinations/switzerland' },
            { label: '米施泰尔圣约翰修道院', href: '/attractions/convent-of-saint-john-in-mustair' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`米施泰尔圣约翰修道院・Convent of Saint John in Müstair・瑞士・米施泰尔（格劳宾登州）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你终于驱车穿过漫长的隧道，将喧嚣彻底抛在脑后，米施泰尔山谷便如一块被精心隐藏的翡翠，豁然展现在眼前。空气瞬间变得清冽纯净，带着高山草甸与松木的冷香。你的第一眼可能不会感到震撼——远处山脚下，一片由浅黄色石墙和深灰色石板屋顶组成的建筑群，安静地匍匐着，那座罗马式的钟塔甚至有些敦实，与想象中尖耸入云的哥特式大相径庭。它不像景点，更像一个仍在深深呼吸的古老村落。你听到的声音是溪流潺潺、牛铃叮当，以及风中隐约传来的、不知是教堂还是学校传来的轻柔人声。这里的时间流速，似乎与山外的世界截然不同。
沿着小路走近，修道院外墙的岁月痕迹愈发清晰。石块的接缝里长着青苔，木门厚重。推开那扇并不起眼的侧门，走进圣约翰教堂内部的一刹那，世界陡然切换。昏暗的光线从高处的小窗渗入，空气中弥漫着古老的石头、木头和一丝若有若无的蜡油气味。然后，你的眼睛逐渐适应黑暗——色彩，无与伦比的、穿越了一千两百多年的色彩，从四面八方将你包裹。整个教堂的墙壁和半圆形后殿，被巨幅的圣经故事壁画覆盖。金黄、赭石、朱红、靛蓝……虽然历经时光剥蚀，有些画面已不完整，但那份原始的、充满叙事力量的美，如同一声来自公元9世纪的低沉钟鸣，直接撞击在你的心灵上。你会发现，这不是一座死去的博物馆，祭坛上摆放着新鲜的花，长椅上有祈祷的痕迹。修女们可能正安静地从你身边走过，去进行下一次祷告。
这就是米施泰尔最打动人心的核心魅力：极致的“反差”与“延续”。外在是阿尔卑斯山村落的极致朴素与宁静，内在却是欧洲艺术史上惊为天人的华丽宝藏。而更可贵的是，从公元775年奠基之日起，这里的祈祷之声几乎从未间断。它不是一个被玻璃罩起来的标本，而是一个依然跳动着信仰与社区生命力的活态文化遗产。你在这里感受到的，不仅是艺术，更是时间本身的力量——一种缓慢、坚韧、穿透所有时代变迁的恒定感。站在壁画下，你会觉得，自己正站在一条从未断流的历史长河的岸边。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你终于驱车穿过漫长的隧道，将喧嚣彻底抛在脑后，米施泰尔山谷便如一块被精心隐藏的翡翠，豁然展现在眼前。空气瞬间变得清冽纯净，带着高山草甸与松木的冷香。你的第一眼可能不会感到震撼——远处山脚下，一片由浅黄色石墙和深灰色石板屋顶组成的建筑群，安静地匍匐着，那座罗马式的钟塔甚至有些敦实，与想象中尖耸入云的哥特式大相径庭。它不像景点，更像一个仍在深深呼吸的古老村落。你听到的声音是溪流潺潺、牛铃叮当，以及风中隐约传来的、不知是教堂还是学校传来的轻柔人声。这里的时间流速，似乎与山外的世界截然不同。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`沿着小路走近，修道院外墙的岁月痕迹愈发清晰。石块的接缝里长着青苔，木门厚重。推开那扇并不起眼的侧门，走进圣约翰教堂内部的一刹那，世界陡然切换。昏暗的光线从高处的小窗渗入，空气中弥漫着古老的石头、木头和一丝若有若无的蜡油气味。然后，你的眼睛逐渐适应黑暗——色彩，无与伦比的、穿越了一千两百多年的色彩，从四面八方将你包裹。整个教堂的墙壁和半圆形后殿，被巨幅的圣经故事壁画覆盖。金黄、赭石、朱红、靛蓝……虽然历经时光剥蚀，有些画面已不完整，但那份原始的、充满叙事力量的美，如同一声来自公元9世纪的低沉钟鸣，直接撞击在你的心灵上。你会发现，这不是一座死去的博物馆，祭坛上摆放着新鲜的花，长椅上有祈祷的痕迹。修女们可能正安静地从你身边走过，去进行下一次祷告。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这就是米施泰尔最打动人心的核心魅力：极致的“反差”与“延续”。外在是阿尔卑斯山村落的极致朴素与宁静，内在却是欧洲艺术史上惊为天人的华丽宝藏。而更可贵的是，从公元775年奠基之日起，这里的祈祷之声几乎从未间断。它不是一个被玻璃罩起来的标本，而是一个依然跳动着信仰与社区生命力的活态文化遗产。你在这里感受到的，不仅是艺术，更是时间本身的力量——一种缓慢、坚韧、穿透所有时代变迁的恒定感。站在壁画下，你会觉得，自己正站在一条从未断流的历史长河的岸边。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`米施泰尔圣约翰修道院`} />
                <InfoRow label="英文名称" value={`Convent of Saint John in Müstair`} />
                <InfoRow label="正式名称" value={`Convent of Saint John in Müstair`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`米施泰尔（格劳宾登州）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`欧洲现存最完整、壁画保存最完好的加洛林王朝时期修道院建筑群，是连接古典时代与中世纪欧洲基督教文明的核心枢纽。`} />
                <InfoRow label="建筑特色" value={`一座看似质朴的塔楼与教堂建筑群，其内部却隐藏着欧洲最大、最古老的早期中世纪壁画群，时间仿佛在此凝固。`} />
                <InfoRow label="建筑风格" value={`以加洛林王朝时期建筑为基础，后续融入了罗马式、哥特式乃至巴洛克式的增建与修饰，形成一部“活”的建筑史书。`} />
                <InfoRow label="文化价值" value={`其壁画是理解欧洲基督教图像学、加洛林文艺复兴以及阿尔卑斯山地区文化交融的独一无二的钥匙。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`修道院教堂全年每日白天开放，供游客免费进入祈祷。附设的博物馆及进入特定壁画区域（如唱诗班席）的导览参观则有固定开放时间，通常为每年五月至十月的周二至周日，上午9:00至下午5:00。冬季（十一月至次年四月）开放时间大幅缩短，通常仅在周四至周六下午开放，且进入需完全依赖预约导览。由于地处偏远且开放政策可能因修道院活动临时调整，出发前务必在其官方网站或通过电话再三确认。`} />
              <InfoRow label="门票价格" value={`进入修道院教堂主体免费。参观博物馆及核心壁画区的导览门票约为12瑞士法郎。优惠票价（学生、老年人等）约为10瑞士法郎。家庭票和团体票有相应折扣。提供包含导览和博物馆的套票。门票收入全部用于支持这座仍在运作的女修道院的日常维护与文物保护工作。`} />
              <InfoRow label="地址" value={`Kloster St. Johann, 7537 Müstair, Switzerland`} />
              <InfoRow label="交通方式" value={`前往米施泰尔本身就是一场探险。最近的国际机场在意大利的米兰（约3.5小时车程）或瑞士的苏黎世（约4小时车程）。最经典的路线是从瑞士库尔（Chur）或意大利的博尔米奥（Bormio）乘坐邮政巴士。从库尔出发，巴士蜿蜒穿越令人屏息的上恩嘎丁山谷，最终驶入米施泰尔山谷，全程约2.5小时，班次有限，一天仅几班，务必提前在SBB（瑞士联邦铁路）官网查好时刻表并预留充足时间。自驾是最灵活的方式，从库尔或圣莫里茨方向驶来，需要穿越海拔2000多米的福尔克拉山口（Ofenpass Pass），沿途风光壮丽，但冬季山口经常关闭，需绕行意大利。请记住，这里是与世隔绝的山谷，公共交通班次稀疏，精确规划是旅途顺利的关键。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`关于这座修道院的起源，笼罩在神圣的传说之中。流传最广的故事与查理曼大帝，也就是查理大帝有关。据说在公元775年左右，查理曼大帝在一次翻越阿尔卑斯山的艰险旅程中，他所骑乘的马匹在此处突然跪地不前。大帝将此视为神迹，发誓若能在与敌人的战斗中幸存，便在此地兴建一座修道院。他最终得胜归来，诺言便化作了这座献给施洗者圣约翰的修道院。虽然史料无法完全证实查理曼亲临，但考古确凿无疑地表明，修道院的奠基正在他统治的鼎盛时期——加洛林王朝。它被战略性地设立在一条重要的阿尔卑斯山隘口旁，既是灵魂的庇护所，也是帝国边境的政治与宗教前哨。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在最初的几个世纪里，修道院欣欣向荣。大约在公元800年，也就是查理曼在罗马加冕为“罗马人的皇帝”前后，那些我们今天看到的、震撼人心的壁画被绘制上墙。这并非偶然，它是“加洛林文艺复兴”这一伟大文化运动的直接产物。当时的统治者希望复兴罗马帝国的荣光与秩序，而统一的基督教信仰和艺术是其重要工具。米施泰尔的壁画师们，或许来自意大利或拜占庭，他们将古典艺术的造型技巧与北方民族的叙事热情结合起来，创作出这些线条有力、色彩鲜明、旨在向不识字的信徒讲述圣经故事的作品。它们不是装饰，是那个时代的“神圣漫画”与“信仰教科书”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，阿尔卑斯山的边境从不平静。修道院在随后的千年里，命运随着战争的号角起伏跌宕。它先后受到德意志帝国、当地主教乃至附近领主的控制。为了防御，那座敦实的钟楼被加高，成为瞭望塔和避难所，墙上甚至开出了箭孔。教堂本身也在不断被修改、增建，罗马式的拱门、哥特式的窗户层层叠加。1499年，瑞士同盟与神圣罗马帝国之间的斯瓦比亚战争在这里留下火与剑的伤疤。最严重的危机在16世纪宗教改革时期来临，新教浪潮席卷瑞士大部分地区，这座天主教修道院一度面临被解散的威胁，但它奇迹般地在这片偏远的山谷中存续下来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的“再发现”要到20世纪。19世纪末，学者们开始关注这些被后世石灰涂层覆盖的古老壁画。系统性的修复与研究在20世纪中期大规模展开。当一层层后世的覆盖物被小心翼翼剥离，加洛林时期的艺术瑰宝重见天日，震惊了世界。人们发现，这里保存的壁画面积和完整性，在整个欧洲都无出其右。正是由于其无与伦比的历史与艺术价值，以及“活态修道院”的独特身份，米施泰尔圣约翰修道院在1983年被联合国教科文组织列入世界文化遗产名录。今天的修复与研究工作仍在继续，由专业的基金会与居住在其中的本笃会修女们共同守护，让这部石头的史诗，继续向未来的每一个清晨诉说。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天给米施泰尔。最佳抵达时间是上午十点前，此时游客最少，山谷晨光柔和。整体游览节奏应极其缓慢，核心是“沉浸”而非“打卡”。先在外围感受山谷气场，再进入内部进行深度艺术与历史探索，最后在宁静中消化吸收。理想动线是：上午专心参加导览，深入理解壁画与历史；中午在朴素的环境中用餐；下午自由漫步，感受修道院社区与自然环境的融合。请务必预留巴士等待或山路驾驶的缓冲时间，这里的节奏由大山决定。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必提前在官网查询并预订导览团（尤其是非旺季），这是理解壁画精髓的唯一途径，现场很可能没有空位。穿着绝对要庄重得体，这是仍在使用的宗教场所，短裤、无袖上衣可能被禁止入内。保持最大程度的安静，任何喧哗都是对信仰与历史的双重冒犯。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在村口徒步走进村中心，让阿尔卑斯山清冷的空气和溪流声洗去旅途的浮躁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在修道院入口处的小庭院稍作停留，观察那些日常生活中的修女或学校孩子们，感受活态遗产的生命力。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`务必参加一场博物馆组织的导览，在专业讲解员手电的光束指引下，读懂壁画上每一个查理曼时代的故事与符号。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`导览结束后，再次独自进入教堂，静静地坐在长椅上，让目光随意漫游在巨大的壁画上，寻找之前未曾注意的细节。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观完主教堂，去隔壁的修道院博物馆，看看从遗址中出土的珍贵器物，将壁画上的二维世界与三维的历史实物联系起来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`爬上那座兼具防御功能的罗马式钟楼（如果开放），从高处俯瞰整个修道院建筑群的布局与米施泰尔山谷的全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间允许，沿着修道院后面的小径散步，从另一个角度回望这座建筑，看它如何与背后的山峦融为一体。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`教堂后殿外部仰角`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，阳光会给半圆形的后殿外墙打上温暖侧光，用广角镜头从低处仰拍，将坚实的石墙与背后巍峨的山峰一同纳入画面，表现其扎根于大地的力量。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`中殿壁画光影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个晴朗的上午，当阳光从南侧高窗斜射入教堂中殿时，站在光线与壁画的交界处，捕捉光影在千年人物线条上流动的瞬间，注意关闭闪光灯。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从村庄道路远眺修道院`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，走到村庄另一头的草地上，将整个修道院建筑群、钟楼以及背景的层叠山峦一同拍摄，前景可以带入一些野花或木栅栏，营造遗世独立的氛围。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`博物馆内的细节特写`}</h4>
                  <p className="text-sm text-gray-700">{`在博物馆灯光下，可以近距离拍摄一些壁画碎片或出土文物的精致细节，如陶器纹理、金属工艺，讲述修复与发现的故事。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`教堂内部严格禁止使用闪光灯和三脚架（除非有特殊许可），持续的强光会不可逆转地损害脆弱的千年颜料。最好的方式是使用高感光度性能好的相机或手机，依靠自然光，并保持相机稳定。拍摄修女或当地居民前，请务必先微笑并征得对方明确同意。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`直接入住修道院经营的客房“Casa Chaplutta”，房间简朴洁净，夜晚能听到修道院的钟声，清晨与修女们共享同一片宁静。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`温馨家庭旅馆`}</h4>
                  <p className="text-sm text-green-800">{`选择村里世代经营的“Hotel Chasa Cresta”，由家庭热情打理，餐厅供应地道格劳宾登州家常菜，能体验到最真实的山谷待客之道。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端山居体验`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车半小时到邻近更大的村庄瓦尔·米施泰尔（Val Müstair），入住设计精美的山林小屋酒店，享受水疗与全景露台，将一天的沉思融化在星空下的温暖浴池中。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`米施泰尔村的住宿选择极其有限，且非常抢手，尤其是旅游旺季（夏季和秋季），必须提前数月预订。山谷夜晚极为安静黑暗，是观星的绝佳地点，但几乎没有任何夜生活。治安极好，但需适应与世隔绝的乡村作息。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开米施泰尔许久后，那片山谷的宁静感，和壁画上圣徒凝视的目光，依然会时常浮现在脑海里。在这个追求效率、热衷爆点的时代，这个地方提供了一种截然相反的旅行价值：它要求你付出一些抵达的艰辛，回报你的却不是瞬间的感官刺激，而是一种缓慢的、浸润身心的历史重量。它教会我们，真正的珍宝往往不在聚光灯下，而在需要侧耳倾听的寂静深处。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这不仅仅是一座修道院，它是一个关于“坚守”的寓言。它坚守在偏远的边境，坚守着古老的信仰仪式，更坚守着人类用艺术表达神圣的最初冲动。当我们被碎片信息冲刷得焦虑不安时，来到这里，面对这些存活了1200多年的色彩和线条，仿佛能触摸到时间本身那宽广而深厚的河床。它提醒每一位深度旅人，旅行的意义，有时不在于收集多少地标，而在于找到这样一个能让内心节奏慢下来、与更宏大的人类故事对话的角落。米施泰尔圣约翰修道院，正是这样一个值得你穿越山海、专门前去赴约的，沉默而辉煌的角落。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/murten-medieval-ramparts" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    穆
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">穆尔滕环湖古城墙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Murten (Morat) City Walls</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/guarda-engadin" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    瓜
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">瓜尔达（恩嘎丁山谷的苏斯罗曼什语刮画村）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Guarda</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tarasp-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塔拉斯普城堡（恩嘎丁山谷的守护者）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tarasp Castle</p>
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
