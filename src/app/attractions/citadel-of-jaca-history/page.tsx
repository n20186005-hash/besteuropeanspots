import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '韦斯卡历史溯源｜哈卡城塞前世今生，揭秘“修士国王”与欧洲第一座棱堡的传奇',
  description: '不是高迪，不是弗拉门戈。在西班牙的雪山脚下，哈卡城塞静立千年，见证了阿拉贡王国的诞生与棱堡防御的黎明。一段被遗忘的史诗，等你开启。',
}

export default function CitadelOfJacaHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '哈卡城塞', href: '/attractions/citadel-of-jaca-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`哈卡城塞・Citadel of Jaca・西班牙・韦斯卡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在比利牛斯山南麓的凛冽寒风中，哈卡城塞的棱角划破天空，这不是一座普通的城堡。它是西班牙<strong>第一座</strong>为抵御火炮而生的“星形棱堡”，一个在<strong>1592年</strong>便预见未来战争形态的军事先知。它的墙垣之下，深埋着更古老的秘密：这里是阿拉贡王国的摇篮，一位传奇的“修士国王”在此戴上王冠，开启了一个持续数百年的王朝史诗。抛开游玩攻略，走进哈卡的尘封往事，遇见属于它的铁血、信仰与时光传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`哈卡城塞`} />
                <InfoRow label="英文名称" value={`Citadel of Jaca`} />
                <InfoRow label="正式名称" value={`Citadel of Jaca`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`韦斯卡`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "哈卡的名字，源自一个古老伊比利亚部落的定居点——<strong>Iacca</strong>。罗马人到来后，它成为连接萨拉戈萨与法国南部的要道上的一个重要据点。然而，这座城市真正的命运转折，发生在公元<strong>11世纪</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，基督教王国正从北部山区艰难地“再征服”被摩尔人占领的伊比利亚半岛。哈卡，因其易守难攻的山谷地形，被选为新兴的<strong>阿拉贡王国</strong>的首都。这不是一个繁华都市的开端，而是一个军事与政治堡垒的诞生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于“Jaca”这个名字的由来，当地流传着一个充满力量感的传说。据说，最早在此建城的国王巡视时，被此地坚固的岩石和险要地势所震撼，他用拉丁语感叹道：“<strong>Hac Acta Est</strong>”（此事已成）。这句话的缩写，便演化成了城市的名字。无论传说真假，它精准地捕捉了哈卡与生俱来的气质：一个被决心与行动锻造之地。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "哈卡的基石，由<strong>1035年</strong>的一声宣告铸就。那一年，<strong>拉米罗一世</strong>在哈卡加冕，成为首任阿拉贡国王。这座小城，就此成为王国的政治与精神心脏。最初的宫殿与教堂在此建立，哈卡主教堂的罗马式建筑，至今仍保留着那份开国之初的朴拙与庄严，它是整个西班牙最早的罗马式教堂之一，被誉为“罗马式艺术的摇篮”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但真正让哈卡城塞在世界军事史上留下刻痕的，是近六个世纪后的另一项决定。<strong>1592年</strong>，腓力二世下令，在旧城堡的遗址上，建造一座全新的、革命性的堡垒。彼时，黑火药已彻底改变了战争规则，传统的垂直高墙在炮火面前不堪一击。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，一座低矮、厚重、拥有五个锐角的<strong>星形棱堡</strong>拔地而起。它的设计核心是“消除射击死角”，倾斜的土质墙面能有效弹开炮弹，交错的火力网能覆盖每一寸逼近的土地。哈卡城塞，因此成为<strong>伊比利亚半岛上第一座真正的文艺复兴式棱堡</strong>，比欧洲许多著名要塞的改建都要早。它像一枚冷静的棋子，被放置在通往法国的要冲，沉默地宣示着西班牙帝国的防御意志。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，它最严峻的考验来自<strong>19世纪初的半岛战争</strong>。当拿破仑的大军横扫欧洲时，哈卡城塞成为了抵抗的孤岛。尽管法国军队占领了城市，但这座棱堡在西班牙守军的坚持下，从未被正面攻破。它的墙壁上，至今仿佛回荡着那个铁与血时代的回声。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>拉米罗一世</strong>，这位阿拉贡的开国之君，在历史中却有一个更富戏剧性的绰号——“<strong>修士国王</strong>”。他的生平，本身就是一段在信仰与权杖间摇摆的传奇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他本是纳瓦拉国王桑乔三世的一个儿子，在父亲去世后的王国分割中，得到了相对贫瘠的阿拉贡山区。<strong>1035年</strong>，他在哈卡正式称王，开始了巩固和扩张王国的事业。然而，史料与传说交织出他命运的拐点：据说他晚年深感世俗权力的虚无与罪孽，渴望将余生奉献给上帝。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "<strong>传说中，拉米罗一世曾悄悄离开王宫，潜入哈卡附近的圣胡安·德拉佩尼亚修道院，成为一名普通的修士。</strong> 他将王国暂时交给女婿，直到王朝出现危机，他才被迫从修道院中走出，以雷霆手段平定叛乱，史称“<strong>修士国王的复仇</strong>”。事后，他再次回归隐修生活。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个故事的真实性虽被后世史学家谨慎对待，但它却深深烙印在阿拉贡的集体记忆里。它赋予开国君主一层神圣与神秘的光环，也让哈卡这座“王权起点”，同时成为了“放下王权”的象征之地。拉米罗一世的石棺，至今安放在圣胡安·德拉佩尼亚修道院，供人凭吊这位在国王与修士身份间徘徊的复杂灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与城塞直接相关的关键人物，并非国王，而是一位工程师——<strong>蒂博·德·利希</strong>。这位可能来自意大利或法国的军事建筑师，是哈卡星形棱堡的<strong>总设计师</strong>。关于他的生平记录极少，但他的作品就是他的传记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在<strong>16世纪末</strong>，他带来的不仅是图纸，更是一套全新的防御哲学。他必须说服王室，放弃象征威严的高耸塔楼，转而建造看似“低矮”却致命的几何形堡垒。他的设计，考虑了从火炮射程、士兵移动路线到雨季排水的每一个细节。哈卡城塞的成功，使得棱堡设计在西班牙迅速推广。蒂博·德·利希本人，也如同他设计的棱堡一样，将自己隐没在历史的斜线之后，唯有这座坚不可摧的杰作，无言地证明着他的天才。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了帝王的史诗，哈卡的街巷间还流淌着更为轻盈的传说。每年<strong>12月31日午夜</strong>，哈卡市政厅的钟楼会响起一种特别的钟声，当地人称之为“<strong>La Campana de los Huevos</strong>”（鸡蛋之钟）。传说，一位虔诚的农妇曾在饥荒中，将仅有的几个鸡蛋送给穷苦的修道士。她的善举感动了上天，从此，在旧年最后的时刻敲响这口钟，能保佑来年家庭富足、炊烟不断。这个独特的跨年仪式，让历史的庄严与市井的温情在此交融。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而在城塞的阴影下，还流传着关于“<strong>地下骑士</strong>”的故事。有人说，在棱堡最深的<strong>地下甬道</strong>里，封印着一支属于圣乔治骑士团的亡灵军队。他们将在阿拉贡王国面临最大危难时被唤醒，从哈卡这座堡垒中冲锋而出，保卫这片土地。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地的老人们会在冬夜的火炉边低声讲述：“如果你把耳朵贴在城堡南墙最古老的石头上，在狂风呼啸的间隙，或许能听到并非风声，而是沉睡战马的响鼻与铁甲摩擦的轻响。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当然，最动人的守护传说属于<strong>哈卡主教堂的圣母像</strong>。这尊罗马式的黑色木雕圣母，被称为“<strong>La Moreneta de Jaca</strong>”（哈卡的黑肤圣母）。传说在无数次瘟疫、战乱和雪崩中，是她的泪水化作泉水治愈了病患，是她的身影出现在城墙之上鼓舞了守军。她不仅是信仰的象征，更是市民心中慈爱而坚韧的“城市母亲”，她的存在，为这座兵家必争的硬朗之城，注入了一缕永不熄灭的温柔光辉。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日的哈卡城塞，早已卸下军事重任。它的壕沟里绿草如茵，内部成为了<strong>军事博物馆</strong>，平静地陈列着过去的刀剑与火炮。但当你漫步在其完美的五角星形轮廓之上，触摸那些为抵御炮弹而建造的倾斜墙垣时，你触摸的是一道清晰的<strong>历史分界线</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里，一边是<strong>中世纪</strong>骑士的荣耀与封建王权的诞生（拉米罗一世），另一边是<strong>近代早期</strong>基于数学与工程的理性防御革命（蒂博·德·利希）。哈卡将这两个波澜壮阔的时代，凝固在了同一片土地上。它不高调，不喧哗，只是静静地坐在雪山脚下，等待着那些不满足于沙滩与教堂的旅行者，来解读石头写就的密码。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂哈卡，便是读懂了一个王国如何从山脉中崛起，以及人类为了生存与统治，如何在战争技艺上极尽精巧与冷酷。它小众，因为它讲述的故事需要静心聆听；它深刻，因为它本身就是一部微缩的欧洲军事政治进化史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/carmona-seville-spain" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡尔莫纳</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Carmona</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/pedraza-candlelight-night" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩德拉萨</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pedraza</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/roman-walls-of-lugo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卢
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卢戈古罗马城墙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Roman Walls of Lugo</p>
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
