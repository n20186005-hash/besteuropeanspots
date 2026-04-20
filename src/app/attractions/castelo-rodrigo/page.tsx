import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡斯特卢-罗德里古深度旅游攻略：悬崖孤村的千年守望与自由行指南',
  description: '探索葡萄牙隐秘瑰宝卡斯特卢-罗德里古(Castelo Rodrigo)，一份涵盖历史、建筑与徒步路线的深度游攻略，带你走进13世纪边境堡垒的苍凉与壮美。',
}

export default function CasteloRodrigoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '卡斯特卢-罗德里古', href: '/attractions/castelo-rodrigo' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卡斯特卢-罗德里古・Castelo Rodrigo・葡萄牙・瓜达区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你厌倦了里斯本的人潮和波尔图的酒香，想找一处真正能听见历史风声的地方，那今天这份卡斯特卢-罗德里古私藏旅游攻略，就是为你准备的。它不在常规的旅行线路上，像一颗被遗忘在时间褶皱里的宝石，孤傲地矗立在葡萄牙东部靠近西班牙边境的荒凉高地上。这里没有精致的咖啡馆连锁店，只有13世纪城堡的残垣断壁，和一个几乎被时光凝滞的古老村落。作为你的专属向导，这份自由行指南将带你穿越的不只是空间，更是一段关于边境、战争与坚韧的厚重记忆。准备好你的徒步鞋和一颗安静的心，我们出发吧。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，如果你厌倦了里斯本的人潮和波尔图的酒香，想找一处真正能听见历史风声的地方，那今天这份卡斯特卢-罗德里古私藏旅游攻略，就是为你准备的。它不在常规的旅行线路上，像一颗被遗忘在时间褶皱里的宝石，孤傲地矗立在葡萄牙东部靠近西班牙边境的荒凉高地上。这里没有精致的咖啡馆连锁店，只有13世纪城堡的残垣断壁，和一个几乎被时光凝滞的古老村落。作为你的专属向导，这份自由行指南将带你穿越的不只是空间，更是一段关于边境、战争与坚韧的厚重记忆。准备好你的徒步鞋和一颗安静的心，我们出发吧。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卡斯特卢-罗德里古`} />
                <InfoRow label="英文名称" value={`Castelo Rodrigo`} />
                <InfoRow label="正式名称" value={`Castelo Rodrigo`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`瓜达区`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`卡斯特卢-罗德里古的历史，就是一部浓缩的葡萄牙边境史诗。它的战略地位至关重要——居高临下，俯瞰着茫茫的边境平原（Planície de Côa），是监视和防御来自东方（即西班牙）威胁的前哨。村庄最初的堡垒由莱昂国王阿方索九世在12世纪建造，后来成为葡萄牙王国巩固东部边境的关键一环。1297年，随着《阿尔卡尼塞斯条约》的签订，它才正式划归葡萄牙。这里最浓墨重彩的一笔发生在16世纪，当葡萄牙王位继承危机爆发，大部分村民支持来自西班牙的菲利普二世，而城堡的守军却效忠本土的安东尼奥 Prior do Crato。在城堡被菲利普二世的军队攻陷后，村民遭到了报复性的劫掠与焚毁，村庄从此一蹶不振，走向衰落。这段创伤记忆，让卡斯特卢-罗德里古不仅仅是座军事堡垒，更成了一个民族身份与忠诚抉择的悲情象征，在欧洲边境冲突史上留下了独特的注脚。`} />
                <InfoRow label="建筑特色" value={`走近卡斯特卢-罗德里古，最震撼的莫过于它的材质与色彩。整个村落和城堡都是由当地开采的花岗岩垒砌而成，石头没有经过精细打磨，粗糙的表面在数百年风吹日晒下，呈现出一种从浅灰到深褐、再到铁锈红的丰富层次，像大地本身生长出的铠甲。那座标志性的十三世纪圆塔堡垒（Torre de Menagem） 是绝对的视觉焦点，它敦实、厚重，没有花哨的装饰，顶部已经坍塌，露出天空，仿佛一个被斩首的巨人依然倔强地站立。城墙蜿蜒起伏，与陡峭的悬崖地形完美融合，许多段落已经崩塌，巨大的石块散落在斜坡上，生出斑驳的苔藓。穿行在村内，脚下的石板路被岁月磨得光滑而起伏，两旁的房屋多数没有屋顶，只剩下石质的窗框和门洞，像一双双空洞的眼睛，凝视着来往的寥寥访客。阳光强烈时，石墙白得刺眼；黄昏时分，则被染成一片温暖的金黄，光影在残垣断壁间雕刻出深邃的轮廓。`} />
                <InfoRow label="建筑风格" value={`这里的建筑风格可以概括为质朴的中世纪军事罗马风，并带有后期一些简单的哥特式或曼努埃尔式痕迹。说它“质朴”，是因为一切服务于防御功能。厚厚的石墙、狭小的窗户（既是采光口也是射击孔）、陡峭的斜坡，都是为了抵御进攻。城堡的布局是典型的中世纪山地城堡样式，依托最高点建设主塔（圆塔），层层防御工事顺着山势向下延伸。你在村里看到的那些残存的民居，结构也非常简单，方正的格局，用厚重的石墙承重。不过，仔细寻找，你可能会在少数保存稍好的建筑（如古老的圣玛利亚教堂废墟）门楣上，看到一些简单的哥特式尖拱轮廓，或者在某个贵族宅邸的遗址上，发现一扇带有曼努埃尔式（葡萄牙晚期哥特风格）海洋元素雕饰的石窗。这些细微的装饰，是它在和平时期也曾有过繁华生活的短暂证明，但整体上，粗犷、坚固、实用的军事风格是这里绝对的主旋律。`} />
                <InfoRow label="文化价值" value={`对于现代葡萄牙人而言，卡斯特卢-罗德里古是一座活的“记忆之场”。它远离经济中心，常住人口稀少，但它的存在本身就是一种文化宣言。它提醒着人们这个国家曾经为保卫边疆所付出的代价，以及历史的复杂性与多面性（那段关于王位继承的背叛与忠诚的故事至今仍被提及）。如今，它被精心保护并列为“葡萄牙历史名村”之一，其文化价值在于它提供了一种与主流、繁荣的葡萄牙海岸线叙事完全不同的内陆边疆视角。它吸引的不仅是游客，还有历史学者、艺术家和寻求宁静与灵感的孤独旅人。当地的节庆（如中世纪集市）会努力重现历史场景，试图激活这片废墟中的社区精神。更重要的是，它象征着一种坚韧的生存哲学——即便辉煌不再，被遗忘在荒凉之地，这些沉默的石头依然在讲述，依然在葡萄牙的国家身份景观中占据着不可替代的、苍凉而崇高的一角。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 卡斯特卢-罗德里古一日游打卡路线攻略：从城堡之巅到荒村漫步`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`经典徒步探索路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好了，跟着我这份一日游路线，我们不走冤枉路。上午，一定要趁阳光还不太烈时抵达。把车停在村子外的免费停车场（这是重要避坑点，村里路窄无法通车）。从古老的石拱门“Porta do Sol”（太阳门）进入，立刻就能感受到穿越感。沿着唯一的主路“Rua da Cadeia”向上慢行，别急着冲顶，先感受两旁荒废石屋的氛围。在路的左手边，你会看到古老的蓄水池和圣玛利亚教堂的废墟，可以进去感受一下那份残缺的美。中午，走到村子相对中心的区域，那里可能有一两家由当地居民经营的小餐馆或咖啡屋（通常只在旅游季稳定开放），在这里解决午餐，尝尝简单的当地菜，比如用山里香草烤制的羊肉。下午是重头戏，继续向上抵达城堡核心区。花最多时间环绕那座巨大的圆塔，从各个角度观察它，然后一定要沿着残缺的城墙走一圈，每个垛口望出去的平原景色都令人屏息。找一处朝西的城墙缺口，那就是你傍晚看日落的VIP席位。日落时分，金光洒满整个废墟和远方的平原，是这一天的高光时刻。天黑前，慢慢沿着另一条小路下山，从不同的角度回望被夕阳点亮的城堡。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  圆塔堡垒的肌理与缺口：凑近看那座圆塔的墙体，你会清晰地看到巨石垒砌的缝隙。有些石头边缘已经风化得圆润，雨水流淌出的深色痕迹像眼泪的路径。最震撼的是从塔内抬头，透过坍塌的顶部望向天空——那一刻，你仿佛站在一个巨大的、通向历史的井底，白云缓缓飘过，时光在头顶无声流淌。塔基部分异常厚重，用手触摸，石头冰凉而粗糙，能想象当年工匠搬运它们时的艰辛。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  圣玛利亚教堂的曼努埃尔式窗框：在教堂的废墟中，仔细寻找一面残存的侧墙。上面有一扇保存相对完好的石窗，这是小众景点中的隐藏瑰宝。窗框是优雅的曼努埃尔风格，虽然雕刻不算极度繁复，但你能看到经典的浑天仪和绳索纹的浮雕装饰。在这么偏僻的边境堡垒，出现这样带有大航海时代荣耀象征的装饰，会让你瞬间恍惚——仿佛能瞥见它在16世纪初，或许也曾短暂地沐浴在帝国财富带来的精致美学之下，与后来的战火焚毁形成凄美对照。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  “鬼屋”的门楣与光影：随意走进一栋没有屋顶的民居废墟。正午时分，阳光垂直射入，在地上投出清晰的门框和窗洞的几何影子。仔细看门楣，有时会刻有简单的家族徽记或日期（比如“1567”），虽然模糊，却是一个家庭曾经存在的唯一证据。站在屋内，风声穿过空荡的窗洞发出呜咽，你可以想象几百年前，这里曾有炉火、人声和生活的温暖，此刻只剩下光影在石壁上无声地移动，那种物是人非的强烈感觉，是任何博物馆都无法给予的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  城墙落日观景台：我强烈推荐的那个朝西的城墙缺口，是你此行打卡攻略的终极目的地。傍晚，找块平整的石头坐下。眼前是毫无遮挡的、辽阔无际的边境平原，科瓦河（Rio Côa）在远处像一条银丝带。夕阳缓缓下沉，把整个天空染成橘红、粉紫到靛蓝的渐变。最关键的是，落日余晖会从背后将你身旁的残破城墙和你的剪影，长长地投射在城堡内部的地面上，构成一幅充满戏剧感的画面。光线每秒都在变化，直到最后一缕金光从圆塔的缺口消失，万籁俱寂。`}</p>
            </div>
          </Section>

          <Section title={`5. 卡斯特卢-罗德里古自由行避坑指南与行前须知`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`这份避坑指南能让你体验翻倍：第一，时间与交通：最佳游览时间是春季（4-6月）和秋季（9-10月），夏天太晒，冬天风大刺骨。这里公共交通极不便利，自驾是唯一靠谱的选择。使用导航直接设置“Castelo Rodrigo”，从瓜达（Guarda）或皮尼扬（Pinhel）开过来路况不错。务必把车停在村外指定区域，村里迷宫般的陡峭碎石路绝不是为现代汽车设计的。第二，穿着与装备：请务必、务必、务必穿防滑耐磨的徒步鞋或运动鞋！路面全是凹凸不平的古老石板和松动碎石，高跟鞋或凉鞋是“自杀行为”。这里海拔高，风非常大，哪怕夏天也带一件防风外套。帽子和防晒霜必不可少，因为毫无树木遮荫。带足饮用水，村里可能没有商店。第三，心态与安全：这里不是服务完善的景区，没有检票口（免费开放），设施简陋，请保持探索荒野遗迹的心态。尊重废墟，不要攀爬危险的石墙。由于非常僻静，建议结伴而行，天黑前务必离开。贵重物品随身带好，不过这里人迹罕至，民风淳朴，治安不是问题，最大的“坑”就是自然条件和准备不足。`}</p>
            </div>
          </Section>

          <Section title={`6. 卡斯特卢-罗德里古周边住宿与美食攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`想获得完整体验，可以考虑在附近住一晚。村子里几乎没有常规酒店，但有一些由古老石屋改造的、数量极少的乡村民宿（Turismo Rural），比如“Casa da Cisterna”或“Casa da Placa”，它们本身就身处古迹之中，住进去就像住进了历史。不过需要提前很久预订。更实际的选择是住在约15-20分钟车程外的小城皮尼扬（Pinhel） 或阿尔梅达（Almeida），那里有更多酒店和客栈选择，设施也更好。餐饮方面，在卡斯特卢-罗德里古村里，如果那家叫“A Lagariça”的家庭式小餐馆开着，一定要试试。氛围质朴得就像去邻居家吃饭，女主厨会用当地食材烹饪。必点菜品是“Cabrito à Serrana”（山地风格烤小山羊），肉质鲜嫩带有香草味；或者“Feijoada à transmontana”（一种丰盛的豆子炖肉，通常包含猪肉和香肠），味道浓郁扎实，非常适合徒步后补充能量。搭配当地产的杜罗河（Douro）红酒，简单却美味。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果时间充裕，强烈推荐以卡斯特卢-罗德里古为基点，探索这片充满故事的边境地区。第一站，开车只需15分钟，就能到达阿尔梅达（Almeida）。这是一个更大的、保存完好的星形堡垒城镇。与罗德里古的荒凉废墟不同，阿尔梅达的防御工事完整得令人惊叹，巨大的星形棱堡、深邃的护城河和错综复杂的地下坑道系统，让你直观感受到文艺复兴后期最顶尖的军事工程学，两者对比参观，趣味十足。第二站，可以向北驱车约40分钟，前往科瓦-达·贝拉（Côa Valley） 地区，那里不仅有美丽的自然风光，更以遍布史前岩画的科瓦河谷考古公园闻名。从千年堡垒到万年前人类祖先的岩画，这种时间尺度的跳跃，会让你对这片土地的神奇有更深的理解。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`卡斯特卢-罗德里古的灵魂，不在于金碧辉煌，而在于那份直面时间与荒芜的、赤裸裸的坦诚。它像一位沉默的边境老兵，伤痕累累，荣耀与伤疤都刻在石头上，无需多言。当你站在废墟中，听风穿过石缝的呼啸，你会明白，有些地方的存在，不是为了取悦你，而是为了让你学会敬畏——敬畏历史的力量，敬畏自然的消解，也敬畏人类曾在如此严酷环境中扎根的那份顽强。它给你的不是轻松的愉悦，而是一次深刻的、关于永恒与短暂的内心洗礼。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/lindoso-castle-and-espigueiros" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    林
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">林多索</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lindoso</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/braganca-castle-old-town-portugal" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布拉干萨城堡与老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bragança Old Town and Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/viseu" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维塞乌古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Viseu</p>
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
