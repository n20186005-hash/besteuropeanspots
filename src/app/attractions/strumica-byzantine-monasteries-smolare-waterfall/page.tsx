import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '斯图米察 Strumica｜探寻隐秘群山中的拜占庭珍宝与飞瀑秘境 - 最佳欧洲景点',
  description: '车子在贝尔达格山脉的盘山道上左摇右晃，窗外的景色从麦田突然切换成了茂密得化不开的橡树林。空气的味道变了，有一股清冽的、混着湿泥土和松针的凉意钻进车窗。就在你以为这山路没有尽头时，一个急转弯，视野豁然开朗——斯图米察谷地像一块被精心熨过的绿丝绒毯子，在午后的阳光下铺展开来，而那座以葡萄园和红瓦屋顶闻名',
}

export default function StrumicaByzantineMonasteriesSmolareWaterfallPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '斯图米察', href: '/attractions/strumica-byzantine-monasteries-smolare-waterfall' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`斯图米察・Strumica・北马其顿・斯图米察`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在贝尔达格山脉的盘山道上左摇右晃，窗外的景色从麦田突然切换成了茂密得化不开的橡树林。空气的味道变了，有一股清冽的、混着湿泥土和松针的凉意钻进车窗。就在你以为这山路没有尽头时，一个急转弯，视野豁然开朗——斯图米察谷地像一块被精心熨过的绿丝绒毯子，在午后的阳光下铺展开来，而那座以葡萄园和红瓦屋顶闻名的老城，就安然地躺在谷地中央，身后是层峦叠嶂的青色屏障。第一眼，你觉得它宁静得有些平凡；但你知道，秘密都藏在那些环绕它的、沉默的山褶里。
走进老城，感官立刻被激活。耳朵里灌满了咖啡馆外男人们玩塔罗牌的清脆落子声，混合着远处正教教堂偶尔传来的、悠长而低沉的钟鸣。鼻子则被街角面包房里新鲜出炉的“巴尼察”千层饼的黄油焦香，以及水果摊上熟透的李子甜味所俘虏。你的脚下是被几个世纪的人流磨得温润光滑的鹅卵石路，阳光被两旁奥斯曼风格老屋凸出的木制窗棂切割成明暗交错的光带。这里没有游客的喧嚣，生活以它最本真、最不设防的节奏流淌着。老太太们拎着网袋慢悠悠地采购，工匠在敞着门的作坊里敲打着铜器。斯图米察的魅力不在于一个地标，而在于这种完整而自洽的日常感，让你觉得你不是闯入者，而是恰好路过了一个正在呼吸的古老世界。
然而，真正的灵魂，需要你向山中探寻。当你沿着一条不起眼的小径向上跋涉，水声由远及近，从喃喃低语变成雷霆怒吼，斯莫拉雷瀑布便毫无征兆地出现在你面前。它不是一帘柔和的垂幕，而是数十道湍急的白练，从近乎垂直的岩壁上争先恐后地跃下，在底部砸出一片氤氲的水雾，阳光穿过，瞬间幻化出转瞬即逝的彩虹。水汽扑面而来，带着沁入骨髓的凉爽和青苔的腥甜气息。这里的震撼是纯粹的自然之力。
而当你带着瀑布的凉意，继续深入更幽静的山林，在橡树和山毛榉的掩映下，那些低矮的、用当地灰褐色石块垒砌的拜占庭修道院，如同隐士般悄然现身。推开一扇厚重的木门，昏暗瞬间被金色覆盖——不是灯光，是墙壁和穹顶上保存完好的湿壁画发出的光芒。圣人的眼神穿越数百年的烟熏火燎，依然沉静而悲悯地注视着你。空气里是蜡烛、旧木和干香料混合的宁静气味，时间在这里不是线性流逝的，而是像穹顶上的光环一样，成为了一个凝固的永恒。这一刻你才明白，斯图米察的核心，是这种极致的反差与和谐：市井的烟火与山林的寂静，瀑布的狂野与修道院的宁和，共同编织成一首关于巴尔干大地灵魂的复调诗篇。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子在贝尔达格山脉的盘山道上左摇右晃，窗外的景色从麦田突然切换成了茂密得化不开的橡树林。空气的味道变了，有一股清冽的、混着湿泥土和松针的凉意钻进车窗。就在你以为这山路没有尽头时，一个急转弯，视野豁然开朗——斯图米察谷地像一块被精心熨过的绿丝绒毯子，在午后的阳光下铺展开来，而那座以葡萄园和红瓦屋顶闻名的老城，就安然地躺在谷地中央，身后是层峦叠嶂的青色屏障。第一眼，你觉得它宁静得有些平凡；但你知道，秘密都藏在那些环绕它的、沉默的山褶里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走进老城，感官立刻被激活。耳朵里灌满了咖啡馆外男人们玩塔罗牌的清脆落子声，混合着远处正教教堂偶尔传来的、悠长而低沉的钟鸣。鼻子则被街角面包房里新鲜出炉的“巴尼察”千层饼的黄油焦香，以及水果摊上熟透的李子甜味所俘虏。你的脚下是被几个世纪的人流磨得温润光滑的鹅卵石路，阳光被两旁奥斯曼风格老屋凸出的木制窗棂切割成明暗交错的光带。这里没有游客的喧嚣，生活以它最本真、最不设防的节奏流淌着。老太太们拎着网袋慢悠悠地采购，工匠在敞着门的作坊里敲打着铜器。斯图米察的魅力不在于一个地标，而在于这种完整而自洽的日常感，让你觉得你不是闯入者，而是恰好路过了一个正在呼吸的古老世界。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，真正的灵魂，需要你向山中探寻。当你沿着一条不起眼的小径向上跋涉，水声由远及近，从喃喃低语变成雷霆怒吼，斯莫拉雷瀑布便毫无征兆地出现在你面前。它不是一帘柔和的垂幕，而是数十道湍急的白练，从近乎垂直的岩壁上争先恐后地跃下，在底部砸出一片氤氲的水雾，阳光穿过，瞬间幻化出转瞬即逝的彩虹。水汽扑面而来，带着沁入骨髓的凉爽和青苔的腥甜气息。这里的震撼是纯粹的自然之力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而当你带着瀑布的凉意，继续深入更幽静的山林，在橡树和山毛榉的掩映下，那些低矮的、用当地灰褐色石块垒砌的拜占庭修道院，如同隐士般悄然现身。推开一扇厚重的木门，昏暗瞬间被金色覆盖——不是灯光，是墙壁和穹顶上保存完好的湿壁画发出的光芒。圣人的眼神穿越数百年的烟熏火燎，依然沉静而悲悯地注视着你。空气里是蜡烛、旧木和干香料混合的宁静气味，时间在这里不是线性流逝的，而是像穹顶上的光环一样，成为了一个凝固的永恒。这一刻你才明白，斯图米察的核心，是这种极致的反差与和谐：市井的烟火与山林的寂静，瀑布的狂野与修道院的宁和，共同编织成一首关于巴尔干大地灵魂的复调诗篇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`斯图米察`} />
                <InfoRow label="英文名称" value={`Strumica`} />
                <InfoRow label="正式名称" value={`Strumica`} />
                <InfoRow label="国家" value={`北马其顿`} />
                <InfoRow label="城市" value={`斯图米察`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`北马其顿东部历史与信仰的守护者，丝绸之路支线上连接拜占庭与巴尔干腹地的古老十字路口。`} />
                <InfoRow label="建筑特色" value={`粗粝石墙与鲜艳湿壁画交织，山间修道院完美体现了拜占庭晚期建筑与自然环境的虔诚对话。`} />
                <InfoRow label="建筑风格" value={`拜占庭风格为主，融合了后期塞尔维亚建筑的影响以及质朴的本地石造工艺。`} />
                <InfoRow label="文化价值" value={`活着的东正教精神圣地与奥斯曼时期多元文化层叠的鲜活见证，是理解马其顿地区宗教韧性与民间艺术的关键。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`斯莫拉雷瀑布及周边自然步道全年24小时开放，但建议仅在白天光线充足时前往以确保安全。山中各拜占庭修道院（如圣莱奥卡迪亚修道院）开放时间较为灵活，通常为每日上午9点至下午5点，但看守修士可能因宗教活动临时关闭，冬季（11月至3月）开放时间可能缩短。建议出行前向当地旅游信息中心确认。老城区广场及集市白天全天活跃。`} />
              <InfoRow label="门票价格" value={`进入斯图米察老城区及大部分公共区域免费。参观山中各拜占庭修道院通常为自愿捐赠，建议捐赠金额为100-200第纳尔（约合2-4欧元）。斯莫拉雷瀑布国家公园区域无官方门票，但停车场可能收取象征性维护费，约50第纳尔。学生、儿童及65岁以上长者无特殊折扣。`} />
              <InfoRow label="地址" value={`斯图米察老城区中心， 2400 Strumica, North Macedonia`} />
              <InfoRow label="交通方式" value={`从首都斯科普里国际机场出发，最便捷的方式是租车自驾，沿A4/E75高速公路向东南行驶，转入地方公路，全程约170公里，耗时约2.5小时，沿途风光从平原渐入丘陵，非常值得体验。若选择公共交通，可从斯科普里中央巴士站乘坐长途巴士前往斯图米察，班次频繁（约每小时一班），车程约3-3.5小时，票价约600第纳尔。巴士会停靠在斯图米察主车站，从车站步行10分钟即可进入老城核心区。前往瀑布和深山修道院则必须依赖出租车或自驾车，山路蜿蜒，建议租用底盘较高的车辆。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要理解斯图米察，你得先把手放在那些修道院冰凉的石墙上。它们的根基，深扎在罗马帝国东西分裂后的动荡土壤里。这里并非帝国中心，却是从君士坦丁堡通往亚得里亚海的重要陆路支线，商队带来丝绸和香料，也带来了思想和信仰。公元10世纪前后，当保加利亚沙皇萨穆伊尔的帝国与拜占庭在这里反复拉锯时，信仰成了普通人唯一的避难所。于是，虔诚的贵族和修士们开始选择这些远离战火、却有清泉和密林的山坳，一锤一凿地建起献给上帝的小型堡垒。圣莱奥卡迪亚修道院最初的故事就始于这个时期，传说一位名叫莱奥卡迪亚的贵族女子，为逃避政治婚姻，在此得神启建院修行，她的故事被一代代修士口耳相传，赋予了这些石墙最初的女性坚韧色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "石头垒起来了，但赋予它们灵魂的，是颜料。13至14世纪，斯图米察地区的修道院湿壁画艺术达到了惊人的巅峰。这要归功于一批被称为“斯图米察画派”的无名画师。他们并非来自遥远的君士坦丁堡宫廷，而是本地或周边地区的匠人。因此，你在这里看到的基督、圣母和圣徒，少了几分拜占庭正统的威严与抽象，多了许多人间的温度与情感。圣母的眼神可能更温柔，圣徒的面容带着本地农民特有的粗犷线条。他们用当地矿物磨制的颜料——赭石、土绿、朱砂——在潮湿的灰泥上作画，笔触生动甚至有些笨拙，却充满了蓬勃的信仰生命力。这些壁画不仅是宗教教材，更是那个时代斯图米察人精神世界的彩色自画像。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "平静被奥斯曼帝国征服的浪潮打破。自14世纪末开始，这些山间圣地经历了漫长的“隐形”岁月。许多修道院被遗弃，壁画被烟熏火燎，甚至被故意破坏。但有趣的是，征服也带来了意想不到的融合。斯图米察老城的肌理正是在奥斯曼时期定型的：带内庭院的住宅、公共浴室（哈曼）和熙熙攘攘的巴扎。东正教修士们学会了在伊斯兰统治者的夹缝中生存，他们有时将修道院修得更隐蔽，有时也与当地的穆斯林社群维持着微妙的、基于尊重的地方性契约。信仰在地下和山间默默延续，就像石缝里钻出的野草。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的劫难在20世纪。两次世界大战的烽火掠过这里，但更严重的破坏来自于人们对“现代”的狂热追求和随之而来的忽视。一些修道院沦为牧羊人的羊圈，壁画被雨水侵蚀。转机发生在二十世纪中后期，一批本土考古学家和艺术史家像侦探一样重新发现了这些山野遗珠。修复工作是漫长而精细的，过程本身就像一场虔诚的仪式。如今，当你看到圣莱奥卡迪亚修道院穹顶上那幅《圣母安眠》壁画，基督身后天使哀恸的面容依旧清晰如昨，那不仅仅是颜料的留存，更是几个世纪以来，无数无名守护者——修士、村民、学者——用目光和双手接力传递下来的记忆之火。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天的斯图米察，身上穿着奥斯曼老城的外衣，胸腔里跳动着一颗拜占庭的虔诚之心，而呼吸的节奏则与背后贝尔达格山脉的瀑布与森林同步。它的历史不是博物馆里按年代排列的展板，而是一层层鲜活地叠加在一起：早晨你在奥斯曼风格庭院里喝土耳其咖啡，下午去拜占庭教堂里听圣歌，傍晚则开车去瀑布下感受亘古不变的自然之力。每一层历史都没有死去，都在当下这个阳光灿烂的谷地里，找到了自己安放的位置。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要完整感受斯图米察的精华，你需要一整天时间，并遵循“由远及近、先自然后人世”的节奏。最佳安排是清晨早早出发，趁山林苏醒、游客未至时，先去探访最需要宁静氛围的深山瀑布与修道院，享受与自然和信仰独处的时光。午后下山，回到老城，此时阳光正好，适合悠闲地漫步、品尝美食，感受小城的日常脉搏。傍晚时分，光线变得金黄柔和，是拍摄老城建筑和体验咖啡馆文化的最佳时刻。这样的路线避开了可能出现的午后山区短暂人流，也让你在体力最充沛时完成山间探索，在放松时享受城中的慵懒。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`前往瀑布和修道院的山路较窄且多弯，务必谨慎驾驶，雨后路面可能湿滑。进入任何修道院时，务必衣着得体（避免无袖上衣、短裤短裙），女性通常会被要求包头巾（入口处常备）。老城区的餐馆午休时间较长（约下午3-5点），规划午餐时间需避开此时段。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`天刚蒙蒙亮就驱车进山，直奔斯莫拉雷瀑布，沿着湿滑的木栈道走到观景台，让震耳欲聋的水声和扑面而来的负离子水雾彻底唤醒身心。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从瀑布折返一小段路，转入一条更隐蔽的岔道，步行约二十分钟，在满耳鸟鸣中找到被古树环抱的圣莱奥卡迪亚修道院，轻轻叩响那扇斑驳的木门。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花上一个小时在修道院昏暗静谧的内部缓缓移动，仰头仔细辨认穹顶和墙壁上那些历经沧桑却依然生动的圣徒面孔与圣经故事湿壁画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在修道院庭院的老核桃树下静坐片刻，或许有幸得到看守修士递来的一杯自酿的草药茶，听他用地道的马其顿语讲述几个世纪的守护故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后下山回到斯图米察老城，直接钻进中央巴扎旁边那家总是坐满当地人的餐馆，点一份用陶罐慢炖的“塔夫切·格拉夫切”豆子汤和烤辣椒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`用整个下午毫无目的地迷失在老城的鹅卵石巷弄里，看看铁匠如何打铜，闻闻香料铺的混合香气，在圣基里尔和圣美多德教堂外的长椅上发呆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`赶在日落前爬上老城边缘的小山丘，找一块干净的石头坐下，看着夕阳如何把整个谷地、红瓦屋顶以及远山的轮廓一一染成温暖的蜜金色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`入夜后选择一家有现场传统音乐“查尔加”演奏的卡法纳（传统酒馆），点一杯本地产的“斯坦娜”白葡萄酒，让欢快而略带忧伤的旋律为这一天画上句号。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`瀑布底部观景台仰角`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点前，阳光能斜射入山谷，用广角镜头贴近瀑布底部水潭边，以喷涌而下的白色水练为前景，捕捉后方被绿植覆盖的巍峨岩壁和若隐若现的彩虹。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣莱奥卡迪亚修道院回廊拱门`}</h4>
                  <p className="text-sm text-gray-700">{`利用下午三四点从西侧窗户斜射入回廊的柔和光束，站在拱门下向外拍摄，以充满几何美感的石砌拱门为画框，将庭院中古老的十字架和背后的苍翠山林一同纳入镜中。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老城奥斯曼宅邸木窗与光影`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚日落前一小时，在“旧巴扎”区的巷子里寻找那些有着繁复木雕的凸窗，等待阳光将窗格影子长长地投射在斑驳的鹅卵石墙面上，拍摄光影与古老材质的对话。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`谷地全景日落点`}</h4>
                  <p className="text-sm text-gray-700">{`从通往贝拉西卡村的盘山公路某个开阔弯道停下，使用长焦镜头，在日落前后十分钟的“蓝调时刻”，压缩空间，拍下斯图米察老城星星点点的灯火在深蓝色山谷中渐次亮起的梦幻全景。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄修道院内部壁画绝对禁止使用闪光灯，持续的强光会对数百年历史的脆弱颜料造成不可逆的损害，请务必使用高感光度相机或大光圈镜头手持拍摄。在瀑布区域，水雾极大，需为相机做好防水措施，最简单的办法是用透明的防水袋包裹机身，只露出镜头。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`家庭式温暖`}</h4>
                  <p className="text-sm text-blue-800">{`住在老城中心一栋19世纪奥斯曼风格住宅改造的民宿里，主人妈妈会为你准备丰盛的 homemade 早餐，在种满天竺葵的阳台上就能听到教堂钟声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`隐居山间`}</h4>
                  <p className="text-sm text-green-800">{`选择瀑布附近由护林人小屋改造的简单客栈，夜晚只有溪流与松涛声伴你入眠，清晨推开窗就是带着露水的森林气息，适合纯粹的自然爱好者。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计感精品`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻由老城一座旧烟草仓库焕新而成的精品酒店，保留了原始的砖墙和木梁，却融合了极简的现代设计，屋顶酒吧是欣赏老城屋顶波浪的绝佳地点。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`葡萄园农庄`}</h4>
                  <p className="text-sm text-purple-800">{`住在斯图米察城外自家拥有葡萄园的乡村客栈，房间朴素但一尘不染，晚餐是农场自产的有机食物，主人会热情地带你参观酒窖并品尝他们骄傲的葡萄酒。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "山间住宿选择非常有限且条件相对朴素，务必提前预订并做好心理准备；老城区的住宿更热门，尤其在夏季和九月葡萄收获节期间，建议至少提前一个月预订。斯图米察整体治安良好，但老城部分小巷夜间照明较暗，建议结伴而行。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开斯图米察很久以后，在我脑海里反复闪回的，不是某个具体的画面，而是一种混合的感觉：是瀑布水雾扑在脸上的冰凉，是修道院里烛火混合着旧木的宁静气味，是老城咖啡馆里那杯咖啡的醇苦，以及午后阳光晒在鹅卵石上蒸腾起的、几乎可以被看见的悠闲温度。这个地方教会我的，是一种“深度”的真正含义——它不是打卡了多少个景点，而是你允许自己被一个地方的多重节奏所浸染，从自然的狂暴到信仰的静谧，再到市井的烟火，你像一块海绵，全然地吸收，然后发现自己的一部分悄然改变了。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求效率、热衷在社交媒体上标记“世界”的时代，斯图米察像一位沉默的隐士，它不迎合，不喧嚣，甚至有些难以抵达。但也正因如此，它得以保存了那种珍贵的完整性。在这里，历史不是标本，生活不是表演。拜占庭的圣徒依然在昏暗的墙壁上凝视，奥斯曼的庭院里依然飘着咖啡香，瀑布亿万年如一日地奔流。它让你相信，世界上还存在这样的角落，时间以不同的密度流淌，你可以同时触摸到神圣、世俗与永恒的自然。对于一个真正的旅行者来说，斯图米察不是清单上的一个名字，而是一次心灵的校对——提醒我们，旅行的终极意义，或许就是找到这样一些地方，让自己慢下来，重新学习如何感受，如何敬畏，如何在一杯简单的咖啡里，品尝出整个世界的丰饶与宁静。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/tetovo-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    泰
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">泰托沃老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tetovo Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/prilep-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普里莱普老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Prilep Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/stobi" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯托比考古遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Stobi</p>
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
