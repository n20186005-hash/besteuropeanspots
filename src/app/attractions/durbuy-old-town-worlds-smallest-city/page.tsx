import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '德尔比老城 Durbuy｜在“世界最小城市”的童话里，做一场关于石头的梦 - 最佳欧洲景点',
  description: '朋友，想象一下，你拐过一个种满天竺葵的安静路口，眼前突然豁然开朗——一个被童话里才有的、歪歪扭扭的石头房子团团围住的小广场，就是你能看到的全部“市区”了。那一刻的错愕感特别真实，你会忍不住笑出来：“这就是一座城市？”没错，这就是德尔比，一个把“城市”的庄重头衔，戴在了一个比许多村庄还小巧的头顶上的神...',
}

export default function DurbuyOldTownWorldsSmallestCityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '德尔比老城', href: '/attractions/durbuy-old-town-worlds-smallest-city' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`德尔比老城・Durbuy・比利时・德尔比`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，你拐过一个种满天竺葵的安静路口，眼前突然豁然开朗——一个被童话里才有的、歪歪扭扭的石头房子团团围住的小广场，就是你能看到的全部“市区”了。那一刻的错愕感特别真实，你会忍不住笑出来：“这就是一座城市？”没错，这就是德尔比，一个把“城市”的庄重头衔，戴在了一个比许多村庄还小巧的头顶上的神奇地方。第一印象是各种层次的灰色：脚下是被岁月和脚步磨得发亮、透着深灰色的鹅卵石路；两旁是蓝灰色石板垒成的墙壁，缝隙里长着茸茸的青苔；抬头是层层叠叠、覆盖着深灰色板岩的尖顶屋顶。空气里有股清冽的味道，混合着旁边面包房飘出的焦香，以及从乌尔特河方向吹来的、带着水汽和森林气息的微风。整个小镇安静得能听到自己的脚步声在石壁间回荡，还有远处咖啡馆里杯碟碰撞的清脆声响。
但别被它的静默骗了。在夏天周末的市集日，这个迷你广场会瞬间“爆炸”。本地农人带着沾着泥土的蔬菜、一罐罐金黄的蜂蜜、车轮大的奶酪来到这里。空气里充满了烤香肠的烟火气、新鲜面包的酵母香，还有瓦隆方言那如唱歌般的交谈声。你会发现，“城市”的精髓不在于面积，而在于密度——生活的密度、历史的密度、快乐的密度。当地人提着菜篮，在仅有的两三条主街上就能完成所有社交：和肉铺老板聊聊天气，在花店前和老邻居寒暄，在广场长椅上晒着太阳喝一杯啤酒。他们生活在明信片里，却丝毫没有表演感，这种真实的生活气息，才是德尔比最打动人心的内核。
漫步其中，你会感觉自己像走在一个精心布置的微缩模型里，但一切又是如此真实可触。指尖划过冰冷的石墙，能感受到几个世纪前的石匠留下的凿痕；阳光从狭窄的巷道上空斜切下来，在石板路上画出明亮与阴影的锋利边界；你几乎能听到历史在石缝间窸窣作响。它的核心魅力，正在于这种极致的矛盾与和谐：一个拥有完整城市权利、城堡、教堂、市政厅的“政治实体”，却以一种近乎乡村的亲密和缓慢的节奏呼吸着。它像一个关于欧洲中世纪城镇的精致寓言，邀请你暂时忘掉宏大叙事，专注于一砖一瓦、一餐一饭中蕴含的永恒诗意。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，想象一下，你拐过一个种满天竺葵的安静路口，眼前突然豁然开朗——一个被童话里才有的、歪歪扭扭的石头房子团团围住的小广场，就是你能看到的全部“市区”了。那一刻的错愕感特别真实，你会忍不住笑出来：“这就是一座城市？”没错，这就是德尔比，一个把“城市”的庄重头衔，戴在了一个比许多村庄还小巧的头顶上的神奇地方。第一印象是各种层次的灰色：脚下是被岁月和脚步磨得发亮、透着深灰色的鹅卵石路；两旁是蓝灰色石板垒成的墙壁，缝隙里长着茸茸的青苔；抬头是层层叠叠、覆盖着深灰色板岩的尖顶屋顶。空气里有股清冽的味道，混合着旁边面包房飘出的焦香，以及从乌尔特河方向吹来的、带着水汽和森林气息的微风。整个小镇安静得能听到自己的脚步声在石壁间回荡，还有远处咖啡馆里杯碟碰撞的清脆声响。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但别被它的静默骗了。在夏天周末的市集日，这个迷你广场会瞬间“爆炸”。本地农人带着沾着泥土的蔬菜、一罐罐金黄的蜂蜜、车轮大的奶酪来到这里。空气里充满了烤香肠的烟火气、新鲜面包的酵母香，还有瓦隆方言那如唱歌般的交谈声。你会发现，“城市”的精髓不在于面积，而在于密度——生活的密度、历史的密度、快乐的密度。当地人提着菜篮，在仅有的两三条主街上就能完成所有社交：和肉铺老板聊聊天气，在花店前和老邻居寒暄，在广场长椅上晒着太阳喝一杯啤酒。他们生活在明信片里，却丝毫没有表演感，这种真实的生活气息，才是德尔比最打动人心的内核。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`漫步其中，你会感觉自己像走在一个精心布置的微缩模型里，但一切又是如此真实可触。指尖划过冰冷的石墙，能感受到几个世纪前的石匠留下的凿痕；阳光从狭窄的巷道上空斜切下来，在石板路上画出明亮与阴影的锋利边界；你几乎能听到历史在石缝间窸窣作响。它的核心魅力，正在于这种极致的矛盾与和谐：一个拥有完整城市权利、城堡、教堂、市政厅的“政治实体”，却以一种近乎乡村的亲密和缓慢的节奏呼吸着。它像一个关于欧洲中世纪城镇的精致寓言，邀请你暂时忘掉宏大叙事，专注于一砖一瓦、一餐一饭中蕴含的永恒诗意。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`德尔比老城`} />
                <InfoRow label="英文名称" value={`Durbuy`} />
                <InfoRow label="正式名称" value={`Durbuy, the World's Smallest City`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`德尔比`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座自中世纪起就被正式授予“城市”头衔的微型聚落，以“世界最小城市”的称号闻名，是阿登地区石头建筑与封建历史的活态见证。`} />
                <InfoRow label="建筑特色" value={`整个城镇宛如一块从山岩中雕刻出的灰色宝石，几乎全部由本地开采的蓝灰色板岩和石灰岩建成，房屋层层叠叠，与背后的山崖融为一体。`} />
                <InfoRow label="建筑风格" value={`以中世纪和文艺复兴时期风格为核心，融合了瓦隆地区典型的石板屋顶、山墙结构和古朴的木筋墙元素。`} />
                <InfoRow label="文化价值" value={`它代表着一种与世无争、自给自足的山地生活哲学，是快节奏现代社会中一处关于“小而美”的生活范本。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城广场、主要街道及公共区域全天24小时开放。主要景点如德尔比城堡内部及部分博物馆开放时间为每日上午10:00至下午17:00（夏季可能延长至18:00）。许多特色商店和餐厅的营业时间约为上午10:00至晚上19:00，部分餐厅营业至深夜。冬季（11月至次年3月）部分小型博物馆或景点可能只在周末开放或缩短时间，建议行前查询官网。`} />
              <InfoRow label="门票价格" value={`漫步古城本身完全免费。德尔比城堡（Château de Durbuy）的私人花园和部分可参观区域门票约为12欧元/成人。联合参观城堡及“迷宫世界”等景点的套票约为20欧元/成人。学生、65岁以上老人及儿童有相应折扣（通常为2-4欧元优惠）。镇上许多小型博物馆门票在3-8欧元不等。`} />
              <InfoRow label="地址" value={`Place aux Foires 25, 6940 Durbuy, Belgium`} />
              <InfoRow label="交通方式" value={`从布鲁塞尔国际机场（BRU）出发最便捷。在机场火车站乘坐火车前往巴永站（Station of Barvaux），车程约1小时20分钟，班次每小时1-2班。抵达巴永站后，出站即是公交站，乘坐366路公交车（方向Durbuy），约15分钟即可直达德尔比镇中心的“Durbuy Centre”站。公交车班次约每小时一班，周末可能减少，务必提前在STIB或SNCB官网查看时刻表。建议购买比利时铁路通票或在车站自动售票机购票。自驾者从布鲁塞尔沿E411高速转N86公路，约1.5小时可达，古城外设有多个收费停车场（P1，P2），步行5分钟进入中心。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲德尔比的故事，得从它那块最著名的“城市特许状”说起。那是在1331年，当时的领主，布拉班特公爵约翰三世，正式授予这个小小的山崖聚居地以“城市”的权利和特权。你可能会问，为什么是这里？把地图摊开就明白了：德尔比坐落于乌尔特河一个急转弯的凸岸，背靠陡峭的石灰岩山崖，易守难攻，是控制河运和陆路的天然要塞。授予它城市地位，等于在战略要地钉下了一颗牢固的钉子，能更好地征税、驻军和管理贸易。于是，这个可能只有几百居民的小地方，在法律意义上，拥有了和布鲁塞尔、列日平起平坐的身份，从此便骄傲地以“城市”自居。数百年来，它一直是封建领主们钟爱的据点，那座俯瞰全镇的城堡，就是权力的无声宣言。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，中世纪的荣耀也带来了中世纪的苦难。因为其战略位置，德尔比在漫长的岁月里成了各方势力争夺的棋子。特别是在17世纪，整个欧洲都陷入混战的“三十年战争”时期，这片富饶的阿登地区反复遭到法国、西班牙和荷兰军队的蹂躏。德尔比坚固的石头城墙和城堡，反而使它成为被反复围攻的目标。可以想象，刀剑、火焰和劫掠曾多少次席卷这些如今开满鲜花的狭窄街道。最严重的一次破坏发生在1688年，法国元帅德拉菲特指挥的军队几乎将城堡和大部分城镇付之一炬。我们今天看到的许多建筑，其实都是在灰烬上重建的，它们继承了古老的基座和格局，却披上了17世纪末、18世纪初重建时的那种更规整、更“文艺复兴”风格的外衣。石头记住了伤疤，也孕育了新生。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战争间隙是漫长的宁静。18、19世纪的德尔比，回归到一个安静的农业和石材加工中心。本地出产的优质板岩被开采出来，铺满了整个地区的屋顶，也垒起了德尔比自身不断扩展的肌体。那时的生活围绕着集市广场、磨坊和教堂展开。乌尔特河上运货的平底船被更高效的铁路取代，小镇反而因“偏安一隅”而完整保存了它的中世纪风貌。它没有经历工业革命的剧烈改造，时间在这里仿佛调慢了流速。这种停滞，在后来看，成了一种天赐的幸运。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的转折点发生在20世纪后半叶。当“遗产保护”和“乡村旅游”的概念兴起时，人们猛然发现，这个一直默默无闻、自称“世界最小城市”的地方，竟然是一座保存如此完好的中世纪宝石。聪明的当地人没有选择大拆大建，而是开始了精心的修复和低调的旅游开发。他们清洗石墙，在窗台上摆放鲜花，将老房子改造成温馨的民宿和高级餐厅，并巧妙地利用那个“世界最小城市”的称号作为营销点。于是，游客们怀着好奇而来，却被它深沉的美丽和宁静的氛围所征服。今天的德尔比，巧妙地在旅游热点与宜居家园之间找到了平衡。它不再是一个为了防御而生的要塞，而是变成了一座为了治愈现代人焦虑而存在的“心灵要塞”，它的城墙抵御的不再是军队，而是外界的喧嚣与浮躁。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味德尔比的精髓，我强烈建议你至少留出一整个白天，最好能在镇上住一夜。理想的抵达时间是上午九点前，那时旅游巴士还未抵达，小镇刚从晨光中苏醒，属于你自己。整体游览节奏务必“慢”。这是一座需要用脚步丈量、用发呆来体会的小镇，4-5小时的漫步加上一顿悠闲的午餐是完美的配置。路线可以设计成一个环线：从主广场出发，先深入静谧的后巷感受清晨的宁静，然后向上探索城堡和公园获得全景视角，再绕到“上城”体验更本地的生活区，最后沿着乌尔特河畔返回起点，感受水边的温柔。这样安排，你既能捕捉到光影最美的时刻，又能避开主要街道上午后的人群高峰，体验从静谧到生动再到宁静的完整韵律。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避开周末和比利时的法定假日，否则“最小城市”会瞬间变成“最拥挤的明信片”，失去大半韵味。务必穿一双绝对舒适、鞋底有弹性的步行鞋，这里的每一块鹅卵石都在考验你的脚踝。不要只沉迷于拍照，留出时间坐在广场长椅上，什么都不做，只是看人来人往，才能真正融入这座小镇的呼吸。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`趁清晨第一缕阳光刚刚照亮主广场（Place aux Foires）石板地的时候抵达，看洒水车清洗过后的地面反射着金光，整个世界安静得只听见你自己的呼吸声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`毫不犹豫地钻进广场东侧任何一条如缝隙般狭窄的小巷（比如Rue des Récollets），让高耸的石墙将你包围，抬头看一线天光，感受脚下百年鹅卵石的不规则触感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着缓缓上升的坡道走向城堡（Château de Durbuy）的观景露台，不必急于进入内部，先凭栏远眺，看整个灰色屋顶的海洋在脚下铺开，远处是阿登森林绵延的绿色波浪。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡侧面的小径拐进市政厅后方的德尔比公园（Parc des Topiaires），在这个充满奇趣的植物雕塑迷宫里暂时“迷失”，欣赏园艺师将树木修剪成大象、船只形状的惊人技艺。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`绕到小镇北侧相对安静的“上城”区域，在圣尼古拉教堂（Église Saint-Nicolas）朴素的外墙下坐一会儿，观察本地居民提着购物袋从容走过的日常图景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一家有露天座位的餐厅（比如临河的几家）享用一顿漫长的午餐，必点一份阿登火腿或本地河鱼，配上一杯清爽的比利时修道院啤酒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`饭后沿着乌尔特河（Ourthe）畔的步行道慢行，看野鸭成群，看古老的石桥和水中倒影连成一个完美的圆，让潺潺水声洗去所有杂音。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在黄昏时分回到主广场，此时游客散去，华灯初上，石头建筑在暖黄色的灯光下显露出白天没有的温柔质感，找一家巧克力店买几颗手工夹心巧克力，作为一天的甜蜜句点。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡观景台全景位`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前半小时，站在城堡入口附近的矮墙边，用中焦段镜头（35-50mm）拍摄，将前景的城堡石墙与中景层层叠叠的屋顶、远景的森林一同纳入画面，层次感立现。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`Comtes巷光影巷`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射时，走进Rue des Comtes这条极窄的巷子，等待阳光照亮一侧石墙而另一侧陷入深邃阴影的瞬间，拍摄人物行走其中的剪影或背影，极具戏剧张力。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣尼古拉教堂背面仰角`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，从教堂后方的小空地上仰拍教堂的石头钟塔与背后山崖上的民居同框，使用广角镜头（24mm以下），展现建筑与自然岩壁共生共存的奇特关系。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`乌尔特河畔倒影`}</h4>
                  <p className="text-sm text-gray-700">{`无风的清晨或傍晚，站在横跨乌尔特河的石桥（Pont de Durbuy）上，向下游方向拍摄，将河岸边的石头房屋、绿树和它们在平静水面上的完美倒影一起构图，画面宁静而对称。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`岩石广场特写`}</h4>
                  <p className="text-sm text-gray-700">{`在任何时候，将镜头对准市政厅（Hôtel de Ville）侧面被称为“岩石广场”（Place du Sablon）的岩壁，近距离拍摄岩石纹理、顽强生长在石缝中的植物与人工砌筑的石墙交汇的细节，诉说时间的故事。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重居民隐私，避免将镜头直接对准私人住宅的窗户或正在庭院里休息的当地人。使用偏振镜可以有效地消除石板屋顶和湿漉漉的鹅卵石地面上不必要的反光，让色彩更加饱和深沉。雨后的德尔比是摄影的黄金时间，被雨水浸润的石头颜色会变得格外深沉浓郁，富有质感。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`石头屋民宿沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住由17世纪石匠故居改造的家庭民宿，房间低矮的木梁、厚实的石墙和小小的格子窗让你彻底沉浸在中世纪氛围里，女主人会为你准备装在陶瓷罐里的自家果酱早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`城堡酒店贵族体验`}</h4>
                  <p className="text-sm text-green-800">{`直接下榻在翻修一新的德尔比城堡酒店内，住在拥有数百年历史的厚重墙壁之中，清晨推开窗，整个小镇和河谷的晨雾都仿佛是你的私人领地，感受一把领主的尊贵与宁静。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`河畔精品设计酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`选择乌尔特河岸边的现代设计型精品酒店，房间拥有全景落地窗，将古老的石桥与潺潺流水框成一幅活的画作，在极简舒适的现代设施中欣赏窗外亘古不变的风景。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`森林边缘庄园度假村`}</h4>
                  <p className="text-sm text-purple-800">{`对于追求绝对静谧和空间感的旅人，可以住在小镇外围、坐落在阿登森林边缘的古老庄园酒店，每天在鸟鸣中醒来，散步十分钟即可进入古镇，完美兼顾隐居与探索。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇中心住宿非常紧俏，尤其是特色石屋民宿，务必提前至少2-3个月预订。住在主广场附近虽然方便，但周末夜晚可能能听到酒吧隐约的喧闹声，偏好绝对安静的人可选择“上城”区域或河对岸的住所。夏季许多住宿会要求最少入住两晚。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开德尔比许久后，我脑海里反复回放的，不是某个具体的画面，而是一种感觉——一种被致密、坚实而又温柔的历史紧紧包裹的感觉。在这个一切都被夸大、加速、稀释的时代，德尔比倔强地代表了一种“反潮流”的价值：小，可以是一种完满；慢，可以是一种深刻；旧，可以是一种力量。它像一颗被时光打磨得温润的石头，不张扬，却有着压舱石般的重量，让你在纷繁世界里忽然找到重心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了那些宏大的地标和摩肩接踵的景区，请一定来这里。德尔比教会我们的，或许不是某个历史知识，而是一种生活态度：真正的丰盛不在于拥有多少，而在于是否与你所拥有的每一块石头、每一寸光阴深度相连。它是一首写给“小而美”文明的田园诗，一个让你相信童话可能真的存在的地方。每一位热爱深度游的旅人，都应该来这个“世界最小城市”做一次心灵的归零，在这里，你会重新学会如何专注地看一片苔藓，听一次钟声，品一口啤酒，然后带着这份被石头和宁静充过电的心，继续走向广阔的世界。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/mechelen-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅赫伦老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mechelen Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/notre-dame-de-namur-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    那
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">那慕尔圣母大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Notre-Dame de Namur Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/belfry-of-mons-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蒙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蒙斯钟楼及老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Belfry of Mons and the Old Town</p>
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
