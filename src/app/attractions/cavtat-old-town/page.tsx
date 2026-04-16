import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '察夫塔特 Cavtat｜杜布罗夫尼克旁的静谧蓝宝石，亚得里亚海的时光回廊 - 最佳欧洲景点',
  description: '第一眼看到察夫塔特，你会疑心闯进了一个被时光特意调慢了节奏的梦境。渡轮缓缓驶离杜布罗夫尼克喧闹的港口，将中世纪城墙的轮廓留在身后，大约四十五分钟后，一个被苍翠松林和橄榄园环抱的“丫”字形半岛就安静地铺陈在眼前。空气的味道率先变了，咸湿的海风里混进了野生迷迭香和松针被阳光烘焙过的干燥香气，杜布罗夫尼克...',
}

export default function CavtatOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '察夫塔特', href: '/attractions/cavtat-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`察夫塔特・Cavtat・克罗地亚・察夫塔特`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到察夫塔特，你会疑心闯进了一个被时光特意调慢了节奏的梦境。渡轮缓缓驶离杜布罗夫尼克喧闹的港口，将中世纪城墙的轮廓留在身后，大约四十五分钟后，一个被苍翠松林和橄榄园环抱的“丫”字形半岛就安静地铺陈在眼前。空气的味道率先变了，咸湿的海风里混进了野生迷迭香和松针被阳光烘焙过的干燥香气，杜布罗夫尼克那股热烈的、游客云集的躁动气息瞬间被涤荡干净。船靠岸的码头小得可爱，海水是那种毫无杂质的玻璃绿，能清晰地看到水底光滑的卵石和小鱼群银亮的闪光。
走上岸，你的脚立刻踏在温润光滑的大理石板上。没错，察夫塔特的主干道就是用这种被无数代人鞋底磨得发亮的大理石铺就的，在亚得里亚海充沛的阳光下，整条路像一条慵懒流淌的牛奶河。道路两旁是高大的棕榈树和盛开的九重葛，紫红色的花瀑几乎要溅到行人肩上。咖啡馆的露天座位就摆在路边，老人们喝着浓黑的小杯咖啡，下着一盘似乎永远下不完的棋，棋子落在木板上的清脆“哒哒”声，和海浪轻拍堤岸的“哗哗”声，构成了小镇永恒的背景音。这里没有匆忙的脚步声，只有穿着人字拖的当地人提着装满意大利面的网袋，慢悠悠地走过，和你眼神相遇时，会给你一个毫不设防的、带着阳光痕迹的微笑。
小镇的核心魅力，在于它那种“入世”又“出世”的奇妙平衡。它绝非与世隔绝的孤岛，渡轮和公路将它与外面的世界紧密相连，杜布罗夫尼克的辉煌历史它是亲历者和分担者。然而，它又聪明地为自己保留了一份矜持的静谧。两个新月形的海湾——察夫塔特湾和舒潘斯卡湾，像母亲温柔环抱的双臂，将地中海的波涛与喧嚣轻轻挡在外面，只留下平静如镜的内海。这份宁静，让它成了艺术家、思想家和那些单纯想喘口气的旅人的理想避难所。你会发现，这里的灵魂不在雄伟的城堡里，而在海湾边随意停泊的彩色小木船里，在午后教堂阴影下打盹的猫咪身上，在每一扇敞开的窗扉后飘出的、炖煮海鲜的浓郁香气里。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到察夫塔特，你会疑心闯进了一个被时光特意调慢了节奏的梦境。渡轮缓缓驶离杜布罗夫尼克喧闹的港口，将中世纪城墙的轮廓留在身后，大约四十五分钟后，一个被苍翠松林和橄榄园环抱的“丫”字形半岛就安静地铺陈在眼前。空气的味道率先变了，咸湿的海风里混进了野生迷迭香和松针被阳光烘焙过的干燥香气，杜布罗夫尼克那股热烈的、游客云集的躁动气息瞬间被涤荡干净。船靠岸的码头小得可爱，海水是那种毫无杂质的玻璃绿，能清晰地看到水底光滑的卵石和小鱼群银亮的闪光。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走上岸，你的脚立刻踏在温润光滑的大理石板上。没错，察夫塔特的主干道就是用这种被无数代人鞋底磨得发亮的大理石铺就的，在亚得里亚海充沛的阳光下，整条路像一条慵懒流淌的牛奶河。道路两旁是高大的棕榈树和盛开的九重葛，紫红色的花瀑几乎要溅到行人肩上。咖啡馆的露天座位就摆在路边，老人们喝着浓黑的小杯咖啡，下着一盘似乎永远下不完的棋，棋子落在木板上的清脆“哒哒”声，和海浪轻拍堤岸的“哗哗”声，构成了小镇永恒的背景音。这里没有匆忙的脚步声，只有穿着人字拖的当地人提着装满意大利面的网袋，慢悠悠地走过，和你眼神相遇时，会给你一个毫不设防的、带着阳光痕迹的微笑。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇的核心魅力，在于它那种“入世”又“出世”的奇妙平衡。它绝非与世隔绝的孤岛，渡轮和公路将它与外面的世界紧密相连，杜布罗夫尼克的辉煌历史它是亲历者和分担者。然而，它又聪明地为自己保留了一份矜持的静谧。两个新月形的海湾——察夫塔特湾和舒潘斯卡湾，像母亲温柔环抱的双臂，将地中海的波涛与喧嚣轻轻挡在外面，只留下平静如镜的内海。这份宁静，让它成了艺术家、思想家和那些单纯想喘口气的旅人的理想避难所。你会发现，这里的灵魂不在雄伟的城堡里，而在海湾边随意停泊的彩色小木船里，在午后教堂阴影下打盹的猫咪身上，在每一扇敞开的窗扉后飘出的、炖煮海鲜的浓郁香气里。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`察夫塔特`} />
                <InfoRow label="英文名称" value={`Cavtat`} />
                <InfoRow label="正式名称" value={`Cavtat`} />
                <InfoRow label="国家" value={`克罗地亚`} />
                <InfoRow label="城市" value={`察夫塔特`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`古希腊人的定居点，古罗马帝国的自治城邦，杜布罗夫尼克共和国精英的退隐田园与最终归宿。`} />
                <InfoRow label="建筑特色" value={`红瓦石屋依山而建，层层叠叠环绕着两个如蓝丝绒口袋般的宁静海湾，达尔马提亚海岸建筑的典范。`} />
                <InfoRow label="建筑风格" value={`以文艺复兴和巴洛克风格为主，融合了威尼斯共和国的精致与奥斯曼帝国影响下的本地石工技艺。`} />
                <InfoRow label="文化价值" value={`这里不仅是地理上的避风港，更是克罗地亚最伟大雕塑家梅什特罗维奇精神世界的永恒映照与安息之地。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇公共区域全天开放。主要景点如拉契奇陵墓、圣尼古拉斯教堂、察夫塔特画廊等开放时间各异，通常为夏季（4月至10月）每天9:00-19:00，冬季（11月至3月）开放时间缩短或需提前预约。镇上的博物馆周一普遍闭馆。具体时间行前务必查询官网确认。`} />
              <InfoRow label="门票价格" value={`进入小镇免费。主要景点单独售票：拉契奇陵墓约30库纳，圣尼古拉斯教堂博物馆约20库纳，察夫塔特画廊约25库纳。有出售联票，约70库纳可涵盖3-4个主要场馆。学生、儿童及团体有优惠。建议携带少量现金。`} />
              <InfoRow label="地址" value={`Cavtat, 20210, Dubrovačko-neretvanska županija, Croatia`} />
              <InfoRow label="交通方式" value={`最便捷的方式是从杜布罗夫尼克出发。从杜布罗夫尼克机场到察夫塔特仅5公里，打车约10分钟，费用约100库纳。从杜布罗夫尼克老城（主港口或格鲁日港）有频繁的渡轮（一种可爱的木制小客船）前往，航程约45分钟，单程票价约50库纳，沿途欣赏海岸线风光是体验的一部分。也有10路公共汽车从杜布罗夫尼克主车站发车，车程约30-40分钟。自驾非常方便，小镇入口有付费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`察夫塔特的故事，是一部浓缩的地中海史诗，基调是辉煌、毁灭与优雅的重生。早在公元前6世纪，来自希腊的殖民者就发现了这个拥有两个天然良港的完美半岛，他们在这里建立了城市，叫它“埃皮达鲁斯”。你能想象吗？当雅典卫城还在兴建时，这里的希腊人已经坐在半圆形剧场里，观看来自爱琴海的戏剧了。古罗马人接掌后，赋予了它更大的荣光，将其升格为自治市，城市规模不断扩大。至今，你仍能在小镇的土壤下，在某个不起眼的角落，找到罗马别墅的马赛克地砖碎片，它们是这个小镇古老血脉的第一层证据。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，命运的转折点在公元7世纪到来。南下的斯拉夫人和阿瓦尔人席卷了达尔马提亚海岸，繁荣的罗马城市埃皮达鲁斯在战火中化为废墟。幸存下来的居民，向北逃难，在一块更易防守的岩石上建立了新的家园——那就是后来声名显赫的拉古萨，也就是我们今天熟知的杜布罗夫尼克。可以说，没有察夫塔特（埃皮达鲁斯）的陷落，或许就没有杜布罗夫尼克的诞生。察夫塔特以自身的湮灭，换来了另一个更伟大的传奇的开端。之后的几个世纪，这里只是一个名不见经传的小渔村，在威尼斯共和国和奥斯曼帝国的夹缝中默默生存。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的文艺复兴，要等到杜布罗夫尼克共和国迎来自己的黄金时代。富有的商船主、博学的贵族和退休的共和国高官，开始把目光投回这个祖先的故地。他们在这里建造起一栋栋夏季度假别墅，将威尼斯的文艺复兴和巴洛克建筑风格带了过来。于是，渔村渐渐蜕变成一个精致的滨海小镇，成为共和国精英们的“后花园”和沉思之地。这段历史，给察夫塔特注入了一种独特的基因：它不是暴发户式的奢华，而是一种沉淀下来的、充满书卷气和艺术感的闲适。小镇的肌理里，镌刻着拉古萨人对于美、宁静和智慧生活的追求。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间的河流流淌到20世纪，察夫塔特迎来了一位将它的人文气质推向巅峰的人物——伊万·梅什特罗维奇。这位被誉为克罗地亚最伟大的雕塑家，在经历世界大战的动荡与个人悲欢后，选择将察夫塔特作为他艺术生命的最后归宿。他不仅在这里居住创作，更亲自设计并建造了圣十字教堂（又名拉契奇陵墓），作为对挚友的纪念和自身艺术理念的终极表达。这件杰作，如同一颗嵌入小镇身体的灵魂宝石，彻底改变了察夫塔特的文化坐标。它不再仅仅是杜布罗夫尼克的美丽附庸，而是一个拥有独立艺术重量的圣地。梅什特罗维奇本人最终也长眠于此，他的精神与这座小镇的海风、岩石和光影永久地融合在了一起。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的察夫塔特一日游，应该是一场从海面开始、在山巅沉思、最后回归日常烟火的心灵漫步。建议乘坐早上9点左右从杜布罗夫尼克开出的渡轮抵达，此时晨光柔和，游客未至，小镇刚刚苏醒。整体游览无需匆忙，预留6-8小时为佳，核心节奏是“慢”。路线设计为一条优雅的环线：从码头开始，沿着右手边的海滨大道顺时针漫步，沉浸于海湾的视觉盛宴；然后深入小镇中心，探访核心历史与艺术遗迹；接着向上攀登至半岛顶端的山头墓地，收获全景与哲思；最后从另一侧下山，经过宁静的住宅区回到起点，完成一个圆满的循环。这样的安排，让你能全方位感受察夫塔特的层次——它的美、它的历史、它的艺术高度，以及它活生生的日常生活。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避免在上午11点至下午3点之间攀登山顶墓地，毫无遮阴的石阶路在烈日下会非常炎热煎熬。
小镇多数小商家和博物馆只接受现金（库纳或欧元），务必提前换好，虽然海湾边有ATM机但可能排队。
穿着绝对要舒适，尤其是鞋子，小镇的街道以大理石和碎石坡路为主，高跟鞋在这里毫无用武之地。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从码头下船后，别急着往里冲，先在临海的石阶上坐几分钟，看海水如何从墨绿渐变为宝石蓝`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着右侧的滨海大道（Riva）慢慢走，让左手边停满彩色小船的海港和右手边爬满九重葛的古老石墙带你进入电影场景`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在道路尽头左转，走向那座从任何角度看都充满几何美感的白色建筑——拉契奇陵墓（圣十字教堂），感受光线在穹顶和雕塑上创造的寂静戏剧`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观完陵墓后，拐进后方的小巷，找到圣尼古拉斯教堂，走进它那收藏着古老银质圣物和精美画作的小型博物馆`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着教堂旁有明显坡度的石阶路开始向上攀登，穿过一片安静的本地居民区，聆听百叶窗后传来的生活声响`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`坚持爬到半岛最高点的圣罗科教堂和老墓地，这里没有阴森，只有无与伦比的360度海景和对生命宁静的眺望`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从墓地的另一侧小路下山，你会经过梅什特罗维奇曾经的别墅（现为画廊），感受艺术如何与生活空间交融`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后回到滨海大道的另一侧，随便找一家有遮阳棚的临海餐厅，点一盘当天捕捞的烤鱼或黑烩饭，让味蕾记住亚得里亚海的味道`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`拉契奇陵墓侧面拱廊`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到日落时分，阳光斜射入拱廊，在纯白墙面上拉出长长的、富有韵律感的阴影，人物站在拱门下剪影或侧影极具建筑感和神圣感`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从舒潘斯卡湾对岸远眺`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，站在小镇对面（可沿主路往杜布罗夫尼克方向走一段）的海边，可以拍到整个察夫塔特半岛建筑群倒映在平静如镜海湾中的完整全景`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`山顶墓地眺望台`}</h4>
                  <p className="text-sm text-gray-700">{`任何光线充足的时候，但以金色晨曦或傍晚蓝调时刻为佳，以十字架或古老柏树为前景，框住山下红瓦屋顶、两个海湾和远处无尽深蓝亚得里亚海的多层次画面`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`滨海大道彩色小船`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，海水最是清澈见底，蹲下来低角度拍摄港湾里密集停泊的传统木制小船（“leuti”），捕捉它们鲜艳的油漆颜色与水波荡漾形成的抽象图案`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄拉契奇陵墓内部是严格禁止的，请务必尊重这一规定，室外建筑则随意。小镇居民非常注重隐私，拍摄民居和阳台时请尽量使用长焦，避免对准窗户或私人庭院。亚得里亚海的光线在夏季中午过于强烈刺眼，建议将重要的外景拍摄安排在上午十点前或下午四点后。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`海港边的历史石屋`}</h4>
                  <p className="text-sm text-blue-800">{`直接住在Riva滨海大道上经过翻修的百年石屋里，清早推开木窗就能看到渔夫整理渔网，夜晚在阳台上听着轻柔的海浪声入睡`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`隐居山腰的艺术家公寓`}</h4>
                  <p className="text-sm text-green-800">{`位于小镇上半部安静住宅区，由本地艺术家打理，装饰充满个性，拥有一个可以俯瞰部分海湾和屋顶的私人露台，适合想要静处和创作的旅人`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端精品酒店体验`}</h4>
                  <p className="text-sm text-yellow-800">{`半岛尖端隐秘处的小型精品酒店，每间房都拥有无敌海景露台，提供由悬崖泳池、米其林推荐餐厅和管家服务构成的奢华静谧`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济实惠的家庭旅馆`}</h4>
                  <p className="text-sm text-purple-800">{`由本地家庭经营的“sobe”（客房），通常位于主路后方的巷子里，房间干净温馨，主人会热情地为你准备丰盛的自制早餐并分享最地道的玩法`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（7-8月）务必提前至少2-3个月预订，尤其是海景房。小镇治安极好，夜晚非常安全。选择山上的住宿意味着需要每天爬坡，但换来的视野和静谧绝对物超所值，如果行李沉重或体力有限，优先选择码头附近的住宿。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开察夫塔特的时候，我的背包里没有多一件纪念品，但心里却像被那两个海湾的海水洗涤过一般，清澈而平静。我忽然明白了这个地方最珍贵的馈赠，不是某个具体的景点，而是一种“可呼吸的节奏”。在当今这个所有古城都在拼命将自己包装成 Instagram 背景板的时代，察夫塔特固执地保留着一种老派的尊严。它不讨好，不喧嚣，只是静静地存在着，像一位经历过沧海桑田却选择沉默的智者，你愿意来倾听，它便在你耳边低语历史与艺术的故事；你只想发呆，它便给你一片最蓝的海和一条可以一直走到夕阳里的长堤。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`对于每一位真正热爱深度游的旅人来说，察夫塔特更像是一剂必需的“解毒剂”。它就在举世闻名的杜布罗夫尼克身旁，却提供了一个截然相反的镜像：如果杜布罗夫尼克是一曲宏伟激昂的交响乐，察夫塔特就是乐章之间那段令人回味无穷的柔板间歇。它教会我们，旅行的意义不仅在于追逐清单上的地标，更在于找到那样一个地方，能让你心安理得地“浪费”时间，看光影在古老墙面上缓慢移动，听钟声和海浪声对话，感受自己与历史、自然和内心重新连接。这里，或许就是你一直在寻找的那个，能让灵魂靠岸的港口。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
