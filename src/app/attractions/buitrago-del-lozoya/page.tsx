import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布伊特拉戈德尔洛索亚 Buitrago del Lozoya｜马德里大区唯一被古老摩尔城墙完全环绕的水城 - 最佳欧洲景点',
  description: '车子刚转过一个弯，那片灰褐色的城墙就毫无预兆地撞进了视野。它不是孤零零的一座城堡，而是一整圈，完完整整、严丝合缝地环抱着一个错落着红瓦屋顶的小镇，像一位沉默而忠诚的古老巨人，将怀中的珍宝守护了千年。洛索亚河在城墙脚下拐了一个近乎完美的弯，将整座城温柔地揽在臂弯里，河水清澈见底，映着城墙、天空和云朵的...',
}

export default function BuitragoDelLozoyaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '西班牙', href: '/destinations/spain' },
            { label: '布伊特拉戈德尔洛索亚', href: '/attractions/buitrago-del-lozoya' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`布伊特拉戈德尔洛索亚・Buitrago del Lozoya・西班牙・布伊特拉戈德尔洛索亚`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚转过一个弯，那片灰褐色的城墙就毫无预兆地撞进了视野。它不是孤零零的一座城堡，而是一整圈，完完整整、严丝合缝地环抱着一个错落着红瓦屋顶的小镇，像一位沉默而忠诚的古老巨人，将怀中的珍宝守护了千年。洛索亚河在城墙脚下拐了一个近乎完美的弯，将整座城温柔地揽在臂弯里，河水清澈见底，映着城墙、天空和云朵的倒影，分不清哪边才是真实的世界。那一瞬间，你仿佛不是从21世纪的马德里郊外驶来，而是不小心闯进了一幅中世纪的细密画里，空气都忽然变得沉静、古老了几分。
把车停在河对岸，走过那座有着七个拱洞的罗马式古桥，才算真正开始接近它。风从城垛间穿过，发出低沉呜咽般的声音，混合着河岸边的青草气息和古老石头被太阳晒过后散发出的、略带尘土味的干燥味道。穿过那道厚重的“阿尔科斯门”拱洞，光线骤然一暗，随即豁然开朗。里面完全是另一个世界。狭窄的鹅卵石街道，被岁月打磨得光滑温润，蜿蜒着向小城中心延伸。周末的上午，本地主妇们拎着篮子从面包房走出，老人们坐在广场长椅上晒太阳，闲聊声和咖啡馆里杯碟的轻碰声交织在一起，生活的气息扑面而来。这里没有大型旅游团的喧嚣，时间仿佛被调慢了速度，你能清晰地听到自己的脚步声，感受到这座水城在平稳地呼吸。
最打动人的，是那种无处不在的“守护”与“被守护”的感觉。你沿着内城墙的步道行走，手指拂过粗糙而冰凉的巨石，能想象到八百年前的士兵，也曾站在同样的位置，眺望着远方的山峦，警惕着可能的来敌。而城墙下，如今是居民们精心打理的小菜园，晾晒着洁白的床单，孩子们在城墙的阴影里嬉戏。曾经的战争屏障，如今化作了日常生活的背景墙。这种时空的折叠感，在西班牙其他地方很难如此集中地体验到。当你在圣玛丽亚教堂那混搭着穆德哈尔式木雕天花板的宁静 interior 里静坐片刻，再走到河边，看野鸭在城墙倒影中游弋，你会明白，布伊特拉戈最核心的魅力，就在于它将历史的厚重与生活的轻盈，奇迹般地融合在了这一池碧水与一圈坚石之间。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子刚转过一个弯，那片灰褐色的城墙就毫无预兆地撞进了视野。它不是孤零零的一座城堡，而是一整圈，完完整整、严丝合缝地环抱着一个错落着红瓦屋顶的小镇，像一位沉默而忠诚的古老巨人，将怀中的珍宝守护了千年。洛索亚河在城墙脚下拐了一个近乎完美的弯，将整座城温柔地揽在臂弯里，河水清澈见底，映着城墙、天空和云朵的倒影，分不清哪边才是真实的世界。那一瞬间，你仿佛不是从21世纪的马德里郊外驶来，而是不小心闯进了一幅中世纪的细密画里，空气都忽然变得沉静、古老了几分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`把车停在河对岸，走过那座有着七个拱洞的罗马式古桥，才算真正开始接近它。风从城垛间穿过，发出低沉呜咽般的声音，混合着河岸边的青草气息和古老石头被太阳晒过后散发出的、略带尘土味的干燥味道。穿过那道厚重的“阿尔科斯门”拱洞，光线骤然一暗，随即豁然开朗。里面完全是另一个世界。狭窄的鹅卵石街道，被岁月打磨得光滑温润，蜿蜒着向小城中心延伸。周末的上午，本地主妇们拎着篮子从面包房走出，老人们坐在广场长椅上晒太阳，闲聊声和咖啡馆里杯碟的轻碰声交织在一起，生活的气息扑面而来。这里没有大型旅游团的喧嚣，时间仿佛被调慢了速度，你能清晰地听到自己的脚步声，感受到这座水城在平稳地呼吸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，是那种无处不在的“守护”与“被守护”的感觉。你沿着内城墙的步道行走，手指拂过粗糙而冰凉的巨石，能想象到八百年前的士兵，也曾站在同样的位置，眺望着远方的山峦，警惕着可能的来敌。而城墙下，如今是居民们精心打理的小菜园，晾晒着洁白的床单，孩子们在城墙的阴影里嬉戏。曾经的战争屏障，如今化作了日常生活的背景墙。这种时空的折叠感，在西班牙其他地方很难如此集中地体验到。当你在圣玛丽亚教堂那混搭着穆德哈尔式木雕天花板的宁静 interior 里静坐片刻，再走到河边，看野鸭在城墙倒影中游弋，你会明白，布伊特拉戈最核心的魅力，就在于它将历史的厚重与生活的轻盈，奇迹般地融合在了这一池碧水与一圈坚石之间。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`布伊特拉戈德尔洛索亚`} />
                <InfoRow label="英文名称" value={`Buitrago del Lozoya`} />
                <InfoRow label="正式名称" value={`Buitrago del Lozoya`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`布伊特拉戈德尔洛索亚`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座被完整保存的防御城镇，是中世纪西班牙基督教与伊斯兰文明在边境线上对抗与交融的鲜活见证。`} />
                <InfoRow label="建筑特色" value={`其双重城墙体系，特别是宏伟的摩尔式内城墙，与清澈的洛索亚河共同构成了“城在水中央，水在城中流”的独特防御与生态格局。`} />
                <InfoRow label="建筑风格" value={`以坚固的军事防御建筑为主，混搭了穆德哈尔式、哥特式及文艺复兴式的民用与宗教建筑元素。`} />
                <InfoRow label="文化价值" value={`一个远离喧嚣的“时间胶囊”，不仅保存了中世纪的物理空间，更延续着一种宁静、紧密的社区生活节奏和浓厚的艺术收藏氛围（拥有重要的毕加索作品收藏）。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城全年全天可自由进入。城墙、城堡和博物馆有独立开放时间：城墙步道通常每日上午10点至下午6点开放，夏季可能延长至晚上8点；圣玛丽城堡（Castillo）开放时间为周二至周日上午10点至下午5点，周一闭馆；毕加索博物馆（Museo Picasso）开放时间为周二至周五上午11点至下午1点45分及下午4点至6点，周六日上午10点至下午2点及下午4点至7点，周一闭馆。所有景点在1月1日、1月6日、5月1日、12月24日、25日及31日关闭，部分宗教节日开放时间可能调整，建议行前查询官网。`} />
              <InfoRow label="门票价格" value={`进入古城本身免费。参观各景点需单独购票或购买联票：城墙步道门票约2欧元；圣玛丽城堡门票约2欧元；毕加索博物馆门票约2.5欧元。提供包含城墙、城堡和博物馆的联票，价格约为5欧元，非常划算。65岁以上长者、学生及12岁以下儿童享有折扣价或免费优惠，需出示有效证件。每月第一个周日部分景点免费开放。`} />
              <InfoRow label="地址" value={`Plaza de la Constitución, 1, 28730 Buitrago del Lozoya, Madrid, Spain`} />
              <InfoRow label="交通方式" value={`从马德里出发最为方便。自驾：从马德里市中心经A-1高速公路向北行驶约74公里，车程约1小时，古城外有免费公共停车场。公共交通：从马德里地铁“Plaza de Castilla”站的公交枢纽（Intercambiador）乘坐191路公交车，终点站即为布伊特拉戈德尔洛索亚，车程约1小时20分钟，班次在工作日较为频繁（约每小时一班），周末和节假日班次减少，建议提前在马德里公交公司官网查询时刻表并购买往返票。火车无法直达该镇。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲布伊特拉戈的故事，得从公元9世纪说起。那时，伊比利亚半岛的大部分地区还在摩尔人的统治之下，被称为“安达卢斯”。为了巩固对杜罗河以北新征服土地的控制，并防御北方基督教王国的反击，摩尔人开始在战略要地修筑一系列防御工事，布伊特拉戈就是其中之一。它的选址堪称军事工程学的典范：洛索亚河在这里形成一个天然的“U”形河曲，只需在缺口处修筑城墙，便能以最小的防御周长，获得三面环水的天险优势。最早的那道粗糙但坚固的城墙，就这样拔地而起，为这个定居点奠定了最初的轮廓和命运——它生来就是为防御而存在的堡垒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`收复失地运动的浪潮滚滚向前。11世纪末，卡斯蒂利亚国王阿方索六世率军南下，从摩尔人手中夺取了马德里和托莱多，布伊特拉戈也顺势纳入了基督教王国的版图，成为卡斯蒂利亚王国北部边境的重要前哨。但它的军事使命远未结束，反而进入了一个新的阶段。为了更好地防御依然强大的穆斯林王国，以及应对内部贵族间的纷争，基督教统治者们在原有的摩尔城墙之外，又增建了一道更外围的城墙，形成了罕见的中世纪双重城墙防御体系。内墙高大厚重，是最后的堡垒；外墙则圈住了更多的土地和民居，并在外侧挖掘了护城河（部分由河水引灌）。布伊特拉戈变成了一个“城堡中的小镇”，也迎来了它的黄金时代，成为连接塞哥维亚和瓜达拉哈拉商路的重要节点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`15世纪，小镇的命运与一个显赫的家族——门多萨家族紧密相连。当时，卡斯蒂利亚的“天主教双王”伊莎贝拉和费尔南多，为了酬谢著名诗人、政治家伊尼戈·洛佩斯·德·门多萨的忠诚与服务，将布伊特拉戈的领主权赐予了他。门多萨家族在此大兴土木，将原有的摩尔城堡改建、扩建成了我们今天看到的圣玛丽城堡。这座城堡并非传统的方形主塔式，而是采用了更为先进的多边形设计，配有七个宏伟的塔楼，其内部空间之奢华，一度成为宫廷文化和艺术活动的中心。正是在这一时期，小镇的许多民用建筑也沾染了文艺复兴的气息，尽管其骨子里仍保留着军事城镇的严谨布局。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的烽烟从未真正远离这片土地。19世纪初的半岛战争期间，拿破仑的军队席卷西班牙，布伊特拉戈因其战略位置而遭受了猛烈的攻击和占领，城堡和部分城墙受损严重。战火与时间的侵蚀，让这座昔日的要塞逐渐褪去光辉，一度陷入沉寂，沦为一个安静的农业小镇。直到20世纪，人们才开始重新认识到它无与伦比的历史价值。从20世纪中叶起，西班牙政府启动了对城墙、城堡和古桥的系统性修复工程。更具传奇色彩的是，当地一位名叫欧亨尼奥·阿里亚斯的理发师，因为与毕加索的深厚友谊，获赠了这位艺术大师的70多幅作品。他将这些珍贵遗产全部捐给了家乡，于是，在这个中世纪小镇的心脏——一座修复后的古老市政建筑里，诞生了一个令人惊叹的毕加索博物馆。这道新的“文化城墙”，让布伊特拉戈在历史厚重感之外，又增添了现代艺术的璀璨光芒，完成了从军事要塞到文化堡垒的华丽转身。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要完整体验布伊特拉戈的魔力，我强烈建议你留出一整天的时间，并尽量在周中前往以避开马德里本地人的周末出游潮。最理想的节奏是从容不迫的浸润式探索。建议早上9点左右从马德里出发，10点半前抵达。第一站先参观毕加索博物馆，此时人最少，你可以安静地品味那些与小镇古朴气质形成奇妙对话的现代艺术作品。然后，从博物馆所在的广场开始，沿着鹅卵石路漫步至城堡，感受空间的转换。午前阳光最好时，去走那一段精华的城墙步道，从高处俯瞰全城与河流构成的绝美画卷。午餐后在老城区的小巷里随意迷失，感受本地生活气息。下午晚些时候，一定要沿着河岸走一圈，从外部欣赏城墙的全貌，并在古桥上等待日落。这样的安排既涵盖了所有核心景点，又留足了发呆和感受的时间，让你能真正“住”进这座古城的故事里。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周末下午马德里本地游客会非常多，城墙步道会很拥挤，尽量在上午完成登墙游览。
小镇街道多为凹凸不平的鹅卵石路面，务必穿一双舒适耐磨的步行鞋，高跟鞋在这里是“灾难级”选择。
参观教堂和博物馆时请保持安静，当地居民非常珍视这些文化空间日常的宁静氛围。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在河北岸免费停车场后，先别急着进城，站在古罗马桥上远眺被完整城墙环绕的小镇全景，让第一印象深深印入脑海。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过阿尔科斯城门后右转，先去参观藏有70多幅毕加索真迹的社区博物馆，感受现代艺术杰作与中世纪石墙碰撞出的奇妙火花。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从博物馆出来，顺着舒缓的上坡路漫步到宏伟的圣玛丽城堡脚下，仰望那些依旧威严的塔楼，想象门多萨贵族在此生活的景象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要买票登上内城墙的步行道，从“城墙之眼”的视角漫步，看脚下的红瓦屋顶、远处的绵延青山与臂弯般的洛索亚河构成一幅流动的立体画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着城墙走到尽头下来，去寻访那座融合了穆德哈尔式木雕天花与哥特式拱肋的圣玛丽亚教堂，在静谧中倾听历史尘埃落定的声音。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午饭时间找一家主广场旁的露天餐馆，点一份烤羊肉或炖豆子，边吃边观察广场上如同小镇起居室般的日常场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后钻进那些迷宫般的狭窄小巷，不用看地图，任凭脚步带你发现一个开满鲜花的隐秘庭院或一家飘着咖啡香的老派酒吧。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在太阳西斜前，沿着河岸外围的生态步道完整地绕城走一圈，从每一个角度欣赏城墙在水中的倒影，最后回到古桥上看金色的夕阳为石墙披上最后一道光辉。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`古桥北端全景机位`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏光线柔和时，站在罗马桥的北端，用广角镜头将古桥、完整城墙轮廓与水中倒影一同纳入画面，构图力求对称与宁静。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城墙步道俯瞰机位`}</h4>
                  <p className="text-sm text-gray-700">{`上午十一点左右，阳光能均匀照亮城内屋顶时，在城墙步道东南段，将镜头对准城内层层叠叠的红瓦屋顶和教堂钟楼，营造出中世纪小镇的错落美感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`阿尔科斯门拱廊光影机位`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射时，站在城门内侧的拱廊下，拍摄行人穿过拱门时被拉长的身影与门外明亮街景形成的强烈明暗对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`河边仰拍城墙与城堡机位`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后，走到河对岸的草坪上，用长焦镜头拉近拍摄城墙某一段与后方城堡塔楼的叠加景象，突出其防御体系的立体与厚重。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`老城街景人文机位`}</h4>
                  <p className="text-sm text-gray-700">{`午后在卡尔德罗斯街等主要小巷，等待当地居民（特别是老人）经过时抓拍，将古朴的石墙、木门与鲜活的生活瞬间结合在一起。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄居民尤其是老人和儿童前，请务必先微笑示意并取得对方同意，当地人普遍友好，但礼貌至关重要。`}</li>
                <li>• {`城墙和古桥在日出后一小时和日落前一小时的光线最具戏剧性，能完美展现石头的质感和历史的沧桑。`}</li>
                <li>• {`若使用无人机，必须严格遵守西班牙和当地的空域法规，小镇中心及城墙上方通常禁止飞行，最好在远离民居的河岸开阔地带操作。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`镇内由百年石屋改造的家庭旅馆，房间虽小但一尘不染，女主人会为你准备丰盛的自家制早餐，晚上能听到广场传来的隐约吉他声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`住在由古老水车磨坊修复而成的精品酒店，房间保留了原始的木梁和石墙，窗外就是潺潺的洛索亚河水，入睡仿佛伴着历史的流水声。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车十分钟可达附近山间的乡间庄园酒店，占据山顶绝佳位置，拥有无边泳池和米其林推荐餐厅，在露台上即可将月光下的古城全貌与星空一并私享。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古城内的住宿选择非常有限且极受欢迎，务必提前数周甚至数月预订，尤其是在春季和秋季的周末。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇治安极好，夜晚非常宁静，但街道照明偏暗，散步时建议携带小手电。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果选择住在城外庄园，请确保有自驾车，因为夜间几乎没有公共交通返回镇上。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开布伊特拉戈的时候，我脑子里反复回响着一个词：“完整性”。在这个碎片化的时代，我们习惯了看到历史的残垣断壁，需要靠巨大的想象力去拼凑它曾经的模样。但在这里，你得到的是一种前所未有的、触手可及的完整。那一圈城墙，不仅完整地围住了空间，更仿佛围住了一段未曾中断的时间。走在其中，你不需要想象，你就在历史里。这种体验是震撼的，也是安宁的。它告诉你，有些东西，即使历经战火与遗忘，依然可以如此顽强、如此优美地存续下来，成为一代又一代人生活的背景、身份的记忆和心灵的慰藉。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了那些被过度包装、人潮汹涌的“必打卡”景点，如果你渴望一次真正能与时空对话的旅行，请一定把布伊特拉戈德尔洛索亚放进你的清单。它不只是马德里一个冷门的目的地，它是西班牙灵魂深处一个沉静而坚韧的注脚。在这里，你收获的将不止是美丽的照片，更是一种关于守护、关于延续、关于在湍急的历史长河中如何安然自处的深刻感悟。这圈城墙，这湾河水，会像一座心灵的堡垒，长久地留在你的记忆里。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/merida-roman-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅里达罗马遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mérida Roman Ruins</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/las-medulas-roman-gold-mine" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉斯梅杜拉斯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Las Médulas</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ronda-cliff-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    龙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">龙达悬崖小镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ronda</p>
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
