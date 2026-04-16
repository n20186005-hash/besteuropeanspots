import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '圣吉米尼亚诺 San Gimignano｜托斯卡纳天空下的中世纪石林，穿越回繁华的百塔之城 - 最佳欧洲景点',
  description: '还记得我第一次从托斯卡纳起伏的柏油路上拐过一个弯，忽然看见它的情景吗？远远的，在一片被阳光晒得金黄的葡萄园和银绿色橄榄树的海浪尽头，一座由灰色石头构成的“森林”拔地而起，直插湛蓝得没有一丝杂质的天空。那不是现代都市的玻璃幕墙，而是十几座方正的、坚硬的塔楼，像巨人遗落在山丘上的棋子，沉默，骄傲，带着一...',
}

export default function SanGimignanoMedievalTowersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '圣吉米尼亚诺百塔之城', href: '/attractions/san-gimignano-medieval-towers' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">圣吉米尼亚诺百塔之城・San Gimignano・意大利・圣吉米尼亚诺</h1>
          <p className="text-lg text-gray-600 mb-6">
            还记得我第一次从托斯卡纳起伏的柏油路上拐过一个弯，忽然看见它的情景吗？远远的，在一片被阳光晒得金黄的葡萄园和银绿色橄榄树的海浪尽头，一座由灰色石头构成的“森林”拔地而起，直插湛蓝得没有一丝杂质的天空。那不是现代都市的玻璃幕墙，而是十几座方正的、坚硬的塔楼，像巨人遗落在山丘上的棋子，沉默，骄傲，带着一种近乎倔强的古老尊严。这就是圣吉米尼亚诺给你的第一眼震撼——它不是慢慢出现的，而是像一幅早已存在千年的画，突然在你眼前展开。
