import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '圣乌尔萨纳Saint-Ursanne｜被杜河环抱的中世纪瑰宝，瑞士最隐秘的时间胶囊 - 最佳欧洲景点',
  description: '想象一下，你穿过一座古老的石桥，桥下是翡翠色、不急不缓流淌的杜河。过了桥，一堵高大的灰色石墙和一座带着尖顶钟楼的城门突然出现在眼前，仿佛一堵时间的墙，把21世纪的车马喧嚣彻底隔绝在外。这就是你走进圣乌尔萨纳的第一秒。空气立刻变了，闻起来是湿润的石头、古老的木材和从河边飘来的淡淡青苔味。声音也变了，你...',
}

export default function SaintUrsanneMedievalTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '瑞士', href: '/destinations/switzerland' },
            { label: '圣乌尔萨纳', href: '/attractions/saint-ursanne-medieval-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`圣乌尔萨纳・Saint-Ursanne・瑞士・圣乌尔萨纳镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下，你穿过一座古老的石桥，桥下是翡翠色、不急不缓流淌的杜河。过了桥，一堵高大的灰色石墙和一座带着尖顶钟楼的城门突然出现在眼前，仿佛一堵时间的墙，把21世纪的车马喧嚣彻底隔绝在外。这就是你走进圣乌尔萨纳的第一秒。空气立刻变了，闻起来是湿润的石头、古老的木材和从河边飘来的淡淡青苔味。声音也变了，你能听见自己的脚步声在狭窄的巷弄里回荡，远处传来教堂浑厚的钟鸣，还有某扇窗后飘出的收音机里法语节目的细碎声响。
你不像是在参观一个景点，而是不小心闯入了一本还在书写的中世纪生活日记。镇子太小了，小到十分钟就能从这头走到那头，但它的密度和完整度却惊人。每一栋歪歪扭扭的木筋墙房子都好像有自己的表情，彩色的百叶窗有些关着，有些半开，露出窗台上的天竺葵。当地人——我猜全镇可能只有几百人——平静地生活在这里。你会看到一位老奶奶提着篮子从面包店走出来，面包的焦香尾随了她一路；一个孩子骑着自行车飞快地掠过你身边，车铃叮叮当当消失在拐角；河边的垂钓者像雕塑一样一动不动。这里没有旅游纪念品商店的轰炸，只有一家真正的肉铺、一家飘着咖啡香的小餐馆，和一家摆着本地奶酪的杂货铺。时间在这里不是线性流逝的，而是像杜河的水一样，打着旋儿，缓慢地循环。
而这一切生活的中心，是那座高踞在山丘上的科莱吉亚尔教堂。你不需要地图，只要顺着最陡的那条石板路往上走，你的视线最终都会被它厚重的石墙和朴素的玫瑰窗所吸引。走近它，触摸那些被数百年风雨打磨得光滑温润的柱础，你会感受到一种迥异于科隆或米兰大教堂的威严。它的力量不在于令人眩晕的高度或繁复的雕刻，而在于一种磐石般的安定感和融入土地的谦卑。当阳光穿过高高的侧窗，在空旷的中殿地板上投下长长的光带，灰尘在光柱中起舞，那一刻的宁静是如此具象，几乎可以用手捧起来。
圣乌尔萨纳最打动人心的，正是这种“活着的遗迹”的状态。它没有被制成木乃伊供人瞻仰，也没有被过度商业化吞噬。它只是一个碰巧从13世纪一路走来，并且决定继续这样走下去的小镇。杜河像一条温柔的护城河，把它抱在怀里，也把它与世界的仓促隔开。在这里，你能体会到“隐居”这个词最美好的形态——不是与世隔绝的孤寂，而是在山川自然的庇护下，维持一种专注、内向、自给自足的生活节奏。这种节奏，正是我们这些现代旅人内心深处失却已久，并渴望重新寻回的珍宝。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下，你穿过一座古老的石桥，桥下是翡翠色、不急不缓流淌的杜河。过了桥，一堵高大的灰色石墙和一座带着尖顶钟楼的城门突然出现在眼前，仿佛一堵时间的墙，把21世纪的车马喧嚣彻底隔绝在外。这就是你走进圣乌尔萨纳的第一秒。空气立刻变了，闻起来是湿润的石头、古老的木材和从河边飘来的淡淡青苔味。声音也变了，你能听见自己的脚步声在狭窄的巷弄里回荡，远处传来教堂浑厚的钟鸣，还有某扇窗后飘出的收音机里法语节目的细碎声响。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你不像是在参观一个景点，而是不小心闯入了一本还在书写的中世纪生活日记。镇子太小了，小到十分钟就能从这头走到那头，但它的密度和完整度却惊人。每一栋歪歪扭扭的木筋墙房子都好像有自己的表情，彩色的百叶窗有些关着，有些半开，露出窗台上的天竺葵。当地人——我猜全镇可能只有几百人——平静地生活在这里。你会看到一位老奶奶提着篮子从面包店走出来，面包的焦香尾随了她一路；一个孩子骑着自行车飞快地掠过你身边，车铃叮叮当当消失在拐角；河边的垂钓者像雕塑一样一动不动。这里没有旅游纪念品商店的轰炸，只有一家真正的肉铺、一家飘着咖啡香的小餐馆，和一家摆着本地奶酪的杂货铺。时间在这里不是线性流逝的，而是像杜河的水一样，打着旋儿，缓慢地循环。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而这一切生活的中心，是那座高踞在山丘上的科莱吉亚尔教堂。你不需要地图，只要顺着最陡的那条石板路往上走，你的视线最终都会被它厚重的石墙和朴素的玫瑰窗所吸引。走近它，触摸那些被数百年风雨打磨得光滑温润的柱础，你会感受到一种迥异于科隆或米兰大教堂的威严。它的力量不在于令人眩晕的高度或繁复的雕刻，而在于一种磐石般的安定感和融入土地的谦卑。当阳光穿过高高的侧窗，在空旷的中殿地板上投下长长的光带，灰尘在光柱中起舞，那一刻的宁静是如此具象，几乎可以用手捧起来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`圣乌尔萨纳最打动人心的，正是这种“活着的遗迹”的状态。它没有被制成木乃伊供人瞻仰，也没有被过度商业化吞噬。它只是一个碰巧从13世纪一路走来，并且决定继续这样走下去的小镇。杜河像一条温柔的护城河，把它抱在怀里，也把它与世界的仓促隔开。在这里，你能体会到“隐居”这个词最美好的形态——不是与世隔绝的孤寂，而是在山川自然的庇护下，维持一种专注、内向、自给自足的生活节奏。这种节奏，正是我们这些现代旅人内心深处失却已久，并渴望重新寻回的珍宝。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`圣乌尔萨纳`} />
                <InfoRow label="英文名称" value={`Saint-Ursanne`} />
                <InfoRow label="正式名称" value={`Saint-Ursanne`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`圣乌尔萨纳镇`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座保存近乎完好的中世纪古镇，是阿尔卑斯山以北罕见的神圣罗马帝国时期教会城镇的鲜活标本，其历史核心自13世纪以来基本未变。`} />
                <InfoRow label="建筑特色" value={`古镇被一道蜿蜒的杜河（Doubs）紧紧环抱，依山而建的房屋簇拥着山顶的修道院，整体布局宛如一个天然的露天博物馆，融合了防御工事、宗教建筑与民居的和谐共生。`} />
                <InfoRow label="建筑风格" value={`以罗马式与哥特式风格为主，科莱吉亚尔教堂是瑞士最重要的晚期罗马式建筑之一，而镇内木筋墙房屋则展现了质朴的瑞士乡村民居风格。`} />
                <InfoRow label="文化价值" value={`它代表了中世纪教会权力、地方自治与自然环境之间达成的一种脆弱而持久的平衡，是理解瑞士法语区（罗曼地）独特文化与历史认同的关键窗口。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`圣乌尔萨纳老城街道及城墙区域全天24小时开放。核心景点科莱吉亚尔教堂（修道院教堂）开放时间通常为每日上午9点至下午6点，冬季（11月至次年3月）可能缩短至下午5点关闭。教堂珍宝室与回廊的开放时间与教堂主体基本一致，但中午12点至下午2点可能关闭休息。小镇上的小型历史博物馆开放时间较为弹性，一般为夏季周末的下午1点至5点。所有室内景点在重要宗教节日（如圣诞节、复活节）当天上午通常不对外开放，建议行前查阅当地旅游局官网确认。`} />
              <InfoRow label="门票价格" value={`进入圣乌尔萨纳古镇本身完全免费。参观科莱吉亚尔教堂及回廊免费，但欢迎自愿捐款以支持维护。教堂内的珍宝室或特殊展览偶尔会收取小额门票，约5-8瑞士法郎。小镇历史博物馆门票约3-5瑞士法郎。没有任何强制门票，整个体验的核心在于漫步，无需过多花费。`} />
              <InfoRow label="地址" value={`Rue du 23-Juin 2, 2882 Saint-Ursanne, Switzerland`} />
              <InfoRow label="交通方式" value={`圣乌尔萨纳位于瑞士西北的汝拉山区，公共交通是抵达这里最浪漫的方式。从国际枢纽出发，首先抵达瑞士巴塞尔（Basel）机场或法国米卢斯（Mulhouse）机场。从巴塞尔SBB火车站乘坐区间火车前往德莱蒙（Delémont），车程约50分钟，班次每小时1-2班。在德莱蒙换乘前往波朗特吕（Porrentruy）的窄轨登山火车（“汝拉山线”），这是一段风景如画的旅程，约25分钟后在圣乌尔萨纳站下车。火车站小巧得像玩具，出站后过桥步行10分钟即达古城门。自驾者可从巴塞尔经A16高速公路前往，车程约1小时，小镇外围有免费停车场，切记不可将车驶入古镇狭窄的石板路。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`圣乌尔萨纳的故事，始于一个美丽的传说，也始于一条河。相传在7世纪，一位名叫圣乌尔苏拉的爱尔兰公主（与科隆那位著名的圣乌尔苏拉并非一人）在朝圣途中途经此地，被杜河的宁静与周围山林的美景深深吸引，决定在此隐居修行。她带来的不仅是信仰，还有知识。渐渐地，追随她的修士们在此建立了一座小修道院，这个藏在深山河谷中的据点，成为了早期基督教在汝拉地区传播的一盏孤灯。河边的泉水被尊为圣泉，据说有治愈之力，这吸引了最初的定居者。传说虽不可尽信，但它为这个地方奠定了神圣与隐居的基调，它的名字“圣乌尔萨纳”也因此而来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的腾飞要到11至12世纪。随着神圣罗马帝国势力的巩固和穿越汝拉山区的贸易路线略显活跃，这个小修道院的地位被提升为“科莱吉亚尔”，即设有教士会的教堂，意味着它拥有了更大的宗教和世俗管理权。聪明的教士和当地领主看中了这里的地理优势：杜河在此形成一个几乎闭环的弯曲，构成了天然的防御屏障。于是，他们以教堂为核心，沿着山坡修建围墙和房屋，一个典型的教会城镇雏形初现。石头取代了木材，罗马式建筑的厚重拱券和狭窗定义了它的性格。这座小镇成了周边广袤森林和牧场的精神与行政中心，教士们不仅管理灵魂，也管理着土地、磨坊和税收。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`中世纪盛期到晚期，圣乌尔萨纳迎来了它的黄金时代。14世纪，一场大火摧毁了部分早期建筑，但重建却带来了新的风格。哥特式的轻盈元素开始渗透，教堂的窗户被扩大，内部增添了肋拱穹顶。小镇的防御体系被加强，建起了我们今天看到的雄伟城门和部分城墙。镇内的房屋越建越密，那些迷人的木筋墙结构大多源于这个时期。它成了一个小而富庶的独立世界，拥有自己的市场、法庭和行业公会。关于这段时期，本地还流传着一个浪漫又哀伤的鬼故事：据说一位痴情的女裁缝，在等待奔赴战场的爱人归来时，夜夜在城墙边徘徊，最终化为幽灵。至今，有些老人还说在雾夜里能听到她轻柔的叹息。历史与传说交织，让石头有了温度。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，时代的洪流终究席卷了这片宁静河谷。16世纪的宗教改革风暴撼动了整个欧洲，圣乌尔萨纳所在的地区陷入了天主教与新教的激烈争夺。尽管它最终保留了天主教信仰，但其政治影响力已大不如前。更大的转折发生在18世纪末的法国大革命和随后的拿破仑战争。1793年，法国军队入侵，教士会被解散，圣乌尔萨纳失去了它作为教会领地的独立地位，被并入新成立的赫尔维蒂共和国，随后成为伯尔尼州的一部分，最终归于汝拉州。宗教权力褪去，它变回了一个普通的、偏远的山村。或许正是这种“被遗忘”，成了它最大的幸运。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`19世纪和20世纪，当欧洲许多古城为了现代化而拆毁城墙、拓宽街道时，圣乌尔萨纳因为地处偏僻、经济停滞，反而完美地躲过了改造。工业革命的铁路线从不远处的山谷穿过，却并未打扰它的清梦。它像一颗被无意中封存在琥珀里的昆虫，完整保存了中世纪的空间肌理和建筑风貌。直到旅游业在20世纪后期慢慢兴起，人们才重新发现了这颗遗珠。但即便今天，它也没有选择变成纯粹的博物馆。居民们依然住在祖传的老屋里，维护着古老的传统。每年的古典音乐节让古老的教堂回荡起巴赫和莫扎特，这仿佛是历史的一种优雅回响——它从未真正死去，只是在以另一种方式，继续它的呼吸。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要彻底品味圣乌尔萨纳，你需要准备几乎一整天的时间，并奉上漫步的耐心。最佳的抵达时间是清晨九点之前，这时旅行团还未到来，阳光刚刚洒满杜河河面，古镇正在苏醒，你能独占那份宁静。建议整体耗时5-6小时，节奏务必放慢，因为这里的魅力在于细节和氛围，而非打卡点数。上午精力充沛时，先攀登至最高点的修道院教堂，俯瞰全镇，建立空间感；随后在迷宫般的小巷中随意迷失，感受日常生活气息；午后沿着杜河漫步，从外部欣赏小镇如画的全景，最后在河边找张长椅发呆，或钻进一家小馆子品尝本地奶酪火锅，为旅程画上圆满句号。记住，在这里，“浪费”时间才是对时间最大的尊重。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`古镇内几乎所有街道都是凹凸不平的石板路，请务必穿一双舒适防滑的鞋子，高跟鞋在这里是真正的“灾难”。
小镇非常安静，居民注重隐私，拍照时请尽量避免对准居民窗户或私人庭院内部，尊重他们的生活空间。
当地餐馆和小店营业时间非常“瑞士”，可能下午1点至5点间歇业，且周日大部分不营业，计划用餐时间需提前留意。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过古老的圣约翰石桥，在桥中央停留片刻，感受杜河从脚下流过并环抱小镇的独特地理格局`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从低矮厚重的“钟楼门”进入古镇，立刻右转钻进第一条窄巷，让眼睛适应由高墙和石板路构成的、光影斑驳的通道世界`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着最陡峭的“教堂路”向上攀登，途中触摸那些温润的木筋墙和生锈的铁艺招牌，直到豁然开朗站在科莱吉亚尔教堂前的广场上`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花至少半小时沉浸在教堂内部，仰望罗马式穹顶，寻找柱子上的古老石刻，并一定要踏入回廊，感受那个被拱廊围合、只听得到鸟鸣与风声的方形庭院`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂后方的小路下山，刻意选择那些没有路标的小巷，你会经过堆满木柴的后院、开着鲜花的私人花园和仿佛从未改变的老工匠作坊`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到通往河边的小径，走出城门，沿着杜河畔的步道向上游或下游散步，从对岸或侧面的角度，用全景视野将城堡、教堂和民居叠成的阶梯状天际线收入眼底`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在河边的“老磨坊”餐厅或镇中心广场旁的“钟楼咖啡馆”坐下，点一杯汝拉本地的白葡萄酒或热咖啡，静静观察小镇缓慢流淌的日常`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果还有余力，沿着镇子外围残留的古城墙走一段，想象中世纪哨兵巡逻的视角，并在某个缺口处再次俯瞰翡翠色的杜河河谷`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`杜河对岸全景侧拍点`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，阳光西斜时，从圣约翰桥下游约100米处的河边步道回望，能将石桥、城墙、层层叠叠的屋顶和教堂钟楼一同纳入镜框，河水作为前景，色彩层次最丰富`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`科莱吉亚尔教堂回廊拱门框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点后，阳光洒入回廊时，站在回廊一角，透过一连串罗马式拱门拍摄对面廊柱的光影，形成强烈的纵深感和明暗对比，人物剪影置于其中效果绝佳`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“教堂路”阶梯仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚光线柔和时，从这条陡峭石板路的中段向上拍摄，利用蜿蜒上升的石阶作为引导线，终点聚焦在道路尽头的教堂大门上，两侧古老的房屋墙壁形成天然画框`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`古镇城门内部窥视视角`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，当城门洞内的明暗对比最强时，从门洞内向城门外拍摄，将门外杜河的绿意和石桥作为背景，捕捉一个行人或单车穿过门洞的瞬间，故事感十足`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`河边垂柳与倒影`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，在杜河转弯处平静的水面附近，以低角度拍摄古镇建筑在水中的完美倒影，加上几缕垂柳作为前景，营造出静谧如诗的油画质感`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`汝拉山区天气多变，晨雾是这里的一大特色，如果遇到薄雾天气，千万不要失望，这正是拍摄圣乌尔萨纳水墨画般意境的大好时机。`}</li>
                <li>• {`小镇灯光设计非常克制，夜晚几乎没有景观照明，想要拍摄夜景星空下的教堂轮廓，需准备稳固的三脚架和高感光度性能好的相机。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河边历史老屋民宿`}</h4>
                  <p className="text-sm text-blue-800">{`直接住在杜河畔一栋有400年历史的木筋墙房子里，木头地板会吱呀作响，推开窗就能听到潺潺水声，房东太太会为你准备用本地牛奶做的丰盛早餐`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`镇中心家庭式小旅馆`}</h4>
                  <p className="text-sm text-green-800">{`由世居于此的家庭经营，只有五六间房，装饰朴实温馨，最大的优点是位置核心，晚上等游客散尽后，你就能独享月光下空无一人的中世纪广场`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`隐居山腰的度假屋`}</h4>
                  <p className="text-sm text-yellow-800">{`位于小镇上方步行约15分钟的山坡上，拥有俯瞰整个古镇和杜河湾的无敌全景露台，适合想要绝对宁静、并与自然更亲近的旅人，夜晚星空璀璨`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`附近农庄体验住宿`}</h4>
                  <p className="text-sm text-purple-800">{`如果你自驾，可以选择古镇外围3-5公里处的传统汝拉农庄，住进石头砌成的谷仓改建的客房，清晨在奶牛铃铛声中醒来，体验更地道的乡村生活`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`圣乌尔萨纳的住宿数量极其有限，尤其是在夏季音乐节期间，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇治安极好，但入夜后街道几乎没有路灯，自备一个小手电筒会让晚归的漫步更安心、也更有情调。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开圣乌尔萨纳很久以后，我发现自己最常回忆起的，不是某个具体的建筑细节，而是一种综合的、弥漫在空气中的“感觉”。那是石头吸收了一天阳光后在傍晚散发出的余温，是杜河水永不疲倦的潺潺低语，是面包房定时飘出的、让人心安的味道，是钟声敲响时在群山间悠长的回音。这个地方教会我的，不是宏大的历史叙事，而是一种“微小而完整”的生存哲学。它像一个精致的生态球，在时间的河流中独自旋转，自给自足，保持着内在的节奏与和谐。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个崇尚效率、追求网红同款、旅行也变得匆忙打卡的时代，圣乌尔萨纳的存在本身就是一个温柔的叛逆。它不迎合，不喧嚣，只是静静地在那里，按照千百年来的样子呼吸。它提醒着我们，真正的深度旅行，不是收集地图上的坐标，而是让自己沉浸在一个地方的气场里，让它的节奏缓慢地渗透你，暂时忘记外界的纷扰。来这里，不是为了看什么“世界之最”，而是为了验证一种可能性：一种与自然共生、与历史共眠、从容不迫的生活是否依然存在。答案是肯定的，它就在瑞士的这条隐秘河谷里，完好如初。每一位厌倦了浮光掠影、渴望在旅途中找到内心宁静的旅人，都应该把圣乌尔萨纳列入清单。它不是终点，而是一个让灵魂得以短暂停泊、重新校准的港湾。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/sion-twin-hills" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡永古城与双丘</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sion and its Twin Hills</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chur" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    库
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">库尔（瑞士最古老城市）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Chur</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/appenzell-traditional-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿彭策尔传统村落</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Appenzell</p>
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
