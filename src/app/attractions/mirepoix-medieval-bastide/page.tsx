import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '米尔普瓦古城深度旅游攻略：遇见“微笑怪物”与中世纪灵魂的自由行指南',
  description: '探索法国阿列日省的瑰宝米尔普瓦（Mirepoix）。这份深度游攻略带你走进保存完好的中世纪巴斯蒂德城，揭秘木柱上上百张奇异面孔，规划完美一日游路线与避坑指南。',
}

export default function MirepoixMedievalBastidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '米尔普瓦', href: '/attractions/mirepoix-medieval-bastide' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`米尔普瓦・Mirepoix・法国・阿列日省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你厌倦了普罗旺斯的人潮和巴黎的喧嚣，想找一处时光仿佛凝固的、真正有灵魂的法国小镇，那今天这份米尔普瓦私藏旅游攻略，就是为你准备的。它藏在南法相对冷门的阿列日省，不是那种大巴车扎堆的景点，却保留着全法国最壮观、最奇幻的半木结构广场之一。想象一下，你站在一个被彩色木筋屋环绕的巨大广场上，一抬头，廊柱顶端上百张来自中世纪的、或滑稽或狰狞的木雕面孔正“盯”着你——那不是恐怖，而是一种跨越时空的、带着温度的凝视。作为一份详尽的自由行指南，我会告诉你如何避开唯一的人群高峰（周一早市），如何读懂那些“怪物”的故事，以及在哪里喝到最地道的本地葡萄酒。准备好，我们一起去揭开这座“微笑怪物之城”的面纱吧。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友，如果你厌倦了普罗旺斯的人潮和巴黎的喧嚣，想找一处时光仿佛凝固的、真正有灵魂的法国小镇，那今天这份米尔普瓦私藏旅游攻略，就是为你准备的。它藏在南法相对冷门的阿列日省，不是那种大巴车扎堆的景点，却保留着全法国最壮观、最奇幻的半木结构广场之一。想象一下，你站在一个被彩色木筋屋环绕的巨大广场上，一抬头，廊柱顶端上百张来自中世纪的、或滑稽或狰狞的木雕面孔正“盯”着你——那不是恐怖，而是一种跨越时空的、带着温度的凝视。作为一份详尽的自由行指南，我会告诉你如何避开唯一的人群高峰（周一早市），如何读懂那些“怪物”的故事，以及在哪里喝到最地道的本地葡萄酒。准备好，我们一起去揭开这座“微笑怪物之城”的面纱吧。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`米尔普瓦`} />
                <InfoRow label="英文名称" value={`Mirepoix`} />
                <InfoRow label="正式名称" value={`Mirepoix`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`阿列日省`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`米尔普瓦在欧洲中世纪城镇发展史上，占据着一个非常典型且迷人的位置。它是一座标准的“巴斯蒂德”（Bastide）。什么是巴斯蒂德？简单说，就是13-14世纪在法国西南部，由领主或国王“规划建造”的新城镇。它们不是自然生长出来的，而是像棋盘一样被精心设计，核心就是一个用于市场和集会的中心广场，四周是规则排列的街区。米尔普瓦始建于1289年，由富瓦伯爵和米雷普瓦领主共同建立，目的很明确：吸引移民、促进贸易、巩固权力。这种规划体现了中世纪后期从纯粹防御到经济管理的思维转变。更特别的是，老米尔普瓦曾在1289年被洪水摧毁，我们现在看到的城镇是在更高、更安全的地方重建的。因此，它不仅仅是一个保存完好的中世纪样本，更是一个在灾难后“重生”的社区规划典范，见证了人类如何有意识、有计划地构建共同生活空间，这种理念深深影响了后来欧洲乃至全球的城镇规划。`} />
                <InfoRow label="建筑特色" value={`米尔普瓦的建筑魅力，几乎百分之八十都凝聚在那个令人过目不忘的中心广场——中央广场（Place du Maréchal Leclerc）。这里拥有法国最大、最完整的半木结构拱廊广场之一。走近看，那些支撑着二层悬空房屋的粗壮木柱，本身就是一件件艺术品。木材经过数百年风霜，呈现出深邃的蜜糖色、炭黑色和灰白色交织的纹理，摸上去能感受到岁月的粗糙与温润。而最夺人心魄的，是柱顶上那些被雕刻出的“modillons”（承托梁的装饰性托座）——它们不是天使或圣徒，而是上百张人脸、怪物、动物和奇幻生物。有的咧嘴大笑，露出不整齐的牙齿；有的表情痛苦，仿佛在承担房屋的重量；有的则是长着角的恶魔，或吐着舌头的丑角。它们的雕刻手法稚拙而有力，色彩大多已斑驳脱落，但眼神和表情却异常生动。这些木雕与上层色彩柔和的砖石墙面、深红色的瓦屋顶、以及每家每户不同颜色的窗棂和店招形成奇妙对比，仿佛一个严肃规整的中世纪棋盘上，突然绽放出无数自由狂野的民间想象之花。`} />
                <InfoRow label="建筑风格" value={`米尔普瓦的主体建筑风格是典型的法国南部“半木结构”（Colombage）民居与“巴斯蒂德”城镇规划的完美结合。半木结构，就是用深色木材搭建出房屋的骨架框架，框架之间的空间用砖、石或泥坯填充，通常再刷上浅色的灰泥。这种风格在这里表现得尤为舒展和宏大，因为整个广场的拱廊连成一体，形成了一条长达数百米的、充满韵律感的木质走廊。而广场四周房屋上层的悬挑设计（房子二楼比一楼突出），也是中世纪城镇为了最大化利用狭窄街道上方空间的典型做法。至于那些举世无双的木雕，则属于一种独特的、带有浓厚罗曼式遗风和中世纪民间艺术色彩的装饰风格。它不像后期哥特式雕刻那么精致写实，也不像文艺复兴那样追求理想美，而是充满了朴素的、直接的、甚至有些“漫画式”的表现力。工匠们把自己的幽默、恐惧、对日常生活的观察，乃至一些古老的异教传说元素，都直接刻在了这些承重的结构上，让实用的建筑构件变成了讲述故事的画板。这种风格在此地的集中爆发，让它成为了解中世纪普通民众精神世界的一扇绝无仅有的窗口。`} />
                <InfoRow label="文化价值" value={`对于当地人而言，米尔普瓦的中心广场绝不是一个仅供观赏的博物馆。它至今仍然是跳动的心脏。每周一早上，这里会举行盛大的市集，农夫、奶酪商、面包师蜂拥而至，古老的拱廊下瞬间充满了奶酪的醇香、烤鸡的焦香、新鲜水果的甜香和人们讨价还价的喧闹声。那些沉默了几百年的木雕面孔，就这样每周一次地俯视着最鲜活的人间烟火。这种古今生活的无缝衔接，赋予了米尔普瓦无可替代的文化生命力。它不是一个被抽空灵魂的景点，而是一个活着的社区。那些奇异的面孔，早已成为当地身份认同的一部分，居民们会像谈论老朋友一样，给某些特别突出的雕刻起昵称。对于现代社会，米尔普瓦的价值在于它提供了一种“完整性”。它让我们看到，中世纪不仅仅是城堡和教堂，更是由商人、工匠、农夫构成的日常生活。这些雕刻，很可能是行会成员或富裕市民的“签名”，是他们炫耀财富和品味的方式。它们的存在，打破了我们对中世纪艺术唯宗教至上的刻板印象，提醒我们：幽默、怪诞和对自我形象的表现欲，自古有之。来到这里，你触摸到的是一段没有被过度修饰的、带着温度的真实历史。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 米尔普瓦一日游打卡路线攻略：从早市喧嚣到黄昏漫步`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`经典自由行步行路线推荐`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的专属向导，这份自由行指南请收好。我们的旅程最好从一个周一的清晨开始（如果不是周一，请自动跳过早市环节，直接从第二步的宁静广场开始）。**上午9点**，直奔中央广场，融入热闹的周一市集。别急着买东西，先感受氛围，在拱廊下穿行，抬头与那些木雕面孔打个招呼。**10点半**，市集人群稍散，找一家拱廊下的咖啡馆（如Café des Colonnes）坐下，点杯咖啡，好好端详对面建筑的细节。**中午12点**，在广场选一家餐厅享用午餐，推荐尝试阿列日特色的“卡苏莱”炖菜或“米雷普瓦”蛋糕。**下午1点30分**，离开广场，沿着rue Maréchal de Mirepoix等辐射状的小巷慢走，两侧是可爱的古董店和工艺品店，阳光透过屋檐在石板路上画出光影。**下午2点30分**，参观广场西侧的圣莫里斯大教堂（Cathédrale Saint-Maurice），看看它那宏伟却未完全竣工的立面，内部则有精美的中世纪木雕唱诗班座位。**下午3点30分**，前往老城边缘的城墙遗址和Porte d‘Aval旧城门，想象中世纪城镇的边界。**傍晚时分**，回到广场，此时光线金黄，是拍摄木雕长廊和彩色立面的最佳时刻。一天结束，你会感觉自己不是游客，而是短暂地成为了这个中世纪剧本里的一个角色。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>广场长廊与“怪物画廊”：</strong> 不要匆匆走过长廊。请停在任意一根木柱下，花几分钟仰头看。找找那张最著名的“大笑脸”，它眼睛弯成月牙，嘴角几乎咧到耳根，仿佛看到了世间最有趣的事。再找找那些痛苦扭曲的脸，它们通常位于受力最重的拐角柱上，工匠巧妙地将结构压力视觉化。注意有些雕刻并非人脸，可能是叼着鱼的鸟、龇牙的狮子（雕刻得有点像狗）。你会发现，没有两张脸是完全相同的，这是一场中世纪工匠的“表情包”创作大赛。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>圣莫里斯大教堂的“未完成”之美：</strong> 这座教堂的正面看起来有点“突兀”，巨大而平坦，缺少常见的繁复雕塑。这是因为它在14世纪初雄心勃勃地开工，却因资金和战乱（尤其是阿尔比十字军战争的影响）而未能完成原计划中的哥特式立面。但这种“未完成”，恰恰成了它最真实的历史印记。走进内部，一定要去看右手边的<strong>橡木唱诗班席位</strong>，雕刻于15世纪，上面有精致的叶饰和人物小像，与广场上粗犷的民间雕刻形成优雅对比，展现了宗教艺术的另一面。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>周一市集的烟火气：</strong> 如果时机合适，这绝对是必体验的细节。清晨，摊贩的货车驶过鹅卵石路面的辘辘声，是唤醒小镇的序曲。空气里混合着<strong>刚出炉的长棍面包的麦香、当地“图梅”奶酪的浓烈气味、还有薰衣草香包和皮革制品的气息</strong>。卖菜的老太太会和每个熟客行贴面礼，卖香料的大叔会热情地让你试闻。在这一刻，中世纪的长廊不再是背景板，而是充满生命力的市场大棚，那些木雕面孔仿佛也在微笑地看着这延续了七百多年的贸易传统。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>私宅木雕的隐藏惊喜：</strong> 在广场周围的小巷（比如Rue du 4 Septembre）漫步时，别忘了观察那些非广场区域的半木结构房屋。许多房子的梁托、窗框上，也有小巧精致的雕刻，可能是葡萄藤、太阳纹章，或是小动物。这说明了这种装饰风尚在当时市民阶层中的流行。在一栋名为“Maison des Consuls”（执政官之家）的漂亮建筑立面上，你能找到更复杂、更精美的文艺复兴风格雕刻，展示了财富与品味的变迁。" }} />
            </div>
          </Section>

          <Section title={`5. 米尔普瓦自由行避坑指南与行前须知`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>时间就是一切（避开与拥抱）：</strong> 最大的“坑”也是最大的亮点——<strong>周一早市</strong>。如果想体验本地生活，一定要在周一上午来；但如果只想安静拍照、细细观赏建筑，请务必避开周一上午（尤其是10点-12点），这时广场人头攒动，很难看清全貌。<strong>最佳游览时间是工作日（非周一）的上午或午后，以及任何一天的傍晚</strong>。小镇很小，游客停留时间短，下午旅行团离开后，这里会恢复宁静。冬季（11月-3月）很多餐馆和店铺可能不定期休息或缩短营业时间，出行前最好确认。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>穿对鞋子，放慢脚步：</strong> 小镇中心全是<strong>古老的鹅卵石和石板路</strong>，凹凸不平。请务必、务必、务必穿一双最舒适防滑的平底鞋。高跟鞋或薄底鞋在这里是“刑具”。米尔普瓦的魅力在于慢，计划半天到一天足够，无需匆忙赶路。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>语言与消费小贴士：</strong> 这里是法国深处，英语普及度远低于巴黎。学两句简单的法语问候语（Bonjour, Merci）会让人感到亲切。大多数小店和市集摊贩只接受现金（欧元），餐馆和酒店一般可以刷卡。在广场餐厅用餐，坐在拱廊下的露天座位通常景色绝佳，但价格可能比室内稍高，为视野付费是值得的。点菜时不妨问问当日特色（Plat du jour），往往是最新鲜实惠的选择。<strong>这份避坑指南里最实用的一条就是：带上相机和好奇心，但要把脚步和心态都调到“中世纪慢速档”。</strong>" }} />
            </div>
          </Section>

          <Section title={`6. 米尔普瓦周边住宿与美食攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "想在米尔普瓦获得完整体验，建议至少在阿列日省住一晚。小镇本身有几家迷人的<strong>精品民宿（Chambre d‘hôte）</strong>，通常由古老的石屋改造，房间不多但个性十足，主人会热情提供旅游建议。例如广场附近的 <strong>“Aux Couleurs du Temps”</strong>，就位于一栋历史建筑内。如果追求更独特的体验，可以住在城外几公里处由磨坊或农庄改造的旅店，享受纯粹的田园宁静。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "餐饮方面，<strong>中央广场就是美食大本营</strong>。推荐 <strong>“Le Commerce”</strong> 餐厅，坐在它的露台上可以直接仰望最美的木雕长廊。一定要尝试阿列日省的灵魂菜——<strong>卡苏莱（Cassoulet）</strong>，一种用白豆、猪肉、香肠和鸭腿或鹅腿长时间炖煮的丰盛砂锅菜，暖心暖胃。甜品方面，名为 <strong>“Mirepoix”</strong> 的当地蛋糕（一种朗姆酒风味水果蛋糕）值得一试。午餐后或傍晚，可以去广场边的 <strong>“Le Florida”</strong> 咖啡馆喝一杯，点一杯本地产的<strong>黑山（Montagne Noire）葡萄酒</strong>，看着广场光影变化，这才是旅行的高光时刻。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>卡布勒雷的史前洞穴（Grotte de la Vache, Alliat）：</strong> 开车约30分钟。如果你对木雕上的古老想象力着迷，那一定要来这里追溯源头。这个洞穴以发现大量旧石器时代的动物骨骼和人类活动遗迹而闻名，特别是其中一件刻有动物形象的骨质艺术品。从两万年前的洞穴刻画，到八百年前的木柱雕花，你会对人类亘古不变的“创作与记录”冲动有更深的感悟。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>蒙塞居尔城堡（Château de Montségur）：</strong> 开车约40分钟。这座耸立在金字塔形山巅的城堡遗址，是阿尔比十字军战争最后也是最悲壮的舞台之一，被誉为“ Cathar教派的最后堡垒”。1244年，超过200名纯洁派信徒在此被烧死。这里氛围肃穆、风景壮丽，与米尔普瓦平和的生活气息形成强烈对比。它能让你深刻理解，米尔普瓦所在的这片土地，曾经历过怎样的宗教冲突与历史创伤，从而更能体会和平年代这座巴斯蒂德小镇的宁静可贵。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "米尔普瓦的灵魂，就镌刻在那些凝视着广场的、上百张木头的面孔里。它告诉我们，中世纪不只有骑士的荣耀与教会的庄严，更有市井的喧嚣、工匠的幽默，以及普通人试图在沉重梁柱上留下自己印记的鲜活渴望。来到这里，你不是在看一段死的历史，而是在走进一个依然在呼吸的、关于生活与想象力的古老故事。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/piana-corsica" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    皮
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">皮亚纳</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Piana</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/monpazier-bastide" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蒙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蒙帕齐耶</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Monpazier</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/corte-citadel" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科尔泰</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Corte</p>
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
