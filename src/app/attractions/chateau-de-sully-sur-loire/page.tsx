import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '叙利城堡 Château de Sully-sur-Loire｜漂浮在水上的中世纪军事杰作 - 最佳欧洲景点',
  description: '朋友，想象一下，你沿着卢瓦尔河一条安静的支流行驶，两岸是茂密的森林和宁静的田野。然后，毫无征兆地，它出现在地平线上——不是矗立在悬崖或山丘上，而是仿佛从一片巨大的、静止的镜面中生长出来。那就是叙利城堡给我的第一眼震撼。它不像其他童话般的城堡那样轻盈梦幻，而是带着一种沉甸甸的、庄严的、近乎威严的存在感...',
}

export default function ChateauDeSullySurLoirePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/france' },
            { label: '叙利苏卢瓦尔，卢瓦雷省', href: '/destinations/france' },
            { label: '叙利城堡', href: '/attractions/chateau-de-sully-sur-loire' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`叙利城堡・Château de Sully-sur-Loire・法国・叙利苏卢瓦尔，卢瓦雷省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，你沿着卢瓦尔河一条安静的支流行驶，两岸是茂密的森林和宁静的田野。然后，毫无征兆地，它出现在地平线上——不是矗立在悬崖或山丘上，而是仿佛从一片巨大的、静止的镜面中生长出来。那就是叙利城堡给我的第一眼震撼。它不像其他童话般的城堡那样轻盈梦幻，而是带着一种沉甸甸的、庄严的、近乎威严的存在感。那片宽阔的护城河像一层液态的盔甲，将灰色的砖石建筑与凡俗世界彻底隔开，倒映出的城堡影像随着微风泛起涟漪，虚实交错，让你一时分不清哪个才是真实。
把车停好，走近它。空气里混合着潮湿青苔、古老石头和水生植物的清新气味，一种属于河岸与历史的独特气息。你首先会听到的，是绝对的宁静，只有偶尔的鸟鸣和水面下鱼儿翻腾的轻微噗通声。巨大的吊桥已经放下，但当你踏上那吱呀作响的厚重木板时，仍能感受到几个世纪前那种“准入”的仪式感。穿过门洞的瞬间，光线暗下来，温度骤降，石壁触手冰凉。但当你走进内庭，阳光又重新洒满鹅卵石铺就的地面，仿佛从一个森严的世界走进了另一个充满秩序和力量的世界。你会发现，当地人对这座城堡的感情很深，它不只是景点，更是小镇的图腾。你会看到在护城河边跑步的居民，在花园长椅上阅读的老人，他们与城堡共享着同一种慢节奏的呼吸。
这座城堡最打动人心的核心魅力，在我看来，是它那份“未完成的完整性”。它没有香波堡的奢华繁复，也没有舍农索的浪漫柔美，它坦诚地展示着自己作为军事机器的本质：厚达数米的城墙、用于倾倒滚油或射箭的堞口、深邃的囚牢。然而，正是这种赤裸裸的功能性，让它充满了一种朴素的、雄性的美感。它像一个卸下戎装、但筋骨依然强健的老兵，沉默地坐在水边，讲述着关于防御、围困、权力和生存的故事。在这里，你能触摸到法国历史中那些不那么光鲜、却更为坚实的脉搏。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，想象一下，你沿着卢瓦尔河一条安静的支流行驶，两岸是茂密的森林和宁静的田野。然后，毫无征兆地，它出现在地平线上——不是矗立在悬崖或山丘上，而是仿佛从一片巨大的、静止的镜面中生长出来。那就是叙利城堡给我的第一眼震撼。它不像其他童话般的城堡那样轻盈梦幻，而是带着一种沉甸甸的、庄严的、近乎威严的存在感。那片宽阔的护城河像一层液态的盔甲，将灰色的砖石建筑与凡俗世界彻底隔开，倒映出的城堡影像随着微风泛起涟漪，虚实交错，让你一时分不清哪个才是真实。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`把车停好，走近它。空气里混合着潮湿青苔、古老石头和水生植物的清新气味，一种属于河岸与历史的独特气息。你首先会听到的，是绝对的宁静，只有偶尔的鸟鸣和水面下鱼儿翻腾的轻微噗通声。巨大的吊桥已经放下，但当你踏上那吱呀作响的厚重木板时，仍能感受到几个世纪前那种“准入”的仪式感。穿过门洞的瞬间，光线暗下来，温度骤降，石壁触手冰凉。但当你走进内庭，阳光又重新洒满鹅卵石铺就的地面，仿佛从一个森严的世界走进了另一个充满秩序和力量的世界。你会发现，当地人对这座城堡的感情很深，它不只是景点，更是小镇的图腾。你会看到在护城河边跑步的居民，在花园长椅上阅读的老人，他们与城堡共享着同一种慢节奏的呼吸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座城堡最打动人心的核心魅力，在我看来，是它那份“未完成的完整性”。它没有香波堡的奢华繁复，也没有舍农索的浪漫柔美，它坦诚地展示着自己作为军事机器的本质：厚达数米的城墙、用于倾倒滚油或射箭的堞口、深邃的囚牢。然而，正是这种赤裸裸的功能性，让它充满了一种朴素的、雄性的美感。它像一个卸下戎装、但筋骨依然强健的老兵，沉默地坐在水边，讲述着关于防御、围困、权力和生存的故事。在这里，你能触摸到法国历史中那些不那么光鲜、却更为坚实的脉搏。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`叙利城堡`} />
                <InfoRow label="英文名称" value={`Château de Sully-sur-Loire`} />
                <InfoRow label="正式名称" value={`Château de Sully-sur-Loire`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`叙利苏卢瓦尔，卢瓦雷省`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`卢瓦尔河谷城堡群中独一无二的军事防御典范，见证了法国从中世纪到文艺复兴时期权力格局的变迁。`} />
                <InfoRow label="建筑特色" value={`一座被宽阔护城河完整环绕的宏伟城堡，其双重城墙、巨大圆塔和水中倒影构成了震撼人心的画面。`} />
                <InfoRow label="建筑风格" value={`主体为中世纪军事建筑风格，带有早期文艺复兴的装饰元素，其规整的几何布局体现了十四世纪的法式城堡设计理念。`} />
                <InfoRow label="文化价值" value={`不仅是防御工事，也是数百年来的权力中心、文化庇护所和法国历史活生生的档案，深刻影响了卢瓦尔河谷的文化景观。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡及公园全年开放，但开放时间随季节变化。通常，城堡主体建筑开放时间为每年4月至9月，每日上午10点至下午6点；10月至次年3月，开放时间缩短为上午10点至中午12点，下午2点至5点，且每周二闭馆（除非是学校假期期间）。公园区域开放时间更长。每年7月和8月，城堡会在特定夜晚开放，举办夜间灯光秀或音乐会。重大节假日如圣诞节和元旦可能关闭，建议出行前务必在其官方网站确认最新时间表。`} />
              <InfoRow label="门票价格" value={`成人票价为9欧元。优惠票价适用于学生、12-18岁青少年及10人以上团体，价格为7欧元。12岁以下儿童免费入场。另外提供家庭套票（2成人+2儿童）价格为25欧元。门票包含城堡主楼、附属建筑、小教堂及法式花园的参观。提供法语和英语的导览手册，需额外支付1欧元租赁。每年9月的欧洲遗产日，城堡可免费进入。`} />
              <InfoRow label="地址" value={`Château de Sully-sur-Loire, 45600 Sully-sur-Loire, France`} />
              <InfoRow label="交通方式" value={`从巴黎出发最为便捷。从巴黎奥斯特里茨火车站乘坐前往尼维尔或图尔方向的区域快线列车，在奥尔良中央站下车，车程约1小时，班次频繁。从奥尔良火车站前，转乘7号巴士线路（Région Centre – Rémi巴士），终点站即为叙利苏卢瓦尔镇中心，车程约50分钟，但每日班次有限，需提前查好时刻表。更推荐的方式是从奥尔良火车站租车自驾，沿D951或A71公路行驶约45分钟即可抵达，城堡外有免费停车场。从巴黎戴高乐机场或奥利机场也可直接租车，沿A10高速公路向南，车程约1.5-2小时。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从很久以前说起。我们现在看到的叙利城堡，其基石在14世纪末，由一位名叫居伊·德·拉·特雷穆瓦耶的领主奠定。在那个年代，法国深陷于与英格兰的百年战争泥潭，卢瓦尔河作为重要的战略防线和王室避难所，沿岸的防御工事至关重要。特雷穆瓦耶家族看中了叙利这个咽喉要地，决心建造一座固若金汤的堡垒。最初的工程聚焦于实用性：宽阔的护城河直接从卢瓦尔河引水，高大的主塔楼作为最后的守御据点，双重围墙形成致命的交叉火力网。城堡不是为了享受生活，而是为了在战乱中活下去。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，让叙利城堡真正在史册上留下浓墨重彩一笔的，是下一个家族——贝特朗·杜·盖克兰，那位被誉为法兰西民族英雄的传奇统帅，曾是这里的主人之一。但真正将其转变为权力与艺术庇护所的，是后来的所有者，苏利公爵马克西米利安·德·贝坦。他是法王亨利四世的密友和财政大臣，一个务实的天才。苏利公爵没有拆掉中世纪的城墙去建华丽的宫殿，他是个实用主义者，他加固、修缮、并赋予了城堡新的功能。他增建了那座优雅的、带有文艺复兴风格窗户的侧翼楼阁，让坚硬的要塞有了一丝居住的柔和气息。在他的时代，城堡不仅是家园，更是一个庞大的庄园管理和经济中心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`叙利城堡的命运总是与法国的动荡交织。它最著名的“客人”，恐怕是启蒙运动的巨人伏尔泰。1725年，年轻的伏尔泰因为写诗讽刺权贵，被下令逮捕。是他的情人、里舍利厄公爵夫人的暗中安排，将他秘密藏匿在叙利城堡长达数月。你可以想象，在那个被水环绕的静谧世界里，伏尔泰被困于高墙之内，却让思想在更广阔的天空翱翔。他在这里读书、写作，也许正是这段被迫的隐居，让某些改变世界的思想火花得以酝酿。城堡以另一种方式，参与了历史的进程。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`法国大革命的风暴几乎摧毁了它。城堡被没收，内部被洗劫一空，那些象征着封建贵族荣耀的纹章被凿去。它一度沦为国家财产的仓库，甚至被考虑拆毁。幸运的是，它的结构足够坚固，实用性再次拯救了它。19世纪，它被转卖给私人所有者，得到了缓慢的修复。两次世界大战中，它奇迹般地未遭受严重破坏，庞大的地下空间还曾被用作躲避空袭的掩体。直到1962年，卢瓦雷省最终购回了城堡，开始了科学、系统的修复工作。今天我们所见的，是历经六个多世纪的风雨、战争、忽视与重生后，沉淀下来的模样。每一块砖石，都像书页一样，记录着从防御工事，到贵族府邸，再到国家遗产的完整史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正感受叙利城堡的灵魂，建议安排至少半天的时光。最好在上午十点前抵达，这时旅行团尚未涌入，护城河面晨雾将散未散，光线柔和，是拍照和静静感受氛围的黄金时间。整体游览节奏宜慢不宜快，大致需要3到4小时。建议先从外部环绕护城河漫步一圈，建立整体印象，然后过桥进入城堡内部，按照从防御工事到生活区域的顺序参观，最后在法式花园里放松回味。这样的安排能让你清晰地体会城堡从“盾牌”到“家园”的功能演变，理解其建筑布局背后的逻辑。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`主塔楼的螺旋楼梯非常陡峭且狭窄，穿一双舒适防滑的鞋子至关重要，上下楼时请务必抓紧扶手。城堡内部许多房间为保护古迹没有现代暖气，即使夏季也颇感阴凉，记得带上一件薄外套。尽量避免在7、8月的周末下午前往，那是法国本土游客的高峰期，宁静的氛围会大打折扣。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从停车场穿过林荫道，首先在护城河外侧的西南角停下，完整欣赏城堡倒映在水中的双重震撼景象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走过发出历史回声的厚重木制吊桥，进入阴暗的门楼通道，仰头观察头顶用于防御的谋杀孔。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步入开阔的内庭院，顺时针漫步，用手触摸不同年代砌筑的冰凉石墙，感受从粗犷到精细的变迁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`攀爬主塔楼狭窄的螺旋石阶，登上屋顶平台，在猎猎风声中360度俯瞰整个城堡布局、小镇屋顶和无尽的卢瓦尔河森林。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观装饰着华丽挂毯和巨大壁炉的领主大厅，想象苏利公爵在此接待国王与谋划国事的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`钻进地下阴凉深邃的拱顶房间，那里曾是厨房、酒窖和关押囚犯的地牢，气氛瞬间变得神秘而沉重。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后步入城堡东侧规整的法国式花园，在修剪整齐的黄杨树篱间散步，让紧绷的历史神经在几何美感中舒缓下来。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`护城河西南侧草坪`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，阳光为城堡石墙染上金色，利用护城河作为前景拍摄完整倒影，构图时让城堡占据画面上三分之二。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主塔楼屋顶平台`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗的上午十点左右，面向内庭院方向，拍摄由不同建筑围合而成的几何形庭院全景，捕捉阳光在屋顶斜坡上形成的光影分割线。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`法式花园尽头回望`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，站在花园最东端，透过整齐的树篱拱门框架式构图拍摄城堡侧面，能拍出极具纵深感与秩序美的照片。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城堡门楼内侧仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，站在内庭院抬头拍摄门楼与主塔楼的交汇处，强烈的明暗对比能完美勾勒出中世纪建筑的雄浑力量感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏光镜可以极大消除护城河水面的反光，让城堡倒影更加清晰透彻。无人机飞行在城堡上空是严格禁止的，请务必遵守规定。内部展厅允许不使用闪光灯拍照，但请尊重其他参观者和脆弱的历史织物。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济舒适`}</h4>
                  <p className="text-sm text-blue-800">{`住在叙利苏卢瓦尔镇中心河边的小旅馆，推开窗就能看到城堡的侧影，晚上听着潺潺水声入睡，清晨伴着面包店的香气醒来。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`选择卢瓦尔河谷乡村深处的石头屋民宿，由热情的农场主人经营，早餐能吃到自家果园的果酱和蜂蜜，感受纯粹的法国田园生活。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车半小时入住奥尔良市中心一家由古老贵族公馆改造的精品酒店，享受现代化的奢华服务，同时便于探索这座“圣女贞德之城”的夜间魅力。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`隐居之选`}</h4>
                  <p className="text-sm text-purple-800">{`租下森林边缘一栋带私人花园和烧烤架的静谧小屋，自己从当地市场采购食材，白天探索城堡，晚上在星空下享受无人打扰的度假时光。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`叙利苏卢瓦尔镇本身非常安静，夜间娱乐选择很少，但这正是其魅力所在——专注于城堡和历史。如果希望夜生活丰富些，建议以奥尔良为基地。夏季和节假日务必提前很久预订，尤其是河谷中的特色民宿非常抢手。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开叙利城堡很久以后，那片宽广如湖的护城河和水中沉稳的倒影，依然会时常浮现在我的脑海里。它给我的触动，不同于看到极致美学时的惊叹，而是一种更深沉的、关于“持久”的慰藉。在这个追求速度、新奇和流于表面刺激的时代，叙利城堡像一块定锚石。它告诉我们，有些事物可以穿越战火、革命和时尚的轮回，仅仅依靠其坚固的本质和不可替代的功能，便能安静地存在下去。它不讨好你，只是在那里，展现着它原本的模样——既是防御的矛与盾，也是庇护的家与巢。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`我想，每一位热爱深度游的旅人都该来此看看，正是因为这里没有迪士尼式的幻梦。它提供了一个机会，让我们暂时离开那个被精心包装、意义过剩的现代世界，去接触一种更原始、更朴素的历史逻辑：关于安全，关于领地，关于如何在动荡的世界中为自己划出一片宁静的水域。站在吊桥上，你会不由自主地思考边界与守护的意义。叙利城堡不仅仅是一处景点，它是一堂关于时间、物质与生存的沉默哲学课，在卢瓦尔河永不疲倦的流淌中，等待着每一位愿意慢下来、用心阅读的过客。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/dinan-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迪南老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dinan Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/fontenay-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    丰
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">丰特莱修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Fontenay Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/dinan-medieval-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迪南中世纪古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dinan</p>
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
