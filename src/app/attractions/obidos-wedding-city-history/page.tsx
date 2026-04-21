import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奥比杜什历史溯源｜白色婚礼之城的千年故事、王后传奇与城墙往事',
  description: '探秘葡萄牙“婚礼之城”奥比杜什。穿越白色小镇的千年城墙，揭开国王与王后的爱情信物传奇，聆听每块石头诉说的葡国往事。小众深度历史之旅。',
}

export default function ObidosWeddingCityHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '奥比杜什婚礼之城', href: '/attractions/obidos-wedding-city-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`奥比杜什婚礼之城・Óbidos・葡萄牙・奥比杜什`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在葡萄牙中部，有一座被完整城墙包裹的白色小镇，它不仅是明信片上的风景，更是葡萄牙王冠上一颗传承了数百年的“爱情信物”。它的名字<strong>Óbidos</strong>，自13世纪起，便与一个浪漫的皇家传统紧密相连：历代葡萄牙国王都将它作为新婚礼物，赠予自己的王后。于是，它被誉为“婚礼之城”。但高墙之内，远不止浪漫。罗马人、摩尔人、基督徒的足迹层层叠叠，战争的创伤与文艺复兴的荣光在此交织。抛开游玩攻略，走进奥比杜什的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`奥比杜什婚礼之城`} />
                <InfoRow label="英文名称" value={`Óbidos`} />
                <InfoRow label="正式名称" value={`Óbidos`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`奥比杜什`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥比杜什的故事，始于一片俯瞰潟湖与大海的险峻山丘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早在罗马时代，这里便有了定居点，得益于其优越的战略位置。罗马人可能称它为“<strong>Eburobrittium</strong>”，是连接里斯本与科英布拉的重要驿站。然而，真正赋予它名字与雏形的，是公元8世纪后来的<strong>摩尔人</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“Óbidos”这个名字，很可能就源自阿拉伯语 “<strong>al-Bidha</strong>”，意为“城堡”或“设防的地方”。摩尔人看中了这里易守难攻的地形，修建了最初的防御工事，建立了我们今天所见小镇的网格格局。小镇蜷缩在围墙之内，这种布局充满了摩尔式城镇的防御智慧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1148年，葡萄牙建国之初，第一位国王<strong>阿方索·恩里克斯</strong>从摩尔人手中收复了这片土地。这次征服并非易如反掌，它标志着基督教势力向南方推进的关键一步。收复后，小镇被纳入新生的葡萄牙王国版图，其军事要塞的地位得到了进一步加强。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，奥比杜什命运的转折点，要到近一个世纪后才真正到来。那是一个关于爱情与馈赠的决定，让这座小镇从此与葡萄牙王室的私人情感史牢牢绑定。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥比杜什的城墙，是一部石砌的葡萄牙简史。最深刻的几道印记，都与王权紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一道印记：国王的礼物与王后的城 (13世纪)</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1282年，葡萄牙国王<strong>迪尼斯一世</strong>与王后<strong>阿拉贡的伊莎贝尔</strong>新婚不久。这位以大力发展农业、文学而闻名的“诗人国王”，做了一件极富浪漫色彩和政治智慧的事：他将奥比杜什作为礼物，赠予了他的王后。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我将奥比杜什镇及其城堡，赠予我最挚爱的王后伊莎贝尔，作为她的私人财产与领地。” —— 后世对国王赠予令的还原。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这不仅是一份爱情信物，更是一项制度的确立。从此，“将奥比杜什赠予王后”成为葡萄牙王室延续数百年的传统。历代王后成为这里的领主，她们的收入来自小镇的税收，也负有保护与治理之责。这道印记，将奥比杜什从单纯的军事要塞，提升为“王后的私人珠宝盒”，赋予了它无与伦比的尊贵与柔情色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二道印记：城墙的重生与军事考验 (14-17世纪)</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "获得王后领地的地位后，奥比杜什进入了建设黄金期。<strong>费尔南多一世</strong>国王在14世纪下令，在摩尔古城墙的基础上，重建了我们今天所见的宏伟石砌城墙。这道全长1.5公里的城墙，完美地环绕着整个山顶小镇，堪称中世纪军事工程的典范。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的坚固，在随后几个世纪里经历了严峻考验。尤其是1580年葡萄牙王位危机后，西班牙哈布斯堡王朝统治时期，以及1640年葡萄牙恢复独立战争期间，奥比杜什因其战略位置，多次成为战场。城墙上的弹痕与修补痕迹，无声诉说着那段动荡岁月。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第三道印记：从荣耀到地震，再到重生 (18世纪)</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "18世纪，奥比杜什在<strong>若昂五世</strong>国王的统治下，迎来了巴洛克艺术的浸润。小镇的主教堂<strong>圣玛丽亚教堂</strong>被改造，内部装饰变得富丽堂皇。然而，1755年那场摧毁里斯本的<strong>巨大地震</strong>，同样重创了这座山城。城堡和许多房屋严重受损。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "地震后的重建，是在庞巴尔侯爵务实风格的影响下进行的。人们修复了建筑，但风格趋向简朴。这道印记，让奥比杜什的建筑层理更加复杂：罗马-哥特式的根基、曼努埃尔式的窗饰、巴洛克的内部装饰，以及朴素的震后修复外墙，共同构成了它独特的历史风貌。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在奥比杜什的历史星空中，有两位人物的光芒格外持久，一位赋予它灵魂，另一位则为它歌唱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>传奇之一：“圣王后”伊莎贝尔与她的仁政</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>阿拉贡的伊莎贝尔</strong>（1271-1336），这位被葡萄牙人尊称为“<strong>圣王后</strong>”的女性，是奥比杜什传奇的起点。她不仅是收到这份城镇礼物的首位王后，更以无尽的仁慈与智慧，成为了它的灵魂象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她与国王迪尼斯的婚姻颇具传奇色彩，起初是政治联姻，后来却成为深情伉俪。作为奥比杜什的领主，伊莎贝尔并未将其视为单纯的收入来源。她多次到访小镇，关心民生。当地流传最广的轶事，便是关于她的仁慈：她常常用自己长袍里藏着的食物和钱财，接济穷苦百姓。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“王后的袍子仿佛一个无尽的宝库，总能变出面包给饥饿的孩子，变出硬币给无助的妇人。” —— 奥比杜什民间流传的说法。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她主导修建了奥比杜什最初的济贫所和医院，并大力支持农业改良。更深远的影响在于，她将一种温和、慈悲的治理风格烙印在这里。在她去世并被封圣后，奥比杜什的圣玛丽亚教堂内设立了供奉她的祭坛。小镇居民世代感念这位“他们的王后”，她的精神遗产，让“婚礼之城”的浪漫头衔，充满了人道主义的光辉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>传奇之二：悲情诗人巴尔塔扎尔与他的“狱中眺望”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "若论与奥比杜什羁绊最深的文艺名人，则非诗人<strong>巴尔塔扎尔·格拉西安</strong>（？-1618）莫属。他并非王公贵族，而是一位因卷入宫廷阴谋而被囚禁于此的悲剧人物。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "巴尔塔扎尔是塞巴斯蒂昂国王和后来的哈布斯堡王朝时期的一位廷臣与诗人。他卷入了复杂的政治斗争，最终失势，被囚禁在奥比杜什城堡的高塔之中。囚室生活是黑暗的，但唯一的小窗，却给了他一片无与伦比的视野：他能望见远处的潟湖、大西洋，以及小镇鳞次栉比的白色屋瓦。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这间囚室里，他写下了大量诗歌和书信。他的诗篇充满了对自由的渴望、对命运的思索，以及对窗外那片永恒景色的细腻描绘。奥比杜什的景色，成了他精神困境中唯一的慰藉与艺术灵感的源泉。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“这扇窄窗是我的全部世界/一边是囚牢的影，一边是海的光/奥比杜什的白色在夕阳下燃烧/而我，只是墙上一点冰冷的墨迹。” —— 后世根据巴尔塔扎尔书信精神演绎的诗句。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最终，巴尔塔扎尔病逝或死于狱中（确切情况成谜），葬在了奥比杜什的某个无名角落。他的故事，为这座浪漫之城增添了一抹深邃的悲剧色彩与文人风骨。今天，当游客漫步小镇，或许能感受到，那份静谧之美中，也夹杂着一位诗人几百年前的孤独凝视。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了正史与名人，奥比杜什的石头与街巷间，还流淌着神秘的传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中最动人的，是关于<strong>圣玛丽亚教堂</strong>主祭坛的。传说在教堂的一次重大修缮期间，工匠们为如何装饰主祭坛而发愁。一天夜里，一位穿着朴素、气质高贵的陌生女子来到工地，默默拿起工具雕刻起木头。她技艺高超，雕刻出的天使与花卉栩栩如生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二天清晨，工匠们看到未完成却精美绝伦的雕刻，惊愕不已，四处寻找那位女子，却遍寻无获。此时，阳光正好照射在祭坛上，有人恍惚看见雕刻中圣母玛利亚的面容，竟与那位神秘女子有几分神似。于是，人们相信，是<strong>圣母玛利亚</strong>本人显灵，亲手参与了这座献给她的教堂的建造。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“她不曾言语，只有凿子与木头亲吻的声音，如最虔诚的祷告。当晨光揭开作品的帷幕，我们才明白，昨夜与我们一同劳作的，是天堂来的工匠。” —— 代代相传的工匠故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说加深了小镇的宗教虔诚色彩，也让这座教堂在信徒心中地位非凡。直到今天，许多当地老人依然相信，在月圆之夜静静聆听，或许还能听到教堂里传来细微而神圣的雕刻声。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个习俗传说则与“<strong>吉尼亚</strong>”（一种当地樱桃利口酒）有关。据说，最早将巧克力杯与樱桃酒结合的，正是奥比杜什一位聪明的店主。他看到王公贵族们喜爱甜酒，却嫌酒杯普通，便想出将黑巧克力做成小杯，倒入冰镇的利口酒。客人可以先品酒，再吃掉浸润了酒香的巧克力杯。这个“可以吃的杯子”的创意，迅速风靡，成为了奥比杜什独一无二的味觉标志。这虽非古老神话，却已是现代游客口耳相传的“美味传说”。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客穿过<strong>奥比杜什</strong>的古城门，脚下踩过的不仅是石板路，更是层层叠叠的时间。这座“婚礼之城”的魅力，远非其童话般的外观所能概括。它是<strong>葡萄牙民族认同感</strong>的一个微小而坚实的单元：从收复失地的荣耀，到王权浪漫的传统，再到经受地震考验的韧性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，历史不是博物馆里僵硬的展品，而是依然在呼吸的生活背景。城墙是散步道，城堡是酒店，教堂的钟声每日照常响起。读懂奥比杜什，便是读懂一种葡萄牙式的生存哲学：以坚固的防御守护内心柔软的传统（如对王后伊莎贝尔的永恒纪念），在历史的伤痛（地震、战争）后，总能以质朴而充满生命力的方式重生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它提醒我们，一些最动人的欧洲故事，并不总发生在喧嚣的大都会，而是藏在这些时光仿佛停滞的小镇里，等待人们去聆听石头的低语，去品味一杯“吉尼亚”酒中蕴含的、甜蜜与微醺交织的往事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/arcos-de-valdevez" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿科斯-迪瓦尔德韦什</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Arcos de Valdevez</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chaves-roman-bridge-and-fortress-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沙维什</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Chaves</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/idanha-a-velha" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    伊
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">伊达尼亚-阿韦利亚</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Idanha-a-Velha</p>
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
