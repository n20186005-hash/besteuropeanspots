import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '代尔夫特老城 Historic Centre of Delft｜维米尔的故乡与蓝陶之都，漫步在缩小版的阿姆斯特丹运河畔 - 最佳欧洲景点',
  description: '还记得我第一次踏进代尔夫特老城时的感觉吗？那不是一种突如其来的震撼，而是一种缓缓渗入心底的宁静与熟悉。火车站的喧嚣在步行十分钟后迅速褪去，当你穿过一条普通的现代街道，眼前毫无预兆地展开一片被运河怀抱的旧世界时，时间仿佛瞬间慢了下来。最先抓住你耳朵的，是水波轻轻拍打古老石岸的“啪嗒”声，还有自行车轮碾...',
}

export default function DelftHistoricCentrePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '代尔夫特老城', href: '/attractions/delft-historic-centre' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">代尔夫特老城・Historic Centre of Delft・荷兰・代尔夫特</h1>
          <p className="text-lg text-gray-600 mb-6">
            还记得我第一次踏进代尔夫特老城时的感觉吗？那不是一种突如其来的震撼，而是一种缓缓渗入心底的宁静与熟悉。火车站的喧嚣在步行十分钟后迅速褪去，当你穿过一条普通的现代街道，眼前毫无预兆地展开一片被运河怀抱的旧世界时，时间仿佛瞬间慢了下来。最先抓住你耳朵的，是水波轻轻拍打古老石岸的“啪嗒”声，还有自行车轮碾过运河桥面石板时那清脆的“咔哒”声。空气里有一种混合了湿润水汽、老砖墙的微尘味，以及从街角面包店飘出的、带着焦糖香气的淡淡甜味。
