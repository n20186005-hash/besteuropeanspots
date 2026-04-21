import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '霍恩埃姆斯宫 Hohenems Palace｜寻访尼伯龙根之歌手稿的发现地与文艺复兴的阿尔卑斯山传奇 - 最佳欧洲景点',
  description: '第一眼看到霍恩埃姆斯宫，你会觉得它和想象中那些童话城堡不太一样。它没那么尖耸入云，也不在孤傲的悬崖上，而是稳稳地坐在一片绿意盎然的山坡上，背后是绵延的、毛绒毯般的阿尔卑斯山麓。阳光好的时候，浅黄色的外墙暖融融的，那些层层叠叠、像被巨人用梳子划过的阶梯式山墙，在蓝天下勾勒出干净利落的几何线条。走近了，',
}

export default function HohenemsPalacePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '奥地利', href: '/destinations/austria' },
            { label: '霍恩埃姆斯宫', href: '/attractions/hohenems-palace' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`霍恩埃姆斯宫・Hohenems Palace・奥地利・霍恩埃姆斯`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到霍恩埃姆斯宫，你会觉得它和想象中那些童话城堡不太一样。它没那么尖耸入云，也不在孤傲的悬崖上，而是稳稳地坐在一片绿意盎然的山坡上，背后是绵延的、毛绒毯般的阿尔卑斯山麓。阳光好的时候，浅黄色的外墙暖融融的，那些层层叠叠、像被巨人用梳子划过的阶梯式山墙，在蓝天下勾勒出干净利落的几何线条。走近了，会闻到刚修剪过的青草味，混合着古老石墙在阳光下散发出的、略带凉意的矿物质气息。耳边很静，只有风吹过庭院里那几棵老树的声音，和偶尔从山下小镇传来的、模糊而亲切的生活声响——教堂钟声，或是孩子的嬉笑。它不像一个被供起来的博物馆，倒更像一位退隐的、却依然体面的老绅士，平静地俯瞰着脚下世代居住的子孙。
推开厚重的木门走进内院，感觉瞬间就变了。四面是三层高的、带有精美拱廊的回廊，围出一片方正的、被阳光切割得明暗分明的天空。你踩在鹅卵石铺成的花纹地面上，脚步声在拱廊下产生轻微的回响。这里的光影游戏堪称一绝：上午，东侧廊柱的影子长长地拖在地上；到了午后，西面的阳光则会把每一个拱门的弧形都照得金黄透亮。你可以想象，几百年前的贵族们，就是在这里散步、交谈，看着仆人们忙碌穿梭。而今，这里更多的是拿着相机静静仰望的游客，还有本地人推着婴儿车，来这里享受片刻荫凉。那种历史与当下生活毫无隔阂的交融感，是霍恩埃姆斯宫最迷人的初体验。
但它的核心魅力，远不止于建筑之美。当你顺着指示牌，走进设于宫殿侧翼的博物馆和图书馆时，一种更厚重、更激动人心的气息扑面而来。那是旧纸张、羊皮纸和橡木书架混合的味道。空气里有一种图书馆特有的肃穆与专注。就在这里，一个不起眼的房间里，你的目光会不由自主地被一个展柜吸引——那里陈列着《尼伯龙根之歌》手稿的复刻本。就是在这里，在这座阿尔卑斯山脚下的宫殿里，文学史上一颗险些永久蒙尘的明珠，在1755年被重新发现。那一刻的感觉很奇妙，你站在实体的、坚固的石头宫殿里，思绪却飞向了那个由巨龙、宝藏、英雄与背叛构成的虚幻史诗世界。这座宫殿，就这样成为了一个连接有形与无形、历史与传奇的魔法节点。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到霍恩埃姆斯宫，你会觉得它和想象中那些童话城堡不太一样。它没那么尖耸入云，也不在孤傲的悬崖上，而是稳稳地坐在一片绿意盎然的山坡上，背后是绵延的、毛绒毯般的阿尔卑斯山麓。阳光好的时候，浅黄色的外墙暖融融的，那些层层叠叠、像被巨人用梳子划过的阶梯式山墙，在蓝天下勾勒出干净利落的几何线条。走近了，会闻到刚修剪过的青草味，混合着古老石墙在阳光下散发出的、略带凉意的矿物质气息。耳边很静，只有风吹过庭院里那几棵老树的声音，和偶尔从山下小镇传来的、模糊而亲切的生活声响——教堂钟声，或是孩子的嬉笑。它不像一个被供起来的博物馆，倒更像一位退隐的、却依然体面的老绅士，平静地俯瞰着脚下世代居住的子孙。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`推开厚重的木门走进内院，感觉瞬间就变了。四面是三层高的、带有精美拱廊的回廊，围出一片方正的、被阳光切割得明暗分明的天空。你踩在鹅卵石铺成的花纹地面上，脚步声在拱廊下产生轻微的回响。这里的光影游戏堪称一绝：上午，东侧廊柱的影子长长地拖在地上；到了午后，西面的阳光则会把每一个拱门的弧形都照得金黄透亮。你可以想象，几百年前的贵族们，就是在这里散步、交谈，看着仆人们忙碌穿梭。而今，这里更多的是拿着相机静静仰望的游客，还有本地人推着婴儿车，来这里享受片刻荫凉。那种历史与当下生活毫无隔阂的交融感，是霍恩埃姆斯宫最迷人的初体验。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但它的核心魅力，远不止于建筑之美。当你顺着指示牌，走进设于宫殿侧翼的博物馆和图书馆时，一种更厚重、更激动人心的气息扑面而来。那是旧纸张、羊皮纸和橡木书架混合的味道。空气里有一种图书馆特有的肃穆与专注。就在这里，一个不起眼的房间里，你的目光会不由自主地被一个展柜吸引——那里陈列着《尼伯龙根之歌》手稿的复刻本。就是在这里，在这座阿尔卑斯山脚下的宫殿里，文学史上一颗险些永久蒙尘的明珠，在1755年被重新发现。那一刻的感觉很奇妙，你站在实体的、坚固的石头宫殿里，思绪却飞向了那个由巨龙、宝藏、英雄与背叛构成的虚幻史诗世界。这座宫殿，就这样成为了一个连接有形与无形、历史与传奇的魔法节点。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`霍恩埃姆斯宫`} />
                <InfoRow label="英文名称" value={`Hohenems Palace`} />
                <InfoRow label="正式名称" value={`Hohenems Palace (Schloss Hohenems)`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`霍恩埃姆斯`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座文艺复兴宫殿是发现世界文学瑰宝《尼伯龙根之歌》最重要手稿C版的地方。`} />
                <InfoRow label="建筑特色" value={`一座融合了意大利文艺复兴风格与中欧山地防御需求的四翼方形宫殿，拥有标志性的阶梯山墙和环绕的拱廊庭院。`} />
                <InfoRow label="建筑风格" value={`晚期文艺复兴风格，带有明显的中欧地区 adaptations。`} />
                <InfoRow label="文化价值" value={`它不仅是贵族权力的象征，更是一个连接了中古史诗、犹太社区历史与当代欧洲记忆的独特文化枢纽。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`博物馆开放时间通常为周二至周日上午10点至下午5点，周一闭馆。宫殿花园全年全天开放。宫殿内部导览游通常在下午2点，具体场次建议提前在官网查询确认。冬季（11月至次年3月）开放时间可能缩短，部分区域（如档案馆）需提前预约。主要节假日（如圣诞节、新年）可能关闭。`} />
              <InfoRow label="门票价格" value={`博物馆常设展览门票约为成人10欧元，优惠票（学生、老年人）8欧元。含导游的宫殿内部参观联票约为15欧元。家庭票（2成人+最多3名儿童）有折扣。6岁以下儿童免费。持有福拉尔贝格州博物馆通票可免费进入。门票价格可能随特展调整。`} />
              <InfoRow label="地址" value={`Schlossplatz 4, 6845 Hohenems, Austria`} />
              <InfoRow label="交通方式" value={`最近的国际机场是德国慕尼黑机场或瑞士苏黎世机场，但更便捷的是奥地利因斯布鲁克机场或德国腓特烈港机场。从苏黎世中央火车站乘坐火车前往费尔德基希，换乘区域巴士（如180路）至Hohenems Markt站，下车后步行约10分钟上山即达，总耗时约2小时。从因斯布鲁克出发，火车至朗根站换乘，总耗时约1.5小时。自驾是最方便的方式，使用导航定位至上述地址，宫殿周边有付费停车场。山区公共交通班次频率约为每小时一班，建议使用奥地利联邦铁路（ÖBB）App实时查询。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事得从16世纪中叶讲起。那时，霍恩埃姆斯的统治者是来自南蒂罗尔的贵族——埃姆斯伯爵。当时的伯爵老爷子野心勃勃，不甘心只住在老城堡里，他想要一座配得上家族地位、又能彰显文艺复兴新风潮的“现代”宅邸。于是，从1562年开始，他请来了大概是从意大利学成归来的建筑师（名字已湮没在历史里），在这片可以俯瞰整个莱茵河谷的山坡上，一砖一瓦地建起了这座四方宫殿。你可以想象当时的场景：工匠们敲打石头的声音回荡在山谷，从意大利运来的大理石构件被艰难地运上山，伯爵大人每天来巡视工程，对窗户的样式、拱廊的比例提出要求。他想要的，不只是个家，更是一个权力的宣言，告诉所有经过山谷的人：看，我们埃姆斯家族，是跟得上时代潮流的文化人。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`宫殿建成后，果然成了地区的文化中心。接下来的两百年里，这里举办舞会，供养着乐队和画家，图书馆也日益丰富。但家族的命运像阿尔卑斯山的天气一样多变。到了18世纪，埃姆斯家族男嗣断绝，宫殿的命运悬于一线。就在这略显颓唐的时期，一个名叫雅各布·赫尔曼·奥伯莱特的瑞士学者登场了。1755年，他受雇来整理宫殿里堆积如山的故纸堆。那可能是一个阴雨绵绵的下午，图书馆里光线昏暗，奥伯莱特在布满灰尘的书架深处，发现了一本巨大的、用粗糙皮革装订的古旧手抄本。他拂去灰尘，翻开泛黄的纸张，上面是用中世纪德语写成的诗句，讲述了齐格弗里德、克里姆希尔特和勃艮第人的悲剧故事。他当时或许并未完全意识到，他手里捧着的，正是德意志文学最伟大的史诗《尼伯龙根之歌》最重要的一份手稿（后世称为“手稿C”）。这次发现，如同在寂静的山谷里投下一颗惊雷，瞬间震动了整个欧洲文学界，也让霍恩埃姆斯宫这个名字，永远刻在了文学史上。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，宫殿的传奇并未停留在那一刻。19世纪，新的主人——瓦尔德堡-沃尔夫埃格家族入主。他们做了一件影响深远的事：邀请犹太商人和社会名流来此定居，以振兴当地经济。于是，在宫殿的“庇护”与特许下，一个繁荣的犹太社区在山脚下的小镇诞生、壮大，建起了华丽的犹太会堂。这座文艺复兴宫殿，又意外地成为了一个多元文化共生的见证者与守护者。犹太社区在这里安居乐业，直到二战前夜的黑暗时期。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`20世纪的战争与动荡没有放过这里。宫殿曾被占用，一度濒临荒废。但就像史诗中的英雄历经磨难，它最终还是等来了重生。经过精心修复，它不再是贵族的私产，而变成了属于所有人的公共文化空间：一部分是博物馆，讲述着宫殿自身、尼伯龙根史诗和当地犹太社区的故事；一部分是拥有珍贵藏书的文艺复兴研究图书馆；还有一部分是举办音乐会和文化活动的场所。从贵族堡垒，到文学圣地，再到文化熔炉与社区心脏——霍恩埃姆斯宫用近五百年的时光，完成了它最动人的蜕变。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在上午10点前抵达，这时旅行团还未涌入，光线柔和，最适合在宫殿外围和庭院拍照。整体游览可以安排3.5到4小时，节奏宜松不宜紧，因为这里值得品味的是那种沉浸式的历史氛围。上午先探索建筑外部与核心展览，了解史诗发现的故事；中午可以在花园长椅或小镇上简单午餐；下午则留给图书馆、特别展览和安静的庭院沉思。这样的安排既能避开人流高峰，又能让你在不同光线下感受宫殿的多重魅力。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`内部导览游通常为德语，但可提前询问是否有英文讲解小册子或偶尔的英语导览团，非常值得参加。宫殿内部不少房间是木地板，为了尊重历史和保证安全，建议穿着舒适且安静的平底鞋。博物馆和图书馆内部严禁使用闪光灯，为了保护珍贵文献，请务必遵守。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从山下小镇沿着缓坡步行上山，穿过古老的栗子树林，让那座浅黄色的文艺复兴宫殿在绿荫后逐渐完整地露出全貌`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`不要急着进门，先从宫殿东侧的空地回望，将宫殿背后的阿尔卑斯山群峰作为天然画框拍下标准照`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开主入口那扇带着厚重铁饰的木门，踏入内院，立刻抬头感受被四边拱廊切割成几何形状的蓝天和变幻的光影`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`直接前往博物馆的“尼伯龙根之歌”展厅，站在那份传奇手稿（复刻品）前，想象奥伯莱特教授1755年那个激动人心的发现瞬间`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`慢慢浏览关于埃姆斯伯爵家族和宫殿建筑史的展厅，看看那些肖像画和古老家具，拼凑起旧日贵族的生活图景`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要参加下午的宫殿内部导览游，跟随向导走进一般不对外开放的仪式厅和私人房间，听她讲墙上的挂毯和天花板壁画的故事`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在参观结束后，回到内院拱廊下找个石凳坐下，什么都不做，只是静静听着风声和鸟鸣，感受几个世纪的时间在此沉淀`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从宫殿西门走出，步入精心修剪的巴洛克风格花园，沿着林荫小道散步到尽头的观景台，俯瞰整个霍恩埃姆斯小镇和远处的莱茵河谷`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`宫殿东侧山坡草地仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏时分，站在东侧较低的开阔草地上，用广角镜头将宫殿的阶梯山墙与背后雄伟的阿尔卑斯山一同纳入画面，展现其山麓宫殿的独特地理位置`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`内院拱廊光影特写`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点至十一点间，阳光斜射入东南角拱廊，此时聚焦于一根石柱或一段拱券，捕捉阳光在古老石雕上形成的强烈明暗对比和温暖色调`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`尼伯龙根手稿展柜反射`}</h4>
                  <p className="text-sm text-gray-700">{`在博物馆内，巧妙利用展示手稿复刻本的玻璃展柜，拍摄其反射出的对面窗户或展厅灯光，营造一种虚实交织、连接古今的哲学感`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`花园观景台全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前约一小时，从花园西端的观景台向西拍摄，将宫殿作为前景，中景是小镇的红屋顶，远景是沐浴在金色夕阳下的莱茵河谷，层次极其丰富`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`图书馆长厅纵深`}</h4>
                  <p className="text-sm text-gray-700">{`如果图书馆开放参观且允许拍照，站在长厅的一端，利用两侧高大的橡木书架形成的引导线，拍出深邃、宁静而充满知识力量的对称构图`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`航拍器在宫殿及周边上空飞行有严格限制，需提前向当地管理部门申请，未经许可请勿放飞。拍摄犹太文化相关展品或前往山下犹太会堂遗址时，请保持庄重肃穆的态度。冬季雪后，宫殿银装素裹，是绝佳的拍摄时机，但需注意脚下防滑。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温馨民宿之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在山下霍恩埃姆斯老城一栋有200年历史的木结构房子里，房东奶奶会为你准备用本地食材做的丰盛早餐，夜晚安静得只能听到溪流声`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计型历史酒店`}</h4>
                  <p className="text-sm text-green-800">{`由一座19世纪的优雅别墅改造而成，房间将复古元素与现代设计完美融合，花园露台正对着宫殿所在的翠绿山丘，位置隐秘又方便`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`文化沉浸体验`}</h4>
                  <p className="text-sm text-yellow-800">{`预订福拉尔贝格州其他古镇（如费尔德基希）的经典家庭旅馆，乘坐公共交通轻松往返，体验更地道的奥地利外省生活节奏`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端山景度假`}</h4>
                  <p className="text-sm text-purple-800">{`驱车半小时入住莱茵河谷另一侧的山间温泉酒店，在露天温泉池里遥望夜幕中点灯的霍恩埃姆斯宫，享受历史与自然疗愈的双重盛宴`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`霍恩埃姆斯小镇非常安全宁静，夏季和圣诞市场期间是旺季，建议提前数月预订。如果自驾，选择住宿时务必确认停车位情况，老城街区停车可能较紧张。许多民宿不设24小时前台，务必提前沟通好入住时间。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开霍恩埃姆斯宫的时候，我脑子里盘旋的不是某个具体的画面，而是一种奇特的混合感。它是如此“实在”——坚硬的石头，精确的几何形体，可触摸的木头纹理；但它同时又是如此“虚幻”，因为它守护着一个源自迷雾与传说的史诗故事。这座宫殿教会我，最深度的旅行，不是去看一个孤立的美景或古迹，而是去发现那些将不同维度的人类经验编织在一起的地方。在这里，政治权力（伯爵的宫殿）、文学灵光（手稿的发现）、社区共生（犹太历史）与自然背景（阿尔卑斯山麓）被奇妙地缝合在同一片时空里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个一切都被快速分类、标签化的世界里，霍恩埃姆斯宫像一个温柔的提醒。它告诉我们，文化是流动的、层叠的、无法被简单定义的。一位骑士的冒险史诗，可以沉睡在一座文艺复兴宫殿的图书馆里，等待被重新发现，并继续滋养后世。也许，我们每个人心中都有一座这样的“宫殿”，里面收藏着来自不同时代的“手稿”，有些清晰，有些蒙尘。旅行至此，就像是进行了一场整理与发现的内心仪式。它可能没有维也纳美泉宫那样极致的奢华，也没有新天鹅堡那样张扬的浪漫，但正是这份厚重、复杂与谦逊的融合，让它成为每一位不满足于表面观光、渴望触摸欧洲文化深层肌理的旅人，绝对不容错过的一站。来这里，不只是看一座宫殿，更是阅读一本立体的、活着的欧洲之书。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/steyr-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施泰尔老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Steyr</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bad-ischl-imperial-spa-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴德伊舍</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bad Ischl</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/friesach-medieval-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    弗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">弗里萨赫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Friesach</p>
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
