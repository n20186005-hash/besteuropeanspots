import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃皮达鲁斯古剧场 Ancient Theatre of Epidaurus｜聆听来自2400年前的声音，古希腊完美声学的奇迹 - 最佳欧洲景点',
  description: '穿过一片满是松树和橄榄树的缓坡，当那座巨大的、石灰石打造的浅杏色“扇贝”毫无预警地在你眼前完整铺开时，你的呼吸会为之一滞。那不是一个简单的废墟，而是一个精密、庞大且充满生命力的几何体。阳光热烈地倾泻在55排、能容纳近14000人的石阶座位上，每一级都被岁月和无数先民的衣袂打磨得温润光滑。空气里是干热...',
}

export default function AncientTheatreOfEpidaurusPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '希腊', href: '/destinations/greece' },
            { label: '埃皮达鲁斯古剧场', href: '/attractions/ancient-theatre-of-epidaurus' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`埃皮达鲁斯古剧场・Ancient Theatre of Epidaurus・希腊・伯罗奔尼撒半岛，埃皮达鲁斯考古遗址区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`穿过一片满是松树和橄榄树的缓坡，当那座巨大的、石灰石打造的浅杏色“扇贝”毫无预警地在你眼前完整铺开时，你的呼吸会为之一滞。那不是一个简单的废墟，而是一个精密、庞大且充满生命力的几何体。阳光热烈地倾泻在55排、能容纳近14000人的石阶座位上，每一级都被岁月和无数先民的衣袂打磨得温润光滑。空气里是干热的尘土味、松针的清香，还有一丝来自爱琴海、穿越了层层山峦的咸润气息。站在舞台圆心，万籁俱寂中，你能听见自己的心跳，远处松涛的低语，还有风穿过高大石柱遗迹的呜咽。
最神奇的时刻，是当有人站在那直径约20米的圆形 Orchestra（歌舞场）中心，撕下一小片纸，或者轻轻踩一下脚。你坐在最高、最远的第55排，却能无比清晰地听见纸片摩擦的沙沙声，或是鞋底碰撞石头的脆响，仿佛声音被一只无形的手托着，精准地送到了你的耳边。这不是传说，是2400年前的古希腊建筑师波利克里托斯送给全人类的礼物。闭上眼睛，想象一下：在星空之下，火炬照亮舞台，悲怆的《俄狄浦斯王》或诙谐的《利西翠妲》台词，无需任何扩音设备，就能清晰地灌满每一个角落，穿透每一个灵魂。剧场，在这里不是娱乐场所，而是一场集体性的精神洗礼。
时至今日，它依然是“活”的。每年夏天，这里会举办举世闻名的埃皮达鲁斯戏剧节。当现代演员们穿上古希腊悲剧的戏服，用同样的语言在同一片土地上吟唱时，时空的界限被彻底模糊。你会看到当地的老者带着孙辈，游客裹着披肩，大家像古希腊人一样，早早带着垫子和食物赶来，不是为了打卡，而是为了参与一场延续了千年的仪式。夕阳西下，天空从橙红变为深紫，剧场里的灯光亮起，那一刻，你明白自己触摸到的，是人类共同文化遗产中依然跳动的心脏。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过一片满是松树和橄榄树的缓坡，当那座巨大的、石灰石打造的浅杏色“扇贝”毫无预警地在你眼前完整铺开时，你的呼吸会为之一滞。那不是一个简单的废墟，而是一个精密、庞大且充满生命力的几何体。阳光热烈地倾泻在55排、能容纳近14000人的石阶座位上，每一级都被岁月和无数先民的衣袂打磨得温润光滑。空气里是干热的尘土味、松针的清香，还有一丝来自爱琴海、穿越了层层山峦的咸润气息。站在舞台圆心，万籁俱寂中，你能听见自己的心跳，远处松涛的低语，还有风穿过高大石柱遗迹的呜咽。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最神奇的时刻，是当有人站在那直径约20米的圆形 Orchestra（歌舞场）中心，撕下一小片纸，或者轻轻踩一下脚。你坐在最高、最远的第55排，却能无比清晰地听见纸片摩擦的沙沙声，或是鞋底碰撞石头的脆响，仿佛声音被一只无形的手托着，精准地送到了你的耳边。这不是传说，是2400年前的古希腊建筑师波利克里托斯送给全人类的礼物。闭上眼睛，想象一下：在星空之下，火炬照亮舞台，悲怆的《俄狄浦斯王》或诙谐的《利西翠妲》台词，无需任何扩音设备，就能清晰地灌满每一个角落，穿透每一个灵魂。剧场，在这里不是娱乐场所，而是一场集体性的精神洗礼。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时至今日，它依然是“活”的。每年夏天，这里会举办举世闻名的埃皮达鲁斯戏剧节。当现代演员们穿上古希腊悲剧的戏服，用同样的语言在同一片土地上吟唱时，时空的界限被彻底模糊。你会看到当地的老者带着孙辈，游客裹着披肩，大家像古希腊人一样，早早带着垫子和食物赶来，不是为了打卡，而是为了参与一场延续了千年的仪式。夕阳西下，天空从橙红变为深紫，剧场里的灯光亮起，那一刻，你明白自己触摸到的，是人类共同文化遗产中依然跳动的心脏。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`埃皮达鲁斯古剧场`} />
                <InfoRow label="英文名称" value={`Ancient Theatre of Epidaurus`} />
                <InfoRow label="正式名称" value={`Ancient Theatre of Epidaurus`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`伯罗奔尼撒半岛，埃皮达鲁斯考古遗址区`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是古希腊世界保存最完好的剧场之一，也是献给医神阿斯克勒庇俄斯的宏伟圣地中，最璀璨夺目的核心建筑。`} />
                <InfoRow label="建筑特色" value={`依山而建的巨大扇形观众席与近乎完美的圆形舞台，共同构成了声学与几何学的古代奇迹。`} />
                <InfoRow label="建筑风格" value={`经典的古希腊化时期建筑风格，遵循严格的数学比例，体现了和谐、秩序与民主的雅典精神。`} />
                <InfoRow label="文化价值" value={`它不仅是古代希腊戏剧艺术的圣殿，更是理解古希腊社会公共生活、宗教祭祀与科学成就（尤其是声学）的活化石。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`夏季（4月1日至10月31日）每日上午8:00至晚上8:00开放。冬季（11月1日至3月31日）开放时间缩短为上午8:30至下午5:00。请注意，最后入场时间为闭馆前30分钟。每年7月和8月的周五及周六晚上，剧场会用于“埃皮达鲁斯戏剧节”的演出，届时白天游览时间可能调整，请务必提前在官网确认。元旦、圣诞节、希腊国庆日（3月25日）和复活节等主要节假日可能会关闭或缩短开放时间。`} />
              <InfoRow label="门票价格" value={`标准门票价格为12欧元（夏季），冬季票价为6欧元。该门票通常包含整个埃皮达鲁斯考古遗址（包括剧场、阿斯克勒庇俄斯圣地遗址、博物馆等）的入场。欧盟学生及65岁以上老年人享受半价优惠。18岁以下的未成年人、持有希腊文化卡者及某些特定纪念日（如国际博物馆日）可免费入场。建议在官方售票处或信誉良好的在线平台购票。`} />
              <InfoRow label="地址" value={`Epidavros 210 59, Greece`} />
              <InfoRow label="交通方式" value={`从雅典出发是主要路线。雅典国际机场（ATH）位于约160公里外。最灵活的方式是自驾：从雅典出发，沿E94高速公路向西，经科林斯运河进入伯罗奔尼撒半岛，再转EO8/E65公路向纳夫普利翁方向，最后按路标前往埃皮达鲁斯遗址，车程约2-2.5小时。公共交通：从雅典的基菲索斯长途汽车站（Kifissos Bus Station）搭乘前往纳夫普利翁（Nafplio）或埃皮达鲁斯村（Archaea Epidavros）的KTEL长途巴士，班次约每小时一班，车程约2.5-3小时。抵达纳夫普利翁后，需换乘前往埃皮达鲁斯遗址的本地巴士（班次较少，旺季约每天3-4班，车程约30分钟），务必提前查好衔接班次。也可从纳夫普利翁参加一日游旅行团或租用出租车，这是更省心的选择。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解这座剧场，必须先认识它所依附的那个宏大背景——埃皮达鲁斯的阿斯克勒庇俄斯圣地。在公元前四世纪，这里远不止一个剧场，而是一个庞大的、功能齐全的“医疗康养综合体”。人们从希腊各地长途跋涉而来，寻求医神阿斯克勒庇俄斯的治愈。治疗过程充满宗教神秘色彩：病患先在圣泉中沐浴洁净，然后睡在圣殿旁的“疗养所”里，等待医神在梦中降临，给予治疗的启示。而戏剧，正是这整个“治疗套餐”中至关重要的一环。古希腊人深信，通过观看悲剧，体验“卡塔西斯”（情感宣泄与净化），能洗涤心灵，从而达到身心平衡的健康状态。这座剧场，因此是当时最先进的“心理治疗室”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`剧场的建造者，是来自阿尔戈斯的著名建筑师波利克里托斯（小）。大约在公元前340年至公元前330年，他接手了这项工程。在那个没有声学测量仪器的年代，他的设计近乎神迹。秘密在于精确到苛刻的数学比例：观众席的坡度、每一排台阶的高度与深度、舞台的弧度，都经过了精密计算，使得声音在反射和传播过程中损耗最小，并巧妙地避免了回声干扰。更了不起的是，建造所用的石灰石材料本身也具有吸音特性，能过滤掉风噪等杂音，只保留舞台中心传来的清晰人声。这不仅是艺术，更是那个时代科学、数学与哲学智慧的巅峰结晶。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在随后的罗马时期，剧场被继续使用并稍作修缮，增加了更华丽的舞台背景建筑。但随着基督教成为国教，推崇戏剧的古希腊传统被视为异教活动，剧场逐渐被废弃。时光和地震将它掩埋，宏伟的石阶被泥土和植被覆盖，只剩一个模糊的轮廓。中世纪时，人们甚至忘记了它的名字和用途，它成了牧羊人放羊的山坡。直到19世纪，现代考古学的曙光才照到这里。1881年，希腊考古协会开始了系统的发掘工作，将这座沉睡了两千年的巨人从地底唤醒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`挖掘过程本身就是一次震撼的发现。当一层层泥土被移开，近乎完美的石阶重现天日时，其保存的完整程度令世界震惊。除了最上层的少数座位因暴露在风雨中有损外，绝大部分结构都完好如初，甚至连当年观众用陶片刻下的名字都依稀可辨。20世纪中叶，随着对古希腊戏剧兴趣的复兴，人们开始思考如何让它重获“声音”。1955年，首届现代埃皮达鲁斯戏剧节在这里成功举办，索福克勒斯的《厄勒克特拉》再次响彻山谷。从那一刻起，这座古老剧场完成了从考古遗址到活态文化殿堂的华丽转身，重新连接起古典与现代的血脉。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`请务必留出至少一整天的时间给整个埃皮达鲁斯考古遗址，而不仅仅是剧场。建议早晨9点前抵达，这时游客较少，光线柔和，最适合在剧场体验神奇的声学效果和拍照。先在剧场沉浸1.5-2小时，充分感受其空间与声学魅力。随后，沿着绿树成荫的小径步行约10分钟，前往阿斯克勒庇俄斯圣地的广阔遗址区，花上2-3小时慢慢探索那些散落的庙宇、柱廊、体育场和疗养所的基础，想象古时朝圣者在此寻求治愈的完整历程。最后，参观遗址内的考古博物馆（约1小时），将你看到的石头与精美的雕塑、医疗器具等文物联系起来，让整个故事变得丰满。这样的节奏能让你由感官震撼深入到文化理解，完成一次完美的时空穿越之旅。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季参观务必携带足量饮用水、帽子和太阳镜，剧场和遗址区几乎没有遮阴处，中午阳光非常暴烈。
如果想体验戏剧节的演出，务必提前数月甚至半年在官方渠道抢票，这是希腊夏季最热门的文化盛事之一。
穿一双舒适耐走的运动鞋或登山鞋至关重要，因为你要在大量不平整的古代石板和土路上行走。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要趁清晨人少时，独自或与同伴一起站在圆形舞台的中心，体验硬币落地声清晰传至最高排的神奇时刻`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着观众席最外侧的步道缓缓向上走，用手触摸那些被阳光晒得微暖、纹理各异的古老石灰石座位`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到55排观众席正中央那个视野最开阔的“王座”，坐下来静静俯瞰整个剧场结构与远方的青翠山峦`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开剧场主体，去探索西侧那些属于舞台后台建筑的断壁残垣，想象演员们在此化妆和准备登场的情景`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着松林间的古老圣路漫步，走向阿斯克勒庇俄斯神庙的遗址，抚摸那些多立克式巨柱的残骸`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在遗址区的古运动场跑道上走一走，那里曾是朝圣者们举行体育竞赛以取悦神明的场所`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`不要错过古罗马时期建造的“宾馆”遗址，了解这个“医疗中心”配套服务的完善程度`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后走进凉爽的考古博物馆，在赫尔墨斯神的雕像和古老的医用手术刀前，拼凑起完整的朝圣故事`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`舞台中心仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`在上午十点前或下午四点后的斜射光下，站在舞台圆点，用广角镜头向上拍摄，能完美捕捉扇形观众席的恢弘曲线与天空的对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`最高排俯拍圆形舞台`}</h4>
                  <p className="text-sm text-gray-700">{`从观众席最上方第55排正中向下拍摄，将完整的圆形Orchestra和背景的舞台遗迹纳入画面，构图极具几何美感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`侧廊光影柱列`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚时分，当阳光低角度穿过剧场西侧后台建筑的残存柱廊，会投下长长的阴影，在此拍摄人物剪影或空镜极具戏剧感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`远观剧场与自然`}</h4>
                  <p className="text-sm text-gray-700">{`从停车场通往剧场的小径上，有几个拐角处可以回望，将剧场与周围的松林、远山一同摄入镜头，展现其与环境的和谐共生。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`博物馆的细节特写`}</h4>
                  <p className="text-sm text-gray-700">{`在室内博物馆，寻找那些表情生动的古希腊雕像面部特写，或是刻有文字的古老石碑，用大光圈镜头捕捉历史的细腻痕迹。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机拍摄在遗址区是严格禁止的，请务必遵守规定。在戏剧节演出期间，场内禁止使用闪光灯和专业摄影设备进行拍摄，以免影响演员和其他观众。多利用清晨和黄昏的“黄金时刻”，此时光线柔和，能为古老的石头镀上温暖的金色。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`海滨风情之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在十几公里外风景如画的纳夫普利翁小镇，这里有威尼斯风格的城堡、迷人的海滨步道和众多优质餐厅，让古朴的旅程多一份惬意。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`沉浸式乡村体验`}</h4>
                  <p className="text-sm text-green-800">{`选择埃皮达鲁斯村或附近传统村庄里的家庭旅馆，醒来就能闻到橘子花的香味，主人可能会跟你分享关于遗址的本地传说。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`戏剧节专属体验`}</h4>
                  <p className="text-sm text-yellow-800">{`如果在戏剧节期间到访，可以考虑预订遗址附近专为戏剧爱好者开设的小型精品酒店或民宿，晚上看完演出后可以轻松步行返回，并与其他观众交流观感。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`隐居山林静修`}</h4>
                  <p className="text-sm text-purple-800">{`在遗址周边的山林里，有一些由古老石屋改造的静谧度假屋，拥有私密的花园和俯瞰山谷的露台，适合寻求彻底放松与沉思的旅行者。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`纳夫普利翁的住宿选择最多，餐饮和夜间活动丰富，但需要每天往返遗址，更适合自驾者。如果主要目标是深度探索遗址并观看戏剧节，住在更近的村庄更方便，但需提前很久预订，且餐饮选择有限。伯罗奔尼撒半岛整体治安良好，民风淳朴。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开埃皮达鲁斯的时候，你的耳朵似乎变得不一样了。你会开始在意声音的清晰度，在意一个空间如何承载和传递人类的情感与思想。这座剧场最伟大的地方，不在于它多么古老或壮观，而在于它如此直白地向你证明：美，是可以被计算、被建造、并穿越千年依然有效的。古希腊人追求的“和谐”，不是一个抽象概念，而是精准的数学比例，是石头排列的方式，是声音传播的路径，最终，是这一切作用于人心所引发的共鸣与净化。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个充斥着电子屏幕和人工合成的世界里，埃皮达鲁斯是一个强有力的提醒。它告诉我们，人类曾经如何用最原始的材料，创造出最不朽的、服务于灵魂的工程。坐在那些石阶上，你不仅是一个游客，更成为了一条时间长河中的连接点——连接着那个在星空下为英雄的命运而流泪的古希腊观众，连接着那个致力于用建筑治愈身心的天才建筑师，也连接着未来每一个在此寻找回响的人。它之所以必须出现在深度旅行者的清单上，正是因为它提供的不是一张漂亮照片，而是一次关于人类智慧、艺术永恒性与自身感知的深刻校准。在这里，你真的能听见历史的心跳。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kavala" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡瓦拉老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kavala</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/nafplio-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    纳
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">纳夫普利翁</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Nafplio</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ioannina" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    约
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">约阿尼纳老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ioannina</p>
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
