import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '里希拉赫蒂 Riihilahti｜赫尔辛基海滨的宁静绿洲与城市秘境 - 最佳欧洲景点',
  description: '嘿，如果你在赫尔辛基想找个地方喘口气，躲开游客的喧嚣，那一定要来里希拉赫蒂转转。这里不是什么大名鼎鼎的景点，更像是一个被本地人私藏的“后花园”。我第一次来的时候，就被那种奇妙的混合感打动了——一边是宁静的海湾，停着白色的小帆船，水波不兴；另一边则是充满工业感的旧仓库和起重机，红砖墙在夕阳下特别有味道...',
}

export default function RiihilahtiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '里希拉赫蒂', href: '/attractions/riihilahti' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">里希拉赫蒂</h1>
          <p className="text-xl text-gray-600 mb-4">Riihilahti</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">芬兰</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">赫尔辛基</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">嘿，如果你在赫尔辛基想找个地方喘口气，躲开游客的喧嚣，那一定要来里希拉赫蒂转转。这里不是什么大名鼎鼎的景点，更像是一个被本地人私藏的“后花园”。我第一次来的时候，就被那种奇妙的混合感打动了——一边是宁静的海湾，停着白色的小帆船，水波不兴；另一边则是充满工业感的旧仓库和起重机，红砖墙在夕阳下特别有味道。你可以沿着蜿蜒的木栈道散步，看海鸥掠过水面，或者干脆找块草坪躺下，什么都不想。这里没有拥挤的人潮，只有推着婴儿车的妈妈、慢跑的青年和静静垂钓的老人，节奏一下子慢了下来，能真切地感受到赫尔辛基人日常的、松弛的那一面。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">公园和滨海步道全年全天开放。夏季（6月至8月）是游览的最佳季节，日照时间长，绿意盎然；冬季虽然寒冷且白天短，但雪景别有一番风味，且常有市民在此越野滑雪。区域内的一些小型咖啡馆或餐厅的营业时间可能随季节调整，建议提前查询。整个区域无障碍设施良好，适合家庭和轮椅使用者。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">里希拉赫蒂的故事，其实就是赫尔辛基城市扩张和功能转变的一个缩影。这片土地最初只是赫尔辛基西南部Lauttasaari岛上一个不起眼的海湾。在19世纪末到20世纪中叶，随着赫尔辛基工业的发展，里希拉赫蒂逐渐变成了一个重要的港口和工业区。你能看到的那些红砖仓库和生锈的起重机，就是那个时代的“遗产”，它们曾经忙碌地装卸货物，见证着城市的贸易脉搏。想想还挺有意思的，当年这里充斥着机器的轰鸣和工人的吆喝，充满了硬核的工业力量。到了20世纪后期，城市产业转型，重工业逐渐迁出市中心，这片区域才慢慢安静下来。大约从21世纪初开始，赫尔辛基市政府着手对它进行改造，没有选择大拆大建，而是巧妙地保留了工业遗迹的骨架，然后注入绿色的灵魂——铺设步道、种植草坪、修建休闲设施。于是，一个曾经的工业码头，就这样温柔地“进化”成了一个充满艺术感和生活气息的滨海公园。走在其中，你能同时触摸到历史的粗粝和现代的惬意，这种新旧对话的感觉特别迷人。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">推荐从东侧的主要入口（靠近有轨电车站）开始，沿着海岸线向西漫步，绕海湾一圈后返回起点。这条路线可以饱览海景、工业遗迹和公园绿地，节奏悠闲，全程步行约需1.5-2小时。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从东入口进入，沿主木栈道前行，感受开阔海景。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  途经红砖旧仓库区，观察建筑上的工业痕迹。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  走到西端的观景平台，眺望海湾对岸的城市天际线。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  转入内侧的草坪和休闲区，感受宁静的社区氛围。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  沿着北侧小径返回，路过小型游艇码头。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  回到起点附近，可以在海边长椅上休息。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">整个区域路径清晰，无需特别导航。建议穿一双舒适的步行鞋，因为会混合行走在木板路、碎石路和草地上。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **西端观景平台**：**最佳拍摄时间**为日落时分。**角度和效果**：以旧起重机为前景，对焦远处沐浴在金色夕阳下的赫尔辛基城市轮廓，能拍出极具故事感的冷暖对比大片。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **红砖仓库墙壁下**：**最佳拍摄时间**为午后，阳光能照亮砖墙纹理。**角度和效果**：贴近墙壁拍摄局部特写，如锈蚀的管道、斑驳的标语，突出工业废墟的细节和质感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **滨海木栈道拐角**：**最佳拍摄时间**为晴朗的白天。**角度和效果**：低角度拍摄木栈道引向海湾和帆船的延伸感，构图干净，画面充满宁静的度假风情。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">冬季拍摄雪景时注意保护相机，防止进雪。尊重当地居民隐私，避免对着私人住宅或游艇内部拍摄。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **经济之选**：赫尔辛基市中心或Lauttasaari岛上的舒适型酒店或公寓，交通便利，性价比高。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **品质之选**：选择赫尔辛基设计区附近的精品酒店，体验北欧设计美学，前往里希拉赫蒂也很方便。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **特色之选**：预订万塔（Vantaa）或埃斯波（Espoo）靠近森林或湖泊的度假小屋，体验真正的芬兰自然生活，需驾车前往景区。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **便捷之选**：Lauttasaari岛本地民宿，可以深度融入社区，享受清晨或傍晚在里希拉赫蒂散步的宁静。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">夏季是旅游旺季，建议提前预订住宿。如果主要想探索此类本地化景点，住在Lauttasaari或邻近的Ruoholahti区会比住在最市中心更方便、更安静。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">里希拉赫蒂不是一个会让你“哇塞”惊叹的地方，它的美是细水长流型的。在这里，你收获的是一种平静的治愈，一种观察城市另一面的独特视角。它就像赫尔辛基这个优雅女士身上一处不轻易示人的、略带粗犷却无比真实的纹身。如果你厌倦了标准化的景点打卡，想找一个地方发呆、散步、和本地生活同步呼吸，那么这里绝对值得你花上半天时间，来慢慢体会。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="24小时开放（公共区域）" />
                <InfoRow icon="🎫" label="门票" value="免费" />
                <InfoRow icon="📍" label="地址" value="Riihilahti, 00180 Helsinki, Finland" />
                <InfoRow icon="🚌" label="交通" value="从赫尔辛基-万塔机场（HEL）乘坐615路公交车至“Kamppi”站，换乘有轨电车6/6T线至“Lauttasaari”站，步行约10分钟可达，总耗时约50分钟。从赫尔辛基中央火车站出发，可乘坐有轨电车6/6T线直达，约20分钟。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
