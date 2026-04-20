import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿尔瓦拉辛 Albarracín｜悬崖上的粉色童话，被时光遗忘的中世纪迷宫 - 最佳欧洲景点',
  description: '朋友，你想象过一个地方，颜色是温暖的粉红色，质地是粗糙而亲切的，整个镇子像一堆被孩子随手堆砌却又无比妥帖的积木，紧紧地、依恋地贴在一面巨大的、灰黄色的悬崖上吗？第一次看到阿尔瓦拉辛的照片，我就是这种感觉——不真实，像童话书里撕下的一页。而当你真正站到它的脚下，沿着瓜达拉维亚河向上仰望时，那种震撼才变...',
}

export default function AlbarracinMedievalTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '阿尔瓦拉辛', href: '/attractions/albarracin-medieval-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿尔瓦拉辛・Albarracín・西班牙・阿尔瓦拉辛`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，你想象过一个地方，颜色是温暖的粉红色，质地是粗糙而亲切的，整个镇子像一堆被孩子随手堆砌却又无比妥帖的积木，紧紧地、依恋地贴在一面巨大的、灰黄色的悬崖上吗？第一次看到阿尔瓦拉辛的照片，我就是这种感觉——不真实，像童话书里撕下的一页。而当你真正站到它的脚下，沿着瓜达拉维亚河向上仰望时，那种震撼才变得具体：一整片由玫瑰色、赭石色和陶土色构成的房屋群落，在西班牙炽烈的阳光下，闪耀着蜂蜜般的光泽，仿佛被夕阳永久地亲吻过。风穿过河谷，带来远方松林干燥的清香和河水潮湿的凉意。
走进古镇唯一的入口，穿过古老的拱门，时间“唰”地一下就被调慢了。脚下是凹凸不平的、被无数代人和牲口磨得发亮的石板路，狭窄得惊人，有时你伸直双臂，指尖几乎能同时触碰到两侧房屋温暖的墙壁。抬起头，视线被那些层层叠叠、肆意伸展的木质悬挑阳台、错综复杂的木梁和雕刻着简单花纹的石楣所填满。空气里有股好闻的味道——是旧木头在阳光下的香气，是某户人家飘出的炖菜里藏红花的味道，混合着老石头散发出的、雨后般的微凉气息。你会听到的，除了自己的脚步声和呼吸声，就是头顶阳台传来晾衣架的轻微吱呀声，某扇厚重的木门被推开时悠长的叹息，还有本地老爷爷在街角用带着浓重阿拉贡口音的西班牙语慢悠悠地聊天的声音。
这里不是迪士尼的布景，它是活的。你会看到阳台上垂下天竺葵的鲜艳花盆，窗台上晒着自家做的辣椒，小小的广场上，猫咪在长椅下打盹。当地人提着面包袋从你身边从容走过，他们对这迷宫般的美早已习以为常。这里的核心魅力，恰恰在于这种“活着的废墟”感——它不是被精心修复成标本，而是带着它所有的皱纹、补丁和生活的烟火气，骄傲地、顽强地延续着生命。你在其中漫步，不是在参观一个景点，而是在不经意间，闯入了另一个时空的日常。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，你想象过一个地方，颜色是温暖的粉红色，质地是粗糙而亲切的，整个镇子像一堆被孩子随手堆砌却又无比妥帖的积木，紧紧地、依恋地贴在一面巨大的、灰黄色的悬崖上吗？第一次看到阿尔瓦拉辛的照片，我就是这种感觉——不真实，像童话书里撕下的一页。而当你真正站到它的脚下，沿着瓜达拉维亚河向上仰望时，那种震撼才变得具体：一整片由玫瑰色、赭石色和陶土色构成的房屋群落，在西班牙炽烈的阳光下，闪耀着蜂蜜般的光泽，仿佛被夕阳永久地亲吻过。风穿过河谷，带来远方松林干燥的清香和河水潮湿的凉意。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进古镇唯一的入口，穿过古老的拱门，时间“唰”地一下就被调慢了。脚下是凹凸不平的、被无数代人和牲口磨得发亮的石板路，狭窄得惊人，有时你伸直双臂，指尖几乎能同时触碰到两侧房屋温暖的墙壁。抬起头，视线被那些层层叠叠、肆意伸展的木质悬挑阳台、错综复杂的木梁和雕刻着简单花纹的石楣所填满。空气里有股好闻的味道——是旧木头在阳光下的香气，是某户人家飘出的炖菜里藏红花的味道，混合着老石头散发出的、雨后般的微凉气息。你会听到的，除了自己的脚步声和呼吸声，就是头顶阳台传来晾衣架的轻微吱呀声，某扇厚重的木门被推开时悠长的叹息，还有本地老爷爷在街角用带着浓重阿拉贡口音的西班牙语慢悠悠地聊天的声音。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里不是迪士尼的布景，它是活的。你会看到阳台上垂下天竺葵的鲜艳花盆，窗台上晒着自家做的辣椒，小小的广场上，猫咪在长椅下打盹。当地人提着面包袋从你身边从容走过，他们对这迷宫般的美早已习以为常。这里的核心魅力，恰恰在于这种“活着的废墟”感——它不是被精心修复成标本，而是带着它所有的皱纹、补丁和生活的烟火气，骄傲地、顽强地延续着生命。你在其中漫步，不是在参观一个景点，而是在不经意间，闯入了另一个时空的日常。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿尔瓦拉辛`} />
                <InfoRow label="英文名称" value={`Albarracín`} />
                <InfoRow label="正式名称" value={`Albarracín`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`阿尔瓦拉辛`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是西班牙保存最完好的中世纪城镇之一，见证了穆斯林、犹太与基督教文明的交织，是阿拉贡王国边疆的防御与文明灯塔。`} />
                <InfoRow label="建筑特色" value={`粉红色调的房屋紧密簇拥在悬崖之巅，由本地玫瑰色石膏与木材构建，形成与险峻地形完美融合的有机肌理，宛如从岩石中生长出来。`} />
                <InfoRow label="建筑风格" value={`以穆德哈尔风格为核心，融合了伊斯兰建筑的空间布局与装饰元素、罗马式的厚重以及文艺复兴后期的典雅细节，形成独一无二的“阿尔瓦拉辛风格”。`} />
                <InfoRow label="文化价值" value={`它不仅仅是一个古镇，更是一部活着的、关于边疆生存、文化适应与身份认同的立体史书，其完整的城镇生态系统和建筑群使其成为研究西班牙中世纪史的露天博物馆。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇本身为24小时开放区域，可随时漫步。但内部主要景点（如主教宫博物馆、圣玛丽亚教堂、城墙）有固定开放时间，通常为周二至周日 10:00-14:00 及 16:00-19:00（夏季可能延长），周一大多闭馆。冬季（11月至3月）部分景点开放时间缩短或仅周末开放。建议行前查阅当地旅游局最新公告，小镇节庆日（如9月的庆典）期间开放时间可能特殊调整。`} />
              <InfoRow label="门票价格" value={`进入古镇免费。参观单个主要景点门票约2-5欧元（如主教宫博物馆约4欧元，登城墙约3.5欧元）。通常有联票出售，涵盖3-4个主要景点，价格约8-10欧元，性价比高。学生、65岁以上老人及儿童享有折扣。部分小型教堂免费但欢迎捐赠。`} />
              <InfoRow label="地址" value={`Plaza Mayor, 1, 44100 Albarracín, Teruel, Aragón, España`} />
              <InfoRow label="交通方式" value={`阿尔瓦拉辛位置较为偏远，深度游需精心规划交通。最便捷的方式是自驾：从马德里出发，沿A-2公路向东北，转A-23公路，最后通过TE-901等省级公路抵达，全程约3小时；从瓦伦西亚出发约2.5小时，从萨拉戈萨出发约1.5小时。古镇外设有多个免费停车场。公共交通不便：可先乘火车至特鲁埃尔（Teruel），从马德里或萨拉戈萨有火车可达特鲁埃尔。从特鲁埃尔火车站前，每天有1-2班Regional公交（由Grupo Samar运营）开往阿尔瓦拉辛，车程约45分钟，但班次极少且周末大幅减少，务必提前在车站或官网查好时刻表，错过一班可能意味着滞留。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`阿尔瓦拉辛的故事，是从岩石和水开始的。这片险峻的悬崖，被瓜达拉维亚河三面环绕，形成了一个天然的堡垒。最早在此扎根的是伊比利亚人，后来罗马人也留下了痕迹。但真正赋予它灵魂和名字的，是柏柏尔人的一支——贝努·拉辛家族。大约在11世纪，这个穆斯林家族在此建立了独立的泰法（小王国），并将此地命名为“Albarracín”，意为“拉辛之地”。你可以想象，在那个时代，这里是远离科尔多瓦或格拉纳达繁华中心的边疆要塞，自给自足，固若金汤。他们修建了最初的核心堡垒和灌溉系统，小镇的蜘蛛网般的街巷布局，那种为了适应地形和防御而生的内向性与复杂性，从那时就已奠定基调。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转折点出现在12世纪。随着基督教王国向南的“收复失地运动”推进，这片战略要地成了各方争夺的焦点。1167年，一位名叫佩德罗·鲁伊斯·德·阿萨格拉的纳瓦拉贵族，在阿拉贡国王的支持下，从穆斯林领主手中夺取了阿尔瓦拉辛。有趣的是，他并未完全臣服于国王，而是建立了一个事实上独立的领主国——“阿尔瓦拉辛领主国”。接下来的一个多世纪，这个微型国家在基督教王国与穆斯林势力之间巧妙周旋，发展出了自己独特的文化和军事力量。那段时期修建的雄伟城墙和高塔，至今仍是小镇最威严的轮廓线。你可以把这些领主看作中世纪的山地之王，在乱世中守护着自己的一方天地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`13世纪末，领主国最终被阿拉贡王国吞并，但它的战略重要性丝毫未减。它成为了王国面对南方格拉纳达纳斯里德王朝的前沿哨所。也正是在基督教统治稳固后，那个奇迹般的艺术风格——穆德哈尔风格，在这里绽放出最绚烂的花朵。留下来的穆斯林工匠（穆德哈尔人），用他们的技艺为新的基督教主人服务。于是，你看到了伊斯兰的几何图案、釉面瓷砖、石膏浮雕，与罗马式的厚重结构和哥特式的空间感不可思议地融合在一起，创造出圣玛丽亚教堂里那个令人屏息的木制格子天花板，以及无数民宅门窗上那些精细的镂空装饰。这不是简单的拼贴，而是一种深度的、痛苦又充满创造力的文化共生。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇的荣耀在16世纪达到顶峰，羊毛贸易带来了财富，文艺复兴的春风也吹进了这座山城，在主教堂和贵族宅邸中留下了优雅的纹章和壁画。然而，随着地理大发现和贸易路线的转移，阿拉贡内陆山区逐渐被边缘化。阿尔瓦拉辛仿佛被按下了暂停键，陷入了长达数个世纪的沉睡。经济的停滞反而成了它历史的幸运，没有资金进行大规模“现代化”改造，那些中世纪的街道、广场和房屋原封不动地保留了下来。它像一颗被遗忘在时光琥珀里的宝石。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到20世纪，艺术家和学者们重新发现了它的美，惊呼其为“西班牙最美的村镇”。艰难的修复工作开始了，目标不是翻新，而是用传统材料和工艺，小心翼翼地加固这颗脆弱的珍宝。今天，当你触摸那些墙壁，你触摸的不仅仅是石头，是贝努·拉辛家族的雄心，是阿萨格拉领主的骄傲，是穆德哈尔工匠的叹息，是几个世纪以来普通居民的悲欢。每一道裂缝，都是一个故事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味阿尔瓦拉辛，请务必预留一整个白天，甚至在此住上一晚。建议清晨（9点前）抵达，这时游客尚未涌入，阳光斜射，为粉色墙壁打上金色的侧光，街道安静得能听到自己的回声。整体游览节奏宜慢不宜快，分为两大阶段：上午先沿着外围的“城墙小径”从宏观角度俯瞰和环绕小镇，感受其与自然环境的震撼关系；下午再深入古镇迷宫般的内脏，用脚步去丈量每一条小巷，探访主要室内景点。这样的安排能让你先建立整体印象，再沉浸于细节，最后在日落时分登上高点，看光线为古镇披上最华丽的晚装，完成一次完整的感官盛宴。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`古镇内GPS信号混乱，纸质地图比手机更可靠，但最好的方式是允许自己短暂地迷路，惊喜总在拐角。穿着绝对要选择舒适防滑的步行鞋，那些石板路古老且常有坡度，高跟鞋是“酷刑”。小镇餐馆不多且规模小，旺季午餐时间（下午2点后）很可能需要排队，要么提前订位，要么像当地人一样晚点（下午3点后）用餐，或者自备一些简餐在风景优美的角落享用。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过古老的“门户”拱门，让自己瞬间从现代公路跌入中世纪的石板小巷，调整呼吸与步伐的节奏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`毫不犹豫地先右转，沿着小镇外围清晰标记的“Paseo Fluvial”河边小径漫步，从河谷底部抬头仰望整个城镇如同空中楼阁般的磅礴全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从“布恩角”附近寻找上山的土路，开始环绕半山的“城墙小径”，在不同角度惊叹房屋如何从悬崖峭壁中“生长”出来，并远眺荒原与松林。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从小径高点经由“圣婴门”重新进入古镇内部，立刻被狭窄阴凉的“子爵街”或“阿萨格拉街”吞噬，感受两侧逼近的粉色高墙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻着路标摸索到主教宫博物馆，不仅是看里面的考古宝藏，更要登上其塔楼，获得俯瞰全镇屋顶波浪的独家视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从博物馆出来，放任自己在迷宫般的巷弄里“迷失”，目标是找到并坐在小小的马约尔广场上，点一杯饮料，看本地人的生活如何在这个千年客厅里展开。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访圣玛丽亚教堂，在昏暗的光线下静静仰头，寻找那个被誉为“西班牙西斯廷”的、令人目眩神迷的穆德哈尔式木制穹顶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前半小时，再次出城，前往河对岸的“米拉多尔”观景台，等待夕阳将整个阿尔瓦拉辛染成炽烈的金红色，完成这一天最辉煌的谢幕。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`河对岸全景观景台`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时是最佳时刻，光线柔和且侧光，能将小镇的粉色温暖和悬崖的冷峻质感完美呈现，使用长焦镜头可以压缩空间，突出建筑群的密集与险峻。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`子爵街或阿萨格拉街巷内`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时反而能拍出戏剧性效果，光线从狭窄的天空泻下，照亮一侧墙壁，另一侧陷入深蓝阴影，形成强烈明暗对比，适合拍摄纵深感极强的巷景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`主教宫博物馆塔楼顶端`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点左右光线较好，可以360度拍摄古镇的屋顶全景，那些红瓦、烟囱、木阳台构成美妙的纹理，用广角镜头囊括更多细节。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城墙小径中途的某个转弯处`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，从这里可以拍到数层房屋错落叠在悬崖上、背景是辽阔荒原的经典画面，等待一扇窗户亮起灯或阳台上出现人影，能为画面增添灵魂。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`马约尔广场拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，阳光斜射进广场，坐在拱廊阴影里拍摄被光照亮的广场地面、建筑立面以及活动的人群，能捕捉到生动的生活场景。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重当地居民隐私，避免将镜头直接对准他人窗户或阳台内部。使用无人机在当地有严格限制，通常需要提前申请许可，在古镇密集区域飞行既不安全也不礼貌，建议放弃。多利用自然框架，如拱门、窗洞来构图，能为你的照片增添叙事感和纵深感。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`位于古镇入口处的家庭式客栈，由一栋老石头房子改造，房间简单干净，老板会热情地手绘地图告诉你只有本地人才知道的秘密角落，早餐是家庭自制的果酱和油条。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`藏在迷宫小巷深处的精品酒店，由几栋连通的16世纪贵族宅邸修复而成，房间保留了原始的石头墙、木梁和壁炉，中庭有个宁静的小天井，晚上可以在这里仰望星空，听风吹过屋檐的声音。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在河对岸山坡上的高级乡村酒店，拥有直面阿尔瓦拉辛全景的无敌视野，每个房间都带阳台或露台，提供用本地食材烹调的米其林推荐级晚餐，让你在私密的环境中独享整个中世纪画卷。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`历史沉浸`}</h4>
                  <p className="text-sm text-purple-800">{`古镇中心唯一一家由11世纪古老客栈原址修复的酒店，公共区域就是历史遗址的一部分，住在里面能触摸到千年石墙的纹理，夜晚当游客散去，你便能独享这座幽灵城堡般的宁静与神秘。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古镇内的住宿房间通常不多且非常抢手，尤其是带景观的，务必提前数月预订。夏季和春秋旺季（4-6月，9-10月）价格最高。住在镇内意味着你要拖着行李走一段石板路，请务必轻装简行。住在镇外则更安静且停车方便，但会错过古镇夜晚和清晨的独特氛围。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开阿尔瓦拉辛很久以后，闭上眼，脑海中浮现的不是某个具体的建筑画面，而是一种混合的感觉：是粉色石头在掌心粗糙温暖的触感，是巷子尽头突然瞥见一片金黄荒原时的那阵心悸，是午后寂静中教堂钟声敲响的悠长回音。这个地方教会我的，不是关于某个王朝的兴衰史，而是一种关于“存在”的韧性。它那么小，那么偏，仿佛被世界遗忘了，却把自己活成了一种独一无二的宣言。它没有屈服于地形的险峻，而是与之共舞，创造了令人惊叹的和谐。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求效率、光滑和标准化的快节奏世界里，阿尔瓦拉辛的存在本身就是一种温柔的抵抗。它提醒我们，美可以是不规则的，生活可以是慢的，历史不是书本上扁平的文字，而是可以走进去、摸得到、闻得着的立体空间。它值得每一位热爱深度游的旅人不远万里而来，不仅仅是为了拍一张明信片照片，更是为了经历一次小小的时空位移，去感受一种截然不同的生存智慧和美学。在这里，你会重新发现迷路的乐趣，重新学会用脚步丈量空间，重新理解“家园”两个字，可以如何紧密、温暖、充满生命力地，建造在一块悬崖之上。它或许不是你旅程的起点或终点，但它一定会成为你记忆里，那块最温暖、最坚硬的粉色基石。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/jaen-historic-quarter" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈恩古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">The Historic Quarter of Jaén</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/segovia-aqueduct" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塞
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塞哥维亚罗马水道桥</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Segovia Aqueduct</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ubeda" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    乌
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">乌韦达古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Úbeda</p>
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
