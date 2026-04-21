import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '哈恩古城 Jaén Old Town｜漫步在橄榄油之乡的白色迷宫 - 最佳欧洲景点',
  description: '说实话，第一眼看到哈恩古城，我有点被“震”住了。它不是那种精致小巧的古镇，而是一座从山脚一直蔓延到山顶圣卡塔利娜城堡脚下的、巨大而密集的白色迷宫。沿着陡峭的鹅卵石坡道向上爬，两旁是刷得雪白的房屋，阳台上盛开着天竺葵，狭窄的巷子窄到似乎只能容一人通过，转角可能就遇到一个安静的广场或是有着华丽铁艺窗棂的...',
}

export default function JaenOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '西班牙', href: '/destinations/spain' },
            { label: '哈恩古城', href: '/attractions/jaen-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">哈恩古城・Jaén Old Town・西班牙・哈恩</h1>
          <p className="text-lg text-gray-600 mb-6">
            说实话，第一眼看到哈恩古城，我有点被“震”住了。它不是那种精致小巧的古镇，而是一座从山脚一直蔓延到山顶圣卡塔利娜城堡脚下的、巨大而密集的白色迷宫。沿着陡峭的鹅卵石坡道向上爬，两旁是刷得雪白的房屋，阳台上盛开着天竺葵，狭窄的巷子窄到似乎只能容一人通过，转角可能就遇到一个安静的广场或是有着华丽铁艺窗棂的老宅。空气中飘着淡淡的橄榄油香气——毕竟这里是西班牙橄榄油的核心产区。爬到高处回头望，眼前是连绵不绝的橄榄树海洋，那种粗犷与宁静交织的安达卢西亚风情，瞬间就抓住了你。这里游客不多，生活节奏缓慢，你能看到老奶奶在门口晒太阳，听到酒吧里传来弗拉门戈音乐的隐约节奏，感觉像是闯进了一个被时光妥善保管的秘密角落。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">说实话，第一眼看到哈恩古城，我有点被“震”住了。它不是那种精致小巧的古镇，而是一座从山脚一直蔓延到山顶圣卡塔利娜城堡脚下的、巨大而密集的白色迷宫。沿着陡峭的鹅卵石坡道向上爬，两旁是刷得雪白的房屋，阳台上盛开着天竺葵，狭窄的巷子窄到似乎只能容一人通过，转角可能就遇到一个安静的广场或是有着华丽铁艺窗棂的老宅。空气中飘着淡淡的橄榄油香气——毕竟这里是西班牙橄榄油的核心产区。爬到高处回头望，眼前是连绵不绝的橄榄树海洋，那种粗犷与宁静交织的安达卢西亚风情，瞬间就抓住了你。这里游客不多，生活节奏缓慢，你能看到老奶奶在门口晒太阳，听到酒吧里传来弗拉门戈音乐的隐约节奏，感觉像是闯进了一个被时光妥善保管的秘密角落。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="哈恩古城" />
                <InfoRow label="英文名称" value="Jaén Old Town" />
                <InfoRow label="正式名称" value="Jaén Old Town" />
                <InfoRow label="国家" value="西班牙" />
                <InfoRow label="城市" value="哈恩" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="全天开放（公共区域），内部景点如哈恩大教堂等有独立开放时间，通常为周一至周六 10:00-14:00 & 16:00-19:00，周日及节假日时间缩短。" />
              <InfoRow label="门票价格" value="进入古城区域免费。参观内部景点需单独购票，如哈恩大教堂门票约5欧元，圣卡塔利娜城堡门票约3.5欧元。" />
              <InfoRow label="地址" value="Casco Antiguo, 23001 Jaén, Spain" />
              <InfoRow label="交通方式" value="从哈恩火车站（Estación de Jaén）出发，步行约15-20分钟即可抵达古城山脚下的入口。从最近的哈恩机场（Aeropuerto de Granada-Jaén）出发，需先乘坐出租车或巴士到市区，车程约1小时。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">哈恩古城的故事，简直是一部浓缩的西班牙南部史。它的历史可以追溯到古伊比利亚时期，但真正留下深刻烙印的是摩尔人。公元8世纪，摩尔人来到这里，不仅给了城市“Jaén”这个名字（意为“商队之路”），更在山上修建了宏伟的防御城堡——圣卡塔利娜城堡的前身，那时哈恩是格拉纳达王国北部重要的边境要塞。你在古城蜿蜒曲折的巷弄布局里，依然能清晰感受到摩尔式城镇为了适应山地和防御需求而设计的迷宫特色。1246年，基督教国王费尔南多三世“圣徒”经过漫长围困后收复哈恩，这标志着基督教势力在安达卢西亚的关键胜利。收复后，基督教徒在摩尔宫殿的遗址上开始建造令人惊叹的哈恩大教堂，这座文艺复兴风格的杰作历时近三百年才完工，被誉为“西班牙文艺复兴的灯塔”。漫步古城，你就像在翻阅一本立体的历史书：脚下的石头可能来自罗马时代，墙上的纹章属于某个基督教贵族，而街角的拱门又带着明显的摩尔遗风。它不像一些旅游化古城那样被精心修饰，反而有种粗粝的真实感，每一道墙缝都塞满了故事。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从山脚下的圣伊尔德丰索广场（Plaza de San Ildefonso）开始，一路向上探索至山顶的圣卡塔利娜城堡，这是最经典的登山观景路线。全程步行游览约需3-4小时，包含沿途参观主要景点和拍照停留。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>古城巷弄复杂如迷宫，建议使用手机地图或跟着主要上坡道走。一定要穿一双绝对舒适的鞋，因为全程都是石板路和陡坡。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从圣伊尔德丰索广场出发，感受古城入口的生活气息。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  沿着 Calle Maestra 向上，欣赏两侧的白色建筑和特色小店。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  参观宏伟的哈恩大教堂，看其标志性的双塔立面。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  继续上行，穿过犹太区（Barrio de la Magdalena）的狭窄巷弄。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  抵达山顶的圣卡塔利娜城堡，俯瞰无尽的橄榄园和城市全景。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  圣卡塔利娜城堡观景台</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为日落时分。以城堡城墙为前景，拍摄远处平原上如绿色海洋般的橄榄树林和沐浴在金色夕阳下的整个白色古城，层次感极佳。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  哈恩大教堂侧面小巷</h4>
                  <p className="text-sm text-gray-700">白天阳光充沛时。从狭窄的小巷仰拍大教堂高耸的文艺复兴式立面与一角蓝天，构图紧凑而有张力。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  犹太区拱门（Arco de San Lorenzo）</h4>
                  <p className="text-sm text-gray-700">清晨或午后。透过古老的石拱门框架，拍摄后面蜿蜒向上的白色街道，营造出穿越时空的景深感。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 尊重当地居民隐私，避免对着住户的窗户或阳台内部拍摄。柔和的光线（清晨或黄昏）更能凸显白色建筑群的质感。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  古城内特色酒店</h4>
                  <p className="text-sm text-blue-800">入住由历史建筑改造的精品酒店，如 Hospedería Palacio de Los Navarros，沉浸式体验古城夜晚的宁静。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  山脚下舒适旅馆</h4>
                  <p className="text-sm text-green-800">选择古城边缘的现代旅馆，如 Hotel Xauen Jaén，兼顾舒适性与步行前往古城的便利。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  市中心商务酒店</h4>
                  <p className="text-sm text-yellow-800">在哈恩现代城区（如 Plaza de la Constitución 附近）选择连锁酒店，价格更实惠，餐饮购物选择多。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">预订古城内的住宿时，注意确认是否提供停车位，因为古城内部通常禁止车辆通行。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">哈恩古城的美，不是那种扑面而来的惊艳，而是一种需要你放慢脚步，用身体去攀爬，用心去感受的厚重与质朴。当终于站在城堡之巅，看着脚下层层叠叠的白房子和远方天地一色的橄榄绿，你会觉得所有的汗水都值得。这里没有太多的喧嚣与表演，只有真实的生活痕迹和沉淀了千年的历史回响。如果你想寻找一个未被过度打扰、充满安达卢西亚原始魅力的地方，哈恩古城会给你一个充满惊喜的答案。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
