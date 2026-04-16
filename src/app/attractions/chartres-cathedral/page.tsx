import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '沙特尔大教堂 Chartres Cathedral｜哥特艺术的巅峰与人类精神的纪念碑 - 最佳欧洲景点',
  description: '记得我第一次从麦田边缘的公路上望见它时，那两个轮廓分明的尖塔仿佛不是从沙特尔老城的屋顶上升起，而是从时间本身里穿刺出来。一个粗犷敦厚，像历经风霜的罗马式堡垒；一个纤细华丽，宛如石雕的花边直通天堂。那种不对称的美，带着一种倔强的、未经修饰的真实感，瞬间就攫住了我的心。空气里是法国北部乡村特有的、混合着...',
}

export default function ChartresCathedralPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '沙特尔大教堂', href: '/attractions/chartres-cathedral' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">沙特尔大教堂・Chartres Cathedral・法国・沙特尔</h1>
          <p className="text-lg text-gray-600 mb-6">
            记得我第一次从麦田边缘的公路上望见它时，那两个轮廓分明的尖塔仿佛不是从沙特尔老城的屋顶上升起，而是从时间本身里穿刺出来。一个粗犷敦厚，像历经风霜的罗马式堡垒；一个纤细华丽，宛如石雕的花边直通天堂。那种不对称的美，带着一种倔强的、未经修饰的真实感，瞬间就攫住了我的心。空气里是法国北部乡村特有的、混合着成熟麦粒与湿润泥土的气息，而那座教堂，就沉默地矗立在地平线上，像一个巨大的、关于信仰与美的谜题。
