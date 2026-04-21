import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奥古林 Ogulin｜探秘神话笼罩的中世纪城堡与地下裂谷入口 - 最佳欧洲景点',
  description: '你第一眼看到奥古林，可能会觉得它和克罗地亚其他宁静的内陆小镇没什么两样：红瓦屋顶，慵懒的广场，咖啡馆里飘出浓缩咖啡的香气。但只要你顺着任何一条小路往镇中心走，不用五分钟，一种奇异的违和感就会抓住你。空气突然变得清凉而潮湿，带着苔藓和深水特有的气息，一种低沉的、持续不断的轰鸣声从大地深处传来，不是听见',
}

export default function OgulinFrankopanCastleDobraGorgePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '奥古林', href: '/attractions/ogulin-frankopan-castle-dobra-gorge' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`奥古林・Ogulin・克罗地亚・奥古林`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼看到奥古林，可能会觉得它和克罗地亚其他宁静的内陆小镇没什么两样：红瓦屋顶，慵懒的广场，咖啡馆里飘出浓缩咖啡的香气。但只要你顺着任何一条小路往镇中心走，不用五分钟，一种奇异的违和感就会抓住你。空气突然变得清凉而潮湿，带着苔藓和深水特有的气息，一种低沉的、持续不断的轰鸣声从大地深处传来，不是听见，更像是通过脚底板感受到的震动。然后，弗兰科潘城堡就那样毫无预警地出现在你面前——不是建在山丘上，而是直接长在了一道大地裂缝的边缘。它的石基仿佛就是悬崖本身，往下看，是幽暗得吸走所有光线的深渊，那就是多布拉河裂谷的入口。站在这里，一半身体感受着中世纪石墙的干燥温热，另一半却被裂谷里涌上的寒气包裹，这种分裂感正是奥古林的灵魂。
走近城堡脚下，那轰鸣声具象成了奔腾的水声。裂谷入口像一张怪兽的巨口，将翡翠色的多布拉河吞入地底。水汽弥漫，在午后阳光斜射下形成小小的彩虹。当地人早已习惯了这种背景音，它就像小镇的心跳。你会看到老人们坐在不远处的长椅上聊天，孩子们在安全的围栏边好奇地张望，而裂谷的传说——关于悲伤的贵族小姐、关于被诅咒的爱情——就融在日常的柴米油盐里。对他们来说，这深渊不是景点，而是一个沉默的邻居，一个所有故事开始和结束的地方。卖明信片的老太太会指着城堡最高的那扇窗户，用夹杂着德语和意大利语词汇的克罗地亚语告诉你：“看，就是那里，我们的‘黑色女王’曾日夜凝望。”
奥古林最打动人心的，正是这种神话与地理现实的血肉交融。它不像那些被精心打捞、消毒后展示的历史遗址。在这里，传说是潮湿的，是有声音和气味的。城堡不只是石头垒成的权力象征，它因脚下那个深不见底的裂谷而变得忧郁、充满叙事性。你会理解为什么克罗地亚最伟大的作家之一伊万娜·布尔利奇-马祖拉尼奇会选择这里作为她奇幻故事的背景。走在鹅卵石街道上，你会不自觉地放慢脚步，竖起耳朵，仿佛在期待下一个转角，就会遇见从传说中走出的角色，或者，仅仅是更清晰地听到大地深处那条暗河的耳语。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你第一眼看到奥古林，可能会觉得它和克罗地亚其他宁静的内陆小镇没什么两样：红瓦屋顶，慵懒的广场，咖啡馆里飘出浓缩咖啡的香气。但只要你顺着任何一条小路往镇中心走，不用五分钟，一种奇异的违和感就会抓住你。空气突然变得清凉而潮湿，带着苔藓和深水特有的气息，一种低沉的、持续不断的轰鸣声从大地深处传来，不是听见，更像是通过脚底板感受到的震动。然后，弗兰科潘城堡就那样毫无预警地出现在你面前——不是建在山丘上，而是直接长在了一道大地裂缝的边缘。它的石基仿佛就是悬崖本身，往下看，是幽暗得吸走所有光线的深渊，那就是多布拉河裂谷的入口。站在这里，一半身体感受着中世纪石墙的干燥温热，另一半却被裂谷里涌上的寒气包裹，这种分裂感正是奥古林的灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走近城堡脚下，那轰鸣声具象成了奔腾的水声。裂谷入口像一张怪兽的巨口，将翡翠色的多布拉河吞入地底。水汽弥漫，在午后阳光斜射下形成小小的彩虹。当地人早已习惯了这种背景音，它就像小镇的心跳。你会看到老人们坐在不远处的长椅上聊天，孩子们在安全的围栏边好奇地张望，而裂谷的传说——关于悲伤的贵族小姐、关于被诅咒的爱情——就融在日常的柴米油盐里。对他们来说，这深渊不是景点，而是一个沉默的邻居，一个所有故事开始和结束的地方。卖明信片的老太太会指着城堡最高的那扇窗户，用夹杂着德语和意大利语词汇的克罗地亚语告诉你：“看，就是那里，我们的‘黑色女王’曾日夜凝望。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥古林最打动人心的，正是这种神话与地理现实的血肉交融。它不像那些被精心打捞、消毒后展示的历史遗址。在这里，传说是潮湿的，是有声音和气味的。城堡不只是石头垒成的权力象征，它因脚下那个深不见底的裂谷而变得忧郁、充满叙事性。你会理解为什么克罗地亚最伟大的作家之一伊万娜·布尔利奇-马祖拉尼奇会选择这里作为她奇幻故事的背景。走在鹅卵石街道上，你会不自觉地放慢脚步，竖起耳朵，仿佛在期待下一个转角，就会遇见从传说中走出的角色，或者，仅仅是更清晰地听到大地深处那条暗河的耳语。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`奥古林`} />
                <InfoRow label="英文名称" value={`Ogulin`} />
                <InfoRow label="正式名称" value={`Ogulin`} />
                <InfoRow label="国家" value={`克罗地亚`} />
                <InfoRow label="城市" value={`奥古林`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是克罗地亚弗兰科潘贵族家族最重要的堡垒之一，守护着通往亚得里亚海的门户。`} />
                <InfoRow label="建筑特色" value={`一座雄伟的方形石制堡垒，直接矗立在多布拉河深邃的裂谷边缘，形成了建筑与自然奇观的惊人共生。`} />
                <InfoRow label="建筑风格" value={`以中世纪防御堡垒为核心，融合了后期文艺复兴与巴洛克风格的改建元素。`} />
                <InfoRow label="文化价值" value={`不仅是军事历史的见证，更是克罗地亚民间传说与文学中“悲伤之城”的原型，承载了丰富的集体记忆与神话想象。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`弗兰科潘城堡：夏季（5月-9月）每日9:00-19:00；冬季（10月-4月）周一至周五10:00-16:00，周末需提前预约。多布拉河裂谷入口：全年全天开放，但强烈建议仅在白天光线充足时游览。节假日开放时间可能有变动，建议行前查看官网。`} />
              <InfoRow label="门票价格" value={`弗兰科潘城堡：成人票40库纳（约5.3欧元），学生/老人票25库纳（约3.3欧元），7岁以下儿童免费。多布拉河裂谷区域：免费进入。城堡内常设展览及临时特展需额外购票，联票建议。支持克罗地亚库纳现金及国际信用卡支付。`} />
              <InfoRow label="地址" value={`弗兰科潘城堡：Trg bana Josipa Jelačića 8, 47300 Ogulin, 克罗地亚。多布拉河裂谷入口位于城堡后方，沿标识步行即达。`} />
              <InfoRow label="交通方式" value={`从萨格勒布机场出发，乘坐机场巴士至萨格勒布中央巴士站（约30分钟），转乘前往奥古林的长途巴士（班次频繁，约每小时一班，车程1.5-2小时）。或从萨格勒布火车站乘坐火车至奥古林站（每日约5-6班，车程约2小时），出站后步行15分钟即可抵达城堡及裂谷入口。自驾沿A1/E65高速公路至奥古林出口，跟随棕色旅游标识行驶。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间拉回到十五世纪，当时这片土地属于势力庞大的弗兰科潘家族。他们可不是什么乡绅小贵族，而是能在匈牙利国王和威尼斯共和国之间纵横捭阖的一方诸侯。为什么选择在奥古林这个看似不起眼的地方建造一座如此坚固的城堡？答案就在地图上。这里是从内陆前往亚得里亚海海岸的咽喉要道，控制了这里，就等于扼住了贸易和军事的命脉。最初的城堡纯粹是为了防御和彰显权力，厚重的墙壁、狭窄的射箭孔、高高的塔楼，一切设计都是为了实用。据说，建造城堡的石料有一部分就直接取自裂谷的边缘，这让建筑从诞生之初就与这片奇异的地理景观融为一体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但很快，冰冷的石墙里开始生长出滚烫的传说。其中最著名的一个，是关于一位名叫“多拉”或“黑色女王”的弗兰科潘家族女子。故事有多个版本，有的说她是被迫嫁给不爱的男人，终身郁郁寡欢；有的说她的爱人葬身于裂谷的激流。她日复一日地坐在城堡最高的房间里，眺望着那条带走她欢乐的河流，泪水流成了小溪。最终，她在绝望中从窗口纵身跃入深渊。从此，每当月圆之夜，人们还能听到她的哭泣声与水声交织。这个传说如此深入人心，以至于“悲伤”成了奥古林文化基因的一部分。它不再是单纯的军事要塞，而成了一个情感的容器，承载着人们对命运、爱情与失去的集体想象。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的命运也随着历史的波涛起伏。它见证了奥斯曼帝国的威胁，经历了哈布斯堡王朝的统治。在相对和平的时期，后来的主人为它增添了文艺复兴式的窗户和巴洛克风格的装饰，试图让它变得更宜居，更像一个宫殿而非堡垒。然而，那道裂谷始终在那里，提醒着人们自然力量的原始与不可征服。十九世纪，随着铁路的修建，奥古林的战略地位下降，城堡逐渐失去了军事功能，一度被用作仓库甚至监狱。它变得破败，但裂谷的传说却在诗人和作家的笔下获得了新生，被赋予了民族寓言般的色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "二十世纪的战火同样席卷了这里。城堡在二战和后来的克罗地亚独立战争中遭受了损伤，石头墙壁上留下了弹孔的疤痕。但这些伤痕，与古老的传说、裂谷的永恒咆哮混合在一起，反而增添了它的层次。战后，当地人开始了缓慢而坚定的修复工作。他们修复的不仅仅是一座建筑，更是一个社群的身份认同的核心。今天，城堡内部设有关于当地历史、传说和自然地理的博物馆，那些古老的房间又开始讲述新的故事——关于坚韧，关于记忆，关于如何与一片充满神话的土地共同生活。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味奥古林的精髓，我强烈建议你安排一整天的时间，并选择在上午十点前抵达。这个时间，旅游团的大巴还未涌入，小镇还保持着晨间的宁静，裂谷的水汽在阳光下蒸腾，光线最适合拍照。游览的节奏应该是“先内后外，先高后深”：首先进入城堡内部，在博物馆里构建起历史和传说的认知框架；然后登上塔楼，从制高点建立对小镇与裂谷关系的空间理解；最后，也是最震撼的部分，走下裂谷边缘，近距离感受自然奇观。下午则留给小镇的街巷和本地生活。这样的安排让你能从理性和感性、历史和当下多个维度，层层揭开这座“悲伤之城”的面纱。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`裂谷边缘没有全程护栏，道路湿滑，务必穿防滑耐磨的鞋子，观赏时注意脚下安全。
小镇餐馆午休时间较长，建议在下午1点前或晚上7点后用餐，避免跑空。
不要尝试在雨季或水位上涨时接近裂谷河道，地下水流湍急且不可预测。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从奥古林火车站出来，沿着宁静的街道走向弗兰科潘城堡，感受小镇刚刚苏醒的慢节奏`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城堡售票处领取一份详细介绍，然后踏入阴凉的中庭，立刻被厚重的历史感包围`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要爬上城堡主塔楼，在那里你能获得俯瞰整个小镇和远方群山以及脚下那条深不见底的裂谷的360度全景`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡侧门出来，沿着一条被树根缠绕的小径下行，不到五分钟就能听到雷鸣般的水声并看到多布拉河裂谷那令人屏息的入口`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在当地人常去的“Kod Dure”餐馆享用一顿用裂谷中冷水鱼制作的午餐，听老板讲述更多关于“黑色女王”的传说`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午漫步到圣十字教堂，在静谧的内部寻找那些描绘当地传说的古老壁画`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间充裕，可以沿着多布拉河岸向北徒步一段，从不同角度回望城堡与裂谷相依的奇特景观`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚回到城堡前的广场，找一家露天咖啡馆坐下，看着夕阳将古老的石墙染成金黄色，结束完美的一天`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`裂谷边缘仰拍城堡`}</h4>
                  <p className="text-sm text-gray-700">{`站在裂谷入口附近的观景平台，下午三四点的侧光能清晰勾勒出城堡轮廓与深渊的对比，构图时将一部分激流纳入前景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡塔楼俯拍裂谷`}</h4>
                  <p className="text-sm text-gray-700">{`最佳光线在正午前后，阳光直射入裂谷，能拍出溪流与岩石的丰富细节，使用广角镜头捕捉深渊的纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老街巷中的框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，利用老街上的拱门或窗户作为自然画框，将远处的城堡框入其中，增添故事性和层次感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`多布拉河上游的倒影`}</h4>
                  <p className="text-sm text-gray-700">{`从城堡向北步行约15分钟，有一处平静河面，清晨无风时可拍摄城堡和树林在水中的完美倒影，画面宁静而富有诗意。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`裂谷内水汽极大，镜头容易起雾，建议随身携带软布及时擦拭。使用偏振镜可以有效消除水面反光，让翡翠般的河水颜色更饱和。尊重当地居民隐私，避免透过私人住宅窗户拍摄。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-blue-800">{`直接入住由19世纪老房子改造的“Kula”民宿，房间窗户正对着弗兰科潘城堡，夜晚能听到隐约的河流声，老板会为你准备地道的家庭早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`家庭优选`}</h4>
                  <p className="text-sm text-green-800">{`位于镇中心安静角落的“Vila Velebita”公寓，空间宽敞带有小厨房，主人会热情地为你准备当地特色的奶酪和蜂蜜早餐，并推荐私房徒步路线。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`自然爱好者之选`}</h4>
                  <p className="text-sm text-yellow-800">{`裂谷上游几公里处的森林小木屋，完全沉浸在大自然中，夜晚星空无比清晰，只有流水和虫鸣伴你入眠。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-purple-800">{`虽然奥古林没有国际连锁五星酒店，但可以驱车半小时前往卡尔洛瓦茨市，入住历史悠久的老牌温泉酒店，享受一番彻底的放松后再回来探索。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥古林的住宿数量有限，尤其在夏季和周末，务必提前数周预订。小镇治安非常好，夜晚独自步行也很安全。选择住在老城中心虽然方便，但周五周六晚可能能听到广场上年轻人聚会的轻微声响，喜欢绝对安静的旅客可以考虑稍外围的住处。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开奥古林许久之后，那来自大地深处的轰鸣声似乎还留在我的耳朵里。我发现，我记住的不是某个具体的文物或展厅，而是一种整体的“感觉”——那种历史与神话、坚固石墙与虚无深渊、人类故事与自然力量并置的奇异张力。在这个追求效率、一切都被清晰定义和解释的时代，奥古林保留了某种神秘的、不可完全言说的气质。它坦然展示着自己的伤痕和悲伤的传说，不试图把它们包装成廉价的浪漫，而是让它们像裂谷的水一样，自然流淌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这或许就是深度旅行者应该来到这里的原因。它不仅仅是一个“景点”，更是一个邀请，邀请你去感受地理如何塑造命运，传说如何赋予地方灵魂。在弗兰科潘城堡的影子里，你会思考什么是永恒——是坚固的石头城堡，还是它脚下那永不停歇、最终将磨平一切岩石的流水？奥古林没有给出答案，它只是静静地在那里，与它的裂谷、它的传说一起，等待每一位愿意停下脚步、侧耳倾听的旅人。在这里，你收获的将不是一张标准的打卡照片，而是一段萦绕心头的、带着水汽和古老回声的记忆。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/hrvatska-kostajnica-una-river-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科斯特尔尼察（乌纳河畔）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hrvatska Kostajnica</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/zadar-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    扎
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">扎达尔老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Zadar Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/zadar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    扎
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">扎达尔老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Zadar</p>
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
