import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '察夫塔特 Cavtat｜亚得里亚海边的静谧时光胶囊 - 最佳欧洲景点',
  description: '想象一下，逃离了杜布罗夫尼克熙攘的人潮，跳上一艘小渡轮，沿着海岸线航行不到一小时，就抵达了一个时间仿佛慢下来的地方——这就是察夫塔特。第一眼看到它，你会被那马蹄形的海湾惊艳到，清澈见底的亚得里亚海水环抱着色彩柔和的石头房子，棕榈树在岸边摇曳。这里没有喧嚣的旅行团，只有当地人悠闲地在海边咖啡馆晒太阳，...',
}

export default function CavtatPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '察夫塔特', href: '/attractions/cavtat' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">察夫塔特・Cavtat・克罗地亚・察夫塔特</h1>
          <p className="text-lg text-gray-600 mb-6">
            想象一下，逃离了杜布罗夫尼克熙攘的人潮，跳上一艘小渡轮，沿着海岸线航行不到一小时，就抵达了一个时间仿佛慢下来的地方——这就是察夫塔特。第一眼看到它，你会被那马蹄形的海湾惊艳到，清澈见底的亚得里亚海水环抱着色彩柔和的石头房子，棕榈树在岸边摇曳。这里没有喧嚣的旅行团，只有当地人悠闲地在海边咖啡馆晒太阳，老人们在长椅上聊天。走在鹅卵石铺成的小巷里，闻着空气中海风与松树混合的清新味道，感觉整个灵魂都被洗涤了一遍。它就像一个被精心珍藏的秘密花园，安静、优雅，充满了地中海的慵懒诗意。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">想象一下，逃离了杜布罗夫尼克熙攘的人潮，跳上一艘小渡轮，沿着海岸线航行不到一小时，就抵达了一个时间仿佛慢下来的地方——这就是察夫塔特。第一眼看到它，你会被那马蹄形的海湾惊艳到，清澈见底的亚得里亚海水环抱着色彩柔和的石头房子，棕榈树在岸边摇曳。这里没有喧嚣的旅行团，只有当地人悠闲地在海边咖啡馆晒太阳，老人们在长椅上聊天。走在鹅卵石铺成的小巷里，闻着空气中海风与松树混合的清新味道，感觉整个灵魂都被洗涤了一遍。它就像一个被精心珍藏的秘密花园，安静、优雅，充满了地中海的慵懒诗意。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="察夫塔特" />
                <InfoRow label="英文名称" value="Cavtat" />
                <InfoRow label="正式名称" value="Cavtat" />
                <InfoRow label="国家" value="克罗地亚" />
                <InfoRow label="城市" value="察夫塔特" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="小镇全天开放，主要景点如拉契奇陵墓、圣尼古拉斯教堂等开放时间一般为夏季（4月-10月）9:00-19:00，冬季时间缩短或需预约。" />
              <InfoRow label="门票价格" value="进入小镇免费。参观拉契奇陵墓约20库纳，圣尼古拉斯教堂免费，部分小型博物馆需购票（约10-30库纳）。" />
              <InfoRow label="地址" value="Cavtat, 20210, 克罗地亚" />
              <InfoRow label="交通方式" value="从杜布罗夫尼克机场出发，乘坐出租车或机场巴士约20分钟即可抵达。从杜布罗夫尼克老城出发，可乘坐每小时一班的渡轮，航程约45分钟，沿途风景绝佳。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">察夫塔特的故事，可以说是一部浓缩的“海岸线变迁史”。它的前身可是大名鼎鼎的希腊殖民地埃皮达鲁斯，早在公元前6世纪就建立了。后来罗马人接手，让它继续繁荣。不过，命运多舛，公元7世纪左右，斯拉夫人和阿瓦尔人的入侵摧毁了古城，幸存者们向北逃到了如今杜布罗夫尼克所在的岩石上，建立了新的家园。所以，从某种意义上说，察夫塔特是杜布罗夫尼克的“母亲城”。中世纪时，它在杜布罗夫尼克共和国的统治下重生，成为重要的海事和贸易据点，那些坚固的石屋和防御工事就是那时留下的。漫步时，你能在城墙遗迹和教堂的罗马式风格中触摸到这段历史。到了19世纪，它又吸引了画家、诗人等艺术家，逐渐形成了今天这种艺术气息浓厚的宁静气质。站在这里，你会感觉脚下层层叠叠的都是时光。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从海滨大道开始，顺时针环游半岛，最后登上山顶陵墓俯瞰全景。这条路线轻松惬意，囊括海景、老城与制高点，全程步行约需2-3小时，非常适合半日游。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>小镇不大，完全不需要地图，随心所欲地迷路也是一种乐趣。记得穿一双好走的鞋，因为上山的路有些石阶。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从主码头出发，沿着迷人的海滨长廊散步。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  探索老城中心，参观圣尼古拉斯教堂和修道院回廊。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  漫步至半岛顶端的拉契奇陵墓，欣赏白色圆顶建筑。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  从陵墓旁的步道登上山顶观景台。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  下山后，在半岛另一侧的海滩或咖啡馆休息。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  返回主广场，逛逛当地画廊或手工艺品店。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  拉契奇陵墓观景台</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为日落时分。角度和效果</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  海滨长廊中段</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间是上午，阳光洒在海面上。角度和效果</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  老城小巷深处</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间是午后，光影斑驳。角度和效果</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 小镇光线在清晨和黄昏最为柔和，海面颜色也最美。避免正午顶光拍摄人物。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  高端海景之选</h4>
                  <p className="text-sm text-blue-800">入住半岛上的精品酒店，如Hotel Croatia Cavtat，拥有私人海滩和无边泳池，视野无敌。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  中档舒适之选</h4>
                  <p className="text-sm text-green-800">选择老城内的家庭式公寓或小型酒店，推开窗就是石板小巷，体验本地生活。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  经济实惠之选</h4>
                  <p className="text-sm text-yellow-800">住在小镇外围或靠近主路的民宿，价格更优，步行到海边也仅需10分钟。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  独特体验之选</h4>
                  <p className="text-sm text-purple-800">预订一艘停泊在港口的改造船屋，枕着海浪入睡。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">夏季房源紧张，务必提前预订。住在老城中心虽然方便，但可能无法停车，自驾游客需注意。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">察夫塔特的美，不在于有多少必看的景点，而在于那种全身心沉浸的松弛感。它像是亚得里亚海送给旅人的一个温柔拥抱，让你知道，在克罗地亚，除了古城堡垒的雄伟，还有这样一个可以静静发呆、让时间失去意义的地方。如果你也渴望一段真正宁静的海边时光，请一定把它列入清单。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
