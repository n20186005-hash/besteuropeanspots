import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '米兰达杜罗旅游攻略：悬崖边境古城与失传语言的深度自由行指南',
  description: '探索葡萄牙米兰达杜罗（Miranda do Douro）深度游攻略，揭秘悬崖古城、米兰达语与杜罗河峡谷的隐世魅力，一份小众避坑指南带你深入伊比利亚腹地。',
}

export default function MirandaDoDouroPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '葡萄牙', href: '/destinations/portugal' },
            { label: '米兰达杜罗', href: '/attractions/miranda-do-douro' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`米兰达杜罗・Miranda do Douro・葡萄牙・布拉干萨区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你厌倦了里斯本的电车声和波尔图的酒香，想找一处地图边缘、连时间都忘了流淌的角落，那今天这份 米兰达杜罗私藏旅游攻略，就是为你准备的。它不在常规的葡萄牙环线上，而是死死钉在东北部边境，像一位被遗忘的哨兵，屹立在杜罗河上方150米高的悬崖之巅。驱车前往的路上，你会经过一片片仿佛被世界抽干了声音的旷野，直到那座由厚重花岗岩垒成的城池，带着中世纪的风沙感，劈头盖脸地出现在你眼前。但这里的灵魂，远不止石头。城中回荡着一种你从未听过的语言——米兰达语，它是欧洲极少数被官方承认的少数民族语言，是活着的化石。作为你的专属向导，这份 米兰达杜罗深度自由行指南，将带你穿过古老的城门，走进方言的韵律里，教你如何避开“来了不知看什么”的坑，真正触摸到伊比利亚半岛最倔强、最温柔的心脏。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，如果你厌倦了里斯本的电车声和波尔图的酒香，想找一处地图边缘、连时间都忘了流淌的角落，那今天这份 米兰达杜罗私藏旅游攻略，就是为你准备的。它不在常规的葡萄牙环线上，而是死死钉在东北部边境，像一位被遗忘的哨兵，屹立在杜罗河上方150米高的悬崖之巅。驱车前往的路上，你会经过一片片仿佛被世界抽干了声音的旷野，直到那座由厚重花岗岩垒成的城池，带着中世纪的风沙感，劈头盖脸地出现在你眼前。但这里的灵魂，远不止石头。城中回荡着一种你从未听过的语言——米兰达语，它是欧洲极少数被官方承认的少数民族语言，是活着的化石。作为你的专属向导，这份 米兰达杜罗深度自由行指南，将带你穿过古老的城门，走进方言的韵律里，教你如何避开“来了不知看什么”的坑，真正触摸到伊比利亚半岛最倔强、最温柔的心脏。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`米兰达杜罗`} />
                <InfoRow label="英文名称" value={`Miranda do Douro`} />
                <InfoRow label="正式名称" value={`Miranda do Douro`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`布拉干萨区`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`米兰达杜罗的历史，是一部写在悬崖与河流之间的边境史诗。它的战略地位在伊比利亚半岛的王国纷争中至关重要。12世纪，葡萄牙第一位国王阿方索·恩里克斯从莱昂王国手中夺取了这片土地，并在13世纪授予其自治特许状，使其成为一个独立的行政区和主教座堂所在地，地位显赫。它不仅是抵御邻国卡斯蒂利亚（今西班牙）的军事前哨，其坚固的城堡和城墙历经了无数次围攻，更是葡萄牙东北部一个独特的文化灯塔。更为传奇的是，由于地处偏远，与葡萄牙腹地长期隔绝，这里的居民顽强地保留了一种源自古代阿斯图里亚-莱昂语系的独特罗曼语——米兰达语。直到1999年，葡萄牙议会正式承认其作为少数民族语言的地位，这在以单一语言为主的葡萄牙是极其罕见的。因此，米兰达杜罗不仅是地理上的边境要塞，更是语言与文化的活态博物馆，它的历史价值在于同时守护了国土与一种濒危的文明火种。`} />
                <InfoRow label="建筑特色" value={`米兰达杜罗的建筑，是粗粝、坚硬而庄严的，完全由本地开采的花岗岩砌成，颜色是一种混合了灰白与土黄的沧桑感。站在远处看，整座城就像从悬崖的岩层里自然生长出来的一样，与大地浑然一体。古城墙 厚重得惊人，石块未经精细打磨，棱角在数百年风蚀下变得圆润，却依然透着不容侵犯的威严。主教堂 的外立面是视觉焦点，虽然规模不大，但比例敦实，入口处的曼努埃尔风格门廊雕刻繁复，与周围质朴的军事堡垒形成戏剧性对比。漫步在老城区，脚下的石板路被岁月磨得光滑如镜，映着北葡萄牙清澈的阳光。房屋通常只有两三层，窗框和阳台是深色的木头，墙面是裸露的石材或刷上白灰，鲜有花哨的装饰。一切都显得实用、坚固，仿佛在无声地诉说这里严酷的冬季和历史上紧张的边境生活。建筑的色彩是大地色的交响——岩石的灰，木头的褐，苔藓的绿，以及偶尔一扇门扉上跳跃的普鲁士蓝。`} />
                <InfoRow label="建筑风格" value={`这里的建筑风格是一场有趣的“混搭”，核心是军事罗曼式与后期曼努埃尔风格的交织。作为边境堡垒，罗曼式的基因深植于城市的骨骼：你看那些城堡的残垣和城墙的塔楼，线条简洁、厚重、开窗极小，一切以防御为首要目的，充满了实用主义的力与美。而曼努埃尔风格，作为葡萄牙大航海时代的荣耀象征，则主要体现在16世纪重建的米兰达杜罗主教堂上。这种风格你可能在里斯本的贝伦塔见过，它以航海元素（如缆绳、贝壳、地球仪）的奢华雕刻著称。在这里，它以一种相对克制的方式呈现：仔细看教堂的南门廊，石柱上雕刻着扭曲的缆绳纹样、精致的藤蔓，还有那个时代的盾徽。这种风格出现在如此偏远的边境，格外令人动容——它像一封来自海洋帝国中心、穿越千山万水寄来的信，告诉这座内陆山城，它从未被王国遗忘。两种风格，一武一文，一简一繁，共同铸就了米兰达杜罗刚柔并济的独特风貌。`} />
                <InfoRow label="文化价值" value={`米兰达杜罗最大的文化价值，毫无疑问是 “米兰达语” 的活态传承。走在街上，你听到的不仅是葡萄牙语，还有一种带着古老韵律、像歌谣般的语言在老人聚集的广场、肉铺和面包店里流淌。它是当地社群身份认同的核心，是连接过去与现在的脐带。政府设立了双语路牌，学校提供米兰达语教学，电台有专门的方言节目。这种自上而下的保护，让一种可能消亡的语言重新获得了尊严。此外，这里保留着极具特色的传统节日，如 “保罗”节，男人们穿着黑白格子裙（被称为“保罗”），戴着面具和彩色毛线帽，系着牛铃，跳起驱邪祈福的舞蹈，脚步声和铃声震动着整个山崖。这种文化不是放在博物馆玻璃柜里的标本，而是弥漫在空气里、渗透在日常中的生活本身。对于现代社会而言，米兰达杜罗是一个珍贵的提醒：在全球化的洪流中，依然有一些角落，以近乎固执的温柔，守护着独一无二的身份与声音。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 米兰达杜罗一日游打卡路线攻略：从悬崖城堡到方言秘境`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`经典自由行路线（步行核心区）`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好了，跟着我这枚老向导，咱们来走一条精华路线。上午（9:00-12:30）：建议你早点出发，清晨的光线最适合拍照。从圣卡塔琳娜城门进入老城，立刻就能感受到中世纪的氛围。沿着主街Rua da Costanilha向上，先去米兰达杜罗城堡遗址。站在最高的瞭望塔废墟上，眼前展开的是此生难忘的景象：杜罗河峡谷像一道巨大而沉默的伤痕，将葡萄牙和西班牙切开，对岸的西班牙土地近在咫尺。风很大，带着荒野和岩石的气息。下来后，参观旁边的城墙，触摸那些冰凉的巨石。中午（12:30-14:00）：就在老城中心找一家家庭餐馆。推荐尝尝本地特色，比如用杜罗河鱼做的炖菜，或者“Posta à Mirandesa”（米兰达式厚切牛排）。下午（14:00-17:30）：饭后悠闲地去米兰达杜罗主教堂，细细看它精美的门廊和内部收藏。随后，一定要去米兰达语与边境文化博物馆，这是理解这座城市灵魂的关键。听听录音里古老的语言，看看传统的服饰和农具。然后就在共和国广场附近的小巷里随意逛逛，听听咖啡馆外老人的交谈，试着分辨葡萄牙语和米兰达语的区别。傍晚（17:30之后）：如果时间充裕，可以开车或步行到城外的 “Miradouro do São João das Arribas” 观景台，等待一场壮丽的杜罗河峡谷日落，为这一天画上史诗般的句号。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  城堡瞭望台的“边境沉默”：一定要爬上城堡仅存的塔楼基座。当你站稳，第一个冲击是视觉——杜罗河在脚下百米深处蜿蜒成一道闪亮的银丝带，两岸是刀削斧劈般的赭红色岩壁。但更深的冲击来自听觉：风呼啸着穿过峡谷，除此之外，万籁俱寂。没有城市的嗡鸣，没有游客的喧哗，只有无边无际的、充满历史重量的沉默。你会瞬间理解“边境”二字的物理与心理意义，仿佛能听到几个世纪以来哨兵在此凝视敌疆时的心跳。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  主教堂曼努埃尔门廊的“海洋之梦”：在粗犷的石砌城市中，教堂南侧门廊宛如一个精致的梦境。凑近看，石柱上雕刻的不是常见的圣像，而是被精心雕琢成缆绳状，一圈圈缠绕，充满动感。这是典型的曼努埃尔风格，是航海时代的骄傲印记。在这离大海最远的内陆悬崖上，看到这样的海洋符号，有一种时空错位的浪漫。它仿佛在说，即使身陷重山，心仍向往着远方的波涛。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  老城墙的“触感记忆”：别只是看，请用手掌贴上去。花岗岩的表面粗糙、冰冷，布满深深的凿痕和小坑洼。一些石块的缝隙里，倔强地生长着青苔和地衣，嫩绿与灰黑交织。阳光斜射时，每一块石头的纹理都清晰可见，像老人手上的皱纹。这种触感，是教科书无法给予的。它让你直接连通到那些无名石匠的劳作，感受到这座堡垒是如何一锤一凿，从山体中“生长”出来的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  共和国广场的“方言时刻”：下午三四点，在共和国广场的树荫下或老咖啡馆门口，常有一群老人坐着闲聊。停下脚步，假装看地图，实则认真倾听。你会听到一种语调更为柔和、元音更圆润、带着某种古老韵律的语言混杂在葡萄牙语中。那就是米兰达语。可能是一位老太太笑着用方言讲了个笑话，周围人爆发出独特的笑声。这一刻，你不是在参观一个“景点”，而是在见证一种千年生命的、平稳的呼吸。`}</p>
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  交通是首要大坑，务必自驾：米兰达杜罗没有火车，公共交通极其不便，班次稀少。最靠谱的米兰达杜罗旅游攻略都会告诉你：自驾是唯一推荐的选择。从波尔图或布拉干萨市开车过来约2-2.5小时，沿途风景壮丽。但请注意，最后一段山路弯多坡陡，驾驶需谨慎。GPS信号在山谷可能不稳定，提前下载离线地图。城内停车不算太难，老城外有免费停车场。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  最佳游览时间与穿着“魔法”：这里属于大陆性气候，夏季（6-8月） 白天温暖宜人，是游览旺季，但峡谷日照强烈，务必戴帽子、涂防晒。春秋（5月、9-10月） 是最佳选择，气候温和，游客稀少。冬季非常寒冷，风大，但雪后的古城别有一番韵味，只是部分设施可能关闭。无论何时，必须穿一双绝对舒适、防滑的步行鞋！老城全是坡道和凹凸不平的石板路，高跟鞋或薄底鞋简直是自讨苦吃。另外，哪怕夏天，也带一件防风外套，悬崖上的风可不跟你开玩笑。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  拥抱“语言障碍”，它正是体验的一部分：是的，这里英语普及率很低，甚至在餐馆，菜单可能只有葡语和米兰达语。但这不是坑，而是特色！请放下焦虑，学会用笑容和手势交流。可以提前学几句葡萄牙语问候语。在博物馆或教堂，主动询问工作人员（他们可能懂一些基础英语），他们往往会为你语言背后的故事而自豪，从而得到更热情的接待。记住，你来这里的一部分目的，不就是为了听听这世上仅存的声音吗？`}</p>
            </div>
          </Section>

          <Section title={`6. 米兰达杜罗周边住宿与美食攻略：住在悬崖边的石屋民宿`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`住宿方面，强烈建议住在老城内的传统石屋民宿。它们大多由老房子改建，保留了厚重的石墙和木梁，冬暖夏凉。晚上游客散去，你才能真正听到古城入睡的呼吸声。推荐搜索“Turismo Rural”类型的住所，比如 “Casa das Pedras” 或类似家庭旅馆，主人通常非常热情，能给你最地道的 “避坑指南” 和故事。餐饮是另一大亮点。一定要尝试 “Posta à Mirandesa” ，这是一种用当地特殊牛种制成的巨型厚切牛排，仅用粗盐和炭火烤制，肉香浓郁得惊人。还有 “Alheira de Caça” 是一种传统的狩猎风味香肠，口感独特。在 “O Mirandês” 或 “Restaurante A Faia” 这类本地餐馆，你都能品尝到最正宗的风味。别忘了配上一杯杜罗河产区的红葡萄酒，风土之味，尽在杯中。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`从米兰达杜罗出发，强烈推荐你继续深入探索这片被遗忘的边境之地。可以向北驱车约30分钟，抵达另一个迷人的边境小镇 “莫加多罗” 。它同样位于杜罗河畔，景色优美，但更加宁静，几乎没有游客。那里的城堡遗址和河畔步道能让你从另一个角度欣赏峡谷。或者，如果你对自然风光更感兴趣，可以沿着杜罗河国际自然公园的道路行驶，寻找更多的观景台（Miradouros），每一个都能提供令人屏息的峡谷和河流景观。这一带是徒步和观鸟的天堂。继续探索的理由？因为真正的边境魅力，永远在主流路线之外的下一个拐角处。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`米兰达杜罗的灵魂，是一曲由岩石、风声和古老音节谱写的倔强挽歌。它教会你的，不是征服，而是聆听——聆听大地断裂处的沉默，聆听一种语言在时间悬崖边的低吟。来到这里，你不是在观光，而是在见证一种名为“坚守”的温柔力量。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/mafra-national-palace" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马夫拉宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mafra National Palace</p>
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
              <a href="/attractions/monsaraz-castle-village-alqueva" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蒙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蒙萨拉什</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Monsaraz</p>
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
