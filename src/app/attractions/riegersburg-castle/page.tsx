import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '里格斯堡 Riegersburg Castle｜屹立于火山岩之巅的雄鹰之巢与传奇女堡主 - 最佳欧洲景点',
  description: '朋友，你见过从平原上拔地而起、近乎垂直的火山岩山脊吗？里格斯堡就是那样一个存在。当你第一眼从远处看到它时，它不像童话里的城堡，而更像一只收拢翅膀、蛰伏了千万年的巨石巨兽，沉默而威严地镇守着施泰尔马克绿色的田野和葡萄园。车越开近，那种压迫感就越强，黑色的玄武岩山体几乎没有植被，陡峭得让人怀疑，古人是怎...',
}

export default function RiegersburgCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '奥地利', href: '/destinations/austria' },
            { label: '施泰尔马克州，里格斯堡镇', href: '/destinations/austria' },
            { label: '里格斯堡', href: '/attractions/riegersburg-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`里格斯堡・Riegersburg Castle・奥地利・施泰尔马克州，里格斯堡镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，你见过从平原上拔地而起、近乎垂直的火山岩山脊吗？里格斯堡就是那样一个存在。当你第一眼从远处看到它时，它不像童话里的城堡，而更像一只收拢翅膀、蛰伏了千万年的巨石巨兽，沉默而威严地镇守着施泰尔马克绿色的田野和葡萄园。车越开近，那种压迫感就越强，黑色的玄武岩山体几乎没有植被，陡峭得让人怀疑，古人是怎么把一块块巨石运上去，垒成那绵延不绝的城墙和塔楼的？
停好车，开始往上走。脚下的路不再是寻常的土石，而是粗糙的、充满气孔的火山岩。空气里有一种特别的、混合了远方森林松针和近处岩石被阳光烘烤后的干燥气味。攀登的路有两条，一条是平缓但绕远的“朝圣之路”，另一条则是直通山顶的“骑士阶梯”——一段需要手脚并用、紧抓着冰凉铁链才能攀爬的近乎垂直的岩壁。我选了后者。当你的手掌紧贴着被无数前人磨得光滑的铁链，你的呼吸因为陡峭而变得粗重，你才能真正体会到“要塞”二字的含义。这不仅仅是一个居住地，这是一道关乎生死的屏障。风声在耳边呼啸，偶尔传来几声乌鸦的鸣叫，更显得空旷而肃杀。
终于登上山顶，穿过最后一道厚重的拱门，世界豁然开朗。城堡建筑群本身是精巧而庄严的，有着巴洛克式的庭院和彩绘的窗棂。但最震撼的，永远是走到城墙边缘的那一刻。脚下是150米深的垂直悬崖，眼前是一望无际、如绿色棋盘般铺展的施泰尔马克平原，远方的城镇小得像积木。站在这儿，你瞬间就明白了它为何不可攻克，也明白了数个世纪前，守军和居民们站在这同一位置，遥望东方地平线上升起的突厥骑兵烟尘时，是怎样一种混合着恐惧与决绝的心情。这座城堡的核心魅力，正是这种极致的物理防御与厚重历史带来的心灵冲击的完美结合。它不浪漫，但无比真实，充满了力量感。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，你见过从平原上拔地而起、近乎垂直的火山岩山脊吗？里格斯堡就是那样一个存在。当你第一眼从远处看到它时，它不像童话里的城堡，而更像一只收拢翅膀、蛰伏了千万年的巨石巨兽，沉默而威严地镇守着施泰尔马克绿色的田野和葡萄园。车越开近，那种压迫感就越强，黑色的玄武岩山体几乎没有植被，陡峭得让人怀疑，古人是怎么把一块块巨石运上去，垒成那绵延不绝的城墙和塔楼的？`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`停好车，开始往上走。脚下的路不再是寻常的土石，而是粗糙的、充满气孔的火山岩。空气里有一种特别的、混合了远方森林松针和近处岩石被阳光烘烤后的干燥气味。攀登的路有两条，一条是平缓但绕远的“朝圣之路”，另一条则是直通山顶的“骑士阶梯”——一段需要手脚并用、紧抓着冰凉铁链才能攀爬的近乎垂直的岩壁。我选了后者。当你的手掌紧贴着被无数前人磨得光滑的铁链，你的呼吸因为陡峭而变得粗重，你才能真正体会到“要塞”二字的含义。这不仅仅是一个居住地，这是一道关乎生死的屏障。风声在耳边呼啸，偶尔传来几声乌鸦的鸣叫，更显得空旷而肃杀。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`终于登上山顶，穿过最后一道厚重的拱门，世界豁然开朗。城堡建筑群本身是精巧而庄严的，有着巴洛克式的庭院和彩绘的窗棂。但最震撼的，永远是走到城墙边缘的那一刻。脚下是150米深的垂直悬崖，眼前是一望无际、如绿色棋盘般铺展的施泰尔马克平原，远方的城镇小得像积木。站在这儿，你瞬间就明白了它为何不可攻克，也明白了数个世纪前，守军和居民们站在这同一位置，遥望东方地平线上升起的突厥骑兵烟尘时，是怎样一种混合着恐惧与决绝的心情。这座城堡的核心魅力，正是这种极致的物理防御与厚重历史带来的心灵冲击的完美结合。它不浪漫，但无比真实，充满了力量感。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`里格斯堡`} />
                <InfoRow label="英文名称" value={`Riegersburg Castle`} />
                <InfoRow label="正式名称" value={`Riegersburg Castle`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`施泰尔马克州，里格斯堡镇`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`奥地利东南部最重要的边境防御要塞，被誉为“从未被武力攻克的城堡”，是抵御奥斯曼帝国入侵的关键堡垒。`} />
                <InfoRow label="建筑特色" value={`一座完全依据火山岩山脊的自然地形建造的雄伟城堡，拥有长达3公里的双层城墙和7座城门，宛如一条盘踞在陡峭山巅的石龙。`} />
                <InfoRow label="建筑风格" value={`以中世纪防御工事风格为核心，融合了文艺复兴和巴洛克时期的居住性改造。`} />
                <InfoRow label="文化价值" value={`是施泰尔马克州地区历史、军事史和女性权力史的鲜活见证，其传奇女堡主的故事深刻体现了该地区的坚韧精神。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡庭院和部分区域全年开放。主要博物馆和历史展区开放时间一般为4月初至10月底，每天上午9点至下午5点。11月至次年3月通常只在周末或预约开放，具体开放日需查阅官网。圣诞节期间及恶劣天气（如暴雪、强风）可能临时关闭。`} />
              <InfoRow label="门票价格" value={`标准成人票约为15欧元，含城堡博物馆、女堡主展览和武器库。6-15岁青少年票约为8欧元。家庭票（2成人+最多3儿童）有优惠。持有施泰尔马克州卡可免费进入。门票通常在城堡入口处购买，旺季建议提前在线预订以避免排队。`} />
              <InfoRow label="地址" value={`Riegersburg 1, 8333 Riegersburg, Austria`} />
              <InfoRow label="交通方式" value={`最近的国际机场是格拉茨机场（约60公里）。从格拉茨中央火车站乘坐区域火车（S-Bahn）前往费尔德巴赫（Feldbach）站，车程约45分钟，班次每小时1-2班。在费尔德巴赫火车站前转乘出租车或预约的接驳车前往里格斯堡山脚，车程约15分钟。更推荐的自驾方式是从格拉茨沿B68公路向东行驶，有明显的“Riegersburg”棕色旅游指示牌，全程约50分钟，山脚下有大型免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起里格斯堡的故事，那得从它脚下这块巨大的火山岩开始讲起。早在青铜时代，人们就发现了这座天然瞭望台的战略价值。但真正让它登上历史舞台的，是公元1100年左右，一位名叫鲁迪格的贵族。据说“里格斯堡”这个名字就来源于他。在中世纪那个领主纷争的年代，占据这样一个易守难攻的据点，就等于握有了话语权。最初的城堡是木质的，后来才逐渐被石头取代。但真正让城堡脱胎换骨的，是来自东方的巨大威胁——奥斯曼帝国的扩张浪潮。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了16世纪，土耳其人的铁骑已经横扫巴尔干，兵锋直指维也纳。整个奥地利东南部都笼罩在战争的阴云下。里格斯堡，因其扼守着通往维也纳和内地的要道，成了边境防线上最坚固的钉子。当时的领主们不惜重金，将城堡扩建成了一个令人望而生畏的军事综合体。他们修建了内外两道共长达三公里的城墙，设置了七道沉重的城门，每一道都是一个死亡的陷阱。城堡内部储藏着足以应付长期围困的粮食和武器，甚至有自己的水源。据说在最危险的时期，附近乡镇的居民可以全部撤入城堡避难。正是在这种生死存亡的压力下，这座城堡被磨砺成了真正的“雄鹰之巢”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，这座堡垒最传奇的篇章，并非由某位战功赫赫的骑士书写，而是由一位女性——伊丽莎白·凯瑟琳娜·冯·加拉斯女伯爵谱写的。17世纪初，她成为了里格斯堡的女主人。在那个女性权力受限的时代，凯瑟琳娜却展现出了惊人的魄力和智慧。她不仅是一位母亲，更是一位杰出的管理者、建筑家和军事统帅。面对土耳其人持续的威胁，她亲自监督了城堡防御工事的最后也是最重要的一次现代化加固。我们今天看到的许多堡垒结构和棱堡设计，都出自她的规划。更重要的是，她深谙“民心即城墙”的道理，对领地内的农民和手工业者施行相对公正仁慈的政策，确保在危难时刻，城堡内外能够同心协力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`奇迹般地，在奥斯曼帝国大军数次席卷该地区的劫难中，周边城镇尽遭焚掠，唯有里格斯堡凭借其坚固的工事和充分的准备，始终屹立不倒，从未被敌军武力攻克。它像一个孤独而坚定的守望者，守护着身后的土地。战争阴云散去后，城堡的军事功能逐渐减弱，后来的主人将其部分改建为更适宜居住的文艺复兴和巴洛克风格宫殿，增加了华丽的厅堂和舒适的起居室，但那些森然的城墙和炮口始终未曾拆除，如同伤疤，也如同勋章。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时光流转，城堡的所有权几经更迭，最终由利希滕斯坦家族拥有并精心维护至今。它不再是剑拔弩张的边境堡垒，而变成了一座承载着厚重记忆的博物馆。漫步其中，你既能触摸到冰冷炮管上的战争记忆，也能在女堡主曾经起居的房间里，感受到一位非凡女性在乱世中展现出的坚韧与光辉。这就是里格斯堡，它的故事，是一半铁血，一半温柔，全部刻在了那黑色的火山岩里。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受里格斯堡，建议预留至少4-5小时。最佳抵达时间是上午9点开门时，此时的阳光能完美勾勒出城堡东侧城墙的轮廓，且游客较少。整体游览节奏应是“先外后内，先苦后甜”：首先用一点体力征服“骑士阶梯”，从最艰难的视角理解其防御；然后在城堡内部慢慢参观博物馆，了解其人文历史；最后在城墙和观景台漫步，享受征服与俯瞰的快感。下山可以选择更轻松的“朝圣之路”，让疲惫的双腿得以放松。这样的安排能让你从身体到心灵，全方位体验这座要塞的层次。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿一双绝对防滑、支撑性好的徒步鞋是必须的，“骑士阶梯”在雨后或清晨有露水时会非常湿滑。城堡内部分通道和楼梯狭窄昏暗，随身背包不宜过大。山区天气多变，即使山下晴朗，也建议带一件防风外套上山顶。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城堡山脚下的信息中心拿一份地图，先别急着上山，绕到南侧的空地远眺一下城堡全景，感受它扑面而来的压迫感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`鼓起勇气挑战那条需要借助铁链攀爬的“骑士阶梯”，让手心感受铁器的冰凉和岩石的粗砺，体验古代士兵巡逻的路径。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从陡峭的阶梯顶端钻出，穿过低矮的“背叛者之门”，进入城堡的第一重内院，摸一摸那些被岁月打磨得光滑的城墙石砖。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`直奔城堡核心区的博物馆，在略显昏暗的展厅里仔细观看那些精致的铠甲、古老的火绳枪和描绘土耳其战争的巨幅油画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要在“女堡主房间”驻足，透过那些精美的家具和个人物品，想象凯瑟琳娜在这里筹划防务、书写信件的情景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从博物馆出来，登上最高的“瞭望塔”，让自己被360度的施泰尔马克田园风光包围，找准东方——曾经威胁来袭的方向。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着绵延的城墙慢慢走一圈，用手指划过一个个冰冷的射击孔，在不同的角度欣赏城堡建筑与险峻地形的完美结合。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，在城堡庭院里的咖啡馆找一张露天桌子坐下，点一杯当地产的苹果汽酒或咖啡，让刚刚吸收的厚重历史慢慢沉淀。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡东南侧葡萄园视角`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，从通往小镇公路的某个弯道停下，可以拍到夕阳金色光芒洒满整个城堡侧面，与深色火山岩和绿色葡萄藤形成绝佳冷暖对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`攀登“骑士阶梯”的中段回望`}</h4>
                  <p className="text-sm text-gray-700">{`当你攀爬至一半，找到一个稳固的立足点回头俯拍，可以捕捉到后来者奋力攀登的动感，以及山下平原作为背景的广阔。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`主城墙西北角垛口`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光西斜时，站在这里以厚重的石砌垛口为画框，将远方绵延的丘陵和田野村落纳入其中，构图极具纵深感和故事性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城堡内院巴洛克式拱门之下`}</h4>
                  <p className="text-sm text-gray-700">{`利用拱门形成的天然框架，拍摄庭院另一端的塔楼和飘扬的旗帜，光影在拱廊下形成美妙分割。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从“瞭望塔”顶层拍摄城墙曲线`}</h4>
                  <p className="text-sm text-gray-700">{`使用广角镜头，俯拍城堡城墙沿着山脊自然蜿蜒的蛇形线条，展现其作为整体防御工事的宏大气势。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机拍摄需格外谨慎，强风天气多发，且必须遵守奥地利的无人机飞行法规，远离人群并尊重隐私。城堡内部博物馆区域通常禁止使用闪光灯和三脚架，请遵守规定。拍摄当地人，尤其是小镇居民时，请先微笑示意并获得同意。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`山脚温馨民宿`}</h4>
                  <p className="text-sm text-blue-800">{`选择住在里格斯堡小镇上的家庭式民宿，房东老太太会端出自家做的苹果卷作为欢迎点心，清晨在鸡鸣和教堂钟声中醒来。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`费尔德巴赫小镇历史酒店`}</h4>
                  <p className="text-sm text-green-800">{`开车15分钟外的费尔德巴赫镇中心，有一家由老邮局改造的精品酒店，房间挑高很高，装饰复古，晚上可以去镇上的老酒馆喝一杯。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`葡萄园间的设计农庄`}</h4>
                  <p className="text-sm text-yellow-800">{`在城堡视野范围内的某个山坡上，隐藏着将传统农舍与现代设计感完美结合的住宿，拥有无敌的私人露台，直面城堡夜景。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`格拉茨城区奢华之选`}</h4>
                  <p className="text-sm text-purple-800">{`如果不介意每天通勤，回到格拉茨这座世界文化遗产城市，入住穆尔河畔的五星级酒店，享受都市便利与城堡探险的完美结合。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`旺季（7-8月及葡萄收获季的9月）小镇住宿非常紧俏，务必提前数月预订。施泰尔马克州乡村治安极好，但夜间照明较少，自驾返回住宿地时注意蜿蜒的乡间小路。许多民宿提供包含当地农产品的丰盛早餐，是体验风土的重要一环。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开里格斯堡很久以后，我记忆最深的不是某件展品，也不是某个具体的画面，而是一种感觉——一种沉甸甸的、属于历史和土地的重量。这座城堡不像新天鹅堡那样，是为了一个梦而建；它是为了生存，为了抵御真实的、血与火的恐惧而建。每一块垒砌的石头，都凝结着无数普通人的汗水、智慧，甚至生命。当你触摸那些城墙，你触摸的不是冰冷的文物，而是一段依然有温度的抗争史。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求轻盈、快速和解构的时代，里格斯堡提醒着我们一些“重”的价值：关于守护的责任，关于在绝境中建造家园的坚韧，关于一位女性在男权与战火中撑起一片天的非凡勇气。它矗立在那里，不仅仅是一个旅游景点，更是一个精神的坐标。它告诉我们，美可以有多种形态，除了柔美的、浪漫的，还有这种粗粝的、庄严的、充满力量的美。对于一个真正的深度旅行者来说，来到这里，就是完成一次与欧洲历史中最为硬核、也最为动人的一页的对话。这份体验，会让你对脚下的大地，和那些曾在这片大地上认真活过、奋力守护过的人们，生出最深沉的敬意。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/duernstein-abbey-wachau" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    杜
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">杜恩施泰因修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dürnstein Abbey</p>
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
              <a href="/attractions/bregenz-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布雷根茨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bregenz Old Town</p>
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
