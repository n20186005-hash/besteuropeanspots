import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '莫尔科特历史溯源｜瑞士最美湖畔阶梯村庄，被时光封存的前世今生与名人传奇',
  description: '探寻莫尔科特，瑞士提契诺的湖畔珍宝。穿越千年，从渔村到贵族避难所，解密圣玛丽亚教堂壁画、萨拉查别墅故事，与隐居此地的传奇人物对话。',
}

export default function MorcoteSwissLakeLuganoHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '瑞士', href: '/destinations/europe' },
            { label: '提契诺州', href: '/destinations/europe' },
            { label: '莫尔科特', href: '/attractions/morcote-swiss-lake-lugano-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`莫尔科特・Morcote・瑞士・提契诺州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在卢加诺湖南端，一座村庄像被时光之手精心摆放的模型，自湖畔层层叠叠，直攀山腰。它被誉为“瑞士最美村庄”，但它的美，绝非仅来自明信片般的风景。<strong>莫尔科特</strong>，这个名字背后，是一部湖岸山崖上的微型编年史，交织着渔民的坚韧、瘟疫的创伤、贵族的优雅与艺术家的孤寂。这里是权力触角的末梢，也是灵魂寻找宁静的终点。抛开游玩攻略，走进莫尔科特的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`莫尔科特`} />
                <InfoRow label="英文名称" value={`Morcote`} />
                <InfoRow label="正式名称" value={`Morcote`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`提契诺州`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "莫尔科特的起源，深藏在湖水的涟漪与山石的褶皱里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字，如同从水中打捞起的古老陶片。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一种观点认为，“Morcote”可能源自拉丁语“<em>mur</em>cus”，意为“截断”或“缩短”，或许指代此处深入湖心的半岛地形。另一种更富诗意的民间词源，则联系到“mors”（死亡），暗指其曾作为墓地或与死亡相关的历史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "不过，岩石与羊皮纸给出了更确切的答案。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早在<strong>公元984年</strong>，一份神圣罗马帝国皇帝奥托三世的赠予证书中，就首次提到了“Murcao”。那时，它已是卢加诺湖畔一个不起眼的小定居点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的诞生，纯粹出于生存。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "陡峭的山势迫使最初的居民——很可能是罗马化的凯尔特人——将房屋紧密地修建在临湖的狭窄地带和山崖上。渔业与有限的农业是生命的源泉。这种地理的制约，反而塑造了它独一无二的“阶梯式”村落肌理，这并非艺术设计，而是生存智慧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "中世纪的莫尔科特，命运与湖水对岸的伦巴第大都市米兰紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>公元1422年</strong>，是一个关键转折点。米兰公爵菲利波·玛丽亚·维斯孔蒂，将莫尔科特作为封地赏赐给来自波河流域的贵族<strong>德·马里家族</strong>。这一举动，不仅赋予了村庄一定的地方自治特权，更在湖岸埋下了一颗种子——一颗关于防御、税收与独立身份的种子。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "莫尔科特的历史，并非波澜壮阔的史诗，而是镌刻在石阶、教堂墙壁与别墅回廊上的细腻叙事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个深刻印记，是它的<strong>自治时期</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "得益于维斯孔蒂家族的赏赐，莫尔科特在数百年间享有罕见的特权。它拥有自己的法规、市场权，甚至一支小型船队来巡逻湖面并征收过往商船的关税。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“莫尔科特的港口的官员，有权对途经卢加诺湖的货物收取通行费。”——摘自中世纪地方特权文件摘要" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座“湖上哨所”因此而繁荣。财富积累体现在<strong>圣玛丽亚教堂</strong>的兴建与扩建上。这座矗立于村庄最高处的教堂，并非一开始就如此宏伟。它的钟楼最初是一座瞭望塔，守卫着湖疆。后来，才逐步扩建为今天我们看到的，融合罗马式与巴洛克风格的宁静圣地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个印记，是<strong>灾难与重建</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>16世纪</strong>，瘟疫的黑帆多次掠过湖面。莫尔科特人口锐减，自治的光辉也因外部势力的更迭（先后受瑞士联邦统治）而逐渐黯淡。然而，正是在相对沉寂的时期，它迎来了另一种形式的关注——成为<strong>贵族与富商的静谧避世地</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这引出了第三个印记：<strong>萨拉查别墅的传奇</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>19世纪末</strong>，一位名叫<strong>理查德·费里-萨拉查</strong>的匈牙利裔贵族与艺术收藏家，彻底爱上了莫尔科特。他并非仅仅建造一座豪宅，而是在湖畔创造了一个梦幻的微缩世界。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他买下大片土地，修建了如今被称为<strong>萨拉查别墅</strong>的宏大庄园。但这只是开始。他在庄园花园中，精心建造了一座充满东方与古典风情的“天堂剧场”——一个由柱廊、拱门、雕像和异国植物构成的迷宫。这里的每一尊雕像、每一段柱廊，都是他从欧洲各地搜寻来的古董原件或精心复刻的杰作。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座别墅，不是权力的象征，而是一个孤独灵魂为自己打造的、可以沉浸于艺术与历史的“乌托邦”。它标志着莫尔科特从一个自治的渔村，转变为一个吸引欧洲精致文化阶层的精神绿洲。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "莫尔科特的峭壁与湖光，似乎专门吸引那些在世俗中感到疏离，渴望在寂静中寻找永恒回声的灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>乔瓦尼·塞加拉 —— 被遗忘在石阶上的诗人</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在莫尔科特主阶梯旁的一堵旧墙上，嵌着一块不起眼的石碑，上面刻着：“<strong>乔瓦尼·塞加拉</strong>，诗人，1868-1933”。他是莫尔科特本土孕育出的，或许也是瑞士意大利语区最重要的诗人之一，却长期被主流文学史所忽略。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "塞加拉的一生，几乎都与这座村庄绑定。他出生于此，成长于湖光山色之中，后成为一名小学教师。他的诗歌，完全扎根于提契诺的乡土。他不是歌颂壮丽山河，而是凝视着“<strong>渔民粗糙的双手</strong>”、“<strong>老妇人祈祷的念珠</strong>”和“<strong>被风雨侵蚀的墙壁</strong>”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的诗歌语言朴素、坚实，充满了对普通劳动者尊严的礼赞，以及对现代文明侵袭古老乡村生活的深切忧虑。在瑞士德语区与法语区文化占主导的语境下，他坚持用母语——伦巴第方言写作，捍卫着这片土地的文化根脉。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我的诗歌就在这里，在这些街道上，在这些面孔里，在这片湖水的沉默中。我不需要去远方寻找缪斯，她就在我每天走过的石阶上休息。”—— 乔瓦尼·塞加拉（据其友人回忆转述）" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他隐居在村庄高处一所简朴的房子里，白天教书，夜晚写作。他的作品就像莫尔科特的建筑，没有浮华的装饰，只有层层递进的内在力量与深沉情感。今天，在莫尔科特，你或许找不到他的纪念馆，但他的精神，早已化为村庄气质的一部分——那种内敛、坚韧、与土地紧密相连的诗意。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>恩斯特·弗里德里希·楚迪 —— 异乡人最后的“天堂剧场”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说塞加拉是土地孕育的儿子，那么<strong>恩斯特·弗里德里希·楚迪</strong>则是被这片土地最终接纳的流浪者。他是一位德国工程师、发明家，但更是一位才华横溢却时运不济的画家和雕塑家。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "楚迪的人生充满戏剧性。他在德国接受教育，曾为著名建筑师工作，并展现出惊人的艺术天赋。然而，他的个性与创作理念与当时的主流格格不入，生活陷入困顿。辗转多地后，他在<strong>20世纪初</strong>流亡到了瑞士，最终被莫尔科特的宁静所俘获。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他生命最后的二十多年，几乎全部奉献给了莫尔科特，特别是<strong>萨拉查别墅的花园</strong>。他被别墅主人萨拉查雇用，成为实现其艺术幻想的“首席工匠”。花园中大量精美的雕塑、浮雕和装饰性建筑构件，都出自楚迪之手。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他倾注了全部的心血与技艺，将古典神话、中世纪寓言和自己的奇思妙想，凝固在大理石与灰泥之中。这个花园，成了他失意人生的最终作品，一个真正意义上的“天堂剧场”。他于<strong>1941年</strong>在莫尔科特去世，默默无闻，长眠于此。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "楚迪的故事，是莫尔科特作为“接受者”与“抚慰者”角色的完美诠释。这座村庄不仅展示美丽，也收留那些破碎的、怀才不遇的美丽灵魂，让他们的创造成为自己永恒风景的一部分。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在莫尔科特，历史与传说在湖面的雾气中交织。最令人回味的故事，与村庄至高点——<strong>圣玛丽亚教堂</strong>墓园里的一块特殊石碑有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它被称为“<strong>黑暗之石</strong>”或“<strong>罪人之石</strong>”。不同于周围雕刻着十字架、天使的洁白墓碑，这是一块未经雕琢的粗糙黑色石板，古朴地立在墓园一隅。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说，这块石头标记着一位无法安息之人的坟墓。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在中世纪，莫尔科特曾有一名渔夫，他技艺高超，却性情乖戾，尤其憎恨教会。他一生拒绝忏悔，公开亵渎神明，甚至发誓死后绝不葬在教堂的圣地。当他死后，愤怒的村民和神父决定尊重（或说惩罚）他的意愿，将他葬在教堂墙外的荒地上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，怪事接连发生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "湖上开始无故起风暴，渔民的网总是空空如也，村庄被不祥的宁静笼罩。更有人说，在月黑风高之夜，会看到一个湿漉漉的幽灵在湖畔徘徊，发出无声的哀叹。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“他从黑暗中来，拒绝光明的慰藉；他归于黑暗，却搅动了生者的湖水。”—— 当地关于“黑暗之石”传说的古老歌谣片段" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "村民认为，这是死者灵魂无法安宁的征兆。作为折中，也是出于古老的畏惧，他们从山中采来这块沉重的黑石，压在他的坟冢上，并将坟墓移至教堂墓园的<strong>最边缘</strong>——既在圣地之内，以示宽恕；又处于边界，尊重其誓约。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，怪异之事平息。这块黑石便一直留了下来，成为一则关于信仰、誓言与社区边界感的无声训诫。游客今天看到它，更多是好奇；但对旧时的村民而言，它提醒着个体与集体、叛逆与秩序之间，那条看不见却至关重要的界线。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在莫尔科特的石阶上，你攀登的不仅是地理的高度，更是时间的层次。从湖岸到山巅，每一层平台都对应着一段历史：渔村的基石、自治时代的荣光、瘟疫后的肃穆、贵族避世的优雅，以及艺术家孤寂的吟唱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂莫尔科特，意味着理解一种“边缘的丰饶”。它从未成为历史舞台的中央，却因这种边缘性，得以保存更复杂、更细腻的人文层理。这里的建筑不是博物馆里的标本，而是仍在呼吸的有机体，砖石间浸透着普通人的生计、权贵的梦想、诗人的凝视与工匠的体温。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不是被“打造”成的美景，而是在与山湖的漫长对峙与和解中，“生长”出的传奇。最终，莫尔科特教会旅人的，或许是一种观看的方式：最美的风景，往往存在于主流视线之外，存在于时光耐心沉积的褶皱之中。它是一颗时间的琥珀，封存了瑞士意大利语区湖畔生活的完整灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/biel-bienne-medieval-old-town-watchmaking" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    比
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">比尔/比安</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Biel/Bienne</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rapperswil-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉珀斯维尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rapperswil Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/morcote-lake-lugano-switzerland" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莫尔科特</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Morcote</p>
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
