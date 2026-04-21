import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡斯泰尔德尔蒙特 Castel del Monte｜腓特烈二世的神秘八角形城堡 - 最佳欧洲景点',
  description: '车子在普利亚无边无际的橄榄树银海中穿行，当那座城堡突然出现在一座柔和的山丘之巅时，你一定会忍不住发出惊叹。它不是你想像中那种童话式的、拥有许多尖塔的城堡，而是一个巨大、精准、孤独的几何形体。在意大利南部炽烈得近乎白色的阳光下，它由本地石灰岩筑成的墙体，闪烁着一种蜂蜜色与淡金色交织的光芒，庄严而沉默，...',
}

export default function CastelDelMontePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '普利亚大区安德利亚市附近', href: '/destinations/italy' },
            { label: '卡斯泰尔德尔蒙特', href: '/attractions/castel-del-monte' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卡斯泰尔德尔蒙特・Castel del Monte・意大利・普利亚大区安德利亚市附近`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在普利亚无边无际的橄榄树银海中穿行，当那座城堡突然出现在一座柔和的山丘之巅时，你一定会忍不住发出惊叹。它不是你想像中那种童话式的、拥有许多尖塔的城堡，而是一个巨大、精准、孤独的几何形体。在意大利南部炽烈得近乎白色的阳光下，它由本地石灰岩筑成的墙体，闪烁着一种蜂蜜色与淡金色交织的光芒，庄严而沉默，像一个来自异次元的庞然大物，静静地搁置在这片古老的土地上。
停好车，沿着小路向上走，周围的空气里弥漫着野生茴香和晒热的石头气味。蝉鸣是这里唯一的背景音，巨大而持续，更衬托出城堡周遭那种近乎神圣的寂静。走近了，你才会真正感受到它那令人屏息的几何力量。八个角，八面墙，八座塔楼，一切都在重复“八”这个数字。它没有护城河，没有防御性的外堡，甚至没有像样的马厩。它的入口是一座精美的哥特式门廊，与其说欢迎战士，不如说在欢迎学者。站在门前，你会恍惚觉得，这不像一个为了战争而生的堡垒，更像一个为了某种盛大仪式或深邃思考而建造的圣殿。
进入城堡内部，一股凉意瞬间包裹了你，那是石头积蓄了数百年的阴凉。阳光通过狭窄的窗户射入，在空旷的地板上切割出锐利的光斑。内部同样是两层八角形结构，围绕着一个同样八角形的中庭。房间是梯形的，相互连接。这里空无一物，没有家具，没有壁画，只有石头。但这种“空”恰恰构成了它最大的魔力。你的脚步声在拱顶下回响，你的想象力开始疯狂填充这个空间——腓特烈二世是否曾在这里与来自阿拉伯和犹太的学者辩论星象？那些消失的大理石装饰和华丽地板，当年究竟是怎样一番光景？这种空虚感，迫使你去倾听石头自己的故事。
如今，这座城堡是当地人心中的骄傲与谜团。你会看到一些老人坐在远处树荫下，远远望着它，就像望着一个他们永远无法完全理解却深深敬畏的老朋友。它不融入日常生活的喧嚣，它永远保持着距离，像一个永恒的坐标，提醒着人们这片土地曾见证过一个多么非凡、多么“超前”的时代和人物。它的核心魅力，正是这种结合了数学理性之美与历史神秘主义的、近乎诡异的吸引力。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在普利亚无边无际的橄榄树银海中穿行，当那座城堡突然出现在一座柔和的山丘之巅时，你一定会忍不住发出惊叹。它不是你想像中那种童话式的、拥有许多尖塔的城堡，而是一个巨大、精准、孤独的几何形体。在意大利南部炽烈得近乎白色的阳光下，它由本地石灰岩筑成的墙体，闪烁着一种蜂蜜色与淡金色交织的光芒，庄严而沉默，像一个来自异次元的庞然大物，静静地搁置在这片古老的土地上。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`停好车，沿着小路向上走，周围的空气里弥漫着野生茴香和晒热的石头气味。蝉鸣是这里唯一的背景音，巨大而持续，更衬托出城堡周遭那种近乎神圣的寂静。走近了，你才会真正感受到它那令人屏息的几何力量。八个角，八面墙，八座塔楼，一切都在重复“八”这个数字。它没有护城河，没有防御性的外堡，甚至没有像样的马厩。它的入口是一座精美的哥特式门廊，与其说欢迎战士，不如说在欢迎学者。站在门前，你会恍惚觉得，这不像一个为了战争而生的堡垒，更像一个为了某种盛大仪式或深邃思考而建造的圣殿。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`进入城堡内部，一股凉意瞬间包裹了你，那是石头积蓄了数百年的阴凉。阳光通过狭窄的窗户射入，在空旷的地板上切割出锐利的光斑。内部同样是两层八角形结构，围绕着一个同样八角形的中庭。房间是梯形的，相互连接。这里空无一物，没有家具，没有壁画，只有石头。但这种“空”恰恰构成了它最大的魔力。你的脚步声在拱顶下回响，你的想象力开始疯狂填充这个空间——腓特烈二世是否曾在这里与来自阿拉伯和犹太的学者辩论星象？那些消失的大理石装饰和华丽地板，当年究竟是怎样一番光景？这种空虚感，迫使你去倾听石头自己的故事。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如今，这座城堡是当地人心中的骄傲与谜团。你会看到一些老人坐在远处树荫下，远远望着它，就像望着一个他们永远无法完全理解却深深敬畏的老朋友。它不融入日常生活的喧嚣，它永远保持着距离，像一个永恒的坐标，提醒着人们这片土地曾见证过一个多么非凡、多么“超前”的时代和人物。它的核心魅力，正是这种结合了数学理性之美与历史神秘主义的、近乎诡异的吸引力。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卡斯泰尔德尔蒙特`} />
                <InfoRow label="英文名称" value={`Castel del Monte`} />
                <InfoRow label="正式名称" value={`Castel del Monte`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`普利亚大区安德利亚市附近`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座由神圣罗马帝国皇帝腓特烈二世于13世纪建造的城堡，是意大利最具象征意义和神秘色彩的中世纪建筑之一，于1996年被联合国教科文组织列为世界文化遗产。`} />
                <InfoRow label="建筑特色" value={`其最核心的特色是完美、纯粹的八角形平面布局，以及城堡主体八个角上各耸立着的八角形塔楼，形成一种令人着迷的几何重复与对称。`} />
                <InfoRow label="建筑风格" value={`它独特地将罗马式的厚重、哥特式的尖拱与伊斯兰建筑的精巧数学几何，以及古典的装饰元素融合在一起，形成一种无法被单一风格定义的“腓特烈式”风格。`} />
                <InfoRow label="文化价值" value={`它超越了单纯的军事防御功能，是中世纪一位“世界惊奇”的皇帝——腓特烈二世其知识、权力与神秘主义追求的终极物质体现，被誉为“王冠上的宝石”和一座“石质的谜语”。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`夏季（通常为4月1日至9月30日）开放时间为上午10:15至晚上7:45，最晚入场时间为晚上7:00。冬季（10月1日至3月31日）开放时间为上午9:00至傍晚6:30，最晚入场时间为傍晚5:45。每周三闭馆（除非是法定节假日）。具体开放时间可能因季节调整，圣诞节和元旦全天关闭，建议出发前在其官网或当地旅游局网站确认最新信息。`} />
              <InfoRow label="门票价格" value={`全票价格为7欧元。欧盟公民年龄在18至25岁之间可享受优惠票，价格为2欧元。18岁以下及65岁以上的欧盟公民、残障人士及其陪同者可免费入场。每月第一个周日对所有游客免费开放。门票可在现场购买，旺季时建议通过官方网站提前预订以避免排队。`} />
              <InfoRow label="地址" value={`Strada Statale 170， 70031 Andria BT， Italy`} />
              <InfoRow label="交通方式" value={`最近的国际机场是巴里卡罗尔·沃伊蒂瓦机场，从机场出发，最便捷的方式是先乘坐机场大巴或火车到巴里中央火车站，车程约30分钟。从巴里中央火车站，你可以乘坐私营的Ferrovie del Nord Barese铁路线前往安德利亚火车站，车程约1小时，班次大约每小时一班。到达安德利亚后，前往城堡的公共交通选择有限且班次稀疏，最实际的方式是：1）在火车站前乘坐出租车，单程约20-25欧元，车程20分钟；2）提前预订当地的导游兼司机服务；3）在巴里或安德利亚租车自驾，沿SS170公路行驶，有明显的棕色旅游标志指引，这是最推荐的方式，可以自由掌控时间并欣赏沿途的橄榄园风光。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解这座城堡，你必须先认识它的建造者——腓特烈二世。他被同时代人称为“世界惊奇”，是一个真正的文艺复兴人在中世纪的提前诞生。作为神圣罗马帝国皇帝兼西西里国王，他成长于文化交融的巴勒莫宫廷，精通六种语言（包括阿拉伯语），对科学、哲学、法律和猎鹰训练术都抱有极大的热情。他挑战教皇的权威，进行十字军东征却不通过战争而是谈判拿回了耶路撒冷（因此被教皇斥为“反基督者”）。他是一个矛盾的综合体：基督教世界的皇帝，却深深着迷于伊斯兰与古典世界的智慧。卡斯泰尔德尔蒙特，就是他这种复杂人格与世界观最极致的建筑表达。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡大约建于1240年至1250年之间，正值腓特烈二世权力的巅峰时期。关于他为何要在这里，以这种形式建造它，历史上没有留下任何明确的文件记载，这给后世留下了无穷的猜测。它不是建在战略要地，周边也没有重要的城镇需要守卫。一种浪漫的推测认为，这里曾是他心爱的猎鹰饲养地，城堡是他奢华的狩猎行宫。另一种更引人入胜的理论，则将它视为一个巨型的“石头仪器”。学者们发现，城堡的方位、门窗的布局，在春分、秋分等特定日子里，能与阳光形成奇妙的光影对应。它可能是一个庞大的天文观测站，是这位皇帝探索宇宙秩序的实验室。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`腓特烈二世于1250年去世，城堡的建造可能在他死后才彻底完成。随着他的离世，他的帝国迅速分崩离析，这座充满象征意义的城堡也迅速失去了它的主人和灵魂。在随后的几个世纪里，它被遗忘、被掠夺。大理石的内饰、华丽的地板、甚至门窗的金属构件都被拆除，运往别处。它一度成为贵族家族的财产，也曾被用作牧羊人的避难所和土匪的藏身地。在十七世纪，它甚至不幸地成了一所监狱。数百年的荒废与挪用，掏空了它的内在，却奇迹般地保留了它骨骼般清晰而坚强的外部结构。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到1876年，意大利国家才从私人手中购回了这座已被严重损毁的城堡，开始了漫长的修复工程。修复者们小心翼翼地加固墙体，清理累积的杂物，但决定不进行任何主观的重建或装饰添加。他们选择保留这种“空白”的状态，因为这种状态本身就是历史的一部分。二十世纪的考古研究与学术探讨，逐渐揭开了它与腓特烈二世深刻的精神联结。1996年，联合国教科文组织认可了它作为人类创造性天才杰作的价值，以及它作为中世纪世俗建筑独特见证的地位，将其列入世界遗产名录。从此，它从普利亚乡野的一个奇观，变成了全世界旅人追寻神秘与美的一个目的地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天，我们面对的这座城堡，既是原初设计惊人的完整性留存，也是数世纪沧桑变化的忠实记录者。它的每一块石头上，都同时镌刻着腓特烈二世惊人的前瞻性幻想，以及时间无情的、将其还原为最本质几何形态的朴素力量。这种双重性，正是它令人着迷的根源。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受卡斯泰尔德尔蒙特的魔力，请务必安排至少3到4个小时。最佳抵达时间是清晨开门后不久，或下午闭馆前3小时。清晨光线柔和，游客稀少，你能独享城堡的静谧；下午则能捕捉到光线斜射产生的长长影子，几何感更强。建议的节奏是“由远及近，由外至内”：先在周边远观，建立整体印象；然后走近环绕，体会其体量与细节；接着进入内部，感受空间的魔力与“空无”；最后回到外部，在夕阳下回味。自驾是最佳选择，可以自由掌控时间。请务必穿着舒适耐走的鞋，因为城堡内外都是石质地面，且上下楼梯较多。带上水，夏季城堡内凉爽但周边毫无遮蔽，非常炎热。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避免在盛夏的正午时分进行外部游览，普利亚的阳光极其猛烈且毫无遮挡，极易中暑。城堡内部严禁使用三脚架和自拍杆进行商业拍摄，个人简单拍照通常被允许，但务必尊重规定。内部没有任何商店或咖啡馆，最近的餐饮点也在数公里外的镇上，请提前备好饮用水和少许零食。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在远处停车场，先不要急着上山，站在原地从各个角度仰视这座雄踞于山丘之上的孤独的八角形皇冠。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着环绕城堡的小径缓缓上行，用手触摸那被八百年风吹日晒打磨得温润而粗糙的石灰岩墙壁，感受石头的温度与纹理。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从那个装饰着古典元素和哥特式尖拱的主入口进入，让眼睛适应从明亮到幽暗的光线变化，体会第一眼看到空旷八角形中庭的震撼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着石质旋梯爬上二楼，在每一个面向外的梯形房间的窗口驻足，从这些狭窄的“取景框”向外眺望普利亚平原上延绵至天边的橄榄园与农庄。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在二楼环绕中庭的廊道上，抬头凝视那高耸的、同样以八角形收束的拱顶，倾听自己脚步的回声与其他游客隐约的私语在空间中混合。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走下楼梯，回到入口层，找一个阳光能透过窗户在地上投下完美光斑的角落，静静地坐一会儿，任由想象力填充这个被掏空的空间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开城堡内部，绕到它的背面或侧面，在下午逐渐变得金黄的光线下，寻找一个能看到城堡完整八角形轮廓与长长阴影的角度，做最后的告别与凝视。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡东南侧约300米处的橄榄园中`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，低角度的阳光会给城堡的石灰岩墙体染上浓郁的金色或玫瑰色，用广角镜头将前景的橄榄树与城堡一同纳入画面，构成经典的普利亚风景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主入口门廊正前方`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点左右，阳光能较好照亮门廊的雕刻细节，采用对称构图，将精美的哥特式拱门与深邃的门洞作为框架，拍出具有纵深感和神圣感的大门照片。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城堡二层某个面向西面的窗口`}</h4>
                  <p className="text-sm text-gray-700">{`下午傍晚时分，利用窗口本身作为天然画框，拍摄窗外如绿色海洋般铺展开的橄榄园景观，营造一种“窥探帝国视野”的意境。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`底层中庭的中心点抬头仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗的正午，阳光直射入中庭天井，此时站在正中心向上拍摄，可以完美捕捉八角形天空与周围三层拱廊构成的严谨几何结构，极具视觉冲击力。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城堡北面下方的山坡上`}</h4>
                  <p className="text-sm text-gray-700">{`日落时分，从这里可以拍摄到城堡清晰的、背光的黑色剪影，映衬在绚丽的晚霞背景中，突出其孤傲、神秘而永恒的气质。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内拍摄请绝对关闭闪光灯，强烈的闪光会损害古老的石材表面并影响其他游客的体验。无人机飞行在城堡上空有严格限制，通常被完全禁止，如需使用必须提前向意大利文化遗产部门申请特别许可，擅自飞行会面临高额罚款。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`安德利亚古城中心由古老石窟改造的B&B旅馆，房间保留了原始的拱形石顶，价格亲民，老板会热情地为你手绘一张本地美食地图。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`坐落在城堡视野范围内一片百年橄榄园中的“农庄住宿”，住在白色的特鲁利圆锥石屋里，清晨在鸟鸣和橄榄叶的沙沙声中醒来，直面旷野与城堡。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`位于古城安德利亚一座16世纪宫殿内的五星级精品酒店，拥有华丽的巴洛克风格内饰、一个宁静的庭院泳池和一家米其林推荐餐厅，是探索一天后完美的奢华避世所。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`独特隐居`}</h4>
                  <p className="text-sm text-purple-800">{`在更靠近海岸的马泰拉（世界文化遗产“石窟城”）选择一家悬崖上的洞穴酒店，体验截然不同的古老居住文化，驾车前往城堡也在一小时左右，可串联游览。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`普利亚的旅游旺季是6月至9月，住宿非常紧张且价格昂贵，建议至少提前2-3个月预订。选择安德利亚城内的住宿，晚上可以漫步迷人的老城区，品尝正宗的普利亚菜，如“耳朵面”（Orecchiette）和新鲜布拉塔奶酪。乡村住宿极为宁静，但晚间没有公共交通，且餐饮选择有限，适合自驾且追求完全静谧的旅客。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开卡斯泰尔德尔蒙特很久以后，它的形象依然会清晰地印在你的脑海里。那不是一张具体的照片，而是一种感觉——一种关于秩序、孤独与谜题的感觉。在这个一切都被过度解释、过度分享的世界里，这座城堡倔强地保持着自己的沉默。它不告诉你答案，只向你呈现一个完美到极致的几何问题。这种“留白”，恰恰是它给予现代旅人最珍贵的礼物：一个让想象力自由奔跑的空间，一次与自己内心对话的契机。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它提醒我们，旅行不仅仅是为了看到已知的美丽，更是为了去触碰那些无法被轻易理解的边缘。腓特烈二世试图用石头凝固他对宇宙的认知，而我们今天站在其中，感受到的却是人类求知欲的壮丽与局限。它像一座灯塔，不属于海洋，而属于时间的荒原。每一位热爱深度游的旅人都该来这里，不仅仅是为了一张instagram照片，更是为了亲身站在那个八角形的中心，感受历史的重力与神秘的低语，让自己从日常的琐碎中抽离出来，被一种更大的、超越时代的理性与浪漫同时击中。这是一生中为数不多的、能同时震撼你眼睛与心灵的场所。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/cividale-del-friuli" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奇
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奇维达莱德尔弗留利</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cividale del Friuli</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/alberobello-trulli" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔贝罗贝洛圆顶石屋</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alberobello</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ascoli-piceno-historic-center" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿斯科利皮切诺</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ascoli Piceno</p>
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
