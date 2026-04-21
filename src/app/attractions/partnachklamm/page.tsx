import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '帕特纳赫峡谷 Partnachklamm｜穿越地球心脏的冰川水之回廊 - 最佳欧洲景点',
  description: '站在帕特纳赫峡谷的入口，你首先感受到的不是景象，而是一种全身心的包裹感。轰隆的水声从岩石的缝隙深处传来，不是背景音，而是占据了你所有听觉的主旋律，低沉、持续，带着大地脉搏般的震颤。空气中弥漫着清冽至极的水汽，混合着岩石上苔藓与冷杉的湿冷气息，深吸一口，仿佛整个阿尔卑斯山的肺腑都被你装进了胸膛。阳光在...',
}

export default function PartnachklammPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '德国', href: '/destinations/germany' },
            { label: '加米施-帕滕基兴', href: '/destinations/germany' },
            { label: '帕特纳赫峡谷', href: '/attractions/partnachklamm' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`帕特纳赫峡谷・Partnachklamm・德国・加米施-帕滕基兴`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`站在帕特纳赫峡谷的入口，你首先感受到的不是景象，而是一种全身心的包裹感。轰隆的水声从岩石的缝隙深处传来，不是背景音，而是占据了你所有听觉的主旋律，低沉、持续，带着大地脉搏般的震颤。空气中弥漫着清冽至极的水汽，混合着岩石上苔藓与冷杉的湿冷气息，深吸一口，仿佛整个阿尔卑斯山的肺腑都被你装进了胸膛。阳光在这里变得吝啬，只有当正午的日头勉强找到角度，才能将几缕金色的光柱斜斜地射入峡谷深处，照亮翻涌水花上瞬间生成的彩虹，和岩壁上万年沉积、如同抽象画作的纹路。
沿着狭窄的木制步道和开凿于岩壁内的隧道向内走，你便真正步入了“地球的裂缝”。手边是冰冷湿滑、被水流打磨得无比光滑的岩壁，触感像巨兽的骨骼。脚下，帕特纳赫河不再是河流，而是一头被禁锢在石槽中的翡翠色猛兽，它以雷霆万钧之势撞击着挡路的巨石，激起的白色泡沫几乎要溅到你的脸上。水声在这里被放大、折射，变成一种环绕立体声的轰鸣，任何语言在此刻都显得多余，你只能任由这种原始的自然之力冲刷掉脑子里所有的都市噪音。你会发现，步道上与你擦肩而过的，很多都不是游客，而是背着专业行囊、挂着登山杖的本地徒步者。对他们而言，这里不是景点，而是通往更高山脊的“前厅”，是日常生活里一段充满力量的必经之路。
当你走到峡谷中段最开阔的观景台时，震撼达到顶峰。抬头仰望，一线天光从几乎合拢的百米岩壁顶端漏下，你会瞬间体会到自然的宏伟与人类的渺小。但这里最动人的，并非仅仅是险峻。在那些水流稍缓的角落，你能看到顽强的蕨类植物在岩缝中探出绿意，冰冷的滴水在漫长时光里凝结成钟乳石的雏形。生命与时间，在这里以最缓慢也最坚定的方式，与水火的激烈力量并行不悖。离开峡谷尽头，重见天日那一刻，阳光和鸟鸣骤然变得无比珍贵，你会觉得刚刚那半小时的穿越，像做了一场关于地球童年时代的、无比清醒的梦。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`站在帕特纳赫峡谷的入口，你首先感受到的不是景象，而是一种全身心的包裹感。轰隆的水声从岩石的缝隙深处传来，不是背景音，而是占据了你所有听觉的主旋律，低沉、持续，带着大地脉搏般的震颤。空气中弥漫着清冽至极的水汽，混合着岩石上苔藓与冷杉的湿冷气息，深吸一口，仿佛整个阿尔卑斯山的肺腑都被你装进了胸膛。阳光在这里变得吝啬，只有当正午的日头勉强找到角度，才能将几缕金色的光柱斜斜地射入峡谷深处，照亮翻涌水花上瞬间生成的彩虹，和岩壁上万年沉积、如同抽象画作的纹路。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`沿着狭窄的木制步道和开凿于岩壁内的隧道向内走，你便真正步入了“地球的裂缝”。手边是冰冷湿滑、被水流打磨得无比光滑的岩壁，触感像巨兽的骨骼。脚下，帕特纳赫河不再是河流，而是一头被禁锢在石槽中的翡翠色猛兽，它以雷霆万钧之势撞击着挡路的巨石，激起的白色泡沫几乎要溅到你的脸上。水声在这里被放大、折射，变成一种环绕立体声的轰鸣，任何语言在此刻都显得多余，你只能任由这种原始的自然之力冲刷掉脑子里所有的都市噪音。你会发现，步道上与你擦肩而过的，很多都不是游客，而是背着专业行囊、挂着登山杖的本地徒步者。对他们而言，这里不是景点，而是通往更高山脊的“前厅”，是日常生活里一段充满力量的必经之路。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你走到峡谷中段最开阔的观景台时，震撼达到顶峰。抬头仰望，一线天光从几乎合拢的百米岩壁顶端漏下，你会瞬间体会到自然的宏伟与人类的渺小。但这里最动人的，并非仅仅是险峻。在那些水流稍缓的角落，你能看到顽强的蕨类植物在岩缝中探出绿意，冰冷的滴水在漫长时光里凝结成钟乳石的雏形。生命与时间，在这里以最缓慢也最坚定的方式，与水火的激烈力量并行不悖。离开峡谷尽头，重见天日那一刻，阳光和鸟鸣骤然变得无比珍贵，你会觉得刚刚那半小时的穿越，像做了一场关于地球童年时代的、无比清醒的梦。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`帕特纳赫峡谷`} />
                <InfoRow label="英文名称" value={`Partnachklamm`} />
                <InfoRow label="正式名称" value={`Partnachklamm`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`加米施-帕滕基兴`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一条由帕特纳赫河历经数万年冰川融水冲刷切割而成的地理奇观，是阿尔卑斯山地质力量的活态见证。`} />
                <InfoRow label="建筑特色" value={`这不是人造的建筑，而是大自然的杰作：一条长达702米、最窄处仅宽数米的深邃石灰岩峡谷，两侧岩壁高耸达80多米，河流在其底部咆哮奔腾。`} />
                <InfoRow label="建筑风格" value={`纯粹的自然侵蚀地貌，展现了冰川时期至今持续的水流切割力量，其形态堪称“水之建筑”。`} />
                <InfoRow label="文化价值" value={`它不仅是徒步爱好者的天堂，更深深融入了当地的山地文化，从早期的冰道运输到如今的生态旅游，体现了人与自然关系的演变。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`峡谷本身全年开放，但照明步道的开放时间有严格规定。通常，从5月初到10月中旬，每天的开放时间为早上8点至下午6点。冬季（大约11月至次年4月）的开放时间会大幅缩短，一般为上午9点至下午5点，并且强烈建议在冬季前往前查看官网或电话确认，因为极端冰雪天气可能导致临时关闭。圣诞节和新年期间的开放时间也常有特殊调整。`} />
              <InfoRow label="门票价格" value={`成人票价为7欧元。6至16岁的青少年及学生票价为4欧元。家庭票（2位成人+最多3名儿童）为16欧元。持有当地度假卡“Gästekarte”的游客可享受小幅折扣。请注意，门票为单次进入有效，不支持全天往返。`} />
              <InfoRow label="地址" value={`Partnachklamm 1, 82467 Garmisch-Partenkirchen, Germany`} />
              <InfoRow label="交通方式" value={`从慕尼黑中央火车站乘坐区域火车（RB或RE）前往加米施-帕滕基兴主火车站，车程约1小时20分钟，班次频繁，约每小时一班。到达加米施-帕滕基兴后，你有两种选择：一是从火车站前乘坐公交2路至“奥林匹克滑雪体育场”站下车，然后沿着清晰的路标步行约25分钟即可到达峡谷入口；二是直接从火车站出发，沿着帕特纳赫河岸的徒步小径步行前往，这是一段非常惬意、约45分钟的健行路程，推荐给时间充裕、想提前感受山区氛围的旅人。建议购买拜仁州票，可覆盖区域内所有公共交通，非常划算。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`帕特纳赫峡谷的故事，开始于遥远得无法用人类纪年衡量的时代。它的真正建筑师，是沃克斯冰川。在最后一次冰河期的鼎盛时期，巨大的冰川从楚格峰方向缓缓推进，其重量和移动的力量，就像一把巨犁，初步塑造了这片山谷的宽阔U形轮廓。但峡谷那令人屏息的深邃与狭窄，则要归功于冰川退去后留下的“孩子”——帕特纳赫河。大约一万年前，随着气候变暖，冰川开始融化，融水汇聚成汹涌的河流。这条河没有选择冰川留下的宽谷，而是找到了岩层中一处相对脆弱的部分，开始了它持之以恒的“雕刻”工作。它不是用凿子，而是用裹挟着沙石的湍急水流，日复一日、年复一年地冲刷、研磨、切割着石灰岩床。每一场春夏的融雪，都是它新一轮的创作。可以说，你今天看到的每一道垂直的岩壁，每一条蜿蜒的曲线，都是时间与流水这两个最耐心也最无情的大师，用万年光阴共同签名的作品。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`人类与峡谷的相遇，则充满了实用主义的色彩。在中世纪，附近的农民和伐木工就意识到了这条湍急河流的力量。他们无法穿越峡谷，却利用它来运输木材。冬季，人们将砍伐下来的木材堆积在峡谷上游的河边。等到春天来临，冰雪消融，河水暴涨，他们便将木材推入河中，让汹涌的河水像传送带一样，将木材通过狭窄的峡谷“喷射”到下游平缓地带，再进行收集。这条危险的“冰道”运输方式持续了数百年，直到近代道路交通发展起来才被废弃。那时的人们，对峡谷怀着的是敬畏与利用混杂的心态，它是一道难以逾越的天堑，也是一个充满风险却不可或缺的劳动力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`让峡谷从一道天堑变成一处奇观的转折点，发生在19世纪末20世纪初。随着阿尔卑斯山地旅游的兴起和浪漫主义对荒野之美的推崇，一些大胆的探险家和早期的旅行者开始尝试探索峡谷。最初的道路极为简陋危险，直到1912年，为了服务当时已颇具规模的冬季运动和夏季徒步旅游，当地才投资修建了第一条相对安全、带有栏杆和简易隧道的徒步小径。这一工程本身就是一个壮举，工人们需要悬吊在岩壁上进行开凿。小径的开放，立刻使帕特纳赫峡谷成为加米施-帕滕基兴这个新兴度假胜地的明星景点。它不再仅仅是伐木工的通道，而是成了艺术家、诗人、自然爱好者追寻崇高体验的目的地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`第二次世界大战的阴影也曾短暂地笼罩这里。由于峡谷地形险要、易于防守，纳粹德国曾将部分隧道和设施用于军事物资存储。幸运的是，战火并未对峡谷的自然景观造成毁灭性破坏。战后，随着德国经济的复苏和全球旅游业的蓬勃发展，峡谷的基础设施得到了不断的加固和现代化升级，增加了更安全的护栏、照明系统（让你即使在峡谷深处也能看清脚下和岩壁），并建立了完善的售票与管理体系。今天的徒步体验既安全又沉浸，这背后是超过一个世纪人们对自然景观的不断理解和精心维护。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如今，帕特纳赫峡谷被认定为国家级自然遗迹。它的管理哲学已经从单纯的旅游开发，转向更深刻的保护与教育。每一步木栈道的更新都考虑对生态环境的最小干扰，每一批游客的到来都被引导去理解这里非凡的地质故事。它从冰河的遗产，变成伐木工的运输道，再成为旅行者的圣地，最终定格为一座活生生的自然博物馆。这个演变过程，恰恰是人类对自然认知从征服、利用到敬畏、学习的一面镜子。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要获得最完整的帕特纳赫峡谷体验，我强烈建议你预留出至少3到4个小时。最佳抵达时间是早上9点开门后不久，这样可以避开10点后到来的大批旅游团，享受一段相对静谧的峡谷穿越时光。整体路线可以规划为一个精彩的环线：先从主入口进入，沉浸式穿越整个峡谷（这是高潮部分，慢慢走，多停留），约需1-1.5小时；从峡谷上端出口出来后，不要原路返回，而是选择那条沿着山腰蜿蜒、风景绝佳的“高山小径”绕行回到起点。这条环线不仅能让你从不同角度和高度欣赏峡谷的壮丽，还能体验到典型的巴伐利亚阿尔卑斯山麓森林风光，节奏张弛有度。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿着防滑防水的徒步鞋，峡谷步道常年湿滑，普通运动鞋很容易摔倒。
即使在夏季，峡谷内温度也比外面低很多，且水汽弥漫，一件轻便的防风防水外套是绝对必需品。
冬季游览虽然能看到冰瀑奇观，但步道会结冰，必须租用冰爪，并且一定要确认当天开放才前往。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在主入口购票后，先别急着进隧道，在横跨湍急河流的老石桥上停留片刻，感受脚下传来的震动并拍摄峡谷外观的第一张照片。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过最初的短隧道，让自己瞬间被黑暗、轰鸣和水汽包裹，适应这突如其来的感官转换。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在第一个开阔的观景平台紧紧抓住栏杆，俯视脚下如沸水般翻腾的翡翠色深潭，让水雾扑满你的镜头和脸庞。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到峡谷中段光线最戏剧性的地方，停下来仰望那道“一线天”，等待阳光恰好穿透水雾制造出迷你彩虹的魔法时刻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过最后一段岩壁隧道，在峡谷上端出口重见天日，回头看看那仿佛大地闭合起来的裂缝，你会油然生出一种探险归来的成就感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从出口左转，踏上标记清晰的“高山小径”，这是一段在云杉林和草甸间轻松愉快的徒步，途中常有可以俯瞰加米施山谷的美丽视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着环形小径一路下山，最终你会从奥林匹克滑雪跳台附近走出森林，再沿着帕特纳赫河宁静的河岸步行约15分钟，便可回到起点，完成一次完美的循环。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`入口石桥全景`}</h4>
                  <p className="text-sm text-gray-700">{`上午阳光能照亮峡谷入口岩壁时，站在桥的中央，用广角镜头将木制入口、湍流和背景的山峰一同纳入构图，展现环境的险峻。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`中段观景台俯拍激流`}</h4>
                  <p className="text-sm text-gray-700">{`使用慢速快门（1/4秒或更慢），将咆哮的白色水流拍出丝绸般柔滑的质感，与坚硬黝黑的岩石形成强烈对比，记得用三脚架或找地方稳住相机。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`隧道口框架式构图`}</h4>
                  <p className="text-sm text-gray-700">{`站在某个隧道的出口，将隧道口作为天然的黑色画框，框住远处被照亮的翡翠色河水与岩壁，创造出深邃的视觉纵深感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`高山小径回望视角`}</h4>
                  <p className="text-sm text-gray-700">{`在环形徒步路线的中段，有几个拐角处可以回望峡谷上方的出口和周围山体，用长焦镜头压缩空间，拍出群山环抱中那道细小裂缝的独特地貌。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`峡谷内水汽极大，镜头极易起雾，进出隧道时尤为明显，建议随身携带超细纤维布频繁擦拭。保护相机免受水花直接溅射，最好使用防水罩或塑料袋进行简单防护。尊重其他徒步者，在狭窄步道上不要长时间停留拍摄，找到合适的凹处或观景台再安心取景。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温馨家庭旅馆`}</h4>
                  <p className="text-sm text-blue-800">{`住在峡谷脚下徒步起点附近的传统巴伐利亚风格“加米施之家”，房东老爷爷会给你手绘徒步地图，早餐的蜂蜜就来自他后山的蜂箱。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计感山居`}</h4>
                  <p className="text-sm text-green-800">{`选择坐落在半山腰、直面楚格峰全景的现代木屋民宿，巨大的落地窗让你在温暖的房间里就能看尽阿尔卑斯的晨昏，并提供专业徒步装备租借。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`经典度假酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻加米施-帕滕基兴镇中心具有百年历史的古典酒店，享受露天温泉泳池舒缓徒步后的双腿，晚上在铺着亚麻桌布的餐厅品尝阿尔卑斯奶酪火锅。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高山牧人小屋`}</h4>
                  <p className="text-sm text-purple-800">{`如果你是真硬核徒步者，可以预订从峡谷上端出口继续向上徒步一小时可达的山间小屋，体验没有网络、只有松涛与星光的纯粹夜晚，清晨被牛铃声唤醒。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`加米施-帕滕基兴小镇本身治安极好，但夏季和滑雪季是绝对旺季，住宿务必提前数月预订。住在镇上虽离峡谷起点有段距离，但生活便利，餐厅选择多；住在更靠近峡谷的安静农庄，则需要规划好交通和用餐。许多住宿都提供免费的“宾客卡”，可享受当地交通和景点折扣，预订时一定要询问。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开帕特纳赫峡谷许久，那轰鸣的水声似乎还在耳膜深处留有回响。它带给我的震撼，不同于仰望一座完美大教堂时的人类技艺之叹，而是一种更原始、更直击生命本源的力量。在那条黑暗与光明交替的裂缝中行走，你清晰地感知到地球不是一颗安静的石头，它是一个活着、呼吸、仍在缓慢改变形状的庞大生命体。水，这种我们日常生活中最柔软、最司空见惯的元素，在这里展示了它作为“时间之刀”的另一面，它以永恒的耐心，切割出了令人敬畏的深度。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求快速、高效、即时满足的时代，帕特纳赫峡谷像一位沉静的导师。它用一万年的地质故事告诉你，真正伟大和美丽的事物，需要无法想象的时间来锻造。它提醒我们，在人类社会的喧嚣之外，还存在着一套更古老、更恒久的运行法则。每一位热爱深度游的旅人，都应该来体验一次这种“穿越地球心脏”的旅程。这不仅是一次视觉的冒险，更是一次对感知的重置。当你从那条水汽弥漫的裂缝中走出，重新沐浴在广阔的阳光下，你会觉得自己的感官被彻底清洗了一遍，对自然，对时间，甚至对自身存在的短暂与渺小，都会有一种焕然一新的、充满谦卑的理解。这，便是阿尔卑斯山馈赠给每一位来访者的，最深刻的灵魂礼物。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/trier-amphitheater" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特里尔竞技场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trier Amphitheater</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sigmaringen-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡格马林根城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sigmaringen Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/trier-roman-monuments" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特里尔古罗马遗迹</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Roman Monuments of Trier</p>
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
