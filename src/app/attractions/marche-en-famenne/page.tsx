import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '马尔什昂法梅讷 Marche-en-Famenne｜时光停驻的石头小镇，探访阿登山丘下的17世纪鹅卵石梦境 - 最佳欧洲景点',
  description: '如果你厌倦了那些被游客挤爆的“明信片小镇”，那么，欢迎来到马尔什昂法梅讷。我的第一印象，是声音——行李箱轮子压在厚重鹅卵石上发出的那种沉闷而连贯的“咕隆咕隆”声，瞬间将你从现代交通工具的便捷里拽了出来，丢进一个由石头、时光和缓慢节奏构成的世界。空气里飘着淡淡的、好闻的香味，那是从街角面包房刚出炉的“',
}

export default function MarcheEnFamennePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '比利时', href: '/destinations/belgium' },
            { label: '马尔什昂法梅讷', href: '/attractions/marche-en-famenne' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`马尔什昂法梅讷・Marche-en-Famenne・比利时・马尔什昂法梅讷`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`如果你厌倦了那些被游客挤爆的“明信片小镇”，那么，欢迎来到马尔什昂法梅讷。我的第一印象，是声音——行李箱轮子压在厚重鹅卵石上发出的那种沉闷而连贯的“咕隆咕隆”声，瞬间将你从现代交通工具的便捷里拽了出来，丢进一个由石头、时光和缓慢节奏构成的世界。空气里飘着淡淡的、好闻的香味，那是从街角面包房刚出炉的“库克”面包的焦糖甜香，混合着老建筑石材在雨后散发的微凉湿气。阳光斜射在那些蓝灰色的石灰岩立面上，让每一块历经风雨的石头都泛着温润的光泽，仿佛整个小镇都被包裹在一层柔和的蜜糖里。
这里没有咄咄逼人的景点标识，你只需把自己交给迷宫般的街道。市政厅广场是跳动的心脏，但它的心跳是缓慢而有力的。工作日清晨，这里可能只有几个老人坐在长椅上晒太阳，或是一个主妇拎着藤编篮子在市场摊位前仔细挑选奶酪。那种宁静，不是死寂，而是一种充满安全感的、被岁月包浆后的从容。你会发现，那些有着华丽山墙和精致窗棂的17世纪房屋，一楼可能就是一家五金店、一家肉铺或者一个律师事务所。历史在这里不是被供奉起来的展品，而是日常生活本身的地基和背景墙。
最打动人的，恰恰是这种“活着的”状态。你在窄巷里抬头，能看到巴洛克山墙的优美曲线背后，某户人家窗台上绽放着鲜艳的天竺葵，晾衣绳上挂着普通的衬衫。你能在古老的“国王头”旅馆门廊下，听到本地人用瓦隆语（一种法语方言）高声谈笑，喝着修道院啤酒。马尔什昂法梅讷的魅力，不在于某个惊世骇俗的地标，而在于它完整保存了一个前工业时代欧洲小城的肌理与脉搏，并且，它依然在按着自己的节奏，平稳地跳动。来到这里，你不是一个观光客，而是一个不小心闯入了一段仍在继续的、美好旧时光的幸运旁观者。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果你厌倦了那些被游客挤爆的“明信片小镇”，那么，欢迎来到马尔什昂法梅讷。我的第一印象，是声音——行李箱轮子压在厚重鹅卵石上发出的那种沉闷而连贯的“咕隆咕隆”声，瞬间将你从现代交通工具的便捷里拽了出来，丢进一个由石头、时光和缓慢节奏构成的世界。空气里飘着淡淡的、好闻的香味，那是从街角面包房刚出炉的“库克”面包的焦糖甜香，混合着老建筑石材在雨后散发的微凉湿气。阳光斜射在那些蓝灰色的石灰岩立面上，让每一块历经风雨的石头都泛着温润的光泽，仿佛整个小镇都被包裹在一层柔和的蜜糖里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里没有咄咄逼人的景点标识，你只需把自己交给迷宫般的街道。市政厅广场是跳动的心脏，但它的心跳是缓慢而有力的。工作日清晨，这里可能只有几个老人坐在长椅上晒太阳，或是一个主妇拎着藤编篮子在市场摊位前仔细挑选奶酪。那种宁静，不是死寂，而是一种充满安全感的、被岁月包浆后的从容。你会发现，那些有着华丽山墙和精致窗棂的17世纪房屋，一楼可能就是一家五金店、一家肉铺或者一个律师事务所。历史在这里不是被供奉起来的展品，而是日常生活本身的地基和背景墙。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，恰恰是这种“活着的”状态。你在窄巷里抬头，能看到巴洛克山墙的优美曲线背后，某户人家窗台上绽放着鲜艳的天竺葵，晾衣绳上挂着普通的衬衫。你能在古老的“国王头”旅馆门廊下，听到本地人用瓦隆语（一种法语方言）高声谈笑，喝着修道院啤酒。马尔什昂法梅讷的魅力，不在于某个惊世骇俗的地标，而在于它完整保存了一个前工业时代欧洲小城的肌理与脉搏，并且，它依然在按着自己的节奏，平稳地跳动。来到这里，你不是一个观光客，而是一个不小心闯入了一段仍在继续的、美好旧时光的幸运旁观者。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`马尔什昂法梅讷`} />
                <InfoRow label="英文名称" value={`Marche-en-Famenne`} />
                <InfoRow label="正式名称" value={`Marche-en-Famenne`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`马尔什昂法梅讷`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`作为阿登地区西部的传统门户和商贸重镇，它在数百年间连接着平原与森林、法兰西与德意志的文化与经济。`} />
                <InfoRow label="建筑特色" value={`大量保存完好的17至18世纪建筑，以本地特有的蓝灰色石灰岩砌成，立面装饰着华丽的巴洛克式山墙和锻铁招牌。`} />
                <InfoRow label="建筑风格" value={`以莫桑式巴洛克风格为主，混合了后期哥特式以及朴素古典主义元素，形成独特的“法梅讷”地方特色。`} />
                <InfoRow label="文化价值" value={`它不仅是一座建筑博物馆，更是一个仍在呼吸的社区，其价值在于那份未被打扰的日常性与真实的生活气息。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`公共区域全天开放。城内主要历史建筑（如市政厅、圣雷姆教堂）内部参观时间通常为周一至周五上午9点至下午5点，周六日上午10点至下午4点，部分小型博物馆冬季开放时间会缩短，建议行前在旅游局官网确认最新信息。`} />
              <InfoRow label="门票价格" value={`漫步古城街道及广场完全免费。进入圣雷姆教堂免费，市政厅部分区域参观免费，但若需进入塔楼或有讲解的导览团需支付约5欧元。城内的小型博物馆（如福尔克洛博物馆）门票约3-6欧元，学生及老人有优惠。`} />
              <InfoRow label="地址" value={`Place du Roi Albert 1er, 6900 Marche-en-Famenne, Belgium`} />
              <InfoRow label="交通方式" value={`从布鲁塞尔南站乘坐IC列车前往卢森堡方向的线路，在“Marche-en-Famenne”站下车，车程约1小时30分钟，班次每小时约1-2班。从卢森堡市乘坐火车前往约需50分钟。火车站位于城镇边缘，出站后沿着标识清晰的“Centre Ville”步行约10-15分钟即可抵达古老的市中心。自驾游客可将车停在市政厅广场附近或城墙外的免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解马尔什，你得先放下对宏大叙事的期待，它的故事是关于贸易、韧性和寻常百姓家的。虽然罗马人可能曾在此设驿，但小镇真正开始书写自己的编年史，是在中世纪早期。得益于它得天独厚的地理位置——坐落在富饶的法梅讷平原边缘，紧挨着资源丰富的阿登森林，又处在几条重要商路的交汇点——这里自然而然地发展成了一个繁荣的集镇。它的名字“Marche”本身就意味着“市场”，这是它与生俱来的基因。从13世纪获得特许状开始，每周热闹的集市和年度大型交易会，让羊毛、皮革、木材和来自远方的商品在这里流通，财富也随之积累起来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇的命运并非一帆风顺。它身处历史上兵家必争的低地国家，多次成为冲突的棋子。16世纪的宗教战争、17世纪路易十四的征服战争，都让马尔什饱受战火蹂躏。然而，正是这些劫难后的重建，塑造了今天我们看到的独特风貌。17世纪中叶以后，迎来了一段相对和平与繁荣的时期，镇上的商贾和行会们开始用石头重建他们的家园和公共建筑，以取代之前容易毁于火灾的木结构房屋。他们采用了当时流行的巴洛克风格，但又因地制宜，使用了本地采石场出产的、质地坚硬的蓝灰色石灰岩。工匠们发挥巧思，在门楣、窗框和山墙上雕刻出葡萄藤、贝壳、天使面具等繁复装饰，每一栋房子都像是一件独特的签名作品，无声地炫耀着主人的财富与品味。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这些石头见证者中，市政厅无疑是最重要的角色。它始建于17世纪，那优雅的拱廊和承载着钟楼的塔楼，不仅是市政权力的象征，更是集市贸易的实际中心。拱廊下曾是商贩们的固定摊位，楼上则是进行审判和议事的场所。另一个关键建筑是圣雷姆教堂，它的塔楼更古老，带有晚期哥特式的特征，而内部则经过了巴洛克式的华丽改造。教堂里保存着一些珍贵的艺术品，静静诉说着这个社区的虔诚。值得一提的是“Maison du Temps”（时间之屋），这栋房子立面上精美的日晷和天文钟，彰显了当时人们对精确时间的追求，这在商业城镇里至关重要。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`进入近代，随着工业革命和交通方式的改变（铁路并未完全改变它的边缘地位），马尔什昂法梅讷逐渐褪去了区域性商贸中心的光环，变得安静下来。或许正是这种“被忽略”，成了它最大的幸运。它没有经历大规模的战后重建或激进的现代化改造，那些17、18世纪的美丽石头房子得以成片地保留下来，保持着原汁原味的街区格局。两次世界大战中，它虽然也被占领，但遭受的物理破坏相对有限。于是，时间在这里仿佛被调慢了速度，鹅卵石街道被磨得光滑如镜，墙壁上爬满了常春藤，整个小镇凝固成一件巨大的、活生生的历史遗存。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的马尔什，是瓦隆地区“最美丽的城市”网络中的一员，但它没有刻意迎合游客。它安静地做着自己，一个宜居的、迷人的省级中心。当地人会自豪地告诉你那些建筑的故事，也会抱怨停车位难找。它的历史不是教科书上冰冷的章节，而是清晨面包的香气、周末集市的喧闹、以及每一块被阳光晒暖的石头所共同承载的集体记忆。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受马尔什的韵味，建议预留一整天时间，并抱着“迷路也是乐趣”的心态。最佳抵达时间是上午九点左右，这时阳光正好将柔和的金色洒在市政厅广场的建筑立面上，本地商铺刚刚开门，游客尚稀。从火车站步行抵达老城区的过程本身就是一个美妙的过渡。整体游览节奏应极其舒缓，以步行探索为主，路线是一个不规则的环形，核心是围绕市政厅广场和圣雷姆教堂区域，然后随心所欲地钻进任何一条吸引你的小巷。下午可以安排参观一个小型博物馆，并在街边咖啡馆长时间发呆。这样的安排能让你充分体验小镇从清晨苏醒到午后慵懒再到华灯初上的完整时光韵律。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对舒适、鞋底较厚的平底鞋，那些美丽的鹅卵石路面走久了对脚底是真正的考验。
大多数小型博物馆和商店在周一关门，部分餐馆周二也不营业，安排行程时请务必避开。
这里不是热门旅游区，英语普及度一般，学会一句简单的法语问候“Bonjour”会为你赢得更多微笑。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从火车站沿着林荫道轻松步行十五分钟，让第一眼看到的景象是远处圣雷姆教堂的塔尖和层层叠叠的古老屋顶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直前往市政厅广场，先别急着拍照，而是找一张长椅坐下，静静地观察广场上慢慢聚集的人潮、鸽子飞过钟楼的轨迹以及光线在石灰岩墙面上的移动。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`以广场为中心，随意选择一条放射出去的小街，比如著名的Rue Saint-Remacle，用最慢的速度行走，仔细欣赏每一栋房屋山墙上不同的巴洛克雕刻和古老的门环。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`轻轻推开圣雷姆教堂厚重的木门，让眼睛适应内部昏暗的光线，寻找那幅著名的《圣雷姆的荣耀》祭坛画，并聆听自己的脚步声在空旷中回响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访广场一角的“Maison du Temps”，研究其立面上精致的日晷和天文钟，想象几个世纪前商人们据此安排交易的情景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在广场边的任意一家咖啡馆外坐下，点一杯本地的“Chimay”啤酒或一杯咖啡，就着一块杏仁蛋糕，看广场上的生活剧一幕幕上演。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`钻进旅游局所在的历史建筑，获取一份老城徒步地图，然后按照地图的指引去探寻那些隐藏在小巷深处的古老庭院和静谧角落。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在黄昏时分漫步到城镇边缘的Les Bocq河畔，看夕阳的余晖将老房子的轮廓染成金红色，结束完美的一天。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`市政厅广场东侧拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到日落前，阳光呈侧逆光，能拍出拱廊深邃的纵深感，并将广场上的人物与建筑融为一体，画面富有故事性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`Rue Saint-Remacle中段仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚光线柔和时，站在街道中央向上拍摄，将两侧高耸的巴洛克山墙和狭窄的天空收入镜头，构图极具压迫感和历史感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣雷姆教堂内部侧廊`}</h4>
                  <p className="text-sm text-gray-700">{`避开正午强光，在上午或下午光线从彩色玻璃窗斜射入内时，捕捉光束中飞舞的尘埃与古老长椅、石柱形成的静谧神圣氛围。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城堡街转角处的房屋倒影`}</h4>
                  <p className="text-sm text-gray-700">{`如果遇上前一天的雨水未干，清晨去Rue du Château寻找那些光滑的石板路，能拍到17世纪华丽建筑在积水倒影中完美对称的奇幻画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从城镇西侧高地远眺`}</h4>
                  <p className="text-sm text-gray-700">{`沿Rue de la Roche走向高处居民区，回头可以拍到圣雷姆教堂塔楼统领下的一片红瓦屋顶全景，特别是雨后天晴时，天空的层次感极佳。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄居民窗户或私人庭院时请务必保持尊重和距离，这里的居民享有宁静的生活，不宜用长镜头窥探。`}</li>
                <li>• {`使用三脚架在公共区域长时间拍摄，尤其是在狭窄的人行道上，可能会阻碍交通，需格外留意。`}</li>
                <li>• {`教堂内部允许非商业拍照，但请关闭闪光灯并保持绝对安静，弥撒期间严禁拍摄。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济优选`}</h4>
                  <p className="text-sm text-blue-800">{`火车站附近一家由家族经营的现代风格小旅馆，房间明亮干净，主人会热情地为你手绘一张老城美食地图，性价比超高。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`中心特色`}</h4>
                  <p className="text-sm text-green-800">{`坐落在一栋18世纪商人宅邸里的精品酒店，房间保留了原始的木质横梁和石墙，早餐在带有拱顶的地下室用餐，仿佛住进了历史里。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`静谧之选`}</h4>
                  <p className="text-sm text-yellow-800">{`位于老城边缘一条安静小巷中的民宿，拥有一个种满玫瑰的小花园，女主人自制的果酱和现烤华夫饼能让你从美好的早餐开始一天。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-purple-800">{`驱车十分钟可达的阿登森林边缘的庄园酒店，由一座19世纪城堡改造而成，可以在房间里俯瞰森林山谷，享受绝对的宁静与奢华SPA。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果想深度体验小镇的晨昏，强烈建议入住老城内的住宿，但需注意这些历史建筑通常没有电梯，隔音也可能一般。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季和圣诞节市场期间是旺季，预订需提前数周甚至数月。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇治安非常好，夜晚独自在老城区散步也感觉很安全，可以尽情享受夜幕下被温柔灯光点亮的石头街道。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开马尔什昂法梅讷许久后，我发现自己最常回想起的，不是某栋具体的建筑，而是一种混合了石头凉意、面包香气和缓慢脚步声的整体感觉。在这个效率至上、不断追逐“下一个”爆款目的地的时代，这里提供了一种截然相反的旅行价值：它不是用来“打卡”的，而是用来“存在”于其中的。它像一个沉稳的长者，不疾不徐地向你展示，生活可以有一种更厚重、更连贯的质地。当你抚过市政厅拱廊那些被无数代人依靠得光滑如玉的石柱时，你触摸到的不是冰冷的文物，而是时间的温度。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你问我为什么要把这个甚至有些“不起眼”的比利时小镇列入清单，我会说，因为它是一个珍贵的参照系。它让我们看到，在全球化浪潮冲刷下，一个地方依然可以保有自己强烈的、不可复制的个性。它让我们相信，美和意义不一定存在于人头攒动的名胜里，更可能藏在一条普通小巷的转角光影中，或是一扇古老门扉后的寻常生活里。去马尔什昂法梅讷，是一场对于“深度”的真正实践——它教你放慢脚步，打开所有感官，去倾听石头诉说的故事，去呼吸历史在当下延续的气息。这趟旅程的收获，将不是几张漂亮的照片，而是一份关于宁静、关于延续、关于如何与时间和解的心灵沉淀。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/gaasbeek-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    加
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">加斯贝克城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gaasbeek Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/schwabisch-hall-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施瓦本哈尔古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Schwäbisch Hall</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/grand-beguinage-leuven" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    鲁
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">鲁汶大贝居安会院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Grand Beguinage of Leuven</p>
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
