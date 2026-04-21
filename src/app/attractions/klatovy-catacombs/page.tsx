import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '克拉托维地下墓穴 Klatovy Catacombs｜揭秘欧洲最神秘的中世纪干尸与时光隧道 - 最佳欧洲景点',
  description: '第一眼看到克拉托维的耶稣会教堂，你可能会觉得它只是又一个捷克小镇上优雅的巴洛克面孔。淡黄色的外墙，线条柔和的穹顶，在广场上投下温和的影子。空气中飘着附近咖啡馆现磨咖啡的香气，和鸽子在广场石板路上踱步的咕咕声。当地人骑着自行车从教堂前经过，神态悠闲，仿佛这座建筑只是他们日常风景里一个熟悉的背景。但你的',
}

export default function KlatovyCatacombsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '捷克', href: '/destinations/czech-republic' },
            { label: '克拉托维耶稣会教堂与地下墓穴', href: '/attractions/klatovy-catacombs' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`克拉托维耶稣会教堂与地下墓穴・Klatovy Catacombs・捷克・克拉托维`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到克拉托维的耶稣会教堂，你可能会觉得它只是又一个捷克小镇上优雅的巴洛克面孔。淡黄色的外墙，线条柔和的穹顶，在广场上投下温和的影子。空气中飘着附近咖啡馆现磨咖啡的香气，和鸽子在广场石板路上踱步的咕咕声。当地人骑着自行车从教堂前经过，神态悠闲，仿佛这座建筑只是他们日常风景里一个熟悉的背景。但你的脚步，会被地下墓穴入口处那块不起眼却透着寒意的指示牌拉住——真正的故事，埋藏在阳光照不进的地方。
顺着狭窄的旋梯往下走，气温骤降，光线瞬间被吸走，只剩下导游手电筒划破的幽暗。最先袭击你的不是景象，而是一种气味——一种混合了古老尘土、潮湿砖石，以及一种难以名状的、类似干燥草药与陈旧羊皮纸的独特气息。这就是传说中的“克拉托维土壤”的味道，正是这种神奇的土壤成分，让时间在这里以另一种方式流动。当你的眼睛适应昏暗，手电光柱照亮拱廊深处时，心跳会漏掉一拍：那里静静地站立、安坐着数十个身影。他们不是雕塑，而是真实的、跨越了三个世纪时光的“居民”。
这些干尸大多保持着下葬时的姿态，有些双手交叠仿佛在祈祷，有些侧卧如同安眠。皮革般的皮肤紧贴着骨骼轮廓，脸上甚至还能看到胡须、睫毛的细微痕迹，身上残存的衣料碎片——蕾丝领口、织锦马甲——诉说着他们生前的地位。这种观看毫无阴森恐怖之感，反而充满了一种庄严的宁静。你会意识到，你正站在生与死、记忆与遗忘那道最纤细的边界线上。他们不是被展示的奇观，而是一群被土地和时间以特殊方式挽留的见证者，沉默地讲述着关于信仰、疾病、以及人类面对永恒最原始的渴望。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到克拉托维的耶稣会教堂，你可能会觉得它只是又一个捷克小镇上优雅的巴洛克面孔。淡黄色的外墙，线条柔和的穹顶，在广场上投下温和的影子。空气中飘着附近咖啡馆现磨咖啡的香气，和鸽子在广场石板路上踱步的咕咕声。当地人骑着自行车从教堂前经过，神态悠闲，仿佛这座建筑只是他们日常风景里一个熟悉的背景。但你的脚步，会被地下墓穴入口处那块不起眼却透着寒意的指示牌拉住——真正的故事，埋藏在阳光照不进的地方。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`顺着狭窄的旋梯往下走，气温骤降，光线瞬间被吸走，只剩下导游手电筒划破的幽暗。最先袭击你的不是景象，而是一种气味——一种混合了古老尘土、潮湿砖石，以及一种难以名状的、类似干燥草药与陈旧羊皮纸的独特气息。这就是传说中的“克拉托维土壤”的味道，正是这种神奇的土壤成分，让时间在这里以另一种方式流动。当你的眼睛适应昏暗，手电光柱照亮拱廊深处时，心跳会漏掉一拍：那里静静地站立、安坐着数十个身影。他们不是雕塑，而是真实的、跨越了三个世纪时光的“居民”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这些干尸大多保持着下葬时的姿态，有些双手交叠仿佛在祈祷，有些侧卧如同安眠。皮革般的皮肤紧贴着骨骼轮廓，脸上甚至还能看到胡须、睫毛的细微痕迹，身上残存的衣料碎片——蕾丝领口、织锦马甲——诉说着他们生前的地位。这种观看毫无阴森恐怖之感，反而充满了一种庄严的宁静。你会意识到，你正站在生与死、记忆与遗忘那道最纤细的边界线上。他们不是被展示的奇观，而是一群被土地和时间以特殊方式挽留的见证者，沉默地讲述着关于信仰、疾病、以及人类面对永恒最原始的渴望。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`克拉托维耶稣会教堂与地下墓穴`} />
                <InfoRow label="英文名称" value={`Klatovy Catacombs`} />
                <InfoRow label="正式名称" value={`Jesuit Church of the Immaculate Conception and St. Ignatius with the Catacombs`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`克拉托维`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`中欧保存最完好的、自然形成的木乃伊化干尸群所在地，是研究17-18世纪丧葬文化与自然防腐现象的独一无二的时间胶囊。`} />
                <InfoRow label="建筑特色" value={`地上是宏伟的巴洛克式耶稣会教堂，地下则隐藏着由简朴砖砌拱廊构成的迷宫，两者形成神圣与尘世、辉煌与幽暗的极致对比。`} />
                <InfoRow label="建筑风格" value={`地上教堂主体为巴洛克风格，带有早期哥特式元素；地下墓穴是纯粹功能性的哥特晚期至文艺复兴时期的砖拱结构。`} />
                <InfoRow label="文化价值" value={`它是理解捷克在哈布斯堡王朝统治下，天主教复兴、瘟疫恐惧、以及对死亡进行“展示”与“记忆”这一复杂文化心态的物理教科书。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`教堂地面部分：全年开放，夏季（4月-10月）通常为上午9点至下午5点，冬季（11月-3月）为上午10点至下午4点，具体时间可能因宗教活动微调。地下墓穴参观：仅限导游带领的团队进入，英语导游团通常在夏季每日下午1点与3点各一场，冬季场次减少或需提前预约，强烈建议出发前在官网确认并预订。节假日（如复活节、圣诞节）开放时间变化极大，很可能全天关闭。`} />
              <InfoRow label="门票价格" value={`基础参观券（仅教堂地面）：成人约80捷克克朗，学生及老人约50捷克克朗。完整导游团（含地下墓穴）：成人约180捷克克朗，学生及老人约120捷克克朗，家庭套票（2大2小）约450捷克克朗。6岁以下儿童免费。门票可在教堂入口处或游客信息中心购买，但墓穴导游团名额有限，强烈建议在线提前预订。`} />
              <InfoRow label="地址" value={`Sv. Jana Nepomuckého 1, 339 01 Klatovy, Czech Republic`} />
              <InfoRow label="交通方式" value={`从布拉格出发最方便：在布拉格中央火车站（Praha hl.n.）乘坐前往比尔森或捷克布杰约维采方向的区域性火车，在克拉托维主站下车，车程约2小时，班次每小时约1-2班，可通过捷克铁路官网购票。从比尔森出发更近：乘坐火车或巴士约40分钟即可抵达。克拉托维小镇很小，火车站步行至教堂仅需10-15分钟，沿着有路标的宁静街道轻松可达。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`克拉托维的故事，要从一场轰轰烈烈的“反宗教改革”运动说起。17世纪初，哈布斯堡王朝为了巩固天主教势力，将耶稣会教士派往波希米亚的各个角落。1665年，耶稣会士们来到了克拉托维这座繁荣的商贸小镇，决心在此建立信仰的灯塔。他们选址在城镇中心，开始修建这座献给圣母无染原罪和圣依纳爵的教堂。地上部分，是向天穹敞开的巴洛克赞美诗，充满了光、壁画和金色的装饰。然而，与此同时，一个更深层、更隐秘的计划在地下展开：他们开始系统地修建一个庞大的地下墓穴系统。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`起初，这里只是神职人员和当地显贵家族传统的安息之地。转机出现在18世纪中叶，大约1784年前后。当时，教堂决定清理部分老墓穴以腾出空间，工人们惊讶地发现，许多数十年前下葬的遗体并未腐烂，而是变成了保存完好的干尸。这一发现震惊了整个地区。经过调查，功劳被归于墓穴下方一种特殊的、干燥且富含某种矿物质成分的土壤，以及地下空间恒定低温、良好通风的独特微气候。自然的魔法在此生效，死亡的过程被奇迹般地延缓了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，一种独特的殡葬实践悄然形成。墓穴不再仅仅是一个埋葬地点，更成为一个“不朽”的陈列所。有权势的家庭争相将自己的亲人安葬于此，希望亲人的形体能在世间多“停留”一会儿，仿佛是对抗彻底消亡的一种微弱胜利。最鼎盛时期，这里安放着超过200具自然形成的干尸。他们中有市长、富商、军官，也有普通的耶稣会修士和医生。每一具干尸都是一个凝固的人生故事。然而，好景不长。18世纪80年代，约瑟夫二世皇帝推行改革，以公共卫生为由，下令禁止在城市内进行墓葬。墓穴的官方使用戛然而止，沉重的入口被封闭，这个地下的世界逐渐被地上忙碌的生者所遗忘。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`遗忘并未持续到永远。20世纪，尤其是二战和其后的共产主义时期，墓穴经历了最艰难的考验。通风系统被破坏，湿度侵入，加上无人维护，许多干尸开始严重损毁、霉变。它一度面临被彻底废弃的命运。转机出现在上世纪80年代末，一群有远见的历史学家和文物保护者开始为拯救这里而奔走。经过漫长而精细的修复工作，包括重建通风系统、控制环境参数、以及对剩余约40具状态最好的干尸进行科学保护，这个地下世界终于在21世纪初重新谨慎地向公众开放。它不再是一个被遗忘的坟场，而是一座关于生命、死亡、记忆和韧性的沉静博物馆。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`理想的深度游览请安排至少3小时，并务必提前预订好下午的英文导游团。建议在上午10点左右抵达，先花一个小时沉浸在地面教堂的巴洛克氛围里，适应小镇的节奏。然后在小镇广场找家老餐馆享用一顿地道的捷克午餐。下午的墓穴之旅是整个行程的高潮，跟随导游的讲解深入地下，这个过程大约需要60-75分钟。游览结束后，不要急着离开，回到阳光下的广场长椅坐一会儿，让那种穿越时空的震撼慢慢沉淀。这种从光明到黑暗再回归光明的节奏，能让你最完整地体验此地多层次的情感冲击。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`地下墓穴常年温度只有8-10摄氏度，且湿度较高，务必带一件保暖外套，穿防滑的鞋子。
导游团非常依赖讲解员的专业知识，务必提前确认英语团的时间并准时到达，错过无法补票。
这是一个庄严的场所，请保持肃静，尊重逝者，未经允许绝对不要对干尸拍照。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`上午先绕着教堂外围走一圈，仰头看看那两座巴洛克塔楼在湛蓝天空下的剪影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`轻轻推开沉重的木门进入教堂内部，让眼睛适应从彩色玻璃窗滤进来的、带着灰尘跳舞的柔和光线。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`仔细寻找中殿壁画里那些关于天堂与救赎的细节，感受巴洛克艺术试图用辉煌驱散死亡阴影的努力。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在导游集合时间前十分钟，回到阴凉的入口门廊，感受从地下室楼梯口隐隐渗上来的那股凉气。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随导游的手电光晕走下螺旋石阶，每一步都感觉正在离开21世纪，踏入一个时间流速不同的领域。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在最大的拱廊大厅静立片刻，尝试与那些沉默的“居民”进行一场跨越百年的无声对话。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`留心观察干尸身旁的微小物品，比如一枚褪色的戒指或一片精致的衣领，那是他们曾经鲜活存在的证据。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回到地面后，第一时间感受阳光洒在皮肤上的温暖，你会对“此刻”的生命拥有全新的感恩。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`教堂正面仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`选择晴朗的下午，阳光从西侧照亮淡黄色外墙时，站在广场喷泉附近，将教堂雄伟的巴洛克立面与一角蓝天一同构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`墓穴入口光影`}</h4>
                  <p className="text-sm text-gray-700">{`参观结束后，在通往地下的石阶顶端，利用自然侧光拍摄那深邃、向下盘旋的楼梯，营造强烈的纵深感与神秘氛围。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`地面教堂彩色玻璃窗特写`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光最烈时，在教堂内部寻找一扇彩色玻璃窗，拍摄光线穿透彩绘玻璃，在古老长椅和石地板上投下斑斓光影的画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`小镇俯瞰视角`}</h4>
                  <p className="text-sm text-gray-700">{`参观完毕后，可以走到小镇边缘的小山坡上，用长焦镜头将教堂的塔楼与背后成片的红瓦屋顶一同收纳，拍下它融入日常生活的宁静一刻。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`地下墓穴内严禁使用闪光灯，因为强光会对已有数百年历史的有机质干尸造成不可逆的损害。地下光线极暗，若想拍摄环境氛围，请使用大光圈镜头和高感光度相机，并尽量保持相机稳定。构图时多利用导游的手电光作为创意光源，可以拍出极具戏剧性的效果。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`小镇情怀之选`}</h4>
                  <p className="text-sm text-blue-800">{`广场旁一栋16世纪市民住宅改造的精品客栈，木头房梁咯吱作响，早晨会被面包房传来的新鲜烤面包香味唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验之选`}</h4>
                  <p className="text-sm text-green-800">{`坐落在镇外静谧森林边缘的一座19世纪新哥特式小城堡酒店，房间宽敞，充满复古家具，仿佛住进贵族庄园。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端舒适之选`}</h4>
                  <p className="text-sm text-yellow-800">{`比尔森市中心的现代设计酒店，距离克拉托维约40分钟车程，提供顶级水疗和当地特色啤酒浴，适合游览后彻底放松。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`背包客社交之选`}</h4>
                  <p className="text-sm text-purple-800">{`克拉托维或附近比尔森老城内气氛友好的青年旅舍，由老房子改建，公共厨房经常聚集着来自世界各地的旅行者，方便交流信息。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`克拉托维本身非常安全宁静，但夜生活几乎为零，喜欢热闹的旅客更适合住在外围的比尔森。夏季和圣诞市场期间是旺季，小镇住宿很快会订满，务必提前规划。许多家庭式民宿不设24小时前台，预订时请务必确认入住时间。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开克拉托维很久以后，那片地下的静谧和地面上咖啡的香气，会以一种奇特的方式在你记忆中交织。你发现你记住的，并非干尸那可怖的形态，而是那种绝对的宁静，以及土壤、石头和时光混合成的特殊气味。这个地方教会你的，不是关于死亡的可怖，而是关于“存在”的深沉形式。在一个我们习惯于数字存档、记忆随时可能被清除的时代，这些被自然之力温柔保存的形体，成为一种固执的、物理化的记忆，提醒我们生命曾经如此真实地血肉丰满过。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它之所以值得被列入一生必去的清单，正是因为它提供了一种在城市博物馆里无法获得的体验——一种直面生命有限性的、近乎仪式感的沉思。你不是在观看被玻璃罩隔开的历史，而是站在历史之中，感受到时间的重量和人类的呼吸同样真切。当你从那个阴凉的世界返回，重新沐浴在捷克波希米亚的阳光下，你会感觉眼前平凡的生活景象——孩子们在广场奔跑，老人坐在长椅上看报——都焕发出一种前所未有的、珍贵的光芒。克拉托维的墓穴，最终是一面镜子，它让我们在凝视过往的“永恒”时，更深刻地拥抱当下的鲜活。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/telc-square" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特尔奇广场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Telč Square</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/brno-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布尔诺老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Brno Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vranov-castle-baroque-perch" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    弗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">弗拉诺夫城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vranov Castle</p>
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
