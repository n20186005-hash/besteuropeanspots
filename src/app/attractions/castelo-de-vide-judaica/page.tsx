import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡斯特卢-迪维迪 Castelo de Vide｜探访被时光遗忘的犹太秘境，漫步白色小巷与中世纪城堡 - 最佳欧洲景点',
  description: '朋友，想象一下，你从燥热的阿连特茹平原一路驶来，眼前突然出现一座被茂密栗子树与橄榄园环抱的翠绿山丘，山顶是一座略显沧桑的方形城堡塔楼。这就是卡斯特卢-迪维迪给你的第一瞥。但别急，真正的宝藏不在山顶，而在城堡脚下那片如同白色瀑布般倾泻而下的老城区。停好车，沿着被岁月打磨得光滑如鹅卵的花岗岩石板路向上走...',
}

export default function CasteloDeVideJudaicaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '卡斯特卢-迪维迪（阿连特茹的犹太遗风小镇）', href: '/attractions/castelo-de-vide-judaica' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卡斯特卢-迪维迪（阿连特茹的犹太遗风小镇）・Castelo de Vide・葡萄牙・卡斯特卢-迪维迪， 波塔莱格雷区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，你从燥热的阿连特茹平原一路驶来，眼前突然出现一座被茂密栗子树与橄榄园环抱的翠绿山丘，山顶是一座略显沧桑的方形城堡塔楼。这就是卡斯特卢-迪维迪给你的第一瞥。但别急，真正的宝藏不在山顶，而在城堡脚下那片如同白色瀑布般倾泻而下的老城区。停好车，沿着被岁月打磨得光滑如鹅卵的花岗岩石板路向上走，空气立刻变得不一样了。燥热被高墙间的穿堂风吹散，取而代之的是一种清凉的寂静，只能听见你自己的脚步声、远处隐约的泉水流淌声，以及某扇旧木窗后传来的细微葡萄牙语广播声。
你的鼻子会先于眼睛捕捉到这里的灵魂。空气里有老石头晒透后的矿物味，有从狭窄庭院里飘出的迷迭香和月桂叶的辛辣香气，偶尔，下午时分，某户人家烘焙“sericaia”（一种传统的阿连特茹蛋奶甜点）的焦糖和肉桂香会霸道地占据整条小巷。这里的白，不是地中海岸那种炫目的白，而是掺了米黄和淡灰的、被风雨浸染过的温柔白色，墙壁厚实，蓝色或黄色的窗框像不经意间洒落的颜料。你会发现，这里的居民仍然真正生活在这里。老奶奶坐在门口的木椅上剥豆子，猫在阳光斑驳的台阶上打盹，晾衣绳从这家阳台伸到那家窗户。它不是一座博物馆式的空城，而是一个呼吸着的、节奏缓慢的古老社区。
而当你无意中拐进一条尤其狭窄、石阶陡峭、两侧房门低矮到需要弯腰的小巷时，氛围会悄然改变。喧闹的色彩减少了，墙壁更加朴素，有些门楣上方，你会看到浅浅的、需要仔细辨认的刻痕——那可能是一个十字架，也可能是一个模糊的“十诫”碑刻痕迹。你心跳会慢半拍，意识到自己正踏入那片名为“朱迪亚里亚”（Judiaria）的犹太区。这里的寂静更深沉，光线也更幽暗，高墙似乎不是为了防御，而是为了守护一个沉默了几个世纪的秘密。那种肃穆，不是阴森，而是一种巨大的、被压缩在石头里的历史重量，它不喧嚣，只是静静地存在于每一道石缝、每一片阴影里，等待有心人去感受。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，想象一下，你从燥热的阿连特茹平原一路驶来，眼前突然出现一座被茂密栗子树与橄榄园环抱的翠绿山丘，山顶是一座略显沧桑的方形城堡塔楼。这就是卡斯特卢-迪维迪给你的第一瞥。但别急，真正的宝藏不在山顶，而在城堡脚下那片如同白色瀑布般倾泻而下的老城区。停好车，沿着被岁月打磨得光滑如鹅卵的花岗岩石板路向上走，空气立刻变得不一样了。燥热被高墙间的穿堂风吹散，取而代之的是一种清凉的寂静，只能听见你自己的脚步声、远处隐约的泉水流淌声，以及某扇旧木窗后传来的细微葡萄牙语广播声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你的鼻子会先于眼睛捕捉到这里的灵魂。空气里有老石头晒透后的矿物味，有从狭窄庭院里飘出的迷迭香和月桂叶的辛辣香气，偶尔，下午时分，某户人家烘焙“sericaia”（一种传统的阿连特茹蛋奶甜点）的焦糖和肉桂香会霸道地占据整条小巷。这里的白，不是地中海岸那种炫目的白，而是掺了米黄和淡灰的、被风雨浸染过的温柔白色，墙壁厚实，蓝色或黄色的窗框像不经意间洒落的颜料。你会发现，这里的居民仍然真正生活在这里。老奶奶坐在门口的木椅上剥豆子，猫在阳光斑驳的台阶上打盹，晾衣绳从这家阳台伸到那家窗户。它不是一座博物馆式的空城，而是一个呼吸着的、节奏缓慢的古老社区。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而当你无意中拐进一条尤其狭窄、石阶陡峭、两侧房门低矮到需要弯腰的小巷时，氛围会悄然改变。喧闹的色彩减少了，墙壁更加朴素，有些门楣上方，你会看到浅浅的、需要仔细辨认的刻痕——那可能是一个十字架，也可能是一个模糊的“十诫”碑刻痕迹。你心跳会慢半拍，意识到自己正踏入那片名为“朱迪亚里亚”（Judiaria）的犹太区。这里的寂静更深沉，光线也更幽暗，高墙似乎不是为了防御，而是为了守护一个沉默了几个世纪的秘密。那种肃穆，不是阴森，而是一种巨大的、被压缩在石头里的历史重量，它不喧嚣，只是静静地存在于每一道石缝、每一片阴影里，等待有心人去感受。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卡斯特卢-迪维迪（阿连特茹的犹太遗风小镇）`} />
                <InfoRow label="英文名称" value={`Castelo de Vide`} />
                <InfoRow label="正式名称" value={`Castelo de Vide - The Jewish Quarter & Medieval Town`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`卡斯特卢-迪维迪， 波塔莱格雷区`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`葡萄牙境内保存最完好、氛围最宁静的中世纪犹太社区之一，是1492年西班牙驱逐犹太人后，许多塞法迪犹太家庭的重要避难所。`} />
                <InfoRow label="建筑特色" value={`依山而建的白色房屋群落，狭窄蜿蜒如迷宫般的花岗岩阶梯小巷，古朴的铁艺阳台与木门，以及深藏在民居中的犹太教堂与仪式浴池（Mikveh）。`} />
                <InfoRow label="建筑风格" value={`质朴的民间建筑风格，融合了晚期哥特式与曼努埃尔式的细微装饰元素，整体呈现阿连特茹地区特有的简朴素雅。`} />
                <InfoRow label="文化价值" value={`一个活生生的历史切片，见证了中世纪伊比利亚半岛上犹太社区的繁荣、信仰生活以及最终在宗教裁判所阴影下的隐匿与融合。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇公共区域全天开放。核心犹太区（Judiaria）的街道与建筑外部可随时漫步探访。位于犹太区内的“犹太之家”博物馆（Casa da Judiaria）及“中世纪犹太教堂”（Sinagoga）开放时间为：夏季（4月至10月）周二至周日上午10:00至下午1:00，下午2:00至6:00；冬季（11月至3月）周二至周日上午10:00至下午1:00，下午2:00至5:00；每周一闭馆。城堡（Castelo）的开放时间与博物馆大致同步。建议行前在其市政官网再次确认，节假日或有临时调整。`} />
              <InfoRow label="门票价格" value={`漫步整个古镇及犹太区街道完全免费。进入“犹太之家”博物馆和犹太教堂内部参观，通常收取象征性的2-3欧元门票，有时与城堡门票捆绑为联票，约5欧元。学生及65岁以上长者享有折扣。12岁以下儿童在成人陪同下通常免费。`} />
              <InfoRow label="地址" value={`Judiaria de Castelo de Vide, 7320-201 Castelo de Vide, Portugal`} />
              <InfoRow label="交通方式" value={`从里斯本出发是最佳选择。首先乘坐火车（葡萄牙铁路CP）从里斯本东方火车站（Gare do Oriente）前往埃武拉（Évora），车程约1.5小时，班次频繁。抵达埃武拉后，在火车站外的巴士站换乘地区巴士（Rodoviária do Alentejo公司），前往卡斯特卢-迪维迪，车程约1小时15分钟，但每日班次有限（通常一天3-4班），务必提前在巴士公司官网查询并规划好时间。更灵活的方式是在里斯本或埃武拉租车自驾，沿A6高速转IP2或N246国道，从埃武拉开车过来约1小时，沿途阿连特茹的橡树林与软木田风光本身就是一道风景。小镇内所有景点步行可达，车建议停在老城外围的免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲卡斯特卢-迪维迪的故事，我们得把时钟拨回到更早的时候。这片山丘的战略位置很早就被看重，摩尔人在这里建立了最初的防御工事。13世纪，葡萄牙国王迪尼斯一世从摩尔人手中收复了这里，并开始修建城堡，赐予它“Vila”的地位，吸引人们来定居。真正的转折点发生在14世纪，随着葡萄牙王国鼓励商业和发展，犹太工匠、商人、学者和医生开始在这里聚集。国王们给予了他们一定的保护，犹太社区在城堡下方的特定区域——也就是犹太区——繁荣起来。他们修建了自己的教堂、学校、公共浴池和面包房，形成了一个自给自足、充满活力的文化飞地。你如今走过的那些狭窄小巷，最初的设计就考虑了社区内部的紧密联系和一定的隐秘性。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，整个伊比利亚半岛的天空在15世纪末骤然阴沉。1492年，西班牙天主教双王颁布了著名的《阿兰布拉诏令》，驱逐所有拒绝改宗的犹太人。成千上万的塞法迪犹太人被迫流亡，其中很大一部分涌向了当时政策相对宽松的邻国葡萄牙。卡斯特卢-迪维迪，这个靠近边境的宁静小镇，迎来了许多仓皇而来的家庭。可以想见，那段时期的犹太区是何等拥挤、悲伤而又顽强。新来者带来了不同的知识和技艺，也让这个社区达到了文化上的又一个高峰。但安宁是短暂的。仅仅几年后，葡萄牙国王曼努埃尔一世迫于联姻压力，也下令驱逐犹太人，不过给出了“改宗则可留下”的条件。于是，“新基督徒”（即被迫改宗的犹太人）出现了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`从此，卡斯特卢-迪维迪的犹太区进入了一种“静默”的状态。公开的犹太仪式消失了，教堂被关闭或改作他用，那些刻有希伯来文的门楣被小心地遮掩或凿去。人们外表上遵从天主教礼仪，但在家中，可能依然悄悄地点亮安息日的蜡烛，遵循着古老的饮食律法。宗教裁判所的阴影无处不在，告密和恐惧渗透在邻里之间。那些你看到的、门楣上同时存在的十字架和模糊的犹太符号，正是那个复杂而痛苦年代最无声却最有力的证词。它诉说着一种双重生活，一种在信仰与生存之间的艰难平衡。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间的长河冲刷着记忆。渐渐地，具体的恐惧被遗忘，犹太区的许多房屋被后来的居民入住，结构被改造。这个区域变成了老城里一个普通的、略显破旧的角落。直到20世纪中叶，才有历史学家开始重新关注和研究这片被遗忘的遗产。小心翼翼地考古发掘开始了，那间中世纪犹太教堂（Sinagoga）在民居中被重新发现，还有那珍贵的仪式浴池（Mikveh）——一个由天然岩石中涌出的泉水注满的地下小室，用于宗教净礼。它们的重见天日，仿佛打开了一扇通往地下的时间胶囊。如今，修复后的犹太教堂内部极其简朴，只有石质的长凳和面向耶路撒冷的祈祷壁龛，没有任何华丽的装饰，但这种空白本身，就充满了震耳欲聋的历史回响。它不是一个重建的景点，而是一个被治愈的伤口，一个终于可以坦然展示的过去。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味卡斯特卢-迪维迪，你需要赋予它完整的一天，并把自己的节奏调到“慢速档”。建议在上午十点前抵达，这时阳光正好变得温暖，游客尚稀，本地居民开始一天的生活，最适合捕捉小镇苏醒的模样。整体游览无需严格顺序，更像是一场随心所欲的漫步探索，但可以遵循一个“从高到低，从宏观到微观”的逻辑。先登上城堡获取全景视角，了解城镇布局；然后一头扎进下方的犹太区迷宫，进行深度沉浸；最后在阳光最好的午后，闲逛主广场和商业街，感受当地生活气息。总耗时大约5-6小时，包括一顿悠闲的午餐和无数次停下拍照、发呆的时间。请务必穿一双绝对舒适、适合走石阶的鞋。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`犹太教堂内部空间非常小且肃穆，进入时请保持安静，关闭手机声响，尊重这份宁静的历史氛围。
