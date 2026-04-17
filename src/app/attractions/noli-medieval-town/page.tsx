import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '诺利 Noli｜意大利隐秘的“第六个”海洋共和国，时光停驻的红砖海滨古城 - 最佳欧洲景点',
  description: '朋友，想象一下，你刚从那个小小的、仿佛玩具一样的火车站走出来，穿过一条短短的隧道，眼前豁然开朗的瞬间——不是高楼，不是车流，而是一整片温暖的、像被夕阳亲吻过的砖红色。那就是诺利给你的第一眼拥抱。空气里是地中海特有的、混着咸味海风和淡淡百里香的气息，海浪有节奏地拍打着卵石沙滩，哗啦，哗啦，声音古老而清...',
}

export default function NoliMedievalTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '诺利', href: '/attractions/noli-medieval-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`诺利・Noli・意大利・诺利`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，你刚从那个小小的、仿佛玩具一样的火车站走出来，穿过一条短短的隧道，眼前豁然开朗的瞬间——不是高楼，不是车流，而是一整片温暖的、像被夕阳亲吻过的砖红色。那就是诺利给你的第一眼拥抱。空气里是地中海特有的、混着咸味海风和淡淡百里香的气息，海浪有节奏地拍打着卵石沙滩，哗啦，哗啦，声音古老而清澈。脚下是光滑的、被无数代人踩踏得发亮的石板路，窄得几乎只能容两人并肩，阳光在高耸的建筑夹缝中切出一道道金色的光柱，尘埃在里面跳舞。
这里没有游客的喧嚣，你耳边响起的，是当地老太太从阳台上探出身，用利古里亚方言喊孙子的声音；是咖啡馆里银勺碰着陶瓷杯壁的清脆叮当；是渔夫在小港口整理渔网时，尼龙绳摩擦的沙沙声。古城就紧贴着海岸线，像一艘搁浅了几个世纪的巨大红砖船只。生活在这里的人们，依然在这些中世纪建筑里进进出出，在古老的拱门下骑着自行车，在曾经瞭望敌情的塔楼下晾晒着床单。历史不是博物馆里的陈列品，而是他们晾衣绳上飘扬的衬衫，是他们窗台上盛开的天竺葵。
诺利最打动人心的，是一种近乎固执的“完整性”。它没有被后来时代浮夸的巴洛克或新古典主义建筑“污染”，从海上看过来，那一片连绵的、有着锯齿状轮廓的红砖天际线，几乎和十四世纪的版画一模一样。它袖珍，却五脏俱全：你有城堡雄踞山巅，有塔楼守卫街巷，有教堂安抚心灵，有港口连接世界。它不是景点，而是一个依然在用古老的节奏呼吸的有机体。漫步其中，你会感觉自己不小心闯入了一个被时光遗忘的平行世界，这里衡量时间的单位不是分秒，而是潮汐的涨落和教堂钟声的鸣响。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，想象一下，你刚从那个小小的、仿佛玩具一样的火车站走出来，穿过一条短短的隧道，眼前豁然开朗的瞬间——不是高楼，不是车流，而是一整片温暖的、像被夕阳亲吻过的砖红色。那就是诺利给你的第一眼拥抱。空气里是地中海特有的、混着咸味海风和淡淡百里香的气息，海浪有节奏地拍打着卵石沙滩，哗啦，哗啦，声音古老而清澈。脚下是光滑的、被无数代人踩踏得发亮的石板路，窄得几乎只能容两人并肩，阳光在高耸的建筑夹缝中切出一道道金色的光柱，尘埃在里面跳舞。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里没有游客的喧嚣，你耳边响起的，是当地老太太从阳台上探出身，用利古里亚方言喊孙子的声音；是咖啡馆里银勺碰着陶瓷杯壁的清脆叮当；是渔夫在小港口整理渔网时，尼龙绳摩擦的沙沙声。古城就紧贴着海岸线，像一艘搁浅了几个世纪的巨大红砖船只。生活在这里的人们，依然在这些中世纪建筑里进进出出，在古老的拱门下骑着自行车，在曾经瞭望敌情的塔楼下晾晒着床单。历史不是博物馆里的陈列品，而是他们晾衣绳上飘扬的衬衫，是他们窗台上盛开的天竺葵。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`诺利最打动人心的，是一种近乎固执的“完整性”。它没有被后来时代浮夸的巴洛克或新古典主义建筑“污染”，从海上看过来，那一片连绵的、有着锯齿状轮廓的红砖天际线，几乎和十四世纪的版画一模一样。它袖珍，却五脏俱全：你有城堡雄踞山巅，有塔楼守卫街巷，有教堂安抚心灵，有港口连接世界。它不是景点，而是一个依然在用古老的节奏呼吸的有机体。漫步其中，你会感觉自己不小心闯入了一个被时光遗忘的平行世界，这里衡量时间的单位不是分秒，而是潮汐的涨落和教堂钟声的鸣响。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`诺利`} />
                <InfoRow label="英文名称" value={`Noli`} />
                <InfoRow label="正式名称" value={`Noli`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`诺利`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`曾与威尼斯、热那亚、比萨等比肩的独立海洋共和国（1192-1797），是意大利历史上最迷你的海滨共和国之一。`} />
                <InfoRow label="建筑特色" value={`依山傍海，密集的红色砖石建筑群、高耸的防御塔楼与碧海蓝天形成强烈视觉对比。`} />
                <InfoRow label="建筑风格" value={`利古里亚沿海地区的罗马式与哥特式风格为主，带有浓厚的热那亚影响，以当地烧制的红砖为主要建材。`} />
                <InfoRow label="文化价值" value={`一座活生生的中世纪城市标本，完美保留了作为独立城邦时期的城市布局、防御体系与社区生活气息。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城及街道区域全天开放。主要历史建筑（如圣帕拉戈里奥城堡、卡斯特尔维奇奥塔）通常在夏季（4月至9月）每日上午10点至下午6点开放，冬季（10月至3月）开放时间缩短或仅周末开放，建议行前查询当地旅游信息中心确认。海边长廊和沙滩全年无休。`} />
              <InfoRow label="门票价格" value={`进入古城本身免费。攀登至圣帕拉戈里奥城堡或参观塔楼等特定古迹可能需要支付少量费用，约3-5欧元。部分教堂免费参观，但欢迎捐款。`} />
              <InfoRow label="地址" value={`17026 Noli, Province of Savona, Italy`} />
              <InfoRow label="交通方式" value={`最近的机场是热那亚的哥伦布机场，约70公里。最推荐的方式是火车：从热那亚火车站乘坐开往文蒂米利亚方向的区域火车，约1小时车程，在诺利站下车。火车站极小，出站后穿过地下通道，步行5分钟即可进入古城中心。火车班次频繁，约每小时一班，建议在意铁官网或车站直接购票。自驾可将车停在古城入口附近或海边的收费停车场，古城内为ZTL限行区，严禁外来车辆驶入。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲诺利的故事，我们得把时钟拨回一千年前。那时候，它只是利古里亚海边一个不起眼的小渔村，人们靠海吃海，在陡峭的山坡上建起简单的石屋。转折点发生在海盗频繁袭扰的年代，为了自保，村民们不得不往山上迁移，并开始修筑防御工事。它的命运在1192年被彻底改写——凭借精明的外交手腕和作为重要渔港（尤其是沙丁鱼贸易）积累的财富，诺利成功地与强大的热那亚共和国签订条约，获得了事实上的自治权，跻身于那个时代最显赫的“海洋共和国”俱乐部。想想看，一个如此微小的地方，竟与威尼斯、热那亚、比萨、阿马尔菲这些巨头并列，这需要何等的勇气与智慧？`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`成为共和国后，诺利进入了黄金时代。它制定了详尽的海事法典，拥有自己的货币和舰队。那些我们今天看到的、赋予诺利独特面貌的红砖塔楼，正是在这个时期如雨后春笋般竖立起来。鼎盛时期有足足72座！这些塔楼不仅是财富和家族地位的象征，更是迷宫般街巷里的防御节点，一旦有外敌从海上或陆地入侵，市民们可以迅速通过这些塔楼进行联络和抵抗。你能想象当时的天际线吗？那是一片由红色尖塔组成的森林，在阳光下熠熠生辉，向整个地中海宣告着这个微型巨人的骄傲。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，小国的生存从来都如履薄冰。它的历史充满了在强权夹缝中求生存的戏剧性。它时而与热那亚结盟，时而又与萨沃伊公爵眉来眼去，甚至与遥远的法国国王建立关系，这一切都只为保住那珍贵的自治。它经历过围城、瘟疫和海上竞争。但真正让它褪去独立光环的，是拿破仑的铁蹄。1797年，随着法兰西第一共和国的军队席卷亚平宁半岛，存在了六百多年的诺利共和国被并入利古里亚共和国，最终成为撒丁王国，乃至统一后意大利的一部分。它的政治生命结束了，但奇迹般地，它的物理形态却被近乎完整地保存了下来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`或许是因为偏离了后来的主要交通干线，或许是因为经济重心转移，诺利就此“沉睡”了。工业化的大潮和战后的建设狂潮几乎绕过了它。这种“被遗忘”，反而成了它最大的幸运。那些红砖建筑没有为了拓宽马路而被推倒，古老的街巷格局没有被现代网格规划取代。它就像一枚被完美保存在琥珀里的昆虫，每一个细节都定格在它最辉煌的时代。今天的诺利人，就生活在这枚巨大的“琥珀”里，守护着祖先留下的每一条拱廊、每一块砖石，并将那份源于海洋共和国的独立与自豪感，转化为了对家园深沉而静谧的热爱。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要彻底感受诺利的灵魂，我强烈建议你至少留出一整天的时间。最好的抵达时间是清晨，趁大批一日游游客尚未从附近海滩涌来之前。上午用充沛的体力去探索山丘和城堡，感受它的军事威严；下午沉浸在中世纪街巷的迷宫中，体会它的市井生活；傍晚则留给海滩和落日，回味它的海洋情怀。游览节奏一定要慢，这里不适合打卡，只适合迷路和发呆。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿一双绝对舒适的平底鞋，那些石板路和上山步道对高跟鞋是灾难。夏季中午阳光暴晒，城堡和塔楼毫无遮阴，务必做好防晒并带足水。古城内餐馆不多且价格稍高，想节约预算可以走到火车站附近寻找更接地气的披萨店或熟食店。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从古城主入口的“罗马门”进入，立刻让自己迷失在那些以拱廊相连、光影交错的“ carruggi ”（利古里亚方言：窄巷）之中。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着时而出现的“Salita al Castello”（通往城堡之路）指示牌，开始沿着古老的步道向上攀登，途中回望，视野逐渐开阔，湛蓝的地中海像一幅慢慢展开的画卷。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上圣帕拉戈里奥城堡的废墟，绕着城墙走一圈，想象哨兵在此眺望热那亚或萨沃伊舰队来袭时的紧张心情。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后直奔卡斯特尔维奇奥塔，爬上这座保存最完好的中世纪塔楼顶端，从另一个角度俯瞰红砖屋顶的海洋和错综复杂的街巷网络。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在塔楼脚下的“Piazza delle Erbe”（草药广场）找一家露天咖啡馆坐下，点一杯意式浓缩，看当地人在古老的水井边闲聊。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午去探访圣帕拉西奥教堂，走进去感受那份属于共和国主座教堂的庄严，留意那些褪色但依旧精美的壁画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着“Via Aurelia”古罗马大道遗迹漫步到小港口，看色彩斑驳的渔船随着波浪轻轻摇晃，呼吸浓烈的海盐与渔网气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`黄昏时分，一定要走到古城西侧卵石海滩的尽头，坐在一块大石头上，看着夕阳将整个诺利从温暖的砖红色染成深邃的金紫色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`卵石海滩西端长焦拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，用长焦镜头压缩空间，将层叠的红砖房屋、教堂钟楼与背景的山丘城堡全部收纳进一幅画面，海面会泛起金色波光。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从圣帕拉戈里奥城堡向下俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点前，阳光角度最佳，可以清晰拍出古城建筑群密集的肌理、蜿蜒的小巷以及远处的地平线，充满几何美感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`卡斯特尔维奇奥塔楼梯窗框构图`}</h4>
                  <p className="text-sm text-gray-700">{`攀登塔楼内部时，注意那些狭小的石窗，以窗为画框，拍摄窗外对面建筑的一角或一片屋顶，形成有趣的景中景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`Via delle Torri 拱廊光影`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点左右，阳光斜射入有连续拱廊的街道，形成强烈的明暗交替，等待一个当地人骑车或走过的瞬间，捕捉动态的生活剪影。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`港口逆光渔船特写`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，在港口侧逆光位置拍摄停泊的渔船细节，湿漉漉的船体、堆叠的渔网和绳索在逆光下会呈现出丰富的质感与轮廓光。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用广角镜头在狭窄巷子里拍摄时，可以尝试低角度仰拍，将天空和建筑线条一同纳入，更具张力。尊重当地居民隐私，避免将镜头直接对准他人窗户或私人庭院内部。无人机飞行在意大利历史中心区通常有严格限制，放飞前务必查清当地法规。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`古城心脏体验`}</h4>
                  <p className="text-sm text-blue-800">{`入住由13世纪贵族宫殿改造的精品酒店，房间保留了原始的拱顶石墙和厚木门，清晨在私人庭院里享用早餐，仿佛自己是共和国时代的某位议员。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`海景阳台之选`}</h4>
                  <p className="text-sm text-green-800">{`位于古城边缘一栋色彩柔和的楼房里，房间不大但带一个俯瞰整个海湾和古堡的小阳台，是伴着海浪声入睡、被海鸥叫声唤醒的绝佳位置。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`田园山居别苑`}</h4>
                  <p className="text-sm text-yellow-800">{`如果你有车，可以选择古城后方橄榄园中的农庄民宿，由石头农舍改建，环境极其静谧，主人会奉上自产的橄榄油和葡萄酒，夜晚星空璀璨。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济型温馨客栈`}</h4>
                  <p className="text-sm text-purple-800">{`火车站附近由家庭经营的温馨小旅馆，房间干净明亮，主人热情好客，会给你手绘地图并推荐只有本地人才知道的小餐馆，性价比极高。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古城内的住宿数量非常有限，且多为历史建筑，夏季务必提前数月预订。选择古城外的住宿时，注意确认步行至古城中心的距离，因为停车始终是个挑战。诺利治安极好，夜晚独自在巷弄中行走也感觉安全，但基本的财物保管意识仍需保持。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开诺利许久后，我脑海中反复回味的，不是某个具体的建筑细节，而是一种整体的、安宁的“氛围感”。在这个什么都要追求“更大、更快、更响亮”的世界里，诺利的存在本身，就是一种温柔的反叛。它自豪地展示着自己的“小”，并把这“小”经营得如此丰富、完整、自给自足。它告诉你，伟大未必需要庞大的疆域和轰鸣的机器，也可以源于对社区的精耕细作，对传统的顽固守护，以及对家园每寸土地发自肺腑的热爱。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`对于每一位厌倦了浮光掠影、渴望触摸历史真实纹理的旅人来说，诺利都是一剂心灵的解药。它不会用炫目的艺术珍品轰炸你，而是邀请你慢下来，用脚步丈量时间的厚度，用呼吸感受生活的本真。在这里，你能真切地体会到，历史不是教科书上冰冷的知识点，而是一堵依然温暖的墙，一条依然有人行走的路，一种依然在延续的生活方式。当你坐在海边的石头上，看着夕阳将这座红砖古城染成一片赤金，你会明白，有些地方，存在的意义就是为了证明：时光可以流淌，但有些美好，能够选择停留。这，或许就是深度旅行所能带给我们的，最珍贵的礼物。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/ostuni-the-white-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥斯图尼</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ostuni</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/castiglione-del-lago-trasing-eno-lake" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡斯蒂廖内-德尔拉戈</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Castiglione del Lago</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/aragon-castle-ischia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    伊
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">伊斯基亚阿拉贡城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Aragonese Castle of Ischia</p>
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
