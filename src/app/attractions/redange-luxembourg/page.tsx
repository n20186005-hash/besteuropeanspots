import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '雷当日 Redange｜欧盟奠基人桑特故乡与阿登森林秘境 - 最佳欧洲景点',
  description: '车子刚刚转出主干道，世界瞬间就安静了下来。第一个击中你的，是气味。那是一种清冽、湿润，混合着冷杉树脂、潮湿苔藓和远处田野刚翻过的新泥的味道，它毫不客气地灌满你的鼻腔，洗去了一路来的汽油味。这就是雷当日，卢森堡西部边境上一个几乎要被葱郁森林吞没的小镇。视线所及，没有高耸的塔楼，没有炫目的橱窗，只有一片',
}

export default function RedangeLuxembourgPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '卢森堡', href: '/destinations/europe' },
            { label: '雷当日', href: '/destinations/europe' },
            { label: '雷当日', href: '/attractions/redange-luxembourg' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`雷当日・Redange・卢森堡・雷当日`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚刚转出主干道，世界瞬间就安静了下来。第一个击中你的，是气味。那是一种清冽、湿润，混合着冷杉树脂、潮湿苔藓和远处田野刚翻过的新泥的味道，它毫不客气地灌满你的鼻腔，洗去了一路来的汽油味。这就是雷当日，卢森堡西部边境上一个几乎要被葱郁森林吞没的小镇。视线所及，没有高耸的塔楼，没有炫目的橱窗，只有一片依着缓坡错落铺开的蓝灰色屋顶。那些房子真有意思，墙壁是用大块粗粝的板岩垒起来的，颜色像是阴雨天的天空。屋顶的坡度陡得惊人，瓦片一直延伸到很低的位置，仿佛房子正谦卑地向大地躬身，好抵御阿登地区漫长冬季的风雪。时间在这里，是以炊烟和云影来计量的。
你很快会发现，这里的“中心”不是一个广场，而是一种氛围。几条石板小路交汇处，有一座小小的、奶油色的新古典主义教堂，钟楼纤细。教堂前的长椅上，总有几位头发银白的老人安静地坐着，他们不说话，只是看着偶尔驶过的汽车，或者远处草地上吃草的马匹。咖啡馆只有一家，兼卖报纸和面包，木头门框被岁月磨得发亮。你推门进去，门铃“叮当”一响，里面聊天的声音会暂停一秒，所有人都友善地看向你——这个陌生的闯入者，然后又继续他们低沉的卢森堡语交谈。那种注视没有审视，只有一点淡淡的好奇，仿佛在说：“哦，来了个客人。”在这里，你不是游客，你是一个短暂的访客，被允许分享他们日复一日的、平静的日常。
而这片日常的基底，是无穷无尽的绿。小镇像是绿色海洋中的一座孤岛，四面八方都被连绵的森林紧紧拥抱。那些徒步小径的入口毫不起眼，可能就在某座石砌农舍的篱笆旁，一个简单的木桩路标指向密林深处。走进去，光线立刻暗下来，脚下是厚厚的、松软的腐殖土，踩上去悄无声息。高耸的山毛榉和橡树滤掉了大部分声响，只留下你自己的呼吸声、鸟鸣，以及不知何处溪流潺潺的隐约回响。你会突然明白，为什么从这里能走出雅克·桑特那样胸怀欧洲的人。唯有经历过这种极致的宁静与自足，才能真正懂得连接与共生的珍贵。
最打动人心的，莫过于那种“恰如其分”的感觉。这里的一切都比例得当，人与自然、房屋与土地、历史与当下，达成了一种温柔的默契。没有为了吸引眼球而刻意营造的“古镇风情”，只有生活本身，在四季轮回中缓慢而坚定地流淌。它的魅力不是冲击性的，而是浸润性的。待上半天，你那颗被城市噪音磨出老茧的心，会像吸饱了水分的苔藓，慢慢舒展开来，恢复柔软。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子刚刚转出主干道，世界瞬间就安静了下来。第一个击中你的，是气味。那是一种清冽、湿润，混合着冷杉树脂、潮湿苔藓和远处田野刚翻过的新泥的味道，它毫不客气地灌满你的鼻腔，洗去了一路来的汽油味。这就是雷当日，卢森堡西部边境上一个几乎要被葱郁森林吞没的小镇。视线所及，没有高耸的塔楼，没有炫目的橱窗，只有一片依着缓坡错落铺开的蓝灰色屋顶。那些房子真有意思，墙壁是用大块粗粝的板岩垒起来的，颜色像是阴雨天的天空。屋顶的坡度陡得惊人，瓦片一直延伸到很低的位置，仿佛房子正谦卑地向大地躬身，好抵御阿登地区漫长冬季的风雪。时间在这里，是以炊烟和云影来计量的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你很快会发现，这里的“中心”不是一个广场，而是一种氛围。几条石板小路交汇处，有一座小小的、奶油色的新古典主义教堂，钟楼纤细。教堂前的长椅上，总有几位头发银白的老人安静地坐着，他们不说话，只是看着偶尔驶过的汽车，或者远处草地上吃草的马匹。咖啡馆只有一家，兼卖报纸和面包，木头门框被岁月磨得发亮。你推门进去，门铃“叮当”一响，里面聊天的声音会暂停一秒，所有人都友善地看向你——这个陌生的闯入者，然后又继续他们低沉的卢森堡语交谈。那种注视没有审视，只有一点淡淡的好奇，仿佛在说：“哦，来了个客人。”在这里，你不是游客，你是一个短暂的访客，被允许分享他们日复一日的、平静的日常。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而这片日常的基底，是无穷无尽的绿。小镇像是绿色海洋中的一座孤岛，四面八方都被连绵的森林紧紧拥抱。那些徒步小径的入口毫不起眼，可能就在某座石砌农舍的篱笆旁，一个简单的木桩路标指向密林深处。走进去，光线立刻暗下来，脚下是厚厚的、松软的腐殖土，踩上去悄无声息。高耸的山毛榉和橡树滤掉了大部分声响，只留下你自己的呼吸声、鸟鸣，以及不知何处溪流潺潺的隐约回响。你会突然明白，为什么从这里能走出雅克·桑特那样胸怀欧洲的人。唯有经历过这种极致的宁静与自足，才能真正懂得连接与共生的珍贵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动人心的，莫过于那种“恰如其分”的感觉。这里的一切都比例得当，人与自然、房屋与土地、历史与当下，达成了一种温柔的默契。没有为了吸引眼球而刻意营造的“古镇风情”，只有生活本身，在四季轮回中缓慢而坚定地流淌。它的魅力不是冲击性的，而是浸润性的。待上半天，你那颗被城市噪音磨出老茧的心，会像吸饱了水分的苔藓，慢慢舒展开来，恢复柔软。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`雷当日`} />
                <InfoRow label="英文名称" value={`Redange`} />
                <InfoRow label="正式名称" value={`Redange-sur-Attert`} />
                <InfoRow label="国家" value={`卢森堡`} />
                <InfoRow label="城市" value={`雷当日`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`欧盟奠基人之一雅克·桑特的出生地与精神原点，卢森堡西部阿登地区乡村生活的活态缩影。`} />
                <InfoRow label="建筑特色" value={`厚重古朴的蓝灰色板岩与砂岩砌成的传统农舍，倾斜的大屋顶几乎触及地面，与起伏的绿色山丘浑然一体。`} />
                <InfoRow label="建筑风格" value={`典型的莫泽尔-阿登地区乡土建筑风格，强调实用性与对恶劣气候的抵御，充满粗犷而温暖的田园诗意。`} />
                <InfoRow label="文化价值" value={`这里保存了卢森堡作为“欧洲乡村”最本真的一面，是理解现代欧洲一体化思想如何从宁静乡野中孕育而出的独特窗口。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`乡镇公共区域全天开放。雅克·桑特相关纪念馆、当地文化遗产中心等室内场所开放时间较为灵活，通常为周二至周六上午10点至下午5点，周日和周一闭馆。建议行前在卢森堡旅游官网查询最新信息。森林徒步小径永久开放。`} />
              <InfoRow label="门票价格" value={`进入乡镇及森林步道完全免费。小型地方博物馆或文化展览可能收取象征性费用约3-5欧元，学生及儿童半价。`} />
              <InfoRow label="地址" value={`Place de l‘Eglise, 8510 Redange-sur-Attert, Luxembourg`} />
              <InfoRow label="交通方式" value={`从卢森堡市出发最为便捷。在卢森堡中央火车站乘坐开往阿尔隆方向的列车，约30分钟即可抵达雷当日火车站。卢森堡全国公共交通免费，无需购票。列车班次频繁，平日约半小时一班，周末班次略减。火车站位于小镇边缘，步行10分钟即可进入镇中心。若自驾，从卢森堡市沿A6/E25公路向西北行驶约25公里即可到达，沿途阿登高地风光绝佳。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要讲雷当日的故事，得从它脚下这片土地讲起。阿登高地，这片横跨比、卢、法、德的茂密森林和丘陵，在欧洲历史上从来不是舞台中央。它更像一个巨大的绿色屏障，一个沉默的见证者。千百年来，这里的居民——主要是农民和伐木工——过着与世隔绝又自给自足的生活。他们用双手从山间开采出坚硬的蓝灰色板岩，一块一块垒成能够抵御严寒和潮湿的房舍。雷当日的雏形，就是这样一群散落在阿特尔特河支流旁的石头房子，它们的首要任务是生存，而不是美观。中世纪时，它属于卢森堡伯爵的领地，但远离贸易要道，也非兵家必争之地，因此幸运地躲过了许多战火的直接蹂躏，它的历史更像一部缓慢的、关于坚韧的年鉴。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的转折点，要来到19世纪末。随着卢森堡钢铁工业的兴起，这个内陆大公国与世界产生了更紧密的联系。但在偏远的西部，雷当日依然保持着它的田园节奏。也正是在这个时期，1887年，一个名叫雅克·桑特的男孩在这里出生了。你可以想象一下他童年的场景：在那些厚重的石墙内，壁炉的火光摇曳；窗外是望不到边的森林和无垠的星空。他所受的早期教育，是乡村神父教授的，充满了严谨的古典人文精神。这片土地赋予他的是根植于乡土的具体责任感，是对社区和邻里的直观理解，是一种近乎本能的、对和谐与稳定的追求。这些品质，后来都成为他政治理念的基石。他从这个宁静小镇出发，走向卢森堡市，走向巴黎，最终走向了欧洲战后重建的政治中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "二战期间，宁静的阿登高地变成了血腥的战场，巴斯托涅战役的硝烟离这里并不遥远。雷当日不可避免地经历了占领、匮乏和恐惧。许多年轻人被征召，森林里或许也曾有过抵抗运动的身影。这段创伤记忆，深深烙印在老一辈居民的心中，也使得战后对于和平与联合的渴望变得无比真切而强烈。当雅克·桑特作为卢森堡的首相和外长，积极投身于欧洲煤钢共同体、乃至欧洲经济共同体的创建时，他推动的不仅仅是一种经济和政治构想，更是源自他故乡、源自无数个像雷当日这样的欧洲乡镇对永久和平的深切期盼。他是在用整个欧洲的框架，来守护他童年那个免受战火侵扰的“石屋与森林的世界”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战后几十年，卢森堡经济飞速发展，成为人均GDP最高的国家之一。但雷当日却主动选择了一条不同的路。它没有大肆扩建，没有引进工业，甚至没有过度开发旅游业。小镇有意识地守护着自己的容颜和心跳。那些古老的石砌农舍得到了精心的维护和现代化的内部改造，但外观依然古朴。森林被划定为自然公园，徒步网络被完善，但商业气息极淡。它接纳变化（比如成为了一个重要的区域教育中心，建起了中学），但拒绝异化。今天的雷当日，更像一个平衡的奇迹：它既是雅克·桑特博物馆里那份泛黄的《罗马条约》签署文件所代表的宏大欧洲梦的起点，又是窗前盆栽天竺葵盛开、面包房飘出香气的具体人间。它的历史没有断层，从古老的石匠到欧盟的设计师，再到今天徒步路上迎面走来、微笑着对你说“Moien”（你好）的居民，这根温暖的线索从未断绝。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它或许永远不会出现在欧洲十日游的行程单上，但这正是它最珍贵之处。雷当日的历史不是被封存在玻璃柜里的，而是活着的，呼吸着的。它告诉你，欧洲的团结，并非诞生于布鲁塞尔光鲜的办公室，而是萌芽于千千万万个渴望安宁生活的、像这里一样的普通家园。这份从乡土中生发出的、对共同家园的守护愿力，才是欧洲一体化最深沉的驱动力。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天时间，从容感受雷当日从晨雾到夕阳的完整韵律。最好在上午9点左右抵达，这时小镇刚刚苏醒，光线清澈柔和。整体游览节奏宜慢不宜快，核心在于“漫步”与“沉浸”。上午聚焦人文历史脉络，在镇中心缓步探索，参观与雅克·桑特相关的场所，感受社区生活气息。午后则完全交给自然，选择一条中等长度的森林徒步路径，让自己被绿色包裹。傍晚回到镇上，享受一日将尽时的宁静。这样的安排既能理解此地的人文内核，又能体验其作为阿登森林门户的自然精髓，形成完美的精神闭环。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`镇上的博物馆或纪念馆开放时间非常灵活，甚至可能因管理员有事而临时关闭，心态放平和，小镇本身就是一个露天博物馆。进入森林前务必在信息中心或通过手机查看路线图，部分路径在雨后可能泥泞，建议穿着防滑耐脏的徒步鞋。尊重当地人的宁静，拍照时尽量避免将私人住宅内部或居民正面作为焦点。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先去往雅克·桑特出生地附近的纪念信息牌，在那栋朴素的石屋前静静站一会儿，想象一个宏大的欧洲理想如何从这扇窄门内萌芽。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着教堂旁的小径往下走，亲手触摸那些冰冷却富有质感的传统板岩墙壁，观察农舍大门上古老而精致的铁制门环。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要推开那家兼营咖啡馆的面包房门，点一杯卢森堡本地咖啡和一块“果酱蛋糕”，坐在靠窗的位置看小镇生活无声流淌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后从镇边任何一条有明显标志的森林小径入口进入，选择那条沿溪流而行的“桑特之路”，听水声与鸟鸣逐渐取代所有文明世界的杂音。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在森林深处的开阔地停下，找一块布满青苔的石头坐下，什么都不做，只是呼吸，感受时间尺度被树木重新定义的奇妙感觉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`徒步环线结束时，你会从另一个方向回到小镇边缘，这时夕阳可能正为那些蓝灰色屋顶镶上金边，去找一个稍高的坡地欣赏这幕每日上演的宁静光影剧。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果恰逢周末，晚餐不妨尝试镇上一家家庭餐馆，品尝用阿登森林食材制作的“Jud mat Gaardebounen”（烟熏猪颈肉配蚕豆）这道卢森堡国菜。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`从镇外东南侧的小山坡上回望`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前半小时，阳光斜射，能拍到蓝灰色石屋群错落镶嵌在绵延森林背景中的全景，炊烟与晨雾是绝佳的点缀。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`森林小径的光影走廊`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个阳光明媚的上午，走入一条两侧树木高大的笔直路径，当阳光穿透树冠形成一道道光柱时，低角度拍摄脚下铺满落叶的小路，营造深邃的秘境感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`阿登传统农舍的细节特写`}</h4>
                  <p className="text-sm text-gray-700">{`靠近那些最具特色的石屋，聚焦于被岁月打磨光滑的门槛石、色彩斑驳的木窗框、或是屋顶上厚厚的绿色苔藓，用特写讲述材质与时间的故事。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`小溪流上的老石桥`}</h4>
                  <p className="text-sm text-gray-700">{`在“桑特之路”徒步线上，找到那座跨越小溪的简易石板桥，蹲下身，以慢快门拍摄溪水流过石桥与周围蕨类植物的动态模糊，营造清幽氛围。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`教堂钟楼视角（如果开放）`}</h4>
                  <p className="text-sm text-gray-700">{`如果幸运地遇到教堂钟楼对外开放，登顶后可以拍摄小镇屋顶如波浪般向森林延伸的独特肌理，这是理解其空间布局的最佳视角。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`林间光线较暗，建议携带便携三脚架或利用稳定平台，尝试长曝光捕捉溪流动态。多云的天气反而是拍摄森林的绝佳时机，光线均匀柔和，能更好地展现绿色层次。切记，拍摄民居以尊重为前提，最好捕捉整体街景而非对准私人生活空间。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`森林边缘的温馨民宿`}</h4>
                  <p className="text-sm text-blue-800">{`由世代居住于此的家族经营，房子本身就是一座修复过的传统农舍，女主人会为你准备盛在陶罐里的 homemade 果酱和新鲜牛奶，夜晚能听见猫头鹰的叫声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`镇中心石屋改造的精品客栈`}</h4>
                  <p className="text-sm text-green-800">{`将历史厚重感与现代舒适完美结合，房间保留了原始的石墙和木梁，浴缸却正对着天窗，晚上可以一边泡澡一边数星星。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`附近葡萄园农庄住宿`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车约15分钟可到达摩泽尔河沿岸的葡萄酒村庄，入住家庭经营的葡萄园农庄，在露台上就能俯瞰葡萄藤梯田，并品尝庄主珍藏的雷司令。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`阿登森林自然露营小屋`}</h4>
                  <p className="text-sm text-purple-800">{`对于真正的自然爱好者，森林管理处在附近设有几个极其简朴但位置绝佳的木屋或露营点，需提前申请，体验真正的“与世隔绝”，清晨在鹿群经过的声音中醒来。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "雷当日本身的住宿选择非常有限且极具特色，强烈建议提前数月预订，尤其是在夏季徒步旺季和秋季赏景时节。小镇治安极好，但夜晚几乎没有任何商业活动，享受的就是这份静谧。如果选择周边村庄住宿，拥有一辆车会大大提升旅行自由度，也能更深入探索阿登地区的隐藏角落。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开雷当日的时候，我的背包里没有多一件纪念品，但心里却好像被塞进了一些沉甸甸的、温暖而坚实的东西。那不是兴奋，也不是震撼，而是一种很久违的“踏实感”。在这个一切都追求速成、放大、尖叫着吸引注意力的时代，雷当日像是一个温和而坚定的“反面”。它不证明什么，不炫耀什么，只是安然地存在着，保持着人类社群与自然环境之间那种古老而健康的比例。它让你相信，宁静不是贫乏，低调不是落后，守护传统也绝非拒绝未来。这是一种深植于土地的自信心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "为什么每一个热爱深度游的人，都该来这样地方看看？因为旅行不仅仅是为了收集地标，更是为了校准内心。雷当日就是一个完美的“校准器”。在这里，你会重新学会用鼻子去呼吸清冷的空气，用耳朵去分辨风声和溪流的合奏，用脚步去丈量一小片土地与森林的亲密关系。你会看到，欧洲的伟大构想，其最朴素的内核或许就藏在这石屋的壁炉火光里，藏在邻里清晨的一声问候里。它提醒我们，无论我们飞得多高、走得多远，那份对安宁家园的渴望，对绿意的亲近，对社区温度的依恋，始终是我们共同的情感根基。来雷当日，不是看一个景点，而是体验一种生活的“原本状态”，带走一份关于何为“美好生活”的、沉静的启示。这份启示，足以让任何一颗漂泊都市的心，找到片刻的靠岸。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/chateau-de-colpach" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科尔帕赫城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Colpach</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/diekirch-historic-town-brewing-culture" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迪基希</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Diekirch</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vianden-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    菲
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">菲安登城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vianden Castle</p>
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
