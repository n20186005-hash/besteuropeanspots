import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '克鲁舍沃 Kruševo｜漫步在巴尔干海拔最高的彩色山城，倾听1903年第一个共和国回荡的钟声 - 最佳欧洲景点',
  description: '车子沿着最后一段发卡弯爬升，当肺叶开始感受到高海拔空气特有的那份清冽时，克鲁舍沃就像一幅被突然展开的巨幅水彩画，毫无预备地撞进你的视野。第一印象是色彩——不是意大利小镇那种统一的暖黄，而是肆无忌惮的、孩童般天真的斑斓。粉红、天蓝、鹅黄、草绿的房子，像被随意撒在墨绿色山坡上的糖果，彼此紧挨着，顺着陡峭...',
}

export default function KruEvoMacedoniaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '克鲁舍沃', href: '/attractions/kru-evo-macedonia' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`克鲁舍沃・Kruševo・北马其顿・佩拉戈尼亚大区（克鲁舍沃镇）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着最后一段发卡弯爬升，当肺叶开始感受到高海拔空气特有的那份清冽时，克鲁舍沃就像一幅被突然展开的巨幅水彩画，毫无预备地撞进你的视野。第一印象是色彩——不是意大利小镇那种统一的暖黄，而是肆无忌惮的、孩童般天真的斑斓。粉红、天蓝、鹅黄、草绿的房子，像被随意撒在墨绿色山坡上的糖果，彼此紧挨着，顺着陡峭的斜坡一层层向上堆叠，直到山顶那座醒目的白色纪念碑。风是这里永恒的背景音，带着松木和远处牧场的干燥气味，穿过狭窄巷弄时，会摇动老妇人窗台上的天竺葵，发出窸窣的轻响。
走在用巨大石板铺就的斯特拉加主街上，你会发现时间在这里有着奇怪的流速。上方，是严肃的历史与宏大的叙事，关于起义、共和国和牺牲；而在你脚下的日常生活中，却弥漫着一种缓慢的、近乎停滞的宁静。老人们坐在百年咖啡馆“凯达”外的小木凳上，一杯土耳其咖啡能喝上一个下午，用你听不懂的阿罗蒙语或马其顿语低声交谈，眼神越过红色屋顶，望向远方的佩拉戈尼亚平原。面包店里飘出刚烤好的“博加察”馅饼的黄油焦香，混合着五金店门口铁器的生冷气味。这里不像一个纯粹的旅游景点，更像一个依然在倔强呼吸着的古老社区，历史不是被封存在玻璃柜里，而是砌在每一堵石头墙里，流淌在每一个居民缓慢的步调里。
最打动人的，莫过于这种极致的反差与共存。这里是北马其顿海拔最高的小镇，空气稀薄，阳光炽烈，仿佛离天空更近，离尘世的纷争也更远。然而，恰恰是这片宁静的山巅，在1903年的夏天，爆发了巴尔干半岛上对抗奥斯曼帝国最悲壮、也最富有理想主义色彩的起义之一。勇敢与平凡，绚烂与质朴，逝去的英雄与活着的日常，在这里不是对立面，而是交织成克鲁舍沃独一无二的经纬。当你站在高处，看着夕阳把每一栋彩色房子的影子拉得老长，你会明白，这座山城的核心魅力不在于某个孤立的景点，而在于它整体所呈现的那种——在沉重的历史中开出的、带着韧性的生命之花。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子沿着最后一段发卡弯爬升，当肺叶开始感受到高海拔空气特有的那份清冽时，克鲁舍沃就像一幅被突然展开的巨幅水彩画，毫无预备地撞进你的视野。第一印象是色彩——不是意大利小镇那种统一的暖黄，而是肆无忌惮的、孩童般天真的斑斓。粉红、天蓝、鹅黄、草绿的房子，像被随意撒在墨绿色山坡上的糖果，彼此紧挨着，顺着陡峭的斜坡一层层向上堆叠，直到山顶那座醒目的白色纪念碑。风是这里永恒的背景音，带着松木和远处牧场的干燥气味，穿过狭窄巷弄时，会摇动老妇人窗台上的天竺葵，发出窸窣的轻响。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走在用巨大石板铺就的斯特拉加主街上，你会发现时间在这里有着奇怪的流速。上方，是严肃的历史与宏大的叙事，关于起义、共和国和牺牲；而在你脚下的日常生活中，却弥漫着一种缓慢的、近乎停滞的宁静。老人们坐在百年咖啡馆“凯达”外的小木凳上，一杯土耳其咖啡能喝上一个下午，用你听不懂的阿罗蒙语或马其顿语低声交谈，眼神越过红色屋顶，望向远方的佩拉戈尼亚平原。面包店里飘出刚烤好的“博加察”馅饼的黄油焦香，混合着五金店门口铁器的生冷气味。这里不像一个纯粹的旅游景点，更像一个依然在倔强呼吸着的古老社区，历史不是被封存在玻璃柜里，而是砌在每一堵石头墙里，流淌在每一个居民缓慢的步调里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，莫过于这种极致的反差与共存。这里是北马其顿海拔最高的小镇，空气稀薄，阳光炽烈，仿佛离天空更近，离尘世的纷争也更远。然而，恰恰是这片宁静的山巅，在1903年的夏天，爆发了巴尔干半岛上对抗奥斯曼帝国最悲壮、也最富有理想主义色彩的起义之一。勇敢与平凡，绚烂与质朴，逝去的英雄与活着的日常，在这里不是对立面，而是交织成克鲁舍沃独一无二的经纬。当你站在高处，看着夕阳把每一栋彩色房子的影子拉得老长，你会明白，这座山城的核心魅力不在于某个孤立的景点，而在于它整体所呈现的那种——在沉重的历史中开出的、带着韧性的生命之花。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`克鲁舍沃`} />
                <InfoRow label="英文名称" value={`Kruševo`} />
                <InfoRow label="正式名称" value={`Kruševo`} />
                <InfoRow label="国家" value={`北马其顿`} />
                <InfoRow label="城市" value={`佩拉戈尼亚大区（克鲁舍沃镇）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`1903年伊利登起义的中心和短暂存在的克鲁舍沃共和国所在地，被认为是现代马其顿民族意识的摇篮。`} />
                <InfoRow label="建筑特色" value={`一座建立在海拔1350米山坡上的“露天博物馆”，房屋依山势层层错落，以鲜艳的彩漆外墙、厚重的石基和深色的木结构为典型特征。`} />
                <InfoRow label="建筑风格" value={`呈现出独特的奥斯曼晚期建筑与拜占庭-巴尔干本土风格的融合，带有明显的瓦拉几亚牧羊人文化和19世纪民族复兴时期的影响。`} />
                <InfoRow label="文化价值" value={`马其顿人、瓦拉几亚人（阿罗蒙人）、阿尔巴尼亚人等多个民族共同生活与创造的历史见证，是巴尔干半岛多元文化和谐共存的一个独特缩影。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`克鲁舍沃小镇本身全天24小时开放。其核心景点如伊利登起义纪念碑、博物馆等开放时间各异：历史博物馆和民族志博物馆通常为周一至周五上午9点至下午4点，周六上午10点至下午2点，周日休息（夏季旅游旺季周末可能开放）。斯皮罗·古拉博斯基故居等名人故居开放时间更灵活，建议提前在镇中心旅游信息中心确认。冬季（11月至3月）部分博物馆开放时间可能缩短或需要预约。`} />
              <InfoRow label="门票价格" value={`进入克鲁舍沃镇免费。各博物馆和纪念馆门票单独收取，价格非常亲民，一般在100-300北马其顿代纳尔（约合1.5-5欧元）之间。学生、儿童和团体通常有折扣。购买“克鲁舍沃文化通票”（旅游信息中心有售）可以优惠价格参观多个主要场馆。`} />
              <InfoRow label="地址" value={`克鲁舍沃镇，佩拉戈尼亚大区，北马其顿 7550`} />
              <InfoRow label="交通方式" value={`最近的主要机场是斯科普里国际机场（SKP）和希腊塞萨洛尼基机场（SKG）。从斯科普里出发，最推荐的方式是租车自驾，沿A3/E65高速公路向南行驶约90公里至普里莱普，然后转入蜿蜒但风景绝美的山区公路R1306，全程约2-2.5小时。山路部分需谨慎驾驶。公共交通方面，从斯科普里中央巴士站有班次有限的巴士前往克鲁舍沃，每天约2-3班，车程约3小时，时间表常有变动，强烈建议出发前一天确认。从比托拉或普里莱普出发则有更频繁的小巴（合乘出租车），是更灵活的选择。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`克鲁舍沃的故事，远不止于20世纪初那场轰轰烈烈的起义。它的心跳，早在奥斯曼帝国漫长的统治时期就已开始，以一种特殊的方式律动。由于地处偏远山区，这里成为了一个“避风港”，吸引了大量被称为“阿罗蒙人”或“瓦拉几亚人”的游牧民族在此定居。他们是养羊和贸易的好手，沿着古老的“埃格纳蒂亚”商道分支，将羊毛、奶酪和手工制品带到远方，也带回了财富和相对宽松的自治权。十九世纪，克鲁舍沃因为繁荣的畜产品和手工艺贸易（尤其是著名的“克鲁舍沃水罐”陶瓷）而变得富庶，那些我们今天看到的色彩鲜艳的豪宅，许多都建于这个“黄金时代”。商人们从比托拉、甚至维也纳请来工匠，于是，建筑上出现了奥地利分离派的装饰线条，室内则混合了东方地毯和欧洲家具，形成了一种奇特的“山区巴洛克”风格。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，平静之下暗流涌动。19世纪末，巴尔干各民族觉醒的思潮也随着商队和书籍传入了这座高山小镇。秘密的学校、读书会和革命委员会在那些彩色房子的地下室中诞生。关键的转折点降临在1903年8月2日（旧历7月20日，即“伊利登节”）。在内部马其顿革命组织（IMRO）的领导下，起义者们在此宣布成立“克鲁舍沃共和国”。这不仅是针对奥斯曼统治的武装反抗，更是一次短暂却伟大的社会实验。它的《克鲁舍沃宣言》呼吁所有民族——马其顿人、阿罗蒙人、阿尔巴尼亚人、土耳其人——不分信仰和语言，团结一致。起义领袖尼科·卡雷夫本人就是阿罗蒙人。这个存在仅十天的共和国，像一颗划过沉沉夜空的流星，其理想主义的光辉至今仍被缅怀。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`起义最终被残酷镇压，克鲁舍沃遭受了巨大的破坏和人员伤亡。但火种并未熄灭。在随后的两次巴尔干战争和两次世界大战中，这座小镇始终是区域动荡的见证者和承受者。南斯拉夫时代，它被塑造成重要的爱国主义教育基地，山顶那艘飞船般的“伊利登起义纪念碑”就是那个时期的产物，由著名雕塑家乔丹·格拉达罗夫设计，其未来主义风格与周围传统山景形成震撼对话。1991年北马其顿独立后，克鲁舍沃面临着新的挑战：年轻人外流，传统产业衰落。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但克鲁舍沃的韧性再次显现。人们开始精心修复那些老房子，不是把它们变成冰冷的博物馆，而是改造成温馨的民宿、画廊和家庭餐馆。阿罗蒙人的传统文化，尤其是他们的音乐和羊毛编织技艺，被有意识地保存和展示。小镇坦然接受了自己“共和国摇篮”和“多元文化活化石”的双重身份。每年8月2日，纪念活动依然庄重，但平日里，游客更多是被它的宁静、色彩和那种未被过度商业化的真诚所吸引。历史在这里不是包袱，而是根基，让这座高山小镇在新时代，依然能找到自己独特而缓慢的节奏。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味克鲁舍沃，建议你至少留出一整天的时间。最佳抵达时间是前一天下午或傍晚，在山城住一夜，第二天清晨开始探索。这样你既能捕捉到晨光中最静谧的街巷，也能欣赏到辉煌的日落。整体游览节奏宜慢不宜快，因为上下坡很多，需要体力，更因为这里的魅力在于闲逛和观察。上午精力充沛时，先攻克高地纪念碑并参观核心博物馆，理解其历史脉络；中午在老城中心用餐，感受生活气息；下午则穿梭于色彩斑斓的民居小巷，进行无目的的漫游，与当地人偶遇，并在日落时分抵达最佳观景台，为这一天画上完美句号。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇坡度极陡，请务必穿一双舒适防滑的鞋子，高跟鞋在这里寸步难行。
夏季正午阳光非常强烈且紫外线强，加上高海拔，务必做好防晒措施，戴帽子和墨镜，并随时补水。
山区天气变化快，即使在夏季，傍晚也可能起风降温，建议随身带一件薄外套。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从斯特拉加主街底部开始，逆着光向上走，看阳光一点点点燃两侧糖果色房屋的窗棂，空气中飘散着新鲜咖啡和烤面点的香气。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着陡峭的石阶小径“卡尔什马”向上攀登，穿过一片安静的居民区，不时停下来回望，脚下层层叠叠的红色屋顶在晨雾中如波浪般展开。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`抵达山顶的“梅库”纪念碑区，进入那座形如断裂巨蛋的伊利登起义纪念碑内部，感受从天窗倾泻而下的阳光与庄严肃穆的无声震撼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后直奔克鲁舍沃博物馆，在那些发黄的照片、生锈的武器和精致的民族服饰前，仔细聆听1903年那个短暂夏天惊心动魄的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午餐一定要去老字号餐馆“凯莱”，坐在露台上点一份传统的“克鲁舍沃塔瓦”陶罐炖肉，就着本地面包，俯瞰半个山谷的景色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午漫无目的地钻进主街两侧迷宫般的巷弄，寻找那些拥有精美木雕阳台和彩色浮雕的百年老宅，比如斯皮罗·古拉博斯基故居。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`赶在日落前一个小时，步行或开车前往城镇西侧的“Vršnik”观景台，看着夕阳的余晖将整个彩色山城染成一片温暖的金红。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚上回到主街，找一家有现场传统音乐演奏的小酒馆，喝一杯本地李子白兰地“拉基亚”，在阿罗蒙风笛忧伤又欢快的旋律中结束一天。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`斯特拉加主街中段仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后，阳光斜射，站在地势较低处向上拍摄，可以捕捉到彩色的房屋、陡峭的石阶与蓝天构成的生动几何构图，人物可成为画龙点睛的移动点缀。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`Vršnik纪念碑日落全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时抵达，使用广角镜头，将前景的纪念碑雕塑、中景的克鲁舍沃全景和背景被晚霞染色的天空一同纳入画面，色彩层次极为丰富。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`斯皮罗故居阳台细节`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点左右光线柔和时，聚焦于老宅阳台精美的木雕栏杆和色彩斑斓的彩绘外墙，利用光影突出纹理和质感，营造复古而温暖的氛围。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`梅库纪念碑内部穹顶`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分进入纪念碑内部，抬头拍摄那束从顶部天窗直射而入的阳光，在昏暗的室内形成强烈的明暗对比和神圣的光柱，极具视觉冲击力。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`老城小巷局部光影`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个有特色门廊或爬满藤蔓的墙角，在早晨或傍晚的侧光下拍摄，捕捉石板路上光影交错、岁月静好的局部瞬间。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄当地居民，尤其是老人，务必先微笑示意并征得同意，他们通常很友善，但礼貌是必须的。无人机飞行在纪念碑等敏感区域可能受限，放飞前最好咨询当地信息中心或留意标识。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`怀旧之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住由19世纪富商豪宅改造的“老城之家”民宿，房间保留了原始的彩绘天花板和巨大的壁炉，老板娘会为你准备地道的阿罗蒙式早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`全景体验`}</h4>
                  <p className="text-sm text-green-800">{`选择位于城镇西侧高处的“天空旅馆”，每个房间都拥有面对山谷的落地窗和私人阳台，是拍摄日出和星空的最佳据点，设施现代而舒适。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`艺术氛围`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻“画家角落”精品酒店，这里由几位本地艺术家共同经营，每个房间的装饰风格都不同，摆放着原创艺术品，公共区域就像一个温馨的画廊。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济实惠`}</h4>
                  <p className="text-sm text-purple-800">{`主街旁的家庭旅馆“宁静小屋”，房间干净简单，但主人热情好客，会给你最地道的游玩建议，屋顶露台是晚上小酌观星的绝佳地点。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`克鲁舍沃夏季（7-8月）和伊利登起义纪念日前后是旺季，住宿相对紧张，建议提前1-2个月预订。冬季很多民宿会歇业，选择较少，但可以体验真正的雪山静谧。小镇治安非常好，夜晚街道安静，可以放心散步。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开克鲁舍沃许久，脑海里挥之不去的，不是某个具体的画面，而是一种混合的感觉：是高处清冽的风，是石板路被晒暖后散发的土腥味，是彩色墙壁在午后阳光下那种近乎不真实的鲜艳，更是历史书页的沉重与市井生活的轻盈，在这里奇妙共生后产生的、一种淡淡的忧伤与坚韧并存的基调。这座山城教会我一件事：真正的历史感，并非来自宏大的纪念碑本身，而是当你知道，你脚下这条被磨得发亮的石板路，曾走过赴死的起义者，也走着今天去买面包的老妇人；你倚靠的这面蓝色墙壁，曾庇护过秘密会议，也映照着孩童奔跑的影子。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在一切都追求效率和速成的时代，克鲁舍沃的存在是一种温柔的抵抗。它提醒我们，有些地方的价值，恰恰在于它的“不便”——需要你绕过蜿蜒的山路，需要用脚步去丈量陡峭的坡度，需要你慢下来，去读一段复杂甚至悲壮的历史，然后坐在广场上，看时光如何将这一切沉淀为日常的宁静。对于那些厌倦了打卡式旅行，渴望在旅途中触摸历史纹理、感受文化层叠、并在一座真实生活着的小镇里获得内心平静的旅人来说，克鲁舍沃不是目的地，而是一处值得专程前往的、海拔1350米的精神高地。在这里，你能听到巴尔干心脏最真实、最复杂，也最动人的跳动。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/skopje-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯科普里老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Skopje Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bitola-old-bazaar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    比
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">比托拉老集市</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bitola Old Bazaar</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ohrid-lake-and-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥赫里德湖与老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ohrid Lake and Old Town</p>
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
