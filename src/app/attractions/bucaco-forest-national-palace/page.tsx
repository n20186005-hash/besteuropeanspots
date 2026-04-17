import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布萨科国家森林 Buçaco Forest｜探秘修道士禁地与童话狩猎宫 - 最佳欧洲景点',
  description: '推开那道厚重的、被称为“科英布拉门”的石砌拱门，你就把车马的喧嚣彻底关在了身后。一瞬间，世界变了。光线被层层叠叠、高达数十米的巨树树冠滤成了柔和的墨绿与淡金色，斑驳地洒在覆盖着厚厚苔藓的石板小径上。空气是清冽的，带着一股植物根系与潮湿土壤混合的、近乎神圣的芬芳，深吸一口，肺腑都仿佛被洗涤过。耳边唯一',
}

export default function BucacoForestNationalPalacePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '布萨科国家森林', href: '/attractions/bucaco-forest-national-palace' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`布萨科国家森林・Buçaco Forest・葡萄牙・卢萨`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`推开那道厚重的、被称为“科英布拉门”的石砌拱门，你就把车马的喧嚣彻底关在了身后。一瞬间，世界变了。光线被层层叠叠、高达数十米的巨树树冠滤成了柔和的墨绿与淡金色，斑驳地洒在覆盖着厚厚苔藓的石板小径上。空气是清冽的，带着一股植物根系与潮湿土壤混合的、近乎神圣的芬芳，深吸一口，肺腑都仿佛被洗涤过。耳边唯一持续的声响，是风吹过雪松、南洋杉和巨大金钟柏树梢时，发出的那种低沉而悠远的沙沙声，像是这片森林持续了几个世纪的深呼吸。
沿着蜿蜒小径深入，你会渐渐明白，这绝非一片普通的森林。路旁时不时会出现一个石头的十字架，或是一座小小的神龛，上面雕刻的圣像已被风雨磨去了棱角。你会遇到慢跑的当地人，牵着狗散步的老人，他们的脚步声轻缓，交谈也是低声的，仿佛不愿打扰这份沉淀了数百年的宁静。这里就是他们的后花园，一个可以随时遁入的、充满氧气与历史感的绿洲。最动人的莫过于那些树——许多树干的铭牌上，标注着令人咋舌的年龄和遥远的原产地：墨西哥的落羽杉、日本的柳杉、澳洲的桉树……它们都是被17世纪的加尔默罗会修道士们，像收集圣人遗物一样，从世界的各个角落引种至此，在这片“圣林”中陪伴他们修行。
而当你穿过一片尤其茂密的林地，眼前豁然开朗时，那份震撼是无法用语言形容的。童话般的布萨科宫就那么毫无征兆地出现在眼前，它不像其他宫殿那样试图统治景观，而是谦卑又奇幻地从森林的怀抱中“生长”出来。粉白与赭石色的墙体，装饰着精致的石雕缆绳、锚链和浑天仪——那是葡萄牙大航海时代的曼努埃尔风格符号。在午后斜阳下，整座宫殿散发着一种温柔而迷离的光泽，仿佛下一秒就会有骑士或公主从那些拱廊下走出。这一刻，你终于理解了这个地方的魔力：它既是深沉静谧的自然圣殿，又是一曲凝固在石头与绿叶间的浪漫狂想曲。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`推开那道厚重的、被称为“科英布拉门”的石砌拱门，你就把车马的喧嚣彻底关在了身后。一瞬间，世界变了。光线被层层叠叠、高达数十米的巨树树冠滤成了柔和的墨绿与淡金色，斑驳地洒在覆盖着厚厚苔藓的石板小径上。空气是清冽的，带着一股植物根系与潮湿土壤混合的、近乎神圣的芬芳，深吸一口，肺腑都仿佛被洗涤过。耳边唯一持续的声响，是风吹过雪松、南洋杉和巨大金钟柏树梢时，发出的那种低沉而悠远的沙沙声，像是这片森林持续了几个世纪的深呼吸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`沿着蜿蜒小径深入，你会渐渐明白，这绝非一片普通的森林。路旁时不时会出现一个石头的十字架，或是一座小小的神龛，上面雕刻的圣像已被风雨磨去了棱角。你会遇到慢跑的当地人，牵着狗散步的老人，他们的脚步声轻缓，交谈也是低声的，仿佛不愿打扰这份沉淀了数百年的宁静。这里就是他们的后花园，一个可以随时遁入的、充满氧气与历史感的绿洲。最动人的莫过于那些树——许多树干的铭牌上，标注着令人咋舌的年龄和遥远的原产地：墨西哥的落羽杉、日本的柳杉、澳洲的桉树……它们都是被17世纪的加尔默罗会修道士们，像收集圣人遗物一样，从世界的各个角落引种至此，在这片“圣林”中陪伴他们修行。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而当你穿过一片尤其茂密的林地，眼前豁然开朗时，那份震撼是无法用语言形容的。童话般的布萨科宫就那么毫无征兆地出现在眼前，它不像其他宫殿那样试图统治景观，而是谦卑又奇幻地从森林的怀抱中“生长”出来。粉白与赭石色的墙体，装饰着精致的石雕缆绳、锚链和浑天仪——那是葡萄牙大航海时代的曼努埃尔风格符号。在午后斜阳下，整座宫殿散发着一种温柔而迷离的光泽，仿佛下一秒就会有骑士或公主从那些拱廊下走出。这一刻，你终于理解了这个地方的魔力：它既是深沉静谧的自然圣殿，又是一曲凝固在石头与绿叶间的浪漫狂想曲。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`布萨科国家森林`} />
                <InfoRow label="英文名称" value={`Buçaco Forest`} />
                <InfoRow label="正式名称" value={`Mata Nacional do Buçaco`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`卢萨`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一处由隐修会创造并守护了数百年的生态与精神圣地，也是决定葡萄牙独立命运的关键古战场。`} />
                <InfoRow label="建筑特色" value={`森林深处，一座将曼努埃尔式、新曼努埃尔式与浪漫主义风格熔于一炉的“童话城堡”，宛如从树海中生长出来的梦幻宫殿。`} />
                <InfoRow label="建筑风格" value={`布萨科宫为19世纪浪漫主义风格，大量运用了葡萄牙独特的曼努埃尔式航海元素作为装饰；森林中的修道院遗址则为朴素的巴洛克风格。`} />
                <InfoRow label="文化价值" value={`它既是葡萄牙民族认同的纪念碑（因1810年布萨科战役），也是一座活的、由人类信仰塑造的植物学珍宝馆。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`森林区域全天24小时开放。布萨科宫（皇宫酒店）的公共区域及教堂每日上午9点至傍晚7点开放参观；花园的正式开放时间为日出至日落。请注意，皇宫酒店内部客房区域为非住客禁入。冬季（11月至2月）部分小径可能因天气临时关闭，建议行前查看官网通知。`} />
              <InfoRow label="门票价格" value={`进入布萨科国家森林本身完全免费。参观布萨科宫（皇宫酒店）的教堂、部分厅堂及正式花园需支付门票，全票约5欧元，学生及65岁以上长者享有折扣价约3欧元。另有包含导游讲解的套餐可选，价格约为8欧元。6岁以下儿童免费。`} />
              <InfoRow label="地址" value={`Mata Nacional do Buçaco, 3050-261 Luso, Portugal`} />
              <InfoRow label="交通方式" value={`从波尔图国际机场出发是最佳选择。在机场租车自驾最为便捷，沿A1高速公路向南，在“Mealhada”出口下，再沿N234公路行驶约15分钟即可抵达森林主入口，全程约1小时15分钟。若乘坐公共交通，可从波尔图的“Campanhã”火车站乘坐火车至“Mealhada”站（车程约1小时，班次频繁），出站后转乘出租车（约10分钟车程）或步行约3公里（部分为上山路）抵达。从科英布拉出发则更近，火车或自驾约30-40分钟。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`布萨科的故事，始于信仰对荒野的驯服。1628年，一群严苛的加尔默罗会修道士来到了这片当时还荒芜崎岖的山丘。他们带着一种独特的神学观念：创造一片与世隔绝的“圣林”，作为苦修和冥想的完美场所。于是，他们用一堵长达5公里的高墙将这片土地围了起来，颁布了严厉的禁令：女性不得入内，任何伤害树木的行为都将被驱逐。在接下来的两个世纪里，这些身着褐色长袍的修士们，成了最早的“森林园丁”。他们不仅种植本地橡树和松树，更通过当时初现雏形的传教网络，从葡萄牙航海家带来的异域植物中获取种子和幼苗。一株株来自美洲、亚洲、非洲的珍奇树木，就这样在这片葡萄牙腹地的围墙内落地生根。森林，成了他们祷告的延伸，每一棵树都是一首无言的圣诗。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，宁静在1810年被战争的铁蹄踏碎。拿破仑的大军横扫伊比利亚半岛，威灵顿公爵率领的英葡联军在此设防。这场布萨科战役本身规模不大，却是半岛战争的关键转折点，它首次成功阻击了法军不可一世的攻势，极大地鼓舞了葡萄牙人的抵抗意志。你能想象吗？炮弹曾呼啸着穿过这些如今静谧的树冠，修士们精心打理的花园和小径成了士兵厮杀的战场。森林的墙壁见证了鲜血与呐喊，也从纯粹的精神净土，被刻上了民族的伤痕与荣耀。战后，森林里建起了方尖碑，纪念那些为守护这片土地而战死的生命。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间的车轮转到19世纪末，森林的命运再次迎来华丽的转折。葡萄牙国王路易斯一世，一位热爱自然与狩猎的君主，看中了布萨科这片充满传奇色彩的土地。他决定在此建造一座奢华的狩猎行宫。建筑师路易吉·马尼尼受命设计，这位意大利天才做了一件大胆无比的事：他没有铲平森林，而是让宫殿的塔楼、露台和长廊与参天古树交织在一起。更绝妙的是，他从葡萄牙辉煌的航海历史中汲取灵感，将曼努埃尔式风格那种充满海洋气息的装饰——缆绳、船锚、珊瑚、浑天仪——浪漫化、夸张化，重新演绎在这座19世纪的建筑上，创造了独一无二的“新曼努埃尔风格”。于是，一座充满童话色彩的宫殿在古树的环绕下诞生了，它是对往昔帝国荣光的一次梦幻回响。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`随着葡萄牙君主制的终结，布萨科宫被改造成了豪华酒店，而整片森林则在1917年被宣布为国家纪念地，受到永久保护。修士们早已离开，国王也已成历史云烟，但他们共同留下的遗产却愈发珍贵。那堵高墙依然屹立，将现代世界的浮躁隐隐隔开；来自五大洲的树木历经风雨，许多已成为欧洲之最；而那场战役的记忆，则沉淀为民族精神的一部分。今天的布萨科，是一个层次极其丰富的文化生态层：一层是苦修的禁地，一层是血战的沙场，一层是国王的梦境。它们没有彼此覆盖，而是在时光中相互渗透，共同编织成了这片土地独一无二、无法复制的灵魂。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正领略布萨科的灵魂，你需要准备一整天的时间，并穿上最舒适耐走的鞋子。建议在清晨九点前抵达，从古老的“科英布拉门”进入。早上的光线柔和，森林里人迹罕至，只有鸟鸣和你的脚步声，是感受“圣林”灵性氛围的绝佳时机。上午用大约3-4小时在森林北部漫步，探访隐修院遗迹和寻找那些著名的古树。中午时分，当你走到森林中心区域，布萨科宫正好在阳光下展现最迷人的姿态，此时进入参观宫殿外部、教堂和花园最为理想。下午可以继续探索森林南部的多条小径，那里的景观更为野趣盎然。这样的安排顺应了光线的变化，也让你从静谧的自然逐渐过渡到华丽的人文景观，体验层次分明，不会感到匆忙或疲惫。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`林间小径多苔藓且部分坡度较陡，务必穿防滑的徒步鞋，夏季也建议带件薄外套，林下气温较低。
森林内没有商店和餐馆，仅宫殿酒店有高端餐厅和咖啡厅，请自备足够的饮用水和少量能量零食。
尽量避免周末下午前往，那时本地家庭游客较多，森林主入口和宫殿附近会变得相对拥挤，破坏宁静感。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从充满历史感的“科英布拉门”进入，让你的眼睛和呼吸先适应这片被高墙守护了四个世纪的、光线幽暗空气清新的绿色世界。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主路“Avenida do Buçaco”缓步上行，留意道路两侧那些挂着铭牌的“树木贵族”，比如那棵巨大的墨西哥落羽杉，试着张开双臂拥抱它的树干。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`岔入林间小径前往“高十字架”，站在这个森林的制高点，透过枝叶的缝隙俯瞰远方波浪般起伏的葡萄牙乡村平原。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在宁静的“圣特蕾莎小径”尽头，寻找那一片朴素的巴洛克风格建筑遗迹，那是加尔默罗会隐修院残存的墙壁，抚摸石头感受修士们留下的寂静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到“森林泉眼”，品尝一口从古老石雕兽首中汩汩流出的清冽泉水，据说这泉水曾滋养了无数修道士的灵魂与肉体。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当童话般的布萨科宫粉白色墙面突然出现在林间空地时，不要急着走近，先在远处长椅上坐下，静静欣赏这座建筑与森林浑然天成的浪漫构图。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花时间环绕宫殿走一圈，仔细观察外墙上那些精美的、讲述航海传奇的石雕细节，然后从正门进入，感受内部教堂那融合了神圣与皇家气派的辉煌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从宫殿后方进入“花园之心”，在整齐的几何花坛、喷泉和修剪成型的黄杨树迷宫中感受与原始森林截然不同的、被精心雕琢的自然之美。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`森林入口拱门框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在“科英布拉门”内侧向外拍，用古老的石拱门作为画框，将门外明媚的世界和门内幽深的森林形成强烈对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`宫殿与巨树同框`}</h4>
                  <p className="text-sm text-gray-700">{`下午三点后，从宫殿东侧的“雪松小径”往回望，让一棵形态遒劲的巨大雪松或南洋杉作为前景，宫殿的塔楼在后方若隐若现，营造出森林守护宫殿的奇幻感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`隐修院残墙光影`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，在隐修院遗址的断壁残垣处，捕捉阳光在粗糙石面投下的清晰硬朗的影子，能拍出极具历史沧桑感和几何美感的照片。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`高十字架观景台远眺`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个晴朗的清晨，从高十字架的平台用长焦镜头拍摄，可以压缩空间，将远方平原的薄雾、村落和近处森林的层层树冠压缩在同一画面中。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`花园迷宫俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`登上宫殿侧面的一个小露台（通常开放），从上往下拍摄花园的几何式迷宫图案，最佳时间是下午光线侧射，能让黄杨树篱的立体感格外分明。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`森林内部光线复杂，建议使用相机并调高感光度以捕捉林下动态，手机拍摄可多利用HDR模式平衡高光与暗部。`}</li>
                <li>• {`宫殿内部教堂允许拍照，但严禁使用闪光灯和三脚架，请保持安静并尊重在此祷告的人们。`}</li>
                <li>• {`若想拍摄森林晨雾弥漫的仙境效果，需在日出前抵达，秋季和初春的清晨是最佳时机。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`极致体验之选`}</h4>
                  <p className="text-sm text-blue-800">{`直接下榻布萨科宫皇宫酒店，住在由昔日国王套房改造的房间，在雕花阳台聆听森林夜籁，清晨独自拥有还未对外开放的花园。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`森林边缘隐居`}</h4>
                  <p className="text-sm text-green-800">{`选择森林入口附近卢萨小镇上的家庭式精品旅馆，多为石头老屋改造，充满温馨感，方便早晚随时进入森林，还能享受小镇著名的温泉水疗。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计感庄园民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`住在离森林几分钟车程、被葡萄园环绕的现代风格庄园，拥有无边泳池和全景露台，白天探索古老森林，晚上回归极简舒适的设计空间。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济便捷之选`}</h4>
                  <p className="text-sm text-purple-800">{`在交通枢纽梅亚利亚达镇选择干净的连锁酒店或公寓式旅馆，价格实惠，餐饮选择丰富，自驾前往森林非常方便，适合预算有限的旅行者。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`布萨科宫酒店极为热门，尤其是周末和夏季，务必提前数月预订，并明确预订的是可参观公共区域的“宫殿房间”而非较新的附属楼。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`卢萨小镇以温泉水疗闻名，许多住宿套餐包含水疗服务，是徒步森林后放松肌肉的完美选择。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`森林周边地区治安非常好，但夜间照明稀少，如果住在较偏远的农庄式住宿，建议天黑后尽量减少独自步行外出。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开布萨科的时候，我的鞋底沾着湿润的泥土和碎叶，口袋里装着一枚在泉水边捡到的、形状奇特的松果。但我觉得自己带走的，远不止这些。这片森林教会了我一种不同的“观看”方式：历史不只是在博物馆的玻璃柜里，它可以是一棵树缓慢的年轮，是石墙上的一记弹痕，是泉水永不间断的流淌。在这里，自然与文化不是对立的，它们像那些缠绕着宫殿墙壁的常春藤一样，早已生长在了一起，分不清彼此。修士的虔诚、战士的热血、国王的浪漫，所有这些人类强烈的情感与意志，最终都被时间这位伟大的园丁，温柔地抚平、吸纳，转化为了这片土地上更深沉、更恒久的宁静。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求快速、崭新和刺激的世界里，布萨科像一位沉静的智者。它不提供炫目的网红打卡点，它只提供一段需要你用脚步丈量、用呼吸感受的时光。它让你慢下来，在巨树的阴影下思考生命的尺度，在古老的石墙边触摸时间的质感。你会明白，真正的奢侈不是金碧辉煌，而是一方被精心守护了四百年的静谧，是一段允许你与过去、与自然深刻对话的完整旅程。这就是为什么，每一位渴望在旅途中获得内心回响，而不仅仅是眼睛风景的旅人，都应该来布萨科走一走。它会是你记忆里，一片永远苍翠、永不凋零的森林。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/batalha-monastery" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴塔利亚修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Batalha Monastery</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/coimbra-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科英布拉老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Coimbra Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/barcelos-portugal-rooster-market" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴塞卢什</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Barcelos</p>
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
