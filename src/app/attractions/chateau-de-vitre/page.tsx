import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '维特雷城堡 Château de Vitré｜布列塔尼边境极具童话色彩的带吊桥巨型三角堡垒 - 最佳欧洲景点',
  description: '第一眼看到维特雷城堡，你一定会忍不住“哇”出声来。它就那样毫无征兆地从维特雷老城的一片红瓦屋顶中陡然升起，不是优雅的宫殿，而是一头由深色片麻岩和花岗岩垒成的巨兽，棱角分明，带着不容置疑的防御姿态。但奇怪的是，它又不显得凶悍，反而有种奇异的童话感。也许是因为那座横在入口前的木制吊桥，黑色的铁链垂着，桥',
}

export default function ChateauDeVitrePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '维特雷城堡', href: '/attractions/chateau-de-vitre' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`维特雷城堡・Château de Vitré・法国・维特雷`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到维特雷城堡，你一定会忍不住“哇”出声来。它就那样毫无征兆地从维特雷老城的一片红瓦屋顶中陡然升起，不是优雅的宫殿，而是一头由深色片麻岩和花岗岩垒成的巨兽，棱角分明，带着不容置疑的防御姿态。但奇怪的是，它又不显得凶悍，反而有种奇异的童话感。也许是因为那座横在入口前的木制吊桥，黑色的铁链垂着，桥身微微向上收起，仿佛下一秒就会有骑士骑着骏马“嘚嘚”地从桥上跑过。空气里有种雨后石头和潮湿苔藓混合的味道，很清新，还夹杂着不远处面包店飘来的黄油香气。
走近了，你会听见自己的脚步声在通往城堡的石板坡道上回响，间或混着护城河花园里孩子们的嬉闹声和鸽子扑棱翅膀的声音。对于本地人来说，这座城堡不是什么遥不可及的景点，而是生活背景的一部分。老人们坐在护城河边的长椅上读报，情侣依偎在城墙的阴影里低语，孩子们把城墙根当成捉迷藏的秘密基地。它威严，但又亲切地嵌在这座小镇的肌理之中，像一个守护了八百年的沉默巨人，早已习惯了人间烟火。
最打动人的，莫过于那种极致的冲突与和谐。它是为战争而生的，箭垛、枪眼、厚重的城门，每一个细节都在诉说着边境的紧张。然而，时光软化了它的棱角，常春藤温柔地覆盖了部分石壁，护城河被改造成了英式花园，开满了玫瑰和绣球。当你穿过吊桥，走进那个三角形的庭院，阳光从三面高墙间倾泻而下，你会发现这里竟然出奇的宁静。战争与和平，防御与生活，石的冷硬与花的柔软，在这里达成了奇妙的和解。它不是迪士尼的布景，它比那更真实，也更梦幻。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到维特雷城堡，你一定会忍不住“哇”出声来。它就那样毫无征兆地从维特雷老城的一片红瓦屋顶中陡然升起，不是优雅的宫殿，而是一头由深色片麻岩和花岗岩垒成的巨兽，棱角分明，带着不容置疑的防御姿态。但奇怪的是，它又不显得凶悍，反而有种奇异的童话感。也许是因为那座横在入口前的木制吊桥，黑色的铁链垂着，桥身微微向上收起，仿佛下一秒就会有骑士骑着骏马“嘚嘚”地从桥上跑过。空气里有种雨后石头和潮湿苔藓混合的味道，很清新，还夹杂着不远处面包店飘来的黄油香气。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，你会听见自己的脚步声在通往城堡的石板坡道上回响，间或混着护城河花园里孩子们的嬉闹声和鸽子扑棱翅膀的声音。对于本地人来说，这座城堡不是什么遥不可及的景点，而是生活背景的一部分。老人们坐在护城河边的长椅上读报，情侣依偎在城墙的阴影里低语，孩子们把城墙根当成捉迷藏的秘密基地。它威严，但又亲切地嵌在这座小镇的肌理之中，像一个守护了八百年的沉默巨人，早已习惯了人间烟火。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，莫过于那种极致的冲突与和谐。它是为战争而生的，箭垛、枪眼、厚重的城门，每一个细节都在诉说着边境的紧张。然而，时光软化了它的棱角，常春藤温柔地覆盖了部分石壁，护城河被改造成了英式花园，开满了玫瑰和绣球。当你穿过吊桥，走进那个三角形的庭院，阳光从三面高墙间倾泻而下，你会发现这里竟然出奇的宁静。战争与和平，防御与生活，石的冷硬与花的柔软，在这里达成了奇妙的和解。它不是迪士尼的布景，它比那更真实，也更梦幻。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`维特雷城堡`} />
                <InfoRow label="英文名称" value={`Château de Vitré`} />
                <InfoRow label="正式名称" value={`Château de Vitré`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`维特雷`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`法国保存最完好的中世纪堡垒之一，见证了布列塔尼公国的边疆风云，被誉为“石头编年史”。`} />
                <InfoRow label="建筑特色" value={`独特的三角平面布局配以高耸的圆塔和横跨干涸护城河的吊桥，宛如从童话书中走出。`} />
                <InfoRow label="建筑风格" value={`以军事防御为主的哥特式风格，兼具晚期罗马式建筑的厚重感。`} />
                <InfoRow label="文化价值" value={`活生生的中世纪军事建筑教科书，浓缩了布列塔尼边境的坚韧精神与法式浪漫想象。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡庭院及外部全年全天开放。城堡内部历史博物馆开放时间随季节变动：4月至9月，每日10:00-18:00；10月至次年3月，周二至周日10:00-12:30，14:00-17:30；每周一、1月1日、5月1日、11月1日、11月11日和12月25日闭馆。强烈建议出行前在其官网确认最新时刻表。`} />
              <InfoRow label="门票价格" value={`成人票6欧元；优惠票（学生、教师、10人以上团体）4欧元；18岁以下青少年及残疾人士免费。每年9月的欧洲遗产日及每月第一个周日（除7、8月）免费开放。门票包含博物馆所有展厅及临时特展。`} />
              <InfoRow label="地址" value={`Place du Château, 35500 Vitré, France`} />
              <InfoRow label="交通方式" value={`从巴黎出发最便捷：乘坐TGV高速火车约1小时40分钟抵达雷恩火车站，然后在雷恩换乘TER区域列车，约30分钟即可到达维特雷站。从维特雷火车站步行至城堡仅需15分钟，一路缓坡上行，沿途经过迷人的老城街道。若自驾，可将车停在城堡脚下的“Parking du Château”停车场。从雷恩机场出发，建议先乘坐巴士或出租车至雷恩火车站再转火车。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`维特雷的故事，始于布列塔尼公国与法兰西王国之间那条看不见却充满硝烟的边界。11世纪末，一位名叫罗伯特一世的维特雷男爵，决定在他领地的这片岩石山脊上，建造一座坚固的据点。最初的城堡是木制的，简单，但足以震慑。然而，真正的传奇要等到13世纪初，男爵的继任者们决定用石头来书写永恒。他们采纳了当时最先进的军事理念——建造一座三角形的堡垒。三个角上各立起一座巨大的圆塔，塔楼之间用高耸的幕墙连接，只在最狭窄的一端留下唯一的入口，并由一座吊桥控制。这个设计精妙绝伦，几乎没有射击死角，让维特雷城堡成了边境线上最难啃的硬骨头。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡在之后的几个世纪里不断被加固和美化。15世纪，它迎来了最辉煌的主人之一——布列塔尼公爵夫人安娜的女总管弗朗索瓦丝·迪努瓦。这位显赫的女性不仅管理着庞大的领地，也将文艺复兴的些许优雅气息带进了这座军事堡垒。她增建了更舒适的起居室，开凿了更大的窗户，让光线和空气流进来。你能在城堡北翼看到那个时代的痕迹，繁复的石雕壁炉和木制天花板，隐约透露着对精致生活的向往。城堡的命运随着布列塔尼最终并入法国而改变，它从边境要塞逐渐转变为行政中心和监狱，角色变了，但重要性依旧。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`法国大革命的风暴席卷而来时，维特雷城堡差点没能幸免。激进的革命者视它为封建压迫的象征，一度想要拆除它。幸运的是，当地的市政官员据理力争，提出将它改为监狱和法院更为实用，这才保住了这座建筑瑰宝。整个19世纪，它都在履行着这略显阴森的职能。转机出现在20世纪初，一场由历史学家和浪漫主义者推动的“遗产觉醒”运动，让人们重新发现了它的美与价值。1906年，它被列为法国历史古迹，并开始了漫长而细致的修复。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的城堡内部，是一座精心策划的历史与艺术博物馆。漫步其中，就像在时间走廊里穿行。一个房间里陈列着从中世纪到文艺复兴时期的彩绘木雕和宗教艺术品，静谧而神圣；另一个房间则摆满了来自世界各地的奇异收藏——甲虫标本、中国瓷器、非洲面具，这些是19世纪一位充满好奇心的维特雷旅行家的毕生珍藏，透着那个年代对远方的无限憧憬。站在城堡顶部城墙的步道上，看着脚下红瓦连绵的老城和远处布列塔尼典型的绿色田野，你会明白，这座城堡早已不再是冰冷的石头堆砌物。它是一部立体的史书，一页写着战争与权力，一页写着囚禁与审判，又一页写着拯救与珍藏，最终，所有的篇章都汇聚成了今天我们所见的，一个充满生命力的、童话般的奇迹。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的维特雷城堡之旅，我强烈建议你安排一个完整的下午。大约两点左右抵达，这时午餐后的小镇最是慵懒，游客也相对稀少。先从外部开始，花一个小时绕着护城河走一圈，从各个角度仰望这座三角堡垒，感受它的气势。然后，在下午三点前通过吊桥进入城堡内部，这时博物馆里的人流往往较少，光线也正从高窗斜射进来，非常适合静静观赏展品。整体游览节奏宜慢不宜快，预计需要4-5小时。这样的安排让你既能捕捉到白天城堡清晰的轮廓，又有机会在黄昏时分，看到城墙被夕阳染成金红色的梦幻时刻。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿一双绝对舒适防滑的鞋子，城堡内外的石阶陡峭且往往湿滑。尽量避开周末和法国的学校假期，平日早晨或午后临近闭馆时是享受宁静的最佳时段。注意博物馆最后入场时间比闭馆时间早45分钟，务必规划好。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡东侧的老城街道开始，让那些色彩缤纷的木筋墙老房子作为前景，拍下第一张城堡的远景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`慢慢走上斜坡，亲手触摸那些被数百年风雨打磨得冰凉而光滑的深色花岗岩城墙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`怀着仪式感走过那座吱呀作响的木制吊桥，想象自己正被“吊起”进入另一个时空。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入三角形的中心庭院，静静站一会儿，感受阳光从三面高墙间洒下的那份被包裹的宁静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着狭窄的螺旋石阶登上圣洛朗圆塔的顶端，气喘吁吁地换来一个360度环绕的、红瓦屋顶与绿色田野交织的布列塔尼全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城堡内部的博物馆里，别错过那间满是奇珍异宝的“好奇柜”房间，那是19世纪探险家精神的缩影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从北翼的骑士大厅走出来，沿着城墙顶部的步道慢慢走一圈，让风拂过脸庞，看脚下的护城河花园像一幅精致的刺绣。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落时分，回到城堡脚下的花园长椅坐下，看着城堡的轮廓逐渐融入暮色，灯光在箭孔中次第亮起。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`老城Rue de la Baudrairie街道仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，阳光照亮城堡东侧立面，利用街道两侧的木筋墙老屋作为引导线，拍出城堡凌驾于小镇生活之上的震撼全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`吊桥对称构图`}</h4>
                  <p className="text-sm text-gray-700">{`站在护城河外侧，正对吊桥，利用桥身和入口塔楼形成完美的对称框架，最佳光线在晴朗日子的上午，侧光能勾勒出木桥和石墙的丰富质感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城墙步道视角`}</h4>
                  <p className="text-sm text-gray-700">{`登上城墙后，找到面向小镇广场的垛口，以巨大的圆塔尖顶为前景，俯瞰下方如玩具模型般的彩色屋顶和圣玛丽教堂，黄昏时分天空色彩最丰富。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`护城河花园倒影`}</h4>
                  <p className="text-sm text-gray-700">{`春季或夏季，走到城堡西南侧的花园，寻找一个平静的小水塘，在无风的清晨，可以拍下城堡塔楼和绿树在水中的完美倒影，充满静谧诗意。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`利用黄金时段（日出后一小时和日落前一小时）的柔和光线，能为冷峻的石墙赋予温暖的色调与质感。城堡室内博物馆允许拍照，但严禁使用闪光灯和三脚架，请务必调高相机感光度或使用大光圈镜头。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`藏在老城拱廊下的“金狮旅馆”，房间虽小却充满故事感，木头横梁低矮，早晨下楼就能融入本地人的早市咖啡喧闹中。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`由16世纪贵族宅邸改建的“大将军公馆”，房间环绕着一个鲜花盛开的内庭，石墙厚重安静，管家会为你讲述城堡不为人知的小传说。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在城郊静谧卢瓦尔河支流畔的“磨坊庄园”，开车到城堡仅十分钟，却拥有广阔的花园和米其林推荐的餐厅，在落地窗前用早餐时能看到天鹅游过。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`家庭优选`}</h4>
                  <p className="text-sm text-purple-800">{`带厨房的“城堡视野公寓”，位于一栋老建筑顶层，拥有一个可以直面城堡雄姿的私人露台，晚上和孩子一起看城堡亮灯是独一无二的记忆。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`维特雷小镇非常安全，夜间漫步毫无压力。老城中心的住宿停车位紧张，建议提前询问酒店停车安排。夏季和节假日务必提前数周预订，尤其是那些拥有直面城堡视野的房间，非常抢手。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开维特雷城堡好些天了，但那座三角堡垒的影像，却比许多去过的著名宫殿更牢固地刻在脑海里。我想，是因为它提供了一种罕见的“完整性”。它不仅仅是一个被抽离出来的、供人观赏的遗迹，而是一个仍然在呼吸的有机体。你能触摸到石头的冰冷，也能闻到花园的花香；你能读到血腥的边境战争史，也能看到孩子们在它脚下无忧无虑地奔跑。它没有在时光中凝固，而是在演化，从要塞到监狱，再到博物馆和城市灵魂，每一层记忆都清晰可辨，共同构成了它丰厚而立体的生命。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求高效、喜欢将一切体验扁平化的快节奏世界里，维特雷城堡像是一个倔强的提醒。它告诉我们，真正的深度旅行，不是收集地图上的坐标，而是去感受一个地方层叠的时光与复杂的灵魂。它既有童话般令人一眼倾心的外形，又有承载着沉重历史的骨架。它让你相信，浪漫与坚韧可以并存于同一块石头之中。对于任何一位不满足于走马观花，渴望触摸历史真实纹理，并愿意被一个地方独特气质所打动的旅人来说，维特雷都不该只是一个路过的小镇名字。它值得你专程前来，花上一个下午，走过那座吊桥，去赴一场与中世纪巨人的，安静而深刻的对话。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/alesia-archaeological-park" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿莱西亚考古公园</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">MuséoParc Alésia</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/olavinlinna-savonlinna" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨翁林纳奥拉维城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Olavinlinna</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/le-puy-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    勒
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">勒皮圣母大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Le Puy Cathedral</p>
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
