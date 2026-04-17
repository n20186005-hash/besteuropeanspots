import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '培拉特 Berat｜漫步“千窗之城”，探秘奥斯曼时代凝固的白色诗篇 - 最佳欧洲景点',
  description: '第一眼看到培拉特，你会以为自己不小心闯进了一幅用光线和石头绘成的立体画。我抵达时正是黄昏，金红色的夕阳像蜜糖一样，缓缓地从奥苏姆河的对岸流淌过来，均匀地涂抹在对面山坡上那一片密密麻麻的白色房子上。没错，就是那传说中“千窗之城”的震撼全景。那些窗户，方方正正，深深嵌在刷得雪白的墙壁里，在斜阳下反射着温...',
}

export default function BeratAlbaniaThousandWindowsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '培拉特（千窗之城）', href: '/attractions/berat-albania-thousand-windows' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`培拉特（千窗之城）・Berat・阿尔巴尼亚・培拉特`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到培拉特，你会以为自己不小心闯进了一幅用光线和石头绘成的立体画。我抵达时正是黄昏，金红色的夕阳像蜜糖一样，缓缓地从奥苏姆河的对岸流淌过来，均匀地涂抹在对面山坡上那一片密密麻麻的白色房子上。没错，就是那传说中“千窗之城”的震撼全景。那些窗户，方方正正，深深嵌在刷得雪白的墙壁里，在斜阳下反射着温润的光，一层叠着一层，从河岸一直堆叠到山顶城堡的脚下，整齐得近乎神圣，又带着一种日常生活的杂乱生命力。空气里有种混合的味道——远处面包房飘来的焦香，石板路被晒了一天后散发出的微热的尘土气，还有从某家院子里探出头来的无花果树叶的清新。
这座城是活的，绝不仅仅是明信片上的风景。你很快会发现，那些美丽的窗户后面，是真实的人生。老太太在窗台上晒着红辣椒，小孩子从一扇窗里探出脑袋朝下面的朋友呼喊，晾晒的彩色床单在微风里轻轻拍打石墙。老城分为两个主要部分，被奥苏姆河隔开的戈里察区和曼加勒姆区，由一座古桥相连。走在迷宫般的陡峭巷弄里，脚下的鹅卵石被岁月磨得光亮，你得侧着身子给驮着货物的驴子让路。耳边是各种声音的交响：清真寺宣礼塔传来的悠扬唤拜声，东正教堂偶尔敲响的钟声，咖啡馆里男人们玩着纸牌的低语，还有溪水从石缝间流过的潺潺声。这里的时间流淌得格外慢，慢到你可以听见历史在石头缝里呼吸。
它的核心魅力，就在于这种惊人的“层叠感”——既是视觉上山坡建筑的层叠，更是历史与文化的层叠。山顶是公元前4世纪始建的城堡，里面还住着人；山腰是14-15世纪留存下来的教堂，藏着珍贵的圣像画；山脚下则是奥斯曼帝国鼎盛时期留下的民居街区。你一步一步往上走，就像在一页一页逆着时间翻阅一本厚重的历史书。而最打动人的是，所有的这些时代印记，都没有被圈起来当成死去的标本，它们就是当地人的家、教堂和集市，依然带着体温，依然在 daily use。这种历史的延续性，让培拉特充满了温柔又坚韧的独特力量。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到培拉特，你会以为自己不小心闯进了一幅用光线和石头绘成的立体画。我抵达时正是黄昏，金红色的夕阳像蜜糖一样，缓缓地从奥苏姆河的对岸流淌过来，均匀地涂抹在对面山坡上那一片密密麻麻的白色房子上。没错，就是那传说中“千窗之城”的震撼全景。那些窗户，方方正正，深深嵌在刷得雪白的墙壁里，在斜阳下反射着温润的光，一层叠着一层，从河岸一直堆叠到山顶城堡的脚下，整齐得近乎神圣，又带着一种日常生活的杂乱生命力。空气里有种混合的味道——远处面包房飘来的焦香，石板路被晒了一天后散发出的微热的尘土气，还有从某家院子里探出头来的无花果树叶的清新。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座城是活的，绝不仅仅是明信片上的风景。你很快会发现，那些美丽的窗户后面，是真实的人生。老太太在窗台上晒着红辣椒，小孩子从一扇窗里探出脑袋朝下面的朋友呼喊，晾晒的彩色床单在微风里轻轻拍打石墙。老城分为两个主要部分，被奥苏姆河隔开的戈里察区和曼加勒姆区，由一座古桥相连。走在迷宫般的陡峭巷弄里，脚下的鹅卵石被岁月磨得光亮，你得侧着身子给驮着货物的驴子让路。耳边是各种声音的交响：清真寺宣礼塔传来的悠扬唤拜声，东正教堂偶尔敲响的钟声，咖啡馆里男人们玩着纸牌的低语，还有溪水从石缝间流过的潺潺声。这里的时间流淌得格外慢，慢到你可以听见历史在石头缝里呼吸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，就在于这种惊人的“层叠感”——既是视觉上山坡建筑的层叠，更是历史与文化的层叠。山顶是公元前4世纪始建的城堡，里面还住着人；山腰是14-15世纪留存下来的教堂，藏着珍贵的圣像画；山脚下则是奥斯曼帝国鼎盛时期留下的民居街区。你一步一步往上走，就像在一页一页逆着时间翻阅一本厚重的历史书。而最打动人的是，所有的这些时代印记，都没有被圈起来当成死去的标本，它们就是当地人的家、教堂和集市，依然带着体温，依然在 daily use。这种历史的延续性，让培拉特充满了温柔又坚韧的独特力量。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`培拉特（千窗之城）`} />
                <InfoRow label="英文名称" value={`Berat`} />
                <InfoRow label="正式名称" value={`Berat`} />
                <InfoRow label="国家" value={`阿尔巴尼亚`} />
                <InfoRow label="城市" value={`培拉特`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`阿尔巴尼亚的“博物馆之城”，联合国教科文组织世界遗产，见证了从古希腊到奥斯曼帝国跨越两千多年的历史层叠。`} />
                <InfoRow label="建筑特色" value={`层层叠叠、依山而建的白色奥斯曼风格民居，数以千计的窗户在阳光下如钢琴键般排列，构成了独一无二的城市肌理。`} />
                <InfoRow label="建筑风格" value={`典型的奥斯曼帝国时期巴尔干民用建筑，混合了伊斯兰和阿尔巴尼亚本土元素。`} />
                <InfoRow label="文化价值" value={`是阿尔巴尼亚多元宗教（伊斯兰教与基督教）和谐共存、文化交融的活化石。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`培拉特城堡区域24小时开放，但城堡内的博物馆、教堂等室内景点通常开放时间为夏季（4月至9月）上午9:00至晚上7:00，冬季（10月至3月）上午9:00至下午4:00，周一多数博物馆闭馆。老城区的民居和商店开放时间较为自由，一般从早上9点持续到傍晚。`} />
              <InfoRow label="门票价格" value={`进入培拉特老城区和城堡区域本身免费。城堡内的部分博物馆（如Onufri博物馆）和教堂需单独购票，票价约合200-400阿尔巴尼亚列克（约1.5-3.5欧元）。学生、儿童及团体通常有折扣，建议备好现金零钱。`} />
              <InfoRow label="地址" value={`Berat, Albania`} />
              <InfoRow label="交通方式" value={`从阿尔巴尼亚首都地拉那的国际机场出发，最便捷的方式是租车自驾或乘坐长途巴士。自驾沿SH72公路向南行驶约2小时即可抵达。如果乘坐巴士，从地拉那的巴士南站出发，班次频繁（约每小时一班），车程约2.5-3小时，票价非常便宜。巴士会停靠在培拉特新城区的车站，从那里可以轻松步行或打一辆出租车（费用极低）前往山脚下的老城入口。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲培拉特的故事，我们得把时钟拨回到两千多年前。这片土地最初的定居点可以追溯到青铜时代，但它第一次在历史上响亮登场，是在公元前4世纪左右，当时它有一个希腊化的名字——“安提帕特利亚”。这个名字据说与亚历山大大帝麾下的一位将军有关，象征着其重要的军事防御地位。你如今站在城堡之巅看到的厚重城墙基底，最早的石块或许就是那个时代垒下的。罗马人来了又走，拜占庭的鹰旗在此飘扬，它的战略价值从未被忽视，因为谁控制了这座山丘，谁就扼守着通往内陆的河谷要道。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的城市塑造，发生在中世纪。公元9世纪前后，保加利亚第一帝国占领了这里，并将其更名为“贝里格勒”。随后，它又进入了塞尔维亚帝国的版图。这段时期是培拉特基督教文化的鼎盛期。如今城堡内那些看似不起眼的小教堂，如圣玛丽教堂、圣三一教堂，大多建于13至14世纪。其中一些教堂的内壁上，还保存着精美的拜占庭风格湿壁画，人物眼神肃穆，色彩历经数百年仍依稀可辨。那个年代，培拉特是这一地区重要的宗教和学术中心，修道院里藏着珍贵的羊皮卷手稿，钟声在群山间回响。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`命运的转折点在1417年到来。奥斯曼帝国的铁骑征服了培拉特。这是它建筑风貌得以定型的决定性时期。土耳其人没有摧毁这座城，而是依循其山势，在山坡上大规模兴建具有典型奥斯曼风格的民居。这些房子必须遵守当时帝国的建筑法规：石料为基础，白色灰泥抹墙，屋顶覆盖深色石板，而最核心的特征，便是大量、规整的窗户——既是为了在崎岖地形中获得最大采光，也形成了一种独特的美学。曼加勒姆区和戈里察区这两个主要的穆斯林居住区逐渐成形，建起了高大的清真寺，比如著名的“铅顶清真寺”。但有趣的是，奥斯曼统治者实行了相对宽容的“米勒特”制度，基督教社区得以保留并发展。于是，你看到了人类聚居史上罕见的一幕：清真寺的宣礼塔和东正教堂的钟楼，在同一片天空下并肩而立，共享着同一条溪流与同一片山影。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`近代的培拉特经历了战火与沉寂。二战期间它曾被意大利和德国军队占领。战后，阿尔巴尼亚进入了漫长的霍查共产主义时期，国家陷入封闭。然而，某种程度上，这种封闭意外地保护了培拉特。大规模的现代开发被阻止，老城的风貌几乎原封不动地冻结在了几十年前。当阿尔巴尼亚在90年代初重新向世界打开大门时，人们惊异地发现，这里竟完好保存着一个奥斯曼时代的“时间胶囊”。2008年，它被联合国教科文组织列入世界遗产名录，其评价重点正是它展现的“奥斯曼时期城市生活的罕见完整体验”以及“多种文化和平共处的见证”。今天的培拉特，正在小心翼翼地平衡着保护与发展的天平，那些古老的窗户里，亮起了迎接旅行者的温暖灯光。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味培拉特，我强烈建议你留出一整天时间，并遵循“从山顶到河岸”的游览节奏。最佳抵达时间是清晨，趁旅游团的大巴还未涌入，晨光温柔地照亮千窗之墙时。你可以从山脚的“戈里察区”入口开始，先不要急着上山，而是沿着河岸走走，感受清晨的宁静。然后，开始向城堡进发，这段上坡路是游览的核心，大约需要2-3小时细细探索城堡内的“城中城”。中午前后下山，穿过著名的“戈里察桥”到对岸的“曼加勒姆区”，在临河的餐厅享用午餐。下午则悠闲地漫步在曼加勒姆区更陡峭、更迷宫般的巷子里，参观几间改建的民俗博物馆。傍晚时分，一定要回到河对岸，或者找个高处，等待夕阳为白色之城披上金纱。这样安排，光线最美，也能避开最拥挤的时段，完整地体验古城从苏醒到沉睡的韵律。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿一双绝对舒适防滑的步行鞋，因为古城的所有道路都是凹凸不平的鹅卵石陡坡，高跟鞋或凉鞋会是一场灾难。夏季来访务必戴帽子和备足饮用水，攀登城堡的路上几乎没有树荫，阿尔巴尼亚的阳光非常热情。尊重当地居民隐私，那些美丽的窗户和庭院是别人的家，拍照时请保持礼貌距离，未经允许不要探头探脑或闯入。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在清晨的薄雾中从戈里察区出发，踏着湿漉漉的鹅卵石小径开始向山顶城堡攀登，感受周遭民居渐渐苏醒的烟火气。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过气势恢宏的城堡主城门，仿佛穿越时空隧道，瞬间踏入一个仍然有数百人居住的中世纪堡垒小镇。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城堡制高点的残垣断壁间驻足，让视野毫无阻挡地拥抱脚下如瀑布般倾泻的白色房屋和蜿蜒如玉带的奥苏姆河。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻访城堡内隐秘的“Onufri博物馆”，在那座古老的圣玛丽教堂里，被16世纪大师Onufri笔下圣像那极具表现力的红色长袍所震撼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡的南侧小门缓步下山，一路用手触摸那些被阳光晒得发暖的白色墙壁，与坐在门前闲聊的老人们点头微笑。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走过古老的“戈里察桥”来到曼加勒姆区，在桥头那家家庭餐馆的户外座位坐下，点一份用新鲜番茄和羊奶酪烹制的当地特色菜。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`钻进曼加勒姆区宛如迷宫的网络般狭窄巷弄，挑战性地寻找那些最上镜的窗景与门廊，感受比河对岸更浓郁的生活气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前一小时，返回戈里察区河岸的某处咖啡馆露台，要一杯本地咖啡，静静看着夕阳如何将千扇窗户一一点燃成金色的火焰。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡顶端城墙外沿`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，将相机对准曼加勒姆区山坡，利用长焦镜头压缩空间，捕捉“千窗”如鳞片般密集的震撼细节，同时将奥苏姆河纳入构图作为前景引导线。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`戈里察桥中央偏东侧`}</h4>
                  <p className="text-sm text-gray-700">{`清晨太阳刚升起时，站在桥上向西拍摄，可以拍到城堡雄踞山巅、其倒影完美映照在平静河面上的经典对称画面，此时光线柔和，色彩饱和。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`曼加勒姆区某条陡峭小巷的转角`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，阳光斜射入狭窄的巷子，找到一扇漆成蓝色或绿色的古老木门，利用门框或巷子两侧的白墙形成天然画框，等待一个当地人走过，拍下充满故事感的瞬间。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`Onufri博物馆内部（若允许拍摄）`}</h4>
                  <p className="text-sm text-gray-700">{`关闭闪光灯，将相机感光度调高，专注捕捉湿壁画上圣人面部柔和的光晕与细腻的笔触，注意利用从窗户射入的自然光勾勒画面层次。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从河对岸公路的某处高坡`}</h4>
                  <p className="text-sm text-gray-700">{`夜晚蓝调时刻（日落后二十分钟），使用三脚架长曝光，拍摄城堡和老城区的灯光渐次亮起，与深蓝色天空形成冷暖对比的静谧夜景。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`阿尔巴尼亚人对拍照大多很友好，但拍摄人物时，尤其是老人和妇女，请务必先微笑示意并获得对方默许。许多教堂和博物馆内部严禁拍照或需额外购买摄影许可，务必遵守规定。当地的猫狗很多且很悠闲，它们是画面中绝佳的生动点缀，可以善加利用。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`城堡内民宿体验`}</h4>
                  <p className="text-sm text-blue-800">{`选择一家由古老石屋改造的城堡内家庭旅馆，夜晚当游客散去，你能独占星空下的千年城堡，在绝对的寂静中只听得到自己的心跳和远处的犬吠。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`河景精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`入住曼加勒姆区临河而建的精品小酒店，房间的阳台正对着对岸的千窗绝壁，清晨在咖啡香中推开窗，眼前就是一幅活动的巨大风景画。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`老城中心传统旅馆`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻戈里察区中心广场旁一栋18世纪商人大宅改建的旅馆，木结构天花板、厚重的羊毛地毯和复古家具让你彻底沉浸于奥斯曼时代的氛围中。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`新城区现代舒适之选`}</h4>
                  <p className="text-sm text-purple-800">{`如果追求更现代的设施和便利，可以选择步行十分钟可达的新城区酒店，性价比极高，同时能享受安静的睡眠和便捷的免费停车场。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡内的住宿条件相对简陋（可能 Wi-Fi 信号弱，热水不稳定），但体验独一无二，适合追求意境的旅者。夏季是旺季，尤其是七八月，建议至少提前一个月预订心仪的特色住所。老城区的街道夜晚照明有限，建议随身携带小手电，但治安整体非常好，民风淳朴。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开培拉特好多天了，但闭上眼睛，那片白色的波浪依然会立刻在脑海中浮现。它给我的触动，远远超越了“美丽风景”的范畴。在这个越来越同质化的世界里，培拉特像一个倔强的奇迹，它没有选择成为一座仅供观赏的空城博物馆，而是固执地、温柔地延续着一种古老的生活节奏。在这里，历史不是教科书上冰冷的章节，它是你脚下被磨圆的石头，是窗台上那盆盛放的天竺葵，是教堂与清真寺共享的同一片天空。这种延续性，有一种震撼人心的力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`或许，这就是我们如此渴望深度旅行的意义。我们不只是为了收集打卡的照片，更是为了寻找像培拉特这样的地方——它们像一面镜子，让我们照见人类文明的韧性、文化的包容力，以及在快速变迁的时代里，那些值得被小心守护的“不变”的价值。在千扇窗户的注视下，你会不自觉地慢下来，思考何为家园，何为传承。每一位热爱深度游的旅人，都应该来培拉特住上一晚，在城堡的星空下，听一听石头诉说的故事，感受一下时间在这里流淌的独特温柔。它会让你相信，世界上总有一些角落，依然美好而坚定地活着。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/gjirokaster-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    吉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">吉诺卡斯特（石头城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gjirokastër</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/miskolc-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    米
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">米什科尔茨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Miskolc Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/stade-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施塔德老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Stade Old Town</p>
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
