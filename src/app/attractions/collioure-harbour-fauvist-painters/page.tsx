import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科利尤尔 Collioure｜野兽派画家的灵感之源，地中海岸的色彩天堂 - 最佳欧洲景点',
  description: '朋友，想象一下，当你穿过一排排葡萄园和橄榄树林，一个转弯，整个地中海最热烈、最纯粹的色彩突然毫无保留地在你眼前炸开。这就是科利尤尔给我的第一击。那不是普通的蓝，是钴蓝、群青、宝石蓝混合着阳光，泼洒在海面上；岸边房子的墙壁是那种被太阳亲吻了几百年的暖黄、熟杏色和淡淡的玫瑰粉；而一艘艘被称为“点舟”的传...',
}

export default function CollioureHarbourFauvistPaintersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '科利尤尔', href: '/attractions/collioure-harbour-fauvist-painters' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`科利尤尔・Collioure・法国・科利尤尔（东比利牛斯省）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，当你穿过一排排葡萄园和橄榄树林，一个转弯，整个地中海最热烈、最纯粹的色彩突然毫无保留地在你眼前炸开。这就是科利尤尔给我的第一击。那不是普通的蓝，是钴蓝、群青、宝石蓝混合着阳光，泼洒在海面上；岸边房子的墙壁是那种被太阳亲吻了几百年的暖黄、熟杏色和淡淡的玫瑰粉；而一艘艘被称为“点舟”的传统小渔船，则被漆成最鲜亮的朱红、翠绿和明黄，像玩具一样散落在碧蓝的海湾里。空气里有咸咸的海风味道，混合着港口咖啡馆飘出的咖啡香，以及不远处鱼市里刚上岸的海产那种清冽的腥气。
这里的声音是慵懒而富有节奏的。海浪轻轻拍打防波堤上巨型鹅卵石的哗哗声，渔船马达突突的闷响，露天餐厅里刀叉碰撞的清脆声响，还有当地老人用带着浓重加泰罗尼亚口音的法语闲聊的絮语。你会发现，那座著名的、有着粉色穹顶灯塔的圣文生教堂，并不只是一个景点，它是小镇生活的轴心。渔民清晨出海前会望它一眼，傍晚归来时它的钟声会响起；孩子们在它脚下的广场上追逐，恋人们在它旁边的长椅上依偎。艺术在这里不是被供奉在殿堂里的，而是呼吸在每一寸空气里，流淌在每一道光线中。
最打动人的，正是这种极致的生活感与极致的艺术性的水乳交融。你脚下被岁月磨得光滑的石板路，可能正是当年马蒂斯匆匆走过寻找画布的地方；你倚着的那面杏黄色的墙，也许就是德兰画中那一抹标志性的色块。当地人早已习惯了色彩，他们晾晒的床单是鲜亮的，市场的遮阳棚是条纹的，连卖的糖果都是彩虹色的。在这里，你会恍然大悟：不是野兽派画家创造了科利尤尔的色彩，而是科利尤尔本身那过于饱满的生命力，逼着他们甩掉了调色板上所有的灰暗，用最直接、最狂野的方式去记录它。这里的美，是不讲道理的，是扑面而来的，是让你瞬间忘记所有艺术理论，只想用眼睛大口呼吸的震撼。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，想象一下，当你穿过一排排葡萄园和橄榄树林，一个转弯，整个地中海最热烈、最纯粹的色彩突然毫无保留地在你眼前炸开。这就是科利尤尔给我的第一击。那不是普通的蓝，是钴蓝、群青、宝石蓝混合着阳光，泼洒在海面上；岸边房子的墙壁是那种被太阳亲吻了几百年的暖黄、熟杏色和淡淡的玫瑰粉；而一艘艘被称为“点舟”的传统小渔船，则被漆成最鲜亮的朱红、翠绿和明黄，像玩具一样散落在碧蓝的海湾里。空气里有咸咸的海风味道，混合着港口咖啡馆飘出的咖啡香，以及不远处鱼市里刚上岸的海产那种清冽的腥气。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里的声音是慵懒而富有节奏的。海浪轻轻拍打防波堤上巨型鹅卵石的哗哗声，渔船马达突突的闷响，露天餐厅里刀叉碰撞的清脆声响，还有当地老人用带着浓重加泰罗尼亚口音的法语闲聊的絮语。你会发现，那座著名的、有着粉色穹顶灯塔的圣文生教堂，并不只是一个景点，它是小镇生活的轴心。渔民清晨出海前会望它一眼，傍晚归来时它的钟声会响起；孩子们在它脚下的广场上追逐，恋人们在它旁边的长椅上依偎。艺术在这里不是被供奉在殿堂里的，而是呼吸在每一寸空气里，流淌在每一道光线中。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，正是这种极致的生活感与极致的艺术性的水乳交融。你脚下被岁月磨得光滑的石板路，可能正是当年马蒂斯匆匆走过寻找画布的地方；你倚着的那面杏黄色的墙，也许就是德兰画中那一抹标志性的色块。当地人早已习惯了色彩，他们晾晒的床单是鲜亮的，市场的遮阳棚是条纹的，连卖的糖果都是彩虹色的。在这里，你会恍然大悟：不是野兽派画家创造了科利尤尔的色彩，而是科利尤尔本身那过于饱满的生命力，逼着他们甩掉了调色板上所有的灰暗，用最直接、最狂野的方式去记录它。这里的美，是不讲道理的，是扑面而来的，是让你瞬间忘记所有艺术理论，只想用眼睛大口呼吸的震撼。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`科利尤尔`} />
                <InfoRow label="英文名称" value={`Collioure`} />
                <InfoRow label="正式名称" value={`Collioure`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`科利尤尔（东比利牛斯省）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`20世纪初野兽派绘画运动的诞生地与核心舞台，被誉为“法国画家村”。`} />
                <InfoRow label="建筑特色" value={`岩石海岸上矗立着赭石色屋顶的建筑群，核心是建于13世纪的皇家城堡与拥有独特灯塔钟楼的圣文生教堂共同勾勒出的标志性天际线。`} />
                <InfoRow label="建筑风格" value={`地中海加泰罗尼亚风格，混合了中世纪军事防御建筑与宗教建筑的粗犷与纯净。`} />
                <InfoRow label="文化价值" value={`一处将自然极致的光色、悠久的渔业传统与先锋现代艺术史完美融合的活态文化地标。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇本身全天开放。主要景点如皇家城堡（Château Royal）的开放时间随季节变化：夏季（4月至9月）通常为上午10点至晚上6点，有时会延长至7点；冬季（10月至3月）一般为上午9点至下午5点。圣文生教堂（Église Notre-Dame-des-Anges）通常全天开放供参观，但内部博物馆或有特定时段。建议出行前查询当地旅游局官网获取最新信息。小镇在圣诞节和元旦当天，部分商业设施会关闭。`} />
              <InfoRow label="门票价格" value={`进入科利尤尔小镇本身免费。参观皇家城堡需购票，成人票价约6欧元，有学生、青少年及团体优惠。圣文生教堂免费进入，但其著名的灯塔钟楼内部参观可能需要小额捐赠。镇上的野兽派艺术之路（Le Chemin du Fauvisme）是免费的户外徒步观赏路线。`} />
              <InfoRow label="地址" value={`Place du 8 Mai 1945, 66190 Collioure, France`} />
              <InfoRow label="交通方式" value={`最近的国际机场是佩皮尼昂-里韦萨尔特机场（Aéroport de Perpignan-Rivesaltes, PGF），距离约26公里。从机场可乘坐出租车，车程约30分钟，费用较贵。更经济的选择是乘坐机场巴士到佩皮尼昂火车站（Gare de Perpignan），然后转乘火车。从佩皮尼昂火车站出发，有频繁的区域列车（TER Occitanie）开往科利尤尔，车程约25-30分钟，班次每小时1-2班，沿途海景绝美，建议坐在列车行进方向的右侧。自驾从佩皮尼昂沿D114海岸公路向东行驶约20分钟即可到达，但小镇内停车位紧张且昂贵，建议将车停在镇外的收费停车场（如Plage du Boramar停车场）然后步行进入。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`科利尤尔的故事，远比那场轰轰烈烈的艺术革命要悠久得多。早在罗马时代，这里就是一个重要的葡萄酒和鱼酱贸易港。中世纪时，它的战略地位凸显，在沙滩与岩石交汇的岬角上，一座坚固的皇家城堡拔地而起，先后经历了马略卡王国、阿拉贡王国和法国国王的争夺与控制。你可以看到城堡厚重的石墙，那是权力更迭的无声证人。而那座独一无二的圣文生教堂，其前身是一座建于公元十世纪的小礼拜堂，后来在渔民和航海者的信仰中不断扩建。最特别的是它的钟楼——17世纪时，当局决定将一座旧灯塔改造成教堂钟楼，于是就有了今天我们看到的这个粉顶圆塔，它既是上帝的殿堂，也是为海上子民指引归途的明灯，这种务实的结合非常科利尤尔。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在漫长的岁月里，科利尤尔一直是个安静的渔村，居民靠着大海的馈赠生活，酿造着著名的天然甜葡萄酒。转机发生在1905年那个夏天。一个名叫亨利·马蒂斯的、正在为艺术寻找突破口的巴黎画家，受朋友之邀来到了这里。他被这里的光线击中了。他后来回忆说：“在地中海的阳光下，没有阴影，所有的阴影都是一整片明亮的蓝色。”与他同来的，还有安德烈·德兰。这两个“离经叛道”的年轻人，被这里的色彩彻底解放了。他们不再追求写实，而是用直接从颜料管里挤出的、未经调和的纯色来作画：橘红色的山，翠绿色的海，柠檬黄的天空。他们笔下的科利尤尔，是情绪和感觉的爆炸。当这些画作在巴黎的秋季沙龙展出时，震惊了评论界，一位批评家讥讽地称他们为“野兽”（Fauves），野兽派由此得名。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`马蒂斯和德兰像是打开了魔盒，随后毕加索、杜菲、布拉克等一大批现代艺术巨匠纷纷循迹而来。科利尤尔成了欧洲艺术的前沿沙龙。有趣的是，当地渔民起初对这些整天对着他们的船和房子发呆的“怪人”并不理解，但他们朴实而热情。马蒂斯曾租住在一家咖啡馆楼上，店主老太太会因为他画画忘了吃饭而给他留汤。艺术并没有高高在上，它融入了市井生活。这种传统延续了下来，整个二十世纪，这里都是画家、诗人和作家的避难所与灵感源。小镇也聪明地将这段历史化为血脉，设立了“野兽派艺术之路”，将当年画作的原型地立牌标注，让你可以拿着旧画，站在同一个角落，看一百多年后光影如何再次演绎传奇。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的科利尤尔，依然保持着双重身份。白天，它是游客如织的明珠；但当清晨和黄昏来临，游客散去，它便回归那个本真的渔港。你能看到渔民整理渔网，听到他们在小酒馆里谈论天气和收成。葡萄酒合作社里飘出发酵的香气，手工艺作坊里传来敲打金属的声音。它没有被艺术的光环架空，而是将艺术沉淀为生活美学的一部分。那段改变了艺术史的海边夏日，如今是小镇最珍贵的遗产，但它只是漫长历史中的一个华彩章节。科利尤尔的根基，始终是那片海，那些山，和世代生活于此、懂得与美共处的人们。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正感受科利尤尔的灵魂，我强烈建议你安排一整天的时间，并在这里住上一晚，体会它从清晨宁静到白日喧嚣，再到黄昏浪漫的完整韵律。理想的行程是从清晨开始，趁大批一日游的游客尚未涌入，独享港口和老街的静谧。上午阳光柔和，适合拍摄和探索艺术之路。中午享受一顿漫长的海鲜午餐，感受地中海的慵懒节奏。下午可以参观城堡、乘船出海或找个角落发呆。傍晚则是黄金时刻，光线将一切染上蜜糖色，务必在港口等待日落。这样的节奏能让你从观光客的状态中抽离，真正沉浸在这个色彩小镇的呼吸里。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季（7-8月）是绝对的高峰期，中午到下午港口区域会非常拥挤，尽量将核心游览安排在早晚。小心海边的鹅卵石，非常滑，穿一双防滑且不怕水的鞋子至关重要。在餐厅点海鲜前，务必确认价格，特别是按重量计价的鱼类，避免产生不愉快的账单惊喜。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`天刚蒙蒙亮时，就从老城狭窄的巷弄走向港口，看第一批渔船归航，闻着清冽的海腥味看渔民在晨光中卸下银光闪闪的渔获。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着挂满鲜花与彩陶的“哲学家小道”（Rue de la Fraternité）漫步，用手触摸那些被阳光晒得温热的、色彩各异的墙壁，寻找嵌在墙上的野兽派画作复制品标牌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进那座粉顶灯塔钟楼下的圣文生教堂内部，让你的眼睛适应昏暗，然后静静欣赏从彩色玻璃窗投入的、在海面反射下不断荡漾变幻的瑰丽光影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在港口边的“莫林海滩”（Plage du Boramar）选一块光滑的巨型鹅卵石坐下，把脚浸在清澈透凉的海水里，看孩子们跳水，什么都不想，只是感受阳光的重量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`正午时分，在老港旁的某家餐厅露台坐下，点一大盘当天捕捞的凤尾鱼、一碗地道的海鲜汤，配上一杯本地产的邦乌尔葡萄酒，让味蕾也加入这场色彩的狂欢。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午穿过连接城堡与陆地的栈桥，登上皇家城堡的露台，从高处俯瞰整个海湾那如调色盘般拼接起来的屋顶、海面与远山，风会很大，但视野无敌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前半小时，一定要回到港口防波堤的尽头，看着夕阳将皇家城堡的轮廓染成金红色，天空从橘粉过渡到紫蓝，而海面上的点点船影则化作黑色的剪影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐后不要急着回去，在几乎没有游客的老街里随意穿梭，听着从某扇敞开的窗户里飘出的钢琴声，或者去一家家庭经营的小酒吧，喝一杯当地人自酿的草药利口酒。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`防波堤尽头灯塔侧后方`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，以灯塔和皇家城堡为背景，等待一艘色彩鲜艳的“点舟”驶入画面，构图时将海面的金色波光纳入前景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣文生教堂内部南侧彩色玻璃窗前`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点至正午之间，阳光穿透描绘海上圣母的蓝色玻璃窗，在古老石柱上投射出梦幻的光影，拍摄时建议使用三脚架进行长曝光，捕捉光影流动的静谧感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从皇家城堡露台东南角向下俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午时段，阳光能较好照亮建筑群，使用长焦镜头压缩空间，将层层叠叠的赭石色屋顶、教堂粉顶和蓝色海湾框在同一画面内，形成完美的色块组合。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`老港北侧“佩德罗港”（Port d’Avall）的渔船停泊区`}</h4>
                  <p className="text-sm text-gray-700">{`清晨七点左右，柔和的光线均匀地洒在密密麻麻竖起的彩色桅杆上，从较低角度仰拍，以桅杆和绳索为前景，背景是苏醒中的彩色房屋，充满线条与色彩的交响。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`“野兽派之路”标牌10（马蒂斯《科利尤尔的窗户》原型地）`}</h4>
                  <p className="text-sm text-gray-700">{`位于Rue de l’Eglise，下午光线最佳，尝试还原画家视角，将那扇著名的窗户、阳台上的花盆与远处海景一同构图，焦点对准窗户，让背景略微虚化，讲述画作与实景的对话。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`科利尤尔的光线在中午非常强烈且对比度高，建议利用“黄金时刻”和“蓝色时刻”拍摄。拍摄渔民和当地居民时，请务必先微笑并征得同意，尊重他们的隐私和生活。飞无人机在法律上受到严格限制，尤其在城堡和港口上空，操作前务必仔细查阅法国最新空域法规。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-blue-800">{`入住一栋由17世纪渔民石屋改造的精品客栈，墙壁厚达一米，房间保留了原始的拱顶石结构和木梁，打开小窗就能听到海浪声，房东会为你准备自家果园的杏子酱早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`艺术之选`}</h4>
                  <p className="text-sm text-green-800">{`一家由画家后代经营的舒适民宿，每个房间都以一位曾旅居此地的艺术家命名，装饰着相应的画作复制品，客厅书架上塞满了艺术史书籍，仿佛住进了一个小型画廊。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在小镇西侧山丘上的五星级酒店，拥有俯瞰整个科利尤尔湾的无边泳池和露台，房间设计是现代地中海风格，巨大的落地窗将无敌海景引入室内，晚餐是荣获星级的创意海鲜料理。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-purple-800">{`位于老城边缘一座安静花园里的家庭式公寓，虽然设施简单，但带有一个种满柠檬树的小露台，主人是位退休渔夫，会很乐意和你分享他最爱的钓鱼地点和往事。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`科利尤尔的住宿非常抢手，尤其是夏季和艺术节期间，务必提前至少2-3个月预订。老城内的酒店和民宿多有台阶且不能停车，但氛围绝佳；住在镇外山坡上则需要上下步行，但视野开阔且更安静。无论住在哪里，夜晚散步回住处都是极其安全的，小镇治安良好。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开科利尤尔许久，我闭上眼睛，脑海里浮现的不是某一张具体的明信片风景，而是一种感觉——一种色彩饱和到几乎要溢出来的生命力，一种阳光、海盐与葡萄酒混合的微醺气息，一种艺术与生活毫无隔阂的松弛感。在这个追求效率、滤镜和打卡的世界里，科利尤尔像一个固执的旧梦。它告诉你，美可以不用那么复杂，不用去解构和分析，它就在那里，像地中海的阳光一样直接、热烈、不容分说地拥抱你。它让你重新相信眼睛最原始的快乐。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位热爱深度游的旅人，都应该来一次科利尤尔。不只是为了看一处风景，更是为了完成一次感知的“复位”。在这里，你会理解为什么一百多年前的那群画家会如此疯狂。因为当面对这种纯粹的美时，任何精巧的技法都显得多余，唯一诚实的回应，就是像野兽一样，用最本能、最鲜艳的色彩去呐喊。科利尤尔是一场对感官的盛大洗礼，它洗去的不是尘土，而是我们对世界日渐麻木的感知外壳。它提醒我们，生活本身，就是最伟大的艺术品。带上你最放松的心情和最能感知色彩的双眼来吧，让这个小小的海港，为你重新调色。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/rocamadour-sanctuary" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    罗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">罗卡马杜尔宗教圣地</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rocamadour</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vezelay-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    韦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">韦兹莱修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vézelay Abbey</p>
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
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
