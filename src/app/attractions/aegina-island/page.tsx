import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '艾伊纳岛 Aegina｜雅典附近的神庙之岛与开心果之乡 - 最佳欧洲景点',
  description: '船刚驶离比雷埃夫斯港的喧嚣，爱琴海的风就换了味道。雅典卫城的雄浑被海盐的清新和一丝隐约的、烤坚果的甜香取代。大约四十分钟，当你还沉浸在海鸥的鸣叫和船舷划开碧波的节奏里时，一个被橄榄树和松林覆盖的温柔轮廓就出现在了前方。这就是艾伊纳岛给你的第一印象——不像那些遥远的海岛充满异域感，它就像一个亲切的邻居',
}

export default function AeginaIslandPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '艾伊纳岛', href: '/attractions/aegina-island' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`艾伊纳岛・Aegina・希腊・埃伊纳市（Aegina Town），阿提卡大区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`船刚驶离比雷埃夫斯港的喧嚣，爱琴海的风就换了味道。雅典卫城的雄浑被海盐的清新和一丝隐约的、烤坚果的甜香取代。大约四十分钟，当你还沉浸在海鸥的鸣叫和船舷划开碧波的节奏里时，一个被橄榄树和松林覆盖的温柔轮廓就出现在了前方。这就是艾伊纳岛给你的第一印象——不像那些遥远的海岛充满异域感，它就像一个亲切的邻居，带着一身阳光和家常气息，静静守望着咫尺之外的雅典。码头上，摩托车的引擎声、渔民收网的吆喝声、咖啡馆里银勺碰杯的脆响交织在一起，空气中弥漫着浓稠的咖啡香和……对，就是开心果的香气，那种被阳光烘焙过的、带着油脂感的独特芬芳，无处不在。
穿过热闹的滨海大道向岛内走，绿意渐浓。当你沿着蜿蜒的山路爬上一座松林覆盖的山丘，世界忽然安静下来。然后，它毫无征兆地出现在眼前——阿法埃娅神庙。它不是卫城那样雄踞于城市之巅的君王，而是深藏在山林怀抱中的隐士。十几根多立克巨柱挺拔而立，历经两千五百年风雨，石头的肌理在正午的阳光下呈现出蜂蜜般温润的金色。风吹过柱顶，发出低沉悠长的呜咽，仿佛山林在叹息。站在这里，你能同时看到远处蔚蓝的爱琴海和更远处雅典城的朦胧轮廓，古人选址的智慧令人拍案：这里既是献给女神的圣域，也是一个绝佳的了望点，守护着海上航道。
而这座岛的魔力在于，它从不让你只停留在古老的石头里。下山回到港口小镇，生活触手可及。那些彩色的新古典主义建筑外墙剥落，却更显风情。你一定会被路边无数小店吸引，玻璃罐里堆满了各种口味的开心果——原味的、盐焗的、裹了蜂蜜的，甚至还有开心果酱和开心果酒。这不是旅游纪念品，这是岛上的血液。和任何一个店主聊天，他都会自豪地告诉你，艾伊纳的开心果是“最好的”，因为独特的火山土壤和干燥气候。在这里，神话与日常、神圣与世俗、古老的石柱与香甜的坚果，以一种奇妙又和谐的方式共存，构成了一个完整、生动、有温度的希腊。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "船刚驶离比雷埃夫斯港的喧嚣，爱琴海的风就换了味道。雅典卫城的雄浑被海盐的清新和一丝隐约的、烤坚果的甜香取代。大约四十分钟，当你还沉浸在海鸥的鸣叫和船舷划开碧波的节奏里时，一个被橄榄树和松林覆盖的温柔轮廓就出现在了前方。这就是艾伊纳岛给你的第一印象——不像那些遥远的海岛充满异域感，它就像一个亲切的邻居，带着一身阳光和家常气息，静静守望着咫尺之外的雅典。码头上，摩托车的引擎声、渔民收网的吆喝声、咖啡馆里银勺碰杯的脆响交织在一起，空气中弥漫着浓稠的咖啡香和……对，就是开心果的香气，那种被阳光烘焙过的、带着油脂感的独特芬芳，无处不在。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "穿过热闹的滨海大道向岛内走，绿意渐浓。当你沿着蜿蜒的山路爬上一座松林覆盖的山丘，世界忽然安静下来。然后，它毫无征兆地出现在眼前——阿法埃娅神庙。它不是卫城那样雄踞于城市之巅的君王，而是深藏在山林怀抱中的隐士。十几根多立克巨柱挺拔而立，历经两千五百年风雨，石头的肌理在正午的阳光下呈现出蜂蜜般温润的金色。风吹过柱顶，发出低沉悠长的呜咽，仿佛山林在叹息。站在这里，你能同时看到远处蔚蓝的爱琴海和更远处雅典城的朦胧轮廓，古人选址的智慧令人拍案：这里既是献给女神的圣域，也是一个绝佳的了望点，守护着海上航道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而这座岛的魔力在于，它从不让你只停留在古老的石头里。下山回到港口小镇，生活触手可及。那些彩色的新古典主义建筑外墙剥落，却更显风情。你一定会被路边无数小店吸引，玻璃罐里堆满了各种口味的开心果——原味的、盐焗的、裹了蜂蜜的，甚至还有开心果酱和开心果酒。这不是旅游纪念品，这是岛上的血液。和任何一个店主聊天，他都会自豪地告诉你，艾伊纳的开心果是“最好的”，因为独特的火山土壤和干燥气候。在这里，神话与日常、神圣与世俗、古老的石柱与香甜的坚果，以一种奇妙又和谐的方式共存，构成了一个完整、生动、有温度的希腊。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`艾伊纳岛`} />
                <InfoRow label="英文名称" value={`Aegina`} />
                <InfoRow label="正式名称" value={`Aegina`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`埃伊纳市（Aegina Town），阿提卡大区`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`爱琴海萨罗尼克湾最重要的古代圣地之一，其神庙是理解古希腊建筑与神话演变的珍贵钥匙。`} />
                <InfoRow label="建筑特色" value={`阿法埃娅神庙以其近乎完美的比例和独特的双柱廊设计闻名，是古希腊多立克柱式从古朴走向成熟的典范。`} />
                <InfoRow label="建筑风格" value={`古希腊多立克柱式。`} />
                <InfoRow label="文化价值" value={`一座岛串联起神话、建筑、农业与航海生活，是体验“活的希腊”而非仅凭吊古迹的完美切片，见证了古希腊文明从古朴时期向古典时期过渡的关键艺术与宗教演变。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`阿法埃娅神庙考古遗址：夏季（4月1日至10月31日）每日 8:00 - 20:00；冬季（11月1日至3月31日）每日 8:30 - 15:30。全年主要节假日（如1月1日、3月25日、复活节周日、12月25-26日）闭馆。岛上的城镇、港口及开心果园则全天开放，但果园参观建议提前联系农场主预约。`} />
              <InfoRow label="门票价格" value={`阿法埃娅神庙遗址：全票8欧元，优惠票4欧元（适用于欧盟学生及65岁以上欧盟公民）。冬季（11月1日至3月31日）的每月第一个周日免费开放。岛上其他景点如圣内克塔里奥斯修道院免费，部分私人开心果园的导览体验需额外付费（约10-15欧元）。`} />
              <InfoRow label="地址" value={`阿法埃娅神庙：Aphaia Temple, 180 10, Aegina, Greece
埃伊纳市港口：Port of Aegina, Aegina Town 180 10, Greece`} />
              <InfoRow label="交通方式" value={`从雅典出发，最便捷的方式是前往比雷埃夫斯港（Piraeus Port）乘坐渡轮。高速水翼船（Flying Dolphin）约40分钟即可抵达艾伊纳岛，单程票价约15欧元，班次密集（高峰时段每半小时一班）。传统大型渡轮约1小时20分钟，单程票价约10欧元，可搭载车辆。建议通过“Ferryhopper”等在线平台提前购票，避免旺季港口排队。抵达艾伊纳港口后，前往阿法埃娅神庙可乘坐公交车（约20分钟车程，票价约2欧元，班次每小时1-2班），或租一辆小摩托（岛上游玩最灵活的方式）。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "艾伊纳岛的故事，比大理石更古老，比神话更曲折。在宙斯、赫拉和波塞冬争夺领地之前，岛上可能就供奉着一位古老的地母神。后来，神话将这里与一位名叫阿法埃娅的宁芙仙女联系在一起，传说她为逃避克里特国王米诺斯的追求，跳入大海，被渔网在此岛救起，从此成为岛上的守护女神。但在更深的层面上，“阿法埃娅”这个名字可能源自“光”或“照亮”，暗示着她是一位与光明、生育和狩猎相关的古老神祇。公元前6世纪，当艾伊纳岛凭借其强大的海军和贸易网络，成为爱琴海最早的海上霸权之一和最早的铸币城邦时，岛民决定为他们伟大的守护神建造一座配得上其荣光的庙宇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一座神庙大约建于公元前570年，但不幸被焚毁。我们今天看到的辉煌遗迹，建于公元前500年左右，那正是希腊文明的“黎明时刻”。有趣的是，它的建造时间恰好早于雅典卫城的帕特农神庙大约50到70年。很多学者相信，帕特农神庙的建筑师伊克提诺斯曾仔细研究过阿法埃娅神庙的精妙比例。走进神庙遗址，你依然能感受到那种开创性的雄心：它采用了罕见的“双柱廊”设计（前后各六根，两侧各十二根），让内部空间既庄严又通透。山墙上的雕塑群更是无价之宝（现存慕尼黑雕塑博物馆），描绘了希腊人与特洛伊人的战斗，其人物姿态已摆脱古风时期的僵硬，开始展现动态和情感，是从古朴风格向古典主义飞跃的活化石。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史的浪潮无情。就在神庙建成后不久，艾伊纳的宿敌雅典迅速崛起。经过长期的竞争和冲突，公元前456年，雅典人强迫艾伊纳岛民拆除了城墙，交出了舰队，这个曾经的海上强国就此衰落。神庙的香火也逐渐冷清。在随后的罗马时代、拜占庭时代乃至威尼斯和奥斯曼帝国统治时期，神庙被遗弃在山林中，石材被当地人拆去建造房屋或烧制石灰，巨大的柱楣轰然倒地，被尘土和松针掩埋。直到1811年，一群英国建筑师和德国考古学家“重新发现”了它，那些倾倒的巨柱才再次震惊世界。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "十九世纪二十年代，在希腊独立战争期间，艾伊纳岛曾短暂成为新生的希腊国家的第一个首都（1826-1828年）。现代岛民的生活则与另一种“黄金果实”——开心果紧密相连。据说开心果树是在十九世纪中叶被引入岛上的，却意外地在这片贫瘠但富含矿物质的火山土地上找到了天堂，成为岛屿的经济命脉和文化符号。今天的阿法埃娅神庙，经过精心的保护和局部修复，静静地屹立在山丘上。它不再有血腥的祭牲，取而代之的是游客好奇的目光和学者测量仪器的微光。它见证了一个城邦的荣耀与陨落，也见证了神话如何让位给历史，而生活，就像那些顽强生长在神庙遗址石缝间的野花和开心果树，总是在废墟上重新开始。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天的深度探索，最好是乘坐清晨8点左右从比雷埃夫斯出发的高速船，这样能避开一日游的人流高峰，拥有更清静的体验。整体的节奏应该是“先神圣，后世俗”：上午精力充沛时探访山巅的神庙，感受其肃穆与壮观；中午下山回到埃伊纳市，融入当地生活，享用海鲜午餐并探寻开心果的美味；下午可以选择轻松的海滩时光或深入内陆的开心果园。傍晚时分，一定要留给港口日落的绚丽色彩。这样的安排张弛有度，能全方位感受艾伊纳岛历史与生活的双重魅力。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`参观神庙务必穿一双舒适耐走的鞋子，山路多碎石且日照强烈，防晒帽和水壶是必需品。
岛上出租车对游客报价可能虚高，尽量使用公交车或提前谈好价格的摩托车租赁服务。
如果想参观真正的开心果园并进行采摘体验，务必提前一天通过酒店或旅游信息中心预约，切勿自行闯入私人农场。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨乘船抵达埃伊纳港，先别急着扎进咖啡馆，直接在码头边的公交站跳上开往阿法埃娅神庙的早班车。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着松林间的古老神道步行上山，让神庙的立柱从树梢间逐渐显露的全景成为这趟朝圣之旅的隆重开场。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花至少一个小时绕行神庙遗址，用手触摸那些粗糙温润的石基，抬头从不同角度仰望柱廊切割出的蓝天。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后回到埃伊纳市，钻进老城迷宫般的小巷，寻找那些门口摆满藤筐、售卖当天捕捞海鲜的朴素小馆吃午饭。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要去一家传统的“开心果作坊”商店，不只为购买，更是为了品尝和听店主讲述他们家族与这种坚果的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`租一辆小摩托或搭乘本地巴士，前往岛屿东海岸如清澈见底的马拉索纳斯海滩，跳进爱琴海洗去一身暑气与历史的尘埃。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前回到港口，找一家海滨咖啡馆的外摆座位，点一杯乌佐酒，看夕阳将白色的船桅、彩色的房子和阿法埃娅神庙所在的山丘染成一片金黄。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`神庙东侧山坡仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，站在遗址东侧下方的山坡上，用长焦镜头压缩空间，将巍峨的多立克立柱与作为背景的深蓝色爱琴海一同纳入画面，构图极具史诗感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`中殿柱廊光影`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光垂直洒落时，走进神庙内部，寻找那些倒塌的巨大柱楣石块，拍摄阳光在古老石面上形成的强烈明暗对比与几何纹理，突出历史的沧桑质感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`埃伊纳港渔船阵列`}</h4>
                  <p className="text-sm text-gray-700">{`清晨七点前或傍晚渔船归港时，在港口防波堤上拍摄一排排随着波浪轻轻摇晃的彩色小渔船，背景是晨雾或晚霞中的小镇建筑，充满生活气息。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`开心果树园细节特写`}</h4>
                  <p className="text-sm text-gray-700">{`下午前往岛屿内陆的果园，贴近那些虬结苍老的开心果树树干，或在收获季节拍摄农民手中捧着的、还裹着淡粉色果衣的新鲜开心果，用微距展现自然的馈赠。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`神庙内部虽然允许拍照，但严禁使用无人机，且避免使用闪光灯，以免对古老石材造成损害。`}</li>
                <li>• {`拍摄当地渔民或商店店主时，请务必先微笑示意并征得对方同意，这是基本的尊重。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`海港风情民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在埃伊纳市老码头边一栋翻新的船长之家里，推开木窗就能看到船只进出，夜晚在阳台听着轻柔的海浪声入眠。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老城静谧庭院旅馆`}</h4>
                  <p className="text-sm text-green-800">{`藏身于远离海滨主干道的宁静小巷，由一座十九世纪豪宅改造，拥有一个种满九重葛和茉莉花的秘密庭院，早餐是女主人自制的开心果蛋糕。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`乡村传统农庄`}</h4>
                  <p className="text-sm text-yellow-800">{`如果想彻底逃离喧嚣，可以选择岛内村庄如Kypseli附近的家庭农庄，住在简朴但干净的石屋里，早晨被驴叫声和果园的清香唤醒。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计感海滨别墅`}</h4>
                  <p className="text-sm text-purple-800">{`在远离主镇的Agia Marina海滩区，有几栋现代设计的私人别墅，拥有无边泳池和直面海景的露台，适合追求私密与奢华体验的旅行者。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（6-9月）是绝对旺季，住宿需提前至少两个月预订，尤其是周末，价格也会水涨船高。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃伊纳市治安良好，夜晚出行也很安全，但选择偏远农庄时最好确认有可靠的交通工具或房东接送服务。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开艾伊纳岛的时候，我的背包里除了几袋香甜的开心果，还装满了复杂的感触。这里没有那种令人窒息的、仅供仰望的宏伟。相反，它提供了一种可亲近的永恒。阿法埃娅神庙的石头是冷的，但它矗立的山丘是温暖的，被松涛和海风轻抚着；神话传说已经缄默，但空气里弥漫的坚果香气却无比真实地诉说着当下的丰饶。这座岛像一个智慧的老人，它经历了巅峰与谷底，看惯了霸权更迭，最终把一切都沉淀为山坡上宁静的柱廊和生活中具体而微的甜蜜。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当今这个追求瞬时刺激和打卡效率的快节奏世界里，艾伊纳岛的存在是一种温柔的抵抗。它告诉你，深度旅行不仅仅是看更多的景点，而是允许自己在一个地方慢下来，去感受历史层理与现代生活是如何交织在一起的。去理解一根两千五百年的石柱和一颗今年秋天刚收获的开心果，承载的是同一种对生存的执着与对美好的祈愿。它离雅典那么近，却仿佛隔着整个古典世界的沉思距离。对于任何想真正触摸希腊灵魂，而非仅仅收集明信片风景的旅人来说，艾伊纳岛不是旅程的补充，它本身就是答案——一个关于时间、 resilience 与生活本身的小而美的答案。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/xanthi-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克桑西古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Xanthi Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/epidaurus-theatre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃皮达鲁斯古剧场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Epidaurus Theatre</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/meteora" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迈措翁</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Meteora</p>
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
