import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '迪南要塞 Citadel of Dinant｜悬崖上的萨克斯风之城，俯瞰默兹河湾的战争与和平史诗 - 最佳欧洲景点',
  description: '你第一眼看到迪南要塞，会觉得它不像一座建筑，而是一块巨岩本身的愤怒表情。它从默兹河碧绿的水面旁拔地而起，近乎垂直的石灰岩崖壁高达百米，而那座灰黄色的堡垒，就冷酷地冠在悬崖顶端，像一顶生了锈的王冠。坐进那吱呀作响的老式缆车缓缓上升时，脚下的迪南城逐渐变成玩具模型，彩色屋顶、哥特式教堂的尖顶、蜿蜒的河水...',
}

export default function CitadelOfDinantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '迪南要塞', href: '/attractions/citadel-of-dinant' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`迪南要塞・Citadel of Dinant・比利时・迪南`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼看到迪南要塞，会觉得它不像一座建筑，而是一块巨岩本身的愤怒表情。它从默兹河碧绿的水面旁拔地而起，近乎垂直的石灰岩崖壁高达百米，而那座灰黄色的堡垒，就冷酷地冠在悬崖顶端，像一顶生了锈的王冠。坐进那吱呀作响的老式缆车缓缓上升时，脚下的迪南城逐渐变成玩具模型，彩色屋顶、哥特式教堂的尖顶、蜿蜒的河水，都安静下来。但风很大，呼呼地穿过缆车缝隙，带着河水湿润的气息和远处森林里松针的冷香。
当你踏上要塞的岩石平台，第一个扑面而来的不是景色，而是一种厚重的寂静。那是一种被石头吸收了几个世纪的寂静，脚步声在空旷的院子里回响得特别清晰。走进阴暗的堡垒内部，气温骤降，空气里是挥之不去的、淡淡的硝石和潮湿岩石的味道。博物馆的灯光昏黄，照亮着第一次世界大战的黑白照片，那些年轻士兵的面孔模糊不清。你会突然意识到，这不仅仅是一个观景台，而是一个巨大的、倒置的墓碑，它的地基深埋在战争与死亡的记忆里。
然而，最动人的反差就在于此。当你从阴暗的甬道走出，来到面朝河流的巨型观景台时，阳光、河风与生机勃勃的河谷景色会一下子将你拥抱。正下方的迪南圣母院传来悠扬的钟声，河边咖啡馆的遮阳伞像一朵朵彩色蘑菇。你会看到当地人划着皮划艇从桥下穿过，游客在萨克斯风雕塑前拍照——这座城市早已在伤痕上开出了新的花朵。要塞的存在，从压迫者变成了守护者，沉默地注视着和平的日常。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你第一眼看到迪南要塞，会觉得它不像一座建筑，而是一块巨岩本身的愤怒表情。它从默兹河碧绿的水面旁拔地而起，近乎垂直的石灰岩崖壁高达百米，而那座灰黄色的堡垒，就冷酷地冠在悬崖顶端，像一顶生了锈的王冠。坐进那吱呀作响的老式缆车缓缓上升时，脚下的迪南城逐渐变成玩具模型，彩色屋顶、哥特式教堂的尖顶、蜿蜒的河水，都安静下来。但风很大，呼呼地穿过缆车缝隙，带着河水湿润的气息和远处森林里松针的冷香。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你踏上要塞的岩石平台，第一个扑面而来的不是景色，而是一种厚重的寂静。那是一种被石头吸收了几个世纪的寂静，脚步声在空旷的院子里回响得特别清晰。走进阴暗的堡垒内部，气温骤降，空气里是挥之不去的、淡淡的硝石和潮湿岩石的味道。博物馆的灯光昏黄，照亮着第一次世界大战的黑白照片，那些年轻士兵的面孔模糊不清。你会突然意识到，这不仅仅是一个观景台，而是一个巨大的、倒置的墓碑，它的地基深埋在战争与死亡的记忆里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，最动人的反差就在于此。当你从阴暗的甬道走出，来到面朝河流的巨型观景台时，阳光、河风与生机勃勃的河谷景色会一下子将你拥抱。正下方的迪南圣母院传来悠扬的钟声，河边咖啡馆的遮阳伞像一朵朵彩色蘑菇。你会看到当地人划着皮划艇从桥下穿过，游客在萨克斯风雕塑前拍照——这座城市早已在伤痕上开出了新的花朵。要塞的存在，从压迫者变成了守护者，沉默地注视着和平的日常。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`迪南要塞`} />
                <InfoRow label="英文名称" value={`Citadel of Dinant`} />
                <InfoRow label="正式名称" value={`Citadel of Dinant`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`迪南`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座见证默兹河千年战略争夺，并在两次世界大战中首当其冲的岩石堡垒。`} />
                <InfoRow label="建筑特色" value={`完全依傍百米高天然石灰岩悬崖而建，与山体融为一体，形成“山顶为堡垒，山腹为工事”的独特结构。`} />
                <InfoRow label="建筑风格" value={`主体为19世纪荷兰统治时期重建的冷峻军事堡垒风格，局部保留有中世纪城墙的遗迹。`} />
                <InfoRow label="文化价值" value={`不仅是军事历史的纪念碑，更是迪南这座“萨克斯风发明者故乡”城市韧性与重生精神的象征。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年开放，但开放时间随季节变化。夏季（4月1日至9月30日）开放时间为每天上午10点至下午6点，最后入场时间为下午5点30分。冬季（10月1日至3月31日）开放时间为每天上午10点至下午4点30分，最后入场时间为下午4点。每年12月25日和1月1日闭馆。特殊天气（如大雪、结冰）可能临时关闭部分户外区域。`} />
              <InfoRow label="门票价格" value={`成人票价为12欧元。6至12岁儿童票价为9.5欧元。6岁以下儿童免费。家庭票（2成人+2儿童）为35欧元。持有效证件的大学生、65岁以上长者可享受10.5欧元的优惠票价。门票价格包含要塞门票、历史博物馆参观、武器陈列馆以及从山脚到要塞的缆车往返费用。如果选择徒步攀登408级台阶上下，门票价格不变。`} />
              <InfoRow label="地址" value={`Chem. de la Citadelle 1, 5500 Dinant, Belgium`} />
              <InfoRow label="交通方式" value={`从布鲁塞尔出发最为方便。从布鲁塞尔中央火车站乘坐前往那慕尔方向的IC列车，在迪南站下车，车程约1小时20分钟，每小时至少有一班车。从布鲁塞尔沙勒罗瓦机场出发，可先乘坐巴士到沙勒罗瓦南站，再转火车前往迪南，总耗时约2小时。到达迪南火车站后，出站即能看到雄伟的教堂和悬崖上的要塞。步行穿过教堂前的桥梁，约5分钟即可到达缆车站和徒步台阶的起点。建议购买比利时铁路通票或使用SNCB官方APP购票，非高峰时段票价更优。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`迪南这块岩石的故事，始于罗马人。他们最早意识到这块扼守默兹河弯道的巨岩的战略价值，但真正建起第一座永久性堡垒的，是11世纪的列日亲王主教。中世纪时，这里成了兵家必争的肥肉，在列日公国、勃艮第公爵和法兰西国王之间反复易手，城墙在战火中一次次倒塌又重建。它的石头缝隙里，浸透的第一个世纪的血泪，是关于地方自治与强权压迫的无尽争斗。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间滑到19世纪，决定要塞今日面貌的关键转折来了。1815年，滑铁卢战役后，迪南连同整个比利时地区被划归荷兰联合王国。荷兰国王威廉一世是个怀疑论者，他不信任这片新领土的忠诚，尤其是迪南这样具有叛乱传统的战略要地。于是，他下令彻底拆毁陈旧的中世纪堡垒，在原址上建造一座全新的、符合当时最先进军事工程学的堡垒。这就是我们今天看到的方正、冷硬、极具功能主义风格的建筑雏形。它居高临下，炮口直指脚下的城镇，这设计本身就充满了威慑的意味——它首先是用来镇压城内可能发生的叛乱的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但命运给了这座堡垒更残酷的剧本。1914年8月，第一次世界大战的战火刚刚燃起，德国军队如洪水般涌入中立国比利时。迪南，这座宁静的小城，遭遇了战争初期最血腥的屠杀之一。德军声称遭遇了来自要塞的抵抗（尽管当时守军极少），展开了疯狂的报复。超过674名平民被杀害，包括妇女和儿童，整座城市几乎被烧毁。要塞本身也遭受了猛烈的炮击。今天在博物馆里，你能看到那些被烧焦的屋梁照片，和遇难者名单上密密麻麻的名字。那场屠杀的创伤，深深镌刻在城市和堡垒的基因里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`二战中，要塞再次被卷入漩涡。1940年，比利时军队在这里进行了短暂的抵抗，试图拖延德军前进的步伐。1944年，它又成为美军为突破德军默兹河防线而激烈争夺的目标。枪炮在古老的岩壁上留下新的弹痕。战争结束后，满目疮痍的比利时没有选择将它拆除，而是将其改造为战争纪念馆。这一决定意味深长：他们要让岩石说话，诉说战争的愚蠢与和平的珍贵。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如今的宁静，是浴火重生后的宁静。要塞里有一个展厅，专门献给迪南最著名的儿子——阿道夫·萨克斯，萨克斯风的发明者。当深沉而富有感染力的萨克斯风乐曲在展览中响起，穿过冰冷的武器陈列柜，你会感受到一种奇妙的和谐。这是这座城市的精神内核：它经历过最深的黑暗，却孕育出了世界上最动人的声音之一。堡垒从镇压的象征，变为记忆的容器，再变为俯瞰当下美好生活的观景台，这个过程本身就是一首关于 resilence（韧性）的史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在上午10点前抵达，这时旅行团大军尚未到来，晨光最适合拍照，心境也最为宁静。整体游览需要留出至少3到3.5小时，节奏宜缓不宜急。先从山脚乘坐缆车上升，以一种“被历史提起来”的仪式感开始旅程。到达后，先不急于进馆，在室外平台感受全景，让身体和心灵适应这个高度。然后按照博物馆的指示路径进行室内参观，这是情绪沉淀的核心部分。最后，在参观完所有展厅后，再次回到阳光下的观景台和户外步道，让现代河谷的生机景象冲淡历史的沉重，完成一次从历史到当下的完整心理循环。这样的安排，能让你最深刻地体会此地所承载的复杂情感。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避免7-8月的周末下午前来，那时缆车和博物馆内会非常拥挤，严重影响体验。参观内部博物馆时，部分甬道低矮昏暗且地面不平，务必穿着舒适防滑的鞋子。要塞上的咖啡馆选择有限且价格偏高，建议在迪南城内的面包店或超市提前买好一瓶水和简单零食。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在山脚售票处购买包含缆车的套票，坐进那涂着明黄色、四面透风的老式缆车，让它用三分钟时间把你从喧闹的河边市集缓缓提上寂静的悬崖之巅。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出缆车站后别急着进去，右转走到最东侧的观景台，在那里深吸一口气，第一次毫无遮挡地拥抱默兹河那翡翠色的华丽弯道与整个迪南城的全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主入口进入堡垒内部，立刻被昏暗光线和凉意包裹，按照指示顺序参观“1914年8月”展厅，让那些平民遇难者的照片和遗物告诉你战争最残酷的真相。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着狭窄的螺旋石阶走下底层，参观阴冷的监狱地窖和二战时期的驻军生活复原场景，触摸墙壁上不知名士兵一百年前刻下的痕迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过摆满19世纪重型火炮的露天平台，仔细看看那些铁铸的巨物和它们指向城镇的射角，体会这座堡垒建造之初那份冰冷的威慑意图。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在关于阿道夫·萨克斯的展览厅稍作停留，戴上耳机听一段《秋叶》的萨克斯风独奏，感受艺术如何从战争的灰烬中生长。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从堡垒背面的小门走出，沿着峭壁边缘的步行小径走一小段，这里人迹罕至，可以静静聆听风声鸟鸣，看岩壁上顽强生长的灌木。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后回到主观景台，在长椅上坐一会儿，看着河面上的游船划出波纹，让当下的平和景象成为你离开前最后的、也是最重要的记忆画面。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`缆车中途仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`当缆车上升至一半高度时，回头用长焦镜头对准要塞底部巨大的岩石基座和上方堡垒的剪影，能拍出它凌空压顶的震撼压迫感，上午侧光时岩石纹理最清晰。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`东侧观景台全景`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点至中午，阳光正好洒满整个迪南城和河道，使用广角镜头将前景的古老炮管与中景的彩色屋顶、远景的青山绿水一同纳入画面，形成战争与和平的强烈对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`要塞背面悬崖小径`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，阳光变得金黄柔和，站在小径上以悬崖上虬结的树木枝干为框架，拍摄远处默兹河的另一处河湾和散落的村庄，构图充满野趣和层次感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣母院与要塞同框`}</h4>
                  <p className="text-sm text-gray-700">{`下山后，走到迪南圣母院对岸的河边公园，在日落前一小时，等待华灯初上，用三脚架长曝光拍摄灯光点缀的教堂尖塔与悬崖上被泛光灯照亮的要塞倒映在河水中的完美对称画面。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在博物馆内部是严格禁止拍照的，这是对历史与逝者的尊重，请务必遵守。使用无人机在迪南要塞及城市上空飞行需要提前向比利时当局申请许可，个人旅行者几乎无法完成，请不要擅自起飞。拍摄当地人（尤其是参加纪念活动的长者）时，请先微笑示意并征得同意。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河岸景观之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在默兹河右岸正对要塞的家庭旅馆，房间的窗户就是一幅活的风景画，清晨可以看到薄雾如腰带般缠绕在堡垒腰间的梦幻景象。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老城中心便捷选择`}</h4>
                  <p className="text-sm text-green-800">{`藏在迪南圣母院后方小巷里的精品酒店，由老石头房子改建，内部是极简北欧风，走路三分钟就能到达缆车站，晚上可以听着教堂钟声入睡。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特色历史体验`}</h4>
                  <p className="text-sm text-yellow-800">{`选择住在要塞所在山崖背面的半山腰民宿，需要开车盘旋而上，但环境清幽如同世外桃源，房东老爷爷会给你讲他祖父在二战时躲在山里的故事。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端河畔享受`}</h4>
                  <p className="text-sm text-purple-800">{`位于迪南上游几公里处默兹河畔的城堡酒店，本身就是一个19世纪的贵族庄园，提供米其林推荐餐厅和游船接送服务，让你用贵族般的视角感受河谷的宁静。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`迪南是一个非常安全宁静的小城，但老城区的石板路拖着大行李箱会非常吃力，预订时最好确认酒店是否提供停车场或协助搬运服务。夏季和圣诞市场期间是绝对旺季，住宿价格会上涨且很快订满，如果计划那时来访，至少提前三个月预订。住在城外民宿虽然安静，但晚上进出可能需要出租车，公共交通傍晚后班次很少。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开迪南要塞时，我的背包似乎比来时重了一些。那里面装的不再是单纯的风景明信片，而是一段被岩石和河水共同封存的、沉甸甸的时间。这座堡垒教会我的，不是历史的宏大叙事，而是一种具体的、细微的痛感与希望。它让你触摸弹孔，也让你聆听萨克斯风；它让你凝视死亡名单，也让你俯瞰生者泛舟。这种巨大的张力，恰恰是我们这个常常简化一切、非黑即白的时代最需要的一课。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你追求的旅行，不仅仅是打卡和拍照，而是愿意让一个地方真正地“穿过”你——留下一些难以言喻的痕迹，那么请来迪南要塞。站在那悬崖上，你会明白，真正的坚韧不是从未受伤，而是带着伤痕依然选择歌唱；最美的风景，也往往生长在最深刻的裂缝之上。这里没有提供轻松的答案，却给了我们一个无比重要的视角：去凝视历史的深渊，然后，更用力地拥抱眼前的阳光与河风。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/braubach-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布劳巴赫城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Braubach Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/dinant-saxophone-town-belgium" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迪南（铜管乐器之乡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dinant</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/arlon-roman-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔隆古罗马遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Arlon Roman Ruins</p>
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
