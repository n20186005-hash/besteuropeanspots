import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '洛尔施隐修院 Lorsch Abbey｜探访“加洛林文艺复兴”唯一存世的鲜活面孔 - 最佳欧洲景点',
  description: '说实话，当你第一眼看到洛尔施隐修院时，可能会有点懵。你想象中的恢弘修道院呢？高耸的教堂中殿呢？眼前，只有一片开阔的、修剪整齐的绿草地，像一块巨大的绿色画布，上面散落着一些低矮的、用白色标线勾勒出的石头地基，仿佛建筑师的图纸被直接印在了大地上。风毫无阻挡地吹过，带着青草和远处 Linden 树花的淡淡...',
}

export default function LorschAbbeyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '洛尔施隐修院', href: '/attractions/lorsch-abbey' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`洛尔施隐修院・Lorsch Abbey・德国・黑森州，洛尔施市`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，当你第一眼看到洛尔施隐修院时，可能会有点懵。你想象中的恢弘修道院呢？高耸的教堂中殿呢？眼前，只有一片开阔的、修剪整齐的绿草地，像一块巨大的绿色画布，上面散落着一些低矮的、用白色标线勾勒出的石头地基，仿佛建筑师的图纸被直接印在了大地上。风毫无阻挡地吹过，带着青草和远处 Linden 树花的淡淡甜香。然后，你的视线一定会被草地尽头那座建筑牢牢抓住——那就是著名的“门楼”。它就这样孤零零地、却无比骄傲地矗立着，红白相间的砂岩在阳光下温暖而醒目，像一位历经沧桑却依旧腰板挺直的老绅士，静静地守护着这片空旷的记忆之地。
这里的“空”，恰恰是它最震撼人心的地方。它不是一座被后来时代不断涂抹、叠加的复杂教堂，而是一个清晰的、考古学意义上的“断面”。你走在柔软的草地上，脚下那些白色线条告诉你：这里曾是宏伟的巴西利卡教堂的中殿，那里是修士们用餐的食堂，另一边是回廊的内院。你需要动用一点想象力，在脑海中将那些无形的墙壁和拱顶重新搭建起来。这时，耳边仿佛能听到修士们诵经的吟唱，闻到缮写室内羊皮纸和墨水的气味，感受到近1200年前这里作为知识与灵性中心的脉搏。这种“填空”般的体验，让参观者从一个被动的观赏者，变成了一个主动的发现者和共情者。
这个遗址与洛尔施小镇的生活无缝交融。你会看到当地人牵着狗在草地上散步，孩子们在古老的地基线条间玩捉迷藏，情侣靠在门楼的阴影下读书。它不是一个被玻璃罩起来的博物馆标本，而是社区的后花园，是日常风景的一部分。这种亲民感消解了历史的沉重，让你觉得，那个辉煌的加洛林时代，或许并没有那么遥远。最打动人的，莫过于那种极致的“残缺的完整”——主体建筑已随风逝去，但那个时代的灵魂、那种开创性的文化自信，却通过这座幸存的门楼和这片被精心呵护的遗址，无比清晰地传递了出来。它不展示繁复，它展示根源。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`说实话，当你第一眼看到洛尔施隐修院时，可能会有点懵。你想象中的恢弘修道院呢？高耸的教堂中殿呢？眼前，只有一片开阔的、修剪整齐的绿草地，像一块巨大的绿色画布，上面散落着一些低矮的、用白色标线勾勒出的石头地基，仿佛建筑师的图纸被直接印在了大地上。风毫无阻挡地吹过，带着青草和远处 Linden 树花的淡淡甜香。然后，你的视线一定会被草地尽头那座建筑牢牢抓住——那就是著名的“门楼”。它就这样孤零零地、却无比骄傲地矗立着，红白相间的砂岩在阳光下温暖而醒目，像一位历经沧桑却依旧腰板挺直的老绅士，静静地守护着这片空旷的记忆之地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里的“空”，恰恰是它最震撼人心的地方。它不是一座被后来时代不断涂抹、叠加的复杂教堂，而是一个清晰的、考古学意义上的“断面”。你走在柔软的草地上，脚下那些白色线条告诉你：这里曾是宏伟的巴西利卡教堂的中殿，那里是修士们用餐的食堂，另一边是回廊的内院。你需要动用一点想象力，在脑海中将那些无形的墙壁和拱顶重新搭建起来。这时，耳边仿佛能听到修士们诵经的吟唱，闻到缮写室内羊皮纸和墨水的气味，感受到近1200年前这里作为知识与灵性中心的脉搏。这种“填空”般的体验，让参观者从一个被动的观赏者，变成了一个主动的发现者和共情者。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这个遗址与洛尔施小镇的生活无缝交融。你会看到当地人牵着狗在草地上散步，孩子们在古老的地基线条间玩捉迷藏，情侣靠在门楼的阴影下读书。它不是一个被玻璃罩起来的博物馆标本，而是社区的后花园，是日常风景的一部分。这种亲民感消解了历史的沉重，让你觉得，那个辉煌的加洛林时代，或许并没有那么遥远。最打动人的，莫过于那种极致的“残缺的完整”——主体建筑已随风逝去，但那个时代的灵魂、那种开创性的文化自信，却通过这座幸存的门楼和这片被精心呵护的遗址，无比清晰地传递了出来。它不展示繁复，它展示根源。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`洛尔施隐修院`} />
                <InfoRow label="英文名称" value={`Lorsch Abbey`} />
                <InfoRow label="正式名称" value={`Lorsch Abbey`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`黑森州，洛尔施市`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是加洛林文艺复兴时期最具代表性的修道院之一，其保存完好的“门楼”是这一时期除亚琛大教堂外唯一完整留存至今的地面建筑，被誉为“通往中世纪早期的大门”。`} />
                <InfoRow label="建筑特色" value={`标志性的红白相间石砌“门楼”结构独特，下层是三个罗马式拱门，上层则是仿照古罗马凯旋门形式建造的礼堂，融合了古典遗产与中世纪早期的创新精神。`} />
                <InfoRow label="建筑风格" value={`加洛林文艺复兴建筑风格，其门楼是这一短暂而辉煌的艺术时期现存最纯粹、最完整的建筑典范。`} />
                <InfoRow label="文化价值" value={`它不仅是一个宗教遗址，更是一座中世纪早期的“知识方舟”，其修道院缮写室曾产出包括《洛尔施药典》在内的珍贵手稿，对欧洲医学、文学和法律的发展产生了深远影响。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`遗址区（修道院门楼及周边绿地）全天24小时开放。附属的“王国大厅”博物馆开放时间为周二至周日上午10点至下午5点，周一闭馆。冬季（11月至次年3月）博物馆开放时间可能缩短至下午4点关闭，建议出行前在官网确认。每年12月24日、25日及31日博物馆闭馆。`} />
              <InfoRow label="门票价格" value={`遗址区免费参观。“王国大厅”博物馆门票为6欧元，优惠票（学生、残疾人等）4欧元。18岁以下青少年及儿童免费。每月第一个周日可免费进入博物馆。提供语音导览设备租赁，费用约3欧元。`} />
              <InfoRow label="地址" value={`Nibelungenstraße 35, 64653 Lorsch, Germany`} />
              <InfoRow label="交通方式" value={`从法兰克福国际机场出发最为便捷。在机场长途火车站乘坐区域火车（Regionalbahn）前往达姆施塔特主火（约25分钟），在达姆施塔特换乘开往巴本海姆方向的RB列车，在“洛尔施”站下车（约20分钟）。从洛尔施火车站出站后，沿着清晰的“UNESCO Welterbe”棕色旅游指示牌步行，穿过宁静的居民区，大约15分钟即可抵达隐修院遗址。火车班次通常每小时1-2班，建议使用德国铁路DB APP或网站查询实时车次并购买州票（如黑森州票），适合多人同日往返，非常划算。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从一个叫做“彼得的酒壶”的传说讲起。据说在764年左右，法兰克贵族坎德斯温德和她的儿子，也就是后来的楚登伯爵，决定在此地兴建一座修道院。他们从阿尔萨斯请来了本笃会修士，而修士们带来的最珍贵的圣物，据传是圣纳泽留斯的遗骨。为了运送圣骨，修士彼得将遗骨藏在自己的酒壶中，一路平安抵达。这个充满烟火气的传说，为这座以学术闻名的修道院增添了一抹亲切的底色。当然，真正让它腾飞的，是它迅速获得了法兰克王室的青睐。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`查理曼大帝的宫廷是当时欧洲的文化心脏，而洛尔施隐修院很快成为了这颗心脏向外泵送血液的重要动脉。公元772年，查理曼大帝亲自授予修道院“帝国修道院”的地位，这意味着它直接受皇帝保护，享有大量特权、土地和财富。这不仅仅是政治上的荣耀，更是一道文化建设的动员令。洛尔施的黄金时代来临了。它的缮写室成为了欧洲最顶尖的“出版社”之一。戴着眼镜的修士形象虽然要到中世纪晚期才出现，但你可以想象，在烛光摇曳的缮写室里，修士们用鹅毛笔在珍贵的羊皮纸上誊抄、注释、创作。这里诞生了被誉为“德国文学开篇”的《希尔德布兰德之歌》的古老手稿，更编纂了极具科学价值的《洛尔施药典》，里面详细记录了数百种草药和疗法。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的建筑，尤其是那座我们今天依然能看到的门楼，本身就是一份宣言。在查理曼及其继任者的推动下，一场旨在复兴古罗马文化荣光的“加洛林文艺复兴”席卷帝国。洛尔施的门楼就是这场运动的建筑学“标兵”。它大胆地采用了古罗马凯旋门的形制，并用醒目的红白两色砂岩交替砌筑，创造出一种既庄严又极具装饰性的视觉效果。这仿佛在向世界宣告：野蛮时代已经过去，一个新的、融合了罗马遗产、基督教信仰和日耳曼力量的文明正在崛起。门楼上层那个宽敞的礼堂，很可能用于接待尊贵的帝国宾客，是权力与知识直接对话的空间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的抛物线总有下落的时候。随着加洛林帝国的分崩离析，洛尔施的地位逐渐被新的政治和宗教中心所取代。但它真正的衰落，始于世俗化浪潮。1232年，罗马教廷将它移交给了美因茨大主教，失去了帝国直属地位。更致命的打击来自16世纪的宗教改革和随之而来的战争。最终，在1557年，修道院被解散，其庞大的地产和权力被世俗诸侯接管。建筑失去了灵魂，便开始走向物理上的消亡。最大的灾难发生在1090年的一场大火（是的，在解散前它已遭重创），以及更彻底的拆除发生在17世纪三十年战争之后。那些精美的石料被当地居民搬走，用于建造自己的房屋和围墙。宏伟的教堂就这样从地面上“消失”了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到20世纪，考古学的曙光才照进这片被遗忘的草地。系统的发掘工作逐渐厘清了这座“记忆之宫”的原始蓝图。那些被挖出的地基，像大地的骨骼，诉说着往昔的庞大与精密。1991年，当联合国教科文组织将洛尔施隐修院列入世界遗产名录时，给出的评语精准而深刻：它虽然残缺，但其门楼是加洛林建筑“罕见而卓越的见证”，而整个遗址则“提供了欧洲中世纪早期修道院生活的全貌”。今天，我们看到的不是废墟，而是一个被精心解读和呈现的考古现场。它存在的意义，不再是宗教崇拜，而是文明记忆的传承。那座红白门楼，从此不再孤独，它成了全人类共同凝视的一扇窗，透过它，我们能瞥见欧洲文明在懵懂与辉煌交织的童年时代，那最为雄心勃勃的一刻。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一个完整的上午或下午（约3-4小时）进行深度探访。最佳抵达时间是工作日的上午9点后，这时博物馆刚刚开门，遗址区游客稀少，光线也适合拍照。游览节奏宜慢不宜快，核心在于“沉浸”与“想象”。首先从火车站漫步至遗址，感受小镇氛围作为铺垫；然后以门楼为视觉焦点，进行外部细致观察；接着进入博物馆，用丰富的出土文物和模型在脑海中重构历史；最后，带着从博物馆获得的知识，重新漫步于遗址草地，这时，那些白色地基线条会变得鲜活起来，整个游览体验将形成完美的闭环。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`遗址区完全露天，请务必根据天气穿着舒适的步行鞋并携带防晒/防雨用具。博物馆内部展品说明以德文为主，但有非常详尽的英文语音导览，强烈建议租用。小镇餐馆不多且集中在中心广场，如果计划长时间游览，最好自备少许零食和水。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从洛尔施火车站出来，别急着直奔目的地，先沿着两旁栽满鲜花的安静街道慢走，感受这个将世界遗产当作日常背景的小镇生活节奏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到遗址边缘，不要立刻靠近门楼，先在远处绿地的长椅上坐几分钟，静静观察红白门楼在广阔天空下的剪影，让那种历史的孤寂感与宁静将你包裹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`然后起身，沿着小径走到门楼正下方，仰头仔细观察那些历经千年风霜的红砂岩与白砂岩的交替砌法，触摸石头上粗糙而温润的质感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入“王国大厅”博物馆，在那个巨大的、灯光幽暗的展厅里，寻找按原样复制的《洛尔施药典》书页，看上面绘制的曼德拉草等神奇植物插画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要在博物馆的中庭回廊停留，这里复原了中世纪修道院花园，空气中弥漫着药草的气息，坐下来想象修士在此采摘草药的情景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`带着新的认知回到露天遗址，沿着清晰的白色地基标记，一步一步“走”进那座消失的巴西利卡教堂，用脚步丈量中殿的长度与后殿的弧度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，绕到遗址区的后方，那里有一片被称为“阿尔塔姆明斯特”的更早期教堂遗迹，在更加荒芜的氛围中，感受历史在这里的层层叠压。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`门楼正面全景机位`}</h4>
                  <p className="text-sm text-gray-700">{`站在遗址绿地南侧的小径上，将整个红白门楼置于画面中央，利用广角镜头囊括前景的草地与后景的天空，最佳光线在上午侧光时，能突出石材的纹理与色彩对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`门楼拱门下的人物剪影`}</h4>
                  <p className="text-sm text-gray-700">{`下午当阳光斜射入北侧拱门时，让人物站在中间拱门的暗处面向光源，可以拍出极具戏剧性和故事感的剪影照片，背景是门外明亮的绿野。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`修道院教堂地基线条的俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`从门楼二层（如果开放）或使用无人机（需提前确认当地法规），垂直向下拍摄那些用白色标线勾勒出的完整教堂地基，几何图案与绿色草地的组合充满抽象艺术美。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`博物馆内的静物细节`}</h4>
                  <p className="text-sm text-gray-700">{`将镜头对准展柜中那些出土的陶器碎片、雕刻精美的石棺残件或仿制手稿的细腻笔触，利用现场幽暗光线营造聚焦感，讲述沉默文物的故事。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`傍晚时分的逆光门楼`}</h4>
                  <p className="text-sm text-gray-700">{`在日落前约一小时，太阳位于门楼西侧后方，此时拍摄门楼的深色轮廓与金色暖调的边缘光，能拍出油画般凝重而辉煌的史诗感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重遗址规定，不使用闪光灯拍摄脆弱文物，不用三脚架阻塞博物馆狭窄通道。拍摄当地人或在墓地遗迹旁请保持庄重，最好先微笑示意。多尝试不同角度，门楼的魅力在于其几何造型的简洁有力，而不仅限于标准正面照。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济便捷之选`}</h4>
                  <p className="text-sm text-blue-800">{`洛尔施火车站旁一家简约现代的家庭旅馆，房间明亮干净，老板会热情地给你手绘小镇美食地图，并告诉你看门楼晨雾的秘密时间。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史氛围体验`}</h4>
                  <p className="text-sm text-green-800">{`住在达姆施塔特市中心一家由古老建筑改造的设计酒店，既能享受城市的便利餐饮，乘短途火车来洛尔施也仅需20分钟，完美结合古今。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`田园诗画隐居`}</h4>
                  <p className="text-sm text-yellow-800">{`距离洛尔施几公里外、莱茵河畔葡萄园中的一间温馨农庄民宿，早晨在乌语和葡萄藤的清香中醒来，傍晚喝着房东自酿的雷司令看夕阳染红天际线。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`法兰克福都市基座`}</h4>
                  <p className="text-sm text-purple-800">{`若追求极致便利与丰富夜生活，选择法兰克福中央车站附近的四星级酒店，将洛尔施作为一日深度文化之旅，晚上回来继续享受大都市的脉搏。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`洛尔施本身是宁静的睡眠天堂，但夜间餐饮选择极少。如果预订葡萄园农庄，强烈建议租车，能让你更自由地探索周边如伯格斯特拉瑟的酒庄道路。旺季（尤其是夏秋之交）达姆施塔特和法兰克福的酒店紧张，提早预订是明智之举。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开洛尔施时，我的背包里没有沉重的纪念品，但脑海里却装满了一种奇特的“轻盈的厚重感”。那些消失的墙壁、坍圮的拱顶，并没有让我感到失落，反而让我更清晰地“看见”了某种本质——文明的火种如何被点燃、守护、传递，以及最终，如何以另一种形式永恒。这片遗址像一个巨大的冥想空间，它不灌输给你繁杂的知识，而是给你空白和线索，邀请你自己去连接、去感悟。在这个崇尚“完整”和“壮观”的世界里，洛尔施隐修院坦然展示着自己的残缺，却因此赢得了更深沉的完整。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`我想，这就是深度旅行最珍贵的收获吧。它不是打卡，而是对话；不是收集地标，而是理解一片土地上时间流淌的痕迹。洛尔施就像一位沉默的智者，它告诉你，最伟大的宫殿也会归于尘土，最鼎盛的权力终成过眼云烟，但人类对知识的渴求、对美的创造、对超越日常的精神追求，却能够跨越千年，通过一块石头、一行诗句、一页药方，轻轻地触碰你的手心。每一位真正的旅人，都应该来这里坐一坐，在这片空旷的绿色画布前，亲自完成那幅名为“起源”的内心拼图。你会发现，你寻找的不仅仅是欧洲的过去，或许，也是我们自己文化根脉中，那些似曾相识的、倔强而明亮的起点。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/maulbronn-monastery" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    毛
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">毛尔布龙修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Maulbronn Monastery</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/regensburg-stone-bridge" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    雷
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">雷根斯堡石桥</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Regensburg Stone Bridge</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/trier-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特里尔主教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trier Cathedral</p>
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
