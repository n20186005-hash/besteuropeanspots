import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '圣安杰洛山 Monte Sant’Angelo｜探访大天使显灵的白崖圣城与千年朝圣之路 - 最佳欧洲景点',
  description: '车子在加尔加诺半岛的丘陵间盘旋，当你第一次从某个拐角望见它时，会忍不住屏住呼吸。那不是一座普通的山城，而是一片从深绿色森林和裸露岩壁中生长出来的、纯粹无瑕的白色。阳光毫不吝啬地泼洒在那些立方体般的房屋上，反射出耀眼的光，整座山城就像一颗巨大的、未经雕琢的钻石，静静地镶嵌在亚得里亚海与群山之间。空气里',
}

export default function MonteSantAngeloPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '圣安杰洛山', href: '/attractions/monte-sant-angelo' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`圣安杰洛山・Monte Sant’Angelo・意大利・普利亚大区福贾省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在加尔加诺半岛的丘陵间盘旋，当你第一次从某个拐角望见它时，会忍不住屏住呼吸。那不是一座普通的山城，而是一片从深绿色森林和裸露岩壁中生长出来的、纯粹无瑕的白色。阳光毫不吝啬地泼洒在那些立方体般的房屋上，反射出耀眼的光，整座山城就像一颗巨大的、未经雕琢的钻石，静静地镶嵌在亚得里亚海与群山之间。空气里有股特别的味道，是远处松林和海风带来的咸湿气息，混合着老石头被太阳晒暖后散发的、干燥而古老的气味。
顺着之字形的公路向上，城市的面貌逐渐清晰。这里没有熙熙攘攘的游客大军，时间仿佛被调慢了。你会看到穿着黑色衣服的老妇人，手臂上挎着篮子，缓慢地走在被岁月磨得光滑发亮的石板台阶上；听到从某个小巷深处传来的、断断续续的意大利语交谈声，伴随着远处教堂钟声沉稳的回响。生活的节奏在这里与朝圣的节奏合二为一。当地人早已习惯了与这座圣山共处，咖啡馆里坐着闲聊的老人，他们的家族故事或许可以追溯到几百年前某个来此忏悔的祖先。
而这一切的核心，那个让无数人跋涉千里的磁石，就隐藏在山城的心脏——圣米迦勒洞穴。那不是一座拔地而起的宏伟教堂，而是一个向下、向山体内部探寻的神圣空间。当你接近它时，一种奇特的敬畏感会悄然降临。它不是用建筑的高度来震慑你，而是用历史的深度和信仰的厚重来包裹你。这座城的灵魂不在天际线，而在大地的腹中，等待着你去叩访那则流传了十五个世纪的、关于天使与启示的传说。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在加尔加诺半岛的丘陵间盘旋，当你第一次从某个拐角望见它时，会忍不住屏住呼吸。那不是一座普通的山城，而是一片从深绿色森林和裸露岩壁中生长出来的、纯粹无瑕的白色。阳光毫不吝啬地泼洒在那些立方体般的房屋上，反射出耀眼的光，整座山城就像一颗巨大的、未经雕琢的钻石，静静地镶嵌在亚得里亚海与群山之间。空气里有股特别的味道，是远处松林和海风带来的咸湿气息，混合着老石头被太阳晒暖后散发的、干燥而古老的气味。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`顺着之字形的公路向上，城市的面貌逐渐清晰。这里没有熙熙攘攘的游客大军，时间仿佛被调慢了。你会看到穿着黑色衣服的老妇人，手臂上挎着篮子，缓慢地走在被岁月磨得光滑发亮的石板台阶上；听到从某个小巷深处传来的、断断续续的意大利语交谈声，伴随着远处教堂钟声沉稳的回响。生活的节奏在这里与朝圣的节奏合二为一。当地人早已习惯了与这座圣山共处，咖啡馆里坐着闲聊的老人，他们的家族故事或许可以追溯到几百年前某个来此忏悔的祖先。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而这一切的核心，那个让无数人跋涉千里的磁石，就隐藏在山城的心脏——圣米迦勒洞穴。那不是一座拔地而起的宏伟教堂，而是一个向下、向山体内部探寻的神圣空间。当你接近它时，一种奇特的敬畏感会悄然降临。它不是用建筑的高度来震慑你，而是用历史的深度和信仰的厚重来包裹你。这座城的灵魂不在天际线，而在大地的腹中，等待着你去叩访那则流传了十五个世纪的、关于天使与启示的传说。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`圣安杰洛山`} />
                <InfoRow label="英文名称" value={`Monte Sant’Angelo`} />
                <InfoRow label="正式名称" value={`Monte Sant’Angelo`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`普利亚大区福贾省`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`自公元490年大天使米迦勒首次显灵以来，这里便成为西方世界最古老、最重要的天使朝圣地之一，与法国的圣米歇尔山齐名。`} />
                <InfoRow label="建筑特色" value={`一座纯白色的中世纪山城，层层叠叠的房屋如瀑布般从山顶倾泻而下，中心是深嵌入石灰岩山体的古老朝圣洞穴与宏伟的钟楼。`} />
                <InfoRow label="建筑风格" value={`以朴素的普利亚罗马式风格为主，混杂着诺曼、斯瓦比亚及后期巴洛克风格的丰富叠加。`} />
                <InfoRow label="文化价值" value={`它是信仰、历史与地理的奇特融合，见证了从伦巴第人到十字军，从普通农民到教皇的千年朝圣史诗，是活着的“石头信仰”博物馆。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`圣米迦勒洞穴圣殿（Santuario di San Michele Arcangelo）全年开放，夏季（4月-9月）通常为早上7:00至晚上7:30，冬季（10月-3月）为早上7:30至中午12:30，下午2:30至晚上5:00。山城街道及观景台全天开放。请注意，圣殿在重要的宗教节日（如5月8日和9月29日的天使节）以及每周日上午的弥撒期间，参观可能会受限或仅对朝圣者开放。建议出行前在官方网站核查具体时间。`} />
              <InfoRow label="门票价格" value={`进入圣米迦勒洞穴圣殿本身是免费的。但若要进入附属的“博物馆”区域（包含珍宝馆、历史长廊等），需购买门票，约5欧元。团体（10人以上）和学生通常有折扣，约为3欧元。65岁以上老人及特定宗教团体有时可享优惠，具体请在现场咨询。`} />
              <InfoRow label="地址" value={`Via Reale Basilica, 71037 Monte Sant’Angelo FG, Italy`} />
              <InfoRow label="交通方式" value={`最近的国际机场是巴里机场（Aeroporto di Bari-Palese），距离约150公里。从巴里机场或巴里中央火车站（Bari Centrale）出发，最便捷的方式是自驾，沿A14和SS89公路行驶，约2小时车程。若使用公共交通，可从巴里火车站乘坐Ferrovie del Gargano公司的地区火车或巴士前往福贾（Foggia），耗时约1.5小时。抵达福贾后，换乘Ferrovie del Gargano的巴士（班次有限，通常每天4-6班）前往蒙特圣安杰洛，车程约1小时15分钟。强烈建议提前在Ferrovie del Gargano官网或车站查询并购买联票，周末和节假日班次会大幅减少。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事的开端，要回到遥远的公元490年。根据古老的《Liber de Apparitione》手稿记载，加尔加诺山区的一位贵族领主，因为自己最心爱的一头公牛走失了，一路追寻到了这个偏僻的石灰岩山洞前。洞内漆黑幽深，公牛就躲在里面。领主情急之下，向洞口射了一箭，奇怪的是，箭矢竟在空中调转方向，回射伤了他自己。惊惧困惑的领主赶到当时的主教座堂求助，主教劳伦蒂乌斯下令进行三天的祈祷和斋戒。第三天夜里，大天使米迦勒向主教显现，宣告了这个山洞的神圣性：“此地由我选择，我即是它的守护者……凡在此洞穴祈祷者，他们的祷告都将被上天垂听。”这是第一次显灵，一个关于迷失与指引、暴力与神圣逆转的原始寓言，为这座山定下了永恒的基调。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`此后的几个世纪，这个天然洞穴成为了越来越重要的朝圣地。伦巴第人，这个当时统治南意大利的日耳曼部族，尤其崇敬战神般的圣米迦勒，他们将这里尊为王国最重要的圣地之一，进行了大规模的修建。你可以想象，公元7到8世纪，穿着皮甲的伦巴第战士和风尘仆仆的信徒，沿着崎岖的山路来到这里，不是为了欣赏风景，而是为了在天使的庇佑下获得勇气、寻求救赎。他们开凿了通往洞穴的“神圣阶梯”，在洞穴外修建了最初的教堂。山城开始围绕着这个精神核心逐渐成型，白色的房屋如同聚集在牧羊人身边的羊群。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`中世纪鼎盛时期，圣安杰洛山的声望达到了顶峰。它成了通往耶路撒冷朝圣之路上的一个重要中转站，甚至被称为“耶路撒冷之门”。十字军骑士在出征或归来时，常会在此停留祈祷，将自己的命运托付给天使长的宝剑。1274年，安茹王朝的查理一世曾来此朝圣；1366年，甚至有一位女隐士在这里建立了为朝圣者服务的医院。教廷也多次赋予它特权。最重要的是，这个圣地并非由任何一位主教或修道院长控制，而是由一个独特的“执事长”团体管理，直接听命于教皇，这在整个基督教世界都极为罕见，凸显了它超然的地位。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，神圣并不意味着永远平静。地理上的偏远也带来了劫难。历史上，它曾多次遭到撒拉森海盗的袭击和洗劫，山城的防御工事和城堡（今天依然屹立在最高处）便是明证。不过，信仰的火种从未熄灭。每一次破坏后，总有更宏伟的建筑被建立起来。我们现在看到的洞穴圣殿内部，那宏伟的罗马式大门、诺曼风格的柱廊、精美的中世纪壁画层叠交错，正是一部用石头和颜料写就的灾难与重建史。巴洛克时期，内部又增添了许多华丽的装饰，比如天使长米迦勒的纯白大理石雕像，与洞穴原始粗粝的岩壁形成了戏剧性的对比，仿佛在诉说信仰从朴素到繁复的演变。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走到今天，它或许不再是国际旅游的热门头条，但这恰恰保留了它最本真的力量。每年，尤其是在5月和9月的天使节，你依然能看到成千上万的信徒，徒步或乘车而来，许多人会沿着“神圣阶梯”跪行而上。那一刻，你会明白，这座白色的山城不是一个冰冷的博物馆，而是一颗仍在有力跳动的信仰之心，它的每一次搏动，都回响着一千五百年前的那声天使宣告。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`理想的游览应该从清晨开始，争取在上午九点前抵达山城。这不仅是为了避开可能（虽然不多）的旅游小团队，更是为了捕捉晨光斜射时，白色房屋与深蓝天空形成的绝美对比，以及享受圣殿开放初期相对宁静的氛围。整个深度游览建议预留至少5-6小时，节奏宜慢不宜快。上午将核心献给神秘的洞穴圣殿及其周边博物馆，感受信仰的厚重；中午在山城小巷中随意漫步、用餐，体验当地的生活脉搏；下午则攀登至山顶城堡，俯瞰加尔加诺半岛的壮丽全景，为旅程画上宏大的句点。这样的安排顺应了光线变化，也由内至外，从精神体验到自然馈赠，层次分明。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`进入圣米迦勒洞穴圣殿时，请务必穿着得体，避免无袖上衣和过短的裤裙，这是重要的宗教场所，尊重当地习俗是必须的。山城道路多为陡峭的台阶和斜坡，请务必穿一双舒适防滑的鞋子，高跟鞋在这里毫无用武之地。小城餐馆的营业时间很“意大利”，下午一点半之后午餐可能就结束了，晚上七点半之后才供应晚餐，规划好用餐时间以免饿肚子。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从“ Porta dei due leoni”双狮门进入老城，沿着被朝圣者脚步磨出凹痕的Corso Federico II石板主街向上慢行，感受山城刚刚苏醒的宁静`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`直接前往圣米迦勒洞穴圣殿，先不要急于进入洞穴，而是在外部广场驻足，仰望那座高耸的八角形钟楼和诺曼式的华丽立面`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着“神圣阶梯”缓缓下行进入洞穴核心，让眼睛适应昏暗的光线，去触摸那传说中天使显灵过的原始岩壁，感受空气中沁凉的湿意与肃穆`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在洞穴底部的祭坛前静立片刻，观察不同年代、不同风格的建筑元素——从伦巴第时期的壁画残片到巴洛克的天使雕像——如何在此共生`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观完毕返回地面后，别忘了探索圣殿附属的博物馆和珍宝馆，那里收藏的古老圣物、还愿银牌和主教长袍会为你补全朝圣历史的细节`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从圣殿侧面的小巷钻出，随意迷失在迷宫般的白色街巷中，寻找一家有露天座位的小餐馆，点一份当地的“orecchiette”（猫耳朵面）和一杯普利亚红酒`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`饱餐后沿着指示牌向山顶进发，穿过居民区，最终抵达那座敦实的斯瓦比亚城堡，沿着城墙走一圈，将森林、山谷与远方的亚得里亚海尽收眼底`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山时选择另一条小径，或许会路过某个安静的观景台，在那里坐下，看夕阳开始为白色的房屋涂上一层温暖的金色`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`从城外“Belvedere”观景台远眺全景`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，阳光以低角度照射山体，能拍出白色城市立体感最强、光影层次最丰富的明信片角度，使用长焦镜头可以压缩空间，突出房屋的层叠感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣殿广场仰望钟楼`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点左右，阳光能较好照亮钟楼侧面，站在广场东南角，以部分古老的石拱门或街巷作为前景框架，可以拍出历史纵深感和建筑的巍峨。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`洞穴圣殿内部拍摄天光`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，当一束自然光从洞穴上方的开口垂直射入昏暗的殿堂时，迅速移动到祭坛侧面，可以捕捉到“神圣之光”照亮尘埃、烟雾与祈祷人群的戏剧性瞬间，提高ISO并稳定相机。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`山顶城堡城墙俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚时分，站在城堡西侧的城垛旁，使用广角镜头，将近处斑驳的石头城墙、中景层层叠叠的白色屋顶以及远方辽阔的森林与海平面一同纳入画面，展现人类造物与自然伟力的对话。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`小巷中的生活一瞥`}</h4>
                  <p className="text-sm text-gray-700">{`任何有柔和散射光的白天时间，在老城小巷里守候，当有当地居民（特别是老人）走过被阳光照亮的白色墙壁时，快速抓拍，能获得充满故事感和人文温度的作品。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在洞穴圣殿内部，严格禁止使用闪光灯和三脚架（除非获得特殊许可），一方面避免干扰宗教活动，另一方面闪光灯会破坏古老壁画和艺术品。拍摄当地居民时，请务必先微笑并征得对方同意，一个友好的手势或一句“Posso？”（可以吗？）能避免误会。加尔加诺的日光非常强烈，尤其在白色建筑反射下，建议携带偏振镜来控制反光并让天空的蓝色更饱和。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`特色石屋体验`}</h4>
                  <p className="text-sm text-blue-800">{`住在老城中心由百年历史“特鲁利”式石屋改造的民宿里，晚上睡在厚重的拱形石顶下，清晨被邻居家厨房飘来的咖啡香和教堂钟声温柔唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`朝圣者之家氛围`}</h4>
                  <p className="text-sm text-green-800">{`选择一家由古老朝圣者旅舍演变而来的小型家庭旅馆，房间简朴但干净温暖，老板可能会跟你分享许多关于圣迹的地方传说，让你仿佛也成了千年朝圣传统的一部分。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`田园风光度假屋`}</h4>
                  <p className="text-sm text-yellow-800">{`住在山城下方橄榄园与杏树林环绕的独立农庄里，拥有私密的海景露台，白天探索圣地，晚上归来享受绝对的宁静与漫天繁星，自驾游客的理想选择。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`福贾市区便捷之选`}</h4>
                  <p className="text-sm text-purple-800">{`如果追求交通便利和更多餐饮选择，可以住在福贾火车站附近的设计酒店，次日乘早班巴士上山，适合时间紧凑或晚抵达的旅客。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿非常有限且季节性很强（天使节期间可能提前数月订满），务必提前预订。如果选择住在山上，请做好应对夜间极为安静的环境和可能需要步行一段陡峭阶梯才能到达住处的心理准备，但这份沉浸感是无价的。自驾游客若预订山城内的住宿，务必提前确认是否有停车位，老城停车位极其紧张且多为受限的ZTL区域。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开圣安杰洛山时，我脑子里反复回响的不是某个具体的建筑细节，而是一种混合的感觉：洞穴深处的沁凉与岩石的粗糙触感，阳光下白色墙壁的炫目，小巷里飘散的饭菜香，以及那种无处不在的、缓慢而坚定的时间感。这里不像那些被过度消费的旅游名胜，它没有急于向你证明什么，只是静静地在那里，承载着重量。那种重量是真实的，是十五个世纪以来，无数个带着恐惧、希望、感恩或困惑的灵魂，在此地卸下又留下的东西。它们沉淀在石阶的凹痕里，镶嵌在还愿银牌上，回响在每一次的钟声里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求即时满足和浮光掠影的时代，圣安杰洛山提供了一种反向的旅行价值。它邀请你向下看，向深处走，去触摸信仰最原始的岩壁；它要求你慢下来，去体会一种与宏大历史叙事并行的、琐碎而坚韧的日常生活。它告诉你，圣地不必在遥远的彼岸，它可能就在一座平凡的山中，在一个古老的洞穴里，等待着每一个愿意暂时离开喧嚣表面、去进行一场微小而深刻的内省之旅的人。这不仅仅是一次地理上的造访，更是一次时间的潜泳和心灵的校准。对于任何渴望在旅程中触摸到欧洲不止于华丽外表，更在于其精神脉络与历史厚度的旅人来说，这座白色的山城，都是一个不应错过的、沉默而有力的答案。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/amelia-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿梅利亚古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Amelia Old Town</p>
                  </div>
                </div>
              </a>
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
              <a href="/attractions/volterra-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沃尔泰拉古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Volterra</p>
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
