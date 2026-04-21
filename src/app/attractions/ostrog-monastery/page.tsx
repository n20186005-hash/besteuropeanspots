import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奥斯特罗格修道院 Ostrog Monastery｜悬崖奇迹与灵魂灯塔 - 最佳欧洲景点',
  description: '车子在之字形的山路上不知盘旋了多久，窗外的景色从丰茂的河谷森林逐渐变成裸露的灰色岩壁。就在你觉得前路似乎要撞上山体的时候，一个急转弯，它毫无预兆地闯入了你的视野——一道几乎垂直的、高达百米的白色巨岩，像被巨斧劈开般矗立在面前。而就在那令人眩晕的岩壁中部，一道细长的、纯白色的建筑线条，如同神用粉笔随意...',
}

export default function OstrogMonasteryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '黑山', href: '/destinations/montenegro' },
            { label: '奥斯特罗格修道院', href: '/attractions/ostrog-monastery' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`奥斯特罗格修道院・Ostrog Monastery・黑山・达尼洛夫格勒`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在之字形的山路上不知盘旋了多久，窗外的景色从丰茂的河谷森林逐渐变成裸露的灰色岩壁。就在你觉得前路似乎要撞上山体的时候，一个急转弯，它毫无预兆地闯入了你的视野——一道几乎垂直的、高达百米的白色巨岩，像被巨斧劈开般矗立在面前。而就在那令人眩晕的岩壁中部，一道细长的、纯白色的建筑线条，如同神用粉笔随意划下的一道痕，又像精致的燕子巢，紧紧地、奇迹般地贴在绝壁之上。那一刻，你听不到任何声音，只有心脏在胸腔里沉重地跳动，混杂着一种近乎本能的敬畏。这就是奥斯特罗格，不是一座建在山上的修道院，而是一座山本身被雕琢成了修道院。
继续向上，直到停车场。一下车，山风裹挟着松树与野生百里香的清冽气息扑面而来，其间还隐隐夹杂着一丝甜涩的蜂蜡味——那是来自无数蜡烛的燃烧。你需要步行一段不长的台阶。脚下的石板被数百万朝圣者的膝盖和手掌打磨得异常光滑，在正午的阳光下泛着温润的光。耳边是多种语言的低声祈祷、婴儿的啼哭、拐杖触碰石阶的笃笃声，还有远处传来的、悠长而平静的教堂钟鸣。人们的神情各异，有满脸风尘的疲惫旅人，有眼神坚定的虔诚信徒，也有像我一样被震撼得说不出话的旁观者。但所有人的步调都出奇地一致：缓慢、郑重，目光不约而同地仰望着上方那白色的奇迹。
当你终于穿过低矮的门洞，进入上修道院的核心——圣瓦西里教堂所在的岩洞时，整个世界仿佛瞬间被调低了音量。光线骤然变暗，唯一的光源来自成百上千支闪烁的蜡烛，将洞窟内壁映照得光影摇曳，温暖而神秘。空气是阴凉的，带着岩石特有的、亘古的潮湿气息，以及浓郁的橄榄油和香料味。你的指尖可以触摸到冰冷而粗糙的岩壁，那上面覆盖着无数小巧的金属片——那是还愿的“塔玛塔”，是无数个关于治愈、平安与感恩的故事。最深处，覆盖着锦缎的圣棺静谧安放。在这里，视觉、听觉、嗅觉、触觉，所有感官都在向你诉说着同一件事：你正站在一个由纯粹信念构筑的、悬浮于天地之间的圣所里。它不是豪华的宫殿，它的力量正源于这种极致的朴素与险峻，仿佛在说：信仰，本就该放置于最接近天堂、也最考验人心的位置。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在之字形的山路上不知盘旋了多久，窗外的景色从丰茂的河谷森林逐渐变成裸露的灰色岩壁。就在你觉得前路似乎要撞上山体的时候，一个急转弯，它毫无预兆地闯入了你的视野——一道几乎垂直的、高达百米的白色巨岩，像被巨斧劈开般矗立在面前。而就在那令人眩晕的岩壁中部，一道细长的、纯白色的建筑线条，如同神用粉笔随意划下的一道痕，又像精致的燕子巢，紧紧地、奇迹般地贴在绝壁之上。那一刻，你听不到任何声音，只有心脏在胸腔里沉重地跳动，混杂着一种近乎本能的敬畏。这就是奥斯特罗格，不是一座建在山上的修道院，而是一座山本身被雕琢成了修道院。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`继续向上，直到停车场。一下车，山风裹挟着松树与野生百里香的清冽气息扑面而来，其间还隐隐夹杂着一丝甜涩的蜂蜡味——那是来自无数蜡烛的燃烧。你需要步行一段不长的台阶。脚下的石板被数百万朝圣者的膝盖和手掌打磨得异常光滑，在正午的阳光下泛着温润的光。耳边是多种语言的低声祈祷、婴儿的啼哭、拐杖触碰石阶的笃笃声，还有远处传来的、悠长而平静的教堂钟鸣。人们的神情各异，有满脸风尘的疲惫旅人，有眼神坚定的虔诚信徒，也有像我一样被震撼得说不出话的旁观者。但所有人的步调都出奇地一致：缓慢、郑重，目光不约而同地仰望着上方那白色的奇迹。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你终于穿过低矮的门洞，进入上修道院的核心——圣瓦西里教堂所在的岩洞时，整个世界仿佛瞬间被调低了音量。光线骤然变暗，唯一的光源来自成百上千支闪烁的蜡烛，将洞窟内壁映照得光影摇曳，温暖而神秘。空气是阴凉的，带着岩石特有的、亘古的潮湿气息，以及浓郁的橄榄油和香料味。你的指尖可以触摸到冰冷而粗糙的岩壁，那上面覆盖着无数小巧的金属片——那是还愿的“塔玛塔”，是无数个关于治愈、平安与感恩的故事。最深处，覆盖着锦缎的圣棺静谧安放。在这里，视觉、听觉、嗅觉、触觉，所有感官都在向你诉说着同一件事：你正站在一个由纯粹信念构筑的、悬浮于天地之间的圣所里。它不是豪华的宫殿，它的力量正源于这种极致的朴素与险峻，仿佛在说：信仰，本就该放置于最接近天堂、也最考验人心的位置。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`奥斯特罗格修道院`} />
                <InfoRow label="英文名称" value={`Ostrog Monastery`} />
                <InfoRow label="正式名称" value={`Ostrog Monastery`} />
                <InfoRow label="国家" value={`黑山`} />
                <InfoRow label="城市" value={`达尼洛夫格勒`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`黑山乃至巴尔干半岛最重要的东正教朝圣地，被誉为“黑山的精神支柱”。`} />
                <InfoRow label="建筑特色" value={`一座几乎完全嵌入垂直白色石灰岩悬崖缝隙中的建筑奇观，由上、下两部分修道院组成。`} />
                <InfoRow label="建筑风格" value={`拜占庭风格与自然岩洞的完美融合，呈现为一种极致的因地制宜的朴素宗教建筑。`} />
                <InfoRow label="文化价值" value={`它是信仰、韧性、自然与人类精神求索的象征，超越了宗教界限，成为寻求慰藉与奇迹的普世之地。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`修道院全年每日开放。上修道院（岩洞教堂部分）开放时间通常为夏季（5月至9月）早上5点至晚上9点，冬季（10月至4月）早上6点至晚上5点。具体时间可能因宗教活动临时调整，重大宗教节日（如圣瓦西里纪念日）期间可能24小时开放且人潮汹涌。下修道院区域则全天可自由接近。`} />
              <InfoRow label="门票价格" value={`进入修道院本身免费，欢迎捐赠。修道院主要依靠访客的自愿捐款维持。停车场收费约2-3欧元。参加由修道士主持的特定讲解或获取圣水、圣物等不强制收费，但习惯上会留下心意。`} />
              <InfoRow label="地址" value={`Ostrog Monastery, Nikšić, Montenegro 81400（请注意，虽然地理上靠近达尼洛夫格勒，但其行政地址通常归于尼科希奇市）`} />
              <InfoRow label="交通方式" value={`从波德戈里察机场或市中心出发是主流路线。自驾是最方便的方式：沿E762/E80公路向尼克希奇方向行驶，看到“Ostrog”的棕色旅游指示牌后转入上山公路。全程约40公里，车程1小时至1.5小时，最后一段是持续盘旋攀升的山路，需谨慎驾驶。公共交通较为不便：可从波德戈里察巴士站乘坐前往尼克希奇的巴士，在“Ostrog路口”下车，但此处距离山脚仍有约8公里陡峭山路，通常需要搭便车或联系当地出租车（费用较高且需提前预约）。强烈建议自驾或参加从波德戈里察/布德瓦出发的一日游小团。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从十七世纪中叶讲起，那时黑山土地正深受奥斯曼帝国的侵扰与压迫。我们的主角，圣瓦西里·奥斯特罗什基，原本是波黑地区一座修道院的主教。他并非王公贵族，却以深邃的智慧、治愈的能力和对人民的无限慈悲闻名。据说，为了寻找一个能远离战乱、潜心修行并能庇护信徒的安宁之所，他进行了漫长的跋涉。当他来到这座当时名为“奥斯特罗格”的荒芜山崖下时，一个神启般的景象出现了：一道光，精准地照射在半山腰一个巨大的天然岩缝上。对圣瓦西里而言，这不再是险峻的绝壁，而是一个天然的堡垒，一个离上帝更近的祭坛。于是，在1665年左右，近乎疯狂的工程开始了。没有现代机械，工匠和信徒们仅凭绳索、锤凿和无穷的信念，将木材与石料运上悬崖，巧妙地利用岩洞和缝隙，搭建起了最初的祈祷所和栖身之所。这不仅是建筑，更是一场集体性的苦修与奉献。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`圣瓦西里于1671年在这里去世，根据他的遗愿，他被安葬在他亲手参与建造的岩洞教堂中。然而，他尘世生命的结束，恰恰是奥斯特罗格传奇的真正开始。越来越多的人开始讲述奇迹：他的圣骸不朽，重病者在此祈祷后康复，无法生育的夫妇喜得贵子……这些故事像风一样吹遍饱受苦难的巴尔干半岛。奥斯特罗格不再只是一座偏远修道院，它成了黑暗时代的一盏明灯，一个希望与反抗的精神象征。黑山人在此聚集，不仅为了祈祷，也为了获得抵抗外敌的精神力量。修道院在历史的风暴中多次受损，最严重的一次在二十世纪初，一场大火吞噬了许多木结构部分。但每一次，它都在信徒倾尽所有的捐助下得以重建，并且更加坚固。那白色的外墙，一次次被虔诚的双手重新粉刷，仿佛一种誓言，誓要让这座灯塔永远洁白明亮。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正让它传奇地位不可动摇的，是发生在二战期间的一件“神迹”。1941年至1942年间，占领军的一架战斗机曾向嵌在悬崖里的修道院发射了炮弹。目击者称，炮弹径直飞向岩壁上的教堂……却在撞击前不可思议地转向，坠入了山谷。战后，人们甚至在岩壁上找不到明显的损伤痕迹。无论你如何用科学去解释这个事件，对于当地人和无数朝圣者而言，这就是圣瓦西里仍在守护此地的明证。这个“哑弹”的故事，与无数个人生命中被见证的微小“奇迹”一起，构成了奥斯特罗格坚不可摧的灵性光环。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的奥斯特罗格，管理者依然是虔诚的东正教修道士。他们过着简朴清修的生活，负责主持日常的祈祷仪式，照料烛火，并为络绎不绝的访客提供精神上的指引。你可能会看到他们穿着黑色长袍，静静地穿过人群，表情平和而专注。他们延续着圣瓦西里的传统，让这里不仅仅是一个旅游景点，更是一个活着的、呼吸的信仰中心。从塞尔维亚、波黑、马其顿乃至更远地方而来的朝圣者，常常带着睡袋，在修道院下方的空地或指定区域过夜，只为参加清晨的第一场礼拜。这种延续了三百多年的传统，让奥斯特罗格的每一块石头、每一缕空气，都浸透了祷告的温度与时间的力量。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你安排整整一天的时间给奥斯特罗格。最好的抵达时间是清晨（8点前），此时山间常有薄雾缭绕，光线柔和，旅游大巴尚未抵达，你能享受最宁静的朝圣氛围。整体游览节奏应是“慢行与沉浸”。路线自然分为三段：首先是“抵达与仰望”，在山路和停车场感受最初的视觉冲击；其次是“核心朝圣”，依次拜访下修道院和徒步上山至上修道院的岩洞教堂，这是精神体验的核心，至少预留2-3小时用于缓慢步行、进入教堂静默和观察；最后是“回望与内化”，在下山途中或附近观景平台停留，从远处再次审视这座建筑奇迹，让感受沉淀。这样的安排让你能从远观到亲近，再从亲近回到宏观，完成一次完整的体验循环。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿着务必端庄保守，男女皆应避免短裤、短裙和无袖上衣，女性最好准备一条头巾（入口处有时会提供临时围裙和头巾）。尽量避开7-8月周末的正午时分，那是人潮最汹涌的时候，上山步道可能会排起长队。修道院内严格禁止使用手机通话和喧哗，拍照时请关闭闪光灯，并绝对不要对着正在祈祷的僧侣或信徒直接拍摄。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在山腰停车场后别急着上山，先回望来路，你会看到整个泽塔河谷像一幅巨大的绿色地毯在脚下铺展。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`缓步走过下修道院那建于十九世纪的圣三一教堂，它的宁静与朴素是攀登前最好的序曲。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`开始沿着之字形朝圣小径向上攀登，途中触摸那些被磨光的石阶和栏杆，感受几个世纪以来无数双手留下的能量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入上修道院狭窄的入口，让你的眼睛适应岩洞内昏暗烛光的那一刻，世界瞬间安静下来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在圣瓦西里教堂主岩洞中，不妨找一处角落静立片刻，观察信徒们如何亲吻圣像、放置蜡烛、将写有愿望的纸条塞入缝隙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访完主教堂后，不要错过上层更小的岩洞圣母教堂，那里通常更隐蔽，烛光映在红色壁画上的氛围格外神秘。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山途中，务必绕到修道院正对面的“照相点”观景台，从这里你能拍到修道院嵌于整面绝壁的完整震撼画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间和体力允许，可以探索一下从下修道院后方延伸出的一条森林小径，那里通往一处静谧的圣泉，泉水清冽甘甜。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`对面山崖观景台全景位`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到日落前，阳光会正好照亮白色的修道院立面，使用广角镜头可以囊括整面绝壁与建筑，构图时将蜿蜒的山路作为前景引导线。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`上修道院内部烛光氛围`}</h4>
                  <p className="text-sm text-gray-700">{`进入主岩洞教堂后，等待一束自然光从入口斜射入黑暗空间，与成千上万烛光交错的瞬间，对准岩壁上的金属还愿牌或一幅圣像进行特写，使用大光圈捕捉虚实光斑。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`下修道院仰视角`}</h4>
                  <p className="text-sm text-gray-700">{`从下修道院的庭院中央向上仰拍，可以将十九世纪教堂的十字架与高处悬崖上的白色上修道院一同纳入画面，形成时空与建筑的对话。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`攀山步道中途回望`}</h4>
                  <p className="text-sm text-gray-700">{`在朝圣步道的第一个大拐弯处停下来回望，可以拍到步道上虔诚攀登的人群剪影，背景是辽阔的山谷，极具故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`圣水泉细节`}</h4>
                  <p className="text-sm text-gray-700">{`在森林小径的圣泉边，聚焦于从岩石中渗出的水滴、生锈的饮水杯和旁边悬挂的旧圣像，拍摄一幅充满静谧灵性感的细节小品。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`岩洞内部光线极暗且不允许使用三脚架（空间狭小且属不敬），请尽量使用大光圈镜头并提高ISO，依靠相机防抖或寻找稳固的岩壁倚靠拍摄。尊重是首要原则，当有宗教仪式进行时，应完全停止拍摄，用眼睛和心去记录那一刻。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`山间质朴客栈`}</h4>
                  <p className="text-sm text-blue-800">{`住在修道院山脚下仅有的几家家庭客栈里，夜晚能听见纯粹的溪流与风声，清晨在鸟鸣中醒来成为第一批朝圣者。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`波德戈里察设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`回到半小时车程外的首都，选择一家现代设计酒店，在极致的舒适与简约中反刍白日悬崖带来的原始震撼，体验强烈的对比之美。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`尼克希奇历史老宅`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车前往更粗犷的工业城市尼克希奇，入住一座经过改造的石头老宅民宿，体验黑山内陆的质朴民风，并从另一个角度了解这片土地。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`斯库台湖畔隐居`}</h4>
                  <p className="text-sm text-purple-800">{`如果你追求极致宁静，不妨住到更远的斯库台湖国家公园旁的生态木屋，用一整天的时间在湖光山色中消化奥斯特罗格带来的精神冲击。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`修道院附近的住宿极为有限且条件简朴，务必提前数月预订，尤其是在五月圣瓦西里纪念日（5月12日）前后。选择波德戈里察住宿则灵活许多，且餐饮选择丰富。黑山内陆治安良好，但山区夜间行车需格外注意道路安全。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开奥斯特罗格许久之后，闭上眼睛，那抹悬挂在白色绝壁上的线条依然清晰。我发现，令我震撼的不仅仅是建筑的奇迹，更是在那里看到的一种人类精神的“状态”。那是一种将自身全然托付的专注，无论是三百年前将第一根梁木楔入岩缝的工匠，还是今天跪在冰冷石板上轻声啜泣的老妇人。在这里，信仰不是抽象的概念，它是磨光的石阶、是烛泪的温度、是岩壁的潮湿、是混合着汗水和祈祷的空气。奥斯特罗格以一种极具象的方式，展示了一种向着极度艰难处攀登、并将最珍贵的部分安置于此的生命选择。它脆弱又坚固，如同信念本身。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、舒适和即时满足的时代，奥斯特罗格的存在是一个温柔而坚定的反问。它邀请你，或者说，它要求你，付出一些努力——蜿蜒的山路、体力的消耗、衣着的约束、心灵的准备——才能抵达那个“奇迹”的现场。而正是在这个付出的过程中，一些东西被悄然过滤和沉淀了。它或许不会改变你的信仰，但它很可能会改变你对“信念”的理解。你会明白，有些地方，它的力量不在于让你看到了什么，而在于它让你在攀登与静默中，听到了自己内心什么样的声音。这，正是每一位渴望深度游的灵魂，应该来此一探的终极理由。它不是清单上的一个打卡点，它是旅途中的一次深呼吸，一次对重力与轻盈的共同见证。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/budva-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布德瓦老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Budva Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cetinje" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    采
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">采蒂涅老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cetinje</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kolain" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科拉欣</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kolašin</p>
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
