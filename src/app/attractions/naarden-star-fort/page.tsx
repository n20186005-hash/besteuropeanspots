import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '纳尔登星形要塞 Naarden Star Fort｜从空中看宛如大地艺术杰作的完美星形古城 - 最佳欧洲景点',
  description: '你还记得小时候第一次用尺规在纸上画出一个标准五角星时，那种纯粹的、对称的几何之美带来的满足感吗？如果你来到纳尔登，从空中或地图上看到它的第一眼，那种感觉会瞬间以放大一千倍的规模，轰然击中你。但真正步入其中，体验才正式开始。穿过厚重的砖石城门，时光仿佛被轻轻折叠。城外是21世纪荷兰典型的整洁街道和现代...',
}

export default function NaardenStarFortPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '荷兰', href: '/destinations/netherlands' },
            { label: '纳尔登', href: '/destinations/netherlands' },
            { label: '纳尔登星形要塞', href: '/attractions/naarden-star-fort' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`纳尔登星形要塞・Naarden Star Fort・荷兰・纳尔登`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你还记得小时候第一次用尺规在纸上画出一个标准五角星时，那种纯粹的、对称的几何之美带来的满足感吗？如果你来到纳尔登，从空中或地图上看到它的第一眼，那种感觉会瞬间以放大一千倍的规模，轰然击中你。但真正步入其中，体验才正式开始。穿过厚重的砖石城门，时光仿佛被轻轻折叠。城外是21世纪荷兰典型的整洁街道和现代住宅，而门内，世界陡然安静、缓慢下来。一条主街安静地延伸，两旁是刷着柔和色彩的山形墙房屋，窗台上摆满盛开的鲜花。你脚下是几个世纪前马车压出的车辙隐约可见的石板路。没有喧嚣的旅游团，只有遛狗的老人、骑自行车去买面包的居民，以及咖啡馆外轻声交谈的零星客人。这里首先是一个家，然后才是一个景点。
最迷人的感官体验，发生在你走上城墙的那一刻。耳边呼啸的风声取代了城内的宁静，风里混合着护城河水的清冽气息和城墙上野生青草的芬芳。你的视野豁然开朗。眼前不再是街道和房屋，而是极其开阔的、波光粼粼的水面，像一条闪亮的丝带，紧紧拥抱着这座陆地上的“星岛”。对岸是修剪整齐的斜坡草地，更远处是郁郁葱葱的森林。你可以清晰地看到要塞“星形”的其中一个锐角——一座突出的棱堡，像一个坚实的船头，劈开水面。偶尔有水鸟掠过，留下一圈涟漪，或是租了皮划艇的当地人在护城河里悠然划行，从另一个角度仰望着这座庞然大物。在这里，你能无比直观地感受到，这座要塞既是坚不可摧的盾，也是一件大地艺术装置。
当地人生活与这座古迹的融合，达到了令人羡慕的和谐。护城河是他们的天然泳池和垂钓乐园；城墙上的步道是晨跑和遛狗的最佳路线；而那些古老的兵营和仓库，许多已被改造成雅致的住宅、工作室、画廊甚至音乐学校。每年夏天，要塞的草坪上会举办古典音乐会，乐声飘荡在星光与水光之上。你遇到的居民，谈起自己住在“一颗星星里”时，脸上总带着一丝平静的自豪。这里没有将历史供奉起来、仅供瞻仰的疏离感，而是让它持续呼吸，成为日常生活温暖而坚实的背景。这种“活着的遗产”的状态，或许是纳尔登最打动人心的核心魅力——它告诉你，历史不必是沉重冰冷的石头，它可以被温柔地使用、居住和热爱。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你还记得小时候第一次用尺规在纸上画出一个标准五角星时，那种纯粹的、对称的几何之美带来的满足感吗？如果你来到纳尔登，从空中或地图上看到它的第一眼，那种感觉会瞬间以放大一千倍的规模，轰然击中你。但真正步入其中，体验才正式开始。穿过厚重的砖石城门，时光仿佛被轻轻折叠。城外是21世纪荷兰典型的整洁街道和现代住宅，而门内，世界陡然安静、缓慢下来。一条主街安静地延伸，两旁是刷着柔和色彩的山形墙房屋，窗台上摆满盛开的鲜花。你脚下是几个世纪前马车压出的车辙隐约可见的石板路。没有喧嚣的旅游团，只有遛狗的老人、骑自行车去买面包的居民，以及咖啡馆外轻声交谈的零星客人。这里首先是一个家，然后才是一个景点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最迷人的感官体验，发生在你走上城墙的那一刻。耳边呼啸的风声取代了城内的宁静，风里混合着护城河水的清冽气息和城墙上野生青草的芬芳。你的视野豁然开朗。眼前不再是街道和房屋，而是极其开阔的、波光粼粼的水面，像一条闪亮的丝带，紧紧拥抱着这座陆地上的“星岛”。对岸是修剪整齐的斜坡草地，更远处是郁郁葱葱的森林。你可以清晰地看到要塞“星形”的其中一个锐角——一座突出的棱堡，像一个坚实的船头，劈开水面。偶尔有水鸟掠过，留下一圈涟漪，或是租了皮划艇的当地人在护城河里悠然划行，从另一个角度仰望着这座庞然大物。在这里，你能无比直观地感受到，这座要塞既是坚不可摧的盾，也是一件大地艺术装置。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当地人生活与这座古迹的融合，达到了令人羡慕的和谐。护城河是他们的天然泳池和垂钓乐园；城墙上的步道是晨跑和遛狗的最佳路线；而那些古老的兵营和仓库，许多已被改造成雅致的住宅、工作室、画廊甚至音乐学校。每年夏天，要塞的草坪上会举办古典音乐会，乐声飘荡在星光与水光之上。你遇到的居民，谈起自己住在“一颗星星里”时，脸上总带着一丝平静的自豪。这里没有将历史供奉起来、仅供瞻仰的疏离感，而是让它持续呼吸，成为日常生活温暖而坚实的背景。这种“活着的遗产”的状态，或许是纳尔登最打动人心的核心魅力——它告诉你，历史不必是沉重冰冷的石头，它可以被温柔地使用、居住和热爱。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`纳尔登星形要塞`} />
                <InfoRow label="英文名称" value={`Naarden Star Fort`} />
                <InfoRow label="正式名称" value={`Naarden Vesting (Naarden Fortress)`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`纳尔登`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`欧洲保存最完好的星形要塞之一，是荷兰“荷兰水防线”防御体系中的关键枢纽，见证了从西班牙统治到现代荷兰的军事工程史。`} />
                <InfoRow label="建筑特色" value={`从空中俯瞰呈现为极其规整、对称的六角星形，由复杂的棱堡、半月堡、城墙和宽阔的护城河系统构成，是几何学与军事防御艺术的完美结合。`} />
                <InfoRow label="建筑风格" value={`文艺复兴晚期至近代早期的防御工事建筑风格，属于“旧荷兰要塞系统”，强调利用水进行防御。`} />
                <InfoRow label="文化价值" value={`一个活着的防御工程学教科书，如今已转型为一个宁静而充满艺术气息的社区，是理解荷兰人“与水共生”民族智慧的绝佳缩影。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`要塞城墙、护城河及公共区域全年全天24小时免费开放。城内博物馆（如荷兰要塞博物馆）开放时间为周二至周日 10:30-17:00，周一闭馆（节假日除外）。城墙步行道在冬季（11月至次年3月）可能因天气原因（如结冰）部分关闭，建议行前查看官网通知。每年的“纳尔登要塞日”通常在九月，届时会有特别导览和历史重现活动。`} />
              <InfoRow label="门票价格" value={`进入要塞城镇本身完全免费。参观核心景点荷兰要塞博物馆（Vestingmuseum）门票为：成人12.5欧元，65岁以上老人及学生10欧元，4-12岁儿童6.5欧元，4岁以下免费。持有博物馆卡（Museumkaart）可免费入场。部分季节性导览游（如城墙漫步、船游护城河）需额外付费，价格在8-15欧元之间。`} />
              <InfoRow label="地址" value={`Vestingmuseum, Westwalstraat 6, 1411 PB Naarden, Netherlands`} />
              <InfoRow label="交通方式" value={`从阿姆斯特丹斯希普霍尔机场出发最为便捷。在机场乘坐火车至阿姆斯特丹中央车站（约20分钟），换乘前往阿尔梅勒或阿默斯福特的列车，在“Naarden-Bussum”站下车（全程约35-40分钟）。出站后，步行约15-20分钟即可抵达要塞的城门，沿途有清晰路标。也可以从车站乘坐110路或169路巴士，在“Naarden, Jan Massenstraat”站下车，步行5分钟即到。建议购买OV-chipkaart（荷兰公共交通卡）或使用9292.nl APP规划行程。自驾前往也很方便，要塞外围有多个付费停车场（P1和P2），停好车后步行穿过城门进入。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`纳尔登的故事，是一部与水和围困不断抗争的史诗。早在1350年左右，这里就已经是一个有城墙的城镇，但它的命运在1572年发生了残酷的转折。那是荷兰反抗西班牙统治的“八十年战争”初期，纳尔登因为忠诚于西班牙国王，遭到了反抗军——“海上乞丐”的报复。城镇被攻破后，发生了著名的“纳尔登大屠杀”，几乎全体居民遇害，城镇也被焚毁。这场悲剧带来的一个讽刺性结果是：它让纳尔登变成了一片需要从头规划的白纸。当战争局势稳定，荷兰共和国决定在此重建一个强大的防御据点时，设计师们得以摆脱旧城格局的束缚，在一片废墟上绘制最理想的蓝图。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，时间来到17世纪，荷兰的“黄金时代”。随着火炮技术的进步，传统的高耸垂直城墙在炮弹面前不堪一击。聪明的荷兰工程师们发展出了全新的防御理念：低矮、厚重、倾斜的土质城墙，让炮弹像打在柔软的垫子上一样被吸收或弹开；而最关键的创新，就是“棱堡”和“星形”设计。每一个突出的尖角（棱堡）都能为相邻的城墙面提供毫无死角的交叉火力覆盖，让进攻者暴露在来自至少两个方向的攻击下。纳尔登，凭借其位于通往阿姆斯特丹水路要道上的战略位置，被选为实践这一军事工程学的典范。从大约1675年开始，人们利用这片低洼湿地，挖出巨大的护城河，用挖出的泥土堆筑起城墙和棱堡，最终塑造出了那颗完美的“大地之星”。它的存在，是荷兰“水防线”国家战略的关键一环：在敌人入侵时，可以打开闸门，淹没周边的大片农田，形成一道难以逾越的浅水屏障，而纳尔登这样的要塞就是这道水墙上最坚固的“门栓”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在接下来的两个世纪里，这座星形要塞经历了多次考验，但最著名的一次围城反而发生在它建成之前的设计理念中。它更多时候是一种威慑。拿破仑时代，法国人占领了这里并进行了现代化改造。直到19世纪末，随着火炮射程越来越远，这种紧贴城镇的堡垒逐渐失去了军事价值。纳尔登面临被废弃和拆除的风险。但幸运的是，它的美丽和独特性拯救了它。人们开始欣赏它作为一件完整艺术品的价值，而不仅仅是过时的军事设施。20世纪，它被精心修复，并被列为国家遗产。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`更有趣的转变发生在二战后。冷战时期，北约看中了这座坚固地下工事的潜力，在其中一个棱堡下修建了巨大的防核指挥所。如今，这个指挥所成为了荷兰要塞博物馆最令人印象深刻的部分。从一个抵御西班牙军队和法国骑兵的要塞，到一个防备核战争的掩体，纳尔登的防御使命以一种超现实的方式延续到了现代。当你在博物馆深邃、冰冷的地下隧道里行走，听着关于末日计划的讲解，再回到阳光下的护城河畔，那种跨越时空的错位感无比强烈。它不再为战争服务，但关于防御、生存和智慧的故事，却在不同的时代里不断被重述。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受纳尔登星形要塞的精髓，建议预留一整天时间。最佳抵达时间是上午9点左右，此时晨雾可能还未完全散去，阳光柔和，游客稀少，你能独享城墙的宁静。整体游览节奏应是“由内而外，由静至动”：先沉浸在中世纪城镇的静谧氛围里，了解其生活脉络；再登上城墙，从宏观视角理解其防御设计；最后通过博物馆深入其历史与地下的隐秘世界。下午可以安排一次护城河游船或皮划艇，从水面上欣赏要塞的倒影，这是无可替代的体验。傍晚时分，在城墙上看日落，看着星星的形状被金色的光影勾勒出来，为一天画上完美句号。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`要塞内部分城墙路段台阶陡峭且无护栏，建议穿舒适防滑的鞋子，雨天要格外小心。
城内餐馆不多且关门较早，如果计划晚餐在城内解决，最好提前查看营业时间或预订，也可以考虑在附近布斯姆镇就餐。
护城河游船并非每天都有，且非常依赖天气，建议抵达当天就先去码头或信息中心确认班次并提前购票。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主要的乌得勒支门进入，立刻在门口的旅游信息中心拿一份免费地图，并问问当天是否有特别的城墙通道开放。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着安静的科克街漫步，留意那些山形墙上的日期石碑和精美门楣，想象三百年前商人军官们在此生活的景象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要拐进圣维特大教堂，不仅为看其内部，更要登上教堂塔楼（如果开放），这是从内部获得俯瞰要塞星形全景的唯一制高点。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂出来，随意找一家咖啡馆坐在室外，点一杯咖啡和一块苹果派，用半小时纯粹地观察本地人的生活节奏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选择一段城墙步道走上去（推荐南侧的城墙），慢慢地走完一个完整的棱堡，仔细查看炮位和射击孔，感受防御者的视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`前往荷兰要塞博物馆，花至少一个半小时沉浸其中，尤其不要错过深入地下冷战核掩体的阴冷隧道。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果天气和水温允许，在博物馆附近的码头租一艘小船或一条独木舟，亲自划入护城河，从水面仰视高大的砖石城墙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前回到西侧的城墙上，找一张面对水面的长椅坐下，等待夕阳将整个要塞、水面和天空染成温暖的蜜糖色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`无人机空中全景`}</h4>
                  <p className="text-sm text-gray-700">{`如果你有无人机且遵守当地法规，在清晨无风时起飞，这是捕捉完美对称星形几何图案的唯一方式，建议飞至200米左右高度。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从圣维特大教堂塔楼拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`登上塔楼后，使用长焦镜头对准一个完整的棱堡及其在水中的倒影，下午侧光时立体感最强。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`护城河皮划艇视角`}</h4>
                  <p className="text-sm text-gray-700">{`租一艘黄色或蓝色的皮划艇，划到东侧棱堡的正前方水面，用广角镜头低角度拍摄，将人物、小船与宏伟的砖石城墙一同构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城墙步道尽头框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`在西侧城墙步道的尽头，利用古老的砖石拱门作为天然画框，拍摄远处的主街和教堂塔楼，最佳时间是有阳光射入拱门的清晨。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`薄荷博物馆旁的小桥`}</h4>
                  <p className="text-sm text-gray-700">{`站在连接主城与外围棱堡的小木桥上，拍摄水道延伸至远方棱堡的纵深画面，雨后石板反光时意境最佳。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄当地居民住宅时请务必保持尊重，避免将镜头直接对准别人家的窗户或私人庭院。`}</li>
                <li>• {`荷兰天气多变，光影转换极快，准备好应对突如其来的阵雨和瞬间出现的彩虹，这常常能造就独一无二的作品。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在要塞城墙内由17世纪军官宅邸改造的精品酒店，房间保留了原始的木梁和壁炉，晚上能听到窗外护城河轻柔的水声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计爱好者之选`}</h4>
                  <p className="text-sm text-green-800">{`纳尔登附近由现代建筑师设计的“灯塔”民宿，拥有全景落地窗，可以直接躺在床上眺望远处的星形要塞轮廓，风格极简而舒适。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`运河边浪漫之选`}</h4>
                  <p className="text-sm text-yellow-800">{`位于毗邻的布斯姆镇安静运河畔的百年酒店，房间装饰着古董家具，提供丰盛的荷兰式早餐，骑自行车十分钟即可抵达要塞。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`家庭或团体优选`}</h4>
                  <p className="text-sm text-purple-800">{`要塞外不远处一栋带花园的独栋度假屋，设施齐全，空间宽敞，可以像当地人一样去市场买菜回来做饭，享受宁静的夜晚。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要塞内的住宿数量非常有限，务必提前数月预订，尤其是在夏季音乐节和要塞日期间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`纳尔登及周边是极其安全的社区，夜晚独自在城内散步也完全不必担心，可以尽情享受星空下的静谧。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开纳尔登的时候，我脑子里反复回响着一个词：“转化”。这是一个关于转化的地方。它从一片战争的废墟，转化为军事工程的巅峰之作；又从一件过时的防御武器，转化为一个被精心呵护的家园和一件令人惊叹的大地艺术品。甚至连它的恐惧——那些为战争、为核末日而建的黑暗地堡——也被转化成了教育后人的博物馆。这座要塞仿佛在无声地讲述一个乐观的寓言：没有什么是注定要被废弃的，只要我们赋予它新的意义、新的生命和新的爱。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、一切都在快速迭代的世界里，纳尔登提供了一种截然不同的时间感。它提醒我们，有些价值需要漫长的守护才能显现，有些美源于对功能和形式的极致追求，而后超越了其最初的目的。它不是一个让你匆匆打卡的“景点”，而是一个邀请你慢下来、走上去、划进去、住下来的“地方”。在这里，你能触摸到荷兰民族性格中那种务实与浪漫的奇特结合：他们用最理性的几何学来设计堡垒，却又用最感性的方式在其中生活、种花、喝咖啡、听音乐会。每一位热爱深度游的旅人都应该来这里，不仅仅是为了看一颗“星星”，更是为了体验一种可能性——历史与当下如何温柔共存，人类最精巧的造物，最终如何被自然和生活重新驯服，焕发出超越时空的平和之光。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kasteel-de-haar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克莱沃城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kasteel de Haar</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/roermond-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    鲁
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">鲁尔蒙德老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Roermond Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/fort-bourtange" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布尔坦赫星形要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Fort Bourtange</p>
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
