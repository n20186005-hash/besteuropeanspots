import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '圣贝特朗德科曼日深度旅游攻略：山顶大教堂与时光漫步指南',
  description: '探索法国圣贝特朗德科曼日（Saint-Bertrand-de-Comminges）的震撼。本深度游攻略带你走进“比利牛斯山孤岛”，揭秘千年教堂与小镇的避坑指南。',
}

export default function SaintBertrandDeCommingesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/europe' },
            { label: '上加龙省', href: '/destinations/europe' },
            { label: '圣贝特朗德科曼日', href: '/attractions/saint-bertrand-de-comminges' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`圣贝特朗德科曼日・Saint-Bertrand-de-Comminges・法国・上加龙省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你正在规划一场避开人潮、直抵灵魂深处的法国南部之旅，那么今天这份 **圣贝特朗德科曼日私藏旅游攻略**，请你务必收好。想象一下：你驾驶着车，在绵延的加龙河平原上奔驰，忽然，一座孤山拔地而起，山顶上巍然耸立着一座巨石堡垒般的教堂——那就是它，被称为“比利牛斯山雄伟孤岛”的圣贝特朗德科曼日。它不像巴黎圣母院那样游人如织，却拥有一种震撼人心的孤绝与宁静。这份 **自由行指南**，就带你从如何抵达这座“天空之城”开始，一步步揭开它的面纱，告诉你如何沉浸式地感受这份被时光遗忘的壮丽，以及必须知道的 **避坑指南**。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友，如果你正在规划一场避开人潮、直抵灵魂深处的法国南部之旅，那么今天这份 <strong>圣贝特朗德科曼日私藏旅游攻略</strong>，请你务必收好。想象一下：你驾驶着车，在绵延的加龙河平原上奔驰，忽然，一座孤山拔地而起，山顶上巍然耸立着一座巨石堡垒般的教堂——那就是它，被称为“比利牛斯山雄伟孤岛”的圣贝特朗德科曼日。它不像巴黎圣母院那样游人如织，却拥有一种震撼人心的孤绝与宁静。这份 <strong>自由行指南</strong>，就带你从如何抵达这座“天空之城”开始，一步步揭开它的面纱，告诉你如何沉浸式地感受这份被时光遗忘的壮丽，以及必须知道的 <strong>避坑指南</strong>。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`圣贝特朗德科曼日`} />
                <InfoRow label="英文名称" value={`Saint-Bertrand-de-Comminges`} />
                <InfoRow label="正式名称" value={`Saint-Bertrand-de-Comminges`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`上加龙省`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座山巅小镇的故事，是一部浓缩的欧洲史诗。早在公元前1世纪，罗马人就看中了这个战略要地，在山脚下建立了繁荣的卢戈杜努姆-科南努姆城，那是通往西班牙的必经之路。中世纪早期，随着罗马帝国的衰落和蛮族入侵，山下的城市被废弃，而山顶的据点则因为其易守难攻的地形，获得了新生。公元11世纪，一位名叫贝特朗的虔诚主教，让这里真正名垂青史。他主持修建了宏伟的圣母大教堂，并将自己的遗骸安葬于此。这里迅速成为通往西班牙圣地亚哥-德孔波斯特拉的重要朝圣中转站之一，无数风尘仆仆的朝圣者，沿着“阿拉贡之路”艰难攀爬，只为在此寻求一夜庇护和心灵慰藉。因此，圣贝特朗德科曼日不仅仅是一座教堂，它是一个历史叠层：脚下是沉睡的罗马古城，山顶是中世纪信仰与王权交织的堡垒，静静俯瞰着千年的变迁。`} />
                <InfoRow label="建筑特色" value={`站在山脚下仰望，它给你的第一击是纯粹的视觉震撼。整座大教堂与山体、与围绕它的中世纪石屋浑然一体，由本地采掘的灰色、赭石色石块垒成，历经风雨，颜色深沉而温暖。它不是精巧的，而是雄浑的，像从山岩中生长出来的巨人骨骸。走近了看，罗马式部分（尤其是后殿）的墙体厚实得令人安心，窗户小而深邃。而后期加建的哥特式中殿和立面，则带来了轻盈的飞升感。最引人注目的是教堂南侧那宏伟的**回廊**，拱廊连接着二层，下方是幽深的柱廊庭院，光影在此被切割成庄严的几何图形。石头表面保留了粗糙的凿痕，摸上去冰凉而坚实，阳光斜射时，每一块石头都仿佛在讲述一个古老的故事。`} />
                <InfoRow label="建筑风格" value={`这里是一部活生生的“石头建筑史教科书”，完美体现了从**罗马式到哥特式的过渡与融合**。教堂的主体结构，特别是后殿和地下室，是典型的罗马式风格：厚重、坚固、内向。你看那些半圆形的拱券、敦实的立柱、狭小的窗户，一切都为了营造一种堡垒般的安全感和神秘的室内氛围，象征着中世纪早期人们对神的敬畏与对现世动荡的防御心理。而后来增建的中殿和唱诗班席，则大胆采用了**南方哥特式风格**。最大的变化就是“光”！高高的尖拱窗取代了小圆窗，特别是后殿上方那巨大的哥特式窗户，让天光如瀑布般倾泻进祭坛。建筑线条向上延伸，肋拱拱顶优雅地交织在头顶，虽然依旧有南法的敦实感，但整体气质已从“大地般的守护”转向了“天空般的向往”。这种风格的共存，让你在一座建筑里，就能漫步穿越两个伟大的时代。`} />
                <InfoRow label="文化价值" value={`对当地人而言，这座山巅教堂早已超越了宗教场所的意义，它是家园的“灯塔”与精神图腾。无论你在平原的哪个角落劳作，抬头总能望见它，一种莫名的安心感便油然而生。这里每年夏季举办的古典音乐节，让古老的石墙内回荡起巴赫、维瓦尔第的乐曲，古老空间与现代艺术碰撞，赋予了它新的生命。对于现代社会和来访者，它的价值在于提供了一种“抽离感”。在这个被网络淹没的时代，攀爬至此的过程，本身就像一种仪式，强迫你慢下来，专注于呼吸、脚步和眼前的风景。当你最终站在教堂广场，听风声过耳，看鹰击长空，你会瞬间理解什么是“永恒的宁静”。它被列入世界遗产，保护的不仅是一堆石头，更是人类在特定时空下，对信仰、生存与美学的终极表达，一个让灵魂得以喘息和沉思的“孤岛”。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 圣贝特朗德科曼日一日游打卡路线攻略`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的专属向导，这份 **一日游路线** 请收好，咱们不赶路，去感受路。**上午**，别急着冲上山顶！明智之举是先开车到山脚的**古罗马遗址区**。花一个多小时，漫步在残破的庙宇地基、广场和剧院遗迹间，触摸冰凉的罗马柱石，想象脚下曾是车水马龙的大道。这是理解山顶故事的重要序章。随后，沿着Z字形的古老步道（或开车）盘山而上，在城墙外的停车场停下。**中午**，从“新门”进入中世纪小镇，鹅卵石小径仅容两人并肩，两旁是蜂蜜色的石屋。直奔教堂前广场，找一家有露台的餐馆（比如Le Café Latin），点一份当地特色的加斯科涅炖菜，看着雄伟的教堂立面下饭。**下午**的重头戏是深入教堂内部。按顺序参观：震撼的主殿与祭坛 → 精美绝伦的文艺复兴唱诗班木雕 → 登上回廊二楼，俯瞰静谧庭院 → 最后，绕到教堂东侧的**古墓园**，那里是拍摄教堂雄姿和远眺比利牛斯山群的绝佳角度。**傍晚**，趁着旅行团散去，在小镇巷弄里随意走走，买点本地蜂蜜，然后下山，在平原上回望夕阳为“孤岛”镶上金边的时刻，为这一天画上完美句号。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>主教座与管风琴</strong>：走进幽暗的教堂主殿，你的目光会瞬间被尽头祭坛上那尊巨大的<strong>圣母哀子像</strong>所抓住。但别急，先静立片刻。然后，抬头看西侧廊台上那架庞大的<strong>文艺复兴式橡木管风琴</strong>（16世纪）。它本身雕刻繁复，像个巨大的金色宝盒。但真正的魔法发生在音乐会或弥撒时，当第一个音符从那些古老的音管中迸发，浑厚的声浪充盈整个石质空间，贴着你的皮肤震动，你会感到每一个石块都在共鸣。那种穿越时空的听觉震撼，是任何耳机都无法复制的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>回廊的“三重奏”</strong>：一定要去教堂南侧的回廊庭院。这里的光影游戏是顶级的。第一重看地面：古老的石板被岁月磨得光滑如镜，倒映着拱廊的剪影。第二重看柱头：仔细看回廊一层的石柱柱头，上面雕刻着古怪的<strong>中世纪寓言生物</strong>、缠绕的藤蔓和圣经场景，工匠的幽默与虔诚被定格于此。第三重看远景：从二层回廊的某个拱窗望出去，框架正好框住远处绵延的、雪顶若隐若现的比利牛斯山，如同一幅活的风景画，教堂的“孤岛”感在此刻达到巅峰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>唱诗班的木雕“剧院”</strong>：教堂内的<strong>文艺复兴式唱诗班席</strong>是一个独立的艺术宇宙。几十个橡木雕刻的座椅高背板，组成了一幅立体的圣经故事连环画。凑近了看，每个人物的表情、衣褶的流动感都栩栩如生。更妙的是，这些雕刻并非严肃呆板，你会发现一些充满生活气息的细节——比如一个工匠正在偷懒打瞌睡，或者一个小恶魔在搞怪。阳光从高高的哥特式窗户射入，在这些深色木雕上跳跃，让整个空间仿佛一个静谧而生动的小型木制剧场。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>墓园尽头的视角</strong>：从教堂东侧的小门进入古老的<strong>山顶墓园</strong>。穿行在斑驳的十字架和长满青苔的墓碑间，一直走到墓园的东端边缘。转过身，回望教堂。你会发现，从这个角度看去，教堂的后殿和塔楼与背后更远的山峦形成了绝妙的层次。脚下是安息的逝者，中间是屹立千年的信仰丰碑，远方是永恒的群山。这个画面充满了哲学意味，是摄影师和沉思者都不愿错过的宝藏机位，也是这份 <strong>打卡攻略</strong> 里最私藏的瞬间。" }} />
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这份 <strong>避坑指南</strong> 能让你玩得更从容。第一，<strong>时间就是一切</strong>。最佳游览季节是<strong>春末（5-6月）和初秋（9-10月）</strong>，天气晴好，野花烂漫或秋色浸染，且能完美避开7-8月法国度假人潮和酷热。务必<strong>上午或下午3点后</strong>抵达山顶小镇，完美错开中午抵达的旅游大巴团。第二，<strong>穿着与装备是硬道理</strong>。无论山下多热，请一定穿一双<strong>绝对防滑、支撑好的徒步鞋</strong>！那些古老的鹅卵石斜坡穿普通鞋子走起来简直是灾难。山上风大温差显著，一件防风外套必不可少。教堂内部阴凉，带个披肩很实用。第三，<strong>交通与细节</strong>。小镇很小，山顶停车场车位有限，旺季请尽早到达。公共交通极不方便，<strong>自驾是唯一推荐</strong>的自由行方式。导航请直接设置“Saint-Bertrand-de-Comminges”，山路较窄但路况良好。教堂内部禁止使用闪光灯，请静心参观。最后，山下罗马遗址区夏季暴晒，毫无遮阴，务必做好防晒、戴上帽子并带足饮水。" }} />
            </div>
          </Section>

          <Section title={`6. 圣贝特朗德科曼日周边住宿与美食攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "住在山上体验中世纪之夜固然浪漫，但选择极少。更灵活的选择是住在山下开车15-20分钟范围内的宁静村庄里。比如在<strong>Montréjeau</strong>或<strong>Barbazan</strong>小镇，能找到温馨的<strong>民宿（Chambre d‘hôte）</strong>或精品小酒店，推开窗就是田园和远山，夜晚星空璀璨，价格也更亲民。餐饮方面，山顶广场上的<strong>Le Café Latin</strong>露台位置无敌，适合喝杯咖啡或简单午餐。想吃正宗的西南法风味，我推荐下山去<strong>Montréjeau</strong>的<strong>Le Relais de la Neste</strong>，尝尝用本地葡萄酒和香料慢炖的<strong>卡酥来砂锅（Cassoulet）</strong>，或者一道肥美的<strong>油封鸭腿（Confit de Canard）</strong>。搭配一杯当地产的马迪朗红酒，便是味蕾的圆满。小镇里的面包店常有美味的<strong>“巴斯克蛋糕”</strong>，外皮酥脆，内馅是地道的黑樱桃，是绝佳的徒步能量补给。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果你被这份 <strong>小众景点推荐</strong> 激起了探索欲，周边还有宝藏。首推就是山脚那片你已经到访过的<strong>古罗马城市遗址</strong>，它本身就是一个庞大的考古公园，值得花更多时间细细探寻。另一个方向，可以驱车约40分钟，前往著名的<strong>卢尔德（Lourdes）</strong>。这形成了一个有趣的对比：圣贝特朗是寂静、孤傲的中世纪信仰堡垒，而卢尔德则是熙攘、充满现代性的天主教最大朝圣地。感受从极静到极闹的切换，能让你更深刻地理解信仰在这片土地上的不同面貌。如果时间充裕，继续向南深入比利牛斯山区，那些隐藏在山谷中的温泉小镇和徒步路线，将是另一番天地。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "圣贝特朗德科曼日的灵魂，在于那份“遗世独立的坚守”。它不是一个被精心打扮的旅游景点，而是一位历经沧桑、沉默寡言的老者，兀自矗立在天地之间。当你触摸它冰凉的石头，穿过它幽暗的回廊，最终在墓园尽头回望它与群山融为一体的轮廓时，你会明白，这座“比利牛斯山的孤岛”赐予旅人最珍贵的礼物，并非知识，而是一份在喧嚣世界里早已稀缺的、关于宁静与永恒的厚重体验。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/senlis-medieval-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    桑
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">桑利斯中世纪老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Senlis</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/corte-citadel" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科尔泰</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Corte</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-sully-sur-loire" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    叙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">叙利城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Sully-sur-Loire</p>
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
