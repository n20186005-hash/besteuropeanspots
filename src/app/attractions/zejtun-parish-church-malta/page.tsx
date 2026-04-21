import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '泽图恩 Żejtun｜马耳他南境的“守护神”，原汁原味的巴洛克盛宴与乡村节庆 - 最佳欧洲景点',
  description: '你开车穿过马耳他南部略显干旱的丘陵，橄榄树和石头墙在阳光下泛着银光，空气里有海盐和干草的味道。就在你觉得风景有些单调重复时，一个巨大的、蜂蜜色的穹顶和双塔钟楼，毫无征兆地从一片低矮的民居屋顶上隆起，像一艘石质的巨轮搁浅在时间的岸上。那就是泽图恩的圣凯瑟琳教堂，它的庞大与精美，与你一路所见形成剧烈反差',
}

export default function ZejtunParishChurchMaltaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '马耳他', href: '/destinations/europe' },
            { label: '东南区', href: '/destinations/europe' },
            { label: '泽图恩', href: '/attractions/zejtun-parish-church-malta' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`泽图恩・Żejtun・马耳他・东南区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你开车穿过马耳他南部略显干旱的丘陵，橄榄树和石头墙在阳光下泛着银光，空气里有海盐和干草的味道。就在你觉得风景有些单调重复时，一个巨大的、蜂蜜色的穹顶和双塔钟楼，毫无征兆地从一片低矮的民居屋顶上隆起，像一艘石质的巨轮搁浅在时间的岸上。那就是泽图恩的圣凯瑟琳教堂，它的庞大与精美，与你一路所见形成剧烈反差，那一刻的震撼，是任何旅游指南都无法提前赋予的。
把车停在老城边缘，步行穿过安静的巷子走向教堂广场。下午的阳光把教堂正立面的每一处雕刻都拉出长长的影子，那些繁复的涡卷、圣徒雕像和玫瑰花窗，在暖色调的石灰岩上显得既庄严又温柔。推开厚重的木门，瞬间被内部的空旷与辉煌吞没。你的脚步声在穹顶下回荡，空气里弥漫着旧木头、蜡油和一丝凉凉的石头气息。眼睛需要几秒钟适应昏暗，然后，金色、红色、蓝色逐渐从阴影中浮现——巨大的穹顶壁画描绘着圣凯瑟琳的神秘婚礼，大理石祭坛闪闪发光，侧面的小礼拜堂里，虔诚的老太太正默默祈祷。这里没有成群结队的游客，只有本地人来往的细碎声响，它首先是一座活着的社区教堂，其次才是让你惊叹的景点。
走出教堂，回到以圣格里高利命名的小广场。这里才是泽图恩真正的心脏。你会看到老人们穿着熨帖的衬衫，坐在长椅上用马耳他语低声交谈，眼神像地中海一样深邃。咖啡馆的遮阳篷下，男人打着纸牌，咖啡杯叮当作响。孩子们追着足球跑过几个世纪前铺就的石板路。这座古城没有把自己包装成明信片，它只是如常生活着，把最宏大的建筑当作日常背景。而正是这种“如常”，让它拥有了一种别处难寻的、沉甸甸的真实感。你知道，一旦等到十一月的圣凯瑟琳节，这个看似宁静的广场将会被旗帜、鲜花、音乐和沸腾的人潮彻底点燃，那是它一年一度向世界展露真容的时刻。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你开车穿过马耳他南部略显干旱的丘陵，橄榄树和石头墙在阳光下泛着银光，空气里有海盐和干草的味道。就在你觉得风景有些单调重复时，一个巨大的、蜂蜜色的穹顶和双塔钟楼，毫无征兆地从一片低矮的民居屋顶上隆起，像一艘石质的巨轮搁浅在时间的岸上。那就是泽图恩的圣凯瑟琳教堂，它的庞大与精美，与你一路所见形成剧烈反差，那一刻的震撼，是任何旅游指南都无法提前赋予的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "把车停在老城边缘，步行穿过安静的巷子走向教堂广场。下午的阳光把教堂正立面的每一处雕刻都拉出长长的影子，那些繁复的涡卷、圣徒雕像和玫瑰花窗，在暖色调的石灰岩上显得既庄严又温柔。推开厚重的木门，瞬间被内部的空旷与辉煌吞没。你的脚步声在穹顶下回荡，空气里弥漫着旧木头、蜡油和一丝凉凉的石头气息。眼睛需要几秒钟适应昏暗，然后，金色、红色、蓝色逐渐从阴影中浮现——巨大的穹顶壁画描绘着圣凯瑟琳的神秘婚礼，大理石祭坛闪闪发光，侧面的小礼拜堂里，虔诚的老太太正默默祈祷。这里没有成群结队的游客，只有本地人来往的细碎声响，它首先是一座活着的社区教堂，其次才是让你惊叹的景点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走出教堂，回到以圣格里高利命名的小广场。这里才是泽图恩真正的心脏。你会看到老人们穿着熨帖的衬衫，坐在长椅上用马耳他语低声交谈，眼神像地中海一样深邃。咖啡馆的遮阳篷下，男人打着纸牌，咖啡杯叮当作响。孩子们追着足球跑过几个世纪前铺就的石板路。这座古城没有把自己包装成明信片，它只是如常生活着，把最宏大的建筑当作日常背景。而正是这种“如常”，让它拥有了一种别处难寻的、沉甸甸的真实感。你知道，一旦等到十一月的圣凯瑟琳节，这个看似宁静的广场将会被旗帜、鲜花、音乐和沸腾的人潮彻底点燃，那是它一年一度向世界展露真容的时刻。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`泽图恩`} />
                <InfoRow label="英文名称" value={`Żejtun`} />
                <InfoRow label="正式名称" value={`圣凯瑟琳教区教堂 (The Parish Church of St. Catherine)`} />
                <InfoRow label="国家" value={`马耳他`} />
                <InfoRow label="城市" value={`东南区`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`马耳他岛南境的历史与精神堡垒，数个世纪以来直面来自地中海的风险与挑战。`} />
                <InfoRow label="建筑特色" value={`一座融合了军事防御基因与巴洛克艺术辉煌的“石头史诗”，其规模在乡村教堂中堪称巨构。`} />
                <InfoRow label="建筑风格" value={`马耳他巴洛克风格，深受西西里和罗马影响，并带有本地独特的质朴与雄浑气质。`} />
                <InfoRow label="文化价值" value={`一个活态的马耳他乡村传统与信仰中心，尤其在圣凯瑟琳节期间，你能触摸到这个民族最真实、最热烈的心跳。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`教堂内部通常在上午9:00至下午17:00开放，但中午12:30至下午16:00可能会有午休关闭，弥撒时间（通常在工作日傍晚及周日全天）谢绝游客参观，建议行前在教区网站核对具体时间。夏季（6-9月）开放时间可能延长。最重要的圣凯瑟琳节（11月25日及前一个周末）期间，教堂全天开放，城内充满活动。`} />
              <InfoRow label="门票价格" value={`免费进入。教堂入口处设有捐款箱，用于维护这座宏伟建筑，投入2-5欧元是表达支持与尊重的惯例。`} />
              <InfoRow label="地址" value={`Pjazza San Girgor, Żejtun, ZEJ 1001, Malta`} />
              <InfoRow label="交通方式" value={`从马耳他国际机场（Luqa）出发是最佳选择。出租车是最便捷的方式，车程约20分钟，费用约20-25欧元。公交车也能抵达，但班次相对较少（约每小时一班），可乘坐X4路在“Żejtun”站下车，车程约40分钟，建议购买预付费的Tallinja交通卡。自驾是探索周边的最佳方式，老城边缘有免费停车场，但城内狭窄街道不适合开车进入。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "Żejtun这个名字本身就藏着故事，它源于阿拉伯语“żejtun”，意为“橄榄”。早在骑士团抵达之前，这片肥沃的土地就以橄榄园闻名，是马耳他重要的农业中心。中世纪时，这里就是一个有防御围墙的集镇，因为它地处马耳他岛南部海岸的内陆，是抵御来自海上（主要是北非海盗）袭击的第一道防线之一。那时候的泽图恩，骨子里就带着一份戒备和坚韧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "命运的转折点与马耳他骑士团息息相关。1565年那场决定岛国生死存亡的“大围攻”中，泽图恩人付出了惨重代价。土耳其军队在进攻主要堡垒的同时，也猛烈袭击了南部地区，许多泽图恩居民被杀或被掳为奴。这场惨痛经历，让幸存者们对守护神圣凯瑟琳的信仰更加炽烈。他们决定，要建造一座配得上这份信仰与牺牲的宏伟教堂。于是，从1692年开始，在建筑师洛伦佐·加法（Lorenzo Gafà）——他也是姆迪娜大教堂的设计者——的指导和后续工匠的接力下，一座规模惊人的新教堂在旧教堂的原址上拔地而起。你能想象吗？在一个以乡村为主的地域，人们凭借信仰和社区力量，一砖一石地垒起了这座堪比许多城市主座教堂的巴洛克杰作。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "教堂的建设本身就是一部社区史诗。资金来自居民的捐赠和橄榄油产业的收益，许多工匠就是本地人。教堂那独特的、略带粗犷的宏伟气质，或许正源于此：它没有意大利巴洛克那种极致的纤巧与戏剧性，反而有一种来自土地和海洋的力量感。双塔楼的设计不仅是为了美观，也延续了瞭望与警戒的古老功能。在接下来的几个世纪里，它不仅是宗教中心，也是社区集会、商议大事、乃至在危机时刻避难的核心场所。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间来到二十世纪，战争的阴影再次笼罩。第二次世界大战期间，马耳他遭受了轴心国猛烈的空袭。泽图恩由于靠近港口和机场，也未能幸免。然而，奇迹般地，这座巨大的教堂尽管近旁落下炸弹，主体结构却得以幸存，只受到一些损伤。战后，人们立即着手修复，这不仅仅是修复建筑，更是修复社区的脊梁和精神家园。今天，你在教堂内部仔细观看，或许还能在某处找到关于那段艰难岁月的小小标记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如今，当你漫步泽图恩，历史是层层叠叠的。宏伟的巴洛克教堂旁边，可能是一条狭窄的中世纪巷道；一栋骑士团时期贵族修建的“宫殿”（Palazzo），现在可能是一家温馨的餐馆。而每年十一月，当人们抬着圣凯瑟琳的银像，在礼炮、乐队和漫天彩纸中游行时，你看到的不只是一场热闹的“费斯塔”（Festa），你看到的是从十六世纪的创伤中生长出的生命力，是几个世纪以来未曾中断的社区传承。这座教堂和这座城，是一体的，它们共同讲述着一个关于坚守、信仰与庆祝的故事。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`最佳的泽图恩深度体验，建议安排一个完整的下午，从大约下午三点半开始。这个时间点避开了中午本地人的午休和教堂可能关闭的时段，阳光也开始变得柔和，非常适合拍照。整体游览节奏应该是“先内后外，先静后动”：先用足够的时间沉浸于教堂内部的庄严与艺术，然后在光线最美的时分细细品味其外部建筑细节，最后融入老城巷弄和广场的日常脉搏。整个行程大约需要3到4小时，如果恰逢节庆前夕，傍晚时分会看到街道开始装饰，氛围悄然转变，那将是额外的惊喜。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`绝对尊重教堂内举行的任何宗教仪式，保持肃静，切勿在弥撒期间穿梭参观或拍照。
老城的街道多为原始石板路且常有缓坡，务必穿一双舒适防滑的鞋子。
当地居民友好但注重隐私，拍摄民居或人物时请先微笑示意，获得默许后再进行。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先推开圣凯瑟琳教堂那扇厚重的木门，让眼睛在宏伟中殿的昏暗与辉煌中慢慢适应，仰头凝视描绘在天花板上的壮丽穹顶画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`静静地沿着侧廊漫步，寻找那些装饰着不同家族徽章或职业象征的私人小礼拜堂，每一座都诉说着旧日社区的构成。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定不要错过教堂后部区域，那里通常更显古朴，有时还能看到与早期防御工事相连接的痕迹，感受建筑从防御到赞美的功能演变。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂侧门走出，绕到建筑后方和侧面，你会发现从不同角度观赏，教堂呈现出截然不同的轮廓和光影质感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`随意选一条从广场辐射出去的狭窄老巷走进去，用手触摸两边蜂蜜色石灰岩墙壁的粗糙质感，听脚下石板路的回响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`留意巷子里那些古老的门廊、雕刻的窗棂和偶尔出现的、比主教堂更古老的小型礼拜堂遗址，它们才是古城的原始肌理。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前回到圣格里高利广场，找一家户外咖啡馆坐下，点一杯“Kinnie”本地苦橙汽水，观察广场上的生活如何随着光线变化而切换场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果你的行程允许，尝试在黄昏时分再次进入教堂（如果开放），这时内部灯光初上，与窗外的暮色交织，会营造出与白天截然不同的神秘氛围。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`教堂正立面全景`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到日落前，阳光从侧面照射，能完美勾勒出巴洛克立体的雕刻细节，站在广场对角，将当地人的生活场景也纳入前景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`穹顶内部仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`使用广角镜头，站在中殿正中央仰拍，最佳时间是正午前后有阳光直射天窗时，穹顶壁画会被自然光照亮，色彩极其绚丽。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从后方小巷仰望`}</h4>
                  <p className="text-sm text-gray-700">{`寻找教堂后方某条狭窄的上坡小巷，以巷子两旁的旧房屋作为自然画框，向上拍摄教堂巨大的后殿和穹顶，构图充满戏剧张力。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣器室门口的光影走廊`}</h4>
                  <p className="text-sm text-gray-700">{`如果允许进入侧廊深处，常能遇到一束从高侧窗射入的阳光，照亮一排古老的木雕椅或石柱，形成明暗交替的深邃走廊感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`节庆之夜的全景`}</h4>
                  <p className="text-sm text-gray-700">{`若在圣凯瑟琳节期间到访，夜晚的教堂被无数灯泡勾勒出金色轮廓，从广场远端拍摄，将熙攘的人群、绚烂的灯光和庄严的建筑一同捕获。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`教堂内部通常禁止使用闪光灯和三脚架（小型桌面三脚架或可），以防损坏艺术品和干扰他人，请尽量使用高感光度和大光圈镜头手持拍摄。`}</li>
                <li>• {`马耳他的光线强烈，建议携带一块偏振镜，可以有效减少石头表面的反光，让建筑色彩更饱和，蓝天更深邃。`}</li>
                <li>• {`拍摄当地居民，尤其是老人和节庆游行者时，请务必先建立眼神交流并微笑，获得非语言的许可，这是一种基本的尊重。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`隐藏在老城宁静巷弄里的家庭式民宿“Dar il-Kbir”，由一栋传统石头屋改造，主人会为你准备地道的马耳他早餐，夜晚在屋顶露台能看到教堂钟楼的剪影。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`住在城郊经过精心修复的“17世纪农庄”（Razzett tal-Barrani），体验古老的马耳他乡村建筑魅力，拥有私人庭院和传统石烤炉，安静得只能听到风声和鸟鸣。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`位于附近海边小镇马尔萨什洛克的“科林斯宫殿酒店”，提供五星级的海景客房和泳池，白天探索古城，傍晚回到海边享受地中海日落与海鲜大餐。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`独特选择`}</h4>
                  <p className="text-sm text-purple-800">{`如果追求极致的历史感，可以寻觅老城内由古老“宫殿”（贵族宅邸）改造的精品住宿，如“Palazzo Bettina”，睡在拥有拱形石顶的房间里，彻底沉浸于时光之中。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（6月至9月）是马耳他旅游旺季，也是本地节庆高峰，泽图恩及周边的特色住宿非常抢手，务必提前数月预订。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "选择老城内的住宿意味着要拖着行李走过一段石板路，且夜间非常安静；选择海边酒店则需依赖交通工具往返，但生活便利度更高。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "许多本地民宿不提供24小时前台服务，提前与主人沟通好抵达时间至关重要，他们会热情地为你安排好一切。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开泽图恩的时候，你带走的可能不是一堆精美的纪念品，而是一种难以言喻的踏实感。在这个被过度“景点化”的世界里，它固执地保持着一种完整的自我。那教堂不是孤立的博物馆，而是社区跳动的心脏；那些节日装饰不是为游客准备的表演，而是发自内心的、年复一年的情感宣泄。你在这里，不是一个旁观者，而是在不经意间，被允许窥见了一个古老社区最真实、最健康的生命状态——他们有宏伟的历史可以自豪，有虔诚的信仰作为根基，更有将日常过得热气腾腾的世俗智慧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，如果你厌倦了那些挤满人群、被精心包装的“必到之地”，如果你想知道马耳他 beyond the beaches and the hypogeum（除了海滩和地下宫殿）还有什么，那么请一定要来泽图恩。它不会用喧嚣迎接你，但会用一座惊人的巴洛克教堂的沉默力量震撼你，再用广场上一杯咖啡的时间温柔地包裹你。在这里，旅行不再是收集地标，而是感受一个地方如何用石头、信仰和节庆，在漫长的时间里，为自己书写下一部生动而坚韧的传记。这是一次关于“真实”的朝圣，值得你为它专程绕一段路。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/popeye-village-malta" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    大
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">大力水手村</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Popeye Village</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tarxien-temples" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塔西安神庙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tarxien Temples</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/red-tower-mellieha" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马尔法海角红塔（圣阿加莎塔）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">St Agatha‘s Tower (Red Tower)</p>
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
