import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '蒙德塞 圣米迦勒大教堂 Mondsee Basilica｜《音乐之声》绝美婚礼教堂与明黄色双塔传奇 - 最佳欧洲景点',
  description: '你第一眼看见它，绝对不会认错。车子刚刚绕出林荫道，一片开阔的湖光山色扑面而来，而在那片醉人的蓝与绿之间，两座像用最醇厚的奶油和阳光砌成的明黄色塔楼，就那么骄傲又温柔地矗立着。那不是普通的黄，是带着蜂蜜光泽、带着暖意的黄，在阿尔卑斯山清澈的空气中，鲜艳得几乎有些不真实。那一瞬间，《音乐之声》里管风琴庄',
}

export default function MondseeBasilicaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '奥地利', href: '/destinations/austria' },
            { label: '蒙德塞', href: '/destinations/austria' },
            { label: '蒙德塞', href: '/attractions/mondsee-basilica' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`蒙德塞・Mondsee Basilica・奥地利・蒙德塞`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼看见它，绝对不会认错。车子刚刚绕出林荫道，一片开阔的湖光山色扑面而来，而在那片醉人的蓝与绿之间，两座像用最醇厚的奶油和阳光砌成的明黄色塔楼，就那么骄傲又温柔地矗立着。那不是普通的黄，是带着蜂蜜光泽、带着暖意的黄，在阿尔卑斯山清澈的空气中，鲜艳得几乎有些不真实。那一瞬间，《音乐之声》里管风琴庄严奏响、玛利亚披着长纱缓缓走过的画面，立刻有了具体的坐标。空气里有湖水微腥的清新气味，混合着远处咖啡馆飘来的咖啡香和刚出炉的苹果卷的甜腻。
走近了，才发现这座教堂并非遗世独立。它牢牢地扎根在蒙德塞小镇的中心广场上，前面是熙熙攘攘的市集摊位，卖着当季的草莓、鲜花和手织品。穿着传统皮裤的老人坐在长椅上晒太阳，孩子们踩着滑板车绕着喷泉追逐。教堂的钟声每小时敲响一次，那声音浑厚悠长，却不显得肃穆，反而像是这个小镇平稳而安宁的心跳。它不仅仅是游客的朝圣地，更是当地人生老病死、婚丧嫁娶的见证者，那明黄色的外墙，日复一日地映照着最平凡也最动人的市井生活。
推开那扇厚重的木门，外面的世界霎时安静下来。一种由内而外的温暖将你包裹——不是温度，而是色彩与光影带来的心理感受。眼前是一片令人屏息的金色海洋。金色的灰泥装饰像藤蔓一样缠绕着每一根立柱，爬满了每一个拱顶，簇拥着圣坛上那些栩栩如生的圣人雕像。阳光从高侧窗倾泻而下，穿过微微浮动的尘埃，让那些金色泛起丝绸般的光泽。抬头看，巨大的天顶壁画仿佛没有边界，天使与圣徒在蔚蓝的天空和白云间飞舞，带来强烈的升腾感。你几乎能想象，当年电影剧组在这里拍摄时，是如何被这种既神圣又无比欢悦的气氛所震撼，并认定这里就是电影里那场经典婚礼的不二之选。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你第一眼看见它，绝对不会认错。车子刚刚绕出林荫道，一片开阔的湖光山色扑面而来，而在那片醉人的蓝与绿之间，两座像用最醇厚的奶油和阳光砌成的明黄色塔楼，就那么骄傲又温柔地矗立着。那不是普通的黄，是带着蜂蜜光泽、带着暖意的黄，在阿尔卑斯山清澈的空气中，鲜艳得几乎有些不真实。那一瞬间，《音乐之声》里管风琴庄严奏响、玛利亚披着长纱缓缓走过的画面，立刻有了具体的坐标。空气里有湖水微腥的清新气味，混合着远处咖啡馆飘来的咖啡香和刚出炉的苹果卷的甜腻。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，才发现这座教堂并非遗世独立。它牢牢地扎根在蒙德塞小镇的中心广场上，前面是熙熙攘攘的市集摊位，卖着当季的草莓、鲜花和手织品。穿着传统皮裤的老人坐在长椅上晒太阳，孩子们踩着滑板车绕着喷泉追逐。教堂的钟声每小时敲响一次，那声音浑厚悠长，却不显得肃穆，反而像是这个小镇平稳而安宁的心跳。它不仅仅是游客的朝圣地，更是当地人生老病死、婚丧嫁娶的见证者，那明黄色的外墙，日复一日地映照着最平凡也最动人的市井生活。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`推开那扇厚重的木门，外面的世界霎时安静下来。一种由内而外的温暖将你包裹——不是温度，而是色彩与光影带来的心理感受。眼前是一片令人屏息的金色海洋。金色的灰泥装饰像藤蔓一样缠绕着每一根立柱，爬满了每一个拱顶，簇拥着圣坛上那些栩栩如生的圣人雕像。阳光从高侧窗倾泻而下，穿过微微浮动的尘埃，让那些金色泛起丝绸般的光泽。抬头看，巨大的天顶壁画仿佛没有边界，天使与圣徒在蔚蓝的天空和白云间飞舞，带来强烈的升腾感。你几乎能想象，当年电影剧组在这里拍摄时，是如何被这种既神圣又无比欢悦的气氛所震撼，并认定这里就是电影里那场经典婚礼的不二之选。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`蒙德塞`} />
                <InfoRow label="英文名称" value={`Mondsee Basilica`} />
                <InfoRow label="正式名称" value={`蒙德塞圣米迦勒大教堂`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`蒙德塞`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座巴洛克瑰宝不仅是奥地利重要的朝圣地，更因成为电影《音乐之声》中玛利亚与冯·特拉普上校举行婚礼的取景地而享誉全球，成为连接虔诚信仰与流行文化的标志性桥梁。`} />
                <InfoRow label="建筑特色" value={`最令人过目不忘的便是那对高耸入云、通体明黄色的双子塔楼，在阿尔卑斯山与蒙德塞湖的湛蓝背景下，宛如一对燃烧的巨型蜡烛，内部则充斥着极尽繁复奢华的金色灰泥装饰与天顶壁画。`} />
                <InfoRow label="建筑风格" value={`奥地利晚期巴洛克风格的代表作，内部装饰深受南德“威斯教堂”式样的影响，充满了欢庆、动感与戏剧性的光影效果。`} />
                <InfoRow label="文化价值" value={`它超越了单纯的宗教场所，是当地社区生活的中心，并因一部电影而成为全球数百万人心中关于“爱与结合”的浪漫象征，承载着真实历史与艺术虚构交织的独特叙事。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`教堂内部对游客开放时间为每日上午9点至下午6点。周日及天主教节日期间，上午主要用于弥撒，建议游客于下午1点后进入参观，并保持安静。冬季（11月至次年3月）开放时间可能缩短至下午5点关闭。教堂前的小博物馆开放时间较为灵活，通常与教堂开放时间同步，但建议行前在当地旅游信息中心确认。`} />
              <InfoRow label="门票价格" value={`进入教堂主体区域免费，但鼓励游客在入口处的捐赠箱投入2-3欧元以支持维护。侧厅的小型博物馆或登上塔楼（如开放）可能需要支付约5欧元的门票费用。学生、老人及团体通常有1-2欧元的优惠。参加正式的弥撒仪式无需任何费用。`} />
              <InfoRow label="地址" value={`Basilikastraße 1, 5310 Mondsee, Austria`} />
              <InfoRow label="交通方式" value={`从最近的国际机场萨尔茨堡机场出发，最便捷的方式是租车自驾，沿A1高速公路向林茨方向行驶，从蒙德塞出口下高速，跟随“Mondsee Zentrum”路标，约40分钟即可抵达，教堂位于镇中心，有明显的指路牌。若选择公共交通，可在萨尔茨堡中央火车站乘坐前往林茨或阿特南-普赫海姆方向的区域火车（S-Bahn或REX），在“Mondsee”站下车，车程约50分钟，每小时约1-2班；出火车站后步行约15分钟或搭乘前往镇中心的本地巴士即可到达教堂广场。建议购买“萨尔茨堡卡”或上奥地利州日票，可覆盖区域内大部分交通。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`蒙德塞的故事，远比一部1965年的电影要古老和厚重得多。它的起源可以追溯到公元748年，当时的巴伐利亚公爵奥迪洛在这里创立了一座本笃会修道院。为什么选在这里？因为蒙德塞湖肥沃的湖畔土地和宁静隔绝的环境，正是修道士们“祈祷与劳作”的理想之地。最初的教堂是朴素的罗马式风格，修士们在此抄写经文、酿造啤酒，让这片土地逐渐成为知识和信仰的中心。中世纪几百年间，修道院积累了大量财富和影响力，成了上奥地利地区一股不可小觑的宗教与世俗力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，时间的洪流总会带来改变。到了18世纪，席卷欧洲的巴洛克艺术风潮也吹进了阿尔卑斯山区。那时候的人们，刚刚走出三十年战争的阴影，渴望光明、动感和戏剧性的表达来赞颂上帝的荣耀与天国的喜乐。于是，在1738年到1786年间，修道院迎来了它最华丽的一次蜕变。我们今天看到的这座教堂，就是在那个时候，由建筑师弗朗茨·克萨韦尔·费尔贝尔和著名的灰泥雕塑家约瑟夫·格奥尔格·莫塞默等人联手打造的。他们把原来沉闷的罗马式大厅，变成了一场视觉的盛宴。那些仿佛挣脱了地心引力的天使、那些流动的金色曲线、那些描绘圣本笃生平的恢弘壁画，无一不在诉说着那个时代对“神圣欢愉”的全新理解。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但盛极而衰似乎是历史的规律。1807年，在拿破仑战争的余波中，巴伐利亚政府将修道院“世俗化”，驱逐了修士，没收了其庞大的财产。教堂的幸运在于，它被保留了下来，移交给了当地的天主教教区，继续作为牧养信徒的场所。而那些修道院的建筑，则被改造为学校、市政厅和民居。教堂失去了昔日的 monastic 光环，却更深地融入了小镇的肌理。它静静地看着帝国兴起又衰落，看着战争来去，看着蒙德塞从一个修道院城镇变成一个以湖光山色闻名的度假胜地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到20世纪中叶，一个来自好莱坞的契机，让它以意想不到的方式再次闻名世界。电影《音乐之声》的选景团队在奥地利四处寻觅，需要找到一个既能体现庄严神圣，又具备独特视觉美感的教堂，来拍摄冯·特拉普家女家庭教师玛利亚与男主人的婚礼。当他们来到蒙德塞，看到那在湖光山色映衬下的明黄色双塔，以及内部无比华丽、充满喜庆感的巴洛克内饰时，立刻拍板定案。1964年，朱莉·安德鲁斯和克里斯托弗·普卢默在这里拍下了那经典的镜头。电影在1965年上映后风靡全球，无数观众记住了这个美丽的教堂。从此，来自世界各地的游客，尤其是美国、日本和英国的影迷，开始循着电影的足迹来到这里，寻找那份经典的浪漫。教堂也坦然接受了这个新角色，在保持其宗教功能的同时，也温和地欢迎着那些心怀电影梦的朝圣者。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受蒙德塞大教堂的双重魅力——既是活跃的巴洛克建筑瑰宝，又是浪漫的文化符号，建议安排至少3到4小时的深度游览。最佳抵达时间是工作日的上午10点左右，这时晨雾已散，阳光正好照亮教堂的东立面，而且避开了周日弥撒的人流和下午可能到来的大批旅行团。游览节奏宜缓不宜急，先从外部环境感受起，再进入内部沉浸式体验，最后在周边回味。这样的安排能让你先建立起对教堂与湖泊、小镇关系的整体印象，再细细品味内部令人眼花缭乱的细节，最后在湖边的悠闲氛围中消化所有的感官与情感冲击。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周日前往请务必查询好弥撒时间（通常是上午），在仪式进行期间应避免在教堂内四处走动或拍照，这是基本的尊重。教堂内部地面多为光滑石板，建议穿着舒适且防滑的鞋子，女性游客可随身带一条披肩或围巾，以备进入教堂时遮盖肩膀。广场及湖边区域治安良好，但旅游旺季时仍需看管好随身物品。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从湖对岸的“Seeperle”餐厅附近开始你的旅程，隔着一汪碧水遥望那对明黄色塔楼与阿尔卑斯山倒影构成的完美画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`慢慢走近教堂，绕行它一周，感受那些巴洛克立面上精致的雕塑和窗户，并触摸被岁月打磨得光滑温润的黄色墙漆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开主大门进入中殿，先站在最后排的长椅处，让眼睛适应那璀璨的金色，静静聆听可能有的管风琴练习声或游客的低语。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着侧廊缓缓向前，仔细辨认两侧祭坛上那些讲述圣徒故事的精美雕塑与绘画，感受巴洛克艺术的叙事力量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在主祭坛前稍作停留，仰望那巨大的天顶壁画，寻找光影在一天中不同时刻在壁画上移动的微妙痕迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观完主厅后，别忘了去侧面的小博物馆（如果开放），那里陈列着教堂的珍宝和关于其历史与电影取景的珍贵资料。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂出来后，直接融入广场上的市集生活，买一个当地特色的“蒙德塞蛋糕”或在露天咖啡馆坐下，观察来往的人群。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，一定要散步到仅几步之遥的蒙德塞湖边，找个长椅坐下，回望教堂的塔楼，让湖水的宁静平息内心的所有惊叹。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`湖岸全景机位`}</h4>
                  <p className="text-sm text-gray-700">{`从教堂南侧沿着“Seestraße”走向湖边的栈桥，在下午侧光时分回望，可以拍摄到教堂双塔与它们在湖中清晰倒影的对称构图，阿尔卑斯山作为远景层次分明。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`黄色塔楼仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`站在教堂正前方的集市广场上，使用广角镜头贴近底部仰拍，将两座塔楼与一角蓝天纳入画面，能极致凸显其明黄色的震撼力与巴洛克线条的动感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`内部金色光影`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个阳光充足的上午（10点至12点），站在中殿偏北的位置，等待阳光从南侧高窗射入，照亮空气中浮尘与金色灰泥装饰的时刻，捕捉那道被称为“上帝之光”的光柱。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`电影剧照还原`}</h4>
                  <p className="text-sm text-gray-700">{`在教堂中殿第一排长椅的中间过道位置，模拟电影中新娘走过的视角，拍摄空无一人的通道尽头那华丽的主祭坛，注意降低曝光以保留彩色玻璃窗和金色装饰的细节。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`教堂内部通常允许不使用闪光灯和三脚架的静音拍摄，但在举行宗教仪式时严禁任何摄影。拍摄外部全景时，清晨或黄昏的“黄金时刻”光线最为柔和，能赋予黄色外墙温暖的光泽。若想拍摄塔楼细节，一支长焦镜头能帮助你捕捉那些精致的雕塑和钟面。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`湖景家庭旅馆`}</h4>
                  <p className="text-sm text-blue-800">{`选择一栋离教堂仅五分钟步程、阳台正对蒙德塞湖的木屋风格家庭旅馆，清晨在阳台上就能享用伴着湖光山色和教堂钟声的早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老城精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`下榻位于教堂广场旁一栋拥有300年历史的老建筑改造的精品酒店，房间保留了原始的木质天花板，晚上能听到广场上轻柔的民间音乐。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计感度假公寓`}</h4>
                  <p className="text-sm text-yellow-800">{`在教堂北侧宁静的住宅区租住一套现代风格的度假公寓，拥有设备齐全的厨房，让你可以像当地人一样去市集采购食材，体验小镇日常。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`湖畔四星级酒店`}</h4>
                  <p className="text-sm text-purple-800">{`入住位于湖岸西侧、享有无敌湖景和教堂景观的四星级酒店，在顶楼的桑拿房放松后，可以一边品尝奥地利葡萄酒，一边欣赏黄昏时分教堂塔楼的剪影。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`蒙德塞小镇非常安全，夜晚宁静祥和，大部分住宿步行即可抵达教堂和湖边。夏季（7-8月）和圣诞市场期间是旺季，务必提前数月预订；而春季（5-6月）和秋季（9-10月）前往，不仅能享受更优惠的价格，还能领略湖畔不同的自然色彩。许多家庭旅馆提供“萨尔茨堡卡”的联合优惠，预订时可以询问。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开蒙德塞许久，那抹明黄色依然会时不时地在脑海里亮起来。它之所以让人难忘，绝不仅仅是因为它在电影里出现过几分钟。而是因为它如此完美地诠释了一种“活着的遗产”该有的样子。它没有被供奉在玻璃罩里，没有因为自己的古老和美丽而变得高傲疏离。它每天准时响起钟声，召唤信徒；它门前是热闹的市集，充满人间烟火气；它欣然接受着世界各地影迷好奇而友善的目光，并将这股文化影响力，转化为让更多人了解其深厚历史与艺术价值的契机。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求快速打卡、热衷滤镜的时代，蒙德塞大教堂提醒着我们深度旅行的真谛：去寻找那些能将多种层次体验融合在一起的地方。在这里，你能得到视觉的极致享受，也能听到历史的深沉回响；你能触摸到信仰的庄严温度，也能重温流行文化带来的浪漫悸动；你能欣赏顶尖的人类艺术创造，也能沉浸于阿尔卑斯湖畔无与伦比的自然之美。它就像一颗多棱面的宝石，从不同的角度看过去，都会折射出不一样的光彩。这，或许就是每一位真正的旅行者所渴望的——不是一张简单的照片，而是一次能调动所有感官、触动内心柔软之处、并在记忆中持续发酵的完整经历。蒙德塞，正是这样一个地方。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/mariazell-basilica-pilgrimage-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    玛
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">玛丽亚采尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mariazell</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/votive-church" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沃蒂夫教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Votive Church</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/riegersburg-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    里
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">里格斯堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Riegersburg Castle</p>
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
