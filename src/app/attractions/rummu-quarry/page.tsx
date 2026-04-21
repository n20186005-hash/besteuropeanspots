import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '鲁姆采石场 Rummu Quarry｜潜入苏联水下监狱废墟与魔幻蓝湖 - 最佳欧洲景点',
  description: '当我第一眼看到鲁姆采石场时，我以为自己误入了某个科幻电影的片场。那是一种极不真实的蓝，像有人把一整瓶蒂芙尼的墨水倒进了巨坑里，蓝得那么肆意，那么不近情理。与这纯粹到刺眼的蓝形成残酷对比的，是湖中心那片沉默的、灰黑色的废墟。那是监狱的屋顶和墙壁，像一头搁浅的史前巨兽的骨架，一半浸在冰冷的湖水中，一半挣',
}

export default function RummuQuarryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '爱沙尼亚', href: '/destinations/estonia' },
            { label: '哈尔尤县', href: '/destinations/estonia' },
            { label: '鲁姆采石场', href: '/attractions/rummu-quarry' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`鲁姆采石场・Rummu Quarry・爱沙尼亚・哈尔尤县`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当我第一眼看到鲁姆采石场时，我以为自己误入了某个科幻电影的片场。那是一种极不真实的蓝，像有人把一整瓶蒂芙尼的墨水倒进了巨坑里，蓝得那么肆意，那么不近情理。与这纯粹到刺眼的蓝形成残酷对比的，是湖中心那片沉默的、灰黑色的废墟。那是监狱的屋顶和墙壁，像一头搁浅的史前巨兽的骨架，一半浸在冰冷的湖水中，一半挣扎着探出水面，呼吸着北欧清冽的空气。四周静极了，只能听到风吹过岸边松林的沙沙声，偶尔有大胆的年轻人跳入水中的嬉笑，声音传过来也变得空灵、遥远。
你走近湖边，脚下的土地是粗糙的沙砾和碎石灰岩。空气中混合着好几种气味：松针的清香、湖水略带矿物感的湿润气息，还有从那些锈蚀了几十年的巨大碎石机传来的、若有若无的金属铁锈味。最神奇的是光影的游戏。北欧夏日的太阳角度很低，即使正午也带着一种温柔的斜度。阳光穿透那不可思议的湖水，在水下的水泥墙壁和楼梯井上投下晃动的、幽灵般的光斑。你可以清晰地看到建筑内部的结构，走廊、窗洞，仿佛一个沉没的迷宫在向你发出邀请。这哪里是废墟，这分明是一个被封印在水晶里的平行世界。
当地人对这个地方的感情是复杂的。对于老一辈人来说，这里曾经是恐惧和压迫的象征，一个他们宁愿绕道而行的地方。但对于今天的年轻人，这里却成了最酷的夏日派对场。你会看到穿着泳衣的姑娘们躺在充气筏上晒太阳，桨板爱好者在水上废墟间灵巧地穿梭，勇敢的潜水员背着重重的气瓶，准备去探索那个水下王国。历史的重负与当下的轻盈，在这里达成了某种诡异的和谐。它不再只是一个痛苦的伤疤，而变成了一个活着的、呼吸着的公共空间，一个用清澈湖水书写的新篇章。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当我第一眼看到鲁姆采石场时，我以为自己误入了某个科幻电影的片场。那是一种极不真实的蓝，像有人把一整瓶蒂芙尼的墨水倒进了巨坑里，蓝得那么肆意，那么不近情理。与这纯粹到刺眼的蓝形成残酷对比的，是湖中心那片沉默的、灰黑色的废墟。那是监狱的屋顶和墙壁，像一头搁浅的史前巨兽的骨架，一半浸在冰冷的湖水中，一半挣扎着探出水面，呼吸着北欧清冽的空气。四周静极了，只能听到风吹过岸边松林的沙沙声，偶尔有大胆的年轻人跳入水中的嬉笑，声音传过来也变得空灵、遥远。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你走近湖边，脚下的土地是粗糙的沙砾和碎石灰岩。空气中混合着好几种气味：松针的清香、湖水略带矿物感的湿润气息，还有从那些锈蚀了几十年的巨大碎石机传来的、若有若无的金属铁锈味。最神奇的是光影的游戏。北欧夏日的太阳角度很低，即使正午也带着一种温柔的斜度。阳光穿透那不可思议的湖水，在水下的水泥墙壁和楼梯井上投下晃动的、幽灵般的光斑。你可以清晰地看到建筑内部的结构，走廊、窗洞，仿佛一个沉没的迷宫在向你发出邀请。这哪里是废墟，这分明是一个被封印在水晶里的平行世界。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当地人对这个地方的感情是复杂的。对于老一辈人来说，这里曾经是恐惧和压迫的象征，一个他们宁愿绕道而行的地方。但对于今天的年轻人，这里却成了最酷的夏日派对场。你会看到穿着泳衣的姑娘们躺在充气筏上晒太阳，桨板爱好者在水上废墟间灵巧地穿梭，勇敢的潜水员背着重重的气瓶，准备去探索那个水下王国。历史的重负与当下的轻盈，在这里达成了某种诡异的和谐。它不再只是一个痛苦的伤疤，而变成了一个活着的、呼吸着的公共空间，一个用清澈湖水书写的新篇章。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`鲁姆采石场`} />
                <InfoRow label="英文名称" value={`Rummu Quarry`} />
                <InfoRow label="正式名称" value={`Rummu Quarry`} />
                <InfoRow label="国家" value={`爱沙尼亚`} />
                <InfoRow label="城市" value={`哈尔尤县`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座由苏联劳改营历史与自然力量共同塑造的、极具超现实美学的后工业时代地标。`} />
                <InfoRow label="建筑特色" value={`淹没在清澈透亮湖面之下的混凝土监狱建筑群，与岸边废弃的工业机械和裸露的石灰岩绝壁形成震撼对比。`} />
                <InfoRow label="建筑风格" value={`粗野主义的苏联工业建筑与纯粹自然景观的意外融合。`} />
                <InfoRow label="文化价值" value={`一个关于压迫、废弃与重生的无声纪念碑，见证了爱沙尼亚一段沉重的历史，并最终被自然和民众重新定义为充满生命力的休闲之地。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年全天24小时开放。但请注意，冬季（11月至次年3月）部分湖区可能结冰，且日照时间极短，午后即昏暗，最佳游览期为五月至九月。夏季傍晚时分游客最多，气氛也最活跃。没有任何官方管理机构，因此也没有售票处或固定的厕所设施，请务必提前做好准备。`} />
              <InfoRow label="门票价格" value={`进入采石场区域完全免费。如果你计划进行水上活动，需要自备或租赁设备：站立式桨板（SUP）租赁约15-20欧元/小时，皮划艇租赁约10-15欧元/小时。现场可能有私人经营的简易租赁点，但更建议在塔林市区或附近城镇提前预订好装备带过来。`} />
              <InfoRow label="地址" value={`Rummu alevik, 76101 Harju maakond, Estonia`} />
              <InfoRow label="交通方式" value={`从爱沙尼亚首都塔林出发是最佳选择。最灵活的方式是自驾，沿E265公路向西行驶约40公里，车程约45分钟，沿途有“Rummu”的棕色旅游指示牌。将车停放在主停车场（免费）。公共交通较为周折：从塔林中央汽车站（Tallinn Central Bus Station）乘坐前往哈普萨卢（Haapsalu）方向的巴士，在“Rummu”站下车，班次约为每小时一班，车程约1小时。下车后需沿着一条安静的林间道路徒步约1.5公里才能抵达湖边。务必提前查好返程巴士时刻表，傍晚后班次会非常稀少。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从上世纪三十年代说起。那时候，这里还是一片茂密的森林，地下藏着质地优良的石灰岩。苏联占领爱沙尼亚后，看中了这里的资源，一个庞大的采石场计划就此启动。但劳动力从哪里来呢？答案冰冷而残酷：来自监狱。于是，一堵高墙围了起来，一座名为“瓦西里卡”的监狱在采石场边拔地而起。在那些灰暗的岁月里，囚犯们日复一日地在这里开凿、搬运石块，这些石头被运去修建塔林和其他城市的苏联式建筑。机器的轰鸣、看守的呵斥、镐头撞击岩石的闷响，是这里的主旋律。高墙之内，是一个与世隔绝的、充满汗水与绝望的小世界。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`几十年的开采，在地上留下了一个越来越深、越来越大的矿坑。为了排水，强大的水泵必须日夜不停地工作，将地下水抽出，以保证采石作业能在干涸的坑底进行。整个矿坑就像一个被强行抑制住的伤口。时间来到1991年，爱沙尼亚重获独立。随着苏联体系的崩塌，这座监狱也被废弃了。看守撤离，大门洞开，机器停止了轰鸣。最重要的，是那些昂贵而耗能的水泵，也终于被关闭。历史在这里按下了静音键，然后，自然的力量开始接管。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`接下来的几年，是寂静而缓慢的“淹没”过程。没有人再干预，地下水开始自由地、耐心地回归它们原本的位置。雨水、融雪、地下水脉，从四面八方温柔地渗透进来。矿坑就像一个巨大的浴缸，水位以肉眼可见的速度逐年上涨。先是淹没了坑底生锈的铁轨和矿车，然后漫过一层层的开采台阶，最后，无情而又温柔地，拥抱了那座监狱建筑的底层。墙壁被浸泡，窗户成了鱼群进出的门户，曾经囚禁人的房间，现在游弋着好奇的鲈鱼和梭子鱼。这是一个充满诗意的复仇：曾经用于压迫的资源掠夺地，被最纯净的自然元素回收、净化。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`进入21世纪，这个被遗忘的角落开始进入探险家和摄影师的视野。那些水下废墟的照片在互联网上疯狂传播，人们被这种凄美而超现实的景象震撼。不知从谁开始，第一个勇敢的人跳进了这片湛蓝的水域，发现它竟然如此清澈、沁凉。一传十，十传百，鲁姆采石场悄然完成了身份的转换。它从一个充满负面记忆的禁忌之地，变成了一个极限运动爱好者和都市逃避者的天堂。没有官方的开发，一切都带有一种无政府主义的自发性。年轻人带来了音乐、色彩和活力，用充气艇、比基尼和无人机，为这片沉静的土地注入了全新的、充满生命力的叙事。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如今，你站在这里，看到的是历史层积的奇观。最底层是苏联工业的暴力开采史，中间层是自然力量的温柔修复史，最上层则是当代爱沙尼亚人自由、开放的生活态度。它没有变成一座沉闷的博物馆，也没有被改造成一个规整的收费公园。它保持了一种野性的、 raw 的状态，就像那道裸露的石灰岩绝壁一样真实。每一道水下墙面的裂缝，都同时诉说着两个故事：一个是关于囚禁与劳役的过去，另一个是关于释放与重生的现在。这就是鲁姆采石场最深邃的魅力所在。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在爱沙尼亚夏季一个晴朗的午后抵达，大约下午两三点钟。这样你有充足的时间探索陆地部分，并在日光最温暖、光线最富戏剧性的傍晚时分体验湖水。整体游览可以安排3-4小时，节奏宜松不宜紧。先围绕湖岸徒步，从各个角度欣赏全景，了解地形和历史痕迹；然后根据个人胆量，可以选择下水游泳、划桨板近距离探索水下废墟，或者只是坐在岸边岩石上发呆，看夕阳如何将这片蓝湖染成金黄和玫红。这样的安排能让你逐步由远及近、由表及里地感受这个地方的多重魅力，从历史旁观者逐步变为景致的参与者。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿着防滑耐走的鞋子，湖岸岩石锋利且不平，光脚或穿拖鞋非常危险。下水前务必用脚试探水温并评估自身能力，湖水即便在夏季也相当冰凉，且水下建筑结构复杂，避免独自深入冒险。请带走你产生的所有垃圾，这里没有清洁工，它的美丽依赖于每一位访客的自觉。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主停车场沿着明显的沙土小径向下走，第一眼看到那片镶嵌在森林和绝壁间的湛蓝湖泊时，务必停下来深呼吸，让这超现实的景象冲击你的感官。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺时针沿着湖岸漫步，仔细观察岸边散落的巨大生锈机械零件和开采痕迹，触摸那些被岁月打磨得光滑的石灰岩。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到正对水下监狱主建筑群的西侧观景点，找一块平坦的岩石坐下，静静地观察水面之上废墟的细节和水下摇曳的光影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果带了泳衣且水性不错，选一个平缓的入水点，勇敢地游向废墟，从水面的视角仰望那些伸出水面的墙壁和窗口，感受湖水的清冽。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`租一个站立式桨板，小心翼翼地划到废墟正上方，透过如玻璃般的水面，清晰地俯瞰水下房间、楼梯和走廊的完整结构。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在太阳开始西斜时，回到东侧较高的坡地，看着金色的阳光逐渐为石灰岩绝壁和废墟勾勒出锋利的轮廓，湖面颜色从湛蓝变为深蓝。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`趁着天光尚存，徒步探索采石场边缘的森林小径，或许能发现通往更高处俯瞰全景的秘密小径，感受从喧嚣水岸到寂静林间的转换。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`西岸经典全景位`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，站在西岸开阔的沙石地上，用广角镜头将湛蓝湖水、中心水下废墟、对岸的石灰岩绝壁以及天空一并纳入构图，层次感极其丰富。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`废墟正上方俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`租用桨板或无人机（注意当地法规），在风平浪静时抵达废墟正上方，垂直向下拍摄，捕捉水下建筑结构如蓝图般清晰展开的震撼画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`绝壁人像剪影`}</h4>
                  <p className="text-sm text-gray-700">{`日落前约一小时，请同伴站在东侧石灰岩绝壁的顶端边缘，以巨大的岩壁和广阔的湖面与废墟为背景，拍摄极具氛围感的人物剪影。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`水下建筑窗口`}</h4>
                  <p className="text-sm text-gray-700">{`如果你有防水相机或GoPro，游到废墟的窗户旁，将一半镜头置于水下拍摄窗内结构，另一半在水上拍摄窗外湖面和天空，创造分界线的神奇效果。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`森林俯瞰视角`}</h4>
                  <p className="text-sm text-gray-700">{`找到湖东侧森林中的一处制高点，透过松树的枝叶作为前景框架，拍摄整个采石场盆地的全景，展现其被自然环绕的孤寂与壮美。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`夏季正午阳光强烈，水面反光厉害，建议使用偏振镜（CPL）来消除反光，让水下景象更清晰。尊重他人隐私，拍摄正在休闲的他人时最好先征得同意，尤其是使用长焦镜头时。无人机飞行需保持谨慎，远离人群，并注意强风天气。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`便捷都市之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在塔林古城内或附近的精品设计酒店，清晨在古老石板路上散步后，租车轻松一日往返鲁姆采石场，晚上享受塔林丰富的餐厅和夜生活。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`湖畔露营体验`}</h4>
                  <p className="text-sm text-green-800">{`在鲁姆采石场附近合法的露营区域搭建帐篷，夜晚在星空下聆听湖水轻拍岸边的声音，清晨独享第一缕阳光洒在蓝湖上的绝美时刻。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`宁静乡村民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`选择哈尔尤县乡村由农庄改造的温馨民宿，体验真正的爱沙尼亚乡村生活，享用房东准备的 homemade 早餐，在田园风光中放松身心。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计感桑拿小屋`}</h4>
                  <p className="text-sm text-purple-800">{`在距离采石场车程半小时的森林或湖畔，预订一间带有传统烟熏桑拿的现代小木屋，在探索完冰冷的湖水后，用滚烫的桑拿和跳入自然水域的刺激来恢复活力。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（尤其是七八月）是爱沙尼亚的旅游旺季，塔林和热门乡村住宿预订很快，建议至少提前一个月规划。如果选择露营，务必确认地点是否合法，并做好防蚊措施（北欧的蚊子非常凶猛）。乡村地区晚上非常安静，商店关门早，最好提前备好零食和饮品。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开鲁姆采石场很久以后，我脑子里反复回响的不是画面，而是一种感觉——那种极致的矛盾所带来的宁静。这里同时承载着人类历史的沉重与自然生命的轻盈，并存着粗粝的工业伤痕与极致柔美的水体，回荡过痛苦的呻吟也充盈着此刻欢快的笑声。它没有试图去掩饰或美化任何一段过去，只是平静地呈现一切：你看，这就是发生过的，而现在，水来了，草长了，年轻人在这里欢笑，这就是生活本身的样子。这种不和解的共存，反而产生了一种巨大的包容力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个我们习惯于将历史包装成整齐叙事、将自然景观规划成标准产品的时代，鲁姆采石场像是一个珍贵的例外。它野性、真实、未经雕琢，拒绝被简单定义。它邀请你做的，不是被动的观光，而是主动的思考和感知。潜入那片冰凉清澈的湖水，你仿佛是在触摸一段尚未远去的时光；躺在温暖的岩石上晒太阳，你又真切地活在当下这个自由的瞬间。它告诉我们，即使是最沉重的历史伤痕，也可能在时间与自然的疗愈下，演变出意想不到的、充满生命力的美。对于任何一位不满足于走马观花、渴望触摸土地真实纹理与记忆的旅人来说，这里都是一堂无法替代的、关于历史、自然与重生的沉浸式课程。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/haapsalu-castle-estonia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈普萨卢城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Haapsalu Castle</p>
                  </div>
                </div>
              </a>
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
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