小镇很多小巷是死胡同或居民私人庭院入口，探索时注意观察，如果看到“Privado”（私人）标识或感受到住户的目光，请微笑退出。
周日及周一，许多小博物馆和餐厅可能休息，最好将深度游览安排在周二至周六。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主停车场出发，先别急着进老城，沿着外侧小路向上直抵城堡的城墙脚下，抚摸那些粗糙的巨石并远眺无边的阿连特茹平原。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡侧门进入内部庭院，攀爬狭窄的螺旋石梯登上主塔楼，在猎猎风中将整个白色小镇如同模型般铺展在脚下，特别辨认犹太区那一片密集的屋顶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山时故意“迷路”，放弃大道，选择任何一条向下延伸的、宽度不足一米的白色小巷，让自己彻底迷失在犹太区宁静的迷宫之中。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在迷宫中心寻找那扇不起眼的木门，里面隐藏着葡萄牙最古老的中世纪犹太教堂之一，走进去在绝对的寂静中触摸冰冷的石凳，感受墙壁的厚度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到从岩石中涌出的“弗赖尔泉”（Fonte da Vila），这是几个世纪以来社区的生命之源，喝一口清冽的泉水，看当地人如何用传统的大陶罐来此取水。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`漫步到圣玛利亚广场（Praça de Santa Maria），在露天咖啡座选个位置，点一杯浓咖啡，看广场上的孩子们追逐鸽子，老人们坐在长椅上闲聊。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着“弗朗西斯科街”（Rua de Francisco）慢慢逛，这里有许多售卖本地蜂蜜、奶酪、手工皂和软木制品的小店，用嗅觉和触觉体验阿连特茹的物产。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前，再次爬上一处高点，比如仁慈教堂（Igreja da Misericórdia）旁的观景台，看夕阳的金色如何一点点浸染白色墙壁，直至小镇被温暖的琥珀色包裹。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`犹太教堂入口门拱`}</h4>
                  <p className="text-sm text-gray-700">{`下午三点后的斜射阳光会刚好照亮门楣及周围的石墙，使用广角镜头低角度仰拍，能捕捉到门洞的纵深感和上方可能存在的雕刻细节，将蓝天框入门内作为背景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从城堡塔楼俯瞰犹太区`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏光线最佳，使用长焦镜头压缩空间，聚焦于犹太区那一片错综复杂的白色立体迷宫，捕捉屋顶瓦片与石灰墙面对比的光影质感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“灵魂之阶”小巷`}</h4>
                  <p className="text-sm text-gray-700">{`这条连接上下犹太区的标志性陡峭石阶，在正午时分阳光直射时，两侧高墙会形成强烈的明暗对比，站在阶梯中段向上或向下拍摄，能拍出极具戏剧性的引导线构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`弗赖尔泉广场`}</h4>
                  <p className="text-sm text-gray-700">{`上午光线柔和时，以古老的石制喷泉和取水妇人为前景，后方是典型的白色房屋与铁艺阳台，等待当地居民前来取水的瞬间，捕捉生动的生活场景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`圣玛利亚广场拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`雨天或阴天别沮丧，躲在广场边的石拱廊下，利用拱门作为画框，拍摄广场上湿漉漉的石板地倒映着天空和建筑，营造出忧郁而诗意的氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`小镇氛围私密，拍摄居民尤其是老人和儿童时，务必先微笑示意并获得默许，未经允许不要将镜头直接对准他人的面孔或室内。`}</li>
                <li>• {`阿连特茹的阳光强烈，建议携带偏振镜（CPL）来消除白色墙壁上的反光，让天空更蓝，并增强石材质感的纹理。`}</li>
                <li>• {`许多最佳光影时刻转瞬即逝，尤其是在狭窄小巷里，不妨在一个喜欢的角落多停留一会儿，观察光线如何移动和变化。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住犹太区核心一栋经过精心修复的15世纪石屋，保留了原始的拱顶和厚墙，夜晚能听到最纯粹的寂静，清晨打开木窗就是一幅几个世纪不变的街景画卷。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`田园风光之选`}</h4>
                  <p className="text-sm text-green-800">{`住在小镇边缘一座家族经营的“乡村旅游”农庄，房间宽敞，早餐是自家果园的水果、新鲜羊奶和主妇手作的果酱，晚上可以在院子里仰望毫无光污染的璀璨星河。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计风格之选`}</h4>
                  <p className="text-sm text-yellow-800">{`由老城中心一栋传统宅邸改造的精品酒店，内部是极简的现代设计，却巧妙地露出了古老的石墙和木梁，拥有一个可俯瞰屋顶的露台，是古典与现代碰撞的舒适驿站。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`城堡视野之选`}</h4>
                  <p className="text-sm text-purple-800">{`位于城堡山腰的静谧宾馆，房间带有一个小阳台，正对着绵延至天际的阿连特茹平原，是欣赏日出和日落壮景的最佳私人包厢。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的精华住宿都在老城内，但停车可能需要在较远的公共停车场，预定前请确认酒店的停车方案。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`旺季（春季和秋季）房源紧张，这些特色住所通常只有寥寥数间房，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果自驾且行李较多，选择老城边缘或外围的住宿会更为便利，步行进入老城核心区也只需五到十分钟。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开卡斯特卢-迪维迪好些天了，但我闭上眼，指尖仿佛还能触摸到那些被阳光晒得微温的白色石灰墙的粗糙质感。它给我的，不是那种看到宏伟教堂或宫殿的瞬时震撼，而是一种缓慢的、渗透性的安抚。在这个一切追求高效、喧嚣和展示的世界里，这里像一个倔强的反义词。它不张扬自己的伤痛，也不兜售廉价的怀旧，只是坦然地把那些狭窄的巷子、低矮的门楣、沉默的泉眼和空无一物的犹太教堂，原原本本地呈现在你面前。历史在这里不是教科书上冰冷的名字和年份，而是你可以用脚步丈量、用皮肤感受、用呼吸嗅到的真实存在。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`我想，这就是深度旅行最珍贵的意义吧——找到一个地方，它让你停下来，不仅仅是身体的停留，更是心灵的沉降。在卡斯特卢-迪维迪的迷宫里，你被迫慢下来，在一次次拐弯和上下阶梯中，你与自己独处，与历史对话。你会思考关于包容与排斥、信仰与生存、记忆与遗忘这些宏大而永恒的命题。它像一个宁静的提醒：文明最坚韧的部分，往往不是那些高耸入云的纪念碑，而是普通人在艰难岁月里，对家园、传统和内在生活的默默坚守。对于任何一位厌倦了打卡、渴望真正“感受”一个地方的旅人来说，这个阿连特茹腹地的白色小镇，都值得你专程而来，花上一天时间，让自己彻底地“迷失”其中，然后，或许，你会找到一些久违的、关于宁静与坚韧的东西。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/coimbra" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科英布拉老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Coimbra</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/evora-roman-temple" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃武拉罗马神庙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Roman Temple of Évora</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/castelo-branco" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布朗库堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Castelo Branco</p>
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
