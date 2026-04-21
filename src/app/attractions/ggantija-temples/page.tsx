import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '吉甘提亚神庙 Ġgantija Temples｜比埃及金字塔还要古老一千年的巨石神殿 - 最佳欧洲景点',
  description: '当你的脚步第一次踏上戈佐岛这片赭石色的土地，穿过沙拉镇那些刷着蜂蜜色墙漆的宁静小巷，吉甘提亚神庙并不会以你想象中的巍峨姿态突然出现。它更像是从大地本身生长出来的骨骼，低调、沉默，却带着一种压倒性的古老气息。首先映入你眼帘的，是那道令人瞠目结舌的巨石防护墙——一块块高达五米、重达数十吨的石灰岩，被某种',
}

export default function GgantijaTemplesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '马耳他', href: '/destinations/malta' },
            { label: '戈佐岛，沙拉镇', href: '/destinations/malta' },
            { label: '吉甘提亚神庙', href: '/attractions/ggantija-temples' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`吉甘提亚神庙・Ġgantija Temples・马耳他・戈佐岛，沙拉镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你的脚步第一次踏上戈佐岛这片赭石色的土地，穿过沙拉镇那些刷着蜂蜜色墙漆的宁静小巷，吉甘提亚神庙并不会以你想象中的巍峨姿态突然出现。它更像是从大地本身生长出来的骨骼，低调、沉默，却带着一种压倒性的古老气息。首先映入你眼帘的，是那道令人瞠目结舌的巨石防护墙——一块块高达五米、重达数十吨的石灰岩，被某种早已失传的智慧严丝合缝地垒在一起，没有使用任何灰浆。你的手指忍不住会去触碰那些粗糙的、被五千多年风雨和海风侵蚀出无数孔洞的石面，触感冰凉而坚实，时间在这里留下了如同海浪般的纹理。
空气中弥漫着戈佐岛特有的气味：干热的泥土味，混杂着野生茴香和远处田地中百里香的辛香。除了偶尔掠过头顶的鸣禽和风吹过橄榄树林的沙沙声，这里安静得能听见自己的心跳。站在这圈巨石围墙之外，你会突然感到一种奇特的疏离与亲近并存的感觉——疏离是因为，创造这一切的人们，他们的语言、名字和具体样貌，早已消散在历史的长河中，我们与他们隔着一道无法跨越的鸿沟；亲近则是因为，这些石头本身，它们承受阳光的角度，它们投下的深邃阴影，却以一种最原始的方式，直接与你的感官对话。
在当地人的心中，吉甘提亚不仅仅是一个旅游景点或考古遗址。它的马耳他语名字“Ġgantija”意为“巨人之塔”，早已融入岛上的民间传说和身份认同之中。老人们会告诉你，这些石头是由一位只吃蚕豆和蜂蜜的巨人女祭司一手建造的，她还将她的婴儿扛在肩上。这种将超凡功绩归于神话传说的方式，恰恰说明了它在戈佐岛文化基因中的根深蒂固。每年夏天的传统节日里，这里依然是社区活动的背景。它最打动人心的地方，就在于这种“活着的古老”——它不是博物馆里被玻璃罩起来的标本，而是依然扎根于社区生活、与当地人的想象力和日常风景交织在一起的、有温度的历史丰碑。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当你的脚步第一次踏上戈佐岛这片赭石色的土地，穿过沙拉镇那些刷着蜂蜜色墙漆的宁静小巷，吉甘提亚神庙并不会以你想象中的巍峨姿态突然出现。它更像是从大地本身生长出来的骨骼，低调、沉默，却带着一种压倒性的古老气息。首先映入你眼帘的，是那道令人瞠目结舌的巨石防护墙——一块块高达五米、重达数十吨的石灰岩，被某种早已失传的智慧严丝合缝地垒在一起，没有使用任何灰浆。你的手指忍不住会去触碰那些粗糙的、被五千多年风雨和海风侵蚀出无数孔洞的石面，触感冰凉而坚实，时间在这里留下了如同海浪般的纹理。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "空气中弥漫着戈佐岛特有的气味：干热的泥土味，混杂着野生茴香和远处田地中百里香的辛香。除了偶尔掠过头顶的鸣禽和风吹过橄榄树林的沙沙声，这里安静得能听见自己的心跳。站在这圈巨石围墙之外，你会突然感到一种奇特的疏离与亲近并存的感觉——疏离是因为，创造这一切的人们，他们的语言、名字和具体样貌，早已消散在历史的长河中，我们与他们隔着一道无法跨越的鸿沟；亲近则是因为，这些石头本身，它们承受阳光的角度，它们投下的深邃阴影，却以一种最原始的方式，直接与你的感官对话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当地人的心中，吉甘提亚不仅仅是一个旅游景点或考古遗址。它的马耳他语名字“Ġgantija”意为“巨人之塔”，早已融入岛上的民间传说和身份认同之中。老人们会告诉你，这些石头是由一位只吃蚕豆和蜂蜜的巨人女祭司一手建造的，她还将她的婴儿扛在肩上。这种将超凡功绩归于神话传说的方式，恰恰说明了它在戈佐岛文化基因中的根深蒂固。每年夏天的传统节日里，这里依然是社区活动的背景。它最打动人心的地方，就在于这种“活着的古老”——它不是博物馆里被玻璃罩起来的标本，而是依然扎根于社区生活、与当地人的想象力和日常风景交织在一起的、有温度的历史丰碑。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`吉甘提亚神庙`} />
                <InfoRow label="英文名称" value={`Ġgantija Temples`} />
                <InfoRow label="正式名称" value={`Ġgantija Temples`} />
                <InfoRow label="国家" value={`马耳他`} />
                <InfoRow label="城市" value={`戈佐岛，沙拉镇`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是地球上现存最古老的独立石制建筑之一，比英国巨石阵和埃及吉萨金字塔群还要早约一千年。`} />
                <InfoRow label="建筑特色" value={`由巨大的、未经雕琢的石灰岩石板精密堆砌而成的双庙宇复合体，外围是一道令人惊叹的、由巨石块垒成的椭圆形防护墙。`} />
                <InfoRow label="建筑风格" value={`马耳他群岛独特的新石器时代寺庙建筑风格，以巨大的珊瑚石灰岩块和半椭圆形的多室设计为标志。`} />
                <InfoRow label="文化价值" value={`见证了距今约5600年前，新石器时代人类非凡的工程能力、社会组织形态和复杂的精神信仰生活，是理解地中海史前文明的独一无二的钥匙。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`每日上午9:00至下午17:00开放，最后入场时间为下午16:30。请注意，全年开放时间可能因季节微调，圣诞节、元旦及耶稣受难日会闭馆。夏季（6月至9月）有时会延长开放至傍晚，建议出行前在官网确认最新时间。`} />
              <InfoRow label="门票价格" value={`成人票：10欧元；青少年（12-17岁）、学生及60岁以上长者：7.5欧元；儿童（6-11岁）：5.5欧元；6岁以下儿童免费。家庭票（2成人+2儿童）为25欧元。门票包含进入神庙遗址及旁边全新的沉浸式访客中心。建议购买马耳他遗产通票（Heritage Malta Multisite Pass），可划算地游览多个古迹。`} />
              <InfoRow label="地址" value={`Ġgantija Temples, John Otto Bayer Street, Xagħra, Gozo, XRA 1041, Malta`} />
              <InfoRow label="交通方式" value={`从马耳他国际机场（MLA）出发：首先乘坐出租车或预付费巴士（约30分钟）抵达马耳他主岛的Ċirkewwa渡轮码头。搭乘前往戈佐岛Mgarr港的公共渡轮（班次频繁，约每45分钟一班，航程25分钟，行人票价约4.65欧元往返）。抵达Mgarr港后，最佳方式是搭乘当地的307路公共巴士，直接前往Xagħra村的Ġgantija站，车程约20分钟。也可以选择在码头乘坐出租车或租赁一辆小汽车/四轮摩托车，更有助于灵活探索戈佐全岛。整个行程从机场到神庙门口，预留至少2.5小时较为稳妥。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "让我们把时钟拨回到公元前3600年左右，那是属于新石器时代晚期的遥远岁月。在地中海的这座小岛上，没有金属工具，没有驮畜，甚至没有可以轻松滚动的木轮（当时的马耳他群岛可能没有大型树木）。那么，这群人是如何完成这项看似不可能的任务的呢？考古学家们推测，他们利用圆木和绳索作为杠杆与滚轴，依靠纯粹的人力、协作和对物理原理的直觉理解，从几公里外的采石场，将一块块庞然巨石拖运到这片高地。这不仅仅需要强壮的身体，更需要高度的社会组织能力、统一的信仰和代代相传的工程技术。每一块石头被安放的位置，都凝聚着一个社群数十乃至上百年的集体意志。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座神庙并非一次性建成，它是由南庙和北庙两座结构组成，北庙年代更早。它们的设计遵循着马耳他史前神庙经典的“三叶草”或“首尾相接的椭圆”布局。通过矮小的石板门洞进入内部，你会发现自己身处一系列半圆形的房间，考古学家称之为“壁龛”。这些房间由巨大的石板横跨作为屋顶（其中一些至今犹存），中央房间通常设有祭坛和曾经用于焚烧供奉物的凹坑。最引人遐想的是发现于此处的一些陶制女性雕像残片和丰满的“母神”形象，强烈暗示这里是一个丰产崇拜和祭祀祖先的中心。人们在这里举行仪式，祈求土地的肥沃、家族的繁衍和与祖先世界的沟通。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，大约在公元前2500年，这座繁荣了超过千年的神庙文化突然神秘地衰落了。吉甘提亚与其他马耳他神庙一样，被逐渐废弃。原因成谜，可能是资源枯竭、气候变化、社会动荡或外部入侵。在随后的青铜时代，这里偶尔仍被用作火葬场所，但昔日神圣的光辉已然褪去。巨石被尘土和植被慢慢掩埋，关于它的记忆逐渐蜕变成“巨人建造”的乡野奇谈。直到19世纪早期，当地的农民在耕作时还常常把这些巨大的石块视为碍事的障碍。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转折点发生在1827年，当时的戈佐岛总督，一位对古迹感兴趣的军官，组织人力清除了堆积的泥土和碎石，让这座沉睡的巨人首次以相对完整的面貌重现于世。当时的发掘方式在今天看来相当粗糙，但它的发现依然震撼了欧洲考古界。20世纪持续的、更科学的考古工作，逐步厘清了它的建筑序列和文化层。1964年马耳他独立后，吉甘提亚作为国家身份的象征得到了精心保护。1980年，它成为联合国教科文组织世界遗产“马耳他巨石庙”中的第一个入选遗址。今天，那座新建的、线条流畅的访客中心，用现代多媒体技术讲述古老的故事，像一座桥梁，小心翼翼地连接着远古的智慧与当代好奇的目光。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正感受吉甘提亚的魔力，我强烈建议你留出至少半天的时间，并尽可能在早上9点开门时就抵达。清晨的阳光角度较低，能将巨石的轮廓勾勒得格外清晰立体，气温也最为舒适，更能享受遗址的宁静。整体的深度游览可以安排3到4小时。理想的节奏是：先花45分钟到1小时在全新的访客中心里沉浸式学习背景知识，让那些动画和模型在你心里“预热”这段历史。然后，带着初步的理解和期待，步入真实的遗址区域，进行大约1.5到2小时的慢速探索，不放过每一个角落和细节。最后，留出一些时间在遗址外的橄榄树和仙人掌丛中散散步，从不同距离和角度回望它，让震撼慢慢沉淀。这样的安排能让你从知识到感官，完成一次对这座史前圣殿的完整“朝圣”。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`戈佐岛夏季阳光非常强烈且缺乏遮阴，遗址虽有顶棚但步行区域多暴晒，务必携带充足的水、太阳帽、墨镜并涂抹高倍数防晒霜。请务必穿着舒适、防滑的封闭式鞋子，因为遗址内的地面是原始石板和土路，不平整且可能有小碎石。尽量避开中午11点至下午3点的最热时段参观，如果只能这个时间来，务必做好防暑降温准备。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`先在极具设计感的访客中心里花些时间，通过那些生动的全息投影和出土文物复制品，让自己回到五千年前的新石器时代戈佐岛。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从中心出口沿着一条小径缓缓走向遗址，第一眼就看到那道标志性的、曲线优美的巨大外墙在蓝天下的剪影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过现代的防护棚架入口，亲手触摸那冰凉粗糙的巨石门槛，低头弯腰进入低矮的门洞，体验古代祭祀者进入圣域时的物理感受。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在北庙最深处的“主室”中央静静站一会儿，观察地面石板上的祭祀凹坑和墙壁上古老的螺旋纹路刻痕，想象当年仪式中的烟火与吟唱。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到南庙区域，抬头仔细观察那些横跨在墙壁之上、重达数吨的硕大过梁石板，惊叹于它们是如何被精准架设并屹立千年的。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从神庙后方绕出，爬上旁边略高的观景土坡，从这里可以获得一个绝佳的视角，俯瞰整个双庙宇布局与远处戈佐岛起伏的田园风光。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开核心保护区后，别急着走，在遗址周边的古老橄榄园和仙人掌篱笆间随意漫步，感受神庙与当地乡村景观浑然一体的和谐。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后回到访客中心的礼品店，带一本详细的考古指南或一件设计精美的母神符号纪念品，为这次时空之旅画上一个有形的句号。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`神庙东南侧的外墙全景`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点后，阳光从西侧斜射，能在巨大的石灰岩墙壁上投下深邃而富有戏剧性的阴影，用广角镜头贴近地面仰拍，能极致夸张巨石的体量感与人的渺小。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`南庙内部过梁之下`}</h4>
                  <p className="text-sm text-gray-700">{`选择正午时分进入，此时阳光直射，穿过顶棚的缝隙在神庙内部形成强烈的明暗对比，站在一个壁龛内向外拍摄过梁和门洞的剪影框架构图，照片会充满神秘感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`访客中心通往遗址的小径拐角`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，站在小径上以路径作为引导线，将远处沐浴在金红色光芒中的神庙废墟作为焦点，拍摄出具有强烈叙事感和纵深感的风景照片。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`戈佐岛乡村背景视角`}</h4>
                  <p className="text-sm text-gray-700">{`从神庙西侧的公共道路或田野边，使用长焦镜头压缩空间，将古老的巨石墙与前景的当地农舍、仙人掌或牧羊人身影同框，捕捉历史与当下生活的生动叠影。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`出于保护目的，无人机飞行在遗址上空通常是严格禁止的，请务必遵守规定。拍摄时请尽量使用自然光，避免使用闪光灯，特别是对着那些脆弱的刻痕石面。如果想拍摄星空下的神庙，需要事先向遗产管理部门申请特殊许可，且只能在外围指定区域进行。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`乡村石屋民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在沙拉镇中心由三百年历史老宅改造的民宿里，清晨在开满天竺葵的石头阳台上享用房东准备的戈佐特色奶酪和番茄早餐，步行十分钟即可抵达神庙。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`精品设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`选择坐落在戈佐岛北部悬崖附近的精品酒店，房间拥有极简的线条和直面地中海的无限泳池，在经历了古老的震撼后，回到现代主义的宁静中消化一天的思绪。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`农场客栈体验`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻在神庙附近一个家庭经营的有机农庄，晚上在挂满葡萄藤的院子里品尝自家酿造的葡萄酒，白天还能参与喂食小羊或采摘时令蔬果的活动，深度融入戈佐乡村生活。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济便捷旅馆`}</h4>
                  <p className="text-sm text-purple-800">{`位于戈佐岛首府维多利亚城内的舒适旅馆，价格亲民，交通枢纽位置方便你搭乘巴士前往岛上的各个景点，夜晚还能融入当地人的街头咖啡馆生活。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "戈佐岛的住宿规模都不大，尤其是在沙拉镇这样的村庄，夏季（6-9月）和周末非常紧俏，务必提前数月预订才能心仪之选。岛上的治安非常好，民风淳朴，夜晚独自在乡间小路上行走也感到安全。考虑到戈佐岛的公共交通班次间隔较长，如果预算允许，强烈建议在岛上租一辆小汽车或四轮摩托车，这将极大提升你探索吉甘提亚及岛上其他隐秘海滩、盐田和城堡的自由度与深度。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开吉甘提亚很久之后，那圈沉默巨石的影像依然会不时浮现在脑海里。它带给我的触动，并非一般古迹那种对精美艺术或恢弘权力的赞叹，而是一种更根本、更接近于“敬畏”的体验。在这里，你面对的是人类作为一个物种，在文明刚刚破晓时，所展现出的那种集体协作的雄心、与自然力量对话的勇气，以及对生死和宇宙秩序进行思索的最初渴望。这些石头没有讲述具体国王的功绩，它们讲述的是“我们”——人类共同的故事起点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个一切都追求“新”和“快”的时代，吉甘提亚像一座屹立在时间洪流中的坚固岛屿。它提醒我们，有些价值——比如社区的力量、对自然的敬畏、对超越性存在的追求——是亘古不变的。它告诉我们，真正的伟大，有时就藏在最简单、最沉重的石头排列之中。每一位热爱深度游的旅人，都应该来此站一站。这不仅仅是为了看一个“世界之最”的景点，更是为了完成一次时间的丈量。站在比金字塔还古老的石头面前，你会重新感知自己在时间长河中的位置，那种渺小与连接感并存的奇妙觉悟，将是任何教科书都无法给予你的、最珍贵的旅行礼物。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/salt-pans-of-xwejni" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    戈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">戈佐岛盐田</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Salt Pans of Xwejni</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/fort-st-angelo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣安杰洛堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Fort St. Angelo</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cittadella-citadel-gozo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维多利亚城堡（戈佐岛城堡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cittadella</p>
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
