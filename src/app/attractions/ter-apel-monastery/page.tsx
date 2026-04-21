import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '泰尔阿佩尔修道院 Ter Apel Monastery｜荷兰保存最完好的中世纪森林隐修地 - 最佳欧洲景点',
  description: '车子驶离主干道，钻入一片仿佛没有尽头的茂密针叶林。空气骤然变得清冽，带着松针、潮湿苔藓和远处泥炭地的独特气味。阳光被高耸的树冠切割成碎片，在铺满棕色松针的小路上投下晃动的光斑。周遭安静得只剩下车轮碾过砂石路的沙沙声和自己的呼吸声。就在你开始怀疑导航是否出错时，森林豁然开朗，一片开阔的草地中央，一座由',
}

export default function TerApelMonasteryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '泰尔阿佩尔修道院', href: '/attractions/ter-apel-monastery' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`泰尔阿佩尔修道院・Ter Apel Monastery・荷兰・泰尔阿佩尔（格罗宁根省）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶离主干道，钻入一片仿佛没有尽头的茂密针叶林。空气骤然变得清冽，带着松针、潮湿苔藓和远处泥炭地的独特气味。阳光被高耸的树冠切割成碎片，在铺满棕色松针的小路上投下晃动的光斑。周遭安静得只剩下车轮碾过砂石路的沙沙声和自己的呼吸声。就在你开始怀疑导航是否出错时，森林豁然开朗，一片开阔的草地中央，一座由温暖红砖砌成的庞大建筑群，就这么沉静地、庄严地矗立在眼前——泰尔阿佩尔修道院。它没有那些大教堂刺破苍穹的尖塔，也没有宫殿金光闪闪的装饰，它的美是向内收束的，像一位习惯了沉思的隐士，低矮却宽阔的屋宇稳稳地扎根在大地上，红砖墙被数百年的风雨染成了深浅不一的赭石色和烟灰色。
走近了，你会听到的声音不再是城市的喧嚣，而是风穿过森林树梢的呜咽，是鸟儿在修道院屋顶的鸣叫，是庭院中那口古老水井偶尔发出的、木桶触碰井壁的闷响。推开那扇厚重的木门，一股混合了旧书、陈年木材和淡淡蜡油的气味扑面而来，瞬间将你包裹。时间在这里的流速明显不同。这里不是被玻璃罩起来的博物馆，而是一个依然“活着”的场所。你会看到本地老人静静地坐在回廊的长椅上阅读，母亲带着孩子辨认药草园里的植物，那种感觉，仿佛修道院的精神——宁静、内省、与自然共生——依然渗透在当地的日常血脉之中。
它最打动人心的，正是一种“幸存”的温柔。在宗教改革的风暴、战争的掠夺和时间的侵蚀之后，它没有变成一片仅供凭吊的废墟，也没有被过度修缮成崭新的“仿古”景点。它保持着一种恰到好处的“旧”，墙壁上有修补的痕迹，地砖被磨得光滑润泽，木梁上留着原始的斧凿印记。走在其中，你抚摸的每一块砖，都可能被15世纪的修士同样触摸过。这种跨越时空的物理连接，产生一种奇妙的安定感。它不是展示权力的纪念碑，而是一个关于简朴生活、辛勤劳作和精神追求的，触手可及的古老故事。在这里，你能真切地感受到，历史并非遥不可及，它就沉淀在砖缝里，弥漫在森林的空气中，等待着你放慢脚步，侧耳倾听。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子驶离主干道，钻入一片仿佛没有尽头的茂密针叶林。空气骤然变得清冽，带着松针、潮湿苔藓和远处泥炭地的独特气味。阳光被高耸的树冠切割成碎片，在铺满棕色松针的小路上投下晃动的光斑。周遭安静得只剩下车轮碾过砂石路的沙沙声和自己的呼吸声。就在你开始怀疑导航是否出错时，森林豁然开朗，一片开阔的草地中央，一座由温暖红砖砌成的庞大建筑群，就这么沉静地、庄严地矗立在眼前——泰尔阿佩尔修道院。它没有那些大教堂刺破苍穹的尖塔，也没有宫殿金光闪闪的装饰，它的美是向内收束的，像一位习惯了沉思的隐士，低矮却宽阔的屋宇稳稳地扎根在大地上，红砖墙被数百年的风雨染成了深浅不一的赭石色和烟灰色。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走近了，你会听到的声音不再是城市的喧嚣，而是风穿过森林树梢的呜咽，是鸟儿在修道院屋顶的鸣叫，是庭院中那口古老水井偶尔发出的、木桶触碰井壁的闷响。推开那扇厚重的木门，一股混合了旧书、陈年木材和淡淡蜡油的气味扑面而来，瞬间将你包裹。时间在这里的流速明显不同。这里不是被玻璃罩起来的博物馆，而是一个依然“活着”的场所。你会看到本地老人静静地坐在回廊的长椅上阅读，母亲带着孩子辨认药草园里的植物，那种感觉，仿佛修道院的精神——宁静、内省、与自然共生——依然渗透在当地的日常血脉之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它最打动人心的，正是一种“幸存”的温柔。在宗教改革的风暴、战争的掠夺和时间的侵蚀之后，它没有变成一片仅供凭吊的废墟，也没有被过度修缮成崭新的“仿古”景点。它保持着一种恰到好处的“旧”，墙壁上有修补的痕迹，地砖被磨得光滑润泽，木梁上留着原始的斧凿印记。走在其中，你抚摸的每一块砖，都可能被15世纪的修士同样触摸过。这种跨越时空的物理连接，产生一种奇妙的安定感。它不是展示权力的纪念碑，而是一个关于简朴生活、辛勤劳作和精神追求的，触手可及的古老故事。在这里，你能真切地感受到，历史并非遥不可及，它就沉淀在砖缝里，弥漫在森林的空气中，等待着你放慢脚步，侧耳倾听。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`泰尔阿佩尔修道院`} />
                <InfoRow label="英文名称" value={`Ter Apel Monastery`} />
                <InfoRow label="正式名称" value={`Ter Apel Klooster`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`泰尔阿佩尔（格罗宁根省）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是荷兰北部唯一一座保存完好的中世纪克鲁修会修道院，是低地国家宗教与乡村生活历史的活化石。`} />
                <InfoRow label="建筑特色" value={`一座由红砖砌成的庄严建筑群，完美融入周围的森林景观，以其简朴而坚固的晚期哥特式风格、巨大的谷仓和宁静的回廊著称。`} />
                <InfoRow label="建筑风格" value={`晚期哥特式砖砌建筑，带有显著的北荷兰地方特色，简朴而实用，体现了克鲁修会远离世俗、自给自足的精神。`} />
                <InfoRow label="文化价值" value={`它不仅是一座宗教建筑，更是一个完整的中世纪社区生活范本，展示了修道士在信仰、农业、医药和知识保存方面与自然共生的智慧。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`周二至周日：上午10点至下午5点；周一：下午1点至5点（冬季11月至次年2月，部分周一全天闭馆，行前务必官网确认）。每年12月25日、26日及1月1日闭馆。修道院花园和森林小径全天开放。`} />
              <InfoRow label="门票价格" value={`成人票：9.5欧元；65岁以上长者及持有效学生证者：7.5欧元；6至12岁儿童：4.5欧元；6岁以下免费。持博物馆卡（Museumkaart）免费。提供家庭套票及团体票优惠，具体请查询官网。`} />
              <InfoRow label="地址" value={`Boslaan 3-5, 9561 LH Ter Apel, Netherlands`} />
              <InfoRow label="交通方式" value={`从阿姆斯特丹史基浦机场出发，最便捷的方式是乘坐火车。先搭乘Intercity直达格罗宁根中央火车站（Groningen Centraal），车程约2小时15分钟，班次频繁（约每小时2班）。抵达格罗宁根后，在火车站外的巴士总站换乘300路或179路巴士前往泰尔阿佩尔（Ter Apel Busstation），车程约1小时，班次约半小时至一小时一班。下车后步行约10分钟即可抵达修道院，沿途有明显的棕色旅游指示牌。建议使用OV-chipkaart（荷兰公交卡）或在9292.nl App上规划实时行程。自驾的话，从格罗宁根沿A7公路东行，转入N366公路即可抵达，修道院入口处有免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事要从1465年讲起。那时，这片位于格罗宁根与德国边境、遍布泥炭沼泽和森林的土地，是名副其实的“天涯海角”。然而，正是这种偏远和宁静，吸引了一群特别的修道士——克鲁修会（Kruisheren）的成员。他们不像一些修道院那样追求富丽堂皇，而是崇尚简朴、冥想和体力劳动。传说，是当地一位名叫Wessel Gansfort的学者兼神学家，促成了修道院的建立。他深感此地需要一处精神与知识的灯塔，于是捐赠了土地。你可以想象，第一批修士们是如何乘着平底船，穿过蜿蜒的水道，抵达这片蛮荒之地的。他们面临的第一个挑战不是建造教堂，而是生存：排水、垦荒、在贫瘠的土地上开辟农田和菜园。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "修道院的建设持续了几十年，一砖一瓦都凝聚着修士们的汗水。他们烧制本地黏土做成红砖，砍伐森林的橡木做成房梁。这座建筑从一开始就不是为了炫耀，而是为了实用：巨大的教堂用于祈祷，坚固的宿舍用于休息，宽阔的谷仓用于储存粮食，还有专门的酿酒坊、烘焙房和医院。它很快成为了一个自给自足的微型社会，也是整个地区的经济、文化和医疗中心。附近的农民会来这里寻求帮助，旅行者可以在此借宿，修道士们则誊抄书籍，研究药草。在印刷术尚未普及的年代，这个森林中的院落，是保存和传播知识的珍贵火种。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，平静的隐修生活并未永远持续。16世纪的宗教改革风暴席卷了低地国家。1579年，随着格罗宁根省皈依新教（加尔文宗），天主教的修道院命运急转直下。泰尔阿佩尔修道院被没收，财产充公。幸运的是，它没有被彻底摧毁。或许是因为其坚固实用，它被改造为了法院和行政区划办公室。建筑的基本结构得以保存，但内部的宗教功能消失了，彩绘的壁画被石灰覆盖，圣坛被移走。此后的几个世纪，它扮演过多种角色：法庭、市政厅、甚至学校。每一次功能转换，都在它身上留下了新的“层理”，就像树木的年轮。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的转折点发生在20世纪。人们逐渐认识到其无可替代的历史价值。从1930年代开始，一场漫长而谨慎的修复工程启动了。修复者们没有试图将它恢复到一个想象中的“完美原初状态”，而是像考古学家一样，小心翼翼地剥开历史的涂层，让不同时代的痕迹共同讲述故事。他们发现了被掩盖的中世纪壁画碎片，加固了岌岌可危的屋顶，清理了被淤塞的沟渠。最重要的是，他们重新赋予了这座建筑“讲述”的能力——将它变为一座博物馆。今天，当你漫步其中，看到的不仅仅是中世纪修士的生活场景复原，也能从建筑细节中读到它作为法庭时期的历史。这种层叠的历史，正是它最迷人的地方。它不是一个凝固的标本，而是一本活着的历史书，每一页都清晰可辨。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在上午10点刚开门时抵达，这是一天中最宁静的时刻，阳光刚好斜射进回廊，光影效果绝佳。整个深度游览需要大约3到4小时，节奏宜舒缓，重在体验氛围而非赶路。顺序上，先外后内，先感受整体环境，再探究细节。从森林小径接近能建立最佳的第一印象，然后进入庭院，接着按照博物馆设计的参观流线系统性地游览教堂、回廊、生活区等室内部分，最后在花园和外围森林中漫步，消化所有的感受。这样的安排让你从自然的怀抱进入人类的精神殿堂，再回归自然，完成一次完美的沉浸循环。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`室内部分的地板多为古老石砖或木地板，穿着舒适防滑的鞋子非常重要。参观时请保持低声交谈，以尊重这份宁静的氛围和其他的访客。出发前查看官网，有时会有中世纪的音乐表演、手工艺市集或主题导览，能极大丰富体验。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从停车场旁那条被松针覆盖的森林小径开始你的朝圣，让脚步慢下来，呼吸林木的清香，远远地凝视红砖建筑群的轮廓。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开吱呀作响的厚重木门，首先踏入被四面建筑围合的静谧内庭，站在古老的石制水井边，感受阳光洒在背上的温暖和四下无人的宁静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入教堂主厅，不要立刻抬头看穹顶，而是先闭上眼睛几秒钟，聆听空间里那种深沉的、几乎可以触摸到的寂静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着带有精美肋拱顶的回廊缓缓行走，用指尖轻轻划过冰凉而光滑的红砖柱，想象数百年来修士们在此默想巡游的脚步。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探访曾经的修士宿舍，现在陈列着当时的生活物品，注意看那些简陋的床铺、书写工具和取暖的火盆，体会简朴生活中的精神富足。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要走进那个不可思议的巨型中世纪谷仓，站在堆积如山的仿制草料下，仰望由巨大橡木梁撑起的广阔空间，感受农业时代的宏伟尺度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在修道院药草园里停下，俯身辨认迷迭香、鼠尾草、薄荷等植物，它们不仅是香料，更是中世纪修道院医院的医药宝库。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`游览结束时，不要直接从正门离开，绕到建筑群的东侧，那里有一条小溪和更多的林间小道，是回味和发呆的完美角落。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`森林入口框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在森林小径入口，用两侧笔直的松树作为天然画框，将远处的修道院建筑群置于中央，此时光线柔和，能拍出富有纵深感和大自然怀抱感的照片。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`内庭水井与倒影`}</h4>
                  <p className="text-sm text-gray-700">{`晴天的上午十点至中午，内庭地面湿润时，蹲低身子，以石制水井为主体，捕捉建筑在浅水洼中的完美倒影，构图简洁而富有禅意。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`回廊拱门的光影长廊`}</h4>
                  <p className="text-sm text-gray-700">{`下午两三点后，阳光斜射入回廊时，选择一个拱门作为前景，拍摄阳光将连续的拱廊投影在地面上的强烈几何光影，人物可以作为一个沉默的剪影点缀其中。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`巨型谷仓的仰视视角`}</h4>
                  <p className="text-sm text-gray-700">{`进入谷仓后，将相机贴近地面向上仰拍，囊括那些如同巨人肋骨般的巨大木制屋架，广角镜头能展现其令人震撼的规模和结构美感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`药草园特写与建筑背景`}</h4>
                  <p className="text-sm text-gray-700">{`在药草园中，选取一丛茂盛的香草作为前景并虚化，将修道院朴实的红砖墙作为背景，形成生机与古朴、柔软与坚硬的对比。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内光线较暗，建议使用大光圈镜头或提高ISO，但尽量避免使用闪光灯，以保护古老的壁画和织物。拍摄庭院和建筑外观时，偏振镜可以有效减少红砖表面的反光，让色彩更加饱和厚重。请注意，博物馆内部某些特定区域（如珍贵手稿展示区）可能禁止拍照，现场会有明确标识。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`森林边缘的温馨B&B`}</h4>
                  <p className="text-sm text-blue-800">{`距离修道院步行仅15分钟，由一对热情夫妇经营的百年农舍改造，房间充满手工织物和古董家具，早餐有自家产的鸡蛋和蜂蜜，晚上可以听到猫头鹰的叫声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`修道院旁的特色设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`由修道院附属建筑现代化改造而成，完美融合了裸露的原始砖墙、木梁与现代北欧设计家具，部分房间拥有面向森林的私人露台，体验新旧时空的交织。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`泰尔阿佩尔镇中心的历史酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落于镇上宁静的运河边，建筑本身就有故事，提供舒适的现代化房间和丰盛的本地早餐，方便体验小镇生活，去超市和餐馆都很便利。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`格罗宁根市区的时尚公寓`}</h4>
                  <p className="text-sm text-purple-800">{`如果不想住在乡下，可以驱车一小时返回充满活力的大学城格罗宁根，选择运河边的精品公寓，白天享受乡村隐修，晚上感受城市的咖啡馆与夜生活。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "泰尔阿佩尔本身是非常宁静安全的小镇，但夜间娱乐选择极少，适合追求清净的旅人。如果选择住在这里，请务必提前预订，特别是夏季和周末，当地舒适的住宿数量有限。格罗宁根作为省会城市，选择更多，但往返修道院需要预留交通时间。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开泰尔阿佩尔许久，那种由内而外的宁静感依然包裹着我。它不像一些举世闻名的景点那样，用巨大的视觉冲击力瞬间俘获你，然后可能很快褪色。它的力量是渗透式的，是细水长流的。当你在这座红砖修道院和它无言的森林里度过半天后，你会发现自己讲话的语速变慢了，看东西的眼神更专注了，甚至会不自觉地深呼吸——仿佛把那份清澈的空气也储存在了身体里。在这个效率至上、信息爆炸的时代，这种能让时间“变厚”、让心灵“变静”的场所，显得尤为珍贵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它之所以应该被列入深度旅行的清单，正是因为它提供了一种截然不同的旅行维度。来这里，你不是为了收集一张打卡照片，不是为了购买纪念品，甚至不主要是为了学习历史知识。你来，是为了体验一种“存在”的状态，一种与土地、与历史、与简单生活本质重新连接的可能。它默默告诉你，辉煌有多种形式，有一种辉煌就藏在红砖的质朴、森林的幽深和日常劳作的尊严之中。每一位在尘世中奔波、感到倦怠的现代灵魂，或许都能在这里，找到片刻的栖息与深深的共鸣。这不仅仅是一次观光，更像是一次心灵的归隐与充电。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/muiderslot-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅登城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Muiderslot</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cruquius-museum-haarlem" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克吕尼乌斯博物馆</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cruquius Museum</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/brielle-star-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布里勒</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Brielle</p>
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
