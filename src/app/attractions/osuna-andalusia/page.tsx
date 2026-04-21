import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奥苏纳 Osuna｜安达卢西亚的文艺复兴珍珠与《权游》弥林竞技场 - 最佳欧洲景点',
  description: '车子刚驶离A-92高速公路，一片无边无际的银色橄榄树林便扑面而来，在安达卢西亚的烈日下泛着微光。就在你以为这风景将永无止境时，地平线上，一座赭石色的山丘小镇像一头沉睡的巨兽缓缓隆起。那就是奥苏纳。当你把车停在山下，沿着蜿蜒的坡道向上走，第一波冲击你感官的，是绝对的宁静。这里没有塞维利亚的弗拉门戈舞曲',
}

export default function OsunaAndalusiaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '西班牙', href: '/destinations/europe' },
            { label: '奥苏纳', href: '/destinations/europe' },
            { label: '奥苏纳', href: '/attractions/osuna-andalusia' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`奥苏纳・Osuna・西班牙・奥苏纳`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚驶离A-92高速公路，一片无边无际的银色橄榄树林便扑面而来，在安达卢西亚的烈日下泛着微光。就在你以为这风景将永无止境时，地平线上，一座赭石色的山丘小镇像一头沉睡的巨兽缓缓隆起。那就是奥苏纳。当你把车停在山下，沿着蜿蜒的坡道向上走，第一波冲击你感官的，是绝对的宁静。这里没有塞维利亚的弗拉门戈舞曲，也没有科尔多瓦如织的游人，只有你的脚步声在狭窄、陡峭的石板巷弄里回响，偶尔被某户人家窗台上天竺葵盆栽的鲜艳红色打断。
空气里有一股复杂的味道。上午十点，阳光已经把古老的石墙晒得微微发烫，蒸腾出干燥的尘土气息，混合着从某扇虚掩的门后飘来的浓郁咖啡香。再往上走，一阵风穿过，忽然带来了橙花和迷迭香的清冽，提醒你这片土地丰饶的本质。当你终于气喘吁吁地抵达镇中心的宪法广场，时间仿佛骤然放缓。老人们坐在梧桐树荫下的长椅上，用你听不懂的快速西语闲聊，眼神温和地扫过你这个陌生的闯入者。穿着校服的孩子们嬉笑着跑过，他们的喧闹声被广场的宽阔空间吸收，变得遥远而模糊。这里首先是一个活着的、呼吸着的家园，然后才是一个景点。
而它的核心魅力，就矗立在广场周围和更高的山丘上。那不是一座孤立的宫殿或教堂，而是一整套由公爵宫殿、大学、教堂和修道院构成的建筑群，它们共用着同样温暖的石材，以惊人的统一性和气势，层层叠叠地占据着制高点。站在山下仰望，你会感到一种肃穆的压迫感，那是权力、信仰与知识结合所产生的庄严。但走近了，抚摸那些被时光打磨得光滑的石柱，看到银匠式大门上繁复到令人惊叹的雕刻细节，你又会被一种极尽奢华的艺术热情所感染。这是一种奇特的混合体：既高高在上，又充满人性的创作温度；既是凝固的历史，又依然在每日的钟声和学生的穿梭中被激活。
最奇妙的对比发生当你穿过安静的学术回廊，转过几个弯，眼前豁然出现那座古老的斗牛场。它的黄土场地上空无一人，只有风卷起细微的沙尘。阳光将看台上一排排砖石拱廊的影子拉得老长，投下深邃的几何图案。那一刻，《权力的游戏》中弥林竞技场的画面会无比清晰地与你眼前的现实重叠。龙母、角斗士、疯狂的民众……那些虚构的磅礴史诗，竟然借用了这个安达卢西亚腹地小镇的舞台。现实与幻想，地方的宁静与全球的狂欢，在此刻完成了超时空的交汇。这就是奥苏纳，它从不张扬，却让你在每一个转角，都能与重量级的美丽和故事撞个满怀。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子刚驶离A-92高速公路，一片无边无际的银色橄榄树林便扑面而来，在安达卢西亚的烈日下泛着微光。就在你以为这风景将永无止境时，地平线上，一座赭石色的山丘小镇像一头沉睡的巨兽缓缓隆起。那就是奥苏纳。当你把车停在山下，沿着蜿蜒的坡道向上走，第一波冲击你感官的，是绝对的宁静。这里没有塞维利亚的弗拉门戈舞曲，也没有科尔多瓦如织的游人，只有你的脚步声在狭窄、陡峭的石板巷弄里回响，偶尔被某户人家窗台上天竺葵盆栽的鲜艳红色打断。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "空气里有一股复杂的味道。上午十点，阳光已经把古老的石墙晒得微微发烫，蒸腾出干燥的尘土气息，混合着从某扇虚掩的门后飘来的浓郁咖啡香。再往上走，一阵风穿过，忽然带来了橙花和迷迭香的清冽，提醒你这片土地丰饶的本质。当你终于气喘吁吁地抵达镇中心的宪法广场，时间仿佛骤然放缓。老人们坐在梧桐树荫下的长椅上，用你听不懂的快速西语闲聊，眼神温和地扫过你这个陌生的闯入者。穿着校服的孩子们嬉笑着跑过，他们的喧闹声被广场的宽阔空间吸收，变得遥远而模糊。这里首先是一个活着的、呼吸着的家园，然后才是一个景点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而它的核心魅力，就矗立在广场周围和更高的山丘上。那不是一座孤立的宫殿或教堂，而是一整套由公爵宫殿、大学、教堂和修道院构成的建筑群，它们共用着同样温暖的石材，以惊人的统一性和气势，层层叠叠地占据着制高点。站在山下仰望，你会感到一种肃穆的压迫感，那是权力、信仰与知识结合所产生的庄严。但走近了，抚摸那些被时光打磨得光滑的石柱，看到银匠式大门上繁复到令人惊叹的雕刻细节，你又会被一种极尽奢华的艺术热情所感染。这是一种奇特的混合体：既高高在上，又充满人性的创作温度；既是凝固的历史，又依然在每日的钟声和学生的穿梭中被激活。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最奇妙的对比发生当你穿过安静的学术回廊，转过几个弯，眼前豁然出现那座古老的斗牛场。它的黄土场地上空无一人，只有风卷起细微的沙尘。阳光将看台上一排排砖石拱廊的影子拉得老长，投下深邃的几何图案。那一刻，《权力的游戏》中弥林竞技场的画面会无比清晰地与你眼前的现实重叠。龙母、角斗士、疯狂的民众……那些虚构的磅礴史诗，竟然借用了这个安达卢西亚腹地小镇的舞台。现实与幻想，地方的宁静与全球的狂欢，在此刻完成了超时空的交汇。这就是奥苏纳，它从不张扬，却让你在每一个转角，都能与重量级的美丽和故事撞个满怀。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`奥苏纳`} />
                <InfoRow label="英文名称" value={`Osuna`} />
                <InfoRow label="正式名称" value={`Osuna`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`奥苏纳`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座浓缩了伊比利亚半岛数百年权力更迭与文化交融的贵族封地，其文艺复兴时期的辉煌建筑群被誉为“安达卢西亚的埃斯科里亚尔”。`} />
                <InfoRow label="建筑特色" value={`庄严的赭石色建筑雄踞于“龟背山”上，将民用、宗教与学术功能融于一体，形成气势磅礴的天际线。`} />
                <InfoRow label="建筑风格" value={`以文艺复兴风格为核心，完美融合了银匠式、巴洛克以及安达卢西亚本土的摩尔遗风。`} />
                <InfoRow label="文化价值" value={`它不仅是一部由石头写就的家族兴衰史，更是理解西班牙黄金时代地方贵族权力、宗教虔诚与学术追求如何交织的鲜活范本。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇街道全天开放。核心建筑如大学、教堂、斗牛场等开放时间各异，通常为周一至周六上午10:00至下午2:00，下午5:00至晚上8:00（夏季可能延长），周日上午开放。大部分室内景点有漫长的午休（下午2:00至5:00关闭）。具体时间随季节变化极大，建议行前务必查询最新官方信息。节假日，尤其是宗教节日和西班牙的暑期（8月），开放时间可能大幅调整或关闭。`} />
              <InfoRow label="门票价格" value={`漫步古镇本身免费。进入主要景点需购票：奥苏纳公爵大学（Universidad de la Osuna）门票约5欧元；圣体教堂（Colegiata de Osuna）博物馆与万神殿联票约8欧元；斗牛场（Plaza de Toros）参观约6欧元。通常有针对学生、老年人和团体的优惠票，部分景点提供包含多个地点的联票。详细信息需在各景点售票处确认。`} />
              <InfoRow label="地址" value={`Plaza de la Constitución， 1， 41640 Osuna， Sevilla， Spain`} />
              <InfoRow label="交通方式" value={`从塞维利亚出发最为方便。自驾：沿A-92高速公路向东行驶约80公里，车程约1小时，路况良好，小镇外围有免费停车场。公共交通：从塞维利亚的圣胡斯塔火车站（Estación de Santa Justa）乘坐开往格拉纳达方向的区域火车（Media Distancia），在“Osuna”站下车，车程约50分钟，班次有限（每天约4-6班），务必提前查好时刻表。火车站距离古镇中心约1.5公里，可步行或乘坐出租车。从塞维利亚机场直接租车是探索安达卢西亚腹地最灵活的方式。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要讲奥苏纳的故事，得从它的名字和山丘说起。“龟背山”这个地形，自远古时代就是兵家必争之地。考古学家在这里发现了伊比利亚人和罗马人的遗迹，但真正让奥苏纳走进历史聚光灯下的，是中世纪那场漫长的拉锯战。在摩尔人统治安达卢西亚的数个世纪里，这里是一个重要的前沿据点。直到1240年，卡斯蒂利亚国王费尔南多三世——“圣费尔南多”——在收复失地运动的洪流中，将奥苏纳从摩尔人手中夺取。你如今在古镇最高处看到的防御工事遗迹，就是那段铁血岁月的沉默证人。战争改变了信仰，清真寺的遗址上，开始兴建起基督教的教堂，文化的层理开始沉积。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但奥苏纳命运的彻底转变，要等到文艺复兴的曙光照耀伊比利亚半岛。1464年，天主教双王之一的伊莎贝拉女王，将奥苏纳作为封地赐予了希罗纳伯爵佩德罗·希隆。这个家族，后来被擢升为奥苏纳公爵，成为了这片土地长达几个世纪的绝对主宰。第四任奥苏纳公爵，胡安·特列斯·希隆，是故事里最关键的角色。这位雄心勃勃的贵族，不仅是西班牙帝国在意大利和佛兰德斯战场上的著名将领，更是一位具有远见的文化艺术赞助人。十六世纪中叶，当他功成名就、满载着从文艺复兴发源地意大利汲取的灵感与财富归来时，他决心将自己的家乡，建设成一个配得上其家族荣耀的“纪念碑式”城镇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，一场规模宏大的建设浪潮席卷了这座山丘。公爵的梦想不仅仅是修建一座宫殿，他想要创造一个完整的“公爵之城”。他下令兴建了一座宏伟的大学（Universidad de la Osuna），将法律、神学、医学等高等学府引入这个内陆小镇，旨在培养服务于王室和教会的精英。几乎同时，毗邻大学的圣体教堂（Colegiata）开始动工，它不仅是家族的礼拜堂，更是一座艺术宝库，内部装饰极尽奢华，请来了当时顶级的艺术家。公爵宫殿、贵族宅邸、修道院……一系列采用最新文艺复兴风格、点缀着精美银匠式雕刻的建筑拔地而起，它们统一采用当地的暖黄色石材，在山丘上形成了一片和谐而壮观的建筑交响乐。奥苏纳一跃成为安达卢西亚文化思想的重镇之一，迎来了它的“黄金世纪”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，盛极而衰是历史的常态。随着奥苏纳公爵家族的后代将兴趣和财力转移，以及西班牙帝国本身的日渐式微，小镇的辉煌逐渐凝固。大学的影响力减弱，许多宏伟的建筑陷入了漫长的沉睡。时间在这里仿佛流速变慢，但也因此，它奇迹般地躲过了大规模现代化改造的破坏。那些十六世纪的街道格局、广场、宫殿立面，被近乎原封不动地保存了下来。斗牛场建于二十世纪初，它本是小城传统生活的延续，谁曾想，在二十一世纪，它会因为一部全球现象级的电视剧而获得新生。当《权力的游戏》的选景人来到这里，他们一眼看中了这座古老斗牛场原始、粗粝而富有几何美感的造型，它完美契合了奴隶湾弥林城的狂野气质。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，历史的吊诡之处显现：奥苏纳公爵们用文艺复兴的理性与秩序建造的学术圣殿，在数百年后，其另一面——充满原始力量和戏剧张力的斗牛场——却通过流行文化的镜头，将这座沉睡的小镇重新推向了世界。今天，漫步在奥苏纳，你脚下踩着的是罗马和摩尔人的基石，眼中看到的是西班牙黄金时代的雄心，耳边或许还回荡着虚构世界里巨龙的咆哮。它的每一层历史都没有消失，而是像小镇本身的地层一样，清晰可辨，等待着有心人的阅读。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味奥苏纳，建议安排一整天时间。最好在上午九点左右抵达，这时阳光温柔，小镇刚刚苏醒，本地生活气息最浓。游览节奏宜慢不宜快，核心是“上山下山”的探索。整体路线可以从山脚下的停车场或火车站开始，先感受平民区的街巷生活，然后逐步向上攀登，探访核心的建筑群，最后在黄昏时分抵达斗牛场，捕捉一天中最美的光线。中午可以利用西班牙漫长的午休时间，在广场找家餐馆悠闲用餐。这样安排既能避开室内景点午间关闭的尴尬，也能体验小镇从清晨到日暮不同的光影与氛围，实现一次完整的时空沉浸。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双绝对舒适的步行鞋，奥苏纳的街道几乎全是鹅卵石铺就的坡道，高跟鞋或薄底鞋会是一场噩梦。务必牢记西班牙的“午休”文化，大部分室内景点在下午两点到五点关门，规划行程时要巧妙避开这个空档，或者安排午餐和闲逛。参观教堂和博物馆时请保持低声交谈，这些地方至今仍是当地社区精神生活的重要部分，尊重这份宁静。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从山脚下的“Calle San Pedro”街开始你的朝圣，沿着坡道缓缓上行，观察两旁刷着白石灰或露出赭石原墙的民居，阳台上永远盛开着鲜红的天空葵。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在“宪法广场”（Plaza de la Constitución）的树荫下稍作停留，看看市政厅的建筑，感受小镇日常生活的枢纽，这里也是获取游客信息的好地方。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`继续向上，朝着镇子最顶端的“圣体教堂”和“公爵大学”建筑群前进，这段爬坡路会给你带来如同揭开历史面纱般的仪式感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花至少一个半小时沉浸在“奥苏纳公爵大学”的回廊与古老教室里，触摸那些厚重的木桌椅，想象几个世纪前学子在此辩论的情景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`务必进入毗邻的“圣体教堂”参观其附属博物馆和公爵家族万神殿，那里收藏的胡安·德·哈、里贝拉等大师的画作会让你震撼得屏住呼吸。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂的高地平台俯瞰整个安达卢西亚平原，无际的橄榄园在阳光下像一片绿色的海洋，这是只属于登顶者的奖励。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着另一条小巷下山，目标是那座古老的“奥苏纳斗牛场”，在午后偏斜的阳光里，空无一人的沙场和层层拱廊会散发出电影场景般的戏剧感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前返回“Calle Sevilla”或主广场附近，找一家有着百年历史的传统酒吧，点一杯本地葡萄酒和一碟伊比利亚火腿，作为一天探索的完美句点。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣体教堂前广场的倾斜视角`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后，阳光从西侧打亮教堂雄伟的文艺复兴立面，站在广场左下角，用广角镜头将教堂、天空和部分小镇屋顶一同纳入画面，构图极具张力。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`公爵大学回廊的中心点仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射入方正的回廊天井，站在回廊中央抬头拍摄，可以捕捉到二层优雅的石柱拱廊在明亮天空中形成的完美几何框架。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`斗牛场拱门下的向内窥视`}</h4>
                  <p className="text-sm text-gray-700">{`选择傍晚时分，阳光为沙场和对面看台涂上金黄色，你站在入口的拱形门洞下，向内拍摄，利用门洞作为天然画框，聚焦于空荡的沙场和光影分明的观众席，故事感极强。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从“Mirador de la Colegiata”瞭望台拍摄全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前半小时，从这里可以拍到小镇赭石色屋顶层层叠叠蔓延开去的经典全景，温暖的侧光会让每一栋建筑的纹理都清晰可见，远处是安达卢西亚平原。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`老城巷弄的纵深抓拍`}</h4>
                  <p className="text-sm text-gray-700">{`上午九点或下午六点左右，阳光斜射入狭窄的巷子，找一个有洗衣房招牌或鲜艳门廊的巷子，等待一个当地人走过的瞬间，捕捉光线勾勒出的身影与古老石墙互动的生动场景。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在斗牛场内部拍照时，请严格遵守现场指示，不要擅自翻越栏杆进入沙场区域，这是出于安全和尊重当地传统的考虑。小镇居民非常注重隐私，拍摄民居门窗或阳台时，尽量避免将屋内的人物作为焦点，如果对方表现出不悦请立即停止。安达卢西亚的阳光非常强烈，建议携带偏振镜，它能有效减少石质建筑表面的反光，让色彩更加饱和，并拍出更蓝的天空。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`百年老宅改造的精品旅馆`}</h4>
                  <p className="text-sm text-blue-800">{`选择一栋位于古镇中心经过精心修复的十六世纪贵族宅邸，房间保留了原始的石头拱顶和木梁，现代舒适的设施隐匿其中，夜晚躺在古老的庭院里能听见清晰的教堂钟声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`乡间庄园酒店体验`}</h4>
                  <p className="text-sm text-green-800">{`住在离小镇几分钟车程、被橄榄园包围的安达卢西亚传统“ cortijo”庄园里，享受宽阔的空间、私人泳池和地道的农家早餐，体验真正的乡村贵族生活。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`温馨的家庭经营客栈`}</h4>
                  <p className="text-sm text-yellow-800">{`在主广场附近找一家由本地家庭经营的温馨小客栈，房间简洁干净，老板会热情地为你手绘地图，推荐只有本地人才知道的小餐馆，性价比极高。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`历史修道院改建酒店`}</h4>
                  <p className="text-sm text-purple-800">{`如果预算允许，可以选择附近城镇由真正修道院改建的奢华酒店，体验极致的宁静和历史厚重感，通常附带有美丽的花园和顶级餐厅。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥苏纳本身住宿选择有限且非常热门，尤其是在春秋旅游季和周末，务必提前数周甚至数月预订。住在古镇中心固然方便，但需要注意，夜晚可能非常安静，娱乐选择少，喜欢夜生活的游客可能会觉得寂寞。如果自驾，选择镇外或周边乡村的住宿往往能获得更宽敞的空间和独特的体验，但需考虑夜间进出小镇的便利性。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开奥苏纳的时候，我的背包里没有多出什么纪念品，但心里却沉甸甸的，装满了另一种东西。那不是单纯的“看过了”的打卡满足感，而是一种被时间浸润过的平静。在这个被短视频和即时满足驱动的时代，奥苏纳像一位固执的老者，坚持着自己的节奏。它不讨好你，不喧嚣，只是静静地在那里，把它历经罗马、摩尔、天主教公爵和全球化影视文化冲刷后的所有层次，坦然呈现。你需要付出体力去攀登，付出耐心去阅读那些古老建筑上的拉丁铭文，才能一点点解锁它的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而这，正是深度旅行最珍贵的所在。奥苏纳教会我的，不是某个具体的历史知识，而是一种“凝视”的能力。它让我慢下来，去仔细观察一束阳光如何在回廊的石柱上移动，去倾听风吹过斗牛场拱门时发出的呜咽，去想象数百年前，一个公爵站在同样的瞭望台上，俯瞰他的领地时心中的雄心与忧虑。它是一面镜子，照见的不仅是西班牙的过去，更是我们每个人内心对永恒、对意义、对与历史连接的隐秘渴望。如果你也厌倦了浮光掠影，渴望一场能与灵魂对话的旅行，那么，请一定来奥苏纳。让它用那些沉默的石头告诉你，何为时间的重量，何为宁静的力量。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bardenas-reales-natural-park" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴尔德纳斯雷尔斯自然公园</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bardenas Reales</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/frigiliana-guide" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    弗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">弗里希利亚纳</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Frigiliana</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/pamplona-city-walls" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    潘
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">潘普洛纳古城墙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pamplona City Walls</p>
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
