import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '古尔克大教堂 Gurk Cathedral｜隐藏在奥地利山谷中的罗曼式宝石与圣赫玛陵寝 - 最佳欧洲景点',
  description: '你得把车开进克恩顿州这条绿得发亮、安静得只听见溪流声的山谷，才会忽然明白，为什么一千年前的人会选择把如此宏伟的一座信仰殿堂，安放在这里。古尔克大教堂不是什么位于首都广场上的那种地标，它更像一个巨大的、石质的秘密，被群山温柔地环抱着。远远望去，那两座赭石色的塔楼并不张扬，却带着一种不容置疑的庄严，像是...',
}

export default function GurkCathedralPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '古尔克大教堂', href: '/attractions/gurk-cathedral' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`古尔克大教堂・Gurk Cathedral・奥地利・古尔克`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你得把车开进克恩顿州这条绿得发亮、安静得只听见溪流声的山谷，才会忽然明白，为什么一千年前的人会选择把如此宏伟的一座信仰殿堂，安放在这里。古尔克大教堂不是什么位于首都广场上的那种地标，它更像一个巨大的、石质的秘密，被群山温柔地环抱着。远远望去，那两座赭石色的塔楼并不张扬，却带着一种不容置疑的庄严，像是从大地里生长出来的一样。当你走近，脚下是鹅卵石小路，空气里是青草和远处森林传来的湿润气息，教堂的影子慢慢把你笼罩进去，那一刻，现代世界的喧嚣就被彻底隔绝在外了。
推开那扇厚重的木门，内部的世界会让你瞬间屏住呼吸。不是因为它金碧辉煌——恰恰相反，这里的光线是幽暗的、沉思的。你的眼睛需要几秒钟来适应，然后，墙壁和柱子上那些密密麻麻的、颜色依旧鲜活的壁画，就像潮水一样向你涌来。将近一千年前画匠们的笔触，讲述着圣经故事和圣徒传奇，铺满了每一个角落。空气里有种特殊的味道，是古老的石头混合着常年点燃的烛蜡的气息，清冷而肃穆。阳光从高处的罗马式小窗斜射进来，形成一道道光柱，尘埃在光里缓慢飞舞，仿佛时间在这里也变得黏稠而缓慢。
你很快会发现，这里不是一个冰冷的博物馆。当地的老妇人会静静地坐在长椅上祈祷，指尖轻轻划过念珠。你会听到管风琴低沉的前奏在拱顶下试音，那是为下午的小型音乐会做准备。这座教堂，至今仍然是古尔克小镇以及周边山谷居民生活与精神世界的绝对核心。周日，人们会穿上传统的皮裤或连衣裙前来；平日，也有旅人如你我，仰着头，迷失在这片壁画的海洋里。那种感觉非常奇妙，你既是一个闯入的观察者，又仿佛被吸纳进一场延续了数十个世纪的、安静而坚定的日常仪式之中。
而这一切的灵魂，都深藏于地下。大教堂最打动人心的核心，是地下墓穴中长眠的圣赫玛——这位创立了古尔克教区的圣女。她的存在，让这座石头建筑有了体温和心跳。人们来到这里，不只是为了看建筑和艺术，更是为了触碰一段关于奉献、灵性与不朽传说的源头。这种将宏伟建筑与极其个人的灵性追寻结合在一起的特质，正是古尔克大教堂无可替代的魅力。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你得把车开进克恩顿州这条绿得发亮、安静得只听见溪流声的山谷，才会忽然明白，为什么一千年前的人会选择把如此宏伟的一座信仰殿堂，安放在这里。古尔克大教堂不是什么位于首都广场上的那种地标，它更像一个巨大的、石质的秘密，被群山温柔地环抱着。远远望去，那两座赭石色的塔楼并不张扬，却带着一种不容置疑的庄严，像是从大地里生长出来的一样。当你走近，脚下是鹅卵石小路，空气里是青草和远处森林传来的湿润气息，教堂的影子慢慢把你笼罩进去，那一刻，现代世界的喧嚣就被彻底隔绝在外了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`推开那扇厚重的木门，内部的世界会让你瞬间屏住呼吸。不是因为它金碧辉煌——恰恰相反，这里的光线是幽暗的、沉思的。你的眼睛需要几秒钟来适应，然后，墙壁和柱子上那些密密麻麻的、颜色依旧鲜活的壁画，就像潮水一样向你涌来。将近一千年前画匠们的笔触，讲述着圣经故事和圣徒传奇，铺满了每一个角落。空气里有种特殊的味道，是古老的石头混合着常年点燃的烛蜡的气息，清冷而肃穆。阳光从高处的罗马式小窗斜射进来，形成一道道光柱，尘埃在光里缓慢飞舞，仿佛时间在这里也变得黏稠而缓慢。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你很快会发现，这里不是一个冰冷的博物馆。当地的老妇人会静静地坐在长椅上祈祷，指尖轻轻划过念珠。你会听到管风琴低沉的前奏在拱顶下试音，那是为下午的小型音乐会做准备。这座教堂，至今仍然是古尔克小镇以及周边山谷居民生活与精神世界的绝对核心。周日，人们会穿上传统的皮裤或连衣裙前来；平日，也有旅人如你我，仰着头，迷失在这片壁画的海洋里。那种感觉非常奇妙，你既是一个闯入的观察者，又仿佛被吸纳进一场延续了数十个世纪的、安静而坚定的日常仪式之中。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而这一切的灵魂，都深藏于地下。大教堂最打动人心的核心，是地下墓穴中长眠的圣赫玛——这位创立了古尔克教区的圣女。她的存在，让这座石头建筑有了体温和心跳。人们来到这里，不只是为了看建筑和艺术，更是为了触碰一段关于奉献、灵性与不朽传说的源头。这种将宏伟建筑与极其个人的灵性追寻结合在一起的特质，正是古尔克大教堂无可替代的魅力。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`古尔克大教堂`} />
                <InfoRow label="英文名称" value={`Gurk Cathedral`} />
                <InfoRow label="正式名称" value={`Gurk Cathedral`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`古尔克`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`克恩顿州历史上最重要的宗教中心，也是中欧地区保存最完好的罗曼式建筑典范之一，其奠基与一位传奇女圣人的遗骨息息相关。`} />
                <InfoRow label="建筑特色" value={`标志性的双塔楼结构巍然耸立于宁静山谷，内部拥有被誉为“罗马式西斯廷”的、面积超过900平方米的惊人中世纪壁画群。`} />
                <InfoRow label="建筑风格" value={`以纯粹的罗马式风格为基石，在后期局部融入了哥特式和巴洛克式的装饰元素，形成独特的层叠感。`} />
                <InfoRow label="文化价值" value={`不仅是建筑丰碑，更是奥地利信仰、艺术与地方身份认同历经千年交织而成的鲜活见证。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`大教堂全年开放，每日上午9点至下午6点开放参观。地下墓穴（圣赫玛墓穴）开放时间较短，通常为上午10点至中午12点，下午2点至4点。请注意，冬季（11月至3月）开放时间可能略有缩短，且在举行宗教仪式期间（如周日早晨的弥撒）游客参观可能会受限。建议行前在其教区官网查看最新公告。`} />
              <InfoRow label="门票价格" value={`进入大教堂主体建筑免费，欢迎自愿捐赠以支持维护。参观具有千年历史的地下墓穴和珍贵壁画区域（圣赫玛墓穴）需支付少量导览费用，约8欧元。学生、老年人和团体享有折扣。参加管风琴音乐会或其他特别活动需另行购票。`} />
              <InfoRow label="地址" value={`Domplatz 1, 9342 Gurk, Austria`} />
              <InfoRow label="交通方式" value={`最近的国际机场是克拉根福机场（KLU），距离约40公里。从机场出发，最便捷的方式是租车自驾，沿B83号公路向北行驶约50分钟即可抵达古尔克山谷，沿途阿尔卑斯风光绝美。若乘坐公共交通，可从克拉根福中央火车站乘坐 Postbus（奥地利邮政巴士） 564路或565路前往古尔克（Gurk Postamt站），车程约1小时15分钟，班次平日约每小时一班，周末减少。购买克恩顿州卡（Kärnten Card）可覆盖部分交通费用。下车后步行约5分钟即可到达高耸于小镇中心的大教堂。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事得从一位名叫赫玛的贵族女子说起。时间大概是公元11世纪初，那时的克恩顿还是巴伐利亚公爵治下的一片边疆之地。赫玛出身显赫，却选择了一条截然不同的道路：她将自己的巨额财富和全部生命都奉献给了信仰事业。她最重要的功绩，就是在当时还十分荒僻的古尔克山谷，建立了一座女修道院，并使其成为传播基督教和教化当地的灯塔。她于1045年去世，被安葬在这里，很快，围绕她的墓地就产生了许多神迹传说，她也被尊为圣女。她的遗骨，成了这片土地最神圣的宝藏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`正是圣赫玛的圣髑，吸引了一位关键人物——萨尔茨堡的大主教格布哈德。这位大主教雄心勃勃，致力于巩固教会在阿尔卑斯山东部的势力。他看中了古尔克因圣赫玛而日益增长的声望，决定在这里建立一个强大的教区中心。于是在1120年，他亲自为一座新的大教堂奠基，目的之一就是为圣赫玛的遗骨建造一个更宏伟、更相称的安息之所。这座教堂的建造跨越了几十年，直到1200年左右才基本竣工。从一开始，它的命运就和这位女圣徒紧紧捆绑在了一起，它不只是建筑，更是圣赫玛精神的石质化身。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`建造者们选择了当时最主流、也最能体现庄严与永恒的罗马式风格。厚厚的墙壁，敦实的立柱，半圆形的拱券，一切都为了稳固与持久。然而，古尔克大教堂的传奇，在它建成后不到一百年就遭遇了第一次重大考验。一场灾难性的大火在13世纪末席卷了内部，那些最初的木制屋顶和部分装饰化为灰烬。但这场火也带来了意想不到的转机。重建时，人们没有改变罗马式的结构骨架，但请来了当时最顶尖的画师团体。从1270年到1300年左右，这些无名大师们用惊人的创造力，在墙壁、立柱和天花板上绘制了超过900平方米的壁画，几乎覆盖了所有内部表面，创造了中欧最庞大、最连贯的罗马式壁画群，让火灾后的教堂反而获得了“罗马式西斯廷”的美誉。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`随后的几个世纪，它静静地伫立在山谷中，见证了宗教改革的风暴、拿破仑战争的铁蹄，但它最主要的角色，始终是克恩顿地区天主教信仰的母堂。它也不可避免地被时间的潮流轻轻打磨。17世纪，巴洛克风潮席卷奥地利，古尔克大教堂也增添了一些那个时代的装饰，比如主祭坛华丽夸张的雕塑和纹样，与原本朴素的罗马式风格形成了有趣的对话。这种风格的叠加并没有破坏整体，反而像年轮一样，清晰记录下不同时代对神圣之美的理解。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天，当你站在教堂里，你看到的是一个层叠的历史现场。罗马式的筋骨、中世纪巅峰的壁画、巴洛克的点缀，以及从未间断的祈祷声。它没有在某个时代凝固，而是一直活着，呼吸着，从圣女赫玛的古老传说，一直到今天敲响的钟声。它告诉我们，真正的伟大建筑，从来不是博物馆里的标本，而是一棵深深扎根于社区精神土壤中的生命之树，每一道年轮都记载着信仰、艺术与普通人生活的交织。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味古尔克，建议安排一整个白天，最好在上午9点半左右抵达。此时的阳光正好能照亮教堂西立面，游客也相对稀少。整体游览节奏宜慢不宜快，遵循“由外而内、由宏至微、从上到下”的原则。先花半小时环绕教堂外部和静谧的墓园，感受其与环境的关系；再用至少两小时沉浸于内部壁画世界，务必参加一次地下墓穴的导览（通常中午前有一场），这是灵魂之旅的核心；午后若有时间，可攀登南塔楼（如开放）俯瞰山谷，或在回廊静坐。这样安排能让你逐步从建筑美学深入到其精神内核，避免走马观花。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周日早晨和重要宗教节日上午，大教堂主要用于礼拜，参观会受限，请尽量避免此时段入内深度游览。地下墓穴参观必须跟随导览，且英语导览班次有限，强烈建议行前在官网查询时间表或抵达后第一时间到信息处预约。教堂内部地面多为古老石砖，穿着舒适防滑的鞋子至关重要。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从小镇中心的喷泉广场出发，沿着缓缓上升的坡道漫步，让那双塔楼的雄姿随着你的脚步逐步完整地展现`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花点时间绕到教堂的东侧和后方的教士墓园，那里安宁静谧，古老的墓碑爬满青苔，是观察教堂建筑体量与自然融合的绝佳角度`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从西门进入主殿，不要急着前进，就站在入口处几分钟，让你的眼睛适应昏暗，并感受那近千幅壁画从四面八方包裹而来的初始震撼`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着北侧走廊慢慢移动，仰头仔细辨认壁画上褪色却依然生动的《圣经》故事场景和那些表情各异的中世纪圣人们`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要参加一次前往地下圣赫玛墓穴的导览，沿着狭窄的台阶下行，在烛光摇曳的幽闭空间里，面对那位开创了一切的女圣徒的石棺`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`导览出来后，去点燃一支蜡烛，然后坐在中殿的长椅上，静静地听一听或许正在练习的管风琴声如何在这巨大的石头音箱里回荡`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果体力允许且塔楼开放，沿着螺旋石阶爬上南塔楼的观景台，将整个古尔克绿色山谷和红色屋顶的小镇尽收眼底`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开前别忘了去教堂旁边的教区博物馆逛逛，那里收藏着珍贵的圣器和中世纪手稿，能帮你把散落的感官碎片拼合成完整的历史认知`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`教堂西侧广场远端`}</h4>
                  <p className="text-sm text-gray-700">{`下午四至六点，夕阳的暖光会为双塔楼和西立面染上金红色，用广角镜头可以捕捉到建筑与小镇街道形成的纵深构图`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`中殿仰望拱顶壁画`}</h4>
                  <p className="text-sm text-gray-700">{`选择正午前后，当阳光从高侧窗射入照亮部分拱顶时，站在中殿中央偏东位置，向上拍摄，可以拍到光影分割下壁画天使的生动细节`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`南侧回廊拱窗`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，阳光斜射入回廊时，站在回廊内侧，透过罗马式拱窗框架拍摄外面的墓园绿地和远山，形成一幅天然的“风景画中画”`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`地下墓穴入口的阶梯`}</h4>
                  <p className="text-sm text-gray-700">{`在导览允许且不使用闪光灯的前提下，可利用墓穴入口处昏暗的天然光线，从下往上拍摄参观者沿螺旋石阶缓缓而下的剪影，极具故事感`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`教堂内部严禁使用闪光灯和三脚架（需特别许可），高ISO和大光圈镜头是必备。拍摄当地祈祷者或信徒时，务必保持尊重，最好事先征得同意或采用不打扰的远景。墓穴内气氛肃穆，拍照应绝对静默并遵从导览员指示。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`山谷农家体验`}</h4>
                  <p className="text-sm text-blue-800">{`住在古尔克小镇或周边村庄的家庭式“Urlaub am Bauernhof”（农家度假屋），清晨在奶牛铃铛声中醒来，品尝自家产的蜂蜜和牛奶，主人能告诉你许多教堂不为人知的小故事`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史居所`}</h4>
                  <p className="text-sm text-green-800">{`下榻位于古尔克小镇中心、由一栋17世纪老房子改造的精品客栈，房间保留了木梁和复古瓷砖壁炉，推开窗就能看见大教堂的塔尖，位置无与伦比`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`水疗休闲之选`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车15分钟前往阿尔卑斯山脚下的巴德克莱因基希海姆温泉小镇，入住一家四星级温泉酒店，白天探访教堂，晚上用舒缓的温泉和山景晚餐放松身心`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`克拉根福城市基地`}</h4>
                  <p className="text-sm text-purple-800">{`若希望有更多餐饮购物选择，可住在克恩顿州首府克拉根福，选择老城区的设计酒店，以这里为放射中心，自驾探访古尔克及周边多个湖泊与城堡`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古尔克小镇本身非常小且宁静，夜间几乎没有任何商业活动，追求热闹夜生活的旅人可能更适合以克拉根福为基地。夏季和秋季（徒步旺季）是当地最受欢迎的时段，农家住宿需提前数月预订。冬季山谷雪景虽美，但部分家庭旅馆可能歇业，行前务必确认。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开古尔克山谷很久以后，我脑海里反复回放的，不是某幅具体壁画的细节，也不是塔楼上的辽阔视野，而是一种混合的感觉：石头的清冷、烛火的暖意、壁画上凝视千年的眼神，以及地下墓穴中那种近乎可触摸的寂静。这座大教堂教给我的，是关于“根”的故事。在这个人人追求浮光掠影、打卡即走的时代，它固执地站在原地，提醒我们有些东西需要慢下来，需要深入地表之下，需要在一束特定的光线下等待，才能被真正看见。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它不是一个孤立的景点，而是一个完整的生态。是圣女赫玛的传说，是建筑师和画匠的手艺，是千百年来周边村民每一次弥撒的脚步，是今天依然在此回荡的管风琴声。它之所以值得每一位深度旅人前来，正是因为它提供了一种近乎奢侈的体验：时间层次感的体验。在这里，你能同时触碰到11世纪的灵性、13世纪的艺术巅峰、17世纪的装饰热情和21世纪的宁静守望。它像一块巨大的文化琥珀，将历史凝固，却又让它在当下依然活生生地呼吸。在这个快速变化的世界里，找到这样一个沉静、深厚且依然充满生命力的角落，本身就是一种治愈，一次对自我内心深度的勘探。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/imperial-spa-town-bad-ischl" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴德伊舍</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bad Ischl</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/melk-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅尔克修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Melk Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/graz-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格拉茨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Graz Old Town</p>
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
