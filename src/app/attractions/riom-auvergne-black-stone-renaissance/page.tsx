import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '里永 Riom｜探访被遗忘的“黑色宝石”，火山玄武岩筑成的沉稳文艺复兴古都 - 最佳欧洲景点',
  description: '如果你像我一样，厌倦了那些被游客挤得水泄不通的“明信片小镇”，那么请一定把里永放进你的清单。我抵达的那个清晨，阳光正好以低角度切过街道，第一眼看到的，不是预想中明快的米黄色石头，而是一片深沉、肃穆、近乎于墨色的建筑立面。那一瞬间的感觉非常奇妙，仿佛整座老城不是被建出来的，而是从这片火山高原的土地里生',
}

export default function RiomAuvergneBlackStoneRenaissancePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/europe' },
            { label: '里永', href: '/destinations/europe' },
            { label: '里永', href: '/attractions/riom-auvergne-black-stone-renaissance' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`里永・Riom・法国・里永`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`如果你像我一样，厌倦了那些被游客挤得水泄不通的“明信片小镇”，那么请一定把里永放进你的清单。我抵达的那个清晨，阳光正好以低角度切过街道，第一眼看到的，不是预想中明快的米黄色石头，而是一片深沉、肃穆、近乎于墨色的建筑立面。那一瞬间的感觉非常奇妙，仿佛整座老城不是被建出来的，而是从这片火山高原的土地里生长出来的黑色结晶。空气里有清冽的味道，混合着远处面包店飘来的黄油香气，你的脚步声在由光滑圆石铺成的狭窄街道上发出清脆的回响，格外清晰。
这里没有喧闹的旅游团，只有本地老人提着菜篮慢悠悠地走过，向你投来一个温和而略带好奇的目光。你的手可以触摸那些豪宅的墙壁，触感冰凉而粗砺，那是来自多姆山的火山熔岩，经过匠人之手，被切割成规整的方块。但奇妙的是，当阳光逐渐升高，你会看到这些黑色石头并非一成不变——在强烈的光线下，它会泛出深沉的蓝灰光泽；而在阴影里，它又是纯粹的黑，像天鹅绒一样吸走所有杂光。这种色彩的戏剧性，赋予了里永一种沉静而内敛的力量感，与意大利或卢瓦尔河谷那些张扬的文艺复兴宫殿截然不同。
这些被称为“私人公馆”的豪宅，门面往往并不宽阔，却极尽高耸，仿佛在竞争着谁家的门楣更气派。你要抬起头，细细看那些雕刻：虽然石材是暗色的，但细节之丰富令人咋舌——窗框上缠绕着石雕的葡萄藤，门廊上方可能蹲着一只神态倨傲的石狮，壁柱上刻着当时主人骄傲的家族纹章。它们沉默地站在那里，讲述着16世纪律师、法官和富商们的故事，这里曾是整个地区的“司法之都”，财富与权力在此沉淀。走在其中，你不像是在参观一个景点，更像是在阅读一本立体的、用石头写就的奥弗涅地方志。
最打动我的，是这份辉煌与落寞交织的平衡。它曾贵为首府，如今却安静得像个配角。但正是这种“退场”，让它保留了最本真的气质。生活在此缓缓流动，周六市场里摊贩的吆喝声，教堂整点敲响的钟声，咖啡馆外闲聊的居民……所有这些日常的声响，都被这些黑色的、沉稳的古老墙壁温柔地包裹着，形成了一种难以言喻的、带着历史重量的生活温度。在这里，时间仿佛被这些火山石凝固了，让你有机会喘口气，真正地“走进”历史，而不是被历史推着走。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果你像我一样，厌倦了那些被游客挤得水泄不通的“明信片小镇”，那么请一定把里永放进你的清单。我抵达的那个清晨，阳光正好以低角度切过街道，第一眼看到的，不是预想中明快的米黄色石头，而是一片深沉、肃穆、近乎于墨色的建筑立面。那一瞬间的感觉非常奇妙，仿佛整座老城不是被建出来的，而是从这片火山高原的土地里生长出来的黑色结晶。空气里有清冽的味道，混合着远处面包店飘来的黄油香气，你的脚步声在由光滑圆石铺成的狭窄街道上发出清脆的回响，格外清晰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有喧闹的旅游团，只有本地老人提着菜篮慢悠悠地走过，向你投来一个温和而略带好奇的目光。你的手可以触摸那些豪宅的墙壁，触感冰凉而粗砺，那是来自多姆山的火山熔岩，经过匠人之手，被切割成规整的方块。但奇妙的是，当阳光逐渐升高，你会看到这些黑色石头并非一成不变——在强烈的光线下，它会泛出深沉的蓝灰光泽；而在阴影里，它又是纯粹的黑，像天鹅绒一样吸走所有杂光。这种色彩的戏剧性，赋予了里永一种沉静而内敛的力量感，与意大利或卢瓦尔河谷那些张扬的文艺复兴宫殿截然不同。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些被称为“私人公馆”的豪宅，门面往往并不宽阔，却极尽高耸，仿佛在竞争着谁家的门楣更气派。你要抬起头，细细看那些雕刻：虽然石材是暗色的，但细节之丰富令人咋舌——窗框上缠绕着石雕的葡萄藤，门廊上方可能蹲着一只神态倨傲的石狮，壁柱上刻着当时主人骄傲的家族纹章。它们沉默地站在那里，讲述着16世纪律师、法官和富商们的故事，这里曾是整个地区的“司法之都”，财富与权力在此沉淀。走在其中，你不像是在参观一个景点，更像是在阅读一本立体的、用石头写就的奥弗涅地方志。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动我的，是这份辉煌与落寞交织的平衡。它曾贵为首府，如今却安静得像个配角。但正是这种“退场”，让它保留了最本真的气质。生活在此缓缓流动，周六市场里摊贩的吆喝声，教堂整点敲响的钟声，咖啡馆外闲聊的居民……所有这些日常的声响，都被这些黑色的、沉稳的古老墙壁温柔地包裹着，形成了一种难以言喻的、带着历史重量的生活温度。在这里，时间仿佛被这些火山石凝固了，让你有机会喘口气，真正地“走进”历史，而不是被历史推着走。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`里永`} />
                <InfoRow label="英文名称" value={`Riom`} />
                <InfoRow label="正式名称" value={`Riom`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`里永`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`曾是奥弗涅地区辉煌的首府和政治、司法中心，直至被邻近的克莱蒙费朗取代。`} />
                <InfoRow label="建筑特色" value={`大量使用当地产出的黑色火山玄武岩，建造出外观庄严厚重、细节却极为精美的文艺复兴风格城市豪宅。`} />
                <InfoRow label="建筑风格" value={`以文艺复兴风格为主，融合了奥弗涅本土的火山石建筑传统，形成了独特的“黑色文艺复兴”风貌。`} />
                <InfoRow label="文化价值" value={`是法国保存最完好的文艺复兴时期城市遗产之一，如同一座露天建筑博物馆，静谧地展示了地方贵族的财富、审美与16世纪的城市生活图景。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城公共区域全天开放。核心豪宅博物馆（如 Maison des Consuls）开放时间一般为周二至周日，上午10点至中午12点30分，下午2点至6点；冬季（11月至3月）可能缩短开放时间或周一、周二闭馆。每周六上午的中央市场是固定亮点。具体景点请行前查阅最新官方信息，部分私宅仅在外观可观赏。`} />
              <InfoRow label="门票价格" value={`进入古城街道免费。个别收费博物馆票价约为5-6欧元，持通票或学生证可享优惠。周六市场自由参观。`} />
              <InfoRow label="地址" value={`Place de la Fédération, 63200 Riom, France`} />
              <InfoRow label="交通方式" value={`从巴黎出发：可乘TGV高速火车至克莱蒙费朗站（Clermont-Ferrand），车程约3.5小时。从克莱蒙费朗站外的巴士总站，乘坐T2C公司的13路或21路公交车，约25-30分钟即可直达里永市中心，班次频繁，约每20-30分钟一班，车票可在上车时购买。从克莱蒙费朗奥弗涅机场（Aulnat Airport）出发，打车前往里永是最便捷的方式，约20分钟车程。自驾则沿A71或A89高速公路均可方便抵达，古城周边有多个付费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要理解里永为何是这般模样，你得把目光拉回到中世纪晚期。这片土地属于强大的奥弗涅伯爵。12世纪，他们在如今里永的西南方建起了坚固的城堡，一个小镇围绕着城堡逐渐生长起来。但真正改变里永命运的，是14世纪初的一场政治交易。法国国王“美男子”腓力四世，那位以打压圣殿骑士团闻名的强势君主，从奥弗涅伯爵手中买下了这片土地，并将其确立为奥弗涅地区的皇家领地首府。几乎一夜之间，这个小镇被赋予了无上荣光，成了王权在这片遥远高原的代言人。皇家法院（“巴利”法院）和审计院相继设立，吸引了全地区最精明、最有学识的法官、律师和行政官员前来定居。里永，从一座城堡小镇，跃升为司法与行政的心脏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些新来的精英阶层，他们有钱，有地位，更需要有与之匹配的居所来彰显身份。于是，一场轰轰烈烈的“豪宅建造竞赛”在16世纪到17世纪初达到了顶峰。但他们没有选择从远方运来昂贵的石灰岩，而是将目光投向了脚下这片土地最慷慨的馈赠——火山石。奥弗涅地区遍布着沉睡的火山，黑色的玄武岩和火山渣取之不尽。这种材料异常坚硬、耐久，且具有天然的防火性能。当地的石匠大师们，可能受到了当时正席卷法国的意大利文艺复兴风潮的启发，开始用这种深色石材，打造出全新的建筑语言。你看到那些对称的立面、优雅的竖窗、装饰着贝壳和花果的三角形山墙，都是文艺复兴的典型元素，但披上了一层无比严肃、刚毅的黑色外衣。这形成了里永独一无二的“黑色文艺复兴”风格，每一座豪宅都是其主人财力与品味的宣言书。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史的聚光灯从未长久停留在同一个地方。17世纪，随着波旁王朝的中央集权进一步加强，邻城克莱蒙费朗因其更中心的地理位置和主教座堂的宗教影响力，地位逐渐上升。更致命的一击或许来自交通方式的变革。当铁路时代来临，主要的干线选择了经过克莱蒙费朗而非里永。于是，经济与发展的重心不可逆转地转移了。里永的辉煌时代缓缓落幕，那些象征着权力与财富的法院逐渐迁出。听起来像是个悲伤的故事，对吗？但恰恰是这种“被遗忘”，成为了里永最大的幸运。因为没有经历剧烈的现代化改造，没有遭受大规模战争的破坏（尽管在二战期间附近有过空袭），这一整个街区的文艺复兴豪宅，几乎原封不动地沉睡在了时间里。发展停滞了，但历史被奇迹般地保存了下来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "漫步在今天被称为“老里永”的区域，你其实是在走过一条清晰的权力与财富的脉络。最核心的街道，比如“金街”，名字就暗示了一切，这里聚集了最显赫家族的宅邸。而当你转到一些小一点的巷子，那里的建筑可能会相对朴素，但同样由黑色的火山石建成。这就像是一个完整的社会切片被凝固了。你可以想象，在16世纪的某个午后，戴着假发的法官们从这些黑色的门廊里走出，夹着厚重的法典，穿过圆石路走向法庭；富商们的马车辘辘驶过，车里或许装着从里昂贩运来的丝绸。这座城市的声音，曾经是法槌的敲击声、拉丁文法律条款的辩论声、以及金币的叮当声。如今，这些声音都化为了石头上的光影，等待你去倾听和解读。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受里永的黑色魅力，我强烈建议你安排一整天的时间，并尽可能在清晨抵达。早晨的光线能最大程度地展现黑色玄武岩的质感与细节，而且此时的古城最为宁静。游览节奏应该是缓慢的、沉浸式的。路线可以从北端的圣阿穆尔教堂开始，由北向南，逐步深入豪宅最密集的核心区，最后以热闹的周六中央市场或一个安静的庭院咖啡馆作为终点。这样安排的好处是，你能先建立一个俯瞰的全局印象，再像剥洋葱一样，一层层走进建筑细节和街巷生活，体验从宏大叙事到细微触感的完整旅程。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周六上午是市场日，最具生活气息但也最拥挤，若想安静看建筑请避开此时段，若想体验市井人情则此刻最佳。
许多豪宅仍是私人住宅，请尊重居民的隐私，安静观赏外部即可，不要试图闯入或过于贴近窗户张望。
建议穿着舒适的步行鞋，那些美丽的圆石路走久了对脚底是个考验，而且有些坡度。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨先从圣阿穆尔教堂前的空地上开始，让视线掠过一片由黑色屋顶构成的宁静海洋，找准老城区的整体方位与规模。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着rue de l‘Hotel de Ville街往下走，放慢脚步，用手心去感受不同豪宅立面那冰凉而粗砺的火山石纹理，比较每一扇大门上雕刻的纹章有何不同。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到金街，站在街道中央抬头看两侧高耸的黑色建筑如何构成一道深邃的“石峡”，观察阳光是如何一点点将窗棂的石雕细节点燃。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开Maison des Consuls（市政官之家）那扇厚重的木门，走进内部庭院，你会瞬间被从黑色肃穆到明亮轻快的转换所震撼，仔细看庭院回廊那些精致的石柱雕刻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在教堂钟声敲响时，步入圣安娜教堂内部，这里的光线因为深色石材的吸纳而显得格外幽深静谧，找一张长椅坐下，感受与外部世界隔绝的宁静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午餐前溜达到中央市场广场，即使不是周六，也可以感受这个城市客厅的尺度，想象几个世纪以来集市在此举行的喧闹场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选择一条与主街平行的小巷子穿行，比如rue du Commerce，这里你能看到更生活化的一面，阳台上的鲜花与黑色的墙壁形成鲜明对比。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在行程的最后，找一家有户外座位的咖啡馆，点一杯奥弗涅产的奶酪拼盘或一杯本地葡萄酒，就坐在古老的黑色墙壁下，看日影西斜，完成这场时光穿越的仪式。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`金街中段仰拍构图`}</h4>
                  <p className="text-sm text-gray-700">{`下午三点后的斜阳能将街道一侧的建筑立面完全照亮，此时站在街道中间，用广角镜头向上拍摄，能捕捉到黑色石材反射出金属般光泽与蓝天形成的强烈对比，构图时将蜿蜒的街道线条收入画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣阿穆尔教堂侧翼的庭院角落`}</h4>
                  <p className="text-sm text-gray-700">{`清晨光线柔和时，在这个安静庭院里拍摄一扇典型的文艺复兴风格黑石窗框，让攀援的绿色藤蔓作为前景，突出材质的古老与生命的鲜活对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`中央市场广场的拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`利用市场拱廊的纵深感作为天然画框，将对面的黑色豪宅立面框入其中，雨后的湿滑石板地会形成倒影，让画面更具层次感和对称美。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从rue de l‘Hotel de Ville某条小巷尽头回望`}</h4>
                  <p className="text-sm text-gray-700">{`找一条窄巷，在尽头位置回拍主街，将前景的巷子作为引导线，聚焦于主街上某座豪宅精美的门廊雕刻，营造出“窥探历史一隅”的故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`私人公馆门楣细节特写`}</h4>
                  <p className="text-sm text-gray-700">{`携带一个长焦镜头，在光线充足时，捕捉某座豪宅门楣上极其精致的石雕纹章或神话人物雕像，黑色背景能让这些浅色雕刻（或因风化呈现的浅色部分）格外突出。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`黑色玄武岩在正午顶光下容易失去细节变成一团黑影，因此黄金拍摄时间是日出后两小时内和日落前三小时内。`}</li>
                <li>• {`拍摄建筑内部或教堂内景前，请务必确认是否允许拍照，有些地方出于保护考虑会禁止使用闪光灯或三脚架。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-blue-800">{`入住由16世纪私人公馆改造的精品酒店，睡在古老的橡木横梁下，清晨推开厚重的百叶窗，直接看到对面邻居家同样历史悠久的黑色石墙，仿佛成了这座古城暂时的居民。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-green-800">{`选择坐落在克莱蒙费朗与里永之间乡野的城堡酒店，享受五星级的现代舒适，白天驱车十分钟便可潜入黑色古城的静谧历史，晚上则在田园诗般的环境中彻底放松。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-yellow-800">{`里永老城边缘或克莱蒙费朗市中心的经济型酒店或设计感民宿，通过便捷的公交系统连接，既能节省预算，又能体验到更多样的城市生活氛围。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`深度沉浸`}</h4>
                  <p className="text-sm text-purple-800">{`通过当地平台租赁一间老城核心区的公寓，在周六早晨被楼下市场隐约的嘈杂声唤醒，像当地人一样去面包店买根法棍，真正地“生活”在这片黑色的历史街区里。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "老城内的住宿选择非常有限且抢手，尤其是旅游旺季和周末市场日，务必提前数月预订。如果住在克莱蒙费朗，请留意公交车的末班车时间，晚上打车返回是备选方案。里永治安良好，夜晚街道照明充足，独自步行也感到安全。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开里永很久以后，我脑海里最清晰的画面，不是某一座具体的豪宅，而是那种整体的、弥漫在空气中的“黑色氛围”。它不像很多旅游胜地那样急于向你展示什么，炫耀什么。它只是在那里，沉默、庄重、带着些许凉意，如同一位阅尽沧桑的老者，不需要言语，他的存在本身就是一部史诗。这种感受，在当今这个一切都被过度曝光、过度解读的世界里，显得尤为珍贵。在这里，你可以享受一种“不被消费的历史”，不用排队，不用抢机位，只需用你的眼睛去看，用手去触摸，用心去感受时间本身的重量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，如果你在寻找一次能真正沉静下来的旅行，一次与建筑、与地方历史深度对话的机会，请务必来里永。它或许不会给你带来瞬间的视觉狂欢，但它所馈赠的那种沉潜的力量，会在你离开后很久，依然在你的记忆深处隐隐发光。这座用火山石铸成的“黑色宝石”，不是一个热门目的地，它是一个等待被读懂的故事，一个让快节奏灵魂得以栖息的避风港。在法国，你很难再找到第二个地方，能将文艺复兴的精致与火山土地的野性如此完美地熔于一炉，并如此完整、如此生活化地保存到今天。这不仅仅是一次观光，更像是一次对“永恒”与“日常”为何物的静默思考。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/ville-close-de-concarneau" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    孔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">孔卡尔诺封闭之城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ville Close de Concarneau</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-cormatin" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科尔马坦城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Cormatin</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bar-le-duc-renaissance-upper-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴勒迪克（上城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bar-le-Duc (Upper Town)</p>
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
