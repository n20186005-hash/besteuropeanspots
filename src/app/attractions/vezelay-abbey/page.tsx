import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '韦兹莱隐修院 Vézelay Abbey｜朝圣之路的起点与光影交织的罗马艺术巅峰 - 最佳欧洲景点',
  description: '让我带你回到那个晴朗的清晨。当你终于爬完最后一段舒缓却磨人的坡道，从“法国最美村庄”韦兹莱小镇那些金色石头砌成的房屋小巷中钻出来，眼前豁然开朗。首先抓住你的不是隐修院那恢弘的立面，而是风——一股清冽、带着远方田野和森林气息的风，毫无阻挡地吹过这座勃艮第的山丘之巅。然后，你才看到它：韦兹莱隐修院，像一...',
}

export default function VezelayAbbeyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '韦兹莱隐修院', href: '/attractions/vezelay-abbey' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`韦兹莱隐修院・Vézelay Abbey・法国・韦兹莱`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`让我带你回到那个晴朗的清晨。当你终于爬完最后一段舒缓却磨人的坡道，从“法国最美村庄”韦兹莱小镇那些金色石头砌成的房屋小巷中钻出来，眼前豁然开朗。首先抓住你的不是隐修院那恢弘的立面，而是风——一股清冽、带着远方田野和森林气息的风，毫无阻挡地吹过这座勃艮第的山丘之巅。然后，你才看到它：韦兹莱隐修院，像一艘巨大的石船，静静地泊在山顶，以一种既庄严又亲切的姿态，迎接着每一个到来的人。
走进那扇厚重的罗马式大门，时间仿佛瞬间被抽走。室内的空气是凉的，带着石头和古老木料特有的、略带潮湿的气味。你的眼睛需要几秒钟来适应这里的光线。随后，震撼便无声地降临。长达62米的中殿向前延伸，两排巨大的圆形石柱像沉默的巨人，支撑起高高的筒形拱顶。这里没有巴黎圣母院那种令人目眩的彩色玻璃森林，光线是经过精心计算的。清晨的阳光从南侧的高窗斜射进来，在古老的淡金色石壁上切割出明亮的光斑，而北侧则沉浸在深邃的、泛着蓝灰的阴影里。这不是均匀的照明，而是一曲用光与影谱写的圣歌，清晰地区分出神圣与世俗、光明与启迪的路径。
最令人着迷的是那些柱头。别急着往前走，停下来，凑近了看。每一根柱子的顶端，都藏着一个微缩的石头世界。圣经故事、道德寓言、神话生物、还有中世纪工匠天马行空的想象：狮鹫与魔鬼搏斗，贪婪者抱着钱袋下地狱，音乐家弹奏着诗琴，树叶与藤蔓缠绕生长。它们不是冰冷的说教，而是充满生命力的叙事诗。你几乎能听到工匠雕刻时凿子的叮当声，能感受到他们想把整个纷繁复杂的人间和天国都凝固在石头上的那股热情。这里不只是信徒跪拜的地方，更是平民的“石头圣经”，是他们理解世界和信仰的图画书。
当你走到中殿尽头，抬头仰望后殿半圆穹顶下的祭坛，那一刻的宁静难以言喻。或许正好有一束光，透过后殿的高窗，笔直地打在空无一物的祭坛上——那里曾经供奉着抹大拉的玛利亚的圣髑。你可以找个长椅坐下，耳边或许会有零星的脚步声、低声的惊叹，或者什么声音都没有，只有你自己呼吸的回响。你会明白，这座建筑最伟大的魅力，不在于它的规模（它其实不算最大），而在于它营造出的那种强烈的、几乎可触摸的“场”。一种让灵魂静下来，与千年前的祈祷、希望、艺术渴望直接对话的独特空间。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`让我带你回到那个晴朗的清晨。当你终于爬完最后一段舒缓却磨人的坡道，从“法国最美村庄”韦兹莱小镇那些金色石头砌成的房屋小巷中钻出来，眼前豁然开朗。首先抓住你的不是隐修院那恢弘的立面，而是风——一股清冽、带着远方田野和森林气息的风，毫无阻挡地吹过这座勃艮第的山丘之巅。然后，你才看到它：韦兹莱隐修院，像一艘巨大的石船，静静地泊在山顶，以一种既庄严又亲切的姿态，迎接着每一个到来的人。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进那扇厚重的罗马式大门，时间仿佛瞬间被抽走。室内的空气是凉的，带着石头和古老木料特有的、略带潮湿的气味。你的眼睛需要几秒钟来适应这里的光线。随后，震撼便无声地降临。长达62米的中殿向前延伸，两排巨大的圆形石柱像沉默的巨人，支撑起高高的筒形拱顶。这里没有巴黎圣母院那种令人目眩的彩色玻璃森林，光线是经过精心计算的。清晨的阳光从南侧的高窗斜射进来，在古老的淡金色石壁上切割出明亮的光斑，而北侧则沉浸在深邃的、泛着蓝灰的阴影里。这不是均匀的照明，而是一曲用光与影谱写的圣歌，清晰地区分出神圣与世俗、光明与启迪的路径。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最令人着迷的是那些柱头。别急着往前走，停下来，凑近了看。每一根柱子的顶端，都藏着一个微缩的石头世界。圣经故事、道德寓言、神话生物、还有中世纪工匠天马行空的想象：狮鹫与魔鬼搏斗，贪婪者抱着钱袋下地狱，音乐家弹奏着诗琴，树叶与藤蔓缠绕生长。它们不是冰冷的说教，而是充满生命力的叙事诗。你几乎能听到工匠雕刻时凿子的叮当声，能感受到他们想把整个纷繁复杂的人间和天国都凝固在石头上的那股热情。这里不只是信徒跪拜的地方，更是平民的“石头圣经”，是他们理解世界和信仰的图画书。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你走到中殿尽头，抬头仰望后殿半圆穹顶下的祭坛，那一刻的宁静难以言喻。或许正好有一束光，透过后殿的高窗，笔直地打在空无一物的祭坛上——那里曾经供奉着抹大拉的玛利亚的圣髑。你可以找个长椅坐下，耳边或许会有零星的脚步声、低声的惊叹，或者什么声音都没有，只有你自己呼吸的回响。你会明白，这座建筑最伟大的魅力，不在于它的规模（它其实不算最大），而在于它营造出的那种强烈的、几乎可触摸的“场”。一种让灵魂静下来，与千年前的祈祷、希望、艺术渴望直接对话的独特空间。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`韦兹莱隐修院`} />
                <InfoRow label="英文名称" value={`Vézelay Abbey`} />
                <InfoRow label="正式名称" value={`Basilica of Saint Mary Magdalene of Vézelay`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`韦兹莱`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是中世纪欧洲最重要的朝圣中心之一，守护着抹大拉的玛利亚的圣髑，也是第一次十字军东征与第二次十字军东征的重要布道起点。`} />
                <InfoRow label="建筑特色" value={`罗马式建筑的典范，以其宏伟的中殿、精雕细琢的柱头、以及独特的光影设计而闻名，尤其是通过高侧窗与彩色玻璃创造出的“光之瀑布”。`} />
                <InfoRow label="建筑风格" value={`勃艮第罗马式风格，融合了早期哥特式建筑的某些特征，对后世法国哥特式大教堂的发展产生了深远影响。`} />
                <InfoRow label="文化价值" value={`不仅是宗教圣地，更是理解中世纪欧洲人精神世界、艺术表达与朝圣文化的“活化石”，其影响力跨越了纯粹的信仰范畴，成为人类共同的文化遗产。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年开放。修道院教堂每日开放，夏季（4月1日至9月30日）通常为7:00至20:00；冬季（10月1日至3月31日）通常为8:00至18:00。与教堂相连的修士建筑及博物馆开放时间较短，通常为10:00至18:00，冬季可能缩短或仅在下午开放。请注意，每日午间（约12:00至14:00）部分区域可能关闭。重要宗教节日（如复活节、圣诞节）期间有特殊弥撒，对游客开放时间会有调整，建议行前在其官网核实。`} />
              <InfoRow label="门票价格" value={`进入修道院教堂本身是免费的。然而，参观与之相邻的修士回廊、博物馆以及攀登钟楼塔楼需要付费。成人票价约8欧元。优惠票价（学生、青少年、团体）约6欧元。18岁以下及26岁以下欧盟居民可免费进入付费区域。每月第一个周日，所有游客免费。语音导览租赁费用约5欧元。`} />
              <InfoRow label="地址" value={`Rue Saint-Pierre, 89450 Vézelay, France`} />
              <InfoRow label="交通方式" value={`韦兹莱是一个山丘小镇，公共交通班次有限，自驾最为方便。
从巴黎出发：最便捷的是乘坐高速列车（TGV）从巴黎里昂车站前往拉罗什-米热讷站（Laroche-Migennes），车程约1小时20分钟。然后，在车站外换乘前往阿瓦隆（Avallon）的当地巴士或提前预订出租车，前往韦兹莱的最后一段山路车程约40分钟。巴士班次稀疏，每天可能只有几班，务必提前查询时刻表。
从第戎或欧塞尔出发：这两个城市是更近的区域枢纽。从第戎或欧塞尔火车站，可以搭乘前往阿瓦隆的火车或巴士，再转车前往韦兹莱，但同样面临班次少的问题。
自驾：导航至89450 Vézelay。小镇入口有大型停车场（收费），车辆不能驶入山顶的历史中心，需步行5-10分钟上山。建议将车停在“Les Hautes Barres”停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事得从一具遗骨说起。公元9世纪中叶，据说抹大拉的玛利亚的圣髑被一位名叫巴德龙的修士，从屡遭撒拉森人劫掠的普罗旺斯圣马克西曼修道院，秘密带到了勃艮第这个偏僻的山丘。为什么来这里？或许是为了安全，或许是天意。总之，圣髑的到来，让韦兹莱从一个普通的修道院，一夜之间成为整个基督教世界瞩目的星辰。抹大拉的玛利亚，这位在耶稣受难时坚守在场、并见证复活的女性，她的故事本身就充满了忏悔与救赎的意味，深深击中中世纪人们的心灵。朝圣者开始从四面八方涌来，蜿蜒的山路上，满是风尘仆仆的信徒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了11世纪，韦兹莱迎来了它的“建筑师圣人”——院长圣于格。他不满足于小教堂容纳汹涌的人潮，决心建造一座配得上其盛名的宏伟教堂。他筹募资金，招募最好的石匠和雕塑家。我们今天看到的恢弘中殿和精雕细琢的柱头，大多是他的功绩。但圣于格的雄心不止于此。1095年，教皇乌尔班二世来到克莱蒙费朗号召十字军东征。而第二年，正是圣于格在韦兹莱隐修院前，向包括穷苦农民和骑士在内的狂热人群，发表了激动人心的布道，点燃了第一次十字军东征的烽火。1146年，另一位重量级人物——明谷的圣伯尔纳铎——同样站在这里，面对包括法王路易七世在内的贵族与民众，为第二次十字军东征呼吁。韦兹莱，从此不再只是一个朝圣终点，它成了远征耶路撒冷的“精神发射台”，其影响力穿透了宗教，直接改变了欧洲乃至中东的历史进程。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，盛极必衰。13世纪初，法国南部圣马克西曼的修道院声称他们发现了“真正的”抹大拉的玛利亚圣髑。这场“圣髑真假之争”严重动摇了韦兹莱的朝圣中心地位，人流开始锐减。屋漏偏逢连夜雨，一场大火在1120年几乎摧毁了初建不久的唱诗班席位。重建工作持续了很久，而这次重建，恰逢哥特式风格在法兰西岛兴起。于是，你可以在今天看到的建筑中，发现一个有趣的“混搭”：罗马式的中殿，连接着一个早期哥特式的后殿和耳堂。后殿更高、更明亮，尖拱和肋拱顶开始出现，光线更为充沛。这就像一个凝固的时间剖面，记录着建筑风格从罗马式的厚重敦实，向哥特式的轻盈升腾过渡的瞬间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`法国大革命的风暴席卷而来时，韦兹莱隐修院未能幸免。它被收归国有，修士被驱逐，珍贵的圣髑盒被熔毁，建筑本身被当作采石场，部分石材被拆走用于修建民房。这座昔日的圣地沦为了废墟，甚至一度被用作牲畜棚。它像一位被遗忘的贵族，在荒草和尘埃中沉睡了近半个世纪。直到19世纪中叶，一位名叫欧仁·维奥莱-勒-杜克的年轻建筑师受命前来。这位以修复巴黎圣母院而闻名的“建筑医生”，面对韦兹莱的惨状，没有选择简单的修补。他进行了大量深入的研究和考古，发起了一场雄心勃勃但也备受争议的“风格性修复”。他重建了倒塌的塔楼，复原了西立面雕塑，并根据自己的理解“完善”了许多细节。我们今天看到的韦兹莱，很大程度上是维奥莱-勒-杜克“理想中”的罗马式建筑。他的工作拯救了它免于彻底湮没，但也留下了一个永恒的议题：修复，究竟应该是保护残迹，还是重现荣光？`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正品味韦兹莱，请务必预留一整天时间，并在这里过夜。最佳的体验始于一个清早。前一晚住在村里，次日趁大批一日游游客尚未从第戎或巴黎抵达时（通常在上午10点后），先去感受隐修院的宁静。建议上午9点前抵达隐修院，先用2-3小时沉浸式参观教堂内部，细细欣赏柱头和光影变化。午前光线最佳，适合拍摄建筑内部。中午可以在小镇的石板路主街上找一家餐馆享用勃艮第午餐。下午先去隐修院附属的博物馆和回廊遗址（如果开放），深入了解其历史。然后，以更放松的心态在小镇漫步，从各个角度欣赏这座“山顶之舟”，逛逛小店，喝杯咖啡。傍晚时分，当游客散去，再次回到隐修院前的大草坪，看夕阳将整座建筑染成蜂蜜般的金色。这样的节奏，才能让你从“参观者”变成“体验者”。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇所有停车场都在山脚下，拖着大行李箱上山非常痛苦，请务必轻装或确认酒店是否提供接送服务。穿着绝对舒适的步行鞋，这里的每一块石板路都历经千年，凹凸不平且光滑。夏季中午教堂内部仍很凉爽，但小镇街道毫无遮挡，注意防晒和补水。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一大早趁山间薄雾尚未散尽时，从小镇底部的停车场开始，沿着古老的朝圣者之路“Grande Rue”缓缓步行上山，用脚步丈量这段最后的朝圣距离。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入隐修院前，先在教堂西侧正前方的开阔草坪上停留片刻，感受这座建筑与山丘、天空融为一体的磅礴气势。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开沉重的木门步入中殿，立刻右转去仔细端详南侧入口上方那气势恢宏的《最后的审判》门楣浮雕，寻找那些生动的细节。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花至少半小时像寻宝一样流连在一根根石柱间，仰头辨认和解读那些讲述圣经故事与中世纪生活的精妙柱头雕刻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`缓缓走向祭坛，在中殿与后殿的交界处停下，抬头对比罗马式筒形拱顶与早期哥特式肋拱顶在结构与光影上带来的不同感官冲击。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从侧门走出，绕到教堂的北侧和后部，这里游人罕至，可以看到粗犷的扶壁和历经风霜的石墙，感受建筑作为“实体”的另一种力量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果塔楼开放，一定要鼓起勇气攀登那狭窄的螺旋石阶，在塔顶的呼啸风声中，将整个勃艮第连绵的绿色山丘与金色小镇尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观结束后，别忘了去小镇主街上的“耶路撒冷”面包坊，买一个著名的“抹大拉玛利亚”香料面包，把这份中世纪的味道带在身边。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`隐修院南侧葡萄园远眺`}</h4>
                  <p className="text-sm text-gray-700">{`清晨日出后一小时或傍晚日落前一小时，从镇外南面的葡萄园小径回望，可以拍到隐修院雄踞于金色小镇之上的经典全景，晨雾或晚霞是绝佳搭档。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`中殿光影长廊`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗日子的上午10点到正午之间，站在中殿靠近祭坛的位置向南侧高窗方向拍摄，能捕捉到阳光斜射入殿形成一道道清晰光柱的“神圣走廊”效果。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`柱头故事特写`}</h4>
                  <p className="text-sm text-gray-700">{`利用相机的大光圈镜头或手机的人像模式，贴近北侧廊的某一精美柱头（如“神秘磨坊”或“音乐家柱头”），在柔和的室内漫射光下，能拍出充满故事感和质感的雕塑细节。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`西立面仰角`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光转到西面时，站在前庭草坪的侧方，以低角度仰拍西立面大门和上层的拱窗，能突出罗马式建筑的厚重感与几何美感，避开杂乱的人群。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`塔楼顶层俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`登上塔楼后，将镜头穿过石制窗棂，拍摄下方小镇层层叠叠的石板屋顶和远处绵延的莫尔旺地区自然公园，构成一幅充满层次感的风景画。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`教堂内部允许拍照，但严禁使用闪光灯和三脚架，以保持礼拜场所的肃静。拍摄当地人或在私人店铺内，请务必先微笑询问。航拍无人机在历史纪念物上空飞行有严格限制，通常被禁止，起飞前务必查清法规。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`特色石屋民宿`}</h4>
                  <p className="text-sm text-blue-800">{`选择一栋位于小镇中心、由12世纪古老石屋改造的民宿，晚上听着万籁俱寂，清晨在厚实的石墙内被教堂钟声温柔唤醒，体验真正的中世纪山居生活。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`隐修院视野酒店`}</h4>
                  <p className="text-sm text-green-800">{`预订一家拥有面朝隐修院露台或房间的精品酒店，在私密的空间里，就能独享这座建筑在晨曦与星空下的不同样貌，喝一杯当地的黑醋栗利口酒。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`宁静乡间旅馆`}</h4>
                  <p className="text-sm text-yellow-800">{`住在山脚下不远处被花园和田野环绕的安静旅馆，享受乡间的静谧，每天徒步几分钟上山，以朝圣者的节奏融入风景。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端历史宅邸`}</h4>
                  <p className="text-sm text-purple-800">{`下榻于由昔日贵族宅邸改造的奢华小型酒店，内部是古董家具和现代舒适的完美结合，在花园里享用米其林推荐的勃艮第美食，让历史成为享受的一部分。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`韦兹莱的住宿数量有限，尤其在夏季和重要节假日，务必提前数月预订。小镇入夜后极为安静，几乎没有夜生活，餐饮场所也关门较早，适合追求宁静与内省之旅的旅客。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开韦兹莱很久以后，我发现自己最常回忆起的，不是某一块具体的浮雕，也不是某一张照片，而是一种“感觉”。那种站在山顶，被千年的石头、不息的风和变幻的光所包围的感觉。它不像巴黎那样用繁华震撼你，也不像阿尔卑斯用险峻征服你。它用一种近乎谦卑的持久力，将信仰、艺术、历史和对光线的精妙理解，全部夯实在这座勃艮第的山丘上。它告诉你，伟大不必喧嚣，宁静本身就有撼动心灵的力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个快得让人喘不过气的时代，韦兹莱像一处心灵的减速带。它提醒我们，人类曾花费数代人的时间，只为雕琢一块石头上的一片树叶；曾徒步数月，只为完成一次内心的抵达。来到这里，你会不自觉地把手机调成静音，脚步放慢，声音放轻，开始用眼睛去“触摸”光线，用耳朵去“聆听”寂静。它不仅仅是一个“景点”，更是一个让你与一种更缓慢、更专注、更充满敬畏心的生活方式重新连接的空间。每一位真正的旅人，都需要这样一个地方，不是为了打卡，而是为了找回内心的节奏，并记得：有些光辉，穿越了十个世纪，依然在静静地等待，只为照亮你抬头的那一瞬间。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/vannes-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    瓦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">瓦讷老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vannes Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/dinan-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迪南老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dinan Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/saint-guilhem-le-desert-abbey-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣吉米扬隐修村</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Saint-Guilhem-le-Désert</p>
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