这里的生活节奏，就像运河的水一样，平静而有序。你会看到头发花白的老先生，正小心翼翼地用长柄刷子清洗他家临河窗户的每一块玻璃；主妇们骑着前框载满鲜花和食物的自行车，轻盈地穿过窄桥；学生们则三三两两地坐在运河边的长椅上，晒着太阳看书。代尔夫特老城不是一个僵化的博物馆，它是一座活着的、呼吸着的城市。那些有着阶梯式或钟形山形墙的砖砌房屋，许多底层现在是咖啡馆、独立设计小店或画廊，楼上则仍然住着人家。阳光好的下午，临河的咖啡馆露座总是满的，人们就这样面朝着波光粼粼的运河水，喝一杯咖啡，仿佛在欣赏一幅永远在变化的流动油画。
而这座城市最打动人心的核心魅力，在于它那惊人的和谐与尺度感。它没有阿姆斯特丹那样宏伟喧闹，也不像一些旅游小镇那样过于精巧刻意。它的运河更窄，街道更亲切，建筑的高度也恰到好处，让你总觉得视线可以轻松地越过屋顶，看到那两座标志性的教堂尖塔——新教堂的尖塔锐利地刺向天空，旧教堂的塔身则略显倾斜，温柔地俯瞰着众生。这种尺度让人感到安心，仿佛你不再是匆匆过客，而是可以轻易融入其中，成为这静谧画面里一个自在的逗点。特别是当傍晚的“黄金时刻”来临，夕阳给所有的砖墙、桥梁和窗棂都镀上一层温暖的金红色，整个老城就像是从维米尔的画框里直接走了出来，散发着一种内敛而永恒的光芒。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">还记得我第一次踏进代尔夫特老城时的感觉吗？那不是一种突如其来的震撼，而是一种缓缓渗入心底的宁静与熟悉。火车站的喧嚣在步行十分钟后迅速褪去，当你穿过一条普通的现代街道，眼前毫无预兆地展开一片被运河怀抱的旧世界时，时间仿佛瞬间慢了下来。最先抓住你耳朵的，是水波轻轻拍打古老石岸的“啪嗒”声，还有自行车轮碾过运河桥面石板时那清脆的“咔哒”声。空气里有一种混合了湿润水汽、老砖墙的微尘味，以及从街角面包店飘出的、带着焦糖香气的淡淡甜味。</p>
              <p className="text-gray-700 leading-relaxed mb-4">这里的生活节奏，就像运河的水一样，平静而有序。你会看到头发花白的老先生，正小心翼翼地用长柄刷子清洗他家临河窗户的每一块玻璃；主妇们骑着前框载满鲜花和食物的自行车，轻盈地穿过窄桥；学生们则三三两两地坐在运河边的长椅上，晒着太阳看书。代尔夫特老城不是一个僵化的博物馆，它是一座活着的、呼吸着的城市。那些有着阶梯式或钟形山形墙的砖砌房屋，许多底层现在是咖啡馆、独立设计小店或画廊，楼上则仍然住着人家。阳光好的下午，临河的咖啡馆露座总是满的，人们就这样面朝着波光粼粼的运河水，喝一杯咖啡，仿佛在欣赏一幅永远在变化的流动油画。</p>
              <p className="text-gray-700 leading-relaxed mb-4">而这座城市最打动人心的核心魅力，在于它那惊人的和谐与尺度感。它没有阿姆斯特丹那样宏伟喧闹，也不像一些旅游小镇那样过于精巧刻意。它的运河更窄，街道更亲切，建筑的高度也恰到好处，让你总觉得视线可以轻松地越过屋顶，看到那两座标志性的教堂尖塔——新教堂的尖塔锐利地刺向天空，旧教堂的塔身则略显倾斜，温柔地俯瞰着众生。这种尺度让人感到安心，仿佛你不再是匆匆过客，而是可以轻易融入其中，成为这静谧画面里一个自在的逗点。特别是当傍晚的“黄金时刻”来临，夕阳给所有的砖墙、桥梁和窗棂都镀上一层温暖的金红色，整个老城就像是从维米尔的画框里直接走了出来，散发着一种内敛而永恒的光芒。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="代尔夫特老城" />
                <InfoRow label="英文名称" value="Historic Centre of Delft" />
                <InfoRow label="正式名称" value="Historic Centre of Delft" />
                <InfoRow label="国家" value="荷兰" />
                <InfoRow label="城市" value="代尔夫特" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="一座在荷兰黄金时代因陶瓷贸易、科学与艺术（尤其是维米尔）而繁荣，并至今完整保存了中世纪格局与水都风貌的典范城市。" />
                <InfoRow label="建筑特色" value="由错综复杂的运河网络串联起的砖砌房屋、带山形墙的商人宅邸、宁静的带拱桥庭院（hofjes），以及高耸的砖砌教堂塔楼共同构成的和谐画面。" />
                <InfoRow label="建筑风格" value="以典型的荷兰文艺复兴及古典主义风格为主，砖结构建筑是其灵魂，并融合了后期的一些巴洛克元素。" />
                <InfoRow label="文化价值" value="它不仅是荷兰黄金时代商贸与市民文化的活化石，更是作为画家约翰内斯·维米尔的诞生地与创作背景，将日常生活的诗意永恒定格在了艺术史中。" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="老城公共区域全天24小时开放。但内部景点（如新教堂、旧教堂、维米尔中心等）开放时间各异，通常为周二至周日10:00-17:00，周一可能开放较晚或闭馆。王家代尔夫特蓝陶厂开放时间通常为9:00-17:00。具体开放时间建议出行前在官网核实，并注意冬季（11月-3月）部分景点可能缩短开放时间。" />
              <InfoRow label="门票价格" value="进入老城街区免费。内部景点需单独购票：新教堂成人票约9.5欧元，旧教堂约8.5欧元，两教堂联票约15欧元。维米尔中心约12.5欧元。王家代尔夫特蓝陶厂参观（含导览）约16欧元。持有荷兰博物馆卡（Museumkaart）可免费进入大部分博物馆和教堂。学生、65岁以上老人通常享有折扣。" />
              <InfoRow label="地址" value="Markt 1, 2611 GP Delft, Netherlands" />
              <InfoRow label="交通方式" value="从阿姆斯特丹史基浦机场出发最便捷：直接在机场火车站乘坐直达代尔夫特的区间列车（Sprinter），车程约40-50分钟，班次频繁（约每10-15分钟一班），单程票价约10欧元。从鹿特丹中央火车站出发，乘坐火车约12分钟即可抵达代尔夫特，班次极密（约每5-10分钟一班）。从海牙中央火车站出发则只需约10分钟。抵达代尔夫特火车站后，老城核心区就在步行10-15分钟的范围内，无需再乘坐其他交通工具。建议购买OV-chipkaart（荷兰公共交通卡）或使用信用卡直接刷卡进出站。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">说起代尔夫特的故事，它的起点其实比我们熟知的“黄金时代”要早得多。早在11世纪，这里就因为一条名叫“德尔夫”的小河（Delf，意为挖掘）而逐渐形成聚落，人们在此挖渠排水，开垦土地，并沿着水道进行贸易。1246年，伯爵威廉二世授予代尔夫特城市权利，这成了它命运的转折点。一条条运河被有计划地开挖出来，它们不仅是交通动脉，更是城市的防御工事和排污系统。到中世纪晚期，代尔夫特已经是一座繁荣的商贸城镇，以酿造啤酒和纺织业闻名。你能想象吗？当年那些运载着布匹和啤酒桶的船只，就穿梭在你今天漫步的同一条条运河上。</p>
              <p className="text-gray-700 leading-relaxed mb-4">然而，真正将代尔夫特推上巅峰的，是两件看似不相关的事：一场灾难和一门手艺。1536年，一场毁灭性的大火几乎吞噬了整个城市。重建工作催生了对建筑材料——砖块的巨大需求，本地制砖业因此蓬勃发展。而更重要的契机，是17世纪初，随着荷兰东印度公司的船只从中国带回光洁如玉的青花瓷器，整个欧洲都为这种“白色金子”而疯狂。代尔夫特的陶工们敏锐地抓住了机会，他们开始尝试模仿中国瓷器的风格。但囿于技术，他们烧制出的是锡釉陶器，即我们熟知的“代尔夫特蓝陶”。通过不断的创新，代尔夫特的陶工发展出了自己独特的风格，从模仿到创造，那些描绘着风车、船只、荷兰风景的蓝白陶器，成为了荷兰黄金时代最具代表性的出口商品之一，代尔夫特也成为了欧洲的“陶瓷之都”。</p>
              <p className="text-gray-700 leading-relaxed mb-4">几乎在同一片天空下，另一颗文化的巨星正在悄然升起。1632年，约翰内斯·维米尔在这座城市受洗。他的一生几乎没有离开过代尔夫特，他的世界就是这方寸之间的街道、庭院和室内。看看他的画作吧——《代尔夫特一景》精准描绘了城市的天际线；《小街》定格了普通民居门口静谧的瞬间；《倒牛奶的女仆》等室内画中，那从窗户斜射进来的、充满神性的光线，或许就来自某条运河反射的光。维米尔笔下那种静谧、专注、充满内在光明的氛围，恰恰是代尔夫特这座城市气质最极致的艺术提炼。他像一位用光线作诗的诗人，将家乡的日常升华为了永恒。</p>
              <p className="text-gray-700 leading-relaxed mb-4">代尔夫特的辉煌并未一直持续。18世纪后，随着欧洲陶瓷业的竞争和东印度公司的衰落，蓝陶产业陷入低潮。城市的发展似乎也停滞了，许多建筑保持着旧貌。塞翁失马，焉知非福。这种“停滞”反而让代尔夫特躲过了大规模的城市改造。到了19、20世纪，当人们重新认识到其历史价值时，一座近乎完整的中世纪及黄金时代城市肌理被幸运地保存了下来。代尔夫特理工大学（TU Delft）的建立，又为这座古城注入了前沿的科学活力，古今在此奇妙共存。今天的代尔夫特老城，每一块砖，每一道水波，都层叠着从中世纪市民、黄金时代商人、陶艺大师到伟大画家的记忆，它是一个活生生的历史剖面，等待着你来细细阅读。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  要完整感受代尔夫特老城的精髓，我强烈建议你留出一整天的时间（至少8小时）。最佳的游览节奏是“慢”。上午9点左右抵达最好，这时游客尚未涌入，晨光柔和，是拍照和享受宁静氛围的黄金时间。整个路线可以围绕两条主轴展开：一是从市场广场（Markt）辐射开的主要地标环形线，二是深入西侧宁静居民区的小巷探索线。上午精力充沛时，可以先攻克需要购票进入的教堂和博物馆；午后则适合沿着运河漫无目的地散步，累了就找家咖啡馆坐下观察生活。傍晚时分，一定要再回到运河边，看夕阳如何为这座城市谢幕。这样的安排既能打卡核心景点，又能留出足够的空白去偶遇惊喜。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>周三和周六上午市场广场有大型集市，非常热闹且充满生活气息，但也会人潮拥挤，可根据喜好选择避开或参与。
