import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '韦纳夫罗古城 Venaferro Old Town｜漫步中世纪时光隧道的山城明珠 - 最佳欧洲景点',
  description: '第一眼看到韦纳夫罗古城，你一定会被它那种“凝固在时间里”的气质击中。它就像一座从童话里搬出来的石头山城，密密麻麻的赭石色房屋沿着陡峭的山坡堆叠而上，最后被一圈古老的城墙温柔地环抱。走进那扇厚重的石头城门，瞬间就切换了频道：脚下是凹凸不平的鹅卵石小路，窄得只容两人侧身而过；两旁是挂着铁艺招牌的古老作坊...',
}

export default function VenaferroOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '韦纳夫罗古城', href: '/attractions/venaferro-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">韦纳夫罗古城・Venaferro Old Town・意大利・韦纳夫罗</h1>
          <p className="text-lg text-gray-600 mb-6">
            第一眼看到韦纳夫罗古城，你一定会被它那种“凝固在时间里”的气质击中。它就像一座从童话里搬出来的石头山城，密密麻麻的赭石色房屋沿着陡峭的山坡堆叠而上，最后被一圈古老的城墙温柔地环抱。走进那扇厚重的石头城门，瞬间就切换了频道：脚下是凹凸不平的鹅卵石小路，窄得只容两人侧身而过；两旁是挂着铁艺招牌的古老作坊和飘着咖啡香的小店。阳光透过楼宇间的缝隙洒下来，在石墙上画出明明暗暗的光影。这里没有汽车的喧嚣，只有自己的脚步声、远处广场传来的钟声，还有阳台上老太太浇花时哼的小调。那种悠闲、古老又充满生活气息的感觉，会让你忍不住放慢脚步，觉得自己也成了中世纪故事里的一部分。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">第一眼看到韦纳夫罗古城，你一定会被它那种“凝固在时间里”的气质击中。它就像一座从童话里搬出来的石头山城，密密麻麻的赭石色房屋沿着陡峭的山坡堆叠而上，最后被一圈古老的城墙温柔地环抱。走进那扇厚重的石头城门，瞬间就切换了频道：脚下是凹凸不平的鹅卵石小路，窄得只容两人侧身而过；两旁是挂着铁艺招牌的古老作坊和飘着咖啡香的小店。阳光透过楼宇间的缝隙洒下来，在石墙上画出明明暗暗的光影。这里没有汽车的喧嚣，只有自己的脚步声、远处广场传来的钟声，还有阳台上老太太浇花时哼的小调。那种悠闲、古老又充满生活气息的感觉，会让你忍不住放慢脚步，觉得自己也成了中世纪故事里的一部分。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="韦纳夫罗古城" />
                <InfoRow label="英文名称" value="Venaferro Old Town" />
                <InfoRow label="正式名称" value="Venaferro Old Town" />
                <InfoRow label="国家" value="意大利" />
                <InfoRow label="城市" value="韦纳夫罗" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="古城区域全天开放。城内部分博物馆和小教堂开放时间一般为周二至周日 9:00-18:00（冬季至17:00），周一闭馆。" />
              <InfoRow label="门票价格" value="进入古城免费。部分历史建筑、塔楼或博物馆需单独购票，票价约5-10欧元。" />
              <InfoRow label="地址" value="Centro Storico, 58010 Venaferro GR, Italy" />
              <InfoRow label="交通方式" value="从最近的格罗塞托火车站（Grosseto Railway Station）乘坐地区巴士（Tiemme公司线路）前往韦纳夫罗镇，车程约1小时。到达镇中心后，古城位于山顶，需步行约15分钟上山。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">韦纳夫罗的故事可以追溯到伊特鲁里亚时期，但真正让它成型的是在中世纪。大概在11世纪左右，山上的居民为了躲避沿海的疟疾和海盗侵袭，开始向这座易守难攻的山顶聚集，用当地的石灰岩一块块垒起了最初的堡垒和房屋，这就是古城的雏形。到了12-14世纪，它成了附近贵族争抢的香饽饽，你打我夺中，城墙越修越厚，塔楼越建越高，我们今天看到的宏伟石墙和主城门，基本都是那个“战火纷飞”年代的产物。走在城里，你还能在一些老房子的门楣上看到不同家族的纹章，默默讲述着权力的更迭。有趣的是，到了文艺复兴时期，当佛罗伦萨和锡耶纳在大搞艺术革命时，韦纳夫罗因为地理位置偏僻，反而像被遗忘了一样，发展几乎停滞。但这恰恰成了它最大的幸运——没有被大规模改造，原汁原味的中世纪肌理就这样完整保存了下来。直到19世纪意大利统一后，它才慢慢被外界发现，但居民们依然过着平静的生活。我觉得，正是这种“被遗忘”的宁静，让它避开了过度商业化的洪流，保留了最动人的生活本色。触摸着那些被岁月磨得光滑的石头墙，仿佛能听到几百年来，一代代居民在此生息的低语。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从山下的主城门（Porta Vecchia）进入，一路向上探索，最后抵达山顶的城堡广场（Piazza della Rocca）俯瞰全景，全程步行游览约需2-3小时。这是一条由低到高、逐步揭开古城面纱的经典路线。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>古城小路如迷宫，可以放心随意探索，每条小巷都可能带来惊喜。务必穿一双非常舒适、防滑的鞋子。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从古老的主城门（Porta Vecchia） 进入，感受穿越时空的仪式感。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  沿着主街（Via Maestra） 漫步，浏览两旁的手工艺品店和古老建筑立面。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  拐进工匠小巷（Vicolo degli Artigiani），看传统作坊如何运作。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  参观圣米歇尔教堂（Chiesa di San Michele），欣赏其朴素的罗马式外观。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  登上城堡广场（Piazza della Rocca），在观景台收获无遮挡的全景。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  城外山坡远眺点</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为清晨或日落前。从通往古城的路边山坡拍摄，能框下整个古城依山而建的全景，层次感极强。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  主城门（Porta Vecchia）内侧</h4>
                  <p className="text-sm text-gray-700">上午阳光能照入城门时。从门洞内向外拍蜿蜒向上的石板路，构图有纵深感，故事感十足。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  城堡广场（Piazza della Rocca）观景台</h4>
                  <p className="text-sm text-gray-700">全天皆可，晴日傍晚尤佳。以古城错落的红瓦屋顶和远方托斯卡纳田园为背景拍摄人像，画面开阔富有诗意。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  工匠小巷（Vicolo degli Artigiani）</h4>
                  <p className="text-sm text-gray-700">正午时分阳光直射进窄巷时。利用巷子的狭窄构图，拍摄两侧石墙和一线天的光影效果，氛围感浓郁。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 尊重居民隐私，避免对着住户的窗户或阳台直接拍摄。无人机飞行在古城上空通常被禁止。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  古城内精品民宿</h4>
                  <p className="text-sm text-blue-800">入住由古老石屋改造的民宿，深度体验中世纪氛围，但行李搬运可能不便。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  山下镇中心酒店</h4>
                  <p className="text-sm text-green-800">性价比之选，设施现代，停车方便，步行上山即可开始游览。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  周边农庄（Agriturismo）</h4>
                  <p className="text-sm text-yellow-800">适合自驾游客，享受托斯卡纳乡村宁静，开车约10-15分钟可达古城。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">古城内住宿数量有限且非常抢手，尤其是旺季，务必提前数月预订。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">韦纳夫罗古城最打动我的，不是某个具体的建筑，而是那种整体流淌着的、缓慢而真实的生活节奏。它不像一个纯粹的博物馆，而是一个依然呼吸着的古老社区。在这里，历史不是橱窗里的展品，而是人们每日走过的路、居住的家。离开时，你会带走满脑子的石板路、暖色调的墙壁和宁静的时光。如果你也想找一处能真正让自己慢下来、触摸历史纹理的地方，韦纳夫罗绝对不会让你失望。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
