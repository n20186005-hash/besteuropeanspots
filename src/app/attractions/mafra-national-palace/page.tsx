import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '马夫拉宫 Mafra National Palace｜葡萄牙巴洛克巅峰，藏着世界最美图书馆之一的绝代双骄 - 最佳欧洲景点',
  description: '朋友，想象一下，当你从里斯本北上的蜿蜒公路驶出，一片开阔的平原尽头，突然升起一座如山峦般庞大的浅色石头建筑。那不是一座城堡，也不是单独的教堂，而是一整片连绵不绝的宫殿与塔楼，在伊比利亚半岛炽热的阳光下，散发着一种近乎冷漠的威严。这就是马夫拉宫给你的第一记视觉重拳。它太大了，大到你的相机镜头需要退得很...',
}

export default function MafraNationalPalacePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '葡萄牙', href: '/destinations/portugal' },
            { label: '马夫拉宫', href: '/attractions/mafra-national-palace' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`马夫拉宫・Mafra National Palace・葡萄牙・马夫拉（里斯本大区）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，当你从里斯本北上的蜿蜒公路驶出，一片开阔的平原尽头，突然升起一座如山峦般庞大的浅色石头建筑。那不是一座城堡，也不是单独的教堂，而是一整片连绵不绝的宫殿与塔楼，在伊比利亚半岛炽热的阳光下，散发着一种近乎冷漠的威严。这就是马夫拉宫给你的第一记视觉重拳。它太大了，大到你的相机镜头需要退得很远很远，才能勉强把它全部装进去。那种压迫感，不是来自阴森，而是来自一种近乎狂妄的规整与对称，仿佛上帝用巨尺在这里画下了一道关于权力的几何题。
走近它，你会先听到水声。宫殿前巨大的广场上，对称排列着精美的喷泉，水珠溅落在石盆里的声音，在空旷的天地间显得格外清晰，反而衬得四周更静。触摸那些被时光打磨得温润的石灰岩墙壁，你能感受到石匠们斧凿的痕迹。穿过厚重的大门，世界瞬间切换。外面是广阔的田野和小镇生活气息，里面则是另一个由大理石、镀金木雕、彩色大理石拼花和无数油画构成的宇宙。空气里是古老的木头、石头和一丝若有若无的蜡油气味。最神奇的是，这里既是国王的奢华寝宫，又是修士们苦修的清贫修道院，两种截然相反的灵魂被强行糅合在同一座建筑里，那种张力无处不在。
但马夫拉宫的真正灵魂，不在国王的宝座上，而在那个被誉为“世界最美之一”的图书馆里。当你推开那扇门，时间仿佛凝固了。那是一个长达88米的华丽长廊，地面是玫瑰色、灰色和白色大理石铺成的几何图案，头顶是筒形拱顶，绘着精致的壁画。但最夺人心魄的，是两侧直抵穹顶的胡桃木书架，它们像两列沉默的巨人，守卫着约三万六千卷珍贵的古老书册——许多是15到18世纪的皮革封面珍本。光线从高侧窗温柔洒入，尘埃在光柱中起舞，空气里弥漫着陈旧羊皮纸和木头特有的、令人心安的醇香。这里安静得能听到自己的心跳。你会瞬间明白，为什么葡萄牙大作家萨拉马戈称它为“一个学习寂静的地方”。
在马夫拉镇居民的生活里，这座宫殿既是庞然的地标，也是日常的背景。他们可能在它的阴影下举办集市，在它的教堂里举行婚礼，对它惊人的尺度早已习以为常。然而，每当黄昏降临，建筑的轮廓被夕阳镀上金边，教堂的钟声敲响，回荡在整个山谷时，你依然能感受到，这座建筑如何定义了这片土地的时间和空间。它不是一个死去的博物馆，而是一个依然在呼吸的、承载着历史重量的生命体。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，想象一下，当你从里斯本北上的蜿蜒公路驶出，一片开阔的平原尽头，突然升起一座如山峦般庞大的浅色石头建筑。那不是一座城堡，也不是单独的教堂，而是一整片连绵不绝的宫殿与塔楼，在伊比利亚半岛炽热的阳光下，散发着一种近乎冷漠的威严。这就是马夫拉宫给你的第一记视觉重拳。它太大了，大到你的相机镜头需要退得很远很远，才能勉强把它全部装进去。那种压迫感，不是来自阴森，而是来自一种近乎狂妄的规整与对称，仿佛上帝用巨尺在这里画下了一道关于权力的几何题。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近它，你会先听到水声。宫殿前巨大的广场上，对称排列着精美的喷泉，水珠溅落在石盆里的声音，在空旷的天地间显得格外清晰，反而衬得四周更静。触摸那些被时光打磨得温润的石灰岩墙壁，你能感受到石匠们斧凿的痕迹。穿过厚重的大门，世界瞬间切换。外面是广阔的田野和小镇生活气息，里面则是另一个由大理石、镀金木雕、彩色大理石拼花和无数油画构成的宇宙。空气里是古老的木头、石头和一丝若有若无的蜡油气味。最神奇的是，这里既是国王的奢华寝宫，又是修士们苦修的清贫修道院，两种截然相反的灵魂被强行糅合在同一座建筑里，那种张力无处不在。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但马夫拉宫的真正灵魂，不在国王的宝座上，而在那个被誉为“世界最美之一”的图书馆里。当你推开那扇门，时间仿佛凝固了。那是一个长达88米的华丽长廊，地面是玫瑰色、灰色和白色大理石铺成的几何图案，头顶是筒形拱顶，绘着精致的壁画。但最夺人心魄的，是两侧直抵穹顶的胡桃木书架，它们像两列沉默的巨人，守卫着约三万六千卷珍贵的古老书册——许多是15到18世纪的皮革封面珍本。光线从高侧窗温柔洒入，尘埃在光柱中起舞，空气里弥漫着陈旧羊皮纸和木头特有的、令人心安的醇香。这里安静得能听到自己的心跳。你会瞬间明白，为什么葡萄牙大作家萨拉马戈称它为“一个学习寂静的地方”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在马夫拉镇居民的生活里，这座宫殿既是庞然的地标，也是日常的背景。他们可能在它的阴影下举办集市，在它的教堂里举行婚礼，对它惊人的尺度早已习以为常。然而，每当黄昏降临，建筑的轮廓被夕阳镀上金边，教堂的钟声敲响，回荡在整个山谷时，你依然能感受到，这座建筑如何定义了这片土地的时间和空间。它不是一个死去的博物馆，而是一个依然在呼吸的、承载着历史重量的生命体。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`马夫拉宫`} />
                <InfoRow label="英文名称" value={`Mafra National Palace`} />
                <InfoRow label="正式名称" value={`Palácio Nacional de Mafra`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`马夫拉（里斯本大区）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`葡萄牙国王若昂五世为兑现得子誓言而兴建的宏伟建筑，是葡萄牙帝国黄金时代国力与野心的最壮观象征。`} />
                <InfoRow label="建筑特色" value={`集皇家宫殿、方济各会修道院和宏伟教堂于一体的巨大建筑群，以其令人震撼的尺度、精准的对称和内部无与伦比的图书馆闻名。`} />
                <InfoRow label="建筑风格" value={`葡萄牙晚期巴洛克风格，并受到意大利和德国建筑元素的深刻影响，内部装饰则融合了洛可可与新古典主义。`} />
                <InfoRow label="文化价值" value={`不仅是宗教虔诚与王权结合的纪念碑，更因其图书馆和音乐学校，成为18世纪葡萄牙重要的知识、艺术与音乐中心。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`宫殿主体开放时间为周三至周一，上午9:30至下午5:30，最后入场时间为下午5:00；每周二、1月1日、复活节周日、5月1日和12月25日闭馆。请注意，皇宫、修道院和图书馆的参观区域和开放时间可能独立调整，尤其是图书馆，有时需要跟随导览团或在特定时段才能进入，出行前务必在其官网二次确认。`} />
              <InfoRow label="门票价格" value={`标准门票（包含宫殿、修道院、教堂及图书馆）为成人6欧元；65岁以上老人及持有效学生证者享有50%折扣，票价为3欧元；12岁以下儿童免费入场。每个月的第一个周日，对所有人免费开放（节假日除外）。购买里斯本卡可能享有折扣。教堂区域免费进入。`} />
              <InfoRow label="地址" value={`Terreiro Dom João V, 2640 Mafra, Portugal`} />
              <InfoRow label="交通方式" value={`从里斯本出发是最佳选择。在里斯本的 Campo Grande 地铁站附近，乘坐快速巴士（Mafrense公司）即可直达马夫拉镇中心，车程约45分钟至1小时，班次频繁。若自驾，从里斯本沿A8或A21高速公路向北行驶约40公里即可到达，宫殿外有收费停车场。如果乘坐火车，可以从里斯本的 Oriente 或 Rossio 火车站乘车到马夫拉附近的 Malveira 或 Mafra-Gare 站，但下车后仍需转乘短途出租车或当地公交（约10-15分钟车程）才能抵达宫殿。建议直接乘坐巴士，最为便捷。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`这个故事得从一个国王的誓言说起。时间回到1711年，葡萄牙国王若昂五世和奥地利公主玛丽亚·安娜结婚数年，却一直没有子嗣，这直接威胁到布拉干萨王朝的延续。在巨大的压力下，虔诚的国王向方济各会修士许下诺言：如果上帝赐予他一个后代，他将在马夫拉这个小地方修建一座修道院。或许是祈祷应验了，就在同年，未来的公主玛丽亚·芭芭拉诞生了。国王大喜过望，决定兑现誓言，但他要建的，可绝不仅仅是一座普通的修道院。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`若昂五世是个野心勃勃的君主，当时的葡萄牙正享受着来自巴西黄金和钻石的巨大财富，国力鼎盛。他想借此机会，建造一座能与欧洲其他王室，特别是他的姻亲、强大的哈布斯堡家族相媲美的纪念性建筑。于是，最初的计划像雪球一样越滚越大。他从意大利请来了著名建筑师若昂·弗雷德里科·卢多维切，但工程的实际主导权很快落到了葡萄牙本土建筑师若昂·安图内斯和后来接手的德国人约翰·弗里德里希·路德维希手中。最初只计划容纳13名修士的小修道院，最终演变成一个需要容纳超过300名修士，并附带一座豪华皇家宫殿和一座巨型教堂的庞然大物。工程于1717年奠基，动用了整整一支军队的工人——据说高峰时期超过五万人，包括士兵、水手甚至罪犯，在全国范围内征集石料、木材和工匠。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`建造过程本身就是一部史诗。巨大的石材从远方运来，工人们在恶劣条件下劳作，疾病和事故时有发生。资金像流水般花费，几乎耗尽了巴西来的部分财富。但国王的意志不可动摇。建筑风格融合了当时欧洲的潮流，主体是严谨的巴洛克，但你能看到罗马圣彼得大教堂对其教堂立面的影响，也能看到德国建筑师带来的中欧细节。终于，在国王去世前两年，即1750年，这座历时33年、拥有超过1200个房间、156座楼梯、29个庭院和装饰着六架管风琴的教堂终于基本落成。它成了葡萄牙帝国黄金时代最耀眼，也最昂贵的“丰碑”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的讽刺来得很快。宫殿完工后不久，1755年那场摧毁里斯本的大地震也给马夫拉造成了损坏，需要大量修复。更致命的是，巴西的黄金潮逐渐退去，葡萄牙国力衰退，再也没有国王能负担得起这座宫殿的奢华运营。它迅速从权力中心变成了一个华丽而空洞的壳。19世纪初，拿破仑的军队入侵伊比利亚半岛，马夫拉宫被法军占领，遭受了洗劫和破坏，那些华丽的房间变成了军营和马厩，无数艺术品和家具流失。它见证了帝国的崛起，也亲历了帝国的衰落。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`十九、二十世纪，它的命运几经沉浮。一度几乎被遗弃，也曾作为军事学院和狩猎行宫。直到二十世纪中期，它才被系统地修复，并向公众开放。有趣的是，正是它的“大”和“空”，赋予它一种独特的文学气质。1995年，葡萄牙唯一诺贝尔文学奖得主若泽·萨拉马戈以其为背景，创作了小说《修道院纪事》，用魔幻现实的笔法讲述了建造它的疯狂与背后普通人的血泪。这部作品让马夫拉宫在文化意义上获得了新生。今天，当你漫步其中，你走过的不仅是国王和修士的足迹，也是无数无名工匠的生命轨迹，是一部用石头写就的、关于信仰、野心、荣耀与幻灭的民族史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正领略马夫拉宫的震撼，建议安排一整天的时间（至少5-6小时）。最好在上午9点半开门时就抵达，此时光线柔和，旅游团尚未涌入，你能在相对宁静中感受建筑的尺度。游览节奏宜慢不宜快，重点体验空间对比和细节之美。整体的路线逻辑应该是：从外部整体震撼，到内部宫殿的世俗奢华，再到修道院区域的清修简朴，最后抵达精神高潮——图书馆，并以宏伟的教堂作为终结。中午可以在宫殿内的咖啡厅或小镇上用餐。下午的光线非常适合拍摄建筑外立面和广场。记得穿一双非常舒适的鞋子，因为你将需要步行穿越无数个大厅、走廊和庭院。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必提前在官网查看图书馆的开放状态，它有时会因活动或维护而临时关闭，避免抱憾而归。
教堂在中午时分有时会举行弥撒，此时请保持安静并尊重宗教活动，游览可能会短暂受限。
宫殿内部地面多为大理石或木板，且房间巨大阴凉，建议穿着舒适防滑的鞋子并带一件薄外套。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`先从宫殿前广阔的 Terreiro de D. João V 广场开始，后退足够远，用身体感受这座建筑群令人屏息的横向延展与绝对对称。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`通过北侧的主入口进入皇家宫殿区，沿着铺着红毯的宏伟台阶上行，逐一参观国王与王后的豪华套房，留意对比镀金装饰的华丽与房间实际居住的冰冷感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过连接部，踏入修道院区域，气氛陡然一变，走过铺着蓝白瓷砖的简洁回廊，想象数百年前修士们在此默默踱步的寂静生活。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到并登上修道院的“病人室”，这个狭长的大厅曾是患病修士的休养所，其纯粹的古典拱廊和尽头的祭坛在光影下具有一种神圣的几何美感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`此行的重中之重，是踏入那座传奇的皇家图书馆，不要急着拍照，先静静地站几分钟，呼吸那混合了古老纸张与木头的气息，仰望那精美的拱顶壁画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从图书馆出来，顺着指示牌前往 Basilica，走进那座拥有双塔立面的巨大教堂内部，抬头凝视中央穹顶，并留心寻找那六架历史悠久、装饰华丽的管风琴。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间充裕且体力允许，可以参加导览参观教堂的穹顶顶部或钟楼区域（如果开放），从制高点俯瞰整个宫殿建筑群和马夫拉乡村的全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，从教堂正门走出，回到广场的喷泉边，在夕阳下回望整座宫殿，此时金色的光芒会让冰冷的石头变得温暖，是结束旅程的完美时刻。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`主立面全景拍摄点`}</h4>
                  <p className="text-sm text-gray-700">{`最佳位置在宫殿广场南侧边缘的草坪附近，使用广角镜头，下午四点到日落前的侧光能完美勾勒出建筑立体的雕塑和双塔的细节，将前景的喷泉或人物作为点缀以衬托建筑的宏大。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`图书馆长廊纵深构图`}</h4>
                  <p className="text-sm text-gray-700">{`站在图书馆入口处，使用对称构图，将两排通天书架和华丽的地面拼花作为引导线，指向尽头的窗户或雕塑，室内光线柔和，全天均可拍摄，但需注意关闭闪光灯。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`修道院回廊的几何光影`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个晴朗的上午，阳光能斜射进回廊时，拍摄蓝白瓷砖墙壁与连续拱廊形成的强烈光影节奏，焦点可以对准一个拱门或一扇古老的木门。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从国王阳台眺望广场`}</h4>
                  <p className="text-sm text-gray-700">{`在参观宫殿的国王套房时，通常会经过一个面向广场的大阳台，从这里可以拍摄到广场、喷泉和远处小镇的辽阔风景，尤其是黄昏时分，色彩最为丰富。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`教堂内管风琴特写`}</h4>
                  <p className="text-sm text-gray-700">{`在Basilica教堂内，寻找角度仰拍那些装饰着精美雕刻和金漆的古老管风琴，利用教堂内部的自然光晕，营造出神圣而庄严的氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`图书馆内严禁使用闪光灯和三脚架（通常也不允许使用），高感光度的相机或手机在稳定手持下拍摄效果更好。`}</li>
                <li>• {`拍摄教堂内部时，尊重宗教场所，避免在举行仪式时拍照，并将焦点更多地放在建筑和艺术细节上，而非礼拜者。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`马夫拉镇中心家庭旅馆，距离宫殿仅步行十分钟，主人会热情地为你手绘小镇美食地图，早晨在充满鸡蛋花香气的小院子里享用 homemade 早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`由古老农庄改造的乡村客栈，坐落在环绕马夫拉的丘陵上，房间是原始的石头墙壁，晚上可以欣赏毫无光污染的璀璨星空，感受与宫殿截然不同的宁静田园。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`里斯本市中心的历史遗产酒店，将现代化的奢华舒适融入古老建筑，白天游览马夫拉，晚上回到里斯本享受璀璨的都市夜生活和海鲜大餐，体验两种风情。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`深度沉浸`}</h4>
                  <p className="text-sm text-purple-800">{`埃里塞拉海滨民宿，这个冲浪胜地距离马夫拉只有20分钟车程，你可以白天探索历史文化，下午就去大西洋的海浪边追逐夕阳，享受历史与自然的双重馈赠。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`马夫拉镇本身很小，住宿选择有限且很快订满，尤其是旅游旺季和周末，建议至少提前一个月规划预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果选择住在里斯本，虽然需要往返交通，但夜晚的餐饮和娱乐选择会丰富无数倍，适合那些希望行程更多样的旅行者。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开马夫拉宫很久以后，那座建筑的影像依然会固执地停留在脑海里。它带给我的，不仅仅是对其规模与奢华的技术性惊叹，更是一种复杂的情感激荡。在这里，你能如此清晰地触摸到人类情感的两种极端：一方面是国王近乎孩童般的虚荣与野心，试图用无尽的石头和黄金来凝固时间、证明存在；另一方面，是图书馆里那种寻求永恒知识的静谧渴望，以及修道院回廊中指向内心信仰的简朴力量。这两种力量在此激烈碰撞、尴尬共存，最终都化为了令人无言以对的美丽。这何尝不是人类历史的一个缩影？我们总是在宏伟的建造与深沉的内省之间摇摆。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、崇尚极简的快节奏时代，马夫拉宫像是一个“冗余”的奇迹。它庞大、复杂、甚至有些“不切实际”。但正是这种“冗余”，为我们保存了一份关于尺度、野心、耐心与工艺的古老记忆。它提醒我们，曾经的人们愿意为了一种信念、一个承诺，付出几十年的光阴和一代人的汗水，去完成一件超越个人生命长度的作品。走在它的长廊里，你会不由自主地慢下来，安静下来。这里不需要你匆忙打卡，它强迫你去感受空间，去聆听寂静，去思考时间。对于每一位真正热爱深度游的旅人来说，马夫拉宫不仅是一个景点，更是一堂关于历史、人性和美的沉浸式哲学课。它让你明白，有些地方，之所以必须亲身抵达，是为了让那些存在于书本中的“巨大”、“奢华”或“美丽”，最终沉淀为你心中一份真实而复杂的重量。这份重量，会让你以后的旅途，看得更深，走得更远。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/fortress-of-almeida" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔梅达要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Almeida</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/evora-roman-temple" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃武拉罗马神庙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Roman Temple of Évora</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bom-jesus-do-monte-braga" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布拉加仁慈耶稣朝圣所</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bom Jesus do Monte</p>
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
