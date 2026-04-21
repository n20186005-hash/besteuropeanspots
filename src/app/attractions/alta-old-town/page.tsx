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
            { label: '挪威', href: '/destinations/norway' },
            { label: '阿尔塔古城', href: '/attractions/alta-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">阿尔塔古城・Alta Old Town・挪威・阿尔塔</h1>
          <p className="text-lg text-gray-600 mb-6">
            说实话，刚到阿尔塔古城的时候，我有点懵——这跟我想象中那种有城墙和街道的“古城”完全不一样！它更像是一片被时间遗忘的荒野，静静地躺在阿尔塔峡湾边上。但当你走近，看到那些散落在岩石上、有着数千年历史的红色岩画时，那种震撼是直击心灵的。想象一下，在北极圈的阳光下，古人用赭石颜料描绘出驯鹿、熊、船只和人类活动的场景，就像一部刻在石头上的古老日记。风很大，空气清冷，但心里却特别宁静。这里不仅是联合国教科文组织世界遗产，更是通往史前人类精神世界的一扇窗，氛围神秘又苍凉，特别酷。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">说实话，刚到阿尔塔古城的时候，我有点懵——这跟我想象中那种有城墙和街道的“古城”完全不一样！它更像是一片被时间遗忘的荒野，静静地躺在阿尔塔峡湾边上。但当你走近，看到那些散落在岩石上、有着数千年历史的红色岩画时，那种震撼是直击心灵的。想象一下，在北极圈的阳光下，古人用赭石颜料描绘出驯鹿、熊、船只和人类活动的场景，就像一部刻在石头上的古老日记。风很大，空气清冷，但心里却特别宁静。这里不仅是联合国教科文组织世界遗产，更是通往史前人类精神世界的一扇窗，氛围神秘又苍凉，特别酷。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="阿尔塔古城" />
                <InfoRow label="英文名称" value="Alta Old Town" />
                <InfoRow label="正式名称" value="Alta Old Town" />
                <InfoRow label="国家" value="挪威" />
                <InfoRow label="城市" value="阿尔塔" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="全年24小时开放（户外遗址区）。阿尔塔博物馆开放时间：夏季（6月-8月）9:00-20:00；冬季（9月-5月）10:00-16:00，周一可能闭馆。" />
              <InfoRow label="门票价格" value="进入古城遗址区免费。参观阿尔塔博物馆（含岩画保护区和室内展览）：成人约130挪威克朗，儿童/学生/老人有优惠，家庭票可选。" />
              <InfoRow label="地址" value="Alta Museum, Altaveien 19, 9518 Alta, Norway" />
              <InfoRow label="交通方式" value="从阿尔塔机场（ALF）出发，驾车或乘坐出租车约15-20分钟即可抵达。从阿尔塔市中心步行前往约需30-40分钟，也可乘坐当地巴士。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">阿尔塔古城的故事，要从公元前4200年左右说起——没错，是五千多年前！最早来到这里的是狩猎采集者，他们在阿尔塔峡湾沿岸光滑的岩石上，刻下了第一批岩画。这些画最初可能是一种巫术或仪式，祈求狩猎成功。时间快进到公元前1800年到公元500年，岩画创作进入了高峰期，画面变得更加复杂，出现了大型的驯鹿群、狩猎场景、船只甚至几何图案，反映了从内陆狩猎到沿海渔猎生活方式的转变。有趣的是，这些画不是刻上去的，而是用含有铁氧化物的赭石“画”上去的，所以经历了数千年风雨，依然保持着暗红色调。这些岩画在20世纪70年代才被大规模发现和研究，一下子震惊了世界。1985年，它被列入世界遗产名录，成为挪威最早的世界遗产之一。站在这里，你会感觉时间被压缩了，那些看似简单的线条，连接着远古人类与今天的我们，他们看到的峡湾和群山，与我们眼前所见并无二致，这种跨越时空的共鸣非常奇妙。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐游览时间约2-3小时。路线通常从现代化的阿尔塔博物馆建筑开始，先参观室内展陈建立背景知识，然后沿着规划清晰的木质步道，深入户外遗址区，近距离观赏几处最重要的岩画群，最后回到博物馆咖啡馆或礼品店。步道平坦易行。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>步道上有清晰的编号和说明牌（多国语言），跟着走就不会错过重点。建议穿一双舒适防滑的步行鞋，因为海边岩石区域可能湿滑。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从博物馆主入口进入，参观关于岩画和萨米文化的室内展览。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  走出博物馆，踏上通往遗址区的木质栈道。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  在主要观景平台“Hjemmeluft”停留，欣赏最集中、最著名的岩画群。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  沿着海岸栈道继续前行，寻找描绘大型狩猎场景和船只的岩画。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  走到“Kåfjord”区域，观看一些更抽象的符号和图形。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  返回博物馆建筑，在咖啡馆休息并俯瞰峡湾全景。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  Hjemmeluft观景平台</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为午后，阳光能较好照亮岩画。角度从栈道俯拍岩画群与峡湾的背景，能体现遗址的广阔与自然环境的融合。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  博物馆咖啡馆露台</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间是傍晚（夏季午夜阳光时分尤佳）。角度面向峡湾和远山，拍摄全景，画面宁静壮美。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  海岸栈道转角处</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间晴天任意时段。角度低角度特写某一块色彩鲜明的岩画（如大驯鹿），细节感强，历史感扑面而来。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 请务必遵守规定，不要为了拍照而踩踏或触摸岩画，使用长焦镜头可以很好地捕捉细节。无人机飞行可能有严格限制，需提前查询。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  预算之选</h4>
                  <p className="text-sm text-blue-800">阿尔塔市中心的经济型酒店或民宿，交通生活便利，前往古城可乘车或步行。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  特色之选</h4>
                  <p className="text-sm text-green-800">峡湾附近的木屋或度假村，推窗即见美景，体验北极圈的自然宁静。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  便捷之选</h4>
                  <p className="text-sm text-yellow-800">选择位于阿尔塔机场与古城之间的酒店，适合短暂停留或自驾游客。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  冒险之选</h4>
                  <p className="text-sm text-purple-800">冬季可考虑附近的冰雪酒店或萨米帐篷营地，获得独特文化体验。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">夏季是旅游旺季，建议提前预订。如果主要目标是探索古城和岩画，住在阿尔塔市内最为方便。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">阿尔塔古城带给我的，不是繁华都市的喧嚣，而是一种深沉的、与远古对话的孤独感。它不像那些金碧辉煌的宫殿让人惊叹，却用最质朴的岩石和颜料，讲述着人类最原始的故事和生存智慧。在北极清澈的光线下，抚摸（用目光）这些古老的痕迹，你会对时间和生命有不一样的感悟。这是一个需要静下心来感受的地方，强烈推荐给喜欢历史、文化和壮丽自然风光的旅行者。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
