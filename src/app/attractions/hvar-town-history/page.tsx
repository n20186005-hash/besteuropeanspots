import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '克罗地亚赫瓦尔镇历史溯源｜亚得里亚海明珠的前世今生与贵族传奇',
  description: '抛开攻略，深入赫瓦尔镇的千年石街。揭秘威尼斯共和国贵族轶事、薰衣草田下的古希腊基石，以及一场大火如何塑造了今日的文艺复兴容颜。',
}

export default function HvarTownHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '赫瓦尔镇', href: '/attractions/hvar-town-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`赫瓦尔镇・Hvar Town・克罗地亚・赫瓦尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当世人只知它是“派对岛屿”时，赫瓦尔镇在亚得里亚海的烈阳下，静静摊开一部用石头与薰衣草写就的编年史。这里不仅是欧洲阳光最充裕的小镇之一，更是一座被<strong>威尼斯共和国</strong>深刻塑造、被<strong>文艺复兴</strong>人文精神浸润的“海上堡垒”。它的故事，始于古希腊的拓荒者，盛于威尼斯的贵族，伤于奥斯曼的烽火，最终在薰衣草的紫色迷雾中找到了平静。抛开游玩攻略，走进赫瓦尔镇的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`赫瓦尔镇`} />
                <InfoRow label="英文名称" value={`Hvar Town`} />
                <InfoRow label="正式名称" value={`Hvar Town`} />
                <InfoRow label="国家" value={`克罗地亚`} />
                <InfoRow label="城市" value={`赫瓦尔`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "赫瓦尔镇的起源，深埋在<strong>公元前384年</strong>的爱琴海风里。彼时，来自希腊帕罗斯岛的殖民者，驾船穿越亚得里亚海，在如今赫瓦尔岛的斯塔里格勒地区，建立了名为<strong>法罗斯</strong>的殖民地。这是亚得里亚海北部最早的希腊殖民地之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，我们今天所见的赫瓦尔镇，并非直接源于那座古城。历史的指针快进到中世纪。随着斯拉夫部落的迁入和拜占庭势力的起伏，岛上的权力中心逐渐转移。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>13世纪</strong>，一份关键文件改变了小岛的命运。<strong>1278年</strong>，赫瓦尔岛民与威尼斯共和国签署了《自愿归属条约》。他们选择投入威尼斯的羽翼之下，以换取保护，免受海盗与周边势力的侵扰。正是这一决定，为赫瓦尔镇的崛起埋下了伏笔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "威尼斯人看中了岛屿南岸一个拥有天然深水良港的半岛。于是，他们将岛上的行政中心，从内陆的斯塔里格勒，迁移至这个更易防守、利于贸易的海湾。一座新的城镇开始沿着海岸线生长。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字，从希腊语的“Pharos”（灯塔），历经拉丁语“Pharia”，斯拉夫语“Hvar”，最终定格为今日的“Hvar”。这个名字的嬗变，本身就是一部微缩的南欧民族迁徙与融合史。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "威尼斯共和国近四个世纪的统治，是刻在赫瓦尔镇骨子里的印记。从<strong>13世纪末</strong>到<strong>1797年</strong>，威尼斯人将这里打造成一个坚固的海军前哨与繁荣的贸易站。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们修建了宏伟的<strong>圣斯蒂芬主教堂</strong>，其钟楼至今俯瞰着海港。他们更留下了城市最显赫的象征——<strong>威尼斯式兵工厂</strong>。这座建于<strong>1611年</strong>的庞大石砌建筑，底层曾停泊着威尼斯的战船，上层则是巨大的帆布仓库。它无声诉说着共和国控制亚得里亚海航路的野心。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们的城镇坚固而美丽，兵工厂足以庇护整个舰队，广场的宏伟堪比威尼斯。”——17世纪某位威尼斯总督的记述。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，繁荣之下危机四伏。<strong>1571年</strong>，奥斯曼帝国的舰队兵临城下。尽管坚固的<strong>西班牙堡垒</strong>（建于<strong>1551年</strong>）击退了敌军，但城郊仍遭焚掠。这场战火催生了更强大的防御工事，也让赫瓦尔人在恐惧与坚韧中求生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "威尼斯共和国衰落后，赫瓦尔镇如亚得里亚海上的多数明珠一样，命运随着强权更迭而飘摇。它先后经历了短暂的<strong>拿破仑时期</strong>与<strong>哈布斯堡王朝</strong>的统治。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>19世纪</strong>，哈布斯堡王朝将它变成了奥匈帝国贵族青睐的度假胜地。贵族们在此修建别墅，带来了最早的“旅游业”。但小镇真正的底色，仍是渔民与农夫，他们在陡峭的山坡上开垦梯田，种植葡萄、橄榄与后来闻名世界的薰衣草。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些层层叠叠的石墙梯田，不仅是农业景观，更是数百年来普通赫瓦尔人对抗贫瘠土地的生存史诗，是比任何宫殿都更深刻的历史印记。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在赫瓦尔镇的贵族宫邸与石头小巷中，回荡着一位文艺复兴人物的低语——<strong>彼得·赫克托洛维奇</strong>。他是将意大利文艺复兴人文主义思想最早带入克罗地亚文学的关键人物之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "赫克托洛维奇出生于<strong>1487年</strong>，出身于赫瓦尔岛古老的贵族家庭。他曾在帕多瓦大学学习，浸染于古典文学与人文主义思潮。学成归来后，他并未完全投身政坛，而是选择退隐到家族位于赫瓦尔岛斯塔里格勒的庄园。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他最重要的作品《渔夫及其怨言》写于<strong>1556年</strong>。这部诗作并非贵族式的阳春白雪，而是用克罗地亚语生动描绘了普通渔民的艰苦生活与哲学思考。他将古典诗体与本地民间语言结合，开创了先河。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“哦，大海，你是如此反复无常！今天赐我丰饶，明天却将我推向死亡边缘。我们这些渔夫，与命运赌博，筹码是自己的生命。”——诗歌节选。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "赫瓦尔镇广场边，矗立着他家族捐赠修建的<strong>赫克托洛维奇宫</strong>（今为博物馆）。这座宫殿本身就是文艺复兴建筑的典范。但更令人动容的是，他特意在宫殿外墙上修建了一座公共时钟，让所有市民，包括最穷苦的渔夫，都能知晓时间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位贵族诗人，用自己的方式，在故乡的石头上镌刻下了平等与人文关怀的早期印记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位不得不提的名人是<strong>汉尼拔·卢西奇</strong>。这位<strong>15世纪末</strong>的赫瓦尔贵族，被誉为克罗地亚世俗戏剧之父。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他创作的爱情诗剧《女奴》是克罗地亚文学史上第一部世俗戏剧。他的宅邸也曾是岛上人文主义者的沙龙。卢西奇的形象，与赫克托洛维奇一起，共同构成了赫瓦尔岛作为<strong>达尔马提亚文艺复兴中心</strong>的辉煌一页。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们的存在证明，这座偏居海岛的小镇，在威尼斯共和国的羽翼下，并非只是军事堡垒，更曾是一个思想活跃、文艺萌芽的独特中心，其文化影响力辐射了整个达尔马提亚海岸。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "赫瓦尔岛的空气中，除了薰衣草香和海风咸味，还弥漫着一则关于忠诚与救赎的古老传说。这传说与岛上最独特、最庄严的宗教仪式紧密相连——<strong>“Za križen”</strong>（追随十字架）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每年<strong>圣周四</strong>午夜过后，六个岛上的教区会各派出一支队伍，由一名赤脚的信徒肩扛沉重的十字架，引领着队伍在夜间徒步穿越岛屿，行程长达<strong>25公里</strong>，历时八小时，在破晓时分抵达下一个教区的教堂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说，这一传统始于<strong>1510年</strong>。当时，一幅名为《圣母泪》的圣像画被带到赫瓦尔岛。据说，画中的圣母在复活节前一周曾落下真实的眼泪，预示了灾难。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "不久后，一场可怕的瘟疫确实袭击了岛屿。绝望的岛民发誓，如果瘟疫停止，他们将每年肩扛十字架游行以示感恩与忏悔。瘟疫奇迹般消退，这个誓言便被一代又一代的赫瓦尔人恪守了五百多年。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我祖父告诉我，扛十字架的人必须心无杂念。那不是表演，是与上帝和祖先的契约。你能在黑暗中，听见几个世纪以来无数前人的脚步声。”——一位当地老人的口述。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更有一种神秘的说法称，在游行最寂静的深夜路段，虔诚的信徒有时能瞥见白衣的幽灵队伍加入他们——那是往昔岁月中履行誓言的信徒英灵，依然在守护着这个传统。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说与仪式，深深定义了赫瓦尔人坚韧、虔信的内在性格。它并非写在旅游手册上，却流淌在每个本地人的血液里，让小镇的华美建筑之下，有了沉甸甸的精神根基。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客们流连于赫瓦尔镇的奢华游艇码头和喧闹的滨水酒吧时，很容易错过它层层叠叠的历史年轮。但只要你拾级而上，走向<strong>西班牙堡垒</strong>的残垣，脚下每一块被磨光的石板都在诉说威尼斯士兵的巡防；只要你静立在<strong>圣方济各修道院</strong>的回廊，便能感受到文艺复兴时期贵族捐赠者的虔诚与骄傲。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂赫瓦尔镇，便是读懂一种地中海式的生存智慧：在强权（威尼斯）的庇护下精明发展，在灾难（战火、瘟疫）的打击后顽强重生，最终将苦难淬炼成一种独特的美——用薰衣草的柔美中和了石头的冷硬，用绵延的节日狂欢掩饰了历史的伤疤。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不仅是“派对之岛”，更是一座露天的历史档案馆，记录着从古希腊殖民、威尼斯霸权到现代旅游浪潮的完整叙事。在这里，每一阵海风都带着旧故事，等待有心人去聆听。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/trako--an-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特拉科什恰恩城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trakošćan Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/groznjan-istria-art-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格罗日年</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Grožnjan</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/labin-istria" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉宾</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Labin</p>
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
