import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '费内斯特雷莱要塞 Fenestrelles Fort｜探秘欧洲“阿尔卑斯长城”的宏伟与孤寂 - 最佳欧洲景点',
  description: '车子在苏萨山谷里拐过不知道第几个弯，当你觉得阿尔卑斯的绿色已经看饱了的时候，一片令人窒息的灰色巨墙，毫无征兆地、霸道地填满了整个挡风玻璃。它不是一座城堡，而是一整面山。巨大的、连绵的、层层叠叠的防御墙，像一件过于沉重的石质铠甲，硬生生披挂在翠绿的山脊线上，从谷底一直铺陈到云雾缭绕的山巅。那一瞬间，你...',
}

export default function FenestrelleFortressAlpsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '费内斯特雷莱要塞', href: '/attractions/fenestrelle-fortress-alps' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`费内斯特雷莱要塞・Fenestrelles Fort・意大利・皮埃蒙特大区，都灵省，费内斯特雷莱市镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在苏萨山谷里拐过不知道第几个弯，当你觉得阿尔卑斯的绿色已经看饱了的时候，一片令人窒息的灰色巨墙，毫无征兆地、霸道地填满了整个挡风玻璃。它不是一座城堡，而是一整面山。巨大的、连绵的、层层叠叠的防御墙，像一件过于沉重的石质铠甲，硬生生披挂在翠绿的山脊线上，从谷底一直铺陈到云雾缭绕的山巅。那一瞬间，你听不到任何声音，只有发动机的低鸣和自己倒吸一口凉气的声音——人类竟然可以如此狂妄，又如此悲壮地，在大自然身上刻下这样一道无法愈合的伤痕。
停好车，走近它。山谷里的风穿过城墙的箭孔和炮位，发出一种低沉的、呜咽似的哨音。空气里有潮湿苔藓、冷冽石头和被太阳晒热的松针混合起来的复杂气味。触摸墙壁，岩石表面粗糙冰冷，无数凿痕仿佛还残留着三百年前工匠的体温与喘息。这里没有小镇广场的喧闹，没有冰淇淋店的甜香，只有一种压倒性的、近乎神圣的孤寂。偶尔能看到几个本地老人，牵着狗在下面的小镇散步，抬头望一眼这庞然大物，眼神平淡得像在看自家后院的山——它太大了，大到已经成了日常风景的一部分，大到它的存在本身，就是一种无需言说的地标。
而它的核心魅力，恰恰在于这种“非日常”与“日常”的诡异交融。它是一座为了战争而生的、功能至上的怪物，每一道墙、每一级台阶、每一个射击孔都冷静得可怕。但当你沿着那漫长得仿佛没有尽头的“王室之路”向上攀登时，阳光透过阶梯顶部的缝隙，在古老砖石上投下移动的光斑；野草从石缝里倔强地探出头；在某个废弃的炮台里，你甚至可能发现一个鸟巢。生命以最柔软的方式，悄然接管了这座最坚硬的堡垒。这种强烈的反差，这种钢铁意志被时间温柔侵蚀的过程，比任何富丽堂皇的宫殿都更直击心灵。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在苏萨山谷里拐过不知道第几个弯，当你觉得阿尔卑斯的绿色已经看饱了的时候，一片令人窒息的灰色巨墙，毫无征兆地、霸道地填满了整个挡风玻璃。它不是一座城堡，而是一整面山。巨大的、连绵的、层层叠叠的防御墙，像一件过于沉重的石质铠甲，硬生生披挂在翠绿的山脊线上，从谷底一直铺陈到云雾缭绕的山巅。那一瞬间，你听不到任何声音，只有发动机的低鸣和自己倒吸一口凉气的声音——人类竟然可以如此狂妄，又如此悲壮地，在大自然身上刻下这样一道无法愈合的伤痕。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`停好车，走近它。山谷里的风穿过城墙的箭孔和炮位，发出一种低沉的、呜咽似的哨音。空气里有潮湿苔藓、冷冽石头和被太阳晒热的松针混合起来的复杂气味。触摸墙壁，岩石表面粗糙冰冷，无数凿痕仿佛还残留着三百年前工匠的体温与喘息。这里没有小镇广场的喧闹，没有冰淇淋店的甜香，只有一种压倒性的、近乎神圣的孤寂。偶尔能看到几个本地老人，牵着狗在下面的小镇散步，抬头望一眼这庞然大物，眼神平淡得像在看自家后院的山——它太大了，大到已经成了日常风景的一部分，大到它的存在本身，就是一种无需言说的地标。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而它的核心魅力，恰恰在于这种“非日常”与“日常”的诡异交融。它是一座为了战争而生的、功能至上的怪物，每一道墙、每一级台阶、每一个射击孔都冷静得可怕。但当你沿着那漫长得仿佛没有尽头的“王室之路”向上攀登时，阳光透过阶梯顶部的缝隙，在古老砖石上投下移动的光斑；野草从石缝里倔强地探出头；在某个废弃的炮台里，你甚至可能发现一个鸟巢。生命以最柔软的方式，悄然接管了这座最坚硬的堡垒。这种强烈的反差，这种钢铁意志被时间温柔侵蚀的过程，比任何富丽堂皇的宫殿都更直击心灵。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`费内斯特雷莱要塞`} />
                <InfoRow label="英文名称" value={`Fenestrelles Fort`} />
                <InfoRow label="正式名称" value={`Forte di Fenestrelle`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`皮埃蒙特大区，都灵省，费内斯特雷莱市镇`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`萨伏依公国为防止法国入侵而在阿尔卑斯山隘修建的、欧洲规模最大的山地防御堡垒群，被誉为“阿尔卑斯长城”。`} />
                <InfoRow label="建筑特色" value={`由一连串依山而建、通过长达5公里的有顶阶梯“王室之路”相连的独立堡垒和炮台组成，垂直落差超过600米，横跨三座山峰。`} />
                <InfoRow label="建筑风格" value={`18世纪军事防御建筑的典范，融合了早期巴洛克风格的严谨对称与后来适应山地地形的实用主义结构。`} />
                <InfoRow label="文化价值" value={`不仅是军事工程的奇迹，更见证了萨伏依王朝的兴衰、拿破仑军队的占领、以及作为国家监狱的复杂历史，是意大利统一过程中权力博弈的沉默见证者。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`开放时间复杂，强烈建议行前查询官网。通常夏季（4月至10月）开放日较多，提供多种时长（2小时至全天）的导览团，必须由官方导游带领进入。冬季（11月至3月）开放极其有限，可能完全关闭。具体日期和导览团时间每日不同，务必提前在官网预订，现场几乎无法购票。部分特殊路线（如全程攀登）仅限特定日期和季节。`} />
              <InfoRow label="门票价格" value={`根据导览路线不同，票价在10欧元至25欧元之间。例如，经典的“王室之路”短途游览约12欧元，覆盖三层城墙的全程游览约25欧元。优惠票适用于6-14岁儿童、65岁以上老人及特定团体。6岁以下儿童免费。所有门票均含强制导游费。官网预订是唯一推荐方式。`} />
              <InfoRow label="地址" value={`Forte di Fenestrelle, 10060 Fenestrelle TO, Italy`} />
              <InfoRow label="交通方式" value={`最便捷的枢纽是都灵。从都灵卡塞莱机场或都灵波尔塔诺瓦火车站出发，自驾是最推荐的方式，沿SP23公路向苏萨山谷方向行驶，约1小时15分钟车程，山路蜿蜒但风景绝美。公共交通十分不便：可从都灵苏萨门车站搭乘都灵-苏萨区域的火车至苏萨站（约45分钟），然后换乘前往费内斯特雷莱的稀少巴士（班次极少，每天仅2-3班，车程约50分钟），且巴士站距离要塞入口仍有约2公里步行上坡路。强烈建议自驾或参加从都灵出发的一日游团。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从一个人和一地图开始。这个人叫伊格纳齐奥·贝尔塔隆，萨伏依公国才华横溢又雄心勃勃的军事工程师。那张地图，则标注着阿尔卑斯山脉中段一个叫费内斯特雷莱的险要山口。时间回到1727年，欧洲的棋盘上风云诡谲，隔壁的法国一直对富饶的皮埃蒙特平原虎视眈眈。萨伏依公爵维托里奥·阿梅迪奥二世下了决心：必须把这个通往都灵腹地的咽喉，变成一个敌人无法逾越的噩梦。于是，贝尔塔隆接到了他一生中最疯狂的任务——不是建一座城堡，而是建一座“山脉堡垒”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`接下来的二十多年，是近乎偏执的坚持。没有重型机械，只有成千上万的士兵、雇佣工和当地农民。他们用绳索、滑轮、简陋的手推车，将数万吨的石料、石灰和木材运上海拔两千米的陡坡。建筑本身就是一个军事化管理的小社会，有营房、教堂、面包房、甚至监狱。贝尔塔隆的设计堪称天才：他没有建造一个单一的巨大目标，而是设计了一系列相互独立又火力交叉的堡垒。最低处的圣卡罗堡垒像坚实的盾牌，中部的三座特雷迪奇堡垒是灵活的长矛，而最高处的德尔利堡垒，则是俯瞰一切的眼睛。它们被一条隐藏在墙体内部的、有顶的阶梯——“王室之路”——秘密连接，守军可以不受风雪天气影响，快速调动。当1796年拿破仑的军队真的翻过阿尔卑斯山时，他们面对的就是这样一个刺猬般的怪物。有趣的是，这座为防御法国人而建的堡垒，最终却被法国人占领并进行了扩建，历史的讽刺莫过于此。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`拿破仑时代过后，它的军事价值逐渐褪色，但石墙内的故事并未结束。19世纪中叶，在意大利统一运动的狂潮中，这座坚固的堡垒找到了它最阴森的“新用途”——国家监狱。它被用来关押那些战败的南方军士兵（所谓的“两西西里王国”的俘虏），以及政治犯。高墙、严寒、与世隔绝，使得“费内斯特雷莱”这个名字在很长一段时间里，都带着一种令人不寒而栗的色彩。关于这段历史，至今仍存有争议和民族的隐痛，墙壁沉默，但山谷的风似乎仍在传递着那些被遗忘的叹息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`进入20世纪，它被彻底废弃，沦为牧羊人躲避风雨的场所和冒险者的乐园。岁月、风雨和植被开始无情地吞噬它。直到上世纪90年代，一群充满热忱的本地人成立了保护协会，像当年的建造者一样，用双手和微薄的资金，一点一点地从废墟中将它拯救回来。今天的攀登步道，每一块稳固的石头，几乎都是他们义务劳动的成果。所以，当你今天触摸这些墙壁时，你触摸的不仅是18世纪的军事野心，还有20世纪末普通人对历史家园的深切眷恋与挽救。它从权力的象征，变成战争的工具，再到痛苦的记忆容器，最终，成为一个需要被呵护的、属于所有人的文化遗产。这本身就是一段比任何城墙都更曲折动人的历程。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`由于要塞规模极其庞大且必须跟随导游，深度游览至少需要一整天，并强烈建议分两天进行以充分体验。最佳方案是：第一天下午抵达费内斯特雷莱小镇，适应环境，参观小镇和底层的圣卡罗堡垒外部，入住当地。第二天一早（9点前）参加为期约6-7小时的“全程游览”导览团（这是体验精髓，但需要极好体力）。这样的安排能让你在体力最充沛、光线最柔和的上午开始攀登，中午在山间堡垒休息，下午下山时欣赏不同的光影。切忌低估攀登难度，这不是悠闲散步，而是一次真正的山地徒步，垂直上升超过600米。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必、务必、务必提前在官网预订门票并确认导览团时间，现场无票可买是常态。穿上最专业的登山鞋或防滑运动鞋，普通休闲鞋在潮湿的石阶上非常危险。背双肩包，带上足量的水、高能量零食、防风雨外套，山顶天气瞬息万变。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从宏伟的“圣路易斯门”进入，立刻被堡垒内部如同迷宫般的阴暗通道和厚重的军事氛围所包裹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在导游的带领下开始攀登著名的“王室之路”，感受这条全长5公里、拥有近4000级台阶的有顶阶梯那无休止的向上延伸感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在三堡平台停下喘息，从这里回望，整个苏萨山谷如同一幅铺开的绿色画卷，初次领略“阿尔卑斯长城”横跨山脊的磅礴气势。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`抵达位于中段的“特雷迪奇堡”群，探索营房、指挥所和炮台遗址，想象士兵在此常年驻守的枯燥与艰苦。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在路途中段的圣母小教堂稍作停留，这个小小的宗教空间在纯粹的军事建筑中显得格外突兀又温暖。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`经过数小时攀登，最终抵达最高点“德尔利堡垒”，站在曾经的瞭望哨位，享受征服者的视野，感受狂风与云朵从身边掠过。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿原路或部分外部小径下山，此时夕阳可能为巨大的石墙镀上金边，与上午的清冷感形成鲜明对比。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回到入口处，别忘了去小镇上唯一的咖啡馆喝一杯滚烫的意式咖啡，你的双腿会感谢你，而你的脑海已被历史的重量填满。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`“王室之路”内部的长镜头`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个晴朗的上午，站在一段阶梯的中部，利用门框或通道形成天然画框，拍摄阶梯无限向上延伸、光影交错的深邃感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从“三堡”外平台侧拍要塞全景`}</h4>
                  <p className="text-sm text-gray-700">{`下午侧光时，走向平台外侧的草地，用广角镜头将层层叠叠的防御墙与远方绵延的阿尔卑斯山脉一同收纳，展现其与自然环境的惊人尺度对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“德尔利堡垒”山顶的360度全景`}</h4>
                  <p className="text-sm text-gray-700">{`如果天气通透，这是不容错过的机位，可以拍下要塞城墙如巨蛇般蜿蜒下山，以及脚下深谷的壮丽景象。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣卡罗堡垒底部的仰拍视角`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，站在堡垒正前方的空地上向上仰拍，利用夸张的透视突出堡垒墙面压倒性的高度与压迫感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`某个废弃炮位的框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`寻找一个保存完好的拱形射击孔，将其作为前景框架，拍摄孔外远处的山峰或蓝天，形成强烈的古今、封闭与开阔的对比。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`内部通道光线很暗，建议提高ISO或使用大光圈镜头，三脚架在团队行进中不实用。无人机严格禁止飞行，这里是边境敏感区域和历史保护区。尊重环境，不要为了拍照攀爬禁止进入的危墙。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`费内斯特雷莱小镇上的家庭式“阿尔卑斯旅馆”，房间简朴干净，店主老爷爷会给你讲他小时候在堡垒废墟里玩耍的故事，早餐有自家做的果酱。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`苏萨山谷中途的石头农庄民宿，由世代居住于此的农家改造，睡在厚重的木梁下，晚餐能尝到用传统方式烹饪的皮埃蒙特菜肴，晚上安静得只能听到溪流声。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`返回都灵，选择一座位于波河畔的历史宫殿酒店，在享受完一天的登山艰辛后，用极致的舒适和都灵夜市的巧克力热饮来抚慰身心。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`体力挑战者之选`}</h4>
                  <p className="text-sm text-purple-800">{`参加官方组织的特殊“堡垒过夜”体验（极少数日期开放），在修复过的堡垒营房里睡袋过夜，体验真正的“守夜人”感觉，清晨独占整座山脉的日出。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`费内斯特雷莱小镇住宿极少，务必提前数月预订。山谷地区治安极好，民风淳朴。如果选择住都灵，虽然往返需驾车，但晚餐和夜生活选择丰富得多，适合想要平衡荒野与城市体验的旅行者。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开费内斯特雷莱很久之后，脑海里反复回放的，不是某一块具体的石头，而是那种漫长的、重复的攀登节奏。一步，又一步，沿着那条仿佛没有尽头的“王室之路”。在那种身体的疲惫与单调中，你反而奇异地放空了。你会开始理解，建造它的初衷是威慑与防御，但最终，它更像一座巨大的、献给人类自身固执与孤独的纪念碑。它纪念的不是某场战争的胜利，而是那份明知不可为而为之的意志，是数百年前无数普通人，用双手将幻想变为石质现实的惊人能量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求即时满足、一切讲究轻量化、快速化的时代，费内斯特雷莱提供了一种截然相反的旅行价值。它不讨好你，不提供便利，甚至不保证你能轻松看完。它要求你付出汗水、时间，甚至忍受一些孤独与不便。但正是这种“不妥协”，使得最后的抵达如此珍贵。当你站在山巅，狂风呼啸，望着自己一步步丈量上来的巨大工程，你会获得一种深刻的、安静的满足感。这不仅仅是一次观光，更像是一次与历史、与地理、也与自己耐力的深层对话。对于真正的深度旅行者来说，这里没有金碧辉煌的装饰，只有真实的重量、风的语言和时间的疤痕，而这，恰恰是任何明信片都无法承载的、必须亲身到来的理由。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/fermo-historic-center" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    费
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">费尔莫古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Fermo</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/anagni-papal-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿纳尼（教皇的故乡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Anagni</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/teatro-olimpico-vicenza" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维琴察奥林匹克剧院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Teatro Olimpico Vicenza</p>
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
