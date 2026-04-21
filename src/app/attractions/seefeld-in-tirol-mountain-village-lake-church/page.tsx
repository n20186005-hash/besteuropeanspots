import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '塞弗尔德 Seefeld in Tirol｜卡尔文德尔山脉环抱下的绝美天堂与传奇湖中教堂 - 最佳欧洲景点',
  description: '火车缓缓驶入站台，推开车门的刹那，那股清冽、甘甜得像山泉一样的空气便涌了进来，瞬间洗刷掉所有旅途的疲惫。你的第一眼，注定会被无边的绿意和巨幅的、仿佛触手可及的灰白色岩壁填满——这就是卡尔文德尔山脉，它像一个沉默而忠诚的巨人环抱，将塞弗尔德这个小镇温柔地捧在手心。耳边没有城市的喧嚣，只有隐约的牛铃声从',
}

export default function SeefeldInTirolMountainVillageLakeChurchPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '奥地利', href: '/destinations/austria' },
            { label: '塞弗尔德', href: '/attractions/seefeld-in-tirol-mountain-village-lake-church' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`塞弗尔德・Seefeld in Tirol・奥地利・蒂罗尔州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`火车缓缓驶入站台，推开车门的刹那，那股清冽、甘甜得像山泉一样的空气便涌了进来，瞬间洗刷掉所有旅途的疲惫。你的第一眼，注定会被无边的绿意和巨幅的、仿佛触手可及的灰白色岩壁填满——这就是卡尔文德尔山脉，它像一个沉默而忠诚的巨人环抱，将塞弗尔德这个小镇温柔地捧在手心。耳边没有城市的喧嚣，只有隐约的牛铃声从远山飘来，混合着溪流的潺潺声，以及空气中那股好闻的、松木、湿土和刚刚割过的草甸混合的清香。
漫步进入小镇中心，你会立刻爱上这里的节奏。五彩的鲜花从每家每户的木阳台倾泻而下，木屋的外墙被阳光晒出温暖的蜂蜜色。当地人穿着传统的Dirndl连衣裙或皮裤，不紧不慢地骑着自行车，或者在街角的咖啡馆外坐着，面前摆着一大杯泡沫丰富的啤酒。这里没有“景点”的疏离感，它就是一个活生生的、呼吸着的家园。你可以看到老人坐在长椅上雕刻小木人，也能听到孩子们在迷你高尔夫球场上的欢笑声。那种安宁与富足，是深植于这片土地血脉里的。
而当你沿着一条开满野花的小径漫步，不经意间转过一个弯，那个画面会瞬间击中你的心脏——圣奥斯瓦尔德教堂，就那样静静地立在翡翠色的一汪湖水中央，一条短短的木质栈桥是通往它的唯一路径。教堂的白色墙壁和洋葱头圆顶倒映在平静如镜的湖面上，背后是绵延的森林和刀削斧劈般的卡尔文德尔山峰。时间在这里仿佛凝固了，只剩下风声、鸟鸣，和你自己清晰的心跳声。这份极致的宁静与神圣，便是塞弗尔德最核心、也最打动人心的魔力。
无论是在夏日青翠的山谷中徒步，还是在冬日被厚厚粉雪覆盖的童话世界里滑雪，塞弗尔德都慷慨地展示着阿尔卑斯山最精髓的美。但它的魅力远不止于风景，更在于那种将悠久信仰、户外激情与日常生活完美融合的、独一无二的山地生活方式。来到这里，你不是游客，而是短暂回归自然与淳朴的山居者。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`火车缓缓驶入站台，推开车门的刹那，那股清冽、甘甜得像山泉一样的空气便涌了进来，瞬间洗刷掉所有旅途的疲惫。你的第一眼，注定会被无边的绿意和巨幅的、仿佛触手可及的灰白色岩壁填满——这就是卡尔文德尔山脉，它像一个沉默而忠诚的巨人环抱，将塞弗尔德这个小镇温柔地捧在手心。耳边没有城市的喧嚣，只有隐约的牛铃声从远山飘来，混合着溪流的潺潺声，以及空气中那股好闻的、松木、湿土和刚刚割过的草甸混合的清香。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`漫步进入小镇中心，你会立刻爱上这里的节奏。五彩的鲜花从每家每户的木阳台倾泻而下，木屋的外墙被阳光晒出温暖的蜂蜜色。当地人穿着传统的Dirndl连衣裙或皮裤，不紧不慢地骑着自行车，或者在街角的咖啡馆外坐着，面前摆着一大杯泡沫丰富的啤酒。这里没有“景点”的疏离感，它就是一个活生生的、呼吸着的家园。你可以看到老人坐在长椅上雕刻小木人，也能听到孩子们在迷你高尔夫球场上的欢笑声。那种安宁与富足，是深植于这片土地血脉里的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而当你沿着一条开满野花的小径漫步，不经意间转过一个弯，那个画面会瞬间击中你的心脏——圣奥斯瓦尔德教堂，就那样静静地立在翡翠色的一汪湖水中央，一条短短的木质栈桥是通往它的唯一路径。教堂的白色墙壁和洋葱头圆顶倒映在平静如镜的湖面上，背后是绵延的森林和刀削斧劈般的卡尔文德尔山峰。时间在这里仿佛凝固了，只剩下风声、鸟鸣，和你自己清晰的心跳声。这份极致的宁静与神圣，便是塞弗尔德最核心、也最打动人心的魔力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`无论是在夏日青翠的山谷中徒步，还是在冬日被厚厚粉雪覆盖的童话世界里滑雪，塞弗尔德都慷慨地展示着阿尔卑斯山最精髓的美。但它的魅力远不止于风景，更在于那种将悠久信仰、户外激情与日常生活完美融合的、独一无二的山地生活方式。来到这里，你不是游客，而是短暂回归自然与淳朴的山居者。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`塞弗尔德`} />
                <InfoRow label="英文名称" value={`Seefeld in Tirol`} />
                <InfoRow label="正式名称" value={`Seefeld in Tirol`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`蒂罗尔州`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座高山小镇是欧洲历史上著名的朝圣之路上的关键节点，并曾两次承办冬奥会赛事，是阿尔卑斯山区文化与运动传统交融的活态典范。`} />
                <InfoRow label="建筑特色" value={`经典蒂罗尔木结构房屋与宏伟的现代运动设施和谐共存，而那座仿佛从明信片中走出的、矗立在宁静小湖中的圣奥斯瓦尔德教堂是其无可争议的灵魂标志。`} />
                <InfoRow label="建筑风格" value={`以厚重的阿尔卑斯山区传统木构建筑风格为主，点缀着巴洛克式的宗教建筑细节，整体呈现出一种温暖、坚固且与自然地貌完美契合的山地美学。`} />
                <InfoRow label="文化价值" value={`它不仅仅是一个度假胜地，更是一个保存完好的、关于阿尔卑斯山民信仰、生活智慧与对自然崇高敬畏之情的文化宝库。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇全年开放，但体验最佳季节为夏季（5月至9月，适合徒步骑行）和冬季（12月至4月，滑雪旺季）。圣奥斯瓦尔德朝圣教堂（湖中教堂）通常每日上午8点至下午6点开放，冬季有时会提前至下午5点关闭。小镇游客中心工作日为9:00-18:00，周末时间可能缩短。部分高山缆车如Rosshütte缆车在夏季和冬季运营时间不同，需提前在官网查询具体时刻表。`} />
              <InfoRow label="门票价格" value={`进入小镇及自然区域免费。圣奥斯瓦尔德教堂免费参观，但欢迎捐赠以维护古迹。主要收费项目为山地缆车：例如前往Rosshütte的往返缆车票成人约25欧元，儿童有折扣。冬季滑雪通行证根据天数定价，一日通票约55欧元。当地博物馆门票约5欧元。几乎所有文化活动和节日庆典（如夏季音乐会、圣诞市场）均免费参与。`} />
              <InfoRow label="地址" value={`Seefeld in Tirol, 6100, Österreich`} />
              <InfoRow label="交通方式" value={`从最近的因斯布鲁克机场出发，驾车沿A12高速公路向北仅需约20分钟即可抵达塞弗尔德，出租车费用约40欧元。最推荐的方式是从因斯布鲁克主火车站乘坐区域火车（S-Bahn S5线），车程仅需30分钟，班次频繁（每小时至少2-3班），票价约6欧元，沿途阿尔卑斯山谷风光绝美。从慕尼黑方向来的长途火车也可直达塞弗尔德站。小镇内完全步行可达，也有便捷的本地巴士连接周边村落和徒步起点。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`塞弗尔德的故事，始于一条通往罗马的古老朝圣之路。中世纪时，虔诚的信徒们翻越险峻的阿尔卑斯山，塞弗尔德的山口是他们重要的歇脚点。关于湖中教堂的起源，当地流传着一个美丽的传说：大约在14世纪，一位名叫奥斯瓦尔德的猎人，在追逐一头雄鹿时，圣鹿突然消失，而它站立过的岩石上却奇迹般地出现了十字架的印记。人们视此为神迹，便在此建造了小礼拜堂，后来逐渐扩建为如今的圣奥斯瓦尔德教堂。教堂之所以建在湖中岛上，一方面出于对神迹发生地的尊崇，另一方面也巧妙地利用了天然水域作为屏障，增添了它的神秘与神圣感。几个世纪以来，这座教堂一直是蒂罗尔地区最重要的朝圣地之一。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇的命运与哈布斯堡王朝紧密相连。作为蒂罗尔公园的一部分，塞弗尔德的居民以农牧为生，坚韧地生活在群山之间。他们的木屋不仅是为了居住，更是一套应对严酷冬天和短暂夏季的生存智慧体系。厚重的木材保暖，倾斜的屋顶防止积雪压垮，宽敞的阳台用来晾晒干草和药材。每一个细节，都是与自然对话、协商后的结果。这种建筑传统被完好地保留至今，构成了小镇视觉基因的基础。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间快进到20世纪，塞弗尔德迎来了两次重大的转折。1964年和1976年，它两次成为因斯布鲁克冬奥会的分赛场，承办了北欧两项、跳台滑雪等赛事。冬奥会的举办，如同给这个宁静的山谷注入了新的活力。世界级的滑雪跳台、越野滑雪赛道、现代化的缆车系统被建立起来，塞弗尔德一跃成为国际知名的冬季运动中心。但难能可贵的是，它并没有在发展中迷失自我。冬奥设施被巧妙地融入自然景观，而小镇中心的历史风貌被立法严格保护。体育，成为了这里另一种虔诚的“信仰”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`从20世纪末至今，塞弗尔德的发展转向了更深层的可持续与高品质旅游。它不再仅仅追求滑雪人次，而是致力于打造一个四季皆宜的、注重健康与深度体验的度假天堂。夏季，数百公里维护良好的徒步和山地自行车道向所有人免费开放；冬季，除了滑雪，雪鞋徒步、马拉雪橇等静谧活动同样受欢迎。小镇积极推广本地有机食材，传承民间音乐和手工艺。今天的塞弗尔德，是一座活着的博物馆，它同时陈列着中世纪的虔诚、哈布斯堡时代的传统、冬奥的激情，以及当代对和谐生活的追求。它的历史，不是书页上的文字，而是你能呼吸到的空气、踏上的小径、以及遇到的每一个微笑着对你说“Grüß Gott”（上帝祝福你）的当地人。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要深度感受塞弗尔德，强烈建议预留至少一整天（甚至两天）的时间。最佳抵达时间是清晨，当第一缕阳光染红卡尔文德尔山尖，小镇还未完全苏醒时。整体节奏应是“慢”与“沉浸”。上午光线柔和，适合进行最具标志性的湖边漫步和教堂参观，感受其静谧的神性。随后深入小镇中心，在当地的烘焙坊用个早午餐，体验烟火气。下午是投身自然的时刻，选择一条中等难度的徒步路线（如通往Wildmoos高原的路线），用2-3小时亲近高山草甸与森林。傍晚下山，在传统的Gasthof享用一顿蒂罗尔晚餐，如果恰逢周末，或许还能在小广场上听到现场演奏的阿尔卑斯号角。这样的安排，能让你从精神、文化、自然和味觉上，全方位地理解这个小镇。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季徒步请务必穿着适合登山的鞋子并携带防风外套，山区天气变化极快，晴朗午后也可能突然下雨或起雾。
冬季除了保暖，太阳镜和高倍数防晒霜必不可少，雪地反射的阳光非常强烈，且高海拔紫外线不容小觑。
小镇消费偏高但明码标价，无需担心欺客，但旺季（圣诞假期、二月滑雪周）餐厅务必提前预订，否则很可能要等位很久。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第一站当然是漫步到野湖边，在清晨无人时分静静凝视圣奥斯瓦尔德教堂及其完美倒影，感受那份直击心灵的宁静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着湖岸步道慢慢走一圈，仔细辨认水边的野花，并留意观察当地人带着狗狗在此散步时那种闲适自在的状态。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过木质栈桥进入教堂内部，在略显昏暗的光线中点燃一支蜡烛，触摸那些被无数朝圣者磨得光滑的古老木长椅。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回到镇上，直奔主街那家飘着新鲜面包香气的传统烘焙坊，买一个刚出炉的“Kaiserschmarrn”（皇帝煎饼）碎块，站在路边享受这份甜蜜。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选择一条清晰标识的徒步小径向上攀登，比如朝向Wildmoosalm的方向，途中在长满蓝莓丛的草甸上找块石头坐下，面对群山发一会儿呆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午晚些时候下山，逛一逛小镇中心那些售卖手工木雕、羊毛制品和阿尔卑斯草药的精巧店铺。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐务必找一家有木质露台的乡村餐馆，点一份“Tiroler Gröstl”（土豆洋葱煎肉），配上一大杯本地啤酒，看着夕阳将雪山染成金粉色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果还有精力，晚饭后可以再次散步到野湖边，看教堂在夜幕和星光下的剪影，与白天的景象截然不同。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`野湖南岸经典全景位`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，站在湖南岸稍远的草坪上，使用广角镜头将湖中教堂、水面倒影以及后方完整的卡尔文德尔山体一同纳入画面，对称构图极具震撼力。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`徒步小径俯拍小镇机位`}</h4>
                  <p className="text-sm text-gray-700">{`沿着前往Härmelekopf或Reither Spitze的步道攀登约一小时后回望，可以在上午侧光下拍摄到塞弗尔德小镇像玩具积木一样散落在绿色山谷中的全景，背景是层叠的山峦。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣奥斯瓦尔德教堂内部光影`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个阳光明媚的上午，当光线透过教堂东侧的小窗射入内部，在长椅和石地上形成光柱时，在侧面捕捉信徒祈祷的剪影或静静空置的长椅，氛围感十足。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`冬日滑雪跳台与教堂同框`}</h4>
                  <p className="text-sm text-gray-700">{`在冬季，前往冬奥会跳台滑雪场地的观景台，用长焦镜头压缩空间，将前景的现代化跳台与远处雪地中静谧的湖中教堂同框，形成历史与当代、运动与信仰的奇妙对话。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效消除湖面反光，让教堂倒影更加清澈深邃，尤其在正午前后拍摄时效果显著。`}</li>
                <li>• {`航拍在当地受到严格管制，尤其在教堂和居民区上空，飞行前务必详细查询奥地利无人机法规并申请许可，尊重当地隐私和安宁。`}</li>
                <li>• {`拍摄当地人，尤其是穿着传统服饰的老人或儿童时，请务必先微笑示意并获得对方同意，这是基本的礼貌。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`阿尔卑斯家庭旅馆之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在镇中心一栋有百年历史的木屋里，房东老太太会为你准备丰盛的蒂罗尔早餐，晚上还能在开满天竺葵的阳台上听到隔壁传来的手风琴声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`高山牧场景观酒店`}</h4>
                  <p className="text-sm text-green-800">{`位于小镇上方稍高处的安静区域，房间拥有无敌的南向阳台，直面卡尔文德尔山脉，清晨在床榻上就能欣赏到“日照金山”的绝景。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计感十足的现代山林小屋`}</h4>
                  <p className="text-sm text-yellow-800">{`由知名建筑师设计，将极简美学与阿尔卑斯原生材料结合，拥有露天恒温泳池，在雪季可以体验一边漂浮在热水中一边欣赏飘雪的极致浪漫。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`冬奥遗产特色体验`}</h4>
                  <p className="text-sm text-purple-800">{`下榻在由昔日冬奥会运动员公寓改造的精品公寓，房间宽敞自带厨房，阳台正对滑雪跳台，让你完全融入这座小镇的运动血脉之中。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`塞弗尔德治安极好，几乎可以夜不闭户，但选择住宿时仍需注意，如果住在紧邻主街的房间，夏季夜晚可能能听到酒吧传来的隐约欢笑声，喜欢绝对安静的人可以优先选择靠近山坡或野湖的区域。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`预订时机至关重要，尤其是圣诞季和二月学校假期，热门酒店需要提前3-6个月预订，而夏季和深秋（非假期时段）则常有不错的折扣。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开塞弗尔德许久，我发现自己最怀念的，并非某一张惊艳的照片，也不是某一道具体的美食，而是一种整体的“感觉”。那是一种身心被彻底熨帖后的平和与充实。在这个被群山守护的小世界里，现代生活的焦虑和碎片化的信息洪流被自然地屏蔽在外。时间以更原始、更健康的节奏流逝——跟随日升日落，跟随季节轮转。你走路，是为了抵达一片开满龙胆花的草甸；你静坐，是为了聆听一场穿过松林的风；你呼吸，是为了让肺里充满那种清冽的、带有雪线和泥土味道的空气。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个过分喧嚣的世界里，塞弗尔德的存在就像一个温柔的提醒。它告诉我们，人类社区的构建，可以与自然如此亲密无间、相互成就；信仰可以如此质朴地融入一片湖水、一座山峰；而所谓的“度假”，其最高形式或许不是打卡消费，而是让自己回归到一种更简单、更专注、与天地万物紧密相连的生活状态。它不仅仅是一个值得列入清单的“景点”，更是一个可供我们短暂停泊、汲取能量并重新思考生活本质的“心灵栖息地”。每一位渴望深度游的旅人，都应该来这里住上几天，让自己被群山环抱，被湖水涤荡，找回那份内心久违的宁静与力量。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/hallstatt" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈尔施塔特镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hallstatt</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/votive-church" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沃蒂夫教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Votive Church</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/admont-abbey-library-ice-age-encounter" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿德蒙特修道院图书馆（与冰河世纪的相遇）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Admont Abbey Library (Encounter with the Ice Age)</p>
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
