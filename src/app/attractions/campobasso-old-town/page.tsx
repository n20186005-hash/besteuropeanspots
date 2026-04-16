import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '坎波巴索老城 Campobasso Old Town｜漫步中世纪山城，邂逅莫利塞的静谧时光 - 最佳欧洲景点',
  description: '想象一下，你沿着蜿蜒的石头小径向上爬，两旁是蜜糖色的古老石屋，阳台上垂挂着鲜艳的天竺葵。空气里有种特别的宁静，只能听到自己的脚步声和远处教堂隐约的钟声。坎波巴索老城就是这样一座“长”在山顶上的中世纪小镇，它不像佛罗伦萨那样游人如织，却保留了最原汁原味的意大利山城生活气息。站在高处，整个莫利塞大区的丘...',
}

export default function CampobassoOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '坎波巴索老城', href: '/attractions/campobasso-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">坎波巴索老城・Campobasso Old Town・意大利・坎波巴索</h1>
          <p className="text-lg text-gray-600 mb-6">
            想象一下，你沿着蜿蜒的石头小径向上爬，两旁是蜜糖色的古老石屋，阳台上垂挂着鲜艳的天竺葵。空气里有种特别的宁静，只能听到自己的脚步声和远处教堂隐约的钟声。坎波巴索老城就是这样一座“长”在山顶上的中世纪小镇，它不像佛罗伦萨那样游人如织，却保留了最原汁原味的意大利山城生活气息。站在高处，整个莫利塞大区的丘陵风光像一幅绿色地毯在你脚下铺开，那种豁然开朗的感觉，瞬间觉得爬坡的辛苦都值了。这里的时间仿佛走得很慢，适合你放空自己，漫无目的地探索每一条可能通往秘密庭院的小巷。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">想象一下，你沿着蜿蜒的石头小径向上爬，两旁是蜜糖色的古老石屋，阳台上垂挂着鲜艳的天竺葵。空气里有种特别的宁静，只能听到自己的脚步声和远处教堂隐约的钟声。坎波巴索老城就是这样一座“长”在山顶上的中世纪小镇，它不像佛罗伦萨那样游人如织，却保留了最原汁原味的意大利山城生活气息。站在高处，整个莫利塞大区的丘陵风光像一幅绿色地毯在你脚下铺开，那种豁然开朗的感觉，瞬间觉得爬坡的辛苦都值了。这里的时间仿佛走得很慢，适合你放空自己，漫无目的地探索每一条可能通往秘密庭院的小巷。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="坎波巴索老城" />
                <InfoRow label="英文名称" value="Campobasso Old Town" />
                <InfoRow label="正式名称" value="Campobasso Old Town" />
                <InfoRow label="国家" value="意大利" />
                <InfoRow label="城市" value="坎波巴索" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="全天开放（公共区域）。内部个别博物馆或教堂开放时间各异，通常为上午9:00至下午1:00，下午3:00至7:00。" />
              <InfoRow label="门票价格" value="进入老城区域免费。内部个别景点如蒙福尔特城堡可能收取少量门票（约3-5欧元）。" />
              <InfoRow label="地址" value="Via Monforte, 86100 Campobasso CB, Italy" />
              <InfoRow label="交通方式" value="从最近的坎波巴索火车站（Stazione di Campobasso）步行上山约20-25分钟即可抵达老城入口。若从罗马钱皮诺机场（CIA）或那不勒斯机场（NAP）出发，需先乘火车或长途汽车至坎波巴索市，总耗时约3-4小时。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">坎波索巴老城的故事始于中世纪早期，大约在10世纪左右，人们为了安全开始在这座山上聚居，形成了最初的村落。它的名字“Campobasso”在意大利语里是“低地田野”的意思，挺有意思的，因为它明明建在高高的山上，或许是指山脚下那片肥沃的平原吧。老城真正的黄金时代是在14到15世纪，当时它处于强大的蒙福尔特家族统治之下。我们今天看到的蒙福尔特城堡就是那个时期的产物，它雄踞山顶，既是防御工事，也是权力的象征，俯瞰着整个地区，你能想象当年领主站在塔楼上巡视自己领地的样子。随后的几个世纪里，老城经历了地震和战争的考验，但核心的中世纪肌理——那些迷宫般的窄巷、拱门和广场——却奇迹般地保存了下来。19世纪后，城市发展的重心逐渐转移到山下更平坦的新城区，老城反而因此“凝固”在了旧时光里，少了些喧嚣，多了份沧桑的诗意。走在这些被岁月磨得光滑的石板路上，仿佛能触摸到层层叠叠的历史。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从山脚下的加里波第广场（Piazza Garibaldi）附近开始，沿着主步道“Via Monforte”向上攀登，一路探索小巷，最终抵达山顶的城堡作为终点。全程步行游览，包含拍照和短暂休息，大约需要2-3小时。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>小巷容易迷路，但这也是乐趣所在，不妨随意探索。务必穿一双非常防滑舒适的鞋子。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从加里波第广场出发，沿Via Monforte主路上山。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  穿梭于蜘蛛网般的狭窄小巷（如Vico dei Santi），感受中世纪氛围。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  参观圣乔治大教堂，欣赏其朴素的罗马式外观。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  路过古老的圣莱奥纳尔多教堂和市政厅广场。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  最终抵达山顶的蒙福尔特城堡，俯瞰全景。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  蒙福尔特城堡观景台</h4>
                  <p className="text-sm text-gray-700">最佳时间为日落前黄金一小时。角度效果</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  Via Monforte的之字形坡道</h4>
                  <p className="text-sm text-gray-700">最佳时间上午，阳光能照亮石板路。角度效果</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  小巷中的拱门</h4>
                  <p className="text-sm text-gray-700">最佳时间正午阳光直射时，光影对比强烈。角度效果</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 老城光线多变，窄巷中尤其如此，建议使用相机或手机灵活调整曝光，捕捉光影戏剧性。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  山下新城区的商务酒店</h4>
                  <p className="text-sm text-blue-800">交通和生活便利，性价比高，适合自驾或短暂停留。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  老城内的特色民宿（B&B）</h4>
                  <p className="text-sm text-green-800">沉浸式体验中世纪氛围，但需爬坡且行李搬运不便。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  郊区农庄（Agriturismo）</h4>
                  <p className="text-sm text-yellow-800">体验莫利塞乡村风情，适合追求宁静和美食的旅客。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">若选择老城住宿，务必确认房东是否提供行李搬运协助，否则拖着大箱子上山会非常辛苦。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">坎波巴索老城是一份需要静下心来品味的礼物。它没有令人屏息的绝世景观，却有一种让人安心的、质朴的美。在这里，旅行的节奏被迫放慢，你会更留意墙角的一丛野花、门口闲聊的老人、以及阳光在石墙上移动的轨迹。如果你厌倦了热门景点的拥挤，渴望寻找一个真实、宁静、充满生活痕迹的意大利，那么这座山城会温柔地拥抱你。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
