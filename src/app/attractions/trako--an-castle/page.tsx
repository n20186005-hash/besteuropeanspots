import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '特拉科什恰恩城堡 Trakošćan Castle｜倒映在明镜湖中的浪漫童话，克罗地亚最美哥特复兴瑰宝 - 最佳欧洲景点',
  description: '朋友，想象一下这个画面：你穿过一片茂密得几乎要滴出绿意来的森林，脚下是沙沙作响的落叶，空气里混合着湿润的泥土、松针和远处野花那种清冽又带点甜味的香气。然后，路一转，豁然开朗——一座灰白色、带着尖塔和无数小窗的城堡，就那么安静地、完整地倒映在一池翡翠般的湖水里。那一瞬间，你会屏住呼吸，不是因为它有多么...',
}

export default function TrakoAnCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '特拉科什恰恩城堡', href: '/attractions/trako--an-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`特拉科什恰恩城堡・Trakošćan Castle・克罗地亚・瓦拉日丁县（邻近小镇：别洛瓦尔， 具体位于特拉科什恰恩村）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下这个画面：你穿过一片茂密得几乎要滴出绿意来的森林，脚下是沙沙作响的落叶，空气里混合着湿润的泥土、松针和远处野花那种清冽又带点甜味的香气。然后，路一转，豁然开朗——一座灰白色、带着尖塔和无数小窗的城堡，就那么安静地、完整地倒映在一池翡翠般的湖水里。那一瞬间，你会屏住呼吸，不是因为它有多么宏伟到令人敬畏，而是因为它完美得像个梦境，像是从童话书的插页里直接搬出来的，带着一种不真实的、温柔的浪漫。湖水纹丝不动，城堡和它的倒影上下对称，浑然一体，时间在这里仿佛被这面巨大的镜子给凝住了。
走近了，你会听到自己的脚步声在通往城堡大门的古老石桥上发出空旷的回响，混合着远处林间不知名鸟儿的啼叫，还有风吹过湖面、拂过城堡墙上藤蔓时那种细微的、丝绸摩擦般的沙沙声。这里没有大城市的喧嚣，连游客的交谈都自觉压低了音量，好像生怕惊扰了这份宁静。你会看到当地人——很多是情侣或带着孩子的家庭——他们不是在急匆匆地“打卡”，而是真的在享受。有人在湖边野餐垫上晒太阳，有人绕着湖慢跑，孩子们在草地上追逐。这座城堡不是一座被供起来的冰冷遗迹，它活在人们的周末和假日里，是这片土地上一个温暖而美丽的日常背景。
当你踏入城堡内部，那股混合了旧木头、陈年书籍、还有一丝若有若无的蜂蜡味道的空气，会立刻将你包裹。光线透过彩绘玻璃，在厚重的波斯地毯和深色橡木家具上投下斑斓而柔和的光斑。这里没有冷冰冰的“请勿触摸”的疏离感，每一个房间都布置得仿佛主人只是暂时离开。你会看到墙上的家族肖像画用深邃的目光注视着你，壁炉里似乎还残留着想象的余温，钢琴盖打开着，乐谱还架在上面。它的核心魅力，就在于这种极度私密和生活的气息。它不是讲述王权与战争，而是在娓娓道来一个家族的爱、品味、忧愁与梦想。
最打动人的，或许是那种贯穿始终的“沉浸感”。从湖光山色的外部，到充满生活痕迹的内部，再到后面那片可以漫步的英式花园，特拉科什恰恩邀请你进入的，是一个完整的、19世纪浪漫主义者的精神世界。它告诉你，城堡不仅可以用来防御，更可以用来做梦，用来安放对美、对自然、对过往时光最深切的眷恋。在这里，历史不是教科书上的一段文字，而是一种可以呼吸、可以触摸、可以坐在湖边静静感受的氛围。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，想象一下这个画面：你穿过一片茂密得几乎要滴出绿意来的森林，脚下是沙沙作响的落叶，空气里混合着湿润的泥土、松针和远处野花那种清冽又带点甜味的香气。然后，路一转，豁然开朗——一座灰白色、带着尖塔和无数小窗的城堡，就那么安静地、完整地倒映在一池翡翠般的湖水里。那一瞬间，你会屏住呼吸，不是因为它有多么宏伟到令人敬畏，而是因为它完美得像个梦境，像是从童话书的插页里直接搬出来的，带着一种不真实的、温柔的浪漫。湖水纹丝不动，城堡和它的倒影上下对称，浑然一体，时间在这里仿佛被这面巨大的镜子给凝住了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，你会听到自己的脚步声在通往城堡大门的古老石桥上发出空旷的回响，混合着远处林间不知名鸟儿的啼叫，还有风吹过湖面、拂过城堡墙上藤蔓时那种细微的、丝绸摩擦般的沙沙声。这里没有大城市的喧嚣，连游客的交谈都自觉压低了音量，好像生怕惊扰了这份宁静。你会看到当地人——很多是情侣或带着孩子的家庭——他们不是在急匆匆地“打卡”，而是真的在享受。有人在湖边野餐垫上晒太阳，有人绕着湖慢跑，孩子们在草地上追逐。这座城堡不是一座被供起来的冰冷遗迹，它活在人们的周末和假日里，是这片土地上一个温暖而美丽的日常背景。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你踏入城堡内部，那股混合了旧木头、陈年书籍、还有一丝若有若无的蜂蜡味道的空气，会立刻将你包裹。光线透过彩绘玻璃，在厚重的波斯地毯和深色橡木家具上投下斑斓而柔和的光斑。这里没有冷冰冰的“请勿触摸”的疏离感，每一个房间都布置得仿佛主人只是暂时离开。你会看到墙上的家族肖像画用深邃的目光注视着你，壁炉里似乎还残留着想象的余温，钢琴盖打开着，乐谱还架在上面。它的核心魅力，就在于这种极度私密和生活的气息。它不是讲述王权与战争，而是在娓娓道来一个家族的爱、品味、忧愁与梦想。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，或许是那种贯穿始终的“沉浸感”。从湖光山色的外部，到充满生活痕迹的内部，再到后面那片可以漫步的英式花园，特拉科什恰恩邀请你进入的，是一个完整的、19世纪浪漫主义者的精神世界。它告诉你，城堡不仅可以用来防御，更可以用来做梦，用来安放对美、对自然、对过往时光最深切的眷恋。在这里，历史不是教科书上的一段文字，而是一种可以呼吸、可以触摸、可以坐在湖边静静感受的氛围。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`特拉科什恰恩城堡`} />
                <InfoRow label="英文名称" value={`Trakošćan Castle`} />
                <InfoRow label="正式名称" value={`Trakošćan Castle`} />
                <InfoRow label="国家" value={`克罗地亚`} />
                <InfoRow label="城市" value={`瓦拉日丁县（邻近小镇：别洛瓦尔， 具体位于特拉科什恰恩村）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`克罗地亚保存最完好、最具代表性的19世纪浪漫主义时期贵族庄园与城堡，是国家级文化遗产与博物馆。`} />
                <InfoRow label="建筑特色" value={`哥特复兴风格建筑与人工湖及英式景观公园完美融合，形成一幅如诗如画的“水上城堡”景观。`} />
                <InfoRow label="建筑风格" value={`19世纪中叶盛行的浪漫主义哥特复兴风格，带有新哥特式的塔楼、雉堞和装饰性细节。`} />
                <InfoRow label="文化价值" value={`它不仅是一座城堡，更是一个时代的文化缩影，展示了19世纪克罗地亚贵族在民族复兴浪潮中对历史、艺术与自然田园生活的理想化追求。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡博物馆的开放时间因季节而异。通常四月至十月开放时间较长，为每天上午9点至下午6点；十一月至三月开放时间缩短，一般为上午9点至下午4点，且周一可能闭馆。公园和湖泊区域全天开放。具体开放日及时间可能因维修或特殊活动临时调整，建议出行前在其官方网站再次确认。节假日如圣诞节、元旦和复活节当天通常闭馆。`} />
              <InfoRow label="门票价格" value={`参观分为城堡内部博物馆和外部公园湖区。城堡博物馆门票：成人约40库纳（约合5.3欧元），学生及儿童享有优惠票价约20库纳。仅参观公园和湖泊区域门票更便宜，约10-15库纳。家庭套票通常可用。门票可在城堡入口处购买，支持现金（克罗地亚库纳）和主流国际信用卡。建议准备少量现金以备不时之需。`} />
              <InfoRow label="地址" value={`Trakošćan bb， 49217 Trakošćan， Croatia`} />
              <InfoRow label="交通方式" value={`自驾是最灵活便捷的方式。从首都萨格勒布出发，沿A4高速公路向东北行驶约80公里，从“Krapina”或“Zabok”出口驶出，再根据路标转入地方公路，总车程约1小时15分钟。若乘坐公共交通，可从萨格勒布中央汽车站乘坐前往瓦拉日丁或别洛瓦尔方向的长途巴士，在“特拉科什恰恩路口”下车，但此处距城堡仍有约4公里步行距离（沿途风景优美，但需预留时间），或尝试预约当地出租车。火车可达性较差，不推荐。建议提前用地图应用规划路线，乡村道路标识清晰。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起来，特拉科什恰恩最初的故事，可一点也没有后来的浪漫色彩。它的名字最早出现在13世纪的文献里，那时候，它大概只是这片丘陵地带的一个小型防御工事，属于另一个家族，职责是盯着下面的山谷和道路，充满了中世纪边境地区特有的紧张感。在接下来的几百年里，它像很多欧洲城堡一样，在贵族间辗转易手，经历过扩建，也必然承受过战乱的风雨，但始终不算特别起眼。它的命运转折点，要等到19世纪，和一个叫约西普·尤拉伊·德拉什科维奇的伯爵紧密相连。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`德拉什科维奇家族在18世纪末得到了这座已经有些破败的城堡。到了约西普伯爵这一代，正是欧洲浪漫主义思潮席卷的时候。人们突然开始迷恋中世纪，迷恋哥特式建筑的神秘与崇高，迷恋自然风景的野性与诗意。约西普伯爵，就是这样一个充满浪漫情怀的贵族。他不满足于城堡仅仅是一个乡下领地，他心中有一个更宏大的蓝图——要把这里打造成一个理想的、如画般的家园。于是，从19世纪40年代开始，一场持续数十年的改造工程启动了。这可不是简单的维修，而是一次彻底的重生。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下当时的情景：伯爵请来了建筑师，他们围着老城堡的废墟打转，脑海里浮现的却不是它原来的军事模样。他们借鉴了英国和德国的浪漫主义城堡设计，添上了高高的、指向天空的尖塔，设计了带有雉堞的墙垛，开出了又高又窄的窗户。更绝妙的一笔，是那个湖。原来这里可能只有一条小溪或一个水塘，但为了营造那种经典的“城堡倒影”画面，他们巧妙地筑坝蓄水，创造出了我们现在看到的这个几乎是为城堡量身定做的镜子般的湖泊。城堡本身的设计，也精心考虑了从湖对岸观看的视觉效果。这不是重建，这是一次基于美学的创作。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡内部，则被打造成为一个装满家族记忆和艺术收藏的宝盒。约西普伯爵和他的后人，从各地搜集来精美的家具、武器、绘画、挂毯和日常用品。每个房间都被赋予特定的功能与风格：庄严的骑士大厅挂满盔甲和先祖肖像，私密的小客厅摆放着来自东方的瓷器和刺绣，藏书室的书架顶到了天花板上，弥漫着智慧的气息。他们在这里生活，举办沙龙，享受乡间四季。这里的一器一物，都不再是冰冷的陈列品，而是一个家族几代人生活趣味和情感联结的见证，让这座建筑真正有了灵魂和温度。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`20世纪的动荡不可避免地波及了这个世外桃源。二战结束后，城堡被国有化。幸运的是，它没有被废弃或挪作他用，而是被设立为博物馆。这反而以一种意想不到的方式保存了它的完整。博物馆的策展人非常明智地保留了德拉什科维奇家族居住时的陈设原貌，使得我们今天走进任何一个房间，都仿佛穿越回了19世纪末那个最后的黄金时代。近年来，克罗地亚独立后，这里得到了精心的维护和修复，继续向世人述说着这个关于浪漫、家族与艺术的故事。从防御工事到浪漫主义杰作，再到公共博物馆，特拉科什恰恩的每一次转身，都紧扣着时代的脉搏，最终成为了我们今天看到的，一个凝固在湖光山色中的永恒之梦。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的特拉科什恰恩之旅应该像品一杯好酒，从容不迫，让每一个感官都充分打开。建议你在上午十点左右抵达，这时晨雾散去，阳光正好，湖面平静如镜，是拍摄经典倒影的黄金时间。整体游览可以安排3到4小时，遵循“由远及近，由外至内”的节奏。首先在城堡外围与湖泊共处，感受它的全景与氛围；然后深入城堡内部，探索那些充满故事的房间；最后漫步后花园，让思绪沉淀。这样的安排能让你逐步深入这座城堡的多重魅力，避免一开始就陷入室内历史的细节，而错过了它最震撼人心的整体景观。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周末和夏季午后是克罗地亚本地家庭出游高峰，湖岸会非常热闹，若追求宁静，请尽量安排在工作日上午前往。城堡内部房间大多铺有珍贵地毯且空间紧凑，请务必遵守规定，不触摸展品，不使用闪光灯。湖边的石板路和花园小径在雨后可能湿滑，建议穿一双舒适防滑的鞋子。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在森林边的停车场，先别急着冲向城堡，沿着左手边那条被树荫笼罩的小径慢慢走向湖北岸的最佳观景平台。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在观景平台静静呆上至少十分钟，看天鹅划过如镜的湖面，让城堡和它的倒影毫无保留地印入你的眼底和心里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走过那座古老的石桥进入城堡庭院，摸一摸入口处那些被岁月打磨得温润的石头墙，感受一下几个世纪沉淀下来的凉意。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`买票后从底层开始，在略显昏暗的“骑士大厅”里仰头看那些悬挂的古老盔甲和武器，想象这里曾举办过的宴会。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着木楼梯往上，不要错过二楼那间布满家族肖像画的沙龙，试着从画中人的眼神里读出这个家族的骄傲与哀愁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要走进那间小小的家族礼拜堂，留意祭坛后精美的彩绘玻璃，当阳光穿过时，整个空间会弥漫开一片神圣而斑斓的光影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上城堡的一个塔楼或露台（如果开放），从制高点俯瞰你刚刚走过的湖、森林和花园，将这片田园诗般的领地尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`游览完室内，从城堡后门溜进那个静谧的英式风景公园，沿着蜿蜒小径走到那个古典的亭子，坐在长椅上听完一首歌再离开。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`湖北岸经典倒影位`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或风平气和的傍晚，站在官方观景平台或稍靠东侧的岸边，使用广角镜头将城堡本体与其水中倒影对称构入图中，前景可带入几枝垂柳或湖边的石块增添层次。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡石桥入口仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`上午阳光照亮城堡正面时，站在石桥靠近入口的一端，低角度仰拍，将石桥的纵深感和城堡高耸的塔楼一同纳入画面，显得威严而富有故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`英式花园拱门框景`}</h4>
                  <p className="text-sm text-gray-700">{`从城堡后部花园的某个石制拱门或茂密的花架下向外拍摄，用拱门自然形成画框，将远处的城堡塔楼或湖泊一角框在其中，营造出窥探秘境般的古典油画感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`室内楼梯间光影`}</h4>
                  <p className="text-sm text-gray-700">{`如果允许拍摄室内，留意主楼梯间，在午后阳光斜射入窗时，捕捉光线在古老旋转木楼梯上形成的光影几何图案，以及空气中飞舞的微尘，极具氛围。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`林间小径远眺点`}</h4>
                  <p className="text-sm text-gray-700">{`从停车场另一侧深入树林，寻找一些能透过林木间隙看到城堡侧影的角落，用长焦镜头压缩空间，拍出城堡在林间若隐若现、如同遗世独立的感觉。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`湖面反光强烈，若想拍清水中倒影的细节，建议携带一块偏振镜（CPL）来消除水面偏振光。操作无人机前，务必确认当地法规和城堡管理方的具体规定，通常历史遗迹上空有严格的飞行限制。尊重隐私，避免将其他游客（特别是正在休息或野餐的家庭）作为你照片中突兀的主体。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`湖畔隐居之选`}</h4>
                  <p className="text-sm text-blue-800">{`城堡步行范围内仅有的一家小旅馆，房间朴素但干净，最大的奢侈是清晨和傍晚可以独享无游客打扰的湖光山色，听猫头鹰在森林里叫。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`田园风情民宿`}</h4>
                  <p className="text-sm text-green-800">{`开车约10分钟距离的周边村庄里，由农舍改造的民宿，主人会端来自酿的果酒和家庭制作的奶酪，晚上在院子里可以看到璀璨的星河。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`瓦拉日丁古城精品酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`若想结合城市文化体验，可住在30分钟车程外的“小维也纳”瓦拉日丁市中心，那里有巴洛克风格的宫殿改造的优雅酒店，夜生活也更丰富。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`别洛瓦尔家庭公寓`}</h4>
                  <p className="text-sm text-purple-800">{`位于稍大的城镇别洛瓦尔，性价比高的公寓或家庭式旅馆，自带厨房，适合停留数日深度探索该地区，去超市采购当地食材自己烹饪也很有趣。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡所在地非常僻静，除了一家小旅馆和可能的咖啡馆，几乎没有其他商业设施，建议提前准备好饮用水和简单零食。若选择住周边村庄，夜晚几乎没有路灯，自驾需小心驾驶。夏季（7-8月）是旺季，无论选择哪种住宿，都强烈建议提前数周乃至数月预订。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开特拉科什恰恩很久以后，我发现自己常常会想起那片湖水的宁静。在当今这个信息爆炸、一切追求高效和即时刺激的世界里，这个地方提供了一种近乎奢侈的体验：那就是无所事事的沉浸。它不要求你记住多少历史年份，不强迫你了解复杂的建筑术语。它只是在那里，美丽而平和，邀请你停下脚步，坐在湖边，看云飘过塔尖，看风吹皱倒影，让你的思绪可以安全地漫游，或者干脆放空。这种能力，在如今显得如此珍贵。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位热爱深度游的旅人，都应该来这里看看。它不仅仅是一座漂亮的城堡，更是一个关于如何与历史共处、与自然对话、与内心和解的温柔示范。它告诉我们，美可以如此具体——是一面湖，一座塔，一间充满生活气息的旧房间，和一段被悉心保存下来的家族记忆。在特拉科什恰恩的倒影里，你看到的不仅是石头和树木，或许还有自己内心一直寻找的那份宁静与浪漫。这是一次逃离，更是一次回归，回归到生活最本真、最诗意的模样。把它列入清单吧，去亲身感受那份从湖心荡漾开来的、平静的力量。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/baroque-varazdin" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    瓦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">瓦拉日丁</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Varaždin</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/hvar-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    赫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">赫瓦尔镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hvar Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sibenik-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    希
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">希贝尼克大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Šibenik Cathedral</p>
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
