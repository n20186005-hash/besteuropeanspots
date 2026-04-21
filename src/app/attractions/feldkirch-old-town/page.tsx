import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '费尔德基希老城 Feldkirch Old Town｜中世纪阿尔卑斯宝石，在河畔塔楼间慢溯时光 - 最佳欧洲景点',
  description: '你从火车站走出来，穿过一条平淡无奇的现代街道，不过一个转角，就像无意中推开了一扇时间的门。哗啦一下，中世纪就摊开在你面前。不是那种精心修饰过的舞台布景，而是带着呼吸和体温的生活现场。首先迎接你的，是脚下被岁月磨得温润发亮的鹅卵石，高跟鞋踩上去会发出清脆的磕碰声，提醒你最好换上一双舒服的平底鞋。空气里...',
}

export default function FeldkirchOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '奥地利', href: '/destinations/austria' },
            { label: '费尔德基希老城', href: '/attractions/feldkirch-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`费尔德基希老城・Feldkirch Old Town・奥地利・费尔德基希`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你从火车站走出来，穿过一条平淡无奇的现代街道，不过一个转角，就像无意中推开了一扇时间的门。哗啦一下，中世纪就摊开在你面前。不是那种精心修饰过的舞台布景，而是带着呼吸和体温的生活现场。首先迎接你的，是脚下被岁月磨得温润发亮的鹅卵石，高跟鞋踩上去会发出清脆的磕碰声，提醒你最好换上一双舒服的平底鞋。空气里有种清冽的味道，混合着从阿尔卑斯山吹来的风，老建筑石头墙面的潮气，还有不知从哪个面包房后窗飘出的，刚出炉的“布雷策尔”扭结面包的焦香。
你的视线会被正前方那座高耸的、戴着尖顶帽子的塔楼牢牢抓住——那就是“猫塔”。它像个沉默而忠实的哨兵，几百年来一直杵在那里，守护着身后那片由红色、黄色、淡绿色墙壁组成的屋顶海洋。老城的颜色是温柔而克制的，没有刺眼的鲜艳，像是被雨水和时光反复漂洗过，留下淡淡的粉彩。午后的阳光斜斜地切过狭窄的巷弄，把那些凸出的飘窗、精美的壁画和铁艺招牌的影子拉得老长，光与影在墙壁上玩着最安静的游戏。你听，远处市政厅的钟声沉稳地敲响，近处咖啡馆的露台上，刀叉轻轻碰着瓷盘，人们用当地方言低声交谈，笑声像溪水一样淌过。这里没有游客的喧哗，时间仿佛被调慢了半拍。
最迷人的，是它那种“仍在服役”的日常感。哥特式的拱门下开着时髦的概念店，文艺复兴风格的庭院里坐着喝咖啡的学生，家庭主妇推着购物车从14世纪的城门下走过。历史不是被封存在玻璃罩里的标本，而是像伊尔河的水一样，依然在这座城市的血管里静静地流淌。当地人骑着自行车，叮铃铃地穿过这些见证了无数商队往来的巷道，去上班，去上学，去市场。你站在这里，既是闯入中世纪画卷的旅人，也是观察当下鲜活社区生活的旁观者，这种双重感受奇妙无比。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你从火车站走出来，穿过一条平淡无奇的现代街道，不过一个转角，就像无意中推开了一扇时间的门。哗啦一下，中世纪就摊开在你面前。不是那种精心修饰过的舞台布景，而是带着呼吸和体温的生活现场。首先迎接你的，是脚下被岁月磨得温润发亮的鹅卵石，高跟鞋踩上去会发出清脆的磕碰声，提醒你最好换上一双舒服的平底鞋。空气里有种清冽的味道，混合着从阿尔卑斯山吹来的风，老建筑石头墙面的潮气，还有不知从哪个面包房后窗飘出的，刚出炉的“布雷策尔”扭结面包的焦香。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你的视线会被正前方那座高耸的、戴着尖顶帽子的塔楼牢牢抓住——那就是“猫塔”。它像个沉默而忠实的哨兵，几百年来一直杵在那里，守护着身后那片由红色、黄色、淡绿色墙壁组成的屋顶海洋。老城的颜色是温柔而克制的，没有刺眼的鲜艳，像是被雨水和时光反复漂洗过，留下淡淡的粉彩。午后的阳光斜斜地切过狭窄的巷弄，把那些凸出的飘窗、精美的壁画和铁艺招牌的影子拉得老长，光与影在墙壁上玩着最安静的游戏。你听，远处市政厅的钟声沉稳地敲响，近处咖啡馆的露台上，刀叉轻轻碰着瓷盘，人们用当地方言低声交谈，笑声像溪水一样淌过。这里没有游客的喧哗，时间仿佛被调慢了半拍。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最迷人的，是它那种“仍在服役”的日常感。哥特式的拱门下开着时髦的概念店，文艺复兴风格的庭院里坐着喝咖啡的学生，家庭主妇推着购物车从14世纪的城门下走过。历史不是被封存在玻璃罩里的标本，而是像伊尔河的水一样，依然在这座城市的血管里静静地流淌。当地人骑着自行车，叮铃铃地穿过这些见证了无数商队往来的巷道，去上班，去上学，去市场。你站在这里，既是闯入中世纪画卷的旅人，也是观察当下鲜活社区生活的旁观者，这种双重感受奇妙无比。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`费尔德基希老城`} />
                <InfoRow label="英文名称" value={`Feldkirch Old Town`} />
                <InfoRow label="正式名称" value={`Feldkirch Old Town`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`费尔德基希`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`奥地利福拉尔贝格州保存最完好的中世纪老城，曾是重要的贸易与交通枢纽。`} />
                <InfoRow label="建筑特色" value={`以色彩柔和的中世纪联排房屋、蜿蜒的石板小巷、雄伟的城防塔楼和山顶俯瞰全城的沙滕堡要塞为标志。`} />
                <InfoRow label="建筑风格" value={`以哥特式晚期和文艺复兴风格为主，混杂了巴洛克元素，呈现出典型的阿尔卑斯山前地带城镇风貌。`} />
                <InfoRow label="文化价值" value={`一座依然在呼吸的“活着的”中世纪古镇，完美体现了阿尔卑斯地区历史、贸易与日常生活的和谐交融。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`公共区域全天开放。沙滕堡要塞博物馆夏季（4月-10月）通常为每日10:00-17:00开放，冬季（11月-3月）开放时间缩短或仅周末开放，具体请查询官网。大部分店铺周一上午休息，周末营业时间较短。圣诞节和元旦当日几乎所有场所关闭。`} />
              <InfoRow label="门票价格" value={`进入老城公共区域免费。沙滕堡要塞门票：成人约10欧元，学生及优惠票约7欧元，6岁以下儿童免费。部分教堂或小型博物馆可能收取小额捐赠。市政厅或特定历史建筑只在导览游时收费，导览游价格约为每人15欧元。`} />
              <InfoRow label="地址" value={`6800 Feldkirch, Vorarlberg, Austria`} />
              <InfoRow label="交通方式" value={`从最近的国际机场（苏黎世机场ZRH或慕尼黑机场MUC）出发，最便捷的方式是乘坐火车。从苏黎世机场火车站乘坐铁路（ÖBB或SBB）直达费尔德基希火车站，车程约1小时20分钟，每小时至少有一班车。从慕尼黑机场需先乘S-Bahn到慕尼黑主火，再换乘直达费尔德基希的火车，总车程约2.5-3小时。从奥地利国内城市如因斯布鲁克出发，火车车程约1.5小时。费尔德基希火车站位于老城边缘，步行5分钟即可进入古城核心区，无需额外交通工具。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`让我们把时钟拨回到1218年，那是一个名字响起的时候——蒙福伯爵。这位眼光独到的统治者，在伊尔河畔这个战略要地正式建立了费尔德基希。为什么是这里？看看地图你就明白了，它正卡在通往阿尔卑拉山口的要道上，北连德国，南接瑞士和意大利，是盐、铁器和布料贸易的黄金十字路口。蒙福家族做的第一件大事，就是在山顶修筑了沙滕堡。那座堡垒从一开始就不是用来过家家的，它是权力的象征，是俯瞰并控制整个山谷和贸易路线的鹰巢。有了城堡的庇护，山脚下的小镇才开始大胆地生长。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了14世纪，费尔德基希迎来了它的黄金时代。它获得了城市权，城墙被修建得越发坚固，你现在看到的那些令人印象深刻的塔楼，比如“猫塔”和“火药塔”，都是那个时代的产物。城墙不仅是防御工事，更是经济特区——只有墙内才能进行重要的市场和贸易。富商们竞相建造华美的房屋，那些如今让你驻足观赏的立面壁画、雕花的悬窗和拱廊庭院，都是那时积累的财富的无声宣言。小镇成了福拉尔贝格地区的知识灯塔，1445年，一位名叫约翰·古腾堡的年轻人的合伙人（没错，就是印刷术的古腾堡）来到这里，建立了印刷所，让思想的传播像伊尔河的水一样奔流起来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的馈赠总是伴随着考验。1647年，三十年战争的烈焰烧到了这片世外桃源。瑞典军队兵临城下，沙滕堡经历了最严峻的考验。据说，英勇的守军和市民们顶住了围攻，但战争留下的创伤是深远的。接下来的几个世纪，费尔德基希随着奥匈帝国的起伏而飘摇，它不再是贸易舞台的中心，渐渐变得安静。但塞翁失马，焉知非福。正是这种“停滞”，让它奇迹般地躲过了19世纪大刀阔斧的城市改造和二战战火的严重摧残。那些中世纪的肌理，得以完整地保存下来，像一部凝固的石头史书。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的费尔德基希老城，是耐心修复和持续生活的共同作品。二战后，人们意识到这片街区的无价，开始了细致的修复工程。但他们没有把它变成博物馆，而是在修复老房子的同时，继续让商店、餐厅、学校和住宅安居其中。沙滕堡从军事要塞变成了博物馆和文化活动的场所，城墙成了散步道，护城河变成了花园。这是一种充满智慧的“共生”：历史为现代生活提供独一无二的背景，现代生活则为历史注入不竭的活力。当你走在其中，你踩着的每一块石头，都叠印着蒙福伯爵的雄心、中世纪商贩的吆喝、战时的紧张，以及今日学子自行车轮碾过的痕迹。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味费尔德基希，请预留完整的一天。建议早晨9点左右抵达，这时晨光柔和，店铺刚开，游客稀少，你能独占老城苏醒时分的宁静。整体游览节奏应是“慢”字当头，上午沉浸于老城巷弄的细节，午后征服城堡俯瞰全景，傍晚则留给河畔与最后的漫步。这样的安排顺应了光线变化（上午适合巷拍，下午山顶顺光），也符合体能节奏（先平路漫步，再登山，最后放松）。别忘了，在这里，“迷路”本身就是一种乐趣。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周六上午老城中心有热闹的农贸市场，是体验当地生活的好时机，但也会比较拥挤。穿着绝对要选择舒适防滑的平底鞋，那些鹅卵石路对高跟鞋和光滑的鞋底极不友好。几乎所有室内场所（包括商店、餐厅）都接受信用卡，但为了在市场或小摊消费，备一些欧元现金零钱会更方便。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从火车站径直走向那座最醒目的地标“猫塔”，用手触摸它冰凉而粗糙的巨石基座，仰头感受它的威严。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`钻进猫塔下的拱门，立刻右拐进入迷宫般的“工匠小巷”，让目光流连于那些悬挂的古老铁艺招牌和窗台上的天竺葵。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`让清脆的流水声引导你走到圣尼古拉大教堂前，坐在教堂台阶上静静地看一会儿阳光透过彩绘玻璃在地面投下的斑斓光影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到并穿过那个隐藏在房屋之间的“小偷巷”，体验一下中世纪居民在狭窄通道中穿行的逼仄感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在市政厅广场边的传统咖啡馆点一杯“艾因施潘纳”咖啡，坐在露台上观察广场上市民们的日常往来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着清晰指示的“城墙小径”缓步而上，途中从不同高度回望老城那片如乐高积木般的彩色屋顶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最终抵达山顶的沙滕堡，环绕城堡走一圈，找到那个能将老城、伊尔河谷与远方阿尔卑斯山雪峰一同框进视野的绝佳角度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后沿着宁静的伊尔河岸散步，看野鸭嬉戏，等待夕阳为整个老城和山顶的城堡镀上温暖的金边。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`猫塔仰拍视角`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在“工匠小巷”入口处，利用巷子的纵深感，将前景的石板路与两侧老屋作为引导线，聚焦远处高耸的猫塔，光线会为塔楼勾勒出金色的轮廓。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`市政厅广场俯角`}</h4>
                  <p className="text-sm text-gray-700">{`从广场周边带拱廊建筑的二楼咖啡馆窗口（如Cafe Sacher），向下拍摄广场上的人群、马车与彩色房屋立面，形成充满生活气息的构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`沙滕堡观景台全景`}</h4>
                  <p className="text-sm text-gray-700">{`下午太阳西斜时，在沙滕堡外侧的观景平台，使用广角镜头，将前景的城堡石墙、中景的老城全貌与背景层叠的阿尔卑斯山一同收纳，画面层次感极佳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`伊尔河倒影`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，在城西的伊尔河小桥上，拍摄河水对岸一排排老房子及其在水中的完美倒影，此时天空色彩最为丰富。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`小偷巷光影`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光垂直射入时，走进“小偷巷”，捕捉光线在极窄巷道的两面高墙之间形成的那道耀眼“光剑”，拍出强烈的明暗对比。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效减少老建筑墙面和瓦片的反光，让色彩更饱和。拍摄当地居民尤其是市场商贩时，请务必先微笑并征得同意，这里的人们友好但注重隐私。无人机飞行在奥地利受到严格管制，在老城和城堡上空飞行通常需要特殊许可，请务必提前查询法规。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住老城中心一栋15世纪修复的贵族宅邸改造的精品酒店，躺在古老的木梁下，清晨被教堂钟声而非闹钟唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`现代设计之选`}</h4>
                  <p className="text-sm text-green-800">{`坐落在伊尔河畔、由旧厂房改造的设计酒店，房间拥有全景落地窗，将中世纪塔楼与现代舒适感奇妙结合，早餐尤其丰盛。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`家庭温馨之选`}</h4>
                  <p className="text-sm text-yellow-800">{`位于老城安静一隅的家庭经营旅店，房间不大但一尘不染，主人会热情地为你手绘地图，推荐只有本地人才知道的小餐馆。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`山景疗愈之选`}</h4>
                  <p className="text-sm text-purple-800">{`位于城市边缘半山腰的舒适旅馆，房间阳台正对沙滕堡和老城，夜晚可以看到一片静谧的灯火，适合需要绝对宁静的旅人。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿数量有限且非常抢手，尤其在夏季和圣诞市场期间，务必提前数月预订。福拉尔贝格州治安极好，即便深夜在老城散步也倍感安全。选择住在老城内虽然价格略高，但能获得千金难买的清晨与夜晚独享古城的体验，绝对物超所值。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开费尔德基希许久，我脑海里反复回放的，不是某个具体的建筑画面，而是一种整体的、安宁的节奏感。那是一种在当今世界极其稀缺的“恰当的密度”——历史恰到好处地厚重，却不压得人喘不过气；生活恰到好处地鲜活，却不显得嘈杂慌乱。它没有维也纳的皇家气派，也没有萨尔茨堡的音乐盛名，它就像一位从容的、阅历丰富却低调谦和的长者，不需要大声说话，自有魅力让你静静驻足聆听。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求“网红”和“打卡”的时代，费尔德基希老城固执地保持着自己的步调。它提醒我们，旅行的意义，有时不在于收集多少地标，而在于你是否曾真正地“进入”过一个地方，让它的光线、气味和节奏成为你记忆的一部分。在这里，时间不是被“杀”掉的，而是被温柔地“度过”的。对于每一位厌倦了浮光掠影、渴望在旅程中触摸历史真实纹理，并找到内心片刻宁静的深度旅人来说，费尔德基希不是目的地清单上的一个选项，而是一次必要的回归——回归到旅行最初的模样，关于发现，关于沉浸，关于与一个地方真诚的相遇。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/tampere" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    坦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">坦佩雷老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tampere</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/huy" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    胡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">胡伊古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Huy</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/spoleto" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯波莱托古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Spoleto</p>
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