当我推开那扇沉重的木门，从明亮的室外踏入中殿的幽暗时，整个世界的声音仿佛被瞬间吸走了。紧接着，一种混杂着古老石头冷冽气味、淡淡蜡烛蜡油味、以及年代久远的木头微香的气息包裹了我。然后，光来了。那不是普通的光，是从四面八方那些高耸的彩色玻璃窗倾泻而下的、有颜色的光。宝石般的蓝，炽热的红，威严的紫，生命的绿……它们不再是光线，而是液态的梦境，在斑驳的石柱和历经八百年千万人踩踏而光滑如镜的石板地上流淌、跳跃。空气中有微尘在光柱中舞蹈，远处偶尔传来一声轻轻的咳嗽或是导游压低的法语音节，更反衬出这片空间的深邃与神圣。那一刻我忽然明白，这座建筑本身就是一个巨大的乐器，光与影是它的音符，而沉默是它的和弦。
它绝非一个冰冷的博物馆。我看到当地的老妇人握着念珠，在侧殿的圣母像前长久静默；看到学生模样的年轻人仰着头，举着讲解图册，努力辨认彩窗上圣经故事的细节；也看到风尘仆仆的游客，和我一样，在迷宫图案的中心盘腿坐下，只是发呆。这座教堂早已渗入了沙特尔人的日常血脉，它是地标，是精神归宿，也是社区骄傲的源泉。每周日的管风琴声会响彻穹顶，市场里的小贩会以它为方向指路，孩子们在广场上追逐鸽子，背景永远是那两座沉默的尖塔。它的核心魅力，就在于这种不可思议的完整性——它几乎毫发无损地从13世纪穿越而来，将那个时代人类最极致的虔诚、最精湛的技艺和最宏大的宇宙观，原封不动地呈现在你面前，让你得以用双眼阅读，用双脚丈量，用心灵去触碰一段依然活着的历史。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">记得我第一次从麦田边缘的公路上望见它时，那两个轮廓分明的尖塔仿佛不是从沙特尔老城的屋顶上升起，而是从时间本身里穿刺出来。一个粗犷敦厚，像历经风霜的罗马式堡垒；一个纤细华丽，宛如石雕的花边直通天堂。那种不对称的美，带着一种倔强的、未经修饰的真实感，瞬间就攫住了我的心。空气里是法国北部乡村特有的、混合着成熟麦粒与湿润泥土的气息，而那座教堂，就沉默地矗立在地平线上，像一个巨大的、关于信仰与美的谜题。</p>
              <p className="text-gray-700 leading-relaxed mb-4">当我推开那扇沉重的木门，从明亮的室外踏入中殿的幽暗时，整个世界的声音仿佛被瞬间吸走了。紧接着，一种混杂着古老石头冷冽气味、淡淡蜡烛蜡油味、以及年代久远的木头微香的气息包裹了我。然后，光来了。那不是普通的光，是从四面八方那些高耸的彩色玻璃窗倾泻而下的、有颜色的光。宝石般的蓝，炽热的红，威严的紫，生命的绿……它们不再是光线，而是液态的梦境，在斑驳的石柱和历经八百年千万人踩踏而光滑如镜的石板地上流淌、跳跃。空气中有微尘在光柱中舞蹈，远处偶尔传来一声轻轻的咳嗽或是导游压低的法语音节，更反衬出这片空间的深邃与神圣。那一刻我忽然明白，这座建筑本身就是一个巨大的乐器，光与影是它的音符，而沉默是它的和弦。</p>
              <p className="text-gray-700 leading-relaxed mb-4">它绝非一个冰冷的博物馆。我看到当地的老妇人握着念珠，在侧殿的圣母像前长久静默；看到学生模样的年轻人仰着头，举着讲解图册，努力辨认彩窗上圣经故事的细节；也看到风尘仆仆的游客，和我一样，在迷宫图案的中心盘腿坐下，只是发呆。这座教堂早已渗入了沙特尔人的日常血脉，它是地标，是精神归宿，也是社区骄傲的源泉。每周日的管风琴声会响彻穹顶，市场里的小贩会以它为方向指路，孩子们在广场上追逐鸽子，背景永远是那两座沉默的尖塔。它的核心魅力，就在于这种不可思议的完整性——它几乎毫发无损地从13世纪穿越而来，将那个时代人类最极致的虔诚、最精湛的技艺和最宏大的宇宙观，原封不动地呈现在你面前，让你得以用双眼阅读，用双脚丈量，用心灵去触碰一段依然活着的历史。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="沙特尔大教堂" />
                <InfoRow label="英文名称" value="Chartres Cathedral" />
                <InfoRow label="正式名称" value="Chartres Cathedral" />
                <InfoRow label="国家" value="法国" />
                <InfoRow label="城市" value="沙特尔" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="它是法国乃至全世界保存最完好的中世纪象征主义百科全书，其建筑、雕塑与彩窗共同构成了一个完整无缺的12-13世纪信仰宇宙。" />
                <InfoRow label="建筑特色" value="两座不对称的尖塔直刺苍穹，内部拥有172扇几乎没有被后世改动过的13世纪原始彩色玻璃窗，以及一个铺设于中殿地面的巨大圆形迷宫。" />
                <InfoRow label="建筑风格" value="法国哥特式建筑艺术的巅峰之作，标志着从罗马式厚重敦实向哥特式轻盈升腾的彻底转变。" />
                <InfoRow label="文化价值" value="不仅仅是一座宗教建筑，更是中世纪人类试图通过石头与光来理解神性、宇宙与自身位置的终极尝试，是物质与精神完美结合的不朽丰碑。" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="主座堂通常每日上午8:30至晚上7:30开放，具体时间随季节微调，夏季（4月至9月）可能延长至晚上8点，冬季（10月至3月）可能提前至晚上7点关闭。钟楼和地下室有独立的参观时段，一般为上午9:30至中午12:30，下午2:00至5:30，且受天气和特殊宗教活动影响可能临时关闭或调整。请注意，周日上午及重大宗教节日期间，主殿优先用于礼拜，游览可能受限。" />
              <InfoRow label="门票价格" value="进入主座堂本身免费。攀登北侧钟楼（Clocher Neuf）参观费用为8欧元，优惠票价为5欧元（适用于学生、65岁以上长者及团体）。参观地下古教堂（Crypt）通常需参加由教堂官方组织的导览团，费用约为7欧元。联票（钟楼+地下室导览）约为12欧元。18岁以下儿童在成人陪同下通常免费。部分宗教节日可能对所有游客免费开放。" />
              <InfoRow label="地址" value="16 Cloître Notre Dame, 28000 Chartres, France" />
              <InfoRow label="交通方式" value="从巴黎出发最为便捷。从巴黎蒙帕纳斯火车站（Gare Montparnasse）乘坐前往沙特尔（Chartres）的TER或Intercités列车，车程约60-70分钟，班次频繁，高峰时段每小时2-3班。建议提前在SNCF官网或手机App购票，非高峰时段或提前预订可享折扣。抵达沙特尔火车站后，大教堂巍峨的尖塔即是路标，出站后沿着Rue de la Pie步行约10-15分钟上坡即可抵达，全程有明显的指示牌。若自驾，从巴黎经A10/A11高速公路约1小时车程，老城区周边有付费停车场。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">沙特尔与圣母的渊源，可以追溯到更早的凯尔特和罗马时期，这里一直是一片圣地。传说在教堂的地下，保存着一件无价之宝——“圣母圣衣”，据说是圣母玛利亚在耶稣降生时所披。这件圣物使沙特尔在中世纪成为欧洲最重要的朝圣中心之一，其地位仅次于圣地亚哥·德孔波斯特拉。而我们所见的这座伟大建筑，诞生于一场凤凰涅槃般的烈火。1194年6月10日，一场可怕的大火吞噬了沙特尔城，也几乎将前一座罗马式教堂化为灰烬。正当人们陷入绝望，以为圣衣也一同焚毁时，奇迹发生了：三天后，教士们从废墟下的地下室里安然无恙地捧出了保存圣衣的圣物箱。这被视作圣母显灵，昭示着她希望在这里拥有一座更宏伟的殿堂。</p>
              <p className="text-gray-700 leading-relaxed mb-4">于是，一场近乎狂热的全民建设运动开始了。从国王、贵族到普通市民、商人，整个法兰西王国的资源与热情都被调动起来。人们捐款、出力，将这座新教堂的兴建视为一项集体的救赎工程。建筑工地成了当时最先进的“科技与艺术中心”，来自四面八方的石匠、玻璃工匠、雕塑家、铁匠汇聚于此。在短短二十六年（1194-1220年）里，大教堂的主体便奇迹般地建成并祝圣。这个速度在当时是惊人的，它得益于一套高度组织化的“石匠工会”体系，以及一种统一的、充满激情的建筑愿景——那就是对“光”的极致追求。他们发明了飞扶壁，将墙壁从沉重的承重中解放出来，然后凿出巨大的窗洞，用铅条将成千上万片彩色玻璃拼成讲述圣经故事与自然奥秘的图画。沙特尔蓝，那种独一无二、深邃如夜空的钴蓝色，便是在这里诞生并达到巅峰，其配方至今仍是个谜。</p>
              <p className="text-gray-700 leading-relaxed mb-4">此后的几个世纪，它既是信仰的灯塔，也是多舛历史的见证者。百年战争期间，城墙外的战火纷飞，市民们却依然在教堂内寻求庇护与希望。法国大革命的风暴席卷而来时，它一度面临被拆毁或改为“理性神庙”的危机，是当地民众的勇敢请愿和一位富有远见的市政官员的巧妙周旋，才让它的主体结构和大部分彩窗幸免于难。最惊心动魄的篇章发生在第二次世界大战。1944年8月，盟军逼近沙特尔，德军在教堂两座高耸的尖塔上设立了炮兵观察哨。一旦盟军轰炸，这座人类瑰宝将顷刻化为乌有。一位名叫韦尔科尔的美国陆军军官，在请示未果的情况下，冒着军事法庭审判的风险，派出了一名会说法语的年轻士兵，孤身潜入德军防线，与守军谈判。最终，德军指挥官出于对人类文化遗产的尊重（或者说，意识到顽抗已无意义），同意了撤离。沙特尔大教堂，就这样在战争的最后边缘，被一个人的良知与勇气从毁灭中拯救。</p>
              <p className="text-gray-700 leading-relaxed mb-4">今天，当你抚摸它冰凉的石壁，仰望那些在轰炸威胁下被小心翼翼拆卸、战后又被一片片重新拼装起来的彩窗，你所感受到的，已不止是中世纪工匠的虔诚。那是层层叠叠的时间的重量，是战争与和平、毁灭与守护、愚昧与智慧共同写就的史诗。它之所以能近乎完美地留存，不是因为幸运，而是因为在一代又一代人心中，它代表的价值，超越了任何一时的纷争与狂热。它从灰烬中重生，在战火下幸存，最终静静地站在厄尔河畔的山丘上，成为人类精神韧性最坚实的证明。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  要真正品味沙特尔，我强烈建议你留出完整的一天，或者至少一个充裕的上午加中午。最佳的抵达时间是早上九点前，这时旅游团的大巴尚未涌入，晨光正以最佳角度掠过西立面的皇家大门。整体游览大约需要3到4小时，节奏宜张弛有度：先以外观震撼心灵，再进入内部让感官沉浸，最后登高望远，将一切收于眼底。这样的安排能让你从宏观到微观，从历史到艺术，层层深入地理解这座建筑的伟大。别忘了，参观不是赛跑，在迷宫里坐一会儿，或在某扇彩窗前发发呆，才是深度体验的精髓。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>尽量避开周日上午和法国公共假期，那是当地信徒做弥撒的高峰期，游览会受限且氛围不同。教堂内部分区域地面古老石板光滑且不平，务必穿着舒适防滑的鞋子。警惕教堂广场上主动搭讪、提供“免费”导游或售卖纪念品的人，所有官方导览服务均在教堂内指定柜台。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">清晨先从教堂南侧的“法国花园”开始，远眺两座不对称尖塔在朝阳下拉出的长长影子，感受它作为城市主宰者的威严姿态。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">绕到西立面，花至少二十分钟细细端详“皇家大门”上那些虽然有些磨损却依然气势恢宏的基督与圣徒雕像，看看门楣上雕刻的《最后的审判》。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">轻轻推开中央青铜大门，踏入中殿，让自己先停留在门口适应那份昏暗与肃穆，看前方祭坛被远处彩窗投下的光晕神秘地照亮。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">沿着北侧廊慢慢走，重点仰望那扇巨大的“北玫瑰窗”，感受以蓝色为基调的冷峻光辉如何描绘旧约先知与圣母。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">俯身寻找中殿地面上那个由黑色和白色石块铺成的巨大圆形迷宫，尝试沿着蜿蜒的路径走到中心，这是中世纪朝圣者“心灵朝圣”的象征。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">攀登北侧“新钟楼”那三百多级狭窄的石阶，在喘息中抵达塔顶，让整个沙特尔老城如棋盘般铺展在你脚下，远眺无际的博斯平原。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">最后，回到侧殿某个安静的角落，比如圣皮耶礼拜堂，静静地坐下，抛开导览器，只是用眼睛看光线的移动，用耳朵听空间的回响。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 南侧花园麦田远景</h4>
                  <p className="text-sm text-gray-700">下午四五点，夕阳为教堂尖塔勾勒出金边时，从花园南侧的小径回望，能将教堂、花园和远方的平原一同纳入镜头，构图充满层次感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 西立面皇家大门特写</h4>
                  <p className="text-sm text-gray-700">利用上午的侧光（九点到十一点最佳），光线能清晰刻画雕像面部和衣褶的深邃阴影，凸显罗马式雕塑的厚重力量感。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 北玫瑰窗内部光影</h4>
                  <p className="text-sm text-gray-700">选择一个晴朗的正午，阳光最烈时，站在玫瑰窗正下方的中殿位置，仰拍彩色光线如瀑布般洒落在石柱和祈祷者身上的神圣场景。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 迷宫中心俯拍</h4>
                  <p className="text-sm text-gray-700">等到游客较少时，站在迷宫旁的回廊二楼（如果开放），向下俯拍，可以完整捕捉到这个直径近13米的巨大几何图案的全貌与神秘感。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 钟楼顶部俯瞰老城</h4>
                  <p className="text-sm text-gray-700">使用广角镜头，在钟楼顶的观景台，将前景的石雕怪兽排水口与背景下如玩具模型般的红瓦屋顶、蜿蜒河流一同构图，讲述时间的故事。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 室内光线极其昏暗，高感光度性能好的相机和大光圈镜头至关重要，利用石柱等稳定身体进行长曝光是不错的选择，但官方严禁使用三脚架。拍摄时请绝对关闭闪光灯，它不仅会破坏氛围，更会对数百年的彩窗和颜料造成不可逆的伤害。始终对正在祈祷的信徒保持尊重，避免将镜头直接对准他们的面部。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">老城中心古董宅邸</h4>
                  <p className="text-sm text-blue-800">入住一栋由16世纪贵族府邸改造的精品酒店，房间内有裸露的原木横梁和古旧的壁炉，推开窗就能看见大教堂的侧影，夜晚听着钟声入睡。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">厄尔河畔静谧旅馆</h4>
                  <p className="text-sm text-green-800">选择一家位于教堂山脚下、厄尔河边的舒适旅馆，清晨在潺潺水声中醒来，步行两分钟即可开始探索，性价比极高且充满生活气息。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">乡间庄园式住宿</h4>
                  <p className="text-sm text-yellow-800">若想体验博斯平原的田园诗意，可以驱车十分钟入住城外一座19世纪的庄园宅院，在开满鲜花的庭院里享用早餐，远眺田野尽头教堂的尖顶。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">现代设计风格民宿</h4>
                  <p className="text-sm text-purple-800">对于喜欢当代感的旅行者，老城边缘有一些由设计师打造的现代公寓式民宿，设施新颖，空间开阔，提供自助厨房，适合家庭或长住。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">沙特尔老城区非常安全且宁静，夜晚街道人烟稀少，只有几家温馨的小餐馆亮着灯，是体验法国小镇慢生活的绝佳之地。夏季旅游旺季和周末，中心区的特色住宿非常紧俏，务必提前数周甚至数月预订。如果选择城外住宿，请务必确认是否有方便的停车位或交通接驳。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开沙特尔很久以后，我闭上眼，脑海里最先浮现的并不是某扇具体的彩窗，也不是某个精确的雕塑细节，而是一种整体的、弥漫性的感觉——一种被浩瀚与静谧同时包裹的慰藉。在这个一切都追求快速、扁平、即时满足的时代，沙特尔大教堂像一颗固执的、缓慢跳动的心脏。它不讨好你，不迎合你的快节奏，它只是在那里，用它的巨大、它的古老、它的复杂，要求你停下，仰望，思考，并最终臣服于某种远大于自我的存在。它提醒我们，人类曾用几代人的时间，去打磨一块石头，烧制一片玻璃，只为讲述一个故事，接近一种永恒。</p>
              <p className="text-gray-700 leading-relaxed mb-4">所以，每一位热爱深度游的旅人，都应该来这里一次。它不仅仅是一个景点，更是一堂关于耐心、协作与精神追求的沉浸式大师课。在这里，你会看到，美可以如何超越实用，信仰可以如何激发最高形式的艺术，而人类的集体心血，可以创造出何等抵抗时间侵蚀的奇迹。当你触摸着那些被无数前人手掌磨光的石头柱础，当你坐在迷宫中心感到一种奇异的平静时，你连接的不仅是十三世纪的法国，更是人类内心那种共通的、对意义、对光明、对超越性彼岸的永恒渴望。沙特尔是一个目的地，更是一面镜子，照见我们自身在喧嚣尘世中，那份未曾泯灭的、对深邃与崇高的向往。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
