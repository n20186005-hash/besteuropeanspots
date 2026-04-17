import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '凯米雪城 Kemi SnowCastle｜每年冬日限定的波的尼亚湾纯冰雪堡垒奇幻体验 - 最佳欧洲景点',
  description: '你第一眼看到它的时候，会怀疑自己是不是闯进了一个巨人用糖霜和钻石堆砌的梦境。那不是你在迪士尼动画里看到的石头城堡，它的轮廓在芬兰拉普兰清冽的、泛着蓝光的空气里，显得既宏伟又脆弱。走近了，那股子寒气先扑过来，不是刺痛，是一种非常干净的、带着松针和远方海洋气息的冷。手摸上外墙，触感光滑而坚硬，指尖传来的...',
}

export default function KemiSnowcastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '凯米雪城', href: '/attractions/kemi-snowcastle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`凯米雪城・Kemi SnowCastle・芬兰・凯米`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼看到它的时候，会怀疑自己是不是闯进了一个巨人用糖霜和钻石堆砌的梦境。那不是你在迪士尼动画里看到的石头城堡，它的轮廓在芬兰拉普兰清冽的、泛着蓝光的空气里，显得既宏伟又脆弱。走近了，那股子寒气先扑过来，不是刺痛，是一种非常干净的、带着松针和远方海洋气息的冷。手摸上外墙，触感光滑而坚硬，指尖传来的是零下十几度的、实实在在的“存在感”——是的，这整座带着塔楼、城墙和复杂浮雕的庞然大物，全是雪和冰，没有一块砖，没有一根钢筋。
穿过拱形的城门，光线陡然一变。阳光透过厚厚的、被精心雕刻过的冰墙折射进来，不再是白色，而是弥漫开一种柔和的、蓝莹莹的光晕，仿佛置身于一颗巨大的宝石内部。耳边很安静，只有靴子踩在压实的雪地上发出的“咯吱”声，偶尔夹杂着其他游客压低音量的、忍不住的惊叹。你的呼吸化成白雾，迅速消散在这冰的宫殿里。这里不像一个单纯的景点，更像一个季节性的社区广场。你会看到本地的小孩兴奋地从一个冰滑梯上尖叫着溜下来，看到一对老夫妇手挽着手，在冰雪画廊里仔细端详今年的冰雕作品，那可能是关于萨米人传说的场景，也可能是一群跃出海面的独角鲸。
最打动人心的，莫过于知道这一切的“短暂”。你所在的这个大厅，几个月后就会化为一滩春水，回归波的尼亚湾。明年冬天，工匠们又会从海中取冰，重新构思，建起一个全新的、只存在一季的幻梦。这种极致的“一期一会”，让每一刻的体验都充满了神圣的仪式感。你不是在参观一个古迹，你是在参与一个正在发生的、关于冬天、想象力与消亡的盛大寓言。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你第一眼看到它的时候，会怀疑自己是不是闯进了一个巨人用糖霜和钻石堆砌的梦境。那不是你在迪士尼动画里看到的石头城堡，它的轮廓在芬兰拉普兰清冽的、泛着蓝光的空气里，显得既宏伟又脆弱。走近了，那股子寒气先扑过来，不是刺痛，是一种非常干净的、带着松针和远方海洋气息的冷。手摸上外墙，触感光滑而坚硬，指尖传来的是零下十几度的、实实在在的“存在感”——是的，这整座带着塔楼、城墙和复杂浮雕的庞然大物，全是雪和冰，没有一块砖，没有一根钢筋。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过拱形的城门，光线陡然一变。阳光透过厚厚的、被精心雕刻过的冰墙折射进来，不再是白色，而是弥漫开一种柔和的、蓝莹莹的光晕，仿佛置身于一颗巨大的宝石内部。耳边很安静，只有靴子踩在压实的雪地上发出的“咯吱”声，偶尔夹杂着其他游客压低音量的、忍不住的惊叹。你的呼吸化成白雾，迅速消散在这冰的宫殿里。这里不像一个单纯的景点，更像一个季节性的社区广场。你会看到本地的小孩兴奋地从一个冰滑梯上尖叫着溜下来，看到一对老夫妇手挽着手，在冰雪画廊里仔细端详今年的冰雕作品，那可能是关于萨米人传说的场景，也可能是一群跃出海面的独角鲸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，莫过于知道这一切的“短暂”。你所在的这个大厅，几个月后就会化为一滩春水，回归波的尼亚湾。明年冬天，工匠们又会从海中取冰，重新构思，建起一个全新的、只存在一季的幻梦。这种极致的“一期一会”，让每一刻的体验都充满了神圣的仪式感。你不是在参观一个古迹，你是在参与一个正在发生的、关于冬天、想象力与消亡的盛大寓言。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`凯米雪城`} />
                <InfoRow label="英文名称" value={`Kemi SnowCastle`} />
                <InfoRow label="正式名称" value={`Kemi SnowCastle`} />
                <InfoRow label="国家" value={`芬兰`} />
                <InfoRow label="城市" value={`凯米`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`世界上最大的、每年重建的冰雪堡垒，是芬兰冬季旅游的标志性创造物。`} />
                <InfoRow label="建筑特色" value={`完全由本地海域的自然冰雪（包括波的海的雪和冰）砌成，内含酒店、餐厅、教堂等完整功能空间。`} />
                <InfoRow label="建筑风格" value={`每年主题变幻的巨型冰雪雕塑集合体，风格从奇幻城堡到现代艺术不等。`} />
                <InfoRow label="文化价值" value={`体现了北欧人与自然冬季共存的智慧、幽默与极致浪漫，是短暂而壮丽的“冰建筑”艺术的活态展示。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`通常于每年一月中旬至四月初开放，具体日期取决于当年冬季气温与建造进度。开放期间每天上午10点至晚上8点可进入城堡主体区域；冰雪酒店住宿区域24小时可入住。需特别注意，城堡可能因异常温暖天气提前关闭或进行局部修复，出行前务必在其官网确认最新状态。`} />
              <InfoRow label="门票价格" value={`一日通票：成人约18欧元，儿童（4-14岁）约9欧元，4岁以下免费。家庭票（2大2小）约45欧元。门票包含城堡内所有冰雪艺术画廊、冰雪教堂、冰雪餐厅公共区域及部分游乐设施的参观。冰雪酒店住宿费用另计，标准冰屋双人房一晚体验（含早餐和睡袋）约300-400欧元，价格因具体日期和房型浮动。持有芬兰博物馆通票或拉普兰地区旅游卡可能有小额折扣。`} />
              <InfoRow label="地址" value={`Kauppakatu 29, 94100 Kemi, Finland`} />
              <InfoRow label="交通方式" value={`最近的主要机场是凯米-托尔尼奥机场（Kemi-Tornio Airport，代码KEM），距离雪城约7公里。从赫尔辛基飞往凯米约1.5小时。从机场搭乘出租车约15分钟可达雪城，费用约25-30欧元。火车是更经济的选择：从赫尔辛基乘坐VR国铁夜班火车或日间列车直达凯米中央车站（Kemi Railway Station），车程约8-9小时。火车站距离雪城仅1.2公里，步行约15-20分钟，或乘坐本地公交在“Kauppakatu”站下车。冬季路面冰雪覆盖，建议穿着防滑鞋步行。自驾车可将车停在雪城旁的免费公共停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从1996年那个异常寒冷的冬天说起。当时的凯米，这座位于波罗的海北岸的工业小城，正苦于漫长的冬季旅游业低迷。有人提出了一个近乎疯狂的想法：何不利用我们最丰富的资源——冰雪，造点真正吸引眼球的东西？于是，为了给当年一艘破冰船的首航仪式造势，第一批工匠和艺术家们集结起来，在港口边堆砌起了第一座简陋的冰雪堡垒。没人能想到，那个带着实验性质的“一次性”项目，竟然引起了轰动。人们从芬兰各地赶来，就为了看看这座能用冰做墙、用雪当瓦的奇异建筑。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最初的几年，雪城规模不大，更像一个精致的冰雪游乐园。转机出现在千禧年前后，随着“冰雪酒店”概念在瑞典尤卡斯耶尔维兴起，凯米人看到了更深的潜力。他们想：我们能不能不只是让人看看，而是让人真正住进去？于是，冰酒吧、冰餐厅、甚至冰教堂被一点点添加进来。工匠们从波的尼亚湾切割出巨大的、晶莹剔透的海冰作为酒吧台面和教堂的“彩窗”；从森林运来纯净的积雪，压实后成为酒店的墙壁。每一年的建造都像一场与天气和时间的赛跑。通常在一月初，当气温稳定在零下十度以下，庞大的建造工程就开始了。重型机械轰鸣，但最精细的部分——那些墙面上的神话浮雕、走廊尽头的精灵雕塑、穹顶的花纹——全靠工匠们手持冰锯和凿子，一毫米一毫米地雕刻出来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`雪城的命运也与气候变化紧紧相连。记得有几个暖冬，建造进度异常缓慢，甚至有过开放日期一推再推的窘境。这也反过来塑造了它的文化内核：它成了气候变化最直观、最美丽的“警示碑”。人们欣赏它的绚烂，也深知它的脆弱。这些年来，它的主题从北欧神话、圣诞传说，到环保倡议、极地生灵，不断演变。它经历过暴风雪的考验，部分结构曾被摧毁又紧急修复；也享受过在极光摇曳的夜空下，城堡被映照成翡翠色的高光时刻。它不再仅仅是凯米的旅游名片，更成了芬兰人冬季精神的象征——在极端严寒中，不是蜷缩躲避，而是主动创造美与欢乐，并坦然接受季节轮回带来的消逝。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如今，每年参与建造的已经是第三代“冰雪建筑师”了。他们继承了老师傅的手艺，也引入了3D建模和更科学的保温技术。但核心从未改变：取材于自然，最终归还于自然。这座城堡没有永恒的设计图纸，它的蓝图存在于每一代工匠的想象力和对当年冬天最深的感受里。当你漫步其中，你触摸的不仅仅是冰，还是一整年的等待、数百人的协作，以及一个城市对冬季最深情的告白。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`强烈建议在下午两点前抵达。芬兰拉普兰冬季白日短暂，下午三点左右天色就开始转暗。利用充足的自然光线（即便是灰蒙蒙的白天，冰雪也会反射柔和的光）仔细欣赏建筑和雕塑的细节。整体游览建议预留至少3-4小时。先快速浏览外围的壮观全景，然后进入城堡内部，按照从公共区域到私密体验的顺序，由动到静，最后以一杯冰杯盛的热饮或一次温暖的桑拿结束。这样安排能让你逐渐适应内部温度，并体验到从兴奋惊叹到内心宁静的完整情绪曲线。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿最防滑的雪地靴！城堡内外地面全是冰，普通靴子寸步难行。尽管内部温度在零下5度左右，但长时间静止观看会很冷，采用“洋葱式穿法”，并随身携带暖宝宝。在冰酒吧点饮品前先问清价格，有些特色冰杯饮品价格不菲。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从正门巨大的冰拱门下进入，立刻右转去冰雪信息台领取一份当季的主题地图，让它成为你探索这座迷宫的第一个线索。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`毫不犹豫地直奔城堡中央最高的冰雪观景塔，沿着螺旋上升的冰阶梯攀登，在塔顶喘着气俯瞰整个堡垒如白色折纸艺术品般的复杂布局和远处冰封的海港。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下来后钻进今年主题的冰雪艺术长廊，放慢脚步，让手指在不触碰的前提下近距离感受那些雕刻在冰墙上的细腻故事——可能是奔跑的驯鹿群，也可能是海浪的凝固瞬间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在冰雪教堂的长冰凳上安静坐五分钟，听一听绝对寂静中你自己的心跳，观察光线透过巨大的冰块“玫瑰窗”在地面投下不断变化的淡蓝色光斑。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`去著名的冰酒吧用戴着厚手套的手接过一杯用冰杯盛的蓝莓汁或无酒精鸡尾酒，试着小口啜饮，感受那奇妙的、从内唇蔓延开的凛冽果香。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果预订了体验，大胆地溜进那座五彩灯光变幻的冰滑梯，享受十几秒孩子般的、在冰隧道里飞驰的简单快乐。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在冰雪餐厅的冰桌旁坐下（座位铺有保暖的鹿皮），尝尝可能有的特色热汤或烤香肠，用味觉的温暖对比环境的清冷。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`务必在黄昏蓝调时刻（下午三点左右）再次走到城堡外的海湾边，回望亮起暖黄色灯光的雪城，看它从白日的童话王国变成黑夜中一颗温暖的发光宝盒。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡外侧海湾冰面远眺点`}</h4>
                  <p className="text-sm text-gray-700">{`选择黄昏日落前后半小时的“蓝调时刻”，从波的尼亚湾冰封的海面上（需确认冰层安全）用广角镜头拍摄，将城堡与其在水晶般冰面上的倒影一同纳入画面，营造孤寂而宏伟的史诗感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`冰雪教堂祭坛正面视角`}</h4>
                  <p className="text-sm text-gray-700">{`利用三脚架，在游客稀少的清晨或晚餐时间，从入口处低角度拍摄，将祭坛后巨大的冰雕十字架或主题雕塑作为焦点，两侧的冰柱自然形成引导线，营造神圣的纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`冰酒吧内部氛围特写`}</h4>
                  <p className="text-sm text-gray-700">{`将相机白平衡调至“钨丝灯”模式或手动设置偏冷色温，捕捉冰杯内彩色饮品在特殊灯光下折射出的迷幻光影，对焦在杯壁凝结的细微霜花上。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`主题冰雕走廊的对称构图`}</h4>
                  <p className="text-sm text-gray-700">{`找到一条两侧有精美浮雕的走廊，站在正中间，使用对称构图，利用走廊本身的线条引导视线至尽头的窗户或光源，突出建筑的几何美和无限延伸感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从冰雪酒店标准房门口向内拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`如果你入住或获得参观许可，站在房门口，拍摄铺着鹿皮垫子的冰床、冰床头柜和墙上简单的冰雕装饰，用画面讲述“睡在冰中”的奇妙故事。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`极寒天气对相机电池是严峻考验，多准备几块备用电池并贴身保暖。从极冷室外进入稍暖的室内（如洗手间）时，相机镜头会立刻起雾，务必提前将相机装入密封袋，待其温度缓慢回升后再取出。使用无人机拍摄前，务必查清当地法规并避开酒店隐私区域。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`极致体验首选`}</h4>
                  <p className="text-sm text-blue-800">{`当然是住在雪城内部的冰雪酒店标准冰屋里，裹在特制的防风睡袋中，在零下五度的寂静里入眠，清晨被工作人员送来的热浆果茶唤醒，完成一生难忘的挑战。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`温暖舒适之选`}</h4>
                  <p className="text-sm text-green-800">{`选择步行仅5分钟的“海港酒店”，在享用完雪城奇幻夜晚后，可以立刻回到暖气充足的房间和温暖的玻璃顶桑拿房，看着星空舒缓身心。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`家庭温馨之选`}</h4>
                  <p className="text-sm text-yellow-800">{`凯米市中心由家族经营的“河畔民宿”，主人会贴心准备丰盛的北欧早餐，并分享许多本地人才知道的冬季活动小秘密，如附近最佳的极光观测点。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计感精品之选`}</h4>
                  <p className="text-sm text-purple-800">{`位于托尔尼奥（车程20分钟）的“设计师冰屋别墅”，拥有全玻璃穹顶和壁炉，既能躺在床上看极光，又享受现代化的奢华设施，是浪漫与舒适的完美结合。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`预订冰雪酒店一定要确认其提供的御寒装备是否齐全（通常包括睡袋、保暖内衣和帽子）。无论住哪里，冬季凯米的酒店预订都非常紧张，尤其是在二月和三月的学校假期，务必提前数月规划。市区治安极好，但冬季夜晚街道空旷寂静，女性独行旅客也无需担心。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开凯米雪城很久以后，我脑海里反复出现的，不是某一块冰雕多么精致，也不是那杯冰酒多么奇特，而是一种挥之不去的关于“短暂与永恒”的思考。在我们习惯追求永恒纪念碑的世界里，竟然有这样一群人，每年投入巨大的心血，去建造一座明知会消失的城堡。这行为本身，就充满了诗意的反抗。它告诉我们，美不一定需要以千年为单位来证明自己的价值。极致地绽放一季，然后坦然融化，这何尝不是一种更勇敢、更贴近生命本质的存在方式？`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位热爱深度游的旅人，都应该在冬季来一次凯米。你来，不仅仅是为了一座城堡。你是来参与一个正在发生的当代神话，来触摸一种转瞬即逝的勇气，来在彻骨的寒冷中，感受最炽热的创造热情。当春天来临，城堡化为流水，你记忆里的那片蓝光，却会成为你心中一座永不消融的冰雪堡垒。它提醒你，世间有些极致的美好，正因为无法占有、无法重复，才显得如此纯粹和珍贵。这，或许就是旅行能带给我们的，最深刻的哲学课。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/old-rauma" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    劳
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">劳马古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Old Rauma</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/turku-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    图
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">图尔库城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Turku Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lenzkirch" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    伦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">伦茨基尔希城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lenzkirch Castle</p>
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
