import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '莫诺波利 Monopoli｜意大利白色海堤与查理五世城堡的原味渔港风情 - 最佳欧洲景点',
  description: '车子驶离拥挤喧嚣的巴里，沿着海岸线向南，当一片仿佛被阳光漂洗过无数次的、密集的白色方块群出现在右手边时，你就知道，莫诺波利到了。我的第一印象不是“景点”，而是一种浓烈、鲜活、带着咸腥气的生活感。空气里混杂着海风、晒干的渔网、咖啡香和从某扇窗飘出的炖菜气味。巨大的查理五世城堡像个沉默的赭石色巨人，守在',
}

export default function MonopoliOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '普利亚大区，巴里省', href: '/destinations/italy' },
            { label: '莫诺波利', href: '/attractions/monopoli-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`莫诺波利・Monopoli・意大利・普利亚大区，巴里省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶离拥挤喧嚣的巴里，沿着海岸线向南，当一片仿佛被阳光漂洗过无数次的、密集的白色方块群出现在右手边时，你就知道，莫诺波利到了。我的第一印象不是“景点”，而是一种浓烈、鲜活、带着咸腥气的生活感。空气里混杂着海风、晒干的渔网、咖啡香和从某扇窗飘出的炖菜气味。巨大的查理五世城堡像个沉默的赭石色巨人，守在陆地与海洋的交界处，而它脚下，就是那道著名的白色海堤——不是光滑的装饰，而是粗粝、实用、被海浪拍打出无数痕迹的石头平台，上面晾晒着彩色的渔具，老人们坐着闲聊，孩子们在奔跑。
穿过城堡旁的拱门，你就一头扎进了老城的迷宫。这里的街道窄得不可思议，两边的白墙高耸，抬头只能看见一线被切割得湛蓝的天空。阳光在石灰岩墙壁上跳跃，反射出耀眼却不灼人的光。脚下是岁月磨得光滑的石板路，缝隙里可能还藏着几个世纪前的沙砾。你不停地迷路，又不停地惊喜：转角可能是一个袖珍的、开满九重葛的广场；一扇褪色的蓝色木门后，传来老式缝纫机的哒哒声；透过低矮的拱门，瞥见庭院里一位老奶奶正在手擀“奥雷基埃特”耳朵面。这里的时间流速似乎不同，它慵懒、循环，紧密围绕着家庭、教堂和大海。
最打动人心的，是这里毫不矫饰的真实。傍晚时分，港口活了过来。渔船归航，引擎声、呼喊声、冰块撞击声奏响每日的终章。渔民们在海堤上直接处理渔获，银光闪闪的沙丁鱼、章鱼被熟练地分类。你会看到穿着防水围裙的大叔和打扮入时、刚从办公室下班来买鱼的年轻人自然交谈。圣母升天大教堂的巴洛克立面在夕阳下变成温暖的蜜糖色，钟声敲响，不是为了召唤游客，而是为这个社区标记时间的刻度。在这里，你感觉自己不是一个旁观者，而是偶然闯入了另一个节奏鲜明、自给自足的世界，它美丽，但它的美扎根于日复一日的劳作与信仰之中。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子驶离拥挤喧嚣的巴里，沿着海岸线向南，当一片仿佛被阳光漂洗过无数次的、密集的白色方块群出现在右手边时，你就知道，莫诺波利到了。我的第一印象不是“景点”，而是一种浓烈、鲜活、带着咸腥气的生活感。空气里混杂着海风、晒干的渔网、咖啡香和从某扇窗飘出的炖菜气味。巨大的查理五世城堡像个沉默的赭石色巨人，守在陆地与海洋的交界处，而它脚下，就是那道著名的白色海堤——不是光滑的装饰，而是粗粝、实用、被海浪拍打出无数痕迹的石头平台，上面晾晒着彩色的渔具，老人们坐着闲聊，孩子们在奔跑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "穿过城堡旁的拱门，你就一头扎进了老城的迷宫。这里的街道窄得不可思议，两边的白墙高耸，抬头只能看见一线被切割得湛蓝的天空。阳光在石灰岩墙壁上跳跃，反射出耀眼却不灼人的光。脚下是岁月磨得光滑的石板路，缝隙里可能还藏着几个世纪前的沙砾。你不停地迷路，又不停地惊喜：转角可能是一个袖珍的、开满九重葛的广场；一扇褪色的蓝色木门后，传来老式缝纫机的哒哒声；透过低矮的拱门，瞥见庭院里一位老奶奶正在手擀“奥雷基埃特”耳朵面。这里的时间流速似乎不同，它慵懒、循环，紧密围绕着家庭、教堂和大海。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动人心的，是这里毫不矫饰的真实。傍晚时分，港口活了过来。渔船归航，引擎声、呼喊声、冰块撞击声奏响每日的终章。渔民们在海堤上直接处理渔获，银光闪闪的沙丁鱼、章鱼被熟练地分类。你会看到穿着防水围裙的大叔和打扮入时、刚从办公室下班来买鱼的年轻人自然交谈。圣母升天大教堂的巴洛克立面在夕阳下变成温暖的蜜糖色，钟声敲响，不是为了召唤游客，而是为这个社区标记时间的刻度。在这里，你感觉自己不是一个旁观者，而是偶然闯入了另一个节奏鲜明、自给自足的世界，它美丽，但它的美扎根于日复一日的劳作与信仰之中。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`莫诺波利`} />
                <InfoRow label="英文名称" value={`Monopoli`} />
                <InfoRow label="正式名称" value={`Monopoli`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`普利亚大区，巴里省`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座在亚得里亚海畔屹立千年的防御性港口城市，见证了从古希腊殖民到中世纪海洋共和国，再到西班牙统治的复杂历史层积。`} />
                <InfoRow label="建筑特色" value={`洁白如雪的石灰岩建筑群紧密簇拥，形成迷宫般的古老街巷，与碧蓝海水和坚固的城堡、海堤形成鲜明对比，充满质朴而坚固的地中海渔港风情。`} />
                <InfoRow label="建筑风格" value={`以普利亚地区特有的“特朗尼”风格（白墙石顶）为基础，混合了诺曼、施瓦本、西班牙等多种统治时期留下的罗曼式、巴洛克式建筑元素。`} />
                <InfoRow label="文化价值" value={`这里不是为游客准备的舞台布景，而是一个仍然充满生机的、以渔业和农业为根基的普利亚传统社区，是观察南意真实日常生活的鲜活窗口。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城区域全天开放。主要室内景点如城堡和大教堂开放时间各异：查理五世城堡通常为上午9:30至下午7:00，冬季可能缩短；圣母升天大教堂开放时间约为上午8:00至下午1:00及下午4:00至晚上7:00。具体时间随季节变动，建议行前查阅最新公告或询问当地旅游信息中心。`} />
              <InfoRow label="门票价格" value={`漫步古城本身免费。查理五世城堡门票约5欧元，常设展览有时需额外付费。大教堂免费进入，但参观地下考古区域或珍宝室可能收取少量费用（约2-3欧元）。学生、老人及儿童通常享有折扣。`} />
              <InfoRow label="地址" value={`Piazza Giuseppe Garibaldi, 1, 70043 Monopoli BA, Italy`} />
              <InfoRow label="交通方式" value={`最近的机场是巴里卡罗尔·沃伊蒂拉机场（BRI）。从机场可乘坐Ferrovie del Sud Est铁路公司的列车直达莫诺波利火车站，车程约1小时，班次较为频繁（约每1-2小时一班），票价经济。从巴里中央火车站出发，乘坐区域火车前往莫诺波利更为方便，车程约30-40分钟，班次密集。抵达莫诺波利火车站后，出站步行约10-15分钟即可到达老城和海港核心区。自驾者可将车停在古城外围的收费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "莫诺波利的故事，就像它脚下层层叠叠的考古地层一样复杂。早在公元前，梅萨比人和希腊人就看中了这个天然良港，它的名字“Monopoli”可能就源于希腊语的“Monos Polis”，意为“唯一的城”或“重要的城”。罗马人来了，在这里修建道路和别墅，但它真正的命运转折发生在中世纪早期。当拜占庭帝国与伦巴第人在这片土地上拉锯时，莫诺波利因其战略位置成为必争之地，最初的防御城墙开始竖起，城市开始向内陆收缩，形成了我们今天看到的那种紧凑、易于防守的格局。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然后，是诺曼人。这些来自北方的征服者在11世纪将莫诺波利纳入囊中，并赋予了它新的活力。他们加固了港口，城市开始繁荣，成为亚得里亚海贸易网络中的一个节点。但好景不长，接下来的几个世纪充满了动荡。它先后被施瓦本王朝、安茹家族统治，内部也充满了贵族家族间的争斗。直到15世纪，威尼斯共和国短暂地将它的触角伸到这里，带来了更多商业联系和建筑影响，你能在一些古老的宫殿立面上看到威尼斯的哥特式窗花痕迹。然而，威尼斯的统治如昙花一现。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正给莫诺波利打下不可磨灭烙印的，是16世纪的西班牙哈布斯堡王朝。面对日益猖獗的奥斯曼土耳其海盗的威胁，皇帝查理五世下令大规模重建城市的防御体系。我们今天看到的宏伟城堡，就是在1545年至1552年间，在他的命令下于更早的诺曼城堡基础上重建的。这不是一座为了彰显王室荣耀的宫殿，而是一座纯功能性的、坚不可摧的军事堡垒——厚实的城墙、棱堡设计、面向大海的炮台，一切都是为了抵御来自海上的攻击。这道命令，将莫诺波利彻底塑造成了一个“堡垒城市”的模样。在西班牙统治下，城市继续发展，巴洛克艺术风潮也在此登陆，于是我们在坚固的城堡不远处，看到了圣母升天大教堂那华丽繁复、充满动感的立面，刚毅与柔美在此奇妙共存。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "近现代，随着海盗威胁的消失，莫诺波利的军事色彩逐渐褪去，但它作为渔港和农业中心（特别是橄榄和葡萄酒）的角色一直延续。二战时期，它曾遭受轰炸，老城部分受损，但核心区域奇迹般地保存了下来。战后，像许多南意城镇一样，它经历了人口外流和经济挑战，但也正是这种相对缓慢的发展，让它避免了过度旅游化的命运。今天的莫诺波利，城堡里举办着艺术展览，古老的盐仓被改造成文化空间，但清晨的港口依然忙碌，老城的作坊依然传来敲打声。它的历史不是封存在博物馆玻璃柜里的标本，而是像海水一样，浸润在每一块石头、每一次潮汐、每一张被海风和阳光刻画出皱纹的脸上。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味莫诺波利，你需要一整天的时间，并将节奏放慢到近乎本地人的步调。建议清晨（8点左右）抵达，这时旅游团还未到来，阳光柔和，港口正是一天中最鲜活的时候。先从海港和城堡外围开始，感受它的“外向”活力，然后深入老城迷宫，在纵横交错的巷弄中迷失、发现。午后阳光最烈时，可以找个阴凉的庭院或海边餐厅休息。傍晚时分再次回到海港，见证日落和归航的喧嚣，最后在华灯初上的老城享用晚餐。这样的安排能让你完整地体验这座城镇从晨起到入眠的呼吸与心跳。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿一双绝对舒适的平底鞋，老城的石板路凹凸不平且常带有坡度，高跟鞋会是一场灾难。
夏季正午阳光非常猛烈，务必携带帽子、太阳镜和充足的水，老城内荫凉处是宝贵的休息点。
如果自驾，务必把车停在古城外围指定的付费停车场（如Porta Vecchia停车场），老城内部是交通限制区，闯入会被罚款。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨第一站直奔波尔托维基奥老港，看渔船在晨光中卸下银光闪闪的渔获，感受海风里最原始的咸腥气与活力。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着著名的白色海堤（Cala Porta Vecchia）漫步，用手触摸被海浪侵蚀得光滑的石灰岩，看当地人已经坐在彩色小椅上开始一天的闲聊。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从海堤尽头回望并走向查理五世城堡，在城堡脚下的广场上仰望这座赭红色巨兽的雄姿，想象当年炮口对准大海的紧张氛围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`买票进入城堡内部，穿行在空旷的厅堂与露台上，从防御者的视角俯瞰整个港口和老城如白色积木般的屋顶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡侧面的拱门钻进老城迷宫，彻底放弃地图，任由狭窄的“Vicoli”小巷带你邂逅隐藏的巴洛克教堂立面、开满鲜花的庭院和古老的手工作坊。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到圣母升天大教堂，先在外面欣赏其戏剧性的巴洛克立面，然后走进凉爽昏暗的内部，感受金色装饰与虔诚寂静带来的反差。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午餐后探索老城靠内陆的部分，穿过古老的“阿尔科”拱门，在“圣老楞佐”市场区感受更本地化的市井气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前回到港口区，找一家海堤上的酒吧或餐厅，点一杯普利亚产的葡萄酒，看着夕阳将城堡、白墙和大海染成一片金色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`白色海堤逆光人像`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前，站在海堤靠近城堡的一端，以波光粼粼的海面为背景拍摄人物剪影或侧影，渔民和彩色小船是绝佳的前景点缀。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡台阶对称构图`}</h4>
                  <p className="text-sm text-gray-700">{`中午阳光直射时，站在城堡主入口的台阶下向上仰拍，利用台阶的引导线和城堡大门形成的对称框架，能拍出极具几何感和力量感的照片。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老城巷道光影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，阳光斜射入狭窄巷道时，寻找那些被光照亮的蓝色或绿色门框、飘扬的晾衣绳以及墙上的光影斑驳，拍摄充满生活感的细节。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`港口全景与灯塔`}</h4>
                  <p className="text-sm text-gray-700">{`日落时分，走到防波堤的尽头（灯塔附近），回望整个莫诺波利老城，可以将城堡、白色建筑群、停泊的渔船和绚烂的天空一同收入镜中。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`大教堂穹顶仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`进入圣母升天大教堂内部，躺下或极度仰拍其华丽的巴洛克式穹顶壁画，利用广角镜头捕捉那种令人眩晕的神圣感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄当地居民，尤其是长者或工作中的渔民时，请务必先微笑并示意，获得对方默许后再拍摄，尊重他们的隐私。`}</li>
                <li>• {`飞无人机在历史中心区和港口上空通常受到严格限制，需提前查阅当地法规并申请许可，贸然飞行可能会被罚款并没收设备。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`海港风情之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在港口边由老仓库改造的精品酒店，清晨推开窗就是渔船出海的景象，晚上听着轻柔的海浪声入眠。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老城穿越体验`}</h4>
                  <p className="text-sm text-green-800">{`藏身于迷宫般小巷深处的“特朗尼”风格民宿，房间拥有拱形石顶和厚实的白墙，房东妈妈可能会送你一瓶自制的橄榄油。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`田园悠闲度假`}</h4>
                  <p className="text-sm text-yellow-800">{`位于城郊橄榄园内的农庄住宿，享受绝对的宁静与田园风光，每天由主人提供新鲜的农家早餐，适合自驾的旅行者。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计感避世居所`}</h4>
                  <p className="text-sm text-purple-800">{`坐落在老城边缘一栋经过精心修复的历史建筑内，现代简约设计完美融入古老结构，带有一个可俯瞰部分屋顶景观的露台。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（6-9月）是旺季，住宿紧张且价格较高，建议至少提前2-3个月预订。春秋季气候宜人，是更舒适且性价比高的选择。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "老城内的住宿虽然氛围绝佳，但车辆无法直达门口，需要拖着行李走一段石板路，预订时请做好心理准备并询问房东是否提供搬运协助。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开莫诺波利好几天了，我的感官记忆里依然充斥着那片耀眼的白色、海水的咸味、石头被晒暖后的气息，以及黄昏时分弥漫在整个港口的、那种安宁而满足的氛围。这个地方没有佛罗伦萨的磅礴艺术，没有威尼斯的水城奇观，甚至没有隔壁波利尼亚诺那种戏剧性的悬崖餐厅。但它有的，是一种更珍贵、更难得的东西：真实的质地和从容的呼吸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个一切都越来越像、越来越快的世界里，莫诺波利固执地守护着自己的节奏。它提醒我们，旅行的意义不只是为了收集明信片般的风景，更是为了踏入另一种时间维度，去观察、去倾听、去感受一个社区如何与它的历史、它的海洋、它的日常紧密共生。在这里，你会放下“必须看完所有景点”的焦虑，心甘情愿地“浪费”时间在一条不知名的小巷里，看光影移动，或者和一位根本不会说英语的老渔民比划着手势聊上半天。这种融入感，这种被一个地方的常态所接纳的温暖，才是深度游最迷人的奖赏。如果你也厌倦了人潮汹涌的打卡地，渴望一次触及南意大利灵魂的旅行，那么，请来莫诺波利。让它用白色的光芒、蓝色的海浪和永不停息的生活之诗，为你洗去浮华，留下真正深刻的、关于地中海的记忆。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/montepulciano" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蒙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蒙特普齐亚诺</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Montepulciano</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/salo-garda-lake-tour" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨洛</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Salò</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/massa-marittima" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马萨马里蒂马</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Massa Marittima</p>
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
