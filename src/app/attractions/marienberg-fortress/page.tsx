import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '马林贝格要塞 Marienberg Fortress｜探秘萨克森银矿心脏，俯瞰文艺复兴棋盘老城的空中堡垒 - 最佳欧洲景点',
  description: '当你把车停在老城边缘，抬头望向那座盘踞在山丘上的赭黄色庞然大物时，第一感觉不是压迫，而是一种奇特的安定感。它不像新天鹅堡那样梦幻，也不像海德堡城堡那样悲情，它敦实、沉着，像一个历经风霜却依然腰板挺直的老矿工，沉默地守护着脚下那片由它财富滋养出的城市。沿着之字形的步道向上走，耳边只有自己的脚步声和风吹',
}

export default function MarienbergFortressPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '德国', href: '/destinations/europe' },
            { label: '马林贝格', href: '/destinations/europe' },
            { label: '马林贝格要塞', href: '/attractions/marienberg-fortress' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`马林贝格要塞・Marienberg Fortress・德国・马林贝格`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你把车停在老城边缘，抬头望向那座盘踞在山丘上的赭黄色庞然大物时，第一感觉不是压迫，而是一种奇特的安定感。它不像新天鹅堡那样梦幻，也不像海德堡城堡那样悲情，它敦实、沉着，像一个历经风霜却依然腰板挺直的老矿工，沉默地守护着脚下那片由它财富滋养出的城市。沿着之字形的步道向上走，耳边只有自己的脚步声和风吹过松林的沙沙声，空气中混合着雨后泥土的清香和远处传来的一丝若有若无的木头燃烧的气味。
走到主城门前，巨大的拱门投下深深的阴影，门楣上的石刻纹章已被岁月磨得有些模糊。穿过门洞，世界豁然开朗，一个由高大石墙围合出的广阔内庭院出现在眼前。这里是整个要塞跳动的心脏。脚下是粗糙不平的石板地，缝隙里长出顽强的青草。午后的阳光斜斜地打在对面宫殿的立面上，那些文艺复兴风格的竖窗、装饰性的纹带，在明亮的光线下显得格外清晰又格外古老。你可以找个石阶坐下，静静地看着。偶尔有零星游客低声交谈走过，声音在空旷的庭院里产生轻微的回响，更衬出这里的宁静。你会忽然明白，这座城堡与其说是一个展览品，不如说依然是这座小城市生活背景的一部分——一个巨大、坚实、令人安心的背景。
而它最核心的魅力，在于那种“掌控感”。当你最终爬上那座浑圆的、被称为“巨塔”的制高点，一切豁然开朗。眼前展开的，是教科书般完美的景象：脚下整个马林贝格老城，如同一个精致的棋盘，严格按照文艺复兴时期的理想城市规划铺设开来，街道横平竖直，街区方方正正，以市集广场为中心向外辐射。广场上那个小小的银矿开采纪念碑，从这里看只是一个白色的小点。你可以清晰地看到，城市的边界之外，是连绵起伏、墨绿色的厄尔士山脉。几百年前，选帝侯就是站在这里，俯瞰着他的银矿帝国，监督着财富从这些山脉中源源流出，再按照他认可的“秩序”，规划成脚下这座几何城市。这种将自然财富、人类权力与美学规划完美结合的视角，是你在任何博物馆都体验不到的沉浸式历史课。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当你把车停在老城边缘，抬头望向那座盘踞在山丘上的赭黄色庞然大物时，第一感觉不是压迫，而是一种奇特的安定感。它不像新天鹅堡那样梦幻，也不像海德堡城堡那样悲情，它敦实、沉着，像一个历经风霜却依然腰板挺直的老矿工，沉默地守护着脚下那片由它财富滋养出的城市。沿着之字形的步道向上走，耳边只有自己的脚步声和风吹过松林的沙沙声，空气中混合着雨后泥土的清香和远处传来的一丝若有若无的木头燃烧的气味。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走到主城门前，巨大的拱门投下深深的阴影，门楣上的石刻纹章已被岁月磨得有些模糊。穿过门洞，世界豁然开朗，一个由高大石墙围合出的广阔内庭院出现在眼前。这里是整个要塞跳动的心脏。脚下是粗糙不平的石板地，缝隙里长出顽强的青草。午后的阳光斜斜地打在对面宫殿的立面上，那些文艺复兴风格的竖窗、装饰性的纹带，在明亮的光线下显得格外清晰又格外古老。你可以找个石阶坐下，静静地看着。偶尔有零星游客低声交谈走过，声音在空旷的庭院里产生轻微的回响，更衬出这里的宁静。你会忽然明白，这座城堡与其说是一个展览品，不如说依然是这座小城市生活背景的一部分——一个巨大、坚实、令人安心的背景。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而它最核心的魅力，在于那种“掌控感”。当你最终爬上那座浑圆的、被称为“巨塔”的制高点，一切豁然开朗。眼前展开的，是教科书般完美的景象：脚下整个马林贝格老城，如同一个精致的棋盘，严格按照文艺复兴时期的理想城市规划铺设开来，街道横平竖直，街区方方正正，以市集广场为中心向外辐射。广场上那个小小的银矿开采纪念碑，从这里看只是一个白色的小点。你可以清晰地看到，城市的边界之外，是连绵起伏、墨绿色的厄尔士山脉。几百年前，选帝侯就是站在这里，俯瞰着他的银矿帝国，监督着财富从这些山脉中源源流出，再按照他认可的“秩序”，规划成脚下这座几何城市。这种将自然财富、人类权力与美学规划完美结合的视角，是你在任何博物馆都体验不到的沉浸式历史课。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`马林贝格要塞`} />
                <InfoRow label="英文名称" value={`Marienberg Fortress`} />
                <InfoRow label="正式名称" value={`Marienberg Fortress`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`马林贝格`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`曾是萨克森选帝侯在厄尔士山脉银矿区的权力中心与重要防御堡垒。`} />
                <InfoRow label="建筑特色" value={`一座融合了防御工事与宫殿建筑的庞大山巅城堡，其布局与山形完美结合。`} />
                <InfoRow label="建筑风格" value={`以文艺复兴风格为主，后续融入了巴洛克式的改建与增补。`} />
                <InfoRow label="文化价值" value={`是见证萨克森地区矿业繁荣、贵族权力与民间智慧交织的立体史书。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡庭院及部分室外区域全年每日开放。博物馆、宫殿内部及导览游的开放时间随季节变化：通常四月至十月，每日上午10点至下午5点开放；十一月至三月，仅周末及公共假日上午11点至下午4点开放，且部分室内区域可能关闭。具体开放情况建议出行前查阅官网，冬季偶尔会因天气原因临时关闭。`} />
              <InfoRow label="门票价格" value={`进入城堡庭院免费。参观核心区域（包括选帝侯居所、博物馆、圆塔）需购买联票，成人票8欧元，优惠票（学生、残疾人等）6欧元。家庭票（2成人+最多4名儿童）18欧元。参加特色“地下矿井与防御工事”导览游需额外支付5欧元。门票可在主城门旁的售票处购买。`} />
              <InfoRow label="地址" value={`Marienberg 1, 09496 Marienberg, Germany`} />
              <InfoRow label="交通方式" value={`最近的国际机场是德累斯顿机场（DRS）。从德累斯顿中央火车站（Dresden Hauptbahnhof）出发，乘坐开往克姆尼茨（Chemnitz）方向的区域火车（RE或RB），约1小时15分钟到达马林贝格火车站。从火车站出来，步行上山约需25-30分钟，这是一段缓坡，沿途可以欣赏老城风貌。也可以在市集广场（Markt）乘坐前往“Marienberg/Festung”的本地巴士，约10分钟车程，班次每小时1-2班。建议购买萨克森州日票（Sachsen-Ticket），性价比高，可在一天内无限次乘坐该州所有区域火车和巴士。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "马林贝格的故事，始于地下的白银和山巅的野心。时间倒回12世纪，厄尔士山脉发现了丰富的银矿脉，像磁石一样吸引了矿工、商人和冒险家。起初，这里只有零星的采矿点和简单的防御工事，用来保护珍贵的矿场免受劫掠。转机出现在16世纪初，那位以奢华、艺术品味和统治野心著称的萨克森选帝侯，“强人”奥古斯特。他敏锐地意识到，这片山区不仅是钱袋子，更是战略要地。于是，他决定将山头上那座原有的中世纪城堡，彻底改建成一个配得上他权势的、兼具居住与防御功能的雄伟要塞。这不仅仅是扩建，而是一次宣告：群山之间的财富，由我掌控。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥古斯特请来了当时最顶尖的建筑师和工匠，他们以意大利文艺复兴风格为蓝本，但因地制宜，创造出独一无二的作品。城堡不是凭空建造的美丽花瓶，它的每一道城墙的走向，每一个塔楼的位置，都紧密贴合山脊的形态，防御火力可以覆盖所有上山通道。同时，内部又精心设计了华丽的选帝侯居所、宽敞的宴会厅和精致的小教堂，石头建筑的冷峻之中，透出权力生活的温度。那些开采自本地的石材，仿佛把山脉的骨髓砌进了墙里。城堡建设的同时，山下的城市也按照最时髦的“文艺复兴理想城市”规划拔地而起，方正整齐，如同棋盘。山顶的城堡与山下的城市，构成了一个自上而下、从权力到民生的完整闭环。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，和平与繁荣并非永恒。17世纪的三十年战争如风暴般席卷欧洲，这座坚固的要塞也迎来了最严峻的考验。它被天主教联盟军长期围困，在炮火中坚守。城墙上的弹痕或许已被修补，但那段坚守的传奇却刻在了当地人的记忆里。战争结束后，城堡虽然受损，但核心结构依然屹立。到了18世纪，随着军事技术的进步和贵族生活习性的变化，城堡再次被改造，增加了巴洛克风格的装饰元素，防御功能逐渐让位于象征意义。它从一座前线指挥所，慢慢转变为一座代表着古老荣光的纪念碑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "历史的车轮滚滚向前，银矿终有采尽的一天。19世纪后，矿业衰退，城堡也逐渐失去了其实际的行政和军事功能，一度面临荒废的命运。但幸运的是，人们没有忘记它。从19世纪末开始，一系列谨慎的修复和保护工程陆续展开。人们清理废墟，加固墙体，将部分宫殿房间改建为展示本地矿业历史和城堡历史的博物馆。那些古老的矿工工具、精美的矿石标本、选帝侯的生活器物被一一陈列，让沉默的石头开始讲述故事。今天，你漫步其中，既能触摸到文艺复兴时期工匠的手泽，也能看到战争留下的伤疤，还能感受到近代修复者注入的新生。它不是某个时代凝固的标本，而是一本用石头写就的、页码层层叠加的立体史书，每一页都记录着萨克森这片土地上的财富、磨难与坚韧。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在早上九点左右抵达城堡，这时旅游团尚未涌入，光线柔和，最适合拍照和静静感受。整个深度游览大约需要4到5小时。节奏宜慢不宜快，因为这里需要你用脚步丈量，用眼睛观察，更需要不时停下来，凭栏远眺，让想象穿越时空。游览从山下老城开始，建立对城市格局的初步印象，再上山进入城堡，由外至内，由宏观到细节，最后在制高点俯瞰全景，完成一次时空闭环的体验。这样的安排能让你最清晰地理解“城堡-城市-山脉”三者之间密不可分的关系。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双舒适耐磨的鞋子，城堡内外部是粗糙的石板路和台阶，上山小路也有坡度。城堡区域风通常比山下大，即使夏日也建议带一件薄外套。地下矿井导览游非常热门且有人数限制，强烈建议抵达后先去售票处询问并预订当天的场次。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从山下老城中心的市集广场出发，先抬头找找山顶城堡的方向，感受一下这种仰望的视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着标识清晰的“Zur Festung”小路开始缓步上山，沿途会经过安静的居民区和偶尔冒出的小片森林。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从巨大的主城门“Torhaus”进入城堡，在门洞的阴影里停留片刻，感受石头的凉意和历史的厚重感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进宽阔的内庭院“Hof”，顺时针绕行一圈，先不急着进室内，而是观察不同建筑立面的细节差异。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入选帝侯居所和城堡博物馆，花时间看看那些矿石标本、古老地图和描绘采矿场景的版画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要参加“地下工事”导览（如果开放），跟着向导钻进阴凉的地道，亲手触摸冰冷的岩壁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上圆形的“巨塔”，在这里毫无保留地转上一圈，将棋盘格老城和绵延山脉尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着部分开放的城墙漫步，从不同的角度和高度，回望你刚刚走过的宫殿建筑群。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`主城门仰拍视角`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在城门前方斜坡下，用广角镜头仰拍，能 capturing 城门塔楼与背后天空构成的威严画面，侧光会让石头的纹理格外突出。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`内庭院拱廊光影`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射庭院时，寻找拱廊下的柱廊区域，阳光会在石板地上投下规律而深邃的条形阴影，形成强烈的明暗对比和纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`巨塔顶层全景`}</h4>
                  <p className="text-sm text-gray-700">{`这是必拍点，建议使用相机或手机的全景模式，缓慢平稳地旋转拍摄，将360度的老城棋盘格局和远方山脉一同收入画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`小教堂内部彩色玻璃`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光西斜时，光线会穿透祭坛后方较小的彩色玻璃窗，在古老的石壁和长椅上洒下斑斓而柔和的光斑，充满静谧的神圣感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从老城广场仰拍要塞`}</h4>
                  <p className="text-sm text-gray-700">{`日落前约一小时，回到市集广场，用长焦镜头对准山巅的城堡，此时城堡会被金色的夕阳光勾勒出清晰的轮廓，与渐暗的天空形成冷暖对比。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`城堡内部博物馆区域通常禁止使用闪光灯和三脚架（如需使用需提前申请）。拍摄当地居民或私人住宅区域时请保持礼貌和距离。无人机飞行在城堡及老城上空有严格限制，基本禁止，飞行前务必查清当地法规。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`老城边缘一家名为“Zum Erzgebirge”的家庭式旅馆，房间朴素干净，老板会用带着当地口音的德语热情地给你讲他祖父当矿工的故事，早餐的农家面包和自酿果酱是一绝。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`住在由一栋16世纪晚期商人住宅改造的精品酒店“Historisches Stadthaus”，木梁天花板、古老的瓷砖壁炉都被完好保留，窗户正对着古老的街巷，夜晚非常安静。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车十五分钟，入住厄尔士山麓森林环绕的“Berghotel & Spa”，拥有全景落地窗的餐厅直面群山，在户外温泉池里泡着，抬头就能望见远处山脊上被灯光点亮的马林贝格要塞剪影。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`中转便利`}</h4>
                  <p className="text-sm text-purple-800">{`如果你计划次日继续火车旅行，可以选择马林贝格火车站步行五分钟可达的现代商务酒店，房间宽敞，隔音好，对于赶早班车的旅人非常友好。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "马林贝格整体治安极佳，夜间行走也很安全。老城内的住宿更具风情，但停车位可能紧张，预订时需确认。如果你在夏季或圣诞市场期间到访，务必提前数月预订，因为厄尔士山区是德国人热爱的度假地。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开马林贝格要塞时，我的背包里没有多一件纪念品，但心里却好像被塞进了一些沉甸甸的东西。那不是石头，而是一种关于“秩序”与“生存”的复杂感受。这座城堡和它脚下的城市，是人类理性规划的杰作——为了高效开采财富，为了清晰展示权力，一切都井井有条，方方正正。然而，支撑这份“秩序”的，却是山脉深处黑暗、潮湿、充满危险的矿井，是矿工们最原始、最艰辛的劳作。山顶的华丽宫殿与地下的艰辛挖掘，构成了这个地方最深刻也最矛盾的一体两面。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当今这个崇尚流动、变化和打破规则的时代，马林贝格像一座固执的纪念碑，提醒着我们一些不同的东西。它告诉我们，人类曾如何试图用几何和城墙来框定自然、框定生活、框定财富的流动。这种尝试或许有些笨拙，甚至充满了权力的冷酷，但它也孕育了一种独特的坚韧社区文化和地域认同。每一位热爱深度游的旅人，都应该来这里看看。不仅仅是为了看一座山上的城堡，更是为了理解一种已经消逝的、将土地、资源、权力与社区生活紧密捆绑在一起的世界观。站在巨塔上吹着风，你会感到自己同时触碰到了历史的荣耀与沉重，自然的馈赠与严酷。这种复杂的、立体的触动，远比一张简单的风景明信片，更值得放入记忆的行囊。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/wertheim" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    韦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">韦尔特海姆（美因河与陶伯河交汇的玻璃之城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Wertheim</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/burg-hohenzollern" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    霍
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">霍亨索伦城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hohenzollern Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lemgo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莱
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莱姆戈</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lemgo</p>
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
