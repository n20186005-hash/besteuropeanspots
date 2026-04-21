import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '德拉厄 Dragør｜哥本哈根机场旁的时光琥珀 童话般的茅草顶渔村 - 最佳欧洲景点',
  description: '你几乎不敢相信，距离哥本哈根机场那种钢铁与玻璃构成的现代枢纽仅仅五分钟车程，世界的节奏就彻底变了调。车窗外掠过一片平静的海，然后你就被扔进了一个由鹅卵石、茅草和黄油色墙壁构成的梦境里。第一个迎接你的往往不是人，而是声音——一种低沉而满足的“嘎嘎”声。那是德拉厄真正的主人，肥硕而悠闲的家鹅，它们大摇大',
}

export default function DragorOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '丹麦', href: '/destinations/europe' },
            { label: '德拉厄', href: '/destinations/europe' },
            { label: '德拉厄', href: '/attractions/dragor-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`德拉厄・Dragør・丹麦・德拉厄`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你几乎不敢相信，距离哥本哈根机场那种钢铁与玻璃构成的现代枢纽仅仅五分钟车程，世界的节奏就彻底变了调。车窗外掠过一片平静的海，然后你就被扔进了一个由鹅卵石、茅草和黄油色墙壁构成的梦境里。第一个迎接你的往往不是人，而是声音——一种低沉而满足的“嘎嘎”声。那是德拉厄真正的主人，肥硕而悠闲的家鹅，它们大摇大摆地走在几百年前铺就的圆石路上，仿佛它们才是这里的镇长。空气里有一股独特的混合气味：海风带来的微咸，老木屋散发出的、如同旧书般的干燥木质香气，还有从某扇虚掩的门后飘出的、新鲜烘焙的丹麦酥皮的甜腻。
这里的色彩是治愈系的。所有的房子都被刷成了一种温暖的、介于蛋黄和奶油之间的黄色，据说这种颜色传统上是用当地提取的赭石混合酪蛋白涂料制成的，历经风雨反而更加温润。而屋顶，则是深棕色、毛茸茸的芦苇茅草，厚实得像个绒帽，边缘修剪得整整齐齐。阳光好的时候，每一根茅草尖都闪着金色的光，整条街的屋顶就像一片被驯服的、静止的麦浪。你走着走着，会看到窗台上摆着天竺葵的红陶罐，白色的蕾丝窗帘被海风轻轻拂动，自行车随意地靠在黄色的墙边，篮子里可能还放着刚买的面包。这不是一个为了旅游而存在的布景，这就是丹麦人生活的本来模样，缓慢、有序、充满对家园细节的珍爱。
它的核心魅力，就在于这种极致的“近”与“远”的对比。物理上，它近在咫尺，是现代航空旅行的一个注脚；精神上，它却遥远得像一个被封存在琥珀里的十七世纪下午。这里没有连锁商店，没有喧嚣的酒吧，只有一两家本地人光顾的烘焙店和餐馆。你能看到老人在长椅上晒太阳，看着港口里停泊的白色小船随着波浪轻轻摇晃。时间在这里不是被切割成分秒，而是随着潮汐的涨落、随着日影在鹅卵石上的移动而缓缓流淌。它是一个让你瞬间从旅行的奔波中沉静下来的避风港，提醒你，真正的北欧灵魂，或许就藏在这些与海为邻、色彩明媚的安静街巷里。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你几乎不敢相信，距离哥本哈根机场那种钢铁与玻璃构成的现代枢纽仅仅五分钟车程，世界的节奏就彻底变了调。车窗外掠过一片平静的海，然后你就被扔进了一个由鹅卵石、茅草和黄油色墙壁构成的梦境里。第一个迎接你的往往不是人，而是声音——一种低沉而满足的“嘎嘎”声。那是德拉厄真正的主人，肥硕而悠闲的家鹅，它们大摇大摆地走在几百年前铺就的圆石路上，仿佛它们才是这里的镇长。空气里有一股独特的混合气味：海风带来的微咸，老木屋散发出的、如同旧书般的干燥木质香气，还有从某扇虚掩的门后飘出的、新鲜烘焙的丹麦酥皮的甜腻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的色彩是治愈系的。所有的房子都被刷成了一种温暖的、介于蛋黄和奶油之间的黄色，据说这种颜色传统上是用当地提取的赭石混合酪蛋白涂料制成的，历经风雨反而更加温润。而屋顶，则是深棕色、毛茸茸的芦苇茅草，厚实得像个绒帽，边缘修剪得整整齐齐。阳光好的时候，每一根茅草尖都闪着金色的光，整条街的屋顶就像一片被驯服的、静止的麦浪。你走着走着，会看到窗台上摆着天竺葵的红陶罐，白色的蕾丝窗帘被海风轻轻拂动，自行车随意地靠在黄色的墙边，篮子里可能还放着刚买的面包。这不是一个为了旅游而存在的布景，这就是丹麦人生活的本来模样，缓慢、有序、充满对家园细节的珍爱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的核心魅力，就在于这种极致的“近”与“远”的对比。物理上，它近在咫尺，是现代航空旅行的一个注脚；精神上，它却遥远得像一个被封存在琥珀里的十七世纪下午。这里没有连锁商店，没有喧嚣的酒吧，只有一两家本地人光顾的烘焙店和餐馆。你能看到老人在长椅上晒太阳，看着港口里停泊的白色小船随着波浪轻轻摇晃。时间在这里不是被切割成分秒，而是随着潮汐的涨落、随着日影在鹅卵石上的移动而缓缓流淌。它是一个让你瞬间从旅行的奔波中沉静下来的避风港，提醒你，真正的北欧灵魂，或许就藏在这些与海为邻、色彩明媚的安静街巷里。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`德拉厄`} />
                <InfoRow label="英文名称" value={`Dragør`} />
                <InfoRow label="正式名称" value={`Dragør`} />
                <InfoRow label="国家" value={`丹麦`} />
                <InfoRow label="城市" value={`德拉厄`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座保存完好的古镇，是厄勒海峡航运史上至关重要的领航员社区，也是丹麦汉萨同盟时期繁荣的渔港和贸易点缩影。`} />
                <InfoRow label="建筑特色" value={`密集排列的黄油黄色木构房屋，顶着厚重而蓬松的芦苇茅草屋顶，形成如玩具积木般和谐又生动的街景。`} />
                <InfoRow label="建筑风格" value={`典型的丹麦传统民居风格，深受荷兰及北德地区影响的砖木结构低矮建筑，以实用性和抵御海风为设计核心。`} />
                <InfoRow label="文化价值" value={`它是一个活生生的社区博物馆，展现了数个世纪以来，斯堪的纳维亚沿海居民如何依靠大海生活、并与欧洲大陆进行紧密文化交流的独特生活方式。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇公共区域全天开放。主要博物馆（德拉厄博物馆及领航员博物馆）开放时间通常为夏季（6月至8月）每日11:00-16:00；春秋季（4-5月，9-10月）可能缩短为周末开放或预约制；冬季（11月至3月）大多闭馆。具体请行前查阅官网，丹麦公共假日也可能影响开放。`} />
              <InfoRow label="门票价格" value={`漫步古镇本身完全免费。参观德拉厄博物馆（Dragør Museum）成人票约60丹麦克朗，儿童免费。联票或特展价格可能变动。持哥本哈根卡（Copenhagen Card）可免费进入。`} />
              <InfoRow label="地址" value={`Dragør Bycenter， 2791 Dragør， 丹麦`} />
              <InfoRow label="交通方式" value={`从哥本哈根机场（CPH）出发是最快捷的方式：在机场乘坐公交35路或36路，方向Dragør，约15-20分钟即可直达德拉厄镇中心，车次频繁（约每10-20分钟一班）。上车可使用信用卡直接刷卡购票，或购买哥本哈根交通区的票。从哥本哈根市中心出发可先乘地铁M2线至机场，再转乘上述公交；或直接从市中心乘坐公交250S路，约40分钟。骑行爱好者也可从机场沿专用自行车道骑行约5公里抵达，一路海景相伴。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要讲德拉厄的故事，得把目光投向厄勒海峡那片繁忙而危险的水域。早在中世纪，这里就是连接波罗的海和北海的黄金水道，但也布满暗礁与浅滩。大概在12世纪左右，第一批渔民在此定居，但真正让德拉厄命运发生转折的，是14世纪汉萨同盟的崛起。来自德国吕贝克的汉萨商人看中了这个天然良港，他们在此建立了据点，德拉厄迅速成为一个重要的鲱鱼贸易中心。你可以想象，当时的码头必定堆满了木桶，空气中弥漫着浓烈的鱼腥和盐味，德语、丹麦语、低地德语此起彼伏，金币在柜台叮当作响。那些黄色的商人宅邸，最早的根基或许就埋在那段商贸繁荣的时期。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，德拉厄最传奇的身份，是“领航员之城”。从16世纪开始，随着航运业的爆炸式增长，安全通过蜿蜒的厄勒海峡成为巨大挑战。于是，一个特殊的职业群体在这里诞生了：德拉厄的领航员。他们不是官方的海军，而是一个紧密的、父传子的民间行会。这些男人从小就在海峡里摸爬滚打，对每一处暗流、每一块礁石都了如指掌。当外国商船接近时，他们会驾驶小巧灵活的领航艇迎上去，像海鹰一样敏捷地靠帮，然后登上大船，接过舵轮，凭借代代相传的“活海图”知识，将庞然大物安全引领过海峡，直至哥本哈根或更远。这份工作需要无比的勇气、精湛的技术和绝对的信任。领航员的收入丰厚，这也解释了为什么这个看似偏僻的小镇，却拥有如此多精美且维护良好的房屋——每一栋黄油色的房子背后，可能都有一位用生命与大海搏斗、为家庭换来安稳生活的船长。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战争的风云也曾掠过这片茅草屋顶。在1807年的哥本哈根战役中，英国舰队炮轰哥本哈根，试图夺取丹麦海军。德拉厄因为其战略位置，也卷入了冲突。据说，当地居民曾奋力协助运输物资和伤员。但更深刻的改变发生在和平时期。19世纪末，随着蒸汽船的出现和导航技术的进步，传统的领航员行业逐渐式微。德拉厄似乎要褪去光环，变回一个普通的渔村。但正是这种“被遗忘”，意外地成为了它的救赎。因为发展停滞，大规模的城市改造从未发生，那些古老街巷和房屋得以原封不动地保存下来，像一部凝固的史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "20世纪以来，特别是战后，丹麦人开始珍视这种不可多得的历史遗产。1965年，整个老城区被列为国家保护建筑群。居民们依然住在这些几百年的老房子里，但他们用现代的标准小心维护着传统的外貌：茅草屋顶每隔几十年需要彻底更换，墙面定期粉刷那标志性的黄色。它没有变成一座死气沉沉的博物馆，而是一个活着的社区。如今的德拉厄，许多居民是哥本哈根的通勤族，他们每天穿过时光隧道，在现代都市和古典家园之间切换。小镇每年夏天会举办热闹的“德拉厄节”，有老式帆船赛和街头聚会，那是领航员精神的现代回响。从汉萨商港到领航员堡垒，再到被精心保存的时光胶囊，德拉厄的历史，就是一部关于大海、勇气、社区韧性，以及在变迁中紧握自身身份的动人故事。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你在一个晴朗的早晨，最好是工作日，从哥本哈根机场轻松抵达。预留至少4-5小时，享受一个悠闲的半日漫游。早晨的光线最适合拍照，人迹稀少，能听到最纯粹的海浪与鹅鸣。节奏一定要慢，这里不适合“打卡”，只适合“浸泡”。从镇中心的信息点开始，然后让自己迷失在迷宫般的鹅卵石小径中，重点体验从陆地到海洋的过渡，最后在港口边结束，让身心完全沉浸在这片琥珀色的宁静里。这样的安排能让你逐步脱离现代世界的喧嚣，层层深入地感受小镇的灵魂。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`绝对不要试图开车进入老城区的鹅卵石小巷，不仅困难而且会破坏气氛，将车停在镇外指定停车场是唯一选择。
尊重当地居民隐私，拍照时尽量避免直接将镜头对准人家的窗户或私人庭院，这里首先是家园，然后才是景点。
穿着绝对舒适的平底鞋，高跟鞋在圆石路上将是灾难，且走路时请放慢脚步，小心地上的鹅粪——这是德拉厄“特产”的一部分。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从公交站或停车场走进镇中心，先让那扑面而来的黄油色房屋和毛茸茸的茅草屋顶给你一个温暖的拥抱`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟着闲逛的家鹅走一小段，听听它们嘎嘎的“讲解”，在第一个安静的交叉路口停下，好好呼吸一口带着海藻气息的空气`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻着指示牌找到藏在老房子中的德拉厄博物馆，在小而精致的展厅里看看领航员用过的罗盘、船模和发黄的家庭照片`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从博物馆出来，故意选一条最窄的、两侧墙壁几乎要碰到肩膀的小巷（比如Smedestræde）钻进去，触摸那粗糙而温暖的墙砖`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着小巷一直走到豁然开朗的港口边，看五彩的渔船在清澈的水中倒影，找一张面向大海的长椅坐下，什么都不想`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果胃口开了，去港口边那家外墙爬满藤蔓的老餐馆，尝尝用当天捕捞的鲜鱼做的开放式三明治`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`饭后沿着防波堤慢慢走，远眺对岸瑞典的轮廓线，想象几个世纪前领航员们就是从这里驾着小船冲向风浪`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回程前别忘了去主街上的那家传统烘焙店，买一块热乎乎的“kanelsnegle”（肉桂卷），带着甜香离开`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`Ørnehøjen小山坡顶`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，站在这个制高点可以拍摄到整个德拉厄老城如乐高积木般铺陈开去的全景，茅草屋顶的纹理和黄色墙壁的韵律尽收眼底，用长焦镜头压缩画面会更震撼。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`阿莫门（Amagerporten）拱门框架`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光西斜时，站在这座古老石拱门内侧向外拍摄，以门洞为画框，框住对面那条典型的、尽头是海的小巷和行人，营造深邃的时空隧道感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`港口边的系船柱旁`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个有鲜艳颜色小船停泊的位置，蹲下低角度拍摄，让前景的粗砺系船柱和绳索引导视线，中景是荡漾的蓝色海水和小船，背景是成排的黄色房屋，构图充满故事性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`Kærgårdsplads小广场鹅群互动`}</h4>
                  <p className="text-sm text-gray-700">{`利用广场上悠闲的家鹅作为生动前景，对准它们和背后那排最经典的茅草顶房屋（特别是带红色门的那几家），等待鹅做出有趣动作时抓拍，画面瞬间活起来。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`某条无名小巷的光影交界处`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分当阳光直射入狭窄巷弄，找到一面被爬山虎部分覆盖的黄色山墙，捕捉阳光照亮部分与阴影部分形成的鲜明对比和几何分割，突出建筑的质感与色彩。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`丹麦法律非常重视隐私权，切勿未经允许拍摄可识别面孔的当地人特写，尤其是儿童。拍摄房屋内部或私人花园几乎肯定是冒犯行为。`}</li>
                <li>• {`充分利用北欧夏季漫长的“黄金时刻”和“蓝色时刻”，日落前后光线柔和色彩魔幻，是拍摄港口和街道的绝佳时机。`}</li>
                <li>• {`雨天或阴天也别沮丧，湿漉漉的鹅卵石路面反光能拍出油画般的色彩饱和度，别有一番忧郁的北欧风情。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温馨民宿之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住一栋真正的18世纪黄色渔夫小屋改造的民宿，低矮的木梁、复古的装饰炉，夜晚能听到屋顶茅草在风中的细微窸窣声，房东会为你准备手写的本地探索指南。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`位于港口边一座翻新的历史仓库内，房间拥有裸露的砖墙和现代北欧设计家具，从你的窗户望出去就是泊满小船的海港，清晨看渔船出港是最棒的醒来方式。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端海滨度假屋`}</h4>
                  <p className="text-sm text-yellow-800">{`老城边缘一栋带私人码头和露台的宁静度假屋，内部是斯堪的纳维亚极简风格，配备丹麦顶级家饰，你可以直接在露台上烧烤，看着夕阳沉入厄勒海峡。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`历史酒店体验`}</h4>
                  <p className="text-sm text-purple-800">{`镇中心由昔日领航员协会建筑改造的小型精品酒店，房间以著名领航员命名，保留了原始的橡木地板和壁炉，下楼就是全镇最好的餐厅，充满旧日航海时代的氛围。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（6-8月）是绝对旺季，这些独特的住宿往往提前数月就被订满，务必尽早规划。春秋季预订则灵活得多，且能享受更宁静的体验。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "德拉厄是一个非常安全、安静的社区，夜晚除了海浪声几乎万籁俱寂，喜欢夜生活的旅人可能会觉得过于安静，但这正是它珍贵之处。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "大部分历史建筑内的住宿不设电梯，且楼梯可能陡峭，携带大件行李或行动不便者预订前最好询问清楚。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开德拉厄的时候，我的手里仿佛还残留着触摸那些温暖黄色墙壁的触感，耳朵里还回响着鹅群慵懒的合唱。这趟短暂的旅程，与其说是参观了一个景点，不如说是进行了一次有效的心灵减压。在全球化让所有城市变得越来越相似的今天，德拉厄固执地、优雅地保持着自己的步调。它告诉你，进步不一定要以抹去过去为代价，现代化并不意味着所有人都要挤进玻璃幕墙的丛林。在这里，几个世纪的时间被压缩在步行十分钟的半径里，却丝毫没有压迫感，只有一种被时光温柔包裹的安心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "我们总是在追寻远方的奇观，却常常忽略了，真正的治愈可能就藏在一次转弯、一片暖色、一阵带着咸味的海风里。德拉厄就是这样一个地方。它没有惊心动魄的传奇，只有日复一日与海相伴的平静生活；没有宏伟的建筑，只有呵护备至的家园。它让我们看到，深度旅行未必是去探索荒原或攀登高峰，也可以是把自己沉浸在一个保存完好的生活切片里，去体会另一种时间维度下的存在方式。对于每一位被现代生活节奏催赶的旅人来说，德拉厄就像紧邻繁忙机场的一个秘密呼吸阀，提醒着我们：慢下来，珍惜色彩，聆听鹅叫，生活本可以如此简单而丰盈。这，或许就是它最值得被列入一生必去清单的理由——它不是终点，而是一个让你重新校准内心罗盘的起点。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/ribedenmark-odden" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    里
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">里伯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ribe</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/den-gamle-by" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥尔胡斯老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Den Gamle By</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ribe-denmark-oldest-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    里
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">里伯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ribe</p>
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
