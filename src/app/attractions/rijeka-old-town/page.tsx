import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '里耶卡老城 Rijeka Old Town｜克罗地亚港口城市的灵魂，漫步在时光凝固的街巷 - 最佳欧洲景点',
  description: '走进里耶卡老城，就像一头扎进了一本立体的历史画册。这里没有扎堆的游客，只有蜿蜒的鹅卵石小巷、被岁月磨得发亮的台阶，和那些色彩斑驳的巴洛克式建筑外墙。空气中混杂着海风的咸味和从街角咖啡馆飘出的咖啡香。你会不自觉地放慢脚步，抬头看那些阳台上垂下的鲜花，或者研究一下门楣上古老的家族徽章。这里的生活节奏很慢...',
}

export default function RijekaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '里耶卡老城', href: '/attractions/rijeka-old-town' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">里耶卡老城</h1>
          <p className="text-xl text-gray-600 mb-4">Rijeka Old Town</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">克罗地亚</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">里耶卡</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">走进里耶卡老城，就像一头扎进了一本立体的历史画册。这里没有扎堆的游客，只有蜿蜒的鹅卵石小巷、被岁月磨得发亮的台阶，和那些色彩斑驳的巴洛克式建筑外墙。空气中混杂着海风的咸味和从街角咖啡馆飘出的咖啡香。你会不自觉地放慢脚步，抬头看那些阳台上垂下的鲜花，或者研究一下门楣上古老的家族徽章。这里的生活节奏很慢，当地人坐在广场上晒太阳、聊天，仿佛时间在这里打了个盹儿。它不像一些热门古城那样精致到像布景，反而有种粗粝又真实的美，让你感觉触摸到了这座港口城市真正的脉搏。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">老城街道和广场全天可自由漫步。需要注意的是，部分小型博物馆或画廊可能有午休时间（例如下午1点至4点关闭），且冬季（11月至3月）开放时间可能缩短。大多数餐厅和商店在周日营业时间较短。老城区域多台阶和坡道，建议穿着舒适的平底鞋。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">里耶卡老城的故事，就是一部浓缩的亚得里亚海沿岸城市兴衰史。它的雏形可以追溯到古罗马时代，但真正形成今天看到的格局，是在中世纪。当时，它是一座有城墙保护的城镇，核心就是现在看到的Trsat城堡所在的山丘脚下。老城在历史上命运多舛，先后被法兰克人、克罗地亚贵族、威尼斯共和国、哈布斯堡王朝统治过，你能从建筑风格上看到这些“层叠”的历史痕迹。比如，狭窄曲折的街巷布局很“中世纪”，而广场周围那些华丽的立面又透着威尼斯和奥匈帝国的气息。19世纪到20世纪初，随着里耶卡成为奥匈帝国的重要港口，老城外围建起了更宏伟的现代建筑，但老城核心区基本保持了原貌。二战的轰炸给这里留下了伤疤，但战后得到了精心修复。漫步其中，我总觉得这些石头墙壁里藏着无数水手、商人、贵族和平民的故事，沉默，但充满力量。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">推荐从地标性的“钟楼”开始游览，穿过主街科索尔街，探索两侧如迷宫般的小巷，最后抵达圣维特大教堂结束。全程步行游览，慢慢逛下来大约需要2-3小时。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从标志性的钟楼和老城门进入老城核心区。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  沿着科索尔街漫步，感受主干道的氛围，浏览两侧小店。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  拐入Radiceva街等小巷，探索更安静、更有生活气息的角落。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  参观宏伟的圣维特大教堂，内部装饰华丽。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  走到克罗地亚国家剧院广场，欣赏宏伟的建筑立面。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  在Trsat城堡阶梯附近找家咖啡馆休息，俯瞰城市景色。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">老城小巷像迷宫，但不用担心迷路，尽情探索就好，主要街道都有路标指引回主路。一定要穿一双非常舒适的鞋子。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **钟楼脚下**：最佳拍摄时间为清晨或黄昏，阳光斜射在古老的石墙上。从稍低的广场向上仰拍，可以捕捉到钟楼的雄伟与历史的沧桑感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **科索尔街的某个拱门下**：白天光线充足时。利用拱门作为天然画框，拍摄纵深向里延伸的鹅卵石街道和两侧色彩丰富的建筑，画面极具故事感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **从Trsat城堡阶梯回望**：下午时段，顺光。站在阶梯中段平台，可以拍到老城层层叠叠的红色屋顶与远处港口、大海同框的经典全景。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **圣维特大教堂前广场**：上午阳光照亮教堂正面时。以教堂巴洛克式立面为背景，拍摄人物走过广场的瞬间，充满仪式感。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">尊重当地居民隐私，避免对着居民窗户或私人庭院内部拍摄。雨天湿滑的鹅卵石路面反光也很美，但要注意设备防水。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **老城内精品酒店**：位置极佳，开窗即是历史街景，但价格较高且可能无电梯。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **老城边缘的商务酒店**：性价比高，步行几分钟进入老城，设施现代。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **Trsat山坡上的民宿**：视野绝佳，可俯瞰整个老城和港口，环境安静，需爬坡。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **里耶卡港区附近的公寓**：适合家庭或长住，生活便利，乘坐公交短途可到老城。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">旺季（7-8月）建议提前预订。选择老城住宿时，确认是否提供停车位，因为老城内停车非常困难。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">里耶卡老城不是那种会让你一眼惊艳的“明星”，它更像一位温和而阅历丰富的长者，需要你静下心来，用脚步去丈量，用心去感受。它的魅力藏在每一次转角遇见的小广场里，藏在阳台上一盆盛开的鲜花里，藏在当地人不经意对你露出的微笑里。如果你厌倦了人潮汹涌的景点，想找一个有烟火气、能安静发呆的历史街区，这里会是你的理想选择。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="全天开放（公共区域），内部商店、咖啡馆等营业时间各异，通常为上午9点至晚上10点。" />
                <InfoRow icon="🎫" label="门票" value="免费进入老城区域。参观个别历史建筑或博物馆需单独购票。" />
                <InfoRow icon="📍" label="地址" value="Stari grad, 51000 Rijeka, Croatia" />
                <InfoRow icon="🚌" label="交通" value="从里耶卡机场出发，乘坐机场巴士或出租车约30分钟可达老城。从里耶卡中央火车站步行约15-20分钟即可到达老城入口。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
