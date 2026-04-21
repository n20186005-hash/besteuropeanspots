import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '佩奇(Pécs)历史溯源｜匈牙利“永恒之城”的古罗马前世与地下基督教传奇',
  description: '穿越1700年时光，探秘匈牙利佩奇地下沉睡的早期基督教圣殿与陵墓。一座古罗马城市的浴火重生，一段被尘封的信仰史诗。',
}

export default function EarlyChristianNecropolisPecsHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '匈牙利', href: '/destinations/europe' },
            { label: '佩奇', href: '/destinations/europe' },
            { label: '佩奇早期基督教陵墓', href: '/attractions/early-christian-necropolis-pecs-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`佩奇早期基督教陵墓・Early Christian Necropolis of Pécs・匈牙利・佩奇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说布达佩斯是匈牙利的王冠，那么西南部的<strong>佩奇</strong>，则是这个民族深藏不露的灵魂与基石。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它并非诞生于马扎尔人的征服，而是深深扎根于更古老的<strong>罗马帝国</strong>边疆。公元4世纪，当基督教仍在帝国的阴影中悄然生长时，这里的地下，已开始建造令人惊叹的信仰圣殿。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市的地表之下，埋藏着一部石头写就的早期基督教史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "抛开游玩攻略，走进佩奇的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`佩奇早期基督教陵墓`} />
                <InfoRow label="英文名称" value={`Early Christian Necropolis of Pécs`} />
                <InfoRow label="正式名称" value={`Early Christian Necropolis of Pécs`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`佩奇`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "佩奇的起点，不在中世纪，而在遥远的罗马帝国时代。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "大约在公元2世纪，罗马人在潘诺尼亚行省的西南边境，建立了一座重要的定居点。它的拉丁语名字是 <strong>索皮阿娜</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里并非普通的城镇，而是帝国边疆防御体系“<strong>利姆斯</strong>”上的一个关键节点。它守护着通往巴尔干和意大利的通道，战略地位显赫。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "驻军、商旅、工匠和家属在此聚集，罗马式的公共浴场、广场、别墅和街道逐渐出现。索皮阿娜成为了一个繁荣的罗马化城市，文明的光辉照耀在多瑙河以南的土地上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那么，“佩奇”这个充满匈牙利风情的名字从何而来？" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这要等到近千年后。公元9世纪，斯拉夫部落在此定居，称其为 <strong>“五个教堂”</strong> 。在古斯拉夫语中，“pět”意为“五”。这个名称，冥冥中预言了此地未来深厚的宗教底蕴。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当匈牙利建国者<strong>圣伊什特万一世</strong>在11世纪初推行基督教化时，他在这里设立了匈牙利第一个主教区之一。斯拉夫语的“五个教堂”，被音译为匈牙利语的“<strong>Pécs</strong>”，并沿用至今。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从罗马的“索皮阿娜”到匈牙利的“佩奇”，名字的变迁，本身就是一部浓缩的欧洲边疆民族史。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "历史的转折，发生在公元4世纪。罗马帝国晚期，基督教逐渐从被迫害走向合法，直至成为国教。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在索皮阿娜，一群虔诚的基督徒开始了一项非凡的工程。他们并非在地上修建宏伟的教堂，而是转向了<strong>地下</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们利用罗马时期遗留的采石场通道和墓穴，开凿、扩建，建造了结构复杂的地下墓室。这些不是简单的埋葬坑，而是用于<strong>殡葬礼仪和纪念活动</strong>的早期教堂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中最著名的<strong>“彼得-保罗墓室”</strong>，保存了精美绝伦的湿壁画。墙上的壁画描绘了<strong>亚当与夏娃</strong>、<strong>但以理在狮子坑</strong>、<strong>圣母与圣婴</strong>等圣经场景。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些壁画是阿尔卑斯山以东地区现存最古老、最完整的早期基督教壁画之一。它们风格质朴而有力，是连接古典艺术与中世纪艺术的珍贵桥梁。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们在此安息，在基督的怀抱中等待复活。” —— 推测的早期基督教墓志铭" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元9世纪，匈牙利人来到这片土地，在原罗马-基督教遗址的上方，建立了新的城市与主教座堂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正让这些地下圣殿“消失”又“重现”的，是16世纪的<strong>奥斯曼帝国征服</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1543年，奥斯曼军队占领佩奇。基督教建筑或被摧毁，或被改造为清真寺。地表的世界天翻地覆，而地下的早期基督教陵墓，则因入口被掩埋和遗忘，反而幸运地躲过了破坏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它们在黑暗与寂静中沉睡了近四百年。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到1780年，一次偶然的施工，工人们才重新敲开了通往公元4世纪的大门。尘封的壁画、石棺、铭文重见天日，震惊了欧洲考古学界。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "地下的沉默见证者，终于开始诉说被中断的故事。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "佩奇的历史长卷中，有一位人物无法绕过，他并非艺术家或科学家，而是一位深陷时代漩涡的统治者——<strong>拜特伦·加博尔</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>拜特伦·加博尔</strong>出生于1580年，来自特兰西瓦尼亚一个有权势的新教贵族家庭。他的一生，正处在一个极度动荡的时代：<strong>匈牙利王国被奥斯曼帝国和哈布斯堡王朝三方瓜分</strong>，战争与阴谋是日常。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1613年，在奥斯曼苏丹的支持下，他当选为<strong>特兰西瓦尼亚大公</strong>，并宣称拥有<strong>匈牙利国王</strong>的头衔。佩奇，当时正处于奥斯曼统治下，成为了他重要的活动据点之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "拜特伦是一位复杂矛盾的政治家。他既是奥斯曼帝国的附庸，又怀有统一匈牙利、驱逐外敌的梦想；他是一位虔诚的<strong>加尔文宗新教徒</strong>，却不得不与天主教哈布斯堡和伊斯兰奥斯曼周旋。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在佩奇，他留下了深刻的印记。他将一座古老的教堂改造为自己的宫殿，并试图将这里建设成其王国的文化中心。他赞助学者、建立学校，让佩奇在战乱中依然保持着一丝文艺复兴的光亮。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我的王国在荆棘与刀剑之上，我的王冠由妥协与无奈铸成。” —— 后世历史学家对拜特伦处境的概括" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的统治充满了戏剧性的转折。他曾一度攻占布拉迪斯拉发，几乎掌控整个匈牙利，却因盟友的背叛和时运不济而功败垂成。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1629年，拜特伦在佩奇附近去世。关于他的死亡，有一个著名的轶事。据说他临终前，一位天主教神父来到床前，试图让他改信天主教。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "已经奄奄一息的拜特伦，用尽最后力气，指向房间墙壁上挂着的<strong>加尔文宗信仰条文</strong>，坚定地表明了自己的信仰立场，随后溢然长逝。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的故事，是17世纪匈牙利民族悲剧的缩影。佩奇见证了他的野心、挣扎与落幕，这座城市也因此承载了一段超越宗教与民族、关乎生存与尊严的沉重记忆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的宫殿遗址，至今仍能在佩奇老城中寻得踪迹，静静诉说着那个“三国演义”时代的权谋与信仰之争。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在佩奇，关于这些神秘地下墓穴的传说，从未在民间消失。即使在被遗忘的世纪里，它们也以另一种形式活在人们的口耳相传中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最流行的传说，与<strong>吸血鬼</strong>有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在中世纪和奥斯曼时期，当地居民偶尔能发现一些深不可测的地洞，阴冷的风从地底吹出。人们无法解释这些罗马和早期基督教留下的通风井与通道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，想象力开始填补空白。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说，地底深处居住着古老的、非基督教的邪灵，或是在战乱中未经妥善安葬的亡魂。他们会在夜晚化为吸血鬼，通过这些地洞来到人间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中，一个被称为 <strong>“女巫之井”</strong> 的洞口尤为著名。传说一位强大的女巫被禁锢在井底，她的叹息化作了穿堂风。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“不要靠近那个无底的石头嘴，尤其在月圆之夜。你会听到指甲刮擦岩石的声音，那是地下的居住者渴望上来……” —— 佩奇古老民谣的片段" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说虽然令人毛骨悚然，却在客观上保护了遗址。人们对地下世界心存敬畏，不敢肆意挖掘破坏，使得墓穴在无意识中得到了保护。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到启蒙时代的光照进这里，考古学家才用科学驱散了迷信的迷雾。那些“吸血鬼的通道”，实则是精心设计的通风系统；“女巫的叹息”，不过是地道内外的气压差。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说褪去，真实的历史浮出水面，反而比任何鬼故事都更加震撼人心。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日的佩奇，是一座慵懒而优雅的大学城。阳光洒在布满咖啡馆的广场上，学生们穿行在巴洛克与新艺术风格的建筑之间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但它的独特魅力，正源于这份平和之下的<strong>历史纵深</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在佩奇，你是在进行一场时间的“考古”。脚下是公元4世纪基督徒祈祷的墓室；身旁是11世纪匈牙利国王建立的主教座堂地基；抬头望见的是16世纪奥斯曼总督留下的清真寺尖塔；而包围你的，是18世纪哈布斯堡王朝兴建的华美立面。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>佩奇，是一座“活着的多层历史”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不像一些博物馆式的古城，将历史封存在围墙内。在这里，历史是层叠的、交融的、日常的。罗马的石头被中世纪教堂再次利用，伊斯兰的几何花纹装饰着基督教的宫殿。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2000年，<strong>佩奇早期基督教陵墓</strong>被列入联合国教科文组织世界遗产名录。这不仅是对其艺术价值的认可，更是对欧洲文明复杂融合历程的致敬。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "来到这里，你不是在参观一个孤立的景点，而是在阅读一部关于<strong>边疆、信仰、冲突与共生</strong>的立体史书。每一层泥土，都覆盖着一段被克服的伤痕；每一块石头，都铭刻着一种文明对另一种文明的接纳与转化。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂佩奇，便读懂了中欧千年来的坚韧与包容。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？如何探访地下墓室、漫步老城、品味当地美食，交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/eszterhaza-palace-fertod" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    费
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">费尔特德埃斯泰尔哈兹宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Eszterháza Palace</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/miskolc" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    米
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">米什科尔茨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Miskolc</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sumeg-castle-hungary" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    许
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">许迈格城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sümeg Castle</p>
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
