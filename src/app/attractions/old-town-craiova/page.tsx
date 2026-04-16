import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '克拉约瓦老城 Old Town Craiova｜探秘罗马尼亚的“小巴黎”，漫步新艺术风格建筑与悠闲咖啡馆长廊 - 最佳欧洲景点',
  description: '想象一下，你走进一个被时间温柔以待的调色盘。这不是典型的东欧那种带着沉重历史感的灰暗老城，克拉约瓦老城的第一眼，是轻盈而明媚的。街道两旁的建筑外墙，涂抹着杏黄、薄荷绿、淡丁香紫和奶油白，像一块块巨大的、融化在阳光里的糖果。阳光穿过法国梧桐层层叠叠的叶子，在行人道上投下晃动跳跃的光斑，空气里飘着刚煮好...',
}

export default function OldTownCraiovaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '克拉约瓦老城', href: '/attractions/old-town-craiova' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`克拉约瓦老城・Old Town Craiova・罗马尼亚・克拉约瓦`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下，你走进一个被时间温柔以待的调色盘。这不是典型的东欧那种带着沉重历史感的灰暗老城，克拉约瓦老城的第一眼，是轻盈而明媚的。街道两旁的建筑外墙，涂抹着杏黄、薄荷绿、淡丁香紫和奶油白，像一块块巨大的、融化在阳光里的糖果。阳光穿过法国梧桐层层叠叠的叶子，在行人道上投下晃动跳跃的光斑，空气里飘着刚煮好的浓缩咖啡的焦香，和从面包房溢出的、甜丝丝的“科佐纳克”黄油面包的香气。汽车的喇叭声被有轨电车“叮叮当当”的古老铃声和人们的谈笑声盖过，节奏缓慢得令人心安。
这里最动人的，是那股子慵懒又考究的生活气息。下午三四点，街边咖啡馆的藤编椅子就坐满了人。老先生们戴着呢帽，点一杯“图伊卡”李子白兰地，能聊上一个世纪；时髦的年轻人则对着笔记本电脑，手边是一杯拉花漂亮的卡布奇诺。你会发现，那些美得像艺术品的建筑，不是仅供参观的博物馆，而是真实生活的一部分——银行就在雕刻着藤蔓花纹的新艺术风格大楼里营业，书店开在有彩色玻璃穹顶的拱廊下。这种艺术与日常的水乳交融，让整个街区充满了温暖的“人气儿”。
而老城的灵魂，藏在这些建筑的细节里。抬起头，你会看到铁艺阳台弯曲成优雅的葡萄藤状，窗檐上停着石膏雕成的鸽子，门楣上方可能有一张用瓷砖拼贴出的少女脸庞，正对你微笑。这些装饰不是为了炫耀，而是一种生活态度的自然流露——即使历经动荡，这里的人们依然执着地创造并守护着美。穿行在街道上，仿佛在阅读一本立体的、关于“美好生活”的绘本，每一页都色彩饱满，细节丰盈。
当夜幕降临，煤气路灯（许多是原物修复的）一盏盏亮起，发出柔和的昏黄光晕，给那些石膏浮雕和彩色外墙蒙上一层怀旧的滤镜。餐馆里传来欢快的罗马尼亚民间音乐，空气里的烤肉香味更浓了。这时你会明白，克拉约瓦老城不是一座凝固的纪念碑，而是一首始终在轻声吟唱的生活之诗，邀请每一位过客，进来坐坐，成为它旋律中的一个音符。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下，你走进一个被时间温柔以待的调色盘。这不是典型的东欧那种带着沉重历史感的灰暗老城，克拉约瓦老城的第一眼，是轻盈而明媚的。街道两旁的建筑外墙，涂抹着杏黄、薄荷绿、淡丁香紫和奶油白，像一块块巨大的、融化在阳光里的糖果。阳光穿过法国梧桐层层叠叠的叶子，在行人道上投下晃动跳跃的光斑，空气里飘着刚煮好的浓缩咖啡的焦香，和从面包房溢出的、甜丝丝的“科佐纳克”黄油面包的香气。汽车的喇叭声被有轨电车“叮叮当当”的古老铃声和人们的谈笑声盖过，节奏缓慢得令人心安。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里最动人的，是那股子慵懒又考究的生活气息。下午三四点，街边咖啡馆的藤编椅子就坐满了人。老先生们戴着呢帽，点一杯“图伊卡”李子白兰地，能聊上一个世纪；时髦的年轻人则对着笔记本电脑，手边是一杯拉花漂亮的卡布奇诺。你会发现，那些美得像艺术品的建筑，不是仅供参观的博物馆，而是真实生活的一部分——银行就在雕刻着藤蔓花纹的新艺术风格大楼里营业，书店开在有彩色玻璃穹顶的拱廊下。这种艺术与日常的水乳交融，让整个街区充满了温暖的“人气儿”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而老城的灵魂，藏在这些建筑的细节里。抬起头，你会看到铁艺阳台弯曲成优雅的葡萄藤状，窗檐上停着石膏雕成的鸽子，门楣上方可能有一张用瓷砖拼贴出的少女脸庞，正对你微笑。这些装饰不是为了炫耀，而是一种生活态度的自然流露——即使历经动荡，这里的人们依然执着地创造并守护着美。穿行在街道上，仿佛在阅读一本立体的、关于“美好生活”的绘本，每一页都色彩饱满，细节丰盈。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当夜幕降临，煤气路灯（许多是原物修复的）一盏盏亮起，发出柔和的昏黄光晕，给那些石膏浮雕和彩色外墙蒙上一层怀旧的滤镜。餐馆里传来欢快的罗马尼亚民间音乐，空气里的烤肉香味更浓了。这时你会明白，克拉约瓦老城不是一座凝固的纪念碑，而是一首始终在轻声吟唱的生活之诗，邀请每一位过客，进来坐坐，成为它旋律中的一个音符。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`克拉约瓦老城`} />
                <InfoRow label="英文名称" value={`Old Town Craiova`} />
                <InfoRow label="正式名称" value={`Historical Center of Craiova`} />
                <InfoRow label="国家" value={`罗马尼亚`} />
                <InfoRow label="城市" value={`克拉约瓦`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`罗马尼亚奥尔特尼亚地区历史悠久的文化与商业心脏，被誉为“小巴黎”，是罗马尼亚民族复兴和新艺术运动的重要见证地。`} />
                <InfoRow label="建筑特色" value={`色彩柔和、装饰精巧的新艺术风格与布兰科韦内斯克风格（罗马尼亚本土复兴风格）建筑和谐共存，形成独特的城市景观。`} />
                <InfoRow label="建筑风格" value={`以19世纪末20世纪初盛行的新艺术风格为主，融合了罗马尼亚传统建筑元素和法国建筑美学的影响。`} />
                <InfoRow label="文化价值" value={`一座活着的露天建筑博物馆，体现了罗马尼亚在摆脱奥斯曼影响后，拥抱欧洲现代化浪潮，同时扎根本土文化的自信与创造力。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`公共区域全天24小时开放。但区域内的重要建筑（如克拉约瓦艺术博物馆、米哈伊·艾米内斯库国家剧院）有各自的开放时间，通常为周二至周日10:00-18:00，周一闭馆。夏季（5月至9月）部分咖啡馆和餐厅的露台会营业至深夜。圣诞节及复活节当天，大多数室内场馆关闭。`} />
              <InfoRow label="门票价格" value={`漫步老城街区本身完全免费。进入收费场馆参考价：克拉约瓦艺术博物馆成人票约20列伊（约4欧元），学生及老人有优惠票。米哈伊·艾米内斯库国家剧院参观导览约15列伊（约3欧元）。具体票价建议出行前查询官网确认。`} />
              <InfoRow label="地址" value={`Str. Matei Basarab, Craiova 200101, Romania`} />
              <InfoRow label="交通方式" value={`从罗马尼亚首都布加勒斯特出发最方便。火车：从布加勒斯特北站（Gara de Nord）乘坐区间车（Regio）或城际列车（InterRegio）前往克拉约瓦站（Craiova），车程约2.5-3.5小时，班次频繁，每小时至少有1-2班，建议在罗马尼亚铁路CFR官网提前购票可选座。飞机：克拉约瓦有国际机场（Craiova Airport），但航班较少。从克拉约瓦火车站或机场前往老城：火车站步行至老城中心约20分钟，也可乘坐1路、5路有轨电车或出租车（约10分钟车程）。机场可搭乘出租车，约15分钟抵达老城。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要读懂克拉约瓦老城的面孔，得把手掌贴在那温热斑驳的墙面上，感受几个世纪以来血液的流淌。它的故事始于更早，作为罗马帝国达契亚行省的一部分，这片土地就已是战略要冲。但真正赋予它性格的，是奥斯曼帝国漫长的统治时期。作为瓦拉几亚公国的重要城市，它在奥斯曼苏丹和本地大公的博弈间生存，发展成繁华的手工业和贸易中心。你能在老城某些建筑的底层，依稀看到那个时代商贾云集的痕迹——宽大的拱门曾是仓库和店铺，厚重的墙壁守护着财富与秘密。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`历史的转折点发生在19世纪中叶。随着罗马尼亚民族意识觉醒和国家的统一进程，克拉约瓦的精英阶层——那些在贸易、法律和教育领域取得成功的家族——渴望与欧洲文明接轨。他们送子弟去巴黎、维也纳留学，带回了最新的思想、时尚，当然，还有建筑蓝图。19世纪末到20世纪初的“美好年代”，成了老城脱胎换骨的黄金时期。本地富商和知识分子成了最大的“甲方”，他们聘请从欧洲学成归来的建筑师，对自己居住的城市进行了一场优雅的“化妆术”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，一场新艺术风格的盛宴在这里上演。不同于布加勒斯特的宏大庄严，克拉约瓦的新艺术风格更居家、更诗意。建筑师们如伊昂·米内斯库，巧妙地将法国、奥匈帝国的流线造型与罗马尼亚传统的民间图案（比如太阳、玫瑰、几何纹样）结合起来。你看那些建筑立面上绽放的石雕花朵、姿态曼妙的女性雕像、用熟铁扭曲成的奇幻阳台，它们诉说的不是神权或王权，而是新兴资产阶级对自由、美和现代生活的热烈向往。一幢幢私人宅邸、公共建筑拔地而起，让城市赢得了“小巴黎”的昵称。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，20世纪的动荡几乎将这份美丽摧毁。两次世界大战的炮火、战后强制推行的共产主义工业化，都对老城造成了忽视和破坏。许多精美建筑被国有化，分割成拥挤的公寓，外墙的灰泥剥落，雕塑蒙尘。那个时期的老城，像一位被强迫换上粗布衣裳的贵族，在灰暗的集体主义色调中沉默了数十年。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`曙光在1989年罗马尼亚革命后才真正到来。随着民主化进程和加入欧盟，修复历史遗产逐渐成为共识。过程缓慢而艰辛，资金、技术、产权问题错综复杂。但你能看到，一栋楼、一栋楼地，色彩被小心翼翼地清洗出来，破碎的雕像被复原，生锈的铁艺被更换。这不是简单的“复古”，而是一场文化的复兴。今天的克拉约瓦老城，是几个世纪层叠的结果：奥斯曼的骨架、民族复兴的激情、“美好年代”的梦幻、共产主义的伤痕，以及新世纪重生的希望。它站在那里，本身就是一部关于坚韧与美的编年史。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要沉浸式体验克拉约瓦老城，建议安排一整个白天加上一个傍晚。最佳的抵达时间是上午九点半左右，这时阳光正好，咖啡馆刚开门，街道还未完全苏醒，适合静静欣赏建筑细节。整体游览节奏应是“慢步细品”，因为老城范围集中，适合步行探索。建议以中央的米哈伊·艾米内斯库国家剧院广场为起点和核心辐射圈，先感受宏大的公共建筑空间，然后钻进两侧如毛细血管般的街道，探寻那些隐蔽的庭院和私人宅邸的惊艳立面。午后留足时间给一座博物馆和公园放松，傍晚则在露天餐厅享用晚餐，见证灯光点亮时刻的魔法变换。这样的安排能让你由面到点，由宏观到微观，充分吸收老城在不同时段的光影与氛围。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避免周一前来，因为主要博物馆和剧院内部参观可能不开放。老城街道上有时会有小商贩，态度友好但无需过多纠缠。穿着舒适且便于行走的鞋是必须的，因为你会不自觉地为了看建筑天花板而长时间仰头，并走上许多漂亮的古老楼梯。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从铺着光滑石板的米哈伊·艾米内斯库国家剧院广场开始，仰视那座宏伟的折衷主义风格剧院正门上方那排气势恢宏的雕像。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`转身走进与剧院相邻的“让·米内斯库”拱廊街，让眼睛适应稍暗的光线，欣赏头顶那精美的彩色玻璃穹顶和两侧高档商店的复古橱窗。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着充满咖啡香气的尼古拉·蒂图列斯库大街漫步，仔细端详每一栋建筑立面上独特的新艺术风格装饰，比如那栋著名“带着玫瑰花环少女立面”的房子。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在街角那家总坐着老顾客的传统咖啡馆“La Cărturești”稍作停留，点一小杯浓烈的罗马尼亚咖啡，观察窗外有轨电车缓缓驶过的街景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进位于前银行宫殿内的克拉约瓦艺术博物馆，不要错过布伦库西的早期作品展厅，感受天才雕塑家在家乡留下的艺术印记。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过热闹的市集小街，步入宁静的“米哈伊·艾米内斯库”中央公园，在树荫下的长椅上休息，看本地居民悠闲地散步遛狗。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选择一家有庭院或阳台的餐厅（比如Casa Românească）享用晚餐，品尝奥尔特尼亚风味的烤猪颈肉和手工李子酒，等待老城华灯初上。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`米哈伊·艾米内斯库国家剧院正对面的街道中央`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光时分，能拍到剧院建筑恢弘的立面细节以及前景中驶过的复古有轨电车，形成动态与静态的时空对话。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`克拉约瓦艺术博物馆主楼梯间`}</h4>
                  <p className="text-sm text-gray-700">{`晴天中午，阳光从顶层的天窗倾泻而下，站在楼梯中层向上仰拍，能捕捉到光线在巨大旋转楼梯上勾勒出的完美螺旋曲线与明暗对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`尼古拉·蒂图列斯库大街中段仰拍建筑角落`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚的柔和光线中，寻找一栋有突出弧形阳台和丰富石膏花卉装饰的建筑，从斜对角仰拍，让充满生命力的装饰细节占据画面的前景和焦点。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`“让·米内斯库”拱廊街内部`}</h4>
                  <p className="text-sm text-gray-700">{`避开正午的强烈顶光，选择上午或下午，站在拱廊一端向另一端拍摄，利用建筑的纵深感，将行人、橱窗和尽头的出口光线一同构进画面，营造故事感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`罗马尼亚人对拍照通常很友善，但拍摄私人住宅的窗户或阳台上的居民前，最好微笑示意或征得同意。新艺术风格的建筑细节在阴天柔和的散射光下反而能呈现出更细腻的质感和色彩饱和度，不必一味追求晴天。尝试用黑白模式拍摄一些铁艺和雕塑的局部，能突出其精湛的工艺和强烈的形式感。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`文艺之选`}</h4>
                  <p className="text-sm text-blue-800">{`由一栋19世纪末新艺术风格宅邸改造的精品酒店，房间拥有挑高的彩绘天花板和复古家具，早餐就在种满绿植的室内庭院享用，仿佛住在老电影里。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`中心便捷`}</h4>
                  <p className="text-sm text-green-800">{`坐落在老城绝对核心的现代设计酒店，房间窗户正对着古老的剧院广场，晚上可以枕着城市温和的喧嚣入眠，地理位置无敌。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-yellow-800">{`距离老城步行十分钟的一座安静街区里的家庭式公寓，房东是一位退休的建筑教授，能给你讲述每栋房子背后的故事，体验地道的本地生活。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-purple-800">{`位于城市边缘但交通便利的五星级酒店，拥有全市顶级的SPA中心和露天泳池，在深度探索了一天老城后，这里是完美的奢华休憩所。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城核心区的酒店通常不设大型停车场，自驾游客需提前咨询停车方案。夏季和圣诞季是旺季，建议至少提前一个月预订心仪的特色住宿。克拉约瓦整体治安良好，老城区域夜晚也很热闹安全，但一如既往，在人群密集处需保管好随身物品。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开克拉约瓦老城好多天了，我脑海里反复出现的，不是某个具体的建筑立面，而是一种混合着咖啡香、阳光温度和电车铃声的整体氛围。它有一种奇特的治愈力。在这个推崇“网红”和“打卡”的时代，它不争不抢，就安安静静地美在那里，为日常而美，为生活本身而美。它告诉你，美不是高高在上的奢侈品，而是可以镶嵌在阳台铁栏上、涂抹在自家外墙上的生活态度。这种深入市井的、活生生的艺术，比任何隔离在玻璃后的珍宝都更有力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了那些被游客大军淹没的欧洲名城，如果你想寻找一个还能呼吸到真实生活脉搏、看到历史如何与当下温柔和解的地方，请一定来克拉约瓦老城走走。它或许没有震撼世界的名气，但它拥有一座城市最珍贵的品质：从容、优雅，以及对平凡日子持之以恒的深情。在这里漫步一天，你会带走的不只是照片，还有一种关于“如何生活”的、柔软而坚定的启发。它提醒我们，无论时代如何狂奔，守护一片能让心灵散步的彩色街区，永远值得。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
