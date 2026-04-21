import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃格尔历史溯源｜匈牙利“公牛血”英雄城的百年围城、主教传奇与葡萄酒战争',
  description: '走进匈牙利埃格尔，揭秘1552年史诗围城与“公牛血”葡萄酒的壮烈传说。跟随主教、建筑大师与酿酒修士的足迹，探寻一座英雄之城的前世今生。',
}

export default function EgerCastleBullBloodHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '埃格尔城堡与公牛血产区', href: '/attractions/eger-castle-bull-blood-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`埃格尔城堡与公牛血产区・Eger Castle & Egri Bikavér Region・匈牙利・埃格尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在匈牙利东北部，葡萄园环绕的丘陵间，藏着一座用石头与葡萄酒书写历史的英雄之城。它的名字叫<strong>埃格尔</strong>。这里的故事，远不止一杯醇厚的“公牛血”葡萄酒。1552年，一场惊天动地的围城战，将这座小城永恒地铭刻在欧洲抗击奥斯曼帝国的史诗之中。从匈牙利王国北部的主教座堂城，到鄂图曼帝国的边陲行省，再到浴火重生的巴洛克明珠，埃格尔的每一块城墙砖石，都浸透着血与火的记忆，也沉淀着葡萄藤根须般的坚韧生命力。抛开游玩攻略，走进埃格尔的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`埃格尔城堡与公牛血产区`} />
                <InfoRow label="英文名称" value={`Eger Castle & Egri Bikavér Region`} />
                <InfoRow label="正式名称" value={`Eger Castle & Egri Bikavér Region`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`埃格尔`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃格尔的起源，深埋在匈牙利国家形成的血脉之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元10世纪末，匈牙利首位国王<strong>圣伊什特万一世</strong>皈依天主教，并大力推动国家的基督教化。在这一宏大的历史图景下，埃格尔被选定为主教座堂所在地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "约在1004年至1009年间，埃格尔教区正式建立。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市的名字“Eger”源于古匈牙利语，意为“白杨树”，可能源于当地河谷中繁茂的林木。从一开始，它的命运就与宗教和防御紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的主教座堂建于城堡山上，俯瞰着埃格尔河谷。这座山城并非自然形成，而是王国战略布局的产物。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它地处通往波兰和波罗的海的商贸要道，更是守护匈牙利北部平原免受侵袭的军事前哨。教区赋予它神圣的地位，地理则赋予它守卫的职责。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在中世纪早期，埃格尔便迅速发展成为匈牙利王国北部重要的宗教、文化与行政中心。主教不仅是精神领袖，也是世俗权力的掌握者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们在此建造了坚固的宫殿、宏伟的教堂，并吸引了学者、工匠和商人聚集。城市的轮廓，围绕着山巅的城堡与山脚下的主教座堂逐步展开。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种“<strong>主教城堡复合体</strong>”的格局，奠定了埃格尔数百年的城市肌理，也为后来那场决定命运的战役，准备好了最初的舞台。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃格尔的历史，由两个截然相反的时代强力塑造：<strong>英雄的捍卫</strong>与<strong>漫长的异质统治</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1552：英雄的围城</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "16世纪，奥斯曼帝国的阴影笼罩整个匈牙利。1526年莫哈奇战役后，王国分裂，大片领土沦陷。埃格尔，成了抵抗洪流中最前沿的堡垒之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1552年秋，奥斯曼帝国一支约4万人的大军（另有数万辅助部队）兵临城下。而城内的守卫者，仅有<strong>多博·伊什特万</strong>率领的约2000名士兵，以及约1000名市民、妇女甚至修道士。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "力量对比悬殊到令人绝望。然而，奇迹发生了。依托经过加固的城堡、复杂的坑道系统以及同仇敌忾的军民，埃格尔坚守了整整38个昼夜。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "民间传说记载，为了激励士气，守卫者们畅饮本地深红色的葡萄酒，胡须和铠甲都被染红。土耳其探子惊恐地回报：“匈牙利人在喝公牛的血！”从此，“<strong>埃格尔公牛血</strong>”之名不胫而走，成为勇气与力量的象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场史诗般的胜利，极大地鼓舞了欧洲的士气，暂时阻挡了奥斯曼帝国向北扩张的锋芒。多博·伊什特万成为民族英雄，而埃格尔城堡则化为不屈精神的图腾。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1596-1687：鄂图曼的九十年</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，力量的天平最终倾斜。1596年，奥斯曼大军卷土重来，埃格尔在经过又一次激烈抵抗后陷落。由此开启了长达91年的鄂图曼统治时期。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市被彻底改变。城堡山上建起了清真寺（其尖塔至今仍矗立在城中，成为“<strong>匈牙利最高的宣礼塔</strong>”），教堂被改造，公共浴场（土耳其浴）成为城市生活的一部分。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位旅行者在17世纪中期写道：“埃格尔的街道上，头裹缠巾的土耳其士兵与头戴圆帽的匈牙利农民并肩而行，空气中混合着教堂钟声、宣礼声以及来自东方香料的独特气味。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这一时期并非文化的完全断层，而是一种艰难的共生与融合。它给埃格尔留下了独特的建筑印记与东方的文化层积。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>巴洛克的重生</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1687年，哈布斯堡王朝的军队收复埃格尔。随之而来的，是一场规模空前的“<strong>巴洛克改造</strong>”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尤其是18世纪在<strong>埃格尔主教</strong>的推动下，城市几乎被重建。我们今天看到的埃格尔城市风貌，主要源于这个时期。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "宏伟的<strong>埃格尔大教堂</strong>拔地而起，成为匈牙利第二大教堂。主教宫、市政厅、修道院、贵族宅邸纷纷以巴洛克风格建成。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市从军事堡垒，转型为优雅的巴洛克艺术与教育中心。这一印记如此深刻，以至于人们常称埃格尔为“<strong>匈牙利的巴洛克珍宝</strong>”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从防御工事到宣礼塔，再到巴洛克穹顶，三种截然不同的天际线，诉说着埃格尔撕裂又重生的复杂历史。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃格尔的历史舞台上，活跃着不止一位英雄。除了军事家多博，还有两位人物，以其智慧与艺术，深深塑造了这座城市的灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1. 埃格尔主教——文化与城市的重塑者</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "18世纪是埃格尔的“主教世纪”。其中，<strong>主教城堡</strong>的建造者<strong>塞切尼·卡罗伊</strong>与完成大教堂的<strong>埃斯特哈希·卡罗伊</strong>功不可没。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但最具传奇色彩的是<strong>布朗尼什·乔诺</strong>。他并非贵族出身，却凭借学识与能力，在18世纪下半叶成为埃格尔主教。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他是一位真正的“文艺复兴式”人物：神学家、教育家、艺术赞助人、城市规画家。在他的任期内，埃格尔迎来了文化和教育的黄金时代。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他创立了著名的<strong>埃格尔主教律法学院</strong>，吸引了匈牙利乃至中欧的年轻精英前来求学。这座学院不仅是法律学校，更是哲学、科学和文学的中心。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "布朗尼什主教的日记中写道：“一座真正的城市，其堡垒不应仅是石墙，更应是公民的智慧与美德。我们要让埃格尔成为照亮北匈牙利思想的灯塔。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他亲自监督城市规划和建筑项目，确保新的建筑既宏伟又实用，符合启蒙时代的理性精神。如今城市中心规整的街道格局与和谐的广场，很大程度上得益于他的远见。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>2. “匈牙利米开朗基罗”的囚徒岁月</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与埃格尔结下不解之缘的名人，是匈牙利新文艺复兴建筑的奠基人——<strong>伊布尔·米克洛什</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他被称为“匈牙利的米开朗基罗”，设计了布达佩斯标志性的<strong>塞切尼链桥</strong>、国会大厦的原始方案以及无数宏伟建筑。然而，他的人生在1848-1849年匈牙利革命失败后坠入深渊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "作为革命的积极参与者，伊布尔被奥地利当局判处死刑，后改为长期监禁。他被囚禁的地方，正是<strong>埃格尔城堡</strong>的阴暗地牢。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在长达数年的囚禁中（1852-1857年），这位建筑大师的身体被禁锢，精神却从未屈服。没有纸笔，他就在牢房的墙壁上，用炭块和钉子雕刻、绘画。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "传说他绘制了复杂的建筑草图、宗教场景，甚至完整的教堂立面设计。这些“墙壁上的梦想”，是他对抗绝望的方式，也是艺术生命力的悲壮证明。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃格尔的囚禁经历摧毁了他的健康，但也淬炼了他的精神。获释后，尽管事业受限，他仍持续创作，其晚年的设计风格更显沉郁与深刻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如今，游客可以参观城堡中复原的“<strong>伊布尔牢房</strong>”。站在这狭小的空间里，人们仿佛能触摸到一个伟大灵魂在绝境中迸发出的不朽创造力。埃格尔，不仅是一座守护英雄的城堡，也成了一座囚禁并见证天才的纪念碑。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在埃格尔，历史与传说如同葡萄酒般交融，最脍炙人口的，当然是“<strong>公牛血</strong>”的由来。但除了战场上那豪饮的典故，还有一个更“接地气”的版本在酒窖中流传。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说很久以前，埃格尔一位美丽的少女爱上了一位勇敢的牧羊人。然而，当地残暴的领主也觊觎少女的美貌，欲强占为妻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "牧羊人决心带爱人私奔。临行前，他来到少女家地窖，想装一些葡萄酒路上喝。少女的父亲，一位老酿酒师，将最深处一桶颜色最深、如血般浓稠的酒指给了他。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“喝下这酒吧，孩子，”老人说，“它能给你公牛一样的力量和勇气，去面对前路的艰险。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "牧羊人饮下酒后，果然感到浑身充满力量。他不仅成功带走了爱人，还在森林中击退了领主派来的追兵。从此，人们便相信，埃格尔最深色的葡萄酒里，蕴藏着爱情与勇气的魔力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则关于城堡山下的<strong>地道网络</strong>。这些为防御而挖掘的迷宫般的地道，在民间故事中有了更多神秘色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传，在土耳其占领时期，一位匈牙利铁匠被囚在城堡中。他夜夜梦见一条银色鳟鱼，指引他地下的水路。凭借梦中的记忆，他竟真的在挖掘地牢时，发现了一条通往城外溪流的秘密水道，并借此逃脱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，埃格尔人相信，他们的土地下存在着精灵或守护神，化身为鱼，在危难时刻指引忠诚而勇敢的子民。直到今天，一些古老的酒窖深处，人们仍能听到隐隐的水流声，他们说，那是“地下鳟鱼”还在游动。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日的埃格尔，是一座漫步其中便能阅读的立体史书。登上<strong>城堡</strong>，抚摸那些布满弹痕的城墙，1552年的呐喊与烽火仿佛近在咫尺。在<strong>中世纪街区</strong>的土耳其minaret下喝一杯咖啡，九十年的异质统治不再是课本上的名词，而是眼前文化与建筑融合的实景。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转身步入<strong>巴洛克城区</strong>，仰望大教堂的宏伟穹顶，你能感受到哈布斯堡时代重振荣光的雄心与虔诚。而穿行于<strong>“美人谷”</strong> 或<strong>“圣安娜谷”</strong> 的酒窖间，在酒农们热情邀请你品尝“公牛血”时，你品尝的已不只是一杯美酒，而是数百年来支撑这座城生存、战斗、庆祝的生命之血。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃格尔的魅力，在于它从未被单一的历史叙事所定义。它是<strong>英雄的</strong>，也是<strong>囚徒的</strong>；是<strong>基督教的</strong>，也残留着<strong>伊斯兰的</strong>；是<strong>石头的堡垒</strong>，更是<strong>葡萄的田园</strong>。这种复杂的层积与矛盾，构成了它独一无二的人文深度。读懂埃格尔，便是读懂了匈牙利民族命运的一个缩影——在夹缝中求生，在毁灭后重建，在苦难中酿造甘醇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？城堡门票、酒窖探秘、交通住宿全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
              <a href="/attractions/szombathely-isis-temple-roman-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    松
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">松博特海伊</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Szombathely</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/veszprem" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维斯普雷姆老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">veszprem</p>
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
