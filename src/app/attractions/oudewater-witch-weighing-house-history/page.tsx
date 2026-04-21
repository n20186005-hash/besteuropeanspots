import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奥德瓦特历史溯源 | 荷兰“清白小镇”的前世今生与女巫称重房的传奇救赎',
  description: '走进荷兰奥德瓦特，探秘欧洲唯一的女巫称重房。这里曾颁发“清白证书”，拯救无数无辜生命。一段从恐惧到理性的尘封往事，等你聆听。',
}

export default function OudewaterWitchWeighingHouseHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '奥德瓦特（女巫称重房）', href: '/attractions/oudewater-witch-weighing-house-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`奥德瓦特（女巫称重房）・Oudewater (Heksenwaag)・荷兰・乌得勒支省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在荷兰纵横的水道间，藏着一个被时间温柔以待的小镇：奥德瓦特。它的历史标签，并非恢弘的战役或皇家的恩典，而是一张薄薄的纸——一张由<strong>公平</strong>与<strong>理性</strong>签署的“清白证书”。当整个欧洲都笼罩在猎巫的狂热与恐惧中时，这座小镇的秤杆，却为无数被指控为女巫的普通人，称出了一条生路。抛开游玩攻略，走进奥德瓦特的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`奥德瓦特（女巫称重房）`} />
                <InfoRow label="英文名称" value={`Oudewater (Heksenwaag)`} />
                <InfoRow label="正式名称" value={`Oudewater (Heksenwaag)`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`乌得勒支省`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥德瓦特的起源，深植于荷兰低地的水文脉络之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字 <strong>“Oudewater”</strong> 直译为“旧水”，清晰地指向了它的诞生地：位于<strong>老艾塞尔河</strong>与<strong>新艾塞尔河</strong>交汇处的一片略高的沙洲。史料最早明确提及这座小镇是在<strong>1265年</strong>，但它的形成显然更早。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里最初是河流贸易线上的一个天然港口和货物集散地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "得益于水运便利，它迅速发展为重要的亚麻与绳索制造中心。小镇出产的优质麻绳，甚至远销至荷兰东印度公司的船队。<strong>1280年</strong>，它从荷兰伯爵<strong>弗洛里斯五世</strong>手中获得了城市特许状，正式拥有了筑墙、设立市场和行使司法权的自治地位。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座小镇的布局，至今仍保留着中世纪水城的典型风貌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "运河环绕，古老的房屋倒映在水中，仿佛时光在此沉淀。它的兴起，无关王侯将相，而是平民百姓依托地理与勤劳，在水的恩赐下建立起的家园。这份务实与坚韧，或许早已为后来那场关乎生死的“公平称重”，埋下了伏笔。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥德瓦特的历史肌理上，最深刻的一道印记，无疑与<strong>16-17世纪</strong>席卷欧洲的<strong>猎巫狂潮</strong>有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在那个科学与迷信界限模糊的年代，被指控为“女巫”是致命的。一种荒唐却广为流传的“理论”认为，女巫体重很轻，因为她们能与魔鬼共舞，甚至骑着扫帚飞行。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，称体重成了流行的“审判”手段之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，在大多数地方，这只是一场注定有罪的形式。秤被动过手脚，或者审判官一句“魔鬼给了她压舱石”的断语，就能轻易将人送上火刑柱。但在奥德瓦特，事情发生了根本性的转折。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们，奥德瓦特的市长与市政委员，在此郑重证明，经本市公共秤具公正称量，[姓名] 体重与其身形骨架相符，绝非巫术所致之轻灵。特此授予本证书，以证其清白。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "—— 奥德瓦特“清白证书”模板文字" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1545年</strong>，神圣罗马帝国皇帝<strong>查理五世</strong>授予了奥德瓦特一项独一无二的特权：<strong>其称重房的称量结果，在全帝国境内具有法律效力</strong>。传说，皇帝本人曾微服到访，亲自测试了秤的公正性，并对此深感满意。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "自此，奥德瓦特的称重房，成了绝望中的一座灯塔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个关键历史印记是<strong>荷兰起义</strong>（八十年战争）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1575年</strong>，西班牙军队在围攻莱顿失败后，迁怒于奥德瓦特，几乎将这座繁荣的小镇夷为平地。大火吞噬了大部分木结构建筑，称重房也未能幸免。这场劫难是小镇的至暗时刻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但坚韧的市民在废墟上重建了家园。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如今我们看到的<strong>女巫称重房</strong>（Heksenwaag），那栋迷人的文艺复兴风格建筑，正是在劫后重建于<strong>1595年</strong>。它不仅是 tourist attraction，更是一座纪念理性战胜愚昧的丰碑。小镇在浩劫与猎巫风暴的双重夹击中，顽强地守护了“公正”的火种。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥德瓦特与两位荷兰历史上的重要人物，有着深刻的羁绊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中一位，是国父级的人物——<strong>威廉·奥兰治</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>威廉</strong>，又称“沉默者威廉”，是尼德兰反抗西班牙统治的领袖。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在起义初期最艰难的岁月里，奥德瓦特是他的重要据点之一。小镇的市民坚定地支持他的事业。这里不仅是战略要地，更是他获取物资和兵源的可靠后方。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1550年</strong>，威廉的第一个孩子——女儿<strong>玛丽亚</strong>，就出生在奥德瓦特。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "虽然关于他本人具体居住在镇上哪座房屋已无确切考证，但他的妻子、他的长女出生于此的史实，将这位荷兰建国之父的个人史，与小镇的历史紧密编织在了一起。可以说，奥兰治家族走向历史舞台中央的起点之一，便萦绕着奥德瓦特的运河雾气。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与小镇结缘的名人，是荷兰黄金时代的剧作家与诗人——<strong>约斯特·范·登·冯德尔</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "冯德尔被视作荷兰最伟大的诗人之一，地位堪比莎士比亚之于英国。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他出生于科隆，但因父母是门诺派教徒（当时受迫害的新教派别），在他年幼时举家迁往阿姆斯特丹。然而，他生命中的一个重要篇章，却与奥德瓦特相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1650年代</strong>，冯德尔因经济破产和家庭悲剧（先后丧妻丧子），陷入巨大痛苦。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他离开了喧嚣的阿姆斯特丹，来到相对宁静的奥德瓦特定居。小镇平和的水乡氛围，成了他疗伤与创作的庇护所。虽然他已年迈，但在这里，他依然笔耕不辍。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我的灵魂如同被暴风雨摧残的船只，如今驶入这安静的港湾。奥德瓦特的流水不语，却抚平了最深的皱纹。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "—— 后世学者根据冯德尔晚年书信风格提炼" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更重要的是，冯德尔的女儿<strong>安娜</strong>，嫁给了奥德瓦特的一位商人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "诗人生命的最后几年，很大程度上是在女儿的照料下，在这座小镇度过的。<strong>1679年</strong>，冯德尔在阿姆斯特丹去世，但他的血脉和一段暮年时光，永远留在了奥德瓦特。小镇的宁静，慰藉了一位伟大诗人破碎的心，这段往事，为其人文底色添上了温柔一笔。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于女巫称重房，流传最广的传说，本身就充满了戏剧性的正义色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事说，皇帝查理五世之所以亲自前来测试，是因为他听说了此地称重的“神奇公正”。他伪装成普通人，带着一位被诬告的农妇前来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地官员不知其真实身份，但依旧一丝不苟地执行程序。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "农妇紧张地踏上大秤，秤砣缓缓移动，最终停在了一个完全符合其身材的、合理的重量上。官员们当即开具了清白证书。皇帝目睹全程，深为触动，当场亮明身份，并永久授予了这座称重房皇家特许状。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则围绕那台“魔法天平”本身。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "人们相信，这台秤如此公正，是因为它被施予了“对抗谎言的魔法”。任何试图在称重时使用巫术让自己变轻的女巫，站上去后反而会变得异常沉重，因为“魔鬼的契约”在真理之秤前无所遁形。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当然，这只是美好的附会。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的“魔法”，是奥德瓦特市政官员的良知与勇气，以及那份皇帝特许状赋予的法律权威。这份独特的传统，让奥德瓦特赢得了 <strong>“无罪之城”</strong> 的别称。至今，游客仍可以站上那台历史天平，领取一份趣味性的“清白证书”，亲身体验那种被历史认证的“如释重负”。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在奥德瓦特静谧的运河边，你触摸到的不是冰冷的史料，而是一场关于恐惧、勇气与人性温度的生动叙事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有阴森的刑具或哀嚎的地牢，只有一台安静的天平，和一摞泛黄的证书。它见证了欧洲历史最荒诞黑暗的一页，却用最朴素的方式——<strong>称重</strong>，守护了文明的底线：程序公正与证据理性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂奥德瓦特，便是读懂一种在集体狂热中罕见的、地方性的坚持。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它提醒我们，历史的进步往往始于某个角落一点微小的、固执的善意。这座小镇的价值，不在于它拯救了成千上万的人（实际数字可能数百），而在于它树立了一个象征：<strong>总有地方，可以为清白作证</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天，当猎巫已成为遥远的故事，女巫称重房依然静静地矗立。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它从审判场变为博物馆，从决定生死的场所变为启迪思考的空间。它邀请每一位访客思索：我们该如何对待异见者？如何在恐慌中保持理性？奥德瓦特用它的前世今生，给出了一个温暖而有力的回答。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/delft-historic-centre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    代
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">代尔夫特老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Historic Centre of Delft</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/hunebedden-drenthe-megalithic-tombs" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    德
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">德伦特巨石墓群</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Drenthe Megalithic Tombs (Hunebedden)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/zwolle-hanseatic-star-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    兹
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">兹沃勒</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Zwolle</p>
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
