import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '多姆 Domme｜悬崖上的金色石头小镇，法国最美观景台与中世纪时光胶囊 - 最佳欧洲景点',
  description: '车子沿着多尔多涅河谷蜿蜒爬升，当转过最后一个弯，多姆就像一枚金色的徽章，突然别在了蔚蓝天鹅绒般的悬崖边缘。第一眼不是看见具体的房屋，而是那片柔和、温暖、在午后阳光下闪烁着蜂蜜与焦糖光泽的整体色彩。它稳稳地坐在那里，背靠着无垠的绿野，面朝着脚下那条如玉带般静静流淌的多尔多涅河，那份君临天下的气势，瞬间...',
}

export default function DommeBastidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '多姆（俯瞰多尔多涅河谷的防御巴斯蒂德）', href: '/attractions/domme-bastide' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`多姆（俯瞰多尔多涅河谷的防御巴斯蒂德）・Domme・法国・多姆`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着多尔多涅河谷蜿蜒爬升，当转过最后一个弯，多姆就像一枚金色的徽章，突然别在了蔚蓝天鹅绒般的悬崖边缘。第一眼不是看见具体的房屋，而是那片柔和、温暖、在午后阳光下闪烁着蜂蜜与焦糖光泽的整体色彩。它稳稳地坐在那里，背靠着无垠的绿野，面朝着脚下那条如玉带般静静流淌的多尔多涅河，那份君临天下的气势，瞬间就让人理解了“阳台”这个称号的由来。
停好车，穿过那道厚重的、带着深深车辙印记的拱形石门（Porte des Tours），你就踏入了另一个时间的维度。脚下的石板路被几个世纪的脚步磨得光滑温润，缝隙里长出茸茸的青苔。空气里有股好闻的混合气息：老石头在阳光下蒸腾出的干燥矿物味，从某家厨房飘出的烤面包和炖肉的浓香，还有悬崖边随风送来的、带着河水清甜与森林湿润的草木气息。小镇异常宁静，主街上的脚步声会清晰地回荡，你能听见自己的呼吸，也能听见远处咖啡馆里刀叉轻碰的叮当声和当地人低声聊天的、音乐般的法语絮语。这里不像一个纯粹的博物馆，而是一个仍在从容呼吸的家园，阳台上晾晒着衣物，窗台边点缀着天竺葵，老人在广场长椅上眯着眼晒太阳。
它的核心魅力，在于这种极致的反差与和谐的统一。它诞生于刀光剑影的战争目的，每一道城墙、每一座塔楼都诉说着防御的冷酷；但如今，它展现的却是无与伦比的温柔与宁静。你会沉迷于在迷宫般的小巷里随意穿行，每一次转角都可能撞见一个盛满鲜花的庭院，或是一个通往悬崖边缘的、豁然开朗的缝隙。站在那里，视野毫无遮挡地铺展开去，河谷的田园诗尽收眼底——墨绿色的树林，金黄色的麦田，星星点点的古堡，蜿蜒的河水在阳光下碎成万千钻石。这种由坚硬历史与柔软风景交织出的独特诗意，正是多姆让人魂牵梦萦的终极原因。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子沿着多尔多涅河谷蜿蜒爬升，当转过最后一个弯，多姆就像一枚金色的徽章，突然别在了蔚蓝天鹅绒般的悬崖边缘。第一眼不是看见具体的房屋，而是那片柔和、温暖、在午后阳光下闪烁着蜂蜜与焦糖光泽的整体色彩。它稳稳地坐在那里，背靠着无垠的绿野，面朝着脚下那条如玉带般静静流淌的多尔多涅河，那份君临天下的气势，瞬间就让人理解了“阳台”这个称号的由来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`停好车，穿过那道厚重的、带着深深车辙印记的拱形石门（Porte des Tours），你就踏入了另一个时间的维度。脚下的石板路被几个世纪的脚步磨得光滑温润，缝隙里长出茸茸的青苔。空气里有股好闻的混合气息：老石头在阳光下蒸腾出的干燥矿物味，从某家厨房飘出的烤面包和炖肉的浓香，还有悬崖边随风送来的、带着河水清甜与森林湿润的草木气息。小镇异常宁静，主街上的脚步声会清晰地回荡，你能听见自己的呼吸，也能听见远处咖啡馆里刀叉轻碰的叮当声和当地人低声聊天的、音乐般的法语絮语。这里不像一个纯粹的博物馆，而是一个仍在从容呼吸的家园，阳台上晾晒着衣物，窗台边点缀着天竺葵，老人在广场长椅上眯着眼晒太阳。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，在于这种极致的反差与和谐的统一。它诞生于刀光剑影的战争目的，每一道城墙、每一座塔楼都诉说着防御的冷酷；但如今，它展现的却是无与伦比的温柔与宁静。你会沉迷于在迷宫般的小巷里随意穿行，每一次转角都可能撞见一个盛满鲜花的庭院，或是一个通往悬崖边缘的、豁然开朗的缝隙。站在那里，视野毫无遮挡地铺展开去，河谷的田园诗尽收眼底——墨绿色的树林，金黄色的麦田，星星点点的古堡，蜿蜒的河水在阳光下碎成万千钻石。这种由坚硬历史与柔软风景交织出的独特诗意，正是多姆让人魂牵梦萦的终极原因。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`多姆（俯瞰多尔多涅河谷的防御巴斯蒂德）`} />
                <InfoRow label="英文名称" value={`Domme`} />
                <InfoRow label="正式名称" value={`Domme`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`多姆`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`法国保存最完好的中世纪防御城镇（巴斯蒂德）之一，被誉为“多尔多涅河谷的阳台”。`} />
                <InfoRow label="建筑特色" value={`建在悬崖之巅的网格状规划城镇，拥有令人屏息的全景视野和统一的蜂蜜色石灰岩建筑。`} />
                <InfoRow label="建筑风格" value={`西南法中世纪巴斯蒂德风格，兼具防御功能与文艺复兴时期的民居细节。`} />
                <InfoRow label="文化价值" value={`一座活生生的中世纪城市规划和社区生活的典范，完美体现了军事防御与日常生活需求的结合。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇公共区域全天开放。主要景点如“多姆洞穴”（Grottes de Domme）开放时间为每年四月至九月，每日上午10点至下午6点；十月至次年三月开放时间缩短，通常为下午2点至5点，周二闭馆。游客中心夏季（6月-9月）每天上午10点至下午1点、下午2点至6点开放，冬季时间可能调整。建议出行前查阅官网确认具体日期。`} />
              <InfoRow label="门票价格" value={`进入多姆小镇本身免费。参观“多姆洞穴”需购票，成人票价约为12欧元，儿童、学生及团体有相应优惠。小镇上的“巴斯蒂德博物馆”（Musée de la Bastide）门票约5欧元。部分导览游需要额外付费。`} />
              <InfoRow label="地址" value={`Place de la Halle, 24250 Domme, France`} />
              <InfoRow label="交通方式" value={`从最近的主要交通枢纽出发：最近的国际机场是波尔多-梅里尼亚克机场（BOD），距离约150公里，车程2小时。你也可以飞往更近但规模较小的贝尔热拉克机场（EGC），距离约50公里，车程45分钟。火车方面，最近的火车站是位于贝尔热拉克的TER车站，从波尔多圣让站乘区域火车约1.5小时可达贝尔热拉克。从贝尔热拉克火车站或市中心，你需要换乘当地巴士（Trans Périgord线路）前往多姆，车程约50分钟，但班次非常有限，每天可能只有2-3班。最灵活方便的方式无疑是自驾，从贝尔热拉克出发沿D703和D50公路行驶，一路风景如画，约40分钟即可抵达。小镇入口处有大型收费停车场（约3-5欧元/天）。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`多姆的故事，始于13世纪末那个风云激荡的年代。当时，法国国王腓力三世（大胆者）正与英格兰在金雀花王朝的领地上激烈博弈。为了巩固王国西南部的统治，一种新型的城镇模式——“巴斯蒂德”被大规模兴建。多姆，就是这顶王冠上最闪亮的一颗战略棋子。1283年，获得建镇特许状的多姆在悬崖上破土动工。这选址堪称军事天才的一笔：三面是天然的悬崖峭壁，易守难攻，唯一易于接近的东侧则修筑了坚固的城墙和塔楼。它的规划是标准的巴斯蒂德网格布局，笔直的街道在主广场交汇，一切都为了效率和秩序，为了在战时能迅速集结民兵，在平时能高效进行市场和市政管理。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，和平的时光短暂。英法百年战争的战火很快烧到了这片富饶的土地。多姆因其战略位置，成为了双方反复争夺的肥肉。它数次易主，城墙在硝烟中破损又加固。最戏剧性的一幕发生在1347年，一队英国士兵竟然通过悬崖上一条隐秘的裂缝（据说由一名心怀不满的居民泄露）潜入城内，兵不血刃地占领了这座“不可攻克”的要塞。这段被“从内部攻破”的历史，为小镇增添了一抹传奇与警世的色彩。战争结束后，多姆逐渐从军事前沿转变为繁荣的商贸中心，它的广场上汇聚着来自河谷的核桃、松露、葡萄酒和手工制品。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`十六世纪的宗教战争再次给多姆带来了创伤。作为一个天主教地区，它遭到了胡格诺派军队的攻击和劫掠。但石头建造的城市有着顽强的生命力，它又一次从灰烬中站了起来。随着中央集权的加强和边境的安定，多姆的军事功能彻底褪去，它变成了一座宁静的农业小镇和采石场。当地人开采悬崖上的石灰岩，这种美丽的金色石头不仅用于修建本地的房屋，还远销各地，成就了多尔多涅地区许多建筑今天我们看到的面貌。可以说，多姆用自己的“血肉”装扮了整个河谷。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间的河流缓缓流淌，直到二十世纪旅游业兴起，人们才重新发现了这颗蒙尘的明珠。它不再是战略要地或采石场，而是作为一段活生生的中世纪史诗、一个无与伦比的观景台，迎来了世界各地惊叹的目光。今天，当你抚摸那些斑驳的城墙石块，你触摸的不仅是一段法国王权扩张史、一部英法恩怨录，更是一部关于韧性、适应与重生的社区传奇。那些石头里，凝固了战争的轰鸣、市集的喧嚣、采石工的号子，以及如今游客满足的叹息。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的多姆深度游建议从午后开始。这个时间，一日游的旅行团大多已经离去，小镇恢复了它本应有的宁静，阳光也开始西斜，为金色的石头披上更浓郁的蜜色光泽。整体游览大约需要4-5小时，节奏宜慢不宜快。首先，不要急着钻进小巷，而是应该直接前往悬崖边的观景台，在光线最好的时候，将那片令人心醉的全景深深烙印在脑海和相机里。然后，再像探险一样折返，慢悠悠地深入城镇中心，探索它的广场、小巷和历史遗迹。把日落时分留给城墙或某个安静的角落，看着河谷逐渐沉入暮色。最后，如果时间允许，可以留下来用一顿晚餐，感受夜晚灯光点亮后，小镇如烛光般温暖的另一种魔力。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双绝对舒适的平底鞋，小镇内全部是凹凸不平的古老石板路和陡峭的上下坡，高跟鞋在这里是“刑具”。自驾的话尽量早点到达以确保停车场有位置，夏季午后车位非常紧张。参观洞穴内部温度常年较低（约13°C），即使外面烈日炎炎，也建议带一件薄外套。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主停车场出发，首先刻意绕过正门，沿着小镇南侧外围的小径走到悬崖边缘，获取一个没有任何遮挡的、震撼人心的河谷全景第一印象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`然后折返，郑重其事地从那座拥有两座圆塔的宏伟主城门“塔门”进入，用手触摸冰凉的石壁，想象中世纪士兵在此驻守的情景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过城门后，立刻右转钻进第一条狭窄小巷，让自己迷失在由蜂蜜色石墙、木筋墙老屋和紫藤花架构成的静谧迷宫里，倾听自己脚步的回声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`无论如何迷失，最终让喧哗的人声引导你回到中心的“ Halle广场”，坐在咖啡馆的露天座位上，点一杯本地核桃酒或一杯咖啡，观察广场上市政厅、古老市场和居民日常生活的交融。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从广场西侧的小路下行，去探访神秘的“多姆洞穴”，在凉爽的地下世界里观看史前钟乳石与17世纪囚犯刻在石壁上的神秘船形 graffiti（涂鸦）。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观完毕后，沿着“骑士街”或“监狱街”这样名字诱人的小巷往西漫步，寻找那些隐藏在民居背后的、可以瞥见河谷一角的迷你观景露台。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在太阳开始变成咸蛋黄颜色时，登上西段残留的城墙遗址，或找一个朝西的餐厅露台，静静等待金色光线将整个多尔多涅河谷染成一片辉煌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落后，趁着夜色还未完全降临，再次漫步几乎无人的小巷，感受石墙白天储存的阳光热量渐渐散去，小镇散发出一种古老而安宁的沉睡气息。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`悬崖全景台（Belvédère de la Barre）`}</h4>
                  <p className="text-sm text-gray-700">{`最佳时间是晴朗的下午四点至日落前，阳光从侧面照亮河谷，立体感极强；构图时可以将前景的石头围墙或绿植纳入，形成框架，中景是蜿蜒的河流和田野，远景是层叠的山峦。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“塔门”入口内部仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点前或下午四点后，阳光能斜射进门洞，形成强烈的明暗对比；站在门内，用广角镜头向上拍摄拱顶和两侧圆塔的内部结构，捕捉石头的质感和穿越历史的纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`Halle广场的钟楼角度`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或工作日人少时，站在广场西北角，以古老的木质市场凉棚和钟楼为主体，搭配石板路和两旁的金色建筑，拍出巴斯蒂德规整的几何美感与生活气息的结合。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`某条无名小巷的光影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`午后时分，当阳光斜射入狭窄巷弄，在石墙上切割出分明光影时，等待一个当地人或一只猫走过，捕捉那份动态的生活感与静谧建筑的对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`日落时分的剪影`}</h4>
                  <p className="text-sm text-gray-700">{`在城墙西侧，以小镇轮廓和教堂尖顶为剪影，对准色彩绚烂的日落天空拍摄，可以得到一张极具戏剧性和情感张力的明信片式照片。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`多姆的光线在日出后一小时和日落前一小时最为迷人，此时光线柔和，金色石头的色彩饱和度达到顶峰。尝试利用门窗、拱廊、葡萄藤作为天然画框，能大大增加画面的层次感和故事性。请务必尊重当地居民的隐私，不要将镜头对准私人住宅的窗户或院内。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`悬崖边的宝藏`}</h4>
                  <p className="text-sm text-blue-800">{`直接坐落在悬崖顶端的家庭式旅馆，房间虽小但一尘不染，部分房间的窗户就像画框，将多尔多涅河谷的晨雾与晚霞直接送入你的眼帘，晚上只能听到风声和虫鸣。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老石屋的梦境`}</h4>
                  <p className="text-sm text-green-800">{`由一栋16世纪石质豪宅改造的精品民宿，位于小镇静谧一隅，主人擅长烹饪，早餐的蜂蜜和果酱都来自自家花园，睡在厚重的石墙里能体验到真正的“中世纪”宁静睡眠。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`河谷庄园的奢华`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车十分钟可达的河谷对岸五星级城堡酒店，拥有广阔葡萄园和无敌视野，可以从另一个绝佳角度回望灯光点亮的悬崖小镇多姆，体验法式贵族般的田园奢华。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`贝尔热拉克的便利选择`}</h4>
                  <p className="text-sm text-purple-800">{`如果追求更多餐饮和交通便利，可以住在贝尔热拉克市中心河畔的设计酒店，白天开车来多姆游玩，晚上回到这座热闹的古镇享受美食和美酒，行程更灵活。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`多姆小镇内的住宿数量极其有限，且非常抢手，尤其是在夏季和节假日，务必提前数月预订。住在镇上能享受到游客散去后和到来前独家般的宁静，但夜间餐饮选择很少。住在附近的村庄或贝尔热拉克则能获得更多样的体验和更好的性价比，适合自驾的旅行者。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开多姆许久，脑海里挥之不去的，不是某一张具体的明信片风景，而是一种混合的感觉：石头的坚实与视野的辽远，历史的厚重与当下的轻盈，防御的冰冷与生活的温热。在这个追求速度与新奇的时代，多姆像一个坚定的“反义词”。它不提供刺激的娱乐，不追赶时髦的潮流，它只是静静地坐在那里，让你不得不慢下来，走进去，然后被一种更古老、更恒久的生活节奏所浸润。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这个地方教会我的，是关于“位置”的哲学。它因一个国王的战略“位置”而诞生，因一个绝佳的观景“位置”而幸存，最终，它为我们这些现代旅人提供了一个珍贵的心灵“位置”——一个可以暂时从信息洪流中抽离，只是简单地站着、看着、感受着的位置。在这里，时间仿佛有了厚度，你可以同时触摸到13世纪的城墙、18世纪的门楣和21世纪的咖啡香。每一位热爱深度游的旅人，都应该来多姆住上一晚，不仅仅是为了那幅举世无双的河谷画卷，更是为了体验一种在悬崖边缘找到的、不可思议的内心安稳。它告诉你，有些美好，无需创造，只需守护和发现。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/collioure-harbour-fauvist-painters" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科利尤尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Collioure</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ville-close-de-concarneau" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    孔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">孔卡尔诺封闭之城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ville Close de Concarneau</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/provins-medieval-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普罗万中世纪古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Provins</p>
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
