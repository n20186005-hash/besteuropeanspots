import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '丰特夫罗修道院历史溯源｜修道院、皇家监狱与一个欧洲乌托邦的前世今生',
  description: '法国卢瓦尔河谷秘闻：一座修道院里，竟同时住着国王、圣女、修女与囚徒。穿越900年，看尽权力、信仰与救赎。',
}

export default function FontevraudAbbeyHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '丰特夫罗修道院', href: '/attractions/fontevraud-abbey-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`丰特夫罗修道院・Fontevraud Abbey・法国・曼恩-卢瓦尔省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在卢瓦尔河谷星罗棋布的城堡光环下，藏着一处被严重低估的历史奇观：<strong>丰特夫罗修道院</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它绝非一座简单的宗教建筑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的石墙上，镌刻着中世纪欧洲最有权势女人的最后选择，回荡着法国大革命最激进时代的铁窗回音，更封存着一个关于性别、权力与社区实验的、几乎被遗忘的乌托邦理想。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "抛开游玩攻略，走进丰特夫罗的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`丰特夫罗修道院`} />
                <InfoRow label="英文名称" value={`Fontevraud Abbey`} />
                <InfoRow label="正式名称" value={`Fontevraud Abbey`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`曼恩-卢瓦尔省`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "丰特夫罗并非一座城市，而是一个因修道院而生的<strong>“宗教王国”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的故事始于 <strong>1101年</strong>，一个动荡与虔诚并存的年代。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "创始人<strong>罗贝尔·达布里塞尔</strong>，是一位特立独行的巡回布道者。他痛感当时教会腐败，决心建立一个基于纯粹福音生活的革新社区。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他选择了卢瓦尔河与维埃纳河之间一片名为“丰特夫罗”的荒野。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“Fontevraud”这个名字，源于拉丁语“Fons Ebraldi”，意为“埃布拉尔德之泉”。传说达布里塞尔用牧杖击地，清泉涌出，遂定址于此。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但这眼泉，滋养的是一个前所未有的实验。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗贝尔建立的是一个<strong>混合修会</strong>，同时容纳修士、修女，且由一位<strong>女院长</strong>统辖全体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在12世纪的欧洲，这是一个惊世骇俗的创举。他将领导权交给女性，源于他对圣母玛利亚的极度虔诚，以及一种激进的神学观念：女性在属灵上更为优越，能引领堕落的男性回归正道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，一个庞大的宗教城镇在荒野中拔地而起。不仅有宏伟的教堂，还有独立的修女院、修士院、麻风病院和庞大的工坊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它自给自足，秩序森严，迅速成为欧洲最大的宗教社区之一，一个在男权社会中的“女儿国”。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "丰特夫罗的第一个深刻印记，是其<strong>“金雀花王朝的皇家万神殿”</strong>身份。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "12-13世纪，它与英格兰王国命运交织。<strong>1152年</strong>，阿基坦的埃莉诺与未来的英王亨利二世结婚，将她在法国的大片领土带入联姻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "丰特夫罗正位于埃莉诺的领地上。这座由女性领导、备受尊敬的修道院，深深吸引了这位欧洲中世纪最有权势的王后。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，丰特夫罗从一座宗教圣殿，升级为<strong>安茹王朝（金雀花王朝）的家族陵寝</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "教堂地下长眠着亨利二世、其子“狮心王”理查一世，以及埃莉诺本人。这些彩绘卧像，并非写实肖像，而是象征权力的永恒宣言。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位中世纪编年史家曾写道：“在丰特夫罗，国王们躺卧着，仿佛只是在安睡，手中握着权杖，头戴王冠，随时准备醒来，继续统治他们的帝国。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这份皇家的青睐，为修道院带来了无上荣耀与巨额捐赠，使其在政治版图中占据了独特位置。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个印记，是<strong>漫长衰败与转型之痛</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "英法百年战争、宗教战争相继蹂躏这片土地。修道院虽然幸存，但往昔荣光不再。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的剧变发生在<strong>法国大革命</strong>期间。1792年，修会被解散，这座象征着旧秩序的宏伟建筑被国家没收。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1804年，拿破仑的一纸法令，将其变为一座<strong>中央监狱</strong>，直至1963年。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这是丰特夫罗最撕裂的篇章。唱诗班席位被装上铁栅栏，成为囚室；精美的回廊里回荡着脚镣声；修士的居所变成了严酷的工场。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它从信仰的高地，坠入惩戒的深渊，成为法国近代刑罚史的一个冰冷注脚。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>阿基坦的埃莉诺</strong>，是丰特夫罗无法绕过的灵魂人物。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她的一生堪称传奇：先是法兰西王后，婚姻无效后，又成为英格兰王后，孕育了两位国王（理查一世和约翰王）。她主导文化沙龙，赞助行吟诗人，甚至以古稀之龄策动儿子们反叛丈夫。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但她的晚年，选择了丰特夫罗作为最终的庇护所与权力归宿。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在亨利二世去世、自己获释后，埃莉诺并未常居宫廷。她频繁造访丰特夫罗，并于<strong>1200年</strong>前后正式退隐于此。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她并非普通修女，而是这座“宗教王国”的庇护者和实质上的统治者。她利用自己的财富和影响力，扩建修道院，巩固其特权。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更重要的是，她亲自安排了自己家族的最终归宿。她将丈夫亨利二世、爱子理查一世的遗骸迁葬于此，并为自己预留了位置。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在晚年的一封信中，她流露出对丰特夫罗的特殊情感：“在这里，在上帝的庭院和这些虔诚姐妹之中，我找到了一份在宫廷阴谋与家族纷争中从未获得过的宁静。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1204年</strong>，82岁的埃莉诺在丰特夫罗潼然长逝。她选择躺在曾与自己爱恨纠缠的丈夫身边，也躺在自己最宠爱的儿子身边。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她的石像，平静地手持书卷（象征智慧），目视远方，仿佛仍在阅读、仍在沉思。她将自己最强大的形象，永恒地刻在了这座由女性主宰的圣地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位关键人物，是<strong>“圣女”玛蒂尔达</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她是亨利一世之女，威廉征服者的孙女，也是神圣罗马帝国皇后。经历政变与逃亡后，她于 <strong>1109-1115年</strong> 间隐居丰特夫罗数年。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这段经历深刻影响了罗贝尔·达布里塞尔。玛蒂尔达的皇室威望与虔诚，为初创的修会提供了至关重要的合法性背书。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说她甚至在此见证了神迹，并捐赠了丰厚的财物，帮助修道院度过了最早的艰难岁月。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一位流亡的皇后与一位激进的修士，他们的相遇，无意中为这座未来将安葬数位帝王的修道院，奠定了最初的皇家基因。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于丰特夫罗的起源，当地流传着一个美丽的传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据说罗贝尔·达布里塞尔为选址而祈祷时，得到神谕：跟随一头白色小母鹿，它停留饮水之处，便是圣地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他果然在森林中遇见了这样一头灵鹿。小鹿将他引至一处干燥的荒地，用蹄刨地，随即一股清泉汩汩涌出。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "老修女们常对访客低声讲述：“那不是普通的泉水。第一滴水涌出时，空气中充满了玫瑰的芬芳，夜莺在光秃的树枝上开始歌唱。罗贝尔大师知道，他找到了‘埃布拉尔德之泉’，上帝许诺的应许之地。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这眼神奇的泉，至今仍在修道院范围内。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说是关于“白袍女士”的幽灵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在修道院变为监狱的黑暗时期，囚犯和狱卒中盛传，在午夜时分，会有一位身着白色修女长袍的高贵女子， silent 地穿过监狱走廊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她面容平静，目光中既有慈悲，也有不容置疑的威严。她所经之处，狂躁的囚犯会莫名平静，严酷的守卫会心生寒意。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "人们深信，那正是阿基坦的埃莉诺的灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她仍在巡视这片她选定的安息之地，守护着这座建筑，见证着它的荣耀与苦难，直至它重见天日。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，漫步在修缮一新的丰特夫罗，你踩踏的每一块石板，都叠加着至少三层历史：" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "修道院的虔诚肃穆、皇家陵寝的权力静默、以及监狱时期的苦难印记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不是一个单一面孔的古迹。它是欧洲历史一个鲜活的横切面，将宗教理想、政治阴谋、家族史诗与社会变革，全部压缩在这片石筑的方舟之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂丰特夫罗，便是读懂一种历史的韧性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从乌托邦实验到权力中枢，从信仰高地到惩戒地狱，它一次次被时代的洪流重塑，却始终屹立。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最终，它穿越所有这些身份，回归为一个供人沉思的文明坐标。在这里，你能听到埃莉诺的叹息、修女的吟唱、囚徒的镣铐声，以及历史本身深沉的回响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/troyes-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特鲁瓦中世纪老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Troyes Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-fougeres" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    富
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">富热尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Fougères</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chartres-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沙特尔大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Chartres Cathedral</p>
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
