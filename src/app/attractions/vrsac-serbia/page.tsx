import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '弗尔沙茨 Vršac｜沉浸葡萄园与古塔的诗意塞尔维亚小镇 - 最佳欧洲景点',
  description: '车子缓缓驶入弗尔沙茨的时候，第一眼抓住你的，绝对不是任何宏伟的建筑，而是那股气味。车窗摇下，混合着干燥泥土、成熟葡萄果实微微发酵的甜香，还有远处山林飘来的、带着松针清冽的空气，一股脑儿涌进来。这就是南巴纳特的呼吸，醇厚，饱满，带着阳光晒过的暖意。你的目光会不由自主地被牵引——小镇的尽头，那座长满绿意',
}

export default function VrsacSerbiaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '塞尔维亚', href: '/destinations/europe' },
            { label: '弗尔沙茨（南巴纳特州）', href: '/destinations/europe' },
            { label: '弗尔沙茨', href: '/attractions/vrsac-serbia' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`弗尔沙茨・Vršac・塞尔维亚・弗尔沙茨（南巴纳特州）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子缓缓驶入弗尔沙茨的时候，第一眼抓住你的，绝对不是任何宏伟的建筑，而是那股气味。车窗摇下，混合着干燥泥土、成熟葡萄果实微微发酵的甜香，还有远处山林飘来的、带着松针清冽的空气，一股脑儿涌进来。这就是南巴纳特的呼吸，醇厚，饱满，带着阳光晒过的暖意。你的目光会不由自主地被牵引——小镇的尽头，那座长满绿意的山丘孤独地隆起，而在它的最高点，一座浅灰色的石塔像一枚定海神针，又像一个沉默的守望者，稳稳地戳在蓝天白云里。山脚下，大片大片的葡萄园沿着丘陵的曲线铺展，藤蔓整齐划一，在九月阳光下泛着金黄、深紫和墨绿的光泽。
把车停在老城边缘，双脚真正踏上那些被岁月打磨得光滑的石板路，声音的世界又变了。教堂的钟声浑厚而缓慢，不像西欧大教堂那样急促密集，而是每一下都像在空气中漾开一个完整的涟漪。街边咖啡馆传来银质小勺碰撞瓷杯的清脆声响，还有老人们用塞尔维亚语低声交谈的、略带沙哑的韵律。这里的生活节奏是“步行”级别的，你看到主妇们拎着编织篮从市场回来，篮子里露出新鲜面包的一角和番茄鲜艳的红。药房博物馆那栋鹅黄色的巴洛克式小楼，就安静地立在主街旁，窗台上放着天竺葵，仿佛下一秒就会有穿着旧式长袍的药剂师推门而出。
然而，弗尔沙茨最打动人心的，是那种“层叠感”。它不是一座被冻结在琥珀中的历史标本，而是一本仍被不断书写的活页书。中世纪的塔楼、18世纪的药房、19世纪的奥匈风格宅邸、20世纪的社会主义时期建筑，以及21世纪新开的时尚酒馆，全都毫无违和地挤在一起。这种混乱中的和谐，恰恰是巴尔干半岛命运的缩影。你能感觉到，历史在这里不是沉重的负担，而是像山上的石头和地里的葡萄藤一样，是日常生活自然生长出的一部分。当地人谈起那座塔，语气就像谈起一位脾气有点古怪但德高望重的老邻居；而说到葡萄酒，每个人的眼睛都会发光，那是刻进DNA里的骄傲与热情。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子缓缓驶入弗尔沙茨的时候，第一眼抓住你的，绝对不是任何宏伟的建筑，而是那股气味。车窗摇下，混合着干燥泥土、成熟葡萄果实微微发酵的甜香，还有远处山林飘来的、带着松针清冽的空气，一股脑儿涌进来。这就是南巴纳特的呼吸，醇厚，饱满，带着阳光晒过的暖意。你的目光会不由自主地被牵引——小镇的尽头，那座长满绿意的山丘孤独地隆起，而在它的最高点，一座浅灰色的石塔像一枚定海神针，又像一个沉默的守望者，稳稳地戳在蓝天白云里。山脚下，大片大片的葡萄园沿着丘陵的曲线铺展，藤蔓整齐划一，在九月阳光下泛着金黄、深紫和墨绿的光泽。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "把车停在老城边缘，双脚真正踏上那些被岁月打磨得光滑的石板路，声音的世界又变了。教堂的钟声浑厚而缓慢，不像西欧大教堂那样急促密集，而是每一下都像在空气中漾开一个完整的涟漪。街边咖啡馆传来银质小勺碰撞瓷杯的清脆声响，还有老人们用塞尔维亚语低声交谈的、略带沙哑的韵律。这里的生活节奏是“步行”级别的，你看到主妇们拎着编织篮从市场回来，篮子里露出新鲜面包的一角和番茄鲜艳的红。药房博物馆那栋鹅黄色的巴洛克式小楼，就安静地立在主街旁，窗台上放着天竺葵，仿佛下一秒就会有穿着旧式长袍的药剂师推门而出。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，弗尔沙茨最打动人心的，是那种“层叠感”。它不是一座被冻结在琥珀中的历史标本，而是一本仍被不断书写的活页书。中世纪的塔楼、18世纪的药房、19世纪的奥匈风格宅邸、20世纪的社会主义时期建筑，以及21世纪新开的时尚酒馆，全都毫无违和地挤在一起。这种混乱中的和谐，恰恰是巴尔干半岛命运的缩影。你能感觉到，历史在这里不是沉重的负担，而是像山上的石头和地里的葡萄藤一样，是日常生活自然生长出的一部分。当地人谈起那座塔，语气就像谈起一位脾气有点古怪但德高望重的老邻居；而说到葡萄酒，每个人的眼睛都会发光，那是刻进DNA里的骄傲与热情。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`弗尔沙茨`} />
                <InfoRow label="英文名称" value={`Vršac`} />
                <InfoRow label="正式名称" value={`Vršac`} />
                <InfoRow label="国家" value={`塞尔维亚`} />
                <InfoRow label="城市" value={`弗尔沙茨（南巴纳特州）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座见证了巴尔干半岛数百年民族迁徙与文化交融的边境要塞古镇，以其独特的葡萄园山景和保存完好的文化遗产闻名。`} />
                <InfoRow label="建筑特色" value={`15世纪的防御塔孤高屹立于山顶，俯瞰着山下红瓦黄墙、错落有致的城镇建筑群，与连绵起伏的葡萄园构成一幅和谐画卷。`} />
                <InfoRow label="建筑风格" value={`混合了塞尔维亚传统、奥匈帝国影响及奥斯曼痕迹的巴尔干多元建筑风格。`} />
                <InfoRow label="文化价值" value={`是塞尔维亚葡萄种植与酿酒文化的重要发源地之一，镇内拥有全国最古老且仍在原址展示的药房，是活态的地方生活与历史博物馆。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`弗尔沙茨城全年开放，但具体景点时间各异。山顶弗尔沙茨塔的开放时间通常为每年4月至10月，每日上午10点至傍晚6点，冬季（11月至3月）开放时间缩短且可能因天气关闭。镇内的“圣药房博物馆”开放时间为周二至周六上午9点至下午3点，周日和周一会闭馆。所有景点在塞尔维亚的主要公共假日（如1月1日、1月7日东正教圣诞节、5月1日等）大概率关闭，计划行程前务必查询官网或当地旅游信息中心。`} />
              <InfoRow label="门票价格" value={`进入弗尔沙茨镇本身免费。登上弗尔沙茨塔象征性收费，成人票价约200第纳尔（约合1.7欧元），学生和儿童有折扣。“圣药房博物馆”门票约150第纳尔（约合1.3欧元）。葡萄园游览和品酒体验需单独付费，价格因酒庄和套餐而异，通常在10-30欧元之间。`} />
              <InfoRow label="地址" value={`Vršac, South Banat District, Serbia`} />
              <InfoRow label="交通方式" value={`最近的国际机场是罗马尼亚蒂米什瓦拉的特拉扬·武亚国际机场（TSR），距离弗尔沙茨约50公里。从机场可乘坐出租车（约1小时，费用40-50欧元）或预先预约的接驳车抵达。从塞尔维亚首都贝尔格莱德出发，最佳方式是乘坐火车或长途汽车。贝尔格莱德中央火车站有直达弗尔沙茨的火车，车程约2.5小时，班次较频繁且经济实惠。长途汽车从贝尔格莱德汽车站出发，车程约2小时，班次更多更灵活。在镇上，所有主要景点均可轻松步行到达，上山建议穿舒适的徒步鞋或乘坐当地出租车到半山腰。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "弗尔沙茨的故事，得从那座山和那座塔讲起。弗尔沙茨山在广袤的潘诺尼亚平原上显得格外突兀，自古就是天然的瞭望台。早在罗马时代，这里就有定居点。但真正让它进入历史聚光灯下的，是15世纪奥斯曼帝国如洪流般西进的铁蹄。为了抵御土耳其人，当时的塞尔维亚专制君主和匈牙利王国，在这座战略高地上修建了坚固的城堡和防御工事，那座今天依然屹立的塔楼，就是城堡最后残留的“主塔”。你可以想象，在那些烽火连年的日子里，哨兵站在塔顶，望着一马平川的巴纳特平原，心情该是何等紧张与苍凉。这座塔见证了无数次冲锋与围困，目睹了旗帜的变换，它本身就是边境苦难的纪念碑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡下的城镇命运同样多舛。在奥斯曼帝国长达一个多世纪的统治下，弗尔沙茨的居民结构发生了巨大变化，塞尔维亚人、土耳其人、其他巴尔干民族在此杂居。转机出现在1716年，哈布斯堡王朝的欧根亲王率军击败奥斯曼人，弗尔沙茨连同整个巴纳特地区被并入奥匈帝国。这才是小镇迎来“黄金时代”的起点。帝国带来的不仅是相对和平的秩序，还有中欧的行政管理、城市规划和文化风尚。我们今天看到的镇中心那些色彩柔和、带有规整立面线条的巴洛克和古典主义建筑，大多是在这个时期修建的。城镇从一座军事要塞，逐渐转变为繁荣的农业和商业中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "也正是在18世纪的奥地利统治时期，小镇的文化生活开出了一朵奇葩——那就是“圣药房”。1761年，一位名叫乔瓦尼·皮耶特罗·法布里齐的意大利药剂师，在获得维也纳宫廷的特许状后，在这里创办了药房。它可不是普通的店铺，里面摆满了从威尼斯定制的精美桃花心木药柜、来自东方的青花瓷药罐、手写的拉丁文处方笺，以及当时最先进的蒸馏设备。它服务了镇上各族裔居民将近两个世纪，直到1954年才停止营业，并被几乎原封不动地改建为博物馆。走进那里，你闻到的不是消毒水味，而是陈年木材、干草药和蜂蜡混合的复杂气味，那是几个世纪以前“科学”与“关怀”的味道，是欧洲启蒙思想在这片边疆土地上的一个微小而坚实的落脚点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当然，弗尔沙茨土地的灵魂，始终是葡萄。罗马人最早在这里引种葡萄，但真正的产业化是在18、19世纪，随着哈布斯堡王朝鼓励开发巴纳特地区，大量德意志裔、斯洛伐克裔移民带来先进的葡萄种植和酿酒技术。弗尔沙茨山特殊的火山岩土壤和温和的大陆性气候，造就了品质卓越的葡萄。这里的葡萄园景观，不仅是经济作物，更塑造了本地人的生活方式和集体性格——耐心、扎根于土地、懂得等待与酿造。即便经历了二十世纪的战火纷飞、政权更迭和人口变迁，这份与葡萄藤的联系也从未断绝。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "进入现代，弗尔沙茨平静地成为了塞尔维亚共和国的一部分。它不再身处血腥的边境线，但那份由多重历史层次酿造出的独特气质，却愈发醇厚。战争与和平，帝国与民族，东方与西方，所有过往的线索，最终都沉淀为山脚下宁静的日常，和杯中那一缕回味悠长的酒香。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受弗尔沙茨，你需要整整一天，并抱着悠闲探索而非打卡的心态。建议清晨（8-9点）抵达，这时阳光柔和，葡萄园上的晨雾尚未完全散去，是拍照和感受小镇苏醒气息的绝佳时机。整体游览节奏宜慢，上午以攀登弗尔沙茨山和探访老城核心区为主，中午享用一顿漫长的本地午餐，下午沉浸在博物馆和葡萄园文化中，傍晚则留给日落和品酒。这样的安排既能避开午间登山最热的时段，又能让你在光线最美的时刻身处最佳观景位置，更重要的是，能让你像当地人一样，体验一日生活的自然流动。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`攀登弗尔沙茨山的路径是自然的土石路，务必穿防滑的徒步鞋或运动鞋，高跟鞋是绝对禁忌。镇上大部分餐厅和小店在下午2点到5点之间会休息，规划午餐和购物时间要注意。如果自驾，老城中心停车位紧张，建议将车停在城边缘的免费停车场然后步行探索。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`趁清晨凉爽，从老城边缘起步，沿着蜿蜒的小径穿过层层叠叠、挂满果实的葡萄园向山顶的弗尔沙茨塔攀登。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`手脚并用地登上古老石塔狭窄的螺旋阶梯，在塔顶的垛口后深吸一口气，将整个南巴纳特平原如绿色地毯般在脚下铺展的壮观景象尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后漫步到主广场，在有着百年历史的“？？”咖啡馆（店名就是一个问号，是本地传奇）的露天座位点一杯土耳其咖啡，看鸽子在广场上踱步。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`轻轻推开“圣药房博物馆”那扇厚重的木门，让自己沉浸在古老器械、彩色药瓶和羊皮手稿构成的静谧魔法世界里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着铺满鹅卵石的弗兰卡·拉迪切瓦街闲逛，用手指触摸两侧建筑墙上混合了塞尔维亚装饰与奥地利线条的独特立面纹理。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一家家庭经营的“酒窖”式餐厅享用午餐，必点一道用本地葡萄酒烹制的炖牛肉，并佐以弗尔沙茨山自产的白葡萄酒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午拜访一家山脚下的家族酒庄，跟随庄主走进凉爽的酒窖，听他讲述家族五代人的酿酒故事，并品尝从清新雷司令到醇厚黑皮诺的各种佳酿。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前回到城镇西侧的开阔地，看着夕阳的余晖将山顶的古塔染成金红色，而山下的葡萄园则沉浸在一片温暖的紫霭之中。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`葡萄园仰拍古塔全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，从山南侧某片葡萄园的垄沟间低机位向上拍摄，将沉甸甸的葡萄串作为前景，让蜿蜒的小径引导视线至山顶孤傲的石塔，构图充满故事性和层次感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`药房博物馆橱窗光影`}</h4>
                  <p className="text-sm text-gray-700">{`上午10点后，阳光斜射入博物馆临街的橱窗，拍摄那些陈列在古老橱柜里、沐浴在光束中的彩色玻璃药瓶，能捕捉到穿越时空的静谧与科学之美。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老城屋顶线眺望`}</h4>
                  <p className="text-sm text-gray-700">{`登上镇中心某家餐厅或咖啡馆的露台（可礼貌询问），用长焦镜头压缩拍摄层层叠叠的红瓦屋顶，直至焦点落在远处山巅的塔楼，展现人居与自然地标的和谐对话。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`酒窖橡木桶人像`}</h4>
                  <p className="text-sm text-gray-700">{`在参观家族酒庄时，请同伴在巨大的旧橡木桶旁自然站立，利用酒窖昏暗的环境光和桶侧悬挂的暖色工作灯，拍出带有浓郁氛围感和故事感的侧影或轮廓照。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`当地人对摄影非常友好，但拍摄私人葡萄园或酒窖内部前，最好先微笑示意并获得许可。使用无人机在法律上可能受限，尤其在历史遗迹和私人庄园上空，放飞前务必了解当地法规并尊重他人隐私。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济舒适之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在老城中心由老房子改建的民宿“葡萄藤之家”，主人会为你准备自家果园的水果早餐，晚上还能在种满花草的小院里乘凉聊天。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验之选`}</h4>
                  <p className="text-sm text-green-800">{`下榻弗尔沙茨山脚下被葡萄园环绕的“拉德家族庄园”，这是一座19世纪的复古农庄，房间充满乡村魅力，早晨在鸟鸣和葡萄叶的沙沙声中醒来。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端奢华之选`}</h4>
                  <p className="text-sm text-yellow-800">{`入住位于蒂米什瓦拉（罗马尼亚）市中心的五星级酒店，体验特兰西瓦尼亚的繁华，并以弗尔沙茨为一日游目的地，享受跨国的双重文化体验。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`隐居自然之选`}</h4>
                  <p className="text-sm text-purple-800">{`预订山间林地里由环保材料建造的现代风格小木屋，拥有全景落地窗，夜晚可观星，彻底融入弗尔沙茨山的自然宁静之中。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "弗尔沙茨本镇的精品住宿数量有限，尤其在夏季葡萄收获季和九月初的“葡萄节”期间非常紧俏，务必提前数月预订。如果选择住在邻近的蒂米什瓦拉，虽然需跨境，但能享受到更丰富的夜生活和餐饮选择，只需注意持有多次申根或罗马尼亚签证。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开弗尔沙茨好些天了，但指尖仿佛还能摸到那座古塔粗糙冰凉的石头纹理，鼻尖还能嗅到药房博物馆里那种混合了旧书、木头和干草药的独特气味。这座小镇没有惊心动魄的传奇，也没有令人瞠目的奢华，它的力量在于一种沉静的“融合”。在这里，历史不是教科书里冰冷的知识点，而是你攀登时脚下的泥土、午餐时杯中的酒液、耳边听到的夹杂着塞尔维亚语、匈牙利语和罗马尼亚语词汇的方言。它让你明白，巴尔干的灵魂并非只有创伤与分裂，更有在这种复杂层叠中生长出的、坚韧而诗意的生活智慧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求效率、迷恋“网红打卡”的快节奏世界里，弗尔沙茨的存在是一种温柔的抵抗。它邀请你慢下来，用双脚丈量一座山丘，用味蕾品味一片风土，用耐心去倾听一砖一瓦的低语。它告诉你，真正的深度旅行，不是收集了多少地标，而是在某个平凡的午后，坐在小镇广场上，忽然感觉自己与这片土地悠久而缓慢的脉搏产生了共振。对于每一位渴望超越表面、去触摸欧洲真实肌理与温度的灵魂而言，弗尔沙茨这样的小镇，才是旅行清单上最不该错过的一站。它是一片让你沉淀下来，重新思考何为“家园”，何为“文化”的土壤。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/sirogojno-open-air-museum-zlatibor" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    兹
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">兹拉蒂博尔-西罗戈伊诺露天博物馆</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sirogojno Open-Air Museum (Zlatibor)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/topola-oplenac-church-serbia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    托
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">托波拉奥普莱纳茨（圣乔治教堂）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Oplenac (St. George‘s Church)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/stari-ras-and-sopocani-serbian-cradle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    诺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">诺维帕扎尔与斯塔里拉斯（塞尔维亚的中世纪摇篮）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Novi Pazar and Stari Ras</p>
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
