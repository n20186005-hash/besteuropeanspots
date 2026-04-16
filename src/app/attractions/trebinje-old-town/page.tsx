import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '特雷比涅老城 Trebinje Old Town｜漫步在特雷比萨尼察河畔的奥斯曼风情古镇 - 最佳欧洲景点',
  description: '特雷比涅老城就像一个被时间温柔封存的琥珀，静静地躺在特雷比萨尼察河的两岸。我第一次走进这里时，感觉瞬间从现代欧洲穿越到了奥斯曼帝国时代。鹅卵石铺成的小巷窄得只容两人并肩，两旁是石砌的老房子，阳台上垂挂着鲜艳的天竺葵。最迷人的是那些横跨在翠绿河水上的老石桥，尤其是那座著名的“Arslanagića桥”...',
}

export default function TrebinjeOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '特雷比涅老城', href: '/attractions/trebinje-old-town' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">特雷比涅老城</h1>
          <p className="text-xl text-gray-600 mb-4">Trebinje Old Town</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">波黑</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">特雷比涅</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">特雷比涅老城就像一个被时间温柔封存的琥珀，静静地躺在特雷比萨尼察河的两岸。我第一次走进这里时，感觉瞬间从现代欧洲穿越到了奥斯曼帝国时代。鹅卵石铺成的小巷窄得只容两人并肩，两旁是石砌的老房子，阳台上垂挂着鲜艳的天竺葵。最迷人的是那些横跨在翠绿河水上的老石桥，尤其是那座著名的“Arslanagića桥”，在午后阳光下，当地人坐在桥头咖啡馆闲聊，孩子们在河边嬉戏，空气里混合着咖啡香和流水声，那种悠闲的、与世无争的生活节奏，会让你不由自主地放慢脚步，想找个地方坐下来，发一下午的呆。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">老城公共区域全天免费开放，但内部的个别博物馆或历史建筑可能有各自的开放时间（通常为上午9点至下午5点）和门票（价格低廉，约2-5欧元）。夏季是游览旺季，咖啡馆和餐厅营业时间更长。建议穿着舒适的平底鞋，因为鹅卵石路面不平。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">特雷比涅的历史可以追溯到罗马时期，但我们现在看到的这座迷人老城，其肌理和风貌主要成形于奥斯曼土耳其帝国统治时期（15世纪至19世纪）。当时，这里成为了一个重要的贸易和手工业中心。那些迷宫般的狭窄街道、坚固的石屋、以及最重要的——一系列优美的石桥，都是那个时代的遗产。其中，建于16世纪的Arslanagića桥（最初建于更上游，后因修建水库而整体迁移至此）不仅是交通要道，更是建筑艺术的杰作，见证了数个世纪的商旅往来。在奥匈帝国时期及后来的南斯拉夫时期，老城外围有所发展，但核心区奇迹般地保留了原貌，没有遭受大的战争破坏。漫步其中，你触摸的每一块石头，都仿佛在低语着关于丝绸、香料、以及不同文明在此交汇的故事。它不像一些热门古城那样精致到像布景，反而有种未经雕琢的、真实的生活气息，这种“活着的”历史感尤为珍贵。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">推荐游览时长约2-3小时。路线从标志性的Arslanagića桥开始，过桥后进入迷宫般的奥斯曼风格老城区，沿着主街漫步，探索小巷，最后走到河对岸的观景咖啡馆结束，形成一个环线。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从Arslanagića桥起点，欣赏这座奥斯曼石桥的全貌和河景。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  过桥进入老城核心区，沿着卵石主街（Kujundžiluk）漫步，浏览两侧的手工艺品小店。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  随意拐进一条安静的小巷，感受原汁原味的民居氛围。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  参观老城中心的清真寺（如Osman-pašina清真寺）或钟楼。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  走到河对岸，从另一个角度回望老城和石桥。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  找一家河畔的咖啡馆（如“Šeher”），坐下来喝杯波斯尼亚咖啡。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">不需要特意导航，迷路也是体验的一部分。但记住主要地标（石桥和清真寺）就能轻松找到方向。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **Arslanagića桥全景**：站在桥头或河岸步道上，清晨或黄昏光线柔和时拍摄，能捕捉到石桥优美的拱形倒映在平静河水中的完整画面。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **老城小巷纵深**：选择一条有台阶、两侧石墙布满绿植的小巷，在正午阳光直射时拍摄，利用光影对比突出巷道的深邃感和质感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **红瓦屋顶与清真寺尖塔**：从河对岸的咖啡馆露台或较高位置拍摄，将老城连绵的红色屋顶和清真寺的尖塔一同纳入镜头，展现古镇的天际线。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **桥上的生活瞬间**：在下午当地人活动频繁时，在桥上捕捉行人走过、或老人坐在桥栏休息的生活场景，让照片充满故事感。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">尊重当地居民，拍摄人物时最好先微笑示意并获得同意。河面反射的光线很强，注意调整曝光。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **老城精品酒店**：选择老城内部或紧邻石桥的精品酒店（如Hotel Platani），开窗即是历史风景。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **河畔民宿**：入住特雷比萨尼察河畔的家庭民宿，体验当地人的热情，通常性价比很高。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **新城现代酒店**：住在步行可达老城的新城区，选择更多，设施更新（如Hotel Leotar）。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **郊外特色庄园**：考虑老城周边乡村的石头庄园民宿，享受宁静的田园风光。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">夏季建议提前预订，尤其是老城内的住宿非常抢手。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">特雷比涅老城的美，不在于有多么震撼的单一建筑，而在于那种浑然天成的、宁静的生活画卷。它是一首用石头、流水和时光写成的田园诗。如果你厌倦了人潮汹涌的景点，渴望找到一个能真正放松心灵、慢慢品味历史厚度的地方，那么这个小巧而温暖的古镇，绝对会给你带来意想不到的惊喜和治愈。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="全天开放（公共区域）" />
                <InfoRow icon="🎫" label="门票" value="免费" />
                <InfoRow icon="📍" label="地址" value="Stari Grad, Trebinje, Bosnia and Herzegovina" />
                <InfoRow icon="🚌" label="交通" value="从杜布罗夫尼克机场（克罗地亚）出发，驾车约1小时15分钟即可抵达。从莫斯塔尔乘巴士前往，车程约2.5小时。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
