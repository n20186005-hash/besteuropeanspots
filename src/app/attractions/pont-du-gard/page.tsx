import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '加尔桥 Pont du Gard｜两千年前的古罗马奇迹，法国南部的壮丽史诗 - 最佳欧洲景点',
  description: '第一眼看到加尔桥，你会被它的巨大和优雅彻底震撼。它不像一座冰冷的石头建筑，更像一条横跨加尔东河峡谷的巨龙，静静地卧在碧绿的河水和苍翠的森林之上。走近了看，那些巨大的、淡金色的石灰岩块，每一块都经过精细的切割，不用任何灰浆，仅靠重力严丝合缝地垒在一起，两千年了，依然坚固如初。你可以赤脚踩进清凉的河水里...',
}

export default function PontDuGardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '加尔桥', href: '/attractions/pont-du-gard' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">加尔桥・Pont du Gard・法国・韦尔-蓬迪加尔（Vers-Pont-du-Gard）</h1>
          <p className="text-lg text-gray-600 mb-6">
            第一眼看到加尔桥，你会被它的巨大和优雅彻底震撼。它不像一座冰冷的石头建筑，更像一条横跨加尔东河峡谷的巨龙，静静地卧在碧绿的河水和苍翠的森林之上。走近了看，那些巨大的、淡金色的石灰岩块，每一块都经过精细的切割，不用任何灰浆，仅靠重力严丝合缝地垒在一起，两千年了，依然坚固如初。你可以赤脚踩进清凉的河水里，仰头望着这高达49米的三层拱廊，想象着古罗马的工程师和工匠们，是如何完成了这项不可思议的工程。阳光洒在石头上，风穿过古老的桥拱，那一刻，你触摸到的不仅是历史，更是人类智慧与自然完美融合的永恒瞬间。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">第一眼看到加尔桥，你会被它的巨大和优雅彻底震撼。它不像一座冰冷的石头建筑，更像一条横跨加尔东河峡谷的巨龙，静静地卧在碧绿的河水和苍翠的森林之上。走近了看，那些巨大的、淡金色的石灰岩块，每一块都经过精细的切割，不用任何灰浆，仅靠重力严丝合缝地垒在一起，两千年了，依然坚固如初。你可以赤脚踩进清凉的河水里，仰头望着这高达49米的三层拱廊，想象着古罗马的工程师和工匠们，是如何完成了这项不可思议的工程。阳光洒在石头上，风穿过古老的桥拱，那一刻，你触摸到的不仅是历史，更是人类智慧与自然完美融合的永恒瞬间。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="加尔桥" />
                <InfoRow label="英文名称" value="Pont du Gard" />
                <InfoRow label="正式名称" value="Pont du Gard" />
                <InfoRow label="国家" value="法国" />
                <InfoRow label="城市" value="韦尔-蓬迪加尔（Vers-Pont-du-Gard）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="全年开放，具体时间随季节变化。1月、2月、11月、12月：9:00-17:00；3月、4月、10月：9:00-18:00；5月、6月、9月：9:00-19:00；7月、8月：9:00-23:00（夜间灯光秀）。游客中心开放时间可能略有不同。" />
              <InfoRow label="门票价格" value="进入加尔桥区域及下层步道免费。若要参观博物馆、电影院、卢拉盖步道（高空通道）及儿童游乐区，需购买通票。成人通票约9.5欧元，优惠票价约7欧元，6岁以下儿童免费。停车费另计（约9欧元/天）。" />
              <InfoRow label="地址" value="400 Route du Pont du Gard, 30210 Vers-Pont-du-Gard, France" />
              <InfoRow label="交通方式" value="从最近的阿维尼翁TGV高铁站或尼姆火车站出发，驾车约30-40分钟即可抵达。也可从阿维尼翁或尼姆乘坐公共巴士（线路B21或A15），但班次较少，车程约1小时，建议提前查询时刻表。自驾是最方便的选择。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">说起加尔桥的故事，得回到公元1世纪中叶，大约是公元40-60年间。那时候，罗马帝国如日中天，尼姆（Nemausus）作为重要的殖民地正在蓬勃发展。城市壮大了，水源却成了问题。于是，罗马人决定从50公里外的于泽斯（Uzès）附近的泉水，修建一条引水渠，将清澈的活水引到尼姆的公共浴室、喷泉和私人住宅。加尔桥，就是这条长达50公里引水渠中最壮观的一段，它需要跨越宽阔的加尔东河峡谷。你能想象吗？在没有现代机械的年代，上千名工人花了可能不到15年的时间，开采了超过5万吨的石头，并精确计算了每层拱券的承重和整体的坡度（整个引水渠的落差仅17米，平均坡度仅0.34%！），最终建成了这座兼具实用性与美学的杰作。它默默输送了将近五个世纪的水，直到中世纪才逐渐被废弃。但它从未被遗忘，后来曾作为收费的过河桥梁。1985年，它被联合国教科文组织列为世界遗产。站在它面前，我常常觉得，这不仅仅是一座桥，它是一本立体的罗马工程学教科书，是帝国强大组织能力的证明，更是那个时代人们对生活品质追求的永恒象征。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  游览建议安排3-4小时。经典路线从河东岸的主停车场和游客中心开始，先参观博物馆了解背景，然后过桥到西岸，沿河边步道从不同角度欣赏桥梁，最后可以下到河滩亲水，或挑战登上高层的卢拉盖步道，俯瞰峡谷全景。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>景区内指示清晰，但面积较大，穿一双适合走路的鞋非常重要。夏季阳光强烈，务必做好防晒并带上饮用水。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从游客中心开始，参观博物馆和电影院，了解古罗马水利工程。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  穿过下层的人行桥拱，走到桥梁的西岸。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  沿着西岸的“记忆之路”步道行走，从多个侧面和远处观赏桥梁全貌。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  下到河滩边，近距离感受桥墩的宏伟，夏天可以戏水。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  （购买通票后）登上卢拉盖步道，走进引水渠的顶层通道。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  返回东岸，在观景平台进行最后眺望和拍照。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  西岸河滩边</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为清晨或傍晚，阳光为石桥镀上金色。从低角度仰拍，将人物、河水与巨大的桥拱一同纳入镜头，极具视觉冲击力。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  东岸观景平台</h4>
                  <p className="text-sm text-gray-700">全天皆可，但下午顺光。这是拍摄桥梁完整三层结构标准照的最佳位置，可以展现其整体的对称与宏伟。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  卢拉盖步道顶层出口</h4>
                  <p className="text-sm text-gray-700">最佳时间为晴日白天。从引水渠顶层向外拍摄，视角独特，可以拍出桥体、峡谷和远方森林的壮阔景色。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  下游的旧桥附近</h4>
                  <p className="text-sm text-gray-700">傍晚时分。可以同时将古老的加尔桥与下游的现代公路桥一同摄入画面，形成跨越时空的有趣对比。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 使用广角镜头可以更好地捕捉桥梁的全景和气势。夏季正午顶光强烈，阴影较重，不是最佳人像拍摄时间。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  高端历史体验</h4>
                  <p className="text-sm text-blue-800">入住阿维尼翁古城内的精品酒店，如拉米尔酒店，感受教皇之城的艺术氛围，驾车至加尔桥约30分钟。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  舒适乡村风情</h4>
                  <p className="text-sm text-green-800">选择加尔桥附近韦尔-蓬迪加尔村的乡村民宿或精品酒店，环境静谧，步行或短途驾车即可抵达景区。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  经济便捷之选</h4>
                  <p className="text-sm text-yellow-800">住在尼姆市郊或阿维尼翁附近的连锁酒店（如宜必思），性价比高，交通和餐饮选择多。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  自然露营体验</h4>
                  <p className="text-sm text-purple-800">景区周边有设施完善的露营地，适合家庭或喜欢户外活动的旅行者，可以享受星空下的宁静。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">夏季是旅游旺季，阿维尼翁戏剧节期间（7月）周边住宿非常紧张，务必提前数月预订。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">加尔桥带给我的，是一种平静而深远的震撼。它没有宫殿的奢华，也没有教堂的神秘，但它用最质朴的石头，诉说着最坚韧的力量和智慧。当你触摸着那些被时光打磨光滑的石块，听着脚下潺潺的流水声，你会明白，伟大的文明不仅仅是征战与疆域，更是这样一份泽被后世的、对美好生活的务实追求。离开时，回望夕阳中的那道金色长虹，心中满是敬意与感动。这绝对是你南法之行中，不容错过的一站。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
