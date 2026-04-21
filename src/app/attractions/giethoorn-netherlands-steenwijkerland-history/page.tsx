import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '羊角村历史溯源｜荷兰“北方威尼斯”的水道传奇与隐世智慧',
  description: '探寻羊角村不为游客所知的隐秘历史：从蛮荒沼泽到“荷兰花园”，挖掘水道、泥炭与“山羊角”背后的真实故事。',
}

export default function GiethoornNetherlandsSteenwijkerlandHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '羊角村', href: '/attractions/giethoorn-netherlands-steenwijkerland-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`羊角村・Giethoorn・荷兰・斯滕韦克尔兰`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当蜿蜒的水道取代了街道，当小桥的倒影连接起古老的芦苇屋顶，你看到的并非一座为取悦游客而生的主题公园。<strong>羊角村（Giethoorn）</strong>，这座被誉为“荷兰威尼斯”的村庄，其宁静如画的面貌之下，埋藏着一部与泥沼、洪水和经济变迁顽强搏斗的生存史诗。它的美丽，源于无奈，成于智慧。抛开游玩攻略，走进羊角村的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`羊角村`} />
                <InfoRow label="英文名称" value={`Giethoorn`} />
                <InfoRow label="正式名称" value={`Giethoorn`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`斯滕韦克尔兰`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "羊角村的故事，始于一群逃亡者与一片不毛之地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间要回溯到<strong>13世纪早期</strong>。来自荷兰北部<strong>弗里斯兰（Friesland）</strong> 地区的移民，为躲避席卷欧洲的洪水与战乱，向南迁徙。他们在这片位于上艾瑟尔省（Overijssel）的偏远地带，发现了一片由<strong>泥炭（peat）</strong> 构成的广阔沼泽。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里土壤贫瘠，遍布湖泊与水道，对传统农业而言几乎是绝境。但对这些弗里斯兰人来说，这里恰好是远离纷争的避风港。他们决定在此定居，并赋予它一个古怪的名字：<strong>Geytenhoren</strong>。在古荷兰语中，意为“山羊的角”。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "据早期编年史模糊记载，首批定居者在此挖掘土地时，发现了<strong>数量惊人的野山羊角</strong>。这些角属于一种早已在洪水或狩猎中灭绝的野山羊群。这个惊人的发现，成为了地名最直接的来源，也仿佛一个来自远古的荒凉印记，昭示着此地的原始与野性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "村落的形态，被地理环境彻底定义。定居者们为了生存，开始系统性地挖掘地下的泥炭燃料。长期的挖掘形成了纵横交错的沟渠与水道，而挖出的泥土则被堆砌成狭窄的“岛屿”。于是，房屋只能建造在这些狭长的土埂上，<strong>家家户户门前是水道，屋后是花园</strong>。船只，而非马车，成为了唯一的交通工具。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "羊角村，从一开始，就是人类适应并改造极端环境的产物。它的“浪漫”底色，是实用主义的灰。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "羊角村静谧的水道，曾是一条繁忙的“工业动脉”。它的历史印记，镌刻在泥炭经济的兴衰与水的永恒博弈中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1. 泥炭：黑色的黄金</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从定居伊始到<strong>19世纪</strong>，羊角村的经济命脉系于泥炭。男人们深入沼泽，将一块块黑色的泥炭砖挖出、晾干。这些燃料通过密布的水道网络，用平底船“<strong>punters</strong>”运往荷兰其他城市，甚至出口。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "水道旁的每一座茅草顶仓库，都曾堆满过冬的燃料；每一条看似田园的沟渠，都曾见证着运输船的往来穿梭。这种资源开采塑造了村庄的物理形态：水道越挖越宽，湖泊越变越大，村落与水域的共生关系也越发紧密。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>2. 洪水：永恒的对手</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "与水的共生，也意味着与洪水的永恒斗争。位于低洼地区的羊角村，历史上屡遭洪水侵袭。特别是<strong>1776年</strong>与<strong>1825年</strong>的特大洪水，几乎将整个村庄淹没。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位村民在1825年洪灾后的日记中写道：“水从门缝涌入，像是有生命一般。我们逃到阁楼，看着我们所有的家具、甚至牲畜，在水面上漂浮、碰撞。村庄变成了一片内陆海，只有教堂的尖顶和几处高耸的屋顶还露在外面。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些灾难迫使村民不断加高地基，并完善水道排水系统。那些如今看来颇具风情、需要拾级而下的屋门，部分正是先民抬高地面的结果。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>3. 转型：从工业到静美</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>20世纪初</strong>，煤炭和天然气取代了泥炭，羊角村的经济支柱骤然倒塌。许多居民外出谋生，村庄一度陷入沉寂与贫困。然而，正是这种“被遗忘”，意外地保存了其原始风貌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转机出现在<strong>1958年</strong>。荷兰著名电影导演<strong>伯特·哈安斯特拉（Bert Haanstra）</strong> 在此拍摄了喜剧电影《<strong>Fanfare</strong>》。这部电影在荷兰取得巨大成功，让这个水道纵横的静谧村庄首次进入全国公众的视野。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "人们开始发现这里独一无二的美。旅游业悄然萌芽，曾经的运煤船被改造成游览船，破旧的仓库变成了咖啡馆。羊角村完成了一次静默而华丽的转身，从一座困于历史的产业村落，变成了象征荷兰传统水乡生活的“活化石”。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "羊角村避世的气质，吸引着那些渴望远离喧嚣的灵魂。其中，最具传奇色彩的是一位现代“隐士”——艺术家<strong>范·德·海登（Van der Heyden）</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他并非家喻户晓的巨匠，却是羊角村精神最好的诠释者之一。上世纪<strong>60年代</strong>，当旅游业刚刚萌芽时，范·德·海登便独自划着他的小船，深入村庄最偏僻的角落，租下了一栋古老的芦苇顶农舍。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的画室没有通电，照明依靠油灯，取暖依赖壁炉。在这里，他创作了一系列以羊角村水道、桥梁、倒影和四季变化为主题的油画与水彩画。他的作品笔触细腻，色彩朦胧，完美捕捉了水汽氤氲中光线的微妙变幻，以及那种深入骨髓的宁静。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "他在给友人的信中写道：“在这里，时间是以船的涟漪和芦苇的生长来计算的。游客在主干道上喧哗，而我退回到支流的尽头。只有在这里，才能听到村庄真正的呼吸声——风穿过芦苇的沙沙声，还有水滴从船桨滑落的滴答声。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "范·德·海登拒绝了商业画廊的频繁邀约，他的作品大多只在小圈子里流传，或直接售予懂得欣赏的访客。他成为了羊角村一个隐秘的传说：那位划着小船、身影总在晨曦与暮色中出现的老画家。他的存在本身，就是一种对现代快节奏生活的温和抗议。他留下的，并非宏大的地标，而是一种与羊角村气质高度契合的生活哲学：真正的富有，在于拥有不被干扰的时光与专注。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与羊角村结缘的名人，是摄影师<strong>维姆·范·德·霍尔（Wim van der Hall）</strong>。他用黑白胶片，记录了<strong>20世纪50至70年代</strong>羊角村转型前夕最真实的样貌。他的镜头下，是穿着工装裤挖渠的农民、在门口补渔网的老妇、以及冬天在结冰水道滑行的孩子们。这些影像剥离了色彩的滤镜，展现了村庄在成为“明信片”之前，那份粗粝、质朴而坚韧的生命力。他的摄影集，如今是探寻羊角村往昔灵魂最重要的视觉档案。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了“山羊角”的起源，羊角村最动人的传说，围绕着一座特殊的建筑：<strong>“Het Wapen van Giethoorn”</strong>（羊角村之徽）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座位于主水道旁的古老建筑，历史上曾是村中唯一的客栈兼酒馆。传说在<strong>17世纪</strong>某个暴风雨之夜，一艘运载着神秘货物的商船在此附近沉没。船主幸免于难，来到客栈避难。为感谢店主的收留，他留下一笔丰厚的金子，但叮嘱店主必须用其中一部分，在客栈屋顶安装一个特别的<strong>风向标</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个风向标被设计成<strong>一艘扬帆小船</strong>的形状，与常见的公鸡造型截然不同。神秘人声称，这个船形风向标能庇护所有在羊角村水道航行的人，指引他们避开水下暗藏的古老树根与险礁。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "老人们口耳相传：“当风向标的小船指向东方时，最适合出航捕鱼；当它指向西方时，晚间必有浓雾，船只要早早归家。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则关于桥梁。羊角村有超过<strong>180座</strong>小桥，其中许多是私桥，连接着屋宅与道路。当地有个古老的说法：如果你在午夜时分，独自走过村庄最古老的<strong>木制吊桥</strong>，并在桥中央静静停留，你会听到水下传来轻微而有节奏的敲击声。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那并非鱼或水波的声音，而是沉睡在泥炭层下的、远古伐木工的幽灵，仍在为建造最初的村庄而“工作”。这个传说模糊了现实与幻想的边界，仿佛在提醒人们，脚下这片美丽的土地，是由无数代人的辛劳与生命奠定的。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游览船载着欢声笑语穿过羊角村的水道，我们看到的，是一部浓缩的荷兰低地生存史。这里的每一道波纹，都荡漾着与洪水抗争的记忆；每一座芦苇屋顶，都覆盖着从泥炭经济中转型的智慧；每一座宁静的岛屿花园，都曾是维系生存的宝贵土地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "羊角村的美，绝非肤浅的景致。它是一种证明，证明了人类在最苛刻的自然条件下，如何创造出一种和谐、可持续且最终充满诗意的生活方式。它的价值不在于“像威尼斯”，而在于它<strong>就是羊角村本身</strong>——一个将生存困境转化为文化景观的独一无二的样本。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂它的历史，你眼中的将不再仅仅是交错的水道与可爱的茅屋，而是一个民族坚韧、务实与 adaptive（适应）精神的立体注脚。在这里，旅行超越了观光，成为一场与时光和智慧的对话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/naarden-star-fort" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    纳
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">纳尔登星形要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Naarden Star Fort</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kasteel-radboud" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉德鲍德城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kasteel Radboud</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/breda-beguinage-nassau" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布雷达</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Breda</p>
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
