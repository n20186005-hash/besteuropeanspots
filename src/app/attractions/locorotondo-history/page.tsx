import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '洛科罗通多历史溯源｜伊特里亚谷圆形迷宫小镇的前世今生与白色传奇',
  description: '抛开攻略，探寻洛科罗通多：一个因“圆形”而生的意大利白色小镇。揭秘其中世纪防御起源、贵族权谋与民间智慧，看懂每一堵白墙的岁月故事。',
}

export default function LocorotondoHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '洛科罗通多', href: '/attractions/locorotondo-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`洛科罗通多・Locorotondo・意大利・普利亚`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在意大利普利亚的腹地，伊特里亚谷的橄榄树与葡萄园之间，洛科罗通多如同一枚被时光打磨的白色指环，静静卧在山脊之上。它的名字直译为“圆形场所”，这不仅是地理形态的描摹，更是一部关于聚居、防御与生存的立体史书。这里的街巷不是为游客而设的迷宫，而是中世纪平民为应对动荡时局，用智慧和汗水浇筑的生活蓝图。抛开游玩攻略，走进洛科罗通多的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`洛科罗通多`} />
                <InfoRow label="英文名称" value={`Locorotondo`} />
                <InfoRow label="正式名称" value={`Locorotondo`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`普利亚`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "洛科罗通多的故事，始于中世纪早期南意大利的混乱与重建。确切的城市雏形，可追溯至<strong>10世纪</strong>左右。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，长期的战乱与萨拉森人的袭击，迫使沿海和低地的居民向内陆的丘陵地带迁移。他们需要易于防守、并能守望广阔平原的高地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "山脊上的圆形台地，成为了天赐的选择。最初的定居点很可能是自发形成的，围绕着一处核心（可能是一口井或一个小教堂）呈环状向外辐射建设。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种布局绝非偶然的审美，而是严酷生存逻辑下的必然。<strong>圆形</strong>意味着最短的防御周长，居民可以用有限的资源筑起围墙，保护最多的内部空间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字也赤裸裸地揭示了这一点。<strong>“Loco Rotondo”</strong> 在当地方言中，就是“圆形的地方”。没有浪漫的神话附会，只有对地形最务实、最直接的命名。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "到了<strong>11世纪</strong>，随着诺曼人征服南意大利，这片土地被纳入新的封建体系。文献中首次出现“Locorotundi”的记载，标志着它正式成为一个被认可的封建领地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的核心居民，正是那些在动荡中寻求庇护的农民。他们在此耕种山谷下的肥沃土地，傍晚则退回山巅的圆形堡垒。这座小镇，从诞生之初就刻着<strong>防御与农业</strong>的双重基因。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "诺曼征服后，洛科罗通多被纳入<strong>塔兰托亲王国</strong>的版图。它成为了封建棋盘上的一枚棋子，在各大贵族家族间流转。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>12世纪</strong>，神圣罗马帝国皇帝<strong>腓特烈二世</strong>统治南意时期，这位被誉为“世界惊奇”的君主在普利亚建造了大量城堡。虽然洛科罗通多没有他的直接建筑遗产，但其所在的整体防御体系得到了加强。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇的环形结构，与腓特烈二世倡导的集中、高效的治理与防御思想不谋而合。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的城市形态飞跃，发生在封建领主更迭之后。<strong>14世纪</strong>，安茹王朝的<strong>乔万娜一世女王</strong>将洛科罗通多赐予<strong>奥尔西尼家族</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个强大的罗马贵族家族，在此确立了长达数个世纪的统治。他们或许没有大兴土木建造豪华宫殿，但却巩固了小镇作为<strong>农业中心</strong>的地位。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“这里的空气清澈，土地丰饶，尤其盛产上好的葡萄酒与橄榄油……” —— 18世纪地方志记载" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "领主们深知这里的价值在于物产。他们完善了领地的管理体系，促进了葡萄种植与榨油业的专业化。今天弥漫全镇的精致酒香，其产业根基便在那时深深扎下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，圆形布局在带来安全的同时，也带来了拥挤。人口增长使得内部空间不堪重负。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转机出现在<strong>18世纪</strong>。随着外部威胁减弱，一场自发的城市“扩张”开始了。居民们开始在古老圆形城墙的外围，沿着放射状的道路建造新房。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这就是为何你今天看到的洛科罗通多，是一个“同心圆”：内核是最古老、最狭窄的迷宫式街巷（称为“<strong>jardini</strong>”，意为花园，因家家户户门前的盆栽而得名）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "外围则是相对规整的新区。这次扩张并非规划所致，而是民间的自然生长，新旧交界处毫无违和，共同构成了小镇层叠的历史剖面。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在洛科罗通多，最动人的传奇并非来自王侯将相，而是属于一位守护本地记忆的“乡土史家”——<strong>安东尼奥·卡皮塔</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>安东尼奥·卡皮塔（1861-1933）</strong>，是一位出身于小镇富裕家庭的律师、学者和地方政治家。他的人生轨迹，完美诠释了何谓“根的情怀”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在19世纪末意大利统一后，全国掀起一股现代化浪潮，许多古老的传统和建筑被弃之如敝履。年轻的卡皮塔敏锐地意识到，他的家乡正在面临一场无声的“文化危机”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他毅然选择了一条与众不同的道路：不是去大城市追逐名利，而是扎根故土，成为一名孜孜不倦的<strong>地方档案挖掘者和历史编纂者</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他花费数十载光阴，泡在尘封的教会和市政档案室， deciphering着那些几乎被遗忘的、用古意大利语和拉丁文写就的羊皮纸文件。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的工作堪称考古式写作。通过他的笔，洛科罗通多模糊的中世纪编年史变得清晰：领主的更替、瘟疫的肆虐、教堂的兴建、税收的清单……小镇的每一次呼吸都被记录了下来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1910年</strong>，他出版了里程碑式的著作 <strong>《洛科罗通多历史笔记》</strong> 。这本书至今仍是研究该镇历史的绝对基石。更可贵的是，他的研究不仅关乎宏大叙事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他记录市井俚语，搜集民间歌谣，考证古老习俗。是他，首次系统性地描述了小镇独特的圆形布局的成因与演变，将其从“一种特色”提升为“一部生存史诗”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "卡皮塔的遗产是无形却永恒的。他让洛科罗通多人第一次系统性地认识了自己是谁，从何而来。他捍卫了小镇的地方身份认同，在全球化尚未到来的时代，就为这座白色迷宫注入了不可替代的文化灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如今，小镇图书馆以他的名字命名，主广场上也有他的纪念牌匾。游客或许不会特意寻找，但小镇每一处被妥善保存的历史细节里，都有他默默耕耘的影子。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在洛科罗通多，历史不仅写在文献里，更活在墙壁的“呼吸”与街角的“精灵”之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的墙壁会“说话”。小镇所有建筑的外墙，都被统一刷成耀眼的<strong>白色</strong>。这不仅是美观或为了反射烈日。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地有一个流传甚广的传说：每年用熟石灰粉刷墙壁的传统，始于一场古老的瘟疫。人们相信，石灰强烈的碱性可以<strong>净化空气、驱赶病魔</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“给房子穿上白衬衫，就是为家庭披上健康的盔甲。” —— 当地古老谚语" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，粉刷从一种维护，变成了一项充满仪式感的集体行动。每年春天，小镇便沉浸在石灰水清新的气味中，这气味被视为希望与新生的味道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而在那些错综复杂的“花园”小巷里，还隐藏着关于“<strong>彩陶小矮人</strong>”的故事。许多住户的窗台、门楣上，会放置手工烧制的彩陶小矮人（<em>monachicchi</em>）玩偶。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说他们本是中世纪建造这些房屋时，不慎被封闭在墙壁夹层中的小精灵。他们并无恶意，反而会成为家的守护灵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "居民们放置玩偶，既是对这些“古老室友”的致意，也是一种祈愿，希望他们继续为家庭带来安宁与好运。这些俏皮的彩陶形象，为严肃的白色几何迷宫，平添了几分天真的人文暖意。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在洛科罗通多，你踏出的每一步，都在解读一部立体的中世纪平民生活史。它的价值，远不止于一张明信片般的风景。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那令人晕眩的圆形迷宫，是普通人在强权与动荡中，用集体智慧书写的<strong>生存宣言</strong>。每一道为了采光而刻意扭动的街巷，每一栋为了扩展空间而出现的“圆锥尖顶”石屋，都是对生活最真挚的呐喊与创造。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的白色，不是地中海风情的简单标签，而是一层又一层叠加的<strong>时间年轮</strong>，是 annual 的家族记忆与社区仪式。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它没有恢弘的大教堂或公爵府，它的伟大藏于市井之间，在于那种从未被中断的、绵密而坚韧的生活延续性。读懂洛科罗通多，便是读懂了南意大利乡土社会的灵魂——一种在限制中寻找美，在防御中创造家园的非凡韧性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座圆形小镇，本身就是一座无顶的博物馆，陈列着最生动的人文遗产。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/grottaglie-ceramics-district" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格罗塔列陶瓷峡谷</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Grottaglie (The Ceramics District)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/alatri-polygonal-walls" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿拉特里</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alatri</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/spello-flower-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯佩洛花城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Spello</p>
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
