import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '培拉特历史溯源｜阿尔巴尼亚“千窗之城”的前世今生与巴尔干传奇',
  description: '穿越奥斯曼帝国的“千窗”奇观，探寻拜占庭壁画下的神迹，聆听阿尔巴尼亚国父的独立宣言。走进培拉特，一座活着的地中海文明化石。',
}

export default function BeratHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '阿尔巴尼亚', href: '/destinations/europe' },
            { label: '培拉特州', href: '/destinations/europe' },
            { label: '培拉特（千窗之城）', href: '/attractions/berat-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`培拉特（千窗之城）・Berat・阿尔巴尼亚・培拉特州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在阿尔巴尼亚中部，奥斯曼帝斯兰（Osum）河深切出雄伟的峡谷，一座白色之城如阶梯剧场般，沿着陡峭山坡层层铺展。上千扇奥斯曼风格的木窗，在阳光下犹如无数只凝视历史的眼睛——这便是<strong>培拉特</strong>，闻名于世的“千窗之城”。然而，窗格背后的故事，远比这绝美的外观更为深邃。这里曾是伊利里亚人的堡垒、拜占庭的边疆重镇、东正教艺术的圣殿、奥斯曼帝国宽容政策的典范，更是现代阿尔巴尼亚的摇篮。抛开游玩攻略，走进培拉特的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`培拉特（千窗之城）`} />
                <InfoRow label="英文名称" value={`Berat`} />
                <InfoRow label="正式名称" value={`Berat`} />
                <InfoRow label="国家" value={`阿尔巴尼亚`} />
                <InfoRow label="城市" value={`培拉特州`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "培拉特的故事，始于青铜时代。但这座城市第一次以清晰的面貌登上历史舞台，是在公元前<strong>4世纪</strong>。当时的居民是伊利里亚人，一个勇悍的印欧民族。他们在临河的巨石山巅，建造了坚固的城堡，名为<strong>安提帕特里亚</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个名字，源自马其顿国王<strong>亚历山大大帝</strong>麾下一位将军——<strong>安提帕特</strong>。相传，他的儿子卡山德扩建了此地，使其成为控制周边山谷的战略要塞。罗马共和国崛起后，这里成为重要的军事据点与贸易节点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城市现今的名字“Berat”，则是一段语言变迁的史诗。<strong>6世纪</strong>，东罗马帝国（拜占庭）的皇帝<strong>查士丁尼一世</strong>重建了城堡。斯拉夫部落南迁后，他们称此地为“<strong>贝尔格莱德</strong>”，意为“白色之城”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这指的正是城堡下方那片在阳光下熠熠生辉的白色屋舍。数个世纪的口耳相传，“贝尔格莱德”在阿尔巴尼亚语中逐渐音变为“培拉特”。一个地名，悄然融合了希腊-罗马的古典、斯拉夫的印记与阿尔巴尼亚的根脉，这正是培拉特多重文化层的初次显露。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "培拉特最辉煌的历史印记，镌刻在两处：山顶的城堡与山腰的“千窗”区。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>城堡</strong>并非一座孤立的宫殿，而是一座<strong>仍在呼吸的中世纪城镇</strong>。围墙之内，散布着数十座建于<strong>13至16世纪</strong>的拜占庭风格教堂与奥斯曼时期的民居。其中最璀璨的明珠，是<strong>圣玛丽·弗拉切尔纳教堂</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座<strong>13世纪</strong>的教堂内，保存着一位被尊称为<strong>奥努夫里</strong>的天才画师所作的壁画。他的作品，是晚期拜占庭艺术在阿尔巴尼亚的巅峰，其人物眼神中的悲悯与灵动，穿越七百年时光，依然直击心灵。城堡本身，则见证了无数次围攻与易主，从拜占庭、保加利亚第一帝国到伊庇鲁斯专制国，最终在<strong>13世纪</strong>成为<strong>阿尔贝里公国</strong>的核心——这是首个以阿尔巴尼亚人为主体的中世纪政权。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而山腰上那片令人过目不忘的<strong>“千窗”景观</strong>，则源于<strong>奥斯曼帝国</strong>时期（约<strong>15-19世纪</strong>）。奥斯曼统治者对非穆斯林社区实行“米利特”制度，允许不同信仰的社群自治。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“培拉特的基督徒被允许在城堡下方的山坡上建造他们的房屋，但规定窗户必须大面积朝向街道，以便当局监督……然而，这竟意外造就了建筑与光线对话的奇迹。”——当地建筑史学者笔记" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，穆斯林居住的<strong>戈里察区</strong>与基督徒居住的<strong>曼加莱姆区</strong>隔河相望，彼此的建筑规范却相互影响。白色的石墙、深褐色的木窗、倾斜的瓦屋顶，形成和谐统一的韵律。这不是一次性的规划，而是数个世纪里，不同信仰的居民在相对宽容的环境下，共同写就的城市诗篇。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "培拉特的灵魂，由两位截然不同的名人塑造：一位是用色彩与金箔祈祷的隐修画师，另一位是用文字与行动缔造国家的领袖。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>奥努夫里</strong>，这个名字在艺术史上或许冷门，但在巴尔干东正教世界如雷贯耳。他活跃于<strong>16世纪</strong>，是一位游历四方的圣像画师，其画坊培养了包括他儿子<strong>尼古拉</strong>在内的许多画家。奥努夫里并非培拉特本地人，但他人生中最重要的作品都留在了这里，尤其是城堡内的<strong>圣三一教堂</strong>壁画。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的画风独特，在严谨的拜占庭神学框架内，注入了鲜活的民间情感与自然主义细节。他笔下人物的衣褶宛若清风拂过，面容充满人性的温暖。更传奇的是，他常在作品角落留下独特的签名——一只<strong>精致的小鸟</strong>。艺术史家猜测，这或许是“圣灵”的象征，亦或是他个人的精神印记。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我，上帝的卑微仆人奥努夫里，于此圣所倾尽心力，愿我的罪孽因这劳作得赦免。”——仿其画作上的常见祷词" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与培拉特生死相依的名人，是<strong>伊斯梅尔·捷马利</strong>。<strong>1912年</strong>，奥斯曼帝国风雨飘摇，阿尔巴尼亚民族觉醒浪潮高涨。11月28日，就在培拉特一栋不起眼的二层楼房里（今<strong>独立博物馆</strong>），这位政治家、思想家聚集了来自各地的阿尔巴尼亚代表。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是在这里，他们庄严宣告了<strong>阿尔巴尼亚的独立</strong>。捷马利成为首任国家元首。培拉特，因此从一座文化交融的历史名城，一跃成为现代阿尔巴尼亚民族的“精神产房”。这座小城见证了阿尔巴尼亚作为一个主权国家，第一次出现在欧洲地图上。捷马利在培拉特度过的那些紧张日子，其故居的简朴陈设，无不诉说着建国之初的艰辛与理想。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "培拉特的传说，与它的山河一样壮丽。最著名的传说是关于<strong>城堡</strong>下藏的<strong>黄金羊</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传，在古老的年代，城堡里住着一位富有的公主。当外敌大军压境，城破在即之时，她不忍财富落入敌手，便施展魔法，将所有的黄金珠宝变成了一头<strong>金色的绵羊</strong>。她牵着这头羊，走到城堡最深处的一块巨大石板下，羊儿走了进去，石板随即闭合，再无痕迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公主随后也消失无踪。传说，只有最纯洁善良且心怀此地的人，才能在特定的月圆之夜，看到石板开启，金羊现身，引领他找到无尽的宝藏。这个传说代代相传，不仅为城堡增添了神秘色彩，也隐喻着培拉特看似朴素的外表下，蕴藏着无价的文化与历史宝藏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则与<strong>奥斯曼大桥</strong>有关。这座石桥连接着戈里察区与曼加莱姆区。据说，最初建桥时，桥墩屡次被湍急的河水冲垮。后来，建造者听从一位苦行僧的建议，将自己的<strong>影子</strong>砌入了桥基——这在民间魔法中意味着献祭一部分灵魂以获得稳固。从此，石桥巍然屹立数百年，人们说，在晨雾弥漫时，还能看到那个为桥梁献身的无名建造者的朦胧身影，默默守护着两岸居民的往来。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在培拉特，你走过的每一条石板路，都叠加着伊利里亚战士、拜占庭修士、奥斯曼工匠与阿尔巴尼亚复兴者的足迹。这里的“千窗”，不只是为了采光或被凝视，它们是一扇扇<strong>时间的窗口</strong>。透过它们，你能窥见一个帝国管理多元民族的智慧，一种宗教艺术在边缘地带绽放的顽强生命力，以及一个小民族在历史夹缝中争取自决的澎湃瞬间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "培拉特的美，是沉静的、厚重的。它不喧嚣，只是将两千多年的层叠历史，平静地铺展在阳光与雪山之下。它教会旅行者的，不是打卡的匆忙，而是“阅读”的深度——阅读建筑、阅读壁画、阅读地名的变迁，最终读懂巴尔干半岛这部复杂史诗的一个关键章节。在这里，历史从未远去，它就活在每一扇窗后的日常生活中，等待与你对话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/butrint-national-park" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布特林特</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Butrint</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gjirokaster-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    吉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">吉诺卡斯特（石头城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gjirokastër</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bunk-art-1" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    B
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">Bunk'Art 1 防核地堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bunk'Art 1</p>
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
