import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡瓦拉老城 Kavala Old Town｜漫步在奥斯曼风情的“蓝色之城” - 最佳欧洲景点',
  description: '想象一下，你正沿着鹅卵石小路向上攀登，两边是刷成各种柔和色调的房子，阳台上垂挂着九重葛。空气中混合着海风的咸味和咖啡的香气。这里就是卡瓦拉老城，一个层层叠叠建在山坡上的迷宫。它不像圣托里尼那样满是游客，反而有种慵懒、真实的地中海生活气息。你会路过小小的东正教堂，也会看到奥斯曼时期留下的清真寺宣礼塔，...',
}

export default function KavalaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '卡瓦拉老城', href: '/attractions/kavala-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">卡瓦拉老城・Kavala Old Town・希腊・卡瓦拉</h1>
          <p className="text-lg text-gray-600 mb-6">
            想象一下，你正沿着鹅卵石小路向上攀登，两边是刷成各种柔和色调的房子，阳台上垂挂着九重葛。空气中混合着海风的咸味和咖啡的香气。这里就是卡瓦拉老城，一个层层叠叠建在山坡上的迷宫。它不像圣托里尼那样满是游客，反而有种慵懒、真实的地中海生活气息。你会路过小小的东正教堂，也会看到奥斯曼时期留下的清真寺宣礼塔，历史在这里安静地交融。爬到顶端，突然，爱琴海的全景在你眼前铺开，那种豁然开朗的感觉，就是旅途中最棒的奖赏。这里节奏很慢，适合迷路，也适合发呆。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">想象一下，你正沿着鹅卵石小路向上攀登，两边是刷成各种柔和色调的房子，阳台上垂挂着九重葛。空气中混合着海风的咸味和咖啡的香气。这里就是卡瓦拉老城，一个层层叠叠建在山坡上的迷宫。它不像圣托里尼那样满是游客，反而有种慵懒、真实的地中海生活气息。你会路过小小的东正教堂，也会看到奥斯曼时期留下的清真寺宣礼塔，历史在这里安静地交融。爬到顶端，突然，爱琴海的全景在你眼前铺开，那种豁然开朗的感觉，就是旅途中最棒的奖赏。这里节奏很慢，适合迷路，也适合发呆。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="卡瓦拉老城" />
                <InfoRow label="英文名称" value="Kavala Old Town" />
                <InfoRow label="正式名称" value="Kavala Old Town" />
                <InfoRow label="国家" value="希腊" />
                <InfoRow label="城市" value="卡瓦拉" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="全天开放（历史建筑内部开放时间各异，通常为上午9点至下午3点）" />
              <InfoRow label="门票价格" value="进入老城区域免费。部分历史建筑（如穆罕默德·阿里故居）需购票，约3-5欧元。" />
              <InfoRow label="地址" value="Old Town, Kavala 653 02, Greece" />
              <InfoRow label="交通方式" value="从卡瓦拉国际机场（KVA）出发，乘坐出租车约25分钟可达老城入口。从卡瓦拉市中心火车站步行约15-20分钟即可到达山脚下的老城入口。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">卡瓦拉老城的故事，就像一本摊开在地中海边的历史书。它的前身可以追溯到古希腊时期，但今天我们看到的模样，主要烙印着拜占庭和奥斯曼帝国的印记。中世纪时，这里建起了雄伟的卡瓦拉城堡，用于防御海盗和外敌，如今它依然矗立在山顶，俯瞰着海湾。到了奥斯曼帝国统治时期（约15世纪后），老城迎来了繁荣，成为了重要的烟草贸易中心。你看到的那些带有突出木制窗棂（叫做“sachnisi”）的豪宅，很多都是当年富有的烟草商人的宅邸。其中最著名的居民当属穆罕默德·阿里，他在这里出生，后来成为了埃及的统治者，他的故居现在成了博物馆。20世纪后，随着城市向山下平原发展，老城更多地保留了旧时光的宁静。走在街上，你能感受到这种层层累积的历史：城堡的石墙、奥斯曼的宅邸、拜占庭的水渠，它们共同讲述着这座“蓝色之城”的千年往事。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从山脚下的“现代区”与老城交界处（靠近港口）开始，沿着主步道向上蜿蜒探索，最终抵达山顶的城堡，全程步行游览约需2-3小时。这是一条由低到高、渐入佳境的经典路线。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>路线无需严格导航，随心探索小巷更有趣。但务必穿一双绝对防滑舒适的鞋子，因为坡度很大，路面是光滑的鹅卵石。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从老城主入口（Porta Nuova）进入，感受奥斯曼风格建筑的门廊。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  沿着蜿蜒的鹅卵石主街（I. Paleologou街）向上，浏览两侧的彩绘房屋和小商店。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  参观穆罕默德·阿里故居博物馆，了解这位传奇人物的生平。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  继续上行，经过古老的拜占庭高架渠（Kamares），它是老城的标志性景观。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  抵达山顶的卡瓦拉城堡，在城墙上环绕一周，俯瞰全城和爱琴海绝景。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  城堡城墙西侧</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为日落时分。角度和效果</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  拜占庭高架渠下方</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为上午，阳光能照亮水渠的拱廊。角度和效果</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  老城中心的小广场（Plateia I. Paleologou）</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为午后。角度和效果</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 许多美丽的角度藏在僻静的小巷里，多抬头看看那些布满鲜花的阳台和交错的小路。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  预算有限/体验当地</h4>
                  <p className="text-sm text-blue-800">选择老城山脚下附近的家庭旅馆或精品酒店，价格适中，步行即可开始探索。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  特色体验/中档预算</h4>
                  <p className="text-sm text-green-800">入住老城内部经过修复的奥斯曼风格宅邸酒店，真正住在历史里，推窗即是风景。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  高端海景/便利</h4>
                  <p className="text-sm text-yellow-800">选择卡瓦拉港口或新城区沿海的五星级酒店，享受现代设施和无敌海景，打车前往老城也很近。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">如果选择住在老城内，请确认酒店是否提供行李搬运服务，因为汽车无法进入核心区，需要手提行李爬台阶。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">卡瓦拉老城的美，不是那种咄咄逼人的壮观，而是一种需要你放慢脚步、细细品味的温柔。它像一位历经沧桑却依旧优雅的老人，把拜占庭的堡垒、奥斯曼的宅院和地中海的闲适，都揉进了山海之间的阳光里。在这里，最好的旅行方式就是没有目的地闲逛，让每一个转角都可能带来惊喜。如果你想寻找一个不那么拥挤、充满生活质感和历史层次感的希腊，那么卡瓦拉老城绝不会让你失望。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
