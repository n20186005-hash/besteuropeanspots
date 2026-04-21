import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿讷西小岛宫 Palais de l\'Isle｜运河中央的“石船”监狱，穿越中世纪的时光胶囊 - 最佳欧洲景点',
  description: '记得我第一次见到它，是在一个微凉的九月清晨。穿过老城那些飘着面包香气的蜿蜒小巷，运河的水汽混合着古老石头特有的、略带潮湿的气味扑面而来。然后，在一个拐角，它就那样毫无征兆地撞进了我的视线——不是高高在上，而是被温柔的运河水环抱着，像一艘从历史深处驶来、却永远停泊在此的巨轮。晨光正好洒在它那粗粝的灰色',
}

export default function PalaisDeLisleAnnecyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/france' },
            { label: '阿讷西', href: '/destinations/france' },
            { label: '阿讷西小岛宫', href: '/attractions/palais-de-lisle-annecy' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿讷西小岛宫・Palais de l'Isle・法国・阿讷西`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`记得我第一次见到它，是在一个微凉的九月清晨。穿过老城那些飘着面包香气的蜿蜒小巷，运河的水汽混合着古老石头特有的、略带潮湿的气味扑面而来。然后，在一个拐角，它就那样毫无征兆地撞进了我的视线——不是高高在上，而是被温柔的运河水环抱着，像一艘从历史深处驶来、却永远停泊在此的巨轮。晨光正好洒在它那粗粝的灰色石墙上，为古老的窗棂镶上金边，倒影在碧绿如翡翠的河水中，随着水波轻轻晃动，现实与倒影的边界变得模糊，那一刻，时间仿佛也静止了。
走近了看，你会发现它并不优雅，甚至有些笨拙和严厉。厚重的墙体、小小的窗口、带着尖顶的塔楼，无不诉说着它最初的防御与禁锢功能。运河水流经它脚下时发出潺潺的声响，与岸上咖啡馆隐约传来的杯盘碰撞声、游客的低语交织在一起。奇妙的是，这份历史的沉重感，并未让它与周围的生活割裂。当地人骑着自行车从连接它的小石桥上叮铃而过，情侣倚着对岸的栏杆拍照，它就这样静静地待在那里，既是引人注目的明星，又是城市背景里最自然不过的一部分。
它的核心魅力，就在于这种强烈的矛盾与和谐。它很美，美得像童话里的城堡；但它又曾那么真实地黑暗，作为监狱承载过无数绝望。如今，当你穿过那座小桥走进它的内部，触摸那些冰凉的石壁，想象着几百年前这里回荡的足音与叹息，你会感到一种直击心灵的震撼。它不是一个被供奉起来的古董，而是一个被时光打磨得光滑、最终与生活和解的见证者。在阿讷西，历史不是教科书里的一页，而是你每天走过的一座桥，望见的一泓水，和水中那艘永远的石船。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "记得我第一次见到它，是在一个微凉的九月清晨。穿过老城那些飘着面包香气的蜿蜒小巷，运河的水汽混合着古老石头特有的、略带潮湿的气味扑面而来。然后，在一个拐角，它就那样毫无征兆地撞进了我的视线——不是高高在上，而是被温柔的运河水环抱着，像一艘从历史深处驶来、却永远停泊在此的巨轮。晨光正好洒在它那粗粝的灰色石墙上，为古老的窗棂镶上金边，倒影在碧绿如翡翠的河水中，随着水波轻轻晃动，现实与倒影的边界变得模糊，那一刻，时间仿佛也静止了。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走近了看，你会发现它并不优雅，甚至有些笨拙和严厉。厚重的墙体、小小的窗口、带着尖顶的塔楼，无不诉说着它最初的防御与禁锢功能。运河水流经它脚下时发出潺潺的声响，与岸上咖啡馆隐约传来的杯盘碰撞声、游客的低语交织在一起。奇妙的是，这份历史的沉重感，并未让它与周围的生活割裂。当地人骑着自行车从连接它的小石桥上叮铃而过，情侣倚着对岸的栏杆拍照，它就这样静静地待在那里，既是引人注目的明星，又是城市背景里最自然不过的一部分。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的核心魅力，就在于这种强烈的矛盾与和谐。它很美，美得像童话里的城堡；但它又曾那么真实地黑暗，作为监狱承载过无数绝望。如今，当你穿过那座小桥走进它的内部，触摸那些冰凉的石壁，想象着几百年前这里回荡的足音与叹息，你会感到一种直击心灵的震撼。它不是一个被供奉起来的古董，而是一个被时光打磨得光滑、最终与生活和解的见证者。在阿讷西，历史不是教科书里的一页，而是你每天走过的一座桥，望见的一泓水，和水中那艘永远的石船。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿讷西小岛宫`} />
                <InfoRow label="英文名称" value={`Palais de l'Isle`} />
                <InfoRow label="正式名称" value={`Palais de l'Isle`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`阿讷西`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座矗立于蒂乌运河中央的三角形石砌堡垒，是阿讷西老城无可争议的象征与地理心脏，见证了从12世纪至今近千年的城市权力演变与司法历史。`} />
                <InfoRow label="建筑特色" value={`其最震撼的特色在于它如同从运河中“生长”出来，狭长的三角形主体像一艘永不启航的石船船头，劈开清澈的运河水，与两岸古老的房屋通过石桥相连，构成一幅绝妙的画面。`} />
                <InfoRow label="建筑风格" value={`主体为罗曼式与早期哥特式风格相结合的军事民用建筑，历经多次改建，外观厚重敦实，带有防御性塔楼和锥形屋顶，是萨瓦地区中世纪民用建筑的罕见典范。`} />
                <InfoRow label="文化价值" value={`它不仅是阿讷西的明信片，更是一部石砌的“城市传记”，其功能从贵族宅邸、铸币厂、法院到监狱的多次转变，精准映射了欧洲中小城市政治、经济与司法体系的百年变迁。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`每年开放时间分夏季（约4月至10月）和冬季（约11月至3月）两个时段。夏季通常为每日上午10点至晚上6点，关闭前一小时停止入场。冬季开放时间缩短，通常为周三至周日上午10点至下午5点，周一和周二闭馆。每年1月1日、5月1日、11月1日、12月25日闭馆。具体开放日期每年微调，出行前务必在其官网或当地旅游局网站确认。`} />
              <InfoRow label="门票价格" value={`全价票约4欧元。优惠票约2欧元（适用于学生、65岁以上长者及团体）。18岁以下儿童、失业者及残疾人士免费。持有“阿讷西博物馆通票”可免费参观。门票为现场购买，不支持在线预订。`} />
              <InfoRow label="地址" value={`3 Passage de l'Île, 74000 Annecy, France`} />
              <InfoRow label="交通方式" value={`从日内瓦国际机场出发最为便捷。乘坐机场外的“FlixBus”或“BlaBlaCar Bus”大巴，约1小时直达阿讷西巴士总站，班次频繁，每小时至少一班，建议提前在线购票有折扣。从巴黎可乘TGV高速列车至阿讷西站，约3.5-4小时。抵达阿讷西后，小岛宫位于老城中心，从火车站步行约15-20分钟即可到达，沿途风景优美，穿过公园和运河，本身就是游览的一部分。市内不建议驾车，老城为步行区。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要讲小岛宫的故事，得把时钟拨回到12世纪。那时，阿讷西的领主为了掌控蒂乌运河这个重要的交通与贸易节点，在这座天然的小岛上修建了一座坚固的宅邸。它最初的身份并非监狱，而是权力的象征，是领主管理和征税的据点。石头从附近的山上运来，工匠们把它建得如同堡垒，既能彰显权威，也能在纷乱的年代提供庇护。可以想象，当年运河上船只往来，都要向这座“石船”上的主人致意。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "命运的第一次重大转折发生在14世纪。萨瓦伯爵将这座建筑收归己有，并赋予了它一项全新的、至关重要的功能——铸币厂。在接下来的百余年里，这里炉火熊熊，叮当作响，铸造出流通在整个萨瓦公国的钱币。权力从军事控制转向了经济命脉的掌握，小岛宫成为了公国的金融心脏。石头墙壁里，似乎还残留着当年金属熔炼的灼热气息。这段辉煌的“造钱”时期，为它奠定了坚实的物质基础与建筑格局。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，中世纪的尾声也为它带来了最广为人知，也最阴暗的角色。从15世纪开始，它逐渐演变为法院和监狱。底层阴暗潮湿的石室被改造成牢房，曾经铸造财富的地方，开始禁锢肉体与自由。那些窄小的窗口，与其说是为了采光，不如说是为了防守。在宗教战争期间，这里曾关押过不少新教徒；在法国大革命后的动荡岁月里，它也见证了许多命运的沉浮。当你走进那些低矮的囚室，指尖划过墙上不知名的刻痕，那种压抑与寒冷仿佛能穿透几个世纪，直接传递到你心里。它不再是堡垒或铸币厂，而成了一个令人望而生畏的“恐惧之屋”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光流转到19世纪，随着现代司法体系的建立，这座古老的监狱终于结束了它的使命。它一度被废弃，面临拆除的危险。幸运的是，阿讷西人意识到了这座建筑无可替代的历史价值。在20世纪初，它被列为法国历史古迹，并得到了精心的修复。人们清除了后来添加的杂乱结构，尽可能恢复其中世纪的外观，并将内部改造为介绍阿讷西建筑与城市历史的博物馆。从贵族堡垒到金钱工厂，从黑暗牢笼到文化遗产，小岛宫如同一颗多面的钻石，每一道刻痕都折射出一段不同的城市记忆。今天，它平静地立于水中，所有惊涛骇浪的过往都已沉淀为运河底部温柔的水草，而它本身，则成了讲述这一切故事的最佳叙述者。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要深度感受小岛宫，建议安排至少2-3小时。最佳抵达时间是工作日的上午10点刚开门时，或下午4点之后，这两个时段旅行团较少，光线也最为柔和。游览节奏宜慢不宜快，先从外部360度欣赏它的姿态，再进入内部细细品味历史。整体路线遵循“由外至内，由远及近”的原则，最后以环绕运河漫步收尾，让震撼的历史感在宁静的风景中慢慢沉淀。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季中午时段游客最多，桥上和内部会非常拥挤，严重影响体验，务必避开。内部楼梯陡峭狭窄，请务必穿着舒适防滑的鞋子。博物馆内的说明牌以法文为主，虽有部分英文，但建议提前在手机上下载好翻译APP或了解基本背景知识。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨先从老城让-雅克·卢梭街的方向慢慢走向运河，让那座三角形的“石船”随着你的步伐逐渐完整地展现`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要走过正面的小石桥，站在桥中央感受建筑在左右两侧运河水的簇拥下带来的独特漂浮感`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`购票进入后，首先在一楼沉浸于那些阴暗的古老牢房，触摸冰冷的石墙并仔细观察上面几个世纪以来囚徒留下的刻痕`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着狭窄的旋转楼梯登上二楼，这里曾经是法庭，如今陈列着城市模型和历史资料，从高高的窗户眺望外面生机勃勃的运河与街景`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到建筑背面那个凸出的半圆形塔楼空间，这里曾是礼拜堂，感受光线从特定角度射入时营造出的静谧与神圣氛围`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`留出时间仔细参观关于阿讷西运河系统与历史建筑的常设展览，了解这座城市如何与水共生`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开建筑内部后，不要急着走，过桥到对岸的运河边，找一张长椅坐下，从最经典的明信片角度静静凝视它十分钟`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后沿着蒂乌运河向东漫步，回头望，小岛宫在两岸繁花和柳枝的掩映下，又会呈现出另一种油画般的景致`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`正面石桥中段俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在连接宫殿与岸边的石桥中央，将相机放低贴近水面，可以拍出建筑倒影完美对称、如同悬浮于翡翠色运河上的魔幻全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`运河左岸（北岸）长椅视角`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光西斜时，在对岸咖啡馆旁的公共长椅处取景，用盛开的鲜花或随风摇曳的柳枝作为前景框架，捕捉小岛宫最经典、最具生活气息的画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`内部旋转楼梯仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`进入建筑内部后，在底层抬头拍摄螺旋上升的古老石制楼梯，利用窗口射入的光束形成明暗对比，营造出强烈的纵深感与历史穿越感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从上游圣克莱尔桥远眺`}</h4>
                  <p className="text-sm text-gray-700">{`走到西面稍远的圣克莱尔桥上，用长焦镜头压缩空间，将小岛宫置于老城连绵的橘红色屋顶背景之中，展现它与城市肌理的完美融合。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效消除运河水面反光，让倒影更加清澈翠绿。无人机飞行在阿讷西老城区域受到严格管制，未经特别许可请勿起飞，以免高额罚款。尊重博物馆规定，内部展区通常禁止使用闪光灯。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-blue-800">{`选择住在紧邻运河、推开窗就能直接看到小岛宫全景的百年老宅改造的精品酒店，枕着潺潺水声入眠，清晨独占无人打扰的绝美视角。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史氛围`}</h4>
                  <p className="text-sm text-green-800">{`下榻位于老城中心、由16世纪贵族府邸修复而成的家庭式酒店，房间保留着裸露的木梁和石墙，下楼步行两分钟即到小岛宫，完全沉浸在中世纪氛围里。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`宁静之选`}</h4>
                  <p className="text-sm text-yellow-800">{`入住坐落在阿讷西湖畔、距离老城步行约15分钟的现代设计酒店，拥有开阔的湖景阳台，在享受宁静与自然之后，再散步去探索热闹的历史中心。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`性价比之选`}</h4>
                  <p className="text-sm text-purple-800">{`预订火车站附近经营多年的舒适民宿，主人通常会提供详尽的本地游览地图和早餐，乘坐频繁的市内巴士几分钟便可抵达老城入口。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "老城内的住宿非常抢手，尤其是夏季和节假日，务必提前至少2-3个月预订。运河边的房间虽然风景无敌，但夏季夜晚可能较热闹，浅眠者建议选择背街或带双层玻璃的房间。阿讷西整体治安良好，但老城夜晚小巷灯光较暗，独自出行建议留意。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开阿讷西许久，我脑海里最常浮现的画面，依然是那座停在运河中央的石砌宫殿。它教会我的，远不止一段中世纪的历史。在这个追求崭新、光滑、快速的时代，小岛宫以一种笨拙而固执的姿态存在着，坦然展示着它的每一道伤疤、每一次功能转变的痕迹。它不像那些被过度修复、金碧辉煌的宫殿那样令人产生距离，相反，它的真实甚至有些粗粝，让你觉得可以触摸，可以对话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它让我思考，什么才是真正的“活着”的历史。不是锁在玻璃柜里的文物，也不是仅供仰望的图腾，而是像小岛宫这样，深深嵌入城市的血脉，承载过荣耀与黑暗，最终与日常生活的烟火气融为一体。它提醒我们，历史从未远离，它就流淌在我们脚下的运河里，映照在我们眼前的倒影中。每一位热爱深度游的旅人都该来这里，不仅仅是为了拍一张明信片照片，更是为了感受这种时间的重量与温柔，为了知道，有些东西历经风雨飘摇，最终不是成为废墟，而是成为了风景本身，成为了一个城市永远跳动的心脏。这趟拜访，无异于一场与时间本身进行的、安静而深刻的交谈。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/vezelay-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    韦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">韦兹莱隐修院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vézelay Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rochefort-arsenal-hermione" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    罗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">罗什福尔兵工厂与赫敏号</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Arsenal de Rochefort (L'Hermione)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/conques-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    孔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">孔克修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Conques Abbey</p>
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
