import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '哈勒姆历史溯源｜荷兰黄金时代的秘密心脏与英雄之城的前世今生',
  description: '深入荷兰哈勒姆，探寻比阿姆斯特丹更古老的尘封往事。从悲壮围城到印刷术争议，从哈尔斯的画笔到隐秘庭院，揭秘一座英雄之城的完整记忆。',
}

export default function HaarlemOldTownHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '哈勒姆老城', href: '/attractions/haarlem-old-town-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`哈勒姆老城・Haarlem・荷兰・哈勒姆`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当人们涌向阿姆斯特丹的运河时，仅二十分钟车程外，另一座古城正静默地守护着荷兰真正的灵魂。这里不是水城，而是“沙丘上的花城”；它的历史不是泛黄的书页，而是依然在鹅卵石街道上搏动的血脉。<strong>哈勒姆</strong>，一个在西班牙铁蹄下宁死不屈的英雄之城，一个孕育了艺术大师与可能改变了世界技术的争议之地。抛开游玩攻略，走进哈勒姆的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`哈勒姆老城`} />
                <InfoRow label="英文名称" value={`Haarlem`} />
                <InfoRow label="正式名称" value={`Haarlem`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`哈勒姆`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "哈勒姆的故事，始于一片古老的沙丘森林。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早在公元10世纪左右，一片名为“哈勒姆”的定居点，就在肯讷默兰的沙质高地上悄然出现。它的名字“Haarlem”，源自古荷兰语“Haarlo-heim”，意为“建在高地上森林中的家园”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这精准地描绘了它的地理本质：一个位于<strong>斯帕尔讷河</strong>畔，受沙丘屏障保护的聚落。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1245年11月23日</strong>，是铭刻在城市基因里的日子。荷兰伯爵<strong>威廉二世</strong>授予了哈勒姆城市权。这份特许状，如同一把钥匙，为这座小镇打开了通往繁荣与磨难并存的中世纪大门。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "获得城市权后，哈勒姆迅速成长为地区中心。它最初的核心功能是贸易与防御。宽阔的<strong>斯帕尔讷河</strong>直通北海，让哈勒姆早早成为了啤酒酿造与纺织业的重镇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而其坚固的城墙，则在未来证明了选址的前瞻性。城市的徽章——一把银色宝剑与四颗红星——自那时起便闪耀在旗帜上，预言着它将与刀剑和鲜血紧密相连的命运。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "与阿姆斯特丹的“水”不同，哈勒姆的底色是“沙”与“土”。这份坚实，塑造了它沉稳、内敛，却又坚韧不屈的独特气质。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说城市权是哈勒姆的诞生礼，那么<strong>1572-1573年的哈勒姆之围</strong>，则是其成人礼，一场淬炼出城市灵魂的炼狱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在荷兰反抗西班牙统治的“八十年战争”中，哈勒姆坚定地站在了奥兰治亲王一方。<strong>1572年12月11日</strong>，传奇的西班牙将军<strong>法德里克·德·托莱多</strong>率一万五千精兵，将哈勒姆围得水泄不通。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城内守军仅三千，加上武装市民，也不过四千之众。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但哈勒姆人展现了惊人的韧性。围城持续了漫长的七个月。市民们拆掉房屋获取石弹，用煮沸的焦油和沥青泼向攻城的敌人。最惨烈的战斗发生在城北的<strong>血堤</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "西班牙人筑起高高堤坝，试图截断湖水淹没城市。双方在这条堤坝上反复拉锯，鲜血浸透了沙土，“血堤”之名由此而来。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们已吃光了猫、狗、老鼠。树皮和皮鞋也成了食物。但没有人谈论投降。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "—— 一位匿名守城者的日记片段" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最终，因饥饿和外部援军溃败，哈勒姆在<strong>1573年7月13日</strong>有条件投降。虽然战败，但其旷日持久的抵抗极大地鼓舞了全尼德兰的士气，拖住了西班牙主力，为北方联省赢得了宝贵时间。这场围城，将“不屈”二字永久刻入了哈勒姆的市墙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "劫难之后，迎来辉煌。17世纪，荷兰黄金时代的阳光同样照亮了哈勒姆。它没有选择与阿姆斯特丹竞争全球贸易，而是成为了富庶的“后花园”与文化艺术中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这一时期，哈勒姆留下了两个深刻印记。一是遍布老城的“<strong>霍夫耶</strong>”——那些隐藏在寻常门洞后的宁静慈善庭院。它们为独居老年妇女提供住所，是荷兰黄金时代社会慈善的实体见证，至今仍有人居住，时光在此仿佛停滞。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "二是它作为<strong>郁金香狂热</strong>时期的重要交易中心。虽然投机风潮最终破裂，但哈勒姆周边肥沃的沙土，使其日后成为了世界闻名的“球茎花卉区”的心脏。这座城市的名字，从此与花香紧密相连。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "哈勒姆的街巷间，徘徊着两位巨人的身影。一位关乎可能的“世界第一”，另一位则用画笔定义了荷兰的市井灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "首先，是充满争议的<strong>劳伦斯·科斯特</strong>。在古腾堡被公认发明西方活字印刷术之前，哈勒姆一直流传着一个骄傲的传说：发明者是本地人科斯特。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据说在<strong>1420年</strong>左右，科斯特在哈勒姆的<strong>圣巴夫教堂</strong>附近散步，用刀在树皮上刻字给孩子玩，无意中发现了活字印刷的原理。他随后用铅和锡改良，并成功印刷了宗教文本。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“那个叫劳伦斯的人，是第一个发明印刷术的人，他用自己发明的字符印刷了一本书……此事发生在神圣罗马帝国皇帝西吉斯蒙德的时代。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "—— 16世纪荷兰历史学家哈德良·尤尼乌斯的记载" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管缺乏确凿的早期印刷品实物证据，且国际主流学界仍将荣誉归于古腾堡，但哈勒姆人对此深信不疑。市中心广场上矗立着<strong>科斯特的铜像</strong>，本地博物馆也珍藏着相关古籍。这个传说已不再是简单的史实之争，它成为了城市文化自信与独立精神的象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位无可争议的大师，是画家<strong>弗朗斯·哈尔斯</strong>。他一生绝大多数时光都在哈勒姆度过，并在这里彻底革新了肖像画艺术。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "哈尔斯笔下的人物，不再是文艺复兴时期那般庄严静穆。他的市民警卫连肖像、酒馆里的乐师、咧嘴大笑的孩童，都充满了瞬间的动感与蓬勃的生机。那洒脱不羁的笔触，仿佛能让人听见画中人的喧哗与酒杯的碰撞。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的代表作《<strong>快乐的酒徒</strong>》和《<strong>圣乔治市民警卫队官员之宴</strong>》，捕捉的正是黄金时代哈勒姆市民阶层的自信、乐观与团体精神。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位大师晚年却陷入穷困。<strong>1664年</strong>，哈勒姆市政府不得不向他发放年金，并提供免费的煤炭与食粮以度日。最终，他安息在城市的<strong>圣巴夫大教堂</strong>内。如今，<strong>哈勒姆的弗兰斯·哈尔斯博物馆</strong>就坐落于他曾授艺的旧养老院内，收藏着世界最丰富的哈尔斯画作。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从科斯特到哈尔斯，一位代表了创造的“可能性”，一位抓住了生活的“真实性”。他们共同勾勒出哈勒姆精神的两个侧面：敢于宣称“第一”的骄傲，与忠实记录世俗欢愉的诚实。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了英雄史诗与大师往事，哈勒姆的民间记忆里，还住着一个庞然大物。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于<strong>哈勒姆建城</strong>，有一个古老而有趣的巨人传说。相传在远古时代，此地被一个凶恶的巨人统治，他盘踞在通往北海的通道上，向过往船只勒索高昂的过路费。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一位来自南方的勇敢骑士听闻此事，决定前来挑战。经过一场惊天动地的搏斗，骑士最终斩杀了巨人。巨人的鲜血渗入大地，滋养了沙丘，使其变得异常肥沃。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而巨人庞大的身躯倒下，其轮廓便化作了哈勒姆最初的城市雏形。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“巨人倒下之地，河流变得温顺，沙土开出鲜花。人们在他心脏的位置建起广场，在他目光所及之处筑起教堂塔楼，从此安居乐业。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "—— 当地流传的古老歌谣片段" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说巧妙地解释了哈勒姆的几大特征：它控制水路交通的历史地位、周边沙土适宜花卉种植的特殊性，以及城市最初的轮廓由来。<strong>圣巴夫大教堂</strong>高耸的塔楼，在传说中被视为监视远方、守护城市的“骑士之剑”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "至今，在城市的节庆活动中，偶尔还能看到“巨人”的形象出现。它从一个恐怖的剥削者，转化为了被征服并福泽土地的神话符号，体现了人类定居点对自然环境的征服与利用的古老叙事。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "漫步在哈勒姆的老城，你踩过的每一块砖石，都可能见证过围城时的硝烟，沾染过黄金时代的颜料，或回荡着印刷机可能的初啼。这里没有迪士尼式的历史布景，只有层层累积、至今仍在使用的真实生活。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从宁死不屈的防御者，到慈善庭院的建造者，从郁金香投机客到普通肖像画家，哈勒姆的历史是一部关于“韧性”与“生活”的编年史。它告诉你荷兰的崛起并非只有阿姆斯特丹的商贾传奇，更有这些二三线城镇用血肉、智慧与日常共同构筑的坚实基础。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂哈勒姆，便是读懂了荷兰民族性格中，除海上马车夫之外的、那份如沙丘般沉静而坚韧的内核。它是一座活着的记忆之城，每一座霍夫耶，每一幅悬挂在本地博物馆的肖像，都在轻声述说：历史从未过去，它只是换了一种方式，在此呼吸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/dokkum" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    多
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">多克姆</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dokkum</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/marken-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马肯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Marken</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/oudewater-witch-weighing-house" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥德瓦特女巫称重房</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Oudewater Witch Weighing House</p>
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
