import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '格拉达拉城堡 Gradara｜但丁笔下永恒爱恋与中世纪战争史诗的舞台 - 最佳欧洲景点',
  description: '车子沿着平缓的丘陵盘旋而上，远方的亚得里亚海像一抹浅蓝色的绸带。然后，毫无预兆地，它就出现了——格拉达拉。不是缓缓揭开面纱，而是以一种近乎霸道的姿态，占据整个山丘的制高点。夕阳正好为它镶上一道金边，那些赭红色的砖墙在暖光下仿佛在燃烧，而背后是深不见底的墨蓝色天空。那种视觉的冲击力，让你瞬间失语，心里...',
}

export default function GradaraCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '格拉达拉城堡', href: '/attractions/gradara-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`格拉达拉城堡・Gradara・意大利・格拉达拉`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着平缓的丘陵盘旋而上，远方的亚得里亚海像一抹浅蓝色的绸带。然后，毫无预兆地，它就出现了——格拉达拉。不是缓缓揭开面纱，而是以一种近乎霸道的姿态，占据整个山丘的制高点。夕阳正好为它镶上一道金边，那些赭红色的砖墙在暖光下仿佛在燃烧，而背后是深不见底的墨蓝色天空。那种视觉的冲击力，让你瞬间失语，心里只有一个念头：对，但丁故事里的城堡，就应该长成这样。
把车停好，穿过那道低矮的拱形城门，时光仿佛被调慢了。石板路被无数双脚打磨得温润发亮，路两边是售卖陶瓷和当地蜂蜜的小店，空气里飘着刚出炉的“皮adina”（一种意大利扁面包）的焦香和咖啡的醇厚。当地人拎着购物袋不紧不慢地走着，孩子们在小小的广场上追逐。城堡的巨影就笼罩在这一切日常之上，威严，却又奇异地融入其中。它不是冰冷的博物馆，更像是这个小镇跳动的心脏，是每个居民生活背景里永恒的一部分。
顺着主路向上走，压迫感越来越强。当你终于站在第一道宏伟的城墙前，仰头看着那些锯齿状的城垛和紧闭的吊闸门时，你会真切地感受到什么是“固若金汤”。风穿过城墙的箭孔，发出低沉的呜咽，那是历史的声音。然而，与这严酷军事感形成绝妙对比的，是关于爱情的传说。1295年，就在这里的高墙之内，贵族少女弗朗切斯卡·达·波伦塔与丈夫的弟弟保罗暗生情愫，最终惨遭杀害。但丁在《神曲·地狱篇》第五歌中，让这对恋人的灵魂在狂风中永远相拥、永远倾诉，使格拉达拉超越了砖石，成为了“永恒之爱”与“悲剧之美”的代名词。这种极致的刚烈与极致的柔美交织，正是它最致命的吸引力。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子沿着平缓的丘陵盘旋而上，远方的亚得里亚海像一抹浅蓝色的绸带。然后，毫无预兆地，它就出现了——格拉达拉。不是缓缓揭开面纱，而是以一种近乎霸道的姿态，占据整个山丘的制高点。夕阳正好为它镶上一道金边，那些赭红色的砖墙在暖光下仿佛在燃烧，而背后是深不见底的墨蓝色天空。那种视觉的冲击力，让你瞬间失语，心里只有一个念头：对，但丁故事里的城堡，就应该长成这样。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`把车停好，穿过那道低矮的拱形城门，时光仿佛被调慢了。石板路被无数双脚打磨得温润发亮，路两边是售卖陶瓷和当地蜂蜜的小店，空气里飘着刚出炉的“皮adina”（一种意大利扁面包）的焦香和咖啡的醇厚。当地人拎着购物袋不紧不慢地走着，孩子们在小小的广场上追逐。城堡的巨影就笼罩在这一切日常之上，威严，却又奇异地融入其中。它不是冰冷的博物馆，更像是这个小镇跳动的心脏，是每个居民生活背景里永恒的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`顺着主路向上走，压迫感越来越强。当你终于站在第一道宏伟的城墙前，仰头看着那些锯齿状的城垛和紧闭的吊闸门时，你会真切地感受到什么是“固若金汤”。风穿过城墙的箭孔，发出低沉的呜咽，那是历史的声音。然而，与这严酷军事感形成绝妙对比的，是关于爱情的传说。1295年，就在这里的高墙之内，贵族少女弗朗切斯卡·达·波伦塔与丈夫的弟弟保罗暗生情愫，最终惨遭杀害。但丁在《神曲·地狱篇》第五歌中，让这对恋人的灵魂在狂风中永远相拥、永远倾诉，使格拉达拉超越了砖石，成为了“永恒之爱”与“悲剧之美”的代名词。这种极致的刚烈与极致的柔美交织，正是它最致命的吸引力。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`格拉达拉城堡`} />
                <InfoRow label="英文名称" value={`Gradara`} />
                <InfoRow label="正式名称" value={`格拉达拉城堡（Castello di Gradara）`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`格拉达拉`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座因但丁《神曲》中不朽的爱情悲剧而被永远铭刻在西方文学史上的中世纪要塞。`} />
                <InfoRow label="建筑特色" value={`双重城墙防御体系是其最显著的特征，内城是巍峨的主堡与贵族宅邸，外城是绵延近800米的雄浑城墙与碉楼，构成了教科书般的中世纪城堡范本。`} />
                <InfoRow label="建筑风格" value={`以罗马式为基础，并在文艺复兴时期经历了优雅的改造与装饰，呈现出从军事堡垒向舒适宫殿过渡的独特混合风格。`} />
                <InfoRow label="文化价值" value={`它不仅是意大利保存最完好的中世纪城堡之一，更是一个文化符号，将真实的历史、家族的权力斗争与但丁笔下虚构的永恒爱情神话完美交融。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡全年开放，但时间随季节变动。夏季（通常为4月至9月）开放时间为上午8:30至晚上11:00，其中博物馆部分在晚上7:00关闭。冬季（10月至3月）开放时间缩短，通常为上午9:00至傍晚6:00，博物馆在下午5:00关闭。每周的休息日不固定，建议行前在其官网核查。特别提示：夏季的夜间开放极具魅力，城堡会点亮灯光，时常举办音乐会或戏剧活动。`} />
              <InfoRow label="门票价格" value={`全价票为10欧元。优惠票为8欧元（适用于18-25岁青年、教师等团体）。18岁以下青少年及欧盟艺术/建筑专业学生可凭有效证件免费入场。每月的第一个周日通常免费开放（仅限日间）。购买联票（城堡+城墙漫步）略有优惠。门票可在入口处购买，旺季时建议通过官网提前预订以避免排队。`} />
              <InfoRow label="地址" value={`Piazza V Novembre, 1, 61012 Gradara PU, Italy`} />
              <InfoRow label="交通方式" value={`格拉达拉位于意大利中部马尔凯大区与艾米利亚-罗马涅大区的交界处。最近的主要交通枢纽是里米尼（Rimini）。从里米尼中心火车站（Rimini Railway Station）出发，你可以乘坐130路巴士（Bonelli Bus公司运营），车程大约40-50分钟，直达格拉达拉古城门脚下。巴士班次在工作日较为频繁（约每小时一班），周末和节假日会减少，务必提前查询时刻表。从里米尼机场打车前往约需30分钟，费用约50-60欧元。如果你是自驾，从A14高速公路的“佩萨罗”（Pesaro）或“卡托利卡”（Cattolica）出口驶出，沿着清晰的“Gradara”棕色旅游指示牌行驶约15分钟即可抵达，城堡外围有收费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲格拉达拉的故事，得从两大家族说起：马拉泰斯塔和斯福尔扎。早在10世纪，这里就有一座简陋的瞭望塔，控制着连接罗马与拉文纳的要道。但真正让它崛起的，是13世纪佩萨罗的领主马拉泰斯塔·达·韦鲁基奥。这位老谋深算的军阀决定在此修建一座坚不可摧的堡垒，以巩固他对这片富饶土地的控制。工程持续了几十年，他的后代不断增筑，最终形成了我们今天看到的内外双重城墙的惊人格局。高墙深垒，壕沟环绕，格拉达拉成了军事工程学的杰作，也是马尔凯地区权力游戏的焦点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`就在城堡军事功能臻于完善的同时，一段足以让它名垂青史的“花边新闻”发生了。确切地说，是文学赋予了这段历史以不朽的灵魂。当时，马拉泰斯塔家族为了政治联盟，将美丽的弗朗切斯卡·达·波伦塔嫁给了家族成员“跛子”乔万尼·马拉泰斯塔。传说乔万尼其貌不扬，于是让英俊的弟弟保罗代为迎亲，弗朗切斯卡误将保罗认作丈夫，一见倾心。婚后，两人在格拉达拉的宫廷中暗通款曲，最终被乔万尼发现并双双刺死。这件事在当年或许只是贵族丑闻，但几十年后，流亡中的但丁听到了这个故事，将其升华。在《神曲》里，他没有谴责，而是给予了深切的同情，让这对恋人的灵魂在地狱第二层（惩戒色欲罪）的狂风中永不分离。从此，格拉达拉与保罗、弗朗切斯卡的名字紧紧绑定，从一座军事堡垒，一跃成为欧洲浪漫主义的文化地标。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`历史的车轮继续滚滚向前。15世纪，城堡迎来了另一位强权主人——斯福尔扎家族。尤其是那位著名的佣兵队长“风暴”亚历山德罗·斯福尔扎，他在巩固防御的同时，也为这座粗犷的堡垒注入了文艺复兴的优雅。他聘请艺术家装饰内部房间，修建了更舒适的居住空间和华丽的庭院。你可以想象，在战事间歇，这里也曾举办过宫廷宴会，回荡着诗琴的乐声。然而，和平是短暂的。随着教皇国势力的扩张，格拉达拉在16世纪被并入教会领地，其军事重要性逐渐下降，变成了一座行政中心和监狱，昔日的荣光慢慢蒙尘。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到20世纪初，一位名叫乌姆贝托·扎诺维的工程师购得了已成废墟的城堡。他倾尽家财，怀着惊人的热情与学识，对城堡进行了长达二十年的“历史性修复”。这不是推倒重建，而是小心翼翼地清理、加固，试图恢复其中世纪的原貌。正是他的努力，才让我们今天能行走在完整的城墙上，窥见当年房间的壁画碎片。1928年，他将修复一新的城堡捐赠给了意大利国家。从此，格拉达拉不再是私人财产，而是属于全人类的遗产，继续在它的山丘上，讲述着战争、权力、艺术与爱情的千年史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味格拉达拉，我强烈建议你在下午晚些时候抵达。这样可以避开一日游团队的高峰，享受相对清净的庭院和博物馆。整个深度游览大约需要3到4小时。路线遵循由外而内、由下而上的逻辑：先从外部感受其磅礴的军事气势和浪漫的文学光环，再进入内部探索贵族生活的细节与艺术珍藏，最后在黄昏时分登上城墙，收获一天中最壮丽的全景。这样的节奏张弛有度，让你既能沉浸于历史叙事，又能捕捉到光影变幻带来的视觉盛宴。如果运气好碰上夜间开放，别忘了留下来，看灯光如何为古城堡披上魔幻的外衣。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周末和夏季的上午十一点到下午三点是人流最密集的时候，尽量避开。城堡内部部分楼梯陡峭且狭窄，请务必穿一双舒适防滑的鞋子。参观时请保持安静，特别是在小房间内，尊重其他游客的体验，也更能让你捕捉到历史的细微声响。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从古城门进入，别急着冲向城堡，先在主街上感受小镇的生活脉搏，买一个刚烤好的橄榄油面包。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着缓坡走到城堡入口广场，在这里静静仰视几分钟，观察阳光在双重城墙和主堡塔楼上移动的轨迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入外城墙内部，触摸那些冰冷而巨大的石块，沿着士兵巡逻道走一段，想象自己是一名中世纪卫兵。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过内城门，进入领主庭院，注意看地面铺石的纹路和墙上的纹章，这里是城堡的心脏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`依次参观一层的大厅、武器库和地牢，感受从庄严到阴森的强烈对比，地牢的低矮穹顶会给你留下深刻印象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`上楼探索贵族私人房间，在“保罗与弗朗切斯卡之屋”驻足，聆听（或想象）那段悲剧爱情的回响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要登上主堡的屋顶露台或最高的塔楼，这是整个游览的高潮，360度的视野会让你明白这座城堡的战略价值。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，在日落前沿着完整的外城墙走一圈，从每一个角度回望主堡，看夕阳如何将它染成炽烈的金红色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`外城墙东南角仰拍主堡`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，站在外城墙的步行道上，用长焦镜头压缩空间，将主堡塔楼与深色城墙一同纳入画面，能拍出极具力量感和层次感的照片。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“致命阳台”远景构图`}</h4>
                  <p className="text-sm text-gray-700">{`从领主庭院的某个角落，拍摄传说中保罗与弗朗切斯卡可能幽会的那个小阳台，巧妙利用庭院拱门或窗框作为前景画框，增加故事性和纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城墙蜿蜒曲线全景`}</h4>
                  <p className="text-sm text-gray-700">{`登上城堡对面的公共观景台（就在停车场附近），在晴朗的早晨，可以拍到城堡双重城墙在丘陵上勾勒出的完美蜿蜒曲线，以及远处若隐若现的海洋。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`内厅光影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，当阳光斜射进装饰有文艺复兴风格壁画的房间（如“天使之屋”），等待光线在地板或旧家具上形成迷人的光斑和长长的影子，捕捉静谧的历史感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`亚得里亚海背景人像`}</h4>
                  <p className="text-sm text-gray-700">{`在最高的塔楼上，让你的同伴以湛蓝的亚得里亚海和绵延的丘陵为背景，拍摄侧影或回眸，风会吹起头发和衣角，画面充满史诗般的浪漫。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效减少砖石表面的反光，让城墙的颜色更加饱和厚重。无人机飞行在古城堡上空通常有严格限制，务必提前查询当地法规，未经许可请勿起飞。拍摄当地居民或店内场景前，请先微笑示意并获得同意，这是基本的礼貌。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在城墙脚下的“阿尔博戈小镇”家庭旅馆，房间简单干净，老板妈妈做的意大利面堪称一绝，晚上能听到城墙上传来的悠悠风声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`选择由17世纪修道院改建的精品酒店，石墙拱顶搭配现代设计家具，在宁静的回廊花园里用早餐，体验时空交错的静谧。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车十分钟前往附近丘陵上的“葡萄酒庄度假别墅”，独占一片橄榄树林，房间拥有直面格拉达拉城堡的无敌露台，在私人泳池边一边品着庄主自酿的桑娇维塞红酒，一边欣赏城堡的日落与亮灯。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`沉浸首选`}</h4>
                  <p className="text-sm text-purple-800">{`直接预订城堡官方管理的历史公寓（数量极少需提前数月），位于古城核心区的老建筑内，推开木窗就能触摸到沧桑的墙砖，真正像当地人一样生活几天。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`格拉达拉古城内非常安全，夜晚漫步极具情调，但路灯可能较暗，建议带个小手电。夏季是旺季，尤其是七八月，住宿价格会飙升且很快订满，最好提前三个月规划。如果追求更丰富的夜生活与餐饮选择，也可以住在车程半小时内的海滨城市如卡托利卡或里米尼，白天再来城堡游览。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开格拉达拉时，我的背包里好像装下了比砖石更重的东西。那不只是关于一座城堡的军事图解，或一个爱情故事的凄美版本。它是一种复杂的、层层累积的“存在感”。你脚下踩着的，是士兵奔跑御敌的步道；你手指触碰的窗棂，也许曾映照过文艺复兴时期某位贵妇的侧影；而你听到的风声，和但丁笔下吹拂着保罗与弗朗切斯卡灵魂的狂风，似乎来自同一个虚空。这里的历史没有被封存在玻璃柜里，它弥漫在空气中，附着在每一块砖石的温度里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求快速、平滑、即时的时代，格拉达拉固执地保留着它的棱角与重量。它不讨好你，只是矗立在那里，任你解读。你可以只为一睹但丁笔下的场景而来，却被其军事建筑的雄浑所震撼；你可以只为研究中世纪城堡结构而来，却又被那段超越时空的爱情隐喻所打动。它告诉我们，真正深刻的地方，永远是多重叙事的交织体——权力与爱情，战争与诗歌，石头与灵魂。这就是为什么，每一位渴望深度触摸欧洲脉搏的旅人，都应该来一次格拉达拉。它不是打卡点，而是一次时间的沉浸式对话。当你站在那圈著名的城墙上，看夕阳沉入远山，你会明白，有些地方，真的能让你同时听见心跳与历史的回音。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/vicenza-olympic-theater" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维琴察奥林匹克剧院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Teatro Olimpico Vicenza</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/pienza" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    皮
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">皮恩扎古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pienza</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/narni-medieval-hill-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    纳
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">纳尔尼古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Narni</p>
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
