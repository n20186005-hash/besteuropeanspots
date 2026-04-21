import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '杜斯堡 Doesburg｜荷兰最古老的芥末城与砖砌建筑群 - 最佳欧洲景点',
  description: '嘿，朋友，想象一下，当你转过一个安静的街角，一阵温暖而略带辛辣的甜香毫无预警地钻进了你的鼻子——那不是胡椒，也不是肉桂，而是新鲜研磨的芥末籽，混合着醋、香料和时光的味道。这就是杜斯堡给你的第一个，也是最难忘的拥抱。这座被艾瑟尔河与古老护城河温柔环抱的小城，仿佛一颗被琥珀封存起来的蜜糖色宝石，时间在这...',
}

export default function DoesburgMustardCityHistoricBrickPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '荷兰', href: '/destinations/netherlands' },
            { label: '杜斯堡', href: '/destinations/netherlands' },
            { label: '杜斯堡', href: '/attractions/doesburg-mustard-city-historic-brick' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`杜斯堡・Doesburg・荷兰・杜斯堡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，想象一下，当你转过一个安静的街角，一阵温暖而略带辛辣的甜香毫无预警地钻进了你的鼻子——那不是胡椒，也不是肉桂，而是新鲜研磨的芥末籽，混合着醋、香料和时光的味道。这就是杜斯堡给你的第一个，也是最难忘的拥抱。这座被艾瑟尔河与古老护城河温柔环抱的小城，仿佛一颗被琥珀封存起来的蜜糖色宝石，时间在这里不是流逝，而是沉淀。
你的脚下是泛着水光的鹅卵石路，两侧是鳞次栉比的砖砌山墙房屋，那些砖块不是冰冷的工业产物，每一块都像被夕阳亲吻过，呈现出从桃红到赭石色的丰富渐变。阳光斜射下来，在墙面上切割出明暗交错的几何图形，窗台上鲜红的天竺葵是这暖色调画布上最活泼的笔触。你几乎听不到汽车的喧嚣，只有自行车轮胎碾过石路的沙沙声，远处咖啡馆传来杯碟碰撞的清脆响声，还有风穿过高耸的圣马丁教堂塔楼时，发出的那种类似低语的声音。这里的生活节奏，像极了运河里平缓流动的水。
而这座城的灵魂，就藏在那股无处不在的香气里。自1457年以来，杜斯堡人就在这座城里研磨芥末。这不是超市里那种单调的黄色酱料，而是一种复杂、醇厚、带有颗粒感的艺术。你会看到当地人熟门熟路地走进那家古老的芥末磨坊，买上一罐新鲜调制的“豪达芥末”或“杜斯堡甜芥末”，就像我们买面包一样自然。在这里，芥末不仅是调味品，它是历史的香料，是连接每个家庭餐桌的味觉密码，让这座静谧的砖石之城，拥有了一种直击心灵的、热辣的生命力。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，想象一下，当你转过一个安静的街角，一阵温暖而略带辛辣的甜香毫无预警地钻进了你的鼻子——那不是胡椒，也不是肉桂，而是新鲜研磨的芥末籽，混合着醋、香料和时光的味道。这就是杜斯堡给你的第一个，也是最难忘的拥抱。这座被艾瑟尔河与古老护城河温柔环抱的小城，仿佛一颗被琥珀封存起来的蜜糖色宝石，时间在这里不是流逝，而是沉淀。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你的脚下是泛着水光的鹅卵石路，两侧是鳞次栉比的砖砌山墙房屋，那些砖块不是冰冷的工业产物，每一块都像被夕阳亲吻过，呈现出从桃红到赭石色的丰富渐变。阳光斜射下来，在墙面上切割出明暗交错的几何图形，窗台上鲜红的天竺葵是这暖色调画布上最活泼的笔触。你几乎听不到汽车的喧嚣，只有自行车轮胎碾过石路的沙沙声，远处咖啡馆传来杯碟碰撞的清脆响声，还有风穿过高耸的圣马丁教堂塔楼时，发出的那种类似低语的声音。这里的生活节奏，像极了运河里平缓流动的水。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而这座城的灵魂，就藏在那股无处不在的香气里。自1457年以来，杜斯堡人就在这座城里研磨芥末。这不是超市里那种单调的黄色酱料，而是一种复杂、醇厚、带有颗粒感的艺术。你会看到当地人熟门熟路地走进那家古老的芥末磨坊，买上一罐新鲜调制的“豪达芥末”或“杜斯堡甜芥末”，就像我们买面包一样自然。在这里，芥末不仅是调味品，它是历史的香料，是连接每个家庭餐桌的味觉密码，让这座静谧的砖石之城，拥有了一种直击心灵的、热辣的生命力。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`杜斯堡`} />
                <InfoRow label="英文名称" value={`Doesburg`} />
                <InfoRow label="正式名称" value={`Doesburg`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`杜斯堡`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座在汉萨同盟时期达到繁荣顶峰的防御性城镇，拥有荷兰最古老、且仍在运营的芥末工厂。`} />
                <InfoRow label="建筑特色" value={`由温暖的红色砖石构筑的完整中世纪城镇景观，拥有罕见的星形护城河防御体系，以及一座高耸的哥特式教堂。`} />
                <InfoRow label="建筑风格" value={`以中世纪晚期和文艺复兴时期的砖砌哥特式风格为主，杂糅了后来的古典主义元素。`} />
                <InfoRow label="文化价值" value={`是荷兰黄金时代商贸网络与生活方式的活态博物馆，其芥末制作传统是荷兰饮食文化遗产的重要部分。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城区全天开放。主要景点如芥末磨坊 (Doesburgse Mosterdfabriek) 开放时间为周二至周六 10:00-17:00，周日 12:00-17:00；冬季（11月至次年3月）部分日期可能缩短开放时间或仅周末开放。市政厅 (Stadhuis) 和葡萄酒博物馆仅在特定导览日或预约参观。建议行前在官网确认最新安排。`} />
              <InfoRow label="门票价格" value={`进入古城免费。芥末磨坊门票：成人约7欧元，儿童（4-12岁）约4欧元，4岁以下免费。家庭票及与葡萄酒博物馆的联票有优惠。市政厅导览游价格约为每人5欧元。`} />
              <InfoRow label="地址" value={`Meipoortstraat 1, 6981 CE Doesburg, Netherlands`} />
              <InfoRow label="交通方式" value={`从阿姆斯特丹史基浦机场出发：最便捷方式是乘坐火车。在机场火车站乘坐开往阿纳姆方向的城际列车，在阿纳姆中央车站换乘前往多廷赫姆或温特斯韦克的支线列车，在杜斯堡站下车。总耗时约1.5-2小时，班次频繁。从车站步行约10-15分钟即可进入历史中心。自驾从阿纳姆出发沿A12/A348公路约20分钟车程，古城边缘有多个收费停车场（P1，P2），建议将车停在此处然后步行探索。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲杜斯堡的故事，得先从地图上看它的位置——艾瑟尔河畔，正是这条通往德国腹地的水路，在700多年前决定了它的命运。大概在1237年左右，这里获得了城市权利，那些蜜色的砖块开始一块块垒砌起来，不是为了美观，而是为了生存与财富。它很快加入了强大的汉萨同盟，一个中世纪北欧的“商业北约”。想想看，来自波罗的海的木材、毛皮，来自莱茵地区的葡萄酒、金属，都在杜斯堡的码头装卸、交易。那时的河岸，空气里混杂的不是芥末香，而是沥青、湿木头、香料和忙碌人潮的汗味，码头工人的号子声和商人的讨价还价声不绝于耳。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`繁荣也意味着危险。它的战略地位太重要了，于是人们开始用砖石和泥土为自己打造铠甲。到16世纪，它已经变成了一座令人望而生畏的星形堡垒。没错，就是你在空中俯瞰时看到的那五角星形状的护城河系统。这不是天然的，而是当时最顶尖的军事工程学杰作。可惜，再坚固的城墙也挡不住历史的洪流。1672年的“灾难年”，法国太阳王路易十四的军队像铁锤一样砸向荷兰，杜斯堡被攻陷并遭受重创。那些被火炮轰击过的伤痕，至今还能在一些老建筑的墙壁上找到蛛丝马迹。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战争来了又走，但生活的滋味需要延续。或许正是经历过苦涩，人们才更懂得珍惜一丝热辣带来的慰藉。就在那个动荡的世纪里，杜斯堡的芥末制造传统被正式记录并巩固下来。早期的磨坊依靠风车或水车驱动石磨，碾压着来自世界各地（主要是英国和荷兰本土）的芥末籽。配方是每个磨坊主 guarded 的秘密，就像炼金术士的配方一样。你能想象吗？在那些砖砌的厂房里，工人们满身粉末，空气中弥漫着令人打喷嚏但又无比诱人的香气，一桶桶承载着风味的芥末被装入陶罐，运往整个荷兰乃至更远的地方。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，随着汉萨同盟的衰落和大型港口的兴起，杜斯堡的商业光环渐渐暗淡。它从一个喧嚣的贸易枢纽，慢慢蜕变成一个安静的区域中心。塞翁失马，焉知非福？正是因为发展的停滞，它那完整的中世纪城市肌理和独特的星形防御工事，才得以奇迹般地保存下来，没有遭受大规模现代化建设的破坏。二战末期，德国军队在撤退时炸毁了圣马丁教堂的塔楼，这几乎是它历史上最后一次重大的创伤。但荷兰人又一次用他们标志性的坚韧和精细，一砖一瓦地将其重建复原。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，你今天漫步的这座看似宁静完美的小城，实际上是一本立体的历史书。每一块砖都听过商船的汽笛和士兵的脚步声，每一条护城河的水都倒映过战火与和平。而那传承了五个多世纪的芥末香气，就是书写这本书时，所用的最执着、最有人情味的墨水。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味杜斯堡，建议你安排一整天的时间，最好在上午十点前抵达。这时候旅游大巴还没来，小城正在悠然醒来，芥末磨坊刚开始研磨，光线也最适合拍照。整体的节奏应该是“慢”。从参观芥末磨坊开始，用味觉打开历史的大门；然后让脚步带你穿行于迷宫般的砖砌街巷，探寻市政厅的精致与教堂的雄伟；下午沿着古老的星形堡垒城墙散步，感受防御工事的几何之美；最后在艾瑟尔河畔找张长椅坐下，看船只缓缓驶过，完成一场从味觉、视觉到心灵的全方位沉浸。这样安排能让你由内到外，层层深入地理解这座城的精髓。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周日和周一许多小商店和博物馆可能不营业，规划行程时请务必避开。老城街道多为鹅卵石，请务必穿一双舒适且鞋底较厚的步行鞋。自驾游客务必注意，古城中心区域几乎全部为步行区，请将车停放在标志清晰的P1或P2停车场。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第一站当然是直奔那栋飘着独特香气的芥末磨坊，在古老的木梁下观看石磨如何将褐色种子变成金色的酱料，并一定要在柜台品尝那十几种风味各异的芥末。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从磨坊出来右转，沿着风景如画的科克街慢慢逛，仔细欣赏两旁山墙房屋上各不相同的装饰性砖砌图案和精美门楣。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在街巷的尽头你会看到小巧而优雅的市政厅广场，站在广场中央仰望那座带有钟琴的阶梯式山墙建筑，感受市政权力的宁静与庄严。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着市政厅背后的鹅卵石坡道向上，去拜访高耸的圣马丁大教堂，走进其略显朴素但充满历史感的中殿，倾听管风琴的试音或只是享受片刻的宁静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂的侧门出来，沿着“Boterberg”这条街往北走，你会发现自己正走在古老的城墙堡垒之上，在这里可以清晰地看到星形护城河的轮廓和远处的风车。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着城墙的路径一直走到东北角的“Meipoort”城门遗址，这是感受古城防御体系的最佳地点，想象一下士兵曾在此眺望敌情。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过城门区域，沿着艾瑟尔河岸的步道悠闲地向南走，看天鹅游弋，货运驳船平静地驶过，对岸是开阔的荷兰田园风光。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，让脚步把你带回老城中心，在市政厅广场或某条安静小巷的露天咖啡馆坐下，点一杯本地啤酒或咖啡，配上一盘用杜斯堡芥末调味的奶酪拼盘。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`芥末磨坊内的石磨与木梁`}</h4>
                  <p className="text-sm text-gray-700">{`利用从高窗射入的柔和的侧光，聚焦于正在转动的古老石磨和撒落的芥末籽，能拍出充满质感和故事性的工坊纪实画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣马丁教堂塔楼下的鹅卵石斜坡`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏的低角度光线，从斜坡底部向上仰拍，可以将高耸的砖塔、蜿蜒的石路和两侧的旧屋全部纳入构图，极具纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`星形堡垒城墙的拐角处`}</h4>
                  <p className="text-sm text-gray-700">{`站在城墙的棱角位置，使用广角镜头，可以同时捕捉到脚下厚重的砖砌拱门、蜿蜒的护城河水道和对岸的绿地，完美展现堡垒的几何形态。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`艾瑟尔河畔望向老城天际线`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，从河对岸或河上的步行桥回望，可以将圣马丁教堂的尖塔、风车以及成片的砖砌屋顶一起收入镜头，构成一幅典型的水岸荷兰古镇全景图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`市政厅广场的咖啡馆视角`}</h4>
                  <p className="text-sm text-gray-700">{`找一个露天座位，用长焦镜头捕捉广场上路人骑车经过、居民在长椅上看报、或者孩子们追逐鸽子的生活瞬间，充满烟火气。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄当地居民或商店内部前，请务必先微笑并礼貌地征求同意，荷兰人通常很友善但也很注重隐私。无人机飞行在荷兰受到严格管制，尤其在历史城镇上空，未经特别许可请勿放飞，以免招致高额罚款。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`运河边的历史B&B`}</h4>
                  <p className="text-sm text-blue-800">{`住进一栋17世纪的商人房屋，房间有着低矮的木梁和望向宁静运河的窗子，早餐时房东会端上自制果酱和新鲜烘焙的糕点。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`由古老的烟草仓库改造而成，内部是极简的工业风设计，但保留了原始的砖墙和桁架，位于老城边缘，安静又时髦。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`城外乡间别墅酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`如果追求绝对宁静，可以选择驱车5分钟抵达城外乡村的精品别墅酒店，四周被牧场和果园环绕，晚上可以看到璀璨的星空。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`浪漫古城小酒店`}</h4>
                  <p className="text-sm text-purple-800">{`位于市政厅广场一侧，只有寥寥数间客房，每间都以荷兰黄金时代的画家命名，装饰古典而温馨，下楼就是咖啡馆和餐厅，位置绝佳。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`杜斯堡非常小巧安静，夜间几乎没有噪音，是享受深度睡眠的绝佳之地。夏季和周末的住宿相当紧俏，尤其是老城中心的特色住宿，务必提前数月预订。这里的治安极好，夜晚独自在鹅卵石小巷散步也完全不用担心。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开杜斯堡很久之后，那股混合着砖石粉尘、河水湿气与辛辣芥末的复杂气味，还会时不时地萦绕在记忆里。它不像那些名声显赫的大都市，用磅礴的气势瞬间将你征服；它更像一位安静的长者，用温润的掌心握着你的手，带你触摸砖块上每一道风雨的刻痕，让你品尝岁月酿出的、层次分明的滋味。在这里，历史不是锁在玻璃柜里的标本，而是街角飘来的香气，是护城河里倒映的云影，是老太太自行车篮里那一罐刚买的、准备晚餐用的芥末酱。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求效率、追求“网红同款”的快节奏世界里，杜斯堡固执地守护着它的慢、它的旧、它的“专一”。它提醒着我们，一座城市的伟大，不仅可以体现在征服世界的野心，也可以体现在五百年如一日地做好一罐芥末的执着。它让你放下手机，用脚步丈量每一条小巷的弧度，用鼻子捕捉空气里微妙的变化，用整个身心去感受一种完整、自洽、与土地紧密相连的生活美学。如果你厌倦了浮光掠影的打卡，渴望一场能沉到生活肌理之处的旅行，那么，这个艾瑟尔河畔的蜜色芥末小城，就是你一直在寻找的答案。它或许不会让你激动得尖叫，但一定会让你离开时，内心充满一种温热而踏实的平静。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/giethoorn" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    羊
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">羊角村</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Giethoorn</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gouda-cheese-market" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    豪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">豪达奶酪小镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gouda</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kasteel-de-haar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克莱沃城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kasteel de Haar</p>
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
