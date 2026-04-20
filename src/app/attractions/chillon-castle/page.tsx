import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '西庸城堡 Chillon Castle｜日内瓦湖心巨石上的中世纪囚牢与诗篇 - 最佳欧洲景点',
  description: '还记得我第一次见到西庸城堡的那个清晨吗？从蒙特勒方向沿着湖边慢慢走，晨雾还没完全散去，日内瓦湖是那种沉静的、带着灰蓝色调的冰牛奶的颜色。然后它就突然出现了，不是耸立，而是从水中“生长”出来——一块巨大的、灰白色的岩石，而城堡就是岩石本身意志的延伸。所有的塔楼、城墙、斜坡屋顶，都紧紧抓着岩石，像是已经...',
}

export default function ChillonCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '西庸城堡', href: '/attractions/chillon-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`西庸城堡・Chillon Castle・瑞士・蒙特勒`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`还记得我第一次见到西庸城堡的那个清晨吗？从蒙特勒方向沿着湖边慢慢走，晨雾还没完全散去，日内瓦湖是那种沉静的、带着灰蓝色调的冰牛奶的颜色。然后它就突然出现了，不是耸立，而是从水中“生长”出来——一块巨大的、灰白色的岩石，而城堡就是岩石本身意志的延伸。所有的塔楼、城墙、斜坡屋顶，都紧紧抓着岩石，像是已经在这里呼吸了上千年。空气里有湖水淡淡的腥气，混合着岸边湿润青苔和古老石头的气味。四周安静极了，只有湖水轻轻拍打基石“啪嗒、啪嗒”的声音，还有不知名的水鸟偶尔划过天际的鸣叫。
走近了看，那种压迫感和美感交织的感觉更强烈了。城堡投在如镜湖面上的倒影，被微风吹皱，又自己抚平。它不像很多童话里的城堡那样轻盈浪漫，而是充满了实实在在的重量感和故事感。你能看到岩石被湖水侵蚀的痕迹，看到城墙石缝里钻出倔强的小草。当地人已经习惯了它的存在，晨跑的人从它身边掠过，遛狗的老人会坐在长椅上静静地看着它，它是风景的一部分，更是日常生活的一个厚重背景音。但每个望向它的人都知道，这背景音里，藏着惊涛骇浪。
最打动人心的，是那种矛盾的魅力。一面是绝美的湖光山色，阿尔卑斯山在远处勾勒出绵延的剪影，天鹅在城堡脚下的水湾里优雅地巡游，美得像一张明信片。另一面，是当你走进它内部，触摸到那些冰冷石墙时，瞬间被拉入的黑暗历史——潮湿的地牢、沉重的锁链、还有那些为了信仰和自由被囚禁于此的灵魂。这种天堂与地窖、景色与囚牢、自然之美与人性之暗的极致对比，才是西庸真正让人魂牵梦绕的核心。它不是一个单纯的景点，而是一个巨大的、立体的隐喻。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`还记得我第一次见到西庸城堡的那个清晨吗？从蒙特勒方向沿着湖边慢慢走，晨雾还没完全散去，日内瓦湖是那种沉静的、带着灰蓝色调的冰牛奶的颜色。然后它就突然出现了，不是耸立，而是从水中“生长”出来——一块巨大的、灰白色的岩石，而城堡就是岩石本身意志的延伸。所有的塔楼、城墙、斜坡屋顶，都紧紧抓着岩石，像是已经在这里呼吸了上千年。空气里有湖水淡淡的腥气，混合着岸边湿润青苔和古老石头的气味。四周安静极了，只有湖水轻轻拍打基石“啪嗒、啪嗒”的声音，还有不知名的水鸟偶尔划过天际的鸣叫。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了看，那种压迫感和美感交织的感觉更强烈了。城堡投在如镜湖面上的倒影，被微风吹皱，又自己抚平。它不像很多童话里的城堡那样轻盈浪漫，而是充满了实实在在的重量感和故事感。你能看到岩石被湖水侵蚀的痕迹，看到城墙石缝里钻出倔强的小草。当地人已经习惯了它的存在，晨跑的人从它身边掠过，遛狗的老人会坐在长椅上静静地看着它，它是风景的一部分，更是日常生活的一个厚重背景音。但每个望向它的人都知道，这背景音里，藏着惊涛骇浪。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，是那种矛盾的魅力。一面是绝美的湖光山色，阿尔卑斯山在远处勾勒出绵延的剪影，天鹅在城堡脚下的水湾里优雅地巡游，美得像一张明信片。另一面，是当你走进它内部，触摸到那些冰冷石墙时，瞬间被拉入的黑暗历史——潮湿的地牢、沉重的锁链、还有那些为了信仰和自由被囚禁于此的灵魂。这种天堂与地窖、景色与囚牢、自然之美与人性之暗的极致对比，才是西庸真正让人魂牵梦绕的核心。它不是一个单纯的景点，而是一个巨大的、立体的隐喻。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`西庸城堡`} />
                <InfoRow label="英文名称" value={`Chillon Castle`} />
                <InfoRow label="正式名称" value={`Chillon Castle`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`蒙特勒`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是瑞士访问量最大的历史古迹，也是欧洲中世纪水上防御建筑的典范。`} />
                <InfoRow label="建筑特色" value={`一座完全依湖中独立巨岩而建的城堡，将天然屏障与人工工事完美融合。`} />
                <InfoRow label="建筑风格" value={`主要呈现萨伏伊时期的中世纪军事与居住建筑风格，兼具罗曼式与哥特式元素。`} />
                <InfoRow label="文化价值" value={`拜伦勋爵的名诗《西庸的囚徒》使其超越了建筑本身，成为自由与压迫的永恒文学象征。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`每年开放，具体时间随季节变化。四月至九月：9:00-19:00（最后入场18:00）；十月至三月：9:30-18:00（最后入场17:00）。圣诞节（12月25日）和元旦（1月1日）闭馆。特殊活动或维护期间可能有临时调整，建议出行前在官网再次确认。`} />
              <InfoRow label="门票价格" value={`成人票13.5瑞士法郎。6-15岁青少年7瑞士法郎。家庭票（2成人+最多5名儿童）35瑞士法郎。持有瑞士旅行通票（Swiss Travel Pass）可免费入场。语音导览设备需额外支付6瑞士法郎。`} />
              <InfoRow label="地址" value={`Avenue de Chillon 21, 1820 Veytaux, Switzerland`} />
              <InfoRow label="交通方式" value={`从日内瓦国际机场出发，乘坐火车直达蒙特勒站，车程约1小时10分钟，班次频繁，每小时有多趟。从蒙特勒火车站出口，沿着清晰的路标步行约25分钟，一条绝美的湖边步道将直接把你引向城堡。你也可以在火车站外的公交站乘坐201路公交车（方向“Villeneuve gare”），在“Chillon”站下车，车程约10分钟，每15-20分钟一班。自驾可将车停在城堡旁的付费停车场。最浪漫的方式是从洛桑或沃韦乘坐游船抵达城堡码头，湖上视角无与伦比。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起西庸的故事，得从这块石头讲起。在城堡建成之前，这块突出于日内瓦湖的石灰岩巨礁，就是天然的战略要地。罗马人可能在这里设过岗哨，控制着从意大利翻越阿尔卑斯山通往北方的重要水路。但真正让它登上历史舞台的，是萨伏伊家族。大约在11世纪到13世纪之间，萨伏伊的伯爵们看中了这里，开始大兴土木。他们不是凭空建一座城堡，而是巧妙地利用岩石的每一寸起伏。地下室和地基就是岩石本身凿出来的，下层的房间直接以岩石为墙。想想那时的工匠，一锤一凿，让建筑从石头里“长”出来，这本身就是一种对自然的敬畏和征服。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡的黄金时代，是作为萨伏伊家族在莱芒湖地区权力与财富的展示厅。它不仅是军事要塞，控制着湖上的盐、酒和谷物贸易，收取过路费；更是一个奢华的行政中心和住所。那些拥有巨大壁炉的大厅、装饰着彩绘天花板的卧室、储存丰裕的粮仓和酒窖，都诉说着当年的繁荣。萨伏伊家族把这里经营得固若金汤，从湖上几乎无法攻克，从陆地一侧则有吊桥和多重城墙防御。它像一个高傲的领主，稳稳盘踞在湖心，见证着商船往来，也冷眼看着湖畔的纷争。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的转折点总是伴随着硝烟。16世纪，伯尔尼的军队打了过来。当时统治这片区域的萨伏伊公爵势力已经衰落，而信奉新教的伯尔尼人势如破竹。1536年，经过短暂的围攻，西庸城堡陷落了。伯尔尼人成了它的新主人，并在接下来的两百多年里，把它变成了一个管理沃州地区的行政中心和军火库。城堡的功能变了，那些华丽的厅堂里堆满了物资和文件，但它依然是权力的象征，只是换了主人。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当然，让西庸城堡从一座坚固的石头堡垒，变成一个世界闻名的文化符号的，不是某场战争，而是一位诗人——拜伦勋爵。1816年那个著名的“无夏之年”，拜伦和雪莱等人在日内瓦湖度假。他来到了西庸，听说了关于弗朗索瓦·德·博尼瓦尔的故事。这位16世纪的日内瓦修道院长，因为支持宗教改革，被萨伏伊公爵的铁链锁在地牢的石柱上，囚禁了足足四年。拜伦被这个故事深深震撼，在地牢那根石柱上刻下了自己的名字（至今依稀可辨），并写下了不朽的诗篇《西庸的囚徒》。诗中那种对自由的炽热渴望、对压迫的强烈控诉，让全世界都记住了这个名字。拜伦的笔，比任何炮弹都更有力，彻底释放了西庸城堡灵魂中那个被禁锢的部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`伯尔尼人走后，沃州人在19世纪接管了城堡。它一度被忽视，甚至沦为仓库。直到现在管理它的基金会成立，才开始了系统性的修复和考古工作。他们小心翼翼地剥去后来添加的痕迹，试图还原中世纪的原貌。今天的我们，能走在这些复原的房间里，触摸那些古老的墙壁，感受从萨伏伊到伯尔尼，从军事要塞到文学圣地，一层层叠加起来的历史年轮。每一层都真实，每一层都不可或缺。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正品味西庸，我强烈建议你留出至少三个小时。一定要在早上开门时就抵达，这时候旅行团的大巴还没到，你可以享受城堡和湖边难得的清静。游览节奏应该是“由外到内，再由下到上”。先花时间在城堡外围和湖边漫步，从各个角度欣赏它与湖光山色的交融，调整好心情，从现代步入中世纪。进入城堡后，不要急着上楼，先直奔最底层的地牢，在拜伦的诗句萦绕下感受那份历史的沉重。然后再逐层向上探索生活区、大厅和防御工事，最后登上塔楼，让日内瓦湖的全景作为这次时空之旅的华丽收尾。这样的顺序，在情绪和视野上都有一个完整的起承转合。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季午后是旅行团高峰期，内部通道狭窄，会非常拥挤，严重影响体验，务必早到。城堡内部分楼梯非常陡峭且光滑，请务必穿一双舒适防滑的鞋子。语音导览内容丰富，是理解城堡历史的关键，强烈建议租用。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从蒙特勒的湖边步道缓缓走来，让城堡的全景随着你的脚步一点一点展开，感受第一眼的震撼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城堡入口前的栈桥上停留，低头看湖水清澈见底，天鹅游弋，抬头看石墙巍峨冰冷，完成心理上的过渡。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`购票后领取语音导览，毫不犹豫地先沿着指示牌走向地下层，在幽暗、潮湿且回音清晰的拜伦地牢里，找到那根著名的石柱。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着螺旋石梯向上，探索萨伏伊伯爵时期的豪华大厅，想象壁炉里火焰熊熊、挂毯垂地的宴会场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进曾经的小教堂，留意那些残存的彩绘壁画痕迹，感受即使在战争要塞中，人们对精神寄托的渴望。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿梭于迷宫般的卧室、警卫室和走廊，用手触摸那些因无数人走过而被磨得光滑温润的木扶手和石阶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上主塔楼的屋顶平台，扶着冰冷的垛口，让360度的湖山全景像一幅巨画般扑面而来，深呼吸。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡出来后，不要急着离开，坐在湖边的长椅上发会儿呆，看着城堡的倒影，把刚才吸收的所有历史和故事慢慢沉淀。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡东侧湖边栈道中段`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前半小时，将城堡整体、湖面倒影以及对岸的阿尔卑斯山一同纳入镜头，使用广角端，画面宁静而富有层次。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主塔楼屋顶西北角垛口`}</h4>
                  <p className="text-sm text-gray-700">{`上午光线最佳，以厚重的石砌垛口为前景框架，聚焦于远处蒙特勒的湖岸线和连绵雪山，形成古今对话。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`拜伦地牢入口向内的长廊`}</h4>
                  <p className="text-sm text-gray-700">{`利用三脚架进行长曝光，捕捉从高处狭小窗户射入的光束，照亮幽深长廊的石壁和地面，营造戏剧性的明暗对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城堡南立面与岩石的结合部`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光能照亮岩石肌理时，贴近拍摄城堡墙根与天然巨石浑然一体的细节，强调其“从石头中长出”的建筑特色。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从湖对岸韦托（Veytaux）小镇的小径远眺`}</h4>
                  <p className="text-sm text-gray-700">{`黄昏蓝调时刻，用长焦镜头压缩空间，拍摄城堡灯火初上、映在深蓝色湖面上的孤寂剪影。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内允许拍照，但禁止使用闪光灯，以保护古老的壁画和织物。使用三脚架可能需要提前申请许可。航拍城堡需要特别批准，且周边是自然保护区，请务必遵守当地法规。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经典湖景之选`}</h4>
                  <p className="text-sm text-blue-800">{`蒙特勒皇宫酒店，百年历史的“奢华宫殿”，就在火车站旁，从房间阳台就能直面湖光和西庸城堡，晚上听着湖浪声入眠。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`沉浸历史体验`}</h4>
                  <p className="text-sm text-green-800">{`西庸城堡几步之遥的奥拉克酒店，由古老建筑改造，房间保留原始石墙和木梁，推开窗就是城堡侧影，仿佛住在它的故事里。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计艺术聚落`}</h4>
                  <p className="text-sm text-yellow-800">{`位于蒙特勒的欧洲酒店，现代设计风格，每个房间由不同艺术家设计，顶楼酒吧拥有俯瞰湖泊和阿尔卑斯山的无敌视野。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`宁静山腰隐居`}</h4>
                  <p className="text-sm text-purple-800">{`韦托镇上的家庭式高山小屋民宿，坐落在城堡背后的山坡葡萄园中，享受绝对的宁静，清晨在鸟鸣和清新空气中醒来，步行下山即可抵达城堡。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`蒙特勒在夏季爵士音乐节期间（七月）住宿异常紧张且价格飞涨，务必提前数月预订。选择韦托镇的住宿更加安静，性价比更高，但餐厅选择较少，依靠火车或公交去蒙特勒就餐非常方便（仅一站路）。湖区治安极好，但无论住在哪里，都值得体验一次傍晚沿湖散步的惬意。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开西庸城堡很久以后，我脑子里反复出现的，不是某个具体的房间或画面，而是一种强烈的感觉——关于“重量”的感觉。那是岩石的物理重量，是历史的沉淀重量，是拜伦诗句中自由灵魂的挣扎之重。在这个凡事都追求轻盈、快速、碎片化的时代，西庸像一块压舱石，沉甸甸地坐落在那里，提醒着我们：有些东西是无法被解构、被速览、被一键分享的。它要求你走过去，触摸它，感受它石头的冰凉和纹路，在它幽暗的地牢里屏住呼吸，想象几个世纪前的黑暗与微光。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这就是为什么每个热爱深度游的人都该来一次西庸。它不仅仅是一座漂亮的湖上城堡（这样的风景瑞士很多），它是一个完整的宇宙。在这里，你能读到建筑史、军事史、宗教斗争史、文学传播史，它们全部被压缩在这块巨岩之上。它教会我们，真正动人的旅行，是去往那些能同时打动眼睛、头脑和心灵的地方。当你在塔楼上吹着来自阿尔卑斯山的风，看着脚下碧蓝的湖水，你会明白，美可以很单纯，但深刻的美，永远与它的阴影并存。西庸城堡，就是这片阴影与光亮交织得最为惊心动魄的土地，等待着你来聆听，它那穿过湖水与岁月传来的、低沉而悠长的回响。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/soglio" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    索
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">索格里奥</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Soglio</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/fribourg-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    弗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">弗里堡老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Fribourg Old Town</p>
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
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
