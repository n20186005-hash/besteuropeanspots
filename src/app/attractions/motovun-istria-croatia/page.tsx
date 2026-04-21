import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '莫托文 Motovun｜钻进克罗地亚的松露山城，做一场中世纪旧梦 - 最佳欧洲景点',
  description: '第一次看到莫托文，你会以为自己不小心闯进了一本立体童话书的封面。车子在伊斯特拉翠绿起伏的丘陵间拐了个弯，它就在那儿——一座从平地上陡然拔起的、郁郁葱葱的锥形山丘，而一圈蜜糖色的石头城墙像皇冠一样紧紧箍在山顶，城墙内是密密挤挤、红瓦如鳞的屋顶，最高处矗立着一座挺拔的钟楼。那种感觉，不是“看到”一个景点...',
}

export default function MotovunIstriaCroatiaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '克罗地亚', href: '/destinations/croatia' },
            { label: '莫托文', href: '/destinations/croatia' },
            { label: '莫托文', href: '/attractions/motovun-istria-croatia' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`莫托文・Motovun・克罗地亚・莫托文`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一次看到莫托文，你会以为自己不小心闯进了一本立体童话书的封面。车子在伊斯特拉翠绿起伏的丘陵间拐了个弯，它就在那儿——一座从平地上陡然拔起的、郁郁葱葱的锥形山丘，而一圈蜜糖色的石头城墙像皇冠一样紧紧箍在山顶，城墙内是密密挤挤、红瓦如鳞的屋顶，最高处矗立着一座挺拔的钟楼。那种感觉，不是“看到”一个景点，而是“发现”了一个秘密。随着盘山公路接近，空气的味道开始变化，松林与野草的清新中，隐隐混入了一丝古老石头被阳光烘焙后的干燥气息，还有从厨房飘出的、勾人魂魄的橄榄油和大蒜香味，那是松露盛宴的前奏。
把车停在山脚下的停车场，推开那扇厚重的、叫做“弗拉特纳门”的主城门，你就正式踏入了时间的胶囊。脚下是已经被无数个世纪的行人磨得温润发亮的鹅卵石路，它毫不客气地向上陡峭攀升。你的脚步声、呼吸声在两侧高耸石壁间回荡，偶尔有居民推开一扇吱呀作响的木门，抱着一篮子新鲜无花果走出来，朝你点点头。猫在窗台上打盹，藤蔓从墙头垂下。这里的一切都慢得理所当然。爬得气喘吁吁时，一个转角，视野豁然开朗，你就来到了小镇的心脏——圣斯蒂芬教堂前的小广场。在这里，喝杯咖啡不再是消费，而是一种仪式。坐在广场边的露天座椅上，看着本地老头们聚在一起下棋、闲聊，浓烈的意式咖啡香包裹着你，而你的目光早已越过广场边的矮墙，飞向了无垠的远方：整个伊斯特拉半岛的画卷在脚下铺开，墨绿的森林、金黄的田野、红色的土地，像一块巨大的、柔软的天鹅绒。
而莫托文的灵魂，除了石头，还深深埋在它脚下的泥土里。每年秋天，当山间弥漫起潮湿的雾气，一种狂热的寻宝活动就在这里上演。带着 specially trained 的猎狗，松露猎人们走入密林，寻找被称为“地下钻石”的伊斯特拉白松露。这种极致奢华的真菌香气，定义了整个地区的味觉信仰。在镇上任何一家餐厅，你都无法逃脱它的诱惑：松露意面、松露鸡蛋、甚至松露冰淇淋…那种浓郁、独特、带着大地气息的香气，会瞬间打通你的所有感官，让你明白，这座山城守护的，不仅是一段历史，更是一片土地的恩赐。这就是莫托文最打动人心的魅力——它是一座可以攀登、可以触摸、可以品味的历史，它高高在上，却又如此丰饶温暖。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一次看到莫托文，你会以为自己不小心闯进了一本立体童话书的封面。车子在伊斯特拉翠绿起伏的丘陵间拐了个弯，它就在那儿——一座从平地上陡然拔起的、郁郁葱葱的锥形山丘，而一圈蜜糖色的石头城墙像皇冠一样紧紧箍在山顶，城墙内是密密挤挤、红瓦如鳞的屋顶，最高处矗立着一座挺拔的钟楼。那种感觉，不是“看到”一个景点，而是“发现”了一个秘密。随着盘山公路接近，空气的味道开始变化，松林与野草的清新中，隐隐混入了一丝古老石头被阳光烘焙后的干燥气息，还有从厨房飘出的、勾人魂魄的橄榄油和大蒜香味，那是松露盛宴的前奏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`把车停在山脚下的停车场，推开那扇厚重的、叫做“弗拉特纳门”的主城门，你就正式踏入了时间的胶囊。脚下是已经被无数个世纪的行人磨得温润发亮的鹅卵石路，它毫不客气地向上陡峭攀升。你的脚步声、呼吸声在两侧高耸石壁间回荡，偶尔有居民推开一扇吱呀作响的木门，抱着一篮子新鲜无花果走出来，朝你点点头。猫在窗台上打盹，藤蔓从墙头垂下。这里的一切都慢得理所当然。爬得气喘吁吁时，一个转角，视野豁然开朗，你就来到了小镇的心脏——圣斯蒂芬教堂前的小广场。在这里，喝杯咖啡不再是消费，而是一种仪式。坐在广场边的露天座椅上，看着本地老头们聚在一起下棋、闲聊，浓烈的意式咖啡香包裹着你，而你的目光早已越过广场边的矮墙，飞向了无垠的远方：整个伊斯特拉半岛的画卷在脚下铺开，墨绿的森林、金黄的田野、红色的土地，像一块巨大的、柔软的天鹅绒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而莫托文的灵魂，除了石头，还深深埋在它脚下的泥土里。每年秋天，当山间弥漫起潮湿的雾气，一种狂热的寻宝活动就在这里上演。带着 specially trained 的猎狗，松露猎人们走入密林，寻找被称为“地下钻石”的伊斯特拉白松露。这种极致奢华的真菌香气，定义了整个地区的味觉信仰。在镇上任何一家餐厅，你都无法逃脱它的诱惑：松露意面、松露鸡蛋、甚至松露冰淇淋…那种浓郁、独特、带着大地气息的香气，会瞬间打通你的所有感官，让你明白，这座山城守护的，不仅是一段历史，更是一片土地的恩赐。这就是莫托文最打动人心的魅力——它是一座可以攀登、可以触摸、可以品味的历史，它高高在上，却又如此丰饶温暖。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`莫托文`} />
                <InfoRow label="英文名称" value={`Motovun`} />
                <InfoRow label="正式名称" value={`Motovun`} />
                <InfoRow label="国家" value={`克罗地亚`} />
                <InfoRow label="城市" value={`莫托文`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`伊斯特拉半岛内陆地区保存最完好的中世纪防御山城之一，见证了威尼斯共和国在亚得里亚海腹地的统治兴衰。`} />
                <InfoRow label="建筑特色" value={`完美呈现了依山而建的防御型城镇格局，卵石街道如迷宫般盘旋上升，最终汇聚于山顶的广场与教堂。`} />
                <InfoRow label="建筑风格" value={`典型的威尼斯哥特式与本地粗犷石砌建筑风格的融合，厚重的城墙与精致的窗棂形成有趣对比。`} />
                <InfoRow label="文化价值" value={`不仅是建筑化石，更是活着的“松露文化中心”，守护着从中世纪延续至今的市集传统与山野美食智慧。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇本身全天开放，自由出入。主要景点如城墙、钟楼和部分博物馆的开放时间通常为夏季（4月至10月）上午9点至晚上7点；冬季（11月至3月）开放时间缩短，约为上午10点至下午4点，且周一可能关闭。具体信息行前务必在镇口的信息牌或官网确认。`} />
              <InfoRow label="门票价格" value={`进入古镇免费。攀登城墙或钟楼可能需要支付小额费用，约20-30克罗地亚库纳（约3-4欧元）。部分私人博物馆或艺廊票价另计。学生、儿童及团队通常有优惠。`} />
              <InfoRow label="地址" value={`Motovun, 52424, Motovun, Croatia`} />
              <InfoRow label="交通方式" value={`最近的主要机场是普拉机场（PUY），距离约45公里。从普拉机场出发，最方便的方式是租车自驾，沿E751公路向北，转入地方道路，车程约50分钟。若乘坐公共交通，可从普拉中央巴士站乘坐前往布雷佐维察或巴雷涅的巴士，在莫托文山下的路口下车，然后需要步行或搭便车上山（约2公里陡坡），班次不密集，最好提前查询时刻表。从首都萨格勒布出发，自驾经A9高速公路，全程约2.5小时。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲莫托文的故事，我们得把手深深插进伊斯特拉这片土地的红色土壤里。早在罗马人到来之前，伊利里亚部落就看中了这座陡峭的山丘，把它当作天然的瞭望台和堡垒。罗马人来了，这里成了一个不起眼的定居点。但真正让莫托文穿上那身我们今日所见的石头盔甲的，是中世纪的风云变幻。大约在10到11世纪，随着神圣罗马帝国与拜占庭帝国在此角力，斯拉夫人和拉丁裔居民混居，一座更具防御性的城堡开始在山顶成型。它就像一个沉默的巨人，凝视着米恩河谷，控制着通往内陆的贸易路线。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`命运的转折点发生在13世纪。亚得里亚海的霸主——威尼斯共和国，将其敏锐的目光投向了富饶的伊斯特拉半岛。1278年，威尼斯人正式成为了莫托文的主人。接下来的近五个世纪，是莫托文的“威尼斯时代”，也是它城市风貌定型的黄金期。威尼斯人可不是来欣赏风景的，他们是精明的商人和强悍的战士。他们大手笔地加固了城墙，修筑了我们今天看到的巨大城门和棱堡。他们按照威尼斯的管理模式统治这里，带来了法律、行政体系，也带来了亚平宁半岛的建筑审美。你会发现，那些狭窄街道边房屋的窗户，带着优雅的哥特式尖拱，这是威尼斯留下的精致签名。小镇的布局，围绕着山顶的广场和教堂层层展开，高效而紧凑，完全是功能至上的防御工事思维。钟楼敲响的钟声，既召唤着信徒，也警示着可能的威胁。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在威尼斯的羽翼下，莫托文过着相对繁荣但也紧绷的生活。城墙内外是两个世界。墙内是井然有序的社区生活，有教堂、市政厅、水井和市集。墙外则是连绵的森林和农田，以及潜在的敌人——无论是隔壁的领主，还是来自奥斯曼帝国的幽灵般的威胁。居民们白天可能下山耕作或经营，日落时分则必须回到城墙的庇护之内。这种持续了数百年的“战时状态”，塑造了莫托文人坚韧、内向而又紧密团结的性格。他们靠山吃山，森林提供了木材和猎物，肥沃的山谷出产橄榄、葡萄和小麦。但当时，他们还不知道，脚下最珍贵的宝藏尚未被完全发掘。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`威尼斯共和国的落日余晖在18世纪末消散，莫托文先后经历了哈布斯堡王朝、拿破仑帝国、再到奥匈帝国的统治。城墙失去了军事意义，但小镇的生活节奏并未被迅速打破。真正的变革在二战后慢慢发生。人们开始更系统地探索周围密林的物产，伊斯特拉白松露的传奇，从当地猎人和农夫的口耳相传，逐渐登上了世界顶级美食的殿堂。莫托文，这个曾经为了防御而高高筑起的堡垒，意外地因为大地深处的馈赠，获得了新的生命。它从一座军事要塞，优雅地转身，成为美食家和文化旅人向往的圣地。每年的松露节，山城内外人声鼎沸，古老的市集传统以最美味的方式复活。石头依旧沉默，但空气中充满了欢庆的活力，历史就这样被香气重新书写。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`理想中探索莫托文，应该预留整整一天，做一个“从清晨到日暮”的沉浸式梦游。建议早上9点前抵达，这时旅游大巴还未涌入，山城沐浴在柔和的晨光中，属于本地人的生活刚刚苏醒，你能捕捉到最宁静的样貌。整体节奏宜慢不宜快，因为这里的美在于细节和氛围，而非打卡点数。上午专注攀登和探索小镇内部的结构与建筑细节，中午在广场或找家悬崖餐厅享用漫长的松露午餐，下午可以逛逛画廊、小店，或者干脆在城墙边找个长椅发呆，看光影在山谷中移动。傍晚时分，等待日落将整片伊斯特拉大地染成金红，是绝不能错过的仪式。这样的安排，让你既能领略其建筑与历史的骨架，也能品尝到它生活的血肉与呼吸。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对舒适、防滑的鞋子，这里的每一步都是真正的“爬”山，鹅卵石路在雨天会很滑。
夏季中午阳光暴晒，广场上遮阴处少，做好防晒并及时补水；冬季山风凛冽，城墙漫步时需穿戴防风衣物。
如果自驾前来，山脚下的主停车场在旺季很快会满，尽量早到，或考虑停在稍远一点的备用停车场。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清早从主城门“弗拉特纳门”进入，让眼睛适应门洞内外的明暗变化，触摸那冰凉厚重的石壁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着陡峭的、被磨得发亮的主街“伊斯特拉纳街”向上，留意两侧房门上各不相同的门环和窗台上的陶罐花饰。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在圣斯蒂芬教堂前的小广场停下，先在咖啡馆外坐下，点一杯“玛莉亚·特蕾西亚”白葡萄酒，像当地人一样用晨酒唤醒感官。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进简洁的教堂内部，让眼睛在昏暗光线中聚焦，寻找那些保存下来的哥特式壁画痕迹和古老的圣器。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花点时间沿着保存完好的北段城墙漫步，从垛口望出去，每个方向都是一幅截然不同的、铺展到天边的田园画卷。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着小巷摸索到小镇东侧的观景平台，那里有一把孤零零的长椅，是面对广阔山谷静思的完美角落。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山时绕到主街侧面的一条静谧小巷，寻找那家家族经营的松露商店，听店主用浓重口音的英语讲述他带着狗狩猎的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`将晚餐留给一家拥有悬崖露台的餐厅，在烛光中看着夜幕如天鹅绒般盖住山谷，盘中的松露香气成为这一天最华丽的句点。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`山下公路仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`最佳时间是日出后一小时或日落前一小时，将车停在通往小镇公路的某个宽阔弯道，用长焦镜头压缩空间，拍下被晨雾或夕阳金光笼罩的、金字塔形的山城轮廓。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城墙西北角垛口框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`下午时段，阳光从侧面照亮山谷，站在城墙西北角的垛口，将相机贴近石孔，以厚重的石头为前景框架，拍摄远处连绵的丘陵、森林和散落的红色农舍。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣斯蒂芬教堂广场侧拍钟楼`}</h4>
                  <p className="text-sm text-gray-700">{`清晨游客稀少时，站在广场靠近矮墙的一侧，利用广场地面的石板线条作为引导线，将古老的钟楼与一部分红瓦屋顶纳入画面，捕捉小镇苏醒的静谧感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`悬崖餐厅露台日落人像剪影`}</h4>
                  <p className="text-sm text-gray-700">{`预订黄昏时分的露台座位，在太阳即将沉入地平线、天空呈现粉紫色时，以广阔的河谷夕阳为背景，拍摄人物品酒或远眺的剪影，氛围感十足。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`小巷光影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光垂直射入狭窄小巷时，寻找那些有藤蔓或晾衣绳的小巷，拍摄光影在古老石墙和鹅卵石地面上形成的强烈明暗对比与几何图案。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`无人机飞行在克罗地亚受到严格管制，在历史古迹和人口密集区飞行通常需要提前申请许可，请务必遵守当地法规。`}</li>
                <li>• {`拍摄当地居民，尤其是老人或工作中的松露猎人时，请先微笑示意并征得同意，尊重他们的隐私和生活。`}</li>
                <li>• {`山城光线对比强烈，建议使用RAW格式拍摄，以便后期更好地恢复高光和阴影部分的细节。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`山城内的石头小屋民宿`}</h4>
                  <p className="text-sm text-blue-800">{`直接住在城墙内由古老石屋改造的公寓里，木梁低垂，壁炉温暖，夜晚当一日游的游客散尽，你能独享整个山城的星空与寂静。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`山下葡萄园中的设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`位于莫托文山脚环绕的葡萄园中，现代设计与田园风光结合，拥有无边泳池，直面山城全景，适合追求舒适与景观的旅人。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`家庭经营的农庄客栈`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车十分钟可达的乡间，由家族经营的农庄提供宽敞房间和地道家宴，早晨在鸡鸣狗吠中醒来，体验真正的伊斯特拉乡村生活。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`精品松露主题酒店`}</h4>
                  <p className="text-sm text-purple-800">{`小镇入口处一家以松露为核心元素的小型精品酒店，从装饰、沐浴产品到早餐，处处弥漫着松露的奢华香气，是美食爱好者的不二之选。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（7-8月）和秋季松露节期间住宿非常紧张，价格也最高，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`住在山城内虽然体验绝佳，但需注意车辆通常无法开入，需要自己提着行李走一段陡峭的石阶，对行李多者是个考验。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`选择山下住宿通常性价比更高且停车方便，但意味着你无法体验山城夜晚与清晨那种与世隔绝的独特氛围，需根据旅行重点权衡。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开莫托文好些天了，但我总觉得手指上还沾着那些古老石墙的粗粝触感，鼻腔里还回荡着松露、橄榄油和雨后泥土混合的复杂香气。这座山城教会我的，远不止于一段中世纪的历史或一种顶级食材的知识。它更像一个关于“尺度”与“时间”的寓言。在这个我们习惯于仰望摩天大楼、追求无限拓展的时代，莫托文反其道而行之，它向上生长，却向内凝聚。它的伟大不在于征服了多少土地，而在于数百年如一日地，坚守着一座山丘，并将生活在这有限空间里的每一寸，都经营得丰富、深厚、充满人情味。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位热爱深度游的旅人，都该来莫托文住一住。不仅仅是为了那张明信片般的全景照片，也不仅仅是为了那顿令人难忘的松露大餐。而是为了体验一种不同的生命节奏，一种被石墙守护的安宁，一种与土地紧密相连的踏实感。在这里，你会明白，真正的奢侈不是拥有多少，而是能多么专注地感受当下——感受一杯咖啡的温度，一片夕阳的颜色，一阵掠过山谷的风的方向。莫托文就像一颗被时光打磨得温润的石头，沉默地坐在山巅，提醒着我们：或许，我们不需要走得那么快、那么远；或许，心灵的富足，就在于深深地扎根于一处，然后细细品味，与之相关的一切故事与滋味。这是一堂无声却深刻的课，值得你千里迢迢，前来聆听。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/sibenik-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    希
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">希贝尼克老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Šibenik Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rovinj-coastal-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    罗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">罗维尼海滨古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rovinj</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/pula-arena" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普拉竞技场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pula Arena</p>
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
