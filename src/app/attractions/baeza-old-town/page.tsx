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
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '巴埃萨古城', href: '/attractions/baeza-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">巴埃萨古城・Baeza Old Town・西班牙・巴埃萨</h1>
          <p className="text-lg text-gray-600 mb-6">
            走进巴埃萨古城，就像一头撞进了一座用金色石头雕刻的露天博物馆。阳光洒在那些文艺复兴风格的宫殿和教堂立面上，整座小城都泛着蜂蜜般温润的光泽，难怪它和邻居乌韦达一起被称作“黄金石城”。这里没有大城市的喧嚣，石板路窄窄的，广场静静的，时间仿佛被16世纪的辉煌给凝固住了。我最爱在黄昏时分，坐在圣玛丽亚大教堂前的台阶上，看着夕阳把“哈恩之门”染成金红色，那一刻，你才能真正体会到什么叫“历史的质感”。空气中飘着橄榄油的香气，提醒你这儿可是西班牙橄榄油的心脏地带。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">走进巴埃萨古城，就像一头撞进了一座用金色石头雕刻的露天博物馆。阳光洒在那些文艺复兴风格的宫殿和教堂立面上，整座小城都泛着蜂蜜般温润的光泽，难怪它和邻居乌韦达一起被称作“黄金石城”。这里没有大城市的喧嚣，石板路窄窄的，广场静静的，时间仿佛被16世纪的辉煌给凝固住了。我最爱在黄昏时分，坐在圣玛丽亚大教堂前的台阶上，看着夕阳把“哈恩之门”染成金红色，那一刻，你才能真正体会到什么叫“历史的质感”。空气中飘着橄榄油的香气，提醒你这儿可是西班牙橄榄油的心脏地带。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="巴埃萨古城" />
                <InfoRow label="英文名称" value="Baeza Old Town" />
                <InfoRow label="正式名称" value="Baeza Old Town" />
                <InfoRow label="国家" value="西班牙" />
                <InfoRow label="城市" value="巴埃萨" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="古城全天开放，内部主要建筑（如哈恩之门、大教堂）开放时间一般为周一至周六 10:00-14:00 & 16:00-19:00，周日及节假日可能缩短。" />
              <InfoRow label="门票价格" value="进入古城免费。参观内部建筑（如圣玛丽亚大教堂）通常需要门票，约3-5欧元。部分广场和建筑外观可免费参观。" />
              <InfoRow label="地址" value="Plaza del Pópulo, s/n, 23440 Baeza, Jaén, Spain" />
              <InfoRow label="交通方式" value="从最近的哈恩火车站（Estación de Jaén）出发，驾车或乘坐巴士约30-40分钟可抵达巴埃萨。从马德里或塞维利亚出发，可先乘火车或长途汽车至哈恩或邻近的乌韦达，再转乘当地交通。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">巴埃萨的故事，简直就是一部浓缩的安达卢西亚史诗。最早是伊比利亚人的定居点，后来罗马人、西哥特人都曾在此留下痕迹。但真正让它脱胎换骨的，是8世纪后摩尔人的长期统治，伊斯兰文化深深烙印在这里。转折点发生在1227年，卡斯蒂利亚国王费尔南多三世收复了这里，从此巴埃萨成了基督教王国的前沿要塞。不过，它真正的“黄金时代”是在16世纪文艺复兴时期。得益于羊毛贸易和橄榄种植带来的巨大财富，当地的贵族和教会斥巨资，请来最好的建筑师，几乎用一整个世纪，把整座城重新“雕刻”了一遍。你看那些精雕细琢的立面、华丽的纹章、对称的广场，都是那个自信与繁荣时代的产物。有趣的是，它和仅8公里之遥的乌韦达在2003年一起被列为世界遗产，就像一对文艺复兴的孪生兄弟，互相较劲又相辅相成，共同守护着那段最辉煌的记忆。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从地标“哈恩之门”开始，以圣玛丽亚大教堂广场为核心，穿梭于主要宫殿和广场之间，全程步行约2-3小时，轻松惬意，终点可设在圣十字广场感受当地生活气息。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>古城不大，完全不需要地图，随意走走就是最好的探索。记得穿一双舒适的平底鞋，石板路虽然美丽但有些凹凸不平。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从地标“哈恩之门”进入古城，感受古老城门的气势。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  漫步至圣玛丽亚大教堂广场，欣赏教堂宏伟的文艺复兴立面。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  参观广场旁的哈布林克宫，看其华丽的哥特式银匠风格门廊。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  走到旧大学和圣费利佩教堂，感受学术与宗教的交融。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  闲逛至沙拉广场和圣十字广场，体验当地市井生活。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  哈恩之门前</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为清晨或日落时分。角度和效果</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  圣玛丽亚大教堂广场</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为下午。角度和效果</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  沙拉广场拱廊下</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为中午光线充足时。角度和效果</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 金色砂岩在阳光下反光强烈，建议避开正午顶光拍摄建筑细节，侧光或逆光更能拍出石头的纹理和质感。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  古城中心历史酒店</h4>
                  <p className="text-sm text-blue-800">选择由古老宫殿改建的酒店，沉浸式体验文艺复兴氛围，价格中上。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  城墙外舒适旅馆</h4>
                  <p className="text-sm text-green-800">性价比之选，安静且通常提供免费停车，步行10分钟即可进入古城。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  当地民宿</h4>
                  <p className="text-sm text-yellow-800">住在当地人的家里，更能体验安达卢西亚的家庭生活，主人可能会请你品尝家酿的葡萄酒。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">巴埃萨非常小，住宿选择有限，旺季（春、秋季）建议提前预订。住在古城内虽然方便，但可能无法停车，需提前与酒店确认。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">巴埃萨的美，是一种需要静下心来品味的、教科书级别的美。它不像其他热门古城那样充满戏剧性，而是把文艺复兴的理性、和谐与优雅，一丝不苟地刻在了每一块石头上。在这里，最好的旅行方式就是放慢脚步，用手触摸那些冰冷却又仿佛有温度的石墙，坐在广场上听一听教堂的钟声。它或许不会让你瞬间热血沸腾，但那份沉淀了数个世纪的宁静与骄傲，会像橄榄油的余香一样，久久萦绕在你的记忆里。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
