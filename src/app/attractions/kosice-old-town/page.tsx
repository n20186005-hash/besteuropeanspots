import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科希策老城 Košice Old Town｜斯洛伐克东部的心脏，漫步在圣伊丽莎大教堂的阴影下 - 最佳欧洲景点',
  description: '嘿，如果你问我科希策最迷人的地方在哪，我会毫不犹豫地拉你去Hlavná大街走走。这里不像布拉格那样游人如织，却有种东欧特有的、慢悠悠的精致感。街道宽敞得不像话，两旁是糖果色的巴洛克和古典主义建筑，地面铺着整齐的石砖，走在上面脚步声都变得清脆。最震撼的当然是街尽头那座哥特式的圣伊丽莎大教堂，尖塔直插云...',
}

export default function KosiceOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '科希策老城', href: '/attractions/kosice-old-town' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">科希策老城</h1>
          <p className="text-xl text-gray-600 mb-4">Košice Old Town</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">斯洛伐克</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">科希策</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">嘿，如果你问我科希策最迷人的地方在哪，我会毫不犹豫地拉你去Hlavná大街走走。这里不像布拉格那样游人如织，却有种东欧特有的、慢悠悠的精致感。街道宽敞得不像话，两旁是糖果色的巴洛克和古典主义建筑，地面铺着整齐的石砖，走在上面脚步声都变得清脆。最震撼的当然是街尽头那座哥特式的圣伊丽莎大教堂，尖塔直插云霄，在阳光下石头泛着蜂蜜色的光。老城像个露天博物馆，但更鲜活——咖啡馆把桌椅摆到广场上，当地人喝着啤酒聊天，街头艺人的手风琴声飘过来，空气里混合着咖啡香和刚出炉的烟囱卷（Trdelník）的甜味。在这里，时间好像被调慢了半拍。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">老城区的街道和广场全年全天候开放。但请注意，主要景点如圣伊丽莎大教堂（内部及塔楼）、东斯洛伐克博物馆、米克卢什监狱等通常在周一闭馆，节假日开放时间可能缩短。学生、儿童和老年人享有门票折扣，建议参观前在景点官网确认最新信息。冬季（12月-2月）老城会举办圣诞市场，氛围浓厚但天气寒冷，需做好保暖。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">科希策老城的故事，可以说是斯洛伐克东部的一部编年史。它的“高光时刻”始于13世纪，当时作为重要的贸易驿站发展起来。到了14世纪，匈牙利国王授予它许多特权，它一跃成为王国最重要的城市之一。你眼前这座雄伟的圣伊丽莎大教堂，就是从那时开始修建的，断断续续建了超过一个世纪，它不仅是地标，更是城市财富和信仰的象征。老城在历史上经历过繁荣，也遭遇过火灾、瘟疫和战争的摧残，特别是奥斯曼帝国的威胁和后来的世界大战。但有趣的是，这些动荡反而让不同时期的建筑风格在这里层层叠加，巴洛克、文艺复兴、哥特式并肩而立。走在街上，你能看到14世纪的圣迈克尔礼拜堂、18世纪的瘟疫纪念柱、20世纪初的新艺术风格建筑……它们安静地诉说着过去。二战后，科希策经历了社会主义时期，老城一度有些沉寂。但自斯洛伐克独立后，经过精心的修复，它又重新焕发光彩，并在2013年被评为“欧洲文化之都”。触摸这些墙壁，你能感受到的不仅是石头的历史，更是一座城市坚韧而优雅的重生。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">推荐从北端的“歌唱喷泉”开始，沿着主干道Hlavná大街向南漫步至圣伊丽莎大教堂，然后探索两侧的小巷和广场。全程步行，节奏悠闲，核心区域游览约需2-3小时。若进入主要建筑内部参观，需额外预留1-2小时。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从“歌唱喷泉”出发，欣赏这座现代音乐喷泉。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  沿Hlavná大街向南走，观赏两侧色彩缤纷的历史建筑立面。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  参观街心的圣米迦勒礼拜堂和瘟疫纪念柱。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  抵达地标圣伊丽莎大教堂，仰望其哥特式立面。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  探索大教堂旁边的国家剧院和旁边的市政公园。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  拐入主街旁的小巷（如“刽子手之屋”所在的巷子），感受更local的氛围。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">老城区域不大，完全不需要地图，随意走走就是最好的探索方式。建议穿一双舒适的平底鞋，石板路虽然漂亮但走久了可能会累。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **Hlavná大街中段**：最佳拍摄时间为清晨或黄昏，阳光斜射，建筑光影层次丰富。站在街道中央，用长焦镜头压缩空间，能将色彩斑斓的建筑立面与远处的教堂尖塔一同纳入画面。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **圣伊丽莎大教堂前广场**：下午阳光能较好照亮教堂正面。仰拍角度可以突出教堂双塔的雄伟和精致的石雕细节，人物可站在广场前作为比例参照。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **市政塔楼顶部**：需购票登塔。在塔顶环绕一周，可拍摄老城屋顶全景和远处现代城市的天际线，最佳时间是晴朗的下午，光线通透。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **“刽子手之屋”小巷**：午后时分，狭窄的巷子和古朴的建筑外墙能拍出富有故事感和年代感的照片，适合人文纪实风格。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">拍摄教堂内部通常被允许，但请勿使用闪光灯，并保持安静尊重礼拜者。无人机飞行在城市中心区可能有严格限制，起飞前务必查询当地法规。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **预算之选**：位于老城边缘的精品旅馆或公寓，价格实惠，步行几分钟即可进入核心区。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **中档舒适**：选择Hlavná大街或主广场旁的特色酒店，部分由历史建筑改建，出门即是景点。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **高端体验**：下榻经过修复的宫殿式豪华酒店，享受古典优雅的环境和顶级服务。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **本地体验**：租住老城小巷中的传统风格民宿，深入体验当地日常生活。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">老城内的住宿地点非常集中，步行即可抵达所有主要景点。夏季和圣诞市场期间是旺季，建议提前预订。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">科希策老城有一种不张扬的、扎实的美。它没有拼命向你证明什么，只是安静地在那里，把几个世纪的故事都铺展在一条笔直的大街上。在这里，历史不是橱窗里的展品，而是你脚下踩着的石板，身边经过的咖啡馆，和当地人从容不迫的生活节奏。如果你想找一个尚未被过度旅游化、能真正放松脚步感受中欧风情的古城，这里会给你满满的惊喜和温暖的回味。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="公共区域全天开放。各历史建筑及博物馆开放时间各异，通常为周二至周日 10:00-18:00。" />
                <InfoRow icon="🎫" label="门票" value="进入老城区域免费。参观内部景点（如圣伊丽莎大教堂塔楼、东斯洛伐克博物馆等）需单独购票，票价约2-8欧元不等。" />
                <InfoRow icon="📍" label="地址" value="Hlavná ulica, 040 01 Košice, Slovakia" />
                <InfoRow icon="🚌" label="交通" value="从科希策国际机场（Košice International Airport, KSC）出发，乘坐23路公交车至“Hlavná pošta”站，换乘前往市中心的电车或步行约20分钟，总耗时约40-50分钟。从科希策中央火车站步行至老城中心仅需10-15分钟。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
