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
            { label: '景点', href: '/attractions' },
            { label: '韦纳夫罗古城', href: '/attractions/venaferro-old-town' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">韦纳夫罗古城</h1>
          <p className="text-xl text-gray-600 mb-4">Venaferro Old Town</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">意大利</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">韦纳夫罗</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">第一眼看到韦纳夫罗古城，你一定会被它那种“凝固在时间里”的气质击中。它就像一座从童话里搬出来的石头山城，密密麻麻的赭石色房屋沿着陡峭的山坡堆叠而上，最后被一圈古老的城墙温柔地环抱。走进那扇厚重的石头城门，瞬间就切换了频道：脚下是凹凸不平的鹅卵石小路，窄得只容两人侧身而过；两旁是挂着铁艺招牌的古老作坊和飘着咖啡香的小店。阳光透过楼宇间的缝隙洒下来，在石墙上画出明明暗暗的光影。这里没有汽车的喧嚣，只有自己的脚步声、远处广场传来的钟声，还有阳台上老太太浇花时哼的小调。那种悠闲、古老又充满生活气息的感觉，会让你忍不住放慢脚步，觉得自己也成了中世纪故事里的一部分。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">古城本身作为公共区域24小时可进入，但照明有限，建议白天游览。主要参观点的开放时间可能随季节调整，夏季（4月-10月）通常会延长一小时关闭。门票优惠通常适用于欧盟学生、65岁以上老人及12岁以下儿童，建议参观时携带有效证件。部分小巷坡度较大，建议穿着舒适的平底鞋。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">韦纳夫罗的故事可以追溯到伊特鲁里亚时期，但真正让它成型的是在中世纪。大概在11世纪左右，山上的居民为了躲避沿海的疟疾和海盗侵袭，开始向这座易守难攻的山顶聚集，用当地的石灰岩一块块垒起了最初的堡垒和房屋，这就是古城的雏形。到了12-14世纪，它成了附近贵族争抢的香饽饽，你打我夺中，城墙越修越厚，塔楼越建越高，我们今天看到的宏伟石墙和主城门，基本都是那个“战火纷飞”年代的产物。走在城里，你还能在一些老房子的门楣上看到不同家族的纹章，默默讲述着权力的更迭。有趣的是，到了文艺复兴时期，当佛罗伦萨和锡耶纳在大搞艺术革命时，韦纳夫罗因为地理位置偏僻，反而像被遗忘了一样，发展几乎停滞。但这恰恰成了它最大的幸运——没有被大规模改造，原汁原味的中世纪肌理就这样完整保存了下来。直到19世纪意大利统一后，它才慢慢被外界发现，但居民们依然过着平静的生活。我觉得，正是这种“被遗忘”的宁静，让它避开了过度商业化的洪流，保留了最动人的生活本色。触摸着那些被岁月磨得光滑的石头墙，仿佛能听到几百年来，一代代居民在此生息的低语。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">推荐从山下的主城门（Porta Vecchia）进入，一路向上探索，最后抵达山顶的城堡广场（Piazza della Rocca）俯瞰全景，全程步行游览约需2-3小时。这是一条由低到高、逐步揭开古城面纱的经典路线。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从古老的**主城门（Porta Vecchia）** 进入，感受穿越时空的仪式感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  沿着**主街（Via Maestra）** 漫步，浏览两旁的手工艺品店和古老建筑立面。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  拐进**工匠小巷（Vicolo degli Artigiani）**，看传统作坊如何运作。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  参观**圣米歇尔教堂（Chiesa di San Michele）**，欣赏其朴素的罗马式外观。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  登上**城堡广场（Piazza della Rocca）**，在观景台收获无遮挡的全景。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">古城小路如迷宫，可以放心随意探索，每条小巷都可能带来惊喜。务必穿一双非常舒适、防滑的鞋子。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **城外山坡远眺点**：最佳拍摄时间为清晨或日落前。从通往古城的路边山坡拍摄，能框下整个古城依山而建的全景，层次感极强。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **主城门（Porta Vecchia）内侧**：上午阳光能照入城门时。从门洞内向外拍蜿蜒向上的石板路，构图有纵深感，故事感十足。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **城堡广场（Piazza della Rocca）观景台**：全天皆可，晴日傍晚尤佳。以古城错落的红瓦屋顶和远方托斯卡纳田园为背景拍摄人像，画面开阔富有诗意。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **工匠小巷（Vicolo degli Artigiani）**：正午时分阳光直射进窄巷时。利用巷子的狭窄构图，拍摄两侧石墙和一线天的光影效果，氛围感浓郁。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">尊重居民隐私，避免对着住户的窗户或阳台直接拍摄。无人机飞行在古城上空通常被禁止。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **古城内精品民宿**：入住由古老石屋改造的民宿，深度体验中世纪氛围，但行李搬运可能不便。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **山下镇中心酒店**：性价比之选，设施现代，停车方便，步行上山即可开始游览。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **周边农庄（Agriturismo）**：适合自驾游客，享受托斯卡纳乡村宁静，开车约10-15分钟可达古城。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">古城内住宿数量有限且非常抢手，尤其是旺季，务必提前数月预订。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">韦纳夫罗古城最打动我的，不是某个具体的建筑，而是那种整体流淌着的、缓慢而真实的生活节奏。它不像一个纯粹的博物馆，而是一个依然呼吸着的古老社区。在这里，历史不是橱窗里的展品，而是人们每日走过的路、居住的家。离开时，你会带走满脑子的石板路、暖色调的墙壁和宁静的时光。如果你也想找一处能真正让自己慢下来、触摸历史纹理的地方，韦纳夫罗绝对不会让你失望。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="古城区域全天开放。城内部分博物馆和小教堂开放时间一般为周二至周日 9:00-18:00（冬季至17:00），周一闭馆。" />
                <InfoRow icon="🎫" label="门票" value="进入古城免费。部分历史建筑、塔楼或博物馆需单独购票，票价约5-10欧元。" />
                <InfoRow icon="📍" label="地址" value="Centro Storico, 58010 Venaferro GR, Italy" />
                <InfoRow icon="🚌" label="交通" value="从最近的格罗塞托火车站（Grosseto Railway Station）乘坐地区巴士（Tiemme公司线路）前往韦纳夫罗镇，车程约1小时。到达镇中心后，古城位于山顶，需步行约15分钟上山。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
