import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿尔比主教座堂 Albi Cathedral｜南法“红砖堡垒”与天堂般的内部，史诗级反差 - 最佳欧洲景点',
  description: '说实话，第一眼看到阿尔比主教座堂，你绝对不会想到“教堂”这个词。它更像一座从《权力的游戏》里搬出来的、由巨人用赤红色陶土垒成的超级城堡，沉默、冷峻、带着一股不容置疑的压迫感，雄踞在加龙河畔的山丘上。那天阳光很好，照在那些历经七百年风雨、颜色已沉淀成赭石与暗红色的砖墙上，反射出一种干燥而温暖的质感。没...',
}

export default function AlbiCathedralPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '阿尔比主教座堂', href: '/attractions/albi-cathedral' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿尔比主教座堂・Albi Cathedral・法国・阿尔比`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，第一眼看到阿尔比主教座堂，你绝对不会想到“教堂”这个词。它更像一座从《权力的游戏》里搬出来的、由巨人用赤红色陶土垒成的超级城堡，沉默、冷峻、带着一股不容置疑的压迫感，雄踞在加龙河畔的山丘上。那天阳光很好，照在那些历经七百年风雨、颜色已沉淀成赭石与暗红色的砖墙上，反射出一种干燥而温暖的质感。没有繁复的雕刻，没有轻盈的飞扶壁，只有高达78米的钟楼像一柄巨剑直插蓝天，墙壁厚得能跑马，窗户小得像碉堡的射击孔。空气里有南方特有的，被太阳烤过的泥土和迷迭香的混合气味，混着不远处咖啡馆飘来的浓缩咖啡香。当地人三三两两地坐在教堂脚下广场的树荫下聊天，孩子们绕着喷泉奔跑，这座庞然大物就这么安静地俯视着它守护（或者说监视）了七个世纪的城市，早已成为日常生活背景里最坚实的一部分。
但真正的魔法，发生在你推开那扇厚重的木门之后。那一刻，就像是有人在你耳边轻轻说了一句“芝麻开门”。所有的沉重、所有的防御姿态瞬间崩塌，取而代之的是一个金光璀璨、碧蓝如洗的天堂。你的眼睛需要好几秒才能适应这突如其来的奢华。目光所及，从地板到拱顶，每一寸空间都被色彩填满。最震撼的是那道将中殿与唱诗班席分隔开的“天国屏风”，它完全不是冰冷的石雕，而是一座高达二十米、通体由石灰岩镂空雕刻的蕾丝，繁复精细到令人窒息的天使、先知和圣徒在其中层层叠叠，被时间镀上了温暖的象牙色。空气中弥漫着旧木头、蜂蜡和一丝若有若无的熏香气息，冰冷而静谧，只有游客压抑的惊叹声在高达30米的拱顶下激起轻微的回响。
然后你会抬头，看到拱顶上那幅堪称奇迹的壁画——《最后的审判》。这是世界上面积最大的文艺复兴壁画之一，覆盖了整个拱顶。但与米开朗基罗在西斯廷教堂那充满肌肉与力量感的审判不同，这里的审判透着一种奇异的、属于南法的明亮与秩序感。基督坐在中央，面容慈悲而非震怒，天使们衣着华丽，魔鬼的造型甚至有点滑稽。最关键的是，它的蓝色，是一种无比纯净、无比深邃的群青蓝，像把地中海的天空和最珍贵的宝石一起碾碎涂了上去，历经五百年依然鲜艳夺目。坐在这片蓝色苍穹下，你会忘记时间。偶尔，那架建造于18世纪的庞大管风琴会发出试音的轰鸣，低沉的声音像海浪一样滚过整个殿堂，那是你在外部那个红砖堡垒里完全无法想象的、属于天堂的声响。
这座教堂最打动人心的，正是这种极致的反差。它用最坚硬、最不容侵犯的外壳，包裹着一个最柔软、最灿烂辉煌的内核。它仿佛在无声地讲述一个故事：关于权力的恐惧与威严，也关于信仰最终极的渴望——对美、对光、对救赎的渴望。它不是邀请你进来，它是在你历经了外部的视觉冲击后，给你的一份惊人的、秘密的礼物。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`说实话，第一眼看到阿尔比主教座堂，你绝对不会想到“教堂”这个词。它更像一座从《权力的游戏》里搬出来的、由巨人用赤红色陶土垒成的超级城堡，沉默、冷峻、带着一股不容置疑的压迫感，雄踞在加龙河畔的山丘上。那天阳光很好，照在那些历经七百年风雨、颜色已沉淀成赭石与暗红色的砖墙上，反射出一种干燥而温暖的质感。没有繁复的雕刻，没有轻盈的飞扶壁，只有高达78米的钟楼像一柄巨剑直插蓝天，墙壁厚得能跑马，窗户小得像碉堡的射击孔。空气里有南方特有的，被太阳烤过的泥土和迷迭香的混合气味，混着不远处咖啡馆飘来的浓缩咖啡香。当地人三三两两地坐在教堂脚下广场的树荫下聊天，孩子们绕着喷泉奔跑，这座庞然大物就这么安静地俯视着它守护（或者说监视）了七个世纪的城市，早已成为日常生活背景里最坚实的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但真正的魔法，发生在你推开那扇厚重的木门之后。那一刻，就像是有人在你耳边轻轻说了一句“芝麻开门”。所有的沉重、所有的防御姿态瞬间崩塌，取而代之的是一个金光璀璨、碧蓝如洗的天堂。你的眼睛需要好几秒才能适应这突如其来的奢华。目光所及，从地板到拱顶，每一寸空间都被色彩填满。最震撼的是那道将中殿与唱诗班席分隔开的“天国屏风”，它完全不是冰冷的石雕，而是一座高达二十米、通体由石灰岩镂空雕刻的蕾丝，繁复精细到令人窒息的天使、先知和圣徒在其中层层叠叠，被时间镀上了温暖的象牙色。空气中弥漫着旧木头、蜂蜡和一丝若有若无的熏香气息，冰冷而静谧，只有游客压抑的惊叹声在高达30米的拱顶下激起轻微的回响。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然后你会抬头，看到拱顶上那幅堪称奇迹的壁画——《最后的审判》。这是世界上面积最大的文艺复兴壁画之一，覆盖了整个拱顶。但与米开朗基罗在西斯廷教堂那充满肌肉与力量感的审判不同，这里的审判透着一种奇异的、属于南法的明亮与秩序感。基督坐在中央，面容慈悲而非震怒，天使们衣着华丽，魔鬼的造型甚至有点滑稽。最关键的是，它的蓝色，是一种无比纯净、无比深邃的群青蓝，像把地中海的天空和最珍贵的宝石一起碾碎涂了上去，历经五百年依然鲜艳夺目。坐在这片蓝色苍穹下，你会忘记时间。偶尔，那架建造于18世纪的庞大管风琴会发出试音的轰鸣，低沉的声音像海浪一样滚过整个殿堂，那是你在外部那个红砖堡垒里完全无法想象的、属于天堂的声响。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座教堂最打动人心的，正是这种极致的反差。它用最坚硬、最不容侵犯的外壳，包裹着一个最柔软、最灿烂辉煌的内核。它仿佛在无声地讲述一个故事：关于权力的恐惧与威严，也关于信仰最终极的渴望——对美、对光、对救赎的渴望。它不是邀请你进来，它是在你历经了外部的视觉冲击后，给你的一份惊人的、秘密的礼物。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿尔比主教座堂`} />
                <InfoRow label="英文名称" value={`Albi Cathedral`} />
                <InfoRow label="正式名称" value={`Cathedral Basilica of Saint Cecilia of Albi`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`阿尔比`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`法国南部哥特式建筑的巅峰之作，也是阿尔比十字军运动后，天主教会在清洁派（卡特里派）异端中心地带竖立的最强大权力象征。`} />
                <InfoRow label="建筑特色" value={`外观是一座没有传统飞扶壁的、纯粹由红砖砌成的巨大垂直堡垒，内部却拥有全世界最大、最完整的意大利文艺复兴风格壁画群。`} />
                <InfoRow label="建筑风格" value={`南方哥特式（或称为朗格多克哥特式），以其防御性的堡垒外观和大量使用当地红砖为特征。`} />
                <InfoRow label="文化价值" value={`一座集军事威慑、神学宣示与极致艺术美感于一体的建筑丰碑，见证了中世纪南法宗教冲突与和解的复杂历史。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`夏季（四月至九月）开放时间为每天上午9点至晚上6点半，最晚入场时间为关闭前45分钟。冬季（十月至三月）开放时间为上午9点至中午12点半，下午2点至晚上5点半。注意，中午会有午休关闭时间。每周日上午主要用于宗教活动，游客参观会受限，下午才完全开放。重要宗教节日如圣诞节和复活节的开放时间会有临时调整，建议出发前在官方网站再次确认。`} />
              <InfoRow label="门票价格" value={`进入主教座堂本身免费。但参观其核心瑰宝——圣塞西莉亚唱诗班席及壁画区域，需购买联票。联票价格为成人8欧元，优惠票（学生、65岁以上老人）6欧元，18岁以下青少年免费。联票通常包含相邻的贝尔比宫博物馆（图卢兹-劳特累克美术馆）。语音导览租赁费用为3欧元。教堂偶尔会举行特殊音乐会，届时门票价格会单独制定，约15-25欧元不等。`} />
              <InfoRow label="地址" value={`Place Sainte-Cécile, 81000 Albi, France`} />
              <InfoRow label="交通方式" value={`从图卢兹-布拉尼亚克机场出发，最便捷的方式是乘坐机场大巴或出租车前往图卢兹马塔比奥火车站（Gare Matabiau），耗时约30分钟。从图卢兹火车站乘坐前往阿尔比的区域快车（TER），车程约1小时，班次频繁，几乎每小时都有1-2班。抵达阿尔比火车站后，主教座堂是城市的绝对地标，步行穿过横跨加龙河的老桥（Pont Vieux），沿着陡峭但充满风情的石板路向上，大约15-20分钟即可抵达教堂广场。若自驾，可将车停在老城外围的公共停车场（如“Parking du Vigan”），然后步行进入老城中心，老城内部道路狭窄且多为步行区。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解阿尔比主教座堂为什么长成一副“生人勿近”的堡垒模样，我们必须把时钟拨回到13世纪初的南法。那时的朗格多克地区，可不是今天悠闲的度假胜地，而是弥漫着宗教硝烟的战场。一个被称为“清洁派”或“卡特里派”的基督教异端在这里蓬勃发展，他们崇尚精神纯洁，反对天主教会的奢靡和等级制度，影响力巨大，甚至连阿尔比这座城都成了他们的重要中心（“阿尔比十字军”由此得名）。罗马教廷震怒了，发动了长达数十年的血腥十字军征讨。当战火最终在1244年以清洁派最后的堡垒蒙特塞古城被攻陷而告终时，胜利的天主教会面临一个严峻问题：如何在这片“被污染”的土地上，重新树立起不可动摇的权威？`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`答案，就是建造一座前所未有的、具有绝对威慑力的教堂。1282年，在清理完“异端”的废墟上，阿尔比主教座堂奠基了。主导其设计的贝尔纳·德·卡斯泰尔纳主教，心思非常明确：这不能是一座普通的教堂，它必须是一座永不陷落的“信仰堡垒”。于是，我们看到了那些军事化的设计：没有门廊，入口直接开在侧面，避免被正面冲击；墙壁厚度达6米，窗户既高且小；没有脆弱的飞扶壁，全部力量由厚重的墙体自身承受；甚至屋顶都设计成了可供士兵巡逻的平台。它用的材料，就是当地最丰富、最经济的红砖。这既出于实用，也充满象征——用这片土地本身的泥土，烧制成囚禁“异端”灵魂、彰显正统胜利的牢笼。这座建筑从开始就在大声宣告：看，这就是力量，这就是不容置疑的真理。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`建造过程跨越了两个世纪，这是一段充满耐心和野心的漫长岁月。到了15世纪，外部堡垒终于完工，但内部还是一片粗粝的砖石。此时，宗教战争的创伤已逐渐平复，南法迎来了相对繁荣的文艺复兴时期。1480年，一位来自意大利的画家团队，在路易一世·达姆波瓦主教的委托下，开始为这座冰冷的堡垒注入灵魂。他们带来的，是亚平宁半岛最前沿的艺术风潮。于是，在粗糙的红砖墙上，生长出了细腻如天鹅绒的壁画；在原本可能放置冰冷雕塑的地方，竖立起了那座美得不真实的蕾丝屏风。这种内部的“意大利化”装饰，与外部纯粹南法风格的堡垒形式，形成了戏剧性的融合。这或许是一种精心的政治策略：用全欧洲公认的最高雅、最“正统”的艺术形式，来装饰这座胜利的纪念碑，从而完成从“武力征服”到“文化同化”的升华。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间来到18世纪，教堂又迎来了它另一个标志性声音——那架宏伟的管风琴。由当时最杰出的工匠打造，它拥有近4000根音管，其音色洪亮而温暖，完全是为了填满这个巨大的空间而生的。当它在宗教仪式或音乐会上奏响时，声浪抚过每一寸壁画，仿佛让画中的天使都活了过来。法国大革命的风暴也曾波及这里，教堂一度面临被破坏或改作他用的风险。但或许是因为它过于庞大实用（曾作为军火库），也或许是因为其艺术价值已深入人心，它奇迹般地完好保存了下来，只遭受了微小的损失。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天，当我们漫步其中，指尖划过那些冰凉的砖石，仰望那片永恒的蓝色苍穹时，我们触摸的是一部立体的史书。它记录了恐惧与镇压，也记录了艺术的救赎与超越；它是剑与十字架的结合，更是泥土与天堂的对话。阿尔比主教座堂不再仅仅是一座宗教建筑，它是朗格多克灵魂的容器，沉默地封装了一段关于信仰、权力、血腥与美的，极其复杂而动人的往事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要彻底感受阿尔比主教座堂的反差魅力，建议安排至少3-4小时的深度游览。最佳抵达时间是工作日的上午9点刚开放时，或下午2点午休结束后，此时旅游团尚未涌入，光线也正好。游览节奏应该是“由外至内，由下至上”，先花足够时间在外部感受其堡垒般的压迫感，再进入内部接受华丽内饰的洗礼，最后用俯瞰全景作为高潮收尾。先从教堂南侧和东侧漫步，欣赏其完整的堡垒轮廓，然后从西侧门进入。内部参观应至少预留1.5小时，尤其在唱诗班席和壁画前要静心驻足。最后，体力允许的话，一定要登上钟楼，这是理解教堂与城市关系的点睛之笔。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周日早晨通常有大型弥撒，虽然能体验管风琴和唱诗班的“完全体”魅力，但游客活动受限，若纯粹为参观，最好避开这个时段。教堂内部地面光滑且有些区域光线较暗，建议穿着舒适防滑的鞋子。内部禁止使用闪光灯拍照，手机也请调至静音，维护这份神圣的宁静是对历史和艺术的基本尊重。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从老桥（Pont Vieux）上走来，先别急着进门，绕到教堂南面的花园，从那里仰视整座砖红色堡垒与高耸钟楼形成的震撼全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`用手触摸主入口（西侧门）旁那些被岁月打磨得光滑而温润的厚重红砖，感受这座建筑最原始的肌理与温度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开侧门进入中殿的瞬间，停在原地，让眼睛适应光线，让那股由极简到极繁的视觉冲击力完全击中你。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`慢慢踱步至“天国屏风”前，花上十分钟，仔细寻找那些雕刻在石灰岩蕾丝中的数百个圣经人物与天使的生动表情。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`坐在唱诗班席的长椅上，彻底躺下或仰头，让视野被拱顶那幅巨大的《最后的审判》壁画和它无与伦比的蓝色完全占据。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找北侧耳堂那架巨大的18世纪管风琴，想象它在弥撒或音乐会时发出如海浪般席卷整个殿堂的轰鸣声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着狭窄的螺旋石梯（需额外付费且有时段限制）攀爬钟楼，在途中从那些狭小的“碉堡窗”窥探外部世界，最后在塔顶收获360度的阿尔比红砖老城与加龙河蜿蜒的画卷。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂出来，穿过广场，立刻钻进旁边贝尔比宫的回廊花园，在树荫和喷泉边坐下，让刚才过于饱满的感官慢慢沉淀下来。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`教堂南侧花园的东南角`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏时分，利用长焦镜头压缩空间，将教堂巨大的砖墙、钟楼与花园里的绿树鲜花一同纳入画面，突出其堡垒与生机的对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`中殿后方正中央`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点后，阳光会从西侧玫瑰窗斜射进来，站在这个位置可以拍到光线如圣光般穿透中殿，照亮空气中微尘的经典“天堂之梯”构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`唱诗班席内仰拍拱顶壁画`}</h4>
                  <p className="text-sm text-gray-700">{`使用超广角镜头，将金色的“天国屏风”顶端作为前景框架，焦点对准后方拱顶上湛蓝的《最后的审判》壁画中心，形成金蓝交织的强烈视觉冲击。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`钟楼攀登中途的狭窗`}</h4>
                  <p className="text-sm text-gray-700">{`下午光线西斜时，透过那些厚重的、如同枪眼的砖石窗框，拍摄窗外阿尔比老城一片温暖的红砖屋顶海洋，营造“堡垒内窥视世界”的独特视角。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`加龙河对岸的观景台`}</h4>
                  <p className="text-sm text-gray-700">{`日落前后，步行过老桥到对岸的“Pont Vieux”观景点，用河流作为引导线，拍摄教堂堡垒全景在水中的倒影，这是最能体现其与城市地理关系的全景机位。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`内部壁画和雕塑对光线极其敏感，务必关闭闪光灯。使用三脚架在内部通常被允许，但需非常小心且不能妨碍他人，在宗教仪式期间绝对禁止。拍摄唱诗班席的“天国屏风”时，尝试不同白平衡设置，以准确捕捉石灰岩的暖黄色与壁画蓝色的冷暖对比。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在主教座堂广场旁一栋15世纪的石头宅邸改造的精品酒店，晚上人群散去后，你拥有几乎私人的广场夜景，听着钟楼的报时声入眠。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`艺术爱好者之选`}</h4>
                  <p className="text-sm text-green-800">{`选择位于贝尔比宫（图卢兹-劳特累克美术馆）附近的设计酒店，房间装饰向劳特累克的画作致敬，开窗即是教堂侧影，将艺术气息从白天延续到夜晚。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`河畔宁静之选`}</h4>
                  <p className="text-sm text-yellow-800">{`入住加龙河对岸一栋能看到完美教堂倒影的19世纪豪宅改建的民宿，每天清晨被河面的薄雾和教堂的轮廓唤醒，享受闹中取静的惬意。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`庄园逃离之选`}</h4>
                  <p className="text-sm text-purple-800">{`驱车15分钟前往郊外一座由古老葡萄酒庄园改造的乡间旅馆，在葡萄园的环绕中远眺山丘上的教堂剪影，品尝本地餐酒，体验南法田园的诗意。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`阿尔比老城中心区域非常安全，夜晚漫步极具风情。夏季和节假日是旺季，酒店价格飙升且一房难求，务必提前数月预订。如果选择自驾，预订住宿时一定要确认是否提供停车场，老城内停车位是稀缺资源。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开阿尔比很多天后，那座红砖教堂的形象依然会不时浮现在眼前。它给我最深的触动，并非单一的美或震撼，而是一种复杂的、充满张力的启示。在这个我们习惯于非黑即白、追求简洁标签的时代，阿尔比主教座堂堂堂正正地矗立在那里，告诉你：事物，尤其是深厚的历史，其本质往往是矛盾的共同体。它可以同时是防御的堡垒与开放的天堂，是镇压的武器与艺术的圣殿，是权力的冰冷宣言与信仰的温暖拥抱。这种矛盾并不消解它的伟大，反而构成了它真实而磅礴的生命力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`对于我们这些现代旅人而言，拜访这里更像是一次心灵的校准。它提醒我们，真正的深度不在于打卡了多少景点，而在于你是否愿意去理解一片土地上曾经有过的冲突、痛苦、创造与和解。当你坐在那片举世无双的蓝色穹顶下，光影在古老的砖石上缓慢移动，你会感到一种罕见的宁静。那是一种穿越了数百年血腥与辉煌后沉淀下来的宁静。它告诉你，美可以在最意想不到的坚硬外壳中绽放，文明的过程总是交织着光明与阴影。所以，如果你厌倦了浮光掠影，渴望一次能触动思考、能感受到历史重量的旅行，请一定来阿尔比。这座南法的红砖巨人，不仅会占据你的相机内存，更会在你心里，刻下一道关于复杂与崇高的，难以磨灭的印记。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kaysersberg-alsace" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    凯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">凯斯贝格</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kaysersberg</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/orange-roman-theatre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥朗日凯旋门与古罗马剧场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Orange Roman Theatre</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/naumburg-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    瑙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">瑙姆堡大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Naumburg Cathedral</p>
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
