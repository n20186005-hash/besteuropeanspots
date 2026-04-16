import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布德瓦老城 Budva Old Town｜亚得里亚海小众中世纪古城 - 最佳欧洲景点',
  description: '布德瓦老城说大不大说小不小，慢悠悠逛一圈两小时差不多。2500多年历史的古城三面环海一面靠山，被威尼斯人修的城墙围得严严实实。石子路被踩得又光又滑，橙色屋顶层层叠叠堆上去，说实话，站在城墙上往下一看真的有点晕。早上人少的时候，阳光打在石板路上暖洋洋的，墙缝里冒出来的三角梅开得不管不顾，拍出来的照片完...',
}

export default function BudvaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '布德瓦老城', href: '/attractions/budva-old-town' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">布德瓦老城</h1>
          <p className="text-xl text-gray-600 mb-4">Budva Old Town</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">黑山</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">布德瓦</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">布德瓦老城说大不大说小不小，慢悠悠逛一圈两小时差不多。2500多年历史的古城三面环海一面靠山，被威尼斯人修的城墙围得严严实实。石子路被踩得又光又滑，橙色屋顶层层叠叠堆上去，说实话，站在城墙上往下一看真的有点晕。早上人少的时候，阳光打在石板路上暖洋洋的，墙缝里冒出来的三角梅开得不管不顾，拍出来的照片完全不用修。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">开放时间：老城本身是24小时开放随便进，但城里的教堂、博物馆、城堡观景台这些有自己的时间表，一般是早9点到晚7点左右，冬季有时候有的会提前关门。</p>
              <p className="text-gray-700 leading-relaxed mb-4">门票：进老城不用掏一分钱，免费。城堡观景台亲测是3.5欧元，教堂随便进不要钱。博物馆单独收费。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">说实话，我在这座古城里走着走着，感觉每块石头都在讲故事。公元前5世纪希腊水手就看上了这片海湾，后来罗马人在这儿修了城镇，再后来威尼斯人从1420年一直统治到1797年，整整快四百年。</p>
              <p className="text-gray-700 leading-relaxed mb-4">现在老城里那些橘红色的屋顶、雕花的石窗、生锈的铁门闩，基本都是威尼斯风格。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">从主门进去，正对面就是圣伊万教堂那个高高的钟楼，但你先别急着往里走，进门之后右手边有段石阶，顺着往上爬几分钟就到城墙步道。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">进主门上城墙看屋顶</li>
              <li className="text-gray-700 leading-relaxed mb-2">钻巷子看教堂</li>
              <li className="text-gray-700 leading-relaxed mb-2">去城堡看日落</li>
              <li className="text-gray-700 leading-relaxed mb-2">去莫格伦海滩踩水</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">全程不需要坐车不需要导航，真心建议，就靠腿和眼睛。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">城堡观景台：老城南端，下午5点到6点逆光拍人像，头发边缘会有层金边。</li>
              <li className="text-gray-700 leading-relaxed mb-2">老城主门右侧的城墙步道：上午9点到11点顺光最合适，刚好能拍到老城小巷的纵深感。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">海边风大，拍照注意安全。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">老城的石屋民宿楼梯窄，行李箱慎选。</li>
              <li className="text-gray-700 leading-relaxed mb-2">步行10分钟到海边的公寓性价比更高。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">郊区便宜但交通不便，建议住老城周边。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">这地方真的很适合慢慢逛，找个咖啡馆坐一下午。</p>
              <p className="text-gray-700 leading-relaxed mb-4">亚得里亚海的风吹过，什么烦恼都没了。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="全天开放" />
                <InfoRow icon="🎫" label="门票" value="免费" />
                <InfoRow icon="📍" label="地址" value="Stari Grad Budva, 85310 Budva, Montenegro" />
                <InfoRow icon="🚌" label="交通" value="从蒂瓦特机场到布德瓦约20公里，打车约25分钟。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
