import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '哈滕费尔斯城堡（螺旋阶梯）Hartenfels Castle Torgau｜探访易北河畔的文艺复兴瑰宝与德国最美螺旋楼梯 - 最佳欧洲景点',
  description: '站在易北河岸向上望，哈滕费尔斯城堡不像南德那些童话里的尖塔城堡，它更敦实、更威严，赭石色的墙面被岁月染成温暖的蜜糖色，稳稳地盘踞在山丘上，俯瞰着脚下流淌了千年的河流和老城一片片红瓦屋顶。你的第一印象可能觉得它有点“严肃”，但别急，真正的魔法藏在它的内院里。当你穿过厚重的拱门，踏入那个被高大建筑四面围...',
}

export default function HartenfelsCastleTorgauSpiralStaircasePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '哈滕费尔斯城堡（绝美螺旋阶梯）', href: '/attractions/hartenfels-castle-torgau-spiral-staircase' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`哈滕费尔斯城堡（绝美螺旋阶梯）・Hartenfels Castle (Torgau)・德国・托尔高`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`站在易北河岸向上望，哈滕费尔斯城堡不像南德那些童话里的尖塔城堡，它更敦实、更威严，赭石色的墙面被岁月染成温暖的蜜糖色，稳稳地盘踞在山丘上，俯瞰着脚下流淌了千年的河流和老城一片片红瓦屋顶。你的第一印象可能觉得它有点“严肃”，但别急，真正的魔法藏在它的内院里。当你穿过厚重的拱门，踏入那个被高大建筑四面围合起来的广场时，时间仿佛“嗡”地一声慢了下来。脚下是碎石铺就的地面，阳光把建筑立面上那些精美绝伦的砂岩浮雕——神话人物、繁复徽章、藤蔓花纹——照得轮廓分明，光影在立面上缓缓移动，像在阅读一本立体的石质史书。
空气中飘着淡淡的、凉丝丝的石头气味，混着远处易北河带来的湿润水汽。院子里安静极了，只能听到自己的脚步声和偶尔几声鸟鸣从屋顶掠过。当地人推着自行车穿过，去往城堡另一侧的办公室或博物馆，这里对他们而言，不是遥远的景点，而是日常生活与历史交织的背景板。但所有目光，最终都会被庭院一角那个不可思议的构造所吸引——那就是传说中的“大螺旋梯”。它像一个从地面盘旋生长而出的巨大石质海螺，又像是一件被巨人遗落的精美象牙雕刻，优雅地依附在主建筑的侧面。仅仅是远远看着，你就能感受到一种强烈的召唤。
而当你真正走近，准备踏上那盘旋而上的阶梯时，心跳会不由自主地加快。这不是一个普通的楼梯，这是一件让人屏住呼吸的建筑诗篇。每一步上升，光线和视角都在微妙地变化。石阶被无数双脚打磨得温润光亮，扶手栏杆上的雕花细腻得惊人。最震撼的时刻，是当你走到一半，回头或向上望时，整个螺旋结构呈现出一种近乎失重的、流畅的几何美感。光线从顶部的窗户倾泻而下，在弧形的墙面上舞蹈，那一刻，你触摸的不是石头，而是四百多年前，那位无名建筑师挑战重力与想象力的野心和浪漫。这才是哈滕费尔斯城堡真正打动人心的核心——它将宏大的政治叙事，浓缩成了一个可以亲手触摸、亲身攀爬的、极致的美的体验。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`站在易北河岸向上望，哈滕费尔斯城堡不像南德那些童话里的尖塔城堡，它更敦实、更威严，赭石色的墙面被岁月染成温暖的蜜糖色，稳稳地盘踞在山丘上，俯瞰着脚下流淌了千年的河流和老城一片片红瓦屋顶。你的第一印象可能觉得它有点“严肃”，但别急，真正的魔法藏在它的内院里。当你穿过厚重的拱门，踏入那个被高大建筑四面围合起来的广场时，时间仿佛“嗡”地一声慢了下来。脚下是碎石铺就的地面，阳光把建筑立面上那些精美绝伦的砂岩浮雕——神话人物、繁复徽章、藤蔓花纹——照得轮廓分明，光影在立面上缓缓移动，像在阅读一本立体的石质史书。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`空气中飘着淡淡的、凉丝丝的石头气味，混着远处易北河带来的湿润水汽。院子里安静极了，只能听到自己的脚步声和偶尔几声鸟鸣从屋顶掠过。当地人推着自行车穿过，去往城堡另一侧的办公室或博物馆，这里对他们而言，不是遥远的景点，而是日常生活与历史交织的背景板。但所有目光，最终都会被庭院一角那个不可思议的构造所吸引——那就是传说中的“大螺旋梯”。它像一个从地面盘旋生长而出的巨大石质海螺，又像是一件被巨人遗落的精美象牙雕刻，优雅地依附在主建筑的侧面。仅仅是远远看着，你就能感受到一种强烈的召唤。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而当你真正走近，准备踏上那盘旋而上的阶梯时，心跳会不由自主地加快。这不是一个普通的楼梯，这是一件让人屏住呼吸的建筑诗篇。每一步上升，光线和视角都在微妙地变化。石阶被无数双脚打磨得温润光亮，扶手栏杆上的雕花细腻得惊人。最震撼的时刻，是当你走到一半，回头或向上望时，整个螺旋结构呈现出一种近乎失重的、流畅的几何美感。光线从顶部的窗户倾泻而下，在弧形的墙面上舞蹈，那一刻，你触摸的不是石头，而是四百多年前，那位无名建筑师挑战重力与想象力的野心和浪漫。这才是哈滕费尔斯城堡真正打动人心的核心——它将宏大的政治叙事，浓缩成了一个可以亲手触摸、亲身攀爬的、极致的美的体验。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`哈滕费尔斯城堡（绝美螺旋阶梯）`} />
                <InfoRow label="英文名称" value={`Hartenfels Castle (Torgau)`} />
                <InfoRow label="正式名称" value={`Schloss Hartenfels`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`托尔高`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`萨克森选帝侯在文艺复兴时期的宏伟宫殿，也是德国宗教改革史上东西方教会首次举行联合圣餐仪式的地点。`} />
                <InfoRow label="建筑特色" value={`其核心瑰宝是建于16世纪中期的“大螺旋梯”，一个独立于建筑主体、无中心承重柱的悬空石雕螺旋楼梯，被誉为建筑奇迹。`} />
                <InfoRow label="建筑风格" value={`德国北部文艺复兴建筑的巅峰之作，融合了晚期哥特式的结构技术与文艺复兴的装饰美学。`} />
                <InfoRow label="文化价值" value={`不仅是选帝侯权力的象征，更是见证了宗教改革关键事件、连接中世纪与近代欧洲的政治与宗教中心。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡庭院全年全天开放。城堡建筑内部（包括螺旋阶梯及展览）开放时间：4月至10月，周二至周日，上午10点至下午6点；11月至次年3月，周二至周日，上午10点至下午4点。每周一闭馆（节假日除外）。每年的12月24日、25日、31日及1月1日闭馆。特别展览时间可能调整，建议行前查看官网。`} />
              <InfoRow label="门票价格" value={`进入城堡庭院免费。参观螺旋阶梯（大螺旋梯）及常设历史展览“托尔高——文艺复兴与宗教改革”的联票价格为：成人8欧元，优惠票（学生、残疾人等）6欧元，家庭票（2大+最多4小）18欧元。仅参观庭院及小教堂免费。每月第一个周三为免费开放日。提供德语及英语语音导览，租金3欧元。`} />
              <InfoRow label="地址" value={`Schlossstraße 27, 04860 Torgau, Germany`} />
              <InfoRow label="交通方式" value={`从莱比锡/哈勒机场（LEJ）出发最为便捷：在机场火车站乘坐S5线或区域列车前往莱比锡主火车站，车程约30分钟。从莱比锡主火车站，乘坐前往德累斯顿方向的RE或RB列车，在托尔高火车站下车，车程约50-60分钟，每小时至少有1-2班车。从柏林主火车站出发，有直达托尔高的RE列车，车程约1小时20分钟。从托尔高火车站步行至城堡约15分钟，沿途会穿过迷人的老城区；也可在站前乘坐本地巴士至“Schloss”站。自驾可将车停在城堡旁的付费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`哈滕费尔斯城堡的故事，得从“选帝侯”这三个字说起。在神圣罗马帝国那个诸侯林立的时代，能决定谁当皇帝的七位大贵族里，萨克森选帝侯是举足轻重的一位。而托尔高，早在十五世纪，就成了韦廷家族萨克森系的核心居住地。不过，我们今天看到的这座宏伟宫殿，它的命运和一个名字紧紧相连：萨克森选帝侯弗里德里希三世，人称“智者弗里德里希”。这位选帝侯可不得了，他不仅是政治家，更是艺术与科学的狂热赞助人，是文艺复兴浪潮在德国北部的关键推手。十六世纪初，他决定将祖传的城堡来一次彻底的升级改造，要建一座配得上他地位和品味的、前所未有的文艺复兴宫殿。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，从1515年左右开始，城堡进入了建设的黄金时代。弗里德里希请来了当时最顶尖的建筑师和艺术家，其中最关键的人物，是来自施瓦本的建筑师康拉德·克雷布斯。克雷布斯是个天才，他带来的不仅是南德的建筑理念，更是一种融合的野心。城堡的西部翼楼和小教堂率先建成，但真正让城堡名垂青史的，是那座建于1543-1544年间的“大螺旋梯”。关于它的设计者至今仍有争议，但普遍认为它体现了克雷布斯的巅峰构想。这座楼梯在技术上是个奇迹——它没有中心承重柱，完全依靠悬挑的石阶和精密的力学计算盘旋而上，这在当时是极度大胆的创新。它不仅仅是个通道，更是选帝侯权力与艺术鉴赏力的炫示，每一个来朝的使节和贵族，在攀爬这梦幻阶梯时，都会对主人的实力心生敬畏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，城堡的命运很快被另一场更宏大的历史风暴所席卷——宗教改革。弗里德里希三世正是马丁·路德最重要的保护人。路德曾多次到访托尔高，城堡的小教堂里至今回荡着新教最初的声音。而历史性的一刻发生在1544年10月5日，就在这座城堡的小教堂里，马丁·路德和来自瑞士的宗教改革家乌尔里希·茨温利派的代表，举行了历史上第一次也是唯一一次新教各派之间的联合圣餐仪式。尽管这次尝试未能弥合教义分歧，但哈滕费尔斯城堡就此被永远镌刻在了欧洲宗教史的坐标上。它从一个政治权力的堡垒，变成了一个新教思想交流与碰撞的中心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`辉煌未能一直持续。三十年代战争、七年战争……城堡在战火中屡遭破坏，渐渐失去了选帝侯居所的功能，转而成为军营、法院和监狱。它厚重的墙壁见证了权力更迭，也承载了普通人的悲欢。进入二十世纪，二战的炮火再次波及这里。更具标志性的是，1945年4月25日，美苏两军在托尔高附近的易北河上会师，而哈滕费尔斯城堡所在的制高点，成为了这一历史事件的背景板之一。战后，托尔高被划入东德，城堡在社会主义时期得到了艰难的维护与部分修复，成为博物馆和地方文化机构。两德统一后，它才迎来了系统性的、科学的全面修复，那些被烟尘遮盖了数百年的文艺复兴浮雕和壁画，终于重见天日。今天的哈滕费尔斯城堡，就像一位历经沧桑的老者，它的每一道皱纹里都藏着故事，而它最引以为傲的那颗“文艺复兴之心”——螺旋阶梯，在经过精心修复后，依然以令人惊叹的美丽，向每一个来访者述说着那个敢于想象和创造的伟大时代。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要沉浸式体验哈滕费尔斯城堡，建议安排大半天时间（4-5小时）。最佳抵达时间是上午10点城堡内部刚开放时，此时光线柔和，游客稀少，你能独享螺旋阶梯的光影魔术。整体游览节奏宜缓不宜急，遵循“由外至内、由宏至微”的原则。先从外部感受它的气场与河畔环境，再进入庭院聚焦建筑细节，最后深入内部探索历史与登临阶梯。下午时分，光线会逐渐照亮庭院西侧立面，是拍摄建筑外立面的黄金时间。这样的安排既能避开可能出现的团队游客潮，也能让你有充足的时间在螺旋阶梯上反复品味、静静感受。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`螺旋阶梯空间相对狭窄且是单行线，高峰期可能需要排队，强烈建议开馆即入或闭馆前前往以获得最佳体验。城堡内部部分区域石板地不平且楼梯陡峭，务必穿一双舒适防滑的鞋子。如果对宗教改革历史特别感兴趣，可以提前预约德语导游或仔细阅读英语导览内容，否则容易错过很多隐藏的故事线。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从老城集市广场出发，沿着石板路缓缓上坡，远远地欣赏城堡雄踞在易北河山丘之上的全景轮廓。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过厚重的城堡主门洞，首先不要急于进入内院，而是向右拐到外侧的露台，俯瞰蜿蜒的易北河与托尔高老城的一片红屋顶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回到主路径，正式踏入静谧的四方内院，让目光缓缓扫过四周立面上每一处精美的砂岩浮雕与装饰，感受文艺复兴空间的包围感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进设于城堡翼楼内的“托尔高——文艺复兴与宗教改革”常设展览，通过历史文物和互动展示，了解这座城堡背后的权力游戏与信仰变革。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`来到城堡小教堂，在这个朴素而意义非凡的空间里静立片刻，想象1544年那场试图弥合裂痕的联合圣餐仪式在此发生。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`怀着朝圣般的心情，走向庭院西北角那座独立的“大螺旋梯”，开始你的盘旋而上，用心感受每一步台阶带来的视角与光线的变幻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上楼梯顶端，进入曾经的代表大厅或登上更高的观景平台，从城堡的窗口再次眺望易北河，视角已然不同。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`游览结束后，从城堡南侧的小门出去，沿着绿树成荫的坡道走下，回到老城，找一家临河的咖啡馆坐下，回味刚才的体验。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`螺旋阶梯底部仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点至十一点间，阳光能斜射入楼梯底部，站在第一级台阶仰拍，可以捕捉到螺旋曲线与顶部天窗光线构成的深邃几何光影，使用广角镜头效果更震撼。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`内院西北角全景`}</h4>
                  <p className="text-sm text-gray-700">{`下午两三点，阳光正好照亮螺旋阶梯所在的建筑立面，站在庭院对角（东南角）拍摄，能将完整的螺旋楼梯结构作为焦点，并以文艺复兴立面为背景，展现建筑的整体和谐。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`易北河畔远景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，从城堡下游的易北河大桥上或对岸的河滨步道回望，夕阳会将城堡染成金色，利用长焦镜头压缩空间，可以拍到城堡、河流与夕阳同框的经典明信片角度。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`小教堂彩窗光影`}</h4>
                  <p className="text-sm text-gray-700">{`如果赶上晴朗的正午，阳光透过小教堂简单的窗格投射在古老的石墙和地面上，形成简洁而有力的光斑，适合拍摄静谧的氛围细节。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄螺旋阶梯时请务必尊重其他游客，避免长时间阻塞通道，使用三脚架需格外注意且仅在非拥挤时段尝试。城堡内部展览区域通常禁止使用闪光灯，请自觉关闭。航拍城堡需要特别申请许可，且易北河上空可能有飞行限制，切勿擅自飞行。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在老城里由十六世纪商人之家改造的精品酒店，木梁天花板、古老的砖墙与现代设计巧妙融合，推开窗就是错落有致的古城屋顶，步行五分钟即可抵达城堡。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`河景宁静之选`}</h4>
                  <p className="text-sm text-green-800">{`易北河对岸一家家庭经营的温馨客栈，房间虽不奢华但一尘不染，阳台正对城堡全景，清晨在河面的薄雾与鸟鸣中醒来，仿佛拥有一幅活的风景画。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`便捷实用之选`}</h4>
                  <p className="text-sm text-yellow-800">{`托尔高火车站附近新式的设计酒店，交通极其方便，内饰明亮时尚，是探索城堡和周边地区的完美基地，特别适合乘坐火车前来的旅人。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`独特体验之选`}</h4>
                  <p className="text-sm text-purple-800">{`距离托尔高车程约15分钟，易北河畔葡萄酒产区内的一家复古庄园民宿，主人是酿酒师，入住即可品尝本地葡萄酒，享受田园诗般的宁静夜晚。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`托尔高老城区非常安全且宁静，夜晚漫步极具情调，选择老城内的住宿能最大化体验中世纪氛围。如果计划在夏季或宗教改革相关纪念日前往，务必提前数周甚至数月预订，因为小镇接待能力有限，热门时段很快客满。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开哈滕费尔斯城堡很久以后，我脑海中反复出现的，不是那些宏大的历史名词，也不是选帝侯的赫赫威名，而是指尖划过螺旋阶梯那冰凉光滑的砂岩扶手时的触感，是身体随着那无始无终的圆弧缓缓上升时奇妙的失重感。这座城堡用它最独特的方式告诉你：历史不全是教科书上扁平的文字，它可以是立体的、可触摸的、甚至是可以沿着它盘旋而上的。那个无中心柱的楼梯，就像是一个绝妙的隐喻——支撑我们向上的，并非某个单一、僵化的核心，而是每一个精心构筑、相互支撑的片段所形成的整体合力，是艺术、勇气与精密计算的美好结合。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率和直达目的地的时代，哈滕费尔斯城堡和它的螺旋阶梯提供了一种“浪费时间的奢侈”。它邀请你慢下来，不是直线向上，而是绕一点路，在盘旋中体验光影的流转和视角的微妙变迁。它坐落在东西德曾经的交界，易北河畔，本身就承载着分离与重逢的记忆。站在城堡上望出去，你看到的是平静流淌的河流和连成一片的红屋顶，历史的风暴已然止息，留下的是一件永恒的艺术品。所以，每一位热爱深度游的旅人，都该来这里一次。不仅仅是为了看一个“景点”，而是为了亲身攀爬一次这个建筑奇迹，在那一刻，你会感到自己连接起了文艺复兴时代那个敢于想象、敢于建造的人类精神的高光时刻。它提醒我们，美与创新，拥有超越一切纷争的、抚慰人心的永恒力量。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/quedlinburg-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奎
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奎德林堡修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Quedlinburg Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/schwaebisch-hall" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施瓦本哈尔古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Schwäbisch Hall Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/stolzenfels-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施托尔岑费尔斯城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Stolzenfels Castle</p>
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
