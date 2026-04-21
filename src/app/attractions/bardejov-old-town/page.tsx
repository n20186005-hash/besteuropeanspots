import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '巴尔代约夫老城 Bardejov｜被时间遗忘的完美中世纪广场与木教堂奇观 - 最佳欧洲景点',
  description: '当我从那条略显安静的街道拐进拉德尼奇内广场时，时间仿佛“咔嗒”一声被拧回了五百年前。第一眼看到的不是某个孤立的建筑，而是一整个被完整包裹起来的、巨大的三角形空间，那种扑面而来的完整感和宁静感，瞬间让人屏住了呼吸。阳光正斜斜地洒在广场周围那些鹅黄、浅粉、薄荷绿的老房子立面上，它们的山墙轮廓柔和，窗棂雕...',
}

export default function BardejovOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '斯洛伐克', href: '/destinations/slovakia' },
            { label: '巴尔代约夫老城', href: '/attractions/bardejov-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`巴尔代约夫老城・Bardejov・斯洛伐克・巴尔代约夫`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当我从那条略显安静的街道拐进拉德尼奇内广场时，时间仿佛“咔嗒”一声被拧回了五百年前。第一眼看到的不是某个孤立的建筑，而是一整个被完整包裹起来的、巨大的三角形空间，那种扑面而来的完整感和宁静感，瞬间让人屏住了呼吸。阳光正斜斜地洒在广场周围那些鹅黄、浅粉、薄荷绿的老房子立面上，它们的山墙轮廓柔和，窗棂雕花精致，不像许多欧洲广场那样气势逼人，倒像一幅被仔细收藏、色泽依旧温润的古画。空气里有种干净的、混合着远处森林气息的微风，偶尔传来市政厅塔楼沉稳的报时钟声，除此之外，便是近乎奢侈的宁静。几个老人坐在长椅上低声交谈，声音散在空旷的广场石砖地上，几乎听不见。
这座老城最打动人的，正是这种“活着的历史”气息。它没有被做成一个仅供参观的标本，广场周围的拱廊下，开着面包店、咖啡馆、小书店和手工艺品店。上午，你能闻到新鲜烘焙的烟囱卷面包的甜香；午后，咖啡馆外的遮阳棚下会坐满悠闲喝着啤酒的当地人。那个被誉为斯洛伐克最美之一的圣埃吉迪乌斯教堂，就静静地矗立在广场一端，它不仅是地标，更是小镇生活节奏的基准——钟声召集礼拜，也宣告着一天的时辰。你会发现，居民们骑着自行车穿过古老的城门，孩子们在几百年前商人走过的石板路上追逐，历史和日常在这里没有丝毫隔阂。
而它的魅力远不止于这座完美的广场。当你走到城墙脚下，抚摸那些厚重而斑驳的石头，或者前往城郊那片宁静的露天博物馆，看到那些从喀尔巴阡山区各处迁移来的、顶着洋葱头或陡峭金字塔形屋顶的木教堂时，你才会真正触碰到这片土地的灵魂。那些深棕色的木教堂，不用一根铁钉，却巍然屹立了几个世纪，里面藏着色彩斑斓的圣像壁画，混合着松木、旧蜡和虔敬的独特气味。从广场的拉丁文明到木教堂的东正教世界，只需步行二十分钟，这种文化的层叠与交融，才是巴尔代约夫给予旅人最珍贵的礼物。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当我从那条略显安静的街道拐进拉德尼奇内广场时，时间仿佛“咔嗒”一声被拧回了五百年前。第一眼看到的不是某个孤立的建筑，而是一整个被完整包裹起来的、巨大的三角形空间，那种扑面而来的完整感和宁静感，瞬间让人屏住了呼吸。阳光正斜斜地洒在广场周围那些鹅黄、浅粉、薄荷绿的老房子立面上，它们的山墙轮廓柔和，窗棂雕花精致，不像许多欧洲广场那样气势逼人，倒像一幅被仔细收藏、色泽依旧温润的古画。空气里有种干净的、混合着远处森林气息的微风，偶尔传来市政厅塔楼沉稳的报时钟声，除此之外，便是近乎奢侈的宁静。几个老人坐在长椅上低声交谈，声音散在空旷的广场石砖地上，几乎听不见。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座老城最打动人的，正是这种“活着的历史”气息。它没有被做成一个仅供参观的标本，广场周围的拱廊下，开着面包店、咖啡馆、小书店和手工艺品店。上午，你能闻到新鲜烘焙的烟囱卷面包的甜香；午后，咖啡馆外的遮阳棚下会坐满悠闲喝着啤酒的当地人。那个被誉为斯洛伐克最美之一的圣埃吉迪乌斯教堂，就静静地矗立在广场一端，它不仅是地标，更是小镇生活节奏的基准——钟声召集礼拜，也宣告着一天的时辰。你会发现，居民们骑着自行车穿过古老的城门，孩子们在几百年前商人走过的石板路上追逐，历史和日常在这里没有丝毫隔阂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而它的魅力远不止于这座完美的广场。当你走到城墙脚下，抚摸那些厚重而斑驳的石头，或者前往城郊那片宁静的露天博物馆，看到那些从喀尔巴阡山区各处迁移来的、顶着洋葱头或陡峭金字塔形屋顶的木教堂时，你才会真正触碰到这片土地的灵魂。那些深棕色的木教堂，不用一根铁钉，却巍然屹立了几个世纪，里面藏着色彩斑斓的圣像壁画，混合着松木、旧蜡和虔敬的独特气味。从广场的拉丁文明到木教堂的东正教世界，只需步行二十分钟，这种文化的层叠与交融，才是巴尔代约夫给予旅人最珍贵的礼物。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`巴尔代约夫老城`} />
                <InfoRow label="英文名称" value={`Bardejov`} />
                <InfoRow label="正式名称" value={`Bardejov Town Conservation Reserve`} />
                <InfoRow label="国家" value={`斯洛伐克`} />
                <InfoRow label="城市" value={`巴尔代约夫`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`斯洛伐克东北部保存最完好的中世纪防御城镇典范，因其完整的城市肌理和独特的文化遗产被列入联合国教科文组织世界遗产名录。`} />
                <InfoRow label="建筑特色" value={`以巨大而完整的三角形主广场为核心，环绕着色彩柔和的文艺复兴与哥特式联排房屋，以及一座融合了晚期哥特式与文艺复兴元素的独特市政厅。`} />
                <InfoRow label="建筑风格" value={`以哥特式为基础，深受文艺复兴风格影响，并拥有珍贵的东正教木结构教堂建筑。`} />
                <InfoRow label="文化价值" value={`见证了中世纪匈牙利王国时期繁荣的贸易路线，是哥特文化与拉丁、东斯拉夫及犹太文化在此交汇融合的活化石。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城公共区域全天开放。主要室内景点（市政厅博物馆、圣埃吉迪乌斯教堂、木教堂等）开放时间一般为：夏季（5月至9月）周二至周日 9:00-17:00，冬季（10月至4月）周二至周日 9:00-16:00；周一通常闭馆。具体开放时间可能因季节和节日微调，建议出行前在当地旅游信息中心官网二次确认。`} />
              <InfoRow label="门票价格" value={`老城区免费进入。主要景点联票约10-12欧元，包含市政厅博物馆、圣埃吉迪乌斯教堂塔楼登顶、木教堂博物馆等。学生、老人及家庭有优惠票。单个景点门票约为3-5欧元。`} />
              <InfoRow label="地址" value={`Radničné námestie 48, 085 01 Bardejov, Slovakia`} />
              <InfoRow label="交通方式" value={`从最近的国际机场（波兰克拉科夫机场或斯洛伐克科希策机场）出发，最便捷的方式是乘坐火车或巴士。从科希策火车站乘坐直达火车前往巴尔代约夫，车程约1.5-2小时，班次每天约5-6班。从克拉科夫则有国际长途巴士，车程约3小时，需提前在线查询班次并预订。抵达巴尔代约夫火车站后，老城就在步行15-20分钟的范围内，沿途风景已很有小镇风情。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`巴尔代约夫的故事，始于一张来自国王的“特许状”。早在13世纪，这里就有了定居点，但真正的转折点是在1376年，匈牙利国王拉约什一世授予了它“自由皇家城镇”的地位。这张薄薄的羊皮纸，意味着免税贸易、自主司法和修建防御工事的权利，就像给一颗种子提供了最肥沃的土壤。很快，得益于它处在连接波罗的海与黑海的重要商路上，巴尔代约夫一跃成为繁荣的贸易中心。特别是它与强大的汉萨同盟建立了紧密联系，本地的亚麻布、呢绒和葡萄酒被运往远方，换回香料、毛皮和奢侈品。那时的广场上，想必挤满了来自德国、波兰、俄罗斯和更远地方的商人，各种语言混杂，钱币叮当作响。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`财富带来了建设的激情，我们今天看到的城市雏形就在14至16世纪的黄金时代奠定。巨大的三角形广场被规划出来，商人们竞相建造起华丽的住宅，既展示财力，也满足实用——底层的拱廊用于经营，上层用于居住。广场中央那座独一无二的阶梯状金字塔顶建筑，即旧市政厅，建于1505-1509年，它罕见地将市政功能（底层开放拱廊作为市场和法律审判地）与贵族府邸的优雅（上层文艺复兴式的凉廊和华丽装饰）结合于一体，它是城镇自治骄傲的实体象征。而广场尽头的圣埃吉迪乌斯教堂，从15世纪初开始不断扩建，最终拥有了11个哥特式祭坛和令人惊叹的内饰，成为精神的灯塔。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的浪潮总有起伏。17世纪，随着主要贸易路线的转移，经济开始衰退。更大的打击接踵而至：瘟疫的反复侵袭，以及18世纪一场毁灭性的大火，几乎将半个城市化为灰烬。许多文艺复兴式的房屋立面在那次火灾后重建，变成了我们今天看到的、更为简朴但色彩柔和的巴洛克风格。城镇的光芒黯淡了，它仿佛沉睡了过去，被新兴的工业城市抛在了后面。但塞翁失马，焉知非福。正是这种“停滞”，奇迹般地保护了它的中世纪格局免受现代化改造的破坏。城墙没有被拆毁，广场没有被拓宽，老房子没有被钢筋水泥取代。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`进入20世纪，特别是二战之后，人们才开始重新认识到这座“沉睡美人”的无价价值。精心的修复工程逐步展开，目标不是打造一个迪士尼式的布景，而是加固、还原，并让社区继续在其中生活。1986年，巴尔代约夫获得了联合国教科文组织的认可，成为世界文化遗产。这项荣誉不仅肯定了它砖石的价值，更肯定了它作为一个延续了数个世纪、融合了拉丁天主教、东正教和犹太文化的社区活态样本的价值。那些从周围村庄拯救搬迁而来的木教堂，被精心安置在城郊的露天博物馆，它们讲述着另一条关于信仰、迁徙和民间建筑智慧的故事线，与石头老城的故事交相辉映，构成了巴尔代约夫完整的历史叙事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天（约8-9小时）来沉浸式体验巴尔代约夫。最佳抵达时间是早上9点前，这时游客尚未涌入，晨光温柔地照亮广场，是拍照和感受宁静氛围的黄金时段。上午专注于老城核心区，细细品味广场、市政厅和教堂的内部。中午在广场拱廊下的本地餐厅享用午餐。下午先攀登教堂塔楼俯瞰全城，然后沿着保存完好的中世纪城墙漫步，最后前往城外的露天木教堂博物馆，那里的宁静与老城的庄严形成美妙对比。这样的节奏张弛有度，既能深入建筑细节，又能体会不同空间的文化层次。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周二至周日的上午10点到下午3点是团体游客相对集中的时间，教堂塔楼和博物馆内部可能会需要短暂排队，建议错峰。
参观木教堂博物馆时请注意，部分教堂内部空间非常小且地面不平，建议穿着舒适且便于穿脱的平底鞋（进入时常需脱鞋）。
老城地面多为古老石板路，拖行行李箱会非常困难且损坏路面，请务必在火车站或住宿处寄存大件行李。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一大早趁着空旷，先从狭窄的Kláštorská街走近广场，获得那份豁然开朗的初遇震撼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在旧市政厅的拱廊下转一圈，想象几个世纪前商人在这里交易、法官在此断案的热闹场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进圣埃吉迪乌斯教堂，让你的眼睛在昏暗光线中慢慢适应，然后逐一寻找那11座精美绝伦的晚期哥特式祭坛。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花点时间坐在广场边缘的长椅上，什么都不做，只是观察光影在彩色立面上移动，听钟声和偶尔响起的马蹄声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要鼓起勇气爬上圣埃吉迪乌斯教堂狭窄的螺旋石阶塔楼，在顶端将整个如模型般精致的三角形广场和红色屋顶的海洋尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从广场北侧穿过古老的城墙城门，沿着绿草如茵的城墙公园漫步，用手触摸那些冰冷而粗糙的防御工事巨石。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`留出至少两小时给城郊的露天博物馆，在森林和草地的背景中，轻轻推开一座木教堂吱呀作响的木门，感受里面截然不同的神圣空间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分回到广场，找一家有户外座位的餐厅，点一份斯洛伐克传统的羊奶酪面团，看着广场在暮色中被温暖的灯光点亮。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`广场东南角房屋的阴影下`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点的侧光能完美勾勒出市政厅阶梯状山墙的几何轮廓，并将广场建筑群的色彩饱和度提到最高，用广角镜头可以收纳下完整的三角形空间。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣埃吉迪乌斯教堂内部中殿侧面`}</h4>
                  <p className="text-sm text-gray-700">{`选择中午阳光最盛时，光线会透过高高的彩色玻璃窗，在古老的石柱和地面上投下梦幻般的光斑，此时适合使用大光圈镜头捕捉细节和光影戏剧。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城墙公园的西北角土坡上`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏时分，从这里可以拍摄到圣埃吉迪乌斯教堂尖塔与身后层层叠叠的老城屋顶形成的经典明信片角度，常有薄雾增添氛围。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`木教堂博物馆的圣弗朗西斯教堂前`}</h4>
                  <p className="text-sm text-gray-700">{`下午的阳光会温柔地照亮全木结构的教堂侧面，以其背后深绿色的森林为背景，能拍出建筑与自然完美融合的宁静感，建议使用长焦镜头压缩空间。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机拍摄前，务必查询斯洛伐克当地最新的无人机法规，尤其在文化遗产地和居民区上空，飞行可能受到严格限制或禁止。`}</li>
                <li>• {`在木教堂内部绝对禁止使用闪光灯，微弱而稳定的自然光是保护那些数百年历史壁画的关键，请使用高感光度相机或三脚架进行低光拍摄。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`广场核心体验`}</h4>
                  <p className="text-sm text-blue-800">{`住在广场拱廊之上由老宅改造的精品公寓，推开木格窗就是毫无遮挡的广场全景，夜晚的寂静和清晨的第一缕阳光都是你的私人收藏。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`静谧家庭之选`}</h4>
                  <p className="text-sm text-green-800">{`位于老城边缘一栋19世纪别墅里的家庭旅馆，主人会为你准备丰盛的自制早餐，后院有个小花园，安静得只听得见鸟鸣。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特色郊外 retreat`}</h4>
                  <p className="text-sm text-yellow-800">{`距离老城3公里处一个村庄里的传统农庄客栈，房间充满乡土情调，可以体验真正的乡村宁静，清晨在牛铃声中醒来，主人能安排马车接送你进城。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高性价比青旅`}</h4>
                  <p className="text-sm text-purple-800">{`老城城墙脚下的现代化青年旅舍，由老建筑巧妙改造，提供干净的宿舍和私人间，公共厨房设施齐全，是背包客和交流故事的好地方。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季和圣诞市场期间（12月）是旺季，广场上的优质住宿需要提前数月预订。如果订不到，选择老城步行10分钟范围内的住宿也很方便，价格往往更实惠。巴尔代约夫整体治安非常好，夜间独行也很安全，但老城石板路在雨后较滑，夜晚行走建议注意脚下。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开巴尔代约夫好些天了，但闭上眼睛，那个三角形的广场依然清晰得如同就在眼前。它给我的，不仅仅是一次“参观”的体验，更像是一次关于时间密度的深刻教学。在这里，时间不是单向流逝的直线，而是可触摸、可漫步、可沉浸其中的立体空间。你会明白，所谓遗产，不是锁在玻璃柜里的碎片，而是一种仍然在呼吸的生活方式。当现代世界的喧嚣追求着更高、更快、更耀眼时，巴尔代约夫安静地守望着自己的节奏，用斑驳的石墙、温润的木纹和每天准时响起的钟声，讲述着持久、完整与宁静的价值。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`我想，每一位真正热爱深度游的旅人，都应该来一次这里。它不仅是为了在清单上增加一个世界遗产的名字，更是为了获得一种内心的校准。在这个完美保存的“旧世界”模子里，你能感受到社区与传统的韧性，看到不同文明如何像溪流一样在此交汇、沉淀，而非冲突、取代。它提醒我们，真正的富足不在于无尽的更新，而在于深刻的连结——与历史连结，与社区连结，与脚下这片土地的记忆连结。巴尔代约夫像一首沉默的史诗，等待着愿意放慢脚步、侧耳倾听的人，来读它每一块石头、每一片木瓦上的故事，并从中带走一份难以言喻的、关于“永恒”的慰藉。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/levoca-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莱
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莱沃恰老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Levoča Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/spis-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯皮什城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Spiš Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/trencin-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特伦钦城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trenčín Castle</p>
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
