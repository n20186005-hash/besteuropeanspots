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
            { label: '景点', href: '/attractions' },
            { label: '迈措翁', href: '/attractions/meteora' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">迈措翁</h1>
          <p className="text-xl text-gray-600 mb-4">Meteora</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">希腊</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">卡兰巴卡</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">第一眼看到迈措翁，你会怀疑自己是不是闯入了某个奇幻电影的片场。几十座巨大的灰褐色岩石柱拔地而起，直插云霄，而在这些近乎垂直的岩顶之上，竟然稳稳地坐落着古老的修道院！那种震撼，是照片完全无法传达的。你需要亲自站在观景台，感受山风呼啸，看着那些红瓦白墙的建筑仿佛悬浮在天地之间，才能理解为什么这里被称为“天空之城”。修士们为了接近上帝，选择了这种与世隔绝的方式，光是想想他们当年如何把一砖一瓦运上这数百米高的绝壁，就足以让人肃然起敬。整个区域弥漫着一种神圣、宁静又略带神秘的气息。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">请注意，进入所有修道院都有着装要求：女士需穿长裙（入口处通常提供围裙），男士需穿长裤。夏季日照强烈，务必做好防晒并携带充足饮水。由于修道院分布在不同的岩石上，需要一定的体力步行和攀爬台阶，建议穿着舒适的徒步鞋。部分观景台道路狭窄，自驾需小心。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">迈措翁的故事，始于一群追求极致宁静的隐修者。大约在9世纪，一些虔诚的修士为了躲避尘世纷扰，开始寻找人迹罕至的修行地。他们发现了色萨利平原上这些鬼斧神工的天然石柱，并最初居住在岩洞之中。到了14世纪中期， Athanasios Koinovitis 修士在“大迈措隆”岩石上建立了第一座有组织的修道院——大迈措隆修道院，这被视为迈措翁修道院社区正式形成的标志。随后的两个世纪是这里的黄金时代，在塞尔维亚和拜占庭帝国皇室的支持下，总共建成了24座修道院，形成了一个繁荣的宗教与文化中心。修士们利用滑轮、绳索和篮筐组成的原始升降系统（至今在一些修道院还能看到），将物资甚至人吊上悬崖，这种与世隔绝的生活持续了数百年。奥斯曼帝国时期，这里成为了保存希腊东正教文化和手稿的重要堡垒。如今，仅有六座修道院仍在使用并对游客开放，它们被联合国教科文组织列为世界遗产，继续向世人诉说着信仰与毅力创造的奇迹。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">建议安排一整天时间游览。通常从卡兰巴卡镇出发，沿环形公路顺时针游览主要观景台和修道院。起点可以是圣三位一体修道院附近的观景台，终点在鲁萨努修道院。全程自驾结合短途步行，可参观2-3座内部开放的修道院。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  前往圣三位一体修道院观景台，拍摄全景。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  参观大迈措隆修道院，看古老的教堂和博物馆。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  步行至瓦尔拉姆修道院，感受最大的修道院群落。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  在鲁萨努修道院观景台停留，欣赏最上镜的风景。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  沿途在多个小型观景台停车，捕捉不同角度的巨石阵。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">景区道路为单行环形线，请按指示方向行驶，避免错过观景台。部分修道院间的连接小路风景绝佳，但台阶较多，请量力而行。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **圣三位一体修道院对面观景台**：清晨或黄昏，利用侧光拍摄修道院矗立在巨型石柱上的孤傲剪影，氛围感极强。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **鲁萨努修道院前的小桥**：上午阳光照亮建筑正面时，拍摄修道院与下方深渊的对比，突出其险峻。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **前往瓦尔拉姆修道院的步道拐角**：下午，以连绵的石柱群为背景，拍摄瓦尔拉姆修道院的宏伟全景。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **Psaropetra观景台**：日落时分，向西拍摄，暖金色的阳光洒在数座修道院和卡兰巴卡小镇上，景色最为壮丽。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">使用长焦镜头可以压缩空间，拍出修道院与岩石紧密相依的震撼效果；广角镜头则适合展现环境的辽阔与奇异。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **卡兰巴卡镇中心酒店**：性价比高，餐饮选择多，方便次日一早出发。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **卡斯特拉基村家庭旅馆**：位于景区山脚下，环境更清幽，部分房间直接面对巨石景观。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **迈措翁遗产酒店**：中高端选择，拥有直面修道院群的无敌观景露台。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **圣三位一体修道院招待所（如开放）**：独特体验，需提前很久预约并遵守严格规定。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">旺季（春夏季）务必提前预订，尤其是观景房非常抢手。住在景区附近便于欣赏清晨的薄雾和夜晚的星空。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">迈措翁不仅仅是一处风景，它是一次对视觉和心灵的双重冲击。在这里，你看到的是自然不可思议的造物之力与人类坚定信仰的完美结合。离开时，那份天地苍茫间孑然独立的震撼感会久久留在心中。如果你向往一处能让灵魂安静下来的地方，这里绝对是不可错过的选择。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="各修道院开放时间不同，通常为夏季（4月1日至10月31日）9:00-17:00，冬季（11月1日至3月31日）9:00-16:00。每周各修道院轮流关闭一天，具体需提前查询。" />
                <InfoRow icon="🎫" label="门票" value="进入每个修道院需单独购票，票价约为3欧元/人。部分修道院对特定人群（如学生）有优惠。" />
                <InfoRow icon="📍" label="地址" value="Kalampaka 422 00, Greece" />
                <InfoRow icon="🚌" label="交通" value="从雅典国际机场出发，可乘火车至卡兰巴卡站（约5小时），或自驾沿E75公路北上（约4小时）。从卡兰巴卡镇中心可步行、驾车或参加当地旅行团前往各修道院观景台。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
