import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '施泰尔老城 Steyr｜感受被时光吻过的奥地利铁都 - 最佳欧洲景点',
  description: '如果你以为奥地利的精髓只在维也纳的金色大厅或萨尔茨堡的莫扎特巧克力球里，那施泰尔老城会给你一个带着铁锈味与河水清香的温柔反驳。我的第一脚，是踏在施泰尔河畔那块被磨得光滑如镜的鹅卵石上，清晨的阳光斜斜地切开河面的薄雾，对岸那一排鹅黄、淡粉、薄荷绿的老房子，像一块浸在牛奶里的马卡龙，甜蜜得不真实。空气里...',
}

export default function SteyrOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '施泰尔老城', href: '/attractions/steyr-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`施泰尔老城・Steyr・奥地利・施泰尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`如果你以为奥地利的精髓只在维也纳的金色大厅或萨尔茨堡的莫扎特巧克力球里，那施泰尔老城会给你一个带着铁锈味与河水清香的温柔反驳。我的第一脚，是踏在施泰尔河畔那块被磨得光滑如镜的鹅卵石上，清晨的阳光斜斜地切开河面的薄雾，对岸那一排鹅黄、淡粉、薄荷绿的老房子，像一块浸在牛奶里的马卡龙，甜蜜得不真实。空气里有烘焙店刚出炉的“林茨蛋糕”的黄油香，混合着从古老石缝里渗出的、一丝凉润的河水气息。
这里没有游客的洪流，只有本地人生活的潺潺溪流。穿西装的男士骑着老式自行车叮铃铃地掠过，车篮里插着新鲜的长棍面包；老奶奶们坐在“ Stadtplatz ”（城市广场）的铸铁长椅上，用带着上奥地利州口音的德语聊着家常，声音轻快得像屋檐下的风铃。施泰尔的魅力，在于它那种“被使用着的美”。那些华丽的巴洛克立面不是博物馆的展品，里面可能就是一家五金店、一个牙医诊所，或者藏着祖传秘方的肉铺。工业城市的实用主义与中世纪小镇的浪漫美学，在这里达成了奇妙的和解。
最打动人心的，是那条名叫“施泰尔”的翡翠色小河本身。它并非风景画里的点缀，而是老城的脊柱与脉搏。我沿着“铁桥”走，能看到河水如何温柔地环抱每一栋建筑，如何在古老的堰坝处激起细碎的白浪，发出永恒的潺潺声。几百年来，正是这水流驱动了锻锤，滋养了工厂，也最终洗涤了工业的烟尘，让老城在后工业时代找到了宁静的诗意。站在两河交汇的尖角地带，看着恩斯河的浑黄与施泰尔河的碧绿缠绵交织，你会瞬间明白，这座城的灵魂，一半是火焰（钢铁），一半是流水。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果你以为奥地利的精髓只在维也纳的金色大厅或萨尔茨堡的莫扎特巧克力球里，那施泰尔老城会给你一个带着铁锈味与河水清香的温柔反驳。我的第一脚，是踏在施泰尔河畔那块被磨得光滑如镜的鹅卵石上，清晨的阳光斜斜地切开河面的薄雾，对岸那一排鹅黄、淡粉、薄荷绿的老房子，像一块浸在牛奶里的马卡龙，甜蜜得不真实。空气里有烘焙店刚出炉的“林茨蛋糕”的黄油香，混合着从古老石缝里渗出的、一丝凉润的河水气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里没有游客的洪流，只有本地人生活的潺潺溪流。穿西装的男士骑着老式自行车叮铃铃地掠过，车篮里插着新鲜的长棍面包；老奶奶们坐在“ Stadtplatz ”（城市广场）的铸铁长椅上，用带着上奥地利州口音的德语聊着家常，声音轻快得像屋檐下的风铃。施泰尔的魅力，在于它那种“被使用着的美”。那些华丽的巴洛克立面不是博物馆的展品，里面可能就是一家五金店、一个牙医诊所，或者藏着祖传秘方的肉铺。工业城市的实用主义与中世纪小镇的浪漫美学，在这里达成了奇妙的和解。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，是那条名叫“施泰尔”的翡翠色小河本身。它并非风景画里的点缀，而是老城的脊柱与脉搏。我沿着“铁桥”走，能看到河水如何温柔地环抱每一栋建筑，如何在古老的堰坝处激起细碎的白浪，发出永恒的潺潺声。几百年来，正是这水流驱动了锻锤，滋养了工厂，也最终洗涤了工业的烟尘，让老城在后工业时代找到了宁静的诗意。站在两河交汇的尖角地带，看着恩斯河的浑黄与施泰尔河的碧绿缠绵交织，你会瞬间明白，这座城的灵魂，一半是火焰（钢铁），一半是流水。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`施泰尔老城`} />
                <InfoRow label="英文名称" value={`Steyr`} />
                <InfoRow label="正式名称" value={`施泰尔历史中心`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`施泰尔`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座因“铁”而兴、跨越千年的中世纪贸易与工业重镇，被誉为“奥地利的钢铁心脏”。`} />
                <InfoRow label="建筑特色" value={`施泰尔河与恩斯河交汇处的三角形古老街区，色彩柔和的巴洛克与文艺复兴立面之下，是坚固的哥特式核心与历经沧桑的铸铁艺术细节。`} />
                <InfoRow label="建筑风格" value={`以晚期哥特式为基础，融合了文艺复兴、巴洛克及比德迈风格的奇妙混合体。`} />
                <InfoRow label="文化价值" value={`是奥地利从中世纪手工业行会到近代工业革命的历史活化石，完美体现了人文主义精神与工业力量的和谐共生。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`公共区域全天开放。内部景点如伯姆瑟屋、施泰尔铸铁博物馆等开放时间为周二至周日 10:00 - 17:00，周一闭馆。圣诞市场期间（11月下旬至12月23日）广场区域有特殊活动安排。多数商店营业时间为周一至周五 9:00-18:00，周六至13:00。`} />
              <InfoRow label="门票价格" value={`漫步老城街区本身免费。主要收费景点：施泰尔铸铁博物馆成人票8欧元，优惠票6欧元；伯姆瑟屋导览游成人票7欧元。持有“上奥地利州城堡卡”可免费进入多个合作景点。`} />
              <InfoRow label="地址" value={`Stadtplatz 1, 4400 Steyr, Austria`} />
              <InfoRow label="交通方式" value={`从林茨机场出发，乘坐出租车约40分钟可达，费用约70欧元。更经济的方案是：从林茨中央火车站搭乘REX或S-Bahn区域火车前往施泰尔火车站，车程约30-40分钟，班次密集（约每小时2-3班），票价约10欧元。从维也纳出发，可乘火车至林茨（约1.5小时）再换乘。自驾可将车停在老城边缘的“Parkdeck Tabor”停车场，步行5分钟进入核心区。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起施泰尔的故事，得从它的名字开始。“Steyr”这个词源自古高地德语的“stieren”，意为“坚硬”，与“钢铁”一词同根同源。这不是巧合。早在公元前，凯尔特人就在附近的埃拉山上开采铁矿。但真正的传奇始于公元980年，奥托大帝将这片土地赐予巴伐利亚的“ Sieghardinger ”伯爵家族。他们在两河交汇的岩石山丘上建起了第一座城堡，掌控着水路与矿路，一个定居点就此萌芽。中世纪的施泰尔，是“铁”的天下。河岸边竖起了无数水车驱动的锻锤，敲击声昼夜不息，工匠们打造的武器、盔甲和农具，顺着恩斯河运往多瑙河，远销四方。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`老城的命运与几个关键家族紧紧绑在一起。首先是“施泰尔”家族，他们的族徽——一只后腿直立的金色豹——至今仍是城市的象征。14世纪，随着铁矿开采和锻造业被授予城市特许状，施泰尔迎来了黄金时代。财富涌流，行会势力强大，我们今天看到的城市广场那些宏伟的市民住宅，很多都建于那时。然而，真正的转折点发生在15世纪，一个名叫“巴托洛梅·伯姆瑟”的富商登场了。他不仅是成功的铁器贸易商，更是一位有远见的人文主义者和艺术赞助人。他建造了那栋被誉为“阿尔卑斯山以北最美丽市民住宅”的伯姆瑟屋，其华丽的晚期哥特式浮雕立面，描绘着寓言、神话和世俗生活，如同一本石头雕刻的文艺复兴教科书，将意大利的新风吹进了这座工业城镇。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`宗教改革与三十年战争给施泰尔带来了动荡，但巴洛克时代又为它披上了新的华服。17世纪末18世纪初，许多中世纪建筑被赋予了华丽的灰泥立面、曲线上楣和柔和的色彩，形成了今天老城那种层叠的、如蛋糕般的视觉盛宴。19世纪的工业革命，将施泰尔推向了另一个巅峰——它成了奥地利的武器制造中心，著名的“斯太尔”枪械品牌就诞生于此。工厂的烟囱在老城边缘升起，但令人惊叹的是，古老的市中心并未被拆除，而是被小心翼翼地保存了下来。二战的炸弹曾带来创伤，但战后的人们选择了精心修复，而非推倒重来。于是，你看到的不是一个僵化的博物馆，而是一个层层累积、不断演化的生命体：哥特式的筋骨、文艺复兴的智慧、巴洛克的欢愉、工业时代的力道，全都沉淀在每一块砖石、每一扇铁艺窗棂里。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味施泰尔老城，请务必安排一整天时间，并抱着“迷失”的心态。建议早上9点前抵达，这时阳光柔和，店铺刚开，老城还未完全苏醒，最适合拍照和感受宁静。整体游览节奏应是慢行的、迂回的，核心逻辑是“先高后低，环水而行”：先从制高点宏观看城，再深入街巷微观品味，最后让河流引领你的脚步。上午重点探索山顶城堡遗迹和老城广场周边建筑细节，中午在河畔餐厅享用当地美食，下午沿着河岸漫步，参观博物馆和特色工坊，傍晚时分一定要回到两河交汇处，看落日余晖将建筑染成蜜糖色。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`老城街道多为鹅卵石路面，请务必穿一双舒适防滑的步行鞋，高跟鞋在这里将是灾难。许多小店和餐馆周一休息，计划行程时请避开。当地人都很友善，但主动用德语说一句“Grüß Gott”（你好）会瞬间拉近距离。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从“拉姆山顶”的观景台开始，让自己被施泰尔老城那三角形的、被双河环抱的完整画卷瞬间征服。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着陡峭蜿蜒的“城堡阶梯”下山，用手触摸被无数代人脚步磨圆了的石阶，感受历史的下行。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在老城广场中央的“瘟疫纪念柱”下驻足，仰头细看那些繁复的巴洛克雕塑，并观察广场四周建筑立面上色彩与装饰的微妙竞赛。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要推开伯姆瑟屋那扇不起眼的门，参加导览，让讲解员为你揭示外墙浮雕上那些关于美德、行星和手工业的隐秘寓言。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一家临河的咖啡馆，比如“Café am Stadtplatz”，点一杯“Melange”咖啡和一块本地特色的“Steyrer Rahmherz”甜点，就坐在窗边看河水流淌与对岸的行人。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着施泰尔河左岸的“Werndlpark”绿地慢慢走，你会路过古老的堰坝和水车遗迹，听到水流永不止息的轰鸣，那是这座城古老的心跳声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跨过那座标志性的绿色“铁桥”，走到对岸，回望老城建筑在水中的完美倒影，这是摄影师最爱的经典视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在夕阳西下前，回到两河交汇的“尖角”，坐在长椅上，静静地看翡翠绿与土黄色两种河水如何相互渗透、拥抱，最终不分彼此地流向远方。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`拉姆山观景台全景位`}</h4>
                  <p className="text-sm text-gray-700">{`清晨日出后一小时或日落前一小时，光线最为柔和，能拍到老城沐浴在金辉中、双河如缎带环绕的明信片角度，使用长焦镜头可以压缩空间，突出建筑的密集感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`施泰尔河畔倒影拍摄点`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗无风的上午，站在“铁桥”西侧约50米的河岸步道上，将相机贴近水面，能拍出老建筑与蓝天白云在翡翠色河水中完美对称的梦幻画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`伯姆瑟屋浮雕细节特写`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射时，虽然不利于拍建筑全景，但却是捕捉其外墙晚期哥特式浮雕细节的最佳时机，光影能强化雕刻的立体感，建议使用定焦镜头。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`老城小巷光影走廊`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，阳光斜射进“Schmiedgasse”（铁匠巷）这样狭窄的街道，会在色彩斑斓的墙面上投下迷人的光影，等待一个当地人骑车或步行的瞬间按下快门，让画面充满故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`两河交汇处航拍视角`}</h4>
                  <p className="text-sm text-gray-700">{`如果条件允许，在尖角公园附近起飞无人机，垂直俯瞰，可以拍到恩斯河与施泰尔河那清晰分明又缠绵交融的水纹，这是理解这座城市地理灵魂的上帝视角。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用三脚架在公共区域拍摄一般无障碍，但请保持礼貌，不要阻碍行人通道。无人机飞行需遵守奥地利法规，注意避开人群和私人院落。拍摄当地居民时，请先微笑示意，获得默许后再拍，尊重隐私。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河边历史小屋`}</h4>
                  <p className="text-sm text-blue-800">{`直接住在施泰尔河畔一栋16世纪翻新的木筋屋民宿里，夜晚枕着潺潺水声入眠，清晨被对面面包房的香气唤醒，是沉浸式体验。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`广场精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`选择位于老城广场一角的家族经营精品酒店，房间窗户正对巴洛克立面，下楼即是咖啡馆和集市，地理位置无与伦比。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`山腰静谧客栈`}</h4>
                  <p className="text-sm text-yellow-800">{`位于拉姆山半山腰的安静客栈，由一对艺术家夫妇经营，房间装饰个性十足，露台能俯瞰老城屋顶全景，适合追求宁静与视野的旅行者。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计感河滨公寓`}</h4>
                  <p className="text-sm text-purple-800">{`在老城边缘由旧工厂改造的LOFT风格公寓，保留了工业元素如红砖墙和钢梁，空间开阔，厨房设施齐全，适合家庭或长住客。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城核心区住宿数量有限，尤其在夏季音乐节和圣诞市场期间非常紧俏，建议至少提前两个月预订。施泰尔治安极好，夜晚独自在老城区行走也很安全。住在河边虽美，但夏季可能会有小飞虫，建议选择带纱窗的住所。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开施泰尔好些天了，我耳边似乎还响着那河水永不停歇的潺潺声。这座老城给我的，不是那种令人屏息的、殿堂级的震撼，而是一种绵长的、浸润身心的安慰。它让我看到，历史并非总是断裂与遗忘，也可以是温柔的层叠与延续。一个地方可以既是“钢铁心脏”，充满力量与火花，同时又拥有一副“水流骨架”，如此灵动与温柔。这种刚与柔、力与美的平衡，在当今这个非黑即白的世界里，显得格外珍贵。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了那些被旅游大巴塞满的“必打卡”之地，渴望一场与真实历史肌理的对话，那么请来施泰尔吧。来这里，不是为了收集又一个景点印章，而是为了体验一种完整的生活方式——一种将工作（哪怕是锻造钢铁）与艺术、将河流的实用与诗意、将过往的荣耀与当下的宁静完美融合的生活方式。它不会尖叫着吸引你的注意，只会等你静下来，坐在河边的长椅上，才会把它的故事，通过风声、水声和面包的香气，轻轻地、慢慢地讲给你听。这是一份需要耐心聆听的礼物，而每一位愿意付出这份耐心的旅人，都将收获一片属于自己的、奥地利最真实的灵魂拼图。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bad-ischl" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴德伊舍</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bad Ischl</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gmunden-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格蒙登城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gmunden Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/hall-in-tirol" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hall in Tirol</p>
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
