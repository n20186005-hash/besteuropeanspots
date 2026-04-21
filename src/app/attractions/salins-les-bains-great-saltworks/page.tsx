import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '萨兰莱班大盐场 Salins-les-Bains Saltworks｜探索中世纪“白金”之源与震撼地下盐道 - 最佳欧洲景点',
  description: '走下那段略显陡峭的台阶，一股独特而湿润的气息立刻包裹了你。那不是海风的咸腥，而是一种更深沉、更矿物化的咸味，混合着岩石渗水的清凉感和岁月积淀的泥土味。当你的眼睛适应了地下通道里昏黄而温暖的灯光，眼前的景象会瞬间夺走你的呼吸。一条仿佛没有尽头的宏伟廊道向山腹深处延伸，两侧是高达十几米的、被盐分浸润得发...',
}

export default function SalinsLesBainsGreatSaltworksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '法国', href: '/destinations/france' },
            { label: '萨兰莱班大盐场', href: '/attractions/salins-les-bains-great-saltworks' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`萨兰莱班大盐场・Salins-les-Bains Saltworks・法国・萨兰莱班`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`走下那段略显陡峭的台阶，一股独特而湿润的气息立刻包裹了你。那不是海风的咸腥，而是一种更深沉、更矿物化的咸味，混合着岩石渗水的清凉感和岁月积淀的泥土味。当你的眼睛适应了地下通道里昏黄而温暖的灯光，眼前的景象会瞬间夺走你的呼吸。一条仿佛没有尽头的宏伟廊道向山腹深处延伸，两侧是高达十几米的、被盐分浸润得发黑的岩壁，巨大的砖石拱顶如同巨龙的肋骨，在光影中划出强有力的弧线。脚下是浅浅的、映着灯光的水渠，能听到地下水沿着古老木制管道流动的汩汩声响，清脆而空灵，在这沉寂了数百年的空间里回荡。这感觉不像参观一个景点，更像是一次地心探险，闯入了一个被时间遗忘的、关于“白色黄金”的秘密王国。
你知道吗，在冰箱发明前的漫长岁月里，盐就是生命的保鲜剂，是财富与权力的象征。萨兰莱班的一切——这座宁静的汝拉山区小镇，街道上那些坚固又优雅的老房子，甚至当地人的一种沉稳气质——都深深烙印着盐的痕迹。向导会告诉你，这里涌出的天然卤水含盐量极高，是上天赐予的宝藏。当你触摸那冰冷石壁上凝结的、晶晶亮的盐霜时，你触摸的不仅仅是矿物质，更是欧洲历史上一条隐秘的财富脉络。你能想象中世纪的人们，是如何点着火把，在这里用最原始的工具开采卤水，再将这珍贵的液体煮沸、结晶，运往四方吗？
最打动人的，是那种强烈的对比与共存。地上是阳光明媚、绿意盎然的法国小镇生活，有温泉（萨兰莱班也是温泉疗养地）、咖啡馆和周末市集的喧嚣。而仅仅几步之遥的地下，却是一个如此庞大、精密、充满力量感的工业奇观。它安静地沉睡在山体之中，像一个巨大的记忆宝库。这里没有教堂的彩色玻璃，也没有宫殿的金碧辉煌，但它粗粝的砖石、巨大的齿轮和深邃的井道，讲述的是一个更贴近人类生存本源的故事——关于劳动、智慧、以及如何从大地深处获取生命必需之物的史诗。这种真实的力量感，比任何装饰都更震撼人心。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`走下那段略显陡峭的台阶，一股独特而湿润的气息立刻包裹了你。那不是海风的咸腥，而是一种更深沉、更矿物化的咸味，混合着岩石渗水的清凉感和岁月积淀的泥土味。当你的眼睛适应了地下通道里昏黄而温暖的灯光，眼前的景象会瞬间夺走你的呼吸。一条仿佛没有尽头的宏伟廊道向山腹深处延伸，两侧是高达十几米的、被盐分浸润得发黑的岩壁，巨大的砖石拱顶如同巨龙的肋骨，在光影中划出强有力的弧线。脚下是浅浅的、映着灯光的水渠，能听到地下水沿着古老木制管道流动的汩汩声响，清脆而空灵，在这沉寂了数百年的空间里回荡。这感觉不像参观一个景点，更像是一次地心探险，闯入了一个被时间遗忘的、关于“白色黄金”的秘密王国。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你知道吗，在冰箱发明前的漫长岁月里，盐就是生命的保鲜剂，是财富与权力的象征。萨兰莱班的一切——这座宁静的汝拉山区小镇，街道上那些坚固又优雅的老房子，甚至当地人的一种沉稳气质——都深深烙印着盐的痕迹。向导会告诉你，这里涌出的天然卤水含盐量极高，是上天赐予的宝藏。当你触摸那冰冷石壁上凝结的、晶晶亮的盐霜时，你触摸的不仅仅是矿物质，更是欧洲历史上一条隐秘的财富脉络。你能想象中世纪的人们，是如何点着火把，在这里用最原始的工具开采卤水，再将这珍贵的液体煮沸、结晶，运往四方吗？`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，是那种强烈的对比与共存。地上是阳光明媚、绿意盎然的法国小镇生活，有温泉（萨兰莱班也是温泉疗养地）、咖啡馆和周末市集的喧嚣。而仅仅几步之遥的地下，却是一个如此庞大、精密、充满力量感的工业奇观。它安静地沉睡在山体之中，像一个巨大的记忆宝库。这里没有教堂的彩色玻璃，也没有宫殿的金碧辉煌，但它粗粝的砖石、巨大的齿轮和深邃的井道，讲述的是一个更贴近人类生存本源的故事——关于劳动、智慧、以及如何从大地深处获取生命必需之物的史诗。这种真实的力量感，比任何装饰都更震撼人心。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`萨兰莱班大盐场`} />
                <InfoRow label="英文名称" value={`Salins-les-Bains Saltworks`} />
                <InfoRow label="正式名称" value={`The Great Saltworks of Salins-les-Bains`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`萨兰莱班`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一处自中世纪起持续运行了超过1200年的盐业生产中心，与阿尔克-塞南皇家盐场共同被列为联合国教科文组织世界遗产，是欧洲工业文明早期的重要见证。`} />
                <InfoRow label="建筑特色" value={`其核心是深藏于汝拉山体之中、由巨大拱廊支撑的壮丽地下盐井通道，以及地上宏伟的泵房与煮沸车间工业建筑群。`} />
                <InfoRow label="建筑风格" value={`地下部分主要为中世纪罗马式与哥特式的拱券石造技术；地上工业建筑则体现了18-19世纪古典主义与实用主义相结合的工业建筑风格。`} />
                <InfoRow label="文化价值" value={`它不仅代表了人类利用自然资源的高超智慧，更是一部关于“白色黄金”如何塑造地区经济、政治与社会结构的活态史书。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`开放时间随季节变化显著。常规旺季（4月至9月）为每日上午9点30分至下午6点30分，最后入场时间为关门前1小时。淡季（10月至次年3月）开放时间缩短，通常为上午10点至中午12点，下午2点至5点，且每周二闭馆。每年1月会有为期两周的维护性闭馆。团队参观必须提前至少48小时预约。具体日期请务必在出行前查询官网确认。`} />
              <InfoRow label="门票价格" value={`成人标准门票为10欧元。优惠票（学生、65岁以上长者、10人以上团体）为8欧元。家庭套票（2位成人+最多3名18岁以下儿童）为28欧元。7岁以下儿童免费。持有“汝拉通行证”或与邻近的阿尔克-塞南皇家盐场联票可享受折扣。门票包含强制性的、由专业向导带领的参观（提供法语、英语导览器或资料），无法自行进入核心区域。`} />
              <InfoRow label="地址" value={`Place des Salines, 39110 Salins-les-Bains, France`} />
              <InfoRow label="交通方式" value={`从最近的大型交通枢纽出发：最近的国际机场是瑞士日内瓦机场（GVA），距离约120公里。从机场租车自驾是首选，沿A40高速公路行驶，从“Poligny”出口下，再按路标前往萨兰莱班，车程约1.5小时。若乘坐公共交通，可从日内瓦火车站乘坐TGV或TER列车至法国境内的“穆沙尔”站，再换乘前往萨兰莱班的区域性巴士，总耗时约2.5-3小时，巴士班次有限需提前查好时刻表。从法国巴黎出发，可乘TGV至“第戎”或“贝桑松”站，再换乘TER区域列车至“尚帕尼奥勒”站，最后打车（约15分钟）或搭乘接驳巴士抵达小镇，总行程约3小时。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从很久很久以前说起，久到没有确切的文字记载。考古发现告诉我们，至少在公元前几世纪，生活在这里的凯尔特人就已经在利用这些自然涌出的盐泉了。盐对于保存食物、饲养牲畜至关重要，它让这个山谷早早成为了一个吸引定居的富庶之地。但真正的传奇，始于公元8世纪左右。当地的修道士们（总是他们，这些中世纪的知识分子和实践家）开始系统地开发盐泉。他们建造了最初的地下木制管道系统，将卤水从泉眼引到集中的煮盐工坊。萨兰莱班的名字“Salins”就源于拉丁语的“盐”，它的命运从此与这白色的晶体牢牢绑定。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`中世纪是盐场的黄金时代。盐税成了勃艮第公爵和后来法国王室国库的重要来源，萨兰莱班的盐被运往瑞士、萨伏伊等广阔地区。为了保护这笔巨大的财富，坚固的防御工事被建立起来，小镇也逐渐繁荣。然而，开采并非易事。地下卤水水位会变化，需要不断挖掘更深的井道，并使用复杂的杠杆和泵系统来提升卤水。13世纪，一项伟大的工程开始了——人们开凿了一条长达165米、深入山腹的巨大“地下长廊”，也就是你今天看到的核心通道。这项工程持续了数十年，完全依靠人力与简单的工具，其毅力令人叹为观止。你可以想象，在火把摇曳的光线下，工人们叮当作响的凿击声，是如何回荡在这新开辟的巨石空间里的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间来到18世纪，这是科学与工业启蒙的时代。盐场迎来了它最著名的一位“访客”——克劳德·尼古拉斯·勒杜。这位天才建筑师被国王路易十五任命，为法国的盐税系统设计更高效、更理想的盐场。他在距离萨兰莱班不远处的阿尔克-塞南设计了那座宛如乌托邦的“皇家盐场”。虽然勒杜的理想主义蓝图并未完全实现，但他的思想影响了萨兰莱班。地上的泵房和车间被改造、扩建，安装了更先进的蒸汽泵（后来是电力泵），效率大大提高。萨兰莱班与阿尔克-塞南通过一条长达21公里的木制输卤管道相连，将前者的卤水源源不断地输送到后者进行加工，形成了一个庞大的盐业生产网络。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`繁荣持续了近千年，但终究敌不过时代变迁。19世纪末，来自海盐和岩盐的竞争日益激烈，维持古老而复杂的地下开采成本高昂。1962年，在运行了超过1200年后，萨兰莱班的盐泵终于停止了轰鸣。卤水不再被抽取，巨大的地下空间逐渐被遗忘。然而，故事并没有结束。当地人深知这座盐场是他们身份的根。经过漫长的保护和修复，这座工业纪念碑在2009年，与它的“兄弟”阿尔克-塞南皇家盐场一起，被列入联合国教科文组织世界遗产名录。它不再生产食盐，但它开始生产更宝贵的东西——历史的记忆和文化的认同。今天，当你走在那些廊道中，你听到的不再是生产的喧嚣，而是历史的低语，讲述着一个地方如何因一种矿物质而诞生、辉煌、沉寂，最终以另一种形式重获新生。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`强烈建议安排至少3到3.5小时进行沉浸式游览。最佳抵达时间是上午开放后不久（如9:30）或下午较早的场次（如14:00），以避开可能的团队游客高峰，并能更好地享受地下通道那份特有的静谧。参观全程必须跟随向导（含在门票内），节奏由向导掌握，但通常包括地上博物馆预热、震撼的地下长廊探索、以及巨大的泵房车间参观三大部分。这样的安排逻辑清晰，先让你了解背景知识，再用最强烈的感官体验冲击你，最后在地面建筑中理解整个工艺流程，完成一次从认知到感受再到理解的完整深度之旅。参观结束后，别忘了在小镇里逛逛，感受盐业遗产如何融入当代生活。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`地下通道常年恒温约12摄氏度，且湿度很高，务必带一件保暖外套，并穿上防滑舒适的鞋子。
由于是向导带领的团体参观，且地下空间有独特的声学效果，请尽量保持安静，这不仅是为了尊重他人，也能让你更好地捕捉环境中的细微声响（如水滴声），提升体验。
拍照时请勿使用闪光灯，强光会破坏其他游客的沉浸感，也对古老的建筑结构无益。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`先在“盐之记忆”小型博物馆里，通过古老的制盐工具、账簿和地图，让大脑对接下来要看到的庞然大物有个初步的概念预热。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随向导推开那扇厚重的大门，沿着石阶一步步向下，让潮湿的盐味和温度的下降预告你将进入一个截然不同的世界。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在“大长廊”的起点，屏息凝望那在暖黄色灯光下无尽延伸的砖石拱顶，感受第一次视觉冲击带来的短暂失语。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`伸手触摸冰凉岩壁上自然结晶的盐花，用指尖的触感直接连接这份跨越千年的地质馈赠。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在古老的木制卤水收集池边驻足，倾听导游讲解中世纪工人们如何利用简单杠杆原理与重力，完成卤水的初次汇集与提升。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`仰望高达21米的“圣殿”井区，看光束从顶端的小窗射入，照亮飞舞的尘埃，体会工程中近乎神圣的尺度与人类意志。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回到地面，走进高达三层楼的19世纪蒸汽泵房，凝视那些早已停止运转但依旧威严的巨型金属飞轮和气缸，想象当年震耳欲聋的轰鸣。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在导览结束后的纪念品商店，带走一小瓶从保护性开采中获得的、真正的萨兰莱班盐，把这份“白色黄金”的滋味带回家。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`大长廊纵深构图`}</h4>
                  <p className="text-sm text-gray-700">{`站在长廊入口向内拍摄，利用拱顶和墙壁形成的强烈透视引导线，将视线引向深邃的黑暗尽头，人物可以作为比例尺点缀在近景，灯光开启的时段均可，但人少时效果最佳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“圣殿”井仰拍剪影`}</h4>
                  <p className="text-sm text-gray-700">{`位于泵房下方的深井区，上午特定时间有自然光从顶部射入，可以仰拍井口的光束与巨大的石砌结构，拍摄人物剪影能极好地衬托空间的宏伟与神秘。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`古老木制管道特写`}</h4>
                  <p className="text-sm text-gray-700">{`在光线较好的侧通道，寻找那些保存完好的中世纪木制卤水管道的连接处，用微距或近距离拍摄其粗犷的工艺细节和温润的光泽，诉说手工时代的智慧。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`地上泵房工业景观`}</h4>
                  <p className="text-sm text-gray-700">{`在巨大的蒸汽泵设备前，采用广角镜头低角度仰拍，捕捉金属结构的几何力量感与建筑挑高空间的对比，下午透过高窗的侧光能强化金属的质感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`地下环境光线复杂且昏暗，建议使用大光圈镜头或提高ISO，优先保证快门速度，避免模糊。三脚架通常不允许在团体导览中使用，需提前确认。尊重遗址，绝对不要为了拍照而触摸或攀爬古老的结构，尤其是脆弱的盐结晶部分。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温泉小镇疗愈之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在萨兰莱班镇中心带有温泉接入的精品酒店，白天探索冰冷盐矿，晚上用温暖的盐泉疗愈身心，体验完整的“盐”文化循环。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`田园牧歌民宿`}</h4>
                  <p className="text-sm text-green-800">{`选择坐落在小镇周边汝拉丘陵上的传统农舍改造民宿，推开窗就是无边的绿色牧场和远方山峦，享受地道的乡村宁静与家庭式款待。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`历史中心公寓`}</h4>
                  <p className="text-sm text-yellow-800">{`租住老盐工住宅区石头房子里的自助式公寓，在古老的街巷中醒来，像当地人一样去面包店买根法棍，沉浸在世界遗产地的日常氛围中。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计感盐业主题酒店`}</h4>
                  <p className="text-sm text-purple-800">{`镇上由旧盐仓改造的现代设计酒店，房间保留工业元素，提供以本地盐和食材为特色的美食，是遗产与现代舒适感的完美结合。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`萨兰莱班非常宁静，夜间几乎无噪音，是寻求放松旅人的理想之地。夏季和节假日房源紧张，务必提前预订。如果你计划同时参观阿尔克-塞南皇家盐场（非常推荐），住在这里比住在更大的贝桑松等地更有连贯性。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开萨兰莱班许久，那股地下的阴凉潮湿感和浓郁的盐味，似乎还附着在皮肤和记忆里。它带给我的触动，不同于那些令人仰望的伟大艺术。它是一种向内、向下的探索，是去触摸文明赖以生存的、不那么光鲜却更为坚实的基石。在这里，你感受到的不是神权的威严或皇权的炫耀，而是普通人的汗水、工匠的巧思，以及一个社区围绕一种资源顽强生存、发展的集体生命力。它沉默，却震耳欲聋。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个一切追求快速、轻盈、数字化的世界里，萨兰莱班像一块沉重的压舱石。它提醒我们，我们的历史不仅是王侯将相的故事，更是关于如何耕种、如何冶炼、如何从大地获取盐粒的实在技艺。它告诉我们，真正的深度不仅仅是去往远方的秘境，也是向下挖掘，去理解支撑我们生活的那些最基础、最原始的元素。每一位热爱深度游的旅人都该来一次这里，不仅仅是为了看一个奇观，更是为了完成一次对文明根基的巡礼。当你从那个深邃的地下世界重返阳光之下，你会觉得眼前的寻常生活，似乎也多了一层厚重而珍贵的滋味。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/semur-en-auxois" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    瑟
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">瑟米尔昂诺苏瓦</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Semur-en-Auxois</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-hautefort" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    欧
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">欧特福尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Hautefort</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-dusse" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    于
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">于塞城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château d'Ussé</p>
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
