import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '特拉凯历史溯源｜立陶宛大公国夏日都城的骑士传奇与湖中堡垒的前世今生',
  description: '穿越立陶宛的湖泊与森林，探寻特拉凯海岛城堡的尘封史诗。从大公的夏宫到骑士的堡垒，聆听维陶塔斯大帝的野心与一个古老公国的辉煌记忆。',
}

export default function TrakaiIslandCastleHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '立陶宛', href: '/destinations/europe' },
            { label: '特拉凯', href: '/destinations/europe' },
            { label: '特拉凯海岛城堡', href: '/attractions/trakai-island-castle-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`特拉凯海岛城堡・Trakai Island Castle・立陶宛・特拉凯`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在维尔纽斯郊外星罗棋布的湖泊之间，一座红砖城堡如同从童话中直接驶入现实，静谧地矗立在加尔韦湖的孤岛之上。这里不是游人如织的布拉格或天鹅堡，而是立陶宛灵魂深处的隐秘图腾——<strong>特拉凯</strong>。它曾是强大的立陶宛大公国仅次于维尔纽斯的第二都城，是军事防御的前哨，也是王室休憩的夏宫。其兴衰见证了立陶宛从中世纪强权到与波兰结盟、最终被帝国吞噬的漫长史诗。抛开游玩攻略，走进特拉凯的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`特拉凯海岛城堡`} />
                <InfoRow label="英文名称" value={`Trakai Island Castle`} />
                <InfoRow label="正式名称" value={`Trakai Island Castle`} />
                <InfoRow label="国家" value={`立陶宛`} />
                <InfoRow label="城市" value={`特拉凯`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "特拉凯的起源，深植于立陶宛大公国扩张与防御的宏大叙事中。其名“Trakai”源于立陶宛语“trakas”，意为林间空地或砍伐地，清晰地指出了这片土地最初的地理特征：被森林环绕的湖畔定居点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1321年</strong>，立陶宛大公国历史上最具远见的统治者之一——<strong>格迪米纳斯大公</strong>，在狩猎时发现了这片湖泊纵横的险要之地。出于战略考量，他决定在此建立一座堡垒。最初的城堡并非如今看到的湖心岛堡，而是建于<strong>半岛之上</strong>（即后来的“半岛城堡”遗址）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "格迪米纳斯看中的，是此地密布的湖泊与水道构成的天然屏障。对于一个疆域不断西扩、时常面临条顿骑士团十字军东征威胁的异教强国而言，一个易守难攻的据点至关重要。很快，特拉凯从单纯的军事堡垒，发展为一座功能齐全的城镇。<strong>格迪米纳斯之子科斯图提斯大公</strong>进一步强化了其地位，而孙子<strong>维陶塔斯大帝</strong>则将这里推向了辉煌的顶峰，使之成为大公国实际上的行政与军事中心之一，一座名副其实的“夏日都城”。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "特拉凯的历史印记，与一座城堡的两种形态紧密相连。半岛城堡的实用，与海岛城堡的荣耀，共同谱写了它的命运。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的<strong>半岛城堡</strong>由木石结构建造，是大公家族的主要居所和国库所在地。其坚固的防御体系，在1362年条顿骑士团发动的漫长围城中经历了残酷考验。虽然城堡最终被骑士团使用新型攻城器械攻破并焚毁，但守军的顽强抵抗已成为立陶宛抵抗外侮的精神象征。这次陷落直接催生了更强大、更梦幻的防御构想——在海岛之上重建不可攻克的堡垒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，<strong>14世纪末至15世纪初</strong>，在<strong>维陶塔斯大帝</strong>的主持下，<strong>特拉凯海岛城堡</strong>开始了宏伟的建造。它采用了当时东欧罕见的<strong>哥特式砖石结构</strong>，红色的砖墙在碧水蓝天映衬下格外醒目。城堡并非孤立的塔楼，而是一个功能完备的复合体：高大的主体宫殿供大公居住和处理政务，庭院另一侧的副楼驻扎卫队，一座小礼拜堂满足精神需求，所有建筑由高大的防御城墙连为一体。这座城堡在1410年立陶宛-波兰联军于<strong>格伦瓦尔德战役</strong>中决定性击败条顿骑士团后，其军事压力骤减，逐渐更多发挥夏宫与外交场所的作用。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史的转折来得很快。<strong>17世纪中期</strong>，俄波战争爆发，特拉凯城堡在战火中严重受损，逐渐被废弃，沦为被当地人取用建筑石料的废墟。数百年风雨侵蚀，红砖城堡沦为湖中一道凄美的剪影，直到<strong>20世纪</strong>，立陶宛民族意识苏醒，它才被作为国家复兴的象征，开始了长达数十年的精心重建，并于1962年基本重现了15世纪的荣光。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在特拉凯的历史星空中，<strong>维陶塔斯大帝</strong>是最耀眼的那一颗。他的生平与这座城堡的黄金时代完全重合，其野心、智慧与悲剧，都深深地刻在了这些红砖之上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>维陶塔斯</strong>是立陶宛大公<strong>科斯图提斯</strong>之子，一生充满戏剧性。他早年与堂弟<strong>雅盖沃</strong>（后来的波兰国王瓦迪斯瓦夫二世）争夺立陶宛大公之位，斗争激烈，甚至一度被迫与条顿骑士团结盟。最终，兄弟二人达成和解，雅盖沃成为波兰国王并兼任立陶宛最高君主，而维陶塔斯则作为<strong>立陶宛大公</strong>，拥有极高的实际自治权。正是在他的统治下（1392-1430年），立陶宛的疆域达到了历史极限，东抵斯摩棱斯克，南控黑海北岸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "特拉凯海岛城堡，正是维陶塔斯权力与抱负的实体化身。他投入巨资，将其建设成兼具军事要塞与豪华宫殿功能的行宫。这里不仅是他的夏日居所，更是外交舞台。他曾在此接待神圣罗马帝国的使节，商讨对抗条顿骑士团的大计；也在此管理着这个多民族、多宗教（天主教、东正教、伊斯兰教、犹太教）的庞大公国。城堡的建筑风格融合了西欧哥特式与本地传统，正是其政权开放性与国际视野的体现。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“大公在特拉凯的宫殿里，窗户朝向湖水，他喜欢在那里沉思，眺望他的领土。” —— 中世纪编年史片段" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "维陶塔斯一生最大的野心是加冕为<strong>立陶宛国王</strong>，使立陶宛脱离波兰王国完全独立。1430年，加冕典礼已在准备中，皇冠由神圣罗马皇帝西吉斯蒙德送来。然而，命运开了一个残酷的玩笑。就在加冕前夕，维陶塔斯在特拉凯去世。他的离世，也带走了立陶宛作为独立强大国家的最后机会。此后，立陶宛与波兰的联系日益紧密，最终走向联合。维陶塔斯未竟的王冠之梦，为特拉凯城堡的辉煌蒙上了一层永恒的悲情色彩，也让这座城堡成为立陶宛独立精神的一个古老注脚。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与特拉凯息息相关的，是19世纪的浪漫主义诗人与革命家<strong>特奥多尔·纳布特</strong>。他是立陶宛民族复兴运动的关键人物。当特拉凯城堡还是一片被遗忘的废墟时，纳布特和他的同志们看到了其蕴含的<strong>民族身份象征</strong>的力量。他们常在废墟附近集会，讨论立陶宛的历史与未来，将这座破碎的城堡视为立陶宛国家曾被摧毁但精神不灭的隐喻。他的诗歌和行动，为20世纪特拉凯城堡的重建埋下了思想的种子。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "围绕特拉凯的湖泊与城堡，流传着许多神秘传说，其中最动人的莫过于<strong>湖女的故事</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传在很久以前，特拉凯的湖泊由一位美丽的湖女守护。她拥有预言能力，深受当地渔夫和居民的尊敬。当<strong>格迪米纳斯大公</strong>决定在此建造城堡时，他特意去请教湖女。湖女预言，城堡将辉煌无比，成为强大统治者的居所，但其光辉将如落日般短暂，最终会沉入寂静的湖水与漫长的沉睡之中。然而，她话锋一转，预言道：“当立陶宛之子再次需要勇气与身份时，石头将从水中重生。”这个传说，恰好映照了城堡建造、毁弃与重建的数百年的真实历史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则与城堡的<strong>卡拉伊姆人</strong>社区有关。特拉凯是东欧一个独特的<strong>卡拉伊姆人</strong>聚居地，他们是信仰卡拉伊姆派犹太教（只尊奉《希伯来圣经》而不信《塔木德》）的突厥语民族，据说是在14世纪由<strong>维陶塔斯大帝</strong>从克里米亚地区请来的，作为其可靠的贴身护卫与手艺人。民间传说，维陶塔斯曾做过一个梦，梦见一群骁勇的战士守护着他的宝藏。醒来后，他根据梦中人的面貌特征，派人前往黑海沿岸寻访，最终带来了这些卡拉伊姆人。他们世世代代居住在特拉凯，其独特的木屋、祈祷堂和饮食文化（如著名的“基比奈”馅饼），成为小镇不可或缺的人文风景，也为维陶塔斯为何信任并安置这群“外来者”提供了充满神话色彩的注解。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "老人们常说，在月圆之夜，如果你静静地在加尔韦湖畔聆听，风穿过城堡塔楼的声音，听起来就像湖女在用古老的立陶宛语低吟那段关于兴衰的预言。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客乘船驶向那座完美的湖中城堡时，看到的不仅是15世纪建筑艺术的复原，更是一座<strong>立陶宛民族记忆的容器</strong>。它并非从未被摧毁的幸运儿，而是一个历经辉煌、毁灭，并在现代被民族意识重新唤醒的“重生者”。这种重生，赋予了它超越许多完好古堡的深沉力量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在特拉凯，历史不是教科书上枯燥的年份，而是湖水的倒影、红砖的质感、卡拉伊姆社区飘来的食物香气，以及维陶塔斯未能戴上的那顶虚拟王冠所带来的无尽唏嘘。它提醒我们，东欧的历史远非铁板一块，这里曾有过强大的异教帝国、精妙的宫廷文化、复杂的民族融合与悲壮的抗争史诗。读懂特拉凯，便是读懂了立陶宛这个民族对其黄金时代的不灭追忆，以及在近代夹缝中守护自身独特性的坚韧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "漫步于此，你走过的每一步，都可能与一位中世纪大公或一位19世纪的爱国诗人的足迹重合。这里没有喧嚣的流行文化，只有风、水、石头与故事的低语。它小众，因为它守护的是一段属于波罗的海的、未被大众旅游完全脚本化的深邃过往。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/anyksciai" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尼克什奇艾</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Anykščiai</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/zarasai-lithuania" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    扎
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">扎拉赛</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Zarasai</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/panevezys" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    帕
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">帕内韦日斯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Panevėžys</p>
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
