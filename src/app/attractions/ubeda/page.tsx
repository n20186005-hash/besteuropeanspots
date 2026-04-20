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
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '乌韦达古城', href: '/attractions/ubeda' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">乌韦达古城・Úbeda・西班牙・乌韦达</h1>
          <p className="text-lg text-gray-600 mb-6">
            走进乌韦达，就像一头撞进了一座用蜂蜜色石头雕琢的露天博物馆。第一眼看到瓦斯克斯·德·莫利纳广场，那种震撼是直击心灵的——四周环绕着宏伟的文艺复兴式宫殿和教堂，在安达卢西亚炽热的阳光下，整个广场的石材泛着温暖的金色光泽，庄严又宁静。这里没有大城市的喧嚣，只有石板路上清脆的脚步声和广场上偶尔飞过的鸽群。你会忍不住用手去触摸那些历经几个世纪、被阳光晒得温热的石墙，感受工匠在每一道纹饰上倾注的心血。空气中仿佛还飘着橄榄油的清香（这里是橄榄油重镇），时间在这里慢了下来，让你可以静静品味西班牙“黄金时代”遗留下来的那份精致与骄傲。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">走进乌韦达，就像一头撞进了一座用蜂蜜色石头雕琢的露天博物馆。第一眼看到瓦斯克斯·德·莫利纳广场，那种震撼是直击心灵的——四周环绕着宏伟的文艺复兴式宫殿和教堂，在安达卢西亚炽热的阳光下，整个广场的石材泛着温暖的金色光泽，庄严又宁静。这里没有大城市的喧嚣，只有石板路上清脆的脚步声和广场上偶尔飞过的鸽群。你会忍不住用手去触摸那些历经几个世纪、被阳光晒得温热的石墙，感受工匠在每一道纹饰上倾注的心血。空气中仿佛还飘着橄榄油的清香（这里是橄榄油重镇），时间在这里慢了下来，让你可以静静品味西班牙“黄金时代”遗留下来的那份精致与骄傲。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="乌韦达古城" />
                <InfoRow label="英文名称" value="Úbeda" />
                <InfoRow label="正式名称" value="Úbeda" />
                <InfoRow label="国家" value="西班牙" />
                <InfoRow label="城市" value="乌韦达" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="古城全天开放，主要历史建筑和博物馆开放时间一般为周二至周六 10:00-14:00， 16:00-19:00（夏季可能延长），周日及节假日 10:00-15:00，周一通常闭馆。" />
              <InfoRow label="门票价格" value="进入古城免费。参观主要宫殿、教堂等单体建筑通常需单独购票，票价约3-8欧元不等，部分景点有联票选项。" />
              <InfoRow label="地址" value="Plaza Vázquez de Molina, s/n, 23400 Úbeda, Jaén, Spain" />
              <InfoRow label="交通方式" value="从最近的哈恩火车站（Estación de Jaén）出发，可乘坐ALSA巴士前往乌韦达，车程约1小时。从马德里或塞维利亚自驾前往约需3-4小时。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">乌韦达的故事，是一部关于权力、艺术与橄榄油的史诗。它的崛起要追溯到收复失地运动后，基督教王国重新掌控这片土地。但真正让乌韦达脱胎换骨的，是16世纪。当时，本地出生的贵族弗朗西斯科·德·洛斯·科沃斯成为了查理五世皇帝的首席秘书，权倾朝野。他就像一位雄心勃勃的总策划师，将巨大的财富和皇家恩宠带回家乡，立志要把乌韦达建成一个体现帝国荣耀与文艺复兴理想的“理想城市”。他请来了当时西班牙最顶尖的建筑师，比如安德烈斯·德·范德尔维拉。于是，在短短几十年里，一座座气势恢宏的宫殿、教堂和慈善机构拔地而起，全部采用本地出产的金色砂岩，风格统一而和谐，形成了今天我们看到的惊人建筑群。漫步其中，你能清晰感受到那个大航海时代西班牙的鼎盛与自信。可惜后来帝国衰落，乌韦达的发展也停滞了，但这反而奇迹般地保存了这座文艺复兴“化石”的完整性，直到2003年与邻近的巴埃萨一起被列入世界遗产名录。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  游览可从核心的瓦斯克斯·德·莫利纳广场开始，依次参观周边精华建筑，然后漫步至圣玛丽亚广场和古城蜿蜒的小巷，全程步行约需3-4小时，轻松惬意。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>古城不大，完全不需要地图，迷失在巷弄中是乐趣。记得穿一双舒适的平底鞋，石板路有些凹凸不平。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从地标性的瓦斯克斯·德·莫利纳广场开始，感受文艺复兴建筑群的震撼全景。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  参观圣萨尔瓦多教堂，仰望其令人惊叹的浮雕立面。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  走进埃尔梅西亚宫（现为旅游办公室），欣赏华丽的内庭和楼梯。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  漫步到圣玛丽亚广场，参观联合教堂和古老的阿拉伯浴室遗址。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  随意穿行在古城的小巷中，寻找手工艺作坊和橄榄油商店。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  登上古城墙遗迹或某座宫殿的塔楼，俯瞰一片金色屋顶的古城全景。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  瓦斯克斯·德·莫利纳广场中央</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为清晨或日落前，阳光斜射，建筑呈现迷人的金色。广角镜头可收纳广场全景，对称构图尽显庄严。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  圣萨尔瓦多教堂立面细节</h4>
                  <p className="text-sm text-gray-700">下午阳光能很好地照亮立面的复杂雕刻。靠近拍摄建筑局部的浮雕、纹章，质感十足。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  某条小巷的尽头</h4>
                  <p className="text-sm text-gray-700">午后时分，巷子尽头出现一座教堂塔楼的视角非常经典。利用小巷的纵深感引导视线，营造故事感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  古城边缘的观景台</h4>
                  <p className="text-sm text-gray-700">日落时分，俯瞰整个古城沐浴在晚霞中，一片金色屋顶连绵起伏，景色壮丽。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 尊重当地居民隐私，避免透过私人庭院的大门或窗户向内拍摄。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  古城中心历史宫殿酒店</h4>
                  <p className="text-sm text-blue-800">入住由古老宫殿改造的豪华酒店，如Parador de Úbeda，沉浸式体验文艺复兴贵族生活。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  广场附近精品酒店</h4>
                  <p className="text-sm text-green-800">选择瓦斯克斯·德·莫利纳广场或圣玛丽亚广场周边的特色酒店，位置极佳，出行方便。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  古城墙外舒适旅馆</h4>
                  <p className="text-sm text-yellow-800">性价比之选，安静且通常提供免费停车，适合自驾游客。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  当地家庭旅馆（Casa Rural）</h4>
                  <p className="text-sm text-purple-800">在古城周边橄榄园中体验安达卢西亚乡村生活，感受地道风情。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">旺季（特别是文艺复兴节期间）务必提前预订。住在古城内虽然价格稍高，但能享受清晨和夜晚没有游客的静谧时刻，体验倍增。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">乌韦达是一座需要用心去感受，而不是匆忙打卡的城市。它的美不在于某个单一的惊世之作，而在于整个古城无与伦比的和谐与完整。当夕阳把最后一道金光涂抹在那些古老的石墙上，你会明白，它不只是世界遗产名录上的一个名字，更是一段被凝固的、流淌着黄金与艺术光辉的辉煌旧梦。如果你厌倦了拥挤，渴望一份厚重的宁静，来这里就对了。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
