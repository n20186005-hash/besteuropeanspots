import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '昆卡悬空之屋 Casas Colgadas｜探秘挂在悬崖上的中世纪奇观 - 最佳欧洲景点',
  description: '第一眼看到昆卡的悬空之屋，你的心跳会漏掉半拍。那根本不是常规意义上的“房子”，而是三栋紧紧扒在韦卡尔河峡谷锋利边缘的苍白建筑，它们的木制阳台毫无畏惧地向虚空延伸出去，底下是近乎百米深的绿色深渊。风从峡谷深处呼啸而上，吹得木头窗棂发出轻微的、仿佛叹息般的吱呀声，空气中混合着干燥的石粉味、远处松林的清香...',
}

export default function CasasColgadasCuencaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '昆卡悬空之屋', href: '/attractions/casas-colgadas-cuenca' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`昆卡悬空之屋・Casas Colgadas・西班牙・昆卡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到昆卡的悬空之屋，你的心跳会漏掉半拍。那根本不是常规意义上的“房子”，而是三栋紧紧扒在韦卡尔河峡谷锋利边缘的苍白建筑，它们的木制阳台毫无畏惧地向虚空延伸出去，底下是近乎百米深的绿色深渊。风从峡谷深处呼啸而上，吹得木头窗棂发出轻微的、仿佛叹息般的吱呀声，空气中混合着干燥的石粉味、远处松林的清香，还有一丝河水的潮气。你会忍不住想，究竟是怎样的一群人，会选择把家安在这样一个仿佛随时会坠落的边缘？
但走近了看，你会发现它并非孤立的存在。它牢牢地镶嵌在昆卡老城那迷宫般的石头肌理里。清晨，当地的老太太会拎着菜篮，从容地走过它下方的石拱桥；午后，咖啡馆的侍应生在它投下的阴影里摆放桌椅。对于昆卡人来说，Casas Colgadas不是供人惊叹的景点，而是他们日常生活的背景板，是祖辈勇气与固执的证明，是他们城市灵魂最直观的轮廓。它那种摇摇欲坠的美，早已成为当地人血脉里的一部分——一种对极限生活的坦然与诗意。
站在它对面的圣帕布罗桥回望，是整个体验的灵魂时刻。阳光在上午十点后，会慢慢将那些斑驳的石灰岩墙面染成蜜糖般的金色，与深谷的墨绿形成戏剧性的对比。你可以清楚地看到，房屋底部并非完全悬空，而是巧妙地利用并加固了天然的岩石凸起作为地基。那种感觉非常奇妙：恐惧与安稳，冒险与居家，瞬间的眩晕与永恒的稳固，全部交织在一起。它不向你诉说宏大的宗教或王权，它只讲述普通人在绝境中建造家园的、触手可及的神话。这就是它最核心的魅力——一种极致浪漫的生存宣言。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到昆卡的悬空之屋，你的心跳会漏掉半拍。那根本不是常规意义上的“房子”，而是三栋紧紧扒在韦卡尔河峡谷锋利边缘的苍白建筑，它们的木制阳台毫无畏惧地向虚空延伸出去，底下是近乎百米深的绿色深渊。风从峡谷深处呼啸而上，吹得木头窗棂发出轻微的、仿佛叹息般的吱呀声，空气中混合着干燥的石粉味、远处松林的清香，还有一丝河水的潮气。你会忍不住想，究竟是怎样的一群人，会选择把家安在这样一个仿佛随时会坠落的边缘？`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但走近了看，你会发现它并非孤立的存在。它牢牢地镶嵌在昆卡老城那迷宫般的石头肌理里。清晨，当地的老太太会拎着菜篮，从容地走过它下方的石拱桥；午后，咖啡馆的侍应生在它投下的阴影里摆放桌椅。对于昆卡人来说，Casas Colgadas不是供人惊叹的景点，而是他们日常生活的背景板，是祖辈勇气与固执的证明，是他们城市灵魂最直观的轮廓。它那种摇摇欲坠的美，早已成为当地人血脉里的一部分——一种对极限生活的坦然与诗意。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`站在它对面的圣帕布罗桥回望，是整个体验的灵魂时刻。阳光在上午十点后，会慢慢将那些斑驳的石灰岩墙面染成蜜糖般的金色，与深谷的墨绿形成戏剧性的对比。你可以清楚地看到，房屋底部并非完全悬空，而是巧妙地利用并加固了天然的岩石凸起作为地基。那种感觉非常奇妙：恐惧与安稳，冒险与居家，瞬间的眩晕与永恒的稳固，全部交织在一起。它不向你诉说宏大的宗教或王权，它只讲述普通人在绝境中建造家园的、触手可及的神话。这就是它最核心的魅力——一种极致浪漫的生存宣言。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`昆卡悬空之屋`} />
                <InfoRow label="英文名称" value={`Casas Colgadas`} />
                <InfoRow label="正式名称" value={`Casas Colgadas`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`昆卡`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`中世纪民用建筑在极限地理环境下的生存智慧与美学奇迹，是昆卡古城世界文化遗产的核心地标。`} />
                <InfoRow label="建筑特色" value={`木结构阳台如同巨鸟的巢穴，从近乎垂直的石灰岩悬崖上凭空探出，与险峻的自然地貌形成惊心动魄的共生关系。`} />
                <InfoRow label="建筑风格" value={`哥特式民用建筑，融合了穆德哈尔式的木工技艺，呈现出鲜明的卡斯蒂利亚地区中世纪晚期风格。`} />
                <InfoRow label="文化价值" value={`它不仅是建筑奇观，更是西班牙从中世纪迈向现代过程中，人类勇气、创造力与抽象艺术精神的永恒象征。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`博物馆部分（西班牙抽象艺术博物馆）开放时间通常为周二至周五上午11:00至下午2:00及下午4:00至6:00，周六上午11:00至下午2:00及下午4:00至8:00，周日上午11:00至下午2:30。每周一闭馆。室外观赏区域及建筑外部全天可见，但最佳观赏光线在白天。具体开放时间可能随季节（夏季可能延长）及节假日调整，行前务必在官网确认。`} />
              <InfoRow label="门票价格" value={`进入建筑内部参观西班牙抽象艺术博物馆需购票，常规票价约3欧元。学生、65岁以上老人及团体可能有折扣优惠，通常约1.5欧元。每周日及特定节假日（如5月18日国际博物馆日）可能免费开放。仅在外部阳台（Mirador）观景或拍摄建筑外观无需门票。`} />
              <InfoRow label="地址" value={`Casas Colgadas, Calle Canónigos, s/n, 16001 Cuenca, Spain`} />
              <InfoRow label="交通方式" value={`从马德里出发最为便捷。在马德里阿托查火车站乘坐Renfe火车前往昆卡，车程约50分钟至1小时，班次频繁，建议提前在线购票以确保座位。抵达昆卡火车站后，可乘坐1路或2路城市公交至“昆卡古城”入口，车程约15分钟，或直接搭乘出租车，约10分钟可达。从瓦伦西亚自驾前往约需1.5-2小时。昆卡古城内为步行区，车辆无法进入，需将车停在山下停车场，然后沿着陡峭但风景绝佳的小径步行约15分钟上山抵达。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`悬空之屋的故事，始于一个关于生存与防御的朴素选择。昆卡城本身，就是摩尔人在公元8世纪为了控制这片战略要地，在天然的双河环绕的陡峭山脊上建立的堡垒。基督教国王阿方索八世在1177年收复此地后，这座易守难攻的石头城继续发展。到了14、15世纪，随着人口增长，老城内有限的平坦土地早已被教堂和贵族府邸占满。于是，那些不那么富有的工匠和市民，便将目光投向了城墙外、峡谷边缘那些看似不可能的岩壁。最初的“悬空屋”可能不止这三栋，它们是在原有城墙基础上“生长”出来的，是一种极度实用主义的拓展：既能获得居住空间，其突出的结构本身又构成了额外的防御工事。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`关于现在留存下来的这三栋具体为谁所建，历史记载已经模糊。有传说指向一位名叫“勇敢的约翰”的贵族，但更可信的说法是，它们属于某个富商或官员家族。建筑采用了当时卡斯蒂利亚地区常见的哥特式民用风格，但关键的悬挑木结构阳台（称为“voladizos”），则深深植根于伊比利亚半岛的穆德哈尔传统。那些精湛的木工技艺——复杂的榫卯、华丽的雕花托架——很可能出自皈依基督教的摩尔匠人之手。这种文化交融的痕迹，让这些房子不仅仅是房子，更是中世纪西班牙复杂社会图景的一个立体切片。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`此后的几个世纪里，它们默默经历着风雨、战争和遗忘。房屋几经转手，内部被分割、改造，外墙在一次次修补中变得斑驳。它们一度沦为仓库甚至近乎废墟。真正的转折点发生在上世纪20年代，一种全新的审美眼光开始审视这些“危险的旧房子”。艺术家和知识分子们，被它们那种非理性的、近乎超现实主义的形态所震撼。它们开始出现在画布和诗篇中，从一个破旧的民居，转变为一个美学的符号，一个关于西班牙精神的隐喻——在悬崖边缘舞蹈的激情。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了20世纪60年代，在建筑濒临坍塌的边缘，一次决定性的修复工程拯救了它们。建筑师弗朗西斯科·莱昂·梅拉不仅加固了结构，更大胆地提议将其内部改造为“西班牙抽象艺术博物馆”。这个决定堪称神来之笔。1966年，博物馆在此开幕。将最前卫、最理性的抽象艺术，放入最古老、最感性的悬空建筑之中，产生了奇妙的化学反应。胡安·格里斯、安东尼·塔皮埃斯等大师的作品，在有着粗糙石墙和古老木梁的空间里呼吸，窗户外就是令人眩晕的峡谷。历史与当代，具象的危险与抽象的内省，在此完美对话。悬空之屋因此获得了第二次生命，并且这一次，它的意义超越了昆卡，成为了整个西班牙现代文化复兴的一个标志性舞台。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`深度游览悬空之屋，精髓在于“由远及近，由外至内”的节奏感。强烈建议在上午9点前抵达，此时旅游团尚未涌入，晨光正温柔地照亮峡谷东侧的建筑立面，是拍照和感受宁静氛围的黄金时间。整体游览需预留至少3-4小时。先从远处宏观把握它的惊险与壮美，再走近触摸其肌理，最后进入内部，在抽象艺术与悬崖景观的双重冲击下完成体验。这样的安排能让你逐步沉浸，层层剥开这个奇迹的多重含义，而不只是匆匆一瞥。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`峡谷小径部分湿滑且无护栏，务必穿着防滑耐磨的徒步鞋，有恐高症的朋友量力而行。
博物馆内部空间有限且阳台承重人数严格控制，若遇旅行团高峰期（通常上午11点后），体验会大打折扣，强烈建议早到。
昆卡老城道路全是陡峭的上下坡石板路，拖着大行李箱会是一场噩梦，建议将大件行李寄存在山下火车站或停车场。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从老城入口的玛约尔广场出发，沿着布满鲜花阳台的狭窄巷子“Calle Alfonso VIII”向下漫步，让悬空之屋作为远景时隐时现地勾引你的好奇心。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`务必走上横跨峡谷的圣帕布罗铁桥，在桥中央停步，转过身来面对峡谷，让那三栋悬空之屋连同背后的整个昆卡古城悬崖全景，如一幅磅礴的立体画卷在你眼前展开。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走下铁桥，沿着“Hoz del Huécar”小径下到峡谷半腰，抬头仰望，从这个虫子般的视角感受悬崖和房屋底部岩石狰狞的压迫感与共生关系。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回到房屋脚下，用手触摸那些被数个世纪风雨打磨得冰凉光滑的石灰岩墙基，仔细辨认不同年代修补的痕迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从正门进入西班牙抽象艺术博物馆，不要急着看画，先径直穿过展厅走到最里面的阳台，屏住呼吸，站上那悬空的木板，让峡谷的风直接拥抱你。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在博物馆内缓慢游走，刻意寻找那些将抽象画框与窗外实景峡谷并置的瞬间，体会艺术与自然在此地的终极对话。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观结束后，到悬空屋正对面悬崖上的“Parador de Cuenca”国营古堡酒店咖啡馆，点一杯咖啡，坐在露台上，看着光影在建筑立面上移动，直到日落将它染成玫瑰金色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣帕布罗铁桥中段全景位`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，阳光侧射建筑立面，使用广角镜头将铁桥索链作为前景框架，拍摄悬空屋与整个古城悬崖的壮丽全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`峡谷底部仰拍压迫视角`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点至中午，阳光能照亮部分峡谷底部，站在韦卡尔河旧河床小径上，用长焦镜头压缩空间，聚焦房屋底部嶙峋的岩石与木结构支撑的细节。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`博物馆内部阳台剪影`}</h4>
                  <p className="text-sm text-gray-700">{`下午室内光线较暗时，让同伴站在阳台门框处形成剪影，以窗外明亮的峡谷风光为背景，拍出人物与险境交融的戏剧性瞬间。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`Parador酒店露台黄昏长焦`}</h4>
                  <p className="text-sm text-gray-700">{`日落时分，从酒店露台用长焦镜头捕捉最后一缕金光染红建筑木窗和石墙的温暖色调，并等待古城灯光初亮时的蓝调时刻。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`峡谷内风大，使用长曝光拍摄水流或云彩时务必使用稳固的三脚架并注意防风。`}</li>
                <li>• {`尊重博物馆规定，室内拍摄艺术品通常禁止使用闪光灯和三脚架，以不干扰其他游客为前提。`}</li>
                <li>• {`无人机飞行在古城及自然保护区上空有严格限制，起飞前务必查清当地法规，通常禁止在历史建筑上空飞行。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`极致体验之选`}</h4>
                  <p className="text-sm text-blue-800">{`直接入住由16世纪圣帕布罗修道院改造的Parador de Cuenca国营古堡酒店，房间的窗户就是观赏悬空之屋的专属VIP包厢，在阳台上就能迎接峡谷的日出。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色民宿之选`}</h4>
                  <p className="text-sm text-green-800">{`老城内由百年石屋精心修复的精品民宿，裸露的石墙、古老的木梁配上现代设计家具，主人会为你手绘最地道的古城探索地图，并推荐连指南书上都没有的隐秘视角。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`经济实惠之选`}</h4>
                  <p className="text-sm text-yellow-800">{`位于新城（下城）的舒适家庭旅馆或设计酒店，价格亲民，步行上山至老城约20分钟，既能享受便利设施，又能每日体验从现代都市步入中世纪秘境的穿越感。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`隐居自然之选`}</h4>
                  <p className="text-sm text-purple-800">{`峡谷对岸山坡上的乡间小屋，被松林和橄榄树环绕，拥有无敌的、毫无遮挡的悬空屋侧面全景，适合自驾者追求绝对的宁静与星空。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿（尤其是Parador）极为抢手，务必提前数月预订，且车辆通常无法直达门口，需在指定停车场卸货后由酒店电瓶车接送。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`昆卡昼夜温差大，即使夏季，夜晚峡谷风也凉，选择有老式壁炉或供暖充足的住宿会极大提升幸福感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`住在老城意味着晚上九点后街道会异常安静，只有风声和偶尔的教堂钟声，是真正逃离喧嚣的沉浸式体验。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开昆卡很久以后，那悬在空中的房子还会时不时地出现在脑海里。它带来的震撼，并非巴黎铁塔那种直白的雄伟，也不是梵蒂冈那种厚重的神圣。它是一种 lingering feeling，一种萦绕不去的疑问和启示。它让你反复思考：家的边界在哪里？安稳与冒险真的是对立面吗？或许，人类最深刻的创造力和安全感，恰恰诞生于对深渊的凝视之中，诞生于在极限处找到平衡点的微妙艺术里。悬空之屋就是这种哲学的石头宣言。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求四平八稳、效率至上的世界，昆卡的这份“危险的诗意”显得尤为珍贵。它提醒我们，美可以诞生于不便，伟大可以源于实用，而永恒可能恰恰建立在看似最不稳固的基础之上。它不仅仅是一处景点，更是一堂关于勇气、适应力和想象力的生动课程。每一位热爱深度游的旅人，都应该来这里站一站，感受一下脚下虚空带来的轻微眩晕，然后回头看看那座稳稳立了数百年的房子。你会带走的不只是一张照片，而是一种全新的、看待生活与可能性的视角——有时候，向前迈出那一步，悬于空中，恰恰是找到最坚实自我的开始。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bishop-palace-of-astorga" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿斯托加主教宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bishop's Palace of Astorga</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/san-vicente-avila" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿维拉圣文森特教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">San Vicente Ávila</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/zamora-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨莫拉大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Zamora Cathedral</p>
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
