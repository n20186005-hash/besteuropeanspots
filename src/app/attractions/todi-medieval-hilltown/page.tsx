import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '托迪中世纪古城 Todi｜悬崖上的天空之城，一座被时光完整封存的意大利精神原乡 - 最佳欧洲景点',
  description: '车子在翁布里亚连绵的绿色丘陵间盘旋，一个模糊的轮廓逐渐在天际线上清晰起来——那并不是普通的山丘，而是一座从大地深处生长出来的、由石头和砖瓦构筑的庞大冠冕。托迪，就这样毫无预警地撞进你的视野。第一眼的感觉不是震撼，而是一种奇异的宁静与确信，仿佛它本就应该在那里，已经在那里，并且将继续在那里，对抗着山下...',
}

export default function TodiMedievalHilltownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '托迪中世纪古城', href: '/attractions/todi-medieval-hilltown' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`托迪中世纪古城・Todi・意大利・托迪`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在翁布里亚连绵的绿色丘陵间盘旋，一个模糊的轮廓逐渐在天际线上清晰起来——那并不是普通的山丘，而是一座从大地深处生长出来的、由石头和砖瓦构筑的庞大冠冕。托迪，就这样毫无预警地撞进你的视野。第一眼的感觉不是震撼，而是一种奇异的宁静与确信，仿佛它本就应该在那里，已经在那里，并且将继续在那里，对抗着山下平原上飞驰而过的时间。当你在城墙外的停车场停好车，穿过古老的石门，一股混合着旧石头、从门廊花盆里溢出的天竺葵香气，以及远处飘来的咖啡与黄油煎烤香气的味道，便轻柔地将你包裹。
沿着主街Via del Monte向上走，脚下的石板被几个世纪的脚步打磨得温润发亮，两侧是蜂蜜色的石屋，窗台上晾着雪白的亚麻布。你能听见的声音是琐碎而真实的：头顶晾衣绳上麻雀的啁啾，某扇木门后传来刀叉触碰盘子的轻响，以及从深巷尽头传来的、若有似无的教堂钟声。这座古城最迷人的一点在于，它不仅仅是一个景点，它仍然是大约一万七千名托迪人的家园。你会看见提着网兜买菜回家的老奶奶，在广场台阶上热烈讨论足球的少年，还有在自家地下室里经营着祖传木工坊的手艺人。生活在这里从未退场，它只是换上了更从容的节拍。
最终，你会抵达它的心脏——人民广场。那种豁然开朗的感觉是戏剧性的。三座宏伟的建筑——人民宫、主教宫和主座教堂——以一种近乎庄严的默契，围合出这个意大利最美的广场之一。阳光毫无保留地倾泻在广场的石灰岩地面上，反射出温暖的光晕。广场不是空荡的舞台，而是社区的客厅。老人们坐在咖啡馆的帆布篷下，一局棋可以下整个下午；孩子们在喷泉边追逐鸽子。在这里，建筑的美与生活的美是同一种东西，它们共同构成了一种令人心安的永恒感。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在翁布里亚连绵的绿色丘陵间盘旋，一个模糊的轮廓逐渐在天际线上清晰起来——那并不是普通的山丘，而是一座从大地深处生长出来的、由石头和砖瓦构筑的庞大冠冕。托迪，就这样毫无预警地撞进你的视野。第一眼的感觉不是震撼，而是一种奇异的宁静与确信，仿佛它本就应该在那里，已经在那里，并且将继续在那里，对抗着山下平原上飞驰而过的时间。当你在城墙外的停车场停好车，穿过古老的石门，一股混合着旧石头、从门廊花盆里溢出的天竺葵香气，以及远处飘来的咖啡与黄油煎烤香气的味道，便轻柔地将你包裹。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`沿着主街Via del Monte向上走，脚下的石板被几个世纪的脚步打磨得温润发亮，两侧是蜂蜜色的石屋，窗台上晾着雪白的亚麻布。你能听见的声音是琐碎而真实的：头顶晾衣绳上麻雀的啁啾，某扇木门后传来刀叉触碰盘子的轻响，以及从深巷尽头传来的、若有似无的教堂钟声。这座古城最迷人的一点在于，它不仅仅是一个景点，它仍然是大约一万七千名托迪人的家园。你会看见提着网兜买菜回家的老奶奶，在广场台阶上热烈讨论足球的少年，还有在自家地下室里经营着祖传木工坊的手艺人。生活在这里从未退场，它只是换上了更从容的节拍。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最终，你会抵达它的心脏——人民广场。那种豁然开朗的感觉是戏剧性的。三座宏伟的建筑——人民宫、主教宫和主座教堂——以一种近乎庄严的默契，围合出这个意大利最美的广场之一。阳光毫无保留地倾泻在广场的石灰岩地面上，反射出温暖的光晕。广场不是空荡的舞台，而是社区的客厅。老人们坐在咖啡馆的帆布篷下，一局棋可以下整个下午；孩子们在喷泉边追逐鸽子。在这里，建筑的美与生活的美是同一种东西，它们共同构成了一种令人心安的永恒感。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`托迪中世纪古城`} />
                <InfoRow label="英文名称" value={`Todi`} />
                <InfoRow label="正式名称" value={`Todi`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`托迪`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座从伊特鲁里亚、罗马到中世纪层层叠建、近乎完美保存的“活化石”山城，被誉为“最适宜居住的中世纪城市”。`} />
                <InfoRow label="建筑特色" value={`城市肌理与山体地形浑然天成，以中心广场为心脏，放射出蛛网般的狭窄街巷和阶梯，公共宫殿与宗教建筑在广场上形成震撼的权力对话。`} />
                <InfoRow label="建筑风格" value={`以罗马式建筑为基底，巧妙融合了哥特式的轻盈与早期文艺复兴的理性。`} />
                <InfoRow label="文化价值" value={`它并非博物馆，而是一个缓慢呼吸的有机体，生动展现了意大利外省小镇延续千年的社区生活、信仰与人文精神。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城本身全天开放，但城内主要建筑（如主座教堂、人民宫）有固定开放时间，通常为夏季（4月至10月）上午10:00至下午6:00，冬季（11月至3月）开放时间缩短至下午4:30或5:00，周一许多室内场馆可能闭馆或下午开放。重要的宗教节日（如圣诞节、复活节）期间开放时间变动较大，建议出行前再次核实。`} />
              <InfoRow label="门票价格" value={`进入古城区域免费。参观主要单体景点需购票，常见联票（包括人民宫、主教宫美术馆等）价格约为10欧元。12岁以下儿童、65岁以上老人及学生通常享有折扣。部分教堂免费进入但鼓励小额捐赠。`} />
              <InfoRow label="地址" value={`Piazza del Popolo, 1, 06059 Todi PG, Italy`} />
              <InfoRow label="交通方式" value={`最近的国际机场是罗马菲乌米奇诺机场（FCO）或佩鲁贾圣弗朗西斯教堂机场（较小）。从罗马Termini火车站乘坐区域火车前往奥尔维耶托站（约1.5小时），然后转乘由Busitalia运营的巴士前往托迪（约45分钟至1小时，班次有限，通常1-2小时一班，务必提前查好时刻表）。最灵活的方式是自驾，从罗马或佛罗伦萨出发约2小时车程，但古城中心为ZTL交通限行区，必须将车停在城墙外的付费停车场（如Piazzale delle Martiri d’Ungheria），然后步行或乘坐小型电动巴士进入。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`托迪的故事，得从泥土深处讲起。早在公元前八世纪，神秘的伊特鲁里亚人就看中了这座陡峭的山丘，在此建立了要塞定居点，他们称其为“Tutere”。你或许在今天城墙的某些基石上，还能隐约触摸到那些更为古老、更为粗粝的石块纹理，那是这座城市的第一个梦。后来，罗马人来了，他们沿着山脊修建了更加坚固的城墙，并将城市命名为“Tuder”。罗马时代的托迪是一个繁荣的自治市，至今在城下的考古区，你还能看到一座小型罗马剧场和几处浴场遗迹的轮廓，它们像沉睡的巨兽，静静地躺在现代葡萄园的藤蔓之下。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，真正赋予托迪今天灵魂的，是中世纪。大约在十二、十三世纪，随着自治公社的崛起，托迪迎来了它的黄金时代。那时候的市民们满怀自豪与雄心，决定建造一个能与周边强大城邦（比如佩鲁贾）媲美的城市中心。于是，我们今天所见的奇迹诞生了：宏伟的人民宫（Palazzo del Popolo）拔地而起，它是意大利最古老的市政建筑之一，粗犷的哥特式拱廊下，曾回荡着市民议会决定城市命运的辩论声。紧接着，它的“孪生兄弟”主教宫（Palazzo del Capitano）在旁边落成，象征着宗教与世俗权力的并立与制衡。广场的尽头，始建于十二世纪的主座教堂（Duomo）经历了漫长的建造，它的正立面融合了罗马式的庄严与翁布里亚地区特有的玫瑰窗装饰，像一本用石头写就的信仰之书。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`有趣的是，托迪的“完美保存”某种程度上得益于它后来的“相对没落”。在文艺复兴的巨浪中，它没有像佛罗伦萨或锡耶纳那样成为艺术爆炸的中心；在近代的工业化进程中，它也因为崎岖的地形而置身事外。战争与灾难固然给它留下过伤痕，但它始终像一位沉静的长者，避开了时代最喧嚣的洪流。这种“被忽略”反而成了一种福气，让它得以将中世纪的肌理、文艺复兴的细节，乃至后来巴洛克的点缀，一层一层、原原本本地保留下来，没有经历大规模破坏性的“现代化”改造。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，当你今天漫步在托迪，你行走的是一部立体的编年史。从伊特鲁里亚的墙基，到罗马的遗迹，再到中世纪辉煌的广场、文艺复兴时期优雅的贵族宫殿外墙，以及巴洛克风格装饰的教堂内部小礼拜堂……所有的时代痕迹都和谐地交织在一起，没有被粗暴地割裂。时间在这里不是一条直线，而是一个螺旋，每一圈都紧密地贴合着上一圈。这就是托迪最深沉的历史秘密：它不是一个被复原的布景，而是一个从未真正中断过的、缓慢生长的生命体。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味托迪，请务必安排一整天的时间，并做好爬坡上坎的心理准备。理想的节奏是“早出晚归”：尽量在上午九点前抵达，这时旅游巴士尚未到来，古城刚刚苏醒，光线柔和，是拍照和感受宁静氛围的黄金时段。上午可以专注于核心广场区域及主要建筑内部参观；中午在当地小馆享受漫长的午餐；下午则用于探索蜿蜒曲折的巷弄和城墙，最后在城墙的某个角落，守候一场翁布里亚式的壮丽日落。这样的安排张弛有度，既能领略其建筑与历史的精华，也能捕捉到它作为生活场所的日常诗意。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对舒适、防滑的徒步鞋，古城的街道几乎全是斜坡和台阶。
许多小餐厅和店铺下午会关门休息数小时（约下午1点至4点），规划午餐和购物时间要注意。
自驾者千万看清ZTL标志，误入限行区将面临高额罚款，使用停车场后切记在售票机“验票”并放在车内挡风玻璃下。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从罗马门进入古城，顺着Via del Monte缓缓上坡，让两侧古老的石砌房屋和偶尔出现的拱门将你慢慢引入中世纪的氛围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在人民广场的中央站定，顺时针慢慢环视广场三面那三座恢弘的建筑，感受世俗权力、宗教权威与市民空间在此形成的无声对话。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进主座教堂内部，让眼睛适应昏暗的光线，去寻觅那些隐藏在侧廊和礼拜堂里的艺术珍宝，比如乔瓦尼·迪·彼得罗的湿壁画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上人民宫或主教宫的塔楼（如果开放），气喘吁吁之后，收获一个360度无死角的惊喜——整个翁布里亚的绿色丘陵如波浪般在你脚下铺展。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`随意挑一条从广场辐射出去的小巷钻进去，比如Via Ciuffelli，享受迷路的乐趣，发现一个爬满藤蔓的静谧庭院、一家飘着刚烤好饼干香味的老式糕点铺。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着Via del Montarone或Via della Piana漫步到古城东侧的林荫步道，这里视野开阔，是俯瞰台伯河谷和远处山峦的绝佳地点。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前一小时，找到圣福图纳托教堂下方的公共花园或某段城墙缺口，找张长椅坐下，看着夕阳将整座石头城市和远方的大地染成温暖的金红色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐后再次回到人民广场，此时的广场被柔和的灯光点亮，本地人开始他们的晚间散步（passeggiata），融入他们，感受古城夜晚温柔的心跳。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`人民广场仰拍视角`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点前，站在广场靠近主座教堂的一端，用广角镜头仰拍人民宫与主教宫并列的塔楼，此时的侧光能完美勾勒出石头建筑的质感与天空的蔚蓝。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从Via di San Fortunato小巷回望`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，从这条陡峭的小巷中段回头，可以捕捉到主座教堂的侧面与钟楼层层叠叠、镶嵌在狭窄石巷尽头的经典构图，常有居民和猫咪入镜增添生气。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城墙上的全景框景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前，在东南段城墙的某个拱形门洞或缺口处，将门洞作为前景画框，拍摄远处被夕阳笼罩的丘陵、橄榄园和零星农舍，营造深邃的景深和故事感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`咖啡馆的日常切片`}</h4>
                  <p className="text-sm text-gray-700">{`选择广场上咖啡馆外的一张桌子，用长焦镜头悄悄捕捉邻桌老人阅读报纸的侧影、侍者端着咖啡盘的瞬间，背景是宏伟的宫殿立面，人文与建筑在此交融。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄当地居民，尤其是长者，建议先微笑示意获得默许，尊重他们的隐私，避免使用侵略性的长焦怼脸拍。`}</li>
                <li>• {`翁布里亚的晨雾和暮霭是绝佳的自然滤镜，若遇上有薄雾的清晨，务必早起，能拍到古城仿佛悬浮在云端的仙境效果。`}</li>
                <li>• {`室内教堂通常禁止使用闪光灯和三脚架，请提前调整好相机的高感光度设置。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史中心宝石`}</h4>
                  <p className="text-sm text-blue-800">{`入住由十五世纪宫殿改造的精品酒店，房间拥有原始的拱形石顶和古董家具，推开木格窗就是人民广场的绵绵细雨声，下楼即是永恒剧场。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`田园诗庄园`}</h4>
                  <p className="text-sm text-green-800">{`住在古城外三公里处一座被橄榄树和柏树环绕的古老农庄，主人会提供自产的橄榄油和葡萄酒作为欢迎礼，在无边泳池里可以遥望山巅上的托迪剪影。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`艺术家之家`}</h4>
                  <p className="text-sm text-yellow-800">{`选择一位本地画家经营的民宿，位于一条安静的阶梯小巷尽头，房间充满艺术气息，早餐在种满柠檬树的小露台上进行，主人会热情分享只有本地人才知道的隐秘观景角落。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济型舒适之选`}</h4>
                  <p className="text-sm text-purple-800">{`城墙外步行十分钟距离的现代风格家庭旅馆，房间宽敞明亮，主人是一对夫妇，会为你手绘美食地图，并推荐他们最爱的、游客罕至的传统 trattoria 餐馆。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古城内的住宿数量有限且极受欢迎，尤其是旅游旺季（5-9月）和重要节庆期间，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果选择住在城外农庄，虽然拥有绝佳景致和宁静，但意味着晚上进入古城就餐或散步需要驾车（需注意ZTL时间）或叫出租车，略有不便。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`托迪治安非常好，夜晚独自在亮灯的街巷中漫步也倍感安全，这是沉浸式体验古城夜色的一大优势。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开托迪许久后，我时常会想起那个下午，在一条无名小巷的阴影里，看到一位老匠人正全神贯注地雕刻一块窗花。他的动作缓慢而笃定，仿佛时间在他手中有了不同的密度。那一幕，或许就是托迪给我的终极启示。在这个崇尚速度、追逐新潮的世界里，它倔强地守护着另一种时间哲学——一种以世纪为单位生长、以季节为节奏更替、以日常的散步和闲聊为韵律的“深时间”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`来这里，你不是为了收集打卡地标，而是为了体验一种“存在”的状态。它教会你，美并非总是惊涛骇浪的奇观，更可以是一种呼吸般的平常。是阳光在广场石头上移动的轨迹，是午休时分全城陷入的甜蜜寂静，是晚餐时分每个窗口透出的温暖灯光和飘出的食物香气。托迪像一首复杂而宁静的赋格曲，建筑是它的结构，历史是它的和声，而当下从容的生活，才是它永恒流淌的旋律。它让你相信，有些地方，真的可以温柔地战胜时间。对于任何一位渴望在旅途中寻得内心安宁、渴望触摸欧洲历史鲜活脉搏的旅人来说，托迪不是一个选项，它是一种必要的回归——回归到生活本该有的、深邃而诗意的模样。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
