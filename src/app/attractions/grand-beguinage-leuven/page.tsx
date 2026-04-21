import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '鲁汶大贝居安会院 Grand Beguinage of Leuven｜穿越回中世纪的神秘女性社区 - 最佳欧洲景点',
  description: '想象一下，你刚从鲁汶火车站那熙熙攘攘的学生人潮中挤出来，沿着主街走了不到十分钟，拐进一条不起眼的小巷。突然，所有的现代喧嚣像被一道无形的墙隔绝在身后。你脚下变成了被岁月打磨得温润光滑的卵石路，耳边是潺潺的流水声——一条名叫“戴尔”的小溪蜿蜒着穿过了拱桥。抬起头，目光所及是无穷无尽的、温暖而沉静的深红...',
}

export default function GrandBeguinageLeuvenPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '比利时', href: '/destinations/belgium' },
            { label: '鲁汶大贝居安会院', href: '/attractions/grand-beguinage-leuven' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`鲁汶大贝居安会院・Grand Beguinage of Leuven・比利时・鲁汶`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下，你刚从鲁汶火车站那熙熙攘攘的学生人潮中挤出来，沿着主街走了不到十分钟，拐进一条不起眼的小巷。突然，所有的现代喧嚣像被一道无形的墙隔绝在身后。你脚下变成了被岁月打磨得温润光滑的卵石路，耳边是潺潺的流水声——一条名叫“戴尔”的小溪蜿蜒着穿过了拱桥。抬起头，目光所及是无穷无尽的、温暖而沉静的深红色。那不是一两栋建筑，而是整整一个完整的世界：数十座尖顶山墙的房屋肩并肩站立，围着小小的庭院和广场，教堂的钟楼谦逊地探出头来。空气中有一股潮湿的苔藓味、老木头味，还有从某扇半开的窗户里飘出的、咖啡混合着旧书页的香气。时间，在这里仿佛被溪水浸透，缓慢地流淌着。
这里就是大贝居安会院，但它不是一个博物馆，也不是一个纯粹的景点。直到今天，它依然“活着”。那些有着白色窗棂的小楼里，住着鲁汶大学的教授、访问学者和幸运的学生。你会看到门前的自行车篮里装着新鲜的面包，窗台上摆着开花的盆栽，偶尔有抱着书本的人轻声交谈着从你身边走过。这种奇妙的融合感是最打动人的：一个源于13世纪、为寻求独立生活的女性而建的隐秘社区，在21世纪，成为了知识精英的栖息地。历史没有在这里凝固成标本，而是像藤蔓一样，自然地攀爬到了现代生活的墙上。
漫步其中，最大的感受是“宁静的秩序”。所有的房屋都用同一种红砖建成，风格统一得令人惊叹，但又通过山墙的形状、门楣的雕刻、台阶的高低展现出微妙的个性。你会不自觉地压低声音，脚步放慢，生怕惊扰了这份持续了数百年的沉思氛围。阳光穿过高高的榆树，在红砖墙上投下晃动的光斑，你能清晰地听到自己的脚步声在墙壁间轻轻回响。这里没有商店，没有咖啡馆（除了偶尔一两家低调的），它的存在本身就像是对外部世界浮躁节奏的一种温柔抵抗。
最核心的魅力，或许就在于这种“抽离感”。仅仅一墙之隔，外面是喝着啤酒、高谈阔论的年轻大学生，是热闹的市集和电车铃声。而里面，是一个自成体系的宇宙，一个关于信仰、独立、社群与学术的沉静故事。你不是在参观一个死去的遗迹，而是在体验一种依然在呼吸的、古老而优雅的生活方式。每一个转角，每一扇门，似乎都在低声诉说着那些不被婚姻和修道院束缚的中世纪女性，她们如何在这里读书、劳作、祈祷，建立起一个属于自己的、小而完整的世界。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下，你刚从鲁汶火车站那熙熙攘攘的学生人潮中挤出来，沿着主街走了不到十分钟，拐进一条不起眼的小巷。突然，所有的现代喧嚣像被一道无形的墙隔绝在身后。你脚下变成了被岁月打磨得温润光滑的卵石路，耳边是潺潺的流水声——一条名叫“戴尔”的小溪蜿蜒着穿过了拱桥。抬起头，目光所及是无穷无尽的、温暖而沉静的深红色。那不是一两栋建筑，而是整整一个完整的世界：数十座尖顶山墙的房屋肩并肩站立，围着小小的庭院和广场，教堂的钟楼谦逊地探出头来。空气中有一股潮湿的苔藓味、老木头味，还有从某扇半开的窗户里飘出的、咖啡混合着旧书页的香气。时间，在这里仿佛被溪水浸透，缓慢地流淌着。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里就是大贝居安会院，但它不是一个博物馆，也不是一个纯粹的景点。直到今天，它依然“活着”。那些有着白色窗棂的小楼里，住着鲁汶大学的教授、访问学者和幸运的学生。你会看到门前的自行车篮里装着新鲜的面包，窗台上摆着开花的盆栽，偶尔有抱着书本的人轻声交谈着从你身边走过。这种奇妙的融合感是最打动人的：一个源于13世纪、为寻求独立生活的女性而建的隐秘社区，在21世纪，成为了知识精英的栖息地。历史没有在这里凝固成标本，而是像藤蔓一样，自然地攀爬到了现代生活的墙上。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`漫步其中，最大的感受是“宁静的秩序”。所有的房屋都用同一种红砖建成，风格统一得令人惊叹，但又通过山墙的形状、门楣的雕刻、台阶的高低展现出微妙的个性。你会不自觉地压低声音，脚步放慢，生怕惊扰了这份持续了数百年的沉思氛围。阳光穿过高高的榆树，在红砖墙上投下晃动的光斑，你能清晰地听到自己的脚步声在墙壁间轻轻回响。这里没有商店，没有咖啡馆（除了偶尔一两家低调的），它的存在本身就像是对外部世界浮躁节奏的一种温柔抵抗。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最核心的魅力，或许就在于这种“抽离感”。仅仅一墙之隔，外面是喝着啤酒、高谈阔论的年轻大学生，是热闹的市集和电车铃声。而里面，是一个自成体系的宇宙，一个关于信仰、独立、社群与学术的沉静故事。你不是在参观一个死去的遗迹，而是在体验一种依然在呼吸的、古老而优雅的生活方式。每一个转角，每一扇门，似乎都在低声诉说着那些不被婚姻和修道院束缚的中世纪女性，她们如何在这里读书、劳作、祈祷，建立起一个属于自己的、小而完整的世界。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`鲁汶大贝居安会院`} />
                <InfoRow label="英文名称" value={`Grand Beguinage of Leuven`} />
                <InfoRow label="正式名称" value={`Groot Begijnhof van Leuven`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`鲁汶`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`欧洲现存最完整、规模最大的贝居安会院之一，是中世纪西欧独特的女性宗教生活运动的活化石。`} />
                <InfoRow label="建筑特色" value={`一个完全由红砖砌成的“城中城”，拥有狭窄的街道、宁静的广场、小桥流水和近百座风格统一的房屋与教堂。`} />
                <InfoRow label="建筑风格" value={`以南荷兰晚期哥特式和文艺复兴风格为主，砖结构建筑群呈现出惊人的和谐与统一。`} />
                <InfoRow label="文化价值" value={`它见证了中世纪妇女在宗教与社会框架外寻求精神独立与社群生活的非凡历史，如今作为鲁汶大学校区，实现了历史遗产的活化传承。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`户外区域全天24小时开放。建筑内部大多为私人住宅或大学物业，不向公众开放内部参观，但可自由漫步整个社区街道。信息中心（位于Sint-Jan de Doperkerk教堂内）开放时间通常为周末下午1点至5点，或需预约，建议行前查询鲁汶旅游官网确认。`} />
              <InfoRow label="门票价格" value={`免费。整个贝居安会院社区作为公共步行区，无需门票即可进入探索。`} />
              <InfoRow label="地址" value={`Groot Begijnhof， 3000 Leuven， Belgium`} />
              <InfoRow label="交通方式" value={`从布鲁塞尔国际机场出发，最便捷的方式是乘坐火车。在机场火车站乘坐前往鲁汶方向的列车，车程约15-20分钟，班次频繁（约每小时4-6班）。抵达鲁汶中央火车站后，步行即可到达。从火车站主出口出来，沿着Bondgenotenlaan大道直行约10分钟，穿过戴尔河上的小桥，拐入一条安静的小巷，便会看到那片与世隔绝的红砖建筑群入口。全程步行轻松愉快，是融入这座大学城节奏的最佳开始。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲明白贝居安会院的故事，我们得先把时钟拨回到12、13世纪的西欧。那是一个十字军东征、城市兴起、宗教热情空前高涨的时代。但同时，也有一个现实问题：战争和种种原因导致女性数量相对过剩，并不是所有女性都能或愿意进入需要发终身誓愿的传统修道院。于是一种全新的、更灵活的女性宗教生活形式应运而生，这就是“贝居安运动”。这些女性被称为“贝居安女”，她们不发终身誓愿（可以保留财产，也可以随时离开结婚），过着一种半世俗、半宗教的社群生活，共同祈祷，也从事纺织、医护、教育等劳动来养活自己。鲁汶的贝居安会院，就在这样的土壤中萌芽了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`关于它的确切起源已模糊在历史尘埃里，但最早的文字记录可以追溯到1232年。最初，这些虔诚的女性可能分散居住在城里，但随着社区壮大，她们需要一处更安全、更独立的领地。到了13世纪末，在戴尔河畔的这片沼泽地上，一个专属的社区开始成形。你可以想象，早期的房屋可能是木制的，简单而朴素。社区的繁荣离不开当地贵族和市民的支持，他们捐赠土地和钱财，认为支持这些虔诚女性的劳动与祈祷，能为自己的灵魂带来救赎。会院就像一个城中之城，有自己的教堂、医院、工坊，甚至农场，形成了一个高度自给自足的女性王国。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的黄金时代在16、17世纪到来。今天的我们看到的那些令人惊叹的、统一和谐的红砖建筑群，主要就建于这个时期。1560年的一场大火摧毁了大部分木结构房屋，重建时，采用了当时最流行的南荷兰晚期哥特式砖石风格。重建并非杂乱无章，而是在一个清晰的总体规划下进行的：统一的建筑材料（红砖）、统一的建筑语言（阶梯式山墙）、围绕庭院和教堂构建的社区布局。这使它不再是简单的房屋集合，而是一件完整的建筑艺术品。教堂、庭院、桥梁、街道，共同营造出一种乌托邦式的宁静与秩序，象征着她们精神世界的和谐统一。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的浪潮总是起伏不定。18世纪末，法国大革命的风暴席卷了低地国家。1795年，占领此地的法国当局视一切宗教机构为旧秩序的象征，贝居安会院被没收、解散。那些红砖房屋被出售给私人，贝居安女们流散四方。此后近两百年，这里虽然建筑犹存，但灵魂已逝，逐渐沦为一个破败的工人住宅区，昔日的荣光被灰尘和遗忘所覆盖。眼看这片无价的遗产就要在时光中颓圮，一个关键的转折点在20世纪60年代出现了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`拯救它的是鲁汶大学。面对校园空间不足的问题，大学极具远见地看中了这片位于市中心却又与世隔绝的完整历史街区。从1962年开始，大学启动了一项宏大而精细的修复工程。这不是简单的翻新，而是一次“活化再生”。工程师和建筑师们小心翼翼地修复每一栋房屋的结构和外观，同时将内部现代化，改造为适合居住和学习的空间。1970年，第一批学生入住。如今，这里是鲁汶大学最负盛名的宿舍和学术中心之一，住着数百名学生、研究员和教授。一个为中世纪独立女性建造的避难所，在数百年后，成为了现代知识女性的家园与摇篮，这不能不说是一个充满诗意的历史轮回。1998年，联合国教科文组织将包括鲁汶在内的弗兰德地区13处贝居安会院列入世界遗产名录，正式肯定了它超越国界的普世文化价值。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`游览大贝居安会院的精髓在于“慢”和“静”。建议你在一个晴朗的上午或午后抵达，避开周末的午后（可能会有稍多的访客）。整体游览不需要匆忙，预留至少2到3小时来漫步和感受。最佳的节奏是放任自己迷路。这里没有必看的“展厅”，整个社区本身就是展品。从主入口进入后，可以先沿着主水道漫步，建立一个整体印象，然后就像水滴渗入砖缝一样，随意拐进任何一条吸引你的小巷或庭院。重点不在于覆盖每一个角落，而在于沉浸在那份穿越时空的宁静氛围中。傍晚时分，当夕阳为所有红砖镀上一层金红色，光影变得极长，是感受其魔法氛围的黄金时刻。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`请务必保持安静，尊重这里是居民区，避免喧哗，更不要试图进入标有私人住宅标志的房屋内部。
穿着舒适的步行鞋至关重要，因为古老的卵石路虽然美丽但对高跟鞋很不友好。
可以带一瓶水，社区内没有商业设施，这份不便利正是它保持纯粹魅力的代价。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从带有拱门的主入口踏入，让眼睛先适应那片瞬间包裹你的、由无尽红砖和卵石路构成的静谧世界。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着戴尔河畔的主路慢慢走，倾听流水声，观察两岸房屋在清澈水中的完美倒影，这是会院的动脉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到并穿过那座最著名的、有着美丽曲线的圣约翰洗礼教堂，感受从昏暗教堂内部走向后方阳光明媚庭院的那种戏剧性空间转换。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`随意选择一个不起眼的拱门或小巷拐进去，探索那些被命名为“爱之庭院”、“和平庭院”的小广场，你会发现每个庭院都有独特的性格和角落。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到那面爬满茂密常春藤的著名山墙，看着阳光如何在不同质感的叶子和红砖上跳舞，这是会院里最上镜的角落之一。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在社区中央最大的广场稍作停留，坐在长椅上，观察骑着自行车穿梭的学生和居民，体会历史与当下生活的无缝交融。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果信息中心开放，进去看看那里的历史展览和模型，它能帮你将眼前所见与漫长的历史叙事连接起来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从另一个不那么起眼的小出口离开，完成一次完整的循环，体验那种“从现实走入梦境，再从梦境回到现实”的奇妙抽离感。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`戴尔河拱桥倒影`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚光线柔和时，站在任何一座小桥上，放低机位拍摄河水中红砖房屋与绿树的清晰倒影，对称构图会让画面充满宁静的诗意。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣约翰教堂门廊框架`}</h4>
                  <p className="text-sm text-gray-700">{`站在教堂内部，透过厚重的木门框向外拍摄庭院景象，利用门框形成自然的画框，将庭院、人物和建筑层次感浓缩在一张照片里。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“爱之庭院”长廊透视`}</h4>
                  <p className="text-sm text-gray-700">{`走进任何一个带拱廊的庭院，使用长廊的纵深感构图，让拱门形成富有节奏的重复引导线，尽头的光亮处是绝佳的视觉焦点。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`爬满常春藤的山墙特写`}</h4>
                  <p className="text-sm text-gray-700">{`下午的侧光能完美勾勒出藤蔓的纹理和砖块的质感，靠近拍摄，用大光圈虚化部分前景，营造出细节丰富又朦胧梦幻的效果。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`社区高处俯瞰点`}</h4>
                  <p className="text-sm text-gray-700">{`寻找社区内少数有几级台阶的小坡或某座建筑的二层开放走廊（如果允许），可以获得一个稍高的视角，拍摄红砖屋顶绵延如波浪的韵律之美。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用长焦镜头可以压缩空间，捕捉到远处窗户、门廊的生动细节，而广角镜头则适合在狭窄街道中捕捉建筑的全貌和纵深感。请绝对避免使用无人机，这是对居民隐私的严重侵犯，也是被严格禁止的。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济实用`}</h4>
                  <p className="text-sm text-blue-800">{`预订鲁汶市中心距离会院步行十分钟范围内的舒适民宿或经济型酒店，既能方便夜晚探索会院附近静谧的街道，又便于白天感受大学城的活力。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`沉浸体验`}</h4>
                  <p className="text-sm text-green-800">{`极少数由会院内历史房屋改造的私人短租公寓（需提前很久锁定），让你有机会真正“住进”世界遗产里，清晨和傍晚独享无人打扰的魔法时刻。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计酒店之选`}</h4>
                  <p className="text-sm text-yellow-800">{`选择坐落在鲁汶老城、由历史建筑改造的精品设计酒店，它们通常完美融合了古典外观与现代舒适，是体验这座城市新旧交融魅力的上佳选择。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`学术氛围`}</h4>
                  <p className="text-sm text-purple-800">{`考虑鲁汶大学在学期外可能开放的部分国际学者宿舍，虽然设施简单，但能让你完全沉浸在这座世界顶尖大学城的独特学术氛围中。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`会院内部住宿资源极其稀缺且主要服务于大学社群，对外预订难度大。更现实的策略是住在会院门口几步之遥的鲁汶老城，同样能享受夜晚和清晨的专属宁静。鲁汶整体治安非常好，但老城石板路拖行李略有不便，建议选择轻便行李或确认酒店提供接送协助。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开大贝居安会院，重新汇入鲁汶街头喝着啤酒的年轻人群中，那种感觉非常奇特。就好像你的口袋里偷偷藏了一块来自另一个时空的温润石头，指尖还能感受到它冰凉而坚实的触感。这个地方教会你的，不是关于某个国王的丰功伟绩，也不是某场战役的惨烈细节，而是一种更为稀有的东西：一种关于“另一种可能”的持久证明。它证明了一群中世纪女性，如何在坚固的宗教与社会结构中，为自己开辟出了一条既虔诚又独立、既社群化又保有个人空间的优雅路径。那些红砖墙围起的，不仅仅是一个物理空间，更是一种精神上的自主权。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、充斥着噪音和碎片信息的时代，大贝居安会院的存在就像一剂温柔的解毒剂。它提醒我们，宁静本身就是一种力量，秩序可以带来美感，而社群与沉思的生活从未过时。它没有成为博物馆里被玻璃罩起来的展品，而是继续呼吸、继续被使用，这种“活着的遗产”的状态，让它所有的故事都充满了温度。每一位热爱深度游的旅人都应该来这里，不是为了打卡又一个世界遗产，而是为了体验一次精神的“深呼吸”。在这里走一走，坐一坐，让自己被那份穿越了八百年的沉静所浸润。你会发现，离开时带走的，不仅是相机里的红砖照片，更是一种内心的、久违的平整与安宁。这或许就是它留给现代人最珍贵的礼物。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/citadelle-de-namur" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    那
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">那慕尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Citadelle de Namur</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/arlon-roman-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔隆古罗马遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Arlon Roman Ruins</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/belfry-of-mons-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蒙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蒙斯钟楼及老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Belfry of Mons and the Old Town</p>
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
