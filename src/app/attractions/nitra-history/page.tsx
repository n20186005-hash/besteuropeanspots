import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '尼特拉历史溯源｜斯洛伐克最古老城市的前世今生与圣徒传奇',
  description: '探秘斯洛伐克文明摇篮尼特拉。穿越千年，从大摩拉维亚王子宫殿到中世纪修道院，揭开圣西里尔与美多德兄弟在此留下的永恒印记。',
}

export default function NitraHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '尼特拉', href: '/attractions/nitra-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`尼特拉・Nitra・斯洛伐克・尼特拉`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在斯洛伐克西部丰饶的平原上，尼特拉河静静流淌，守护着一个被时光精心雕琢的秘密——这里是斯洛伐克无可争议的“最古老城市”。它的历史层理，深过中世纪的城堡围墙，直达欧洲心脏地带早期斯拉夫王国的辉煌与动荡。<strong>公元9世纪</strong>的大摩拉维亚时期，这里已矗立起王公的宫殿与基督教教堂，成为斯拉夫世界接受西方拉丁礼与东方拜占庭礼洗礼的前沿舞台。抛开游玩攻略，走进尼特拉的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`尼特拉`} />
                <InfoRow label="英文名称" value={`Nitra`} />
                <InfoRow label="正式名称" value={`Nitra`} />
                <InfoRow label="国家" value={`斯洛伐克`} />
                <InfoRow label="城市" value={`尼特拉`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尼特拉的起源，深植于欧洲民族大迁徙后斯拉夫人的定居浪潮中。早在<strong>公元7-8世纪</strong>，斯拉夫部落便在此处的石灰岩山丘上建立了坚固的定居点，俯瞰着肥沃的尼特拉河盆地。这座城市名字的由来，直接源于这条生命之河——“Nitra”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "语言学家认为，河名可能源自一个古老的印欧语词根，意为“奔腾不息”或“清澈水流”，勾勒出这片土地最初的生命线。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，尼特拉真正登上历史舞台，成为政治与宗教中心，是在<strong>公元9世纪</strong>。当时，一个强大的西斯拉夫人政权——<strong>大摩拉维亚公国</strong>——正在崛起。尼特拉成为了其核心领地，乃至一个独立公国的都城。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元828年，一个关键的名字被镌刻入史册：<strong>普里比纳王子</strong>。他在尼特拉建造了已知的、第一座献给圣母玛利亚的基督教堂（于公元828年由萨尔茨堡主教祝圣）。这一事件非同小可，它标志着基督教以“拉丁礼”形式，正式、永久地进入了西斯拉夫人的世界。尼特拉，由此不再是单纯的部落聚居地，它成为了一个政权的心脏，一个信仰的灯塔，拉开了斯洛伐克千年文明史的序幕。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尼特拉的命运，与中欧权力的更迭紧密交织。第一个深刻印记，莫过于<strong>大摩拉维亚的兴衰</strong>。在普里比纳及其子<strong>科策拉</strong>的统治下，尼特拉公国一度强盛。然而，王朝内斗与外部压力使其在9世纪中叶被纳入大摩拉维亚版图。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是在这一时期，尼特拉迎来了改变斯拉夫世界面貌的使者。<strong>863年</strong>，应大摩拉维亚君主<strong>拉斯蒂斯拉夫</strong>的请求，拜占庭皇帝派来了<strong>圣西里尔与圣美多德兄弟</strong>。他们虽主要活动于摩拉维亚南部（今捷克境内），但历史证据强烈表明，尼特拉作为重要中心，必定留下了他们的足迹。他们创造的<strong>格拉哥里字母</strong>，以及将礼拜文献翻译成古教会斯拉夫语的努力，为斯拉夫文化奠定了基石。这场“东方”与“西方”的文明碰撞，在尼特拉的土地上产生了深远回响。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们来到了一片陌生的土地，这里的人们渴望用自己的语言聆听上帝的教诲。”——后世对西里尔与美多德使命的记述。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "大摩拉维亚在10世纪初神秘瓦解后，尼特拉进入了新的纪元。<strong>匈牙利王国</strong>的征服者来了。城堡山上的斯拉夫要塞被改建为坚固的石质城堡，成为匈牙利贵族<strong>亨特-波兹南家族</strong>的采邑。这是尼特拉历史的第二个核心印记：<strong>从中斯拉夫王城到匈牙利王国边疆伯爵领的转型</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡顶部的<strong>主教宫</strong>与<strong>大教堂建筑群</strong>，诉说着下一个印记——<strong>持续的宗教生命线</strong>。尽管政权变更，尼特拉作为教区的地位却奇迹般地延续下来（虽偶有中断）。14世纪，在匈牙利国王的大力支持下，雄伟的哥特式圣埃默拉姆主教座堂在城堡山上拔地而起，它之下更早的罗马式地基仍清晰可辨。城堡不仅是军事要塞，更是不可撼动的信仰堡垒。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地传说，城堡有三把钥匙：一把归国王，一把归主教，一把归市长。三者同心，城市方能安宁。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在尼特拉漫长的星空中，<strong>普里比纳王子</strong>是一颗虽然记载简略却至关重要的星辰。关于他早年生平的史料极少，犹如迷雾中的剪影。我们确切知道，他是9世纪初尼特拉斯拉夫公国的统治者。他的历史功绩，紧密联结着那座<strong>公元828年祝圣的教堂</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当时的中欧，接受基督教并建造教堂，远非纯粹的宗教行为。这是一个精明的政治宣言。通过邀请法兰克王国（萨尔茨堡）的主教前来祝圣，普里比纳是在向强大的西方邻居示好，并寻求其认可，以巩固自己的统治地位，对抗可能来自其他斯拉夫首领或大摩拉维亚的压力。这座教堂是权力的象征，是文明化的标志，也是外交的纽带。尽管他后来因权力斗争被驱逐，流亡至法兰克并获封领地，但他为尼特拉点燃的基督教文明之火，再也没有熄灭。他的名字，因此与斯洛伐克基督教的开端永恒绑定。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与尼特拉深度羁绊的，并非本土君主，而是旅居的圣徒——<strong>圣西里尔与圣美多德兄弟</strong>。这对来自塞萨洛尼基的希腊兄弟，虽未长期定居尼特拉，但他们的使命深刻塑造了这片区域的文化基因。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>863年</strong>，他们带着创造的文字（格拉哥里字母）和翻译的经文来到大摩拉维亚。有理由相信，作为重要中心的尼特拉，很可能是他们传播斯拉夫语礼拜仪式的重要一站。他们的弟子们在此活动更为活跃。兄弟二人最亲密的门徒之一——<strong>圣戈拉兹德</strong>，后来便被任命为尼特拉的主教（或主教级修道院长），延续着用斯拉夫语进行教务的传统。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "美多德曾在信中为遭受迫害的弟子们辩护：“……我们为斯拉夫人找到了纯粹的字母……以便赞美上帝。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们的遗产在尼特拉遭遇了巨大挑战。随着拉丁礼教会势力在匈牙利王国时期的巩固，斯拉夫语礼拜被严格禁止。然而，文化的记忆是顽强的。在尼特拉及周边地区，格拉哥里字母的片段铭文、受拜占庭艺术影响的壁画痕迹，如同历史的潜流，默默诉说着那个短暂却辉煌的“斯拉夫礼”时代。兄弟二人最终被尊为“斯拉夫使徒”，他们的形象被供奉在尼特拉城堡大教堂的壁画与雕塑中，接受后世瞻仰。他们的传奇，赋予了尼特拉超越地域的、泛斯拉夫文化摇篮的精神意义。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "环绕着尼特拉城堡山的，不仅有砖石，还有绵延的传说。最著名的是关于<strong>“白夫人”</strong>的幽灵故事。据说，她是一位中世纪匈牙利贵族女子的灵魂，因不幸的爱情而香消玉殒。每当月圆之夜，或城市面临危难之时，她便会以一身白衣的形象出现在城堡的城墙或塔楼上，静静徘徊。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "老人们说，看见白夫人是吉兆，意味着城堡将受到庇佑，城市会迎来安宁。她不是可怕的幽灵，而是这片土地的守护之灵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说与<strong>城堡山下的水源</strong>有关。一口名为<strong>“奥博拉”</strong>的古井或泉眼，被认为具有神奇的功效。相传，在遥远的异教时代，这里曾是祭祀自然神灵的场所。基督教化之后，传说被附会到一位隐修圣徒身上，说他的祈祷使泉水拥有了治愈疾病的力量。直至今日，仍有当地人对此泉水怀有特殊的敬意。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，将自然景观（山丘、水源）、历史建筑（城堡）与民众的情感记忆编织在一起。它们或许并非信史，却是尼特拉人文肌理中柔软而鲜活的部分，解释了为何本地人谈及城堡时，眼神中总流露出一种超越所有权的、深沉的归属感与神秘感。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日的尼特拉，从容而宁静。走在老城街道，攀上城堡山阶，你所触碰的，是斯洛伐克民族叙事中最古老的章节。这里没有布拉格的游人如织，没有维也纳的金碧辉煌，但它所承载的重量独一无二。它是政权与信仰最初结合的试验场，是拉丁西方与拜占庭东方文化交锋与融合的见证者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂尼特拉，便是读懂斯洛伐克文明如何在一次次外来冲击（法兰克、匈牙利、奥斯曼）下，依然凭借城堡与教堂的坚固，以及潜藏于民间的斯拉夫文化韧性，保有了自己独特的身份脉络。这座城市本身，就是一座露天的层积历史博物馆，每一块罗马式的石雕、每一片哥特式的拱窗、城堡博物馆里那些沉默的古老器物，都在低声吟唱着一首关于起源、信仰与生存的千年史诗。它的魅力，正在于这份深邃的起点感与复杂的层次感。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/likava-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    利
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">利卡瓦城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Likava Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vychylovka-forest-railway-museum" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维希洛夫卡（露天博物馆）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vychylovka</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/stre-no-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯特雷奇诺城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Strečno Castle</p>
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
