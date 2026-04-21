import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '马尔旺城堡 Château de Meung-sur-Loire｜卢瓦尔河谷被遗忘的宝石，囚禁过王子的主教秘堡 - 最佳欧洲景点',
  description: '车子开进马尔旺小镇，你会先闻到卢瓦尔河岸特有的、混合着青草与湿润泥土的气息。街道安静得能听见自己的脚步声，直到拐过一个弯，那片被高大树木半掩着的、由浅黄色石灰岩砌成的庞然大物，毫无预警地撞进你的视线。它没有香波堡那般童话般的张扬，也没有舍农索那种水上仙子的轻盈。马尔旺城堡的第一眼印象是沉静的，甚至有...',
}

export default function ChateauDeMeungSurLoirePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '法国', href: '/destinations/france' },
            { label: '马尔旺城堡', href: '/attractions/chateau-de-meung-sur-loire' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`马尔旺城堡・Château de Meung-sur-L-Loire・法国・马尔旺（Meung-sur-Loire）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子开进马尔旺小镇，你会先闻到卢瓦尔河岸特有的、混合着青草与湿润泥土的气息。街道安静得能听见自己的脚步声，直到拐过一个弯，那片被高大树木半掩着的、由浅黄色石灰岩砌成的庞然大物，毫无预警地撞进你的视线。它没有香波堡那般童话般的张扬，也没有舍农索那种水上仙子的轻盈。马尔旺城堡的第一眼印象是沉静的，甚至有些严肃，像一位褪去了华丽外袍、只穿着素色亚麻长衫的老贵族，静静地坐在自家花园里晒太阳，每一道石缝里都藏着不欲与人言的故事。
走近了，你能更清楚地看见时光在它身上留下的斑驳。城墙底部爬满了深绿色的苔藓，摸上去是冰凉而粗糙的质感。护城河早已干涸，长满了茂密的野草和野花，成了鸟儿和昆虫的乐园。奇怪的是，这种略显荒芜的景象并不让人感到破败，反而有一种奇特的安宁感。城堡并非博物馆里冰冷的展品，它的一部分仍是私宅，你能看到某个烟囱里飘出淡淡的炊烟，某个窗口晾晒着色彩明快的现代床单。这种“依然活着”的感觉，瞬间拉近了你与这座九百年建筑的距离。
踏入城堡内部，光线陡然暗了下来，空气中弥漫着一种老房子特有的、混合了旧木头、石蜡和一点点潮气的味道。最震撼的体验从走下地牢的石阶开始。阴冷的气息包裹上来，脚下是原始的土地，墙壁是裸露的粗糙石块。当你适应了昏暗，借助微弱灯光看到墙上那些被囚徒刻下的绝望符号、祈祷文和模糊的日期时，中世纪司法那令人窒息的沉重感会实实在在地压在你的胸口。然而，当你从这地下世界重返地面，步入楼上那些拥有高耸雕花天花板、巨大壁炉和精美挂毯的客厅与卧室时，又会瞬间被文艺复兴时期人们对光明、艺术与舒适生活的热烈追求所包围。这种从地狱到天堂的极致体验，就浓缩在垂直的几十级台阶之间，是马尔旺城堡最独一无二的魔力。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子开进马尔旺小镇，你会先闻到卢瓦尔河岸特有的、混合着青草与湿润泥土的气息。街道安静得能听见自己的脚步声，直到拐过一个弯，那片被高大树木半掩着的、由浅黄色石灰岩砌成的庞然大物，毫无预警地撞进你的视线。它没有香波堡那般童话般的张扬，也没有舍农索那种水上仙子的轻盈。马尔旺城堡的第一眼印象是沉静的，甚至有些严肃，像一位褪去了华丽外袍、只穿着素色亚麻长衫的老贵族，静静地坐在自家花园里晒太阳，每一道石缝里都藏着不欲与人言的故事。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，你能更清楚地看见时光在它身上留下的斑驳。城墙底部爬满了深绿色的苔藓，摸上去是冰凉而粗糙的质感。护城河早已干涸，长满了茂密的野草和野花，成了鸟儿和昆虫的乐园。奇怪的是，这种略显荒芜的景象并不让人感到破败，反而有一种奇特的安宁感。城堡并非博物馆里冰冷的展品，它的一部分仍是私宅，你能看到某个烟囱里飘出淡淡的炊烟，某个窗口晾晒着色彩明快的现代床单。这种“依然活着”的感觉，瞬间拉近了你与这座九百年建筑的距离。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`踏入城堡内部，光线陡然暗了下来，空气中弥漫着一种老房子特有的、混合了旧木头、石蜡和一点点潮气的味道。最震撼的体验从走下地牢的石阶开始。阴冷的气息包裹上来，脚下是原始的土地，墙壁是裸露的粗糙石块。当你适应了昏暗，借助微弱灯光看到墙上那些被囚徒刻下的绝望符号、祈祷文和模糊的日期时，中世纪司法那令人窒息的沉重感会实实在在地压在你的胸口。然而，当你从这地下世界重返地面，步入楼上那些拥有高耸雕花天花板、巨大壁炉和精美挂毯的客厅与卧室时，又会瞬间被文艺复兴时期人们对光明、艺术与舒适生活的热烈追求所包围。这种从地狱到天堂的极致体验，就浓缩在垂直的几十级台阶之间，是马尔旺城堡最独一无二的魔力。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`马尔旺城堡`} />
                <InfoRow label="英文名称" value={`Château de Meung-sur-L-Loire`} />
                <InfoRow label="正式名称" value={`Château de Meung-sur-Loire`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`马尔旺（Meung-sur-Loire）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座集主教宫殿、皇家监狱、防御要塞与贵族私邸于一身的千年古堡，是卢瓦尔河谷历史层叠的活化石。`} />
                <InfoRow label="建筑特色" value={`外观是冷峻的中世纪防御堡垒，内部却藏着精致的文艺复兴生活空间，形成强烈的“外刚内柔”对比。`} />
                <InfoRow label="建筑风格" value={`主体为12-13世纪的罗马式与早期哥特式军事建筑，内部装饰大量融合了15-16世纪的火焰哥特式与文艺复兴风格。`} />
                <InfoRow label="文化价值" value={`它见证了法国王权与教权的博弈，囚禁过“诗人公爵”，其地牢的传说更是中世纪司法黑暗面的真实缩影。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡和花园的开放时间随季节变化。通常四月至九月，每日开放，时间为上午10点至下午6点（最后入场时间为下午5点15分）。十月至三月，开放时间缩短，一般为上午10点至中午12点，下午2点至5点，且部分周一和周二闭馆。冬季（通常十一月中旬至二月中旬）可能完全关闭进行维护，圣诞节和新年期间有特别安排。强烈建议出行前在其官方网站核实最新时刻表。`} />
              <InfoRow label="门票价格" value={`成人票约为11欧元。儿童票（7-17岁）约为8欧元。7岁以下免费。家庭套票（2大2小）有优惠，约为32欧元。持有学生证、残疾人证等可享受折扣。花园单独参观票价更低，约为6欧元。门票通常包含一份多语种（含中文）的导览手册，语音导览器需额外支付约3欧元。`} />
              <InfoRow label="地址" value={`16 Place du Martroi, 45130 Meung-sur-Loire, France`} />
              <InfoRow label="交通方式" value={`从巴黎出发最方便。从巴黎奥斯特里茨火车站乘坐TER（区域快铁）前往奥尔良中央火车站，车程约1小时15分钟，班次频繁。抵达奥尔良后，在火车站外的“ République”公交站换乘Rémi 3路公交车，方向为“Meung-sur-Loire - Beaugency”，在“Meung-sur-Loire Centre”站下车，车程约30分钟，每小时约1-2班。更灵活的方式是从奥尔良火车站直接乘坐出租车，车程约20分钟，费用约35-45欧元。自驾是最佳选择，从巴黎经A10高速公路至“Meung-sur-Loire”出口，约1.5小时可达，城堡外有免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从更早的时候说起。在现在城堡矗立的地方，早在六世纪就有一座献给圣利法德的小教堂，后来演变成一座重要的本笃会修道院。我们今天看到的城堡基石，是在十二世纪中叶，由那位权势滔天的奥尔良主教马纳塞·德·加朗德奠定的。在那个王权与教权交织甚至争斗的时代，主教们不仅是精神领袖，也是拥有武装和领地的封建领主。马纳塞主教修建这座城堡，首要目的可不是为了风雅避世，而是为了彰显教权、储存十一税收益，并保护自己的领地免受侵扰。最初的城堡更像个坚固的行政中心和仓库，高高在上的主教从这里管理着广阔的教区。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`让马尔旺城堡在历史书页中留下浓重一笔的，是英法百年战争期间。十四世纪，战火席卷法国，这座坚固的城堡被英国人占领并进行了军事化改造，成为他们在卢瓦尔河谷地区的一个重要据点。它的地牢从那时起，便开始吞噬无数囚徒的生命与希望。而它最著名的“客人”，莫过于奥尔良的查尔斯——那位后来以诗人闻名于世的公爵。1425年，在阿金库尔战役惨败后，年仅24岁的查尔斯在这里被囚禁了数月。传说他被关押在主塔楼一个条件尚可的房间，而非暗无天日的地牢，但失去自由的痛苦无疑滋养了他的诗情。你可以想象，在那些漫长的日夜，他如何透过狭小的窗户，眺望卢瓦尔河的流水，写下那些充满忧郁与思辨的诗句。这座城堡，因而意外地成为法国早期文学一个沉默的见证者。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战争结束后，城堡回到了奥尔良主教的手中。到了十五世纪末十六世纪初，随着文艺复兴的春风吹过阿尔卑斯山，一位品味高雅的主教决定不再忍受这座“兵营”的粗陋。于是，一场轰轰烈烈的改造开始了。他们在保留外部防御城墙和主塔楼的前提下，在城堡内部“嵌入”了一座全新的、优雅的宫殿。巨大的哥特式窗户被开辟出来，引入阳光；华丽的火焰式拱顶在客厅升起；精美的石雕壁炉和木镶板装饰着房间。城堡从一个冰冷的军事堡垒，蜕变为一个适宜居住和接待贵宾的舒适府邸。这一时期留下的豪华厨房、宴会厅和私人套房，至今仍让人惊叹。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`法国大革命的风暴同样席卷了这里。1793年，城堡作为教会财产被没收、拍卖，里面的珍宝散失殆尽。它一度沦为采石场，部分建筑被拆毁取石，令人痛心。整个十九世纪，它在不同私人所有者手中颠沛流离，逐渐衰败。转机出现在二十世纪初，它被一个富有远见的家族购得。他们没有将其推倒重建，而是开始了漫长而细致的修复工作，小心翼翼地剥去后世的拙劣添加，让中世纪的石墙和文艺复兴的装饰重见天日。正是这份对历史的尊重，才让我们今天能看到一个层次如此分明、故事如此完整的马尔旺城堡。它不再属于主教或国王，而是属于每一个愿意来倾听石头低语的人。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`我强烈建议你在下午早些时候，比如两点左右抵达。这个时间，上午的团队游客大多已经离开，而小镇本身非常宁静，能让你获得最佳的沉浸式体验。整体游览需要至少3到3.5小时。节奏应该是“先外后内，先抑后扬”：先在城堡外围和花园感受它的全貌与宁静氛围，然后进入内部，从最底层阴暗的地牢开始你的时间之旅，层层向上，最终抵达阳光明媚的生活空间和塔楼，最后在花园里回味与放松。这样的路线安排，完美复现了城堡本身“从黑暗走向光明”的历史叙事，情感体验会非常饱满。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡内部许多房间保留了原始的石板或木地板，且楼梯陡峭，务必穿一双绝对舒适防滑的鞋子。
地牢部分温度常年较低，且可能潮湿，即使是夏季也建议带一件薄外套。
部分区域仍为私人所有，请严格遵守参观指示，不要闯入未开放的区域。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡后方那片开阔的英式花园开始，沿着碎石小径漫步，从各个角度欣赏这座建筑与自然融合的静谧背影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`通过古老的石桥跨越干涸的护城河，亲手触摸入口处那扇厚重木门上饱经风霜的铁质构件和门钉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`毫不犹豫地先向左转，沿着狭窄阴冷的螺旋石阶向下，踏入那个令人心生寒意的中世纪地牢与拷问室。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从地牢回到地面后，穿过罗马式大厅，顺着主楼梯向上，探索那些拥有高大窗户和精美天花板的文艺复兴客厅与卧室。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在标注为“诗人房间”的窗前驻足片刻，试着像当年的囚徒公爵一样，眺望窗外那片相似的卢瓦尔河岸风光。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`攀爬古老的主塔楼狭窄的楼梯，在顶部的平台喘口气，享受360度俯瞰整个马尔旺小镇红瓦屋顶和远处卢瓦尔河的奖励。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`游览结束前，一定要回到花园，在那条正对着城堡侧面的长椅上坐一会儿，看光影在石墙上缓慢移动。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`护城河遗址仰拍角度`}</h4>
                  <p className="text-sm text-gray-700">{`下午三至五点，太阳西斜时，站在干涸护城河的底部草丛中，向上仰拍城堡主楼与塔楼，能拍出极具压迫感和历史沧桑感的画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`地牢拱门下的光影`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，当一束阳光恰好从地牢唯一的窄缝射入，照亮内部拱门和部分墙壁时，抓紧时机拍摄，能捕捉到明暗对比极其强烈的戏剧性瞬间。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`主塔楼顶俯瞰小镇`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时登上塔楼，将城堡自身的石垛作为前景，聚焦远处卢瓦尔河蜿蜒的河道和小镇成片的红屋顶，构成一幅生动的“古镇栖息图”。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`花园树篱迷宫俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`从城堡二楼某个朝花园的窗户（特别是东南角的房间）向下拍摄，可以将下方修剪整齐的树篱迷宫图案与更远处的城堡建筑局部一同纳入取景框。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`城堡内部光线普遍昏暗，建议使用大光圈镜头或提高ISO，三脚架在大部分室内区域允许使用，但行动需格外小心避免碰撞古迹。`}</li>
                <li>• {`拍摄人物与场景结合时，尽量采用自然抓拍，让人物融入环境（如阅读导览册、凝视窗外），避免僵硬的摆拍。`}</li>
                <li>• {`尊重隐私，切勿对准仍有人居住的私人区域窗户进行拍摄。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`老城温情小旅馆`}</h4>
                  <p className="text-sm text-blue-800">{`镇中心广场旁一栋十七世纪的老房子改造的旅馆，房间不大但充满家常的温馨，老板娘的早餐果酱是自家花园李子熬的。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`卢瓦尔河岸静谧之选`}</h4>
                  <p className="text-sm text-green-800">{`一座距离城堡步行十分钟的十九世纪河边别墅，房间拥有直面河流的落地窗，傍晚可以听着潺潺水声喝一杯本地产的桑塞尔白葡萄酒。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`城堡视野庄园酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`位于城堡对面山坡上的四星级酒店，部分高级房间的阳台正对城堡全景，清晨醒来仿佛拥有一座私人古堡。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`奥尔良都市便捷酒店`}</h4>
                  <p className="text-sm text-purple-800">{`如果追求更丰富的晚餐选择，可以住在车程半小时的奥尔良市中心，现代舒适的酒店旁就是 Joan of Arc 的古老街区，夜生活选择多。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`马尔旺小镇非常安静，夜晚几乎没有任何喧嚣，适合追求绝对宁静的旅行者，但若喜欢热闹夜生活，建议住奥尔良。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季和节假日期间，小镇内的住宿非常紧俏，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果选择住在马尔旺，完全可以利用清晨或黄昏，在游客未至或已散时，独自绕着城堡外围散步，享受专属时刻。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开马尔旺城堡很久以后，我印象最深的不是某个具体的房间或展品，而是那种复杂的、交织在一起的感受。是地牢墙壁上无名囚徒刻痕的冰凉触感，与午后阳光洒在文艺复兴客厅波斯地毯上的温暖；是城堡外观那种拒人千里的军事威严，与发现窗台上—盆盛放天竺葵时的意外温柔。它不像那些被精心打扮成完美模样的博物馆城堡，它坦然展示着自己的每一道伤疤，也炫耀着自己每一次重生的华丽。这种不完美，恰恰赋予了它最动人的真实生命力。在这里，历史不是被玻璃罩隔开的扁平故事，而是你可以用皮肤去感受、用呼吸去触碰的立体存在。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在一切都追求快速、光滑、亮眼的时代，马尔旺城堡像一位沉静的长者，提醒着我们另一种价值。它告诉我们，真正的深度不在于看了多少景点，打了多少卡，而在于你是否愿意停下来，去倾听一堵老墙的沉默，去想象—扇旧窗曾框住过的希望与绝望。它或许没有列入最热门的“卢瓦尔河谷十大城堡”名单，但正是这份低调，让它保存了难得的静谧与本色。对于渴望超越表面、与欧洲厚重历史进行一场私密而真诚对话的旅人来说，马尔旺不是一个景点，而是一个值得你交付—下午时光，去细细品读的、活着的史诗。你会带着—部分它的故事离开，而它，也会因为你的聆听，让那些石头里的低语，继续流传下去。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
