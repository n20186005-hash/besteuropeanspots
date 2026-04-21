import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '萨沃宁 Savognin｜尤利耶山口的罗曼什宝石，三座巴洛克教堂的雪国童话 - 最佳欧洲景点',
  description: '火车在阿尔卑斯山的褶皱里缓缓爬升，当你在一个叫蒂芬卡斯特尔的小站跳下，换乘那辆黄色的邮政巴士，一段更加静谧的旅程开始了。巴士在山谷间盘旋，突然间，一片被巨大山峦温柔环抱的谷地豁然眼前——萨沃宁到了。我的第一眼，不是被某栋建筑震撼，而是被一种完美的“比例感”征服。远处的雪峰（比如巍峨的Piz Mitg',
}

export default function SavogninVillagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '瑞士', href: '/destinations/europe' },
            { label: '萨沃宁', href: '/destinations/europe' },
            { label: '萨沃宁', href: '/attractions/savognin-village' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`萨沃宁・Savognin・瑞士・萨沃宁`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`火车在阿尔卑斯山的褶皱里缓缓爬升，当你在一个叫蒂芬卡斯特尔的小站跳下，换乘那辆黄色的邮政巴士，一段更加静谧的旅程开始了。巴士在山谷间盘旋，突然间，一片被巨大山峦温柔环抱的谷地豁然眼前——萨沃宁到了。我的第一眼，不是被某栋建筑震撼，而是被一种完美的“比例感”征服。远处的雪峰（比如巍峨的Piz Mitgel）是沉默而永恒的幕布，中景是墨绿色的森林和冬季泛着金光的草坡，而前景，就是那个洒落着深棕色木屋的小村落。最奇妙的，是三座奶白色与淡黄色墙身的巴洛克小教堂，它们像三枚精致的音符，分别落在村子的不同高度，构成了视觉的韵律。
你拖着行李箱走在卵石路上，声音清脆。空气是那种清冽的、带着松针和远处牲畜棚气味的阿尔卑斯山空气。耳边最先响起的，是溪流潺潺的水声，它们从山上奔涌而下，穿过村庄。然后，某个教堂的钟声敲响了，声音浑厚却不沉重，在群山间荡出回响。你很快会发现，这里的生活节奏就跟着这钟声和自然走。穿着传统登山服的老人用你听不懂的罗曼什语互相问候，面包房里飘出刚烤好的“楚格樱桃蛋糕”的甜香混着咖啡味儿。教堂不只是景点，它们是地标，是集会的中心，是婚礼和葬礼的见证者。一位当地老太太告诉我：“瞧见那三座教堂了吗？它们离得不远，但从不争吵。就像我们村里的人家。”
萨沃宁最打动人心的，是一种深刻的“平衡”。这里既有令人屏息的自然之美，又有充满人情味的社区生活；既有厚重的历史（那三座教堂都是17世纪的！），又是充满活力的现代滑雪胜地。你在同一天里，可以上午在寂静的、飘着尘粒的古老教堂里看壁画，下午就踩着雪板从海拔三千米的山坡呼啸而下。晚上，则可能和刚下班的滑雪教练一起，在村里的老酒馆喝一杯本地酿的啤酒。它不像那些被博物馆化的古镇，而是一个依然在呼吸、在生长的地方。这种时空交错却又浑然一体的感觉，正是它无可替代的核心魅力。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "火车在阿尔卑斯山的褶皱里缓缓爬升，当你在一个叫蒂芬卡斯特尔的小站跳下，换乘那辆黄色的邮政巴士，一段更加静谧的旅程开始了。巴士在山谷间盘旋，突然间，一片被巨大山峦温柔环抱的谷地豁然眼前——萨沃宁到了。我的第一眼，不是被某栋建筑震撼，而是被一种完美的“比例感”征服。远处的雪峰（比如巍峨的Piz Mitgel）是沉默而永恒的幕布，中景是墨绿色的森林和冬季泛着金光的草坡，而前景，就是那个洒落着深棕色木屋的小村落。最奇妙的，是三座奶白色与淡黄色墙身的巴洛克小教堂，它们像三枚精致的音符，分别落在村子的不同高度，构成了视觉的韵律。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你拖着行李箱走在卵石路上，声音清脆。空气是那种清冽的、带着松针和远处牲畜棚气味的阿尔卑斯山空气。耳边最先响起的，是溪流潺潺的水声，它们从山上奔涌而下，穿过村庄。然后，某个教堂的钟声敲响了，声音浑厚却不沉重，在群山间荡出回响。你很快会发现，这里的生活节奏就跟着这钟声和自然走。穿着传统登山服的老人用你听不懂的罗曼什语互相问候，面包房里飘出刚烤好的“楚格樱桃蛋糕”的甜香混着咖啡味儿。教堂不只是景点，它们是地标，是集会的中心，是婚礼和葬礼的见证者。一位当地老太太告诉我：“瞧见那三座教堂了吗？它们离得不远，但从不争吵。就像我们村里的人家。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "萨沃宁最打动人心的，是一种深刻的“平衡”。这里既有令人屏息的自然之美，又有充满人情味的社区生活；既有厚重的历史（那三座教堂都是17世纪的！），又是充满活力的现代滑雪胜地。你在同一天里，可以上午在寂静的、飘着尘粒的古老教堂里看壁画，下午就踩着雪板从海拔三千米的山坡呼啸而下。晚上，则可能和刚下班的滑雪教练一起，在村里的老酒馆喝一杯本地酿的啤酒。它不像那些被博物馆化的古镇，而是一个依然在呼吸、在生长的地方。这种时空交错却又浑然一体的感觉，正是它无可替代的核心魅力。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`萨沃宁`} />
                <InfoRow label="英文名称" value={`Savognin`} />
                <InfoRow label="正式名称" value={`Savognin`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`萨沃宁`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一个浓缩了罗曼什文化韧性与阿尔卑斯生活智慧的千年古村，以和谐共处的三座巴洛克教堂闻名，被誉为“格劳宾登的信仰三角”。`} />
                <InfoRow label="建筑特色" value={`三座拥有洋葱形圆顶钟楼的17世纪巴洛克教堂，巧妙地分散在村落各处，与质朴的木筋墙老屋、巍峨的雪山背景构成一幅层次错落、和谐无比的立体画卷。`} />
                <InfoRow label="建筑风格" value={`阿尔卑斯地区独特的巴洛克风格，融合了南部拉丁的华丽与北部山区的质朴，被称为“阿尔卑斯巴洛克”或“农民巴洛克”。`} />
                <InfoRow label="文化价值" value={`罗曼什语（瑞士第四官方语言）社区的活化石，其教堂建筑群是研究阿尔卑斯山区宗教史、社会结构与艺术本土化过程的珍贵标本。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`村庄及户外区域全年全天开放。三座主要巴洛克教堂内部通常为白天开放，具体时间随季节变动，夏季（5月-10月）一般为9:00-18:00，冬季（11月-4月）可能缩短至10:00-16:00。建议行前查询当地旅游信息站。滑雪场开放时间通常为12月至次年4月，每日8:30-16:30，视雪况调整。`} />
              <InfoRow label="门票价格" value={`进入萨沃宁村庄及漫步参观免费。进入三座巴洛克教堂内部免费，但欢迎自愿捐赠以支持维护。使用滑雪场需购买缆车票，成人一日通票约60-70瑞士法郎，有家庭票、多日票及半日票等优惠。具体价格随季节略有浮动。`} />
              <InfoRow label="地址" value={`Via Principala, 7457 Savognin, Switzerland`} />
              <InfoRow label="交通方式" value={`从苏黎世机场出发是最便捷的选择。首先乘坐火车前往库尔，车程约1小时15分钟，班次频繁（每小时2-3班）。在库尔火车站换乘前往蒂芬卡斯特尔的窄轨列车（Arosa线或RhB阿尔布拉线），在蒂芬卡斯特尔站下车，车程约50分钟。最后转乘邮政巴士（PostBus）415路，约15分钟即可抵达萨沃宁村中心巴士站。全程总耗时约2.5至3小时。强烈建议购买瑞士旅行通票，可无限次乘坐火车和邮政巴士。冬季自驾需确保车辆配备雪地轮胎或防滑链。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要理解萨沃宁，你得先闭上眼睛，想象一下中世纪穿梭在阿尔卑斯山间的商队和朝圣者。这个村子恰好坐落在几条古老贸易路线的交汇点，尤其是连接着意大利北部和德国南部的通道。人们在这里歇脚，货物在这里交换，当然，思想和信仰也在这里碰撞。早期的萨沃宁大概只有一座简单的小礼拜堂，服务于往来旅人和本地山民。它的命运转折点，与整个格劳宾登地区复杂的历史息息相关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "到了17世纪，一场被称为“巴洛克化”的艺术与信仰风潮席卷了天主教世界。这股风也吹进了阿尔卑斯山区。但萨沃宁的故事独特在哪？通常一个村子有一座主教堂就够了，但萨沃宁却在短短几十年里，接连建起了三座规模相当、风格接近的巴洛克教堂：圣心教堂、圣约瑟夫教堂和圣母升天教堂。关于这个“三教堂之谜”，当地流传着几种说法。一种浪漫的说法是，村里的几个大家族谁也不服谁，于是各自出资修建了一座，既彰显虔诚，也暗含较量。另一种更实际的解释是，它们服务于不同的社区功能或教友团体，和谐地分担着宗教生活的不同面向。无论如何，这三座教堂并肩而立，没有导致分裂，反而成了社区团结的奇特象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "建筑的过程本身就是一部史诗。你能想象吗？所有的石材、木材都取自本地山谷。那些华丽的灰泥装饰、壁画，很可能是由巡回的“工匠家族”完成的，他们将意大利的巴洛克灵感，与本地工匠对木材、对山神传说的理解融为一体。壁画里圣人的面孔，或许就是以某个村民为模特；描绘的天堂景象里，隐约能看到萨沃宁周围群山的影子。这就是“阿尔卑斯巴洛克”的精髓——它不是维也纳或罗马宫廷艺术的简单复制，而是从这片土壤里生长出来的、带着泥土和松木香气的信仰表达。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光流转，萨沃宁经历了平静也经历了风雨。拿破仑的军队曾从此经过，两次世界大战的阴影也曾笼罩山峦，但这个深藏山谷的村落凭着一种顽强的韧性存续了下来。20世纪中叶，另一场变革悄然到来——滑雪运动兴起。萨沃宁凭借其优越的雪质和地形，逐渐发展成为深受瑞士本地家庭喜爱的滑雪胜地。有趣的是，旅游业并没有吞噬它的灵魂。村民们聪明地保留了村庄的核心区域，将现代化的滑雪设施巧妙地布局在周边山坡。于是，你看到了今天这幅景象：百年木屋的阳台上挂着滑雪板，教堂钟声与缆车的运行声交织，穿雪靴的游客和穿传统服饰的老人走在同一条卵石街上。历史在这里不是橱窗里的展品，而是日常生活的背景音。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天的时间给萨沃宁，才能真正体会它的晨昏之美。最佳抵达时间是上午九点左右，此时旅行团尚未涌入，阳光正好温柔地洒满山谷。游览整体节奏应是松弛而漫步式的，以村庄中心为原点，向外辐射探索三座教堂和周边自然景观。上午光线最佳，适合重点参观教堂内部和拍摄建筑；中午享受一顿悠长的当地午餐；下午可根据季节选择——冬季自然是体验滑雪或雪地漫步，其他季节则强烈推荐乘坐缆车上山徒步一段，从高处俯瞰这个“三教堂村落”的全景构图。傍晚时分回到村里，感受灯火初上、炊烟袅袅的静谧时刻。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`冬季来访务必穿防滑防水性能好的鞋子，村庄卵石路在雪后或化雪时非常湿滑。村里餐馆不多，旺季（特别是滑雪季的周末）建议提前预订晚餐。尊重当地的宁静，尤其是在教堂周围和居民区，避免大声喧哗。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从村中心的巴士站开始，沿着Via Principala主街慢慢走，先被那些窗台上开满天竺葵、有着精美浮雕的老木筋墙房屋吸引。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`信步走向位于村落西侧较高处的圣心教堂，推开那扇厚重的木门，让眼睛适应内部昏暗的光线，然后仰望祭坛上方那繁复而充满乡土生命力的灰泥装饰与壁画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`接着下山，穿过横跨莱茵河源流之一的小桥，去探访河对岸的圣约瑟夫教堂，注意比较它与圣心教堂在内部装饰色调和细节上的微妙差异。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在村子广场边的传统面包房“Beck”买一个刚出炉的“Bündner Nusstorte”（格劳宾登坚果挞），配一杯咖啡，坐在户外长椅上像本地人一样享受上午茶歇。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`乘坐缆车缓缓升上Radons山，在中间站点或山顶餐厅的露台上，花至少半小时，静静地寻找和辨认脚下村落里那三座教堂的精确位置，看它们如何与整个山谷对话。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果正值冬季，下午的时光就交给雪道，哪怕只是租个雪橇在平缓的练习坡上玩耍；其他季节则选择一条标记清晰的徒步小径，走进教堂背后的森林，聆听风声与溪流。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前，务必找到前往尤利耶山口的道路方向，在观景台欣赏夕阳将远处连绵的阿尔卑斯雪峰染成金红色的壮丽景象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚上在村里一家名为“Crusch Alva”的老餐馆里，用一份地道的“Capuns”（瑞士肉馅菜卷）或奶酪火锅结束完美的一天。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`缆车上升中途抓拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`在乘坐Radons缆车上行至约三分之一高度时，迅速回身拍摄，可以将村庄全貌、三座教堂以及背后的Piz Mitgel雪山全部纳入镜框，侧光下的早晨或下午拍摄层次感最佳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣心教堂门前台阶俯拍村落`}</h4>
                  <p className="text-sm text-gray-700">{`站在圣心教堂门口的石头台阶上，用中长焦镜头向下拍摄，可以将蜿蜒的卵石路、层层叠叠的木屋屋顶以及远处另外两座教堂的尖顶压缩在同一画面，构成富有引导线的构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老木屋街巷的光影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`午后阳光斜射进狭窄的“Via Sura”小巷时，寻找光影切割在老木墙和石板路上的瞬间，可以等待一个当地人推着自行车或手提购物袋经过，为画面增添故事感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`尤利耶山口观景台远眺`}</h4>
                  <p className="text-sm text-gray-700">{`黄昏前驱车或乘巴士前往附近的尤利耶山口，使用长焦镜头从远处山口眺望，萨沃宁村落会在广袤的山谷中显得宁静而渺小，三座教堂的尖顶成为画面中微小却坚定的点睛之笔。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`溪流与教堂倒影`}</h4>
                  <p className="text-sm text-gray-700">{`在村落东侧的小溪边，找到一个能将圣约瑟夫教堂完整倒映在水中的位置，无风的清晨或傍晚，利用慢门拍出丝滑的水流和教堂清晰的倒影，营造静谧氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`教堂内部通常允许拍照，但严禁使用闪光灯和三脚架，以免破坏珍贵的壁画和氛围。冬季拍摄时注意相机保暖，从室外进入温暖的教堂内部时，相机容易起雾，建议将相机装入密封袋适应温度后再取出。拍摄当地居民，尤其是老人和儿童，务必先微笑示意并获得同意，这是基本的尊重。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`家庭式山居木屋`}</h4>
                  <p className="text-sm text-blue-800">{`住在村子边缘一栋有百年历史的翻新木屋里，房东老太太会为你准备用自家蜂蜜调味的早餐，晚上能听见壁炉里柴火的噼啪声和远处隐约的牛铃声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`精品设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`由传统农舍改造而成的现代设计酒店，房间拥有巨大的落地窗直面雪山，室内是温暖的木材与粗犷岩石的结合，水疗区提供用当地草药制作的桑拿。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特色公寓酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`位于缆车站附近的公寓式酒店，带设备齐全的小厨房和阳台，特别适合家庭或三五好友，白天滑雪归来可以自己烹饪，体验“在萨沃宁有个家”的感觉。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`历史庄园酒店`}</h4>
                  <p className="text-sm text-purple-800">{`一座位于村口、被花园环绕的19世纪优雅庄园，房间天花板保留着原始的彩绘，餐厅以精致的现代手法演绎格劳宾登传统菜肴，充满低调的奢华感。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "滑雪旺季（12月底至2月，以及圣诞、新年假期）的住宿非常紧俏，往往需要提前数月预订。夏季徒步旺季（7-8月）同样热门。选择住在村里比住在附近更大的滑雪度假村更能深入体验罗曼什文化，夜晚的宁静和星空是无价的。大部分住宿都提供免费的当地交通卡，可以免费乘坐缆车和巴士，预订时务必确认。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开萨沃宁好些天了，我脑海里反复回放的，不是某一张具体的明信片般的风景，而是一种感觉。那是一种被“安放”得很妥帖的感觉。这个村子，连同它的三座教堂、它的木屋、它的雪山和溪流，形成了一个自洽而完整的系统。它没有试图去迎合外界的眼光，成为某种夸张的“阿尔卑斯明信片”，它只是从容地存在着，过着自己的四季，见证着出生与死亡，庆祝着丰收与滑雪季的开板。这种笃定和从容，在当今这个充满了焦虑和表演性的世界里，显得如此珍贵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，为什么要来萨沃宁？不仅仅是为了看三座独特的巴洛克教堂，虽然它们确实迷人；也不仅仅是为了滑雪或徒步，虽然这里的山野无可挑剔。你来，是为了体验一种可能已经远离我们现代都市人的生活范式——一种社区与自然深度绑定、历史与当下自然流动、不同元素（甚至三座教堂）可以既独立又和谐共存的范式。它像一颗藏在深山里的、温润的宝石，不张扬，但当你拿起它对着光细看，会发现里面蕴藏着一个完整而微缩的宇宙。对于每一位厌倦了走马观花、渴望在旅途中找到片刻宁静与真实连接的深度旅人来说，萨沃宁都是一个值得你绕一点路，专门来住上几天，让它那山间的钟声，也轻轻敲打一下你心灵的地方。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/morges-castle-tulip-festival" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莫尔日</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Morges</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/spluegen-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施普吕根</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Splügen</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/trogen" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特罗根</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trogen</p>
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
