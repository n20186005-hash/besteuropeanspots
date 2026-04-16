import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '比荷卢 Benelux｜欧洲的“迷你精华”，一次旅行玩转三国风情 - 最佳欧洲景点',
  description: '嘿，如果你觉得欧洲太大不知道从哪玩起，那比荷卢绝对是你的完美起点！这可不是一个单一的景点，而是一个由比利时、荷兰、卢森堡组成的“黄金三角”区域，面积不大，却浓缩了欧洲最经典的风情。想象一下，早上在阿姆斯特丹的运河边啃着华夫饼，下午就在布鲁塞尔的大广场上寻找撒尿小童，傍晚可能已经坐在卢森堡的峡谷悬崖边...',
}

export default function BeneluxPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '比利时・荷兰・卢森堡', href: '/attractions/benelux' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">比利时・荷兰・卢森堡</h1>
          <p className="text-xl text-gray-600 mb-4">Benelux</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">比利时、荷兰、卢森堡</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">多城市</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">嘿，如果你觉得欧洲太大不知道从哪玩起，那比荷卢绝对是你的完美起点！这可不是一个单一的景点，而是一个由比利时、荷兰、卢森堡组成的“黄金三角”区域，面积不大，却浓缩了欧洲最经典的风情。想象一下，早上在阿姆斯特丹的运河边啃着华夫饼，下午就在布鲁塞尔的大广场上寻找撒尿小童，傍晚可能已经坐在卢森堡的峡谷悬崖边喝咖啡了。这里交通方便得像在一个国家里穿梭，却能体验到完全不同的文化节奏——荷兰的自由与创意，比利时的巧克力与漫画，卢森堡的宁静与富庶。它就像欧洲的“体验装”，让你用最短的时间，尝到最丰富的味道。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">比荷卢作为一个区域概念，本身没有开放时间限制。但区域内各景点（如博物馆、宫殿）有各自的开放时间，通常夏季（4-10月）开放时间更长，冬季可能缩短或部分关闭，建议出行前具体查询。三国均属申根区，持有效申根签证可自由通行。货币方面，荷兰和比利时使用欧元，卢森堡也使用欧元，消费水平卢森堡较高，荷兰阿姆斯特丹和比利时布鲁塞尔相当。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">比荷卢的故事，是一部小国们抱团取暖、最终成为欧盟“发动机”的精彩历史。它的名字来源于三个国家英文名的首字母：**Bel**gium, **Ne**therlands, **Lux**embourg。早在1944年，二战还没结束呢，这三个被战争摧残的邻居就在伦敦流亡政府时期签了个关税同盟协议，想着战后一起恢复经济。这可以说是欧洲一体化的最早实验田之一。到了1958年，它们正式成立了“比荷卢经济联盟”，比大名鼎鼎的欧共体（欧盟前身）还早诞生！你走在布鲁塞尔的欧盟总部区，就能感受到这段历史的分量——这里可是欧洲政治的“首都”。回看历史，这片土地曾是勃艮第、西班牙哈布斯堡王朝的领地，经历过战争的纷争，也孕育了梵高、伦勃朗这样的艺术巨匠。如今，它们从经济合作延伸到政治、文化方方面面，成了欧洲最稳定、最繁荣的区域之一。感觉就像三个性格各异的好朋友，荷兰开放务实，比利时多元融合，卢森堡沉稳富有，联手打造了一个迷人的小世界。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">经典的比荷卢之旅通常安排7-10天，采用环形路线，从阿姆斯特丹入境，顺时针或逆时针游览。建议起点为阿姆斯特丹，依次游览荷兰（鹿特丹/海牙）、比利时（布鲁日/根特/布鲁塞尔）、卢森堡，最后可从布鲁塞尔或卢森堡离境。城市间主要依靠高效铁路网。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  阿姆斯特丹：运河游船，参观博物馆广场（梵高博物馆、国立博物馆）。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  鹿特丹：看现代建筑（方块屋、市场大厅），感受欧洲第一大港气息。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  布鲁日：漫步中世纪古城，乘船游览运河，仿佛穿越回过去。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  布鲁塞尔：打卡大广场和撒尿小童，品尝华夫饼和巧克力。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  卢森堡市：漫步峡谷上的走廊，俯瞰佩特罗斯大峡谷的壮丽景色。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">使用铁路通票（如Eurail Benelux Pass）非常划算。城市内步行和公共交通即可，记得穿舒适的鞋子，因为老城区的石板路很美但也很考验脚力。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **阿姆斯特丹运河桥**：清晨或蓝调时刻，沿任一运河桥梁拍摄，水面倒映着两岸山形墙建筑，充满韵律感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **布鲁日玫瑰码头（Rozenhoedkaai）**：白天，站在码头边，以运河、石桥和中世纪建筑为背景，拍摄经典明信片角度。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **布鲁塞尔大广场**：夜晚，广场建筑灯光亮起，仰拍宏伟的市政厅和 guild houses，金碧辉煌。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **卢森堡宪法广场平台**：下午顺光时分，从平台俯瞰阿道夫桥和峡谷，城市与自然结合的景观层次分明。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">荷兰风车村（如小孩堤防）适合广角镜头表现开阔感；布鲁日街头适合用长焦捕捉建筑和人物的细节故事。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **经济之选**：阿姆斯特丹或布鲁塞尔中央车站附近的国际连锁酒店或设计旅馆，交通便利。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **特色体验**：入住布鲁日或根特的运河边历史建筑改造的精品酒店，感受中世纪氛围。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **高端享受**：卢森堡市中心的五星级酒店或阿姆斯特丹的豪华运河屋酒店，享受顶级服务。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **便捷中转**：选择鹿特丹中央车站附近的现代酒店，方便前往下一个城市。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">旺季（夏季及圣诞市场期间）需提前数月预订，尤其是阿姆斯特丹和布鲁日。 Airbnb 也是体验本地社区的好选择。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">比荷卢之旅就像品尝一盒精致的欧洲巧克力，每一颗都有惊喜。它完美解决了“选择困难症”——不必纠结，全都要。在这里，你能感受到历史与现代的交织，浪漫与务实的并存。这不仅仅是一次地理上的穿越，更是一次密集而愉悦的文化感官体验。如果你想要一段高效、丰富又不至于太疲惫的欧洲初体验，比荷卢绝对会给你满满的回忆和再回来的冲动。</p>
            </Section>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <p className="text-sm text-gray-600 text-center">
                本文由旅行作者 Winter Grady 实地走访整理，专注欧洲小众景点深度攻略，持续分享真实游览体验。
              </p>
              <p className="text-xs text-gray-500 text-center mt-2">
                本站内容仅供旅行参考使用，商务合作与转载事宜请通过联系页脚提交申请。
              </p>
              <p className="text-xs text-gray-500 text-center">
                管理团队保留所有内容版权，未经许可禁止搬运、摘抄或商用。
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">实用信息</h3>
              <div className="space-y-4">
                <InfoRow icon="🕒" label="开放时间" value="全年开放" />
                <InfoRow icon="🎫" label="门票" value="无门票，具体景点费用另计" />
                <InfoRow icon="📍" label="地址" value="比利时、荷兰、卢森堡三国区域" />
                <InfoRow icon="🚌" label="交通" value="从阿姆斯特丹史基浦机场（AMS）、布鲁塞尔机场（BRU）或卢森堡机场（LUX）出发，三国之间火车交通极为便利。例如，从阿姆斯特丹中央车站到布鲁塞尔中央车站，高铁约2小时；从布鲁塞尔到卢森堡市，火车约3小时。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
