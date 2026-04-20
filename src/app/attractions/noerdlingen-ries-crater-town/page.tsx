import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '讷德林根 Nördlingen｜住在1500万岁陨石坑里的完整中世纪小镇 - 最佳欧洲景点',
  description: '当我第一次听说要去一个“住在陨石坑里的小镇”时，脑海里浮现的是科幻片里的场景。但火车缓缓驶入讷德林根车站，窗外是巴伐利亚州最典型的那种宁静田园风光——缓坡、农田、小树林，没有丝毫异样。直到我走出车站，抬头看见那堵完整得令人难以置信的深色石头城墙，以及城墙后面密密麻麻挤在一起的、戴着红色“帽子”的老房...',
}

export default function NoerdlingenRiesCraterTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '讷德林根（陨石坑小镇）', href: '/attractions/noerdlingen-ries-crater-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`讷德林根（陨石坑小镇）・Nördlingen・德国・讷德林根`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当我第一次听说要去一个“住在陨石坑里的小镇”时，脑海里浮现的是科幻片里的场景。但火车缓缓驶入讷德林根车站，窗外是巴伐利亚州最典型的那种宁静田园风光——缓坡、农田、小树林，没有丝毫异样。直到我走出车站，抬头看见那堵完整得令人难以置信的深色石头城墙，以及城墙后面密密麻麻挤在一起的、戴着红色“帽子”的老房子尖顶时，一种奇妙的错位感才击中了我：这里太“正常”了，正常得就像一个从童话里直接搬出来的、完美无缺的中世纪小镇模型。你完全感觉不到自己正站在一个直径25公里的、地球伤疤的中心。
穿过厚重的、带着铁质包边的“勒丁根门”，时间仿佛“噗”一声被调慢了五百年。脚下的石板路被磨得光滑发亮，空气中飘着刚出炉的“雪球”点心的甜香、咖啡豆的焦香，还有从老建筑木梁深处渗出来的、淡淡的岁月气息。穿着皮裤的本地老人坐在街角长椅上晒太阳，自行车铃叮当作响。城墙在这里不是遥远的遗迹，它就是后院的围墙。你会看到居民家的窗户直接开在城墙垛口旁，阳台上种着天竺葵，仿佛那绵延近三公里的厚重历史，只是他们日常生活里一道最亲切的背景墙。
而这一切宁静日常的魔法核心，来自那个被称为“丹尼尔”的教堂塔楼。当你穿过弯弯曲曲的小巷，突然来到集市广场，它就这样毫无预兆地、近乎霸道地耸立在你面前。90米高的哥特式尖塔，用一种沉稳而仁慈的姿态，俯视着整个红色屋顶的海洋。你知道吗？建造它的石头里，镶嵌着数百万颗微小的钻石——那是陨石撞击时，瞬间的高温高压将当地石材中的碳挤压成的。所以，讷德林根人常说，他们的塔楼，是整个宇宙中唯一一座用“星辰尘埃”筑成的守望者。它不仅在历史上为城镇预警火灾和敌情，更在哲学意义上，守护着这个社区与一次惊天动地的宇宙事件之间，那种幽默又深刻的联结。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当我第一次听说要去一个“住在陨石坑里的小镇”时，脑海里浮现的是科幻片里的场景。但火车缓缓驶入讷德林根车站，窗外是巴伐利亚州最典型的那种宁静田园风光——缓坡、农田、小树林，没有丝毫异样。直到我走出车站，抬头看见那堵完整得令人难以置信的深色石头城墙，以及城墙后面密密麻麻挤在一起的、戴着红色“帽子”的老房子尖顶时，一种奇妙的错位感才击中了我：这里太“正常”了，正常得就像一个从童话里直接搬出来的、完美无缺的中世纪小镇模型。你完全感觉不到自己正站在一个直径25公里的、地球伤疤的中心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过厚重的、带着铁质包边的“勒丁根门”，时间仿佛“噗”一声被调慢了五百年。脚下的石板路被磨得光滑发亮，空气中飘着刚出炉的“雪球”点心的甜香、咖啡豆的焦香，还有从老建筑木梁深处渗出来的、淡淡的岁月气息。穿着皮裤的本地老人坐在街角长椅上晒太阳，自行车铃叮当作响。城墙在这里不是遥远的遗迹，它就是后院的围墙。你会看到居民家的窗户直接开在城墙垛口旁，阳台上种着天竺葵，仿佛那绵延近三公里的厚重历史，只是他们日常生活里一道最亲切的背景墙。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而这一切宁静日常的魔法核心，来自那个被称为“丹尼尔”的教堂塔楼。当你穿过弯弯曲曲的小巷，突然来到集市广场，它就这样毫无预兆地、近乎霸道地耸立在你面前。90米高的哥特式尖塔，用一种沉稳而仁慈的姿态，俯视着整个红色屋顶的海洋。你知道吗？建造它的石头里，镶嵌着数百万颗微小的钻石——那是陨石撞击时，瞬间的高温高压将当地石材中的碳挤压成的。所以，讷德林根人常说，他们的塔楼，是整个宇宙中唯一一座用“星辰尘埃”筑成的守望者。它不仅在历史上为城镇预警火灾和敌情，更在哲学意义上，守护着这个社区与一次惊天动地的宇宙事件之间，那种幽默又深刻的联结。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`讷德林根（陨石坑小镇）`} />
                <InfoRow label="英文名称" value={`Nördlingen`} />
                <InfoRow label="正式名称" value={`Nördlingen`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`讷德林根`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座完好保存在1500万年前形成的巨大陨石坑正中心，并拥有完整中世纪城墙的独一无二的“帝国自由城市”。`} />
                <InfoRow label="建筑特色" value={`近乎完美的圆形城墙包围着由红色瓦顶、木筋房构成的迷宫般老城，城市轮廓线由高耸的圣乔治教堂主导，其塔楼被称为“丹尼尔”。`} />
                <InfoRow label="建筑风格" value={`以中世纪晚期和文艺复兴时期的木筋结构房屋为主，教堂为哥特式风格，防御工事（城墙、塔楼、城门）保存了中世纪鼎盛时期的原貌。`} />
                <InfoRow label="文化价值" value={`是理解德国南部“浪漫之路”上“帝国自由城市”历史、社区生活以及地质事件如何深刻塑造人类居住地的绝佳活化石。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇本身全天开放。核心景点“丹尼尔”塔楼（St. Georgs Kirche）开放时间：4月至10月 每天上午9:00至下午6:00；11月至3月 每天上午10:00至下午5:00。圣诞节前夕及元旦前夕会提前关闭。城墙步道全年全天24小时免费开放。`} />
              <InfoRow label="门票价格" value={`小镇无需门票。登“丹尼尔”塔楼：成人4欧元，优惠票（学生、团体等）3欧元，家庭票10欧元。城墙步道免费。小镇内的“里斯陨石坑博物馆”门票：成人5欧元，优惠票4欧元。`} />
              <InfoRow label="地址" value={`Marktplatz 1, 86720 Nördlingen, Germany`} />
              <InfoRow label="交通方式" value={`从慕尼黑中央火车站乘坐Regional-Express（RE）火车，约2小时直达讷德林根火车站，每小时至少一班车。从法兰克福或斯图加特出发，通常需要在多瑙沃特或安斯巴赫换乘一次，总时长约2.5-3小时。火车站就位于城墙脚下，出站后步行3分钟即可穿过城门进入老城中心。自驾的话，小镇被A7和B25公路环绕，城外有多个免费或收费低廉的大型停车场（P+R），非常方便。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`讷德林根的故事，必须从一次“天崩地裂”开始讲起。大约1500万年前，一颗直径约1.5公里的小行星，以每秒超过20公里的速度，呼啸着砸向今天德国南部的这片土地。撞击释放的能量相当于180万颗广岛原子弹，瞬间蒸发了大量的岩石，形成了一个深达数百米、直径25公里的巨坑——里斯陨石坑。尘埃落定后，坑内逐渐被湖泊填充，沉积物一层层覆盖了那个毁灭的瞬间。时光抚平了伤痕，森林和草原重新生长，人类也踏足了这里。早期的定居者，只是觉得这片土地异常肥沃，盆地地形易于防守，他们完全不知道，自己正站在一个古老星球伤口的正中央。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`中世纪早期，讷德林根开始作为贸易驿站兴起。它位于几条重要商路的交汇处，特别是“罗马之路”上。到了1215年，它被神圣罗马帝国皇帝腓特烈二世授予了市场权，财富开始积累。真正改变它命运的，是1288年，国王鲁道夫一世正式授予它“帝国自由城市”的地位。这意味着它直接效忠于皇帝，而非任何地方领主，拥有自治权、司法权和铸币权。获得自由身的讷德林根迅速繁荣起来，羊毛和纺织品贸易让它富甲一方。有钱了，第一件事就是把自己保护起来。从1327年开始，市民们用坚实的砂岩，修建了今天我们看到的这座周长2.6公里、带有5座城门、11座塔楼和2座堡垒的完整城墙。这不是国王下令修建的防御工事，这是市民们为了保护自己的家园和财富，一砖一瓦自掏腰包建造的“社区盾牌”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城墙建好了，信仰的灯塔也不能矮。小镇原有的罗马式教堂已经配不上城市的雄心。从1427年开始，他们决定建造一座配得上“帝国自由城市”身份的宏伟教堂——圣乔治教堂。建造过程长达一个世纪，最终在1505年，那座标志性的90米高哥特式塔楼“丹尼尔”竣工。它不仅是当时的技术奇迹，更成为了整个社区的精神坐标。然而，平静富足的日子在十七世纪被残酷打断。1634年，三十年战争中的一场决定性战役——讷德林根战役就在城墙外打响。瑞典-新教联军与天主教帝国军队血战，战火波及城内，教堂塔楼被炮弹击中，留下了至今可见的伤痕。城市一度衰落，但它顽强地存活了下来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战后，讷德林根慢慢恢复，但它的政治重要性随着帝国的瓦解而消失，反而因此逃过了大规模工业改造，将其中世纪的风貌近乎“冻结”般保存了下来。时间快进到1960年，两位美国地质学家尤金·舒尔德和爱德华·肖，在研究这里的岩石样本时，发现了只有极端撞击才会产生的柯石英和超石英。这个震惊学界的发现终于揭开了谜底：原来整个小镇，都坐在一个巨大的陨石坑里！建造房屋和城墙的采石场，就在坑的边缘，石头里自然包含了撞击的痕迹。这个迟到了1500万年的“身份认证”，让讷德林根从一座美丽的古镇，一跃成为地质学上的圣地。当地人欣然接受了这个设定，幽默地将自己称为“陨石坑居民”，并把这段宇宙往事，深深织入了今天小镇的每一条导览、每一块路牌和每一个微笑里。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要彻底感受讷德林根的“双核魅力”——完美的中世纪氛围与深邃的地质历史，强烈建议安排一整天时间。最佳抵达时间是清晨9点前，这时旅游团还未涌入，阳光斜射，城墙和木筋房的色彩最为柔和动人。整个游览节奏应该是“先宏观看圈，再微观探点”。早上精力充沛，先用2-2.5小时完成城墙全程环游，从物理和心理上建立起对小镇格局的整体认知。中午回到老城中心，在集市广场周边午餐，并登顶“丹尼尔”塔楼，在制高点印证早上的所见。下午则深入小巷，参观博物馆，品味细节，感受本地生活。这样由外而内、由上至下的动线，能让你像剥洋葱一样，层层揭开这座小镇的独特灵魂。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周日上午教堂有礼拜活动，登塔和参观内部会受限，尽量避开这个时间段。小镇石板路多且不平，务必穿一双舒适防滑的鞋子。城墙步道有些段落没有护栏，拍照时务必注意脚下安全。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从“勒丁根门”进入，立刻右转爬上城墙步道，迎着朝阳完成一段东侧城墙的漫步，看阳光为红色屋顶海镀上金边。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城墙的“造箭塔”附近停下，仔细触摸墙体粗糙的砂岩，想象它们来自陨石坑的边缘，指尖划过的是1500万年的时空。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从“德林根门”走下城墙，一头扎进老城北部迷宫般的小巷，寻找那些外墙上画着精美壁画、有着扭曲木筋的文艺复兴时期商人豪宅。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回到集市广场，在“丹尼尔”塔楼脚下那家老字号面包房买一个撒满糖粉的“雪球”点心，然后鼓起勇气攀登365级螺旋台阶直达塔顶观景台。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在塔顶的呼啸风声中，俯瞰整个完美的圆形城市轮廓和远处陨石坑边缘形成的缓坡环形山，直观感受“身在坑中”的奇妙地理。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下来后参观圣乔治教堂内部，寻找那架著名的、由1705根音管组成的精美巴洛克风琴，并静坐片刻感受宁静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午前往“里斯陨石坑博物馆”，在那些闪闪发光的岩石标本和模拟撞击的动画前，理解脚下土地的非凡起源。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分，再次登上西侧的城墙段，等待落日将整个小镇和远处的“丹尼尔”塔楼染成温暖的蜂蜜色，看窗户里陆续亮起温馨的灯火。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城墙“造箭塔”拐角处向西拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到日落时分，阳光从侧面照亮连绵的木筋房山墙和远处的教堂塔楼，能拍出极具纵深感和中世纪氛围的经典街景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“丹尼尔”塔楼顶观景台向南拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗无雾的上午，使用广角镜头可以捕捉到老城红色屋顶如波浪般蔓延至圆形城墙脚下，并清晰拍到远处陨石坑边缘的森林轮廓线。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老城“下街”的某个小巷口仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，寻找一条狭窄的小巷，抬头拍摄两侧色彩斑斓的木筋房将天空挤压成一条蓝色丝带，焦点对准房屋细节和悬挂的招牌。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`陨石坑博物馆附近的“观景点”`}</h4>
                  <p className="text-sm text-gray-700">{`位于城墙外西南方向的小丘上，黄昏时分前往，可以拍到小镇全景沐浴在金色夕照中，城墙的几何轮廓与自然景观形成鲜明对比。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以增强红色屋顶和蓝天白云的对比度。航拍能完美展现小镇的圆形布局和陨石坑地形，但务必提前查清当地无人机法规。拍摄居民或私人庭院时，请先礼貌询问。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`城墙内的家庭式客栈`}</h4>
                  <p className="text-sm text-blue-800">{`住在由16世纪木筋房改造的客栈里，木头楼梯吱呀作响，房间窗户正对着内庭花园或宁静的小巷，早餐是女主人自制的果酱和新鲜面包。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史酒店体验`}</h4>
                  <p className="text-sm text-green-800">{`位于集市广场一侧，建筑本身就有500年历史，房间拥有古老的木梁天花板和现代舒适的设施，晚上可以听着广场喷泉的水声入睡。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`陨石坑边缘的田园旅舍`}</h4>
                  <p className="text-sm text-yellow-800">{`住在城墙外不远处、陨石坑缓坡上的安静旅舍，房间拥有无敌的视野，可以远眺整个小镇像模型一样坐落在盆地中心，夜晚星空格外清晰。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`浪漫之路骑行者驿站`}</h4>
                  <p className="text-sm text-purple-800">{`如果你是骑行“浪漫之路”的旅人，可以选择这家专为骑行者服务的友好旅馆，提供安全的单车库存、维修工具和丰盛的巴伐利亚能量早餐。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇非常安全宁静，夜晚城墙上的照明灯会亮起，氛围绝佳但步行道光线较暗，晚归建议带个小手电。旺季（夏季和圣诞市场期间）住宿紧张，务必提前数月预订。选择城墙内的住宿，意味着你将成为“瓮城”里的一部分，深度融入中世纪的城市肌理。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开讷德林根许久，那个画面依然清晰：我站在“丹尼尔”塔楼的顶端，手指拂过栏杆上粗糙的石头。向导说，这里面有无数微小的钻石，是星辰的碎片。那一刻我突然觉得，这不正是这座小镇最深刻的隐喻吗？一次狂暴的、足以毁灭一切的宇宙撞击，在千万年后，竟成了庇护一个人类社区的温柔盆地；那些飞溅的、致命的星尘，竟凝固成了一座守望家园的塔楼。讷德林根教会我的，是一种极致的“转化”智慧——关于创伤如何沉淀为沃土，意外如何塑造了独一无二的命运。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求崭新、高速和颠覆的世界里，讷德林根的存在像一首沉稳的古老歌谣。它不急于告诉世界自己有多么惊世骇俗的地质背景，它只是从容地过着自己的日子：面包房每天清晨飘出香气，钟楼每个整点敲响报时，市民们依然在祖先建造的城墙下散步遛狗。它将一次星球级的灾难，活成了一段日常的、温暖的社区传奇。来这里，你不是为了观看一个奇观，而是为了体验一种“完整性”——一个物理空间与人类历史、地质时间与生活日常完美交织的、活生生的样本。它让你相信，无论脚下的土地经历过多么戏剧性的过去，生命总能找到一种方式，在此扎根，并歌唱。这就是为什么，每一个对深度旅行有渴望的人，都应该来一次讷德林根，触摸一下这些“星辰筑成的石头”，感受时间与存在，可以如此厚重，又如此轻盈。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/schwaebisch-hall" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施瓦本哈尔古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Schwäbisch Hall Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/wuerzburg-residence" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维尔茨堡主教宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Würzburg Residence</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bad-wimpfen" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴特温普芬</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bad Wimpfen</p>
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
