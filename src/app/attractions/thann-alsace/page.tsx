import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '塔恩 Thann｜阿尔萨斯葡萄酒之路南端起点，探秘“女巫之眼”古堡与石雕圣经教堂 - 最佳欧洲景点',
  description: '说实话，第一眼看到塔恩，你可能不会立刻“哇”出声。它没有科尔马那么童话般的明信片质感，也不像斯特拉斯堡那样气势恢宏。火车缓缓进站，你首先看到的是一片安静的居民区和远处郁郁葱葱的山丘。但当你拖着行李，沿着指示牌走向老城中心，某种奇妙的宁静感就慢慢裹住了你。空气里有种清冽的甜香，混合着远处葡萄园土壤的气',
}

export default function ThannAlsacePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/france' },
            { label: '塔恩市', href: '/destinations/france' },
            { label: '塔恩', href: '/attractions/thann-alsace' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`塔恩・Thann・法国・塔恩市`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，第一眼看到塔恩，你可能不会立刻“哇”出声。它没有科尔马那么童话般的明信片质感，也不像斯特拉斯堡那样气势恢宏。火车缓缓进站，你首先看到的是一片安静的居民区和远处郁郁葱葱的山丘。但当你拖着行李，沿着指示牌走向老城中心，某种奇妙的宁静感就慢慢裹住了你。空气里有种清冽的甜香，混合着远处葡萄园土壤的气息、面包房刚出炉的“库格尔霍夫”蛋糕的黄油味，还有从雷努斯河飘来的、带着青苔味道的水汽。你的脚步踩在磨得发亮的鹅卵石上，发出好听的咯咯声，声音在老房子之间回荡，这些房子有着阿尔萨斯经典的木筋墙，但颜色更沉稳，像是被岁月和葡萄酒熏陶过。
然后，毫无预兆地，圣蒂博学院教堂的那座砂岩尖塔就出现了。它不是刺破天空的那种尖锐，而是一种坚实、稳重的存在，像一位沉思的老者。走近了，你才会真正愣住——西面那扇大门。那不是一扇门，那是一本翻开的、用石头写就的圣经！上百个人物雕像密密麻麻地布满拱门和壁龛，圣徒、先知、天使、还有繁复到令人眩晕的藤蔓花纹。下午的阳光斜斜地打在上面，给冰冷的石头镀上一层暖金，也让那些浮雕的阴影深邃得仿佛藏着无数故事。有鸽子扑棱棱飞过钟楼，翅膀的声音格外清晰。那一刻，你就知道了，塔恩的魅力不是喧嚣的，是等着你静静走近、细细品读的。
这座教堂对于塔恩人来说，远不止是个旅游地标。它是生活的轴心。周日早晨，你能看见一家老小穿戴整齐地走进教堂，弥撒的管风琴声和唱诗班的歌声厚重地流淌出来，溢满整个广场。午后，老人们坐在教堂投下的阴影里长椅上聊天，孩子们绕着喷泉追逐。而当你抬头望向城镇后方那座被森林覆盖的山丘，城堡废墟那只巨大的“眼睛”正空洞地凝视着这里的一切。这种组合构成了塔恩独一无二的灵魂：脚下是虔诚的日常与甜美的生活（葡萄酒），抬眼便是荒芜的历史与神秘的传说。它不急着向你展示什么，但只要你愿意停留，它会把阿尔萨斯几百年的悲欢离合，都轻轻放在你的手心里。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "说实话，第一眼看到塔恩，你可能不会立刻“哇”出声。它没有科尔马那么童话般的明信片质感，也不像斯特拉斯堡那样气势恢宏。火车缓缓进站，你首先看到的是一片安静的居民区和远处郁郁葱葱的山丘。但当你拖着行李，沿着指示牌走向老城中心，某种奇妙的宁静感就慢慢裹住了你。空气里有种清冽的甜香，混合着远处葡萄园土壤的气息、面包房刚出炉的“库格尔霍夫”蛋糕的黄油味，还有从雷努斯河飘来的、带着青苔味道的水汽。你的脚步踩在磨得发亮的鹅卵石上，发出好听的咯咯声，声音在老房子之间回荡，这些房子有着阿尔萨斯经典的木筋墙，但颜色更沉稳，像是被岁月和葡萄酒熏陶过。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然后，毫无预兆地，圣蒂博学院教堂的那座砂岩尖塔就出现了。它不是刺破天空的那种尖锐，而是一种坚实、稳重的存在，像一位沉思的老者。走近了，你才会真正愣住——西面那扇大门。那不是一扇门，那是一本翻开的、用石头写就的圣经！上百个人物雕像密密麻麻地布满拱门和壁龛，圣徒、先知、天使、还有繁复到令人眩晕的藤蔓花纹。下午的阳光斜斜地打在上面，给冰冷的石头镀上一层暖金，也让那些浮雕的阴影深邃得仿佛藏着无数故事。有鸽子扑棱棱飞过钟楼，翅膀的声音格外清晰。那一刻，你就知道了，塔恩的魅力不是喧嚣的，是等着你静静走近、细细品读的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座教堂对于塔恩人来说，远不止是个旅游地标。它是生活的轴心。周日早晨，你能看见一家老小穿戴整齐地走进教堂，弥撒的管风琴声和唱诗班的歌声厚重地流淌出来，溢满整个广场。午后，老人们坐在教堂投下的阴影里长椅上聊天，孩子们绕着喷泉追逐。而当你抬头望向城镇后方那座被森林覆盖的山丘，城堡废墟那只巨大的“眼睛”正空洞地凝视着这里的一切。这种组合构成了塔恩独一无二的灵魂：脚下是虔诚的日常与甜美的生活（葡萄酒），抬眼便是荒芜的历史与神秘的传说。它不急着向你展示什么，但只要你愿意停留，它会把阿尔萨斯几百年的悲欢离合，都轻轻放在你的手心里。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`塔恩`} />
                <InfoRow label="英文名称" value={`Thann`} />
                <InfoRow label="正式名称" value={`Thann, Alsace`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`塔恩市`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`阿尔萨斯葡萄酒之路的南端门户与历史重镇，以其神圣的朝圣教堂和充满传说的防御城堡，见证了该地区在法德之间的沧桑变迁。`} />
                <InfoRow label="建筑特色" value={`圣蒂博教堂拥有被赞为“阿尔萨斯最精美”的哥特式石雕西门拱，而山巅的城堡废墟则以其独特的圆形窗洞“女巫之眼”俯瞰众生。`} />
                <InfoRow label="建筑风格" value={`火焰哥特式风格在教堂建筑上展现得淋漓尽致，而城堡废墟则混合了中世纪军事防御建筑与后期文艺复兴的居住元素。`} />
                <InfoRow label="文化价值" value={`一个将虔诚的宗教艺术、严酷的军事历史、浪漫的民间传说与生生不息的葡萄园文化完美融合的活态文化遗产地。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`塔恩镇区全天可自由漫步。圣蒂博学院教堂内部开放时间通常为每日上午9点至下午6点（夏季可能延长至晚上7点），冬季或会提前至下午5点关闭；周一上午及宗教仪式期间可能不对外开放，建议出行前查阅最新公告。 “女巫之眼”城堡废墟全年24小时可抵达外部区域观景，但夜间无照明，建议日间游览。部分小型博物馆或酒窖开放时间较为灵活，需现场查看或预约。`} />
              <InfoRow label="门票价格" value={`进入塔恩古镇及在街道上漫步完全免费。圣蒂博学院教堂主体参观免费，但若想进入其珍宝室或登塔（如有开放）可能需要支付小额费用（通常约3-5欧元）。城堡废墟免费参观。镇上葡萄酒品鉴活动依酒庄不同，基础品鉴套餐约10-15欧元起。`} />
              <InfoRow label="地址" value={`Place Joffre, 68590 Thann, France`} />
              <InfoRow label="交通方式" value={`最近的国际机场是斯特拉斯堡机场或瑞士巴塞尔-米卢斯-弗赖堡欧洲机场。从斯特拉斯堡中央火车站乘坐TER列车前往塔恩站，车程约1小时，班次频繁（大约每小时一班），可在SNCF官网或车站购票。从米卢斯出发则更近，火车约20-30分钟。抵达塔恩站后，所有核心景点均在步行15分钟范围内，小镇布局紧凑，非常适合漫步探索。如果自驾，可将车停在镇外的免费停车场，然后步行进入迷人的老城区。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "塔恩的故事，始于一个传说和一滴“圣血”。据说，公元1160年，一位名叫乌巴尔德的天主教枢机在罗马去世，他的仆人、一位名叫蒂博的骑士，带着装有主人一滴血液的圣物瓶返回故乡阿尔萨斯。途经此地，他将圣物瓶挂在一棵杜松树上过夜，次日却发现瓶子如同生根般无法取下，并有一道神光环绕。这被视作神迹，人们在此地修建了一座小礼拜堂，供奉圣蒂博（即圣乌巴尔德），小镇也因此得名“Thann”（与德语“Tanne”，即冷杉树有关）。这颗“圣血”吸引了无数朝圣者，为这座小镇带来了最初的声望和财富，也直接催生了后来那座宏伟教堂的诞生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的繁荣与建设高峰是在14到16世纪。随着朝圣者络绎不绝，小镇财富积累，原来的小教堂显得局促。于是，从14世纪30年代起，一座全新的、配得上圣物的教堂开始建造。这就是我们今天看到的圣蒂博学院教堂。它断断续续建了将近两个世纪，凝聚了无数石匠、雕刻家和玻璃工匠的心血。尤其是它那扇西立面大门，堪称火焰哥特式的杰作，细腻的雕刻讲述了从创世纪到末日审判的完整圣经故事，不仅是为了彰显神的荣耀，也像一座巨大的“石头教科书”，向中世纪大多不识字的民众传播教义。这座教堂的建立，使塔恩成为了地区重要的宗教中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，宁静的虔诚生活总是与权力的争夺相伴。就在教堂下方的山丘上，为了控制进入孚日山脉的战略通道和富饶的平原，当地领主早在11世纪就修建了城堡。这座城堡在历史上多次易主，经历过扩建、围攻与毁坏。它最著名的特征，就是那个被称为“女巫之眼”或“魔鬼之眼”的巨大圆形窗洞。关于它，有个毛骨悚然的传说：一位领主与魔鬼达成协议，让魔鬼一夜之间建成城堡，代价是交出第一个踏入城堡的生命。狡猾的领主在城堡建成后，赶了一只狗进去。被欺骗的魔鬼暴怒，一拳在塔楼上打出了这个大洞，作为永恒的诅咒之眼，凝视着这片土地。传说固然可怕，但这个“眼睛”实际很可能是后期改建的文艺复兴式窗户，只是废弃后框架脱落，形成了如今诡谲的模样。城堡在1645年的三十年战争中被法国军队最终摧毁，沦为废墟。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此后的塔恩，随着宗教战争、法国大革命以及普法战争等历史洪流的冲刷，在法国与德国之间几度变换归属。它的教堂幸运地躲过了最严重的破坏，而山上的城堡则永远地保持了废墟的状态，如同一个永恒的伤疤和警示。进入20世纪后，尤其是二战后，塔恩找到了自己新的定位——作为阿尔萨斯葡萄酒之路的南端起点。它不再依靠军事或单一的朝圣经济，而是将深厚的历史、建筑瑰宝与周边绵延的葡萄园结合起来，吸引那些渴望深入探索、而不仅仅是匆匆一瞥的旅行者。从圣血传说到石头圣经，从魔鬼之眼到葡萄佳酿，塔恩的历史层叠交错，每一页都耐人寻味。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天给塔恩，才能真正体会它的晨昏之美。最好的方式是上午抵达，趁阳光正好、游客尚少时，专心探索圣蒂博教堂内部和细节。午后，当教堂内部光线变得强烈时，正是开始攀登城堡山的好时机，在树荫下徒步，于山顶享受凉风和全景。傍晚下山，在古镇小巷随意穿梭，找一家酒馆或葡萄酒窖，品尝当地的琼瑶浆或雷司令，看夕阳为教堂尖塔和木筋墙房屋披上金红色的外衣。这样的节奏张弛有度，既能深度感受宗教艺术的震撼，又能体验山林野趣，最后以阿尔萨斯最地道的风味收尾，完美地串联起塔恩的三大灵魂：信仰、历史与生活。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周日早晨教堂有弥撒，如需安静参观内部，请避开此时段或保持绝对安静尊重礼仪。
攀登城堡山的路径是修缮良好的步道，但仍需穿防滑舒适的鞋子，夏季请备好饮用水并注意防蚊。
镇中心部分石板路凹凸不平，拖行行李箱会非常吃力，建议将大件行李寄存在火车站或酒店。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨趁着第一缕阳光正好柔和地打在教堂西立面时，站在广场上细细品味那扇“石质圣经”拱门上每一尊雕像的生动表情与精妙衣纹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`轻轻推开厚重的木门走进教堂中殿，让眼睛适应片刻昏暗，然后抬头仰望那高达22米的网状肋拱穹顶，感受那份直击心灵的崇高与肃穆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着侧廊慢行，寻找那扇描绘圣蒂博传说的彩绘玻璃窗，以及古老的管风琴，想象数百年来在此回响的圣咏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂北侧的小巷出发，沿着清晰标识的“城堡小径”开始攀登，穿过宁静的居民区和开始散发松香与泥土气息的森林。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`约半小时后气喘吁吁地抵达城堡废墟，第一件事不是看残垣断壁，而是转身走到悬崖边，让整个上莱茵河谷、塔恩红屋顶小镇以及远处蜿蜒的葡萄酒之路全景图扑面而来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探索废墟内部，找到那个著名的“女巫之眼”窗洞，试着从那个独特的视角向外张望，感受传说带来的那一丝诡谲与历史的苍凉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后绕到古镇东侧，沿着雷努斯河散步，看水流潺潺穿过古老的水车与民居，这里藏着小镇最静谧生活化的一面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分，选择老城内一家挂着传统锻铁招牌的“Winstub”（酒馆），点一份酸菜腌肉锅配上一杯本地特产的“Rangen”特级园葡萄酒，用味蕾铭记阿尔萨斯的味道。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`教堂西门全景仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`最佳时间是上午九点到十一点，阳光从东南方照射，能完美照亮整个浮雕拱门的细节且阴影立体，建议使用广角镜头蹲低拍摄，将庄严的大门与高耸的尖塔一同纳入画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“女巫之眼”框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，阳光从西面照射城堡废墟，走进主塔楼内部，将相机镜头对准那个著名的圆形窗洞，以窗洞为画框，拍摄框外远处的城镇、教堂和葡萄园，形成强烈的古今与内外对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`葡萄园前景与小镇全景`}</h4>
                  <p className="text-sm text-gray-700">{`从城堡山南侧下山的小路上，有几处开阔地，以斜坡上整齐的葡萄藤作为前景，中景是塔恩镇密密麻麻的红屋顶与教堂尖塔，远景是孚日山脉的绵延曲线，傍晚蓝调时刻拍摄尤为迷人。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`雷努斯河倒影`}</h4>
                  <p className="text-sm text-gray-700">{`在古镇东侧横跨雷努斯河的小石桥（如“磨坊桥”）上，清晨无风时，可以拍摄沿岸古老木筋墙房子在水中完美倒影的静谧画面，充满生活气息。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`教堂内部允许非闪光灯摄影，但在举行宗教仪式时请绝对避免拍摄，以示尊重。`}</li>
                <li>• {`使用偏振镜可以有效减少教堂内彩绘玻璃及外面砂岩浮雕的反光，让色彩和细节更突出。`}</li>
                <li>• {`城堡废墟某些区域砖石松动，寻找机位时务必注意脚下安全，切勿为了拍照冒险攀爬危险残垣。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`老城中心一家由古老半木结构房屋改造的家庭式旅馆，房间不大但充满暖意，女主人会为你准备丰盛的阿尔萨斯风格早餐，果酱都是自家熬的。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`位于附近葡萄园山坡上的独立农庄，提供宽敞的公寓住宿，推开窗就是无边无际的葡萄藤海，夜晚无比静谧，可以参加房东组织的清晨葡萄园漫步。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在镇外山丘上一座19世纪贵族庄园改造的精品酒店，拥有奢华的花园和俯瞰整个平原的无边泳池，房间内饰融合了古典优雅与现代设计，水疗中心使用的也是本地葡萄酒提取物。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`便捷之选`}</h4>
                  <p className="text-sm text-purple-800">{`火车站附近步行五分钟内的现代酒店，设计简洁明亮，对于搭乘火车游览阿尔萨斯各个小镇的旅行者来说位置无敌方便，并且通常提供地下停车场。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（尤其是葡萄酒节期间）和圣诞市场时段住宿非常紧张，务必提前数月预订。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果选择住在葡萄园区的农庄，虽然风景绝佳，但前往镇中心餐厅需要用晚餐可能需要短途驾车或预约出租车。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "塔恩整体治安非常好，夜晚漫步也很安全，但无论住在哪里，保管好个人财物总是旅行常识。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开塔恩时，我的背包里没有多出什么纪念品，但心里却好像被填进了一些沉甸甸的、带着时光温度的东西。那不只是关于一座教堂的艺术成就，或一个城堡的悲壮历史，而是一种独特的“完整性”。在这个不算大的地方，你几乎能触碰到阿尔萨斯灵魂的每一个维度：信仰的虔诚与艺术的极致，战争的创伤与传说的神秘，土地的馈赠与生活的欢愉。它像一颗被岁月仔细打磨的多面水晶，每一面都折射出不同的光彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求快餐式打卡的时代，塔恩坚持着自己的节奏。它不会用炫目的灯光秀迎接你，只会用清晨面包房的香气；它不会编造热闹的传奇，只会让那只沉默的“女巫之眼”与你对视。它要求你慢下来，用脚步去丈量从教堂到城堡的距离，用心去分辨石头雕刻里隐藏的故事，用时间去等待一杯葡萄酒在杯中绽放出属于这片风土的味道。来这里，不是为了收集一个地名，而是为了完成一次微小的、却深刻的时间旅行，让自己沉浸在一种层层叠叠的历史与生活交织的质感里。如果你也渴望在旅途中，找到一处能让心跳与钟摆同步的地方，那么塔恩，这个阿尔萨斯葡萄酒之路的安静起点，绝对值得你为它停留完整的一天，甚至更久。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kaysersberg-alsace" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    凯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">凯瑟斯贝格</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kaysersberg</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-cormatin" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科尔马坦城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Cormatin</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/uzerche-limousin-pearl" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    于
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">于泽什</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Uzerche</p>
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
