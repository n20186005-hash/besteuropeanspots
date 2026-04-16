import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡斯托里亚老城 Kastoria Old Town｜漫步在奥斯曼风情与拜占庭珍宝间的半岛古城 - 最佳欧洲景点',
  description: '想象一下，你走在一条鹅卵石小径上，一边是湛蓝如镜的奥雷斯蒂亚达湖，另一边是层层叠叠、带着奥斯曼帝国时期木制阳台的老房子。这就是卡斯托里亚老城给你的第一印象——一种宁静的、被时光浸泡过的美。这里不像那些喧嚣的旅游热点，它安静地坐落在湖心半岛上，像个与世无争的隐士。空气中混合着湖水的气息和老木头、石头的...',
}

export default function KastoriaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '卡斯托里亚老城', href: '/attractions/kastoria-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">卡斯托里亚老城・Kastoria Old Town・希腊・卡斯托里亚</h1>
          <p className="text-lg text-gray-600 mb-6">
            想象一下，你走在一条鹅卵石小径上，一边是湛蓝如镜的奥雷斯蒂亚达湖，另一边是层层叠叠、带着奥斯曼帝国时期木制阳台的老房子。这就是卡斯托里亚老城给你的第一印象——一种宁静的、被时光浸泡过的美。这里不像那些喧嚣的旅游热点，它安静地坐落在湖心半岛上，像个与世无争的隐士。空气中混合着湖水的气息和老木头、石头的味道。你会不经意间在转角发现一座小小的拜占庭教堂，外表朴素，推门进去却可能被满墙绚烂的湿壁画震撼到说不出话。老城里住着很多当地人，阳台上晾着衣服，偶尔有老奶奶坐在门口晒太阳，让这座古城充满了鲜活的生活气息，而不仅仅是供人参观的标本。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">想象一下，你走在一条鹅卵石小径上，一边是湛蓝如镜的奥雷斯蒂亚达湖，另一边是层层叠叠、带着奥斯曼帝国时期木制阳台的老房子。这就是卡斯托里亚老城给你的第一印象——一种宁静的、被时光浸泡过的美。这里不像那些喧嚣的旅游热点，它安静地坐落在湖心半岛上，像个与世无争的隐士。空气中混合着湖水的气息和老木头、石头的味道。你会不经意间在转角发现一座小小的拜占庭教堂，外表朴素，推门进去却可能被满墙绚烂的湿壁画震撼到说不出话。老城里住着很多当地人，阳台上晾着衣服，偶尔有老奶奶坐在门口晒太阳，让这座古城充满了鲜活的生活气息，而不仅仅是供人参观的标本。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="卡斯托里亚老城" />
                <InfoRow label="英文名称" value="Kastoria Old Town" />
                <InfoRow label="正式名称" value="Kastoria Old Town" />
                <InfoRow label="国家" value="希腊" />
                <InfoRow label="城市" value="卡斯托里亚" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="老城区域全天开放。内部各博物馆和教堂开放时间不一，通常为周二至周日 8:30-15:00。" />
              <InfoRow label="门票价格" value="进入老城区域免费。参观个别教堂或博物馆可能需要小额门票（约2-5欧元），部分教堂免费但欢迎捐款。" />
              <InfoRow label="地址" value="Old Town, Kastoria 521 00, Greece" />
              <InfoRow label="交通方式" value="从最近的卡瓦拉国际机场（KVA）出发，驾车约2小时可抵达卡斯托里亚。从雅典或塞萨洛尼基乘坐长途巴士也可到达，车程分别约为6小时和3小时。老城位于卡斯托里亚市的奥雷斯蒂亚达湖半岛上，从市中心步行即可轻松到达。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">卡斯托里亚老城的故事，就像湖水的波纹，一层层荡漾开来。它的历史可以追溯到拜占庭帝国的黄金时代，大约在9世纪到11世纪，这里因为珍贵的毛皮贸易（尤其是紫貂皮）而变得异常富有和重要。那些富商和贵族们将财富的一部分用于信仰，于是在这个不大的半岛上，竟然兴建了超过70座教堂！这就是为什么你今天能在不起眼的巷弄里，发现那么多艺术宝库。走进这些教堂，看着墙上保存完好的湿壁画，圣人的眼神仿佛能穿透千年，那一刻你真的能触摸到拜占庭艺术的灵魂。到了14世纪以后，奥斯曼土耳其人统治了这里，但并没有摧毁这一切，反而为老城增添了新的层次。你能看到很多老宅子融合了奥斯曼的建筑风格，特别是那些突出的、用精美木雕装饰的“萨奇尼”阳台，它们悬在狭窄的街道上方，构成了老城最标志性的风景线。漫步时我常想，这些石头和木头，见证了多少商队的来往、多少家庭的悲欢，又庇护了多少虔诚的祈祷。它不是一个死去的古迹，而是一个一直活着、呼吸着的社区。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从半岛根部的“埃莱夫瑟里亚斯广场”附近进入老城，沿着主鹅卵石路向半岛尖端漫步，一路探索小巷和湖岸，最后抵达半岛最南端的观景点。全程步行游览约需2-3小时，若深入参观教堂则需要更长时间。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>老城小路错综复杂且多上下坡，建议穿着舒适的步行鞋。使用手机地图导航很有帮助，但也不妨尝试迷路，常有意外惊喜。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从埃莱夫瑟里亚斯广场起步，感受老城入口的生活气息。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  沿着主路“Apozari”街向上，欣赏两侧奥斯曼风格的老宅与木阳台。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  随意拐入一条小巷，寻找并参观一座隐藏的拜占庭教堂（如圣阿纳尔吉里教堂）。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  走到湖岸步道，沿着水边散步，欣赏对岸城市风光与湖中倒影。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  继续向南，到达半岛尖端，参观民俗博物馆或 simply 在观景台休息。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  从另一侧的小路绕回，体验不同的街景。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  奥斯曼老宅阳台下</h4>
                  <p className="text-sm text-gray-700">位置在Apozari街某段阳台密集处。最佳时间为清晨或傍晚，阳光斜射时。角度为仰拍，捕捉木雕阳台的细节与蓝天，富有层次感和历史感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  湖岸步道</h4>
                  <p className="text-sm text-gray-700">位置在半岛西侧沿湖小路。最佳时间为晴朗的下午，湖面平静如镜时。角度为侧拍，将老城石屋、湖水倒影和对岸山峦一同纳入画面，景色开阔。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  拜占庭教堂内部</h4>
                  <p className="text-sm text-gray-700">位置在某座允许拍照的教堂内（需确认并遵守规定）。最佳时间为上午，阳光从窗户射入时。角度为对准壁画或圣像屏，捕捉金色背景与圣像的肃穆光辉（禁用闪光灯）。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  半岛尖端观景台</h4>
                  <p className="text-sm text-gray-700">位置在民俗博物馆附近。最佳时间为日落时分。角度为广角拍摄，俯瞰湖湾、老城屋顶和远山，景色壮丽。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 拍摄教堂内部前务必确认是否允许拍照，且绝对不要使用闪光灯，以免损害珍贵的壁画。尊重当地的居民隐私，避免对着住户的窗户或阳台过分拍摄。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  奢华湖景体验</h4>
                  <p className="text-sm text-blue-800">选择老城内或紧邻老城的精品酒店，如“Nessie Hotel”，部分房间拥有直面湖泊和老城的绝佳阳台。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  中档特色民宿</h4>
                  <p className="text-sm text-green-800">入住老城修复的奥斯曼风格宅邸改造的民宿，沉浸式体验古城氛围，如“Archontiko tou Zafiri”。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  经济便捷之选</h4>
                  <p className="text-sm text-yellow-800">住在半岛根部或湖对岸的市中心现代酒店，价格更实惠，步行至老城也只需10-15分钟。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  家庭或团体出游</h4>
                  <p className="text-sm text-purple-800">考虑租赁老城周边带厨房的公寓，方便灵活安排行程。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">老城内的住宿更具风情但价格较高且停车不便；市中心的住宿性价比更高，生活设施齐全。夏季和毛皮节期间建议提前预订。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">卡斯托里亚老城是一个需要你慢下来，用心去感受的地方。它没有惊心动魄的壮观，却有一种渗入骨髓的宁静与深厚。在这里，历史不是教科书上的文字，而是你指尖触碰的冰凉石墙，是目光所及的斑驳壁画，是鼻尖萦绕的古老气息。它完美地平衡了文化遗产与日常生活，让你觉得，美好而真实的历史，本就该是这样活着的样子。如果你厌倦了人潮，想找一个地方安静地走走，发发呆，和千年的光影对话，那么这里就是你的理想之地。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
