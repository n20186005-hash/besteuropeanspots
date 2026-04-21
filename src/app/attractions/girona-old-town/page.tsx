import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '赫罗纳古城 Girona｜漫步千年石阶，穿越彩色房屋与寂静犹太区的时空迷宫 - 最佳欧洲景点',
  description: '第一眼看到赫罗纳，你会觉得它像一本被时间胶水粘合起来的立体书。它不是平铺直叙的，而是“长”在山丘上的。你的旅程从跨过翁亚尔河上那座纤细的铁桥开始，左手边，一整排被称为“恩宠之家”的彩色房屋，像被巨人孩子随意搭砌的积木，紧紧贴着古老的城墙，倒映在墨绿色的河水里。那颜色是褪了色的赭石黄、熟透的李子红、晒...',
}

export default function GironaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '西班牙', href: '/destinations/spain' },
            { label: '赫罗纳', href: '/destinations/spain' },
            { label: '赫罗纳古城', href: '/attractions/girona-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`赫罗纳古城・Girona・西班牙・赫罗纳`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到赫罗纳，你会觉得它像一本被时间胶水粘合起来的立体书。它不是平铺直叙的，而是“长”在山丘上的。你的旅程从跨过翁亚尔河上那座纤细的铁桥开始，左手边，一整排被称为“恩宠之家”的彩色房屋，像被巨人孩子随意搭砌的积木，紧紧贴着古老的城墙，倒映在墨绿色的河水里。那颜色是褪了色的赭石黄、熟透的李子红、晒干的泥土褐，在下午四五点的阳光下，温暖得不太真实。河水几乎不流动，安静得像一面古老的镜子，把几个世纪的繁华与寂静都收了进去。
然后你开始爬坡。脚底下的石板路，被无数脚步磨得中间凹陷，光滑如鹅卵石，在狭窄的巷弄里闪着幽光。空气里有种味道——老石头在阳光下散发的干燥粉尘气，混着从某家隐秘庭院飘出的月桂和迷迭香的香气，偶尔还掠过一阵刚出炉的“xuixo”（赫罗纳特色奶油卷）的甜腻油香。声音是层叠的：远处大教堂整点的钟声浑厚低沉，近处咖啡馆瓷杯的轻碰声清脆，还有游客混杂的低语像溪流，在石壁间轻轻回荡。这里不是一座死去的博物馆，阳台晾着衣服，窗台摆着天竺葵，老奶奶提着菜篮从你身边蹒跚而过，生活就这样理所应当地镶嵌在千年古迹里。
而当你拐进那条名叫“福尔萨”的小巷，一切忽然安静下来。你进入了“Call”，犹太区。天空被两旁的石头高墙挤成一条细缝，光线变得幽深、清冷。墙壁是未经粉刷的原石，粗糙而沉默。这里的寂静是有重量的，仿佛能听到几个世纪前学者们的低声辩论，闻到安息日蜡烛的蜡油味。与河边的明媚截然不同，这里保存着一段被遗忘的记忆，一种深邃的、向内探索的精神气质。正是这种强烈的对比——河畔的绚丽与巷弄的幽深，市井的热闹与历史的凝重——构成了赫罗纳最核心的、令人着迷的张力。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到赫罗纳，你会觉得它像一本被时间胶水粘合起来的立体书。它不是平铺直叙的，而是“长”在山丘上的。你的旅程从跨过翁亚尔河上那座纤细的铁桥开始，左手边，一整排被称为“恩宠之家”的彩色房屋，像被巨人孩子随意搭砌的积木，紧紧贴着古老的城墙，倒映在墨绿色的河水里。那颜色是褪了色的赭石黄、熟透的李子红、晒干的泥土褐，在下午四五点的阳光下，温暖得不太真实。河水几乎不流动，安静得像一面古老的镜子，把几个世纪的繁华与寂静都收了进去。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然后你开始爬坡。脚底下的石板路，被无数脚步磨得中间凹陷，光滑如鹅卵石，在狭窄的巷弄里闪着幽光。空气里有种味道——老石头在阳光下散发的干燥粉尘气，混着从某家隐秘庭院飘出的月桂和迷迭香的香气，偶尔还掠过一阵刚出炉的“xuixo”（赫罗纳特色奶油卷）的甜腻油香。声音是层叠的：远处大教堂整点的钟声浑厚低沉，近处咖啡馆瓷杯的轻碰声清脆，还有游客混杂的低语像溪流，在石壁间轻轻回荡。这里不是一座死去的博物馆，阳台晾着衣服，窗台摆着天竺葵，老奶奶提着菜篮从你身边蹒跚而过，生活就这样理所应当地镶嵌在千年古迹里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而当你拐进那条名叫“福尔萨”的小巷，一切忽然安静下来。你进入了“Call”，犹太区。天空被两旁的石头高墙挤成一条细缝，光线变得幽深、清冷。墙壁是未经粉刷的原石，粗糙而沉默。这里的寂静是有重量的，仿佛能听到几个世纪前学者们的低声辩论，闻到安息日蜡烛的蜡油味。与河边的明媚截然不同，这里保存着一段被遗忘的记忆，一种深邃的、向内探索的精神气质。正是这种强烈的对比——河畔的绚丽与巷弄的幽深，市井的热闹与历史的凝重——构成了赫罗纳最核心的、令人着迷的张力。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`赫罗纳古城`} />
                <InfoRow label="英文名称" value={`Girona`} />
                <InfoRow label="正式名称" value={`Girona`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`赫罗纳`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座由罗马人奠基、历经西哥特、摩尔、犹太与基督教文明层层堆叠，并在中世纪达到鼎盛的加泰罗尼亚重镇，被誉为“四河之城”与“千城之城”。`} />
                <InfoRow label="建筑特色" value={`山丘上巍峨的哥特大教堂与脚下蜿蜒的翁亚尔河畔彩色房屋（“恩宠”阳台）形成戏剧性对比，中世纪石街、罗马城墙与保存完好的犹太区（Call）交织成迷宫般的立体城市肌理。`} />
                <InfoRow label="建筑风格" value={`融合了早期罗马城墙、罗曼式修道院、鼎盛哥特式主教座堂以及后期巴洛克立面的建筑风格大观园。`} />
                <InfoRow label="文化价值" value={`欧洲保存最完好的犹太区之一，是研究西班牙犹太历史（Sephardic）的活化石，同时其独特的加泰罗尼亚身份在中世纪的石缝与现代的生活气息中得以鲜活传承。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城区域全天24小时开放。城内各博物馆、大教堂等独立景点开放时间不一，通常为周二至周六上午10点至下午6点，周日及节假日上午10点至下午2点。大教堂夏季（4月至9月）开放时间会延长至晚7点，冬季（10月至3月）则于下午5点关闭。部分小博物馆周一闭馆。重大节日如赫罗纳花卉节（五月）期间，古城会举办大量活动，开放时间可能临时调整。`} />
              <InfoRow label="门票价格" value={`进入古城区域本身免费。参观城内主要景点需单独购票。赫罗纳大教堂门票：成人7欧元，学生及退休人士5欧元（含语音导览）。犹太历史博物馆门票：成人4欧元。古城墙（Passeig de la Muralla）免费攀登。建议购买“赫罗纳博物馆通票”，价格为12欧元，有效期三个月，可进入六家市立博物馆，非常划算。`} />
              <InfoRow label="地址" value={`Carrer de la Força, 17004 Girona, Spain`} />
              <InfoRow label="交通方式" value={`从巴塞罗那出发最为方便。火车：从巴塞罗那Sants站或El Clot-Aragó站乘坐高速列车（AVE或Avant），约40分钟即可抵达赫罗纳站，班次密集，几乎每小时都有，票价约15-30欧元不等，建议提前在Renfe官网购买。慢速区域列车约需1.5小时。巴士：从巴塞罗那Nord巴士站搭乘Sagalés或SARFA公司巴士，约1小时20分钟，价格更便宜但受路况影响。到达赫罗纳火车站后，步行穿过翁亚尔河上的铁桥，约10-15分钟即可进入古城核心区。城内基本全靠步行。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`赫罗纳的故事，得从它坚固的屁股说起——那座山丘。伊比利亚人最早看中了它的易守难攻。但真正给它打下第一层坚实底色的，是罗马人。公元前一世纪，他们在这里建起了名为“Gerunda”的堡垒，作为连接罗马与帝国西南部重镇塔拉戈纳的“奥古斯塔大道”上的重要驿站。你今天在古城某些角落低下头的瞬间，或许还能踩到那段历史的碎片。罗马人走了，西哥特人来了，随后在八世纪初，摩尔人的骑兵席卷而来，给这座城市裹上了一层东方面纱，他们称之为“Jerunda”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，真正让赫罗纳在中世纪舞台上闪闪发光的，是接下来那场长达几个世纪的“收复失地”运动。公元785年，查理曼大帝的军队夺回了它，它成了法兰克王国“西班牙边区”的一部分，大量的基督徒开始涌入。但历史的奇妙在于，占领者并未抹去一切。基督教伯爵、穆斯林商人、后来逐渐汇聚而来的犹太学者和工匠，竟然在这座小山城上找到了一种微妙的共存。尤其是犹太社区，从九世纪开始在这里扎根、繁荣。到了十二、十三世纪，赫罗纳的“Call”（犹太区）已成为整个伊比利亚半岛，乃至欧洲最重要的犹太学术中心之一。小巷深处遍布研经学堂、沐浴池和学者的宅邸，闪烁着智慧的光芒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`基督教的力量终究越来越强。站在山顶，俯瞰众生的欲望化作了石头。赫罗纳大教堂的建造，就是一部野心史诗。它始于十一世纪的罗曼式风格，但工程断断续续，直到十四世纪，建筑师们决定追随时代的潮流，采用最震撼人心的哥特式。于是，我们今天看到了那个拥有无与伦比宽阔中殿的殿堂——它23米的宽度，在哥特式建筑中是举世罕见的。它没有飞扶壁，因为它自信到足以用自身的结构力量托起那片苍穹。这座教堂的建成，是基督教权威在此地彻底确立的石头宣言，它与山下犹太区的静谧学问，形成了无声的对话与对峙。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`可惜，和谐总是脆弱的。1492年，那场席卷西班牙的悲剧风暴同样降临赫罗纳。天主教双王颁布了《阿兰布拉诏令》，驱逐所有拒绝改宗的犹太人。赫罗纳繁荣的犹太社区几乎一夜之间人去楼空，智慧的灯火骤然熄灭，“Call”区沦为了被遗忘的角落，渐渐被尘埃和贫穷覆盖。时光流转，这座城市又经历了拿破仑战争的惨烈围攻（1809年），几乎被战火摧毁。它沉寂了，像一个伤痕累累的巨人，陷入了漫长的昏睡。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到近现代，人们才重新发现了它的美与价值。尘封的犹太区被小心清理、修复，彩色房屋被保护起来，古老的罗马和中世纪城墙被开辟为可供漫步的“城墙步道”。它没有选择成为一座僵化的化石，而是让新的生命——咖啡馆、书店、手工艺作坊——轻轻注入古老的躯壳。今天的赫罗纳，每一层历史都清晰可辨，像一棵老树的年轮，罗马的根、中世纪的干、犹太文化的纹理，以及现代生活的鲜嫩枝叶，全部共生在一起，向每一个来访者低声诉说着关于共存、创伤与重生的漫长故事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味赫罗纳，你需要一整天的时间，并准备好你的双腿。建议在早上九点前抵达，这时旅行团大军尚未涌入，阳光斜射，古城刚刚苏醒，是最有韵味的时刻。整体游览节奏应是“先高后低，由外至内”。先从外围的城墙步道开始，获得全景视野和空间方位感，然后深入迷宫般的老街和犹太区，最后用大教堂的宏伟作为压轴高潮，傍晚时分留给河畔的彩色房屋和一杯放松的咖啡。这样的安排能让你对古城的立体结构有清晰认知，体验从宏观到微观，再从历史沉思回归到闲适生活的完美循环。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿一双绝对舒适防滑的鞋，古城的石阶陡峭湿滑，高跟鞋是灾难。犹太区和一些小巷非常安静，请放低音量，尊重这里沉思的氛围。如果想进入大教堂，避免中午时段，那时光线直射且旅行团最多，下午三点后入场相对清净。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从圣马丁台阶登上古老的城墙步道，让整个赫罗纳古城、远处的群山与四道河流在你脚下缓缓铺开。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着蜿蜒的步道向东漫步，从不同角度俯瞰那片标志性的彩色房屋“恩宠之家”，看阳光如何一点点为它们涂抹上金边。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城墙的某个豁口下来，径直钻进“Call”犹太区最幽深的核心，让眼睛适应昏暗的光线，用手指触摸那些冰凉而粗糙的古老石墙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找犹太历史博物馆，在那座由中世纪犹太宅邸改建的空间里，静静感受一个消失的文明曾经如何在此生活与思考。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在迷宫般的小巷里“迷失”一会，偶然发现那口古老的阿拉伯浴室，仰望其星空般的穹顶孔洞，想象水汽氤氲的往昔。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着“福尔萨街”这条千年主轴一路向上攀登，两侧是斑驳的贵族徽章，路的尽头便是巍峨的大教堂正面，体验朝圣般的抵达感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在大教堂那举世无双的宽阔中殿里抬头仰望，感受哥特式石拱带来的纯粹垂直震撼，并一定要看看珍宝馆里那珍贵的《创世纪》织锦。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从大教堂的侧门出来，沿着曲折的石阶小路下山，最终回到翁亚尔河边，找一家露天咖啡馆坐下，面对彩色房屋，让疲惫的双脚休息，用眼睛慢慢消化这一整天的时空穿越。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`翁亚尔河埃菲尔铁桥东侧岸边`}</h4>
                  <p className="text-sm text-gray-700">{`下午日落前一两小时，阳光会从侧面温暖地照亮整排彩色房屋，利用河面的倒影拍摄对称构图，是赫罗纳的经典明信片角度。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`犹太区“卡尔”狭窄巷弄的转角`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，当阳光勉强能从高墙间直射下来，会形成一道强烈的“光之隧道”，抓拍行人走过光影交界处的瞬间，故事感极强。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`大教堂后方的花园平台`}</h4>
                  <p className="text-sm text-gray-700">{`清晨，从这里可以仰拍到教堂巨大的哥特式后殿与扶壁的雄姿，以绿树和古城屋顶为前景，层次丰富，且几乎没有游客。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`古城墙步道的中段观景台`}</h4>
                  <p className="text-sm text-gray-700">{`全天皆宜，但尤以蓝调时刻（日落前后）为佳，可以拍摄古城屋顶层层叠叠、教堂耸立、远方山脉延绵的广阔全景，气势恢宏。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用广角镜头可以更好地捕捉狭窄巷弄的纵深感和大教堂内部的宏伟。尊重当地居民隐私，避免将镜头直接对准居民家的窗户或阳台。拍摄犹太区时，氛围重于细节，捕捉光影和纹理比拍摄具体人物更重要。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住犹太区核心一栋经过精心修复的十五世纪石屋民宿，夜晚当游客散尽，你便能独享千年巷弄的绝对宁静，听石头讲述古老的故事。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`河景文艺之选`}</h4>
                  <p className="text-sm text-green-800">{`选择翁亚尔河畔正对彩色房屋的精品酒店，房间带有小巧的阳台，清晨在潺潺水声中醒来，推开窗便是一幅永不重复的光影油画。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计风格之选`}</h4>
                  <p className="text-sm text-yellow-800">{`位于古城边缘一栋现代主义建筑内的设计酒店，内部是简约的北欧风，与窗外的古老景观形成有趣对话，提供最舒适的睡眠体验。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`静谧庭院之选`}</h4>
                  <p className="text-sm text-purple-800">{`藏在新城区域一条安静林荫道上的家族经营旅馆，拥有一个种满橘子树的美丽内庭，价格亲民，步行到古城仅需十分钟，闹中取静。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古城内的住宿多为老建筑，房间可能不大且隔音相对一般，但胜在氛围无敌。预订时务必确认是否有电梯，否则提着行李爬陡峭的石阶会是一场噩梦。夏季（尤其是花卉节期间）务必提前数月预订。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开赫罗纳许久后，我发现记忆最深的，不是某个具体的建筑细节，而是一种“感觉”。那种感觉是攀登时膝盖的微酸，是手掌抚过阴凉石壁的粗糙触感，是犹太区巷弄里那种令人屏息的、充满思想的寂静。这座城市教会你的，不是匆忙地打卡，而是如何用脚步去丈量时间的厚度。它让你明白，历史不是教科书上扁平的文字，而是可以触摸的石头肌理，是可以穿行的街巷迷宫，是空气中依然飘散的、混杂着古老尘埃与新鲜咖啡香的复杂气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都在追求崭新和速成的世界里，赫罗纳像一位沉静的长者，它不张扬，不喧哗，只是坦然展示着每一道伤痕、每一层荣耀、每一次文化交融留下的印记。它告诉你，真正的生命力不在于永远光鲜，而在于如何承载过去，并在其中让当下鲜活地生长。对于渴望深度游的灵魂来说，赫罗纳是一堂关于共情与沉思的必修课。来这里，不仅仅是看一座古城，更是完成一次与自己内心节奏的对话，学习在古老的时空层理中，找到那份对抗时间流逝的、宁静而坚韧的力量。这，或许才是旅行能带给我们的，最珍贵的礼物。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
              <a href="/attractions/avila-walls" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿维拉古城墙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Walls of Ávila</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/salamanca-old-university" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨拉曼卡大学城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Salamanca</p>
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
