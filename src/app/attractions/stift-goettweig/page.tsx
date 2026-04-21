import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '格特维克修道院 Stift Göttweig｜俯瞰瓦豪河谷的巴洛克空中宫殿与“皇帝阶梯”-最佳欧洲景点',
  description: '你第一眼看见格特维克修道院，会觉得它不像一个宗教场所，更像一座从童话里飞来的空中宫殿。车子沿着瓦豪河谷的林间道路盘旋而上，一个巨大的黄色建筑群突然毫无防备地闯入视野，它稳稳地坐在海拔449米的山丘之巅，以一种近乎威严的平静，凝视着脚下如翡翠绸带般蜿蜒的多瑙河，以及两岸层层叠叠、整齐划一的葡萄园梯田。...',
}

export default function StiftGoettweigPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '奥地利', href: '/destinations/austria' },
            { label: '下奥地利州，靠近克雷姆斯', href: '/destinations/austria' },
            { label: '格特维克修道院', href: '/attractions/stift-goettweig' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`格特维克修道院・Göttweig Abbey・奥地利・下奥地利州，靠近克雷姆斯`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼看见格特维克修道院，会觉得它不像一个宗教场所，更像一座从童话里飞来的空中宫殿。车子沿着瓦豪河谷的林间道路盘旋而上，一个巨大的黄色建筑群突然毫无防备地闯入视野，它稳稳地坐在海拔449米的山丘之巅，以一种近乎威严的平静，凝视着脚下如翡翠绸带般蜿蜒的多瑙河，以及两岸层层叠叠、整齐划一的葡萄园梯田。那瞬间，你会忘了呼吸，只感到一种被巨大美震慑后的寂静。
当你穿过厚重的大门，真正踏入它的内部世界，那种感官的冲击会从宏大转向精微。外部是明亮的天光与呼啸的山风，内部却瞬间被一种幽凉、静谧、混合着古老石材、陈年木蜡和淡淡焚香的气场所包裹。阳光从高窗斜射进来，在磨得发亮的石地板上拉出长长的光带，尘埃在光柱中缓缓起舞。偶尔能听到远处修士经过时黑袍摩擦的窸窣声，或是某个小礼拜堂里传来极其轻微、宛如叹息般的祷告回声。这里的时间流速，仿佛比山下的世界慢了半拍。
而它最核心的魔力，在于那不可思议的“反差”。一方面，它是近千年修士们恪守清规、静默祷告的苦修之地；另一方面，它又是18世纪最狂野奢华的巴洛克艺术爆炸的现场。这种神圣与世俗、朴素与辉煌、内省与张扬的激烈对话，就凝聚在那座举世闻名的“皇帝阶梯”上。当你站在阶梯底部抬头仰望，才会明白，什么叫作“向上的眩晕”。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你第一眼看见格特维克修道院，会觉得它不像一个宗教场所，更像一座从童话里飞来的空中宫殿。车子沿着瓦豪河谷的林间道路盘旋而上，一个巨大的黄色建筑群突然毫无防备地闯入视野，它稳稳地坐在海拔449米的山丘之巅，以一种近乎威严的平静，凝视着脚下如翡翠绸带般蜿蜒的多瑙河，以及两岸层层叠叠、整齐划一的葡萄园梯田。那瞬间，你会忘了呼吸，只感到一种被巨大美震慑后的寂静。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你穿过厚重的大门，真正踏入它的内部世界，那种感官的冲击会从宏大转向精微。外部是明亮的天光与呼啸的山风，内部却瞬间被一种幽凉、静谧、混合着古老石材、陈年木蜡和淡淡焚香的气场所包裹。阳光从高窗斜射进来，在磨得发亮的石地板上拉出长长的光带，尘埃在光柱中缓缓起舞。偶尔能听到远处修士经过时黑袍摩擦的窸窣声，或是某个小礼拜堂里传来极其轻微、宛如叹息般的祷告回声。这里的时间流速，仿佛比山下的世界慢了半拍。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而它最核心的魔力，在于那不可思议的“反差”。一方面，它是近千年修士们恪守清规、静默祷告的苦修之地；另一方面，它又是18世纪最狂野奢华的巴洛克艺术爆炸的现场。这种神圣与世俗、朴素与辉煌、内省与张扬的激烈对话，就凝聚在那座举世闻名的“皇帝阶梯”上。当你站在阶梯底部抬头仰望，才会明白，什么叫作“向上的眩晕”。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`格特维克修道院`} />
                <InfoRow label="英文名称" value={`Göttweig Abbey`} />
                <InfoRow label="正式名称" value={`Stift Göttweig`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`下奥地利州，靠近克雷姆斯`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`被誉为“奥地利的梅尔克”，是瓦豪河谷世界文化遗产皇冠上的巴洛克明珠，既是千年精神中心，也是哈布斯堡王朝皇权威仪的展现。`} />
                <InfoRow label="建筑特色" value={`一座雄踞于森林山丘之巅、俯瞰多瑙河蜿蜒河谷的宏伟建筑群，其内部拥有堪称奥地利巴洛克艺术巅峰的“皇帝阶梯”及湿壁画。`} />
                <InfoRow label="建筑风格" value={`以18世纪早期辉煌的巴洛克风格为主，融合了部分中世纪修道院的古朴遗存。`} />
                <InfoRow label="文化价值" value={`它不仅是一座活跃的本笃会修道院，更是一个集宗教、艺术、历史、葡萄酒文化与绝美自然景观于一体的综合性文化圣地。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`修道院建筑群（包括博物馆、皇帝阶梯和部分庭院）通常在4月初至10月底对游客开放，每日开放时间为10:00-18:00。11月至次年3月仅周六、周日及公共节假日开放，时间为11:00-16:00，且部分内部区域可能关闭。修道院教堂全年免费开放，但受宗教活动时间影响。请注意，具体日期每年可能微调，出行前务必在其官网确认最新时间表。`} />
              <InfoRow label="门票价格" value={`成人票价为10欧元。持有有效学生证、老年证或10人以上团体可享受8欧元的优惠票价。家庭票（2名成人+最多3名儿童）为22欧元。6岁以下儿童免费。门票包含参观帝国公寓、博物馆、著名的皇帝阶梯及临时特展。仅参观教堂免费。建议在官网提前查看是否有联票或季节性折扣。`} />
              <InfoRow label="地址" value={`Stift Göttweig 1, 3511 Furth bei Göttweig, Austria`} />
              <InfoRow label="交通方式" value={`从维也纳出发是最佳选择。首先，从维也纳市中心乘坐开往克雷姆斯方向的区域火车（ÖBB），车程约1小时，班次频繁（每小时至少一班）。抵达克雷姆斯火车站后，转乘WLBA公司的760路或761路公共汽车，在“Stift Göttweig”站下车，车程约20分钟。巴士班次约为每小时一班，周末可能减少，务必提前查好时刻表衔接。自驾是最方便的方式，从维也纳或克雷姆斯出发均有清晰路标，修道院山下设有大型免费停车场，然后需要步行一段山坡路或搭乘季节性运营的迷你摆渡车上山。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要追溯到遥远的1083年。当时，奥地利的边疆还不太平，一位名叫阿尔特曼的帕绍主教决心在此建立一座修道院，作为传播信仰和稳固文明的前哨。最初的格特维克是罗马式的，风格坚实而朴素，修士们在此过着严格的克吕尼修会生活。中世纪几百年间，它像大多数修道院一样，在繁荣与劫难间摇摆，经历了扩建、火灾，也积累了珍贵的古籍与声望，成为地区重要的学术与精神灯塔。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，真正改变它命运的烈火在1718年降临。一场灾难性的大火几乎将中世纪的建筑吞噬殆尽。这场灾难，却意外地打开了一扇通向巴洛克辉煌时代的大门。当时的修道院长请来了那个时代最伟大的建筑大师之一——约翰·卢卡斯·冯·希尔德布兰特。这位也是维也纳贝尔维德宫的设计者，是巴洛克艺术最具创造力的灵魂。希尔德布兰特没有简单地修复，而是描绘了一个前所未有的蓝图：他要将这座修道院建造成一座“上帝的城堡”，一座彰显神圣荣耀与帝国威仪的“山巅之城”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，从18世纪初开始，一场长达数十年的艺术狂欢在这里上演。其中最璀璨的篇章，无疑是那架“皇帝阶梯”及其天花板上巨大的湿壁画。这幅名为《奥林匹斯山》的壁画，由保罗·特罗格在1739年绘制，面积达400平方米，是奥地利境内最大的湿壁画之一。画中众神环绕，光芒万丈，其核心寓意是将当时的皇帝查理六世比作太阳神阿波罗，寓意哈布斯堡王朝的统治如日当空。将一个世俗皇帝的荣耀如此直白地画在修道院最核心的阶梯上方，这种大胆的“神化皇权”，正是那个时代政教交织、艺术为权力服务的生动体现。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当然，历史从不只有辉煌。拿破仑战争时期，修道院曾被法国军队占领并洗劫，许多珍宝流失。两次世界大战也带来了动荡与衰落。但就像山上的岩石一样，本笃会的传统在这里坚韧地存续了下来。今天的格特维克，依然是一座活着的修道院。修士们依然管理着广阔的葡萄园，酿造着声誉卓绝的“格特维克山”葡萄酒；他们经营着学校和客栈，守护着古老的图书馆。当你看到一位穿着现代便服、却散发着平和气息的修士，穿过金光灿灿的巴洛克走廊，去打理他的葡萄藤时，你会感到一种奇妙的连接——这座建筑的生命，从未中断。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议预留至少4-5小时进行深度游览。最佳抵达时间是上午10点刚开门时，此时游客最少，晨光正好从东面洒向建筑群，光线最为通透柔和。整体游览节奏应是“先内后外，先震撼后舒缓”：首先集中精力参观内部的帝国公寓和皇帝阶梯，沉浸在巴洛克艺术的震撼中；然后前往教堂感受宗教静穆；最后在平台、庭院和外围漫步，将内心的激荡交给广阔的河谷景色来平复。下山前，务必留出时间去修道院的酒窖或商店品一杯他们自产的葡萄酒，那才是旅程最地道的句点。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿着舒适的步行鞋至关重要，因为上下山及在面积广阔的建筑群内走动需要大量步行。修道院是宗教场所，参观教堂及内部区域请保持安静并着装得体（避免无袖上衣和过短的裤裙）。山顶风大，即使在夏季也建议带一件薄外套。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从山脚停车场沿着古老的朝圣之路步行上山，让身体和心灵在攀登中逐步接近这座山巅圣殿。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过简朴的入口门洞后直接右转，找到博物馆入口，从这里开始你的内部探索之旅。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在光线昏暗的展室中快速浏览过中世纪遗珍后，毫无准备地推开通往“皇帝阶梯”的那扇门，迎接那扑面而来的、令人窒息的金色光芒与视觉洪流。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花至少二十分钟坐在阶梯的台阶上，从不同角度仰望保罗·特罗格那幅巨大的《奥林匹斯山》湿壁画，寻找画中隐藏的皇帝面孔和象征符号。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过阶梯顶部的华丽厅堂，步入曾经的帝国公寓，在那些装饰着精美瓷器、油画和古董家具的房间里想象哈布斯堡皇族可能下榻时的情景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从炫目的世俗荣耀中退出，踏入与之相邻的修道院教堂，立刻被那股简朴、崇高而宁静的气氛所笼罩，静静坐在长椅上听一听自己的心跳。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂侧门出来，走到南侧的瞭望平台，凭栏远眺，将整个瓦豪河谷从克雷姆斯到梅尔克的绝美画卷尽收眼底，辨认远处的古城和葡萄园村庄。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后沿着修道院外围的古老城墙散步，穿过宁静的庭院和拱廊，在修道院自营的商店里买一瓶印有“Stift Göttweig”商标的雷司令白葡萄酒作为纪念。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`皇帝阶梯仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`站在阶梯最底部正中央，使用广角镜头，将宏伟的阶梯曲线、两侧华丽的雕像栏杆，以及头顶那幅铺天盖地的《奥林匹斯山》壁画全部纳入镜框，最佳时间是正午前后，阳光从天窗直射，壁画色彩最鲜艳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`南侧观景平台人物剪影`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚日落前一小时，让同伴站在平台石栏边，以脚下波澜壮阔的瓦豪河谷和多瑙河湾为背景，拍摄人物面向河谷的剪影，天空的色彩与河谷的层次感会无比丰富。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`回廊拱门的光影走廊`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，当阳光斜射入东侧回廊，走进拱廊深处，拍摄一系列拱门形成的强烈透视光影，可以等待一位修士或游客走过，为画面增加故事感和尺度感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`修道院建筑外景侧拍`}</h4>
                  <p className="text-sm text-gray-700">{`从停车场通往修道院的之字形步道的几个拐弯处，可以回望并拍摄修道院建筑群与森林、山体融合的侧面全景，展现其“山巅之城”的巍峨气势。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内拍摄禁止使用闪光灯和三脚架，以免损害珍贵的壁画和艺术品。拍摄修士或宗教活动需事先礼貌征得同意。航拍器在修道院上空飞行通常被严格禁止，需遵守当地法规。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济型山脚客栈`}</h4>
                  <p className="text-sm text-blue-800">{`住在富尔特 bei Göttweig 村庄里的家庭式客栈，推开窗就是宁静的田园和仰望中的修道院剪影，每晚在葡萄藤的清香中入睡。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色葡萄酒庄民宿`}</h4>
                  <p className="text-sm text-green-800">{`选择瓦豪河谷沿岸如迪恩施泰因或施皮茨小镇的百年酒庄民宿，主人会热情地带你参观酒窖并品鉴多种葡萄酒，深度体验当地风土。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`克雷姆斯古城设计酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻在世界文化遗产小镇克雷姆斯充满现代设计感的酒店里，白天游览修道院，晚上享受古城浪漫的街巷与河边餐厅的夜景。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端历史套房体验`}</h4>
                  <p className="text-sm text-purple-800">{`如果追求极致，可以预订修道院本身经营的少数几间客房（需提前很久预定），真正住在历史之中，清晨独自拥有整个平台和无人的庭院。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（6-9月）和葡萄收获季（9月底-10月初）是瓦豪河谷的绝对旺季，住宿务必提前数月预订。选择克雷姆斯作为基地交通和餐饮选择最丰富。如果自驾，住在更偏僻的村庄能获得更静谧的体验和更优惠的价格。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开格特维克修道院很久以后，你脑海中挥之不去的，可能不是那阶梯具体有多少级，壁画上有多少个人物，而是那种复杂的、混合的感受。它既让你感到个人的渺小——在那样浩瀚的历史、艺术与自然景观面前；同时又让你感到一种奇特的充盈——因为人类竟能创造出如此契合天地、震撼灵魂的杰作。它完美诠释了什么是“圣地”：不仅仅是宗教意义上的，更是美学、历史和地理共同认定的，那种你必须亲临其境才能理解其分量的地方。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求快速打卡、信息碎片化的世界里，格特维克提供了一种截然相反的旅行价值：它要求你慢下来，爬一段山，花时间仰望，安静地坐下，让眼睛和心灵去消化那种规模的壮丽。它告诉你，真正的震撼不是一声尖叫，而是一段长久的沉默。这座山巅上的巴洛克明珠，就像一位历经沧桑却依然平静的智者，它不言语，只是在那里存在着，俯瞰着河谷的四季更迭，迎送着人间的过客。它等待的，正是那些愿意为了一片风景、一段阶梯、一种感受而专程前来，并准备好被其深深触动的旅人。这不仅仅是一次游览，更是一场对美、对永恒、对内心宁静的朝圣。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/feldkirch-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    费
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">费尔德基希老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Feldkirch Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/imperial-spa-town-bad-ischl" className="block group">
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
              <a href="/attractions/rattenberg-tirol" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉滕贝格</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rattenberg</p>
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
