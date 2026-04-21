import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '康斯贝格 Kongsberg｜探秘北欧银矿传奇，走进地下迷宫与地上巴洛克瑰宝 - 最佳欧洲景点',
  description: '火车缓缓驶入康斯贝格站，第一眼望去，你可能会觉得这是个再寻常不过的挪威宁静小镇。青山环绕，河流潺潺，色彩柔和的木屋散落山坡。空气清冽，带着松针和远处溪流的味道。但只要你稍微抬起头，视线就会被镇中心那座巨大的、有着醒目铜绿色穹顶的建筑牢牢抓住——那就是康斯贝格教堂，其规模之宏伟，与小镇的“体量”完全不',
}

export default function KongsbergSilverMiningTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '挪威', href: '/destinations/europe' },
            { label: '康斯贝格', href: '/destinations/europe' },
            { label: '康斯贝格', href: '/attractions/kongsberg-silver-mining-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`康斯贝格・Kongsberg・挪威・康斯贝格`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`火车缓缓驶入康斯贝格站，第一眼望去，你可能会觉得这是个再寻常不过的挪威宁静小镇。青山环绕，河流潺潺，色彩柔和的木屋散落山坡。空气清冽，带着松针和远处溪流的味道。但只要你稍微抬起头，视线就会被镇中心那座巨大的、有着醒目铜绿色穹顶的建筑牢牢抓住——那就是康斯贝格教堂，其规模之宏伟，与小镇的“体量”完全不成比例。这巨大的反差，正是康斯贝格魅力的第一道谜题。走在安静的街道上，你能听到的只有自己的脚步声、鸟鸣，以及隐约的流水声，一种奇特的静谧感笼罩着一切，仿佛地面之下是另一个沉睡的世界。
然而，当你真正走进那座巴洛克教堂的内部，寂静便被另一种庄严取代。阳光从高窗射入，在简朴而巨大的白色墙壁和深色木质廊台上投下明晰的光影。没有过多繁复的金色装饰，取而代之的是一种属于新教世界的、近乎理性的宏伟。你的目光会不由自主地被那架造于1760年的精美管风琴吸引，但它最动人的细节，或许是那些为矿工家庭设置的、编号清晰的专属座位区。坐在长椅上，你能想象几百年前，那些刚从黑暗深渊归来的男人们，带着一身岩石粉尘和疲惫，携家带口坐在这里，寻求心灵的慰藉。地面上是光明的信仰与秩序，地面下则是黑暗的劳作与财富，这种张力在教堂的每一寸空间里静静流淌。
离开教堂，漫步到镇边缘，氛围悄然变化。木屋更显古朴，道路的坡度也暗示着地形的秘密。你会来到银矿博物馆的入口，那里陈列着巨大的矿石、古老的矿车和矿工们磨损的工具。用手触摸那些冰冷的、闪烁着点点银光的石头，一股混合着金属、潮湿岩石和旧时光的气味隐隐传来。博物馆的窗户正对着青翠的山峦，但你已知晓，那山体的内部早已被掏空，是一个由竖井、隧道和矿洞构成的、总长超过300公里的地下迷宫。此刻的宁静，与想象中的地下锤凿声、水流声、工人的呼喊声形成了奇妙的二重奏。
康斯贝格最打动人心的，正是这种“地上”与“地下”生命的永恒对话。它不是一个仅供观赏的、被玻璃罩起来的博物馆，而是一个活生生的、将辉煌与伤痛都刻进山河肌理里的社区。它的核心魅力在于邀请你进行一场垂直的旅行：从象征精神与王权的教堂穹顶，下降到曾经流淌着白银与血汗的地球深处，去理解一段关于贪婪、勇气、技术创新与人类生存的北欧史诗。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "火车缓缓驶入康斯贝格站，第一眼望去，你可能会觉得这是个再寻常不过的挪威宁静小镇。青山环绕，河流潺潺，色彩柔和的木屋散落山坡。空气清冽，带着松针和远处溪流的味道。但只要你稍微抬起头，视线就会被镇中心那座巨大的、有着醒目铜绿色穹顶的建筑牢牢抓住——那就是康斯贝格教堂，其规模之宏伟，与小镇的“体量”完全不成比例。这巨大的反差，正是康斯贝格魅力的第一道谜题。走在安静的街道上，你能听到的只有自己的脚步声、鸟鸣，以及隐约的流水声，一种奇特的静谧感笼罩着一切，仿佛地面之下是另一个沉睡的世界。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，当你真正走进那座巴洛克教堂的内部，寂静便被另一种庄严取代。阳光从高窗射入，在简朴而巨大的白色墙壁和深色木质廊台上投下明晰的光影。没有过多繁复的金色装饰，取而代之的是一种属于新教世界的、近乎理性的宏伟。你的目光会不由自主地被那架造于1760年的精美管风琴吸引，但它最动人的细节，或许是那些为矿工家庭设置的、编号清晰的专属座位区。坐在长椅上，你能想象几百年前，那些刚从黑暗深渊归来的男人们，带着一身岩石粉尘和疲惫，携家带口坐在这里，寻求心灵的慰藉。地面上是光明的信仰与秩序，地面下则是黑暗的劳作与财富，这种张力在教堂的每一寸空间里静静流淌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开教堂，漫步到镇边缘，氛围悄然变化。木屋更显古朴，道路的坡度也暗示着地形的秘密。你会来到银矿博物馆的入口，那里陈列着巨大的矿石、古老的矿车和矿工们磨损的工具。用手触摸那些冰冷的、闪烁着点点银光的石头，一股混合着金属、潮湿岩石和旧时光的气味隐隐传来。博物馆的窗户正对着青翠的山峦，但你已知晓，那山体的内部早已被掏空，是一个由竖井、隧道和矿洞构成的、总长超过300公里的地下迷宫。此刻的宁静，与想象中的地下锤凿声、水流声、工人的呼喊声形成了奇妙的二重奏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "康斯贝格最打动人心的，正是这种“地上”与“地下”生命的永恒对话。它不是一个仅供观赏的、被玻璃罩起来的博物馆，而是一个活生生的、将辉煌与伤痛都刻进山河肌理里的社区。它的核心魅力在于邀请你进行一场垂直的旅行：从象征精神与王权的教堂穹顶，下降到曾经流淌着白银与血汗的地球深处，去理解一段关于贪婪、勇气、技术创新与人类生存的北欧史诗。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`康斯贝格`} />
                <InfoRow label="英文名称" value={`Kongsberg`} />
                <InfoRow label="正式名称" value={`Kongsberg Silver Mines and Mining Town`} />
                <InfoRow label="国家" value={`挪威`} />
                <InfoRow label="城市" value={`康斯贝格`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这里曾是17至19世纪北欧最大、最重要的银矿，支撑了丹麦-挪威联合王国的经济命脉，被誉为“挪威的财富之山”。`} />
                <InfoRow label="建筑特色" value={`地上是挪威最大的巴洛克风格教堂，宏伟壮观；地下是绵延数百公里、宛若迷宫的矿山隧道网络，形成奇特的上下双重世界。`} />
                <InfoRow label="建筑风格" value={`以巴洛克风格为主导的教堂与严格按功能布局、与山川地形紧密结合的矿业城镇规划相融合。`} />
                <InfoRow label="文化价值" value={`它完整呈现了一个因单一产业（采矿）而诞生、繁荣、转型的社区样本，是工业遗产与人类韧性精神的生动纪念碑。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`康斯贝格银矿博物馆（Kongsberg Silver Mine）开放时间因季节和矿井探险项目而异。博物馆主馆全年开放，夏季（6月至8月）通常为10:00-17:00，冬季时间缩短。地下矿井导览游仅在夏季（通常6月中至8月中）及特定周末开放，每日有固定场次（如11:00， 13:00， 15:00），必须提前在官网预约。康斯贝格教堂全年开放，但内部参观时间通常为工作日10:00-16:00，周末时间可能缩短，冬季也可能调整。出行前务必查看最新官方信息。`} />
              <InfoRow label="门票价格" value={`银矿博物馆主馆：成人约160挪威克朗，儿童/学生/老人有优惠，家庭票约400克朗。矿井地下导览游（含博物馆门票）：成人约350-450克朗，儿童约200-250克朗（视具体路线长度而定），需额外付费。康斯贝格教堂：进入免费，登塔或参加导览游需支付小额费用（约50-80克朗）。持有奥斯陆通行证（Oslo Pass）可能享有博物馆门票折扣。`} />
              <InfoRow label="地址" value={`Kongsberg Silver Mine, Hyttegate 3, 3616 Kongsberg, Norway
Kongsberg Church, Kirketorget 1, 3616 Kongsberg, Norway`} />
              <InfoRow label="交通方式" value={`从奥斯陆（Oslo）出发最为便捷。奥斯陆中央火车站（Oslo S）乘坐区域列车（R10， R12等方向）直达康斯贝格站（Kongsberg stasjon），车程约1小时20分钟，班次频繁（每小时至少1-2班）。可在Vy app或网站购票。从康斯贝格火车站步行至镇中心及银矿博物馆约10-15分钟，全程轻松可达。若自驾，从奥斯陆沿E134高速公路向西行驶约1小时即可到达。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一切始于1623年。两个牧童在康斯贝格的山间放牧，据说他们的牛蹄子踢出了一块闪亮的石头。这个偶然的发现，像一道闪电击中了当时正深陷“三十年战争”、国库吃紧的丹麦-挪威国王克里斯蒂安四世。他亲自骑马赶来视察，确认了这是高品质的银矿石。这位雄心勃勃的国王立刻意识到，这是天赐的财富，是巩固王权、支撑战争的“上帝礼物”。他迅速宣布王室对矿山拥有所有权，并以自己的名字“Kongsberg”（意为“国王的山”）为此地命名。几乎一夜之间，来自德意志、丹麦、挪威本地的采矿专家、工程师和劳工像潮水般涌入这片原本寂静的山谷，一个为银矿而生的城镇被强行“植入”了自然。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "接下来的近两百年，是康斯贝格的“白银时代”。这里迅速成长为北欧最大的工业工地，也是当时世界上技术最先进的矿山之一。为了从深达数百米的地下抽出地下水，工程师们建造了庞大的水轮和泵系统，其技术复杂性令人惊叹。矿工们的生活却与技术的辉煌形成残酷对比。他们每天在烛光昏暗、空气污浊的隧道里工作12小时以上，面临塌方、爆炸、缺氧和肺病的巨大风险。死亡是常客。但白银的诱惑如此巨大，到18世纪中叶，康斯贝格出产的白银占丹麦-挪威王国总收入的四分之一以上，养活了镇上近万人口，并催生了配套的铸币厂、武器制造厂（后来演变成著名的康斯贝格军工厂）和繁荣的商业。小镇的格局完全服务于矿山：街道规划便于运输矿石，房屋建在山坡上以便矿工就近上下工，教堂建在中心以安抚灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，所有的繁荣都依赖于那条地下的银色脉带。随着最富的矿脉逐渐枯竭，开采成本越来越高，康斯贝格的命运开始摇摆。19世纪初的拿破仑战争给了它沉重一击。作为丹麦-挪威的盟友，法国战败导致丹麦将挪威割让给瑞典，政治剧变冲击了经济。尽管采矿仍在继续，但光芒已逐渐黯淡。真正的转折点发生在1957年，持续运营了334年的康斯贝格银矿，终于因为资源耗尽和经济考量而正式关闭。最后一班矿工升上地面，巨大的水轮停止了转动，深深的矿井被水逐渐淹没，一个时代戛然而止。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但康斯贝格的故事并未结束。它面临着所有资源型城镇的终极问题：矿停了，城还在，人怎么活？幸运的是，早在矿关停前，基于采矿技术的遗产，康斯贝格已发展出高端的国防工业（Kongsberg Gruppen）和科技产业，完成了艰难而成功的转型。地上的城镇得以留存，而那些黑暗的地下世界，则从生产的现场转变为记忆的现场。昔日的矿山隧道被清理出安全的部分，向游客开放；矿山建筑变成了博物馆；矿工的故事被收集、讲述。从“生产白银”到“生产历史与体验”，康斯贝格完成了它的华丽转身。今天，它不仅是挪威工业史的见证，更作为“挪威采矿遗产”的一部分被提名世界文化遗产，那段深埋地下的艰苦岁月，终于升华为全人类值得珍视的普遍价值。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天的深度探索，以充分体验地上与地下的双重世界。最佳抵达时间是早上9点左右，这时小镇刚刚苏醒，光线柔和，适合拍摄教堂外观。游览节奏宜张弛有度：上午聚焦地上的文化与历史，下午投身地下的探险与震撼，傍晚则以悠闲漫步收尾，品味小镇的日常脉搏。这样的安排让你能从精神感知逐步过渡到身体体验，最后回归平静，形成完整的旅行闭环。记得务必提前在线预订下午的矿井导览游，这是整个旅程的高潮，不容错过。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`矿井内常年温度只有5-8摄氏度，且地面潮湿，务必穿上保暖防水的衣物和防滑结实的鞋子，即使是在盛夏。
矿井导览游非常热门，尤其是在七八月的旺季，强烈建议提前数天甚至数周在官网预订，现场基本没有空位。
小镇治安极好，但入夜后街道照明有限，散步时建议携带手电或使用手机照明，并注意脚下不平的石板路。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`上午第一站先去仰望康斯贝格教堂那令人屏息的铜绿色穹顶，并走进其内部感受那份为矿工而设的、肃穆而巨大的宁静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`接着步行至康斯贝格银矿博物馆，花上一两个小时细细观看那些巨大的银矿石标本、精密古老的采矿机械模型和泛黄的照片，让地下的历史在地面上先铺陈开来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在镇中心找一家可爱的咖啡馆享用简单午餐，推荐尝尝挪威特色的华夫饼配棕色奶酪，同时观察窗外节奏缓慢的本地生活。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午准时在博物馆集合，戴上安全头盔和头灯，跟随向导深入真正的地下矿井，在只有几度恒温的幽暗隧道里触摸冰冷的岩壁，聆听水流和往昔的回响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`乘坐一小段复原的矿山列车，在铁轨的哐当声中体验矿工每日通勤的一小片段，想象他们前往工作面时的心情。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出矿井后，沿着河岸散步，去看望那些保存下来的古老水车和矿业建筑遗迹，理解当年驱动整个矿山的庞大水力系统。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`黄昏时分，漫步穿过Saggrenda等老矿工居住区，看看那些色彩斑斓、花园整洁的小木屋，感受历史如何沉淀为温馨的日常。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐一定要在镇上的老牌餐厅点一份新鲜的挪威鲑鱼，用美味的食物为这一天的时空穿越画上圆满句号。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`教堂穹顶仰拍视角`}</h4>
                  <p className="text-sm text-gray-700">{`站在教堂前广场的喷泉附近，用广角镜头仰拍，将宏伟的绿色穹顶、教堂钟楼与挪威典型的澄澈蓝天一同纳入画面，最佳光线在晴朗的上午。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`矿井入口纪实`}</h4>
                  <p className="text-sm text-gray-700">{`在开始地下导览前，拍摄同行者佩戴好安全头盔、站在厚重的矿井钢铁大门前的瞬间，斑驳的金属门和严肃的警告标志能立刻营造探险氛围。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`河畔全景`}</h4>
                  <p className="text-sm text-gray-700">{`走到教堂对岸的河滨步道，下午顺光时，可以拍摄教堂、彩色木屋连同它们在清澈河水中的倒影，构成一幅完美的挪威小镇风情画。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`地下矿洞光影`}</h4>
                  <p className="text-sm text-gray-700">{`在矿井内经过允许后，关闭头灯，利用向导的手提灯或设置长时间曝光，拍摄隧道深邃的纵深感以及矿车轨道延伸至黑暗的构图，充满故事性。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`老木屋细节特写`}</h4>
                  <p className="text-sm text-gray-700">{`在古老的矿工住宅区，聚焦于一扇斑驳的蓝色门牌、一个装满鲜花的旧窗口花箱，或是阳光下木纹清晰的墙面，捕捉时光流淌的细腻痕迹。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在矿井内部，未经向导明确许可，绝对不要使用闪光灯，以免惊扰到可能栖息的蝙蝠，也为了保持探险的神秘氛围。`}</li>
                <li>• {`夏季的挪威有漫长的白夜，所谓“黄金时刻”可能持续数小时，傍晚八点后的光线依然柔和迷人，非常适合拍摄小镇和远山。`}</li>
                <li>• {`多关注人物与环境的互动，比如当地人骑自行车经过教堂、老人在长椅上看报，这些瞬间能让你的照片更有温度和叙事感。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史中心之选`}</h4>
                  <p className="text-sm text-blue-800">{`由老银行建筑改造的精品酒店，房间挑高十足，保留了古典的装饰线条，位置极佳，下楼就是教堂广场，夜晚异常宁静。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色山林小屋`}</h4>
                  <p className="text-sm text-green-800">{`坐落在小镇边缘森林中的独栋小木屋，拥有壁炉和私人露台，晚上可以伴着松涛声入睡，清晨可能邂逅觅食的麋鹿，体验真正的挪威“hytte”文化。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端设计酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`位于河畔的现代风格酒店，房间拥有全景落地窗，能将河流、教堂和远山尽收眼底，桑拿浴室是徒步或矿井探险后放松身心的绝佳去处。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`温馨家庭民宿`}</h4>
                  <p className="text-sm text-purple-800">{`镇上半山腰上一栋百年木屋，主人是退休的矿山工程师，会热情地和你分享老照片和故事，早餐的 homemade 果酱和新鲜面包让你感到宾至如归。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（6月至8月）是旅游高峰，住宿非常紧张，价格也最高，建议至少提前两个月预订。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "康斯贝格是一个安全、友善的小镇，即使选择远离中心的住宿也无需担心治安问题，但请务必确认住宿地点是否有方便的停车位（如果自驾）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "许多挪威的民宿和酒店不提供牙刷、拖鞋等一次性用品，需自行准备。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当我从阴冷幽深的矿井重回地面，阳光刺得我眯起眼睛，耳边不再是滴水声，而是鸟鸣与风声。那一刻的感受无比复杂。地下那个由人力、智慧和血汗开凿出的巨大空洞，是一个关于人类野心与坚韧的黑暗圣殿；而地上这个沐浴在日光下、环绕着青山绿水的小镇，则是生命在经历索取与消耗后，依然选择延续、转型并寻找平静的证明。康斯贝格教会我的，是一种垂直维度的思考。我们总是平行地看世界，看城市的铺陈，看风景的延展，但在这里，你必须向下看，向山的内部、向地球的深处看，才能理解表面的宁静之下，埋藏着多么汹涌的历史地层。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当今这个追求即时满足、沉迷于表面光鲜的快节奏世界，康斯贝格的存在像一首缓慢而庄严的叙事诗。它不讨好你，不提供轻松的娱乐，而是邀请你进行一场有点费力、需要思考和想象的深度对话。它让你触摸冰冷的矿石，也触摸温暖的木屋墙壁；它让你想象财富的眩光，也感受矿工家庭的悲欢。每一位热爱深度游的旅人都应该来此，不仅仅是为了一张地下迷宫的照片或一座漂亮教堂的打卡，更是为了亲身经历这种“上下求索”的完整感。在这里，你会明白，真正的财富不仅仅是曾经流淌的白银，更是人类社区在经历了资源的枯竭、产业的巨变后，依然能扎根于土地，将自己的故事——无论光明还是黑暗——诚实而骄傲地讲述给未来听的能力。这份韧性，才是穿越时间的最耀眼的光芒。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/alta-rock-art" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔塔岩画</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alta Rock Art</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/undredal" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    翁
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">翁勒达尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Undredal</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/fredrikstad-fortress-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    腓
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">腓特烈斯塔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Fredrikstad</p>
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
