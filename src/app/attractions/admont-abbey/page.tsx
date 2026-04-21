import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿德蒙特修道院 Admont Abbey｜探访世界最大修道院图书馆，坠入巴洛克的梦幻知识圣殿 - 最佳欧洲景点',
  description: '车子穿过奥地利施泰尔马克州层层叠叠的森林与丘陵，当那座巨大的、鹅黄色的巴洛克建筑群在青山环抱中赫然出现时，你首先感受到的是一种惊人的宁静。那不是寂静，而是一种被厚重历史和文化气息包裹着的、充满生命力的宁静。空气里有森林的湿润，远处恩斯河潺潺的水声像是永恒的背景音。走近修道院，你会惊讶于它的规模——它...',
}

export default function AdmontAbbeyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '奥地利', href: '/destinations/austria' },
            { label: '阿德蒙特镇', href: '/destinations/austria' },
            { label: '阿德蒙特修道院', href: '/attractions/admont-abbey' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿德蒙特修道院・Admont Abbey・奥地利・阿德蒙特镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子穿过奥地利施泰尔马克州层层叠叠的森林与丘陵，当那座巨大的、鹅黄色的巴洛克建筑群在青山环抱中赫然出现时，你首先感受到的是一种惊人的宁静。那不是寂静，而是一种被厚重历史和文化气息包裹着的、充满生命力的宁静。空气里有森林的湿润，远处恩斯河潺潺的水声像是永恒的背景音。走近修道院，你会惊讶于它的规模——它不像一个避世的隐修所，更像一座为知识与信仰而建的微型城池。
穿过简朴的拱门进入内部，世界仿佛被分隔开来。而当你真正站在图书馆大厅的门槛前，所有的心理准备都会瞬间失效。那是一种直击心灵的震撼。你的眼睛首先被无边的白色与金色淹没——雪白的书架上雕刻着繁复的涡卷纹饰，镀金的装饰在从高处窗户倾泻而下的自然光里闪闪发亮。然后，是气味：古老的羊皮纸、上等橡木、以及时间本身混合成的一种干燥而沉稳的香气，扑面而来。你得仰起头，才能勉强看清那高达12米的拱顶，上面绘制的巨幅湿壁画《人类的启蒙》在光影流动中仿佛有了生命，画中人物正从蒙昧走向神学与科学的光明。耳边只有参观者压低的、近乎敬畏的惊叹，以及自己脚步在光滑细腻的镶木地板上发出的轻微回响。偶尔，从相连的修道院教堂方向，会隐隐传来管风琴的试音，几个音符飘进来，更添神圣。
然而，阿德蒙特最打动人的，或许不是这种极致的视觉奇观，而是它所代表的“活着的传统”。你会看到身着黑色会袍的修士安静地从回廊走过，与参观者礼貌地点头致意。这里的图书馆不仅仅是展示品，它的藏书仍在被学者和修士们研究。隔壁的现代艺术博物馆里，前沿的装置作品与古老的信仰对话。你会发现，这座修道院完美地诠释了本笃会“祈祷与工作”的古老训诫，只不过在这里，“工作”被赋予了收集、保存、创造和传播知识与美的宏大意义。它不是一座被时间冻结的博物馆，而是一个仍在深沉呼吸的文化心脏。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子穿过奥地利施泰尔马克州层层叠叠的森林与丘陵，当那座巨大的、鹅黄色的巴洛克建筑群在青山环抱中赫然出现时，你首先感受到的是一种惊人的宁静。那不是寂静，而是一种被厚重历史和文化气息包裹着的、充满生命力的宁静。空气里有森林的湿润，远处恩斯河潺潺的水声像是永恒的背景音。走近修道院，你会惊讶于它的规模——它不像一个避世的隐修所，更像一座为知识与信仰而建的微型城池。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过简朴的拱门进入内部，世界仿佛被分隔开来。而当你真正站在图书馆大厅的门槛前，所有的心理准备都会瞬间失效。那是一种直击心灵的震撼。你的眼睛首先被无边的白色与金色淹没——雪白的书架上雕刻着繁复的涡卷纹饰，镀金的装饰在从高处窗户倾泻而下的自然光里闪闪发亮。然后，是气味：古老的羊皮纸、上等橡木、以及时间本身混合成的一种干燥而沉稳的香气，扑面而来。你得仰起头，才能勉强看清那高达12米的拱顶，上面绘制的巨幅湿壁画《人类的启蒙》在光影流动中仿佛有了生命，画中人物正从蒙昧走向神学与科学的光明。耳边只有参观者压低的、近乎敬畏的惊叹，以及自己脚步在光滑细腻的镶木地板上发出的轻微回响。偶尔，从相连的修道院教堂方向，会隐隐传来管风琴的试音，几个音符飘进来，更添神圣。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，阿德蒙特最打动人的，或许不是这种极致的视觉奇观，而是它所代表的“活着的传统”。你会看到身着黑色会袍的修士安静地从回廊走过，与参观者礼貌地点头致意。这里的图书馆不仅仅是展示品，它的藏书仍在被学者和修士们研究。隔壁的现代艺术博物馆里，前沿的装置作品与古老的信仰对话。你会发现，这座修道院完美地诠释了本笃会“祈祷与工作”的古老训诫，只不过在这里，“工作”被赋予了收集、保存、创造和传播知识与美的宏大意义。它不是一座被时间冻结的博物馆，而是一个仍在深沉呼吸的文化心脏。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿德蒙特修道院`} />
                <InfoRow label="英文名称" value={`Admont Abbey`} />
                <InfoRow label="正式名称" value={`Admont Abbey`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`阿德蒙特镇`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`阿尔卑斯山区最重要的精神与文化中心之一，其图书馆被誉为“世界第八大奇迹”和“知识的巴洛克圣殿”。`} />
                <InfoRow label="建筑特色" value={`拥有全世界规模最大的修道院图书馆，以其震撼人心的巴洛克室内设计、精巧的天顶湿壁画和超过7万册珍贵藏书而举世闻名。`} />
                <InfoRow label="建筑风格" value={`主体为恢宏的晚期巴洛克风格，图书馆大厅则是洛可可艺术的巅峰之作，而修道院的新建筑部分则融合了简约的现代风格。`} />
                <InfoRow label="文化价值" value={`它不仅是一座仍在运作的本笃会修道院，更是一个集精神信仰、学术研究、艺术收藏与自然探索于一体的活态文化综合体。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`修道院区域及博物馆全年开放，具体时间随季节调整。图书馆与博物馆的开放时间为：每年4月至10月，每日上午10点至下午5点；11月至次年3月，开放时间缩短为上午11点至下午3点，且周一闭馆。修道院教堂每日从清晨至傍晚向祈祷者开放。请注意，图书馆有时会因私人活动或修道院内部事务临时关闭，出行前务必在其官网核查最新日程。圣诞节及元旦期间开放时间有特殊安排，通常12月24日下午及25日上午不对外开放。`} />
              <InfoRow label="门票价格" value={`成人票为12欧元，此通票包含世界闻名的图书馆、现代艺术博物馆、自然历史博物馆及历史展厅。优惠票适用于学生（需持有效证件）、65岁以上长者及10人以上团体，价格为10欧元。家庭票（2位成人+最多4名18岁以下儿童）为25欧元。6岁以下儿童免费。另有仅参观图书馆的单馆门票，价格为9欧元，但强烈推荐购买通票以获得完整体验。门票可在入口处现场购买，也支持官网提前预订。`} />
              <InfoRow label="地址" value={`Kirchplatz 1, 8911 Admont, Austria`} />
              <InfoRow label="交通方式" value={`从奥地利主要城市前往阿德蒙特需要一些周折，但这正是朝圣之旅的一部分。最便捷的路线是先抵达格拉茨（Graz）或萨尔茨堡（Salzburg）。从格拉茨中央火车站（Hauptbahnhof）乘坐区域火车（ÖBB）前往“Liezen”站，车程约1小时40分钟，班次每小时1-2班。在Liezen站换乘前往“Selzthal”方向的当地巴士（Postbus），在“Admont Stift”站下车，巴士车程约25分钟，班次与火车衔接，但周日班次会大幅减少。若从萨尔茨堡出发，可乘火车至“St. Michael im Lungau”站，再转乘巴士，总耗时约2.5小时。自驾是最灵活的方式，从维也纳出发沿A9高速公路南下，从“Admont”出口驶出，全程约3小时。小镇内，修道院建筑群非常醒目，从巴士站步行5分钟即可抵达主入口。建议使用奥地利联邦铁路（ÖBB）App规划火车与巴士联程，可购买联票。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从1074年讲起。那时候，神圣罗马帝国的疆域上，大大小小的修道院如同文明的灯塔。大主教格布哈德一世，一位来自萨尔茨堡的显赫人物，决定在恩斯河谷这片风景如画但相对偏远的地方，建立一座本笃会修道院。最初的动机虔诚而单纯：为修士们提供一个潜心祈祷、抄写经文的宁静家园。最初的建筑是朴素的罗马式风格，在随后的几个世纪里，它依靠贵族的捐赠和自身的经营，逐渐积累起土地、财富和影响力，成为地区内重要的宗教与行政中心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，中世纪的荣光在17世纪遭遇了严峻考验。席卷欧洲的宗教改革和农民战争让阿德蒙特数次陷入动荡，建筑也遭到损毁。但真正的涅槃，发生在两个关键的18世纪人物手中。一位是眼光远大的修道院长马特乌斯·奥夫纳，另一位是天才建筑师约瑟夫·胡贝尔。奥夫纳院长是一位深受启蒙思想影响的学者，他坚信信仰与理性、神学与科学可以并行不悖。他梦想建造一座前所未有的图书馆，不仅收藏神学著作，更要囊括历史、法律、医学、自然科学等一切人类知识的结晶。于是，在1760年代，胡贝尔将院长的梦想化为了石头、木材与灰泥的奇迹。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`胡贝尔设计的图书馆大厅，是晚期巴洛克向洛可可过渡的杰作。他没有选择常见的深色木质基调，而是大胆地使用了明亮如光的白色与金色，让整个空间仿佛悬浮在空气中。七个圆顶的湿壁画由年近八旬的大师巴托洛梅奥·阿尔托蒙特绘制，描绘了人类从神启智慧到最终审判的全过程，将信仰与启蒙融为一体。这个图书馆在当时是革命性的——它本身就是一个“启蒙”的宣言，宣告知识是通向神圣的路径。它一落成，便被誉为“世界第八大奇迹”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但命运的考验并未结束。1865年4月27日，一场灾难性的大火席卷了修道院的大部分建筑。奇迹中的奇迹是，那间珍贵的图书馆被修士和镇民们用浸湿的毛毯和殊死的努力，完整地保存了下来。大火烧毁了一切，唯独留下了知识的圣殿。此后漫长的重建是艰辛的，修道院的经济一度陷入困境。但精神的火种未灭。进入20世纪，修道院在战火与变迁中幸存，并开始思索新的使命。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的阿德蒙特，是那次凤凰涅槃后的新生。它不再依赖封建土地，而是通过经营森林、开办学校、设立博物馆和吸引文化旅游来维系其庞大的生命体系。2003年，一座极具现代感的博物馆翼楼由建筑师“弗洛里安·海格尔”设计完成，玻璃与钢铁的结构与古老的巴洛克立面形成震撼对话，象征着传统与未来的连接。从1074年的初心，到18世纪的辉煌，历经大火与重建，再到21世纪的转型，阿德蒙特修道院的故事，正是一部关于信仰、知识、毁灭与重生的欧洲精神史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在上午10点图书馆一开门就抵达，此时光线最美，游客相对稀少，能获得最沉浸的体验。整体游览需要预留至少4-5小时，节奏宜缓不宜急。先以图书馆的震撼开场，让情绪达到高点，然后转入相对沉静的博物馆和教堂进行消化与反思，最后在花园或河边结束行程，让心情慢慢平复。这样的安排符合感官和认知的节奏，避免一开始就信息过载。如果时间充裕，完全可以花上一整天，在图书馆里待久一些，或者参加一场教堂的晚祷。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`图书馆内严禁使用闪光灯，三脚架通常也需要特殊许可，请使用高感光度相机或手机夜间模式手持拍摄。小镇餐馆不多，修道院自己的餐厅提供简餐和不错的蛋糕，是午餐的方便之选。穿着需得体，避免过于暴露的服装，以示对仍在运作的宗教场所的尊重。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`先从主入口购票，然后别急着冲进图书馆，不妨在入口大厅感受一下现代博物馆翼楼那高挑明亮的空间与古老石墙的对话。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着指示牌穿过一条挂满古老圣像画的静谧回廊，让心情沉淀下来，做好进入圣殿的准备。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开那扇厚重的木门，让阿德蒙特图书馆的白色与金色洪流第一次冲击你的全部感官，记得先站在入口处仰头凝望整个大厅，足足五分钟。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着大厅中央缓缓行走，仔细端详两侧如波浪般起伏的白色书墙，寻找那些隐藏的假书脊（背后是通风口）和精巧的洛可可装饰细节。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到大厅尽头，登上二楼回廊，从这里俯视整个图书馆的全景，并近距离欣赏拱顶上阿尔托蒙特描绘的“科学”与“艺术”女神湿壁画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从图书馆侧门走出，进入相连的自然历史博物馆，看看那具巨大的、保存完好的动物骨骼藏品，感受修道院对探索上帝创造的另一面热情。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要参观与图书馆形成鲜明对比的现代艺术博物馆，思考当代艺术家如何回应信仰、历史与存在这些永恒命题。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，推开沉重的木门走进修道院主教堂，在相对昏暗的光线中静坐片刻，听一听自己的呼吸，或许能等到管风琴声响起。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`图书馆入口正面全景`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点至十一点间，阳光从东侧高窗射入，站在大厅正门口，用广角镜头将整个长廊、镀金装饰和天顶画一并收纳，注意降低曝光以保留高光细节。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`二楼回廊俯拍视角`}</h4>
                  <p className="text-sm text-gray-700">{`登上二楼后，选择中段的位置，将相机贴近栏杆（可借助小豆袋稳定），向下拍摄，可以完美对称地捕捉到长廊的纵深感和地板上的几何图案。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`湿壁画特写与光影`}</h4>
                  <p className="text-sm text-gray-700">{`正午前后，阳光直射某个穹顶时，专注于拍摄一个穹顶画，如“神学”或“哲学”，等待一束光恰好照亮壁画中心人物脸庞的瞬间。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`现代翼楼与老建筑交融`}</h4>
                  <p className="text-sm text-gray-700">{`从修道院外的花园或河边，拍摄由弗洛里安·海格尔设计的玻璃混凝土新翼楼与古老的巴洛克黄色立面并置的冲突与和谐之美。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`图书馆细节雕刻`}</h4>
                  <p className="text-sm text-gray-700">{`带上一个长焦镜头或使用手机的人像模式，聚焦于书架上一个精美的洛可可雕刻——例如一个天使的面容或一个缠绕的葡萄藤纹饰，让金色在白色背景上闪耀。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`图书馆内光线复杂，明亮的天窗与相对昏暗的书架形成高对比，建议采用RAW格式拍摄以便后期调整阴影和高光。尊重安静的氛围，快门声音调至静音，避免连续高速拍摄打扰他人。未经明确许可，请勿拍摄正在祷告的修士或工作人员的正脸。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`小镇经典之选`}</h4>
                  <p className="text-sm text-blue-800">{`修道院几步之遥的“圣乔治酒店”，由历史建筑改造，房间保留着老式木梁，部分房间窗户正对着修道院雄伟的侧影，清晨在钟声中醒来。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`山林隐居体验`}</h4>
                  <p className="text-sm text-green-800">{`距离小镇车程10分钟的“阿尔姆霍夫”家庭农庄，坐落在半山腰，提供纯正的奥地利农家早餐，晚上可以看到毫无光污染的灿烂星空，享受绝对的宁静。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`恩斯河畔设计旅舍`}</h4>
                  <p className="text-sm text-yellow-800">{`位于河对岸的“恩斯洛奇”设计旅舍，拥有全落地窗房间和临水平台，现代简约的风格与对岸的历史建筑群形成有趣对视，是年轻旅行者的最爱。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端疗养享受`}</h4>
                  <p className="text-sm text-purple-800">{`驱车20分钟可达的“格吕瑙温泉酒店”，在深度游览的疲惫后，可以泡在富含矿物质的温泉中放松身心，远眺阿尔卑斯前山的风光。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`阿德蒙特镇非常小，住宿选择有限，尤其在夏季和秋季旅游旺季，必须提前数月预订。小镇治安极好，夜晚非常安静。如果选择住在周边村庄，务必确认好交通方式，因为晚间公共交通几乎为零。住在镇上，晚上可以悠闲地在河边散步，看灯光勾勒出修道院轮廓的另一种美。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开阿德蒙特很久之后，闭上眼睛，那片白色的光芒依然会在记忆里闪烁。它留给我的，不仅仅是一组惊艳的照片，而是一种关于“永恒”的切实触感。在这个数字信息爆炸、一切似乎都转瞬即逝的时代，阿德蒙特像一个坚定的反义词。它告诉你，有些东西值得用石头、黄金和几个世纪的时间去建造，有些知识值得用羊皮纸和毕生的虔诚去抄写、保存。那座图书馆不是知识的坟墓，而是知识的圣殿，它庄严地宣告：追求智慧本身，就是一种神圣的仪式。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，这不仅仅是一次观看巴洛克艺术之旅，更是一次与自己内心对话的旅程。你会思考，什么是真正的丰富？是占有，还是传承？是喧嚣，还是沉淀？阿德蒙特修道院，这个山谷中的庞然大物，用它仍在跳动的心脏，给出了它的答案。每一位热爱深度游的旅人，都应该来此感受这份答案的重量。在这里，你不仅能看见欧洲辉煌的过去，更能触碰到一个文明如何在敬畏与求知中，坚韧地走向未来。它值得你跨越山海，来赴这场与智慧之光的约会。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/graz-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格拉茨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Graz Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/admont-abbey-library-ice-age-encounter" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿德蒙特修道院图书馆（与冰河世纪的相遇）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Admont Abbey Library (Encounter with the Ice Age)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/melk-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅尔克修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Melk Abbey</p>
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
