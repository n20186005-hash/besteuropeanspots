import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '德曼洛夫斯卡自由洞 Demänovská Cave of Liberty｜探访欧洲色彩最斑斓的地下仙境与翠绿魔湖 - 最佳欧洲景点',
  description: '朋友，如果你跟我一样，对“地下世界”的想象还停留在阴暗潮湿、怪石嶙峋，那么德曼诺夫斯卡自由洞会彻底颠覆你的认知。踏进洞口的那一刻，外界山林间的阳光与鸟鸣瞬间被吞没，取而代之的是一种被大地温柔包裹的静谧凉意。空气里有种特殊的味道，混合着岩石的微腥、地下河的水汽，还有一种难以言喻的、时间沉淀下来的洁净气',
}

export default function DemNovskCaveOfLibertyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '斯洛伐克', href: '/destinations/slovakia' },
            { label: '日利纳州，德曼诺夫斯卡山谷', href: '/destinations/slovakia' },
            { label: '德曼诺夫斯卡自由洞', href: '/attractions/dem-novsk--cave-of-liberty' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`德曼诺夫斯卡自由洞・Demänovská Cave of Liberty・斯洛伐克・日利纳州，德曼诺夫斯卡山谷`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，如果你跟我一样，对“地下世界”的想象还停留在阴暗潮湿、怪石嶙峋，那么德曼诺夫斯卡自由洞会彻底颠覆你的认知。踏进洞口的那一刻，外界山林间的阳光与鸟鸣瞬间被吞没，取而代之的是一种被大地温柔包裹的静谧凉意。空气里有种特殊的味道，混合着岩石的微腥、地下河的水汽，还有一种难以言喻的、时间沉淀下来的洁净气息。导游手电的光束划破黑暗，第一眼看到的景象就让我屏住了呼吸——那根本不是单调的土黄色，眼前的岩石仿佛被一位狂放又细腻的印象派画家用调色板狠狠砸过：浓烈的赭石、深邃的铁红、温润的鹅黄、甚至还有一抹抹诡异的青灰与乳白，层层叠叠，在光影下流淌着丝绸般的光泽。
随着队伍在铺设好的步道上前行，空间豁然开朗。我们仿佛走入了一个被封印的地下宫殿大厅，高达数十米的穹顶悬挂着无数钟乳石，像凝固的瀑布，又像巨兽的牙齿。最迷人的是那滴滴答答的水声，无处不在，清脆得像珍珠落玉盘，那是洞穴仍在“生长”的声音，每一滴富含矿物质的水珠，都在用千万年的耐心，塑造着下一寸奇迹。当地人把这里视为自然的圣殿，一个远离地上纷扰的冥想之地。你常能看到有访客静静地站在某根巨大的石笋前，仰着头，什么也不做，只是感受那种超越人类纪元的宁静。
而这一切的华彩乐章，在那个名为“魔湖”的地下湖前达到高潮。沿着步道转过一个弯，一片无法用言语形容的翠绿色泽毫无预警地撞进眼底。那不是寻常湖水的蓝或绿，而是一种极其浓郁、纯粹、带着荧光的翡翠色，像一块被地心之火淬炼过的巨大宝石，静静地躺在岩壁的怀抱中。穹顶渗下的水滴在湖面漾开细密的涟漪，手电光扫过，整个湖面仿佛被点燃，焕发出一种幽秘而神圣的光晕。那一刻，你会忘记呼吸，忘记时间，只想沉入这片被大地珍藏了亿万年的绿色梦境里。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，如果你跟我一样，对“地下世界”的想象还停留在阴暗潮湿、怪石嶙峋，那么德曼诺夫斯卡自由洞会彻底颠覆你的认知。踏进洞口的那一刻，外界山林间的阳光与鸟鸣瞬间被吞没，取而代之的是一种被大地温柔包裹的静谧凉意。空气里有种特殊的味道，混合着岩石的微腥、地下河的水汽，还有一种难以言喻的、时间沉淀下来的洁净气息。导游手电的光束划破黑暗，第一眼看到的景象就让我屏住了呼吸——那根本不是单调的土黄色，眼前的岩石仿佛被一位狂放又细腻的印象派画家用调色板狠狠砸过：浓烈的赭石、深邃的铁红、温润的鹅黄、甚至还有一抹抹诡异的青灰与乳白，层层叠叠，在光影下流淌着丝绸般的光泽。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`随着队伍在铺设好的步道上前行，空间豁然开朗。我们仿佛走入了一个被封印的地下宫殿大厅，高达数十米的穹顶悬挂着无数钟乳石，像凝固的瀑布，又像巨兽的牙齿。最迷人的是那滴滴答答的水声，无处不在，清脆得像珍珠落玉盘，那是洞穴仍在“生长”的声音，每一滴富含矿物质的水珠，都在用千万年的耐心，塑造着下一寸奇迹。当地人把这里视为自然的圣殿，一个远离地上纷扰的冥想之地。你常能看到有访客静静地站在某根巨大的石笋前，仰着头，什么也不做，只是感受那种超越人类纪元的宁静。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而这一切的华彩乐章，在那个名为“魔湖”的地下湖前达到高潮。沿着步道转过一个弯，一片无法用言语形容的翠绿色泽毫无预警地撞进眼底。那不是寻常湖水的蓝或绿，而是一种极其浓郁、纯粹、带着荧光的翡翠色，像一块被地心之火淬炼过的巨大宝石，静静地躺在岩壁的怀抱中。穹顶渗下的水滴在湖面漾开细密的涟漪，手电光扫过，整个湖面仿佛被点燃，焕发出一种幽秘而神圣的光晕。那一刻，你会忘记呼吸，忘记时间，只想沉入这片被大地珍藏了亿万年的绿色梦境里。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`德曼诺夫斯卡自由洞`} />
                <InfoRow label="英文名称" value={`Demänovská Cave of Liberty`} />
                <InfoRow label="正式名称" value={`Demänovská Cave of Liberty`} />
                <InfoRow label="国家" value={`斯洛伐克`} />
                <InfoRow label="城市" value={`日利纳州，德曼诺夫斯卡山谷`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`斯洛伐克最著名、游客访问量最大的喀斯特溶洞之一，以其超凡脱俗的色彩和巨大的地下空间闻名。`} />
                <InfoRow label="建筑特色" value={`非人造建筑，而是由地下河水历经数十万年侵蚀石灰岩形成的宏大洞穴系统，拥有壮观的钟乳石、石笋、流石坝以及一个标志性的翠绿色地下湖。`} />
                <InfoRow label="建筑风格" value={`自然形成的喀斯特地貌，钟乳石形态千变万化，包括帷幔状、管状、珊瑚状等。`} />
                <InfoRow label="文化价值" value={`不仅是一个自然奇观，也是斯洛伐克国家自然宝藏的象征，展现了地下世界寂静而磅礴的美学，激发了无数艺术与科学灵感。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`洞穴对公众开放，但仅限由专业导游带领的导览团进入。开放时间随季节变化：夏季（6月至8月）通常每天有多个导览团，最早上午9点开始，最晚入场约下午4点；春季（4月-5月）和秋季（9月-10月）团次减少，通常只在上午和下午的几个固定时间点；冬季（11月至次年3月）开放时间极短且不稳定，可能仅在周末或提前预约才开放。具体每日的导览时间表强烈建议在斯洛伐克洞穴管理局官网提前确认。国家假日可能关闭。`} />
              <InfoRow label="门票价格" value={`成人票约10-12欧元，学生及青少年票（6-18岁）约6-8欧元，6岁以下儿童通常免费。家庭套票有优惠。门票价格已包含强制性导游费用。接受当地货币（欧元）现金支付，部分售票点可能接受信用卡。建议提前在线预订旺季时段的门票以确保名额。`} />
              <InfoRow label="地址" value={`Demänovská Dolina 192, 031 01 Liptovský Mikuláš, Slovakia`} />
              <InfoRow label="交通方式" value={`最近的国际机场是波普拉德-塔特拉机场（Poprad–Tatry Airport, TAT），距离约40公里。从机场可搭乘出租车或提前预订接驳车前往，车程约50分钟。更常用的交通枢纽是火车到达利普托夫斯基米库拉什（Liptovský Mikuláš）镇。从首都布拉迪斯拉发（Bratislava）有直达火车，车程约3.5-4小时。从利普托夫斯基米库拉什镇中心，你需要换乘当地的公共巴士前往德曼诺夫斯卡山谷（Demänovská Dolina），巴士站通常就在火车站附近，车程约20-30分钟，班次在旅游旺季较为频繁（每小时1-2班），淡季可能大幅减少，务必提前查好时刻表。自驾是最方便的选择，沿E50公路行驶，在德曼诺夫斯卡山谷有清晰路标指引至洞穴停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起这个洞穴的故事，它就像一个沉睡的巨人，在黑暗中度过了无比漫长的孤寂岁月，直到人类的脚步声偶然将它唤醒。德曼诺夫斯卡山谷的地下河道网络错综复杂，自由洞只是其中最为璀璨的一颗明珠。据零星的史料记载，早在1680年，就有当地猎人或冒险者因追踪动物而发现了它的入口，但幽深黑暗的内部和传说中盘踞的“恶龙”让人望而却步，它仅仅成为民间传说中一个模糊而可怕的存在。真正的转折点发生在1921年，一位名叫阿洛伊兹·克拉斯（Alois Král）的中学老师，带领着一群勇敢的探索者，决心系统地揭开它的秘密。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你可以想象一下那个场景：没有现在坚固的步道和灯光，他们依靠着简陋的绳梯、煤油灯和巨大的勇气，在湿滑陡峭的岩壁上攀爬，挤过仅容一人侧身通过的狭窄缝隙。地下河冰冷刺骨的水流声在巨大的空洞里回响，更添未知的恐惧。但支撑他们的，是发现未知世界的强烈渴望。经过数年断断续续的探索，他们最大的奖赏在1923年来临——当克拉斯和他的同伴们穿过一系列低矮的通道后，手电的光芒照亮了一片前所未见的广阔水域，那就是后来的“魔湖”。湖水那不可思议的翠绿色，让所有见者无不震撼，他们立刻意识到，这是一个世界级的发现。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`随后，洞穴的开发工作紧锣密鼓地展开。工程师们巧妙地铺设了步行道和桥梁，既让游客能够安全地深入腹地，又最大限度地保护了脆弱的沉积物。最早的灯光系统被安装，当电闸合上，这片沉寂了千万年的艺术画廊第一次向世人完整地展现了它的瑰丽。1924年，它正式以“自由洞”之名向公众开放，这个名字充满了战后新生的斯洛伐克民族对自由与光明的向往。它迅速成为国家的骄傲，吸引了欧洲各地的游客、科学家和艺术家。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，和平的时光被二战打断。在战火纷飞的日子里，这个深邃的地下空间再次扮演了不同的角色——它成了附近居民珍贵的避难所，厚重的岩壁保护了他们免受空袭的威胁。你能想象吗？当炮火在地面轰鸣时，数百人可能正蜷缩在这片绚烂的钟乳石下，在“魔湖”幽光的无声陪伴中，祈求着和平的回归。战后的岁月里，保护成为了主题。科学家们持续研究着洞穴独特的气候、水文和生态系统，尤其是那汪翠绿湖水的成因（源于水中特殊的矿物质成分和光线折射）。如今，每一次导游带领的参观，都是一次精心策划的生态教育，提醒着我们，人类只是这漫长地质史诗中匆匆的访客，唯有敬畏，方能永恒。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`一次完美的自由洞探秘，关键在于“从容”与“时机”。强烈建议选择上午最早或下午稍早的导览团（例如上午10点或下午1点场），这时游客相对较少，你能更安静地聆听水滴声和自己的呼吸。整个导览行程约1小时15分钟，路线是单向的，全程约1.7公里，有上下台阶，但步道修建完善。节奏由导游掌控，他们会不时停下讲解地质奇观和有趣历史。我们的路线将从入口处开始，逐步深入洞穴腹部，从欣赏宏大的厅堂到聚焦于精妙的细节，最后在“魔湖”的震撼中达到顶点，然后从另一个出口走出，重见天日。这样安排能让你感官的体验像交响乐一样，层层递进，最终在最高潮处落幕。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`洞穴内常年恒温仅6-7摄氏度，且湿度很高，务必穿保暖的防风外套和防滑的徒步鞋，夏天也别穿短裤。全程禁止触摸任何岩壁或钟乳石，皮肤的油脂会永久阻碍它们的“生长”并破坏色彩。紧跟你的导游，不要擅自离队，洞内岔路多，极易迷路。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在洞口集合处深吸一口山林间清冽的空气，与接下来一个多小时的地心之旅做个告别。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随导游的手电光步入“彩虹厅”，让眼睛慢慢适应昏暗，并被岩壁上瀑布般的斑斓色彩第一次冲击。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在“音乐厅”的巨大穹顶下驻足，仔细聆听那来自穹顶、石笋和地面，节奏各异的滴水协奏曲。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`俯身穿过一段被称为“考验通道”的低矮走廊，感受早期探险者们的艰辛与勇气。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在横跨地下暗河的坚固木桥上，感受脚下水流冰凉的湿气和轰鸣的隐约回响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`于“巨人礼堂”中央环顾四周，仰望那些需要数十万年才能“生长”对接的巨型石柱，感受自身的渺小。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在导游的示意下保持绝对安静，转过最后一个弯角，让那片如同液态翡翠的“魔湖”以其全部魔力攫住你的心神。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从出口隧道走出，重返阳光普照的山谷，你会觉得地上的绿树与天空，都仿佛被洞穴的翠绿重新染过色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`魔湖全景观景台`}</h4>
                  <p className="text-sm text-gray-700">{`在导游允许停留的指定木制平台，关闭闪光灯，将相机置于栏杆上稳定，利用湖面自身的幽光和导游手电偶尔扫过的反射光，可以拍到翡翠色湖面与倒映的岩石轮廓的对称构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`彩虹厅仰拍穹顶`}</h4>
                  <p className="text-sm text-gray-700">{`进入洞穴不久的第一个大厅，将相机对准穹顶，提高ISO，捕捉手电光照射下那些如油画笔触般流淌的红色、黄色和赭石色岩层纹理。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`巨人礼堂的巨人石笋`}</h4>
                  <p className="text-sm text-gray-700">{`在中部一个开阔空间，找到那根最粗壮、与顶部钟乳石即将相连的石笋，从侧面低角度拍摄，利用其他游客手电的漫射光勾勒出它雄伟庄严的剪影。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`出口隧道回望`}</h4>
                  <p className="text-sm text-gray-700">{`游览结束从出口走出前，回头拍摄隧道尽头那一抹来自洞穴内部的、象征探索终点的幽暗光线，与隧道口的自然光形成鲜明对比。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`洞内严禁使用闪光灯和三脚架（除非获得特殊许可），闪光会破坏其他游客的体验并可能影响洞穴生态。相机的高感光度（ISO）性能至关重要，大光圈镜头是帮手。与其执着于拍摄清晰的画质，不如专注于捕捉光影的氛围和肉眼所见的色彩震撼。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`山林木屋体验`}</h4>
                  <p className="text-sm text-blue-800">{`预订德曼诺夫斯卡山谷里传统的木制山间小屋（Chaty），晚上在劈啪作响的壁炉边喝一杯热茶，清晨在松林涛声中醒来，徒步五分钟就能到达洞穴入口。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`温泉小镇疗愈`}</h4>
                  <p className="text-sm text-green-800">{`住在利普托夫斯基米库拉什镇上的酒店，这个温泉小镇设施齐全，晚上可以在镇上品尝斯洛伐克传统美食，泡个舒缓的温泉，以放松的状态准备第二天的洞穴探险。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端设计隐居`}</h4>
                  <p className="text-sm text-yellow-800">{`选择山谷深处由建筑师精心设计的现代风格精品酒店，巨大的玻璃窗将塔特拉山景引入室内，在极简的奢华与原始的粗犷自然之间找到完美的平衡。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`背包客社交站`}</h4>
                  <p className="text-sm text-purple-800">{`日利纳市或波普拉德市有氛围轻松的青年旅舍，适合背包客，方便你以这里为基地，不仅探索洞穴，还能串联起周边的高山湖泊和徒步路线。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`山谷内的住宿在夏季和滑雪冬季旺季非常紧俏，务必提前数月预订。如果选择住在外围城镇，一定要查清楚前往洞穴的公共交通班次，尤其是返程时间，以免错过巴士。山谷地区治安良好，民风淳朴。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`从洞穴里走出来，阳光洒在脸上的那一刻，有种恍如隔世的感觉。刚刚经历的那个色彩奔放又寂静无声的世界，像一场过于真实的梦，被封印在了身后那座不起眼的山体之中。我一直在想，为什么这样一个需要弯腰、需要保暖、需要保持安静的地方，却能给人如此强烈的慰藉？或许是因为，在那个以万年为计量单位生长变化的空间里，我们日常那些以秒计时的焦虑、以天计时的计划，都显得如此微不足道。水滴石穿在这里不是成语，是每时每刻都在发生的、缓慢而坚定的现实。它用绝对的静谧和极致的斑斓，强行按下了我们大脑中那个名为“浮躁”的开关。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个快得让人眩晕的时代，德曼诺夫斯卡自由洞提供了一种反向的旅行维度——不是向上攀登征服高峰，而是向下深入，谦卑地走入地球的怀抱。它不是让你看人类创造了什么，而是让你看时间创造了什么。那汪翠绿的魔湖，仿佛是大地的眼睛，沉静地凝视着每一个到访者，映照出我们内心的喧嚣与尘埃。每一位热爱深度游的旅人，都应该来这里待上一会儿。不是为了收集又一个景点，而是为了参与一场古老的地质仪式，在光与影、水与石的永恒对话中，重新找到自己与这个星球最初、也是最深的连接。它会告诉你，有些美，需要黑暗来孕育；有些宁静，深藏在喧嚣之下。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/beckov-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝兹道城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Beckov Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/strbske-pleso" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    什
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">什特尔布斯凯普莱索</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Štrbské Pleso</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/banska-bystrica-leaning-clock-tower-square" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    班
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">班斯卡-比斯特里察老城广场与倾斜钟塔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Banská Bystrica Old Town Square & Leaning Clock Tower</p>
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
