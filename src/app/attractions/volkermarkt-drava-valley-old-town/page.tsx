import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '费尔克马克特 Völkermarkt｜沉睡在中世纪时光里的德拉瓦河畔明珠 - 最佳欧洲景点',
  description: '朋友，如果你厌倦了那些被游客挤爆的明信片小镇，那就跟我来费尔克马克特吧。当我第一次从狭窄的巷子拐进那个三角形的老城广场时，时间仿佛“咔嚓”一声停在了某个遥远的午后。没有喧嚣的旅游大巴，没有招揽生意的嘈杂，只有阳光懒洋洋地铺在蜜糖色的房屋立面上，把那些彩绘的壁画和雕刻的窗楣照得温暖又清晰。空气里飘着一',
}

export default function VolkermarktDravaValleyOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '费尔克马克特', href: '/attractions/volkermarkt-drava-valley-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`费尔克马克特・Völkermarkt・奥地利・费尔克马克特（克恩顿州）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，如果你厌倦了那些被游客挤爆的明信片小镇，那就跟我来费尔克马克特吧。当我第一次从狭窄的巷子拐进那个三角形的老城广场时，时间仿佛“咔嚓”一声停在了某个遥远的午后。没有喧嚣的旅游大巴，没有招揽生意的嘈杂，只有阳光懒洋洋地铺在蜜糖色的房屋立面上，把那些彩绘的壁画和雕刻的窗楣照得温暖又清晰。空气里飘着一丝刚出炉的面包甜香，混合着远处德拉瓦河带来的、略带湿润的草木气息。广场中央的古老喷泉还在潺潺流水，那声音像是这座小镇平稳而绵长的呼吸。
你立刻能感觉到，这里不是一个博物馆式的景点，而是一个仍然在跳动的生活中心。几位老先生坐在长椅上，慢悠悠地看着报纸，时不时抬头互相打个招呼。主妇们提着篮子从面包房走出来，篮子里露出长棍面包的一角。圣劳伦斯教堂那高耸的塔楼，就像一个沉默而可靠的守护者，它的影子随着日头慢慢移动，为广场划出光阴的刻度。这里的魅力不在于某个惊世骇俗的单一建筑，而在于整个氛围的和谐与完整。每一栋房子都像是一个音符，共同谱写了一曲关于中世纪商旅、市民骄傲与日常生活的宁静乐章。
走到广场的边缘，视野豁然开朗。你会望见下方蜿蜒如翡翠腰带的德拉瓦河，以及河对岸连绵起伏的、墨绿色的山丘。这种布局太精妙了——热闹的市井生活与开阔的自然风光仅一步之遥。历史上，正是这条河为小镇带来了财富与活力，而如今，它依然是风景画里最灵动的一笔。站在这里，你能同时触摸到历史的纹理与自然的脉搏，那种感觉，踏实又开阔。
最打动我的，是它的“未觉醒”状态。没有为了旅游而刻意粉饰的痕迹，墙面的褪色、石阶的磨损，都是真实的岁月包浆。你可以随意推开一扇厚重的木门，发现里面是一家家族经营了四代人的五金店，或者一个堆满旧书的咖啡馆。在这里，你不是一个旁观者，你仿佛短暂地走进了当地人的生活褶皱里，成为了他们舒缓节奏的一部分。这种不设防的真诚，是任何热门景点都无法给予的礼物。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "朋友，如果你厌倦了那些被游客挤爆的明信片小镇，那就跟我来费尔克马克特吧。当我第一次从狭窄的巷子拐进那个三角形的老城广场时，时间仿佛“咔嚓”一声停在了某个遥远的午后。没有喧嚣的旅游大巴，没有招揽生意的嘈杂，只有阳光懒洋洋地铺在蜜糖色的房屋立面上，把那些彩绘的壁画和雕刻的窗楣照得温暖又清晰。空气里飘着一丝刚出炉的面包甜香，混合着远处德拉瓦河带来的、略带湿润的草木气息。广场中央的古老喷泉还在潺潺流水，那声音像是这座小镇平稳而绵长的呼吸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你立刻能感觉到，这里不是一个博物馆式的景点，而是一个仍然在跳动的生活中心。几位老先生坐在长椅上，慢悠悠地看着报纸，时不时抬头互相打个招呼。主妇们提着篮子从面包房走出来，篮子里露出长棍面包的一角。圣劳伦斯教堂那高耸的塔楼，就像一个沉默而可靠的守护者，它的影子随着日头慢慢移动，为广场划出光阴的刻度。这里的魅力不在于某个惊世骇俗的单一建筑，而在于整个氛围的和谐与完整。每一栋房子都像是一个音符，共同谱写了一曲关于中世纪商旅、市民骄傲与日常生活的宁静乐章。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走到广场的边缘，视野豁然开朗。你会望见下方蜿蜒如翡翠腰带的德拉瓦河，以及河对岸连绵起伏的、墨绿色的山丘。这种布局太精妙了——热闹的市井生活与开阔的自然风光仅一步之遥。历史上，正是这条河为小镇带来了财富与活力，而如今，它依然是风景画里最灵动的一笔。站在这里，你能同时触摸到历史的纹理与自然的脉搏，那种感觉，踏实又开阔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动我的，是它的“未觉醒”状态。没有为了旅游而刻意粉饰的痕迹，墙面的褪色、石阶的磨损，都是真实的岁月包浆。你可以随意推开一扇厚重的木门，发现里面是一家家族经营了四代人的五金店，或者一个堆满旧书的咖啡馆。在这里，你不是一个旁观者，你仿佛短暂地走进了当地人的生活褶皱里，成为了他们舒缓节奏的一部分。这种不设防的真诚，是任何热门景点都无法给予的礼物。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`费尔克马克特`} />
                <InfoRow label="英文名称" value={`Völkermarkt`} />
                <InfoRow label="正式名称" value={`Völkermarkt`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`费尔克马克特（克恩顿州）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`曾是连接阿尔卑斯山地区和亚得里亚海的重要中世纪贸易与交通枢纽。`} />
                <InfoRow label="建筑特色" value={`以中央三角形老城广场为核心，环绕着色彩柔和、立面装饰丰富的文艺复兴与巴洛克风格市民房屋。`} />
                <InfoRow label="建筑风格" value={`混合了哥特式、文艺复兴和巴洛克风格的南奥地利城镇建筑群。`} />
                <InfoRow label="文化价值" value={`是克恩顿州保存最完好的历史城镇中心之一，生动展现了中世纪晚期商路城镇的生活图景与文化交融。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城广场及公共区域全天24小时开放。广场上最重要的建筑圣劳伦斯教区教堂通常开放时间为周一至周六上午9点至下午6点，周日下午1点后开放。市政厅仅在办公时间开放部分大厅供参观。建议出行前查阅当地旅游信息中心，冬季部分服务可能缩短时间。`} />
              <InfoRow label="门票价格" value={`进入老城区及广场免费。圣劳伦斯教堂免费进入，欢迎自愿捐赠以支持维护。登上市政厅塔楼观景可能需要象征性的2-3欧元费用，具体请咨询旅游信息中心。当地组织的主题导览游价格约为每人10-15欧元。`} />
              <InfoRow label="地址" value={`Hauptplatz 1, 9100 Völkermarkt, Austria`} />
              <InfoRow label="交通方式" value={`最近的国际机场是克拉根福机场，距离约30公里。从机场可搭乘出租车直达，约35分钟车程，费用较高。更经济的方式是乘坐机场巴士到克拉根福中央火车站，然后转乘区域火车（ÖBB）前往费尔克马克特火车站，全程约1小时，火车班次每小时1-2班。从火车站步行至老城广场仅需10分钟，一路下坡，轻松惬意。如果自驾，可将车停放在广场外围的免费或收费停车场，非常方便。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要讲费尔克马克特的故事，我们必须把时钟拨回到一千多年前。它的名字“Völkermarkt”直译过来是“人民的市场”，这从一开始就昭示了它的命运——一个为贸易而生的地方。大约在公元9世纪，斯拉夫人和巴伐利亚人先后在这片德拉瓦河畔的高地上定居。河水提供了天然的防御，而高处的台地则避免了洪水的侵扰，更重要的是，这里恰好位于从阿尔卑斯山矿区通往威尼斯和亚得里亚海的重要商道上。运载着盐、铁、羊毛和葡萄酒的车队和马帮在这里交汇、歇脚、交易，一颗商业种子就此埋下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇真正的崛起和城市权利的获得，要归功于一位关键人物——科恩顿的藩侯伯恩哈德。公元11世纪，他正式在此建立市场，并赋予了它重要的贸易特权。你可以想象一下当时的情景：广场上搭起了临时的帐篷和货摊，来自四面八方的商人用各种语言讨价还价，空气中混杂着皮革、香料、牲畜和异乡人的气味。到了12世纪，小镇已经繁荣到需要建造坚固的防御工事，石墙和塔楼被建立起来，我们今天看到的城市轮廓，基本在那时定型。它成为了地区性的经济心脏，财富源源不断涌入。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "中世纪的辉煌在建筑上留下了深刻的烙印。13世纪，宏伟的圣劳伦斯教堂开始兴建，它的哥特式风格显示了当时的财力和野心。然而，命运第一次重击发生在1473年，一场灾难性的大火几乎吞噬了整个木结构城镇。但费尔克马克特的人民展现了惊人的韧性。他们没有抛弃这里，而是用石头和砖瓦进行了重建。正是这次重建，赋予了老城广场我们今天看到的独特风貌：富有的商人们竞相建造更华丽、更坚固的住宅，文艺复兴风格的山墙、精美的壁画和外墙装饰开始流行，将广场变成了一个展示财富与品味的露天舞台。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "随后的几个世纪，小镇经历了奥斯曼帝国的威胁、宗教改革的冲击以及拿破仑战争的洗礼。它作为贸易枢纽的地位随着现代交通方式的变革而逐渐减弱，从喧闹的前沿退居为宁静的内陆。但这或许是一种幸运。正因为经济发展的重心转移，它才避免了大规模的重建和破坏，像一枚被遗忘在时间胶囊里的琥珀，完整保存了中世纪晚期的城镇肌理。那些色彩斑斓的立面，那些拱廊下的幽暗店铺，那些通往河岸的陡峭阶梯，都保持着几个世纪前的模样。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如今，漫步在费尔克马克特，你踩过的每一块石板都可能听过中世纪商队的铃铛声。市政厅的外墙上，古老的徽章和日晷依然清晰可辨。这里没有发生惊天动地的王室传奇，它的故事是关于普通人的——关于商人、工匠、市民如何依靠一条河流和一条商路，建立、繁荣并守护自己的家园。它的历史是沉淀在日常生活里的，是温和而坚韧的，就像德拉瓦河水，曾经奔涌，如今平静，但从未停止流淌。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`深度探索费尔克马克特，我强烈建议你留出一整个白天，并将抵达时间定在清晨9点之前。此时的阳光温柔，广场上空无一人，你能独享这座小镇最静谧、最本真的模样。整体游览节奏应极其放松，以步行为主，核心区域不大，但值得你细细品味。上午专注于老城广场及其周边的建筑细节与市井生活，中午找一家本地餐馆享用克恩顿州风味午餐，下午则沿着古老的阶梯下到德拉瓦河畔，进行一场轻松的沿河漫步，从另一个角度仰望山崖上的古城，最后在日落时分回到广场，感受光影变幻的魔力。这样的安排能让你由内而外、由古及今地全方位感受这个地方的层次与呼吸。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`每周六上午广场有传统的农贸市场，非常热闹且充满生活气息，是体验本地文化的好时机，但喜欢绝对清静的朋友可以避开这个时段。
小镇几乎没有针对游客的购物陷阱，可以完全放松，但注意一些小型博物馆或塔楼可能只在夏季旅游旺季或预约后才开放。
穿着舒适的步行鞋至关重要，因为老城街道多为碎石路，并且通往河畔的阶梯相当陡峭。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`趁着晨光熹微，从“上城门”的遗址开始，顺着下坡的碎石小路慢慢走向三角形的老城广场，让整个古镇在你眼前缓缓展开。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在空旷的广场中央停留，顺时针慢慢转一圈，仔细欣赏每一栋立面色彩不同、装饰各异的市民住宅，寻找壁画上的圣经故事或家族徽章。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`轻轻推开圣劳伦斯教堂厚重的木门，让眼睛适应内部的幽暗，然后抬头仰望那令人震撼的网状肋拱顶和绚丽的晚期哥特式祭坛。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在广场角落那家飘着咖啡香和苹果卷甜香的老咖啡馆坐下，点一份早餐，像当地人一样看着广场渐渐苏醒，小贩开始布置摊位。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访广场上的旅游信息中心，它本身就坐落在一栋历史建筑里，和工作人员聊聊天，获取一份标有所有历史建筑简介的小地图。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着“下城门”方向，穿过拱廊，找到那条名为“城堡阶梯”的古老石阶，扶着栏杆一步步向下，感受从繁华市镇通往自然河岸的时空切换。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在德拉瓦河畔的平缓小径上悠闲散步，不时回头，从各个角度拍摄山崖上古镇如积木般层层叠叠的美丽侧影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在夕阳将建筑立面染成金红色时，再次回到广场，看喷泉的水花也变成暖金色，结束这完美的一天。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`老城广场东南角建筑二楼拱窗视角`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后，阳光斜射，从这个隐秘的公共拱廊窗口可以框住整个三角形广场、喷泉和教堂塔楼，构图饱满又有纵深感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣劳伦斯教堂内部肋拱顶特写`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点至中午，阳光会从侧窗射入，照亮一部分精美的网状石肋，使用广角镜头贴近地面仰拍，能捕捉到如石头森林般恢弘的线条。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`德拉瓦河对岸远眺点`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，过河后在对岸的田野小径上找一个缺口，用长焦镜头压缩空间，可以拍到古镇建筑群倒映在平静河水中、背后是青山叠嶂的经典画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`“城堡阶梯”中段回望`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在陡峭石阶的中段平台回望，可以捕捉到狭窄阶梯两侧古老石墙夹着一线天空，以及顶端城门拱洞的框架构图，极具故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`市政厅立面细节`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射时，建筑立面上的彩绘浮雕和徽章没有阴影，色彩最为鲜艳饱和，适合拍摄建筑装饰的纹理与细节。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在教堂内部拍摄时请务必关闭闪光灯，并保持绝对安静，尊重正在祈祷的当地人。`}</li>
                <li>• {`使用无人机拍摄全景前，请务必了解奥地利当地的无人机法规，并远离人群和私人住宅区域。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`家庭温情之选`}</h4>
                  <p className="text-sm text-blue-800">{`广场旁一栋16世纪建筑里的家庭公寓，女主人会为你准备好手工果酱和新鲜面包，晚上能听到教堂悠远的钟声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史沉浸体验`}</h4>
                  <p className="text-sm text-green-800">{`由老城一栋文艺复兴时期商人宅邸改造的精品酒店，房间有裸露的原始木梁和古老的瓷砖壁炉，睡在历史里。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`河畔自然风光`}</h4>
                  <p className="text-sm text-yellow-800">{`位于德拉瓦河对岸的现代风格客栈，每个房间都有面向古镇的阳台，清晨在薄雾与鸟鸣中醒来，直面一幅动态山水画。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济便捷旅馆`}</h4>
                  <p className="text-sm text-purple-800">{`位于火车站和老城之间的清新旅馆，步行方便，提供丰盛的克恩顿州早餐，是探索古镇和周边山林徒步的完美基地。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "老城内的住宿数量非常有限，且极具特色，建议至少提前两个月预订，尤其是在夏季和圣诞市场期间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇治安极好，夜晚非常宁静，但老城部分街道灯光较暗，建议随身携带一个小手电以便夜归。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开费尔克马克特好些天了，我脑海里最清晰的，不是某一张具体的照片，而是一种混合的感觉：是手指触摸到广场喷泉那被无数代人磨得光滑的石沿的冰凉触感；是午后阳光晒在背上，看着眼前色彩柔和的房屋，心里那份毫无缘由的平静与满足。在这个追求效率和爆点的时代，它就像一个温柔的“反叛者”。它不提供瞬间的刺激，不贩卖传奇的噱头，它只是静静地在那里，保持着一种近乎固执的从容节奏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这大概就是深度旅行的意义吧。我们穿过大半个世界，有时不仅仅是为了看一处风景，更是为了寻找一种早已在都市生活中失传的生活频率。在费尔克马克特，时间是可感知的，它流淌在河水中，刻印在石墙上，渗透在每日的面包香气里。它提醒着我们，文明不仅存在于恢弘的宫殿，更存在于这些由普通人的生活和贸易构筑起来的、亲切而坚韧的市镇之中。所以，如果你也想让高速运转的心灵得到一个真正的假期，来这里住上两天吧。让德拉瓦河的水声洗洗耳朵，让中世纪广场的阳光晒晒心情。你会发现，真正打动人心的，从来不是喧嚣的传奇，而是这份沉静如水的、真实的生活本身。它值得被列入你的清单，作为一次献给自己的、关于时光与安宁的朝圣。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/alpbach" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔卑巴赫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alpbach</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/scharding-baroque-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    谢
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">谢尔丁</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Schärding</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/hall-in-tirol-mint-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蒂
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蒂罗尔的哈尔（古老的铸币城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hall in Tirol</p>
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
