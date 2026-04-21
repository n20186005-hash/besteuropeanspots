import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '米内尔沃 Minerve｜悬崖上的殉难之城与永恒光影 - 最佳欧洲景点',
  description: '第一眼看到米内尔沃，你会以为自己闯进了一幅中世纪手抄本的插图。它不像一座建在悬崖上的村庄，而更像一艘巨大的、石质的诺亚方舟，在时间的洪流中意外搁浅在了这两道深深的峡谷中间。一边是布里昂河，一边是塞斯河，它们用了千万年，在这片石灰岩高原上切出这道令人屏息的伤口，而米内尔沃，就奇迹般地架在这伤口的顶端。...',
}

export default function MinerveCatharCitadelPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/france' },
            { label: '埃罗省（奥德省附近）', href: '/destinations/france' },
            { label: '米内尔沃', href: '/attractions/minerve-cathar-citadel' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`米内尔沃・Minerve・法国・埃罗省（奥德省附近）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到米内尔沃，你会以为自己闯进了一幅中世纪手抄本的插图。它不像一座建在悬崖上的村庄，而更像一艘巨大的、石质的诺亚方舟，在时间的洪流中意外搁浅在了这两道深深的峡谷中间。一边是布里昂河，一边是塞斯河，它们用了千万年，在这片石灰岩高原上切出这道令人屏息的伤口，而米内尔沃，就奇迹般地架在这伤口的顶端。车子盘旋而下，靠近村庄时，你会感到空气变得清凉，带着一股河谷特有的、湿润的泥土和蕨类植物的气息，耳边开始响起持续的、空洞而宏大的风声——那是峡谷在呼吸。
当你步行穿过那座标志性的天然石桥下的阴影，正式踏入村庄时，时间瞬间慢了下来。脚下是被无数脚步磨得发亮的石板路，窄得只容两人侧身而过。墙是蜂蜜色的，被南法强烈的阳光晒得暖洋洋的，缝隙里探出顽强的野花和爬藤。你几乎听不到任何现代世界的噪音，只有自己的脚步声、远处隐约的流水声，和某扇木窗后传来的锅碗轻碰的脆响。这里住着不到一百人，生活从容得像村口那棵老橄榄树。你会看到老人在门廊下玩着滚球游戏，店主不紧不慢地整理着橱窗里的陶罐和本地蜂蜜。这个地方的核心魅力，就在于这种极致的反差：一面是令人腿软的绝壁深渊，是历史上血与火的残酷记忆；另一面，却是当下笼罩一切的、近乎神圣的宁静与日常的烟火气。
在村里漫无目的地走，每一个转角都可能是一个观景台。你会发现，这里的建筑几乎没有“正面”和“背面”之分，它们像是从岩石里长出来的器官，面朝着四面八方令人惊叹的风景。光线在这里是魔术师。正午，阳光直射，峡谷的岩壁白得晃眼，村庄的轮廓坚硬而清晰。到了傍晚，夕阳把一切都染成金红，长长的阴影填满沟壑，那时，整个米内尔沃会散发出一种温柔而悲悯的光芒。坐在悬崖边的咖啡馆，点一杯本地产的葡萄酒，看着燕子在深渊上空划出看不见的弧线，你会真切地感受到，历史从未远去，它只是沉静了下来，化作了风，化作了光，化作了脚下岩石的温度。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到米内尔沃，你会以为自己闯进了一幅中世纪手抄本的插图。它不像一座建在悬崖上的村庄，而更像一艘巨大的、石质的诺亚方舟，在时间的洪流中意外搁浅在了这两道深深的峡谷中间。一边是布里昂河，一边是塞斯河，它们用了千万年，在这片石灰岩高原上切出这道令人屏息的伤口，而米内尔沃，就奇迹般地架在这伤口的顶端。车子盘旋而下，靠近村庄时，你会感到空气变得清凉，带着一股河谷特有的、湿润的泥土和蕨类植物的气息，耳边开始响起持续的、空洞而宏大的风声——那是峡谷在呼吸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你步行穿过那座标志性的天然石桥下的阴影，正式踏入村庄时，时间瞬间慢了下来。脚下是被无数脚步磨得发亮的石板路，窄得只容两人侧身而过。墙是蜂蜜色的，被南法强烈的阳光晒得暖洋洋的，缝隙里探出顽强的野花和爬藤。你几乎听不到任何现代世界的噪音，只有自己的脚步声、远处隐约的流水声，和某扇木窗后传来的锅碗轻碰的脆响。这里住着不到一百人，生活从容得像村口那棵老橄榄树。你会看到老人在门廊下玩着滚球游戏，店主不紧不慢地整理着橱窗里的陶罐和本地蜂蜜。这个地方的核心魅力，就在于这种极致的反差：一面是令人腿软的绝壁深渊，是历史上血与火的残酷记忆；另一面，却是当下笼罩一切的、近乎神圣的宁静与日常的烟火气。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在村里漫无目的地走，每一个转角都可能是一个观景台。你会发现，这里的建筑几乎没有“正面”和“背面”之分，它们像是从岩石里长出来的器官，面朝着四面八方令人惊叹的风景。光线在这里是魔术师。正午，阳光直射，峡谷的岩壁白得晃眼，村庄的轮廓坚硬而清晰。到了傍晚，夕阳把一切都染成金红，长长的阴影填满沟壑，那时，整个米内尔沃会散发出一种温柔而悲悯的光芒。坐在悬崖边的咖啡馆，点一杯本地产的葡萄酒，看着燕子在深渊上空划出看不见的弧线，你会真切地感受到，历史从未远去，它只是沉静了下来，化作了风，化作了光，化作了脚下岩石的温度。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`米内尔沃`} />
                <InfoRow label="英文名称" value={`Minerve`} />
                <InfoRow label="正式名称" value={`Minerve`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`埃罗省（奥德省附近）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是法国西南部卡特里派（纯洁派）信徒在阿尔比十字军东征期间坚守的最后堡垒之一，也是他们殉难的历史见证地。`} />
                <InfoRow label="建筑特色" value={`整个村庄如同从石灰岩悬崖上生长出来，房屋、教堂与防御工事完全顺应险峻的自然地形而建，与峡谷和桥梁浑然天成。`} />
                <InfoRow label="建筑风格" value={`典型的南法中世纪山村风格，朴素、坚固，以当地石材建造，融合了防御性需求和与自然共存的智慧。`} />
                <InfoRow label="文化价值" value={`它象征着宗教少数派在暴力压迫下的悲剧，是理解中世纪法国南部异端历史与宽容精神的重要地标。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`村庄及自然区域全年全天开放。卡特里派博物馆及一些小展厅的开放时间较为灵活，通常为四月至十月，每日10:00-12:30，14:00-18:00；冬季仅周末开放或需预约。建议行前查看当地旅游局官网确认。`} />
              <InfoRow label="门票价格" value={`进入米内尔沃村庄本身免费。卡特里派博物馆门票约4欧元，学生及儿童有优惠。村内停车免费。`} />
              <InfoRow label="地址" value={`Place du Fort， 34210 Minerve， France`} />
              <InfoRow label="交通方式" value={`米内尔沃位置偏僻，公共交通极少。最便捷的方式是自驾。从最近的卡尔卡松机场或贝济耶机场出发，车程约1.5小时。从卡尔卡松火车站也可租车前往，车程约1小时。沿途是典型的南法丘陵地貌，葡萄园与荒野交替，风景本身就是旅程的一部分。若坚持使用公交，可从纳博讷或卡尔卡松乘坐极不频繁的地区巴士到达附近城镇，再换乘出租车（需提前预约），极为不便，强烈建议自驾。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解米内尔沃的沉重，我们必须回到13世纪初的朗格多克。那时的法国南部，与北方是截然不同的世界。这里文化繁荣，贵族独立，更重要的是，一种被称为“卡特里派”（又称“纯洁派”）的基督教异端学说在这里深深扎根。卡特里派信奉严格的二元论，认为物质世界是邪恶的，精神世界才是善的。他们生活简朴，谴责教会的腐败与财富，赢得了许多平民甚至贵族的追随。这对以罗马教皇为核心的教会权威构成了巨大挑战。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，在教皇英诺森三世的号召下，一场名为“阿尔比十字军”的讨伐运动开始了。这不是针对穆斯林的圣战，而是一场针对法国南部“异端”同胞的残酷内战。北方贵族骑士们被许诺赦免一切罪过并夺取南方的富庶土地，挥师南下。战争异常惨烈，城镇被焚，人口遭屠。许多卡特里派信徒和同情他们的平民，被迫逃往地形险要的“城堡”避难。米内尔沃，这座天生被两道深谷保护的岩石堡垒，成了最重要的避难所之一。1209年，这里聚集了数百名坚定的卡特里派“完人”（他们的精神领袖）和大量难民。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`率领十字军围攻米内尔沃的，是西多会修道院院长阿诺·阿马里克，一个以狂热和毫不妥协著称的人物。面对天险，强攻几乎不可能。他发现，村庄唯一的水源是峡谷底部的一口隐蔽水井，通过一条陡峭的秘密小径取水。十字军调来了当时可怕的攻城武器——投石机。传说，他们并没有直接轰击城墙，而是集中火力，日复一日地轰炸那条通往水井的脆弱小径和取水设施，最终切断了水源。围困持续了数周，盛夏的酷热加剧了缺水的绝望。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`谈判开始了。阿马里克给出了条件：放弃信仰，皈依天主教，便可活命。但卡特里派的“完人”们拒绝了。对他们而言，信仰的纯洁高于肉体的生存。最终，超过140名拒绝改宗的卡特里派信徒（具体数字有争议，但悲剧性是确定的）被逮捕。在村子下方的河滩空地上，巨大的柴堆被竖起。这些男人和女人，平静地走向火焰，殉道而死。米内尔沃沦陷了。这场火刑震惊了整个南部，也标志着卡特里派抵抗运动一个血腥转折点的到来。村庄后来被重建，归于法国王室管辖，但那个“殉难之地”的烙印，永远刻在了它的岩石之上。今天的宁静，是那段激烈对抗与牺牲历史最终的、沉痛的句点。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`理想的游览时间是春末到初秋的下午。建议午后三点左右抵达，这时峡谷的阴影开始拉长，光线最为迷人，也避开了正午的暴晒。整体游览节奏应极其缓慢，预留至少3-4小时，不是为了赶景点，而是为了感受。路线是一个先“外”后“内”，再回归“外”的循环：先从外部高处整体俯瞰，建立空间感；然后下到峡谷，从底部仰望，感受其压迫性的宏伟；接着深入村庄内部，触摸历史与生活；最后，在黄昏时分回到一个绝佳的观景位置，看光影变幻，为旅程收尾。这样安排能让你从地理、历史、人文多个维度，立体地理解米内尔沃。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双结实防滑的鞋，下往峡谷的小径是天然的岩石路面，有些地方潮湿且不平。
夏季请带足水并做好防晒，村庄内阴凉处虽多，但往返峡谷的徒步路段几乎没有遮蔽。
保持安静，尊重这里作为历史纪念地的肃穆氛围，尤其在有纪念碑的地方。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在村庄入口上方的主停车场，第一时间走到观景台，让那艘“石头巨船”搁浅在双峡谷之上的全景画面彻底震撼你。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着清晰标识的小径向下走向布里昂峡谷底部，感受温度骤降，聆听自己的脚步声在巨大岩壁间产生的回响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在那座巨大的天然石桥（Pont Natural）的拱门下抬头望，看村庄的房屋如同悬崖的延伸，巍然悬在头顶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从“黑暗之门”进入村庄内部，用手触摸那些因岁月和无数过客而变得光滑冰冷的石墙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在简朴的圣艾蒂安教堂前静立片刻，想象当年信徒们在此最后祈祷的心境，注意看门口那块纪念殉难者的朴素石碑。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过迷宫般的小巷走到村庄最北端的悬崖咖啡馆，点一杯饮料，什么也不做，只看燕子飞翔和光影在峡谷壁上移动。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在太阳即将落山前，散步到村庄南侧靠近老磨坊的观景点，看金色的余晖如何为这座悲情城堡披上温柔的衣裳。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`村庄东侧停车场观景台`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，用长焦镜头压缩空间，将村庄建筑、天然石桥和背后无尽的峡谷层叠收纳进一幅画面，构图力求平稳，突出其孤悬的险峻。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`天然石桥下方的河床位置`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光能照入峡谷底部时，站在河床上仰拍，以巨大的石灰岩桥洞为天然画框，框住山顶上的一小片房屋和蓝天，形成强烈的尺度对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣艾蒂安教堂门口的小广场`}</h4>
                  <p className="text-sm text-gray-700">{`下午侧光时分，利用巷道的狭窄引导视线，将教堂石墙的质感、门上的铁艺、以及远处露出一角的峡谷共同构图，讲述人文与自然交织的故事。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`村庄北端悬崖咖啡馆外的矮墙边`}</h4>
                  <p className="text-sm text-gray-700">{`黄昏黄金时刻，以一杯本地红酒或咖啡杯做前景，对焦在远处被暖光点亮的峡谷岩壁和蜿蜒小径上，营造故事感和氛围。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`峡谷南侧小径回望点`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，徒步到峡谷对岸的小径上，回望整个米内尔沃全景，此时光线柔和，层次丰富，能拍出最具史诗感的风景照片。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重居民隐私，避免将镜头直接对准私人住宅的窗户或院内。`}</li>
                <li>• {`峡谷内光线对比强烈，建议使用渐变灰滤镜或通过后期HDR技术来处理高光与阴影的细节。`}</li>
                <li>• {`飞航无人机前务必确认当地规定，强风天气在峡谷中飞无人机极其危险。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`峡谷边缘的隐秘石屋`}</h4>
                  <p className="text-sm text-blue-800">{`村里仅有的几家民宿之一，由古老石屋改造，推开卧室窗户就是万丈深渊，夜晚能听到溪流白噪音，体验真正的“枕着历史与峡谷入睡”。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`村庄中心的老宅客栈`}</h4>
                  <p className="text-sm text-green-800">{`房东世代居住于此，房间保留了原始的梁木和壁炉，早餐是自家果园的果酱和新鲜烘焙的羊角包，能听到最地道的本地故事。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`附近葡萄园区的宁静农庄`}</h4>
                  <p className="text-sm text-yellow-800">{`开车十分钟外，被连绵的葡萄园包围，房间宽敞现代，带私人泳池，适合想要安静度假同时方便探索周边酒庄的旅行者。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`树屋或生态露营体验`}</h4>
                  <p className="text-sm text-purple-800">{`在离村不远的森林里，提供独特的树屋或豪华帐篷住宿，完全融入自然，清晨在鸟鸣中醒来，是避开常规酒店的有趣选择。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`米内尔沃村内住宿极其有限，通常只有2-3家，必须提前数月预订，尤其是夏季和周末。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`住在村里意味着晚上和清晨可以独享几乎没有游客的空灵村落，这种体验远超白日匆匆一瞥。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果选择周边村庄住宿，务必确认有车，夜间乡村道路漆黑且少有路灯。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开米内尔沃很久以后，盘旋在脑海里的可能不是某个具体的画面，而是一种混合的感觉：是峡谷之风掠过皮肤的凉意，是午后石头散发的温热，是寂静中历史回声的沉重，也是一种奇特的、劫后余生般的平静。这个地方教会你，最美的风景，有时与最深的苦难是同源的。它没有巴黎的辉煌，没有圣米歇尔山的奇幻，它的力量在于一种毫不妥协的真实——自然的真实和历史的真实。它让你站在那片悬崖上，不得不去思考信仰、生命、选择与牺牲这些宏大的命题。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个快节奏的、常常流于表面的世界里，米内尔沃是一种必要的“减速带”。它强迫你停下脚步，走过那段下到峡谷的崎岖小路，用身体的疲惫去交换心灵的震撼。它不讨好游客，没有喧闹的纪念品商店，它只是在那里，沉默地展示着自己的伤痕与坚韧。每一位热爱深度游的旅人都应该来这里，不仅仅是为了拍下一张惊艳朋友圈的照片，更是为了体验一种稀有的、沉静的力量。在这里，你会明白，有些地方的存在，不是为了被征服或消费，而是为了被感受、被铭记，并在你心里种下一颗关于理解与宽容的种子。这趟旅程，最终会成为一次对内心的朝圣。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/aigues-mortes-medieval-walled-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    艾
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">艾格莫尔特十字军古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Aigues-Mortes</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/les-baux-de-provence" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莱
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莱博德普罗旺斯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Les Baux-de-Provence</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/perouges" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩鲁日古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pérouges</p>
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
