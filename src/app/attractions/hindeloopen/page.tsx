import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '欣德洛彭Hindeloopen｜探访彩绘家具之乡与古老水闸，解锁荷兰弗里斯兰的隐秘汉萨宝藏 - 最佳欧洲景点',
  description: '车子沿着笔直的堤坝公路开，两旁是望不到边的草场和星罗棋布的运河，直到视线尽头出现一抹小小的、密集的屋脊轮廓线，像一艘搁浅在绿色海洋里的古老帆船。这就是我对欣德洛彭的第一眼印象。停好车，顺着小路往里走，空气的味道率先变了——一丝微咸的、带着点铁锈气息的北海海风，混杂着从某户人家敞开的窗户里飘出的、淡淡...',
}

export default function HindeloopenPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '欣德洛彭', href: '/attractions/hindeloopen' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`欣德洛彭・Hindeloopen・荷兰・欣德洛彭`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着笔直的堤坝公路开，两旁是望不到边的草场和星罗棋布的运河，直到视线尽头出现一抹小小的、密集的屋脊轮廓线，像一艘搁浅在绿色海洋里的古老帆船。这就是我对欣德洛彭的第一眼印象。停好车，顺着小路往里走，空气的味道率先变了——一丝微咸的、带着点铁锈气息的北海海风，混杂着从某户人家敞开的窗户里飘出的、淡淡的油漆和亚麻籽油的清苦味道。这味道很独特，是这座小镇的嗅觉签名。
声音是缓慢而清晰的。没有城市的喧嚣，只有风掠过运河水面、吹动系船缆绳的吱呀声，自行车铃铛偶尔的叮铃，还有从远处传来的、低沉而规律的“嘎吱——轰隆”声。那是十九世纪修建的“老水闸”（Oude Sluis）正在工作，像这座小镇沉稳而有力的心跳，调节着内湖与外海的水位。你很快会发现，这里的时间流速不一样。当地人骑着那种老式高车把自行车不紧不慢地路过，向你点头微笑；窗台上一定放着盛开的天竺葵；每扇擦得锃亮的玻璃窗后，都可能藏着一件色彩绚丽到夺目的彩绘柜子或椅子，惊鸿一瞥。
最打动人心的，是那种“内外反差”的魔力。从外面看，这些弗里斯兰式的房屋低调、整洁，甚至有些朴素。但一旦你有机会走进任何一间对公众开放的故居或博物馆，便会瞬间被淹没在一个由花卉、藤蔓、中国风图案和金色线条构成的绚烂宇宙里。从天花板到地板，从衣柜到摇篮，每一寸木头都被精心描绘。这不是冰冷的展览，而是一种浸入骨髓的生活美学，告诉你几个世纪前的水手和商人们，如何将他们在世界尽头看到的奇景，和对家园的炽热爱恋，一起刷在了家的每一个角落。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子沿着笔直的堤坝公路开，两旁是望不到边的草场和星罗棋布的运河，直到视线尽头出现一抹小小的、密集的屋脊轮廓线，像一艘搁浅在绿色海洋里的古老帆船。这就是我对欣德洛彭的第一眼印象。停好车，顺着小路往里走，空气的味道率先变了——一丝微咸的、带着点铁锈气息的北海海风，混杂着从某户人家敞开的窗户里飘出的、淡淡的油漆和亚麻籽油的清苦味道。这味道很独特，是这座小镇的嗅觉签名。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`声音是缓慢而清晰的。没有城市的喧嚣，只有风掠过运河水面、吹动系船缆绳的吱呀声，自行车铃铛偶尔的叮铃，还有从远处传来的、低沉而规律的“嘎吱——轰隆”声。那是十九世纪修建的“老水闸”（Oude Sluis）正在工作，像这座小镇沉稳而有力的心跳，调节着内湖与外海的水位。你很快会发现，这里的时间流速不一样。当地人骑着那种老式高车把自行车不紧不慢地路过，向你点头微笑；窗台上一定放着盛开的天竺葵；每扇擦得锃亮的玻璃窗后，都可能藏着一件色彩绚丽到夺目的彩绘柜子或椅子，惊鸿一瞥。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，是那种“内外反差”的魔力。从外面看，这些弗里斯兰式的房屋低调、整洁，甚至有些朴素。但一旦你有机会走进任何一间对公众开放的故居或博物馆，便会瞬间被淹没在一个由花卉、藤蔓、中国风图案和金色线条构成的绚烂宇宙里。从天花板到地板，从衣柜到摇篮，每一寸木头都被精心描绘。这不是冰冷的展览，而是一种浸入骨髓的生活美学，告诉你几个世纪前的水手和商人们，如何将他们在世界尽头看到的奇景，和对家园的炽热爱恋，一起刷在了家的每一个角落。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`欣德洛彭`} />
                <InfoRow label="英文名称" value={`Hindeloopen`} />
                <InfoRow label="正式名称" value={`Hindeloopen`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`欣德洛彭`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`曾是汉萨同盟中至关重要的弗里斯兰港口，以其独特的文化孤岛地位和繁盛的海洋贸易而闻名。`} />
                <InfoRow label="建筑特色" value={`密集排列的木质山墙房屋，色彩柔和，门面狭窄，配有典型的“滑门”和装饰性山花，内部则隐藏着令人惊叹的彩绘艺术世界。`} />
                <InfoRow label="建筑风格" value={`弗里斯兰传统民居风格，深受航海文化影响，兼具实用性与装饰性。`} />
                <InfoRow label="文化价值" value={`保存了几乎绝迹的独特方言、服饰体系与彩绘家具艺术，是荷兰黄金时代海洋贸易文化遗产的“活化石”。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城镇公共区域全天开放。主要景点如“欣德洛绘画博物馆”、老水闸等开放时间各异，通常为4月至10月10:00-17:00，冬季时间缩短或需预约。建议行前查阅官网确认。`} />
              <InfoRow label="门票价格" value={`城镇漫步免费。欣德洛绘画博物馆门票约10欧元。联票或特定导览游价格可能更高。建议提前在线购票以避免排队。`} />
              <InfoRow label="地址" value={`Kerkstraat 2, 8713 KD Hindeloopen, Netherlands (以欣德洛绘画博物馆为坐标中心)`} />
              <InfoRow label="交通方式" value={`从阿姆斯特丹史基浦机场出发，最便捷的方式是乘坐火车。先乘火车至斯内克（Sneek）站，车程约1小时45分钟，班次频繁。在斯内克火车站前换乘515路巴士，约30分钟即可抵达欣德洛彭巴士总站。全程使用OV-chipkaart（荷兰公共交通卡）刷卡最为方便。自驾则沿A7高速公路行驶，从斯内克出口下，沿路标指引约20分钟车程，镇外有免费停车场，需步行进入古镇中心。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲欣德洛彭的故事，得从北海那片寒冷而富饶的渔场说起。早在13世纪，它就获得了城市权利，但真正的命运转折点，是那条被称为“海上黄金”的鲱鱼。这里的人们不仅是渔民，更是精明的商人。他们将盐腌的鲱鱼运往波罗的海沿岸，换回谷物、木材、毛皮，再把货物分销到西欧。这种中转贸易让欣德洛彭迅速富裕起来，并顺理成章地加入了强大的汉萨同盟——一个中世纪北欧的商业城邦联盟。想象一下，在鼎盛时期，这里的码头停满了来自挪威、瑞典、甚至更远地方的船只，空气中弥漫着鱼腥、香料和湿木材的气味，交易所里回响着多种语言的讨价还价声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`航海带来了财富，也带来了致命的孤独。男人们一次出海可能长达半年甚至更久，在浩瀚而危险的北大西洋上搏命。而留在家中的女人们，则在等待中创造了一种独一无二的文化慰藉。她们用鲜艳的彩绘装饰家里的一切，起初可能只是为了保护木材，后来却演变成一门极致的艺术。图案融合了当地的自然元素（比如弗里斯兰的马、鸟）、从东方瓷器上看到的中国风纹样（通过贸易传入），以及巴洛克艺术的奢华曲线。这满屋子的绚烂，既是对遥远丈夫的思念寄托，也是向邻里展示家族财富与品位的无声宣言。欣德洛的彩绘艺术，本质是爱与等待的结晶。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，黄金时代并未永恒。随着荷兰东印度公司的崛起，贸易中心南移到阿姆斯特丹等大城市；更致命的是，祖依德海（Zuiderzee，今艾瑟尔湖）的泥沙淤积让大型船只越来越难以靠岸。到了18世纪，欣德洛彭作为重要港口的地位一落千丈。它仿佛被时间遗忘了，陷入了一种沉睡状态。但塞翁失马，焉知非福。正是这种衰落与隔绝，奇迹般地保护了它独特的文化。外面的世界在经历工业革命和现代化浪潮，欣德洛彭却像一颗被琥珀封存的珍宝，完好地保留了它的方言、传统服饰（尤其是女性那华丽无比的头饰和围裙），以及最核心的彩绘技艺。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`十九世纪末，当整个欧洲开始热衷于“发现”和浪漫化自己的民间传统时，欣德洛彭这颗遗珠被重新发现了。艺术家和学者们蜂拥而至，惊叹于这里保存完好的文化“活化石”。1877年，旨在保护这门技艺的“绘画协会”成立。我们今天能看到的许多经典作品样式，都在那个时期被系统地记录和标准化。小镇的经济命脉也从渔业贸易，悄然转向了文化遗产和旅游业。那座古老的木制水闸，虽然不再承担主要的航运功能，却成了连接小镇辉煌过去与宁静现在的最生动地标，每日照常开合，仿佛在为这段跌宕的历史做着平稳的注脚。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要给欣德洛彭一天时间，才能不慌不忙地读懂它的两层魅力：表层的宁静水乡和里层的绚烂艺术。建议早上九点左右抵达，这时游客尚未大批涌入，阳光柔和，是感受小镇苏醒气息的最佳时刻。整体游览可以围绕“由外向内、由今溯古”的节奏展开。先从外围的堤坝和水闸开始，感受它的地理脉搏和航海根基；然后慢慢浸入迷宫般的街巷，欣赏建筑外观；最后深入博物馆和工作室，揭开室内艺术的终极秘密。这样的安排能让体验层层递进，最终在内心形成完整的共鸣。全程步行即可，小镇小巧精致，但请务必穿一双舒适的鞋，因为最好的风景都藏在需要慢慢踱步的细节里。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周末和夏季午后是游客高峰期，想获得宁静体验请尽量安排在平日早晨或傍晚。小镇风大，尤其在水闸和堤坝上，即便夏季也建议带一件防风外套。大部分室内景点（博物馆、工作室）空间不大，最好提前在线预订或致电确认开放时间，避免吃闭门羹。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨先从游客中心拿一份地图，然后径直走向那标志性的白色木制老水闸，静静等待一次闸门开启，看湖水与海水缓缓交汇，小船缓缓通过。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着水闸旁的堤坝向西漫步，让北海的风毫无遮拦地吹在脸上，眺望艾瑟尔湖上点点帆影，想象几个世纪前千帆竞泊的盛景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`转身钻进镇中心如毛细血管般交织的狭窄小巷，比如Dijkstraat或Kerkstraat，抬头欣赏每一栋山墙房屋独特的形状和色彩，寻找那些藏在门楣上的船舶浮雕或日期铭牌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开“欣德洛绘画博物馆”（Museum Hindeloopen）那扇不起眼的大门，让自己瞬间被淹没在数个房间里极致华丽、目不暇接的彩绘家具、瓷器和生活用品中。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`预约或碰运气参观一家仍在运营的彩绘工作室，看画师如何用纤细的画笔，以令人屏息的稳定手工艺，将那些复杂的花卉图案一笔笔赋予生命。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在旧港码头边找一家咖啡馆坐下，点一份弗里斯兰特色的“苏塞博尔”（suikerbrood，糖面包）和咖啡，看天鹅在泊位间优雅滑行。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果正值夏季，租一艘小船或参加一次帆船体验，从水路的视角重新欣赏小镇轮廓，这是理解它作为港口城市肌理的最佳方式。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分，当一日游的游客散去，再次回到宁静的小巷，此时斜阳为彩绘的窗框涂上金边，你或许能听到某户人家传来隐约的弗里斯兰语交谈声，那是小镇最真实的脉搏。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`老水闸东侧小桥`}</h4>
                  <p className="text-sm text-gray-700">{`在闸门开启时，站在小桥上以低角度拍摄，将古老的木制闸门框架与通过闸口的古典帆船一同收入镜中，背景是小镇典型的山墙房屋，构图充满故事感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`Dijkstraat小巷纵深`}</h4>
                  <p className="text-sm text-gray-700">{`选择一条两侧房屋山墙形成自然夹道的小巷，在下午三四点阳光斜射时拍摄，光线能完美勾勒出房屋砖石的纹理和窗台的细节，形成迷人的光影走廊。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`欣德洛绘画博物馆室内细节`}</h4>
                  <p className="text-sm text-gray-700">{`将相机光圈调大，聚焦于某一件彩绘家具上最繁复的图案局部，比如柜门一角交织的花卉与藤蔓，虚化背景的其他陈列品，让色彩和笔触的质感成为绝对主角。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从艾瑟尔湖方向远眺`}</h4>
                  <p className="text-sm text-gray-700">{`乘坐小船离开码头约一百米后回望，用长焦镜头压缩空间，将小镇标志性的教堂尖顶、风车（如果有）和层层叠叠的屋脊压缩在同一画面内，形成一幅典型的荷兰水乡画卷。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄民居内部或私人工作室陈列时，务必先征得主人明确同意，尊重当地人的隐私。室内光线通常较暗，且禁止使用闪光灯以防损伤古董彩绘，建议携带大光圈镜头或小型三脚架。尝试捕捉动态元素，如飞翔的海鸟、转动的风车叶片或水闸激起的水波，能为宁静的画面增添生机。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济温馨`}</h4>
                  <p className="text-sm text-blue-800">{`住在运河边由老船屋改造的B&B，房间虽小却充满巧思，早晨房东会为你准备装在彩绘陶罐里的 homemade 酸奶和新鲜面包，推开窗就能看到天鹅道早安。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`沉浸体验`}</h4>
                  <p className="text-sm text-green-800">{`选择一栋17世纪的受保护历史建筑内的精品客栈，楼梯陡峭，木梁低矮，但卧室里就摆放着真正的古董彩绘衣柜，让你在历史的气息中入眠。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计风范`}</h4>
                  <p className="text-sm text-yellow-800">{`位于镇外不远处一座现代弗里斯兰风格农庄里的设计酒店，房间宽敞明亮，将传统元素与现代舒适完美结合，拥有开阔的田园视野和顶级舒适的床品。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`航海之梦`}</h4>
                  <p className="text-sm text-purple-800">{`预订港口边唯一一家小型酒店顶层的房间，带有私人的小露台，黄昏时分可以一边小酌一边俯瞰港口华灯初上，船只归航的静谧画面。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`欣德洛彭本身非常安全且宁静，但夜间娱乐活动稀少，享受的就是这份避世的安宁。夏季（6-8月）住宿非常紧俏，务必提前数月预订。冬季许多B&B会歇业，但此时来访却能体验到小镇最本地、最宁静的一面，需仔细查询开放信息。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开欣德洛彭很久之后，我脑海里反复回响的，不是某一片具体的色彩，而是那种存在于“之间”的状态。它介于大海与陆地之间，介于辉煌的全球贸易往事与静谧的乡土当下之间，介于对外部世界旺盛的好奇心与对内里文化极致的坚守之间。这座小镇像一个精美的双面绣，一面是抵御北海风涛的坚韧与实用，一面是溢满家居每个角落的柔美与繁复。它告诉你，真正的富有不是掠夺了多少远方，而是如何将远方的星光，化作家中温暖而具体的灯火。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、风格日益全球同质化的时代，欣德洛彭的存在是一种温柔的抵抗。它不宏大，不震撼，却以一种固执的、生活化的方式，证明了一种文化可以如何通过最日常的器物——一个柜子、一把椅子、一个摇篮——得以传承和呼吸。来到这里，你不是在看一个标本，而是在体验一种依然活着的气质。它提醒每一位深度旅人，旅行的意义不仅是去看陌生的风景，更是去感知那些在时间河流中，如何聪明地随着潮汐改变航道，却始终没有丢掉自己灵魂锚点的智慧。这趟旅程，最终是一场关于“何以为家”的深刻启迪。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/delft-historic-centre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    代
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">代尔夫特老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Historic Centre of Delft</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/haarlem-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈勒姆老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Haarlem Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/s-hertogenbosch-historic-centre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯海尔托亨博斯（或简称登博斯）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">'s-Hertogenbosch</p>
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
