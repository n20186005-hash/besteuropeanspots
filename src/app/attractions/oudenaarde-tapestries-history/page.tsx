import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奥德瓦尔德历史溯源｜挂毯之城的兴衰与勃艮第公爵的遗产',
  description: '金色传说，查理五世与亨利八世的宫廷秘辛，都藏在这座比利时小镇的经纬之间。走入中世纪挂毯的经纬之间，探寻奥德瓦尔德被遗忘的黄金时代。',
}

export default function OudenaardeTapestriesHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '比利时', href: '/destinations/europe' },
            { label: '奥德瓦尔德', href: '/destinations/europe' },
            { label: '奥德瓦尔德', href: '/attractions/oudenaarde-tapestries-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`奥德瓦尔德・Oudenaarde・比利时・奥德瓦尔德`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说布鲁日是北方威尼斯，<strong>奥德瓦尔德</strong> 则是佛兰德斯的金色传说。这里的“金线”并非流淌于运河，而是交织于世界顶级的挂毯之中。从 <strong>15 世纪</strong> 起，它的名字便是欧洲各大王室采购清单上的奢华代名词。这里是神圣罗马帝国皇帝 <strong>查理五世</strong> 的出生地，一场影响深远的政治婚姻在此上演，更是一场惨烈战役的见证者。抛开游玩攻略，走进 <strong>奥德瓦尔德</strong> 的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`奥德瓦尔德`} />
                <InfoRow label="英文名称" value={`Oudenaarde`} />
                <InfoRow label="正式名称" value={`Oudenaarde`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`奥德瓦尔德`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥德瓦尔德的故事，始于 <strong>斯海尔德河</strong> 一个温柔的拐弯处。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元 <strong>9 世纪</strong> 左右，法兰克人看中了这里。河流是天然屏障，也是贸易动脉。他们在河湾高处建立了一个定居点，最初的功能集防御与贸易于一体，一个典型的河滨要塞。它的名字 <strong>“Oudenaarde”</strong> 源自古荷兰语，意为 <strong>“老庭院”</strong> 或 <strong>“旧庄园”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个名字本身就暗示着其起源：一个古老领主的宅邸或庄园中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但这片土地并非一直平静。它地处佛兰德斯伯爵领地与神圣罗马帝国的模糊边界，注定成为权力博弈的前沿。 <strong>11 世纪</strong>，佛兰德斯伯爵 <strong>鲍德温五世</strong> 在此修建了一座坚固的城堡，奥德瓦尔德正式成为伯爵领地东部的重要堡垒城镇。城堡守护着斯海尔德河的渡口，也守护着通往富饶佛兰德斯腹地的通道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "地理位置决定了它的双重命运：既是军事要冲，也是商业温床。当和平降临，河流通航的优势便凸显出来。羊毛、布料、葡萄酒在此集散。正是这种稳定与繁荣的基底，为日后一项登峰造极的艺术与产业的诞生，埋下了伏笔。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥德尔瓦德的历史，被三枚深刻的印记镌刻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一枚印记，是 <strong>1302 年的金马刺之战</strong>。这场战役发生在城镇附近的科特赖克原野，却是奥德瓦尔德命运的关键前奏。佛兰德斯市民民兵大败法王腓力四世的重装骑士，并收集了上千个阵亡法国骑士的金色马刺，悬挂在科特赖克教堂。此役捍卫了佛兰德斯的自治权，也为奥德瓦尔德这类城镇的自信与繁荣扫清了外部强权干预的阴霾。胜利的士气，转化为发展经济的动力。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们佛兰德斯人，用纺织机织造财富，也用长枪守护自由。”——后世流传的民谚" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二枚印记，是 <strong>挂毯产业的黄金世纪</strong>。从 <strong>15 世纪</strong> 中期开始，奥德瓦尔德的工匠将挂毯从普通织物提升为堪比油画的艺术品。他们使用英国羊毛、埃及棉、甚至金线银线，描绘圣经场景、古典神话、贵族狩猎图。订单来自罗马教廷、法国王室、英格兰的亨利八世。城镇行会制定严苛标准，确保“奥德瓦尔德制造”成为品质保证。市政厅的财富，直接映照在 <strong>1535 年</strong> 开始建造的、华丽无比的晚期哥特式 <strong>市政厅</strong> 之上。它的塔楼仿佛一个石头织梭，俯瞰着全城的纺织作坊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三枚印记，是 <strong>政治联姻与王朝转折</strong>。 <strong>1477 年</strong>，勃艮第公爵 <strong>大胆查理</strong> 战死，其独女 <strong>玛丽</strong> 仓促继承了庞大的遗产。为抵挡虎视眈眈的法王路易十一，她在奥德瓦尔德紧急嫁给了未来的神圣罗马帝国皇帝 <strong>马克西米利安一世</strong>。这场在奥德瓦尔德城堡举行的婚礼，将佛兰德斯并入了哈布斯堡王朝的版图。这直接导致了挂毯产业核心技艺与订单向哈布斯堡统治中心的部分转移，是奥德瓦尔德由盛转缓的微妙拐点。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥德瓦尔德的传奇，与两位名人的生命经纬紧密交织。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一位，并非土生土长，却决定了城市气质的女性——<strong>勃艮第的玛丽女公爵</strong>。 <strong>1477年</strong> 那个寒冷的八月， <strong>20岁</strong> 的玛丽并非在宏伟宫殿，而是在奥德瓦尔德城堡的堡垒中，完成了她一生中最重要的仪式。父亲暴毙，法国大军压境，她孤身一人承载着整个勃艮第公国的存亡。选择奥德瓦尔德作为婚礼地点，极具战略意味：这里是要塞，临近她的支持者，且不在法军直接威胁下。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“公爵夫人到来时，面色苍白，但眼神坚定。她知道，自己的婚姻将是最好的防御条约。”——同时代编年史的记载" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场婚姻拯救了她的领地，也将佛兰德斯带入了哈布斯堡时代。更深远的影响在于，她作为一位热爱艺术的统治者，其宫廷对挂毯、音乐、手抄本的赞助蔚然成风。她本人就是奥德瓦尔德挂毯的重要主顾。正是她及其哈布斯堡子孙的持续需求，将奥德瓦尔德工匠的作品推向了维也纳、马德里和伦敦的宫廷，奠定了其“皇家御用”的至尊地位。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二位，是这座城市真正的艺术之子，画家 <strong>阿德里安·布劳尔</strong>。 <strong>1605年</strong>，他出生在奥德瓦尔德一个普通家庭。此时，城市的挂毯黄金时代已近尾声，但市井生活的活力仍在。布劳尔没有继承纺织梭，而是拿起了画笔。他早年前往荷兰，最终成为佛兰德斯大画家 <strong>彼得·保罗·鲁本斯</strong> 的学徒兼挚友（鲁本斯曾热情收藏他的作品）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "布劳尔的传奇在于其题材的颠覆性。他不画神圣的君王与英雄，专攻 <strong>农民、酒徒、烟客</strong> 的日常生活。他的小尺幅油画里，充斥着喧闹的乡村小酒馆、扭曲的打架者面孔、享受烟草烟雾的庶民。这种对底层生活的真实、生动，甚至粗野的描绘，在当时是革命性的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他笔下的人物，或许就来自奥德瓦尔德喧嚣的市集或河畔酒馆。他的画风直接影响了后世如 <strong>扬·斯特恩</strong> 等荷兰风俗画家，甚至遥启了 <strong>弗朗西斯科·戈雅</strong> 的某些辛辣笔触。 <strong>1638年</strong>，布劳尔在安特卫普因瘟疫早逝，年仅32岁。如今，在奥德瓦尔德的市立博物馆中，人们可以见到这位“庶民诗人”的真迹。他的存在提醒世人，这座城市的精神不仅是献给王公的奢华经纬，也有扎根于泥土的、鲜活不羁的灵魂。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在奥德瓦尔德，最动人的传说与它的支柱产业息息相关——关于 <strong>“挂毯女工与盐罐”</strong> 的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传在挂毯业鼎盛时期，一位技艺超凡的年轻女工受命为公爵织造一幅重要的狩猎图。她日夜赶工，精益求精，以至于忘记了照顾家庭。她的丈夫抱怨连连。一天，丈夫在愤怒中，将一罐盐泼在了即将完成的挂毯上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "女工悲痛欲绝，因为盐分会腐蚀珍贵的羊毛与染料，整幅作品可能报废。她流着泪，小心翼翼地拂去盐粒，并用匹配的丝线，巧妙地将被盐渍轻微损坏的几处地方，改织成了狩猎图中 <strong>灌木丛上的点点露珠</strong> 和 <strong>猎犬皮毛上的自然斑纹</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "意外的是，公爵来验收时，对这些生动非凡的“细节”大加赞赏，认为它们让画面充满了清晨的生机，支付了额外的酬金。这个故事在织工间代代相传。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它寓意着工匠的技艺能化腐朽为神奇，也暗含了佛兰芒文化中对家庭与工作平衡的朴素智慧。直至今日，当地一些老人在谈论精湛工艺时，仍会说：“看啊，这活儿细致得能织掉洒上去的盐。”" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日漫步奥德瓦尔德，宁静的斯海尔德河依然缓缓流过。那座 <strong>市政厅</strong> 的塔楼，不再是监控纺织行会的哨所，却依然是城市最骄傲的天际线。你指尖划过市政厅外墙雕刻的纹章，触碰的可能是某位为亨利八世织造壁毯的工坊主姓氏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂奥德瓦尔德，便是读懂一段 <strong>“软实力”</strong> 如何塑造欧洲历史的微观样本。它的挂毯，曾是王权的宣传册、信仰的视觉布道、财富的直观陈列。这里没有发生过改变大陆格局的决战，却用一针一线，编织了欧洲宫廷的审美与权力叙事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它提醒我们，历史不仅是刀剑铸就，也是由经纬交织的。那些消失在账本中的工坊主、无名却技艺绝伦的织工、为盐渍而哭泣的女工，与公爵和皇帝一样，都是这座城市的缔造者。在这里，奢华艺术与市井生活、政治婚姻与庶民悲欢，共同构成了一幅比任何挂毯都更为复杂生动的人文图景。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？市政厅参观、挂毯博物馆探秘、斯海尔德河畔漫步全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/lissewege" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    利
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">利瑟韦赫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lissewege</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/broel-towers-kortrijk" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科特赖克布罗尔双塔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Broel Towers</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gaasbeek-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    加
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">加斯贝克城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gaasbeek Castle</p>
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
