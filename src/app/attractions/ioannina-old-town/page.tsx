import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '约阿尼纳老城 Ioannina Old Town｜巴尔干的明珠，湖光山色与奥斯曼风情交织的秘境 - 最佳欧洲景点',
  description: '车绕着帕姆沃提斯湖转，晨雾还没完全散去，湖水是一种沉静的钢蓝色，然后你就看见了它——约阿尼纳老城，像一座直接从水中生长出来的、赭石色的岛屿。坚固的城墙轮廓倒映在湖水里，随着波纹轻轻晃动，几座细长的清真寺宣礼塔静默地刺破雾霭。那种第一眼的震撼很安静，不是雅典卫城那种直击灵魂的宏伟，而是一种带着水汽的、...',
}

export default function IoanninaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '约阿尼纳老城', href: '/attractions/ioannina-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">约阿尼纳老城・Ioannina Old Town・希腊・约阿尼纳</h1>
          <p className="text-lg text-gray-600 mb-6">
            车绕着帕姆沃提斯湖转，晨雾还没完全散去，湖水是一种沉静的钢蓝色，然后你就看见了它——约阿尼纳老城，像一座直接从水中生长出来的、赭石色的岛屿。坚固的城墙轮廓倒映在湖水里，随着波纹轻轻晃动，几座细长的清真寺宣礼塔静默地刺破雾霭。那种第一眼的震撼很安静，不是雅典卫城那种直击灵魂的宏伟，而是一种带着水汽的、沉甸甸的历史感，仿佛时间在这里流速都变慢了。
