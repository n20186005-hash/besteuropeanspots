import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '温科夫齐 Vinkovci｜探寻欧洲8000年连续居住史与古老星空的秘密 - 最佳欧洲景点',
  description: '你第一次听说温科夫齐，多半是因为那个拗口的头衔——“欧洲连续居住最久的城镇”。八千年前，这听起来像个神话。但当你真的走出那座奶油黄色的火车站，耳边是克罗地亚语广播和火车的汽笛声，眼前是骑着自行车去买菜的老人，和任何一座宁静的斯拉沃尼亚平原小镇并无二致。空气里飘着新鲜咖啡和刚出炉的“ burek”肉馅',
}

export default function VinkovciTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '克罗地亚', href: '/destinations/europe' },
            { label: '温科夫齐', href: '/destinations/europe' },
            { label: '温科夫齐', href: '/attractions/vinkovci-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`温科夫齐・Vinkovci・克罗地亚・温科夫齐`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一次听说温科夫齐，多半是因为那个拗口的头衔——“欧洲连续居住最久的城镇”。八千年前，这听起来像个神话。但当你真的走出那座奶油黄色的火车站，耳边是克罗地亚语广播和火车的汽笛声，眼前是骑着自行车去买菜的老人，和任何一座宁静的斯拉沃尼亚平原小镇并无二致。空气里飘着新鲜咖啡和刚出炉的“ burek”肉馅饼的香气，一种踏实的生活感扑面而来。你可能会疑惑，那传说中的八千年，究竟藏在哪里？
答案就在脚下。这里的土地不是沉默的，它是一个巨大的、层次分明的千层蛋糕。你漫步在以克罗地亚民族英雄命名的广场上，脚下可能正踩着罗马军团铺就的石板路基底；你路过一间看起来普通的民居，它的地窖墙壁或许就是中世纪城堡的残垣。这种感受太奇妙了，时间的维度在这里被垂直压缩。当地人早已习惯了与历史共生，他们会在自家花园里挖出古陶片，然后平静地打电话给博物馆。历史对他们而言，不是橱窗里的展品，而是后院土壤的一部分，是生活背景里最深沉的底色。
而最打动人心的一刻，是在温科夫齐博物馆那个略显昏暗的展厅里。当你与那个著名的“温科夫齐图腾罐”面对面时，周围的一切都安静了。那不是一件精美绝伦的艺术品，而是一个质朴的陶罐，表面刻着看似凌乱的线条。但当你得知，这些线条被学者解读为可能是欧洲最古老的猎户座星图时，一种近乎战栗的感动会击中你。八千年前，有一个和你一样仰望星空的人，在这片土地上，用他粗糙的工具，在湿润的陶土上，尝试记录宇宙的秩序。那一刻，历史的宏大叙事突然有了温度，变成了一个具体的人与星空的对望。这份跨越时空的连接感，正是温科夫齐最核心的魅力——它让你触碰的，不是帝王的丰功伟绩，而是人类文明源头那簇生生不息的、好奇的火花。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你第一次听说温科夫齐，多半是因为那个拗口的头衔——“欧洲连续居住最久的城镇”。八千年前，这听起来像个神话。但当你真的走出那座奶油黄色的火车站，耳边是克罗地亚语广播和火车的汽笛声，眼前是骑着自行车去买菜的老人，和任何一座宁静的斯拉沃尼亚平原小镇并无二致。空气里飘着新鲜咖啡和刚出炉的“ burek”肉馅饼的香气，一种踏实的生活感扑面而来。你可能会疑惑，那传说中的八千年，究竟藏在哪里？" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "答案就在脚下。这里的土地不是沉默的，它是一个巨大的、层次分明的千层蛋糕。你漫步在以克罗地亚民族英雄命名的广场上，脚下可能正踩着罗马军团铺就的石板路基底；你路过一间看起来普通的民居，它的地窖墙壁或许就是中世纪城堡的残垣。这种感受太奇妙了，时间的维度在这里被垂直压缩。当地人早已习惯了与历史共生，他们会在自家花园里挖出古陶片，然后平静地打电话给博物馆。历史对他们而言，不是橱窗里的展品，而是后院土壤的一部分，是生活背景里最深沉的底色。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而最打动人心的一刻，是在温科夫齐博物馆那个略显昏暗的展厅里。当你与那个著名的“温科夫齐图腾罐”面对面时，周围的一切都安静了。那不是一件精美绝伦的艺术品，而是一个质朴的陶罐，表面刻着看似凌乱的线条。但当你得知，这些线条被学者解读为可能是欧洲最古老的猎户座星图时，一种近乎战栗的感动会击中你。八千年前，有一个和你一样仰望星空的人，在这片土地上，用他粗糙的工具，在湿润的陶土上，尝试记录宇宙的秩序。那一刻，历史的宏大叙事突然有了温度，变成了一个具体的人与星空的对望。这份跨越时空的连接感，正是温科夫齐最核心的魅力——它让你触碰的，不是帝王的丰功伟绩，而是人类文明源头那簇生生不息的、好奇的火花。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`温科夫齐`} />
                <InfoRow label="英文名称" value={`Vinkovci`} />
                <InfoRow label="正式名称" value={`Vinkovci`} />
                <InfoRow label="国家" value={`克罗地亚`} />
                <InfoRow label="城市" value={`温科夫齐`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`被考古学界公认为欧洲连续有人类定居历史最悠久的城镇之一，其定居史无间断地跨越了惊人的八千年。`} />
                <InfoRow label="建筑特色" value={`一座将悠久考古层理深埋于地下的、新旧建筑和谐交融的现代斯拉沃尼亚城镇。`} />
                <InfoRow label="建筑风格" value={`呈现出从新石器时代原始聚居地、罗马军营、中世纪要塞到奥匈帝国风情及现代克罗地亚建筑的多元层叠风格。`} />
                <InfoRow label="文化价值" value={`一个“活态的历史博物馆”，其日常生活与地下沉睡的无数文明断层紧密相连，是理解欧洲东南部文明连续性的关键钥匙。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城镇公共区域全天开放。核心景点温科夫齐博物馆开放时间为：周二至周五 9:00 - 15:00，周六 9:00 - 13:00，周日及周一闭馆。考古遗址公园视天气和考古工作安排开放，建议行前在官网查询或致电博物馆确认。每年夏季（6-8月）可能延长开放时间，冬季（12-2月）可能缩短。`} />
              <InfoRow label="门票价格" value={`进入温科夫齐城镇本身免费。温科夫齐博物馆门票：成人约30库纳（约4欧元），学生及老年人优惠票约15库纳。6岁以下儿童免费。有时会推出包含临时展览的联票，价格约40库纳。建议准备少量现金，虽然信用卡也逐渐普及。`} />
              <InfoRow label="地址" value={`温科夫齐博物馆：Trg bana J. Jelačića 10, 32100 Vinkovci, Croatia`} />
              <InfoRow label="交通方式" value={`从克罗地亚首都萨格勒布出发最为方便：在萨格勒布中央火车站乘坐前往武科瓦尔或塞尔维亚方向的火车，直达温科夫齐火车站，车程约2.5-3小时，每日有4-6班次，可通过克罗地亚铁路官网提前购票。若从塞尔维亚贝尔格莱德方向过来，火车车程约2小时。最近的大型机场是萨格勒布机场，下飞机后需先搭乘巴士或出租车到萨格勒布火车站中转。自驾则沿E70高速公路前往，从萨格勒布出发约2小时车程，城镇内停车便利。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事要从公元前6000年说起。那时，多瑙河支流博苏特河畔的肥沃冲积平原，吸引了一群新石器时代的星托沃文化先民。他们在这里建立了定居点，制作陶器，种植作物，繁衍生息。考古学家发现了他们的炉灶、工具和墓葬，证明了这里人类活动的开端。为什么是这里？丰富的水源、平坦的土地、便利的交通，让这里成为生存的理想之地，也奠定了其后八千年人类不愿离开的根基。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光快进到罗马时代。温科夫齐迎来了第一个“高光”时刻，罗马人在此建立了重要的边境军营和定居点，称其为“科尔西亚”。这里成为了连接多瑙河前线与帝国腹地的战略枢纽，繁荣一时。你可以想象，军团的士兵在此驻防，商贾往来，街道上回响着拉丁语。罗马人带来了石砌建筑、道路系统和行政管理，将这里从一个大型村落提升为具有区域影响力的中心。罗马帝国的崩塌并未让这里荒废，斯拉夫部落逐渐迁入，他们继承了这片土地，并赋予了它新的名字和生命力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "中世纪，温科夫齐在克罗地亚王国、匈牙利王国以及奥斯曼帝国的角力中起伏。它是一座有城墙的城堡城镇，见证了无数次争夺与谈判。奥斯曼的统治留下了东方文化的印记，而后哈布斯堡王朝的收复又带来了巴洛克式的建筑与中欧的风情。这里的文化就像当地的炖菜“ čobanac”一样，各种成分在时间的文火上慢慢交融，形成了独特的风味。十九世纪，随着铁路的修建，温科夫齐成为了重要的交通节点，现代城镇的骨架就此展开，但地下的古老层理从未被遗忘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "二十世纪的风暴剧烈地席卷了这里。两次世界大战，特别是1991年的克罗地亚独立战争，给温科夫齐留下了深刻的伤痕。它靠近武科瓦尔，在战争中遭受了严重的炮击，许多建筑被毁。但温科夫齐的故事最动人的部分，正是其“连续”二字的坚韧。战争过后，人们回来了，他们一边清理废墟，重建家园，一边小心翼翼地保护着地下更古老的“废墟”——那些文明的基石。考古工作从未停止，反而在重建过程中有了更多发现。那个震惊学界的猎户座图腾罐，就是在二十世纪七十年代的一次考古挖掘中重见天日的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个陶罐的发现，仿佛为温科夫齐的八千年历史点上了一盏明灯。它出土于一个可以追溯到公元前2600年左右的铜石并用时代墓穴中。罐身上的刻纹起初被认为是装饰，但经过长期研究，有学者提出惊人假设：这些图案与猎户座及周围亮星的排列惊人一致。如果属实，这不仅是欧洲，甚至是全球最古老的天文记录之一。它无声地诉说着，早在文字出现之前，居住在这片土地上的人类，已经开始了对宇宙的沉思和记录。这件文物，让温科夫齐从一连串的年代数字和考古层位，升华为了一个关于人类智慧与好奇心的永恒象征。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议至少安排一整天时间，最好能住上一晚，感受这座城镇从日落到日出的节奏。理想的行程是从清晨开始，那时城镇刚刚苏醒，光线柔和。上午将精力集中在博物馆和室内解读，建立完整的历史认知框架。午后当阳光变得热烈，适合在老城街道悠闲漫步，用脚步丈量历史与现实的交错。如果时间允许，第二天可以深入郊外的考古遗址公园，或参加当地的文化节庆（如九月著名的“温科夫齐秋季”民俗节）。这样的安排张弛有度，既能满足知识的渴求，也能留下空间让感受慢慢沉淀。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`博物馆每周一闭馆，务必避开这天规划核心参观。穿着舒适的步行鞋至关重要，因为最好的探索方式就是无目的行走，石板路和 uneven sidewalks 会考验你的双脚。与当地人交流时，请对二十世纪末的战争历史保持敏感和尊重，这是一个正在愈合但记忆犹新的伤口。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨先从中央火车站出发，感受这座建于19世纪、至今仍在运作的历史车站，听广播里用克罗地亚语报出“Vinkovci”这个名字。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`直接前往温科夫齐博物馆，花上两小时静静凝视那只神秘的猎户座图腾罐，并透过其他展品梳理从新石器时代到现代的时间线。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从博物馆出来，拐进毗邻的圣埃莱娜和圣十字教堂公园，在树荫下的长椅上坐一会儿，看本地人遛狗、闲聊。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`以主广场（班·约西普·耶拉契奇广场）为圆心，随意漫步老城区，用目光搜寻建筑立面上哈布斯堡时代的华丽装饰与战后重建的简朴线条之间的对话。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到“罗马墙”遗址，那段在银行大楼地下被精心保护并展示的罗马时期城墙遗迹，是“地下城市”最直观的切口。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果正值饭点，去广场旁或小巷里的传统餐厅（Konoba），点一份斯拉沃尼亚烤肉拼盘或炖鱼，让味蕾也体验这片富饶平原的馈赠。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分，散步到博苏特河边，看夕阳将河水染成金色，想象八千年来，正是这条河流哺育了在此延续不绝的生命。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`若有幸在九月来访，彻底融入“温科夫齐秋季”狂欢节的人潮中，看盛装的市民游行，听传统的坦布里扎音乐，感受历史在当下的欢腾延续。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`温科夫齐火车站站台远景`}</h4>
                  <p className="text-sm text-gray-700">{`下午四至六点的侧光时分，从站台东侧向西拍摄，能捕捉到复古车站建筑与延伸的铁轨，构成一幅关于时间与旅程的经典画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`博物馆内图腾罐的凝视视角`}</h4>
                  <p className="text-sm text-gray-700">{`利用博物馆柔和的室内灯光，将镜头贴近玻璃柜，聚焦于罐身神秘的刻纹，使用大光圈虚化背景，营造专注而神秘的考古感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老城广场转角光影`}</h4>
                  <p className="text-sm text-gray-700">{`清晨八点前或傍晚日落前后，站在广场通往小巷的转角，拍摄阳光将巴洛克式建筑立面的浮雕阴影拉长，投在石板路上的瞬间，光阴的故事感十足。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`博苏特河畔的黄昏全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前后半小时，从城西的桥头或河堤公园拍摄，将古老的教堂塔楼、红色的屋顶、静静的河流与绚烂的天空一同纳入镜框。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`“罗马墙”遗址的框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`利用遗址展示厅的玻璃和现代照明，拍摄古代石墙与现代钢筋结构并置的冲突与和谐，可以尝试对称或框架式构图。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`博物馆内拍摄务必关闭闪光灯，强光会对珍贵的有机质文物（如骨骼、陶器）造成不可逆的损伤。在拍摄当地居民或节庆活动时，请先微笑示意，获得默许后再举起相机，尊重他们的隐私。多利用克罗地亚通透的自然光线，特别是“黄金时刻”，能让你的照片充满油画般的质感。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济便捷之选`}</h4>
                  <p className="text-sm text-blue-800">{`主广场附近经过翻新的老式公寓民宿，推开窗就能看到广场上的日常百态，房东老爷爷会热情地给你手绘一张只有本地人才知道的美食地图。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色沉浸体验`}</h4>
                  <p className="text-sm text-green-800">{`由一栋19世纪末奥匈风格别墅改造的精品酒店，房间挑高，装饰着复古家具和老照片，早餐在种满天竺葵的庭院里享用，仿佛住在历史电影片场。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端舒适享受`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在城镇安静街区一栋现代设计酒店，拥有全景屋顶露台，傍晚可以一边品尝斯拉沃尼亚产的葡萄酒，一边360度眺望古城屋顶与无垠的平原交界线。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`郊外宁静 retreat`}</h4>
                  <p className="text-sm text-purple-800">{`距离城镇中心车程约15分钟的乡村农庄民宿，被橡树林和田野环绕，夜晚星空无比清晰，让你在体验八千年历史之余，也能感受这片土地最原始的宁静。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "旺季（特别是九月秋季节期间）住宿非常紧张，务必提前数月预订。城镇中心区域治安良好，夜晚散步也很安全，但无论住在哪里，体验当地咖啡馆的“咖啡时光”都是融入节奏的关键。选择郊外住宿的话，最好具备自驾条件，否则夜间交通会不太方便。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开温科夫齐时，我的背包里没有多一件纪念品，但心里却仿佛被填满了某种沉重而明亮的东西。那沉重，是八千年时光的重量，是无数代人的生息、创造、争斗与坚守所累积出的地质层般的质感。那明亮，则源于那个陶罐上的刻痕——在如此厚重的时间尘埃之下，人类仰望星空的眼神，竟然可以穿越一切，依旧清澈如初。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求“新”和“快”的世界里，温科夫齐的存在像是一个沉稳的定音鼓。它不张扬，不炫目，甚至有些过分朴素。但它用“连续”两个字，给出了关于文明、关于家园最有力的定义。它告诉你，伟大不必是金字塔或万里长城，伟大也可以是像河边的芦苇，一岁一枯荣，但根脉深植，岁岁年年，从未断绝。每一位热爱深度游的旅人，都应该来感受这种“连续性”。站在它的土地上，你连接的不仅是欧洲的源头，更触碰到了人类作为一个物种，那种扎根于一片土地，生生不息、仰望星空的根本性浪漫。这趟旅程，是一次时间的朝圣，更是一次对自身存在根源的温柔回望。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/korcula-old-town-marco-polo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科尔丘拉老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Korčula Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/hum" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    胡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">胡姆城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hum</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/veliki-tabor-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    韦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">韦利基塔博尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Veliki Tabor Castle</p>
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
