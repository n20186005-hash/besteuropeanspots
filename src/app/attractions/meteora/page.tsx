import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '迈措翁 Meteora｜悬浮在天空中的修道院群 - 最佳欧洲景点',
  description: '第一眼看到迈措翁，你会怀疑自己是不是闯入了某个奇幻电影的片场。几十座巨大的灰褐色岩石柱拔地而起，直插云霄，而在这些近乎垂直的岩顶之上，竟然稳稳地坐落着古老的修道院！那种震撼，是照片完全无法传达的。你需要亲自站在观景台，感受山风呼啸，看着那些红瓦白墙的建筑仿佛悬浮在天地之间，才能理解为什么这里被称为“...',
}

export default function MeteoraPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '希腊', href: '/destinations/greece' },
            { label: '卡兰巴卡', href: '/destinations/greece' },
            { label: '迈措翁', href: '/attractions/meteora' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">迈措翁・Meteora・希腊・卡兰巴卡</h1>
          <p className="text-lg text-gray-600 mb-6">
            第一眼看到迈措翁，你会怀疑自己是不是闯入了某个奇幻电影的片场。几十座巨大的灰褐色岩石柱拔地而起，直插云霄，而在这些近乎垂直的岩顶之上，竟然稳稳地坐落着古老的修道院！那种震撼，是照片完全无法传达的。你需要亲自站在观景台，感受山风呼啸，看着那些红瓦白墙的建筑仿佛悬浮在天地之间，才能理解为什么这里被称为“天空之城”。修士们为了接近上帝，选择了这种与世隔绝的方式，光是想想他们当年如何把一砖一瓦运上这数百米高的绝壁，就足以让人肃然起敬。整个区域弥漫着一种神圣、宁静又略带神秘的气息。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">第一眼看到迈措翁，你会怀疑自己是不是闯入了某个奇幻电影的片场。几十座巨大的灰褐色岩石柱拔地而起，直插云霄，而在这些近乎垂直的岩顶之上，竟然稳稳地坐落着古老的修道院！那种震撼，是照片完全无法传达的。你需要亲自站在观景台，感受山风呼啸，看着那些红瓦白墙的建筑仿佛悬浮在天地之间，才能理解为什么这里被称为“天空之城”。修士们为了接近上帝，选择了这种与世隔绝的方式，光是想想他们当年如何把一砖一瓦运上这数百米高的绝壁，就足以让人肃然起敬。整个区域弥漫着一种神圣、宁静又略带神秘的气息。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="迈措翁" />
                <InfoRow label="英文名称" value="Meteora" />
                <InfoRow label="正式名称" value="Meteora" />
                <InfoRow label="国家" value="希腊" />
                <InfoRow label="城市" value="卡兰巴卡" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="各修道院开放时间不同，通常为夏季（4月1日至10月31日）9:00-17:00，冬季（11月1日至3月31日）9:00-16:00。每周各修道院轮流关闭一天，具体需提前查询。" />
              <InfoRow label="门票价格" value="进入每个修道院需单独购票，票价约为3欧元/人。部分修道院对特定人群（如学生）有优惠。" />
              <InfoRow label="地址" value="Kalampaka 422 00, Greece" />
              <InfoRow label="交通方式" value="从雅典国际机场出发，可乘火车至卡兰巴卡站（约5小时），或自驾沿E75公路北上（约4小时）。从卡兰巴卡镇中心可步行、驾车或参加当地旅行团前往各修道院观景台。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">迈措翁的故事，始于一群追求极致宁静的隐修者。大约在9世纪，一些虔诚的修士为了躲避尘世纷扰，开始寻找人迹罕至的修行地。他们发现了色萨利平原上这些鬼斧神工的天然石柱，并最初居住在岩洞之中。到了14世纪中期， Athanasios Koinovitis 修士在“大迈措隆”岩石上建立了第一座有组织的修道院——大迈措隆修道院，这被视为迈措翁修道院社区正式形成的标志。随后的两个世纪是这里的黄金时代，在塞尔维亚和拜占庭帝国皇室的支持下，总共建成了24座修道院，形成了一个繁荣的宗教与文化中心。修士们利用滑轮、绳索和篮筐组成的原始升降系统（至今在一些修道院还能看到），将物资甚至人吊上悬崖，这种与世隔绝的生活持续了数百年。奥斯曼帝国时期，这里成为了保存希腊东正教文化和手稿的重要堡垒。如今，仅有六座修道院仍在使用并对游客开放，它们被联合国教科文组织列为世界遗产，继续向世人诉说着信仰与毅力创造的奇迹。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  建议安排一整天时间游览。通常从卡兰巴卡镇出发，沿环形公路顺时针游览主要观景台和修道院。起点可以是圣三位一体修道院附近的观景台，终点在鲁萨努修道院。全程自驾结合短途步行，可参观2-3座内部开放的修道院。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>景区道路为单行环形线，请按指示方向行驶，避免错过观景台。部分修道院间的连接小路风景绝佳，但台阶较多，请量力而行。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  前往圣三位一体修道院观景台，拍摄全景。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  参观大迈措隆修道院，看古老的教堂和博物馆。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  步行至瓦尔拉姆修道院，感受最大的修道院群落。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  在鲁萨努修道院观景台停留，欣赏最上镜的风景。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  沿途在多个小型观景台停车，捕捉不同角度的巨石阵。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  圣三位一体修道院对面观景台</h4>
                  <p className="text-sm text-gray-700">清晨或黄昏，利用侧光拍摄修道院矗立在巨型石柱上的孤傲剪影，氛围感极强。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  鲁萨努修道院前的小桥</h4>
                  <p className="text-sm text-gray-700">上午阳光照亮建筑正面时，拍摄修道院与下方深渊的对比，突出其险峻。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  前往瓦尔拉姆修道院的步道拐角</h4>
                  <p className="text-sm text-gray-700">下午，以连绵的石柱群为背景，拍摄瓦尔拉姆修道院的宏伟全景。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  Psaropetra观景台</h4>
                  <p className="text-sm text-gray-700">日落时分，向西拍摄，暖金色的阳光洒在数座修道院和卡兰巴卡小镇上，景色最为壮丽。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 使用长焦镜头可以压缩空间，拍出修道院与岩石紧密相依的震撼效果；广角镜头则适合展现环境的辽阔与奇异。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  卡兰巴卡镇中心酒店</h4>
                  <p className="text-sm text-blue-800">性价比高，餐饮选择多，方便次日一早出发。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  卡斯特拉基村家庭旅馆</h4>
                  <p className="text-sm text-green-800">位于景区山脚下，环境更清幽，部分房间直接面对巨石景观。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  迈措翁遗产酒店</h4>
                  <p className="text-sm text-yellow-800">中高端选择，拥有直面修道院群的无敌观景露台。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  圣三位一体修道院招待所（如开放）</h4>
                  <p className="text-sm text-purple-800">独特体验，需提前很久预约并遵守严格规定。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">旺季（春夏季）务必提前预订，尤其是观景房非常抢手。住在景区附近便于欣赏清晨的薄雾和夜晚的星空。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">迈措翁不仅仅是一处风景，它是一次对视觉和心灵的双重冲击。在这里，你看到的是自然不可思议的造物之力与人类坚定信仰的完美结合。离开时，那份天地苍茫间孑然独立的震撼感会久久留在心中。如果你向往一处能让灵魂安静下来的地方，这里绝对是不可错过的选择。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
