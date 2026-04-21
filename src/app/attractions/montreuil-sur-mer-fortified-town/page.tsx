import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '蒙特勒伊 Montreuil-sur-Mer｜芳汀的悲歌与不再临海的传奇防御古城 - 最佳欧洲景点',
  description: '第一眼看到蒙特勒伊，你会怀疑自己的导航是不是出了错。你驱车穿过平坦的皮卡第田野，目的地明明叫“海边的蒙特勒伊”，可眼前哪有海的影子？只有一座被厚实城墙环抱的小山丘，静静地矗立在河谷之上。把车停在城墙外，穿过古老的城门，那一刻，仿佛穿过了一层透明的时光薄膜。城里的空气似乎都比外面沉静几分，混合着老石头',
}

export default function MontreuilSurMerFortifiedTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/france' },
            { label: '蒙特勒伊', href: '/destinations/france' },
            { label: '蒙特勒伊', href: '/attractions/montreuil-sur-mer-fortified-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`蒙特勒伊・Montreuil-sur-Mer・法国・蒙特勒伊`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到蒙特勒伊，你会怀疑自己的导航是不是出了错。你驱车穿过平坦的皮卡第田野，目的地明明叫“海边的蒙特勒伊”，可眼前哪有海的影子？只有一座被厚实城墙环抱的小山丘，静静地矗立在河谷之上。把车停在城墙外，穿过古老的城门，那一刻，仿佛穿过了一层透明的时光薄膜。城里的空气似乎都比外面沉静几分，混合着老石头潮湿的苔藓味、面包店飘出的黄油香气，以及远处咖啡馆隐约传来的杯碟轻碰声。
脚下的石板路被几个世纪的行人磨得温润发亮，一路向上蜿蜒。你的呼吸随着坡度微微急促，而眼睛却贪婪地捕捉着一切：赭石色砖墙配着墨绿色木窗的小屋，窗台上盛放的天竺葵红得耀眼；转角突然出现的陡峭石阶，通往另一个隐藏的静谧广场；偶尔有当地人推着自行车与你擦肩而过，轻声说着“Bonjour”。这里没有海滨的喧嚣，只有一种被妥善收藏起来的、内陆山城的安宁。你会发现，当地人走路的速度都慢半拍，生活围绕着每周两次的市集、教堂的钟声和自家的小花园展开。
而真正让你心头一颤的，是当你爬上最高的城墙步道，凭栏远眺时。眼前是开阔的康什河谷，绿意绵延至天际线，唯独不见大海。这时你才真切体会到这个名字背后的历史玩笑与沧桑——它曾是一个忙碌的港口，海水就在城墙脚下拍打。如今，海已退至数十公里外，留下的是一座“名不副实”的城，和一段被陆地封存的航海记忆。这种巨大的反差，正是蒙特勒伊最核心的魅力：它是一个关于失落与变迁的物理证据，安静，却振聋发聩。
当然，还有一种无处不在的“存在”，那是文学赋予它的第二重生命。走在这些街道上，你会不自觉地寻找一个名叫“芳汀”的女子的影子。虽然她是虚构的，但雨果将她的悲惨与救赎锚定于此，让每一块冷硬的城墙砖石，仿佛都浸染了一层文学的悲悯与温度。现实与虚构在这里变得模糊，让你不禁思考，究竟是一座城成就了一个故事，还是一个故事复活了一座城。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一眼看到蒙特勒伊，你会怀疑自己的导航是不是出了错。你驱车穿过平坦的皮卡第田野，目的地明明叫“海边的蒙特勒伊”，可眼前哪有海的影子？只有一座被厚实城墙环抱的小山丘，静静地矗立在河谷之上。把车停在城墙外，穿过古老的城门，那一刻，仿佛穿过了一层透明的时光薄膜。城里的空气似乎都比外面沉静几分，混合着老石头潮湿的苔藓味、面包店飘出的黄油香气，以及远处咖啡馆隐约传来的杯碟轻碰声。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "脚下的石板路被几个世纪的行人磨得温润发亮，一路向上蜿蜒。你的呼吸随着坡度微微急促，而眼睛却贪婪地捕捉着一切：赭石色砖墙配着墨绿色木窗的小屋，窗台上盛放的天竺葵红得耀眼；转角突然出现的陡峭石阶，通往另一个隐藏的静谧广场；偶尔有当地人推着自行车与你擦肩而过，轻声说着“Bonjour”。这里没有海滨的喧嚣，只有一种被妥善收藏起来的、内陆山城的安宁。你会发现，当地人走路的速度都慢半拍，生活围绕着每周两次的市集、教堂的钟声和自家的小花园展开。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而真正让你心头一颤的，是当你爬上最高的城墙步道，凭栏远眺时。眼前是开阔的康什河谷，绿意绵延至天际线，唯独不见大海。这时你才真切体会到这个名字背后的历史玩笑与沧桑——它曾是一个忙碌的港口，海水就在城墙脚下拍打。如今，海已退至数十公里外，留下的是一座“名不副实”的城，和一段被陆地封存的航海记忆。这种巨大的反差，正是蒙特勒伊最核心的魅力：它是一个关于失落与变迁的物理证据，安静，却振聋发聩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当然，还有一种无处不在的“存在”，那是文学赋予它的第二重生命。走在这些街道上，你会不自觉地寻找一个名叫“芳汀”的女子的影子。虽然她是虚构的，但雨果将她的悲惨与救赎锚定于此，让每一块冷硬的城墙砖石，仿佛都浸染了一层文学的悲悯与温度。现实与虚构在这里变得模糊，让你不禁思考，究竟是一座城成就了一个故事，还是一个故事复活了一座城。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`蒙特勒伊`} />
                <InfoRow label="英文名称" value={`Montreuil-sur-Mer`} />
                <InfoRow label="正式名称" value={`Montreuil-sur-Mer`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`蒙特勒伊`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`曾是中世纪法国最重要的海港与军事要塞之一，后因地理变迁与雨果的文学巨著而获得不朽的文化身份。`} />
                <InfoRow label="建筑特色" value={`层层叠叠、保存完好的中世纪城墙与堡垒体系，环绕着一座宁静如时光胶囊的内陆山城。`} />
                <InfoRow label="建筑风格" value={`以中世纪军事防御建筑为核心，混杂了罗马式、哥特式以及17世纪沃邦式堡垒的加固元素。`} />
                <InfoRow label="文化价值" value={`它是维克多·雨果笔下《悲惨世界》灵魂人物芳汀的故乡，一个文学想象与历史实体交织的永恒地标。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城本身全天开放，可自由漫步。主要室内景点如城墙博物馆、雨果故居纪念馆等开放时间各异：城墙博物馆通常在每年四月至十月开放，具体时间为每天上午10点至下午12点半，下午2点至6点；十一月至次年三月仅周末开放或需预约。圣母教堂开放时间较长，一般为上午9点至傍晚7点。建议出行前在蒙特勒伊旅游局官网核对最新时刻表，法国法定节假日部分场馆会闭馆。`} />
              <InfoRow label="门票价格" value={`漫步古城免费。攀登城墙与参观城墙博物馆联票约6欧元。雨果纪念馆门票约3欧元。圣母教堂免费进入，但欢迎捐赠。优惠政策：通常对12岁以下儿童、学生及65岁以上长者有折扣，家庭套票更划算。具体价格请以现场公告为准。`} />
              <InfoRow label="地址" value={`Place Gambetta, 62170 Montreuil-sur-Mer, France`} />
              <InfoRow label="交通方式" value={`从巴黎出发最便捷：从巴黎北站乘坐TGV高速火车至加来弗雷敦站，车程约1小时15分钟；或乘坐TER区域列车至埃塔普勒-勒图凯站，车程约1小时40分钟。从上述两个火车站，再转乘当地公交或出租车前往蒙特勒伊（车程约20-30分钟）。班车频率不高，尤其是周末，强烈建议提前在SNCF官网或App上查询并购买火车票，并规划好接驳时间。若自驾，从加来或埃塔普勒沿D901或D940公路前往，约半小时车程，古城外围有多个付费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "蒙特勒伊的故事，始于大海的馈赠，终于大海的撤离。早在公元9世纪，因为北欧维京人的侵扰，沿海居民被迫向内陆寻找更容易防守的居住点。他们看中了康什河畔这座石灰岩山丘，在此建立定居点，并修建了最初的木制防御工事。由于当时海水深邃，直抵山脚，这里自然成为了一个易守难攻的天然良港。到了中世纪，它迎来了黄金时代，作为布洛涅伯爵领地的重镇，不仅是繁忙的贸易港口，将英格兰的羊毛、弗兰德斯的布料运往欧洲各地，更是通往圣地亚哥德孔波斯特拉朝圣之路上的重要一站。财富滚滚而来，令人目眩的圣母教堂开始兴建，城墙也被一次次加固、扩建，用坚实的石头替代了木头。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的战略地位注定了其多舛的命运。整个中世纪和近代初期，蒙特勒伊都是兵家必争之地。它像一块肥美的肉，被英格兰、法兰西、勃艮第等势力反复争夺、围攻、占领又夺回。城墙在一次次的战火中崩毁，又一次次被重建得更加坚固。最著名的围困发生在1537年，神圣罗马帝国皇帝查理五世的大军将它团团围住，长达数月。据说，守城的法国指挥官为了鼓舞士气，甚至将自己最后的食物——一头驴，分给士兵食用，这就是当地传说“蒙特勒伊之驴”的由来。战争是残酷的，但也锻造了它钢铁般的城防体系。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "命运的转折点悄然而至，并非因为战争，而是自然的力量。从大约16世纪开始，康什河口的泥沙开始以惊人的速度淤积。年复一年，海岸线向西退缩，大海渐渐远离了这座以它为名的城市。港口功能无可挽回地衰落了，商船不再来，贸易转移到了更深的港口如加来和布洛涅。蒙特勒伊从一座喧嚣的海港，慢慢变成了一座安静的内陆驻军城镇。17世纪，军事工程师沃邦元帅巡视这里，虽然海已远去，但他依然看中了其居高临下的防御价值，为它增添了符合当时军事科技的棱堡和防御工事，这是它作为军事要塞最后的辉煌注脚。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当军事重要性也随着时代变迁而淡化，蒙特勒伊似乎就要这样沉寂下去，变成一个普通的法国外省小镇。然而，19世纪，一位文豪的到访彻底改变了它的文化命运。1851年，正处于政治流亡途中的维克多·雨果来到了这里。他被这座古城的沧桑感深深触动，尤其是它那宏伟却已无用的城墙，以及“海边的蒙特勒伊”这个充满讽刺意味的名字。他在这里漫步，沉思，将所见所感融入正在构思的巨著。几年后，《悲惨世界》出版，开篇便写道：“一八一五年，迪涅的主教是查理·弗朗索瓦·卞福汝·米里哀先生……他是一八一五年蒙特勒伊城的主教……”他巧妙地将自己笔下的灵魂人物——受苦的芳汀、赎罪的冉阿让——的生命轨迹与这座古城紧密相连。从此，蒙特勒伊不再只是一座地理上的城，它成了文学世界里一个永恒的坐标，承载着全人类关于苦难、救赎与希望的原型故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天的蒙特勒伊，安然接受了它所有的历史层次：失落的港口、坚固的堡垒、文学的圣地。战争远去，涛声不再，只留下2.3公里几乎完整的城墙，环绕着城内不到2000位居民。它不再需要防御任何外敌，只是静静地守护着一段关于变迁的记忆，和一份由雨果馈赠的、不朽的温柔。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受蒙特勒伊的层次，建议安排大半天时间（约4-5小时）。最佳抵达时间是上午九点前，这时旅游团未至，晨光柔和，你能独享古城的宁静。路线设计为一个大环线，从外围的城墙开始，建立宏观地理认知，然后深入城内窄巷，触摸生活脉搏与文学印记，最后在高点俯瞰全景作结。节奏宜慢，多留时间给即兴的发现和坐下来发呆。穿一双绝对舒适的步行鞋是关键，因为全程都是上下起伏的坡道和石阶。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城墙某些路段较窄且无护栏，风大时需注意安全，看管好小孩。
城内餐馆不多且午休时间较长，建议计划好午餐时间，或提前在面包店买好简餐。
如果你对《悲惨世界》背景着迷，务必先去旅游局获取专门的文学徒步指南，它会让你眼前的风景充满故事。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城西的圣菲尔曼门进入，立刻右转爬上城墙步道，让清晨的阳光把你和蜿蜒的城墙、宁静的河谷一同染成金色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着西北段城墙一直走到沃邦棱堡，触摸那些冷峻的防御工事，想象士兵在此守望一片早已消失的海。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城墙下来，钻进迷宫般的“小街”区，跟着感觉在那些以“缺口街”、“麻风病人街”为名的巷弄里迷一次路。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在市政厅广场的露天咖啡馆坐下来，点一杯咖啡，观察广场上宁静的日常，并寻找那块纪念雨果到访的铭牌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进昏暗而崇高的圣母教堂，在中殿静静站立，感受从彩窗透下的光束中飞舞的微尘，以及那份历经八个世纪未变的肃穆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂侧门出来，按图索骥寻找雨果笔下“主教座堂”的原型和那些可能与芳汀、冉阿让相关的街角（旅游局有文学漫步地图）。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一路向东爬上全城至高点——城堡遗迹公园，站在空旷的草地上，让360度的全景画卷在你眼前缓缓铺开。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后从城堡下来，沿着另一段城墙漫步返回，在夕阳西下时，体会“海上蒙特勒伊”这个名称在暮色中带来的、诗意的怅惘。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡遗迹公园的制高点`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，以广角镜头将脚下连绵的红色屋顶、远处层叠的城墙与无垠的绿色平原一同收纳，构图上留出大片天空以凸显苍茫感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣母教堂南侧外墙下`}</h4>
                  <p className="text-sm text-gray-700">{`下午的阳光斜射时，寻找那面爬满常春藤的古老石墙，让斑驳的光影与厚重的罗马式柱头形成质感对比，人物可作一个小点缀。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“小街”区的某段陡峭石阶`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚光线柔和时，从下往上仰拍，捕捉石阶的纵深感、两侧老墙的纹理，以及天空在狭窄视野中形成的一线天。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城墙西北角沃邦棱堡的射击孔`}</h4>
                  <p className="text-sm text-gray-700">{`将镜头贴近冰冷的石制射击孔，将其作为画框，聚焦于框外远处河谷的田园风光，形成强烈的历史与现世、防御与宁静的冲突构图。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效减少老建筑石墙上的反光，让色彩和纹理更饱和。无人机飞行在古城上空有严格限制，因属于历史保护区域，起飞前务必查询当地法规。当地人尊重隐私，拍摄居民门窗或私人庭院前最好微笑示意。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`古城心脏的隐居之所`}</h4>
                  <p className="text-sm text-blue-800">{`由16世纪联排屋改造的精品酒店，房间裸露着原始石墙和木梁，早餐在种满玫瑰的隐秘庭院享用，晚上能听见教堂钟声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`城墙脚下的田园诗`}</h4>
                  <p className="text-sm text-green-800">{`家庭经营的民宿，房间窗户正对广阔的河谷，主人会为你准备野餐篮，让你可以去城墙上享受一顿独一无二的日落晚餐。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`文学爱好者的驿站`}</h4>
                  <p className="text-sm text-yellow-800">{`一间以《悲惨世界》为主题设计的小型旅馆，藏书丰富，每个房间以书中人物命名，在芳汀套房的书桌上或许能找到一封“雨果”的手写信。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`河谷边的现代舒适`}</h4>
                  <p className="text-sm text-purple-800">{`位于古城外步行五分钟的现代设计酒店，拥有全景露台和SPA，在徒步游览一整天后，这里是让身体彻底放松的完美港湾。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "古城内的住宿数量非常有限，尤其在夏季和周末，务必提前数月预订。住在城内才能体验入夜后和清晨时分，游客散去、城池“归还”给本地人的那种魔力时刻。治安极好，夜晚独自在城墙边漫步也无需担心。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开蒙特勒伊许久后，我发现自己最常回味的，不是某一张具体的照片，也不是某一段城墙的雄姿，而是一种复杂的、挥之不去的感受。那是一种关于“失去”与“拥有”的哲学课。它失去了大海，失去了港口的繁荣，失去了刀光剑影的战略意义，看起来似乎失去了一切使它伟大的理由。然而，正是在这失去的过程中，它意外地获得了另一种永恒——它成了一座时间的纪念碑，一首关于变迁的物化诗篇，一个让文学灵魂得以栖息的真实巢穴。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当今这个追求“更多”、“更快”、“更新”的世界里，蒙特勒伊的存在像是一个温柔的反叛。它不追赶潮流，不粉饰自己的“名不副实”，反而坦然地、甚至有些骄傲地，将所有的历史断层和地理玩笑都展示给你看。它告诉你，伟大不必与永恒的增长挂钩，真正的力量在于接纳变迁，并在其中找到自己不可替代的身份。对于每一位渴望深度游的旅人而言，这里没有惊心动魄的奇观，却有一种更持久的心灵触动。它邀请你慢下来，去抚摸石头的温度，去倾听地名的回响，去在虚构与真实的交界处沉思。最终，你会带着对“沧桑”二字的全新理解离开，并明白，有些地方，正是因为它的“不完美”和“已逝去”，才如此完美地击中了我们内心关于时间、记忆与故事的所有柔软之处。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/pezenas-france-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩泽纳斯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pézenas</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/place-vendome" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    旺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">旺多姆广场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Place Vendôme</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/saint-jean-d-angely" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣让当热利</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Saint-Jean-d'Angély</p>
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
