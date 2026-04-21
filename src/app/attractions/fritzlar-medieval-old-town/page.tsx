import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '弗里茨拉尔中世纪古城 Fritzlar｜踏入千年时光胶囊，邂逅一座活着的木筋房博物馆 - 最佳欧洲景点',
  description: '火车缓缓停靠，当我走出小小的弗里茨拉尔车站，沿着一条缓坡向上走时，第一眼看到的并不是某座地标，而是一整片错落有致的红色、黄色和棕色屋顶，像一床温暖的拼布被子，被一条灰绿色的、长满苔藓的古老石墙温柔地拥抱着。空气中有一股特别的清新，混合着雨后石板路的湿气、从某户人家花园飘来的玫瑰香，还有一丝若有若无的...',
}

export default function FritzlarMedievalOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '德国', href: '/destinations/germany' },
            { label: '弗里茨拉尔中世纪古城', href: '/attractions/fritzlar-medieval-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`弗里茨拉尔中世纪古城・Fritzlar・德国・弗里茨拉尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`火车缓缓停靠，当我走出小小的弗里茨拉尔车站，沿着一条缓坡向上走时，第一眼看到的并不是某座地标，而是一整片错落有致的红色、黄色和棕色屋顶，像一床温暖的拼布被子，被一条灰绿色的、长满苔藓的古老石墙温柔地拥抱着。空气中有一股特别的清新，混合着雨后石板路的湿气、从某户人家花园飘来的玫瑰香，还有一丝若有若无的、木头与岁月交织的沉稳气味。那一刻，时光的流速仿佛自动调慢了。
穿过古老的城门——那厚重的橡木门上还留着铁箍的印记——我正式踏入了另一个时空。脚下是已经被无数脚步磨得光滑甚至微微凹陷的鹅卵石路，鞋跟敲击在上面，发出清脆又孤独的回响，与远处教堂浑厚的钟声交织。街道异常狭窄，两旁倾斜的木筋房几乎要亲吻到一起，它们的每一根深色木梁都像老人手背的筋络，诉说着承重与坚持的故事；填充其间的白色、粉色或淡黄色的泥灰墙，则在午后阳光下泛着柔和的光。窗台上无一例外地摆满了天竺葵，那热烈的红色与粉色，是居民们为这幅历史画卷添上的、永不褪色的生机。
这座古城最打动我的，是它“活着”的状态。这里不仅仅是观光地，更是当地人生活的地方。在中央市场广场，我看到穿着现代服装的居民，拎着购物篮，在有着600年历史的市政厅楼下的面包店前排着队，自然地聊着天。孩子们踩着滑板车，笑着从一座13世纪的防御塔楼边飞驰而过。历史在这里不是被隔离的展品，而是日常生活的背景墙和地基。那种跨越世纪却依然稳固的社区感，那种在千年遗迹中自如穿行的生活气息，让这座古城充满了温暖的“人味儿”。
而当你静下心来，你会发现每一个细节都在低语。一扇门楣上刻着船匠的标记，诉说着主人家的古老职业；一个转角处的小喷泉，几个世纪以来一直是邻居们打水闲聊的社交中心；甚至那些木筋墙上看似随意的雕刻——太阳、葡萄、卷曲的花纹——都是中世纪工匠对美与祝福的朴素表达。弗里茨拉尔不需要你去费力“解读”历史，它邀请你沉浸其中，用脚步丈量，用呼吸感受，让你成为它漫长故事里一个柔和而真实的注脚。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`火车缓缓停靠，当我走出小小的弗里茨拉尔车站，沿着一条缓坡向上走时，第一眼看到的并不是某座地标，而是一整片错落有致的红色、黄色和棕色屋顶，像一床温暖的拼布被子，被一条灰绿色的、长满苔藓的古老石墙温柔地拥抱着。空气中有一股特别的清新，混合着雨后石板路的湿气、从某户人家花园飘来的玫瑰香，还有一丝若有若无的、木头与岁月交织的沉稳气味。那一刻，时光的流速仿佛自动调慢了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过古老的城门——那厚重的橡木门上还留着铁箍的印记——我正式踏入了另一个时空。脚下是已经被无数脚步磨得光滑甚至微微凹陷的鹅卵石路，鞋跟敲击在上面，发出清脆又孤独的回响，与远处教堂浑厚的钟声交织。街道异常狭窄，两旁倾斜的木筋房几乎要亲吻到一起，它们的每一根深色木梁都像老人手背的筋络，诉说着承重与坚持的故事；填充其间的白色、粉色或淡黄色的泥灰墙，则在午后阳光下泛着柔和的光。窗台上无一例外地摆满了天竺葵，那热烈的红色与粉色，是居民们为这幅历史画卷添上的、永不褪色的生机。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座古城最打动我的，是它“活着”的状态。这里不仅仅是观光地，更是当地人生活的地方。在中央市场广场，我看到穿着现代服装的居民，拎着购物篮，在有着600年历史的市政厅楼下的面包店前排着队，自然地聊着天。孩子们踩着滑板车，笑着从一座13世纪的防御塔楼边飞驰而过。历史在这里不是被隔离的展品，而是日常生活的背景墙和地基。那种跨越世纪却依然稳固的社区感，那种在千年遗迹中自如穿行的生活气息，让这座古城充满了温暖的“人味儿”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而当你静下心来，你会发现每一个细节都在低语。一扇门楣上刻着船匠的标记，诉说着主人家的古老职业；一个转角处的小喷泉，几个世纪以来一直是邻居们打水闲聊的社交中心；甚至那些木筋墙上看似随意的雕刻——太阳、葡萄、卷曲的花纹——都是中世纪工匠对美与祝福的朴素表达。弗里茨拉尔不需要你去费力“解读”历史，它邀请你沉浸其中，用脚步丈量，用呼吸感受，让你成为它漫长故事里一个柔和而真实的注脚。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`弗里茨拉尔中世纪古城`} />
                <InfoRow label="英文名称" value={`Fritzlar`} />
                <InfoRow label="正式名称" value={`Fritzlar`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`弗里茨拉尔`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座被近两公里完整城墙环绕的古城，是德国中世纪城市风貌保存最完好的典范之一，被誉为“黑森州的珍宝箱”。`} />
                <InfoRow label="建筑特色" value={`密集、华丽且色彩缤纷的木筋结构房屋构成了城市的主体，与宏伟的罗马式大教堂和坚固的防御塔楼形成绝妙对话。`} />
                <InfoRow label="建筑风格" value={`以中世纪晚期至文艺复兴时期的木筋房建筑风格为主，核心的圣彼得大教堂则是恢宏的罗马式风格，带有后期哥特式元素的增添。`} />
                <InfoRow label="文化价值" value={`它是一座仍在呼吸的“活态”历史博物馆，不仅展示建筑，更延续着自中世纪传承下来的市集传统、节庆与社区生活。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城公共区域全天开放。城内主要景点如弗里茨拉尔大教堂及珍宝馆开放时间通常为：夏季（4月至10月）周一至周六10:00-17:00，周日及节假日12:00-17:00；冬季（11月至3月）时间缩短，通常为周二至周六10:00-16:00，周日12:00-16:00，周一闭馆。市政厅等建筑内部参观需参加导览团，一般在周末或特定日期开放。建议出行前务必查询官网确认，节假日安排可能有变。`} />
              <InfoRow label="门票价格" value={`进入古城本身免费。大教堂及珍宝馆联合门票成人约5欧元，优惠票约3欧元。市政厅导览团费用约每人4-6欧元。当地旅游局组织的主题徒步导览（德语/英语）约每人8-10欧元，时长1.5-2小时。`} />
              <InfoRow label="地址" value={`Marktplatz 1, 34560 Fritzlar, Germany`} />
              <InfoRow label="交通方式" value={`从法兰克福国际机场出发是最佳选择。在机场火车站乘坐区域快车（RE或RB）前往卡塞尔（Kassel）方向，在卡塞尔-威廉山站（Kassel-Wilhelmshöhe）换乘。换乘前往弗里茨拉尔的区域列车（如RB38线），全程约2小时。从卡塞尔主站也有直达弗里茨拉尔的列车，车程约50分钟。班次频率约为每小时1-2班。建议购买黑森州一日票（Hessenticket），适用于最多5人团体，全天无限次乘坐州内所有区域性交通工具，非常划算。从弗里茨拉尔火车站步行至古城中心仅需10分钟。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起弗里茨拉尔的故事，必须从一棵橡树和一个决心改变欧洲信仰版图的人讲起。公元723年，那位被称为“日耳曼使徒”的圣卜尼法斯，来到了当时还是法兰克王国边境的这片土地。传说中，他就在弗里茨拉尔附近砍倒了一棵被视为日耳曼神明托尔圣物的古老橡树，以此展示基督教的力量胜过异教信仰。就在这棵橡树的原址上，他用其木材建造了这里第一座小教堂。这个充满象征意义的举动，不仅为弗里茨拉尔播下了信仰的种子，也使其从一开始就站在了欧洲基督教化历史浪潮的中心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`随着信仰的扎根，政治与军事力量也随之而来。到了查理曼大帝的时代，弗里茨拉尔因其战略位置变得愈发重要。为了巩固帝国东部边境，抵御萨克森人等部落，一座坚固的王权城堡（Königspfalz）在此建立。这座城堡不仅是军事要塞，更是国王巡行帝国时驻跸的行政中心。你可以想象，在那个时代，查理曼大帝和他的随从们可能曾在这里处理国事，决定帝国的命运。城堡的建立吸引了工匠、商人和神职人员，一个繁荣的定居点围绕着教堂和城堡逐渐成形，城市最初的骨架就此奠定。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的城市黄金时代，是在中世纪盛期和晚期。弗里茨拉尔幸运地成为了美因茨大主教的直辖领地，获得了大量特权和财富。1230年左右，那座今天我们看到的、令人惊叹的完整城墙系统开始修建。近两公里长，带着24座塔楼和坚固的城门，它不仅是防御工事，更是城市独立与繁荣的宣言。城内的空间被精心规划，市场和主要街道布局至今未变。富有的商人和行会纷纷建造华丽的木筋房，他们竞相用更复杂的木架图案、更鲜艳的色彩和更精美的雕刻来展示自己的财富与地位。漫步今日街头，那些写着“1542”、“1587”年份的房子，正是那个自信而繁荣时代的无声见证者。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当然，历史的道路从不平坦。17世纪那场席卷欧洲的三十年战争，给弗里茨拉尔带来了深重创伤。这座城市因其坚固的城墙和主教辖地的身份，成为各方势力反复争夺的战略要地。它曾被围困、被炮击、被占领。战火一度几乎将城市摧毁，人口锐减，经济凋敝。然而，也正是这场灾难，在某种程度上“冻结”了城市的发展。战后，由于资源匮乏，人们无力进行大规模的新建或改造，只能小心翼翼地修复那些幸存下来的老房子。这个不幸中的万幸，使得弗里茨拉尔的中世纪风貌得以原汁原味地保存下来，没有像许多其他城市那样被后来的巴洛克或现代建筑浪潮所覆盖。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进19世纪，当工业革命的汽笛在德国其他地方轰鸣时，弗里茨拉尔仿佛一位安静的隐士，依然保持着它的步调。铁路通了，但它没有催生出巨大的工厂区；战争再次来临（两次世界大战），它虽也遭波及，但核心的历史肌理奇迹般地逃过了灭顶之灾。战后，一种强烈的历史保护意识在市民中觉醒。他们意识到，自己守护的不是一堆旧房子，而是一笔无价的文化遗产。系统的修复工作开始了，但原则是“修旧如旧”，绝不破坏整体的历史语境。正是这份持续了几个世纪的、由战争造成的“停滞”和战后有意识的“守护”，共同为我们今天看到的这座近乎完美的中世纪古城，扣上了最后一环，也是最关键的一环。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味弗里茨拉尔，我强烈建议你安排一整天的时间，并抱着“漫游者”而非“打卡者”的心态。最佳的抵达时间是上午九点左右，这时旅游团还未涌入，阳光正温柔地洒在木筋房的立面上，小城在居民日常生活的窸窣声中刚刚苏醒。整体游览节奏宜慢不宜快，核心是穿行、凝视和感受。上午可以专注于主要地标和建筑，下午则留给小巷探索和沉浸式体验。傍晚时分，当游人散去，夕阳为古城墙镀上金边，那是古城最宁静、也最魔幻的时刻。这样的安排能让你体验到从清晨的静谧到日间的鲜活，再到黄昏的深邃，一个完整的、富有韵律的古城日与夜。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周六上午广场有每周市集，非常热闹且富有生活气息，但此时主干道会比较拥挤，拍照需更多耐心。穿着绝对舒适的平底鞋，那些美丽的鹅卵石路对高跟鞋和薄底鞋极不友好。大部分小店和餐厅中午有休息时间（约14:00-17:00），规划购物和用餐时请注意。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从最壮观的格雷文门（Gräventor）进入古城，用手触摸那冰凉的砂岩门拱，仰头看看上方仍可活动的闸门槽，想象自己是一名中世纪晚归的商人。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直前往心脏地带——市政厅市场广场（Rathausmarkt），站在喷泉边，顺时针缓缓转一圈，让四周色彩斑斓、倾斜交错的木筋房像万花筒一样映入眼帘。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进广场北侧宏伟的圣彼得大教堂（St. Petersdom），让眼睛适应内部的幽暗，然后寻找那尊著名的“弗里茨拉尔麦当娜”木雕，感受其静谧慈悲的力量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂侧门出来，沿着“牧师巷”（Pfaffengasse）这样的狭窄小巷随意漫步，故意“迷失”方向，观察每家每户窗台的花草、门环的形状和木梁上隐秘的雕刻符号。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着清晰的路标走上完整的城墙步道（Stadtmauer-Rundweg），从不同高度和角度俯瞰红屋顶的海洋，并在“屠夫塔”（Metzgerturm）等塔楼处停留，读一读说明牌上生动的历史片段。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走下城墙，去“老酿酒厂”（Alte Brauhaus）或广场旁的某家咖啡馆坐下，点一杯当地的苹果酒（Apfelwein）或咖啡，就这么看着广场上的人来人往，让之前的视觉震撼慢慢沉淀。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果还有精力，一定要在日落前登上古城西北角的“哈布斯堡”（Habichtsburg）遗址小山丘，这里是拍摄古城全景和城墙轮廓线的绝佳位置，看夕阳如何点燃一整片屋顶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐就在老城内找一家有庭院或靠窗位置的餐厅，品尝黑森州风味的烤猪肉配酸菜，结束这完美的一天。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`格雷文门内侧仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在门洞内，用广角镜头向外拍摄，将古老的城门框和门洞外沐浴在金光中的木筋房街道一同收纳，构图极具纵深感和故事性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`市政厅广场东南角全景`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点后光线最佳，利用广场喷泉作为前景，拍摄以市政厅和背后层层叠叠木筋房为背景的全景，等待一两个行人或飞过的鸽子为画面注入生机。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“屠夫塔”旁的城墙拐角`}</h4>
                  <p className="text-sm text-gray-700">{`下午太阳西斜时，从这里可以拍摄到一段锯齿状城墙与紧贴其建造的彩色木筋房的经典合影，坚硬的石头与柔和的民居形成质感对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣凯瑟琳教堂尖塔视角`}</h4>
                  <p className="text-sm text-gray-700">{`如果你有机会参加登塔导览（通常周末开放），从这座教堂的塔楼可以拍到圣彼得大教堂雄踞古城中心、被一片红色屋顶海浪包围的、最具标志性的上帝视角全景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`埃德尔河畔的倒影`}</h4>
                  <p className="text-sm text-gray-700">{`在古城东侧的安静河岸，晴朗无风的清晨，可以拍摄古城墙、塔楼和树木在平静河水中完美对称的倒影，画面宁静如油画。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄私人住宅的木筋房立面时，请保持尊重，尽量避免将镜头直接对准居民家的窗户内部。利用雨后湿润的鹅卵石路面反射的天光和街灯光晕，能拍出极具氛围感的夜景。冬季如果幸运遇到薄雪覆盖屋顶，那将是拍摄童话场景的绝佳时机，但要注意防滑。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`古城中心的时光胶囊`}</h4>
                  <p className="text-sm text-blue-800">{`下榻就在市政厅广场旁的百年老店“金鹰酒店”，推开木格窗就是连绵的木筋房山墙，夜晚能听到教堂的报时钟声，位置无可挑剔。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`田园诗般的城墙外生活`}</h4>
                  <p className="text-sm text-green-800">{`住在紧挨着古城墙、由古老水磨坊改造的精品民宿，房间保留着原始的木梁结构，窗外是潺潺溪流和绿色草坡，安静得像世外桃源。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`家庭经营的温馨之选`}</h4>
                  <p className="text-sm text-yellow-800">{`选择古城安静一隅由家族世代经营的家庭旅馆，早餐是女主人自制的果酱和新鲜烘焙的面包，能获得最地道的本地生活建议和家庭般的温暖。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计感的历史对话`}</h4>
                  <p className="text-sm text-purple-800">{`如果想体验现代舒适与古老元素的结合，可以选择古城边缘一栋经过建筑师精心改造的文艺复兴风格宅邸，内部是极简设计，但抬眼就能看到裸露的、有数百年历史的木筋墙。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古城内酒店停车位极为有限，通常需要提前预订并支付额外费用，自驾者最好选择提供停车位的城外住宿。夏季和圣诞市场期间是绝对旺季，务必提前数月预订。弗里茨拉尔治安极好，夜晚独自在古城内漫步也倍感安全，可以尽情享受夜色中的静谧。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开弗里茨拉尔好些天了，但我的思绪还常常溜回那些弯弯曲曲的小巷。它留给我的，不仅仅是一张张明信片般的风景照片，更是一种关于时间与存在的、沉静而有力的感受。在这个一切追求崭新、快速和高效的时代，弗里茨拉尔的存在本身就是一个温柔的“反叛”。它不急于证明什么，也不刻意迎合谁，只是静静地、完整地存在着，像一个从容的长者，告诉你：看，生活可以有一种更缓慢、更扎根、更连续的模样。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你也厌倦了浮光掠影的打卡，渴望一场能真正浸润心灵的旅行，请一定把弗里茨拉尔放入你的清单。它不是一个用“壮观”或“奢华”来形容的地方，它的魅力在于“完整”与“真实”。来到这里，你不仅是参观一个景点，更是受邀进入一段依然在呼吸的绵长时光。你会触摸到历史的体温，看到传统如何在日常中鲜活地延续，并最终明白，最深度的旅行，或许就是找到这样一个地方，它能让你安静下来，听到自己内心的回响，也听到岁月在石缝与木纹中，留下的悠长叹息与微笑。这，便是弗里茨拉尔馈赠给每一位有心旅人的、无价的礼物。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/norcia-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    诺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">诺奇古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Norcia</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/dinan-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迪南老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dinan Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ubeda" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    乌
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">乌韦达古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Úbeda</p>
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
