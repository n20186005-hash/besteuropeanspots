import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '萨雷马岛历史溯源｜库雷萨雷主教城堡的千年战争与孤岛传奇',
  description: '深入波罗的海的石头史诗：库雷萨雷城堡，一座未曾被攻陷的中世纪堡垒。穿越骑士、沙皇与共和国，聆听萨雷马岛最坚韧的往事。',
}

export default function KuressaareCastleHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '库雷萨雷主教城堡', href: '/attractions/kuressaare-castle-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`库雷萨雷主教城堡・Kuressaare Castle・爱沙尼亚・萨雷马岛`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在波罗的海的孤岛萨雷马，时间被砌进了灰色的石灰岩墙。<strong>库雷萨雷主教城堡</strong>，这座波罗的海地区保存最完整的中世纪城堡，并非童话中的浪漫造物，而是一部用石头写就的<strong>生存史诗</strong>。它见证了利沃尼亚骑士团的野心、沙俄帝国的扩张，以及一个小国在强权夹缝中不屈的韧性。抛开游玩攻略，走进库雷萨雷的尘封往事，遇见属于它的<strong>铁血、信仰与孤岛时光</strong>。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`库雷萨雷主教城堡`} />
                <InfoRow label="英文名称" value={`Kuressaare Castle`} />
                <InfoRow label="正式名称" value={`Kuressaare Castle`} />
                <InfoRow label="国家" value={`爱沙尼亚`} />
                <InfoRow label="城市" value={`萨雷马岛`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "萨雷马岛的名字，在爱沙尼亚语中意为“岛之地”，自古便是海上要冲。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而<strong>库雷萨雷</strong>这个名字，则来自爱沙尼亚语“Kures-saar”，意为“鹤湾”。这座城堡的诞生，与中世纪教会权力的北扩紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>14世纪中期</strong>，统治此地的<strong>萨雷-维克主教</strong>为了巩固对这片偏远而富庶岛屿的控制，决定建造一座兼具防御与行政功能的坚固堡垒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡最初的选址极具战略眼光。它并非建于海边，而是坐落在岛屿南岸一片被沼泽和人工湖（<strong>奥伊湖</strong>）环绕的半岛上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种利用自然水障的布局，使得城堡在冷兵器时代几乎无法被步兵大规模围攻。城墙直接从水中拔地而起，守护着主教们的财富与权威。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的建造持续了数十年，从最初的木石结构，逐渐演变为今天我们看到的、拥有高大<strong>同心圆防御墙</strong>和醒目防御塔的经典样式。它不仅仅是军事要塞，更是主教国的权力中心，一座孤岛上的微型王国。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三道，也是最戏剧性的历史印记，发生在<strong>20世纪初的爱沙尼亚独立战争</strong>期间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1918年11月</strong>，爱沙尼亚宣布独立，但旋即遭到苏俄红军的进攻。<strong>1919年2月</strong>，红军攻占了萨雷马岛，库雷萨雷城堡被占领。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，城堡的故事在此处展现了它的坚韧。同年<strong>2月19日</strong>，爱沙尼亚本土防御军“卡伊策利特”和学生们发起了一场大胆的突袭。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们利用冬季湖面结冰的条件，在夜幕掩护下悄然接近，对驻扎在城堡中的红军发起了闪电般的攻击。这场战斗规模不大，但意义重大。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位参与突袭的学生在日记中写道：“我们冲过冰封的奥伊湖，城堡巨大的阴影在前方显现。里面的人以为湖面是天然屏障，但冰层承载了我们的决心。我们夺回的不只是一座城堡，而是国家的第一个标志。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡被成功收复，并成为爱沙尼亚军队在萨雷马岛的重要据点，一直坚守到独立战争胜利。这次“冰上突袭”，为城堡的不陷传奇增添了最光辉的现代篇章。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二位，是城堡的“拯救者”——<strong>弗洛里安·吉尔斯费尔德</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间跳到<strong>19世纪60年代</strong>。此时的城堡在沙俄当局眼中已是无用的累赘，破败不堪，甚至被计划拆除。这时，一位爱沙尼亚裔的俄国军官兼考古学家吉尔斯费尔德登场了。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他坚信这座城堡是波罗的海历史无可替代的瑰宝。凭借其影响力，他四处奔走游说，最终成功阻止了拆除计划。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更重要的是，<strong>1867-1868年</strong>，吉尔斯费尔德主持了对城堡的第一次<strong>系统性考古研究与修复</strong>。他清理了淤积的废墟，绘制了精确的建筑图纸，并首次从历史学角度阐述了其价值。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的工作具有开创性意义。此前，城堡只是地方志里的一个模糊地标；此后，它被确立为<strong>国家级的历史纪念碑</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "吉尔斯费尔德在报告中写道：“每一块崩落的石头，都在诉说着一个时代的语言。我们的责任不是重建一个虚假的过去，而是保护这些真实的伤痕，让后代能触摸到历史的质地。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是他的努力，为20世纪更全面的修复奠定了基础。今天城堡内博物馆的许多核心藏品与认知，都得益于他一个多世纪前的开创性工作。他让城堡从“废弃要塞”变成了“文化丰碑”。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "环绕城堡的<strong>奥伊湖</strong>，本身就是一个传说的渊薮。当地人相信，湖中居住着一位古老的<strong>女水妖</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说她本是萨雷马岛上一位美丽的姑娘，因爱情被背叛，悲痛欲绝地跳入湖中，化为了精灵。她会在月圆之夜出现在水面，用迷人的歌声引诱负心汉或粗心的旅人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但她的故事也有温柔的一面。据说，每当城堡面临真正的危机时，湖面会升起浓雾，掩护守军或迷惑敌人。人们说，这是女妖在守护她故乡的土地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡本身也有“幽灵”传说。其中最著名的是“<strong>跳窗主教</strong>”的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传在某个动荡的年代，一位主教为了不落入敌手受辱，身披全套主教礼袍，从城堡高高的塔楼窗户纵身跃下，坠入下方的护城河。至今，有访客声称在黄昏时，会看到一个模糊的、身着长袍的身影在塔楼窗口徘徊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更有趣的是一个关于“<strong>永恒守卫</strong>”的习俗。萨雷马人性格独立坚韧，历史上以出色的水手和士兵闻名。当地有种说法：所有在守护岛屿战斗中牺牲的英灵，最终都会回到库雷萨雷城堡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们的灵魂融入石墙，成为城堡看不见的永恒守卫。因此，这座城堡在爱沙尼亚人心中，不仅是建筑，更是<strong>民族精神不灭的化身</strong>。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当你穿过吊桥，走入库雷萨雷城堡厚重的门洞，你所踏足的不仅是中世纪建筑的典范，更是一部立体、坚韧的<strong>波罗的海微观史</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它没有维也纳美泉宫的奢靡，也没有法国香波堡的浪漫。它的魅力在于其<strong>真实的粗糙感</strong>与<strong>幸存者的叙事</strong>。每一处火炮轰击的疤痕，每一次改建留下的层叠砖石，都在沉默地讲述着生存、适应与坚守。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城堡诠释了“边缘”的力量。它远离大陆权力中心，却在每一次历史狂澜中，以孤岛般的定力存续下来，最终成为爱沙尼亚民族国家叙事中不可或缺的基石。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，历史不是教科书上遥远的名词，而是可以触摸的冰凉石壁，是眺望塔楼上刮过的、带着海盐气息的疾风。读懂库雷萨雷，便是读懂了波罗的海小国在欧陆巨人夹缝中，那份独有的清醒、务实与顽强。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/viljandi-order-castle-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维尔扬迪城堡废墟（汉萨同盟时期要塞）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Viljandi Order Castle Ruins</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/haapsalu-castle-estonia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈普萨卢城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Haapsalu Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rummu-quarry" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    鲁
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">鲁姆采石场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rummu Quarry</p>
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
