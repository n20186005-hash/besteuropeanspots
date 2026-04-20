import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡尔马城堡 Kalmar Castle｜北欧文艺复兴的“童话王冠”与波罗的海的沧桑史诗 - 最佳欧洲景点',
  description: '当我第一次穿过卡尔马老城那些彩色的木结构房屋，忽然间，眼前豁然开朗。卡尔马城堡就那么静静地矗立在水边，不是我想象中那种阴森威严的巨人，倒像是一座从童话绘本里直接搬出来的、用姜黄色石头和红铜屋顶搭成的精美模型。午后的阳光把波罗的海的水面洒满碎金，城堡清晰的倒影在护城河微澜的水波里轻轻晃动，四座圆顶塔楼...',
}

export default function KalmarCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '卡尔马城堡', href: '/attractions/kalmar-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卡尔马城堡・Kalmar Castle・瑞典・卡尔马`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当我第一次穿过卡尔马老城那些彩色的木结构房屋，忽然间，眼前豁然开朗。卡尔马城堡就那么静静地矗立在水边，不是我想象中那种阴森威严的巨人，倒像是一座从童话绘本里直接搬出来的、用姜黄色石头和红铜屋顶搭成的精美模型。午后的阳光把波罗的海的水面洒满碎金，城堡清晰的倒影在护城河微澜的水波里轻轻晃动，四座圆顶塔楼像四顶王冠，守护着中央宁静的庭院。那一刻，你闻不到历史的硝烟味，只有海风带来的淡淡咸味，和岸边草坪修剪后清新的青草香。
然而，一旦你走过那座古老的吊桥，木板在脚下发出沉闷的回响，时空便瞬间转换了。城堡内部是一个与外部童话感截然不同的世界。这里没有北欧常见的极简性冷淡风，取而代之的是一种厚重、华丽甚至有些戏剧化的生活气息。你可以走进古斯塔夫·瓦萨国王的宴会厅，想象烛光在彩绘天花板下摇曳，空气中弥漫着烤鹿肉和香料葡萄酒的浓郁气味；你也可以踏入埃里克十四世那间令人心碎的囚室，触摸冰冷石壁上可能由他亲手刻下的痕迹，寂静中仿佛能听到几个世纪前那声沉重的叹息。这座城堡最打动人心的，正是这种极致的反差：它既是国家权力的坚硬外壳，也是王室悲欢的柔软容器。
在当地人心中，卡尔马城堡早已超越了旅游景点的范畴。它是城市无可争议的灵魂。你会看到推着婴儿车的母亲在城堡外的草坪上晒太阳，青少年在护城河边练习滑板，而到了夏季，城堡庭院又会变成露天音乐会和莎士比亚戏剧的舞台。历史在这里不是被封存的标本，而是流淌在日常呼吸里的背景音。城堡不仅俯瞰着波罗的海的航运，也注视着卡尔马人一代代的生活。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当我第一次穿过卡尔马老城那些彩色的木结构房屋，忽然间，眼前豁然开朗。卡尔马城堡就那么静静地矗立在水边，不是我想象中那种阴森威严的巨人，倒像是一座从童话绘本里直接搬出来的、用姜黄色石头和红铜屋顶搭成的精美模型。午后的阳光把波罗的海的水面洒满碎金，城堡清晰的倒影在护城河微澜的水波里轻轻晃动，四座圆顶塔楼像四顶王冠，守护着中央宁静的庭院。那一刻，你闻不到历史的硝烟味，只有海风带来的淡淡咸味，和岸边草坪修剪后清新的青草香。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，一旦你走过那座古老的吊桥，木板在脚下发出沉闷的回响，时空便瞬间转换了。城堡内部是一个与外部童话感截然不同的世界。这里没有北欧常见的极简性冷淡风，取而代之的是一种厚重、华丽甚至有些戏剧化的生活气息。你可以走进古斯塔夫·瓦萨国王的宴会厅，想象烛光在彩绘天花板下摇曳，空气中弥漫着烤鹿肉和香料葡萄酒的浓郁气味；你也可以踏入埃里克十四世那间令人心碎的囚室，触摸冰冷石壁上可能由他亲手刻下的痕迹，寂静中仿佛能听到几个世纪前那声沉重的叹息。这座城堡最打动人心的，正是这种极致的反差：它既是国家权力的坚硬外壳，也是王室悲欢的柔软容器。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当地人心中，卡尔马城堡早已超越了旅游景点的范畴。它是城市无可争议的灵魂。你会看到推着婴儿车的母亲在城堡外的草坪上晒太阳，青少年在护城河边练习滑板，而到了夏季，城堡庭院又会变成露天音乐会和莎士比亚戏剧的舞台。历史在这里不是被封存的标本，而是流淌在日常呼吸里的背景音。城堡不仅俯瞰着波罗的海的航运，也注视着卡尔马人一代代的生活。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卡尔马城堡`} />
                <InfoRow label="英文名称" value={`Kalmar Castle`} />
                <InfoRow label="正式名称" value={`Kalmar Castle`} />
                <InfoRow label="国家" value={`瑞典`} />
                <InfoRow label="城市" value={`卡尔马`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它不仅是瑞典保存最完好的文艺复兴城堡之一，更是1397年奠定北欧三国百年联盟的“卡尔马联盟”的诞生地，堪称斯堪的纳维亚政治历史的中心舞台。`} />
                <InfoRow label="建筑特色" value={`一座被宽阔护城河环绕的方形堡垒，四角耸立着高大的圆塔，内部则是由多位国王和王后精心营建的、充满生活气息的豪华宫殿。`} />
                <InfoRow label="建筑风格" value={`主体为16世纪北欧文艺复兴风格，并巧妙地融合了其前身——中世纪防御要塞的厚重与坚固。`} />
                <InfoRow label="文化价值" value={`它见证了瑞典从一个北欧强国到现代福利国家的历程，是理解瑞典王权、贵族生活以及北欧地缘政治的关键文化符号。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡的开放时间随季节变化较大，夏季（6月至8月）通常是每天上午10点至下午6点开放；春秋季（5月、9月、10月）开放时间缩短，通常在上午11点至下午4点，且周一可能闭馆；冬季（11月至次年4月）开放时间极为有限，一般仅在周末或特定日期开放，且需要提前预约。建议在计划行程前，务必访问城堡官方网站查询最新的具体开放日历，尤其是在圣诞节、仲夏节等瑞典重要公共假日前后，开放时间常有变动。`} />
              <InfoRow label="门票价格" value={`成人票约为170瑞典克朗；学生及65岁以上长者享有优惠票价，约150瑞典克朗；儿童及青少年（7-19岁）票价约为80瑞典克朗；7岁以下儿童免费。家庭套票（2大2小）约为450瑞典克朗。门票通常包含语音导览器（有多种语言可选）的使用费。每年特定日期（如国际博物馆日）可能免费开放。请注意，城堡内部的不同主题展览或特殊活动可能需要额外购票。`} />
              <InfoRow label="地址" value={`Kungsgatan 1, 392 33 Kalmar, Sweden`} />
              <InfoRow label="交通方式" value={`从斯德哥尔摩出发最便捷。乘坐瑞典国铁（SJ）高速列车，从斯德哥尔摩中央车站直达卡尔马站，车程约3.5至4小时，班次每天约4-6班，建议提前在线购票以获得优惠价格。从哥本哈根出发则可乘坐厄勒海峡列车至马尔默，再转乘前往卡尔马的地区列车，总时长约4.5小时。抵达卡尔马火车站后，城堡雄伟的轮廓已清晰可见，步行穿过老城区约15-20分钟即可到达。如果自驾，城堡外设有收费停车场。从斯德哥尔摩阿兰达机场也有直达卡尔马的长途巴士，但耗时较长。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`卡尔马城堡的故事，始于12世纪海岸边一座简单的防御塔楼。在那个维京时代余温未散的年代，波罗的海是财富与危险并存的通道。瑞典人需要在这里建立一个前哨，来保护他们的海岸线，并控制与哥特兰岛等地的贸易。最初的木质堡垒在13世纪被改建成石砌城堡，从此，“卡尔马”这个名字开始与坚固的防御划上等号。但真正让它名垂青史的，并非某场惨烈的战役，而是一场改变了整个斯堪的纳半岛命运的和平会议。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间来到1397年，北欧三国——瑞典、丹麦和挪威——的贵族们聚集在这座城堡的大厅里。当时的北欧深受德意志汉萨同盟的商业压制，内部也纷争不断。在丹麦女王玛格丽特一世的强势主导和精明运作下，一个前所未有的联盟条约在这里签署，史称“卡尔马联盟”。三个王国共戴一位君主，对外一致，对内则保留各自的律法。这份条约让北欧在超过一个世纪的时间里保持了相对的和平与强大。你可以想象那个场景：各国使者穿着华丽的服饰，用不同的语言低声交谈，羊皮纸卷被郑重地铺开，鹅毛笔划过表面的沙沙声，决定了几百万人的未来。城堡，第一次扮演了北欧“联合首都”的角色。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`联盟最终在16世纪初期瓦解，瑞典在古斯塔夫·瓦萨国王的带领下走向独立和强大。而这位“现代瑞典之父”也将卡尔马城堡作为他心爱的项目之一。他大刀阔斧地将这座中世纪堡垒，改造成了符合文艺复兴潮流的豪华皇家宫殿。他增建了那些标志性的圆塔，并在内部用当时最时尚的弗兰德式挂毯、彩色石膏浮雕和大型石砌壁炉进行装饰。他的儿子们，尤其是那位才华横溢又命运多舛的埃里克十四世，继续着父亲的工程。埃里克钟爱艺术与科学，他设计的“国王穹顶”房间有着惊人的声学效果，据说他常在那里演奏鲁特琴。然而，政治斗争的残酷最终将他囚禁在这座他自己参与美化的城堡塔楼中长达数年，直至精神崩溃。权力与艺术，创造与囚禁，在这堵墙内形成了最悲惨的注脚。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`随着瑞典帝国重心北移，卡尔马城堡在17世纪后逐渐失去了政治中心的地位，甚至一度被用作监狱和粮仓，昔日的荣光被灰尘覆盖。直到19世纪末，民族浪漫主义思潮兴起，瑞典人开始重新审视自己的历史遗产。一场持续数十年的、 meticulous的修复工程启动了。修复者们没有将它变成一座冰冷的新建筑，而是精心保留了不同时期的痕迹：中世纪厚重的石墙、文艺复兴华丽的装饰、乃至后来作为仓库使用的朴实结构。正是这种“层叠的历史”感，让今天的访客能够用指尖触摸到时光真实的纹理。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受卡尔马城堡的层叠魅力，建议安排至少4-5小时的深度游览。最好在上午10点开门时就抵达，这时旅行团尚未涌入，光线柔和，你能独自享受穿过吊桥进入城堡那一刻的宁静与震撼。游览节奏宜缓不宜急，遵循“由外而内，自下而上”的原则。先从外部环绕城堡一周，欣赏其作为防御工事的全貌与周边环境；然后进入内部，按照历史年代的顺序，从底层的中世纪地牢、仓库，逐步向上参观文艺复兴时期的王室套房、大厅，最后登顶塔楼，将一切尽收眼底。记得留出时间在城堡庭院的长椅上坐一会儿，只是静静地观察光影在古老墙壁上的移动。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季是旅游旺季，尤其是七月中旬后，城堡内会非常拥挤，尽量选择工作日早晨或傍晚时分参观以获得更好体验。城堡内部许多房间地面是原始的石板或木地板，且楼梯陡峭，务必穿着舒适防滑的鞋子。部分狭窄的通道和塔楼楼梯需要单向通行，请留意指示牌并耐心等待。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从古老的木制吊桥步入城堡主门，首先感受脚下木板的声音和门洞中扑面而来的凉爽石壁气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城堡中央的四方庭院驻足，仰头环视四周不同建筑风格的立面，想象这里曾举行过的骑士比武或宫廷庆典。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`深入地下层，探访阴冷的中世纪地牢和巨大的食品储藏窖，用手触摸冰冷潮湿的原始岩壁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着宽阔的“国王楼梯”上行，进入古斯塔夫·瓦萨国王时期装修的华丽国事厅，仔细欣赏天花板上繁复的彩色石膏花纹和古老的壁炉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`漫步穿过一系列王后与公主的起居套间，留意那些保存完好的16世纪彩绘木门和充满家庭生活感的壁龛。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在埃里克十四世的囚室塔楼里停留片刻，阅读墙上的说明，感受历史命运的无常与个人悲剧的沉重。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上北侧圆塔的顶端，迎着波罗的海的风，360度俯瞰卡尔马老城的红色屋顶、远方的跨海大桥和蔚蓝海面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`结束参观后，不要急着离开，在护城河畔的咖啡馆点一杯咖啡和一份经典的瑞典肉桂卷，慢慢回味。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`护城河东南角倒影拍摄点`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，无风时水面平静如镜，可以完美拍下城堡连同其倒影的对称全景，使用广角镜头效果更佳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡庭院拱门下的人物剪影`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射庭院时，站在通往国王楼梯的拱形门洞内向外拍摄，可以将同伴的身影与明亮的庭院形成强烈对比，故事感十足。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从“国王穹顶”房间的窗户向外拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，利用这扇古老的石窗作为画框，拍摄窗外波罗的海的帆船和蓝天，构图极具古典油画质感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`北塔楼顶的俯瞰全景`}</h4>
                  <p className="text-sm text-gray-700">{`登上塔楼后，不仅拍摄城市和海景，也可以将相机镜头对准下方城堡内院的几何图案屋顶和走动的人群，展现城堡的立体层次。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`西侧外墙与落日`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚前，走到城堡西侧的草坪上，等待落日将城堡的石墙染成温暖的金红色，这是捕捉城堡浪漫一面最佳的时刻。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`城堡内部大部分区域允许摄影，但严禁使用闪光灯和三脚架，以免损害珍贵的壁画和织物。拍摄身着中世纪服装的工作人员或参加特定活动时，最好事先礼貌征得同意。无人机飞行在城堡上空有严格限制，未经许可是禁止的。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`下榻城堡步行5分钟内的“卡尔马酒店”，这家百年酒店本身就有老式电梯和华丽的楼梯，部分房间窗户正对城堡塔楼，夜晚灯火亮起时 view 无与伦比。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计风格之选`}</h4>
                  <p className="text-sm text-green-800">{`位于老城运河边的“Slottshotellet”精品设计酒店，由古老建筑改造，内部是典型的北欧简约风，提供极舒适的入住体验和美味的本地早餐。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`家庭温馨之选`}</h4>
                  <p className="text-sm text-yellow-800">{`距离城堡约1.5公里的一处安静社区内的家庭经营B&B，主人热情好客，会为你准备丰盛的瑞典式早餐，并分享许多旅行指南上没有的本地小秘密。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`自然静谧之选`}</h4>
                  <p className="text-sm text-purple-800">{`开车15分钟可达的、坐落在海滨森林中的小木屋民宿，适合自驾者，享受完全的宁静，夜晚可以听到海浪声，白天则方便探索卡尔马周边海岸线。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`卡尔马城市非常安全，老城区夜间也很宁静。夏季（6-8月）的住宿非常紧俏，尤其是周末，务必提前数月预订。如果追求性价比，可以考虑住在火车站附近，那里交通便利，且有更多现代酒店和公寓式选择。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开卡尔马城堡时，我的背包里仿佛装下了比来时更沉重的东西。那不是石头或纪念品的重量，而是一种关于时间和存在的复杂感触。这座城堡像一个多面的棱镜，阳光照过，折射出不同颜色的光：有联盟缔造时的雄心壮志，有文艺复兴对美与秩序的追求，有权力斗争下的暗影与囚徒的哀歌，也有最终归于平淡、成为市民公园一部分的温和。它没有试图只讲述一个英雄的故事，而是坦然展示着历史所有的褶皱与伤疤。这种“完整”的真实，比任何修饰过的辉煌都更有力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求快速打卡、信息碎片化的世界里，卡尔马城堡提供了一种截然相反的旅行价值：它邀请你慢下来，去触摸一块被海风侵蚀了五百年的石头，去聆听一个几乎被遗忘的国王在囚室里的孤独，去理解一段塑造了整个北欧的联盟往事。它告诉我们，历史不是教科书上扁平的文字，而是由具体的人，在具体的地方，经历具体的快乐与痛苦所层叠而成的。每一位热爱深度游的旅人，都应该来这里，不仅是为了看一座漂亮的城堡，更是为了完成一次与北欧灵魂的深度对话，感受那份在波罗的海风中亘古回响的沧桑与坚韧。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/vasteras" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    韦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">韦斯特罗斯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vasteras</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/uppsala-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    乌
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">乌普萨拉大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Uppsala Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sigtuna-sweden" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡格蒂纳</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sigtuna</p>
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
