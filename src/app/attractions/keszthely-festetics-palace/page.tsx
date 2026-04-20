import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '凯斯特海伊费斯泰蒂奇宫｜匈牙利巴拉顿湖畔的柠檬黄宫殿与“隐藏图书馆”传奇 - 最佳欧洲景点',
  description: '车子缓缓驶近凯斯特海伊，你会先被道路两旁高大、整齐的法国梧桐所吸引，阳光穿过枝叶，在路上投下晃动的光斑。然后，一个转弯，那片传说中的柠檬黄色就毫无预警地跳进了你的视野——不是想象中城堡那种灰扑扑的威严，而是像一大块刚切开的、鲜亮的柠檬蛋糕，被小心翼翼安放在翡翠色草坪的托盘上。那一瞬间，欧洲宫殿常见的...',
}

export default function KeszthelyFesteticsPalacePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '凯斯特海伊（费斯泰蒂奇宫）', href: '/attractions/keszthely-festetics-palace' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`凯斯特海伊（费斯泰蒂奇宫）・Keszthely (Festetics Palace)・匈牙利・凯斯特海伊`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子缓缓驶近凯斯特海伊，你会先被道路两旁高大、整齐的法国梧桐所吸引，阳光穿过枝叶，在路上投下晃动的光斑。然后，一个转弯，那片传说中的柠檬黄色就毫无预警地跳进了你的视野——不是想象中城堡那种灰扑扑的威严，而是像一大块刚切开的、鲜亮的柠檬蛋糕，被小心翼翼安放在翡翠色草坪的托盘上。那一瞬间，欧洲宫殿常见的沉重历史感，被这种明媚的、几乎带着甜味的色彩奇妙地稀释了。空气里有青草被晒暖的味道，混杂着从巴拉顿湖方向吹来的、微咸而湿润的风。
走近了，你会听到马蹄踩在碎石路上的“咔嚓”声，不是来自幻想，而是宫殿附属的马术学校正在进行日常训练。穿着得体马裤的骑手和油光水滑的马匹，仿佛是从宫殿旧画中走出来的活道具。宫殿前庭没有拒人千里的铁栅栏，只有低矮的绿篱，当地人推着婴儿车、牵着狗，从容地从宫殿侧面穿过，去往后面的公园。这座宫殿似乎从未真正“死”去，它从18世纪起就被它的主人们有意经营成一个向社区开放的文化中心，这种亲民的基因一直流淌至今。那种感觉，不是参观一个被供奉起来的博物馆，而是拜访一位依然活跃、品味极佳的老贵族朋友的家。
穿过拱门进入内庭，喧嚣忽然被隔绝在外。环绕你的，是三层楼高的优雅拱廊，鹅卵石地面被岁月打磨得光滑如镜。抬起头，你能看到每一扇窗户上精致的铸铁栏杆，以及窗台上绽放的红色天竺葵。最动人的是那份宁静——不是空无一人的死寂，而是被厚重墙壁过滤后，只剩下风声、鸟鸣和你自己脚步声的、充满安全感的静谧。你几乎可以立刻想象，几个世纪前，家族的孩子们就是在这个回廊里追逐嬉戏，而大人们则在阴影里低声谈论着哲学与农作物的收成。它的核心魅力，正在于这种不可思议的“宜居感”与“文化使命感”的融合。它不是一座只用来炫耀权力的冰冷建筑，而是一个真实生活过、思考过、并急切想将美好分享出去的家族的具体化身。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子缓缓驶近凯斯特海伊，你会先被道路两旁高大、整齐的法国梧桐所吸引，阳光穿过枝叶，在路上投下晃动的光斑。然后，一个转弯，那片传说中的柠檬黄色就毫无预警地跳进了你的视野——不是想象中城堡那种灰扑扑的威严，而是像一大块刚切开的、鲜亮的柠檬蛋糕，被小心翼翼安放在翡翠色草坪的托盘上。那一瞬间，欧洲宫殿常见的沉重历史感，被这种明媚的、几乎带着甜味的色彩奇妙地稀释了。空气里有青草被晒暖的味道，混杂着从巴拉顿湖方向吹来的、微咸而湿润的风。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，你会听到马蹄踩在碎石路上的“咔嚓”声，不是来自幻想，而是宫殿附属的马术学校正在进行日常训练。穿着得体马裤的骑手和油光水滑的马匹，仿佛是从宫殿旧画中走出来的活道具。宫殿前庭没有拒人千里的铁栅栏，只有低矮的绿篱，当地人推着婴儿车、牵着狗，从容地从宫殿侧面穿过，去往后面的公园。这座宫殿似乎从未真正“死”去，它从18世纪起就被它的主人们有意经营成一个向社区开放的文化中心，这种亲民的基因一直流淌至今。那种感觉，不是参观一个被供奉起来的博物馆，而是拜访一位依然活跃、品味极佳的老贵族朋友的家。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过拱门进入内庭，喧嚣忽然被隔绝在外。环绕你的，是三层楼高的优雅拱廊，鹅卵石地面被岁月打磨得光滑如镜。抬起头，你能看到每一扇窗户上精致的铸铁栏杆，以及窗台上绽放的红色天竺葵。最动人的是那份宁静——不是空无一人的死寂，而是被厚重墙壁过滤后，只剩下风声、鸟鸣和你自己脚步声的、充满安全感的静谧。你几乎可以立刻想象，几个世纪前，家族的孩子们就是在这个回廊里追逐嬉戏，而大人们则在阴影里低声谈论着哲学与农作物的收成。它的核心魅力，正在于这种不可思议的“宜居感”与“文化使命感”的融合。它不是一座只用来炫耀权力的冰冷建筑，而是一个真实生活过、思考过、并急切想将美好分享出去的家族的具体化身。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`凯斯特海伊（费斯泰蒂奇宫）`} />
                <InfoRow label="英文名称" value={`Keszthely (Festetics Palace)`} />
                <InfoRow label="正式名称" value={`Festetics Palace`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`凯斯特海伊`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座宫殿是匈牙利最大的贵族庄园建筑之一，也是费斯泰蒂奇家族超过两个世纪文化、经济和政治影响力的核心见证，被誉为“巴拉顿湖的文化心脏”。`} />
                <InfoRow label="建筑特色" value={`一座宏伟的三翼式柠檬黄色巴洛克式宫殿，拥有101个房间，中央是一座优雅的钟楼，后方是广阔的英式风景园林和浪漫的温室。`} />
                <InfoRow label="建筑风格" value={`以巴洛克风格为基础，历经扩建，融合了古典主义、折衷主义和新巴洛克元素，形成了一种独特而和谐的“费斯泰蒂奇风格”。`} />
                <InfoRow label="文化价值" value={`它不仅是一座宫殿，更是一个自18世纪起就对公众开放的“知识殿堂”，其内的海利康图书馆打破了贵族与平民的界限，是匈牙利启蒙运动的重要灯塔。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`宫殿主体及博物馆开放时间：4月1日至10月31日，每天上午9:00至下午6:00（最后入场时间为下午5:00）；11月1日至次年3月31日，周二至周日上午10:00至下午5:00（周一休息，节假日安排可能变动，建议行前查阅官网）。宫殿后的海伦朵温室和马车博物馆开放时间可能略有不同，通常为上午10:00至下午5:00。冬季（12月至2月）部分花园区域可能仅限外部参观。`} />
              <InfoRow label="门票价格" value={`完整通票（包含宫殿、马车博物馆、温室及花园）成人票价约为4500匈牙利福林（约12欧元）。学生、老人及团体票有优惠，约为3500福林。单独参观宫殿博物馆或花园的票价更低，约为3000福林。6岁以下儿童免费。家庭套票（2大2小）约12000福林。购票时推荐租用语音导览，费用约1000福林，有中文选项。`} />
              <InfoRow label="地址" value={`Kastély utca 1, Keszthely, 8360 Hungary`} />
              <InfoRow label="交通方式" value={`最近的国际机场是布达佩斯李斯特·费伦茨国际机场。从布达佩斯出发，最悠闲的方式是乘坐火车：在布达佩斯戴阿克广场站乘坐直达凯斯特海伊的火车，车程约2.5-3小时，班次频繁（约每小时一班）。抵达凯斯特海伊火车站后，宫殿距离车站约1.5公里，可以悠闲地步行20分钟穿过宁静的城镇，也可以乘坐当地公交车（1路或2路）在“Kastély”站下车。自驾则更为灵活，沿M7高速公路向西南方向行驶，转入71号公路直达凯斯特海伊，从布达佩斯出发约2小时车程，宫殿外有付费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事得从1745年说起。当时，匈牙利最有权势的家族之一，费斯泰蒂奇家族，决定在巴拉顿湖西岸的凯斯特海伊建造他们的夏宫。第一任建造者克里斯托夫·费斯泰蒂奇伯爵，选择这里并非偶然。凯斯特海伊远离政治中心布达佩斯的喧嚣，却拥有肥沃的土地和美丽的湖景，是一个可以安心经营家族根基、实践启蒙思想的理想国。最初的核心建筑是朴素的巴洛克风格，但家族的雄心远不止一栋房子。克里斯托夫的儿子，乔治一世，是个真正的“文艺复兴式”人物。他对农业改革充满热情，引进新作物和养殖技术，让整个庄园繁荣起来。更重要的是，他深爱知识与艺术。就是他，在宫殿里成立了著名的“海利康图书馆”，并立下规矩：这个图书馆不仅对家族成员开放，也对镇上的学者、甚至普通市民开放。这在18世纪的欧洲贵族中，是极其罕见和开明的举动，让这座宫殿从一开始就蒙上了一层理想主义的光辉。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，让宫殿变成今天我们看到的这幅宏伟模样的，是家族的第三代明星——乔治的儿子，杜卡·费斯泰蒂奇。这位公爵是家族史上最伟大的建设者，也是一位狂热的艺术收藏家和旅行家。19世纪初，他进行了一次漫长的欧洲“壮游”，从巴黎到伦敦，从维也纳到意大利，被当时流行的古典主义建筑风格深深吸引。回国后，他决心将自己的家改造成配得上欧洲最前沿品味的宫殿。他聘请了当时顶尖的建筑师，开始了长达数十年的扩建。宫殿中央那座优雅的钟楼拔地而起，两翼被延长，内部被装饰上奢华的灰泥浮雕、壁画和从全欧洲采购来的家具。最令人惊叹的是，他为自己心爱的书籍建造了新的图书馆厅——也就是今天宫殿的瑰宝“海利康图书馆”。这个房间本身就是一件艺术品，两层的胡桃木书架顶天立地，收藏了超过十万册珍本。杜卡公爵不仅扩建了建筑，还按照英国风景园林的风格，重新设计了宫殿后方巨大的花园，引入了异国树木，建造了浪漫的温室和人工湖。经过他的手，这座柠檬黄色的宫殿才真正拥有了今天这样折衷而和谐的面貌，既有巴洛克的骨架，又披上了古典主义的优雅外衣。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但家族的命运并非一帆风顺。两次世界大战的飓风席卷了整个欧洲，匈牙利和费斯泰蒂奇家族也未能幸免。宫殿在战火中奇迹般地没有遭到严重结构性破坏，这本身就是一个幸运。然而，战后东欧的政治变革，意味着贵族时代的终结。费斯泰蒂奇家族失去了他们的宫殿和大部分财产。1946年，宫殿被国有化。这或许是它历史上最危急的转折点——它可能被废弃，被拆毁，或改造成一个毫无特色的官僚机构。幸运的是，当地政府和有远见的文化人士认识到了它无与伦比的价值。它被改建为博物馆，那些珍贵的家具、艺术品和藏书被小心地保存和展示。马车博物馆设立起来，展示了庄园昔日庞大的交通系统；温室被修复，奇花异草再次绽放。宫殿从一座私人宅邸，转变为一个属于全体匈牙利人民的文化遗产。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天，当你漫步其中，你能触摸到的每一段历史都是鲜活的。你看到的不再是一个静止的、关于过去的标本，而是一个持续演变的生命体。费斯泰蒂奇家族的后人依然与宫殿保持着联系，参与文化活动。宫殿里举办古典音乐会、学术讲座，花园是市民散步、举办婚礼的热门地点。它经历了从私人堡垒到公共财富的蜕变，而最初乔治一世那个“开放知识”的梦想，以另一种形式得到了延续和升华。这座柠檬黄色的宫殿，就像它身旁的巴拉顿湖一样，深邃、平静，倒映着几个世纪的光影变迁，却始终生生不息。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议将整个游览安排为大半天的时间（约4-5小时），节奏舒缓，才能充分品味这座活态庄园的各个层面。最好的抵达时间是上午9点开门后不久，此时光线柔和，旅游团还未大量涌入，你能独享宫殿内部的宁静。整体的游览逻辑应该是“由内至外，由人文至自然”：先专注于宫殿建筑内部的博物馆、图书馆，沉浸于历史与艺术的氛围；然后在午餐前后，将舞台交给广阔的花园、温室和马车博物馆，在自然中放松身心。这样的安排避免了审美疲劳，也顺应了一天中光线的变化——室内参观对光线要求不高，而下午在花园里拍照光线最佳。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`宫殿内部部分房间地板是古老的木质或石材，建议穿着舒适且鞋底柔软的平底鞋，高跟鞋走路会很辛苦而且可能不被允许。花园面积非常大，如果想走完主要区域，请务必预留至少1.5小时，并做好防晒。参加一个宫殿内部导游团（通常有英语或德语选项）是值得的，导游会讲述许多展品说明牌上没有的家族轶事，让参观变得生动起来。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从镇中心方向沿着梧桐成荫的卡斯泰利大街慢慢走向宫殿，让那抹越来越清晰的柠檬黄色成为你整趟旅程的序曲。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过低矮的门廊进入中央庭院，在这里停下脚步转个圈，感受三层拱廊带来的包围感，并抬头寻找钟楼在不同角度下的剪影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先探索宫殿主楼一层的礼仪套房，在那些悬挂着家族肖像、摆满青花瓷器的房间里，想象19世纪一场盛大舞会前的衣香鬓影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定不能错过位于东翼二楼的“海利康图书馆”，花上至少二十分钟，什么也不做，就坐在长椅上仰望那十万册书籍构成的智慧苍穹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从宫殿后门走出，让视线豁然开朗，面对那片巨大的英式风景花园，沿着蜿蜒的小径向远处的湖泊方向散步。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进花园中的“海伦朵温室”，让潮湿温暖的空气包裹你，在棕榈树和兰花丛中感受维多利亚时代的植物学浪漫。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观位于花园边缘的“农场与马车博物馆”，看看那些擦拭得锃亮的复古马车，理解这座庄园当年是如何像一个精密齿轮一样运转的。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，回到宫殿主体附近的橘园咖啡馆，在露天座位上点一杯匈牙利咖啡或当地葡萄酒，看着夕阳将宫殿的柠檬黄外墙染成金色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`天鹅湖拱桥回望`}</h4>
                  <p className="text-sm text-gray-700">{`在花园人工湖的拱桥上，以湖面为前景，可以将宫殿的钟楼和主体建筑以及它们在水中的完美倒影一同摄入镜头，黄昏时分的金色光线最为梦幻。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`二楼图书馆窗边`}</h4>
                  <p className="text-sm text-gray-700">{`从图书馆内，透过其中一扇高窗向外拍摄，将窗框作为天然画框，框住窗外花园的一角绿意和蓝天，形成“画中有画”的古典构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`舞厅吊灯下方仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`在最大的礼仪厅“舞厅”中央，将相机贴近华丽的水晶吊灯向上仰拍，捕捉吊灯与天花板精美浮雕组成的对称几何图案，充满视觉张力。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`温室棕榈树下`}</h4>
                  <p className="text-sm text-gray-700">{`在“海伦朵温室”内部，寻找一处茂盛的棕榈树或蕨类植物作为前景，透过叶片拍摄温室的弧形玻璃屋顶和远处的宫殿轮廓，营造出丛林秘境感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`宫殿主立面草坪`}</h4>
                  <p className="text-sm text-gray-700">{`退到宫殿正前方的主草坪边缘，用广角镜头将整个柠檬黄色的宫殿立面、前景的草坪和两旁的大树全部容纳进来，这是最具标志性的全景机位，上午顺光最佳。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`宫殿内部大部分区域允许拍照但禁止使用闪光灯和三脚架（以防碰撞珍贵展品），请提前调高相机ISO或使用大光圈镜头。在花园和公共区域拍摄时，如果希望将当地居民或游客纳入镜头作为生动的点缀，礼貌的微笑和简单的事先示意总是受欢迎的。冬季游览时，如果遇上下雪，被白雪覆盖的宫殿和花园是绝佳的摄影主题，但需注意开放时间可能缩短。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`湖畔宁静之选`}</h4>
                  <p className="text-sm text-blue-800">{`巴拉顿湖边步行可达的温馨家庭式公寓，阳台正对湖水，晚上能伴着轻柔的波浪声入眠，清晨看天鹅从窗前游过。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史沉浸体验`}</h4>
                  <p className="text-sm text-green-800">{`位于宫殿建筑群侧翼经过修复的“城堡客房”，虽然房间现代舒适，但厚重的石墙和古老的窗景让你感觉住在历史里。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`庄园风情度假`}</h4>
                  <p className="text-sm text-yellow-800">{`距离宫殿几分钟车程、被葡萄园环绕的乡村庄园酒店，提供丰盛的本地早餐和自酿葡萄酒，享受真正的匈牙利田园生活。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`城镇中心便利`}</h4>
                  <p className="text-sm text-purple-800">{`凯斯特海伊主广场旁的精品设计酒店，由老房子改造，风格时尚，下楼就是各色咖啡馆和餐厅，体验小镇夜生活的便利。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（6月至8月）是巴拉顿湖区的绝对旺季，住宿价格会上涨且很快订满，如果计划此时来访，务必提前至少两三个月预订。选择住在镇上虽然热闹便利，但夜晚可能会相对嘈杂；选择湖边或乡村则极其宁静，但需要依赖自驾或自行车解决交通。许多本地民宿不提供24小时前台服务，建议提前通过邮件或电话确认入住细节。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开凯斯特海伊很久以后，我脑海中反复回放的，不是某个具体的房间或藏品，而是一种整体的、暖洋洋的“黄色”印象。那种黄，不是帝王的明黄，而是柠檬的、阳光的、带着生活气息的黄色。它似乎是一种隐喻：这座宫殿没有沉溺于贵族没落的哀伤，也没有把自己僵化成高不可攀的纪念碑。它以一种出乎意料的明媚姿态，活了下来，并且活得很好。在这里，你能触摸到历史的质感，但它不冰冷；你能感受到文化的高贵，但它不傲慢。知识从图书馆流向民间，美景从私家花园融入社区的日常。这是一种非常高级的、关于传承的态度——最宝贵的遗产，不是锁在保险柜里的珠宝，而是那种能够融入时代血脉、继续滋养后来人的生活智慧与开放精神。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求快速打卡、浮光掠影的时代，费斯泰蒂奇宫提供了一种截然不同的旅行节奏和深度。它要求你慢下来，用大半天的时间，去读懂一个家族两百年的兴衰与坚持，去理解一座建筑如何从私家园囿转变为公共精神家园。你会明白，真正动人的欧洲，不止在巴黎罗马的举世闻名里，更在这些安静小镇上依然跳动着历史心脏的角落里。对于每一位厌倦了人潮、渴望在旅途中获得心灵共鸣的深度游者来说，凯斯特海伊和它的柠檬黄宫殿，就像巴拉顿湖的一颗温柔心脏，值得你专程前来，倾听它沉稳而充满生命力的脉动。在这里，你不是过客，而是被邀请进一段依然在书写的美好故事里的朋友。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/veszprem-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维斯普雷姆老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Veszprém Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gyor-baroque-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    杰
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">杰尔巴洛克老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Baroque Old Town of Győr</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gyor" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    杰
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">杰尔古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Győr</p>
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
