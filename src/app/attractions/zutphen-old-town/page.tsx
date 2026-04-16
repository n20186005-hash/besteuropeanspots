import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '聚特芬古城 Zutphen Old Town｜漫步中世纪汉萨同盟的时光回廊 - 最佳欧洲景点',
  description: '走进聚特芬古城，就像不小心翻开了荷兰历史书中保存最完好的一页。这里没有阿姆斯特丹的喧嚣，时间仿佛被古老的城墙和鹅卵石街道按下了慢放键。我的第一印象是“宁静的富有”——作为曾经的汉萨同盟重要成员，那些山形墙的商人豪宅、高耸的教堂塔楼，无不诉说着它昔日的繁荣，但如今一切都沉淀为一种优雅从容的气质。我最爱...',
}

export default function ZutphenOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '聚特芬古城', href: '/attractions/zutphen-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">聚特芬古城・Zutphen Old Town・荷兰・聚特芬</h1>
          <p className="text-lg text-gray-600 mb-6">
            走进聚特芬古城，就像不小心翻开了荷兰历史书中保存最完好的一页。这里没有阿姆斯特丹的喧嚣，时间仿佛被古老的城墙和鹅卵石街道按下了慢放键。我的第一印象是“宁静的富有”——作为曾经的汉萨同盟重要成员，那些山形墙的商人豪宅、高耸的教堂塔楼，无不诉说着它昔日的繁荣，但如今一切都沉淀为一种优雅从容的气质。我最爱在伯恩霍夫广场（Bornhov）附近闲逛，看着运河静静流淌，倒映着砖红色房屋的倩影，偶尔有当地人骑着自行车叮铃铃地经过，那份日常与历史的交融感，特别治愈。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">走进聚特芬古城，就像不小心翻开了荷兰历史书中保存最完好的一页。这里没有阿姆斯特丹的喧嚣，时间仿佛被古老的城墙和鹅卵石街道按下了慢放键。我的第一印象是“宁静的富有”——作为曾经的汉萨同盟重要成员，那些山形墙的商人豪宅、高耸的教堂塔楼，无不诉说着它昔日的繁荣，但如今一切都沉淀为一种优雅从容的气质。我最爱在伯恩霍夫广场（Bornhov）附近闲逛，看着运河静静流淌，倒映着砖红色房屋的倩影，偶尔有当地人骑着自行车叮铃铃地经过，那份日常与历史的交融感，特别治愈。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="聚特芬古城" />
                <InfoRow label="英文名称" value="Zutphen Old Town" />
                <InfoRow label="正式名称" value="Zutphen Old Town" />
                <InfoRow label="国家" value="荷兰" />
                <InfoRow label="城市" value="聚特芬" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="古城公共区域全天开放。城内主要历史建筑（如圣瓦尔堡教堂、市政厅）开放时间通常为周二至周六 11:00-17:00，周日 13:00-17:00，周一可能关闭或缩短开放时间。" />
              <InfoRow label="门票价格" value="进入古城免费。参观具体历史建筑需单独购票，例如圣瓦尔堡教堂门票约5欧元，市政厅博物馆门票约6欧元。" />
              <InfoRow label="地址" value="Zutphen City Center, 7201 DN Zutphen, Netherlands" />
              <InfoRow label="交通方式" value="从阿姆斯特丹史基浦机场出发，乘坐火车至聚特芬站（Zutphen Station），车程约1小时15分钟。从火车站步行至古城中心仅需5-10分钟。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">聚特芬的故事始于大约公元800年左右的一个河畔定居点，“聚特芬”这个名字本身就源于“南方的港口”。到了11世纪，它已经发展成一个有模有样的城镇，并建起了最初的防御工事。真正让聚特芬起飞的是加入汉萨同盟，大约是14世纪的事。想象一下，当时来自欧洲各地的商品——毛皮、布料、葡萄酒，在这里的码头装卸，商人们用低地德语讨价还价，那场面一定热闹非凡。财富积累起来，就变成了我们眼前这些漂亮的晚期哥特式建筑，比如圣瓦尔堡教堂，它的图书馆里至今还藏着中世纪的手链书，走进去那股羊皮纸和旧木头的气味，简直像穿越。</p>
              <p className="text-gray-700 leading-relaxed mb-4">不过历史也有残酷的一面，1572年西班牙军队的围攻和洗劫（被称为“聚特芬之怒”）几乎摧毁了城市。但荷兰人又把它重建了起来，那些带阶梯山墙的房屋很多都是黄金时代（17世纪）的产物。有趣的是，它后来似乎“睡着了”，工业化的大潮没有完全改变它的面貌，反而意外地让它保存了中世纪的街道格局。所以今天我们才能如此完整地触摸到这段层叠的历史，从汉萨同盟的荣光到黄金时代的余晖，都凝固在这些砖石之间。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从古城南端的聚特芬火车站开始，步行向北穿越核心区，终点可以设在北部的公园或城墙遗址。全程步行约2-3小时，轻松悠闲，能覆盖主要广场、教堂和风景如画的运河区。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>古城不大，完全不需要地图，随心所欲地迷路是最好的游览方式。记得穿一双舒适的平底鞋，鹅卵石路面虽然很有情调，但对高跟鞋不太友好。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从火车站步行至古老的伯恩霍夫广场，感受古城入口的氛围。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  参观宏伟的圣瓦尔堡教堂及其著名的中世纪图书馆。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  漫步到旧市政厅和肉市广场，欣赏周围的商人豪宅。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  沿着运河（如伯克运河）散步，看水中倒映的美丽山形墙房屋。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  寻找残留的古城墙和城门（如布尔城门），了解城市的防御历史。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  在古城小巷中随意探索，发现隐藏的庭院和小店。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  伯克运河桥梁上</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为清晨或傍晚金色时刻。从桥中央向两侧拍摄，可以将运河、古老的房屋立面及其完美的水中倒影一同纳入镜头，画面宁静而对称。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  肉市广场望向圣瓦尔堡教堂</h4>
                  <p className="text-sm text-gray-700">下午阳光照亮教堂塔楼时最佳。以广场上的古老建筑为前景，拍摄高耸的教堂塔楼，能体现古城的层次感和历史厚重感。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  古城小巷深处</h4>
                  <p className="text-sm text-gray-700">晴天正午光线直射时最佳。捕捉阳光洒在鹅卵石路上、照亮砖墙和彩色窗框的细节，富有生活气息和光影美感。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 尊重当地居民隐私，避免对着居民窗户近距离拍摄。雨天后的鹅卵石路面反光也很美，是另一种风味。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  预算之选</h4>
                  <p className="text-sm text-blue-800">古城边缘的B&B或小型酒店，价格亲民，体验本地生活。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  中档舒适</h4>
                  <p className="text-sm text-green-800">选择位于伯恩霍夫广场或主广场附近的精品酒店，出行极其方便，开窗即是历史景观。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  特色体验</h4>
                  <p className="text-sm text-yellow-800">入住由历史建筑改造的酒店或公寓，感受住在文物中的独特氛围。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  家庭/多人</h4>
                  <p className="text-sm text-purple-800">考虑租赁运河边的度假屋，空间更大，更有居家感。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">聚特芬非常安静，住在古城中心也不会受到噪音困扰，反而能享受清晨和夜晚无人时的绝美景色。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">聚特芬古城就像一个低调而内涵丰富的朋友，它不会用喧嚣吸引你，但只要你愿意慢下脚步，走进它的街巷，就能感受到那份历经岁月沉淀的从容与优雅。这里保存的不是冰冷的遗迹，而是一种依然在呼吸的中世纪生活氛围。如果你厌倦了人潮汹涌的热门景点，渴望一段真正宁静、能和历史对话的漫步，那么聚特芬绝对不会让你失望。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
