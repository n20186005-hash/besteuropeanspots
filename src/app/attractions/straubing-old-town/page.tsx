import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '施特劳宾 Straubing｜多瑙河畔的哥特式红砖珍宝与传奇罗马面具 - 最佳欧洲景点',
  description: '朋友，想象一下，当你从略显平淡的现代街道拐个弯，突然置身于一个被高大、温暖的红砖建筑环抱的宽阔广场时的那种感觉。这就是施特劳宾给我的第一击。那不是冰冷的大理石或灰扑扑的砂岩，而是烧制过的陶土般的暖红色，在巴伐利亚清澈的阳光下，像是整个广场都在微微发光。广场中央的喷泉哗哗作响，声音在四面建筑的立面上轻',
}

export default function StraubingOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '德国', href: '/destinations/europe' },
            { label: '施特劳宾', href: '/destinations/europe' },
            { label: '施特劳宾', href: '/attractions/straubing-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`施特劳宾・Straubing・德国・施特劳宾`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，当你从略显平淡的现代街道拐个弯，突然置身于一个被高大、温暖的红砖建筑环抱的宽阔广场时的那种感觉。这就是施特劳宾给我的第一击。那不是冰冷的大理石或灰扑扑的砂岩，而是烧制过的陶土般的暖红色，在巴伐利亚清澈的阳光下，像是整个广场都在微微发光。广场中央的喷泉哗哗作响，声音在四面建筑的立面上轻轻回荡，混合着旁边面包房飘出的新鲜黄油和糖霜的甜香。当地人推着自行车经过，在露天咖啡座喝着一大早就开始的啤酒，游客反而成了稀罕物——这里首先是一座充满生活气息的巴伐利亚城镇，然后才是一个景点。
而你的目光，一定会不可抗拒地被广场一侧那座巨塔所攫取。那座市政厅钟楼就那么孤傲地、笔直地刺向天空，没有任何其他建筑与它相连，仿佛一位守护了这里六百年的沉默哨兵。它的底座敦实，越往上却越显精致，层层叠叠的拱窗、尖塔和小阳台，直到顶端那个墨绿色的洋葱形穹顶，在蓝天下勾勒出无比优美的剪影。我站在那儿，能听到风掠过塔顶风向标发出的细微呜咽，还有整点时厚重钟声荡开的涟漪，那声音似乎能穿透你的外套，直接落在心口上，是一种沉甸甸的、关于时间的提醒。
但施特劳宾的魅力远不止于地上这些宏伟的砖石。它的另一个灵魂，藏在广场另一侧的市博物馆地下一层，那是一个幽暗、安静，近乎神圣的空间。当你走下楼梯，隔着玻璃，与那顶“施特劳宾罗马骑兵面具”面对面时，会瞬间忘了呼吸。那不是我们在教科书上看到的模糊铜绿，而是几乎完美的、闪着冷冽金属光泽的金色面孔。雕刻细腻到能看清每一缕发丝、眉毛的弧度，甚至嘴角那一丝难以捉摸的、属于年轻战士的似笑非笑。灯光打在它空洞的眼眶上，你会错觉那双眼睛下一秒就会眨动。那一刻，广场上的阳光、钟声、咖啡香全都褪去了，你直接与公元2世纪一位罗马军官的威严与脆弱对视。地上是活色生香的中世纪，地下却冻结着帝国的辉煌，这种时空的垂直交错感，才是施特劳宾最不可思议的地方。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "朋友，想象一下，当你从略显平淡的现代街道拐个弯，突然置身于一个被高大、温暖的红砖建筑环抱的宽阔广场时的那种感觉。这就是施特劳宾给我的第一击。那不是冰冷的大理石或灰扑扑的砂岩，而是烧制过的陶土般的暖红色，在巴伐利亚清澈的阳光下，像是整个广场都在微微发光。广场中央的喷泉哗哗作响，声音在四面建筑的立面上轻轻回荡，混合着旁边面包房飘出的新鲜黄油和糖霜的甜香。当地人推着自行车经过，在露天咖啡座喝着一大早就开始的啤酒，游客反而成了稀罕物——这里首先是一座充满生活气息的巴伐利亚城镇，然后才是一个景点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而你的目光，一定会不可抗拒地被广场一侧那座巨塔所攫取。那座市政厅钟楼就那么孤傲地、笔直地刺向天空，没有任何其他建筑与它相连，仿佛一位守护了这里六百年的沉默哨兵。它的底座敦实，越往上却越显精致，层层叠叠的拱窗、尖塔和小阳台，直到顶端那个墨绿色的洋葱形穹顶，在蓝天下勾勒出无比优美的剪影。我站在那儿，能听到风掠过塔顶风向标发出的细微呜咽，还有整点时厚重钟声荡开的涟漪，那声音似乎能穿透你的外套，直接落在心口上，是一种沉甸甸的、关于时间的提醒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但施特劳宾的魅力远不止于地上这些宏伟的砖石。它的另一个灵魂，藏在广场另一侧的市博物馆地下一层，那是一个幽暗、安静，近乎神圣的空间。当你走下楼梯，隔着玻璃，与那顶“施特劳宾罗马骑兵面具”面对面时，会瞬间忘了呼吸。那不是我们在教科书上看到的模糊铜绿，而是几乎完美的、闪着冷冽金属光泽的金色面孔。雕刻细腻到能看清每一缕发丝、眉毛的弧度，甚至嘴角那一丝难以捉摸的、属于年轻战士的似笑非笑。灯光打在它空洞的眼眶上，你会错觉那双眼睛下一秒就会眨动。那一刻，广场上的阳光、钟声、咖啡香全都褪去了，你直接与公元2世纪一位罗马军官的威严与脆弱对视。地上是活色生香的中世纪，地下却冻结着帝国的辉煌，这种时空的垂直交错感，才是施特劳宾最不可思议的地方。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`施特劳宾`} />
                <InfoRow label="英文名称" value={`Straubing`} />
                <InfoRow label="正式名称" value={`Straubing`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`施特劳宾`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座拥有两千年历史层叠的古城，既是古罗马在多瑙河畔的重要军事前哨，也是巴伐利亚地区保存最完好的晚期哥特式红砖建筑群的代表。`} />
                <InfoRow label="建筑特色" value={`其无可争议的视觉核心是那座高达68米、独立耸立、饰有华丽洋葱顶和观景回廊的市政厅砖砌钟楼，被誉为“巴伐利亚的砖塔之王”。`} />
                <InfoRow label="建筑风格" value={`以华丽的晚期哥特式砖砌建筑为主导风格，混杂了文艺复兴和巴洛克式的民居立面，形成和谐而富有层次的城市肌理。`} />
                <InfoRow label="文化价值" value={`它是一座“活着的”历史博物馆，将罗马帝国的边疆记忆、中世纪汉萨同盟的贸易辉煌与巴伐利亚醇厚的乡土生活完美融合于一体。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城公共区域全天开放。地标性建筑市政厅塔楼（TheStadtturm）的登顶参观通常在每年4月至10月的周二至周日下午开放，具体时间常有微调，行前务必查阅官网。施特劳宾市博物馆（Gäubodenmuseum）开放时间为周二至周日上午10点至下午4点，周一闭馆。所有景点在圣诞节、元旦等主要公共假日可能关闭或缩短开放时间。`} />
              <InfoRow label="门票价格" value={`漫步古城和欣赏市集广场建筑群完全免费。登上市政厅塔楼门票约3欧元，提供绝佳的城市全景视野。施特劳宾市博物馆门票约5欧元，学生、儿童及团体享有优惠票价，持巴伐利亚宫殿联票可免费进入。临时特展可能额外收费。`} />
              <InfoRow label="地址" value={`市集广场 (Theresienplatz 1)， 94315 Straubing， 德国`} />
              <InfoRow label="交通方式" value={`最近的国际枢纽是慕尼黑弗朗茨·约瑟夫·施特劳斯机场 (MUC)。从机场火车站乘坐区域火车 (BRB或Alex) 直达施特劳宾主火车站，车程约1.5小时，班次频繁。从纽伦堡或雷根斯堡出发，乘坐区域快车 (RE) 到达施特劳宾也仅需约1小时。古城核心区紧凑，从火车站步行约15分钟即可到达市集广场，沿途已开始感受老城风情。城内公交系统便捷，但步行探索是最佳方式。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要讲施特劳宾的故事，咱们得把时钟猛地拨回近两千年前。那时候，这里不叫施特劳宾，而是罗马帝国雷蒂安防线上的一个坚固的骑兵堡垒，名叫“Sorviodurum”。多瑙河就是帝国的北疆，而对岸的森林里，住着让罗马军团头疼的日耳曼部落。你可以想象，这座木石结构的营地里，驻扎着来自帝国四面八方的辅助骑兵，他们的甲胄在河边反射日光，战马的嘶鸣与拉丁语的命令声交织。公元2世纪中叶，一次盛大的骑兵竞技或宗教游行后，一整套奢华无比的阅兵用青铜装备——包括那顶震惊后世的金色面具、精美的护腿和马饰——被郑重地埋入地下。我们不知道这是为了祭祀战神，还是一位军官心爱的宝物随着主人一同长眠。随着帝国衰败，军团撤走，泥土慢慢掩埋了这些秘密，罗马的记忆在民间变成了模糊的传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间快进到中世纪早期，新的定居点在旧营地不远处生长起来。得益于多瑙河这条黄金水道，施特劳宾在13世纪获得了城市权，并迅速因盐、谷物和葡萄酒贸易而繁荣起来，甚至一度加入了强大的汉萨同盟。财富积累了起来，市民的雄心也随之膨胀。他们需要一个配得上城市地位的象征。于是，在14到15世纪，一场轰轰烈烈的“红砖建设热潮”席卷了全城。巴伐利亚的平原缺少优质石材，但粘土却取之不尽。当地的工匠大师们，将北德流行的砖砌哥特式风格与南德的优雅形式相结合，创造出了独特的“多瑙河砖哥特风”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场建设的最高潮，便是那座独立的钟楼。它始建于1393年，最初是作为防御塔和火情瞭望塔。但市民们不满足于一个朴素的墩子，他们请来最好的工匠，一代接着一代，为它加上华丽的窗棂、雕塑和观景廊。那个标志性的洋葱顶，则是巴洛克时期才戴上的“新帽子”，为刚硬的哥特线条增添了一抹俏皮与华丽。它从未属于任何教堂，从诞生起就是纯粹的市民建筑，是城市自治与骄傲的实体宣言，日夜俯视着广场上市民们的集市、庆典与日常生活。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "近代的施特劳宾也并非一帆风顺。它经历了瘟疫、三十年战争的蹂躏，在拿破仑战争中被波及，二战末期更遭到了严重的空袭，老城部分化为瓦砾。但你看今天广场周围那些几乎完美无缺的建筑立面，就会明白巴伐利亚人对于重建家园有多么执着和认真。他们不是推倒重来，而是一砖一瓦地“复刻”了历史。那种精确，源于深植于心的文化认同。如今的施特劳宾，一边是现代化、高科技的工业园区（它是巴伐利亚重要的生物科技中心），一边是这座仿佛被时光温柔保留的老城。它没有慕尼黑的喧嚣，没有罗滕堡那般彻头彻尾的童话布景感，它真实、自信、层次丰富，像一本静静摊开的多层历史书，等待有心人慢慢翻阅。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受施特劳宾的魔力，建议安排一整天时间。最好在上午9点左右抵达市集广场，这时阳光正好照亮钟楼的东侧立面，广场上的咖啡座刚刚摆好，城市在缓慢苏醒，是最有生活气息也最适合拍照的时段。整体游览节奏应张弛有度：上午聚焦于广场的地上建筑群和登高望远；中午享用一顿扎实的巴伐利亚午餐；下午则沉浸入博物馆的历史纵深，并在老城小巷中悠闲漫步；傍晚时分，一定要留给宁静的多瑙河岸。这样的安排，能让你在视觉、味觉和历史感上得到全方位的满足，由宏至微，由今及古，层层揭开这座古城的面纱。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`市博物馆周一闭馆，务必避开这天规划行程，否则会错过最重要的罗马面具。博物馆内部部分展厅禁止拍照（尤其是罗马珍宝室），请务必遵守规定。老城街道多为石板路，建议穿一双舒适耐磨的平底鞋，高跟鞋在这里将是灾难。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从火车站出发，沿着 Ludwigshofer Straße 缓步走向老城，让两旁建筑逐渐从现代过渡到古意的过程唤醒你的感官。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先抵达开阔的市集广场，在喷泉边驻足，顺时针环视一圈，感受红砖建筑群构成的温暖“剧场”将你温柔包围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花点时间仔细端详市政厅钟楼的每一个雕刻细节，然后购票登上它的观景回廊，在68米高空将红瓦屋顶的海洋与远方多瑙河的银带尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走下钟楼，参观装饰着精美壁画的历史市政厅内部，想象几个世纪以来市政官们在此议事的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`接下来，走进广场旁的市博物馆，径直下到罗马珍宝展厅，在那顶独一无二的骑兵金面具前静静停留十分钟，与古罗马对视。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在广场边找一家有露天座位的传统餐厅，点一份著名的巴伐利亚白香肠配甜芥末和扭结面包，体验最地道的当地味道。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午餐后，以教堂漫步消食，从宏伟的圣雅各布教堂内部到其宁静的回廊墓地，感受宗教艺术的肃穆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`随意钻进一条从广场辐射出去的小巷，比如满是特色店铺的 Steinergasse，用脚步丈量中世纪城市的尺度，捕捉阳光在凹凸不平墙面上玩耍的光影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 9 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，跟着路标或本地人散步的方向，步行约十分钟抵达多瑙河堤岸，坐在长椅上，看河水静静流淌，船只往来，为这一天画上一个宁静的句点。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`市集广场东南角仰拍钟楼`}</h4>
                  <p className="text-sm text-gray-700">{`上午的光线最佳，将广场喷泉作为前景，能拍到钟楼完整的倒影在水花中，构图极具张力。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`钟楼观景回廊俯拍广场`}</h4>
                  <p className="text-sm text-gray-700">{`利用回廊的石拱窗作为天然画框，拍摄下方广场上如积木般的房屋顶和来往如织的微小人群，充满故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`Steinergasse 小巷纵深拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`下午太阳西斜时，阳光会斜射入狭窄的小巷，在暖红色的砖墙和鹅卵石路面上拉出长长的光影，拍摄人物行走其中的背影极具氛围。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`市博物馆内罗马面具特写`}</h4>
                  <p className="text-sm text-gray-700">{`在允许拍照的区域，利用展柜的灯光，聚焦于面具的金属质感与面部细节，捕捉那穿越千年的工艺与神秘表情。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`多瑙河老桥回望古城天际线`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚时分走上多瑙河的老桥，以河水和绿地为前景，将远处钟楼的尖顶与老城一片红色的屋顶一同纳入镜头，这是施特劳宾的标准全景名片照。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄当地居民，尤其是在集市或咖啡馆时，请务必先微笑示意并获得同意，德国人非常注重隐私。三脚架在博物馆和拥挤的广场上通常不被允许使用。清晨和黄昏的“黄金时刻”光线对于渲染红砖建筑的温暖质感尤为重要，不要错过。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济优选`}</h4>
                  <p className="text-sm text-blue-800">{`位于火车站附近步行可达范围的现代设计青旅，房间简洁明亮，公共厨房设施齐全，是背包客和独行侠结交旅伴的绝佳基地。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史情怀`}</h4>
                  <p className="text-sm text-green-800">{`藏身于老城中心一栋15世纪商人宅邸内的家庭旅馆，木梁天花板咯吱作响，早餐在有着拱顶的地下餐厅享用，老板娘会热心告诉你本地人才知道的小酒馆。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在市集广场侧翼的精品酒店，由历史建筑精心改造，房间能将广场与钟楼美景一览无余，浴缸旁都备有本地起泡酒，极尽浪漫。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`郊外体验`}</h4>
                  <p className="text-sm text-purple-800">{`若自驾前来，可以选择多瑙河畔乡间由古老农庄改造的度假屋，醒来窗外是马儿和草场，开车进城仅需十分钟，体验真正的巴伐利亚田园生活。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "老城中心的住宿周末和节假日晚间可能略为喧闹（来自酒吧和餐厅的欢声笑语），追求绝对安静请选择内庭房间或稍离广场的街区。夏季旅游旺季和十月啤酒节期间，施特劳宾周边住宿同样紧俏，务必提前数月预订。选择郊外住宿意味着你需要依赖汽车，但能获得更广阔的巴伐利亚乡村风光。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开施特劳宾许久，我脑海里反复回放的，不是某个单一的震撼画面，而是一种奇妙的“层次感”。那种感觉，就像用手指轻轻拂过一本古老书籍的切口，不同颜色的书页边缘代表着不同的年代——金色的罗马、砖红色的中世纪、灰蓝色的现代工业——它们紧紧压合在一起，构成了这本名为“施特劳宾”的厚重大书。这座城市没有试图抹去任何一层历史，也没有将某一层过分粉饰成主题公园。罗马面具在地下安然闪耀，哥特钟楼在地上默默守望，而电车就在不远处的街道上叮当驶过。这种和谐共存，需要何等的文化自信与从容。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求“网红同款”和“速成打卡”的旅行时代，施特劳宾像一位低调而饱学的长者。它不会用夸张的尖叫点来吸引你，却在你静下心来漫步时，给予你源源不断的、细腻的触动。它教会我们，真正的深度旅行，不是收集地图上的坐标，而是去感受时间在不同地层中的沉淀与呼吸。在这里，你能触摸到罗马军团的冰冷金属，也能闻到巴伐利亚面包房的热乎香气；你能听到中世纪钟楼的沉重敲击，也能看到河边推着婴儿车散步的年轻家庭。它告诉我们，历史从未死去，它只是换了一种方式，活在每一块被阳光晒暖的红砖里，活在每一个平常而安稳的当下。这就是施特劳宾，一个让你学会“垂直观看”历史、并因此更热爱生活的地方。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/schongau" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    雄
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">雄高</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Schongau</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/minden-water-bridge" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    明
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">明登</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Minden</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sigmaringen-castle-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡格马林根城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sigmaringen Castle</p>
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
