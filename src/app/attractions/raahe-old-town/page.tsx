import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '拉赫古城 Raahe Old Town｜宁静网格木屋与罕见的18世纪潜水服 - 最佳欧洲景点',
  description: '穿过现代城镇略显平淡的街道，一个拐角，时间仿佛“咔哒”一声被拨回了两百年前。这就是拉赫古城给我的第一印象。没有恢弘的城门，没有喧嚣的游客，只有一片像被琥珀温柔封存起来的街区，静卧在波的尼亚湾畔。脚下是略有凹凸的碎石路，踩上去沙沙作响，声音在两侧紧密排列的木屋间显得格外清晰。空气里有股特别的味道，是海',
}

export default function RaaheOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '芬兰', href: '/destinations/europe' },
            { label: '拉赫', href: '/destinations/europe' },
            { label: '拉赫古城', href: '/attractions/raahe-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`拉赫古城・Raahe Old Town・芬兰・拉赫`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`穿过现代城镇略显平淡的街道，一个拐角，时间仿佛“咔哒”一声被拨回了两百年前。这就是拉赫古城给我的第一印象。没有恢弘的城门，没有喧嚣的游客，只有一片像被琥珀温柔封存起来的街区，静卧在波的尼亚湾畔。脚下是略有凹凸的碎石路，踩上去沙沙作响，声音在两侧紧密排列的木屋间显得格外清晰。空气里有股特别的味道，是海风带来的淡淡咸味，混杂着老木头经年日晒后散发出的、类似蜂蜜与松脂的暖香。
这些木屋可不是随意散落的，它们像士兵一样整齐地排列在笔直的街道两侧，形成一个完美的网格。墙壁被刷成温柔的鹅黄、淡粉、灰蓝和苔绿，白色的窗框勾勒得一丝不苟。许多窗台上摆着天竺葵，在芬兰短暂的盛夏里开得轰轰烈烈。午后阳光斜射，给所有的屋檐和门廊拉出长长的影子，整个世界只剩下光影的慢舞和偶尔从某扇敞开的窗里飘出的咖啡香。你会看到有老爷爷在自家门前的小花园里修剪玫瑰，有猫咪在台阶上打盹，这里首先是一个活着的家园，然后才是一个博物馆。
而它的灵魂，藏在网格中心那座奶油黄色的老市政厅里。走进去，时光的浓度骤然增加。吱呀作响的木地板，幽深走廊里昏暗的光线，一切都保持着原样。直到你看见它——那套来自18世纪40年代的潜水服，名为“Raahen sukelluspuku”。它看起来像个用皮革和帆布缝制的怪异骑士，带着黄铜头盔和一根长长的通气管。静静地立在玻璃柜中，却仿佛能听见三百年前的海浪声与工匠的喘息。它不仅是世界上最古老的保存完好的潜水服之一，更像一个沉默的誓言，诉说着这座滨海小镇与海洋搏斗、并梦想征服深渊的勇敢过往。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "穿过现代城镇略显平淡的街道，一个拐角，时间仿佛“咔哒”一声被拨回了两百年前。这就是拉赫古城给我的第一印象。没有恢弘的城门，没有喧嚣的游客，只有一片像被琥珀温柔封存起来的街区，静卧在波的尼亚湾畔。脚下是略有凹凸的碎石路，踩上去沙沙作响，声音在两侧紧密排列的木屋间显得格外清晰。空气里有股特别的味道，是海风带来的淡淡咸味，混杂着老木头经年日晒后散发出的、类似蜂蜜与松脂的暖香。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些木屋可不是随意散落的，它们像士兵一样整齐地排列在笔直的街道两侧，形成一个完美的网格。墙壁被刷成温柔的鹅黄、淡粉、灰蓝和苔绿，白色的窗框勾勒得一丝不苟。许多窗台上摆着天竺葵，在芬兰短暂的盛夏里开得轰轰烈烈。午后阳光斜射，给所有的屋檐和门廊拉出长长的影子，整个世界只剩下光影的慢舞和偶尔从某扇敞开的窗里飘出的咖啡香。你会看到有老爷爷在自家门前的小花园里修剪玫瑰，有猫咪在台阶上打盹，这里首先是一个活着的家园，然后才是一个博物馆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而它的灵魂，藏在网格中心那座奶油黄色的老市政厅里。走进去，时光的浓度骤然增加。吱呀作响的木地板，幽深走廊里昏暗的光线，一切都保持着原样。直到你看见它——那套来自18世纪40年代的潜水服，名为“Raahen sukelluspuku”。它看起来像个用皮革和帆布缝制的怪异骑士，带着黄铜头盔和一根长长的通气管。静静地立在玻璃柜中，却仿佛能听见三百年前的海浪声与工匠的喘息。它不仅是世界上最古老的保存完好的潜水服之一，更像一个沉默的誓言，诉说着这座滨海小镇与海洋搏斗、并梦想征服深渊的勇敢过往。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`拉赫古城`} />
                <InfoRow label="英文名称" value={`Raahe Old Town`} />
                <InfoRow label="正式名称" value={`Raahen vanha kaupunki (Raahe Old Town)`} />
                <InfoRow label="国家" value={`芬兰`} />
                <InfoRow label="城市" value={`拉赫`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`17世纪瑞典王国在波的尼亚湾沿岸建立的规划城镇典范，是芬兰现存保存最完好的三大木结构古城之一。`} />
                <InfoRow label="建筑特色" value={`严格按照网格状规划建造的完整木屋街区，色彩柔和的古典主义外墙与实用的北欧木质结构完美结合。`} />
                <InfoRow label="建筑风格" value={`以新古典主义和帝国风格为主，融合了北欧传统的木建筑技艺。`} />
                <InfoRow label="文化价值" value={`一个活生生的时间胶囊，不仅保留了罕见的城市肌理，其博物馆藏品更见证了北欧近代的海洋贸易与科技探索史。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城街道全天开放。核心景点老市政厅博物馆开放时间通常为：6月至8月，周二至周日 10:00 - 17:00；9月至次年5月，周二至周日 12:00 - 16:00，周一闭馆。冬季（12月至1月）开放时间可能缩短，出行前务必在官网确认。请注意，芬兰的夏季白昼极长，而冬季日照很短，规划行程时需考虑光照时间。`} />
              <InfoRow label="门票价格" value={`漫步古城街区免费。老市政厅博物馆门票：成人约8欧元，学生及长者优惠价约6欧元，18岁以下儿童免费。夏季有时会推出包含导游讲解的联票，价格约为12欧元。芬兰博物馆卡在此处通用。`} />
              <InfoRow label="地址" value={`老市政厅博物馆地址：Pekkatori 2, 92100 Raahe, Finland`} />
              <InfoRow label="交通方式" value={`最近的国际机场是奥卢机场（OUL），距离拉赫约75公里。从奥卢机场出发：最便捷的方式是租车自驾，沿E8/E75号公路向北行驶约1小时即可抵达拉赫，沿途是典型的北欧森林与湖泊风光。若乘坐公共交通，可先从机场打车或乘公交到奥卢市中心火车站（约25分钟），然后转乘前往拉赫的长途巴士（如OnniBus或本地巴士），车程约1-1.5小时，班次频率在白天大约每小时一班，建议提前在线购票。从拉赫巴士总站步行至古城仅需10分钟。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "拉赫的故事始于大北方战争的一片焦土之上。1649年，瑞典帝国的一位显赫总督佩尔·布拉赫，在焦心于战后重建与帝国北方疆域的巩固之时，看中了这片位于波的尼亚湾深处的天然良港。他以自己的姓氏为这片新土地命名（Brahestad，后简化为Raahe），怀着典型的帝国雄心，下令建造一座“模范城镇”。图纸上的规划是严谨甚至刻板的：笔直的道路必须切割出完全对称的方形街区，每一块土地的大小和用途都被严格规定。这不仅仅是建造房屋，更是在荒野中植入一种秩序、文明和税收体系的象征。最初的居民多是招募来的商人、工匠和退伍士兵，在国王特许的贸易特权庇护下，小镇逐渐在鳕鱼干、焦油和木材的贸易中站稳了脚跟。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，木结构城市的梦魇——火灾，在1810年降临。一场大火吞没了几乎整个城镇。但拉赫的韧性在灰烬中显现。重建没有打乱最初的网格规划，反而让建筑风格得到了统一。新兴的帝国风格（芬兰新古典主义）成为主流，人们建造起更高大、线条更简洁的两层木楼，外墙刷上当时流行的柔和小清新色调。火灾催生了一个更整齐、更“现代”的拉赫。整个19世纪，是拉赫作为帆船时代的港口的黄金期。造船厂里敲打声不绝于耳，码头上堆满等待运往欧洲各地的木材。那套著名的潜水服，正是在这个充满探索精神的时代被制造和使用的。它并非为了休闲，而是为了解决最实际的问题：打捞沉船货物、检修船体。你可以想象，一位工匠如何一针一线缝制它，一位勇敢的潜水员如何依靠那根脆弱的气管，潜入芬兰湾冰冷黑暗的海底。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "20世纪的工业化浪潮和战争改变了芬兰，也改变了拉赫。钢铁厂在城镇外围建立，经济的重心转移，古老的木城渐渐不再是生活的中心，反而因“过时”而躲过了大刀阔斧的现代化改造。它沉静下来，成了一处被遗忘的角落，却也阴差阳错地得到了保护。直到人们后知后觉地意识到其无价的历史价值，大规模的修复和保护工程才陆续展开。它不是冰冷的历史遗迹，修复的原则是“修旧如旧”，很多房屋至今仍有居民，他们在维护祖产的同时，也守护着一种古老的生活节奏。那套潜水服，也从一件实用的工具，变成了镇馆之宝，它的意义从“如何潜水”变成了“我们是谁”——一个敢于面向寒冷海洋、用智慧和勇气求生存的北欧民族的精神缩影。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在夏季一个晴朗的早晨（最好是工作日）抵达，享受近乎独占古城的宁静。整体游览需要大半天时间（4-5小时）。节奏一定要慢，这里不适合打卡疾走，而适合迷失与发现。上午光线柔和，适合拍摄建筑外观和街道的纵深感；中午前后进入博物馆细细参观；午后可以在咖啡馆发呆，观察本地生活，然后漫步至港口，感受海风。这样的安排能让你充分体会古城从晨间静谧到午后生机的韵律变化。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对舒适的平底鞋，古城里的碎石路虽然好看，但对高跟鞋和行李箱轮子极不友好。进入博物馆前最好在官网确认当日开放时间，芬兰小博物馆的开放时间可能随季节灵活调整。冬季来访虽然极有氛围（积雪覆盖的木屋像童话），但日照极短且异常寒冷，需做好充分防寒准备并规划好室内活动时间。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从古城东北角的Pikisaari桥附近进入，让自己瞬间被那些色彩柔和、排列整齐的古典木屋长廊拥抱。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着Pitkäkatu长街慢慢向西走，留意每栋房子门楣上不同的装饰、古老的店招和居民精心打理的小花圃。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要拐进那些狭窄的巷弄（如Kirkkokatu），从侧面感受木屋山墙的韵律和私人庭院里泄露出的生活气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在网格的中心广场Pekkatori停留，坐在长椅上仰望那栋标志性的奶油黄色老市政厅建筑，看鸽子在钟楼旁盘旋。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入老市政厅博物馆，花至少一小时，重点不仅是那套令人屏息的古老潜水服，还有展厅里关于帆船贸易和市民生活的细致陈列。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从博物馆出来后，在广场边的传统咖啡馆“Café Braun”点一份肉桂卷和咖啡，像当地人一样享受“咖啡暂停”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`饭后顺着Kauppakatu街向南溜达到老港口区，看看那些随着波浪轻轻摇晃的白色小游艇和古老的仓库建筑。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间和体力允许，登上港口附近的瞭望点或漫步至附近的Salmi公园，回望古城那片完整的、棋盘格般的红色屋顶海洋。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`Pitkäkatu长街的东端或西端`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏时分，利用街道的纵深透视，拍下两侧色彩斑斓的木屋形成的“隧道”，低角度拍摄可将碎石路面的质感也纳入画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`老市政厅博物馆内部的木制主楼梯`}</h4>
                  <p className="text-sm text-gray-700">{`利用窗口射入的自然光，拍摄螺旋上升的楼梯扶手与古老墙面的光影交错，营造幽深的历史感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`Salmi公园靠近水边的缓坡`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚时分，从这里可以拍到古城建筑群在水中的倒影，以及港口船只的桅杆，构成一幅宁静的海港古城画卷。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`某条小巷（如Kirkkokatu）的转角`}</h4>
                  <p className="text-sm text-gray-700">{`午后阳光斜射时，捕捉一扇挂着蕾丝窗帘的旧窗、窗台上的鲜花与半开的木门，充满生活细节与温度。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄私人住宅门窗时请务必保持距离和尊重，避免将镜头直接对准屋内或居民。芬兰夏季的“午夜阳光”和冬季的“蓝色时刻”能提供极其独特的光线，是摄影爱好者的宝藏。多注意建筑细节，如黄铜门环、手写体门牌号、历经风霜的木板纹理，它们都是故事的组成部分。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温馨民宿之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在古城网格内一栋经过现代化改造的百年木屋里，房东老太太会为你准备地道的芬兰早餐，晚上能听见老木头在寂静中发出的细微声响。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计酒店体验`}</h4>
                  <p className="text-sm text-green-800">{`位于港口附近由旧仓库改造的精品设计酒店，房间拥有高大的木梁和极简的北欧设计，巨大的窗户将海港景色框成一幅流动的画。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`小镇经典酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在古城边缘一栋庄严的石头建筑内，内部舒适温暖，充满旧世界风情，步行至古城仅三分钟，是历史与现代便利的完美平衡点。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`极致宁静选择`}</h4>
                  <p className="text-sm text-purple-800">{`租下古城外围森林湖边的一栋红色小木屋（Mökki），体验真正的芬兰桑拿后跳入清凉的湖中，彻底融入北欧的自然节奏。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（6-8月）是旺季，古城内的特色住宿非常抢手，建议提前数月预订。冬季住宿价格更优，且能体验极夜和圣诞季的独特氛围，但需确认住宿是否提供充足的暖气。拉赫整体非常安全宁静，但夜间灯光较暗，选择住宿时留意其与古城核心区的步行距离即可。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开拉赫好几天，我脑子里挥之不去的，不是某栋具体的房子，而是一种整体的“感觉”。那是一种近乎奢侈的宁静与完整。在这个被算法和速度统治的时代，竟然还有一个地方，如此固执地保留着两百年前的城市肌理和尺度。走在那些网格街道上，你不会有任何迷失的焦虑，因为你知道，下一个转角，依然是同样温柔的色彩和同样亲切的比例。这种安全感，是古老的智慧赋予的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它更像一个温柔的启示。真正的历史遗产，未必总是惊心动魄的宫殿或城堡，也可以是这一片寻常百姓家的木屋，一套为了生计而发明的粗糙潜水服。拉赫告诉我们，历史就编织在日常的烟火气里，在每一次对家园的修缮中，在每一代人对古老故事的传颂里。它不值得你专程飞跃万里只为一瞥，但如果你向往北欧的灵魂，想在赫尔辛基和罗瓦涅米之外，寻找一个能让你心跳真正慢下来、与时光坦然相对的地方，那么，请来拉赫的网格里走一走。在这里，你不是游客，你是一个偶然闯入了另一段时光的幸运儿，被允许分享片刻那种深沉而安详的、属于北方的寂静。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/olavinlinna-savonlinna" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨翁林纳奥拉维城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Olavinlinna</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/langinkoski-fishing-retreat" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科特卡兰金科斯基（沙皇钓鱼小屋）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Langinkoski Imperial Fishing Lodge</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/raseborg-castle-finland" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉塞博里城堡遗址（森林与岩石中的中世纪堡垒）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Raseborg Castle</p>
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
