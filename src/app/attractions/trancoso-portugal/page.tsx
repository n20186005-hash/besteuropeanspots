import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '特兰科苏深度旅游攻略：探秘葡萄牙星形边防古城与中世纪犹太区迷宫',
  description: '探索葡萄牙特兰科苏（Trancoso），一座拥有完好像牙般星形巨石城墙与迷宫犹太区的中世纪边防古城。这份深度游攻略带你避开人潮，解锁隐秘角落。',
}

export default function TrancosoPortugalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '葡萄牙', href: '/destinations/portugal' },
            { label: '特兰科苏', href: '/attractions/trancoso-portugal' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`特兰科苏・Trancoso・葡萄牙・瓜达区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果让我推荐一个葡萄牙内陆真正“活在时间里”的小镇，特兰科苏绝对排前三。它不像里斯本那样喧嚣，也没有波尔图的酒香醉人，但当你穿过那道巨大的石拱门，就仿佛把手机信号和21世纪都关在了门外。今天这份特兰科苏旅游攻略，就来做你的专属向导。这座靠近西班牙边境的“星形”石头城，几百年来一直默默守护着葡萄牙的领土。它的核心魅力，在于两个极致反差：外部是冷峻、坚固、充满几何美感的星形城墙；内部却是一个温暖、曲折、充满生活气息的中世纪犹太区迷宫。跟着这份自由行指南，我们不仅要看古迹，更要感受石头缝里渗出的故事。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，如果让我推荐一个葡萄牙内陆真正“活在时间里”的小镇，特兰科苏绝对排前三。它不像里斯本那样喧嚣，也没有波尔图的酒香醉人，但当你穿过那道巨大的石拱门，就仿佛把手机信号和21世纪都关在了门外。今天这份特兰科苏旅游攻略，就来做你的专属向导。这座靠近西班牙边境的“星形”石头城，几百年来一直默默守护着葡萄牙的领土。它的核心魅力，在于两个极致反差：外部是冷峻、坚固、充满几何美感的星形城墙；内部却是一个温暖、曲折、充满生活气息的中世纪犹太区迷宫。跟着这份自由行指南，我们不仅要看古迹，更要感受石头缝里渗出的故事。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`特兰科苏`} />
                <InfoRow label="英文名称" value={`Trancoso`} />
                <InfoRow label="正式名称" value={`Trancoso`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`瓜达区`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`特兰科苏的历史地位，几乎是用“边界”二字刻出来的。它位于葡萄牙东北部的贝拉地区，自古就是对抗卡斯蒂利亚（今西班牙）王国的最前沿防线之一。12世纪，葡萄牙开国国王阿方索·恩里克斯从摩尔人手中夺回此地，并授予其特许状，它的战略重要性从此与日俱增。13世纪末，国王迪尼斯一世下令修建了那标志性的双层城墙，这不仅是军事工程，更是国家主权的石质宣言。更独特的是，在西班牙天主教双王驱逐犹太人的黑暗时期（1492年），特兰科苏因其边境的“三不管”属性和相对宽容的氛围，成为了许多塞法迪犹太人的重要避难所。这里的犹太社区一度繁荣，留下了深邃的文化印记。因此，特兰科苏不仅是葡萄牙国家形成的边防基石，更是一段承载了流亡与庇护历史的、沉默的见证者。`} />
                <InfoRow label="建筑特色" value={`特兰科苏的建筑，是“坚硬”与“生活”的交响乐。最震撼的莫过于环绕老城的星形城墙。它并非古老的罗马或中世纪早期城墙，而是16世纪为应对火炮升级改造的防御工事。巨大的花岗岩块垒砌成带有尖锐棱角的堡垒，从空中看，像一个严谨的几何星星。石头是灰白色的，在伊比利亚强烈的阳光下泛着金光，摸上去粗糙而冰凉。走入城内，画风突变。犹太区（Judiaria） 的街道窄得不可思议，两侧是两层高的花岗岩房屋，墙面被刷成柔和的鹅黄、粉白或淡蓝色。门窗小而深，窗台上永远点缀着鲜红的天竺葵。路面是历经数百年磨得光滑的石板路，缝隙里长出青苔。阳光在这里被切割成狭窄的光带，空气中弥漫着旧木头、石粉和邻居家炖菜的混合气味。`} />
                <InfoRow label="建筑风格" value={`这里谈不上有单一纯粹的“哥特式”或“巴洛克”大教堂，它的建筑风格是民间军事建筑与中世纪民间住宅的混合体。星形棱堡是典型的文艺复兴时期军事建筑风格。它的核心思想不再是中世纪的高耸，而是低矮、敦实、多角度。那些尖锐的三角突出部（棱堡），是为了消除射击死角，让防守方的火网能全方位覆盖城墙脚下，这是冷兵器时代向热兵器时代过渡的活教材。而城内的民居，则是朴素的中世纪晚期民间风格。结构简单实用，以厚重的石墙承重，屋顶是红色的陶瓦。装饰极少，最多在门楣上刻一个简单的十字架、大卫之星（犹太符号）或是房主的标记。这种极简，并非贫穷，而是边境居民务实、坚韧性格的直观体现，一切形式都为功能和生存让路。`} />
                <InfoRow label="文化价值" value={`特兰科苏的文化价值，在于它是一座活着的社区博物馆。城墙内至今居住着数百居民，他们不是在表演生活，而是真正在这里起居、购物、闲聊。犹太区那些看似迷宫的巷子，每一扇彩色的门后都是一个家庭的历史。这种延续性让历史不再是课本上的名词。每年八月，小镇会举办盛大的中世纪节，那时全城居民换上古装，集市、骑士比武、传统音乐充斥街头，这不仅仅是旅游项目，更是社区对自己辉煌过去的集体记忆与致敬。此外，作为重要的犹太遗产地，它吸引着全球许多犹太人后裔前来“寻根”，寻找先辈流亡路上的足迹。对现代人而言，特兰科苏提供了一种稀缺的体验：在一个被完整包裹的时空胶囊里，感受前现代社会的社区尺度、步行速度与人情温度。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 特兰科苏一日游打卡路线攻略：从星形城墙漫步到犹太区迷宫`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行路线：不走回头路的精华探索`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好了，作为你的专属向导，这份一日游路线请收好。我们不走回头路，高效打卡所有精华。上午（9点-12点）：从主城门 “Porta d‘El Rei”（国王之门）进入，先别急着钻小巷，沿着城墙内侧的步道走一段，感受它的宏伟。然后直奔特兰科苏城堡的遗址，爬上主塔楼，这里是拍摄星形城墙全景和整个红色屋顶老城的最佳机位。中午（12点-14点）：从城堡下来，彻底“迷失”在犹太区。目标是找到中心的 “Largo do Pelourinho”（耻辱柱广场），随便找家小餐馆，吃一顿用传统柴火烤炉做的羊肉或腊肠。下午（14点-17点）：饭后去参观圣佩德罗教堂（Igreja de São Pedro），看看里面的曼努埃尔风格装饰。然后，去寻访散落在犹太区墙上的希伯来铭文石刻（有指示牌）。最后，从另一侧的 “Porta do Carvalho” 城门走出，在城外回望夕阳下的金色城墙，为这一天画上完美句号。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  城墙棱堡的瞭望孔：站在一个棱堡的阴影里，凑近那些狭窄的射击孔。你的视线会被约束成一条细线，正好对准城外远方可能的来犯之敌的方向。石孔内壁被磨得光滑，仿佛还能闻到几百年前火枪射击后的硝烟味。光影透过石孔，在内部的地上投下一个明亮的光点，这种强烈的明暗对比，瞬间让你理解什么是“防御者的视角”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  犹太区某扇天蓝色门上的门环：在一条静得出奇的巷子里，你会发现一扇剥落出岁月肌理的天蓝色木门。重点看它的铁制门环，往往被做成鱼或手的形状。轻轻触碰（别敲），冰凉坚硬。鱼是基督教的古老符号，手则可能指向“法蒂玛之手”（犹太、伊斯兰文化中的护身符）。一扇门，无声诉说着房主家族可能复杂的信仰背景与融合。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  石板路上的“沟槽”：低头看犹太区巷子的石板路，仔细看，你会发现一些石块表面有平行的、深深的凹槽。这不是车辙，而是几个世纪以来，居民用木轮推车运送货物，日复一日碾压形成的痕迹。用脚轻轻滑过这些沟槽，你能感受到石头被时间软化的奇异触感，这是数百万次日常劳作刻下的史诗。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  城堡塔楼的风声：爬上城堡主塔楼的顶端，这里空无一物，只有狂风呼啸。但当你背靠雉堞，风声忽然变了调，变成一种低沉的、穿过无数石缝的呜咽与轰鸣。闭上眼睛，这声音不再是风，而是历史的混响——是士兵的呐喊、是犹太学者的低语、是集市商贩的叫卖，全部被这座石头城堡吸收，在此刻释放给你。`}</p>
            </div>
          </Section>

          <Section title={`5. 特兰科苏自由行避坑指南与行前须知`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  时间与穿着避坑：最佳游览时间是春秋季（4-6月，9-10月），夏季内陆暴晒，石板路反射热浪宛如烤箱，且很多本地居民午间闭户休息，街道空荡死寂。务必穿一双绝对舒适、防滑的平底鞋！ 犹太区的石板路高高低低，且被岁月磨得非常光滑，尤其雨后，穿皮鞋或带跟的鞋简直是自讨苦吃。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  避开人流与体验升级：小镇本身就算小众景点，但尽量避免周末下午，那时可能会有葡萄牙本国的一日游客。想获得最宁静的体验，请在城内住一晚。清晨（8点前）和傍晚（游客散去后），整个老城只属于你和本地居民，光影绝美，是拍照和感受氛围的黄金时间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  交通与防盗须知：自驾是最方便的方式，可将车停在城墙外的免费停车场。乘坐公共交通较周折，需从瓜达或维塞乌转乘巴士，班次很少，务必提前查好时刻表。虽然治安很好，但在拥挤的中世纪节期间，仍需看紧随身物品。迷宫般的巷子也容易让人转向，建议在游客中心拿张纸质地图，因为手机信号在厚石墙间可能不稳定。`}</p>
            </div>
          </Section>

          <Section title={`6. 特兰科苏周边住宿与美食攻略：住在石头城里`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`强烈建议在特兰科苏老城内住一晚！有几家由古老石屋改造的精品旅馆（Turismo de Habitação），比如“Casa da Prisca”或“Casa do Relógio”。房间保留了石墙和木梁，设施却现代舒适。晚上听着绝对的寂静入睡，清晨被教堂钟声和鸟鸣唤醒，是完全不同的体验。美食方面，一定要去主广场 “Largo do Pelourinho” 附近的家庭餐馆。点一道 “Bucho Recheado”（塞满肉和米饭的猪肚）或 “Cabrito Assado”（烤小山羊），这是贝拉山区的硬核风味。配上一杯本地 “Beira Interior” 产区的红酒。甜品试试 “Toucinho do Céu”（直译“天堂的猪油”，实则是美味的杏仁蛋糕）。在一家叫“O Forno”的店里，你甚至能看到用古老柴火烤炉制作面包的过程。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果还有半天时间，有两个绝佳选择：1. 驱车20分钟前往阿尔梅达。如果说特兰科苏是星形堡垒的“小镇版”，那阿尔梅达就是令人瞠目结舌的“巨无霸军事教科书”。它是一个完整的十二角星形堡垒城镇，城墙厚重到可以开车上去，护城河深邃，内部街道规划如棋盘，是军事建筑爱好者的天堂。2. 向东北驱车约40分钟，探访 “皮欧当”历史村庄。它坐落在悬崖边，规模更小更原始，几乎没有商业化，能体验到更为荒凉、孤寂的中世纪边境氛围。两者与特兰科苏结合，能让你对葡萄牙边防要塞的演变，有一个立体而深刻的认知。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`特兰科苏的灵魂，藏在那坚硬花岗岩与柔软生活的缝隙里。它教会你的不是某段具体的历史日期，而是一种感受：在边界上生存的民族，如何用石头铸造安全感，又在高墙之内，用彩色的门和曲折的巷子，守护着生活的烟火与精神的自由。这是一座关于“守护”与“包容”的立体诗篇。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/monsanto-rock-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蒙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蒙桑图巨石村</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Monsanto</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/alcobaca-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔科巴萨修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alcobaça Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/quinta-da-regaleira" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    雷
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">雷加莱拉庄园</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Quinta da Regaleira</p>
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
