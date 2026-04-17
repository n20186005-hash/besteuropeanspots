import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '莫迪卡老城 Modica Old Town｜西西里岛的巧克力与巴洛克，在千级台阶上品味甜蜜时光 - 最佳欧洲景点',
  description: '当汽车沿着蜿蜒的山路盘旋而上，莫迪卡突然出现在眼前的那一刻，你会明白为什么它被称为"西西里的百层蛋糕"。这座建在深谷两侧悬崖上的古城，像一块被精心雕琢的巴洛克宝石，层层叠叠地铺展在山坡上。午后的阳光洒在蜜黄色的石墙上，勾勒出教堂圆顶优美的曲线，而最深的阴影里，隐约可见千级台阶蜿蜒而上，像一条通往天堂...',
}

export default function ModicaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '莫迪卡老城', href: '/attractions/modica-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`莫迪卡老城・Modica Old Town・意大利・莫迪卡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当汽车沿着蜿蜒的山路盘旋而上，莫迪卡突然出现在眼前的那一刻，你会明白为什么它被称为"西西里的百层蛋糕"。这座建在深谷两侧悬崖上的古城，像一块被精心雕琢的巴洛克宝石，层层叠叠地铺展在山坡上。午后的阳光洒在蜜黄色的石墙上，勾勒出教堂圆顶优美的曲线，而最深的阴影里，隐约可见千级台阶蜿蜒而上，像一条通往天堂的巧克力色丝带。
走进莫迪卡，首先迎接你的是空气的味道——不是海水的咸腥，也不是柑橘的清香，而是一种独特的混合气息：新磨咖啡的苦醇、烤杏仁的焦香，还有那种只有在莫迪卡才能找到的、带着颗粒感的可可香。这种香味来自老城深处那些世代相传的巧克力工坊，它们像这座城市的灵魂，藏在巴洛克立面的背后，却让整个山谷都弥漫着甜蜜的气息。
圣乔治大教堂前的阶梯广场是莫迪卡的心脏。站在广场底部仰望，你会被那种垂直的震撼所征服——巴洛克式的立面如此华丽，以至于你会怀疑自己的眼睛。但当夕阳西下，整个立面被染成金色，你会突然理解为什么西西里人说："上帝创造了世界，莫迪卡创造了美。"而当你终于攀登完那似乎没有尽头的台阶，站在教堂前的平台上回望整个山谷，那种"我征服了这座山"的成就感，会让你觉得所有的汗水都值得——特别是当你知道，下山的路通往某个百年巧克力店的门口。
莫迪卡最动人的地方，在于它将两种看似矛盾的气质完美融合：一种是巴洛克式的华丽与戏剧性，另一种是巧克力制作工艺的质朴与温情。在这里，你可以上午在华丽的教堂里感受宗教的庄严，下午在某个不起眼的小店里，看巧克力师傅用16世纪的方法制作巧克力，那种原始的石磨、那种带着颗粒感的质地，会让你突然明白：原来甜蜜也可以如此有深度。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当汽车沿着蜿蜒的山路盘旋而上，莫迪卡突然出现在眼前的那一刻，你会明白为什么它被称为"西西里的百层蛋糕"。这座建在深谷两侧悬崖上的古城，像一块被精心雕琢的巴洛克宝石，层层叠叠地铺展在山坡上。午后的阳光洒在蜜黄色的石墙上，勾勒出教堂圆顶优美的曲线，而最深的阴影里，隐约可见千级台阶蜿蜒而上，像一条通往天堂的巧克力色丝带。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进莫迪卡，首先迎接你的是空气的味道——不是海水的咸腥，也不是柑橘的清香，而是一种独特的混合气息：新磨咖啡的苦醇、烤杏仁的焦香，还有那种只有在莫迪卡才能找到的、带着颗粒感的可可香。这种香味来自老城深处那些世代相传的巧克力工坊，它们像这座城市的灵魂，藏在巴洛克立面的背后，却让整个山谷都弥漫着甜蜜的气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`圣乔治大教堂前的阶梯广场是莫迪卡的心脏。站在广场底部仰望，你会被那种垂直的震撼所征服——巴洛克式的立面如此华丽，以至于你会怀疑自己的眼睛。但当夕阳西下，整个立面被染成金色，你会突然理解为什么西西里人说："上帝创造了世界，莫迪卡创造了美。"而当你终于攀登完那似乎没有尽头的台阶，站在教堂前的平台上回望整个山谷，那种"我征服了这座山"的成就感，会让你觉得所有的汗水都值得——特别是当你知道，下山的路通往某个百年巧克力店的门口。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`莫迪卡最动人的地方，在于它将两种看似矛盾的气质完美融合：一种是巴洛克式的华丽与戏剧性，另一种是巧克力制作工艺的质朴与温情。在这里，你可以上午在华丽的教堂里感受宗教的庄严，下午在某个不起眼的小店里，看巧克力师傅用16世纪的方法制作巧克力，那种原始的石磨、那种带着颗粒感的质地，会让你突然明白：原来甜蜜也可以如此有深度。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`莫迪卡老城`} />
                <InfoRow label="英文名称" value={`Modica Old Town`} />
                <InfoRow label="正式名称" value={`Modica Old Town`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`莫迪卡`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`联合国教科文组织世界文化遗产"诺托谷地晚期巴洛克城镇"的重要组成部分，以独特的巧克力制作工艺闻名于世。`} />
                <InfoRow label="建筑特色" value={`典型的西西里巴洛克风格，以华丽的立面装饰、曲线形的阳台和精美的石雕著称，千级台阶连接上下城区。`} />
                <InfoRow label="建筑风格" value={`西西里巴洛克风格，融合了西班牙、阿拉伯和诺曼建筑元素，以华丽的装饰和戏剧性光影效果为特色。`} />
                <InfoRow label="文化价值" value={`保存了世界上最古老的巧克力制作工艺之一，是西西里岛多元文化融合的活态博物馆。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城全天开放，主要景点如圣乔治大教堂（Duomo di San Giorgio）通常每日8:00-12:00、16:00-19:00开放，具体时间可能因宗教活动调整。巧克力博物馆（Museo del Cioccolato）开放时间通常为周二至周日10:00-18:00，周一闭馆。部分私人宫殿和博物馆开放时间较短，建议提前查询。夏季（6-8月）开放时间可能延长，冬季（12-2月）可能缩短。`} />
              <InfoRow label="门票价格" value={`漫步老城免费。圣乔治大教堂免费进入，但欢迎捐赠。巧克力博物馆门票约6欧元，学生优惠票4欧元。城市考古博物馆门票约5欧元。部分贵族宫殿门票3-8欧元不等。品尝传统莫迪卡巧克力约2-5欧元/份。购买"莫迪卡卡"（Modica Card）可享多个景点折扣。`} />
              <InfoRow label="地址" value={`Corso Umberto I, 97015 Modica RG, Italy`} />
              <InfoRow label="交通方式" value={`从卡塔尼亚机场（CTA）出发最便捷：租车自驾约1.5小时（100公里），沿A18高速公路至罗萨里尼后转SS115国道；或乘坐AST巴士公司班车，约2小时直达莫迪卡。从锡拉库萨出发：自驾约1小时20分钟（80公里），沿SS115国道南下；公共交通需先到诺托转车，全程约2.5小时。建议自驾游览西西里岛南部，可灵活安排时间。市内游览主要靠步行，但需做好攀登准备。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`莫迪卡的历史可以追溯到青铜时代，但让它真正登上历史舞台的，是公元9世纪阿拉伯人的到来。阿拉伯人不仅带来了先进的农业技术，更重要的是，他们带来了可可豆和制作巧克力的原始工艺。这种工艺在莫迪卡扎根后，经历了奇妙的本土化过程——当地人发现，用西西里岛特有的火山岩磨制的石磨，能够赋予巧克力独特的粗糙质地和矿物香气。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`诺曼人征服西西里后，莫迪卡成为了重要的封建领地。12世纪，莫迪卡家族在此建立了强大的领地，城市开始呈现出中世纪的风貌。但真正改变莫迪卡命运的，是1693年的大地震。这场灾难性的地震摧毁了西西里岛东南部的大部分城镇，包括莫迪卡。然而，就像凤凰涅槃一样，莫迪卡在废墟上重建，而且是以一种前所未有的华丽方式——西西里巴洛克风格。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`18世纪初的重建时期，莫迪卡迎来了它的黄金时代。贵族们聘请了当时最优秀的建筑师，用当地特有的蜜黄色石灰岩，建造了那些我们今天看到的华丽教堂和宫殿。圣乔治大教堂就是这一时期的杰作，它的立面融合了西西里本土元素和大陆巴洛克风格，创造出一种独特的、充满戏剧性的建筑语言。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`19世纪，莫迪卡成为了重要的农业和商贸中心，特别是巧克力制作业得到了空前发展。当地的巧克力师傅们完善了从可可豆到成品的整个制作过程，创造出了莫迪卡巧克力独特的制作方法——低温研磨、不添加可可脂、保持可可豆的天然风味。这种方法制作的巧克力带有明显的颗粒感，口感介于现代巧克力和古代可可饮料之间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`20世纪，莫迪卡经历了现代化的冲击，但幸运的是，它的历史中心得到了很好的保护。1992年，莫迪卡作为"诺托谷地晚期巴洛克城镇"的一部分，被联合国教科文组织列为世界文化遗产。进入21世纪，随着人们对传统工艺和慢生活的重新关注，莫迪卡巧克力重新获得了国际声誉，成为了这座城市最甜蜜的文化名片。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天时间深度游览莫迪卡，因为这座城市需要你用脚步去丈量它的垂直高度，用味蕾去品味它的甜蜜深度。最佳游览时间是春秋两季（4-5月或9-10月），避开夏季的酷热和冬季的阴雨。游览节奏应该是"慢"字当头——慢慢攀登那些似乎没有尽头的台阶，细细品味那些藏在古老石墙后的甜蜜惊喜。建议上午先征服圣乔治大教堂，感受巴洛克建筑的震撼；下午深入小巷，寻找那些世代相传的巧克力工坊；傍晚时分，在某个可以俯瞰整个山谷的露台，看着夕阳将这座巧克力色的城市染成金色，同时品尝一杯加了莫迪卡巧克力的传统热饮。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`莫迪卡的台阶非常多，建议穿防滑的运动鞋，避免穿高跟或光滑底的鞋子
夏季游览时一定要准备充足的水和防晒用品，因为大部分路程都在阳光下
许多巧克力店都有免费品尝，不妨多比较几家，找到最适合自己口味的那一家
如果想购买巧克力作为礼物，建议选择那些有真空包装的产品，便于携带和保存`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从山下停车场出发，沿着蜿蜒的Via San Mauro开始攀登，感受莫迪卡如何一步步向你展示它的美丽`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在第一个观景平台稍作停留，回望整个山谷，让那种垂直的震撼感深入心底`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`继续向上，穿过那些装饰着精美铁艺阳台的狭窄小巷，感受巴洛克建筑的细节之美`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`终于抵达圣乔治大教堂前的阶梯广场，在那种建筑与地形的完美结合前驻足惊叹`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入教堂内部，让眼睛适应昏暗的光线，寻找那些精美的巴洛克装饰和宗教艺术品`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂侧面的小巷穿出，寻找那些藏在古老石墙后的巧克力工坊，观看传统制作工艺`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在某个可以俯瞰整个山谷的巧克力店露台，品尝正宗的莫迪卡巧克力，感受那种独特的颗粒感`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着另一条台阶路下山，探索那些游客较少但同样迷人的下城区小巷`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 9 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在傍晚时分，回到某个高处，看着夕阳将整个城市染成金色，同时品尝巧克力味的传统热饮`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣乔治大教堂阶梯底部仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`上午阳光斜射时，站在台阶底部用广角镜头拍摄，能完美展现教堂立面的华丽和台阶的壮观`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`大教堂侧面小巷`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，在教堂侧面的小巷里寻找那些可以框住整个立面的天然画框`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`巧克力工坊内部`}</h4>
                  <p className="text-sm text-gray-700">{`在许多巧克力店内部，可以拍摄到传统的石磨和制作过程，记得先征得店主同意`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`山谷对面观景台`}</h4>
                  <p className="text-sm text-gray-700">{`在城市的另一侧寻找可以俯瞰整个莫迪卡的观景台，这里是拍摄城市全景的最佳地点`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`下城区的狭窄小巷`}</h4>
                  <p className="text-sm text-gray-700">{`在那些游客较少的下城区小巷里，可以拍摄到更生活化、更真实的莫迪卡`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`教堂内部通常允许拍照，但禁止使用闪光灯，以免损坏古老的壁画和艺术品`}</li>
                <li>• {`拍摄巧克力制作过程时，最好先征得店主同意，许多师傅很乐意展示他们的技艺`}</li>
                <li>• {`莫迪卡的建筑色彩非常饱和，建议适当降低饱和度，以获得更自然的照片效果`}</li>
                <li>• {`傍晚时分的金色光线是拍摄莫迪卡的最佳时机，建议提前找好机位等待`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`山上观景民宿`}</h4>
                  <p className="text-sm text-blue-800">{`选择那些位于上城区、可以俯瞰整个山谷的民宿，清晨在阳台上看着日出照亮整个城市`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史中心精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`住在那些由古老宫殿改造的精品酒店里，感受睡在历史中的奇妙体验`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`山下传统民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`选择那些位于下城区的传统民宿，体验更地道的当地生活`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`巧克力主题酒店`}</h4>
                  <p className="text-sm text-purple-800">{`选择那些与巧克力工坊合作的主题酒店，可以深入了解巧克力文化`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`山上的住宿通常视野更好，但需要攀登更多台阶，行李较多者需谨慎选择`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季住宿建议提前预订，特别是那些视野好的房间非常抢手`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`许多住宿都提供当地早餐，不妨尝试一下加了巧克力碎的传统早餐`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`部分住宿有自己的巧克力工坊，可以预约参加巧克力制作体验`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开莫迪卡的时候，我的背包里装满了各种口味的巧克力，但心里装满的却是另一种甜蜜——那种只有在千年古城里才能找到的时光味道。这座城市教会我，甜蜜不只是味蕾的享受，更是一种文化的传承。当现代巧克力工业追求丝滑细腻时，莫迪卡却固执地保持着那种原始的颗粒感，就像它固执地保持着那些陡峭的台阶和古老的石墙。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率和标准化的时代，莫迪卡像一块倔强的巧克力，拒绝被磨平棱角。它用千级台阶考验每一个到访者的诚意，用传统的制作工艺守护着最本真的味道。而当你终于理解了这种坚持，你会发现：原来甜蜜也可以如此有深度，原来旅行也可以如此有味道。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`每一块莫迪卡巧克力里，都藏着这座城市的灵魂——那种历经地震却不屈不挠的韧性，那种在废墟上重建美丽的创造力，那种将华丽与质朴完美融合的智慧。而当你在某个远离西西里的午后，拆开一块从莫迪卡带回来的巧克力，那种带着颗粒感的甜蜜会在舌尖绽放，那一刻，你会重新想起那些陡峭的台阶、那些华丽的教堂、那些热情的巧克力师傅，以及整个山谷弥漫着的、那种独特的甜蜜气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`莫迪卡不是一座适合走马观花的城市，它需要你用脚步去丈量它的高度，用味蕾去品味它的深度，用心去感受它的温度。而当你真正理解了这座城市的甜蜜密码，你会发现：原来世界上还有这样一种甜蜜，能够穿越千年时光，依然保持着最本真的模样。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/ragusa" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉古萨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ragusa</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ascoli-piceno" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿斯科利皮切诺</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ascoli Piceno</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/anagni-papal-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿纳尼（教皇的故乡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Anagni</p>
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
