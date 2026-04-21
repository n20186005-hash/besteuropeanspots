import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科科拉内鲁斯坦木屋区 Kokkola Neristan｜探秘波罗的海畔沉睡的木构古城与克里米亚战争遗迹 - 最佳欧洲景点',
  description: '记得我第一脚踏进内鲁斯坦的感觉吗？不是“看到”，而是“跌入”。时间在这里不是流逝的，而是沉淀的，像一层暖洋洋的、带着松木清香的琥珀，把你温柔地包裹进去。眼睛先被色彩俘获——那不是鲜艳的、张扬的颜色，而是被波罗的海的海风吹拂了上百年的、低饱和度的温柔色谱：淡鹅黄、灰豆绿、陶土粉、浅天蓝，每一座木屋都像',
}

export default function KokkolaOldTownNeristanPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '芬兰', href: '/destinations/europe' },
            { label: '科科拉', href: '/destinations/europe' },
            { label: '科科拉（内鲁斯坦老木屋区）', href: '/attractions/kokkola-old-town-neristan' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`科科拉（内鲁斯坦老木屋区）・Kokkola (Neristan Old Wooden House District)・芬兰・科科拉`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`记得我第一脚踏进内鲁斯坦的感觉吗？不是“看到”，而是“跌入”。时间在这里不是流逝的，而是沉淀的，像一层暖洋洋的、带着松木清香的琥珀，把你温柔地包裹进去。眼睛先被色彩俘获——那不是鲜艳的、张扬的颜色，而是被波罗的海的海风吹拂了上百年的、低饱和度的温柔色谱：淡鹅黄、灰豆绿、陶土粉、浅天蓝，每一座木屋都像一块被岁月精心打磨过的糖果，安静地立在鹅卵石街道两旁。空气里有股特别的味道，是陈年木材的暖香，混合着从附近花园飘来的泥土和鲜花气息，偶尔，一丝遥远的、微咸的海风会穿过迷宫般的巷子，提醒你海就在不远处。
声音是这里最奇妙的背景乐。白日里，最大的声响可能是你脚下鹅卵石发出的“咔嗒”声，或是某扇老木门被推开时那一声悠长的“吱呀”。你会遇见当地人，他们不像是景点里的演员，就是过着自己日子的人。一位老爷爷在自家漆成奶油色的门廊下仔细擦拭自行车；隔壁的窗户开着，传出咖啡机和轻柔的芬兰语广播声；后院的晾衣绳上，洁白的床单在北大西洋吹来的风中慢悠悠地飘荡。这里的生活节奏，是用咖啡杯和园艺剪刀来度量的，缓慢、安宁，充满了具体的日常诗意。
而当你走到街区的边缘，画面陡然开阔。眼前是科科拉港平静的水面，那艘名为“Jylhä”的黑色炮艇沉默地停泊着，像一头搁浅的钢铁巨兽。从柔软、温暖的木屋世界，到冰冷、坚硬的战争遗迹，不过几步之遥。这种强烈的对比，正是科科拉最打动人心的核心——它完好保存的不仅是童话般的木屋，更是一段完整的、层叠的历史记忆：繁荣的海上贸易、战争的残酷疤痕，以及战后平凡而坚韧的日常生活如何在这些古老的墙壁里重新生根发芽。在这里，历史不是教科书上的一段话，而是你呼吸的空气、触摸的木头，和脚下每一块不平整的石子。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "记得我第一脚踏进内鲁斯坦的感觉吗？不是“看到”，而是“跌入”。时间在这里不是流逝的，而是沉淀的，像一层暖洋洋的、带着松木清香的琥珀，把你温柔地包裹进去。眼睛先被色彩俘获——那不是鲜艳的、张扬的颜色，而是被波罗的海的海风吹拂了上百年的、低饱和度的温柔色谱：淡鹅黄、灰豆绿、陶土粉、浅天蓝，每一座木屋都像一块被岁月精心打磨过的糖果，安静地立在鹅卵石街道两旁。空气里有股特别的味道，是陈年木材的暖香，混合着从附近花园飘来的泥土和鲜花气息，偶尔，一丝遥远的、微咸的海风会穿过迷宫般的巷子，提醒你海就在不远处。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "声音是这里最奇妙的背景乐。白日里，最大的声响可能是你脚下鹅卵石发出的“咔嗒”声，或是某扇老木门被推开时那一声悠长的“吱呀”。你会遇见当地人，他们不像是景点里的演员，就是过着自己日子的人。一位老爷爷在自家漆成奶油色的门廊下仔细擦拭自行车；隔壁的窗户开着，传出咖啡机和轻柔的芬兰语广播声；后院的晾衣绳上，洁白的床单在北大西洋吹来的风中慢悠悠地飘荡。这里的生活节奏，是用咖啡杯和园艺剪刀来度量的，缓慢、安宁，充满了具体的日常诗意。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而当你走到街区的边缘，画面陡然开阔。眼前是科科拉港平静的水面，那艘名为“Jylhä”的黑色炮艇沉默地停泊着，像一头搁浅的钢铁巨兽。从柔软、温暖的木屋世界，到冰冷、坚硬的战争遗迹，不过几步之遥。这种强烈的对比，正是科科拉最打动人心的核心——它完好保存的不仅是童话般的木屋，更是一段完整的、层叠的历史记忆：繁荣的海上贸易、战争的残酷疤痕，以及战后平凡而坚韧的日常生活如何在这些古老的墙壁里重新生根发芽。在这里，历史不是教科书上的一段话，而是你呼吸的空气、触摸的木头，和脚下每一块不平整的石子。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`科科拉（内鲁斯坦老木屋区）`} />
                <InfoRow label="英文名称" value={`Kokkola (Neristan Old Wooden House District)`} />
                <InfoRow label="正式名称" value={`科科拉内鲁斯坦老木屋区与海事历史遗迹`} />
                <InfoRow label="国家" value={`芬兰`} />
                <InfoRow label="城市" value={`科科拉`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`科科拉是波罗的海北部贸易史上至关重要的“焦油港”，其奇迹般完整保存的内鲁斯坦木屋区是北欧早期现代化城市规划的罕见实物范本，见证了芬兰从瑞典王国到俄罗斯帝国时期的海洋商贸繁荣。`} />
                <InfoRow label="建筑特色" value={`由数百栋紧密相连、色彩柔和的古典木构房屋组成的庞大街区，房屋山墙面向街道，形成连续而富有韵律的街景立面，后院则通过迷宫般的木栈道和小花园相互连接，构成一个独特的社区生态系统。`} />
                <InfoRow label="建筑风格" value={`以新古典主义风格为主导的木质城市建筑，融合了瑞典帝国时期的风雅与本地实用的波赫扬马地方特色，堪称“北欧木构建筑的露天百科全书”。`} />
                <InfoRow label="文化价值" value={`这里不仅仅是一个“博物馆式”的街区，而是一个持续呼吸的活态社区，完美体现了芬兰人“沉默的坚持”——在火灾、战争与现代化浪潮中，世代守护一种朴素、紧密且与自然和谐共处的生活方式。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`内鲁斯坦老城区为开放式街区，全天24小时可自由漫步。关键历史建筑（如K.H. Renlund博物馆、内鲁斯坦工匠作坊）的开放时间一般为夏季（6月至8月）周一至周五10:00-16:00，周末12:00-15:00；冬季开放时间大幅缩短或仅接受预约参观。炮艇遗迹“Jylhä”号位于港口区，全年可从外围观看，登船内部参观仅在夏季特定导览团开放，需提前在旅游局网站查询。建议行前务必在科科拉旅游局官网核实最新开放安排。`} />
              <InfoRow label="门票价格" value={`漫步内鲁斯坦木屋街区完全免费。进入K.H. Renlund博物馆等收费场馆，成人票约8-10欧元，学生及长者有优惠。夏季的特定主题导览游（如“木屋故事”、“海事历史”）价格在15-25欧元/人不等，包含进入不向公众开放的私人历史木屋。所有票务建议通过“Visit Kokkola”官网预订，有时有在线折扣。`} />
              <InfoRow label="地址" value={`内鲁斯坦区：Neristan, 67100 Kokkola, Finland
海事博物馆及炮艇遗迹：Kauppatori (Market Square), 67100 Kokkola, Finland`} />
              <InfoRow label="交通方式" value={`最近的主要机场是位于卡亚尼的Kajaani Airport (KAJ) 或瓦萨的Vaasa Airport (VAA)，但航班较少。最便捷的方式是飞抵赫尔辛基万塔机场 (HEL)，然后：
火车：从赫尔辛基中央火车站乘坐前往奥卢(Oulu)方向的城际列车，约4-4.5小时直达科科拉火车站。班次频繁，一天多班，沿途森林湖泊风光绝美。提前在VR（芬兰国铁）官网购票可享大幅优惠。
巴士：从赫尔辛基巴士总站也有长途巴士前往科科拉，耗时约5-6小时，价格可能略低于火车，但舒适度稍逊。
自驾：沿E8高速公路北上，从赫尔辛基到科科拉约500公里，车程5.5-6小时，是探索西海岸波赫扬马地区的灵活选择。
抵达科科拉后，火车站和巴士站步行至内鲁斯坦老城区仅需10-15分钟，整个老城尺度宜人，非常适合步行探索。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科科拉的故事，始于一股浓烟——不是战火，而是财富的象征。16世纪，整个北欧对“焦油”的需求爆炸性增长，这种从松木中蒸馏出的黑色粘稠液体，是当时维护木船和缆绳不可或缺的防水材料。科科拉所在的波赫扬马地区，拥有无边无际的森林，它的海岸线成了一个理想的“焦油港”。1620年，瑞典国王古斯塔夫二世·阿道夫正式授予科科拉城市特权，野心勃勃的商人们蜂拥而至，财富随着一艘艘装满焦油的货船滚滚而来。最初的木屋便是在这股“黑色黄金”的热潮中，杂乱地搭建起来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，木构城市的致命敌人是火。科科拉的老城在历史上多次被大火吞噬，其中最惨烈的一次发生在19世纪初。但芬兰人有一种沉默的固执，他们一次又一次地在灰烬上重建家园。正是在一次次重建中，一种更智慧、更美的规划诞生了。19世纪早期，新古典主义的风从欧洲大陆吹来，本地的建筑师和建造者们吸收了这种风格的优雅比例和对称美学，但却坚持使用最本地的材料——木材。于是，你看到了这些奇迹：它们有着希腊神庙般庄重的三角山墙、精美的檐口线饰和规整的矩形窗户，但通体却是温暖的松木。为了防止火灾蔓延，建筑法规要求房屋的山墙必须面向街道，这样就形成了我们今天看到的、如琴键般连续起伏的独特街道立面。内鲁斯坦，这个当时新兴的“郊区”，成为了这种融合了国际风尚与本地智慧的“木构新古典主义”的完美试验场和展示区。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "平静的贸易岁月在1854年一个冰冷的九月清晨被彻底粉碎。这是克里米亚战争期间，一场被称为“科科拉之战”的小规模冲突意外上演。一艘俄国炮艇“Jylhä”号在附近搁浅，船员试图登陆夺取物资。令他们万万没想到的是，迎击他们的不是正规军，而是一群由当地市民、学生和农民组成的民兵。这场仓促的、近乎滑稽的战斗（传说市民们用狩猎的霰弹枪和临时工具应战）却以俄国人的败退告终，而那艘“Jylhä”号则被俘获，永远留在了科科拉。战争将这个滨海小城粗暴地拽进了宏大的历史叙事，留下了一具钢铁的躯壳作为证明。如今，那艘黑色的炮艇静卧在港口，与色彩斑斓的木屋遥遥相对，像一个生硬的黑色音符，插入了一首柔和的田园诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战争结束后，科科拉继续着自己的生活。工业化时代，它的重要性逐渐被更大的港口城市取代，发展似乎慢了下来。但“慢”有时是一种恩赐。正因为没有被卷入疾风骤雨式的现代化改造，内鲁斯坦庞大的木屋街区才得以奇迹般地整体保存下来。它没有变成冰冷的博物馆，一代又一代的科科拉人继续居住在这里，修补屋顶，粉刷墙面，在后院种上土豆和玫瑰。他们的日常生活，成了这些历史建筑最好的防腐剂。今天，当你漫步其中，你看到的不是一个被抽离了灵魂的遗址，而是一个仍然在跳动的心脏——历史是它的骨架，而平凡温暖的当下，是它的血肉。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味科科拉，你需要一整天，并把脚步调到最慢的档位。建议在清晨九点前抵达，这时游客未至，阳光斜射，木屋的色彩和巷子的光影最为动人。整个深度游览可以大致分为三个部分：上午沉浸在内鲁斯坦木屋街区的细节与氛围中；午后探访集市广场、教堂和港口区的海事历史遗迹；傍晚则留给一场宁静的散步或是一杯咖啡，看日落为老城镀上金边。这样的节奏让你既能领略建筑之美和历史之重，又能捕捉到当地生活的韵律，总耗时约7-8小时，其中包含轻松的午餐和多次停下来发呆的时间。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`内鲁斯坦很多木屋是私人住宅，请尊重住户隐私，不要贸然进入花园或对着窗户拍照。芬兰的夏季（6-8月）是游览黄金期，蚊虫较多，务必准备驱蚊水；冬季则极端寒冷且白日很短，但雪覆木屋的景象极为梦幻，需全套防寒装备。老城区鹅卵石路对行李箱轮子和高跟鞋极不友好，务必穿一双绝对舒适的步行鞋。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从市政厅广场（Kaupungintori）西侧那条名为“Isokatu”的街道开始，让自己缓缓没入那片由鹅卵石和彩色木屋山墙构成的温柔波浪之中。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在迷宫般的小巷里刻意迷一次路，去发现那些隐藏在房屋后院、由高高架起的木栈道连接的秘密花园和宁静角落。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找那栋被称为“勇敢者之屋”的深红色木屋，听当地人说这里曾是一位在克里米亚战争中带头冲锋的民兵领袖的家。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在午前光线最好的时候，推开K.H. Renlund博物馆沉重的木门，里面不仅藏着地方历史，其建筑本身就是一个保存着古老室内装饰的珍宝盒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到集市广场（Kauppatori）选一张面向港口的长椅坐下，啃一个从市场买的传统“卡累利阿馅饼”，看海鸥盘旋，目光尽头就是那艘黑色的“Jylhä”号炮艇。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花一个小时登上炮艇或在海事博物馆里，触摸冰冷的钢铁，阅读那些普通市民变成士兵的惊人故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在夕阳西下前，绕到科科拉石头教堂的背面，从这里回望内鲁斯坦，连绵的木屋顶在暖光中如同一条宁静的、彩色的河流。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐后（夏季的黄昏很长），再次踱回几乎无人的内鲁斯坦街区，聆听自己的脚步声，感受数百年的时光在静谧的夜色中沉降。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`“山墙韵律”长街景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，站在内鲁斯坦任何一条东西向街道的尽头，用长焦镜头压缩透视，捕捉一排排彩色山墙形成的重复、渐变的韵律之美，柔和的侧光会让木头的纹理和色彩饱和到极致。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`后院木栈道框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`午后，寻找一条有纵深感的架高木栈道，低角度拍摄，让木质的栈道栏杆形成自然的引导线，框出院落深处被花草包围的另一栋小屋，营造出“庭院深深”的静谧感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`炮艇与木屋的对话`}</h4>
                  <p className="text-sm text-gray-700">{`从港口区，用广角镜头将前景锈迹斑斑的“Jylhä”号炮艇冰冷坚硬的钢铁船体，与背景远处那些温暖柔和的彩色木屋屋顶一同纳入画面，形成历史与生活、战争与和平的强烈视觉对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`小巷光影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗日子的正午，阳光会直射入狭窄的小巷，在鹅卵石地面和木墙投下锐利的光影分割，寻找一道有意思的门或窗的影子，拍摄极简的光影构图，凸显建筑的几何美感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`集市广场的生活气息`}</h4>
                  <p className="text-sm text-gray-700">{`上午市场活跃时，以古老的称重小亭或色彩鲜艳的水果摊为前景，背景是市政厅古典建筑，捕捉当地人采购聊天的生动场景，注意使用高速快门凝固动态。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`芬兰人极度重视隐私，拍摄居民或他们的住宅内部（即使窗户开着）是非常不礼貌的行为，请始终将镜头对准建筑和公共空间。夏季的“午夜阳光”时节（约5月中至7月底），晚上十点后的光线金黄柔和，是拍摄空无一人的魔幻街景的绝佳时机，但请注意保持安静。无人机飞行在居民区上空受到严格限制，飞行前务必查阅当地法规并远离私人领空。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史中心公寓`}</h4>
                  <p className="text-sm text-blue-800">{`租住一栋经过现代化改造的内鲁斯坦老木屋顶层公寓，踩着吱呀作响的木头楼梯上楼，在拥有斜屋顶老虎窗的厨房里煮咖啡，真正体验“住在历史里”的滋味。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计师精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`选择位于老城边缘由旧仓库改造的精品酒店，房间是典型的斯堪的纳维亚简约风，巨大的窗户正对着成片的木屋屋顶，在极致的舒适中欣赏传统美景。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`海滨桑拿小屋`}</h4>
                  <p className="text-sm text-yellow-800">{`在距离老城几公里外的宁静海岸线旁，入住一间带有私人湖畔桑拿房的传统红色小木屋（Mökki），夜晚蒸完桑拿跳进清凉的湖水，仰望可能出现的北极光，体验最地道的芬兰“疗愈”。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`庄园酒店体验`}</h4>
                  <p className="text-sm text-purple-800">{`驱车短程前往郊外一座19世纪的庄园宅邸改造的酒店，住在宽敞的历史房间，在广阔的森林和田野间散步，享受包含当地食材的丰盛早餐，感受芬兰乡村贵族昔日的悠闲。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（尤其是七月）是科科拉的旺季，内鲁斯坦附近的特色住宿非常抢手，务必提前至少2-3个月预订。如果选择老木屋公寓，请注意隔音可能相对现代酒店较差，但这份“历史的声响”正是体验的一部分。科科拉治安极好，夜晚独自在老城区行走也完全安全，可以尽情享受北欧夏夜漫长的宁静。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开科科拉好些天了，但闭上眼，指尖仿佛还能触摸到那些木屋外墙的纹理，凉凉的，有点粗糙，却又异常扎实。这个地方教会我的，是一种关于“延续”的温柔力量。它不像那些宏大辉煌的宫殿，用震撼让你瞬间失语；它更像一位安静的长者，握着你的手，带你走过一条长长的、有阳光也有阴影的回廊，把故事絮絮地讲给你听。故事里有财富与野心，有烈火与灰烬，有战争的恐惧和普通人的勇气，但最终，所有的惊涛骇浪都沉淀为门廊下一盆盛开的天空葵，后院晾衣绳上飘扬的衬衫，和下午四点飘出的咖啡香。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求速度、崇拜崭新、热衷于制造爆点的世界里，科科拉的存在就像一个沉稳的深呼吸。它提醒我们，最美的东西不一定来自毁灭后的重建，而可能源于小心翼翼的守护和日复一日的擦拭。它不是被冻结在过去的标本，而是让过去优雅地活在当下的范本。每一栋被精心维护的木屋，都是一个家庭对历史的承诺，对平凡的珍重。所以，来这里，不仅仅是为了看“北欧保存最完好的木屋群”这个名号，更是为了感受一种生活方式的可能性——一种与时间和解、与记忆共处、在历史的基座上安然建设当下生活的智慧。对于每一位厌倦了浮光掠影、渴望在旅途中找到内心安宁的深度旅者来说，科科拉都是一剂必不可少的解药，它值得你穿越森林与湖泊，专程前来，只为赴这场与时光的、静静的约会。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kemi-snowcastle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    凯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">凯米雪城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kemi SnowCastle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bengtskar-lighthouse" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    本
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">本特谢尔灯塔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bengtskär Lighthouse</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/naantali-finland-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    楠
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">楠塔利（芬兰总统夏宫及木屋老城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Naantali</p>
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
