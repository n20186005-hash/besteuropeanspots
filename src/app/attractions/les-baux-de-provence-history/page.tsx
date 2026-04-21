import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '莱博德普罗旺斯历史溯源｜普罗旺斯鹰巢古堡的千年废墟与艺术传奇',
  description: '探索法国“最美村庄”莱博德的前世今生。从千年鹰巢古堡到梵高灵感的采石场，揭开普罗旺斯白色悬崖上的战争、诗歌与艺术秘密。',
}

export default function LesBauxDeProvenceHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '法国', href: '/destinations/europe' },
            { label: '罗讷河口省', href: '/destinations/europe' },
            { label: '莱博德普罗旺斯', href: '/attractions/les-baux-de-provence-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`莱博德普罗旺斯・Les Baux-de-Provence・法国・罗讷河口省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在阿尔皮勒山脉的乱石荒原上，一座白色的幽灵之城盘踞于悬崖之巅。这里不是普通的山村，而是一个千年家族的权力图腾，一场惨烈围城后的时光化石，更是一处被战争摧毁又被艺术救赎的传奇之地。它的名字——<strong>莱博德普罗旺斯</strong>，意为“普罗旺斯的峭壁”，道尽了其孤高与险峻。抛开游玩攻略，走进莱博德斯的尘封往事，遇见属于它的残酷、荣耀与不朽诗篇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`莱博德普罗旺斯`} />
                <InfoRow label="英文名称" value={`Les Baux-de-Provence`} />
                <InfoRow label="正式名称" value={`Les Baux-de-Provence`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`罗讷河口省`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "莱博德斯的起源，深陷于中世纪早期的迷雾与传说之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其名“Baux”源于普罗旺斯语“Baou”，意为“悬崖”或“岩礁”，精准描绘了它矗立在海拔245米石灰岩山脊上的险要地势。关于建城者，正史语焉不详，却指向一个煊赫的家族传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地传说将家族的起源，追溯到了<strong>东方三博士</strong>之一的<strong>巴尔塔扎尔</strong>。传说他的后裔、一位名叫<strong>“莱博”</strong>的王子，在此建立了最初的据点。这无疑是为家族统治披上神授光环的杜撰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "有文献可考的历史始于公元10世纪。<strong>莱博家族</strong>作为这片土地的实际统治者登上了历史舞台。他们并非凭空出现，而是巧妙地利用了这里天然的地理优势。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座石灰岩山脊，三面皆是令人眩晕的悬崖，唯有一条狭窄小径可通山顶。易守难攻，是设立堡垒、控制整个阿尔勒平原的绝佳位置。最初，它就是一个纯粹的<strong>军事堡垒</strong>和<strong>权力中心</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "家族以此地为姓，自称“<strong>莱博领主</strong>”，在随后几个世纪里，他们的影响力如野火般蔓延，一度成为普罗旺斯地区最令人畏惧的强权之一。城市的胚胎，便是在刀剑与权谋中，于这块白色巨石上孕育而成。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "古老的编年史中有一段浪漫的记载：“莱博家族的血脉，始于那颗闪耀的星辰。跟随星辰指引的，不仅是信仰，还有无上的权力与领土的野心。”" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "莱博德斯的历史，是一部用石头写就的盛衰史诗。其中几个关键转折，永久地重塑了它的面貌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个印记是 <strong>“普罗旺斯之王”的野心</strong>。莱博家族在<strong>12至13世纪</strong>达到鼎盛。他们不仅拥有广袤的领地，更因联姻与英国金雀花王朝和法国卡佩王朝都沾亲带故。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时的领主<strong>巴拉尔五世</strong>，甚至自负地铸造了刻有“<strong>By the Grace of God, Prince of Baux</strong>”（蒙神之恩，莱博亲王）字样的钱币，其僭越之心昭然若揭。这段黄金时期，留下了今日古城废墟的雏形——宏伟的<strong>城堡</strong>、<strong>圣文森特教堂</strong>以及盘踞山巅的密集石屋。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，巅峰之后便是急转直下的陨落。<strong>1426年</strong>，莱博家族最后的直系血脉<strong>阿丽克斯</strong>，将领地传给了她的丈夫——强大的<strong>普罗旺斯伯爵</strong>。莱博德斯的独立时代，就此落幕。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个，也是最深刻的印记，是 <strong>“太阳王”大臣的致命一击</strong>。并入普罗旺斯后，莱博德斯因其坚固的堡垒，不幸卷入了法国惨烈的<strong>宗教战争</strong>。它成为了新教胡格诺派的重要据点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1632年</strong>，当时权倾朝野的<strong>红衣主教黎塞留</strong>，视这座叛乱堡垒为王国心腹之患。在路易十三的军队完成围城并迫使其投降后，黎塞留下达了一道冷酷的命令：<strong>彻底摧毁莱博德斯城堡及防御工事</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这道命令，直接造就了我们今日所见的景象。不是自然的风化，而是政治意志下的系统性拆毁。雄伟的主塔、城墙被炸塌，莱博德斯的军事生命被强制终结，从此化为一片供人凭吊的、壮丽而凄凉的白色废墟。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "历史的第三个印记，则是 <strong>“光之采石场”的艺术重生</strong>。时间来到<strong>19世纪</strong>。山下废弃的<strong>白色石灰岩采石场</strong>，曾是建造这座城堡的原料来源。当古城在山上死去，艺术却在山下复活。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "独特的穹窿状矿坑和晶莹的石灰岩反光，创造出了神秘莫测的光影效果。这里吸引了无数画家，最著名的访客是<strong>文森特·梵高</strong>。他在附近的圣雷米疗养院期间，一定感受过来自这片白色巨岩的强烈光芒。正是这种光，后来启发了<strong>1960年</strong>诞生的 <strong>“光之采石场”</strong> 艺术展。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "利用矿坑巨壁作为画布，投射恢弘的沉浸式艺术画面。这座因战争而“死亡”的石头城，最终因艺术而获得了另一种永恒的生命。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "莱博德斯与名人的交集，少了几分宫廷的浮华，多了些悲剧与诗意的色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "首先必须提及的，是<strong>诗人-王子</strong> <strong>米斯特拉尔</strong>。这位用普罗旺斯语写作、荣获<strong>1904年诺贝尔文学奖</strong>的诗人，是普罗旺斯文化复兴的灵魂人物。莱博德斯，是他精神版图上的重要坐标。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他并非莱博德斯的居民，但这座废墟之城完美契合了他毕生追寻的“<strong>普罗旺斯魂</strong>”——一种混合了骄傲、悲情、对土地深沉眷恋的独特气质。在他的史诗巨作《米雷伊》中，能读到这片粗犷土地的呼吸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更重要的是，米斯特拉尔是 <strong>“菲利伯特一世”传奇的发掘与传播者</strong>。这位<strong>菲利伯特</strong>，是莱博家族历史上一位极具悲剧色彩的领主（1505-1524年在位）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他是一位文艺复兴式的贵族，热爱诗歌、艺术与骑士比武，却生错了时代。他的领地因家族债务早已抵押出去，实权尽失，仅剩下空洞的头衔。他将自己囚禁于莱博德斯城堡的奢华幻梦里，举办着早已过时的骑士比武和宴会，在穷奢极欲中逃避现实。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最终，他在一场精心准备却意外频出的比武中受重伤而死，年仅29岁。米斯特拉尔将这位“末代骑士”的故事诗歌化，使他成为了莱博德斯忧郁背影的最佳代言人——一个活在昔日荣耀幻影中，被时代车轮无情碾过的浪漫幽灵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与莱博德斯结缘的名人，是<strong>20世纪的艺术顽童</strong> <strong>让·科克托</strong>。这位集诗人、导演、画家于一身的奇才，在<strong>1960年</strong>为刚刚揭幕的“<strong>光之采石场</strong>”创作了其第一个大型演出《世界之幻象》。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科克托被采石场原始、教堂般恢弘的空间深深震撼。他亲自担任导演、编剧和视觉设计，将诗歌、音乐、舞蹈与巨大的岩石投影结合，创造了一场前卫的视听盛宴。这场演出奠定了“光之采石场”的基调：它不仅是技术展示，更是与场地灵魂对话的崇高艺术。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科克托曾说，这里“不是采石场，而是一座被遗弃的<strong>光之大教堂</strong>”。他用艺术家的眼光，为这处工业废墟完成了神圣的加冕，直接开启了莱博德斯当代的艺术传奇。他的参与，让这片古老的白色岩石，与现代最先锋的艺术思潮紧密相连。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "让·科克托在工作手记中写道：“在这些巨大的白色穹顶下，我听到了石头们的窃窃私语。它们不是在诉说被开采的痛楚，而是在吟唱变成光影、变成神话的渴望。”" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在莱博德斯，最脍炙人口的传说并非关于建城，而是关于一位女性的爱情与诅咒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事的主角是<strong>14世纪</strong>的<strong>莱博女领主</strong>，<strong>让娜</strong>。她以美貌与刚烈闻名。传说她深爱着自己的丈夫，但丈夫却不幸早逝。悲恸的让娜从此只穿黑色丧服，并将城堡中所有的家具、挂毯乃至马匹的鞍辔都换成了黑色，莱博德斯成了一座“黑色城堡”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，悲剧并未结束。她的独子也夭折了。绝望的让娜被认为是受到了命运的诅咒，或是她强烈的悲伤引来了魔鬼的窥视。传说在她去世后，她的<strong>黑色幽灵</strong>仍然在城堡的废墟中徘徊，尤其是在月夜。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "人们说，能听到她丝绸丧服的窸窣声，看到她在颓垣断壁间寻找逝去的家人。这个传说为本就苍凉的废墟增添了一抹深沉的悲情色彩。游客们站在古堡高处，俯瞰广阔的原野时，耳边呼啸的风声，仿佛也成了几个世纪前那位黑衣寡妇的幽幽叹息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说也反映了当地人对莱博家族陨落的一种诗意解读：并非全是政治与战争的过错，或许也有命运无情的捉弄与家族气数已尽的悲歌。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客们踏着鹅卵石小径，穿行在那些精心修复的文艺复兴风格宅邸与商店之间时，所体验的不过是一层精美的“外壳”。莱博德斯的灵魂，在<strong>山顶那片压倒性的、荒芜的白色废墟</strong>之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂莱博德斯，便是读懂一种“<strong>废墟之美</strong>”的哲学。它展示了权力如何从嶙峋巨石中勃发，又如何在一道命令下轰然倒塌，最终被时间与自然回收。它见证了欧洲中世纪领主的野心、宗教战争的残酷、以及中央集权对地方势力的无情碾轧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但它的故事并未终结于1632年。从米斯特拉尔的诗歌，到科克托的光影，再到今日采石场中循环播放的梵高《星月夜》——<strong>艺术，成了这座死城永恒的续命灵药</strong>。它从军事堡垒，化身为文化与美的堡垒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "因此，探访莱博德斯，不仅仅是一次对“法国最美村庄”的打卡。它是一次垂直的时间旅行：在山下的繁华街巷感受中世纪生活的复原，在山上的废墟直面历史的暴力与无常，再潜入地下的采石场，目睹人类如何用最新的创意，与最古老的石头进行一场穿越千年的对话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的一石一瓦，都在诉说荣耀、毁灭与重生三重奏。这，才是莱博德普罗旺斯超越明信片风景的、真正撼人心魄的力量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、光影秀打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/eus-pyrenees-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    厄
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">厄斯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Eus</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-meillant" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅扬城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Meillant</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/nohant-vic-sand-estate" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    诺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">诺昂维克</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Nohant-Vic</p>
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
