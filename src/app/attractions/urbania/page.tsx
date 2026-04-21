import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '乌尔巴尼亚自由行指南：探秘公爵宫与震撼“死者教堂”的深度旅游攻略',
  description: '这份乌尔巴尼亚（Urbania）深度游攻略，带你探索意大利马尔凯的秘密瑰宝，从文艺复兴公爵宫到令人屏息的“死者教堂”木乃伊，解锁震撼心灵的旅行体验。',
}

export default function UrbaniaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '意大利', href: '/destinations/europe' },
            { label: '马尔凯', href: '/destinations/europe' },
            { label: '乌尔巴尼亚', href: '/attractions/urbania' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`乌尔巴尼亚・Urbania・意大利・马尔凯`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果让我推荐一个能让你彻底忘记罗马、佛罗伦萨人潮的意大利小镇，乌尔巴尼亚绝对是头号选择。今天这份私藏的 **乌尔巴尼亚旅游攻略** ，就带你躲开喧嚣，深入亚平宁山脉褶皱里的一颗“时光胶囊”。它远不止是地图上一个安静的名字，当你踏入其中，会被两种极致的体验击中：一是文艺复兴时期公爵宫殿无与伦比的优雅与书卷气；二是教堂地下室里，十几具跨越数百年的自然木乃伊带来的、直击灵魂的生死沉思。作为你的专属向导，这份 **自由行指南** 请收好，我们将一起揭开这个小镇明暗交织的双面灵魂，保证让你的意大利之行，深刻到骨子里。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友，如果让我推荐一个能让你彻底忘记罗马、佛罗伦萨人潮的意大利小镇，乌尔巴尼亚绝对是头号选择。今天这份私藏的 <strong>乌尔巴尼亚旅游攻略</strong> ，就带你躲开喧嚣，深入亚平宁山脉褶皱里的一颗“时光胶囊”。它远不止是地图上一个安静的名字，当你踏入其中，会被两种极致的体验击中：一是文艺复兴时期公爵宫殿无与伦比的优雅与书卷气；二是教堂地下室里，十几具跨越数百年的自然木乃伊带来的、直击灵魂的生死沉思。作为你的专属向导，这份 <strong>自由行指南</strong> 请收好，我们将一起揭开这个小镇明暗交织的双面灵魂，保证让你的意大利之行，深刻到骨子里。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`乌尔巴尼亚`} />
                <InfoRow label="英文名称" value={`Urbania`} />
                <InfoRow label="正式名称" value={`Urbania`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`马尔凯`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`乌尔巴尼亚在历史上有个更响亮的名字——卡斯泰尔杜兰特（Casteldurante），尤其在文艺复兴时期，这里是欧洲首屈一指的 majolica（马略利卡锡釉陶器）和珍贵手稿抄本的中心。它的命运与德拉·罗维雷（Della Rovere）和乌尔比诺公爵家族紧密相连。在16世纪，它成为了乌尔比诺公爵领地的一部分，并从公爵弗朗切斯科·马里亚二世那里获得了“乌尔巴尼亚”这个新名字，意为“乌尔比诺的城市”。这里不仅是艺术与工艺的重镇，更因公爵的青睐而成为知识与权力的后花园。公爵宫（Palazzo Ducale）内设的庞大图书馆和档案馆，收藏了数以万计的手稿、古籍和地图，使其成为当时整个意大利半岛最重要的知识宝库之一，其文化影响力辐射整个亚平宁半岛甚至欧洲。它像一位低调的学者，在乌尔比诺公爵国的辉煌阴影下，安静地守护着文艺复兴的智慧火种与精湛工艺。`} />
                <InfoRow label="建筑特色" value={`**公爵宫（Palazzo Ducale）** 是小镇绝对的中心与颜值担当。它不像其他贵族府邸那样追求外放的宏伟，而是一种内敛的、砖石结构的沉稳力量。建筑外立面是温暖的赭石色，由本地烧制的陶砖砌成，历经数百年风雨，颜色沉淀得如同傍晚时分的阳光。窗户是典型的文艺复兴拱形窗，规整而优雅，窗棂的线条简洁有力。最吸引人的是它那个巨大的内部庭院，四面被带拱廊的回廊环绕，地面铺着被岁月磨得光滑的鹅卵石。当你站在庭院中央抬头看，天空被规整的文艺复兴几何线条框成一幅画，光影在赭色的墙壁上缓慢移动，仿佛能听到几个世纪前学者与艺术家在此踱步、辩论的低声回响。建筑材质本身诉说着故事——砖石的粗砺与木制窗框的细腻、石雕的冷峻与陶土瓦片的温润，共同构成了这种独特的、属于马尔凯内陆的坚实美感。`} />
                <InfoRow label="建筑风格" value={`公爵宫是文艺复兴风格与后期曼努埃尔风格（一种受西班牙影响的装饰风格）的融合典范。文艺复兴风格在这里体现为对古典比例、对称与和谐的极致追求。整个宫殿的布局、庭院拱廊的柱式，都严格遵守着人文主义的数学美感，给人一种理性、宁静、秩序井然的视觉感受。而曼努埃尔风格的痕迹，则更多地体现在一些装饰细节上，比如某些门框或壁炉上复杂而华丽的石雕纹饰，那种带着点异域风情的卷草、贝壳和绳索图案，为庄重的文艺复兴基调注入了一丝灵动与奢华。这种混合风格恰恰是乌尔巴尼亚历史地位的缩影：它根植于意大利本土的文艺复兴沃土，又因其公爵与欧洲其他王室的联姻与交流，吸纳了外来的文化元素，最终形成自己独特而不张扬的建筑语言，沉稳中藏着精妙的细节。`} />
                <InfoRow label="文化价值" value={`乌尔巴尼亚的文化价值是双轨并行的，明亮与幽暗交织。光明面由公爵宫承载，它至今仍是小镇的文化心脏，宫殿内的博物馆、图书馆和档案馆，保存的不仅是古籍和陶器，更是几个世纪以来对知识、艺术和美的追求传统。它让乌尔巴尼亚人引以为傲的“书籍之城”身份得以延续。而它的另一面，则是 **“死者教堂”（Chiesa dei Morti）** 所带来的、对生命哲学的直白叩问。这里保存的18具自然风化的木乃伊，并非恐怖展览，而是一种极为特殊的历史人类学档案和宗教实践遗存。它们迫使每一个来访者直面生命的有限性，这种强烈的体验在当今追求即时快乐的社会里显得尤为珍贵和具有冲击力。它挑战我们的感官，也引发关于存在、记忆与永恒的深层思考。这两者共同塑造了乌尔巴尼亚独特的文化人格：既珍视现世的美好与智慧（公爵宫），也坦然凝视死亡的本质（死者教堂），构成了一种完整而深刻的生命观。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 乌尔巴尼亚一日游经典打卡路线攻略：从文艺复兴光辉到永恒沉思`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`完美串联核心景点的自由行步行路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好啦，跟着我的路线，咱们用一天时间，把乌尔巴尼亚的精华稳稳拿捏。**早晨（9:00-12:30）**：建议坐早班车抵达，先在主广场（Piazza del Municipio）的咖啡馆来一杯意式浓缩，看着小镇在晨光中苏醒。然后，重头戏开场——直奔 **公爵宫（Palazzo Ducale）**。至少留出2小时在这里，慢慢逛它的庭院、市立博物馆（看惊艳的陶器收藏）和那个令人叹为观止的历史地图画廊。**中午（12:30-14:30）**：从公爵宫出来，沿着宁静的街道漫步，找一家本地 trattoria（小餐馆）享用午餐，务必尝尝马尔凯特色的橄榄油烤野猪肉（Cinghiale in umido）和手作意面。**下午（14:30-17:00）**：带着饱足感（也需要一点勇气），前往今天的第二个核心—— **“死者教堂”（Chiesa dei Morti）** 。这里需要一些心理准备，建议在入口处静默片刻再进入地下室。参观时间约1小时，但带来的思绪回荡可能会持续更久。之后，可以在小镇蜿蜒的砖石小巷里随意走走，消化一下复杂的情绪，拍拍那些爬满藤蔓的古老门廊。**傍晚（17:00后）**：回到主广场，在夕阳下喝杯开胃酒，然后选择一家温馨的餐厅用晚餐，结束这趟穿梭于极致美与深沉思之间的一天。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>公爵宫地图画廊的“世界之窗”</strong>：在公爵宫二楼，你会进入一个挂满巨大古地图的房间。停下脚步，仔细看那幅16世纪的《乌尔比诺公爵国地图》。它不是冰冷的地理描绘，而是一件艺术品——山脉用淡淡的棕色晕染，海洋里有精心绘制的海怪与帆船，城镇被画成微缩的城堡模型。你会看到“卡斯泰尔杜兰特”（乌尔巴尼亚旧名）被清晰地标注，旁边可能还有一个举着旗帜的小人。那一刻，你仿佛透过制图师的眼睛，看到了文艺复兴贵族如何理解并骄傲地展示他的领地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>“死者教堂”木乃伊的“帽子”</strong>：在地下室昏黄的灯光下，那排靠墙站立的木乃伊极具视觉冲击。请不要匆匆掠过，靠近观察其中一具被称为“律师”的木乃伊。注意他头上还戴着一顶几乎与头皮融在一起的、风干塌陷的羊毛帽。这个细节瞬间将“标本”还原为“人”——他不是一个抽象的死亡象征，而是一个曾经戴着帽子、行走在18世纪乌尔巴尼亚街道上的具体个体。帽子这个日常物件，让数百年的时间鸿沟骤然缩小，死亡变得具象而私人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>公爵宫回廊的光影游戏</strong>：中午时分，阳光垂直射入公爵宫的中央庭院。这时，请站在回廊的某一根柱子旁观察。阳光将二层拱廊的弧形阴影，精准地投射在一层拱廊的墙壁上，形成一串重叠的、深浅不一的阴影弧线。赭石色的墙壁成为画布，光与影在进行一场寂静的、每日重演的几何芭蕾。这个瞬间没有任何文物，却最能让你感受到文艺复兴建筑对比例和光的崇拜，宁静而充满力量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>小镇街角的陶器装饰</strong>：在随意漫步时，留意一些古老建筑的门楣、窗台或墙角。你常会发现镶嵌着的、蓝白相间的马略利卡陶器装饰盘碎片或小瓷片。这些残片可能绘着简单的家族纹章、花朵或寓言图案。它们是这个“陶器之都”辉煌过去的微小印记，像不起眼的化石，默默诉说着小镇曾流淌在指尖的陶瓷艺术血液，将宏大的历史叙事融入日常生活的肌理。" }} />
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>时间选择与人流躲避</strong>：乌尔巴尼亚本身就很 <strong>小众</strong> ，但为了最佳体验，请绝对避免在8月全国假期（Ferragosto）期间前往，那时意大利人也会涌向小镇。最佳时间是 <strong>春季（4-6月）和秋季（9-10月）的平日</strong> ，天气舒适，几乎独享美景。死者教堂内部空间狭小，如果遇到迷你旅行团（极少数情况），建议在门外稍等，享受静谧的参观体验至关重要。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>穿着与心理准备</strong>：小镇街道多为鹅卵石，请务必 <strong>穿一双绝对舒适、防滑的步行鞋</strong> 。参观 <strong>“死者教堂”</strong> 有着装要求（虽不严格），避免过于暴露的衣物，以示尊重。更重要的是 <strong>心理建设</strong> ：死者教堂不适合儿童、心理承受能力较弱或纯粹寻求轻松娱乐的游客。进入前请确保自己做好准备，这是一种关于生命的教育，而非猎奇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>交通与票务实用贴士</strong>：乌尔巴尼亚 <strong>没有火车站</strong> ，最近的主要交通枢纽是佩萨罗或乌尔比诺，需搭乘 <strong>公交（本地公司）</strong> 抵达。务必提前查询好班次，特别是返程时间，因为下午班次可能稀少。<strong>门票</strong> 方面，公爵宫和死者教堂通常有联票，直接在公爵宫入口购买即可。周一许多博物馆可能闭馆，行前务必再次确认开放时间。" }} />
            </div>
          </Section>

          <Section title={`6. 乌尔巴尼亚及周边住宿与地道美食攻略推荐`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "想沉浸在这座小镇的昼夜交替中，强烈建议在这里住一晚。小镇中心有几家由古老宫殿改造的 <strong>B&B（民宿）</strong> ，比如位于历史建筑内的“Palazzo Collegio Pio”，能让你在古老的壁画下入睡，清晨在无人的广场上享用房东准备的家常早餐。如果追求更现代的舒适，小镇外围也有安静的农庄住宿（Agriturismo），坐享马尔凯丘陵的田园风光。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "餐饮是另一大乐趣。午餐推荐主广场附近的 <strong>“Osteria del Pozzo”</strong> ，家庭经营，氛围亲切。一定要试试 <strong>“Passatelli in brodo”</strong> ——一种用面包屑、帕玛森奶酪和鸡蛋制成的面疙瘩，在浓郁鸡汤里煮制，是马尔凯奶奶们的拿手 comfort food。晚餐可以去 <strong>“Ristorante La Taverna del Leone”</strong> ，他们的松露意面（尤其是白松露季节）和用当地萨格朗蒂诺葡萄酒炖煮的牛肉，能彻底征服你的味蕾。记得留点肚子给当地的硬质奶酪 “Casciotta di Urbino”。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>乌尔比诺（Urbino）</strong>：这座 <strong>世界文化遗产</strong> 名城距离乌尔巴尼亚仅约30分钟车程（公共交通可达），是文艺复兴爱好者不可错过的朝圣地。参观恢弘的 <strong>公爵宫（Palazzo Ducale di Urbino）</strong> 和拉斐尔的故居，能让你将乌尔巴尼亚公爵宫的故事，放入乌尔比诺公爵国更广阔辉煌的画卷中理解，完成一次完美的文艺复兴主题 <strong>深度游</strong> 串联。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>弗拉萨西溶洞（Grotte di Frasassi）</strong>：如果你被“死者教堂”的地下世界所震撼，那么不妨再探索一个更宏伟的“地下世界”。驾车约1小时，可以抵达欧洲最壮观的地下溶洞之一——弗拉萨西溶洞。乘坐导游进入其中巨大的“安科纳深渊”洞穴，欣赏经过数百万年形成的、如奇幻城堡般的钟乳石和石笋，这趟从人文历史到自然奇观的延伸，会带来另一种极致的感官体验。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "乌尔巴尼亚教会我，真正的深度旅行，是敢于同时拥抱生命极致的璀璨与寂静的消亡。它的灵魂，一半封存在公爵宫羊皮纸的墨香与陶器的釉光里，另一半，则安静地站立在死者教堂地下室的微光中，向你发出跨越数百年的、关于存在的无声诘问。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/grazzano-visconti" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格拉扎诺维斯孔蒂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Grazzano Visconti</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vitorchiano-cliff-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维托尔基亚诺</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vitorchiano</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/trevi-umbria" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特雷维</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trevi</p>
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
