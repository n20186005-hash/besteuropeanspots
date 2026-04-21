import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '普图伊城堡 Ptuj Castle｜登上斯洛文尼亚最古老城镇的守护者，在骑士厅与千年时光对饮 - 最佳欧洲景点',
  description: '还记得我第一次爬上普图伊城堡时的那条老石阶吗？石板被岁月和无数脚步打磨得中间微微凹陷，在午后的阳光下泛着温润的光。两旁是当地人家朴素的石墙，墙上探出无花果树肥厚的叶子。你一步一步往上走，城市的喧嚣——德拉瓦河水的流淌声、主广场咖啡馆的杯碟轻碰声——渐渐沉在脚下，变得越来越遥远。当你气喘吁吁地登上最后...',
}

export default function PtujCastleSloveniaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '斯洛文尼亚', href: '/destinations/slovenia' },
            { label: '普图伊城堡', href: '/attractions/ptuj-castle-slovenia' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`普图伊城堡・Ptuj Castle・斯洛文尼亚・普图伊`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`还记得我第一次爬上普图伊城堡时的那条老石阶吗？石板被岁月和无数脚步打磨得中间微微凹陷，在午后的阳光下泛着温润的光。两旁是当地人家朴素的石墙，墙上探出无花果树肥厚的叶子。你一步一步往上走，城市的喧嚣——德拉瓦河水的流淌声、主广场咖啡馆的杯碟轻碰声——渐渐沉在脚下，变得越来越遥远。当你气喘吁吁地登上最后一级台阶，转身回望，整个普图伊老城的红色瓦顶像一片温暖的海洋在你脚下铺展开，那一刻，你突然就懂了“守护”二字的全部含义。
推开那扇厚重的木门，吱呀一声，仿佛推开了时间的隔阂。城堡的庭院里安静极了，只能听见风掠过塔楼旗杆的猎猎声，以及不知何处传来的、若有似无的钢琴练习曲——后来才知道，城堡的一部分现在是音乐学校。空气里有青苔、旧石头和远处割草后混合的湿润气味。这里不像那些被游客塞满的著名城堡，它活生生的，是本地人生活的一部分。你会看到牵着狗散步的老人，在长椅上安静看书的学生，他们与这座千年古堡共享着同一片阳光和阴影，那种自在的归属感，特别打动我。
最让我着迷的，是它那种“层叠感”。这不是一座设计图纸上一次性完成的完美宫殿，而是一本用石头写成的、层层叠加的史书。你能用手触摸到罗马时代粗糙的基石，抬头看到哥特式拱窗的凌厉线条，转身又遇见文艺复兴长廊上那些已经模糊的壁画和徽章。每一个角落都在低语，讲述着不同世纪的故事。而城堡内部那座精彩的地区博物馆，更是将这种时间的层叠推向了极致，从史前的陶罐，到中世纪的盔甲，再到华丽得令人屏息的狂欢节面具，它们共同构成了这片土地的灵魂图谱。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`还记得我第一次爬上普图伊城堡时的那条老石阶吗？石板被岁月和无数脚步打磨得中间微微凹陷，在午后的阳光下泛着温润的光。两旁是当地人家朴素的石墙，墙上探出无花果树肥厚的叶子。你一步一步往上走，城市的喧嚣——德拉瓦河水的流淌声、主广场咖啡馆的杯碟轻碰声——渐渐沉在脚下，变得越来越遥远。当你气喘吁吁地登上最后一级台阶，转身回望，整个普图伊老城的红色瓦顶像一片温暖的海洋在你脚下铺展开，那一刻，你突然就懂了“守护”二字的全部含义。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`推开那扇厚重的木门，吱呀一声，仿佛推开了时间的隔阂。城堡的庭院里安静极了，只能听见风掠过塔楼旗杆的猎猎声，以及不知何处传来的、若有似无的钢琴练习曲——后来才知道，城堡的一部分现在是音乐学校。空气里有青苔、旧石头和远处割草后混合的湿润气味。这里不像那些被游客塞满的著名城堡，它活生生的，是本地人生活的一部分。你会看到牵着狗散步的老人，在长椅上安静看书的学生，他们与这座千年古堡共享着同一片阳光和阴影，那种自在的归属感，特别打动我。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最让我着迷的，是它那种“层叠感”。这不是一座设计图纸上一次性完成的完美宫殿，而是一本用石头写成的、层层叠加的史书。你能用手触摸到罗马时代粗糙的基石，抬头看到哥特式拱窗的凌厉线条，转身又遇见文艺复兴长廊上那些已经模糊的壁画和徽章。每一个角落都在低语，讲述着不同世纪的故事。而城堡内部那座精彩的地区博物馆，更是将这种时间的层叠推向了极致，从史前的陶罐，到中世纪的盔甲，再到华丽得令人屏息的狂欢节面具，它们共同构成了这片土地的灵魂图谱。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`普图伊城堡`} />
                <InfoRow label="英文名称" value={`Ptuj Castle`} />
                <InfoRow label="正式名称" value={`Ptuj Castle`} />
                <InfoRow label="国家" value={`斯洛文尼亚`} />
                <InfoRow label="城市" value={`普图伊`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`斯洛文尼亚保存最完好的中世纪城堡之一，是普图伊这座“斯洛文尼亚最古老城镇”千年历史的最高见证者和守护者。`} />
                <InfoRow label="建筑特色" value={`一座层层叠叠、依山而建的防御建筑群，融合了罗马式基础、哥特式核心与文艺复兴时期的外貌，宛如从山岩中自然生长而出。`} />
                <InfoRow label="建筑风格" value={`以文艺复兴风格为主导，并清晰可见罗马式、哥特式及巴洛克式等多种风格的层叠与融合。`} />
                <InfoRow label="文化价值" value={`不仅是军事堡垒，更是区域历史文化的心脏，其内部的普图伊地区博物馆收藏着从史前到20世纪的珍贵遗产，尤以独特的普图伊民俗面具收藏闻名于世。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡区域（外部庭院）全年全天开放。普图伊地区博物馆（位于城堡主建筑内）开放时间：夏季（4月1日至10月31日）每日上午9:00至下午6:00；冬季（11月1日至3月31日）每日上午10:00至下午5:00。每周一闭馆（若周一是法定节假日则顺延至周二闭馆）。每年1月1日、11月1日和12月25日闭馆。特殊节庆活动（如普图伊狂欢节）期间开放时间可能有临时调整。`} />
              <InfoRow label="门票价格" value={`普图伊地区博物馆通票：成人票10欧元；学生、老人票8欧元；家庭票（2大2小）22欧元。仅参观城堡外部庭院和观景台免费。常设展览与临时特展一票通用。门票包含语音导览（提供斯洛文尼亚语、英语、德语、意大利语版本）。博物馆之友及持国际博物馆协会（ICOM）证件者免费。`} />
              <InfoRow label="地址" value={`Na Gradu 1, 2250 Ptuj, Slovenia`} />
              <InfoRow label="交通方式" value={`从卢布尔雅那约热·普奇尼克机场出发：最便捷的方式是乘坐接驳巴士或出租车至卢布尔雅那中央火车站，车程约30分钟。从卢布尔雅那中央火车站乘坐火车直达普图伊站，车程约1.5-2小时，每天约10-12班次。抵达普图伊火车站后，出站即可看到山丘上的城堡。步行上山是最有感觉的方式：从火车站步行约15分钟穿过老城区，沿着标志清晰的“Grad”（城堡）路标，经过古老的石阶小路即可到达城堡入口。也可以从火车站乘坐本地出租车，约5分钟车程直达城堡停车场。自驾者可直接导航至城堡山脚的付费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲普图伊城堡的故事，我们得先把时钟往回拨将近两千年。你现在脚下的这座小山，在罗马帝国时代就是一个至关重要的战略据点。当时，这里还不是一座“城堡”，而更像一个瞭望塔和驻军地，俯视着脚下通往潘诺尼亚平原的贸易路线，以及横跨德拉瓦河的重要渡口。罗马人走了，但山丘的军事价值留了下来。斯拉夫部落在此定居，“普图伊”这个名字最早出现在历史记载中，就与这座山丘紧密相连。早期的防御工事大概率是木质的，在纷乱的迁徙时代和早期中世纪，它一次又一次地被摧毁、重建，像一颗倔强的种子，深深扎进了这片土地的岩石里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡真正开始拥有我们今天看到的石质雏形，大概是在12世纪。当时，这片土地属于萨尔茨堡的大主教们。他们需要一座坚固的堡垒，来管理这片富饶的领地，并抵御来自东方的威胁。最初的核心建筑——那座厚重的罗马式主塔——就是在这一时期建立的。但城堡命运的转折点，发生在一位名叫弗里德里希二世的贵族身上。13世纪，他从大主教手中获得了普图伊，并雄心勃勃地要将这座堡垒扩建为家族的权力中心。然而，他的计划还没来得及完全实现，城堡就卷入了更大的历史漩涡。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`接下来的几个世纪，普图伊城堡就像一件珍贵的传家宝，在奥地利的各路贵族家族间流转。每个新主人都试图在上面留下自己的印记。它经历了哥特式风格的改造，塔楼更高，窗户更尖，以适应新的防御和居住需求。但最大的考验来自东方——奥斯曼土耳其帝国的铁骑多次席卷巴尔干半岛，兵锋直指中欧。普图伊城堡成为了抵御入侵的前线堡垒之一。为了应对火炮的威胁，城墙被加固加厚，新增了棱堡等防御工事。那段烽火连天的岁月，给城堡的石墙增添了一层凝重而坚韧的气质。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当来自东方的直接威胁逐渐消退，和平的年代带来了新的审美。16世纪，城堡迎来了它历史上最华丽的一次变身。当时的主人——莱斯利家族和后来的埃根伯格家族——按照文艺复兴的时尚，为这座中世纪的军事堡垒穿上了一件优雅的新外衣。陡峭的哥特式屋顶被改造成了更舒缓的样式，内部庭院建起了带有拱廊的精美回廊，墙壁上绘制了绚丽的壁画和家族纹章。城堡从一个纯粹的防御工事，转变为一个兼具舒适性与展示性的贵族官邸。我们今天看到的城堡主体风貌，正是在这个“文艺复兴化妆舞会”中定型的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，盛景难常。随着最后一位贵族主人——韦莱比特男爵在20世纪初将城堡出售给市政府，这座建筑渐渐沉寂，甚至一度面临荒废的境地。幸运的是，人们认识到了它的价值。1945年后，城堡被系统性地修复，并成为了普图伊地区博物馆的馆舍。那些曾被遗忘的房间，如今摆满了从史前到近代的珍贵文物。最奇妙的是，那些曾经回荡着骑士脚步声、贵族宴会欢笑的大厅，现在也飘荡着孩子们参观时好奇的提问和音乐学校的琴声。从罗马的哨岗到贵族的宫殿，再到今天的博物馆与社区文化中心，普图伊城堡完成了一次最为动人的身份蜕变，它不再是某个家族的私有物，而是成为了整座城市、整个地区共享的记忆宝库与精神高地。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`我强烈建议你将探访城堡的时间安排在午后稍晚，大约下午3点后开始上山。这样，你可以先在阳光下细细品味城堡的外部建筑和庭院，然后在博物馆里沉浸一两个小时，最后，将整段游览的高潮留给黄昏——在城堡的西侧露台或城墙边，等待日落将德拉瓦河和对岸的平原染成金色，看城堡的塔楼影子被拉得老长。整体耗时大约需要3.5到4小时。这样的节奏张弛有度，既能深度了解历史，又能捕捉到一天中最温柔的光影时刻，体验从日到夜的完整氛围转换。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡石阶在雨后非常湿滑，务必穿一双防滑舒适的鞋子。博物馆内部部分展厅空间较暗且楼梯陡峭，参观时请注意脚下安全。如果想拍摄空无一人的庭院美景，可以尝试在博物馆刚开门（上午9/10点）或闭馆前最后一小时进入，此时旅游团较少。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从老城广场边缘找到那条标志性的上山石阶小路，让脚步跟随历史的坡度慢慢抬升`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入城堡主庭院后别急着进门，先绕着回廊走一圈，从各个角度仰望那些融合了不同时代印记的塔楼与外墙`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开博物馆厚重的木门，直奔二楼的骑士厅，让那些悬挂的古老盔甲和武器、墙上的巨幅家族纹章壁画第一时间震撼你`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在民俗面具展厅里慢慢踱步，仔细端详那些造型诡异又充满生命力的科urent面具，感受来自古老农耕文明的神秘驱魔力量`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过挂满历代领主肖像的长廊，在音乐学校偶尔飘出的琴声伴奏下，想象几个世纪前贵族们在此漫步的情景`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上城堡的制高点——瞭望塔楼（如果开放），让360度的风尽情吹拂，将普图伊老城的红瓦、蜿蜒的德拉瓦河与远方的丘陵尽收眼底`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前半小时回到面向西侧的城墙缺口或露台，找一块古老的石头坐下，静静看着光线如何为整个小镇上演一场缓慢的魔术`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡下山时选择另一条坡度较缓的车道，你会经过一片安静的葡萄园，并从一个全新的视角回望夜幕初降时灯火渐起的城堡剪影`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡北侧城墙的方形缺口处`}</h4>
                  <p className="text-sm text-gray-700">{`日落前约一小时，从这里框架式构图拍摄普图伊老城层层叠叠的红屋顶和圣乔治教堂的尖塔，温暖的侧光会让瓦片泛起丝绒般的光泽。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主庭院文艺复兴拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个阳光能斜射入廊柱的午后，站在庭院中央，低角度仰拍，让阳光将拱廊的几何阴影投在古老的石地上，形成强烈的明暗与线条对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`骑士厅的盔甲阵列前`}</h4>
                  <p className="text-sm text-gray-700">{`利用厅内柔和的室内光，将相机感光度适当调高，聚焦于一具盔甲的细节（如面甲或护手），让后方阵列的其他盔甲虚化成深邃的背景，营造出时空走廊的意境。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城堡东面下山小径的回望点`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，从半山腰长满青草的小径回望，可以拍到城堡建筑群依山势起伏、与自然植被融为一体的全景，尤其秋天树叶变色时层次感绝佳。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`博物馆塔楼内部的螺旋石阶`}</h4>
                  <p className="text-sm text-gray-700">{`若有幸登上塔楼，注意捕捉从狭小窗口射入的光束打在旋转石阶上的画面，这是表现城堡内部空间感与时光流逝感的绝佳题材。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在博物馆内部拍摄前，请务必确认是否允许使用闪光灯（通常禁止），并保持安静以免影响其他参观者。使用无人机拍摄城堡全景需要提前向当地管理部门申请许可，切勿擅自起飞。拍摄当地居民或音乐学校的学生时，请先礼貌地征得对方同意。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`山脚老城风情`}</h4>
                  <p className="text-sm text-blue-800">{`入住Drava河畔由老房子改造的精品客栈，开窗就能看见水中城堡的倒影，晚上枕着潺潺水声入眠，清晨被教堂钟声唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-green-800">{`城堡山腰一处由17世纪贵族别墅改建的安静民宿，拥有一个可以俯瞰全城的花园露台，女主人会为你准备地道的普图伊早餐果酱。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`葡萄园中的宁静`}</h4>
                  <p className="text-sm text-yellow-800">{`距离城堡步行20分钟、坐落于自家葡萄园中的农庄客栈，房间充满斯洛文尼亚乡村的质朴温暖，主人还会邀请你品尝他们家酿的本地葡萄酒。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端河景享受`}</h4>
                  <p className="text-sm text-purple-800">{`普图伊唯一一家四星级设计酒店，位于老城中心，拥有直面Drava河与城堡的绝佳视角的顶层房间和露台酒吧，将古典景观与现代舒适完美结合。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`普图伊老城区非常小巧安全，深夜独自步行也问题不大。如果选择旺季（夏季或狂欢节期间）来访，务必提前至少一个月预订住宿，尤其是那些特色民宿。住在老城内虽然方便，但部分房间可能临街，对噪音敏感的朋友可以询问房间朝向或准备耳塞。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开普图伊城堡很久以后，我脑海里反复回味的，不是某一件具体的文物或某一个壮丽的视角，而是一种整体的“感觉”。那是一种被厚重的时间轻柔包裹的感觉。在这里，历史不是教科书上冰冷的知识点，也不是玻璃展柜后遥远的遗物。它是你脚下凹凸不平的石阶，是塔楼里穿堂而过的、带着青草气息的风，是庭院角落那棵静静生长了百年的老树。这座城堡以一种惊人的包容性存在着，它既是威严的守护者，又是亲切的邻居；它承载着宏大的史诗，也接纳着日常的琴声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求崭新、快速、高效的世界里，普图伊城堡像一块坚定不移的压舱石。它提醒着我们，有些东西是值得缓慢建造、精心守护、并代代相传的。它告诉我们，真正的力量往往不是张扬的征服，而是深沉的守望。当你站在这里，看着脚下流淌了千年的德拉瓦河，你会突然理解，为什么斯洛文尼亚人对他们的土地、他们的传统有着如此深沉而宁静的爱。对于每一位渴望在旅途中触碰真实历史纹理、而不仅仅是打卡拍照的深度旅人来说，普图伊城堡就是这样一处必访之地——它不会用喧嚣的娱乐震撼你，却会用一种沉默而磅礴的在场感，在你的记忆里，刻下关于“永恒”的、浅浅却深刻的一笔。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/postojna-cave" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    波
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">波斯托伊娜溶洞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Postojna Cave</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/skocjan-caves" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    什
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">什科茨扬溶洞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Škocjan Caves</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/piran-salt-pans-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    皮
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">皮兰盐田与老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Piran Salt Pans & Old Town</p>
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
