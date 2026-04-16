import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '魏玛老城 Weimar Old Town｜德国古典主义心脏，歌德席勒的灵感之城 - 最佳欧洲景点',
  description: '走进魏玛老城，就像轻轻翻开了一本厚重的欧洲文化史书。这里没有大都市的喧嚣，石板路两旁是色彩柔和、保存完好的巴洛克和古典主义建筑，空气里仿佛都飘着书香和乐符。最让我着迷的是那种“转角遇见大师”的感觉——歌德故居那栋朴素的黄色小楼、席勒故居的宁静庭院，还有那座他们曾并肩讨论哲学与诗歌的“大象酒店”咖啡馆...',
}

export default function WeimarOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '魏玛老城', href: '/attractions/weimar-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">魏玛老城・Weimar Old Town・德国・魏玛</h1>
          <p className="text-lg text-gray-600 mb-6">
            走进魏玛老城，就像轻轻翻开了一本厚重的欧洲文化史书。这里没有大都市的喧嚣，石板路两旁是色彩柔和、保存完好的巴洛克和古典主义建筑，空气里仿佛都飘着书香和乐符。最让我着迷的是那种“转角遇见大师”的感觉——歌德故居那栋朴素的黄色小楼、席勒故居的宁静庭院，还有那座他们曾并肩讨论哲学与诗歌的“大象酒店”咖啡馆。在老市政厅广场上喝杯咖啡，看着游客中心那栋有着精美山墙的建筑，你会瞬间明白，为什么这个看似安静的小城，曾是整个欧洲思想与艺术的灯塔。它不是一座冰冷的博物馆，而是一个依然活着、呼吸着的文化家园。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">走进魏玛老城，就像轻轻翻开了一本厚重的欧洲文化史书。这里没有大都市的喧嚣，石板路两旁是色彩柔和、保存完好的巴洛克和古典主义建筑，空气里仿佛都飘着书香和乐符。最让我着迷的是那种“转角遇见大师”的感觉——歌德故居那栋朴素的黄色小楼、席勒故居的宁静庭院，还有那座他们曾并肩讨论哲学与诗歌的“大象酒店”咖啡馆。在老市政厅广场上喝杯咖啡，看着游客中心那栋有着精美山墙的建筑，你会瞬间明白，为什么这个看似安静的小城，曾是整个欧洲思想与艺术的灯塔。它不是一座冰冷的博物馆，而是一个依然活着、呼吸着的文化家园。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="魏玛老城" />
                <InfoRow label="英文名称" value="Weimar Old Town" />
                <InfoRow label="正式名称" value="Weimar Old Town" />
                <InfoRow label="国家" value="德国" />
                <InfoRow label="城市" value="魏玛" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="公共区域全天开放；内部各博物馆、历史建筑开放时间各异，通常为周二至周日 10:00-18:00。" />
              <InfoRow label="门票价格" value="老城公共区域免费。各博物馆和历史建筑单独售票，成人票约5-12欧元不等，有联票选择。" />
              <InfoRow label="地址" value="Markt 1, 99423 Weimar, Germany" />
              <InfoRow label="交通方式" value="从最近的莱比锡/哈勒机场出发，乘坐火车约1小时15分钟到达魏玛火车站，再步行15-20分钟即可进入老城核心区。从柏林乘火车约2.5小时。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">魏玛的故事，可以说是一部浓缩的德国文化编年史。它的黄金时代始于18世纪末，当时萨克森-魏玛-艾森纳赫的公爵卡尔·奥古斯特独具慧眼，将大文豪歌德邀请到他的宫廷。歌德可不是来当个普通的公务员，他在这里一住就是几十年，把魏玛变成了一个吸引全欧知识分子的磁石。他的好友席勒也来了，两人在这里创作了奠定德国文学基石的作品。你可以想象一下，200多年前，就是在这几条安静的街道上，两位巨人一边散步一边激烈地讨论着《浮士德》的剧情。时间跳到20世纪初，魏玛再次站上潮头，成为了“包豪斯”现代设计运动的摇篮，格罗皮乌斯在这里建立了那所传奇的学校。当然，历史也有阴影，附近的布痕瓦尔德集中营提醒着人们20世纪最黑暗的一页。但今天的老城，主要沉淀下的是那份人文主义的、温暖的遗产，每一块砖石都仿佛在低声讲述着关于创造、思想和美的故事。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从老城中心的市集广场开始，以环形路线游览主要文化地标，全程步行即可，大约需要3-4小时。路线终点可以回到广场，在咖啡馆休息。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>老城面积不大，完全不需要地图也能轻松探索，穿一双舒适的步行鞋是关键。许多小巷子也别有洞天，值得随意走走。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从市集广场出发，欣赏老市政厅和游客中心的精美建筑。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  步行至歌德故居与国家博物馆，了解文豪的生活与时代。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  前往不远处的席勒故居，感受另一位文学巨匠的创作环境。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  漫步到绿色宫殿和公爵城堡，领略魏玛宫廷的建筑辉煌。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  探访包豪斯博物馆，触摸现代设计的起源。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  最后在剧院广场，瞻仰歌德与席勒的著名并肩雕像。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  市集广场东侧</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为清晨或午后，阳光洒在色彩缤纷的建筑立面上。从广场东侧向西拍摄，可以将老市政厅、游客中心及圣彼得与保罗教堂一同纳入镜头，画面富有层次感和历史氛围。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  歌德与席勒雕像前</h4>
                  <p className="text-sm text-gray-700">建议在白天光线均匀时拍摄。以德国国家剧院为背景，仰拍两位伟人的青铜雕像，能捕捉到古典主义的庄重与深厚文化象征。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  沿伊尔姆河畔公园</h4>
                  <p className="text-sm text-gray-700">傍晚时分光线柔和。从公园朝向老城方向拍摄，可以将宁静的河流、绿树与远处老城的屋顶轮廓线结合，拍出诗意盎然的风景明信片效果。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 拍摄建筑内部（如博物馆）前请务必确认是否允许拍照，通常禁止使用闪光灯。雕像广场游客较多，想拍干净的画面需要一点耐心。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  高端之选</h4>
                  <p className="text-sm text-blue-800">大象酒店</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  中档推荐</h4>
                  <p className="text-sm text-green-800">Dorint Hotel am Goethepark</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  经济实惠</h4>
                  <p className="text-sm text-yellow-800">Labyrinth Hostel Weimar</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  特色体验</h4>
                  <p className="text-sm text-purple-800">老城内公寓</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">旺季（夏季和圣诞市场期间）建议提前预订。住在老城内虽然价格稍高，但能享受清晨和夜晚没有游客的静谧时刻，体验值大幅提升。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">魏玛老城是一座需要用心灵去漫步的城市。它不张扬，却底蕴深不可测。在这里，文化不是陈列在玻璃柜里的标本，而是流淌在街道、庭院和咖啡馆里的生活气息。离开时，你带走的可能不是壮丽的风景照，而是一种被智慧与美熏陶过的平静，和一份对欧洲精神源头的深切理解。这绝对是一个值得你慢下来、住上两三天的精神栖息地。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
