import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科尔托纳 Cortona｜托斯卡纳被遗忘的时光宝石，在云端古城触摸伊特鲁里亚的心跳 - 最佳欧洲景点',
  description: '车子沿着之字形的山路盘旋而上，窗外的风景像一幅缓缓展开的卷轴。先是广阔的瓦尔迪基亚纳谷地，橄榄园和葡萄田拼成绿色的棋盘，然后，那座淡黄色的城就从一片苍翠的山脊上浮现出来。它不是那种精致完美的模型，而是带着风霜的粗粝感，城墙和房屋死死地咬住岩石，仿佛已经这样坚持了几千年。当你穿过古老的罗马门，第一个扑...',
}

export default function CortonaTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '科尔托纳', href: '/attractions/cortona-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`科尔托纳・Cortona・意大利・科尔托纳`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着之字形的山路盘旋而上，窗外的风景像一幅缓缓展开的卷轴。先是广阔的瓦尔迪基亚纳谷地，橄榄园和葡萄田拼成绿色的棋盘，然后，那座淡黄色的城就从一片苍翠的山脊上浮现出来。它不是那种精致完美的模型，而是带着风霜的粗粝感，城墙和房屋死死地咬住岩石，仿佛已经这样坚持了几千年。当你穿过古老的罗马门，第一个扑向你的不是某个地标，而是一种混合的气味：年代久远的石墙在阳光下散发的微热尘土气，从阴暗门廊里飘出的老房子特有的阴凉霉味，还有不知哪家厨房正在用橄榄油爆炒大蒜的浓烈香气——这告诉你，这里不是一个博物馆，而是一个家。
顺着主街Via Nazionale向上走，石板路被岁月和脚步打磨得温润发亮，坡度陡得让你不得不慢下来。你的耳边是意大利语快速而响亮的交谈声，从菜市场、五金店、咖啡吧里涌出来，间或夹杂着摩托车试探着穿过狭窄街道的嗡嗡声。阳光在这里被切割成明暗分明的几何块，照亮了阳台上怒放的红色天竺葵，而另一侧的小巷则沉在深深的、沁凉的阴影里。老太太们坐在自家门口的藤椅上，眼神平静地掠过我们这些气喘吁吁的游客，她们才是这座城堡真正的主人。在这里，壮丽的风景（从任何一个缺口望出去，都是无边的托斯卡纳山谷）和琐碎的日常生活（买面包、倒垃圾、闲聊）毫无间隙地交融在一起。
它的核心魅力，就在于这种“活着”的质感。你触摸的每一块墙砖，都可能被伊特鲁里亚的工匠、中世纪的骑士、文艺复兴的画匠的手触碰过。但它没有被供起来，它还在呼吸。山顶的堡垒里住着居民，古老的宫殿里开着现代艺术画廊，修士的回廊里在举办婚礼。时间在这里不是一条直线，而是一个漩涡，所有时代都沉淀在这片山巅之上，继续被每一天的阳光和雨水，被每一代科尔托纳人的生活，温柔地包浆。它不是让你来“看”的，它是邀请你来“感受”的——感受石头的心跳，感受风的走向，感受一种与世隔绝却又深深扎根于大地的、古老而坚韧的生活方式。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子沿着之字形的山路盘旋而上，窗外的风景像一幅缓缓展开的卷轴。先是广阔的瓦尔迪基亚纳谷地，橄榄园和葡萄田拼成绿色的棋盘，然后，那座淡黄色的城就从一片苍翠的山脊上浮现出来。它不是那种精致完美的模型，而是带着风霜的粗粝感，城墙和房屋死死地咬住岩石，仿佛已经这样坚持了几千年。当你穿过古老的罗马门，第一个扑向你的不是某个地标，而是一种混合的气味：年代久远的石墙在阳光下散发的微热尘土气，从阴暗门廊里飘出的老房子特有的阴凉霉味，还有不知哪家厨房正在用橄榄油爆炒大蒜的浓烈香气——这告诉你，这里不是一个博物馆，而是一个家。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`顺着主街Via Nazionale向上走，石板路被岁月和脚步打磨得温润发亮，坡度陡得让你不得不慢下来。你的耳边是意大利语快速而响亮的交谈声，从菜市场、五金店、咖啡吧里涌出来，间或夹杂着摩托车试探着穿过狭窄街道的嗡嗡声。阳光在这里被切割成明暗分明的几何块，照亮了阳台上怒放的红色天竺葵，而另一侧的小巷则沉在深深的、沁凉的阴影里。老太太们坐在自家门口的藤椅上，眼神平静地掠过我们这些气喘吁吁的游客，她们才是这座城堡真正的主人。在这里，壮丽的风景（从任何一个缺口望出去，都是无边的托斯卡纳山谷）和琐碎的日常生活（买面包、倒垃圾、闲聊）毫无间隙地交融在一起。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，就在于这种“活着”的质感。你触摸的每一块墙砖，都可能被伊特鲁里亚的工匠、中世纪的骑士、文艺复兴的画匠的手触碰过。但它没有被供起来，它还在呼吸。山顶的堡垒里住着居民，古老的宫殿里开着现代艺术画廊，修士的回廊里在举办婚礼。时间在这里不是一条直线，而是一个漩涡，所有时代都沉淀在这片山巅之上，继续被每一天的阳光和雨水，被每一代科尔托纳人的生活，温柔地包浆。它不是让你来“看”的，它是邀请你来“感受”的——感受石头的心跳，感受风的走向，感受一种与世隔绝却又深深扎根于大地的、古老而坚韧的生活方式。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`科尔托纳`} />
                <InfoRow label="英文名称" value={`Cortona`} />
                <InfoRow label="正式名称" value={`Cortona`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`科尔托纳`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座活着的、层叠了伊特鲁里亚、罗马、中世纪与文艺复兴文明的托斯卡纳山城史诗。`} />
                <InfoRow label="建筑特色" value={`由粗糙的淡黄色石灰岩垒砌而成，城墙、街道、房屋与陡峭的山势浑然一体，宛若从岩石中生长出来。`} />
                <InfoRow label="建筑风格" value={`以坚实朴素的中世纪托斯卡纳山城风格为基底，点缀着罗马式教堂与优雅的文艺复兴宫殿立面。`} />
                <InfoRow label="文化价值" value={`不仅是《托斯卡纳艳阳下》的灵感背景，更是理解伊特鲁里亚文明与中世纪意大利城邦生活的关键锁孔。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城墙及主要街道区域全天24小时开放。城内各博物馆、教堂等独立景点开放时间不一，通常为周二至周日 10:00-18:00（冬季可能缩短至17:00），周一多数闭馆。主要教堂如圣玛格丽特教堂通常在清晨至傍晚对游客开放，但午间可能有数小时休息。建议出行前务必查询具体景点官网，并注意意大利普遍存在的“午休”（Riposo）传统。`} />
              <InfoRow label="门票价格" value={`进入科尔托纳古城本身免费。城内博物馆和主要教堂参观通常需要门票，联票更划算。例如，伊特鲁里亚学院博物馆门票约10欧元，主教座堂博物馆门票约5欧元。购买“科尔托纳博物馆通票”（约15欧元）可涵盖3-4个主要场馆。学生、65岁以上老人及欧盟青年通常享有折扣。部分小教堂免费但欢迎捐款。`} />
              <InfoRow label="地址" value={`Piazza della Repubblica, 1, 52044 Cortona AR, Italy`} />
              <InfoRow label="交通方式" value={`最近的主要交通枢纽是佛罗伦萨或阿雷佐。从佛罗伦萨圣玛利亚诺维拉火车站乘坐区间火车前往卡姆恰-科尔托纳火车站，车程约1小时20分钟，班次频繁。但请注意，该火车站位于山下的平原。抵达后，需在站前转乘公交（CPT公司线路）上山前往古城，车程约20分钟，班次约每小时1-2班，周末减少。最浪漫的方式是在山下的火车站前乘坐出租车（约25欧元）盘旋上山，一路风景绝佳。自驾是最方便的选择，但古城内多为ZTL限行区，需将车停在城墙外的付费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲科尔托纳的故事，得从一层层被掩埋的文明开始。早在罗马人昂首阔步之前，神秘的伊特鲁里亚人就已经是这片亚平宁半岛的主人。科尔托纳，就是他们最重要的十二座城邦之一。这些精通水利、金属工艺和占卜术的先民，选择这座易守难攻的山丘并非偶然。今天的城墙地基下，沉睡着的就是他们的神殿和街道。在伊特鲁里亚学院博物馆里，你会看到那些从周边墓穴中出土的青铜烛台、精美的金饰和写着古老文字的陶片，上面的人物眼神宁静，仿佛看透了生死。罗马人来了之后，它变成了一个繁荣的自治市，但山的灵魂未变。随着帝国崩塌，蛮族入侵的浪潮拍打着山脚，这座山城再次凭借它的险要，成为了乱世中的诺亚方舟。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`中世纪是科尔托纳定型的关键时期。它成了一个独立的城邦共和国，在教宗派与皇帝派的血腥争斗中艰难周旋。我们今天看到的城市肌理——那迷宫般狭窄陡峭的街道、高耸的塔楼、厚重的城墙和坚固的城门——完全是为了防御而生。每一块石头都在讲述着恐惧与生存。也正是在这个时期，一位本地姑娘弗朗切斯卡诞生了，她后来成为圣玛格丽特，科尔托纳的守护圣人。她从一个贵族情妇转变为苦行修士的故事，充满了中世纪特有的炽热与极端，她建立的慈善修会至今仍在服务穷人。她的存在，为这座刚硬的军事堡垒注入了一丝悲悯的灵性之光。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了文艺复兴，战争的阴云暂时散去，财富和艺术开始流淌进来。科尔托纳虽然没有诞生像佛罗伦萨那样的巨匠，却吸引了许多艺术家来此装饰它的教堂和宫殿。卢卡·西尼奥雷利，那位以描绘强悍筋肉人体著称的大师，就是科尔托纳的儿子。他的作品散落在城中的教堂里，那股雄浑的力量感，与这座城市的气质惊人地契合。贵族们不再只建造防御塔，而是开始修建拥有优雅窗户和内部庭院的宫殿，比如卡萨利宫和普雷托里奥宫，它们的外立面依然朴素，但门后的世界却开始追求美与和谐。科尔托纳在美第奇家族的统治下度过了相对平静的岁月，但它始终是托斯卡纳的“边城”，保持着一种顽固的独立性。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`近代以来，战争又一次次地找上门。拿破仑的军队来过，两次世界大战的战线也曾在不远处的山谷拉锯。但科尔托纳就像一块礁石，任浪潮冲刷，始终屹立。真正的转变发生在上世纪末，当作家弗朗西斯·梅斯定居于此，并写下《托斯卡纳艳阳下》之后，这座寂静的山城开始被世界发现。有趣的是，旅游业的到来并未让它失魂。或许是因为上山的路依然不便，或许是因为这里的人们骨子里的骄傲与务实，它没有变成纯粹的纪念品商店集合体。古老的橄榄油压榨坊还在运转，传统的赛马节（Giostra dell’Archidado）每年依旧全城沸腾，年轻人虽然也会去大城市闯荡，但总有许多人选择回来。它的历史不是故纸堆，而是一种依然在指导生活的惯性，一种流淌在血液里的山民智慧。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正领略科尔托纳，请务必留出一整个白天，并穿上你最舒服的步行鞋。建议在上午九点左右抵达，这时游客尚少，阳光温柔，本地人刚开始他们的一天，你能看到最生活化的场景。游览节奏一定是“慢爬”，顺着山势由低到高，再蜿蜒而下，整体耗时约6-8小时，包含午餐和多次咖啡停顿。这样的安排能让你逐渐适应坡度，并在体力消耗最大的正午前后，刚好到达山顶的堡垒和公园，那里有长椅和树荫供你休息，同时享受一天中最开阔的视野。下午则适合慢慢探索侧面的小巷和博物馆，感受光影变化。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`绝对不要在盛夏正午（12点至下午3点）强行爬坡，托斯卡纳的烈日能在石墙间形成烤箱效应，很容易中暑。许多小商店和餐馆在下午1点至4点间会关门午休，规划午餐和购物时间要注意。城内几乎没有平坦的路，全程都是上下坡和台阶，绝对不要穿高跟鞋或硬底鞋。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从古城最低处的圣马可门进入，立刻右转钻进早市，看看码放成彩虹的蔬菜水果，听听摊贩们中气十足的吆喝。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着陡峭的Via Nazionale向上攀登，在共和国广场的台阶上坐一会儿，看人们在一百年历史的咖啡馆前碰杯聊天。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开圣多梅尼科教堂沉重的木门，让眼睛适应内部的昏暗，寻找弗雷·安杰利科那幅宁静的《天使报喜》。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`继续向上抵达主座堂广场，用手掌贴一贴大教堂侧面那被太阳晒得温热的古老石壁，感受它的坚实。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过拱门来到吉尔贝蒂广场，仰望中世纪市政厅的高塔，想象城邦议员们曾经在此激烈辩论。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着Via Santa Margherita走向至高点，在圣玛格丽特教堂的寂静中，看一看那位守护圣女的干枯遗体，感受中世纪的灵性震撼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂后的斜坡走入梅迪奇堡垒遗址，站在废弃的城墙垛口上，让360度的托斯卡纳全景风毫无保留地灌满你的胸怀。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山时故意迷失在那些名字古怪的狭窄小巷里，比如“死胡同”或“叹气巷”，邂逅一扇爬满铁线莲的旧门或一个摆满陶罐的隐秘庭院。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`梅迪奇堡垒城墙东北角`}</h4>
                  <p className="text-sm text-gray-700">{`黄昏时分，站在这里可以拍到古城错落的屋顶、钟楼与远方谷地沐浴在金色夕阳下的经典全景，用长焦压缩空间感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`Via Jannelli 街道拐角`}</h4>
                  <p className="text-sm text-gray-700">{`清晨阳光刚好洒进这条陡峭的小巷，利用石板路形成的自然引导线构图，捕捉一位本地老人缓缓上行的背影，充满故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`共和国广场咖啡馆雨棚下`}</h4>
                  <p className="text-sm text-gray-700">{`下午坐在咖啡馆外，用广角镜头将前景的咖啡杯、中景广场上的人群与背景古老的市政厅建筑一同纳入，表现古今交融的生活气息。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣玛格丽特教堂内部`}</h4>
                  <p className="text-sm text-gray-700">{`避开直射光线，利用教堂侧廊的柱廊形成深邃的框架，焦点对准尽头祭坛上微弱烛光笼罩的圣物匣，营造静谧神秘的氛围。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`古城墙“弓弩手步道”某处缺口`}</h4>
                  <p className="text-sm text-gray-700">{`上午侧光时，从这里可以框住远处山谷中孤立的小教堂或农舍，以粗糙的石墙缺口为前景，形成强烈的纵深感与对比。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄当地居民，尤其是老人，务必先微笑示意并征得同意，一个简单的“Foto？”和手势就能避免冒犯。小巷内光线对比强烈，建议使用RAW格式拍摄，以便后期恢复阴影和高光细节。无人机飞行在意大利历史中心区通常被严格禁止，起飞前务必查询当地最新法规。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`山巅古宅`}</h4>
                  <p className="text-sm text-blue-800">{`租住一栋由13世纪塔楼改造的公寓，在原始的石头拱顶下入睡，清晨被教堂钟声和山谷升腾的云雾唤醒，做一天真正的“科尔托纳人”。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`田园风光`}</h4>
                  <p className="text-sm text-green-800">{`选择坐落在古城下方橄榄园中的“农庄住宿”，拥有独立的泳池和开阔的露台，白天探索古城，傍晚回来在星空下享受房东自制的家庭晚餐。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`艺术爱好者之家`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻由文艺复兴宫殿改建的精品酒店，房间里有古老的壁画残迹和现代设计家具的混搭，早餐庭院正对着一座隐秘的小教堂。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济便捷之选`}</h4>
                  <p className="text-sm text-purple-800">{`住在城门外的现代风格小旅馆，步行五分钟即到古城，免费停车是最大优势，房间阳台也能收获一片绿意盎然的山景。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`预订古城内的住宿时，务必确认车辆是否可以抵达门口，或是否有行李搬运服务——拖着行李箱在鹅卵石陡坡上行走是噩梦般的体验。夏季和初秋是旺季，至少提前两个月预订心仪的特色住所。冬季很多农庄住宿会关闭，但古城内的酒店和公寓依然营业，能体验极为宁静的“鬼城”氛围。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开科尔托纳的时候，我的小腿肌肉还在为那些陡坡而酸痛，但心里却感到一种奇异的平静。这种平静不是来自放松，而是来自一种“确认”。在这个一切都加速迭代、追求平滑顺畅的世界里，科尔托纳顽固地保持着自己的坡度、自己的节奏、自己石头般的性格。它告诉你，生活可以有另一种重心：不是向前狂奔，而是向上扎根；不是变得轻薄透明，而是甘愿沉淀下所有时代的层积，变得厚重甚至粗糙。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位热爱深度游的旅人，都应该来科尔托纳住上几天。不是为了收集另一个世界遗产的徽章，而是为了让自己体验一种不同的“时间性”。在这里，你会被迫慢下来，因为石头路很陡。你会开始关注最基础的东西：阳光的角度、风的湿度、食物的本味、一次友善的点头问候。这座山城像一位沉默的智者，它不给你灌输大道理，只是用它千年的存在本身向你展示：真正的韧性，不是对抗，而是承受与融合；真正的美，不是无瑕，是岁月留下的所有划痕与光泽。当你在堡垒的废墟上，看着最后一抹夕阳将整片托斯卡纳大地染成蜜糖色，你会感到，自己不只是看到了风景，更是短暂地触摸到了一种永恒的心跳。这份记忆，会成为你回到纷扰世界后，一个可以随时返回的、宁静而坚实的精神高地。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/brisighella-hilltown" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布里西盖拉（驴子巷与三座山峰）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Brisighella</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ravenna-byzantine-mosaics" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉文纳拜占庭马赛克</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ravenna Mosaics</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/spoleto-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯波莱托古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Spoleto</p>
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
