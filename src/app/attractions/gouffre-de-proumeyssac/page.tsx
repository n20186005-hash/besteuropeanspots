import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '普鲁梅萨克水晶深渊 Gouffre de Proumeyssac｜探秘“水晶大教堂”，沉浸在地心亿万年的闪烁梦境 - 最佳欧洲景点',
  description: '朋友，想象一下，当你穿过法国多尔多涅宁静的乡间，顺着一条不起眼的小路走到尽头，眼前出现一个毫不起眼、像是大地微微张开的小口。你可能会怀疑，这就是那个传说中的地方？然后，你顺着现代修建的螺旋步道缓缓下降，或者选择坐在一个悬吊的篮子里被缓缓放入地心——温度开始下降，空气变得湿润，带着一股干净的、混合着泥',
}

export default function GouffreDeProumeyssacPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '普鲁梅萨克水晶深渊', href: '/attractions/gouffre-de-proumeyssac' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`普鲁梅萨克水晶深渊・Gouffre de Proumeyssac・法国・多尔多涅省（阿基坦大区）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，当你穿过法国多尔多涅宁静的乡间，顺着一条不起眼的小路走到尽头，眼前出现一个毫不起眼、像是大地微微张开的小口。你可能会怀疑，这就是那个传说中的地方？然后，你顺着现代修建的螺旋步道缓缓下降，或者选择坐在一个悬吊的篮子里被缓缓放入地心——温度开始下降，空气变得湿润，带着一股干净的、混合着泥土和矿物质的气息。头顶的光线渐渐消失，取而代之的是一种被大地包裹的幽静。接着，就在一个转角之后，所有的灯光恰到好处地亮起。
那一刻，你仿佛不是进入了山洞，而是闯入了一个被时间遗忘的宝库，一个沉睡的巨人之梦。眼前豁然开朗，一个高达45米的巨大穹顶笼罩着你，而它的四壁、穹顶、地面，每一个角落，都被无以计数的晶体所覆盖。它们不是冰冷的石头，而是在精心设计的灯光下，闪烁着奶油色、琥珀色、象牙白和浅金色光泽的“生命体”。有的像凝固的瀑布，从穹顶倾泻而下；有的像巨大的管风琴，沉默地奏着地心的乐章；有的像精致的蕾丝窗帘，轻薄得仿佛一碰就会发出清脆的响声。滴水的声音从各处传来，清脆、缓慢，像极了这座“水晶大教堂”永恒的心跳。
在当地人心中，这里曾经是带着神秘和恐惧色彩的“魔鬼之洞”或“龙穴”，是民间传说里怪兽的巢穴。直到一个多世纪前，人们才鼓足勇气真正探索它的全貌。如今，它成了连接这片土地古老脉搏与现代人好奇心的桥梁。孩子们在这里第一次懂得了地质时间的漫长，艺术家在这里找到了超现实的灵感，而每一个普通游客，都在走出地面时，眼神里多了一丝对脚下世界的敬畏。
最打动我的，是那种极致的静谧与璀璨的对比。这里没有喧嚣，只有滴水声和自己的呼吸声。你被亿万年的时光结晶所包围，它们沉默不语，却用最华丽的姿态，讲述着水滴如何以无比的耐心，用数十万年的时间雕刻出一根石笋，又用数十万年的时间，让钟乳石与它相遇。在这里，“永恒”不是一个抽象的词，它凝结在每一颗闪烁的方解石晶体里，触手可及。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "朋友，想象一下，当你穿过法国多尔多涅宁静的乡间，顺着一条不起眼的小路走到尽头，眼前出现一个毫不起眼、像是大地微微张开的小口。你可能会怀疑，这就是那个传说中的地方？然后，你顺着现代修建的螺旋步道缓缓下降，或者选择坐在一个悬吊的篮子里被缓缓放入地心——温度开始下降，空气变得湿润，带着一股干净的、混合着泥土和矿物质的气息。头顶的光线渐渐消失，取而代之的是一种被大地包裹的幽静。接着，就在一个转角之后，所有的灯光恰到好处地亮起。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那一刻，你仿佛不是进入了山洞，而是闯入了一个被时间遗忘的宝库，一个沉睡的巨人之梦。眼前豁然开朗，一个高达45米的巨大穹顶笼罩着你，而它的四壁、穹顶、地面，每一个角落，都被无以计数的晶体所覆盖。它们不是冰冷的石头，而是在精心设计的灯光下，闪烁着奶油色、琥珀色、象牙白和浅金色光泽的“生命体”。有的像凝固的瀑布，从穹顶倾泻而下；有的像巨大的管风琴，沉默地奏着地心的乐章；有的像精致的蕾丝窗帘，轻薄得仿佛一碰就会发出清脆的响声。滴水的声音从各处传来，清脆、缓慢，像极了这座“水晶大教堂”永恒的心跳。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当地人心中，这里曾经是带着神秘和恐惧色彩的“魔鬼之洞”或“龙穴”，是民间传说里怪兽的巢穴。直到一个多世纪前，人们才鼓足勇气真正探索它的全貌。如今，它成了连接这片土地古老脉搏与现代人好奇心的桥梁。孩子们在这里第一次懂得了地质时间的漫长，艺术家在这里找到了超现实的灵感，而每一个普通游客，都在走出地面时，眼神里多了一丝对脚下世界的敬畏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动我的，是那种极致的静谧与璀璨的对比。这里没有喧嚣，只有滴水声和自己的呼吸声。你被亿万年的时光结晶所包围，它们沉默不语，却用最华丽的姿态，讲述着水滴如何以无比的耐心，用数十万年的时间雕刻出一根石笋，又用数十万年的时间，让钟乳石与它相遇。在这里，“永恒”不是一个抽象的词，它凝结在每一颗闪烁的方解石晶体里，触手可及。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`普鲁梅萨克水晶深渊`} />
                <InfoRow label="英文名称" value={`Gouffre de Proumeyssac`} />
                <InfoRow label="正式名称" value={`Gouffre de Proumeyssac`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`多尔多涅省（阿基坦大区）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座被称为“多尔多涅的凡尔赛宫”的巨大溶洞，是法国西南部最壮观、装饰最丰富的公开溶洞之一，揭示了该地区深厚的地质历史。`} />
                <InfoRow label="建筑特色" value={`一个巨大的穹窿状地下洞穴，内部几乎每一寸表面都覆盖着密集的钟乳石、石笋和罕见的晶体构造，尤以巨大的“帷幔”和“瀑布”状钙华沉积闻名。`} />
                <InfoRow label="建筑风格" value={`自然形成的喀斯特地貌，历经数百万年滴水穿石的沉积与结晶，堪称大自然的巴洛克风格杰作。`} />
                <InfoRow label="文化价值" value={`它不仅是地质学的活教材，也承载着从史前人类可能的庇护所到现代探险与旅游发展的历史，代表了人类对地下世界永恒的好奇与敬畏。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年开放，但开放时间随季节变化。旺季（4月至9月）通常为上午9:30至下午6:30，最后入场时间在关门前一小时。淡季（10月至3月）开放时间缩短，通常为上午10点至下午5点，且可能在某些工作日关闭或仅在下午开放。强烈建议出行前在其官方网站核对最新的确切时间表，并注意1月1日和12月25日闭馆。参观受导览团限制，最好提前在线预订以确保名额。`} />
              <InfoRow label="门票价格" value={`成人票价格约为15欧元。儿童（5-12岁）票价约为10欧元，5岁以下幼儿通常免费。另有家庭套票和青少年票优惠。门票价格已包含强制性导览游费用。线上预订有时可享受小幅折扣。持有地区旅游通行证的游客可能享受优惠。`} />
              <InfoRow label="地址" value={`Gouffre de Proumeyssac, 24260 Le Bugue, France`} />
              <InfoRow label="交通方式" value={`最近的国际机场是波尔多-梅里尼亚克机场（BOD）或贝尔热拉克机场（EGC）。从波尔多出发，最便捷的方式是租车自驾，沿A89高速公路向利摩日方向行驶，在Thenon出口下，再沿D704和D706公路前往Le Bugue镇，全程约2小时。若乘坐公共交通，可从波尔多圣让火车站乘区域火车（TER）前往贝尔热拉克，再换乘前往Le Bugue镇的巴士（班次非常有限，需仔细规划）。抵达Le Bugue镇后，溶洞位于镇外约2公里处，有清晰的路标指引，可步行（约25分钟）、乘坐当地出租车或驾车前往。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个故事的开头，带着点神秘和恐惧的色彩。在很长很长的岁月里，普鲁梅萨克的这个深坑，对于勒比格地区的居民来说，只是一个冒着寒气、深不见底的可怕地穴。关于它的传说层出不穷，有人说里面住着喷火的巨龙，有人说这是通向地狱的入口，还有人说夜晚能听到里面传来诡异的哀嚎。这种恐惧是如此真实，以至于在十八世纪的一份教区记录里，神父们还会为这个“吞噬灵魂的深渊”举行驱魔仪式。附近的农民会小心翼翼地把废弃的动物尸体扔进去，仿佛是一种献祭，祈求它不要带来厄运。就这样，这个地质学的奇迹，在人类的想象中，扮演了几个世纪的怪兽巢穴。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转机出现在二十世纪初，伴随着一股席卷欧洲的洞穴探险热潮。1907年，当地一位名叫加斯东·德·拉瓦尔丹的富有好奇心的绅士，决心揭开它的真面目。他组织了一支小小的探险队，用绳索和简陋的照明设备，第一次真正系统地下降了55米，抵达了洞穴的底部。你可以想象他们当时的震撼——手中的火把或汽灯，照亮的不再是狰狞的岩壁，而是满眼闪烁的、前所未见的晶体森林。消息很快传开，地质学家和探险家们蜂拥而至。但真正让深渊向世界敞开大门的，是另一位关键人物：工程师路易·德·拉瓦尔（与前者无直接关系）。他设计并建造了那条最初的螺旋形步行通道，以及那个著名的、用绞盘升降的“吊篮”。这个吊篮最初是为了运送建筑材料，但很快成了游客体验的一部分，那种晃晃悠悠坠入地心的感觉，本身就成了一项传奇探险。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，平静的探索很快被战争的阴影打断。二战期间，多尔多涅是重要的抵抗运动区域。有证据和口述历史表明，普鲁梅萨克深渊因其隐蔽和复杂的内部结构，曾一度被抵抗军用作秘密仓库，甚至可能的临时藏身处。那些曾照亮水晶的灯光熄灭了，洞穴再次回归黑暗，但这一次，它守护的不再是传说，而是真实的人类勇气与希望。战争结束后，深渊迎来了新生。随着旅游业的复苏和技术的进步，更安全、更完善的步道系统被建立起来，精妙而不突兀的灯光设计被引入，旨在凸显自然形态之美而非喧宾夺主。它从一个小众的探险目的地，逐渐变成了多尔多涅地区的一张地质名片。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天我们所看到的游览体验，是数代管理者在保护与展示之间精心平衡的成果。他们深知，每一次呼吸、每一度温度的微小变化，都可能影响那些仍在以每百年几厘米速度缓慢生长的脆弱晶体。因此，游览被控制在导览团内，路线经过精心规划，灯光系统使用冷光源。当你站在洞底，听着导游讲解一根石柱需要百万年才能形成时，你不仅是在看一场自然奇观，你也是在参与一个跨越了恐惧、好奇、战争与和平的漫长故事。这个曾经被妖魔化的地穴，如今安静地向人们展示着地球的耐心与美丽，完成了从“魔鬼之洞”到“水晶大教堂”的华丽蜕变。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`为了获得最佳体验，建议在当天第一批或最后一批导览团的时间前往，以避开最大的人流，享受更静谧的氛围。整个游览时长约1小时15分钟，包括下降、洞穴内导览和上升。节奏是缓慢而沉浸式的，因为这里不适合匆匆走过，你需要时间让眼睛适应光线，让心灵适应这里的时空尺度。我强烈推荐选择“吊篮”方式下降（如开放），这独特的3分钟体验是旅程不可分割的一部分，能让你以最接近早期探险者的方式进入地心。导览通常以法语进行，但会提供包含多种语言的详细讲解手册或语音导览器，所以不用担心语言障碍。紧跟导游，但别忘了时常停下来，关掉内心的嘈杂，单纯地用眼睛去看，用耳朵去听那永恒的滴水声。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`洞内恒温约13摄氏度，且湿度很高，务必带上一件保暖外套，并穿着防滑的鞋子。
