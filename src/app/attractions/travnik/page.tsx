import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '特拉夫尼克旅游攻略：波黑“维齐尔之城”与彩色清真寺深度漫游指南',
  description: '探索波黑Travnik（特拉夫尼克）的奥斯曼帝国风情。本攻略带你深度游彩色清真寺、古堡，提供一日游路线与避坑指南，感受真正的“维齐尔之城”。',
}

export default function TravnikPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '特拉夫尼克', href: '/attractions/travnik' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`特拉夫尼克・Travnik・波黑・中波斯尼亚州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友！如果说萨拉热窝是波黑跳动的心脏，那么特拉夫尼克，就是它一段被琥珀封存起来的、带着香料与咖啡香气的旧梦。这座被誉为“维齐尔之城”的山城，完美保留了奥斯曼帝国的魂魄——彩色琉璃瓦在阳光下闪烁，宣礼塔的剪影映衬着背后的荒芜山崖，城堡的巨石墙沉默地讲述着几个世纪的权力更迭。今天这份特拉夫尼克自由行指南，就是你的时光机钥匙。我们不赶景点，而是教你如何像当地人一样，在这里“浪费”一整天：在百年咖啡馆发个呆，跟着石板路的指引去发现角落里的惊喜，最后在山顶古堡等待一场金色日落。跟着我这份私藏旅游攻略，躲开旅行团的人潮，去触摸巴尔干半岛最生动、最斑斓的一页历史吧。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友！如果说萨拉热窝是波黑跳动的心脏，那么特拉夫尼克，就是它一段被琥珀封存起来的、带着香料与咖啡香气的旧梦。这座被誉为“维齐尔之城”的山城，完美保留了奥斯曼帝国的魂魄——彩色琉璃瓦在阳光下闪烁，宣礼塔的剪影映衬着背后的荒芜山崖，城堡的巨石墙沉默地讲述着几个世纪的权力更迭。今天这份特拉夫尼克自由行指南，就是你的时光机钥匙。我们不赶景点，而是教你如何像当地人一样，在这里“浪费”一整天：在百年咖啡馆发个呆，跟着石板路的指引去发现角落里的惊喜，最后在山顶古堡等待一场金色日落。跟着我这份私藏旅游攻略，躲开旅行团的人潮，去触摸巴尔干半岛最生动、最斑斓的一页历史吧。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`特拉夫尼克`} />
                <InfoRow label="英文名称" value={`Travnik`} />
                <InfoRow label="正式名称" value={`Travnik`} />
                <InfoRow label="国家" value={`波黑`} />
                <InfoRow label="城市" value={`中波斯尼亚州`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`在奥斯曼帝国统治巴尔干的漫长岁月里（1463-1878年），特拉夫尼克绝不仅仅是一个普通城镇。它曾长期作为“波斯尼亚埃亚拉特”（相当于行省）的行政中心，是帝国在西北边疆最重要的统治枢纽。而其“维齐尔之城”的称号，更是它无上地位的证明——这里曾诞生了至少七位“维齐尔”（帝国最高级别的大臣，相当于宰相）。你可以把特拉夫尼克想象成奥斯曼帝国的“省长摇篮”和“边疆总督府”。它不仅是军事和行政要塞，更是文化、宗教和商业的交汇点。来自伊斯坦布尔的命令与来自维也纳的风潮在此碰撞，伊斯兰教与天主教的信徒在此毗邻而居，使得特拉夫尼克形成了极为独特的多元文化肌理。即使在奥匈帝国接管后，它依然是重要的军事据点。这段承上启下的历史，让它成为了解巴尔干复杂历史脉络的一个绝佳切片，一座活生生的、没有围墙的奥斯曼遗产博物馆。`} />
                <InfoRow label="建筑特色" value={`特拉夫尼克的建筑是一部用色彩和石头写成的史诗。最夺目的无疑是那些彩色清真寺，尤其是苏莱曼尼亚清真寺。它的核心魅力在于那层层叠叠、宛如彩虹糖般的琉璃瓦屋顶。这些瓦片不是单调的绿或蓝，而是由深蓝、翠绿、赭石和黄褐等多种颜色精心排布而成，在正午的阳光下璀璨生辉，在阴雨天则呈现出一种温润如玉的质感。宣礼塔细长优雅，像一支伸向天空的铅笔。走近看，建筑外墙是厚重的乳白色石材，与绚烂的屋顶形成奇妙对比。而山顶的特拉夫尼克城堡则是另一种语言：粗粝、坚固、充满力量感。巨大的鹅卵石和岩块砌成的城墙，随着山势起伏，布满岁月风化的痕迹。城堡内部的塔楼是观看全景的绝佳位置，你会发现，从城堡厚重阴冷的石墙望出去，视线尽头正是那些轻盈彩色的清真寺圆顶——一部关于权力、信仰与美学的对话，就这样在建筑的对望中悄然完成。`} />
                <InfoRow label="建筑风格" value={`这里的建筑风格可以概括为奥斯曼-巴尔干风格，并带有明显的地方适应性。彩色清真寺是经典的奥斯曼帝国时期建筑风格，其标志性的中央大圆顶和多层瓦顶结构源自伊斯坦布尔的皇家建筑灵感。然而，它又融入了巴尔干本土的工艺与审美，比如色彩更加大胆、活泼的琉璃瓦烧制技术，这是与波斯尼亚地区丰富的矿产资源（提供釉料）息息相关的。内部装饰则严格遵循伊斯兰美学：精美的几何图案花纹、阿拉伯书法雕刻的圆盘、来自安纳托利亚的手织地毯，以及从窗户投射进来的、经过镂空木窗格过滤的柔和光线，共同营造出宁静冥想的空间。而城堡则展现了更混合的风格：底层是奥斯曼帝国加固扩建的部分，而上层一些塔楼则留有更早的中世纪波斯尼亚王国或后来奥匈帝国改造的痕迹。这种风格的叠加，本身就是特拉夫尼克层积历史的直观体现。`} />
                <InfoRow label="文化价值" value={`对于现代特拉夫尼克人而言，这些建筑和历史不仅是旅游名片，更是身份认同的根源。这里的生活节奏依然带着奥斯曼时代的遗韵：男人们在老集市旁的咖啡馆里，用着铜制咖啡壶（džezva）慢悠悠地喝着波斯尼亚咖啡，一聊就是一下午；空气中弥漫着烤肉（ćevapi）和 burek（肉馅酥饼）的香气。特拉夫尼克是诺贝尔文学奖得主伊沃·安德里奇的故乡，他的作品深刻描绘了这片土地的文化交织，而这座城市就是他文学的活背景。今天，它作为波黑联邦的一部分，其完好保存的奥斯曼风貌，成为了这个国家多元文化共存的宁静象征。它不像莫斯塔尔那样充满戏剧性的对比，而是以一种更日常、更生活化的方式，向世人证明：不同的文明印记可以在一座小城里和谐共生，成为人们寻常日子里的风景与底气。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 特拉夫尼克一日游打卡路线攻略：漫步维齐尔之城的时间走廊`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好了，我的专属向导服务现在开始！收好这份一日游路线，我们不走回头路，完美串联精华。上午（9:00-12:30）：建议你从 “彩色清真寺”（苏莱曼尼亚清真寺）开始一天的旅程。早晨光线柔和，琉璃瓦的色彩最是清新悦目。记得脱鞋进入，静静感受内部的宁静，观察阳光透过窗户在地毯上画出的光斑。出来后，沿着寺旁的老街 “维齐尔街” 闲逛，两旁是奥斯曼风格的老房子，很多改成了手工艺品店。中午（12:30-14:00）：就在老城中心找一家家庭餐馆解决午餐，强烈推荐尝尝本地特色的“特拉夫尼克奶酪”和 ćevapi。下午（14:00-17:30）：午餐后，开始向山顶的 特拉夫尼克城堡 进发。这是一段轻松的上坡路，约15-20分钟。城堡是重头戏，留足时间探索每个角落、每个瞭望口，俯瞰五颜六色的屋顶和蜿蜒的河流。傍晚（17:30之后）：下山后，别急着走。去Plava Voda（蓝泉）公园附近找家河边咖啡馆，点一杯咖啡或当地啤酒，看夕阳如何为整个山城镀上金色。这就是最地道的特拉夫尼克式悠闲。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  琉璃瓦的“光谱游戏”：站在彩色清真寺前方广场，别急着进去。请花五分钟，绕着它慢慢走一圈。你会发现，随着角度的变化，屋顶那些琉璃瓦的颜色会产生奇妙的渐变。从正面看，蓝色最突出；转到侧面，绿色和褐色开始唱主角。特别是在雨后初晴时，湿润的瓦面将色彩饱和度调到最高，倒映着天空的流云，仿佛屋顶本身在呼吸和流动。这个细节是任何照片都无法完全承载的，必须用肉眼亲历。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  城堡塔楼的“上帝视角”：爬上城堡最高处的瞭望塔，那个狭窄的石阶通道本身就充满了探险感。当你终于登上塔顶，360度的全景会瞬间夺走你的呼吸。正下方是错落有致的红瓦民居，彩色清真寺的圆顶变得玩具般可爱。远处，墨绿色的群山层层叠叠，拉什瓦河像一条银色的丝带穿城而过。最关键的是，你可以清晰看到奥斯曼老城与奥匈帝国时期建筑区的分界，一堂生动的历史地理课，就铺陈在你脚下。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  老集市里的“铜匠交响乐”：在老城维齐尔街附近，藏着一个小型传统集市。留心听，你会听到有节奏的、清脆的“叮叮”敲击声。寻声而去，很可能是一位老铜匠正在他的小铺门口工作。看着他如何将一块平平无奇的黄铜片，通过成千上万次的捶打，变成精美的咖啡壶、盘子或花瓶。火花偶尔溅起，铜器在阳光下反射出温暖的光泽，空气中弥漫着金属特有的气味。这是正在消失的手工技艺，也是特拉夫尼克日常生活的脉搏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  “蓝泉”公园的潺潺水声：Plava Voda公园是本地人的后花园。这里的水源来自山间溶洞，清澈见底，呈现一种冰凉的、泛着奶蓝色的奇异色泽。坐在水边的长椅上，闭上眼睛，背景音是持续不断的、清脆的潺潺流水声。这声音有神奇的治愈力量，能瞬间洗去爬山的疲惫。睁开眼，看当地的孩子在溪边玩耍，老人们坐在树下聊天，你会觉得自己短暂地融入了这里的生活。`}</p>
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  最佳时间与穿着“错峰”：特拉夫尼克夏季（7-8月）阳光强烈，但早晚凉爽。避坑关键：尽量避免在正午12点到下午3点之间在毫无遮挡的城堡城墙上游荡，真的会晒到怀疑人生。建议清晨或傍晚游览城堡。穿着一定要舒适！上下城堡和穿行老城石板路都需要一双防滑好走的鞋，女士请彻底放弃高跟鞋。春秋季是最佳游览季节，色彩层次丰富，体感舒适。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  巧妙避开“微小人流”：这里虽非热门爆点，但偶尔也会有小型旅游巴士。避坑技巧：与主流路线反着来。大部分团队会先上城堡，再去清真寺。你可以反其道而行之，早上先去清真寺内部参观（通常团队在内部停留时间短），下午稍晚再上城堡，能享受到更空旷的景色。午餐时间尽量在1点之后，避开本地人的用餐高峰。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  交通与消费须知：从萨拉热窝或莫斯塔尔过来，最方便的是乘坐长途巴士，班次较多。下车后步行即可进入老城，无需额外交通。城内所有景点步行可达。这里物价亲民，但现金为王（使用波黑马克BAM），很多小餐馆、咖啡馆和家庭店铺不接受信用卡。换汇在老城中心有兑换点，汇率公道。治安整体很好，但集市人多时仍需看管好随身物品。`}</p>
            </div>
          </Section>

          <Section title={`6. 特拉夫尼克周边住宿与美食全攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果想沉浸式体验，不妨在这里住一晚。推荐选择老城内的 传统民宿，通常是由奥斯曼老宅改造而成，木结构的天花板、古朴的家具，院子可能还有一口老井，晚上非常安静，能听到远处宣礼塔传来的唤拜声。清晨在鸟鸣中醒来，推开窗就是彩色清真寺的景色，体验感满分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`美食是重头戏！午餐一定要去尝试 “Šadrvan” 餐厅（就在彩色清真寺旁边），环境优美，坐在庭院里就能看到宣礼塔。必点特拉夫尼克 ćevapi（一种烤肉肠），这里的版本肉质更细腻，配上的 somun（面包）也特别松软。另一道本地骄傲是 “特拉夫尼克奶酪” ，一种半硬的咸味羊奶酪，风味独特。晚餐可以去老城河边的 “Konak” 餐馆，尝尝用传统陶锅慢炖的波斯尼亚锅（Bosanski lonac），各种肉类和蔬菜炖得烂熟，汤汁浓郁，暖心暖胃。别忘了以一杯地道的波斯尼亚咖啡收尾，体验完整的奥斯曼式餐饮仪式。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`从特拉夫尼克出发，有两个方向值得延伸探索：`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  普里瓦湖（Jezero Privlaka）：距离城区约15分钟车程，本地人才知道的秘境。这是一个被松林环绕的高山湖泊，湖水清澈冰凉，夏季是绝佳的游泳和野餐地点，秋季则层林尽染，倒影如画。来这里的大多是本地家庭，几乎没有外国游客，氛围极其宁静。可以租一条小船，飘在湖心，享受绝对的放松。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  亚伊采（Jajce）：如果时间充裕，可以安排半天前往这座更负盛名的古城（车程约1小时）。亚伊采拥有瀑布穿城而过的奇景，以及同样重要的历史地位（南斯拉夫在此建国）。从特拉夫尼克的奥斯曼风情，切换到亚伊采的中世纪城堡和瀑布轰鸣的自然壮丽，会是一次非常精彩的风格对比之旅，让你对波黑历史的多元性有更立体的认知。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`特拉夫尼克的灵魂，在于它那种 “举重若轻” 的历史感。它不曾刻意张扬自己显赫的过去，只是让彩色的瓦、斑驳的墙、咖啡馆的闲谈和山间永不间断的泉声，日复一日地诉说着。它是一座让你慢下来的城，教会你在古堡的风中聆听历史，在一杯咖啡的氤氲里品味现在。来这里，你不是过客，而是短暂地，成为了它漫长时光故事里的一个逗号。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bascarsija-old-bazaar-sarajevo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴什卡尔希亚</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Baščaršija</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/stolac" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯托拉茨</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Stolac</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/trebinje-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特雷比涅老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trebinje Old Town</p>
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
