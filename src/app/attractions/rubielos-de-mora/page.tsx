import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '鲁维埃洛斯德莫拉 Rubielos de Mora｜时光凝固的红砖与铁艺梦境 - 最佳欧洲景点',
  description: '车子沿着盘山路绕上最后一道弯，一片温暖的赭红色突然撞进眼帘，像一堆被夕阳精心码放过的陶罐，稳稳地坐落在青灰色的山峦褶皱里。这就是鲁维埃洛斯德莫拉给你的第一瞥——不是恢弘的城堡尖顶，而是一种敦实、安宁的集体存在感。风穿过松林带来清冽的气息，但当你停好车，踏上第一块被岁月磨出光泽的石灰岩石板路时，空气的',
}

export default function RubielosDeMoraPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '西班牙', href: '/destinations/europe' },
            { label: '特鲁埃尔（阿拉贡大区）', href: '/destinations/europe' },
            { label: '鲁维埃洛斯德莫拉', href: '/attractions/rubielos-de-mora' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`鲁维埃洛斯德莫拉・Rubielos de Mora・西班牙・特鲁埃尔（阿拉贡大区）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着盘山路绕上最后一道弯，一片温暖的赭红色突然撞进眼帘，像一堆被夕阳精心码放过的陶罐，稳稳地坐落在青灰色的山峦褶皱里。这就是鲁维埃洛斯德莫拉给你的第一瞥——不是恢弘的城堡尖顶，而是一种敦实、安宁的集体存在感。风穿过松林带来清冽的气息，但当你停好车，踏上第一块被岁月磨出光泽的石灰岩石板路时，空气的味道就变了。那是旧木头、干燥的砖尘、以及从某扇虚掩的门后飘出的，炖菜里月桂叶和藏红花的、扎实的家的味道。整个小镇静得能听见自己的脚步声在窄巷里回荡，偶尔“哐当”一声，是二楼一位老奶奶推开她那布满涡卷纹饰的铁艺窗栓的声音。
你很快会迷上这里的“触觉”。墙是粗糙而温暖的红砖，阳台的铁栏杆冰凉却有着不可思议的柔美线条——葡萄藤、缠枝花、甚至神话里的动物，被几个世纪前的铁匠用火与锤子永恒地凝固在这里。阳光好的下午，光斜斜地切过巷子，把这些铁艺的影子拉长，投射在砖墙上，变成一幅不断流动的、黑色的蕾丝画。本地人的生活节奏就镶嵌在这些光影里。上午，主广场（Plaza Hispano América）的咖啡馆外，几位老先生戴着呢帽，用浓重的阿拉贡方言讨论着天气和收成；下午，妇女们提着菜篮，消失在那些高大的、带着雄伟石拱的大门后，门内藏着另一个世界：封闭的庭院（Patio）。那里是家庭的绿洲，通常有一口井，铺着鹅卵石的地面，墙角的天空葵和九重葛开得轰轰烈烈，生活的声音和气息都被高墙温柔地拢住，只留下静谧。
它的核心魅力，恰恰在于这种“内向的丰盛”。这里没有为了游客而设的喧嚣商店，没有刺眼的霓虹。它的美是收敛的、需要你慢下来去发现的。每一扇门、每一道铁栏、每一处斑驳的纹章，都在低声讲述着家族的历史、财富的积累、以及一种将日常生活上升到艺术高度的固执追求。走在其中，你感觉自己不是一个旁观者，而是一个偶然闯入了一本精美历史绘本的读者，书页由红砖和铁构成，故事是关于如何在一个偏远、严酷的山地环境里，建造并守护一份独属于自己的、精致而宁静的文明。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子沿着盘山路绕上最后一道弯，一片温暖的赭红色突然撞进眼帘，像一堆被夕阳精心码放过的陶罐，稳稳地坐落在青灰色的山峦褶皱里。这就是鲁维埃洛斯德莫拉给你的第一瞥——不是恢弘的城堡尖顶，而是一种敦实、安宁的集体存在感。风穿过松林带来清冽的气息，但当你停好车，踏上第一块被岁月磨出光泽的石灰岩石板路时，空气的味道就变了。那是旧木头、干燥的砖尘、以及从某扇虚掩的门后飘出的，炖菜里月桂叶和藏红花的、扎实的家的味道。整个小镇静得能听见自己的脚步声在窄巷里回荡，偶尔“哐当”一声，是二楼一位老奶奶推开她那布满涡卷纹饰的铁艺窗栓的声音。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你很快会迷上这里的“触觉”。墙是粗糙而温暖的红砖，阳台的铁栏杆冰凉却有着不可思议的柔美线条——葡萄藤、缠枝花、甚至神话里的动物，被几个世纪前的铁匠用火与锤子永恒地凝固在这里。阳光好的下午，光斜斜地切过巷子，把这些铁艺的影子拉长，投射在砖墙上，变成一幅不断流动的、黑色的蕾丝画。本地人的生活节奏就镶嵌在这些光影里。上午，主广场（Plaza Hispano América）的咖啡馆外，几位老先生戴着呢帽，用浓重的阿拉贡方言讨论着天气和收成；下午，妇女们提着菜篮，消失在那些高大的、带着雄伟石拱的大门后，门内藏着另一个世界：封闭的庭院（Patio）。那里是家庭的绿洲，通常有一口井，铺着鹅卵石的地面，墙角的天空葵和九重葛开得轰轰烈烈，生活的声音和气息都被高墙温柔地拢住，只留下静谧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的核心魅力，恰恰在于这种“内向的丰盛”。这里没有为了游客而设的喧嚣商店，没有刺眼的霓虹。它的美是收敛的、需要你慢下来去发现的。每一扇门、每一道铁栏、每一处斑驳的纹章，都在低声讲述着家族的历史、财富的积累、以及一种将日常生活上升到艺术高度的固执追求。走在其中，你感觉自己不是一个旁观者，而是一个偶然闯入了一本精美历史绘本的读者，书页由红砖和铁构成，故事是关于如何在一个偏远、严酷的山地环境里，建造并守护一份独属于自己的、精致而宁静的文明。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`鲁维埃洛斯德莫拉`} />
                <InfoRow label="英文名称" value={`Rubielos de Mora`} />
                <InfoRow label="正式名称" value={`Historic Town of Rubielos de Mora`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`特鲁埃尔（阿拉贡大区）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`阿拉贡内陆地区保存最完好的文艺复兴及巴洛克时期古镇之一，是“特鲁埃尔红砖穆德哈尔艺术”的重要典范与生活化载体。`} />
                <InfoRow label="建筑特色" value={`密集而和谐的红砖建筑群，配以精美繁复的锻铁阳台、窗棂和家族纹章，以及内向宁静、繁花似锦的封闭式庭院。`} />
                <InfoRow label="建筑风格" value={`以西班牙穆德哈尔风格为基底，融合了文艺复兴和巴洛克的装饰元素，形成独特的阿拉贡山地民用建筑风格。`} />
                <InfoRow label="文化价值" value={`这里不是一座博物馆，而是一幅依然呼吸着的、关于中世纪城镇规划、传统手工艺（铁艺、砖石）与缓慢山居生活的鲜活画卷。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇本身全天可自由漫步。主要公共建筑如市政厅、游客中心、部分向公众开放的古老庭院（Patios）开放时间通常为工作日上午10点至下午2点，下午4点至7点；周末及夏季（7-8月）开放时间会延长，但部分庭院仅在特定节日（如庭院开放日）或预约参观。圣玛丽亚教堂（Iglesia de Santa María）开放时间较为固定，通常是上午11点至下午1点，下午5点至晚上8点。建议行前在官网或游客中心核实最新时刻表。`} />
              <InfoRow label="门票价格" value={`进入小镇免费。参观市立博物馆（Museo Municipal）门票约2欧元，学生及65岁以上老人1欧元。参观特定的私人历史宅邸庭院（如卡萨康萨雷斯之家 Casa Consistorial）可能需支付少量捐款（约1-3欧元）或包含在导游讲解费中（约5-8欧元）。某些季节性文化活动或夜间导览游需额外付费。`} />
              <InfoRow label="地址" value={`Plaza Hispano América, 1, 44415 Rubielos de Mora, Teruel, Spain`} />
              <InfoRow label="交通方式" value={`最近的机场是瓦伦西亚机场（VLC），车程约1.5-2小时。最便捷的方式是自驾：从瓦伦西亚沿A-23高速公路向北，在“Ademuz/Rubielos de Mora”出口下，转入A-232/A-1514公路，跟随棕色旅游标志即可到达，山路蜿蜒但风景绝佳。公共交通较不便：可从特鲁埃尔市（Teruel）乘坐区域巴士（Autobuses Samar公司），每天约有1-2班车，车程约1小时，务必提前在特鲁埃尔汽车站查询并购买往返票，因为返程班次极少。强烈建议租车，以便探索周边壮丽的“阿拉贡红砖古镇群”。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "鲁维埃洛斯的故事，始于它作为一个战略要塞的诞生。中世纪早期，这里是基督教王国与南方穆斯林势力拉锯的边境地带。1212年纳瓦斯德托洛萨战役后，基督教势力南推，阿拉贡国王詹姆斯一世于13世纪中叶授予此地特许状，确立了它作为边境防御镇的地位。最初的城墙和城堡（如今仅存遗迹）守护着第一批居民。但真正塑造它灵魂的，并非连年战火，而是随后几个世纪的和平与繁荣。它地处通往瓦伦西亚和地中海沿岸的重要商道上，羊毛、木材、藏红花和橄榄油的贸易让小镇积累了惊人的财富。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "黄金时代在15至17世纪到来。那些在贸易中发家的贵族和富商们，没有将财富挥霍在征战上，而是倾注于建设自己的家园。他们雇用了当时最优秀的穆德哈尔工匠——这些继承了伊斯兰艺术精髓的基督徒或摩尔人后裔工匠。于是，本地烧制的红砖，在他们手中被玩出了极致的花样：复杂的几何拼花、镂空的通风孔、层层叠叠的飞檐。但更点睛的是铁艺。阿拉贡山地产优质铁矿，锻造传统深厚。富人们竞相聘请铁匠，将自家阳台打造成展示财富与品味的舞台。铁，这种坚硬冰冷的材料，被锻造成了如同植物藤蔓般自然卷曲、充满生命力的形态。每一家的图案都独一无二，成了家族的“钢铁签名”。同时，为了在严冬保暖、炎夏避暑，并保护家庭隐私，封闭式庭院的建筑形式被发展到顶峰，外部是质朴甚至威严的高墙，内部却是生机盎然、雕梁画栋的私人天堂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，命运的转折点在19世纪到来。新的交通线路绕开了这座山间小镇，工业革命的浪潮似乎遗忘了这里。经济衰退，人口外流，鲁维埃洛斯逐渐陷入了长达百年的沉睡。时间在这里仿佛变慢了，但也正是这种“被遗忘”，奇迹般地保护了它。当20世纪现代化浪潮席卷西班牙，许多古镇被改造得面目全非时，鲁维埃洛斯却因为偏远和贫困，意外地将它黄金时代的模样完整地“腌制”了起来。那些精美的府邸没有倒塌，只是略显憔悴；铁艺阳台生了锈，但骨架依然坚固。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的第二次生命始于20世纪下半叶。一批有识之士——包括本地居民、建筑师和历史学家——开始意识到这座“沉睡美人”的无价价值。1978年，它成为西班牙第一个被宣布为“国家历史艺术遗址”的城镇整体。这不仅仅是一个名号，更带来了严格的保护法规和修复资金。修复工作不是推倒重建，而是小心翼翼地“唤醒”。工匠们用传统技艺清洗砖墙，除锈并重新为铁艺上漆，修复木制窗框。过程缓慢而精细，就像在修复一件巨大的、有人居住的古董。如今，你看到的不是迪士尼式的布景，而是一个社区在现代化进程中，选择以尊重历史的方式继续生活。年轻一代开始回归，开设小型的艺术工作室、精品旅馆和餐厅，但他们小心翼翼地不让商业气息打破那份积淀了数百年的宁静。鲁维埃洛斯德莫拉，于是从一座因衰落而保存的化石，变成了一项关于如何让活着的文化遗产继续呼吸的成功实验。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议预留完整的一天给鲁维埃洛斯。最佳抵达时间是上午十点前，这时柔和的晨光刚好洒在朝东的建筑立面上，小镇刚刚苏醒，游客稀少。从主城门（Portal de San Antonio）进入，开启你的穿越之旅。整体节奏务必放慢，核心不是打卡，而是沉浸。上午用2-3小时沿着主街和放射状的小巷随意探索，重点欣赏建筑立面和铁艺细节。中午在主广场找家餐厅享用漫长的阿拉贡午餐。下午则专注于参观一两处开放的公共建筑内部（如市政厅、教堂）和深入小巷寻找那些偶然开放的庭院。傍晚前，可以驱车或步行到小镇外围的山坡上，回望夕阳下的全景。这样安排能让你体验到小镇从晨光到暮色的不同光影魔法，以及当地人日常生活的节奏。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`避开周日和节假日的中午，很多小店和博物馆会关门休息，小镇会显得过于安静。
一定要穿一双绝对舒适的平底鞋，这里的石板路古老而起伏，高跟鞋会是一场灾难。
尊重当地人的隐私，观赏庭院时如大门敞开可在外礼貌张望拍照，但如果大门紧闭或挂有“私人”标牌，切勿擅自闯入。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从古老的圣安东尼奥城门（Portal de San Antonio）进入，抚摸那厚重的石拱，想象几个世纪前商队和旅人由此进出的情景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着卡尔马桑特街（Calle Carmen Sambeat）缓坡上行，让你的眼睛适应两旁建筑红砖的温暖色调和阳台上层出不穷的铁艺涡卷。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在主广场（Plaza Hispano América）的栗子树下驻足，看看市政厅（Casa Consistorial）华丽的外墙和带拱廊的走廊，感受小镇公共生活的中心脉搏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拐进市政厅旁边的小巷，寻找前奥古斯丁修道院（Ex-Convento de los Agustinos），现在是工艺中心，其简洁的砖砌回廊散发着宁静的修道院气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`随意选一条石板坡巷钻进，比如卡瓦列罗街（Calle Caballeros），仰头细细品味每一户阳台铁艺的差异，并留意门楣上雕刻的古老家族纹章。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在圣玛丽亚教堂（Iglesia de Santa María）沉重的木门前稍作停留，进去感受内部由纯粹砖石构筑的哥特式穆德哈尔风格的肃穆与高耸。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观小镇博物馆（Museo Municipal），它坐落在一座美丽的古宅里，通过考古发现和民俗物品，快速了解这片土地从史前到近代的层层故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当你觉得有点累了，就找一家有着醒目铁艺招牌的小酒吧（tasca），点一杯本地产的“神之水滴”（Garnacha）红酒，和酒保聊聊哪些庭院今天可能允许礼貌的访客探头看一看。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣安东尼奥城门内测视角`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到六点，阳光西斜，从城门内回望小镇主街，光线会将红砖建筑染成金红色，深邃的巷弄形成完美的纵深感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`铁艺阳台走廊（如 Calle del Carmen Samabat）`}</h4>
                  <p className="text-sm text-gray-700">{`清晨九点前或下午晚些时候，利用侧光拍摄铁艺精美的阴影细节，构图时让阳台充满画面，背景是虚化的暖红色砖墙。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从 Mirador de Rubielos 观景台（位于小镇西侧公路上）`}</h4>
                  <p className="text-sm text-gray-700">{`日出时分或日落前半小时，这里可以拍到小镇全景，赭红色的屋顶群在群山环抱中升起炊烟，光线柔和，色彩层次最丰富。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`古老的奥古斯丁修道院回廊`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，阳光从回廊天井直射而下，在红砖拱廊和地面上形成强烈的明暗对比，适合拍摄极简和几何构图的照片。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`某个偶然发现的半开庭院门口`}</h4>
                  <p className="text-sm text-gray-700">{`午后，等待一束光恰好照亮庭院内的一角鲜花或一把旧椅子，迅速抓拍，将门框作为天然画框，营造“偷窥”到一个秘密花园的故事感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄居民或他们的住宅时，请务必先微笑示意并获得默许，西班牙人通常很友好，但直接镜头怼脸很不礼貌。`}</li>
                <li>• {`小镇的猫和慵懒的狗常常是绝佳的“模特”和画面点缀，可以自然抓拍它们在小巷中漫步或打盹的样子。`}</li>
                <li>• {`珍惜“蓝色时刻”（日落后的二十分钟），这时天空是深蓝色，小镇的窗灯陆续亮起，用三脚架长时间曝光，能拍出静谧而梦幻的夜景。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住由传统石头房子改造的家庭旅馆（Casa Rural），房间不大但干净温馨，主人会为你准备丰盛的阿拉贡式早餐，晚上还能在公共客厅的壁炉边和其他旅行者交换故事。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`下榻“埃尔米塔精品酒店”（Hotel Ermita），它由一座古老的隐修所改造而成，完美融合了原始的石墙、木梁与现代设计，部分房间拥有直面山谷的露台，夜晚星空璀璨。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`选择小镇边缘的“洛斯帕拉西奥斯庄园酒店”（Hacienda Los Palacios），这座经过精心修复的贵族庄园拥有广阔的花园和泳池，提供顶尖的本地美食，让你在深度体验历史的同时享受绝对的宁静与奢华。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`温馨之选`}</h4>
                  <p className="text-sm text-purple-800">{`“埃尔林康德鲁维埃洛斯”旅馆（El Rincón de Rubielos），位于一条安静小巷的尽头，每个房间都以本地历史人物命名，装饰独特，老板娘的热情和建议能让你的旅程充满惊喜。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇非常小，所有住宿地点步行到中心广场都在5-10分钟内，无需担心交通问题。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（7-8月）和重要的当地节日（如9月的圣马特奥节）期间住宿非常紧俏，务必提前数月预订。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "大多数乡村旅馆（Casa Rural）不提供24小时前台服务，确定入住时间后最好提前与主人沟通抵达时间。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开鲁维埃洛斯德莫拉好些天了，但闭上眼，指尖仿佛还能触到那些红砖粗糙温暖的质感，眼前还能浮现出铁艺花纹在夕阳下投下的、摇曳的黑色蕾丝。这个地方带给我的，不是一种游览名胜后的震撼，而是一种被缓慢浸染后的宁静。它让我想起一句话：真正的奢华，是空间与时间。在这里，时间以砖石的层叠、铁锈的深浅来计量；空间以庭院的方寸、巷弄的曲折来定义。它自豪地展示着一种与当代“更快、更高、更强”逻辑背道而驰的生活哲学——一种内向的、精致的、深耕于本地的稳固与美好。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个全球化的时代，太多古镇沦为了同质化的旅游商品。但鲁维埃洛斯不同。它倔强地保持着自己的心跳和呼吸。它的魅力不在于让你消费历史，而在于邀请你进入一种历史延续至今的生活节奏。在这里，你会重新学会“注视”——注视一扇门上的纹章，注视一道光影的移动，注视一位老人不慌不忙走过广场的背影。对于每一位厌倦了走马观花、渴望在旅途中获得内心沉淀的深度游者来说，鲁维埃洛斯德莫拉就像一处隐秘的精神加油站。它不多言，只是静静地在那里，用它的红砖、铁艺和花香，告诉你：有些美好，需要停下来，才能看见；有些价值，正在于它拒绝被匆忙的世界改变容颜。来这里，不只是看一个景点，而是经历一场关于耐心、细节与持久之美的温柔教育。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/laguardia-rioja-wine-cellar-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉瓜迪亚</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Laguardia</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/penafiel-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩纳菲耶尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Peñafiel Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/setenil-de-las-bodegas" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塞
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塞特尼尔-德拉斯博德加斯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Setenil de las Bodegas</p>
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
