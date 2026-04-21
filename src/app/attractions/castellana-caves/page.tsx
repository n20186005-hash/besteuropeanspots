import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡斯特拉纳洞穴 Castellana Caves｜潜入地心百米，漫步在凝固了千万年的钟乳石森林 - 最佳欧洲景点',
  description: '当你在普利亚耀眼的阳光和橄榄树银绿色的光影下走久了，推开那扇通往地下的厚重门扉，第一感觉不是景象，而是气息。一股沉静、湿润、带着泥土与矿物味道的凉风扑面而来，瞬间卷走了地面上所有的燥热与喧嚣，像大地在你耳边轻轻吐出一口气。顺着台阶往下走，光线迅速被吸收，世界从彩色的明信片切换到了单色的梦境。向导手电...',
}

export default function CastellanaCavesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '卡斯特拉纳洞穴', href: '/attractions/castellana-caves' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卡斯特拉纳洞穴・Castellana Caves・意大利・卡斯特拉纳－格罗泰（普利亚大区）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你在普利亚耀眼的阳光和橄榄树银绿色的光影下走久了，推开那扇通往地下的厚重门扉，第一感觉不是景象，而是气息。一股沉静、湿润、带着泥土与矿物味道的凉风扑面而来，瞬间卷走了地面上所有的燥热与喧嚣，像大地在你耳边轻轻吐出一口气。顺着台阶往下走，光线迅速被吸收，世界从彩色的明信片切换到了单色的梦境。向导手电的光束切开黑暗，你才开始真正“看见”——那根本不是黑暗，而是另一种光明。高耸的穹顶上，成千上万根钟乳石如倒悬的森林，尖端凝结的水珠偶尔滴落，在深渊里发出清脆而遥远的“叮咚”声，那是这里唯一的时间刻度，缓慢得如同永恒。
越往里走，形态越是诡谲壮丽。有些石笋从地底蓬勃生长，与顶上的钟乳石几乎相连，仿佛大地在尝试一个沉默的拥抱。水流在亿万年间像最耐心的艺术家，在岩壁上绘出如瀑布凝固般的流石帷幕，纹理细腻得像天鹅绒的褶皱。而在名为“白色洞穴”的厅室，你会忘记呼吸。纯白的方解石沉积覆盖了一切，在手电光的照耀下，整个空间散发着柔和而圣洁的荧光，像走进了一颗被遗忘的月亮内部，或者一座众神沉睡的水晶宫殿。这里没有鸟鸣，没有风声，只有水滴的韵律和同行者压抑的惊叹声在巨大的空间中回荡、消逝。
对于普利亚人来说，这个洞穴不仅仅是旅游名片。在它被发现之前，那个深不见底的地缝入口被称为“La Grave”（坟墓），被各种神秘传说和敬畏情绪包裹。如今，它成了当地孩子地理课的第一站，是家族周末远足的目的地，是外地亲戚来访时必须炫耀的“我们家后院的世界奇迹”。它从可怕的深渊变成了亲切的宝藏，这种关系的转变本身就充满了温度。它的核心魅力，就在于这份极致的反差——在以阳光、海岸和田园风光著称的普利亚，藏着一个如此深邃、静谧、雕梁画栋的地下世界，仿佛大地悄悄守护着一个与自己火热性格完全相反的、冷静而华丽的秘密。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你在普利亚耀眼的阳光和橄榄树银绿色的光影下走久了，推开那扇通往地下的厚重门扉，第一感觉不是景象，而是气息。一股沉静、湿润、带着泥土与矿物味道的凉风扑面而来，瞬间卷走了地面上所有的燥热与喧嚣，像大地在你耳边轻轻吐出一口气。顺着台阶往下走，光线迅速被吸收，世界从彩色的明信片切换到了单色的梦境。向导手电的光束切开黑暗，你才开始真正“看见”——那根本不是黑暗，而是另一种光明。高耸的穹顶上，成千上万根钟乳石如倒悬的森林，尖端凝结的水珠偶尔滴落，在深渊里发出清脆而遥远的“叮咚”声，那是这里唯一的时间刻度，缓慢得如同永恒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`越往里走，形态越是诡谲壮丽。有些石笋从地底蓬勃生长，与顶上的钟乳石几乎相连，仿佛大地在尝试一个沉默的拥抱。水流在亿万年间像最耐心的艺术家，在岩壁上绘出如瀑布凝固般的流石帷幕，纹理细腻得像天鹅绒的褶皱。而在名为“白色洞穴”的厅室，你会忘记呼吸。纯白的方解石沉积覆盖了一切，在手电光的照耀下，整个空间散发着柔和而圣洁的荧光，像走进了一颗被遗忘的月亮内部，或者一座众神沉睡的水晶宫殿。这里没有鸟鸣，没有风声，只有水滴的韵律和同行者压抑的惊叹声在巨大的空间中回荡、消逝。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`对于普利亚人来说，这个洞穴不仅仅是旅游名片。在它被发现之前，那个深不见底的地缝入口被称为“La Grave”（坟墓），被各种神秘传说和敬畏情绪包裹。如今，它成了当地孩子地理课的第一站，是家族周末远足的目的地，是外地亲戚来访时必须炫耀的“我们家后院的世界奇迹”。它从可怕的深渊变成了亲切的宝藏，这种关系的转变本身就充满了温度。它的核心魅力，就在于这份极致的反差——在以阳光、海岸和田园风光著称的普利亚，藏着一个如此深邃、静谧、雕梁画栋的地下世界，仿佛大地悄悄守护着一个与自己火热性格完全相反的、冷静而华丽的秘密。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卡斯特拉纳洞穴`} />
                <InfoRow label="英文名称" value={`Castellana Caves`} />
                <InfoRow label="正式名称" value={`Grotte di Castellana`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`卡斯特拉纳－格罗泰（普利亚大区）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`意大利东南部最重要、最壮观的喀斯特溶洞系统，自发现之日起便成为普利亚大区的自然象征。`} />
                <InfoRow label="建筑特色" value={`一处由地质力量“建造”的、深达地下百米的天然殿堂，拥有无与伦比的钟乳石、石笋、流石和石膏晶体构造。`} />
                <InfoRow label="建筑风格" value={`大自然用亿万年时间雕琢出的纯粹原生风格，是水滴与石灰岩共同谱写的建筑史诗。`} />
                <InfoRow label="文化价值" value={`它不仅是一个地质奇观，更深深融入了当地人的身份认同，激发了无数艺术与传说，是人类对地下世界敬畏与好奇的永恒焦点。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`开放时间随季节变化：通常夏季（4月至10月）每日开放，导览团从上午8:30至傍晚6:00左右每小时或每半小时发团；冬季（11月至次年3月）开放时间缩短，通常从上午9:00至下午1:00，下午再从2:30至5:00，且周一可能关闭。具体日期和团次建议务必在出发前查阅官网，因为可能因天气或维护临时调整。圣诞节和元旦日通常关闭。`} />
              <InfoRow label="门票价格" value={`门票必须跟随导览团进入，价格根据路线长度而异。标准路线（约1小时）成人票约16欧元，儿童票约13欧元；完整路线（约3小时，深入至最底部）成人票约25欧元，儿童票约20欧元。通常提供英语和意大利语导览团。在线预订通常有少量优惠，并强烈建议旺季提前购票以确保位置。学生、65岁以上老人及团队可能有折扣。`} />
              <InfoRow label="地址" value={`Piazzale Anelli, 70013 Castellana Grotte BA, Italy`} />
              <InfoRow label="交通方式" value={`最近的国际机场是巴里机场（BRI）。从巴里机场出发，最便捷的方式是租车自驾，沿SS16和SS377公路行驶约45分钟即可抵达洞穴，有大型停车场。如果乘坐公共交通：从巴里中央火车站（Bari Centrale）乘坐东南铁路（Ferrovie Sud Est）的地方火车，约50分钟可到达卡斯特拉纳-格罗泰火车站，班次大约每小时一班。从火车站步行至洞穴入口约需15-20分钟，也可搭乘当地出租车。建议提前查好火车时刻表，因为非高峰时段班次可能较少。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从1938年1月23日说起。那天，一个名叫维托里奥·马泰奥·朗贝尔蒂的年轻洞穴学家，站在一个被称为“La Grave”的深坑边缘。这个坑洞在当地臭名昭著，人们认为它深不见底，是通往地狱的入口，里面弥漫着有毒的“瘴气”，动物掉进去就从没上来过。好奇心与科学精神战胜了恐惧，朗贝尔蒂在腰间系上绳索，在同伴的帮助下，成为了第一个垂降进入这个神秘深渊的人。下降的过程惊心动魄，最初的几十米是几乎垂直的竖井，黑暗吞噬了一切光线。当他终于踩到实地，手电筒的光芒划破亘古的黑暗时，眼前的景象让他震惊得说不出话——一个巨大得超乎想象的地下大厅在他面前展开，四处是闪闪发光的晶体和奇形怪状的沉积物。人类第一次看见了卡斯特拉纳洞穴的容颜。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，探索才刚刚开始。朗贝尔蒂和他的团队随后进行了多次更深入的探险。他们穿过狭窄的通道，爬过湿滑的岩壁，每一步都是向未知的挑战。最传奇的一次探险中，他们发现了一条向更深处延伸的狭窄缝隙。身材最为瘦小的探险队员，几乎是用挤的方式钻了过去，从而发现了后来被誉为世界最美洞穴之一的“白色洞穴”。那个瞬间，当手电光照亮那片雪白无暇的方解石世界时，所有的艰辛和风险都得到了回报。他们意识到，这不仅仅是一个洞穴，而是一个连绵不绝、拥有多个巨大厅堂和复杂分支的地下王国。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`第二次世界大战的爆发暂时中断了系统的探索。有趣的是，战争期间，洞穴深邃隐蔽的入口部分曾被当地人用作天然的防空洞，以躲避空袭。战争的硝烟散去后，对洞穴的探索和开发进入了快车道。工程师和工人们开始艰难地修建步道、安装照明系统（最初是非常谨慎的微弱灯光，以保护脆弱的生态系统），让普通公众得以安全地进入这片仙境。1950年代，洞穴正式对游客开放，立刻引起了轰动。它迅速成为意大利战后旅游复苏的一个象征，人们从四面八方赶来，只为亲眼目睹这个“地心奇迹”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`此后的几十年，洞穴的保护与研究始终并行。科学家们通过研究这里的沉积物，解读出了数十万年来地中海地区气候变化的密码。每一层石笋的纹理都像树木的年轮，记录着干湿冷暖的周期。洞穴也成为了独特的生物实验室，在完全黑暗的环境中，进化出了苍白透明的洞穴蝌蚪和特殊的昆虫物种，它们是与世隔绝的进化史的活化石。如今，卡斯特拉纳洞穴已不再是那个令人恐惧的“坟墓”，而是一个被精心呵护的自然圣殿。每年的游客络绎不绝，但它并未因此变得喧闹。在严格的导览制度和保护措施下，它依然保持着朗贝尔蒂初见她时的那份神秘与庄严，只是多了通往更多人内心的路径。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`最理想的游览方式是参加完整的“完整路线”导览团，这需要大约3小时，它能带你直达洞穴系统最深处、最精华的部分。建议选择上午早些时候或下午稍晚的团次，以避开最高峰的人流。务必提前在线预订门票，特别是在夏季的周末。整个游览节奏完全由向导掌控，他会一边讲解地质知识和历史故事，一边在关键节点留出足够的观赏和拍照时间。行进速度平缓，但路程较长且有上下台阶，需要一定的体力。这样的安排能让你从最初的震撼，逐步过渡到细细品味，最后在最大的洞穴中感受到一种圆满的征服感，体验从“进入地心”到“重返人间”的完整旅程。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿防滑且舒适的封闭式鞋子，洞内部分路段潮湿且有泥泞。即使外面是盛夏，洞内常年恒温约18摄氏度，必须带一件薄外套或长袖衫。全程紧跟向导，切勿擅自离开步道，既为安全也为保护脆弱的沉积物。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从“坟墓”入口顺着现代步道下行，感受光线与温度骤变带来的初次震撼，聆听向导讲述1938年那个勇敢的第一跃。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在第一个巨大厅堂“纪念碑岩洞”驻足，仰望高达数十米的穹顶和那些形似巨人管风琴的钟乳石群。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过名为“蛇形通道”的狭窄路段，两侧岩壁触手可凉，体验早期探险者侧身而过的紧张与兴奋。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`抵达旅程的高光点“白色洞穴”，关闭手电筒片刻，在向导开启的特殊灯光下，静静感受这片纯白世界如梦似幻的圣洁光辉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`继续深入至“中央洞穴”，这里是系统中最宏大的空间，巨大的石笋如森林般拔地而起，站在观景台上感受自身渺小与大自然的鬼斧神工。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在“珍珠洞穴”仔细观察岩池边那些如花瓣般卷曲的钙华和宛如珍珠层闪闪发光的微小晶体。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着环线步道返回，再次经过主要景点时，从不同角度欣赏，你会发现许多下来时未曾留意的细节。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后在向导的带领下从另一条较短的通道回到地面，让眼睛逐渐适应阳光，仿佛完成了一次短暂的时空穿越。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`白色洞穴全景`}</h4>
                  <p className="text-sm text-gray-700">{`在向导打开该区域照明系统的几分钟内，站在入口通道尽头拍摄，能捕捉到整个雪白洞厅泛着柔和光晕的全景，构图时将一些前景的石幔纳入会更有层次感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`中央洞穴的“石笋森林”`}</h4>
                  <p className="text-sm text-gray-700">{`站在观景平台的左侧边缘，使用广角镜头仰拍，将几株最具人形的巨型石笋作为前景，后方是灯光点缀的浩渺空间，能拍出极具视觉张力的地心世界。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“纪念碑岩洞”的穹顶钟乳`}</h4>
                  <p className="text-sm text-gray-700">{`在参观开始后不久的这个大厅，将相机对准穹顶，长时间曝光（如果允许且不使用闪光灯），可以拍下钟乳石群如冰瀑般悬挂的静谧而有力的画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`珍珠洞穴的微观细节`}</h4>
                  <p className="text-sm text-gray-700">{`蹲下身，将相机镜头贴近岩池边缘那些卷曲如花瓣的钙华薄片，利用手机微距模式或相机微距镜头，捕捉水流雕琢出的、堪比艺术品的精妙纹理。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`洞内大部分区域禁止使用闪光灯和三脚架（除非获得特殊许可），因为强光会损害敏感的洞穴生物并加速藻类生长。高感光度相机或手机夜景模式是你的好朋友。拍照时动作要轻缓，避免碰到任何岩壁。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济舒适之选`}</h4>
                  <p className="text-sm text-blue-800">{`卡斯特拉纳镇上由家族经营的小型民宿，房间干净明亮，主人会热情地为你推荐镇上最地道的“耳朵面”餐厅，夜晚安静得只能听到远处教堂的钟声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色石屋体验`}</h4>
                  <p className="text-sm text-green-800">{`选择附近阿尔贝罗贝洛地区的特鲁洛石屋入住，白天探洞，晚上回到这些世界文化遗产的锥形石头房子里，享受一种从地底奇观到地上奇居的完整普利亚风味旅程。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端设计酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`巴里或滨海波利尼亚诺的精品设计酒店，在探秘洞穴之后，用海景、现代设计和顶级的普利亚美食来放松身心，享受文化探索与度假奢华的精妙平衡。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果希望行程更悠闲，非常推荐在普利亚乡村地区停留两晚，将洞穴游览与附近的阿尔贝罗贝洛、洛科罗通多等白色小镇串联起来。夏季旺季务必提前数月预订，尤其是特色石屋非常抢手。小镇治安普遍很好，夜晚可以安心散步。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`从洞穴里走出来，重新被南意的阳光拥抱的那一刻，感觉非常奇妙。眼睛需要时间适应，但心里那份由极致的静和暗带来的澄明，却停留了很久。地面上的一切声音——汽车的引擎、人们的谈笑、咖啡机的蒸汽声——突然变得格外清晰，也格外……喧嚣。你会突然意识到，我们日复一日生活在怎样一个忙碌而表层的世界里。而就在我们脚下几十米的地方，存在着一个按照完全不同时间法则运行的宇宙。那里，生长一厘米需要一百年，一滴水的旅程可能长达数个世纪，寂静是唯一的语言。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这或许就是卡斯特拉纳洞穴给予我们最珍贵的礼物：一次对“时间”和“耐心”的重新认知。在当今这个追求即时满足、一切都在加速的时代，它是一座由无数个“瞬间”的水滴，用我们无法想象的漫长耐心构建成的纪念碑。它不关心外界的经济周期、流行趋势或新闻头条，它只遵循地质的韵律，缓慢而坚定地美丽着。每一位热爱深度游的旅人都该来感受一下这种“地心的宁静”，它不仅是一场视觉的盛宴，更是一次心灵的沉降。当你摸到那冰凉湿润的岩壁，你知道你触摸的是真正的永恒。这份感觉，会像一粒钙质结晶，沉淀在你的记忆里，在日后某个浮躁的时刻，提醒你世界还有另一种深沉而缓慢的可能。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/cividale-del-friuli" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奇
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奇维达莱德尔弗留利</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cividale del Friuli</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/aquileia-archaeological-site" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿奎莱亚考古遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Aquileia</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/the-ancient-city-of-acerenza" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿切伦扎古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">The Ancient City of Acerenza</p>
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
