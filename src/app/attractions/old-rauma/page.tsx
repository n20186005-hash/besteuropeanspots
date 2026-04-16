import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '劳马老城 Old Rauma｜迷失在北欧最大的木构童话镇 - 最佳欧洲景点',
  description: '当我第一次拐进劳马老城的街巷时，时间仿佛被调慢了速度。空气中弥漫着一股清冽的、混合着海风咸味和古老松木微香的气息，阳光透过云层，柔软地洒在那些高低错落的木屋墙壁上。那些墙壁不是单调的，而是带着岁月的滤镜——温柔的鹅黄、沉静的土褐、褪了色的灰蓝，还有那标志性的、被称为“劳马蓝”的窗框，像给每栋房子画上...',
}

export default function OldRaumaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '劳马老城', href: '/attractions/old-rauma' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`劳马老城・Old Rauma・芬兰・劳马`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当我第一次拐进劳马老城的街巷时，时间仿佛被调慢了速度。空气中弥漫着一股清冽的、混合着海风咸味和古老松木微香的气息，阳光透过云层，柔软地洒在那些高低错落的木屋墙壁上。那些墙壁不是单调的，而是带着岁月的滤镜——温柔的鹅黄、沉静的土褐、褪了色的灰蓝，还有那标志性的、被称为“劳马蓝”的窗框，像给每栋房子画上了一道沉静的眼线。脚下的卵石路被无数脚步打磨得温润，走在上面几乎听不到自己的脚步声，只有远处海鸥的鸣叫和某扇木门被推开时轻微的“吱呀”声，清晰得像是这个静谧世界的唯一心跳。
这里不是一个被真空包装的博物馆。你很快就会发现，这些有着两三百年历史的房子里，依然住着人。窗台上摆着天竺葵，晾衣绳上飘着素色的床单，自行车就随意地靠在彩色的门廊边。一位老奶奶正从二楼的窗户探出身来给花浇水，看到我这个拿着相机、一脸好奇的异乡人，她微笑着点了点头，那笑容里有一种自然而然的安宁。这就是劳马老城最打动人的地方：它活着。历史不是橱窗里的展品，而是邻居家飘出的咖啡香，是午后阳光下发呆的猫，是蕾丝工坊里指尖穿梭的银梭。
我顺着窄巷往里走，偶尔会经过一个敞开的庭院大门。忍不住探头望去，里面是另一片天地——鹅卵石铺地，中央可能有一口古老的水井，四周的木廊下堆着劈好的柴火。这种内向的、宁静的庭院空间，是劳马老城建筑的灵魂。它把家庭的私密生活围合起来，却又通过一扇门与公共的街巷相连，形成了一种亲密而安全的社区感。你可以想象，几百年前的商人和水手家庭，就是在这样的庭院里谈论着远航的见闻，孩子们在木廊下嬉戏，女人们则一边编织着著名的劳马蕾丝，一边闲话家常。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当我第一次拐进劳马老城的街巷时，时间仿佛被调慢了速度。空气中弥漫着一股清冽的、混合着海风咸味和古老松木微香的气息，阳光透过云层，柔软地洒在那些高低错落的木屋墙壁上。那些墙壁不是单调的，而是带着岁月的滤镜——温柔的鹅黄、沉静的土褐、褪了色的灰蓝，还有那标志性的、被称为“劳马蓝”的窗框，像给每栋房子画上了一道沉静的眼线。脚下的卵石路被无数脚步打磨得温润，走在上面几乎听不到自己的脚步声，只有远处海鸥的鸣叫和某扇木门被推开时轻微的“吱呀”声，清晰得像是这个静谧世界的唯一心跳。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里不是一个被真空包装的博物馆。你很快就会发现，这些有着两三百年历史的房子里，依然住着人。窗台上摆着天竺葵，晾衣绳上飘着素色的床单，自行车就随意地靠在彩色的门廊边。一位老奶奶正从二楼的窗户探出身来给花浇水，看到我这个拿着相机、一脸好奇的异乡人，她微笑着点了点头，那笑容里有一种自然而然的安宁。这就是劳马老城最打动人的地方：它活着。历史不是橱窗里的展品，而是邻居家飘出的咖啡香，是午后阳光下发呆的猫，是蕾丝工坊里指尖穿梭的银梭。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`我顺着窄巷往里走，偶尔会经过一个敞开的庭院大门。忍不住探头望去，里面是另一片天地——鹅卵石铺地，中央可能有一口古老的水井，四周的木廊下堆着劈好的柴火。这种内向的、宁静的庭院空间，是劳马老城建筑的灵魂。它把家庭的私密生活围合起来，却又通过一扇门与公共的街巷相连，形成了一种亲密而安全的社区感。你可以想象，几百年前的商人和水手家庭，就是在这样的庭院里谈论着远航的见闻，孩子们在木廊下嬉戏，女人们则一边编织着著名的劳马蕾丝，一边闲话家常。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`劳马老城`} />
                <InfoRow label="英文名称" value={`Old Rauma`} />
                <InfoRow label="正式名称" value={`Old Rauma`} />
                <InfoRow label="国家" value={`芬兰`} />
                <InfoRow label="城市" value={`劳马`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`北欧地区最大、保存最完好的木结构历史城镇中心，见证了芬兰数百年的海洋贸易与文化交融。`} />
                <InfoRow label="建筑特色" value={`由超过600栋紧密相连的18-19世纪木屋构成的迷宫，拥有独特的“劳马蓝”窗框、繁复的木雕装饰和宁静的内庭院。`} />
                <InfoRow label="建筑风格" value={`以新文艺复兴风格为主，混合了哥特复兴、新古典主义及本土民间建筑元素的独特北欧木构城镇风格。`} />
                <InfoRow label="文化价值" value={`1991年被联合国教科文组织列为世界文化遗产，不仅是建筑瑰宝，更是芬兰传统生活方式和手工艺（尤其是蕾丝制作）活态传承的圣地。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年全天24小时开放公共区域（街道、广场）。内部的小型博物馆和部分向公众开放的历史建筑开放时间各异，通常为夏季（6月至8月）每天10:00-18:00；冬季（9月至次年5月）工作日缩短或仅周末开放，行前务必在劳马旅游局官网核实具体信息。大多数建筑外观随时可参观。`} />
              <InfoRow label="门票价格" value={`漫步古城街道及参观外部建筑完全免费。进入分散的独立小博物馆（如基尔科家宅博物馆、劳马海事博物馆等）需单独购票，成人票价约在6-10欧元之间，通常有学生及儿童优惠票。建议购买“劳马老城联票”，可在大部分售票点获取，性价比更高。`} />
              <InfoRow label="地址" value={`Old Rauma, 26100 Rauma, Finland`} />
              <InfoRow label="交通方式" value={`从赫尔辛基万塔国际机场（HEL）出发：最便捷的方式是乘坐芬兰国铁VR的火车，从机场火车站直达劳马火车站，车程约3-3.5小时，班次较为频繁，可通过VR官方App提前购票以获得优惠。从图尔库出发：自驾或乘坐长途巴士约1-1.5小时即可抵达。劳马火车站/巴士站距离老城仅1.5公里，拖着行李步行约20分钟，也可乘坐当地公交或打车轻松抵达。老城内部为步行区，车辆禁止入内。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`劳马的故事，要从波罗的海的波涛说起。它的灵魂里，一半是木头，一半是海水。早在14世纪，这里就因为优越的港口位置获得了城镇特许状，成为汉萨同盟贸易网络上一个活跃的节点。来自斯德哥尔摩、塔林、吕贝克的商船载着毛皮、焦油和黄油而来，又带着盐、布料和香料离开。最初的劳马是木头的，也毁于木头最害怕的敌人——火灾。特别是1682年那场毁灭性的大火，几乎将整个城镇夷为平地。但劳马人就像坚韧的北欧白桦，从灰烬中站起，用更有序的规划重建家园。我们今天看到的街道网格和大多数建筑基础，正是在那次重建后奠定的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正塑造了老城如今风貌的，是18世纪末到19世纪的“黄金时代”。那时，劳马的船主们凭借远洋帆船贸易积累了巨额财富。这些新贵们没有选择建造冰冷石头宫殿，而是将热情和财富倾注在改造自己的木构住宅上。他们请来工匠，在原本朴素的木屋外墙上，增添了新文艺复兴风格的装饰性木板条、精致的檐口和山墙饰。窗户变得更大，窗框被刷上那时昂贵的普鲁士蓝颜料——这就是“劳马蓝”的起源，一种财富与品味的无声宣告。每一栋房子都像是一件精雕细琢的木制首饰，彼此紧挨着，却又争奇斗艳，共同编织出一幅无比繁复和谐的街景画卷。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，财富的浪潮有起有落。19世纪后期，随着蒸汽轮船取代帆船，钢铁取代木材，劳马的航运业衰退了。讽刺的是，正是这种经济上的停滞，意外地保护了老城。因为没有钱进行大规模现代化改造，这些精美的木屋得以完整保存下来，仿佛被时光琥珀封存。二战后的经济复苏期，当芬兰许多城市都在热火朝天地拆除旧城区、兴建混凝土楼房时，劳马的居民和市政当局却做出了一个远见卓识的决定：保护它。他们成立了专门的保护协会，一栋一栋地修复老建筑，不是把它们变成空壳，而是改善内部设施，让现代生活能舒适地延续其中。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这其中，不得不提一项几乎与老城建筑齐名的非物质遗产——劳马蕾丝。这种独特的缕空编织技艺自18世纪从欧洲大陆传入，在这里生根发芽，成为许多劳马妇女世代相传的技艺。在最鼎盛时期，蕾丝制作是许多家庭重要的收入来源。蕾丝工坊的梭子声，曾是老城背景音里不可或缺的一部分。今天，你依然能在老城的“蕾丝之家”博物馆或夏季的工作坊里，看到女匠人们以惊人的耐心和精准，编织着那些繁复如雪花、轻盈如云雾的图案。这指尖的艺术，与周遭的木构建筑一样，是缓慢、专注与手工艺精神的活纪念碑。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议将整个下午和傍晚留给劳马老城，这是光线最柔和、最能感受其氛围的时段。整体游览节奏务必“慢”，核心是漫无目的的穿街走巷和沉浸式体验，而非打卡地标。建议从老城西侧的马雷娜仓库附近入口开始，这里是老城与港口的交接处，能让你立刻感受到“海与木”的双重气质。然后向东深入迷宫般的街巷，探访几处关键节点后，最终在傍晚时分抵达老城东侧的教堂区，让旅程在宁静的暮色与钟声中收尾。全程步行距离不长，但建议预留3-4小时，留足发呆、拍照和喝咖啡的时间。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季是旺季，但即使是七月，这里的游客也比欧洲大陆热门古城少得多，清晨和傍晚几乎独享街道。冬季来访别有风味，积雪覆盖的屋顶和窗内透出的温暖灯光宛如童话，但需注意部分室内景点开放时间极短或关闭。老城地面是真正的古老卵石路，请务必穿一双舒适且鞋底耐磨的平底鞋。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从西侧港口边的马雷娜仓库开始，摸摸那被海风侵蚀出纹理的深色木墙，感受老城与海洋血脉相连的起点。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拐进基尔科街，让自己彻底迷失在彩色木屋的温柔包围中，抬头仔细欣赏每一扇窗楣上各不相同的木雕装饰。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到那座粉色的、带钟楼的旧市政厅（现为劳马博物馆），坐在对面广场的长椅上，看本地人骑着自行车在此穿梭。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探访“蕾丝之家”工坊，静静观看白发匠人如何用几十根细针和梭子，魔法般编织出近乎透明的复杂图案。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`钻进一条不起眼的拱形门洞，闯入一个静谧的共享庭院，坐在井边石凳上听听风声与邻居家隐约的广播声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着考斯蒂街走到老城东缘，仰望圣三一教堂那座融合了哥特与文艺复兴风格的灰色石头钟楼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在教堂旁的老咖啡馆“波尔卡”找一个靠窗位，点一杯黑咖啡配肉桂卷，像当地人一样度过一段“咖啡时光”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`趁着日落前的金色光线，再次漫步回老城中心，你会发现墙壁的颜色在斜照下变得无比温暖和深邃。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`基尔科街中段仰拍走廊`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点阳光斜射时，站在窄巷中间，向上拍摄两侧木屋的山墙、窗台和那一道狭长的蓝天，构图极具纵深感与形式美。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`旧市政厅广场侧拍街景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在广场一角，将粉色的旧市政厅钟楼作为背景，捕捉一位当地人骑车或步行经过的瞬间，营造生动的生活叙事。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`任意一个庭院门洞框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`找一个装饰精美的门洞作为画框，向内拍摄庭院深处被阳光照亮的一角、一把椅子或一盆花，创造“窥见秘密花园”的意境。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`汉内拉广场全景视野`}</h4>
                  <p className="text-sm text-gray-700">{`下午稍晚时，站在这个稍开阔的广场边缘，用广角镜头收录多栋色彩各异的木屋立面与教堂钟楼同框的画面，展现老城的层次与密度。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`港口方向回望老城天际线`}</h4>
                  <p className="text-sm text-gray-700">{`黄昏时分，走到老城西侧的港口区，回头拍摄老城木屋群轮廓与停泊的船只、天空中的晚霞构成的宁静海港画卷。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重当地居民隐私，避免直接对着民居窗户或私人庭院内部拍摄。冬季拍摄雪景时注意保护相机免受急剧温差导致的冷凝水影响。柔和、均匀的阴天光线其实非常适合拍摄劳马老城柔和的色彩，不要只追逐阳光。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸式首选`}</h4>
                  <p className="text-sm text-blue-800">{`老城心脏地带的百年木屋民宿，住在二楼推开吱呀作响的窗户，楼下就是安静的卵石小巷，真正成为“临时劳马人”。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计感之选`}</h4>
                  <p className="text-sm text-green-800">{`由港口老仓库改造的精品酒店，保留了原始木梁和砖墙，搭配北欧现代家具，在历史感与舒适度间找到完美平衡。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`宁静自然派`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车十分钟可达的湖边小木屋，体验纯正的芬兰“ mökki ”（夏日别墅）生活，夜晚在桑拿后跳进清凉湖水中，仰望星空。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`便捷实用型`}</h4>
                  <p className="text-sm text-purple-800">{`老城边缘步行三分钟的现代公寓式酒店，配备小厨房，适合家庭或长住，既能轻松探索古城，又享有充足的便利空间。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿数量非常有限且极其抢手，尤其是夏季，务必提前数月预订。选择住在老城内，你将享受到清晨和夜晚游客散去后，那份只属于居民的绝对宁静。劳马整体治安极好，深夜在老城散步也安全感十足。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开劳马老城许久后，我发现自己最怀念的，不是某栋具体的房子，也不是某条漂亮的街道，而是那种整体的、弥漫在空气中的“节奏感”。那是一种属于前工业时代、属于手工艺、属于社区邻里的缓慢节奏。在这里，快毫无意义，美存在于细节的雕琢、存在于耐心的编织、存在于日复一日对传统的温柔持守。它像一个巨大的、温暖的木制共鸣箱，将你内心的嘈杂悄然吸收、抚平，然后回馈给你一种久违的平静。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个崇尚效率和革新的时代，劳马老城的存在本身就是一个温柔的抵抗。它告诉你，有些价值无法用速度衡量，有些美需要时间的包浆才显温润。它不仅仅是芬兰的遗产，更是给所有现代人的一剂解药——让我们记起，生活可以有一种更贴近材料、更贴近自然、更贴近彼此的模样。如果你感到被数字世界的洪流裹挟得喘不过气，那么，请来劳马老城住上几天。不必急着看什么，只需在这些彩色的木墙间行走、呼吸、感受。让波罗的海的风穿过街巷，也穿过你的心，它会为你重新校准内心的时钟，带回那份关于“持久”与“安宁”的、古老而珍贵的力量。这，或许就是深度旅行所能赋予我们的，最宝贵的礼物。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
