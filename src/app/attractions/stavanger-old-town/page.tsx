import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '斯塔万格老城 Stavanger Old Town｜漫步白色木屋的童话世界 - 最佳欧洲景点',
  description: '想象一下，你走进了一个被时光遗忘的角落，眼前是一排排被漆成纯白色的木头房子，屋顶是温暖的砖红色或青灰色，窄窄的鹅卵石小路在脚下蜿蜒。这就是斯塔万格老城，当地人叫它“Gamle Stavanger”。这里完全没有大城市的喧嚣，安静得能听见海鸥的叫声和海风穿过小巷的轻响。我特别喜欢在清晨或傍晚来这里散步...',
}

export default function StavangerOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '斯塔万格老城', href: '/attractions/stavanger-old-town' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">斯塔万格老城</h1>
          <p className="text-xl text-gray-600 mb-4">Stavanger Old Town</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">挪威</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">斯塔万格</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">想象一下，你走进了一个被时光遗忘的角落，眼前是一排排被漆成纯白色的木头房子，屋顶是温暖的砖红色或青灰色，窄窄的鹅卵石小路在脚下蜿蜒。这就是斯塔万格老城，当地人叫它“Gamle Stavanger”。这里完全没有大城市的喧嚣，安静得能听见海鸥的叫声和海风穿过小巷的轻响。我特别喜欢在清晨或傍晚来这里散步，阳光斜斜地洒在白色的墙壁上，给每扇窗台上的鲜花都镀上了一层金边，那种宁静又温馨的感觉，简直像走进了安徒生的童话书里。这里住着的都是普通居民，晾晒的衣服、门前的自行车，让整个老城充满了真实的生活气息。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">老城作为居民区，全年全天可自由漫步。但请注意保持安静，尊重当地居民隐私。内部的小型博物馆（如罐头博物馆、海事博物馆）开放时间可能随季节调整，冬季（10月-次年4月）开放时间可能缩短或闭馆，建议行前查询官网。部分历史建筑在夏季会开放导览。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">斯塔万格老城的故事要从18世纪末说起。当时，斯塔万格因为鲱鱼贸易开始繁荣起来，许多渔民、水手和工匠需要住所，于是在斯塔万格港口的西侧山坡上，这些经典的木质结构房屋被建造起来。到了19世纪，这里已经形成了密集的居住区。不过，随着工业化和城市发展，20世纪中期，许多类似的木质街区都被拆除了，为现代建筑让路。幸运的是，在20世纪50年代，当地的有识之士发起了保护运动，最终让这片拥有170多栋白色木屋的区域得以完整保留，成为了北欧保存最完好的木质建筑群之一。走在其中，你能触摸到的不仅是木头纹理，更是一段“庶民”的历史——这里没有王公贵族，只有普通劳动者的生活印记。想想这些房子见证了从帆船时代到石油时代的变迁，而如今窗台上盛开的鲜花依旧，这种传承感特别动人。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">推荐从老城东侧的入口（靠近Øvre Holmegate彩色街）开始，由东向西缓坡上行游览，最后到达高处的观景点俯瞰港口。全程漫步拍照约需1.5-2小时，路线轻松，无需折返。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从Øvre Holmegate彩色街道起步，感受新旧街区的碰撞。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  进入老城主区，沿着主要的鹅卵石小径“Ovre Strandgate”漫步。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  随意拐进两侧更窄的小巷，探索安静的庭院和花园。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  参观路过的斯塔万格海事博物馆（若开放）。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  继续上行至老城西侧较高处，回望港口风景。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  从另一条小路下山，回到起点附近。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">路面为鹅卵石，建议穿舒适的平底鞋。小巷错综复杂，但不用担心迷路，尽情享受探索的乐趣。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **Ovre Strandgate拐角处**：清晨或黄昏，阳光柔和时，拍摄白色木屋与鹅卵石路延伸的纵深感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **某条狭窄小巷的尽头**：午后，利用巷子作为天然画框，聚焦尽头的一栋小屋和蓝天。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **老城西侧高处的住宅台阶前**：傍晚，以成排的白色屋顶和远处的斯塔万格港口为背景，拍摄全景。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **居民家的门廊前**：白天，特写色彩鲜艳的门、门环以及窗台上的装饰细节。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">请务必注意是私人住宅区，拍照时避免对准窗户内部，尊重居民隐私。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **高端之选**：克拉丽奥收集酒店，位于港口边，步行至老城5分钟，坐享海景。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **中端之选**：斯塔万格康福特酒店，位置中心，性价比高，步行10分钟可达老城。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **经济之选**：斯塔万格HI青年旅舍，位于老城边缘，适合背包客，氛围轻松。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **特色之选**：租住老城内的度假公寓（如通过Airbnb），沉浸式体验历史街区生活。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">夏季是旅游旺季，需提前预订。住在老城附近，可以体验清晨无游客时的静谧。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">斯塔万格老城的美，不在于宏伟壮观，而在于那份细腻入微的生活诗意。它不像一个冰冷的博物馆，而像一个依然在呼吸、在跳动的古老社区。当你离开时，脑海里留下的不仅是白色木屋的明信片画面，更是那份漫步其中时内心的平静与温暖。如果你厌倦了打卡式的旅行，这里会是让你慢下来，用心感受挪威日常魅力的完美角落。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="公共区域全天开放；各博物馆和商店开放时间各异，通常为10:00-16:00。" />
                <InfoRow icon="🎫" label="门票" value="进入老城区域免费；内部个别博物馆或历史建筑需单独购票。" />
                <InfoRow icon="📍" label="地址" value="Øvre Holmegate, 4006 Stavanger, Norway" />
                <InfoRow icon="🚌" label="交通" value="从斯塔万格索拉机场（SVG）乘坐机场巴士（Flybussen）约30分钟可直达市中心，步行5-10分钟即可到达老城。从斯塔万格中央火车站步行约15分钟可达。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
