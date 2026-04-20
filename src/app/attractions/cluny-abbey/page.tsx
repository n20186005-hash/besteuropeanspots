import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '克吕尼修道院 Cluny Abbey｜圣彼得大教堂前的世界之巅，沉睡的罗马式巨构 - 最佳欧洲景点',
  description: '车子驶入克吕尼小镇的时候，你可能会有点恍惚。这里太安静了，安静得不像一个曾震动欧洲的中心。阳光透过梧桐树叶，在蜂蜜色的石墙上洒下晃动的光斑，街道窄窄的，偶尔有骑着自行车的学生叮铃铃地掠过——是的，这里现在是一所国立农业工程学院的校园，生活气息扑面而来。然后，你拐过一个不起眼的弯，一片巨大的、近乎空旷',
}

export default function ClunyAbbeyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '克吕尼修道院', href: '/attractions/cluny-abbey' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`克吕尼修道院・Cluny Abbey・法国・克吕尼`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶入克吕尼小镇的时候，你可能会有点恍惚。这里太安静了，安静得不像一个曾震动欧洲的中心。阳光透过梧桐树叶，在蜂蜜色的石墙上洒下晃动的光斑，街道窄窄的，偶尔有骑着自行车的学生叮铃铃地掠过——是的，这里现在是一所国立农业工程学院的校园，生活气息扑面而来。然后，你拐过一个不起眼的弯，一片巨大的、近乎空旷的广场突然展开在眼前。没有预想中拔地而起、直插云霄的哥特式尖塔，只有几段沉默的、高得令人心悸的赭黄色石墙，像巨人的残肢，倔强地指向蓝天。那一刻，声音仿佛被吸走了，只剩下风穿过石缝的呜咽，和你自己骤然放轻的呼吸。
走近些，感官才慢慢苏醒过来。你的脚踩在历经千年磨损变得光滑温润的石板路上，空气里弥漫着青苔、老石头和远处草坪被修剪过的混合气息。抬起头，那些残存的拱券和柱头雕刻，尽管面目模糊，却依然能感受到当初工匠手下那股磅礴的、想要接近神明的力量。最震撼的是走入那仅存的“南翼耳堂”，它如今像一个没有顶的、露天的巨型石制盆景。你站定在中央，试着想象：这里曾经是中殿的一部分，而中殿的拱顶最高处离地面有足足三十多米，相当于今天的十层楼高。公元1100年，当第一批朝圣者走进完工的主殿时，那种被纯粹的、向上的空间所包裹的眩晕感，该是多么的虔诚与恐惧交织。如今，鸽子在曾经是拱顶的位置盘旋，阳光毫无遮拦地倾泻而下，把巨大的墩柱影子拉得老长。时间在这里不是流逝的，而是凝固的、可触摸的实体。
你很快会发现，这片宏大的遗址并非一个被供奉起来的孤独古董。穿着牛仔裤的学生抱着书本从古老的拱门下匆匆走过；当地人牵着狗在遗址边的草坪上悠闲散步；那栋漂亮的让·德·波旁宫（现在是博物馆）里，孩子们正对着中世纪雕塑做素描。修道院的魂，早已渗入了小镇的日常肌理。它的石头被拆去建了镇上的房子，它的精神化作了一种沉稳而内敛的生活节奏。在这里，辉煌与废墟、神圣与世俗、历史与当下，以一种奇异的、诗意的和谐共存着。它最打动人心的地方，或许正是这种巨大的反差——你站在废墟上，凭借着一堵墙、一根柱子的尺度，去奋力拼凑一个失落世界的全貌，这个过程本身就充满了哲思与敬畏。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子驶入克吕尼小镇的时候，你可能会有点恍惚。这里太安静了，安静得不像一个曾震动欧洲的中心。阳光透过梧桐树叶，在蜂蜜色的石墙上洒下晃动的光斑，街道窄窄的，偶尔有骑着自行车的学生叮铃铃地掠过——是的，这里现在是一所国立农业工程学院的校园，生活气息扑面而来。然后，你拐过一个不起眼的弯，一片巨大的、近乎空旷的广场突然展开在眼前。没有预想中拔地而起、直插云霄的哥特式尖塔，只有几段沉默的、高得令人心悸的赭黄色石墙，像巨人的残肢，倔强地指向蓝天。那一刻，声音仿佛被吸走了，只剩下风穿过石缝的呜咽，和你自己骤然放轻的呼吸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近些，感官才慢慢苏醒过来。你的脚踩在历经千年磨损变得光滑温润的石板路上，空气里弥漫着青苔、老石头和远处草坪被修剪过的混合气息。抬起头，那些残存的拱券和柱头雕刻，尽管面目模糊，却依然能感受到当初工匠手下那股磅礴的、想要接近神明的力量。最震撼的是走入那仅存的“南翼耳堂”，它如今像一个没有顶的、露天的巨型石制盆景。你站定在中央，试着想象：这里曾经是中殿的一部分，而中殿的拱顶最高处离地面有足足三十多米，相当于今天的十层楼高。公元1100年，当第一批朝圣者走进完工的主殿时，那种被纯粹的、向上的空间所包裹的眩晕感，该是多么的虔诚与恐惧交织。如今，鸽子在曾经是拱顶的位置盘旋，阳光毫无遮拦地倾泻而下，把巨大的墩柱影子拉得老长。时间在这里不是流逝的，而是凝固的、可触摸的实体。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你很快会发现，这片宏大的遗址并非一个被供奉起来的孤独古董。穿着牛仔裤的学生抱着书本从古老的拱门下匆匆走过；当地人牵着狗在遗址边的草坪上悠闲散步；那栋漂亮的让·德·波旁宫（现在是博物馆）里，孩子们正对着中世纪雕塑做素描。修道院的魂，早已渗入了小镇的日常肌理。它的石头被拆去建了镇上的房子，它的精神化作了一种沉稳而内敛的生活节奏。在这里，辉煌与废墟、神圣与世俗、历史与当下，以一种奇异的、诗意的和谐共存着。它最打动人心的地方，或许正是这种巨大的反差——你站在废墟上，凭借着一堵墙、一根柱子的尺度，去奋力拼凑一个失落世界的全貌，这个过程本身就充满了哲思与敬畏。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`克吕尼修道院`} />
                <InfoRow label="英文名称" value={`Cluny Abbey`} />
                <InfoRow label="正式名称" value={`Cluny Abbey`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`克吕尼`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`在长达三个世纪的时间里，它是整个基督教世界规模最宏大、影响力最深远的宗教建筑，直到罗马新圣彼得大教堂的崛起。`} />
                <InfoRow label="建筑特色" value={`以惊人的尺度、严谨的几何比例和卓越的声学设计著称，虽主体已毁，但其残存的南翼耳堂仍能窥见当年“第二个罗马”的磅礴气度。`} />
                <InfoRow label="建筑风格" value={`克吕尼罗马式风格，融合了勃艮第地方特色与创新的建筑理念，是罗马式艺术发展到顶峰的代表。`} />
                <InfoRow label="文化价值" value={`作为本笃会改革运动的中心，它不仅是中世纪宗教权力的象征，更是欧洲学术、艺术和音乐传播的灯塔，其建筑形制影响了整个西方基督教世界的数百座教堂。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`遗址与博物馆全年开放，但开放时间随季节调整。夏季（5月至9月）通常为每日9:30-18:00；冬季（10月至次年4月）开放时间缩短，通常为10:00-17:00，每周二闭馆。修道院塔楼（钟楼）的开放时间更为有限，通常仅在夏季的特定时段允许登顶，建议出行前务必在官网核实最新时刻表。节假日如圣诞节和元旦可能全天关闭。`} />
              <InfoRow label="门票价格" value={`包含遗址、博物馆及临时展览的联票成人价约为9.5欧元。优惠票（学生、65岁以上老人等）约为7.5欧元。18岁以下青少年及欧盟国家26岁以下学生可免费入场。语音导览设备租赁费用约为3欧元。每年第一个周日（除旅游旺季7-8月外）可免费参观常设展览。`} />
              <InfoRow label="地址" value={`Palais Jean de Bourbon, Rue du 11 Août 1944, 71250 Cluny, France`} />
              <InfoRow label="交通方式" value={`最便捷的方式是先抵达法国东部交通枢纽里昂。从里昂帕丢火车站（Lyon-Part-Dieu）乘坐TER区域火车前往马孔城（Mâcon），车程约1小时，班次频繁。抵达马孔维尔火车站（Mâcon-Ville）后，转乘前往克吕尼的63路公共汽车（Transco公司运营），车程约40分钟，但班次较少（工作日约每小时一班，周末大幅减少）。更灵活的选择是在马孔火车站打车前往克吕尼，车程约25分钟，费用约40-50欧元。自驾是最方便的选择，从里昂出发沿A6高速公路向北，在“Mâcon-Sud”出口驶出，沿D980/D15号公路行驶约20公里即可抵达克吕尼小镇，小镇外围有指示清晰的免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从公元910年的秋天讲起。那时候，欧洲还陷在加洛林帝国解体后的混乱里，贵族纷争，维京人肆虐，连许多修道院也荒淫腐败，背离了清规。就在这片泥沼中，阿基坦公爵威廉一世，一位被称为“虔诚者”的贵族，做了一件改变历史的事。他在勃艮第的这片森林与河流环绕之地，捐出了一块自己的猎场，建立了一座新的修道院。关键是他立下规矩：这座修道院将直接听命于罗马教皇，不受任何当地领主或主教的控制，并且要严格回归本笃会最初的会规——祈祷、劳作、研读。这个看似简单的决定，就像在死水中投入一颗石子，涟漪最终波及了整个欧洲。克吕尼，从此成了宗教改革与纯净信仰的代名词。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`此后的两百年，是克吕尼的黄金时代。它像一块巨大的磁石，吸引了全欧最虔诚、最有才华的修士。第二代修道院长奥迪洛将其发展为修道院联盟的母院，各地修道院纷纷依附，形成了强大的“克吕尼体系”，鼎盛时旗下拥有上千所修道院。财富、知识和权力汇聚于此，原来的小教堂很快不够用了。于是，一场持续了整整两个世纪的“建筑马拉松”开始了。1088年，在院长圣休的领导下，他们决定建造一座配得上其精神领袖地位的、前所未有的教堂。这就是被称为“克吕尼第三教堂”的旷世巨构。想象一下当时的工地：成千上万的石匠、雕刻家、玻璃匠从各地赶来，采石场昼夜不息，最新的数学与几何知识被用于设计。当它最终在1130年左右基本完工时，整个西方世界都为之屏息——长达187米，中殿拱顶高达30米，拥有五座雄伟的塔楼。在接下来的近三百年里，它就是基督教世界建筑的巅峰，是朝圣者口中“人间最接近天堂的地方”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的影响力远远超出了石头与灰浆。克吕尼修道院是当时欧洲的“文化数据中心”。它的图书馆藏书浩瀚，修士们誊写古籍，创作音乐（著名的克吕尼记谱法在此发展），研究科学。它的礼拜仪式华丽而漫长，钟声按照一套复杂的体系鸣响，据说能从克吕尼一直编排到耶路撒冷。这里发出的每一道宗教指令，都影响着从西班牙到波兰的信仰生活。然而，绝对的权力与财富也埋下了衰落的种子。后来的修道院日益贵族化，建筑极尽奢华，引起了像圣伯尔纳铎这样的改革者的激烈批评，他领导的新兴的西多会倡导极简与苦修，恰恰站在了克吕尼奢华风格的对立面。与此同时，法兰西王权日益强大，不再需要这样一个“国中之国”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的致命一击来自1789年。法国大革命的风暴席卷一切，象征旧秩序的修道院首当其冲。1790年，修道院被查封。接下来的十年是一场漫长的、令人心碎的“死亡”。革命政府将这座伟大的建筑视为“国家的石头矿场”。它被公开拍卖、拆毁。巨大的石块被一块块编号、运走，用于建造镇上的房屋、围墙，甚至铺路。到1823年，当浪漫主义作家普罗斯佩·梅里美到访时，他看到的已主要是我们今天所见的废墟。具有讽刺意味的是，正是这种系统的破坏，让后人能像考古学家一样，清晰地看到这座巨构的建造层次与精妙基础。十九世纪后期，法国政府买回了部分遗址，并在此建立了国立高等艺术学院，以一种全新的方式延续了这片土地与知识和艺术的缘分。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正感受克吕尼的魂，建议安排一整天时间，从容不迫地浸入其中。最佳抵达时间是上午九点半开馆前后，此时的阳光斜照，能为废墟勾勒出最富戏剧性的光影，游客也相对稀少。整体游览节奏宜慢不宜快，预计需要5-6小时。顺序上，强烈建议先参观博物馆（让·德·波旁宫），那里精致的模型、复原图和从遗址抢救出来的精美柱头雕刻，能为你接下来的“废墟漫步”提供至关重要的蓝图和背景知识，让你的想象有所依托。随后再步入那片开阔的遗址，你便能“看见”更多。下午可以在小镇静谧的街巷中漫步，寻找那些来自修道院的“二手石头”，最后登上一处高地，在夕阳下回望这片沉睡的巨构，完成一次从知识到感官再到情感的完整朝圣。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`遗址地面多为原始石板和草地，请务必穿一双舒适防滑的步行鞋，高跟鞋在这里将寸步难行。
夏季勃艮第的阳光非常强烈，遗址区几乎毫无遮阴，请备好帽子、太阳镜和充足的饮用水。
如果时间有限，建议优先确保博物馆和主遗址区的游览，附属建筑和远距离观景点可以酌情安排。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先走进让·德·波旁宫博物馆，在那个巨大的建筑剖面模型前停留十分钟，努力记住中殿、耳堂和后殿的恢弘布局。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`然后从博物馆后门直接步入遗址核心区，站在标识着“中殿”位置的空旷广场中央，闭上眼睛，尝试用耳朵和皮肤去感受那已然消失的、高达三十米的内部空间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要去触摸并仔细端详南翼耳堂那几根幸存的巨大复合柱，上面依稀可辨的编织纹与莲花纹雕刻，是克吕尼石匠手艺的无声证明。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到那座被称为“钟楼”的残缺塔楼基座，爬上其内部的狭窄旋梯，这是整个遗址唯一能让你获得一个略微俯瞰视角的地方。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过遗址，探索后方静谧的“法罗花园”，这里曾是修道院的内院，如今草木芬芳，是坐下来消化历史震撼的绝佳之处。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`别忘了参观遗址东侧那些保存完好的附属建筑，如十五世纪的马厩和巨大的粮仓，它们展现了修道院作为一个自给自足“王国”的日常一面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`留出至少一小时毫无目的地在克吕尼小镇的巷弄里游荡，你的目光会惊喜地发现许多民居墙壁上镶嵌着带有明显雕刻痕迹的古老石块。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在离开前，务必沿着德尼斯帕潘路往上走一小段，在一个开阔的转弯处回望，你会看到遗址与小镇屋顶交织在一起的、最经典的全景画面。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`博物馆三楼东侧窗户的“画框取景”`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，从这个古老的石窗框望出去，恰好能将废墟中最雄伟的南翼耳堂墙体作为焦点，构成一幅天然的历史画作。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`南翼耳堂内部仰拍角度`}</h4>
                  <p className="text-sm text-gray-700">{`站在一根巨柱之下，使用广角镜头垂直向上拍摄，捕捉石柱与蓝天构成的极简几何图形，最佳光线在正午当阳光直射入这个“石井”时。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`遗址西侧围墙边的长焦视角`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚日落前，利用长焦镜头压缩空间，将残存的拱门、远处的钟楼以及更远处小镇的屋顶层层叠叠地拍进一个画面，富有深度。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`法罗花园尽头回望钟楼`}</h4>
                  <p className="text-sm text-gray-700">{`春夏季，以花园中繁茂的薰衣草或玫瑰作为前景，拍摄后方被绿意环绕的古老钟楼废墟，生机与寂灭的对比油然而生。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`小镇高处“莱斯阿勒日”观景点`}</h4>
                  <p className="text-sm text-gray-700">{`导航到此，日落金色时刻，可以拍到克吕尼修道院遗址全景与小城镇和谐共存的宽阔画面，是全景摄影的绝佳位置。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尝试用黑白模式拍摄遗址，能极大地强化石头的质感、光影的对比和历史的沧桑感，过滤掉现代色彩的干扰。`}</li>
                <li>• {`尊重遗址规定，使用无人机拍摄前务必查询当地法规并申请许可，因为遗址毗邻学校和居民区。`}</li>
                <li>• {`拍摄当地人或在博物馆内拍摄艺术品前，请先礼貌地征得同意，保持安静的拍摄状态也是对这片宁静之地的尊重。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`镇上由老石头房子改造的家庭式民宿，主人可能就住在隔壁，早晨会为你端来自制的果酱和热乎乎的长棍面包，并分享一些地图上找不到的散步小径。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`入住由修道院昔日附属建筑精心修复的精品酒店，房间保留了原始的拱顶和厚实的石墙，夜晚万籁俱寂，你仿佛能听到几个世纪前的祈祷回声。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`选择坐落在附近丘陵葡萄园中的一座19世纪庄园酒店，在房间的阳台上就能眺望克吕尼小镇的全景，并享用酒店自产的勃艮第葡萄酒来搭配晚餐。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`学院风情`}</h4>
                  <p className="text-sm text-purple-800">{`预订小镇上由学生公寓在假期改造的简约客房，价格极其亲民，而且能让你完全融入这座“大学小镇”的日常节奏，体验最地道的本地生活。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`克吕尼是一个非常宁静的乡村小镇，夜间娱乐活动很少，大部分餐厅在晚上九点后就不再接待新客，请合理安排晚餐时间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季旅游旺季和学院开学时期住宿相对紧张，建议至少提前两周预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇治安非常好，可以放心夜游，但街灯可能比较昏暗，带一支小手电筒会更为方便。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开克吕尼很久以后，我脑海里反复回味的，不是它曾有多伟大，而是它如今的那种“安静的缺席”。它没有像许多完好的大教堂那样，用依然鲜亮的彩窗和持续不断的管风琴声包裹你、征服你。相反，它把你置于一片空白之中，然后给你几块碎片，一把钥匙（那些知识），邀请你自己去完成那座看不见的殿堂的搭建。这个过程需要耐心，需要想象，更像一种精神上的主动参悟。当你终于在自己的脑海中，让那些倒下的圆柱重新立起，让消失的拱顶再度合拢时，你所获得的震撼与成就感，是任何现成的壮观景象都无法给予的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求即时满足、一切都被完整呈现的快节奏世界里，克吕尼提供了一种稀缺的、深度的旅行体验。它教会我们，有时候，废墟比完整的建筑更有力量，因为它讲述了关于时间、权力、荣耀与消亡的全部故事。它不回避衰落与破坏，坦然展示历史的另一面——不仅仅是创造，还有失去。对于热爱深度游的旅人而言，克吕尼不是一道轻易能下咽的风景，而是一颗需要慢慢反刍的橄榄。它初尝是废墟的苦涩与苍凉，但回味里，却有无穷的、关于永恒与变迁的甘甜哲思。来到这里，你不仅是参观一个景点，更是完成一次与时间本身的对话。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/hospices-de-beaune" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博讷主宫医院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hospices de Beaune</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/place-vendome-paris" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    旺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">旺多姆广场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Place Vendôme</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-fougeres" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    富
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">富热尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Fougères</p>
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
