import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '西尔米乌姆 Sirmium｜探访被遗忘的罗马国都，触摸四帝共治的辉煌遗迹 - 最佳欧洲景点',
  description: '车子驶入斯雷姆米特罗维察，一个看起来平平无奇的塞尔维亚小镇。阳光把广场照得懒洋洋的，人们坐在咖啡馆外闲聊，鸽子在喷泉边踱步。你几乎会错过它——直到你的脚尖踢到一块从草坪边缘露出来的、被岁月打磨得异常光滑的罗马砖石。那一刻，脚下传来的微颤，瞬间将你与一个沉睡的巨人连接起来。这里就是西尔米乌姆，不是一座...',
}

export default function SirmiumRomanArchaeologicalSiteSremskaMitrovicaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '塞尔维亚', href: '/destinations/serbia' },
            { label: '斯雷姆米特罗维察', href: '/destinations/serbia' },
            { label: '西尔米乌姆', href: '/attractions/sirmium-roman-archaeological-site-sremska-mitrovica' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`西尔米乌姆・Sirmium・塞尔维亚・斯雷姆米特罗维察`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶入斯雷姆米特罗维察，一个看起来平平无奇的塞尔维亚小镇。阳光把广场照得懒洋洋的，人们坐在咖啡馆外闲聊，鸽子在喷泉边踱步。你几乎会错过它——直到你的脚尖踢到一块从草坪边缘露出来的、被岁月打磨得异常光滑的罗马砖石。那一刻，脚下传来的微颤，瞬间将你与一个沉睡的巨人连接起来。这里就是西尔米乌姆，不是一座伫立在山巅供人仰望的卫城，而是一个深深呼吸在现代生活之下的古老灵魂。它的辉煌是内向的、隐秘的，需要你弯下腰，仔细倾听大地的低语。
空气中飘散着青草和午后湿润泥土的气息，混着远处面包店飘来的淡淡焦香。走近用铁丝网围起的考古坑，视野陡然下沉。下方，是色彩依然鲜亮得令人心惊的罗马马赛克地板，红、白、黑、黄交织成复杂的几何图案，像一件被无意中扯出时间褶皱的华美地毯。你能想象穿着凉鞋的脚曾经在上面轻轻踩过，元老们的长袍曳过其表面。但此刻，覆盖其上的是寂静，只有风吹过铁丝网的轻微呜咽，和草丛里不知名昆虫的唧唧声。这种极致的精美与极致的废墟感并置，产生一种奇异的张力，美得让人心头一紧。
在小镇中心，一片开阔的空地标记着昔日皇家宫殿的所在地。没有高耸的立柱，只有用低矮围墙勾勒出的房间地基，像一幅巨大的、摊开在地上的建筑平面图。孩子们在标记为“觐见大厅”的区域内追逐足球，老人们坐在曾是宫墙根基的石条上晒太阳、看报纸。西尔米乌姆没有被供奉在玻璃罩里，它就这样坦然地、碎片化地融入了当地人的日常。这种“活着”的废墟状态，比任何修复完好的古迹都更有力量。它告诉你，历史从未真正死去，它只是换了一种方式，成为今天生活最坚实、却最不被察觉的底土。
最打动人的，正是这种强烈的反差与共生。你站在公元四世纪皇帝加莱里乌斯可能站过的地方，一抬头，看到的却是二十世纪的东正教教堂十字架和社会主义时期的公寓楼。时间的层理在这里被粗暴而诗意地压缩在一起。你不是在参观一个景点，而是在进行一场穿越地质年代般的时空漫步。这里的核心魅力，不在于看到什么惊天动地的完整建筑，而在于那种“发现”的悸动——在最寻常的市井生活之下，亲手触摸到帝国命脉曾经最炙热的跳动。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子驶入斯雷姆米特罗维察，一个看起来平平无奇的塞尔维亚小镇。阳光把广场照得懒洋洋的，人们坐在咖啡馆外闲聊，鸽子在喷泉边踱步。你几乎会错过它——直到你的脚尖踢到一块从草坪边缘露出来的、被岁月打磨得异常光滑的罗马砖石。那一刻，脚下传来的微颤，瞬间将你与一个沉睡的巨人连接起来。这里就是西尔米乌姆，不是一座伫立在山巅供人仰望的卫城，而是一个深深呼吸在现代生活之下的古老灵魂。它的辉煌是内向的、隐秘的，需要你弯下腰，仔细倾听大地的低语。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`空气中飘散着青草和午后湿润泥土的气息，混着远处面包店飘来的淡淡焦香。走近用铁丝网围起的考古坑，视野陡然下沉。下方，是色彩依然鲜亮得令人心惊的罗马马赛克地板，红、白、黑、黄交织成复杂的几何图案，像一件被无意中扯出时间褶皱的华美地毯。你能想象穿着凉鞋的脚曾经在上面轻轻踩过，元老们的长袍曳过其表面。但此刻，覆盖其上的是寂静，只有风吹过铁丝网的轻微呜咽，和草丛里不知名昆虫的唧唧声。这种极致的精美与极致的废墟感并置，产生一种奇异的张力，美得让人心头一紧。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在小镇中心，一片开阔的空地标记着昔日皇家宫殿的所在地。没有高耸的立柱，只有用低矮围墙勾勒出的房间地基，像一幅巨大的、摊开在地上的建筑平面图。孩子们在标记为“觐见大厅”的区域内追逐足球，老人们坐在曾是宫墙根基的石条上晒太阳、看报纸。西尔米乌姆没有被供奉在玻璃罩里，它就这样坦然地、碎片化地融入了当地人的日常。这种“活着”的废墟状态，比任何修复完好的古迹都更有力量。它告诉你，历史从未真正死去，它只是换了一种方式，成为今天生活最坚实、却最不被察觉的底土。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，正是这种强烈的反差与共生。你站在公元四世纪皇帝加莱里乌斯可能站过的地方，一抬头，看到的却是二十世纪的东正教教堂十字架和社会主义时期的公寓楼。时间的层理在这里被粗暴而诗意地压缩在一起。你不是在参观一个景点，而是在进行一场穿越地质年代般的时空漫步。这里的核心魅力，不在于看到什么惊天动地的完整建筑，而在于那种“发现”的悸动——在最寻常的市井生活之下，亲手触摸到帝国命脉曾经最炙热的跳动。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`西尔米乌姆`} />
                <InfoRow label="英文名称" value={`Sirmium`} />
                <InfoRow label="正式名称" value={`考古遗址-西尔米乌姆 (Archaeological Site of Sirmium)`} />
                <InfoRow label="国家" value={`塞尔维亚`} />
                <InfoRow label="城市" value={`斯雷姆米特罗维察`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`罗马帝国“四帝共治”时期最重要的四大首都之一，是帝国西部奥古斯都加莱里乌斯的统治中心。`} />
                <InfoRow label="建筑特色" value={`深埋于现代城镇之下的庞大罗马城市地基，以惊人的马赛克地板、宫殿与赛马场遗址及复杂的地下供暖系统（ Hypocaust ）为亮点。`} />
                <InfoRow label="建筑风格" value={`典型的罗马晚期建筑风格，融合了军事堡垒的实用性与帝国都城的宏伟奢华。`} />
                <InfoRow label="文化价值" value={`它是多瑙河前线“潘诺尼亚”行省的心脏，见证了罗马帝国从巅峰到分裂的关键转型期，是理解晚期罗马帝国政治与文化的活化石。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`考古遗址区（露天部分）通常全天可观看外围，但受保护的发掘坑和核心区域开放时间不固定，强烈建议先行查询。附属的斯雷姆米特罗维察博物馆开放时间较为规律：夏季（4月-10月）周二至周日 10:00 - 18:00；冬季（11月-3月）周二至周日 9:00 - 17:00。每周一闭馆。主要节假日如新年、塞尔维亚圣诞节（1月7日）等可能关闭，出行前务必在官网或当地旅游信息中心核实。`} />
              <InfoRow label="门票价格" value={`遗址露天区域免费参观。斯雷姆米特罗维察博物馆门票约300第纳尔（约合2.5欧元）。学生、儿童及团体享有折扣。博物馆通票可能包含多个市内考古点，约500第纳尔，性价比更高。`} />
              <InfoRow label="地址" value={`Trg Svetog Stefana 1, 22000 Sremska Mitrovica, Serbia`} />
              <InfoRow label="交通方式" value={`从塞尔维亚首都贝尔格莱德出发最为便捷。贝尔格莱德尼古拉·特斯拉机场 (BEG) 是主要国际空港。从机场或市中心火车站，可前往贝尔格莱德中央汽车站。乘坐前往斯雷姆米特罗维察的长途巴士，班次频繁，约每小时一班，车程1小时至1.5小时。自驾则沿E70高速公路向西行驶约80公里，有清晰路标。抵达斯雷姆米特罗维察小镇后，遗址核心区（如帝王宫殿遗址）位于镇中心，步行即可轻松抵达；其他分散的考古点可能需要短途步行或乘坐本地出租车。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从多瑙河说起。这条伟大的河流，在罗马人眼中，既是帝国的北方疆界，也是财富与威胁并存的通道。公元前1世纪，罗马军团在此建立了一个重要的军事营地，这就是西尔米乌姆的雏形。它位于潘诺尼亚平原的中心，水陆交通便利，土地肥沃，迅速从一个边境堡垒成长为繁荣的城镇。到了公元1世纪，它已经获得了罗马殖民地的地位，城墙之内，广场、神庙、公共浴室和整齐的街道纷纷建立。来自帝国各地的商人、士兵和移民在此汇聚，你可以听到拉丁语、希腊语、凯尔特语和各种日耳曼方言在市场上交织，空气中混合着香料、皮革和葡萄酒的味道。此时的西尔米乌姆，是帝国前沿一颗冉冉升起的新星，充满了边疆特有的粗犷活力与无限可能。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，真正将西尔米乌姆推上世界历史舞台中央的，是三世纪危机后帝国那场艰难而天才的政治实验。公元293年，皇帝戴克里先创立了“四帝共治制”，将庞大的帝国分为东西两半，每半由一位“奥古斯都”和一位副手“凯撒”共同治理。西尔米乌姆，因其战略位置和富庶，被选为四位共治皇帝之一——西部奥古斯都加莱里乌斯的都城。一夜之间，这个边疆重镇成了半个世界的权力核心。想象一下那时的盛景：庞大的皇家宫殿拔地而起，其奢华程度据说可与意大利的相比；巨大的赛马场里战车竞逐，欢呼声响彻云霄；来自帝国各地的使节、官员和求见者挤满了新修的驿道；铸币厂日夜不停地铸造着印有皇帝肖像的金币银币。西尔米乌姆的街道上，走着的尽是能决定帝国命运的人物。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但权力的光环也带来了血腥的阴影。四帝共治本身就是一个脆弱的平衡。加莱里乌斯死后，围绕着西尔米乌姆和王位的厮杀便开始了。公元317年，未来的君士坦丁大帝（他后来在米尔维安大桥战役前见证了著名的“十字架显灵”，并确立了基督教的合法地位）正是在西尔米乌姆被宣布为凯撒。这座城市见证了无数次的密谋、结盟、背叛和公开战争。宫殿的墙壁不仅听过宴饮的笙歌，也听见过刀剑出鞘的锐响和垂死者的呻吟。帝国的命运在它的元老院和军营里被反复权衡、争夺。可以说，罗马帝国从中期集权向晚期东西分裂的阵痛，许多关键节点都在西尔米乌姆的宫殿中上演。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`盛极而衰是历史的铁律。随着帝国重心逐渐东移（君士坦丁堡的建立是标志性事件），以及匈人西迁引发的“民族大迁徙”浪潮，西尔米乌姆的重要性开始下降。但它依然是多瑙河前线至关重要的军事要塞。公元441年，灾难降临。阿瓦尔人和其他蛮族部落联手，攻陷并彻底摧毁了这座伟大的城市。大火燃烧了许久，宫殿、神庙、民宅化为灰烬和瓦砾。幸存的居民四散逃亡，曾经流淌着香水与美酒的街道，被野草和遗忘逐渐覆盖。西尔米乌姆作为政治中心的时代，戛然而止。在接下来的中世纪，塞尔维亚人、匈牙利人、奥斯曼土耳其人相继统治这片土地，他们在罗马的废墟上建造自己的教堂、城堡和房屋，西尔米乌姆的名字渐渐从人们的记忆中淡去，只存在于一些古老文献的只言片语里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到二十世纪，尤其是二战后的系统性考古发掘，才让这座沉睡的巨人重见天日。推土机在为新建筑挖地基时，不断撞上巨大的石墙和精美的马赛克。考古学家们像拼图一样，一点点复原出这座城市的轮廓：长达数公里的城墙、能容纳上万人的赛马场、设备先进的铸币厂、错综复杂如迷宫般的地下供暖管道……每一次发现都震撼着学界。西尔米乌姆不再是史书上一个模糊的名字，它变得具体、丰满、触手可及。今天，当我们走在那些用玻璃覆盖保护起来的马赛克地板上方，我们脚下踩着的，正是那段风云激荡、帝国转型的历史本身。它从军事堡垒到帝国都城，再到湮没无闻，最后在考古镐下重生，其一生就是罗马帝国在巴尔干半岛兴衰最完整的史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`游览西尔米乌姆是一场“寻宝”游戏，它的遗迹分散在小镇的各个角落。建议安排一整天时间，从清晨开始，趁着凉爽和游客稀少，先去感受遗址的静谧氛围。整体节奏宜慢不宜快，需要你带着想象力去填补眼前的废墟与昔日的辉煌之间的空白。上午重点拜访集中的考古展示区（宫殿与马赛克），下午探访更分散的遗址点并参观博物馆，将实物与历史脉络结合。这样安排能让你从直观感受到理性认知，层层深入地理解这座古城。记得穿一双舒适耐走的鞋，因为你需要在小镇的古今 layers 之间不断步行穿梭。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`遗址点很多是露天且无遮挡的，夏季塞尔维亚阳光强烈，务必携带防晒霜、帽子和充足饮水。部分考古坑位于居民区，请保持安静，尊重当地居民生活隐私。小镇英语普及度一般，最好提前下载离线地图并标好主要遗址点，或向博物馆索取带有地图的导览页。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先去镇中心的“帝王宫殿遗址”开阔地，在清晨柔和的阳光下静静站一会儿，用脚丈量那片巨大地基的规模，想象宫墙曾经的高度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`然后步行两分钟到旁边精心保护的“马赛克遗址馆”，蹲下来细细观察那些在地下沉睡了1600多年依然色泽绚丽的几何与花卉图案。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`接着去探寻“古罗马水道”残存的砖石拱门，它隐藏在居民区的后院和空地上，寻找的过程本身就像一次城市考古冒险。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后前往斯雷姆米特罗维察博物馆，在凉爽的展厅里系统地看那些出土的雕塑、珠宝、武器和日常器物，把上午看到的碎片拼成完整的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间充裕，租一辆自行车或慢悠悠地散步，沿着小镇边缘寻找古罗马城墙的残段和塔楼地基，它们常常就在某条普通街道的尽头。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要在日落前回到宫殿遗址或赛马场遗址附近，看金色的夕阳如何给那些古老的石头镀上温暖的光泽，那是西尔米乌姆一天中最有帝国余晖感的时刻。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`帝王宫殿地基的东南角，以现代教堂的十字架为远景，将罗马废墟与东正教信仰纳入同一画面，构成跨越千年的对话。`}</h4>
                  <p className="text-sm text-gray-700">{`帝王宫殿地基的东南角，以现代教堂的十字架为远景，将罗马废墟与东正教信仰纳入同一画面，构成跨越千年的对话。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`马赛克遗址馆内，将镜头贴近玻璃，低角度拍摄马赛克图案的局部特写，利用室内灯光捕捉瓷砖表面的微妙光泽和纹理。`}</h4>
                  <p className="text-sm text-gray-700">{`马赛克遗址馆内，将镜头贴近玻璃，低角度拍摄马赛克图案的局部特写，利用室内灯光捕捉瓷砖表面的微妙光泽和纹理。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`在寻找古城墙残段的路上，拍摄那些嵌在现代房屋墙壁或作为花园围栏的古老罗马石块，突出历史与现实的直接并置与融合。`}</h4>
                  <p className="text-sm text-gray-700">{`在寻找古城墙残段的路上，拍摄那些嵌在现代房屋墙壁或作为花园围栏的古老罗马石块，突出历史与现实的直接并置与融合。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从赛马场遗址（现为公园绿地）的西南侧，用广角镜头拍摄，前景是绿草如茵的赛道痕迹，中景是玩耍的儿童，背景是小镇的红色屋顶，寓意生命在历史场地上的延续。`}</h4>
                  <p className="text-sm text-gray-700">{`从赛马场遗址（现为公园绿地）的西南侧，用广角镜头拍摄，前景是绿草如茵的赛道痕迹，中景是玩耍的儿童，背景是小镇的红色屋顶，寓意生命在历史场地上的延续。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄马赛克等室内文物时请关闭闪光灯，强光会对脆弱色素造成不可逆的损害。利用清晨或傍晚的斜射长光线拍摄露天遗址，能增强石头的质感和立体感，避免正午顶光下的平淡。尊重当地习俗，拍摄居民或他们的财产前，最好先微笑示意并取得同意。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`镇中心一家由家庭公寓改造的温馨民宿，主人妈妈会为你准备地道的塞尔维亚早餐，果酱是自家果园产的，还能给你手绘一张非官方的遗址探索地图。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`住在多瑙河畔不远处由老房子改建的精品客栈，房间保留了原始的石墙和木梁，晚上在花园里能听到河水潺潺，仿佛千年前罗马舰队停泊的声音。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车二十分钟前往弗鲁什卡戈拉山脚下的葡萄园酒店，在一天的考古之旅后，用当地产的 Bermet 甜酒和山间宁静的星空来犒劳自己，远眺平原上西尔米乌姆所在的方位。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`斯雷姆米特罗维察小镇非常安全宁静，夜晚散步很惬意。夏季（7-8月）是旅游旺季，也是当地文化节庆较多的时期，住宿建议提前几周预订。选择住在镇上可以更深入地体验本地人生活，清晨和傍晚独享遗址的体验无与伦比。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开西尔米乌姆很久以后，我脑海里反复回响的，不是某一块具体的马赛克图案，而是那种弥漫在空气中的“层叠感”。历史在这里不是一条奔流向前的河，而是一片被反复耕耘、播种又覆盖的土地。罗马的基石上长出了中世纪的教堂，奥斯曼的驿站旁矗立着社会主义的公寓楼，而今天的孩子，就在所有这些时间的沉积物上奔跑嬉戏。西尔米乌姆教会我的，是一种看待历史的立体视角——文明并非简单地取代文明，而是像地质运动一样，挤压、折叠、交融，最终形成我们今天站立其上的复杂地貌。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在追求宏大、完整、 Instagram 式完美景观的今天，西尔米乌姆显得如此“不完美”，甚至有些“破碎”。但恰恰是这种特质，让它成为最真诚的深度游目的地。它不讨好你，不给你轻易的震撼，它要求你付出注意力、想象力和一点点耐心，去亲手拂开时光的尘埃。当你终于感受到那块被无数人踩踏而光滑温润的罗马路石时，你所建立的连接是私人而深刻的。你会明白，真正的辉煌未必是永恒矗立的宫殿，也可以是深深嵌入当下生活的记忆基石。对于任何想超越打卡、去触摸欧洲历史真实心跳与复杂纹理的旅人来说，西尔米乌姆不是一个选项，它是一个必修课，一堂关于时间、记忆与文明韧性的，无声却震耳欲聋的课。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/manasija-monastery-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马纳西亚修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Manasija Monastery</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/zemun-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    泽
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">泽蒙老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Zemun Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/novi-sad-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    诺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">诺维萨德要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Petrovaradin Fortress</p>
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
