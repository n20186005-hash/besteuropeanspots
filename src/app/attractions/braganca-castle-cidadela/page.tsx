import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布拉干萨城堡旅游攻略：活在中世纪城墙内的终极自由行指南',
  description: '探索葡萄牙的“鹰巢”——布拉干萨城堡（Cidadela）的终极深度游攻略。这份指南带你走进欧洲保存最完好的中世纪城堡区，体验时光倒流的感觉。',
}

export default function BragancaCastleCidadelaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '布拉干萨城堡（城堡区）', href: '/attractions/braganca-castle-cidadela' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`布拉干萨城堡（城堡区）・Bragança Castle (Cidadela)・葡萄牙・布拉干萨区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果厌倦了人挤人的热门城堡，今天这份布拉干萨城堡私藏旅游攻略，就带你躲开人潮，钻进葡萄牙东北角最硬核、最“活着”的中世纪世界。开车前往布拉干萨，远远就能看见它——整座城堡像一头花岗岩巨兽，雄踞在圣若泽山丘上，沉默地镇守着特拉斯-奥斯-蒙蒂斯荒原。这不仅仅是一个景点，而是一个至今仍有数百位居民生活在厚重城墙之内的“城堡区”（Cidadela），是伊比利亚半岛军事防御建筑的瑰宝。作为你的专属向导，这份自由行指南会告诉你，如何触摸那些冰冷的战争痕迹，又如何感受城墙内温热的人间烟火，真正看懂这座边境堡垒的灵魂。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，如果厌倦了人挤人的热门城堡，今天这份布拉干萨城堡私藏旅游攻略，就带你躲开人潮，钻进葡萄牙东北角最硬核、最“活着”的中世纪世界。开车前往布拉干萨，远远就能看见它——整座城堡像一头花岗岩巨兽，雄踞在圣若泽山丘上，沉默地镇守着特拉斯-奥斯-蒙蒂斯荒原。这不仅仅是一个景点，而是一个至今仍有数百位居民生活在厚重城墙之内的“城堡区”（Cidadela），是伊比利亚半岛军事防御建筑的瑰宝。作为你的专属向导，这份自由行指南会告诉你，如何触摸那些冰冷的战争痕迹，又如何感受城墙内温热的人间烟火，真正看懂这座边境堡垒的灵魂。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`布拉干萨城堡（城堡区）`} />
                <InfoRow label="英文名称" value={`Bragança Castle (Cidadela)`} />
                <InfoRow label="正式名称" value={`Bragança Castle (Cidadela)`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`布拉干萨区`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`布拉干萨城堡的故事，是一部写在石头上的葡萄牙边境史诗。它的前身可以追溯到凯尔特人时期，但我们今天看到的雄伟轮廓，主要源于12世纪阿方索·亨里克国王下令的重建，目的是巩固刚从摩尔人手中夺回的北部边境。在接下来的几个世纪里，它成为了布拉干萨公爵家族（后来诞生了葡萄牙布拉干萨王朝国王）的权力基石和军事前哨。它所处的位置至关重要，俯瞰着连接葡萄牙和西班牙卡斯蒂利亚的古老道路，是无数次边境冲突与谈判的沉默见证者。值得一提的是，与许多沦为纯粹博物馆的城堡不同，布拉干萨的城堡区从未被遗弃。它持续有人居住的功能性，使其成为欧洲中世纪城市规划的一个罕见“活化石”。这里的街道布局、房屋位置甚至社区关系，都延续着数百年前的逻辑，让你走进去的每一步，都踩在真实的历史脉络上，而不只是观赏一个被抽空的标本。`} />
                <InfoRow label="建筑特色" value={`走近它，首先会被那种粗粝、强悍的美学震撼。城堡整体由当地采掘的灰色花岗岩砌成，经过数百年风雨，石头呈现出从深灰到泛着金黄的复杂色调。城墙不是规整的几何形，而是完美地顺应陡峭的山脊线蜿蜒，像给山体套上了一层岩石铠甲。主塔楼高耸入云，足有25米，墙壁厚得惊人（据说超过3米），底部几乎没有窗户，只在顶部设有垛口和观察孔，完全是一副拒人千里之外的战斗姿态。仔细观察城墙，你会发现曼努埃尔式风格的窗饰——精致的石雕绳纹环绕着窗户，这是葡萄牙大航海时代财富与艺术的印记，为刚毅的军事建筑增添了一抹难得的优雅。城堡巨大的老城门依然保存着原始的吊闸装置和门轴痕迹，当你穿过门洞的阴影时，仿佛能听到铁链绞动、马蹄回响的穿越之声。`} />
                <InfoRow label="建筑风格" value={`布拉干萨城堡是罗马式军事建筑与后期曼努埃尔式装饰风格交融的典范。其核心是严谨的罗马式军事设计：强调坚固、实用和威慑。巨大的塔楼、狭窄的箭窗、居高临下的城墙，一切以防御为最高准则，线条直接，毫无赘饰。然而，在15世纪末16世纪初，随着布拉干萨公爵地位的提升和葡萄牙曼努埃尔一世国王统治下国家的鼎盛，这座城堡也迎来了它的“精装修”时期。这就是曼努埃尔风格的渗透，这是一种独一无二的葡萄牙式晚期哥特风格，充满了对大海、航行和异域探索的致敬。在城堡的宫殿部分（现为军事博物馆），你能在窗框、门楣上看到精美的石绳纹饰、船锚、浑天仪等海洋元素的雕刻。这种组合非常奇妙：一面是陆地上最保守、最内向的边境防御思维，另一面却雕刻着这个民族最外向、最充满冒险精神的海洋梦想。两种风格在城堡里碰撞共存，恰恰是葡萄牙民族性格——既保守又开拓——最生动的建筑写照。`} />
                <InfoRow label="文化价值" value={`布拉干萨城堡的文化价值，远不止于旅游手册上的“保存完好”。它是整个布拉干萨市的精神摇篮和身份象征，被当地人亲切地称为“鹰巢”。城堡区内生活的居民，是这种文化遗产的真正守护者。他们不是在表演生活，而是在延续一种与石头共生的传统。这里的圣玛利亚教堂依然是社区活动的中心，狭窄的鹅卵石街道上飘着邻居家炖菜的香气，孩子们在古老的城墙根下玩耍。每年六月，城堡区会举办盛大的圣若昂节，届时中世纪城墙内将充满音乐、舞蹈和传统服饰，历史瞬间被激活。此外，城堡内的军事博物馆收藏了从中世纪到第一次世界大战的丰富武器和军服，它不仅仅是展陈，更是在提醒人们，和平的日常生活曾多么依赖于这些坚固的城墙和守卫它的决心。因此，这座城堡教会游客的，不是一段死去的往事，而是一种坚韧的生存哲学——如何在高处、在边境、在历史的巨浪中，守护一个社区的温度与记忆。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 布拉干萨城堡一日游打卡路线攻略：从战争伤痕到人间烟火`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行路线：完美串联城堡精华`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的向导，我设计的这条一日游路线，能让你从外到内、从宏观到微观，完美消化这座城堡。上午（9:00-12:30）：别睡懒觉！趁阳光柔和、旅行团还没抵达，从山脚下的老城慢慢步行上山。首先在城堡外围的观景台停留，欣赏它全景的威严，拍下“鹰巢”晨光。然后从老城门进入城堡区，立刻右转，沿着城墙步道顺时针走一圈。这段路是布拉干萨城堡深度游的精华，你能从各个角度感受城墙的尺度，俯瞰山下的红色屋顶和新城。走完一圈后，直奔核心——攀登主塔楼。旋转的石阶狭窄昏暗，但顶部的视野绝对值回票价，你能360度看清边境山地的苍茫。下来后，参观塔楼旁的军事博物馆，了解城堡的战争史。中午（12:30-14:00）：就在城堡区内解决午餐！找一家家庭式小餐馆，感受在千年城墙内用餐的奇妙。下午（14:00-17:00）：悠闲探索城堡区内部。参观圣玛利亚教堂，看看它质朴的内部。然后，忘掉地图，随意钻进那些只容一人通过的小巷弄，听听居民的聊天声，看看他们窗台上的花草。找找传说中的“总督之屋”和古老的石 Pillory（耻辱柱）。最后，在日落前，再次回到城墙的某个垛口，看夕阳把整个石头城堡和远方荒野染成金色，结束这趟穿越之旅。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  主塔楼顶的“风信鸡”： 爬上主塔楼顶，除了震撼的视野，别忘了抬头看塔尖。那里立着一只造型古朴的铜制公鸡——葡萄牙的国家象征。它不仅是风向标，更是一个绝妙的隐喻。在这样一个充满男性战争气息的堡垒最高点，一只公鸡昂首站立，仿佛在宣告：晨光驱散黑暗，生命（与啼鸣）终将取代战争的死寂。用手遮住阳光，逆光看它小小的剪影在无尽的蓝天中转动，那一刻的感触胜过千言万语。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  中世纪粮仓与马厩的巧思： 在城堡区内，留意那些底层带有巨大花岗岩拱门的建筑。这些不是普通房屋，而是中世纪的公共粮仓和军马厩。拱门设计是为了让马车可以直接进入，厚重的石墙保证了内部阴凉干燥。想象一下，战争时期这里囤积着养活全城人的谷物，拴着冲锋陷阵的战马；和平时期，则是市集和社区中心。触摸那些被车轴磨出凹痕的门槛石，历史的实用主义智慧触手可及。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  城墙步道上的“骑士”雕像： 在环绕城墙的步道中途，你会遇到一尊现代设立的骑士雕像。他并非指向具体的敌人，而是面容沉静地眺望着远方的国土。这个细节很容易被忽略，但它完美地表达了城堡的精神：守卫不是为了杀戮，而是为了守望。站在他身旁，顺着他目光的方向看去，你会看到绵延的山丘、河流与森林，那正是他和他所代表的无数无名守卫者曾誓死保护的宁静家园。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  “战争之眼”与“和平之景”： 找一个狭窄的箭孔或炮眼，把眼睛凑上去。你的视野会被强制压缩成一个狭长的框架，这正是中世纪守城士兵的视角——警惕、受限、充满危机感。但有趣的是，透过这个为战争设计的孔洞，你今天看到的，很可能是城堡区内某户人家晾晒的彩色床单、一个老人坐在门口晒太阳的安详侧影，或是远处平原上悠然吃草的羊群。这个小小的动作，是这趟旅程最深刻的瞬间：通过战争的工具，窥见了和平的日常。`}</p>
            </div>
          </Section>

          <Section title={`5. 布拉干萨城堡自由行避坑指南与行前须知`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  时间选择是王道： 最佳游览时间是春季（4-6月）和初秋（9-10月），天气凉爽，光线绝佳。夏季中午暴晒，城墙步道毫无遮阴；冬季这里风大寒冷，体感不佳。尽量避开周末下午，那是本地家庭出游的高峰。想要拍出无人的大片，秘诀就是做“早鸟”，在上午10点前进入城堡区。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  鞋子！鞋子！鞋子！： 这是最重要的避坑指南。城堡区内全是凹凸不平的古老鹅卵石路，上下坡多，攀登主塔楼的石阶又窄又滑。请务必穿一双防滑、鞋底支撑好的运动鞋或徒步鞋。穿凉鞋或皮鞋会让你步履维艰，甚至摔倒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  交通与门票须知： 城堡区本身是开放式街区，24小时免费进入。只有攀登主塔楼和进入军事博物馆需要购买一张非常便宜的通票。自驾的朋友可以导航到山脚下的付费停车场，然后步行上山（约10-15分钟），不要试图开车进城堡区，里面路极窄且仅限居民通行。从里斯本或波尔图过来火车班次有限，提前规划好时间。`}</p>
            </div>
          </Section>

          <Section title={`6. 布拉干萨城堡周边住宿与美食攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`想沉浸式体验，强烈推荐住在城堡山脚下的老城区。这里有不少由古老石屋改造的特色客栈，价格亲民，风格十足。比如“Casa de S. Francisco”，房间就能望见城堡夜景，老板会给你讲很多本地故事。如果追求更高舒适度，新城也有现代酒店。餐饮方面，城堡区内有几家宝藏小馆。推荐尝试“Cidadela”餐厅，就在城墙边，露台座位 view 无敌。一定要点特拉斯-奥斯-蒙蒂斯地区的特色菜，比如用多种肉和豆子慢炖的“Cozido à Transmontana”，或者美味的烤乳猪和山地熏肠。搭配本地产的红葡萄酒，醇厚有力。下午逛累了，可以在出城堡后，去山脚下的“Café na Cidade”喝杯咖啡，尝尝地道的葡萄牙蛋挞，看着当地人下棋聊天，完美融入当地节奏。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`从城堡步行下山，10分钟内就能到达两个值得一逛的延伸点。首推Domus Municipalis，这座位于圣玛利亚教堂旁的五边形罗马式建筑，是伊比利亚半岛独一无二的民间罗马式建筑，曾是市政厅和水库，其奇特的造型和厚重的历史感，会让你对中世纪的民用建筑有新的认识。接着，可以漫步到Sé de Bragança主教座堂。这座16世纪修建的教堂外观朴素如堡垒，内部却是华丽的巴洛克风格，特别是镀金的木雕祭坛，璀璨夺目，与城堡的质朴刚健形成鲜明对比。这种组合，让你在一天内领略到布拉干萨的两种面孔：对外是坚硬的军事铠甲，对内则是对信仰与艺术的温柔倾注。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`布拉干萨城堡的魅力，在于它从未死去。它不仅仅是一堆冷硬的石头和战争遗骸，而是一个依然呼吸、心跳的有机体。它的灵魂，是花岗岩的坚韧与小巷里飘出的饭香交织而成的，是垛口上遥远的瞭望与窗台上近在咫尺的天竺葵共同谱写的。它告诉你，最好的守护，不是把历史锁进玻璃柜，而是让它继续成为生活的背景和基石。这趟旅程结束，你带走的将不是几张照片，而是一种关于“家园”和“坚韧”的、沉甸甸的温暖质感。这份深度游攻略想给你的，正是这把打开它真实灵魂的钥匙。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/castelo-branco" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布朗库堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Castelo Branco</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/alcobaca-monastery" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔科巴萨修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alcobaça Monastery</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/evora-bone-chapel-historic-centre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃武拉人骨教堂与古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Evora Bone Chapel and Old Town</p>
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
