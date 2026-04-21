import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '罗马尼亚马拉穆列什历史溯源｜木教堂群的沉默抵抗与匠人圣徒传奇',
  description: '探访联合国教科文组织世界遗产：马拉穆列什木教堂。穿越五百年，解码欧洲最后的极高木制哥特尖顶下，一个民族用橡木书写的信仰史诗与生存智慧。',
}

export default function WoodenChurchesMaramuresHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '罗马尼亚', href: '/destinations/europe' },
            { label: '马拉穆列什县', href: '/destinations/europe' },
            { label: '马拉穆列什木教堂群', href: '/attractions/wooden-churches-maramures-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`马拉穆列什木教堂群・Wooden Churches of Maramureș・罗马尼亚・马拉穆列什县`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在罗马尼亚北部的喀尔巴阡山褶皱里，藏着一片被时间赦免的土地——马拉穆列什。这里的标志不是石头城堡，而是指向苍穹的木质尖顶。八座被列入世界遗产的古老木教堂，如同从土地中生长出的信仰之林，其极高的哥特式木尖顶，被誉为“罗马尼亚的哥特式尖顶”。它们并非建筑师图纸上的产物，而是农民匠人用斧头和信仰，对压迫长达数个世纪的沉默宣言。抛开游玩攻略，走进马拉穆列什的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`马拉穆列什木教堂群`} />
                <InfoRow label="英文名称" value={`Wooden Churches of Maramureș`} />
                <InfoRow label="正式名称" value={`Wooden Churches of Maramureș`} />
                <InfoRow label="国家" value={`罗马尼亚`} />
                <InfoRow label="城市" value={`马拉穆列什县`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "马拉穆列什之名，源于中世纪的<strong>马拉穆列什公国</strong>。这片土地的历史，深植于达契亚人的血脉与罗马帝国的边疆之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“马拉”可能源自斯拉夫语或匈牙利语，意为“山丘”或“边界”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“穆列什”则取自流经此地的主要河流。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "名字本身，便勾勒出一幅地理与政治的画卷：群山环绕的边境之地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，这片土地的真正灵魂，并非某一座“城市”，而是星罗棋布于山谷间的村落。木教堂的起源，与17-18世纪东正教信仰在特兰西瓦尼亚地区的处境紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，特兰西瓦尼亚处于哈布斯堡帝国统治下，信仰天主教的当局对东正教徒施加诸多限制，包括禁止用石头建造教堂。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "民间有谚语流传：“石头属于国王，木头属于人民。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，马拉穆列什的农民们转向了他们最熟悉的材料：山中取之不尽的橡木与云杉。他们运用千年传承的木工技艺，将建造谷仓、农舍的经验，升华为了建造上帝的居所。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "教堂的选址也充满深意。它们通常建于村庄的高处或中心，但绝不会在古异教祭祀遗址上建造，以示与旧时代的决裂，确立新的精神中心。这一切，始于<strong>17世纪中后期</strong>，一个信仰需要隐藏，却又渴望彰显的时代。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "木教堂的每一道纹路，都镌刻着马拉穆列什人的历史。它们最震撼的印记，并非来自某场著名战役，而是一种绵延数百年的、沉默而坚韧的“抵抗”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一道印记：奥斯曼阴影下的信仰堡垒。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管特兰西瓦尼亚受哈布斯堡统治，但整个巴尔干半岛都笼罩在奥斯曼帝国的扩张阴影下。马拉穆列什地处要冲，时受侵扰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "石头教堂易被征用为堡垒或摧毁，而朴素的木结构教堂，反而在动荡中得以幸存。它们不高调，却极其坚固。高高的木栅栏（有时教堂本身就建于高台之上）是一种物理防御，而那冲入云霄的尖顶，则是一种精神防御——将村民的祈祷与希望，直接送往天国，超越尘世的苦难。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二道印记：风格融合的无声宣言。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "木教堂的极高尖顶，是哥特式建筑在木材上的惊人再现。这并非巧合。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "中世纪后期，哥特风格通过贸易和工匠传播至特兰西瓦尼亚。马拉穆列什的木匠大师们看到了那些石质哥特教堂的尖塔，被其指向神圣的垂直感深深震撼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们无法使用石头，便用橡木挑战物理的极限。于是，在<strong>苏尔代什蒂教堂</strong>（约1724年），诞生了那令人屏息的、高逾54米的尖顶——欧洲最高的木结构塔楼之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这是农民匠人对主流艺术潮流的吸收与再创造，是用最“卑微”的材料，达成最“崇高”形式的平等宣言。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第三道印记：共产主义时期的存续抗争。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间跳到20世纪下半叶的共产主义时期。政权推行无神论，许多宗教建筑被废弃或拆毁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "马拉穆列什的木教堂再次面临危机。然而，它们已深深融入社区生活的肌理。村民们以这些教堂是“文化遗产”、“祖先的杰作”为由，进行巧妙的周旋。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "许多教堂得以保存，秘密的宗教活动也在继续。<strong>普洛皮绍尔教堂</strong>（约1796年）精美的末日审判壁画中，那些对善恶的终极描绘，在无神论时代被赋予了新的隐喻力量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "木教堂，又一次保护了它的子民。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "马拉穆列什的木教堂没有留下建筑师的姓名。它们属于集体，属于无名匠师。但仍有两位人物，其生平与精神，与这些教堂的灵魂息息相关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>传奇一：匠人圣徒——尼古拉修道院长（Ioasaf）</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在<strong>巴萨那修道院</strong>（建于1390年，后经多次重建）的传统中，流传着一位传奇般的修道院长——<strong>尼古拉</strong>的故事。他并非王公贵族，而本身就是一位技艺超群的木匠。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据说在<strong>18世纪初</strong>，他不仅领导精神生活，更亲自带领修士们上山选材、设计、建造。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的手艺被视为上帝的直接恩赐。传说他制作的木十字架永不裂缝，他搭建的房梁能精准承压数百年。他打破了“劳心者治人，劳力者治于人”的界限，将体力劳动升华至神圣领域。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "修士的编年史中模糊记载：“我们的院长，用祈祷的双手握斧，砍伐的每棵树都已成为圣殿的肢体。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的一生，完美体现了马拉穆列什的核心价值观：虔诚、勤劳、自给自足。他去世后，被当地人非正式地尊为“匠人的主保圣人”。他的故事代代相传，激励着每一代木匠，将自己的职业视为一种天职。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>传奇二：雕刻时光的大师——亚历山德鲁·波诺鲁</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说尼古拉院长代表精神与劳动的合一，那么<strong>亚历山德鲁·波诺鲁</strong>（活跃于18世纪末）则代表了民间艺术登峰造极的表达。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他是来自马拉穆列什的匿名雕刻大师群体中最耀眼的一位。艺术史学家通过风格分析，将<strong>瑟尔比察教堂</strong>（建于1643年）门廊上那繁复无比的雕刻归于他或他的工坊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的刻刀下，圣经故事与当地生活奇妙交融。亚当夏娃身旁，雕刻着马拉穆列什的农民耕作；天使的衣褶里，隐藏着山间野花的纹样。他最著名的作品是“生命之树”图案，这棵树上既有基督教的天使、圣徒，也有太阳、月亮、以及本地神话中的灵兽。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "波诺鲁并非简单地复制宗教图标。他将神学本地化、生活化，让不识字的农民也能在走进教堂时，从门廊的雕刻开始，读懂整部《圣经》和他们的世界观。他的艺术，是东正教正统与达契亚民间灵魂的完美联姻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "通过这两位人物——一位是身体力行的精神领袖，一位是才华横溢的民间艺术家——我们看到了木教堂何以不朽。它们既是信仰的容器，也是社区智慧与美学的结晶。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "木教堂的传奇，不仅在于史册，更在于村民口耳相传的故事中，那是信仰与生存智慧交织的鲜活记忆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>“无钉之约”的传说</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最广为流传的，是关于教堂建造“不使用一根铁钉”的传说。这并非完全准确（部分连接处会使用木钉或少量铁件），但其精神内核无比真实。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说中，大师在开工前需斋戒祈祷，与上帝立约：这座圣殿将完全由上帝创造的木材构成，仅凭榫卯技艺结合，象征人类的谦卑与对神造物的纯粹尊重。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "老人会告诉孩童：“铁钉会锈，会抱怨风雨的侵蚀。但木头与木头拥抱，它们一同呼吸，一同变老， silent like faith itself。”（铁钉会锈，会抱怨风雨的侵蚀。但木头与木头拥抱，它们一同呼吸，一同变老，沉默如信仰本身。）" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>守护天使“普鲁瓦鲁”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每个教堂的尖顶顶端，都有一个金属十字架。但在传说里，真正守护教堂的，是一位叫做“普鲁瓦鲁”的无形天使。它住在最高的那根脊梁里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每当暴风雨来临，或灾祸逼近村庄，人们会听到尖顶传来低沉的“嗡鸣”声，那是普鲁瓦鲁在振动它的木质翅膀，驱散乌云与厄运。新教堂落成时，木匠大师会秘密地在主梁上刻一个特殊的太阳符号，那是为普鲁瓦鲁打开的“门”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>胡桃木的禁忌</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地有严格的木材选用传统。教堂的主体结构必须使用<strong>橡木</strong>，因其坚硬、耐久，象征信仰的坚定。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但绝对禁止使用<strong>胡桃木</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说胡桃树荫下不长草，其树根会释放毒素。这被附会为犹大在胡桃树上吊自尽后的诅咒。因此，任何神圣的建筑都不可沾染此“不祥”之木。这看似迷信的禁忌，实则蕴含着朴素的生态观察与道德训诫。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，让冰冷的建筑充满了温度与灵性。它们解释了规则，抚慰了恐惧，将一座座木结构，真正变成了“活着的教堂”。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当旅人穿越山丘，望见那些刺破绿色地平线的木质尖顶时，所见证的远非一片“风景如画”的遗产。它们是<strong>活态的历史</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每一座教堂，至今仍是村庄跳动的心脏。周日礼拜的钟声依旧洪亮，洗礼、婚礼、葬礼的生命仪式仍在其中循环。匠人的后代，依然守护着修复的秘技。这里没有沦为博物馆式的标本，时间在这里是循环的，而非线性的终结。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂马拉穆列什，是读懂一种生存的韧性。在政治与宗教的夹缝中，一群普通人用最卑微的材料——木头，完成了最崇高的反抗：不是刀剑相向，而是持续地建造、坚定地信仰、美丽地生活。他们的史诗，写在橡木的年轮里，刻在门廊的浮雕上，回荡在钟楼的嗡鸣中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些木教堂，是欧洲精神地图上一处不可复制的坐标。它们提醒我们，文明的力量不仅存在于巨石宫殿与帝国史诗，更存在于山间村落里，那双握斧的、虔诚而灵巧的手。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？如何探访这八座世界遗产教堂、交通、最佳摄影点与当地节日全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/corvin-castle-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    胡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">胡内多阿拉科尔文城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Corvin Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/black-church-brasov" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布拉索夫黑教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Black Church of Brasov</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/balkan-castle-salt-mine-journey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    戈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">戈卢巴茨要塞与图尔达盐矿：穿越巴尔干的时光隧道</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Golubac Fortress & Turda Salt Mine</p>
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
