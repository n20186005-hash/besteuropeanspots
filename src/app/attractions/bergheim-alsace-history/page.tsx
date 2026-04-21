import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '贝尔盖姆历史溯源｜城墙环绕的葡萄园小镇，七个世纪的前世今生与幽灵传说',
  description: '探秘法国阿尔萨斯“闹鬼”小镇贝尔盖姆。穿越完整中世纪城墙，追溯自由城市传奇、文艺复兴大师足迹，聆听白夫人幽灵的低语。一段被葡萄藤缠绕的历史。',
}

export default function BergheimAlsaceHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '法国', href: '/destinations/europe' },
            { label: '上莱茵省', href: '/destinations/europe' },
            { label: '贝尔盖姆', href: '/attractions/bergheim-alsace-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`贝尔盖姆・Bergheim・法国・上莱茵省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在阿尔萨斯葡萄酒之路的中央，有一座被时光按下了暂停键的小城。它并非因某场旷世大战闻名，也非某位帝王的出生地。它的独特，在于其<strong>无与伦比的完整性</strong>——全法唯一一座仍被<strong>双重中世纪城墙</strong>完整环绕的居民小镇。城墙内，是迷宫般的鹅卵石小巷、桁架木屋与沉静院落；城墙外，是漫山遍野、沐浴阳光的葡萄藤。这里是<strong>贝尔盖姆</strong>，一个将防御工事化为生活背景、将动荡历史酿入醇美酒香的地方。抛开游玩攻略，走进贝尔盖姆的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`贝尔盖姆`} />
                <InfoRow label="英文名称" value={`Bergheim`} />
                <InfoRow label="正式名称" value={`Bergheim`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`上莱茵省`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "贝尔盖姆的故事，深埋在它的名字里。“Bergheim”，源于古高地德语，意为 <strong>“山上的住所”</strong> 。这个简洁的定义，精准概括了它最初的形态与战略意义。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元7世纪左右，早期的定居者看中了这座俯瞰平原的石灰岩山丘。它既提供了天然的防御优势，其富含矿物质的土壤又非常适合种植葡萄。不过，小镇真正意义上的“诞生”，要等到中世纪盛期。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>13世纪初</strong>，统治此地的<strong>哈布斯堡家族</strong>正式授予贝尔盖姆“城市”权利。这并非凭空建城，而是对已有村落的加固与法律地位的提升。获得特许状后，市民们开始大规模修建我们今天所见的<strong>第一道城墙</strong>。这道墙勾勒出小镇的原始核心，即现在的老城区。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，仅仅一道墙，在战乱频仍的阿尔萨斯并不足够。于是，在<strong>14世纪</strong>，一道更宏伟、范围更广的<strong>第二道城墙</strong>拔地而起，将更多的居民区和土地囊括其中。这两道同心圆般的石墙，构成了贝尔盖姆独一无二的防御体系，也塑造了它延续至今的城镇格局。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地有一句古老的谚语：“我们的墙内，种着生活；墙外，酿着生计。” 这生动道出了贝尔盖姆作为“葡萄园心脏”的双重角色——既是坚固堡垒，亦是丰饶家园。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "名字中的“heim”（家园），在数百年的法语化浪潮中从未被更改，固执地提醒着人们这片土地深厚的阿勒曼尼（日耳曼）文化根源。它不是为显赫而建，而是为生存与繁衍，这种朴素的起源，正是其魅力的内核。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "贝尔盖姆的城墙并非静态的展览品，它们沉默地见证了小镇命运的三次关键转折。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一次转折，是“自由”的荣光与代价。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1313年，贝尔盖姆迎来了高光时刻。它从哈布斯堡王朝手中购得了<strong>帝国自由城市</strong>的地位。这意味着它直接隶属于神圣罗马帝国皇帝，拥有高度自治权、司法权和市场权。这座小镇凭借葡萄酒贸易积累的财富，为自己“赎了身”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "自由带来了繁荣。市政厅、谷仓、繁华的市场纷纷建立。然而，这份自由也引来了觊觎。在整个14至15世纪，贝尔盖姆不得不持续加固城墙，以抵御周边领主的骚扰和乱兵的劫掠。其城墙之坚固、防御体系之复杂（包括塔楼、瓮城、暗道），在阿尔萨斯地区首屈一指。<strong>自由，是用石头和警惕换来的。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二次转折，是战争的炼狱与“白夫人”的悲歌。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "16至17世纪的宗教战争，尤其是惨烈的<strong>三十年战争（1618-1648）</strong>，将贝尔盖姆拖入了深渊。这座富裕的小镇成为各方军队劫掠的目标。1632年，小镇经历了一场血腥的围城与屠杀。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位匿名的修士在战后记录中写道：“街道被血染红，教堂里回荡着哀嚎。幸存者如同惊弓之鸟，任何风吹草动都让他们想起那些穿着不同颜色军装的恶魔。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是这段恐怖的集体记忆，催生了贝尔盖姆最著名的传说——“白夫人”幽灵。据说，一位在战乱中被杀害的贵族女子，灵魂始终在城墙和古老宅邸间游荡。这场战争彻底耗尽了城市的元气，自由城市的光环在硝烟中黯然熄灭。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第三次转折，是法国的印记与和平的葡萄园。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1648年《威斯特伐利亚和约》后，阿尔萨斯逐渐并入法国版图。贝尔盖姆失去了政治特权，却迎来了长久的和平。坚固的城墙失去了军事意义，却意外地被完整保存下来，因为它成为了居民们生活的一部分——房子的后墙、酒窖的依托、庭院的分隔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>法国大革命</strong>时期，小镇的纹章（一只抓着葡萄的金色狮子）曾短暂被共和标志取代，但最终又被恢复。拿破仑时代，它只是上莱茵省一个宁静的产酒公社。历史的洪流在这里从惊涛骇浪转为涓涓细流，浸润着每一寸葡萄园。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "贝尔盖姆的传奇，不只刻在石头上，也画在木板上。这里孕育并吸引了几位与时代共振的灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1. 汉斯·巴尔东·格里恩：从小镇走向文艺复兴的“魔性”大师</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说贝尔盖姆只向世界贡献一位天才，那必定是<strong>汉斯·巴尔东·格里恩（Hans Baldung Grien，1484/85–1545）</strong>。他并非普通的画家，而是<strong>阿尔布雷希特·丢勒</strong>最杰出、也最特立独行的弟子。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于他的出生地曾有争议，但最新研究有力地指向贝尔盖姆的一个学术与法律家庭。少年时代，小镇城墙内严谨又充满宗教气息的环境，或许是他最早的美学启蒙。约<strong>1503年</strong>，他离开家乡，前往纽伦堡，进入了丢勒的工作室。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "格里恩迅速展现了惊人天赋，但他没有成为老师的复制品。他的笔下，有一股来自家乡黑森林地区的、“接地气”的野性与神秘感。他痴迷于表现<strong>死亡、女巫、情欲与自然魔力</strong>的主题，作品既精致又骇人，充满了寓言般的张力。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "艺术史家评论道：“丢勒描绘了人的理性与神性，而巴尔东则窥探了人的欲望、恐惧与血肉之躯的脆弱。他的画作，是文艺复兴阳光下的阴影部分。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管一生大多在斯特拉斯堡和弗莱堡度过，但“Grien”（意为“绿色”）这个别名，据说就源于他对绿色的偏爱，而绿色，正是贝尔盖姆周边葡萄园在春夏的主色调。他的艺术基因里，是否带着故乡葡萄藤蔓般蜿蜒的生命力与复杂性？今日小镇，虽无他的巨作留存（其作品主要藏于世界各大博物馆），但行走在幽深巷弄中，那种光影交错、现实与神秘交织的氛围，恰似他画作的注脚。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>2. 皮埃尔-约瑟夫·雷杜德：植物学王的意外足迹</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与贝尔盖姆产生微妙联系的，是法国国宝级植物画家<strong>皮埃尔-约瑟夫·雷杜德（Pierre-Joseph Redouté，1759-1840）</strong>。他以描绘玫瑰和百合闻名，被誉为“花之拉斐尔”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "雷杜德并非贝尔盖姆人，但他的父亲是一位来自圣于贝尔的画家。在家族迁徙与寻求机遇的过程中，<strong>雷杜德的祖父</strong>这一支曾在贝尔盖姆短暂居住。可以想象，阿尔萨斯地区丰富的植被和家家户户窗台盛开的鲜花，可能给这个艺术家族留下了最初的“美”的印象。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "虽然这只是家族史上的一小段插曲，但将“玫瑰王子”的遥远谱系与这座鲜花遍地的葡萄酒小镇联系起来，无疑增添了一抹柔和的浪漫色彩。它暗示着，这片土地滋养的，不仅是葡萄的甘甜，还有对自然之美敏锐的感知力。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在贝尔盖姆，历史与传说的边界，被“白夫人”的幽灵轻轻抹去。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座小镇被誉为“阿尔萨斯闹鬼最凶的小镇”，其核心传说便是关于那位永恒的徘徊者——<strong>白夫人（Dame Blanche）</strong>。版本众多，但最主流的说法是：她是一位生活在动荡年代的年轻贵族女性，可能在三十年战争期间，因爱情悲剧或暴力袭击，在城墙附近的某座宅邸（通常指向一栋名为“刺客之家”的美丽木筋房）中香消玉殒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "自此，她的灵魂未能安息。无数居民和游客声称，在黄昏或深夜，看到一道身着白色长裙的朦胧身影，悄然穿过“上街”（Rue Haute）的拱门，或在<strong>圣凯瑟琳礼拜堂</strong>的废墟旁驻足。她没有狰狞的面目，只有无尽的哀伤与沉默。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一个古老的家族日记中记载：“孩子们被告诫不要在夜晚靠近城墙根。不是因为危险，而是为了不打扰那位悲伤的女士。她只是在寻找永远无法归去的家。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了幽灵，建筑也有传说。在市政厅美丽的文艺复兴风格外墙上，雕刻着三位骑士围绕一根柱子旋转的图案，这便是著名的 <strong>“三骑士”喷泉石雕</strong>（原物藏于市政厅内）。民间解释，这代表了贝尔盖姆历史上三位公正贤明的法官，他们如同永动的守护者，维系着小镇的正义与秩序。另一个更神秘的解释则说，这预示着只有当三位真正的骑士心意合一、同时出现时，小镇最大的秘密宝藏才会显现。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，并非吓人的鬼故事，而是集体记忆的文学化表达。“白夫人”承载了战争给平民带来的永恒创伤，“三骑士”则寄托了对公正自治的向往。它们让冰冷的石头有了温度，让穿梭巷陌的旅程，变成了一场与历史幽魂的对话。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当你穿过贝尔盖姆厚重的<strong>上城门</strong>，踏进那片被双重城墙呵护了七个世纪的天地时，你步入的不是一个博物馆，而是一本仍然在呼吸的<strong>立体历史书</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的每一块城墙砖石，都曾反射过自由城市的骄傲，也浸染过战争的血泪。汉斯·巴尔东笔下那些充满魔幻现实主义的意象，或许就能在这些光影斑驳的墙角、幽深的门洞中找到源头。而“白夫人”的传说，则为这份厚重添上了一笔挥之不去的、属于人类的哀愁诗意。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "贝尔盖姆的魅力，在于它的<strong>矛盾与统一</strong>：它是堡垒，也是家园；它见证杀戮，如今却被葡萄藤温柔缠绕；它诞生了描绘女巫与死亡的画家，本身却静谧如田园诗。它没有试图抹去任何一段过去，而是让所有层次的历史——荣耀、创伤、传说、日常——层层叠加，融合成今日独一无二的气质。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂贝尔盖姆，便是读懂阿尔萨斯乃至欧洲一部微观的编年史：关于市民自治的梦想，关于宗教战争的伤疤，关于在动荡中守护日常生活的坚韧，以及最终，历史如何沉淀为风景与生活本身。这座城墙环绕的小镇，本身就是一座无价的纪念碑，纪念着那些远比帝王将相更永恒的东西——寻常百姓对家园的眷恋与守护。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？如何漫步城墙、探秘幽灵巷、品尝特级庄美酒，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/sainte-enimie" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣埃尼米</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sainte-Enimie</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/place-stanislas" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    南
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">南锡斯坦尼斯拉斯广场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Place Stanislas</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/salers-medieval-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨莱尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Salers</p>
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
