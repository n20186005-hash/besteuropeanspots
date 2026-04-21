import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃吉赛姆历史溯源｜阿尔萨斯葡萄酒摇篮的千年轮回与教皇传奇',
  description: '深入法国阿尔萨斯“最美小镇”埃吉赛姆的肌理。探索千年葡萄酒起源、教皇利奥九世的诞生秘辛，以及鹅卵石小巷里被凝固的中世纪时光。',
}

export default function EguisheimAlsaceHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '法国', href: '/destinations/europe' },
            { label: '上莱茵省', href: '/destinations/europe' },
            { label: '埃吉赛姆', href: '/attractions/eguisheim-alsace-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`埃吉赛姆・Eguisheim・法国・上莱茵省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在法国阿尔萨斯一串如宝石般的村镇名录里，<strong>埃吉赛姆</strong>拥有两个无可替代的历史标签：<strong>“教皇诞生地”</strong>与<strong>“阿尔萨斯葡萄酒摇篮”</strong>。它的美，远不止于明信片上的缤纷木筋屋与绕城葡萄园。这座小镇的脉络，深植于公元8世纪的古老修道院，并在一位教皇的荣耀与一连串战火的淬炼中，塑成了今日同心圆式的梦幻格局。抛开游玩攻略，走进埃吉赛姆的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`埃吉赛姆`} />
                <InfoRow label="英文名称" value={`Eguisheim`} />
                <InfoRow label="正式名称" value={`Eguisheim`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`上莱茵省`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃吉赛姆的故事，始于一片被森林与河流滋养的富饶土地。其历史可明确追溯至 <strong>公元8世纪</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，阿尔萨斯地区处于法兰克王国的统治之下，基督教信仰正迅速扎根。埃吉赛姆的起源，与一位名叫<strong>埃伯哈德</strong>的贵族紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他是阿尔萨斯公爵的亲戚，大约在<strong>720年左右</strong>，在此地建立了一座<strong>圣彼得修道院</strong>。这座修道院并非孤立存在，它很快发展成了一个核心，吸引农民、工匠在其庇护下聚居，形成了村庄的雏形。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇的名字 <strong>“Eguisheim”</strong> 便源于此。它由日耳曼人名 <strong>“Egino”</strong> 与居所后缀 <strong>“-heim”</strong> 组合而成，意为“埃吉诺的家园”。这个“埃吉诺”，很可能就是埃伯哈德公爵的某位祖先。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "古老的文献碎片记载：“在埃吉诺的领地上，我们为圣彼得建立了一座修道院。” 这简短的一句，成为了小镇诞生的第一声啼哭。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "到了<strong>1000年左右</strong>，埃伯哈德的后裔，<strong>“虔诚者”休</strong>，在村庄的中心，围绕最初的城堡塔楼，修建了第一道防御城墙。这道墙，划定了中世纪埃吉赛姆的核心范围。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更为重要的是，休伯爵在此奠基了一个注定影响欧洲历史的家族——<strong>埃吉赛姆家族</strong>。这个家族不仅统治本地，更将血脉与影响力延伸至神圣罗马帝国的权力中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇的同心圆布局，正源于此时期：城堡居于圆心，民居如涟漪般层层环绕。这不是后世规划的美学产物，而是中世纪封建领地围绕领主堡垒自然生长的鲜活化石。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃吉赛姆的历史并非一直平静如葡萄园的四季。几道深刻的印记，凿刻出它今日的轮廓与气质。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道印记，无疑是<strong>1049年</strong>。这一年，埃吉赛姆家族的骄傲，时任图尔主教的<strong>布鲁诺</strong>，被推选为教皇，即<strong>利奥九世</strong>。一位教皇诞生于阿尔萨斯乡间小镇，这在当时是震动欧洲的大事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "利奥九世是杰出的教会改革家，他积极推动“克吕尼改革”，反对圣职买卖与神职人员结婚。他的当选，将埃吉赛姆这个家族领地的名字，带入了罗马与整个基督教世界的视野。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "家族的荣耀达到顶峰，也意味着小镇建设进入黄金期。城堡与防御工事得到加强，其影响力辐射四方。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，第二道印记是灼热的伤痛。<strong>十七世纪</strong>，席卷欧洲的<strong>三十年战争</strong>与<strong>路易十四的征服战争</strong>先后蹂躏了阿尔萨斯。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃吉赛姆未能幸免。坚固的城墙在炮火前显得脆弱，小镇多次被攻占、劫掠。<strong>1634年</strong>与<strong>1675年</strong>的两次大规模破坏尤为致命。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一份幸存的市政档案哀叹：“瑞典军队过后，只剩废墟与灰烬。葡萄藤被战马啃食，地窖空空如也。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战火不仅摧毁建筑，更重创了经济命脉——葡萄种植业。人口锐减，繁荣一度中断。我们今天看到的绝大多数色彩斑斓的木筋屋，其实大多是<strong>17世纪末至18世纪</strong>重建的。它们美丽的外表下，铭刻着一段重生与坚韧的历史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三道印记，则关乎它的“封存”。进入19世纪，法国工业化与铁路建设浪潮中，主要交通干线绕开了埃吉赛姆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这无意中成了一种幸运的“遗忘”。小镇的发展近乎停滞，没有大规模拆除改建，中世纪的城市肌理与大量古老建筑得以完整保存。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是这种“停滞”，让它成为了后来人们眼中“未被现代性触碰的梦幻之地”。历史的伤痕与荣耀，都被原汁原味地封存在了那三道同心圆的鹅卵石小巷里。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在埃吉赛姆的历史星空中，<strong>教皇利奥九世</strong>无疑是最耀眼的一颗恒星。他的人生，是小镇命运的交响曲中，最辉煌的乐章。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>布鲁诺·冯·埃吉赛姆</strong>于<strong>1002年</strong>出生在家族的城堡中。他出身高贵，自幼被送往教会学习，展现出了过人的虔诚与才智。青年时，他成为皇帝<strong>康拉德二世</strong>的堂兄弟和亲密顾问，本可在世俗权力中平步青云。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，他志不在此。<strong>1026年</strong>，他毅然选择进入教会，并很快晋升为图尔主教。在任期间，他以清廉、博学和改革热情闻名。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转折点发生在<strong>1048年</strong>。教皇达马苏斯二世突然去世，神圣罗马帝国皇帝<strong>亨利三世</strong>急需一位德高望重、且支持帝国改革意志的新教皇。他的目光落在了远在阿尔萨斯的布鲁诺身上。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "编年史家记载了皇帝的使者前往图尔的情景：“他们恳求他，为了上帝的教会和基督世界的和平，接受这份重担。”布鲁诺最初拒绝，最终以“必须由罗马神职人员和人民自由选举”为条件，才勉强同意。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1049年2月</strong>，布鲁诺抵达罗马，在圣彼得大教堂被正式选举为教皇，取名<strong>利奥九世</strong>。他是最后一位非意大利人出身、直至20世纪才被打破的纪录保持者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "成为教皇后，利奥九世与埃吉赛姆的羁绊并未切断。他心系故乡，其家族继续在当地行使统治权。更重要的是，他的声望成为了小镇无形的庇护伞和精神图腾。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇中心的<strong>圣莱奥哈德教堂</strong>，虽以另一位圣徒命名，但其内保存的<strong>12世纪罗马式地下室</strong>，传说最初可能与纪念利奥九世的家族礼拜堂有关。每年小镇的节庆，他的故事总被传颂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "利奥九世于<strong>1054年</strong>去世，他执政的五年虽短，却影响深远。他厉行改革，强化教皇权威，甚至因与君士坦丁堡牧首的激烈冲突，间接导致了<strong>东西方教会的大分裂</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在埃吉赛姆，他的遗产是双重的：一是无上的荣耀，让小镇之名永载史册；二是一种深植于地方的虔诚与骄傲。走在镇上，你会感到，这位千年前的教皇，依然是这里最受尊崇的“儿子”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了利奥九世，另一位与埃吉赛姆息息相关的，是<strong>葡萄酒</strong>本身。虽非具体名人，但当地一代代无名的葡萄种植者与修士，才是小镇真正的建造者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早在罗马时代，阿尔萨斯就有葡萄种植。而埃吉赛姆的葡萄酒名声鹊起，正是在中世纪，与修道院和贵族领主的推动密不可分。埃吉赛姆家族很可能引进了更先进的葡萄栽培技术。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "可以说，是教皇的荣耀为小镇加冕，而葡萄的藤蔓则为它提供了延续千年的血液与生计。名人与风土，共同谱写了这首传奇。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "环绕埃吉赛姆的，不仅是城墙与葡萄园，还有如薄雾般萦绕的传说。它们为坚硬的石头与古老的藤蔓，注入了灵动的生命力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的传说关乎<strong>三座城堡</strong>。在埃吉赛姆背后的森林山丘上，矗立着<strong>埃吉赛姆三塔</strong>的遗址。它们被称为“<strong>三城堡</strong>”，分别名为<strong>瓦伦堡、达格斯堡和韦克堡</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "民间相传，这三座城堡并非同时建造，也并非一直和睦。其中流传着一个关于嫉妒与惩罚的故事：一位住在最豪华城堡里的领主，因嫉妒兄弟的城堡更美，设计陷害。最终，正义得到伸张，害人者的城堡被雷霆劈中，只剩残垣。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "老人们会在冬夜的火炉边讲述：“看那最高的废墟，那是傲慢者的下场。而另外两座，至今仍在月光下守护着山谷里的葡萄园。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当然，历史学家会告诉你，这三座城堡是埃吉赛姆伯爵家族在不同时期修建的防御工事群，用于控制山谷要道。但传说赋予了它们人格与道德寓意，让远眺的风景有了叙事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则更贴近土地的呼吸，与<strong>圣莱奥哈德</strong>有关。这位6世纪的圣徒是囚犯与农民的主保圣人。传说他曾在埃吉赛姆附近隐居修行。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地故事说，圣莱奥哈德以无比的虔诚感动了上帝，他所到之处，贫瘠的土地变得肥沃。他亲手种下了第一株葡萄藤，并为其祝福，从此埃吉赛姆的葡萄才变得如此甘美，酿出的酒能慰藉人心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "因此，小镇的主教堂以他命名，并非偶然。在教堂的彩窗与雕塑上，你能找到他的形象——手持锁链（象征解救囚犯）和一串葡萄。这个传说，将信仰、土地与生计美妙地编织在一起。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，或许没有史书确证，但它们构成了埃吉赛姆人文肌理中柔软而不可或缺的一部分。它们解释着风景的由来，定义着人与土地的关系，让历史不仅仅是年代与事件，更是有温度的口耳相传。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当我们漫步在埃吉赛姆如蜗壳般盘旋的迷人小巷，指尖划过色彩斑驳的木筋墙，我们触摸的，是一部立体的、活着的编年史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每一道房梁的曲线，都藏着中世纪工匠的手温；每一块城墙的基石，都可能目睹过教皇少年时的身影；每一缕从附近葡萄园飘来的微风，都携带着千年栽培史的芬芳。这里的历史没有沉睡在博物馆的玻璃柜后，它就活在街角喷泉的潺潺水声里，活在酒窖门洞里飘出的酒香中，活在居民每日经过圣莱奥哈德教堂门口时那下意识的颔首里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂埃吉赛姆，便是读懂一个欧洲小镇如何从一座修道院的微光中诞生，如何在家族的权柄与信仰的荣耀中崛起，又如何在天灾人祸的淬炼中依靠最根本的土地智慧幸存并“封存”自己。它不仅是“法国最美小镇”的视觉盛宴，更是理解阿尔萨斯乃至西欧中世纪社会变迁的一个微观宇宙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的宁静与完美，并非天生的桃源，而是历经轮回后沉淀下的从容。下次当你举起一杯埃吉赛姆的雷司令或琼瑶浆，那金黄的酒液中荡漾的，是罗马的余晖、教皇的祝福、战火的记忆，以及无数个阳光灿烂的秋天。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/uzes-duchy-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    于
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">于泽斯公国古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Uzès</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-la-rochefoucauld" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    罗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">罗什富科城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de La Rochefoucauld</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/mirepoix-medieval-bastide" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    米
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">米尔普瓦</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mirepoix</p>
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
