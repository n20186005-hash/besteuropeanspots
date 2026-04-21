import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '特鲁埃尔历史溯源｜西班牙穆德哈尔建筑的前世今生，凝固在砖石中的三百年共存传奇',
  description: '特鲁埃尔不是一座普通的西班牙小城。它的塔楼是石头写成的诗，铭刻着基督徒、穆斯林与犹太人共存的非凡历史。走进这段被联合国教科文组织珍藏的时光。',
}

export default function MudejarArchitectureTeruelHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '特鲁埃尔穆德哈尔建筑群', href: '/attractions/mudejar-architecture-teruel-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`特鲁埃尔穆德哈尔建筑群・Mudéjar Architecture of Teruel・西班牙・特鲁埃尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在西班牙广袤的内陆高原上，特鲁埃尔像一枚被时光遗忘的钥匙。它的名声不属于海滩或狂欢节，而属于那些高耸入云、用砖石与琉璃写就的塔楼。这座城市最深刻的标签，是 <strong>“穆德哈尔”</strong> ——一个专属于伊比利亚半岛的、关于共存与创造的艺术奇迹。它见证了收复失地运动最激烈的时代，却将敌对转化为一种独一无二的建筑语言。抛开游玩攻略，走进特鲁埃尔的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`特鲁埃尔穆德哈尔建筑群`} />
                <InfoRow label="英文名称" value={`Mudéjar Architecture of Teruel`} />
                <InfoRow label="正式名称" value={`Mudéjar Architecture of Teruel`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`特鲁埃尔`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "特鲁埃尔的诞生，与西班牙历史上那场长达数个世纪的“收复失地运动”紧密相连。公元1171年，阿拉贡国王<strong>阿方索二世</strong>从穆斯林泰法王国手中夺取了这片战略要地。但这并非故事的起点，而是新篇章的序曲。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "国王意识到，这片位于图里亚河畔的高地，是保卫王国南部边境、向瓦伦西亚穆斯林王国进发的关键前哨。于是，<strong>1212年</strong>，他正式颁发特许状，在此建立城市，并赋予其“特鲁埃尔”之名。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个名字的由来，充满浪漫的传说色彩。一种流传最广的说法是，当国王的军队抵达时，看到一头健壮的公牛（西语：Toro）头顶闪烁着耀眼的星辰（西语：Estrella，与古地名“Toruel”或“Turiol”结合）。于是，“特鲁埃尔”便从“Toro”与“Estrella”的融合中诞生，象征着力量与指引。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "实质上，它的建立是一项精心策划的“殖民”工程。国王用优厚的权利和法律（《特鲁埃尔法典》）吸引来自北方的基督徒移民，以巩固边疆。因此，特鲁埃尔从诞生之初，就是一座典型的<strong>边境要塞城市</strong>，被赋予了“特鲁埃尔之钥”的称号，这把钥匙，旨在开启乃至锁住伊比利亚南部的命运。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "特鲁埃尔的历史，是一部用砖块、釉彩和灰泥书写的编年史。它的天际线，由几座非凡的塔楼定义，每一座都是一个时代的句读。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一笔浓墨重彩，落在<strong>13世纪末</strong>。城市的核心——<strong>圣彼得教堂</strong>的塔楼开始建造。这绝非一座普通的基督教钟楼。它的建造者，是留在基督教王国统治下的穆斯林工匠，即“穆德哈尔人”。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们依照真主安拉的几何智慧建造基础，用基督徒领主要求的钟楼形式向上生长，最后，让我们的琉璃彩釉在阳光下，歌颂所有的造物主。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "——后世根据穆德哈尔匠人传统演绎的独白" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些工匠将伊斯兰艺术的灵魂——复杂的砖砌几何图案、蜂巢状的钟乳石拱顶、璀璨的琉璃釉面砖——注入了哥特式建筑的结构中。圣彼得塔楼、萨尔瓦多教堂塔楼、大教堂塔楼相继拔地而起。它们不是征服的纪念碑，而是<strong>共生的丰碑</strong>，标志着一种新文化的诞生：<strong>穆德哈尔艺术</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光流转到<strong>15世纪</strong>。随着1492年格拉纳达的陷落，西班牙全境完成“光复”。政治与宗教的统一，开始挤压这种共存文化的空间。<strong>1486年</strong>，特鲁埃尔的犹太人被驱逐；<strong>1492年</strong>，格拉纳达的摩尔人投降后，境内的穆德哈尔人也面临巨大压力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，艺术的生命力有时比政令更顽强。就在这个微妙的转折点，<strong>1500年</strong>，特鲁埃尔的穆德哈尔泥瓦匠和木匠们组建了自己的行会。这或许是最后的辉煌。他们继续建造，将文艺复兴的某些元素也融入传统，比如圣马丁教堂的塔楼。但本质上，这已是这门独特艺术的余晖。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最终，<strong>1609年</strong>，所有穆德哈尔后裔被勒令驱逐。匠人流散，工艺传承戛然而止。但特鲁埃尔留下的这些塔楼，却成了凝固的绝唱，默默诉说着那个三种文化曾并肩劳作、共同塑造了西班牙身份的复杂时代。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在特鲁埃尔的穆德哈尔史诗中，众多无名匠人是真正的英雄。但历史也记下了一些名字，其中<strong>马丁内斯父子</strong>的故事，尤为动人地体现了这门艺术的传承与终结。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>胡安·德·拉·奎斯塔</strong>？不，那是塞维利亚大教堂的建筑师。在特鲁埃尔，我们要记住的是<strong>迭戈·马丁内斯</strong>。他并非来自宫廷的显贵建筑师，而是一名从石匠学徒成长起来的本地大师。文献记载他活跃于<strong>15世纪中后期</strong>，这正是穆德哈尔艺术从鼎盛走向转折的时期。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "迭戈的一生与这座城市的多座塔楼紧密相连。他深度参与了<strong>大教堂塔楼</strong>的后期装饰工作，那上面错综复杂的菱形砖网和绿白相间的釉面砖带，很可能就出自他和他的团队之手。更重要的是，他被任命为<strong>特鲁埃尔总督署的建筑师</strong>。这意味着，基督教当局的官方建筑，也委托给了一位深受伊斯兰工艺传统熏陶的匠人。这本身，就是那个时代特鲁埃尔社会融合的缩影。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的事业，由他的儿子<strong>佩德罗·马丁内斯·德·奥利瓦雷斯</strong>（常简称马丁内斯·奥利瓦雷斯）继承。奥利瓦雷斯生活在<strong>16世纪上半叶</strong>，一个风雨欲来的时代。他不仅是一名泥瓦匠大师，更是一位罕见的、有文献和图纸遗存的艺术家。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他留下了一本珍贵的设计图集，其中包含拱门、窗饰、浮雕的细致草图。这些图案充满纯粹的穆德哈尔几何美学，证明即使在基督教一统天下的氛围中，这门技艺的美学体系依然被严格遵守和传授。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“吾儿，记住：砖石的接缝要像真理一样直，釉彩的搭配要像星空一样和谐。我们的技艺，不来自经文，而来自比例与光影的永恒法则。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "——后世想象中，迭戈对奥利瓦雷斯的训诫" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥利瓦雷斯最终成为了特鲁埃尔穆德哈尔匠人行会的领袖。他努力维系着这个团体的标准和生存。然而，历史的洪流无法阻挡。随着他那一代人的老去，以及最终1609年驱逐令的到来，马丁内斯家族所代表的、持续了三百多年的精湛技艺与传统，在特鲁埃尔彻底画上了句号。他们不是王公将相，但他们的名字，却与这座城市最骄傲的世界遗产，永世共存。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "特鲁埃尔的传说，与它的建筑和起源神话一样，交织着不同文化的气息。最著名的，莫过于那则解释城市徽章——公牛与星辰——的浪漫传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传，阿拉贡的骑士们在为新城选址时争执不下。此时，一头勇猛的公牛突然出现，它跑到一处高地，大声咆哮，其声如雷。人们追去，发现公牛安静地站立，而在它头顶的上空，一颗异常明亮的星辰正熠熠生辉。领主的牧师宣称，这是上帝显灵，指示在此建城。于是，“特鲁埃尔”（Toro+Estrella）之名与徽章便由此诞生。这个传说将基督教“神启”与古老的动物图腾象征结合，奠定了城市的神秘基调。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而更令人心碎的爱情传说，则直接附着在最美的穆德哈尔建筑之上。那便是 <strong>“特鲁埃尔的情人”</strong> 的故事。相传在13世纪，年轻的<strong>迭戈·德·马克利亚</strong>与<strong>伊莎贝尔·德·塞古拉</strong>相爱。迭戈出身贫寒，伊莎贝尔则是富家女。女孩的父亲要求迭戈外出五年积累财富方可娶亲。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "迭戈历经艰险，在第五年终于满载而归。然而，就在他归来的前夜，伊莎贝尔的父亲骗她说迭戈已死，强迫她嫁给了别人。迭戈次日赶到，心碎欲绝，恳求得到爱人的最后一吻。伊莎贝尔因已为人妇而拒绝。迭戈当场心碎而亡。在他的葬礼上，伊莎贝尔身披丧服出现，在众人面前亲吻了逝去的恋人，随即也气绝身亡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这段悲剧被后代文人不断传颂。而当地人坚信，这对情人就安息在<strong>圣彼得教堂</strong>那精美的穆德哈尔回廊之下。他们的雪花石膏雕像平静地躺在地下墓室中，双手紧紧相牵。这座因艺术而闻名的教堂，也因此笼罩上了一层永恒的凄美氛围，让冰冷的石头，也有了心跳的温度。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客仰视特鲁埃尔那些红砖塔楼在高原湛蓝天空下勾勒出的锯齿状轮廓时，他所看到的，远不止是美丽的建筑。他看到的是一部 <strong>“石头上的共存史”</strong> 。每一块精心烧制的砖，每一片闪烁的釉面瓷片，都是基督教、伊斯兰教和犹太教文化在伊比利亚半岛复杂交融的物证。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "特鲁埃尔的价值，在于它保存了“穆德哈尔”这一西班牙独家历史产物的最高纯度样本。它没有格拉纳达阿尔罕布拉宫的皇家气派，也没有科尔多瓦清真寺的宏大叙事。它的美是质朴的、市民化的，是匠人们将自身文化基因注入新雇主需求中的实用与智慧。它讲述的不是单纯的征服或战败，而是在对抗的夹缝中，文明如何本能地寻求对话、借鉴与创造。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂特鲁埃尔，便是读懂了西班牙灵魂中那个混血的、矛盾的、却又无比丰饶的层次。这座城市本身，就是一个关于边界的故事——地理的边界，信仰的边界，以及在边界之上如何用美搭建桥梁的故事。它的传奇，安静地铭刻在每一道砖缝的斜纹里，等待懂得倾听岁月的旅人来解读。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？如何抵达这座高原秘城、探访各大塔楼内部、品尝特色美食《山鹑恋》？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/valldemossa-village-monastery-chopin-george-sand" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴尔德马萨</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Valldemossa</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/avila-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿维拉古城墙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ávila Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/royal-monastery-of-santa-maria-de-guadalupe" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    瓜
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">瓜达卢佩圣玛利亚皇家修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Royal Monastery of Santa María de Guadalupe</p>
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
