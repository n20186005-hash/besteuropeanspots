import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '施帕尔特 Spalt｜探秘德国啤酒的灵魂故乡与高耸入云的啤酒花木屋奇观 - 最佳欧洲景点',
  description: '当车子缓缓驶入施帕尔特，你可能会怀疑自己误入了某个格林童话的片场，但空气里弥漫的味道会立刻告诉你真相。那是一种清冽的、略带辛辣的草本植物香气，混着老木头和湿润泥土的味道，钻进鼻腔——这是啤酒花的味道，是流淌在德国啤酒灵魂深处的原始香气。施帕尔特不是一个充斥着大型酿酒厂喧嚣的地方，恰恰相反，它安静得能',
}

export default function SpaltHopfenerlebnispfadPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '德国', href: '/destinations/europe' },
            { label: '施帕尔特', href: '/destinations/europe' },
            { label: '施帕尔特啤酒花之乡', href: '/attractions/spalt-hopfenerlebnispfad' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`施帕尔特啤酒花之乡・Spalt・德国・施帕尔特`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当车子缓缓驶入施帕尔特，你可能会怀疑自己误入了某个格林童话的片场，但空气里弥漫的味道会立刻告诉你真相。那是一种清冽的、略带辛辣的草本植物香气，混着老木头和湿润泥土的味道，钻进鼻腔——这是啤酒花的味道，是流淌在德国啤酒灵魂深处的原始香气。施帕尔特不是一个充斥着大型酿酒厂喧嚣的地方，恰恰相反，它安静得能听见风吹过百叶窗的咯吱声。那些高耸的、像戴着奇特帽子的木屋，静默地矗立在每一条巷弄里，它们不是城堡，却有着同样令人仰视的威严。
走在用鹅卵石铺成的狭窄街道上，光影在色彩柔和的木桁架墙壁上跳动。你的眼睛会不由自主地被那些屋顶吸引。它们拔地而起，远远高出正常的民居，仿佛一层之上又凭空加建了两三层，但那些“楼层”的墙壁上，没有窗户，只有一排排整齐的、像巨大钢琴琴键一样的木制百叶窗。有的窗叶紧闭，守护着内部的秘密；有的则半开半阖，仿佛在呼吸。你会看到本地老人不疾不徐地骑着自行车经过，车篮里装着面包，他们对这些奇景早已司空见惯，这是他们生活里最寻常的背景板。
这种魔力，就在于日常与非凡的共生。这里没有为了游客而设的夸张表演，所有独特的风貌都源于数百年来一项再实际不过的农事：烘干啤酒花。那些高耸的“帽子”，是功能性建筑经过岁月沉淀后，演化成的美学符号。它们讲述的不是帝王将相的丰功伟绩，而是普通农人、种植者为了保存一年的辛劳与收成所凝聚的智慧。你能感觉到，整座小镇的脉搏，是与大地和作物一起跳动的。当你在街角小酒馆坐下，点一杯用本地啤酒花酿造的弗兰肯啤酒，那种从土地到酒杯的完整风土故事，才会在你舌尖彻底绽放。这不仅仅是一杯啤酒，这是一口饮下的、有形的田园诗。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当车子缓缓驶入施帕尔特，你可能会怀疑自己误入了某个格林童话的片场，但空气里弥漫的味道会立刻告诉你真相。那是一种清冽的、略带辛辣的草本植物香气，混着老木头和湿润泥土的味道，钻进鼻腔——这是啤酒花的味道，是流淌在德国啤酒灵魂深处的原始香气。施帕尔特不是一个充斥着大型酿酒厂喧嚣的地方，恰恰相反，它安静得能听见风吹过百叶窗的咯吱声。那些高耸的、像戴着奇特帽子的木屋，静默地矗立在每一条巷弄里，它们不是城堡，却有着同样令人仰视的威严。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走在用鹅卵石铺成的狭窄街道上，光影在色彩柔和的木桁架墙壁上跳动。你的眼睛会不由自主地被那些屋顶吸引。它们拔地而起，远远高出正常的民居，仿佛一层之上又凭空加建了两三层，但那些“楼层”的墙壁上，没有窗户，只有一排排整齐的、像巨大钢琴琴键一样的木制百叶窗。有的窗叶紧闭，守护着内部的秘密；有的则半开半阖，仿佛在呼吸。你会看到本地老人不疾不徐地骑着自行车经过，车篮里装着面包，他们对这些奇景早已司空见惯，这是他们生活里最寻常的背景板。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种魔力，就在于日常与非凡的共生。这里没有为了游客而设的夸张表演，所有独特的风貌都源于数百年来一项再实际不过的农事：烘干啤酒花。那些高耸的“帽子”，是功能性建筑经过岁月沉淀后，演化成的美学符号。它们讲述的不是帝王将相的丰功伟绩，而是普通农人、种植者为了保存一年的辛劳与收成所凝聚的智慧。你能感觉到，整座小镇的脉搏，是与大地和作物一起跳动的。当你在街角小酒馆坐下，点一杯用本地啤酒花酿造的弗兰肯啤酒，那种从土地到酒杯的完整风土故事，才会在你舌尖彻底绽放。这不仅仅是一杯啤酒，这是一口饮下的、有形的田园诗。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`施帕尔特啤酒花之乡`} />
                <InfoRow label="英文名称" value={`Spalt`} />
                <InfoRow label="正式名称" value={`Hopfenland Spalt`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`施帕尔特`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这里是德国最古老、最负盛名的啤酒花指定种植区之一，被誉为“啤酒花之城”，其出产的啤酒花是酿造纯净法啤酒的基石。`} />
                <InfoRow label="建筑特色" value={`小镇遍布着为风干啤酒花而建的“啤酒花屋”，其标志性特征是屋顶高耸如塔，布满可调节的木制通风百叶窗。`} />
                <InfoRow label="建筑风格" value={`以德国中世纪弗兰肯地区木桁架建筑为基础，融合了高度功能性的农业工业建筑形式。`} />
                <InfoRow label="文化价值" value={`这里是理解德国啤酒文化乃至世界啤酒酿造史的活态教科书，生动展示了农业传统如何塑造了城镇的独特肌理与社区生活。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇全年可自由游览。啤酒花体验小径（HopfenErlebnisPfad）及大部分户外景点无时间限制。核心的啤酒花博物馆（HopfenBierGut）开放时间为：4月1日至10月31日，每周四至周日下午1点至5点；11月至次年3月仅周日开放。小镇旅游局提供导览服务，需至少提前三天预约。`} />
              <InfoRow label="门票价格" value={`小镇本身无需门票。啤酒花博物馆门票为成人5欧元，优惠票（学生、残疾人）3欧元，家庭票（2大+2小）12欧元。跟随旅游局的专业导览游（约2小时）费用为每人8欧元，10人以上团队可议价。`} />
              <InfoRow label="地址" value={`HopfenBierGut， Marktplatz 1, 91174 Spalt, Germany`} />
              <InfoRow label="交通方式" value={`从纽伦堡国际机场（NUE）出发最为便捷。在机场直接搭乘开往纽伦堡中央火车站的S2城铁（约25分钟）。在纽伦堡主站（Nürnberg Hbf）换乘区域火车RE（R6线方向：Treuchtlingen），在施帕尔特站（Spalt (Mfr)）下车，全程约需45分钟至1小时，班次每小时1-2班。从火车站步行约15分钟即可进入老城区。自驾则更自由，从纽伦堡沿B2公路向南，转入州道St2220即可抵达，小镇外围有免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "施帕尔特的故事，几乎就是一部以啤酒花为主角的编年史。早在公元8世纪左右，本笃会的修士们就在修道院的园圃里种植了“蛇麻草”，也就是啤酒花，最初是作为药用植物。他们偶然发现，这种略带苦味的藤蔓植物果实，不仅能延长啤酒的保存时间，还能赋予其清爽的苦味和迷人的香气，这比之前用各种奇怪草药混合物（所谓的“格鲁特”）调味要稳定和可口得多。这个发现，悄然改变了一切。到了13世纪，施帕尔特已经因为其优质的啤酒花而声名鹊起，1348年获得了城市权，经济命脉便与这绿色的“黄金”紧紧绑定。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，真正塑造了小镇今天这幅奇特面貌的，是一场持续了几个世纪的“干燥战争”。啤酒花采摘后极易腐烂，必须迅速脱水。最初，种植者只能在自家普通的居住楼层里用简易炉火烘干，效率低且火灾风险极高。一场大火可能让一年的收成和整个家当化为乌有。于是，一种新的建筑形式在民间智慧中诞生：建造独立的、高耸的、与主居住区分离的烘干房。高高的空间利于热空气上升循环，遍布墙体的木制百叶窗则可以精确控制通风，让潮湿的空气排出，同时避免雨水侵入。这不仅是建筑创新，更是一条严格的生活法则。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇的管理者们深刻认识到这一点。早在1579年，施帕尔特就颁布了可能是世界上最早的“啤酒花建筑法规”，明文规定啤酒花烘干房必须用非易燃材料（主要是石材）建造底层，并且必须与主要的木结构居住房屋保持足够的防火距离。这项充满远见的规定，不仅保护了无数家庭免受火灾吞噬，也无意中催生了小镇独特的空间格局：那些功能至上的高塔般的烘干房，从住宅中独立出来，星罗棋布地穿插在街巷之中，形成了今天我们所见的、居住空间与生产空间诗意交织的独特肌理。每一栋留存下来的啤酒花屋，都是一个家庭几个世纪以来辛勤劳作与生存智慧的纪念碑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "19世纪，工业革命的浪潮也波及了这个农业小镇。蒸汽动力烘干机的出现，使得大规模、高效率的工业化烘干成为可能。小镇边缘建起了更大规模的烘干厂，传统的家庭式烘干房逐渐结束了它们的历史使命。你或许以为故事到此就结束了，这些木屋会像许多旧时代的产物一样被推倒遗忘。但施帕尔特人没有。他们将这些陪伴了家族数百年的“老伙计”小心翼翼地保存、改造。有的变成了别致的住宅，有的成为储藏室，而它们的存在本身，就成了小镇无可替代的遗产和名片。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "两次世界大战和现代全球化的冲击，也未能让施帕尔特放弃它的金色骄傲。尽管面临着国际市场的激烈竞争，但“施帕尔特啤酒花”这个品牌，凭借其悠久的声誉和独特的风味特征（香气高雅、苦味纯净），依然是全球顶级酿造师心中的瑰宝。今天，当你漫步小镇，看到的不仅是历史的化石，更是一个活着的传统。本地的啤酒花种植者协会依然活跃，每年秋天，空气中仍会飘起烘干啤酒花时那标志性的、令人心安的神奇香气。从修士的尝试，到严苛的防火法令，再到工业转型，施帕尔特始终围绕着一株绿色藤蔓，书写着它的坚韧、智慧与独特的美学。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天的时间给施帕尔特，最好的抵达时间是上午9点左右，那时晨雾可能还未完全散去，光线柔和，小镇刚刚苏醒。整体游览节奏应是缓慢而沉浸的，核心在于“观察”与“体验”。上午以漫步探索小镇独特的建筑肌理和感官印象为主，中午品尝本地风味，下午则深入啤酒花博物馆了解背后的科学与历史，最后用一杯完美的啤酒作为终点。这样的安排让你从外在的奇观，逐步深入到内在的文化内核，完成一次完整的认知旅程。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇石板路多且不平，务必穿一双舒适耐走的平底鞋。自驾车务必停在镇外指定停车场，老城内几乎全是步行区，误入会被罚款。虽然小镇非常安全，但拍摄私人住宅（尤其是改造后的啤酒花屋）时，请注意礼貌，如果主人在花园里，一个微笑和示意会让他们更乐意分享故事。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先从老城边缘的免费停车场出发，故意绕一点远路，从远处田埂上回望小镇，看那些高耸的木屋屋顶如何像一座座绿色海洋中的灯塔。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着 Hauptstraße 主街慢慢踱进老城中心，不用看地图，只管仰头追寻那些造型各异、布满鳞片般百叶窗的啤酒花屋，用手触摸它们被岁月打磨得温润的木梁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要拐进狭窄的 Schützenstraße 巷子，这里密集的啤酒花屋几乎让天空变成了一条由百叶窗线条构成的峡谷，感受那种被历史包裹的压迫与亲切。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在集市广场（Marktplatz）的“啤酒花-啤酒-珍宝”（HopfenBierGut）博物馆里花上一个多小时，亲手掂量干啤酒花球果的轻盈，闻一闻不同品种的香气差异。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从博物馆出来后，就在广场边的老牌餐馆“金色十字”（Zum Goldenen Kreuz）坐下，点一份用啤酒汁炖煮的弗兰肯牛肉卷，配上面疙瘩和本地沙拉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`饭后消食，可以去小镇南边的“啤酒花体验小径”（HopfenErlebnisPfad）走一走，这是一条穿过真实啤酒花田的科普步道，在夏季能看到藤蔓攀爬的壮观景象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午晚些时分，找一家传统的酒馆如“啤酒花农舍”（Hopfenbauer），一定要点一杯注明使用“施帕尔特啤酒花”酿造的桶装鲜啤，坐在户外慢慢啜饮。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果赶上夏末初秋（8月底至9月初）的啤酒花采收季，那你的行程将充满惊喜，甚至可以询问旅游局是否有机会参观现代化的烘干工厂。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`集市广场东侧仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点的侧光时分，站在广场喷泉附近，以圣埃默拉姆教堂的塔楼为远景，聚焦前景一栋经典啤酒花屋的百叶窗立面，能拍出历史层次感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`Schützenstraße 巷弄纵深`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏光线倾斜时，站在巷子一端，利用两侧高耸木屋形成的天然框架，拍摄向远处延伸的鹅卵石路和光影斑驳的木墙，营造深邃感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`啤酒花田前景小镇全景`}</h4>
                  <p className="text-sm text-gray-700">{`在镇南的体验小径上，找到一处啤酒花藤架（夏季绿叶繁茂时最佳）作为前景，透过藤蔓的缝隙拍摄后方小镇屋顶的轮廓线，体现“花与城”的主题。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`博物馆内细节特写`}</h4>
                  <p className="text-sm text-gray-700">{`利用博物馆窗格射入的光线，近距离拍摄干燥的啤酒花球果、古老的木制烘干工具，或墙面剥落的古老涂料，捕捉质感与岁月痕迹。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`本地酒馆氛围`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚华灯初上时，在酒馆室内找一扇有百叶窗的窗边座位，拍摄桌上泛着泡沫的金色啤酒杯，背景是窗外朦胧的木屋剪影和暖黄色灯光，故事感十足。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`木制百叶窗的纹理和光影是绝佳的拍摄主题，多尝试在不同时间、不同角度观察其变化。使用偏振镜可以有效减少木墙表面的反光，让色彩更饱和。请注意，未经允许不可飞无人机，小镇空域有严格限制以保护居民隐私和历史建筑。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温馨民宿体验`}</h4>
                  <p className="text-sm text-blue-800">{`住在老城中心一栋由啤酒花屋改造的民宿阁楼里，木梁结构完好，清晨能在百叶窗透进的缕缕阳光和淡淡的木头香气中醒来。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色酒店之选`}</h4>
                  <p className="text-sm text-green-800">{`“ zur Post” 酒店，本身就是一栋历史悠久的建筑，房间简约舒适，其餐厅以精湛的弗兰肯地方菜肴闻名，下楼就能享用美食。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`乡村宁静居所`}</h4>
                  <p className="text-sm text-yellow-800">{`选择小镇外围一家真正的啤酒花农庄提供的度假公寓，被广阔的田野环绕，晚上能看见璀璨的星空，白天可以跟随主人家去田间简单劳作。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`便捷现代选择`}</h4>
                  <p className="text-sm text-purple-800">{`位于施帕尔特近郊、靠近公路的“Landhotel”乡村酒店，提供现代化的设施和宽敞的房间，适合自驾家庭，通常还带有不错的桑拿区域。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "旅游旺季（尤其是啤酒花采收季和夏季假期）房源相当紧张，务必提前数月预订。住在老城中心固然有味道，但周末夜晚可能有酒馆传来的微弱喧闹声，浅眠者需考虑。选择农庄住宿意味着需要一辆车，但获得的宁静和真实体验是无与伦比的。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开施帕尔特时，你带走的不会只是相机里的照片，更是一种被重新校准后的“慢”的感知。在这个追求效率、一切速成的时代，这里依然遵循着作物的生长周期，珍视着几个世纪前传承下来的建筑智慧，并用一整座城镇的样貌来证明这种坚持的价值。它告诉我们，美和独特性，往往诞生于最实际的需求和最朴素的生存哲学之中。那些高耸的木屋不是设计师的炫技，而是火灾威胁下逼出的生存之道，最终却成了无可复制的风景。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "对于热爱深度游的旅人来说，施帕尔特是一剂温柔的解毒剂。它不像那些宏伟宫殿让你惊叹于人类的权力，也不像自然奇观让你敬畏于造物的神力。它让你看到的，是人类如何与土地、与作物、与季节和谐共生，并在此过程中创造出充满尊严与美感的文化景观。在这里，你喝下的每一口啤酒，都连接着一段看得见摸得着的历史，一片你能漫步其中的田野，和一群依然以此为荣的人们。它提醒我们，真正的深度，在于理解一个地方为何成为它现在的样子，并深深珍惜那种独特。这正是施帕尔特，这个啤酒花灵魂故乡，所能给予我们最珍贵的礼物。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/veste-coburg" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科堡要塞（弗兰肯的王冠）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Veste Coburg</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/prora-nazi-beach-resort-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普罗拉</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Prora</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/wernigerode-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    韦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">韦尔尼格罗德城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Wernigerode Castle</p>
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
