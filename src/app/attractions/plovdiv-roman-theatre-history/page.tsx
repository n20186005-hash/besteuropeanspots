import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '普罗夫迪夫历史溯源｜欧洲最古老之城的前世今生，与一座剧场的千年沉睡与苏醒',
  description: '比罗马、雅典更古老的普罗夫迪夫，其心脏藏着一座沉睡千年的罗马剧场。走进这座“七丘之城”，聆听色雷斯王、罗马皇帝与奥斯曼总督在此交织的传奇。',
}

export default function PlovdivRomanTheatreHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '保加利亚', href: '/destinations/europe' },
            { label: '普罗夫迪夫', href: '/destinations/europe' },
            { label: '普罗夫迪夫罗马剧场', href: '/attractions/plovdiv-roman-theatre-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`普罗夫迪夫罗马剧场・Roman Theatre of Plovdiv・保加利亚・普罗夫迪夫`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在欧洲，人们常为罗马与雅典的古老而惊叹，却鲜少有人知道，在保加利亚的色雷斯平原上，静卧着一座连续有人类居住超过8000年的城市——普罗夫迪夫。它的历史，像一本被层叠压实的书，每一页都写满帝国的兴衰。而其中最华彩的章节，莫过于那座在20世纪70年代，因一场山体滑坡才惊现于世的<strong>罗马剧场</strong>。抛开游玩攻略，走进普罗夫迪夫的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`普罗夫迪夫罗马剧场`} />
                <InfoRow label="英文名称" value={`Roman Theatre of Plovdiv`} />
                <InfoRow label="正式名称" value={`Roman Theatre of Plovdiv`} />
                <InfoRow label="国家" value={`保加利亚`} />
                <InfoRow label="城市" value={`普罗夫迪夫`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "普罗夫迪夫的起点，深埋在时间的迷雾之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "考古证据将人类活动的痕迹追溯至<strong>公元前6000年</strong>的新石器时代。但这座城市作为“城”的诞生，通常归于狂野而神秘的色雷斯人。大约在<strong>公元前12世纪</strong>，一个强大的色雷斯部落在此定居，他们在一座陡峭的山丘上（今内贝特山丘）建立了一座坚固的卫城，称其为“<strong>欧姆普利斯</strong>”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座山丘要塞，俯瞰着蜿蜒的马里查河，控制着从多瑙河平原通往爱琴海的古老商路。色雷斯人以勇武和精湛的金器工艺闻名，这里是他们王权与信仰的中心之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，这座城市命运的决定性时刻，发生在<strong>公元前342年</strong>。马其顿的<strong>腓力二世</strong>（亚历山大大帝之父）在征服色雷斯的征途中，被此地重要的战略位置所吸引。他占领了欧姆普利斯，并以自己的名字将其重新命名为“<strong>菲利波波利</strong>”——意为“腓力的城市”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个名字，标志着它正式被纳入希腊化世界的版图。腓力二世雄心勃勃地扩建城市，将其从一座山顶要塞，发展为一座横跨七座山丘的、拥有规整希腊化城市规划的繁华都市。“七丘之城”的格局，就此奠定。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "至于今天“普罗夫迪夫”这个名字的由来，则要等到斯拉夫人南下。公元6世纪，斯拉夫部落涌入巴尔干，他们根据城市的古老地形特征，称之为“<strong>普尔普德夫</strong>”，可能源于斯拉夫语中描述“波涛起伏”或“多丘之地”的词汇。这个名字在漫长的岁月中，逐渐演化成了今天的“普罗夫迪夫”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字，就是一部微缩的巴尔干史诗：色雷斯起源、希腊化命名、斯拉夫定名。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>罗马的巅峰与剧场的诞生</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "菲利波波利的黄金时代，无疑属于罗马。公元1世纪，这里被纳入罗马帝国，成为色雷斯行省的重要枢纽。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>公元46年</strong>，皇帝<strong>克劳狄乌斯</strong>正式将其设为行省首府。城市迎来了空前建设，神庙、广场、公共浴场、引水渠次第而起。而最璀璨的明珠，当属建于<strong>公元2世纪</strong>，图拉真或哈德良皇帝时期的罗马剧场。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“这座城市拥有一个设计精妙绝伦的剧场，其规模之大，音效之佳，足以令最挑剔的罗马公民感到满意。它不仅是娱乐中心，更是帝国权力在此地具象化的纪念碑。” —— 基于罗马时期行省记载的想象复原" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座依山而建的半圆形剧场，可容纳5000至7000人。它并非用于血腥的角斗，而是专为戏剧演出、城市议会和角力比赛而建。来自爱琴海的演员在此吟诵希腊悲剧，本地精英在此商议政务，罗马的公民文化，在此生根发芽。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，随着<strong>公元4世纪</strong>后帝国分裂与蛮族入侵的浪潮，剧场的辉煌戛然而止。哥特人、匈奴人、斯拉夫人接连洗劫城市。剧场逐渐被废弃、遗忘，巨大的石料被市民拆走，用于建造房屋和城墙。最终，一场巨大的泥石流将它彻底掩埋，沉睡于<strong>丁达尔山丘</strong>之下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>湮没与重现：一场山体滑坡的馈赠</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此后的千余年，奥斯曼帝国的统治为城市带来了清真寺的宣礼塔和东方集市，但无人记得山丘之下埋藏着什么。人们只在山腰建造房屋，剧场成为了地基之下的地基。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间来到<strong>1972年</strong>。一场剧烈的山体滑坡，摧毁了山腰的部分建筑。当工人们清理废墟时，镐头碰触到了坚不可摧的古代巨石。考古学家闻讯而来，一场长达十年的发掘就此展开。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当泥土被层层剥离，一座近乎完美的罗马剧场，穿越了十八个世纪的黑暗，重见天日。它的座位、舞台、精美的立柱和雕像浮雕，保存完好程度令人震惊。这不仅是保加利亚保存最完好的古罗马遗迹，更是整个巴尔干半岛的考古奇迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "剧场的重现，改写了普罗夫迪夫的现代身份。它不再仅仅是奥斯曼风情的老城，更是一座拥有厚重罗马层的重要历史名城。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>卢基安：穿梭于帝国的讽刺作家</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市最著名的古代之子，无疑是<strong>卢基安</strong>。他出生于<strong>约公元125年</strong>的萨莫萨塔（今叙利亚），但一生与菲利波波利有着不解之缘。他是一位游历四方的修辞学家、讽刺作家，以其机智、辛辣的对话体作品闻名，被后人誉为“古代的伏尔泰”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "卢基安并非出生于此，但历史记载他曾在菲利波波利长期居住、写作，并可能在此终老。他的作品，如同一面镜子，映照出罗马帝国鼎盛时期，这座行省首府的 cosmopolitan（世界性）面貌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时的菲利波波利，是希腊文化、罗马行政、色雷斯传统和东方商旅的熔炉。卢基安在《<strong>梦，或卢基安的生涯</strong>》等作品中，以自嘲的口吻描述了自己年轻时，如何在雕塑作坊和修辞学校之间做出人生选择。这种充满思辨和市民气息的氛围，正是一个繁荣行省中心所能提供的。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我仿佛站在一个十字路口，两条路展现在眼前：一条是平民的、实用的，通向手艺人的作坊；另一条是教育的、充满赞誉的，尽管起初颇为崎岖，却通向城市广场的中心……” —— 卢基安《梦，或卢基安的生涯》" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更重要的是，卢基安晚年的代表作《<strong>诸神对话</strong>》、《<strong>死者对话</strong>》，极有可能是在菲利波波利相对安宁的环境中完成的。在这些作品中，他将希腊众神请下神坛，让他们像凡人一样争吵、虚荣、斤斤计较，对当时的宗教迷信和哲学诡辩进行了无情的嘲弄。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "试想，他那些充满颠覆性的灵感，或许就诞生于今日老城蜿蜒的石板路上，或是在某个可以眺望马里查河的露台。他所讽刺的，正是罗马剧场里那些衣着光鲜、高谈阔论却内心空虚的观众。他的文字，为这座物质遗迹丰盈的城市，注入了不朽的精神与批判的灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>现代的回响：剧场的第二次生命</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "自1972年重见天日，经过精心修复后，<strong>普罗夫迪夫罗马剧场</strong>在<strong>1981年</strong>举行了首场现代音乐会。这是一个极具象征意义的时刻：舞台的灯光在熄灭近1700年后，再次亮起。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，它不再是冰冷的考古遗址，而是一个活着的文化空间。每年夏季，这里都会举办“普罗夫迪夫夏季国际艺术节”，歌剧、芭蕾、戏剧、交响乐在此上演。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当保加利亚国家歌剧院的咏叹调回荡在山丘之间，当现代舞者的身影投射在古老的石墙上，时间完成了奇妙的闭环。卢基安时代市民的娱乐场所，在21世纪，再次成为连接古今、沟通高雅艺术与普罗大众的桥梁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座剧场，因一位古代讽刺作家的精神而丰满，又因现代保加利亚人的文化自觉而重生。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于这座剧场的湮没与发现，当地流传着一个充满宿命感的传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事说，在奥斯曼帝国统治的漫长岁月里，人们早已忘记了山丘里埋着什么。但一代代老人会讲述一个古老的预言：当一只“石鹰”从山上坠落，并流下“金色的眼泪”时，古城失落的心脏就会重新开始跳动。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1972年那场山体滑坡前夕，一场罕见的暴风雨袭击了普罗夫迪夫。雷击导致丁达尔山丘上一块形似老鹰的岩石崩落。紧接着，暴雨引发的泥石流，在冲刷山体时，在夜晚的灯光下，混着泥土的水流泛出奇异的光泽，宛如金色的泪水。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我的祖父在那晚坚持要出门查看，他说听到了山在呻吟，石头在说话。第二天，人们就发现了那些雕刻着精美花纹的巨石……我们都想起了那个预言。那不是山崩，是古城等不及了，它自己推开了覆盖在身上的泥土。” —— 一位普罗夫迪夫老居民的回忆" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当然，科学的解释是地质活动与考古发现的巧合。但这个传说，却生动地反映了当地人对自身古老历史的集体潜意识。他们一直“知道”脚下埋藏着辉煌的过去，只是等待一个戏剧性的时刻让它破土而出。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说，也为剧场增添了一层神秘色彩：它不仅仅是人类的建筑，更是这片土地自身记忆的具象化，拥有自己的意志与生命节奏。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "站在普罗夫迪夫罗马剧场的最高一排座位，眼前的景象足以让任何历史爱好者心潮澎湃：脚下是精密的古希腊罗马建筑智慧，远处是奥斯曼时期色彩斑斓的老宅屋顶，更远处是社会主义时期的方盒式建筑与现代的玻璃幕墙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这一眼，便是八千年。普罗夫迪夫之所以被誉为“欧洲最古老的城市”，并非因为某一个单一的遗迹，而在于这种<strong>层层叠叠、从未中断的生命堆积</strong>。罗马剧场，正是这本“立体历史书”中最华丽、最意外翻开的插页。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它告诉我们，历史并非直线前进，而是循环往复。文明可以湮没于尘土，也能因一次偶然重获新生。它提醒旅行者，在巴尔干这片饱经沧桑的土地上，每一次深挖，都可能触碰到一个帝国的回音。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂普罗夫迪夫，就是读懂一种韧性——那种无论经历多少征服、改名与掩埋，文明的内核始终在等待破土而出的顽强。当你亲身站在剧场中央，声波顺着古老的石阶扩散，那一刻，你连接的不仅是公元2世纪的罗马观众，更是人类对美、戏剧与公共生活恒久不变的追求。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、最佳拍摄机位与老城漫步全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/plovdiv-roman-theatre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普罗夫迪夫古罗马剧场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Plovdiv Roman Theatre</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tsarevets-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    查
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">查雷韦茨要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tsarevets Fortress</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/veliko-tarnovo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    大
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">大特尔诺沃（沙皇之城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Veliko Tarnovo</p>
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
