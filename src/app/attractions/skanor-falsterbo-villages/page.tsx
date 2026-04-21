import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '斯堪诺法尔斯特布 Skanör-Falsterbo｜瑞典最南端的童话彩色木屋与候鸟奇观 - 最佳欧洲景点',
  description: '车子刚从主干道拐进通往法尔斯特布的小路，世界就好像被调慢了速度。空气里那股咸咸的、带着海藻清新和松针微苦的味道，瞬间摇下了车窗。第一眼望去，你会被一种温柔的秩序感击中——不是宏伟的宫殿，也不是陡峭的峡湾，而是无边无际的、低矮的彩色小木屋。它们像被孩童精心排列的积木，奶油黄、淡藕荷、瓦蓝、砖红，每一座...',
}

export default function SkanorFalsterboVillagesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '瑞典', href: '/destinations/sweden' },
            { label: '斯科讷省，维灵厄市', href: '/destinations/sweden' },
            { label: '斯堪诺与法尔斯特布双子镇', href: '/attractions/skanor-falsterbo-villages' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`斯堪诺与法尔斯特布双子镇・Skanör-Falsterbo・瑞典・斯科讷省，维灵厄市`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚从主干道拐进通往法尔斯特布的小路，世界就好像被调慢了速度。空气里那股咸咸的、带着海藻清新和松针微苦的味道，瞬间摇下了车窗。第一眼望去，你会被一种温柔的秩序感击中——不是宏伟的宫殿，也不是陡峭的峡湾，而是无边无际的、低矮的彩色小木屋。它们像被孩童精心排列的积木，奶油黄、淡藕荷、瓦蓝、砖红，每一座都小巧别致，被漆得鲜亮，却奇妙地和谐共存。柏油路很快变成了沙石小径，两旁是高大的篱笆和怒放的绣球花，寂静中只听到你自己的脚步声和远处隐约的海浪白噪音。这里没有匆忙的游客，只有骑着自行车去面包房的老爷爷，或是推着婴儿车在木栈道上散步的年轻父母。生活，在这里呈现出一种被海风熨帖过的、慵懒而健康的质地。
走到海滩，景象豁然开朗。这是一片令人心旷神怡的、近乎白色的绵长沙滩，向着两侧延伸，直到视线尽头与天际线融为一体。波罗的海在这里显得格外宁静，是那种淡淡的灰绿色。赤脚踩在细沙上，冰凉而坚实。最迷人的，是那一排排直接建在沙滩上的更衣木屋，它们比镇里的别墅更简朴，却色彩斑斓，门楣上挂着褪色的浮标或船桨，诉说着家族夏日传统的代代相传。你会看到人们裹着毛巾从里面出来，毫不在意初秋的凉意，大笑着冲向海水，那是一种根植于北欧人骨子里的、对自然元素的坦然拥抱。
傍晚时分，建议你从法尔斯特布那标志性的红白灯塔开始，沿着海岸线慢慢往斯堪诺老镇方向走。左手是海，右手是沙丘和一片被称为“Falsterbo Peninsula”的珍稀鸟类保护区。如果你在春秋季到来，或许能邂逅一场无声的盛大迁徙——成千上万的猛禽、鹳鸟和鸣禽在此盘旋、歇脚，天空被羽翼划出无形的轨迹。当地观鸟者支着望远镜，低声交流，那份专注与虔诚，仿佛在进行一场古老的仪式。这时你会明白，这里的核心魅力不止于视觉的糖果色，更在于一种人与荒野、季节与生命循环之间深刻而宁静的对话。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子刚从主干道拐进通往法尔斯特布的小路，世界就好像被调慢了速度。空气里那股咸咸的、带着海藻清新和松针微苦的味道，瞬间摇下了车窗。第一眼望去，你会被一种温柔的秩序感击中——不是宏伟的宫殿，也不是陡峭的峡湾，而是无边无际的、低矮的彩色小木屋。它们像被孩童精心排列的积木，奶油黄、淡藕荷、瓦蓝、砖红，每一座都小巧别致，被漆得鲜亮，却奇妙地和谐共存。柏油路很快变成了沙石小径，两旁是高大的篱笆和怒放的绣球花，寂静中只听到你自己的脚步声和远处隐约的海浪白噪音。这里没有匆忙的游客，只有骑着自行车去面包房的老爷爷，或是推着婴儿车在木栈道上散步的年轻父母。生活，在这里呈现出一种被海风熨帖过的、慵懒而健康的质地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走到海滩，景象豁然开朗。这是一片令人心旷神怡的、近乎白色的绵长沙滩，向着两侧延伸，直到视线尽头与天际线融为一体。波罗的海在这里显得格外宁静，是那种淡淡的灰绿色。赤脚踩在细沙上，冰凉而坚实。最迷人的，是那一排排直接建在沙滩上的更衣木屋，它们比镇里的别墅更简朴，却色彩斑斓，门楣上挂着褪色的浮标或船桨，诉说着家族夏日传统的代代相传。你会看到人们裹着毛巾从里面出来，毫不在意初秋的凉意，大笑着冲向海水，那是一种根植于北欧人骨子里的、对自然元素的坦然拥抱。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`傍晚时分，建议你从法尔斯特布那标志性的红白灯塔开始，沿着海岸线慢慢往斯堪诺老镇方向走。左手是海，右手是沙丘和一片被称为“Falsterbo Peninsula”的珍稀鸟类保护区。如果你在春秋季到来，或许能邂逅一场无声的盛大迁徙——成千上万的猛禽、鹳鸟和鸣禽在此盘旋、歇脚，天空被羽翼划出无形的轨迹。当地观鸟者支着望远镜，低声交流，那份专注与虔诚，仿佛在进行一场古老的仪式。这时你会明白，这里的核心魅力不止于视觉的糖果色，更在于一种人与荒野、季节与生命循环之间深刻而宁静的对话。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`斯堪诺与法尔斯特布双子镇`} />
                <InfoRow label="英文名称" value={`Skanör-Falsterbo`} />
                <InfoRow label="正式名称" value={`Skanör med Falsterbo (Skanör with Falsterbo)`} />
                <InfoRow label="国家" value={`瑞典`} />
                <InfoRow label="城市" value={`斯科讷省，维灵厄市`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`中世纪北欧最重要的鲱鱼贸易中心之一，被誉为“斯堪的纳维亚的汉萨同盟钥匙”。`} />
                <InfoRow label="建筑特色" value={`绵延数公里的低矮海滨彩色木屋群，是瑞典“夏日别墅”文化的极致体现。`} />
                <InfoRow label="建筑风格" value={`传统斯科讷木结构建筑与二十世纪初民族浪漫主义及功能主义风格的迷人融合。`} />
                <InfoRow label="文化价值" value={`是理解瑞典人“Allemansrätten”（公众通行权）户外哲学与亲近自然的“夏日生活”精神的核心地标。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇及公共沙滩全年全天开放。主要游客中心及部分博物馆（如法尔斯特布博物馆）通常在夏季（6月中旬至8月中旬）每天上午10点至下午5点开放；春秋季（5月、9月）周末及节假日开放；冬季基本关闭。具体活动（如观鸟导览、夏季市集）时间多变，需提前在维灵厄市旅游局官网查询。`} />
              <InfoRow label="门票价格" value={`进入小镇、海滩、自然保护区和公共区域完全免费。部分特定活动如专业观鸟导览团、博物馆特展或夏季帆船课程需额外付费，价格在100-500瑞典克朗不等。停车费：夏季（6-8月）在部分热门海滩停车场需支付每小时约20瑞典克朗或全天约80瑞典克朗的费用，其他季节及镇内街道停车通常免费。`} />
              <InfoRow label="地址" value={`Skanör med Falsterbo, 239 30 Vellinge, Sweden`} />
              <InfoRow label="交通方式" value={`从最近的国际机场哥本哈根凯斯楚普机场（CPH）出发最为便捷。抵达后，在机场火车站乘坐“Öresundståg”列车，方向马尔默（Malmö），约20分钟到达马尔默中央车站。换乘前往“Skanör”或“Falsterbo”的巴士（线路号约140或150），车程约50分钟，班次每小时1-2班，周末可能减少。建议购买交通储值卡（Jojo卡）或在手机APP（如Skånetrafiken）购票。自驾是最灵活的方式，从马尔默市中心沿E6/E20高速向南，转102号公路直达，约40分钟车程。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲斯堪诺和法尔斯特布的故事，得从一条鱼开始——大西洋鲱鱼。时间拉回到12、13世纪，这片狭窄的沙质地峡因为特殊的水文条件，成为鲱鱼群每年洄游的黄金渔场。想象一下当时的盛景：每年夏秋之交，整个波罗的海沿岸的渔民、商人蜂拥而至。海滩上支起无数临时帐篷和熏制架，空气中弥漫着浓烈的鱼腥和烟火气。斯堪诺迅速发展成为一个拥有自治权、教堂和堡垒的繁荣市镇，而法尔斯特布则以其优质的港口与之互补。它们成了汉萨同盟商船必经的驿站，来自吕贝克、但泽的商人用谷物、布匹和蜂蜜换取成桶的盐渍鲱鱼。这里的鲱鱼贸易一度掌握了北欧经济的命脉，税收丰厚到足以让丹麦国王（当时斯科讷属于丹麦）垂涎。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，就像所有依靠单一资源的繁荣一样，转折点不期而至。到了16世纪，由于过度捕捞或鱼群迁徙路线改变（原因至今是谜），鲱鱼几乎一夜之间消失了。财富的源泉枯竭，斯堪诺的辉煌急速褪色，人口锐减，从重要的贸易中心沦为一个安静的渔村。此后的几百年里，它和法尔斯特布一起，在历史的长卷中仿佛被轻轻合上，只留下一些古老的街道名称、教堂的断壁残垣，以及当地人关于“鲱鱼黄金时代”的口头传说，在冬日炉火边被反复咀嚼。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的重生，要等到19世纪末。一股“海滨疗养”的风潮从欧洲大陆吹来。医生们开始鼓吹海水浴、清新空气和阳光对健康的益处。这片拥有漫长细腻沙滩、充足日照（以瑞典标准而言）且相对容易到达的半岛，突然被中产阶级和艺术家们“重新发现”。但它的发展路径与法国里维埃拉的奢华截然不同，它遵循的是典型的瑞典式民主与自然观。最初，人们只是在沙滩上搭建简易的木棚用于更衣。渐渐地，这些木棚变得牢固、精致，并最终演变成我们今天看到的、拥有完整生活设施的“海滨木屋”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`二十世纪初的民族浪漫主义运动进一步塑造了它们的审美。建筑师们从传统斯科讷农舍中汲取灵感，设计出这些坡度舒缓、装饰着精美木工、色彩柔和的小房子。它们不是用来炫耀财富的，而是为了最大限度地融入景观，享受阳光、海风和私密的家庭时光。一条不成文的规则被世代遵守：房子不能太高，以免挡住邻居看海的视线；篱笆不能太密，以维持社区的开放感。就这样，一场自发的、充满人情味的“建筑运动”沿着海岸线展开，形成了世界上独一无二的、连绵不绝的低密度彩色木屋社区，成为瑞典“sommarstuga”（夏日别墅）文化的圣地。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`我强烈建议你留出一整天（甚至两天）给这两个小镇。最佳的节奏是“由自然到人文”。早晨趁着清新和光线好，从法尔斯特布的西端开始，专注于自然景观和鸟类观察；中午前后沿着沙滩慢慢向东边的斯堪诺移动；下午沉浸在小镇的历史街区和港口氛围中；傍晚则留给日落和海滨的宁静。这样安排既能避开可能的人群（如果夏季沙滩中午人多，你已在上午享受了宁静），又能完整地体验从荒野到社区、从自然奇观到人文生活的光谱变化。整体步行距离较长（约8-10公里），但地势平坦，非常适合慢走或骑行。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季（尤其是七月）是瑞典度假旺季，小镇会很受欢迎，建议尽早预订住宿并做好沙滩上人相对较多的心理准备。尊重当地隐私，拍照时尽量避免对准私人住宅的窗户或庭院内部。沙丘和半岛自然保护区是敏感生态环境，务必沿着指定路径行走，不打扰野生动物。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨第一站先去法尔斯特布灯塔脚下的木栈道，让清冽的海风唤醒感官，看晨光为灯塔和彩色木屋群涂上第一层金边。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着灯塔旁的路径深入法尔斯特布半岛的沙丘与灌木丛地带，静心观察可能在空中盘旋或在水塘边休憩的候鸟。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从半岛折返，踏上那条连接两镇的、令人沉醉的白色沙滩，赤脚感受波罗的海的沁凉，向左看是无垠海面，向右看是童话般的木屋轮廓线。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在接近斯堪诺的位置离开沙滩，钻进小镇中心寻找那家飘出浓郁肉桂香气的传统面包房，买一个刚出炉的“kanelbulle”（肉桂卷）犒劳自己。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`漫步至斯堪诺的老港口，这里停泊着白色帆船和古朴的渔船，看看那些仍在使用的木制船坞，想象中世纪商船云集的喧嚣。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`以斯堪诺中世纪教堂遗址为圆心，探索周围那些用鹅卵石铺就的安静小巷和保存完好的半木结构老房子。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`挑选一条穿过最大一片彩色海滨木屋社区的小径蜿蜒行走，欣赏每栋房子门前精心打理的小花园和别致的装饰细节。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前回到法尔斯特布海滩的任意一处，找一张面向西方的沙滩椅或干脆坐在沙丘上，等待太阳沉入厄勒海峡对面的丹麦轮廓之后。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`法尔斯特布灯塔与彩色木屋同框`}</h4>
                  <p className="text-sm text-gray-700">{`站在灯塔西南侧的木栈道上，用长焦镜头压缩空间，将红白条纹的灯塔作为视觉焦点，前景或背景带入一排色彩柔和的木屋，最佳拍摄时间是日出后一小时或日落前，光线温暖柔和。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`海滩木步道纵深透视`}</h4>
                  <p className="text-sm text-gray-700">{`站在沙滩上通往木屋社区的任意一条木质步道入口，利用步道的线条引导视线，拍摄纵深照片，两侧是沙丘草和篱笆，尽头是一栋精致的彩色木屋，下午侧光能增强木质的纹理和立体感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`航拍视角下的色彩几何`}</h4>
                  <p className="text-sm text-gray-700">{`如果条件允许且遵守当地无人机法规（非常重要，需提前查证），从空中俯瞰最能展现木屋社区令人惊叹的规划美感与色彩拼图般的视觉效果。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`斯堪诺老港口的人文静物`}</h4>
                  <p className="text-sm text-gray-700">{`在老港口寻找一个包含老旧木船、绳索、浮标和背景中色彩斑驳的船屋的组合构图，接近黄昏时分的漫射光能让色彩更加饱和，氛围宁静。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`木屋门廊的细节特写`}</h4>
                  <p className="text-sm text-gray-700">{`聚焦某栋特别有特色的木屋门廊，捕捉门牌、门环、一盏复古煤油灯或窗台上的一盆天竺葵，这些细节充满了生活故事感，阴天的均匀光线反而更适合。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`北欧的夏季阳光在中午可能过于强烈且平直，尽量利用“黄金时段”拍摄。冬季则有独特的清冷光线和可能出现的雪景，别有一番风味。放飞无人机前务必确认当地法规，许多自然保护区严禁无人机飞行，以免惊扰鸟类。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经典海滨木屋体验`}</h4>
                  <p className="text-sm text-blue-800">{`租赁一栋设施齐全的传统彩色木屋，拥有面向沙滩或花园的私人露台，白天听海晚上观星，完全融入本地人的度假节奏。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`斯堪诺老港口的精品设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`由历史建筑改造，内饰融合了北欧简约与航海元素，步行即可到达餐厅、面包房和古董店，位置极其便利。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`法尔斯特布镇中心的舒适家庭旅馆`}</h4>
                  <p className="text-sm text-yellow-800">{`主人热情好客，常提供自制早餐和本地旅行贴士，房间温馨整洁，是体验地道小镇生活的好选择。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`附近乡村的静谧农庄民宿`}</h4>
                  <p className="text-sm text-purple-800">{`如果追求绝对的宁静，可以选择驱车十分钟内可达的斯科讷乡村农庄，住在翻新的谷仓里，被田野和森林环绕，夜晚寂静无声。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（6月至8月）的住宿非常紧俏，许多木屋按周出租，需提前数月预订。冬季许多木屋不开放，但酒店和民宿照常营业，是体验北欧“hygge”（舒适惬意）哲学的绝佳时机，价格也更有优势。无论住哪里，选择离海滩步行可达的住所会极大提升体验。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开斯堪诺-法尔斯特布的时候，我背包里好像装进了一整个慢下来的夏天。指尖似乎还残留着沙滩细沙的触感，鼻尖萦绕着海风与木屋油漆混合的、独属于这里的味道。这里没有需要“攻克”的景点清单，没有令人屏息的险峻奇观，它的魔力是渗透式的。它教会你一种不同的旅行节奏——一种基于散步、观察、发呆和感受季节细微变化的节奏。在这个追求刺激和效率的世界里，这两个小镇固执地守护着一种近乎奢侈的简单：一片海，一栋彩色的房子，一份与自然平静共处的时光。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`我想，这就是为什么它值得被列入清单。它不是用来炫耀的风景明信片，而是一个可以让你内心“重置”的地方。在这里，你能真切地触摸到瑞典人幸福感的源头之一：那种对自然权利的平等共享，对日常生活美学的执着，以及对悠长假期的虔诚捍卫。无论你是建筑爱好者、自然观察者，还是仅仅一个渴望喘息的都市人，斯堪诺和法尔斯特布都会用它宽厚的沙滩、温柔的色块和永恒的海浪声，给你一个深深的、属于北欧洲的拥抱。你会发现，最深度的旅行，有时就是找到这样一个地方，它让你觉得，生活本可以如此简单而丰盛。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/linkping" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    林
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">林雪平老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Linköping</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/linkoping-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    林
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">林雪平老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Linköping Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/karlskrona-naval-port-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡尔斯克鲁纳（军港古城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Karlskrona</p>
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
