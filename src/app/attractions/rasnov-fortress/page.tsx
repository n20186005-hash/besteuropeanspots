import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '勒什诺夫要塞 Râșnov Fortress｜特兰西瓦尼亚山巅的千年避难所，聆听石头讲述农奴的生存史诗 - 最佳欧洲景点',
  description: '车子在特兰西瓦尼亚的丘陵间穿行，忽然间，朋友指着前方一座拔地而起的石灰岩山丘说：“看，它在那儿。”我抬头，瞬间屏住了呼吸。那不是一座轻盈的童话城堡，而是一顶沉重、威严、由岩石和意志锻造的王冠，死死地扣在山巅的绿色绒毯上。阳光勾勒出它锯齿状的轮廓，那些历经风霜的塔楼沉默地刺向天空，仿佛在无声地宣告：此...',
}

export default function RasnovFortressPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '罗马尼亚', href: '/destinations/romania' },
            { label: '布拉索夫县', href: '/destinations/romania' },
            { label: '勒什诺夫要塞', href: '/attractions/rasnov-fortress' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`勒什诺夫要塞・Râșnov Fortress・罗马尼亚・布拉索夫县`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在特兰西瓦尼亚的丘陵间穿行，忽然间，朋友指着前方一座拔地而起的石灰岩山丘说：“看，它在那儿。”我抬头，瞬间屏住了呼吸。那不是一座轻盈的童话城堡，而是一顶沉重、威严、由岩石和意志锻造的王冠，死死地扣在山巅的绿色绒毯上。阳光勾勒出它锯齿状的轮廓，那些历经风霜的塔楼沉默地刺向天空，仿佛在无声地宣告：此处，曾是生存的最后底线。
我们弃车开始向上攀爬。脚下是修缮过的木栈道，两旁是茂密的橡树和山毛榉，空气里弥漫着松针、湿润泥土和淡淡野花的清冽气味。风声穿过山谷，夹杂着远处隐约的鸟鸣和树叶沙沙的合唱。越往上，坡度越陡，呼吸也变得粗重。但每当你停下来喘口气，回头一望，视野就豁然开朗——山下勒什诺夫小镇色彩明快的房屋像玩具一样散落，更远处是喀尔巴阡山脉波浪般绵延的深蓝色剪影。这种爬升的过程，本身就像一种仪式，让你用身体去感受当年那些带着家当、牲畜、仓皇逃命至此的农民，每一步的艰辛与迫切。
终于穿过厚重的拱形门洞，进入要塞内部。时间仿佛在这里陡然慢了下来，甚至凝固了。眼前不是空旷的废墟，而是一个微缩的、被时光按下暂停键的石头小镇。一条主街蜿蜒向上，两旁是石头垒成、没有屋顶的屋舍框架，墙上还留着壁炉的凹痕和窗户的方形洞口。你可以轻易想象出当年炊烟从这里升起，孩子在这些门洞里追逐，妇女在井边打水闲聊的日常景象。最打动人的是那份质朴的坚韧——这里没有王公贵族的奢华装饰，只有为了活下去而创造的一切：教堂、学校、仓库、甚至关押犯人的地牢。每一块被磨得光滑的石头，每一段倾颓但依然挺立的墙壁，都在低声诉说着一个关于社区、互助和顽强守望的故事。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在特兰西瓦尼亚的丘陵间穿行，忽然间，朋友指着前方一座拔地而起的石灰岩山丘说：“看，它在那儿。”我抬头，瞬间屏住了呼吸。那不是一座轻盈的童话城堡，而是一顶沉重、威严、由岩石和意志锻造的王冠，死死地扣在山巅的绿色绒毯上。阳光勾勒出它锯齿状的轮廓，那些历经风霜的塔楼沉默地刺向天空，仿佛在无声地宣告：此处，曾是生存的最后底线。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`我们弃车开始向上攀爬。脚下是修缮过的木栈道，两旁是茂密的橡树和山毛榉，空气里弥漫着松针、湿润泥土和淡淡野花的清冽气味。风声穿过山谷，夹杂着远处隐约的鸟鸣和树叶沙沙的合唱。越往上，坡度越陡，呼吸也变得粗重。但每当你停下来喘口气，回头一望，视野就豁然开朗——山下勒什诺夫小镇色彩明快的房屋像玩具一样散落，更远处是喀尔巴阡山脉波浪般绵延的深蓝色剪影。这种爬升的过程，本身就像一种仪式，让你用身体去感受当年那些带着家当、牲畜、仓皇逃命至此的农民，每一步的艰辛与迫切。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`终于穿过厚重的拱形门洞，进入要塞内部。时间仿佛在这里陡然慢了下来，甚至凝固了。眼前不是空旷的废墟，而是一个微缩的、被时光按下暂停键的石头小镇。一条主街蜿蜒向上，两旁是石头垒成、没有屋顶的屋舍框架，墙上还留着壁炉的凹痕和窗户的方形洞口。你可以轻易想象出当年炊烟从这里升起，孩子在这些门洞里追逐，妇女在井边打水闲聊的日常景象。最打动人的是那份质朴的坚韧——这里没有王公贵族的奢华装饰，只有为了活下去而创造的一切：教堂、学校、仓库、甚至关押犯人的地牢。每一块被磨得光滑的石头，每一段倾颓但依然挺立的墙壁，都在低声诉说着一个关于社区、互助和顽强守望的故事。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`勒什诺夫要塞`} />
                <InfoRow label="英文名称" value={`Râșnov Fortress`} />
                <InfoRow label="正式名称" value={`Râșnov Fortress`} />
                <InfoRow label="国家" value={`罗马尼亚`} />
                <InfoRow label="城市" value={`布拉索夫县`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`中欧地区保存最完好的中世纪农民和市民避难堡垒之一，见证了特兰西瓦尼亚地区数个世纪动荡的防御史。`} />
                <InfoRow label="建筑特色" value={`依山顶而建，拥有双重防御城墙、多座塔楼及内部完整的街道、房屋、学校和教堂，形成一个功能齐全的山顶避难社区。`} />
                <InfoRow label="建筑风格" value={`罗马尼亚本土防御建筑与特兰西瓦尼亚撒克逊移民风格的混合体，以实用性和坚固性为核心。`} />
                <InfoRow label="文化价值" value={`是平民集体智慧与求生意志的丰碑，展现了在强权与战乱夹缝中，普通社区如何通过自组织构筑生存空间的非凡历史。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`夏季（4月-10月）通常为上午9:00至晚上7:00，最晚入场时间约为下午6:15；冬季（11月-3月）开放时间缩短，通常为上午9:00至下午5:00，周一可能闭馆或提前结束。具体开放时间可能因天气和维修情况临时调整，建议出发前查阅官方网站或社交媒体页面。`} />
              <InfoRow label="门票价格" value={`成人票约为25-30罗马尼亚列伊（约5-6欧元）；学生、儿童及老人享有优惠票价，约为15-20列伊。有时提供与附近布朗城堡（吸血鬼城堡）的联票。现场购票即可，支持现金和部分信用卡。`} />
              <InfoRow label="地址" value={`Strada Cetății 17, Râșnov 505400, Romania`} />
              <InfoRow label="交通方式" value={`最近的国际机场是布加勒斯特的亨利·科安德国际机场。从布加勒斯特机场，最佳方式是乘坐火车或租车。乘坐火车前往布拉索夫（Brasov）约2.5-3.5小时，车次频繁。抵达布拉索夫火车站后，最便捷的方式是乘坐出租车或使用打车软件（如Bolt）前往勒什诺夫镇，车程约25分钟，费用合理。也可以从布拉索夫汽车站乘坐本地巴士，但班次较少且耗时更长。自驾是最灵活的选择，从布拉索夫出发，沿DN73/E574公路向西南方向行驶约15公里即到，有清晰路标指向要塞山脚停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解勒什诺夫要塞为什么存在，你必须先想象13世纪初的特兰西瓦尼亚。这是一片富饶但危机四伏的土地，位于基督教欧洲的东部前沿。大批来自卢森堡和莱茵兰地区的撒克逊移民被匈牙利国王邀请至此，开发土地、建立城镇、保卫边疆。勒什诺夫就是这样一个新兴的社区。然而，1241年，灾难如飓风般袭来。蒙古铁骑在拔都汗的率领下横扫东欧，他们所经之处，城市化为焦土。布拉索夫等城镇惨遭蹂躏，平原上的居民无处可逃。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`正是在这场浩劫之后，幸存者们将目光投向了那座险峻的山丘。血的教训告诉他们，城墙低矮的城镇不足以庇护生命。于是，社区的农民和市民们决定，必须共同建造一个所有人都能使用的避难所。最初的堡垒可能非常简陋，就是用木栅栏和土墙围起山顶的制高点。但它的核心理念从诞生之初就确立了：这不是某个领主的私人城堡，而是属于整个勒什诺夫教区全体居民的“公社堡垒”。每当鞑靼人、奥斯曼土耳其人或其他劫掠者的烽烟升起，警钟长鸣，山下的人们就会携家带口，驱赶着牲畜，沿着我们今天攀登的同一条小径（当时肯定崎岖得多），涌进这座山巅的避难所。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了14至15世纪，随着奥斯曼帝国的威胁日益迫近，这座简陋的庇护所开始被系统地加固成真正的石头要塞。社区的每一户人家，都有义务出钱或出力参与建造和维护。你能看到的双重城墙、高大的塔楼（如“面包师塔”、“鞋匠塔”，以承担建造任务的行会命名），都是这个时期逐步增筑的。最具传奇色彩的是那口深达146米的井。传说，为了在围困时有水喝，两名被俘虏的土耳其士兵被给予承诺：如果他们挖出水，就还其自由。他们挖了整整17年，最终找到了水源，也重获自由。这个故事真假难辨，但那口令人眩晕的深井，无疑是这座堡垒生命线的象征，凝结着绝望中的希望与汗水。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在相对和平的时期，要塞并非空置。里面有常驻的守军，由社区供养。内部建造了超过30栋房屋、一座小巧的罗马天主教教堂（后来改建为路德宗教堂）、一所学校、以及各种作坊和仓库。它实际上是一个功能完备的微型城镇。这种“战时避难，平时警备”的状态持续了数百年，直到17世纪末，随着哈布斯堡王朝将奥斯曼势力逐出该地区，大规模的外敌入侵威胁才逐渐消退。要塞最后一次发挥军事作用是在1848年的革命期间，之后便慢慢被废弃，回归寂静。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，它的故事并未终结。20世纪以来，它作为珍贵的历史遗迹被不断修复和保护。地震和风雨的侵蚀带来了挑战，但持续的修复工作让它得以向公众开放。如今，你漫步在这些石头废墟间，触摸到的不仅是冰冷的岩石，更是几个世纪以来，一群普通人在历史的惊涛骇浪中，用集体的双手为自己打造的“诺亚方舟”。它不是关于征服，而是关于守护；不是关于荣耀，而是关于生存。这份独特的气质，让它在众多雄伟的欧洲城堡中，显得格外厚重与动人。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正感受勒什诺夫要塞的灵魂，建议在下午晚些时候抵达。这不仅是为了避开上午可能到来的旅游巴士团队，更是因为黄昏的光线能为这座石头堡垒披上金黄的外衣，氛围感十足。预留至少2-3小时用于深度探索。整体节奏应该是“慢爬升、细品味、绕城墙、等日落”。先从山脚开始，带着仰望的视角慢慢步行上山（约20-30分钟），用身体体会其地势之险。进入堡垒后，不要急于走马观花，而是按照从公共生活区到最深处防御核心的顺序，让历史画卷在眼前逐层展开。最后，务必留出时间在城墙上完整走一圈，并在西侧的塔楼附近等待日落时分，那是全天中最美的时刻。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双结实防滑的鞋子，要塞内外的路面多是原始的石头、泥土和木阶，雨后非常湿滑。带上瓶装水，山上只有入口处有小型贩卖点，攀登和游览都很消耗体力。尽量避开周六上午和节假日中午，那是本地家庭和旅行团参观的高峰期。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从山脚下那家有着红色屋顶的游客中心买好票，沿着蜿蜒向上的木质步道开始你的攀登，让两侧森林的气息和逐渐开阔的视野唤醒你的感官。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过那扇厚重、布满铁钉的拱形主城门，仿佛跨过一道时间的门槛，立刻置身于那条鹅卵石铺就、两侧立着无顶石屋的主街。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在主街的尽头右转，去探访那座由14世纪小教堂改建的新教教堂，内部质朴无华，静默中能听到自己心跳的回响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂出来，钻进那些标有编号的石头屋舍遗址，试着辨认哪里曾是厨房、哪里是卧室，想象一个家庭在围困期于此生活的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到那口传奇的深井，俯身看看井口那幽深的黑暗，听听是否有从146米深处传来的风声，体会水源对于这座山顶孤岛的意义。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着陡峭的台阶爬上内侧的防御城墙，从制高点俯瞰整个要塞内部的棋盘状布局，你会瞬间理解其作为自给自足社区的巧妙设计。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花最多的时间沿着外城墙走完整的一圈，从每一个瞭望孔和箭垛望出去，风景都截然不同，你能看到当年守卫者监视的每一个山谷和路径。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在位于西侧的“面包师塔”附近找个地方坐下，面朝布拉索夫方向，静静等待夕阳将远山、小镇和脚下的石头染成温暖的蜜糖色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`山脚森林仰角`}</h4>
                  <p className="text-sm text-gray-700">{`在攀登栈道约三分之一处的一个小拐弯平台，用广角镜头向上仰拍，能将蜿蜒的木道、茂密的森林和山顶巍峨的城墙同时纳入画面，最佳时间是阳光能斜射到城墙的清晨或午后。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主城门框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`不要只是拍门洞，而是站在门内几米处，以巨大的橡木门和石拱为画框，对准门外洒进来的阳光和远处翠绿的山谷，营造深邃的纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`小教堂窗户取景`}</h4>
                  <p className="text-sm text-gray-700">{`走进那个小小的教堂，将相机对准其狭长的哥特式窗户，以窗外摇曳的树影和蓝天为背景，拍摄一个充满框架感和故事感的空镜。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`生活区走廊光影`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个阳光强烈的下午，走进那些并排的石头房舍遗址，当光线从没有屋顶的开口倾泻而下，在长廊地面投下明暗交错的光影时，快速捕捉这充满几何美感和时光痕迹的一瞬。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`西侧城墙日落人像`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，在西侧城墙的垛口，让人物以剪影或侧影姿态凭墙远眺，以暖色调的天空、绵延的山脉和山下星星点点的灯火作为背景，情感张力十足。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`携带一个24-70mm的标准变焦镜头足以应对大部分场景，若想拍摄城墙全景与星空，一支广角镜头会很有用。使用无人机前务必确认当地法规，该区域可能因是历史遗迹而禁飞。拍摄当地居民或节日活动时，请务必先微笑并征得同意，这是一种基本的尊重。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在勒什诺夫镇上由家庭经营的“山景”民宿，房间干净温馨，房东老奶奶会为你准备丰盛的自制果酱和早餐，晚上从小阳台就能望见被灯光勾勒出轮廓的山顶要塞。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`选择布拉索夫老城中心一栋15世纪撒克逊风格建筑改造的精品酒店，睡在古老的木梁下，清晨被石板路上清脆的马车声唤醒，沉浸在中世纪城镇的烟火气里。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`隐居自然`}</h4>
                  <p className="text-sm text-yellow-800">{`在要塞附近的山丘上找一间传统的罗马尼亚木屋度假屋，完全被森林和草地包围，夜晚只有壁炉的噼啪声和窗外的繁星，白天可以徒步直接走到要塞山脚。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-purple-800">{`驱车前往距离要塞约40分钟车程、位于喀尔巴阡山深处的顶级温泉庄园酒店，在历史悠久的老建筑里享受水疗，在露台餐厅品尝以山区食材烹调的现代菜肴，将探险与奢华完美结合。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果主要想探索要塞及周边山区，住在勒什诺夫镇或附近村庄比住在布拉索夫更安静、更有沉浸感，但餐饮选择较少。夏季和秋季（赏枫季节）是旺季，需提前数月预订心仪的特色住宿。该地区治安良好，但山区自驾需注意蜿蜒山路和偶尔出没的野生动物。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开勒什诺夫要塞时，我的背包里好像装进了一些比照片更重的东西。那不是石头，而是一种关于“韧性”的具象化感受。在欧洲，我们看惯了那些诉说着王权、神权与财富的宫殿教堂，它们美得令人窒息，却常常让我感到一种距离——那是另一个世界的故事。但勒什诺夫不同，它的每一块石头都浸透着普通人的汗水和恐惧，它的存在本身，就是一首由无数无名者谱写的生存赞歌。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求高速、效率和个人主义的时代，这座沉默的山顶堡垒像一位古老的智者，提醒着我们一些或许已被遗忘的根本：社区的力量、互助的必要性、以及在逆境中为自己创造一座“山顶”的原始本能。它不华丽，却有一种直击人心的庄严。它告诉你，历史不仅是大人物的传记，更是无数小人物为了守护日常的炊烟、孩子的笑声和爱人的拥抱，而团结起来共同建造的屏障。来这里，不只是为了看一座古老的防御工事，更是为了触摸一段关于平民尊严与集体智慧的温度。它值得你专程而来，花一个下午，静静地听风穿过石缝，那风声里，藏着我们所有人共同的、关于“家园”的回响。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/mystras-byzantine-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    米
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">米斯特拉斯拜占庭遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mystras</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/larochette-castle-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉罗谢特城堡废墟</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Larochette Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/castel-del-monte" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡斯泰尔德尔蒙特</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Castel del Monte</p>
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
