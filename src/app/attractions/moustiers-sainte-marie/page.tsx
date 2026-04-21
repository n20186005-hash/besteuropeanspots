import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '穆斯捷-圣玛丽 Moustiers-Sainte-Marie｜悬崖上的陶瓷与流水仙境 - 最佳欧洲景点',
  description: '车子在普罗旺斯起伏的丘陵与薰衣草田间穿行，忽然，前方两片巨大的、泛着铁锈红与灰白色的石灰岩悬崖拔地而起，像是大地张开的两扇巨门。就在这近乎垂直的绝壁缝隙之间，一片密密麻麻的米黄色小屋像藤壶一样附着在山体上，层层叠叠，几乎要倾泻下来。一条银链般的瀑布从更高处的峡谷垂下，在阳光下闪闪发光——那就是穆斯捷...',
}

export default function MoustiersSainteMariePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/france' },
            { label: '上普罗旺斯阿尔卑斯省', href: '/destinations/france' },
            { label: '穆斯捷-圣玛丽', href: '/attractions/moustiers-sainte-marie' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`穆斯捷-圣玛丽・Moustiers-Sainte-Marie・法国・上普罗旺斯阿尔卑斯省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在普罗旺斯起伏的丘陵与薰衣草田间穿行，忽然，前方两片巨大的、泛着铁锈红与灰白色的石灰岩悬崖拔地而起，像是大地张开的两扇巨门。就在这近乎垂直的绝壁缝隙之间，一片密密麻麻的米黄色小屋像藤壶一样附着在山体上，层层叠叠，几乎要倾泻下来。一条银链般的瀑布从更高处的峡谷垂下，在阳光下闪闪发光——那就是穆斯捷-圣玛丽给我的第一眼震撼。它不像个村庄，更像一个奇迹，一个被神随手嵌在岩石里的微缩盆景。
停好车，沿着被磨得发亮的石板路走进村子。最先迎接你的不是人声，而是无处不在的、哗哗的流水声。那条名叫“瀑布河”的小溪被精心导入了路边的石渠，清澈见底的水流奔腾着穿过每一座房子的脚下，给炎热的普罗旺斯空气带来一股沁凉的湿意。空气里混合着好几种味道：湿润的苔藓和石头的气息，从咖啡馆飘出的浓缩咖啡香，还有……一丝若有若无的、泥土被高温烘烤后的陶土味。这种独特的感官组合，立刻把你从纯粹的游客，拉入了一种古老的生活韵律里。
这个村庄的核心魅力，远不止于它的绝世容颜。真正让它“活”起来的，是那叮叮当当响了快五个世纪的声音——陶瓷工匠用小锤轻轻修整胚体的声音，画笔在素白陶坯上划过时细微的沙沙声。几乎每走几步，就能透过一扇敞开的木门，瞥见一个堆满半成品陶罐的工作室，或是陈列着琳琅满目彩陶的店铺。蓝色、绿色、明黄色的精细花纹，描绘着普罗旺斯的花草、狩猎场景或圣经故事。这里的陶瓷不是冰冷的纪念品，它们是时间的证人，是村民们呼吸的一部分。你会看到老匠人坐在店门口，一边晒太阳一边给一只大盘子勾线，神情专注得仿佛在进行一场仪式。在这里，美不是被观赏的，而是被创造和生活的。
当夜幕低垂，游客的喧嚣渐渐退去，村庄才展露出它最静谧的灵魂。路灯次第亮起，在悬崖峭壁上投下温暖的光晕。你坐在小广场的喷泉边，抬头望向那两座悬崖之间——一根长达227米的铁链横跨峡谷，尽头悬挂着一颗闪亮的金星。关于它的传说有很多，或许是骑士还愿，或许是信仰的灯塔。在无边的星空下，听着潺潺水声，看着那颗悬于百米高空的孤独星辰，你会感到一种奇特的安宁。这不再是一个景点，而是一个悬浮在时间之外的梦境，一个关于坚韧、手艺与信仰的，活生生的故事。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在普罗旺斯起伏的丘陵与薰衣草田间穿行，忽然，前方两片巨大的、泛着铁锈红与灰白色的石灰岩悬崖拔地而起，像是大地张开的两扇巨门。就在这近乎垂直的绝壁缝隙之间，一片密密麻麻的米黄色小屋像藤壶一样附着在山体上，层层叠叠，几乎要倾泻下来。一条银链般的瀑布从更高处的峡谷垂下，在阳光下闪闪发光——那就是穆斯捷-圣玛丽给我的第一眼震撼。它不像个村庄，更像一个奇迹，一个被神随手嵌在岩石里的微缩盆景。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`停好车，沿着被磨得发亮的石板路走进村子。最先迎接你的不是人声，而是无处不在的、哗哗的流水声。那条名叫“瀑布河”的小溪被精心导入了路边的石渠，清澈见底的水流奔腾着穿过每一座房子的脚下，给炎热的普罗旺斯空气带来一股沁凉的湿意。空气里混合着好几种味道：湿润的苔藓和石头的气息，从咖啡馆飘出的浓缩咖啡香，还有……一丝若有若无的、泥土被高温烘烤后的陶土味。这种独特的感官组合，立刻把你从纯粹的游客，拉入了一种古老的生活韵律里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这个村庄的核心魅力，远不止于它的绝世容颜。真正让它“活”起来的，是那叮叮当当响了快五个世纪的声音——陶瓷工匠用小锤轻轻修整胚体的声音，画笔在素白陶坯上划过时细微的沙沙声。几乎每走几步，就能透过一扇敞开的木门，瞥见一个堆满半成品陶罐的工作室，或是陈列着琳琅满目彩陶的店铺。蓝色、绿色、明黄色的精细花纹，描绘着普罗旺斯的花草、狩猎场景或圣经故事。这里的陶瓷不是冰冷的纪念品，它们是时间的证人，是村民们呼吸的一部分。你会看到老匠人坐在店门口，一边晒太阳一边给一只大盘子勾线，神情专注得仿佛在进行一场仪式。在这里，美不是被观赏的，而是被创造和生活的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当夜幕低垂，游客的喧嚣渐渐退去，村庄才展露出它最静谧的灵魂。路灯次第亮起，在悬崖峭壁上投下温暖的光晕。你坐在小广场的喷泉边，抬头望向那两座悬崖之间——一根长达227米的铁链横跨峡谷，尽头悬挂着一颗闪亮的金星。关于它的传说有很多，或许是骑士还愿，或许是信仰的灯塔。在无边的星空下，听着潺潺水声，看着那颗悬于百米高空的孤独星辰，你会感到一种奇特的安宁。这不再是一个景点，而是一个悬浮在时间之外的梦境，一个关于坚韧、手艺与信仰的，活生生的故事。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`穆斯捷-圣玛丽`} />
                <InfoRow label="英文名称" value={`Moustiers-Sainte-Marie`} />
                <InfoRow label="正式名称" value={`Moustiers-Sainte-Marie`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`上普罗旺斯阿尔卑斯省`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`法国最美丽的村庄之一，自中世纪以来便是上普罗旺斯地区的宗教圣地与陶瓷手工业中心。`} />
                <InfoRow label="建筑特色" value={`村庄如燕巢般紧贴在两道悬崖绝壁之间，房屋沿陡峭山坡层叠而建，一条清冽的山涧穿村而过。`} />
                <InfoRow label="建筑风格" value={`典型的普罗旺斯山地民居风格，融合了罗曼式与哥特式的宗教建筑元素。`} />
                <InfoRow label="文化价值" value={`“法国最美村庄”协会创始成员，其延续数百年的彩陶（Faïence）制作传统被列为法国非物质文化遗产。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`村庄公共区域全年全天候开放。陶瓷工坊、博物馆及小型教堂的开放时间各异，通常为每年4月至10月，上午10点至下午6点；冬季（11月至3月）部分工坊和景点可能缩短营业时间或歇业，建议行前查阅具体商家官网。峡谷徒步小径的开放受天气影响，大雨后可能关闭。`} />
              <InfoRow label="门票价格" value={`进入村庄本身免费。陶瓷博物馆门票约5欧元。韦尔东峡谷部分观景台免费，进入自然保护区某些特定徒步小径可能需要支付少量维护费（约2-3欧元）。所有工坊参观免费，消费自理。`} />
              <InfoRow label="地址" value={`Place de l'Église, 04360 Moustiers-Sainte-Marie, France`} />
              <InfoRow label="交通方式" value={`最近的大型交通枢纽是尼斯蓝色海岸机场（NCE）或马赛普罗旺斯机场（MRS）。
从尼斯或马赛出发，最推荐自驾，沿A8高速公路行驶，从“Les Adrets de l‘Estérel”或“Draguignan”出口下，转入D955和D952省道，车程约1.5-2小时。沿途普罗旺斯风光绝美。
若使用公共交通，可从尼斯或马赛火车站乘坐TER列车至“Digne-les-Bains”方向，在“Riez”或“Barrême”站下车，然后转乘稀少的长途巴士（通常是Carlez公司运营，班次极少，一天可能仅1-2班）或出租车（需提前预约）前往穆斯捷，耗时较长且不便，强烈不建议。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`穆斯捷的故事，始于岩石与信仰。早在公元5世纪，来自莱兰群岛的隐修僧侣看中了这道天然屏障般的峡谷，认为这是与世隔绝、潜心修行的绝佳之地。他们在悬崖下开凿洞穴，建立了最初的修道院，“Moustiers”这个名字本身就源于拉丁语的“Monasterium”（修道院）。中世纪时，它的宗教地位日益显赫，甚至吸引了来自意大利卡西诺山本笃会的影响。那道悬挂在峡谷间的著名金星，最广为流传的传说便源于一位名叫“德·布拉卡”的十字军骑士。据说他在与萨拉森人的战争中被俘，他向圣母玛利亚发誓，若能平安返回故乡，便在村庄上空悬挂一颗星。他兑现了诺言，最初的星星可能是金属制成，历经几个世纪的坠落与重铸，如今我们看到的是上世纪50年代重新悬挂的。星星不仅是地标，更是这片土地精神世界的古老锚点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，让穆斯捷在历史中熠熠生辉的，不仅是信仰，还有泥土与火焰的艺术。17世纪，这里迎来命运的转折点。一位名叫安东尼·克洛雷的陶工，据传掌握了意大利法恩扎地区彩釉陶器（Faïence）的秘密配方。本地富含的优质白色粘土与清冽的山涧水，为制陶提供了完美的原料。很快，彩陶工坊如雨后春笋般在溪流两岸建立起来，利用水力驱动捣碎黏土的磨坊。穆斯捷彩陶以其明亮的钴蓝色、独特的“穆斯捷黄”以及繁复精细的装饰图案（特别是“小丑”和“普罗旺斯花卉”主题）迅速风靡，成为法国宫廷和贵族阶层的宠儿。整个18世纪是它的黄金时代，村庄里炉火不息，画师们日夜劳作，产品远销欧洲各地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`盛极必衰，历史的浪潮总在起伏。法国大革命带来的动荡冲击了贵族客户群，而19世纪工业化生产的廉价瓷器更是给了传统手工业致命一击。到19世纪末，最后一座窑炉熄火，穆斯捷的陶瓷传统几乎断绝，村庄陷入了漫长的沉寂，只剩下绝美的风景和日渐破败的工坊。转变发生在20世纪初，一群有远见的艺术家和收藏家，被这里遗留的古老陶瓷碎片和独特氛围所吸引。1927年，陶瓷艺术家马塞尔·普罗文卡尔决心复兴这项技艺，他深入研究古老的釉料配方和绘画技法，并开班授徒。这像是一颗火种，重新点燃了穆斯捷的窑火。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的复兴与保护浪潮，随着“法国最美村庄”协会的成立而到来。穆斯捷成为该协会在1982年的创始成员之一。这项标签不仅带来了游客，更唤醒了当地人对自身文化遗产的自豪感与保护意识。古老的工坊被重新修缮，新一代的陶艺家们在遵循传统的同时，也融入现代设计。今天，你在村里看到的数十家工坊，每一家都是一个活态的工作室，是家族技艺的传承，也是个人艺术表达的舞台。与此同时，村庄下方的韦尔东峡谷在1997年被划为地区自然公园，其祖母绿般的河水和险峻的峡谷成为户外爱好者的天堂。于是，穆斯捷完成了华丽的蜕变：它不再是那个单一依赖陶瓷的工业村，而是将绝世自然风光、千年宗教历史、活态的手工艺传统以及宁静的普罗旺斯生活哲学完美融合的独特存在。它从悬崖的庇护中走来，历经辉煌、沉寂与重生，最终成为一颗在时光长河中自己闪耀的星辰。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味穆斯捷，请务必安排至少一晚的停留。最佳方式是第一天下午或傍晚抵达，入住后先在村庄里随意走走，感受日落时分光影在悬崖上移动的魔力以及入夜后的宁静。第二天上午约9点开始正式探索，此时光线柔和，旅游团尚未大批涌入。整体游览需要4-5小时，节奏宜慢不宜快，核心在于“沉浸”——用手触摸陶瓷的温润，用耳朵聆听流水与历史的声音，用心感受工匠们的专注。路线从村庄低处的停车场开始，逆着水流向上，逐步探索世俗生活、手工艺核心、宗教精神，最后以一段自然徒步收尾，形成完整的体验闭环。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季（7-8月）上午10点后至下午5点前是旅游大巴高峰期，主街会非常拥挤，尽量利用早晚时间探索核心区。村里石板路陡峭且湿滑（因流水），务必穿一双防滑舒适的鞋。购买陶瓷是很好的纪念，但请尊重工艺，避免过度讨价还价，大多数工坊支持国际邮寄，不必自己负重携带。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从村庄主停车场出发，先别急着上山，沿着潺潺的“瀑布河”石渠慢慢走，感受水流带来的清凉和两岸百年老屋墙面上斑驳的光影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`信步走进任意一家敞着门的陶瓷工坊，别害羞，看匠人拉坯或画花，即使不买也摸摸那些釉面温润的盘子，问问花纹的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着陡峭的“阶梯街”向上攀登，数着古老的台阶，在中途的小平台喘口气回望，整个村庄的红色屋顶会在你脚下如画卷般展开。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`抵达山顶的圣母教堂，推开厚重的木门，感受瞬间的昏暗与清凉，静静看一束光从彩窗射入，照亮空气中飞舞的微尘。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂侧门出来，找到那条通往“金星观景台”的隐秘小径，站在铁链正下方，以最震撼的角度仰望那颗悬挂在苍穹之间的传奇之星。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后，一定要拜访“穆斯捷陶瓷博物馆”，花一小时看看那些从废墟中挖掘出的17世纪瑰宝，你会读懂眼前所有精美瓷器背后的生命线。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午餐后，驱车或步行前往村庄下方约2公里处的韦尔东峡谷第一个观景台，凝视那刀劈斧削般的悬崖和翡翠色的河水，感受自然造物的威严。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间和体力允许，沿着“白径”向下走一小段，直到你听到轰鸣的水声，看到河水在巨石间奔腾，用峡谷的野性之力为整个旅程画上句号。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`村庄全景明信片位`}</h4>
                  <p className="text-sm text-gray-700">{`从D952公路即将进入村庄的最后一个弯道处停车，使用长焦镜头压缩空间，将层叠的房屋、教堂钟楼与背景的巨大悬崖同框，最佳时间是日出后一小时或日落前两小时，金光照亮崖壁。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`石桥与流水巷`}</h4>
                  <p className="text-sm text-gray-700">{`在村庄中心主桥（Pont du Roch）上，向下游方向拍摄，将古老的石拱桥、奔腾的溪流、两侧挂满鲜花的石屋作为前景，远处高耸的悬崖作为背景，构图充满纵深感，阴天散射光下色彩更润。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`陶瓷工坊窗景`}</h4>
                  <p className="text-sm text-gray-700">{`征得店主同意后，从工坊内部向外拍摄，以正在绘制的精美陶器为前景并虚化，聚焦于窗外古老的石头街道和过往的行人，形成手工艺与日常生活的诗意对话，上午室内光线最佳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣母教堂星空之窗`}</h4>
                  <p className="text-sm text-gray-700">{`夜晚，在教堂下方的广场空地，用三脚架长曝光，将教堂斑驳的石墙和美丽的罗马式钟楼作为主体，让夜空中那条隐约可见的铁链和金星成为画龙点睛的天空元素。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效消除溪流和陶瓷釉面的反光，让颜色更饱和。拍摄工匠工作时务必先微笑示意并获得许可，尊重他们的劳动和隐私。峡谷内无人机飞行有严格限制，需提前查询自然保护区规定，村庄上空因有直升机观光也需谨慎。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`流水梦境之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在村庄中心一栋17世纪老宅改造的民宿，房间窗户正对着穿村而过的溪流，整晚枕着潺潺水声入眠，主人早餐会端出自制的果酱和刚烤好的牛角包。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`陶艺家之家`}</h4>
                  <p className="text-sm text-green-800">{`由一对陶艺家夫妇经营的精品客栈，每个房间都装饰着主人亲手制作的陶瓷艺术品，甚至有机会在私密的小花园里体验一次手工拉坯，沉浸在艺术氛围的核心。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`隐居悬崖畔`}</h4>
                  <p className="text-sm text-yellow-800">{`村庄外围安静坡地上的独栋石屋，拥有可以俯瞰整个村庄屋顶和远处峡谷的私人露台，傍晚一边喝着本地玫瑰酒，一边看悬崖被夕阳染成金红色，享受绝对的静谧。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`奢华田园风`}</h4>
                  <p className="text-sm text-purple-800">{`距离村庄几分钟车程、隐藏在橄榄园与薰衣草田间的四星级庄园酒店，拥有全景泳池和米其林推荐餐厅，将普罗旺斯的田园奢华与穆斯捷的奇景完美结合。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`村庄内的住宿数量有限且极其抢手，尤其是带有景观的房间，必须提前至少3-4个月预订。夏季晚上村庄非常安静安全，但部分路段路灯昏暗，建议使用手电。选择村外住宿需有自驾车，但能获得更开阔的视野和宁静。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开穆斯捷好多天了，我的手指仿佛还能感受到那些陶瓷器皿圆润的边缘，耳朵里还回响着昼夜不休的流水声。它给我的，不仅仅是一次视觉的惊艳，更像是一次心灵的校准。在这个一切都追求快、新、奇的世界里，穆斯捷固执地、优雅地慢着。它的时钟，是用窑炉的火焰来衡量的，是用画笔一笔一笔描画的速度来行走的。你会发现，真正的奢侈不是拥有多少，而是像这里的匠人一样，能用一生的时间去专注做好一件事，并与自己生活的土地、流淌的溪水、呼吸的空气深深绑定。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，为什么要来穆斯捷-圣玛丽？不仅仅是为了拍一张挂在悬崖上的明星村庄照片。更是为了来见证一种可能——一种人类社群与自然奇观和谐共处数百年的可能，一种传统技艺在现代化浪潮中不仅幸存而且焕发新生的可能，一种在喧嚣世界之外，依然能找到专注、宁静与持久创造力的可能。它像那颗悬挂在峡谷间的金星，在普罗旺斯深邃的夜空里，也许并不耀眼夺目，却稳定地散发着属于自己的、坚韧而温暖的光芒。它提醒着我们，最美的风景，往往存在于天地大美与人间烟火的交汇处，存在于那些被时间打磨得闪闪发光的日常里。来这里，不仅是旅行，更是一场向“专注”与“持久”的致敬。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/sarlat-la-caneda" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨尔拉拉卡内达</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sarlat-la-Canéda</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/saint-guilhem-le-desert-abbey-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣吉米扬隐修村</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Saint-Guilhem-le-Désert</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/uzes-duchy-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    于
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">于泽斯公国古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Uzès</p>
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
