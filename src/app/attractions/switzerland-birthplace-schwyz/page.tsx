import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '施维茨 Schwyz｜瑞士联邦的隐秘心脏，探寻八百年联邦精神的起源之地 - 最佳欧洲景点',
  description: '当你从火车上下来，踏入施维茨，第一感觉可能不是震撼，而是一种奇特的宁静与厚重。这里没有熙熙攘攘的旅游大巴，没有夺目的天际线。阳光透过干净的空气，洒在连绵的绿色山坡和红瓦屋顶上，远处是沉默的、戴着雪帽的阿尔卑斯群峰。空气中是青草、奶牛气息和偶尔飘来的木材厂淡淡清香混合的味道，那是瑞士中部乡村最本真的气...',
}

export default function SwitzerlandBirthplaceSchwyzPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '施维茨', href: '/attractions/switzerland-birthplace-schwyz' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`施维茨・Schwyz・瑞士・施维茨州， 施维茨镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你从火车上下来，踏入施维茨，第一感觉可能不是震撼，而是一种奇特的宁静与厚重。这里没有熙熙攘攘的旅游大巴，没有夺目的天际线。阳光透过干净的空气，洒在连绵的绿色山坡和红瓦屋顶上，远处是沉默的、戴着雪帽的阿尔卑斯群峰。空气中是青草、奶牛气息和偶尔飘来的木材厂淡淡清香混合的味道，那是瑞士中部乡村最本真的气味。耳边不是城市的喧嚣，而是教堂准点的钟声，清脆地敲打在空旷的广场上，回声悠长。
你会立刻明白，这不是一个用来“观看”的景点，而是一个需要“感受”的场所。小镇的中心广场上，人们骑着自行车经过，在咖啡馆外悠闲地喝着咖啡，生活节奏不紧不慢。那座有着深色木筋墙和华丽彩绘立面的市政厅，就静静地立在广场一边，仿佛一位褪去戎装的长者，平和地注视着日常的一切。它的威严不在高度，而在那份历经数百年风雨沉淀下来的从容。在这里，历史不是玻璃柜里的标本，而是流淌在街道名字里、镌刻在建筑山墙上、渗透在当地人沉稳气质中的活生生的东西。
最打动人的，正是这种反差与统一。施维茨，这个给予整个国家名字的地方，竟是如此低调、谦逊，甚至有些内敛。它没有将自己标榜为“首都”，而是安然地做着一个富裕、美丽的州镇。然而，当你走进联邦宪章博物馆，看到那张1291年写在羊皮纸上的简陋盟约时，一种巨大的情感冲击会迎面而来。那些朴素的文字，不是为了建立帝国，而是为了守护山谷、抵御强权、相互帮助。那份契约精神，那份对自由和自治的执着，正是从这个看似平凡的山谷中萌芽，最终生长成瑞士联邦的参天大树。施维茨的核心魅力，就在于它让你触摸到了这个现代国家最古老、最温热的心脏跳动。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你从火车上下来，踏入施维茨，第一感觉可能不是震撼，而是一种奇特的宁静与厚重。这里没有熙熙攘攘的旅游大巴，没有夺目的天际线。阳光透过干净的空气，洒在连绵的绿色山坡和红瓦屋顶上，远处是沉默的、戴着雪帽的阿尔卑斯群峰。空气中是青草、奶牛气息和偶尔飘来的木材厂淡淡清香混合的味道，那是瑞士中部乡村最本真的气味。耳边不是城市的喧嚣，而是教堂准点的钟声，清脆地敲打在空旷的广场上，回声悠长。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你会立刻明白，这不是一个用来“观看”的景点，而是一个需要“感受”的场所。小镇的中心广场上，人们骑着自行车经过，在咖啡馆外悠闲地喝着咖啡，生活节奏不紧不慢。那座有着深色木筋墙和华丽彩绘立面的市政厅，就静静地立在广场一边，仿佛一位褪去戎装的长者，平和地注视着日常的一切。它的威严不在高度，而在那份历经数百年风雨沉淀下来的从容。在这里，历史不是玻璃柜里的标本，而是流淌在街道名字里、镌刻在建筑山墙上、渗透在当地人沉稳气质中的活生生的东西。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，正是这种反差与统一。施维茨，这个给予整个国家名字的地方，竟是如此低调、谦逊，甚至有些内敛。它没有将自己标榜为“首都”，而是安然地做着一个富裕、美丽的州镇。然而，当你走进联邦宪章博物馆，看到那张1291年写在羊皮纸上的简陋盟约时，一种巨大的情感冲击会迎面而来。那些朴素的文字，不是为了建立帝国，而是为了守护山谷、抵御强权、相互帮助。那份契约精神，那份对自由和自治的执着，正是从这个看似平凡的山谷中萌芽，最终生长成瑞士联邦的参天大树。施维茨的核心魅力，就在于它让你触摸到了这个现代国家最古老、最温热的心脏跳动。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`施维茨`} />
                <InfoRow label="英文名称" value={`Schwyz`} />
                <InfoRow label="正式名称" value={`Canton of Schwyz`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`施维茨州， 施维茨镇`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`1291年《永久同盟誓约》的签署州之一，瑞士联邦的命名来源与精神摇篮。`} />
                <InfoRow label="建筑特色" value={`分散的田园村落与庄严的市政、宗教建筑和谐共存，以宏伟的“施维茨风格”木筋墙豪宅最为典型。`} />
                <InfoRow label="建筑风格" value={`以16-18世纪繁荣时期兴建的“施维茨风格”晚期哥特式及文艺复兴式木筋墙民居为核心，融合了巴洛克教堂与近代建筑。`} />
                <InfoRow label="文化价值" value={`不仅是地理名称，更是一种国家身份与直接民主精神的象征与活态承载。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`这是一个全年开放的活态城镇。主要参观景点“联邦宪章博物馆”（Bundesbriefmuseum）开放时间通常为周二至周日，上午10:00至下午5:00（冬季可能缩短至下午4:00）。市政厅等公共建筑在工作日办公时间通常可进入部分区域参观。教堂的开放时间较为灵活，一般在白天均可进入。建议出行前查询博物馆官网确认最新时间。`} />
              <InfoRow label="门票价格" value={`进入施维茨镇本身免费。联邦宪章博物馆门票约为8瑞士法郎（成人），提供学生、团体及家庭优惠票。市政厅等公共建筑参观通常免费，但接受捐赠。教堂免费开放。`} />
              <InfoRow label="地址" value={`Bundesbriefmuseum， Bahnhofstrasse 20， 6430 Schwyz， Switzerland`} />
              <InfoRow label="交通方式" value={`从苏黎世国际机场出发是最佳选择。首先乘坐火车前往苏黎世中央火车站（约10-15分钟，班次频繁）。在中央火车站转乘直达施维茨的火车（IC或IR线），车程约45-50分钟，每小时至少1-2班。抵达施维茨火车站后，所有核心景点（博物馆、市政厅、主广场）均在步行10-15分钟范围内，小镇布局紧凑，非常适合漫步探索。使用瑞士旅行通票（Swiss Travel Pass）可覆盖全程交通。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解施维茨，你必须把时钟拨回到800年前的中世纪。那时的瑞士中部，是崎岖的阿尔卑斯山谷地，散布着以畜牧业和少量耕作维生的自由农民社区。施维茨这个名字最早出现在公元972年的一份捐赠文书中。这片土地名义上属于神圣罗马帝国，但天高皇帝远，真正的威胁来自日益扩张的哈布斯堡家族，他们企图将势力深入这些山谷，剥夺当地社区传统的自由权利。压力像山间的浓雾一样弥漫开来，让乌里、施维茨和下瓦尔登这三个“森林州”的人们感到了迫在眉睫的危险。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转折点发生在1291年8月初。据说，在卢塞恩湖附近的吕特利草地上，来自三个社区的代表秘密集会。没有盛大的仪式，没有华丽的宫殿，只有山风、树林和一群决心捍卫家园的汉子。他们签署了一份拉丁文的盟约，这就是后世尊崇的《永久同盟誓约》。盟约的核心极其朴素：互相援助，共同御敌，拒绝接受任何来自外部的法官。施维茨，作为其中坚定的一员，将它的名字永远刻在了历史的开端。这份盟约不是为了征服，而是为了守护；不是为了扩张权力，而是为了限制权力。这是一种基于实用主义和共同生存智慧的联合。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`盟约的效力很快得到了血的检验。1315年，在莫尔加滕战役中，主要由施维茨和乌里农民组成的步兵，利用熟悉的地形和灵活的战术，惊人地击败了哈布斯堡公爵装备精良的骑兵大军。这场胜利像一道惊雷，宣告了山地同盟的不可小觑，也极大地巩固了同盟的团结。从那时起，“施维茨人”以其勇猛善战闻名，他们的名号甚至成为了整个同盟的代称。当后来同盟逐渐扩大，与外部世界交往时，“瑞士”这个称呼，便从“施维茨”演化而来。一个地区的名字，最终成了一个国家的名字，这在世界历史上也极为罕见。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`随着同盟的巩固和壮大，施维茨也迎来了自己的黄金时代。从15世纪起，许多施维茨人作为雇佣兵在欧洲各国宫廷服务，他们以忠诚和勇武著称，带回了可观的财富和见识。这些财富没有用来修建巨大的城堡或宫殿，而是流入了家乡的建设。于是，一种独特的“施维茨风格”建筑出现了——宏伟的民居（称为“Herrenhaus”），拥有宽阔的对称立面、精美的彩绘、突出的屋檐和大量木材与石料的结合。它们不是贵族的府邸，而是富裕公民的住宅，彰显着一种基于努力、商业和共同体自豪的资产阶级自信。今天漫步在老城区，这些历经四五百年依然坚固华美的建筑，无声地诉说着那段繁荣岁月。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`历史的洪流继续向前。瑞士联邦历经演变，最终形成了现代的联邦制国家。施维茨作为创始州，始终在联邦体系中保持着独特的地位和强烈的身份认同。它珍视自己的历史，但并未沉溺其中。那份古老的盟约精神——自治、互助、务实——依然深深植根于本地的政治与文化生活中。当你看到保存完好的古老文献、维护精致的传统建筑与现代化设施完美并存时，你就会明白，施维茨的故事从未结束。它是一本活着的史书，每一代人都在续写新的篇章，而扉页上永远铭刻着1291年那个决定命运的选择。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天的时间，从容地浸入施维茨的历史氛围。最好在上午9点半左右抵达，这时小镇刚刚苏醒，阳光柔和，博物馆也刚开始接待访客。整体游览节奏应是“先内后外，由静至动”：上午聚焦于室内博物馆和核心历史建筑，吸收厚重的信息；下午则在小镇街巷漫步，感受生活气息，最后用一段轻松的山谷徒步收尾，将历史与自然景观联系起来。这样的安排让你既能深入理解其精神内核，又能体验它作为宜居之地的日常之美，形成立体而完整的印象。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周一通常是博物馆的闭馆日，务必避开否则会错过核心展品。小镇生活节奏宁静，餐厅午休时间可能较长（如下午1:30至5点不营业），建议安排好午餐时间或提前准备小吃。进入教堂和市政厅等场所请保持安静，穿着需得体。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨抵达后首先直奔联邦宪章博物馆，在安静的展厅里凝望那张改变了历史的羊皮纸，感受穿越七个世纪的震撼`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从博物馆出来后慢慢散步到镇中心的主广场，仔细端详施维茨市政厅外墙精美的彩绘和威严的建筑格局`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开市政厅厚重的大门走入内部，仰望装饰着联邦各州徽章和壁画的历史大厅，想象当年重要的社区集会在此举行`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步行至不远处的圣马丁教堂，在宁静的巴洛克内饰中坐一会儿，听一听古老的管风琴是否恰好奏响`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在老城街巷中随意迷失，寻找那些隐藏在转角、拥有华丽湿壁画和凸窗的“施维茨风格”木筋墙老宅`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一家广场旁的露天咖啡馆坐下，点一杯本地咖啡或苹果汁，看着市政厅的钟楼影子在地上缓缓移动`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间和体力允许，从镇子边缘找一条小径向附近的低山或田野散步，回望红瓦屋顶的小镇镶嵌在巍峨群山怀抱中的全景`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分回到火车站，在离开前最后看一眼山谷的夕阳，让这片土地沉静而强大的力量留在记忆深处`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`老城广场东南角仰拍市政厅`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点的侧光能完美勾勒出建筑木筋墙的立体感和彩绘的鲜艳色泽，将广场上的行人作为前景更显生动`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从霍夫街看向圣马丁教堂钟楼`}</h4>
                  <p className="text-sm text-gray-700">{`清晨的阳光恰好照亮教堂的巴洛克式尖顶，以街道两旁色彩柔和的古老民居作为框架式构图，营造出静谧的生活史诗感`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`联邦宪章博物馆后的庭院`}</h4>
                  <p className="text-sm text-gray-700">{`这里有一面古老的石墙和绿植，将展示1291年盟约复制品的展窗作为焦点拍摄，光线透过玻璃在羊皮纸上形成反光，历史感扑面而来`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`小镇南侧稍高的居住区小路`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚日落前半小时，从这里可以拍到小镇层层叠叠的屋顶背后衬着雄伟的米滕山和朦胧的远山，炊烟袅袅，温暖而壮丽`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`市政厅内部历史大厅的穹顶壁画`}</h4>
                  <p className="text-sm text-gray-700">{`使用广角镜头，将大厅内精美的木质走廊、徽章壁画和吊灯一同纳入镜中，注意利用窗户进来的自然光，避免使用闪光灯`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄私人住宅（即使非常古老美丽）时请务必尊重居民隐私，避免将镜头对准窗户或院内。使用无人机在该区域有严格限制，未经特别许可请勿放飞。室内博物馆严禁拍摄盟约原件，但对复制品和展厅环境允许拍照。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史宅邸体验`}</h4>
                  <p className="text-sm text-blue-800">{`下榻于由16世纪“施维茨风格”豪宅改造的精品酒店，睡在厚重的 original木梁下，清晨在彩绘窗棂透进的光线中醒来，完全融入老城氛围`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`阿尔卑斯山居小屋`}</h4>
                  <p className="text-sm text-green-800">{`选择坐落在小镇上方山坡上的传统木屋民宿，拥有俯瞰整个施维茨山谷的无敌露台，夜晚星空如洗，白天徒步出门即是大自然`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`现代舒适之选`}</h4>
                  <p className="text-sm text-yellow-800">{`火车站附近设计现代的酒店，交通极其便利，房间宽敞明亮，是探索历史老城后享受舒适设施和高效服务的完美基地`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`田园农场民宿`}</h4>
                  <p className="text-sm text-purple-800">{`在施维茨郊外的传统奶牛农场住上一晚，伴着牛铃声和青草香气入睡，早餐品尝家庭自制的蜂蜜、奶酪和面包，体验最地道的乡村瑞士`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季徒步旺季和秋季景观最美时，山区的特色民宿非常紧俏，务必提前数月预订。老城内的酒店数量有限但极具特色，追求历史感的旅客应优先考虑。施维茨整体治安极佳，任何区域住宿都无需担心安全问题。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开施维茨许久，那份独特的平静感依然会在心头萦绕。它没有给你视觉上的狂轰滥炸，却进行了一场更深层的精神对话。在这个凡事追求宏大、快速、刺激的时代，施维茨像一位沉默的智者，提醒着我们一些最本质却容易被遗忘的价值：承诺的重量、社区的力量、自由的代价，以及，真正的强大往往源于内在的团结与坚守，而非外在的炫耀与扩张。它让你看到，一个国家的伟大叙事，可以从一份简陋的互助协议开始，可以在最普通的山谷人民中孕育。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这就是为什么，每一位热爱深度游的旅人，都应该来施维茨看看。它不仅仅是一个“景点”，它是一个源头。在这里，你能触摸到瑞士精密钟表和迷人风景背后，那更坚硬、更恒久的精神内核。当你理解了施维茨，你再看到瑞士的湖光山色、整洁城镇和高效社会时，感受会截然不同。你会知道，这一切并非凭空而来，而是根植于这片土地数百年来对自治、和平与务实主义的不懈追求。施维茨之旅，是一场回到起点的朝圣，它让你带走的不是几张照片，而是一个理解欧洲乃至世界历史中，一种独特文明模式为何能够诞生的钥匙。它小众，却至关重要；它低调，却光芒万丈。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/rapperswil-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉珀斯维尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rapperswil Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/spiez-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施皮茨城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Spiez Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bremgarten-reuss-river-old-wooden-bridges" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布雷姆加滕</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bremgarten</p>
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
