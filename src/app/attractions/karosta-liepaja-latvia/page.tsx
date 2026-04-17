import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡罗斯塔 Karosta｜探秘波罗的海沙皇的秘密军港与命运交响的教堂废墟 - 最佳欧洲景点',
  description: '朋友，想象一下，当你穿过那座通体锈红、仅容单车通过的机械升降桥——水兵桥，就像穿过了一道时间阀门。刹那间，喧嚣的利耶帕亚市区被抛在身后，眼前展开的是一个色调完全不同的世界：铅灰色的天空低垂，连接着更加铅灰色的波罗的海。空气里是咸涩的海风，混杂着金属锈蚀和潮湿混凝土的独特气味。道路两旁，是成排成排巨大...',
}

export default function KarostaLiepajaLatviaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '卡罗斯塔', href: '/attractions/karosta-liepaja-latvia' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卡罗斯塔・Karosta・拉脱维亚・利耶帕亚`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，当你穿过那座通体锈红、仅容单车通过的机械升降桥——水兵桥，就像穿过了一道时间阀门。刹那间，喧嚣的利耶帕亚市区被抛在身后，眼前展开的是一个色调完全不同的世界：铅灰色的天空低垂，连接着更加铅灰色的波罗的海。空气里是咸涩的海风，混杂着金属锈蚀和潮湿混凝土的独特气味。道路两旁，是成排成排巨大、方正、沉默的黄色三层楼营房，窗户大多空洞，像无数只失明的眼睛望着你。这里安静得吓人，只有乌鸦的叫声和海浪拍打废弃防波堤的单调回响。
这里就是卡罗斯塔，“战争港口”。它不像那些精心打扮的旅游区，它把自己最真实、最破碎的一面毫无保留地袒露给你。走在空旷的街道上，你会感到一种奇特的抽离感。巨大的空间感和稀少的行人（偶尔能看到遛狗的当地居民，他们的神态有一种习以为常的平静）形成了强烈对比。你能清晰地听见自己的脚步声在建筑间回荡。这不是一个“景点”，这是一个依然在呼吸的社区，只不过它的心跳缓慢而沉重，每一记都敲打着历史的回音壁。
而这一切的视觉和情绪高潮，是那座圣尼古拉东正教海军大教堂的废墟。它庞大、残缺的躯壳突兀地矗立在一片空地中央，没有穹顶，没有完整的墙壁，只剩下几道巨大的砖石拱券和廊柱，倔强地刺向天空。走进内部（如果那还能被称为内部），野草从地板的裂缝中钻出， graffiti点缀着斑驳的墙皮。当午后的阳光透过那些空荡荡的拱窗斜射进来，在破碎的地面上投下长长的、不断移动的光影时，那种震撼无法用语言形容。它不像巴黎圣母院那样是“烧毁的悲剧”，它更像一个从未出生便已夭折的巨人梦境，一个被时代巨轮反复碾过、最终被遗弃的信仰象征。
这里的核心魅力，正是这种不加修饰的“真实”。没有咖啡厅，没有纪念品商店，甚至没有太多的指示牌。你被迫用自己的感官去触摸历史粗糙的肌理，用想象力去填充眼前的空白。它逼迫你思考：帝国的野心、战争的耗费、信仰的起落，最终都化为了海风中的这一片萧瑟。这里的美，是一种带着痛感的、苍凉而深刻的美，只留给那些愿意慢下来，并与之沉默对话的旅人。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，想象一下，当你穿过那座通体锈红、仅容单车通过的机械升降桥——水兵桥，就像穿过了一道时间阀门。刹那间，喧嚣的利耶帕亚市区被抛在身后，眼前展开的是一个色调完全不同的世界：铅灰色的天空低垂，连接着更加铅灰色的波罗的海。空气里是咸涩的海风，混杂着金属锈蚀和潮湿混凝土的独特气味。道路两旁，是成排成排巨大、方正、沉默的黄色三层楼营房，窗户大多空洞，像无数只失明的眼睛望着你。这里安静得吓人，只有乌鸦的叫声和海浪拍打废弃防波堤的单调回响。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里就是卡罗斯塔，“战争港口”。它不像那些精心打扮的旅游区，它把自己最真实、最破碎的一面毫无保留地袒露给你。走在空旷的街道上，你会感到一种奇特的抽离感。巨大的空间感和稀少的行人（偶尔能看到遛狗的当地居民，他们的神态有一种习以为常的平静）形成了强烈对比。你能清晰地听见自己的脚步声在建筑间回荡。这不是一个“景点”，这是一个依然在呼吸的社区，只不过它的心跳缓慢而沉重，每一记都敲打着历史的回音壁。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而这一切的视觉和情绪高潮，是那座圣尼古拉东正教海军大教堂的废墟。它庞大、残缺的躯壳突兀地矗立在一片空地中央，没有穹顶，没有完整的墙壁，只剩下几道巨大的砖石拱券和廊柱，倔强地刺向天空。走进内部（如果那还能被称为内部），野草从地板的裂缝中钻出， graffiti点缀着斑驳的墙皮。当午后的阳光透过那些空荡荡的拱窗斜射进来，在破碎的地面上投下长长的、不断移动的光影时，那种震撼无法用语言形容。它不像巴黎圣母院那样是“烧毁的悲剧”，它更像一个从未出生便已夭折的巨人梦境，一个被时代巨轮反复碾过、最终被遗弃的信仰象征。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里的核心魅力，正是这种不加修饰的“真实”。没有咖啡厅，没有纪念品商店，甚至没有太多的指示牌。你被迫用自己的感官去触摸历史粗糙的肌理，用想象力去填充眼前的空白。它逼迫你思考：帝国的野心、战争的耗费、信仰的起落，最终都化为了海风中的这一片萧瑟。这里的美，是一种带着痛感的、苍凉而深刻的美，只留给那些愿意慢下来，并与之沉默对话的旅人。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卡罗斯塔`} />
                <InfoRow label="英文名称" value={`Karosta`} />
                <InfoRow label="正式名称" value={`利耶帕亚卡罗斯塔（沙皇秘密海军基地及圣尼古拉东正教海军大教堂废墟）`} />
                <InfoRow label="国家" value={`拉脱维亚`} />
                <InfoRow label="城市" value={`利耶帕亚`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`沙皇俄国在波罗的海最西端建造的秘密海军堡垒与军港，见证了沙俄、苏联及独立拉脱维亚的百年军事风云。`} />
                <InfoRow label="建筑特色" value={`庞大、冷酷且规划严整的军事功能主义建筑群，与一座未完工即被摧毁的宏伟东正教大教堂废墟形成强烈而荒诞的对比。`} />
                <InfoRow label="建筑风格" value={`折衷主义，融合了沙俄晚期军事建筑的实用坚固与未完成的新拜占庭风格教堂的悲壮轮廓。`} />
                <InfoRow label="文化价值" value={`一座无需修复的露天历史纪念碑，以破碎和锈蚀的姿态，诉说着帝国野心、战争创伤与时间力量，是理解波罗的海地区20世纪动荡历史的独特钥匙。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`户外区域及建筑废墟全天开放；部分室内展览（如卡罗斯塔监狱博物馆、水兵桥）开放时间为每年5月至9月，每日10:00-18:00；10月至次年4月，周末及节假日开放，或仅接受预约参观。冬季（11月至3月）因波罗的海恶劣天气及冰雪，部分海岸区域访问受限。`} />
              <InfoRow label="门票价格" value={`进入卡罗斯塔街区免费。卡罗斯塔监狱博物馆门票：成人7欧元，学生及长者5欧元，家庭票（2大2小）18欧元。水兵桥（Kara ostas tilts）可免费步行通过。参加由当地导游带领的“秘密卡罗斯塔”主题徒步游约15-25欧元/人。`} />
              <InfoRow label="地址" value={`Karosta, Liepāja, LV-3414, Latvia`} />
              <InfoRow label="交通方式" value={`从里加出发（最常用）：在里加中央汽车站（Autoosta）乘坐前往利耶帕亚的长途巴士，班次频繁，约每1-2小时一班，车程3-3.5小时，票价约10-15欧元。抵达利耶帕亚主汽车站后，换乘市内7路或8路公交车至“Karosta”终点站，约20分钟。
从利耶帕亚国际机场出发：机场较小，航班有限。抵达后可乘坐出租车前往卡罗斯塔，约15分钟车程。
自驾：从利耶帕亚市中心沿K. Valdemāra iela向北，穿过运河上的水兵桥即达，有免费路边停车位。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从19世纪末讲起。当时的沙皇亚历山大三世，盯着地图上波罗的海的软腹部，深感需要一个不冻港来保护帝国的西大门。他的目光锁定了利耶帕亚。于是，一项宏大的秘密工程启动了。从1890年开始，成千上万的工人——其中不乏流放犯——被送到这里。他们挖通了连接湖泊与海洋的运河，用无数吨混凝土和钢铁，筑起了庞大的防波堤、干船坞、潜艇洞库、兵营和军官别墅。整整一片功能齐全、自给自足的秘密海军城在荒凉的海岸上拔地而起，并被赋予了“卡罗斯塔”这个直白而硬核的名字。沙皇的工程师们设想，这里将成为俄国波罗的海舰队最坚固的堡垒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`与军事野心相伴的，是精神的寄托。为了给驻扎在此的东正教海军官兵提供心灵归宿，1901年，一座宏伟的圣尼古拉东正教海军大教堂开始动工。设计极尽华丽，计划拥有五个巨大的洋葱头穹顶，足以容纳两千名信徒。建造过程缓慢而艰巨，砖石一块块垒起，帝国的黄金源源不断地投入。然而，历史的车轮从不等人。1914年，一战炮火打断了这一切。工程被迫停止，大教堂永远停留在了未完工的躯壳状态。更富戏剧性的是，沙俄帝国自己也在革命的洪流中崩塌了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`一战后，新独立的拉脱维亚接手了卡罗斯塔。但平静是短暂的。二战期间，这里先后被苏联和纳粹德国占领，成了兵家必争之地。坚固的工事见证了惨烈的拉锯战。战后，它再次落入苏联手中，并迎来了它作为军事基地的“第二春”。苏联红海军进驻，那些沙皇时代的营房再次住满了士兵，港口停泊着潜艇。卡罗斯塔成了苏联在波罗的海沿岸最重要的海军基地之一，一个对外封闭的“城中城”。高高的铁丝网将它与利耶帕亚市民的生活彻底隔绝，充满了神秘与压抑的气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`苏联时代的卡罗斯塔，不仅是军事堡垒，也是惩罚之地。那座著名的卡罗斯塔监狱，最初由沙俄建造，在苏联时期被“发扬光大”，用于关押逃兵和违纪士兵。阴冷潮湿的牢房、狭窄的禁闭室，成了无数年轻士兵的噩梦。如今它作为博物馆开放，当你走进那些地下室，触摸墙上囚徒刻下的痕迹，依然能感到刺骨的寒意。而那座未完工的大教堂，在无神论的苏联时代，命运更加凄惨。它被部分拆毁，砖石被挪作他用，剩下的骨架在风吹雨打中日益残破，像一个被刻意遗忘的旧时代伤疤。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机发生在1990年代。随着苏联解体，拉脱维亚重获独立。俄军最终在1994年完全撤出，留下了这座被掏空、遗弃的庞大军事城镇。最初是破败与混乱，许多建筑被洗劫一空。但拉脱维亚人没有选择将它彻底推平。慢慢地，艺术家、先锋人士和普通家庭搬了进来，以极低的价格住进那些历史感十足的营房。他们开始用自己的方式活化这里：举办艺术展览、音乐节，将监狱变成体验式博物馆，让教堂废墟成为露天剧场。卡罗斯塔没有“重生”为光鲜的模样，而是在衰败中长出了野草般的、顽强的生命力，完成了从帝国堡垒到承载复杂记忆的活态社区的惊人蜕变。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天（6-8小时）给卡罗斯塔。最佳抵达时间是上午10点前，那时的光线清冷，氛围感最强，游客也最少。从水兵桥开始你的旅程，这座桥本身就是卡罗斯塔的仪式性入口。然后深入街区，感受日常生活与历史遗迹的并存，最后以震撼的大教堂废墟作为高潮。下午可以参观监狱博物馆，需要一些心理准备。整体节奏宜慢不宜快，多留时间发呆、观察和想象。记得带上午餐和水，因为区域内餐饮选择极少。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿着舒适耐磨的鞋子，很多地方是碎石路和杂草丛生的荒地。
保持对当地居民的尊重，这里是他们的家，不要擅闯标有私人住宅标识的院落或对着居民窗户长时间拍照。
冬季来访要格外注意防风保暖，波罗的海沿岸的寒风非常刺骨，部分小路可能结冰湿滑。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨走过那座吱呀作响、锈迹斑斑的机械式水兵桥，感受脚下运河分开军事区与民用区的仪式感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主干道漫步，仔细观察道路两旁那些庞大、千篇一律却又各不相同的黄色砖石营房，想象不同时代的士兵在此进出的画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拐入安静的住宅小巷，可能会遇到在自家小花园里劳作的老居民，试着用眼神或简单的问候与他们进行无声的交流。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到波罗的海岸边，站在巨大的混凝土防波堤上，让猛烈的海风吹拂脸庞，眺望无尽灰蓝的海平面和那些半淹没在水中的废弃码头结构。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探访核心地标——圣尼古拉东正教海军大教堂废墟，花至少一小时绕着它走圈，从不同角度仰望，并走进其内部感受光影在残垣断壁间的舞蹈。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观卡罗斯塔监狱博物馆，在阴冷的牢房和走廊里聆听那段关于恐惧与纪律的往事，触碰历史的冰冷质地。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间允许，寻找那些散落各处的秘密细节：墙上的苏联时代马赛克壁画、被改成艺术家工作室的旧锅炉房、或是隐藏在灌木丛中的碉堡入口。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在黄昏时分回到水兵桥附近，看着夕阳给所有锈蚀的金属和斑驳的墙面镀上一层悲壮的暖金色，结束这次时空穿梭之旅。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`水兵桥全景`}</h4>
                  <p className="text-sm text-gray-700">{`站在运河北岸（卡罗斯塔一侧）的路口，使用广角镜头，将锈红色的机械桥体、运河以及对岸的普通民居一同纳入画面，最佳时间是下午侧光时，金属质感最强。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣尼古拉大教堂废墟内部框架`}</h4>
                  <p className="text-sm text-gray-700">{`站在废墟中央，抬头仰拍那些交织的砖石拱券，以天空为背景，构图力求简洁有力，正午时分天空最亮，能拍出高对比度的剪影效果。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`海边混凝土废墟与海`}</h4>
                  <p className="text-sm text-gray-700">{`从防波堤走向那些伸入海中的废弃码头墩台，以其中一个巨大的、布满黑色胎痕的墩台作为前景，拍摄远方灰蒙蒙的海天一线，阴天更能烘托寂寥氛围。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`营房街道纵深感`}</h4>
                  <p className="text-sm text-gray-700">{`选择一条两侧营房建筑对称的笔直街道（如Tirgus iela），站在路中央，利用长焦镜头压缩空间，捕捉道路无限延伸、建筑重复的强烈秩序感和压迫感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`细节特写`}</h4>
                  <p className="text-sm text-gray-700">{`聚焦于某个剥落的墙面、一扇被封死的窗户上的涂鸦、或地上的一块刻有 Cyrillic字母的砖石，用微距或中焦段捕捉历史磨损的质感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`这里非常适合黑白摄影，能极大强化建筑的几何感、纹理和苍凉情绪。`}</li>
                <li>• {`无人机飞行需极度谨慎，部分地区可能仍存在敏感遗留（虽可能性极低），且常年海风强劲，最稳妥的是在开阔海岸边短时间升空拍摄大场景。`}</li>
                <li>• {`尊重此地氛围，避免拍摄轻佻或过于欢快的摆拍人像，与环境情绪协调的沉思、漫步背影会更出片。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸体验之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在由前苏联军官公寓改造的“Karosta Hostel”，房间保留了当年的格局甚至部分家具，公用厨房能遇到来自世界各地的背包客，晚上听管理员讲述鬼故事是传统节目。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`艺术气息住所`}</h4>
                  <p className="text-sm text-green-800">{`“Kanepes Kulturas Centrs”设在卡罗斯塔一栋历史建筑内，不仅是咖啡馆和文化中心，也提供简单的客房，与在地艺术家和活动零距离接触。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`市中心便利选择`}</h4>
                  <p className="text-sm text-yellow-800">{`利耶帕亚市中心设计酒店“Seaside Hotel”，现代舒适，从房间可远眺波罗的海，白天深入卡罗斯塔探险，晚上回到热闹的玫瑰广场享受美食和夜生活。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`独特生态体验`}</h4>
                  <p className="text-sm text-purple-800">{`利耶帕亚郊外的乡村民宿，由木质传统拉脱维亚农舍改建，被森林和湖泊环绕，体验完卡罗斯塔的硬核历史后，来这里享受大自然的宁静疗愈。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`卡罗斯塔社区本身非常安全，但夜晚照明有限，氛围寂静甚至有些萧瑟，独自出行者请根据自身心理承受力选择是否在此过夜。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（7-8月）是旅游旺季，利耶帕亚市中心的住宿可能紧张，建议提前预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果想深入感受卡罗斯塔的晨昏，选择住在这里的旅馆是无可替代的体验，你会看到游客散去后，这个地方最本真的样子。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开卡罗斯塔很久以后，那片铅灰色的天空、海风的味道、以及教堂废墟那沉默的轮廓，还会在不经意间闯入我的脑海。它不像那些被精心呵护的世界遗产，给你明确的美学答案和历史的终结感。相反，它给你留下了无数疑问、巨大的空白和一种挥之不去的沉重。但恰恰是这种“未完成”和“不完美”，让它拥有了直击人心的力量。它迫使你成为历史的共谋者，用你自己的阅历和情感，去填补那些砖石之间的缝隙。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在一切都追求效率、光滑和即时满足的今天，卡罗斯塔是一种“反叛”。它提醒我们，历史不总是胜利者的凯歌，更多时候是破碎的梦想、废弃的工程和沉默的伤疤。它告诉我们，一个地方最深层的魅力，可能不在于它有多辉煌，而在于它承载了多少真实的人类故事——野心、恐惧、信仰、遗忘，以及最终，在废墟上重新开始生活的平凡勇气。每一位热爱深度游的旅人，都应该来一次卡罗斯塔。不是为了打卡，而是为了完成一次与自己、与历史的严肃对话。当你站在这片曾经绝密的海岸，你会明白，有些地方，正因为它的残缺，才显得格外完整。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/riga-art-nouveau-architecture" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    里
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">里加新艺术建筑群</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Art Nouveau architecture in Riga</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sigulda-medieval-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡古尔达中世纪城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sigulda Medieval Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rundale-palace" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    伦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">伦达莱宫（波罗的海的凡尔赛宫）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rundāle Palace</p>
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
