import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '塔拉河峡谷 Tara River Canyon｜欧洲最深峡谷的心脏，驾一叶皮筏闯进翡翠秘境 - 最佳欧洲景点',
  description: '当我第一次站在塔拉河峡谷的边缘，那种感觉不是“看见”一片风景，而是被一个巨大的、绿色的、呼吸着的存在所“吞没”。脚下是深不见底的虚空，目光需要坠落好几秒，才能触及那一缕在谷底奔腾的、翡翠般的丝带——那就是塔拉河。风从深渊里卷上来，带着河水撞击巨石的湿润水汽，混合着高处黑松林沁出的冷冽松香，猛地扑在脸',
}

export default function TaraRiverCanyonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '黑山', href: '/destinations/montenegro' },
            { label: '塔拉河峡谷', href: '/attractions/tara-river-canyon' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`塔拉河峡谷・Tara River Canyon・黑山・扎布利亚克`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当我第一次站在塔拉河峡谷的边缘，那种感觉不是“看见”一片风景，而是被一个巨大的、绿色的、呼吸着的存在所“吞没”。脚下是深不见底的虚空，目光需要坠落好几秒，才能触及那一缕在谷底奔腾的、翡翠般的丝带——那就是塔拉河。风从深渊里卷上来，带着河水撞击巨石的湿润水汽，混合着高处黑松林沁出的冷冽松香，猛地扑在脸上。声音是立体的，近处是风过松针的沙沙细语，而谷底传来永恒不变的、低沉的轰鸣，那是河流亿万年的心跳。
这里没有围墙，没有大门，你只是从一片平凡的森林公路一个转弯，就直接踏入了地球的一道裂缝。在几个著名的观景台，你会遇到架着长焦镜头的游客，但只要你愿意沿着任何一条看似是小兽足迹的土路往里走上十分钟，整个世界就立刻安静下来。你会看到本地人开着老旧的轿车停在路边，一家老小铺开野餐毯，面对深渊吃着简单的面包和熏肉，孩子在不远处玩耍——这峡谷对他们而言，不是景点，是后院，是周末习以为常的壮阔。这种“日常与极致并存”的反差，是它最初的魅力。
而最摄人心魄的，是那抹绿色。塔拉河的绿，是一种有魔力的绿。它不是静止的湖绿，而是因为富含矿物质和激流涌动，在阳光下呈现出一种跳动的、近乎不真实的祖母绿和孔雀蓝。当你乘着皮划艇进入峡谷腹地，仰头望去，两侧是高达数百米、近乎垂直的石灰岩壁，岩缝中顽强生长着树木，天空被挤成一条曲折的亮线。水花溅到脸上，冰凉清澈，水的轰鸣在岩壁间来回碰撞，放大成震耳欲聋的交响。那一刻，你彻底成为这地质史诗里的一个微小音符。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当我第一次站在塔拉河峡谷的边缘，那种感觉不是“看见”一片风景，而是被一个巨大的、绿色的、呼吸着的存在所“吞没”。脚下是深不见底的虚空，目光需要坠落好几秒，才能触及那一缕在谷底奔腾的、翡翠般的丝带——那就是塔拉河。风从深渊里卷上来，带着河水撞击巨石的湿润水汽，混合着高处黑松林沁出的冷冽松香，猛地扑在脸上。声音是立体的，近处是风过松针的沙沙细语，而谷底传来永恒不变的、低沉的轰鸣，那是河流亿万年的心跳。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里没有围墙，没有大门，你只是从一片平凡的森林公路一个转弯，就直接踏入了地球的一道裂缝。在几个著名的观景台，你会遇到架着长焦镜头的游客，但只要你愿意沿着任何一条看似是小兽足迹的土路往里走上十分钟，整个世界就立刻安静下来。你会看到本地人开着老旧的轿车停在路边，一家老小铺开野餐毯，面对深渊吃着简单的面包和熏肉，孩子在不远处玩耍——这峡谷对他们而言，不是景点，是后院，是周末习以为常的壮阔。这种“日常与极致并存”的反差，是它最初的魅力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而最摄人心魄的，是那抹绿色。塔拉河的绿，是一种有魔力的绿。它不是静止的湖绿，而是因为富含矿物质和激流涌动，在阳光下呈现出一种跳动的、近乎不真实的祖母绿和孔雀蓝。当你乘着皮划艇进入峡谷腹地，仰头望去，两侧是高达数百米、近乎垂直的石灰岩壁，岩缝中顽强生长着树木，天空被挤成一条曲折的亮线。水花溅到脸上，冰凉清澈，水的轰鸣在岩壁间来回碰撞，放大成震耳欲聋的交响。那一刻，你彻底成为这地质史诗里的一个微小音符。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`塔拉河峡谷`} />
                <InfoRow label="英文名称" value={`Tara River Canyon`} />
                <InfoRow label="正式名称" value={`Tara River Canyon`} />
                <InfoRow label="国家" value={`黑山`} />
                <InfoRow label="城市" value={`扎布利亚克`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是欧洲最深、最长的河流峡谷之一，最深处达1300米，是黑山的“母亲河”塔拉河的杰作，更是杜尔米托尔国家公园世界自然遗产的核心灵魂。`} />
                <InfoRow label="建筑特色" value={`这不是人造建筑，而是大自然的鬼斧神工：V形峡谷断面、壮观的石灰岩峭壁、翡翠色的激流与无数瀑布、溪流共同构成的动态地质博物馆。`} />
                <InfoRow label="建筑风格" value={`属于典型的喀斯特地貌与冰川河谷混合侵蚀形成的峡谷景观，其垂直的崖壁与蜿蜒的河道展现了千万年水与石的力量博弈。`} />
                <InfoRow label="文化价值" value={`峡谷不仅是自然奇观，更是黑山人民民族精神的象征（被称为“黑山之泪”），二战期间塔拉河大桥的英勇故事使其成为勇气与牺牲的纪念碑。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`自然景观全天开放。但通往主要观景点的道路、杜尔米托尔国家公园内的徒步小径以及峡谷边的公路（如P14公路）可能因冬季大雪（通常11月至次年4月）而部分封闭。夏季（5月至10月）是所有活动的最佳时期。具体景点如Ðurđevića Tara Bridge观景台无时间限制，但建议在日落前一小时离开以确保行车安全。组织漂流、滑索等活动的商业公司有其固定的运营时间，通常为上午9点至下午5点。`} />
              <InfoRow label="门票价格" value={`进入杜尔米托尔国家公园及塔拉河峡谷区域本身免费。但如果您驾车穿越国家公园核心区，可能会收取少量的环保/通行费（约每人2-3欧元）。主要费用在于体验项目：塔拉河漂流根据线路长短和运营商不同，价格在30-80欧元/人之间；峡谷大桥滑索约15-20欧元/次；有向导带领的峡谷徒步或登山活动价格约25-50欧元/人。学生、儿童通常有折扣。`} />
              <InfoRow label="地址" value={`Tara River Canyon, Durmitor National Park, Žabljak, Montenegro`} />
              <InfoRow label="交通方式" value={`最近的国际机场是波德戈里察机场（TGD）或杜布罗夫尼克机场（DBV，在克罗地亚）。从波德戈里察出发，最方便的方式是租车自驾，沿E65/E80公路向北，转入P5和P14公路前往扎布利亚克，全程约170公里，车程3-3.5小时，山路弯多但风景绝美。公共交通较为周折：先从波德戈里察汽车站乘长途巴士到扎布利亚克（每天约3-4班，车程3.5-4小时），再从扎布利亚克小镇中心找当地出租车或预约旅行社车辆前往峡谷各观景点（如大桥、漂流起点）。强烈建议自驾，灵活掌控时间。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起塔拉河峡谷的故事，得把时间轴拉得无比漫长。它的序章，早在两百万年前的冰川时期就写下了。巨大的冰川像笨重而有力的刨子，一路从杜尔米托尔山脉滑下，犁出了深邃的U形谷地。后来冰川退去，气候转暖，主角塔拉河登场了。这条倔强的河流接过冰川的工作，但它用的是另一种方式——不是推平，而是切割。它以惊人的耐心和持续的力量，用河水裹挟着沙石，沿着古老的冰川谷地向下、再向下侵蚀。河水偏爱较软的岩石，于是坚硬的石灰岩崖壁被留下来，形成了今天我们看到令人腿软的垂直绝壁。这是个水与石的角力场，至今仍在进行，河水每年都在以毫米计的速度，让峡谷变得更深刻一点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`人类的故事要晚得多，但对于黑山人来说，同样刻骨铭心。峡谷的天堑，长期以来是屏障，也是庇护所。奥斯曼帝国横扫巴尔干时，崇山峻岭和深峡成了黑山部落天然的堡垒。到了二十世纪，峡谷见证了更具体的英雄主义。那就是横跨在峡谷最窄、最险处的Ðurđevića Tara Bridge（杜尔捷维恰塔拉桥）。这座在1940年竣工的混凝土拱桥，本是连接南北的工程奇迹，却在二战烽火中扮演了悲壮角色。1942年，面对纳粹德军的推进，黑山的游击队员不得不做出一个心痛欲裂的决定：炸毁这座自己土地上的骄傲，以阻止敌军通过。负责爆破的工程师拉扎尔·尤克维奇，在完成任务后，毅然纵身跳下大桥，与他的作品一同殉国。如今，新桥飞跨，旧桥墩依然屹立，这个故事被每个黑山孩子铭记，峡谷的呼啸风声里，仿佛也多了几分钢铁般的回响。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战后，大桥得以重建，峡谷依然沉默。它被更广阔的世界认识，是在1980年杜尔米托尔国家公园被联合国教科文列为世界自然遗产之后。人们开始用科学的、欣赏的眼光重新打量这片土地。生态学家在这里发现了古老的针叶林和独有的物种，如黑山云杉；冒险家则看到了欧洲最激动人心的白水漂流河道。从上世纪九十年代起，来自世界各地的皮划艇爱好者和徒步者开始深入峡谷，挑战激流，探索那些只有飞鸟和岩羊才能抵达的角落。它从一个地域性的自然屏障，变成了属于全世界的户外圣地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，发展也伴随着争议。修建水电站的提议曾数次响起，想要驯服这条野性的河流。每一次，都遭到当地民众和环保人士的强烈反对。在他们心中，塔拉河是“黑山之泪”，是神圣不可侵犯的民族象征。这种保护与开发的拉锯，是峡谷当代史的一部分。如今，当你看到穿着专业装备的漂流者与岸边垂钓的当地老人共享同一段河流时，你看到的就是它的现状——一个在谨慎平衡中，向世人展露其惊世之美，却依然努力保持原始心脏跳动的自然圣地。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正感受塔拉河峡谷的层次，建议安排整整一天时间。最佳方式是前一晚住在扎布利亚克，次日清晨出发，避开旅游巴士的高峰。上午先从上帝视角俯瞰峡谷的壮阔，下午则深入谷底，用肌肤感受河水的力量。整个行程是“从宏观到微观”的沉浸式体验：先震撼于其规模，再惊叹于其细节。自驾是最佳选择，因为各观景点相距较远。节奏宜张弛有度，留足时间发呆和感受，毕竟来这里不是为了打卡，而是为了被自然洗礼。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`峡谷边公路狭窄弯急，绝对不要在非停车区随意停车，非常危险且会堵塞交通。参加漂流务必选择有正规资质、提供全套专业装备（包括保暖服）和安全讲解的运营商，不要贪图便宜。山区天气瞬息万变，即使在夏季，也务必携带防风防雨的外套和徒步鞋。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`早餐后直接驱车前往最负盛名的Ðurđevića Tara Bridge观景台，从各个角度凝视这座横跨天堑的混凝土巨弧和脚下令人眩晕的翡翠色深渊。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着大桥旁的之字形小径向下徒步一段，走到旧桥墩附近，触摸冰凉的岩石，聆听轰鸣声从下方涌上来，想象当年的历史瞬间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`驾车沿P14公路（塔拉河峡谷公路）向北缓慢行驶，这是一条风景走廊，每隔几个弯道就有一个停车区，让你捕捉峡谷不同的侧面和光影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`中午前抵达预定的漂流集合点（通常在大桥附近），用3-4小时完成一段中等难度的漂流，在专业向导带领下冲过激流，也在平静水域跳入冰凉的河水中游泳。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`漂流结束后，若体力尚可，前往靠近Šćepan Polje的峡谷下游区域，那里视角更低平，可以安静地坐在巨大的鹅卵石滩上，看夕阳将千米高的岩壁染成金黄。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`返回扎布利亚克的路上，在路边典型的山区木屋餐厅“Koliba”停下，用一顿热腾腾的烤肉和烤鳟鱼晚餐驱散一天的寒意与疲惫。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果留宿第二日，可以去往峡谷上源的河流平缓处，尝试在如镜的水面划独木舟，感受与激流段截然不同的宁静与空灵。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`Ðurđevića Tara Bridge西侧山坡`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时，阳光照亮大桥和其后层叠的远山，利用长焦镜头压缩空间，将大桥的几何结构与深邃的峡谷一同框入画面，常有晨雾缭绕于桥墩之下。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`漂流途中仰拍视角`}</h4>
                  <p className="text-sm text-gray-700">{`当皮筏穿过最险峻的“虎口”岩壁时，请同伴用GoPro或防水相机向上拍摄，捕捉到两侧近乎合拢的嶙峋岩壁、一线蓝天和飞溅的晶莹水花，极具动感与压迫力。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`P14公路中段一个编号为“观景台5”的突出平台`}</h4>
                  <p className="text-sm text-gray-700">{`日落前黄金半小时，光线最为柔和，侧光勾勒出峡谷岩壁的凌厉纹理，河水呈现最浓郁的蓝绿色，适合用广角镜头拍出山河壮阔的全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`扎布利亚克前往大桥途中的某个高海拔弯道`}</h4>
                  <p className="text-sm text-gray-700">{`雨后初晴的清晨，有机会看到巨大的彩虹横跨整个峡谷，需要用广角镜头甚至接片才能捕捉其全貌，运气成分高但成果震撼。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`峡谷内水汽丰沛，镜头很容易起雾，建议随身携带软布和密封袋。航拍能获得无比震撼的画面，但务必提前查清当地无人机法规（国家公园核心区通常禁飞），并注意强烈的峡谷气流。尊重当地人和其他游客，拍摄人物前最好先征得同意。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`山林木屋体验`}</h4>
                  <p className="text-sm text-blue-800">{`住在杜尔米托尔国家公园边缘的纯木制山地木屋，晚上围坐在巨大的石砌壁炉前喝本地草药茶，木头燃烧的噼啪声和窗外的松涛是唯一的背景音。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`峡谷观景民宿`}</h4>
                  <p className="text-sm text-green-800">{`位于P14公路沿线、拥有私人阳台正对峡谷的家庭民宿，主人会为你准备好野餐篮，让你在绝对私密的空间里独享一场山河云海的日出盛宴。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`扎布利亚克小镇精品酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`由传统石屋改建，提供地暖和现代舒适的设施，位置便利，便于探索小镇和作为前往峡谷的基地，品尝酒店自家蜂场产出的高山蜂蜜。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`生态露营与穹顶屋`}</h4>
                  <p className="text-sm text-purple-800">{`对于冒险者，可以选择峡谷附近指定的生态露营地，或者更有趣的透明穹顶屋，夜晚在隔绝光污染的环境中，目睹一生难忘的璀璨星河倒映在心灵深处。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（7-8月）是绝对旺季，扎布利亚克及峡谷周边的优质住宿很快会被订满，务必提前数月预订。山区早晚温差极大，即使夏季夜晚也可能降至10度以下，选择住宿时确认是否有暖气或厚毯。大部分特色住宿都在安静偏僻处，适合追求宁静的旅行者，喜欢夜生活则建议住扎布利亚克镇中心。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开塔拉河峡谷好多天后，我耳朵里似乎还回荡着那种低沉的、来自大地深处的轰鸣。那不仅仅是一种声音，更像一种频率，一种能让浮躁心跳缓慢下来的原始节奏。在这个被精修图片和快餐式旅行充斥的时代，塔拉河峡谷提供了一种截然相反的体验：它不轻易讨好你。它用近乎严酷的深邃、需要体力才能抵达的视角、以及冰凉刺骨的河水提醒你，真正的壮美需要付出代价，需要你全身心地“在场”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这个地方之所以必须被列入深游清单，是因为它超越了风景明信片的意义。它是一堂生动的地理课，让你亲眼看见水如何雕刻时间；它也是一座露天的历史纪念馆，讲述着人类在绝境中的勇气与选择。但最重要的是，它是一个强大的“重置按钮”。当你漂浮在翡翠色的河心，仰望着那一线天空，或当你独自站在万丈悬崖边，感受着仿佛能吞噬一切的空旷时，日常生活中那些似乎天大的烦恼，会瞬间被这古老而宏大的存在感稀释。你会意识到，在亿万年的地质纪年里，自己是多么短暂而珍贵的一个瞬间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，来这里不只是为了看欧洲最深的峡谷。是为了让自己变得“小”一点，让心胸变得“大”一点。是为了在塔拉河永不疲倦的奔腾中，找回一点我们现代人早已遗失的、关于自然的敬畏，与内心的宁静。这趟旅程，注定会沉淀为你记忆里一块坚硬的、绿色的基石。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/sveti-stefan" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣斯特凡岛</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sveti Stefan</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kolain" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科拉欣</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kolašin</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cetinje" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    采
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">采蒂涅老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cetinje</p>
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
