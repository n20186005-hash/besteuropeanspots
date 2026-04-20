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
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '比利时・荷兰・卢森堡', href: '/attractions/benelux' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">比利时・荷兰・卢森堡・Benelux・比利时、荷兰、卢森堡・多城市</h1>
          <p className="text-lg text-gray-600 mb-6">
            嘿，如果你觉得欧洲太大不知道从哪玩起，那比荷卢绝对是你的完美起点！这可不是一个单一的景点，而是一个由比利时、荷兰、卢森堡组成的“黄金三角”区域，面积不大，却浓缩了欧洲最经典的风情。想象一下，早上在阿姆斯特丹的运河边啃着华夫饼，下午就在布鲁塞尔的大广场上寻找撒尿小童，傍晚可能已经坐在卢森堡的峡谷悬崖边喝咖啡了。这里交通方便得像在一个国家里穿梭，却能体验到完全不同的文化节奏——荷兰的自由与创意，比利时的巧克力与漫画，卢森堡的宁静与富庶。它就像欧洲的“体验装”，让你用最短的时间，尝到最丰富的味道。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">嘿，如果你觉得欧洲太大不知道从哪玩起，那比荷卢绝对是你的完美起点！这可不是一个单一的景点，而是一个由比利时、荷兰、卢森堡组成的“黄金三角”区域，面积不大，却浓缩了欧洲最经典的风情。想象一下，早上在阿姆斯特丹的运河边啃着华夫饼，下午就在布鲁塞尔的大广场上寻找撒尿小童，傍晚可能已经坐在卢森堡的峡谷悬崖边喝咖啡了。这里交通方便得像在一个国家里穿梭，却能体验到完全不同的文化节奏——荷兰的自由与创意，比利时的巧克力与漫画，卢森堡的宁静与富庶。它就像欧洲的“体验装”，让你用最短的时间，尝到最丰富的味道。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="比利时・荷兰・卢森堡" />
                <InfoRow label="英文名称" value="Benelux" />
                <InfoRow label="正式名称" value="Benelux" />
                <InfoRow label="国家" value="比利时、荷兰、卢森堡" />
                <InfoRow label="城市" value="多城市" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="全年开放" />
              <InfoRow label="门票价格" value="无门票，具体景点费用另计" />
              <InfoRow label="地址" value="比利时、荷兰、卢森堡三国区域" />
              <InfoRow label="交通方式" value="从阿姆斯特丹史基浦机场（AMS）、布鲁塞尔机场（BRU）或卢森堡机场（LUX）出发，三国之间火车交通极为便利。例如，从阿姆斯特丹中央车站到布鲁塞尔中央车站，高铁约2小时；从布鲁塞尔到卢森堡市，火车约3小时。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">比荷卢的故事，是一部小国们抱团取暖、最终成为欧盟“发动机”的精彩历史。它的名字来源于三个国家英文名的首字母：Belgium, Netherlands, Luxembourg。早在1944年，二战还没结束呢，这三个被战争摧残的邻居就在伦敦流亡政府时期签了个关税同盟协议，想着战后一起恢复经济。这可以说是欧洲一体化的最早实验田之一。到了1958年，它们正式成立了“比荷卢经济联盟”，比大名鼎鼎的欧共体（欧盟前身）还早诞生！你走在布鲁塞尔的欧盟总部区，就能感受到这段历史的分量——这里可是欧洲政治的“首都”。回看历史，这片土地曾是勃艮第、西班牙哈布斯堡王朝的领地，经历过战争的纷争，也孕育了梵高、伦勃朗这样的艺术巨匠。如今，它们从经济合作延伸到政治、文化方方面面，成了欧洲最稳定、最繁荣的区域之一。感觉就像三个性格各异的好朋友，荷兰开放务实，比利时多元融合，卢森堡沉稳富有，联手打造了一个迷人的小世界。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  经典的比荷卢之旅通常安排7-10天，采用环形路线，从阿姆斯特丹入境，顺时针或逆时针游览。建议起点为阿姆斯特丹，依次游览荷兰（鹿特丹/海牙）、比利时（布鲁日/根特/布鲁塞尔）、卢森堡，最后可从布鲁塞尔或卢森堡离境。城市间主要依靠高效铁路网。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>使用铁路通票（如Eurail Benelux Pass）非常划算。城市内步行和公共交通即可，记得穿舒适的鞋子，因为老城区的石板路很美但也很考验脚力。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  阿姆斯特丹：运河游船，参观博物馆广场（梵高博物馆、国立博物馆）。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  鹿特丹：看现代建筑（方块屋、市场大厅），感受欧洲第一大港气息。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  布鲁日：漫步中世纪古城，乘船游览运河，仿佛穿越回过去。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  布鲁塞尔：打卡大广场和撒尿小童，品尝华夫饼和巧克力。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  卢森堡市：漫步峡谷上的走廊，俯瞰佩特罗斯大峡谷的壮丽景色。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  阿姆斯特丹运河桥</h4>
                  <p className="text-sm text-gray-700">清晨或蓝调时刻，沿任一运河桥梁拍摄，水面倒映着两岸山形墙建筑，充满韵律感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  布鲁日玫瑰码头（Rozenhoedkaai）</h4>
                  <p className="text-sm text-gray-700">白天，站在码头边，以运河、石桥和中世纪建筑为背景，拍摄经典明信片角度。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  布鲁塞尔大广场</h4>
                  <p className="text-sm text-gray-700">夜晚，广场建筑灯光亮起，仰拍宏伟的市政厅和 guild houses，金碧辉煌。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  卢森堡宪法广场平台</h4>
                  <p className="text-sm text-gray-700">下午顺光时分，从平台俯瞰阿道夫桥和峡谷，城市与自然结合的景观层次分明。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 荷兰风车村（如小孩堤防）适合广角镜头表现开阔感；布鲁日街头适合用长焦捕捉建筑和人物的细节故事。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  经济之选</h4>
                  <p className="text-sm text-blue-800">阿姆斯特丹或布鲁塞尔中央车站附近的国际连锁酒店或设计旅馆，交通便利。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  特色体验</h4>
                  <p className="text-sm text-green-800">入住布鲁日或根特的运河边历史建筑改造的精品酒店，感受中世纪氛围。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  高端享受</h4>
                  <p className="text-sm text-yellow-800">卢森堡市中心的五星级酒店或阿姆斯特丹的豪华运河屋酒店，享受顶级服务。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  便捷中转</h4>
                  <p className="text-sm text-purple-800">选择鹿特丹中央车站附近的现代酒店，方便前往下一个城市。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">旺季（夏季及圣诞市场期间）需提前数月预订，尤其是阿姆斯特丹和布鲁日。 Airbnb 也是体验本地社区的好选择。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">比荷卢之旅就像品尝一盒精致的欧洲巧克力，每一颗都有惊喜。它完美解决了“选择困难症”——不必纠结，全都要。在这里，你能感受到历史与现代的交织，浪漫与务实的并存。这不仅仅是一次地理上的穿越，更是一次密集而愉悦的文化感官体验。如果你想要一段高效、丰富又不至于太疲惫的欧洲初体验，比荷卢绝对会给你满满的回忆和再回来的冲动。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
