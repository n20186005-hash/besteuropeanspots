import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '利希滕施泰因城堡 Lichtenstein Castle｜悬挂在悬崖上的真实童话 - 最佳欧洲景点',
  description: '第一眼看到利希滕施泰因城堡，你会以为自己不小心走进了某本中世纪手抄本的插图里，或者格林兄弟的某则故事刚刚在此落幕。它不像那些盘踞在山顶、彰显权力的庞大要塞，而是以一种近乎不可能的姿态，轻盈又固执地“粘”在施瓦本汝拉山脉一处陡峭的悬崖边缘。你需要穿过一片墨绿色的山毛榉和冷杉林，空气里满是潮湿的苔藓和腐...',
}

export default function LichtensteinCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '德国', href: '/destinations/germany' },
            { label: '利希滕施泰因城堡', href: '/attractions/lichtenstein-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`利希滕施泰因城堡・Lichtenstein Castle・德国・巴登-符腾堡州，利希滕施泰因镇（靠近罗伊特林根市）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到利希滕施泰因城堡，你会以为自己不小心走进了某本中世纪手抄本的插图里，或者格林兄弟的某则故事刚刚在此落幕。它不像那些盘踞在山顶、彰显权力的庞大要塞，而是以一种近乎不可能的姿态，轻盈又固执地“粘”在施瓦本汝拉山脉一处陡峭的悬崖边缘。你需要穿过一片墨绿色的山毛榉和冷杉林，空气里满是潮湿的苔藓和腐殖土的气息，脚下是略湿滑的碎石小路。当你气喘吁吁地转过最后一个弯，豁然开朗——那座灰白色、带着无数尖顶和精致窗棂的城堡，就静静地悬在深渊之上，背景是无限延伸的绿色山谷和更远处层叠的淡蓝色山峦。那一刻，万籁俱寂，只有风穿过山谷的呜咽和远处隐约的鸟鸣。它太不真实了，像孩子们用积木精心搭出的梦境，一阵风就能吹走。
但走近了，你会感受到它的“人性”。这不是一座仅供远观的冰冷石堆。城堡脚下的斜坡上有小片草地，当地人周末会带着孩子来这里散步，狗儿在撒欢。城堡本身虽然是个博物馆，却依然保留着某种“家”的温度。你几乎能想象，在某个黄昏，城堡的主人会推开那扇窄窄的木窗，眺望他自己的王国。它的核心魅力正在于这种矛盾的混合体：既是遥不可及的浪漫象征，又带着一丝可亲近的、属于家园的烟火气。它矗立在那里，不是为了防御，而是为了证明——人类对“美”和“故事”的渴望，可以战胜地心引力和现实的平庸。
站在城堡唯一的入口，那座令人腿软的狭窄石桥前，你会彻底理解它的绰号“符腾堡的童话城堡”从何而来。桥下是令人眩晕的深谷，而桥的尽头，那扇厚重的橡木门背后，藏着另一个世纪。它最打动人心的地方，或许不是其建筑的宏伟（它其实很小），而是它诞生的初衷：一位公爵，因为太爱一本历史小说，于是决定把书中的幻想变成石头与 mortar 的现实。这是一座为“情怀”而建的城堡，在讲究实用主义的工业革命时代，显得如此天真又如此珍贵。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到利希滕施泰因城堡，你会以为自己不小心走进了某本中世纪手抄本的插图里，或者格林兄弟的某则故事刚刚在此落幕。它不像那些盘踞在山顶、彰显权力的庞大要塞，而是以一种近乎不可能的姿态，轻盈又固执地“粘”在施瓦本汝拉山脉一处陡峭的悬崖边缘。你需要穿过一片墨绿色的山毛榉和冷杉林，空气里满是潮湿的苔藓和腐殖土的气息，脚下是略湿滑的碎石小路。当你气喘吁吁地转过最后一个弯，豁然开朗——那座灰白色、带着无数尖顶和精致窗棂的城堡，就静静地悬在深渊之上，背景是无限延伸的绿色山谷和更远处层叠的淡蓝色山峦。那一刻，万籁俱寂，只有风穿过山谷的呜咽和远处隐约的鸟鸣。它太不真实了，像孩子们用积木精心搭出的梦境，一阵风就能吹走。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但走近了，你会感受到它的“人性”。这不是一座仅供远观的冰冷石堆。城堡脚下的斜坡上有小片草地，当地人周末会带着孩子来这里散步，狗儿在撒欢。城堡本身虽然是个博物馆，却依然保留着某种“家”的温度。你几乎能想象，在某个黄昏，城堡的主人会推开那扇窄窄的木窗，眺望他自己的王国。它的核心魅力正在于这种矛盾的混合体：既是遥不可及的浪漫象征，又带着一丝可亲近的、属于家园的烟火气。它矗立在那里，不是为了防御，而是为了证明——人类对“美”和“故事”的渴望，可以战胜地心引力和现实的平庸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`站在城堡唯一的入口，那座令人腿软的狭窄石桥前，你会彻底理解它的绰号“符腾堡的童话城堡”从何而来。桥下是令人眩晕的深谷，而桥的尽头，那扇厚重的橡木门背后，藏着另一个世纪。它最打动人心的地方，或许不是其建筑的宏伟（它其实很小），而是它诞生的初衷：一位公爵，因为太爱一本历史小说，于是决定把书中的幻想变成石头与 mortar 的现实。这是一座为“情怀”而建的城堡，在讲究实用主义的工业革命时代，显得如此天真又如此珍贵。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`利希滕施泰因城堡`} />
                <InfoRow label="英文名称" value={`Lichtenstein Castle`} />
                <InfoRow label="正式名称" value={`Schloss Lichtenstein`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`巴登-符腾堡州，利希滕施泰因镇（靠近罗伊特林根市）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座19世纪浪漫主义时期诞生的“童话城堡”，是符腾堡地区骑士精神与文学梦想的实体化象征。`} />
                <InfoRow label="建筑特色" value={`如同从悬崖岩石中生长出来一般，拥有极其纤细高耸的塔楼、尖顶和错落有致的建筑主体，完美契合其险峻的地势。`} />
                <InfoRow label="建筑风格" value={`新哥特式风格，是19世纪德国浪漫主义建筑复兴的典范之作。`} />
                <InfoRow label="文化价值" value={`其存在本身就是一部浪漫主义小说，连接着中世纪传说、19世纪贵族幻想与现代人的童话情结。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡内部导览游通常在每年4月至10月开放，具体时间为周二至周日的上午10点至下午4点半（最后入场时间）。冬季（11月至3月）仅周末开放或完全关闭进行维护，行程前务必查阅官网最新时间表。城堡庭院和外部区域全年开放参观。`} />
              <InfoRow label="门票价格" value={`城堡内部导览游（强制参加，德语讲解，提供英文手册）成人票约10欧元。仅参观庭院和外部区域票价约3欧元。学生、儿童及家庭票有相应折扣。门票通常在现场购买，旺季可能出现排队。`} />
              <InfoRow label="地址" value={`Schloss Lichtenstein 1, 72805 Lichtenstein, Germany`} />
              <InfoRow label="交通方式" value={`从最近的主要交通枢纽是斯图加特中央火车站。从斯图加特主站乘坐区域火车（RE或RB）前往罗伊特林根（Reutlingen）主站，车程约40-50分钟，班次频繁。抵达罗伊特林根后，换乘300路或7604路公共汽车至“Lichtenstein, Unterhausen”站，车程约25分钟。下车后，跟随路标步行约20-25分钟上山即可抵达城堡。自驾是最方便的方式，城堡山脚有收费停车场，之后需步行上山。购票建议使用斯图加特交通联盟（VVS）的天票，涵盖火车和巴士。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`利希滕施泰因城堡的故事，得从一块岩石和一本小说讲起。早在12世纪，这片悬崖上确实存在过一座名为“旧利希滕施泰因”的城堡，属于当地的骑士家族。但在中世纪无数的领地纠纷中，它被摧毁了，只剩下断壁残垣，逐渐被森林吞噬，变成了一个模糊的传说。时间快进到19世纪30年代，符腾堡王国的一位贵族，威廉伯爵（Wilhelm Graf von Württemberg），继承了这片包含悬崖和废墟的土地。他是一位典型的浪漫主义时代人物，热爱历史、艺术，并且痴迷于当时一位畅销作家威廉·豪夫（Wilhelm Hauf）的历史小说《利希滕施泰因》。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`豪夫的小说以这片地区为背景，讲述了16世纪一段充满骑士爱情与战争纠葛的传奇故事。威廉伯爵读得如痴如醉，书中那个与世隔绝、高贵英勇的骑士世界深深吸引了他。他看着自己领地里的那片废墟，一个大胆的、在当时看来极其奢侈的念头产生了：为什么不把小说里的世界，在它原本的“舞台”上重建出来呢？他不是要修复废墟，而是要创造一个新的、更完美的、符合浪漫主义审美的中世纪之梦。于是，在1840年至1842年，他聘请了建筑师卡尔·亚历山大·海德洛夫，开始了这项梦幻工程。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`建筑师没有采用厚重的罗马式风格，而是选择了当时最富浪漫色彩的新哥特式。设计充满了戏剧性：主塔楼纤细挺拔，仿佛要刺破天空；无数的凸窗、小尖塔和雉堞墙错落有致；城堡的主体紧紧依偎着悬崖，部分建筑甚至直接以岩壁为墙，营造出一种从石头里生长出来的错觉。内部装饰更是极尽华丽，彩色玻璃窗描绘着骑士传奇，大厅里悬挂着祖传的盔甲和武器，墙壁上覆盖着描绘历史场景的壁画。每一处细节，都是为了服务于那个“骑士梦”。城堡落成后，迅速成为德国浪漫主义路线上的一颗明珠，吸引了无数诗人和画家前来寻找灵感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，童话也有现实的章节。城堡在二战末期险些遭殃，幸运地躲过了战火。但岁月的侵蚀依旧无情，石料风化，木结构腐朽。直到20世纪末，城堡的现任主人——仍然是符腾堡家族的后裔——发起了一场大规模的、精密的修复工程。这次修复不是为了添加新的幻想，而是为了挽留旧的梦境。工人们用传统技艺一点一点地替换损坏的石雕，加固悬崖的地基，让这座150多岁的“年轻”古迹得以继续它悬于天际的使命。今天的城堡，一部分作为家族私宅，一部分作为博物馆向公众开放，它依然是一个活着的梦，一个家族用几代人来守护的、关于美与传承的执着信念。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完全领略这座悬崖城堡的魔力，建议安排至少半天时间。最佳抵达时间是工作日的上午开门时分（10点左右），可以避开周末拥挤的人潮和旅行团，享受相对清静的登山过程和拍照时机。整体游览节奏应是“慢热型”：先从山脚的宁静开始，逐步攀登，让期待感慢慢累积，在城堡内部沉浸于细节，最后在外部平台和下山路上回味。总耗时大约3-4小时，其中上山步行20-25分钟，城堡内部导览约30-40分钟，自由探索外部和拍照至少预留1小时，下山及在周边散步再留些时间。这样的安排能让你从远观到近玩，从外部环境到内部核心，层层深入地体验这个童话世界。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`内部导览游仅限德语，但提供的英文信息手册非常详尽，请务必领取并提前阅读以理解所见之物。登山小径在雨后可能湿滑，务必穿一双防滑舒适的徒步鞋。城堡内部空间狭小、楼梯陡峭，大件背包需寄存，行动不便者参观内部会非常困难。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从山脚停车场出发，沿着那条被高大树木荫蔽、铺着碎石的“哲学家小径”开始缓慢上山，聆听自己的脚步声和林间的鸟鸣。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在第一个观景台停下脚步回望，山谷像一幅缓缓展开的绿色画卷，而城堡还未现身，保持神秘。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当城堡突然从树梢后露出它标志性的尖塔时，找一块路边的石头坐下，好好端详这个如海市蜃楼般的初次亮相。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走过那座横跨深涧、令人心跳加速的狭窄石桥，触摸桥头古老而冰凉的石墩，正式进入童话的领地。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随导游穿过武器厅，让目光被那些闪闪发光的骑士盔甲、交叉陈列的古老长剑和墙上巨大的家族纹章挂毯所吸引。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在小小的礼拜堂里静立片刻，感受透过彩色玻璃洒下的、如同宝石碎片般的斑斓光影，以及那种与世隔绝的宁静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要走到城堡外侧的木质观景露台，紧紧抓住栏杆，体验身体悬空于百米深渊之上的刺激感，同时将无尽的山谷全景尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山时选择另一条略绕远的小路，从不同的角度回头仰望，你会发现城堡随着你的移动变换着姿态，每一次回眸都像在告别一个不同的故事。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡南侧远观点`}</h4>
                  <p className="text-sm text-gray-700">{`从上山主路径的中间段，有一处树木间隙形成的天然画框，下午的阳光会从侧面照亮城堡，能拍出它凌空欲飞、被森林环抱的经典全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`入口石桥侧拍`}</h4>
                  <p className="text-sm text-gray-700">{`不要只拍桥本身，站在桥头堡的阴影里，以桥体为引导线，将镜头对准桥尽头那扇厚重的木门和上方的纹章，营造一种“即将踏入秘境”的叙事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`骑士厅的盔甲特写`}</h4>
                  <p className="text-sm text-gray-700">{`利用室内昏暗的光线，聚焦于某一件雕刻精美的胸甲或头盔，将背景虚化成燃烧的壁炉或彩窗光影，捕捉中世纪骑士精神的细节灵魂。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`悬崖观景露台的低角度`}</h4>
                  <p className="text-sm text-gray-700">{`将相机贴近露台的木质栏杆拍摄，让栏杆成为前景，背景是令人眩晕的深谷和远山，能极致强化城堡的险峻地理位置。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`下山小径的回眸仰角`}</h4>
                  <p className="text-sm text-gray-700">{`在离开城堡较远的回头弯，用长焦镜头拉近城堡，此时它高踞崖顶，在蓝天衬托下显得尤为孤高与梦幻，适合作为游记的结尾照片。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`城堡内部严格禁止使用闪光灯和三脚架，为了保护脆弱的古董织物和壁画，请务必遵守。利用阴天柔和的光线拍摄城堡外部，反而能更好地表现石头纹理和浪漫氛围，避免正午强烈阳光下的生硬阴影。无人机飞行在此区域受到严格管制，未经许可是绝对不能起飞的。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济便捷之选`}</h4>
                  <p className="text-sm text-blue-800">{`罗伊特林根市中心火车站旁的现代设计酒店，交通枢纽位置，坐巴士去城堡就像坐公交车上班一样方便，晚上还能逛逛老城广场。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`沉浸自然体验`}</h4>
                  <p className="text-sm text-green-800">{`位于城堡所在山区森林中的家庭式公寓，打开窗户就是松涛声，房东会为你准备装有当地奶酪和面包的野餐篮，让你真正住进风景里。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特色历史民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`山下古镇里一座有300年历史的半木结构房屋改造的民宿，低矮的木梁、吱呀作响的地板和不疾不徐的老座钟，让你睡在施瓦本的传统里。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端奢华享受`}</h4>
                  <p className="text-sm text-purple-800">{`斯图加特市中心的五星级宫殿酒店，体验从现代都市的繁华到深山童话的静谧之间的巨大反差，返程后能在水疗中心放松徒步后的双腿。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果主要目标是深度探索城堡及周边山林，强烈建议住在罗伊特林根或更近的村镇，避免从斯图加特每日往返的耗时。山区夜晚非常安静，治安极好，但餐饮选择有限，预订含早餐的住宿是明智之举。旺季（夏季和秋季色彩斑斓时）的住宿非常紧俏，务必提前数月预订。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开利希滕施泰因城堡很久以后，脑海里挥之不去的，不是某个具体的房间或某件盔甲，而是那种整体的感觉——一种人类凭借热爱，在悬崖边小心翼翼守护住了一个梦的固执。在这个追求效率、规模和实用主义的时代，这样一座城堡的存在，本身就是一个温柔的“反叛”。它不产生巨大的经济效益，不具备重要的战略地位，它存在的全部理由，就是为了满足一个人、一个家族对“美”和“传奇”的向往，并把这种向往凝固成了石头，分享给每一个到访的人。这何其浪漫，又何其奢侈。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，它值得被列入一生必去的清单，不仅仅是为了一张Instagram上的惊艳照片，更是为了一次内心的校准。它提醒我们，在生活的现实维度之外，永远要为诗意和幻想保留一座“悬崖上的城堡”。当你穿过森林，仰头看见它的一刹那，你会相信童话不只是写给孩子的，也是写给所有未曾放弃仰望星空的成年人的。这座小小的、精致的城堡，像一颗钉在现实边缘的水晶，折射着我们内心对于不凡、对于故事、对于纯粹之美的永恒渴望。去拜访它吧，去确认自己心里那个孩子，还活着。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/schloss-stolberg-harz" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施托尔贝格城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Stolberg Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/thun-castle-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    图
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">图恩城堡与老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Thun Castle and Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/alpina-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔卑纳城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alpina Castle</p>
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
