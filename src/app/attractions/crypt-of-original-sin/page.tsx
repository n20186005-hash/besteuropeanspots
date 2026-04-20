import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '原罪地穴 Crypt of Original Sin｜探访马泰拉石窟壁画中的“西斯廷教堂” - 最佳欧洲景点',
  description: '车子在巴斯利卡塔赭红色的荒原上颠簸，窗外是成片的橄榄树林和孤独的石头农舍。当你开始怀疑导航是否出错时，向导会在一处毫不起眼的铁丝网门前停下。推开门，走下几级粗糙的石阶，一股凉意混合着泥土与古老岩石的气息扑面而来，瞬间将南意酷热的阳光隔绝在外。你的眼睛需要几秒钟来适应昏暗，然后，一个震撼的景象便缓缓浮...',
}

export default function CryptOfOriginalSinPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '原罪地穴', href: '/attractions/crypt-of-original-sin' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`原罪地穴・Crypt of Original Sin・意大利・巴斯利卡塔大区（位于马泰拉省，毗邻格拉维纳因普利亚镇）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在巴斯利卡塔赭红色的荒原上颠簸，窗外是成片的橄榄树林和孤独的石头农舍。当你开始怀疑导航是否出错时，向导会在一处毫不起眼的铁丝网门前停下。推开门，走下几级粗糙的石阶，一股凉意混合着泥土与古老岩石的气息扑面而来，瞬间将南意酷热的阳光隔绝在外。你的眼睛需要几秒钟来适应昏暗，然后，一个震撼的景象便缓缓浮现。
这不是一个宏伟的大教堂，而是一个狭长低矮的石窟，长约八米，宽不足三米。但就在这朴素的岩壁上，覆盖着让你屏住呼吸的璀璨色彩。时间在这里仿佛凝固了一千年。壁画的主角并非圣人，而是《创世纪》的故事。右手边的墙壁上，栩栩如生地描绘着伊甸园的景象：上帝正将生命之气吹入亚当的鼻孔，亚当斜倚着，神情初醒般的懵懂；夏娃则从亚当的肋下诞生，姿态柔美。最惊人的是那棵“分别善恶的树”，枝叶间盘绕着一条有着人类面孔的狡猾蛇，它正与夏娃对话，画面充满了戏剧性的张力。
空气是静止而湿润的，你能听到自己细微的呼吸声，偶尔还有岩壁深处渗出的水珠滴落声，像古老的时钟。光线仅来自入口和几个巧妙的小通风口，尘埃在光柱中舞蹈，照亮壁画上依然鲜艳的朱红、赭石和青绿色。颜料是用矿物和植物混合着蛋清绘制在打磨过的岩壁上的，历经千年，许多人物的眼神依然清澈明亮，衣纹流畅生动。站在这里，你立刻明白了“西斯廷教堂”这个比喻并非夸张——这不是规模上的比较，而是艺术感染力与神性表达的等量齐观。这里没有游客的喧嚣，只有你与一千年前那位无名画师透过时光的凝视。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在巴斯利卡塔赭红色的荒原上颠簸，窗外是成片的橄榄树林和孤独的石头农舍。当你开始怀疑导航是否出错时，向导会在一处毫不起眼的铁丝网门前停下。推开门，走下几级粗糙的石阶，一股凉意混合着泥土与古老岩石的气息扑面而来，瞬间将南意酷热的阳光隔绝在外。你的眼睛需要几秒钟来适应昏暗，然后，一个震撼的景象便缓缓浮现。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这不是一个宏伟的大教堂，而是一个狭长低矮的石窟，长约八米，宽不足三米。但就在这朴素的岩壁上，覆盖着让你屏住呼吸的璀璨色彩。时间在这里仿佛凝固了一千年。壁画的主角并非圣人，而是《创世纪》的故事。右手边的墙壁上，栩栩如生地描绘着伊甸园的景象：上帝正将生命之气吹入亚当的鼻孔，亚当斜倚着，神情初醒般的懵懂；夏娃则从亚当的肋下诞生，姿态柔美。最惊人的是那棵“分别善恶的树”，枝叶间盘绕着一条有着人类面孔的狡猾蛇，它正与夏娃对话，画面充满了戏剧性的张力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`空气是静止而湿润的，你能听到自己细微的呼吸声，偶尔还有岩壁深处渗出的水珠滴落声，像古老的时钟。光线仅来自入口和几个巧妙的小通风口，尘埃在光柱中舞蹈，照亮壁画上依然鲜艳的朱红、赭石和青绿色。颜料是用矿物和植物混合着蛋清绘制在打磨过的岩壁上的，历经千年，许多人物的眼神依然清澈明亮，衣纹流畅生动。站在这里，你立刻明白了“西斯廷教堂”这个比喻并非夸张——这不是规模上的比较，而是艺术感染力与神性表达的等量齐观。这里没有游客的喧嚣，只有你与一千年前那位无名画师透过时光的凝视。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`原罪地穴`} />
                <InfoRow label="英文名称" value={`Crypt of Original Sin`} />
                <InfoRow label="正式名称" value={`Crypt of Original Sin`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`巴斯利卡塔大区（位于马泰拉省，毗邻格拉维纳因普利亚镇）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`被誉为“石窟壁画中的西斯廷教堂”，是意大利南部早期中世纪洞穴绘画最重要、最完整的典范之一。`} />
                <InfoRow label="建筑特色" value={`一座公元九世纪在天然石灰岩中人工开凿出的地下礼拜堂，以其保存异常完好、色彩鲜艳的拜占庭-伦巴第风格壁画群而震惊世界。`} />
                <InfoRow label="建筑风格" value={`早期中世纪洞穴建筑与拜占庭风格壁画艺术的结合体。`} />
                <InfoRow label="文化价值" value={`是理解公元8-9世纪意大利南部本笃会修士隐修生活、神学思想以及拜占庭艺术在西地中海传播的独一无二的窗口。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`参观严格限于预约制，由授权导游带领的小型团队方可进入。通常每天有2-3个固定时段（例如上午10点、下午3点），每次参观约45分钟。必须提前至少48小时通过当地指定的旅行社或文化遗产网站进行预约。冬季（11月至次年2月）开放时段可能减少，夏季可能增加傍晚场次。每周一和主要宗教节日通常关闭。`} />
              <InfoRow label="门票价格" value={`综合票价（含强制导游服务）约为25欧元/人。优惠票价（学生、65岁以上老人）约为20欧元/人。6岁以下儿童可能免费，但需提前确认。门票费用包含从格拉维纳因普利亚镇指定集合点至地穴的往返交通（约15分钟车程）。不接受现场购票。`} />
              <InfoRow label="地址" value={`Strada Provinciale 157, 75024 Gravina in Puglia, Province of Matera, Italy`} />
              <InfoRow label="交通方式" value={`最近的国际机场是巴里国际机场（BRI），驾车约1小时20分钟可达格拉维纳因普利亚镇。从巴里中央火车站可乘坐区域火车至格拉维纳站（车程约1小时，班次不密集，建议提前查时刻表）。最方便的方式是自驾：从马泰拉（Sassi区）出发，沿SS7公路向西北行驶约20公里，转入SP157公路，根据棕色旅游标识“Cripta del Peccato Originale”行驶至荒原中的指定停车场。地穴本身位于偏远农田区域，无公共交通直达，必须参加有组织的团队。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`原罪地穴的身世，就像它所在的山岩一样，曾被漫长的尘埃与遗忘所覆盖。它建于公元九世纪左右，那个时期，意大利南部处于拜占庭帝国、伦巴第人以及后来的诺曼人势力交织的复杂地带。大量的希腊裔修道士为了逃避东方的圣像破坏运动，或追求苦修生活，纷纷来到这片多山的荒原。他们效仿早期沙漠教父，在柔软的凝灰岩中开凿出一个又一个的“石窟教堂”，作为祈祷、冥想的密室。原罪地穴，很可能是当时某个小型本笃会修院或隐士的核心礼拜场所。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的壁画主题选择极具深意。在当时的宗教语境下，描绘《创世纪》中“原罪”的故事，并非简单的圣经图解，而是包含着深刻的忏悔与救赎神学。对于在此苦修的修士而言，每日面对人类堕落的开端，是对自身罪性的不断警醒，也是对上帝救恩的深切渴望。壁画风格清晰地显示了拜占庭艺术的深刻影响——人物严肃的面容、大而深邃的眼睛、象征性的姿态，以及金色背景的使用（尽管大部分金箔已脱落）。但同时，也融入了更活泼、更富叙事性的拉丁元素，形成了独特的“拜占庭-伦巴第”风格。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然后，便是长达千年的沉睡。不知何时，修士们离开了，这个石窟被附近的农民用作羊圈和储物地。羊群的蹭蹭、柴火的烟熏、以及岁月本身的灰尘，层层覆盖在了壁画之上。讽刺的是，正是这层“污垢”，在一定程度上保护了颜料免受光照和空气的直接侵蚀。它彻底淡出了人类的历史记忆，只在当地一些老人的口中，隐约流传着“那个画着古画的山洞”的模糊说法。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机发生在1963年。一群来自马泰拉的洞穴学爱好者和艺术史学家，根据零星的线索，在荒原中重新发现了它。当专家们小心翼翼地清理掉表面的积垢时，整个学术界为之震动。壁画的保存完好程度、艺术水准以及完整的叙事序列，都是前所未有的发现。它被迅速地命名为“原罪地穴”，并因其无可估量的价值，被小心翼翼地保护和研究起来。修复工作持续了多年，专家们使用最微创的技术稳定岩体，加固颜料层，但坚决拒绝任何“添笔”或过度修复，最大限度地保留了其原始的历史质感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天，当你站在洞中，依然可以看到部分壁画边缘因早期不当接触造成的轻微磨损，以及烟火熏黑的淡淡痕迹。但这些非但不是瑕疵，反而成了它千年生命历程的见证者。它从神圣的礼拜堂，沦为实用的农舍，再重生为人类共同的艺术瑰宝，其本身就是一部跌宕起伏的史诗。那位留下如此杰作却未曾留下姓名的画师，或许从未想过，他的作品能在沉寂千年后，再度照亮世人的眼睛。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`这是一次需要精心策划的“朝圣”之旅，而非即兴的游览。强烈建议你将参观安排在上午的第一个时段（通常是10点）。原因有三：一是上午的光线从东侧入口斜射入内，能更好地照亮部分壁画细节；二是避开南意午后最炎热的时段，往返徒步和洞穴内体验都更舒适；三是能有更充足的时间在参观后，在周边荒原静静回味。整体体验耗时约2-2.5小时（含从集合点往返交通）。游览节奏是缓慢而专注的，地穴内部仅能停留约30-40分钟，每一分钟都需珍惜。参观前后，留些时间在停车场附近的高地驻足，眺望这片孕育了奇迹的苍凉而壮丽的石灰岩地貌。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿着绝对舒适、防滑的步行鞋，最后一段土路可能有碎石和小坡度。
洞内恒温约15-17度，且湿度较高，与外界温差大，建议带一件薄外套。
内部禁止触摸任何岩壁，禁用闪光灯，且空间极为有限，务必紧跟导游，勿擅自行动。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`提前至少15分钟抵达格拉维纳因普利亚镇指定的集合点，向导游报到并核对预约信息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`乘坐专属的小型接驳车，在导游的讲解中穿越橄榄园与葡萄园，驶向那片隐藏着秘密的荒原。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在指定的简陋停车场下车，跟随导游步行约200米松软土路，走向那个毫无标志、仿佛天然形成般的山岩入口。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`弯腰进入低矮的洞口，在那一瞬间让感官完全沉浸于扑面而来的清凉、幽暗与寂静之中。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在导游手电筒的专业指引下，首先将目光投向右侧墙壁，从“上帝创造亚当”开始，逐幅阅读这部绘制在岩石上的《创世纪》连环画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`仔细端详中央拱壁上的三位大天使，感受其庄严的拜占庭式面容与依然华丽的服饰色彩。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`转身观察入口左侧墙壁上较少被提及的使徒与圣徒像，思考其在整个神学叙事中的补充作用。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在导游示意结束前，用最后片刻，关闭手电，在完全的静谧与微光中，尝试用心灵去触碰这片空间沉淀了千年的祈祷能量。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`地穴内部绝对禁止使用手机和相机拍照，这是铁律，为了永久保护脆弱的颜料。此处的拍照点均指外部。`}</h4>
                  <p className="text-sm text-gray-700">{`地穴内部绝对禁止使用手机和相机拍照，这是铁律，为了永久保护脆弱的颜料。此处的拍照点均指外部。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`全景环境机位`}</h4>
                  <p className="text-sm text-gray-700">{`在停车场附近的一处小高坡上，下午日落前半小时，以广角镜头拍摄地穴所在的整个石灰岩山体与荒原地貌，可收录橄榄树作为前景，展现其隐蔽与孤寂感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`入口记录机位`}</h4>
                  <p className="text-sm text-gray-700">{`参观结束后，在洞口外的自然光下，可请同伴为你拍摄一张弯腰即将进入或刚刚出来的背影，捕捉“探索秘境”的瞬间感，注意调整角度避开现代设施。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`诗意细节机位`}</h4>
                  <p className="text-sm text-gray-700">{`聚焦洞口周围自然生长的野花、荆棘或是岩石的特殊纹理，利用大光圈虚化背景，隐喻“生命从坚石中绽放”，呼应壁画的主题。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重并严格遵守室内禁止摄影的规定，这是对文化遗产最基本的保护。外部的拍摄也请保持安静，勿干扰其他参观者。无人机飞行在该区域可能受限，需提前查询当地法规。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`基石小镇体验`}</h4>
                  <p className="text-sm text-blue-800">{`下榻格拉维纳因普利亚镇中心由古老石屋改造的精品旅馆，晚上在阳台上能看到远处隐匿地穴的山丘轮廓，清晨被教堂钟声和咖啡香唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`史诗感之城基座`}</h4>
                  <p className="text-sm text-green-800">{`选择住在20公里外的世界文化遗产马泰拉“萨西”石屋酒店，白天探索千年石穴城市，对比感受地下与地上石窟文明的交响，夜晚石屋的寂静与地穴的深邃遥相呼应。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`田园隐居之选`}</h4>
                  <p className="text-sm text-yellow-800">{`预订地穴所在荒原附近的几家由古老农舍“Masseria”改造的庄园民宿，享受绝对的宁静，在星空下品尝农场自产的橄榄油和葡萄酒，完全融入这片土地的气息。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`便捷城市门户`}</h4>
                  <p className="text-sm text-purple-800">{`若追求交通便利，可选择巴里市中心的设计酒店，以现代舒适结束一天的艺术朝圣之旅，并方便衔接后续的普利亚大区行程。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`马泰拉的住宿在旅游旺季（5-9月）极其紧俏，必须提前数月预订。格拉维纳镇的住宿更为原生态和安静。选择农庄住宿意味着你需要有车，且夜晚周边没有任何商业设施，准备好享受真正的隐居。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`走出原罪地穴，重新回到意大利南部炽热的阳光下，会有一种强烈的眩晕感，仿佛刚刚进行了一场短暂的时间旅行。那一刻，现代世界的喧嚣与速度感显得如此虚浮。这个小小的、隐藏在荒芜之地下的石室，用它极致的寂静与绚烂，向你揭示了一个深刻的真相：伟大往往不在于规模与声势，而在于专注的深度与穿越时间的力量。那位无名画师在黑暗中，凭借信仰的火把，一笔一划创造出的世界，比许多金碧辉煌的大教堂更直击心灵。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个人人追逐网红打卡点、旅行变得浮光掠影的时代，原罪地穴的存在是一种温柔的抵抗。它要求你付出努力：提前规划、长途跋涉、遵守严格的规则。但正是这些“门槛”，过滤了喧嚣，成全了一次真正深度的相遇。它提醒我们，旅行最珍贵的收获，不是拍下的照片，而是那种能让内心变得沉静、让感知变得敏锐的震撼。当你站在那幅人类面孔的蛇与夏娃对话的壁画前，你看到的不仅是宗教故事，更是人类永恒的好奇心、选择与命运的原型。每一位热爱深度游的旅人，都应该来这里上一课——关于历史的分量、艺术的尊严，以及在一片看似荒凉的土地下，可能埋藏着怎样照亮灵魂的星光。这不仅仅是一次观光，这是一次对“看见”这个词的重新定义。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bovino-historic-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博维诺古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bovino</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/modica-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莫迪卡老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Modica Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/norcia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    诺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">诺奇古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Norcia</p>
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
