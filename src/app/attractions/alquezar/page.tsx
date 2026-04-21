import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿尔克萨尔 Alquézar｜维罗河谷的心脏，悬挂在悬崖上的中世纪石头之梦 - 最佳欧洲景点',
  description: '相信我，当你第一次在蜿蜒的山路尽头瞥见阿尔克萨尔时，绝对会忍不住发出一声长长的“哇——”。它不像你在明信片上常见的那种规整的欧洲小镇，而更像一个巨人在玩叠石头游戏时，随手将一堆蜂蜜色的房子、一座城堡和一座教堂，小心翼翼地、一层层地摞在了刀削般的石灰岩悬崖上。阳光打在上面，整个村子暖融融的，泛着金子般...',
}

export default function AlquezarPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '西班牙', href: '/destinations/spain' },
            { label: '阿尔克萨尔', href: '/attractions/alquezar' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿尔克萨尔・Alquézar・西班牙・韦斯卡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`相信我，当你第一次在蜿蜒的山路尽头瞥见阿尔克萨尔时，绝对会忍不住发出一声长长的“哇——”。它不像你在明信片上常见的那种规整的欧洲小镇，而更像一个巨人在玩叠石头游戏时，随手将一堆蜂蜜色的房子、一座城堡和一座教堂，小心翼翼地、一层层地摞在了刀削般的石灰岩悬崖上。阳光打在上面，整个村子暖融融的，泛着金子般的光，背后是铁灰色的巨大山体和深邃的维罗河谷，那种强烈的对比，一瞬间就能攫住你的呼吸。
停好车，穿过那道低矮的拱形石门，你就正式踏入了时间的褶皱里。脚下的石板路被几个世纪的脚步磨得油光水亮，在正午的阳光下像一条暗暗发光的河。空气里有股特别的味道——干燥的石粉味、从某家厨房飘出的橄榄油煎大蒜的香气，还有远处山谷吹来的、带着松树和迷迭香气息的凉风，混合在一起。你几乎听不到汽车的噪音，只有自己的脚步声、水龙头滴答的水声、某个院子里传出的收音机里含糊的西班牙语新闻，以及无处不在的、嗡嗡的蜜蜂忙碌的声音。村子中心那个小小的广场上，总有几个白发老人坐在长椅上，像生了根的雕塑，他们用缓慢的阿拉贡方言交谈，目光越过广场边低矮的围墙，投向下面那片翠绿的河谷，那眼神仿佛在检阅他们守护了一辈子的王国。
而这个地方最打动人的，正是这种“活着的历史感”。这不是一个被圈起来仅供参观的景点，而是一个依然有炊烟、有晾晒的床单、有孩子在巷子里追逐的真实的家。陡峭的“阴影小巷”两侧，石墙高耸，抬头只能看见一线蓝天，你用手触摸那些冰凉的、粗糙的石头，能感觉到工匠们凿刻的痕迹。偶尔一扇木门半掩，你能瞥见里面幽深的小院，种着天竺葵，墙角堆着劈好的木柴。这种日常与史诗的交织，让你觉得你不是一个闯入者，而是一个被短暂允许进入他们古老生活节奏的、幸运的旁观者。它的核心魅力，就在于这份悬崖之上的、沉静而坚韧的烟火气。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`相信我，当你第一次在蜿蜒的山路尽头瞥见阿尔克萨尔时，绝对会忍不住发出一声长长的“哇——”。它不像你在明信片上常见的那种规整的欧洲小镇，而更像一个巨人在玩叠石头游戏时，随手将一堆蜂蜜色的房子、一座城堡和一座教堂，小心翼翼地、一层层地摞在了刀削般的石灰岩悬崖上。阳光打在上面，整个村子暖融融的，泛着金子般的光，背后是铁灰色的巨大山体和深邃的维罗河谷，那种强烈的对比，一瞬间就能攫住你的呼吸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`停好车，穿过那道低矮的拱形石门，你就正式踏入了时间的褶皱里。脚下的石板路被几个世纪的脚步磨得油光水亮，在正午的阳光下像一条暗暗发光的河。空气里有股特别的味道——干燥的石粉味、从某家厨房飘出的橄榄油煎大蒜的香气，还有远处山谷吹来的、带着松树和迷迭香气息的凉风，混合在一起。你几乎听不到汽车的噪音，只有自己的脚步声、水龙头滴答的水声、某个院子里传出的收音机里含糊的西班牙语新闻，以及无处不在的、嗡嗡的蜜蜂忙碌的声音。村子中心那个小小的广场上，总有几个白发老人坐在长椅上，像生了根的雕塑，他们用缓慢的阿拉贡方言交谈，目光越过广场边低矮的围墙，投向下面那片翠绿的河谷，那眼神仿佛在检阅他们守护了一辈子的王国。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而这个地方最打动人的，正是这种“活着的历史感”。这不是一个被圈起来仅供参观的景点，而是一个依然有炊烟、有晾晒的床单、有孩子在巷子里追逐的真实的家。陡峭的“阴影小巷”两侧，石墙高耸，抬头只能看见一线蓝天，你用手触摸那些冰凉的、粗糙的石头，能感觉到工匠们凿刻的痕迹。偶尔一扇木门半掩，你能瞥见里面幽深的小院，种着天竺葵，墙角堆着劈好的木柴。这种日常与史诗的交织，让你觉得你不是一个闯入者，而是一个被短暂允许进入他们古老生活节奏的、幸运的旁观者。它的核心魅力，就在于这份悬崖之上的、沉静而坚韧的烟火气。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿尔克萨尔`} />
                <InfoRow label="英文名称" value={`Alquézar`} />
                <InfoRow label="正式名称" value={`Alquézar`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`韦斯卡`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座扼守维罗河谷咽喉的堡垒，是阿拉贡王国对抗摩尔人南线的重要前哨，也是基督教势力向伊比利亚半岛南部推进的坚固符号。`} />
                <InfoRow label="建筑特色" value={`石灰岩与板岩完美结合的建筑群如同从悬崖峭壁中生长出来，蜿蜒陡峭的Callejón de las Sombras（阴影小巷）和拱廊环绕的古老广场是其灵魂所在。`} />
                <InfoRow label="建筑风格" value={`以罗马式风格为核心，融合了穆斯林防御工事的痕迹以及后来哥特式与文艺复兴式的局部修饰，形成了独特的“阿拉贡山地风格”。`} />
                <InfoRow label="文化价值" value={`它是一座活生生的中世纪建筑博物馆，完美保存了9至16世纪伊比利亚半岛基督教与伊斯兰文化碰撞、融合并最终形成地方特色的完整剖面。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`村落全天开放，主城堡及圣母圣殿开放时间为：夏季（4月1日至10月31日）上午10:00至下午2:00，下午4:30至晚上8:00；冬季（11月1日至3月31日）上午11:00至下午1:30，下午4:00至晚上6:30。每周一闭馆，重要宗教节日如圣诞节、元旦可能调整开放时间，建议出行前再次确认。`} />
              <InfoRow label="门票价格" value={`进入村落免费。参观城堡及圣母圣殿（Colegiata）需购票，普通票价5欧元。65岁以上老人、学生及12-18岁青少年凭证件票价3欧元，12岁以下儿童免费。每周日下午可免费进入教堂部分区域（博物馆仍需购票）。`} />
              <InfoRow label="地址" value={`Plaza Mayor, 1, 22145 Alquézar, Huesca, Spain`} />
              <InfoRow label="交通方式" value={`从萨拉戈萨机场出发：自驾是最佳选择，沿A-23高速公路向西北方向行驶，转入A-1229或A-2205地方公路，全程约120公里，耗时约1小时40分钟。公共交通较为不便，可先从萨拉戈萨Delicias火车站乘坐火车至韦斯卡站（约1小时15分钟），再换乘ALOSA公司的区域性大巴前往阿尔克萨尔（班次较少，每天约1-2班，车程约1小时），强烈建议提前在ALOSA官网查询并预订车票。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事得从一千多年前说起，那时候，伊比利亚半岛的大部分还在穆斯林王朝的统治之下。公元9世纪，一位名叫贾法尔·伊本·拉希德的阿拉伯军事将领看中了这块宝地——维罗河谷在此收窄，两侧悬崖壁立千仞，易守难攻。于是，一座被称为“Al-Qasr”（阿拉伯语“堡垒”之意）的防御工事在这悬崖之巅拔地而起，用来控制这条连接平原与山区的战略要道，并保护后方富饶的萨拉戈萨地区。你可以想象，当时驻守在这里的摩尔士兵，每天俯瞰着脚下如同绿色丝带的河谷，警惕着北方基督教王国的任何风吹草动，这座堡垒就是他们插入边境的一颗坚硬钉子。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转折点发生在11世纪。阿拉贡王国开始强势崛起，国王桑乔·拉米雷斯是一位雄心勃勃的扩张者。1099年，在他的指挥下，基督教军队经过艰苦的战斗，终于从穆斯林手中夺取了这座坚固的堡垒。这不仅仅是一次军事胜利，更具有强烈的象征意义——它标志着基督教势力向南推进取得了关键性突破。为了巩固胜利并“净化”这个地方，桑乔国王做了一件当时标准的事：他下令在原有穆斯林城堡的核心位置，兴建一座供奉圣母玛利亚的小教堂。于是，在原来宣礼塔可能矗立的地方，升起了基督教的钟楼。最初的圣母圣殿（Santa María la Mayor）非常简朴，就是纯粹的罗马式风格，厚重、坚固，一如当时人们的信仰。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`随后的几个世纪，是阿尔克萨尔作为边境要塞的黄金时代。基督教国王们不断加固城堡和城墙，它成为阿拉贡王国抵御南方穆斯林王国反扑的坚实盾牌。随着“收复失地运动”的战线不断南移，阿尔克萨尔逐渐从血腥的前线变成了相对安全的后方。财富开始积累，人口增加，村子沿着悬崖向下、向四周小心翼翼地蔓延开去。原来的小教堂已经无法满足需求，于是在16世纪，一场大规模的重建和美化工程启动了。我们今天看到的圣母圣殿（现在常被称为Colegiata），就是这次改建的成果。它在罗马式的地基和格局上，融入了华丽的哥特式拱顶和文艺复兴式的装饰细节。尤其值得一提的是教堂内部那个回廊，柱子上的罗马式雕刻描绘着圣经故事和奇异的动物，虽然有些笨拙，却充满了中世纪工匠那种质朴而虔诚的爆发力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的车轮滚滚向前，当火炮的出现让高墙不再绝对安全，当国家的边界稳定在更南方，阿尔克萨尔战略地位逐渐丧失。它从一个叱咤风云的战士，慢慢变成了一个偏安一隅的宁静老者。19世纪的拿破仑战争和20世纪的西班牙内战，也给这座石头小镇留下了伤痕，但它挺了过来。真正的变化发生在20世纪后期，随着徒步和乡村旅游的兴起，人们重新发现了这颗藏在深山的明珠。它不再以刀剑闻名，而是以它无与伦比的中世纪风貌、令人窒息的自然景观和通往维罗河谷的绝佳徒步路线，吸引着世界各地的旅行者。今天的阿尔克萨尔，依然牢牢扎根在那片悬崖上，只不过，它守护的不再是王国的疆界，而是一段关于坚韧、融合与时光的、无比珍贵的故事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受阿尔克萨尔的灵魂，我强烈建议你至少留出完整的一天时间。最佳抵达时间是清晨九点前，那时旅游大巴还未抵达，阳光刚刚温柔地唤醒古堡的尖顶，整个村子还沉浸在半睡半醒的宁静之中。整体游览节奏应该是“先宏观，再微观，最后融入自然”。上午用2-3小时专注探索城堡、教堂和迷宫般的村落内部，用眼睛和脚步去阅读石头上的历史。正午阳光最烈时，可以找个阴凉处午餐休息。下午则完全交给维罗河谷，沿着著名的“木板路”徒步路线下行，用2小时左右亲近那翡翠般的河水和壮丽的峡谷。这样的安排，既能避开人流高峰，又能体验从人文到自然的完美过渡，最重要的是，你能看到晨光与夕照下完全不同气质的阿尔克萨尔。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季务必在上午十点前或下午四点后游览村落内部，否则狭窄的石巷里会挤满游客且毫无遮阴。进入圣母圣殿内部，尤其是博物馆和回廊，穿着需得体，避免无袖上衣和过短的裤裙。徒步峡谷时一定要穿防滑性能好的运动鞋或登山鞋，部分木板路段湿滑且悬空，安全第一。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从山脚下的停车场出发，沿着那条之字形的古老步道向上，让第一眼震撼的全景画面随着你攀登的脚步逐渐展开。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过低矮的拱形石门，立刻右拐钻进那条著名的“阴影小巷”，感受两侧高耸石墙带来的清凉与压迫感，触摸最原始的中世纪肌理。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在迷宫般的小巷里随意迷失一会儿后，目标明确地走向山顶的城堡与圣母圣殿，买票进入，在回廊的罗马式柱雕前驻足良久。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花点时间坐在城堡外围的矮墙上，什么也不做，就看着脚下的红色屋顶层层叠叠滑向山谷，听着风声和遥远的钟声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山回到主广场，在拱廊下找家老餐馆，点一份用本地山羊奶酪和火腿做的“Migas”，就着山谷的清风享用。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后戴上帽子，从村口的信息中心旁找到“Pasarelas del Vero”徒步路线的起点，开始一段沿着悬崖开凿的、惊险又绝美的峡谷探险。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着木板步道一路下降到谷底，在维罗河清澈见底的“天然泳池”边脱掉鞋袜，让冰凉的河水洗去一身暑气。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在夕阳将悬崖染成金红色之前，慢慢沿原路或另一条环形步道返回村庄，回头看，灯火初上的阿尔克萨尔宛如悬挂在深蓝天幕上的星星。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡西侧城墙的瞭望口`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，将镜头对准瞭望口，以外面的红色屋顶和远方层叠的山峦为背景，拍摄剪影或框架构图，故事感十足。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“阴影小巷”中段的仰拍角度`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，光线会像一道利刃劈入狭窄的巷子，在两侧石墙上形成强烈明暗对比，用广角镜头仰拍能拍出极具张力的纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从河谷对岸的观景台远眺`}</h4>
                  <p className="text-sm text-gray-700">{`需要开车或步行约15分钟到河对岸的公路边，这里能看到村落的全貌，日出时分，晨雾缭绕在山腰，阳光正好打在建筑群上，是拍摄全景明信片的最佳位置。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`主广场拱廊下的框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`下午光线斜射时，利用古老的石拱门作为天然画框，聚焦于广场上闲坐的当地老人或玩耍的孩童，捕捉充满生活气息的瞬间。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`徒步木板步道上的回望视角`}</h4>
                  <p className="text-sm text-gray-700">{`在步道中段某个相对开阔的转弯处回望，可以拍到阿尔克萨尔城堡高高矗立在悬崖顶端的险峻姿态，与脚下深邃的峡谷形成强烈视觉冲击。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`当地居民非常注重隐私，拍摄民居门窗或院内景象时务必快速、低调，最好能征得同意。使用无人机在村落上空飞行需要特别许可，且峡谷内气流多变，非常危险，不建议飞行。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`悬崖上的石屋民宿`}</h4>
                  <p className="text-sm text-blue-800">{`直接住在村里由百年老宅改造的民宿里，推开木窗就是万丈深渊和潺潺河谷，夜晚安静得只能听到风声和自己的心跳。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`河谷边的田园酒店`}</h4>
                  <p className="text-sm text-green-800">{`位于山脚下，被橄榄树和杏树环绕，拥有一个可以游泳的露天泳池，抬头就能仰望灯火通明的悬崖村落，体验截然不同的视角。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`韦斯卡城内的设计酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`如果追求更多餐饮和夜生活选择，可以住回30分钟车程外的韦斯卡城，那里有由历史建筑改造的精品酒店，融合了古典与现代的舒适。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`徒步者之家`}</h4>
                  <p className="text-sm text-purple-800">{`一种简朴但干净的乡村旅馆，通常由热爱自然的家庭经营，提供物美价廉的当地晚餐和详细的徒步路线建议，是背包客和户外爱好者的天堂。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`村里民宿数量有限且极其抢手，尤其是带景观阳台的房间，务必提前至少2-3个月预订。夏季周末价格会显著上涨。虽然村子治安极好，但夜间巷道照明有限，建议携带小手电。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开阿尔克萨尔好几天后，我的脑海里还会不时闪过那些画面：冰凉的石墙触感、山谷里吹来的带着草药味的风、午后广场上那片被太阳晒得发白的宁静。它给我的触动，并非那种面对宏伟教堂或宫殿时的直接震撼，而是一种更缓慢、更绵长的渗透。它让你明白，所谓“不朽”，未必是金碧辉煌，也可以是像这些石头一样，沉默地、固执地、一代又一代地站在这里，与严酷的自然环境达成一种默契的共存。这里的人们把生活建在悬崖上，把道路刻在岩壁里，这种生存本身，就是一种伟大的艺术。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求更快、更高、更闪亮的时代，阿尔克萨尔的存在就像一个沉稳的休止符。它提醒我们，有些价值无法被数字化，有些美源于局限与对抗。每一位热爱深度游的旅人都应该来一次这里，不只是为了拍一张惊艳朋友圈的照片，更是为了体验一种不同的时间尺度——在这里，一天可以很长，长到你能看清光影在石墙上移动的轨迹；历史可以很近，近到你指尖触碰的就是九百年前工匠留下的凿痕。它会温柔地重塑你对“家园”和“坚守”的理解。这趟旅程，最终会变成一次对内心悬崖的探访，让你带回一份在虚浮世界中难得的、沉甸甸的平静。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/salamanca-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨拉曼卡老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Salamanca Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/girona" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    赫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">赫罗纳古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Girona</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ronda-cliff-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    龙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">龙达悬崖小镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ronda</p>
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
