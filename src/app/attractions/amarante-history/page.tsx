import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿马兰特历史溯源｜圣徒之城的前世今生，塔梅加河畔未被时间冲刷的传奇',
  description: '探秘葡萄牙“圣徒之城”阿马兰特。穿越圣贡萨洛的传说、文艺复兴的瑰宝与20世纪前卫艺术的回响，发现一座小镇如何将信仰、灾难与重生镌刻进每块石头。',
}

export default function AmaranteHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '葡萄牙', href: '/destinations/europe' },
            { label: '波尔图区', href: '/destinations/europe' },
            { label: '阿马兰特', href: '/attractions/amarante-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿马兰特・Amarante・葡萄牙・波尔图区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当波尔图的喧嚣渐远，塔梅加河（Rio Tâmega）谷地深处，一座小镇将信仰、艺术与坚韧，编织进陡峭的街巷与古老的桥廊。它不仅是葡萄牙人心中浪漫的“婚礼之城”，更是一座由一位中世纪圣徒守护、被一场大火淬炼、又被现代主义艺术点亮的“圣徒之城”。这里的历史，是关于一座桥的奇迹、一场火的悲歌，以及一群灵魂在此找到归宿的故事。抛开游玩攻略，走进阿马兰特的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿马兰特`} />
                <InfoRow label="英文名称" value={`Amarante`} />
                <InfoRow label="正式名称" value={`Amarante`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`波尔图区`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "阿马兰特的名字，源于拉丁语“<strong>Amantium</strong>”，意为“恋人们之地”。这个美丽的词源，为它日后“婚礼之城”的浪漫美誉埋下了古老的伏笔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但它的故事，远比这名字更悠长。塔梅加河两岸的丘陵，早有人类活动的痕迹。凯尔特部落曾在此栖息，将这里视为自然的圣所。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马人的大道曾从此经过，随后是摩尔人长达数个世纪的统治。<strong>8世纪</strong>至<strong>11世纪</strong>间，摩尔人在这里的山丘上建立了据点，控制着通往北方的河谷要道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的转折点发生在<strong>12世纪</strong>。随着葡萄牙王国光复运动的浪潮向南推进，<strong>阿方索·恩里克斯国王</strong>的军队从摩尔人手中夺回了这片土地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "为了巩固征服成果并加速基督教化进程，国王将这片土地赐予了<strong>佩德罗神父</strong>。<strong>1128年</strong>，这位神父在此建立了教区，并主持建造了第一座献给圣玛利亚的教堂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这被视为阿马兰特作为基督教城镇的正式奠基。它起初只是一个围绕教堂和堡垒发展的小型定居点，依偎在塔梅加河畔，依赖农业与渡口贸易为生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到一位传奇圣徒的到来，才彻底改写了这座河畔小镇的命运，将其从默默无闻的边疆据点，推向葡萄牙信仰与文化地图的醒目位置。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "阿马兰特的历史，深深镌刻在两件大事上：一位圣徒建造的桥，和一场吞噬全城的大火。它们共同塑造了这座小镇的精神骨骼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一枚印记，是<strong>圣贡萨洛</strong>与他的桥。这位<strong>13世纪</strong>的多明我会修士，并非阿马兰特本地人，却在此度过了人生最后、也是最重要的时光。他看到湍急的塔梅加河阻隔两岸居民，渡船时常倾覆，便决心建造一座石桥。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "传说中，圣贡萨洛得到了天使的帮助。天使在梦中向他展示了桥梁的图纸，并指引他找到合适的石材。当地居民被他的虔诚感动，纷纷加入这项工程。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管这座最初的桥梁在几个世纪后因洪水损毁，但圣贡萨洛的善举与传说，使他与阿马兰特紧紧绑定。他去世后葬于小镇，无数信徒前来朝圣，祈求他保佑婚姻与爱情（这亦强化了“恋人之地”的意象）。小镇围绕他的圣祠蓬勃发展，他成了阿马兰特永恒的守护神。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二枚印记，是<strong>16世纪的文艺复兴繁荣与毁灭性大火</strong>。在葡萄牙海外探险的黄金时代，阿马兰特因农业和贸易积累财富。<strong>1543年</strong>，在圣贡萨洛教堂原址上，一座更为宏伟的<strong>圣贡萨洛教堂</strong>开始兴建，融入了华丽的曼努埃尔风格与后来的文艺复兴元素，成为小镇的骄傲。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，巨大的考验在<strong>1783年</strong>降临。一场起因不明的灾难性大火，席卷了几乎全部木结构房屋的老城区。连续烧了三天三夜，整个城镇中心化为灰烬。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场浩劫没有击垮阿马兰特人。他们以惊人的韧性开始了重建。正是在这次重建中，形成了我们今天看到的阿马兰特历史中心的风貌：整齐的<strong>18世纪末至19世纪初</strong>的联排房屋，统一的建筑高度，带有铁栏杆阳台和华丽的门廊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而最为标志性的<strong>圣贡萨洛桥</strong>，也在原址上得以重建，并加盖了独特的<strong>封闭式拱廊</strong>，形成了葡萄牙罕见的桥廊一体的奇观。它不仅是通道，更成为市民社交、贸易的公共空间。这座桥，既是向中世纪圣徒的致敬，也是小镇从灰烬中重生的物理象征。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "阿马兰特的历史天空，闪烁着两颗截然不同却交相辉映的星辰：一位是中世纪的圣徒，另一位是20世纪的现代主义先锋。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>圣贡萨洛</strong>是小镇的灵魂人物。关于他早年的生平记载模糊，相传他出生于<strong>1187年</strong>左右的塔古斯河畔，出身贵族家庭，却选择献身信仰。他曾在科英布拉学习，后前往意大利和西班牙游历、布道，最终加入多明我会。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的后半生与阿马兰特紧密相连。他不仅在此建造桥梁，更以无私的善行、深刻的布道和据说能显现的“神迹”赢得了民众的爱戴。他于<strong>1259年</strong>或<strong>1262年</strong>在阿马兰特去世。最为人津津乐道的，是他的遗体能常年不腐，被视为圣洁的证明。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "据葡萄牙编年史记载，在他去世多年后开棺检视时，“圣人的身体完好无损，仿佛刚刚安息，甚至他的长袍都未腐烂。”这一现象极大提升了朝圣地的声望。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的墓地很快成为 pilgrimage 的中心，无数情侣前来祈求婚姻幸福，使他成为葡萄牙最重要的“月老”圣徒。如今，每年六月的第一个周末，阿马兰特会举办盛大的<strong>圣贡萨洛节</strong>，人们制作并向他敬献象征生育的“法洛斯”面包，这一传统已持续数百年。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间快进到20世纪初，另一位天才将阿马兰特置于现代艺术的前沿——<strong>阿马德奥·德索萨-卡多索</strong>。他出生于<strong>1887年</strong>的阿马兰特一个富裕家庭，自幼展现出绘画天赋。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "19岁时，他前往巴黎学习建筑，却迅速沉浸于蒙马特尔的先锋艺术漩涡。他结识了<strong>莫迪利亚尼</strong>、<strong>布朗库西</strong>、<strong>格特鲁德·斯坦</strong>等前卫艺术家与评论家，并成为最早将未来主义、立体主义等现代流派引入葡萄牙的画家之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他与故乡的羁绊复杂而深刻。尽管巴黎给了他国际视野和艺术革命，但阿马兰特的乡土风景、民间传统和光线，始终是他创作的核心养分。他的许多作品，如《<strong>猎兔</strong>》、《<strong>阿马兰特风景</strong>》，都直接取材于故乡的山水与生活。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一战爆发后，他被迫返回葡萄牙，在相对隔绝的环境中继续探索抽象与实验性创作，达到了个人艺术生涯的巅峰。<strong>1918年</strong>，年仅30岁的他因西班牙流感在阿马兰特去世，如同流星般璀璨而短暂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如今，阿马兰特设有以他命名的<strong>阿马德奥·德索萨-卡多索博物馆</strong>，收藏其重要作品。这位从塔梅加河畔走向巴黎画坛的骄子，让世界艺术史记住了阿马兰特这个名字。圣徒与艺术家，信仰与先锋，在此奇妙地共存，构成了小镇深厚而独特的人文地层。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了圣徒的正史，阿马兰特也流淌着充满民间智慧与浪漫想象的传说，其中最动人的，依然围绕着<strong>圣贡萨洛</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中一个传说解释了他为何成为“婚姻守护神”。相传，圣贡萨洛在世时，常常为当地的年轻情侣主持婚礼，并为他们祈福。他甚至会调解家庭矛盾，挽救了无数濒临破裂的婚姻。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "老人们说，如果一对夫妻感情不和，只要一起走过圣贡萨洛桥，在桥廊中默念圣人的名字，他们的心结就能慢慢解开。这座桥，因此也被恋人们视为通往幸福彼岸的象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个更为奇幻的传说，则与小镇的“<strong>不在之日</strong>”习俗有关。据说，圣贡萨洛曾为小镇求得一项“特权”：每年有一天，死神不会降临此地。因此，在传统中，阿马兰特曾有一个古老的节日，人们会进行略带颠覆性的庆祝，仿佛真的摆脱了死亡的阴影，尽情享受生命。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而关于那座屡毁屡建的<strong>圣贡萨洛桥</strong>，也有一个解释其坚固的传说。人们相信，因为这座桥是圣徒以仁慈之心所建，并由天使设计，所以即便被洪水冲垮，其精神基石永不磨灭。每次重建，都是对这份初心的复刻与加固。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“<strong>法洛斯</strong>”面包——那些在圣贡萨洛节上被制作成男性或女性生殖器官形状的巨大面包——本身就是一个活着的传说。它起源于古老的丰收崇拜，后被基督教吸收，与祈求生育、婚姻美满的愿望结合。人们相信，向圣人敬献这种面包，或将一小块带回家，就能获得家庭的兴旺与爱情的甜蜜。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说并非冰冷的故事，它们渗透在节日的空气里，镌刻在面包的形态上，回荡在每对携手过桥的恋人心中，让阿马兰特的历史始终保有一抹温暖而鲜活的人间烟火气。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在阿马兰特，你踏过的不仅是塔梅加河上的石板桥廊，更是一层层的时光：中世纪圣徒用善行铺就的信仰基石，文艺复兴大火淬炼后的坚韧重生，以及现代主义艺术在此意外栖息的先锋回响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有宏大的帝国叙事，却有着个体生命如何深刻改变一个地方的微观史诗。圣贡萨洛赋予它精神的坐标，那场大火迫使它凝聚出统一而优雅的肌理，阿马德奥则为其注入了超越时代的审美灵魂。它从一座边陲渡口，变为朝圣之地，再成为艺术家的灵感原乡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座小镇教会我们的，是历史如何由“联系”构成：人与人的联系（圣徒与民众），灾难与重建的联系（大火与新生），本土与世界的联系（乡土与巴黎画坛）。它提醒旅人，最深度的旅行，是去感知一个地方如何记住它的恩人，如何从创伤中痊愈，又如何拥抱意外的天才。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂阿马兰特，便是读懂一座小镇如何将信仰化为桥梁，将灰烬化为房屋，将故乡的山水化为画布上的革命。它是在葡萄牙辉煌航海史与厚重修道院文化之外，一个关于庇护、重生与创造力的宁静注脚。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/capela-dos-ossos-faro" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    法
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">法鲁人骨礼拜堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Capela dos Ossos (Faro)</p>
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
              <a href="/attractions/fortress-of-almeida" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔梅达要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Almeida</p>
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
