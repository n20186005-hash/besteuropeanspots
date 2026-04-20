import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '萨尔费尔德仙女石窟 Saalfelder Feengrotten｜探秘吉尼斯认证“世界色彩最丰富的溶洞” - 最佳欧洲景点',
  description: '说实话，在走进洞口之前，我完全没料到会遭遇这样一场视觉的“核爆”。萨尔费尔德小镇本身是那种典型的、宁静到能听见自己心跳的德国图林根老城，石板路、木筋屋，空气里是咖啡和刚出炉的“果酱煎饼”的甜香。你跟着路牌，穿过一片荫凉的树林，看到一个朴实无华、甚至有点工业感的洞口，心里可能会嘀咕：“就这？” 但请准...',
}

export default function SaalfelderFeengrottenPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '萨尔费尔德仙女石窟', href: '/attractions/saalfelder-feengrotten' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`萨尔费尔德仙女石窟・Saalfelder Feengrotten・德国・萨尔费尔德`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，在走进洞口之前，我完全没料到会遭遇这样一场视觉的“核爆”。萨尔费尔德小镇本身是那种典型的、宁静到能听见自己心跳的德国图林根老城，石板路、木筋屋，空气里是咖啡和刚出炉的“果酱煎饼”的甜香。你跟着路牌，穿过一片荫凉的树林，看到一个朴实无华、甚至有点工业感的洞口，心里可能会嘀咕：“就这？” 但请准备好，你的感官即将被彻底刷新。
当厚重的矿洞大门在身后关上，世界瞬间切换了频道。潮湿的、带着浓郁矿物气息的凉意包裹了你，那是种很原始的味道，像大地深处的呼吸。耳边只有滴滴答答、叮叮咚咚的水声，从四面八方传来，清脆得像精灵在敲击水晶琴。然后，灯光亮了。我的天。任何语言在那一刻都显得苍白。眼前的景象根本不是想象中的灰暗岩洞，而是一个被上帝或某位疯狂艺术家打翻的调色盘。岩壁上，矿石在精心设计的灯光下，迸发出不可思议的色彩：翡翠绿、钴蓝、落日橙、玫瑰粉、帝王紫……它们不是呆板的一块块，而是像水彩一样晕染、流淌、交织在一起，在常年渗水形成的钟乳石和石幔上，覆盖着一层天鹅绒般细腻的、闪闪发光的矿物结晶。光柱穿过氤氲的水汽，形成一道道朦胧的光幕。你仿佛不是走在地底，而是漂浮在一个凝固的、彩色的梦境里。
导游会轻声告诉你，这令人窒息的美，源于一种叫“含水硫酸盐矿物”的东西，是水和时间对古老岩壁长达几个世纪的魔法点化。但更打动我的，是这里在本地人心中的位置。它不只是一个景点，更是一个“疗愈之地”。从前矿工们在此忍受黑暗与危险，祈求“地下仙女”的庇护；如今，人们来这里，是为了让眼睛饱尝自然界最奢侈的色彩盛宴，让心灵在亘古的宁静中得到安抚。你会看到有老人静静地坐在洞内的长椅上，只是凝视着一片泛着蓝光的石壁，仿佛在阅读一部无字的天书；也有孩子睁大眼睛，小声问妈妈：“仙女晚上真的住在这里吗？” 这种连接了历史伤痛、自然奇迹与当代人精神需求的独特氛围，才是仙女洞最核心的魅力。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`说实话，在走进洞口之前，我完全没料到会遭遇这样一场视觉的“核爆”。萨尔费尔德小镇本身是那种典型的、宁静到能听见自己心跳的德国图林根老城，石板路、木筋屋，空气里是咖啡和刚出炉的“果酱煎饼”的甜香。你跟着路牌，穿过一片荫凉的树林，看到一个朴实无华、甚至有点工业感的洞口，心里可能会嘀咕：“就这？” 但请准备好，你的感官即将被彻底刷新。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当厚重的矿洞大门在身后关上，世界瞬间切换了频道。潮湿的、带着浓郁矿物气息的凉意包裹了你，那是种很原始的味道，像大地深处的呼吸。耳边只有滴滴答答、叮叮咚咚的水声，从四面八方传来，清脆得像精灵在敲击水晶琴。然后，灯光亮了。我的天。任何语言在那一刻都显得苍白。眼前的景象根本不是想象中的灰暗岩洞，而是一个被上帝或某位疯狂艺术家打翻的调色盘。岩壁上，矿石在精心设计的灯光下，迸发出不可思议的色彩：翡翠绿、钴蓝、落日橙、玫瑰粉、帝王紫……它们不是呆板的一块块，而是像水彩一样晕染、流淌、交织在一起，在常年渗水形成的钟乳石和石幔上，覆盖着一层天鹅绒般细腻的、闪闪发光的矿物结晶。光柱穿过氤氲的水汽，形成一道道朦胧的光幕。你仿佛不是走在地底，而是漂浮在一个凝固的、彩色的梦境里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`导游会轻声告诉你，这令人窒息的美，源于一种叫“含水硫酸盐矿物”的东西，是水和时间对古老岩壁长达几个世纪的魔法点化。但更打动我的，是这里在本地人心中的位置。它不只是一个景点，更是一个“疗愈之地”。从前矿工们在此忍受黑暗与危险，祈求“地下仙女”的庇护；如今，人们来这里，是为了让眼睛饱尝自然界最奢侈的色彩盛宴，让心灵在亘古的宁静中得到安抚。你会看到有老人静静地坐在洞内的长椅上，只是凝视着一片泛着蓝光的石壁，仿佛在阅读一部无字的天书；也有孩子睁大眼睛，小声问妈妈：“仙女晚上真的住在这里吗？” 这种连接了历史伤痛、自然奇迹与当代人精神需求的独特氛围，才是仙女洞最核心的魅力。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`萨尔费尔德仙女石窟`} />
                <InfoRow label="英文名称" value={`Saalfelder Feengrotten`} />
                <InfoRow label="正式名称" value={`Saalfelder Feengrotten`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`萨尔费尔德`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一处从中世纪废弃矿洞华丽转身、被吉尼斯世界纪录认证为“世界上色彩最丰富的游览溶洞”的自然与文化奇迹。`} />
                <InfoRow label="建筑特色" value={`并非人工建筑，而是由数百年的采矿活动与大自然鬼斧神工共同雕琢而成的地下水晶宫殿，以其无与伦比的、如油画调色盘般绚烂的岩矿色彩为核心特色。`} />
                <InfoRow label="建筑风格" value={`自然地质形成，叠加了巧妙且极具艺术感的人工照明设计，属于独特的“矿洞-溶洞”混合形态。`} />
                <InfoRow label="文化价值" value={`它见证了图林根地区矿业兴衰，并从一个工业遗迹转变为激发人类想象力、提供身心疗愈的自然艺术圣地，是工业遗产成功转型为可持续旅游的典范。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年开放，但具体时间随季节变化。夏季（4月至10月）通常为上午9点至下午5点，最后入场时间约为闭门前1小时。冬季（11月至次年3月）开放时间缩短，通常为上午10点至下午3点半。重要节假日（如12月24日、25日、31日及1月1日）可能关闭或调整时间，出行前务必在其官网核对最新时刻表。洞内导览游每隔20-30分钟一组，全程约需60-75分钟。`} />
              <InfoRow label="门票价格" value={`标准成人票约为16欧元。6-16岁青少年及持有效证件的学生享有优惠价，约13欧元。家庭套票（2大+最多3小）约为45欧元。5岁以下儿童免费。门票包含固定路线导览游、童话森林“格罗滕世界”入口及采矿博物馆参观。建议在线预订以确保名额，尤其在夏季周末和公共假期。`} />
              <InfoRow label="地址" value={`Feengrottenweg 2, 07318 Saalfeld/Saale, Germany`} />
              <InfoRow label="交通方式" value={`最近的主要交通枢纽是耶拿和埃尔福特。从柏林中央火车站乘坐ICE高速列车到耶拿-帕拉迪斯站约2小时，或从法兰克福乘坐ICE到埃尔福特约2.5小时。从耶拿或埃尔福特换乘区域列车（RE或RB）前往萨尔费尔德，车程约40-60分钟，班次频繁（约每小时1-2班）。抵达萨尔费尔德主火车站后，最佳方式是步行，这是最地道的体验：出站后跟着清晰的棕色旅游指示牌“Feengrotten”，穿过宁静的老城街区，沿着萨勒河畔漫步约20-25分钟即可抵达洞口。也可在站前乘坐610路公交车至“Feengrotten”站，车程约5分钟，但班次较少。自驾可将车停在景点的大型付费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从很久很久以前说起，那时候，这里没有仙女，只有挥汗如雨、满身煤灰的矿工。大约公元13世纪，人们就在萨尔费尔德这片山体里发现了宝贵的矿物——主要是明矾（用于鞣革和染色）和沥青页岩。坑道被一镐一镐地挖开，黑暗的隧道里回荡着敲击声和喘息声，矿工们靠着微弱的油灯照明，在狭窄、潮湿且危险的环境中劳作。这个矿场断断续续开采了数百年，直到19世纪中叶，矿脉逐渐枯竭，成本也越来越高，最终在1846年，矿井被正式关闭，废弃的坑道很快被遗忘，任由地下水流淌、侵蚀，将其尘封在寂静的黑暗之中。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，大自然这位最伟大的艺术家，却在人类退场后开始了它的创作。富含矿物质的地下水开始无声地渗透进废弃的坑道和矿室。水滴以极其缓慢的速度——有时一年只增长一毫米——溶解、沉淀、再结晶。硫酸铁、氢氧化铁以及其他复杂的矿物盐分，随着水流在岩壁上沉积、氧化，形成了各种色彩斑斓的结壳和沉积物。这个过程持续了半个多世纪，在绝对黑暗与恒定的低温中，一个色彩的秘密花园正在悄然形成，等待着重见天日的时刻。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机出现在20世纪初。1910年，当地一位名叫弗里德里希·格鲁斯的工程师，在一次地质勘探中偶然发现了这些废弃矿洞的入口。出于好奇和专业本能，他带领队伍深入探查。当他们的灯光第一次照亮那些被七彩矿物覆盖的洞穴时，所有人都震惊得说不出话来。他们看到的不是灰暗的矿坑，而是一个超乎想象的、流光溢彩的地下世界。消息不胫而走，很快引起了科学界和公众的极大兴趣。人们意识到，这不仅仅是一个地质奇观，更是一个潜在的宝藏。经过几年的安全加固和游览设施建设，1914年，“仙女石窟”作为旅游景点正式向公众开放。这个名字取得很妙——“Feen”是仙女，“Grotten”是石窟，一下子就将那段艰苦的采矿历史，浪漫地转化成了一个充满童话色彩的探险之地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`开放后的发展并非一帆风顺，经历了两次世界大战的动荡，但仙女洞的魅力始终吸引着人们。真正的全球性认可在1993年到来：吉尼斯世界纪录正式授予它“世界上色彩最丰富的游览溶洞”称号。这块金字招牌让它从德国众多景点中脱颖而出。此后的岁月里，管理方在保护与展示之间找到了精妙的平衡。他们没有进行破坏性开发，而是邀请了顶尖的灯光设计师，用最环保、最节制的LED灯光系统，像给一幅幅天然壁画打上追光，最大限度地凸显自然色彩，而非用艳俗的灯光掩盖它。同时，他们在洞外扩建了适合家庭的“格罗滕世界”童话森林和详实的采矿博物馆，让一趟旅程同时包含了奇幻体验、自然教育和历史回顾。从一个为生存而挖掘的黑暗矿坑，到一个为梦想和心灵而开放的光明殿堂，萨尔费尔德仙女洞的故事，本身就是一则关于时间、自然与人类 resilience 的现代童话。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`为了获得最完整、最宁静的体验，建议你在开放后第一批入场，比如夏季早上9点半左右抵达。这样你能避开人群，在洞内享受近乎私人的静谧时刻，光线和氛围都最佳。整体游览可以安排大半天时间（约4-5小时）。建议顺序是：先参加洞内的导览游（核心体验，约75分钟），出来后带着洞内的震撼感，轻松漫步旁边的童话森林“格罗滕世界”（约60-90分钟），这里有根据矿山传说设计的精灵小屋和互动装置，非常适合放松和拍照。最后参观采矿博物馆（约30-45分钟），了解这里的前世今生，让感性体验得到理性的回响。这样的节奏张弛有度，从地下奇观到地上童话，再到历史沉淀，层层递进。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`洞内温度常年恒定在8-10摄氏度，且湿度很高，务必带一件保暖外套，穿防滑舒适的鞋子。
洞内摄影禁用闪光灯和三脚架（为防止拥堵和伤害矿物），请提前调整好相机的高感光度设置。
导览游以德语进行，但可以在入口处租用包含中文在内的多种语言语音导览器，务必领取。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`先在游客中心购票或换票，感受一下大厅里微凉的空气和隐约传来的地下气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随导游穿过那扇厚重的大门，让眼睛在最初的黑暗中适应，然后迎接第一抹奇幻色彩的猛烈冲击。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在“大矿室”停下脚步，抬头仰望那高达数米、如彩虹瀑布般倾泻而下的七彩岩壁，听导游讲述矿工与仙女的古老传说。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`小心翼翼地走过狭窄的“矿工通道”，用手触摸那冰凉湿润、覆着绒毯般矿晶的岩壁，感受几个世纪前矿工们指尖的触感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在“水晶宫”静立片刻，这里色彩最为密集绚烂，光影在水面倒影中折叠，记得寻找那块被誉为“洞内蒙娜丽莎”的天然侧脸岩像。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`于洞内设置的休息长椅上稍坐，关闭所有光源一分钟，在绝对黑暗与滴滴水声中，用耳朵和皮肤去“看见”这个洞穴。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`结束导览走出洞口，让阳光重新洒在脸上，有种从梦境重返人间的恍惚感，直接右转进入童话森林开始地上的冒险。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在采矿博物馆里亲手掂量一下不同矿石的重量，看看那些古老的矿灯和工具，完成从想象到认知的闭环。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`“玛瑙湖”倒影角`}</h4>
                  <p className="text-sm text-gray-700">{`在靠近行程中后段的一个静谧水潭边，蹲下以低角度拍摄，能完美捕捉到头顶七彩岩壁和钟乳石在如镜水面中的完整倒影，对称构图美到窒息。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“彩虹长廊”侧光位`}</h4>
                  <p className="text-sm text-gray-700">{`在一条较长通道的中段，等待团队稍微走远，利用岩壁自身色彩和侧上方柔和的暖黄光，拍摄人物剪影或岩壁纹理特写，色彩层次感极强。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`童话森林“精灵磨坊”前景`}</h4>
                  <p className="text-sm text-gray-700">{`在洞外的童话森林里，以小巧可爱的木制磨坊和水车为前景，后方是郁郁葱葱的山林和古老的洞口建筑，营造出童话故事的画面感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`采矿博物馆矿石窗台`}</h4>
                  <p className="text-sm text-gray-700">{`博物馆内有一个靠窗的展台，陈列着原矿石标本，下午的阳光斜射进来时，可以拍摄矿石晶体晶莹剔透的质感与窗外自然绿意的对比。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`洞内光线复杂且暗，建议使用大光圈镜头（如f/1.8或更大）并勇敢提高ISO，RAW格式拍摄为后期保留空间。`}</li>
                <li>• {`尊重自然奇观，绝对不要用手触摸色彩斑斓的岩壁，皮肤油脂会永久破坏脆弱的矿物结晶。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`古镇风情之选`}</h4>
                  <p className="text-sm text-blue-800">{`下榻萨尔费尔德老城广场旁的家庭式酒店，房间窗户正对着古老的市政厅，清晨在面包房的新鲜香气中醒来，步行去石窟的沿途满是风景。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`森林静谧体验`}</h4>
                  <p className="text-sm text-green-800">{`住在石窟附近步行5分钟可达的度假屋，被松树林环绕，晚上异常安静，可以独享星空，并享受房东准备的丰盛图林根特色早餐。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`历史宅邸奢华`}</h4>
                  <p className="text-sm text-yellow-800">{`选择萨勒河畔一座经过精心修复的19世纪贵族别墅改建的精品酒店，房间挑高，装饰古典，在河景阳台上享用晚餐是结束一天探险的完美方式。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`全景度假村`}</h4>
                  <p className="text-sm text-purple-800">{`驱车10分钟上山，入住能俯瞰整个萨尔费尔德谷地的四星级度假酒店，拥有温泉泳池和桑拿，在舒适中缓解徒步疲劳，将山城夜景尽收眼底。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季旅游旺季（7-8月）及周末住宿相当紧俏，提前1-2个月预订是明智之举。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`老城区的住宿更有生活气息，但夜晚可能更安静；靠近石窟的住宿更方便，但餐饮选择相对较少，可根据旅行重心权衡。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开仙女石窟很久之后，我闭上眼睛，脑海里依然会浮现那片流动的、沉默的色彩。它给我的触动，远不止于“好看”或“神奇”。在这个追求高效、信息爆炸的时代，仙女洞提供了一种截然相反的体验：它强迫你慢下来。在阴凉的地底，跟着导游的步伐，你不能奔跑，不能大声喧哗，只能慢慢地走，静静地看，深深地呼吸。时间在这里有了不同的密度，一秒被拉长，你能听见自己的心跳和水滴落下间隔的韵律。这是一种珍贵的“感官重启”，让我们被屏幕麻木的眼睛，重新学习惊叹；让我们被噪音充斥的耳朵，重新辨识寂静。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位热爱深度游的旅人，都该来一次萨尔费尔德。它不仅仅是为了验证一个吉尼斯纪录，更是为了赴一场与地球古老心跳的约会。在这里，你会明白，最美的色彩不需要任何颜料，最震撼的艺术品出自时间之手。你会带着一身的凉意和满心的斑斓回到地面，然后发现，你看待窗外寻常草木的眼光，都仿佛被那地下的彩虹悄悄镀上了一层温柔的光泽。这是一个能往你记忆里注入一幅永恒油画的地方，值得你穿山越岭，亲自来领取这份来自大地深处的、沉默的馈赠。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/landshut-trausnitz-castle-brick-gothic" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    兰
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">兰茨胡特（特劳斯尼茨城堡与砖砌哥特）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Landshut (Trausnitz Castle and Brick Gothic)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lindau-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    林
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">林道老城区</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lindau Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/hameln-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈默尔恩老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hameln Old Town</p>
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