代尔夫特老城几乎所有地面都是石板或砖块铺就，请务必穿一双绝对舒适、适合长时间行走的鞋子。
这里的自行车道和人行道有时界限模糊，且自行车流量极大，行走时请时刻注意身旁，不要突然在自行车道中间停下拍照。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从火车站出来，跟着人流或“Centrum”标志轻松步行十分钟，首先让宏大的市场广场和新教堂的塔楼给你一个充满气势的初见。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">一定要爬上新教堂那379级狭窄的旋转台阶，在塔顶喘息着俯瞰整个代尔夫特老城如棋盘格般精美的屋顶与运河网络。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从教堂下来，径直走向广场另一侧气势恢宏的市政厅，仔细看看它立面上那些关于公正与智慧的金色浮雕。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">穿过市政厅旁的小巷，去寻找那座略显羞涩的维米尔中心，那里没有他的真迹，却用多媒体带你走进了他画中光线与宁静的世界。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">午餐后，沿着古老的运河向东漫步，目的地是那间依然沿用古老工艺的王家代尔夫特蓝陶厂，看画师如何一笔一笔赋予陶器灵魂。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从蓝陶厂出来后，别走大路，随意拐进西侧那片迷宫般的宁静住宅区，探访那些隐藏着的、开满鲜花的带拱桥庭院。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">在旧教堂前停下脚步，仰望那座著名的倾斜塔楼，然后走进略显昏暗的内部，在维米尔和他的家人长眠的简单石墓前静默片刻。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">将傍晚最后的光阴留给一条安静的运河边，比如环绕着“老教堂庭院”的水道，看着天鹅归巢，灯光在水面上拉出长长的金色倒影。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 新教堂塔楼顶部环拍</h4>
                  <p className="text-sm text-gray-700">在塔楼开放的顶层，用广角镜头可以拍到360度无死角的代尔夫特全景，最佳时间是清晨或傍晚，柔和的光线会让砖红色屋顶的质感更加丰富。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 旧教堂后方运河拐角处</h4>
                  <p className="text-sm text-gray-700">站在“Oude Delft”运河与“Koornmarkt”运河交汇的桥梁附近，向东望去，可以将旧教堂的倾斜塔楼、运河水面、典型的山形墙房屋和桥上的行人一同纳入构图，画面层次感极佳。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 维米尔《小街》画作原址附近</h4>
                  <p className="text-sm text-gray-700">在“Vlamingstraat”街与“Nieuwe Langendijk”交汇区域，试着寻找与画中相似的房屋角度，下午的阳光能复制出画里那种温暖宁静的光影效果。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 东城门（Oostpoort）水边</h4>
                  <p className="text-sm text-gray-700">这是代尔夫特唯一留存的中世纪城门，站在护城河外侧的小路上，可以拍到城门及其在水中的完美倒影，尤其推荐在蓝调时刻（日落后半小时）拍摄，天空泛着幽蓝，窗户透出暖黄灯光，意境十足。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 隐藏庭院内部</h4>
                  <p className="text-sm text-gray-700">比如“Convent of Saint Agnes”这类对公众开放的宁静庭院，利用拱形门廊作为画框，拍摄内部精心打理的花园和古老建筑，能捕捉到游客罕至的隐秘之美。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 尊重当地居民隐私，拍摄私人住宅或庭院内部时，请务必保持距离，最好使用长焦镜头，避免将镜头直接对准窗户内。</li>
                <li>• 运河边的许多最佳机位就在狭窄的步行道上，拍摄时请注意身后来的自行车和行人，并保管好相机设备，防止不慎落水。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">运河景观之选</h4>
                  <p className="text-sm text-blue-800">入住一栋17世纪商人宅邸改造的精品酒店，房间的木质横梁低矮而迷人，推开窗就是一条宁静的运河，清晨能在水鸟的叫声中醒来。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">学院风体验</h4>
                  <p className="text-sm text-green-800">选择老城边缘由代尔夫特理工大学历史建筑改造的设计酒店，空间现代而明亮，融合了工业遗产与学术氛围，步行至市中心仅需五分钟。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">温馨民宿</h4>
                  <p className="text-sm text-yellow-800">租住一栋沿运河三层小楼的顶层公寓，拥有一个可以俯瞰一片片红色屋顶的小露台，像当地人一样去市场买菜，自己动手做一顿晚餐。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">高端历史沉浸</h4>
                  <p className="text-sm text-purple-800">下榻位于“老教堂庭院”内的贵族宅邸酒店，房间围绕着静谧的私人花园，装饰着古董和代尔夫特蓝陶真品，让你彻底沉浸在黄金时代的奢华梦境中。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">代尔夫特老城中心区域夜晚非常安静安全，但酒店房间可能相对紧凑（这是历史建筑的普遍特点），若需要更大空间，可关注老城外围的酒店。</p>
              <p className="text-gray-700 leading-relaxed mb-4">旺季（尤其是春夏周末）住宿非常紧张，且价格较高，建议至少提前两个月预订。选择周日到周四入住，价格通常会友好不少。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开代尔夫特好些日子了，我发现自己最怀念的，不是某一张惊艳的照片，也不是某一件精美的蓝陶，而是一种整体萦绕心头的“感觉”。那是一种被平和、有序与美的日常所包围的感觉。在这个一切都追求更快、更响、更刺激的世界里，代尔夫特老城像一首轻声吟诵的古老诗歌，它不试图用奇观征服你，而是邀请你慢下来，去观察一扇窗框的细节，去聆听一段水流的故事，去感受光线在砖面上移动的轨迹。它证明了，一座城市的伟大，不仅在于它创造了多么辉煌的财富或艺术，更在于它能否为平凡的日常生活，提供一个充满尊严与诗意的容器。</p>
              <p className="text-gray-700 leading-relaxed mb-4">所以，亲爱的朋友，如果你也对深度游有着真正的渴望，那么请把代尔夫特列入你的清单。它或许不是你欧洲之行的第一站，但它很可能会成为你最想重温的那一站。来这里，不是为了匆匆打卡，而是为了体验一种可能已经失落的生活节奏与和谐尺度。在这座维米尔用一生描绘的城市里，你会明白，最深度的旅行，不是去了多少地方，而是你是否在某一个瞬间，真正地“看见”了光，并让那束光，也照亮了自己内心某个安静的角落。代尔夫特，就是那束等待着你的、温柔而永恒的光。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
