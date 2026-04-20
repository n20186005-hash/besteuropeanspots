import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '可可城堡 Coca Castle｜绝美的粉红砖砌穆德哈尔式城堡 - 最佳欧洲景点',
  description: '第一眼看到可可城堡时，你可能会怀疑自己是不是走进了某本奇幻小说的插画里。它不像那些灰暗、冷峻的岩石城堡，而是像从大地里生长出来的一朵巨大的、粉红色的砖石之花，突兀又和谐地矗立在卡斯蒂利亚平原那一片略显单调的绿色松林与金色麦田之间。车子转过一个弯，它就这么毫无征兆地出现在地平线上，那种明媚的、带着暖意...',
}

export default function CocaCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '可可城堡', href: '/attractions/coca-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`可可城堡・Coca Castle・西班牙・塞哥维亚（更精确地说是位于塞哥维亚省的Coca镇）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到可可城堡时，你可能会怀疑自己是不是走进了某本奇幻小说的插画里。它不像那些灰暗、冷峻的岩石城堡，而是像从大地里生长出来的一朵巨大的、粉红色的砖石之花，突兀又和谐地矗立在卡斯蒂利亚平原那一片略显单调的绿色松林与金色麦田之间。车子转过一个弯，它就这么毫无征兆地出现在地平线上，那种明媚的、带着暖意的粉，在西班牙炽烈的阳光下，几乎有一种不真实的海市蜃楼感。车子越开越近，那份精致与雄伟交织的震撼就越发强烈。
走近了，你才能真切地感受到那些砖块的魔力。那不是单调的粉色，而是在赭石、玫瑰红和浅棕色之间微妙过渡的色调，砖块表面有着手工烧制留下的细微凹凸和釉质光泽。阳光斜射时，整座城堡仿佛在燃烧，焕发出一种温暖而内敛的光芒；而当云朵飘过，光线变得柔和，它又呈现出一种天鹅绒般的质感。城堡四周是极深的、注满了水的护城河，河水平静如镜，将这座梦幻宫殿的倒影完好地收纳其中，风一吹，倒影便碎成一片波光粼粼的粉色涟漪。你站在那里，能听到的唯一声音，可能就是掠过平原的风声，以及护城河里偶尔的鱼跃声，整个世界安静得仿佛只剩下你和这座砖砌的巨兽在对望。
在当地人眼里，它可能只是一个从小就熟悉的背景。Coca小镇安静得有些过分，街道上几乎看不到游客，居民们的生活节奏缓慢。城堡对于他们，或许就像村口那棵老橡树一样自然。你可能会在镇上的小酒吧里，听到老人们用带着浓重口音的西班牙语，谈论着“El Castillo”的往事，语气平淡，就像在谈论昨天邻居家的事情。这种日常感，反而让城堡褪去了一些神秘光环，多了几分可亲的温度。它不仅仅是历史书上的一个名词，更是这个社区记忆与身份的一部分，静静守护着一代又一代人的生息。
那么，它最打动人心的地方到底是什么呢？我想，是那种极致的矛盾与统一。它是一座不折不扣的军事要塞，拥有高耸的城垛、威严的主塔、难以逾越的护城河，每一处设计都为了抵御攻击。然而，建造它的人却用了最繁复、最具有装饰性的手法，将冰冷的防御工事变成了艺术的画布。那些砖块垒砌出的菱形、星形、锯齿形图案，充满了伊斯兰艺术的美学韵律，让人几乎忘了它的战争属性。这种在“盾”上雕刻“诗”的疯狂与浪漫，这种将生存的刚需与对美的执着追求强行焊在一起的魄力，才是可可城堡灵魂里最闪光的、令人过目不忘的核心魅力。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到可可城堡时，你可能会怀疑自己是不是走进了某本奇幻小说的插画里。它不像那些灰暗、冷峻的岩石城堡，而是像从大地里生长出来的一朵巨大的、粉红色的砖石之花，突兀又和谐地矗立在卡斯蒂利亚平原那一片略显单调的绿色松林与金色麦田之间。车子转过一个弯，它就这么毫无征兆地出现在地平线上，那种明媚的、带着暖意的粉，在西班牙炽烈的阳光下，几乎有一种不真实的海市蜃楼感。车子越开越近，那份精致与雄伟交织的震撼就越发强烈。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，你才能真切地感受到那些砖块的魔力。那不是单调的粉色，而是在赭石、玫瑰红和浅棕色之间微妙过渡的色调，砖块表面有着手工烧制留下的细微凹凸和釉质光泽。阳光斜射时，整座城堡仿佛在燃烧，焕发出一种温暖而内敛的光芒；而当云朵飘过，光线变得柔和，它又呈现出一种天鹅绒般的质感。城堡四周是极深的、注满了水的护城河，河水平静如镜，将这座梦幻宫殿的倒影完好地收纳其中，风一吹，倒影便碎成一片波光粼粼的粉色涟漪。你站在那里，能听到的唯一声音，可能就是掠过平原的风声，以及护城河里偶尔的鱼跃声，整个世界安静得仿佛只剩下你和这座砖砌的巨兽在对望。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当地人眼里，它可能只是一个从小就熟悉的背景。Coca小镇安静得有些过分，街道上几乎看不到游客，居民们的生活节奏缓慢。城堡对于他们，或许就像村口那棵老橡树一样自然。你可能会在镇上的小酒吧里，听到老人们用带着浓重口音的西班牙语，谈论着“El Castillo”的往事，语气平淡，就像在谈论昨天邻居家的事情。这种日常感，反而让城堡褪去了一些神秘光环，多了几分可亲的温度。它不仅仅是历史书上的一个名词，更是这个社区记忆与身份的一部分，静静守护着一代又一代人的生息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`那么，它最打动人心的地方到底是什么呢？我想，是那种极致的矛盾与统一。它是一座不折不扣的军事要塞，拥有高耸的城垛、威严的主塔、难以逾越的护城河，每一处设计都为了抵御攻击。然而，建造它的人却用了最繁复、最具有装饰性的手法，将冰冷的防御工事变成了艺术的画布。那些砖块垒砌出的菱形、星形、锯齿形图案，充满了伊斯兰艺术的美学韵律，让人几乎忘了它的战争属性。这种在“盾”上雕刻“诗”的疯狂与浪漫，这种将生存的刚需与对美的执着追求强行焊在一起的魄力，才是可可城堡灵魂里最闪光的、令人过目不忘的核心魅力。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`可可城堡`} />
                <InfoRow label="英文名称" value={`Coca Castle`} />
                <InfoRow label="正式名称" value={`Coca Castle`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`塞哥维亚（更精确地说是位于塞哥维亚省的Coca镇）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座城堡是西班牙穆德哈尔军事建筑中最杰出的典范之一，见证了基督教王国与伊斯兰艺术在伊比利亚半岛上的独特融合。`} />
                <InfoRow label="建筑特色" value={`其最震撼的特色在于通体使用粉红色调的砖块，通过精巧的砌筑技术构建出复杂的几何图案、拱门和防御工事，将坚固的军事堡垒升华为一件巨大的艺术品。`} />
                <InfoRow label="建筑风格" value={`它是西班牙晚期哥特式与穆德哈尔风格完美结合的巅峰之作，后者是西班牙独有的、由穆斯林工匠为基督教领主服务而创造出的艺术形式。`} />
                <InfoRow label="文化价值" value={`城堡如同一本立体的史书，直观体现了收复失地运动后期，基督教文化与安达卢西亚文化遗产之间既对抗又共生的复杂关系。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡全年开放，但开放时间有季节性调整。夏季（4月1日至9月30日）通常为周二至周日，上午10:00至下午2:00，下午5:00至晚上8:00；冬季（10月1日至3月31日）开放时间缩短，通常为周二至周日，上午10:30至下午1:00，下午4:30至晚上6:30。每周一闭馆（节假日除外）。重要节日如圣诞节和元旦可能关闭，建议行前在其官网或当地旅游局确认最新时刻表。`} />
              <InfoRow label="门票价格" value={`成人票价为3欧元。欧盟学生、65岁以上老人及8至14岁儿童可享受1.5欧元的优惠票价。8岁以下儿童免费。每个月的第一个周日为免费开放日。门票通常在城堡入口处直接购买，几乎没有排队烦恼。`} />
              <InfoRow label="地址" value={`Plaza del Castillo, s/n, 40480 Coca, Segovia, Spain`} />
              <InfoRow label="交通方式" value={`从马德里出发最为方便。首先，从马德里Chamartín火车站乘坐高铁（AVE）或区域性列车（REX）前往塞哥维亚，车程约30分钟。到达塞哥维亚后，你需要转乘区域巴士前往Coca镇。在塞哥维亚汽车站（Estación de Autobuses）有固定的巴士班次开往Coca，车程大约1小时，但班次不算密集，通常一天3-4班，最好提前查好时刻表规划好往返时间。最灵活的方式是从马德里或塞哥维亚租车自驾，沿着A-6和CL-605公路行驶，全程约一个半小时，沿途是广袤的卡斯蒂利亚平原风光，体验绝佳。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事的开端，要追溯到15世纪中后期的西班牙。那时候，漫长的“收复失地运动”已近尾声，基督教王国重新掌握了伊比利亚半岛的大部分土地，但几个世纪的文化交融已经深深刻进了这片土地的肌理。1492年格拉纳达陷落的前夕，在卡斯蒂利亚王国的心脏地带，一位名叫阿方索·德·丰塞卡的大主教，决定为自己显赫的家族建造一座配得上其地位的宅邸。丰塞卡家族权势熏天，这位大主教本人不仅是塞维利亚的大主教，更是国王费尔南多二世和伊莎贝拉一世（就是资助哥伦布的那两位天主教双王）的亲密顾问。他想要的，不是一座简单的乡村别墅，而是一个既能彰显家族荣耀，又能稳固统治、享受生活的坚固堡垒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，在1453年左右，工程开始了。选址极具战略眼光，位于两条河流的交汇处，天然提供了护城河的水源。但真正让这座城堡青史留名的，不是它的位置，而是它的建造者和建造方式。阿方索大主教没有完全遵循当时基督教世界流行的纯哥特式或即将兴起的文艺复兴风格，他做出了一个大胆甚至有些叛逆的决定：雇佣了最好的摩尔人（即西班牙穆斯林）工匠。这些工匠的祖先可能曾为科尔多瓦的哈里发或格拉纳达的苏丹工作，他们掌握着传承数百年的、无与伦比的砖砌工艺和几何装饰智慧。在基督教领主的资助下，他们将安达卢西亚的灵魂，注入了这座基督教贵族的城堡之中。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这就是“穆德哈尔风格”的奇迹。你能看到城堡的主体结构是晚期哥特式的，比如它高高的城墙、尖锐的拱券和用于防御的布局。但当你细看，所有的“皮肤”和“纹饰”都是伊斯兰的。工匠们用一块块烧制的泥砖，像编织地毯一样，编织出令人眼花缭乱的图案：交织的菱形、复杂的星形、库法体书法般的抽象线条。这些图案不仅为了美观，砖块层层挑出的结构本身也构成了阳台、檐口和雉堞，功能与装饰天衣无缝。城堡内部原本奢华无比的装饰（可惜大多已毁）也遵循此道。这就像一场静默的对话，征服者与被征服者的文化，在砖石之间达成了某种默契与共谋，创造出了一种全新的、只属于西班牙的身份标识。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡建成后，一直是阿尔瓦伯爵（丰塞卡家族的后裔）的财产，经历了从军事要塞到豪华贵族官邸的转变。它见证了西班牙帝国的黄金时代，也经历了后来的衰落。战争的风雨并未过多侵蚀它，真正带来转折的是19世纪。随着贵族势力的式微和社会变革，城堡逐渐被荒废。它一度被用作谷仓，甚至面临着被拆毁、砖块被拿去修路的危险。你能想象吗？这样一件艺术品，差一点就变成了某段乡间小道的铺路石。直到20世纪，国家才意识到它的价值，将其收归国有并进行了一系列修复。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如今，你走进城堡，会发现它的内部相对空旷，昔日的华丽装潢已难觅踪迹。这里曾一度被用作林业工程师的培训学校，空旷的大厅里仿佛还回荡着另一种意义上的“传承”。这种略带苍凉的空，反而给了你最大的想象空间。你可以触摸那些冰冷却又带着阳光余温的砖墙，想象五百多年前，摩尔工匠们如何用心计算每一块砖的位置，基督教的贵族们如何在装饰着阿拉伯花纹的厅堂里举行宴会，历史的层层面纱就在你的指尖变得具体而生动。可可城堡的砖石，每一块都凝结着一段复杂而辉煌的过去，它不仅仅是丰塞卡家族的城堡，更是整个西班牙文化交融史的一个凝固的瞬间。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`游览可可城堡，我强烈建议你安排一个完整的下午。最好在下午三点左右抵达Coca小镇，这个时间避开了西班牙漫长的午休时段，城堡已经重新开放，而灼人的正午烈日也开始变得温和。整体游览时间大约需要3小时，节奏应该是从容不迫的“由外至内，由下至上”。先花足够的时间在城堡外围和护城河边漫步，感受它的全景和气场，这是任何内部参观都无法替代的体验。然后进入城堡内部，按照从庭院到主塔，最后登上城垛的顺序探索。这样的安排，能让你的情绪和感官有一个逐步递进、最终在制高点获得全景释放的过程，完美地捕捉到城堡在傍晚金色光线中最美的模样。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必提前查好开放时间，尤其是冬季的下午场开放时间很短，很可能下午四点后就不让进入了。参观城堡内部需要上下许多陡峭、狭窄且光滑的原始石阶，穿一双舒适防滑的鞋子至关重要，高跟鞋在这里是绝对的灾难。公共交通班次稀少，强烈建议自驾前往，这样你才能自由掌控时间，并在游览结束后悠闲地在Cosa小镇吃个晚餐。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在城堡外围的停车场后，先别急着进去，务必绕到护城河的另一侧，找个长椅坐下，好好端详这座粉色巨物在水中的完整倒影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着护城河漫步一周，从不同角度观察城堡砖墙上那些令人惊叹的几何图案，感受光线移动时墙面色彩发生的微妙变化。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`通过古老的石桥跨过护城河，走进阴凉的门楼，触摸那厚重木门上巨大的铁制铆钉，想象自己是一位中世纪访客。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入主庭院，抬头环视四周，注意那些砖砌的回廊和上层窗户上精美的穆德哈尔式镂空装饰，感受伊斯兰美学在基督教空间中的流淌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`不要错过通往地下室的狭窄石阶，去探访一下当年储存粮食和酒类的拱顶地窖，那里温度骤降，空气中仿佛还带着陈年谷物和石头的气味。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主塔内部陡峭的螺旋石阶向上攀登，在昏暗的光线中扶墙而上，你的脚步声在筒状空间里发出清晰的回响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上主塔顶层的领主大厅，虽然内部已空，但巨大的空间感和高高的拱顶依然能让你想象出当年贵族生活的气派。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，一定要登上城墙的最高处，沿着城垛慢慢走一圈，让视野毫无阻挡地投向四面八方广袤无垠的卡斯蒂利亚平原。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`护城河东南角外侧`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到六点，阳光从西侧照射城堡正面，此时在河对岸可以拍到城堡主体及其完美倒影，使用偏光镜可以消除水面反光，让倒影更清晰。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主庭院中心仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射入庭院，抬头用广角镜头拍摄，可以捕捉到回廊精美的砖砌图案与蓝天构成的几何框架，构图极具冲击力。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`主塔螺旋石阶梯中段`}</h4>
                  <p className="text-sm text-gray-700">{`利用石阶自身形成的螺旋曲线构图，让一束从高处箭窗射入的光线成为视觉引导，拍出具有强烈纵深感和神秘氛围的照片。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`西面城墙的城垛上`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，这里是黄金机位，你可以将城堡一部分砖砌的雄堞作为前景，以被夕阳染成金红色的辽阔平原为背景，拍出孤寂而壮美的史诗感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城堡北侧外围的松林边`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚柔和光线下，以部分松枝作为自然画框，拍摄城堡隐匿于树林之后的远景，突出其如梦似幻的童话氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`建议携带一个偏振镜（CPL），它能极大地提升拍摄效果，尤其在对付护城河水面反光和增强砖墙色彩饱和度方面。城堡内部大部分区域允许拍照，但严禁使用闪光灯和三脚架（除非有特殊许可），这是为了保护古迹。无人机飞行在城堡上空通常受到严格管制，未经许可是禁止的，请不要冒险尝试。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`小镇温情`}</h4>
                  <p className="text-sm text-blue-800">{`入住Coca镇上由百年老宅改造的家庭旅馆，房间简单干净，老板会热情地为你推荐镇上只有本地人才知道的小餐馆，晚上听着教堂钟声入眠。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`古堡侧影`}</h4>
                  <p className="text-sm text-green-800">{`选择距离城堡步行仅十分钟的一家乡村酒店，它由古老的庄园宅邸修复而成，石头外墙爬满藤蔓，在房间的小阳台上就能瞥见城堡的塔楼。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`塞哥维亚古城沉浸`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车半小时回到世界遗产城市塞哥维亚，住在古城中心广场旁的精品酒店，白天看城堡，晚上品尝著名的烤乳猪，在罗马水道桥的灯光下散步，获得双重文化体验。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`平原奢华度假`}</h4>
                  <p className="text-sm text-purple-800">{`如果你追求极致放松，可以预订塞哥维亚郊外被橡树林包围的奢华庄园酒店（Parador），在历史悠久的大宅里享受泳池、美食和绝对静谧的星空之夜。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`Coca镇非常小，住宿选择有限且条件相对朴素，如果你对舒适度要求较高，更建议以塞哥维亚作为住宿基地。在旅游平季（春季和秋季）预订塞哥维亚的酒店性价比最高。如果选择住在Coca，请务必提前确认酒店是否提供晚餐或早餐，因为小镇晚上的餐饮选择可能非常少。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开可可城堡很久之后，闭上眼，那片粉红色的光影依然会在脑海里浮动。它带给我的，远不止是视觉上的惊艳。那是一种非常复杂的感受，关于美如何在最不可能的地方、以最坚韧的方式生长出来。想象一下，在刀剑与信仰激烈碰撞的年代，一群人却选择用最耐心、最精细的手艺，去砌筑一道墙，去雕琢一座堡垒。这本身就像一个巨大的隐喻：文明的力量，或许不在于彻底的征服或抹杀，而在于这种沉默的渗透、借鉴与再创造。那些摩尔工匠在砖块上刻下的，不只是图案，更是一种无法被武力消灭的文化基因，它最终以另一种形式，成为了西班牙骄傲的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求快速、同质化的世界里，可可城堡像一位安静而固执的讲述者。它不张扬，甚至有些偏僻，需要你专程去寻找。但正是这份“不便利”，过滤掉了喧闹的浮光掠影，留下了真正愿意倾听的旅人。站在它的城垛上，望着无边无际的、被风吹拂的原野，你会感到一种深沉的宁静和历史的重力。它不是迪士尼式的童话城堡，它的美带着泥土的质感、战争的记忆和文明交融的厚重体温。每一位热爱深度游的旅人，都应该来感受一下这份独特的温度，触摸这些会讲故事的粉红色砖石，让自己短暂地沉浸在那段剑与砖、血与诗共同写就的传奇里。这不仅仅是一次旅行，更是一场与历史复杂灵魂的对话。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/leon-old-town-historic-center" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莱
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莱昂老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">León Old Town</p>
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
              <a href="/attractions/caceres-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡塞雷斯老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cáceres</p>
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
