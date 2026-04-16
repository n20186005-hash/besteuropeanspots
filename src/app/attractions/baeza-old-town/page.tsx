import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '巴埃萨古城 Baeza Old Town｜文艺复兴的瑰宝，安达卢西亚的“黄金石城” - 最佳欧洲景点',
  description: '走进巴埃萨古城，就像一头撞进了一座用金色石头雕刻的露天博物馆。阳光洒在那些文艺复兴风格的宫殿和教堂立面上，整座小城都泛着蜂蜜般温润的光泽，难怪它和邻居乌韦达一起被称作“黄金石城”。这里没有大城市的喧嚣，石板路窄窄的，广场静静的，时间仿佛被16世纪的辉煌给凝固住了。我最爱在黄昏时分，坐在圣玛丽亚大教堂...',
}

export default function BaezaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '巴埃萨古城', href: '/attractions/baeza-old-town' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">巴埃萨古城</h1>
          <p className="text-xl text-gray-600 mb-4">Baeza Old Town</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">西班牙</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">巴埃萨</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">走进巴埃萨古城，就像一头撞进了一座用金色石头雕刻的露天博物馆。阳光洒在那些文艺复兴风格的宫殿和教堂立面上，整座小城都泛着蜂蜜般温润的光泽，难怪它和邻居乌韦达一起被称作“黄金石城”。这里没有大城市的喧嚣，石板路窄窄的，广场静静的，时间仿佛被16世纪的辉煌给凝固住了。我最爱在黄昏时分，坐在圣玛丽亚大教堂前的台阶上，看着夕阳把“哈恩之门”染成金红色，那一刻，你才能真正体会到什么叫“历史的质感”。空气中飘着橄榄油的香气，提醒你这儿可是西班牙橄榄油的心脏地带。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">古城区域全天可自由漫步。但需注意，内部景点如圣玛丽亚大教堂、哈布林克宫（Palacio de Jabalquinto）的开放时间常有变动，尤其在冬季（11月-次年2月）下午开放时间可能提前结束。许多博物馆周一闭馆。持有学生证、青年卡或65岁以上长者通常可享受门票折扣，建议参观前在旅游信息中心确认最新时刻表。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">巴埃萨的故事，简直就是一部浓缩的安达卢西亚史诗。最早是伊比利亚人的定居点，后来罗马人、西哥特人都曾在此留下痕迹。但真正让它脱胎换骨的，是8世纪后摩尔人的长期统治，伊斯兰文化深深烙印在这里。转折点发生在1227年，卡斯蒂利亚国王费尔南多三世收复了这里，从此巴埃萨成了基督教王国的前沿要塞。不过，它真正的“黄金时代”是在16世纪文艺复兴时期。得益于羊毛贸易和橄榄种植带来的巨大财富，当地的贵族和教会斥巨资，请来最好的建筑师，几乎用一整个世纪，把整座城重新“雕刻”了一遍。你看那些精雕细琢的立面、华丽的纹章、对称的广场，都是那个自信与繁荣时代的产物。有趣的是，它和仅8公里之遥的乌韦达在2003年一起被列为世界遗产，就像一对文艺复兴的孪生兄弟，互相较劲又相辅相成，共同守护着那段最辉煌的记忆。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">推荐从地标“哈恩之门”开始，以圣玛丽亚大教堂广场为核心，穿梭于主要宫殿和广场之间，全程步行约2-3小时，轻松惬意，终点可设在圣十字广场感受当地生活气息。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从地标“哈恩之门”进入古城，感受古老城门的气势。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  漫步至圣玛丽亚大教堂广场，欣赏教堂宏伟的文艺复兴立面。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  参观广场旁的哈布林克宫，看其华丽的哥特式银匠风格门廊。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  走到旧大学和圣费利佩教堂，感受学术与宗教的交融。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  闲逛至沙拉广场和圣十字广场，体验当地市井生活。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">古城不大，完全不需要地图，随意走走就是最好的探索。记得穿一双舒适的平底鞋，石板路虽然美丽但有些凹凸不平。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **哈恩之门前**：**最佳拍摄时间**为清晨或日落时分。**角度和效果**：从广场对面拍摄，将古老的石拱门与后面的城市街道一同纳入镜头，光线柔和，层次感强。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **圣玛丽亚大教堂广场**：**最佳拍摄时间**为下午。**角度和效果**：坐在广场台阶上，仰拍教堂高耸的塔楼和精致的文艺复兴立面，利用广场的地面形成倒影构图。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **沙拉广场拱廊下**：**最佳拍摄时间**为中午光线充足时。**角度和效果**：站在拱廊内，向外拍摄广场上的喷泉和周围的金色石头建筑，框架构图让画面更聚焦。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">金色砂岩在阳光下反光强烈，建议避开正午顶光拍摄建筑细节，侧光或逆光更能拍出石头的纹理和质感。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **古城中心历史酒店**：选择由古老宫殿改建的酒店，沉浸式体验文艺复兴氛围，价格中上。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **城墙外舒适旅馆**：性价比之选，安静且通常提供免费停车，步行10分钟即可进入古城。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **当地民宿**：住在当地人的家里，更能体验安达卢西亚的家庭生活，主人可能会请你品尝家酿的葡萄酒。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">巴埃萨非常小，住宿选择有限，旺季（春、秋季）建议提前预订。住在古城内虽然方便，但可能无法停车，需提前与酒店确认。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">巴埃萨的美，是一种需要静下心来品味的、教科书级别的美。它不像其他热门古城那样充满戏剧性，而是把文艺复兴的理性、和谐与优雅，一丝不苟地刻在了每一块石头上。在这里，最好的旅行方式就是放慢脚步，用手触摸那些冰冷却又仿佛有温度的石墙，坐在广场上听一听教堂的钟声。它或许不会让你瞬间热血沸腾，但那份沉淀了数个世纪的宁静与骄傲，会像橄榄油的余香一样，久久萦绕在你的记忆里。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="古城全天开放，内部主要建筑（如哈恩之门、大教堂）开放时间一般为周一至周六 10:00-14:00 & 16:00-19:00，周日及节假日可能缩短。" />
                <InfoRow icon="🎫" label="门票" value="进入古城免费。参观内部建筑（如圣玛丽亚大教堂）通常需要门票，约3-5欧元。部分广场和建筑外观可免费参观。" />
                <InfoRow icon="📍" label="地址" value="Plaza del Pópulo, s/n, 23440 Baeza, Jaén, Spain" />
                <InfoRow icon="🚌" label="交通" value="从最近的哈恩火车站（Estación de Jaén）出发，驾车或乘坐巴士约30-40分钟可抵达巴埃萨。从马德里或塞维利亚出发，可先乘火车或长途汽车至哈恩或邻近的乌韦达，再转乘当地交通。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
