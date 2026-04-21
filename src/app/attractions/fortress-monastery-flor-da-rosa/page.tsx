import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '克拉图弗洛尔达罗萨堡垒修道院｜探秘葡萄牙荒原上的医院骑士团总部废墟 - 最佳欧洲景点',
  description: '车子拐下国道，驶入一片被橄榄树和软木橡树点缀的广阔平原，阿连特茹的太阳把一切都晒成了金黄色和赭红色。然后，它就毫无征兆地出现在地平线上——弗洛尔达罗萨堡垒修道院。第一眼望去，你很难定义它。它不是童话里纤细的城堡，而像一头匍匐在大地上的巨兽，由厚重的红褐色石块垒成，一部分是威严的堡垒，高耸的塔楼带着射',
}

export default function FortressMonasteryFlorDaRosaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '葡萄牙', href: '/destinations/europe' },
            { label: '波塔莱格雷区克拉图镇', href: '/destinations/europe' },
            { label: '克拉图', href: '/attractions/fortress-monastery-flor-da-rosa' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`克拉图・Crato・葡萄牙・波塔莱格雷区克拉图镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子拐下国道，驶入一片被橄榄树和软木橡树点缀的广阔平原，阿连特茹的太阳把一切都晒成了金黄色和赭红色。然后，它就毫无征兆地出现在地平线上——弗洛尔达罗萨堡垒修道院。第一眼望去，你很难定义它。它不是童话里纤细的城堡，而像一头匍匐在大地上的巨兽，由厚重的红褐色石块垒成，一部分是威严的堡垒，高耸的塔楼带着射击孔；另一部分却是坍塌的修道院拱廊，优雅的弧线在蓝天下勾勒出残破的剪影。风是这里永恒的背景音，呼啸着穿过空荡的窗洞，发出低沉的呜咽，卷起干燥的尘土和干草的气息。
走近了，触摸那些被几个世纪风雨打磨得温润的石块，你能感受到两种截然不同的温度。堡垒部分的石头冰冷、粗粝，充满了拒人千里的力量感。而修道院残存回廊的那些石柱，即使在废墟中，也似乎保留着一丝午后的微温，仿佛僧侣们刚刚结束默祷离开。当地人说，这座建筑的名字“Flor da Rosa”（玫瑰之花）与它的外观形成了诗意的反差。它并非娇艳的花朵，而是这片坚韧土地上开出的最顽强的“石之花”。
在克拉图镇，这座废墟早已是生活背景的一部分。你会看到老人在远处墙根的阴影下眯眼打盹，羊群在它周围的野地里悠闲啃草。它不是被玻璃罩起来的博物馆，而是依然呼吸着的、属于这片土地的记忆结节。年轻人或许更向往里斯本的繁华，但每一位老人都能跟你讲上一段关于骑士团、“修道院首长”的模糊传说。最打动人的，莫过于黄昏时分，夕阳把整个废墟染成炽烈的金红，那份辉煌与寂灭交织的壮美，让人瞬间懂得什么是“永恒”与“逝去”在同一刻凝固。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子拐下国道，驶入一片被橄榄树和软木橡树点缀的广阔平原，阿连特茹的太阳把一切都晒成了金黄色和赭红色。然后，它就毫无征兆地出现在地平线上——弗洛尔达罗萨堡垒修道院。第一眼望去，你很难定义它。它不是童话里纤细的城堡，而像一头匍匐在大地上的巨兽，由厚重的红褐色石块垒成，一部分是威严的堡垒，高耸的塔楼带着射击孔；另一部分却是坍塌的修道院拱廊，优雅的弧线在蓝天下勾勒出残破的剪影。风是这里永恒的背景音，呼啸着穿过空荡的窗洞，发出低沉的呜咽，卷起干燥的尘土和干草的气息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走近了，触摸那些被几个世纪风雨打磨得温润的石块，你能感受到两种截然不同的温度。堡垒部分的石头冰冷、粗粝，充满了拒人千里的力量感。而修道院残存回廊的那些石柱，即使在废墟中，也似乎保留着一丝午后的微温，仿佛僧侣们刚刚结束默祷离开。当地人说，这座建筑的名字“Flor da Rosa”（玫瑰之花）与它的外观形成了诗意的反差。它并非娇艳的花朵，而是这片坚韧土地上开出的最顽强的“石之花”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在克拉图镇，这座废墟早已是生活背景的一部分。你会看到老人在远处墙根的阴影下眯眼打盹，羊群在它周围的野地里悠闲啃草。它不是被玻璃罩起来的博物馆，而是依然呼吸着的、属于这片土地的记忆结节。年轻人或许更向往里斯本的繁华，但每一位老人都能跟你讲上一段关于骑士团、“修道院首长”的模糊传说。最打动人的，莫过于黄昏时分，夕阳把整个废墟染成炽烈的金红，那份辉煌与寂灭交织的壮美，让人瞬间懂得什么是“永恒”与“逝去”在同一刻凝固。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`克拉图`} />
                <InfoRow label="英文名称" value={`Crato`} />
                <InfoRow label="正式名称" value={`弗洛尔达罗萨堡垒修道院`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`波塔莱格雷区克拉图镇`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这里曾是医院骑士团（后称马耳他骑士团）在葡萄牙王国的总部与精神中心，是伊比利亚半岛上军事修会权力与信仰交织的独特见证。`} />
                <InfoRow label="建筑特色" value={`一座将军事堡垒的雄浑防御与修道院宁静回廊完美融合的罕见建筑，如同从赭红色土地中生长出来的岩石巨兽。`} />
                <InfoRow label="建筑风格" value={`以坚固朴素的哥特式为主体，融合了曼努埃尔风格的装饰元素及严谨的军事防御建筑特征。`} />
                <InfoRow label="文化价值" value={`它象征了中世纪欧洲边疆地带，宗教虔诚、军事征服与领土开拓三者之间复杂而强大的共生关系。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`遗址外部区域全天开放。内部有维护的庭院及小教堂区域开放时间约为夏季（4月-10月）9:30-18:30，冬季（11月-3月）10:00-17:00，周一闭馆。具体时间可能因修缮或私人活动临时调整，建议出行前查看当地旅游信息网站。`} />
              <InfoRow label="门票价格" value={`外部遗址参观免费。进入有维护的庭院及小教堂区域需购票，常规票价约3欧元。65岁以上老人及12-18岁青少年享半价优惠，12岁以下儿童免费。每月第一个周日全天免费。`} />
              <InfoRow label="地址" value={`Flor da Rosa, 7430-999 Crato, Portugal`} />
              <InfoRow label="交通方式" value={`从里斯本出发：自驾是最佳选择，沿A6高速公路向东至埃武拉方向，转入IP2国道向南，全程约2.5小时。也可从里斯本东方车站乘坐长途巴士至波塔莱格雷，车程约2.5小时，班次每天2-3班；再从波塔莱格雷换乘当地出租车前往克拉图镇，约30分钟，费用较高且需提前预约。从波塔莱格雷区中心自驾前往约需20分钟。当地无直达公共交通，强烈建议租车。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事要从遥远的12世纪说起。当时，基督教王国正在伊比利亚半岛进行着漫长的“收复失地运动”，从穆斯林手中夺回土地。葡萄牙的南部边疆充满危险也充满机遇。就在这样的背景下，一个兼具修士与战士身份的国际组织——医院骑士团，受到了葡萄牙王室的青睐。国王将克拉图这片战略要地赐予他们，不仅是表彰他们在圣地征战中的功绩，更是希望借助这群能征善战的“修士骑士”来巩固和保卫王国的南部边疆。于是，在14世纪中叶，一座前所未有的建筑开始在这片荒原上崛起。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的诞生与一位关键人物紧密相连：阿尔瓦罗·贡萨维斯大师，他是骑士团在葡萄牙的首领，被称为“修道院首长”。他构想并建造了弗洛尔达罗萨。这不仅仅是一座修道院，更是一个自给自足的权力中心。高墙之内，既有供骑士和修士们祈祷、冥想的教堂与回廊，也有仓库、马厩、工坊，以及足以抵御攻击的坚固塔楼和城墙。骑士们在这里过着一种双重生活：晨钟暮鼓时，他们是虔诚的修士；号角响起时，他们便是披甲执锐的战士。这种独特的融合，深刻地烙印在了建筑的每一块石头里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在接下来的两个世纪里，这里达到了权力的巅峰。作为骑士团在葡萄牙的总部，它不仅掌管着广阔的田产和财富，还深度参与王国的政治与军事事务。其影响力甚至辐射到葡萄牙的海外探索。据说，在大航海时代启航的舰队中，也有从这里走出的骑士的身影。建筑的细节上也反映了那个黄金时代，后期添加的一些窗饰和纹章，带上了葡萄牙独特的曼努埃尔风格的华丽影子，那是大海与冒险的符号。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，盛极必衰。16世纪，随着骑士团的总部迁往马耳他，其全球重心转移，克拉图的重要性开始下降。更致命的打击来自1755年那场摧毁里斯本的大地震，遥远的震波也严重损毁了这座宏伟的建筑。但它最终的凋零，是伴随着时代浪潮的无奈。19世纪，葡萄牙的自由主义革命浪潮席卷全国，宗教 orders 被解散，其财产被国有化。弗洛尔达罗萨被遗弃了，石材被当地居民拆去建造自己的房屋，雄伟的建筑逐渐沦为废墟，只剩下骨架，在风吹日晒中诉说着往事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到近几十年，人们才重新认识到它无与伦比的价值。经过谨慎的修复和保护，它没有再被重建为原样，而是以一种“凝固的废墟”姿态被保存下来。这种保存理念尤为珍贵，因为它保留的不是一个完美的假古董，而是时间本身的力量——那种衰败与不朽同在的震撼。今天，你站在它的庭院中，仿佛能同时听到中世纪骑士的祷告、地震时石块的崩落，以及几个世纪以来呼啸而过的风声。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在午后稍晚，比如下午三点左右抵达。此时光线开始变得斜长而金黄，最适合拍摄和感受废墟的沧桑美感。整体游览时间建议预留2.5至3小时。节奏宜慢不宜快，这是一处需要用心“聆听”和“触摸”的地方。先从外部远观，建立整体印象，再缓步进入内部，在残垣断壁间穿梭，最后在黄昏时分静坐，体验光影变幻的魔法。这样的安排能让你避开正午的酷热，并完美捕捉到一天中最美的时刻。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季务必携带充足饮用水并做好防晒，遗址内几乎没有遮阴处。地面不平且多有碎石，一定要穿坚固防滑的徒步鞋或运动鞋。建筑部分结构不稳定，切勿攀爬未设路径的危墙，安全第一。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先把车停在远处空地，徒步走近，从南侧的原野上完整欣赏堡垒修道院与广阔阿连特茹平原构成的苍凉全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过那道已然没有门扇的厚重拱门入口，立刻让自己在由高大残墙围合的内庭中央站定，感受被历史四面环绕的孤寂与宁静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着左侧保存尚好的回廊残迹慢慢走，用手指轻轻拂过石柱上几乎被磨平的雕刻痕迹，想象僧侣们曾在此沉思踱步。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要费力爬上主堡垒那座可以攀登的塔楼遗址，虽然台阶残破需小心，但顶端豁然开朗的视野值得一切，整个克拉图乡野尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`去寻找小礼拜堂那个仅存的、拥有漂亮石雕窗花的尖顶窗，下午四点的阳光会恰好透过它，在地面投下斑驳陆离的光影画卷。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在曾是修士宿舍的区域废墟间安静地坐一会儿，什么都不做，只听风声、鸟鸣和自己的呼吸，让时间的重量慢慢沉淀。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开前，绕到建筑东侧的外墙下，那里有最大一片坍塌的巨石，躺在阴影里，像沉睡的巨人，感受与大地最直接的连接。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`南侧麦田仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`春季或初夏，下午五点后，站在建筑南面几百米开外的田野小路上，用广角镜头将金色的麦浪或绿野作为前景，拍下堡垒修道院雄踞大地之上的孤傲身影。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`回廊拱门框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`午后三点半至四点半，站在内庭，透过一道完好的回廊拱门去拍摄另一端的塔楼废墟，利用拱门形成天然画框，聚焦于光影分割的戏剧性。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`塔楼顶端俯瞰全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，爬上可登临的塔楼顶部，向西拍摄，将蔓延无际的阿连特茹平原、小镇的红屋顶和废墟自身的剪影一同纳入镜头，色彩温暖层次丰富。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`小礼拜堂光影特写`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点左右，阳光斜射入小礼拜堂残窗时，蹲下来，将镜头对准地面上被窗花过滤形成的瑰丽光斑与古老地砖的纹理，拍摄充满哲学感的细节。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`东侧废墟巨石人像互动`}</h4>
                  <p className="text-sm text-gray-700">{`利用清晨或傍晚的低角度侧光，请同伴站在东侧巨大的坍塌石块旁，拍摄人与巨石的剪影或侧影，凸显历史的 scale 与人类的渺小与坚韧。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`建议携带一支中长焦镜头，非常适合捕捉建筑结构的细节和透过远处拱门观看的压缩感画面。尊重遗址，使用无人机前务必查询当地最新法规，通常文化遗产上空禁飞。避免使用过于夸张的滤镜，保持画面本身的古朴与真实质感最为动人。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`乡村石屋体验`}</h4>
                  <p className="text-sm text-blue-800">{`住在克拉图镇边缘由百年农舍改造的客栈，墙壁厚达一米，冬暖夏凉，清晨在公鸡啼鸣和面包炉的香气中醒来，主人会为你奉上自家果园的果酱。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计感隐居之所`}</h4>
                  <p className="text-sm text-green-800">{`选择附近庄园里由老酒窖改造的精品设计酒店，完美融合了原始石材的粗犷与现代设计的简约，泳池直面无边的橄榄园，夜晚星空璀璨至极。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`历史庄园奢华度假`}</h4>
                  <p className="text-sm text-yellow-800">{`入住车程半小时内、建于16世纪的贵族庄园酒店，沉浸在古董家具、家族肖像和华丽瓷砖壁画中，在花园里享用用传统阿连特茹食谱烹调的晚餐。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济便捷之选`}</h4>
                  <p className="text-sm text-purple-800">{`波塔莱格雷市中心舒适的商务酒店，价格实惠，餐饮选择丰富，作为探索克拉图及周边多个历史小镇的完美基地，自驾往返十分方便。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "阿连特茹地区夏季夜间凉爽，但很多老房子无空调，选择住宿时确认好降温设施。乡村住宿普遍安静安全，但夜间照明较少，建议携带小手电。若在7-8月旅行或周末前往，务必提前预订，尤其是特色庄园酒店非常抢手。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开弗洛尔达罗萨很久之后，闭上眼，那片赭红色的废墟依然会清晰地浮现在脑海里。它带来的震撼，并非源于故宫般完满的恢弘，而是恰恰相反，源于那种惊心动魄的残缺。它教会你一种不同的审美：并非所有伟大都需要金碧辉煌来证明，有时，沉默的崩塌、坦然展示的伤口，反而蕴藏着更强大的力量。在这里，你看到信仰如何化为石头，权力如何归于尘土，时间这位最伟大的艺术家，如何用风和水，将刚硬雕琢成诗篇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求效率、热衷打造“完美”体验的快节奏世界，克拉图的这座堡垒修道院遗址像一座精神的锚点。它不提供便捷的缆车、炫目的声光秀，甚至没有完整的屋顶为你遮风挡雨。它只提供一片旷野、一堆石头，和一片无垠的寂静。它要求你放下浮躁，用脚步去丈量，用双手去触摸，用心去聆听风中的低语。每一位热爱深度游的旅人，都应该来一次这里。不是为了收集又一个景点，而是为了完成一场与时间、与历史、也与内心宁静的对话。当你站在夕阳下的废墟中，感受到的不是惆怅，而是一种奇异的平静与开阔——仿佛明白了，何为短暂，何为永恒，而我们，都是这壮美流逝中的一部分。这，或许就是旅行能给予我们最珍贵的礼物。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/alcobaca-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔科巴萨修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alcobaça Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/convent-of-christ-tomar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    托
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">托马尔骑士团修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Convent of Christ</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/convento-dos-capuchos" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡普舒斯修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Convento dos Capuchos</p>
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
