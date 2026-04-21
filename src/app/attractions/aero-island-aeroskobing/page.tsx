import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '艾尔岛 Aero Island｜探访丹麦“时间胶囊”童话岛，漫步无车彩色古镇与静谧海岸线 - 最佳欧洲景点',
  description: '船缓缓靠岸时，你先闻到的不是海腥味，而是一股混合了蜂蜜色老木头、潮湿鹅卵石和远处面包房飘来的黄油香气的复杂味道。艾尔斯克宾的码头小得像邻居家的后院，安静得能听见缆绳轻拍桅杆的哒哒声。走下跳板，你就踏入了一个完全不同的时间流速里——这里没有汽车的轰鸣，只有自行车轮碾过石子路的沙沙声，以及你自己的脚步声',
}

export default function AeroIslandAeroskobingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '丹麦', href: '/destinations/europe' },
            { label: '艾尔斯克宾 (Ærøskøbing)', href: '/destinations/europe' },
            { label: '艾尔岛', href: '/attractions/aero-island-aeroskobing' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`艾尔岛・Aero Island・丹麦・艾尔斯克宾 (Ærøskøbing)`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`船缓缓靠岸时，你先闻到的不是海腥味，而是一股混合了蜂蜜色老木头、潮湿鹅卵石和远处面包房飘来的黄油香气的复杂味道。艾尔斯克宾的码头小得像邻居家的后院，安静得能听见缆绳轻拍桅杆的哒哒声。走下跳板，你就踏入了一个完全不同的时间流速里——这里没有汽车的轰鸣，只有自行车轮碾过石子路的沙沙声，以及你自己的脚步声在彩色房子间的回响。那些房子啊，就像小孩子用蜡笔认真涂出来的：薄荷绿、草莓粉、奶油黄、淡天蓝，每一栋都歪歪扭扭却又稳稳当当地站着，白色的木条边框把它们分割成一块块可爱的几何图形。窗台上一定有天竺葵在怒放，红色的小花从绿色的叶片里炸开，像一个个迷你庆典。
你沿着主街Vestergade慢慢晃，街道窄得感觉张开手臂就能碰到两边的墙。阳光被高耸的山墙切割成明明暗暗的光带，打在几百年来被无数脚步磨得温润发亮的鹅卵石上。偶尔有本地老人骑着那种老式自行车，车筐里装着报纸和长面包，叮铃一声从你身边滑过，对你这个闯入者报以平静的微笑。这里的静谧不是空的，是满的——满溢着生活的细节：晾晒在庭院里的白色床单随风轻轻鼓动，隔壁工作室里传来细木工刨木头的声音，咖啡的香气从一扇半开的门里溜出来。你忽然觉得，自己不是来“参观”一个景点，而是不小心闯进了一本还在被缓慢书写的、关于宁静的立体书。
走到小港口，视野豁然开朗。这里停泊的不是豪华游艇，而是保养得锃光瓦亮的老式木制帆船和结实的工作渔船。海水是那种清透的灰绿色，轻轻荡漾着，倒映着对岸另一排彩色房子的倒影，随着水波微微扭曲，像一幅活过来的油画。海鸥的叫声从很远的地方传来，显得空旷而寂寥。你会看到当地人——可能是退休的老船长，就坐在长椅上，什么也不做，只是看着海，一看就是一个下午。时间在这里不是用来追赶的，而是用来沉浸和浪费的。这就是艾尔岛最核心的魔法：它用一种近乎固执的温柔，守护着一种生活的本真样貌，让你瞬间卸下所有来自现代世界的焦灼，心甘情愿地慢下来，小下去，融入这幅宁静的彩色画卷里。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "船缓缓靠岸时，你先闻到的不是海腥味，而是一股混合了蜂蜜色老木头、潮湿鹅卵石和远处面包房飘来的黄油香气的复杂味道。艾尔斯克宾的码头小得像邻居家的后院，安静得能听见缆绳轻拍桅杆的哒哒声。走下跳板，你就踏入了一个完全不同的时间流速里——这里没有汽车的轰鸣，只有自行车轮碾过石子路的沙沙声，以及你自己的脚步声在彩色房子间的回响。那些房子啊，就像小孩子用蜡笔认真涂出来的：薄荷绿、草莓粉、奶油黄、淡天蓝，每一栋都歪歪扭扭却又稳稳当当地站着，白色的木条边框把它们分割成一块块可爱的几何图形。窗台上一定有天竺葵在怒放，红色的小花从绿色的叶片里炸开，像一个个迷你庆典。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你沿着主街Vestergade慢慢晃，街道窄得感觉张开手臂就能碰到两边的墙。阳光被高耸的山墙切割成明明暗暗的光带，打在几百年来被无数脚步磨得温润发亮的鹅卵石上。偶尔有本地老人骑着那种老式自行车，车筐里装着报纸和长面包，叮铃一声从你身边滑过，对你这个闯入者报以平静的微笑。这里的静谧不是空的，是满的——满溢着生活的细节：晾晒在庭院里的白色床单随风轻轻鼓动，隔壁工作室里传来细木工刨木头的声音，咖啡的香气从一扇半开的门里溜出来。你忽然觉得，自己不是来“参观”一个景点，而是不小心闯进了一本还在被缓慢书写的、关于宁静的立体书。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走到小港口，视野豁然开朗。这里停泊的不是豪华游艇，而是保养得锃光瓦亮的老式木制帆船和结实的工作渔船。海水是那种清透的灰绿色，轻轻荡漾着，倒映着对岸另一排彩色房子的倒影，随着水波微微扭曲，像一幅活过来的油画。海鸥的叫声从很远的地方传来，显得空旷而寂寥。你会看到当地人——可能是退休的老船长，就坐在长椅上，什么也不做，只是看着海，一看就是一个下午。时间在这里不是用来追赶的，而是用来沉浸和浪费的。这就是艾尔岛最核心的魔法：它用一种近乎固执的温柔，守护着一种生活的本真样貌，让你瞬间卸下所有来自现代世界的焦灼，心甘情愿地慢下来，小下去，融入这幅宁静的彩色画卷里。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`艾尔岛`} />
                <InfoRow label="英文名称" value={`Aero Island`} />
                <InfoRow label="正式名称" value={`Aero Island`} />
                <InfoRow label="国家" value={`丹麦`} />
                <InfoRow label="城市" value={`艾尔斯克宾 (Ærøskøbing)`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座波罗的海上的宁静岛屿，是丹麦保存最完好的18世纪航海社区活化石，被誉为“逃过时间之手的童话”。`} />
                <InfoRow label="建筑特色" value={`连绵成片的低矮木筋墙房屋，外墙粉刷着温柔的糖果色，屋顶铺着红瓦，构成如乐高积木般精巧又和谐的街景。`} />
                <InfoRow label="建筑风格" value={`典型的丹麦省级城镇传统民居风格，深受荷兰和北德地区影响的半木结构建筑，呈现古朴的巴洛克与洛可可装饰细节。`} />
                <InfoRow label="文化价值" value={`它代表了一种近乎消失的、以本地航运和手工业为基础的慢节奏岛屿生活文化，其完整的社区肌理和“无车”核心区理念在当代尤为珍贵。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`岛屿本身全天开放。主要小镇艾尔斯克宾的街道、港口和公共区域可随时漫步。岛上多数小型博物馆（如木船博物馆、艾尔岛博物馆）及历史住宅的开放时间为夏季（5月中旬至9月中旬）每日10:00-16:00；春秋季（4月-5月中，9月中-10月）通常为周二至周日11:00-15:00或仅周末开放；冬季（11月至次年3月）大部分室内景点关闭，但小镇风貌依旧。具体请行前查阅各场馆最新官网。`} />
              <InfoRow label="门票价格" value={`进入艾尔岛免费。岛上各独立景点收费：艾尔斯克宾木船博物馆成人约60丹麦克朗；艾尔岛博物馆成人约50丹麦克朗；参观“镇长之家”等历史民居联票约80丹麦克朗。多数景点对18岁以下儿童免费。建议购买夏季推出的“艾尔斯克宾护照”联票，可覆盖3-4个主要场馆，性价比较高。`} />
              <InfoRow label="地址" value={`Ærøskøbing, 5970 Ærø, Denmark`} />
              <InfoRow label="交通方式" value={`艾尔岛是一座岛屿，需乘渡轮抵达。最常用的路线是从菲英岛（Funen）的斯文堡（Svendborg）出发，乘坐Ærøfærgen渡轮，航程约1小时。渡轮班次频繁，夏季每天多达10班，冬季约5-6班，可载运汽车、自行车和步行乘客。务必提前在渡轮公司官网预订车位（尤其夏季），行人票通常可现场购买。从哥本哈根出发，可先乘火车至欧登塞（Odense），转当地火车至斯文堡，再上渡轮，全程约3.5-4小时。另一种路线是从日德兰半岛的欧堡（Ebeltoft）搭乘渡轮至艾尔岛东侧的索比（Søby），航程约1小时。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "艾尔岛的故事，是一部典型的“小而美”的北欧岛屿编年史。它的命运始终与波罗的海的波涛紧密相连。早在维京时代，这里就是一个不起眼的补给点。真正的转折点发生在中世纪以后，当汉萨同盟的商业网络遍布波罗的海，像艾尔岛这样位于航线上的岛屿，就成了天然的避风港和贸易节点。艾尔斯克宾作为岛上最重要的港口，在16、17世纪逐渐成型。那时，岛上的男人们大多是船长、水手或造船匠，他们的船只装载着丹麦的谷物、牲畜，去往德国、瑞典甚至更远的港口，带回食盐、布匹和瓷器。这些航海贸易积累的财富，没有用来修建宏伟的教堂或宫殿，而是化作了镇上那一栋栋日益精美的船长之家。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "说到这些如今让我们着迷的彩色小屋，它们其实是一部关于灾难与重生的史诗。18世纪中期，艾尔斯克宾遭遇了一场毁灭性的大火，就像许多木结构城镇的命运一样，火焰吞噬了老旧的房屋。但灾后重建没有走向随意和杂乱，当时的社区展现出惊人的凝聚力和审美共识。居民们按照严格的规定重建家园：房屋必须用木筋墙结构，高度不得超过两层，外墙要粉刷明亮的颜色以反射阳光、提振精神。于是，我们今天看到的和谐街景，并非一蹴而就的规划，而是一场由火灾“催生”、由社区共同完成的自觉美学运动。每一栋房子都像是一个音符，共同谱成了这首凝固的、色彩的交响乐。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "19世纪是艾尔岛的“黄金时代”。蒸汽船尚未完全取代帆船，岛上的航运业达到顶峰。你能想象那时的港口有多么繁忙吗？桅杆如林，风帆似云，码头边充斥着货物装卸的号子、商贩的叫卖和异国水手的口音。富裕的船主们开始攀比谁家的山墙雕刻更繁复，谁家的大门铜饰更闪亮，谁家的客厅里摆着从东方运来的瓷花瓶。那个时期的装饰风格——门楣上华丽的洛可可式涡卷，窗框边细腻的彩绘，都带着一点点炫耀的意味，诉说着主人远航的见识与财富。然而，这也成了传统帆船航运最后的辉煌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "20世纪的工业化和大型钢铁轮船的兴起，无情地碾碎了像艾尔岛这样依赖传统木船航运的社区经济。岛屿迅速没落，沦为丹麦偏远、落后甚至被遗忘的角落。年轻人大批离开，去往大陆寻找工作。但讽刺的是，正是这种“被遗忘”，成了它最大的幸运。因为没有投资进行现代化改造，没有推倒老房子建起水泥公寓，艾尔斯克宾的整个历史肌理被奇迹般地完整“冷冻”保存了下来。时间在这里仿佛按下了暂停键。直到六七十年代，一群有识之士和回归的岛民发现了这份无意中保存的遗产无价，开始了系统的保护和修复。他们定下规矩：核心老城区禁止汽车通行，任何房屋的修缮必须使用传统材料和工艺。昔日的船长之家，很多被改造成了温馨的民宿、手艺人工坊或小博物馆。衰落，反而成就了它的永生。今天的艾尔岛，是一场精心策划的“故意的落后”，是对快节奏全球化最温柔、最坚定的抵抗。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要彻底感受艾尔岛的精华，建议安排整整两天一夜。第一天专注于深度探索艾尔斯克宾古镇，第二天租自行车环游部分海岸与乡村。理想节奏是“慢浸入”。建议在上午十点前抵达艾尔斯克宾港口，此时旅行团尚未涌入，晨光柔和，小镇刚刚苏醒，是最好的漫步时光。用大半个白天，以“迷路”的心态穿行于小巷，参观一两个核心博物馆，在港口长椅发呆。傍晚住宿岛上，享受旅游日归客散去后无比宁静的夜晚与清晨。第二天一早租车，沿南海岸骑行至古老的海事灯塔和沙滩，中午在乡村小酒馆用餐，下午从容返回。这样你才能体验到岛屿的两种面貌：古镇的精致人文与海岸自然的开阔疗愈。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇中心区域完全禁止汽车通行，请穿一双绝对舒适、适合长时间在鹅卵石路上行走的鞋。
岛上许多小商店、咖啡馆和博物馆在下午四点后就关门了，且周日营业时间很短甚至休息，计划行程时务必注意。
尊重当地居民的隐私，那些彩色房子大多是私宅，拍照时请避免将镜头对准窗户或庭院内部，在门口欣赏就好。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从渡轮码头下船后，别急着进镇，先沿着港口北侧的防波堤走一走，回头眺望彩色的建筑立面在水中的完美倒影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`转身钻进第一条看见的窄巷，比如Smedegade，让自己瞬间被糖果色的木筋墙房屋和盛放的天竺葵花丛360度包围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要推开艾尔岛博物馆那扇不起眼的小门，看看那些讲述普通岛民生活的朴素展品，从渔船模型到老奶奶的婚纱。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在镇中心的小广场找那家百年历史的“艾尔斯克宾杂货店”，买一个用老式油纸包裹的当地特色甘草糖或手工巧克力。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着Vestergade走到尽头，参观那艘停在陆地上的古老木帆船，用手摸摸被海水浸泡出深色的厚重木板。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午阳光西斜时，步行至镇子西边的“烟斗工匠之家”工作室，看老师傅如何用一块石楠木根雕琢出一支精美的烟斗。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要在黄昏时分回到主港口，坐在长椅上，看夕阳把每一栋房子的颜色都加深一度，直到暖金色的光笼罩整个小镇。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐后，趁着夜幕完全降临、星光初显时，再次走进漆黑寂静的小巷，只有老路灯投下昏黄的光圈，体验真正的时空穿越。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`港口防波堤尽头侧拍小镇`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，利用海面作为前景，将一排彩色山墙与港口的木船一同纳入镜头，构图平稳而富有层次。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`Smedegade小巷纵深拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射时，站在巷口，利用两侧色彩各异的墙壁形成天然的引导线，捕捉小巷深邃、宁静的氛围。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`艾尔岛博物馆二楼小窗框景`}</h4>
                  <p className="text-sm text-gray-700">{`下午时段，从博物馆楼上朝南的小窗户望出去，以古老的木窗框为画框，拍摄窗外错落有致的红色屋顶和教堂尖塔。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`小镇西侧小丘俯拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，步行至镇外西侧的小山坡上，可以拍到艾尔斯克宾全镇偎依在碧海之畔的童话般全景，光线最为柔和。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`“烟斗工匠之家”橱窗反射`}</h4>
                  <p className="text-sm text-gray-700">{`阴天或任何漫射光条件下，利用工作室古老的橱窗玻璃，拍摄彩色街道和行人被轻微扭曲反射的梦幻画面。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`北欧夏季光线角度低、持续时间长，尤其“黄金小时”非常长，是出片的绝佳时机，请善用早晨和傍晚。`}</li>
                <li>• {`尽量避免使用无人机，岛上空域常有海鸟，且飞行的噪音会严重破坏当地的静谧氛围，很可能引起居民反感。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温馨民宿之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住一栋真正的18世纪船长之家改造的民宿，楼梯吱呀作响，房间低矮温馨，房东奶奶会为你准备一份自家果园采摘的果酱早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计型精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`由古老仓库改造的现代风格酒店，保留了原始的木梁和石墙，但内饰极其简约舒适，巨大的窗户正对无人的后院花园。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`经济简约旅舍`}</h4>
                  <p className="text-sm text-yellow-800">{`位于镇子边缘一栋黄色大房子里的家庭旅舍，房间简单干净，公共厨房设施齐全，是结识各国背包客、交换旅行故事的好地方。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`独家海边小屋`}</h4>
                  <p className="text-sm text-purple-800">{`在远离小镇的南海岸租一栋红色的小度假屋，推开窗就是波罗的海，晚上可以听着波涛声入睡，体验绝对孤寂的岛屿之夜。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（6月至8月）的住宿非常紧俏，务必提前至少三个月预订，尤其是那些历史悠久的热门民宿。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "岛上大部分住宿都不设前台，需要自助入住，房东会通过邮件发送详细的钥匙盒密码和指引，请确保行前打印或保存好这些信息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "选择住在小镇外虽然更静谧，但意味着晚上几乎没有路灯，需要自备手电筒，并享受真正的“黑暗”和璀璨星空。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开艾尔岛好多天了，我的耳朵里好像还留着那份柔软的寂静。那不是无声，而是一种被放大、被珍视的生活本音：风声、海浪声、自行车铃声、邻居隔着花园的轻声问候。在这个被效率和速度裹挟的时代，艾尔岛像一个倔强的逆行者。它没有惊艳绝伦的建筑奇观，没有波澜壮阔的历史叙事，它的全部力量，恰恰在于这种“平凡”的完整保存。它告诉你，一种不必慌张、与周遭环境和谐共处、珍视社区与手艺的生活，不仅是可能的，而且是无比美好的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，每一位热爱深度游的旅人，都应该来艾尔岛住上几天。来这里，不是为了收集又一个景点打卡，而是为了完成一次关于“感受力”的修复。当你习惯了这里的慢，看懂了每一栋彩色房子背后是一个家族与大海的故事，体验过在没有车声的夜晚沉沉睡去，你带走的东西会远远多于照片。那是一份内心的校准，一个关于生活可以有多简单、多宁静的鲜活记忆。在往后都市繁忙喧嚣的日子里，只要想起那个波罗的海上的彩色小镇，想起那里磨得发亮的鹅卵石和永远盛放的天竺葵，心就能立刻安静下来。艾尔岛，是一个可以安放疲惫灵魂的童话，真实地存在于地图之上。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/ribe-denmark-oldest-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    里
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">里伯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ribe</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ribedenmark-odden" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    里
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">里伯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ribe</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/den-gamle-by" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥尔胡斯老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Den Gamle By</p>
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
