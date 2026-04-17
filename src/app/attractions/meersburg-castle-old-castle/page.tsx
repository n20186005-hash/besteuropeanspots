import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '梅尔斯堡旧堡 Meersburg Castle｜德国最古老、至今仍有人居住的湖畔城堡 - 最佳欧洲景点',
  description: '说实话，初见梅尔斯堡旧堡，它和你想象中那些修缮一新、像童话插画般的德国城堡完全不同。它没有光滑的墙壁和尖耸的塔尖，而是像一头巨大、敦实、颜色深沉的古老野兽，静卧在博登湖陡峭的山坡上。当你沿着老城里那些被无数脚步磨得发亮的鹅卵石小径向上走，湖风带着湿润的水汽和岸边栗子花的淡香扑面而来，你的视线会不由自...',
}

export default function MeersburgCastleOldCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '梅尔斯堡旧堡', href: '/attractions/meersburg-castle-old-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`梅尔斯堡旧堡・Meersburg Castle・德国・梅尔斯堡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，初见梅尔斯堡旧堡，它和你想象中那些修缮一新、像童话插画般的德国城堡完全不同。它没有光滑的墙壁和尖耸的塔尖，而是像一头巨大、敦实、颜色深沉的古老野兽，静卧在博登湖陡峭的山坡上。当你沿着老城里那些被无数脚步磨得发亮的鹅卵石小径向上走，湖风带着湿润的水汽和岸边栗子花的淡香扑面而来，你的视线会不由自主地被那座用粗糙黄砂岩垒砌起来的庞然大物吸引。它不是“坐落”在那里，而是从山岩里“生长”出来的，厚重的墙体上爬满了深色的藤蔓，窗户小小的，像在警惕地打量着山下波光粼粼的湖面和更远处瑞士的雪山轮廓。
推开那扇需要使劲才能拉动的、包着厚重铁皮的大门，一股属于中世纪的气味瞬间将你包裹：那是陈年橡木、冰冷的石头、一点点潮气，还有若有若无的古老烟炱混合在一起的味道。光线一下子暗了下来，只有高处窄窗透进几束光柱，照亮空气中飞舞的微尘。你的脚下是凹凸不平的石板，被七百年的足迹磨出了深深的凹槽。奇怪的是，这里并不让人觉得阴森，反而有一种踏实的、被历史紧紧拥抱的温暖感。你会看到本地居民提着购物袋，熟门熟路地从城堡侧面的小门进出——是的，直到今天，城堡最高的塔楼里依然住着守塔人一家，这是它“活着”最有力的证明。城堡对于梅尔斯堡人来说，不是博物馆里冰冷的展品，而是他们日常生活背景的一部分，是阳台上喝咖啡时抬眼就能望见的邻居。
而它的核心魅力，恰恰在于这份“未经打磨的真实”。这里没有为了迎合游客而安装的炫目灯光和光滑扶手。你可以触摸到墙壁上十世纪石匠留下的凿痕，可以弯腰穿过低矮得需要低头的中世纪门廊，可以站在木质防御廊道上，听着脚下木板发出的“吱呀”声，想象卫兵在此巡逻的夜晚。当你的手扶上主塔楼那冰冷的、被无数手掌摩挲得光滑的石头螺旋楼梯扶手时，一种奇妙的连接感会贯穿全身——你正握着和一千年前某位主教、骑士或囚犯握过的同一块石头。这种触手可及的历史质感，是任何现代复制品都无法赋予的。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`说实话，初见梅尔斯堡旧堡，它和你想象中那些修缮一新、像童话插画般的德国城堡完全不同。它没有光滑的墙壁和尖耸的塔尖，而是像一头巨大、敦实、颜色深沉的古老野兽，静卧在博登湖陡峭的山坡上。当你沿着老城里那些被无数脚步磨得发亮的鹅卵石小径向上走，湖风带着湿润的水汽和岸边栗子花的淡香扑面而来，你的视线会不由自主地被那座用粗糙黄砂岩垒砌起来的庞然大物吸引。它不是“坐落”在那里，而是从山岩里“生长”出来的，厚重的墙体上爬满了深色的藤蔓，窗户小小的，像在警惕地打量着山下波光粼粼的湖面和更远处瑞士的雪山轮廓。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`推开那扇需要使劲才能拉动的、包着厚重铁皮的大门，一股属于中世纪的气味瞬间将你包裹：那是陈年橡木、冰冷的石头、一点点潮气，还有若有若无的古老烟炱混合在一起的味道。光线一下子暗了下来，只有高处窄窗透进几束光柱，照亮空气中飞舞的微尘。你的脚下是凹凸不平的石板，被七百年的足迹磨出了深深的凹槽。奇怪的是，这里并不让人觉得阴森，反而有一种踏实的、被历史紧紧拥抱的温暖感。你会看到本地居民提着购物袋，熟门熟路地从城堡侧面的小门进出——是的，直到今天，城堡最高的塔楼里依然住着守塔人一家，这是它“活着”最有力的证明。城堡对于梅尔斯堡人来说，不是博物馆里冰冷的展品，而是他们日常生活背景的一部分，是阳台上喝咖啡时抬眼就能望见的邻居。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而它的核心魅力，恰恰在于这份“未经打磨的真实”。这里没有为了迎合游客而安装的炫目灯光和光滑扶手。你可以触摸到墙壁上十世纪石匠留下的凿痕，可以弯腰穿过低矮得需要低头的中世纪门廊，可以站在木质防御廊道上，听着脚下木板发出的“吱呀”声，想象卫兵在此巡逻的夜晚。当你的手扶上主塔楼那冰冷的、被无数手掌摩挲得光滑的石头螺旋楼梯扶手时，一种奇妙的连接感会贯穿全身——你正握着和一千年前某位主教、骑士或囚犯握过的同一块石头。这种触手可及的历史质感，是任何现代复制品都无法赋予的。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`梅尔斯堡旧堡`} />
                <InfoRow label="英文名称" value={`Meersburg Castle`} />
                <InfoRow label="正式名称" value={`Meersburg Castle (Altes Schloss)`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`梅尔斯堡`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`作为德国最古老的、持续有人居住的城堡，它不仅是中世纪权力更迭的活化石，更是博登湖千年历史的沉默见证者。`} />
                <InfoRow label="建筑特色" value={`一座层层叠加、未经现代大规模修缮的“活”城堡，其内部迷宫般的结构、原始的木质防御廊道和俯瞰湖景的粗粝塔楼，构成了最真实的中世纪生活图景。`} />
                <InfoRow label="建筑风格" value={`主体为罗马式与哥特式风格的混合体，历经多次加建和修补，呈现出一种杂糅而有机的“生长式”建筑风貌。`} />
                <InfoRow label="文化价值" value={`它超越了单纯的军事堡垒功能，在千年间交替扮演着主教行宫、贵族府邸、监狱和博物馆的角色，生动诠释了“建筑即生活容器”的哲学。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`三月至十月：每日上午10:00至下午6:00（最后入场时间为下午5:30）；十一月至二月：每日上午10:00至下午5:00（最后入场时间为下午4:30）。圣诞节（12月24-25日）及元旦（1月1日）全天闭馆。注意，冬季部分区域（如最高的塔楼）可能因天气原因临时关闭。`} />
              <InfoRow label="门票价格" value={`成人票：12欧元；学生、儿童（6-17岁）及65岁以上长者：9欧元；家庭票（2大+最多3小）：30欧元。持有博登湖地区“Regio”交通卡可享受5%折扣。门票包含所有对外开放区域及小型博物馆的参观，导览语音设备需额外支付3欧元押金。`} />
              <InfoRow label="地址" value={`Schlossplatz 10, 88709 Meersburg, Germany`} />
              <InfoRow label="交通方式" value={`从最近的腓特烈港机场（Friedrichshafen Airport, FDH）出发，搭乘巴士8316路至腓特烈港火车站，换乘区域火车（Seehas）约15分钟即可抵达梅尔斯堡火车站；全程约需50分钟。从康斯坦茨中央火车站出发最为便捷，乘坐7394路巴士约20分钟直达梅尔斯堡镇中心，下车后沿清晰路标步行上山10分钟即达城堡入口。巴士班次频繁（约每20分钟一班），建议购买博登湖日票（Bodensee-Tageskarte），可在当天无限次乘坐湖区所有公共交通。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`关于梅尔斯堡旧堡的起源，笼罩在一层浪漫的传说迷雾中。坊间流传最广的说法是，它在公元630年左右由墨洛温王朝的国王达戈贝尔特一世下令建造，作为控制博登湖战略水道的要塞。虽然确凿的文字记录要晚得多，但考古发现证实，城堡所在的山丘早在七世纪就有人类活动的痕迹。它的名字“Meersburg”（湖上的城堡）本身就揭示了其使命：俯瞰并掌控这片巨大的“施瓦本海”。在最初的几百年里，它更像一个坚固的军事前哨，石墙内回荡的是士兵的脚步声和武器碰撞的铿锵声，而非圣咏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡命运的第一次重大转折发生在十三世纪。康斯坦茨的主教们看中了这个易守难攻的绝佳位置，将其从皇室手中购入，改建成自己的行政中心和行宫。从此，这座城堡褪去了一些军事的凌厉，开始注入宗教与政治的复杂气息。主教们在这里处理教务、接见贵族、也享受博登湖的美景。城堡被不断扩建，增加了居住用的宫殿部分和那座标志性的、高耸入云的主塔楼。然而，平静总是短暂的。在宗教改革的风暴和随之而来的三十年战争（1618-1648）中，梅尔斯堡因其坚固多次成为争夺的焦点。它曾被瑞典军队围攻，城墙留下了炮火的疤痕；也曾作为避难所，庇护过战火中流离失所的人们。你可以想象，在那个动荡的年代，塔楼上的烽火是如何一次次被点燃，映红湖面的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间来到十八世纪，随着康斯坦茨主教搬往更舒适豪华的新宫殿（即今天梅尔斯堡的新堡），旧堡逐渐失去了政治中心的地位，一度沦落为仓库、甚至监狱。阴冷的地牢里关押过形形色色的囚犯，石墙上留下了许多绝望或祈祷的刻痕。这或许是城堡历史上最黯淡的章节，但也恰恰是这段“落魄”经历，让它避免了被大规模现代化改造的命运，意外地保留了最原始的中世纪筋骨。它的转机出现在十九世纪浪漫主义时期。一位名叫约瑟夫·冯·拉施伯格男爵的学者兼诗人被城堡苍凉古朴的美所震撼，买下了它并进行了一次谨慎的、以保护为主的修复。他移走了后来加建的不和谐部分，尽可能地让城堡恢复了中世纪晚期的风貌，并开始将其作为收藏历史文物的私人博物馆向公众开放。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`正是拉施伯格男爵的远见，让梅尔斯堡旧堡在二十世纪免遭更多破坏。它安然度过了两次世界大战，成为德国南部少数几个保存了完整中世纪内部陈设和建筑结构的城堡。今天，当你漫步其中，看到的家具、盔甲、挂毯和日常器皿，很多都是拉施伯格家族数代人收集并捐赠的。它们不是冰冷的历史道具，而是曾经鲜活生活的遗存。从七世纪的军事据点，到主教宫殿，再到监狱和博物馆，梅尔斯堡旧堡如同一本厚重的、用石头写成的立体史书，每一任主人、每一次战火、每一次修缮，都为其增添了一个新的篇章，最终构成了我们今天看到的、层次丰富到令人惊叹的复杂生命体。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正品味梅尔斯堡旧堡，请务必预留至少3到4小时的完整时间，并强烈建议在上午10点刚开门时就抵达。这不仅是为了避开稍后到来的旅游团，更是因为清晨柔和的光线最适合拍照，而且城堡内部那份古老的宁静感在此时最为浓郁。游览的整体节奏宜慢不宜快，这是一次需要调动所有感官的“穿越”之旅。路线建议从外围开始，逐步深入内核：先绕着城堡外部走一圈，感受其与山体、湖泊融为一体的雄姿；然后进入内部，按照从底层生活区到顶层防御区的顺序，体验中世纪从世俗到威严的空间逻辑；最后登上塔楼，让博登湖的壮丽全景为这场时空之旅画上圆满句号。整个过程就像慢慢剥开一颗千年的洋葱，每一层都有不同的辛辣与回甘。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡内许多通道和楼梯极为狭窄陡峭，务必穿着绝对舒适防滑的平底鞋，穿裙子或携带大背包会非常不便。
部分区域如地牢和最高塔楼内部光线很暗且没有现代照明，手机电筒功能会非常有用，但也请小心脚下。
如果时间有限，可以略过城堡附属的小型民俗博物馆，把更多时间留给城堡主体建筑和塔楼观景。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡广场的喷泉边仰头观察城堡最古老的墙体部分，寻找那些颜色更深、砌法更古朴的七世纪原始石块。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开沉重的铁门进入“骑士厅”，让你的眼睛适应昏暗的光线，并仔细嗅闻空气中独特的古老木材与石料混合气味。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着狭窄的螺旋石阶下到阴凉的地窖和古老的面包房，想象中世纪仆役在此劳作、而地牢中囚徒叹息的鲜明对比。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`小心翼翼走上通往“达戈贝尔特国王塔楼”的露天木制防御廊道，感受脚下木板的弹性与湖风吹过耳畔的呼啸。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在主生活层的“主教厅”停留，观摩那些巨大的文艺复兴橱柜和挂毯，设想当年主教在此举行会议或宴饮的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要爬上那令人眩晕的、仅容一人通行的主塔楼内部木楼梯，直达守塔人居住区域的展示空间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最终奋力登上塔楼最顶端的露天观景台，360度环视博登湖、阿尔卑斯山和红瓦小镇的全景，让风吹走所有的历史尘埃。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开前不要错过城堡庭院角落那口被称为“最深井”的中世纪水井，探头看看那深不见底的黑暗，听导游讲述其挖掘的传奇。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡南侧下山小径的拐角处`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到日落前，阳光会为城堡的石墙镀上温暖的金色，利用路边的野花或树枝作为前景，可以拍出城堡与博登湖同框的经典明信片角度。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主塔楼内部的螺旋木楼梯中段`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个阳光强烈的正午，从楼梯中间向上仰拍，可以看到光线从塔楼顶部的窗孔射入，形成一道照亮古老木结构的光束，极具神圣感和纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城堡西北角外围的木制防御廊道尽头`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，从这里可以以城堡粗犷的石墙和木质结构为框，将远处湖对岸的瑞士小镇和雪山收纳为背景，构图层次极为丰富。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`底层“深井”庭院`}</h4>
                  <p className="text-sm text-gray-700">{`利用广角镜头贴近井口拍摄，将井圈古老的石雕纹理作为前景焦点，后方虚化展现庭院拱门和一部分城堡塔楼，能讲述一个关于中世纪生存与坚守的故事。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`城堡内部大部分区域允许拍照，但严禁使用闪光灯和三脚架，以防对脆弱的古老织物和木制品造成损害。`}</li>
                <li>• {`拍摄居住在塔楼的守塔人家庭外部生活区域时，请务必保持尊重和距离，不要打扰他们的私人生活，这本身就是一种珍贵的文化体验。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`极致体验`}</h4>
                  <p className="text-sm text-blue-800">{`直接预订城堡附属的“骑士之家”历史客房，虽然设施古朴简单，但夜晚当游客散尽，你将独享整个古老城堡的幽灵低语与湖风吟唱，这是独一无二的非卖品体验。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`景观首选`}</h4>
                  <p className="text-sm text-green-800">{`位于城堡下方半山腰的“湖光别墅”精品酒店，每个房间都拥有直面博登湖的无敌落地窗，在浴缸里边泡澡边欣赏夜幕下被灯光勾勒的城堡剪影，浪漫至极。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`温馨之选`}</h4>
                  <p className="text-sm text-yellow-800">{`老城中心由16世纪木筋屋改造的家庭旅馆“三玫瑰”，老板娘会端来自制的黑森林蛋糕作为欢迎礼，木头楼梯吱呀作响，但温暖亲切得像回到祖母家。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计风范`}</h4>
                  <p className="text-sm text-purple-800">{`距离城堡步行十分钟的现代设计酒店“码头仓库”，由旧船库改造而成，工业风 loft 风格与古老小镇形成有趣对话，早晨可直接从酒店私人码头跳入湖中游泳。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`梅尔斯堡小镇非常安全，但老城街道多为陡峭石板路，拖行李会是个挑战，预订时确认酒店是否提供接送或搬运服务会省力很多。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（6-8月）和圣诞市场期间是绝对旺季，住宿价格飙升且一房难求，建议至少提前三个月预订；而春秋两季前来，既能享受宁静，价格也亲切得多。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开梅尔斯堡旧堡很久之后，那种触觉记忆依然清晰——手掌贴在冰冷石墙上的粗糙感，扶着古老木扶手爬上塔楼时掌心传来的温润。这或许就是它与众不同的地方：它不只是一个被观看的景点，而是一个可以全身心进入和触摸的“时光容器”。在这里，历史不是教科书上扁平的文字，而是脚下不平的石板，是穿过窄窗在你肩膀上移动的光斑，是塔楼里守塔人家庭飘出的、混合着现代咖啡香气的日常生活气息。它完美地诠释了什么叫“活的历史”：既庄重地承载着千年的重量，又轻盈地呼吸着当下的空气。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求崭新、光滑和高效的世界里，梅尔斯堡旧堡像一位固执的老人，拒绝被轻易地美化或简化。它坦然地展示着自己的伤疤、补丁和所有岁月的痕迹。这恰恰给了我们这些现代旅人最珍贵的东西：一种真实的连接感，一种关于“持久”的慰藉。它告诉我们，生活是层叠的，文明是在修补与延续中前进的。如果你厌倦了那些过于精致、像布景一样的古迹，如果你想寻找一处能让你安静下来、用手和心去阅读历史的地方，那么，请一定来梅尔斯堡，走进这座依旧在呼吸的石头史诗。它不会给你瞬间的视觉狂欢，却会赠与你一段漫长而深沉的、关于时间的回响。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/castelo-branco" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布朗库堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Castelo Branco</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/holstentor-lubeck" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    吕
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">吕贝克霍尔斯滕门</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Holstentor</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bourscheid-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布尔沙伊德城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bourscheid Castle</p>
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
