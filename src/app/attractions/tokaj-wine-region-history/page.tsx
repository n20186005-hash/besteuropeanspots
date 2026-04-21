import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '托卡伊历史溯源｜甜酒王国的前世今生与英雄传奇',
  description: '探寻匈牙利“液体黄金”的诞生秘史。从王室法令到流亡王子，从贵腐传说到诗歌颂歌，走进被葡萄藤缠绕的百年地窖，啜饮一杯凝固的时光。',
}

export default function TokajWineRegionHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '匈牙利', href: '/destinations/europe' },
            { label: '包尔绍德-奥包乌伊-曾普伦州', href: '/destinations/europe' },
            { label: '托卡伊葡萄酒产区历史文化景观', href: '/attractions/tokaj-wine-region-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`托卡伊葡萄酒产区历史文化景观・Tokaj Wine Region Historic Cultural Landscape・匈牙利・包尔绍德-奥包乌伊-曾普伦州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在匈牙利东北部，蜿蜒的蒂萨河与博德罗格河环抱着一片被火山灰覆盖的丘陵。这里出产的，是被路易十四赞为“酒中之王，王者之酒”的托卡伊阿苏甜酒。然而，琥珀色酒液里封存的，远不止甜蜜。它是欧洲最早的葡萄酒法定产区，是民族英雄的流亡见证，是诗人笔下的自由之魂。抛开游玩攻略，走进托卡伊的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`托卡伊葡萄酒产区历史文化景观`} />
                <InfoRow label="英文名称" value={`Tokaj Wine Region Historic Cultural Landscape`} />
                <InfoRow label="正式名称" value={`Tokaj Wine Region Historic Cultural Landscape`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`包尔绍德-奥包乌伊-曾普伦州`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "托卡伊的名字，仿佛本身就带着葡萄的醇香。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这片土地的历史，深植于火山与河流的馈赠之中。古老的喀尔巴阡山脉喷发，留下了富含矿物质的火山土壤。两条大河带来的湿润空气，每年秋天在河谷间形成特殊的薄雾。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这为一种神奇的霉菌——<strong>贵腐菌</strong>——创造了天堂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于“托卡伊”之名的由来，众说纷纭。最广为流传的说法，它源于斯拉夫语，意为“燃烧之地”。这可能指代远古的火山活动，也可能暗指历史上部落间争夺这片肥沃土地的烽火。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "有记载的葡萄种植始于至少<strong>12世纪</strong>。当时，南部的塞凯伊人和后来定居的瓦龙人（来自比利时的移民），带来了精湛的葡萄栽培技术。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但真正的传奇，始于一场“美丽的意外”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>16世纪中叶</strong>，奥斯曼帝国大军压境，入侵匈牙利。当地葡萄农为避战祸，迟迟未能采收已经成熟的葡萄。等到战事稍缓，返回家园时，人们发现葡萄藤上的果实已经干瘪，覆满了一层灰色的霉菌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "本以为是灾难，但一位名叫<strong>拉斯洛·马特</strong>的牧师冒险尝试，用这些“腐烂”的葡萄酿酒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "结果，榨出的汁液极少，却浓稠如蜜，酿出的酒色泽金黄，风味之复杂浓郁，前所未有。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“阿苏”就此诞生。这个词源于土耳其语“Aszú”，意为“枯萎的”。一次战争的副产品，竟无意中叩开了通往葡萄酒圣殿的大门。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "托卡伊的辉煌，并非偶然。它的历史，是由一部部严苛的法典和一代代执着的酒农共同写就的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道深刻的印记，刻在<strong>1655年</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时统治该地区的<strong>拉科齐家族</strong>，颁布了人类历史上第一部系统的葡萄酒产区法令。这部《托卡伊产区分级法令》，比法国的波尔多分级早了近两百年。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "法令明文规定了哪些村庄可以生产“阿苏”酒，如何划分葡萄园等级，甚至细致到采收日期、酿造方法和橡木桶规格。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“自圣母玛利亚诞辰日（9月8日）起，方可开始采摘用于酿造阿苏之葡萄。任何提前采摘者，将受重罚。”——摘自《1655年托卡伊法令》" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这意味着，在三百多年前，托卡伊就已确立了以风土和法规为核心的现代葡萄酒理念。那些被划定为一级园的古老地块，至今仍是酒农心中的圣地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二道印记，是它在欧洲宫廷掀起的金色风暴。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "18世纪，“皇家托卡伊”成为全欧洲王公贵族追逐的珍宝。俄国沙皇甚至在此设立永久卫队，专门守护送往圣彼得堡的御用酒窖。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>彼得大帝</strong>和<strong>叶卡捷琳娜二世</strong>都是其忠实拥趸。传说，俄国皇室曾长期租用托卡伊的地下酒窖，并派哥萨克骑兵押运酒桶，绵延千里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥地利、法兰西、普鲁士的宫廷宴会，都以能提供托卡伊阿苏酒为至高荣耀。这股风潮，将这个小产区推向了世界舞台的中央，也为其积累了巨大的财富与文化声望。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史的车轮从不只走向甜蜜。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "20世纪，这片土地经历了最严峻的考验。二战的炮火，集体农庄的改造，几乎摧毁了延续数百年的传统葡萄园和家族酒庄。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "许多古老的地窖被荒废，珍贵的本地葡萄品种濒临灭绝。托卡伊的黄金时代，似乎戛然而止。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到<strong>1989年</strong>后，随着政权更迭和土地归还，新一代的酒农如同春藤般苏醒。他们重新探寻祖先的足迹，修复石墙，复兴老藤。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>2002年</strong>，联合国教科文组织将“托卡伊葡萄酒产区历史文化景观”列入世界遗产名录。这不仅仅是对一款酒的认可，更是对一个活态的、延续了千年的农业文明体系的最高致敬。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "托卡伊的酒香里，浸泡着匈牙利民族最炽烈的情感。有两位人物的身影，与这里的酒窖和山丘紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一位，是王子，也是斗士：<strong>弗朗西斯二世·拉科齐</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他是17世纪末18世纪初匈牙利独立战争的领袖，对抗哈布斯堡王朝统治。他的家族，正是那片土地曾经的统治者，也是托卡伊葡萄酒法规的奠基者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当起义失败，拉科齐被迫流亡海外。他最后的时光，远在土耳其。据说，陪伴这位末路英雄的慰藉之一，便是从故乡托卡伊运来的阿苏酒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那琥珀色的液体，成了故土的缩影，是再也回不去的山河滋味。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更传奇的是，拉卡齐家族的地下酒窖网络，庞大如迷宫，曾在其起义中作为秘密会议地点和藏身之所。酒窖不止储酒，也曾庇护过自由的灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二位，是诗人，是酒徒：<strong>桑多尔·裴多菲</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位匈牙利伟大的革命诗人，虽非托卡伊本土人，但他的诗与魂，却与这里的酒深深共鸣。裴多菲嗜酒，尤其热爱托卡伊。在他的诗篇和书信中，葡萄酒是激情、创造与自由的象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1848年</strong>，匈牙利革命爆发前夕，裴多菲在佩斯的咖啡馆里，或许就是饮着托卡伊酒，写下了那首点燃民族的《民族之歌》：" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“起来，匈牙利人，祖国正在召唤！" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "是时候了，现在干，还不算太晚！" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "做自由人呢，还是做奴隶？" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "就是这个问题，你们自己选择！”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在革命浪潮中，托卡伊酒成了聚会上鼓舞士气的“革命之饮”。它甜蜜复杂的风味之下，是裴多菲所歌颂的、匈牙利人刚烈不屈的精神内核。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "诗人短暂的一生如同流星，但他的诗篇，却像一瓶顶级的阿苏，随着时间流逝，愈发醇厚，浸透了整个民族的文化记忆。在托卡伊的许多酒标上，你至今仍能看到献给裴多菲的纪念款。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在托卡伊，每一个酒窖的阴影里，似乎都藏着一个故事。最动人的传说，关于那成就阿苏酒的“神圣的腐烂”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传在很久以前，托卡伊的一位年轻酒农，深深爱着村里最美的姑娘。为了筹备婚礼，他精心照料着自家的葡萄园，期盼一个丰收年。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，婚礼前，男孩被征召入伍，远赴战场。临行前，他对女孩说：“等我回来，就用今年最好的葡萄，酿我们婚礼的酒。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "秋天，葡萄成熟，满山金色，男孩却没有归来。女孩拒绝了所有采收的建议，她固执地等待着。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她每天去葡萄园祈祷，泪水浸湿了土壤。霜降来了，战马回来了，带来男孩战死的消息。女孩的心碎了，她再也没有去照看那些葡萄。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "寒冬将至，一位好心的老修士路过葡萄园，看到藤上挂满干瘪发霉的果实，不忍浪费，便将其采摘下来，尝试酿造。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当酒液流出，呈现出璀璨的金色，香气弥漫整个教堂。人们品尝后，无不惊叹其为神迹。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“这不是腐烂，这是上帝的亲吻。是那位姑娘忠贞的眼泪和等待，感动了上天，赐予了我们这珍贵的礼物。”老修士如此说道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，托卡伊人将贵腐菌视为上天的恩赐，而非病害。他们相信，每一瓶阿苏酒里，都封存着一份执着的情感与等待。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "至今，在开始采收“阿苏”葡萄前，一些古老的村庄仍会举行小小的仪式，感恩自然的馈赠。这种对“偶然”与“不完美”的敬畏与转化，正是托卡雅智慧与人文精神的体现。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当你踏入托卡伊，品尝一杯阿苏酒时，你喝下的到底是什么？" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "是火山土的矿物质感，是博德罗格河的氤氲水汽，是贵腐菌的神奇点化。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更是<strong>1655年</strong>那部古老法典的严谨回响，是拉科齐王子流亡酒杯中的乡愁，是裴多菲诗歌中沸腾的自由之血。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这片“历史文化景观”的珍贵之处在于，它并非一个静止的博物馆。历史在这里是流动的，是生长的。它存在于酒农抚摸百年老藤的手掌间，存在于阴暗地窖里陈年酒桶的呼吸中，存在于每一瓶新酒所承载的古老法则里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "托卡伊告诉你，风土（Terroir）一词，不止关乎土壤与气候，更关乎一代代人的选择、斗争、爱与坚守。这是一部用葡萄藤写就的、琥珀色的匈牙利史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，每一口甜蜜，都沉淀着历史的厚重与复杂。它邀请你的，不是一场简单的微醺，而是一次与时光的对话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？如何探访传奇酒庄、穿行古老地窖、安排品酒之旅，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/pannonhalma-archabbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    潘
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">潘诺恩哈尔马千年修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pannonhalma Archabbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/varpalota-thury-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    瓦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">瓦尔保洛陶</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Várpalota</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/early-christian-necropolis-pecs" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩奇早期基督教陵墓</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Early Christian Necropolis of Pécs</p>
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
