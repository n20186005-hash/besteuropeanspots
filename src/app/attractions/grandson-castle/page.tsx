import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '格兰松城堡深度旅游攻略：史诗战场与湖光山色的一日自由行指南',
  description: '探索瑞士格兰松城堡(Grandson Castle)深度游攻略。这座日内瓦湖畔的庞大古堡，曾是勃艮第战争的史诗战场，拥有震撼的中世纪兵器库。内含一日游路线、打卡攻略与实用避坑指南。',
}

export default function GrandsonCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '瑞士', href: '/destinations/switzerland' },
            { label: '格兰松城堡', href: '/attractions/grandson-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`格兰松城堡・Grandson Castle・瑞士・沃州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你觉得瑞士只有雪山和巧克力，那今天这份格兰松城堡私藏旅游攻略，就带你躲开人潮，去日内瓦湖北岸发现一个截然不同的、充满铁血与传奇的瑞士。想象一下：站在一座仿佛从湖岸岩石中生长出来的巨大城堡上，脚下是碧蓝如镜的日内瓦湖，耳边仿佛还能听见1476年那场决定瑞士命运的金铁交鸣。没错，格兰松城堡就是这样一个地方。它不像新天鹅堡那样童话，却有着更真实、更粗粝的历史重量。作为你的专属向导，这份自由行指南会帮你规划好一切，从如何抵达这座“巨兽”，到在哪个角落能拍到最惊艳的湖堡合影，再到怎样读懂那些沉默的城墙和铠甲背后的故事。准备好，我们要穿越了。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，如果你觉得瑞士只有雪山和巧克力，那今天这份格兰松城堡私藏旅游攻略，就带你躲开人潮，去日内瓦湖北岸发现一个截然不同的、充满铁血与传奇的瑞士。想象一下：站在一座仿佛从湖岸岩石中生长出来的巨大城堡上，脚下是碧蓝如镜的日内瓦湖，耳边仿佛还能听见1476年那场决定瑞士命运的金铁交鸣。没错，格兰松城堡就是这样一个地方。它不像新天鹅堡那样童话，却有着更真实、更粗粝的历史重量。作为你的专属向导，这份自由行指南会帮你规划好一切，从如何抵达这座“巨兽”，到在哪个角落能拍到最惊艳的湖堡合影，再到怎样读懂那些沉默的城墙和铠甲背后的故事。准备好，我们要穿越了。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`格兰松城堡`} />
                <InfoRow label="英文名称" value={`Grandson Castle`} />
                <InfoRow label="正式名称" value={`Grandson Castle`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`沃州`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`格兰松城堡在欧洲历史舞台上，扮演过一个极其关键且戏剧性的角色。它的高光（或者说血色）时刻，定格在1476年3月2日的“格兰松战役”。当时，野心勃勃的勃艮第公爵“大胆查理”率领着当时欧洲最精良的军队之一，围攻这座属于瑞士同盟的城堡。守军投降后，查理残忍地处决了所有守城者（超过400人）。这一暴行彻底激怒了瑞士各州。仅仅几天后，瑞士同盟军如同山洪般席卷而来，在此地以灵活的步兵方阵和长矛，完美击溃了勃艮第的重装骑兵与火炮部队。这场战役不仅是军事史上步兵战胜重装骑士的经典范例，更彻底粉碎了“大胆查理”称霸的梦想，极大地巩固了瑞士邦联的独立与地位。因此，格兰松不仅仅是一座城堡，它是一个象征，标志着瑞士人用勇气和纪律捍卫自由的决心，是瑞士联邦形成过程中一块至关重要的基石。走在城堡中，你踩着的每一步，都可能是一场史诗的注脚。`} />
                <InfoRow label="建筑特色" value={`格兰松城堡的视觉冲击力，首先来自于其庞大无比的规模。它不是一个纤巧的塔楼，而是一组由厚重石墙连接起来的建筑群，盘踞在山丘上，俯瞰着整个湖泊和城镇。石材是这里绝对的主角，那些历经数百年风雨的灰黄色墙砖，在阳光下泛着温暖的光泽，在阴天则显得沉郁而冷峻。城堡没有统一的“设计感”，反而因其多次扩建和修复，呈现出一种粗犷、实用的叠加之美。你会看到高耸的、带有锥形屋顶的罗盘塔，它是城堡的标志；也会看到敦实的主堡城墙，墙上开着的狭小箭窗，无声诉说着防御的优先。走进内部，巨大的庭院空旷而肃穆，石板地面被岁月磨得光滑。最令人屏息的是那个长达数十米的骑士大厅，巨大的木梁横跨屋顶，石砌壁炉大得可以站进几个人，光线从高窗射入，在空气中形成一道道光柱，尘埃在其中缓缓飞舞，时间在这里仿佛凝固。`} />
                <InfoRow label="建筑风格" value={`格兰松城堡主要体现了中世纪军事建筑风格，并融合了后来的文艺复兴时期的居住改造。它最初的核心是纯粹的防御工事：厚重的墙壁、狭小的窗户、易于防守的塔楼和门洞，一切以实用和坚固为最高准则，这就是典型的中世纪堡垒特征。你找不到哥特式的飞扶壁或彩绘玻璃，也少有巴洛克式的华丽装饰。它的美在于功能性的雄浑。然而，在16世纪左右，城堡的主人为了居住得更舒适，进行了一些改造，为其注入了一丝文艺复兴的气息。这体现在一些内部空间的划分上，比如某些厅堂开始追求对称和更开阔的采光，以及后期添加的一些带有古典元素（如简单的线脚和拱门）的装饰。但这种“舒适化”的尝试非常克制，并未改变城堡整体的军事堡垒底色。因此，格兰松的风格是“层叠”的，如同它的历史一样，底层是冰冷坚硬的战争骨骼，上层则覆盖了一层薄薄的、属于和平年代的生活肌理。`} />
                <InfoRow label="文化价值" value={`对于瑞士人，尤其是沃州和纳沙泰尔地区的居民而言，格兰松城堡远不止一个旅游景点。它是地方身份认同的图腾，是“我们曾并肩作战、赢得自由”的实体纪念碑。每年可能不会有盛大的重现活动，但这段历史被写进课本，融入当地人的集体记忆。对于现代社会，城堡的价值在于它提供了一个 “触摸”历史的机会。那个号称欧洲最壮观的中世纪兵器库之一——里面陈列着上百套完整的骑士铠甲、长剑、戟、火枪，它们不是冷冰冰的展品，而是直接来自那场战役的遗存。这让历史从书页中跳脱出来，变得可感、可怖、可敬。它提醒着人们，瑞士今日的和平与中立，并非天生，而是由先辈的勇气和牺牲铸就。同时，作为日内瓦湖区的文化地标，它也承载着艺术展览、音乐会等现代文化活动，让古老的石头空间持续焕发新的生命力，成为连接过去与现在的独特文化场所。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 格兰松城堡一日游打卡路线攻略：从湖畔漫步到穿越中世纪`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行路线（日内瓦/洛桑出发）`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好啦，我的专属行程规划开始！假设你从日内瓦或洛萨出发，坐火车到伊韦尔东（Yverdon-les-Bains），再转一小段公交或打车，上午十点左右就能抵达Grandson小镇。上午（10：00-12：30）：别急着冲进城堡！先沿着小镇宁静的街道走到日内瓦湖畔。从湖岸回望，城堡的全貌和它在水中的倒影是最佳开场白。拍完“定妆照”，开始上山。进入城堡后，先拿份导览图，建议你从罗盘塔开始登顶，把湖光山色的全景尽收眼底，建立空间感。中午（12：30-14：00）：下山到小镇找一家湖边餐厅，尝尝日内瓦湖的鲜鱼。下午（14：00-17：00）：这是重头戏。回到城堡，系统性地参观内部。路线可以这样：先穿过主庭院，感受它的空旷。然后重点泡在兵器库和骑士大厅，细细看那些铠甲上的划痕。别忘了寻找圣乔治小堂的精致壁画。最后，在城堡城墙的西侧走道上散步，这里是欣赏夕阳洒在湖面和远处阿尔卑斯山群的黄金位置。傍晚时分，带着满脑子的史诗画面，心满意足地返程。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  罗盘塔的螺旋楼梯与顶端风光：攀登罗盘塔内部狭窄的螺旋石阶本身就是一种仪式。石阶被无数脚步磨出了深深的凹痕，光线从墙上的箭孔射入，在旋转中明明灭灭。当你气喘吁吁地到达顶端，推开木门，360度的 panorama 瞬间将你吞没。脚下是红瓦小镇和丝带般的公路，正前方是无边无际的日内瓦湖蓝，像一块巨大的宝石镶嵌在大地上，天气好时，能看到湖对岸法国的连绵山峰。这个视角，是理解城堡战略地位的钥匙。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  大城堡主墙的“伤痕”：走近主堡南侧的巨大石墙，别只看整体，请贴近观察那些石块的表面。你会发现一些石头上有着不规则的深色斑驳和细微的凹陷。导游会告诉你，这很可能就是当年勃艮第军队火炮轰击留下的痕迹。当你用手指轻轻拂过这些冰冷的石头，那种跨越五百多年的战争冲击感，比任何解说牌都来得直接而震撼。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  兵器库中一套无名的哥特式板甲：在森然林立的铠甲中，寻找那套特别精致、线条流畅的15世纪哥特式板甲。它静静地站在角落，面甲放下，看不清背后的面容。午后的阳光从高窗斜射进来，在它光滑的金属表面流淌，胸甲上捶打出的优美肋状纹路泛着冷冽的光泽。你可以想象一个骑士穿着它，在战场上是如何移动、拼杀，最后又或许是在这里倒下。它是一件艺术品，也是一个生命的金属棺椁。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  圣乔治小堂的壁画《圣乔治屠龙》：在相对质朴的城堡内部，这个小礼拜堂的15世纪壁画是一抹亮色。尽管岁月侵蚀了部分色彩，但圣乔治骑马刺向恶龙的动态瞬间依然清晰可辨。壁画背景是精致的田园风光，与圣乔治的英勇形成对比。最有趣的是，当地人将圣乔治战胜恶龙的故事，巧妙地与瑞士联盟战胜勃艮第公爵的史实联系起来，让宗教壁画也拥有了爱国隐喻，静静诉说着属于这里的胜利叙事。`}</p>
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  时间选择与人流躲避：城堡在瑞士夏季（7-8月）游客较多，但相比因特拉肯仍是清静之地。最佳游览时间是春季（5-6月）和秋季（9-10月）的平日，天气凉爽，光线柔和，几乎能独享城堡。尽量在上午开门或下午关门前两小时入内，避开可能的中午小团队高峰。冬季部分区域可能关闭或缩短开放时间，行前务必官网确认。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  穿着与装备建议：这绝对不是穿高跟鞋的地方！必须、务必、一定要穿一双舒适防滑的徒步鞋或运动鞋。城堡内到处都是石头路面、陡峭的螺旋楼梯和起伏的城墙步道，鞋子不舒服会毁掉一切体验。湖区天气多变，即使夏天也带一件防风外套，城墙之上风可能很大。参观兵器库等室内展厅光线较暗，对拍照有要求可以带个小补光灯。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  交通与财务安全：从主要城市前来，火车+公交的组合最方便，但瑞士公交班次间隔可能较长，务必用SBB Mobile App查好实时时刻表，规划好返程时间，避免在黄昏后滞留小镇。小镇和城堡都很安全，但参观时背包建议前背，在拥挤的展厅或登塔时更安心。门票建议网上提前购买，有时有小折扣，也能节省现场排队时间。`}</p>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`格兰松小镇本身非常宁静，住宿选择不多，但体验极佳。推荐住在镇上的家庭式旅馆（B&B），比如有些由老房子改造的客房，推窗就能看见城堡塔楼，晚上只有湖浪和风声，星空无比清晰。如果想更热闹、选择更多，可以住在邻近的伊韦尔东（Yverdon-les-Bains），这是个温泉小城，交通便利，有各种档次的酒店。餐饮方面，一定要在日内瓦湖边吃一顿饭。小镇码头附近就有餐厅，露台位置绝佳。必点菜品是日内瓦湖鱼（Filets de Perche），通常是酥炸或奶汁烹制的小鱼片，极其鲜美，配上一杯本地的白葡萄酒，看着夕阳把城堡染成金色，这才是完美的句点。如果想吃得更当地，可以试试沃州特色的奶酪火锅（Fondue）或沃州香肠配土豆饼（Papet Vaudois），分量扎实，风味浓郁。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  伊韦尔东（Yverdon-les-Bains）：这座距离格兰松仅10分钟车程的温泉小镇，是完美的搭配。你可以参观伊韦尔东城堡（与格兰松风格迥异，更方正古典，现在是博物馆），逛逛老城。最大的亮点是泡个温泉浴（Thermal Center），用温暖的水流舒缓一天行走的疲劳，绝对是历史之旅后最佳的放松方式。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  圣彼得岛（Île de St-Pierre）：如果时间充裕且有车，强烈推荐驱车前往比尔湖上的这个世外桃源（车程约40分钟）。哲学家卢梭曾在此避难并找到内心宁静。如今这里只有一家老旅馆、一座小教堂和遍地鸟语花香。在湖边树林中散步，或坐在长椅上发呆，与刚刚经历的战争史诗形成极致反差，让你深刻体会到瑞士另一种静谧、哲思的自然之美。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`格兰松城堡就像一本用石头和钢铁写就的瑞士史书，翻开它，你读到的不只是王侯将相，更是普通士兵的呼吸、胜利者的欢呼，以及一个民族在战火中凝聚成型的瞬间。它的灵魂，一半是日内瓦湖水的温柔倒影，一半是兵器库里那些冰冷铠甲上永不磨灭的伤痕。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/chur-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    库
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">库尔老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Chur Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/einsiedeln-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    艾
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">艾因西德伦修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Einsiedeln Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tarasp-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塔拉斯普城堡（恩嘎丁山谷的守护者）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tarasp Castle</p>
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
