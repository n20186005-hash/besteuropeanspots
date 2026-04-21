import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '弗里堡历史溯源｜瑞士“护教先锋”的石头史诗与名人传奇',
  description: '探秘瑞士弗里堡，一座被时间遗忘的中世纪石头城。从**1157年**建城到宗教战争前线，从印刷世家到改革家足迹，走进它沉默的塔楼与传说。',
}

export default function OldTownFribourgHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '瑞士', href: '/destinations/europe' },
            { label: '弗里堡', href: '/destinations/europe' },
            { label: '弗里堡老城', href: '/attractions/old-town-fribourg-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`弗里堡老城・Fribourg・瑞士・弗里堡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在瑞士高原，萨兰河（Saane）用一道近乎完美的峡谷，拥抱了一座固执停留在中世纪的城市。它叫弗里堡，名字意为“自由城堡”，但在超过八百年的岁月里，它最著名的标签却是“<strong>天主教的磐石</strong>”。当宗教改革的洪流席卷瑞士，伯尔尼与苏黎世纷纷改旗易帜时，唯有弗里堡，以近乎偏执的忠诚，捍卫着旧信仰的堡垒。这里的每一块摩拉砂岩都浸透着历史的抉择与坚守。抛开游玩攻略，走进弗里堡的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`弗里堡老城`} />
                <InfoRow label="英文名称" value={`Fribourg`} />
                <InfoRow label="正式名称" value={`Fribourg`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`弗里堡`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1157年</strong>，这是镌刻在弗里堡城徽上的开端。其时，策林根家族的<strong>贝特霍尔德四世</strong>公爵，目光锐利地看中了萨兰河这道深邃的天然堑壕。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的目的非常纯粹：建立一座军事要塞。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座新城堡扼守着从伯尔尼高地通往西瑞士（沃州）和勃艮第的战略要道。它不仅是领土扩张的据点，更是向河对岸萨瓦伯爵领地施加压力的桥头堡。城市的名字直白地揭示了它的本质：“Fribourg”源自古德语“Freiburg”，意为“自由城堡”或“要塞”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的定居者，是公爵从各地招募而来的自由民。他们被赋予特权和土地，代价是为公爵守卫此地。城市最早的布局完全服务于防御：狭窄的街道便于巷战，中心的高地（如今市政厅所在地）是最后据点，而陡峭的河岸本身就是难以逾越的城墙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "弗里堡的诞生，无关浪漫，而是一场精明的军事与政治计算。这也为它日后充满冲突与抉择的命运，埋下了最初的伏笔。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "弗里堡的历史，是一部在夹缝中求生存，并以坚定信仰定义自我的编年史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个关键印记，是其作为<strong>前哨阵地</strong>的宿命。<strong>1477年</strong>，大胆查理在南锡战败身亡，勃艮第公国瓦解。紧邻纷争之地的弗里堡，与伯尔尼结盟，积极参与了对沃州地区的瓜分。然而，与强大的伯尔尼结盟，犹如与虎谋皮。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这引出了第二个、也是决定性的历史印记：<strong>宗教改革中的抉择</strong>。16世纪初，改革之风从苏黎世和伯尔尼强劲吹来。<strong>1528年</strong>，伯尔尼正式皈依新教，并强力向其属地推广。夹在天主教内陆（卢塞恩、乌里州）与新教强邻伯尔尼之间，弗里堡面临生死抉择。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们宁愿让城墙坍塌，宁愿啃食石头，也绝不放弃古老的信仰。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "—— 流传于弗里堡的16世纪市民誓言" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "弗里堡的选择是震惊而决绝的：它拒绝了伯尔尼的要求，坚定地站在了旧教一边。<strong>1529年</strong>，它甚至与五个内陆州签订了防卫盟约，成为“天主教同盟”在西部最坚固的堡垒。整个16至18世纪，弗里堡将自己塑造成了<strong>反宗教改革的大本营</strong>。耶稣会士被请来，建立了闻名遐迩的圣米歇尔学院（今弗里堡大学核心）；巴洛克风格的教堂被精心建造，以艺术的恢弘对抗新教的“简朴”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三个印记，是<strong>19世纪的和平转身</strong>。拿破仑战争后，弗里堡在<strong>1848年</strong>成为瑞士联邦的新州。战争的阴影远去，它从军事-宗教前线，逐渐转型为一个宁静的州府与学术之城。1856年建立的弗里堡大学，延续了其天主教思想中心的地位，但开始向现代学术敞开大门。石头城墙不再用于御敌，而是成为了俯瞰萨兰河峡谷、令人惊叹的历史布景。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在弗里堡厚重的中世纪帷幕下，活动着一些深刻影响其精神面貌的人物。他们并非尽是王侯将相，更多是思想的铸造者与传播者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "首先要提及的，是一个家族：<strong>德鲁埃兄弟</strong>。在印刷术等同于“新媒体”和“权力”的时代，<strong>让-乔治·德鲁埃</strong>与<strong>弗朗索瓦-路易·德鲁埃</strong>在弗里堡设立了印刷厂。他们的活跃期恰逢宗教改革白热化的<strong>1580-1620年</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里并非出版中心，但正因如此，他们的工作更具战略意义。德鲁埃印刷厂几乎专攻天主教典籍、神学论著和弥撒用书。当新教地区大量印刷路德和茨温利的著作时，弗里堡的印刷机则隆隆作响，为天主教世界提供着“精神弹药”。他们印刷的《日课经》和《护教文集》，被送往各地修道院和忠实信徒手中。可以说，这对兄弟是弗里堡“护教先锋”身份在技术层面的忠实执行者，他们用油墨和纸张，巩固了这座城市的意识形态城墙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更为戏剧性的人物，是<strong>纪尧姆·法雷尔</strong>。他是一位激进的新教改革家，约翰·加尔文的亲密战友兼引路人。然而，他与弗里堡的故事，却是一场彻底的“败走麦城”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1532年</strong>，在成功推动日内瓦和纳沙泰尔改革后，法雷尔将目光投向了保守的弗里堡。他或许希望复制在伯尔尼的成功，但他严重误判了形势。他得到的不是听众的耳朵，而是石块和死亡威胁。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我在弗里堡所遭遇的，是自传播福音以来最凶猛、最顽固的抵抗。这里的人心，似乎比他们建房的砂岩还要坚硬。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "—— <strong>纪尧姆·法雷尔</strong> 在一封信件中的记述" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他在集市广场的布道引发骚乱，险些丧命。最终，弗里堡议会勒令他<strong>24小时内离境</strong>，并永久禁止他踏入城市一步。法雷尔的惨败，成为了弗里堡天主教认同的一枚“反面勋章”，被市民们讲述了好几代人。这段往事极具象征意义：一个城市，以驱逐一位后世闻名的新教先驱，来宣告自己不可动摇的立场。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些名人传奇，一位是本土的“沉默建设者”（德鲁埃兄弟），一位是外来的“失败挑战者”（法雷尔），从正反两面，共同勾勒出弗里堡固执而完整的灵魂轮廓。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "萨兰河峡谷的迷雾，滋养着弗里堡的传说。其中最动人的，关乎城市的守护与救赎。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说在古老的年代，萨兰河里住着一位水精灵，她守护着河流与桥梁。每当月圆之夜，她会浮出水面，梳理长发。弗里堡的居民尊重她，从不向河里倾倒污物。作为回报，水精灵确保桥梁坚固，并在洪水来临前发出低沉的呜咽预警。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，<strong>1577年</strong>，一场连月暴雨让河水暴涨，冲毁了当时主要的木桥。人们束手无策。就在绝望之际，一位年轻修士在梦中得到启示：水精灵因岸边新建的皮革作坊污染河水而震怒。市民们立即清理了污染，并由修士主持，向河中投下一枚刻有十字架的圣牌以示忏悔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "次日清晨，人们惊讶地发现，湍急的河面上奇迹般浮现出巨大的砂岩基石，位置恰好可以建造更坚固的桥墩。人们相信这是水精灵与原住民“山灵”和解后给予的礼物。他们利用这些基石，建成了那座著名的、带有顶棚的<strong>伯恩大桥</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“河水有灵，石头有心。你若敬它一分，它便护你百年。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "—— 弗里堡关于萨兰河的古老谚语" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说将自然元素（河、石）、民间信仰（精灵）与基督教观念（忏悔、奇迹）巧妙融合。它解释了城市与险峻地理环境的共生关系，也隐喻了弗里堡人性格中那份基于虔诚的、与环境和解共存的智慧。直到今天，一些老派弗里堡人在过桥时，仍会习惯性地向桥下瞥一眼，仿佛在向那位沉默的守护者致意。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日漫步弗里堡，你会感到时间并非流逝，而是沉淀。这里没有苏黎世的繁华，也缺乏卢塞恩的明信片风光。它的美是沉郁的、带着思辨重量的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "哥特式的圣尼古拉大教堂塔楼，俯瞰着错落的红瓦屋顶，它不仅是信仰的指针，更是数百年抉择的纪念碑。脚下被磨得光滑的砂岩台阶，曾走过誓死护教的市民、运送禁书的工匠、被驱逐的改革家，以及无数在历史夹缝中寻求安定的灵魂。这座城市本身，就是一本立体的、关于欧洲宗教冲突与地域政治的“石头史书”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂弗里堡，便是读懂一种在宏大历史浪潮中，如何以微小城邦之躯，坚持自我定义，并将这种坚持化为独特城市肌理的韧性。它的价值不在于提供了多少景点，而在于提供了一个完整的历史样本，一段凝固的、可供触摸和沉思的过去。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，每一次转角，都可能遇见一扇承载传说的石门，或是一条通往往昔思绪的坡道。弗里堡邀请你的，不是匆忙的打卡，而是一场与欧洲核心历史叙事的、安静而深刻的对话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/spiez-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施皮茨城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Spiez Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sainte-croix" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣克鲁瓦</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sainte-Croix</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/fribourg-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    弗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">弗里堡老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Fribourg Old Town</p>
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
