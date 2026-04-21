import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '圣莫里斯修道院历史溯源｜瑞士最古老修道院的千年传奇与前世今生',
  description: '探索瑞士圣莫里斯修道院：1500年信仰、黄金宝藏与圣莫里斯军团传奇的守护地。小众深度历史之旅。',
}

export default function AbbeySaintMauriceHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '瑞士', href: '/destinations/europe' },
            { label: '瓦莱州圣莫里斯', href: '/destinations/europe' },
            { label: '圣莫里斯修道院', href: '/attractions/abbey-saint-maurice-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`圣莫里斯修道院・Abbey of Saint-Maurice・瑞士・瓦莱州圣莫里斯`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在瑞士瓦莱州险峻的罗纳河峡谷旁，岩壁之下，隐藏着西方基督教世界一个活着的奇迹：<strong>圣莫里斯修道院</strong>。它并非一座仅供凭吊的遗址，而是自公元515年创建以来，<strong>从未间断过祈祷与社区生活</strong>的圣地。这里的每一块石头，都浸染着罗马帝国的余晖、早期殉道者的热血，以及法兰克国王的珍宝。抛开游玩攻略，走进圣莫里斯的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`圣莫里斯修道院`} />
                <InfoRow label="英文名称" value={`Abbey of Saint-Maurice`} />
                <InfoRow label="正式名称" value={`Abbey of Saint-Maurice`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`瓦莱州圣莫里斯`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座修道院的起源，直接定义了整个城镇的诞生。时间锚定在<strong>公元515年</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，勃艮第王国国王<strong>西吉斯蒙德</strong>做出一个决定性举动。他下令在罗纳河谷一处名为“阿高瑙”（Agaunum）的古老罗马站点，建立一座宏伟的修道院与教堂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "地址的选择绝非偶然。这里传说是<strong>圣莫里斯</strong>及其麾下“底比斯军团”英勇殉道之地。据传，在<strong>公元3世纪末</strong>，这支全部由基督徒组成的罗马军团，因拒绝向异教神祇献祭并屠杀同胞，在此被皇帝马克西米安处决。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“他们宁愿选择神圣的死亡，也不愿苟且偷生，玷污信仰。” —— 尤克里乌斯《圣莫里斯殉道记》" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "西吉斯蒙德国王旨在将这里打造成一个永恒的“赞美之所”。他设立了独一无二的制度：由修道士组成“祈祷连队”，<strong>24小时不间断地轮唱圣咏</strong>，以荣耀殉道者。修道院因此得名“圣莫里斯”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "地名“阿高瑙”逐渐被“圣莫里斯”取代。城镇围绕着这座精神与权力的堡垒生长起来。它的建立，是后罗马时代蛮族国王寻求正统性与神圣庇护的经典缩影，为阿尔卑斯山隘口注入了不朽的灵魂。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一个印记，是奠基本身。</strong> 515年的创建行为，就是最重要的历史事件。西吉斯蒙德国王不仅带来了修士，更带来了无与伦比的财富与圣物。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他将大量土地、庄园赠予修道院，使其成为当时西欧最富有的修道院之一。他还从各地搜集圣徒遗骸安放于此，其中就包括他本人后来崇敬的<strong>圣徒遗骨</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这使得圣莫里斯迅速成为欧洲最重要的朝圣中心之一。它的影响力辐射整个法兰克王国乃至后世的神圣罗马帝国。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二个印记，是劫掠与守护的传奇。</strong> 修道院的财富也引来了灾祸。<strong>9世纪</strong>，维京人（诺曼人）沿河入侵，威胁要洗劫这座宝库。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说中，修道院的珍宝被修士们紧急藏匿。其中最核心的，是历代积累的<strong>黄金圣物</strong>。它们被巧妙地隐藏起来，躲过了劫掠者的眼睛。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这批宝藏从此成为传说。直到<strong>20世纪中期</strong>，在一次对修道院地下结构的系统性考古挖掘中，一个密封的墓穴被打开。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>璀璨的光芒瞬间溢出。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "里面整齐码放着数十件无与伦比的<strong>中世纪金匠艺术品</strong>：圣物盒、十字架、珠宝。其年代从西吉斯蒙德时代一直延续到中世纪盛期。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这就是“圣莫里斯宝藏”，它从未遗失，只是被忠实地守护了千年。这次发现震惊世界，印证了古籍记载，也让修道院的历史从文本变成了触手可及的黄金之光。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第三个印记，是其作为战略枢纽的沉浮。</strong> 控制圣莫里斯，就等于控制了通往意大利的圣伯纳德山口要道。因此，它一直是世俗领主（如萨伏伊公爵）与教会势力争夺的焦点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "修道院屡经扩建、加固，甚至成为具有防御功能的城堡式建筑群。它在中世纪是朝圣者与商旅的重要驿站，在宗教改革时期是天主教在瑞士的坚固堡垒。它的存在，本身就是一部浓缩的欧洲政教关系史。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1. 西吉斯蒙德国王：从弑子者到圣徒国王</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位勃艮第国王的一生充满戏剧性，与圣莫里斯修道院紧密相连。他并非天生的圣徒。历史上记载，他因听信第二任妻子的谗言，下令将自己的亲生儿子（第一任皇后所生）<strong>勒死</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "犯下如此重罪后，西吉斯蒙德陷入无尽的悔恨。他来到当时已是圣地的阿高瑙，向隐居于此的<strong>圣徒迪佐迪尔</strong>寻求救赎。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我犯下了不可饶恕的罪过。何处才能寻得上帝的怜悯？” —— 后世记载中西吉斯蒙德的忏悔" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在圣迪佐迪尔的指引下，西吉斯蒙德决心通过极致的虔敬来弥补。他不仅出资建造了宏大的修道院建筑群，更以帝王之姿亲自参与搬运石料，践行苦修。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他将自己的统治权威与神圣信仰深度绑定。最终，他因对教会的巨大贡献和对殉道者的尊崇，被后代教会封为<strong>圣徒</strong>，成为罕见的“圣徒国王”。他的遗骨也安葬于他亲手奠基的修道院中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>西吉斯蒙德的传奇，是早期中世纪王权与神权结合的完美范例。</strong> 圣莫里斯修道院，就是他个人救赎与政治智慧的永恒纪念碑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>2. 院长圣迪佐迪尔：修道院的灵魂塑造者</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说西吉斯蒙德提供了物质基础，那么首任院长<strong>圣迪佐迪尔</strong>则是赋予修道院灵魂的人。在国王到来之前，他已是当地一位深受敬仰的隐修者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他亲自制定了那套严苛而创新的“永久赞颂”修道规章。他要求修士们分成数个班次，像士兵接力一样，确保祭坛前的诗歌祈祷<strong>永不停歇</strong>。这象征性地延续了底比斯军团“永不松懈的忠诚”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "迪佐迪尔将军事意象融入灵修生活。修士们是“上帝的士兵”，咏唱是“属灵的武器”。这种理念深深植根于修道院传统，影响了后来许多修道院的规章。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他不仅是精神领袖，也是卓越的管理者。在国王的慷慨赠予下，他有效地组织了庞大的修道院地产和经济体系，确保了这一独特实验能持续运转数个世纪。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "后世尊他为圣徒。他的智慧与坚守，让圣莫里斯没有成为国王一时兴起的产物，而成为了一个具有强劲内在生命力的千年 institution（机构）。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了正史，岩壁下的修道院也滋生着无数口耳相传的传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最核心的传说自然是<strong>底比斯军团的殉道</strong>。当地人会指着罗纳河畔的特定岩石，告诉你那就是当年烈士们鲜血浸染的地方。传说他们的鲜血渗入石缝，每年殉道纪念日附近，石头上都会显现淡淡的红色痕迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于<strong>宝藏的守护</strong>，也有神秘版本。传说当诺曼人来袭时，修士们向圣莫里斯祈祷。一位发光的<strong>天使</strong>指引他们将宝藏藏入祭坛下的密穴，并承诺：“只要信仰在此，珍宝便永不蒙尘。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，这笔财富在黑暗中等候了十个世纪，直到信仰者的手再次将它开启。这个传说赋予了宝藏超越物质的神圣意义。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说关乎修道院的<strong>坚不可摧</strong>。历史上它屡遭威胁，但从未被彻底摧毁。人们说，这是因为殉道圣徒的英灵化作了<strong>阿尔卑斯山的看门狗</strong>，日夜巡守在这片他们献出生命的峡谷。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每当山风穿过塔楼，发出呜咽般的声响，老一代的当地人便会低声说：“听，是军团的灵魂在歌唱。”这些传说，让冰冷的历史有了温度，让岩石与建筑拥有了灵性。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日的圣莫里斯修道院，依然回响着千年不断的圣咏。当你站在那看似质朴的罗马式教堂内，脚下是层层叠叠的考古地层，眼前是璀璨的黄金宝藏，耳边是修士们延续了1500年的同一信仰的颂歌——这种时间的层叠感，是任何博物馆都无法给予的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里不是旅游景点，而是一个<strong>活生生的历史现场</strong>。它见证了罗马帝国的夕阳，蛮族王国的崛起，中世纪朝圣的狂热，以及现代世界对古老传统的持守。它让我们看到，欧洲的基督教文明并非抽象概念，而是由具体的<strong>地点、人物与不间断的实践</strong>所构成。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂圣莫里斯，便是读懂阿尔卑斯山作为欧洲文明走廊的战略意义，读懂殉道精神如何塑造西方的集体意识，也读懂权力与忏悔、财富与信仰之间永恒的张力。这是一座属于时间本身的宝库。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、宝藏展厅打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/poschiavo-switzerland" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    波
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">波斯基亚沃</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Poschiavo</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rhine-falls" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沙夫豪森莱茵瀑布</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rhine Falls</p>
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
