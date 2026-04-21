import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '滨海沃莱特 Veulettes-sur-Mer｜探秘法国最短河流与悬崖下的二战迷宫 - 最佳欧洲景点',
  description: '车子拐下公路，还没看见海，你先闻到了那股味道——咸腥，清冽，带着点水草被阳光晒暖后的气息，中间还混杂着从岸边牧场飘来的、若有若无的干草香。这就是滨海沃莱特给你的第一声问候，不张扬，却直接把你拉进了诺曼底海岸的语境里。然后，那条号称“全法国最短”的沃莱特河就出现在了眼前。它真的短得有些害羞，不过一千多',
}

export default function VeulettesSurMerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/france' },
            { label: '滨海沃莱特', href: '/destinations/france' },
            { label: '滨海沃莱特', href: '/attractions/veulettes-sur-mer' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`滨海沃莱特・Veulettes-sur-Mer・法国・滨海沃莱特`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子拐下公路，还没看见海，你先闻到了那股味道——咸腥，清冽，带着点水草被阳光晒暖后的气息，中间还混杂着从岸边牧场飘来的、若有若无的干草香。这就是滨海沃莱特给你的第一声问候，不张扬，却直接把你拉进了诺曼底海岸的语境里。然后，那条号称“全法国最短”的沃莱特河就出现在了眼前。它真的短得有些害羞，不过一千多米的长度，从镇子身后的草坡上淌下来，水流平静得几乎看不出流动，像一条被遗忘的银色缎带，在卵石河床上轻轻铺开。几个本地孩子拎着小桶在河口翻找着什么，他们的笑声被海风吹得断断续续。你会忽然觉得，时间在这里，是以这条河的流速在计算的，缓慢，近乎停滞。
但当你把目光从这条温顺的小河移开，投向它的尽头——那片突然展开的英吉利海峡时，感官会经历一次骤然的切换。宏伟的白垩岩悬崖如同巨人的断壁，在阳光下闪耀着刺眼的白色和浅灰。海浪拍打卵石滩的声音不再是轻柔的背景乐，而是有节奏的、低沉的轰鸣。脚下踩着的不是沙滩，是成千上万颗被磨得浑圆光滑的灰白色燧石卵石，它们在你每一步下发出独特的、嘎吱嘎吱的声响，这声音如此之大，以至于盖过了其他一切。海风变得猛烈，带着穿透力的凉意。这里的美，是带着些许荒凉和力度的。
而这座小镇最扣人心弦的秘密，就藏在眼前这片看似纯粹自然的白垩岩悬崖的肚子里。那些悬崖脚下不起眼的、被杂草半掩的混凝土入口，通往的是一个完全不同的、冰冷而压抑的世界。地面上是开阔的海天一色与孩童的嬉戏，地面下是幽深曲折的隧道与战争的记忆。这种极致的反差，构成了滨海沃莱特独一无二的魔力。它不仅仅是一个风景明信片式的海滨度假地，更是一个能让你亲身走入历史阴影之中，去触摸那段并不遥远过往的沉浸式剧场。
当地人的生活巧妙地编织在这两种截然不同的现实之间。早晨，你会看到老人带着狗在卵石滩上散步，偶尔弯腰捡一块形状特别的石头；下午，咖啡馆的露台上坐满了喝着苹果酒、晒着太阳的游客；而当你和那些上了年纪的店主聊天，他们或许会用最平静的语气，说起童年时如何在这些后来成为旅游奇观的隧道附近玩耍。历史对于他们，不是教科书上的章节，而是家园风景里一道深深刻入的疤痕，如今已被时间覆盖上了青苔与寻常生活。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子拐下公路，还没看见海，你先闻到了那股味道——咸腥，清冽，带着点水草被阳光晒暖后的气息，中间还混杂着从岸边牧场飘来的、若有若无的干草香。这就是滨海沃莱特给你的第一声问候，不张扬，却直接把你拉进了诺曼底海岸的语境里。然后，那条号称“全法国最短”的沃莱特河就出现在了眼前。它真的短得有些害羞，不过一千多米的长度，从镇子身后的草坡上淌下来，水流平静得几乎看不出流动，像一条被遗忘的银色缎带，在卵石河床上轻轻铺开。几个本地孩子拎着小桶在河口翻找着什么，他们的笑声被海风吹得断断续续。你会忽然觉得，时间在这里，是以这条河的流速在计算的，缓慢，近乎停滞。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但当你把目光从这条温顺的小河移开，投向它的尽头——那片突然展开的英吉利海峡时，感官会经历一次骤然的切换。宏伟的白垩岩悬崖如同巨人的断壁，在阳光下闪耀着刺眼的白色和浅灰。海浪拍打卵石滩的声音不再是轻柔的背景乐，而是有节奏的、低沉的轰鸣。脚下踩着的不是沙滩，是成千上万颗被磨得浑圆光滑的灰白色燧石卵石，它们在你每一步下发出独特的、嘎吱嘎吱的声响，这声音如此之大，以至于盖过了其他一切。海风变得猛烈，带着穿透力的凉意。这里的美，是带着些许荒凉和力度的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而这座小镇最扣人心弦的秘密，就藏在眼前这片看似纯粹自然的白垩岩悬崖的肚子里。那些悬崖脚下不起眼的、被杂草半掩的混凝土入口，通往的是一个完全不同的、冰冷而压抑的世界。地面上是开阔的海天一色与孩童的嬉戏，地面下是幽深曲折的隧道与战争的记忆。这种极致的反差，构成了滨海沃莱特独一无二的魔力。它不仅仅是一个风景明信片式的海滨度假地，更是一个能让你亲身走入历史阴影之中，去触摸那段并不遥远过往的沉浸式剧场。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地人的生活巧妙地编织在这两种截然不同的现实之间。早晨，你会看到老人带着狗在卵石滩上散步，偶尔弯腰捡一块形状特别的石头；下午，咖啡馆的露台上坐满了喝着苹果酒、晒着太阳的游客；而当你和那些上了年纪的店主聊天，他们或许会用最平静的语气，说起童年时如何在这些后来成为旅游奇观的隧道附近玩耍。历史对于他们，不是教科书上的章节，而是家园风景里一道深深刻入的疤痕，如今已被时间覆盖上了青苔与寻常生活。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`滨海沃莱特`} />
                <InfoRow label="英文名称" value={`Veulettes-sur-Mer`} />
                <InfoRow label="正式名称" value={`Veulettes-sur-Mer`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`滨海沃莱特`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一个将宁静海滨度假传统与沉重二战防御工事历史并置一处的独特见证地。`} />
                <InfoRow label="建筑特色" value={`无突出人工建筑奇观，其魅力在于天然形成的白垩岩悬崖与人工开凿的庞大地下掩体系统形成的强烈对比。`} />
                <InfoRow label="建筑风格" value={`自然景观与二十世纪中期军事功能主义工程的结合。`} />
                <InfoRow label="文化价值" value={`体现了诺曼底海岸线在自然之美与战争创伤之间的永恒对话，是地方微观历史的生动教材。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇及海岸线全天开放。二战地下掩体入口通常仅在夏季（7月至8月）的每周三和周六下午14:00至17:00对外开放，并有导游带领参观。冬季（11月至次年3月）掩体基本关闭。悬崖步道因天气和侵蚀状况可能临时关闭，建议行前在镇旅游局官网查看最新公告。`} />
              <InfoRow label="门票价格" value={`进入小镇及在海滩、悬崖徒步免费。参观二战地下掩体需参加导览团，成人票价约8欧元，学生及12-18岁青少年约5欧元，12岁以下儿童免费。团体（10人以上）可预约私人导览，价格另议。门票通常在掩体入口处的临时售票点或镇旅游局购买。`} />
              <InfoRow label="地址" value={`Place de la Mairie, 76450 Veulettes-sur-Mer, France`} />
              <InfoRow label="交通方式" value={`从巴黎出发最方便。先乘坐火车从巴黎圣拉扎尔车站（Gare Saint-Lazare）至布雷奥泰车站（Br éauté-Beuzeville），车程约1小时45分钟，班次每日约10趟。抵达布雷奥泰后，转乘出租车前往滨海沃莱特，车程约20分钟，费用约30-40欧元。火车站外出租车需电话预约，最好请酒店或民宿提前安排。自驾是最佳选择，从巴黎经A13和A29高速公路前往，车程约2.5小时。小镇内步行即可游览。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要讲滨海沃莱特的故事，得从它那身“骨头”说起——那些高耸的白色悬崖。它们可不是普通的石头，主要是由白垩岩构成，这是一种质地相对柔软、多孔的石灰岩。千万年前，这里曾是浩瀚的海底，无数的微生物藻类骨骼沉积下来，经过难以想象的地质年代挤压，形成了这片洁白的地层。后来地壳运动将它抬升出海面，英吉利海峡永不停歇的浪涛又开始年复一年地啃噬它，雕刻出了我们今天看到的嶙峋断面。可以说，这片海岸的“天生丽质”，源于一场持续了数百万年的、缓慢而宏大的“破坏”。正是这种地质特性，为它后来的人类历史埋下了伏笔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在很长一段时间里，这里只是诺曼底海岸一个不起眼的渔村和小农庄。它的命运转折点发生在19世纪中叶。随着铁路网的延伸和海水浴疗养的时尚在法国兴起，像滨海沃莱特这样拥有优美海岸线和清新空气的小地方，开始吸引巴黎和中产阶级的注意。人们来此建造度假别墅，那个时代典型的诺曼底式木筋墙小屋开始点缀海岸线。沃莱特河因为其短小温顺，河口形成了平缓的浅滩，非常适合当时穿着繁复泳装的淑女们进行“海水浴”，小镇因此迎来了它的第一个“黄金时代”，一种悠闲、田园诗般的海滨度假文化在此扎根。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，20世纪中叶的战争风云彻底改写了它的宁静。1940年，纳粹德国占领了法国北部，诺曼底漫长的海岸线立刻被视为防御盟军反攻的前线。德军工程师看中了滨海沃莱特的地理位置：它的悬崖居高临下，视野开阔，而其柔软的白垩岩岩体则非常易于开挖。于是，从1942年开始，大量的强迫劳工和战俘被运送到这里，在悬崖内部开凿一个庞大而复杂的地下防御工事体系。他们用简单的工具，有时甚至是用双手，在岩石中挖掘出了指挥部、弹药库、宿舍、医院和炮位，并通过纵横交错的隧道相连。这些工程是在极端秘密和艰苦的条件下进行的，许多劳工未能活着离开。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1944年6月诺曼底登陆战役打响，但主战场在西部的犹他、奥马哈等海滩。滨海沃莱特所在的这一段海岸并非盟军的主要攻击目标，因此这些精心构建的防御工事大部分并未经历实战的炮火洗礼。德军撤退后，它们便被遗弃，逐渐被遗忘。在战后恢复平静的日子里，当地人对这些掩体的感情是复杂的。它们是占领时期的痛苦象征，也是危险的所在（常有坍塌风险）。于是，许多入口被刻意封堵或掩埋，它们成了大人们警告孩子不要靠近的“禁忌之地”，慢慢退出了日常生活的视线。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到近二三十年，随着对二战历史研究的深入和“黑暗旅游”的兴起，人们才重新以不同的眼光审视这些地下迷宫。当地的历史学会和政府部门开始小心翼翼地清理、加固部分隧道，将其作为一个独特的历史教育资源向公众有限度地开放。曾经充满恐惧和压迫的空间，如今变成了让人沉思的纪念馆。这段从宁静度假地到战争前线堡垒，再到被遗忘的废墟，最终成为历史见证的历程，比任何小说都更富有戏剧性。它告诉我们，风景从来不是中立的，它永远承载着记忆，而最深的痕迹，往往藏在看不见的地方。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在午后抵达滨海沃莱特，这样你能先享受日光下海岸的壮丽，再将旅程带入掩体内部幽深的历史氛围中，最后以一场完美的海峡日落收尾。整体游览时间（不包括交通）建议预留至少4-5小时。节奏上宜张弛有度：先在开阔的海滩和悬崖上放松感官，再集中精神进行约1.5小时的掩体导览（如果开放），最后带着沉思的心情在镇上漫步或小酌。这样的安排顺应了从光明到黑暗再到回归平静的自然叙事逻辑，体验会非常有层次感。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双结实防滑的徒步鞋，卵石滩行走非常费力且容易崴脚，悬崖小径也可能湿滑。参加掩体导览一定要带一件薄外套，地下温度常年只有10度左右，且湿度很高。切勿自行尝试进入任何未经验收开放的掩体入口或裂缝，岩体不稳定，极其危险。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`先在沃莱特河的入海口驻足，蹲下来用手感受一下这条“法国最短河流”冰凉清澈的河水，并回头看看它那几乎一眼就能望到头的羞涩河道。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着巨大的卵石滩向西漫步，任凭脚下发出雷鸣般的“石浪”声响，一直走到白垩岩悬崖开始陡然隆起的地方。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到悬崖底部那个不起眼、有导览标志的混凝土掩体入口，跟随导游的手电光芒，走入那个温度骤降、回声空旷的二战地下迷宫。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从掩体出来重见天日后，沿着悬崖顶部的徒步小径向东走，从高处俯瞰你刚才走过的海滩和那些隐藏着历史的悬崖断面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走下悬崖，回到小镇中心，在广场旁找一家有露台的咖啡馆，点一杯本地 Calvados 苹果白兰地或cidre气泡苹果酒，静静看着港口停泊的小船。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时机正好，慢慢踱回卵石滩，找一块被海水冲刷得光滑的大石头坐下，等待夕阳将白色的悬崖染成金黄，再变成粉红。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`去镇上的小面包坊买一根刚出炉的、外壳硬脆的法棍，就着海风尝尝最朴实的滋味。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`沃莱特河入海口处`}</h4>
                  <p className="text-sm text-gray-700">{`下午侧光时，将前景的平静河水和戏水的孩童，与背景汹涌的海浪、白色悬崖同框，形成动静与尺度的强烈对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`卵石滩仰拍悬崖`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，站在滩涂上，放低机位，用广角镜头仰拍，让布满凿痕和植被的巨岩白崖充满整个画面，充满压迫感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`掩体入口的光影`}</h4>
                  <p className="text-sm text-gray-700">{`参加导览时，在进入隧道的瞬间，回身拍摄入口处那束强烈的自然光与内部完全黑暗的隧道形成的强烈明暗分割。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`悬崖顶俯瞰海岸线`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，从东部悬崖步道的观景点，用长焦镜头压缩空间，将弯曲的海岸线、层叠的卵石滩和远处小镇的屋顶一同收纳。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`海风常伴有细沙和水雾，更换镜头时要格外小心，最好提前做好防护。拍摄当地居民，尤其是渔夫或老人，请务必先微笑示意并征得同意，这里不是繁忙的旅游区，人们很重视隐私和礼貌。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河口的老房子`}</h4>
                  <p className="text-sm text-blue-800">{`一栋由19世纪船匠小屋改造的民宿，房间窗户正对着沃莱特河入海口，你能在枕边听到潮汐交替的细微声响。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`悬崖边的隐居所`}</h4>
                  <p className="text-sm text-green-800">{`一座位于悬崖顶部、拥有全景露台的现代风格小型旅馆，部分房间的玻璃窗直面英吉利海峡，风暴天气时景观尤为震撼。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`镇中心的家庭客栈`}</h4>
                  <p className="text-sm text-yellow-800">{`由一对老夫妇经营的温馨客栈，早餐有自家果园的果酱和现烤的羊角包，主人能告诉你许多旅游指南上没有的本地故事。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`特色露营体验`}</h4>
                  <p className="text-sm text-purple-800">{`距离海岸步行十分钟的生态露营地，提供设备齐全的木质帐篷屋，晚上可以伴着海浪声入睡，清晨被海鸥叫醒。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（7-8月）住宿非常紧张，务必提前数月预订。小镇夜晚极其安静，治安良好，但几乎没有夜生活，餐厅也关得早，适合追求宁静的旅人。选择住宿时注意，有些老房子隔音一般，但正是这种“不完美”带来了更地道的居住体验。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开滨海沃莱特时，我的口袋里装了几颗从卵石滩上捡来的燧石，灰白色，冰凉，沉甸甸的。它们是在海浪千万年的打磨下才变得如此圆润，而就在它们诞生的这片悬崖里，人类用短短几年时间，挖掘出了代表冲突与撕裂的黑暗迷宫。这真是一种奇妙的共生：最漫长自然力创造的永恒之美，与最激烈人类行为留下的短暂伤疤，共享着同一片地理空间。这个地方教会我的，是一种看待历史的“立体视角”。风景不止于地平线之上看得见的部分，更在于其表面之下承载的记忆层。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求即时刺激和网红打卡的时代，滨海沃莱特显得如此“不合时宜”。它没有令人瞠目的建筑，没有热闹的市集，甚至那条著名的河也短得让人哑然失笑。但它要求你慢下来，去倾听卵石的声音，去感受地下通道的阴冷，去理解一片风景之下的多重时间维度。它会给你一种平静的震撼。当你坐在夕阳下的海滩，看着最后一缕光从悬崖上褪去，你会感到自己触摸到的不仅是法国的土地，更是时间本身那复杂而深邃的肌理。对于那些厌倦了浮光掠影，渴望在一处地点中同时感受自然的伟力、历史的重量和日常生活的韧性的旅人来说，这个诺曼底的小小角落，无疑是一处值得专程前往的心灵之地。它像一块活着的化石，提醒我们：有些地方，正因为保存了完整的记忆——无论是美好的还是痛苦的——才显得格外完整和真实。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/pezenas-france-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩泽纳斯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pézenas</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sarlat-la-caneda-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨尔拉拉卡内达</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sarlat-la-Canéda</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/saint-savinien-charente-maritime" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣萨维尼安</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Saint-Savinien</p>
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
