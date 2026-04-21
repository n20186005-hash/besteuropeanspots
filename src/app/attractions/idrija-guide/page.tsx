import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '伊德里亚旅游攻略：500年水银矿与蕾丝的双面深度游指南',
  description: '探索斯洛文尼亚隐秘小镇伊德里亚（Idrija）的双面传奇：世界遗产级古老水银矿与精致蕾丝手工艺。这份深度游攻略带你避开人潮，走进工业与艺术交织的山谷故事。',
}

export default function IdrijaGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '斯洛文尼亚', href: '/destinations/slovenia' },
            { label: '伊德里亚', href: '/attractions/idrija-guide' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`伊德里亚・Idrija・斯洛文尼亚・斯洛文尼亚沿海地区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你厌倦了满是游客的打卡地，今天这份 伊德里亚私藏旅游攻略 ，就是为你准备的。车子在斯洛文尼亚西部蜿蜒的山路间穿行，直到拐进一个被绿色山峦紧紧拥抱的狭窄山谷，伊德里亚就这样毫无征兆地出现在眼前。这里没有恢弘的广场，第一眼甚至有些质朴，但请相信我，它的内里藏着足以撼动世界历史的重量与指尖上的极致温柔。作为你的专属向导，这份 伊德里亚自由行指南 ，将带你揭开它的双重身份：一个是曾为全球供应水银、轰鸣了五个世纪的“红色星球”矿场遗址；另一个是让空气都变得细腻、传承数百年的蕾丝编织圣地。在这里，你会摸到矿道冰冷的岩壁，也会看到阳光穿过蕾丝投下的 delicate 光影。准备好了吗？我们这就躲开人潮，开始一场硬核工业与柔软工艺的对话之旅。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，如果你厌倦了满是游客的打卡地，今天这份 伊德里亚私藏旅游攻略 ，就是为你准备的。车子在斯洛文尼亚西部蜿蜒的山路间穿行，直到拐进一个被绿色山峦紧紧拥抱的狭窄山谷，伊德里亚就这样毫无征兆地出现在眼前。这里没有恢弘的广场，第一眼甚至有些质朴，但请相信我，它的内里藏着足以撼动世界历史的重量与指尖上的极致温柔。作为你的专属向导，这份 伊德里亚自由行指南 ，将带你揭开它的双重身份：一个是曾为全球供应水银、轰鸣了五个世纪的“红色星球”矿场遗址；另一个是让空气都变得细腻、传承数百年的蕾丝编织圣地。在这里，你会摸到矿道冰冷的岩壁，也会看到阳光穿过蕾丝投下的 delicate 光影。准备好了吗？我们这就躲开人潮，开始一场硬核工业与柔软工艺的对话之旅。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`伊德里亚`} />
                <InfoRow label="英文名称" value={`Idrija`} />
                <InfoRow label="正式名称" value={`Idrija`} />
                <InfoRow label="国家" value={`斯洛文尼亚`} />
                <InfoRow label="城市" value={`斯洛文尼亚沿海地区`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`在伊德里亚，历史不是写在书上，而是镌刻在山体和指尖的。1490年，一位制桶匠在这里偶然发现了流动的液态水银（汞），自此，这个寂静山谷的命运被彻底改变。它与西班牙的阿尔马登矿并列，成为近代早期世界上最重要的两大水银矿，2012年它们共同被列入联合国教科文组织世界遗产名录。要知道，在近代美洲白银开采和大航海时代，水银是提炼白银不可或缺的催化剂，伊德里亚的矿藏因此成为全球贸易和经济命脉中 silent but crucial 的一环。它鼎盛时期，矿工及家属构成了小镇人口的绝大部分，发展出一套完整、封闭且高度自治的社区体系。这里的采矿活动持续了整整500年，直到1990年代才完全停止。这段历史不仅关乎资源，更塑造了一种独特的“矿工文化”，从建筑、习俗到坚韧的社区精神，让伊德里亚成为研究欧洲工业文明和社会发展的活化石。理解它，你就理解了推动近代世界运转的一股 hidden force。`} />
                <InfoRow label="建筑特色" value={`伊德里亚的建筑是实用主义与生活情趣的混合体。小镇沿着伊德里察河铺开，建筑大多不高，色调温暖。典型的矿工住宅是朴素的联排房屋，外墙常粉刷成鹅黄、淡粉或浅绿色，配上深红色的瓦片屋顶和简洁的木制窗框，显得整洁而温馨。你很难找到浮夸的装饰，一切以坚固耐用为先。但仔细看，会发现许多细节透露着矿工生活的印记：比如一些老房子厚重的大门，门楣上可能刻有简单的保护符号或建造年份。散落在镇上的矿业行政楼、仓库，则有着更厚重的石基和更大的开窗，透露着昔日工业管理的秩序感。最特别的莫过于那些看似随意摆放、实则精心保留的工业遗迹：巨大的木制水车框架静立在草丛中，锈迹斑斑的矿山轨道蜿蜒消失在小径尽头，还有那些由矿石废料垒成的矮墙，在阳光下泛着独特的暗红色——这些都是“水银红”矿渣，是小镇最独特的建筑“颜料”和记忆地标。`} />
                <InfoRow label="建筑风格" value={`伊德里亚的建筑很难用单一的“哥特式”或“巴洛克”来定义，它更是一种 因地制宜的“矿业实用主义”混合了中欧小镇风格 。由于地处狭窄山谷，土地珍贵，建筑布局紧凑，街巷往往曲折而亲密。受采矿经济影响，这里的建筑风格追求功能至上，但又因长期繁荣，逐渐融入了斯洛文尼亚本土的民间建筑元素。你看那些坡度陡峭的屋顶，是为了快速排走阿尔卑斯山前地区丰富的雨雪；厚实的墙壁是为了抵御山谷的湿冷。晚期一些公共建筑，如建于18世纪的伊德里亚城堡（Grad Idrija）和圣三一教堂，则开始显现出巴洛克风格的影响，比如教堂内部华丽的祭坛和曲线装饰，但这与矿区的质朴形成了有趣的对话。可以说，这里的建筑风格是“生存美学”的体现：没有多余的浮华，每一处设计——从房屋的朝向到窗户的大小——都曾直接服务于采矿生活与社区需求，形成了粗犷与精巧共存的独特视觉语言。`} />
                <InfoRow label="文化价值" value={`伊德里亚的文化价值在于它塑造了一种 “刚柔并济”的独特社区灵魂。一方面，深井之下的危险劳作催生了极强的集体主义、互助精神和对安全的极度尊崇（这里诞生了世界上最早的矿工退休金制度之一）。另一方面，矿工的妻子儿女们，在漫长等待和艰苦生活中，发展出了举世闻名的 伊德里亚蕾丝（Idrijska čipka） 编织技艺。这不仅仅是贴补家用的手工业，更是一种情感表达和美学创造。坚硬的矿镐与柔软的蕾丝针，看似对立，却共同维系了社区的生存与尊严。今天，采矿虽已停止，但这份遗产活着。每年举办的国际蕾丝节吸引全球匠人，蕾丝学校传承着古老的图样；而矿山遗址则转型为博物馆和教育基地，警示着工业化与环境的关系。对于现代社会，伊德里亚是一个关于 韧性、转型与文化遗产活化 的绝佳范例。它告诉人们，一个地区的生命力不仅来自资源，更来自人在逆境中创造美、传承记忆的非凡能力。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 伊德里亚一日游精华打卡路线攻略：从地心矿井到指尖蕾丝`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行步行游览路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的向导，我设计的这条 伊德里亚一日游路线 遵循时空逻辑，让你从“地心”走到“云端”，充分体验它的双面性。上午（硬核起点）：建议9点抵达，直接前往 伊德里亚水银矿遗产管理中心（Cerkvenikov trg 1） 购买门票。这里是你 自由行 的指挥部，先看短片了解背景。随后跟随导览（务必预订！）戴上安全帽，走进 安东尼矿道（Anthony's Main Road） ，这是地下游览的起点，真实感受矿工的世界，行程约1.5小时。中午（能量补给）：从地下出来，步行几分钟到镇中心。午餐必须尝尝伊德里亚的标志美食 “Idrija žlikrofi” （一种特制土豆面疙瘩），推荐前往“Gostilna pri Kmetu”或“Kenda po”这类本地餐馆，感受地道风味。下午（艺术时光）：饭后漫步到 伊德里亚蕾丝学校（Lace School, Prelovčeva ulica 9）。这里不仅是博物馆，常有蕾丝女工现场演示。看着纯白的线在指尖翻飞成繁复图案，时间都慢了。接着，拜访旁边的 伊德里亚城堡（Idrija Castle），登上塔楼，俯瞰整个山谷小镇的全貌，你会对它的地理格局有全新认识。傍晚（闲逛与回味）：在城堡下的老城区随意走走，看看 矿工剧院，在河边找家咖啡馆坐下。当夕阳把老房子的墙壁染成金色，你会觉得，这一天仿佛穿越了好几个世纪。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1. 安东尼矿道入口处的蒸汽卷扬机： 当你走向矿道入口，目光一定会被那个庞然大物吸引——一台保存完好的19世纪巨型蒸汽卷扬机。它通体是经年的黑铁色，巨大的飞轮和连杆静静伫立，仿佛刚刚停止喘息。伸手触摸它冰冷粗糙的表面，几乎能听到当年蒸汽轰鸣、卷扬机将矿工和矿石从数百米深的地底拉上来的巨响。这个细节瞬间将你拉回工业革命的脉搏中心，它是力量与工程的纪念碑，也是整个矿山运行的“心脏”可视化呈现。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2. 蕾丝学校的指尖光影： 在蕾丝学校安静的展厅里，一定要坐在一位正在工作的蕾丝女工旁边。看她的双手，指节或许因常年的劳作而略显粗大，但动作却精准如蝴蝶点水。数十根细针拖着比发丝粗不了多少的亚麻线，在一张布满图钉的枕垫上穿梭、缠绕、打结。阳光从古老的木窗斜射进来，照亮她专注的侧脸，也在洁白的半成品蕾丝上投下错综复杂、不断颤动的影子。那一刻，你会屏住呼吸，时间、声音都凝结在这方寸之间的指尖芭蕾里，这是机械时代无法复制的生命温度。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3. 城堡塔楼上的“山谷拥抱”视角： 爬上伊德里亚城堡并不高的塔楼，整个小镇像一幅立体地图在你脚下展开。关键不在于“壮观”，而在于“清晰”。你能清晰地看到狭窄的伊德里察河如何像一条银线穿镇而过，两岸密密麻麻的彩色屋顶如何紧紧依偎在山谷的“V”形怀抱里。远处，你可以辨认出矿山遗址上遗留的井架轮廓和绿色覆盖的矿渣堆。这个视角让你瞬间明白，为何这里是“隐藏的宝藏”——地理的封闭既保护了矿藏，也孕育了独特的内向型文化社区，一切因果，尽收眼底。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4. 矿工剧院的老座椅与回声： 走进小镇的矿工剧院（Rudarski dom），这是一个不那么起眼但底蕴深厚的地方。找一张老的木制座椅坐下，剧院内部装饰朴素，但音响效果极佳。试着轻轻拍手或低声说话，你能听到清晰温暖的混响。想象一下，几个世纪以来，矿工们结束地底黑暗危险的劳作后，在这里观看演出、举行集会，粗糙的手掌在此处鼓掌，疲惫的心灵在此处得到抚慰。这个空间回荡的不仅是声音，更是一个坚韧社群寻求精神慰藉与身份认同的历史回声。`}</p>
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  时间与预订是王道：伊德里亚不是热门大巴旅游站，但矿井地下导览（Anthony's Main Road）每场人数有限，且非旺季班次较少。最大的“坑”就是没预订直接跑去，结果白跑一趟。务必提前在官网或通过电话预订合适语言的导览团（英语团很抢手）。最佳游览季节是春末到秋初（5-9月），天气宜人。尽量避开周一，很多博物馆（包括蕾丝学校）可能闭馆。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  穿着与装备要对路：参观矿井常年温度只有8-12°C，即使外面夏日炎炎，也必须带一件厚外套或抓绒衣。建议穿防滑的封闭式鞋子（凉鞋、高跟鞋绝对不行），井下部分路段湿滑且不平。矿井会提供安全帽，但自己的舒适着装是关键。地面游览则需舒适步行鞋，小镇有不少上下坡。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  交通与行程安排：伊德里亚没有火车站，主要靠自驾或长途巴士抵达。从首都卢布尔雅那开车约1小时，巴士约1.5小时，但巴士班次一定要提前查好时刻表，尤其返程车次。不建议将行程安排得太赶，这里适合慢下来体验。小镇中心区域步行即可，无需担心复杂交通。自驾的话，镇中心停车场收费且车位紧俏，可留意周边免费或便宜的停车场（如城堡附近）。`}</p>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`在伊德里亚过夜，才能感受山谷入夜后的宁静魔力。住宿选择不多，但各有风味。Hotel Kendov Dvorec 是顶级之选，一座修复的19世纪庄园，坐落在镇外宁静的树林中，自带米其林推荐餐厅，将奢华体验与自然完美结合。若想更接地气，镇中心有如 Penzion Pr'Kmetec 这样的家庭旅馆，房间温馨，主人热情，能给你最地道的旅行贴士。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`说到吃，“Idrija žlikrofi” 是必吃科目。这种半月形的土豆馅面疙瘩，通常佐以羊肉酱或香脆面包屑（´´žganci´´），口感绵密扎实，是矿工时代的高能量食物。一定要去本地人聚集的 Gostilna Pr'Kovač 或 Gostilna pri Kmetu 品尝。此外，别错过 “Idrija štruklji”，一种可甜可咸的卷状面团糕点。搭配一杯本地的蜂蜜酒（medica）或优质的斯洛文尼亚葡萄酒，一顿饭就能吃出历史的滋味。简单的一杯咖啡，也建议去老城广场边的咖啡馆，对着色彩斑斓的老房子慢慢享用。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`从伊德里亚出发，你可以轻松探索斯洛文尼亚另一处震撼的“地下奇观”。推荐1：普利雅玛城堡（Predjama Castle），车程约30分钟。这座城堡戏剧性地镶嵌在一个123米高的悬崖洞穴入口，堪称建筑奇迹。它背后是关于骑士Erazem的传奇故事，与伊德里亚的工业历史形成有趣的骑士传奇对照。推荐2：斯科茨扬溶洞（Škocjan Caves），另一个联合国教科文组织世界遗产，车程约40分钟。这不再是人工矿道，而是自然神力创造的、拥有巨大地下峡谷和雷鸣河流的喀斯特洞穴系统，其规模令人敬畏。从人工开采的“微观”地下世界，到自然造就的“宏观”地下王国，这样的延伸探索能让你对斯洛文尼亚的“地下”维度有一个无比丰满和震撼的认知升级。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`伊德里亚的灵魂，在于它完美地平衡了两种极致：大地深处提取的、沉重而危险的“红色”金属，与阳光下指尖编织的、轻盈而精美的“白色”蕾丝。它告诉你，人类社区可以在最艰苦的现实中，开出最优雅细腻的艺术之花。这不是一个用来匆匆拍照的小镇，而是一个需要你用手去触摸岩壁的冷、用眼去追随丝线轨迹、用心去感受坚韧与温柔如何共生的地方。来这里，带走的不只是照片，还有一种关于生存、创造与传承的，深沉而动人的力量。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/postojna-cave" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    波
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">波斯托伊娜溶洞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Postojna Cave</p>
                  </div>
                </div>
              </a>
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
