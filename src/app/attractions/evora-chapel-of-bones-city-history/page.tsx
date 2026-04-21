import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃武拉历史溯源｜人骨教堂背后，葡萄牙“博物馆之城”的前世今生与名人传奇',
  description: '揭秘埃武拉人骨教堂震撼真相与古城两千年的兴衰。从罗马神庙到王室传奇，探索被列入世界遗产的葡萄牙“博物馆之城”。',
}

export default function EvoraChapelOfBonesCityHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '埃武拉人骨教堂与古城', href: '/attractions/evora-chapel-of-bones-city-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`埃武拉人骨教堂与古城・Évora (Chapel of Bones & Historic Centre)・葡萄牙・埃武拉`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在葡萄牙阿连特茹平原的阳光下，<strong>埃武拉</strong>是一座被完整封存在时光琥珀中的城市。它的城墙内，层层叠叠着罗马帝国、摩尔人、葡萄牙王室的鲜明印记，被誉为一座“活生生的博物馆”。然而，让世界记住它的，却是圣方济各教堂内那座用五千具骸骨砌成的<strong>人骨教堂</strong>。这座“死亡圣殿”的静默呐喊，与古城的明媚生机形成骇人又迷人的对照。抛开游玩攻略，走进埃武拉的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`埃武拉人骨教堂与古城`} />
                <InfoRow label="英文名称" value={`Évora (Chapel of Bones & Historic Centre)`} />
                <InfoRow label="正式名称" value={`Évora (Chapel of Bones & Historic Centre)`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`埃武拉`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃武拉的起源，深埋在伊比利亚半岛混血的土壤中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早在<strong>罗马帝国</strong>势力抵达之前，这里已是卢西塔尼亚人（一支凯尔特部落）的重要聚居地。但真正赋予这座城市雏形与名字的，是罗马人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>公元前57年</strong>，罗马将军<strong>尤利乌斯·凯撒</strong>的军队在此设立军事据点，称其为“<strong>Liberalitas Julia</strong>”。名字中的“Julia”源于凯撒的家族名，而“Liberalitas”意为“慷慨”，或许暗指此地丰饶。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“埃武拉”（Évora）之名，则普遍认为源于拉丁语“<strong>Ebora</strong>”。这个词很可能与凯尔特语的“<em>eburos</em>”（紫杉树）有关，这种树木被古代凯尔特部落视为神圣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马人看中了它的战略位置。这座城市很快从要塞发展为<strong>卢西塔尼亚省</strong>的重要行政与商业中心，修筑了宏大的神庙、浴场与城墙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元四世纪后，随着罗马帝国衰落，埃武拉先后被日耳曼系的苏维汇人、西哥特人占据，基督教开始在此扎根。然而，真正改变城市肌理的，是来自南方的征服者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>公元715年</strong>，北非的<strong>摩尔人</strong>占领了埃武拉。在穆斯林统治的五个世纪里，他们强化了防御体系，引入了精巧的灌溉技术、建筑风格与学问。城市被称作“<strong>Yabura</strong>”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "我们今天看到的埃武拉，其狭窄曲折的白色街巷格局，便深深烙印着摩尔式“麦地那”（ Medina，即老城区）的基因。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃武拉的城墙，是一部可以用手指触摸的编年史。穿行其间，几个决定性的历史时刻，塑造了它独一无二的容颜。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一枚印记，来自罗马的荣光。城市制高点上矗立的<strong>狄安娜神庙</strong>，是葡萄牙境内保存最完好的罗马遗迹。14根高大的科林斯石柱，在伊比利亚的蓝天下显得孤傲而永恒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它并非献给狩猎女神，而更可能是一座帝国祭祀神庙。它的幸存是个奇迹。中世纪时，它曾被改造成城堡的箭塔，这粗粝的“再利用”反而保护了它，使其免遭彻底拆除。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二枚印记，是<strong>葡萄牙黄金时代</strong>的加冕。1165年，传奇的“无畏者”<strong>杰拉尔德</strong>骑士从摩尔人手中奇袭夺回埃武拉，这座城市正式并入葡萄牙王国。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此后，它迎来了鼎盛时期。尤其在15-16世纪，埃武拉成为阿维什王朝最青睐的居所之一，甚至一度是王室宫廷所在地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>曼努埃尔一世</strong>国王在此兴建了宏伟的宫殿（今埃武拉大学部分建筑）。他的儿子，<strong>若昂三世</strong>于<strong>1559年</strong>在此创立了<strong>耶稣会大学</strong>（即后来的埃武拉大学），使城市一跃成为葡萄牙仅次于科英布拉的学术与文化中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是在这段全盛期，城市的宗教建筑达到了艺术的顶峰。而其中最为诡异的一座，便是<strong>人骨教堂</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的诞生，源于一个沉重而务实的历史背景。16世纪下半叶，埃武拉城内外墓地激增，占据了宝贵的土地。同时，方济各会的修士们秉持着“<strong>肉体速朽，精神永恒</strong>”的苦修理念。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，他们决定收集城内42座修道院墓地的骸骨，用以建造一座“<strong>骨屋</strong>”（Capela dos Ossos），既解决了墓地拥挤的世俗问题，又完成了对信徒关于死亡与救赎的终极警示。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>约5000具</strong>男女老少的骨骼，被精心拆解、清洗、排列，砌满了教堂的墙壁与立柱。拱顶则由肢骨与头骨交替装饰而成。入口处那句著名的铭文，道尽了全部哲学：“<strong>我们在此等待你们的骨骸</strong>”（Nós ossos que aqui estamos, pelos vossos esperamos）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这不是恐怖，而是一堂用死亡教授的、震撼灵魂的公开课。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃武拉的辉煌，不仅镌刻在石头上，也流淌在人物的命运中。这里走出过学者，也见证过王权的血腥更迭。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>若昂二世</strong>（1455-1495），这位被称为“完美君王”的葡萄牙国王，其人生中最戏剧性的一幕就发生在埃武拉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1483年，权势滔天的布拉干萨公爵在埃武拉被若昂二世公开审判并当场处决。此举震惊全国，标志着王权对贵族的绝对胜利。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，王室的悲剧阴影也笼罩着这座城市。若昂二世唯一的合法儿子、王储<strong>阿方索</strong>，在<strong>1491年</strong>于埃武拉附近的塔古斯河畔意外坠马身亡。国王的世系断绝，这成为他晚年最大的痛苦。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "编年史家记载了国王在埃武拉听闻噩耗时的反应：“他陷入巨大的悲痛，沉默许久，然后说，‘我为我的王国和我的子民哀悼。’”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "王储的葬礼在埃武拉举行。这次死亡彻底改变了葡萄牙乃至世界历史的走向——王位最终传给了若昂二世的堂弟曼努埃尔一世，正是后者开启了通往印度的航路，迎来了葡萄牙的巅峰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃武拉不仅承载王室悲欢，也滋养思想。<strong>安德烈·德·雷森迪</strong>（约1498-1573）是其中佼佼者。他是若昂三世国王的御用编年史官，也是埃武拉大学的首批教授之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "作为一位顶尖的<strong>人文主义者</strong>，雷森迪的足迹遍布欧洲，与伊拉斯谟等大学者通信。但他最终选择回到故乡埃武拉，将余生奉献给教学与写作。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他最重要的贡献，是编纂了涵盖葡萄牙历史、地理、文化的皇皇巨著。他系统性地描述了埃武拉的古代遗迹，包括那座罗马神庙，堪称葡萄牙最早的考古学者之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的宅邸至今仍保留在古城中，见证着一个学者如何用笔墨捍卫一个时代与一座城市的记忆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃武拉的大学，在他的时代，成为新思想与旧世界碰撞的熔炉。直到<strong>1759年</strong>，首相比兰公爵因权力斗争驱逐耶稣会，大学被迫关闭，埃武拉的学术星光才逐渐黯淡，但这片土地的人文底蕴早已深植。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在埃武拉，冰冷的石头与骸骨之间，也流传着温暖或神秘的口述故事。它们让历史有了温度，也让建筑有了灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于那座<strong>罗马神庙</strong>为何能历经沧桑而屹立不倒，当地有一个传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在中世纪，人们已不知道这座宏伟建筑的来历。有传言说，它是<strong>巨人</strong>或<strong>魔法师</strong>一夜之间建造的宫殿。一位名叫<strong>布拉斯</strong>的年轻修道士，对此充满好奇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他日夜在石柱下祈祷冥想。一天夜晚，他在恍惚中看到一位身穿古罗马长袍的老者。老者对他说：“此乃祭祀天地诸神之所，非俗世宫殿。它承载的敬畏之心，将保其柱石不朽。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "传说中，修道士布拉斯醒来后，在石柱基座上发现刻有模糊的拉丁铭文，证实了老者的说法。他毕生守护这座“异教”神庙，并说服领主将其用作防御塔楼而非采石场，从而奇迹般地将其保存下来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说，反映了当地人对古老遗迹朴素的保护意识，将其归因于神谕而非历史知识。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而关于<strong>人骨教堂</strong>，除了官方的宗教解释，民间也衍生出更富人情味的想象。有故事说，这些骸骨并非全部来自无名墓穴。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中一些，属于一对因家族世仇无法结合的恋人。他们生前未能在一起，死后骸骨却被命运之手并排砌入同一面墙，指尖骨仿佛轻轻相触，获得了永恒的“团聚”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说是，在月圆之夜仔细聆听，能听到墙壁里传来低语，不是哀嚎，而是平静的祈祷声。那是虔诚的方济各会修士的骨骸，仍在为每一个踏入此地的灵魂默默祈福。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，柔和了人骨教堂令人窒息的直接冲击，为死亡赋予了慰藉与浪漫的注解，也体现了葡萄牙民族面对生死时那种独特的、混合着忧郁与达观的“<strong> Saudade </strong>”（宿命式怀旧）情感。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在埃武拉，你不是在参观一个博物馆，而是直接走入了一本立体的、仍在使用中的历史教科书。从罗马柱的凉意，到摩尔小巷的曲折，从曼努埃尔式窗棂的华丽，到人骨教堂铭文的冰冷——每一步，都踩在层层叠叠的时间之上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座“博物馆之城”的真正价值，在于它<strong>完整的历史层次感</strong>与<strong>真实的生活气息</strong>。它没有为了旅游而将自己彻底舞台化。居民依然在罗马水道旁散步，学生在古老的回廊下争论，集市在哥特式拱门前喧闹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而人骨教堂，这举世罕见的景象，绝非猎奇之所。它是一个哲学命题的实体化，是西方中世纪以来“<strong>勿忘终亡</strong>”（Memento Mori）思想的极致表达。它迫使现代访客停下脚步，与死亡对视，思考生命的意义与局限。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃武拉教会我们，历史不仅是王侯将相的丰功伟绩，也是普通修士的执念、无名工匠的技艺，是五千个曾经鲜活、最终平等的灵魂共同砌成的警示与祈祷。在这里，生与死、辉煌与寂灭、永恒与刹那，达成了惊人的共生与和解。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂这些，你眼中的埃武拉，将不再只是一座阳光明媚的白色古城，或一个毛骨悚然的打卡点。而是一首关于时间、信仰与人类处境的，沉默而磅礴的史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/alcobaca-monastery" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔科巴萨修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alcobaça Monastery</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/amarante-portugal-tamega-river" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿马兰特（塔梅加河畔的浪漫小镇）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Amarante</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/viseu" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维塞乌古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Viseu</p>
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
