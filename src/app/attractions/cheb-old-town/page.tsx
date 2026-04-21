import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '海布老城 Cheb Old Town｜被时光凝固的边境混血儿，德式木筋房下的波西米亚灵魂 - 最佳欧洲景点',
  description: '说实话，当我第一次从狭窄的石板小巷拐进海布老城广场时，我愣了好几秒。扑面而来的不是典型的、浪漫的布拉格式波西米亚风情，而是一种更厚重、更质朴，甚至带着一丝凌厉的混血美感。眼前展开的，是一片由十一栋糖果色半木结构房子紧密环抱的广场，那些深色的木梁在白墙或彩墙上勾勒出严谨的几何图形，像一幅巨大的、立体的...',
}

export default function ChebOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '捷克', href: '/destinations/czech-republic' },
            { label: '海布', href: '/destinations/czech-republic' },
            { label: '海布老城', href: '/attractions/cheb-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`海布老城・Cheb Old Town・捷克・海布`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，当我第一次从狭窄的石板小巷拐进海布老城广场时，我愣了好几秒。扑面而来的不是典型的、浪漫的布拉格式波西米亚风情，而是一种更厚重、更质朴，甚至带着一丝凌厉的混血美感。眼前展开的，是一片由十一栋糖果色半木结构房子紧密环抱的广场，那些深色的木梁在白墙或彩墙上勾勒出严谨的几何图形，像一幅巨大的、立体的德国童话插图，却被无意中镶嵌在了捷克西南角的版图上。空气里有股好闻的复合味道——隔壁面包房刚出炉的肉桂卷的甜香，混杂着从奥赫热河飘来的湿润水汽，以及老木头在午後阳光下散发出的、略带暖意的陈旧气息。
广场的名字很长，叫“波杰布拉德的伊日王广场”，念起来有点拗口。但当地人只是简单地称之为“广场”。孩子们踩着滑板车在几百年前铺就的石板路上划过，发出清脆的咕噜声；老人们坐在长椅上，用带着德语腔调的捷克语低声闲聊。这里的节奏很慢，慢到你几乎能听见时光在木筋缝隙里流淌的声音。你很快会发现，这里的一切都带着一种“之间”的属性：在捷克与德国之间，在过去与现在之间，在战争的伤痛与日常的宁静之间。最打动人的，正是这种复杂而坦诚的“边境气质”，它不试图伪装成纯粹的捷克或德国，而是坦然地展示着自己层叠的历史与身份。
走到广场一侧，你会看到那组被称为“施帕利切克”的建筑，这是海布的绝对心脏。它不像一座独立的建筑，更像一群手挽着手、肩并着肩的巨人，用它们歪斜的屋顶、突出的楼层和缤纷的立面，守护着广场的亲密尺度。站在它们脚下向上望，那些木梁结构仿佛拥有了生命，讲述着中世纪商人的野心与行会的规矩。而广场中央的巴洛克式瘟疫纪念柱，又为这幅日耳曼风格的画面注入了一丝天主教巴洛克的戏剧性。这种矛盾与融合，构成了海布独一无二的磁力。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`说实话，当我第一次从狭窄的石板小巷拐进海布老城广场时，我愣了好几秒。扑面而来的不是典型的、浪漫的布拉格式波西米亚风情，而是一种更厚重、更质朴，甚至带着一丝凌厉的混血美感。眼前展开的，是一片由十一栋糖果色半木结构房子紧密环抱的广场，那些深色的木梁在白墙或彩墙上勾勒出严谨的几何图形，像一幅巨大的、立体的德国童话插图，却被无意中镶嵌在了捷克西南角的版图上。空气里有股好闻的复合味道——隔壁面包房刚出炉的肉桂卷的甜香，混杂着从奥赫热河飘来的湿润水汽，以及老木头在午後阳光下散发出的、略带暖意的陈旧气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`广场的名字很长，叫“波杰布拉德的伊日王广场”，念起来有点拗口。但当地人只是简单地称之为“广场”。孩子们踩着滑板车在几百年前铺就的石板路上划过，发出清脆的咕噜声；老人们坐在长椅上，用带着德语腔调的捷克语低声闲聊。这里的节奏很慢，慢到你几乎能听见时光在木筋缝隙里流淌的声音。你很快会发现，这里的一切都带着一种“之间”的属性：在捷克与德国之间，在过去与现在之间，在战争的伤痛与日常的宁静之间。最打动人的，正是这种复杂而坦诚的“边境气质”，它不试图伪装成纯粹的捷克或德国，而是坦然地展示着自己层叠的历史与身份。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走到广场一侧，你会看到那组被称为“施帕利切克”的建筑，这是海布的绝对心脏。它不像一座独立的建筑，更像一群手挽着手、肩并着肩的巨人，用它们歪斜的屋顶、突出的楼层和缤纷的立面，守护着广场的亲密尺度。站在它们脚下向上望，那些木梁结构仿佛拥有了生命，讲述着中世纪商人的野心与行会的规矩。而广场中央的巴洛克式瘟疫纪念柱，又为这幅日耳曼风格的画面注入了一丝天主教巴洛克的戏剧性。这种矛盾与融合，构成了海布独一无二的磁力。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`海布老城`} />
                <InfoRow label="英文名称" value={`Cheb Old Town`} />
                <InfoRow label="正式名称" value={`Historic Centre of Cheb`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`海布`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`位于波西米亚王国与德意志诸邦交界的战略要冲，是欧洲中世纪历史风云与三十年战争关键转折点的见证者。`} />
                <InfoRow label="建筑特色" value={`拥有中欧地区最密集、保存最完好的德式半木结构（木筋房）建筑群，尤其是独特的“施帕利切克”商人宅邸群。`} />
                <InfoRow label="建筑风格" value={`罗曼式、哥特式与巴洛克风格混合，但最突出的是中世纪末期至文艺复兴时期的德国风格半木结构建筑。`} />
                <InfoRow label="文化价值" value={`一座活着的“边境博物馆”，其建筑、地名与日常生活深刻体现了德裔波西米亚文化的复杂遗产与战后和解的历程。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`公共广场区域全天24小时开放。主要建筑景点如施帕利切克建筑群、黑塔、城堡废墟等通常在夏季（4月至10月）上午9点至下午6点开放，冬季（11月至3月）开放时间缩短至下午4点，周一多数博物馆闭馆。市政厅内部参观需跟随导览团，通常在固定时段。建议行前查看官网确认最新安排。`} />
              <InfoRow label="门票价格" value={`进入老城广场免费。登上黑塔观景台票价约为80捷克克朗。施帕利切克博物馆联票约为120捷克克朗。城堡遗址公园免费进入，但进入核心的黑色塔楼及教堂废墟内部需购票，约60捷克克朗。学生、老人及家庭享有优惠。`} />
              <InfoRow label="地址" value={`náměstí Krále Jiřího z Poděbrad, 350 02 Cheb, Czechia`} />
              <InfoRow label="交通方式" value={`最近的国际机场是德国纽伦堡机场（约1.5小时车程）或捷克布拉格机场（约2小时车程）。从布拉格中央火车站乘坐火车直达海布是最佳选择，约3小时车程，班次频繁。从纽伦堡中央火车站乘坐跨境火车或巴士，约1-1.5小时。抵达海布火车站后，步行15-20分钟即可轻松抵达老城核心广场。建议使用捷克铁路（ČD）App提前购票。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`海布的故事，始于一座边境城堡。早在公元9世纪，斯拉夫人就在奥赫热河畔的山丘上建立要塞。但真正改变其命运的，是12世纪时德意志人的东进殖民。神圣罗马帝国皇帝腓特烈一世，就是那位著名的“红胡子巴巴罗萨”，看中了这里的战略位置，在此修建了坚固的帝国行宫。从那时起，海布就成了帝国直辖的德意志城镇，一个嵌入波西米亚领土的“飞地”。德语、德意志法律和建筑传统在这里生根，为日后独特的文化身份奠定了基础。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`中世纪是海布的黄金时代。得益于连接纽伦堡和布拉格的商贸路线，它变得极其富裕。13世纪，那些富有的商人开始建造我们如今看到的“施帕利切克”宅邸。这些房子不仅仅是家，更是仓库、商铺和行会大厅。你可以想象当时的场景：广场上挤满了来自各地的马车，牲口的叫声、商贩的吆喝、不同语言的讨价还价声此起彼伏，而楼上精致的窗棂后，商人们正计算着巨大的利润。这座城市用石头和木头，书写着自己的经济独立与骄傲。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，地理位置在带来财富的同时，也带来了灾难。17世纪的三十年战争，这场撕裂了整个欧洲的宗教与权力冲突，将海布推向了风暴眼。1634年2月25日，一个寒冷冬日，一场改变欧洲历史的刺杀在这里发生。帝国军队的统帅、野心勃勃的华伦斯坦公爵，就在他位于广场边的官邸（今天的博物馆）里，被手下军官刺杀。鲜血染红了古老的地板，也终结了他试图调和天主教与新教争端、甚至可能问鼎皇位的野心。这一事件让海布的名字永远刻在了欧洲史教科书上，但战争也几乎摧毁了这座城市，人口锐减，繁荣不再。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战后的海布在哈布斯堡王朝统治下缓慢恢复，巴洛克风格为一些建筑换上了新装，但老城的德意志内核从未改变。真正的撕裂发生在20世纪。二战后，根据《波茨坦协定》，捷克斯洛伐克境内的数百万德裔居民被集体驱逐。几乎一夜之间，海布这座以德裔为主的城市，失去了绝大多数世代居住于此的居民。空荡荡的房子被来自捷克内陆的新移民填补，一段历史被强行画上了休止符，许多记忆随之湮灭。随后的共产主义时期，这些珍贵的历史建筑一度因缺乏维护而衰败。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到1989年天鹅绒革命之后，转机才真正到来。人们开始重新审视这片被忽视的珍宝。大规模的修复工程启动，一栋栋半木房屋从破败中苏醒，重新焕发出色彩。更深刻的是心态的变化：新一代的海布人，无论是捷克裔还是少数回归的德裔后代，开始共同面对这段复杂的历史。他们不再回避“德意志的过去”，而是将其视为城市遗产不可分割的一部分，加以保护和研究。今天的海布老城，每一块修复的木梁，都是一次跨越历史伤疤的和解之举。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天的时间，从清晨开始，以避开可能的一日游团队（他们多来自附近的卡罗维发利温泉区）。上午光线柔和，适合拍照和感受宁静的老城氛围，重点探索广场核心区及周边小巷。下午可以深入城堡遗址，从高处回望老城全景，并参观博物馆了解深度历史。傍晚时分再回到广场，感受华灯初上时“施帕利切克”建筑群的梦幻光影。这样的节奏张弛有度，既能领略建筑之美，又能沉浸于其历史纵深。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周末广场偶尔会有市集，虽然热闹但可能会遮挡建筑立面，纯粹的建筑摄影爱好者建议工作日前往。冬季海布非常寒冷且多阴雨，务必穿防滑保暖的鞋子，许多建筑内部温暖，方便随时进入取暖。当地人以捷克语为主，但靠近德国边境，年长者和商户大多能说德语，用简单的英语沟通也完全没问题。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨第一缕阳光洒向广场时，先去爬黑塔的狭窄木楼梯，在钟声尚未敲响前独享360度笼罩在金色晨曦中的老城屋顶全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从塔楼下来，绕着广场慢走一圈，用手指触摸“施帕利切克”建筑群那些历经数百年风雨、纹理各异的深色木梁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拐进黑塔背后那条名为“斯瓦布”的小巷，看两侧倾斜的半木房屋几乎在空中相接，感受中世纪街道的原始尺度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进位于原华伦斯坦官邸的城市博物馆，在那间著名的、地板颜色暗沉的小厅里，驻足想象1634年那场改变历史的刺杀。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过奥赫热河上的小桥，沿着绿意盎然的步道走向山丘上的城堡遗址，仰望那座孤傲的黑色塔楼与罗曼式教堂废墟。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城堡公园的长椅上坐下，看着对岸色彩斑斓的老城倒映在河水中，静静回味这座城市边境身份的复杂意味。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚回到广场，随意选一家地窖餐厅，点一份扎实的捷克炖牛肉，配上海布本地啤酒，聆听夜晚渐渐活跃起来的市井之声。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`黑塔顶楼西北角窗口`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时，利用窗口作为框架，拍摄广场上“施帕利切克”建筑群的鱼眼状全景，木筋房色彩在侧光下最为饱和。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“施帕利切克”建筑群东侧楼下仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午三点后，阳光斜射，聚焦于一栋房子精致的木雕装饰和彩绘墙面，让构图充满几何线条的张力。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`斯瓦布小巷中段`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分小巷底部也会有光斑，站在巷子一端，用长焦镜头压缩空间，拍出两侧房屋倾斜相靠、极具压迫感的经典画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城堡遗址的黑色塔楼脚下`}</h4>
                  <p className="text-sm text-gray-700">{`日落前黄金半小时，以巨大的黑色砖石塔楼为前景，将对岸色彩柔和的老城建筑群作为背景，形成强烈对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`奥赫热河上的桥梁中央`}</h4>
                  <p className="text-sm text-gray-700">{`蓝调时刻（日落后半小时），三脚架稳定长曝光，拍摄灯火初亮的“施帕利切克”建筑群在水中的完美倒影。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄居民或商户门窗时请保持礼貌，征得同意为宜。使用无人机在历史中心上空飞行有严格限制，需提前查询当地法规。室内博物馆通常禁止使用闪光灯和三脚架。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`下榻广场旁边一栋15世纪修复的半木结构旅店，吱呀作响的木地板、低矮的房梁和窗外直接的广场视野，让你睡在历史的核心。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`河景宁静之选`}</h4>
                  <p className="text-sm text-green-800">{`选择奥赫热河对岸、正对城堡的精品设计酒店，现代舒适的房间里拥有眺望老城天际线的无敌阳台，昼夜景致皆动人。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`温泉放松之选`}</h4>
                  <p className="text-sm text-yellow-800">{`距离老城十分钟车程的边境温泉小镇，入住一家家庭经营的温泉民宿，游览疲惫后泡个治愈的温泉，品尝家酿药酒。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济便捷之选`}</h4>
                  <p className="text-sm text-purple-800">{`火车站附近由世纪初建筑改造的清新旅馆，价格亲民，交通极其便利，主人会热情地为你手绘老城探索地图。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城中心的住宿房间通常不大，且可能没有电梯，预订时需注意。海布治安良好，夜晚独自在老城区行走也很安全。夏季和圣诞市场期间住宿紧张，务必提前预订。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开海布许久后，我脑中挥之不去的，不是某一栋具体的房子，而是那种弥漫在整个空气中的“之间感”。这座城市像一个沉默而坚韧的讲述者，它没有哭诉自己复杂坎坷的身世，只是把所有的历史层——德意志的严谨木构、波西米亚的浪漫色彩、战争的伤疤、驱逐的空白、以及小心翼翼的和解——都平静地展示给你看。它让你明白，真正的欧洲，远不止巴黎的铁塔或罗马的废墟，更多是像海布这样，在边境线上承载着沉重记忆，却依然努力绽放着日常生命力的普通城镇。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求纯粹体验的快节奏世界里，海布的混血与复杂恰恰成了它最珍贵的价值。它拒绝被简单定义。来这里，你不是为了打卡一张明信片风景，而是为了上一堂生动的历史地理课，一堂关于文化如何交织、冲突又如何共存的课。走在它的广场上，你能触摸到欧洲大陆跳动的、真实的脉搏——那脉搏里，有分裂的痛楚，更有愈合的希望。对于一个渴望深度理解的旅人来说，海布老城不是景点，它是一个值得静静聆听、并与之对话的生命体。这份沉静而丰厚的触动，会让你对脚下这片大陆，产生全然不同的认知。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/conques" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    孔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">孔克修道院与小镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Conques</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/norcia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    诺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">诺奇古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Norcia</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gyor" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    杰
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">杰尔古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Győr</p>
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
