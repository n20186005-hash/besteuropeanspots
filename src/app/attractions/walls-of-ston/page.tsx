import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '斯通古城墙 Walls of Ston｜漫步欧洲“长城”，在盐田与海湾之间触摸中世纪史诗 - 最佳欧洲景点',
  description: '当你第一眼看到斯通城墙时，可能不会立刻感受到像中国长城那样的洪荒伟力，但你会被它那种与山海田园浑然一体的精妙所震慑。它不是突兀地耸立在荒野，而是优雅地从一座布满红瓦屋顶的小镇山丘上生长出来，然后像一道坚实的臂弯，紧紧搂住另一座小镇，中间则护卫着一片片在阳光下闪着耀眼白光的方格——那是自中世纪就开始运...',
}

export default function WallsOfStonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '斯通古城墙', href: '/attractions/walls-of-ston' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`斯通古城墙・Walls of Ston・克罗地亚・斯通（Ston）， 属杜布罗夫尼克-内雷特瓦县`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你第一眼看到斯通城墙时，可能不会立刻感受到像中国长城那样的洪荒伟力，但你会被它那种与山海田园浑然一体的精妙所震慑。它不是突兀地耸立在荒野，而是优雅地从一座布满红瓦屋顶的小镇山丘上生长出来，然后像一道坚实的臂弯，紧紧搂住另一座小镇，中间则护卫着一片片在阳光下闪着耀眼白光的方格——那是自中世纪就开始运作的盐田。海风带着咸涩又清新的气味扑面而来，夹杂着远处松林的芬芳。
爬上城墙的步道，脚下的石灰岩砖石被无数旅人的脚步打磨得温润。你的左手边是宁静的、蓝得像绿松石一样的马利-斯通海湾，几艘小船随波轻摇；右手边，则是那片有着千年历史的盐田，几何状的盐池在正午的阳光下仿佛巨大的调色板，从浅粉到纯白，色彩微妙地变化着。耳边只有风声、自己的呼吸声，或许还有几声从下方小镇广场传来的模糊人语。你会突然觉得，这堵墙不是隔阂，而是一位沉默的守护者，它保护的不是战争，而是一种珍贵的生活方式和财富源泉——盐。
在本地人心里，这堵墙就是他们家园的脊梁。你会看到老年人在城墙根下慢悠悠地散步，孩子们在城门附近追逐嬉戏。它早已褪去烽火硝烟的紧张感，融入了日常的脉动。傍晚时分，当夕阳把整条城墙染成金黄色，当地人会指着那些坚固的塔楼，自豪地讲述祖先的故事。它最打动人心的魅力，正在于这种双重性：既是令人惊叹的军事工程奇观，又是一幅活生生的、人与自然共处了数百年的和谐画卷。站在这里，你触摸的不是一块冰冷的石头，而是一段被海盐浸润的、有温度的历史。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你第一眼看到斯通城墙时，可能不会立刻感受到像中国长城那样的洪荒伟力，但你会被它那种与山海田园浑然一体的精妙所震慑。它不是突兀地耸立在荒野，而是优雅地从一座布满红瓦屋顶的小镇山丘上生长出来，然后像一道坚实的臂弯，紧紧搂住另一座小镇，中间则护卫着一片片在阳光下闪着耀眼白光的方格——那是自中世纪就开始运作的盐田。海风带着咸涩又清新的气味扑面而来，夹杂着远处松林的芬芳。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`爬上城墙的步道，脚下的石灰岩砖石被无数旅人的脚步打磨得温润。你的左手边是宁静的、蓝得像绿松石一样的马利-斯通海湾，几艘小船随波轻摇；右手边，则是那片有着千年历史的盐田，几何状的盐池在正午的阳光下仿佛巨大的调色板，从浅粉到纯白，色彩微妙地变化着。耳边只有风声、自己的呼吸声，或许还有几声从下方小镇广场传来的模糊人语。你会突然觉得，这堵墙不是隔阂，而是一位沉默的守护者，它保护的不是战争，而是一种珍贵的生活方式和财富源泉——盐。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在本地人心里，这堵墙就是他们家园的脊梁。你会看到老年人在城墙根下慢悠悠地散步，孩子们在城门附近追逐嬉戏。它早已褪去烽火硝烟的紧张感，融入了日常的脉动。傍晚时分，当夕阳把整条城墙染成金黄色，当地人会指着那些坚固的塔楼，自豪地讲述祖先的故事。它最打动人心的魅力，正在于这种双重性：既是令人惊叹的军事工程奇观，又是一幅活生生的、人与自然共处了数百年的和谐画卷。站在这里，你触摸的不是一块冰冷的石头，而是一段被海盐浸润的、有温度的历史。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`斯通古城墙`} />
                <InfoRow label="英文名称" value={`Walls of Ston`} />
                <InfoRow label="正式名称" value={`The Walls of Ston`} />
                <InfoRow label="国家" value={`克罗地亚`} />
                <InfoRow label="城市" value={`斯通（Ston）， 属杜布罗夫尼克-内雷特瓦县`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这是欧洲现存最庞大、最复杂的防御工事系统之一，与杜布罗夫尼克城墙齐名，共同守护着历史上强大的拉古萨共和国（杜布罗夫尼克共和国）的财富命脉——盐田。`} />
                <InfoRow label="建筑特色" value={`一条长达5.5公里的坚固石墙，蜿蜒连接起斯通和马利-斯通两座小镇，其上耸立着40座塔楼和5座堡垒，宛如一条沉睡的白色石龙，横卧在碧蓝海湾与古老盐田之间。`} />
                <InfoRow label="建筑风格" value={`以中世纪哥特式防御建筑风格为主，融合了后续的文艺复兴及巴洛克时期的加固与修缮元素，体现了实用至上的军事建筑智慧。`} />
                <InfoRow label="文化价值" value={`它不仅是冷冰冰的军事工程，更是拉古萨共和国经济实力、政治远见和社群凝聚力的永恒象征，见证了盐——“白色黄金”如何塑造了整个地区的文明与历史。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年开放，但城墙步道（Walk the Walls）的开放时间随季节调整。通常夏季（5月至10月）为上午8:00至晚上7:30，最后入场时间在关门前一小时。冬季（11月至次年4月）开放时间缩短，通常为上午9:00至下午3:00，且可能因恶劣天气临时关闭。节假日（如圣诞节、元旦）可能全天关闭，建议出行前务必查询官网或当地旅游信息中心。`} />
              <InfoRow label="门票价格" value={`步行游览城墙的票价约为15欧元（约合120库纳）。提供家庭票、团体票优惠。持有杜布罗夫尼克城市卡有时可享折扣。参观城墙下的盐田博物馆需额外购票，联票更划算。6岁以下儿童免费。`} />
              <InfoRow label="地址" value={`Walls of Ston, 20230 Ston, Croatia`} />
              <InfoRow label="交通方式" value={`从克罗地亚首都萨格勒布或主要国际机场（如杜布罗夫尼克机场）出发，最便捷的方式是自驾。沿D8亚得里亚海公路行驶，风景绝佳。从杜布罗夫尼克老城出发，自驾约1小时即可抵达斯通，沿途会经过风景如画的佩列沙茨半岛。公共交通稍显周折：可从杜布罗夫尼克主巴士站乘坐前往斯通或奥雷比奇的大巴，班次约为每天4-6班，车程约1.5小时，务必提前查好返程时间。大巴站就在小镇入口，下车后步行几分钟即可到达城墙脚下。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解斯通城墙为何如此宏伟，你必须先了解盐对于中世纪亚得里亚海岸意味着什么。早在14世纪以前，斯通地区的盐田就是整个巴尔干半岛最重要的盐产地之一。当时统治这里的拉古萨共和国，一个以杜布罗夫尼克为中心的航海贸易强国，其惊人的财富有很大一部分就来自这“白色的金子”。盐不仅是保鲜食物的必需品，更是硬通货。想象一下，没有冰箱的时代，谁控制了盐，谁就掌握了贸易和生存的命脉。于是，保护这片盐田，就成了共和国最要紧的国防大事。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最初的木质防御工事显然不够看。1333年，当拉古萨共和国正式从塞尔维亚帝国手中购得斯通地区后，一项雄心勃勃的工程便启动了。共和国倾注巨资，召集了最好的石匠和工程师，决心建造一座“永不陷落”的防线。建造过程持续了整个14世纪，甚至更久。他们借鉴了杜布罗夫尼克城墙的经验，但设计更为宏大。城墙不仅仅要保护斯通小镇，还要将几公里外的马利-斯通镇也连起来，确保整个盐田生产区和两个居民点都在保护圈内。这堵墙是共和国经济实力的直接体现，每一块石头都仿佛在说：“看，我们多富有，多强大。”`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，坚固的城墙并非一直安然无恙。在它建成后的几个世纪里，面临过无数次威胁。来自奥斯曼帝国的压力始终悬在头顶，附近的波斯尼亚领主也对这片宝地虎视眈眈。1667年，杜布罗夫尼克遭遇大地震，损失惨重，但斯通城墙却奇迹般地大体完好，继续履行着它的职责。它见证了共和国与威尼斯、与奥斯曼帝国之间的纵横捭阖，也见证了海上贸易的起起落落。墙上的每一处修补痕迹，可能都是一次小型冲突或岁月侵蚀的证明。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时光流转到19世纪初，拉古萨共和国在拿破仑的铁蹄下终结。随着现代战争方式的改变，高耸的石墙逐渐失去了军事意义。它一度被忽视，甚至部分城墙的石材被当地人拆去修建房屋。这仿佛是许多古建筑共同的命运，从荣耀走向荒芜。但斯通人骨子里对这份遗产的珍视从未消失。上世纪中期，人们开始重新认识到它的历史与文化价值。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最近的几十年，尤其是克罗地亚独立后，大规模的修复工程让这条“石龙”重获新生。今天的我们能够安全地在城墙上行走，俯瞰那依然在生产海盐的盐田，全靠现代工匠们精心地“缝合”历史的伤口。当你抚摸墙砖，新旧石材的接缝清晰可辨，这本身就是一段故事——关于毁灭与重生，关于遗忘与铭记。斯通城墙不再用于防御入侵的军队，但它开始抵御另一种侵蚀：时间的遗忘。它站在那里，本身就是一部用石头写就的、关于生存、财富与守护的史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要充分领略斯通城墙的精华，我强烈建议你安排大半天的时间（4-5小时）。最佳抵达时间是清晨9点前，这时旅游大巴还未抵达，阳光也相对柔和，适合拍照和悠闲攀登。游览节奏宜慢不宜快，这是一条需要用心感受的徒步路线。整体路线将从斯通小镇的主城门开始，先向西北方向攀登至最高点的堡垒，然后沿着城墙脊背一路向马利-斯通镇进发，最后下城墙，漫步到盐田边，完成一次从防御工事到生产核心的完整时空穿越。这样的安排能让你先经历攀登的震撼，再享受漫步的惬意，最后在盐田的宁静中回味。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城墙步道大部分暴露在阳光下，且石阶陡峭，务必穿着舒适防滑的徒步鞋，并携带足量饮用水、帽子和防晒霜。部分城墙段落没有护栏或护栏很低，带小孩的游客需格外小心看护。尽量避免在盛夏正午时分攀登，那会是一场对体力的严酷考验。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从斯通镇气势恢宏的主城门“Velika vrata”进入，摸一摸那厚重的木门和吊闸的滑轨，感受一下中世纪守卫的视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着陡峭而古老的石阶向山顶的“大卡西奥堡垒”进发，在气喘吁吁的回头瞬间，收获斯通红瓦老城与远处海湾同框的奖励性全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在城墙最高处的堡垒垛口，让清冽的海风灌满胸膛，俯瞰脚下如棋盘格般整齐划一、闪耀着不同光泽的千年盐田。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着如巨龙脊背般起伏的城墙向马利-斯通镇漫步，仔细观赏沿途每一座塔楼的独特造型，并想象哨兵在此驻守的日与夜。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在马利-斯通镇的城墙终点“Koruna堡垒”稍作停留，从这里可以欣赏到与起点截然不同的、更加开阔的海湾与远山景色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从马利-斯通一端走下城墙，务必去小镇中心的“盐田博物馆”逛一逛，了解海盐如何从海水变成晶莹的颗粒，完成知识的补完。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回程不必原路返回城墙，沿着盐田边缘的宁静小路走回斯通镇，近距离观察盐工的工作，甚至亲手触摸一下温暖的盐堆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后在斯通镇找一家临海的餐厅，点上一盘用本地海盐调味的、刚打捞上来的牡蛎，用味觉为这场旅程画上完美的句号。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`斯通主城门内侧仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`上午八九点，阳光刚好照亮城门拱顶的内壁，站在门内向上拍摄，能捕捉到巨石建筑的压迫感与光影的戏剧性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从“大卡西奥堡垒”向东拍摄盐田`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚光线倾斜时，盐田的水位和结晶状态会形成迷人的纹理与倒影，用长焦镜头可以压缩出极具几何美感的画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`在城墙中段向马利-斯通方向拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，顺光拍摄蜿蜒的城墙如同白色丝带引向远处的堡垒与碧蓝海湾，这是最具代表性的“长城”全景机位。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`马利-斯通镇海滩回望城墙`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，走到小镇的海滩上，以礁石或小船为前景，拍摄被金色夕阳笼罩的整段城墙与山丘的剪影。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`盐田边缘的劳作场景`}</h4>
                  <p className="text-sm text-gray-700">{`如果有幸看到盐工收盐，不妨用尊重的方式远距离记录，那些在白色盐山背景下劳作的身影，是活着的文化遗产。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机拍摄前，务必确认当地最新法规，因为城墙是受保护的文化遗产，可能有飞行限制。拍摄当地盐工时，请先微笑示意并获得对方默许，尊重他们的隐私和工作。偏振镜在这里非常有用，可以减少盐田水面的反光，让色彩更饱和。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`盐田边的宁静公寓`}</h4>
                  <p className="text-sm text-blue-800">{`租住马利-斯通镇一套能看到盐田与海湾的公寓，清晨在阳台就能看到粉色的朝霞洒满整个盐田，夜晚无比静谧。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`斯通老城内的石头屋民宿`}</h4>
                  <p className="text-sm text-green-800">{`入住由数百年历史老宅改造的民宿，体验厚重的石墙带来的凉爽与安宁，出门就是热闹的餐厅和城墙入口。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`佩列沙茨半岛上的精品设计酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`如果追求更奢华的体验，可以选择驱车15分钟范围内的半岛酒店，通常拥有无边泳池和顶级葡萄酒窖，享受现代舒适与古典风光的结合。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`杜布罗夫尼克往返的便利选择`}</h4>
                  <p className="text-sm text-purple-800">{`如果行程紧张，可将杜布罗夫尼克作为基地，当日往返斯通，这样能同时体验两个世界遗产，但会牺牲掉斯通宁静的晨昏时光。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（7-8月）是绝对旺季，斯通本地的住宿很快会被订满，至少提前三个月预订是明智之举。如果选择住在斯通或马利-斯通，晚上餐饮选择相对有限但更地道，大部分餐厅都供应 phenomenal 的本地牡蛎和葡萄酒。小镇治安非常好，可以放心夜游。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开斯通很久以后，我闭上眼睛，脑海里浮现的往往不是城墙那壮观的轮廓，而是一些细微的片段：手指触摸粗糙石灰岩时那温热又坚实的触感，海风里那股独特的、混合了咸盐、松针与海藻的复杂气息，还有盐田里浅浅水面上掠过的一只白鹭的影子。这堵墙教会我的，是深度旅行的真谛——不仅仅是看到，更是去理解事物之间的联结。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求即时满足、打卡就跑的快节奏世界里，斯通城墙是一种“反叛”。它要求你付出汗水去攀登，它邀请你用缓慢的步调去丈量，它没有炫目的声光秀，只有沉默的石头和亘古不变的山海。但正是在这种沉默的行走中，你会听见历史深处的声音：石匠的凿击、守卫的脚步声、运盐车辆的吱呀声、还有共和国元老们关于如何守护子民与财富的辩论。它不仅仅是一处景点，更是一个完整的生态系统，是防御、生产、居住和谐共存的古老范本。来这里，你是在阅读一首用石头、海水和人类汗水共同写成的立体史诗。对于任何厌倦了浮光掠影、渴望触摸历史真实纹理的旅人来说，斯通古城墙都值得你专程而来，用一整天的时间，与这条“石龙”一起，静静地面朝大海，思索关于守护与传承的永恒话题。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/trogir-historic-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特罗吉尔历史古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trogir</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sibenik-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    希
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">希贝尼克老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Šibenik Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/zadar-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    扎
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">扎达尔老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Zadar Old Town</p>
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
