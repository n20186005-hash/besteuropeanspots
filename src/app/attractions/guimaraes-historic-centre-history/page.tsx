import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '吉马良斯历史溯源｜葡萄牙摇篮之城的前世今生与英雄传奇',
  description: '探寻“葡萄牙摇篮”吉马良斯。从建国传说到中世纪街巷，走进阿方索·恩里克斯的诞生地，解锁阿尔法玛区外的千年民族史诗。',
}

export default function GuimaraesHistoricCentreHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '吉马良斯历史中心', href: '/attractions/guimaraes-historic-centre-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`吉马良斯历史中心・Historic Centre of Guimarães・葡萄牙・吉马良斯`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在葡萄牙，所有故事的起点都指向北方这座被橄榄山环抱的古城。它的别名是 <strong>“摇篮”</strong> —— <strong>“Aqui Nasceu Portugal”</strong>（葡萄牙诞生于此）。这句话镌刻在古城墙的一段残垣上，不是一个比喻，而是一段确凿的、关乎王国血脉起源的坐标。这里没有里斯本的海风与喧嚣，只有鹅卵石街道在寂静中诉说着公元10世纪的修道院钟声、12世纪骑士的盔甲回响，以及一位注定成为开国君主的婴儿的啼哭。抛开游玩攻略，走进吉马良斯的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`吉马良斯历史中心`} />
                <InfoRow label="英文名称" value={`Historic Centre of Guimarães`} />
                <InfoRow label="正式名称" value={`Historic Centre of Guimarães`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`吉马良斯`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "吉马良斯的呼吸，比葡萄牙王国更古老。它的心跳始于公元960年。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那时，伊比利亚半岛北部是基督教王国与南方摩尔人政权之间的漫长边疆，烽火与信仰交织。一位名为 <strong>弗拉姆夫人</strong> 的贵族女性，在名为“Vimaranes”的山丘上，捐建了一座修道院。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座修道院，成为一切的开端。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“Vimaranes”这个名字，据信源于一位早期的日耳曼系领主 <strong>Vímara Peres</strong>，他在9世纪受阿斯图里亚斯国王之命，收复了这片杜罗河以北的土地。地名随着语言流变，逐渐演化成了今天的“Guimarães”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "修道院吸引了定居者，一个社区围绕它生长。为了防御摩尔人的袭扰，一座城堡被建立起来。历史总是充满巧合：这座起初用于防御的城堡，最终没有用于抵御外敌，反而成了向内孕育一个国家的“子宫”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "11世纪中叶，勃艮第的<strong>恩里克伯爵</strong> 受卡斯蒂利亚-莱昂国王之命，管辖这片葡萄牙伯爵领。他将权力中心设在了吉马良斯，并扩建了城堡。他的妻子，<strong>特蕾莎夫人</strong>，则主持修建了另一座关键的圣母教堂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，城市的核心格局就此奠定：山上是军事与权力的堡垒（城堡），山下是精神与民生的中心（修道院与市镇）。而连接它们的蜿蜒坡道，将成为未来数个世纪城市肌理的骨干。吉马良斯，就这样在信仰与剑戟的庇护下，静静等待着一个国家的降临。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "吉马良斯的街道本身就是一部立体史书，几个关键坐标，勾勒出葡萄牙的“零公里”时刻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个印记，是那座<strong>橄榄山城堡</strong>。今天看到的雄浑石墙多是恩里克伯爵时代重建的。但让它不朽的，是1143年发生在这里，更确切地说，是“关于”这里的事件。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我，阿方索，葡萄牙亲王，在吉马良斯我的城池中，向您致意……” —— <strong>阿方索·恩里克斯</strong> 于1143年致教皇英诺森二世的信函开头。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是这位在吉马良斯成长、可能就出生在城堡脚下的王子，在1139年的一场决定性战役后，被军队拥立为葡萄牙国王。尽管王国正式独立需要教皇与邻国的承认，但独立的意志与事实，已在吉马良斯宣告。城堡主塔上飘扬的，不再是一个伯爵领的旗帜，而是一个新生王国的雄心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个深刻印记，藏身于<strong>圣母教堂</strong>。这座由特蕾莎夫人督建的罗马式教堂，其朴素的外表下，隐藏着王国最神圣的<strong>“洗礼池”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说，正是用这个大理石洗礼盆，特蕾莎夫人为她的儿子阿方索·恩里克斯施行了洗礼。这不仅仅是一个宗教仪式，它被后世赋予了神圣的政治隐喻：葡萄牙民族国家在此“受洗”诞生。这个洗礼盆，成为了国家起源的物证，其象征意义远超任何皇冠。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三个印记，则刻在城市的<strong>肌理与精神</strong>之中。1385年，葡萄牙王国在<strong>阿尔茹巴罗塔战役</strong>中击溃卡斯蒂利亚军队，彻底巩固了独立地位。这场胜利的指挥官，<strong>若昂一世</strong>，在吉马良斯拥有深厚根基。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "胜利后，他选择在附近的巴塔利亚修建宏伟的修道院以谢神恩，但吉马良斯作为精神源泉的地位从未动摇。中世纪晚期，城市繁荣，我们今天看到的<strong>历史中心区</strong>那些优美的联排房屋、华丽的铁制阳台、花岗岩门廊和家族纹章，大多成形于15-16世纪。它们不是为旅游而建，而是商人、贵族生活与荣耀的真实沉淀。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "吉马良斯的传奇，与两个名字紧密相连：一位是奠定疆土的武人，另一位则是抚慰心灵的医者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>阿方索·恩里克斯</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他几乎是一个传说中的人物。1111年左右，他出生于吉马良斯——可能是城堡内的宫殿，也可能是山下的宅邸。他的童年与少年时期在这座小城度过，在橄榄山城堡的阴影下学习战争与统治。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于他的崛起，有一个著名的传说：他的母亲<strong>特蕾莎夫人</strong> 在丈夫恩里克伯爵死后，偏爱她的葡萄牙-加利西亚情人，并试图与儿子争夺权力。年轻的阿方索感到被排挤，据说他曾被迫逃离吉马良斯，投靠他在萨莫拉的支持者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最终，矛盾在1128年的<strong>圣马梅德战役</strong>中爆发。这场发生在吉马良斯附近小规模但至关重要的战役，以阿方索战胜他母亲的军队而告终。特蕾莎被流放，阿方索成为唯一的统治者。这座城市见证了他从王子到统治者的蜕变。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此后，他将目光从内部纷争转向南方广袤的摩尔人领土。吉马良斯是他的大本营和精神支柱。尽管在独立后，王国的政治中心逐渐南移至科英布拉和后来的里斯本，但吉马良斯永远是<strong>“摇篮”</strong>。他留给这座城的，不是一个华丽的宫殿（他更热衷于建造防御城堡和修道院），而是一个至高无上的名分和一段充满骑士精神的建国神话。走在吉马良斯的街道上，你仿佛能感受到那个年轻、果决、雄心勃勃的君主的灵魂，依然萦绕在古城墙的每一块石头上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>埃加斯·莫尼斯</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间快进到19世纪末，吉马良斯孕育了另一位世界级的人物，不过他的战场不在沙场，而在人类最复杂的器官——大脑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>埃加斯·莫尼斯</strong>于1874年出生在吉马良斯附近的一个贵族家庭。他在科英布拉大学学习医学，后成为里斯本大学的教授和神经学家。他的名声与一项充满争议的发明紧密相关：<strong>脑前额叶切断术</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "20世纪30年代，为了治疗一些严重的精神疾病（如强迫症、精神分裂症），莫尼斯设计了一种通过破坏前额叶与大脑其他部分联系来“镇定”病人的手术。1935年，他的团队首次实施了这一手术。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“病人的焦虑、躁动和幻觉似乎消失了，变得平静……尽管在个性上有些迟钝。” —— 早期手术报告中的描述。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这项手术在初期被视为突破，莫尼斯因此在1949年荣获<strong>诺贝尔生理学或医学奖</strong>。然而，随着时间推移，其严重的副作用（如情感淡漠、人格改变）和滥用问题逐渐暴露，最终被医学界抛弃。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这是一个复杂的历史人物。他来自吉马良斯这个传统、甚至有些保守的小城，却投身于当时最前沿、最大胆的医学探索。他的故居仍然存在于吉马良斯，提醒人们这座城市不仅是古老战士的故乡，也曾走出一位试图探索心智黑暗边界的科学先锋。他的故事，为吉马良斯深沉的历史底色，增添了一抹现代性的、充满伦理思辨的复杂光芒。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在吉马良斯，坚硬的历史岩石缝隙中，生长着柔韧的传说藤蔓。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最动人的传说与<strong>橄榄山圣母教堂</strong>有关。传说在遥远的时代，一位牧羊女在橄榄山上放羊时，突然看到圣母玛利亚显现。圣母指示她，让当地的居民到山上来。当人们带着怀疑上山时，他们惊奇地发现，那里伫立着一尊圣母像，而周围覆盖着从未见过的、异常茂盛的<strong>野蔷薇</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "人们试图将圣母像抬到山下更宏伟的教堂去供奉，但雕像奇迹般地一次又一次回到山上。最终，人们明白了神意，就在显现之地修建了如今的圣母教堂。这个“圣母不愿移动”的传说，与吉马良斯作为“不可动摇的摇篮”的意象形成了完美的互文。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则更富生活气息，关乎城市的守护与慷慨。相传在中世纪，吉马良斯曾遭遇围困，城内粮草断绝。就在绝望之际，一位虔诚的老妇人将她仅存的一点面粉做成了面包，决定分给饥饿的人们。奇迹发生了，她那一点点面团，竟然源源不断地烤出面包，直到全城人都得到了供养。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个“面包奇迹”的故事代代相传，它解释了吉马良斯人骨子里那种坚韧与共同体精神。即使在最艰难的时刻，分享与信念也能创造奇迹。今天，城市纹章和许多装饰上，你依然能看到<strong>面包的图案</strong>，这不是为了美观，而是对那段神话般共渡时艰记忆的永恒铭记。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "因此，来到吉马良斯，你不是在参观一个“景点”，而是在<strong>叩访一个民族的童年故居</strong>。这里的每一块温润的鹅卵石，都曾被第一代葡萄牙人的脚步磨亮；城堡墙垛的缺口，望出去的是王国最初的疆域视野；小巷深处传来的若有若无的法多歌声，其苍凉的基因或许就孕育于这北方山城的雾气之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它没有后世帝国首都的炫目与混杂，保持着一种起源之地的清晰与纯粹。在这里，历史不是教科书上遥远的章节，而是可以触摸的城墙，可以漫步的街道，可以仰望的塔楼。你站在橄榄山顶，瞬间就理解了“摇篮”的全部含义：它狭小、庇护、略显粗糙，却给予了最初的生命以全部的安全感和走向广阔世界的勇气。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂吉马良斯，你就读懂了葡萄牙为何是葡萄牙——它的坚韧、它的虔诚、它的航海野心背后那份对根源的深深眷恋。这是一趟溯源之旅，一次对“我从何处来”的静默回答。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/castelo-de-vide-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡斯特卢-迪维迪</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Castelo de Vide</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/castelo-mendo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡斯特卢门杜</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Castelo Mendo</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vila-vicosa" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维拉维索萨</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vila Viçosa</p>
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
