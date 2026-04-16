import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奥洛穆茨老城 Olomouc Old Town｜被低估的巴洛克珍宝与圣三柱的故乡 - 最佳欧洲景点',
  description: '如果说布拉格是万众瞩目的公主，那奥洛穆茨老城就像一位低调却满腹经纶的学者，静静地散发着光芒。第一眼看到上广场（Horní náměstí）时，你一定会被那座拔地而起的圣三柱震撼到——它可不是普通的纪念碑，而是联合国认证的世界遗产！整个老城就像一座露天的巴洛克建筑博物馆，鹅卵石街道蜿蜒曲折，色彩柔和的...',
}

export default function OlomoucOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '奥洛穆茨老城', href: '/attractions/olomouc-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">奥洛穆茨老城・Olomouc Old Town・捷克・奥洛穆茨</h1>
          <p className="text-lg text-gray-600 mb-6">
            如果说布拉格是万众瞩目的公主，那奥洛穆茨老城就像一位低调却满腹经纶的学者，静静地散发着光芒。第一眼看到上广场（Horní náměstí）时，你一定会被那座拔地而起的圣三柱震撼到——它可不是普通的纪念碑，而是联合国认证的世界遗产！整个老城就像一座露天的巴洛克建筑博物馆，鹅卵石街道蜿蜒曲折，色彩柔和的房屋外墙配上精致的雕塑，每一步都像走在古典油画里。这里的氛围特别宁静，游客不多，你可以慢悠悠地找家咖啡馆，坐在广场边，看着电车叮叮当当地驶过，感觉时间都慢了下来。空气中仿佛还飘着这座城市作为历史宗教中心的古老气息，混合着咖啡香，特别迷人。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">如果说布拉格是万众瞩目的公主，那奥洛穆茨老城就像一位低调却满腹经纶的学者，静静地散发着光芒。第一眼看到上广场（Horní náměstí）时，你一定会被那座拔地而起的圣三柱震撼到——它可不是普通的纪念碑，而是联合国认证的世界遗产！整个老城就像一座露天的巴洛克建筑博物馆，鹅卵石街道蜿蜒曲折，色彩柔和的房屋外墙配上精致的雕塑，每一步都像走在古典油画里。这里的氛围特别宁静，游客不多，你可以慢悠悠地找家咖啡馆，坐在广场边，看着电车叮叮当当地驶过，感觉时间都慢了下来。空气中仿佛还飘着这座城市作为历史宗教中心的古老气息，混合着咖啡香，特别迷人。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="奥洛穆茨老城" />
                <InfoRow label="英文名称" value="Olomouc Old Town" />
                <InfoRow label="正式名称" value="Olomouc Old Town" />
                <InfoRow label="国家" value="捷克" />
                <InfoRow label="城市" value="奥洛穆茨" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="公共区域全天开放。主要历史建筑（如圣瓦茨拉夫主教座堂、市政厅）开放时间通常为上午9点至下午5点。" />
              <InfoRow label="门票价格" value="进入老城广场及大部分公共区域免费。参观市政厅塔楼、部分教堂内部或博物馆需单独购票，票价约在50-150捷克克朗（2-6欧元）之间。" />
              <InfoRow label="地址" value="Horní náměstí, 779 00 Olomouc, Czechia" />
              <InfoRow label="交通方式" value="从布拉格出发：乘坐火车约2.5小时直达奥洛穆茨主火车站（Olomouc hl.n.），出站后步行约15-20分钟即可到达老城中心。从维也纳出发：火车约3小时。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">奥洛穆茨的历史可追溯到公元10世纪，它曾是摩拉维亚地区的首府，地位一度比布拉格还重要，是重要的宗教和政治中心。中世纪时期，这里建立了主教区，奠定了其宗教城市的基调。17-18世纪是它的“高光时刻”，在三十年战争后，城市进行了大规模的重建，我们今天看到的许多华丽的巴洛克建筑，包括那座无与伦比的圣三柱，都是这个时期的产物。圣三柱建于1716-1754年，是为了感谢城市从瘟疫中幸存而建，其雕刻之繁复、规模之宏大，堪称中欧巴洛克艺术的巅峰之作。有趣的是，奥洛穆茨还曾是哈布斯堡王朝皇室的临时驻地。虽然后来政治中心转移，但它保留了无价的建筑遗产。漫步其中，你能触摸到从罗马式到巴洛克层层叠加的历史肌理，它不像一些被过度修复的古城，这里的历史感是沉淀的、真实的，带着些许被时光遗忘的骄傲。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  建议从地标圣三柱所在的上广场开始，顺时针游览老城核心区，重点观赏广场周边建筑，然后步行至圣瓦茨拉夫主教座堂及城堡区。全程步行，悠闲游览约需3-4小时。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>老城面积不大，完全不需要地图，随意逛逛就是最好的探索方式。记得穿一双舒适的平底鞋，鹅卵石路面虽然好看但有点硌脚。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  上广场圣三柱：仰望这座装饰极其华丽的巴洛克瘟疫柱。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  奥洛穆茨市政厅：参观天文钟和登上塔楼俯瞰全城。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  圣莫里茨教堂：欣赏其高大的晚期哥特式建筑和著名管风琴。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  步行至圣瓦茨拉夫主教座堂：参观摩拉维亚主教座堂，看其高耸的塔楼。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  漫步城堡山区域：探索古老的城墙遗迹和宁静的庭院。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  穿过小巷回到下广场：感受老城日常生活的氛围。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  市政厅塔楼俯瞰点</h4>
                  <p className="text-sm text-gray-700">登塔后拍摄，时间晴日午后，俯拍广场全景和圣三柱，能捕捉到老城红屋顶与纪念碑的几何美感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  圣三柱正前方</h4>
                  <p className="text-sm text-gray-700">拍摄时间清晨或黄昏，低角度仰拍，将宏伟的柱体与天空结合，突出其雕塑的细节和神圣感。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  通往主教座堂的台阶下</h4>
                  <p className="text-sm text-gray-700">拍摄时间白天均可，从台阶下向上拍摄，将主教座堂的双塔作为背景，营造庄严的纵深感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  老城某条宁静小巷</h4>
                  <p className="text-sm text-gray-700">拍摄时间午后阳光斜射时，捕捉光影在彩色墙壁和鹅卵石上的变化，拍出生活化的静谧感。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 拍摄圣三柱时，尝试围绕它走一圈，每个面的雕塑故事都不同。天文钟在中午12点会有木偶报时，可以抓拍动态瞬间。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  高端选择</h4>
                  <p className="text-sm text-blue-800">入住上广场周边的历史酒店，开窗即是圣三柱，体验中心位置的便利与历史氛围。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  中端选择</h4>
                  <p className="text-sm text-green-800">选择老城边缘或靠近火车站的现代设计酒店，性价比高，步行到景点也很近。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  经济选择</h4>
                  <p className="text-sm text-yellow-800">预订老城内或附近的民宿或公寓，体验本地生活，自己动手做饭更节省。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  特色选择</h4>
                  <p className="text-sm text-purple-800">尝试住在经过改造的历史建筑客栈中，房间可能带有拱顶或古老装饰。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">奥洛穆茨本身不大，只要住在老城步行可达的范围内（15分钟内），都非常方便。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">奥洛穆茨老城给我的感觉，是一份意外的惊喜。它没有拥挤的人潮，只有沉淀的历史和从容的生活节奏。在这里，你可以真正地“拥有”一座世界遗产广场，安静地品味每一处建筑的细节。如果你已经看过了布拉格的繁华，渴望寻找一个更有学术和艺术气息、能让你静下心来感受中欧灵魂的地方，那么奥洛穆茨绝对是你旅程中那颗隐藏的宝石。它会用它的宁静与深厚，温柔地留在你的记忆里。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
