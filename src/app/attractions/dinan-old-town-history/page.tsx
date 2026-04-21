import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '迪南历史溯源｜法国中世纪小城的前世今生，从公爵之梦到时光褶皱里的传奇',
  description: '探秘法国布列塔尼的悬崖古城迪南。穿越石板路，触摸14世纪的木筋墙与英法百年战争的烽火印记，聆听圣马洛修士与公爵夫人的传奇往事，开启一场纯粹的历史漫游。',
}

export default function DinanOldTownHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '迪南老城', href: '/attractions/dinan-old-town-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`迪南老城・Dinan Old Town・法国・迪南`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在法国布列塔尼的腹地，有一座被时光遗忘的“石之要塞”。它盘踞在朗斯河陡峭的悬崖之上，不是为了观赏风景，而是为了生存与统治。这里的每一块花岗岩，都浸透着布列塔尼公国的骄傲与抗争。<strong>迪南</strong>，这个名字源自凯尔特语“Din”与“Ah”，意为“堡垒”与“河流”，精确地定义了它的命运——一座因河而生、为战而建的城池。抛开游玩攻略，走进迪南的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`迪南老城`} />
                <InfoRow label="英文名称" value={`Dinan Old Town`} />
                <InfoRow label="正式名称" value={`Dinan Old Town`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`迪南`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "迪南的故事，始于公元9世纪维京海盗肆虐的黑暗年代。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "面对北方来的掠夺者，布列塔尼的居民需要一个易守难攻的据点。朗斯河畔的陡峭悬崖，成了天然的选择。人们在高地上筑起木栅，这便是迪南最早的雏形。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字，是揭开其身世的第一把钥匙。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“Din”在布列塔尼语（一种凯尔特语言）中意为“山丘”或“堡垒”，“Ah”或“An”则指代河流。因此，“Dinan”直译便是“河畔的堡垒”。这个古老的名字，比法国本身的语言更早烙印于此。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "11世纪，随着局势相对稳定，一座石质的城堡开始取代木堡。真正让迪南从据点蜕变为城市的，是布列塔尼公爵的野心。13世纪末，<strong>公爵让一世</strong>看中了这里扼守水陆要冲的战略地位。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他授予迪南城市宪章，并着手大规模建设城墙与防御工事。这道绵延近三公里的宏伟石墙，并非为了禁锢，而是为了宣告：这里，是布列塔尼公国权威与财富的象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城墙之内，商人与工匠聚集。依托朗斯河航道，迪南的亚麻布和皮革远销英格兰与低地国家。财富在陡峭的街巷里积累，一座座华丽的木筋墙房屋拔地而起。迪南，就此从军事堡垒，成长为布列塔尼最繁荣的城镇之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的起源，是凯尔特人的智慧，是公爵的权谋，更是乱世中生存与发展的鲜活样本。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "迪南的历史，是一部用石头写就的布列塔尼编年史。其中两个关键事件，如同刀劈斧凿，永久地改变了它的肌理与命运。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道印记，来自14世纪的<strong>布列塔尼继承战争</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场持续二十余年的内战，本质是英法两国在布列塔尼的代理人战争。迪南因其忠诚与坚固，成为亲法派势力的核心堡垒。1344年，亲英的蒙福尔伯爵军队兵临城下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "围城战异常惨烈。但迪南的城墙经受住了考验。这场胜利不仅保住了城市，更极大地提振了布列塔尼公国的士气。战争结束后，胜利的一方对迪南慷慨回馈。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更多的特权，更丰厚的贸易许可，涌入这座城市。我们今天看到的市中心那些最精美、最古老的木筋墙豪宅，许多都建于这段战后繁荣的“黄金时代”。战火淬炼了它的筋骨，和平则赋予了它华丽的容颜。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二道更深的烙印，则与一场著名的单挑紧密相连——<strong>“三十人之战”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1351年，在迪南与邻近的<strong>若斯兰</strong>之间的一片空地上，爆发了一场史诗般的中世纪骑士对决。布列塔尼法派与英派各选出三十名精锐骑士，约定以团队比武决一胜负。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场战斗惨烈异常，最终只有少数几人存活。虽然迪南并非直接战场，但这场被誉为“骑士精神最后辉煌”的对决，就发生在它的视野之内，并被载入编年史，成为布列塔尼乃至整个欧洲骑士传奇的一部分。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它让迪南的名字，与中世纪最极致的尚武荣光联系在了一起。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最后，是<strong>英法百年战争</strong>的尾声。此时的迪南，城墙已更加完善。它成功抵御了数次围攻，成为布列塔尼地区少数未被英格兰人长期占领的城镇之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这段历史最直观的遗产，就是那保存完好的、长达2.7公里的环形城墙与四大城门。走在城墙步道上，你触摸的不是景点，而是一个小城在大国夹缝中求存自立、捍卫自身“布列塔尼性”的钢铁意志。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "迪南的传奇，不仅由王公贵族书写，更与一些深刻影响欧洲思想界的灵魂息息相关。其中，<strong>巴泰勒米修士</strong>的故事，最为动人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他并非生于迪南，却将生命的最后二十年与全部的学术心血，都留在了这里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>巴泰勒米</strong>，生于15世纪中叶的英格兰。他是一位本笃会修士，更是一位才华横溢的人文主义学者、历史学家。因卷入英格兰的政治与宗教风波，他被迫流亡欧洲大陆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1509年，他辗转来到布列塔尼，被迪南的宁静与厚重的文化氛围所吸引，最终定居于此，并在迪南的<strong>圣马洛修道院</strong>度过了余生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在迪南，他完成了一部不朽的巨著——<strong>《布列塔尼编年史》</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "他在日记中曾这样描述迪南的工作：“在这座河畔高城的寂静之中，我终于能听见历史本身的声音。朗斯河的流水，仿佛在冲刷时间的尘埃。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这部用拉丁语写就的史书，是系统记录布列塔尼早期历史的最重要文献之一。巴泰勒米以严谨的考据，将凯尔特神话、民间传说与历史事件编织在一起，竭力构建布列塔尼独立的民族历史叙事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在布列塔尼公国已被并入法国的时代，这项工作具有非凡的文化抵抗意义。他让布列塔尼人知道“他们从何而来”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1516年，巴泰勒米在迪南去世，葬于圣马洛修道院。他的墓志铭上刻着：“他使布列塔尼的历史免于湮没。”如今，在迪南老城的街巷中漫步，你几乎找不到他的雕像或显赫铭牌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但他的存在，如同空气般渗透在古城的学术气质里。他代表了迪南的另一面：不仅是武士的堡垒，也是学者的避风港，是思想得以沉淀、文明得以传承的褶皱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与迪南紧密相连的女性，是<strong>安娜·德·布列塔尼</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位布列塔尼的女公爵，一生周旋于法王之间，竭力维护公国的自治权。迪南，是她忠诚的领地与重要的财政来源地。她多次到访迪南，并确认了城市的各项特权。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说中，她非常喜爱迪南出产的精致亚麻。她的关注与庇护，确保了迪南在政治动荡中的持续繁荣。她的雕像屹立在城堡旁，目光越过城墙，仿佛仍在守护这片土地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一位流亡学者，一位护国公爵夫人。他们的故事，一隐一显，共同构成了迪南人文精神的底色：既有对独立与身份的顽强坚守，也有对知识与历史的深沉敬意。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在迪南，最脍炙人口的传说并非关于国王或英雄，而是关于它的守护圣人——<strong>圣马洛</strong>，以及他与恶魔的史诗较量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "圣马洛是一位6世纪从威尔士渡海而来的凯尔特圣徒，他在迪南地区传教，并成为了第一任主教。传说中，迪南所在的悬崖区域，曾是恶魔盘踞的巢穴，百姓深受其扰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "圣马洛决心为民除害。他与恶魔展开了一场持续三天三夜的激烈搏斗，最终，凭借坚定的信仰，他将恶魔逼至朗斯河边的悬崖绝境。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "民间故事这样描述结局：“圣马洛举起他的主教权杖，口中念诵神圣的经文。权杖击打在地面上，迸发出耀眼的光芒。恶魔发出凄厉的哀嚎，从悬崖上一跃而下，坠入滚滚的朗斯河中，从此消失无踪。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "为了彻底镇压邪灵，圣马洛在恶魔跳崖的地方，亲手奠基，修建了迪南的第一座教堂——这就是后来<strong>圣马洛教堂</strong>的起源。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "人们还说，教堂地下某些古老的石块上，至今仍留有圣马洛权杖敲击的凹痕，以及恶魔爪牙挣扎的印记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说生动解释了迪南地理与宗教的起源：险峻的悬崖是因与恶魔战斗而形成，城市的建立则始于圣洁对邪恶的净化。每年相关的宗教节日里，这个故事仍被老人们津津乐道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不仅仅是一个神话。它反映了早期布列塔尼基督徒将异教自然力量（险峻的地形）“基督教化”的过程，也将迪南险要的地理特征，融入了神圣的叙事之中，赋予这座城市一层神圣的护佑之光。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走在通往港口的陡峭<strong>卢尔戈街</strong>上，风声穿过古老的门廊，仿佛还能听到那场远古对决的回响。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日的迪南，被誉为“法国最美小镇之一”。但它的美，绝非仅有明信片式的精致。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当你走在它的石板路上，指尖划过冰冷的花岗岩墙，你触摸的是布列塔尼公国不甘臣服的脊梁。当你仰望那些倾斜了六百年的木筋墙房屋，你看到的是商人世家在战火间隙积累的财富与审美。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当你驻足于圣马洛教堂，你聆听的是一个关于信仰征服荒野的古老回声。当你想起巴泰勒米修士在烛光下奋笔疾书，你感受到的是一座小城所能承载的、超越时空的文化重量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "迪南是一座<strong>活的中世纪博物馆</strong>，但更是一座<strong>时间的褶皱</strong>。它将战争的创伤、贸易的繁荣、信仰的传奇、学者的孤寂，全部压缩、保存进了那一道道石缝与木纹之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有巴黎的宏大叙事，只有属于布列塔尼的、细腻而坚韧的地方史诗。读懂迪南，便是读懂一个地区如何用石头、意志与笔墨，捍卫自己独特的身份与记忆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这是一次纯粹的历史沉浸之旅。在这里，每一步，都是与过去的对话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/chateau-de-beynac-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝纳克城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Beynac</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/perouges-medieval-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩罗日中世纪村庄</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pérouges</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bourges-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布尔日大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bourges Cathedral</p>
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
