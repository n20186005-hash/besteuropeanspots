import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '斯瓦尔巴朗伊尔城 Longyearbyen｜探访北极熊比人多的世界最北端小镇与全球种子库 - 最佳欧洲景点',
  description: '飞机开始下降，窗外的景色会让你忘记呼吸。那不是你熟悉的任何一种地貌——巨大的、沉默的、被冰川雕刻出的黝黑山脉，披着永恒的雪衣，环绕着一片看似玩具般脆弱的彩色房屋。这就是你对朗伊尔城的第一眼印象：人类文明在洪荒之力边缘一次微小而倔强的定居。走出机舱，呼吸到的第一口空气凛冽、纯净，带着一种近乎金属的清澈...',
}

export default function LongyearbyenSvalbardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '斯瓦尔巴朗伊尔城', href: '/attractions/longyearbyen-svalbard' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`斯瓦尔巴朗伊尔城・Longyearbyen・挪威・斯瓦尔巴群岛`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`飞机开始下降，窗外的景色会让你忘记呼吸。那不是你熟悉的任何一种地貌——巨大的、沉默的、被冰川雕刻出的黝黑山脉，披着永恒的雪衣，环绕着一片看似玩具般脆弱的彩色房屋。这就是你对朗伊尔城的第一眼印象：人类文明在洪荒之力边缘一次微小而倔强的定居。走出机舱，呼吸到的第一口空气凛冽、纯净，带着一种近乎金属的清澈感，瞬间刺穿你的肺叶。这里的气味很独特，是干净的冰雪味，偶尔混杂着从老旧煤矿飘来的、一丝淡淡的工业气息。
小镇中心沿着山谷展开，道路是压实的砂石雪道。最打动人的是那些房子，漆成亮红、鹅黄、天空蓝，像孩子撒在雪地上的积木。但仔细看，你会发现它们全都由粗壮的支柱架离地面——底下是深达数百米的永久冻土。走在这里，你会听到的声音很单一：靴子踩在雪地上的“咯吱”声，呼啸而过的雪地摩托的轰鸣，还有风，永不停歇的风，穿过山谷，发出低沉的呜咽。在这里，当地人走路时会习惯性地扫视四周，不是为了看车，而是在进行一种下意识的“北极熊检查”。路边的警示牌上画的不是限速标志，而是北极熊的剪影。这是一种深入骨髓的认知：在这里，人类是客人，自然才是真正的主人。
然而，就在这片以荒凉和危险著称的土地上，却生活着大约2500名来自世界各地的居民。他们中有矿工的后代，有极地科研人员，有艺术家，有冒险家。你会看到他们穿着厚重的雪地靴，在唯一的超市里购买价格不菲的蔬菜，在全世界最北端的酒吧里喝着啤酒聊天。这里的生活有一种奇特的混合感：先进的卫星网络和古老的生存法则并存，全球化的社区与极端的孤立感交织。最让你心头一动的，可能是看到小学操场外竖着高高的防熊铁丝网，而孩子们就在里面无忧无虑地玩耍。这种强烈的对比，正是朗伊尔城最核心的魅力——它展示了人类在自知渺小的情况下，依然选择诗意地、负责地栖居。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`飞机开始下降，窗外的景色会让你忘记呼吸。那不是你熟悉的任何一种地貌——巨大的、沉默的、被冰川雕刻出的黝黑山脉，披着永恒的雪衣，环绕着一片看似玩具般脆弱的彩色房屋。这就是你对朗伊尔城的第一眼印象：人类文明在洪荒之力边缘一次微小而倔强的定居。走出机舱，呼吸到的第一口空气凛冽、纯净，带着一种近乎金属的清澈感，瞬间刺穿你的肺叶。这里的气味很独特，是干净的冰雪味，偶尔混杂着从老旧煤矿飘来的、一丝淡淡的工业气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇中心沿着山谷展开，道路是压实的砂石雪道。最打动人的是那些房子，漆成亮红、鹅黄、天空蓝，像孩子撒在雪地上的积木。但仔细看，你会发现它们全都由粗壮的支柱架离地面——底下是深达数百米的永久冻土。走在这里，你会听到的声音很单一：靴子踩在雪地上的“咯吱”声，呼啸而过的雪地摩托的轰鸣，还有风，永不停歇的风，穿过山谷，发出低沉的呜咽。在这里，当地人走路时会习惯性地扫视四周，不是为了看车，而是在进行一种下意识的“北极熊检查”。路边的警示牌上画的不是限速标志，而是北极熊的剪影。这是一种深入骨髓的认知：在这里，人类是客人，自然才是真正的主人。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，就在这片以荒凉和危险著称的土地上，却生活着大约2500名来自世界各地的居民。他们中有矿工的后代，有极地科研人员，有艺术家，有冒险家。你会看到他们穿着厚重的雪地靴，在唯一的超市里购买价格不菲的蔬菜，在全世界最北端的酒吧里喝着啤酒聊天。这里的生活有一种奇特的混合感：先进的卫星网络和古老的生存法则并存，全球化的社区与极端的孤立感交织。最让你心头一动的，可能是看到小学操场外竖着高高的防熊铁丝网，而孩子们就在里面无忧无虑地玩耍。这种强烈的对比，正是朗伊尔城最核心的魅力——它展示了人类在自知渺小的情况下，依然选择诗意地、负责地栖居。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`斯瓦尔巴朗伊尔城`} />
                <InfoRow label="英文名称" value={`Longyearbyen`} />
                <InfoRow label="正式名称" value={`Longyearbyen`} />
                <InfoRow label="国家" value={`挪威`} />
                <InfoRow label="城市" value={`斯瓦尔巴群岛`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`地球上最北端的永久性民用定居点，也是斯瓦尔巴群岛的行政中心，以及守护人类农业未来的“末日种子库”所在地。`} />
                <InfoRow label="建筑特色" value={`一片散落在永久冻土上的彩色木屋群，所有建筑都被高架于地面以防止冻土融化，功能主义设计主导，兼具极地生存的实用性与令人愉悦的北欧色彩美学。`} />
                <InfoRow label="建筑风格" value={`极地实用主义与斯堪的纳维亚简约风格的结合，几乎没有历史建筑，一切以应对严酷气候和矿工生活为出发点。`} />
                <InfoRow label="文化价值" value={`一个超越国家归属的独特人类社区范本，展现了在极端自然法则下（北极熊为尊），人类如何构建社会、发展文化并承担起为全人类保存文明火种的全球责任。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`斯瓦尔巴朗伊尔城本身是一个全年开放的定居点，但游客活动和大部分商业服务具有强烈的季节性。夏季（5月至9月）是旅游旺季，几乎所有旅行社、餐厅、博物馆和商店都开放，且得益于极昼，活动时间很长。冬季（10月至次年4月）则是极夜和极光季节，许多户外活动（如狗拉雪橇、雪地摩托）仍照常进行，但部分旅游设施和餐厅可能减少营业时间或需要预约。全球种子库（Svalbard Global Seed Vault）外部可全年参观，但内部不对公众开放。建议在计划具体活动前，务必查看相关运营商的最新时间表。`} />
              <InfoRow label="门票价格" value={`进入朗伊尔城本身无需门票。城内各景点单独收费：斯瓦尔巴博物馆门票约100挪威克朗；北极探险博物馆门票约100挪威克朗；参加户外活动（如雪地摩托之旅、狗拉雪橇、冰川徒步、乘船游览）价格较高，通常在1500-4000挪威克朗/人不等，具体取决于时长和项目。全球种子库仅可参观外部建筑，免费。`} />
              <InfoRow label="地址" value={`Longyearbyen, 9170, Svalbard, Norway`} />
              <InfoRow label="交通方式" value={`抵达朗伊尔城的主要方式是航空。你需要先飞抵挪威本土的特罗姆瑟（Tromsø）或奥斯陆（Oslo），再从那里乘坐北欧航空（SAS）或挪威航空（Norwegian）的航班飞往朗伊尔机场（LYR）。从奥斯陆直飞约3小时，从特罗姆瑟飞约1.5小时。航班频率随季节变化，夏季每日可能有数班，冬季则减少。这是世界上最北端的拥有定期商业航班的机场之一。城内没有公共交通系统，步行是探索小镇中心的主要方式。参加户外活动通常包含从酒店接送。租车选择极少且价格昂贵，对于普通游客来说，步行和参加团队游是唯一可行的交通方式。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`朗伊尔城的故事，始于煤炭和一个人的冒险。1906年，美国企业家约翰·朗伊尔乘船来到这片当时几乎只属于捕鲸者和探险家的冰封群岛。他敏锐地看到了伊斯峡湾山坡上裸露的优质煤层，并在此建立了第一个系统性的采矿定居点，小镇也以他的名字命名。最初的岁月是难以想象的艰苦。工人们在极夜的黑暗中，在零下三四十度的严寒里，用最原始的工具向大山索取温暖世界的燃料。早期的房屋简陋不堪，生活物资完全依赖夏季短暂通航期从挪威本土运来的补给。死亡是常客，来自矿井事故、雪崩，更来自那些在镇外游荡的、饥饿的北极熊。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`斯瓦尔巴群岛的地位非常特殊。根据1920年签订的《斯瓦尔巴条约》，挪威拥有主权，但所有缔约国的公民都有权在此平等地从事商业和科研活动。这使得朗伊尔城从一开始就带有一种国际化的色彩，虽然冷战时期这里主要是挪威和苏联（俄罗斯）煤矿社区的对峙前沿。你仍然能在小镇另一头看到俄罗斯定居点巴伦支堡的痕迹。采矿是这里的经济命脉，持续了近一个世纪，塑造了小镇硬朗、务实的性格。你会看到废弃的煤矿缆车轨道依旧横跨在山脊上，像巨大的钢铁伤疤，诉说着过往的工业雄心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转折点发生在上世纪末。一方面，煤矿的经济效益下降，矿难频发；另一方面，全球对气候和环境问题的关注日益上升。挪威政府开始有意识地推动斯瓦尔巴从纯粹的采矿经济向科研和旅游中心转型。2006年，最后一座大型煤矿关闭，标志着一个时代的终结。但另一项更具远见的工程，正在小镇旁边的山体中悄然进行。2008年，在一座砂岩山内部120米深处，斯瓦尔巴全球种子库正式启用。它被媒体称为“末日种子库”或“世界农业的诺亚方舟”。选择这里，正是因为永冻层提供了天然的低温，地质稳定，且地理位置偏远而安全。来自世界各地的种子样本被密封在特制铝箔袋中，运抵这里，储存在零下18摄氏度的仓库里，以防人类遭遇全球性灾难时，我们还能重启农业。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如今的朗伊尔城，是这段复杂历史的生动层积。它身上既有矿工小镇粗粝的过去（博物馆里陈列着矿工们的饭盒和煤渣），又有面向未来的全球使命（大学中心里各国科学家在讨论气候变化）。小镇的居民构成也变得更加多元。他们选择在此生活，理由各不相同：有人迷恋极地的纯净与孤独，有人致力于极地科研，有人只是想来体验地球上最独特的生活方式。当你走在街上，看到那些彩色房子、全球种子库简朴的入口建筑、以及远处沉默的群山时，你看到的是一部浓缩的人类极地开拓史，从资源掠夺到科学守护，从生存挑战到存在思考的完整演变。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议至少安排2-3天来真正感受朗伊尔城。第一天专注于小镇本身的文化和历史，适应环境；第二天参加一个全日户外活动，深入荒野；如果有可能，在第三天安排一个专项体验（如参观种子库外部或进行一次冬季极光追寻）。最佳的抵达时间是2-3月（极光、蓝光与白昼的平衡）或6-7月（极昼、野生动物观赏）。一天的游览节奏不宜过快，这里的一切都需要你慢慢走、慢慢看、慢慢感受。务必提前预订所有户外活动，因为运营商的承载量非常有限。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`绝对不要在没有武装向导陪同的情况下离开小镇的标识边界，北极熊危险真实存在且致命。
即使夏季也请务必携带防风防水外套和保暖层，朗伊尔城的天气可以在十分钟内从阳光明媚变为暴风雪。
尊重当地“进屋脱鞋”的普遍习俗，这是保持室内清洁和温暖的必须。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`上午先去斯瓦尔巴博物馆，通过古老的鲸骨、矿工遗物和动植物标本，在心里为这片土地构建一个坚实的认知坐标`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从博物馆出来，顺着主路漫步，仔细观察那些被漆成明艳色彩、由支柱高高架起的木屋，感受建筑与严酷环境的对话`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在“胡斯et”这家杂货店停留，看看货架上来自世界各地的商品和其惊人的标价，体会极地生活的物流成本`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进北极探险博物馆，在那些关于北极熊、沉船和早期探险家故事的陈列前，理解人类对这片冰原的迷恋与恐惧`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后报名参加一个由专业向导带领的“小镇及周边历史徒步”，听他讲述煤矿往事、北极熊遭遇和社区轶事`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚前往全球种子库的入口处，站在那个散发着幽蓝光芒、嵌入山体的朴素混凝土结构前，静默片刻`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚上在最北端的“卡尔国王酒店”酒吧或“矿区3号”餐厅享用一顿可能有驯鹿肉或北极鳕鱼的晚餐，和邻桌的居民或研究员聊聊天`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果是在冬季，入夜后跟随向导驱车前往小镇光污染之外的黑暗处，等待绿色丝带般的极光在群山上空无声舞动`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`全球种子库入口蓝光时刻`}</h4>
                  <p className="text-sm text-gray-700">{`在极夜季节的“蓝光时段”（正午前后），种子库入口的混凝土结构和艺术灯光会与深蓝色的雪地、天空形成极具未来感和孤寂感的画面，构图时将入口置于一侧，留出大面积的雪原和山体。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`朗伊尔城全景从山腰俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`徒步至小镇东侧废弃的煤矿缆车站平台，从这里可以用长焦镜头压缩空间，拍下彩色房屋、教堂与背后荒芜群山、冰川的震撼对比，最佳光线在夏季的午夜太阳低角度照射时。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`主街的生活气息`}</h4>
                  <p className="text-sm text-gray-700">{`在“朗伊尔城”标志牌附近，捕捉居民穿着日常服装、背着步枪（合法且必需）骑车或步行经过彩色木屋的瞬间，这是最能体现此地独特生活方式的纪实画面，任何有自然光线的时间皆可。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`教堂与极光同框`}</h4>
                  <p className="text-sm text-gray-700">{`冬季夜晚，以世界上地理位置最北的朗伊尔城教堂温暖的木制建筑为前景，等待极光在教堂尖顶后方天空爆发，使用三脚架长时间曝光，将人间微光与自然奇观一同收纳。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`极光摄影需要三脚架、广角镜头和手动设置（高ISO、大光圈、数秒至数十秒曝光），提前在温暖环境中练习设置。`}</li>
                <li>• {`拍摄任何居民或他们的财产（如雪地摩托）前，请先礼貌询问。未经许可，不要对着矿场或科研设施内部拍照。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`朗伊尔城旅舍，位于小镇中心一栋实用的木屋内，提供宿舍和简单房间，公共厨房里你能遇见来自全球的背包客和科研实习生，是获取信息的好地方。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`煤矿3号小屋酒店，由昔日矿工宿舍改造，房间保留了工业风的简约结实，暖气和热水充足，住在其中能深切感受到小镇的矿业传承。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`卡尔国王酒店，号称世界最北端的精品酒店，客房温馨雅致，餐厅享有峡湾景色，其大厅的壁炉旁是小镇社交的中心，常能邂逅探险家和作家。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`独特野趣`}</h4>
                  <p className="text-sm text-purple-800">{`预订一家位于小镇外的荒野小屋（如伊斯峡湾畔的），在向导带领下入住，体验真正的极地寂静，夜晚只有风雪声和可能来访的北极光。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`朗伊尔城住宿价格普遍高昂且供应紧张，尤其是在极光季和极昼季，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`几乎所有酒店都会在入口处提供步枪锁和防熊喷雾使用指南，请认真阅读，这不是装饰。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开朗伊尔城许久后，那片冰原的色彩和寂静依然会时常闯入你的脑海。它带给你的触动，并非来自某栋宏伟的建筑或某件珍贵的艺术品，而是来自一种整体的存在感。在这里，人类文明被剥去了许多冗余的外壳，显露出最本质的模样：我们需要温暖、社群、安全，以及对未来的希望。全球种子库那个简单的入口，像一个埋在山体中的誓言，提醒着我们作为人类共同体的责任——即使在最偏远的世界尽头，我们也思考着如何保存和延续生命的多样性。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这就是为什么每一个热爱深度游的人，都应该来一次朗伊尔城。它不仅仅是一个旅游目的地，它是一个思想实验场，一个视角重置点。在这里，你会重新思考“边界”、“社区”、“自然”和“生存”这些词汇的重量。回到喧嚣拥挤、被各种人造规则填满的日常世界后，你会怀念那种在朗伊尔城感受到的、在极端环境中生发出的清晰和直接。你会记得，在一个北极熊比人多的地方，人类以一种谦卑而坚韧的姿态，不仅活了下来，还在为整个星球的未来保存着一份备份。这份记忆，会成为你内心一份沉静而有力的压舱石。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kjerringoy-traditional-trading-post" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    谢
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">谢林岛传统商贸村</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kjerringøy Trading Post</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/nusfjord-fishing-village-lofoten" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    努
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">努斯峡湾</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Nusfjord</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/alesund-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥勒松老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ålesund Old Town</p>
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