摄影时请务必关闭闪光灯，它不仅会破坏他人体验，强光对脆弱的微观晶体环境也可能产生长期影响。
尽量避免在暑期中午的热门时段前往，提前在线预订是避免在洞口长时间排队的最佳方法。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在入口处选择乘坐晃晃悠悠的复古“吊篮”缓缓沉入55米深的地心，感受早期探险者的心跳`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随导游踏入主穹窿大厅，在原地静静站立一分钟，让眼睛适应光线并感受被亿万晶体包围的初始震撼`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`仰头寻找那根被称为“棕榈树”的巨大奇柱，看灯光如何让它象牙白的表面泛出温润的光泽`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着铺设好的步道缓缓环行，仔细观察岩壁上那些薄如蝉翼的“流石帷幔”和珊瑚花园般密集的微小石花`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在“大瀑布”景观前驻足，想象数百万年来富含矿物质的水流如何创造出这道凝固的白色激流`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`聆听导游指出仍在活跃生长的滴水点，看着水珠在尖端凝聚、落下，完成一次跨越世纪的沉积`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观结束时，在上升前最后回望一眼这片地下殿堂，将那份幽静与璀璨刻入记忆`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`吊篮下降视角`}</h4>
                  <p className="text-sm text-gray-700">{`在吊篮下降过程中，将相机对准下方逐渐展开的晶体穹顶，可以拍出极具纵深感和探险感的画面，使用较慢的快门速度可以拍出吊篮绳索的运动模糊，增添动态。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主厅中央仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`站在主厅中央附近，将相机镜头尽可能朝上，使用广角端，可以捕捉到整个巨大穹顶被晶体覆盖的震撼全景，最佳时机是在一组游客刚刚走过、灯光稳定时。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“大瀑布”侧方特写`}</h4>
                  <p className="text-sm text-gray-700">{`在导游讲解“大瀑布”时，移动到其侧面，利用步道栏杆作为前景框架，聚焦于瀑布状钙华沉积的细腻纹理，侧光能完美展现其层理和晶莹质感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`步道转角处的深邃走廊`}</h4>
                  <p className="text-sm text-gray-700">{`在步道的一些转角，可以拍摄向洞穴更深处延伸的视角，利用灯光营造的明暗对比，营造出一种神秘、未知的探索氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`洞内光线昏暗且为彩色灯光，使用三脚架长时间曝光是获得清晰、低噪点照片的关键，但请注意不要妨碍其他游客通行。`}</li>
                <li>• {`尊重洞穴环境，绝对不要用手触摸任何岩壁或晶体，你指尖的油脂会永久阻碍它们的生长，破坏这亿万年才得来的美丽。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`乡村民宿魅力`}</h4>
                  <p className="text-sm text-blue-800">{`住在勒比格镇或附近村庄由石头农舍改造的家庭民宿，早晨在花园里享用女主人自制的果酱和可颂面包，感受地道多尔多涅乡村的慢生活。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色河畔酒店`}</h4>
                  <p className="text-sm text-green-800">{`选择韦泽尔河畔一家历史悠久的酒店，很多房间带有阳台，在探索完深邃的地下世界后，回到河边听着潺潺水声享用晚餐，是完美的感官平衡。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`隐居式庄园`}</h4>
                  <p className="text-sm text-yellow-800">{`预算充裕的话，可以入住一座隐藏在附近丘陵森林中的古堡或庄园酒店，享受绝对的宁静，在壁炉旁阅读，仿佛自己是这片土地历史的一部分。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`露营与自然接触`}</h4>
                  <p className="text-sm text-purple-800">{`对于热爱自然的旅行者，附近有多处设施良好的露营地，晚上在星空下入眠，白天去探索溶洞，是性价比极高的深度体验方式。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "多尔多涅夏季旅游旺季住宿非常紧张，尤其是特色民宿和庄园酒店，务必提前数月预订。这片区域治安良好，乡村地区夜晚非常安静，可以放心散步。选择住宿时，可以考虑以勒比格镇为中心，其周边15公里范围内的住宿都能方便抵达溶洞，并能同时探索拉斯科壁画、史前遗址等多尔多涅的其他瑰宝。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从普鲁梅萨克深渊回到地面，阳光刺得人有些睁不开眼。但那种感觉久久不散——不是黑暗带来的压抑，而是一种被彻底净化后的清澈。在地下的那一小时里，你被迫慢了下来，慢到能听见一滴水成型、坠落、溅起细微回音的整个过程。在这讲究即时满足的时代，这里的一切都在诉说着“缓慢”的力量。每一根看似静止的石柱，都在进行一场我们无法感知的、极其宏大的生长。它让你忍不住反思，我们日常的焦虑、匆忙，在“地质时间”的尺度下，究竟意味着什么？" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "我想，这就是为什么每一个热爱深度游的人，都应该来一次这里。它不仅仅是一个景点，更是一个巨大的冥想空间。在这里，你同时感受到了个体的渺小和生命（即便是以石头的形式呈现）的壮丽。你会明白，有些美丽需要封存于黑暗才能完好保存，有些伟大源于看似微不足道的、持续不断的积累。当旅行越来越倾向于打卡和拍照，普鲁梅萨克提醒我们，真正的震撼往往是无声的，它需要你放下手机，打开所有感官，去聆听地球古老的心跳。这份来自地心的、闪烁着微光的宁静，足以治愈所有浮于表面的喧嚣。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/brantome-venice-of-perigord" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩里戈尔的布朗托姆（法国威尼斯）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Brantôme</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/amiens-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    亚
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">亚眠大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Amiens Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/place-vendome-paris" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    旺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">旺多姆广场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Place Vendôme</p>
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
