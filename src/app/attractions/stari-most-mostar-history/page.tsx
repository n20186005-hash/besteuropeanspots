import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '莫斯塔尔历史溯源｜石桥上的城市，前世今生与战火重生的传奇',
  description: '穿越奥斯曼帝国的荣光与波斯尼亚和黑塞哥维那战争的创伤。探寻莫斯塔尔老桥不止于一座桥的故事——它是建筑奇迹、分裂符号，更是和解的永恒象征。',
}

export default function StariMostMostarHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '波斯尼亚和黑塞哥维那', href: '/destinations/europe' },
            { label: '莫斯塔尔', href: '/destinations/europe' },
            { label: '莫斯塔尔老桥', href: '/attractions/stari-most-mostar-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`莫斯塔尔老桥・Stari Most・波斯尼亚和黑塞哥维那・莫斯塔尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在波斯尼亚和黑塞哥维那的群山峡谷中，<strong>莫斯塔尔</strong>的名字意为“守桥人”。而那座桥，便是这座城市跳动的心脏与全部命运的缩影。它并非一座普通的奥斯曼古桥，而是一本以石头写就的史诗，页页铭刻着帝国的野心、匠人的神技、战争的残酷与民族和解的微弱曙光。抛开游玩攻略，走进莫斯塔尔的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`莫斯塔尔老桥`} />
                <InfoRow label="英文名称" value={`Stari Most`} />
                <InfoRow label="正式名称" value={`Stari Most`} />
                <InfoRow label="国家" value={`波斯尼亚和黑塞哥维那`} />
                <InfoRow label="城市" value={`莫斯塔尔`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "莫斯塔尔的诞生，与<strong>内雷特瓦河</strong>湍急的墨绿色水流密不可分。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在奥斯曼帝国征服之前，这里只是零星的定居点与一座摇摇欲坠的木质吊桥。真正的转折点在<strong>15世纪中叶</strong>。奥斯曼铁骑翻越群山，将这片土地纳入帝国版图。他们看中了这里的战略价值：控制此桥，就等于扼住了连接亚得里亚海与巴尔干内陆的咽喉要道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，一座稳固的石头要塞与集市围绕着桥头堡生长起来。城市得名 <strong>“Mostar”</strong> ，直接来源于塞尔维亚-克罗地亚语中的 <strong>“most”</strong> （桥）和 <strong>“stari”</strong> （老）的组合——“守桥人”或“桥之城”。这个名字赤裸裸地宣告了其存在的根本逻辑：一切因桥而生，为桥而存。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的居民是士兵、商人与工匠。城市布局呈现出经典的奥斯曼风格：石桥连接两岸，一侧是曲折陡峭的街巷通往清真寺与住宅区，另一侧则是热闹的集市与作坊。这不是一个自然生长的聚落，而是一个被精心设计、嵌入帝国交通与军事网络的<strong>边境枢纽</strong>。它的基因里，从一开始就混合着征服、贸易与不同文化的碰撞。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "莫斯塔尔的历史，可以清晰地分为“桥前”与“桥后”两个时代。而划分它们的，是那座奇迹般的石拱桥。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一道印记：帝国的脊梁 (1566年)</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "16世纪中叶，奥斯曼帝国在苏莱曼大帝治下达到鼎盛。莫斯塔尔木质旧桥的腐朽，已无法承载帝国日益繁忙的物资与军队运输。于是，一项近乎疯狂的决定被下达：用石头建造一座单孔拱桥，飞跃宽近30米、深20米的汹涌内雷特瓦河。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "工程委托给了苏丹的首席建筑师<strong>米马尔·科查·希南</strong>的弟子——<strong>哈伊鲁丁</strong>。传说，因工程极其艰险，哈伊鲁丁曾梦见先知指点，并将梦境化为建筑草图。更为现实的传说是，为了支撑巨大的拱形支架，工人们用了长达九年的时间，用木制框架从河床架起，并用特殊的蛋清石灰砂浆粘合石块。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“当最后的支架被移除时，建筑师深知，若计算有毫厘之差，整个建筑将瞬间崩塌。他悄悄地准备好了自己的葬礼。然而，当支撑木被砍断，石桥巍然不动，与两岸岩壁浑然一体。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这段民间传说，道尽了建造时的如履薄冰与成功后的狂喜。<strong>1566年</strong>，老桥落成。它不仅是工程学的胜利，更是帝国力量与美学的宣示。其优美的弧线倒映在水中，形成一个完美的圆形，被诗人赞为“石制的月亮”。此后四百年，它岿然不动，目睹商队往来，见证城市在它两端繁荣滋长，成为奥斯曼文化遗产在巴尔干最璀璨的明珠之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二道印记：现代的伤痕 (1993年11月9日)</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光跃至20世纪末。随着南斯拉夫解体，波斯尼亚和黑塞哥维那陷入惨烈的内战。莫斯塔尔成为波斯尼亚和黑塞哥维那克族与穆族武装血腥争夺的焦点。老桥，这座曾经团结两岸的象征，在极端民族主义者的眼中，变成了对方民族身份和文化认同的“图腾”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1993年11月9日，在经历了长达数日的密集炮击后，这座屹立了427年的石桥，在全世界电视镜头的注视下轰然坍塌，坠入内雷特瓦河。那不仅仅是一座建筑的毁灭。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位当地老人在日记中写道：“他们不是在炸桥，他们是在炸掉我们的记忆，炸掉我们共同生活的最后证明。桥塌的那一刻，我的一部分也死了。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这一天，成为莫斯塔尔乃至整个波斯尼亚和黑塞哥维那战争创伤的代名词。老桥的废墟沉在河底，如同一个巨大的伤口，将城市和人民彻底撕裂。东岸（穆族）与西岸（克族）从此物理与文化上彻底隔绝，城市一分为二。这道印记，是冰冷而暴烈的现代性对古老文明的一次精准摧毁。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在莫斯塔尔，名人的光环往往让位于建筑的永恒与集体的创伤。但有一位人物，他的生命与老桥紧紧缠绕，几乎化为传说的一部分——那便是它的建造者，<strong>建筑师哈伊鲁丁</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于哈伊鲁丁的生平，正史记载寥寥。他更像一个从工程图纸和民间故事中走出的影子大师。我们只知道他是奥斯曼建筑巨擘<strong>米马尔·科查·希南</strong>的门徒。希南为苏莱曼大帝建造了宏大的苏莱曼尼耶清真寺，而他的学生，则被派往帝国的边疆，完成一项看似不可能的任务。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "哈伊鲁丁在莫斯塔尔一待就是近十年。这十年里，他不仅是一位建筑师，更是一位数学家、物理学家和现场总指挥。他必须解决的核心难题是：如何在没有现代钢筋混凝土的情况下，让一个宽度如此惊人的单孔石拱抵抗地心引力与河水的冲刷？" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说他采用了“递增拱券”的秘法。即先用轻质木材搭建整个拱形的框架，然后从两岸向中间同时垒砌经过精密计算的楔形石块。每一块石头的位置和角度都决定了整体的命运。粘合石块的砂浆，据信混入了蛋清和山羊奶，以增加其韧性与防水性。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在一封据称是他写给伊斯坦布尔上级的信件碎片中，后人如此解读其心境：“……于此深渊之上，每一块安放的石，皆是我的一次祷告。桥成之日，若非荣光，便是永恒的耻辱。我已无退路，唯有与桥同存亡。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种将个人命运与作品彻底绑定的决绝，赋予了老桥超越物质的灵性。桥成之后，哈伊鲁丁便消失于历史记载，仿佛他存在的全部意义就是为了完成这座桥。他成了莫斯塔尔城市灵魂的“第一任守护者”，一个技术、艺术与信仰合一的化身。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "数百年后，当桥梁在1993年被毁，人们痛哭失声。而在重建时（2004年），工程师们面临了与哈伊鲁丁同样的挑战。他们从河底打捞起 original 的石料（“原石”被特意用来重建，以示传承），并惊人地发现，16世纪的工艺精度极高，大部分石块严丝合缝。现代科技辅助之下，重建者依然在很大程度上遵循了古法，以示对那位无名大师的致敬。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "哈伊鲁丁没有留下肖像，没有详细的生平，但他的“签名”却跨越五个世纪，清晰可见——那就是那座桥本身。他是一位因一项工程而被永恒铭记的匠人，他的传奇不在于波澜壮阔的生平，而在于将一种绝对的“完美”凝固在了石头之中，并让它成为了一个族群共同记忆的基石。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在莫斯塔尔，最鲜活的人文风情，就在老桥之上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那便是延续了数百年的<strong>男子高台跳水</strong>传统。这并非表演，而是一种成年的、彰显勇气的仪式。内雷特瓦河水即便在盛夏也冰冷刺骨，而从近25米高的桥拱中央跃下，需要巨大的勇气和技巧。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "传说这一传统始于奥斯曼时代。当时，城市里的年轻人为了向心爱的姑娘证明自己的勇敢，或是在重大节日和军事胜利后表达狂喜，便从这座最高的建筑上一跃而下。还有一个更古老的版本说，最初跳水是为了从河底找回被敌人扔下的珍贵圣物。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如今，跳水已成为莫斯塔尔最著名的“活态传说”。桥边的跳水俱乐部成员，会穿着传统裤衩，向游客募集小额“赞助”，当金额达到他们的心理预期，便会从容地爬上栏杆，在众人的惊呼中划出一道弧线，扎入冰冷的河心。这既是谋生手段，也是一种文化的自觉传承。每一次纵身一跃，都是对历史、勇气和这座城市独特身份的一次重申。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说关于桥本身。人们说，老桥的石材中混合了<strong>蛋清和蜂蜜</strong>，所以历经风雨而愈发坚固。还有人说，在月圆之夜，如果你静静凝视桥拱与水中的倒影形成的完整圆环，便能看见古城昔日的盛景，甚至能听到古代商队的驼铃与集市上的喧哗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最动人的一个传说是“石桥的新娘”。故事说，建桥时，无论怎么计算，两岸的桥基都无法完美对齐。直到建筑师梦见一位白衣少女，告诉他必须将第一对来到桥边的恋人活埋进桥基，桥才能稳固。第二天，果然有一对新人路过。建筑师痛苦地说出梦境。新娘却坦然走上前，说：“如果我们的爱情能成为这座连接千千万万人的桥梁的基石，那将是我们至高的荣耀。”于是，她和爱人携手步入基石。桥成后，异常坚固。人们说，那是爱情的力量化解了工程难题，守护着每一个过桥人的平安。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，漫步在重建的老桥上，你脚下踩着的，是16世纪的原石与21世纪的补丁。它的每一道纹路，都诉说着三个重叠的故事：奥斯曼帝国的辉煌、20世纪战争的野蛮，以及人类修复伤痕、重建共同的脆弱决心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "来到莫斯塔尔，读懂这座桥，便读懂了半部巴尔干的历史。它教会旅行者的，并非简单的“风景如画”或“古迹沧桑”，而是一种更为复杂的凝视：文明如何建造，又如何被摧毁；记忆如何被撕裂，又如何被艰难地缝合。老桥不再是单纯的旅游景点，它是一个<strong>活着的纪念碑</strong>——纪念失去，更纪念重生；象征分裂的过去，也寄托着统一的未来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它提醒我们，世界上最坚固的桥梁，并非由石头砌成，而是建在人的心中。当你站在桥中央，俯瞰碧绿的河水与两岸依旧带着弹孔的建筑，你会感受到一种沉重的希望。这是莫斯塔尔馈赠给世界的一份独特而深刻的人文礼物。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/mehmed-pasa-sokolovic-bridge-visegrad" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维舍格勒的穆罕默德·帕夏·索科洛维奇桥</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mehmed Paša Sokolović Bridge in Višegrad</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/trebinje-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特雷比涅老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trebinje Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/banja-luka-kastel-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴尼亚卢卡卡斯特尔要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kastel Fortress</p>
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
