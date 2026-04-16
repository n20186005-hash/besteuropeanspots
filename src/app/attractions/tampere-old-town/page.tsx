import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '坦佩雷老城 Tampere Old Town｜漫步在芬兰工业革命的“曼彻斯特” - 最佳欧洲景点',
  description: '坦佩雷老城，当地人更爱叫它“芬利森区”，这可不是你想象中那种有城墙的中世纪古城。它更像一个活着的工业革命博物馆！走进这里，第一眼就会被那些巨大的红砖厂房震撼到，它们像沉默的巨人，矗立在急流奔腾的坦默科斯基河两岸。空气中仿佛还残留着19世纪纺织机的轰鸣声，但如今，这些厂房里飘出的是咖啡香、面包香和艺术...',
}

export default function TampereOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '坦佩雷老城', href: '/attractions/tampere-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">坦佩雷老城・Tampere Old Town・芬兰・坦佩雷</h1>
          <p className="text-lg text-gray-600 mb-6">
            坦佩雷老城，当地人更爱叫它“芬利森区”，这可不是你想象中那种有城墙的中世纪古城。它更像一个活着的工业革命博物馆！走进这里，第一眼就会被那些巨大的红砖厂房震撼到，它们像沉默的巨人，矗立在急流奔腾的坦默科斯基河两岸。空气中仿佛还残留着19世纪纺织机的轰鸣声，但如今，这些厂房里飘出的是咖啡香、面包香和艺术画廊的颜料味。鹅卵石小路在厂房之间蜿蜒，你会看到时髦的餐厅开在旧锅炉房里，设计师小店藏在曾经的仓库中。那种粗犷的工业骨骼与精致的现代生活交织的感觉，特别酷。在这里散步，就像翻阅一本立体的历史书，每一块红砖都在讲述着芬兰如何从农业国变身工业国的故事。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">坦佩雷老城，当地人更爱叫它“芬利森区”，这可不是你想象中那种有城墙的中世纪古城。它更像一个活着的工业革命博物馆！走进这里，第一眼就会被那些巨大的红砖厂房震撼到，它们像沉默的巨人，矗立在急流奔腾的坦默科斯基河两岸。空气中仿佛还残留着19世纪纺织机的轰鸣声，但如今，这些厂房里飘出的是咖啡香、面包香和艺术画廊的颜料味。鹅卵石小路在厂房之间蜿蜒，你会看到时髦的餐厅开在旧锅炉房里，设计师小店藏在曾经的仓库中。那种粗犷的工业骨骼与精致的现代生活交织的感觉，特别酷。在这里散步，就像翻阅一本立体的历史书，每一块红砖都在讲述着芬兰如何从农业国变身工业国的故事。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="坦佩雷老城" />
                <InfoRow label="英文名称" value="Tampere Old Town" />
                <InfoRow label="正式名称" value="Tampere Old Town" />
                <InfoRow label="国家" value="芬兰" />
                <InfoRow label="城市" value="坦佩雷" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="公共区域全天开放；内部博物馆和商店开放时间各异，通常为周一至周五 10:00-18:00，周末 11:00-17:00。" />
              <InfoRow label="门票价格" value="进入老城区域免费。内部各博物馆、画廊等景点单独收费，票价在5-15欧元不等。" />
              <InfoRow label="地址" value="Finlayson, 33100 Tampere, Finland" />
              <InfoRow label="交通方式" value="从坦佩雷-皮尔卡拉机场（TMP）乘坐61路巴士至市中心，换乘1路或3路有轨电车至“Finlayson”站下车，全程约40-50分钟。从坦佩雷中央火车站步行至此约20分钟。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">坦佩雷老城的故事，几乎就是芬兰工业化的缩影，一切都始于1820年。那一年，苏格兰工程师詹姆斯·芬利森在坦默科斯基河急流畔建立了第一家棉纺厂，利用水力驱动机器。这可不是个小作坊，它迅速扩张，到了19世纪中叶，这里已经成为整个北欧最大的工业中心之一，被誉为“芬兰的曼彻斯特”。成千上万的工人和他们的家庭聚集于此，形成了独特的工厂社区。红砖厂房越建越多，高大的烟囱成为天际线。你可以想象一下当时的情景：机器昼夜轰鸣，蒸汽弥漫，工人们穿梭在厂房与那些同样由工厂建造的工人住宅、学校、医院甚至教堂之间，形成了一个几乎自给自足的小社会。到了20世纪后期，纺织业衰落，工厂逐渐沉寂。但坦佩雷人没有让这里变成废墟。从1990年代起，一场精彩的改造开始了。艺术家、企业家和学生们涌入，把车间变成美术馆，仓库变成图书馆，办公楼变成餐厅。如今，它不再是机器的殿堂，而是创意和生活的熔炉。走在其中，你能感受到那种从“生产力”到“生活力”的奇妙转变，历史没有被拆除，而是被重新赋予了呼吸。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从标志性的“Finlayson”有轨电车站开始，以坦默科斯基河两岸的红砖建筑群为核心区域进行探索。游览时间约为2-3小时。路线终点可以设在拥有巨大玻璃幕墙的公共图书馆“Metso”附近，或者河畔的咖啡馆。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>区域不大，非常适合随意漫步探索，无需严格遵循路线。建议穿一双舒适的步行鞋，因为鹅卵石路面可能不太平整。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从芬利森广场开始，仰望标志性的红砖钟楼和厂房建筑群。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  参观姆明博物馆，沉浸在芬兰国宝级童话角色的奇妙世界。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  穿过老厂房区，漫步到坦默科斯基河畔，观看奔腾的河水与工业遗迹。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  探索河对岸的“Tampella”旧厂区，这里遍布特色餐厅和设计商店。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  走进工人博物馆，了解当年纺织工人的真实生活。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  在旧锅炉房改造的咖啡馆里喝一杯，感受新旧空间的交融。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  坦默科斯基河畔步道</h4>
                  <p className="text-sm text-gray-700">黄昏时分（夏季晚8-10点，冬季下午2-3点），从河岸拍摄对岸连绵的红砖厂房在水中的倒影，画面宁静而富有历史感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  芬利森厂区中央庭院</h4>
                  <p className="text-sm text-gray-700">正午阳光直射时，捕捉红砖墙强烈的几何线条和光影对比，突出工业建筑的秩序美。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  “纺织工”雕塑旁</h4>
                  <p className="text-sm text-gray-700">任何时间，以巨大的旧厂房为背景，与这座代表工人的雕塑合影，讲述人与工业的故事。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  老厂房楼梯间</h4>
                  <p className="text-sm text-gray-700">利用厂房内部富有纵深感的钢铁楼梯和裸露的砖墙，拍摄具有结构感和怀旧氛围的人像照片。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 冬季雪后，整个老城银装素裹，红砖白雪对比鲜明，是绝佳的拍摄时机。室内博物馆通常允许拍照，但禁用闪光灯。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  经济之选</h4>
                  <p className="text-sm text-blue-800">Dream Hostel Tampere，位于老城边缘，由旧建筑改造，氛围独特，价格亲民。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  中档舒适</h4>
                  <p className="text-sm text-green-800">Scandic Tampere City，坐落在老城河畔，现代舒适，部分房间可享老城景观。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  特色体验</h4>
                  <p className="text-sm text-yellow-800">Lapland Hotels Tampere，设计感强，融合了北欧自然与工业元素，位置便利。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  高端奢华</h4>
                  <p className="text-sm text-purple-800">Radisson Blu Grand Hotel Tampere，位于市中心，步行可达老城，提供经典豪华服务。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">夏季和圣诞季是旅游旺季，建议提前预订。选择老城内的酒店能获得更深度的沉浸式体验。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">坦佩雷老城最打动我的，是它那种“硬核的温柔”。坚硬的砖石、巨大的空间，曾经承载着最沉重的劳动，如今却温柔地包裹着艺术、美食和闲适的日常。它没有刻意扮老，而是诚实地展示着自己的每一道皱纹和伤疤，并骄傲地告诉你，生命如何在此延续和绽放。如果你厌倦了千篇一律的复古小镇，来这里感受一下工业灵魂的现代重生吧，这股来自北欧的、冷静又充满生命力的风，会让人印象深刻。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
