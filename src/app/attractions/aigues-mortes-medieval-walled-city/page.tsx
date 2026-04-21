import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '艾格莫尔特十字军古城 Aigues-Mortes｜漫步法国保存最完好的中世纪城墙，追寻圣路易王的远征起点 - 最佳欧洲景点',
  description: '车子还在平坦的卡马格湿地的公路上开着，远远地，你就能看到它——像是一副被孩子遗忘在滩涂上的巨大灰色积木，方方正正，棱角分明，突兀而又固执地矗立在地平线上。那种第一眼的震撼很直接：这不是自然生长出来的城镇，这是被人类的意志和几何学强行“放置”在这里的。当你穿过盐沼，走近它，高达十米的城墙压迫感扑面而来...',
}

export default function AiguesMortesMedievalWalledCityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '法国', href: '/destinations/france' },
            { label: '艾格莫尔特十字军古城', href: '/attractions/aigues-mortes-medieval-walled-city' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`艾格莫尔特十字军古城・Aigues-Mortes・法国・艾格莫尔特`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子还在平坦的卡马格湿地的公路上开着，远远地，你就能看到它——像是一副被孩子遗忘在滩涂上的巨大灰色积木，方方正正，棱角分明，突兀而又固执地矗立在地平线上。那种第一眼的震撼很直接：这不是自然生长出来的城镇，这是被人类的意志和几何学强行“放置”在这里的。当你穿过盐沼，走近它，高达十米的城墙压迫感扑面而来，巨大的“护城河门”像一张沉默的嘴。空气中弥漫着淡淡的、咸涩的气味，来自不远处粉红色的盐田和广阔的湿地，风穿过城墙垛口时发出“呜呜”的低吟，那是几百年来不变的背景音。
走进城门，时光仿佛被城墙裁剪成了另一个形状。里面是另一个世界：笔直的街道呈严格的棋盘格布局，所有的房子都谦卑地待在城墙划定的方框里。阳光在蜂蜜色的石灰岩墙壁上移动，投下锐利而清晰的阴影。这里没有迷路的风险，因为街道尽头永远是另一段城墙或一座塔楼。当地人的生活节奏似乎也被这方正的结构驯服了，显得不慌不忙。你在面包店外能闻到刚出炉的“富加斯”面包的酵母香，咖啡馆的露天座位上，老人们玩着滚球游戏，金属球撞击的清脆声响在小广场上回荡。这里的核心魅力，就是一种极其罕见的“完整性”——你走进的不是一个景点，而是一整个被原样封存的中世纪逻辑。
然而，最打动人的反差在于，这座为战争和远征而生的铁血堡垒，如今内部却充满了一种南法的慵懒生活气。坚硬的军事外壳，包裹着一个柔软的生活内核。你可以抚摸那些被海风和时光打磨得温润的石头，想象1270年那个夏天，国王路易九世和他的骑士们就是从这里整装登船，带着对天国的狂热驶向未知的东方。那种历史的重量，不是陈列在玻璃柜里，而是弥散在你呼吸的空气中，踩在你脚下的每一块石板上。当傍晚的夕阳把整座城墙染成金红色，你站在城墙上，一边是城内温暖的灯火与人声，一边是城外无垠的、泛着紫光的盐沼与湿地，你会瞬间明白，艾格莫尔特守护的，从来不只是领土，更是一段关于信仰、野心与人类工程学奇迹的永恒记忆。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子还在平坦的卡马格湿地的公路上开着，远远地，你就能看到它——像是一副被孩子遗忘在滩涂上的巨大灰色积木，方方正正，棱角分明，突兀而又固执地矗立在地平线上。那种第一眼的震撼很直接：这不是自然生长出来的城镇，这是被人类的意志和几何学强行“放置”在这里的。当你穿过盐沼，走近它，高达十米的城墙压迫感扑面而来，巨大的“护城河门”像一张沉默的嘴。空气中弥漫着淡淡的、咸涩的气味，来自不远处粉红色的盐田和广阔的湿地，风穿过城墙垛口时发出“呜呜”的低吟，那是几百年来不变的背景音。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进城门，时光仿佛被城墙裁剪成了另一个形状。里面是另一个世界：笔直的街道呈严格的棋盘格布局，所有的房子都谦卑地待在城墙划定的方框里。阳光在蜂蜜色的石灰岩墙壁上移动，投下锐利而清晰的阴影。这里没有迷路的风险，因为街道尽头永远是另一段城墙或一座塔楼。当地人的生活节奏似乎也被这方正的结构驯服了，显得不慌不忙。你在面包店外能闻到刚出炉的“富加斯”面包的酵母香，咖啡馆的露天座位上，老人们玩着滚球游戏，金属球撞击的清脆声响在小广场上回荡。这里的核心魅力，就是一种极其罕见的“完整性”——你走进的不是一个景点，而是一整个被原样封存的中世纪逻辑。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，最打动人的反差在于，这座为战争和远征而生的铁血堡垒，如今内部却充满了一种南法的慵懒生活气。坚硬的军事外壳，包裹着一个柔软的生活内核。你可以抚摸那些被海风和时光打磨得温润的石头，想象1270年那个夏天，国王路易九世和他的骑士们就是从这里整装登船，带着对天国的狂热驶向未知的东方。那种历史的重量，不是陈列在玻璃柜里，而是弥散在你呼吸的空气中，踩在你脚下的每一块石板上。当傍晚的夕阳把整座城墙染成金红色，你站在城墙上，一边是城内温暖的灯火与人声，一边是城外无垠的、泛着紫光的盐沼与湿地，你会瞬间明白，艾格莫尔特守护的，从来不只是领土，更是一段关于信仰、野心与人类工程学奇迹的永恒记忆。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`艾格莫尔特十字军古城`} />
                <InfoRow label="英文名称" value={`Aigues-Mortes`} />
                <InfoRow label="正式名称" value={`Aigues-Mortes`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`艾格莫尔特`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座城是法国国王“圣路易”路易九世为发起十字军东征而在地中海沿岸建造的全新港口与军事要塞，是法国王室在地中海的第一个直接出海口。`} />
                <InfoRow label="建筑特色" value={`一座近乎完美的几何方形中世纪防御城市，被超过1.6公里长的、带有无数塔楼和雄堞的完整石灰岩城墙严丝合缝地包围。`} />
                <InfoRow label="建筑风格" value={`13世纪纯粹的中世纪军事建筑风格，深受当时十字军城堡设计的影响，结构严谨，功能至上。`} />
                <InfoRow label="文化价值" value={`它是13世纪法国王室权力向南方扩张、十字军运动以及中世纪城市规划的鲜活化石，见证了信仰、野心与海洋的交汇。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城墙及康斯坦斯塔全年开放，具体时间随季节变化。夏季（4月至9月）通常为上午10:00至晚上7:00；冬季（10月至3月）缩短为上午10:00至下午5:00左右。部分塔楼可能轮流维护关闭。古城内的街道、广场和商店则可自由通行。节假日如圣诞节和元旦可能全天关闭。`} />
              <InfoRow label="门票价格" value={`进入古城本身免费。登临全长1.6公里的完整城墙及康斯坦斯塔需要购票。成人票价约为9欧元。优惠票价（学生、青少年、团体）约为7欧元。7岁以下儿童免费。家庭套票通常可用。门票可在主城门“护城河门”旁的售票处或官方网站购买。`} />
              <InfoRow label="地址" value={`Place Saint-Louis, 30220 Aigues-Mortes, France`} />
              <InfoRow label="交通方式" value={`最近的国际机场是尼姆-阿尔勒-卡马格机场或蒙彼利埃地中海机场，距离均约40-50分钟车程。最便捷的公共交通枢纽是尼姆火车站。从尼姆火车站乘坐TER（区域快铁）约30分钟可到达“Aigues-Mortes”站，班次每小时约1-2班。从火车站步行约15分钟即可抵达古城主城门。若自驾，从尼姆或蒙彼利埃沿A9高速公路驶出，有清晰路标，古城外设有多个大型收费停车场（如Porte de la Gardette停车场），停车后步行进入古城。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事得从一位一心想要收复圣地的国王说起。13世纪中叶，法国的国王路易九世，也就是后来被封为“圣路易”的那位，是一个虔诚到了骨子里的基督徒。他发动过十字军东征，却失败了，甚至自己被俘。回来之后，收复耶路撒冷的梦想不仅没熄灭，反而越烧越旺。但他面临一个尴尬的问题：作为法国国王，他在地中海沿岸没有一寸属于自己的港口。他的领土止于内陆，出海要靠热那亚或马赛这些商业共和国，既不方便，更不体面。于是，一个宏大的计划在他心中成型：他要建造一个完全属于王室的、全新的地中海港口。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`他看中了这片地方，当时这里还只是罗讷河三角洲附近一片被泻湖和沼泽环绕的荒凉之地。地名“Aigues-Mortes”在奥克语里就是“死水”的意思。但这“死水”对于路易来说却是活路——这里的泻湖通过狭窄水道与海相连，易于防守，而且远离那些桀骜不驯的南方领主势力范围。1248年，工程浩荡开始。这不是扩建一个村庄，而是从零开始，在一片沼泽上凭空建造一座符合最先进军事理念的要塞城市。先建造的是那座最高的康斯坦斯塔，作为灯塔和指挥部。然后，以它为核心，划出一个完美的长方形，竖起高达的城墙。每一块石头都从远处运来，这项工程耗费了王国巨大的财力物力，是中世纪的国家级项目。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1270年，城墙还未完全合拢，但路易九世已经等不及了。他的十字军舰队从这座新城启航，目标直指北非的突尼斯。然而，这次远征成了悲剧。瘟疫在军中蔓延，路易九世本人也病死在异国的土地上，再也没能回到他寄予厚望的港口。他的去世，仿佛也带走了这座城市的“天命”。尽管城墙最终在接下来的几十年里由他的儿子菲利普三世完工，但艾格莫尔特的黄金时代似乎还没开始就结束了。随着罗讷河泥沙淤积，港口逐渐被堵塞，它作为海运枢纽的使命匆匆落幕。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`不过，城市并没有死去，而是转型了。失去了军事和港口功能后，它找到了新的生命线——盐。周边广阔的盐沼成为了财富的来源。那些曾用来眺望敌舰的塔楼，后来可能被盐商用作仓库。坚不可摧的城墙，保护的不再是士兵和战马，而是堆积如山的洁白盐晶。在随后的宗教战争时期，它作为新教徒的重要据点又经历了一次血与火的洗礼。当一切都尘埃落定，它便慢慢沉静下来，像一只收起爪牙的巨兽，在时光中睡去，直到现代旅游业将它重新唤醒。它的历史，就像其建筑一样，是分层的：最底层是国王的宏图与信仰，中间是贸易的务实与坚韧，最表层，则是今天弥漫在街角的咖啡香和游客的惊叹。每一层都真实可触。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受艾格莫尔特的灵魂，建议安排一整天的悠闲时光。最好在上午九点左右抵达，这时旅游大巴还未涌入，阳光角度也好，适合拍照。游览节奏应张弛有度，遵循“由外至内，登高俯瞰，深入街巷”的原则。上午先专注攀登和漫步城墙，这是古城的骨骼与盔甲；中午在城内找个地方享用午餐，感受生活气息；下午则穿梭于小巷和广场，探索细节，最后在日落时分再次登上城墙或找一处高点，看金光洒满盐田。这样的安排能让你既领略其宏大的军事规划，又品味到它细腻的生活肌理。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季卡马格地区的蚊虫非常凶猛，务必携带强效驱蚊水。穿一双极其舒适的运动鞋，因为城墙上的石阶陡峭且不规则，城内石板路也凹凸不平。尽量避免在盛夏正午暴晒下攀登毫无遮阴的城墙，很容易中暑。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主城门“护城河门”进入，立刻右转登上城墙，开始顺时针漫步，让高耸的塔楼和连绵的垛口为你讲述防御的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要爬上最高的康斯坦斯塔，在它的顶层的观景台转一圈，将整个完美的方形城市和外面粉红与绿色交错的盐沼湿地尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城墙上下来后，迷失在那些以圣徒名字命名的笔直街道里，比如圣路易路，寻找那些门上雕刻着古老纹章的石质老宅。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`去中心的市场广场，坐在梧桐树荫下的咖啡馆，点一杯Pastis茴香酒，看着滚球游戏和来往的当地人。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观城墙下的圣路易教堂，虽然内部朴实无华，但感受一下当年远征军出发前在此祈祷的肃穆氛围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着城墙根走走，触摸那些粗糙而温暖的石灰岩，寻找石头上可能留下的古老刻痕或镶嵌的贝壳化石。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果季节合适，租一辆自行车或参加一个小型旅行团，走出古城，去探索周边那一片片色彩魔幻的粉红色盐田和卡马格湿地的野生白马蹄。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`盐沼全景位`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，驾车或步行到古城西北方向的D62公路旁，可以拍摄到完整的方形古城矗立在广阔湿地中的孤独而雄伟的全景，粉色的盐田作为前景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城墙漫步道视角`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在北面城墙的步行道上，用长焦镜头捕捉下方街道上行人骑车或居民在窗前浇花的生动瞬间，形成军事与生活的对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`康斯坦斯塔顶层环拍`}</h4>
                  <p className="text-sm text-gray-700">{`登上塔顶后，以垛口为框架，拍摄城外不同方向的景色——东面的现代小镇、南面的运河与船只、西面无垠的湿地，展现古城与环境的对话。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`“护城河门”内部仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射时，站在城门洞内向上拍摄，可以看到光线如利剑般切入厚重的拱门，凸显建筑的纵深与力量感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`小巷光影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，走进东西走向的小巷，等待阳光将铸铁阳台的花影或邻居家晾晒的衣物影子投射在蜜色墙壁上，拍摄充满生活气息的构图。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用广角镜头（如16-35mm）在城墙上拍摄能更好地展现其绵延的线条和几何感。拍摄当地居民时请务必先微笑示意并获得同意，尊重他们的隐私。无人机飞行在古城上空有严格限制，需提前查询法国相关航空法规。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`古城内沉浸式体验`}</h4>
                  <p className="text-sm text-blue-800">{`选择城墙内由老房子改造的精品酒店或民宿，例如带有小小内庭院的住所，晚上等一日游的游客散去后，你就能独享这座中世纪空城的宁静与神秘。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`盐田景观民宿`}</h4>
                  <p className="text-sm text-green-800">{`住在古城外不远处，能看到粉色盐田和湿地的独栋民宿，早晨在露台上享用早餐，看火烈鸟从湿地起飞，背景就是古老的城墙剪影。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`卡马格乡村风情`}</h4>
                  <p className="text-sm text-yellow-800">{`如果想要更野性的体验，可以选择几公里外卡马格湿地公园附近的乡村旅馆，住在真正的农庄里，与白马和黑牛为邻，晚上看璀璨的星空。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`现代舒适之选`}</h4>
                  <p className="text-sm text-purple-800">{`对于需要更多现代化设施和停车便利的旅行者，古城入口外步行五分钟范围内的现代风格酒店是不错的选择，既能方便游览，又能保障舒适的休息。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古城内的住宿数量有限且非常抢手，尤其是旺季（7-8月），务必提前数月预订。住在城内虽氛围绝佳，但需注意老房子隔音可能较差，且车辆无法进入，需要拖着行李走一段石板路。选择城外住宿则一定要确认是否有方便的停车场。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开艾格莫尔特很久以后，我脑海里最清晰的画面，不是它那令人惊叹的几何轮廓，而是黄昏时站在城墙上看到的那个瞬间：城内，万家灯火初上，炊烟夹杂着晚餐的香气袅袅升起；城外，无尽的盐沼在暮色中变成一片紫色的、泛着微光的寂静之海。这道城墙，仿佛成了两个平行世界的分界线，一边是延续了数百年的、温暖琐碎的人间烟火，另一边则是永恒的自然与历史的苍茫。它让我明白，最好的历史遗迹，从来不是冰冷僵化的标本，而是一个依然在呼吸的有机体。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求快速和碎片化的时代，艾格莫尔特像一个固执的逆向存在。它用自己完整的方形身躯，拒绝被稀释，拒绝变得模糊。它告诉你，历史可以如此具体、如此触手可及——具体到一块石头风化出的凹坑，具体到一条笔直得不容置疑的街道。它没有巴黎的繁华，没有蔚蓝海岸的炫目，但它给予旅人的，是一种罕见的“确定感”。在这里，你能真切地触摸到一个时代的思想脉络，感受到人类曾如何用巨大的信念和工程能力，在荒原上塑造自己的梦想。对于每一位渴望深度游的灵魂来说，艾格莫尔特不仅仅是一个目的地，更是一次关于时间、空间与人类意志的沉思之旅。它值得你专程前往，花上一整天，什么也不做，只是慢慢地走，静静地看，让这座石头堡垒，把它沉默的故事，刻进你的记忆里。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bourges-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布尔日大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bourges Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/les-baux-de-provence" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莱
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莱博德普罗旺斯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Les Baux-de-Provence</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/roussillon" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    鲁
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">鲁西永（红土城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Roussillon</p>
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
