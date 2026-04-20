import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '图尔库大教堂 Turku Cathedral｜芬兰的灵魂基石，聆听七百年砖石间的历史回响 - 最佳欧洲景点',
  description: '还记得我第一次走近图尔库大教堂的那个深秋午后吗？空气里是波罗的海沿岸特有的、混合着湿润水汽和落叶微腐的清冷气息。转过街角，它就这样毫无预兆地撞进视线——不是那种尖顶刺破苍穹的凌厉，而是一种敦厚的、由暗红色砖块层层垒起的坚实存在。塔楼像一位沉默的巨人，守护着脚下这片芬兰最古老的土地。钟声忽然响了，不是',
}

export default function TurkuCathedralPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '图尔库大教堂', href: '/attractions/turku-cathedral' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`图尔库大教堂・Turku Cathedral・芬兰・图尔库`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`还记得我第一次走近图尔库大教堂的那个深秋午后吗？空气里是波罗的海沿岸特有的、混合着湿润水汽和落叶微腐的清冷气息。转过街角，它就这样毫无预兆地撞进视线——不是那种尖顶刺破苍穹的凌厉，而是一种敦厚的、由暗红色砖块层层垒起的坚实存在。塔楼像一位沉默的巨人，守护着脚下这片芬兰最古老的土地。钟声忽然响了，不是急促的叮当，而是浑厚的、缓慢的“咚……咚……”，声音仿佛有重量，沉甸甸地落在石板路上，再滚进奥拉河潺潺的水声里，那一刻，整个喧闹的老城似乎都安静了一秒。
推开那扇厚重的木门，外面的世界瞬间被隔开。一股复杂的味道涌来：古老木头的微甜、石头的凉意、燃烧过无数个世纪的蜡烛的蜡油味，还有一丝极淡的、属于书籍和织物的陈旧气息。最冲击视觉的，是那片无比纯净的白色。高高的拱顶、墙壁、立柱，都被刷成了皎洁的白色，阳光从高窗斜射进来，在白色的平面上切割出明暗分明的几何光影。这与外部红砖的深沉形成了一种奇妙的对话——外在是抵御严寒风霜的坚韧躯体，内在则是北欧灵魂所向往的、极简而光明的精神殿堂。
你会发现，这里远不止是一个旅游景点。长椅上，有老人捧着圣经静静阅读；侧堂里，一位母亲带着蹒跚学步的孩子点燃了一支细长的蜡烛；管风琴师在远处调试着音栓，流淌出几个试音的和弦。它完全融入了图尔库人的日常生活，是婚礼的起点，是圣诞颂歌回荡的地方，也是平凡日子里可以随时进来坐一坐、发会儿呆的“城市客厅”。这种神圣与日常的无缝衔接，恰恰是它最动人的魅力——信仰在这里不是高高在上的教条，而是一种像呼吸一样自然、像自家客厅一样亲切的温暖存在。
它的核心魅力，就在于这种“基石”般的厚重感。当你触摸那些被无数人摩挲得光滑温润的木质讲坛，或是仰望祭坛后方那幅巨大的、描绘着天使报喜的金色壁画时，你触摸到的不只是一座教堂的历史，更是整个芬兰民族国家意识的摇篮。每一次战争、瘟疫、大火后的重建，都在它的砖石上留下了印记。它不言不语，却讲述着这个北欧民族如何从灰烬中一次次站起，如何将信仰与民族韧性紧紧编织在一起的故事。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`还记得我第一次走近图尔库大教堂的那个深秋午后吗？空气里是波罗的海沿岸特有的、混合着湿润水汽和落叶微腐的清冷气息。转过街角，它就这样毫无预兆地撞进视线——不是那种尖顶刺破苍穹的凌厉，而是一种敦厚的、由暗红色砖块层层垒起的坚实存在。塔楼像一位沉默的巨人，守护着脚下这片芬兰最古老的土地。钟声忽然响了，不是急促的叮当，而是浑厚的、缓慢的“咚……咚……”，声音仿佛有重量，沉甸甸地落在石板路上，再滚进奥拉河潺潺的水声里，那一刻，整个喧闹的老城似乎都安静了一秒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`推开那扇厚重的木门，外面的世界瞬间被隔开。一股复杂的味道涌来：古老木头的微甜、石头的凉意、燃烧过无数个世纪的蜡烛的蜡油味，还有一丝极淡的、属于书籍和织物的陈旧气息。最冲击视觉的，是那片无比纯净的白色。高高的拱顶、墙壁、立柱，都被刷成了皎洁的白色，阳光从高窗斜射进来，在白色的平面上切割出明暗分明的几何光影。这与外部红砖的深沉形成了一种奇妙的对话——外在是抵御严寒风霜的坚韧躯体，内在则是北欧灵魂所向往的、极简而光明的精神殿堂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你会发现，这里远不止是一个旅游景点。长椅上，有老人捧着圣经静静阅读；侧堂里，一位母亲带着蹒跚学步的孩子点燃了一支细长的蜡烛；管风琴师在远处调试着音栓，流淌出几个试音的和弦。它完全融入了图尔库人的日常生活，是婚礼的起点，是圣诞颂歌回荡的地方，也是平凡日子里可以随时进来坐一坐、发会儿呆的“城市客厅”。这种神圣与日常的无缝衔接，恰恰是它最动人的魅力——信仰在这里不是高高在上的教条，而是一种像呼吸一样自然、像自家客厅一样亲切的温暖存在。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，就在于这种“基石”般的厚重感。当你触摸那些被无数人摩挲得光滑温润的木质讲坛，或是仰望祭坛后方那幅巨大的、描绘着天使报喜的金色壁画时，你触摸到的不只是一座教堂的历史，更是整个芬兰民族国家意识的摇篮。每一次战争、瘟疫、大火后的重建，都在它的砖石上留下了印记。它不言不语，却讲述着这个北欧民族如何从灰烬中一次次站起，如何将信仰与民族韧性紧紧编织在一起的故事。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`图尔库大教堂`} />
                <InfoRow label="英文名称" value={`Turku Cathedral`} />
                <InfoRow label="正式名称" value={`Turku Cathedral`} />
                <InfoRow label="国家" value={`芬兰`} />
                <InfoRow label="城市" value={`图尔库`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`芬兰最古老、最重要的宗教建筑，是芬兰路德宗主教堂和国家性的精神象征。`} />
                <InfoRow label="建筑特色" value={`一座宏伟的哥特式红砖建筑，拥有高耸的塔楼和简洁有力的北欧线条，内部是令人震撼的白色与金色交织的宁静空间。`} />
                <InfoRow label="建筑风格" value={`以北欧哥特式风格为基础，历经多次重建与修复，融合了中世纪砖砌哥特式、文艺复兴及新哥特式等多种元素。`} />
                <InfoRow label="文化价值" value={`不仅是信仰中心，更是芬兰民族历史、文化认同与重大国家记忆的载体与见证者。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年开放，具体时间随季节变化。夏季（5月至9月）通常为上午9:00至晚上20:00；冬季（10月至次年4月）通常为上午10:00至晚上18:00。周日开放时间较晚，通常从中午12:00开始。教堂在举行宗教仪式（如周日礼拜、婚礼、葬礼）期间会临时对游客关闭部分区域，建议出行前在其官方网站查询最新时刻表。圣诞节、元旦及复活节等重大节日期间开放时间会有特殊调整。`} />
              <InfoRow label="门票价格" value={`进入教堂主体免费。教堂内的附属小博物馆（珍宝馆）需购票参观，成人票价约为5欧元，学生及儿童有优惠。教堂塔楼（如需登顶）可能需要支付少量费用，具体价格请现场咨询。导览器租赁（多语言）费用约为3-5欧元。`} />
              <InfoRow label="地址" value={`Tuomiokirkonkatu 1, 20500 Turku, Finland`} />
              <InfoRow label="交通方式" value={`从赫尔辛基万塔机场出发最便捷的方式是乘坐芬兰国铁（VR）或长途巴士。乘坐机场快线巴士至赫尔辛基中央火车站，转乘火车前往图尔库中央火车站，全程约2小时，班次频繁。从图尔库中央火车站步行至大教堂仅需15分钟，沿途可欣赏奥拉河风光。从图尔库机场出发，可搭乘1路公交车至市中心，再步行10分钟即达。自驾可将车停在教堂周边的收费停车场，但老城区车位紧张，建议使用公共交通。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事得从将近八百年前说起。那还是个被称为“十字军时代”的遥远年代，瑞典的传教士和殖民者乘船渡过波罗的海，来到了这片遍布森林和湖泊的土地。大约在13世纪末，为了稳固基督教在这片新土地上的地位，一座用木头搭建的圣玛丽教堂在这里被建立起来，这就是图尔库大教堂最早、最 humble 的前身。你可以想象，在寒冷的北欧冬夜里，这座小木屋教堂里摇曳的烛光，可能就是方圆几十里内唯一文明与信仰的微弱星火。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，木头在北欧的严寒与战争中太脆弱了。到了14世纪早期，人们决定用更坚固的材料来荣耀上帝——砖。来自瑞典的工匠们带来了中欧流行的哥特式风格，但在这里，它被简化、被适应，形成了更朴实、更厚重的北欧哥特式样。教堂的主体结构，尤其是那宏伟的中殿和唱诗班席位，就在这个时期逐渐用红砖砌筑起来。工程断断续续，跨越了几乎整个世纪，每一块砖都凝聚着那个时代人们的虔诚与汗水。当时，图尔库是整个芬兰最重要的城市，这座不断长高的教堂，自然成为了整个芬兰教区的中心，它的主教权力极大，甚至能影响王国的政治。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但它的命运多舛，仿佛注定要成为芬兰苦难的象征。1827年，一场图尔库史上空前的大火席卷了整个城市，木质结构的老城几乎化为灰烬。大教堂也未能幸免，塔楼被烧毁，屋顶坍塌，内部精美的装饰和无数历史文献付之一炬。那一定是芬兰人心中最黑暗的记忆之一，他们最重要的精神图腾在烈焰中哀嚎。然而，正是这场灾难，塑造了它今天的模样。大火之后的重建，没有选择完全复原旧貌，而是由德国建筑师卡尔·路德维格·恩格尔主导，进行了一次“凤凰涅槃”式的改造。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`恩格尔赋予了它新的灵魂。他将内部彻底刷白，用极致的纯净来抚平火灾的创伤记忆；他设计了新的、更高的塔楼，让它在重生后显得更加挺拔庄严；他引入了新古典主义的元素，让内部空间在哥特式的骨架下，呈现出一种冷静、理性的北欧气质。这场重建，更像是一次民族精神的淬炼。芬兰人没有在废墟上哭泣太久，他们用石灰的白色覆盖了火焰的黑色，用更高的塔尖宣示着不屈的重生。从此，这座红白相间的教堂，就成了芬兰民族坚韧性格最直观的石头史诗。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`进入20世纪，它继续见证着国家的风风雨雨。在芬兰内战、冬季战争和持续战争的艰难岁月里，它的钟声为逝者哀鸣，也为生者祈求和平。1990年代，它又经历了一次大规模的精修，古老的砖石被小心呵护，内部设施得以现代化。今天，当你站在其中，你能同时触摸到中世纪工匠的指纹、19世纪建筑师的美学革新，以及现代芬兰人对历史的虔诚守护。它不再只是一座教堂，而是一个层层叠加的历史现场，每一代人都在上面留下了自己的印记，共同写就了这本立体的、属于芬兰的“石头之书”。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要深度感受图尔库大教堂，我强烈建议你安排至少三到四个小时，并选择一个工作日的上午前往。早晨的光线最适合拍照，而且游客相对稀少，你能真正体验教堂的宁静本貌。先从外部开始，绕着教堂走一圈，感受它的体量和环境；然后进入内部，让感官慢慢适应那份肃穆与光明；接着参观小博物馆，了解文物背后的故事；如果体力允许，最后可以挑战登顶塔楼（视开放情况），将整座历史名城尽收眼底。这样的节奏由外到内，由宏观到细节，由地面到天空，能让你对这座建筑的理解形成一个完整的闭环。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周日中午及下午常有礼拜或音乐会，虽然可以参观但需保持绝对安静并避开仪式区域，若想获得完整游览体验请避开这些时段。
