import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '什科菲亚洛卡 Škofja Loka｜活着的800年时光，斯洛文尼亚保存最完好的大主教领地 - 最佳欧洲景点',
  description: '车子刚转过一个弯，什科菲亚洛卡就像一幅被时光遗忘的画卷，毫无预兆地在你眼前铺开。第一眼抓住你的，一定是那座横跨在赛尔卡河与波兰扬斯卡河交汇处的卡普钦桥，还有桥后方层层叠叠、挤挤挨挨的红瓦屋顶，它们簇拥着两座教堂的尖塔，在阿尔卑斯山前湛蓝天空的映衬下，色彩饱满得像是刚画上去的。空气里有种清冽的味道，混...',
}

export default function SkofjaLokaMedievalTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '什科菲亚洛卡', href: '/attractions/skofja-loka-medieval-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`什科菲亚洛卡・Škofja Loka・斯洛文尼亚・上卡尼奥拉地区（Škofja Loka Municipality）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚转过一个弯，什科菲亚洛卡就像一幅被时光遗忘的画卷，毫无预兆地在你眼前铺开。第一眼抓住你的，一定是那座横跨在赛尔卡河与波兰扬斯卡河交汇处的卡普钦桥，还有桥后方层层叠叠、挤挤挨挨的红瓦屋顶，它们簇拥着两座教堂的尖塔，在阿尔卑斯山前湛蓝天空的映衬下，色彩饱满得像是刚画上去的。空气里有种清冽的味道，混杂着远处森林的松针香和从河边老磨坊方向飘来的、若有似无的湿润水汽。
当你真的把车停好，双脚踩上那些被无数代人磨得发亮的中世纪石板路时，那种穿越感才变得具体起来。这里没有那种旅游古镇常见的、过于刻意的精致。木筋墙的颜色是朴素的黄、绿、粉，有些地方的灰泥已经斑驳，露出了里面深色的木骨架，反而显得真实可爱。水流声是小镇永不停歇的背景音，清澈见底的河水快速流过桥墩，你能看见水草在下面轻轻摇摆。偶尔有铃声从面包房的方向传来，接着，一股混合着酵母、黄油和烤焦糖的浓郁香气，就会霸道地钻进你的鼻子，告诉你这里的生活从未中断。
当地人对待这座“露天博物馆”的态度也格外平常。你会看见老太太提着菜篮子，不紧不慢地走过14世纪的拱门下；咖啡店外坐着三两个老人，一边抿着小杯的浓咖啡，一边用斯洛文尼亚语低声闲聊，对举着相机的游客早已司空见惯。他们的生活轨迹——买菜、喝咖啡、在广场长椅上晒太阳——就覆盖在古老的地图之上。这种“活着的古迹”感，是什科菲亚洛卡最迷人的地方，它不是一个被玻璃罩起来的标本，而是一个心脏依然在有力跳动的有机体。
它的核心魅力，就在于这种“完整的幸存”。从973年大主教获得这片领地开始，权力、信仰与市井生活就在这里交织、生长。你脚下每一块不规则的石头，墙上每一道风霜的痕迹，窗户上每一盆盛放的天竺葵，都是这个故事的一个章节。它不是卢布尔雅那那样华丽的首都，也不是布莱德湖那样夺目的自然明珠，它更像一位温和睿智的老者，不疾不徐地，用它自己的节奏，向你讲述关于时间、社区与传承的，更加深沉的故事。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子刚转过一个弯，什科菲亚洛卡就像一幅被时光遗忘的画卷，毫无预兆地在你眼前铺开。第一眼抓住你的，一定是那座横跨在赛尔卡河与波兰扬斯卡河交汇处的卡普钦桥，还有桥后方层层叠叠、挤挤挨挨的红瓦屋顶，它们簇拥着两座教堂的尖塔，在阿尔卑斯山前湛蓝天空的映衬下，色彩饱满得像是刚画上去的。空气里有种清冽的味道，混杂着远处森林的松针香和从河边老磨坊方向飘来的、若有似无的湿润水汽。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你真的把车停好，双脚踩上那些被无数代人磨得发亮的中世纪石板路时，那种穿越感才变得具体起来。这里没有那种旅游古镇常见的、过于刻意的精致。木筋墙的颜色是朴素的黄、绿、粉，有些地方的灰泥已经斑驳，露出了里面深色的木骨架，反而显得真实可爱。水流声是小镇永不停歇的背景音，清澈见底的河水快速流过桥墩，你能看见水草在下面轻轻摇摆。偶尔有铃声从面包房的方向传来，接着，一股混合着酵母、黄油和烤焦糖的浓郁香气，就会霸道地钻进你的鼻子，告诉你这里的生活从未中断。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当地人对待这座“露天博物馆”的态度也格外平常。你会看见老太太提着菜篮子，不紧不慢地走过14世纪的拱门下；咖啡店外坐着三两个老人，一边抿着小杯的浓咖啡，一边用斯洛文尼亚语低声闲聊，对举着相机的游客早已司空见惯。他们的生活轨迹——买菜、喝咖啡、在广场长椅上晒太阳——就覆盖在古老的地图之上。这种“活着的古迹”感，是什科菲亚洛卡最迷人的地方，它不是一个被玻璃罩起来的标本，而是一个心脏依然在有力跳动的有机体。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，就在于这种“完整的幸存”。从973年大主教获得这片领地开始，权力、信仰与市井生活就在这里交织、生长。你脚下每一块不规则的石头，墙上每一道风霜的痕迹，窗户上每一盆盛放的天竺葵，都是这个故事的一个章节。它不是卢布尔雅那那样华丽的首都，也不是布莱德湖那样夺目的自然明珠，它更像一位温和睿智的老者，不疾不徐地，用它自己的节奏，向你讲述关于时间、社区与传承的，更加深沉的故事。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`什科菲亚洛卡`} />
                <InfoRow label="英文名称" value={`Škofja Loka`} />
                <InfoRow label="正式名称" value={`Škofja Loka`} />
                <InfoRow label="国家" value={`斯洛文尼亚`} />
                <InfoRow label="城市" value={`上卡尼奥拉地区（Škofja Loka Municipality）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`斯洛文尼亚境内唯一一个由大主教建立并统治长达八个世纪的城镇，是阿尔卑斯山南麓中世纪领地治理的活化石。`} />
                <InfoRow label="建筑特色" value={`由上下两城组成，以蜿蜒的河道与三座古桥相连，建筑群层次分明，色彩斑斓的木筋屋与石砌豪宅并存，保留了异常完整的中世纪城镇肌理。`} />
                <InfoRow label="建筑风格" value={`阿尔卑斯山麓的中世纪民间建筑风格与后期文艺复兴、巴洛克元素的巧妙融合。`} />
                <InfoRow label="文化价值" value={`不仅是一座建筑博物馆，更是一个持续呼吸的社区，其中传承的《什科菲亚洛卡受难记》是斯洛文尼亚最古老的保存完好的戏剧文本。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇公共区域全天开放。核心景点洛卡城堡博物馆开放时间：夏季（4月-10月）周二至周日 10:00 - 18:00；冬季（11月-3月）周二至周日 10:00 - 16:00；周一闭馆（若遇公共假日则顺延）。每年1月1日、11月1日和12月25日闭馆。斯帕辛城堡塔楼观景台开放时间随季节调整，通常在5月至9月的周末及节假日开放，建议行前查询官网。`} />
              <InfoRow label="门票价格" value={`进入古镇及漫步街道免费。洛卡城堡博物馆：成人票8欧元，学生、儿童及老人票6欧元，家庭套票（2大2小）20欧元。斯帕辛城堡塔楼观景台：门票约3欧元。持有斯洛文尼亚旅游卡可享受部分折扣。`} />
              <InfoRow label="地址" value={`Mestni trg 1, 4220 Škofja Loka, Slovenia`} />
              <InfoRow label="交通方式" value={`从最近的主要交通枢纽卢布尔雅那出发（约25公里）。从卢布尔雅那机场打车前往约需35分钟，费用约40-50欧元。公共交通：在卢布尔雅那中央巴士站乘坐前往Škofja Loka的巴士（线路号通常为1或11），班次频繁，约每30分钟一班，行程约45分钟至1小时，车票可在巴士站购买或上车向司机购买，单程票价约4欧元。自驾最便捷，沿E61/A2公路向西北方向行驶，转入102号地方公路，有清晰路标，镇外设有多个付费停车场（如Podlubnik停车场），古镇中心为步行区。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从一张羊皮纸说起。公元973年，神圣罗马帝国皇帝奥托二世大笔一挥，将一片位于塞尔卡河谷的丰饶土地，赏赐给了来自巴伐利亚的弗赖辛主教。这不是普通的封地，而是一份带着特殊使命的礼物，旨在巩固帝国在阿尔卑斯山南麓的边疆。于是，以一座俯瞰河谷的山丘城堡为中心，一个以大主教为领主的教会国度悄然诞生。“洛卡”意为河畔草地，而“什科菲亚”（Škofja）则直白地宣告了它的主人——主教大人。在接下来的八个世纪里，无论外面的王朝如何更迭，战火如何蔓延，这里始终是弗赖辛大主教们稳固的世外庄园，这种超乎寻常的政治稳定性，为小镇保存下最原始的中世纪格局埋下了伏笔。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了中世纪鼎盛时期，大主教们的经营让什科菲亚洛卡繁荣起来。两条河流提供了天然屏障和动力，手工业，尤其是织布和皮革加工，蓬勃发展。富裕的商人和行会开始建造体现他们财富的房屋，这些建筑不再仅仅是遮风避雨的处所，而是有了装饰性的山墙、彩绘的立面和外凸的飘窗。小镇自然地分成了“上城”和“下城”：上城环绕着圣雅各布教堂和最初的城堡，是神职人员和贵族的领地；下城则沿着河流和市场铺开，充满了工匠的作坊和商人的店铺。三座石桥将两部分紧密连接，也连接起了精神与世俗生活。大主教的统治并非只有严苛的税赋，他们也带来了文化和教育，最早的学校在此建立，拉丁文的诵读声开始在石头建筑间回响。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，再坚固的石头也怕烈火。1660年的一场灾难性大火，几乎将下城的木结构房屋吞噬殆尽。这场灾难却意外地成为了小镇重生的契机。在重建时，人们吸取了教训，开始采用更多的石材，并引入了当时流行的文艺复兴和早期巴洛克风格的元素。我们今天看到的那些色彩柔和的立面、规整的窗户和装饰性的门楣，很多都源于这次重建。火灾没有摧毁小镇的格局，反而让它的风貌叠加了一层新的时代印记。也是在这个时期，小镇与斯洛文尼亚的文化身份深深绑定。方济各会修士在这里用斯洛文尼亚语创作并演出了《什科菲亚洛卡受难记》，这部充满宗教虔诚与民间活力的戏剧手稿，成为了斯洛文尼亚语最早的戏剧文献，让小镇的名字永远镌刻在了国家的文化基因里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`随着拿破仑战争的铁蹄踏过，神圣罗马帝国解体，大主教长达八百年的统治在19世纪初戛然而止。什科菲亚洛卡并入了奥匈帝国，后来又成为南斯拉夫的一部分。失去了特殊的政治地位，它仿佛沉睡了，工业化的大潮主要涌向了附近的卢布尔雅那，这里的发展相对缓慢。塞翁失马，焉知非福。正是这种“被忽略”，使它奇迹般地躲过了二十世纪大规模的城市改造和战争带来的严重破坏。那些中世纪的街道网络、文艺复兴的广场、古老的桥梁和混杂的建筑立面，都被原封不动地保留了下来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到今天，什科菲亚洛卡人清醒地认识到他们守护的是何等珍宝。他们没有将老城变成纯粹的旅游商品，而是致力于“活态保护”。人们依然住在这些几百年的老房子里，开着面包店、五金铺和画廊。洛卡城堡被精心修复成博物馆，讲述着这片土地从史前到现代的故事。每年，当地人还会依照古老的手稿，穿上传统服装，在街头重现《受难记》的场景。历史在这里不是橱窗里的展品，而是流淌在日常生活里的血液。从大主教的权杖之下，到今日平静的日常之中，什科菲亚洛卡完成了一次优雅的转身，将它八百年的记忆，完好地捧给了每一个到访的旅人。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味什科菲亚洛卡，建议预留完整的一天，并在上午十点前抵达。这样的安排既能避开可能出现的少量旅游团，又能享受到清晨柔和的光线，此时的小镇刚刚苏醒，生活气息最为浓郁。整体游览节奏宜慢不宜快，核心在于“漫步”与“沉浸”。路线设计为一条环线，先从制高点建立全局印象，再深入街巷触摸细节，最后在河边静坐回味。大致需要4-6小时，这还不包括在咖啡馆发呆或博物馆深度参观的时间。先从镇外山丘上的斯帕城堡观景台开始，这是理解小镇地理格局的绝佳起点。随后下山过桥进入老城，沿着主街漫步至中心广场，参观教堂与城堡博物馆。下午的时光可以留给随性的巷弄探索，最后在卡普钦桥附近找张长椅坐下，看光影在红瓦屋顶上移动，为旅程画上宁静的句号。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周日及节假日许多小店和博物馆可能开放时间缩短或闭馆，尽量安排工作日前往。
古镇石板路多且略有起伏，务必穿一双绝对舒适防滑的步行鞋。
如果对《什科菲亚洛卡受难记》历史剧感兴趣，行前务必查询官网，若能赶上复活节期间的盛大演出，将是终生难忘的体验。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一早驱车或步行至镇外山丘上的斯帕辛城堡遗址，登上仅存的塔楼观景台，让双眼饱览整个什科菲亚洛卡被两条玉带般河流环绕、红瓦屋顶在绿野中铺展的震撼全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着绿树成荫的小径下山，走过那座有着美丽木制屋顶的卡普钦桥，听脚下塞尔卡河水哗哗流淌，正式踏入中世纪的世界。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着石板主街（Mestni trg）慢慢向中心广场溜达，别只顾着看路，记得抬头欣赏两侧民居墙上那些历经风雨却依然生动的壁画、古老的家族徽章和造型各异的铁艺招牌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在中心广场的圣雅各布教堂前静立片刻，然后推门进去，让眼睛适应昏暗的光线，感受内部朴素的哥特式拱顶与华丽巴洛克祭坛形成的奇妙对话。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花上一两个小时泡在洛卡城堡博物馆里，不仅看珍宝，更透过古老的窗口，再次俯瞰你刚刚走过的屋顶与街道，将历史叙事与眼前风景重叠在一起。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡下来后，别走回头路，随意拐进一条名叫“鞋匠巷”或“铁匠巷”的狭窄岔路，用指尖触摸冰凉的石墙，想象几百年前工匠们在此劳作的声响与气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到那家传说中的传统面包房，买一个刚出炉的“洛卡蛋糕”或一片铺满罂粟籽的面包，让味蕾也记住这个地方的甜蜜。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在黄昏降临前，回到卡普钦桥附近的河岸，找一张空着的长椅坐下，什么都不做，只是看夕阳的金光如何为对岸色彩斑斓的房子逐一镀上暖边，直到灯光从窗口点点亮起。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`斯帕辛城堡塔楼观景台`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，使用广角镜头，将蜿蜒的河流、色彩斑斓的古镇屋顶与远方朦胧的阿尔卑斯山一同纳入画框，构图时让河流形成自然的引导线。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`卡普钦桥中段侧拍`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗的上午，阳光能照亮对岸的建筑立面，站在桥的一侧，以另一侧桥廊的木质结构为前景框架，拍摄倒映在清澈河水中的连排房子与教堂尖塔，画面宁静而富有纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`洛卡城堡博物馆的某个西向窗口`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，阳光斜射，从城堡上层一个朝西的窗口向外拍摄，以古老的石窗框为画框，聚焦于下方老城起伏的屋顶和街道上如织的行人，营造“偷窥历史”的叙事感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣雅各布教堂后方的小巷`}</h4>
                  <p className="text-sm text-gray-700">{`午后阳光穿过狭窄巷弄，形成明显的光影分割，寻找一处有特色门环或墙绘的角落，等待一个当地人（如骑自行车的老者）进入光影区域时按下快门，捕捉动静结合的生活瞬间。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`小镇建筑色彩丰富，阴天时光线柔和均匀，反而能更好地呈现这些色彩的饱和度与细节，不必执着于晴天。`}</li>
                <li>• {`拍摄当地居民或店铺内部时，请务必先微笑并征得同意，斯洛文尼亚人普遍友好但注重隐私。`}</li>
                <li>• {`使用无人机拍摄全景前，务必了解当地法规，并远离人群和私人宅院上空，尊重古镇的宁静。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`老城边缘一栋16世纪木筋墙房子里的家庭客栈，房间不大却一尘不染，女主人会为你准备丰盛的自家农场早餐，晚上能听见清晰的流水声伴你入眠。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`坐落在塞尔卡河畔一座经过智能改造的历史建筑内，设计融合了极简现代与原始石墙、木梁，躺在床上就能看到古老的卡普钦桥和潺潺流水。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`位于古镇几公里外一座静谧山丘上的庄园酒店，由19世纪的贵族别墅改建，拥有无边泳池、葡萄园和全景露台，是体验上卡尼奥拉乡村奢华生活的完美选择。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`独特体验`}</h4>
                  <p className="text-sm text-purple-800">{`预订附近村庄里由传统农庄改造的民宿，和主人家一起采摘果园里的苹果，晚上在壁炉边听他们讲述本地山精水怪的古老传说。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古镇中心住宿数量有限且极为抢手，尤其是夏季和圣诞集市期间，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果自驾，选择镇外或周边村庄的住宿往往性价比更高，且能享受更纯粹的斯洛文尼亚乡村宁静，开车进镇仅需几分钟。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`许多小型民宿不设24小时前台，通过邮件或平台与主人确认好具体的入住交接时间至关重要，他们会很乐意为你提供详细的指引。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开什科菲亚洛卡时，我带走的不仅仅是一张张照片和关于大主教的历史知识，更多的是一种久违的、关于时间的实感。在这个一切都被加速的时代，我们习惯了追逐“网红”地标，打卡然后匆匆离去。但在这里，时间呈现出另一种质地——它是缓慢的、层叠的、循环的。你会感觉到，从973年至今的岁月，并非一条直线流逝，而是像古镇脚下的河水一样，沉积在每一块石头里，回响在每一次教堂钟声里，烘焙在每一炉面包的香气里。它让你重新思考，什么才是真正的“保存”？不是冷冻，而是让生命在不同的时代里，都能找到与之共鸣的节奏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了浮光掠影的旅行，渴望一场能沉静心灵的对话，请一定来什科菲亚洛卡。它可能不会在第一时间用壮丽的景象冲击你，但它会像一位老朋友，用潺潺水声、面包暖香和墙角一丛盛放的花，慢慢地、耐心地，治愈你的匆忙。它告诉我们，最美的遗产，不是孤立的宫殿或教堂，而是一个仍然在认真生活、记得自己从何而来的完整社区。在这里，你会找到那份属于古老欧洲的、从容不迫的灵魂，并把它当作一份珍贵的礼物，收藏进自己的生命记忆里。这，正是深度旅行的意义所在。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/piran-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    皮
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">皮兰老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Piran</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/piran-salt-pans-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    皮
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">皮兰盐田与老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Piran Salt Pans & Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/skocjan-caves" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    什
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">什科茨扬溶洞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Škocjan Caves</p>
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
