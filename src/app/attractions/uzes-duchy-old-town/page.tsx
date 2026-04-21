import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '于泽斯公国古城 Uzès｜水塔与公爵府共舞的南法慢板 - 最佳欧洲景点',
  description: '把车停在古城边缘的梧桐树下，穿过那道不起眼的石头拱门，时间“唰”地一下就被调慢了。第一脚踩上于泽斯老城中心那些被岁月磨得发亮、中间微微凹陷的鹅卵石，你就知道，这里不属于21世纪的匆忙。空气里有种好闻的混合气息：老房子石头缝里渗出的凉意，路边咖啡馆飘出的浓缩咖啡香，还有不知从哪户人家窗台溢出来的迷迭香...',
}

export default function UzesDuchyOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '法国', href: '/destinations/france' },
            { label: '于泽斯公国古城', href: '/attractions/uzes-duchy-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`于泽斯公国古城・Uzès・法国・加尔省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`把车停在古城边缘的梧桐树下，穿过那道不起眼的石头拱门，时间“唰”地一下就被调慢了。第一脚踩上于泽斯老城中心那些被岁月磨得发亮、中间微微凹陷的鹅卵石，你就知道，这里不属于21世纪的匆忙。空气里有种好闻的混合气息：老房子石头缝里渗出的凉意，路边咖啡馆飘出的浓缩咖啡香，还有不知从哪户人家窗台溢出来的迷迭香和天竺葵的植物味道。你的脚步声在狭窄的巷弄里有了回响，偶尔和某个拎着长棍面包的老太太擦肩而过，她会对你轻声说一句“Bonjour”（日安），自然得像你们是邻居。
这里最打动人的，不是某个孤立的景点，而是一种完整的、呼吸着的氛围。它像是被琥珀封印起来的旧时光，但里面的一切都还活着。斑驳的蜂蜜色石头外墙，朱红色或孔雀蓝色的百叶窗，铸铁的阳台栏杆上缠绕着盛放的三角梅。走到埃雷蒂广场，你会瞬间明白为什么这里被称为“普罗旺斯最美广场”。三面环绕着风格和谐统一的17世纪拱廊建筑，地面是光滑的河石铺成的几何图案。下午的阳光斜射过来，在拱廊下切割出分明动人的光影。老人们坐在长椅上读报，孩子追着鸽子跑，那节奏慢得让人心慌，继而安心。
它的核心魅力，在于一种平衡。一边是显赫的“公国”历史，以广场尽头那座威严的、带着三个不同时期塔楼的公爵宫为象征；另一边则是喷泉汩汩、市场喧闹的市井日常。你不必正襟危坐地“学习”历史，历史就躺在那堵晒太阳的猫的身旁，就流淌在中央喷泉永远清澈的饮水池里。这里没有巴黎的浮华，也没有蔚蓝海岸的喧嚣，它骄傲地保持着自己的步调——一种属于土地、家族和季节循环的，南法深处的贵族式从容。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`把车停在古城边缘的梧桐树下，穿过那道不起眼的石头拱门，时间“唰”地一下就被调慢了。第一脚踩上于泽斯老城中心那些被岁月磨得发亮、中间微微凹陷的鹅卵石，你就知道，这里不属于21世纪的匆忙。空气里有种好闻的混合气息：老房子石头缝里渗出的凉意，路边咖啡馆飘出的浓缩咖啡香，还有不知从哪户人家窗台溢出来的迷迭香和天竺葵的植物味道。你的脚步声在狭窄的巷弄里有了回响，偶尔和某个拎着长棍面包的老太太擦肩而过，她会对你轻声说一句“Bonjour”（日安），自然得像你们是邻居。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里最打动人的，不是某个孤立的景点，而是一种完整的、呼吸着的氛围。它像是被琥珀封印起来的旧时光，但里面的一切都还活着。斑驳的蜂蜜色石头外墙，朱红色或孔雀蓝色的百叶窗，铸铁的阳台栏杆上缠绕着盛放的三角梅。走到埃雷蒂广场，你会瞬间明白为什么这里被称为“普罗旺斯最美广场”。三面环绕着风格和谐统一的17世纪拱廊建筑，地面是光滑的河石铺成的几何图案。下午的阳光斜射过来，在拱廊下切割出分明动人的光影。老人们坐在长椅上读报，孩子追着鸽子跑，那节奏慢得让人心慌，继而安心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，在于一种平衡。一边是显赫的“公国”历史，以广场尽头那座威严的、带着三个不同时期塔楼的公爵宫为象征；另一边则是喷泉汩汩、市场喧闹的市井日常。你不必正襟危坐地“学习”历史，历史就躺在那堵晒太阳的猫的身旁，就流淌在中央喷泉永远清澈的饮水池里。这里没有巴黎的浮华，也没有蔚蓝海岸的喧嚣，它骄傲地保持着自己的步调——一种属于土地、家族和季节循环的，南法深处的贵族式从容。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`于泽斯公国古城`} />
                <InfoRow label="英文名称" value={`Uzès`} />
                <InfoRow label="正式名称" value={`The Ducal Town of Uzès`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`加尔省`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`法国历史上第一个公爵领地的首府，被誉为“法国第一公国”。`} />
                <InfoRow label="建筑特色" value={`中世纪城市肌理与文艺复兴贵族府邸的完美共存，以独特的圆形“芬斯特拉水塔”和威严的公爵宫塔楼为天际线标志。`} />
                <InfoRow label="建筑风格" value={`罗曼风格打底，文艺复兴与古典主义点缀，形成一种厚重而不失优雅的普罗旺斯本土贵族风格。`} />
                <InfoRow label="文化价值" value={`活着的文化遗产，是理解法国南部贵族历史与普罗旺斯日常生活的绝佳样本。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇公共区域全天24小时开放。核心景点如公爵宫开放时间较为复杂：4月至9月一般为10:00-12:30, 14:00-18:00；10月至次年3月开放时间缩短，通常为14:00-17:00，且周二、周三可能关闭。圣泰奥多尔教堂等宗教场所开放时间约为9:00-18:00，弥撒期间游客需保持安静。建议出行前务必查询官网，冬季和法国公共假期（如复活节、圣灵降临节）安排常有变动。`} />
              <InfoRow label="门票价格" value={`漫步古镇本身免费。进入公爵宫及登上其塔楼参观需购票，成人票约11欧元，学生及优惠票约9欧元，7岁以下儿童免费。有时会推出与镇内其他小型博物馆的联票。教堂免费进入，但欢迎捐赠以支持维护。`} />
              <InfoRow label="地址" value={`Place du Duché, 30700 Uzès, France`} />
              <InfoRow label="交通方式" value={`于泽斯没有火车站，最便捷的方式是先抵达交通枢纽城市。从巴黎可乘TGV高铁至阿维尼翁中心站，约2小时40分钟。从阿维尼翁出发，最佳选择是乘坐TER区域火车至附近城镇雷穆兰，车程约25分钟，班次较频繁。抵达雷穆兰后，转乘30路或31路巴士（请注意班次稀疏，尤其是周日和节假日，最好提前在‘Gard’交通应用上查时刻表），约20分钟可抵达于泽斯“Les Marronniers”站。自驾最为灵活，从阿维尼翁出发沿D981公路向北开约30分钟即达，古镇外围有多个付费停车场（如Place des Marronniers）。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`于泽斯的故事，始于水。早在罗马时代，这里就因为拥有充沛的泉水而成为重要定居点。著名的尼姆引水渠，那个宏伟的加尔桥所运输的宝贵水源，正是起始于于泽斯郊外的泉眼。水，是这座城市最初的财富和权力源泉。中世纪早期，随着西罗马帝国崩溃，这片土地陷入了纷争。直到公元8世纪，一个强大的地方领主家族——于泽斯家族在此崛起，他们依靠战略位置和财富，逐渐获得了伯爵乃至公爵的头衔。1229年，国王路易九世（即圣路易）正式将这块领地册封为公爵领地，于泽斯由此成为了法兰西王国历史上第一个公国，其领主享有极高的自治权和荣耀。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`公爵家族的故事充满了权谋、野心与艺术的交织。他们不仅是战士，也是艺术的庇护者。文艺复兴的春风吹过阿尔卑斯山，也抚过了于泽斯坚固的城墙。16世纪是它的黄金时代，公爵们拆掉了部分防御性的中世纪堡垒，开始兴建更适宜居住、更体现人文精神的宫殿。我们今天看到的公爵宫，就是一部立体的建筑史书：最古老的维涅特塔是12世纪的罗曼式遗迹，象征着军事权威；中间高大的主塔是文艺复兴风格的彰显；而最精致的“钟楼塔”则带着17世纪古典主义的优雅。这种混搭，记录了这个家族从封建领主向文明贵族演变的全部历程。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史从不只有阳光。16世纪后期席卷法国的宗教战争（胡格诺战争）给于泽斯带来了深重创伤。作为新教（胡格诺派）的重要堡垒，它多次遭到天主教军队的围攻和破坏。公爵宫一度被部分摧毁，城市也伤痕累累。战争的残酷促使幸存的于泽斯人思考，他们开始更倾向于用一种建筑上的和谐与美丽来疗愈伤痛，而不是炫耀武力。于是，在17世纪重建时期，我们今天看到的那些比例优雅、带有整齐拱廊的广场和宅邸被建造起来，它们体现了一种对秩序、平静与社群生活的向往。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`法国大革命的风暴同样席卷了这个古老的公国。贵族特权被废除，公爵的财产被没收，公爵宫一度沦为监狱和法院。但有趣的是，或许是于泽斯与巴黎的距离，或许是它在地方上根深蒂固的威望，大革命时期的破坏在这里相对有限。城市的结构和大多数建筑奇迹般地保存了下来。此后的几个世纪，它逐渐褪去了政治中心的锋芒，变成了一个安静的农业和贸易城镇，仿佛一位退隐的贵族，在普罗旺斯的阳光下安度晚年。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到20世纪中后期，人们重新发现了这颗蒙尘的明珠。艺术家、作家和寻找“真正法国”的旅行者开始到来。古老的宅邸被精心修复，不是为了博物馆式的陈列，而是重新注入生活——变成了画廊、书店、精品旅馆和私人住宅。今天，当你漫步其中，你看到的不仅是一个保存完好的中世纪古镇，更是一个经历了千年风雨，在权力、信仰、艺术与日常生活之间不断寻求平衡，并最终找到了自己那份宁静归宿的活生生的传奇。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要品尝于泽斯的精髓，你需要预留一整天，并把自己调频到“漫步”模式。建议早上9点左右抵达，这时游客尚少，阳光温柔，是欣赏建筑光影和捕捉宁静氛围的黄金时间。整个游览可以松散地分为三个阶段：上午聚焦于历史核心（公爵宫及周边），中午沉浸在广场生活与市场（如果赶上周三或周六上午的市集，体验更佳），下午则用来探索蜿蜒的后巷、秘密花园和城市边缘的城墙遗迹。整体耗时约6-8小时，节奏务必放慢，多停留，多观察，让这座古城自己向你讲述故事。这样的安排能让你在光线最佳时看到主要地标，又能避开午后最晒的时段在阴凉的咖啡馆或小巷里穿行，最后在黄昏时分登上高处，收获一天中最动人的全景。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对舒适的平底鞋，那些美丽的鹅卵石路对你的脚踝是场严峻考验。虽然治安良好，但在拥挤的市场日或旅游旺季，还是要看管好随身物品，提防偶尔出现的扒手。如果遇到餐厅菜单上没有英文，别慌，大胆地指着邻桌看起来好吃的菜说“le même”（一样的），这通常是解锁地道美味的最快方式。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从埃雷蒂广场出发，先仰视那座融合了三个时代、三种风格于一身、充满故事感的公爵宫塔楼群。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进公爵宫的内院，触摸那些冰冷的石墙，感受从封建堡垒到文艺复兴府邸的空间演变，若有胆量一定要登上钟楼塔。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过拱廊，来到圣泰奥多尔教堂前的小广场，听一听教堂整点可能响起的古朴钟声，看一看教堂立面那混合了罗曼式厚重与哥特式轻盈的独特气质。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`随意钻进任何一条从主广场辐射出去的鹅卵石小巷，比如 Rue de l'Évêché，任由自己迷失在蜂蜜色石头建筑、鲜花阳台和突然出现的小型广场构成的迷宫之中。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在中心喷泉“Fontaine du Duché”旁坐下，学着当地人的样子用手捧起清冽的泉水喝一口，感受那延续了千年的清凉与甘甜。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找那座标志性的圆形“芬斯特拉水塔”，绕着它走一圈，欣赏它像巨大城堡底座般的独特结构和顶部可爱的穹顶亭。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`尝试找到通往“Jardin Médiéval”（中世纪花园）或某个隐蔽的酒店庭院的入口，窥探一番绿意盎然的私人静谧空间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在傍晚时分，沿着指示牌走到古城边缘的“Promenade des Marronniers”林荫道或某段残存的城墙边，看着夕阳将整个古镇染成金黄。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`埃雷蒂广场拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的斜射光线会穿过拱廊，在广场的河石地面上拉出长长的、富有几何感的光影线条，此时拍摄人物漫步或建筑局部极具氛围感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`公爵宫塔楼脚下仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在宫殿内院的角落里，用广角镜头向上拍摄，将罗曼塔、钟楼塔和主塔一同纳入画面，能拍出建筑叠加的震撼和历史厚重感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从Rue de la République街口远眺水塔`}</h4>
                  <p className="text-sm text-gray-700">{`这条稍宽的街道提供了完美的视线走廊，清晨逆光或日落时分顺光拍摄，能将圆形水塔与两旁的老建筑一同框入，构成经典明信片视角。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣泰奥多尔教堂后的小巷`}</h4>
                  <p className="text-sm text-gray-700">{`这里人迹罕至，粗糙的石墙、斑驳的木门和墙角疯长的野花构成绝佳的前景，以教堂的石头后殿为背景，能拍出充满故事感和岁月痕迹的照片。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`林荫道（Promenade des Marronniers）上的长椅`}</h4>
                  <p className="text-sm text-gray-700">{`黄昏时分，坐在面对古镇的长椅上，可以拍到梧桐树影映衬下，古镇屋顶层层叠叠、塔楼耸立的全景，温暖的光线会让整个画面充满油画质感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`善于利用南法强烈的光影对比，侧光能完美展现石头墙面的质感。拍摄当地人或私人庭院时，请务必先征得同意，一个微笑和一句“Bonjour”是最好的沟通开端。无人机飞行在古镇上空有严格限制，特别是在公爵宫等历史建筑附近，起飞前务必查清当地法规。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`特色民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在经过精心修复的17世纪贵族宅邸里，房间有裸露的原始石墙和木梁，早餐在种满橄榄树的内庭享用，女主人会为你准备自制的果酱和糕点。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`由古老的修道院改建而成，房间环绕着宁静的回廊庭院，泳池隐藏在古老的石墙之后，水疗中心使用本地薰衣草和橄榄产品，是极致的放松之所。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`庄园酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`位于古镇外2公里处的葡萄园和松林之中，房间拥有无敌的田园景观，酒店自带一家备受推崇的餐厅，你可以品尝到用自家有机食材烹制的普罗旺斯美食。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计公寓`}</h4>
                  <p className="text-sm text-purple-800">{`坐落于广场拱廊之上，拥有俯瞰整个埃雷蒂广场的私人阳台，傍晚时分你可以买来奶酪、火腿和玫瑰酒，坐在阳台上看广场从喧闹归于宁静，仿佛拥有了整个舞台。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（7-8月）和重要节假日（如复活节）房间非常紧俏，务必提前数月预订。古镇内的住宿停车可能不便，通常需要停放在外围的公共停车场，选择住宿时请确认停车安排。尽管古镇中心夜晚非常安全宁静，但选择最中心广场旁的住宿时，需对周末夜晚广场上持续到较晚的聊天声有所预期，这是南法生活的一部分。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开于泽斯的时候，我的口袋里好像装进了一块那里温润的鹅卵石，沉甸甸的，是一种让人心安的重量。这份重量不是来自观光清单上被打勾的成就感，而是来自一种“被浸润”的感觉。你被千年的历史浸润过，被缓慢的日常浸润过，被石头、泉水和阳光共同酿造的宁静浸润过。在这个一切求新求快的时代，于泽斯的存在本身就是一个温柔的抗议。它告诉你，有些价值无法被加速——比如石头需要几个世纪才能被脚步磨亮，比如一个家族的名誉需要几十代人来维系，比如一种生活的从容气质，需要千年的沉淀才能如此不着痕迹。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位热爱深度游的旅人，都应该把于泽斯列入清单。不是为了看一座宫殿或一个广场，而是为了体验一种完整的世界观。在这里，历史不是教科书上冰冷的章节，而是你脚下凹凸不平的路面，是耳边永不疲倦的泉声，是午后阳光在广场上移动的轨迹。它让你相信，在世界的某些角落，时间依然保持着它原本尊贵的步调，而美好生活的秘诀，或许就藏在一扇蓝色的百叶窗后，一次与陌生人的礼貌问候中，以及甘愿让自己“迷失”在某条不知名小巷的午后。于泽斯是一场关于时间、遗产和简单之美的深刻教学，而学费，仅仅是你愿意慢下来的那一天。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bourges-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布尔日大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bourges Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/albi-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔比主教座堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Albi Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/provins-medieval-city" className="block group">
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
