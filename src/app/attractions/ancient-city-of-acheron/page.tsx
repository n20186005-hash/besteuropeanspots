import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿切伦扎古城 Ancient City of Acheron｜探秘神话中的冥河入口与失落文明 - 最佳欧洲景点',
  description: '想象一下，你站在一片被橄榄树和柏树环绕的古老河岸，脚下是清澈见底、泛着绿松石光泽的河水，传说中这里就是通往冥界的入口——冥河阿刻戎。阿切伦扎古城带给你的第一感觉，是一种混合了神秘、宁静与苍凉的神奇氛围。这里没有恢弘的宫殿废墟，更多的是散落在河畔与山丘间的石基、断墙，它们沉默地诉说着三千年前的故事。当...',
}

export default function AncientCityOfAcheronPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '希腊', href: '/destinations/greece' },
            { label: '普雷韦扎', href: '/destinations/greece' },
            { label: '阿切伦扎古城', href: '/attractions/ancient-city-of-acheron' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">阿切伦扎古城・Ancient City of Acheron・希腊・普雷韦扎</h1>
          <p className="text-lg text-gray-600 mb-6">
            想象一下，你站在一片被橄榄树和柏树环绕的古老河岸，脚下是清澈见底、泛着绿松石光泽的河水，传说中这里就是通往冥界的入口——冥河阿刻戎。阿切伦扎古城带给你的第一感觉，是一种混合了神秘、宁静与苍凉的神奇氛围。这里没有恢弘的宫殿废墟，更多的是散落在河畔与山丘间的石基、断墙，它们沉默地诉说着三千年前的故事。当你赤脚踩进冰凉的河水中，沿着传说中的“摆渡人”路径向上游探索，耳边只有流水声和风声，那种穿越时空的恍惚感特别强烈。这不仅仅是一个考古遗址，更是一个能让你亲身走进希腊神话场景的沉浸式体验。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">想象一下，你站在一片被橄榄树和柏树环绕的古老河岸，脚下是清澈见底、泛着绿松石光泽的河水，传说中这里就是通往冥界的入口——冥河阿刻戎。阿切伦扎古城带给你的第一感觉，是一种混合了神秘、宁静与苍凉的神奇氛围。这里没有恢弘的宫殿废墟，更多的是散落在河畔与山丘间的石基、断墙，它们沉默地诉说着三千年前的故事。当你赤脚踩进冰凉的河水中，沿着传说中的“摆渡人”路径向上游探索，耳边只有流水声和风声，那种穿越时空的恍惚感特别强烈。这不仅仅是一个考古遗址，更是一个能让你亲身走进希腊神话场景的沉浸式体验。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="阿切伦扎古城" />
                <InfoRow label="英文名称" value="Ancient City of Acheron" />
                <InfoRow label="正式名称" value="Ancient City of Acheron" />
                <InfoRow label="国家" value="希腊" />
                <InfoRow label="城市" value="普雷韦扎" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="全天开放（遗址区域），建议白天游览。" />
              <InfoRow label="门票价格" value="免费参观。" />
              <InfoRow label="地址" value="Acheron River, Glyki 480 62, Greece" />
              <InfoRow label="交通方式" value="从最近的约阿尼纳国际机场出发，驾车沿E55/E951公路向南，转入E92公路，再根据路标前往Glyki村，全程约1小时15分钟。也可从普雷韦扎市乘巴士或出租车前往，车程约40分钟。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">阿切伦扎的故事，得从比历史更久远的神话讲起。在古希腊人的想象里，这条河是亡魂进入冥界的必经之路，卡戎船夫会在此摆渡。而现实中的古城，其历史可以追溯到公元前8世纪左右，最初是古代厄庇鲁斯地区的一个重要定居点和宗教中心。人们在这里祭祀冥王哈迪斯和冥后珀耳塞福涅，想想都觉得有点脊背发凉又充满吸引力。到了古典希腊和罗马时期，这里的“神谕”和与冥界相关的仪式非常著名，吸引着远道而来的朝圣者。不过，和许多古城一样，它在历史长河中逐渐衰落，被遗弃，最终沉睡在河畔的荒野里。直到近现代考古发掘，才让这些沉默的石头再次进入世人视野。走在遗址中，你能触摸到的每一块风化石头，可能都聆听过无数古代信徒的祈祷，这种与古老信仰直接对话的感觉，非常独特。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐游览路线从Glyki村附近的现代河岸起点开始，先体验涉水段，感受冥河之水，然后沿河岸小径向上游探索散落的遗址点，最后抵达视野较好的山坡俯瞰全景。全程徒步往返约需2-3小时，属于轻度探险。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>务必穿着防滑、可涉水的凉鞋或徒步鞋，部分河床石头湿滑。手机信号在峡谷中可能不稳定，建议提前下载离线地图。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从Glyki村主桥下河岸起点，脱鞋涉水，体验传说中的“冥河”。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  沿北岸清晰小径向上游步行，观察河岸两侧出现的古老石砌结构。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  寻找并参观被称为“Nekromanteion”（死灵预言所）的主要遗址区域基础。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  继续前行至河流转弯处，欣赏峡谷与河水交汇的自然美景。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  攀上遗址区西侧的小山坡，获得俯瞰河流与遗址的广阔视角。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  原路返回，或从山坡另一侧小径环线返回起点。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  冥河涉水点</h4>
                  <p className="text-sm text-gray-700">清晨或傍晚，阳光斜射水面时。低角度拍摄人物涉水或特写清澈水波，营造神秘、静谧的神话氛围。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  Nekromanteion遗址石基</h4>
                  <p className="text-sm text-gray-700">上午光线柔和时。利用广角镜头将残垣、荒野和背景山峦纳入画面，突出苍凉历史感。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  河流峡谷转弯处</h4>
                  <p className="text-sm text-gray-700">正午阳光充足时。拍摄碧绿河水与白色石灰岩峡谷的鲜明对比，色彩非常惊艳。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  西侧山坡观景点</h4>
                  <p className="text-sm text-gray-700">日落时分。逆光或侧光拍摄蜿蜒的河流与整个遗址区的全景，光影层次丰富。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 尊重遗址，不要为了拍照攀爬或移动古老石块。水下相机或GoPro能拍出有趣的河底视角。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  经济型</h4>
                  <p className="text-sm text-blue-800">Glyki村里的家庭旅馆或民宿，价格亲民，步行即可到达河边。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  舒适型</h4>
                  <p className="text-sm text-green-800">普雷韦扎市中心的酒店，选择较多，生活便利，需短途车程前往遗址。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  特色型</h4>
                  <p className="text-sm text-yellow-800">厄庇鲁斯地区山间的传统石头屋度假屋，体验乡村宁静，自驾前往较方便。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  自然型</h4>
                  <p className="text-sm text-purple-800">阿切伦扎河畔附近的露营地或生态小屋，真正沉浸于自然与神话氛围中。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">夏季是旅游旺季，Glyki村住宿紧张，建议提前预订。如果追求夜生活与餐饮多样性，住普雷韦扎是更稳妥的选择。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">阿切伦扎古城最打动我的，是它那种未被过度修饰的原始感和强大的精神气场。它不像卫城那样令人震撼，却用一种更温柔、更深入的方式，将神话、历史和自然完美缝合在一起。当你把脚浸入那冰凉的冥河之水，所有的传说瞬间变得可触可感。这是一个适合静下心来，与自己、与古老文明对话的地方。如果你厌倦了人潮汹涌的经典景点，渴望一次有深度的、带着些许探险意味的文化自然之旅，那么阿切伦扎绝对会在你的记忆里留下独一无二的烙印。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
