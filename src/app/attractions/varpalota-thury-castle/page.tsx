import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '瓦尔保洛陶 Várpalota｜探访多瑙河畔被遗忘的“要塞之城”与历经战火的图里城堡遗址 - 最佳欧洲景点',
  description: '说真的，当我第一次把车停在瓦尔保洛陶看起来平平无奇的现代街道边，顺着导航拐进一条小巷时，我完全没做好准备。前一秒还是上世纪七八十年代的居民楼，后一秒，一堵巨大、粗糙、泛着铁锈红色的残墙就猛地撞进了视野。那不是明信片里精致修复的城堡，而是一道赤裸裸的伤口，是时间与火药共同完成的、未加粉饰的雕塑。空气里',
}

export default function VarpalotaThuryCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '匈牙利', href: '/destinations/europe' },
            { label: '瓦尔保洛陶', href: '/destinations/europe' },
            { label: '瓦尔保洛陶', href: '/attractions/varpalota-thury-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`瓦尔保洛陶・Várpalota・匈牙利・瓦尔保洛陶`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说真的，当我第一次把车停在瓦尔保洛陶看起来平平无奇的现代街道边，顺着导航拐进一条小巷时，我完全没做好准备。前一秒还是上世纪七八十年代的居民楼，后一秒，一堵巨大、粗糙、泛着铁锈红色的残墙就猛地撞进了视野。那不是明信片里精致修复的城堡，而是一道赤裸裸的伤口，是时间与火药共同完成的、未加粉饰的雕塑。空气里有种独特的味道——干燥的青草香混合着古老砖石被午后太阳烘烤后散发的、略带尘土的气息，偶尔还能闻到远处人家厨房飘来的炖菜香。几个老人坐在残墙根下的长椅上，用我听不懂的匈牙利语慢悠悠地聊天，他们的狗在遗址公园的草地上打盹。这里不是与世隔绝的景点，它就是小镇日常生活的一个背景，一个巨大的、沉默的邻居。
走近了，你会发现那墙体的质感如此丰富。下半部分是颜色更深、打磨更光滑的巨石，那是中世纪的基础；上面则是文艺复兴时期增添的红砖，砌得整齐而优雅，但许多砖块已经碎裂、脱落，露出里面粗糙的填充物。最震撼的是那座主塔楼——或者说，是主塔楼剩下的一半。它像一块被巨人咬了一口的厚饼干，断面参差不齐，你能清晰地看到内部房间的轮廓、烟囱的管道，甚至某层楼地板木梁留下的凹槽。阳光从缺口泼洒进去，照亮了内部墙壁上早已褪色的壁画痕迹。站在它的阴影里，你能听见风穿过砖石缝隙的呜咽声，像是古老的叹息。
这里最打动我的，正是这种“未完成”的废墟感。匈牙利有许多辉煌的城堡，但瓦尔保洛陶的图里要塞不同。它没有试图告诉你一个关于荣耀与胜利的完整故事，而是呈现了历史中更真实、更残酷的一面：破碎、中断与失去。然而，就在这破碎之中，生命力在顽强延续。孩子们在城墙下的草坪上踢球，情侣倚靠着古老的基石拍照，野花从墙缝里探出头，开着紫色和黄色的小花。它不再是一座用于战争的堡垒，而是变成了一个社区的公园，一个承载记忆的容器。这种反差，这种在伤痕之上生长出的平静日常，构成了它独一无二的、略带忧伤又无比坚韧的核心魅力。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "说真的，当我第一次把车停在瓦尔保洛陶看起来平平无奇的现代街道边，顺着导航拐进一条小巷时，我完全没做好准备。前一秒还是上世纪七八十年代的居民楼，后一秒，一堵巨大、粗糙、泛着铁锈红色的残墙就猛地撞进了视野。那不是明信片里精致修复的城堡，而是一道赤裸裸的伤口，是时间与火药共同完成的、未加粉饰的雕塑。空气里有种独特的味道——干燥的青草香混合着古老砖石被午后太阳烘烤后散发的、略带尘土的气息，偶尔还能闻到远处人家厨房飘来的炖菜香。几个老人坐在残墙根下的长椅上，用我听不懂的匈牙利语慢悠悠地聊天，他们的狗在遗址公园的草地上打盹。这里不是与世隔绝的景点，它就是小镇日常生活的一个背景，一个巨大的、沉默的邻居。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走近了，你会发现那墙体的质感如此丰富。下半部分是颜色更深、打磨更光滑的巨石，那是中世纪的基础；上面则是文艺复兴时期增添的红砖，砌得整齐而优雅，但许多砖块已经碎裂、脱落，露出里面粗糙的填充物。最震撼的是那座主塔楼——或者说，是主塔楼剩下的一半。它像一块被巨人咬了一口的厚饼干，断面参差不齐，你能清晰地看到内部房间的轮廓、烟囱的管道，甚至某层楼地板木梁留下的凹槽。阳光从缺口泼洒进去，照亮了内部墙壁上早已褪色的壁画痕迹。站在它的阴影里，你能听见风穿过砖石缝隙的呜咽声，像是古老的叹息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里最打动我的，正是这种“未完成”的废墟感。匈牙利有许多辉煌的城堡，但瓦尔保洛陶的图里要塞不同。它没有试图告诉你一个关于荣耀与胜利的完整故事，而是呈现了历史中更真实、更残酷的一面：破碎、中断与失去。然而，就在这破碎之中，生命力在顽强延续。孩子们在城墙下的草坪上踢球，情侣倚靠着古老的基石拍照，野花从墙缝里探出头，开着紫色和黄色的小花。它不再是一座用于战争的堡垒，而是变成了一个社区的公园，一个承载记忆的容器。这种反差，这种在伤痕之上生长出的平静日常，构成了它独一无二的、略带忧伤又无比坚韧的核心魅力。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`瓦尔保洛陶`} />
                <InfoRow label="英文名称" value={`Várpalota`} />
                <InfoRow label="正式名称" value={`Várpalota`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`瓦尔保洛陶`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座见证了匈牙利数百年动荡边疆史，在奥斯曼帝国扩张的烽火中多次屹立不倒，最终在现代战争中凋零的边境要塞。`} />
                <InfoRow label="建筑特色" value={`残存的文艺复兴风格宫殿墙体与中世纪防御工事地基交织，红砖与灰石形成鲜明对比，高大的塔楼废墟如同被撕裂的巨人手指，直指天空。`} />
                <InfoRow label="建筑风格" value={`以文艺复兴风格为主，但地基和部分防御结构保留了更早的哥特式特征，后历经多次修补，呈现出独特的混搭风格。`} />
                <InfoRow label="文化价值" value={`它是匈牙利“边堡体系”中一个鲜活的伤疤，并非作为完美古迹被供奉，而是作为历史本身的一部分被保留，迫使人们直面战争的破坏性与记忆的韧性。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`图里要塞遗址公园：全年全天开放（户外区域）。要塞博物馆与塔楼内部：每年4月1日至10月31日，周二至周日 10:00 - 18:00；冬季（11月1日至3月31日）仅周末开放，时间为10:00 - 16:00，且视天气情况可能关闭。元旦、复活节及圣诞节期间闭馆。`} />
              <InfoRow label="门票价格" value={`遗址公园区域免费。要塞博物馆及塔楼登顶门票：成人1500匈牙利福林，学生/老人1000福林，6岁以下儿童免费。家庭套票（2大2小）3500福林。建议提前在官网查看是否有临时展览的联票。`} />
              <InfoRow label="地址" value={`Thury Castle, Várpalota, 8100 Hungary`} />
              <InfoRow label="交通方式" value={`从布达佩斯李斯特·费伦茨国际机场出发，最便捷的方式是租车自驾，沿M7高速公路向西南方向行驶约100公里，车程约1小时15分钟，沿途风景优美。若乘坐公共交通，可从布达佩斯Déli火车站乘坐前往维斯普雷姆或Nagykanizsa方向的火车，在Várpalota站下车，车程约1.5-2小时，班次每小时约1-2班。出火车站后，步行约20分钟或搭乘本地巴士（1路或2路）即可抵达老城中心的要塞遗址。火车票建议通过匈牙利国铁（MÁV）APP购买，有英文界面。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要理解图里要塞为什么是今天这副模样，你得把时钟拨回到十六世纪。那时的匈牙利，正处在基督教世界与奥斯曼帝国血腥拉锯的前线，整个国家中部都被奥斯曼人占领，北部属于哈布斯堡王朝，而东部是独立的特兰西瓦尼亚公国。瓦尔保洛陶，就位于哈布斯堡控制的“皇家匈牙利”西部边境，是防御奥斯曼人沿着多瑙河走廊西进的关键节点之一。最初的堡垒可能更早，但我们现在看到的这座要塞的雏形，是在十六世纪中叶，由当时的领主图里·捷尔吉开始兴建的。他不是为了享受，而是为了生存。他把自己的家和军事据点合二为一，用当时最新的意大利文艺复兴风格来建造宫殿，但底下却是不折不扣的、足以抵御火炮的坚固工事。想象一下那个画面：优雅的拱窗、装饰性的山墙下，是黑洞洞的炮口和时刻戒备的士兵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要塞真正经受烈火考验是在十七世纪。它就像风暴中的一块礁石，经历了无数次冲击。最著名的一次是1605年，特兰西瓦尼亚的博奇考伊·伊什特万公爵——一位争取匈牙利自由、时而与奥斯曼结盟的复杂人物——的军队围攻并占领了这里。城堡几度易手，每一次都伴随着破坏与修复。到了十八世纪初，著名的拉科齐·费伦茨二世领导的反哈布斯堡独立战争席卷此地，要塞再次成为争夺的焦点。墙壁上的每一道新疤痕，可能都对应着史书中某次短暂的围攻。有趣的是，尽管战火频繁，图里家族和后来的所有者们总是一次次地修复它，甚至加以扩建。那些不同颜色的砖石，就像是历史的年轮，记录着破坏与重建的循环。它不只是石头建筑，更是一个家族、一个社区在动荡中坚守的象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间的车轮转到十九世纪，和平似乎终于降临。奥匈帝国的建立带来了稳定，要塞的军事意义逐渐消失。它被改造得更加宜居，花园被修整，内部装饰得更像一座舒适的乡间庄园。然而，命运的讽刺在于，它躲过了数百年刀光剑影的正面冲击，却在二十世纪全球战争的“总体战”中遭到了最致命的一击。第二次世界大战末期，苏联红军与德军在匈牙利西部进行激烈战斗，瓦尔保洛陶是重要的交通枢纽。1945年3月，猛烈的炮火和空袭击中了要塞。没人知道具体是哪一发炮弹，但结果清晰而残酷：巨大的爆炸摧毁了主塔楼和宫殿的相当一部分，内部几个世纪积累的家具、藏书、艺术品化为灰烬。战后，匈牙利百废待兴，这样一座受损严重的私人城堡，在当时的意识形态下也无人问津，于是它被遗忘了，任由风雨侵蚀，成为真正的废墟。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转机出现在最近三四十年。随着历史观念的转变，人们开始意识到，那些保存完好的古迹固然重要，但这些承载了真实创伤记忆的废墟，同样具有不可替代的价值。图里要塞没有被推平重建，而是被小心翼翼地保护起来，以“遗址公园”的形式向公众开放。考古学家清理了瓦砾，加固了危墙，但刻意保留了它被轰炸后的样子。他们做的不是修复，而是“凝固”。现在，你可以触摸那些烧黑的砖块，仰望塔楼恐怖的缺口，它们本身成了最有力的展品，诉说着二十世纪战争无差别的破坏力。从边境堡垒到贵族家园，再到战争废墟，最后成为一座露天博物馆和市民公园，图里要塞的“一生”，几乎就是匈牙利中部历史的一个微型缩影。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`我强烈建议你在一个晴朗的下午开始这次探索，大约三点左右抵达。这时候，上午可能存在的少许旅行团已经散去，阳光开始西斜，会为那些残破的墙体打上长长的、戏剧性的影子，非常适合拍照。整体游览时间建议预留2.5到3小时，节奏可以放得非常慢。我们的路线将从外围感受开始，逐渐深入废墟的核心，最后以俯瞰小镇全景作为结束。这样的安排能让你先建立起对要塞规模和环境的整体印象，再近距离观察那些震撼的细节，最后带着一个宏大的视角离开，完成一次从宏观到微观再到宏观的完整体验。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`遗址公园地面是原始的卵石和草地，穿一双舒适耐走的平底鞋至关重要，高跟鞋在这里是“灾难级”选择。公园内几乎没有商业设施，只在入口处可能有移动咖啡车，建议自备一瓶水。博物馆内部空间不大且展品说明以匈牙利语为主，可以提前在手机上下载好翻译APP辅助理解。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从新城与老城交界的小广场出发，先别急着进去，绕着遗址公园外围走半圈，感受一下这座庞然大物如何像一头沉睡的巨兽般卧在小镇的肌理之中。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从南侧的主入口进入遗址公园，让脚底感受老城主街那些被无数马蹄和脚步打磨得温润光滑的卵石路。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直走向那片最开阔的草坪，仰头凝视那座只剩下一半的、令人心碎又壮美的文艺复兴主塔楼，看云朵从它的缺口间缓缓飘过。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`触摸宫殿东侧那面保存相对完好的红砖墙，仔细分辨不同时期修补的痕迹，寻找墙上可能残留的雕刻或家族纹章的影子。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`低头探索宫殿地基和地下室幽暗的拱形空间，想象这里曾经是酒窖、储藏室还是士兵的营房。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着修复好的木质阶梯和平台，登上残存城墙的顶部，虽然不能进入塔楼，但这里提供了与废墟平行对话的视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城墙西侧下来，不要错过那个小小的、嵌在古老城墙里的博物馆，里面用发掘出的碎片和老照片，默默讲述着完整的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，穿过公园，走到西北角一个略微隆起的小土坡，从这里回望，可以看到要塞废墟、远处的新城区以及更远方巴科尼山朦胧的轮廓共存的画面。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`要塞南侧外墙与现代居民楼的交界处`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点左右，利用长焦镜头压缩空间，将沧桑的红砖残墙与阳台挂着衣服的朴素居民楼同框，形成强烈的时间对话感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主塔楼废墟正前方的草坪上`}</h4>
                  <p className="text-sm text-gray-700">{`日落前约一小时，低角度的金色阳光会从侧面照亮塔楼的断面，此时躺下或极低角度仰拍，能拍出废墟刺破天空的孤寂与力量感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`宫殿东墙那段布满爬藤的完整墙面下`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点前或下午四点后，阳光能创造出美妙的光影分割，让同伴站在光影交界处，以巨大的砖墙为背景，人物会显得格外渺小而有故事性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从城墙顶部木平台向西眺望`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚时分，以城墙的锯齿状垛口为前景框架，拍摄远处小镇屋顶弥漫的炊烟和逐渐亮起的点点灯火，营造出废墟守望生活的温暖意境。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效减轻古老砖石表面的反光，让色彩和纹理更加饱和清晰。拍摄当地人时（如在长椅休息的老人），务必先微笑并示意，获得对方默许后再举起相机，这是一种基本的尊重。无人机飞行在该区域有严格限制，除非有明确许可，否则不建议起飞。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`怀旧之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住老城区一栋经过巧妙改造的十九世纪公寓楼，木地板嘎吱作响，窗外正对着要塞公园的树梢，清晨在咖啡香中被教堂钟声唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`本地体验`}</h4>
                  <p className="text-sm text-green-800">{`选择小镇边缘一个家庭经营的农家乐（Panzió），主人会热情地端出自酿的巴科尼山区葡萄酒和家传炖牛肉，饭后可以溜达到后院直接眺望要塞的剪影。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`舒适便捷`}</h4>
                  <p className="text-sm text-yellow-800">{`住在镇中心步行五分钟可达的现代三星级酒店，房间干净明亮，重点是它自带一个不错的餐厅，解决了晚上在安静小镇觅食的小烦恼。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`远方眺望`}</h4>
                  <p className="text-sm text-purple-800">{`如果不介意开车十分钟，可以选择巴科尼山脚下一个由磨坊改造的精品酒店，在房间的阳台上就能用长焦镜头拉近要塞的远景，享受山间的清新空气。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "瓦尔保洛陶是一个非常安静甚至有些早睡的小镇，晚上九点后街道就十分宁静，喜欢夜生活的游客可能会觉得单调。这里的治安非常好，独自散步也很安全。预订住宿时，尤其是旺季（夏季周末），建议直接通过酒店的匈牙利语官网或电话预订，价格有时会比国际预订平台更优，且能直接沟通具体需求。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开瓦尔保洛陶已经好几天了，但脑海里最清晰的，不是某一块砖石的细节，而是一种挥之不去的混合感受：那是沉重与轻盈、伤痕与愈合、逝去与延续同时并存的状态。我们习惯了去参观那些被打理得光彩照人的古迹，它们告诉我们历史“应该”是什么样子——辉煌的、胜利的、完整的。但图里要塞给了我们另一种真相：历史同样是破碎的、疼痛的、未完成的。它没有试图掩盖自己的伤疤，反而将其坦然示人。这种坦诚，在当今这个习惯于滤镜和粉饰的世界里，显得尤为珍贵和有力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，如果你追求的是一次对欧洲历史的深度触摸，而不仅仅是浮光掠影的观赏，那么请一定来这里。它不会让你轻松愉快地拍下完美的城堡打卡照，但它会给你更多。它会让你在那些沉默的砖石前驻足，思考战争的无情、和平的脆弱，以及普通人在宏大历史叙事中的坚守与韧性。你会看到，即使在最深的创伤之上，生命依然会找到出路，野花会开，孩子会笑，生活继续。这座“要塞之城”守护的，早已不再是领土，而是一段关于生存与记忆的、沉默却震耳欲聋的故事。这份真实的重量，正是深度旅行的灵魂所在。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/godollo-palace-sisi-royal-summer-residence" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格德勒宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gödöllő Palace</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/miskolc" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    米
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">米什科尔茨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Miskolc</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/herend" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    赫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">赫伦瓷器小镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Herend</p>
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
