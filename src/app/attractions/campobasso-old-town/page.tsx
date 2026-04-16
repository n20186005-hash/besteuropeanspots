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

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">坎波巴索老城</h1>
          <p className="text-xl text-gray-600 mb-4">Campobasso Old Town</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">意大利</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">坎波巴索</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">想象一下，你沿着蜿蜒的石头小径向上爬，两旁是蜜糖色的古老石屋，阳台上垂挂着鲜艳的天竺葵。空气里有种特别的宁静，只能听到自己的脚步声和远处教堂隐约的钟声。坎波巴索老城就是这样一座“长”在山顶上的中世纪小镇，它不像佛罗伦萨那样游人如织，却保留了最原汁原味的意大利山城生活气息。站在高处，整个莫利塞大区的丘陵风光像一幅绿色地毯在你脚下铺开，那种豁然开朗的感觉，瞬间觉得爬坡的辛苦都值了。这里的时间仿佛走得很慢，适合你放空自己，漫无目的地探索每一条可能通往秘密庭院的小巷。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">老城本身是开放街区，随时可进入。但核心地标**蒙福尔特城堡**的开放时间可能随季节调整，夏季（6-9月）通常延长开放。许多小型教堂中午会关闭休息数小时。对65岁以上老人及学生常有门票折扣，建议携带证件。老城街道多为台阶和坡道，需穿着舒适的步行鞋。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">坎波索巴老城的故事始于中世纪早期，大约在10世纪左右，人们为了安全开始在这座山上聚居，形成了最初的村落。它的名字“Campobasso”在意大利语里是“低地田野”的意思，挺有意思的，因为它明明建在高高的山上，或许是指山脚下那片肥沃的平原吧。老城真正的黄金时代是在14到15世纪，当时它处于强大的蒙福尔特家族统治之下。我们今天看到的**蒙福尔特城堡**就是那个时期的产物，它雄踞山顶，既是防御工事，也是权力的象征，俯瞰着整个地区，你能想象当年领主站在塔楼上巡视自己领地的样子。随后的几个世纪里，老城经历了地震和战争的考验，但核心的中世纪肌理——那些迷宫般的窄巷、拱门和广场——却奇迹般地保存了下来。19世纪后，城市发展的重心逐渐转移到山下更平坦的新城区，老城反而因此“凝固”在了旧时光里，少了些喧嚣，多了份沧桑的诗意。走在这些被岁月磨得光滑的石板路上，仿佛能触摸到层层叠叠的历史。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">推荐从山脚下的**加里波第广场**（Piazza Garibaldi）附近开始，沿着主步道“Via Monforte”向上攀登，一路探索小巷，最终抵达山顶的城堡作为终点。全程步行游览，包含拍照和短暂休息，大约需要2-3小时。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从加里波第广场出发，沿Via Monforte主路上山。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  穿梭于蜘蛛网般的狭窄小巷（如Vico dei Santi），感受中世纪氛围。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  参观圣乔治大教堂，欣赏其朴素的罗马式外观。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  路过古老的圣莱奥纳尔多教堂和市政厅广场。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  最终抵达山顶的蒙福尔特城堡，俯瞰全景。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">小巷容易迷路，但这也是乐趣所在，不妨随意探索。务必穿一双非常防滑舒适的鞋子。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **蒙福尔特城堡观景台**：**最佳时间**为日落前黄金一小时。**角度效果**：以城堡的石墙或拱门为前景框架，拍摄远处绵延的丘陵和山下新城，画面富有层次和故事感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **Via Monforte的之字形坡道**：**最佳时间**上午，阳光能照亮石板路。**角度效果**：从坡道中段向上或向下拍摄，捕捉石阶、老墙和远处教堂钟楼的纵深感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **小巷中的拱门**：**最佳时间**正午阳光直射时，光影对比强烈。**角度效果**：站在拱门下，拍摄另一头被阳光照亮的小巷和盆栽，形成明暗交替的“画中画”效果。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">老城光线多变，窄巷中尤其如此，建议使用相机或手机灵活调整曝光，捕捉光影戏剧性。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **山下新城区的商务酒店**：交通和生活便利，性价比高，适合自驾或短暂停留。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **老城内的特色民宿（B&B）**：沉浸式体验中世纪氛围，但需爬坡且行李搬运不便。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **郊区农庄（Agriturismo）**：体验莫利塞乡村风情，适合追求宁静和美食的旅客。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">若选择老城住宿，务必确认房东是否提供行李搬运协助，否则拖着大箱子上山会非常辛苦。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">坎波巴索老城是一份需要静下心来品味的礼物。它没有令人屏息的绝世景观，却有一种让人安心的、质朴的美。在这里，旅行的节奏被迫放慢，你会更留意墙角的一丛野花、门口闲聊的老人、以及阳光在石墙上移动的轨迹。如果你厌倦了热门景点的拥挤，渴望寻找一个真实、宁静、充满生活痕迹的意大利，那么这座山城会温柔地拥抱你。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="全天开放（公共区域）。内部个别博物馆或教堂开放时间各异，通常为上午9:00至下午1:00，下午3:00至7:00。" />
                <InfoRow icon="🎫" label="门票" value="进入老城区域免费。内部个别景点如蒙福尔特城堡可能收取少量门票（约3-5欧元）。" />
                <InfoRow icon="📍" label="地址" value="Via Monforte, 86100 Campobasso CB, Italy" />
                <InfoRow icon="🚌" label="交通" value="从最近的坎波巴索火车站（Stazione di Campobasso）步行上山约20-25分钟即可抵达老城入口。若从罗马钱皮诺机场（CIA）或那不勒斯机场（NAP）出发，需先乘火车或长途汽车至坎波巴索市，总耗时约3-4小时。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
