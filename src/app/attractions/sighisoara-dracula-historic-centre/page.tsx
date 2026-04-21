import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '锡吉什瓦拉 Sighișoara｜探访德古拉伯爵出生地，漫步中世纪的彩色时光胶囊 - 最佳欧洲景点',
  description: '记得我第一眼看到锡吉什瓦拉的那个黄昏吗？就好像不小心闯进了一本被遗忘的彩色童话书里。车子还在现代街道上行驶，转过一个弯，一整座覆盖着橘红、鹅黄、淡绿屋顶的小山丘，被一圈厚厚的奶油色城墙稳稳托着，突然就撞进了视线。山顶那座有着彩色鳞片状瓦顶的钟楼，在夕阳下像一块巨大的、正在融化的蜂蜜蛋糕。空气里有股特...',
}

export default function SighisoaraDraculaHistoricCentrePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '罗马尼亚', href: '/destinations/romania' },
            { label: '锡吉什瓦拉', href: '/destinations/romania' },
            { label: '锡吉什瓦拉（吸血鬼故乡）', href: '/attractions/sighisoara-dracula-historic-centre' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`锡吉什瓦拉（吸血鬼故乡）・Sighișoara・罗马尼亚・锡吉什瓦拉`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`记得我第一眼看到锡吉什瓦拉的那个黄昏吗？就好像不小心闯进了一本被遗忘的彩色童话书里。车子还在现代街道上行驶，转过一个弯，一整座覆盖着橘红、鹅黄、淡绿屋顶的小山丘，被一圈厚厚的奶油色城墙稳稳托着，突然就撞进了视线。山顶那座有着彩色鳞片状瓦顶的钟楼，在夕阳下像一块巨大的、正在融化的蜂蜜蛋糕。空气里有股特别的味道——山下飘来的木柴烟味，混合着老面包房刚出炉的肉桂卷的甜香，还有石墙上青苔和几个世纪以来雨水冲刷石头留下的那种清冽气息。
你得走过一座桥，穿过一道厚重的拱形城门，才算真正进入了它的心脏。脚下的鹅卵石被磨得光滑锃亮，在雨后映着天光，像一条条黑色的溪流。耳边立刻安静下来，现代汽车的噪音被过滤在城墙之外，只剩下你自己的脚步声、远处咖啡馆隐约的叮当杯碟声，还有不知道从哪扇窗子里飘出来的手风琴调子。这里的居民依然住在这些有着四五百年历史的房子里，阳台上晾着衣服，窗台上摆着天竺葵。你分不清谁是游客谁是本地人，因为老奶奶会拎着菜篮子和你擦肩而过，走进一扇挂着古老黄铜门环的木门。
它的核心魅力，就在于这种“活着”的停滞感。时间在这里不是直线前进的，而是像涡流一样打着旋儿。你站在中心广场，一边是挂着“Casa Vlad Dracul”牌子的、弗拉德·采佩什可能出生的那栋芥末黄色房子，如今一楼是喧闹的餐厅；另一边是肃穆的钟楼，顶上代表法律、和平、正义和公正的木雕小人，还在每个整点笨拙地转出来报时。传说与日常，历史与烟火气，惊悚的故事与明媚的色彩，全都不可思议地搅拌在一起，酿成一杯让人微醺的时光之酒。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`记得我第一眼看到锡吉什瓦拉的那个黄昏吗？就好像不小心闯进了一本被遗忘的彩色童话书里。车子还在现代街道上行驶，转过一个弯，一整座覆盖着橘红、鹅黄、淡绿屋顶的小山丘，被一圈厚厚的奶油色城墙稳稳托着，突然就撞进了视线。山顶那座有着彩色鳞片状瓦顶的钟楼，在夕阳下像一块巨大的、正在融化的蜂蜜蛋糕。空气里有股特别的味道——山下飘来的木柴烟味，混合着老面包房刚出炉的肉桂卷的甜香，还有石墙上青苔和几个世纪以来雨水冲刷石头留下的那种清冽气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你得走过一座桥，穿过一道厚重的拱形城门，才算真正进入了它的心脏。脚下的鹅卵石被磨得光滑锃亮，在雨后映着天光，像一条条黑色的溪流。耳边立刻安静下来，现代汽车的噪音被过滤在城墙之外，只剩下你自己的脚步声、远处咖啡馆隐约的叮当杯碟声，还有不知道从哪扇窗子里飘出来的手风琴调子。这里的居民依然住在这些有着四五百年历史的房子里，阳台上晾着衣服，窗台上摆着天竺葵。你分不清谁是游客谁是本地人，因为老奶奶会拎着菜篮子和你擦肩而过，走进一扇挂着古老黄铜门环的木门。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，就在于这种“活着”的停滞感。时间在这里不是直线前进的，而是像涡流一样打着旋儿。你站在中心广场，一边是挂着“Casa Vlad Dracul”牌子的、弗拉德·采佩什可能出生的那栋芥末黄色房子，如今一楼是喧闹的餐厅；另一边是肃穆的钟楼，顶上代表法律、和平、正义和公正的木雕小人，还在每个整点笨拙地转出来报时。传说与日常，历史与烟火气，惊悚的故事与明媚的色彩，全都不可思议地搅拌在一起，酿成一杯让人微醺的时光之酒。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`锡吉什瓦拉（吸血鬼故乡）`} />
                <InfoRow label="英文名称" value={`Sighișoara`} />
                <InfoRow label="正式名称" value={`Sighișoara Historic Centre`} />
                <InfoRow label="国家" value={`罗马尼亚`} />
                <InfoRow label="城市" value={`锡吉什瓦拉`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`特兰西瓦尼亚地区保存最完好的、至今仍有人居住的中世纪要塞城市，也是传说中吸血鬼德古拉伯爵原型——弗拉德三世·采佩什的出生地。`} />
                <InfoRow label="建筑特色" value={`宛若童话般的彩色房屋、高耸的防御塔楼、蜿蜒的鹅卵石街巷与雄踞山丘的完整要塞城墙浑然一体。`} />
                <InfoRow label="建筑风格" value={`以中世纪萨克森哥特式建筑为核心，混合了巴洛克、文艺复兴等后期装饰元素。`} />
                <InfoRow label="文化价值" value={`作为“撒克逊人七城堡”之一，它是德国移民在东南欧历史、文化与防御体系的活化石，同时与罗马尼亚本土的吸血鬼民间传说深刻交融，形成独一无二的文化地标。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`锡吉什瓦拉历史中心（城堡山区域）全年24小时开放，可自由漫步。核心景点如钟楼博物馆开放时间为夏季（4月至10月）每天9:00-18:30，冬季（11月至3月）周二至周五9:00-15:30，周末10:00-15:30。其他小型博物馆和教堂开放时间可能略有缩短，建议行前在官网二次确认。大部分景点周一可能闭馆。`} />
              <InfoRow label="门票价格" value={`钟楼博物馆门票约15罗马尼亚列伊（约3欧元），提供城市全景。历史中心内的其他小型博物馆（如中世纪刑具博物馆）门票约5-10列伊。通常有学生票优惠。攀登有顶阶梯是免费的。部分教堂参观会建议小额捐赠。`} />
              <InfoRow label="地址" value={`Piața Cetății 1, Sighișoara 545400, România`} />
              <InfoRow label="交通方式" value={`从罗马尼亚首都布加勒斯特出发，最推荐乘坐火车。布加勒斯特北站有直达锡吉什瓦拉的列车，车程约5-6小时，沿途穿越喀尔巴阡山和特兰西瓦尼亚乡村，风景绝佳。每天有数班车次，建议提前在罗马尼亚铁路官网购票并选择InterRegio车次，更舒适可靠。如果从锡比乌或布拉索夫出发，车程仅2-2.5小时，班次更频繁。小镇火车站位于山脚下，步行15分钟即可抵达历史中心城堡山入口。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲锡吉什瓦拉的故事，得先从一群来自遥远西部的“客人”说起。12世纪中叶，匈牙利国王为了巩固特兰西瓦尼亚边疆，从今天的德国卢森堡、摩泽尔地区召来了一批手艺精湛的撒克逊工匠和商人。这些人翻山越岭而来，选中了这座小山丘。他们可不是来游玩的，而是肩负着“边疆保卫者”的使命。于是，他们用石头和汗水，一砖一瓦地建起了围墙、塔楼和教堂。到了14世纪，一座拥有14座塔楼（由不同行会负责守卫）、长达930米的完整防御体系诞生了。每座塔楼都以一个行会命名——制革匠塔、裁缝塔、铁匠塔，听起来就像中世纪版的“行业协会安保队”。想象一下，当鞑靼人或奥斯曼帝国的军队兵临城下，不是国王的士兵，而是皮匠、做衣服的师傅和打铁的壮汉们在塔楼上扔石头、倒热油，保卫着自己的家园和作坊。这种市民自治的强大生命力，是它存续至今的根基。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而让它闻名世界的另一个名字，在1431年诞生于此地的一所房子里。弗拉德三世，他的父亲弗拉德二世被称为“龙骑士”，因此他得了“采佩什”的绰号（意为“穿刺者”）。他在这里度过了童年早期，直到四五岁才离开，前往他父亲的宫廷。关于他残忍的“穿刺刑”传说在敌人中广为流传，这后来成了爱尔兰作家布拉姆·斯托克创作《德古拉》小说的灵感源泉。有趣的是，在罗马尼亚本土历史中，弗拉德三世更多被视为一个对抗奥斯曼侵略、捍卫基督教世界的强硬统治者，甚至是一位民族英雄。锡吉什瓦拉巧妙地将这两种形象都容纳了下来：历史的真实与文学的幻想，在此和平共处。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`几个世纪里，火灾是这座木质结构为主的城市最大的敌人。1676年的一场大火几乎将城内化为灰烬，我们今天看到的许多色彩明快的巴洛克风格外墙，正是在那次重建后出现的。萨克森商人们用财富和审美，在灰烬上画出了更鲜艳的图画。时间走到近代，二战和随后的共产主义时期，这里的萨克森社区大量迁回德国，古城一度沉寂、破败。转机出现在1999年，它被列入联合国教科文组织世界遗产名录。这笔“认证”像一剂强心针，资金和关注开始涌入，人们小心翼翼地修复那些彩色的外墙、古老的木梁，但绝不让它变成一个空洞的博物馆。他们坚持让这里依然是一个有学校、有集市、有普通人生活的社区。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，你今天漫步的，不仅仅是一个景点，更是一个跨越800年、融合了德意志的严谨秩序、罗马尼亚的民间野性，并在全球化时代重新找到自己位置的、无比坚韧的生命体。每一块石头，都听过萨克森语的叫卖、奥斯曼战马的嘶鸣、吉普赛小提琴的呜咽，以及如今世界各地游客惊喜的感叹。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味锡吉什瓦拉，我建议你至少留出完整的一天。最佳抵达时间是清晨九点前，那时旅游大巴还未涌入，阳光斜射，为彩色的街道铺上金色的滤镜。整体的节奏应该是“慢”。游览的核心是城堡山，但精髓在于体验从山脚“下城”穿越城门进入山顶“上城”这个颇具仪式感的过程。上午专注于城堡山内部的探索，攀登钟楼，参观教堂，在弗拉德故居前发会儿呆。中午在山顶或半山腰的餐厅享用一顿丰盛的罗马尼亚午餐。下午则悠闲地沿着城墙漫步，探访不同的塔楼，或者下山去“下城”的市集和普通街道逛逛，感受古今生活的对比。这样的安排能让你既抓住光影最美的时刻，又能深度感受古城不同时段的气氛变化。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双绝对舒适、防滑的平底鞋，那些鹅卵石路在雨天会非常滑，且凹凸不平。在中心广场的餐厅用餐时，留意菜单价格，部分针对游客的餐馆价格可能虚高，可以多走几步到侧街寻找。如果对德古拉传说特别感兴趣，可以考虑参加当地的夜间主题导览，氛围拉满，但请确认导游的英语水平。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从山脚下的“下城”开始，沿着被岁月打磨得发亮的鹅卵石主街向上走，感受居民区苏醒的烟火气，面包店飘出的第一炉香气。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过厚重阴凉的低门，正式进入城堡山区域，瞬间被中世纪氛围包裹，抬头寻找那些悬挂在屋檐下、造型各异的古老铁艺招牌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直走向城市地标钟楼，买票登上顶楼，在几乎没有其他游客的清净中，360度俯瞰特兰西瓦尼亚乡村如绿色绒毯般铺展开的震撼全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从钟楼下来，右转去探访那座阴森与童真交织的“吸血鬼”主题小巷，在小巷尽头那栋芥末黄色的弗拉德出生屋前，想象一下一个传奇暴君如何在此度过懵懂童年。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`接着攀登著名的有顶木制阶梯，这条建于1642年、长达175级的封闭式阶梯曾连接修道院学校与山上的教堂，在幽暗的光线里攀登仿佛进行一场时光穿越仪式。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在山顶的“山上教堂”停留，这座晚期哥特式建筑内部出乎意料的朴素，但后院的“萨克森人墓地”墓碑上古老的德文铭文，静静诉说着建造者的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着完整的古城墙走一圈，从不同的塔楼（如制革匠塔、裁缝塔）的缝隙中，以守卫者的视角观察城内城外的风景对比。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`黄昏时分回到中心广场，找一家露天咖啡馆坐下，点一杯本地葡萄酒，看钟楼上的木偶在整点报时，灯光渐次亮起，将童话世界渲染得更加不真实。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`钟楼顶层环形露台的西北角`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，可以拍到金色阳光洒满整个红色屋顶的城堡山，以及远方绵延的丘陵，使用长焦镜头可以压缩空间，让屋顶的层次感更强烈。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`有顶阶梯的中段窗口`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点左右的侧光会从木窗斜射进来，在古老的木梯上形成漂亮的光影条纹，以窗框为画框，拍摄人物向上攀登的剪影或背影，故事感十足。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从制革匠塔楼望向钟楼`}</h4>
                  <p className="text-sm text-gray-700">{`这个角度可以将钟楼与一片色彩斑斓的民居同框，特别是春季或秋季，树木的色彩与建筑相映成趣，最佳光线是下午的柔和散射光。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`中心广场东侧小巷入口`}</h4>
                  <p className="text-sm text-gray-700">{`利用小巷的纵深感，将尽头色彩鲜艳的房屋作为焦点，等待一位本地居民或穿着传统服饰的演员（夏季常有）走过时按下快门，增添生动气息。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`“吸血鬼”小巷的阴郁转角`}</h4>
                  <p className="text-sm text-gray-700">{`利用阴天或傍晚的低光照条件，调低曝光，突出石墙的粗糙质感与悬挂的诡异装饰，营造符合传说的暗黑氛围，适合创意摄影。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重当地居民隐私，拍摄阳台或窗户内的场景前请务必征得同意，许多房子仍是私人住宅。室内博物馆和教堂内部通常禁止使用闪光灯和三脚架，请遵守规定。利用雨后湿润的鹅卵石反射街灯或橱窗的光，能拍出非常迷人的夜景。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史中心核心区体验`}</h4>
                  <p className="text-sm text-blue-800">{`入住城墙内由15世纪商人宅邸改造的家庭旅馆，房间有裸露的原始石墙和厚重木梁，晚上能听到打更人传统的号角声，真正睡在中世纪里。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`山脚下静谧之选`}</h4>
                  <p className="text-sm text-green-800">{`选择位于下城河畔的精品酒店，由老建筑翻新，设计融合现代舒适与复古元素，从房间窗户就能仰望灯火通明的城堡山，享有绝佳视角且更安静。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`深度文化民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`住在城堡山边缘的萨克森风格老房子，房东可能是留守的本地历史学家或艺术家，早餐能尝到家传果酱，晚上还能听主人讲述书本上没有的古城秘辛。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`城外田园风光`}</h4>
                  <p className="text-sm text-purple-800">{`如果自驾，可以考虑古城附近山坡上的传统农庄民宿，醒来窗外是牧场和森林，步行15分钟即可进城，享受宁静的乡村夜晚与璀璨星空。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（7-8月）是旺季，城墙内的住宿非常紧俏，务必提前数月预订。冬季来访别有风味，可能遇到白雪覆盖的童话景象，但部分家庭式民宿可能歇业，需仔细确认。古城内街道复杂且不通车，预订时确认酒店是否提供停车场或搬运服务，否则拖着行李在鹅卵石上攀登会是一场噩梦。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开锡吉什瓦拉好些天了，但我总忍不住想起那个午后，坐在广场边，看着钟楼上的小木偶转出来敲钟。那一刻我突然明白了这个地方的魔力。它不是一个关于“吸血鬼”的恐怖主题公园，恰恰相反，它是一个关于“生”的温柔寓言。它告诉我们，历史不是标本，不是放在玻璃罩子里仅供瞻仰的冰冷物件。历史可以是阳台上盛开的天竺葵，是面包房里持续飘散的焦糖香，是孩子们放学后追逐跑过、响了六百年的同一条石板路。那些关于穿刺公的黑暗传说，在这里被明媚的色彩、寻常的炊烟和居民的微笑轻轻化解了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切追求快速、崭新、刺激的世界里，锡吉什瓦拉固执地保持着一种缓慢的、循环的、融合的节奏。它不逃避自己的任何一段历史——光荣的、血腥的、传奇的、平凡的——它把所有层次都摊开来，让阳光照在上面，让生活继续在上面生长。所以，每一位热爱深度游的旅人，都应该来一次这里。不只是为了寻找德古拉的影子，更是为了亲眼见证，一个社区如何用无比的韧性和生活的智慧，在时间的洪流中为自己建造了一座永不沉没的方舟。在这里，你能触摸到“永恒”的另一种可能：不是不变，而是在变化中牢牢守住内核的那份从容与温暖。这趟旅程，最终会变成一次对自己内心节奏的校准。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/pienza-renaissance-ideal-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    皮
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">皮恩扎</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pienza</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/targu-mures" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特尔古穆列什</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Târgu Mureș</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/peles-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡纳亚佩莱斯城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Peleș Castle</p>
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
