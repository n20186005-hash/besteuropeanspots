import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿梅利亚古城 Amelia Old Town｜漫步中世纪山城，触摸古罗马城墙 - 最佳欧洲景点',
  description: '想象一下，你开车穿过翁布里亚起伏的绿色丘陵，远远望见一座石头城像王冠一样矗立在山顶，那就是阿梅利亚了。车子沿着盘山路向上，心也跟着提起来。当你终于穿过那扇巨大的波利托里亚门，时间仿佛瞬间倒流。脚下是光滑的鹅卵石路，两旁是蜂蜜色的中世纪房屋，阳台上开满天竺葵。这里没有汹涌的人潮，安静得能听到自己的脚步...',
}

export default function AmeliaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '阿梅利亚古城', href: '/attractions/amelia-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">阿梅利亚古城・Amelia Old Town・意大利・阿梅利亚</h1>
          <p className="text-lg text-gray-600 mb-6">
            想象一下，你开车穿过翁布里亚起伏的绿色丘陵，远远望见一座石头城像王冠一样矗立在山顶，那就是阿梅利亚了。车子沿着盘山路向上，心也跟着提起来。当你终于穿过那扇巨大的波利托里亚门，时间仿佛瞬间倒流。脚下是光滑的鹅卵石路，两旁是蜂蜜色的中世纪房屋，阳台上开满天竺葵。这里没有汹涌的人潮，安静得能听到自己的脚步声和远处教堂的钟声。最震撼的是那绵延近一公里的古罗马城墙，巨大的多边形石块历经两千多年依然坚固，用手触摸上去，冰凉粗糙的质感仿佛能直接对话历史。在这里，最好的游览方式就是迷路，在每一个安静的转角发现惊喜。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">想象一下，你开车穿过翁布里亚起伏的绿色丘陵，远远望见一座石头城像王冠一样矗立在山顶，那就是阿梅利亚了。车子沿着盘山路向上，心也跟着提起来。当你终于穿过那扇巨大的波利托里亚门，时间仿佛瞬间倒流。脚下是光滑的鹅卵石路，两旁是蜂蜜色的中世纪房屋，阳台上开满天竺葵。这里没有汹涌的人潮，安静得能听到自己的脚步声和远处教堂的钟声。最震撼的是那绵延近一公里的古罗马城墙，巨大的多边形石块历经两千多年依然坚固，用手触摸上去，冰凉粗糙的质感仿佛能直接对话历史。在这里，最好的游览方式就是迷路，在每一个安静的转角发现惊喜。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="阿梅利亚古城" />
                <InfoRow label="英文名称" value="Amelia Old Town" />
                <InfoRow label="正式名称" value="Amelia Old Town" />
                <InfoRow label="国家" value="意大利" />
                <InfoRow label="城市" value="阿梅利亚" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="古城全天开放，内部部分历史建筑（如大教堂、博物馆）开放时间通常为周二至周日 10:00-13:00， 15:30-18:30（夏季可能延长），周一休息。" />
              <InfoRow label="门票价格" value="进入古城免费。参观内部历史建筑（如市政博物馆）通常需购票，票价约5-8欧元，具体以现场为准。" />
              <InfoRow label="地址" value="05022 Amelia TR, Italy" />
              <InfoRow label="交通方式" value="从罗马菲乌米奇诺机场出发，自驾或乘坐火车至特尔尼火车站，再转乘地区巴士前往阿梅利亚，总耗时约2-2.5小时。自驾是最便捷的方式，从罗马出发约1.5小时车程。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">阿梅利亚的故事要从公元前10世纪说起，那时翁布里亚人就在此定居。但真正让它登上历史舞台的，是公元前4世纪左右，罗马人在这里建立了一个重要的前哨站，并修筑了宏伟的城墙，这就是我们今天看到的那些令人惊叹的多边形巨石墙的起源。想象一下，两千多年前的工匠，在没有现代机械的情况下，是如何将这些巨大的石块严丝合缝地垒起来的？走在城墙下，你不得不佩服古人的智慧与力量。中世纪是阿梅利亚的另一个高光时期，它成为了一个繁荣的自治城邦，我们今天看到的古城格局和许多建筑，比如12世纪建造的圣费尔米纳大教堂，都成型于那个时代。教堂里藏着荷兰大师Gerard van Honthorst的画作，让人意外在这座小城能与艺术大师相遇。随后的几个世纪，它经历了教皇国的统治，相对平静，这也使得古城风貌得以完整保存。如今，它就像一位安详的老者，静静坐在山顶，俯瞰着时代的变迁，把所有的故事都刻在了石头里。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从标志性的波利托里亚门进入古城，以此为起点，沿着主干道和蜿蜒的小巷探索，重点参观大教堂、市政广场和古罗马城墙，最后在城墙边的观景台结束。全程步行，悠闲游览大约需要3-4小时。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>古城内小巷如迷宫，但主要路标清晰，可以放心随性探索。务必穿一双非常舒适的鞋子，因为上下坡很多。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从宏伟的波利托里亚门进入古城，感受穿越时空的仪式感。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  沿着主街Via della Repubblica漫步，欣赏两旁的中世纪建筑。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  参观山顶的圣费尔米纳大教堂及其广场，俯瞰城市全景。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  探访市政考古博物馆，了解古城从史前到罗马时期的历史。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  寻找并触摸一段保存完好的古罗马多边形巨石城墙。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  走到城墙边缘的观景台，欣赏翁布里亚乡村的壮丽景色。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  波利托里亚门前远景</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为清晨或日落时分，从城外的盘山路上仰拍古城门和后面的山城全景，光线柔和，层次感强。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  古罗马城墙下</h4>
                  <p className="text-sm text-gray-700">上午阳光能照亮城墙时，贴近拍摄巨大的多边形石块，利用广角镜头展现其厚重感和历史沧桑。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  大教堂广场</h4>
                  <p className="text-sm text-gray-700">下午时段，以教堂的罗马式立面为背景，捕捉广场上本地人生活的悠闲瞬间。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  城墙观景台</h4>
                  <p className="text-sm text-gray-700">日落时分，以此为前景，拍摄远处绵延的绿色丘陵和山谷，色彩绚丽，画面开阔。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 古城内小巷光线对比强烈，建议使用HDR模式或注意曝光补偿，以保留暗部细节。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  古城内精品酒店</h4>
                  <p className="text-sm text-blue-800">选择一家由古老宫殿改建的酒店，沉浸式体验中世纪氛围，但价格较高。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  古城边缘民宿</h4>
                  <p className="text-sm text-green-800">性价比之选，通常拥有绝佳的观景阳台，既能享受宁静，又方便步行进入古城。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  山下现代酒店</h4>
                  <p className="text-sm text-yellow-800">适合自驾旅客，停车方便，价格实惠，开车上山仅需几分钟。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  周边农庄住宿</h4>
                  <p className="text-sm text-purple-800">体验真正的翁布里亚乡村生活，享受宁静与美食，但需自驾出行。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">如果选择住在古城内，请确认酒店是否提供停车服务，因为古城内禁止外来车辆进入，停车通常在山脚下的指定区域。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">阿梅利亚不是那种会让你尖叫的景点，而是一个让你呼吸放缓、内心变得宁静的地方。它美得毫不张扬，却后劲十足。当你离开后，那些光滑的鹅卵石路、午后空旷的广场、从城墙缺口望出去的无尽绿色，会反复在记忆里浮现。这是一个适合用来“浪费”时间、与自己对话的古城，如果你厌倦了打卡式的旅行，一定会爱上这里。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
