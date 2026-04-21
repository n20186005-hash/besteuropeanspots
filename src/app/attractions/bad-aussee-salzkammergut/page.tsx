import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '巴特奥塞 Bad Aussee｜探访奥地利湖区心脏，沉醉于水仙花海与千年服饰工艺 - 最佳欧洲景点',
  description: '想象一下，你从火车的车窗望出去，连绵的阿尔卑斯山像巨人的绿色披风缓缓展开，然后，一片明镜般的湖泊闪过，紧接着，小巧精致的房屋带着彩绘的窗框和怒放的阳台花箱，一栋接一栋地映入眼帘。火车慢下来，停稳。你踏上月台，深吸的第一口气，是清冽的、带着松针和淡淡水汽味道的空气。这里就是巴特奥塞，没有大城市的喧嚣，',
}

export default function BadAusseeSalzkammergutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '奥地利', href: '/destinations/europe' },
            { label: '巴特奥塞', href: '/destinations/europe' },
            { label: '巴特奥塞', href: '/attractions/bad-aussee-salzkammergut' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`巴特奥塞・Bad Aussee・奥地利・巴特奥塞`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下，你从火车的车窗望出去，连绵的阿尔卑斯山像巨人的绿色披风缓缓展开，然后，一片明镜般的湖泊闪过，紧接着，小巧精致的房屋带着彩绘的窗框和怒放的阳台花箱，一栋接一栋地映入眼帘。火车慢下来，停稳。你踏上月台，深吸的第一口气，是清冽的、带着松针和淡淡水汽味道的空气。这里就是巴特奥塞，没有大城市的喧嚣，只有特拉恩河与格林德河在此交汇的潺潺水声，像永恒的低声吟唱。
走在镇中心的石板路上，你的眼睛会忙不过来。这里商店橱窗里陈列的，不是全球连锁的奢侈品，而是工艺繁复到令人惊叹的奥地利传统连衣裙（Dirndl）和绅士背心（Lederhosen）。蕾丝、刺绣、纯银纽扣，在柔和的灯光下闪着细腻的光泽。更让人着迷的是，你会真的看到当地人——那位买面包的女士，那位骑自行车的老先生——就穿着这样的衣服，从容地走过。这不是为了游客的装扮，而是他们生活的一部分，一种流淌在血液里的、对自身文化的骄傲与坚守。这种真实感，比任何博物馆的展品都更有力量。
而到了五月底六月初，整个地区会陷入一种甜蜜的疯狂。空气中弥漫的，不再是清冽的山风，而是浓郁得化不开的、带有青草气息的水仙花香。你走出小镇，走向周围的草甸和湖边，会被眼前的景象震撼得说不出话：不是一丛丛，不是一片片，而是无边无际的、雪白与鹅黄交织的野生水仙花海，顺着山势起伏，一直蔓延到深蓝色的湖水边缘。风过时，花浪翻滚，仿佛大地披上了一件会流动的锦缎。这就是著名的“水仙花节”，一场源于自然馈赠、如今已成为整个地区灵魂的庆典。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "想象一下，你从火车的车窗望出去，连绵的阿尔卑斯山像巨人的绿色披风缓缓展开，然后，一片明镜般的湖泊闪过，紧接着，小巧精致的房屋带着彩绘的窗框和怒放的阳台花箱，一栋接一栋地映入眼帘。火车慢下来，停稳。你踏上月台，深吸的第一口气，是清冽的、带着松针和淡淡水汽味道的空气。这里就是巴特奥塞，没有大城市的喧嚣，只有特拉恩河与格林德河在此交汇的潺潺水声，像永恒的低声吟唱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走在镇中心的石板路上，你的眼睛会忙不过来。这里商店橱窗里陈列的，不是全球连锁的奢侈品，而是工艺繁复到令人惊叹的奥地利传统连衣裙（Dirndl）和绅士背心（Lederhosen）。蕾丝、刺绣、纯银纽扣，在柔和的灯光下闪着细腻的光泽。更让人着迷的是，你会真的看到当地人——那位买面包的女士，那位骑自行车的老先生——就穿着这样的衣服，从容地走过。这不是为了游客的装扮，而是他们生活的一部分，一种流淌在血液里的、对自身文化的骄傲与坚守。这种真实感，比任何博物馆的展品都更有力量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而到了五月底六月初，整个地区会陷入一种甜蜜的疯狂。空气中弥漫的，不再是清冽的山风，而是浓郁得化不开的、带有青草气息的水仙花香。你走出小镇，走向周围的草甸和湖边，会被眼前的景象震撼得说不出话：不是一丛丛，不是一片片，而是无边无际的、雪白与鹅黄交织的野生水仙花海，顺着山势起伏，一直蔓延到深蓝色的湖水边缘。风过时，花浪翻滚，仿佛大地披上了一件会流动的锦缎。这就是著名的“水仙花节”，一场源于自然馈赠、如今已成为整个地区灵魂的庆典。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`巴特奥塞`} />
                <InfoRow label="英文名称" value={`Bad Aussee`} />
                <InfoRow label="正式名称" value={`Bad Aussee`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`巴特奥塞`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`奥地利萨尔茨卡默古特湖区的地理与文化心脏，也是传统高山民族服饰（Tracht）制作与保存的核心重镇。`} />
                <InfoRow label="建筑特色" value={`融合了阿尔卑斯山木屋风格与优雅的温泉疗养地建筑，色彩柔和的主广场被绘有精美壁画的历史建筑环绕。`} />
                <InfoRow label="建筑风格" value={`以本土的“萨尔茨卡默古特”风格为主，混搭了晚期哥特式、巴洛克及比德迈风格元素。`} />
                <InfoRow label="文化价值" value={`一个活着的奥地利传统文化宝库，在这里，穿戴精美民族服饰不是表演，而是日常生活的一部分，连接着人与自然、过去与现在的纽带。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇本身全天开放。核心景点如传统服饰博物馆（Trachtemuseum）开放时间一般为每年5月至10月，周二至周日 10:00-17:00，11月至次年4月仅周末开放或需预约。每年五月底至六月初的“水仙花节”（Narzissenfest）为期约四天，具体日期每年微调，需提前查询官网。大部分商店营业时间为周一至周五 9:00-18:00，周六 9:00-12:00。`} />
              <InfoRow label="门票价格" value={`进入小镇免费。传统服饰博物馆门票约5-8欧元，有家庭票及学生优惠。水仙花节期间，部分核心活动（如花车游行）免费观看，但乘坐特定游船进入花海核心区或参加主题晚宴等活动需额外购票，价格在15-50欧元不等。`} />
              <InfoRow label="地址" value={`Hauptplatz 1, 8990 Bad Aussee, Austria`} />
              <InfoRow label="交通方式" value={`从维也纳国际机场出发：最佳路线是乘坐火车。先乘机场快线或S-Bahn到维也纳中央火车站（Wien Hauptbahnhof），转乘开往“Attnang-Puchheim”方向的火车（约1.5小时），再换乘开往“Bad Aussee”的区域列车（约1小时）。全程约3-3.5小时，班次频繁。从萨尔茨堡出发更近：在萨尔茨堡中央火车站直接乘坐R或REX系列区域列车，约1.5小时直达巴特奥塞，每小时至少一班。建议下载奥地利联邦铁路（ÖBB）的App提前购票，常有折扣。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "巴特奥塞的故事，始于地底深处那闪闪发光的白色晶体——盐。早在公元前2000年，这里的盐矿就被开采，成为连接南北的“白色黄金”贸易路线的起点。中世纪时，它归于强大的哈布斯堡王朝，因为盐是帝国财政的命脉，小镇被严密地保护和管理着。你可以想象，当年满载盐块的马车队从这里出发，碾过如今你漫步的石子路，驶向远方的集市。盐带来的财富，让这个深山小镇早早地拥有了教堂、市政厅和坚固的房子，也塑造了当地人独立、坚韧的性格。他们是大山的子民，也是帝国不可或缺的工匠。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间的河流缓缓流淌，到了19世纪，一股新的风潮吹进了阿尔卑斯山谷。欧洲的贵族和富裕市民开始热衷于“温泉疗养”，巴特奥塞因其美丽的湖光山色和已有的盐泉资源，名字前被冠以“Bad”（温泉浴场）的称号，逐渐转型为一处优雅的度假地。漂亮的疗养别墅建了起来，宽阔的散步道沿着湖边延伸。也就是在这个浪漫主义时期，人们开始用新的眼光审视身边的自然。那每年春天如期绽放、覆盖山野的野生水仙花，从寻常景物，变成了诗人笔下、画家布上的灵感源泉，一种乡愁与美好的象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但真正让水仙花成为地区文化图腾的，是一战后那段艰难的岁月。奥地利帝国解体，经济萧条，这个以盐和旅游为生的小镇也陷入了困顿。据说，是当地一些富有远见的居民，为了重振社区精神、吸引游客，想出了举办“水仙花节”的主意。他们用新采的水仙花编织成巨大的图案和雕塑，装饰花车，举行游行。第一届节日在1930年代简陋开始，却意外地获得了巨大的成功。它不仅仅是一个节庆，更成为社区凝聚、工艺展示和对外宣传的窗口，让人们在自然之美中找到了希望和认同感。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "与节日起源几乎同样重要的，是那贯穿小镇历史的另一条线：传统服饰工艺。这里可不是简单地把老衣服保存在箱底。巴特奥塞所在的萨尔茨卡默古特地区，是整个奥地利，甚至德语区传统服饰（Tracht）复兴运动的心脏。二战后，当现代化浪潮席卷全球，许多地方的传统迅速消亡时，这里的匠人和爱好者们成立协会，系统性地研究、记录和复兴古老的剪裁、刺绣和装饰技艺。他们严格区分日常装、礼拜装和节日盛装，每一种都有其不可混淆的细节规范。小镇上的裁缝店和工坊，就是活的传承基地。你看到的每一位穿着得体传统服饰的当地人，都是一位行走的文化守护者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，今天的巴特奥塞，是一个奇妙的复合体。它既是古老盐路的历史见证，又是19世纪浪漫的温泉小镇；它既有席卷山野的、野性而短暂的自然花季狂欢，又有沉淀在针线布料中、需要静心品味和代代相传的永恒手艺。这种动与静、短暂与永恒、自然与人文的强烈对比与完美交融，正是它最迷人、最值得你花时间沉浸其中的深度所在。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排至少两天一夜，才能真正触摸到它的双重灵魂。第一天上午抵达，先感受小镇日常的人文脉搏；下午深入水仙花田（若在花季）或进行一场轻松的湖畔徒步。第二天上午探访博物馆和工坊，下午带着满满的感悟离开。最佳的游览节奏是“慢”，留出时间坐在广场长椅上发呆，和穿着传统服饰的店主聊上几句，或者只是沿着河边，听水流声洗去心头的浮躁。花季期间务必提前数月预订住宿。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`水仙花节期间小镇住宿极为紧俏，且价格翻倍，务必提前至少3-4个月预订。即使不在花季，周末和夏季也是旺季，提前预订是明智之举。进入私人草场观赏或拍摄水仙花时，请务必遵循指示牌，严格走在指定小路上，不要踩踏花丛，这是当地最重要的礼节。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从主广场的咖啡香气中开始，在面包店买一个新鲜出炉的“萨赫蛋糕”，看阳光如何慢慢照亮广场周围建筑立面上的古老壁画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着清澈见底的特拉恩河散步，走过那座有顶的木桥，观察本地居民在阳台上照料那些几乎要溢出来的天竺葵和矮牵牛。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探访位于卡默霍夫宫的传统服饰博物馆，花一小时凝视那些一个多世纪前制作的礼服上精密到毫米的刺绣和银饰，理解每一针线的含义。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果正值水仙花季，乘上开往阿尔特奥塞湖的小火车或徒步，让自己彻底迷失在那片望不到边的、香气袭人的白色花海里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在湖边一家传统的“Gasthof”（客栈）享用晚餐，必点一份用当地湖鱼烹制的“Forelle blau”（蓝鳟鱼），搭配施泰尔马克州的清爽白葡萄酒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花季的夜晚一定要去主广场或湖边，等待盛大的花车游行，看由数十万朵水仙花扎成的巨龙、城堡或神话人物在灯光和音乐中缓缓驶过。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第二天上午拜访一家传统裁缝工坊或银饰作坊，亲眼看看匠人如何将一块普通的布料或银锭，变成一件可以传家的艺术品。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在离开前，爬上小镇后方的小山丘“雷布林”，从山顶的观景台回望，将色彩斑斓的小镇屋顶、蜿蜒的河流和环绕的翡翠色湖泊尽收眼底。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`晨曦中的主广场全景`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时，从市政厅对面的街角拍摄，柔和的金色光线刚好打在广场建筑色彩柔和的立面上，能捕捉到小镇苏醒时的宁静与油画质感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`格林德河畔的经典木屋倒影`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光西斜时，在格林德河下游的某座小桥边，蹲低机位，让水面倒映出岸边爬满藤蔓的古老木屋和盛开的鲜花，画面宁静而富有诗意。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`水仙花海与阿尔特奥塞湖同框`}</h4>
                  <p className="text-sm text-gray-700">{`花季晴朗的上午，在阿尔特奥塞湖北岸的徒步小径上寻找制高点，用广角镜头将前景连绵的雪白花海、中景碧蓝的湖水和远景苍翠的达赫斯坦群山一同收纳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`传统服饰细节特写`}</h4>
                  <p className="text-sm text-gray-700">{`在博物馆或获得允许的工坊内，利用窗边的自然光，近距离拍摄一件古老Dirndl上的手工刺绣或银质纽扣，对焦在纹理细节，虚化背景，讲述工艺的故事。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`雷布林观景台全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时登上观景台，顺光拍摄，此时光线最通透，可以清晰地拍下小镇如玩具模型般镶嵌在山谷盆地中的完整格局。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄穿着传统服饰的当地人时，请务必先微笑示意并获得对方同意，这是一种基本的尊重。使用无人机前，必须了解并严格遵守奥地利关于自然保护区及居民区上空的飞行规定，最好提前查询或询问当地旅游局。水仙花田的拍摄最佳光线是清晨或傍晚的侧逆光，能勾勒出花朵的轮廓并产生梦幻的光晕。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`湖畔隐居`}</h4>
                  <p className="text-sm text-blue-800">{`阿尔特奥塞湖边一间家族经营的老牌度假屋，房间的木质阳台直接伸向湖面，清晨在房间里就能看到天鹅从薄雾中游过，夜晚只有湖水拍岸声伴你入眠。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史中心情怀`}</h4>
                  <p className="text-sm text-green-800">{`主广场旁一栋17世纪商人宅邸改造的精品酒店，房间保留着古老的木梁和彩绘天花板，下楼就是最热闹的咖啡馆和商店，完美融入小镇生活。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高山牧场体验`}</h4>
                  <p className="text-sm text-yellow-800">{`位于小镇上方山腰处的传统高山农舍民宿，需要开车一小段盘山路才能抵达，但回报是无敌的峡谷全景、房东自产的蜂蜜早餐，和真正的“远离尘嚣”。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计温泉疗养`}</h4>
                  <p className="text-sm text-purple-800">{`镇上的现代四星级温泉酒店，将阿尔卑斯风格与简约设计完美结合，拥有室内外连通的多功能盐水池，在徒步或游览一天后，泡在温暖的泉水中放松肌肉是至高享受。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "许多传统的家庭式民宿（Pension）不设24小时前台，且通常要求较晚抵达的客人提前联系确认，预订时务必留意。小镇及周边治安极好，可以放心夜游。如果你想体验水仙花节，订房时必须确认节庆具体日期，并做好价格是平日两到三倍的心理准备。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开巴特奥塞好几天后，我的鼻尖似乎还萦绕着那股清甜又略带辛辣的水仙花香，闭上眼睛，就能看见那片在山风里起伏的白色海洋。但那片花海终会凋谢，如同所有极致绚烂的自然景象，它的美在于短暂，在于一期一会。真正让我心头沉淀下来、久久回味的，反而是小镇上那些安静的画面：老裁缝透过眼镜端详布料纹路的眼神，银匠敲打金属时那稳定而富有韵律的叮当声，还有那位在市场买菜、裙摆绣着复杂花样却沾了点泥土的女士。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个地方教会我一种关于“深度”的辩证法。它用一场声势浩大、全民狂欢的自然节庆吸引你前来，却用一种需要静下心来、用数年甚至一生去磨练的指尖技艺，将你留住。它告诉你，美可以是席卷一切、令人窒息的盛大，也可以是日复一日、缝进生活褶皱里的细密针脚。在当今这个追求即时满足、一切速成的快节奏世界里，巴特奥塞像是一个温柔的提醒：有些东西值得等待一年，只为那几天的绽放；有些东西值得耗费数百个小时，只为完成一件可以穿上半辈子的衣裳。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，如果你厌倦了打卡式的旅行，如果你渴望一场不仅能洗涤眼睛、更能触动心灵的旅程，请一定把巴特奥塞放进你的清单。来这里，不只为看花，更为看看一群人如何与他们的土地、他们的历史、他们的手艺如此深情而郑重地生活在一起。你会发现，最动人的欧洲，往往就藏在这些地图上不起眼的小圆点里，它们守护着一些古老而珍贵的“慢”与“真”，静静地等着懂得欣赏的人，前来做一次深深的呼吸。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/tratzberg-castle-tirol-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特拉茨堡城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tratzberg Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gosau-dachstein-alpine-lakes" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    戈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">戈绍</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gosau</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/stift-zwettl-austria" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    茨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">茨韦特尔修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Stift Zwettl</p>
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
