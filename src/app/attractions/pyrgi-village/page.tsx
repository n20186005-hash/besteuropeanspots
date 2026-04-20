import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '皮尔吉 Pyrgi｜探秘希腊独一无二的几何黑白刮痕彩绘村 - 最佳欧洲景点',
  description: '当你的车拐过最后一个弯道，皮尔吉就这样毫无预兆地撞进眼帘。那绝不是你想象中的希腊蓝白村庄，而是一座从大地里生长出来的、黑白分明的几何迷宫。第一眼是眩晕的，成千上万的直线、菱形、波浪纹和回形纹，被一种近乎执拗的精准度，雕刻在每一栋房屋的每一寸外墙上。阳光炽烈，黑色的阴影和白色石膏的反射光在交锋，整座村...',
}

export default function PyrgiVillagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '皮尔吉', href: '/attractions/pyrgi-village' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`皮尔吉・Pyrgi・希腊・希俄斯岛，北爱琴大区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你的车拐过最后一个弯道，皮尔吉就这样毫无预兆地撞进眼帘。那绝不是你想象中的希腊蓝白村庄，而是一座从大地里生长出来的、黑白分明的几何迷宫。第一眼是眩晕的，成千上万的直线、菱形、波浪纹和回形纹，被一种近乎执拗的精准度，雕刻在每一栋房屋的每一寸外墙上。阳光炽烈，黑色的阴影和白色石膏的反射光在交锋，整座村庄在蒸腾的热浪中微微颤动，像一块被放置在爱琴海阳光下的、正在呼吸的活化石。
你走进去，仿佛踏入了一个巨大的、立体的谜题。巷道窄得只容两人侧身，高耸的石墙将天空裁剪成狭窄的蓝色缎带。空气里有股混合的味道：老石头被晒热后散发的尘土气，从某户人家窗口飘出的浓郁咖啡香，还有墙角野生百里香被鞋底碾过的清冽草药味。你的指尖会忍不住去触碰那些墙壁，感受“西斯塔”工艺留下的深刻沟壑，粗糙而富有韵律。耳边是寂静的，只有你自己的脚步声在石巷里回荡，偶尔被远处广场传来的几声孩童嬉笑，或是一扇老木门吱呀开启的声音打断。
你会发现，这令人眼花缭乱的图案并非随意为之。它们是一种无声的语言，讲述着家族的历史、地位，甚至可能是主人的职业。有些图案繁复如贵族纹章，有些则简洁明快。它们不仅仅是装饰，更是几个世纪以来，村民们对“家”这个概念的极致美化与捍卫。在这里，建筑的外墙不是隔阂，而是最公共的艺术画布，是向邻居和世界展示家族尊严与审美的最直接方式。生活就在这令人震撼的艺术品内部平静地进行着——阳台上晾晒着雪白的床单，窗台上的天竺葵开得正艳，老奶奶坐在阴凉的门槛上择菜。这种极致艺术与日常生活的无缝交融，才是皮尔吉最动人的心脏。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你的车拐过最后一个弯道，皮尔吉就这样毫无预兆地撞进眼帘。那绝不是你想象中的希腊蓝白村庄，而是一座从大地里生长出来的、黑白分明的几何迷宫。第一眼是眩晕的，成千上万的直线、菱形、波浪纹和回形纹，被一种近乎执拗的精准度，雕刻在每一栋房屋的每一寸外墙上。阳光炽烈，黑色的阴影和白色石膏的反射光在交锋，整座村庄在蒸腾的热浪中微微颤动，像一块被放置在爱琴海阳光下的、正在呼吸的活化石。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你走进去，仿佛踏入了一个巨大的、立体的谜题。巷道窄得只容两人侧身，高耸的石墙将天空裁剪成狭窄的蓝色缎带。空气里有股混合的味道：老石头被晒热后散发的尘土气，从某户人家窗口飘出的浓郁咖啡香，还有墙角野生百里香被鞋底碾过的清冽草药味。你的指尖会忍不住去触碰那些墙壁，感受“西斯塔”工艺留下的深刻沟壑，粗糙而富有韵律。耳边是寂静的，只有你自己的脚步声在石巷里回荡，偶尔被远处广场传来的几声孩童嬉笑，或是一扇老木门吱呀开启的声音打断。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你会发现，这令人眼花缭乱的图案并非随意为之。它们是一种无声的语言，讲述着家族的历史、地位，甚至可能是主人的职业。有些图案繁复如贵族纹章，有些则简洁明快。它们不仅仅是装饰，更是几个世纪以来，村民们对“家”这个概念的极致美化与捍卫。在这里，建筑的外墙不是隔阂，而是最公共的艺术画布，是向邻居和世界展示家族尊严与审美的最直接方式。生活就在这令人震撼的艺术品内部平静地进行着——阳台上晾晒着雪白的床单，窗台上的天竺葵开得正艳，老奶奶坐在阴凉的门槛上择菜。这种极致艺术与日常生活的无缝交融，才是皮尔吉最动人的心脏。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`皮尔吉`} />
                <InfoRow label="英文名称" value={`Pyrgi`} />
                <InfoRow label="正式名称" value={`Pyrgi`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`希俄斯岛，北爱琴大区`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`中世纪“马斯蒂霍霍里亚”（乳香脂村庄）防御性村落群的杰出代表，其独特的“西斯塔”（刮痕）外墙装饰艺术在全球独一无二。`} />
                <InfoRow label="建筑特色" value={`建筑外墙覆盖着由锋利工具手工刮擦出的、复杂而精准的几何黑白图案，宛如巨大的立体镂空蕾丝。`} />
                <InfoRow label="建筑风格" value={`热那亚防御性建筑与拜占庭后期民间装饰艺术的惊人融合。`} />
                <InfoRow label="文化价值" value={`活着的民间艺术博物馆，是希俄斯岛乳香文化和集体防御历史的皮肤与记忆。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`村落全天24小时开放。村内的圣使徒教堂（Church of the Holy Apostles）通常在上午9点至下午1点，以及下午5点至晚上8点开放。小型社区博物馆开放时间较为随意，建议向村中心的咖啡馆或小商店询问。夏季（6月至9月）是游览旺季，所有设施开放最为稳定；冬季部分小店可能歇业。`} />
              <InfoRow label="门票价格" value={`进入皮尔吉村本身完全免费。参观村内的小型民俗博物馆可能需要1-2欧元的自愿捐赠。教堂免费进入，但欢迎捐款以支持维护。`} />
              <InfoRow label="地址" value={`Pyrgi Village, 821 02, Chios, Greece`} />
              <InfoRow label="交通方式" value={`首先需抵达希俄斯岛。从雅典国际机场（ATH）有直飞希俄斯岛国家机场（JKH）的航班，航程约40分钟；也可从雅典的比雷埃夫斯港乘坐渡轮，航程约6-9小时（快船较慢船快）。抵达希俄斯岛后，从主要城镇希俄斯市（Chios Town）出发，前往皮尔吉最方便的方式是自驾或租车，沿南部海岸公路行驶约25公里，车程30-40分钟。公共交通方面，希俄斯市中央巴士站有前往皮尔吉及周边村镇的巴士，班次较少（夏季每天约4-5班，冬季更少），车程约50分钟，上车购票即可。打车单程费用大约在30-40欧元。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解皮尔吉的皮肤，你必须先了解希俄斯岛动荡的血液。时间拉回到14世纪，热那亚共和国控制了这座盛产珍贵乳香脂的岛屿。为了管理和保护这种价比黄金的资源，热那亚人在岛南部建立了一系列堡垒式的村庄，统称为“马斯蒂霍霍里亚”，皮尔吉便是其中最大、防御性最强的一个。当时的建筑逻辑是实用至上的：房屋紧紧相依，形成无法穿透的防御外墙；巷道狭窄曲折，形同迷宫，以抵御海盗和入侵者的袭击。整个村庄本身就是一座城堡，而每一户人家，都是城堡的一块坚不可摧的墙砖。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`那么，这身惊艳的黑白外衣是从何而来的呢？传说与历史的线索在这里交织。一种流传很广的说法是，这种被称为“西斯塔”或“格拉菲托”的刮痕技术，是随热那亚人从意大利带来的。意大利本土确实有类似的装饰传统，但没有任何地方，将其发展到像皮尔吉这样登峰造极、覆盖全村的程度。工匠们先用灰泥覆盖石墙，然后在未干时涂上黑色的火山沙（希俄斯岛特有的材料）。等表层稍干，他们使用特制的梳状或锯齿状工具，如同最耐心的外科医生，精准地刮擦掉黑色的表层，露出下面白色的石膏，从而创造出无穷无尽的几何图案。这最初可能只是为了加固灰泥，防止开裂的实用工艺，但很快，它演变成了艺术。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在奥斯曼土耳其帝国统治希俄斯岛的漫长岁月里（16世纪至1912年），皮尔吉的这身“外衣”被赋予了更深层的含义。面对高压统治，这种复杂的地方性艺术，成了一种沉默的抵抗和文化身份的坚守。图案变得更加隐秘和符号化，也许某些纹路藏着基督教的象征，也许迷宫般的巷道路线掩护了秘密的集会。村庄的封闭结构，原本为防御海盗设计，此刻则保护了一个独特社群的内在生活与文化火种。刮擦墙壁，不再仅仅是工匠的工作，它成为了一项传承的技艺，一种社区参与的传统，将美学、身份和集体记忆深深镌刻在每一面墙上。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`历史的惊涛骇浪并未放过这里。1822年，在希腊独立战争期间，毗邻的皮尔吉的港口村落发生了针对奥斯曼统治者的起义，随后招致了奥斯曼军队对全岛，特别是南部“马斯蒂霍霍里亚”地区的残酷报复。许多村庄被夷为平地，但皮尔吉因其坚固的结构和迷宫般的布局得以幸存。这次创伤深深刻入了岛屿的记忆，也让幸存下来的皮尔吉，其黑白纹路仿佛成了那段悲壮历史的疤痕与勋章，提醒着后人自由与尊严的代价。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走到今天，皮尔吉的“西斯塔”艺术不再是迫于生存的防御或抵抗，而是一种主动的文化骄傲与传承。新一代的年轻人开始重新学习这门古老技艺，以修复祖宅，也创作新的图案。每年夏天，村庄会举办小型文化节。联合国教科文组织也对这一独特文化遗产表达了关注。皮尔吉的故事，是一部从“生存的堡垒”到“艺术的圣殿”的蜕变史。它的墙壁，就是它自传的书页，用黑与白的语言，无声却磅礴地诉说着一切。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味皮尔吉，建议在下午三点左右抵达。此时，灼人的正午阳光开始变得倾斜，能在那些复杂的几何图案上拉出长长的、戏剧性的影子，是摄影和感受光影魔法的黄金时段。整体游览可以安排3-4个小时，节奏要慢，带着迷宫探秘的心态。先从外围感受村庄的宏观震撼，再深入腹地迷失于细节，最后在黄昏时分登高回望，见证落日余晖为黑白村庄披上金色薄纱的动人时刻。这样的安排既能避开日晒最烈的时段，又能捕捉到村庄从白天到傍晚两种截然不同的美。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季务必做好防晒，巷道狭窄荫凉处虽多，但广场和开阔地带阳光极其猛烈。尊重当地居民隐私，拍照时尽量避免直接对准人家门窗内部。穿一双绝对舒适的平底鞋，村里的石板路古老而不平整，上下坡很多。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在村口的免费停车场，先别急着进巷子，退后几步抬头看看村庄整体，那层层叠叠、密密麻麻的黑白立面如何构成一幅令人屏息的巨画`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主入口的缓坡向上，让自己彻底迷失在第一片迷宫般的狭窄巷道里，用手触摸两侧冰冷却布满纹路的墙壁，感受图案的凹凸质感`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`遵循着隐约的人声和咖啡香气，找到村庄的中央广场，在巨大的悬铃木树荫下找张桌子坐下，点一杯冰弗雷普（希腊冰咖啡），看当地老人玩西洋双陆棋`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观广场边上著名的圣使徒教堂，看看外墙上的“西斯塔”图案与教堂建筑的神圣感如何结合，留意那些可能包含宗教符号的特殊纹样`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访广场附近由老房子改建的小型社区民俗博物馆，看看传统家居摆设和“西斯塔”工具，听馆长（很可能就是村民）讲讲他家族的故事`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选一条未曾走过的小径向村庄边缘探索，你会发现图案的风格在微妙变化，越往外围可能越简朴，仿佛阅读一部从华丽封面到朴素内页的立体书籍`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着标志找到通往村庄古老防御城墙残垣的小径，爬上一小段坡，从这里回望，皮尔吉如一个精致的黑白棋盘模型躺在你脚下`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当夕阳西下，赶紧回到主广场或城墙处，等待金色的光芒如何一点一点将冰冷的黑白几何点燃成温暖的琥珀色与玫红色`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`中央广场仰拍视角`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后，站在广场中心仰拍四周被黑白几何图案包裹的房屋立面，此时阳光斜射，图案的立体感和阴影达到极致，构图时纳入一部分悬铃木的枝叶作为框架。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`迷宫巷道纵深构图`}</h4>
                  <p className="text-sm text-gray-700">{`找一条两侧图案特别繁复的狭长巷道，使用手机或相机的长焦功能，从一端拍摄向另一端延伸的纵深画面，强烈的几何线条能形成极具冲击力的引导线。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`夕阳全景捕捉点`}</h4>
                  <p className="text-sm text-gray-700">{`在村庄西侧外围的防御土墙或略高的空地上，日落后半小时的蓝调时刻，村庄亮起暖黄色的灯火，与深邃的蓝黑天空、依然可辨的黑白纹路形成绝妙的三层色彩对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`细节光影特写`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分虽然炎热，但却是捕捉局部细节的最佳时间，找一面图案清晰的墙，等待阳光将铁艺阳台或绿植的影子投射其上，拍下自然光影与人工雕琢图案的对话。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`圣使徒教堂侧面`}</h4>
                  <p className="text-sm text-gray-700">{`下午光线柔和时，拍摄教堂独特的钟楼与其侧面大片“西斯塔”墙壁的合影，体现宗教庄严与民间艺术的共生之美。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄民居时请保持礼貌距离，如果屋主正好在门口，一个微笑和简单的“您好”（Kalimera）能化解可能的不快。航拍器在村庄上空飞行可能会干扰居民，使用前最好询问当地人或避免在居住区正上方飞行。多利用光影变化而非滤镜，皮尔吉的黑白本色就是最高级的滤镜。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸式传统之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在村庄中心由百年“西斯塔”老宅改造的精品客房，睡在雕刻着古老几何图案的墙壁之内，清晨在私密的小阳台上聆听村庄苏醒的声音。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`舒适便利之选`}</h4>
                  <p className="text-sm text-green-800">{`选择村庄入口处步行三分钟可达的现代家庭旅馆，房间宽敞明亮，拥有无敌的全景露台早餐区，主人会给你手绘一张只有本地人才知道的秘境探索图。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`田园风光之选`}</h4>
                  <p className="text-sm text-yellow-800">{`住在皮尔吉周边橄榄园与乳香黄边木林中的静谧农庄，享受绝对的宁静，白天驱车几分钟进村探索，夜晚在星空下聆听虫鸣，体验真正的希俄斯乡村生活。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`海滩结合之选`}</h4>
                  <p className="text-sm text-purple-800">{`如果不介意短途车程，可以住在几公里外皮尔吉所属的埃姆波里奥斯海滩附近的小型酒店，将黑白几何艺术的探索与爱琴海碧蓝海水的放松完美结合。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`皮尔吉村内的住宿数量非常有限且极其抢手，务必提前数月预订，尤其是夏季和节假日。村庄夜晚极其安静，几乎没有夜生活，适合追求宁静和星空的人。选择村外住宿最好租车，否则交通会很不便。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开皮尔吉许久后，闭上眼睛，那片黑白的、晃动的几何光影依然清晰地印在脑海里。它不同于任何其他以色彩取胜的旅行目的地，它的震撼是沉静的、理性的，却又在深处涌动着强烈的情感。这不仅仅是一个“拍照很好看”的村庄，它是一个关于人类如何在动荡中创造美、在限制中爆发想象力、用最卑微的材料（灰泥和沙土）书写最不朽家族史诗的活态证明。走在那些巷子里，你触摸的是时间本身被雕刻后的形态。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求高速、标准化和即时满足的世界里，皮尔吉像一位固执的隐士，坚持着一种慢到极致的艺术。一面墙的“西斯塔”需要数周甚至数月才能完成，而维护整个村庄的纹路，则是代代相传、永无止境的集体承诺。它提醒我们，真正的文化和身份，不是博物馆里冰冷的展品，而是人们日复一日生活在其中、维护着、并为之自豪的日常环境。来这里，不只是看一场视觉奇观，更是上一堂关于坚韧、社区与艺术之永恒的深刻一课。每一位渴望在旅行中触碰历史灵魂、而不仅是收集风景明信片的旅人，都应该来皮尔吉，让自己迷失在这座黑白色的、活着的迷宫里，然后找到一些关于美与坚持的、最朴素的答案。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/xanthi-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克桑西古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Xanthi Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/molyvos-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莫利沃斯（依山傍海的石头城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Molyvos</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/mystras-byzantine-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    米
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">米斯特拉斯拜占庭遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mystras</p>
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
