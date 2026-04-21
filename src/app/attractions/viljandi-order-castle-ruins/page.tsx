import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '维尔扬迪城堡废墟 Viljandi Castle Ruins｜探秘波罗的海汉萨同盟的石头史诗与湖光山色 - 最佳欧洲景点',
  description: '说实话，第一眼看到维尔扬迪城堡，你可能会愣一下。它和你想象中那些修缮完好的中世纪城堡完全不同——没有尖塔，没有完整的外墙，更没有飘扬的旗帜。映入眼帘的，首先是覆盖了整个山坡的、深深浅浅的绿。橡树和松树长得恣意妄为，然后，你的目光才会从层层叠叠的枝叶间，捕捉到那些巨大的、沉默的、暖灰色的石头。它们是坍...',
}

export default function ViljandiOrderCastleRuinsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '爱沙尼亚', href: '/destinations/estonia' },
            { label: '维尔扬迪县，维尔扬迪市', href: '/destinations/estonia' },
            { label: '维尔扬迪城堡废墟（汉萨同盟时期要塞）', href: '/attractions/viljandi-order-castle-ruins' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`维尔扬迪城堡废墟（汉萨同盟时期要塞）・Viljandi Order Castle Ruins・爱沙尼亚・维尔扬迪县，维尔扬迪市`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，第一眼看到维尔扬迪城堡，你可能会愣一下。它和你想象中那些修缮完好的中世纪城堡完全不同——没有尖塔，没有完整的外墙，更没有飘扬的旗帜。映入眼帘的，首先是覆盖了整个山坡的、深深浅浅的绿。橡树和松树长得恣意妄为，然后，你的目光才会从层层叠叠的枝叶间，捕捉到那些巨大的、沉默的、暖灰色的石头。它们是坍塌的城墙、是只剩下骨骼的拱门、是深深扎入土地里的塔楼基座。空气里有股好闻的味道，是潮湿的泥土、腐烂的落叶和远处维尔扬迪湖飘来的、带着水藻气息的微风混合在一起的味道。偶尔能听到鸟鸣，还有风穿过石缝时发出的、低沉又悠长的呜咽，像这座废墟自己在呼吸。
但这里绝不是一个荒凉之地。沿着缓坡向上走，你会遇到推着婴儿车散步的年轻妈妈，有慢跑的人从你身边轻盈地掠过，还有老人坐在长椅上，就静静地看着眼前的湖光山色。这座废墟，早已彻底融入了维尔扬迪人的日常生活，它不是一个需要买票瞻仰的“景点”，而是他们社区的后花园，是城市跳动的心脏。孩子们在城墙根下玩捉迷藏，恋人在最高处的断壁旁依偎着看日落。那种感觉非常奇妙，沉重的历史和无比轻盈的当下，就在这里达成了和解。
最打动人的，或许是那种极致的“层叠感”。你的脚下，可能同时踩着13世纪骑士走过的石板、18世纪农民取走的建筑石料留下的坑洼、和21世纪铺就的木质栈道。你的目光，可以穿过一个残破的拱门，看到镜面般的湖泊，以及湖泊对岸那些色彩柔和的19世纪木结构房子。历史在这里不是一条线，而是一个立体的、你可以走进去的场域。这座城堡最核心的魅力，就在于它拒绝被“修复”成某个单一的、刻板的模样。它以一种坦诚的、破碎的、却又无比强大的姿态，邀请你去触摸时间的质感，去想象、去拼凑、去感受何为“永恒”的另一种写法——不是不朽，而是在腐朽与新生之间，那种动态的、充满诗意的平衡。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`说实话，第一眼看到维尔扬迪城堡，你可能会愣一下。它和你想象中那些修缮完好的中世纪城堡完全不同——没有尖塔，没有完整的外墙，更没有飘扬的旗帜。映入眼帘的，首先是覆盖了整个山坡的、深深浅浅的绿。橡树和松树长得恣意妄为，然后，你的目光才会从层层叠叠的枝叶间，捕捉到那些巨大的、沉默的、暖灰色的石头。它们是坍塌的城墙、是只剩下骨骼的拱门、是深深扎入土地里的塔楼基座。空气里有股好闻的味道，是潮湿的泥土、腐烂的落叶和远处维尔扬迪湖飘来的、带着水藻气息的微风混合在一起的味道。偶尔能听到鸟鸣，还有风穿过石缝时发出的、低沉又悠长的呜咽，像这座废墟自己在呼吸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但这里绝不是一个荒凉之地。沿着缓坡向上走，你会遇到推着婴儿车散步的年轻妈妈，有慢跑的人从你身边轻盈地掠过，还有老人坐在长椅上，就静静地看着眼前的湖光山色。这座废墟，早已彻底融入了维尔扬迪人的日常生活，它不是一个需要买票瞻仰的“景点”，而是他们社区的后花园，是城市跳动的心脏。孩子们在城墙根下玩捉迷藏，恋人在最高处的断壁旁依偎着看日落。那种感觉非常奇妙，沉重的历史和无比轻盈的当下，就在这里达成了和解。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，或许是那种极致的“层叠感”。你的脚下，可能同时踩着13世纪骑士走过的石板、18世纪农民取走的建筑石料留下的坑洼、和21世纪铺就的木质栈道。你的目光，可以穿过一个残破的拱门，看到镜面般的湖泊，以及湖泊对岸那些色彩柔和的19世纪木结构房子。历史在这里不是一条线，而是一个立体的、你可以走进去的场域。这座城堡最核心的魅力，就在于它拒绝被“修复”成某个单一的、刻板的模样。它以一种坦诚的、破碎的、却又无比强大的姿态，邀请你去触摸时间的质感，去想象、去拼凑、去感受何为“永恒”的另一种写法——不是不朽，而是在腐朽与新生之间，那种动态的、充满诗意的平衡。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`维尔扬迪城堡废墟（汉萨同盟时期要塞）`} />
                <InfoRow label="英文名称" value={`Viljandi Order Castle Ruins`} />
                <InfoRow label="正式名称" value={`Viljandi Castle Ruins (Ordu loss)`} />
                <InfoRow label="国家" value={`爱沙尼亚`} />
                <InfoRow label="城市" value={`维尔扬迪县，维尔扬迪市`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座城堡曾是中世纪条顿骑士团立窝尼亚分支最重要的战略要塞之一，也是汉萨同盟在爱沙尼亚内陆的关键贸易与防御节点。`} />
                <InfoRow label="建筑特色" value={`气势恢宏的防御工事废墟与宁静的湖泊、茂密的森林公园浑然一体，残存的巨大塔楼基座、拱门和厚重城墙在自然侵蚀下呈现出史诗般的沧桑美感。`} />
                <InfoRow label="建筑风格" value={`以北欧哥特式军事建筑风格为主，融合了早期罗马式城堡的布局特点，后期修缮部分带有浪漫主义时期的修复痕迹。`} />
                <InfoRow label="文化价值" value={`它不仅是一部石头写就的立窝尼亚战争史，更是爱沙尼亚民族浪漫主义精神的象征地，其“废墟美学”深深影响了爱沙尼亚的文化与艺术表达。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡废墟公园全年24小时免费开放。游客中心（位于山下）开放时间为每年5月至9月，每日10:00-18:00；10月至次年4月开放时间缩短为周三至周日11:00-16:00，具体可能因天气调整。冬季大雪后部分小径可能湿滑。`} />
              <InfoRow label="门票价格" value={`进入废墟公园完全免费。若参加维尔扬迪博物馆组织的官方导览游（强烈推荐），成人票价约为8欧元，学生及老人优惠票约为5欧元，家庭票约16欧元。导览游需提前在博物馆官网或游客中心预约。`} />
              <InfoRow label="地址" value={`Lossi tn 11, Viljandi 71011, Estonia`} />
              <InfoRow label="交通方式" value={`从塔林出发：在塔林中央汽车站乘坐前往维尔扬迪的长途巴士，班次频繁，约每1-2小时一班，车程2.5小时左右，可直接在维尔扬迪巴士总站下车。使用“Tpilet”应用购票非常方便。
从里加出发：可乘坐国际巴士，经瓦尔卡进入爱沙尼亚，车程约3-4小时。
抵达维尔扬迪镇后：城堡废墟是全镇的制高点，从巴士总站或市中心任何地方步行上山，穿过风景如画的维尔扬迪湖和老城区，大约只需10-20分钟即可到达山脚下的公园入口。镇内无需公共交通。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从13世纪初讲起，那是一个剑与十字架挥舞的年代。条顿骑士团，这支兼具修士、战士和殖民者身份的德意志骑士团体，正在大力拓展他们在波罗的海东岸的势力。大约在1224年，就在现在维尔扬迪所在的这个战略要地——一个控制着重要贸易路线和肥沃土地的山丘上，他们用木头建起了第一座堡垒。但木头不够坚固，面对当地居民的反抗和周边势力的觊觎，石头城堡的计划很快提上日程。整个13世纪到14世纪，这里变成了一个巨大的建筑工地，来自各地的石匠、劳工日夜劳作，逐渐建起了带有厚重城墙、多座塔楼和巨大主堡的坚固要塞。它被命名为“Fellin”（德语名），成为了立窝尼亚骑士团领地内仅次于里加和塔尔图的第三大重要据点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡的黄金时代与汉萨同盟的贸易网络紧密相连。维尔扬迪作为同盟成员，这座城堡不仅是军事堡垒，更是财富和权力的象征。地窖里堆满了来自弗拉芒的布料、来自俄罗斯的毛皮、以及本地丰富的谷物和蜂蜡。穿着华丽皮袍的商人和披着斗篷的骑士在庭院里交谈，拉丁语、低地德语、爱沙尼亚语交织在一起。然而，平静之下暗流涌动。16世纪，随着宗教改革的风暴和周边强权（特别是俄罗斯沙皇国）的崛起，波罗的海地区变成了火药桶。1558年，立窝尼亚战争爆发，这是改变城堡命运的转折点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1560年，沙皇伊凡四世（恐怖的伊凡）的军队兵临城下。关于这场围城战，史书记载并不多，但我们可以想象那惨烈的画面：火炮的轰鸣第一次震撼这座山丘，石头在爆炸中崩裂，守军在绝望中抵抗。最终，城堡陷落了。俄罗斯人占领了它，但并未长久。战局像拉锯一样反复，波兰人、瑞典人相继成为它的主人。在连绵的战火中，城堡的军事价值逐渐丧失，它开始缓慢地走向衰败。最大的“破坏”反而来自和平时期。18世纪初，在大北方战争结束后，城堡被官方宣布废弃。对于当时正在建设中的维尔扬迪镇来说，这座巨大的废墟成了一个现成的、优质的采石场。镇上的许多石造房屋、教堂的基础，甚至街道的铺路石，都来自这里。历史有时就是这样讽刺，它的子民用这种方式，让城堡以一种碎片化的形态“活”在了城镇的肌理之中。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的转机发生在19世纪民族浪漫主义思潮席卷欧洲之时。爱沙尼亚的知识分子和艺术家开始重新审视自己的历史遗产，不再是将其视为外国统治者的象征，而是当作民族土地上共同的、沧桑的见证。维尔扬迪城堡的废墟，因其戏剧性的景观和悲壮的历史，恰好击中了浪漫主义者的心扉。它不再被看作是破石头堆，而被誉为“爱沙尼亚最美丽的废墟”。人们开始有意识地保护它，清理灌木，修建步道。19世纪末，环绕城堡的丘陵被规划成一座风景公园，种上了各种树木。于是，城堡完成了它最后的，也是最神奇的蜕变：从一个军事-经济复合体，变成一个文化-自然的精神地标。它被战争摧毁，被和平“掠夺”，最终却被诗意和自然的怀抱所拯救，成为了今天这个能让所有人自由漫步、沉思和感受历史重量的独特空间。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受维尔扬迪城堡废墟的魔力，我建议你留出至少3到4个小时，最好的时间是午后抵达，一直待到日落时分。这样你可以经历光线从明亮到柔和再到金黄的完整变化，废墟和湖泊的色彩会随之上演一场安静的戏剧。路线总体是从山脚向山顶探索，再环湖而下，形成一个回路。先从城堡山南侧的主要入口（靠近游客中心）进入公园，缓缓上行，逐一探访核心废墟区，感受历史的压迫感与空间的开放性。然后在制高点停留，俯瞰全景，让心情沉淀。最后沿着湖畔小径下山，从湖对岸回望城堡，你会获得一个截然不同、宛如画卷的视角。这样的安排节奏张弛有度，既有深入的探寻，又有抽离的观赏，能将废墟的宏观气势与微观细节都收入心底。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`雨天过后石阶和土路会非常湿滑，务必穿一双防滑性能好的徒步鞋或运动鞋。
夏季森林和湖边蚊虫较多，记得提前喷好驱蚊水，否则你的沉思时刻可能会被打扰。
废墟公园没有围栏，夜间照明有限，出于安全考虑，不建议在日落后继续深入探索核心废墟区。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从游客中心旁那条被古老橡树荫蔽的宽阔林荫道开始漫步，让自己的心情先从城镇的节奏中慢下来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`去探索主堡下方那个幽暗而潮湿的地窖空间，用手电筒照亮粗糙的石壁，感受地下世界的冰凉与寂静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着木质栈道和石阶向上，穿过已成空壳的北塔楼拱门，想象这里曾是吊桥升起放下的咽喉要道。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到那块被称作“爱沙尼亚之石”的天然巨石，触摸它被无数游客手掌磨得光滑的表面，感受一种超越人造历史的古老能量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在西侧城墙最开阔的废墟花园一带随意走走，这里视野极佳，能看到城堡结构如何层层跌落进山谷。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`攀上制高点——原主堡所在的平台，找一块平坦的大石头坐下，360度环视维尔扬迪湖的蓝、老城屋顶的红与森林无边的绿。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从山顶另一侧的小径下山，沿着维尔扬迪湖畔那条宁静的步行道慢慢走，从水面上欣赏城堡废墟与它水中倒影构成的对称画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，在山脚湖边的长椅上坐一会儿，什么都不做，只是看天鹅游过，听风的声音，让刚才吸收的所有历史与景象在内心慢慢沉淀。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`湖对岸全景机位`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，走到维尔扬迪湖的北岸，使用长焦镜头，将城堡废墟、湖面倒影、和对岸的老城教堂尖塔一同压缩进画面，形成层次极其丰富的全景图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`北塔楼拱门框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光能斜射入拱门时，站在拱门内侧向外拍，用残破的石拱作为天然画框，框住远处郁郁葱葱的山丘和天空的流云。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`废墟花园一角`}</h4>
                  <p className="text-sm text-gray-700">{`找一个阳光能透过树叶，在残墙上投下斑驳光影的午后，聚焦于一块爬满青苔的特定石头或一段孤立的墙体，拍摄特写，强调材质与时间的痕迹。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`制高点俯瞰湖景`}</h4>
                  <p className="text-sm text-gray-700">{`在制高点平台上，放低机位，以某段残墙或石堆作为前景，透过它们去俯瞰下方如宝石般的维尔扬迪湖和老城，增加画面的纵深感和故事性。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城堡山南坡仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨阳光照亮山坡时，从山脚下向上仰拍，将巨大的、富有几何感的废墟墙体与天空中疾走的云朵一同纳入镜头，营造史诗般的沧桑感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尝试在阴天拍摄，柔和的光线更能突出石头本身的质感和废墟苍凉的氛围，别只追逐晴天。`}</li>
                <li>• {`利用水坑或小水洼拍摄废墟的倒影，能得到非常有趣和抽象的画面，尤其是在雨后。`}</li>
                <li>• {`请务必尊重遗址，不要为了拍照而攀爬禁止进入的、结构不稳定的残墙，安全第一，也是对他人的保护。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`背包客之选`}</h4>
                  <p className="text-sm text-blue-800">{`坐落在老城中心一栋黄色木房子里充满艺术气息的青年旅舍，共用厨房总是飘着咖啡香，来自世界各地的旅行者会在客厅交换故事。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`湖边由古老船屋改造的精品民宿，房间窗户正对城堡山，清晨醒来第一眼就看到湖雾缭绕中的废墟剪影，恍如梦境。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`位于镇外宁静森林中的一家设计型水疗酒店，拥有全景落地窗和露天温泉池，在私密的空间里尽享自然，开车到城堡仅需5分钟。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`历史氛围`}</h4>
                  <p className="text-sm text-purple-800">{`住在老城广场旁一栋19世纪商人的宅邸里，房间挑高很高，装饰着复古家具，晚上能听到远处教堂的钟声，位置步行至城堡山仅需十分钟。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（6-8月）是爱沙尼亚的旅游旺季，维尔扬迪音乐节期间住宿非常紧张，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`老城区的住宿多为历史建筑，隔音可能一般，但充满特色；追求绝对安静的旅者可以考虑镇外或湖畔的选项。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`维尔扬迪治安极好，夜晚独自步行回住宿地也完全不用担心，小镇的夜晚宁静而安全。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开维尔扬迪很久以后，我脑海里反复出现的，不是某一块具体的石头，而是那种整体的感觉——一种巨大的宁静。这种宁静不是空洞的，而是满载着故事的。它不同于那些被打扫得一尘不染、完美复原的宫殿博物馆，在那里，历史被装在玻璃柜里，告诉你“过去就是这样的”。而在维尔扬迪的废墟中，历史是流动的，是开放的。它允许野草从墙缝长出，允许鸟儿在拱顶筑巢，允许孩子们的笑声在曾经的军事要塞里回荡。它不给出标准答案，只是向你呈现所有时间的层次：建造、荣耀、摧毁、遗忘、掠夺、再发现、珍爱。这个过程本身，就是一种深刻的哲学。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个我们习惯于追求崭新、高效、完整的世界里，维尔扬迪城堡废墟像一首“反潮流”的散文诗。它提醒我们，美不一定源于完美，力量也可以存在于破碎之中。它教会我们一种不同的看待历史的方式：不是膜拜，而是对话；不是缅怀逝去的辉煌，而是欣赏变迁本身的力量。对于每一位渴望深度游的旅人来说，这里不仅仅是一个景点，更是一个能让你内心变得安静和宽广的冥想空间。站在那片废墟上，望着永恒的湖泊和更迭的人间，你会感受到个人烦恼在时间长河中的微不足道，同时，也会更真切地触摸到“存在”本身的厚重与美丽。这趟旅程，最终会变成一次与时间和解的私人仪式。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/rakvere-medieval-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉克韦雷中世纪城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rakvere Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tartu-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塔尔图老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tartu Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tartu-university-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塔尔图大学城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tartu University City</p>
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
