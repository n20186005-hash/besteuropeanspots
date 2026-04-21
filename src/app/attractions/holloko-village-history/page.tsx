import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '霍尔罗克历史溯源｜世界文化遗产的村落传奇，从鞑靼人囚禁的美女到活态遗产的前世今生',
  description: '探秘匈牙利活化石村落霍尔罗克。深入鞑靼人传说、中世纪石头城堡废墟与百年木屋民居，读懂一个被世界遗产名录珍藏的“活着”的传奇故事。',
}

export default function HollokoVillageHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '匈牙利', href: '/destinations/europe' },
            { label: '诺格拉德州', href: '/destinations/europe' },
            { label: '霍尔罗克传统村落', href: '/attractions/holloko-village-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`霍尔罗克传统村落・Hollókő・匈牙利・诺格拉德州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在匈牙利北部的丘陵深处，时间仿佛被施了魔法，凝固在一座名为“乌鸦石”的村落里。这里不是博物馆，而是一个仍在呼吸的活态社区，每一栋白色的木屋、每一块鹅卵石铺就的小路，都浸透着帕罗茨人百年不变的生活韵律。<strong>1987年</strong>，它成为匈牙利首个被列入联合国教科文组织世界遗产的村落，理由并非宏伟，而是因为它“传统生活方式得以保存的杰出范例”。抛开游玩攻略，走进霍尔罗克的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`霍尔罗克传统村落`} />
                <InfoRow label="英文名称" value={`Hollókő`} />
                <InfoRow label="正式名称" value={`Hollókő`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`诺格拉德州`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "霍尔罗克的故事，始于一个充满暴烈与哀愁的传说，并深深烙印在它的名字里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>Hollókő</strong> 在匈牙利语中意为“<strong>乌鸦石</strong>”。根据最广为流传的说法，这源于 <strong>13世纪</strong> 中叶那场席卷东欧的<strong>鞑靼（蒙古）入侵</strong>。当时，本地领主的美丽妻子被鞑靼人掳走，囚禁于村后山丘的城堡中。领主的一位忠仆，为了救出女主人，与魔鬼达成交易。魔鬼派出一群乌鸦，每天夜间啄走城堡的石块，运到现在的村落所在地，用这些石头为她重建一座新居。乌鸦的喙与爪（<em>holló</em>）搬运石头（<em>kő</em>），这便是“乌鸦石”之名的凄美由来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "抛开传说，历史记录显示，村落的雏形大约在鞑靼人撤离后的 <strong>13世纪末14世纪初</strong> 形成。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的定居者是<strong>帕罗茨人</strong>，一个说匈牙利语、有着独特服饰与文化传统的族群。他们在此建造了最初的木结构房屋，形成了村落的核心。山丘顶上的<strong>石头城堡</strong>则始建于 <strong>13世纪</strong>，最初为木质结构，在 <strong>14世纪</strong> 改建为石堡，用于监视山谷和保护村民，与山下的定居点构成了典型的“城堡-村庄”共生体系。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个名字，因此不仅是一个地理标识，更是一个融合了创伤记忆、生存智慧与神话想象的文化符号。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "霍尔罗克的历史，是一部在反复毁灭与坚韧重生中写就的史诗。其肌理上镌刻着两大深刻印记：<strong>火</strong>与<strong>保护</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个核心印记，是 <strong>1711年</strong> 那场决定性的<strong>大火</strong>。在奥斯曼帝国势力退却、匈牙利光复的时期，霍尔罗克却未能幸免于另一场灾难。这场大火几乎将整个木结构村庄夷为平地。然而，正是这场彻底的毁灭，塑造了今天我们看到的霍尔罗克。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "村民们没有放弃，他们依照记忆中的布局和传统的帕罗茨建筑技艺，在废墟上原址重建。我们今天看到的 <strong>67栋受保护的传统民居</strong>，其主体结构大多源于这次重建后的 <strong>18世纪</strong>。这些房屋有着统一的风格：石砌地基，白色灰泥墙面，陡峭的茅草或木瓦屋顶，以及装饰着精美木雕的开放式廊台。这场大火，无意中让一个“标准化”的、纯粹的帕罗茨村落得以诞生。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“火焰吞噬了我们的过去，但灰烬中，祖先的蓝图变得更加清晰。我们不是建造新家，只是让旧的灵魂穿上新的衣裳。” —— 当地古老歌谣的意译" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个印记，是它在现代化浪潮中奇迹般的<strong>存续</strong>。<strong>19世纪末至20世纪初</strong>，当匈牙利大部分乡村开始拥抱砖石结构和现代生活时，偏远的霍尔罗克因经济滞后，其传统建筑风貌意外地保存下来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的转折点在 <strong>20世纪下半叶</strong>。<strong>1950年代</strong>，匈牙利政府开始有意识地将霍尔罗克认定为露天博物馆和文化遗产。<strong>1970年代</strong>起，一项系统的“活态保护”工程启动。这不是将村民迁走做成空壳博物馆，而是<strong>资助他们在不破坏外观和结构的前提下，内部进行现代化改造</strong>（如安装水电、卫生设施）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是这种尊重社区延续性的理念，打动了联合国教科文组织。<strong>1987年</strong>的入选评语强调，它“生动展示了20世纪之前乡村生活的生动图景”，并且“社区生活仍在继续”。这使霍尔罗克区别于许多 frozen in time（冻结在时光里）的遗址，它的历史印记是<strong>活着的、呼吸着的</strong>。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "霍尔罗克的名人故事，不属于叱咤风云的帝王将相，而属于两位与这片土地血脉相连的“守护者”：一位是传说中的领主，另一位是记录它灵魂的诗人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>伊斯特万·洛松奇：传说中痴情的城堡领主</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管史料记载有限，但<strong>伊斯特万·洛松奇</strong>这个名字，通过传说与村后城堡的废墟紧紧绑在一起。他被认为是 <strong>13世纪</strong> 中叶此地的领主，霍尔罗克城堡的早期拥有者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的传奇完全由那段“乌鸦石”的传说塑造。在这个故事里，他不是一个战场英雄或政治家，而是一个不惜一切代价、甚至隐含地与黑暗力量交易的丈夫。传说中，他的妻子被鞑靼人掳走囚禁，而他为了营救，默许或求助了魔鬼的力量。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“领主日夜望着山上的囚塔，他的金子买不回自由，他的军队攻不破高墙。最终，他望向的不是天堂，而是地狱的深渊， whispered a pact with the shadows.” —— 当地故事讲述者的常用开场白" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个形象极具复杂性。他展现了中世纪贵族对家族与荣誉的执着，但其手段又游走在基督教道德的边缘。最终，乌鸦运石建成新居，妻子获救，传说的结局是团圆的。但领主为此付出了何种代价？传说没有细说，只留下无尽的想象空间。如今，城堡废墟成为这个传奇的实体注解，每一个访客登临，仿佛都能感受到那份混合着绝望、希望与超自然力量的古老执念。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>米克洛什·巴拉蒂：为帕罗茨灵魂吟唱的诗人</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说洛松奇领主代表了村落的传说起源，那么<strong>米克洛什·巴拉蒂</strong>则是为它真实的、泥土般的生活谱写赞歌的人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "巴拉蒂（原名米克洛什·巴罗格）是 <strong>20世纪</strong> 重要的匈牙利乡土诗人与收藏家。他并非一直居住在霍尔罗克，但他的一生与<strong>帕罗茨地区</strong>的文化息息相关。他深深迷恋帕罗茨人的民歌、民俗、服饰和生活方式，花费毕生精力收集、整理并再创作。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "霍尔罗克，作为帕罗茨文化的核心活态样本，自然成为他灵感的源泉和精神的故乡。他的诗歌里，充满了对帕罗茨妇女五彩刺绣长裙的描绘，对古老民俗节庆的追忆，对乡村生活细致入微的观察。他用文学的力量，将一种可能被现代化湮没的地方性文化，提升到了民族文化遗产的高度。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1966年</strong>，巴拉蒂去世，根据他的遗愿，被安葬在霍尔罗克村旁的墓园里。他的墓碑朴素，与普通村民比邻而眠。这或许是他最好的归宿——永远守护着他所挚爱的这片土地和它的文化脉搏。今天，在霍尔罗克的民俗活动中，人们仍会吟唱由他收集改编的民歌。他不再是村庄的访客或观察者，而是其文化记忆不可分割的一部分。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在霍尔罗克，历史与传说如藤蔓般交织，最核心的莫过于“乌鸦石”故事的不同变体。除了领主救妻的主流版本，还有一个更阴暗、更具道德训诫色彩的民间说法。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个版本里，城堡的主人并非受害者，而是施害者。他是一位<strong>邪恶而富有的贵族女领主</strong>，生活奢靡，对仆人和农民残酷无情。她的恶行最终触怒了上天或自然之灵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "作为惩罚，一群乌鸦被派遣而来。它们不仅夜间出动，甚至在光天化日之下，疯狂地啄食城堡的石头，将它们一块块衔走。无论女领主如何加固、防御，都无法阻止乌鸦的“盗窃”。最终，宏伟的城堡被啄食殆尽，化为废墟，而山脚下则“生长”出了一个新的、朴素的村庄。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“老奶奶们会说：‘看那山上的废墟，那是贪婪的石冢。看这山下的白屋，那是乌鸦衔来的公正。’乌鸦不是魔鬼的仆从，它们是上帝的清洁工。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说反映了底层民众的价值观：对为富不仁者的诅咒，以及对“恶有恶报”朴素正义的信念。乌鸦从传说中的“契约工具”，变成了“天罚的执行者”。而山下村落的诞生，不再是浪漫拯救的结果，而是<strong>从罪恶废墟中诞生的纯洁与希望</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "因此，在霍尔罗克，乌鸦并非不祥之鸟，反而是村庄的“创始者”和道德秩序的维护者。这种独特的传说生态，让这里的每一阵风穿过城堡残垣的呼啸，都仿佛夹杂着乌鸦的啼叫与历史的回响。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在霍尔罗克，你踏过的不是景区步道，而是一部仍在书写的<strong>活态编年史</strong>。它的价值远超建筑之美，在于一种完整生活方式的珍贵留存。在这里，历史不是玻璃后的展品，而是清晨从木屋烟囱飘出的炊烟，是穿着传统帕罗茨绣裙的老妇人蹒跚而过，是复活节时男子向女子泼洒香水的古老习俗的生动再现。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座村落教会我们，文化遗产保护的最高境界，或许不是完美的封存，而是有尊严的延续。它让我们看到，在全球化与同质化的浪潮中，一个社区如何坚守身份认同，将过去的故事化为今日生活的养分。霍尔罗克的回响，是木门开合的吱呀声，是民歌的悠扬调子，是提醒着我们：有些时光，从未真正远去。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/s-rospatak-renaissance-castle-and-college" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沙罗什保陶克</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sárospatak</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/visegrad-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维谢格拉德（多瑙河湾的云端皇宫遗址）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Visegrád</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/eger-castle-bulls-blood-wine-region" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃格尔城堡与公牛血产区</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Eger Castle and Bull's Blood Region</p>
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
