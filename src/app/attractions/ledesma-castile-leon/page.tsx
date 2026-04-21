import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '莱德斯马 Ledesma｜托尔梅斯河畔的花岗岩史诗，罗马基石与中世纪灵魂的千年对话 - 最佳欧洲景点',
  description: '车子驶离萨拉曼卡的喧嚣不过半小时，窗外的风景就陡然变了。无边无际的金黄色麦田和深绿色橡树林交替出现，然后，在托尔梅斯河一个温柔的转弯处，它出现了——莱德斯马。第一眼望去，它不像个镇子，更像一座从广袤平原上兀自隆起的、巨大的灰黄色岩石山丘。阳光毫不留情地倾泻在那片密集的建筑上，让它们泛出一种介于蜂蜜和',
}

export default function LedesmaCastileLeonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '西班牙', href: '/destinations/europe' },
            { label: '莱德斯马', href: '/destinations/europe' },
            { label: '莱德斯马', href: '/attractions/ledesma-castile-leon' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`莱德斯马・Ledesma・西班牙・莱德斯马`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶离萨拉曼卡的喧嚣不过半小时，窗外的风景就陡然变了。无边无际的金黄色麦田和深绿色橡树林交替出现，然后，在托尔梅斯河一个温柔的转弯处，它出现了——莱德斯马。第一眼望去，它不像个镇子，更像一座从广袤平原上兀自隆起的、巨大的灰黄色岩石山丘。阳光毫不留情地倾泻在那片密集的建筑上，让它们泛出一种介于蜂蜜和铁锈之间的温暖光泽。那就是花岗岩，这里唯一且骄傲的建筑材料。车越开越近，环绕着山丘的河流像一条闪亮的银色臂弯，而那道令人屏息的、完整闭合的中世纪城墙，则像给这座岩石岛屿镶上了一圈坚实的齿冠。
把车停在河边的白杨树下，走过古老的石桥，你就正式进入了时间的褶皱。空气里有股好闻的味道，是晒烫的石头散发出的微咸气息，混合着从某户人家院子里飘出的迷迭香和烤肉香气。耳朵里先是充盈着托尔梅斯河永不停歇的、舒缓的潺潺水声，走上坡后，取而代之的是脚下石板路清脆的回响，以及从高处的广场隐约传来的、几个老人用卡斯蒂利亚语快速交谈的片段。镇子静极了，这种静不是空无一人，而是一种沉淀了数百年后的从容。猫在阳光下摊成毛毯，主妇在窗台边打理天竺葵，仿佛你的闯入，只是他们漫长午后一个无关紧要的注脚。
它的核心魅力，就在于这种惊人的完整性。你看到的不是一个孤零零的城堡或教堂，而是一整个自给自足的中世纪世界被奇迹般地保存了下来。城墙之内，迷宫般的窄巷、带着盾形徽章的古宅、罗马时期就存在的广场地基，全部由同一种金色的花岗岩构建。这里没有浮夸的装饰，没有后期添加上去的巴洛克虚荣，有的只是石头本身的力量和美。走在其中，你抚摸的墙壁，可能下半截是古罗马人凿刻的方石，上半截是中世纪工匠粗糙的垒砌。历史在这里不是博物馆的展签，而是你呼吸的空气和脚下的土地。
最打动人的，或许是它那股子倔强的“在地性”。莱德斯马从未想成为另一个萨拉曼卡或阿维拉。它安心地做这片“坎波·查拉索”荒原的守卫者。它的美是内向的、防御性的，高高在上的城堡俯瞰着河流与平原，曾经是为了警戒来犯之敌，如今则为你提供了凝望这片古老土地的最佳视角。在这里，你能真切地感受到什么是“边境精神”——一种在孤独与守望中磨砺出的、沉默而骄傲的品格。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子驶离萨拉曼卡的喧嚣不过半小时，窗外的风景就陡然变了。无边无际的金黄色麦田和深绿色橡树林交替出现，然后，在托尔梅斯河一个温柔的转弯处，它出现了——莱德斯马。第一眼望去，它不像个镇子，更像一座从广袤平原上兀自隆起的、巨大的灰黄色岩石山丘。阳光毫不留情地倾泻在那片密集的建筑上，让它们泛出一种介于蜂蜜和铁锈之间的温暖光泽。那就是花岗岩，这里唯一且骄傲的建筑材料。车越开越近，环绕着山丘的河流像一条闪亮的银色臂弯，而那道令人屏息的、完整闭合的中世纪城墙，则像给这座岩石岛屿镶上了一圈坚实的齿冠。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "把车停在河边的白杨树下，走过古老的石桥，你就正式进入了时间的褶皱。空气里有股好闻的味道，是晒烫的石头散发出的微咸气息，混合着从某户人家院子里飘出的迷迭香和烤肉香气。耳朵里先是充盈着托尔梅斯河永不停歇的、舒缓的潺潺水声，走上坡后，取而代之的是脚下石板路清脆的回响，以及从高处的广场隐约传来的、几个老人用卡斯蒂利亚语快速交谈的片段。镇子静极了，这种静不是空无一人，而是一种沉淀了数百年后的从容。猫在阳光下摊成毛毯，主妇在窗台边打理天竺葵，仿佛你的闯入，只是他们漫长午后一个无关紧要的注脚。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的核心魅力，就在于这种惊人的完整性。你看到的不是一个孤零零的城堡或教堂，而是一整个自给自足的中世纪世界被奇迹般地保存了下来。城墙之内，迷宫般的窄巷、带着盾形徽章的古宅、罗马时期就存在的广场地基，全部由同一种金色的花岗岩构建。这里没有浮夸的装饰，没有后期添加上去的巴洛克虚荣，有的只是石头本身的力量和美。走在其中，你抚摸的墙壁，可能下半截是古罗马人凿刻的方石，上半截是中世纪工匠粗糙的垒砌。历史在这里不是博物馆的展签，而是你呼吸的空气和脚下的土地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动人的，或许是它那股子倔强的“在地性”。莱德斯马从未想成为另一个萨拉曼卡或阿维拉。它安心地做这片“坎波·查拉索”荒原的守卫者。它的美是内向的、防御性的，高高在上的城堡俯瞰着河流与平原，曾经是为了警戒来犯之敌，如今则为你提供了凝望这片古老土地的最佳视角。在这里，你能真切地感受到什么是“边境精神”——一种在孤独与守望中磨砺出的、沉默而骄傲的品格。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`莱德斯马`} />
                <InfoRow label="英文名称" value={`Ledesma`} />
                <InfoRow label="正式名称" value={`Ledesma`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`莱德斯马`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座建立在古罗马废墟之上的中世纪边境要塞，见证了伊比利亚半岛上基督徒与摩尔人长达数个世纪的拉锯与融合。`} />
                <InfoRow label="建筑特色" value={`巨大的、泛着金灰色的花岗岩是绝对主角，从城墙到民居，一切建筑都仿佛从这片土地里生长出来，厚重、粗粝而永恒。`} />
                <InfoRow label="建筑风格" value={`以质朴的罗马式为基础，混合了后来的哥特式与银匠式元素，但整体呈现出一种纯粹的、属于军事边陲的实用主义美学。`} />
                <InfoRow label="文化价值" value={`它是卡斯蒂利亚荒原上一本活着的石头史书，每一层垒砌的石块都标记着不同的时代与文化，从罗马的秩序、穆斯林的智慧到基督教王国的坚韧。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇公共区域全天开放。主要历史遗迹（如城墙、城堡遗迹）通常开放时间为上午10点至下午2点，下午4点至7点（夏季可能延长至8点）。圣玛丽亚教堂开放时间较为灵活，一般为弥撒前后及上午时段。市政厅内的游客中心工作日上午9:30至下午2:00开放。部分小型博物馆周一闭馆，重要节假日（如圣诞节、元旦）全天关闭，当地节庆日（如八月的圣胡安节）开放时间可能临时调整。`} />
              <InfoRow label="门票价格" value={`漫步古镇及城墙外围完全免费。进入城堡主塔楼及内部小型历史展览需购票，成人票约3欧元，65岁以上长者及学生票约1.5欧元，12岁以下儿童免费。圣玛丽亚教堂捐赠入场，建议捐赠1-2欧元。每月第一个周日部分收费景点免费开放。`} />
              <InfoRow label="地址" value={`Plaza Mayor, 1, 37100 Ledesma, Salamanca, Spain`} />
              <InfoRow label="交通方式" value={`从最近的萨拉曼卡机场（SLM）出发，租车是最便捷的选择。沿SA-300公路向西北方向行驶约35公里，车程约40分钟，路况良好。公共交通可选择从萨拉曼卡汽车站乘坐区域巴士，由Linecar公司运营，每天约有4-5班车，车程约50分钟至1小时，票价约5欧元，建议上车向司机购票。从萨拉曼卡火车站打车前来费用较高，约50-60欧元。自驾可将车停在古镇南侧河畔的免费停车场，避免驶入狭窄的古镇内部街道。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要读懂莱德斯马，你的手指必须拂过那些冰凉的巨石，从最底层开始。早在罗马人挥舞着鹰旗横扫伊比利亚时，他们就发现了这里的战略价值。托尔梅斯河是天堑，而这座花岗岩山丘是天然的堡垒。罗马人在这里建立了一个名为“贝里萨”的定居点，你如今在城墙基底、在教堂广场不规则的地面下，依然能找到他们留下的痕迹——那些打磨得异常方正、拼接得一丝不苟的巨大石块，是沉默的奠基者。罗马帝国崩塌后，这里被西哥特人占据，但并未留下太多印记，直到公元8世纪，北非的摩尔骑兵如风般席卷而来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "穆斯林统治的几百年，是莱德斯马第一次被大规模加固的时期。他们看中了罗马人留下的基础，沿着山丘边缘修筑了更为坚固的防御工事，并将这里作为通往北方基督教王国的重要前沿据点。镇子的名字“Ledesma”很可能就源于阿拉伯语。那时的莱德斯马，空气中混合着清真寺的诵经声、集市上的香料味和兵营里的铁器声，成为一个文化交汇的微型熔炉。这段历史如今已无直观的建筑留存，但它深深烙印在了城镇的肌理和防御格局中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的剧变始于11世纪，随着基督教王国“再征服运动”的南推，莱德斯马成了激烈争夺的前线。1085年，卡斯蒂利亚国王阿方索六世麾下的骑士从摩尔人手中夺取了它。随后的几个世纪，它成了王国南部边境一颗至关重要的“钉子”。为了守住它，基督教国王们投入巨资，在穆斯林城墙的基础上，用当地的花岗岩重建和拓展了那道如今我们看到的气势恢宏的城墙。城堡被加固，塔楼被竖起，一座座罗马式教堂在城内建立。莱德斯马被授予“集镇”特权，吸引人们前来定居，以巩固边防。1212年，就在著名的拉斯纳瓦斯·德·托洛萨大战前，国王阿方索九世正是在莱德斯马的圣玛丽亚教堂，与他的将领们进行了最后的战略部署。每一块石头，都浸透着那段烽火连天的岁月里的紧张与决心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "随着1492年格拉纳达陷落，西班牙全境光复，莱德斯马作为军事要塞的紧迫性骤然消失。它迎来了一个相对和平与繁荣的时期，文艺复兴的风也稍稍吹进了这座石头城。16世纪，那座优雅的、横跨托尔梅斯河的新桥（Puente Nuevo，其实也很古老了）建成，连接起两岸。一些贵族家庭在城内修建了带有复杂石雕徽章的宅邸。圣玛丽亚教堂内部也增添了一些银匠式风格的装饰。然而，地理位置的偏僻决定了它无法成为真正的中心，它的辉煌如同夕阳，温暖而短暂。之后，便是漫长的沉寂，人口外流，时间仿佛在这里放缓了脚步，也正因为如此，它才意外地将那份中世纪的风貌封存了起来，未被现代化浪潮彻底改造。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`理想的莱德斯马之旅，应该从一个慵懒的午后开始。建议下午三点左右抵达，这时强烈的正午阳光已变得柔和，花岗岩城墙开始呈现出最迷人的金灰色调。整体游览需要至少3-4个小时，节奏宜慢不宜快。我们的路线将从外围的河流与桥梁开始，由外向内，由低到高，最后抵达城堡的制高点，在黄昏时分收获最壮丽的景色。这样安排，既能先从宏观上感受古镇与自然环境的关系，又能逐步深入其肌理，最后以一场视觉的盛宴收尾，符合探索一座山地古镇的自然逻辑。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双绝对舒适防滑的徒步鞋，古镇内的坡道和石板路既陡峭又光滑，尤其是雨后。在游客中心索取一张简单的地图，因为手机信号在厚重的石墙间可能不稳定，但不必严格遵循，迷路本身就是乐趣的一部分。如果夏季来访，请备足饮用水，镇上小超市不多，且午后有些街道几乎没有遮阴。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在托尔梅斯河南岸的免费停车场，先别急着过桥，沿着河岸向西走一段，从远处好好端详这座被河流拥抱、被城墙包裹的“石头之岛”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走过古老的“新桥”，在桥中央停下，低头看看桥下碧绿的河水与圆润的巨石，抬头望望前方高耸的城门“阿尔莫哈德门”，感受进入另一个时空的仪式感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过城门，立刻右转，顺着一条名为“坎迪尔街”的狭窄小巷向上攀登，用手触摸两侧冰凉粗粝的花岗岩墙壁，感受巷子尽头突然出现一线天光的惊喜。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`爬上斜坡后便会抵达宁静的“城堡广场”，站在空旷的广场中央，环视四周古老的贵族宅邸立面上的斑驳盾徽，然后仰望前方城堡巨大的方形主塔。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入城堡塔楼（如果开放），沿着狭窄的旋转石梯攀上顶部的观景台，让360度的狂风拂面，俯瞰整个古镇的红色屋顶、蜿蜒的托尔梅斯河和无边的卡斯蒂利亚平原。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡下来，绕到圣玛丽亚教堂的侧面，寻找那扇精美的罗马式拱门和上面已然模糊的雕刻，想象当年骑士们在此祈祷的情景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂后方钻入迷宫般的居民区小巷，无需地图，任凭感觉带领，邂逅一个种满鲜花的隐秘庭院或一个可以看到河谷风景的意外缺口。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前回到城墙的步行道上，从“韦拉科拱门”附近找一张长椅坐下，看着夕阳把每一块石头都染成炽烈的橙红色，直到镇里的灯火星星点点亮起。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`托尔梅斯河南岸远景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，从停车场西侧的田间小径回望，能拍到古镇全景倒映在平静的河水中，城墙与天空被染成暖金色的经典画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡塔楼顶俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`登顶后，将相机贴近观景台的石头垛口，使用广角镜头，把近处厚重的石墙肌理与远处平原的地平线一同纳入构图，展现镇子的险要地势。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`罗马桥拱门框架`}</h4>
                  <p className="text-sm text-gray-700">{`站在“新桥”靠近古镇的这一端，以古老的石砌拱门作为画框，对准桥另一端爬满藤蔓的民居和蜿蜒向上的小巷，营造深邃的叙事感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`坎迪尔街光影巷`}</h4>
                  <p className="text-sm text-gray-700">{`下午四五点，阳光斜射入狭窄的坎迪尔街时，捕捉光线在凹凸不平的石墙和石板路上投下的强烈明暗对比与漫长影子。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`圣玛丽亚教堂后殿圆窗`}</h4>
                  <p className="text-sm text-gray-700">{`从教堂后方的小广场，拍摄其半圆形后殿上方那扇简单的罗马式圆窗，最好能等到一株攀援植物或一片云彩成为其点缀，突出古朴几何美。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`莱德斯马的光线在日出后两小时和日落前两小时最为迷人，此时花岗岩的颜色层次最丰富，请务必把握这两个黄金时段。拍摄当地居民尤其是老人时，请务必先微笑示意并获得默许，这里生活节奏慢，人们友好但也注重隐私。无人机飞行在古镇上空理论上需要申请许可，且密集的民居和电线并不适合航拍，不建议使用。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河畔石屋民宿`}</h4>
                  <p className="text-sm text-blue-800">{`直接坐落在托尔梅斯河北岸的老石头房子里，房东世代居住于此，夜晚枕着潺潺水声入眠，清晨房东老奶奶会为你准备自家果园的果酱和现煮咖啡。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`广场精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`由城堡广场一栋16世纪贵族宅邸改造而成，房间保留了原始的石头墙壁和厚重的木梁，从房间的小阳台望出去，就是城堡塔楼的剪影，位置绝佳。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`乡间庄园酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车10分钟可达的乡间“卡萨庄园”，独享一大片橡树林和田野，拥有一个美丽的石头回廊庭院，适合追求绝对静谧，并在星空下品尝当地庄园葡萄酒的旅行者。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`萨拉曼卡城市住宿`}</h4>
                  <p className="text-sm text-purple-800">{`如果不想携带过多行李辗转，可以选择住在萨拉曼卡，当天往返莱德斯马，这样能享受更多的餐饮和夜生活选择，适合行程紧凑的旅人。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "古镇内的住宿数量非常有限，通常只有寥寥几家，强烈建议提前数月预订，尤其是在夏季和周末。住在镇内意味着夜晚和清晨你将独享这座空灵古镇的魔力，但请注意，许多餐馆关门较早，晚上九点后镇内会非常安静。选择萨拉曼卡作为基地则灵活许多，但会牺牲与古镇朝夕相处的沉浸感。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开莱德斯马的时候，我车里的收音机正好在放一首悠扬的佛拉明戈，吉他的轮指急促如雨，歌者的吟唱苍凉如风。那一瞬间，我忽然觉得这音乐就是莱德斯马的声音——那是石头的声音，是托尔梅斯河水冲刷了千年的声音，是烈日与寒夜在城墙上交替刻画的声音。它不繁华，不精致，甚至有些粗粝到笨拙。但它有一种这个时代罕有的“重量”。这种重量不是压迫，而是一种让人心安的笃定。在一个一切都飞速迭代、追求轻薄短小的世界里，这里的一切都在反向而行，它固执地停留在时间的某个刻度上，用永恒的石头，对抗着永恒的流逝。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，为什么要来莱德斯马？不是为了收集又一个世界遗产的打卡照，也不是为了惊叹某件绝世艺术品的巧夺天工。你来，是为了体验一种“完整性”，一种历史未被切割、生活未被表演的原始状态。是为了让自己慢下来，慢到能听见自己的脚步声在古老巷弄里的回响，能分辨出不同年代石头纹理的差异。是为了站在那座城堡上，像曾经的哨兵一样，眺望那片塑造了西班牙灵魂的、辽阔而严酷的卡斯蒂利亚荒原。你会发现，真正的深度旅行，不是去往更多的地方，而是像这样，让一个地方深深地进入你。莱德斯马，就是这样一个有力量进入你内心的存在。它是一片土地的记忆中枢，静静地等待能读懂石头语言的旅人，来听它讲述那段关于坚守、关于融合、关于在荒凉中开垦出文明的，漫长而骄傲的故事。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/jaen-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈恩古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Jaén Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/torre-del-oro" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塞
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塞维利亚黄金塔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Torre del Oro</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/leon-old-town-historic-center" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莱
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莱昂老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">León Old Town</p>
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
