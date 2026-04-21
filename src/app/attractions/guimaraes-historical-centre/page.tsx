import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '吉马良斯历史中心 Guimarães｜探访葡萄牙的摇篮，漫步在中世纪生活画卷里 - 最佳欧洲景点',
  description: '火车缓缓驶入吉马良斯，窗外的景色从波尔图郊区的现代感，逐渐退回到红瓦屋顶和石墙的世界。走出车站，第一口呼吸的空气里，有种特别的清冽，混杂着远处烤栗子的焦香和湿润石头上淡淡的苔藓味。你并不是走向一个“景区”，而是径直走进了一座仍在从容呼吸的中世纪城镇。沿着略有坡度的石板路向上，脚步的声响在安静的巷弄里...',
}

export default function GuimaraesHistoricalCentrePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '葡萄牙', href: '/destinations/portugal' },
            { label: '吉马良斯历史中心', href: '/attractions/guimaraes-historical-centre' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`吉马良斯历史中心・Guimarães Historical Centre・葡萄牙・吉马良斯`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`火车缓缓驶入吉马良斯，窗外的景色从波尔图郊区的现代感，逐渐退回到红瓦屋顶和石墙的世界。走出车站，第一口呼吸的空气里，有种特别的清冽，混杂着远处烤栗子的焦香和湿润石头上淡淡的苔藓味。你并不是走向一个“景区”，而是径直走进了一座仍在从容呼吸的中世纪城镇。沿着略有坡度的石板路向上，脚步的声响在安静的巷弄里格外清晰，阳光把两侧黄白色墙壁照得发亮，铸铁阳台上的天竺葵开得正艳，生活的气息从半开的木门后飘散出来——是炖菜的香气和电视里足球赛的喧哗。
它的心脏，是那个被称为“橄榄树广场”的地方。这里没有令人窒息的游客大军，只有当地人遛狗的悠闲身影，和坐在长椅上晒太阳、把帽子盖在脸上打盹的老人。广场中央那棵标志性的橄榄树早已不在，但石凳和喷泉还在。最动人的是那些建筑：一侧是有着优雅拱廊和精美玫瑰窗的圣母橄榄树教堂，另一侧是曾是市议会的古朴建筑，上面挂着古老的公正秤。你盯着脚下被岁月打磨得无比光滑的黑色玄武岩鹅卵石，上面镶嵌着白色的花岗岩，拼成复杂的图案。那一刻你突然感到，你不是在“参观”历史，而是就站在历史延续不断的脉搏之上。
然后，你拐进那条传奇的“圣玛丽亚路”。这是古城的主轴，窄窄的，蜿蜒向上，两旁是密密麻麻的中世纪贵族宅邸。你得抬头看，看那些石质窗框上雕刻的家族纹章，看那些突出于街道上方的木结构“凸窗”。有些房子的门口，还保留着古老的石凳，那是供骑士们上下马用的。光影在这里玩着魔术，上午的阳光斜射进来，把门环、门钉和石头上的凹痕照得一清二楚，仿佛能看见穿着斗篷的古人从你身边擦肩而过。这里没有博物馆式的冰冷标签，每一座房子都还在被使用，可能是书店、裁缝铺，或是某位老太太的家，生活的温度让历史变得可亲可触。
当你走到古城的边缘，地势渐高，吉马良斯城堡那敦厚的塔楼便赫然眼前。与山下充满生活气息的街区相比，这里的气氛陡然变得庄严而孤寂。风很大，吹过城堡的垛口发出呜咽般的声音。你站在这里俯瞰整个红瓦屋顶的海洋，才能瞬间理解“摇篮”这个词的全部重量——脚下这片安宁的、炊烟袅袅的城镇，正是一个庞大海洋帝国的起点。这种从市井生活到宏大国族叙事的无缝切换，是吉马良斯最独一无二的魅力。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`火车缓缓驶入吉马良斯，窗外的景色从波尔图郊区的现代感，逐渐退回到红瓦屋顶和石墙的世界。走出车站，第一口呼吸的空气里，有种特别的清冽，混杂着远处烤栗子的焦香和湿润石头上淡淡的苔藓味。你并不是走向一个“景区”，而是径直走进了一座仍在从容呼吸的中世纪城镇。沿着略有坡度的石板路向上，脚步的声响在安静的巷弄里格外清晰，阳光把两侧黄白色墙壁照得发亮，铸铁阳台上的天竺葵开得正艳，生活的气息从半开的木门后飘散出来——是炖菜的香气和电视里足球赛的喧哗。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的心脏，是那个被称为“橄榄树广场”的地方。这里没有令人窒息的游客大军，只有当地人遛狗的悠闲身影，和坐在长椅上晒太阳、把帽子盖在脸上打盹的老人。广场中央那棵标志性的橄榄树早已不在，但石凳和喷泉还在。最动人的是那些建筑：一侧是有着优雅拱廊和精美玫瑰窗的圣母橄榄树教堂，另一侧是曾是市议会的古朴建筑，上面挂着古老的公正秤。你盯着脚下被岁月打磨得无比光滑的黑色玄武岩鹅卵石，上面镶嵌着白色的花岗岩，拼成复杂的图案。那一刻你突然感到，你不是在“参观”历史，而是就站在历史延续不断的脉搏之上。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然后，你拐进那条传奇的“圣玛丽亚路”。这是古城的主轴，窄窄的，蜿蜒向上，两旁是密密麻麻的中世纪贵族宅邸。你得抬头看，看那些石质窗框上雕刻的家族纹章，看那些突出于街道上方的木结构“凸窗”。有些房子的门口，还保留着古老的石凳，那是供骑士们上下马用的。光影在这里玩着魔术，上午的阳光斜射进来，把门环、门钉和石头上的凹痕照得一清二楚，仿佛能看见穿着斗篷的古人从你身边擦肩而过。这里没有博物馆式的冰冷标签，每一座房子都还在被使用，可能是书店、裁缝铺，或是某位老太太的家，生活的温度让历史变得可亲可触。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你走到古城的边缘，地势渐高，吉马良斯城堡那敦厚的塔楼便赫然眼前。与山下充满生活气息的街区相比，这里的气氛陡然变得庄严而孤寂。风很大，吹过城堡的垛口发出呜咽般的声音。你站在这里俯瞰整个红瓦屋顶的海洋，才能瞬间理解“摇篮”这个词的全部重量——脚下这片安宁的、炊烟袅袅的城镇，正是一个庞大海洋帝国的起点。这种从市井生活到宏大国族叙事的无缝切换，是吉马良斯最独一无二的魅力。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`吉马良斯历史中心`} />
                <InfoRow label="英文名称" value={`Guimarães Historical Centre`} />
                <InfoRow label="正式名称" value={`Guimarães Historical Centre`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`吉马良斯`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`葡萄牙的国家诞生地，第一任国王阿方索·恩里克斯的出生与加冕之所，被誉为“葡萄牙的摇篮”。`} />
                <InfoRow label="建筑特色" value={`完美保留了中世纪城市肌理，未经19世纪后大规模改造的、活生生的城镇样本，罗马式与哥特式建筑与民间住宅和谐交融。`} />
                <InfoRow label="建筑风格" value={`以12-15世纪的罗马式与曼努埃尔式风格为基调，混合了后来朴素的民间建筑，形成连续且有机的整体。`} />
                <InfoRow label="文化价值" value={`见证了葡萄牙作为一个独立民族国家的起源，其城市布局、建筑与社会结构是研究中世纪伊比利亚半岛城镇发展的活化石。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城公共区域全天24小时开放。城内主要建筑如吉马良斯城堡、布拉干萨公爵宫、阿尔贝托·桑帕约博物馆等，开放时间通常为夏季（4月至10月）上午10:00至晚上18:00，冬季（11月至3月）上午10:00至下午17:00，每周一及1月1日、复活节、5月1日、12月25日关闭。具体景点的开放时间可能微调，建议行前在官网复核。`} />
              <InfoRow label="门票价格" value={`漫步古城街区本身完全免费。进入单体景点需购票：吉马良斯城堡门票约2欧元；布拉干萨公爵宫门票约5欧元；阿尔贝托·桑帕约博物馆门票约3欧元。常见的联票（城堡+公爵宫）约6欧元，性价比高。65岁以上长者、12岁以下儿童、持有青年卡者通常享有折扣或免票政策。`} />
              <InfoRow label="地址" value={`Largo do Toural, 4800-415 Guimarães, Portugal`} />
              <InfoRow label="交通方式" value={`从最近的波尔图弗朗西斯科·萨·卡内罗机场出发，最便捷的方式是先乘坐地铁紫线（Violet Line）至终点站Campanhã站（约30分钟），然后换乘葡萄牙国铁CP的郊区火车（Urbanos do Porto）前往吉马良斯站（Guimarães Station），车程约1小时15分钟，班次频繁，每小时至少2-3班。从波尔图市中心的圣本托火车站也有直达吉马良斯的火车，同样方便。自驾则沿A7高速公路行驶约50分钟即可抵达，古城周边有多个收费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解吉马良斯，你得把时钟拨回到十世纪。那时，伊比利亚半岛北部基督教王国与南部摩尔人王国之间，是一片广阔的、动荡的边疆地带。一位名叫穆马多纳·迪亚斯的贵族妇女，在这里，也就是当时的“Vimaranes”地区，捐建了一座修道院。别小看这个举动，在那个时代，修道院不仅是信仰中心，更是人口聚集、开垦荒地、形成定居点的核心。围绕着这座修道院，一个社区逐渐成长起来。穆马多纳的儿子，也就是后来赫赫有名的阿方索·恩里克斯伯爵，选择在这里建立他的权力基地。他加固了山丘上的城堡，并在山脚下建造了自己的宫殿（也就是后来布拉干萨公爵宫的前身）。于是，一个兼具军事防御、行政管理和宗教生活的完整城镇雏形，就此奠定。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`阿方索·恩里克斯伯爵注定不是一个安分的领主。他的雄心超越了做一个莱昂王国下属的伯爵。传说他就出生在吉马良斯的城堡里。1139年，他在遥远的南方取得了对摩尔人的决定性胜利，并自立为葡萄牙国王。虽然加冕典礼的确切地点仍有争议，但吉马良斯作为他的“老巢”和权力源泉，无可争议地成为了这个新生王国的精神首都。你可以想象，在那个消息传播缓慢的年代，来自王国各个角落的骑士、使节、商人，沿着崎岖的道路汇聚到吉马良斯，走进城堡向国王宣誓效忠，又在山下的城镇里交换信息、买卖货物。圣玛丽亚路两旁那些最早的石砌豪宅，很可能就是这些新贵族的府邸。城镇的格局，为了适应这种政治中心的地位，自然向外生长，但核心始终围绕着最初的修道院和连接城堡与镇中心的那条主路。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的聚光灯并不会永远停留在一个地方。随着王国的疆土不断向南推进，政治和经济中心也逐渐南移。科英布拉，尤其是里斯本，因其港口优势，很快取代了吉马良斯的地位。这对吉马良斯而言，某种意义上是一种“幸运的没落”。它没有经历后来帝国鼎盛时期（如曼努埃尔一世时代）那种挥金如土、大兴土木的改造，也没有在18世纪后的城市化浪潮中被拆毁重建。它就像被时间轻轻遗忘了一样，凝固在了中世纪晚期到文艺复兴早期那个样子。接下来的几百年里，它安心地做着一个宁静的省级城镇，房子老了就按照传统的方式修修补补，街道窄了也没人去拓宽。这种连续性，无意中为后世保存了一份无比珍贵的遗产。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机发生在20世纪。葡萄牙民族主义高涨时期，吉马良斯作为“民族摇篮”的象征意义被重新发掘和大力宣扬。城堡和公爵宫得到了系统的修复（尽管有些修复带着当时的浪漫主义想象）。但真正让吉马良斯脱颖而出的，是它对整个历史中心区采取的“整体性”保护理念。当局没有把老房子里的居民迁走，做成一个空壳博物馆，而是通过补贴和规范，引导居民在改善生活条件的同时，小心翼翼地保留建筑的外立面、结构和街道肌理。你看到的那些装着卫星天线的老房子，正是这种“活态保护”成功的证明。正是这种尊重历史层积与延续生活本质的智慧，使得吉马良斯在2001年当之无愧地被列入世界遗产名录，理由是它“异常完好地保存了中世纪城镇发展为现代城市的真实范例”。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`一场完美的吉马良斯深度游，需要一整天时间（约6-8小时）。建议早上9点左右抵达，此时阳光柔和，游客尚少，本地店铺刚刚开门，小镇正从睡梦中苏醒。游览节奏宜张弛有度：上午聚焦于“权力的象征”（城堡与宫殿），带着宏大的历史视角；中午沉浸在“生活的脉搏”（古城中心广场与主街），感受市井烟火；下午则留给“艺术的角落”（博物馆与僻静小巷），进行细腻的发现。这样的安排，既能理解其“摇篮”的厚重，又能体验其“家园”的温润，最后由一个黄昏的俯瞰全景作为华彩收尾。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双绝对舒适、鞋底有一定厚度的步行鞋，古城里的鹅卵石路美丽但凹凸不平，穿薄底鞋走一天会是一场酷刑。午餐时间（下午1点至3点）是餐厅最繁忙的时候，要么提前订位，要么像当地人一样稍晚一些（下午2点后）再去用餐。虽然吉马良斯非常安全，但在拥挤的广场和主街上仍需保持基本的警惕，看管好随身小包。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从古城边缘的吉马良斯城堡开始你的朝圣之旅，独自站在空旷的城墙上感受山风，俯瞰红色屋顶的海洋在晨光中铺展，遥想阿方索·恩里克斯从此眺望他的王国。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着绿树成荫的小径下山，拜访那座粉红色调的布拉干萨公爵宫，穿行在充满异域风情的加泰罗尼亚瓷砖厅和挂满弗拉芒挂毯的房间里，想象中世纪宫廷的生活图景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从公爵宫的后门悄然融入古城，一头扎进那条蜿蜒而上、铺着光亮鹅卵石的圣玛丽亚路，用手指触摸沿途古老宅邸门框上已被岁月磨平纹路的家族徽章。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`让圣玛丽亚路自然地把你引向心脏地带——橄榄树广场，找一张面对圣母橄榄树教堂的露天咖啡座坐下，点一杯bica（浓缩咖啡），看广场上的鸽子、孩童和踩着滑板穿行的少年。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观广场一侧不起眼却宝藏满满的阿尔贝托·桑帕约博物馆，在阴凉静谧的中世纪回廊里，仔细端详那些从古城地下挖掘出来的、跨越千年的罗马马赛克和哥特式雕塑。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从广场的另一个出口漫无目的地钻进更窄的支路，比如通往圣弗朗西斯科教堂的小巷，那里游客罕至，只有晾晒的衣物在古老的石墙间飘扬，传来住家烹煮晚餐的声响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`务必找到圣马特乌斯教堂背后的小路，一路攀爬至古城西北角的小山丘，那里有一座古老的石砌塔楼，是观看日落的秘密基地。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当夕阳将整个古城染成金黄色，沿着被晚霞照亮的石板路慢慢踱回橄榄树广场，等待广场周边的老式街灯一盏盏亮起，投射出温暖的光晕。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`布拉干萨公爵宫二楼面对城堡的窗口`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点的侧光能完美勾勒出城堡粗粝的岩石质感，用窗口作为画框，构成一幅“宫殿遥望摇篮”的历史对话。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣玛丽亚路的S形弯道中段`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚的低角度光线会让鹅卵石路面产生迷人的反光，蹲低身体，利用道路的自然弧线作为引导线，将视线引向远处教堂的钟楼。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`橄榄树广场拱廊下的柱列`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光猛烈时，恰恰是拍摄拱廊光影的好时机，阳光在柱子和地面上投下强烈的明暗交替，等待一个行人走入光影分割线，画面立刻充满戏剧性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣弗朗西斯科教堂内静谧的回廊`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个多云天气的下午，柔和的天光均匀洒入回廊中央的庭院，站在角落拍摄回廊的连续拱券，对称构图能极致展现建筑的宁静与几何之美。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`古城西北角塔楼旁的观景平台`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时抵达，用广角镜头捕捉城堡、公爵宫和整个古城屋顶全景，等待夕阳将天空染成粉紫色，华灯初上时拍摄蓝调时刻的冷暖对比色调。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在古城狭窄的街道拍照时，请尽量使用广角镜头，并耐心等待没有汽车或行人阻挡的瞬间，保持画面的整洁与古典感。拍摄居民阳台或门窗内的场景时务必保持尊重，如果主人在场，一个微笑和手势征得同意是基本的礼貌。多利用天气变化，雨后的湿漉漉石板路反射着灯光和倒影，能拍出格外有味道的照片。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`下榻由15世纪贵族宅邸改造的精品酒店，房间保留了原始的石墙和木梁，窗户正对着圣玛丽亚路，清晨在街坊的问候声中醒来，仿佛成了古城的一员。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计美学之选`}</h4>
                  <p className="text-sm text-green-800">{`位于古城边缘一座安静广场上，由老修道院部分建筑改造的设计酒店，将极简现代风格与古老的石拱、庭院完美融合，提供一片静谧的避世天地。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`家庭温馨之选`}</h4>
                  <p className="text-sm text-yellow-800">{`藏在古城某条僻静小巷里的家庭式客栈，由一对老夫妇经营，房间不大但一尘不染，早餐有自家制作的果酱和新鲜出炉的pastel de nata（葡式蛋挞），充满家的温度。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`庄园体验之选`}</h4>
                  <p className="text-sm text-purple-800">{`位于吉马良斯郊外小山上的传统庄园酒店，被花园和葡萄园环绕，房间宽敞典雅，可以远眺古城全景，适合想要兼顾古城探索与度假放松的旅行者。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古城内的酒店多为历史建筑改造，房间格局可能不规则，隔音相对现代酒店要差一些，但这正是体验的一部分。如果自驾前来，务必提前确认酒店是否提供停车场（多数需要额外付费），古城内停车位非常紧张且昂贵。旺季（6月至9月及节假日）务必提前数月预订，周末房价通常高于平日。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开吉马良斯许久后，印象最深的不是某个具体的建筑细节，而是一种整体的感觉——一种从容的、延续的、深深扎根于日常的生活感。它没有许多世界遗产地那种被精心供奉起来的疏离和庄严，这里的历史是“用”的，而不是“看”的。孩子们在九百年的教堂台阶上追逐，情侣在五百年的拱廊下拥吻，老人在千年的鹅卵石路上遛狗。历史在这里不是教科书上冰冷的章节，而是窗户上的花盆、门口的石凳、被脚步磨得发亮的门槛。这种将宏大叙事彻底溶解进柴米油盐的能力，让人感到莫名的安心和治愈。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求新奇与刺激的时代，吉马良斯提供了一种截然不同的旅行价值：它不是让你去“打卡”，而是邀请你“进入”。进入一种缓慢的、注重根源的节奏，进入一个民族最初关于“家园”和“认同”的想象是如何从一块石头、一条街道、一个广场中生长出来的。它让你相信，有些最珍贵的东西，恰恰在于不变与延续。每一位热爱深度游的旅人都该来这里，不只是为了了解葡萄牙从哪里开始，更是为了让自己慢下来，触摸时间真实的质地，感受一种在别处早已难寻的、历史与生活浑然天成的美好状态。这里保存的不仅是一座古城，更是一种关于如何与自己的过去温柔共处的生活哲学。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