把车停在湖边，步行穿过那道古老的城门，瞬间就跌进了另一个世界。空气里的味道变了，石板路被岁月打磨得光滑如镜，缝隙里长着青苔。混合着新鲜烘焙的面包香气、从古老咖啡馆飘出的浓烈希腊咖啡香，还有一丝湖水特有的、微腥的清新感。耳边是叮当作响的银器作坊敲打声（这里以银器工艺闻名），是当地老人在街角用含糊的希腊语低声交谈，是游客偶尔发出的、被高墙反弹回来的惊叹。这里不是纯粹为游客准备的舞台，你身旁擦肩而过的，可能就是提着菜篮回家的主妇，或是在自家作坊门口晒太阳的银匠。生活与历史，在这里没有界限。
它的核心魅力，在于那种“静谧的湖”与“坚固的城”之间不可思议的共生关系。你可以坐在湖边的咖啡馆，看着天鹅悠游，远眺对岸山峦的轮廓，感受着爱奥尼亚海吹来的、带着盐分的风。然后转身走进迷宫般的内城，触摸那些被炮火留下疤痕的城墙，仰望阿里帕夏曾经统治过的宫殿遗迹。水给予了它灵性与诗意，而城堡则铭刻了它的强悍与沧桑。这种刚柔并济，这种自然景观与厚重历史的无缝对接，让约阿尼纳老城拥有了一种巴尔干地区独一份的、令人沉醉的复杂气质。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">车绕着帕姆沃提斯湖转，晨雾还没完全散去，湖水是一种沉静的钢蓝色，然后你就看见了它——约阿尼纳老城，像一座直接从水中生长出来的、赭石色的岛屿。坚固的城墙轮廓倒映在湖水里，随着波纹轻轻晃动，几座细长的清真寺宣礼塔静默地刺破雾霭。那种第一眼的震撼很安静，不是雅典卫城那种直击灵魂的宏伟，而是一种带着水汽的、沉甸甸的历史感，仿佛时间在这里流速都变慢了。</p>
              <p className="text-gray-700 leading-relaxed mb-4">把车停在湖边，步行穿过那道古老的城门，瞬间就跌进了另一个世界。空气里的味道变了，石板路被岁月打磨得光滑如镜，缝隙里长着青苔。混合着新鲜烘焙的面包香气、从古老咖啡馆飘出的浓烈希腊咖啡香，还有一丝湖水特有的、微腥的清新感。耳边是叮当作响的银器作坊敲打声（这里以银器工艺闻名），是当地老人在街角用含糊的希腊语低声交谈，是游客偶尔发出的、被高墙反弹回来的惊叹。这里不是纯粹为游客准备的舞台，你身旁擦肩而过的，可能就是提着菜篮回家的主妇，或是在自家作坊门口晒太阳的银匠。生活与历史，在这里没有界限。</p>
              <p className="text-gray-700 leading-relaxed mb-4">它的核心魅力，在于那种“静谧的湖”与“坚固的城”之间不可思议的共生关系。你可以坐在湖边的咖啡馆，看着天鹅悠游，远眺对岸山峦的轮廓，感受着爱奥尼亚海吹来的、带着盐分的风。然后转身走进迷宫般的内城，触摸那些被炮火留下疤痕的城墙，仰望阿里帕夏曾经统治过的宫殿遗迹。水给予了它灵性与诗意，而城堡则铭刻了它的强悍与沧桑。这种刚柔并济，这种自然景观与厚重历史的无缝对接，让约阿尼纳老城拥有了一种巴尔干地区独一份的、令人沉醉的复杂气质。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="约阿尼纳老城" />
                <InfoRow label="英文名称" value="Ioannina Old Town" />
                <InfoRow label="正式名称" value="The Old Town of Ioannina" />
                <InfoRow label="国家" value="希腊" />
                <InfoRow label="城市" value="约阿尼纳" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="希腊西北部伊庇鲁斯地区保存最完好的奥斯曼时期城镇之一，是曾与奥斯曼帝国对抗的“雅尼纳的阿里帕夏”权力中心的所在地。" />
                <InfoRow label="建筑特色" value="坚固的石砌城堡雄踞湖畔，城内是迷宫般的奥斯曼风格街巷，红瓦屋顶与高耸的宣礼塔、古老的东正教教堂交错并存。" />
                <InfoRow label="建筑风格" value="以奥斯曼帝国时期的伊斯兰建筑为主，融合了拜占庭基础、本地传统石屋风格以及后来加入的新古典主义元素。" />
                <InfoRow label="文化价值" value="一个鲜活的博物馆，展现了伊斯兰与基督教文化在数百年间于此地碰撞、共存与融合的独特历史图景。" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="老城区域全天开放。其核心的约阿尼纳城堡（Its Kale）区域开放时间为每天8:00至日落（夏季约20:00，冬季约17:00）。内部各博物馆（如拜占庭博物馆、民俗博物馆）的开放时间通常为周二至周日 8:30-15:30，周一闭馆。具体开放时间可能因季节和节假日微调，建议行前查询官网。" />
              <InfoRow label="门票价格" value="漫步老城街道和城墙外围是免费的。进入城堡（Its Kale）区域免费，但其内部的博物馆需单独购票。拜占庭博物馆门票约6欧元，民俗博物馆门票约4欧元。欧盟学生及65岁以上老人享有半价优惠，18岁以下青少年及特定节假日可免费入场。建议购买约阿尼纳市博物馆通票（如有时），性价比更高。" />
              <InfoRow label="地址" value="Old Town of Ioannina, Ioannina 452 21, Greece" />
              <InfoRow label="交通方式" value="从最近的伊奥尼纳机场（IOA）出发：机场距离老城约5公里。最便捷的方式是乘坐出租车，车程约15分钟，费用约15-20欧元。公交班次较少，可搭乘前往市中心的巴士，在“Plateia Dimokratias”广场下车后步行10分钟即达。从雅典或塞萨洛尼基乘长途巴士抵达约阿尼纳巴士总站后，换乘市内公交（如2路车）或步行20-30分钟可达老城。自驾前往可将车停放在老城边缘的公共停车场（如湖边停车场），老城内多为狭窄石板路，禁止车辆通行。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">约阿尼纳的故事，始于拜占庭帝国后期。大约在6世纪，查士丁尼皇帝为了巩固帝国边疆，在这片俯瞰湖泊的战略高地上建立了最初的防御工事。湖泊是天堑，高地是堡垒，这个选址注定了此地的不凡。然而，真正让它登上历史中心舞台的，是奥斯曼帝国的到来。1430年，奥斯曼军队占领了这里，并未像在其他一些地方那样进行摧毁，反而将其建设成为帝国在巴尔干西部的一个重要行政与军事中心。穆斯林定居者、商人、学者和工匠的到来，彻底改变了城市的面貌。一座座清真寺、伊斯兰学校、公共浴室和带有内院的豪宅拔地而起，环绕着古老的城堡，形成了今天我们看到的奥斯曼风格老城的骨架。</p>
              <p className="text-gray-700 leading-relaxed mb-4">但让约阿尼纳的名字在近代欧洲史上熠熠生辉的，是一个充满传奇与争议的人物——阿里·帕夏。这位阿尔巴尼亚裔的奥斯曼总督，在18世纪末至19世纪初，将约阿尼纳变成了一个近乎独立的王国。他被称为“雅尼纳的雄狮”，以其狡猾的政治手腕、残酷的统治和奢华的生活方式而闻名。他的宫廷吸引了欧洲的外交官、冒险家和艺术家，拜伦勋爵就在他的长诗《恰尔德·哈罗尔德游记》中描绘了这位帕夏和他的领地。阿里帕夏将城堡内的要塞（Its Kale）扩建为自己的宫殿，那里充满了珍宝和阴谋。然而，他的野心最终激怒了苏丹。经过长达两年的围攻，1822年，阿里帕夏在湖心岛上的圣潘捷列伊蒙修道院被刺杀，他的头颅被送往伊斯坦布尔。他的覆灭，恰与希腊独立战争同期，成为了一个时代的悲壮注脚。</p>
              <p className="text-gray-700 leading-relaxed mb-4">阿里帕夏死后，约阿尼纳逐渐融入了现代希腊的版图。19世纪和20世纪初，随着希腊人口的回归和新古典主义建筑风潮的兴起，老城里也出现了一些带有三角楣和柱廊的漂亮建筑，与奥斯曼风格的住宅并肩而立，形成了有趣的对话。二战期间，城市遭受了严重破坏，但老城的核心结构奇迹般地保存了下来。战后的岁月里，它一度显得有些沉寂和破败，但正是这份“被遗忘”，让它避免了过度商业化开发的命运，保留了原汁原味的历史肌理。</p>
              <p className="text-gray-700 leading-relaxed mb-4">如今，当你漫步其中，你能清晰地读到这些层层叠加的历史。拜占庭时期的墙基上，垒着奥斯曼的巨石；一座东正教教堂可能巧妙地建在一座老清真寺的遗址旁，共用着一面墙；银器作坊里传来的敲打声，延续着几个世纪来的手工艺传统。这里没有非此即彼的文化叙事，有的是一种复杂的、共生的记忆。老城不仅是石头和木头的集合，更是一个关于生存、适应、权力与文明的活态档案。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  要真正品味约阿尼纳老城，请务必预留一整天时间。最佳抵达时间是清晨九点前，此时旅游团还未涌入，阳光柔和，湖面平静，最适合感受老城苏醒的宁静氛围。整体游览节奏应是“外松内紧”：先从环湖漫步开始，建立整体空间感，然后深入城堡和迷宫街巷进行细致探索，中午在湖边或老城餐馆享用悠长的午餐，下午参观博物馆和手工艺作坊，最后在日落时分回到湖边，以一杯咖啡或一场游船结束完美的一天。这样的安排能让你由远及近、由表及里地层层揭开这座古城的面纱，既不错过宏观的湖城相依美景，也能深入微观的历史文化细节。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>中午12点到下午3点阳光最烈，且很多小博物馆会午休，建议这个时段安排午餐或在阴凉的咖啡馆休息。老城石板路多且不平，一定要穿一双绝对舒适防滑的鞋子。湖心岛的船班在黄昏后可能减少，计划前往时最好提前确认末班船时间。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从南侧的市政厅广场出发，沿着帕姆沃提斯湖畔的林荫道向北慢行，让湖对岸老城城堡的全景像一幅缓缓展开的长卷在你眼前呈现。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">通过主城门（Aslan Pasha Mosque所在城门）进入老城，立刻右转爬上古老的石阶，直奔城堡（Its Kale）的制高点，在那里喘着气迎接你的将是湖泊、城市和远处山脉的360度无死角震撼全景。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从城堡下来，钻进Aslan Pasha清真寺建筑群（现为市立博物馆），在凉爽的庭院里感受奥斯曼建筑的宁静，并了解老城的历史脉络。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">放任自己在Fetihie街区迷宫般的狭窄小巷里彻底“迷失”，用指尖触摸那些色彩斑驳的石头墙壁，偶遇隐蔽的古老喷泉和爬满九重葛的安静院落。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">一定要找到一家当地人光顾的传统咖啡馆（kafeneio），点一杯苦香浓郁的希腊咖啡，坐在塑料椅子上看街坊邻居玩西洋双陆棋，沉浸在最地道的市井烟火气中。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">参观老城著名的银器作坊聚集区，看匠人们如何用古老的工具将一块银锭敲打成精美的艺术品，或许还能带走一件独一无二的纪念品。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">在日落前半小时，乘坐传统的木质小船（plaves）前往湖心岛（Nisi），在圣潘捷列伊蒙修道院里凭吊阿里·帕夏的陨落之地，感受历史在此凝固的悲怆氛围。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">趁着日落最后的金色光芒洒满湖面，回到主城区的湖边餐厅，点一份本地特色的鳗鱼派（bakaliaropita）或陶罐炖菜，为这一天画上味觉的句号。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 湖东岸的“Bouka”码头附近</h4>
                  <p className="text-sm text-gray-700">清晨或日落时分，利用湖面作为前景和倒影，将城堡、清真寺宣礼塔和背后的群山一并纳入镜框，构图力求简洁，突出对称与宁静。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 城堡（Its Kale）西南角的瞭望平台</h4>
                  <p className="text-sm text-gray-700">下午侧光时，从此处向下俯拍老城层层叠叠的红瓦屋顶和蜿蜒曲折的小巷，捕捉光影在屋顶上勾勒出的迷人线条和质感。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. Fetihie街区某条狭窄小巷的转角</h4>
                  <p className="text-sm text-gray-700">正午阳光直射时，寻找一条两侧高墙的小巷，捕捉阳光将建筑物的影子投在对面墙上形成的强烈明暗对比几何图案，人物可以作为一个剪影点缀其中。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 阿斯兰帕夏清真寺（Aslan Pasha Mosque）庭院内</h4>
                  <p className="text-sm text-gray-700">避开正午顶光，在上午或下午拍摄庭院中央的古老树木与简洁的伊斯兰建筑拱廊形成的框架构图，营造宁静肃穆的氛围。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 湖心岛码头回望主城</h4>
                  <p className="text-sm text-gray-700">黄昏蓝调时刻，从湖心岛码头用长焦镜头拍摄对岸老城华灯初上的景象，点点灯光与深蓝色的湖水、天空形成冷暖色调的绝佳对比。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 多利用长焦镜头压缩空间，可以拍出老城建筑密集、层叠的独特质感。拍摄当地居民，尤其是老人和手工艺人时，请务必先微笑示意并获得对方同意，这里的人们友善但注重隐私。湖面的反光是极好的天然反光板，善加利用可以为人物面部补光。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">隐秘遗产</h4>
                  <p className="text-sm text-blue-800">位于老城核心区一座经过精心修复的18世纪奥斯曼豪宅内，只有寥寥数间客房，每间都拥有独特的古董家具和裸露的原始石墙，清晨在私人阳台上就能听到清真寺的宣礼声。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">设计师的石屋</h4>
                  <p className="text-sm text-green-800">由传统石头仓库改建的精品民宿，现代极简主义的设计与古老的结构形成惊艳对话，主人会为你手绘一份只有本地人才知道的美食与秘境地图。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">湖边家庭旅馆</h4>
                  <p className="text-sm text-yellow-800">由热情好客的本地家庭经营，房间整洁温馨，最大的财富是主人妈妈每天早晨准备的、铺满自制果酱和蜂蜜的丰盛早餐，以及他们讲述的关于老城的动人故事。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">现代湖景酒店</h4>
                  <p className="text-sm text-purple-800">坐落在老城边缘的现代建筑内，所有房间都拥有无敌湖景和阳台，在享受完一天的历史漫步后，回到这里用现代化的舒适设施放松身心是绝佳选择。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">老城内的住宿多以特色民宿和小型精品酒店为主，隔音可能不如现代酒店，但体验无可替代。预订时建议选择包含早餐的选项，因为清晨老城内营业的餐馆不多。该区域治安良好，夜晚漫步也很安全，但依然建议保管好贵重物品。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开约阿尼纳好些天了，但闭上眼睛，那湖面带着水汽的风，仿佛还能吹到脸上。这个地方不像那些世界级名胜，用瞬间的壮观将你征服；它更像一壶需要小火慢煮的咖啡，初尝微苦，而后回甘绵长，香气一点点渗进你的记忆里。它教会你的，是一种“慢下来”的旅行美学。在这里，最大的奢侈不是看到了什么奇观，而是获得了一段与自己、与历史平静对话的时间。坐在湖边看天鹅整理羽毛，在迷宫小巷里毫无目的地转弯，听咖啡馆里棋子落在棋盘上的清脆声响……这些看似“无用”的瞬间，恰恰是约阿尼纳赠予旅人最珍贵的礼物。</p>
              <p className="text-gray-700 leading-relaxed mb-4">在这个追求效率、热衷打卡的时代，约阿尼纳老城固执地保持着自己的节奏。它是一面多棱镜，从拜占庭的基石、奥斯曼的荣光、阿里帕夏的悲歌，到现代希腊的日常，每一面都折射出一段复杂的历史光影。它不试图简化自己的故事，也不刻意迎合谁的期待。正是这种真实与复杂，让它在众多欧洲古镇中显得如此独特而深刻。如果你厌倦了被包装好的历史，渴望触摸一段有温度、有矛盾、有呼吸的过往，那么请一定来约阿尼纳。它不会尖叫着吸引你的注意，但当你静静走近，它便会向你展开一个关于巴尔干半岛灵魂的、深邃而温柔的故事。这不仅仅是一次旅行，更是一场关于时间、文化与共存的沉思。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
