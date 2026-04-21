import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '厄斯历史溯源｜法国日照之城的阶梯往事、隐士艺术与加泰罗尼亚传奇',
  description: '深入法国“第一日照小镇”厄斯，探寻其千年阶梯上的防御密码、桑切斯修士的虔诚与隐士艺术家普约尔的现代回响。一段被阳光封印的加泰罗尼亚边境史。',
}

export default function EusPyreneesHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '法国', href: '/destinations/europe' },
            { label: '东比利牛斯省', href: '/destinations/europe' },
            { label: '厄斯', href: '/attractions/eus-pyrenees-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`厄斯・Eus・法国・东比利牛斯省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在法国南部的比利牛斯山麓，有一座被官方认证为“法国日照最充足”的村庄。然而，<strong>厄斯</strong> 吸引世人的，远非仅仅是阳光。它的每一级陡峭石阶，都曾是抵御入侵的防线；每一栋蜜色石屋，都封存着加泰罗尼亚的古老灵魂。这里是一座垂直的、活着的堡垒，历史像藤蔓一样攀附在狭窄的巷道上。抛开游玩攻略，走进厄斯的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`厄斯`} />
                <InfoRow label="英文名称" value={`Eus`} />
                <InfoRow label="正式名称" value={`Eus`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`东比利牛斯省`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "厄斯的名字，本身就携带着古老的谜题。“Eus”这个简短有力的发音，其词源已湮没在时间的流沙中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "学者们普遍认为，它极可能源于前罗马时期，属于巴斯克语或古伊比利亚语系的一个词汇，意为“高地”或“水源之地”。这精准地描绘了它的地理本质：一座盘踞在陡峭山丘之巅、俯瞰泰特河谷的天然据点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "村庄的实体雏形，大约在 <strong>11世纪</strong> 开始凝聚。那是一个动荡的年代，摩尔人的势力虽已从法国南部退潮，但边境劫掠与领主纷争仍如影随形。<strong>厄斯的诞生，首先是为了生存与防御</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早期的定居者看中了这座近乎垂直的山脊。在这里建造房屋，等同于为自己构筑城墙。狭窄、盘旋、仅容一人通过的阶梯巷道，是精心设计的迷宫，足以让任何来袭者晕头转向。房屋彼此支撑，共用墙壁，形成了一个致密、内向的有机整体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "因此，厄斯从不是一座为了舒适与便利而建的村庄。它是一座为了持久存在而生的<strong>立体堡垒</strong>。它的“阶梯”形态，是其最原始、最深刻的基因密码，记录着法兰西与西班牙边境线上，那段充满张力的草创岁月。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "厄斯的历史，是一部写在石头上的边境编年史，两个核心印记定义了它的命运。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记一：永不陷落的空中堡垒</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在中世纪，厄斯的军事价值达到顶峰。山顶的城堡（如今仅存废墟）是权力的终极象征。它不属于某位声名显赫的大领主，而是服务于更实际的地方防御网络。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“通往村庄的路如同羊肠，两侧是令人眩晕的悬崖。任何军队在此都将失去阵型，成为山顶守卫者的活靶子。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "—— 摘自16世纪一份地方军事评估报告" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "凭借其令人绝望的地形，厄斯在历史上从未被武力直接攻陷。它像一颗牢牢楔入山体的钉子，见证了阿尔比十字军东征的余波，也经历了 <strong>17世纪</strong> 法国与西班牙之间频繁的领土摩擦（《比利牛斯条约》签订前）。村庄的布局本身就是一部军事教科书，每一处转角都可能曾设有暗门或射击孔。这种深植于基因的防御性，塑造了厄斯人独立、坚韧的社群性格。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记二：圣文森教堂的重生与信仰锚点</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "村庄顶端的 <strong>圣文森教堂</strong>，是厄斯精神世界的基石。但我们现在看到的巴洛克风格立面，掩盖了一段重建史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的罗马式教堂在 <strong>17世纪</strong> 的一场大火（或毁于宗教冲突）中严重受损。其重建时期，正值法国强力推行天主教正统，镇压胡格诺新教的年代。在紧邻西班牙的边境地区，重建一座宏伟的天主教堂，具有强烈的政治与信仰宣示意义。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "新教堂采用了当时流行的加泰罗尼亚巴洛克风格，华丽而充满动感。它不仅是信仰的场所，更是一个社区在创伤后凝聚与复兴的象征。教堂的钟声每日回荡在泰特河谷，宣告着这个山巅社群的存续与尊严。石头堡垒保护了他们的身体，而这座教堂，则守护了他们的灵魂。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "厄斯的历史并非由王侯将相书写，而是由两类“隐士”般的人物深深烙印：一位是本土的苦修修士，另一位则是被此地灵魂吸引的现代艺术家。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>传奇一：桑切斯修士与悬崖礼拜堂</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>若姆·桑切斯</strong>，一位出生于厄斯的 <strong>17世纪</strong> 嘉布遣会修士，是本地最受尊崇的宗教人物。他的一生与一起悲惨的家庭事件紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说，他的母亲因被诬告使用巫术而面临极刑。悲愤无助的桑切斯向圣母玛利亚发誓：若母亲得以清白，他将在最险峻之地为圣母修建一座礼拜堂。最终，母亲获释。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "桑切斯修士信守誓言。他选择了厄斯附近一处近乎垂直的悬崖壁——<strong>“地狱之眼”</strong> 上方，开凿并修建了 <strong>“圣母庇护”礼拜堂</strong>。这项工程在当时看来近乎疯狂，是纯粹信仰与意志力的产物。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我每一锤都敲打在岩石上，也敲打在我的信念之上。此地虽险，却最接近天堂，足以彰显圣母之荣光。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "—— 后世传颂的桑切斯修士语录" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座镶嵌在绝壁上的小小圣所，至今仍需攀爬一段陡峭小径才能抵达。它超越了宗教本身，成为厄斯人眼中关于“承诺”、“牺牲”与“奇迹”的永恒地标。桑切斯修士没有留下肖像，但他的故事与那座悬空的礼拜堂，一同融入了本地的精神山脉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>传奇二：隐士艺术家约瑟夫·普约尔</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光跳转到 <strong>20世纪中后期</strong>，厄斯迎来另一位特殊的居民——<strong>约瑟夫·普约尔</strong>。他并非本地人，而是一位来自巴塞罗那的画家、雕塑家。因对佛朗哥政权不满，他选择自我放逐，最终在 <strong>1960年代</strong> 发现了厄斯。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里与世隔绝的氛围、强烈的光影对比、古朴的石头肌理，瞬间击中了他。普约尔几乎以“隐士”的方式在此居住和创作了数十年。他不仅画画，更是一位“大地艺术家”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他利用当地的废弃材料——生锈的铁器、古老的木头、河边的石头——进行组装和创作。他的作品散落在村庄的角落：一扇由废旧工具构成的铁艺窗，一面镶嵌着陶瓷碎片的墙壁装饰。这些作品不张扬，却巧妙地将现代艺术的灵魂注入了古老石村的肌体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "普约尔代表了厄斯另一种吸引力：它能吸引那些寻求终极宁静、渴望与原始自然和古朴人文进行深层对话的灵魂。他不是一个过客，而是以创作参与了村庄生命的延续，成为连接厄斯传统与现代的一位无声的诗人。他的故居工作室，至今仍是艺术爱好者寻访的隐秘圣地。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在厄斯，最动人的传说与 <strong>1660年</strong> 那场席卷欧洲的恐怖黑死病有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当瘟疫的阴影沿着河谷蔓延，逼近这座山巅小镇时，村民们陷入了绝望。他们向上帝和所有圣徒祈祷。据古老的口述历史记载，在一个夜晚，村子的<strong>守护天使</strong>显灵了。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "天使并未用武力驱赶病魔，而是采取了更符合厄斯地理特征的方式：它用自己巨大的、散发着圣光的翅膀，将整个村庄如同摇篮般<strong>包裹覆盖</strong>起来。这光之屏障如此致密，以至于连最微小的瘟疫“瘴气”都无法渗透。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，奇迹发生了。山下的城镇哀鸿遍野，而厄斯却安然无恙，未出现一例瘟疫患者。劫后余生的村民坚信，是他们的虔诚与村庄独特的地势（仿佛更接近天堂），引来了守护者的干预。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说代代相传，强化了厄斯作为“受庇护之地”、“幸免于难之所”的集体身份认同。它不仅仅是一个故事，更解释了为何这个社群能在如此险峻之地顽强繁衍至今——他们相信自己被某种超越性的力量所眷顾。直到今天，一些老人在提及此事时，仍会指向村庄上方的天空，仿佛那对光之羽翼，依然在某个维度悄然张开。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客气喘吁吁地攀爬厄斯的“主要街道”——那些无穷无尽的石阶时，他们攀登的不仅仅是一条路，更是一段垂直的时间轴。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "脚下磨损的石板，可能踩过中世纪戍边士兵沉重的步伐；身旁石墙的缝隙，或许曾聆听过桑切斯修士去修建礼拜堂前的祈祷；拐角处一扇普约尔风格的铁艺窗，则定格了20世纪一位隐士艺术家的凝视。阳光如此慷慨地倾泻在这里，仿佛是为了更清晰地照亮每一道历史的刻痕。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "厄斯的价值，在于它提供了一种<strong>完整的历史沉浸感</strong>。这里没有后来添加的仿古街市，没有为了旅游而表演的民俗。它的防御性布局、它的宗教建筑、它的民居形态，甚至它应对日照与山风的建筑智慧，都是原生且有机的。它是一座活生生的、关于<strong>加泰罗尼亚边境山民生活</strong>的露天博物馆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂厄斯，便是读懂一种在边缘之地，凭借坚韧、信仰与共同体精神，将生存化为艺术的历史。它提醒我们，有些地方的存在本身，就是最动人的史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/entrevaux-fortified-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    昂
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">昂特勒沃</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Entrevaux</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/domme-overlooking-dordogne-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    多
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">多姆（俯瞰多尔多涅河谷的防御巴斯蒂德）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Domme</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rochefort-arsenal-hermione" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    罗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">罗什福尔兵工厂与赫敏号</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Arsenal de Rochefort (L'Hermione)</p>
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
