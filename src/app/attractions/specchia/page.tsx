import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '斯佩基亚旅游攻略：探秘“普利亚阳台”与千年橄榄油洞穴迷宫',
  description: '斯佩基亚（Specchia）深度游攻略：意大利普利亚的隐秘高地小镇，地下橄榄油榨油洞穴迷宫、中世纪石屋与“阳台”全景体验指南。',
}

export default function SpecchiaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '斯佩基亚', href: '/attractions/specchia' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`斯佩基亚・Specchia・意大利・普利亚`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你已经看腻了人潮汹涌的佛罗伦萨和威尼斯，今天这份斯佩基亚私藏旅游攻略，就带你躲开人潮，钻进意大利“靴子跟”上的萨兰托半岛腹地。斯佩基亚被当地人深情地称为“普利亚的阳台”——可不是随便说说的！小镇盘踞在一片石灰岩高地上，当你站在它的边缘，眼前是无边无际的橄榄树银海，风吹过时仿佛能听到整个普利亚的呼吸。但它的秘密，更多埋藏在地下：纵横交错的古老橄榄油榨油洞穴，构成了一个神秘的地下迷宫。作为你的专属向导，这份自由行指南请收好，我们会一起揭开这个小镇宁静表面下的千年故事，从如何抵达，到在哪一转身能看到最美的日落，统统告诉你。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，如果你已经看腻了人潮汹涌的佛罗伦萨和威尼斯，今天这份斯佩基亚私藏旅游攻略，就带你躲开人潮，钻进意大利“靴子跟”上的萨兰托半岛腹地。斯佩基亚被当地人深情地称为“普利亚的阳台”——可不是随便说说的！小镇盘踞在一片石灰岩高地上，当你站在它的边缘，眼前是无边无际的橄榄树银海，风吹过时仿佛能听到整个普利亚的呼吸。但它的秘密，更多埋藏在地下：纵横交错的古老橄榄油榨油洞穴，构成了一个神秘的地下迷宫。作为你的专属向导，这份自由行指南请收好，我们会一起揭开这个小镇宁静表面下的千年故事，从如何抵达，到在哪一转身能看到最美的日落，统统告诉你。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`斯佩基亚`} />
                <InfoRow label="英文名称" value={`Specchia`} />
                <InfoRow label="正式名称" value={`Specchia`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`普利亚`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`斯佩基亚的历史，就像它地下的洞穴一样，层叠而隐秘。它并非罗马或希腊那样声名显赫的大都会，却在普利亚乃至南意大利的乡村文明史中扮演着“活化石”般的角色。中世纪时，这里是重要的农业与贸易据点，得益于高地的防御优势，它免受了许多海岸地区的侵袭。其真正的历史核心，在于它作为橄榄油生产中心的地位。从公元9-10世纪起，甚至更早，当地的农民就开始利用松软易挖的石灰岩层，开凿出一个个地下洞穴（“frantoi ipogei”），用于在恒温恒湿的环境中压榨和储存橄榄油。这些洞穴网络在16-17世纪达到鼎盛，使得斯佩基亚的橄榄油能够通过亚得里亚海贸易远销各地。可以说，小镇的财富与灵魂，都与这些黑暗中的石室紧密相连，它见证了普利亚地区“绿色黄金”产业数百年来的兴衰，是理解南意乡村经济与社会结构的绝佳切片。`} />
                <InfoRow label="建筑特色" value={`斯佩基亚的建筑，是典型的普利亚“皮毛与石头”美学。走进小镇，仿佛踏入了一座由蜜色石灰岩雕刻而成的立体迷宫。建筑外墙是未经打磨的粗糙石面，在正午的阳光下泛着温暖的金色和赭石色光泽；到了傍晚，则被染成一片浓郁的琥珀色。最迷人的是那些细节：古老的贵族宫殿（如里斯卡家族宫殿）有着繁复的巴洛克式石雕窗棂，天使和花卉的图案在光影下栩栩如生。而民宅则朴素得多，窄小的街道（“vicoli”）上方，常常有拱廊（“archi”）连接两边的房屋，投下清凉的阴影。门窗多为深蓝色或墨绿色，与暖色调的石墙形成鲜明对比，窗台上永远点缀着盛放的天竺葵，红的、粉的，像不小心打翻的调色盘。脚下的路是光滑的石板，被数百年的脚步磨得发亮，反射着天空的微光。整个小镇的肌理，触手可及，充满了时光包浆的温润质感。`} />
                <InfoRow label="建筑风格" value={`斯佩基亚的建筑风格是一场有趣的“混搭”，但主导音是 普利亚罗马风与巴洛克风格的结合。这里没有夸张炫技的大教堂，更多的是因地制宜的实用与虔诚。普利亚罗马式 体现在小镇母教堂（Chiesa Matrice）这样的建筑上：外观简洁有力，线条清晰，用本地石灰岩砌成，立面上的玫瑰窗虽小却精巧，透出一种庄严的朴素感。而 巴洛克风格 则在16-17世纪随着财富积累而涌入，尤其是在贵族府的立面上得以彰显。但这种巴洛克是“收敛的巴洛克”，不像罗马那样铺张。你会看到门楣和窗框上出现了旋涡、贝壳、水果等雕刻装饰，线条变得流畅卷曲，为刚硬的石头注入了律动和生命力。两种风格并非取代，而是交融：罗马式的结构骨架披上了巴洛克式的装饰外衣，形成了斯佩基亚独有的、带有乡村优雅气息的建筑面孔，它讲述着小镇从农业中心向有一定文化追求的社群演变的故事。`} />
                <InfoRow label="文化价值" value={`对于当地人而言，斯佩基亚不仅仅是一个居住地，更是一个承载着集体记忆与身份认同的“文化容器”。地下的榨油洞穴（如今很多被改造成餐厅、酒窖或艺廊）是连接过去与现在的血脉。老一辈人依然能讲述祖辈在洞穴中辛勤榨油的故事，橄榄收获季（“raccolta”）仍是社区最重要的活动之一。小镇每年举办的节庆，如八月的“灯光之夜”（La Notte delle Lucine），成千上万的蜡烛和油灯点亮石街与洞穴，既是对传统的致敬，也象征着社区的凝聚力。对现代社会来说，斯佩基亚代表了一种“慢生活”的可持续模式。它没有因为旅游而过度商业化，反而通过精心修复历史中心、推广本地农产品（特级初榨橄榄油、葡萄酒、杏仁），探索出一条文化保育与温和旅游相结合的道路。来到这里，你会感受到一种深刻的“地方感”，它提醒我们，真正的财富可能就藏在这些静谧的石头、古老的橄榄树和共享的记忆之中。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 斯佩基亚一日游打卡路线攻略：从“阳台”全景到地下迷宫探秘`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好了，咱们的斯佩基亚深度游正式开始！假设你有一整天时间，跟我这样走，精华不漏，节奏刚好。上午（9:00-12:30）：建议把车停在镇外（小镇中心多为ZTL限行区），从主入口Porta della Croce走进来。先别急着钻小巷，直接前往小镇西侧的观景点（就在Via del Belvedere附近），这里是“普利亚阳台”的最佳印证，拍下橄榄树海全景作为开场。然后沿着Corso Vittorio Emanuele II主街漫步，参观宏伟的巴洛克风格 圣尼科洛教堂（Chiesa di San Nicola） 和 里斯卡家族宫殿（Palazzo Risca） 的外观。中午（12:30-14:30）：是时候深入地下啦！找一家由古老榨油洞穴改造的餐厅（比如“Frantoi Ipogei”相关餐厅）享用午餐，在几百年的石拱下品尝普利亚特色猫耳朵面（Orecchiette）和当地橄榄油。下午（14:30-18:00）：重点探索迷宫般的古老榨油洞穴遗址，可以参观向公众开放的 “地下榨油博物馆（Frantoi Ipogei）” ，感受历史的凉意。之后，随心迷失在“vicoli”（小巷）中，寻找美丽的石阶、拱门和隐秘庭院。最后，在日落前回到观景台，看夕阳为整个橄榄树海和远方的大海镀上金边，结束完美的一天。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  “阳台”边缘的一棵老橄榄树：在西侧观景点的边缘，你会发现一棵姿态极其苍劲、树干完全中空却依然枝繁叶茂的千年橄榄树。用手触摸它扭曲如雕塑般的树皮，粗糙得像老人的手掌。傍晚阳光斜射时，光线会穿过树干的空洞，在地面投下奇异的光斑，仿佛这棵树本身就是一个活着的灯塔，看尽了脚下土地千百年的轮回。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  地下榨油洞穴的“压榨石槽”：在开放的洞穴遗址中，蹲下身仔细看中央那个巨大的圆形石槽（“vasca”）。石槽内壁被无数次的橄榄碾压磨得光滑如镜，甚至能倒映出洞穴顶部油灯的火光。伸手触摸槽底，隐约还能感觉到一层沁凉、油腻的质感——那是数个世纪积累的橄榄油分子，仿佛时间在这里凝结成了另一种形态，空气里似乎还残留着一丝若有若无的果木清香。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  某条无名小巷的蓝色门与门环：在迷失小巷时，你会偶遇一扇饱经风霜的深蓝色木门。油漆已经斑驳，露出底层的木纹和更早的绿色漆面。重点是门上的黄铜门环，被岁月磨得发亮，但造型是一只海豚衔着橄榄枝。轻轻叩响，声音沉郁而遥远。这个细节融合了斯佩基亚的内陆农耕文明（橄榄）与不远处的海洋影响（海豚），是小镇文化交融的无声诗篇。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  圣尼科洛教堂内部的“意外”穹顶：从外部看这座教堂并不起眼，但一定走进去。抬头看主祭坛上方的穹顶，内部装饰出乎意料地轻盈精美。彩绘的灰泥浮雕描绘着天使和云朵，阳光从侧面高窗射入，正好照亮一部分壁画，让白色的天使仿佛从金色的背景中浮现出来，在昏暗的教堂里创造出一小片“神圣的戏剧光”，瞬间将你拉入巴洛克的虔诚与梦幻之中。`}</p>
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  最佳游览时间与交通：强烈推荐 春秋两季（4-5月，9-10月） 前往，气候宜人，橄榄树翠绿或银光闪烁，且避开了夏季炙烤和游客小高峰。小镇无火车站，自驾是最佳方式。但切记：历史中心是ZTL限行区，路面有摄像头。务必在镇外寻找白色线框的免费停车场或蓝色线框的收费停车场（价格不贵），然后步行进入。依赖公共交通会很麻烦，最近的火车站在附近城镇。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  穿着与步行准备：斯佩基亚是“高跟鞋地狱”！务必穿绝对舒适、防滑的平底鞋。石板路古老不平，上下坡和台阶极多。夏季白天日照强烈，帽子、太阳镜、防晒霜必不可少，但也要带一件薄外套，因为地下洞穴和傍晚高地上风大、较凉。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  避开人流与体验升级：小镇本身不算大众，但周末和夏季午后可能有一些意大利国内游客。想享受宁静，就 工作日上午来。想要最地道的体验，尝试联系当地农场（“agriturismo”）预约一次 橄榄油品鉴或传统烹饪课。最关键的“避坑”是：不要只在地面逛！ 一定要预约或找到一家开放的地下洞穴（餐厅或博物馆）进去看看，否则等于白来。可以提前查阅小镇旅游办公室的网站或抵达后先去info point获取最新开放信息。`}</p>
            </div>
          </Section>

          <Section title={`6. 斯佩基亚周边住宿与美食攻略：住石屋，品橄榄油`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`住宿方面，强烈建议住在斯佩基亚镇内或周边乡村的 “农庄住宿（Agriturismo）” 或由古老石屋改造的 精品民宿（B&B）。比如镇中心就有几家迷人的B&B，房间拱顶石墙，配有古董家具，清晨会被教堂钟声和咖啡香唤醒。住在乡下农庄则能沉浸于橄榄园中，夜晚星空无比清晰。餐饮是重头戏！午餐推荐洞穴餐厅 “Frantoi Ipogei di Specchia”（如果开放），在历史遗址中用餐体验独一无二。或者去家庭经营的 “Trattoria Terra”，尝尝用本地橄榄油烹制的“鹰嘴豆汤”（Zuppa di cicerchia）和烤羊肉。普利亚特色“普米蒂诺”（Primitivo）红葡萄酒一定要配。晚餐后，在Corso大街上找家咖啡馆，点一杯“咖啡莱切风”（Caffè Leccese，冰咖啡加杏仁糖浆），看着本地人悠闲地散步（“passeggiata”），完美融入当地节奏。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果时间充裕，强烈推荐从斯佩基亚出发，进行两个短途延伸探索，它们都离得不远，车程在15-30分钟内：`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  帕伦蒂（Palmariggi）的“干石墙”与神秘石堆：这个更小众的村庄以保存完好的 “干石墙”（muretti a secco） 网络而闻名，这种被列为世界遗产的农业围墙艺术在这里展现得淋漓尽致。在村庄周边田地里散步，感受这些不用任何粘合剂、仅靠石头巧妙堆叠而成的墙垣的几何美感，宁静而富有哲学意味。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  西杜尼亚（Sidunia）考古公园与古老橄榄树林：这是一个露天博物馆般的区域，散布着梅萨比人的古老遗址（石墓、铭文）和 一些树龄超过两千年的橄榄树。走在这些庞然大物之间，你会对“普利亚的阳台”所俯瞰的这片土地的古老生命力和连续的历史层次，有更直观和震撼的理解。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`斯佩基亚的灵魂，在于它那种 “深邃的宁静”。它不像许多景点急不可耐地向你展示一切，而是邀请你慢下来，去俯身触摸阳光烤暖的石头，去侧耳倾听地下洞穴里历史的回响，去深深呼吸那混合了干燥野草、百年橄榄木和远处海风的独特气息。在这里，你会发现，真正的奢华不是喧嚣的拥有，而是像这座小镇一样，坦然地将千年的故事沉淀在每一道石缝里，然后静静地、慷慨地，为愿意停留的旅人，献上一整片如海的橄榄绿与无垠的天空。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/orvieto" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥尔维耶托古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Orvieto</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/luni-archaeological-site" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卢
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卢尼古罗马遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Luni Archaeological Site</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/civita-di-bagnoregio" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    白
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">白露里治奥古城（天空之城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Civita di Bagnoregio</p>
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
