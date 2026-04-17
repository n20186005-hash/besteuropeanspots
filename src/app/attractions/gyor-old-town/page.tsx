import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '杰尔古城 Győr｜在多瑙河与拉包河交汇处，探秘“铁幕雕塑”与巴洛克珍宝 - 最佳欧洲景点',
  description: '如果你从布达佩斯坐上火车，一个多小时后就跳进了另一个全然不同的匈牙利，那多半就是杰尔了。走出火车站，穿过几条平平无奇的现代街道，一个拐弯，仿佛不小心撞开了时空的幕布——脚下忽然变成了被岁月磨得温润发亮的鹅卵石，两侧是糖霜般细腻的粉色、鹅黄色巴洛克立面，阳台上垂下瀑布般的天竺葵。空气里有刚出炉的kür...',
}

export default function GyorOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '杰尔古城', href: '/attractions/gyor-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`杰尔古城・Győr・匈牙利・杰尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`如果你从布达佩斯坐上火车，一个多小时后就跳进了另一个全然不同的匈牙利，那多半就是杰尔了。走出火车站，穿过几条平平无奇的现代街道，一个拐弯，仿佛不小心撞开了时空的幕布——脚下忽然变成了被岁月磨得温润发亮的鹅卵石，两侧是糖霜般细腻的粉色、鹅黄色巴洛克立面，阳台上垂下瀑布般的天竺葵。空气里有刚出炉的kürtőskalács（烟囱卷）的肉桂甜香，混着从老咖啡馆飘出的深烘咖啡豆的醇苦。你的第一印象不会是“雄伟”或“震撼”，而是一种亲昵的、被温柔包裹的精致感。这里不是仅供瞻仰的遗址，而是当地人鲜活的生活剧场。戴着贝雷帽的老先生坐在长椅上喂鸽子，主妇们拎着篮子从集市回来，年轻人在广场的喷泉边约会。古城的心脏——塞切尼广场，就像社区的客厅，充满了琐碎而温暖的市声。
但杰尔最打动人心的魅力，藏在那些不经意的转角。它有一个俏皮的绰号：“铁幕雕塑之城”。别只盯着宏伟的建筑看，低下头，放慢脚步。你可能会在墙角发现一个正努力推开砖块、想要钻出来的小铁人；或者在路灯柱上，找到一只悠闲悬挂着的金属松鼠。这些由本地艺术家创作的微型雕塑，像散落在城市各处的幽默密码，等待着旅人去破解。这种将沉重历史（“铁幕”时代）转化为轻盈艺术玩笑的智慧，正是杰尔精神的缩影：它历经沧桑，却始终保持着一种优雅的乐观与创造力。
在多瑙河与拉包河的交汇处，杰尔的故事被水流轻声讲述。你可以坐在河畔的咖啡馆，看古老的货运驳船缓缓驶过，背景是主教座堂巍峨的双塔。这里有一种奇妙的层次感：古罗马军营的基石埋在最深处，其上叠加着中世纪城墙的残段，再覆盖上巴洛克的华丽外衣，最后被当代艺术的灵光轻轻点缀。它不像许多被“博物馆化”的老城那样疏离，而是呼吸着、生长着，让你觉得，自己不仅可以参观，甚至可以属于这里一会儿。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果你从布达佩斯坐上火车，一个多小时后就跳进了另一个全然不同的匈牙利，那多半就是杰尔了。走出火车站，穿过几条平平无奇的现代街道，一个拐弯，仿佛不小心撞开了时空的幕布——脚下忽然变成了被岁月磨得温润发亮的鹅卵石，两侧是糖霜般细腻的粉色、鹅黄色巴洛克立面，阳台上垂下瀑布般的天竺葵。空气里有刚出炉的kürtőskalács（烟囱卷）的肉桂甜香，混着从老咖啡馆飘出的深烘咖啡豆的醇苦。你的第一印象不会是“雄伟”或“震撼”，而是一种亲昵的、被温柔包裹的精致感。这里不是仅供瞻仰的遗址，而是当地人鲜活的生活剧场。戴着贝雷帽的老先生坐在长椅上喂鸽子，主妇们拎着篮子从集市回来，年轻人在广场的喷泉边约会。古城的心脏——塞切尼广场，就像社区的客厅，充满了琐碎而温暖的市声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但杰尔最打动人心的魅力，藏在那些不经意的转角。它有一个俏皮的绰号：“铁幕雕塑之城”。别只盯着宏伟的建筑看，低下头，放慢脚步。你可能会在墙角发现一个正努力推开砖块、想要钻出来的小铁人；或者在路灯柱上，找到一只悠闲悬挂着的金属松鼠。这些由本地艺术家创作的微型雕塑，像散落在城市各处的幽默密码，等待着旅人去破解。这种将沉重历史（“铁幕”时代）转化为轻盈艺术玩笑的智慧，正是杰尔精神的缩影：它历经沧桑，却始终保持着一种优雅的乐观与创造力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在多瑙河与拉包河的交汇处，杰尔的故事被水流轻声讲述。你可以坐在河畔的咖啡馆，看古老的货运驳船缓缓驶过，背景是主教座堂巍峨的双塔。这里有一种奇妙的层次感：古罗马军营的基石埋在最深处，其上叠加着中世纪城墙的残段，再覆盖上巴洛克的华丽外衣，最后被当代艺术的灵光轻轻点缀。它不像许多被“博物馆化”的老城那样疏离，而是呼吸着、生长着，让你觉得，自己不仅可以参观，甚至可以属于这里一会儿。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`杰尔古城`} />
                <InfoRow label="英文名称" value={`Győr`} />
                <InfoRow label="正式名称" value={`Győr Historical Town Centre`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`杰尔`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`匈牙利西北部无可争议的历史、文化与宗教中心，一座在古罗马废墟上兴起、历经奥斯曼战火洗礼并最终在巴洛克时代绽放的“多瑙河畔明珠”。`} />
                <InfoRow label="建筑特色" value={`令人目不暇接的巴洛克建筑立面、蜿蜒隐秘的中世纪小巷、以及点缀在城市各个角落、充满现代趣味的“铁幕雕塑”艺术装置。`} />
                <InfoRow label="建筑风格" value={`以辉煌的巴洛克风格为主体，巧妙融合了中世纪哥特式遗迹、新古典主义装饰以及20世纪初的新艺术运动元素。`} />
                <InfoRow label="文化价值" value={`一座活着的城市博物馆，生动体现了中欧地区天主教传统、奥斯曼影响与当代都市艺术生命力的奇妙共生。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城街道及公共广场全天24小时开放。内部主要景点（如主教座堂、博物馆等）开放时间各异：主教座堂通常在每日上午8点至傍晚6点开放；杰尔主教城堡博物馆周二至周日上午10点至下午6点开放，周一闭馆；其他小型博物馆和画廊开放时间较为灵活，建议出行前在官网二次确认。多数室内景点在冬季（11月至次年3月）可能会提前一小时关闭。`} />
              <InfoRow label="门票价格" value={`漫步杰尔古城街区本身完全免费。进入各博物馆和展览需购票：主教城堡博物馆成人票约为2200匈牙利福林（约6欧元），学生及老人享有折扣。部分教堂内的珍宝室或塔楼参观可能收取少量费用（约500-1000福林）。建议购买“杰尔城市卡”，可在指定时间内无限次进入主要博物馆并享受公共交通优惠。`} />
              <InfoRow label="地址" value={`Széchenyi tér 1, 9021 Győr, Hungary`} />
              <InfoRow label="交通方式" value={`从布达佩斯出发最为便捷。火车：从布达佩斯东站或西站乘坐火车直达杰尔，车程约1小时15分钟至1.5小时，班次频繁（几乎每小时都有），可在匈牙利国铁官网购票。汽车：布达佩斯 Népliget 汽车站也有班车前往，车程相似。自驾：沿M1高速公路向西行驶约120公里，出口有明显的“Győr”标识。抵达杰尔后，火车站和汽车站步行至古城核心区仅需10-15分钟，古城内所有景点均可轻松步行到达。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要听懂杰尔的故事，得把时钟拨回两千年前。那时候，这里不叫杰尔，而是罗马帝国潘诺尼亚行省的一个重要据点，名叫“阿拉伯娜”。驻扎在此的罗马士兵守卫着帝国东北边境，他们修建了规整的营地和道路，那些深埋地下的石头地基，至今仍是古城看不见的骨骼。罗马帝国衰落后，马扎尔人部落来到这里，看到了拉包河与多瑙河交汇处的战略价值，在此定居，并赋予了它新的名字“Győr”。十一世纪，匈牙利第一位国王圣伊什特万在此设立了主教区，这一定位决定了杰尔未来千年的命运——它成了王国西北部坚固的信仰堡垒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`中世纪的杰尔在繁荣与劫难中摇摆。它凭借着河运贸易变得富庶，修建起了坚固的城墙和高耸的哥特式教堂。但它的地理位置也带来了无尽的麻烦，尤其是当奥斯曼帝国的大军如潮水般西进时。十六至十七世纪，杰尔成了抵抗土耳其人的前沿阵地，惨烈的围城战反复上演。最黑暗的时刻，城市几乎被夷为平地，主教座堂被改建为清真寺，又在收复后被重新祝圣。这段血与火的岁月，在城市的肌理上留下了难以磨灭的伤痕，也锻造了居民钢铁般的韧性。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战争的硝烟散去后，杰尔迎来了它的黄金时代——巴洛克时期。十八世纪，在哈布斯堡王朝的统治下，城市开始了一场宏大的“美容手术”。那些在战火中损毁的中世纪房屋被推倒，取而代之的是我们今天看到的、华丽而整齐的巴洛克和洛可可式宅邸。主教城堡被重建得巍峨壮观，广场和街道被重新规划。当时的权贵和富商们争相聘请最好的建筑师和艺术家，用繁复的灰泥装饰、壁画和雕塑来装点自己的门面，仿佛要用极致的美丽来忘却过去的创伤。这场建设热潮塑造了杰尔古城今天的基本风貌，那种统一而精致的优雅，正是这个时代留下的最慷慨的礼物。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`十九世纪的工业革命让杰尔再次转型。铁路通了，工厂建起来了，它成了奥匈帝国重要的工业中心。新的阶层带来了新艺术运动的风潮，你可以在一些建筑的铁艺栏杆和门楣装饰上找到那些流畅的植物曲线。然而，二十世纪的风云变幻——两次世界大战、“铁幕”的落下——又一次让杰尔沉寂。在计划经济时代，它像许多东欧城市一样，显得有些灰暗和停滞。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但故事的精彩之处在于它的重生。上世纪九十年代后，杰尔人没有选择将老城变成冰冷的古董，而是启动了一场精心又充满想象力的修复。他们不仅修缮了每一栋巴洛克立面，更发起了那项著名的“铁幕雕塑”公共艺术计划。艺术家们用幽默、小巧的金属雕塑，调侃过去的沉重，为古城的每个角落注入惊喜。这个举动巧妙至极：它既尊重了历史层积的庄严，又为城市注入了当代的脉搏。于是，杰尔从一座沉睡的历史名城，变成了一个懂得自嘲、充满生命力的文化磁石。它的历史，是一部典型的中欧史诗，充满了破坏与重建、泪水与欢笑，而最终，它以一种无比迷人的融合姿态，站在了多瑙河畔。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要给杰尔古城一次完美的深度探索，我强烈建议你留出完整的一天，并从清晨开始。早上九点前抵达塞切尼广场，这时游客还未涌入，阳光斜射在巴洛克立面上，投下长长的影子，是拍照和感受宁静老城氛围的黄金时间。整体游览节奏应该是“慢品”而非“赶路”，因为杰尔的精华往往藏在细节里。路线设计上，我会以塞切尼广场为心脏，先向高处（主教座堂与城堡）探索精神和历史维度，再向低处（河畔与隐秘小巷）感受生活与艺术气息，形成一个完美的回环。这样大约需要5-7小时，包括轻松的午餐和咖啡时间。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`寻找“铁幕雕塑”时请务必放慢脚步并留意脚下和墙面上方，很多作品小巧隐蔽，匆匆而过极易错过。古城内咖啡馆和餐厅价格合理，不必特意寻找攻略推荐，随便一家本地人多的都不会差。周末的集市日（尤其周六上午）广场会很热闹，喜欢市井气息的可以此时来，追求清净的则最好避开。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在塞切尼广场中央的“圣母柱”下驻足，仰望顶端金光闪闪的雕像，感受清晨阳光如何一点点点亮周围糖果色的建筑立面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进广场东侧的圣伊格纳茨耶稣会教堂，让眼睛适应内部的昏暗，然后被那炫目得令人窒息的巴洛克式天顶壁画彻底震撼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着Bécsi kapu街向北，踏上通往主教座堂山丘的古老石阶，触摸沿途中世纪城墙粗糙而冰凉的巨石。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在杰尔主教座堂宏伟的主祭坛前，静心欣赏那尊被誉为匈牙利哥特艺术瑰宝的“圣拉迪斯拉斯圣物箱”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主教城堡博物馆的露台窗口向外眺望，将红瓦黄墙的老城屋顶、蜿蜒的河流与远方的工业烟囱尽收眼底，读懂这座城市的历史层理。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在卡尔梅里塔广场附近的小巷里开启一场“寻宝游戏”，弯腰寻找墙根、窗台和灯柱上那些充满趣味的微型“铁幕雕塑”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着拉包河畔的步行道慢慢散步，看天鹅游弋，选一家有户外座位的咖啡馆，点一杯咖啡，看着对岸巴洛克建筑的倒影在水中荡漾。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`钻进主教堂南侧那些迷宫般的狭窄中世纪小巷，比如阿波罗街，感受两边高墙夹峙的静谧，想象几个世纪前这里居民的生活。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`塞切尼广场东南角建筑阴影处`}</h4>
                  <p className="text-sm text-gray-700">{`清晨八点左右，利用长焦镜头压缩广场空间，将前景的咖啡馆桌椅、中景的圣母柱与背景色彩斑斓的巴洛克建筑立面一同纳入构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主教座堂内部侧廊立柱旁`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点后，当阳光透过高侧窗射入，站在侧廊利用立柱做框架，拍摄光束中飞舞的尘埃和祈祷的信徒，营造神圣静谧的氛围。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`卡尔梅里塔广场通往河边的拱门下`}</h4>
                  <p className="text-sm text-gray-700">{`下午四五点的侧光时分，站在拱门内向外拍，以拱门为画框，框住远处河对岸的建筑和流动的云彩，形成强烈的纵深感和明暗对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`拉包河对岸的步行桥中央`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，利用桥栏杆作为前景稳定相机，拍摄夕阳余晖将老城建筑群染成金红色的全景，水中倒影会让画面倍增魅力。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`阿波罗小巷的入口处`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射时虽硬，但能拍出小巷石路强烈的明暗纹理和两侧高墙的戏剧性对比，适合拍摄具有张力的人物街拍。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄教堂内部前务必确认是否允许使用闪光灯和三脚架，通常不允许，需提高感光度手持拍摄。拍摄当地居民尤其是集市上的摊主时，请先微笑示意获得默许，这是基本的尊重。匈牙利秋冬多雾，清晨的雾气笼罩古城屋顶时别沮丧，这正是拍摄梦幻、油画感画面的绝佳时机。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`位于古城边缘一栋十九世纪联排屋里的温馨家庭旅馆，房间不大却干净明亮，女主人会为你手绘一张标注了所有隐藏雕塑的老城地图。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`由一座十六世纪修道院部分建筑改造的精品酒店，保留了原始的拱顶石室和宁静的回廊庭院，早餐就在充满历史感的穹顶大厅享用。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在拉包河畔最醒目历史建筑内的五星级酒店，房间拥有挑高的彩绘天花和直面河流的落地窗，傍晚可以在露台酒吧享受专属的城市天际线。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`本地生活`}</h4>
                  <p className="text-sm text-purple-800">{`租住古城中心一栋巴洛克公寓楼顶层的短租公寓，拥有一个可以俯瞰层层叠叠红瓦屋顶的私人小露台，像当地人一样去楼下市场买菜做饭。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古城内以石板路为主，拖着大行李箱行走会非常吃力，预订时最好确认酒店是否提供接送或靠近可停车的地点。周末晚上古城广场周围的酒吧可能会有些热闹，浅眠者可以选择靠近主教座堂或河畔的相对安静区域。杰尔治安很好，夜间独行也完全不用担心，但冬季游览时最好预订带暖气或空调的住宿，有些老房子仅靠暖气片。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开杰尔很久以后，我发现自己最常回味的，不是某座具体建筑的照片，而是那种混合着咖啡香、肉桂甜和古老石头气味的氛围，是那种在庄严历史与轻松生活之间自由穿梭的奇妙感受。在这个时代，我们见过太多被精心包装、却失去了心跳的历史名城，它们像玻璃罩下的标本，完美却冰冷。杰尔则完全不同，它是一座敢于把历史的伤疤转化为幽默艺术，把信仰的庄严与市井的烟火气和谐共置一城的所在。它告诉你，文化遗产的传承，不仅可以靠敬畏，还可以靠热爱与创意。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这或许就是杰尔给每一位深度旅人的礼物：它让我们重新思考“旅行”的意义。旅行不止是为了收集打卡地标，更是为了去感受一个地方如何在与岁月的对话中，形成自己独特的性格与表情。杰尔，这座多瑙河畔的“活着的古城”，用它层叠的历史、艺术的巧思和温暖的生活气息，邀请你成为它当下故事的一部分。在这里，你会放下追逐景点的焦虑，心甘情愿地“浪费”时间，在某个不知名的墙角发现一个微笑的铁皮小人，然后带着这个秘密的微笑继续前行。这样的地方，值得你专程为它留出一段时光，来经历一场小而美的、充满惊喜的时间漫游。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kalocsa" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    考
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">考洛乔老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kalocsa</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/esztergom-basilica" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃斯泰尔戈姆大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Esztergom Basilica</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/szentendre-artists-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣安德烈艺术小镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Szentendre Artists‘ Village</p>
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
