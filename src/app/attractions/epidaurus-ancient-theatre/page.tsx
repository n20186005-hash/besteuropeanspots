import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃皮达鲁斯古剧场 Epidaurus Theatre｜聆听两千年前的声学奇迹与古希腊戏剧回响 - 最佳欧洲景点',
  description: '车子驶离纳夫普利翁，钻入伯罗奔尼撒半岛腹地一片被橄榄树和松林覆盖的连绵丘陵。空气忽然变得不一样了，混合着野生百里香的干燥香气和烈日炙烤下土地的尘土味。当你沿着指示牌，走过一片散落着柱廊和神庙地基的广阔遗址——那是阿斯克勒庇俄斯医神圣殿的遗迹——再顺着一条向上的坡道步行几分钟，一个巨大的、碗状的阴影突...',
}

export default function EpidaurusAncientTheatrePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '希腊', href: '/destinations/greece' },
            { label: '埃皮达鲁斯古剧场', href: '/attractions/epidaurus-ancient-theatre' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`埃皮达鲁斯古剧场・Epidaurus Theatre・希腊・埃皮达鲁斯地区（现代行政区划属伯罗奔尼撒大区阿尔戈利斯省）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶离纳夫普利翁，钻入伯罗奔尼撒半岛腹地一片被橄榄树和松林覆盖的连绵丘陵。空气忽然变得不一样了，混合着野生百里香的干燥香气和烈日炙烤下土地的尘土味。当你沿着指示牌，走过一片散落着柱廊和神庙地基的广阔遗址——那是阿斯克勒庇俄斯医神圣殿的遗迹——再顺着一条向上的坡道步行几分钟，一个巨大的、碗状的阴影突然在前方山坡上展开。那就是埃皮达鲁斯剧场。第一眼的感觉不是“壮观”，而是一种惊人的完整与和谐。它不像许多遗迹那样是倔强矗立的碎片，而是一个依然在呼吸的、完美的整体。55排月牙形的石灰石座位，从山体中被精准地挖掘和铺设出来，像一把巨大的石制折扇，顺着自然坡度优雅地层层上升，颜色是温暖的蜂蜜色与灰白色交织。
你沿着侧面的台阶走进去，脚下的石板被无数前人磨得光滑。寂静是这里的第一重声音——不是空虚的寂静，而是一种充满期待、蓄势待发的寂静。然后，你试着走到最顶端、第55排的位置坐下。视野豁然开朗，整个巨大的剧场碗口尽收眼底，中央那个完美的圆形 orchestra（舞蹈场）像一只宁静的眼睛。这时，让你的朋友走下去，一直走到圆形场地的正中心。当他面朝你，用平常聊天的音量甚至只是轻声低语时，奇迹发生了：每一个音节，每一个气声，都无比清晰地穿过几十米的垂直距离，径直钻进你的耳朵，仿佛他就坐在你身旁的石头座位上。这种声学魔法，在亲身经历之前，永远只是书本上一个令人将信将疑的传说。而此刻，你被一种跨越两千三百年的智慧彻底征服。你能想象，在古希腊的阳光下，当索福克勒斯或欧里庇得斯的诗句从这里升起，最后排的农夫也能感受到英雄的每一次颤抖与叹息。这里，戏剧不是精英的消遣，而是全民共享的灵魂洗礼。
这个剧场并非孤立存在。在古希腊人心中，它是医神阿斯克勒庇俄斯圣地不可或缺的一部分。他们认为，身体的疾病与心灵的郁结相通。病人来到圣殿寻求神谕和治疗（包括“孵梦”仪式），而观看悲剧——那种关于命运、苦难与净化的故事——本身就是一种强大的心理治疗。于是，艺术、信仰与医学在这个山谷里达成了古老的共识。如今，虽然祭祀的烟火早已散去，但每年夏天的埃皮达鲁斯戏剧节，这里又会重焕生机。当夜幕降临，古老的石座上坐满了现代观众，舞台被灯光照亮，你会感到时间在这里奇妙地折叠了。松涛声是永恒的观众，而人类关于痛苦、爱与生存的故事，仍在同一个圆形舞台上循环上演。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子驶离纳夫普利翁，钻入伯罗奔尼撒半岛腹地一片被橄榄树和松林覆盖的连绵丘陵。空气忽然变得不一样了，混合着野生百里香的干燥香气和烈日炙烤下土地的尘土味。当你沿着指示牌，走过一片散落着柱廊和神庙地基的广阔遗址——那是阿斯克勒庇俄斯医神圣殿的遗迹——再顺着一条向上的坡道步行几分钟，一个巨大的、碗状的阴影突然在前方山坡上展开。那就是埃皮达鲁斯剧场。第一眼的感觉不是“壮观”，而是一种惊人的完整与和谐。它不像许多遗迹那样是倔强矗立的碎片，而是一个依然在呼吸的、完美的整体。55排月牙形的石灰石座位，从山体中被精准地挖掘和铺设出来，像一把巨大的石制折扇，顺着自然坡度优雅地层层上升，颜色是温暖的蜂蜜色与灰白色交织。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你沿着侧面的台阶走进去，脚下的石板被无数前人磨得光滑。寂静是这里的第一重声音——不是空虚的寂静，而是一种充满期待、蓄势待发的寂静。然后，你试着走到最顶端、第55排的位置坐下。视野豁然开朗，整个巨大的剧场碗口尽收眼底，中央那个完美的圆形 orchestra（舞蹈场）像一只宁静的眼睛。这时，让你的朋友走下去，一直走到圆形场地的正中心。当他面朝你，用平常聊天的音量甚至只是轻声低语时，奇迹发生了：每一个音节，每一个气声，都无比清晰地穿过几十米的垂直距离，径直钻进你的耳朵，仿佛他就坐在你身旁的石头座位上。这种声学魔法，在亲身经历之前，永远只是书本上一个令人将信将疑的传说。而此刻，你被一种跨越两千三百年的智慧彻底征服。你能想象，在古希腊的阳光下，当索福克勒斯或欧里庇得斯的诗句从这里升起，最后排的农夫也能感受到英雄的每一次颤抖与叹息。这里，戏剧不是精英的消遣，而是全民共享的灵魂洗礼。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这个剧场并非孤立存在。在古希腊人心中，它是医神阿斯克勒庇俄斯圣地不可或缺的一部分。他们认为，身体的疾病与心灵的郁结相通。病人来到圣殿寻求神谕和治疗（包括“孵梦”仪式），而观看悲剧——那种关于命运、苦难与净化的故事——本身就是一种强大的心理治疗。于是，艺术、信仰与医学在这个山谷里达成了古老的共识。如今，虽然祭祀的烟火早已散去，但每年夏天的埃皮达鲁斯戏剧节，这里又会重焕生机。当夜幕降临，古老的石座上坐满了现代观众，舞台被灯光照亮，你会感到时间在这里奇妙地折叠了。松涛声是永恒的观众，而人类关于痛苦、爱与生存的故事，仍在同一个圆形舞台上循环上演。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`埃皮达鲁斯古剧场`} />
                <InfoRow label="英文名称" value={`Epidaurus Theatre`} />
                <InfoRow label="正式名称" value={`Epidaurus Theatre`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`埃皮达鲁斯地区（现代行政区划属伯罗奔尼撒大区阿尔戈利斯省）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`古希腊保存最完好的剧场之一，也是古代世界声学工程的巅峰之作，作为祭祀医神阿斯克勒庇俄斯的圣地的重要组成部分，是古希腊文明中宗教、医疗与艺术融合的典范。`} />
                <InfoRow label="建筑特色" value={`依山而建的巨大扇形露天剧场，拥有近乎完美的圆形 orchestra（表演区）和55排、可容纳约14,000名观众的石灰石座席，其举世无双的声学效果允许坐在最远端的观众也能清晰听到舞台中央一枚硬币落地的声音。`} />
                <InfoRow label="建筑风格" value={`希腊古典时期建筑的杰出代表，体现了极致的几何精确性与和谐比例，将自然地形与人工建造无缝融合。`} />
                <InfoRow label="文化价值" value={`不仅是戏剧表演的场所，更是古希腊“戏剧疗愈”理念的物理载体，见证了从宗教仪式到伟大悲剧艺术的演变，至今仍在使用的活态文化遗产。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`通常每日开放，时间随季节调整。夏季（约4月至10月）一般为早上8:00至晚上8:00；冬季（约11月至3月）缩短为早上8:30至下午3:30。具体时间可能微调，逢主要公共假日（如1月1日、复活节周日、12月25日）可能关闭。夏季的周五和周六晚上，若遇希腊埃皮达鲁斯戏剧节演出，剧场会作为演出场地开放至深夜，但白天参观可能受限，务必提前官网查询。`} />
              <InfoRow label="门票价格" value={`全价票：12欧元（夏季），6欧元（冬季）。此门票为联票，包含埃皮达鲁斯考古遗址（阿斯克勒庇俄斯圣殿）及现场博物馆。优惠票：6欧元（适用于欧盟以外的学生，需出示有效国际学生证）。欧盟学生及65岁以上欧盟公民可免费入场（需出示证件）。18岁以下游客免费。每年特定日期（如3月6日、4月18日、5月18日、9月最后一个周末、10月28日）对所有游客免费开放。`} />
              <InfoRow label="地址" value={`Archaeological Site of Epidaurus, Epidavros 210 52, Greece`} />
              <InfoRow label="交通方式" value={`从雅典国际机场（ATH）出发是主要方式。首先，你需要从机场乘坐地铁、巴士或出租车前往雅典市中心的基菲索斯长途汽车站。在那里，乘坐前往纳夫普利翁或埃皮达鲁斯村的长途巴士。前往纳夫普利翁的巴士班次较多（约每1-2小时一班，车程约2.5小时），到达纳夫普利翁后，需转乘前往古代埃皮达鲁斯遗址的当地巴士（班次较少，每天约2-3班，车程约30分钟），这需要仔细规划时间。更灵活的方式是在纳夫普利翁租车或乘坐出租车前往遗址（约25公里，30分钟车程）。直接从雅典包车或参加一日游旅行团是最省心但成本较高的选择。务必提前在巴士公司网站查询最新时刻表，希腊的巴士时间可能变动。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲埃皮达鲁斯剧场的故事，我们得先离开剧场本身，把目光投向它所属的那个更宏大的地方——阿斯克勒庇俄斯圣殿。早在剧场建成之前，这里就已经是希腊世界最重要的疗愈中心。传说，医神阿斯克勒庇俄斯是阿波罗的儿子，他能起死回生，这触怒了宙斯，最终被雷霆击毙。但他的崇拜却在埃皮达鲁斯扎根，人们相信他的神力能治愈一切病痛。从公元前6世纪起，病人、祈求者从四面八方涌来，他们在此沐浴、斋戒、献祭，并在一种叫做“阿巴顿”的长廊式建筑中睡下，期待医神在梦中降临，给予他们治疗的药方。圣殿越来越富有，香火鼎盛。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了公元前4世纪，古典希腊的黄金时代，圣殿的管理者决定建造一座配得上其声誉的剧场。他们请来了当时顶尖的建筑师和雕塑家波利克列托斯（小）来主持设计。波利克列托斯没有选择凭空起高楼，而是将目光投向了圣殿东南侧一面宁静的山坡。他的设计天才体现在对自然的绝对尊重与利用上。他巧妙地利用了山坡54度的自然倾斜度，将观众席（koilon）一层层嵌入山体，这不仅节省了建材，更赋予了剧场无与伦比的稳定性和浑然天成的美感。55排座位被中间的横向通道分为上、下两层，下层34排是早期建造的，上层21排是罗马时期添加的，但两者结合得天衣无缝。最精妙的是那个直径20米的圆形 orchestra，它是表演的核心区域，合唱队在此歌舞。其地面微微倾斜的精准设计和观众席的抛物线形状，共同构成了那个传奇的声学现象：声波从中心均匀地反射到每一排座位。关于这声学的秘密，后世有无数推测——石头的密度、阶梯的角度、甚至可能在当时的地面铺有特殊的砂层——但古人的智慧至今未能被完全复制。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`剧场建成后，迅速成为圣殿宗教仪式的重要组成部分。每四年，这里会举行盛大的“阿斯克勒庇亚”节，包括体育、音乐和戏剧比赛。悲剧在这里上演，不仅仅是为了娱乐，更是一种集体的“卡塔西斯”（净化与宣泄）。病人们在接受身体治疗的同时，通过观看英雄们遭受命运折磨并最终获得精神超越的故事，来完成心灵的疗愈。罗马人征服希腊后，延续了对圣殿的尊崇，甚至扩建了剧场。但随着基督教成为国教，崇拜医神的异教圣地逐渐被废弃。地震、劫掠和时间的尘土慢慢掩埋了这片辉煌的建筑群，剧场也被泥土和植被覆盖，在漫长的中世纪里，它只存在于一些零星的文献记载和当地农夫模糊的传说中。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的重见天日，要归功于一位名叫保罗·卡瓦利亚斯的法国考古学家。在19世纪希腊独立后兴起的考古热潮中，他于1881年开始系统发掘这片区域。当层层泥土被挖开，这座几乎完好无损的剧场再次暴露在阳光下时，整个欧洲学界都为之震惊。它不仅保存状态极佳，其声学特性一经测试，立刻成为传奇。20世纪30年代，在现代希腊戏剧之父的倡导下，埃皮达鲁斯戏剧节诞生了。第一场演出就是索福克勒斯的《厄勒克特拉》。从此，每年夏季，古老的石阶再次被坐满，埃斯库罗斯、索福克勒斯、欧里庇得斯的作品在这里获得重生，玛利亚·卡拉斯等伟大的艺术家曾在此献唱。它不再只是一个考古遗址，而是一个连接古今的活态文化脉搏，证明了伟大的艺术空间拥有超越时间的力量。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的埃皮达鲁斯之旅应该是一个完整的半天，最好安排在一个清晨。原因有三：一是避开夏季午后令人窒息的酷热，二是早晨的光线最适合拍照，蜂蜜色的石头会呈现出最柔和的质感，三是能赶在大批旅行团到来之前，享受剧场那份神圣的静谧。建议早上8点一开放就入场，整体游览时间约3-4小时。节奏应该是缓慢的、沉浸式的。先从宏大的圣殿遗址开始，了解其背景，带着敬意走向高潮——剧场本身，最后在博物馆里为所见所闻找到实物的印证。别忘了，最重要的环节是预留至少30-45分钟，什么也不做，就坐在剧场最高的位置，静静地听风、看光、感受那个空间。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双舒适防滑的鞋子，剧场石阶光滑且跨度较大，上下需要小心。携带充足的饮用水和遮阳帽，遗址区内树荫有限，夏季阳光非常猛烈。如果想体验戏剧节，务必提前数月在官方渠道购票，演出通常在周五和周六晚上，需规划好当晚的交通和住宿。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从遗址主入口进入，先别急着奔向剧场，顺着古老的圣道漫步，穿过两旁散落的阿斯克勒庇俄斯圣殿地基、柱廊和体育场遗址，感受这片疗愈圣地的宏大格局。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在古体育场的跑道边稍作停留，想象当年运动员在此竞技，作为身心疗愈一部分的古老场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着清晰的路标和缓坡向上步行约十分钟，在松林的缝隙间第一次窥见剧场那巨大扇形结构的侧影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从剧场观众席上层的其中一个入口进入，立刻走到最顶端（第55排）的中央位置坐下，进行第一次震撼的全景俯瞰和声学测试。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`慢慢沿着纵向通道向下走，在不同高度停下，聆听声音的变化，并触摸那些被时光打磨得无比光滑的石灰石座位。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下到最底层的圆形 orchestra（表演区），站在正中心点，面向空旷的座席朗诵几句诗或只是轻声说话，体验声音如何从你这里传向四面八方。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探索舞台后方残存的建筑基础（skene），虽然上部结构已不复存在，但依然能想象演员从此处登场的情景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开剧场主体后，务必参观遗址现场的考古博物馆，那里陈列着从圣殿出土的精美雕塑、医疗工具和铭文，尤其是那尊著名的“睡着的女祭司”雕像，会让你对古代的疗愈仪式有更具体的理解。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`剧场全景俯瞰点`}</h4>
                  <p className="text-sm text-gray-700">{`从上层观众席最顶端正中央的位置拍摄，最佳时间是清晨或日落前一小时，阳光斜射，能照亮整个碗状结构，形成深邃的阴影对比，构图时可将圆形 orchestra 置于画面底部中心。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`声学奇迹体验视角`}</h4>
                  <p className="text-sm text-gray-700">{`让你的朋友站在 orchestra 正中心，你从侧面低角度的座位区向上拍摄，将人物的小小身影与宏伟的、层层叠叠的石头座席一同纳入画面，极具故事感和尺度对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`松林与剧场的框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`在剧场外围的松树林中，寻找一个天然的画框，透过松树的枝干去拍摄剧场的一部分，最佳光线是早晨，薄雾和柔光能增添神秘与古典意境。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`细节与光影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`在上午十点前或下午四点后，阳光能创造出长而动人的阴影，聚焦于某一排被磨得发亮的石阶、一个孤独的座位，或者石头上古老的刻字，拍出充满质感与时光痕迹的特写。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从 orchestra 仰望观众席`}</h4>
                  <p className="text-sm text-gray-700">{`站在圆形表演区的边缘，用广角镜头向上拍摄，将弧形的石阶作为引导线，展现出剧场拥抱天空的磅礴气势，最佳拍摄时机是阳光均匀照亮大部分座席的正午前后。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机在当地考古遗址上空飞行通常被严格禁止，务必遵守规定。三脚架在普通参观时可以使用，但若遇演出季或特殊活动可能受限。拍摄时请始终保持对遗址的尊重，避免为了拍照而攀爬禁止区域或做出危险动作。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`海滨风情之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在约20分钟车程的纳夫普利翁古城，这个被称为“希腊最优雅小镇”的地方拥有迷人的海港、威尼斯堡垒和遍布鲜花的小巷，从高端精品酒店到温馨的家庭旅馆应有尽有，夜晚可以在海滨餐厅享用新鲜海鲜。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`沉浸乡村体验`}</h4>
                  <p className="text-sm text-green-800">{`选择埃皮达鲁斯现代村或附近如阿奇亚派拉吉亚这样的传统村庄里的家庭式膳宿公寓，醒来是鸡鸣犬吠和村民的问候，能品尝到最地道的家常菜，真正融入伯罗奔尼撒的乡村生活节奏。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`戏剧节专属便捷`}</h4>
                  <p className="text-sm text-yellow-800">{`如果在戏剧节期间前来观看演出，可以考虑预订遗址附近为数不多的几家小型酒店或精品民宿，它们通常提供演出接送服务，让你在散场后无需长途奔波，还能在星空下回味刚才的演出。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`松林静修处`}</h4>
                  <p className="text-sm text-purple-800">{`寻找隐藏在遗址周围松林和橄榄园中的静谧度假屋或小型酒店，独享绝对的宁静，夜晚只能听到风声和虫鸣，白天在私人露台上就能远眺青山的轮廓。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`纳夫普利翁的住宿在夏季和戏剧节周末非常紧俏，价格也水涨船高，务必尽早预订。如果自驾，选择会更灵活，可以住在稍远但更宁静的乡村地区。伯罗奔尼撒的治安普遍良好，但乡村地区夜间照明较少，驾车需注意。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开埃皮达鲁斯的时候，你的耳朵似乎变得不一样了。你会开始留意声音在空间里的形状，会想起那枚从圆形舞台中心传来的、清晰得不可思议的硬币落地声。这个剧场留给你的，远不止一张惊艳的照片或一段历史知识。它是一次关于“感知”的再教育。在一切都被放大、被加速的现代世界里，我们习惯了戴着耳机把自己包裹在私人音轨中，习惯了在扁平的屏幕前消费故事。而埃皮达鲁斯却让你重新体验了“公共的聆听”和“空间的共鸣”。它提醒我们，曾经有一种艺术，需要集体的在场，需要建筑作为共鸣箱，需要声音穿越真实的空气，需要每一个观众在共同的呼吸中完成一场精神的仪式。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它之所以必须被列入一生必去的清单，是因为它罕见地同时具备了两种极致的美：一种是属于科学的、理性的、近乎神迹的完美工程；另一种则是属于人文的、感性的、直击灵魂的艺术场域。坐在那些冰冷的石阶上，你触摸到的不仅是古希腊的石头，更是人类试图理解命运、治愈痛苦、并通过美来寻求超越的永恒渴望。当夜幕降临，戏剧的灯火再次点亮这座古老的石碗，你会明白，有些舞台从未真正落幕。它静静地躺在希腊的群山之中，等待着每一位愿意坐下来、安静聆听的旅人，送来一场跨越两千年的、关于声音、光和人类精神的伟大课程。在这里，你不是一个旁观者，你是那圆满的声场中，一个被历史轻轻呼唤的坐标。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kastoria-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡斯托里亚老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kastoria Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/meteora-monasteries-greece" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅黛奥拉（天空之城修道院）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Meteora</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/molyvos-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莫利沃斯（依山傍海的石头城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Molyvos</p>
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
