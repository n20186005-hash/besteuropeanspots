import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '莱沃恰历史溯源｜黄金之城的前世今生与大师佩雷尔的传奇',
  description: '穿越东斯洛伐克的时光胶囊。揭秘莱沃恰如何从矿业新城到“中欧鲁尔”，聚焦木雕巨匠佩雷尔的传奇，聆听圣母升天教堂的神话。黄金时代如何被瘟疫与战火终结？',
}

export default function LevocaOldTownHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '莱沃恰老城', href: '/attractions/levoca-old-town-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`莱沃恰老城・Levoča・斯洛伐克・莱沃恰`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在斯洛伐克东部，被低矮山峦温柔环抱的，并非一座寻常的中世纪小镇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而是一座曾以白银和铜矿撼动整个匈牙利王国经济命脉的“黄金之城”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它被称为 <strong>“中欧的鲁尔区”</strong>，在15-16世纪的账簿上，其财富与影响力足以与维也纳、布达佩斯比肩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，真正让它不朽的，并非地底埋藏的金属，而是一位木雕巨匠和他的凿子所创造的、高达18.62米的木质神迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "抛开游玩攻略，走进莱沃恰的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`莱沃恰老城`} />
                <InfoRow label="英文名称" value={`Levoča`} />
                <InfoRow label="正式名称" value={`Levoča`} />
                <InfoRow label="国家" value={`斯洛伐克`} />
                <InfoRow label="城市" value={`莱沃恰`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "莱沃恰的故事，始于一场灾难性的入侵之后。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1241-1242年，蒙古铁骑如风暴般席卷了匈牙利王国。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "王国北部的斯皮什地区遭受重创，原有的斯拉夫定居点几乎被夷为平地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "为了巩固边疆、重启经济，匈牙利国王贝拉四世推行了大规模的“客人定居”政策。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他需要新的、忠诚且富有技能的居民。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，目光投向了神圣罗马帝国。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "国王向勤劳而技术精湛的德意志矿工和工匠——主要是萨克森人——发出了邀请。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1249年</strong>，一份至关重要的特许状颁发。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "国王准许这些“客人们”在斯皮什地区的中心建立一座新城，并赋予他们广泛的自治权与采矿特权。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市，便是莱沃恰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字源于古斯拉夫语中的“ľubica”（菩提树），或许指的是当地常见的树木。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但对这些新居民而言，它更意味着全新的起点与无尽的矿脉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城市被规划在一个陡峭山丘下的宽阔台地上，易于防守。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的布局严格按照中世纪网格模式，中央广场宽阔得异乎寻常，仿佛在奠基时就已预见未来的繁荣市集与盛大游行。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "莱沃恰，从诞生之日起，就注定不是一个普通的农业小镇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的基因里，刻着“矿业”与“商业”的密码。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "莱沃恰的命运，与其地下的财富紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "14世纪，附近矿区的白银和铜产量进入鼎盛期。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1364年</strong>，国王拉约什一世授予莱沃恰“自由皇市”的至高特权。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这意味著它直接隶属于国王，拥有独立的司法、行政和贸易权，并垄断了整个斯皮什地区长达24个城镇的贸易。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "莱沃恰一跃成为“中欧的鲁尔区”，财富如泉水般涌流。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“来自莱沃恰的商队装载着铜锭，他们的足迹远至但泽、维也纳和威尼斯。广场上的仓库里，堆满了来自弗兰德斯的布料、东方的香料和本地精炼的白银。” —— 中世纪贸易档案记载" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座暴富的小城，甚至开始“反叛”自己的创造者——国王。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1480年</strong>，因不满沉重的税收，莱沃恰市民联合其他斯皮什城镇，爆发了著名的“斯皮什起义”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "起义虽被镇压，却彰显了这座商业城邦强大的经济实力与独立意识。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "财富催生了不朽的艺术。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "巨大的圣母升天教堂在14世纪开始兴建，并在之后不断扩建、装饰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不仅是信仰的中心，更是市民炫耀财富与虔诚的舞台。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，黄金时代并非永恒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>16世纪中叶</strong>，两大灾难接连降临。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "先是奥斯曼帝国扩张，切断了莱沃恰通往南方的传统商路。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "紧接着，附近矿脉逐渐枯竭，经济命脉被掐断。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但最致命的打击，是<strong>1550年</strong>后席卷欧洲的宗教改革与反宗教改革浪潮。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "莱沃恰的萨克森市民大多皈依了新教（路德宗），而匈牙利王室则坚定支持天主教。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "冲突一触即发。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1670年</strong>，一场针对新教徒的残酷迫害在城内发生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "市政厅被皇家军队占领，新教教堂被没收，大量市民被迫流亡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场政治与宗教的清洗，抽空了城市的灵魂与活力。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们从自己建造的家中被驱赶，从自己出资装饰的教堂中被驱逐。钟声依旧，却不再为我们而鸣。” —— 一位流亡市民的日记残篇" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "昔日的“黄金之城”光环迅速黯淡，陷入了长达两个多世纪的沉睡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "也正因这沉睡，它中世纪的风骨被奇迹般地封存至今，未被后来的巴洛克或现代建筑浪潮所吞没。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果莱沃恰的财富是“因”，那么，让这座城市在艺术史上获得不朽声名的“果”，便是一位大师的降临。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他就是<strong>保罗·冯·莱沃恰</strong>，但世人更习惯称呼他的斯洛伐克语名字——<strong>马斯特·帕沃尔</strong>，或称<strong>大师佩雷尔</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于他的早年生涯，迷雾重重。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他大约出生于<strong>1470-1480年</strong>之间，很可能来自德语区的某个地方。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "艺术史学家推测他曾在南德的乌尔姆或纽伦堡作坊受过顶级训练，深谙晚期哥特式雕刻的精髓。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1506年</strong>，他的名字第一次出现在莱沃恰的市政档案中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此时的他，已是一位外来的“大师”，带着全套工具和雄心，来到了这座正值财富巅峰的城市。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的第一份重要合同，就显示了他非同寻常的自信与地位。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1510年</strong>，他与莱沃恰市政会签约，为城市最重要的建筑——圣雅各布教堂（即圣母升天教堂）创作主祭坛。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "合同条款极其苛刻，也极其荣耀：他必须创作出世界上最高、最精美的木质祭坛。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他获得了当时堪称天价的报酬——1600枚匈牙利金币，以及一栋位于广场附近的免费住宅和工作坊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更重要的是，合同规定，在他有生之年，<strong>任何其他雕刻家不得在莱沃恰城内工作</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这份垄断合同，堪称中世纪版的“天才独家协议”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此后近二十年，大师佩雷尔将全部心血倾注于此。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他带领一个庞大的作坊，雕刻了超过40尊真人大小的精美木像。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1517年</strong>，这座震撼世界的杰作终于完成。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "祭坛总高<strong>18.62米</strong>，相当于六层楼的高度，全部由椴木雕刻而成，并饰以华丽的金箔与彩绘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "中央是庄严的《最后晚餐》，上方是巨大的《圣母加冕》。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "两侧的圣徒雕像，面容宁静，衣褶流畅，充满人性的光辉与神性的崇高。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不仅是莱沃恰的财富纪念碑，更是北欧哥特式雕刻艺术最后的、也是最辉煌的绝唱。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们支付了金币，但得到的是无价之宝。当祭坛帷幕首次拉开时，连最吝啬的商人也落下了眼泪。我们知道，我们创造了历史。” —— 后世编年史家的评述" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "大师佩雷尔彻底融入了莱沃恰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他娶了当地女子，成为受人尊敬的市民，并持续为教堂和富户创作。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的作坊成为艺术中心，影响了整个斯洛伐克东部地区的雕刻风格。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，关于他的死亡，却是一个谜。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1540年</strong>之后，他的记录从档案中消失。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "没有确切的墓地，没有临终记载。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "仿佛这位用木头赋予神圣生命的大师，最终也如烟尘般悄然消散。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "只留下那些不朽的雕像，在教堂的幽光中，静静凝视着广场上城市的兴衰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的传奇并未终结。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1937年</strong>，一具16世纪的男性遗骨在莱沃恰教堂地下被偶然发现。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "旁边陪伴着他的，是一套精良的雕刻工具。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "经过漫长考证，斯洛伐克学界普遍相信，这就是失踪了四个世纪的大师佩雷尔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位城市最伟大的儿子，最终以最朴素的方式，长眠于自己杰作的脚下。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在莱沃恰，最动人的传说，并非关于地底的宝藏，而是关于天际的救赎。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它围绕着圣母升天教堂那座高耸的塔楼展开。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传在很久以前，一位年轻的石匠受雇修建教堂钟楼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他技艺高超，但性格傲慢，与工头屡有争执。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一天，在即将封顶之时，他与工头爆发了激烈争吵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "盛怒之下，工头诅咒他：“你这么能干，不如一个人把最后这块基石放上去！”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这是一项几乎不可能独自完成的任务。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "年轻石匠骑虎难下，在众人的注视下，他奋力将沉重的基石吊起。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "就在石块即将就位的瞬间，脚下一滑，他连同石头一起从高高的脚手架上坠落。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "地面上的人们发出惊呼，以为惨剧不可避免。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "就在此时，一道柔和的光芒从教堂的圣母像上发出。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "下坠的石匠和巨石，仿佛被一只无形的手轻轻托住，缓缓地、平稳地降落在塔楼边缘的狭窄走道上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "石匠毫发无伤，而巨石也严丝合缝地落在了它应该在的位置。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“是圣母用她的披风接住了他！她不愿让任何人的鲜血玷污这座献给她的圣殿。” —— 这个传说在莱沃恰妇孺皆知" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，这座塔楼的顶部走道，被称为“石匠的回廊”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "人们相信，圣母一直庇佑着这座城和它的工匠。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则更显神秘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在莱沃恰市政厅的墙壁上，嵌着一根古老的铁环，被称为“耻辱环”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "中世纪时，被判定有罪但又不够处以极刑的人（如撒谎者、酗酒闹事者），会被用铁链锁在这个环上，在广场中央接受公众的羞辱与嘲笑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说，这根铁环具有某种“真实之力”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果一位被冤屈的人触碰它并真心祈祷，铁环会变得冰冷刺骨；而如果是有罪者触碰，则会微微发热。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当然，这已无人验证。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但这些故事，如同毛细血管，将道德、信仰与日常生活的记忆，深深注入了莱沃恰的砖石之中。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日漫步在莱沃恰近乎完整的古城墙内，时间仿佛凝固在16世纪。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "宽阔的广场，色彩柔和的文艺复兴晚期商人宅邸，厚重的圣雅各布教堂……" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有大都市的喧嚣，只有历史的低语。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你会看到，一座城市如何因资源而急速崛起，创造令人目眩的文明成果。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "又如何因资源枯竭、商路改道和时代浪潮的冲击，骤然沉寂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "莱沃恰的珍贵，在于它提供了一幅完整的、未被过度修饰的中欧小城命运剖面图。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的“衰败”，恰恰成了它最宝贵的财富——让它避开了后续大规模的城市改造，将那个黄金时代的样貌，近乎“化石”般地保存下来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而大师佩雷尔的故事，则是一个深刻的隐喻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当世俗的金钱与权力如潮水般退去，最终能锚定一座城市价值的，往往是那些专注于精神与美的创造者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的祭坛，不再是教会权威的简单象征，而成为了人类追求卓越与永恒之美的见证。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它让莱沃恰超越了“矿业博物馆”的标签，升华为一座“艺术圣殿”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂莱沃恰，便是读懂一种历史的偶然与必然。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "财富会流逝，帝国会更迭，但由极致技艺与虔诚之心凝聚成的美，却能穿越战火与时光，持续为一座城市、乃至一个文明，提供着精神的庇护与身份的骄傲。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这，或许才是旅行中最深邃的收获。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bardejov-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴尔代约夫老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bardejov</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/banska-bystrica-leaning-clock-tower-square" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    班
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">班斯卡-比斯特里察老城广场与倾斜钟塔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Banská Bystrica Old Town Square & Leaning Clock Tower</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/trnava-slovak-rome" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特尔纳瓦（斯洛伐克的小罗马）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trnava</p>
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
