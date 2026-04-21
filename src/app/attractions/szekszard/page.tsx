import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '塞格萨德深度旅游攻略：七山间的红酒与历史漫步自由行指南',
  description: '探索匈牙利塞格萨德（Szekszárd）的隐秘魅力！这份深度游攻略带你品尝顶级公牛血红酒，漫步中世纪街区，揭秘七座山丘间的悠闲生活。',
}

export default function SzekszardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '匈牙利', href: '/destinations/hungary' },
            { label: '托尔瑙州', href: '/destinations/hungary' },
            { label: '塞格萨德', href: '/attractions/szekszard' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`塞格萨德・Szekszárd・匈牙利・托尔瑙州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你厌倦了布达佩斯的人潮，想找一个连匈牙利本地人都要悄悄私藏的宝藏小城，那今天这份塞格萨德私藏旅游攻略，就是为你准备的。塞格萨德就像一位低调的隐士，安然躺在南匈牙利七座温柔山丘的环抱里。它不张扬，却拥有两个响当当的头衔：著名的“公牛血”（Bikavér）红酒原产地之一，以及大音乐家巴托克·贝拉的故乡。这里的时光是紫红色的，弥漫着橡木桶和成熟葡萄的香气。作为你的专属向导，这份塞格萨德自由行指南会带你绕过所有旅游陷阱，直接潜入它最迷人的核心——从酒窖深处到铺满鹅卵石的宁静街巷，告诉你如何像当地人一样，用一杯酒的时间，读懂一座城。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，如果你厌倦了布达佩斯的人潮，想找一个连匈牙利本地人都要悄悄私藏的宝藏小城，那今天这份塞格萨德私藏旅游攻略，就是为你准备的。塞格萨德就像一位低调的隐士，安然躺在南匈牙利七座温柔山丘的环抱里。它不张扬，却拥有两个响当当的头衔：著名的“公牛血”（Bikavér）红酒原产地之一，以及大音乐家巴托克·贝拉的故乡。这里的时光是紫红色的，弥漫着橡木桶和成熟葡萄的香气。作为你的专属向导，这份塞格萨德自由行指南会带你绕过所有旅游陷阱，直接潜入它最迷人的核心——从酒窖深处到铺满鹅卵石的宁静街巷，告诉你如何像当地人一样，用一杯酒的时间，读懂一座城。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`塞格萨德`} />
                <InfoRow label="英文名称" value={`Szekszárd`} />
                <InfoRow label="正式名称" value={`Szekszárd`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`托尔瑙州`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`塞格萨德的历史，是一部用葡萄藤编织的史诗。它的名字早在11世纪的文献中就已出现，最初是王室的庄园。到了中世纪，它已成为托尔瑙州重要的行政和宗教中心，地位显赫。但真正让它刻入欧洲历史地图的，是18世纪后蓬勃发展的葡萄酒文化。这里的“塞格萨德公牛血”红酒，是匈牙利最具代表性的葡萄酒之一，其酿造传统和历史地位与埃格尔的“公牛血”齐名。19世纪，随着城市扩建和文化的繁荣，塞格萨德吸引了众多艺术家和知识分子。而它最骄傲的儿子，便是20世纪最伟大的作曲家之一——巴托克·贝拉。他虽出生在邻近的Nagyszentmiklós（今属罗马尼亚），但童年和青少年时期的重要时光在此度过，这座城市宁静而深厚的气质，无疑潜移默化地影响了他日后从民间音乐中汲取灵感的创作之路。因此，塞格萨德不仅是酒乡，更是一处人文精神的高地。`} />
                <InfoRow label="建筑特色" value={`漫步在塞格萨德，就像翻阅一本立体的建筑画册。城市的色调是温暖的：蜂蜜色的石灰岩墙面、陶土红的瓦片屋顶，在阳光下泛着柔和的光泽。市中心保存完好的新古典主义建筑群是最大亮点，它们线条简洁、对称庄严，高大的立柱和三角形的山花门楣显得气派而不失优雅，许多建筑立面装饰着精美的灰泥浮雕。与之形成有趣对比的，是散落在老城区里的巴洛克式民居，它们的外墙往往粉刷成鹅黄或浅粉，窗框是洁白的，窗台上必定点缀着盛开的天空葵或绿植，充满生活气息。不要错过圣史蒂芬大教堂，它敦实的钟楼是城市天际线的标志，石砖外墙历经风雨，颜色深浅不一，诉说着时间的层叠。这里的建筑少有咄咄逼人的气势，更像是一杯陈年好酒，需要你慢慢走近，细细品味其质感与细节。`} />
                <InfoRow label="建筑风格" value={`塞格萨德的建筑是一场从巴洛克到新古典主义的优雅过渡。巴洛克风格在这里表现得相对克制而亲切，主要体现在一些教堂和早期贵族住宅上，你能看到波浪形的立面曲线、繁复的涡卷装饰，以及试图营造动态感和戏剧性的努力，比如光影对比强烈的壁龛雕塑。而城市更主导的面貌是新古典主义，这源于19世纪的现代化浪潮。这种风格追求古罗马和希腊建筑的理性与庄严，所以你会在市政厅、博物馆等公共建筑上看到清晰的几何线条、规整的柱廊（多采用简洁的多立克柱式或爱奥尼柱式），以及朴素的三角楣饰。它摒除了巴洛克的过度装饰，显得更加稳重、明快，反映了当时市民阶层对秩序与启蒙精神的向往。漫步在贝拉·巴托克街，这种风格的建筑连成一片，形成了一种和谐、宁静又充满自信的街道景观，完美契合了这座葡萄酒之都既传统又开明的气质。`} />
                <InfoRow label="文化价值" value={`对于塞格萨德人和所有匈牙利爱酒之人来说，这座城市的文化价值早已融入血液和酒杯。红酒是它的信仰、经济支柱，也是社交语言。每年秋天的葡萄收获节，全城都沉浸在狂欢中，酒窖敞开大门，音乐不断，人们用舞蹈和歌声庆祝大自然的馈赠。这种深厚的葡萄酒文化，塑造了当地人热情好客、懂得享受生活节奏的性格。另一方面，巴托克·贝拉的遗产为这座城市注入了高雅的灵魂。他的故居纪念馆不仅是朝圣地，更是一座活着的文化课堂，持续举办音乐会和教育项目，让古典与民间音乐在此交汇。塞格萨德的文化，是一种“土”与“雅”的完美融合：它根植于土地（葡萄园），生长出最质朴的欢乐；又因伟大的艺术家而获得精神的升华。在现代社会，它代表了一种可贵的平衡——在快速发展中，坚守传统的手艺与宁静的生活品质。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 塞格萨德一日游打卡路线攻略：从酒窖到巴托克故居的完美动线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好了，跟我来，咱们用一天时间，把塞格萨德的精髓一网打尽。上午（9:00-12:30），精力最充沛的时候，我们从城市心脏——贝拉·巴托克文化中心前的广场开始。先别急着进去，感受一下周围新古典主义建筑的清晨宁静。接着，步行两分钟，拜访巴托克·贝拉故居纪念馆，在这里沉浸半小时，了解音乐巨匠的童年。然后，沿着可爱的步行街向东，前往伊丽莎白女公爵宫殿（现为市政厅），欣赏其宏伟外观和门前花园。中午（12:30-14:30），是重头戏！找一家本地人推荐的酒窖餐厅（比如“Kovács Borház”或其类似的地窖餐厅），享用一顿丰盛的匈牙利炖菜，并参加一个迷你品酒体验，尝一尝地道的塞格萨德公牛血。下午（14:30-17:00），微醺中漫步去圣史蒂芬大教堂，爬上钟楼（如果开放），俯瞰七山环抱的全城红屋顶。之后，前往托尔瑙州博物馆，深入了解本地的历史、民俗和葡萄酒酿造史。傍晚（17:00以后），悠闲地逛回市中心，在露天咖啡馆点一杯咖啡，看着日落将建筑染成金色，如果恰逢周末，很可能能遇上街头的小型音乐会。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  酒窖餐厅的拱顶与光影：当你低头走进一家由古老石砌酒窖改造的餐厅时，瞬间会被那种氛围俘获。空气冰凉，弥漫着挥之不去的、好闻的霉味、橡木和葡萄的复合香气。抬头看，巨大的砖石拱顶低垂，像一个倒扣的船底，昏黄的壁灯在粗糙的墙面上投下温暖而摇曳的光晕，照亮了角落堆叠的旧酒桶。光线在这里仿佛有了重量和质感，照在深色的木质长桌和闪亮的玻璃杯上，一切都像一幅伦勃朗的油画，静谧、私密，充满了故事感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  圣史蒂芬大教堂的彩绘玻璃：下午的阳光以倾斜的角度射入教堂侧面的彩绘玻璃窗。那一刻，你会忘记呼吸。原本肃穆的石质内部空间，突然被注入了一股流动的、斑斓的生命力。红宝石色、深海蓝、翡翠绿的光束投射在古老的条凳和石柱上，随着云层移动，地面的光斑也缓缓流淌、变幻。仔细看玻璃上的图案，可能是圣徒的故事，也可能是抽象的几何花纹，色彩浓烈而纯净，这是中世纪工匠与现代修复者共同谱写的“光之交响曲”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  巴托克故居里的那架钢琴：在纪念馆一个朴素的房间里，静静地摆放着一架老旧的立式钢琴。它不是展品中最华丽的，但却是最动人的。深色木头上有着细微的使用痕迹。你可以想象，年幼的巴托克就是坐在这里，第一次按下琴键，那些后来震动世界的音符，最初就从这间安静的小屋里萌芽。阳光从窗口洒在琴盖上，灰尘在光柱中轻舞，仿佛还能听见隐约的琴声在空气中回荡，连接着过去与现在。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  城市至高点的全景露台：在前往教堂钟楼或某处山丘观景点的路上，你总会找到一个可以俯瞰全城的露台。傍晚时分，这是最佳观赏点。眼前是层层叠叠、错落有致的红瓦屋顶，像一片温暖的海洋。远处，七座轮廓柔和的山丘如绿色波浪般涌向天际线，山丘上是一行行整齐的葡萄藤。夕阳把一切都镀上金边，城市的钟声悠扬传来，混合着远处庭院里飘来的晚餐香气。这个画面，就是塞格萨德赠予旅行者最宁静、最饱满的礼物。`}</p>
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`首先，时机就是一切。想体验最地道的塞格萨德，请瞄准 9月至10月初的葡萄收获季，这时活动最多，酒庄最热情，但需提前预订住宿和热门酒窖参观。反之，想享受清净，春季（5-6月）和初夏（9月初之前）的平日是最佳选择，能完美避开人流。穿着方面，请务必带上一双绝对舒适的步行鞋！城市虽小，但七座山丘意味着总有上下坡，鹅卵石路面也对鞋底不友好。另外，即使夏天，也带件薄外套，酒窖里常年只有14-16度。防盗防骗上，这里非常安全，但保持常规警惕即可。最大的“坑”可能是语言——英语普及度不如布达佩斯，建议下载好翻译APP，或者提前学几句匈牙利语的问候和“谢谢”（Köszönöm）。最后，交通贴士：城市中心步行即可逛遍，但如果想去更远的特色酒庄，最好提前查询是否有预约制班车或考虑租车/打车。周末部分小店可能休息，行程安排要灵活。`}</p>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`想获得沉浸式体验，强烈推荐住在市中心或近郊的葡萄园农庄（Villa或Panzio）。想象清晨在鸟鸣中醒来，推开窗就是蔓延至天际的葡萄藤，空气中满是青草和泥土的芬芳。这类住宿通常由家族经营，主人可能就是酿酒师，能提供最原汁原味的品酒和家常菜。在市中心，Béke Hotel或Szekszárdi Bor Hotel等酒店位置便利，风格传统。美食是旅行的另一条主线。必须尝试的当然是 “塞格萨德公牛血”（Szekszárdi Bikavér），一种混酿红葡萄酒，口感饱满复杂。搭配它的是地道的匈牙利菜：比如香辣浓郁的古拉什炖肉（Gulyás），或是塞格萨德特色的鱼汤（Halászlé）。推荐去像“Vén Diák Borozó és Étterem” 这样的老牌餐厅，氛围怀旧，菜品正宗。或者在集市广场边的咖啡馆，点一份烟囱蛋糕（Kürtőskalács） 作为下午茶，甜蜜的焦糖香气会让人瞬间快乐起来。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果时间充裕，有两个地方不容错过。一是位于城市西侧的 “巴托克故居”原址纪念公园（Bartók Béla Emlékhely），虽然原建筑已不存，但宁静的公园里设有纪念碑和露天音乐台，环境清幽，适合散步和遐思。二是真正深入七山丘（Szekszárdi-dombság）的葡萄酒之路。你可以租一辆自行车，或者参加一个有向导的短途葡萄酒之旅，拜访几家小型家庭酒庄。比如前往Mórágy或Decs这样的周边村庄，那里的风景更加原始开阔，酒庄主人往往更乐意与你分享他们的故事和珍藏。这种探索，让你从“参观”塞格萨德，升级为“走进”它的风土灵魂。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`塞格萨德的灵魂，是一首用葡萄藤谱写的慢板田园诗。它教会你的，不是匆忙的打卡，而是如何用舌尖品尝时间的厚度，用耳朵倾听砖石间的历史回响，并最终，在七座山丘温柔的注视下，找到一种属于旧日欧洲的、从容不迫的生活节奏。这里不贩卖喧嚣的景点，只馈赠宁静的丰饶。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/papa-hungary" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    帕
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">帕帕</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pápa</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kalocsa-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    考
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">考洛乔老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kalocsa Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/pannonhalma-archabbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    潘
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">潘诺恩哈尔马千年修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pannonhalma Archabbey</p>
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
