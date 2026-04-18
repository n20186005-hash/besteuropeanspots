import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '弗里希利亚纳旅游攻略：漫步安达卢西亚最美白色村庄的迷宫小巷与摩尔遗产',
  description: '探索西班牙弗里希利亚纳(Frigiliana)，安达卢西亚“最美白色村庄”。这份深度游攻略带你避开人潮，感受摩尔迷宫、蜂蜜与阳光。',
}

export default function FrigilianaGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '弗里希利亚纳', href: '/attractions/frigiliana-guide' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`弗里希利亚纳・Frigiliana・西班牙・马拉加`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你觉得太阳海岸只有沙滩和酒店，那今天这份弗里希利亚纳私藏旅游攻略，可要让你彻底改观了。想象一下：从马拉加驱车向东约一小时，盘山公路的尽头，一座如瀑布般从山脉倾泻而下的纯白村庄，在阳光下闪闪发光，这就是弗里希利亚纳。它可不是普通的“白色小镇”，而是连续多年被官方认证的“安达卢西亚最美白色村庄”。这里的攻略核心，不是赶路打卡，而是“迷路”——心甘情愿地迷失在它那由摩尔人设计的、如蕾丝般错综复杂的阶梯小巷里。作为你的专属向导，这份自由行指南会带你深入它的心脏，品尝传奇的石榴蜜，触摸十六世纪战争的伤痕，并找到那些明信片角度外的宁静角落。准备好，我们要暂时逃离海岸的人潮，进入一个由光、影和历史编织的立体迷宫。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，如果你觉得太阳海岸只有沙滩和酒店，那今天这份弗里希利亚纳私藏旅游攻略，可要让你彻底改观了。想象一下：从马拉加驱车向东约一小时，盘山公路的尽头，一座如瀑布般从山脉倾泻而下的纯白村庄，在阳光下闪闪发光，这就是弗里希利亚纳。它可不是普通的“白色小镇”，而是连续多年被官方认证的“安达卢西亚最美白色村庄”。这里的攻略核心，不是赶路打卡，而是“迷路”——心甘情愿地迷失在它那由摩尔人设计的、如蕾丝般错综复杂的阶梯小巷里。作为你的专属向导，这份自由行指南会带你深入它的心脏，品尝传奇的石榴蜜，触摸十六世纪战争的伤痕，并找到那些明信片角度外的宁静角落。准备好，我们要暂时逃离海岸的人潮，进入一个由光、影和历史编织的立体迷宫。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`弗里希利亚纳`} />
                <InfoRow label="英文名称" value={`Frigiliana`} />
                <InfoRow label="正式名称" value={`Frigiliana`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`马拉加`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`在安达卢西亚恢弘的“收复失地运动”史诗中，弗里希利亚纳写下了极为悲壮与独特的一页。它不仅是摩尔人在伊比利亚半岛最后的堡垒之一，更是1569年著名的“Axarquía山区叛乱”（Morisco Revolt）的决定性战场。当时，被迫改信基督教的摩尔人后裔（莫里斯科人）在此掀起最后抗争，反抗天主教的宗教压迫。这场惨烈的战役最终以基督教军队的胜利告终，标志着该地区摩尔人势力的彻底终结，也彻底改变了村庄的人口与文化结构。这段历史赋予了弗里希利亚纳一种深沉的双重气质：一方面，其街巷肌理是纯粹的摩尔遗产；另一方面，战后重建的教堂和房屋装饰，又深深烙印着基督教文化的符号。它不像格拉纳达那样是王国的都城，而更像一个宁折不弯的战士家园，其历史地位在于它浓缩了安达卢西亚文化冲突与融合中最尖锐、最基层的样本，是读懂西班牙复杂身份的一把关键钥匙。`} />
                <InfoRow label="建筑特色" value={`弗里希利亚纳的建筑是一场关于“白”的极致变奏。墙壁并非单调的苍白，而是混合了地中海阳光的暖白，随着日影移动，墙面会反射出珍珠贝母般微妙的粉色与金色光泽。建筑材质极为简单：石灰浆粉刷的墙面、手工烧制的陶土瓦、以及来自附近河床的圆润鹅卵石。正是这些深色的鹅卵石，在巷道的斜坡和阶梯上，镶嵌出繁复的几何图案（有时是星星，有时是波浪），像给纯白的画布绣上了深色的蕾丝边。门窗通常是饱和度极高的蓝、绿或赭石色，与九重葛和天空葵爆炸式的紫红、粉红形成视觉的狂欢。每一级台阶、每一个转角都被居民用陶罐、瓷盘和铁艺花架精心装饰，建筑本身成了生活的画框。站在低处仰望，层层叠叠的露台和屋顶仿佛悬在空中，纯净、炫目，又充满手工的温度。`} />
                <InfoRow label="建筑风格" value={`这里的建筑风格可以精准地定义为 “摩尔式安达卢西亚白村风格” 。它并非宏伟的宫殿式样，而是将北非摩尔人的居住智慧，完美适配于崎岖山地的生活实用主义。其核心体现有三：一是 “迷宫般的有机布局” 。街巷狭窄曲折，毫无规律可言，这最初是为了遮阳、避风，并在遭遇袭击时迷惑敌人。二是 “卡尔（Callejón）与拱门” 。狭窄的通道上方常有过街楼或拱门连接两侧建筑，既加固了结构，又在地面投下迷人的光影长廊，是摩尔建筑中常见的元素。三是 “私人庭院的延伸” 。尽管空间局促，但几乎每户都有内院或小阳台，装饰着瓷砖和水景，将私人绿意向公共空间溢出（通过窗台的花盆）。而战后重建的部分，则在白墙之上加入了基督教风格的铁十字架、圣母瓷像等装饰，形成了独特的文化叠加层。通俗地说，这里的风格就是“为生活而设计的堡垒”，每一道弯都是为了更凉爽的风，每一级台阶都通向一片意外的风景。`} />
                <InfoRow label="文化价值" value={`对当地人而言，弗里希利亚纳远不止一个旅游名片，它是活态的记忆与骄傲。村庄入口处那幅巨大的、由鹅卵石镶嵌的壁画，详细描绘了1569年的历史场景，提醒着每一个居民和访客其文化根基的复杂性。这里每年八月末的“三文化节”（Fiesta de las Tres Culturas），庆祝基督教、穆斯林和犹太遗产的共存，正是这种历史伤疤愈合后开出的花朵。村庄的经济命脉之一是传承自摩尔时代的 “石榴蜜糖” ，由欧洲最古老的甘蔗蜜厂（Ingenio）生产，这种古老的甜蜜将过去与现在紧紧相连。对于现代社会，弗里希利亚纳是一个关于“美与宁静”可持续性的典范。它严格保护建筑外观，抵制过度商业化，证明了历史遗产与高品质慢生活可以共存。它吸引的不仅是游客，还有许多来自北欧的艺术家和作家定居，成为灵感的源泉。它的文化价值在于展示了一种坚韧：如何在历史的剧烈震荡后，用美、色彩和社区精神，重建并守护自己的独特身份。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 弗里希利亚纳一日游深度打卡路线攻略：从迷宫小巷到历史全景`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行步行路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好啦，作为你的向导，这份一日游路线请收好。我们主打一个“由远及近，由高到低”的节奏。上午（9:00-12:30）：一定要趁早出发！把车停在村庄下方的主停车场。先别急着钻进小巷，让我们走到河对岸的 “Mirador de Frigiliana”观景台。这里是拍摄村庄全景的经典机位，晨光中的白色村落如同一块巨大的奶油蛋糕。然后过桥，从 “Calle Real”主街 开始向上探索，这是唯一的“大路”，两旁是店铺和咖啡馆。接着，大胆地拐进任何一条吸引你的小巷，比如 “Callejón del Inquisidor” 或 “Callejón del Peñón”，开始你的“迷路”之旅，感受宁静的清晨时分。中午（12:30-14:30）：在迷宫高处找一家有露台的餐厅午餐，推荐尝尝本地山羊奶酪或炖野猪肉。下午（14:30-18:00）：饭后前往村庄制高点的 “埃尔菲特城堡遗址”，虽然只剩残垣，但风景绝佳。下山时寻访 “摩尔人街区（Barribarto）”，这里的街巷保存最原始，留意脚下的鹅卵石图案。最后参观 “甘蔗蜜厂（Ingenio）” 和旁边的 “三文化广场”。傍晚：在广场喝杯咖啡，等待日落将白墙染成金色，然后慢慢散步下山。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  “Mirador”观景台的景深：别只拍一张就走。仔细观察，你会发现村庄的建筑层次：最下面是现代化的红瓦屋顶，中间是密集的纯白立方体，而最顶端，埃尔菲特城堡的褐色石墙废墟如同王冠。这个垂直的剖面图，就是一部从现代到中世纪的历史教科书。光线在上午最为清澈，能看清每一扇蓝色窗框的细节。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  “Callejón del Rey”的楼梯与光影：这是村庄最上镜的楼梯之一。午后时分，阳光斜射，在纯白的墙壁和深色鹅卵石阶梯上切割出锐利而温柔的明暗交界线。墙壁上挂着鲜红的天空葵，它们的影子随着微风在石阶上跳舞，像一场无声的光影戏剧。坐在阶梯上，你能听到远处咖啡馆隐约的杯碟声和近处水流过陶罐的潺潺声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  城堡遗址的“风与寂静”：爬到最后一段通往城堡的碎石路时，你会突然脱离下方小巷的荫蔽，山风毫无阻拦地呼啸而过。站在废墟上，脚下是深浅不一的褐色石头，粗糙而厚重，与山下精致粉刷的白墙形成强烈对比。向西望去，整个村庄匍匐脚下，远处的地中海是一条蓝色的细线。这个瞬间的穿越感极强，仿佛能听到几百年前的风声中夹杂着不同的语言与呼喊。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  Ingenio蜂蜜厂的“甜蜜气味”：这座16世纪的贵族府邸内，仍在用古老铜锅熬制甘蔗蜜。走近它，甚至在进入所在街道前，你就会闻到一股温暖的、带点焦糖气息的甜香，混合着老木头和石头的味道。这不是工业化的甜腻，而是一种厚实、质朴的芬芳。看看它蜂蜜色的石墙和厚重的木门，你会明白，这份甜蜜是这座建筑，乃至这个村庄，呼吸的一部分。`}</p>
            </div>
          </Section>

          <Section title={`5. 弗里希利亚纳自由行避坑指南与实用行前须知`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  时间就是一切：最佳游览时间是 春季（4-5月）和秋季（9-10月） 的工作日清晨。盛夏（7-8月）中午酷热难耐，小巷宛如蒸笼，且是欧洲假期，人最多。强烈建议在村里住一晚，享受黄昏后和清晨游客大军到来前的宁静，那才是小镇真正的灵魂时刻。一日游的话，务必在上午10点前抵达。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  穿对鞋子，轻装上阵：这里的“街道”大多是坡度很大的鹅卵石阶梯。绝对不要穿高跟鞋或硬底鞋！一双舒适耐磨的平底鞋或运动鞋是保命神器。背包比手提箱更明智。另外，许多小巷狭窄到只容一人通过，大型背包可能会卡住或转身不便。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  交通与停车：自驾是最方便的方式，但 村庄内的停车位极其稀缺且昂贵。老老实实把车停在山脚下的 大型公共停车场（Parking Frigiliana），然后步行或搭乘摆渡小巴（如果有）上山。公交车班次有限，从内尔哈（Nerja）出发的班车相对较多，务必提前查好往返时刻表，错过一班可能要等很久。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  尊重与安全：记住，这些迷宫般的小巷同时也是当地人的住宅区。请保持安静，不要对着居民的门窗拍照，更不要擅闯标有“Privado”（私人）的庭院。虽然治安总体良好，但人多的观景台和主街仍需看管好随身物品，警惕扒手。`}</p>
            </div>
          </Section>

          <Section title={`6. 弗里希利亚纳周边住宿与美食全攻略：住在风景里`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`想深度体验，我强烈推荐在村里住一晚。住宿多是 由古老民居改造的精品酒店（Casa Rural），它们隐藏在小巷深处，通常拥有绝美的屋顶露台或静谧的庭院。比如 “Casa del Apero”，它本身就是一个历史建筑，房间保留了石墙和木梁，露台正对山谷，早餐的蜂蜜就产自本地。餐饮方面，主街 “Calle Real” 上餐厅林立，但更有趣的是藏在巷子里的小馆。推荐 “El Torreón”餐厅，它有一个俯瞰山谷的悬崖露台，招牌菜是 “ Plato de las Tres Culturas”（三文化拼盘），一次尝遍基督教、穆斯林和犹太风格的当地小吃。另一个必尝是 “Berenjenas con Miel”——炸茄子淋上本地特产的甘蔗蜂蜜，咸甜酥脆，滋味绝妙。至于饮品，别忘了点一杯 “Mosto”（当地葡萄汁）或 “Tinto de Verano”（夏酒），在露台上慢慢啜饮。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`弗里希利亚纳本身已足够精彩，但如果时间充裕，有两个地方可以顺道探索：`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  内尔哈（Nerja）：这个迷人的海滨小镇就在弗里希利亚纳山下约10公里处。推荐它的 “欧洲阳台（Balcón de Europa）”，一个伸入地中海的壮观海岬观景台。你可以上午逛完白色村庄，下午去内尔哈的海滩游泳，傍晚在“欧洲阳台”看日落，体验从山到海的急速切换。两地的公交连接也相对方便。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  塞尼亚山脉自然公园（Sierras de Tejeda, Almijara y Alhama Natural Park）：村庄就坐落在这个自然公园的边缘。如果你是徒步爱好者，这里有多条标记清晰的步道。从村庄出发，可以沿着古老的 “摩尔人小径” 进行短途徒步，深入杏仁树和橄榄树的山谷，从另一个角度回望弗里希利亚纳，景色更为壮阔原始。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`弗里希利亚纳的灵魂，藏在那永无止境的白色转角之后，藏在午后小巷里九重葛投下的静谧花影中，更藏在每一勺传承了五个世纪的、琥珀色的石榴蜜糖里。它教会你的，不是如何抵达，而是如何“迷失”——在光与历史的迷宫中，找到那份属于安达卢西亚山区的、甜蜜而坚韧的慢时光。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/las-medulas-roman-gold-mine" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉斯梅杜拉斯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Las Médulas</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bishop-palace-of-astorga" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿斯托加主教宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bishop's Palace of Astorga</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/royal-palace-of-olite" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥利特王宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Royal Palace of Olite</p>
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
