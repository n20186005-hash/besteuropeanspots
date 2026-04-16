import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '乌韦达古城 Úbeda｜文艺复兴的瑰宝，安达卢西亚的黄金石城 - 最佳欧洲景点',
  description: '走进乌韦达，就像一头撞进了一座用蜂蜜色石头雕琢的露天博物馆。第一眼看到瓦斯克斯·德·莫利纳广场，那种震撼是直击心灵的——四周环绕着宏伟的文艺复兴式宫殿和教堂，在安达卢西亚炽热的阳光下，整个广场的石材泛着温暖的金色光泽，庄严又宁静。这里没有大城市的喧嚣，只有石板路上清脆的脚步声和广场上偶尔飞过的鸽群。...',
}

export default function UbedaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '乌韦达古城', href: '/attractions/ubeda' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">乌韦达古城</h1>
          <p className="text-xl text-gray-600 mb-4">Úbeda</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">西班牙</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">乌韦达</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">走进乌韦达，就像一头撞进了一座用蜂蜜色石头雕琢的露天博物馆。第一眼看到瓦斯克斯·德·莫利纳广场，那种震撼是直击心灵的——四周环绕着宏伟的文艺复兴式宫殿和教堂，在安达卢西亚炽热的阳光下，整个广场的石材泛着温暖的金色光泽，庄严又宁静。这里没有大城市的喧嚣，只有石板路上清脆的脚步声和广场上偶尔飞过的鸽群。你会忍不住用手去触摸那些历经几个世纪、被阳光晒得温热的石墙，感受工匠在每一道纹饰上倾注的心血。空气中仿佛还飘着橄榄油的清香（这里是橄榄油重镇），时间在这里慢了下来，让你可以静静品味西班牙“黄金时代”遗留下来的那份精致与骄傲。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">部分重要建筑的开放时间在冬季（约11月至次年3月）会缩短，下午开放时间可能提前结束。许多景点对欧盟学生、65岁以上老人及儿童有折扣优惠，建议携带相关证件。每年九月有盛大的文艺复兴节，全城会变成大型历史剧场，但届时游客众多。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">乌韦达的故事，是一部关于权力、艺术与橄榄油的史诗。它的崛起要追溯到收复失地运动后，基督教王国重新掌控这片土地。但真正让乌韦达脱胎换骨的，是16世纪。当时，本地出生的贵族弗朗西斯科·德·洛斯·科沃斯成为了查理五世皇帝的首席秘书，权倾朝野。他就像一位雄心勃勃的总策划师，将巨大的财富和皇家恩宠带回家乡，立志要把乌韦达建成一个体现帝国荣耀与文艺复兴理想的“理想城市”。他请来了当时西班牙最顶尖的建筑师，比如安德烈斯·德·范德尔维拉。于是，在短短几十年里，一座座气势恢宏的宫殿、教堂和慈善机构拔地而起，全部采用本地出产的金色砂岩，风格统一而和谐，形成了今天我们看到的惊人建筑群。漫步其中，你能清晰感受到那个大航海时代西班牙的鼎盛与自信。可惜后来帝国衰落，乌韦达的发展也停滞了，但这反而奇迹般地保存了这座文艺复兴“化石”的完整性，直到2003年与邻近的巴埃萨一起被列入世界遗产名录。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">游览可从核心的瓦斯克斯·德·莫利纳广场开始，依次参观周边精华建筑，然后漫步至圣玛丽亚广场和古城蜿蜒的小巷，全程步行约需3-4小时，轻松惬意。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从地标性的瓦斯克斯·德·莫利纳广场开始，感受文艺复兴建筑群的震撼全景。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  参观圣萨尔瓦多教堂，仰望其令人惊叹的浮雕立面。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  走进埃尔梅西亚宫（现为旅游办公室），欣赏华丽的内庭和楼梯。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  漫步到圣玛丽亚广场，参观联合教堂和古老的阿拉伯浴室遗址。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  随意穿行在古城的小巷中，寻找手工艺作坊和橄榄油商店。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  登上古城墙遗迹或某座宫殿的塔楼，俯瞰一片金色屋顶的古城全景。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">古城不大，完全不需要地图，迷失在巷弄中是乐趣。记得穿一双舒适的平底鞋，石板路有些凹凸不平。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **瓦斯克斯·德·莫利纳广场中央**：最佳拍摄时间为清晨或日落前，阳光斜射，建筑呈现迷人的金色。广角镜头可收纳广场全景，对称构图尽显庄严。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **圣萨尔瓦多教堂立面细节**：下午阳光能很好地照亮立面的复杂雕刻。靠近拍摄建筑局部的浮雕、纹章，质感十足。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **某条小巷的尽头**：午后时分，巷子尽头出现一座教堂塔楼的视角非常经典。利用小巷的纵深感引导视线，营造故事感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **古城边缘的观景台**：日落时分，俯瞰整个古城沐浴在晚霞中，一片金色屋顶连绵起伏，景色壮丽。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">尊重当地居民隐私，避免透过私人庭院的大门或窗户向内拍摄。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **古城中心历史宫殿酒店**：入住由古老宫殿改造的豪华酒店，如Parador de Úbeda，沉浸式体验文艺复兴贵族生活。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **广场附近精品酒店**：选择瓦斯克斯·德·莫利纳广场或圣玛丽亚广场周边的特色酒店，位置极佳，出行方便。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **古城墙外舒适旅馆**：性价比之选，安静且通常提供免费停车，适合自驾游客。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **当地家庭旅馆（Casa Rural）**：在古城周边橄榄园中体验安达卢西亚乡村生活，感受地道风情。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">旺季（特别是文艺复兴节期间）务必提前预订。住在古城内虽然价格稍高，但能享受清晨和夜晚没有游客的静谧时刻，体验倍增。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">乌韦达是一座需要用心去感受，而不是匆忙打卡的城市。它的美不在于某个单一的惊世之作，而在于整个古城无与伦比的和谐与完整。当夕阳把最后一道金光涂抹在那些古老的石墙上，你会明白，它不只是世界遗产名录上的一个名字，更是一段被凝固的、流淌着黄金与艺术光辉的辉煌旧梦。如果你厌倦了拥挤，渴望一份厚重的宁静，来这里就对了。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="古城全天开放，主要历史建筑和博物馆开放时间一般为周二至周六 10:00-14:00， 16:00-19:00（夏季可能延长），周日及节假日 10:00-15:00，周一通常闭馆。" />
                <InfoRow icon="🎫" label="门票" value="进入古城免费。参观主要宫殿、教堂等单体建筑通常需单独购票，票价约3-8欧元不等，部分景点有联票选项。" />
                <InfoRow icon="📍" label="地址" value="Plaza Vázquez de Molina, s/n, 23400 Úbeda, Jaén, Spain" />
                <InfoRow icon="🚌" label="交通" value="从最近的哈恩火车站（Estación de Jaén）出发，可乘坐ALSA巴士前往乌韦达，车程约1小时。从马德里或塞维利亚自驾前往约需3-4小时。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
