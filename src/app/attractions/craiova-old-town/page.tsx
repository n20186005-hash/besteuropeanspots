import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '克拉约瓦老城 Craiova Old Town｜漫步罗马尼亚“小巴黎”的优雅历史街区 - 最佳欧洲景点',
  description: '走进克拉约瓦老城，就像不小心闯进了一本泛黄的欧洲小说。街道不宽，两旁是那种带着岁月包浆的奥匈帝国风格建筑，阳台上总有几盆开得正好的天竺葵。这里被当地人戏称为“小巴黎”，那种悠闲又带点艺术范儿的氛围确实有那么点意思。我最喜欢在铺着鹅卵石的Matei Basarab街上瞎逛，看看那些精致的铁艺招牌和咖啡...',
}

export default function CraiovaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '克拉约瓦老城', href: '/attractions/craiova-old-town' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">克拉约瓦老城</h1>
          <p className="text-xl text-gray-600 mb-4">Craiova Old Town</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">罗马尼亚</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">克拉约瓦</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">走进克拉约瓦老城，就像不小心闯进了一本泛黄的欧洲小说。街道不宽，两旁是那种带着岁月包浆的奥匈帝国风格建筑，阳台上总有几盆开得正好的天竺葵。这里被当地人戏称为“小巴黎”，那种悠闲又带点艺术范儿的氛围确实有那么点意思。我最喜欢在铺着鹅卵石的Matei Basarab街上瞎逛，看看那些精致的铁艺招牌和咖啡馆外坐着晒太阳的老爷爷。空气里有刚烤好的面包香，偶尔还能听到不知从哪个院子里飘出来的小提琴声。它不是那种游客扎堆的地方，反而更有生活气，你能真切地感觉到历史不是被封在玻璃罩里，而是还活在这些街巷的日常呼吸中。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">老城区的街道和广场全年全天免费开放。但需要注意的是，许多历史建筑内部作为博物馆或机构，开放时间可能缩短，周一普遍闭馆。冬季（11月至次年3月）部分小型博物馆可能提前关门。持有国际学生证（ISIC）可享受大部分博物馆的半价优惠。老城地面多为鹅卵石，建议穿着舒适的平底鞋游览。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">克拉约瓦的故事得从15世纪讲起，当时它已经是瓦拉几亚公国西南部的一个重要集镇。不过，我们今天看到的老城风貌，其实主要定格在19世纪末到20世纪初那段“美好年代”。那时候罗马尼亚刚独立不久，整个国家弥漫着一股向往西欧的风潮，克拉约瓦的贵族和新兴资产阶级们也不例外。他们请来建筑师，大刀阔斧地改造城市中心，于是，一栋栋受法国、奥匈帝国影响的新古典主义、新艺术风格建筑拔地而起，银行、剧院、豪华酒店和私人宅邸相继落成，让这里赢得了“小巴黎”的绰号。二战的炮火幸运地绕过了这里，但共产主义时期的一些改造计划曾威胁到老城的肌理。好在近二三十年，人们重新意识到了这些老建筑的价值，开始了缓慢而精细的修复工作。漫步其中，你能从建筑立面上雕刻的葡萄藤、月桂叶装饰，读到那个时代人们对美好生活的全部想象，那是一种混合了民族自豪与欧洲情怀的独特气质。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">推荐从中心的尼古拉·蒂图列斯库公园开始，以Matei Basarab街为主轴，穿梭于连接它的几条小巷，最后抵达米哈伊勇敢公爵广场。这条路线大约需要2-3小时的漫步时间，能覆盖老城最精华的建筑和氛围。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从尼古拉·蒂图列斯库公园的喷泉旁出发，感受老城绿意。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  步入Matei Basarab主街，欣赏两侧连续的奥匈帝国风格立面。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  拐进狭窄的Calea Unirii巷，寻找隐藏的复古咖啡馆和书店。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  参观克拉约瓦艺术博物馆（前身是银行宫殿）。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  漫步至米哈伊勇敢公爵广场，仰望圣杜米特鲁大教堂。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  在广场周边的传统餐厅结束行程。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">老城区域不大，非常适合随意探索，无需严格遵循导航。记得抬头看，最美的装饰往往在建筑的檐口和窗楣上。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **Matei Basarab街中段**：最佳拍摄时间为午后，阳光斜射在建筑立面上。站在街道中央，用长焦镜头压缩空间，能拍出建筑连绵的纵深感与光影质感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **圣杜米特鲁大教堂前台阶**：清晨或黄昏时分，以宏伟的教堂为背景，拍摄人物走在广场鹅卵石上的场景，画面宁静而富有历史感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **Calea Unirii小巷口**：下午时段，利用巷道的狭窄构图，聚焦于一盏老式街灯或一个精美的门廊，营造故事感和局部美感。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">尊重当地居民隐私，避免对着私人住宅的窗户直接拍摄。雨天过后的鹅卵石街道反光效果很好，是出片的好时机。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **预算之选**：老城边缘的精品旅馆或民宿，价格亲民，步行即可深入街区。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **品质之选**：位于Matei Basarab街上的历史建筑改造酒店，体验原汁原味的古典氛围。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **便利之选**：米哈伊勇敢公爵广场附近的现代酒店，兼顾观光与交通便利。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">选择住在老城内，才能真正体验入夜后街区静谧、只有街灯摇曳的独特韵味。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">克拉约瓦老城没有惊天动地的地标，它的魅力是渗透式的。你需要慢下来，用脚步去丈量每一块光滑的鹅卵石，用眼睛去捕捉建筑立面上细微的雕刻。在这里，旅行不是打卡，而是像当地人一样，在历史与日常交织的脉络里，度过一个悠长而柔软的下午。如果你厌倦了人潮，想寻找一份不事张扬的欧洲旧时光，这里会给你满满的慰藉。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="公共区域全天开放；内部各博物馆、教堂等景点开放时间各异，通常为周二至周日 10:00-18:00。" />
                <InfoRow icon="🎫" label="门票" value="老城街道免费游览。内部景点单独收费，如克拉约瓦艺术博物馆门票约20列伊（约4欧元），其他小型博物馆门票通常在5-15列伊之间。" />
                <InfoRow icon="📍" label="地址" value="Strada Matei Basarab, Craiova 200398, Romania" />
                <InfoRow icon="🚌" label="交通" value="从克拉约瓦国际机场（CRA）出发，乘坐出租车或预约车约20分钟即可抵达老城区。从克拉约瓦火车站（Gara Craiova）步行至老城中心约需15-20分钟。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
