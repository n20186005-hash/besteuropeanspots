import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '施莱斯海姆宫 Schleissheim Palace｜慕尼黑城外的巴洛克艺术孤岛，一场被遗忘的王朝幻梦 - 最佳欧洲景点',
  description: '说实话，当你从S-Bahn车站走出来，穿过一片平平无奇的德国郊区居民区时，很难想象前方藏着什么。直到那些修剪得如同绿色墙壁的树篱在视野尽头出现，一条笔直的沙石路引着你向前走，空气仿佛都安静了几度。然后，毫无预警地，一片巨大的、闪烁着粼粼波光的水池横亘在面前，而在水的那一端，一座绵延开来的、杏黄色与白...',
}

export default function SchleissheimPalacePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '施莱斯海姆宫', href: '/attractions/schleissheim-palace' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`施莱斯海姆宫・Schleissheim Palace・德国・慕尼黑（郊区）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，当你从S-Bahn车站走出来，穿过一片平平无奇的德国郊区居民区时，很难想象前方藏着什么。直到那些修剪得如同绿色墙壁的树篱在视野尽头出现，一条笔直的沙石路引着你向前走，空气仿佛都安静了几度。然后，毫无预警地，一片巨大的、闪烁着粼粼波光的水池横亘在面前，而在水的那一端，一座绵延开来的、杏黄色与白色相间的庞然宫殿建筑群，像海市蜃楼般浮现。那一刻的震撼，比在慕尼黑市中心见到拥挤的皇宫要强烈十倍。这里太空旷，太安静了，只有喷泉的水声、风吹过树梢的沙沙声，和你自己踩在砂砾路上的脚步声。
这座宫殿不是用来“塞”在城市里的，它是被“放置”在这片平坦土地上的一个独立宇宙。走近新宫，那种迫人的尺度感才真正袭来。巨大的立面仿佛没有尽头，数不清的窗户像无数只眼睛沉默地注视着来客。空气里有刚割过的青草味，湿润的泥土气息，还有从古老石头上散发出的、淡淡的凉意。你会看到零星几个当地人在花园里慢跑，或推着婴儿车散步，这里更像是他们的超级大公园，而非一个游客如织的景点。这种反差感很有趣——一个诞生于绝对权力意志的场所，如今成了市民午后休闲的背景板。
而它最打动人心的，正是一种“权力的寂静”。这里没有维也纳美泉宫那种精致的繁华感，也没有凡尔赛宫人声鼎沸的喧嚣。施莱斯海姆的宏伟是内敛的，甚至带着一丝孤寂。它庞大规划中未完成的部分（原本计划有四翼，只建成了两翼），更像一个凝固了的梦想。当你站在中轴线上，目光穿过宫殿大门，越过喷泉和水池，一直延伸到花园尽头那个小小的凉亭，再投向无垠的天际线时，你会感受到一种近乎哲学性的空间体验。它关乎控制、秩序、野心，也关乎时间如何将一切雄心冲刷成平静的风景。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`说实话，当你从S-Bahn车站走出来，穿过一片平平无奇的德国郊区居民区时，很难想象前方藏着什么。直到那些修剪得如同绿色墙壁的树篱在视野尽头出现，一条笔直的沙石路引着你向前走，空气仿佛都安静了几度。然后，毫无预警地，一片巨大的、闪烁着粼粼波光的水池横亘在面前，而在水的那一端，一座绵延开来的、杏黄色与白色相间的庞然宫殿建筑群，像海市蜃楼般浮现。那一刻的震撼，比在慕尼黑市中心见到拥挤的皇宫要强烈十倍。这里太空旷，太安静了，只有喷泉的水声、风吹过树梢的沙沙声，和你自己踩在砂砾路上的脚步声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座宫殿不是用来“塞”在城市里的，它是被“放置”在这片平坦土地上的一个独立宇宙。走近新宫，那种迫人的尺度感才真正袭来。巨大的立面仿佛没有尽头，数不清的窗户像无数只眼睛沉默地注视着来客。空气里有刚割过的青草味，湿润的泥土气息，还有从古老石头上散发出的、淡淡的凉意。你会看到零星几个当地人在花园里慢跑，或推着婴儿车散步，这里更像是他们的超级大公园，而非一个游客如织的景点。这种反差感很有趣——一个诞生于绝对权力意志的场所，如今成了市民午后休闲的背景板。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而它最打动人心的，正是一种“权力的寂静”。这里没有维也纳美泉宫那种精致的繁华感，也没有凡尔赛宫人声鼎沸的喧嚣。施莱斯海姆的宏伟是内敛的，甚至带着一丝孤寂。它庞大规划中未完成的部分（原本计划有四翼，只建成了两翼），更像一个凝固了的梦想。当你站在中轴线上，目光穿过宫殿大门，越过喷泉和水池，一直延伸到花园尽头那个小小的凉亭，再投向无垠的天际线时，你会感受到一种近乎哲学性的空间体验。它关乎控制、秩序、野心，也关乎时间如何将一切雄心冲刷成平静的风景。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`施莱斯海姆宫`} />
                <InfoRow label="英文名称" value={`Schleissheim Palace`} />
                <InfoRow label="正式名称" value={`Schleissheim Palace`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`慕尼黑（郊区）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`巴伐利亚选帝侯马克斯·埃马努埃尔政治野心与艺术抱负的巅峰体现，是阿尔卑斯山以北最宏大、最完整的巴洛克式宫殿园林综合建筑群之一。`} />
                <InfoRow label="建筑特色" value={`以长达数公里的笔直中轴线统领全局，将宏伟的宫殿建筑、几何形的法式花园、广阔的运河与水池、以及远处的乡野景色融为一体，形成极度规整而富有戏剧性的空间序列。`} />
                <InfoRow label="建筑风格" value={`以意大利和法国为蓝本的盛大巴洛克风格，兼具后期洛可可的内部装饰元素。`} />
                <InfoRow label="文化价值" value={`一座“未完成的辉煌”，凝固了维特尔斯巴赫王朝在权力鼎盛时期试图打造“巴伐利亚凡尔赛”的雄心，其画廊收藏是了解德国巴洛克绘画与宫廷文化的关键窗口。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`新宫与画廊：四月至九月 周二至周日 9:00-18:00；十月至三月 周二至周日 10:00-16:00。宫殿花园全年日出至日落开放。老宫与路斯特海姆宫开放时间同新宫，但内部开放区域可能随季节调整。周一闭馆（法定节假日除外），具体开放日建议行前在巴伐利亚宫殿管理局官网二次确认。`} />
              <InfoRow label="门票价格" value={`新宫（含画廊）夏季票价成人8欧元，冬季6欧元；18岁以下免费。老宫与路斯特海姆宫联票成人6欧元。花园免费进入。提供涵盖新宫、老宫、路斯特海姆宫的“施莱斯海姆全票”，夏季14欧元。持慕尼黑城市旅游卡、巴伐利亚宫殿年票可享受折扣或免费入场。学生、残障人士等有相应优惠。`} />
              <InfoRow label="地址" value={`Max-Emanuel-Platz 1, 85764 Oberschleißheim, Germany`} />
              <InfoRow label="交通方式" value={`从慕尼黑市中心出发最方便。在慕尼黑中央火车站（Hauptbahnhof）乘坐S-Bahn的S1线（开往弗赖辛/机场方向），在“Oberschleißheim”站下车，车程约25分钟。出站后，跟随清晰的棕色旅游指示牌，步行穿过宁静的居民区约15-20分钟即可抵达宫殿花园入口。亦可从火车站搭乘巴士292路至“Schleissheim Palace”站。班次频率高（S-Bahn约10-20分钟一班），建议购买慕尼黑日票或区域票，涵盖所有交通。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事得从一位“业余”国王的乡间梦想说起。17世纪末，巴伐利亚的统治者马克西米利安二世伊曼纽尔，一位在战场上颇有建树，在艺术上更是野心勃勃的选帝侯，看中了慕尼黑北部这片平坦、开阔、适合狩猎的乡村土地。起初，这里只有一座简朴的老宫殿，是他父亲留下的避暑狩猎行宫。但对马克斯·埃马努埃尔来说，这远远不够。他曾作为将军在对抗土耳其的战争中扬名，更在游历欧洲宫廷时，深深痴迷于路易十四的凡尔赛宫所展现的绝对王权与美学力量。他心中萌生了一个疯狂的构想：要在这里，建造一座足以匹敌凡尔赛的“巴伐利亚的太阳王宫殿”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，在18世纪初，浩大的工程开始了。他召集了当时最顶尖的建筑师，比如恩里科·祖卡利和约瑟夫·埃夫纳，以法国最时髦的园林艺术为蓝本，勾勒出一幅令人瞠目的蓝图：一座无比巨大的新宫殿作为中心，四条翼楼向外延伸，前面是比凡尔赛宫大运河更壮观的水系工程，后方是严格几何形态的法式花园。这不仅仅是一座宫殿，这是一个试图用尺规和意志重新塑造自然的宣言。工程如火如荼，巨大的地基被打下，宏伟的楼梯厅初具雏形，花园的树木被按照严密的数学公式栽种。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的浪潮很快打湿了这张宏伟的图纸。西班牙王位继承战争爆发，马克斯·埃马努埃尔选错了边，站到了法国一方。随着盟军的失利，他被流放了整整十年。工程戛然而止，脚手架在风雨中锈蚀，梦想被搁浅。当他终于在1715年重返巴伐利亚时，财政已濒临枯竭，帝国的政治格局也已改变。那个睥睨天下的“巴伐利亚凡尔赛”计划，不得不大幅缩水。最终，我们如今看到的这座壮丽的“新宫”，其实只是原计划中那庞然巨物的一个片段——仅仅完成了主体建筑和一侧的配楼。它像一尊巨大的雕塑，永远停留在了“未完成”的状态，而这，恰恰成了它最具悲剧美感和历史张力的部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`宫殿内部的辉煌，某种程度上弥补了外部的“遗憾”。马克斯·埃马努埃尔将他丰富的艺术收藏，特别是大量的巴洛克时期绘画，填充进那些装饰奢华的大厅。其中最令人惊叹的是“胜利大厅”，天花板上绘制的壁画描绘了选帝侯本人的赫赫战功，气势磅礴。他的后代，尤其是19世纪的路德维希一世，虽然更钟情于南部的宁芬堡宫，但依然为这里添砖加瓦，建成了小巧精致的路斯特海姆宫，作为花园轴线上的一个完美句点。宫殿见证了拿破仑的到访，经历了两次世界大战的炮火（部分建筑受损严重），最终在战后的精心修复中重生，成为一座展示巴伐利亚王朝历史与巴洛克艺术的无价博物馆。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正领略施莱斯海姆宫的魂，你需要预留一整个白天，并抱着散步与发现的心态。建议上午十点左右抵达，这时旅行团还未涌入，阳光正好照亮新宫的东立面。整体游览节奏应舒缓，遵循“由内到外，由宏至微”的原则。上午光线最佳时，先深度探索新宫内部恢弘的殿堂和顶级画廊；午后再投身于广阔的花园，沿着中轴线漫步，让视觉和心灵在无垠的空间中得到舒展；最后探访相对静谧的老宫和路斯特海姆宫，作为历史的余韵。这样安排能避开室内参观的高峰，也能在一天中看到宫殿与花园在不同光线下的多样表情。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`花园内树荫有限，夏季游览务必做好防晒并携带饮用水，园内只有入口处有咖啡馆。宫殿内部地面多为光滑石材或古老木地板，建议穿着舒适且防滑的鞋子。购买联票时记得索取导览图，因为宫殿群布局分散，容易错过路斯特海姆宫等次要景点。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过气派的铸铁大门，首先在新宫前巨大的水镜池边驻足，看着宫殿完美的倒影在微风中轻轻晃动，调整呼吸进入状态。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步入新宫震撼人心的主楼梯厅，仰头凝视那高耸的穹顶壁画和华丽的三层廊台，感受巴洛克艺术扑面而来的戏剧张力。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花至少一小时慢逛宫殿二楼的国家画廊，在无数幅光彩夺目的巴洛克油画前驻足，特别是科斯马斯·阿萨姆创作的穹顶湿壁画，那是巴伐利亚艺术的巅峰之作。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从宫殿北翼出来，正式踏入那座尺度惊人的法式花园，沿着中央沙石路一直向北走，体会被严格几何形态的树阵、草坪和花坛所引导的仪式感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到花园轴线的尽头，参观那座精巧的凉亭建筑，然后不妨在水池边的长椅上坐一会儿，回望来时路，宫殿在远处变得渺小，你会对“尺度”有全新的认知。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`折返向南，探访那座略显简朴但历史更悠久的“老宫”，内部设有关于宫殿建筑史和巴伐利亚民俗的展览，是理解此地前世今生的关键补充。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间和体力允许，继续向东步行约十五分钟，穿过一片小树林，去探访那座宛如童话小屋的洛可可风格“路斯特海姆宫”，内部装饰极尽纤巧华丽之能事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，在日落前回到新宫前的大水池边，等待金色的夕阳为杏黄色的宫殿外墙披上最后一道温暖的光辉，结束这趟穿越时空的漫步。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`新宫正门全景机位`}</h4>
                  <p className="text-sm text-gray-700">{`站在宫殿前广场最南端的水池边缘，用广角镜头将宫殿全貌与其在水中的完美倒影一同纳入画框，最佳拍摄时间为晴日清晨或傍晚，光线柔和，色彩饱和。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`楼梯厅的仰角螺旋`}</h4>
                  <p className="text-sm text-gray-700">{`置身于新宫主楼梯厅中央，将相机贴近地面向上仰拍，捕捉那螺旋上升的华丽廊柱与穹顶壁画构成的深邃空间感，室内光线恒定，全天可拍。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`花园中轴线纵深`}</h4>
                  <p className="text-sm text-gray-700">{`站在花园中心大喷泉附近，将相机置于低角度，让笔直的沙石路径、两侧的雕塑和树篱形成强烈的透视引导线，终点指向远处的凉亭，晴朗的下午顺光拍摄效果最佳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`凉亭倒影与宫殿远景`}</h4>
                  <p className="text-sm text-gray-700">{`在花园最北端的凉亭旁，利用其前的小水池拍摄凉亭的倒影，同时将远方巍峨的新宫作为背景纳入，形成大小、远近的趣味对比，傍晚逆光可拍出剪影效果。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`老宫庭院拱门框架`}</h4>
                  <p className="text-sm text-gray-700">{`在老宫朴素的庭院内，找到一个石制拱门或窗框，以其为前景画框，框住远处华丽的新宫建筑，形成历史与野心、简朴与奢华的有趣对话。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`宫殿内部大部分区域允许非商业用途的摄影，但严禁使用闪光灯和三脚架，以保护珍贵的壁画和画作。拍摄花园时，尝试融入一两个漫步的人影，能为宏伟而略显寂静的场景增添生气与尺度感。冬季雪后前来，整个宫殿群会变成一幅黑白色的水墨长卷，别具风味。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`宫殿所在的上施莱斯海姆镇上由家族经营的“Gasthof zur Post”旅馆，房间干净温馨，下楼就是本地风味的餐厅，晚上能听到教堂钟声，真正融入小镇生活。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`慕尼黑宁芬堡宫附近由历史建筑改造的精品设计酒店，乘坐有轨电车即可轻松连接城市与郊外宫殿，既能享受都市便利，又能沉浸于历史街区氛围。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`慕尼黑施瓦宾区内的五星级艺术酒店，本身就像一座现代美术馆，提供顶级的舒适与服务，逛完古典宫殿回到这里，如同完成一场从巴洛克到当代的时空穿梭。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`中转便利`}</h4>
                  <p className="text-sm text-purple-800">{`慕尼黑机场周边的现代商务酒店，适合航班较早或较晚的旅客，从酒店乘坐S1线直达宫殿仅需十分钟，高效利用短暂的停留时间。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`施莱斯海姆宫所在地Oberschleißheim是一个非常宁静的住宅区，夜晚娱乐和餐饮选择极其有限，更适合追求安静或深度探索的旅者。如果希望体验慕尼黑丰富的夜生活，建议住宿选择在慕尼黑城内，将宫殿作为一日游目的地。该区域治安良好，但无论住在哪里，旺季（夏季及啤酒节期间）务必提前数月预订住宿。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开施莱斯海姆宫的时候，我的心里装的不是那种看过名胜古迹后的满足，而是一种沉静的恍惚。它不像许多世界遗产那样，把所有的辉煌都密密麻麻地堆砌在你面前，逼迫你赞叹。相反，它给了你巨大的空间——物理上的和思绪上的。你可以在这里漫无目的地走，看云的影子滑过长达一公里的草坪，听喷泉不知疲倦地唱着几百年来一样的歌。这种空旷，反而让那些残存的、未竟的野心变得更加清晰可触。你会想，那个一心要建造“北方凡尔赛”的选帝侯，如果看到他倾注了毕生梦想的宫殿，如今成了市民遛狗、孩子学骑车的背景，会是怎样的心情？`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`或许，这正是施莱斯海姆教给我们最深刻的一课：所有的权力叙事，最终都会被时间稀释成风景。它没有成为另一个凡尔赛，或许是一种幸运。它因此保留了一种独特的“中间态”魅力——足够宏伟，让你震撼于人类的野心与创造力；又因为未完成和些许寂寥，让你看到雄心壮志在历史长河中的局限与渺小。它不是明信片上那种完美的风景，而是一个复杂的、活生生的历史现场。对于厌倦了打卡式旅游，渴望在旅途中获得一些宁静思考的人来说，这里是一片难得的净土。它让你在慕尼黑的啤酒狂欢与博物馆盛宴之外，找到一个可以深呼吸、慢慢走、并与一段沉静而壮阔的往昔对话的地方。这不仅仅是一座宫殿，这是一个关于梦想、挫折与时间力量的，清醒的梦。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/lindau" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    林
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">林道老城区</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lindau Old Town</p>
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
              <a href="/attractions/schwaebisch-hall" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施瓦本哈尔古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Schwäbisch Hall Old Town</p>
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
