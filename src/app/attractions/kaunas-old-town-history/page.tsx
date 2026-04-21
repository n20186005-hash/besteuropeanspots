import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '考纳斯历史溯源｜两度首都的立陶宛之心，一座被低估的百年传奇小城',
  description: '探秘立陶宛“第二首都”考纳斯：从条顿骑士团要塞到短暂的国家心脏，聆听老城石头诉说的东欧百年风云与艺术传奇。',
}

export default function KaunasOldTownHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '考纳斯老城', href: '/attractions/kaunas-old-town-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`考纳斯老城・Kaunas Old Town・立陶宛・考纳斯县`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说维尔纽斯是立陶宛典雅的王冠，那么考纳斯，就是它倔强而充满创造力的心脏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座位于涅里斯河与涅穆纳斯河交汇处的城市，在20世纪的动荡中，曾两度被推上历史的前台，成为立陶宛短暂却辉煌的临时首都。它的故事，是一部关于抵抗、流亡与文艺复兴的东欧史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的老城，没有过度的商业喧嚣，只有鹅卵石街道、哥特与文艺复兴风格的建筑立面，以及空气中弥漫的、属于“考纳斯现代主义”的独特气息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "抛开游玩攻略，走进考纳斯的尘封往事，遇见属于它的坚韧、失落与不朽传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`考纳斯老城`} />
                <InfoRow label="英文名称" value={`Kaunas Old Town`} />
                <InfoRow label="正式名称" value={`Kaunas Old Town`} />
                <InfoRow label="国家" value={`立陶宛`} />
                <InfoRow label="城市" value={`考纳斯县`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "考纳斯的起源，深植于波罗的海地区永恒的冲突与贸易之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字最早见于<strong>1361年</strong>的编年史。普遍认为，“Kaunas”源自古波罗的语词汇，意为“低洼的草地”或“沼泽地”，精准描述了其位于两条大河交汇处的冲积平原地理特征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但地理的馈赠也伴随着风险。这里自古便是交通要冲与兵家必争之地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>13世纪末</strong>，立陶宛大公国为抵御来自西方的<strong>条顿骑士团</strong>的持续侵扰，决定在此建立一座坚固的<strong>石头城堡</strong>。这座城堡的遗迹至今仍矗立在涅穆纳斯河畔，它是考纳斯作为<strong>军事防御前哨</strong>诞生的最直接证明。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的定居点便在城堡的庇护下，于河对岸逐渐形成。<strong>1408年</strong>，维陶塔斯大公授予考纳斯<strong>马格德堡权利</strong>，这意味着城市获得了自治权，可以建立市政厅、设立集市、发展手工业与贸易。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "自此，这座“低地城堡”正式登上历史舞台，从一个战略据点，转变为连接汉萨同盟与东欧腹地的重要<strong>商贸枢纽</strong>。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "考纳斯的历史，是东欧地缘政治变动最敏感的晴雨表。它的建筑，便是刻满记号的石碑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>15-16世纪的“黄金时代”</strong>，得益于优越的河运位置，考纳斯成为立陶宛大公国最重要的内陆港之一。来自西欧的布料、盐、鲱鱼，与来自东方的毛皮、蜂蜡、木材在此交换。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如今老城中心的<strong>市政厅</strong>，被誉为“白天鹅”，其底层的哥特式结构便建于那个商贸鼎盛的时期。广场周围色彩柔和的商人之家，无声诉说着往日的繁华。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史的转折在<strong>1795年</strong>到来。第三次瓜分波兰-立陶宛联邦后，考纳斯被纳入<strong>俄罗斯帝国</strong>版图。俄国沙皇为了抹去立陶宛的民族记忆，推行严苛的<strong>俄罗斯化政策</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位19世纪的旅行者在日记中写道：“在这里，你听到的官方语言是俄语，看到的标识是西里尔字母，但人们的眼神和低语中，仍燃烧着立陶宛的魂灵。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但压迫催生了反抗。这座城市成为了<strong>立陶宛民族复兴运动</strong>的 clandestine中心。秘密印刷所在此运转，将用拉丁字母书写的立陶宛语书籍偷运过境，对抗俄国的文化灭绝。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "考纳斯最深刻的历史烙印，莫过于<strong>1919-1940年</strong>。这一时期，维尔纽斯地区被波兰占领，考纳斯被迫临危受命，成为<strong>立陶宛共和国的临时首都</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这短暂的二十年，却是考纳斯城市性格定型的“黄金时代”。国家倾注资源建设，城市规模急剧扩张，在市中心新区催生了独一无二的 <strong>“考纳斯现代主义”建筑浪潮</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些建筑融合了装饰艺术、立体主义、新古典主义与立陶宛民族符号，大胆、自信、充满未来感，是年轻共和国昂扬精神的物质化身。它们让考纳斯赢得了“小巴黎”的绰号。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在考纳斯担任临时首都的激荡岁月里，一位天才的灵魂与这座城市深深共鸣，并在此达到创作的巅峰。他就是<strong>米科拉斯·康斯坦蒂纳斯·丘尔廖尼斯</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "丘尔廖尼斯（<strong>1875-1911</strong>）是立陶宛的国宝，一位罕见的<strong>通感艺术家</strong>——他既是作曲家，也是画家。他相信色彩拥有声音，旋律可以化作形状。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他出生于维尔纽斯附近，但人生与事业的成熟期与考纳斯紧密相连。正是在这里，他参与了蓬勃的民族文化运动，并留下了最丰富的遗产。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1907年</strong>，他在考纳斯组织并举办了立陶宛有史以来第一场<strong>大型艺术展览</strong>。更重要的是，他与一群志同道合的艺术家、音乐家共同创立了 <strong>“立陶宛艺术协会”</strong> ，奠定了这个国家现代艺术发展的基石。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的画作《国王》、《十字架之山》、《奏鸣曲》系列，将立陶宛的神话、风景与宇宙星辰融为一体，充满神秘主义与象征色彩。同时，他创作了交响诗《大海》、钢琴曲等大量音乐作品。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "他曾写道：“我试图用声音绘画，用色彩作曲。整个宇宙是一首伟大的交响乐，我们都是其中的音符。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "不幸的是，这位天才因积劳成疾和精神困扰，于1911年英年早逝，未能亲眼见到他深爱的立陶宛获得独立。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，他的精神永远留在了考纳斯。今天的<strong>M. K. Čiurlionis 国家艺术博物馆</strong>（其分馆位于他曾经居住和工作过的街区）收藏了他最核心的作品。漫步在考纳斯的现代主义街区，那些建筑上抽象、几何的装饰线条，仿佛也能让人瞥见丘尔廖尼斯画作中的旋律与结构。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了丘尔廖尼斯，考纳斯还哺育或吸引了众多文化精英。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "诺贝尔文学奖得主<strong>切斯瓦夫·米沃什</strong>的童年与青少年时期在此度过，城市的河流与街景后来流淌在他的诗篇之中。立陶宛第一位总统<strong>安塔纳斯·斯梅托纳</strong>，其官邸就设在考纳斯。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "还有更多无名者：那些在咖啡馆里密谋复兴的作家，那些在新建的大学里授课的教授，那些设计出未来主义建筑的年轻设计师……他们共同塑造了考纳斯作为二十世纪初立陶宛<strong>智力与创意之都</strong>的传奇身份。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "考纳斯的传说，往往与它的建筑和河流一样古老，交织着爱情、悲剧与超自然的力量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中最著名的，莫过于关于<strong>市政厅钟楼</strong>的传说。这座被昵称为“白天鹅”的优雅建筑，其钟楼在历史上曾多次遭遇火灾与重建。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "民间流传，钟楼内住着一位“钟楼守护灵”。每当城市即将遭遇重大灾难或外敌入侵时，大钟会在深夜无人敲击时自行鸣响，声音沉郁而哀伤，向市民发出警示。据说，在二战爆发前夕，就有老居民声称听到了这不祥的自鸣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则围绕着<strong>考纳斯城堡</strong>。相传在立陶宛大公国时期，一位名叫<strong>考纳斯</strong>的年轻勇士（城市据信以他命名）在此抵御十字军。他英勇战死，鲜血渗入城堡的基石。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的爱人，一位女祭司，因悲痛而投涅穆纳斯河自尽。自此，人们传说在月圆之夜，能在城堡的废墟上看到勇士透明的身影持剑巡逻，而在河面的薄雾中，则会传来女子哀婉的哭泣声。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "老城的许多老房子也有自己的“住户”传说。比如在自由大道附近一栋装饰艺术风格的公寓里，据说住着一位<strong>“镜子里的绅士”</strong>。他是一位20世纪30年代绅士气质的幽灵，只出现在某些特定的古老镜子里，默默注视着房客，却从不打扰，仿佛只是舍不得离开这个他曾度过美好年华的现代主义之家。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，无论是关乎家国命运，还是个人情愫，都为考纳斯砖石木瓦的实体，披上了一层朦胧而富有情感的薄纱，让历史变得更加可感、可叹。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在考纳斯老城，你触摸的不仅是中世纪哥特式的墙砖，更是一段<strong>压缩的、高强度的东欧现代史</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有维也纳的奢华，没有布拉格的浪漫童话感。考纳斯的气质是<strong>深沉、坚韧且略带忧郁的</strong>。它的美，在于那份背负着历史重量的真实感，在于两次被迫成为首都的“临危受命”所激发的、短暂却无比灿烂的文化爆发。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它提醒我们，首都的身份并非文明深度的唯一标尺。恰恰是在主流视野边缘的“第二城市”里，往往保存着一个民族在逆境中最为顽强、最具创造力的精神火种。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从丘尔廖尼斯通感艺术中流淌出的立陶宛灵魂，到遍布街区的考纳斯现代主义建筑所彰显的共和国雄心，再到战争伤痕的沉默纪念碑——考纳斯老城本身就是一座<strong>露天的、活态的历史博物馆</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂考纳斯，便是读懂了立陶宛民族在20世纪寻求独立、身份与表达的一部微观史诗。它或许小众，却绝对深刻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/nida-lithuania" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    尼
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">尼达</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Nida</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/klaipeda-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克莱佩达老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Klaipėda Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/anyksciai" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尼克什奇艾</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Anykščiai</p>
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
