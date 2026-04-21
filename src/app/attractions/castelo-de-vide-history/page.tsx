import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡斯特卢-迪维迪历史溯源｜阿连特茹山城的犹太遗风与骑士传奇',
  description: '深入葡萄牙边境秘境卡斯特卢-迪维迪。探寻中世纪犹太区的隐秘故事，聆听石阶与泉水诉说的流放与共存，揭开一段被时光温柔封存的伊比利亚往事。',
}

export default function CasteloDeVideHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '葡萄牙', href: '/destinations/europe' },
            { label: '波塔莱格雷区', href: '/destinations/europe' },
            { label: '卡斯特卢-迪维迪', href: '/attractions/castelo-de-vide-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卡斯特卢-迪维迪・Castelo de Vide・葡萄牙・波塔莱格雷区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在葡萄牙与西班牙接壤的崎岖山峦间，有一座小镇，它的名字本身就是一段简史：<strong>卡斯特卢-迪维迪</strong>——“瞭望塔之堡”。这里没有汹涌人潮，只有被阳光晒暖的花岗岩街道、终年不断的清冷泉水，以及一个关于接纳、繁荣与突然沉默的故事。它的灵魂，镌刻在<strong>中世纪犹太区（Judiaria）</strong> 陡峭狭窄的巷弄与门楣的隐秘符号之中。抛开游玩攻略，走进卡斯特卢-迪维迪的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卡斯特卢-迪维迪`} />
                <InfoRow label="英文名称" value={`Castelo de Vide`} />
                <InfoRow label="正式名称" value={`Castelo de Vide`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`波塔莱格雷区`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的故事始于葡萄牙王国如朝阳初升的扩张年代。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>13世纪中叶</strong>，国王<strong>阿方索三世</strong>从摩尔人手中夺取了这片战略要地。它的诞生源于一个极其务实的目的：<strong>守卫边境</strong>。居高临下的城堡与瞭望塔（Vide），监控着下方山谷的每一点风吹草动，防备着邻国卡斯蒂利亚可能袭来的铁骑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇的名字便直接来源于其军事职能。<strong>“Castelo”</strong> 指山顶的城堡，<strong>“de Vide”</strong> 则源于拉丁语 “visus”，意为“视野”或“瞭望点”。这是一个为“注视”而生的要塞。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史的戏剧性在于，促使它从军事哨所蜕变为繁荣小镇的，并非持续的战争，而是一次王室的“人才引进”政策。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>14世纪末</strong>，葡萄牙国王<strong>若昂一世</strong>为了发展这片贫瘠的边境地区，颁布了一项特殊法令：<strong>邀请并保护犹太社群在此定居</strong>。税收的减免、相对的自治权以及王室保护，如同磁石，吸引了大量犹太商人、学者、医生和手工艺人翻山越岭而来。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“朕命令，在朕的卡斯特卢-迪维迪镇，犹太人应享有自由与安全，一如朕王国其他城镇之所赐。” —— 后世史学家援引的若昂一世特许状精神。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，城堡脚下的山坡上，一个充满活力的<strong>犹太区（Judiaria）</strong> 迅速成型。清冽的泉水被引入公共水池，蜿蜒的石阶小巷两侧建起房屋，底层是店铺或作坊，上层是居所。这座边境堡垒，意外地因包容而繁荣，成为了阿连特茹地区一个独特的文化绿洲。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇的石墙见证了王国的风云，而它的肌理，则记录了两个族群的共生与骤然离散。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一道印记：塔楼与特许状。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>城堡主塔（Torre de Menagem）</strong> 的建成，是小镇军事地位的终极宣告。这座坚固的方形塔楼俯瞰四方，是王权在此地存在的石质象征。然而，更具温度的历史文件是<strong>若昂一世的特许状</strong>。它不仅仅是一纸公文，更是为小镇注入了灵魂。凭借它，犹太社群得以建立自己的教堂、学校、公共浴池和屠宰场，按照自己的律法生活。经济与文化随之激活，毛纺、皮革、金属加工和尤其是<strong>借贷与国际贸易</strong>蓬勃发展，小镇成为了连接葡萄牙内陆与西班牙市场的重要节点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二道印记：1492年的回声与“新基督徒”的痕迹。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1492年，邻国西班牙的天主教双王颁布《阿兰布拉诏书》，驱逐所有犹太人。一股恐慌与难民的浪潮涌向葡萄牙边境。卡斯特卢-迪维迪的犹太区可能短暂地接收了一些流亡者。但灾难很快也降临葡萄牙。<strong>1496年</strong>，葡萄牙国王<strong>曼努埃尔一世</strong>为求娶西班牙公主，也下令驱逐犹太人——除非他们改信基督教。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，小镇迎来了最沉默、最深刻的历史转折。许多人被迫受洗，成为“<strong>新基督徒</strong>”。表面上，犹太区消失了，犹太教堂被改建。但信仰与记忆转入地下。细心观察，你仍能在老城区某些石质门框的右侧，发现浅浅的凹槽——那是放置<strong>经文匣（Mezuzah）</strong> 的痕迹。一些房屋拥有两扇门，被认为可能用于在宗教裁判所监视时期迷惑视线。这些建筑上的“胎记”，是那段被迫同化历史无声却坚韧的证词。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第三道印记：1650年的翻修与边境的余韵。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>17世纪</strong>，尽管犹太社群已名义上不复存在，但小镇的战略地位在葡萄牙复国战争（1640-1668年）中再次凸显。<strong>1650年</strong>，小镇的防御工事，包括<strong>圣罗克堡垒（Forte de São Roque）</strong>，得到了系统性加强，以应对西班牙军队的威胁。这次翻修，像是小镇双重身份（军事要塞与文化熔炉）的一次回顾与加固。战争结束后，边境安定，小镇逐渐褪去硝烟，其保存完好的<strong>中世纪犹太区</strong>，不再是活跃的社区，却变成了一部凝固的、可供追忆的史书。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有举世皆知的帝王将相，却有与这片土地血脉相连的智者，以及一段真假难辨、却深入人心的探险家传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>传奇一：被遗忘的人文主义星火——皮科·德拉米兰多拉的“葡萄牙血脉”疑云</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在文艺复兴的中心意大利，曾闪耀过一位惊世天才：<strong>乔瓦尼·皮科·德拉米兰多拉</strong>。他23岁便在罗马提出900论题欲与天下学者辩论，其《论人的尊严》被誉为“文艺复兴宣言”。然而，少有人知的是，欧洲学界一直流传着一个关于他身世的冷僻猜想：其家族可能源自葡萄牙，更具体地说——源自<strong>卡斯特卢-迪维迪的犹太裔“新基督徒”社群</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一种理论认为，皮科的姓氏“della Mirandola”可能是意大利化后的结果，其原姓或是“<strong>de Vide</strong>”或类似变体。推测其祖辈在14-15世纪犹太知识分子迁移潮中，从葡萄牙的阿连特茹地区（很可能就是因宽容政策而闻名的卡斯特卢-迪维迪）移居至意大利，皈依基督教后落地生根。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“他（皮科）的思想中那种试图调和希伯来神秘哲学（卡巴拉）、阿拉伯哲学与基督教神学的宏大综合倾向，或许并非偶然，其精神谱系中可能流淌着伊比利亚半岛上那种犹太、基督教与伊斯兰文化交织的独特基因。” —— 后世文化史学者的推测性笔注。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管缺乏铁证，但这一猜想为卡斯特卢-迪维迪的历史增添了一层奇异的荣光。如果属实，那么这座边境山城无意中哺育的种子，竟在遥远的佛罗伦萨绽放，成为了点燃文艺复兴核心思想火花的一分子。行走在犹太区静谧的巷弄里，你或许会想象，某个古老的石屋中，曾居住着一位酷爱读书的少年，他的后代将在人类思想史上刻下自己的名字。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>传奇二：探险时代的船长与山城的馈赠——瓦斯科·达伽马的“休养”传说</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于伟大的航海家<strong>瓦斯科·达伽马</strong>，有一个鲜为人知、却在小镇口耳相传的故事。在首次史诗般的印度航程（1497-1499年）归来后，达伽马与船员们饱受坏血病的折磨，身体极度虚弱。传说中，他被送往<strong>卡斯特卢-迪维迪</strong>进行休养恢复。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "吸引他前来此地的，正是小镇闻名遐迩的<strong>泉水</strong>。尤其是<strong>“童贞玛丽亚泉”（Fonte da Vila）</strong>，其清澈甘冽、富含矿物质的山泉水，被认为具有卓越的治疗与恢复功效。达伽马在此居住疗养了一段时间，饮用泉水，呼吸着山间清新的空气，身体逐渐康复。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“船长从东方带回的不仅是香料与荣耀，还有一身病痛。是维迪的泉水，像母亲的手，抚平了大海留下的创伤。” —— 当地流传的古老说法。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这段轶事将小镇与葡萄牙最辉煌的“航海时代”直接联系了起来。它暗示着，这个内陆山城，以其自然的馈赠，默默支持了那些开拓世界边界的海洋英雄。达伽马走过的鹅卵石街道，他倚靠过的喷泉石壁，都因这段传说而多了一层历史的温存。这不仅仅是名人的足迹，更是一种隐喻：当王国向海外无限扩张时，其内陆深处这些宁静、稳固、提供滋养的社区，正是帝国得以远航的基石。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了史书记载，小镇的生命还流淌在泉水叮咚的神话里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于小镇标志性的<strong>泉水</strong>，有一个美丽而忧伤的传说。在摩尔人统治时期，城堡领主的女儿——一位美丽的基督教公主，爱上了一位被俘的基督教骑士。爱情被发现后，骑士被囚禁，公主日夜哭泣。她的泪水如此真挚纯洁，竟穿透岩石，汇成了一股永不枯竭的清泉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这眼泉水流淌着，最终被小镇的居民，包括后来定居的犹太社群所享用，成为生活的中心。传说赋予了泉水以“纯洁”、“坚韧”与“治愈”的象征意义。有趣的是，在后来的历史中，犹太律法对活水洁净礼仪的重视，与这个关于“泪水化泉”的传说产生了奇妙的共鸣。泉水不仅是物理意义上的生命之源，也成为了不同文化都能理解和珍视的精神符号。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每年，小镇依然举办与泉水相关的传统活动，人们在主要泉眼装饰鲜花，感念自然的恩赐。这个传说跨越了宗教与民族的界限，成为了所有卡斯特卢-迪维迪居民共同的文化遗产，诉说着关于爱、牺牲与生命延续的永恒主题。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日的卡斯特卢-迪维迪，是一座活生生的露天博物馆。它的历史价值，不在于曾发生改变世界格局的重大战役，而在于它<strong>完整保存了一段欧洲边缘地区文化共生的微观样本</strong>。行走其间，你是在阅读一部由石头、泉水和沉默符号写就的史书：从军事边境的凝重，到王室特许带来的异质繁荣，再到宗教高压下的隐忍与转化。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的一砖一瓦，一阶一泉，都在低声讲述着<strong>宽容如何塑造繁荣，裂痕如何留下疤痕，而记忆又如何凭借最细微的痕迹得以存续</strong>。它提醒我们，欧洲的历史不仅是王冠与教堂的历史，也是那些在夹缝中生存、交流、创造，最终融入大地肌理的社群历史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂这座城，便读懂了伊比利亚半岛一段复杂而细腻的往事。它小众，因为它讲述的故事需要侧耳倾听；它深邃，因为它关乎人类社会中那些永恒的主题：家园、信仰、流放与坚韧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？如何漫步犹太区、探访城堡、品尝当地美食，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/convent-of-christ-tomar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    托
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">托马尔骑士团修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Convent of Christ</p>
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
              <a href="/attractions/quinta-da-regaleira-sintra" className="block group">
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
