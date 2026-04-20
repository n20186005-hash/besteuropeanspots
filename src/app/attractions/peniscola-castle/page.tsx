import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '佩尼斯科拉 Peñíscola｜探访地中海上的“教皇城”与权游君临城取景地 - 最佳欧洲景点',
  description: '朋友，想象一下，你开车沿着西班牙地中海那条著名的“白色海岸”公路行驶，阳光炙烈，空气里是松树与海盐混合的干燥气味。就在你觉得风景开始重复时，一个令人屏息的画面出现了：前方碧蓝无垠的海面上，一块巨大的、淡金色岩石如同史前巨兽的脊背，破浪而出。而岩石的顶端，赫然耸立着一片密密麻麻的白色房屋，簇拥着一座坚...',
}

export default function PeniscolaCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '佩尼斯科拉', href: '/attractions/peniscola-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`佩尼斯科拉・Peñíscola・西班牙・卡斯特利翁省，佩尼斯科拉镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，你开车沿着西班牙地中海那条著名的“白色海岸”公路行驶，阳光炙烈，空气里是松树与海盐混合的干燥气味。就在你觉得风景开始重复时，一个令人屏息的画面出现了：前方碧蓝无垠的海面上，一块巨大的、淡金色岩石如同史前巨兽的脊背，破浪而出。而岩石的顶端，赫然耸立着一片密密麻麻的白色房屋，簇拥着一座坚实的、有着深色屋顶的城堡——它不像建在陆地上，倒像是直接从地中海的梦境里浮出来的。这就是佩尼斯科拉给你的第一眼震撼，一种近乎神话的存在感。
当你停好车，穿过连接陆地与岩石半岛的那道狭长沙堤，世界瞬间切换。喧嚣的现代海滩被抛在身后，你步入了一个由光滑鹅卵石铺就的迷宫。空气立刻变得不同，海风穿过狭窄的巷弄，带来潮湿的凉意，混合着某家小餐馆飘出的海鲜饭（Paella）的蒜香与藏红花气味。耳边是海浪永不止歇的、有节奏的拍打声，从四面八方涌来，成为这个小镇永恒的BGM。墙是耀眼的白色，被阳光刷得几乎发光，蓝色的窗棂和怒放的九重葛是唯一的点缀。你往上走，每一步都踩着被几个世纪脚步磨得温润发亮的石头，当地人慢悠悠地从你身边经过，手里拎着刚买的面包，仿佛这座悬崖上的舞台，只是他们寻常的后院。
而这一切的终点，就是那座城堡。它并非精致华丽的宫殿，而是一个严肃、粗粝、充满力量的军事存在。当你终于站在城堡前的广场上，360度的海风毫无遮挡地拥抱你。那一刻你突然明白了它为何被称为“海中城市”。你脚下是坚固的岩石地基，眼前是巍峨的石墙，而墙外，就是深邃得令人眩晕的地中海。这里的历史感不是博物馆里玻璃罩下的文物，而是弥漫在每一口呼吸里——是石头的冰冷，是海盐的咸涩，是阳光的热烈，也是孤独。这种孤独，是属于守望者的孤独，它曾在这里俯瞰几个世纪的海上烽烟。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，想象一下，你开车沿着西班牙地中海那条著名的“白色海岸”公路行驶，阳光炙烈，空气里是松树与海盐混合的干燥气味。就在你觉得风景开始重复时，一个令人屏息的画面出现了：前方碧蓝无垠的海面上，一块巨大的、淡金色岩石如同史前巨兽的脊背，破浪而出。而岩石的顶端，赫然耸立着一片密密麻麻的白色房屋，簇拥着一座坚实的、有着深色屋顶的城堡——它不像建在陆地上，倒像是直接从地中海的梦境里浮出来的。这就是佩尼斯科拉给你的第一眼震撼，一种近乎神话的存在感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你停好车，穿过连接陆地与岩石半岛的那道狭长沙堤，世界瞬间切换。喧嚣的现代海滩被抛在身后，你步入了一个由光滑鹅卵石铺就的迷宫。空气立刻变得不同，海风穿过狭窄的巷弄，带来潮湿的凉意，混合着某家小餐馆飘出的海鲜饭（Paella）的蒜香与藏红花气味。耳边是海浪永不止歇的、有节奏的拍打声，从四面八方涌来，成为这个小镇永恒的BGM。墙是耀眼的白色，被阳光刷得几乎发光，蓝色的窗棂和怒放的九重葛是唯一的点缀。你往上走，每一步都踩着被几个世纪脚步磨得温润发亮的石头，当地人慢悠悠地从你身边经过，手里拎着刚买的面包，仿佛这座悬崖上的舞台，只是他们寻常的后院。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而这一切的终点，就是那座城堡。它并非精致华丽的宫殿，而是一个严肃、粗粝、充满力量的军事存在。当你终于站在城堡前的广场上，360度的海风毫无遮挡地拥抱你。那一刻你突然明白了它为何被称为“海中城市”。你脚下是坚固的岩石地基，眼前是巍峨的石墙，而墙外，就是深邃得令人眩晕的地中海。这里的历史感不是博物馆里玻璃罩下的文物，而是弥漫在每一口呼吸里——是石头的冰冷，是海盐的咸涩，是阳光的热烈，也是孤独。这种孤独，是属于守望者的孤独，它曾在这里俯瞰几个世纪的海上烽烟。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`佩尼斯科拉`} />
                <InfoRow label="英文名称" value={`Peñíscola`} />
                <InfoRow label="正式名称" value={`Peñíscola`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`卡斯特利翁省，佩尼斯科拉镇`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座见证了教皇、骑士与海盗传奇的岩石半岛，地中海历史上最具战略意义的要塞之一。`} />
                <InfoRow label="建筑特色" value={`一座完全由岩石凿成、三面环海、仿佛从海中直接生长出来的中世纪城堡与城镇。`} />
                <InfoRow label="建筑风格" value={`以军事防御为核心的简约罗马式与哥特式风格，融合了圣殿骑士团与教皇时代的建筑印记。`} />
                <InfoRow label="文化价值" value={`是西班牙“白色海岸”历史与传说的灵魂，其独特的地理位置与建筑群完美诠释了地中海文明中陆地与海洋的永恒对话。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡开放时间随季节变化较大：通常夏季（6月至9月）为上午9:30至晚上21:30；春秋季（4月-5月，10月）为上午10:00至傍晚19:30；冬季（11月至3月）为上午10:30至傍晚17:30。最后入场时间通常在关闭前一小时。请注意，城堡每周一闭馆（除非是公共假日），且在1月1日、1月6日、12月24日下午、12月25日和12月31日下午关闭。具体时间建议出行前在官网再次确认。`} />
              <InfoRow label="门票价格" value={`城堡成人票价为5欧元。65岁以上老人及持有效学生证的学生票价为3.5欧元。8岁以下儿童免费入场。提供家庭票（2成人+2儿童）等优惠。有时会与老城区其他小型博物馆推出联票。现场购票即可，旺季时可能需排队。`} />
              <InfoRow label="地址" value={`Calle Castillo, s/n, 12598 Peñíscola, Castellón, Spain`} />
              <InfoRow label="交通方式" value={`从最近的瓦伦西亚机场（VLC）出发，最便捷的方式是自驾，沿AP-7高速公路向北行驶约1小时15分钟即可抵达佩尼斯科拉，沿途风景优美。若乘坐公共交通，可从瓦伦西亚的火车站（Estació del Nord）搭乘城际巴士（如Autocares Hife公司班车），车程约1小时45分钟至2小时，班次有限，建议提前查询时刻表。从卡斯特利翁市出发则有更频繁的本地巴士。佩尼斯科拉镇内，城堡位于老城区山顶，所有外来车辆必须停在山脚下的付费停车场，然后步行穿过迷人的白色街道上山，这也是体验的一部分。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲佩尼斯科拉的故事，得从它那不可复制的“身世”说起。这块伸入地中海约220米的巨大岩石，天生就是为要塞而生的。早在腓尼基人和古希腊人航海的时代，这里就已经有了定居点。但真正赋予它灵魂的，是中世纪的骑士们。13世纪初，来自东方的圣殿骑士团看中了这块宝地，他们从阿拉贡国王手中获得此地，并开始建造最初的防御工事。骑士们信奉实用与坚固，他们依着岩石的自然形态，用巨大的石块垒砌起高墙和塔楼，核心思想只有一个：抵御来自海上的任何攻击。我们今天看到的城堡主体，那份粗犷而庄严的气质，就深深烙印着圣殿骑士团的军事美学。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，让佩尼斯科拉在历史长河中留下浓墨重彩一笔的，是一位落魄而倔强的老人——教皇本笃十三世。这位在“西方教会大分裂”中被迫离开罗马的教皇，在生命的最后十年，选择了这座几乎与世隔绝的海上堡垒作为他的宫殿和最后的阵地。1411年，他进驻这里，将圣殿骑士留下的城堡，改造为一座功能齐全的“教皇皇宫”。他带来了珍贵的典籍、神学卷宗，建立了教皇法庭，甚至在这里设立了印刷所。你可以想象，在惊涛拍岸的孤岩之上，这位老人依然执着地行使着他认为属于教皇的权威，与整个欧洲教会抗衡。他于1423年在此去世，葬于城堡之下。正是这段历史，为佩尼斯科拉赢得了“教皇城”的尊称，也给坚硬的军事堡垒，注入了一丝悲情与神秘的宗教色彩。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`教皇逝去，但佩尼斯科拉的军事使命远未结束。在接下来的几个世纪里，它成了地中海海盗、奥斯曼帝国舰队以及各种海上势力垂涎和攻击的目标。它经历了无数次围困、炮击与争夺。城堡的墙体上，至今可能还留着某些未能修复的弹痕。为了加强防御，后来的统治者，尤其是菲利普二世时期，又增建了强大的外围城墙和炮台，形成了我们今天看到的、将整个岩石半岛顶端完全包裹起来的壮观防御体系。这些工程使得佩尼斯科拉成为了西班牙地中海沿岸最令人望而生畏的堡垒之一，它像一个永不屈服的战士，牢牢钉在海中，守护着身后的陆地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间的车轮滚到现代，硝烟散去，佩尼斯科拉逐渐褪去战袍，向世人展露它惊世骇俗的美丽。上世纪中叶起，它开始吸引艺术家和旅行者。而真正让它再次全球闻名的，是21世纪的《权力的游戏》。剧组敏锐地发现了这里独一无二的气质——那种未经过度修饰的、原始的、带着历史厚重感的孤傲。于是，佩尼斯科拉城堡化身为“弥林”的阶梯金字塔和部分场景，让无数剧迷前来朝圣。从教皇的避难所到影视剧的取景地，这座城堡以一种意想不到的方式，完成了它在当代文化中的又一次“加冕”。它静静矗立，看潮起潮落，无论是宗教纷争、战争铁血，还是娱乐世界的闪光灯，都成了它厚重编年史中的新篇章。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正品味佩尼斯科拉，我强烈建议你留出完整的一天，并抱着“迷失”的心态。最佳的抵达时间是清晨9点前，那时旅游团的大巴还未涌入，阳光温柔，本地生活刚刚苏醒。整体耗时约6-8小时，节奏宜慢不宜快。上午专注于探索城堡内部和其宏伟的防御体系，感受历史的肃穆；午后则留给迷宫般的老城街道，享受阳光、小巷和地中海的慵懒气息。傍晚时分，一定要留在城堡周边，等待一场可能永生难忘的地中海日落。这样的安排，既能避开人潮高峰，又能体验光影变幻下城堡与小镇截然不同的美。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季中午阳光极其猛烈，城堡屋顶和城墙上几乎没有遮荫，务必携带防晒霜、帽子和足够的水。穿着舒适耐磨的平底鞋至关重要，因为所有路面都是鹅卵石或台阶，高跟鞋会是一场灾难。小心老城里某些极其陡峭和光滑的斜坡路段。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从沙堤入口的“Portal Fosc”黑暗之门进入，立刻让自己迷失在如毛细血管般交错、洒满晨光的白色小巷里`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着任何上坡的小路一直走到城堡脚下的圣玛丽亚广场，在古老的泉水池边停留片刻，听水流声混杂着海鸟的鸣叫`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`购票进入城堡内部，先别急着进房间，而是直奔城堡屋顶的露台，让360度无死角的地中海全景给你一个震撼的开场`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在教皇大厅、会议室和地下室等房间里缓慢穿行，用手触摸那些冰冷的石墙，想象本笃十三世在此度过的最后时光`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡侧门走出，花至少一小时漫步在环绕整个老城的巨型海堤城墙之上，从每一个碉堡和炮口向外张望大海`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走下城墙，钻进老城腹地，找一家有露台的小餐馆，点一份用当地海鲜做的“鱼汤”或“黑海鲜饭”，看着巷子里的光影移动`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`饭后在那些售卖陶瓷、草编工艺品的小店间随意逛逛，不用买什么，只是感受那份闲适`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要在日落前半小时回到城堡附近的观景平台，找块石头坐下，看着夕阳将整个白色小镇、城堡和浩瀚大海染成金红`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`沙堤入口处侧拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，站在连接陆地的沙堤靠海一侧，用长焦镜头压缩空间，拍摄城堡全景矗立于海平面之上的孤独剪影`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡屋顶露台角楼框景`}</h4>
                  <p className="text-sm text-gray-700">{`上午光线最佳，利用露台西南角方形角楼的拱形窗口作为画框，将远处蔚蓝的地中海和海岸线框入其中，形成绝妙构图`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老城小巷光影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`午后阳光斜射时，在老城任何一条东西向的狭窄巷子里，等待阳光将白色墙壁、蓝色门窗和行人身影拉成长长的、富有戏剧性的光影画卷`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`海堤城墙漫步道俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`日落时分，站在北侧海堤城墙的制高点，面向城堡和老城建筑群拍摄，暖金色的光线勾勒出层层叠叠的屋顶和城堡轮廓，前景是蜿蜒的城墙`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`“Portal Fosc”门洞回望`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚蓝调时刻，从老城内部透过“黑暗之门”深邃的门洞向外拍摄，可以看到陆地的灯火与深蓝色的海天背景，形成强烈纵深感`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效减少白色墙壁的反光和增强海面的蓝色饱和度。飞无人机理论上需要申请许可，且老城上空常年风大，需非常谨慎。尊重当地居民隐私，避免将镜头直接对准私人住宅的窗户或阳台。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`老城沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住由15世纪老房子改造的石砌公寓，厚重的木梁、原始的石头墙壁，晚上能清晰听到海浪拍打岩石的催眠曲，真正睡在历史里`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`海景阳台民宿`}</h4>
                  <p className="text-sm text-green-800">{`位于老城边缘靠近北城墙的家庭式民宿，拥有一个面朝无边大海的私人小露台，是独享早餐和日落晚霞的秘密角落`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计感精品酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在新城与老城交接处的现代风格酒店，拥有屋顶无边泳池和酒吧，可以同时欣赏到古老城堡与广阔海滩的对比景观，适合追求舒适与设计感的旅客`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`田园隐居体验`}</h4>
                  <p className="text-sm text-purple-800">{`距离小镇几分钟车程、隐藏在橄榄园与杏仁林中的乡间别墅，享受绝对的宁静，白天开车去玩，晚上回来在星空下泡私人泳池`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿往往需要徒步一小段台阶才能到达，行李多者请提前联系房东询问协助可能性。夏季（7-8月）务必提前数月预订，尤其是周末。佩尼斯科拉总体治安良好，但老城夜晚照明较暗，独自夜行建议选择主干道。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开佩尼斯科拉很久以后，闭上眼睛，最先回来的不是某个具体的画面，而是一种混合的感觉：是脚底鹅卵石透过鞋底的轻微凸起感，是鼻腔里海风咸腥与白色墙壁被晒后散发出的、类似石膏粉的干燥气味，是海浪声作为永恒背景音所带来的那种奇异的宁静。这座城堡，或者说这座从海里长出来的小镇，它教给你的，是一种关于“坚韧”与“共存”的哲学。岩石是坚硬的，历史是坚硬的，但它托举起的日常生活——那些窗台上的花朵、咖啡馆的闲聊、晒在阳光下的床单——却如此柔软。它不曾被岁月软化，却学会了如何让生命在坚硬之上绽放。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求快速打卡、滤镜美化的旅行时代，佩尼斯科拉是一个固执的提醒者。它不提供轻易的华丽，它的美需要你用脚步去丈量，用身体去感受坡度的陡峭与海风的力度，用耐心去等待光线为它披上金色外衣的那一刻。它让你慢下来，让你体会到，真正的震撼往往来自于一种原始、质朴、甚至略带苍凉的力量。无论是追寻权力的游戏里龙母的足迹，还是探寻中世纪教皇的隐秘往事，抑或只是单纯地想找一个地方，看看地中海的日落如何染红千年的石头，佩尼斯科拉都会以其无可替代的姿态，深深地、沉默地，烙印在你的记忆里。它不仅仅是一个景点，它是地中海为你讲述的一个关于时间、孤独与永恒的故事。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/mudejar-architecture-teruel" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特鲁埃尔穆德哈尔建筑群</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mudéjar Architecture of Teruel</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/santillana-del-mar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    桑
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">桑蒂利亚纳代尔马尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Santillana del Mar</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/almagro-medieval-courtyard-theatre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔马格罗</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Almagro</p>
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