教堂内部地面多为古老石砖，穿着舒适防滑的鞋子非常重要，女士避免鞋跟过细的高跟鞋。
尊重当地礼仪，进入时即使不信教也请保持衣着得体（避免过于暴露的背心短裤），室内拍照请关闭闪光灯并保持安静。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂南侧奥拉河畔的公园开始你的漫步，以河水和老城建筑为前景，完整欣赏大教堂雄伟的侧影与倒影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到正门前广场，停下脚步，仰头细细观察那座高耸入云的塔楼和上面精致的钟面，留意砖墙上不同颜色和质感的修补痕迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`轻轻推开主入口那扇厚重的橡木门，先在门廊处停留片刻，让眼睛适应内部光线的变化，并感受那股扑面而来的、混合着历史的气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着中殿中央的步道缓缓走向祭坛，目光跟随两侧高耸的白色立柱向上，一直延伸到布满肋状拱顶的屋顶，体验空间带来的神圣升腾感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在祭坛前左侧，找到那组精美的文艺复兴风格石棺，上面雕刻着沉睡的骑士与贵族，这是芬兰中世纪艺术最珍贵的遗存之一。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`转到祭坛后方，花些时间欣赏那幅巨大的金色主祭坛画，观察光影如何在金色的浮雕与天使的面容上流转。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`别忘了走进北侧的侧翼小教堂，那里通常更加静谧，彩绘玻璃窗会在地面上投下斑斓的光影，是静坐沉思的绝佳角落。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后前往教堂后部的附属小博物馆，那里陈列着从中世纪保存下来的圣器、雕塑和纺织品，每一件都诉说着被大火吞噬前的辉煌记忆。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`奥拉河南岸远眺`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，从河对岸的“帕里卡拉公园”用长焦镜头拍摄，能将大教堂的塔楼、红砖墙体与它在平静河水中的完美倒影一同纳入画面，构成一幅对称而宁静的经典风景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`中殿拱顶仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`选择正午前后阳光最充沛时，躺在中殿地面的中心（确保不影响他人），用广角镜头垂直向上拍摄，能捕捉到白色肋拱如同巨大骨骼般向中心汇聚的震撼几何构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`侧廊光影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`下午两三点，阳光透过南侧高大的彩绘玻璃窗射入侧廊，找到光斑最清晰落在地面或长椅上的位置，等待一位路人或静坐者走入光影，抓拍下明暗对比与人物剪影带来的故事感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`塔楼登顶俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`如果塔楼开放，登顶后不要只拍城市全景，将镜头对准脚下教堂本身锈绿色的铜屋顶和错综复杂的建筑结构，俯拍视角能展现常人看不到的建筑肌理之美。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`北欧冬季日照时间极短，黄金拍摄时间可能只有中午前后两三小时，务必提前规划好机位和路线。`}</li>
                <li>• {`教堂内部允许非商业摄影，但严禁使用三脚架和自拍杆，以防绊倒他人或破坏古老地砖，手持拍摄时注意提高感光度以保证画面清晰。`}</li>
                <li>• {`拍摄当地做礼拜的信徒或点燃蜡烛的人们时，请务必保持距离，尊重他们的隐私与神圣时刻，最好采用背影或远景，避免正面特写。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河景之选`}</h4>
                  <p className="text-sm text-blue-800">{`紧邻奥拉河、距离教堂仅五分钟步程的精品设计酒店，房间拥有整面落地窗，清晨醒来就能看到大教堂塔楼沐浴在晨曦中的倒影躺在河面上。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史沉浸`}</h4>
                  <p className="text-sm text-green-800">{`由一栋19世纪新艺术风格老建筑改造的家庭式旅馆，位于静谧的教堂街区，木地板吱呀作响，房东会为你准备地道的芬兰早餐和关于老城的故事。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`现代便捷`}</h4>
                  <p className="text-sm text-yellow-800">{`图尔库中央火车站旁的连锁酒店，交通枢纽位置，房间简约舒适，特别适合乘坐早班火车抵达或需要赶路的旅客，步行至教堂也只需十五分钟。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`庄园体验`}</h4>
                  <p className="text-sm text-purple-800">{`位于图尔库外围群岛上的独特海滨木屋民宿，需要乘一小段船，但能让你在夜晚的绝对宁静中遥望城市灯火与大教堂的轮廓，体验真正的北欧避世感。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（6月至8月）是图尔库旅游旺季，酒店价格高涨且一房难求，务必提前至少两三个月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`老城区街道多为石板路，拖着大行李箱行走会非常吃力，选择住宿时最好确认其是否提供接送服务或位于平坦易达的地段。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`图尔库整体治安非常好，即便是夜晚独自在教堂周边散步也很安全，但冬季天黑早且寒冷，建议早些返回住处。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开图尔库大教堂很久之后，我脑海里反复回味的，不是它有多高大，也不是它有多少精美的细节，而是一种奇特的“安定感”。在这个飞速旋转、信息爆炸的时代，我们习惯了追逐新奇与刺激，但在这里，时间仿佛被那些厚重的红砖和白色的拱顶过滤了，流速变得缓慢而沉稳。它像一位历经沧桑却眼神平静的老者，只是静静地坐在那里，就足以让躁动的心安静下来。它告诉你，有些东西是可以跨越七个世纪而不倒的，比如信仰，比如人们对美与永恒的追求，比如一个民族在灾难后重建家园的坚韧意志。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这或许就是深度旅行最珍贵的收获——它不仅仅是在地图上又多了一个打卡点，而是让你在一个截然不同的时空坐标里，重新校准自己内心的罗盘。图尔库大教堂就是这样一个“坐标”。它没有巴黎圣母院那样的全球声名，也没有梵蒂冈圣彼得大教堂那样的极致辉煌，但它所承载的，是一个边缘小国如何用石头和信仰书写自己命运的故事，这种真实、粗粝而又充满生命力的历史肌理，反而更具有直击人心的力量。所以，如果你厌倦了浮光掠影的景点奔波，渴望一次真正能触摸到历史脉搏、能让自己内心沉淀下来的旅程，那么，请一定来图尔库，来这座红砖白墙的圣殿里坐一坐。听一听那古老的钟声，是如何在今天，依然深沉地敲响。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/naantali-presidential-summer-resident-and-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    楠
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">楠塔利（芬兰总统夏宫及木屋老城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Naantali</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lenzkirch" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    伦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">伦茨基尔希城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lenzkirch Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/porvoo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    波
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">波尔沃古镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Porvoo Old Town</p>
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
