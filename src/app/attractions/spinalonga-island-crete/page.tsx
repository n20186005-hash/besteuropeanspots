import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '斯皮纳隆加岛 Spinalonga｜探秘威尼斯海上堡垒与欧洲最后的麻风病隔离岛 - 最佳欧洲景点',
  description: '船离埃隆达港，蔚蓝的爱琴海平滑如绸，但当斯皮纳隆加岛那赭石色的轮廓从海平面升起时，空气里的度假氛围悄然转变。那不像一个岛，更像一块被巨人生生按进海里的、布满棱角的巨大骨骼。威尼斯堡垒的锯齿状墙垣在烈日下泛着白光，沉默、坚硬，与周围温柔的蓝形成触目惊心的对比。海风吹来的，不再是沙滩防晒霜的甜腻，而是一...',
}

export default function SpinalongaIslandCretePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '斯皮纳隆加岛', href: '/attractions/spinalonga-island-crete' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`斯皮纳隆加岛・Spinalonga・希腊・克里特岛`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`船离埃隆达港，蔚蓝的爱琴海平滑如绸，但当斯皮纳隆加岛那赭石色的轮廓从海平面升起时，空气里的度假氛围悄然转变。那不像一个岛，更像一块被巨人生生按进海里的、布满棱角的巨大骨骼。威尼斯堡垒的锯齿状墙垣在烈日下泛着白光，沉默、坚硬，与周围温柔的蓝形成触目惊心的对比。海风吹来的，不再是沙滩防晒霜的甜腻，而是一股干燥的、混合着灼热岩石、野生草药和遥远年代尘埃的气味。
小船“突突”地驶入那道窄得惊人的石砌水道——这是威尼斯人设计的唯一入口。仰头望去，拱门上的圣马可飞狮浮雕虽已斑驳，仍散发着不容置疑的威严。踏上码头石板的那一刻，世界突然静了。不是安宁的静，是一种被高墙吸收、被历史压实的寂静。你能听见自己的脚步声，听见蜥蜴快速掠过石缝的窸窣，听见风声在无数空窗洞中穿梭的呜咽。这里没有咖啡馆，没有纪念品商店，只有肆无忌惮的阳光和无处不在的废墟。
然而，如果你放慢脚步，细看那些被遗弃的角落，会“听”到另一种声音。在主堡垒下方的“土耳其街区”，那些奥斯曼时期留下的无顶房屋里，野生的仙人掌和鲜艳的红色罂粟花从地板缝中蓬勃而出，像是生命自己举办的庆典。在二十世纪麻风病患者居住的白色小屋墙上，也许还残留着一抹手绘的蓝色，那是希腊人驱邪祈福的“邪眼”颜色。这些微弱的痕迹，低声诉说着即便在最严酷的隔离中，人们如何固执地经营着“生活”，而不仅仅是“生存”。
这座岛最核心的魅力，正在于这种极致的矛盾与张力。它是军事强权的冰冷象征，却最终成为了社会边缘人抱团取暖的脆弱家园。它的风景壮丽得令人心碎——360度无垠海景，遥望克里特岛富饶的平原和雪山。但你知道，对于曾经住在这里的人而言，这美景是世界上最残酷的囚笼边界。行走其中，你不仅是在参观遗址，更是在丈量恐惧与勇气、抛弃与团结、绝望与希望之间，那薄如蝉翼却又坚韧如钢的距离。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`船离埃隆达港，蔚蓝的爱琴海平滑如绸，但当斯皮纳隆加岛那赭石色的轮廓从海平面升起时，空气里的度假氛围悄然转变。那不像一个岛，更像一块被巨人生生按进海里的、布满棱角的巨大骨骼。威尼斯堡垒的锯齿状墙垣在烈日下泛着白光，沉默、坚硬，与周围温柔的蓝形成触目惊心的对比。海风吹来的，不再是沙滩防晒霜的甜腻，而是一股干燥的、混合着灼热岩石、野生草药和遥远年代尘埃的气味。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小船“突突”地驶入那道窄得惊人的石砌水道——这是威尼斯人设计的唯一入口。仰头望去，拱门上的圣马可飞狮浮雕虽已斑驳，仍散发着不容置疑的威严。踏上码头石板的那一刻，世界突然静了。不是安宁的静，是一种被高墙吸收、被历史压实的寂静。你能听见自己的脚步声，听见蜥蜴快速掠过石缝的窸窣，听见风声在无数空窗洞中穿梭的呜咽。这里没有咖啡馆，没有纪念品商店，只有肆无忌惮的阳光和无处不在的废墟。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，如果你放慢脚步，细看那些被遗弃的角落，会“听”到另一种声音。在主堡垒下方的“土耳其街区”，那些奥斯曼时期留下的无顶房屋里，野生的仙人掌和鲜艳的红色罂粟花从地板缝中蓬勃而出，像是生命自己举办的庆典。在二十世纪麻风病患者居住的白色小屋墙上，也许还残留着一抹手绘的蓝色，那是希腊人驱邪祈福的“邪眼”颜色。这些微弱的痕迹，低声诉说着即便在最严酷的隔离中，人们如何固执地经营着“生活”，而不仅仅是“生存”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座岛最核心的魅力，正在于这种极致的矛盾与张力。它是军事强权的冰冷象征，却最终成为了社会边缘人抱团取暖的脆弱家园。它的风景壮丽得令人心碎——360度无垠海景，遥望克里特岛富饶的平原和雪山。但你知道，对于曾经住在这里的人而言，这美景是世界上最残酷的囚笼边界。行走其中，你不仅是在参观遗址，更是在丈量恐惧与勇气、抛弃与团结、绝望与希望之间，那薄如蝉翼却又坚韧如钢的距离。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`斯皮纳隆加岛`} />
                <InfoRow label="英文名称" value={`Spinalonga`} />
                <InfoRow label="正式名称" value={`Spinalonga Island`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`克里特岛`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座见证了威尼斯共和国海上霸权、奥斯曼帝国占领以及二十世纪人类苦难与尊严的微型孤岛。`} />
                <InfoRow label="建筑特色" value={`融合了威尼斯军事工程的冷峻几何与奥斯曼时期生活建筑的朴素实用，在荒芜中形成强烈的视觉对话。`} />
                <InfoRow label="建筑风格" value={`以威尼斯堡垒风格为主导，混合了后期奥斯曼及简单的现代功能性建筑。`} />
                <InfoRow label="文化价值" value={`它是欧洲历史上运作时间最长的麻风病隔离区之一，其故事是关于排斥、社群、生存韧性的沉重人类学样本。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`夏季（4月1日至10月31日）每日上午8:30至日落前1小时（约晚上7点）；冬季（11月1日至3月31日）每日上午8:30至下午3:00。开放时间可能因天气状况（尤其是风浪）临时调整，渡船公司会同步通知。节假日（如东正教复活节）开放时间可能缩短，建议出行前务必查阅官方网站。`} />
              <InfoRow label="门票价格" value={`成人票：8欧元；优惠票（65岁以上欧盟公民、非欧盟学生持有效证件）：4欧元；18岁以下及欧盟学生（持有效证件）免费。门票在岛上入口处购买，只收现金（欧元）。持有希腊考古遗址通票可免费进入。`} />
              <InfoRow label="地址" value={`Spinalonga Island, Kalydon, 720 52, Greece`} />
              <InfoRow label="交通方式" value={`从克里特岛首府伊拉克利翁出发，最便捷的方式是先乘车前往东北海岸的埃隆达或普拉卡小镇。从伊拉克利翁公交车站乘坐前往埃隆达的KTEL长途巴士，车程约1.5小时，票价约7欧元。抵达埃隆达后，步行至港口，多家渡轮公司运营前往斯皮纳隆加岛的航线，船程约20-25分钟。旺季（5-9月）班次密集，几乎每小时一班；淡季班次减少，通常每天2-4班。也可以从附近的普拉卡小镇搭乘小船，航程更短（约10分钟）。建议提前一天在埃隆达港口确认次日船班时间并购票，往返船票价格约10-12欧元。自驾可将车停在埃隆达或普拉卡的收费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`斯皮纳隆加的故事，始于海洋的恐惧。克里特岛落入奥斯曼帝国之手后，威尼斯共和国需要牢牢守住伊拉克利翁这座最后的重要堡垒。为了控制米拉贝洛湾的航道，防止奥斯曼舰队包抄，他们在1579年决定在这座原本无人居住的狭小岩石岛上，建造一个坚固的前哨。威尼斯最好的军事工程师们倾注心血，设计了近乎完美的防御体系：厚重的同心圆城墙，精心计算的火炮射击角度，以及那条故意修得蜿蜒、狭窄、便于防守的水道入口。当最后一块石头砌好，这只石狮子便蹲伏在海中，警惕地守护着威尼斯在地中海的商业血脉。近一个世纪里，它成功地完成了使命，直到1669年，整个克里特岛沦陷，它是该地区最后一个投降的威尼斯据点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`奥斯曼帝国接管后，斯皮纳隆加的角色变了。战略价值仍在，但火药味淡了下去。穆斯林家庭和士兵开始住在岛上，他们在威尼斯堡垒的下方，建起了自己的住宅、商铺甚至清真寺，形成了所谓的“土耳其街区”。岛上有了市井生活的气息，但高墙依然存在。转折点发生在1898年，克里特岛获得自治，奥斯曼人逐渐撤离。斯皮纳隆加再次被“清空”，但这次，等待它的不是新的军队，而是一个让所有人闻之色变的词：麻风病。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1903年，一项冷酷的决定，彻底改写了小岛的灵魂。克里特岛政府决定将这里设立为麻风病隔离区。第一批病人被小船送来，踏上这片土地时，他们知道自己再也回不去了。起初，这里是人间地狱。病人被简单地抛弃于此，缺医少药，物资匮乏，只能住在废墟和临时窝棚里，自生自灭。然而，人性的光辉在最黑暗处反而愈发耀眼。二十世纪三十年代，一位名叫埃帕米农达斯·雷姆祖纳基斯的年轻医生自愿上岛。他不仅带来了现代医学的曙光，更点燃了病人心中自治与尊严的火种。在他的鼓励和实际管理下，病人们选举了自己的委员会，制定了法律，开设了公共食堂、理发店、咖啡馆、电影院，甚至举办婚礼，生下健康的孩子（孩子会被立即送出岛）。他们用双手清理废墟，粉刷房屋，在岩石缝中开辟出小菜园。斯皮纳隆加，从一个被诅咒的等死之地，变成了一个运转有序、充满互助精神的独特微型社会。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1957年，随着有效药物的普及，隔离政策解除，最后一批居民离开了岛屿。他们中的许多人，竟对这座囚禁了他们半生的岛屿产生了深深的眷恋，因为这里是他们唯一被当作“人”来对待和尊重的地方。人去岛空，大自然迅速收回了领地。直到近几十年，它的历史才被重新挖掘，尤其是通过维多利亚·希斯洛普的小说《岛》的畅销，这段尘封的往事才得以在全球读者心中激起巨大回响。今天，渡船每日载着好奇的游客到来，喧闹声暂时打破寂静。但当日落时分，最后一班船离港，斯皮纳隆加又会沉入它永恒的孤独与沉思之中，继续守着大海，守着那些关于恐惧、偏见、以及人类精神无法摧毁的韧性的，沉默的故事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议乘坐早上第一班或第二班渡船（通常9点左右）上岛，此时光线柔和，游客相对较少，能享受岛屿最宁静肃穆的氛围。整体游览需要约3-4小时，节奏宜慢不宜快。这是一次沉重的心灵之旅，需要时间消化感受。路线设计为逆时针环形，从震撼的入口开始，先领略威尼斯军事工程的威严，再下沉到奥斯曼生活区感受时间层次，最后重点探访麻风病隔离时期的社区遗址，并在北岸壮丽的海景前获得片刻喘息与反思。请务必穿坚固耐磨的徒步鞋，石板路崎岖且多碎石，并携带足量的饮用水，岛上没有任何售卖点。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`绝对不要为了“探险”而进入任何标有“危险”或结构明显不稳的建筑物内部，安全第一。岛上毫无遮阴，中午阳光极其暴烈，务必戴帽子、涂高倍数防晒霜，并携带比你以为所需更多的水。保持肃静的尊重，特别是在居住区遗址和教堂附近，避免大声喧哗或不合时宜的摆拍。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从震撼人心的威尼斯水道拱门入口进入，触摸那冰冷斑驳的石壁，感受军事要塞的压迫感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主堡垒的城墙斜坡向上攀登，在制高点的炮位旁停下，俯瞰360度环绕的绝美海景与克里特岛海岸线。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下行探索“土耳其街区”的废墟迷宫，在坍塌的房屋与野生花卉交织的景色中，想象奥斯曼时期的岛民生活。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进麻风病隔离时期重建的白色小屋社区，留意那些残存的彩色门框、灶台和公共水龙头，尝试感受当年居民在此建立秩序的努力。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找并参观岛上的小教堂，这里是当年居民最重要的精神慰藉之所，内部简朴却充满力量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着北岸的小径行走，这里是岛上最开阔宁静之处，面对无垠的蓝色爱琴海，思考“自由”与“禁锢”的相对意义。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在返程前，静静地坐在旧码头边的石阶上，回望整个岛屿的轮廓，让所有的历史层次与复杂情感在心中沉淀。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`威尼斯水道上船尾回望机位`}</h4>
                  <p className="text-sm text-gray-700">{`乘船离开时，站在船尾，用长焦镜头压缩空间，拍摄小船正驶出狭窄水道、前方海天开阔、后方堡垒森严的经典构图，最佳时间是上午侧光时。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主堡垒西侧城墙缺口`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，阳光将石墙照成金黄，从这个缺口框架式构图，可以将远处的克里特岛山脉和海岸村庄纳入画中，形成历史与现在、荒芜与生机的对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`麻风病社区白色小巷`}</h4>
                  <p className="text-sm text-gray-700">{`选择一条两侧白墙的小巷，在正午阳光直射时拍摄，强烈的光影对比能突出墙壁的纹理和空间的纵深感，画面简洁而富有情绪。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`北岸岩石海角全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时前往岛屿最北端的岩石上，广角镜头可以捕捉到人物剪影、嶙峋的前景岩石、以及被夕阳染成金红色的整个米拉贝洛湾，气势磅礴。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`旧码头仰拍堡垒`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚低角度仰拍码头石阶与上方巍峨的威尼斯堡垒墙体，利用石阶的引导线，凸显建筑的宏伟与压迫感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`建议携带偏振镜，可以有效削减地中海强烈光照下的岩石和海面反光，让天空更蓝，历史痕迹的细节更突出。拍摄居住遗址内部时，请格外谨慎，避免拍摄可能被视为对逝者不敬的细节（如残破的私人用品），重在捕捉空间氛围而非猎奇。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`悠闲港湾之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在埃隆达海滨的家族式小酒店，开窗就是停满桅杆的港口，早晨在阳台看着渡轮出发，晚上在码头海鲜馆品尝当天渔获，融入小镇慵懒节奏。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`田园诗意栖居`}</h4>
                  <p className="text-sm text-green-800">{`选择普拉卡村庄高处由传统石屋改造的民宿，房间带一个种满九重葛的露台，能直接眺望斯皮纳隆加岛的全景，在寂静的夜里感受它与大陆的默默对视。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计感沉浸体验`}</h4>
                  <p className="text-sm text-yellow-800">{`入住埃隆达附近一家由旧橄榄油工厂改造的精品酒店，粗粝的岩石墙面与现代设计结合，酒店图书馆有许多关于该岛历史的书籍，助你深度理解所见所闻。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`无忧度假模式`}</h4>
                  <p className="text-sm text-purple-800">{`如果希望游览后彻底放松，可以选择埃隆达以东几公里处、拥有私人沙滩的大型度假村，将沉重历史与阳光沙滩的舒缓体验分开，平衡旅程的心绪。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（7-8月）埃隆达和普拉卡的住宿非常紧俏，价格也最高，务必提前数月预订。春季（5-6月）和秋季（9-10月）是最理想的旅行时间，天气温和，游客较少。这两个小镇治安良好，夜晚漫步非常安全。选择住在能看到岛的房间，那份日夜相对的视觉联系，会极大加深你的旅行体验。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开斯皮纳隆加时，我的背包里仿佛没有增加任何东西，心里却感到沉甸甸的。这种“重”，不是疲惫，而是一种被历史真实触碰后的充实。它不像那些仅供赞叹的伟大古迹，它是一个需要你动用同理心去倾听的场所。你会记得石头的冷，阳光的烫，海风的咸，更会记得在断壁残垣间想象出的那些面孔——威尼斯士兵的警惕，奥斯曼商人的叫卖，以及麻风病患者在夕阳下相依的背影。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、崇尚连接的世界里，斯皮纳隆加像一面冷酷又温柔的镜子。它照见了人类社会曾经基于恐惧的隔离是何等坚固与决绝，但更照见了在绝境中，社群纽带和个体尊严所能迸发出的不可思议的力量。它提醒我们，真正的边界往往不是有形的墙，而是心中的偏见；而最深刻的自由，有时恰恰诞生于最不自由的物理禁锢之内。每一位热爱深度游的旅人，都该来此站一站。不是为了收集一个猎奇的景点，而是为了让自己慢下来，在壮阔的风景与沉重的往事之间，完成一次关于生命韧性、人类同理心与历史复杂性的，无声而深刻的对话。这趟旅程结束后，你眼中的蔚蓝爱琴海，将不再只是明信片上的风景，它会承载一段灰白色的记忆，让你对“活着”本身，多一份沉静的敬畏。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/nea-moni-of-chios" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    希
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">希俄斯新修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Nea Moni of Chios</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ancient-city-of-acheron" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿切伦扎古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ancient City of Acheron</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/epidaurus-theatre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃皮达鲁斯古剧场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Epidaurus Theatre</p>
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
