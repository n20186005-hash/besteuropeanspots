import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '久洛历史溯源｜欧洲唯一水上砖堡的前世今生与贵族传奇',
  description: '探寻匈牙利大平原上的隐秘瑰宝。穿越奥斯曼战火与贵族恩怨，走进欧洲现存唯一平原水上砖砌城堡——久洛，聆听石头诉说的七百年史诗。',
}

export default function GyulaCastleHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '匈牙利', href: '/destinations/europe' },
            { label: '久洛', href: '/destinations/europe' },
            { label: '久洛城堡', href: '/attractions/gyula-castle-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`久洛城堡・Gyula Castle・匈牙利・久洛`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在匈牙利广袤无垠的阿尔费尔德大平原上，一座被护城河温柔环抱的砖红色城堡，静静地颠覆着人们对中世纪要塞的所有想象。它没有依山而建的险峻，却以水为甲，以砖为骨，在平坦之地筑起一道不可逾越的屏障。这里，是欧洲独一无二的平原水上砖砌城堡——<strong>久洛</strong>。它的历史，是一部匈牙利南部边境的编年史，交织着王权、侵略、文艺复兴的奢靡与独立战争的烽烟。抛开游玩攻略，走进久洛的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`久洛城堡`} />
                <InfoRow label="英文名称" value={`Gyula Castle`} />
                <InfoRow label="正式名称" value={`Gyula Castle`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`久洛`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "久洛的名字，首次明确出现在历史文献中是在 <strong>1313年</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但它的根源，或许更早。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在 <strong>13世纪中叶</strong>，蒙古铁骑如狂风般席卷东欧，匈牙利王国遭受重创。这场灾难催生了一个深刻认知：必须建造更多、更坚固的石头城堡来保卫王国。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "久洛，便是在这样的背景下，于王国东南边境的平原湿地中萌芽。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它最初并非砖石结构，而很可能是一座建在河心岛或沼泽地上的<strong>木制堡垒</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其名字“Gyula”的来源充满争议，最具说服力的说法与匈牙利人的祖先——马扎尔人部落的军事首领称号“<strong>Gyula</strong>”（约相当于公爵或大公）有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这意味着，此地很可能是一位重要军事贵族的封地或据点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>14世纪</strong>，随着安茹王朝的统治，匈牙利国力恢复，边境防御体系升级。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "久洛的战略地位日益凸显，它扼守着通往特兰西瓦尼亚和南方的要道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，一场持续百年的建造开始了。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的木堡被<strong>砖石城堡</strong>取代。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "建造者充分利用了平原上的水资源，挖掘出宽阔的护城河，引入克勒什河的支流，将城堡变成一座真正的“水中要塞”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在无险可守的平原上，水，成了它最强大的自然防线。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种独特的防御理念，造就了其无可替代的建筑学价值。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城堡的砖墙，铭记着匈牙利动荡的南部边疆史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个深刻的印记，来自<strong>奥斯曼帝国</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>16世纪</strong>，奥斯曼的扩张阴影笼罩整个匈牙利。久洛作为前线堡垒，命运多舛。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1566年</strong>，在著名的<strong>锡盖特瓦尔战役</strong>（匈牙利守卫者兹里尼·米克洛什在此殉国）的同一年，久洛城堡也陷入了奥斯曼大军的重围。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时城堡的拥有者是<strong>久洛的雅诺什</strong>，一位实力雄厚的领主。面对压倒性的敌军，他做出了一个现实而痛苦的决定：<strong>投降</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡因此免于被彻底摧毁，但随之而来的是长达<strong>143年</strong>的奥斯曼统治时期。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "土耳其人在城堡内增建了清真寺和浴室，其痕迹至今仍可被细心的观察者所发现。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位当时的编年史家曾无奈地记载：“城堡的守卫者看到了力量的悬殊，为避免无谓的流血和彻底的毁灭，他们选择了交出钥匙。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个转折点，在<strong>18世纪</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥斯曼势力被驱逐后，城堡重归匈牙利。但它军事要塞的使命已近终结。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1702年</strong>，哈布斯堡王朝的皇帝，出于对匈牙利贵族势力再度拥兵自重的忌惮，下令拆毁了全国众多城堡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "久洛城堡也未能幸免，部分城墙和塔楼被炸毁，沦为废墟。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，它的故事并未结束。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三个印记，与匈牙利的<strong>独立梦想</strong>紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1848-1849年</strong>革命与独立战争期间，这座废墟城堡被革命军仓促修复，成为一处重要的抵抗据点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1849年7月</strong>，它经历了最后一次围城。奥地利帝国军队攻陷久洛，这里的陷落，是科苏特领导的革命政府最终失败的序曲之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战火再次在古老的砖石上留下弹痕。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从边防前哨到奥斯曼行营，从帝国废墟到革命阵地，久洛城堡的每一块砖，都吸饱了历史的重量。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城堡的灵魂，与一个家族和一位文豪的名字深深绑定。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1. 久洛的雅诺什公爵与“文艺复兴宫廷”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡最辉煌时期的主人，当属<strong>久洛的雅诺什</strong>（1480-1540）。他不仅是军事统帅，更是一位热忱的<strong>文艺复兴</strong>赞助人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "通过婚姻和手腕，他积累了巨大财富，成为匈牙利最有权势的领主之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他将久洛城堡从纯粹的军事要塞，改造为一座兼具奢华与防御功能的<strong>文艺复兴式庄园</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他在城堡内建造了宏伟的宫殿，引入意大利的工匠和艺术家，用精美的石雕、壁画和红大理石装饰房间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的宫廷吸引了诗人、学者和外交官，一度成为匈牙利南部文化的灯塔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他最著名的轶事，或许与他的妻子有关。他的第二任妻子，<strong>玛利亚</strong>，据说是一位拥有惊人美貌和智慧的女士。雅诺什公爵对她极度宠爱，城堡的奢华装饰，很大程度上是为了取悦她。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，盛极而衰。雅诺什晚年卷入王位争夺，失势后逃亡波兰，他心爱的城堡也随之易主，那段文艺复兴的黄金时代戛然而止。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>2. 马洛伊·山多尔：文学巨匠的童年城堡</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说雅诺什公爵赋予了城堡肉身的辉煌，那么匈牙利<strong>20世纪最伟大的小说家之一——马洛伊·山多尔</strong>（1900-1989），则赋予了它永恒的灵魂印记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "马洛伊并非出生在久洛，但他童年和青少年时期最重要的假期，几乎都是在这里度过的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的姨母嫁入了当时拥有城堡部分产权的家族，因此，年轻的马洛伊得以在这座充满历史回响的城堡里自由探索。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "马洛伊在日记《记忆之书》中深情回忆：“<strong>久洛</strong>，是我童年的地理中心……那座砖红色的水上城堡，对我来说就是世界的起点和终点。它的护城河、它的小桥、它那些空荡的大厅，是我所有冒险和幻想的舞台。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的孤独、没落的高贵、以及历史的沉重感，深深地塑造了马洛伊的审美和世界观。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他后来作品中对奥匈帝国没落贵族生活的精准描摹、对“昨日世界”的无限乡愁，其情感的源头，很大程度上可以追溯至久洛城堡那些寂静的午后。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在他的代表作《烛烬》和《一个市民的自白》中，都能隐约看到这座城堡影子般的轮廓——那是一个旧世界优雅与衰亡并存的绝佳象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "可以说，久洛城堡是马洛伊文学宇宙的<strong>隐秘基石</strong>。一位是书写命运的作家，一座是承载命运的建筑，他们在时光中完成了互相成就。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如同所有古老的城堡，久洛也被神秘的传说所萦绕。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的传说是关于一位“<strong>白色夫人</strong>”的幽灵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据说，在奥斯曼统治时期，一位美丽的匈牙利贵族女子被囚禁在城堡的高塔之中。她的爱人，一位年轻的匈牙利骑士，在试图解救她时被土耳其守卫发现并杀害。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "女子悲痛欲绝，从塔楼纵身跃入护城河自尽。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，每当月圆之夜，人们总能看到一个身着白色长裙的窈窕身影，在高高的城垛上或城堡庭院中无声地徘徊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她不是在寻找出路，而是在等待那个永远无法归来的爱人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地人说，那不是可怕的幽灵，而是一缕承载着无尽哀愁的思念。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则与城堡的“心脏”——一口深井有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这口井是城堡被围困时的生命线。传说在建造之初，这口井怎么也挖不出水，直到一位神秘的老人出现，他将一枚<strong>镶嵌着特殊宝石的戒指</strong>投入掘井处，清泉随即喷涌而出。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "老人告诉领主，这枚戒指是古老匈牙利王权的象征之一，由<strong>贝洛四世</strong>国王在蒙古入侵后埋藏，它保佑着这片土地永不干涸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据说，这枚戒指至今仍沉睡在井底，守护着久洛的水源与安宁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，无论是凄美的爱情，还是古老的祝福，都让冰冷的砖石有了温度，成为了当地人共同文化记忆的一部分。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客走过木桥，进入这座修复完好的城堡时，他所踏足的，远不止一个景点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他走过的是<strong>雅诺什公爵</strong>迎接文艺复兴春风的门廊；触摸的是<strong>奥斯曼士兵</strong>留下刻痕的砖墙；凝望的是<strong>1849年革命者</strong>曾誓死守卫的垛口；呼吸的，是<strong>马洛伊·山多尔</strong>笔下那混合着往事尘埃与童年欢愉的空气。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "久洛城堡是一部用砖、水和记忆写成的三维史书。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它罕见的水上砖砌形态，是匈牙利平原民族在防御智慧上的独特答卷。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它从边防要塞到文化沙龙，再到帝国废墟与革命阵地的角色嬗变，是匈牙利数百年国运兴衰的微观缩影。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它最终没有沦为一座纯粹的“死”博物馆，而是通过文学，在现代人的精神世界中获得了重生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂久洛，便是读懂了匈牙利南部波澜壮阔的边疆史，读懂了贵族文化的荣光与脆弱，也触摸到了这个民族深植于历史中的坚韧与忧伤。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它提醒我们，最动人的风景，往往不是壮丽的自然，而是人类在时间之河中奋力刻下的、充满故事的印记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/szentendre-art-town-hungary" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣安德烈（艺术小镇）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Szentendre</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/esztergom-basilica" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃斯泰尔戈姆大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Esztergom Basilica</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/fuzer-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    菲
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">菲泽尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Füzér Castle</p>
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
