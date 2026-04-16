import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿尔塔古城 Alta Old Town｜探秘北极圈内的古老岩画与萨米文化 - 最佳欧洲景点',
  description: '说实话，刚到阿尔塔古城的时候，我有点懵——这跟我想象中那种有城墙和街道的“古城”完全不一样！它更像是一片被时间遗忘的荒野，静静地躺在阿尔塔峡湾边上。但当你走近，看到那些散落在岩石上、有着数千年历史的红色岩画时，那种震撼是直击心灵的。想象一下，在北极圈的阳光下，古人用赭石颜料描绘出驯鹿、熊、船只和人类...',
}

export default function AltaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '阿尔塔古城', href: '/attractions/alta-old-town' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">阿尔塔古城</h1>
          <p className="text-xl text-gray-600 mb-4">Alta Old Town</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">挪威</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">阿尔塔</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">说实话，刚到阿尔塔古城的时候，我有点懵——这跟我想象中那种有城墙和街道的“古城”完全不一样！它更像是一片被时间遗忘的荒野，静静地躺在阿尔塔峡湾边上。但当你走近，看到那些散落在岩石上、有着数千年历史的红色岩画时，那种震撼是直击心灵的。想象一下，在北极圈的阳光下，古人用赭石颜料描绘出驯鹿、熊、船只和人类活动的场景，就像一部刻在石头上的古老日记。风很大，空气清冷，但心里却特别宁静。这里不仅是联合国教科文组织世界遗产，更是通往史前人类精神世界的一扇窗，氛围神秘又苍凉，特别酷。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">遗址区为户外露天环境，四季皆可访问，但体验最佳时间是5月至9月，日照长，气候相对温和。冬季来访需做好防寒防滑准备，且部分小路可能被冰雪覆盖。博物馆门票包含精彩的室内展览，详细解读岩画和历史，非常值得一看。持有挪威文化遗产护照可能有折扣。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">阿尔塔古城的故事，要从公元前4200年左右说起——没错，是五千多年前！最早来到这里的是狩猎采集者，他们在阿尔塔峡湾沿岸光滑的岩石上，刻下了第一批岩画。这些画最初可能是一种巫术或仪式，祈求狩猎成功。时间快进到公元前1800年到公元500年，岩画创作进入了高峰期，画面变得更加复杂，出现了大型的驯鹿群、狩猎场景、船只甚至几何图案，反映了从内陆狩猎到沿海渔猎生活方式的转变。有趣的是，这些画不是刻上去的，而是用含有铁氧化物的赭石“画”上去的，所以经历了数千年风雨，依然保持着暗红色调。这些岩画在20世纪70年代才被大规模发现和研究，一下子震惊了世界。1985年，它被列入世界遗产名录，成为挪威最早的世界遗产之一。站在这里，你会感觉时间被压缩了，那些看似简单的线条，连接着远古人类与今天的我们，他们看到的峡湾和群山，与我们眼前所见并无二致，这种跨越时空的共鸣非常奇妙。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">推荐游览时间约2-3小时。路线通常从现代化的阿尔塔博物馆建筑开始，先参观室内展陈建立背景知识，然后沿着规划清晰的木质步道，深入户外遗址区，近距离观赏几处最重要的岩画群，最后回到博物馆咖啡馆或礼品店。步道平坦易行。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从博物馆主入口进入，参观关于岩画和萨米文化的室内展览。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  走出博物馆，踏上通往遗址区的木质栈道。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  在主要观景平台“Hjemmeluft”停留，欣赏最集中、最著名的岩画群。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  沿着海岸栈道继续前行，寻找描绘大型狩猎场景和船只的岩画。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  走到“Kåfjord”区域，观看一些更抽象的符号和图形。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  返回博物馆建筑，在咖啡馆休息并俯瞰峡湾全景。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">步道上有清晰的编号和说明牌（多国语言），跟着走就不会错过重点。建议穿一双舒适防滑的步行鞋，因为海边岩石区域可能湿滑。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **Hjemmeluft观景平台**：**最佳拍摄时间**为午后，阳光能较好照亮岩画。**角度**从栈道俯拍岩画群与峡湾的背景，能体现遗址的广阔与自然环境的融合。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **博物馆咖啡馆露台**：**最佳拍摄时间**是傍晚（夏季午夜阳光时分尤佳）。**角度**面向峡湾和远山，拍摄全景，画面宁静壮美。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **海岸栈道转角处**：**最佳拍摄时间**晴天任意时段。**角度**低角度特写某一块色彩鲜明的岩画（如大驯鹿），细节感强，历史感扑面而来。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">请务必遵守规定，不要为了拍照而踩踏或触摸岩画，使用长焦镜头可以很好地捕捉细节。无人机飞行可能有严格限制，需提前查询。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **预算之选**：阿尔塔市中心的经济型酒店或民宿，交通生活便利，前往古城可乘车或步行。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **特色之选**：峡湾附近的木屋或度假村，推窗即见美景，体验北极圈的自然宁静。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **便捷之选**：选择位于阿尔塔机场与古城之间的酒店，适合短暂停留或自驾游客。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **冒险之选**：冬季可考虑附近的冰雪酒店或萨米帐篷营地，获得独特文化体验。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">夏季是旅游旺季，建议提前预订。如果主要目标是探索古城和岩画，住在阿尔塔市内最为方便。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">阿尔塔古城带给我的，不是繁华都市的喧嚣，而是一种深沉的、与远古对话的孤独感。它不像那些金碧辉煌的宫殿让人惊叹，却用最质朴的岩石和颜料，讲述着人类最原始的故事和生存智慧。在北极清澈的光线下，抚摸（用目光）这些古老的痕迹，你会对时间和生命有不一样的感悟。这是一个需要静下心来感受的地方，强烈推荐给喜欢历史、文化和壮丽自然风光的旅行者。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="全年24小时开放（户外遗址区）。阿尔塔博物馆开放时间：夏季（6月-8月）9:00-20:00；冬季（9月-5月）10:00-16:00，周一可能闭馆。" />
                <InfoRow icon="🎫" label="门票" value="进入古城遗址区免费。参观阿尔塔博物馆（含岩画保护区和室内展览）：成人约130挪威克朗，儿童/学生/老人有优惠，家庭票可选。" />
                <InfoRow icon="📍" label="地址" value="Alta Museum, Altaveien 19, 9518 Alta, Norway" />
                <InfoRow icon="🚌" label="交通" value="从阿尔塔机场（ALF）出发，驾车或乘坐出租车约15-20分钟即可抵达。从阿尔塔市中心步行前往约需30-40分钟，也可乘坐当地巴士。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
