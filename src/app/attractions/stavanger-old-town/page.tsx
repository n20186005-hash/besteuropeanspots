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
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '斯塔万格老城', href: '/attractions/stavanger-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">斯塔万格老城・Stavanger Old Town・挪威・斯塔万格</h1>
          <p className="text-lg text-gray-600 mb-6">
            想象一下，你走进了一个被时光遗忘的角落，眼前是一排排被漆成纯白色的木头房子，屋顶是温暖的砖红色或青灰色，窄窄的鹅卵石小路在脚下蜿蜒。这就是斯塔万格老城，当地人叫它“Gamle Stavanger”。这里完全没有大城市的喧嚣，安静得能听见海鸥的叫声和海风穿过小巷的轻响。我特别喜欢在清晨或傍晚来这里散步，阳光斜斜地洒在白色的墙壁上，给每扇窗台上的鲜花都镀上了一层金边，那种宁静又温馨的感觉，简直像走进了安徒生的童话书里。这里住着的都是普通居民，晾晒的衣服、门前的自行车，让整个老城充满了真实的生活气息。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">想象一下，你走进了一个被时光遗忘的角落，眼前是一排排被漆成纯白色的木头房子，屋顶是温暖的砖红色或青灰色，窄窄的鹅卵石小路在脚下蜿蜒。这就是斯塔万格老城，当地人叫它“Gamle Stavanger”。这里完全没有大城市的喧嚣，安静得能听见海鸥的叫声和海风穿过小巷的轻响。我特别喜欢在清晨或傍晚来这里散步，阳光斜斜地洒在白色的墙壁上，给每扇窗台上的鲜花都镀上了一层金边，那种宁静又温馨的感觉，简直像走进了安徒生的童话书里。这里住着的都是普通居民，晾晒的衣服、门前的自行车，让整个老城充满了真实的生活气息。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="斯塔万格老城" />
                <InfoRow label="英文名称" value="Stavanger Old Town" />
                <InfoRow label="正式名称" value="Stavanger Old Town" />
                <InfoRow label="国家" value="挪威" />
                <InfoRow label="城市" value="斯塔万格" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="公共区域全天开放；各博物馆和商店开放时间各异，通常为10:00-16:00。" />
              <InfoRow label="门票价格" value="进入老城区域免费；内部个别博物馆或历史建筑需单独购票。" />
              <InfoRow label="地址" value="Øvre Holmegate, 4006 Stavanger, Norway" />
              <InfoRow label="交通方式" value="从斯塔万格索拉机场（SVG）乘坐机场巴士（Flybussen）约30分钟可直达市中心，步行5-10分钟即可到达老城。从斯塔万格中央火车站步行约15分钟可达。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">斯塔万格老城的故事要从18世纪末说起。当时，斯塔万格因为鲱鱼贸易开始繁荣起来，许多渔民、水手和工匠需要住所，于是在斯塔万格港口的西侧山坡上，这些经典的木质结构房屋被建造起来。到了19世纪，这里已经形成了密集的居住区。不过，随着工业化和城市发展，20世纪中期，许多类似的木质街区都被拆除了，为现代建筑让路。幸运的是，在20世纪50年代，当地的有识之士发起了保护运动，最终让这片拥有170多栋白色木屋的区域得以完整保留，成为了北欧保存最完好的木质建筑群之一。走在其中，你能触摸到的不仅是木头纹理，更是一段“庶民”的历史——这里没有王公贵族，只有普通劳动者的生活印记。想想这些房子见证了从帆船时代到石油时代的变迁，而如今窗台上盛开的鲜花依旧，这种传承感特别动人。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从老城东侧的入口（靠近Øvre Holmegate彩色街）开始，由东向西缓坡上行游览，最后到达高处的观景点俯瞰港口。全程漫步拍照约需1.5-2小时，路线轻松，无需折返。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>路面为鹅卵石，建议穿舒适的平底鞋。小巷错综复杂，但不用担心迷路，尽情享受探索的乐趣。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从Øvre Holmegate彩色街道起步，感受新旧街区的碰撞。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  进入老城主区，沿着主要的鹅卵石小径“Ovre Strandgate”漫步。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  随意拐进两侧更窄的小巷，探索安静的庭院和花园。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  参观路过的斯塔万格海事博物馆（若开放）。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  继续上行至老城西侧较高处，回望港口风景。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  从另一条小路下山，回到起点附近。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  Ovre Strandgate拐角处</h4>
                  <p className="text-sm text-gray-700">清晨或黄昏，阳光柔和时，拍摄白色木屋与鹅卵石路延伸的纵深感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  某条狭窄小巷的尽头</h4>
                  <p className="text-sm text-gray-700">午后，利用巷子作为天然画框，聚焦尽头的一栋小屋和蓝天。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  老城西侧高处的住宅台阶前</h4>
                  <p className="text-sm text-gray-700">傍晚，以成排的白色屋顶和远处的斯塔万格港口为背景，拍摄全景。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  居民家的门廊前</h4>
                  <p className="text-sm text-gray-700">白天，特写色彩鲜艳的门、门环以及窗台上的装饰细节。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 请务必注意是私人住宅区，拍照时避免对准窗户内部，尊重居民隐私。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  高端之选</h4>
                  <p className="text-sm text-blue-800">克拉丽奥收集酒店，位于港口边，步行至老城5分钟，坐享海景。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  中端之选</h4>
                  <p className="text-sm text-green-800">斯塔万格康福特酒店，位置中心，性价比高，步行10分钟可达老城。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  经济之选</h4>
                  <p className="text-sm text-yellow-800">斯塔万格HI青年旅舍，位于老城边缘，适合背包客，氛围轻松。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  特色之选</h4>
                  <p className="text-sm text-purple-800">租住老城内的度假公寓（如通过Airbnb），沉浸式体验历史街区生活。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">夏季是旅游旺季，需提前预订。住在老城附近，可以体验清晨无游客时的静谧。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">斯塔万格老城的美，不在于宏伟壮观，而在于那份细腻入微的生活诗意。它不像一个冰冷的博物馆，而像一个依然在呼吸、在跳动的古老社区。当你离开时，脑海里留下的不仅是白色木屋的明信片画面，更是那份漫步其中时内心的平静与温暖。如果你厌倦了打卡式的旅行，这里会是让你慢下来，用心感受挪威日常魅力的完美角落。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
