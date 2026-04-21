import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '维拉尼旅游攻略：匈牙利红酒之乡深度自由行与高脚酒窖探秘指南',
  description: '走进匈牙利“红酒之乡”维拉尼（Villány）的深度游攻略：探秘阳光小镇、高脚酒窖与南法风情，解锁你的私人品酒之旅与打卡路线。',
}

export default function VillanyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '匈牙利', href: '/destinations/europe' },
            { label: '巴兰尼亚州', href: '/destinations/europe' },
            { label: '维拉尼', href: '/attractions/villany' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`维拉尼・Villány・匈牙利・巴兰尼亚州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你觉得欧洲只有法国、意大利才产好红酒，那今天这份**维拉尼私藏旅游攻略**，可得好好收着了。它藏在匈牙利最南端，几乎贴着克罗地亚边境，是个被阳光宠坏的小镇。这里没有大城市的喧嚣，只有连绵的葡萄园在丘陵上铺开波浪，空气里永远飘着一丝甜蜜的、发酵的果香。但维拉尼最独特的“名片”，还不是酒，而是那些一排排童话般的“高脚酒窖”——白色的房子像踩着高跷，下面是阴凉的石砌酒窖，上面是住家或品酒屋。作为你的专属向导，这份**自由行指南**将带你绕过旅行团，像当地人一样，端着一杯醇厚的“公牛血”（Bikavér），迷失在中欧最温暖的阳光里。准备好你的酒杯，我们出发吧。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友，如果你觉得欧洲只有法国、意大利才产好红酒，那今天这份<strong>维拉尼私藏旅游攻略</strong>，可得好好收着了。它藏在匈牙利最南端，几乎贴着克罗地亚边境，是个被阳光宠坏的小镇。这里没有大城市的喧嚣，只有连绵的葡萄园在丘陵上铺开波浪，空气里永远飘着一丝甜蜜的、发酵的果香。但维拉尼最独特的“名片”，还不是酒，而是那些一排排童话般的“高脚酒窖”——白色的房子像踩着高跷，下面是阴凉的石砌酒窖，上面是住家或品酒屋。作为你的专属向导，这份<strong>自由行指南</strong>将带你绕过旅行团，像当地人一样，端着一杯醇厚的“公牛血”（Bikavér），迷失在中欧最温暖的阳光里。准备好你的酒杯，我们出发吧。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`维拉尼`} />
                <InfoRow label="英文名称" value={`Villány`} />
                <InfoRow label="正式名称" value={`Villány`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`巴兰尼亚州`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`别看维拉尼现在一派闲适的田园风光，它在匈牙利，乃至整个中东欧的葡萄酒历史上，可是个“破局者”和“品质担当”。它的酿酒传统可以追溯到古罗马时期，但真正的辉煌与现代声誉，始于19世纪末20世纪初。当时，根瘤蚜虫病害几乎摧毁了欧洲的葡萄园，维拉尼的酿酒师们却凭借远见和坚韧，引进了新的抗病葡萄品种并精心嫁接，尤其是对卡法兰克斯（Kékfrankos）、梅洛（Merlot）和赤霞珠（Cabernet Sauvignon）等红葡萄品种的成功培育，让这里浴火重生。二战后，匈牙利葡萄酒产业一度国有化、标准化，品质下滑。而正是维拉尼的一批先锋酿酒师，在20世纪90年代后率先回归家族小酒庄模式，引进现代技术，并极度强调风土表达，从而引领了匈牙利现代高品质红酒的复兴浪潮。可以说，它不仅是匈牙利第一个获得红酒原产地保护称号的产区，更是用一瓶瓶饱满、有力、结构复杂的红酒，重新定义了世界对匈牙利葡萄酒的认知，稳稳坐上了“匈牙利红酒之都”的王座。`} />
                <InfoRow label="建筑特色" value={`维拉尼最令人过目不忘的风景线，绝对是主街（Szőlőskert utca）及周边巷弄里那些独特的**高脚酒窖排屋**。想象一下：一长排洁白或淡黄色的单层房屋，像一群优雅的白鹭，用细细的“腿”站立着。这些“腿”其实是石头或砖块砌成的坚固基座，高出地面一到两米，基座内部便是酒窖本身。房屋的正面通常有木制的露天楼梯或阳台通往主入口，楼梯漆成天蓝、墨绿或朴素的木色，在阳光下投下有趣的几何阴影。屋顶是经典的陶瓦，经年累月呈现出温暖的砖红色。基座下方，你会看到厚重的、带有拱顶的木门或铁门，那是通往地下酒窖的入口，推开时往往伴随着好听的吱呀声。墙壁厚实，为了保持酒窖内部恒定的凉爽温度。许多酒窖的“高脚”部分外墙上，还会装饰着传统的匈牙利彩绘图案、铁艺招牌，或者干脆爬满了紫藤或葡萄藤，让整个建筑既稳固又充满生机，像从土地和葡萄园里自然生长出来的艺术装置。`} />
                <InfoRow label="建筑风格" value={`维拉尼的高脚酒窖建筑，是一种非常独特的、功能决定形式的**南匈牙利乡村风格**与**实用主义**的完美融合。它并非某种经典的“主义”，而是当地人为适应特定需求（存储葡萄酒）和地理环境（丘陵、需要防潮）而自发创造的民间智慧结晶。这种风格的核心在于“高脚”设计，这绝非为了美观，而是出于至关重要的实用性：将酒窖抬离地面，能有效防止地下潮气和春季融雪带来的湿气侵入，确保酒窖内部常年保持理想的、稳定的低温（约12-14摄氏度）与湿度，这是酿造和储存优质葡萄酒的黄金环境。同时，酒窖上方的居住或商用空间，则享受着充足的阳光和干燥的空气。建筑外观简洁、对称，没有繁复的巴洛克装饰，一切线条都服务于功能。色彩也以白色为主，反射强烈的南国阳光，显得明亮又干净。它朴素、智慧、与土地紧密相连，是酿酒文化最直观、最生动的建筑表达，你可以称它为“活的酿酒博物馆”。`} />
                <InfoRow label="文化价值" value={`在维拉尼，红酒远不止是一种商品或饮品，它是这里跳动的心脏，是社交的货币，是家族传承的史诗。这些高脚酒窖，每一扇门后都可能是一个家族三代人的故事，酒窖里橡木桶上的灰尘，记录着岁月的更迭。对于当地人而言，酿酒是他们与土地对话的方式，年份的好坏、调配的比例，是餐桌上永不过时的话题。每年秋天的收获季，整个小镇都沉浸在节日的狂欢里；而平时，你随时可能被热情的酿酒师邀请，深入他的“地下王国”，品尝他视若珍宝的私藏，听他讲述每个年份背后的天气故事。这种文化深深影响了小镇的生活节奏——缓慢、真诚、注重分享与体验。维拉尼的文化价值，在于它成功地将一个古老的农业传统，转化为一种高品质的、体验式的现代生活美学，它吸引着全球的酒客和旅行者前来，不仅为了一品佳酿，更是为了感受这种被葡萄酒滋养的、充满人情味的社区生活。它证明了，传统与创新、农业与旅游业，可以如此和谐地共生共荣。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 维拉尼一日游打卡路线攻略：从高脚酒窖漫步到微醺日落`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行路线：酒乡精华全体验`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的向导，这份自由行指南为你规划一条沉浸式的路线。**上午**，从维拉尼的“门面”主街（Szőlőskert utca）开始。别急着进酒窖，先漫步，用眼睛“品尝”两旁连绵的高脚酒窖排屋，感受建筑韵律。走进**维拉尼葡萄酒博物馆**（Villányi Borút），这里小而精，半小时就能帮你理清产区历史和葡萄品种，是很好的“课前预习”。**中午**，挑选一家高脚酒窖上的餐厅（比如著名的Fricska）享用午餐，务必点一杯当地 house wine 佐餐，试试红酒炖牛肉。**下午**是重头戏：深入探访1-2家精品酒庄。我强烈建议预约一家如**Weninger**或**Bock**这样的名庄，参加他们的地窖导览品鉴，了解从种植到装瓶的全过程。随后，漫步到小镇后的**葡萄园山丘**上，那里有小路和观景台，俯瞰红屋顶、白房子与绿色葡萄园交织的棋盘格全景。**傍晚**，在日落前找一家有露台的品酒屋，点一杯以本地品种卡法兰克斯酿造的轻柔红酒，看夕阳给整个小镇镀上蜜糖般的金色，这才是完美的收官。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>高脚酒窖的“秘密入口”</strong>：仔细看那些酒窖拱门下的木门。它们往往厚重，带着铁质门环和古老的锁具。推开一扇（如果开放），瞬间踏入另一个世界：温度骤降，空气中弥漫着醉人的复合香气——橡木桶的香草味、葡萄酒浆的果酸味、以及石头墙壁淡淡的土腥味。昏暗的灯光下，一排排巨大的橡木桶如同沉睡的巨人，桶身上用粉笔写着年份和品种。这一刻，你仿佛触摸到了时间的实体和酒的灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>品酒时杯中的“红宝石之光”</strong>：当酿酒师为你斟上一杯经典的维拉尼混酿（Villányi Cuvée），请先不要喝。对着光轻轻摇晃酒杯，观察那深邃的、近乎紫红色的酒液边缘，会泛出一圈明亮的宝石红光晕。酒柱（“酒泪”）浓稠，缓慢流下，预示酒体的饱满和甘油含量。这个简单的动作，是开启一场味觉之旅前，最迷人的视觉仪式。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>葡萄园山丘的“全景明信片”</strong>：爬上小镇西侧的山丘小路，回头一瞥。你会看到一幅层次分明的画卷：近处是自家后院晾晒的床单在微风中飘动，中间是密密麻麻、高低错落的红瓦白墙酒窖屋顶，远处则是如绿色天鹅绒般铺展开的、修剪整齐的葡萄园，一直延伸到远山的轮廓线。午后的阳光斜射过来，给每一片叶子、每一面墙都勾勒出金色的边，光影对比强烈，宁静而富有生命力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>酒标上的艺术与家族纹章</strong>：在品酒屋或商店，留意不同酒庄的酒标。它们不仅是品牌，更是微型艺术品和家族史。有的画着高脚酒窖的素描，有的用现代抽象线条表现葡萄藤，更有传统酒庄会使用家族徽章或创始人肖像。每一个设计都在讲述：“这是一瓶有来历、有态度的酒。”收集这些不同的酒标，就成了收集维拉尼的故事碎片。" }} />
            </div>
          </Section>

          <Section title={`5. 维拉尼自由行避坑指南：最佳时间、穿着与品酒须知`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天这份维拉尼私藏旅游攻略，核心就是帮你玩得尽兴不踩坑。第一，<strong>时间选择</strong>：最佳游览季节是<strong>5-6月</strong>（绿意盎然，气候宜人）和<strong>9-10月</strong>（收获季，活动多，但需提前预订）。盛夏7-8月非常炎热，尽量安排早晚户外活动。许多酒庄周日和周一休息，行程规划时切记避开。第二，<strong>穿着与行装</strong>：小镇多石板路和坡道，<strong>务必穿一双绝对舒适的步行鞋</strong>。即使夏天，也带件薄外套，因为地下酒窖常年只有12-14度，内外温差大。准备一个好看又结实的包，你很可能忍不住买几瓶酒带走。第三，<strong>品酒与预约</strong>：不要指望随便走进一家酒庄就能免费品尝高级酒。大部分精品酒庄的<strong>地窖导览和品鉴都需要提前邮件或电话预约</strong>，这是对酿酒师的尊重，也能确保你获得最好的体验。品酒时，即使不买也完全没关系，但记得礼貌致谢。自驾者请务必指定一位“司机”，品酒不开车。小镇中心停车位紧张，尽量使用公共停车场。" }} />
            </div>
          </Section>

          <Section title={`6. 维拉尼周边住宿与美食攻略：住在酒窖旁，品在地风味`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "想真正融入维拉尼的节奏，建议在这里住一晚。<strong>住宿</strong>方面，小镇有许多由高脚酒窖改造的<strong>精品民宿（Panzió）和家庭旅馆</strong>，如“Vineyard Loft”或“Bor és Panzió”，它们通常房间不多，但装饰温馨，主人可能就是酿酒师，能给你最地道的建议。醒来就在葡萄园边的感觉无与伦比。<strong>餐饮</strong>是重头戏。午餐可以去 <strong>“Fricska”</strong>，它就坐落在一排高脚酒窖中，氛围轻松，将传统匈牙利菜做得精致，鸭肝、红酒烩牛肉是招牌，酒单全是本地精华。晚餐推荐 <strong>“Borbíró”</strong>，这里更像个美食酒馆，菜品创意十足，擅长用当地食材搭配维拉尼红酒，需预订。别忘了试试本地特色的 <strong>“维拉尼香肠”（Villányi Kolbász）</strong> 佐酒。街头小摊的<strong>林茨蛋糕（Linzer）”</strong> 也是不错的甜点选择。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果你有一天余裕，强烈推荐两个周边探索。一是向北车程约20分钟的<strong>锡克罗斯城堡（Siklós Castle）</strong>。这座保存完好的中世纪城堡雄踞山丘，内部有博物馆、酒窖和酷刑展览，登塔可眺望巴兰尼亚州全景。城堡本身也产酒，可以品尝“城堡标签”的葡萄酒，将历史与美酒体验结合。二是向西南开车15分钟，进入<strong>维拉尼山丘（Villányi-hegység）</strong> 的更深处的葡萄园小径徒步或骑行，拜访更小众的家庭酒庄，如 <strong>Gere</strong> 或 <strong>Tiffán</strong>，那里的体验更加私密和原始，你能看到葡萄园最未经修饰的壮美，与酿酒师进行更深入的交流。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "维拉尼的灵魂，是阳光、石头与葡萄藤三者历经数百年写就的一首田园诗。它教会我们的，不仅是品鉴一杯好酒，更是去欣赏那种扎根于土地、专注于一事、并将成果与人慷慨分享的“慢”生活哲学。在这里，每一口红酒，都是饮下一片风土，一段时光。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/szekszard" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塞
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塞格萨德</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Szekszárd</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/visegrad-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维谢格拉德（多瑙河湾的云端皇宫遗址）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Visegrád</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/szombathely-isis-temple-roman-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    松
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">松博特海伊</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Szombathely</p>
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
