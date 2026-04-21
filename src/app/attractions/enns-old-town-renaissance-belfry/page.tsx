import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '恩斯 Enns｜探访奥地利最古老城市的千年层叠，攀登醒目的16世纪独立城市钟楼 - 最佳欧洲景点',
  description: '走出恩斯火车站，扑面而来的并不是想象中的那种“古老”的、略带尘封的气味，而是一种混合了烘焙糕点的黄油香、咖啡香，以及被多瑙河支流恩斯河浸润过的、清冽的空气。沿着一条坡度平缓的、被岁月打磨得温润光滑的石板路向老城中心走去，耳边是叮当作响的电车声和人们用清脆奥地利德语交谈的片段。你很快就会忘记自己是在探',
}

export default function EnnsOldTownRenaissanceBelfryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '奥地利', href: '/destinations/austria' },
            { label: '恩斯（上奥地利州）', href: '/destinations/austria' },
            { label: '恩斯', href: '/attractions/enns-old-town-renaissance-belfry' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`恩斯・Enns・奥地利・恩斯（上奥地利州）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`走出恩斯火车站，扑面而来的并不是想象中的那种“古老”的、略带尘封的气味，而是一种混合了烘焙糕点的黄油香、咖啡香，以及被多瑙河支流恩斯河浸润过的、清冽的空气。沿着一条坡度平缓的、被岁月打磨得温润光滑的石板路向老城中心走去，耳边是叮当作响的电车声和人们用清脆奥地利德语交谈的片段。你很快就会忘记自己是在探访一个“博物馆式的”古城，因为生活气息太浓了——穿着冲锋衣、牵着狗的老人，橱窗里摆满精美蛋糕的咖啡馆，还有骑着自行车掠过的中学生。它就像一个再普通不过的、宜居的奥地利小镇。
然后，毫无预兆地，那座钟楼就出现了。它不像许多欧洲大教堂的钟楼那样与建筑群融为一体，而是孤傲地、挺拔地矗立在市政厅广场的一侧，通体是温暖的赭石色，顶部的绿色洋葱头穹顶在阳光下闪闪发光。它如此醒目，以至于你在老城的任何一条小巷里抬头，几乎都能望见它那指向苍穹的尖顶。当地人早已习惯了它的存在，在它脚下的长椅上读报、聊天，孩子们绕着它巨大的基座追逐嬉戏。这座钟楼，就是恩斯跳动的心脏和永恒的哨兵，守护着脚下这片土地上两千年的记忆。
当你蹲下身，触摸广场地面上镶嵌的一块玻璃时，真正的时光隧道才骤然开启。玻璃之下，是清晰可见的古罗马街道遗址，厚重的石板路，千年前士兵和商贾走过的足迹仿佛还留有温度。这一刻的震撼是无声的：你脚下踩着21世纪的广场，眼前是16世纪的钟楼，而视线穿透地面，直达公元2世纪的罗马帝国边疆。这种时间的垂直堆叠感，是恩斯最无可替代的魔力。它不是一座被精心保护、与世隔绝的遗迹公园，而是一座活着的、呼吸着的、将辉煌历史作为地基的现代家园。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`走出恩斯火车站，扑面而来的并不是想象中的那种“古老”的、略带尘封的气味，而是一种混合了烘焙糕点的黄油香、咖啡香，以及被多瑙河支流恩斯河浸润过的、清冽的空气。沿着一条坡度平缓的、被岁月打磨得温润光滑的石板路向老城中心走去，耳边是叮当作响的电车声和人们用清脆奥地利德语交谈的片段。你很快就会忘记自己是在探访一个“博物馆式的”古城，因为生活气息太浓了——穿着冲锋衣、牵着狗的老人，橱窗里摆满精美蛋糕的咖啡馆，还有骑着自行车掠过的中学生。它就像一个再普通不过的、宜居的奥地利小镇。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然后，毫无预兆地，那座钟楼就出现了。它不像许多欧洲大教堂的钟楼那样与建筑群融为一体，而是孤傲地、挺拔地矗立在市政厅广场的一侧，通体是温暖的赭石色，顶部的绿色洋葱头穹顶在阳光下闪闪发光。它如此醒目，以至于你在老城的任何一条小巷里抬头，几乎都能望见它那指向苍穹的尖顶。当地人早已习惯了它的存在，在它脚下的长椅上读报、聊天，孩子们绕着它巨大的基座追逐嬉戏。这座钟楼，就是恩斯跳动的心脏和永恒的哨兵，守护着脚下这片土地上两千年的记忆。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你蹲下身，触摸广场地面上镶嵌的一块玻璃时，真正的时光隧道才骤然开启。玻璃之下，是清晰可见的古罗马街道遗址，厚重的石板路，千年前士兵和商贾走过的足迹仿佛还留有温度。这一刻的震撼是无声的：你脚下踩着21世纪的广场，眼前是16世纪的钟楼，而视线穿透地面，直达公元2世纪的罗马帝国边疆。这种时间的垂直堆叠感，是恩斯最无可替代的魔力。它不是一座被精心保护、与世隔绝的遗迹公园，而是一座活着的、呼吸着的、将辉煌历史作为地基的现代家园。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`恩斯`} />
                <InfoRow label="英文名称" value={`Enns`} />
                <InfoRow label="正式名称" value={`Town of Enns`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`恩斯（上奥地利州）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`恩斯是奥地利最早获得城市权利文书（1212年）的定居点，被视为奥地利最古老的城市，其历史可追溯至古罗马帝国在多瑙河畔的重要军事堡垒。`} />
                <InfoRow label="建筑特色" value={`城市天际线由一座高达60米的独立式文艺复兴风格钟楼（城市塔楼）主宰，它不依附于任何教堂，象征着中世纪城市的自治与骄傲。`} />
                <InfoRow label="建筑风格" value={`老城主体呈现出从中世纪哥特式到文艺复兴及巴洛克风格的和谐混搭，而地下的罗马遗迹则展现了典型的罗马军营规划。`} />
                <InfoRow label="文化价值" value={`这里是奥地利历史层层叠加的活态教科书，从罗马帝国的边疆、中世纪的商贸繁荣到近代的市民文化，在一个小镇的肌理中清晰可辨。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城区域全天开放。恩斯博物馆开放时间：周二至周日，上午10点至下午5点；周一闭馆。独立钟楼开放时间：每年4月1日至10月31日，每日上午10点至下午6点；冬季（11月至次年3月）仅周末及节假日开放，时间为上午11点至下午4点。具体时间可能因天气或维护临时调整，建议出行前查阅官网。`} />
              <InfoRow label="门票价格" value={`古城及古罗马遗迹区域免费参观。恩斯博物馆：成人票8欧元，学生及60岁以上老人票6欧元，家庭票（2大+最多3小）16欧元。独立钟楼登顶票：成人票5欧元，儿童票（6-15岁）3欧元。可购买博物馆+钟楼联票，价格为10欧元。6岁以下儿童免费。`} />
              <InfoRow label="地址" value={`Stadtplatz 1, 4470 Enns, Austria`} />
              <InfoRow label="交通方式" value={`从维也纳国际机场出发，最便捷的方式是乘坐火车。在机场火车站（Flughafen Wien Bahnhof）搭乘ÖBB（奥地利联邦铁路）区域列车（RJ或REX）前往林茨中央火车站（Linz Hauptbahnhof），车程约1小时20分钟，班次频繁，约半小时一班。抵达林茨后，在林茨中央火车站内换乘S-Bahn（S1或S2线）或区域巴士（约20-30分钟一班）前往恩斯，仅需15-20分钟即可到达恩斯火车站（Enns Bahnhof）。从火车站步行至老城中心（市政厅广场）仅需10分钟。建议使用ÖBB App提前购票查询时刻。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从遥远的罗马军团说起。大约在公元2世纪，强大的罗马帝国将其北部边疆推进到多瑙河一线。为了抵御河对岸日耳曼部落的侵扰，罗马人在这里修建了一座坚固的军营城堡，他们称之为“劳里亚库姆”。这不是一个临时营地，而是一个设施完备的永久性堡垒，里面有指挥官官邸、兵营、医院，甚至还有完善的排水系统。鼎盛时期，这里驻扎着多达6000名罗马士兵，是上多瑙河防线最重要的战略支点之一。商人和手工业者随之而来，在军营外围形成了繁荣的市镇，帝国的葡萄酒、橄榄油和精致陶器从这里输入，而北方的毛皮、琥珀则从这里南下。想象一下，近两千年前，这里的空气中弥漫着拉丁语的命令声、铁匠铺的叮当声，以及来自地中海的异国香料气味。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`罗马的荣光最终褪去，但生命并未离开这片土地。日耳曼部落在此定居，早期基督教社区在这里生根。到了中世纪，恩斯凭借其优越的河运位置，再次崛起为重要的贸易枢纽。1212年，巴本堡公爵利奥波德六世授予恩斯正式的城市特权，这份珍贵的文书至今保存，也让恩斯赢得了“奥地利最古老城市”的桂冠。财富的积累催生了城市的扩建和美化，哥特式的教堂和坚固的城墙拔地而起。然而，真正赋予恩斯今天这幅独一无二面孔的，是一场灾难后的新生。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`16世纪中叶，一场毁灭性的大火席卷了恩斯，老城中心的许多建筑化为灰烬。但坚韧的恩斯市民没有灰心，他们决定用更宏伟的方式重建自己的家园。1568年，一座前所未有的建筑开始动工——它不是教堂，也不是宫殿，而是一座纯粹为城市而建的钟楼。当时的统治者、神圣罗马帝国皇帝费迪南德一世给予了支持，但建造资金主要来自市民的募捐和城市的税收。这座高达60米的塔楼，采用了当时最时髦的文艺复兴风格，顶部是象征奥地利皇权的双头鹰徽章（后来改为市徽）。它的独立存在，是中世纪城市自治精神和市民骄傲最壮丽的宣言：看，我们的城市如此重要，值得拥有一座属于自己的、不依附于教会或领主的丰碑！`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`几个世纪的风雨和政治变迁中，恩斯见证了太多。拿破仑的军队曾在此驻扎，钟楼被用作瞭望塔；两次世界大战的阴影也曾掠过它绿色的穹顶。但它始终屹立不倒，就像一位沉默而坚定的历史见证者。二战后，随着考古学的进步，人们开始系统地发掘沉睡在地下的罗马遗产。上世纪六七十年代，一次大规模的城市管道工程成为了契机，考古学家们惊喜地发现了保存完好的罗马时期街道、建筑地基和无数生活用品。恩斯人没有选择将这些发现搬进博物馆封存，而是做出了一个充满智慧的决定：将它们就地保护，并以一种现代而直观的方式——比如在广场地面安装玻璃观察窗——融入当代的城市肌理。于是，古罗马的“劳里亚库姆”、中世纪的恩斯和现代的恩斯，完成了一场跨越千年的对话与融合。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味恩斯的层次感，建议安排一整天的悠闲时光。最佳抵达时间是早上九点前，此时旅游团还未涌入，老城刚刚苏醒，阳光斜射在钟楼上，光线最适合拍照。从火车站步行至市政厅广场开始你的旅程，先感受地面的罗马遗迹与空中钟楼的震撼对比。上午专注于钟楼登顶和广场周边的历史建筑，中午在广场边的传统餐馆享用一顿地道的奥地利午餐。下午则深入恩斯博物馆，系统了解城市历史，然后漫步至宁静的圣劳伦茨教堂和残留的古城墙段。傍晚时分，当游客散去，是再次回到广场，坐在咖啡馆外，看钟楼在落日余晖中变换色彩的最佳时刻。这样的节奏张弛有度，让你既能深入历史，又能捕捉到小镇日常生活的脉搏。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`钟楼内部楼梯非常狭窄且陡峭，上下楼时请务必小心，穿舒适的平底鞋是必须的。参观地下罗马遗迹的玻璃观察窗时，请注意地面湿滑，尤其在雨后。老城中心区域不大，完全可以步行探索，不建议开车进入，可将车停在城外的公共停车场。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨先从火车站沿着种满鲜花的赫尔曼街慢慢踱步，让石板路和两旁色彩柔和的中世纪房屋带你进入老城的节奏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在市政厅广场中心蹲下来，透过那块著名的玻璃地板，凝视下方沉默却生动的古罗马街道遗迹，触摸时间的断层。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`鼓起勇气攀登独立钟楼那狭窄的、回响着历史脚步声的螺旋石阶，在塔顶平台让360度的风吹拂脸庞，俯瞰红瓦屋顶的海洋与远方的田野河流。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到钟楼背后的恩斯博物馆，在那座精美的文艺复兴建筑里，花上一两个小时，从罗马铁钉到中世纪城市印章，亲手触摸历史的碎片。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从博物馆出来，拐进旁边静谧的凯尔大街，寻找那面镶嵌着古老日晷和精美壁画的房屋外墙，感受市民艺术的趣味。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午餐后，沿着宁静的河岸走向圣劳伦茨教堂，在哥特式的肋骨穹顶下静坐片刻，聆听风琴若有似无的试音。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过老城区西侧残存的、爬满藤蔓的古城墙和塔楼，想象它昔日环绕守护这座繁荣商埠的威严模样。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分，一定要在市政厅广场任意一家咖啡馆的露天座位坐下，点一杯Melange咖啡，看钟楼的阴影慢慢拉长，笼罩整个广场。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`钟楼脚下仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点前，站在广场东南角，用广角镜头仰拍，将赭石色的塔身、绿色穹顶和蓝天一同纳入构图，能拍出它的雄伟与独立感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`市政厅广场玻璃地窗俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个阳光能直射入地窗的午后，将相机镜头紧贴玻璃，对准下方的古罗马石板路，可以拍到清晰而充满时光感的遗迹细节。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老城小巷框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`在凯尔大街或施泰纳街，利用两侧色彩斑斓的房屋门廊或拱券作为天然画框，将远处耸立的钟楼顶纳入框中，形成绝妙的纵深与层次。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣劳伦茨教堂内部光影`}</h4>
                  <p className="text-sm text-gray-700">{`下午光线从西侧彩窗射入时，站在中殿侧面，捕捉光束穿透略显昏暗的哥特式殿堂，照亮空气中微尘的神圣瞬间。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`河边远眺城市天际线`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚日落前半小时，走到恩斯河对岸的步行小径上，回望老城，可以拍到钟楼与一片红瓦屋顶被金色夕阳勾勒的经典明信片角度。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在教堂内部拍照务必关闭闪光灯并保持安静，尊重正在祷告的信众。拍摄当地居民，尤其是店主或咖啡馆里的客人，请先微笑示意并获得同意，奥地利人很注重隐私。无人机飞行在奥地利历史遗迹上空有严格限制，在老城区飞行前务必查询当地法规并申请许可。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温馨家庭旅馆`}</h4>
                  <p className="text-sm text-blue-800">{`位于一栋17世纪老房子里的“金色太阳”旅馆，房间有着倾斜的木梁天花板和古董家具，老板娘会为你准备丰盛的自制早餐，果酱都是她亲手熬的。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史中心精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`就在市政厅广场一侧的“城市塔楼酒店”，部分房间的窗户正对着那座伟大的钟楼，清晨醒来，仿佛第一个任务就是与这位历史守望者互道早安。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`现代设计型住宿`}</h4>
                  <p className="text-sm text-yellow-800">{`由老城边缘一处工业建筑改造的“恩斯洛弗特”设计酒店， loft风格的空间里混搭着复古家具和现代艺术品，是历史氛围中一抹酷感的休憩地。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`郊外宁静庄园`}</h4>
                  <p className="text-sm text-purple-800">{`距离老城约3公里、坐落在葡萄园和小森林之间的“修道院庄园酒店”，由一座古老修道院建筑群修复而成，提供绝对静谧的田园环境和顶级的水疗服务。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`恩斯的旅游业相对小众，住宿数量有限，尤其在夏季周末或圣诞节市场期间，热门酒店很快订满，建议至少提前一个月预订。老城内的酒店虽然位置绝佳，但可能无法提供停车场，自驾客人需确认停车安排。小城治安极好，夜晚非常安静，可以放心散步。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开恩斯的时候，我的背包里没有多出什么纪念品，但脑海里却塞满了各种“图层”：罗马士兵皮凉鞋踩过的石板、中世纪商人马车碾过的车辙、文艺复兴时期石匠凿刻塔楼的叮当声、还有今天咖啡馆里飘出的拿铁蒸汽。这些图层没有杂乱地堆砌，而是被恩斯以一种优雅而清晰的方式，一层一层地展示给你看。它不像那些被过度修饰的旅游古镇，充满了表演性质的“古意”；它也不像那些孤零零的遗迹，只剩下苍凉供人凭吊。恩斯是活生生的，它的“古”是基石，它的“今”是在这基石上自然生长出的生活。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求快速消费、浮光掠影的时代，恩斯提供了一种珍贵的“深度阅读”体验。它告诉你，历史不是教科书里死去的章节，而是我们脚下正在站立的地方；文明不是断裂的，而是一条绵延不绝、时有起伏但从未真正干涸的长河。当你攀上钟楼，看着现代的有轨电车从古老的广场边缘驶过，那种奇妙的和谐感会深深打动你。来这里，不是为了收集一个“奥地利最古老城市”的打卡成就，而是为了上一堂关于时间、关于传承、关于一座社区如何与自己的千年记忆共存的，无比生动的课。这堂课，值得每一个渴望在旅行中触摸时光纹理的人，亲自来聆听。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
              <a href="/attractions/melk-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅尔克修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Melk Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/eisriesenwelt-ice-caves" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维尔芬冰洞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Eisriesenwelt</p>
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
