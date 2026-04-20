import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '佩德拉萨 Pedraza｜每年只亮两晚！在万支蜡烛的海洋里穿越回中世纪 - 最佳欧洲景点',
  description: '想象一下，当现代世界的电光从地图上被轻轻抹去，唯一的光源来自上万支颤动的烛火——这就是佩德拉萨在每年那两个神奇夏夜交给你的现实。白天的它，已经足够迷人：车子驶离干燥的高原公路，拐进丘陵，一座被蜜色石墙严实包裹着的小镇，像一枚古老的琥珀，静静卧在山脊上。空气里有烤乳猪的焦香、石头上晒热的灰尘味，还有远...',
}

export default function PedrazaCandlelightNightPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '佩德拉萨', href: '/attractions/pedraza-candlelight-night' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`佩德拉萨・Pedraza・西班牙・塞哥维亚（卡斯蒂利亚-莱昂自治区）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下，当现代世界的电光从地图上被轻轻抹去，唯一的光源来自上万支颤动的烛火——这就是佩德拉萨在每年那两个神奇夏夜交给你的现实。白天的它，已经足够迷人：车子驶离干燥的高原公路，拐进丘陵，一座被蜜色石墙严实包裹着的小镇，像一枚古老的琥珀，静静卧在山脊上。空气里有烤乳猪的焦香、石头上晒热的灰尘味，还有远处松林传来的一丝清冽。你走在被几个世纪脚步磨得圆润的石板路上，脚步声清晰可闻，时间慢得仿佛有了粘度。
然而，真正的魔法从日落后开始。差不多晚上九点半，你会目睹一场堪称神圣的“熄灯仪式”。全镇的电力被切断，紧接着，居民们开始行动。他们不是简单地点亮灯笼，而是将一支支粗壮的白色蜡烛，放置在每一个窗台、每一段城墙垛口、每一级台阶、每一家店铺的门楣上。烛光不是一下子亮起的，它像金色的潮水，从主广场的拱廊下开始蔓延，顺着狭窄的街巷（他们叫“callejuelas”）流淌，爬上陡峭的坡道，最后漫过整个城墙的轮廓。不过半小时，整座小镇就沉入了一片温暖、摇曳的光之海洋。
此刻，你的感官会被彻底重塑。视觉上，是无限丰富的暖黄色阶：近处烛蕊跳动的亮橘，远处连成一片的柔和蜜金，映在古老石墙上深邃的琥珀阴影。听觉变得异常敏锐：没有了电器嗡嗡声，你能听到烛火轻微的噼啪声、人们压低的惊叹耳语、偶有吉他声从某扇敞开的门里飘出，以及自己踩在石头上的回音。嗅觉被蜂蜡纯净的、略带甜味的香气统治，混合着夜间凉下来的石头气息。这不是一场喧闹的嘉年华，而是一场集体的、静谧的朝圣。当地人手捧蜡烛走在街头，脸上映着光，那神情不是表演给游客看的，而是一种对家园传统深沉的骄傲与沉浸。
最打动人的，莫过于这种极致的浪漫并非商业造景，它源于小镇居民自发的情感。每一扇点着蜡烛的窗户背后，都是一个家庭在参与这场光的仪式。你穿行其中，不再仅仅是个观光客，更像是一个被短暂允许进入他们共同梦境和记忆的幸运访客。这烛光，照亮的不只是石头街道，更是人与地方之间那种亘古的、温柔的联结。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下，当现代世界的电光从地图上被轻轻抹去，唯一的光源来自上万支颤动的烛火——这就是佩德拉萨在每年那两个神奇夏夜交给你的现实。白天的它，已经足够迷人：车子驶离干燥的高原公路，拐进丘陵，一座被蜜色石墙严实包裹着的小镇，像一枚古老的琥珀，静静卧在山脊上。空气里有烤乳猪的焦香、石头上晒热的灰尘味，还有远处松林传来的一丝清冽。你走在被几个世纪脚步磨得圆润的石板路上，脚步声清晰可闻，时间慢得仿佛有了粘度。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，真正的魔法从日落后开始。差不多晚上九点半，你会目睹一场堪称神圣的“熄灯仪式”。全镇的电力被切断，紧接着，居民们开始行动。他们不是简单地点亮灯笼，而是将一支支粗壮的白色蜡烛，放置在每一个窗台、每一段城墙垛口、每一级台阶、每一家店铺的门楣上。烛光不是一下子亮起的，它像金色的潮水，从主广场的拱廊下开始蔓延，顺着狭窄的街巷（他们叫“callejuelas”）流淌，爬上陡峭的坡道，最后漫过整个城墙的轮廓。不过半小时，整座小镇就沉入了一片温暖、摇曳的光之海洋。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`此刻，你的感官会被彻底重塑。视觉上，是无限丰富的暖黄色阶：近处烛蕊跳动的亮橘，远处连成一片的柔和蜜金，映在古老石墙上深邃的琥珀阴影。听觉变得异常敏锐：没有了电器嗡嗡声，你能听到烛火轻微的噼啪声、人们压低的惊叹耳语、偶有吉他声从某扇敞开的门里飘出，以及自己踩在石头上的回音。嗅觉被蜂蜡纯净的、略带甜味的香气统治，混合着夜间凉下来的石头气息。这不是一场喧闹的嘉年华，而是一场集体的、静谧的朝圣。当地人手捧蜡烛走在街头，脸上映着光，那神情不是表演给游客看的，而是一种对家园传统深沉的骄傲与沉浸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，莫过于这种极致的浪漫并非商业造景，它源于小镇居民自发的情感。每一扇点着蜡烛的窗户背后，都是一个家庭在参与这场光的仪式。你穿行其中，不再仅仅是个观光客，更像是一个被短暂允许进入他们共同梦境和记忆的幸运访客。这烛光，照亮的不只是石头街道，更是人与地方之间那种亘古的、温柔的联结。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`佩德拉萨`} />
                <InfoRow label="英文名称" value={`Pedraza`} />
                <InfoRow label="正式名称" value={`Pedraza`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`塞哥维亚（卡斯蒂利亚-莱昂自治区）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座被完整保存的16世纪城墙环绕的卡斯蒂利亚中世纪小镇，被誉为“西班牙最美的村庄”之一。`} />
                <InfoRow label="建筑特色" value={`石砌建筑、宏伟的主广场、坚固的城墙与城门、贵族纹章装饰的立面，构成了一个凝固在时间里的棋盘状布局。`} />
                <InfoRow label="建筑风格" value={`卡斯蒂利亚中世纪民用建筑与文艺复兴风格的融合。`} />
                <InfoRow label="文化价值" value={`其年度“烛光之夜”是西班牙最富诗意和传统精神的民间节庆之一，以一种极致浪漫的方式激活并诠释了中世纪遗产。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城全天开放。核心节庆“佩德拉萨烛光之夜”每年仅在7月的第一个和第二个星期六晚上举办。具体日期需提前查阅当年市政公告。节庆当晚约21:30开始点燃蜡烛，活动持续至次日凌晨。白天小镇常规景点（如城堡、监狱博物馆）开放时间通常为10:00-14:00，16:00-19:00，但节庆日可能调整。`} />
              <InfoRow label="门票价格" value={`进入佩德拉萨古城免费。节庆期间不收取入场费。小镇内的城堡（Condes de Velarde城堡）参观门票约6欧元，监狱博物馆门票约2.6欧元。有联票优惠。节庆当晚，部分私人庭院开放参观可能收取少量捐赠（1-2欧元），用于慈善。`} />
              <InfoRow label="地址" value={`Plaza Mayor, 1, 40172 Pedraza, Segovia, Spain`} />
              <InfoRow label="交通方式" value={`从马德里出发最方便。自驾是最推荐的方式，从马德里出发经A-1高速公路，在塞哥维亚附近转入SG-232公路，全程约1小时30分钟。节庆日傍晚道路会非常拥堵，建议下午尽早出发。
公共交通较为周折：从马德里Moncloa巴士站乘坐ALSA巴士至塞哥维亚（约1小时15分钟），抵达塞哥维亚后，需换乘前往佩德拉萨的本地小巴（Line Sepulvedana-Pedraza），班次极少，平日每天仅2-3班，节庆日可能有增开班次但需提前确认，车程约45分钟。强烈建议提前在ALSA官网查询并预订车票，节庆日票务紧张。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解佩德拉萨为何选择用烛光来定义自己，得先把手放在它那些冰凉的石头上，听听它们沉默的故事。这里的历史可以追溯到罗马时代，但让它真正成型的是中世纪。作为卡斯蒂利亚王国前沿的防御据点，它在公元10世纪左右被基督徒从摩尔人手中夺回，随后建起了坚固的城墙。那高高的石墙和唯一的入口——维拉门，至今仍在诉说着防御的紧张感。走进城门，你就走进了棋盘般严谨的中世纪城镇规划，那是出于安全和秩序的需要。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇的黄金时代在15-16世纪到来。羊毛贸易的繁荣让佩德拉萨的贵族们富甲一方。你在那些石屋立面上看到的精美纹章，就是那段显赫历史的勋章。主广场（Plaza Mayor）四周的拱廊拔地而起，既是集市，也是社交中心。著名的孔德·德·贝拉尔德城堡，虽然其根基更早，但在这一时期被改造成了一座更适合居住而非单纯防御的贵族府邸。甚至后来，它还与艺术史有了奇妙的交集——20世纪西班牙最伟大的画家之一伊格纳西奥·苏洛阿加曾在此居住和创作，他的画布上凝固了卡斯蒂利亚土地的灵魂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，就像许多内陆小镇一样，随着经济重心转移，佩德拉萨在近代逐渐沉寂，成了一位“睡美人”。时间的灰尘似乎正要轻轻覆盖它。转机出现在20世纪下半叶。西班牙开始意识到这些历史珍宝的价值，佩德拉萨被精心修复和保护，被评为国家历史艺术遗址。但让它从众多美丽小镇中脱颖而出的，是一个充满灵感的点子：烛光之夜（La Noche de las Velas）。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`关于这个节庆的起源，有几个版本的故事在流传。最浪漫的一个说，在几十年前，一位小镇居民为了给妻子一个惊喜，在他们结婚纪念日那天，用蜡烛点亮了自家门前的整条小巷。这动人的景象感染了邻居，第二年，更多人加入。年复一年，它从一个私人举动，演变为整个社区的公共庆典。另一个更实际的版本则与旅游业推广有关，但即便如此，它的执行也完全依赖于社区的真心。没有政府的强力组织，而是由小镇的妇女协会、邻里们自发协调，谁家负责哪一段街道，哪个窗口该放多少支蜡烛，都成了代代相传的默契。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，这个起初或许是为了“被看见”的节庆，最终却让佩德拉萨找回了“如何看自己”的方式。烛光，这项人类最古老的照明技术，神奇地剥去了现代的附加层，让小镇最本质的中世纪肌理和社区精神赤裸而温暖地呈现出来。它不再是对过去伤感的缅怀，而是一种积极的、充满生命力的文化宣言：我们用最柔和的光，来庆祝我们坚硬的、历经风雨的历史。战争、繁荣、沉寂、复兴……所有的历史层次，在这温暖的烛光下都被抚平、融合，化为当下这一刻纯粹的美与宁静。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`为了获得最完整的体验，强烈建议你在烛光之夜当天下午早些时候（比如三点前）抵达佩德拉萨。这样你可以先领略小镇白天的风貌，悠闲地参观主要景点，并避开傍晚汹涌的人潮和交通管制。整体耗时将是一个漫长的午后加整个夜晚，节奏是先紧后松。白天抓紧时间进行“认知性”游览，了解这里的历史布局；日落后则彻底切换到“感受性”模式，把自己交给光影和氛围。傍晚五六点，你会看到居民们开始摆放蜡烛，这是观察节庆筹备过程的绝佳时机。之后，找一家餐厅提前享用晚餐，因为节庆开始后所有餐馆都人满为患。大约九点，带上你的耐心和好奇心，汇入主广场等待魔法降临的人群中。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`节庆日人流量巨大，小镇容量有限，务必提前数月预订住宿和晚餐座位，否则可能面临无处过夜的窘境。穿着绝对要舒适，首选平底鞋，因为石板路在夜间即使有烛光也不平整，且需要长时间站立行走。不要试图用打火机自己点燃蜡烛或移动居民摆放的蜡烛，这是对传统极大的不尊重，静静欣赏就是最好的参与。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午先从唯一的入口维拉门穿过厚重城墙，亲手触摸那冰凉的巨石感受历史的防御重量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在蜂蜜色的主广场拱廊下找一家酒吧点一杯本地红酒，看着阳光把广场烤得发白，观察居民们慢悠悠的生活步调。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`买票走进孔德·德·贝拉尔德城堡，在空旷的展厅和塔楼想象贵族的生活，并从高处俯瞰小镇如棋盘般的屋顶布局。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探访一下小巧而阴森的古代监狱博物馆，听听那些关于盗匪和囚徒的古老传说，对比即将到来的夜晚的温馨。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分顺着卡尔莱哈街或圣母街漫步，看居民们如何仔细地将一支支粗白蜡烛用融化的蜡油固定在窗台和墙角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在烛光点燃前，于一家能看到广场的餐厅享用一顿以烤乳猪或烤羊为特色的丰盛晚餐，为漫漫长夜储备能量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当晚间电力切断的瞬间屏住呼吸，然后看着第一波金色的光浪从主广场的拱廊下像苏醒的河流般向全城蔓延。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随人流又不完全随波逐流，故意拐进一条狭窄无人的小巷，去聆听烛火噼啪和自己的心跳，享受一份独处的静谧。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 9 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，沿着城墙走一段，回头望去，将那座浮在深蓝色天鹅绒般夜幕中、通体由温暖烛光勾勒出的梦幻城堡尽收眼底。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`维拉门内侧仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`在烛光完全点亮后，站在城门内的石板路上，用广角镜头仰拍，将古老的拱门轮廓作为画框，框住后方巷子里层层叠叠、蜿蜒而上的烛火光点，构成一幅深邃的光之隧道。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主广场拱廊柱视角`}</h4>
                  <p className="text-sm text-gray-700">{`置身广场，背靠一侧拱廊的石柱，将另一侧的拱廊、阳台上密集的烛光以及广场上熙攘的人群同时纳入镜头，等待一张人脸被烛光柔和照亮的瞬间，故事感十足。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城堡下方斜坡回望`}</h4>
                  <p className="text-sm text-gray-700">{`从城堡所在的制高点往主广场方向走下几步，找到一个能同时囊括部分城堡石墙、下方错落屋顶烛光、以及远处平原轮廓的转角，在天空还剩最后一抹宝蓝色时拍摄，冷暖对比绝佳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`某条无名小巷的特写`}</h4>
                  <p className="text-sm text-gray-700">{`选一条仅容一人通过的小巷，将相机贴近地面，聚焦于最近处几级石阶上成排的蜡烛，让焦外的光斑融化成一串朦胧的金色音符，营造极致的静谧和细节之美。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`烛光环境光线极暗，务必带上三脚架和快门线，尝试长时间曝光（如2-10秒）来捕捉稳定的光影流动。提高相机ISO会带来噪点，但有时适当的颗粒感反而能增添复古氛围。请绝对不要使用闪光灯，它不仅会破坏现场氛围和他人体验，拍出的照片也毫无美感。尊重他人，拍摄居民或私人庭院前，最好用一个微笑和手势征得同意。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸式首选`}</h4>
                  <p className="text-sm text-blue-800">{`预订主广场拱廊楼上或紧邻广场的历史老宅改造的民宿，当夜晚来临，你无需挤在人群中，只需推开木窗，就能将万烛摇曳的广场全景拥入怀中，还能听到楼下隐约的吉他声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`选择小镇边缘由古老石屋修复的乡村旅馆，它们通常带有安静的内院或小花园，在节庆之夜喧嚣散去后，你可以拥有一片私人烛光角落，享受闹中取静的深度安宁。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`便捷之选`}</h4>
                  <p className="text-sm text-yellow-800">{`如果小镇内一房难求，可以考虑住在车程15-20分钟的塞哥维亚市区，那里有从高端酒店到实惠旅馆的丰富选择，白天游览塞哥维亚罗马大水渠，傍晚再驱车前往佩德拉萨（需非常提前找好停车场）。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`佩德拉萨小镇内住宿数量极其有限，在节庆日期开放预订的瞬间（通常是前一年冬季）就会被抢空，行动一定要快。如果住在镇外，务必确认当晚的交通和停车方案，节庆日小镇周边会实行严格的交通管制，最近的停车场也可能需要步行一段距离。无论住在哪里，预订时都请确认是否包含节庆晚餐，因为当晚所有餐厅都一位难求。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开佩德拉萨很久之后，闭上眼，那片烛光的海洋依然会在记忆中温柔地荡漾。它带来的触动，远远超乎一场视觉奇观。在这个被电力照得通明、甚至有些刺眼的时代，佩德拉萨用两个夜晚，执拗地为我们保留了一种关于“暗”的奢侈。它告诉我们，黑暗不是需要被彻底驱逐的敌人，而是可以让微弱光芒显露出神圣意义的画布。当整个世界习惯于被强烈、均匀、高效的光所统治时，这种摇曳的、不均质的、需要耐心守护的烛光，反而成了一种直抵人心的沟通方式。它照见了石头的皱纹，也照见了彼此脸庞上的柔和。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，这不仅仅是一个节庆，更是一场关于如何与历史相处、与社区共情、与内在宁静重逢的修行。每一位热爱深度游的旅人，都该把佩德拉萨的烛光之夜列入清单，不是为了收集一张惊艳的照片，而是去亲身经历一种即将消逝的“慢”和“暗”的哲学。在那个夜晚，你会暂时摘掉现代人的身份，成为一个单纯的、被光与美感动的生命体。你会记得，在西班牙高原的星空下，曾有一座石头小镇，和它的人们一起，用最古老最朴素的方式，倔强地、浪漫地，为自己和世界点亮了一首光的诗。那光芒虽然微弱，却足以照亮一段很长很长的归途。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/avila-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿维拉古城墙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ávila Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tarazona-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塔拉索纳老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tarazona</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/jaen-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈恩古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Jaén Old Town</p>
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
