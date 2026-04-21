import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '波尔沃老城 Porvoo Old Town｜童话般的芬兰木屋小镇与红色河岸仓库群 - 最佳欧洲景点',
  description: '车子转过最后一个弯道，那片在明信片上见过无数次的景象，毫无预兆地、完整地在你眼前铺开。第一眼波尔沃老城，就像有人不小心打翻了调色盘，把赭红、鹅黄、淡粉和天蓝全都泼洒在了郁郁葱葱的山坡与波光粼粼的河水之间。那些歪歪扭扭挤在一起的小木屋，屋顶陡峭，白窗框勾勒得格外分明，仿佛一群穿着鲜艳衣服、正凑在一起窃...',
}

export default function PorvooOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '芬兰', href: '/destinations/finland' },
            { label: '波尔沃老城', href: '/attractions/porvoo-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`波尔沃老城・Porvoo Old Town・芬兰・波尔沃`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子转过最后一个弯道，那片在明信片上见过无数次的景象，毫无预兆地、完整地在你眼前铺开。第一眼波尔沃老城，就像有人不小心打翻了调色盘，把赭红、鹅黄、淡粉和天蓝全都泼洒在了郁郁葱葱的山坡与波光粼粼的河水之间。那些歪歪扭扭挤在一起的小木屋，屋顶陡峭，白窗框勾勒得格外分明，仿佛一群穿着鲜艳衣服、正凑在一起窃窃私语的童话人物。空气里有一股独特的、属于北国的味道——是刚被雨水打湿的鹅卵石路面散发出的清冽土腥气，混合着从某扇半掩门扉里飘出的、新鲜烘焙肉桂卷的暖甜香气。
你顺着缓坡往下走，脚下的石板路被几个世纪的脚步打磨得温润光滑。老城不是一座冷冰冰的博物馆，它活生生地跳动着。耳边传来的是日常的交响：隔壁画室门铃的清脆叮咚，咖啡馆露台上瓷杯轻轻碰撞的声响，远处教堂沉稳的钟声，以及几乎被忽略的、风掠过河面与树叶的沙沙声。当地人不紧不慢地从你身边走过，手里或许拎着一篮刚买的浆果，或牵着一只悠闲的大狗。他们的生活与游客的惊叹平行展开，互不干扰，又奇妙地编织在一起。这里最打动人心的，或许正是这种“被精心呵护的日常感”——历史不是封存在玻璃后的展品，而是窗台上盛开的天竺葵，是厨房里飘出的炖肉香，是午后阳光恰好晒暖了门廊的那把旧长椅。
当你走到波尔沃河畔，那排举世闻名的红色河岸仓库（Porvoon punaiset majakat）便近在眼前。这些建于18、19世纪的木结构仓库，外立面被统一刷成了浓烈的赭红色。据说最初是用混合了牛血和赭石的涂料粉刷，为了防腐和彰显财富。它们在如镜的水面上投下完美的倒影，随着水波微微荡漾。在某个瞬间，你会忘记时间，仿佛能看到戴着毡帽的商人指挥着工人们，将远航而来的食盐、香料从船上卸下，又将芬兰的焦油、木材装上船。这条河，是这座老城的动脉，也是它所有故事的起点。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子转过最后一个弯道，那片在明信片上见过无数次的景象，毫无预兆地、完整地在你眼前铺开。第一眼波尔沃老城，就像有人不小心打翻了调色盘，把赭红、鹅黄、淡粉和天蓝全都泼洒在了郁郁葱葱的山坡与波光粼粼的河水之间。那些歪歪扭扭挤在一起的小木屋，屋顶陡峭，白窗框勾勒得格外分明，仿佛一群穿着鲜艳衣服、正凑在一起窃窃私语的童话人物。空气里有一股独特的、属于北国的味道——是刚被雨水打湿的鹅卵石路面散发出的清冽土腥气，混合着从某扇半掩门扉里飘出的、新鲜烘焙肉桂卷的暖甜香气。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你顺着缓坡往下走，脚下的石板路被几个世纪的脚步打磨得温润光滑。老城不是一座冷冰冰的博物馆，它活生生地跳动着。耳边传来的是日常的交响：隔壁画室门铃的清脆叮咚，咖啡馆露台上瓷杯轻轻碰撞的声响，远处教堂沉稳的钟声，以及几乎被忽略的、风掠过河面与树叶的沙沙声。当地人不紧不慢地从你身边走过，手里或许拎着一篮刚买的浆果，或牵着一只悠闲的大狗。他们的生活与游客的惊叹平行展开，互不干扰，又奇妙地编织在一起。这里最打动人心的，或许正是这种“被精心呵护的日常感”——历史不是封存在玻璃后的展品，而是窗台上盛开的天竺葵，是厨房里飘出的炖肉香，是午后阳光恰好晒暖了门廊的那把旧长椅。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你走到波尔沃河畔，那排举世闻名的红色河岸仓库（Porvoon punaiset majakat）便近在眼前。这些建于18、19世纪的木结构仓库，外立面被统一刷成了浓烈的赭红色。据说最初是用混合了牛血和赭石的涂料粉刷，为了防腐和彰显财富。它们在如镜的水面上投下完美的倒影，随着水波微微荡漾。在某个瞬间，你会忘记时间，仿佛能看到戴着毡帽的商人指挥着工人们，将远航而来的食盐、香料从船上卸下，又将芬兰的焦油、木材装上船。这条河，是这座老城的动脉，也是它所有故事的起点。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`波尔沃老城`} />
                <InfoRow label="英文名称" value={`Porvoo Old Town`} />
                <InfoRow label="正式名称" value={`Porvoo Old Town`} />
                <InfoRow label="国家" value={`芬兰`} />
                <InfoRow label="城市" value={`波尔沃`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`芬兰第二古老的城市，是1809年开启芬兰自治进程的“波尔沃议会”历史事件发生地，堪称芬兰民族意识的摇篮。`} />
                <InfoRow label="建筑特色" value={`色彩明快的木结构房屋群与沿波尔沃河岸排列的标志性红色外立面仓库（古代用于储存货物）交相辉映，构成如画般的北欧小镇景观。`} />
                <InfoRow label="建筑风格" value={`以北欧新古典主义和帝国风格为基调，融合了本地传统木构建筑特色，形成了独特的“波尔沃风格”。`} />
                <InfoRow label="文化价值" value={`这里是芬兰民族诗人约翰·卢德维格·鲁内贝里的长期居住地，其文学创作与这座城市紧密相连，使之成为芬兰浪漫民族主义文化的重要象征。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城作为开放街区全年24小时可自由漫步。内部各博物馆和小店有独立营业时间，例如波尔沃大教堂夏季（5月至9月）通常为10:00-18:00，冬季缩短至12:00-14:00；波尔沃博物馆夏季10:00-16:00，冬季周二至周日开放。多数商店和咖啡馆在6-8月旺季营业至晚6点，周末可能缩短，冬季（11月至次年3月）部分小店会歇业或仅在周末开放。建议行前在官网查询具体场馆的最新时间。`} />
              <InfoRow label="门票价格" value={`进入老城街区免费。参观主要场馆需单独购票：波尔沃大教堂门票约5欧元，波尔沃博物馆（包括老市政厅和 Holm House）联票约12欧元，Walter Runeberg雕塑家工作室博物馆门票约8欧元。学生、儿童及团体通常有优惠。部分教堂在非礼拜时间可能会收取小额入场费以维护古迹。`} />
              <InfoRow label="地址" value={`Porvoon vanhakaupunki, 06100 Porvoo, Finland`} />
              <InfoRow label="交通方式" value={`从赫尔辛基出发最便捷。自驾：沿E18公路向东行驶约50公里，车程约50分钟，老城入口附近有收费停车场。公共交通：从赫尔辛基中央火车站（Helsingin päärautatieasema）乘坐区间火车（U或L线）至波尔沃火车站（Porvoon asema），车程约35-50分钟，班次频繁；出火车站后，步行约1.5公里（20分钟）或转乘当地巴士（如831路）即可抵达老城中心。也可在赫尔辛基Kamppi长途汽车站乘坐公交（如848、869路），车程约1小时。购买HSL区域交通日票或使用手机App购票最为方便。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`波尔沃的故事，要从八百多年前说起。大约在13世纪末，瑞典的拓殖者乘船沿着波尔沃河深入内陆，发现此处河流交汇，地势易守难攻，是建立定居点和开展贸易的理想地点。很快，一个围绕着小教堂的社区便形成了。到了1346年，瑞典国王马格努斯·埃里克森正式授予波尔沃城市特权，使它成为继图尔库之后芬兰第二古老的城市。中世纪时期，它已是芬兰东部重要的贸易与行政中心，繁忙的河道上船只往来，将本地出产的毛皮、焦油和黄油运往汉萨同盟的各城市。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的转折点发生在1809年。当时，芬兰还属于瑞典王国。瑞俄战争后，瑞典战败，芬兰被割让给俄国，成为俄罗斯帝国下的一个自治大公国。就在波尔沃老城的大教堂里，沙皇亚历山大一世召开了具有里程碑意义的“波尔沃议会”。正是在这里，他郑重承诺，将尊重芬兰原有的法律、宗教和社会制度，赋予了芬兰前所未有的自治地位。这座小小的木构教堂，因此成为了芬兰作为一个政治实体诞生的“产房”，其精神遗产至今仍被芬兰人珍视。教堂内那张朴素的红色绒布覆盖的御座，静静地诉说着那段决定民族命运的日子。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`整个19世纪，随着民族觉醒浪潮的兴起，波尔沃吸引了众多艺术家、作家和知识分子。其中最闪亮的星辰，无疑是民族诗人约翰·卢德维格·鲁内贝里。他在波尔沃居住、教书、创作长达四十年，他的诗歌，尤其是《我们的国家》（芬兰国歌歌词），极大地激发了芬兰人的民族情感。他和妻子弗雷德里卡居住的黄白相间的故居，如今是博物馆。你能在他的书房里，想象他如何望着窗外的庭院和河流，写下那些歌颂芬兰自然与人民的隽永诗句。可以说，芬兰浪漫的民族魂，有很大一部分是在波尔沃的老街小巷中被滋养和塑造的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战火也曾无情地灼伤过这幅美丽的画卷。1914年和1939年，老城两度遭遇严重火灾，大片珍贵的木结构建筑化为灰烬。但芬兰人没有让记忆就此消失。他们依照古老的图纸、照片和绘画，一砖一木、一窗一棂地精心重建。我们今天看到的五彩斑斓的木屋，许多都是这次“凤凰涅槃”后的成果。重建并非单纯的复制，而是一种文化记忆的顽强延续。他们将现代化的设施巧妙地隐藏在古老的外表之下，让老城既保留了时光的韵味，又能舒适地迈入现代生活。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如今的波尔沃老城，是历史层累的生动教科书。每一栋房子都有自己的编号和故事，有的门楣上还刻着建造年份和屋主的姓名缩写。你可以在“糖果制造商之家”闻到百年前的甜香，在古老的药房里看到稀奇古怪的旧时药材，也可以在由旧仓库改造的艺术画廊里欣赏当代北欧设计。它完美地平衡了纪念性与生活感，让每一个到访者都能在历史的回响中，触摸到芬兰人宁静、坚韧而又充满生活情趣的民族性格。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味波尔沃，建议安排一整天的悠闲时光。最好在上午9点左右抵达，此时旅游团大军尚未涌入，晨光柔和，街道宁静，是拍照和感受本地生活气息的黄金时段。整体游览节奏宜慢不宜快，核心是漫步、观察和体验。路线可以设计为一个环线：从老城入口的“老镇门”开始，先沿主街感受热闹氛围，然后下到河岸与仓库亲密接触，接着探访山顶的教堂与博物馆，最后穿行在蜿蜒的后街小巷中，发现意外之喜。这样的安排能让你由表及里，从宏观景象到微观细节，全方位领略老城的魅力。记得留出至少一小时，找家河边咖啡馆无所事事地发呆，这才是波尔沃式度假的精髓。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季（6-8月）是绝对旺季，中午至下午人流最密集，尽量利用早晨和傍晚的时间探索核心区域。老城街道多为不规则石块和鹅卵石铺就，请务必穿一双舒适防滑的步行鞋，高跟鞋在这里是“灾难”。冬季来访虽然部分小店关门，但雪覆红仓的景象无比梦幻，且游客稀少，适合喜欢寂静之美的旅行者。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从老镇门（Vanha Portti）的石板路开始清晨的漫步，让脚步跟随光滑鹅卵石的指引深入老城腹地`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要走下石阶来到波尔沃河岸边，亲手触摸那些赭红色仓库粗糙的木壁，看野鸭在倒影间划出水痕`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`爬上缓坡来到波尔沃大教堂内部，在静谧中寻找那张见证历史的红色御座，感受阳光透过高窗洒下的神圣光柱`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`钻进鲁内贝里故居博物馆的小院，坐在诗人可能坐过的长椅上，想象他构思《我们的国家》诗句时的心境`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在主街（Välikatu或Kirkkokatu）任意一家家庭经营的手工艺小店流连，和店主聊聊天，挑一块手工制作的羊毛毡或一块琥珀`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午餐后拐进那些名字古怪的狭窄巷弄，比如“爱之巷”，仰头看看两边几乎要亲吻在一起的彩色山墙`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在波尔沃博物馆（老市政厅）里花上一小时，透过古老的地图、模型和器物，拼凑出这座小镇八百年的记忆碎片`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`黄昏时分回到河边，在“糖厂”或任何一家有露台的咖啡馆，点一杯热巧克力或本地苹果酒，看着夕阳将仓库群染成金红色`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`山坡草坪全景位`}</h4>
                  <p className="text-sm text-gray-700">{`从大教堂后方或旁边的山坡草坪向东俯瞰，可将成片的彩色木屋屋顶、教堂钟楼与蜿蜒的波尔沃河及红色仓库群全部纳入取景框，日落前两小时的侧光最为迷人。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`红色仓库倒影镜面`}</h4>
                  <p className="text-sm text-gray-700">{`走到河流北岸（新城区一侧），寻找水面平静无风的位置，可以拍摄仓库群及其完美倒影的对称构图，清晨常有无风时刻，能拍到如油画般静止的画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“爱之巷”（Jokikatu附近）的狭窄视角`}</h4>
                  <p className="text-sm text-gray-700">{`钻进最窄的小巷，用广角镜头仰拍两侧色彩鲜艳、微微倾斜的木屋山墙与一线蓝天，构图极具戏剧性和压迫感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`河边旧木桥框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`站在连接新老城区的木桥上，以桥的木质结构为前景框架，将对岸的山坡建筑群作为背景，能拍出富有层次感和故事感的照片。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`Holm House庭院细节`}</h4>
                  <p className="text-sm text-gray-700">{`在这个博物馆的宁静庭院里，聚焦于古老的木门、斑驳的油漆、窗台上的花盆和复古的街灯，捕捉波尔沃老城细腻的生活纹理。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`芬兰法律非常重视隐私，未经明确许可，请避免将镜头直接对准私人住宅的窗户或庭院内的居民。冬季拍摄雪景时，注意相机的保暖和电池续航，极寒天气下电池耗电极快。利用好芬兰夏日的“午夜阳光”和冬季短暂的“蓝色时刻”，能获得光线质感独特的作品。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-blue-800">{`住在由19世纪木屋改造的精品民宿里，房间保留着原始的木梁和壁炉，推开窗就是蜿蜒的鹅卵石街道，晚上能听见教堂的报时钟声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史沉浸`}</h4>
                  <p className="text-sm text-green-800">{`选择坐落在老城中心、拥有数百年历史的酒店，例如由商人宅邸改建而成，内部装饰着古董家具和当地艺术画作，早餐能尝到传统的芬兰黑麦粥。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`河景享受`}</h4>
                  <p className="text-sm text-yellow-800">{`入住波尔沃河畔的现代设计酒店，房间拥有整面的落地窗或私人阳台，直面那排标志性的红色仓库，日出与日落时分景色无与伦比。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`宁静之选`}</h4>
                  <p className="text-sm text-purple-800">{`位于老城边缘稍高处的家庭旅馆，环境清幽，步行到中心仅需五分钟，却拥有俯瞰老城瓦片屋顶的花园露台，适合寻求安静的旅人。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿数量有限且极其热门，尤其是在夏季和圣诞节前后，务必提前数月预订。冬季前往时，确认住宿是否提供充足的暖气（这通常不是问题）以及清除门口积雪的服务。选择住在老城内虽然价格稍高，但能获得清晨和夜晚游客散去后，独享这座梦幻小镇的宝贵体验，绝对值回票价。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开波尔沃很久以后，脑海中挥之不去的，不是某一张具体的明信片风景，而是一种综合的、安宁的“感觉”。那感觉是手指抚摸过老旧木窗框的温润触感，是鼻腔里萦绕的咖啡与潮湿木材混合的气息，是耳朵里留下的、风吹过河面与钟楼之间那一片空旷的寂静之声。波尔沃老城教会你的，不是波澜壮阔的历史课，而是一种细腻的、关于“如何与时间和解”的生活哲学。它历经战火与灾难，却没有沉溺于悲情，而是选择用更明快的色彩、更精心打理的花圃、更美味的手工糕点来拥抱新生。每一栋精心修复的木屋，都是一次对历史的温柔对话，也是对未来的坚定承诺。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率与刺激的快节奏世界里，波尔沃像一处精神的避风港。它提醒我们，深厚的历史底蕴与宁静的日常生活可以如此和谐地共处；真正的文化魅力，不在于恢弘的尺度，而在于一扇窗、一条巷、一条河所承载的集体记忆与情感温度。每一位热爱深度游的旅人，都该来波尔沃住上一晚。不仅仅是为了看那排红色的仓库，更是为了体验一种久违的、属于小镇的缓慢心跳。在这里，你会重新学会“浪费”时间——而恰恰是这些被“浪费”的、无所事事的时刻，最终会成为旅途中最珍贵、最滋养心灵的记忆瑰宝。它或许不是芬兰最著名的目的地，但它一定是能让你最贴近芬兰灵魂的地方。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/porvoo-red-wooden-houses" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    波
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">波尔沃红色木屋区</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Porvoo Old Town (Red Wooden Houses)</p>
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
              <a href="/attractions/tampere" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    坦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">坦佩雷老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tampere</p>
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
