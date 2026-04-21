import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '明德尔海姆 Mindelheim｜沉睡在巴伐利亚的中世纪宝石，亲历骑士与节庆的活历史 - 最佳欧洲景点',
  description: '当你第一眼从高速公路上瞥见明德尔海姆时，它就像童话书里掉出来的一页插图——一整圈赭石色的城墙，像母亲温暖的手臂，紧紧环抱着城内一片错落有致的红色屋顶。车子驶近，那高耸的、戴着“尖帽子”的塔楼越来越清晰。把车停在城墙外，推开一扇厚重的、吱呀作响的木门（他们管那叫“Tor”），你就一脚踏入了另一个时空。',
}

export default function MindelheimMedievalTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '德国', href: '/destinations/europe' },
            { label: '明德尔海姆', href: '/destinations/europe' },
            { label: '明德尔海姆', href: '/attractions/mindelheim-medieval-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`明德尔海姆・Mindelheim・德国・明德尔海姆`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你第一眼从高速公路上瞥见明德尔海姆时，它就像童话书里掉出来的一页插图——一整圈赭石色的城墙，像母亲温暖的手臂，紧紧环抱着城内一片错落有致的红色屋顶。车子驶近，那高耸的、戴着“尖帽子”的塔楼越来越清晰。把车停在城墙外，推开一扇厚重的、吱呀作响的木门（他们管那叫“Tor”），你就一脚踏入了另一个时空。
瞬间，世界安静了下来，取代引擎声的是你自己的脚步声，敲打在光滑的、被无数代人磨得发亮的鹅卵石上。空气里有一股好闻的复合气味：老木头房子里飘出的烤面包的焦香，混合着从附近花店溢出的清新，还有一丝丝石墙上苔藓的湿润泥土气。阳光斜斜地切过狭窄的巷弄，在粉刷成米黄、淡粉或薄荷绿的外墙上投下深深浅浅的光影。偶尔有 locals 骑着自行车叮铃铃地经过，朝你友好地点点头。这里的核心魅力，不在于某个惊世骇俗的单一建筑，而在于这种无比完整、和谐且仍在呼吸的中世纪生活氛围。
而这份宁静，每三年会被一场史诗级的狂欢彻底点燃。那就是弗伦茨贝格节。想象一下，平时静谧的街道突然涌出上千名身穿手工缝制中世纪服装的“居民”：盔甲锃亮的骑士牵着战马，衣裙华贵的贵妇摇着扇子，铁匠在临时搭起的炉子前敲打，吉普赛舞者随着风笛声旋转。空气里弥漫着烤肉的油烟、蜂蜜酒的甜腻和人群兴奋的热浪。这不仅仅是“角色扮演”，而是整个城镇集体进行的一场穿越时空的深度梦游，其规模与考究程度，足以让任何历史爱好者热泪盈眶。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当你第一眼从高速公路上瞥见明德尔海姆时，它就像童话书里掉出来的一页插图——一整圈赭石色的城墙，像母亲温暖的手臂，紧紧环抱着城内一片错落有致的红色屋顶。车子驶近，那高耸的、戴着“尖帽子”的塔楼越来越清晰。把车停在城墙外，推开一扇厚重的、吱呀作响的木门（他们管那叫“Tor”），你就一脚踏入了另一个时空。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "瞬间，世界安静了下来，取代引擎声的是你自己的脚步声，敲打在光滑的、被无数代人磨得发亮的鹅卵石上。空气里有一股好闻的复合气味：老木头房子里飘出的烤面包的焦香，混合着从附近花店溢出的清新，还有一丝丝石墙上苔藓的湿润泥土气。阳光斜斜地切过狭窄的巷弄，在粉刷成米黄、淡粉或薄荷绿的外墙上投下深深浅浅的光影。偶尔有 locals 骑着自行车叮铃铃地经过，朝你友好地点点头。这里的核心魅力，不在于某个惊世骇俗的单一建筑，而在于这种无比完整、和谐且仍在呼吸的中世纪生活氛围。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而这份宁静，每三年会被一场史诗级的狂欢彻底点燃。那就是弗伦茨贝格节。想象一下，平时静谧的街道突然涌出上千名身穿手工缝制中世纪服装的“居民”：盔甲锃亮的骑士牵着战马，衣裙华贵的贵妇摇着扇子，铁匠在临时搭起的炉子前敲打，吉普赛舞者随着风笛声旋转。空气里弥漫着烤肉的油烟、蜂蜜酒的甜腻和人群兴奋的热浪。这不仅仅是“角色扮演”，而是整个城镇集体进行的一场穿越时空的深度梦游，其规模与考究程度，足以让任何历史爱好者热泪盈眶。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`明德尔海姆`} />
                <InfoRow label="英文名称" value={`Mindelheim`} />
                <InfoRow label="正式名称" value={`Mindelheim`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`明德尔海姆`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座被完整城墙环绕的古镇，是南德保存最完好的中世纪城镇典范之一，其每三年一次、规模堪称欧洲之最的弗伦茨贝格节，让它成为活生生的历史教科书。`} />
                <InfoRow label="建筑特色" value={`鹅卵石街道、色彩斑斓的桁架房屋、巍峨的城堡与教堂，以及近一公里长的、带有防御塔楼的完整中世纪城墙，共同构成了一幅立体的中世纪城市画卷。`} />
                <InfoRow label="建筑风格" value={`以德国南部典型的哥特式与文艺复兴风格为主，混搭后期巴洛克元素，展现了从15世纪到18世纪持续繁荣的建筑演变。`} />
                <InfoRow label="文化价值" value={`它不仅是一个静态的历史遗址，更是一个持续传承骑士精神与中世纪社群文化的活态社区，节庆是其文化生命力的集中爆发。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城本身全天开放。城墙、塔楼及主要历史建筑（如圣斯蒂芬教堂、弗伦茨贝格博物馆）的开放时间一般为夏季（4月-10月）上午10点至下午5点，周一闭馆；冬季（11月-3月）开放时间缩短，通常为下午1点至4点，且部分设施可能关闭。最重要的弗伦茨贝格节（Frundsbergfest）每三年举办一次（下次预计为2025年7月），节庆期间全城变身为露天剧场，各类活动从早持续到深夜。`} />
              <InfoRow label="门票价格" value={`进入古城区域免费。登上市政厅塔楼或参观弗伦茨贝格博物馆需购票，成人票约4-5欧元，学生及团体有优惠。弗伦茨贝格节期间，进入主节庆区域（如骑士营地、主舞台）需购买节日通票，一日票约15-20欧元，提前在线预订通常有折扣。`} />
              <InfoRow label="地址" value={`Stadt Mindelheim, Maximilianstraße 1, 87719 Mindelheim, Germany`} />
              <InfoRow label="交通方式" value={`从慕尼黑国际机场出发，最便捷的方式是乘坐火车。在机场火车站搭乘区域快车（RE）或区域列车（RB）前往慕尼黑主火车站（约45分钟），然后换乘开往林道方向的火车，在明德尔海姆站下车（车程约1小时15分钟）。从火车站步行至古城中心仅需10分钟。火车班次频繁，每小时至少有1-2班。建议使用德国铁路（DB）App提前查询和购票，购买巴伐利亚州票（Bayern-Ticket）对于多人团体出行非常划算。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "明德尔海姆的故事，得从那条从它身边静静流过的明德尔河说起。早在罗马时期，这里就是一条重要的贸易路线上的驿站。但真正让它登上历史舞台的，是中世纪那些热衷于筑城和征战的贵族们。1270年，它被正式授予城市权利，那圈保护性的城墙开始一砖一瓦地垒砌起来，为之后的繁荣与纷争奠定了舞台。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市的命运，与一个显赫的家族——弗伦茨贝格家族——牢牢绑定。尤其是那位传奇人物：格奥尔格·冯·弗伦茨贝格（Georg von Frundsberg，1473-1528）。他被誉为“德意志雇佣兵之父”，是神圣罗马帝国皇帝马克西米利安一世和查理五世麾下最著名的指挥官。他的影响力如此之大，以至于皇帝将明德尔海姆作为封地赐予他。弗伦茨贝格不仅是一位猛将，也是城市的建设者。他扩建了城堡，加强了防御，让明德尔海姆成为地区内一个坚固的权力中心。今天城市里处处是他的影子：广场上的雕像、博物馆的珍藏，以及那个以他命名的、响彻欧洲的节日。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，中世纪晚期的欧洲少有宁日。明德尔海姆在三十年代战争中经历了洗礼，曾被瑞典军队占领。战火带来了破坏，但也留下了重建的痕迹。你会发现，一些房屋的底层是厚重的石墙（哥特式），而上层却是精美的木桁架与彩绘（文艺复兴式），这就是在废墟上一次次重生、叠加的历史年轮。18世纪，随着巴伐利亚选帝侯的统治，巴洛克之风也吹进了这座小城，为教堂的内部增添了华丽的石膏装饰和绚烂的壁画，形成了一种有趣的风格混搭。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光流转到现代，明德尔海姆幸运地躲过了二战的大规模破坏。战后，当地人怀着巨大的热情和耐心，对古城进行了细致入微的修复。他们修复的不只是建筑，更是一种生活方式。于是，在20世纪70年代，为了纪念那位伟大的儿子格奥尔格·冯·弗伦茨贝格，也为了重新激活社区的历史认同感，第一届弗伦茨贝格节诞生了。谁能想到，这个起初地方性的活动，如今已成长为拥有超过1500名参与者和数万游客的欧洲顶级历史重演盛会。它让历史从书本和博物馆里走出来，在每一个敲打铁砧的火花中，在每一杯被举起的锡制酒杯里，变得可触摸、可品尝。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天时间给明德尔海姆，才能真正体会它的日与夜、静与动。最佳抵达时间是上午9点左右，这时阳光正好，游客尚稀，你能独享城墙的宁静。上午用2-3小时漫步古城，探索核心建筑；中午在广场找家餐馆享用巴伐利亚午餐；下午可以深入参观博物馆，或者沿着城墙走完一圈；如果恰逢节日期间，那么整个下午和晚上都请交给那些令人目不暇接的游行、表演和市集。节奏宜慢，多坐在街角观察，你会发现最生动的风景往往不是景点，而是当地人如何与这座古城共生。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿一双绝对舒适、适合长时间在鹅卵石路上行走的鞋，这是探索这里最基本也最重要的装备。
非节庆日来访格外宁静，但若想体验终极狂欢，务必提前至少一年查询弗伦茨贝格节的具体日期并预订住宿，届时全城房间会迅速售罄。
即使在夏季，老城建筑内部和清晨傍晚也可能较凉，带一件薄外套总是明智的。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从最大的上城门（Obertor）进入，立刻让自己迷失在由碎石路和彩色房子构成的、如同迷宫般迷人的主街和小巷网络里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`务必爬上市政厅的塔楼，在狭窄的旋转石阶尽头，收获一个将红色屋顶海洋、远方教堂尖塔和如绿色丝带般环绕的城墙尽收眼底的360度全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进圣斯蒂芬教区教堂，让你的眼睛适应昏暗，然后惊叹于从华丽巴洛克祭坛到古朴哥特式拱顶的视觉交响，静静听一场管风琴排练。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城市最高处的弗伦茨贝格城堡（现在部分作为博物馆）脚下，找到格奥尔格骑士持剑远眺的青铜雕像，感受几个世纪前这里作为军事重镇的威严气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`将你的脚步引向市集广场（Marktplatz），坐在露天咖啡座的阳伞下，看文艺复兴风格的市政厅立面在阳光下变幻色彩，融入当地人闲聊喝咖啡的日常节奏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一段保存最完好的城墙（比如南面），用手触摸那些冰冷粗糙、带有历史刻痕的砖石，沿着城墙步道散步，想象哨兵曾经在此巡逻的景象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间允许，钻进弗伦茨贝格博物馆，那里陈列的古老盔甲、武器和日常生活器物，会为你脑海中关于这座城市的所有想象填充真实的细节。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐选择一家藏在巷子深处、拥有拱顶地窖的传统餐厅，在烛光下品尝施瓦本地区风味的面疙瘩（Spätzle）和烤猪肘，为这一天画上完美的味觉句号。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`上城门内仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点的阳光会以低角度穿过城门洞，照亮门洞内壁的石砖纹理，此时以行人为剪影前景，能拍出极具纵深感和故事感的画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`市政厅塔楼顶全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前半小时登塔，柔和的光线会让整个古城的屋顶呈现出温暖的砖红色，用广角镜头可以捕捉到城墙环绕城市的完美几何形态。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣斯蒂芬教堂彩窗光影`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个晴朗的正午时分，走进教堂侧面小礼拜堂，等待阳光穿透彩绘玻璃，在地面或长椅上投下斑斓梦幻的光影图案。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`市集广场街角`}</h4>
                  <p className="text-sm text-gray-700">{`从西南角的小巷口望向广场上的市政厅和喷泉，利用两侧的桁架房屋作为自然画框，构图能完美体现中世纪广场的紧凑与生动。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`节庆期间骑士营地`}</h4>
                  <p className="text-sm text-gray-700">{`在弗伦茨贝格节期间，黄昏时分前往城外的骑士营地，利用帐篷内透出的暖色灯火与深蓝色天空的对比，拍摄营地的生活气息，营造出电影般的场景感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄当地居民或节日参与者时，请务必先微笑并礼貌询问，获得同意后再拍摄，这是对这份活文化遗产的基本尊重。`}</li>
                <li>• {`老城内部光线复杂，建议携带大光圈镜头，以便在不使用闪光灯（许多室内场所禁止使用）的情况下，捕捉那些幽暗角落里的细节之美。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温馨家庭旅馆`}</h4>
                  <p className="text-sm text-blue-800">{`住在城墙内一栋有400年历史的桁架房屋里，老板娘会为你准备丰盛的巴伐利亚早餐，晚上还能在开满天竺葵的小阳台上看星星。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色骑士酒店`}</h4>
                  <p className="text-sm text-green-800">{`由古城内一栋贵族宅邸改建，房间以中世纪风格装饰，甚至提供仿古睡袍，让你从入住那一刻起就沉浸在中世纪氛围中。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`现代舒适公寓`}</h4>
                  <p className="text-sm text-yellow-800">{`位于古城边缘一座经过智能改造的历史建筑内，既保留了木梁和拱顶的特色，又配备了现代化的厨房和设施，适合家庭或长住。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`静谧郊区度假屋`}</h4>
                  <p className="text-sm text-purple-800">{`如果追求绝对宁静，可以选择位于城外明德尔河畔的乡村度假屋，每天骑着主人提供的自行车，穿过田园风光进入古城，体验两种生活的切换。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "节庆期间（每三年一次）的住宿极其紧俏，价格也会飙升，务必至少提前9-12个月预订。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "非节庆时段，建议选择住在城墙内，虽然可能房间略小，但能最大程度体验古城的清晨与夜晚的魔力，那种推窗即是历史的沉浸感无可替代。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开明德尔海姆许久后，我脑海里反复回响的，不是某座建筑的样子，而是一种“完整感”。在这个碎片化的时代，我们习惯了看到历史的残垣断壁，或是被过度商业化、剥离了灵魂的古镇空壳。但明德尔海姆不同。它像一个被时光精心保存下来的、依然在自主呼吸的微观宇宙。它的城墙是物理的边界，更是心灵的结界，将现代的喧嚣浮躁温柔地挡在外面，守护着里面那份从容不迫的生活节奏和深厚的历史记忆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更打动我的，是这里的人对待历史的方式。它不是束之高阁的文物，而是可以穿上身、可以演出来、可以举杯欢庆的活生生的传统。每三年一次，全城人倾情投入的那场盛大“梦游”，是一次集体的文化寻根，也是对后代最生动历史教育。这让我思考，什么才是真正的文化传承？或许就是这种让历史融入血脉，并在当下的生活中找到激情绽放的出口。所以，无论你是否能赶上那万人空巷的节日，都值得来明德尔海姆走走。在这里，你会触摸到一种历史的温度，它告诉你，过去从未真正过去，它就在每一块被脚步磨光的石头里，在每一个平常而又不平常的市集日的晨曦中，静静等待着与你共鸣。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/three-rivers-passau" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    帕
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">帕绍（三河交汇之城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Passau</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ribeauville-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    里
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">里博维莱</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ribeauvillé</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/buedingen" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    比
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">比丁根</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Büdingen</p>
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
