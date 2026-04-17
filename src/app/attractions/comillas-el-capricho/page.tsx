import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科米利亚斯 Comillas | 在北西班牙童话小镇，邂逅高迪的向日葵奇境 - 最佳欧洲景点',
  description: '第一眼看到科米利亚斯，你会以为自己不小心闯进了一本童话书的插页。这里没有大城市的喧嚣，只有坎塔布里亚的海风，带着咸湿和自由的气息，穿过陡峭的、铺着发光石板的小巷。阳光洒在彩色的房屋立面上，空气里混合着海鲜饭的香味、咖啡的醇厚，以及从比斯开湾吹来的、那股永不疲倦的活力。当地人慢悠悠地生活着，在广场上聊...',
}

export default function ComillasElCaprichoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '科米利亚斯', href: '/attractions/comillas-el-capricho' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`科米利亚斯・Comillas・西班牙・科米利亚斯`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到科米利亚斯，你会以为自己不小心闯进了一本童话书的插页。这里没有大城市的喧嚣，只有坎塔布里亚的海风，带着咸湿和自由的气息，穿过陡峭的、铺着发光石板的小巷。阳光洒在彩色的房屋立面上，空气里混合着海鲜饭的香味、咖啡的醇厚，以及从比斯开湾吹来的、那股永不疲倦的活力。当地人慢悠悠地生活着，在广场上聊天，在岩石海岸边钓鱼，仿佛那些镶嵌在小镇各处的、风格奇诡壮丽的宫殿和别墅，只是他们日常生活中再自然不过的邻居。
而其中最耀眼的邻居，莫过于藏在镇边绿荫中的那座“奇想屋”。它不是高迪最著名的作品，却可能是他最快乐、最恣意的一次挥洒。远远望去，它不像建筑，倒像一株巨大的、正在绽放的植物。翠绿色的釉面砖波浪般起伏，那是青草的顏色；褐色的陶土装饰缠绕而上，那是土地的肌理；最妙的是那一圈明黄色的向日葵瓷砖，绕着塔楼灿烂地开着，仿佛永远在追逐太阳。你走近了，会听到风穿过其精致铸铁阳台发出的细微呜鸣，像某种古老的乐器。触摸外墙，瓷砖的冰凉和阳光下铁艺的温热形成奇妙的对比。
这座小镇的神奇之处在于，高迪的杰作并非孤例。就在不远处的山丘上，矗立着森特利奥伯爵委托建造的索布雷拉诺宫，宏伟的新哥特式风格带着阴郁的浪漫；镇公所大楼则有着穆德哈尔风格的砖砌图案，优雅而别致。它们散落在普通的民居、小酒馆和面包房之间，构成了极其超现实的画面：你刚从一个布满海胆壳和渔网的小港口转身，抬头就望见一座仿佛属于吸血鬼伯爵的尖塔城堡。这种日常与奇幻的无缝交织，正是科米利亚斯最打动人心的魔力。
在这里，艺术不是被供奉在博物馆里的神圣之物，而是呼吸、生长在街道巷弄和生活缝隙里的活物。你会发现，这座小镇最核心的魅力，并非仅仅来自某一位天才建筑师，而是来自那个特定时代里，财富、乡愁与艺术野心一次罕见的、慷慨的合谋，最终在这个面朝大西洋的岬角上，凝固成了一曲永不落幕的视觉交响诗。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到科米利亚斯，你会以为自己不小心闯进了一本童话书的插页。这里没有大城市的喧嚣，只有坎塔布里亚的海风，带着咸湿和自由的气息，穿过陡峭的、铺着发光石板的小巷。阳光洒在彩色的房屋立面上，空气里混合着海鲜饭的香味、咖啡的醇厚，以及从比斯开湾吹来的、那股永不疲倦的活力。当地人慢悠悠地生活着，在广场上聊天，在岩石海岸边钓鱼，仿佛那些镶嵌在小镇各处的、风格奇诡壮丽的宫殿和别墅，只是他们日常生活中再自然不过的邻居。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而其中最耀眼的邻居，莫过于藏在镇边绿荫中的那座“奇想屋”。它不是高迪最著名的作品，却可能是他最快乐、最恣意的一次挥洒。远远望去，它不像建筑，倒像一株巨大的、正在绽放的植物。翠绿色的釉面砖波浪般起伏，那是青草的顏色；褐色的陶土装饰缠绕而上，那是土地的肌理；最妙的是那一圈明黄色的向日葵瓷砖，绕着塔楼灿烂地开着，仿佛永远在追逐太阳。你走近了，会听到风穿过其精致铸铁阳台发出的细微呜鸣，像某种古老的乐器。触摸外墙，瓷砖的冰凉和阳光下铁艺的温热形成奇妙的对比。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座小镇的神奇之处在于，高迪的杰作并非孤例。就在不远处的山丘上，矗立着森特利奥伯爵委托建造的索布雷拉诺宫，宏伟的新哥特式风格带着阴郁的浪漫；镇公所大楼则有着穆德哈尔风格的砖砌图案，优雅而别致。它们散落在普通的民居、小酒馆和面包房之间，构成了极其超现实的画面：你刚从一个布满海胆壳和渔网的小港口转身，抬头就望见一座仿佛属于吸血鬼伯爵的尖塔城堡。这种日常与奇幻的无缝交织，正是科米利亚斯最打动人心的魔力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这里，艺术不是被供奉在博物馆里的神圣之物，而是呼吸、生长在街道巷弄和生活缝隙里的活物。你会发现，这座小镇最核心的魅力，并非仅仅来自某一位天才建筑师，而是来自那个特定时代里，财富、乡愁与艺术野心一次罕见的、慷慨的合谋，最终在这个面朝大西洋的岬角上，凝固成了一曲永不落幕的视觉交响诗。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`科米利亚斯`} />
                <InfoRow label="英文名称" value={`Comillas`} />
                <InfoRow label="正式名称" value={`Comillas`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`科米利亚斯`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一个因印度归来富豪的资助而意外成为西班牙现代主义建筑露天博物馆的渔村小镇。`} />
                <InfoRow label="建筑特色" value={`高迪在此留下的“奇想屋”如同一朵从大地生长出的、缀满向日葵的奇幻童话屋。`} />
                <InfoRow label="建筑风格" value={`以安东尼·高迪的加泰罗尼亚现代主义为核心，混搭了新哥特、穆德哈尔等多种风格，形成独特的“科米利亚斯风格”。`} />
                <InfoRow label="文化价值" value={`见证了19世纪末西班牙“印度佬”资本如何与文化精英结合，在偏远海岸线催生出一场短暂而灿烂的建筑文艺复兴。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`高迪的“奇想屋”（El Capricho）开放时间通常为每天上午10:30至下午5:30（冬季可能提前至5:00关闭），午休时间（大约下午2:00-4:00）可能关闭，参观前务必在其官网确认最新时刻表。小镇本身及公共区域全天开放。主要建筑如索布雷拉诺宫（Palacio de Sobrellano）和镇公所（Ayuntamiento）内部参观有时间限制，通常为导览团形式，需提前查询。`} />
              <InfoRow label="门票价格" value={`高迪“奇想屋”成人票约为8欧元，学生及65岁以上长者优惠票约为6.5欧元。部分建筑联票或导览游价格在12-20欧元不等。小镇广场、海滩及街道漫步免费。`} />
              <InfoRow label="地址" value={`El Capricho de Gaudí, Barrio de la Fuente, 6, 39520 Comillas, Cantabria, Spain`} />
              <InfoRow label="交通方式" value={`最近的机场是桑坦德机场（Parayas Airport）。从机场出发，可先乘坐公交车或打车到桑坦德汽车站（Estación de Autobuses），车程约15分钟。从桑坦德汽车站有直达Comillas的ALSA公司巴士，车程约1小时，班次平日约每小时一班，周末略少，建议提前在ALSA官网或车站购票。若自驾，从桑坦德沿A-8高速转CA-131公路，约50分钟车程，小镇有多个付费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`科米利亚斯的故事，要从大西洋彼岸的殖民地讲起。19世纪中后期，一批从古巴、波多黎各等美洲殖民地发财归来的西班牙人——“印度佬”（Indianos）——衣锦还乡。他们带回了巨额的财富，也带回了对故土复杂的乡愁与改造的野心。其中，科米利亚斯本地出生的安东尼奥·洛佩斯·洛佩斯，第一位森特利亚侯爵，成为了改变小镇命运的关键人物。他在古巴积累了庞大的糖业和航运财富，决定将自己的故乡打造成一个文化与休憩的典范之地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`侯爵的雄心远不止于为自己修建豪宅。他动用自己的人脉和财富，将当时西班牙文化界的顶尖人物吸引到了这个偏僻的北方海岸。他的女婿，森特利奥伯爵，也加入了这项“造镇”计划。于是，在1880年代，一场小规模的“建筑革命”在这里悄然发生。他们请来的第一位明星，是加泰罗尼亚的建筑师琼·马托雷尔，他设计了森特利奥家族陵墓（现已不存）和充满力量感的索布雷拉诺宫。正是通过马托雷尔的引荐，当时还名不见经传的年轻助手——安东尼·高迪，获得了他的机会。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1883年，森特利奥伯爵的连襟，一位来自古巴的土豪马西莫·迪亚兹·德·基哈诺，想要为自己建造一栋夏季别墅。马托雷尔推荐了高迪。于是，这颗现代主义建筑史上最耀眼的明星，在科米利亚斯留下了他职业生涯早期最鲜艳的一笔——“奇想屋”。高迪在这里尽情实验了他的自然主义理念：建筑像植物一样从土地生长，向日葵主题象征着快乐与阳光，铸铁的廊柱模仿着竹林，瓷砖的色彩取自周围的森林与草地。这栋房子几乎是他后来那些伟大作品的灵感雏形，充满了不受拘束的童真与想象力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`高迪的成功像一块磁石，吸引了更多建筑师前来。同样是加泰罗尼亚人的路易斯·多梅内克·蒙塔内尔（巴特略之家的建筑师）设计了令人过目不忘的镇公所大楼。另一位现代主义大师克里斯托瓦尔·卡斯坎特则设计了宏伟的“教皇大学”（Seminario Mayor）。在短短十几年里，这个原本以渔业和农业为主的小镇，迅速聚集了数座国家级的重要建筑，风格从新哥特、穆德哈尔到现代主义交织碰撞，形成了绝无仅有的景观。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，这场华丽的梦并没有持续太久。随着主要赞助人家族的衰落和西班牙政治经济的动荡，科米利亚斯的建筑热潮逐渐消退。它就像一颗时间胶囊，将那个黄金时代最灿烂的创造力瞬间冻结。此后的岁月里，它安静地驻守在海边，经历了西班牙内战、佛朗哥时期，直到旅游业发展，这些被遗忘的珍宝才重新被世人发现和惊叹。今天的科米利亚斯，不仅守护着高迪的“向日葵”，更守护着一整个时代的、关于美、财富与乡愁的复杂记忆。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要深度感受科米利亚斯，建议安排一整天的时间，从清晨开始，到日落时分结束。最佳的游览节奏是“先外后内，先广后精”。上午趁阳光柔和、游客未至时，漫步小镇街道和海岸，整体感受其童话般的氛围与地理格局；中午前后重点参观需要购票进入的建筑内部，如“奇想屋”和索布雷拉诺宫；下午则可以悠闲地探索细节，在广场发呆，或去海滩放松。这样安排既能拍到光线最佳的照片，又能避开主要建筑内部的人流高峰，同时让自己的体验从宏观印象逐步深入到建筑细节和历史肌理之中。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`西班牙午休时间（大约下午2点至5点）很多商店和小型博物馆会关门，但主要景点如“奇想屋”可能只关闭部分时段，务必提前查好时间，利用这个空档去海滩或咖啡馆。
小镇街道多上下坡且铺着光滑的鹅卵石，务必穿一双绝对舒适防滑的步行鞋，高跟鞋在这里是“灾难级”选择。
参观建筑内部时保持安静，很多地方仍属于私人产业或具有严肃的宗教、历史意义，大声喧哗会引来侧目。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`让第一缕阳光带你穿过迷宫般的小巷，石板路被露水打得发亮，空气里有海盐和新鲜咖啡的香味。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`毫不犹豫地走向镇外的小丘，在宁静的清晨独自面对高迪的“奇想屋”，看翠绿的瓷砖墙如何在晨光中苏醒，那圈向日葵仿佛在对你微笑。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从“奇想屋”漫步回镇中心，登上圣克里斯托瓦尔教堂旁的高地，将红瓦屋顶、现代主义建筑的尖塔与远方湛蓝的比斯开湾一同收入眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进主广场，在有着精致彩绘玻璃的镇公所大楼前坐下，观察当地人如何开始他们慢节奏的一天。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参加一场索布雷拉诺宫的导览团，在阴凉华丽的内部感受森特利奥家族昔日的权势与品味，听听那些关于“印度佬”财富的传奇故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午时分，顺着指示牌下到“科米利亚斯之门”海滩，赤脚踩在黑色的沙粒上，从大海的方向回望悬崖上层层叠叠的小镇，视角截然不同。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要在日落前，找一家面向西边大海的悬崖酒吧，点一杯本地特色的“orujo”烈酒或苹果酒，看着夕阳将索布雷拉诺宫的剪影染成金色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐后再次散步到“奇想屋”，夜晚的灯光会为它披上一层神秘的面纱，铁艺装饰在光晕中宛如精致的黑色蕾丝。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`“奇想屋”南侧花园外的人行道`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光完美勾勒出建筑立体的瓷砖波浪和向日葵装饰的细节，构图时可将部分绿树作为前景，增添生机。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`索布雷拉诺宫正对面略高的草坪上`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，利用长焦镜头压缩空间，将宫殿宏伟的新哥特式立面与后方小镇的红色屋顶一同纳入画面，故事感极强。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从“科米利亚斯之门”海滩仰拍小镇`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，光线最为柔和金黄，以黑色的沙滩和拍岸的浪花为前景，整个建筑群矗立在悬崖上的景象无比震撼。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣克里斯托瓦尔教堂后的观景平台`}</h4>
                  <p className="text-sm text-gray-700">{`全天皆可，但尤以晴日上午为佳，这里是拍摄小镇全景、海岸线与建筑群地理关系的标准明信片机位。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`镇公所大楼的拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`利用拱门形成天然画框，拍摄广场上的人群与对面色彩斑斓的建筑，特别是在有街头表演或集市的日子，能捕捉到生动的生活气息。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄私人住宅或内部空间时，务必尊重隐私，未经明确允许不要将镜头对准住户的窗户或室内。无人机飞行在西班牙城镇上空有严格限制，在科米利亚斯这样的历史小镇飞行很可能违法，请务必提前查询当地法规。坎塔布里亚的天气变化极快，海边常突然起雾，这虽然是挑战但也可能造就梦幻般的氛围照片，随时准备好你的相机。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`海景民宿之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在位于港口区附近由老房子改造的家庭民宿，早晨推开窗就能看到渔船归航，房东妈妈会为你准备丰盛的坎塔布里亚式早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史沉浸体验`}</h4>
                  <p className="text-sm text-green-800">{`选择小镇中心一栋19世纪“印度佬”风格别墅改造的精品酒店，房间有着高高的天花板和复古家具，仿佛住进了一部老电影。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计爱好者天堂`}</h4>
                  <p className="text-sm text-yellow-800">{`一家将现代极简设计与老建筑结构完美融合的设计酒店，它本身可能就是一件艺术品，并且离高迪的“奇想屋”只有几步之遥。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`奢华度假享受`}</h4>
                  <p className="text-sm text-purple-800">{`坐落在小镇外围山丘上的四星级酒店，拥有无敌的海景露台和泳池，在一天的徒步探索后，这里是最佳的放松和回味之地。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（7-8月）是坎塔布里亚的旅游旺季，科米利亚斯的住宿非常紧张且价格高昂，务必提前数月预订。如果想体验更地道的氛围，可以选择提供“半膳宿”（含早晚餐）的家庭式民宿，能品尝到家传的海鲜菜谱。小镇治安非常好，夜晚散步很安全，但大部分住宿都在坡道上，携带沉重行李会是个小挑战，预订时不妨询问一下酒店是否提供搬运服务。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开科米利亚斯很久以后，我脑海里反复出现的，不是某一张具体的建筑照片，而是一种混合的感觉：海风的咸味、向日葵瓷砖明亮的黄、石板路的清凉触感，以及那种时间在这里被悄然拉长的宁静节奏。在这个一切都追求流量和尖叫值的时代，科米利亚斯提供了一种截然不同的旅行价值——它不是用来“打卡”的，而是用来“沉浸”的。它教会你慢下来，用眼睛去抚摸建筑的曲线，用耳朵去聆听风与铁艺的对话，去理解每一片瓷砖背后，那个关于远行、致富、乡愁与创造美的复杂故事。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这个地方之所以值得被列入一生必去的清单，是因为它罕见地保存了一个完整的、有机的“梦境”。在这里，天才的灵光不是孤立的奇迹，而是融入市井生活的背景乐；宏伟的抱负没有催生出冷漠的纪念碑，而是化作了可以触摸、可以居住的温暖存在。它提醒着我们，最好的文化遗产，永远是那些仍然在呼吸、在与普通人日常共生的事物。来到科米利亚斯，你不仅是参观了几栋漂亮的房子，更是走进了一段依然活着的历史，一场关于“何谓美好生活”的、永不褪色的讨论。这对于任何一位渴望深度、渴望真实连接的旅人来说，无疑是一份珍贵无比的礼物。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/castillo-de-los-templarios" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蓬
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蓬费拉达圣殿骑士城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Castillo de los Templarios</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/zamora-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨莫拉大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Zamora Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cuenca-hanging-houses" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    昆
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">昆卡悬屋</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cuenca Hanging Houses</p>
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
