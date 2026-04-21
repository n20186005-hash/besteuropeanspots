import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '伦达莱宫 Rundāle Palace｜波罗的海的凡尔赛宫，金色洛可可的孤独咏叹 - 最佳欧洲景点',
  description: '车子在拉脱维亚南部平坦得有些寂寥的平原上开了好久，窗外是大片大片翻滚的麦田和墨绿的森林，直到天际线处，一抹金黄色的轮廓忽然跃入眼帘——那就是伦达莱宫了。第一眼的感觉很奇妙，它不是像新天鹅堡那样从山崖上“长”出来的，而是安安静静地、带着一种近乎端庄的孤独感，矗立在这片开阔地的中央。周围没有任何现代建筑...',
}

export default function RundalePalacePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '拉脱维亚', href: '/destinations/latvia' },
            { label: '包斯卡', href: '/destinations/latvia' },
            { label: '伦达莱宫（波罗的海的凡尔赛宫）', href: '/attractions/rundale-palace' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`伦达莱宫（波罗的海的凡尔赛宫）・Rundāle Palace・拉脱维亚・包斯卡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在拉脱维亚南部平坦得有些寂寥的平原上开了好久，窗外是大片大片翻滚的麦田和墨绿的森林，直到天际线处，一抹金黄色的轮廓忽然跃入眼帘——那就是伦达莱宫了。第一眼的感觉很奇妙，它不是像新天鹅堡那样从山崖上“长”出来的，而是安安静静地、带着一种近乎端庄的孤独感，矗立在这片开阔地的中央。周围没有任何现代建筑的打扰，仿佛时光在这里特意留出了一片真空，只为了安放这座18世纪的梦境。
推开沉重的橡木大门，那股味道瞬间把你包裹——那是混合了古老橡木地板、陈旧织物、微尘以及一丝若有若无的蜂蜡抛光剂的气味，是“历史”本身的味道。然后，光涌了进来。不是刺眼的光，而是经过高大的窗户过滤后，变得柔和、带着温度的金色光线。它洒在拼花地板上，映亮墙壁上那些卷曲的、镀金的洛可可装饰，让整个空间仿佛在缓慢地呼吸。耳边安静极了，只能听见自己踩在镶木地板上轻微的吱呀声，以及从远处某个房间隐约飘来的、讲解员压低嗓音的絮语。那一刻你忽然明白，这里不是冷冰冰的博物馆，它依然是一个等待着被唤醒的“家”，空气里还残留着昔日舞会上裙裾摩擦的窸窣和酒杯轻碰的脆响。
走到宫殿背面，推开通往花园的玻璃门，另一个世界豁然开朗。十公顷的法式花园像一块巨大的、色彩斑斓的织锦在你脚下铺开。修剪得一丝不苟的绿篱组成复杂的几何图案，远处是笔直的林荫道，消失在视线的尽头。风吹过树梢的声音，取代了室内的静谧。你会看到当地的老人坐在长椅上安静地读报，年轻的情侣手牵手在玫瑰丛边漫步。这座曾经只属于公爵的奢华乐园，如今成了拉脱维亚人最心爱的后花园。这种强烈的反差，恰恰是它最动人的地方——从极致的私密贵族空间，到向所有人敞开的公共美景，它完成了自己最优雅的转身。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在拉脱维亚南部平坦得有些寂寥的平原上开了好久，窗外是大片大片翻滚的麦田和墨绿的森林，直到天际线处，一抹金黄色的轮廓忽然跃入眼帘——那就是伦达莱宫了。第一眼的感觉很奇妙，它不是像新天鹅堡那样从山崖上“长”出来的，而是安安静静地、带着一种近乎端庄的孤独感，矗立在这片开阔地的中央。周围没有任何现代建筑的打扰，仿佛时光在这里特意留出了一片真空，只为了安放这座18世纪的梦境。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`推开沉重的橡木大门，那股味道瞬间把你包裹——那是混合了古老橡木地板、陈旧织物、微尘以及一丝若有若无的蜂蜡抛光剂的气味，是“历史”本身的味道。然后，光涌了进来。不是刺眼的光，而是经过高大的窗户过滤后，变得柔和、带着温度的金色光线。它洒在拼花地板上，映亮墙壁上那些卷曲的、镀金的洛可可装饰，让整个空间仿佛在缓慢地呼吸。耳边安静极了，只能听见自己踩在镶木地板上轻微的吱呀声，以及从远处某个房间隐约飘来的、讲解员压低嗓音的絮语。那一刻你忽然明白，这里不是冷冰冰的博物馆，它依然是一个等待着被唤醒的“家”，空气里还残留着昔日舞会上裙裾摩擦的窸窣和酒杯轻碰的脆响。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走到宫殿背面，推开通往花园的玻璃门，另一个世界豁然开朗。十公顷的法式花园像一块巨大的、色彩斑斓的织锦在你脚下铺开。修剪得一丝不苟的绿篱组成复杂的几何图案，远处是笔直的林荫道，消失在视线的尽头。风吹过树梢的声音，取代了室内的静谧。你会看到当地的老人坐在长椅上安静地读报，年轻的情侣手牵手在玫瑰丛边漫步。这座曾经只属于公爵的奢华乐园，如今成了拉脱维亚人最心爱的后花园。这种强烈的反差，恰恰是它最动人的地方——从极致的私密贵族空间，到向所有人敞开的公共美景，它完成了自己最优雅的转身。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`伦达莱宫（波罗的海的凡尔赛宫）`} />
                <InfoRow label="英文名称" value={`Rundāle Palace`} />
                <InfoRow label="正式名称" value={`Rundāle Palace`} />
                <InfoRow label="国家" value={`拉脱维亚`} />
                <InfoRow label="城市" value={`包斯卡`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是波罗的海地区最宏伟的巴洛克与洛可可风格宫殿，见证了库尔兰公国的黄金时代与俄德贵族权力的更迭。`} />
                <InfoRow label="建筑特色" value={`一座宏大的对称式宫殿建筑群，拥有138间厅室、辉煌的洛可可内饰与占地85公顷的精致法式花园。`} />
                <InfoRow label="建筑风格" value={`外观为典型的巴洛克风格，内部装饰则是极其华丽繁复的洛可可风格。`} />
                <InfoRow label="文化价值" value={`它不仅是建筑艺术的巅峰，更是理解拉脱维亚被夹在德意志、俄罗斯与本土文化之间那段复杂历史的立体教科书。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`宫殿内部博物馆开放时间为每日10:00-18:00（10月至次年4月开放至17:00）。玫瑰园与法式花园从清晨开放至日落后一小时。宫殿每周一闭馆（花园除外），冬季（11月至3月）的开放时间可能缩短，具体需查阅官网。新年、圣诞节及部分拉脱维亚国家假日闭馆。`} />
              <InfoRow label="门票价格" value={`成人票：宫殿与花园联票约15欧元。仅花园票约5欧元。学生及长者享有优惠票价约12欧元。家庭套票（2大+2小）约30欧元。每周三下午（通常为14:00后）对拉脱维亚及欧盟学生免费。可在线预订，现场购票可能需要排队。`} />
              <InfoRow label="地址" value={`Rundāles pils, Rundāle, Rundāles pagasts, Bauskas novads, LV-3921, Latvia`} />
              <InfoRow label="交通方式" value={`从里加国际机场或里加市中心出发，最便捷的方式是自驾，沿A7/E67公路向南行驶约80公里，约1小时15分钟车程，宫殿外有免费停车场。公共交通可选择从里加中央巴士站乘坐前往包斯卡（Bauska）的巴士，班次频繁（约每小时一班，车程1.5小时），抵达包斯卡镇后换乘当地出租车前往宫殿（约10分钟车程）。也可乘坐从里加到叶尔加瓦的火车，再转乘出租车（不推荐，较周折）。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事得从一位雄心勃勃的德国公爵说起。18世纪中叶，库尔兰和瑟米加利亚公国（一个位于今天拉脱维亚西部、当时属于波兰立陶宛联邦附庸的小公国）的统治者恩斯特·约翰·冯·比隆，做了一个宏大的梦。他想要一座能与欧洲大陆那些伟大宫殿比肩的夏宫，来彰显自己的权力、财富与品味。这个在当时看来有些狂妄的想法，却因为一个人而变得可能——他就是巴尔托洛梅奥·拉斯特雷利，那位后来设计了圣彼得堡冬宫和叶卡捷琳娜宫的意大利裔天才建筑师。比隆公爵不惜重金，将他从俄国女皇的宫廷“借”了过来。于是，在这片当时还显得颇为偏僻的波罗的海乡野，一场奢华的艺术远征开始了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`从1736年到1740年，是伦达莱宫第一个如火如荼的建造期。拉斯特雷利带来了最前沿的巴洛克建筑设计，而内部那些令人眼花缭乱的洛可可装饰，则交给了另一位大师——来自柏林的雕刻家约翰·米夏埃尔·格拉夫。成千上万的工匠被聚集于此，从雕刻石膏花饰的意大利人，到铺设镶木地板的本地拉脱维亚农奴。宫殿的雏形迅速崛起，比隆公爵甚至已经迫不及待地开始在这里举办宴会。然而，政治风云变幻莫测。1740年，他的靠山、俄国女皇安娜·伊万诺夫娜去世，比隆本人也随之失势并被流放西伯利亚。这座未完成的宫殿就像被施了魔法，瞬间陷入沉睡。脚手架荒废了，大厅空无一人，只有风穿过未安装窗扇的窗洞，发出呜咽般的声响。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这一睡，就是整整二十四年。直到1764年，时运逆转，比隆公爵在叶卡捷琳娜二世女皇的支持下得以回归并恢复爵位。年迈的公爵归心似箭，他第一个想到的，就是完成自己年轻时的梦想。已经垂垂老矣的拉斯特雷利无法亲自前来，但他派出了自己最得力的助手。宫殿的建造再次启动，并且进入了最辉煌的内部装饰阶段。特别是那个被誉为波罗的海洛可可艺术极致的“金色大厅”和“白色大厅”，就是在这第二个建造期完成的。石膏玫瑰、镀金藤蔓、充满俏皮寓言的壁画……工匠们用尽一切华美的手段，将比隆公爵失而复得的荣耀与喜悦，永恒地凝固在了墙壁和天花板上。1779年，比隆公爵在这里去世，他人生的起落与这座宫殿的建造成为了不可分割的一体。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但宫殿的故事并未结束。比隆家族后裔在19世纪将宫殿卖给了俄罗斯的舒瓦洛夫家族。它经历了拿破仑战争的波及，在一战和二战中更是命运多舭。德军曾将其作为司令部，战后苏联时期，它一度被当作学校、甚至是一个谷物仓库。那些娇贵的镶木地板被拖拉机的履带碾过，华丽的壁画被无知地涂抹，家具和艺术品散失殆尽。它就像一位流落民间的贵族，衣衫褴褛，饱经风霜。直到1972年，在一批有识之士的极力推动下，它被确立为国家博物馆，一场长达数十年的、精细到毫米的“复活”手术才正式开始。工匠们依据古老的图纸和残存的碎片，一寸一寸地修复镀金，一片一片地重拼地板。今天的我们所能感受到的震撼，背后是几代拉脱维亚文物保护工作者近乎执拗的虔诚与热爱。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受伦达莱宫的日与夜、内与外，建议安排一整天的时间。最好在上午十点前抵达，这时旅游大巴还未涌入，花园沐浴在清新的晨光中。整个游览节奏应是“外-内-外”的循环：先用一个半小时沉浸在广阔的花园与玫瑰园里，享受宁静和拍照的黄金时间。随后进入宫殿内部，预留至少2-3小时，按照博物馆规划的历史路线（从底层到二楼）缓慢参观每一个展厅，重点厅室务必驻足细看。午餐可在宫殿咖啡馆解决。下午阳光西斜时，再次回到花园，这时光线为宫殿立面涂上金色，是拍摄外观的最佳时机。这样的安排能让你避开最高峰的人流，同时体验宫殿在不同光线下的双重魅力。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避开7-8月周末的下午，那是东欧旅游团最密集的时段，会严重影响在狭窄厅室内的观赏体验。宫殿内部分珍贵地板需要保护，可能会要求你穿上提供的软底鞋套，请务必配合。花园面积巨大且树荫有限，夏季游览请务必做好防晒并携带饮用水。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从宫殿西侧的法式花园入口进入，顺着沙沙作响的砾石小径走向远处的林荫道，感受这座“绿色宫殿”被晨露浸润的静谧与几何之美。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过修剪整齐的树篱迷宫，来到玫瑰园，让数百种玫瑰的馥郁香气成为你一天记忆的序章。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从花园的侧门进入宫殿底层，首先参观常设的“宫殿历史”展览，通过老照片和图纸了解它从荒芜到重生的惊人历程。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着宏伟的“荣誉阶梯”缓缓走上二楼，想象自己是一位应邀参加舞会的18世纪贵族，即将步入狂欢的核心。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在二楼的“金色大厅”中央驻足至少十分钟，抬头细看天花板上那幅巨大的寓言壁画，寻找代表爱情、艺术与权力的诸神形象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`接着走进相邻的“白色大厅”，对比洛可可风格中金碧辉煌与纯白优雅两种极致的表达，注意墙面上那些精致如蕾丝般的石膏浮雕。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探访公爵与公爵夫人的私人套房，从卧室、书房到画廊，在相对私密的空间里感受昔日主人的日常生活趣味。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，从正门走出，站在宫殿前宽阔的广场上回望，将这座历经沧桑却依然闪耀的建筑全景深深地刻入脑海。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`花园中心圆形喷泉后方`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光时分，以喷泉为前景，将宫殿宏大的巴洛克立面完整纳入镜头，能拍出最具对称美和空间纵深的经典画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`玫瑰厅（The Rose Room）的窗边`}</h4>
                  <p className="text-sm text-gray-700">{`上午光线从东窗射入时，站在房间对角线位置，捕捉阳光穿过窗棂，在布满玫瑰图案的鎏金墙面上投下美丽光影的瞬间。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`法式花园的林荫道尽头`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，站在最远处那条林荫道的终点，使用长焦镜头压缩空间，拍下宫殿建筑在笔直树廊构成的天然画框中如同海市蜃楼的景象。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`舞厅大阶梯的俯拍视角`}</h4>
                  <p className="text-sm text-gray-700">{`在获得工作人员允许且不影响他人的情况下，从楼梯上层平台向下拍摄，可以捕捉到楼梯华丽的铁艺栏杆曲线与下方来访者身影共同构成的生动画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`花园迷宫的空中视角`}</h4>
                  <p className="text-sm text-gray-700">{`如果你带有无人机（需提前确认当地法规并远离人群），在花园开放时间早期升空，能获得迷宫绿篱与宫殿全景完美结合的、独一无二的几何构图。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`宫殿内部绝大部分厅室严格禁止使用闪光灯和三脚架，高感光度相机或大光圈镜头在这里是必需品。拍摄花园时，请始终走在规定的小径上，切勿为了角度踩踏精心修剪的花圃和草坪，这是对园丁劳动最基本的尊重。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`田园诗意`}</h4>
                  <p className="text-sm text-blue-800">{`住在宫殿附近村庄由传统木屋改造的温馨民宿，清晨在鸡鸣和新鲜草料的气味中醒来，步行或骑上主人提供的自行车即可前往宫殿。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史沉浸`}</h4>
                  <p className="text-sm text-green-800">{`选择包斯卡镇上那座由19世纪商人宅邸改建的精品酒店，房间挑高很高，装饰着复古家具，晚上可以在镇上安静的街道散步，感受拉脱维亚小城的日常。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`庄园体验`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车半小时入住一座由真正贵族庄园改造的乡间酒店，在古老的橡树下享用晚餐，彻底沉浸在波罗的海地区独有的、略带忧郁的乡村贵族氛围里。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`便捷之选`}</h4>
                  <p className="text-sm text-purple-800">{`对于只停留一晚的旅人，里加老城提供了从青年旅舍到设计酒店的全谱系选择，晚上还能享受首都的餐厅和夜生活，次日再轻松往返宫殿。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`包斯卡镇上的住宿选择非常有限，旺季务必提前数月预订。如果选择住在里加，虽然需要每日通勤，但能享受到更丰富的餐饮和城市文化资源。拉脱维亚乡村治安很好，但夜间道路照明不足，自驾需格外小心。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开伦达莱宫很久以后，我脑子里反复回响的不是它有多华丽，而是它那种“孤独的坚持”。它孤零零地站在那片大平原上，远离任何现代城市的喧嚣，这种地理上的孤独，恰恰成了它时间感的放大器。你会觉得，它不是为了被瞻仰而存在的，它只是为了成为它自己——一座诞生于特定时代、特定野心，又经历了特定磨难，最终被特定一群人用心救活的艺术品。这种完整性，在今天这个被碎片化信息充斥的世界里，显得尤为珍贵。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，为什么要千里迢迢来看它？不仅仅是为了一张朋友圈里金碧辉煌的照片。更是为了来上一堂关于“脆弱与坚韧”的实体课。你看到战争和漠视如何轻易地摧毁美，你也看到人的热爱与执着又如何一点点地将美从尘埃中拼凑回来。伦达莱宫不是一个凝固的终点，它是一个依然在呼吸、在变化的过程。它告诉你，历史不是书本上冰冷的文字，而是你脚下吱呀作响的地板，是你指尖触碰到的冰凉鎏金，是花园里那棵看着宫殿建起、又看着它衰败、再看着它重生的老橡树。对于任何渴望触摸欧洲历史复杂肌理的旅人来说，这里不是捷径，而是一条值得你慢慢走、细细品的深巷，路的尽头，是超越时空的共鸣。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/cesis-old-town-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    采
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">采西斯古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cēsis Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/blenheim-palace" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布伦古堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Blenheim Palace</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kuldiga-old-town-waterfall" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    库
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">库尔迪加</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kuldīga</p>
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
