import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '明斯特老城与主广场 Prinzipalmarkt｜漫步山形墙下的拱廊，探访奠定欧洲和平的传奇之城 - 最佳欧洲景点',
  description: '你第一眼看到明斯特主广场（Prinzipalmarkt）时，会有一种奇妙的秩序感扑面而来。不是那种威严的压迫，而是一种和谐、沉稳的韵律。几十栋建筑肩并肩站立，它们最引人注目的，是头顶上那些高耸的、阶梯状的山形墙，像一排被精心修剪过的巨大树冠，在北德清透的天空下勾勒出锯齿般的天际线。阳光洒在粉刷成浅黄...',
}

export default function MuensterAltstadtPrinzipalmarktPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '德国', href: '/destinations/germany' },
            { label: '明斯特老城与主广场（山形墙林立的汉萨商人街与和平之城）', href: '/attractions/muenster-altstadt-prinzipalmarkt' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`明斯特老城与主广场（山形墙林立的汉萨商人街与和平之城）・Münster Old Town and Prinzipalmarkt・德国・明斯特`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼看到明斯特主广场（Prinzipalmarkt）时，会有一种奇妙的秩序感扑面而来。不是那种威严的压迫，而是一种和谐、沉稳的韵律。几十栋建筑肩并肩站立，它们最引人注目的，是头顶上那些高耸的、阶梯状的山形墙，像一排被精心修剪过的巨大树冠，在北德清透的天空下勾勒出锯齿般的天际线。阳光洒在粉刷成浅黄、米白或淡粉色的墙面上，光影在那些凸出的窗户和繁复的石雕上跳舞。最妙的是建筑的一层，全部是连贯的拱廊，形成一条长长的、带顶篷的走廊。走在里面，脚步声在石板上轻轻回响，混合着隔壁咖啡馆飘出的现磨咖啡香和面包房刚出炉的“普林兹蛋糕”的甜腻气息。
这里绝不是一个仅供观赏的博物馆。拱廊下，西装革履的律师提着公文包匆匆走进挂着古老铭牌的事务所，大学生们把自行车随意靠在石柱旁，坐在露天座椅上对着笔记本电脑讨论课题，时髦的主妇在精品店的橱窗前流连。和平纪念碑前，总有人静静地放上一小束鲜花。市政厅那扇沉重的木门开了又关，游客与本地人交织穿行。你会发现，“历史”在这里不是被封存的，而是像空气一样，弥漫在每一块被踩得光滑的铺路石上，回荡在市政厅和平大厅的寂静里，流淌在环绕老城的、绿波荡漾的护城河自行车道中。
明斯特的灵魂是双重的。一面是它作为汉萨同盟重要成员留下的深刻烙印——那些山形墙楼宇，最初就是富商们的住宅兼商铺，炫耀着财富与地位；拱廊是为了让贸易风雨无阻，是实用主义的美学。另一面，则是1648年，欧洲各大国的代表们在这里（以及附近的奥斯纳布吕克）签署了结束三十年战争的《威斯特伐利亚和约》。战争的创伤需要抚平，而和平的协议就在这些商人建筑的二楼房间里被艰难地磋商出来。商业的繁荣与对和平的渴求，就这样奇妙地交织在同一片天空下，塑造了这座城市低调、务实却又充满历史厚重感的独特气质。它不张扬，却自有千钧之力。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你第一眼看到明斯特主广场（Prinzipalmarkt）时，会有一种奇妙的秩序感扑面而来。不是那种威严的压迫，而是一种和谐、沉稳的韵律。几十栋建筑肩并肩站立，它们最引人注目的，是头顶上那些高耸的、阶梯状的山形墙，像一排被精心修剪过的巨大树冠，在北德清透的天空下勾勒出锯齿般的天际线。阳光洒在粉刷成浅黄、米白或淡粉色的墙面上，光影在那些凸出的窗户和繁复的石雕上跳舞。最妙的是建筑的一层，全部是连贯的拱廊，形成一条长长的、带顶篷的走廊。走在里面，脚步声在石板上轻轻回响，混合着隔壁咖啡馆飘出的现磨咖啡香和面包房刚出炉的“普林兹蛋糕”的甜腻气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里绝不是一个仅供观赏的博物馆。拱廊下，西装革履的律师提着公文包匆匆走进挂着古老铭牌的事务所，大学生们把自行车随意靠在石柱旁，坐在露天座椅上对着笔记本电脑讨论课题，时髦的主妇在精品店的橱窗前流连。和平纪念碑前，总有人静静地放上一小束鲜花。市政厅那扇沉重的木门开了又关，游客与本地人交织穿行。你会发现，“历史”在这里不是被封存的，而是像空气一样，弥漫在每一块被踩得光滑的铺路石上，回荡在市政厅和平大厅的寂静里，流淌在环绕老城的、绿波荡漾的护城河自行车道中。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`明斯特的灵魂是双重的。一面是它作为汉萨同盟重要成员留下的深刻烙印——那些山形墙楼宇，最初就是富商们的住宅兼商铺，炫耀着财富与地位；拱廊是为了让贸易风雨无阻，是实用主义的美学。另一面，则是1648年，欧洲各大国的代表们在这里（以及附近的奥斯纳布吕克）签署了结束三十年战争的《威斯特伐利亚和约》。战争的创伤需要抚平，而和平的协议就在这些商人建筑的二楼房间里被艰难地磋商出来。商业的繁荣与对和平的渴求，就这样奇妙地交织在同一片天空下，塑造了这座城市低调、务实却又充满历史厚重感的独特气质。它不张扬，却自有千钧之力。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`明斯特老城与主广场（山形墙林立的汉萨商人街与和平之城）`} />
                <InfoRow label="英文名称" value={`Münster Old Town and Prinzipalmarkt`} />
                <InfoRow label="正式名称" value={`Historische Altstadt Münster mit Prinzipalmarkt`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`明斯特`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`欧洲现代国家体系的奠基石——《威斯特伐利亚和约》的主要签署地之一。`} />
                <InfoRow label="建筑特色" value={`连绵不绝、整齐划一的阶梯式山形墙立面，与下层连贯的拱形游廊共同构成的独特城市景观。`} />
                <InfoRow label="建筑风格" value={`以战后精心修复的后哥特式与文艺复兴风格为主，混搭着现代元素。`} />
                <InfoRow label="文化价值" value={`一座将汉萨同盟的商业雄心与追求和平的政治遗产完美融合，并在日常生活中活态呈现的“自行车大学城”。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`公共广场及街道全天24小时开放。广场周围商铺营业时间通常为周一至周六上午10点至晚上7点，部分商店周四会延长至晚上8点。市政厅等历史建筑内部有固定开放时间，通常为周二至周五上午10点至下午5点，周六日下午1点至5点，周一及法定节假日闭馆。圣诞节期间广场会有圣诞市场，开放时段为上午11点至晚上9点。`} />
              <InfoRow label="门票价格" value={`进入老城区及漫步主广场完全免费。参观市政厅历史大厅（Friedenssaal）门票约2欧元，学生及团体有优惠。登顶圣兰贝蒂教堂塔楼约2.5欧元。建议购买“明斯特卡”，可在多家博物馆和交通中享受折扣。`} />
              <InfoRow label="地址" value={`Prinzipalmarkt, 48143 Münster, Germany`} />
              <InfoRow label="交通方式" value={`从最近的明斯特/奥斯纳布吕克国际机场（FMO）出发：搭乘出租车至老城区约30分钟，车费约45欧元。更经济的选择是乘坐S50机场巴士至明斯特中央火车站，车程约40分钟，班次每小时1-2班。从德国主要城市乘坐火车至明斯特中央火车站非常方便，车站距离老城区仅1.5公里。从火车站出发，你可以悠闲地步行20分钟，穿过绿意盎然的公园和护城河小道直达主广场；也可以在市内公交枢纽（位于火车站出口）乘坐任意前往“Rathaus”或“Prinzipalmarkt”的公交车，约5-10分钟即可到达，单程票约2.8欧元。强烈建议购买一日票，方便在老城内外探索。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从12世纪说起。当明斯特获得城市权，并因其重要的主教驻地和东西贸易路线上的关键位置而繁荣起来时，它的城市骨架就逐渐成型。加入汉萨同盟后，财富如潮水般涌来。那些我们今天看到的山形墙建筑的雏形，就在这个时期拔地而起。商人们不仅比货物，也比谁家的门面更气派。阶梯式山形墙是北德汉萨城市的流行风尚，它既能有效防止火灾蔓延（实用），又能最大化阁楼的储物空间（更实用），还显得无比庄严美观。Prinzipalmarkt这个名字里的“Prinzipal”，指的就是这些有头有脸的商人首领。拱廊下的交易声、马车声、不同口音的讨价还价声，构成了中世纪明斯特最繁华的乐章。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，16世纪的宗教改革浪潮将这座城市卷入了剧烈的动荡。再洗礼派在这里建立了短暂的“明斯特公社”，试图打造一个乌托邦式的“新耶路撒冷”，最终却以血腥的围城和镇压告终。这场动荡深深创伤了城市，但并未摧毁它商业的根基。真正的考验，也是最大的转折，发生在17世纪。欧洲陷入了惨烈的三十年战争，新教与天主教势力厮杀不休，整个德意志大地满目疮痍。当各方都精疲力竭时，明斯特和它的姊妹城奥斯纳布吕克，因其相对中立的位置和尚存的接待能力，被选为和谈地点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下1643年到1648年的那些日日夜夜。法国、瑞典、神圣罗马帝国皇帝及各邦国的代表们，带着满身的战争尘埃和沉重的使命，住进了Prinzipalmarkt这些商人宅邸里。他们不是在宏伟的宫殿里谈判，而是在这些商人的客厅、书房中，为了每一条边界、每一个宗教条款争吵、妥协。特别是明斯特市政厅二楼那个并不算特别宽敞的“和平大厅”，见证了无数历史性的时刻。最终，和约在这里宣布，一套基于主权国家平等、宗教共存的全新国际关系准则得以确立。明斯特，从此与“和平”这个词永远绑定。它从一座繁荣的商业城市，意外地成为了欧洲现代政治的接生婆。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`和平并未让历史停下脚步。二战期间，明斯特老城遭受了毁灭性的轰炸，Prinzipalmarkt几乎被夷为平地，包括那栋承载和平记忆的市政厅。战后，德国人面临选择：是拥抱全新的现代建筑，还是重建过去？明斯特人做出了一个深情而坚定的选择：重建。他们依据老照片、图纸和记忆，一砖一瓦地复原了那些山形墙和拱廊。这不是简单的复制，而是一次文化身份的重申。重建后的广场，看似古风盎然，但仔细看，你会发现许多建筑的细节简化了，材料也是新的，它更像一首关于记忆的现代诗。而城市也将这份对历史的珍视，投入到了新的身份构建中——大力发展教育，成为著名的“大学城”；推广环保与自行车文化，成为欧洲最宜居的城市之一。老广场，就这样静静地看着一代代学子骑着单车从拱廊下穿过，将历史的智慧与和平的期许，带向未来。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味明斯特老城的精髓，你需要至少预留出大半天的时间，从清晨开始最为理想。建议在上午9点前抵达，这时游客尚未涌入，阳光斜射进拱廊，光线柔和，店铺陆续开张，本地生活刚刚苏醒。整个游览节奏应如这座城市的气质一样，从容不迫，以漫步和观察为主。路线是一个环绕主广场并延伸至老城核心标志点的环路，总耗时约4-5小时，中间务必留出时间坐下来喝杯咖啡，观察人群。这样安排既能抓住光影最美的时刻，又能由点及面地理解这座城市从商业、宗教到和平立宪的多层历史肌理。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`市政厅和平大厅周一不开放，务必提前查好时间以免扑空。明斯特是著名的自行车之城，人行道上自行车道有时并不明显，步行时请格外注意身后清脆的车铃声。穿着绝对要舒适，探索老城意味着大量的石板路步行，一双好走的鞋是必需品。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清早先从圣兰贝蒂教堂那高耸入云的塔楼下开始，仰头感受它作为城市天际线主宰的威严，并留意教堂外墙上那个仍嵌在石壁中的铁笼——它无声诉说着16世纪再洗礼派运动的惨烈往事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过窄巷来到Prinzipalmarkt广场的东端，让自己被那两排整齐划一、气势恢宏的山形墙立面所震撼，然后沿着北侧的拱廊慢慢向西走，用手指触摸那些承载了数百年故事的砂岩柱廊。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在市政厅哥特式的山形墙前驻足，推门进入那并不起眼的大门，爬上木质楼梯，亲自站在“和平大厅”里，凝视墙上那些1648年与会代表的肖像，在绝对的寂静中感受历史的分量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从市政厅出来，在广场中央的“和平纪念碑”前稍作停留，看看今天的人们为和平献上了什么，然后钻入南侧拱廊下，逛逛那些精致的橱窗，在老字号咖啡馆的户外座点一份Westphalian奶油茶点。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着拱廊走到市场通道，右转去探访明斯特大教堂及其令人惊叹的拥有天文钟的中世纪内庭，感受宗教在这座城市的另一重深厚根基。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从大教堂广场沿着Salzstraße悠闲地散步，看看那些色彩柔和、风格多样的战后重建建筑，然后找到Buddenstraße，去邂逅那座可爱的、歪歪扭扭的“歪房子”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最终穿过古老的“十字门”，来到环绕老城的护城河与公园带，租一辆自行车或只是沿着河岸散步，看天鹅游弋，学生们在草坪上阅读，从远处回望老城宁静的轮廓。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`市政厅拱廊纵深视角`}</h4>
                  <p className="text-sm text-gray-700">{`站在广场东端或西端的拱廊入口处，利用拱廊形成的天然透视框架，将长长的柱廊和尽头的山形墙建筑一同纳入镜头，最佳光线在上午或午后斜射时，光影层次极佳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`广场中央仰拍山形墙阵列`}</h4>
                  <p className="text-sm text-gray-700">{`退到和平纪念碑附近，将相机贴近地面向上仰拍，可以夸张地展现两侧山形墙建筑的挺拔与韵律感，蓝天为背景时尤为干净震撼，全天皆可但正午阴影最小。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣兰贝蒂教堂塔顶俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`鼓起勇气登上塔楼（共305级台阶），在观景平台上可以将Prinzipalmarkt如同模型般对称的布局、连绵的红色屋顶和远处的护城河绿带尽收眼底，晴朗的傍晚能拍到金色夕阳洒满全城。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`拱廊下的生活瞬间`}</h4>
                  <p className="text-sm text-gray-700">{`选择一束阳光刚好能照进拱廊柱子的位置，等待一个骑自行车的人、一群笑语的学生或一位驻足看橱窗的老人的身影进入光区，捕捉自然的生活场景，故事感远超单纯的风光照。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`老城门与护城河倒影`}</h4>
                  <p className="text-sm text-gray-700">{`从“十字门”或“仆人门”的外侧，利用护城河平静的水面拍摄古城门及其在水中的完美倒影，清晨无风时最佳，画面宁静而富有历史感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用广角镜头（16-35mm）能更好地捕捉拱廊的纵深感与山形墙建筑群的恢宏气势。当地人非常注重隐私，请不要将镜头过分对准私人住宅的窗户或咖啡馆里未经许可的客人。雨后湿润的石板路会反射灯光和倒影，是出片的绝佳时机。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`位于老城边缘宁静小巷里的家族经营 Pension，房间虽小但一尘不染，早餐是女主人自制的果酱和新鲜面包，每晚都能在窗下听到护城河边的细微水声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`由一栋16世纪山形墙商人宅邸改造的精品设计酒店，内部将古老的木梁结构与简约的现代设计完美融合，住在里面仿佛成为历史的一部分，屋顶露台能瞥见广场一角。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在老城内最佳位置的五星级酒店，前身是贵族宫殿，拥有一个隐秘的室内庭院花园，水疗中心选用当地有机产品，服务细致到可以为你安排与大学历史学家的私人城市导览。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`学生氛围`}</h4>
                  <p className="text-sm text-purple-800">{`大学区附近的时尚公寓式酒店， loft 设计宽敞明亮，房东会热情地给你推荐本地人才知道的地下爵士酒吧和最棒的自行车租赁店，轻松融入这座年轻城市的脉搏。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的酒店往往历史悠久，房间格局可能不如现代酒店宽敞，但地理位置无与伦比。明斯特治安极佳，即使是夜晚的老城街道也十分安全。旺季（夏季、圣诞市场期间）务必提前数月预订，尤其是广场周边的特色住宿。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开明斯特很多天后，我脑海里反复出现的，不是某个具体的建筑细节，而是一种感觉。那是一种在厚重历史与轻盈当下之间取得的精妙平衡。你在这里触摸到的石头，很多是战后重新砌上的，但那份对和平的渴望、对社区秩序的珍视，却是从1648年甚至更早之前，一脉相承、从未断绝的真实温度。这座城市没有沉迷于悲情，也没有沉醉于复古的幻梦，它选择用重建来铭记，用自行车和大学来新生。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求快速、刺激和颠覆的时代，明斯特提供了一种截然不同的价值。它告诉你，和平不是理所当然的背景音，而是需要一代代人用理性、妥协甚至是从废墟中重建的勇气去小心维护的珍贵果实。它告诉你，商业的繁荣与精神的追求可以并肩而立，在拱廊下，既买卖货物，也酝酿改变世界的条约。漫步在Prinzipalmarkt，你最终感受到的，是一种深植于日常的韧性。这份韧性，让每一个到访的旅人，都能在那些整齐的山形墙下，在悠闲骑过的单车铃声里，获得一种内心的安定与力量。这或许就是深度旅行最美好的馈赠：不仅看到了不一样的风景，更触碰到了一种可效仿的生活智慧。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/gorlitz-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格尔利茨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Görlitz Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/erfurt-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃尔福特老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Erfurt Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tuebingen-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    图
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">图宾根老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tübingen Old Town</p>
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
