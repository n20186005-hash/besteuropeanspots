import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '巴德堡 Bard Fortress｜扼守奥斯塔山谷的岩石雄鹰 - 最佳欧洲景点',
  description: '车子穿过最后一个隧道，眼前豁然开朗，奥斯塔山谷像一幅被骤然展开的画卷。然后，你的呼吸会为之一滞——就在正前方，一座灰黄色的、宛如从大地骨骼里直接生长出来的巨型岩石山丘，死死扼住山谷最狭窄的咽喉。而在这块巨石的顶端与峭壁上，密密麻麻地嵌着、挂着、耸立着一系列棱角分明的堡垒建筑，像一头收拢了翅膀的岩石雄...',
}

export default function BardFortressPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '巴德堡', href: '/attractions/bard-fortress' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`巴德堡・Bard Fortress・意大利・巴德镇，瓦莱达奥斯塔区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子穿过最后一个隧道，眼前豁然开朗，奥斯塔山谷像一幅被骤然展开的画卷。然后，你的呼吸会为之一滞——就在正前方，一座灰黄色的、宛如从大地骨骼里直接生长出来的巨型岩石山丘，死死扼住山谷最狭窄的咽喉。而在这块巨石的顶端与峭壁上，密密麻麻地嵌着、挂着、耸立着一系列棱角分明的堡垒建筑，像一头收拢了翅膀的岩石雄鹰，用冰冷的视线俯瞰着脚下奔腾的多拉巴尔泰亚河与蜿蜒的公路。那种扑面而来的压迫感，不是华丽宫殿的炫目，而是一种纯粹、坚硬、毫不妥协的权力宣示。你会瞬间明白，为什么几千年来，每个想控制这条阿尔卑斯走廊的人，都必须要先征服或守住这里。
走进堡垒内部，又是另一番天地。穿过厚重得需要用力推开的橡木大门，一股混合着古老石头、陈旧木材和一丝丝地下潮气的特殊气味钻入鼻腔。阳光透过高处狭小的射击孔，在厚厚的墙壁上切出一道道锐利的光柱，灰尘在其中缓慢舞蹈。脚下的石板被无数军靴磨得中心凹陷、边缘光滑。寂静是这里最大的声音，但不是空洞的寂静，而是一种被墙壁吸收、沉淀了数百年的紧张的回声。你可以想象士兵在这里奔跑的脚步声、火炮移动的隆隆声、以及午夜哨兵孤独的咳嗽声。这里的每一块石头都不是为了美学而存在，它们只有一个目的：生存与阻止。
然而，今天的巴德堡早已卸下盔甲。你会发现，当地居民会悠闲地沿着通往堡垒的古道散步，父母带着孩子在曾经的炮台上野餐，年轻人则在改建后的咖啡馆露台上，对着险峻的山谷喝一杯意式浓缩。那个曾经让人望而生畏的“拦路虎”，如今成了小镇最骄傲的客厅背景和文化遗产中心。从绝对的防御者到包容的讲述者，这种转变本身就是它最核心的魅力——它不仅是一座关于战争的博物馆，更是一座关于“和平如何重新定义空间”的生动课堂。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子穿过最后一个隧道，眼前豁然开朗，奥斯塔山谷像一幅被骤然展开的画卷。然后，你的呼吸会为之一滞——就在正前方，一座灰黄色的、宛如从大地骨骼里直接生长出来的巨型岩石山丘，死死扼住山谷最狭窄的咽喉。而在这块巨石的顶端与峭壁上，密密麻麻地嵌着、挂着、耸立着一系列棱角分明的堡垒建筑，像一头收拢了翅膀的岩石雄鹰，用冰冷的视线俯瞰着脚下奔腾的多拉巴尔泰亚河与蜿蜒的公路。那种扑面而来的压迫感，不是华丽宫殿的炫目，而是一种纯粹、坚硬、毫不妥协的权力宣示。你会瞬间明白，为什么几千年来，每个想控制这条阿尔卑斯走廊的人，都必须要先征服或守住这里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进堡垒内部，又是另一番天地。穿过厚重得需要用力推开的橡木大门，一股混合着古老石头、陈旧木材和一丝丝地下潮气的特殊气味钻入鼻腔。阳光透过高处狭小的射击孔，在厚厚的墙壁上切出一道道锐利的光柱，灰尘在其中缓慢舞蹈。脚下的石板被无数军靴磨得中心凹陷、边缘光滑。寂静是这里最大的声音，但不是空洞的寂静，而是一种被墙壁吸收、沉淀了数百年的紧张的回声。你可以想象士兵在这里奔跑的脚步声、火炮移动的隆隆声、以及午夜哨兵孤独的咳嗽声。这里的每一块石头都不是为了美学而存在，它们只有一个目的：生存与阻止。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，今天的巴德堡早已卸下盔甲。你会发现，当地居民会悠闲地沿着通往堡垒的古道散步，父母带着孩子在曾经的炮台上野餐，年轻人则在改建后的咖啡馆露台上，对着险峻的山谷喝一杯意式浓缩。那个曾经让人望而生畏的“拦路虎”，如今成了小镇最骄傲的客厅背景和文化遗产中心。从绝对的防御者到包容的讲述者，这种转变本身就是它最核心的魅力——它不仅是一座关于战争的博物馆，更是一座关于“和平如何重新定义空间”的生动课堂。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`巴德堡`} />
                <InfoRow label="英文名称" value={`Bard Fortress`} />
                <InfoRow label="正式名称" value={`Forte di Bard`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`巴德镇，瓦莱达奥斯塔区`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`意大利阿尔卑斯山区保存最完好、最具代表性的19世纪军事防御工程典范。`} />
                <InfoRow label="建筑特色" value={`一座完全依山而建的三层防御体系，由多座独立堡垒和兵营组成，完美地嵌入并利用了巨大的天然岩石山丘。`} />
                <InfoRow label="建筑风格" value={`19世纪军事防御建筑与中世纪城堡元素的结合，呈现出冷峻、实用且极具威慑力的新古典主义军事风格。`} />
                <InfoRow label="文化价值" value={`从纯粹的军事要塞成功转型为集博物馆、展览和文化活动于一体的综合性文化地标，是“防御遗产”活化的典范。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`堡垒主体及博物馆开放时间：周二至周五 10:00-18:00，周末及节假日 10:00-19:00，周一闭馆（7月和8月除外，夏季每日开放）。最后入场时间均为闭馆前一小时。阿尔卑斯堡垒博物馆的开放时间可能略有不同，建议行前在官网核查。冬季（通常为11月至3月）部分外围区域或庭院可能缩短开放时间或仅周末开放。`} />
              <InfoRow label="门票价格" value={`堡垒区域及庭院免费进入。参观内部博物馆需购票：全价票10欧元，优惠票（学生、65岁以上老人）8欧元，6-18岁青少年5欧元，6岁以下儿童及残疾人免费。家庭票和包含临时展览的联票价格另计。购票建议通过官网提前预订，尤其在夏季和周末可避免排队。`} />
              <InfoRow label="地址" value={`Forte di Bard, 11020 Bard AO, Italy`} />
              <InfoRow label="交通方式" value={`最近的国际机场是意大利都灵的卡塞莱机场（TRN）或米兰马尔彭萨机场（MXP）。从都灵机场：乘坐火车至都灵波尔塔诺瓦站，换乘前往奥斯塔方向的火车，在韦雷斯站下车，转乘前往巴德的地区巴士（约10分钟车程），总耗时约2.5小时。从米兰机场：乘坐机场快线至米兰中央车站，转乘开往奥斯塔的火车（约2小时），同样在韦雷斯站下，转乘巴士。最方便的方式是自驾，从A5高速公路“韦雷斯”出口驶出，沿指示牌前往巴德镇，有大型停车场。火车是沉浸式体验山谷风光的好选择，但班次频率不高，建议提前在Trenitalia官网查好时刻表。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲巴德堡的故事，我们得把时钟拨回到罗马帝国时代，甚至更早。你脚下这块巨大的岩石，可不是随便长在这的。奥斯塔山谷是连接意大利半岛与欧洲腹地最关键的通道之一，而巴德所在的这个位置，恰好是山谷收束到最窄、河流湍急到最难逾越的“瓶颈”。早在罗马人之前，萨拉西人就在这里建立了前哨。公元前后，罗马皇帝奥古斯都为了征服阿尔卑斯山区的部落，修建了通往高卢的军事道路，这个天然关隘自然成了最重要的军事据点之一。可以说，从有人类文明在此活动开始，这块岩石的命运就和“控制”与“通行”死死绑在了一起。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间快进到中世纪，巴德的名字首次出现在1034年的文献上，归属于当地领主。一座坚实的城堡开始在山顶成型，成为周围山谷的权威象征。在接下来的几百年里，它像一枚珍贵的棋子，在萨沃伊家族、蒙费拉托侯爵以及其他地方豪强之间易手。每一次易主都伴随着围攻、谈判或联姻。它目睹了封建领主们的野心，也经历了相对和平的繁荣时期，成为征收过往商队关税的“收费站”。石头城堡一次次被加固、扩建，但它的基本角色从未改变：我是这里的主人，想过路，就得按我的规矩来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`改变一切的时刻发生在19世纪初，那个名叫拿破仑·波拿巴的科西嘉人横扫欧洲的年代。1800年5月，拿破仑率领四万大军，决心翻越阿尔卑斯山，出其不意地攻打意大利北部的奥地利军队。当他来到巴德堡前，这座由奥地利人占据的旧城堡成了他进军路线上唯一的，也是致命的绊脚石。当时堡内只有大约400名奥军士兵，但他们凭借天险，竟然顽强地阻挡了拿破仑大军整整两个星期！这场“巴德之阻”成了拿破仑军事生涯中一个尴尬的插曲。据说，愤怒的拿破仑在最终用大炮轰开城堡后，下令将其彻底拆毁，夷为平地，以免日后再次碍事。一代名堡，化为废墟。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但历史总是充满戏剧性。拿破仑帝国崩塌后，这片土地回到了萨沃伊王朝手中。鉴于巴德战略位置无可替代，王室决定在原址上建造一座前所未有的、符合新时代战争需求的超级要塞。于是，从1830年开始，一座完全由军事工程师设计的、宛如科幻小说里走出来的立体防御复合体诞生了。它不再是单纯的一座城堡，而是由三座主要堡垒（费迪南多堡、维多里奥堡和卡洛·阿尔贝托堡）组成的，高低错落、火力交叉、可以独立作战又能相互支援的战争机器。它代表了19世纪军事工程的巅峰，但也生不逢时——等它完全建成，战争的形式已经开始改变，它几乎从未经历真正的战火。此后的一个多世纪，它主要被用作军械库和监狱，渐渐被遗忘在群山之中。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到20世纪末，当地政府看到了这座庞然巨物沉睡的潜力。一场浩大的修复工程开启，目标不是将其恢复为冰冷的军事基地，而是赋予它全新的文化生命。2006年，全新的巴德堡文化中心向公众开放，内部设有精彩的阿尔卑斯博物馆、儿童博物馆和频繁举办高质量艺术展览的空间。当年阻挡千军万马的炮口，如今对准的是令人惊叹的山谷风光；曾经储存弹药的幽深洞穴，现在回荡着孩子们的欢笑和艺术讲座的余音。从刀剑到笔墨，从封锁到开放，巴德堡用自己厚重的身躯，完成了这个时代最动人的转身。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要充分感受巴德堡的层次与魅力，我强烈建议你安排一个完整的午后时光，大约4-5小时。为什么是午后？因为上午的光线更适合从山谷外远眺堡垒全景，而下午进入堡垒内部，阳光会逐渐变得柔和，透过窗户和射击孔的光影效果尤为迷人。游览节奏宜缓不宜急，这不是一个打卡点，而是一个需要你慢慢“阅读”的立体历史书。路线设计上，我们从外部宏观震撼开始，逐步深入堡垒内部的核心空间，最后登上制高点收获全景，完成一次由外至内、由下至上的完整探索。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必提前查询官网确认各博物馆的具体开放日期，避免遇到周一闭馆或临时布展的尴尬。堡垒内上下坡和楼梯很多，一定要穿一双绝对舒适防滑的鞋子。虽然主要区域有电梯连接，但探索各堡垒内部的通道仍需大量步行。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先从山脚的巴德小镇漫步而过，沿着古老的石阶小径向上，感受当年士兵和商队接近这座堡垒时那种仰望的压迫感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`乘坐嵌入山体的现代全景玻璃电梯（或选择步行隧道）直升而上，在急速上升中体验从“凡人”视角到“守卫者”视角的戏剧性转换。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`踏入位于中层的维多里奥堡主庭院，让眼睛适应这里开阔与封闭交织的空间感，并拜访游客中心获取一份详细的堡垒地图。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花至少一个小时沉浸在“阿尔卑斯博物馆”里，这里的展览巧妙地将堡垒军事史与整个阿尔卑斯山脉的自然人文史融为一体，模型和互动装置非常出色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着内部蜿蜒的通道和阶梯，探索那些幽深的炮台室、士兵营房和储存窖，用手触摸冰凉的石壁，想象一下几个世纪前在此驻守的单调与紧张。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要攀爬到最顶端的卡洛·阿尔贝托堡露台，在这里360度环视，将奥斯塔山谷的壮丽景色和脚下层层叠叠的堡垒屋顶一并收入眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落时分，回到中层平台的咖啡馆，点一杯本地的瓦莱达奥斯塔葡萄酒，看着夕阳将对面山峦和脚下堡垒的岩石染成金黄色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果有余力且开放，不要错过偶尔举办在古老兵营或地窖里的临时艺术展览，古典空间与当代艺术的碰撞往往能产生奇妙的火花。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`从连接小镇与堡垒的古老石拱桥（Ponte di Bard）上拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏时分，以桥体为前景，将雄踞于巨岩之上、被霞光照亮的整个堡垒建筑群作为背景，构图极具史诗感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`在费迪南多堡（低堡）的入口门洞内向内拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`站在门洞阴影里，对准被阳光照亮的内部庭院和远处的主楼，利用门洞形成天然画框，能拍出深邃的纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`卡洛·阿尔贝托堡（高堡）最西侧的城墙边缘`}</h4>
                  <p className="text-sm text-gray-700">{`下午稍晚的时候，将相机贴近古老的胸墙垛口，以粗糙的石块为前景焦点，将对岸山坡上的小镇、教堂和远山作为背景，层次丰富。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`堡垒内部任何一条狭长而高耸的走廊或楼梯间`}</h4>
                  <p className="text-sm text-gray-700">{`利用侧方射击孔射入的强烈光束，拍摄光束切割黑暗通道的光影对比，人物可以作为一个剪影点缀其中，故事感十足。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从堡垒对面高速公路服务区的观景平台远眺`}</h4>
                  <p className="text-sm text-gray-700">{`使用长焦镜头，在晴朗的白天可以压缩空间，拍出堡垒建筑密密麻麻、严丝合缝“长”在岩石上的那种令人窒息的压迫性结构美感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`堡垒内部博物馆展区通常禁止使用闪光灯和三脚架（如需商业拍摄需特别许可），请提前调整相机高感光度设置。拍摄外部全景时，清晨的光线最干净，能见度高；傍晚的光线则最温暖，富有戏剧性。航拍能获得震撼视角，但务必提前了解当地关于无人机飞行的严格规定，居民区和军事遗迹上空常有禁飞限制。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`巴德小镇中心由家族经营的“阿尔皮诺酒店”，房间虽小但干净温馨，推开木窗就能看见堡垒的侧影，早餐能尝到女主人自制的果酱和蛋糕。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`距离堡垒步行15分钟、位于安静山坡上的“石头之家”农庄民宿，由古老的石屋改造，保留着原木横梁和石砌壁炉，晚上可以围炉听主人讲山谷的古老传说。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`奥斯塔古城内一家由修道院改建的精品设计酒店，将极简现代风格与古老的拱廊、庭院完美结合，让你在体验堡垒的粗犷后，享受一场关于“静谧”的设计洗礼。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-purple-800">{`驱车半小时可达的库马约尔小镇上的五星级奢华酒店，坐拥勃朗峰的绝佳景致，配备顶级水疗中心，适合在一天的堡垒徒步探险后，彻底放松身心。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`瓦莱达奥斯塔地区是滑雪和徒步胜地，住宿价格在冬季滑雪季（12月-3月）和夏季徒步旺季（7月-8月）会大幅上涨且非常紧俏，务必提前数月预订。住在巴德小镇本身非常安静，夜间娱乐选择少，但能获得沉浸式的体验；若喜欢更多餐饮和夜生活选择，建议以奥斯塔市为中心，搭乘火车短途往返游览堡垒。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开巴德堡的时候，我的手指上似乎还留着那种触摸千年岩石的粗粝与冰凉。但很奇怪，这座以坚硬和防御为全部基因的建筑，最终留给我的却是一种奇特的柔软感。这种柔软，来自于看到孩子们在曾经的炮台上奔跑嬉戏，来自于当地老人在阳光下指着堡垒向孙辈讲述“拿破仑在这里吃过瘪”时眼中的光芒，也来自于它坦然地将自己最隐秘、最功能性的角落——那些弹药库、囚室、幽深通道——全部打开，变成陈列历史和艺术的展厅。它不再需要证明自己的力量，因为它已经完成了从“武力威慑”到“文化自信”的彻底蜕变。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、一切皆可快速穿越的时代，巴德堡像一座固执的时光纪念碑。它提醒我们，有些地方的存在，本身就是意义。它让你无法快速通过，迫使你停下来，仰望，思考权力与通道、封锁与开放、毁灭与重生的永恒命题。它不是一个被美化过的童话城堡，它有着战争机器的冷酷骨架，但这骨架如今支撑起的，却是对和平与文明的珍视。对于每一位热爱深度游的旅人而言，来到巴德堡，不仅仅是为了看一座宏伟的堡垒，更是为了参与一场跨越千年的对话，关于人类如何利用地理，又如何最终被地理塑造，并在历史的拐点上，学会给石头赋予全新的、充满希望的灵魂。这趟旅程，值得你专程为它绕一次路。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/narni-sotterranea" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    纳
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">纳尔尼古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Narni Sotterranea</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/modica-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莫迪卡老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Modica</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/the-ancient-city-of-acerenza" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿切伦扎古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">The Ancient City of Acerenza</p>
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
