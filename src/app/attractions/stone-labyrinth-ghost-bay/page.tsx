import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '巨石迷宫与幽灵海湾 The Stone Labyrinth & Ghost Bay｜在神话起源地与月光海湾，体验时空交错的震撼 - 最佳欧洲景点',
  description: '车子在橄榄树与葡萄园夹道的山路上最后一个转弯，那片灰白色的巨石阵猝不及防地撞进视野。第一感觉不是宏伟，而是一种沉默的怪异。它不像卫城那样高高在上宣告文明，而是低低地匍匐在一座面向爱琴海的光秃山脊上，像一堆被远古巨人随意丢弃的庞大骨骸，又像是大地本身患上了某种石质的皮肤病。风是这里唯一的声音，穿过石墙',
}

export default function StoneLabyrinthGhostBayPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '希腊', href: '/destinations/europe' },
            { label: '卡斯特罗村， 拉西锡州， 克里特岛', href: '/destinations/europe' },
            { label: '巨石迷宫与幽灵海湾', href: '/attractions/stone-labyrinth-ghost-bay' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`巨石迷宫与幽灵海湾・The Stone Labyrinth & Ghost Bay・希腊・卡斯特罗村， 拉西锡州， 克里特岛`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在橄榄树与葡萄园夹道的山路上最后一个转弯，那片灰白色的巨石阵猝不及防地撞进视野。第一感觉不是宏伟，而是一种沉默的怪异。它不像卫城那样高高在上宣告文明，而是低低地匍匐在一座面向爱琴海的光秃山脊上，像一堆被远古巨人随意丢弃的庞大骨骸，又像是大地本身患上了某种石质的皮肤病。风是这里唯一的声音，穿过石墙间狭窄的通道时发出呜呜的低吟，混合着远处灌木丛里蝉鸣的嘶叫，还有干燥的空气中那股浓烈的、带着咸味的百里香与烈日烘烤石头的气息。
当你走近，迷宫才开始真正展现它的魔力。那不是教科书里整齐的墙面，每一块石头都拥有自己古怪的形状和颜色，从灰白到铁锈红。你的手触摸上去，能感到千万年来海风侵蚀出的粗糙孔洞，以及正午阳光留在表面的滚烫温度。通道宽窄不定，有时仅容一人侧身，有时又豁然开朗成一个石环围绕的小小“房间”。本地牧羊人的身影偶尔会在远处的山坡闪现，他们的山羊铃声叮当作响，为这片静止的石之海带来一丝生命的节奏。在这里，时间感是错乱的，你同时感到史前的荒芜、神话的幽邃，以及当下地中海阳光无比真实的灼热。
而当你沿着一条被踩得发亮的小径，走下迷宫所在的山脊，大约二十分钟后，爱琴海那钴蓝色的裙边便再次映入眼帘。但这里不是柔软的金色沙滩，而是“幽灵海湾”。它的名字在傍晚时分得到完美的诠释：海湾被新月状的陡峭白色石灰岩悬崖怀抱，崖壁被海水和风蚀雕刻出无数蜂窝状的洞穴与廊柱。当夕阳西下，光线变得倾斜而金黄，这些白色的岩壁会反射出一种非人间的、冷冽的珍珠光泽，与深蓝色的海水形成惊心动魄的对比。海浪不大，轻轻拍打岸边的卵石，发出哗啦哗啦的、催眠般的声响，更衬托出此地一种空灵而孤绝的寂静。你仿佛站在世界的尽头，或是某个被遗忘神话的最后一页。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子在橄榄树与葡萄园夹道的山路上最后一个转弯，那片灰白色的巨石阵猝不及防地撞进视野。第一感觉不是宏伟，而是一种沉默的怪异。它不像卫城那样高高在上宣告文明，而是低低地匍匐在一座面向爱琴海的光秃山脊上，像一堆被远古巨人随意丢弃的庞大骨骸，又像是大地本身患上了某种石质的皮肤病。风是这里唯一的声音，穿过石墙间狭窄的通道时发出呜呜的低吟，混合着远处灌木丛里蝉鸣的嘶叫，还有干燥的空气中那股浓烈的、带着咸味的百里香与烈日烘烤石头的气息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当你走近，迷宫才开始真正展现它的魔力。那不是教科书里整齐的墙面，每一块石头都拥有自己古怪的形状和颜色，从灰白到铁锈红。你的手触摸上去，能感到千万年来海风侵蚀出的粗糙孔洞，以及正午阳光留在表面的滚烫温度。通道宽窄不定，有时仅容一人侧身，有时又豁然开朗成一个石环围绕的小小“房间”。本地牧羊人的身影偶尔会在远处的山坡闪现，他们的山羊铃声叮当作响，为这片静止的石之海带来一丝生命的节奏。在这里，时间感是错乱的，你同时感到史前的荒芜、神话的幽邃，以及当下地中海阳光无比真实的灼热。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而当你沿着一条被踩得发亮的小径，走下迷宫所在的山脊，大约二十分钟后，爱琴海那钴蓝色的裙边便再次映入眼帘。但这里不是柔软的金色沙滩，而是“幽灵海湾”。它的名字在傍晚时分得到完美的诠释：海湾被新月状的陡峭白色石灰岩悬崖怀抱，崖壁被海水和风蚀雕刻出无数蜂窝状的洞穴与廊柱。当夕阳西下，光线变得倾斜而金黄，这些白色的岩壁会反射出一种非人间的、冷冽的珍珠光泽，与深蓝色的海水形成惊心动魄的对比。海浪不大，轻轻拍打岸边的卵石，发出哗啦哗啦的、催眠般的声响，更衬托出此地一种空灵而孤绝的寂静。你仿佛站在世界的尽头，或是某个被遗忘神话的最后一页。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`巨石迷宫与幽灵海湾`} />
                <InfoRow label="英文名称" value={`The Stone Labyrinth & Ghost Bay`} />
                <InfoRow label="正式名称" value={`The Stone Labyrinth & Ghost Bay`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`卡斯特罗村， 拉西锡州， 克里特岛`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这里是米诺斯文明晚期一处可能用于仪式与观测的独特石构遗址，其迷宫般的布局与地中海地区的神话源头产生了深刻共鸣。`} />
                <InfoRow label="建筑特色" value={`由数千块未经雕琢的巨型天然石灰岩石块，以干砌法垒砌成错综复杂的同心圆与放射状通道网络，仿佛大地自然生长出的几何图腾。`} />
                <InfoRow label="建筑风格" value={`原始朴素的史前巨石建筑风格，完全依赖于石材本身的重量与精密堆叠，体现了人类与自然力量最初也是最直接的对话。`} />
                <InfoRow label="文化价值" value={`它不仅仅是一处废墟，更是古希腊迷宫神话在现实世界的可能投影，承载着人类对未知、恐惧与探索的原型记忆。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`考古遗址区开放时间为每年4月至10月，每日上午8:00至日落前一小时（约晚上7:30）；11月至次年3月，每日上午8:30至下午3:00。幽灵海湾自然区域全天开放，但强烈建议只在白天游览。每周一遗址区内部维护不开放（若周一为公共假日则顺延）。希腊东正教重要节日（如复活节）当天可能全天关闭。`} />
              <InfoRow label="门票价格" value={`遗址与海湾联票：成人12欧元。优惠票（欧盟学生、65岁以上长者）6欧元。18岁以下青少年及儿童免费。持有有效希腊考古卡可免费进入。门票在遗址入口处的小亭子购买，仅收现金（欧元）。每月第一个周日（11月至3月期间）免票。`} />
              <InfoRow label="地址" value={`Stone Labyrinth Archaeological Site, Kastello Village, 723 00, Lasithi, Crete, Greece`} />
              <InfoRow label="交通方式" value={`最近的国际机场是伊拉克利翁的尼科斯·卡赞察基斯国际机场（HER）。从机场出发，最便捷的方式是租车自驾（强烈推荐），沿A90/E75高速公路向东行驶，转入省级公路，全程约1小时45分钟，路况良好但后半段山路蜿蜒。也可从伊拉克利翁巴士总站乘坐前往圣尼古拉奥斯方向的KTEL长途巴士，告诉司机在“Kastello Village”路口下车，车程约2小时，班次每天3-4班，下车后需步行约30分钟上山抵达遗址入口。公共交通不太灵活，建议提前在KTEL官网查询时刻表并预留充足时间。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于这个地方，没有成文的史书记载，只有散落的陶片、口耳相传的乡野奇谈，以及石头自己讲述的故事。考古学家们挠着头皮，将最早的石块堆砌年代定在公元前1600年左右，米诺斯文明如日中天又隐隐显露衰微迹象的时代。那时，克里特岛上的宫殿群复杂精美，但这里，为什么要建造如此一个粗犷、耗费巨量劳力却看似毫无“实用价值”的石头迷宫？主导最初发掘的玛丽亚博士曾半开玩笑地说，或许建造者厌倦了精致壁画和排水系统，想来点纯粹“硬核”的。但更主流的猜想是，这里是一处与天文观测和大地祭祀相关的圣地。某些通道的指向，与夏至日出的方位精准吻合。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "流传在卡斯特罗村老人们口中的故事则生动得多。他们说，这里曾是代达洛斯为米诺斯王建造的第一个迷宫原型，用来囚禁那个半人半牛的怪物米诺陶洛斯。后来英雄忒修斯凭借阿里阿德涅的线团得以逃脱，盛怒的米诺斯王便将这失败的作品遗弃在此。当然，这只是神话附会的美妙猜想。另一个黑暗的传说则说，在威尼斯人统治克里特时期，这里曾是海盗的巢穴和秘密仓库，那些错综复杂的通道正好用来藏匿劫掠来的财宝和躲避追捕。至今还有村民信誓旦旦地说，在月圆之夜，能听到石头间传来金币碰撞的叮当声和低低的耳语。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "历史的转折点可能是一场灾难。在遗址底层，考古学家发现了剧烈地震造成的石块大规模移位和灰烬层。这或许对应着公元前1450年左右那场摧毁了克里特岛众多米诺斯定居点的桑托林火山大喷发及其引发的海啸与地震。天灾之后，这个地方被遗忘了很久，石头缝里长出了野橄榄和无花果树。直到中世纪，也许有一些隐士或牧羊人曾利用这些现成的石墙作为临时避难所，我们在一些石头上发现了模糊的十字刻痕。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "十九世纪末，一位痴迷于荷马史诗的英国旅行家偶然途经此地，在他的游记里提到了“一片令人费解的巨大石阵，像是巨人的游戏场”，才首次引起了外界的学术兴趣。真正的系统性考古工作要到二十世纪六十年代才展开，进展缓慢而谨慎，因为每一块石头的位置都可能是一个谜题的线索。如今，保护的意义远大于发掘，学者们更倾向于让大部分区域保持他们发现时的原貌——那种被时间与自然力重新塑造过的、半废墟的混沌状态，因为这种状态本身，就是历史的一部分。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`理想的方式是预留完整的一天。建议在早上九点前抵达迷宫遗址，此时光线锐利，能清晰勾勒巨石的肌理，气温也尚未升至灼人，游客稀少，你可以独享那份远古的宁静。用大约两个半小时仔细探索迷宫的核心区。中午下山，前往卡斯特罗村享用悠闲的午餐，感受现实中的希腊乡村生活。下午三点左右，阳光开始变得柔和，出发前往幽灵海湾，徒步约20-30分钟。将傍晚的黄金时刻全部留给海湾，看光线魔法如何将白色悬崖点燃。这样的安排让你同时领略遗址的历史重量与海湾的自然魔力，并在最舒适的光线下体验两者的极致之美。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双结实防滑的徒步鞋或运动鞋，迷宫内的碎石地面和通往海湾的土路都相当崎岖，凉鞋或拖鞋是危险且不敬的。
自带充足的饮用水和少量高能量零食，遗址区和海湾均无任何商业设施，村里的小店也可能在午后休息。
警惕任何自称“导游”的主动搭讪者，正规导览信息应在遗址入口处获取，这里并非热门景点，但偶尔会有利用信息差索要高额费用的人。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过简陋的铁丝网门扉后，不要急于深入，先向左走上那个小小的观景土坡，俯瞰整个迷宫石阵与远处爱琴海构成的全景图，建立最初的空间方位感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选择最东侧那条看似被走得最多的入口通道，让自己瞬间被高耸的石墙包围，体验一下“进入迷宫”的瞬间迷失感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`用你的手（而不仅仅是眼睛）去触摸几处颜色特异或形状奇诡的巨石，感受阳光晒烫的阳面与始终阴凉潮湿的背面的强烈温差。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到那个被称为“祭祀台”的中心石圈，试着坐在某块平坦的石头上静静待五分钟，只听风声和自己的呼吸。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在迷宫西侧边缘，寻找一个天然的石头“窗框”，那里是框住山下卡斯特罗村蓝白屋顶和远方海湾的绝佳画框。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后沿着有明显标识的 coastal path 徒步小径，穿过一片香气扑鼻的刺山柑和矮橡树林，向着海浪声走去。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当道路尽头豁然开朗，幽灵海湾的白色崖壁全景展现时，停下脚步，深吸一口气，然后慢慢踩着鹅卵石走下海滩。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前半小时，找一块平坦的大卵石坐下，看着夕阳将白色岩石从珍珠白染成金黄，再变成粉红直至暗紫色的全过程。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`迷宫全景机位`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在入口处观景土坡的东南角，用广角镜头将前景的巨石纹理、中景的迷宫层层叠叠的通道、以及远景地平线上的爱琴海一并收纳，构图力求展现这种历史与自然的时空层次。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`中心石圈仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射时，躺在中心石圈的某块巨石上向上仰拍，以蓝天为背景，捕捉周围巨石环伺形成的具有压迫感和几何美感的框架构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`幽灵海湾的“拱门”剪影`}</h4>
                  <p className="text-sm text-gray-700">{`日落前约一小时，找到海湾西侧崖壁上一个被侵蚀成的天然石头拱门，站在拱门内向外拍摄，将人物或帆船的剪影与远处海面上金色的落日光芒结合在一起，画面充满故事感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`月光下的白色崖壁（长曝光）`}</h4>
                  <p className="text-sm text-gray-700">{`如果留宿附近，在月圆之夜的后半夜来到海湾，使用三脚架进行长时间曝光，月光会将白色岩石照亮成幽蓝的冷色调，而海水则雾化成丝绸般柔滑的质感，营造出真正的“幽灵”氛围。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`卡斯特罗村夜景远眺`}</h4>
                  <p className="text-sm text-gray-700">{`从迷宫遗址返回停车场的路上，在最后一个弯道处回望，夜晚村庄的零星灯火与深蓝色天鹅绒般的夜空形成对比，用中焦段拍摄，可得到一幅宁静的世外桃源景象。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重当地人的隐私，拍摄牧羊人或村民前请务必先微笑并示意，获得对方点头同意，这是一个礼貌问题也是文化差异的体现。`}</li>
                <li>• {`在遗址区内避免使用无人机，不仅可能违反文物保护规定，其噪音也会彻底破坏这片土地神圣的宁静，海湾区域也请谨慎使用。`}</li>
                <li>• {`尝试用镜头捕捉细节：石头上晶体的反光、石缝里顽强开出的野花、海浪在卵石上留下的泡沫图案，这些微观视角往往比大全景更打动人心。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`海景农庄民宿`}</h4>
                  <p className="text-sm text-blue-800">{`位于卡斯特罗村上方山坡的家族式农庄，房间宽敞朴素，阳台正对幽灵海湾方向，主人会邀请你共尝自酿的 Raki 酒和新鲜羊奶酪，夜晚安静得只能听到猫头鹰的叫声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史宅邸改造的精品客栈`}</h4>
                  <p className="text-sm text-green-800">{`由一座19世纪威尼斯风格的石屋精心修复而成，坐落在村庄迷宫般的小巷深处，保留了原始的拱顶和厚墙，庭院里种满九重葛，提供极富特色的克里特式早餐。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`悬崖上的现代隐居所`}</h4>
                  <p className="text-sm text-yellow-800">{`在前往海湾的徒步小径中途，有一栋极简主义风格的白色小屋，拥有360度全景视野，设计感十足，适合追求私密与极致景观的旅行者，需提前数月预订。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济便捷的港口旅舍`}</h4>
                  <p className="text-sm text-purple-800">{`如果你不介意十五分钟车程，可以住在更热闹的圣尼古拉奥斯小镇港口边，那里选择更多，从经济型旅舍到中档酒店都有，晚上还能享受海滨餐厅和酒吧的热闹生活。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "卡斯特罗村的住宿数量非常有限，通常在夏季（6-9月）需要提前至少两到三个月预订，尤其是周末。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "村庄治安极好，但夜间照明有限，建议随身携带小手电，享受完美星空后能安全回到住处。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果选择住在更繁华的镇上，请务必确认有方便的租车服务或提前研究好返回的巴士时刻表，夜间交通选择几乎为零。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开巨石迷宫和幽灵海湾好多天了，闭上眼睛，指尖仿佛还能感受到那些粗糙石头的质感，鼻腔里也似乎残留着烈日晒过的百里香与清冷海风混合的味道。这个地方最奇妙之处，在于它拒绝被简单地定义和消费。它不是一张漂亮的明信片，不是一段清晰编年的历史，甚至不是一个能让你轻松获得“打卡”成就感的地方。它是一片留有巨大空白的邀请函，邀请你用脚步去丈量，用想象去填补，用身体去感受那份来自远古和自然的、略带蛮荒气息的直白力量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个被过度解释、过度包装的世界里，这样一处依然保持着模糊性、挑战性甚至些许“不便”的所在，显得尤为珍贵。它不会讨好你，只是沉默地存在于山海之间。而这种沉默，恰恰给了你空间，去聆听自己内心的回响——关于神话与现实的边界，关于时间的深邃，关于人类在浩瀚自然面前那渺小却顽强的存在印记。如果你厌倦了那些被护栏围起、被语音导览填满的完美古迹，渴望一次真正触动心灵的、略带粗粝感的探险，那么，请务必来一次这里。它不会是你旅程中最舒适的一站，但很可能，是最难忘、最让你在多年后依然反复咀嚼回味的一站。这是一场与石头、海洋和古老传说的私人对话，而答案，就在你自己的脚步与呼吸之间。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/achilleion-corfu" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科孚岛阿喀琉斯宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Achilleion</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/olympia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥林匹亚</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Olympia</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/petrified-forest-lesbos" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莱
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莱斯沃斯岛石化森林</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Petrified Forest of Lesbos</p>
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
