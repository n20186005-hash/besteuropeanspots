import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '亚伊采瀑布与城堡 Jajce Waterfall and Fortress｜见证帝国兴衰的水与石之交响 - 最佳欧洲景点',
  description: '你第一眼看到它的时候，肯定会愣住，然后怀疑自己的眼睛。这可不是什么普通的山里小镇——一条饱满的、奶油色般的河流，就这么毫无预兆地在密密麻麻的红瓦屋顶尽头突然断掉，轰然坠入下方的深渊，激起永远散不尽的蒙蒙水雾。水流坠落的声音是低沉的轰鸣，是背景里的白噪音，当你站在老城那些鹅卵石小巷里时，它无处不在，像...',
}

export default function JajceFallsAndFortressPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '波黑', href: '/destinations/bosnia-and-herzegovina' },
            { label: '亚伊采', href: '/destinations/bosnia-and-herzegovina' },
            { label: '亚伊采瀑布与城堡', href: '/attractions/jajce-falls-and-fortress' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`亚伊采瀑布与城堡・Jajce Waterfall and Fortress・波斯尼亚和黑塞哥维那・亚伊采`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼看到它的时候，肯定会愣住，然后怀疑自己的眼睛。这可不是什么普通的山里小镇——一条饱满的、奶油色般的河流，就这么毫无预兆地在密密麻麻的红瓦屋顶尽头突然断掉，轰然坠入下方的深渊，激起永远散不尽的蒙蒙水雾。水流坠落的声音是低沉的轰鸣，是背景里的白噪音，当你站在老城那些鹅卵石小巷里时，它无处不在，像是这个小镇永恒的心跳和呼吸。空气里总是湿润的，带着一股清新的、略带腥甜的河水气息，混合着老房子石头缝里苔藓的味道。
当地人早已习惯了与这轰鸣共存。孩子们在离瀑布不远处的广场上踢球，老太太们提着菜篮从观景台旁从容走过，仿佛家门口不是万丈深渊，而只是一个普通公园。但每当有游客第一次走到悬崖边，发出那声经典的惊叹时，他们还是会露出一点了然的、淡淡的微笑。这种日常与奇观的交织，正是亚伊采最迷人的地方。它不是一个被圈起来的“景点”，而是一个活生生的小镇，瀑布就是它的后花园，城堡是它的瞭望塔。
最打动人的，或许是那种极致的反差与和谐。瀑布是动态的、野性的、瞬息万变的，水流随季节丰枯，阳光穿过水雾能制造出转瞬即逝的彩虹。而城堡是静态的、厚重的、历经沧桑的，它的石头城墙沉默地矗立了数个世纪，看惯了底下的奔流不息。一个向下倾泻生命，一个向上固守历史。当你站在城堡的垛口，低头就能看见自己脚下二十多米处飞珠溅玉，那种眩晕感和联结感，是在任何其他地方都难以体验到的。你会觉得，自己同时站在了时间的两个维度上。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你第一眼看到它的时候，肯定会愣住，然后怀疑自己的眼睛。这可不是什么普通的山里小镇——一条饱满的、奶油色般的河流，就这么毫无预兆地在密密麻麻的红瓦屋顶尽头突然断掉，轰然坠入下方的深渊，激起永远散不尽的蒙蒙水雾。水流坠落的声音是低沉的轰鸣，是背景里的白噪音，当你站在老城那些鹅卵石小巷里时，它无处不在，像是这个小镇永恒的心跳和呼吸。空气里总是湿润的，带着一股清新的、略带腥甜的河水气息，混合着老房子石头缝里苔藓的味道。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当地人早已习惯了与这轰鸣共存。孩子们在离瀑布不远处的广场上踢球，老太太们提着菜篮从观景台旁从容走过，仿佛家门口不是万丈深渊，而只是一个普通公园。但每当有游客第一次走到悬崖边，发出那声经典的惊叹时，他们还是会露出一点了然的、淡淡的微笑。这种日常与奇观的交织，正是亚伊采最迷人的地方。它不是一个被圈起来的“景点”，而是一个活生生的小镇，瀑布就是它的后花园，城堡是它的瞭望塔。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，或许是那种极致的反差与和谐。瀑布是动态的、野性的、瞬息万变的，水流随季节丰枯，阳光穿过水雾能制造出转瞬即逝的彩虹。而城堡是静态的、厚重的、历经沧桑的，它的石头城墙沉默地矗立了数个世纪，看惯了底下的奔流不息。一个向下倾泻生命，一个向上固守历史。当你站在城堡的垛口，低头就能看见自己脚下二十多米处飞珠溅玉，那种眩晕感和联结感，是在任何其他地方都难以体验到的。你会觉得，自己同时站在了时间的两个维度上。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`亚伊采瀑布与城堡`} />
                <InfoRow label="英文名称" value={`Jajce Waterfall and Fortress`} />
                <InfoRow label="正式名称" value={`Jajce Waterfall and Fortress`} />
                <InfoRow label="国家" value={`波斯尼亚和黑塞哥维那`} />
                <InfoRow label="城市" value={`亚伊采`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`中世纪波斯尼亚王国的最后首都之一，也是南斯拉夫社会主义联邦共和国在二战尾声时诞生的地方。`} />
                <InfoRow label="建筑特色" value={`普利瓦河从镇中心断崖处奔涌而下形成22米高的瀑布，而中世纪城堡则雄踞于瀑布顶端的山崖之巅，两者形成了自然奇观与人类防御工事浑然一体的罕见景象。`} />
                <InfoRow label="建筑风格" value={`城堡主体展现了中世纪波斯尼亚本土的军事建筑特点，并叠加了奥斯曼帝国占领时期的改造痕迹，而山下的老城则混杂着奥匈帝国带来的中欧巴洛克风味。`} />
                <InfoRow label="文化价值" value={`它是波黑这个多民族、多宗教国家历史层积的缩影，象征着自然力量与人类文明之间持续数百年的对话与依存。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`瀑布及周边公园区域：全年24小时开放，但强烈建议白天游览以确保安全。亚伊采城堡：通常为每日上午9点至下午7点开放（夏季），冬季可能缩短至下午5点关闭。具体开放时间可能因天气和季节临时调整，建议行前查看当地旅游信息板。`} />
              <InfoRow label="门票价格" value={`进入瀑布下方观景区域及城堡主体通常需要购买联票。成人票价约10-15波黑马克（BAM），学生及儿童享有折扣。门票通常在城堡入口处或老城区的游客中心购买。部分外围观景步道免费。`} />
              <InfoRow label="地址" value={`瀑布与城堡区域，Jajce 70101， 波斯尼亚和黑塞哥维那`} />
              <InfoRow label="交通方式" value={`从首都萨拉热窝出发：在萨拉热窝中央汽车站乘坐前往亚伊采的大巴，班次频繁，车程约3-3.5小时，沿途是蜿蜒的山路和田园风光。从克罗地亚萨格勒布出发：也有直达大巴，车程约4-5小时。抵达亚伊采汽车站后，小镇规模不大，瀑布和城堡是绝对地标，从车站步行约15-20分钟即可抵达老城区和瀑布边缘。如果行李多，可以叫一辆当地的出租车，价格非常实惠。建议提前一天确认大巴时刻表，波黑的长途交通有时会有临时变动。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`让我们把时钟拨回到中世纪。早在15世纪，亚伊采就是波斯尼亚王国的心脏地带。这里的城堡可不是为了看风景建的，它地势险要，易守难攻，是王国最后的堡垒之一。1421年，波斯尼亚国王斯特凡·特弗尔特科二世甚至在这里加冕，你可以想象当时城堡内举行的盛大仪式，与墙外瀑布的轰鸣交织在一起。那时候，小镇因铜矿和铁匠行会而繁荣，工匠们的锤击声或许曾与瀑布声争鸣。城堡不仅是王权的象征，也守护着山下繁忙的市集和不同信仰的居民——天主教堂、东正教堂和后来的清真寺相继出现，留下了最早的“波黑式”多元痕迹。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，坚固的石头挡不住历史的洪流。1463年，强大的奥斯曼帝国大军压境，波斯尼亚王国灭亡。但亚伊采的城堡非常顽强，它又抵抗了整整25年，直到1482年才最终陷落。奥斯曼人占领后，给小镇带来了新的面貌：他们在城堡上增加了符合土耳其军事风格的工事，并在山下修建了清真寺、浴室和市场。瀑布的声音里，从此加入了宣礼塔的召唤。但有趣的是，基督教徒并未完全离开，一种微妙的共存开始了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间快进到19世纪，另一个帝国——奥匈帝国——接手了这片土地。火车铁轨铺了进来，带来了中欧的风尚。亚伊采有了邮局、学校、规整的街道和带有新古典主义立面的建筑。瀑布，这个曾经的天然屏障和军事要素，在和平年代开始被欣赏为一种“风景”。人们修建了更好的观景步道，它从防御的背景音，逐渐变成了小镇旅游的名片。帝国的官员和早期的旅行者，开始站在如今我们站立的位置，为这奇观发出赞叹。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`20世纪的亚伊采，则被卷入了更激烈的漩涡。二战期间，它是南斯拉夫游击队重要的活动中心。就在1943年，在战火纷飞中，反法西斯会议在亚伊采召开，宣布成立了未来的南斯拉夫联邦。城堡又一次成为了重大历史事件的见证者，只不过这次关乎的是一个现代国家的诞生。战后的南斯拉夫时代，亚伊采瀑布作为国家名片被印在钞票和宣传册上，成了团结与自然美的象征。当90年代那场惨烈的战争袭来时，小镇和它的瀑布再次遭受创伤，但坚硬的石头和不息的水流又一次挺了过来。你今天看到的平静，底下是无数层历史的沉积，每一层都像岩石的纹路一样清晰可辨。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味亚伊采，我强烈建议你安排至少一整天的停留，并在小镇住上一晚。完美的路线始于下午：先别急着扑向瀑布，把最震撼的初体验留到明天清晨。今天下午，你的目标是城堡和日落。大约在下午三四点抵达小镇，安顿好后，先去探索雄踞山巅的城堡。这个时候的阳光变得柔和，城堡的石墙染上金色。你在城堡上可以全方位俯瞰小镇、河流和瀑布的“顶部视角”，为明天的“仰视”做好铺垫。然后，一定要在城堡西侧的城墙等待日落，那是亚伊采的黄金时刻。晚上，在华灯初上时，漫步在老城，听听夜晚的瀑布轰鸣。次日清晨，趁旅游团还没到达，去瀑布下方的观景平台，享受属于你一个人的、被彩虹和水雾包围的宁静时刻。之后，再悠闲地探索老城的小巷和博物馆。这样的节奏，让你能从光影、动静、高低各个维度，完整地吸收这个地方的灵魂。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`瀑布下方平台石板常年被水浸润，非常湿滑，务必穿防滑性能好的鞋子，行走时也要格外小心。
小镇许多小餐馆和纪念品店可能只收现金（波黑马克或欧元），信用卡不一定畅通，提前备好零钱。
尊重当地习俗，尤其是在参观老墓园（无论是中世纪的Stećci墓碑还是奥斯曼时期的墓葬）时，保持肃静。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午时分先从老城背后那条陡峭但铺整良好的“国王之路”石阶慢慢爬上城堡入口，在购票时回头一瞥，山下红屋顶的海洋和远方青山的轮廓已尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`踏入城堡内部后不要只盯着主体建筑，一定要沿着几乎完整的城墙走一圈，从每一个垛口望出去，风景都截然不同——有时是瀑布上游平静如镜的河面，有时是山下奥斯曼时期的老墓园。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`务必在日落前一小时找到城堡西侧那段无遮挡的城墙，找块平整的石头坐下，看夕阳如何把整个山谷、河流以及对面的山峦染成蜂蜜色再到玫瑰紫。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚上从城堡下来后，别急着回住处，去瀑布顶端那座小桥附近走走，看灯光如何勾勒出悬崖的边缘，听黑暗中瀑布愈发深沉有力的轰鸣声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第二天清晨趁薄雾未散时，穿过老城走向瀑布下方的“大平台”，感受冰凉的水珠扑在脸上，运气好能看到一道完整的彩虹从水雾中升起直插潭底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从平台侧面的小径可以继续向下游探索，沿着河边安静地走一段，从更远的距离回望瀑布与城堡合体的全景，你会理解为何这里是摄影师的天堂。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`别忘了花一两个小时钻进老城的迷宫小巷，寻找那口著名的“圣卢卡教堂”地下洗礼池（通常在正午前后有最佳光线射入）和略显简陋但内容感人的亚伊采博物馆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开前，在瀑布顶端河畔的某家露天咖啡馆坐下，点一杯波黑咖啡，就这样看着河水在你眼前几米处平静流淌，然后突然消失，坠入虚空。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡西侧城墙日落点`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时到日落后十五分钟的“黄金与蓝色时刻”，以城墙沧桑的石块为前景框架，将远处沐浴在暖光中的老城屋顶和群山作为背景，拍摄剪影或长曝光下的流云。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`瀑布下方大平台仰角`}</h4>
                  <p className="text-sm text-gray-700">{`上午9点至11点之间，太阳从城堡方向照射瀑布，能拍出通透明亮的水流质感，使用减光镜长时间曝光（如1/4秒或更慢）将瀑布水流拉成丝绸状，务必注意镜头防水。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老城“国王之路”石阶中段框景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨太阳刚升起时，站在石阶的某个转弯处，利用石阶形成的自然引导线，将前方小巷尽头那一小块瀑布飞泻的画面精准地框在中央，构成一幅有纵深感的“画中画”。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`瀑布上游小桥侧后方`}</h4>
                  <p className="text-sm text-gray-700">{`午后时分，从小桥下游侧方的小土坡上，可以同时拍到作为前景的平静河面、中景的城堡剪影，以及背景的瀑布水雾，形成动静、高低、横竖的丰富层次。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`普利瓦河下游步道经典全景`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗日子的任意时间，从瀑布下游向南步行约10分钟，有一片开阔地，这是拍摄瀑布与城堡完整共生关系的标准明信片机位，广角镜头能收纳全部元素。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`水雾是无孔不入的，务必为相机做好防水措施，最简单的办法是套一个透明的塑料袋。当地人肖像摄影前，请务必先微笑并征得同意，一个简单的手势就能获得友善的回应。放飞无人机理论上需要申请许可，且需远离人群和私人领空，瀑布附近的气流多变，要非常谨慎。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`瀑布景观民宿`}</h4>
                  <p className="text-sm text-blue-800">{`直接位于瀑布顶端的悬崖边上，住在古老的石砌房子里，夜晚枕着轰隆的水声入眠，清晨一拉开窗帘就能看到彩虹在水雾中若隐若现。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`奥斯曼老宅精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`藏身于老城迷宫般的小巷中，由一栋有数百年历史的奥斯曼风格宅邸修复而成，庭院里种满石榴树，房间拥有原始的木质天花板和厚重的家具，仿佛住进了历史里。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`宁静山间家庭旅馆`}</h4>
                  <p className="text-sm text-yellow-800">{`位于小镇外围一处能同时俯瞰城堡和瀑布的山坡上，由热情的家庭经营，提供丰盛的家制早餐和自酿的果酒，露台是晚上观星的绝佳地点。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`现代风格公寓`}</h4>
                  <p className="text-sm text-purple-800">{`位于镇中心稍现代的区域，提供全套厨房设施和宽敞的空间，适合家庭或长住的旅行者，步行至瀑布仅需10分钟，性价比极高。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（7-8月）是旺季，尤其是周末，镇中心及瀑布旁的住宿非常紧俏，务必提前数周甚至数月预订。小镇治安普遍良好，但老城部分小巷夜间照明有限，建议选择有明亮入口的住宿或随身携带小手电。许多家庭旅馆不提供24小时前台服务，预定后一定要主动沟通确切的入住时间。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开亚伊采好久了，但那水声好像还留在耳朵里。它不是那种需要你屏息凝神、顶礼膜拜的宏伟古迹，而是一种更持久、更生活化的存在。它让我想起，历史不总是陈列在玻璃柜里的死物，它可以像那条普利瓦河一样，是活的，一直在流淌、奔腾、坠落，然后汇入更广阔的河流。城堡的石头是沉默的编年史，而瀑布的水是永不疲倦的讲述者。在这里，你能触摸到波黑这个国家的复杂脉搏——它的坚韧、它的伤痕、它的美丽，以及它那在各种文明冲刷下依然保持独特性的生命力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个人人都追逐着“下一个网红打卡点”的快节奏世界里，亚伊采提供了一种稀缺的体验：一种完整的沉浸感。你不是一个旁观者，你走进了这幅画里，水雾会打湿你的头发，古堡的石阶会考验你的膝盖，老咖啡馆的老板会跟你聊起他爷爷辈的故事。它让你慢下来，去听水与石头的千年对话，去理解一片土地如何承载层层叠叠的记忆。所以，如果你想要的不仅仅是一张照片，而是一段能沉淀在心里的、带着水汽和石头凉意的回忆，那么，请一定把它列入你的清单。它静静地在那里，等着告诉你，关于时间、坚持与共生的故事。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
