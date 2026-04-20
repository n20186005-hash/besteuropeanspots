import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奥林波斯 Olympos｜穿越回古希腊的活态时光胶囊 - 最佳欧洲景点',
  description: '当你终于转过最后一个令人眩晕的山路弯道，奥林波斯第一次闯入眼帘时，时间仿佛被按下了暂停键。它不像那些明信片上的蓝白小镇，而是以一种倔强、朴拙的姿态，紧紧抓握着嶙峋的山脊。第一印象是风声——梅尔泰米风永不停歇地呼啸着穿过山谷，刮过那些古老石屋的棱角，发出呜呜的哨响，这是山村永恒的BGM。空气里混杂着干...',
}

export default function OlymposKarpathosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '奥林波斯', href: '/attractions/olympos-karpathos' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`奥林波斯・Olympos・希腊・喀帕喀斯岛`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你终于转过最后一个令人眩晕的山路弯道，奥林波斯第一次闯入眼帘时，时间仿佛被按下了暂停键。它不像那些明信片上的蓝白小镇，而是以一种倔强、朴拙的姿态，紧紧抓握着嶙峋的山脊。第一印象是风声——梅尔泰米风永不停歇地呼啸着穿过山谷，刮过那些古老石屋的棱角，发出呜呜的哨响，这是山村永恒的BGM。空气里混杂着干燥的尘土味、远处飘来的烤面包香气，还有一种野生百里香和牛至的辛辣气息。
走近村子，唯一的“主路”是一条被无数代人的鞋底和驴蹄打磨得光滑发亮的石板坡道，陡峭得让你必须微微后仰才能保持平衡。这里没有旅游商店的喧哗，只有日常生活的低语。耳边传来的是完全听不懂的快速音节——那不是现代希腊语，而是喀帕喀斯方言，一种保留了大量古希腊语词汇和发音的活语言。穿着传统服饰的老妇人坐在自家门槛上，手指飞快地穿梭，绣着复杂几何图案的织物，她们的黑色长裙、彩色围裙和沉甸甸的金币项链（作为嫁妆代代相传），在纯白墙壁的映衬下，宛如移动的民俗画。
最打动人的，是这里无所不在的“自给自足”痕迹。几乎每户屋顶都有一个小型石砌风车，用于研磨自家种植的小麦。院墙上晒着通红的辣椒串和西红柿，陶罐里腌着橄榄。你会看到男人用最原始的工具修理石墙，女人在公共烤炉用木柴烤制全村分享的巨大圆面包。这里的生活节奏是由太阳、风力和农事决定的，而非钟表。奥林波斯的核心魅力，不在于某个宏伟的建筑，而在于这一整套仍在平稳运转的、源自古老地中海世界的生存系统与文化密码，它让你亲眼目睹了“传统”并非博物馆里的陈列品，而是一种依然可行的、充满尊严的生活选择。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你终于转过最后一个令人眩晕的山路弯道，奥林波斯第一次闯入眼帘时，时间仿佛被按下了暂停键。它不像那些明信片上的蓝白小镇，而是以一种倔强、朴拙的姿态，紧紧抓握着嶙峋的山脊。第一印象是风声——梅尔泰米风永不停歇地呼啸着穿过山谷，刮过那些古老石屋的棱角，发出呜呜的哨响，这是山村永恒的BGM。空气里混杂着干燥的尘土味、远处飘来的烤面包香气，还有一种野生百里香和牛至的辛辣气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近村子，唯一的“主路”是一条被无数代人的鞋底和驴蹄打磨得光滑发亮的石板坡道，陡峭得让你必须微微后仰才能保持平衡。这里没有旅游商店的喧哗，只有日常生活的低语。耳边传来的是完全听不懂的快速音节——那不是现代希腊语，而是喀帕喀斯方言，一种保留了大量古希腊语词汇和发音的活语言。穿着传统服饰的老妇人坐在自家门槛上，手指飞快地穿梭，绣着复杂几何图案的织物，她们的黑色长裙、彩色围裙和沉甸甸的金币项链（作为嫁妆代代相传），在纯白墙壁的映衬下，宛如移动的民俗画。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，是这里无所不在的“自给自足”痕迹。几乎每户屋顶都有一个小型石砌风车，用于研磨自家种植的小麦。院墙上晒着通红的辣椒串和西红柿，陶罐里腌着橄榄。你会看到男人用最原始的工具修理石墙，女人在公共烤炉用木柴烤制全村分享的巨大圆面包。这里的生活节奏是由太阳、风力和农事决定的，而非钟表。奥林波斯的核心魅力，不在于某个宏伟的建筑，而在于这一整套仍在平稳运转的、源自古老地中海世界的生存系统与文化密码，它让你亲眼目睹了“传统”并非博物馆里的陈列品，而是一种依然可行的、充满尊严的生活选择。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`奥林波斯`} />
                <InfoRow label="英文名称" value={`Olympos`} />
                <InfoRow label="正式名称" value={`Olympos`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`喀帕喀斯岛`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`喀帕喀斯岛上最与世隔绝、完整保存了前基督教时代风俗与独特古希腊方言的活化石山村。`} />
                <InfoRow label="建筑特色" value={`依陡峭山崖而建的立方体石屋与风车，纯白墙面与彩色木门窗形成强烈对比，建筑完全为抵御强风与实现自给自足而设计。`} />
                <InfoRow label="建筑风格" value={`爱琴海岛屿防御性山村风格与极为朴素的拜占庭后期民居风格的混合体，实用主义至上。`} />
                <InfoRow label="文化价值" value={`一个仍在呼吸的“活态博物馆”，其居民使用的“喀帕喀斯方言”被视为研究古希腊语的珍贵活体样本，其女性服饰、节庆仪式和日常生活方式直接连接着古老的希腊世界。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`村子本身全天可进入，但参观内部（如特定的民俗博物馆或向游客开放的传统民居）通常遵循希腊小岛的节奏：夏季（5月-9月）上午10点至下午2点，傍晚5点至8点可能开放；冬季开放时间极度不固定，强烈建议抵达后询问当地人或客栈主人。许多体验（如观看妇女劳作）依赖于村民的日常活动，并无固定“营业时间”。`} />
              <InfoRow label="门票价格" value={`进入村庄本身免费。如果参观小型的民间博物馆或受邀进入某些有特殊展示的民居，可能会收取2-5欧元的小额捐赠，用以支持社区。所有消费请准备现金（欧元）。`} />
              <InfoRow label="地址" value={`Olympos, Karpathos 857 00, Greece`} />
              <InfoRow label="交通方式" value={`抵达这里本身就是一场冒险。首先，你需要飞到喀帕喀斯岛的主机场（卡波迪斯特里亚斯机场，AOK），或在夏季搭乘从罗德岛、克里特岛出发的渡轮抵达岛上的主要港口——皮加迪亚。从皮加迪亚前往奥林波斯是重头戏：每天仅有寥寥数班长途汽车，车程约1.5-2小时，沿途是惊心动魄的盘山悬崖公路。更灵活的方式是在皮加迪亚租一辆小车（手动挡为主），自驾前往，但请确保你的驾驶技术过硬且不惧陡坡窄路。没有直达的公共交通网络。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`奥林波斯的故事，是一部关于隔绝、坚守和身份认同的史诗。它的诞生大约可以追溯到公元7世纪至10世纪之间，当时的拜占庭帝国统治着这一海域。人们选择在这座海拔近700米、俯瞰两个海湾的山脊上建村，首要原因并非风景，而是安全。陡峭的地形和恶劣的通行条件，是抵御海盗袭击最天然的屏障。这种地理上的隔绝，成了塑造它未来命运的模具。当外面的世界经历了奥斯曼帝国数百年的统治、意大利的短暂管辖、乃至现代希腊国家的形成与全球化浪潮时，奥林波斯仿佛被遗忘在时间之外的山巅。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这种隔绝最惊人的产物，就是语言。喀帕喀斯方言，特别是奥林波斯所使用的变体，被誉为“活着的古希腊语”。由于与大陆交流极少，它奇迹般地保留了大量古希腊语的词汇、语法结构和发音方式。比如，他们称“水”为“neró”，与古希腊语“hydor”的衍生词更近，而现代希腊语是“neró”但发音已变；数字“四”他们读作“tésera”，非常接近古希腊语的“téttares”。在这里，你听到的交谈，可能是最接近两千年前雅典集市上声音的现存版本。这种语言不是学者在书斋里研究的死文字，而是老奶奶呼唤孙儿、村民讨价还价的生活工具。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`村子的社会结构也深深植根于古老的传统。财产和习俗通过母系传承的痕迹依然可见，女性在家庭经济中扮演着核心角色，那些华丽的传统服饰和金币项链，不仅是装饰，更是家族财富和地位的象征。最重要的节庆不是国家的国庆日，而是“婚礼”和“复活节”。婚礼是持续数天的全村狂欢，保留着诸如“偷新娘的鞋”等古老习俗。复活节前，妇女们会集体用天然染料绘制巨大的“基督复活”旗帜，仪式之古老，令人动容。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当然，岁月并非没有留下创痕。1953年，一场毁灭性的地震几乎将村庄夷为平地。但奥林波斯人用惊人的毅力，按照原样一石一木地重建了家园，不是为了旅游业，而是为了他们自己的生活方式。二战后的几十年，像希腊所有偏远乡村一样，年轻人曾大量外流寻求工作机会。然而，近二三十年，一股“回归”的潜流开始涌现。一些在雅典或海外受过教育的年轻人，选择回到故乡，他们并非完全拒绝现代（你会发现一些咖啡馆有微弱的Wi-Fi信号），而是以一种清醒的意识，担当起文化守护者的角色，经营家庭旅舍，向游客解释古老的传统，确保这门独特的语言不会在他们这一代消失。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的奥林波斯，站在一个微妙的十字路口。它小心翼翼地打开一道门缝，迎接那些不畏艰险前来朝圣“真实”的旅人，同时又紧紧守护着内核不受侵蚀。它不是舞台布景，而是一个依然充满生命力的社区，在爱琴海的风中，低声吟唱着一段从未中断的古老歌谣。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`理想的奥林波斯深度体验需要至少一个完整的白天，最好能住上一晚。建议前一晚抵达并住下，次日清晨，在旅游一日游的巴士到达前（通常上午10点后），独自享受村子的宁静。整体游览节奏应是“慢走、细看、多问”。从村口下方的主停车场开始，放弃车辆，用双脚丈量。路线呈环形，先向上探索居住和核心文化区，再向下方和边缘探访生产生活区，最后在日落时分找一个视野开阔处静坐。这样的安排能让你由表及里，从建筑景观深入到日常生活，并捕捉到山村光影最美的时刻。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`绝对不要试图在狭窄的主村道上开车，那是对你和村民的折磨，请乖乖把车停在下方指定停车场。
尊重隐私，拍摄人物前务必先微笑并用手势征得同意，尤其是身着传统服饰的老年人，她们不是演员。
穿一双绝对防滑、支撑性好的步行鞋，这里的石板路陡峭且光滑，高跟鞋或凉鞋是灾难。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主停车场沿着陡峭的千年石板主路向上跋涉，让两侧挂着辣椒串的石墙和突然出现的驮货毛驴带你瞬间脱离现代感`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在主广场的古老悬铃树下喘口气，观察穿着传统“sayia”裙装的老妇人们如何自然地聚在一起聊天、做针线活`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻着新鲜面包的香气找到村里的公共石砌烤炉，如果幸运，能看到妇女们用长柄木铲将巨大的金黄色圆面包送入炉膛的仪式性场景`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`轻轻敲门拜访一间向游客开放的传统民居博物馆，坐在低矮的木椅上，听主人用夹杂方言的希腊语讲述每件家具、每件刺绣背后的家族故事`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`尝试爬上村子最高点的圣康斯坦丁诺斯教堂，不仅为看那简朴的穹顶，更为站在教堂前平台，享受将爱琴海湛蓝与层层梯田尽收眼底的征服感`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着指示牌向下步行十五分钟，去探访那片倚靠着风车的古老梯田，亲手触摸一下仍在耕作的贫瘠土地，理解生存于此的艰辛与智慧`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在傍晚时分回到主路，找一家由当地家庭经营的小酒馆，点一份用自家材料做的“makarounes”（手工面）和炖羊肉，和可能返乡经营的年轻店主聊聊天`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开前，一定要去村子边缘的古老墓地看看，那些宛如微型教堂、装饰着手工铁艺十字架的白色墓室，在夕阳下散发出一种平静而永恒的力量`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`村口下方转弯处全景仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨8-9点阳光刚刚照亮白色村舍时，站在通往停车场公路的第一个大弯道，用长焦压缩场景，拍出山村层叠错落、紧贴悬崖的震撼构图，记得把一两座转动中的风车纳入前景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主石板路的光影走廊`}</h4>
                  <p className="text-sm text-gray-700">{`正午前后，当阳光垂直射入狭窄的巷道，会在石墙上切割出锐利的光影分界线，找一个有彩色门窗或悬挂着陶罐的角落，等待一个当地人（最好是穿着传统服饰的）走入光区按下快门，故事感瞬间拉满。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`传统服饰细节特写`}</h4>
                  <p className="text-sm text-gray-700">{`征得同意后，在广场树荫下，用大光圈镜头聚焦于老妇人手中飞舞的绣花针、围裙上繁复的十字绣图案，或是她颈间那些历经岁月沉淀、光泽温润的金币项链，这些细节是文化的密码。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`风车剪影与爱琴海日落`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚日落前半小时，步行到村子西侧下方的梯田区域，以一座静止的古老石砌风车为前景剪影，将远处浩瀚的爱琴海和沉入海平面的夕阳作为背景，拍下自然、人文与时光的交响。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`山村光线变化极快，山脊的云和风瞬间改变曝光条件，建议使用光圈优先模式并随时准备调整曝光补偿。许多老人认为镜头会“带走灵魂”，被拒绝拍摄非常正常，请以灿烂笑容和一句“Efharistó”（谢谢）回应，尊重比照片更重要。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸式家庭旅馆`}</h4>
                  <p className="text-sm text-blue-800">{`住在村里世代相传的石屋改造的客房，房间可能小而简单，但晚餐是女主人用家传食谱烹制的，清晨会在自家烤炉的香气中醒来，并有机会参与家庭日常闲聊。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`传统石屋民宿`}</h4>
                  <p className="text-sm text-green-800">{`由返乡年轻人精心改造的独立传统住宅，保留了石拱顶和厚墙壁的冬暖夏凉特性，同时配备了现代化的卫生间和简约设计，适合既想体验古朴又需要一定舒适度的旅人。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`隐居风车屋`}</h4>
                  <p className="text-sm text-yellow-800">{`预订村子边缘经过修复的古老风车屋，空间独特且私密性极高，夜晚只有风声和星空为伴，是真正逃离尘世的体验，但需要提前很久预订且步行到村中心略远。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`山下海湾避世选择`}</h4>
                  <p className="text-sm text-purple-800">{`如果不想挑战过于艰苦的山居条件，可以选择住在奥林波斯所属的迪亚法尼小渔港的家庭旅馆，每天乘船上山或走一段壮丽的徒步小径，体验海与山的双重魅力。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`几乎所有住宿都需要通过电话或简单的电子邮件直接与房东预订，在线预订平台选择极少，这正是其原始魅力的一部分。夏季房源紧张，务必提前数月规划。入住时请确认是否有热水供应时间限制（太阳能热水器依赖阳光），这正是体验其资源珍贵性的一部分。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开奥林波斯的下山路上，耳朵里似乎还回响着那种音节奇特的古老方言，鼻腔里还残留着柴火和干草药的气息。那一刻的感受非常复杂：仿佛刚刚从一个深深的、关于时间的梦境中醒来。我们习惯于在博物馆的玻璃柜前瞻仰文明碎片，而在奥林波斯，你却是走在一个依然跳动着古老心脏的活体之中。这里没有宏大叙事，只有日复一日的揉面、纺织、修缮石墙，但正是这些细微的动作，跨越了十几个世纪，将一条文化的血脉艰难而顽强地延续到了今天。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都被加速、被同质化的时代，奥林波斯的存在本身，就是一种沉默而有力的宣言。它提醒我们，世界的丰富性藏在那些需要费力抵达的角落；它告诉我们，“进步”并非只有抛弃传统这一条路径，珍视自己的根脉，同样可以是一种充满尊严的现代生存方式。对于每一位厌倦了浮光掠影、渴望触及文明源流的深度旅者而言，奥林波斯不仅仅是一个目的地，它更像一次精神的返乡。你会在这里看到的，可能不仅仅是希腊的过去，更是所有人类社群在面对时光洪流时，那份试图抓住一些永恒之物的、共通的执着与温柔。这趟旅程，注定会留在你心里，比任何一座辉煌却冰冷的宫殿，都更为悠长。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/veria" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    韦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">韦里亚古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Veria</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/temple-of-apollo-epicurius" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴赛阿波罗神庙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Temple of Apollo Epicurius</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ancient-city-of-acheron" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿切伦扎古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ancient City of Acheron</p>
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
