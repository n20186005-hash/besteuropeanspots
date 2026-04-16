import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '班贝格老城 Bamberg Old Town｜邂逅“水畔小威尼斯”与烟熏啤酒的童话 - 最佳欧洲景点',
  description: '第一眼看到班贝格，你会觉得自己不小心闯进了一本立体的中世纪童话书。火车缓缓进站，窗外忽然掠过一片层层叠叠、挤挤挨挨的红色屋顶，它们像海浪一样顺着七座柔和的山丘起伏，而尖顶的教堂和朴素的民居就散落在这片“海浪”之中。走出车站，沿着略带坡度的街道往老城中心走，空气里渐渐混入了一种特别的气味——那是雷格尼...',
}

export default function BambergOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '班贝格老城', href: '/attractions/bamberg-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`班贝格老城・Bamberg Old Town・德国・班贝格`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到班贝格，你会觉得自己不小心闯进了一本立体的中世纪童话书。火车缓缓进站，窗外忽然掠过一片层层叠叠、挤挤挨挨的红色屋顶，它们像海浪一样顺着七座柔和的山丘起伏，而尖顶的教堂和朴素的民居就散落在这片“海浪”之中。走出车站，沿着略带坡度的街道往老城中心走，空气里渐渐混入了一种特别的气味——那是雷格尼茨河略带水腥气的湿润，混合着从古老石缝里透出的苔藓味，偶尔还有拐角面包店飘出的、热烘烘的黄油卷香气。你的耳朵会先于眼睛捕捉到这座城市的心跳：不是汽车的噪音，而是流水永恒的潺潺声，还有从某个小巷深处传来的、若有若无的教堂钟鸣。
这座城市最打动人心的，是它与水那剪不断理还乱的亲密关系。雷格尼茨河在这里分叉，形成了一个迷人的河心岛，而老市政厅就像一艘石制的巨轮，奇迹般地“停泊”在河中央的两座桥之间。站在桥上，向左看，是被称为“小威尼斯”的一排排色彩柔和的渔民老屋，木质的阳台探向水面，窗台上开满天竺葵。清晨，你能看到老先生在自家的小码头上慢悠悠地整理渔网，那画面宁静得仿佛几个世纪未曾改变。向右看，则是陡峭的阶梯通往山丘上的大教堂区，那里矗立着神圣罗马帝国的威严。水的灵动与山的沉稳，市井的烟火与宗教的肃穆，在这里达成了不可思议的和谐。
而班贝格的灵魂，或许还藏在一种独特的味道里。穿过蜿蜒的小巷，随便找一家看起来年头不小的酿酒馆走进去，你会闻到一种类似培根或篝火的烟熏味。这就是班贝格举世无双的“烟熏啤酒”。当地的酿酒师用山毛榉木熏烤麦芽，酿出的啤酒带着深邃的琥珀色和迷人的烟熏香气。下午三四点，本地人就开始聚在酒馆里，点上一杯“烟熏”，配一小份简单的奶酪或香肠，闲聊、看报，时光在这里变得缓慢而醇厚。这种啤酒不仅是饮品，更是班贝格人身份认同的一部分，一种扎根于土地与传统的骄傲。
在这里，历史不是锁在博物馆玻璃柜里的标本，而是你脚下被千万人走得光滑发亮的石板路，是河边妇人依旧在使用的浣洗台阶，是酒馆木桌上经年累月留下的杯底印记。班贝格老城最核心的魅力，就在于它从未死去。它呼吸着，生活着，将千年的层叠记忆，温柔地包裹在每一个日常的瞬间里，等待着慢下来的旅人去细细品味。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到班贝格，你会觉得自己不小心闯进了一本立体的中世纪童话书。火车缓缓进站，窗外忽然掠过一片层层叠叠、挤挤挨挨的红色屋顶，它们像海浪一样顺着七座柔和的山丘起伏，而尖顶的教堂和朴素的民居就散落在这片“海浪”之中。走出车站，沿着略带坡度的街道往老城中心走，空气里渐渐混入了一种特别的气味——那是雷格尼茨河略带水腥气的湿润，混合着从古老石缝里透出的苔藓味，偶尔还有拐角面包店飘出的、热烘烘的黄油卷香气。你的耳朵会先于眼睛捕捉到这座城市的心跳：不是汽车的噪音，而是流水永恒的潺潺声，还有从某个小巷深处传来的、若有若无的教堂钟鸣。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座城市最打动人心的，是它与水那剪不断理还乱的亲密关系。雷格尼茨河在这里分叉，形成了一个迷人的河心岛，而老市政厅就像一艘石制的巨轮，奇迹般地“停泊”在河中央的两座桥之间。站在桥上，向左看，是被称为“小威尼斯”的一排排色彩柔和的渔民老屋，木质的阳台探向水面，窗台上开满天竺葵。清晨，你能看到老先生在自家的小码头上慢悠悠地整理渔网，那画面宁静得仿佛几个世纪未曾改变。向右看，则是陡峭的阶梯通往山丘上的大教堂区，那里矗立着神圣罗马帝国的威严。水的灵动与山的沉稳，市井的烟火与宗教的肃穆，在这里达成了不可思议的和谐。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而班贝格的灵魂，或许还藏在一种独特的味道里。穿过蜿蜒的小巷，随便找一家看起来年头不小的酿酒馆走进去，你会闻到一种类似培根或篝火的烟熏味。这就是班贝格举世无双的“烟熏啤酒”。当地的酿酒师用山毛榉木熏烤麦芽，酿出的啤酒带着深邃的琥珀色和迷人的烟熏香气。下午三四点，本地人就开始聚在酒馆里，点上一杯“烟熏”，配一小份简单的奶酪或香肠，闲聊、看报，时光在这里变得缓慢而醇厚。这种啤酒不仅是饮品，更是班贝格人身份认同的一部分，一种扎根于土地与传统的骄傲。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这里，历史不是锁在博物馆玻璃柜里的标本，而是你脚下被千万人走得光滑发亮的石板路，是河边妇人依旧在使用的浣洗台阶，是酒馆木桌上经年累月留下的杯底印记。班贝格老城最核心的魅力，就在于它从未死去。它呼吸着，生活着，将千年的层叠记忆，温柔地包裹在每一个日常的瞬间里，等待着慢下来的旅人去细细品味。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`班贝格老城`} />
                <InfoRow label="英文名称" value={`Bamberg Old Town`} />
                <InfoRow label="正式名称" value={`Town of Bamberg`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`班贝格`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座在二战炮火中奇迹般完整幸存的中世纪与巴洛克明珠，完美展现了中欧主教城市的发展脉络。`} />
                <InfoRow label="建筑特色" value={`城市肌理层次分明，建筑密集地簇拥在雷格尼茨河七座山丘之上，屋顶的红色与河流的绿色交织成独特画卷。`} />
                <InfoRow label="建筑风格" value={`罗马式、哥特式与巴洛克风格在狭窄的街巷中奇妙共存，毫无违和感。`} />
                <InfoRow label="文化价值" value={`作为联合国教科文组织世界遗产，它不仅是一座建筑博物馆，更是活生生的、呼吸着的千年历史见证，被誉为“法兰克尼亚的罗马”。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城公共区域全天开放。主要建筑如班贝格主教座堂开放时间为夏季（4月至10月）9:30-18:00，冬季（11月至3月）9:30-17:00；老市政厅博物馆开放时间为周二至周日9:30-16:30。多数教堂在白天开放供参观，但请注意午间可能有休息时段。圣诞节及元旦部分场馆闭馆。`} />
              <InfoRow label="门票价格" value={`进入老城街区免费。主教座堂免费。老市政厅历史博物馆门票约7欧元，学生票约6欧元。提供联票（班贝格博物馆通票），约12欧元，可参观多个市立博物馆。14岁以下儿童及持有巴伐利亚宫殿年票者免费。`} />
              <InfoRow label="地址" value={`Altstadt, 96047 Bamberg, Germany`} />
              <InfoRow label="交通方式" value={`从最近的纽伦堡机场（NUE）出发，最便捷的方式是乘坐火车。在机场火车站乘坐S-Bahn（S1或S2线）前往纽伦堡主火车站（约12分钟，班次频繁）。在纽伦堡主火车站换乘前往班贝格的区域快车（RE），车程约50分钟至1小时，每小时至少1-2班。抵达班贝格火车站后，老城中心就在步行范围内（约15-20分钟），亦可搭乘市内公交车（如901路）在“ZOB”或“Geyerswörthstraße”站下车。建议购买巴伐利亚州票，适用于区域内所有慢车及市内公交，非常划算。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`班贝格的故事，始于一场野心与信仰的交织。公元1007年，神圣罗马帝国皇帝亨利二世做出了一个至关重要的决定：在这片雷格尼茨河蜿蜒、山丘起伏的土地上，建立一个新的主教区。他的动机非常明确——他要打造一个“新的罗马”，一个完全听命于皇帝、能够巩固帝国在东部边疆统治的基督教中心。于是，班贝格从一个小定居点，一跃成为帝国直轄的主教亲王采邑，开始了它作为政教合一权力中心的辉煌岁月。亨利二世和他的妻子库尼贡德皇后对这座城市倾注了巨大心血，他们从各地招来能工巧匠，兴建宏伟的主教座堂和宫殿。传说库尼贡德皇后曾为了证明自己的贞洁，赤脚走过烧红的犁铧而无恙，这段传奇后来使她成为圣徒，也永远镌刻在班贝格的记忆里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`权力与财富的聚集，自然吸引了商人与工匠。到了12、13世纪，市民阶层逐渐壮大，他们不满于主教和贵族垄断一切。一场精彩的城市空间争夺战悄然上演。当时的主教不愿将城内宝贵的土地分给市民修建市政厅，于是聪明的市民们想出了一个绝妙的办法：他们在雷格尼茨河中打下木桩，填土造出了一个人工岛，硬生生在河中央建起了自己的权力象征——那座如今成为城市名片的“河中市政厅”。这简直是一个建筑学的宣言：我们不属于你主教的山上，也不属于任何贵族的领地，我们属于我们自己创造的、这片流动的疆域。市政厅外墙上那幅著名的湿壁画也暗藏玄机，画中一个小天使的腿“伸”出了壁画框架，变成了真实的立体雕塑，这幽默而大胆的设计，仿佛也在嘲笑着旧秩序的界限。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的进程并非一帆风顺。17世纪的三十年战争如一场恐怖的瘟疫席卷了整个欧洲，班贝格也未能幸免。城市多次被占领、洗劫，人口锐减，经济凋敝。但就像凤凰涅槃，从战争的灰烬中，班贝格迎来了它的巴洛克黄金时代。18世纪初，在当时的主教亲王洛塔尔·弗朗茨和他的侄子、后来的“建筑主教”弗里德里希·卡尔·冯·舍恩博恩的推动下，一场轰轰烈烈的“巴洛克化”运动开始了。他们请来了当时顶级的建筑师，如约翰·丁岑霍费尔和巴尔塔萨·诺伊曼。不是为了推倒重来，而是以一种令人惊叹的包容性，将巴洛克的华丽与灵动，注入到中世纪的城市骨架之中。于是，你看到了在哥特式教堂旁边，拔地而起拥有精美灰泥装饰的巴洛克宫殿；狭窄的中世纪街道尽头，豁然开朗出现一个充满光影戏剧感的巴洛克广场。这种风格的叠加，没有冲突，只有对话，让班贝格成为了一个活生生的建筑史教科书。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正让班贝格成为今日我们所见的“奇迹”的，是20世纪那场最残酷的战争。二战期间，德国许多历史名城如科隆、德累斯顿都在盟军的轰炸中化为废墟。然而，由于一位美国艺术史教授的努力游说，班贝格因其无与伦比的历史价值被从主要轰炸目标名单中移除。当战争结束，满目疮痍的欧洲开始重建时，人们惊喜地发现，班贝格的老城几乎毫发无伤。它像一位沉睡的巨人，完整保留着中世纪的结构、文艺复兴的细节和巴洛克的辉煌。1993年，联合国教科文组织将班贝格老城列入世界遗产名录，给出的评语精准而深刻：班贝格是中世纪早期城市结构与巴洛克时期城市干预完美融合的杰出范例。它的历史，是一层又一层文明的堆积，每一层都清晰可辨，共同谱写了一曲关于权力、信仰、市民精神与艺术追求的宏大交响。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正领略班贝格的精髓，建议安排整整一天时间，抱着漫步和发现的心态，而不是赶场打卡。最佳抵达时间是清晨九点前，这时旅游团尚未涌入，“小威尼斯”的河面还笼罩着一层薄纱般的雾气，光线柔和，是拍照和感受宁静老城氛围的黄金时段。整体游览可以遵循“从水边到山上，再回到市井”的节奏。上午精力充沛时，先探索河区与老市政厅，然后攀登至大教堂区，俯瞰全城。中午在山顶的绿地或广场休息、简单午餐。下午则悠闲地走下坡，穿梭于迷宫般的小巷，探访隐蔽的庭院和特色的酿酒馆，最后以一杯地道的烟熏啤酒结束完美的一天。这样的安排张弛有度，能全方位体验班贝格地理与文化的层次感。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿一双绝对舒适防滑的鞋子，班贝格的山路和湿滑的河边石板路对高跟鞋是终极考验。
如果想在著名的 Schlenkerla 酒馆有座位，最好在下午四点前抵达，晚上和周末一位难求。
许多小巷非常狭窄安静，拍照和游览时请保持低声，尊重当地居民的私人空间。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨先从“小威尼斯”的河岸漫步开始，看阳光一点点洒亮那些漆成粉黄蓝绿的古老渔民小屋，和早起的船夫打个照面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在下桥仰望那座不可思议的、如船般矗立河心的老市政厅，仔细寻找外墙湿壁画上那个把腿伸出画框的顽皮小天使雕像。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过市政厅底部的拱门走廊，瞬间从水世界的宁静切换到熙熙攘攘的马克西米利安大街，感受城市脉搏的切换。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着指示牌开始攀登蜿蜒而上的坡道，在爬得微微气喘时回头，收获第一个俯瞰红色屋顶海洋与蜿蜒河流的惊喜视野。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进恢弘而略显幽暗的班贝格主教座堂，在静谧中寻找那座著名的“班贝格骑士”雕塑，感受中世纪石匠注入石头中的永恒生命力。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观完大教堂后，别忘了溜进毗邻的玫瑰园，这里是新宫殿的一部分，在爬满玫瑰的廊架下歇脚，眼前是整座老城如画卷般铺开。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后故意迷失在“修士山”或“砂石匠区”那些名字古怪的狭窄巷弄里，每一扇褪色的木门、每一个爬满藤蔓的庭院都可能藏着故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要在傍晚前钻进一家老牌酿酒馆，比如 Schlenkerla，在木质桌椅间坐下，点一杯冒着气泡的深色烟熏啤酒，让那种独特的风味为旅程画上味觉的句号。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`老市政厅与桥梁经典视角`}</h4>
                  <p className="text-sm text-gray-700">{`站在上桥或下桥的桥头，用广角镜头将童话般的市政厅、奔流的河水和背景的山丘教堂一同纳入画面，清晨或傍晚的光线能赋予水面金色光泽。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“小威尼斯”水道倒影`}</h4>
                  <p className="text-sm text-gray-700">{`清晨无风时，在“小威尼斯”对岸寻找一处无遮挡的河岸，蹲下低机位拍摄，让色彩斑斓的老屋与它们在平静水面上的完美倒影构成对称构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`大教堂前广场的骑士雕塑`}</h4>
                  <p className="text-sm text-gray-700">{`午后的阳光会从侧面照亮主教座堂入口的“班贝格骑士”雕像，用长焦镜头拉近，捕捉石像面容的坚毅与衣褶的流动感，背景虚化成宏伟的教堂门廊。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`新宫殿玫瑰园全景台`}</h4>
                  <p className="text-sm text-gray-700">{`这里是俯瞰老城的制高点，黄昏时分前来，等待城市华灯初上，用相机记录下屋顶的暖色灯光与深蓝天幕的对比，记得带上三脚架稳定长曝光。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`雷格尼茨河畔的浣洗台阶`}</h4>
                  <p className="text-sm text-gray-700">{`在“小威尼斯”区域寻找那些古老的、伸入水中的石阶，以台阶为引导线，拍摄当地人（或请同伴作为模特）坐在水边的静谧生活场景，故事感十足。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效减少河面及古老窗玻璃的反光，让建筑色彩更饱和、细节更突出。`}</li>
                <li>• {`在教堂内部拍摄前，务必看清是否有禁止拍照的标志，即使允许也请绝对关闭闪光灯，这是基本的尊重。`}</li>
                <li>• {`雨天不要沮丧，湿漉漉的石板路反射着灯光，是拍摄带有情绪氛围街景的绝佳时机，记得为相机做好防水措施。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`运河畔的历史民宿`}</h4>
                  <p className="text-sm text-blue-800">{`直接住在“小威尼斯”的一栋老渔夫房子里，推开木窗就能看到天鹅在窗下划过，夜晚只有流水声伴你入眠。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`山丘上的设计师酒店`}</h4>
                  <p className="text-sm text-green-800">{`由一栋巴洛克风格联排别墅改造，房间拥有极简现代设计，却保留了古老的木梁和拱顶，露台正对主教座堂，风景无价。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`老城中心的家庭式公寓`}</h4>
                  <p className="text-sm text-yellow-800">{`藏在谷物市场广场旁一条安静的小巷里，房东太太会为你准备好当地特色的早餐篮，让你像本地人一样从市集采购开始一天。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`修道院改造的静谧旅馆`}</h4>
                  <p className="text-sm text-purple-800">{`位于稍远离核心区但步行可达的旧修道院建筑内，房间挑高极高，环绕着宁静的内庭花园，适合寻求绝对宁静的旅人。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`班贝格老城内的住宿数量有限且非常抢手，尤其在夏季啤酒节和圣诞市场期间，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`选择住在山上（大教堂区）风景绝佳，但意味着每天都要爬坡；住在河边（市场区）则出行餐饮更方便，可根据体力权衡。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`老建筑隔音可能不佳，且大多没有电梯，预订时如有需要可特别询问。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开班贝格许久后，我发现自己最怀念的，并非某一座具体的建筑，而是那种时间在这里变得黏稠、缓慢的独特质感。在这个一切都在加速的时代，班贝格像一个倔强的逆行者。它没有被战争摧毁，也没有被盲目的现代化改造所侵蚀，它只是静静地、完整地坐在那里，让七个山丘和一条河流讲述着一千年的故事。走在它的巷子里，你会不自觉地放慢脚步，因为每一步都可能踩在不同的历史上——罗马式的厚重、哥特式的尖耸、巴洛克的繁复，它们层层叠叠，像一本永远读不完的书。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这个地方教会我，真正的深度不是去更多的地方，而是在一个地方待得足够久，久到能听懂它的低语。班贝格就是这样一个值得你“浪费”时间的地方。它让你明白，历史不是遥远的过去，而是构成我们当下生活的每一块砖石、每一道光线、每一种味道。当你坐在雷格尼茨河边，看着夕阳把老市政厅染成金色，手里那杯烟熏啤酒的香气萦绕不去时，你会感到一种罕见的平静。这种平静，来自于与一段连续、完整、未被粗暴打断的人类文明历程的连接。对于任何一位厌倦了浮光掠影、渴望在旅途中触碰真实历史纹理与生活温度的旅人来说，班贝格老城都不该仅仅是一个途经点，而应该是一个目的地，一个让你停下来、深呼吸、并重新找回生活密度的精神故乡。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
