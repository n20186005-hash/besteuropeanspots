import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '蒙特里焦尼 Monteriggioni｜但丁《神曲》赞美的完美中世纪城墙花环 - 最佳欧洲景点',
  description: '当你驾车沿着托斯卡纳起伏的丘陵公路行驶，忽然，一个近乎完美的、戴着锯齿状“王冠”的圆形轮廓，从一片翠绿的橄榄园和葡萄园中缓缓升起。那不是海市蜃楼，而是蒙特里焦尼。第一眼看见它，你会屏住呼吸——它太完整了，完整得不真实，像一枚被时光遗忘的琥珀，或者一个精心制作的电影布景。把车停在城墙外的林间空地，步行...',
}

export default function MonteriggioniWalledTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '蒙特里焦尼', href: '/attractions/monteriggioni-walled-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`蒙特里焦尼・Monteriggioni・意大利・锡耶纳省（托斯卡纳大区）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你驾车沿着托斯卡纳起伏的丘陵公路行驶，忽然，一个近乎完美的、戴着锯齿状“王冠”的圆形轮廓，从一片翠绿的橄榄园和葡萄园中缓缓升起。那不是海市蜃楼，而是蒙特里焦尼。第一眼看见它，你会屏住呼吸——它太完整了，完整得不真实，像一枚被时光遗忘的琥珀，或者一个精心制作的电影布景。把车停在城墙外的林间空地，步行穿过那道厚重的拱形石门，就完成了七百年的穿越。门内，世界瞬间安静下来。
你会发现自己站在一个卵石铺就的小小广场上，广场中央是朴素的石头教堂，几把椅子随意地放在阳光里。空气中弥漫着迷迭香、刚修剪过的青草和旧石头混合的干燥气味。这里几乎没有汽车的喧嚣，只有蜜蜂在紫藤花间嗡嗡作响，和远处咖啡馆里杯碟碰撞的清脆声音。广场四周是低矮的、有着暖黄色墙面的房子，有些窗台上摆着天竺葵。居民大概只有几十人，他们可能正从面包房走出来，提着篮子，不慌不忙。这里的生活节奏，似乎还停留在以教堂钟声和集市日为标记的时代。游客是流动的风景，而他们才是这静止舞台上的永恒角色。
这个小镇的核心魅力，在于它那种极致的“小”与“完整”带来的魔幻感。你可以在十五分钟内绕小镇内部走一圈，但每一分钟都值得咀嚼。你的目光会被无处不在的细节吸引：石墙上被岁月磨亮的边角，木门上生锈的铁环，从塔楼缝隙里探出头的野花。你会不自觉地想象，在过去的某个秋日，哨兵就在你站立的地方，眺望着远方的烟尘，思考着即将到来的战争。但丁仅仅路过，就被这圈城墙的雄姿震撼，将它比作地狱中守护深渊的巨人。今天，这圈城墙不再是战争的工具，而成了一个巨大的观景台，让你360度拥抱托斯卡纳那如诗如画、连绵不绝的丘陵美景。站在上面，你能同时触摸到历史的冷峻与大地的温柔。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你驾车沿着托斯卡纳起伏的丘陵公路行驶，忽然，一个近乎完美的、戴着锯齿状“王冠”的圆形轮廓，从一片翠绿的橄榄园和葡萄园中缓缓升起。那不是海市蜃楼，而是蒙特里焦尼。第一眼看见它，你会屏住呼吸——它太完整了，完整得不真实，像一枚被时光遗忘的琥珀，或者一个精心制作的电影布景。把车停在城墙外的林间空地，步行穿过那道厚重的拱形石门，就完成了七百年的穿越。门内，世界瞬间安静下来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你会发现自己站在一个卵石铺就的小小广场上，广场中央是朴素的石头教堂，几把椅子随意地放在阳光里。空气中弥漫着迷迭香、刚修剪过的青草和旧石头混合的干燥气味。这里几乎没有汽车的喧嚣，只有蜜蜂在紫藤花间嗡嗡作响，和远处咖啡馆里杯碟碰撞的清脆声音。广场四周是低矮的、有着暖黄色墙面的房子，有些窗台上摆着天竺葵。居民大概只有几十人，他们可能正从面包房走出来，提着篮子，不慌不忙。这里的生活节奏，似乎还停留在以教堂钟声和集市日为标记的时代。游客是流动的风景，而他们才是这静止舞台上的永恒角色。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这个小镇的核心魅力，在于它那种极致的“小”与“完整”带来的魔幻感。你可以在十五分钟内绕小镇内部走一圈，但每一分钟都值得咀嚼。你的目光会被无处不在的细节吸引：石墙上被岁月磨亮的边角，木门上生锈的铁环，从塔楼缝隙里探出头的野花。你会不自觉地想象，在过去的某个秋日，哨兵就在你站立的地方，眺望着远方的烟尘，思考着即将到来的战争。但丁仅仅路过，就被这圈城墙的雄姿震撼，将它比作地狱中守护深渊的巨人。今天，这圈城墙不再是战争的工具，而成了一个巨大的观景台，让你360度拥抱托斯卡纳那如诗如画、连绵不绝的丘陵美景。站在上面，你能同时触摸到历史的冷峻与大地的温柔。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`蒙特里焦尼`} />
                <InfoRow label="英文名称" value={`Monteriggioni`} />
                <InfoRow label="正式名称" value={`Monteriggioni`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`锡耶纳省（托斯卡纳大区）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座由锡耶纳共和国于13世纪初建造的边防前哨，是托斯卡纳中世纪城防体系的巅峰之作，并因但丁在《神曲·地狱篇》中的不朽描绘而获得了永恒的文化生命。`} />
                <InfoRow label="建筑特色" value={`近乎完美的椭圆形完整城墙，宛如从大地生长出的石质花环，十四座方形塔楼均匀分布，拱卫着内部宁静如初的微型小镇。`} />
                <InfoRow label="建筑风格" value={`典型的中世纪军事防御建筑与托斯卡纳乡村风格的结合，体现了实用至上的堡垒美学。`} />
                <InfoRow label="文化价值" value={`它是欧洲保存最完好的中世纪城堡小镇之一，是研究锡耶纳-佛罗伦萨争霸史的活化石，更是但丁笔下诗意与战火交织的文化地标。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇本身为开放式社区，可随时进入。环绕城墙的步行道（Camminamento delle Mura）以及部分塔楼的开放时间为：夏季（4月至10月）通常为9:30-19:30；冬季（11月至3月）开放时间缩短，常为10:00-16:00，且可能提前关闭。具体开放时间会随年份微调，建议出行前在其官网或当地旅游信息中心确认。小镇内的圣玛丽亚亚松森教堂（Chiesa di Santa Maria Assunta）开放时间较为灵活，通常与城墙开放时段大致吻合。元旦、圣诞节及部分宗教节日可能全天关闭。`} />
              <InfoRow label="门票价格" value={`进入蒙特里焦尼小镇本身完全免费。登上城墙步道（“城墙漫步”体验）需要购买门票。全价票约为5欧元，优惠票（学生、65岁以上老人等）约为3欧元。有时会推出包含城墙和镇上小型考古博物馆（Museo di Monteriggioni）的联票，价格约为7-8欧元。6岁以下儿童通常免费。门票可在城墙入口处或镇中心的旅游信息点购买。`} />
              <InfoRow label="地址" value={`Piazza Roma, 23, 53035 Monteriggioni SI, Italy`} />
              <InfoRow label="交通方式" value={`蒙特里焦尼位于佛罗伦萨和锡耶纳之间。最灵活的方式是自驾，从佛罗伦萨出发沿SR2公路（卡斯西亚古道）向南行驶约50分钟（约50公里），从锡耶纳出发向北行驶约20分钟（约15公里）。小镇城墙外设有大型免费停车场。公共交通方面：从锡耶纳火车站（Stazione di Siena）前乘坐131路巴士，方向为科尔贝塔（Colle Val d‘Elsa）或波吉邦西（Poggibonsi），在“Monteriggioni”站下车，车程约25-30分钟，班次约为每小时1-2班，周末会减少。从佛罗伦萨出发则需要先乘火车或巴士到锡耶纳再转车。如果乘坐巴士，建议上车时向司机确认下车地点和返程时间表，因为站牌信息可能不清晰。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要追溯到十三世纪初，那时的托斯卡纳可不是一幅宁静的田园油画，而是充斥着硝烟与阴谋的战场。以银行业和羊毛业暴富的佛罗伦萨共和国，正野心勃勃地向南扩张，而它的死对头，骄傲的艺术与金融之邦锡耶纳共和国，则寸土不让。两强之间的埃尔萨河谷（Val d‘Elsa），就成了血腥的拉锯战前线。为了保卫北境，抵御佛罗伦萨人一次又一次的侵袭，锡耶纳的统治者们决定，要在这片战略高地上，铸造一个不可攻破的盾牌。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，在1213年到1219年间，蒙特里焦尼拔地而起。选址极其精妙：它坐落在一座平缓的山丘顶端，天然的地形提供了第一道防线。锡耶纳人征召了最好的工匠，用当地开采的浅黄色石灰华岩石，建造了这道总长570米、高约10米的椭圆形城墙。十四座高大坚固的方塔像巨人的牙齿一样嵌在墙体内，彼此呼应，没有射击死角。这不是一个为了居住舒适而建的城市，它是一个纯粹的军事机器，一个屯兵、预警、阻击的前沿堡垒。建成后，它立刻成为了锡耶纳北部防御体系的枢纽，来自锡耶纳的士兵和指挥官驻守于此，日夜警惕着佛罗伦萨方向的任何风吹草动。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在接下来的一个多世纪里，蒙特里焦尼见证了无数次冲突。它像一颗顽固的钉子，牢牢钉在佛罗伦萨南下的路线上。最著名的围攻发生在1260年蒙特佩尔蒂（Montaperti）战役前后，以及1397年，但它都顽强地挺了过来。然而，历史的洪流难以阻挡。随着1554年，锡耶纳在漫长的意大利战争中最终臣服于其更强大的对手——佛罗伦萨美第奇家族的统治，蒙特里焦尼的军事使命宣告终结。烽火熄灭了，驻军撤离了，这座昔日的雄关要隘，迅速被边缘化，沦为一座安静的农业村庄。这种“被遗忘”，反而成了它最大的幸运。因为它不再具有战略价值，所以没有遭到大规模的破坏或现代化改造，只是静静地沉睡在托斯卡纳的阳光下，任凭藤蔓爬上墙头。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正让蒙特里焦尼从一座废弃堡垒升华为文化符号的，是诗歌的力量。早在它建成后不久，大约在1314年，伟大的诗人但丁·阿利吉耶里就在他的史诗《神曲·地狱篇》中写下了不朽的诗句：“因为就在蒙泰里吉奥尼的周围，耸立着高高的环墙，上面盖着许多塔楼，所以在那环绕深井的岸上，可怕的巨人高高地矗立着……”但丁在流亡途中很可能亲眼见过这座城堡，它那整齐划一、威严耸立的塔楼，激发了他对地狱中守护者的恐怖想象。但丁的这几行诗，就像一道永恒的封印，将蒙特里焦尼的雄姿与人类的文学想象牢牢绑定。从此，人们来到这里，不仅是为看一座城堡，更是为了寻找但丁眼中的那个“巨人花环”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`进入现代，蒙特里焦尼的宁静被重新发现。上世纪后期，意大利政府开始对其进行精心的保护和修复。城墙步道被清理加固，向公众开放。小镇内部的老房子被小心翼翼地改造成住宅、餐馆和手工艺品店。它没有变成喧嚣的主题公园，而是以一种克制的、活态的方式保存了下来。如今，它依然是几十位居民的家园，同时每年迎接来自世界各地，追寻中世纪幻梦与但丁足迹的朝圣者。它的历史，从战火中诞生，在诗歌中永生，最终在和平的橄榄枝与葡萄藤下，找到了最宁静的归宿。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`理想的蒙特里焦尼深度游览需要预留至少半天时间（约4-5小时）。强烈建议在上午十点前抵达，这时旅游大巴还未涌入，阳光柔和，你能独享城墙上的宁静与绝佳光线。游览节奏应该是“先外后内，先高后低，最后沉浸”。首先，在停车场附近远观全景并拍照，然后直奔主题——登上城墙漫步一圈（约需1小时），从制高点全方位感受小镇格局和托斯卡纳风光。之后，从城墙下来，穿过主门进入小镇核心，悠闲地探索广场、教堂和小巷（约1-1.5小时）。中午在小镇内的餐馆享用一顿地道的托斯卡纳午餐。午后，可以参观小型博物馆，或者在广场长椅上发呆，观察本地生活。如果时间充裕，可以在下午晚些时候再次登上城墙，欣赏日落时分的金色光影。这样安排能让你从宏观到微观，从历史到当下，完整地体验这座小镇的每一层魅力。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避免在盛夏（七八月）的正午时分在毫无遮挡的城墙上暴晒，托斯卡纳的太阳非常炽烈，清晨或傍晚是最佳游览时间。穿一双绝对舒适耐磨的平底鞋，小镇内和城墙上全是凹凸不平的古老石路，高跟鞋会是一场灾难。自驾前往的话，停车场虽然免费但旺季也很抢手，早到早得；如果乘坐公交，务必在下车时记清返程巴士的时刻表或拍下站牌，以免错过班次。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城墙外停车场旁的观景点驻足，用长焦镜头捕捉被橄榄树环抱的完整城墙轮廓，感受初见时那份如画卷般的不真实感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主城门旁的售票处进入，沿着古老的石阶登上城墙步道，开始顺时针漫步，让你的左手触摸冰凉粗糙的墙石，右手则拥抱无垠的、如波浪般起伏的托斯卡纳丘陵全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城墙西北角的塔楼附近停下，这里视野最为开阔，可以清晰地辨认出远处锡耶纳的方向，想象中世纪哨兵在此瞭望敌情时的紧张与孤独。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城墙下来，正式穿过那道厚重的拱形石质主城门（Porta San Giovanni），让自己完全浸入小镇内部那片被时光放缓的宁静之中。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在中心的罗马广场（Piazza Roma）找一张面对圣玛丽亚亚松森教堂的长椅坐下，花十分钟什么也不做，只是听风声、鸟鸣和远处隐约的乡村声响，观察当地居民不紧不慢的日常。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进那座朴素的罗曼式教堂，让眼睛适应内部昏暗的光线，寻找那些残存的古老壁画痕迹，感受空气中清凉的、带着石尘气味的神圣氛围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`随意选择一条从广场辐射出去的小巷漫无目的地探索，留意那些爬满墙壁的藤蔓、彩色的木制百叶窗、以及门前精心打理的小花园，每一扇门后都可能藏着一段故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在广场边的“Il Pozzo”或城墙下的“Borgo Antico”餐馆的露天座位坐下，点一份用本地奇安蒂红酒炖煮的野猪肉（Cinghiale），配上一杯醇厚的庄园葡萄酒，让味蕾也完成一次托斯卡纳之旅。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城墙外东南侧的橄榄园中`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，低角度的阳光会给城墙染上金边，用广角镜头将前景的橄榄树枝与背景的完整城堡一同纳入画面，营造故事感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城墙步道中段（靠近北侧）`}</h4>
                  <p className="text-sm text-gray-700">{`上午时分，阳光从东侧照亮小镇内部，在此处俯拍，可以将鹅卵石广场、教堂钟楼与层层叠叠的红色屋顶一同收进取景框，构图饱满富有层次。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`穿过主城门（Porta San Giovanni）的拱洞向内拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`站在门洞的阴影里，对着被门框完美“装裱”起来的光亮的小镇广场和教堂取景，形成强烈的明暗对比和纵深感，这是最经典的“穿越”视角。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`小镇内某条狭窄小巷的尽头`}</h4>
                  <p className="text-sm text-gray-700">{`午后阳光斜射时，寻找一条两侧石墙高耸、地面光影斑驳的小巷，等待一个当地人或猫悠闲走过的瞬间，捕捉那份静谧的生活气息。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城墙西侧塔楼附近拍摄日落`}</h4>
                  <p className="text-sm text-gray-700">{`日落时分，夕阳将整个西面的托斯卡纳丘陵染成暖金色，以此作为背景，拍摄城墙锯齿状的剪影，画面充满史诗感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效提升托斯卡纳蓝天与白云的对比度，并消除石头表面的反光。城墙和小镇内部是居民区，拍摄私人住宅门窗或居民特写时请务必保持尊重，最好先微笑示意或干脆放弃。无人机飞行在此类受保护的历史村镇通常有严格限制甚至禁止，起飞前务必查清当地法规，切勿黑飞。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`预订小镇城墙内仅有的一两家由古老石屋改造的民宿，清晨在游客大军抵达前，独享空无一人的广场和只属于你的城墙晨曦，夜晚在星空下聆听真正的万籁俱寂。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`田园诗篇`}</h4>
                  <p className="text-sm text-green-800">{`选择城墙外步行五分钟可达的典型托斯卡纳农庄（Agriturismo），住在被葡萄园和柏树环绕的石头房子里，每天享用农场自产的新鲜早餐，还能体验橄榄收获或葡萄酒酿造的季节活动。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`奢华隐居`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车十分钟前往附近丘陵上一座由贵族别墅改造的五星级精品酒店，在无边泳池里俯瞰蒙特里焦尼的全景，在米其林推荐的餐厅享用创意托斯卡纳美食，将历史与极致舒适完美结合。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`灵活备选`}</h4>
                  <p className="text-sm text-purple-800">{`住在十五分钟车程外的中世纪名城锡耶纳，那里有从青年旅舍到宫殿酒店的丰富选择，夜晚可以感受更活跃的都市文化氛围，白天再乘巴士轻松往返蒙特里焦尼。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇内的住宿极其稀缺且非常受欢迎，务必提前数月预订。选择农庄住宿意味着你需要有车，但换来的是无可比拟的田园宁静和地道体验。如果夏季来访，务必确认住宿地点有空调，托斯卡纳的夏夜可能非常闷热。无论住在哪里，治安都非常好，可以放心漫步。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开蒙特里焦尼许久，我的脑海里依然会清晰地浮现出那个完美的圆形轮廓。它给我的触动，远远超出了一座“漂亮城堡”的范畴。在这个追求宏大、新奇和刺激的时代，蒙特里焦尼反其道而行之，它歌颂的是“小”，是“完整”，是“静止”。它像一个精心保管的时光胶囊，让你真切地触摸到一种已经消失的生活方式——那种以城墙为界，内部自成一统，与周围土地紧密相连的共同体生活。站在城墙之上，一边是内部安然有序的小世界，一边是外部浩瀚无垠的自然画卷，这种强烈的对比，会引发一种关于边界、守护与开放的哲学沉思。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`我想，我们如此迷恋这里，是因为在心灵深处，我们都渴望一处属于自己的“蒙特里焦尼”——一个界限清晰、不受侵扰、安然自若的精神家园。但丁看到了巨人的威严，而我们看到了时光的慈悲。它没有被摧毁，而是被温柔地遗忘了，直到我们这些现代旅人，带着对简单、宁静和永恒的渴望，重新将它发现。它不提供喧嚣的娱乐，只提供一片可供呼吸的宁静、一个可供想象的框架。来这里，不是为了打卡，而是为了让自己慢下来，在古老的石头与温暖的夕阳里，重新校准被都市生活打乱的内在时钟。这圈石头砌成的“花环”，最终成为戴在我们疲惫心灵上的一顶桂冠。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/vicenza-olympic-theater" className="block group">
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
              <a href="/attractions/cefalu-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    切
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">切法卢大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cefalù Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ferrara-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    费
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">费拉拉城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ferrara Castle</p>
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
