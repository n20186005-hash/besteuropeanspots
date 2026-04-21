import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '艾诺阿旅游攻略：法国纯正巴斯克村落，红白木屋朝圣之路深度游指南',
  description: '探索法国巴斯克地区明珠艾诺阿（Ainhoa）。这份深度游攻略带你漫步朝圣之路，解密红白相间木骨架房屋，并提供一日游路线、避坑指南与美食住宿推荐。',
}

export default function AinhoaBasqueVillagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/europe' },
            { label: '大西洋比利牛斯省', href: '/destinations/europe' },
            { label: '艾诺阿', href: '/attractions/ainhoa-basque-village' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`艾诺阿・Ainhoa・法国・大西洋比利牛斯省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你厌倦了人挤人的热门小镇，正在寻找一份能真正触摸到土地灵魂的**旅游攻略**，那么，请跟我把地图翻到法国西南角，比利牛斯山脚下。这里藏着一个名叫艾诺阿（Ainhoa）的村庄，它被誉为“法国最纯正的巴斯克村落之一”。想象一下：一条宁静的主街，两侧是如同从童话里搬出来的、整齐划一的长排房屋，木头骨架是深沉的赭红色，墙体被刷得雪白，在阳光下闪闪发光。这不仅仅是一个“打卡”点，它本身就是活着的历史，是通往圣地亚哥朝圣之路（法国线）上的一个重要驿站。今天这份**艾诺阿私藏旅游攻略**，就带你躲开人潮，像个本地人一样，用双脚丈量这条石板路，用眼睛收藏每一帧红与白的交响，感受巴斯克文化那古老而强劲的心跳。作为你的专属向导，这份**自由行指南**请收好，我们出发吧。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友，如果你厌倦了人挤人的热门小镇，正在寻找一份能真正触摸到土地灵魂的<strong>旅游攻略</strong>，那么，请跟我把地图翻到法国西南角，比利牛斯山脚下。这里藏着一个名叫艾诺阿（Ainhoa）的村庄，它被誉为“法国最纯正的巴斯克村落之一”。想象一下：一条宁静的主街，两侧是如同从童话里搬出来的、整齐划一的长排房屋，木头骨架是深沉的赭红色，墙体被刷得雪白，在阳光下闪闪发光。这不仅仅是一个“打卡”点，它本身就是活着的历史，是通往圣地亚哥朝圣之路（法国线）上的一个重要驿站。今天这份<strong>艾诺阿私藏旅游攻略</strong>，就带你躲开人潮，像个本地人一样，用双脚丈量这条石板路，用眼睛收藏每一帧红与白的交响，感受巴斯克文化那古老而强劲的心跳。作为你的专属向导，这份<strong>自由行指南</strong>请收好，我们出发吧。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`艾诺阿`} />
                <InfoRow label="英文名称" value={`Ainhoa`} />
                <InfoRow label="正式名称" value={`Ainhoa`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`大西洋比利牛斯省`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`艾诺阿的历史，几乎与那条伟大的“圣地亚哥-德孔波斯特拉朝圣之路”紧密交织在一起。它的诞生并非偶然，大约在13世纪，为了给翻越险峻的比利牛斯山前后、疲惫不堪的朝圣者提供一个歇脚、补给和获得精神慰藉的驿站，艾诺阿应运而生。它位于两条重要朝圣路线的交汇区域，这条穿村而过的“主街”，其实就是古老的朝圣之路本身。村庄最初围绕着教堂和客栈发展起来。在中世纪鼎盛时期，这里熙熙攘攘，充满了不同语言、怀着共同信仰的旅行者。这种“驿站”身份，深刻地塑造了艾诺阿的格局和精神——它天生具有开放和接纳的胸怀，同时又必须在动荡的历史中（如边境冲突、宗教战争）努力守护自身的巴斯克特性与宁静。因此，它的存在远远超出一个普通村落，它是欧洲中世纪虔诚与移动文化的活化石，是那条改变了欧洲大陆文化地理的精神之路上一颗持续跳动的小心脏。走在街上，你踩过的每一块光滑的石板，都可能被数百年前无数朝圣者的脚步磨亮。`} />
                <InfoRow label="建筑特色" value={`艾诺阿的建筑是一场极度和谐、却又充满生命力的视觉盛宴。最标志性的，便是沿街**一字排开的巴斯克传统木骨架房屋**。它们像一队穿着统一制服又各有性格的士兵。房屋的骨架由粗壮、坚实的深色木材（通常是栗木或橡木）构成，这些木材被涂成浓郁的赭红色或棕红色，在岁月洗礼后呈现出沉稳如红酒般的色泽。骨架之间，填充着石块或砖块，然后被厚厚地粉刷上**无比纯净的白色石灰**。这种红与白的对比，在比利牛斯山清澈的蓝天下，鲜明夺目到令人过目不忘。仔细观察，你会发现每家每户的木质结构图案都不尽相同，横梁、斜撑构成了近乎几何抽象画的韵律。窗户通常是深绿色的百叶窗，为红白主调点缀上一丝生机。许多房屋的山墙顶部，会有一个小小的十字架或巴斯克十字（Lauburu）装饰。房屋的门楣上，常常刻有建造日期和屋主的名字，有时还会有一句简短的格言。这些房子不仅好看，更无比实用：宽大的斜屋顶是为了应对当地丰沛的雨水，底层通常用作车库或曾经的手工作坊，生活区则在上层。它们整齐划一又细节纷呈，构成了艾诺阿独一无二、不可复制的天际线。`} />
                <InfoRow label="建筑风格" value={`这里的建筑风格可以明确地定义为 **“巴斯克民居风格”** ，它是功能性、地域性与审美追求的完美结合，与我们在法国其他地方常见的哥特式或巴洛克式宏伟建筑截然不同。它不那么关乎宗教神权或贵族炫富，而完全服务于当地牧民、农民和商人的日常生活与坚韧精神。其核心特点通俗来说就是：**极致的整洁、坚固与色彩象征**。整齐划一的布局源于巴斯克人对社区秩序和集体主义的重视；坚固的木石结构是为了抵御山区的风雨和严寒；而那标志性的**红白配色**，则蕴含着深厚的文化密码：白色石灰墙能最大程度反射阳光，让室内明亮，同时也象征着纯洁与光明；而赭红色木框，传统上是用牛血、铁氧化物和动物脂肪混合制成的涂料，不仅防腐耐用，更代表着土地、生命力与巴斯克人豪放的热血。这种风格拒绝多余的雕琢，所有的美都体现在结构的比例、材料的质感与色彩的对比之中。走在艾诺阿，你就像走入了一个巨大的、露天的地方建筑博物馆，每一栋房子都在用最朴素的语言，讲述着巴斯克人与自然共存、与社群共生的哲学。`} />
                <InfoRow label="文化价值" value={`对于当地人而言，艾诺阿不仅仅是一个居住地，它是一个强大的文化符号和身份锚点。在全球化冲击和旅游开发的双重背景下，如此完整保存下来的村落形态，是巴斯克语言、传统和社区凝聚力依然鲜活的有力证明。村庄的维护有着严格的规定，确保任何修缮或新建都遵循传统样式，这使得艾诺阿成为了**巴斯克文化遗产活的教科书**。每年的传统节日、巴斯克回力球（Pelote）比赛、社区聚餐，都以这条主街和教堂广场为中心展开。对于现代社会和外来者，艾诺阿提供了一种“慢生活”和“社区感”的理想范本。它让匆忙的现代人看到，一种基于传统、尊重环境、强调邻里互动的生活方式不仅是可能的，而且是优美且充满韧性的。同时，作为朝圣之路的一部分，它继续为当代的徒步者提供慰藉，延续着千年来的精神接待传统。这个小村庄因此成为一种桥梁，连接着历史与当下，连接着本地人与世界各地的旅人，默默传递着关于坚守、开放与宁静的力量。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 艾诺阿一日游打卡路线攻略：漫步红白童话街，做一日巴斯克人`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行精华漫步路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好了，攻略在手，现在让我们化身一日巴斯克村民，开始这场时光漫步。**早晨（9:00-12:00）**，建议你从村庄的北端入口进入。这时阳光正好斜射在街道上，红木白墙的对比度达到顶峰，是摄影的黄金时间。沿着唯一的**主街（Rue Principale）** 慢慢向南溜达，别急着走完，我们的目的是“浪费”时间。仔细看看每栋房子的门楣雕刻、窗台鲜花和不同的木骨架图案。很快你会看到右手边的**圣母升天教堂（Église Notre-Dame de l'Assomption）**，别错过，进去感受一下内部华丽的镀金巴洛克祭坛与外部朴素风格的撞击。**中午（12:00-14:00）**，就在主街上找一家挂着“表”（“Ostaria”是巴斯克语餐馆的意思）招牌的家庭餐馆。必点一份“巴斯克鸡肉”（Poulet Basquaise）或者当地特色的“伊巴亚依炖菜”（Axoa），就着当地葡萄酒，享受一个悠长的午餐。**下午（14:00-17:00）**，继续向南漫步，走到村庄南端的**墓地**。别觉得诧异，这里的巴斯克墓地堪称一绝，那些雕刻着巴斯克十字（Lauburu）的墓碑整齐排列，面对群山，宁静而富有哲学意味。之后，可以随意钻进某条小巷（“Kalea”），探索村民真正的后花园。最后，在日落前返回主街中段的某家咖啡馆，点一杯咖啡或当地利口酒，看着金光逐渐将红木染成琥珀色，结束完美的一天。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1. 门楣上的时光胶囊：</strong> 请务必弯下腰或抬头，仔细寻找房屋入口上方的石雕或木刻门楣。你会发现诸如“1749, JOANES DE HARIZMENDY”这样的字样。这不仅仅是名字和日期，这是一个家庭的史诗开篇。雕刻的字体可能有些斑驳，但那份郑重其事的骄傲感穿越百年而来。想象一下屋主在房屋落成时，用手抚摸这些字迹的模样，这是巴斯克人对家族、土地和不动产深厚情感的实体化，是比任何官方档案都更生动的历史书页。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>2. 教堂内的“金色火焰”：</strong> 走进朴素的石头教堂内部，你的眼睛会被祭坛那一片耀眼的金色牢牢抓住。这是典型的<strong>巴斯克巴洛克风格</strong>祭坛装饰，繁复到极致的天使、藤蔓、圣像被金箔包裹，在常年点燃的蜡烛映照下，仿佛一团温暖而神圣的火焰在寂静中燃烧。这与教堂外部的简朴形成戏剧性对比，完美体现了巴斯克人内敛的外表下，对信仰和生命所怀有的炽热而丰沛的激情。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>3. 墓地里的生命之舞：</strong> 村庄南端的墓地，是你理解巴斯克生死观的钥匙。墓碑大多为白色，整齐地面向比利牛斯山方向排列。最引人注目的是许多墓碑上都刻有<strong>巴斯克十字（Lauburu）</strong>——一个类似旋转涡纹的符号。它象征着生命、运动与宇宙的四大元素。在这里，死亡不是终点，而是生命另一种形式的循环与舞蹈。整个墓地没有阴森感，只有一种与山川同在的永恒宁静，俯瞰着山下生机勃勃的村庄。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>4. 窗台上的微型花园：</strong> 注意看每一扇窗、每一段矮墙。几乎无一例外，都点缀着盛开的天竺葵、牵牛花或各种香草。这些怒放的红色、粉色花朵，在雪白的墙壁衬托下，像是一颗颗跳动的音符。这不仅仅是装饰，这是巴斯克主妇们对生活的热爱与经营能力的微小展示。这些旺盛的生命力，与房屋坚固的木石结构一起，诉说着这个民族在严酷自然环境中，依然执着地创造美、呵护温柔的生活智慧。" }} />
            </div>
          </Section>

          <Section title={`5. 艾诺阿自由行避坑指南与行前须知：避开人潮，享受纯正巴斯克时光`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1. 时机就是一切：</strong> 艾诺阿很小，一辆旅游大巴就能塞满主街。<strong>最佳游览时间是春季（5-6月）或秋季（9-10月）的工作日早晨</strong>。夏天虽是旺季，但请尽量赶在上午10点前或下午4点后抵达，完美避开大巴旅行团。7-8月下午街上可能非常安静，因为当地人都在午休或室内避暑。冬天很多餐馆和民宿可能歇业，出行前务必确认。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>2. 穿着与装备：</strong> 村庄建在缓坡上，石板路虽然漂亮但可能湿滑不平。<strong>一双绝对舒适防滑的步行鞋是首要装备</strong>，高跟鞋在这里是“自虐神器”。山区天气多变，即便是夏天，也请随身带一件防风外套或薄毛衣。防晒霜和帽子在无遮无挡的主街上也非常必要。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>3. 交通与停车智慧：</strong> <strong>自驾</strong>是最方便的方式。村庄入口有清晰的免费停车场指示牌，请务必<strong>将车停在指定的停车场</strong>，切勿开进村内狭窄的主街。如果想体验朝圣之路，可以从邻近的“Espelette”小镇徒步约1.5小时到达艾诺阿，沿途风光绝美。公共交通班次极少，务必提前查询好大巴时刻表，并做好等待的准备。" }} />
            </div>
          </Section>

          <Section title={`6. 艾诺阿周边住宿与美食攻略：住进巴斯克农庄，尝遍地道风味`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "想沉浸式体验，<strong>强烈建议在村里或附近农庄住一晚</strong>。当一日游的游客散去，艾诺阿才显露出它最本真的宁静。村里有几家由传统房屋改造的精品民宿（“Gîte”或“Chambre d‘hôte”），房间可能有着裸露的红木梁，窗外就是连绵群山。主人通常会奉上地道丰盛的巴斯克早餐，包括自制果酱和奶酪。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>餐饮</strong>是重头戏。主街上的家庭餐馆选择不多，但水准都很“在地”。<strong>餐厅推荐</strong>：可以尝试 <strong>“Hôtel Restaurant Oppoca”</strong> 或 <strong>“Auberge Bakéa”</strong>。除了之前提到的巴斯克鸡肉，一定要点一份 <strong>“巴约讷火腿”（Jambon de Bayonne）</strong> 作为前菜，咸香浓郁。用当地辣椒“埃斯佩莱特椒”（Piment d‘Espelette）调味的菜肴也值得一试。甜点不可错过 <strong>“巴斯克蛋糕”（Gâteau Basque）</strong> ，内馅是香甜的樱桃酱或香草奶油，外壳酥软。配上一杯当地的“伊鲁莱基”（Irouléguy）葡萄酒，完美。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1. 埃斯佩莱特（Espelette）：</strong> 距离艾诺阿仅约10分钟车程。这个小镇以挂满墙壁的<strong>鲜红埃斯佩莱特辣椒</strong>而闻名全球。每年秋季，整个小镇如同被红色点燃，壮观无比。你可以在这里参观辣椒农场，购买各种辣椒制品（从香料到巧克力）。小镇氛围比艾诺阿更热闹一些，有更多餐厅和商店，两者搭配游览，能更全面地感受巴斯克文化的味觉与视觉冲击。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>2. 伊拉蒂森林（Forêt d‘Iraty）：</strong> 如果你有多余一天时间且热爱自然，这是必去之地。这是欧洲最大的山毛榉原始森林之一，从艾诺阿驱车约40分钟可抵达。这里有神秘的徒步小径、广阔的草场和古老的牧羊人石屋。漫步其中，你能感受到比利牛斯山最原始、最苍茫的气息，与艾诺阿的人文精致形成绝妙的互补。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "艾诺阿的灵魂，就在于那红与白的绝对秩序之下，所包裹着的、对生活炽热而坚韧的爱。它告诉你，传统不是束缚，而是让美在时间中沉淀、让社群在风雨中屹立不倒的根。在这里，你找到的不仅是一个拍照的背景板，更是一种关于如何有尊严、有美感、紧密相连地生活的古老答案。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bergheim-alsace-france" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝尔盖姆</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bergheim</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/senanque-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塞
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塞南克修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Abbaye de Sénanque</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/brantome-venice-of-perigord" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩里戈尔的布朗托姆（法国威尼斯）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Brantôme</p>
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
