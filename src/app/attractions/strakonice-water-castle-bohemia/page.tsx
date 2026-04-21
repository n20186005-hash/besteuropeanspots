import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '斯特拉科尼采 Strakonice｜探秘波西米亚水上骑士城堡与百年风笛之声 - 最佳欧洲景点',
  description: '当你从略显嘈杂的主街拐进通往城堡的小巷，世界仿佛瞬间被调低了音量。石板路被岁月磨得温润，空气里飘着一丝河水的微腥与老墙苔藓的清凉气息。然后，它就在猝不及防间出现在眼前——不是屹立在山巅，而是从一片开阔的水面中生长出来。斯特拉科尼采城堡，或者说，那座巨大的、由深浅不一褐色石砖砌成的建筑群，就那样沉稳地',
}

export default function StrakoniceWaterCastleBohemiaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '斯特拉科尼采', href: '/attractions/strakonice-water-castle-bohemia' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`斯特拉科尼采・Strakonice・捷克・斯特拉科尼采`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你从略显嘈杂的主街拐进通往城堡的小巷，世界仿佛瞬间被调低了音量。石板路被岁月磨得温润，空气里飘着一丝河水的微腥与老墙苔藓的清凉气息。然后，它就在猝不及防间出现在眼前——不是屹立在山巅，而是从一片开阔的水面中生长出来。斯特拉科尼采城堡，或者说，那座巨大的、由深浅不一褐色石砖砌成的建筑群，就那样沉稳地卧在奥塔瓦河的一个弯道里。水中的倒影随着微风轻轻晃动，让坚实的塔楼和城墙也多了几分温柔的幻觉。几只天鹅在墙根下游弋，划破宁静的水面，那声音清晰得让你能数出水波的次数。这第一眼的震撼，不是来自遥不可及的威严，而是一种亲水的、充满生命力的古朴。
走进城堡庭院，你会立刻发现这里绝不仅仅是一个冷冰冰的旅游景点。头发花白的当地老人坐在长椅上晒太阳，用你听不懂的捷克语轻声闲聊；年轻的妈妈推着婴儿车穿过拱门；远处隐约传来孩子们在公园里嬉戏的笑声。这座城堡早已融入了斯特拉科尼采人的日常脉搏中，它是社区的后花园，是历史的背景板，也是生活的当下。风笛的声音可能会在任何时候响起——也许是从某扇开着的窗户里飘出练习的片段，也许是周末集市上艺人的即兴演奏。那种声音很特别，不像苏格兰风笛那样高亢凌厉，而是更低沉、更绵长，带着一种土地般的忧伤和韧性，能轻易钻进你的心里。
而这座古城最打动人心的魅力，恰恰在于这种“矛盾”的和谐。一边是冷峻的、用于战争和防御的骑士堡垒，石头墙壁上还能看到箭孔；另一边却是温暖的、流淌在民间血液里的音乐与诗歌。它向你展示的，不是一段被封存的历史，而是一种文化如何像城堡下的河水一样，即便历经改道与冲刷，却始终流淌不息。你触摸着冰凉的城墙，耳中却听着热情的风笛曲，这种感官上的交织，便是斯特拉科尼采独一无二的灵魂所在。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当你从略显嘈杂的主街拐进通往城堡的小巷，世界仿佛瞬间被调低了音量。石板路被岁月磨得温润，空气里飘着一丝河水的微腥与老墙苔藓的清凉气息。然后，它就在猝不及防间出现在眼前——不是屹立在山巅，而是从一片开阔的水面中生长出来。斯特拉科尼采城堡，或者说，那座巨大的、由深浅不一褐色石砖砌成的建筑群，就那样沉稳地卧在奥塔瓦河的一个弯道里。水中的倒影随着微风轻轻晃动，让坚实的塔楼和城墙也多了几分温柔的幻觉。几只天鹅在墙根下游弋，划破宁静的水面，那声音清晰得让你能数出水波的次数。这第一眼的震撼，不是来自遥不可及的威严，而是一种亲水的、充满生命力的古朴。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走进城堡庭院，你会立刻发现这里绝不仅仅是一个冷冰冰的旅游景点。头发花白的当地老人坐在长椅上晒太阳，用你听不懂的捷克语轻声闲聊；年轻的妈妈推着婴儿车穿过拱门；远处隐约传来孩子们在公园里嬉戏的笑声。这座城堡早已融入了斯特拉科尼采人的日常脉搏中，它是社区的后花园，是历史的背景板，也是生活的当下。风笛的声音可能会在任何时候响起——也许是从某扇开着的窗户里飘出练习的片段，也许是周末集市上艺人的即兴演奏。那种声音很特别，不像苏格兰风笛那样高亢凌厉，而是更低沉、更绵长，带着一种土地般的忧伤和韧性，能轻易钻进你的心里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而这座古城最打动人心的魅力，恰恰在于这种“矛盾”的和谐。一边是冷峻的、用于战争和防御的骑士堡垒，石头墙壁上还能看到箭孔；另一边却是温暖的、流淌在民间血液里的音乐与诗歌。它向你展示的，不是一段被封存的历史，而是一种文化如何像城堡下的河水一样，即便历经改道与冲刷，却始终流淌不息。你触摸着冰凉的城墙，耳中却听着热情的风笛曲，这种感官上的交织，便是斯特拉科尼采独一无二的灵魂所在。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`斯特拉科尼采`} />
                <InfoRow label="英文名称" value={`Strakonice`} />
                <InfoRow label="正式名称" value={`Strakonice`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`斯特拉科尼采`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`圣约翰骑士团在中欧最重要的据点之一，也是波西米亚南部统治与防御体系的关键支点。`} />
                <InfoRow label="建筑特色" value={`一座将军事防御、贵族居住与水利工程完美结合的复合体，其建筑直接与伏尔塔瓦河支流奥塔瓦河相连，部分墙体从水中拔地而起。`} />
                <InfoRow label="建筑风格" value={`以罗马式与哥特式为基础，历经多次扩建，融合了文艺复兴与巴洛克式的修饰，呈现出典型的捷克中世纪城堡演变的层叠风貌。`} />
                <InfoRow label="文化价值" value={`不仅是建筑瑰宝，更是捷克民族风笛文化的活态中心，其传承的风笛音乐与舞蹈被列入国家级非物质文化遗产。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`水上城堡区域开放时间复杂，需特别注意：城堡建筑内部（博物馆）通常在4月至10月开放，周二至周日 9:00-12:00， 12:30-16:00；冬季（11月至3月）仅周末开放或需提前预约。城堡庭院和外围公园全年全天开放。每年七月的风笛音乐节期间，城堡开放时间会大幅延长。重大节假日如复活节、圣诞节可能关闭，出行前务必查看官网最新公告。`} />
              <InfoRow label="门票价格" value={`城堡博物馆基本门票：成人120捷克克朗，学生及老年人80捷克克朗，家庭套票（2大2小）300捷克克朗。仅参观城堡庭院免费。提供包含导游讲解的深度游套票，约250克朗/人，强烈建议选择，能进入不对外开放的骑士厅。6岁以下儿童免费。持有捷克国家文化遗产卡可享受折扣。`} />
              <InfoRow label="地址" value={`Zámek 1, 386 01 Strakonice, Czech Republic`} />
              <InfoRow label="交通方式" value={`从布拉格出发最方便：在布拉格主火车站（Praha hl.n.）乘坐前往捷克布杰约维采或比尔森的火车，几乎所有车次都在斯特拉科尼采停靠，车程约1小时40分钟，班次密集，每小时至少有1-2班。出斯特拉科尼采火车站后，步行是最好选择：径直沿着Husova大街向南走，大约15分钟就能看到伏尔塔瓦河和城堡雄伟的身影，全程是舒适的缓坡。如果自驾，可将车停在城堡北面的公共停车场，按小时收费。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "斯特拉科尼采的故事，始于一群身披黑色斗篷、绣着白色八角十字的骑士。那是在13世纪初，强大的圣约翰骑士团（也称医院骑士团）的足迹已遍布欧洲。波西米亚的贵族布雷季斯拉夫家族，为了巩固在南部的势力，将这片河畔要地赠予了骑士团。骑士们看中了这里奥塔瓦河与伏尔塔瓦河交汇处的战略价值，于是，一座最初的罗马式堡垒开始在水边矗立。它不仅是信仰的据点，更是控制水路商道、征收关税的权力枢纽。最初的城堡核心是那座高大的、看起来有些笨拙的“伦纳”塔楼，它像个沉默的巨人，见证着第一批骑士在这里祈祷、训练，并眺望着远方可能到来的威胁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间流转到14世纪，城堡迎来了它的黄金时代。在骑士团团长维申的领导下，城堡进行了大规模的哥特式扩建，变得更加宏伟坚固。这一时期，斯特拉科尼采不仅是军事要塞，更成了繁荣的行政与文化中心。骑士团吸引来了工匠、商人和学者，城堡脚下慢慢发展出一个热闹的城镇。然而，中世纪的荣光总是与阴影相伴。15世纪的胡斯战争风暴席卷了波西米亚，这座天主教骑士团的城堡自然成为了改革派胡斯军眼中重要的目标。传说中，城堡经历了惨烈的围攻，但那些厚重的石墙和水域的屏障保护了它，使之成为少数未被胡斯军攻破的主要堡垒之一。战火之后，城堡虽满目疮痍，但根基未损。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战争改变了权力格局。16世纪，骑士团因财政问题，被迫将城堡的部分产权出售给当地的世俗贵族——著名的施瓦岑贝格家族。从此，城堡进入了一个“双主共治”的奇特时期。骑士团依然占据一部分，行使宗教职能；而施瓦岑贝格家族则对属于他们的部分进行了文艺复兴风格的改造，增加了舒适的居住空间、装饰华丽的厅堂和开阔的窗户，试图让这座堡垒变得更像家园。这种奇妙的共存，在建筑上留下了清晰的印记：你可以在一次游览中，同时看到简朴严峻的骑士礼拜堂和绘有精美壁画、充满生活气息的贵族客厅。两种力量，两种审美，在同一个屋顶下碰撞又融合。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的转折点发生在18世纪后期。随着约瑟夫二世皇帝的改革，圣约翰骑士团在波西米亚的财产被大量世俗化。骑士们最终彻底离开了这座守护了五百多年的城堡。城堡完全归入施瓦岑贝格家族名下，后来又几经转手。它一度被用作工厂、仓库，甚至监狱，昔日的荣光蒙尘。但幸运的是，它没有被拆毁。19世纪兴起的民族复兴浪潮，让捷克人开始珍视自己的历史遗产。人们重新审视这座城堡，不仅仅把它看作一堆石头，更发现了它与众不同的文化纽带——风笛。这种古老的乐器在这里从未断绝，城堡成为了民间音乐家和舞者聚集的灵魂之地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "到了20世纪，城堡被收归国有，经过精心修复，变成了城市博物馆和文化遗产中心。它不再属于某个骑士团或某个家族，而是属于每一个捷克人，每一个前来探寻的旅人。今天，当你漫步其中，你走过的每一步，都踩着层层叠叠的历史：骑士的祷告、商贩的叫卖、围城的呐喊、贵族的舞步、工人的汗水，还有那穿越了几个世纪始终悠扬的风笛声。它像一本活着的史书，拒绝被简单定义。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你安排一整天的时间给斯特拉科尼采，享受慢悠悠的深度探索。最佳抵达时间是早上九点左右，这时旅行团尚未涌入，晨光刚好温柔地洒在城堡水面上。整体的游览节奏应该是“外-内-外”：先花一个上午沉浸式游览城堡建筑群内部和博物馆，聆听它的历史故事；中午在古城里找家地道餐馆享用波西米亚午餐；下午则感受城堡的外部空间、公园和古城街巷的生活气息，并等待可能邂逅的风笛表演。这样的安排能让你从宏大的历史叙事，逐步过渡到细腻的当下生活体验，完成一次完美的时空穿越。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡内部部分楼梯陡峭且狭窄，请务必穿一双舒适防滑的鞋子。博物馆的捷克语说明牌居多，提前下载好翻译软件或租用语音导览器体验会好很多。古城里的餐馆在周末晚上可能很热闹，建议提前预订位置。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡北门进入，首先在空旷的中央庭院静静站一会儿，感受被高大石墙环绕的宁静，并观察建筑上不同年代留下的风格印记。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进城堡主楼，沿着吱呀作响的木楼梯盘旋而上，逐一参观那些陈列着骑士盔甲、古老文献和本地考古发现的博物馆展厅。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到那个面向河水的文艺复兴式凸窗房间，想象几个世纪前的贵族夫人曾在这里眺望河上往来的船只与远处的田园风光。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在导游的带领下（如果预约了的话）潜入通常关闭的骑士大厅，仰头看那巨大的木制穹顶，感受空间里残留的肃穆与力量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡南侧的小门走出，立刻来到水边，沿着狭窄的步道绕行，从最经典的角度仰视城堡从水中崛起的雄姿，并拍摄倒影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过连接城堡与城镇的古老石桥，在对岸的河滨公园找一张长椅坐下，像当地人一样对着城堡发会儿呆，看天鹅游过。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`漫步回古城中心，在Masarykovo广场周边的小巷里随意逛逛，留意那些装饰着精美壁画和浮雕的市民建筑立面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时机凑巧，就去广场附近的“风笛之家”文化中心碰碰运气，那里常有小型排练或展览，能最近距离感受这种古老乐器的灵魂。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡东南侧河岸仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`最佳时间是晴朗的上午九点到十一点，阳光正好照亮城堡主立面。站在河对岸公园的矮墙边，将城堡主体与其在水中的完整倒影一同纳入镜头，使用对称构图，画面宁静而有力。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“伦纳”塔楼下的拱门框架`}</h4>
                  <p className="text-sm text-gray-700">{`午后时分，阳光斜射入城堡内院。站在内院通往塔楼的石砌拱门下，以拱门为画框，拍摄庭院另一侧被阳光照亮的文艺复兴建筑外墙，形成强烈的明暗对比与景深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城堡西侧城墙与奥塔瓦河弯道`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚日落前约一小时，光线变成金色。爬上城堡西侧的一段旧城墙（如果开放），用长焦镜头捕捉奥塔瓦河在城堡脚下形成优美弯道的局部，将河水、古老的石墙与对岸的红色屋顶一同摄入，充满故事感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`Masarykovo广场风笛演奏者剪影`}</h4>
                  <p className="text-sm text-gray-700">{`如果遇到街头风笛艺人，尝试在日落后的蓝调时刻拍摄。以广场上色彩柔和的巴洛克建筑为背景，将演奏者的动态剪影作为主体，捕捉音乐与暮色交融的瞬间。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机拍摄城堡全景需格外谨慎，最好提前查询当地法规并远离人群。拍摄当地居民或风笛艺人时，请务必先微笑示意并获得同意，这是基本的尊重。室内博物馆通常禁止使用闪光灯和三脚架。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`性价比之选`}</h4>
                  <p className="text-sm text-blue-800">{`“U Rytíře” 宾馆，就藏在城堡脚下的一条安静巷子里，是由一栋19世纪老房子改建的，房间不大但充满家的温馨，老板会给你手绘古城地图并推荐只有本地人才知道的小酒馆。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`古城广场旁的“风笛手之家”公寓，这是一套经过现代化改造的历史公寓，内饰保留着原有的高天花板和木梁，最棒的是它的阳台正对广场，早晨在咖啡香中就能看到古城慢慢苏醒，周末还可能免费“收听”到楼下的风笛音乐会。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车约15分钟，入住奥塔瓦河上游的“钓鱼酒店”，这家酒店由几个古老的渔夫小屋扩建而成，每间房都有面向河流的露台或落地窗，你可以享受绝对的静谧，在私人河段飞钓，并在星空下用酒店提供的望远镜再次远眺夜幕中灯火阑珊的斯特拉科尼采城堡。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "古城内的住宿数量有限，尤其在风笛音乐节（七月）期间非常紧俏，务必提前数月预订。斯特拉科尼采是个非常安全的宁静小城，夜晚独自在中心街区漫步也完全不用担心。如果选择城外住宿，请确保有租车或查询好晚间的公交班次。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开斯特拉科尼采许久后，那水城堡的倒影和风笛的低鸣，还会不时地浮现在脑海里。它不像布拉格那样华丽炫目，也不像CK小镇那样精致如画。它的美是沉静的、内敛的，甚至带着一点粗粝的真实感。但正是这种真实，让它有了直击人心的力量。在这里，你触摸到的历史不是标本，而是依然在呼吸的、有温度的存在。你会意识到，文化遗产最动人的状态，或许不是被真空封装在玻璃柜里，而是像这里的风笛文化一样，依然在老人的指间、在孩童的学习中、在节日的狂欢里鲜活地流淌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个一切都追求快速和表象的世界里，斯特拉科尼采像是一个温柔的提醒。它邀请你慢下来，花时间去读懂石头上每一道风化痕迹背后的故事，去聆听一种古老乐器如何诉说着一个民族的喜怒哀乐。它告诉你，真正的深度旅行，不是打卡了多少个名胜，而是在某个瞬间，你与一个地方沉默的过去和生动的当下产生了共鸣。当你站在河畔，看坚固的城堡与流淌的河水相依相伴，听肃穆的历史与欢腾的乐音交织回响，你会感受到一种奇妙的平衡与延续。这，或许就是旅行能带给我们的、最宝贵的礼物——一种对时间、对文化、对生命韧性的更深理解。每一位不甘于走马观花的旅人，都该来斯特拉科尼采，上一堂关于“永恒”与“瞬间”的课。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/znojmo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    兹
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">兹诺伊莫古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Znojmo</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rakovnik-czech-medieval-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉科夫尼克</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rakovník</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/hradec-nad-moravici-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    赫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">赫拉德茨-纳德莫拉维齐城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hradec nad Moravicí Castle</p>
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
