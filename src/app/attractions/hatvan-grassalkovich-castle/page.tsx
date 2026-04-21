import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '哈特万（格拉萨尔科维奇城堡）｜在“六十”之城，探访从乡间别墅到文化殿堂的粉色城堡 - 最佳欧洲景点',
  description: '你从哈特万老城略显嘈杂的主街拐进来，喧嚣声就像被一道无形的墙隔开了。眼前突然展开一片开阔的、绿意茸茸的草地，而在草地的尽头，矗立着一座温柔的粉色宫殿。对，不是那种令人望而生畏的灰暗堡垒，而是粉色的，像一块被岁月稍稍染上烟霞的巨大杏仁糖。这就是格拉萨尔科维奇城堡给你的第一眼印象——亲切，甚至有些甜美。',
}

export default function HatvanGrassalkovichCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '哈特万（格拉萨尔科维奇城堡）', href: '/attractions/hatvan-grassalkovich-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`哈特万（格拉萨尔科维奇城堡）・Hatvan (Grassalkovich Castle)・匈牙利・哈特万`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你从哈特万老城略显嘈杂的主街拐进来，喧嚣声就像被一道无形的墙隔开了。眼前突然展开一片开阔的、绿意茸茸的草地，而在草地的尽头，矗立着一座温柔的粉色宫殿。对，不是那种令人望而生畏的灰暗堡垒，而是粉色的，像一块被岁月稍稍染上烟霞的巨大杏仁糖。这就是格拉萨尔科维奇城堡给你的第一眼印象——亲切，甚至有些甜美。午后的阳光斜斜地打在它U字型的立面上，中央的穹顶闪着光，两侧翼楼对称地张开怀抱，仿佛在邀请你走进一个关于贵族、艺术与重生的漫长故事。
走近了，你会发现那种粉色在阳光下呈现出丰富的层次，墙角的石基是更深一些的赭石色，窗框则是洁白的。空气里有刚修剪过的青草气味，混合着从城堡后方花园飘来的、若有若无的玫瑰香。没有大批旅游团的喧哗，只有几个本地老人坐在花园的长椅上晒太阳，鸽子在广场的方砖上“咕咕”地踱步。城堡正门前，几个孩子踩着滑板车呼啸而过，他们的笑声让这座两百多岁的建筑瞬间充满了生气。你会发现，它不像布达佩斯那些宫殿般遥远，它就活生生地嵌在这个小镇的日常肌理里，是居民们散步的背景，是周末带孩子来看恐龙模型展的地方，是社区音乐会举办的场所。
推开那扇厚重的木门走进大厅，光线骤然变暗，随之而来的是老建筑特有的、凉丝丝的石头气息，还夹杂着一丝旧书和抛光蜡的温和味道。你的脚步声在挑高的大厅里激起轻微的回响。这里现在是哈特万博物馆，但并没有那种冰冷玻璃柜的疏离感。展览巧妙地布置在昔日的厅室里，你可能会在一间装饰着精美灰墁天花板的房间里，看到关于本地地质历史的展品；在另一间铺着老地板的房间里，邂逅匈牙利20世纪的绘画。历史不是被供奉起来的，而是被轻轻捧出来，与当下的人们对话。最打动人的，正是这种“活着的修复”——城堡没有被做成一个仅供凭吊的空壳，而是被赋予了呼吸和心跳，重新成为了小镇文化的脉搏。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你从哈特万老城略显嘈杂的主街拐进来，喧嚣声就像被一道无形的墙隔开了。眼前突然展开一片开阔的、绿意茸茸的草地，而在草地的尽头，矗立着一座温柔的粉色宫殿。对，不是那种令人望而生畏的灰暗堡垒，而是粉色的，像一块被岁月稍稍染上烟霞的巨大杏仁糖。这就是格拉萨尔科维奇城堡给你的第一眼印象——亲切，甚至有些甜美。午后的阳光斜斜地打在它U字型的立面上，中央的穹顶闪着光，两侧翼楼对称地张开怀抱，仿佛在邀请你走进一个关于贵族、艺术与重生的漫长故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走近了，你会发现那种粉色在阳光下呈现出丰富的层次，墙角的石基是更深一些的赭石色，窗框则是洁白的。空气里有刚修剪过的青草气味，混合着从城堡后方花园飘来的、若有若无的玫瑰香。没有大批旅游团的喧哗，只有几个本地老人坐在花园的长椅上晒太阳，鸽子在广场的方砖上“咕咕”地踱步。城堡正门前，几个孩子踩着滑板车呼啸而过，他们的笑声让这座两百多岁的建筑瞬间充满了生气。你会发现，它不像布达佩斯那些宫殿般遥远，它就活生生地嵌在这个小镇的日常肌理里，是居民们散步的背景，是周末带孩子来看恐龙模型展的地方，是社区音乐会举办的场所。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "推开那扇厚重的木门走进大厅，光线骤然变暗，随之而来的是老建筑特有的、凉丝丝的石头气息，还夹杂着一丝旧书和抛光蜡的温和味道。你的脚步声在挑高的大厅里激起轻微的回响。这里现在是哈特万博物馆，但并没有那种冰冷玻璃柜的疏离感。展览巧妙地布置在昔日的厅室里，你可能会在一间装饰着精美灰墁天花板的房间里，看到关于本地地质历史的展品；在另一间铺着老地板的房间里，邂逅匈牙利20世纪的绘画。历史不是被供奉起来的，而是被轻轻捧出来，与当下的人们对话。最打动人的，正是这种“活着的修复”——城堡没有被做成一个仅供凭吊的空壳，而是被赋予了呼吸和心跳，重新成为了小镇文化的脉搏。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`哈特万（格拉萨尔科维奇城堡）`} />
                <InfoRow label="英文名称" value={`Hatvan (Grassalkovich Castle)`} />
                <InfoRow label="正式名称" value={`Grassalkovich Castle in Hatvan`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`哈特万`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座从显赫家族的豪华乡间宅邸，历经沧桑后成功转型为城镇文化心脏的典范。`} />
                <InfoRow label="建筑特色" value={`优雅对称的U型主体建筑，拥有标志性的柔和“匈牙利粉”外墙与醒目的中央穹顶。`} />
                <InfoRow label="建筑风格" value={`洛可可晚期向古典主义早期过渡的风格，带有明显的中欧地区庄园建筑特征。`} />
                <InfoRow label="文化价值" value={`不仅是一座建筑纪念碑，更是承载当地历史记忆、举办现代文化艺术活动的活态社区中心。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡博物馆开放时间：4月1日至10月31日，周二至周日 10:00 - 18:00；11月1日至3月31日，周二至周日 10:00 - 16:00。周一闭馆（除非是法定节假日）。花园区域全年免费开放，日出至日落。每年12月24-26日及1月1日闭馆。具体特展期间开放时间可能有微调，建议行前查看官网。`} />
              <InfoRow label="门票价格" value={`常设展览成人票：1800匈牙利福林；学生、退休人员票：900福林；家庭票（2成人+2儿童）：3600福林。6岁以下儿童免费。临时特展需额外购票或购买联票。每月第一个周六对匈牙利公民免费开放（不影响外国游客正常购票）。支持现场购票及在线预订。`} />
              <InfoRow label="地址" value={`Grassalkovich Castle, Hatvan, Kossuth Lajos utca 1, 3000 Hungary`} />
              <InfoRow label="交通方式" value={`从布达佩斯出发最方便：在布达佩斯东站（Keleti pályaudvar）搭乘前往米什科尔茨（Miskolc）或埃格尔（Eger）方向的城际列车（IC）或区间车，几乎所有车次都在哈特万站停靠，车程约50-70分钟，班次频繁（平均半小时一班）。从哈特万火车站出站后，步行约15分钟即可抵达城堡，沿着主街Kossuth Lajos utca直走，穿过老城区就能看到。若自驾，从布达佩斯沿M3高速公路向东，在Hatvan出口下，按路标指示行驶约5分钟可达城堡附近的停车场，总车程约45分钟。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要讲这座城堡的故事，得先从一个显赫的家族说起——格拉萨尔科维奇。这个家族在18世纪的匈牙利王国可是如雷贯耳，他们不仅是顶级贵族，更是哈布斯堡王朝的忠实支持者和精明管理者。安东尼·格拉萨尔科维奇一世是玛丽亚·特蕾莎女王的心腹，官至匈牙利副王。而这座城堡的诞生，就与他的儿子，安东尼·格拉萨尔科维奇二世紧密相关。18世纪中叶，这位富有的伯爵看中了哈特万这块风水宝地，决定不建那种防御性的堡垒，而是要打造一个彰显品味与财富的、舒适优雅的乡间别墅兼行政管理中心。于是，在1760年代，一座崭新的、时尚的洛可可风格庄园拔地而起，它不仅是家族的夏宫，也成了管理周边广阔庄园产业的大脑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的设计据说受到了奥地利和法国建筑的启发，但又有鲜明的地方特色。在接下来的几十年里，它一直是格拉萨尔科维奇家族社会地位的象征，舞会、宴饮、狩猎，贵族生活的所有精致与繁华都在这些粉墙内上演。然而，家族的命运如同城堡外墙的颜色，会随着时代风云而褪变。19世纪，家族衰落，城堡几经易手，功能也发生了变化。它曾做过军营，经历过战争的创伤，尤其是二战末期，苏联和德国军队在这里的激烈争夺，给建筑留下了难以磨灭的伤痕。战后，它更是被挪作各种平凡的、甚至是不恰当的用途，一度沦为一个仓库和工人宿舍。昔日的荣光被灰尘覆盖，灰墁剥落，壁画暗淡，那个粉色的梦想似乎就要在实用主义的冷漠中彻底破碎。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转机出现在上世纪下半叶。当地人始终没有忘记这座城堡是他们历史和身份的一部分。自1970年代起，一场漫长而精细的修复工程开始了。这不是简单的翻新，而是一次考古式的重生。工匠们小心翼翼地剥离后来添加的粗糙结构，修复精美的天花板壁画，找回原始的色调（那迷人的“匈牙利粉”就是在考古发现后重新确定的）。这个过程持续了几十年，更像是一场与时间的耐心对话。目标非常明确：不仅要拯救建筑本身，更要让它重新为社区服务。于是，修复完成后的城堡没有变成空洞的旅游景点，而是顺理成章地成为了哈特万博物馆和 cultural centre 的完美家园。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天的你漫步其中，依然能看到历史的层层叠印。地下室里有关于城堡考古和修复过程的常设展，向你诉说着它重获新生的不易。在某个华丽的厅室里，你欣赏着19世纪的匈牙利绘画，而脚下踩着的是历经战火幸存下来的镶木地板。窗外，孩子们在曾经只属于贵族的花园里奔跑。从格拉萨尔科维奇伯爵的私人客厅，到二战士兵的临时据点，再到今天小学生课外活动的场所，这座建筑的身份完成了最动人的轮回。它见证了绝对权力的起落，承受了战火的洗礼，最终在社区的呵护下，找到了一个最平和、最有温度的归宿——成为一个属于每个人的“城堡”。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一个大半天（约4-6小时）来深度体验这里。最好在上午10点博物馆开门时抵达，此时光线柔和，游客稀少。游览节奏宜慢不宜快，核心是感受建筑空间与展览内容的交融。先从外部环境和花园开始，建立整体印象，然后进入城堡内部，按照博物馆的推荐路线参观常设展，这通常巧妙地串联起了主要厅室。午餐后可以在花园长椅上发呆，或者去城堡咖啡馆坐坐，观察本地人的生活。如果恰逢周末，很可能遇到在庭院里举办的小型市集或音乐活动，那便是融入当地氛围的绝佳机会。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡内部部分房间和走廊地面是古老的镶木地板或石板，穿一双舒适防滑的鞋子至关重要。博物馆的解说牌以匈牙利语为主，重要部分有英语摘要，但租用语音导览或提前在官网查看英文资料能极大提升体验。避开周日下午，那时本地家庭访客会比较多，略显嘈杂。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡南侧广阔的草地开始你的漫步，以最好的角度欣赏那座粉色立面与中央穹顶构成的完美对称构图。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过正门进入挑高的迎宾大厅，仰头细看那些修复如新的灰墁装饰与天花壁画，感受昔日贵族气派的第一波冲击。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主楼梯上楼，按照博物馆“哈特万与城堡历史”常设展的指引，逐一探访那些被赋予新生的房间，在展柜与古老墙壁的对话中穿梭时光。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要在展示城堡考古发掘与漫长修复过程的展厅多停留一会儿，触摸那些复原的砖石样本，读懂它重生背后的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找那间陈列着20世纪匈牙利本土艺术家作品的展厅，那里的画作色彩往往与房间本身的古典气质形成有趣的碰撞。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下楼回到侧翼，看看是否有临时特展，这些展览通常构思精巧，是洞察当下匈牙利文化动态的窗口。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，从边门步入城堡的后花园，在玫瑰丛或老栗树下找张长椅坐下，听着风声鸟鸣，消化方才所见的一切。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间允许，绕到城堡东侧的小河边走走，从另一个宁静的视角回望这座建筑在水中的倒影。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡正面全景机位`}</h4>
                  <p className="text-sm text-gray-700">{`站在南侧草地广场的边缘，用广角镜头将整个U型立面、穹顶和前景的绿草地一同纳入，最佳光线是晴朗日子的上午九点前或下午四点后，侧光让建筑的粉色更具质感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`中央穹顶下的楼梯间`}</h4>
                  <p className="text-sm text-gray-700">{`从二楼回廊向下俯拍巨大的枝形吊灯和螺旋状对称的楼梯，这是一个经典的建筑内部构图，利用自然光从高处窗户照射进来时的光影效果。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`花园拱门框景`}</h4>
                  <p className="text-sm text-gray-700">{`站在城堡主体建筑通向后方花园的拱形门廊下，向外拍摄，用门廊作为天然画框，将花园的绿意和远处的老城屋顶收于框中，营造景深。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城堡东侧河畔倒影`}</h4>
                  <p className="text-sm text-gray-700">{`黄昏时分，走到城堡东面的扎吉瓦河（Zagyva）对岸，等待华灯初上时，城堡窗户透出温暖灯光，与它在平静河水中的倒影构成一幅静谧的画面。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内拍摄允许使用手机和相机，但严禁使用闪光灯和三脚架，以防对脆弱的历史展品和壁画造成伤害。拍摄人物融入场景时，建议采用抓拍方式，捕捉当地人参观、阅读或沉思的自然瞬间，这比摆拍更有故事感。春季和秋季，花园树木色彩丰富，是拍摄城堡外部环境的最佳季节。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在哈特万老城区中心广场旁的“三柱石”家庭旅馆，房间简单干净，老板会热情地给你手绘一张本地美食地图，下楼就是充满生活气息的咖啡馆和面包店。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`预订坐落在小镇边缘宁静住宅区里的“画家小屋”民宿，主人是一位本地艺术家，屋子里装饰着自己的作品，早餐在种满香草的小花园里享用，能听到最地道的市井故事。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车15分钟前往附近温泉小镇佐洛特（Zalot）的精品温泉酒店，在游览城堡一天后，用富含矿物质的温泉舒缓双脚，在看得见田园风光的房间里享受彻底的宁静。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`便捷之选`}</h4>
                  <p className="text-sm text-purple-800">{`对于乘火车抵达的游客，火车站附近有几家现代商务酒店，设施标准化，步行至城堡距离适中，适合只想把这里作为宁静中转站的旅人。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "哈特万本身不是旅游热点，住宿选择相对有限且价格亲切，夏季旺季（7-8月）最好提前一周预订。老城区区域虽小但安全宁静，夜间散步很有感觉。如果追求更丰富的夜生活和餐饮选择，可以考虑以哈特万为一日游目的地，当晚返回布达佩斯住宿，火车交通非常便利。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开格拉萨尔科维奇城堡时，我总觉得带走的不是几张照片或一些历史知识，而是一种微妙的“温度”。这种温度，来自于它从私人奢华到公共福祉的转变，来自于它伤痕累累却依旧向社区敞开的怀抱。在这个时代，我们见过太多被精心封装、仅供消费的遗产，它们完美却冰冷。而哈特万的这座粉色城堡不同，它有一种“毛边”，一种与当下生活真诚缝合的痕迹。孩子们在它的走廊里奔跑的回音，与两个世纪前贵族舞会的乐声，以一种奇异的方式共鸣着。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这就是深度旅行最珍贵的发现吧——不是寻找一个与世隔绝的乌托邦，而是找到一个地方，它清晰地展现着历史的断层与延续，并以一种充满尊严和智慧的方式，处理着这些断层。它告诉你，美可以重生，记忆需要载体，而文化最健康的形态，就是呼吸在寻常百姓的生活里。哈特万或许不在常规的旅游雷达上，但正因如此，它保留了一份难得的本真与从容。对于每一位厌倦了打卡、渴望触摸欧洲真实纹理的旅人来说，这里是一次温柔的提醒：最动人的风景，往往存在于伟大与平凡的交界处，存在于一座学会了与所有人分享其故事的粉色城堡之中。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kalocsa" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    考
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">考洛乔老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kalocsa</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sopron-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    肖
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">肖普朗老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sopron Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/szombathely-isis-temple-roman-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    松
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">松博特海伊</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Szombathely</p>
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
