import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '图雷达城堡 Turaida Castle｜屹立在拉脱维亚“瑞士山谷”深秋红叶中的红砖古堡 - 最佳欧洲景点',
  description: '车子拐过最后一个弯道，当那座红砖城堡从一片燃烧着的深秋枫叶中猛然跃入眼帘时，我忍不住轻轻“啊”了一声。那不是欧洲常见的、灰白色冷峻的石堡，它的砖是温暖的、沉静的陶红色，像一个巨大的、被时间烘焙过的陶罐，稳稳地坐在被当地人称为“瑞士”的Gauja河谷山丘之巅。十月的阳光是斜的、金黄的，穿过层层叠叠的槭...',
}

export default function TuraidaCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '图雷达城堡', href: '/attractions/turaida-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`图雷达城堡・Turaida Castle・拉脱维亚・锡古尔达`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子拐过最后一个弯道，当那座红砖城堡从一片燃烧着的深秋枫叶中猛然跃入眼帘时，我忍不住轻轻“啊”了一声。那不是欧洲常见的、灰白色冷峻的石堡，它的砖是温暖的、沉静的陶红色，像一个巨大的、被时间烘焙过的陶罐，稳稳地坐在被当地人称为“瑞士”的Gauja河谷山丘之巅。十月的阳光是斜的、金黄的，穿过层层叠叠的槭树和橡树，斑驳地洒在城堡的墙面上，那一刻，光影和色彩浓烈得仿佛一幅19世纪的浪漫主义油画。空气里有清冷的、带着泥土和腐烂落叶气息的风，远处河谷传来鸟鸣和隐约的流水声，一切喧嚣都被隔在了山外。
这里不仅仅是游客的目的地，更是拉脱维亚人精神地图上的一个坐标。你会看到本地的一家老小，带着野餐篮，不紧不慢地沿着山坡散步；白发苍苍的老夫妇手牵手，在城堡下的玫瑰园里驻足良久。对他们而言，图雷达不是一段死去的石头记忆，而是一个可以走进的、关于勇气、爱情与牺牲的传说发生地。那个关于“图雷达玫瑰”的凄美故事——一位名叫Maid的少女为保护自己的纯洁而牺牲——已经和这里的每一块砖、每一片叶子长在了一起。
它最打动人的，是一种奇异的“时间层叠感”。你脚下踩着的是13世纪十字军骑士的足迹，手触摸到的红砖可能来自16世纪的扩建，眼睛看到的塔楼轮廓却是20世纪末精心修复的结果。但它没有被做成一个僵硬的标本，风穿过坍塌的拱门发出呜呜的声响，鸟儿在雉堞上筑巢，藤蔓肆意地在残墙上攀爬。历史在这里是呼吸着的，有生命的。当你最终爬上主塔楼，360度的视野豁然开朗，Gauja河像一条碧蓝的丝带在脚下蜿蜒，对岸是同样古老的锡古尔达城堡废墟，漫山遍野的秋色尽收眼底。那一刻你明白了，这座城堡最美的部分，或许正是它作为大自然画布上一个最有力的笔触而存在的。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子拐过最后一个弯道，当那座红砖城堡从一片燃烧着的深秋枫叶中猛然跃入眼帘时，我忍不住轻轻“啊”了一声。那不是欧洲常见的、灰白色冷峻的石堡，它的砖是温暖的、沉静的陶红色，像一个巨大的、被时间烘焙过的陶罐，稳稳地坐在被当地人称为“瑞士”的Gauja河谷山丘之巅。十月的阳光是斜的、金黄的，穿过层层叠叠的槭树和橡树，斑驳地洒在城堡的墙面上，那一刻，光影和色彩浓烈得仿佛一幅19世纪的浪漫主义油画。空气里有清冷的、带着泥土和腐烂落叶气息的风，远处河谷传来鸟鸣和隐约的流水声，一切喧嚣都被隔在了山外。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里不仅仅是游客的目的地，更是拉脱维亚人精神地图上的一个坐标。你会看到本地的一家老小，带着野餐篮，不紧不慢地沿着山坡散步；白发苍苍的老夫妇手牵手，在城堡下的玫瑰园里驻足良久。对他们而言，图雷达不是一段死去的石头记忆，而是一个可以走进的、关于勇气、爱情与牺牲的传说发生地。那个关于“图雷达玫瑰”的凄美故事——一位名叫Maid的少女为保护自己的纯洁而牺牲——已经和这里的每一块砖、每一片叶子长在了一起。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它最打动人的，是一种奇异的“时间层叠感”。你脚下踩着的是13世纪十字军骑士的足迹，手触摸到的红砖可能来自16世纪的扩建，眼睛看到的塔楼轮廓却是20世纪末精心修复的结果。但它没有被做成一个僵硬的标本，风穿过坍塌的拱门发出呜呜的声响，鸟儿在雉堞上筑巢，藤蔓肆意地在残墙上攀爬。历史在这里是呼吸着的，有生命的。当你最终爬上主塔楼，360度的视野豁然开朗，Gauja河像一条碧蓝的丝带在脚下蜿蜒，对岸是同样古老的锡古尔达城堡废墟，漫山遍野的秋色尽收眼底。那一刻你明白了，这座城堡最美的部分，或许正是它作为大自然画布上一个最有力的笔触而存在的。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`图雷达城堡`} />
                <InfoRow label="英文名称" value={`Turaida Castle`} />
                <InfoRow label="正式名称" value={`Turaida Castle`} />
                <InfoRow label="国家" value={`拉脱维亚`} />
                <InfoRow label="城市" value={`锡古尔达`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`中世纪利沃尼亚十字军东征的产物，是Gauja河谷（利沃尼亚“瑞士”）防御体系的关键一环，见证了拉脱维亚民族意识的觉醒。`} />
                <InfoRow label="建筑特色" value={`由红砖砌筑的防御体系与高耸的主楼塔楼是其标志，建筑群依山势而建，与周围的森林和河谷完美融合。`} />
                <InfoRow label="建筑风格" value={`以晚期罗马式风格为基础，融合了哥特式元素和后来的重建风格。`} />
                <InfoRow label="文化价值" value={`拉脱维亚民族历史和浪漫主义精神的物质承载与象征，尤其是与“图雷达玫瑰”传说紧密相连，成为国家文化认同的重要部分。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`博物馆区（含城堡主楼）开放时间：五月至九月，每天 10:00 - 18:00；十月至次年四月，周二至周日 10:00 - 17:00，周一闭馆。城堡遗迹花园及周边保护区全年全天开放。圣诞节、元旦及拉脱维亚独立日（11月18日）可能有特殊安排，建议行前官网确认。`} />
              <InfoRow label="门票价格" value={`成人票：6欧元；学生及长者票：4欧元；家庭票（2大2小）：12欧元。七岁以下儿童免费。门票包含城堡主楼博物馆、常设展览及教堂入场。仅进入城堡花园及保护区免费。支持现场现金（欧元）或信用卡购票。`} />
              <InfoRow label="地址" value={`Turaidas iela 10, Sigulda, LV-2150, Latvia`} />
              <InfoRow label="交通方式" value={`从拉脱维亚首都里加出发最为便捷。在里加中央火车站购买前往锡古尔达的火车票，车程约1小时，班次频繁，约每30-60分钟一班。抵达锡古尔达站后，出站即可看到清晰的“Turaida”指示牌。最佳方式是步行，这是一段约2.5公里、沿途风景绝佳的徒步路线，沿着Gauja河谷森林小径行走约40分钟即可抵达。你也可以在火车站前乘坐前往“Turaida”方向的本地巴士，约5分钟车程。自驾则导航至上述地址，城堡入口处有付费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`这个故事要从一个充满冲突与征服的时代讲起。13世纪初，利沃尼亚这片土地还笼罩在异教信仰中，来自西方的十字军骑士团带着剑与十字架东进。1214年，为了巩固对Gauja河谷这片战略要地的控制，里加大主教阿尔伯特下令，在被征服的当地利夫族要塞的遗址上，建造一座石质城堡。他们给它起名“Turaida”，在利夫语里意思是“神的花园”。这名字充满了讽刺，因为它的诞生伴随着血腥的征服。在接下来的三百年里，图雷达城堡作为里加大主教辖区最重要的堡垒之一，目睹了无数次主教与骑士团之间的权力纷争，城墙在战火中反复易手，也反复被加固。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡命运的转折点，与一段真假难辨的浪漫传奇交织在一起。传说在1601年，瑞典与波兰军队在此激战，城堡的一位园丁收养了一个在废墟中找到的女婴，取名Maid。她长成了山谷里最美的姑娘，被誉为“图雷达的玫瑰”。后来，一位波兰士兵垂涎她的美貌，设计欺骗，为了不被玷污，Maid谎称要用头巾交换，却在对方靠近时扯下头巾勒颈自尽。这个悲壮的故事，在19世纪拉脱维亚民族浪漫主义思潮中被广泛传颂，Maid成了纯洁、忠诚与民族精神的象征。她长眠于城堡下的小教堂旁，一座朴素的玫瑰雕塑静静诉说。真实的历史或许没有这么戏剧化，但传说赋予了城堡灵魂，让它从冰冷的军事堡垒，变成了一个民族情感可以依附的温暖图腾。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，真实的历史同样残酷。18世纪初，大北方战争的战火席卷此地，城堡在1703年遭遇了毁灭性的大火。屋顶坍塌，内部化为灰烬，昔日坚固的防御体系在火炮面前显得过时。它被遗弃了，在接下来的两个世纪里，红砖墙体在风吹雨打中慢慢坍塌，成为浪漫派画家笔下凄美废墟的原型。直到20世纪50年代，考古学家才开始系统地发掘这片遗址，他们发现了地基、地窖、甚至中世纪的生活用品。基于这些发现，一场雄心勃勃的修复工程在1970年代展开。但修复者没有选择将其恢复成鼎盛时期的模样，那太像迪士尼乐园了。他们采取了“保护性展示”的理念——精心加固了残存的主体结构，重建了最具标志性的主楼和部分城墙，但让许多废墟保持原状。于是，我们今天看到的图雷达，成了一座时间的立体剖面图，既有可登临的完整塔楼，也有供人凭吊的断壁残垣。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天，当你走在城堡的博物馆里，你会看到从利夫族饰品到十字军锁子甲，从古代地图到修复工程的图纸。它平静地讲述着一切：征服、信仰、战争、爱情、毁灭与重生。它不再属于某位大主教或骑士团，它属于每一个在此停下脚步，被它的红色身影所触动的人。从神的花园，到战神堡垒，再到民族精神的玫瑰园，图雷达城堡用八百年的沉默，完成了一次最深刻的转型。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`我强烈建议你将整个下午留给图雷达。最好的抵达时间是午后两三点，这时从锡古尔达镇方向徒步过来，阳光正好洒在城堡的正面。整体游览需要3到4小时的悠闲时光。节奏应该是“先外后内，先低后高，最后沉浸”。先不要急着冲进城堡主体，而是在外围的博物馆和花园里感受它的历史背景与传说氛围，然后进入城堡庭院，循序渐进地探索建筑细节，最后一定要留足时间登上主塔楼，并在日落时分漫步到城堡后的观景台。这样的安排，能让你的体验像一部层次分明的交响乐，从序曲的铺垫，到中间乐章的高潮探索，再到尾声的宁静回响。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双绝对舒适的步行鞋，从锡古尔达车站过来的森林小径和城堡内的石阶都很考验脚力。计划行程时务必为拍照和发呆留出大量冗余时间，这里的每个角落都值得驻足。游览结束后不必急着回锡古尔达镇，可以在城堡出口处的咖啡馆喝杯热饮，或者索性在镇上找家餐厅吃晚饭，秋季的夜晚来得早，小镇的灯光很温馨。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`先在城堡入口旁的Turaida博物馆里花上半小时，看看那些出土的陶罐和古老的版画，让“图雷达玫瑰”的传说在心里埋下种子。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过售票处，别急着上城堡，右转去那片安静的、有着古老橡树和玫瑰丛的传说花园，找到Maid的雕塑，感受故事里的气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从花园的小径绕到城堡的正面，仰望那座完整的红砖主楼和旁边残缺的城墙，感受时间两种截然不同的力量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进城堡内庭，触摸那些厚重而温暖的红砖墙，抬头看四方天空被塔楼切割出的几何形状。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着狭窄陡峭的螺旋石阶，一口气爬上主塔楼的顶层观景台，让Gauja河谷360度的壮丽秋色成为对你的奖赏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从塔楼下来，去探索西侧城墙的废墟部分，沿着城墙走，想象中世纪士兵在此巡逻的视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开城堡主体，沿着山脊往东走，去那个少有人去的观景台，那里能看到城堡侧影与河谷同框的绝美画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山时，绕道去山脚下那座可爱的木结构小教堂，它是城堡区最古老的建筑，里面宁静得能听到自己的心跳。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`Gauja河对岸远眺点`}</h4>
                  <p className="text-sm text-gray-700">{`从锡古尔达城堡废墟一侧，使用长焦镜头，在日落前的一小时拍摄，能将图雷达城堡的红砖主体、背景的层林尽染以及河面的倒影全部纳入画面，色彩和层次感达到极致。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡庭院仰拍主塔楼`}</h4>
                  <p className="text-sm text-gray-700">{`站在内庭中央，午后三点左右的阳光能照亮塔楼一侧，让红砖的纹理和拱券的阴影形成强烈对比，构图时可以将部分残破的拱门作为前景框。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`主塔楼顶层观景台俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`登上塔顶后，不要只拍远景，将镜头垂直向下，对准城堡内庭的几何石板地面和走动的人物，能拍出非常有结构感和故事感的画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`传说花园玫瑰丛与城堡同框`}</h4>
                  <p className="text-sm text-gray-700">{`在Maid雕塑附近，寻找一个角度，让 foreground（前景）是依然在秋季开花的玫瑰或凋零的秋叶，midground（中景）是花园的橡树，background（背景）是城堡塔楼，形成情感与历史的纵深。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`秋季光线柔和的时间非常宝贵，尤其是“黄金时刻”（日落前），务必提前规划好机位。使用偏振镜可以有效消除树叶和砖墙的反光，让秋色和红砖的色彩更加饱和浓郁。在城堡博物馆内部拍摄时，请注意禁用闪光灯的标识，并保持安静。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`锡古尔达镇中心步行距离内的温馨家庭旅馆，主人会为你手绘地图，告诉你只有本地人才知道的观看城堡晨雾的小径。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`住在离城堡仅一公里之遥的森林小屋里，晚上能听见猫头鹰的叫声，清晨推开门就是挂着露珠的蜘蛛网和清新的松木香。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`河对岸山丘上的精品庄园酒店，房间拥有直面图雷达城堡的落地窗，泡在浴缸里就能欣赏古堡与星河的同框夜景。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计感之选`}</h4>
                  <p className="text-sm text-purple-800">{`由老火车站建筑改造的现代设计酒店，融合了工业风和北欧简约美学，是探索完中世纪历史后回到现代的完美切换。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`锡古尔达是拉脱维亚人钟爱的周末度假地，秋季更是旺季，务必提前预订住宿。小镇及周边治安极好，晚上独自散步也很安全。如果选择住在城堡附近的民宿，请准备好享受真正的静谧——晚上除了大自然的声音，几乎万籁俱寂。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开图雷达的时候，我的手机里塞满了照片，但心里更满的是一种沉静的充实感。这座城堡没有维也纳美泉宫的金碧辉煌，也没有巴黎圣母院的摄人气魄，但它有一种更持久、更贴近人心的力量。它就像一位历经沧桑却依旧平和的老者，不急于向你炫耀什么，只是静静地坐在那里，任由藤蔓生长，任由秋叶飘落，将它八百年的故事，化入每一阵吹过河谷的风里。在当今这个追求瞬时刺激、一切都要“快”和“新”的世界里，图雷达提供了一种珍贵的“慢”和“旧”的体验。它让你看到，毁灭之后可以有重生，废墟之上可以开出玫瑰，历史的伤痕最终可以被时间抚平，并转化为一种深沉的美。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了那些被游客挤得水泄不通的“必打卡”景点，渴望一次真正能走进风景、也走进历史的旅行，那么请一定要来拉脱维亚的锡古尔达，来看看深秋红叶里的图雷达城堡。它不仅仅是一个目的地，更是一个提醒：提醒我们放慢脚步，去触摸砖石的温度，去聆听传说的低语，去感受一个民族如何将自己的爱与痛，浇筑在一座红砖城堡之中，让它屹立至今，并在每一个秋天，燃烧成最温暖的颜色。这趟旅程，会成为你记忆里一块沉甸甸的、温暖的红色基石。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/cesis-old-town-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    采
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">采西斯古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cēsis Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rundale-palace" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    伦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">伦达莱宫（波罗的海的凡尔赛宫）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rundāle Palace</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gauja-national-park-latvia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    高
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">高亚国家公园</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gauja National Park</p>
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
