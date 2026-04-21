import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '恩克赫伊曾历史溯源｜黄金时代古港与东印度公司的前世今生',
  description: '探索荷兰黄金时代活化石恩克赫伊曾。跟随东印度公司商船与鲱鱼捕手的足迹，揭开这座被时光遗忘的古港前世今生。',
}

export default function EnkhuizenVocLegacyHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '恩克赫伊曾', href: '/attractions/enkhuizen-voc-legacy-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`恩克赫伊曾・Enkhuizen・荷兰・北荷兰省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在阿姆斯特丹北面，须德海（今艾瑟尔湖）南岸，藏着一座仿佛被时间凝固的港口。它不是旅游指南上的常客，却是读懂荷兰“黄金时代”最精妙的注脚。这里是 <strong>恩克赫伊曾</strong>，一个曾与阿姆斯特丹、鹿特丹比肩的海洋帝国巨擘，一个将东印度公司的野心与鲱鱼贸易的财富刻入基因的城市。今天的宁静，反衬着昔日的震耳轰鸣。抛开游玩攻略，走进恩克赫伊曾的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`恩克赫伊曾`} />
                <InfoRow label="英文名称" value={`Enkhuizen`} />
                <InfoRow label="正式名称" value={`Enkhuizen`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`北荷兰省`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "恩克赫伊曾的故事，始于海水、沙地与不屈的人们。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字本身就诉说着起源：<strong>“Enkhuizen”</strong> 由古荷兰语 <strong>“Homines”</strong>（人们）与 <strong>“huson”</strong>（房屋）结合演变而来，意为“高地居民的家园”。这精准地描绘了它的地理与族群——一群在须德海边沿的沙丘高地上筑屋而居的渔夫与农民。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1295年</strong>，这片聚落被正式授予城市权利。但推动它崛起的，不是领主恩典，而是来自海洋的银色宝藏：<strong>鲱鱼</strong>。北海丰富的鲱鱼群，是上帝赐予低地国家最早的资本。恩克赫伊曾的渔民掌握了先进的腌制技术，能让鲱鱼保存数月而不腐。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“从恩克赫伊曾驶出的船只，船舱里塞满了盐桶和鲱鱼。它们的航迹遍布波罗的海，带回来的是粮食、木材和财富。”——一位16世纪旅行商的笔记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "到了 <strong>15世纪</strong>，它已从一个渔村跃升为“汉萨同盟”的重要贸易成员。其港口里泊满了“鲱鱼巴士”（一种专用捕鲱船），财富随着咸腥的海风积累。城市的轮廓在填海造地中扩张，三条主要运河开凿，奠定了它经典的荷兰水城格局。这一切，都为那个即将到来的、撼动世界的黄金时代，铺就了坚实的龙骨。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "历史的浪潮在这里拍打出几个决定性的印记，至今仍在城市的砖石间回响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个印记，是 <strong>1602年</strong> 那场改变世界贸易格局的联合。荷兰东印度公司（VOC）成立，恩克赫伊曾是六个发起商会城市之一。这意味着，它拥有了直接参与亚洲香料、瓷器、丝绸贸易的股份与话语权。城市财富急剧膨胀，宏伟的市政厅、气派的商人宅邸、坚固的城墙与城门拔地而起。港口成为通往东印度群岛的起点之一，无数梦想家与冒险家由此启航。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，最具象的印记，是一艘船。<strong>1650年</strong>，东印度公司商船 <strong>“恩克赫伊曾号”</strong> 从这座母港首航亚洲。它的命运，成了这座城市命运的隐喻。这艘巨舰多次往返于东西方，积累了大量财富，但最终在 <strong>1665年</strong> 于马达加斯加海岸沉没。它的辉煌与湮没，正是恩克赫伊曾在黄金时代中激流勇进，却又在时代转向时逐渐沉寂的缩影。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个深刻印记，是 <strong>1572年</strong> 的“海上乞丐”事件。在反抗西班牙统治的八十年战争中，恩克赫伊曾是第一批公开支持奥兰治亲王威廉的城市。一支名为“海上乞丐”的反抗军水手占领了城市，并将其变成了反抗西班牙的海军基地。这一勇敢抉择，不仅保卫了城市自治权，更使其在荷兰共和国成立后，获得了重要的政治与军事地位。<strong>德伊弗尔门</strong>（Drommedaris）这座建于1540年的厚重海防塔楼，目睹了这一切，至今仍是守护港口的历史地标。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三个印记，是关于“失去”与“保存”。<strong>20世纪30年代</strong>，须德海被大坝合围，变为艾瑟尔湖。恩克赫伊曾一夜之间从北海沿岸的深水港，变成了内陆湖边的小城。地理优势骤失，经济活动衰退，时间仿佛在此放缓。塞翁失马，这却意外地使它躲过了大规模现代化改造。大量的 <strong>17、18世纪建筑</strong> 得以完整保留，整个老城如同一座露天的荷兰黄金时代建筑博物馆。其中，<strong>赞德港区</strong> 被整体修复为 <strong>“须德海博物馆”</strong> 的露天展区，真实还原了百年前的港口生活。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这座城市的传奇里，有两位人物的身影尤为突出。他们一位指向浩瀚的海洋与未知的东方，另一位则扎根于本土的命脉——鲱鱼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一位，是航海家 <strong>约里斯·凡·斯派根</strong>。他并非出生于此，但恩克赫伊曾选择他作为城市的英雄与象征。<strong>1595年</strong>，在葡萄牙严密封锁印度洋航路的情况下，荷兰人亟需找到属于自己的东方航线。由科尔内利斯·德·霍特曼率领的四艘船队首次远航东南亚，而船队中那艘“荷兰号”的船长，正是 <strong>约里斯·凡·斯派根</strong>。这次航行无比艰险，损失了半数船员，但最终抵达了爪哇，证明了绕过好望角通往香料群岛的可行性，震惊欧洲。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们忍受着坏血病和葡萄牙人的敌意。当巴达维亚（今雅加达）的海岸线出现在眼前时，我们知道，一个新时代的大门被我们撞开了。”——摘自斯派根航行日志的残篇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "恩克赫伊曾敏锐地抓住了这位先驱带来的荣耀与机遇。当东印度公司成立时，它积极投身其中。为了纪念斯派根开启的伟业，城市不仅将他的形象刻入市徽，更在 <strong>1650年</strong> 将新建造的东印度公司巨舰命名为 <strong>“恩克赫伊曾号”</strong>，寓意着城市精神在这艘船上延续，驶向无尽的财富之海。斯派根的故事，激励了一代又一代恩克赫伊曾青年奔向海洋。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二位，是本土的财富缔造者 <strong>巴伦支·斯赫林</strong>。如果说斯派根代表了外向的冒险精神，斯赫林则代表了内向的、扎实的财富积累。他生于恩克赫伊曾，是 <strong>17世纪</strong> 最成功的鲱鱼捕捞船主与商人之一。他的事业完全建立在北海的银色浪潮上。他拥有庞大的渔船队，垄断了从捕捞、腌制到贸易的完整产业链。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的精明与影响力，使他连续多年担任恩克赫伊曾的市长。他的宅邸是城市中最奢华的存在之一。更重要的是，他与妻子 <strong>安娜·鲁埃尔</strong> 的婚姻，是财富与文化的联姻。安娜是一位艺术爱好者和赞助人，他们的家成为艺术家、学者聚会的沙龙。斯赫林家族的故事，完美诠释了恩克赫伊曾黄金时代的典型成功路径：以鲱鱼贸易积累原始资本，然后投资于东印度公司等更广阔的领域，同时用财富装点城市与文化。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他去世后，其巨额遗产被用于设立慈善基金，部分至今仍在运作，惠泽乡里。他的存在，让人们看到，这座城市的辉煌不仅在于远航的巨舰，也在于那些掌控着本地经济命脉、并深深塑造城市面貌的“幕后巨人”。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在砖石与档案之外，恩克赫伊曾的呼吸也流淌在口耳相传的故事里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的传说，与那艘命运多舛的 <strong>“恩克赫伊曾号”</strong> 有关。据说，在风暴之夜，当艾瑟尔湖上雾气弥漫，一些老水手声称能看到一艘幽灵般的东印度商船轮廓，无声地驶向港口。那是永远无法归家的“恩克赫伊曾号”，仍在执着地寻找它失落的母港。传说，如果亲眼看见它，预示着渔业将有大丰收，但也可能带来一场个人的不幸。这个传说混合了航海者的乡愁、对海洋的敬畏，以及对那座巅峰之城逝去荣光的集体怀念。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一则传说则与城市的守护相关。在 <strong>圣高姆勒斯教堂</strong> 的塔楼里，有一口古老的大钟。民间流传，在敌人从海上来袭的危急时刻，这口钟会无人自鸣，发出洪亮的警报，唤醒全城军民。人们相信，这是城市的守护圣人在显灵。因此，这口钟也被称为 <strong>“会说话的钟”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此外，恩克赫伊曾至今保留着一些独特的人文风情。每年夏季， <strong>“鲱鱼节”</strong> 会重现历史场景，人们穿着传统服饰，演示古老的鲱鱼处理工艺。而在一些古老酒馆里，你或许还能听到用当地方言传唱的古老船歌，歌词里满是关于北海风暴、远方岛屿和对家中爱人的思念。这些都不是表演，而是深植于社区血脉的、活着的记忆。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天的恩克赫伊曾，是一座宁静到能听见风声与水声的小城。但正是这份宁静，让它成为解读荷兰乃至欧洲近代史最珍贵的“静态样本”。走在它的运河畔，指尖划过 <strong>17世纪</strong> 商人宅邸红砖上的纹章，你触摸的不是景点，而是全球贸易早期化的心跳；站在 <strong>赞德港区</strong> 的木码头上，望着那些古老的船屋，你看到的是一个民族如何从海洋中获取力量、塑造身份。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的历史价值，在于其完整性。它不像阿姆斯特丹那样被全球化的浪潮彻底重塑，而是像一枚时间胶囊，将“海上马车夫”时代一个典型港口城市的社会结构、建筑风貌、生活节奏，相对原真地保存了下来。读懂恩克赫伊曾，你就读懂了荷兰黄金时代繁华表象下的具体肌理，读懂了财富如何到来，又如何悄然改变流向。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有喧闹的打卡人潮，只有历史在低声诉说。来恩克赫伊曾，不是为了猎奇，而是为了完成一次深度的历史沉浸。当你离开时，带走的将不仅是照片，还有一段关于海洋、勇气、财富与时光的复杂叙事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kasteel-amerongen" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿梅龙根城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kasteel Amerongen</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/giethoorn" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    羊
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">羊角村</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Giethoorn</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/willemstad-fortress-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    威
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">威廉斯塔德</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Willemstad</p>
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
