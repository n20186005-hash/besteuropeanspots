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

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">阿梅利亚古城</h1>
          <p className="text-xl text-gray-600 mb-4">Amelia Old Town</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">意大利</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">阿梅利亚</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">想象一下，你开车穿过翁布里亚起伏的绿色丘陵，远远望见一座石头城像王冠一样矗立在山顶，那就是阿梅利亚了。车子沿着盘山路向上，心也跟着提起来。当你终于穿过那扇巨大的波利托里亚门，时间仿佛瞬间倒流。脚下是光滑的鹅卵石路，两旁是蜂蜜色的中世纪房屋，阳台上开满天竺葵。这里没有汹涌的人潮，安静得能听到自己的脚步声和远处教堂的钟声。最震撼的是那绵延近一公里的古罗马城墙，巨大的多边形石块历经两千多年依然坚固，用手触摸上去，冰凉粗糙的质感仿佛能直接对话历史。在这里，最好的游览方式就是迷路，在每一个安静的转角发现惊喜。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">古城本身是开放区域，可随时进入漫步。但核心历史景点如圣费尔米纳大教堂、市政考古博物馆等有固定的开放时间，且冬季（11月-3月）开放时间可能缩短，建议行前在官网确认。门票对欧盟学生、65岁以上老人通常有折扣，12岁以下儿童常免费。古城内部分街道坡度较大，建议穿舒适的平底鞋。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">阿梅利亚的故事要从公元前10世纪说起，那时翁布里亚人就在此定居。但真正让它登上历史舞台的，是公元前4世纪左右，罗马人在这里建立了一个重要的前哨站，并修筑了宏伟的城墙，这就是我们今天看到的那些令人惊叹的多边形巨石墙的起源。想象一下，两千多年前的工匠，在没有现代机械的情况下，是如何将这些巨大的石块严丝合缝地垒起来的？走在城墙下，你不得不佩服古人的智慧与力量。中世纪是阿梅利亚的另一个高光时期，它成为了一个繁荣的自治城邦，我们今天看到的古城格局和许多建筑，比如12世纪建造的圣费尔米纳大教堂，都成型于那个时代。教堂里藏着荷兰大师Gerard van Honthorst的画作，让人意外在这座小城能与艺术大师相遇。随后的几个世纪，它经历了教皇国的统治，相对平静，这也使得古城风貌得以完整保存。如今，它就像一位安详的老者，静静坐在山顶，俯瞰着时代的变迁，把所有的故事都刻在了石头里。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">推荐从标志性的波利托里亚门进入古城，以此为起点，沿着主干道和蜿蜒的小巷探索，重点参观大教堂、市政广场和古罗马城墙，最后在城墙边的观景台结束。全程步行，悠闲游览大约需要3-4小时。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从宏伟的波利托里亚门进入古城，感受穿越时空的仪式感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  沿着主街Via della Repubblica漫步，欣赏两旁的中世纪建筑。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  参观山顶的圣费尔米纳大教堂及其广场，俯瞰城市全景。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  探访市政考古博物馆，了解古城从史前到罗马时期的历史。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  寻找并触摸一段保存完好的古罗马多边形巨石城墙。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  走到城墙边缘的观景台，欣赏翁布里亚乡村的壮丽景色。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">古城内小巷如迷宫，但主要路标清晰，可以放心随性探索。务必穿一双非常舒适的鞋子，因为上下坡很多。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **波利托里亚门前远景**：最佳拍摄时间为清晨或日落时分，从城外的盘山路上仰拍古城门和后面的山城全景，光线柔和，层次感强。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **古罗马城墙下**：上午阳光能照亮城墙时，贴近拍摄巨大的多边形石块，利用广角镜头展现其厚重感和历史沧桑。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **大教堂广场**：下午时段，以教堂的罗马式立面为背景，捕捉广场上本地人生活的悠闲瞬间。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **城墙观景台**：日落时分，以此为前景，拍摄远处绵延的绿色丘陵和山谷，色彩绚丽，画面开阔。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">古城内小巷光线对比强烈，建议使用HDR模式或注意曝光补偿，以保留暗部细节。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **古城内精品酒店**：选择一家由古老宫殿改建的酒店，沉浸式体验中世纪氛围，但价格较高。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **古城边缘民宿**：性价比之选，通常拥有绝佳的观景阳台，既能享受宁静，又方便步行进入古城。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **山下现代酒店**：适合自驾旅客，停车方便，价格实惠，开车上山仅需几分钟。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **周边农庄住宿**：体验真正的翁布里亚乡村生活，享受宁静与美食，但需自驾出行。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">如果选择住在古城内，请确认酒店是否提供停车服务，因为古城内禁止外来车辆进入，停车通常在山脚下的指定区域。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">阿梅利亚不是那种会让你尖叫的景点，而是一个让你呼吸放缓、内心变得宁静的地方。它美得毫不张扬，却后劲十足。当你离开后，那些光滑的鹅卵石路、午后空旷的广场、从城墙缺口望出去的无尽绿色，会反复在记忆里浮现。这是一个适合用来“浪费”时间、与自己对话的古城，如果你厌倦了打卡式的旅行，一定会爱上这里。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="古城全天开放，内部部分历史建筑（如大教堂、博物馆）开放时间通常为周二至周日 10:00-13:00， 15:30-18:30（夏季可能延长），周一休息。" />
                <InfoRow icon="🎫" label="门票" value="进入古城免费。参观内部历史建筑（如市政博物馆）通常需购票，票价约5-8欧元，具体以现场为准。" />
                <InfoRow icon="📍" label="地址" value="05022 Amelia TR, Italy" />
                <InfoRow icon="🚌" label="交通" value="从罗马菲乌米奇诺机场出发，自驾或乘坐火车至特尔尼火车站，再转乘地区巴士前往阿梅利亚，总耗时约2-2.5小时。自驾是最便捷的方式，从罗马出发约1.5小时车程。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
