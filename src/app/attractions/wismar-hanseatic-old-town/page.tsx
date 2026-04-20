import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '维斯马汉萨老城 Wismar Old Town｜北海畔被时光封存的汉萨红砖珍宝 - 最佳欧洲景点',
  description: '想象一下，你从略显嘈杂的现代火车站走出来，拐过一个街角，时间仿佛“咔哒”一声被向后拨动了六百年。首先迎接你的不是某个地标建筑的尖顶，而是一种混合着海风、潮湿石板和淡淡咖啡香的气味。脚下的路瞬间变成了被岁月磨得温润光亮的鹅卵石，缝隙里长着青苔。这就是维斯马老城给你的第一印象——它不是一座被圈起来的博物...',
}

export default function WismarHanseaticOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '维斯马汉萨老城', href: '/attractions/wismar-hanseatic-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`维斯马汉萨老城・Wismar Old Town・德国・维斯马`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下，你从略显嘈杂的现代火车站走出来，拐过一个街角，时间仿佛“咔哒”一声被向后拨动了六百年。首先迎接你的不是某个地标建筑的尖顶，而是一种混合着海风、潮湿石板和淡淡咖啡香的气味。脚下的路瞬间变成了被岁月磨得温润光亮的鹅卵石，缝隙里长着青苔。这就是维斯马老城给你的第一印象——它不是一座被圈起来的博物馆，而是一个依然在呼吸、生活着的古老躯体。
你的视线很快就会被那些巍峨的“红色巨人”所俘获。圣尼古拉教堂的塔楼像是用乐高积木搭成的梦幻城堡，但它是真实的，由成千上万块烧制的红砖严丝合缝地砌成，直插波罗的海沿岸总是变幻莫测的灰蓝色天空。阳光偶尔穿透云层，打在教堂立面上，那红色便会呈现出从暖橘到深赭的丰富层次。耳边传来远处港口海鸥的鸣叫，混杂着市集广场上轻柔的德语交谈声和自行车掠过石路的叮铃声。这里没有慕尼黑或科隆那般汹涌的人潮，本地人骑着自行车穿过古老的拱门，主妇在市场喷泉旁闲聊，生活的节奏舒缓得如同潮水。
最打动人的，或许是那种“完整感”。你就像走进了一幅保存完好的中世纪城市剖面图。以巨大的市场广场为中心，蜘蛛网般的狭窄街道辐射开去，每一条都通往一个惊喜：或许是一个藏着精美山墙的庭院，或许是一段残留的古城墙，或许直接就把你引向了波光粼粼的老港口。广场上，文艺复兴风格的市政厅优雅端庄，而环绕它的，是各色建于不同年代、有着陡峭山墙的市民住宅，它们的外墙被刷成柔和的黄、粉、绿色，像一排排性格各异的老人，安静地讲述着从汉萨富豪到普通商贩的世代故事。在这里，历史不是教科书上的名词，而是你指尖触摸到的冰凉砖石，是脚下凹凸不平的路面，是空气里那份咸湿而悠长的味道。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下，你从略显嘈杂的现代火车站走出来，拐过一个街角，时间仿佛“咔哒”一声被向后拨动了六百年。首先迎接你的不是某个地标建筑的尖顶，而是一种混合着海风、潮湿石板和淡淡咖啡香的气味。脚下的路瞬间变成了被岁月磨得温润光亮的鹅卵石，缝隙里长着青苔。这就是维斯马老城给你的第一印象——它不是一座被圈起来的博物馆，而是一个依然在呼吸、生活着的古老躯体。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你的视线很快就会被那些巍峨的“红色巨人”所俘获。圣尼古拉教堂的塔楼像是用乐高积木搭成的梦幻城堡，但它是真实的，由成千上万块烧制的红砖严丝合缝地砌成，直插波罗的海沿岸总是变幻莫测的灰蓝色天空。阳光偶尔穿透云层，打在教堂立面上，那红色便会呈现出从暖橘到深赭的丰富层次。耳边传来远处港口海鸥的鸣叫，混杂着市集广场上轻柔的德语交谈声和自行车掠过石路的叮铃声。这里没有慕尼黑或科隆那般汹涌的人潮，本地人骑着自行车穿过古老的拱门，主妇在市场喷泉旁闲聊，生活的节奏舒缓得如同潮水。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，或许是那种“完整感”。你就像走进了一幅保存完好的中世纪城市剖面图。以巨大的市场广场为中心，蜘蛛网般的狭窄街道辐射开去，每一条都通往一个惊喜：或许是一个藏着精美山墙的庭院，或许是一段残留的古城墙，或许直接就把你引向了波光粼粼的老港口。广场上，文艺复兴风格的市政厅优雅端庄，而环绕它的，是各色建于不同年代、有着陡峭山墙的市民住宅，它们的外墙被刷成柔和的黄、粉、绿色，像一排排性格各异的老人，安静地讲述着从汉萨富豪到普通商贩的世代故事。在这里，历史不是教科书上的名词，而是你指尖触摸到的冰凉砖石，是脚下凹凸不平的路面，是空气里那份咸湿而悠长的味道。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`维斯马汉萨老城`} />
                <InfoRow label="英文名称" value={`Wismar Old Town`} />
                <InfoRow label="正式名称" value={`Historic Old Town of Wismar`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`维斯马`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`北欧汉萨同盟鼎盛时期最强大和繁荣的成员港口之一，其近乎完整的中世纪城市格局与建筑群是波罗的海沿岸汉萨城市的杰出典范。`} />
                <InfoRow label="建筑特色" value={`壮观的砖砌哥特式教堂群、保存完好的中世纪街道网格、以及充满烟火气的带山墙的市民住宅与仓库。`} />
                <InfoRow label="建筑风格" value={`以北德特有的红砖哥特式为主导，混合了文艺复兴、巴洛克及历史主义风格的细节。`} />
                <InfoRow label="文化价值" value={`一座活着的“汉萨城市博物馆”，其城市肌理、建筑与持续的传统，生动见证了中世纪北欧贸易同盟共同的文化、法律与生活方式。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城公共区域全天24小时开放。城内各博物馆、教堂等具体景点开放时间各异：圣尼古拉教堂通常每日上午10点至下午6点开放；市政厅历史展览周一至周五上午10点至下午5点开放；市博物馆周二至周日上午10点至下午5点。许多小型博物馆冬季（11月至3月）会缩短开放时间或仅周末开放，建议行前在官网二次确认。`} />
              <InfoRow label="门票价格" value={`漫步老城街区本身完全免费。进入主要景点需购票：圣尼古拉教堂塔楼登顶门票约4欧元；市博物馆通票约6欧元；市政厅历史展览免费。有联合票可供选择，涵盖2-3个主要博物馆，价格约10欧元。学生、儿童、团体享有优惠。`} />
              <InfoRow label="地址" value={`Alter Hafen, 23966 Wismar, Deutschland`} />
              <InfoRow label="交通方式" value={`从最近的汉堡国际机场出发，最便捷的方式是乘坐火车。在机场火车站搭乘区域列车（RE或RB），通常需要在汉堡主火或Büchen换乘一次，总耗时约2小时至2.5小时，直达列车班次较少。从柏林主火出发，乘坐IC或ICE列车至罗斯托克或施韦林，再换乘区域列车，总耗时约3小时。维斯马火车站位于老城边缘，步行5-10分钟即可进入古城核心区。建议使用德国铁路（DB）App提前查询班次并购买州票（如Mecklenburg-Vorpommern-Ticket），适合多人同行且全天有效。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起维斯马的老，那可真是有年头了。它的故事，和北海与波罗的海的财富紧紧绑在一起。大概在13世纪初，一些精明的商人和手工艺人看中了这个深入内陆的小海湾，既能避风，又便于防御。1229年，它被正式授予“城市权”，命运的齿轮开始飞速转动。很快，它加入了那个中世纪北欧的“商业北约”——汉萨同盟。你想象一下，14、15世纪的维斯马港该是多么热闹的景象！载着挪威的鲱鱼、瑞典的铁、俄国的毛皮和佛兰德布料的船只在这里进进出出，码头上的起重机吱呀作响，仓库里堆满货物，来自四面八方的商人用低地德语讨价还价。财富如潮水般涌来，催生了城市建设的狂潮。那些我们今天仰望的巨人——圣玛利亚、圣乔治，尤其是雄伟的圣尼古拉教堂，都是在这个“不差钱”的黄金时代奠基建造的。圣尼古拉教堂，这个拥有世界上最高的砖结构拱顶（高达37米）的庞然大物，就是汉萨财富与建筑技艺最狂妄的宣言。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的潮水有涨就有落。1648年，结束三十年战争的《威斯特伐利亚和约》签订，维斯马的命运发生了戏剧性的转折。它被作为战利品，划归给了瑞典王国。从此，这座德国城市开始了长达一百多年的“瑞典时期”。瑞典人可不是来破坏的，他们把这里视为在德意志领土上的重要桥头堡和军港。你如今在老城看到的许多坚固的防御工事遗迹，比如那些厚重的城墙片段和星形堡垒的轮廓，很多都是瑞典工程师的手笔。他们还带来了巴洛克风格的审美，市政厅的改建就深受影响。这段异国统治的岁月，像一层独特的釉彩，叠加在了维斯马原本汉萨风格的红砖底色上。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`瑞典统治在1803年终结，维斯马回归了梅克伦堡大公国。但它的商业地位已随汉萨同盟一起衰落，反而因祸得福，躲过了19世纪迅猛的工业化改造狂潮。当别的城市忙着拆城墙、拓宽马路、建起工厂时，维斯马仿佛打了个盹儿，基本维持着中世纪的模样。这种“停滞”成了它日后最大的财富。但真正的考验在20世纪来临。二战末期，猛烈的空袭摧毁了老城近一半的建筑，包括宏伟的圣玛利亚教堂，只剩下一座孤零零的塔楼矗立在废墟中，如同一个沉默的感叹号。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战后的维斯马属于东德。在物资匮乏、崇尚实用主义的年代，重建工作是缓慢而艰难的。但令人敬佩的是，人们没有推倒重来，而是选择了“修补”。他们用能找到的材料，小心翼翼地修复那些幸存的古老山墙住宅，一砖一瓦地让城市恢复旧观。两德统一后，更有系统和科学的修复工程全面展开。2002年，维斯马与姊妹城市施特拉尔松德一起，因其无与伦比的原真性和完整性，被联合国教科文组织列为世界文化遗产。这不是对一座宫殿或教堂的认可，而是对一整座活生生的中世纪汉萨城市的加冕。今天的宁静与完整，背后是几个世纪的繁荣、异国统治、战火摧残与坚韧重生的漫长史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你安排一整天的时间给维斯马老城，它的美需要从容的步伐来丈量。最好在上午九点左右抵达，这时晨光柔和，旅游团还未涌入，你能独享古城苏醒时的静谧。整个游览节奏应是“先外后内，由广至深”：先从老港口和城墙遗迹开始，感受它的海港基因与防御轮廓；然后深入心脏地带的市场广场，领略市民生活的核心；接着逐一探访三座伟大教堂的遗迹与现存，体会信仰与艺术的高度；最后穿行于纵横的街巷，发现意外的细节。这样的路线顺理成章地串联起了城市的功能、权力、信仰与日常生活四个层面。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`市场广场每周三和周六上午有传统市集，非常热闹，能买到本地农产品，但此时广场拍照会充满生活气息而非空镜美感，请根据喜好选择。老城街道多为鹅卵石路面，请务必穿一双舒适耐走的鞋子。餐馆菜单上海鲜非常新鲜，但价格可能略高，广场周边餐馆多为游客区，往旁边小巷走几步常有性价比更高的选择。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从火车站出来，先别急着进城，往南稍微绕一点路去老港口，看看那些彩色的古老仓库和安静的帆船，感受海风如何塑造了这座城市的性格。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着残留的古城墙走向巨大的市场广场，让自己被那个号称北德最美之一的广场空间和中央的荷兰文艺复兴式水井瞬间震撼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在圣玛利亚教堂遗址那孤独而崇高的塔楼下，触摸那些烧焦的砖石，感受历史伤痕的重量与战后重生的决心。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进圣尼古拉教堂令人眩晕的中殿，仰头凝视那37米高的网状拱顶，让透过彩色玻璃的光线为你上演一场无声的光影戏剧。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`攀爬圣乔治教堂的塔楼（如果开放），在旋转的狭窄楼梯尽头，收获一个将红砖屋顶、远处波罗的海与整个老城格局尽收眼底的全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选一条如“霍恩街”这样迷人的小巷慢悠悠地穿行，抬头欣赏每一栋山墙住宅上各不相同的装饰细节，想象里面几百年的生活故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在下午的暖阳里，找一家面对广场或港口的咖啡馆坐下，点一杯咖啡和一块经典的“维斯马杏仁饼”，把自己当作风景的一部分。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`老港口东侧拍摄剪影`}</h4>
                  <p className="text-sm text-gray-700">{`黄昏时分，以停泊的古典帆船为前景，将圣尼古拉教堂的塔楼和仓库建筑群的倒影一同纳入港湾的水面中，构图宁静而富有层次。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`市场广场水井旁低角度仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`利用广角镜头，贴近广场中央的“ Wasserkunst ”水井，以它精美的雕塑为前景，仰拍背后宏伟的市政厅立面，凸显建筑的威严与细节。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣玛利亚教堂塔楼废墟框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`走到塔楼西侧，利用其残留的拱门或窗框作为天然画框，框住远处完整的圣乔治教堂或一片典型的红砖山墙住宅，形成历史废墟与生命延续的强烈对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣乔治教堂塔楼顶俯瞰全景`}</h4>
                  <p className="text-sm text-gray-700">{`如果塔楼开放，登顶后使用长焦镜头压缩空间，拍摄老城红色屋顶海洋中，几座教堂塔楼如船只桅杆般耸立的经典画面，尤其在侧光下屋顶色彩和质感最佳。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`“天使庭院”捕捉光影`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光斜射时，找到老城内如“Engelhof”这样的封闭庭院，拍摄光线在色彩柔和的墙壁、木筋墙和爬藤植物上产生的迷人光影与几何构图。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄教堂内部前请务必确认是否允许使用闪光灯和三脚架，通常出于保护和礼拜原因被禁止。无人机飞行在德国城市中心区有严格限制，维斯马老城属于禁飞区，请勿尝试。尊重当地居民隐私，避免将镜头直接对准私人住宅的窗户或庭院内活动的居民。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济优选`}</h4>
                  <p className="text-sm text-blue-800">{`由一栋历史山墙建筑改造的温馨家庭旅馆，房间不大但干净明亮，主人会热情地为你手绘老城美食地图，早餐的 homemade 果酱是一绝。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`坐落在一栋16世纪汉萨商人故居里的精品酒店，房间保留了古老的木梁和砖墙，现代化设施却一应俱全，晚上在厚重的石墙内睡得格外香甜。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`位于老港口畔的五星级酒店，由历史仓库巧妙改建而成，拥有直面港湾水景的绝佳露台，在房间内就能看到船只归航与圣尼古拉教堂的灯光秀。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`便捷之选`}</h4>
                  <p className="text-sm text-purple-800">{`火车站附近步行5分钟内的现代设计酒店，风格简约，隔音良好，适合需要早起赶火车或追求极致便利的旅行者。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城核心区的住宿多为历史建筑，房间格局可能不规则，楼梯通常较陡且没有电梯，预订时如有大件行李或行动不便需特别注意。夏季旅游旺季和周末（尤其是节庆期间）住宿非常紧张，务必提前数月预订。老城治安整体非常好，夜间独自行走也很安全，但港口区域夜间照明相对较暗，建议结伴。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开维斯马很久以后，记忆里最清晰的，可能不是某一张明信片般的标准景，而是某个瞬间的复合感受：可能是午后在空无一人的小巷里，突然听见头顶阁楼窗户被推开的声音；可能是站在圣玛利亚教堂的废墟前，看到一株小野花从砖缝里顽强探出头的生命张力；也可能是市场广场上，那位骑着老式自行车、车篮里装着长棍面包的老先生，从容消失在拱门下的背影。这些瞬间让你明白，世界遗产的头衔并非将这里冻结，而是为一种古老而珍贵的生活节奏提供了庇护所。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求崭新、快速和爆炸性体验的时代，维斯马提供了一种相反的、却更为深邃的旅行价值——那就是“完整性”与“连续性”带来的内心宁静。它没有巴黎的炫目、罗马的磅礴，但它拥有一种罕见的、未被肢解的城市灵魂。在这里，你行走的不仅仅是一个景点，而是一个依然功能健全、生生不息的古老生命体。它告诉你，历史不是断裂的章节，而是一条绵延至今的长河，我们每个人都既是其中的浪花。对于任何想要逃离浮光掠影、真正触摸欧洲北方历史脉络与生活质感的旅人来说，维斯马汉萨老城都是一个值得你专程前来，住上一两晚，用脚步和心灵去细细阅读的、活着的历史书籍。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/trier-roman-monuments" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特里尔古罗马遗迹</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Roman Monuments of Trier</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/nordlingen-ries-crater-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    讷
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">讷德林根（陨石坑小镇）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Nördlingen</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/schwaebisch-hall" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施瓦本哈尔古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Schwäbisch Hall Old Town</p>
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
