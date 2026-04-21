import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '塞哥维亚历史溯源｜佩德拉萨：中世纪囚王、烛光与皮革的前世今生',
  description: '探索西班牙佩德拉萨，一座活的中世纪博物馆。揭开法国国王在此被囚禁的秘辛，追溯因皮革富甲一方的往昔，聆听唯美烛光节的古老传说。走进石头里的时光。',
}

export default function MedievalPedrazaHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '西班牙', href: '/destinations/europe' },
            { label: '塞哥维亚', href: '/destinations/europe' },
            { label: '佩德拉萨', href: '/attractions/medieval-pedraza-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`佩德拉萨・Pedraza・西班牙・塞哥维亚`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在塞哥维亚北部崎岖的山地中，佩德拉萨像一枚被时间遗忘的纹章，完整封存着中世纪西班牙的灵魂。它因每年夏夜<strong>上万支蜡烛</strong>的浪漫仪式而闻名于世，更因曾<strong>囚禁过一位法国国王</strong>而意外撬动了欧洲历史的杠杆。这座人口不足五百的石头小镇，其寂静的广场与城墙，曾是卡斯蒂利亚王国财富与权谋的无声见证者。抛开游玩攻略，走进佩德拉萨的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`佩德拉萨`} />
                <InfoRow label="英文名称" value={`Pedraza`} />
                <InfoRow label="正式名称" value={`Pedraza`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`塞哥维亚`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "佩德拉萨的根源深埋在伊比利亚半岛层层叠叠的历史岩层中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早在<strong>凯尔特伊比利亚</strong>时期，这片易于防御的岩石高地便已有人类活动的痕迹。但真正赋予它城市雏形与名字的，是罗马帝国瓦解后，北方<strong>西哥特人</strong>的南下与随后<strong>摩尔人</strong>的统治。其名“Pedraza”很可能源于拉丁语“<strong>petra</strong>”（石头），精准地定义了它的本质——一座建立在巨岩之上的堡垒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，让它脱胎换骨的，是<strong>基督教王国收复失地运动</strong>的浪潮。公元10-11世纪，卡斯蒂利亚王国从摩尔人手中夺回这片领土。出于战略防御的迫切需要，国王们在此<strong>重建并加固城堡与城墙</strong>。佩德拉萨的诞生，首先是一枚军事棋子，一个俯瞰杜罗河流域、拱卫塞哥维亚与首都的边防前哨。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的规划完全服务于防御：唯一的大门，蜿蜒狭窄的街道，围绕中央广场（Plaza Mayor）密集修建的贵族宅邸。一切都在诉说着一个动荡时代对安全的极致渴望。这座小镇从诞生之初，就不是为了扩张，而是为了<strong>固守</strong>。正是这种封闭与内敛，阴差阳错地为后世保存下了一座近乎完美的中世纪建筑标本。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "佩德拉萨的历史并非一直沉寂。有两道深刻的印记，让它从小众的防御据点，跃入宏大的历史叙事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道印记，关乎王权与耻辱。时间来到<strong>1525年</strong>。西班牙国王<strong>卡洛斯一世</strong>（即神圣罗马帝国皇帝查理五世）在意大利帕维亚战役中，俘虏了他的劲敌——法国国王<strong>弗朗索瓦一世</strong>。这场胜利震动欧洲。如何处置这位身份极其特殊的俘虏？卡洛斯一世选择了一个出人意料的地点：远离首都、固若金汤的<strong>佩德拉萨城堡</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们被带入一座高耸于岩石之上的城堡，阴冷、坚固，与世隔绝。从这里只能望见卡斯蒂利亚荒凉的原野，这无疑是一种精心的侮辱。”——后世史家对囚禁场景的文学性重构。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "弗朗索瓦一世在此被囚禁了约<strong>一年</strong>。这座小镇因此意外地成为了欧洲外交博弈的隐秘中心。最终，国王签署了屈辱的《马德里条约》后才获释。这一事件虽短暂，却将佩德拉萨的名字，永久镌刻在了<strong>哈布斯堡王朝</strong>与<strong>瓦卢瓦王朝</strong>争霸的史册上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二道印记，则书写着财富与艺术。囚王事件后不久，佩德拉萨迎来了真正的黄金时代——<strong>16世纪</strong>。这并非源于政治，而是源于一项产业：<strong>制革</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "得益于丰富的水源与发达的牧羊业，佩德拉萨成为了优质羊皮皮革的加工与贸易中心。财富源源不断地流入，小镇的贵族与富商们开始竞相修建华美的宅邸。<strong>文艺复兴</strong>的风潮越过比利牛斯山，吹进了这座石头城。宏伟的<strong>主广场（Plaza Mayor）</strong> 周围，立起了带有精致石雕徽章、铁艺阳台和华丽拱廊的联排房屋。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中最著名的，是<strong>贝壳之家（Casa del Águila）</strong> 和<strong>皮拉尔之家</strong>。这些建筑的外表依然保持着中世纪的严肃轮廓，内部却装饰着文艺复兴式的壁画与庭院。这种“外刚内柔”的风格，正是佩德拉萨那个时代最生动的写照：对外，它仍是军事堡垒；对内，它已是一座因商业而繁荣、懂得享受生活与艺术的内陆都城。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "佩德拉萨的传奇，并非只由国王书写。那些选择在此生活、投资，并将灵魂印记于此的人物，同样构成了它丰厚的人文肌理。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>伊尼戈·费尔南德斯·贝拉斯科</strong> 这个名字，必须被加粗。他是<strong>第十六代弗里亚斯公爵</strong>，更是<strong>卡斯蒂利亚的总督</strong>。在16世纪中叶，他是西班牙最具权势的贵族之一。而他与佩德拉萨最深刻的联结，在于他将那座曾囚禁过国王的<strong>城堡</strong>，买下并改造为自己的居所与权力象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这绝非一次简单的房产交易。贝拉斯科公爵主持了对城堡的<strong>大规模改建</strong>，将其从一座阴森的军事要塞，转变为一座适宜居住的<strong>文艺复兴风格宫殿</strong>。他增建了舒适的起居空间、精美的庭院，并用家族的纹章——一只双头鹰——装饰各处。这一行为极具象征意义：旧时代的囚牢，变成了新时代贵族的豪华宅邸；王权的工具，变成了地方显赫的私人财产。城堡功能的转变，默默诉说着西班牙从中世纪封建割据向中央集权过渡期中，地方大贵族依然强大的现实。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位让佩德拉萨与艺术紧密相连的名人，是<strong>20世纪</strong>的西班牙画家<strong>伊格纳西奥·祖洛加</strong>。他并非小镇土著，却被这里的纯粹与光影深深吸引。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“在佩德拉萨，光与影有着最清晰的界限，仿佛中世纪从未远去。这里的每一块石头都在对我说话。”——祖洛加曾如此感叹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "祖洛加在佩德拉萨购置了一处房产，并在此度过了许多创作时光。他以这里的人物、风景和静谧的氛围为灵感，创作了一系列画作。他的选择，代表了一种现代性的回望。当世界步入喧嚣的工业时代，像祖洛加这样的艺术家，却在佩德拉萨找到了<strong>西班牙本质精神的净土</strong>。他笔下坚韧的农民、古老的街道，与小镇本身一样，成为对抗时间流逝的文化地标。如今，小镇设有纪念他的空间，他的艺术灵魂，已成为佩德拉萨文化遗产的一部分。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "若说历史是佩德拉萨的骨骼，民间传说则是它温热的血液。其中最璀璨的一则，与它如今最负盛名的活动息息相关——<strong>“烛光之夜”（La Noche de las Velas）</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每年七月的第一个两个周六夜晚，佩德拉萨会执行一项令人屏息的规定：全镇<strong>切断所有现代电源</strong>。居民与访客们会亲手点燃超过<strong>五万支</strong>蜡烛。烛光铺满街道、窗台、拱廊和广场的每一寸地面，整座小镇瞬间回归到数百年前，仅被温柔火焰照亮的模样。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于这个传统的起源，有几个美丽的传说在巷陌间流传。最动人的一个版本与<strong>归乡</strong>有关。相传在很久以前，小镇的年轻人多外出征战或谋生，归期不定。他们的家人，尤其是恋人与妻子，便会在特定的夜晚，在窗前和门阶上点燃蜡烛，为远方的亲人<strong>照亮回家的路</strong>，也寄托着平安的思念。点点烛火，是守望，也是召唤。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个版本则更贴近宗教，与<strong>净化与祈愿</strong>相连。在中世纪，瘟疫和灾祸是常客。居民们相信，集中点燃大量蜡烛的火焰光辉，能够<strong>驱散邪灵与疾病</strong>，为小镇带来洁净与庇佑。这仪式成为一种集体的心灵慰藉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "无论起源为何，“烛光之夜”早已超越了传说本身。它不再是出于实用或恐惧，而是一种自觉的<strong>集体记忆回溯</strong>。当烛光次第亮起，石板路反射着氤氲的光晕，时间确实被折叠了。游客们步入的，不仅是一个节庆场景，更是一个被小镇居民共同守护的、关于等待、信仰与浪漫的古老梦境。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当你漫步在佩德拉萨，你行走的每一步，都踏在层层累积的历史回响之上。城墙的缝隙里，藏着摩尔工匠与基督教石匠的手温；主广场的拱廊下，仿佛还能听见皮革商人的议价声与贵族马车的辚辚回音；城堡的高窗前，似乎仍能瞥见一位法国国王眺望故土时落寞的背影；而每一个点燃蜡烛的窗台，都延续着几个世纪以来关于爱与守望的无声誓言。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂佩德拉萨，便是读懂一种<strong>时间的质感</strong>。它并非马德里、巴塞罗那那样不断书写新篇章的巨著，而是一本保存完好的、羊皮封面的<strong>精装古籍</strong>。它的价值不在于日新月异，而在于“未曾改变”。在这里，历史不是博物馆里被隔离的展品，而是居民日常生活的背景、墙壁的温度与夜晚的空气。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它小众，因为它主动选择了静止。它深邃，因为它将动荡、财富、艺术与情感，全部沉淀为了石头与光影的永恒诗篇。拜访佩德拉萨，是一次真正的时光穿越，是去触摸一段依然活着的、呼吸着的<strong>中世纪西班牙脊梁</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/garrovillas-de-alconetar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    加
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">加罗维利亚斯-德阿尔科内塔尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Garrovillas de Alconétar</p>
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
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
