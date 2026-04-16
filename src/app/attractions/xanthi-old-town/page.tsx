import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '克桑西古城 Xanthi Old Town｜漫步在“东方巴黎”的彩色奥斯曼老街区 - 最佳欧洲景点',
  description: '走进克桑西古城，就像不小心闯进了一本褪色的奥斯曼帝国故事书。第一眼就被那些五彩斑斓的老房子迷住了——鹅卵石铺成的小巷像迷宫一样蜿蜒，两边是粉的、黄的、蓝的奥斯曼风格豪宅，好多都有着精致的木制阳台，当地人叫它们“sachnisi”，感觉随时会有穿着传统服饰的老人探出头来跟你打招呼。空气里混合着咖啡香和...',
}

export default function XanthiOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '克桑西古城', href: '/attractions/xanthi-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">克桑西古城・Xanthi Old Town・希腊・克桑西</h1>
          <p className="text-lg text-gray-600 mb-6">
            走进克桑西古城，就像不小心闯进了一本褪色的奥斯曼帝国故事书。第一眼就被那些五彩斑斓的老房子迷住了——鹅卵石铺成的小巷像迷宫一样蜿蜒，两边是粉的、黄的、蓝的奥斯曼风格豪宅，好多都有着精致的木制阳台，当地人叫它们“sachnisi”，感觉随时会有穿着传统服饰的老人探出头来跟你打招呼。空气里混合着咖啡香和不知名花朵的味道，特别安静，只有你的脚步声和偶尔传来的教堂钟声。这里没有雅典卫城那种震撼，却有一种被时光温柔包裹的亲切感，你会不自觉地放慢脚步，去摸一摸那些斑驳的石头墙，猜想着一百年前烟草商人们在这里过着怎样的奢华生活。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">走进克桑西古城，就像不小心闯进了一本褪色的奥斯曼帝国故事书。第一眼就被那些五彩斑斓的老房子迷住了——鹅卵石铺成的小巷像迷宫一样蜿蜒，两边是粉的、黄的、蓝的奥斯曼风格豪宅，好多都有着精致的木制阳台，当地人叫它们“sachnisi”，感觉随时会有穿着传统服饰的老人探出头来跟你打招呼。空气里混合着咖啡香和不知名花朵的味道，特别安静，只有你的脚步声和偶尔传来的教堂钟声。这里没有雅典卫城那种震撼，却有一种被时光温柔包裹的亲切感，你会不自觉地放慢脚步，去摸一摸那些斑驳的石头墙，猜想着一百年前烟草商人们在这里过着怎样的奢华生活。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="克桑西古城" />
                <InfoRow label="英文名称" value="Xanthi Old Town" />
                <InfoRow label="正式名称" value="Xanthi Old Town" />
                <InfoRow label="国家" value="希腊" />
                <InfoRow label="城市" value="克桑西" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="全天开放（历史建筑内部开放时间各异，通常为10:00-17:00）" />
              <InfoRow label="门票价格" value="古城区域免费开放。部分博物馆或历史建筑需单独购票，票价约2-5欧元。" />
              <InfoRow label="地址" value="Old Town, Xanthi, 671 00, Greece" />
              <InfoRow label="交通方式" value="从最近的卡瓦拉国际机场（KVA）出发，驾车沿E90公路向西行驶约60公里，约50分钟可达。从克桑西市中心火车站或汽车站步行至古城约15-20分钟。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">克桑西古城的故事，是和烟草的金色叶子紧紧绑在一起的。它的黄金时代大概在19世纪到20世纪初，那时候奥斯曼帝国统治着这里。因为周边肥沃的土地特别适合种烟草，克桑西一下子成了巴尔干地区重要的烟草贸易中心，富得流油。那些你眼前漂亮的豪宅，基本都是那时候发家的烟草商人们建的，他们挣了钱，就竞相比着谁家的房子更气派，把奥斯曼建筑风格和欧洲新古典主义元素混在一起，形成了古城独特的面貌。你细看那些房子，底层常用石头，上层则是色彩明丽的木材，既考虑了商业存储的实用，又炫耀着主人的财富。不过好景不长，两次世界大战和后来的政局变迁，让烟草贸易衰落了，很多富商家族也离开了。古城一度沉寂，变得破败。幸好，大概从上世纪七八十年代开始，希腊政府和当地人意识到了这些老建筑的价值，开始一点点修复保护，很多房子被改造成了文化场所、餐馆和民宿。走在巷子里，我总觉得能听到历史的回响——这里既有奥斯曼的遗韵，又有希腊的魂，还有一种专属于马其顿地区的、混杂而坚韧的气质。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从古城西南端的“Folk Art Museum”民俗博物馆作为起点，这里也是信息中心。然后向北深入迷宫般的住宅区，最后抵达北部的Agios Georgios教堂区域俯瞰全城。全程步行缓慢游览，加上拍照和咖啡馆小憩，大约需要2-3小时。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>巷子如迷宫，但不用担心迷路，随意探索更有趣。建议穿一双舒适的平底鞋，鹅卵石路面不太适合高跟鞋。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从民俗博物馆开始，先了解本地历史文化。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  沿着Kodra主石阶路向上，欣赏两侧对称的奥斯曼豪宅。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  拐进窄巷探索，寻找那些色彩最鲜艳的“sachnisi”木阳台。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  参观古老的Agios Athanasios教堂。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  到达制高点Agios Georgios教堂前的广场，休息并眺望城市和新城区。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  Kodra石阶路中段</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为上午10点或下午4点，阳光斜射时光影效果极佳。角度和效果</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  某条无名窄巷的转角</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间是正午阳光直射时，色彩最饱和。角度和效果</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  Agios Georgios教堂前广场</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间是傍晚日落时分。角度和效果</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 拍摄民居时请保持礼貌，避免打扰住户的私人生活，尽量拍摄建筑外观和公共街道。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  奢华/特色之选</h4>
                  <p className="text-sm text-blue-800">入住古城内由奥斯曼豪宅修复而成的精品酒店，如“Xanthi Old Town Hotel”，沉浸式体验历史氛围。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  舒适/便捷之选</h4>
                  <p className="text-sm text-green-800">选择古城边缘或紧邻新城区的现代酒店，如“Xanthippion Hotel”，设施新，步行到古城仅5-10分钟。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  经济/体验之选</h4>
                  <p className="text-sm text-yellow-800">预订古城内的传统民宿或家庭式旅馆，价格亲民，能直接感受本地人的生活环境。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">古城内的住宿通常更具风情但可能隔音稍差，新城区酒店则更标准化且安静，可根据个人偏好选择。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">克桑西古城不是一个需要匆匆打卡的景点，它更像一个需要你用心去漫步、去感受的活态社区。这里没有汹涌的人潮，只有宁静的巷弄、温暖的色彩和缓慢流淌的时光。它或许不够完美，有些角落还带着岁月的裂痕，但正是这份真实与恬淡，让它格外动人。如果你厌倦了标准化的旅游路线，想找一个地方发发呆、做一场关于旧时光的梦，那么克桑西古城就在这里，安静地等着你。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
