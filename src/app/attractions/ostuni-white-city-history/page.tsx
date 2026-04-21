import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奥斯图尼历史溯源｜意大利“白城”的前世今生与圣徒传奇',
  description: '未被大众游客踏足的秘密。探索意大利普利亚“白城”奥斯图尼：从史前洞穴、罗马遗产到中世纪圣徒庇护所，一部镌刻在石灰岩上的编年史。',
}

export default function OstuniWhiteCityHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '普利亚', href: '/destinations/italy' },
            { label: '奥斯图尼', href: '/attractions/ostuni-white-city-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`奥斯图尼・Ostuni・意大利・普利亚`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在地中海炽热的阳光下，它像一颗遗失的珍珠，闪耀在无垠的橄榄树平原之上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥斯图尼，并非仅仅是一座“白色城镇”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的历史层次，远比那层炫目的石灰涂料更为深邃。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里是史前猎人凝视大海的据点，是罗马军团觊觎的港口，是躲避瘟疫的中世纪难民的庇护所，更是一位平民圣徒用一生守护的精神家园。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "抛开游玩攻略，走进奥斯图尼的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`奥斯图尼`} />
                <InfoRow label="英文名称" value={`Ostuni`} />
                <InfoRow label="正式名称" value={`Ostuni`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`普利亚`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥斯图尼的名字，源自拉丁语 <strong>“Hostium Omnium”</strong>，意为“所有人的保护所”或“新城堡”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个名字暗示了它最初的军事防御属性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，这片土地的故事，远比罗马人到来要早得多。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早在旧石器时代晚期，一群神秘的史前人类就已在此定居。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "著名的 <strong>“奥斯图尼一号”</strong> 遗骸，一位约2.5万年前的年轻孕妇的骨骼，在附近的洞穴中被发现。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她的遗骸被涂满赭石，身旁放置着贝壳和燧石工具，构成了欧洲最早、最完整的旧石器时代墓葬之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这证明，远在文明曙光初现时，这里已是人类生死仪式的重要舞台。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "到了公元前8世纪，<strong>梅萨皮人</strong> —— 一个与希腊世界贸易频繁的意大利古民族 —— 在此建立了坚固的定居点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们留下的墓葬和陶器碎片，无声诉说着早期的繁荣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "随后，<strong>罗马人</strong> 于公元前3世纪征服此地，将其更名为“Sturninum”，并大力发展其农业和港口贸易。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但真正塑造今日奥斯图尼雏形的，是中世纪。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在漫长的<strong>黑暗时代</strong>，沿海地区屡遭萨拉森海盗袭扰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "居民们被迫放弃暴露的沿海平原，退守到海拔更高的三座山丘之上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们用厚重的石头，在<strong>公元1000年左右</strong>，开始建造迷宫般的街巷和防御城墙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座“新城堡”（Ostuni）在山巅重生，它的白色，最初并非为了美学，而是石灰涂料的实用选择——消毒、反射烈日。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥斯图尼的历史，铭刻在它蜿蜒的街巷与沉默的建筑中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个核心印记，是它的<strong>中世纪城墙与城门</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天，你依然能从残存的<strong>“城墙之门”</strong> 和错综复杂的阶梯小巷中，感受到那种紧迫的防御需求。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城市被规划成三个同心圆区域，最中心是贵族与主教堂，外围是工匠与平民。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种格局并非一朝一夕形成，而是数个世纪在恐惧（对海盗）与信仰（对上帝）中逐步构建的。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们从海边逃来，在山顶用石头垒起新的家园。每一条狭窄的巷子，都为了能让入侵者迷失；每一段陡峭的阶梯，都为了能据守反击。” —— 当地古老谚语的现代转译" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个深刻印记，是<strong>瘟疫带来的“白色革命”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "17世纪中叶，一场可怕的瘟疫席卷南意大利。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥斯图尼的居民相信，用生石灰粉刷墙壁可以消毒灭菌，阻止瘟疫蔓延。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，整个山城被涂抹成一片耀眼的白色。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场出于生存本能的行动，意外地定义了城市永恒的美学。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "阳光在曲折的白色巷壁上跳跃、反射，创造了独特的光影迷宫。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这白色，是灾难的记忆，也是重生的象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三个印记，藏在一座不起眼的15世纪建筑<strong>“ Palazzo del Seminario”</strong> 里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里曾是神学院，但在其地下，考古学家发现了更为古老的<strong>罗马时期马赛克地板</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "图案是精致的几何纹样与植物藤蔓。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这揭示了奥斯图尼的城市肌理如同千层酥：中世纪建筑直接建立在罗马遗址之上，而罗马遗址下，或许还压着梅萨皮人的基石。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每一层，都是文明的一次覆盖与对话。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在奥斯图尼的众多名字中，有一个并非王侯将相，却深深烙印在城市的灵魂里，他就是<strong>圣奥莫博诺</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>圣奥莫博诺</strong>，一个纯粹的“本地圣徒”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他于<strong>1150年</strong>出生在奥斯图尼一个富裕的布料商家庭。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，年轻的奥莫博诺对财富毫无兴趣，他选择了一条截然不同的路：将自己的一切分给穷人，并成为一名<strong>世俗的苦修者</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这意味着他不属于任何修道院，而是生活在俗世中，以最严苛的方式践行信仰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的“事迹”极具画面感。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据说，他常年只穿一件粗糙的苦行衣，赤脚行走。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他最重要的“工作场所”是奥斯图尼的<strong>圣母升天协同教堂</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每天，他都在那里跪着擦洗地板，为香客提供卑微的服务，并用全部时间祈祷。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的虔诚逐渐赢得了市民的尊敬，被称为“圣洁的愚人”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他最著名的传奇，与一场围城有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据编年史记载，奥斯图尼曾遭敌军围困，水源断绝，危在旦夕。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此时，奥莫博诺平静地走向一口干涸的井，开始祈祷。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "不久，清澈的泉水竟奇迹般地涌出，解了全城之困。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说将他与城市的生存直接联系在一起。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1583年</strong>，在他去世数百年后，教皇格里高利十三世正式将他封圣，<strong>宣布他为奥斯图尼的主保圣人</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的遗骸至今供奉在奥斯图尼主教座堂的圣器室内。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每年<strong>8月27日</strong>，奥斯图尼会举行盛大的庆典，市民抬着他的银质雕像巡游全城。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他不是遥不可及的神祇，而是街坊邻里般亲切的守护者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的存在，定义了这座城市质朴、坚韧、扎根于社区信仰的精神内核。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位值得铭记的人物是<strong>多梅尼科·佩里西</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他并非国际名人，却是18世纪奥斯图尼本土思想的代表。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "作为一名哲学家、法学家和诗人，他在那不勒斯大学学习后，选择回到故乡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的著作<strong>《论奥斯图尼城的起源》</strong> 是第一部系统研究城市历史的学术作品，试图从古籍和遗迹中梳理城市的真实过往。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在启蒙思潮涌动的时代，他代表着一种地方知识精英的觉醒——开始用理性的眼光，审视自己家乡的源流，而不仅仅依赖神话与传说。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了圣徒的奇迹，奥斯图尼的街巷间还流淌着更为古老的传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最动人的故事，围绕着一座名为<strong>“守卫之泉”</strong> 的喷泉展开。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说在遥远的萨拉森人袭击时代，一位美丽的奥斯图尼少女与一位年轻的守城士兵相爱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "某夜，士兵在城墙哨位值守，少女则在家中为他准备食物。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "突然，入侵者的号角撕裂夜空。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "士兵奋起抵抗，最终战死在他守卫的城门下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "少女闻讯，悲痛欲绝。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她没有哭泣，而是端起为爱人准备的那碗水，走到城中广场，将其倒入公共喷泉中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她发誓，这喷泉的水将永远清冽，如同她纯洁不渝的爱情，也将永远守护这座爱人用生命捍卫的城市。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“从那以后，‘守卫之泉’的水从未干涸。喝一口泉水，便能获得忠贞的祝福，也能感受到那位无名士兵的勇气，仍在这白色的街巷间巡逻。” —— 当地导游代代相传的讲述" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说解释了为何许多古老的奥斯图尼喷泉都被精心装饰，并成为社区生活的中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它也将爱情、牺牲与守护，这三种人类最珍贵的情感，融入了城市的石头与流水之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走在黄昏时分的奥斯图尼，当灯光初亮，白色墙壁染上暖黄，你仿佛仍能听见那个遥远夜晚的誓言，在寂静的巷弄中轻轻回响。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客们惊叹于奥斯图尼那片炫目的、仿佛不真实的白色时，他们所见的，并非一个为 Instagram 而生的布景。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们看到的，是一部立体的、生动的<strong>人类生存史诗</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从史前母亲的神秘安葬，到罗马商人的忙碌码头；从中世纪难民惊恐的退守，到对抗瘟疫的集体智慧；从一位圣徒卑微的日常善行，到一则关于爱与牺牲的永恒传说……" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥斯图尼的每一个白色转角，都封存着一段为生存、为信仰、为家园而奋斗的记忆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它是一座<strong>悬在时间边缘的博物馆</strong>，不需要门票，只需你放慢脚步，用手触摸那些粗糙的石灰岩墙壁，用心聆听风声穿过拱门带来的低语。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂奥斯图尼，便是读懂普利亚，乃至整个南意大利坚韧、朴素而又充满神性光辉的灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它提醒我们，最动人的风景，其底色往往是历史的深沉与人文的温度。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/borghetto-sul-mincio" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博尔盖托</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Borghetto sul Mincio</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/san-gimignano-towers-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣吉米尼亚诺百塔之城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">San Gimignano</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/alba-piedmont-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔巴</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alba</p>
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
