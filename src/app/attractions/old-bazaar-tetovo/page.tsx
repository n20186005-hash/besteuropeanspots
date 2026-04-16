import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '泰托沃老城 Old Bazaar of Tetovo｜漫步奥斯曼风情露天博物馆 - 最佳欧洲景点',
  description: '一走进泰托沃老城，时间仿佛瞬间慢了下来。脚下是鹅卵石铺就的蜿蜒小巷，两旁是奥斯曼时期留下的低矮石屋，刷着各种柔和的色彩。空气中飘着新鲜烘焙的面包香、浓郁的土耳其咖啡味，还有香料摊传来的独特气息。这里不像大景点那样人潮汹涌，更多的是本地人悠闲地购物、喝咖啡、聊天。你会看到手工艺人在店铺门口专注地敲打铜...',
}

export default function OldBazaarTetovoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '泰托沃老城', href: '/attractions/old-bazaar-tetovo' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">泰托沃老城・Old Bazaar of Tetovo・北马其顿・泰托沃</h1>
          <p className="text-lg text-gray-600 mb-6">
            一走进泰托沃老城，时间仿佛瞬间慢了下来。脚下是鹅卵石铺就的蜿蜒小巷，两旁是奥斯曼时期留下的低矮石屋，刷着各种柔和的色彩。空气中飘着新鲜烘焙的面包香、浓郁的土耳其咖啡味，还有香料摊传来的独特气息。这里不像大景点那样人潮汹涌，更多的是本地人悠闲地购物、喝咖啡、聊天。你会看到手工艺人在店铺门口专注地敲打铜器，老爷爷在茶馆里下着棋，彩色披肩和手工地毯从木窗边垂挂下来，随风轻轻摆动。整个老城就像一个活着的露天博物馆，充满了烟火气和故事感，让人忍不住想放慢脚步，迷失在这些迷人的街巷里。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">一走进泰托沃老城，时间仿佛瞬间慢了下来。脚下是鹅卵石铺就的蜿蜒小巷，两旁是奥斯曼时期留下的低矮石屋，刷着各种柔和的色彩。空气中飘着新鲜烘焙的面包香、浓郁的土耳其咖啡味，还有香料摊传来的独特气息。这里不像大景点那样人潮汹涌，更多的是本地人悠闲地购物、喝咖啡、聊天。你会看到手工艺人在店铺门口专注地敲打铜器，老爷爷在茶馆里下着棋，彩色披肩和手工地毯从木窗边垂挂下来，随风轻轻摆动。整个老城就像一个活着的露天博物馆，充满了烟火气和故事感，让人忍不住想放慢脚步，迷失在这些迷人的街巷里。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="泰托沃老城" />
                <InfoRow label="英文名称" value="Old Bazaar of Tetovo" />
                <InfoRow label="正式名称" value="Old Bazaar of Tetovo" />
                <InfoRow label="国家" value="北马其顿" />
                <InfoRow label="城市" value="泰托沃" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="露天区域全天开放，各店铺营业时间通常为上午9点至晚上8点，部分餐馆营业至更晚。" />
              <InfoRow label="门票价格" value="免费进入老城区域。参观内部个别历史建筑（如彩绘清真寺）可能需要小额门票或捐赠。" />
              <InfoRow label="地址" value="Old Bazaar, Tetovo, 1200, North Macedonia" />
              <InfoRow label="交通方式" value="从斯科普里国际机场出发，驾车或乘坐出租车沿A2/E65高速公路向西北行驶约40公里，耗时约45分钟。从泰托沃市中心步行即可轻松抵达老城。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">泰托沃老城的故事，深深烙印着奥斯曼帝国的印记。它的黄金时代大约始于15世纪，当时奥斯曼帝国统治了这片区域，将泰托沃发展成了一个重要的贸易和手工艺中心。你可以想象一下，几百年前，这里就是商队往来、货物集散的热闹之地。那些坚固的石造商队旅馆（han）和浴室（hamam）的遗迹，就是当年繁华的见证。老城的心脏——那座美得惊人的彩绘清真寺，建于15世纪，但它在19世纪经历了一次华丽的“变身”。当地的一位女诗人倾尽家财，用极其繁复、鲜艳的花卉和几何图案重新装饰了它，让它从内到外变成了一件艺术品，这在整个巴尔干地区都独一无二。到了近现代，老城经历了战火和变迁，有些部分遭到了破坏。但幸运的是，人们意识到了它的价值，开始了保护和修复工作。如今漫步其中，你能同时触摸到奥斯曼的古老灵魂、19世纪的艺术激情，以及北马其顿人努力保存的记忆。它不只是一个旅游点，更是一部用石头、色彩和日常生活写就的立体史书。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  建议从老城西侧的主入口（靠近Pena River）开始游览，沿着主干道向东慢慢探索，穿梭于两侧的分支小巷中，最后抵达彩绘清真寺作为高潮。全程步行游览，节奏悠闲，大约需要2-3小时。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>老城小巷如迷宫，但不用担心迷路，随意探索更有趣。建议穿一双舒适的平底鞋，鹅卵石路面不太适合高跟鞋。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从西侧石拱门进入，感受主街的市集氛围。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  向右拐入小巷，探访传统铜匠和手工艺店铺。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  找到古老的石造商队旅馆遗址，触摸历史墙壁。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  在主街的咖啡馆坐下，品尝一杯土耳其咖啡。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  前往彩绘清真寺，欣赏其内外部的华丽装饰。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  在清真寺旁的河畔步道散步，结束游览。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  彩绘清真寺正面</h4>
                  <p className="text-sm text-gray-700">清晨或傍晚，阳光柔和时，从正前方拍摄建筑立面和宣礼塔，色彩饱和度最佳。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  主街拱门下</h4>
                  <p className="text-sm text-gray-700">上午，站在拱门内向外拍摄延伸的鹅卵石街道和两侧彩色的店铺，构图有纵深感。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  手工艺店铺门口</h4>
                  <p className="text-sm text-gray-700">午后，聚焦店铺门口悬挂的商品或正在工作的匠人，捕捉充满生活感的细节。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  河边眺望老城屋顶</h4>
                  <p className="text-sm text-gray-700">日落时分，在Pena河对岸，拍摄老城连绵的红色瓦顶和清真寺尖塔的轮廓。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 拍摄当地人或店铺内部前，最好先微笑示意并获得同意，这是基本的尊重。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  经济型</h4>
                  <p className="text-sm text-blue-800">选择泰托沃市中心的新式公寓或小型旅馆，价格实惠，步行至老城约10-15分钟。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  舒适型</h4>
                  <p className="text-sm text-green-800">入住老城周边经过改造的传统风格酒店，既能体验古韵，又享受现代设施的便利。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  特色体验</h4>
                  <p className="text-sm text-yellow-800">斯科普里或奥赫里德有更多高端酒店选择，可安排一日游往返泰托沃。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">老城内住宿选择很少，建议住在周边，更能感受本地社区氛围。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">泰托沃老城有一种不张扬却直抵人心的魅力。它没有宏伟到令人屏息，却用每一块光滑的鹅卵石、每一抹墙上的色彩、每一缕咖啡香气，温柔地包裹着你。在这里，历史不是冷冰冰的展品，而是融化在寻常日子里。如果你厌倦了标准化的旅行，渴望一点真实的、带着烟火气的异域风情，那么请一定来这里走走，让自己迷失在奥斯曼的旧时光里。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