车子越开越近，那股属于中世纪石头城的气息便扑面而来。穿过古老的石头城门，仿佛瞬间掉进了一个时间的褶皱里。脚下是光滑得能照出人影的岁月石板路，两旁是蜂蜜色的石头房屋，狭窄的巷子只容得下阳光斜斜地切进来一道。空气里有好几种味道交织在一起：从敞开的门洞里飘出的新鲜面团烘焙的暖香，某家皮具店传来的鞣制皮革的沉稳气味，还有无处不在的、干燥石头被太阳烘烤后散发出的、略带尘土感的古老气息。耳边是时近时远的声响：游客的低语像溪流，咖啡馆里杯碟碰撞的清脆，以及，当你停下脚步仔细听时，仿佛能从石头缝里听到几个世纪以前，马蹄踏过街道的回响。
当地人骑着小小的Vespa摩托车，“突突”地穿过这些本该属于马车的街道，在面包店前停下，和店主用快速的意大利语聊上两句。广场上的老人就坐在长椅上，看着一拨又一拨仰着脖子、对着塔楼拍照的游客，眼神平静，仿佛这些高耸的石头邻居是他们再平常不过的生活背景板。这座城的核心魅力，就在于这种奇异的并存：它是一座举世闻名的露天博物馆，但同时也是一座呼吸着、生活着的家园。那些塔楼，不是为了游客而存在的景观，它们是历史的骨骼，至今仍撑起着小镇的轮廓与灵魂。
最动人的时刻，或许是黄昏。当大批一日游的游客乘着巴士离去，古城渐渐安静下来。金色的夕阳把每一座塔楼都镀上暖光，长长的影子投在石板路上，把街道切割成明暗交织的棋盘。你沿着城墙漫步，一边是坚硬冰冷的古代防御工事，另一边是托斯卡纳温柔起伏、无尽延伸的田园诗。这一刻，你会真切地感觉到，自己正站在历史和现实、战争与和平、荣耀与宁静的交界点上。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">还记得我第一次从托斯卡纳起伏的柏油路上拐过一个弯，忽然看见它的情景吗？远远的，在一片被阳光晒得金黄的葡萄园和银绿色橄榄树的海浪尽头，一座由灰色石头构成的“森林”拔地而起，直插湛蓝得没有一丝杂质的天空。那不是现代都市的玻璃幕墙，而是十几座方正的、坚硬的塔楼，像巨人遗落在山丘上的棋子，沉默，骄傲，带着一种近乎倔强的古老尊严。这就是圣吉米尼亚诺给你的第一眼震撼——它不是慢慢出现的，而是像一幅早已存在千年的画，突然在你眼前展开。</p>
              <p className="text-gray-700 leading-relaxed mb-4">车子越开越近，那股属于中世纪石头城的气息便扑面而来。穿过古老的石头城门，仿佛瞬间掉进了一个时间的褶皱里。脚下是光滑得能照出人影的岁月石板路，两旁是蜂蜜色的石头房屋，狭窄的巷子只容得下阳光斜斜地切进来一道。空气里有好几种味道交织在一起：从敞开的门洞里飘出的新鲜面团烘焙的暖香，某家皮具店传来的鞣制皮革的沉稳气味，还有无处不在的、干燥石头被太阳烘烤后散发出的、略带尘土感的古老气息。耳边是时近时远的声响：游客的低语像溪流，咖啡馆里杯碟碰撞的清脆，以及，当你停下脚步仔细听时，仿佛能从石头缝里听到几个世纪以前，马蹄踏过街道的回响。</p>
              <p className="text-gray-700 leading-relaxed mb-4">当地人骑着小小的Vespa摩托车，“突突”地穿过这些本该属于马车的街道，在面包店前停下，和店主用快速的意大利语聊上两句。广场上的老人就坐在长椅上，看着一拨又一拨仰着脖子、对着塔楼拍照的游客，眼神平静，仿佛这些高耸的石头邻居是他们再平常不过的生活背景板。这座城的核心魅力，就在于这种奇异的并存：它是一座举世闻名的露天博物馆，但同时也是一座呼吸着、生活着的家园。那些塔楼，不是为了游客而存在的景观，它们是历史的骨骼，至今仍撑起着小镇的轮廓与灵魂。</p>
              <p className="text-gray-700 leading-relaxed mb-4">最动人的时刻，或许是黄昏。当大批一日游的游客乘着巴士离去，古城渐渐安静下来。金色的夕阳把每一座塔楼都镀上暖光，长长的影子投在石板路上，把街道切割成明暗交织的棋盘。你沿着城墙漫步，一边是坚硬冰冷的古代防御工事，另一边是托斯卡纳温柔起伏、无尽延伸的田园诗。这一刻，你会真切地感觉到，自己正站在历史和现实、战争与和平、荣耀与宁静的交界点上。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="圣吉米尼亚诺百塔之城" />
                <InfoRow label="英文名称" value="San Gimignano" />
                <InfoRow label="正式名称" value="San Gimignano" />
                <InfoRow label="国家" value="意大利" />
                <InfoRow label="城市" value="圣吉米尼亚诺" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="中世纪托斯卡纳地区城市自治与家族权力竞争的“石质宣言”，被誉为“中世纪的曼哈顿”。" />
                <InfoRow label="建筑特色" value="密集、高耸的石头塔楼群构成了独一无二的天际线，是12-14世纪意大利城邦繁荣与竞争的具象化石。" />
                <InfoRow label="建筑风格" value="以罗曼式为主，融合了早期哥特式元素的意大利中世纪民用军事建筑典范。" />
                <InfoRow label="文化价值" value="一座罕见保存完好的中世纪意大利城镇整体，其城市结构、建筑、壁画艺术共同提供了理解14世纪市民生活的完整画卷。" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="古城本身全天24小时开放，可自由漫步。但城内主要景点（如格罗萨塔楼、圣吉米尼亚诺大教堂、市立博物馆等）有固定开放时间，通常为上午10:00至下午7:00（夏季可能延长），冬季（约11月至3月）部分景点会缩短开放时间至下午5:00，且周一可能闭馆。重要节日如圣诞节、元旦当天大部分室内景点关闭。建议出行前务必在官方网站核查具体日期的最新时间表。" />
              <InfoRow label="门票价格" value="进入古城免费。攀登格罗萨塔楼（Torre Grossa）需购买门票，约5欧元，通常包含市立博物馆的入场。大教堂（Collegiata）门票约4欧元。也有组合票可选，价格约7-8欧元，涵盖塔楼、教堂和多个博物馆。欧盟学生及26岁以下青年通常有优惠，65岁以上老人可能享有折扣票。6岁以下儿童免费。" />
              <InfoRow label="地址" value="Piazza del Duomo, 53037 San Gimignano SI, Italy" />
              <InfoRow label="交通方式" value="圣吉米尼亚诺位于托斯卡纳乡村，无火车站。最便捷的方式是自驾，从佛罗伦萨出发约1小时车程，从锡耶纳出发约40分钟。古城外有多个付费停车场（如P1, P2）。若依赖公共交通，可从佛罗伦萨或锡耶纳乘坐巴士：从佛罗伦萨新圣母车站（S.M.N.）搭乘131路巴士直达，车程约1.5-2小时，班次有限（尤其是周日和节假日），务必提前查好时刻表；从锡耶纳出发可搭乘130路巴士，约50分钟。购买巴士票可在车站的烟草店（Tabacchi）或酒吧，车上不售票。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">要理解圣吉米尼亚诺为什么会有这么一群怪异的塔楼，你得把自己想象成一个12世纪的意大利商人。那时可没有什么摩天大楼竞赛，但有一种更古老的“虚荣指标”——石头塔楼。圣吉米尼亚诺可不是一开始就这么“高耸入云”的。它的好运始于一条路，那条从北欧通往罗马朝圣的“法兰西大道”正好从附近经过。想象一下，中世纪的“高速公路”带来了什么？财富，源源不断的财富。商队在这里歇脚，贸易在这里繁荣，小镇迅速富得流油。</p>
              <p className="text-gray-700 leading-relaxed mb-4">有钱了，问题也来了。那时候的意大利城邦，家族之间的恩怨可比现在的商战剧精彩（也血腥）多了。主要的两个大家族，阿尔丁杰利和阿韦拉菲，还有无数小家族，大家比什么呢？比谁更有钱，更有势，更安全。于是，建塔楼成了最直观的竞赛。塔楼首先是防御工事，家族械斗时，躲进去就是一座坚固的堡垒。但更重要的是，它是权力和财富的“广告牌”，赤裸裸地竖在邻居眼前，意思是：“看，我比你高，我比你强！”最鼎盛时，这座小小的山城里竟然挤着72座塔楼，那景象，活脱脱就是中世纪的“曼哈顿”，充满了暴发户般的野心和张力。</p>
              <p className="text-gray-700 leading-relaxed mb-4">然而，把这座城市从巅峰拉入深渊的，是1348年那场横扫欧洲的黑死病。瘟疫像一把死神的镰刀，无情地收割了城里超过一半的人口。繁荣戛然而止，商路凋敝，财富蒸发。失去人口和经济活力的小镇，从此陷入了漫长的停滞和贫困。但讽刺的是，正是这种被历史遗忘的“贫困”，成为了它最大的幸运。因为没钱了，后人也就没有了拆掉旧房子、建起文艺复兴或巴洛克风格新建筑的资本。那些象征着昔日虚荣与斗争的石头塔楼，就这么被原封不动地冻结在了时间里。</p>
              <p className="text-gray-700 leading-relaxed mb-4">此后的几百年，圣吉米尼亚诺就像睡美人一样，在托斯卡纳的阳光下静静沉睡。它的名字渐渐从主流历史的篇章中淡去，成了一个无足轻重的农业小镇。直到19世纪，浪漫主义的旅行者和艺术家们重新“发现”了它。他们被这奇迹般保存下来的中世纪风貌所震撼，用画笔和文字将它描绘成一处时间胶囊。1990年，联合国教科文组织将整座古城列入世界遗产名录，正式确认了它作为“人类共同记忆”的非凡价值。今天，我们看到的不仅是14座幸存下来的塔楼（最初72座中的幸存者），更是一部以石头写就的、关于人类野心、灾难与幸存的中世纪史诗。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  为了最饱满的体验，强烈建议你在古城内住一晚，用两个半天来探索。第一天下午抵达，避开正午酷热和人流高峰，从古城外远处先欣赏全景。随后进城，在傍晚的黄金光线中悠闲漫步主要街道，感受游客散去后的宁静。第二天一早，趁大批旅行团还未涌入时，去攀登最高的塔楼，享受独享全景的瞬间，并参观核心室内景点。整体节奏宜慢，多留时间坐在广场发呆、穿行无名小巷，才能真正捕捉到它的灵魂。这样的安排能让你经历小镇从喧闹到静谧的完整韵律。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>夏季午后酷热且人流如织，尽量将室内参观和登塔活动安排在上午十点前或下午四点后。古城内几乎所有店铺和餐厅在下午1点到3点之间都可能关门午休，规划午餐时间要注意。穿着绝对舒适的平底鞋，那些古老的石板路光滑且起伏不平，高跟鞋简直是酷刑。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从古城南侧的圣乔瓦尼城门进入，让厚重的拱门带你完成从21世纪到中世纪的首次时空切换</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">沿着主街Via San Giovanni慢慢向上走，留意两旁商店橱窗里展示的当地特产——绘有中世纪图案的彩陶和世界冠军级的冰激凌</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">在水井广场（Piazza della Cisterna）的三角形空间中心停下，触摸那口13世纪的古井，感受当年居民生活围绕的中心</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从水井广场自然过渡到主教堂广场（Piazza del Duomo），抬头直面市政宫（Palazzo Comunale）和它旁边挺拔的格罗萨塔楼</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">毫不犹豫地登上格罗萨塔楼狭窄的螺旋石阶，在54米高的塔顶让360度的托斯卡纳田园全景像狂风一样席卷你的所有感官</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">参观主教堂内部，让墙上覆盖的、由中世纪大师绘制的惊人壁画 cycle （关于最后审判与圣徒故事）的绚烂色彩和叙事冲击你</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从广场一侧的小巷穿出，沿着一段保存完好的古城墙漫步，看城墙内外现代葡萄园与古老石头的诗意对话</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">在日落时分寻一家城墙边的露天餐厅，点一份用当地维纳恰白葡萄酒烹制的意面，就着逐渐变成粉紫色的天空慢慢享用</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 南侧远景葡萄园机位</h4>
                  <p className="text-sm text-gray-700">日出时分或日落前一小时，从通往科尔（Colle）方向的SR2公路边一片开阔的葡萄田回头望，用长焦镜头压缩空间，将晨曦或暮光中的塔楼群与前景的葡萄藤一并收入镜中，构成经典的托斯卡纳明信片画面</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 水井广场仰拍视角</h4>
                  <p className="text-sm text-gray-700">上午阳光能照亮广场东侧建筑时，站在古井旁，用广角镜头向上拍摄，将广场上的人群、古老的砖石地面与高耸的塔楼一同框入，展现中世纪公共空间的纵深感</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. Via di Castello 小巷仰望</h4>
                  <p className="text-sm text-gray-700">正午当阳光直射入狭窄小巷时，站在巷子中间，抬头拍摄两侧房屋夹出的“一线天”中出现的塔楼尖顶，形成强烈的几何构图和光影对比</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 格罗萨塔楼顶俯瞰</h4>
                  <p className="text-sm text-gray-700">登塔后，不要只拍大远景，将镜头对准脚下主教堂广场的鹅卵石图案、相邻塔楼的石料细节以及远处如波浪般翻滚的丘陵田园，分层次记录</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 圣奥古斯丁教堂后窗</h4>
                  <p className="text-sm text-gray-700">参观完教堂后，绕到其后方安静的庭院，从一个古老的石拱窗框向外拍摄，以窗为画框，框住远处错落的屋顶和塔楼，营造出“偷窥历史”的构图</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 使用偏振镜可以有效减少中世纪石墙在强烈阳光下的反光，让天空更蓝，石材的纹理更突出。拍摄当地居民尤其是老人的特写前，请务必先微笑并征得同意，这里不是影棚，是他们生活的家园。无人机飞行在古城上空通常被严格禁止，请遵守规定，不要尝试。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">古城内核入住</h4>
                  <p className="text-sm text-blue-800">选择为数不多、由中世纪贵族宅邸改造的精品酒店，睡在古老的石墙和木梁之下，深夜和清晨都能独享空无一人的魔法街巷</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">田园风光农庄</h4>
                  <p className="text-sm text-green-800">住在古城外三公里内一个家庭经营的农庄（Agriturismo），每天在橄榄树和葡萄园的环绕中醒来，品尝自家产的奶酪、蜂蜜和葡萄酒，享受真正的托斯卡纳乡村生活</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">小镇边缘舒适旅舍</h4>
                  <p className="text-sm text-yellow-800">预算有限的旅行者可以选择古城墙外步行五分钟内的舒适旅舍或民宿，既能方便往返古城，又能以更亲民的价格享受宁静的夜晚和家庭式的款待</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">山丘奢华隐世</h4>
                  <p className="text-sm text-purple-800">追求极致体验，可以入住附近山丘上一座由中世纪修道院改建的五星级酒店，在无边泳池里直接遥望圣吉米尼亚诺的塔楼剪影，将历史景观变成私人收藏</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">古城内的住宿极其有限且价格昂贵，务必提前数月预订，尤其是夏季和周末。住在城外农庄通常需要租车，否则夜间出行会很不便。无论住在哪里，请做好心理准备，夜晚可能非常安静，只有虫鸣和风声，这正是沉浸于托斯卡纳乡村魅力的关键部分。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开圣吉米尼亚诺许久后，我脑海里反复出现的，不是某一张具体的照片，而是一种感觉。那是一种由坚硬的石头和温柔的光线共同酿造出的、奇特的安宁感。这座城教会我一件事：有时，历史的幸存并非源于精心的保护，而恰恰是因为被遗忘。那些曾象征着财富、权力与虚荣的塔楼，在失去其原始功能后，反而沉淀为一种纯粹的美，一种人类曾经如此热烈生活过的证据。它们不再逼问“谁比谁更高”，只是在夕阳下并肩而立，成为地平线上永恒的诗歌。</p>
              <p className="text-gray-700 leading-relaxed mb-4">在当今这个追求更快、更高、更闪亮的世界里，圣吉米尼亚诺提供了一个截然相反的维度。它邀请你慢下来，不是回到一种原始的简陋，而是回到一种有重量、有质感、有故事的生活密度里。在这里，时间是以石头的风化、以光影在广场上的移动来计量的。每一位热爱深度游的旅人都该来此住上一晚，不仅仅是为了看塔楼，更是为了体验当喧嚣退去，中世纪夜晚的星空笼罩山丘时，那份与古老地球脉搏重新连接的寂静。它是一座纪念碑，纪念的不是某个帝王，而是人类集体的乡愁——对一种更坚固、更清晰、更能触及天空的存在的乡愁。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
