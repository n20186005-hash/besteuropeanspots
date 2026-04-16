import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '米什科尔茨老城 Miskolc Old Town｜漫步匈牙利北部的历史心脏，感受巴洛克与鹅卵石的时光对话 - 最佳欧洲景点',
  description: '嘿，如果你厌倦了布达佩斯的喧嚣，想找个更有生活气息和历史厚度的匈牙利老城逛逛，米什科尔茨老城绝对是个惊喜。第一眼看到那些被岁月磨得光滑的鹅卵石街道和色彩柔和的巴洛克建筑外墙，你会感觉时间都慢了下来。这里不像纯粹的旅游区，更像是本地人依然在其中买菜、喝咖啡的生活剧场。空气里混合着新鲜面包的香气和从老咖...',
}

export default function MiskolcOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '米什科尔茨老城', href: '/attractions/miskolc-old-town' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">米什科尔茨老城</h1>
          <p className="text-xl text-gray-600 mb-4">Miskolc Old Town</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">匈牙利</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">米什科尔茨</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">嘿，如果你厌倦了布达佩斯的喧嚣，想找个更有生活气息和历史厚度的匈牙利老城逛逛，米什科尔茨老城绝对是个惊喜。第一眼看到那些被岁月磨得光滑的鹅卵石街道和色彩柔和的巴洛克建筑外墙，你会感觉时间都慢了下来。这里不像纯粹的旅游区，更像是本地人依然在其中买菜、喝咖啡的生活剧场。空气里混合着新鲜面包的香气和从老咖啡馆飘出的醇厚味道。走在狭窄的巷弄里，不经意抬头就能看到精美的锻铁招牌或斑驳的壁画，那种“发现”的乐趣特别棒。整个氛围是慵懒而真实的，仿佛一位亲切的老者在阳光下讲述着过往。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">老城街道和广场全年全天可自由漫步。但需注意，内部景点如米什科尔茨画廊（Miskolci Képtár）、奥特沃什·约瑟夫博物馆（Ottó Herman Museum）等有固定的开放时间，且冬季（11月至3月）开放时间可能缩短，建议行前官网确认。学生、老年人和团体通常享有门票折扣。部分小型博物馆周一、周二可能连续闭馆。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">米什科尔茨老城的故事，可以说是匈牙利北部一部生动的编年史。它的起源可以追溯到中世纪早期，但真正开始繁荣是在14世纪，当时获得了皇家自由城镇的地位。你可以想象一下，几百年前，这里就是商队往来、手工业者聚集的热闹之地。老城在历史上命运多舛，经历了蒙古入侵、土耳其统治时期的破坏，但总能在废墟中重生，这种韧性让人感慨。到了18世纪，巴洛克建筑风潮席卷这里，我们今天看到的许多优雅的联排别墅和市政建筑，都是那个经济文化复兴时期的产物。19世纪，随着工业革命，米什科尔茨发展成为重要的工业中心，老城则保留了其文化和商业核心的角色。走在街上，你能感受到这种层叠的历史感——中世纪的街道布局、巴洛克的立面、19世纪的店铺招牌和谐共存。二战的炮火再次带来了创伤，但战后的修复工作相当用心，努力保留了历史的灵魂而非推倒重来。如今，它不再是权力或财富的中心，却成了城市记忆最温暖的容器，这种身份的转变本身就很有味道。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">推荐从主广场（Széchenyi István tér）的市政厅前出发，沿着Széchenyi街向东北方向漫步，穿梭于连接主街的小巷中，最后抵达Avas山脚下的老街区。全程步行游览约需2-3小时，节奏悠闲，适合边走边看边拍照。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从市政厅（Városháza）前的主广场开始，感受老城的中心气场。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  沿着Széchenyi István utca主街漫步，欣赏两侧色彩缤纷的巴洛克式建筑立面。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  拐进Kazinczy utca等小巷，探索隐藏的小型画廊、古董店和传统咖啡馆。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  参观奥特沃什·约瑟夫博物馆，了解城市与地区的自然历史。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  走向Avas山方向，看看山坡上更古老的民居和圣史蒂芬教堂（Szent István-templom）。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  在Avasi广场附近找家露天咖啡馆休息，观察本地人的生活。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">老城区域不大，无需专门导航，随意探索小巷更有趣。建议穿一双舒适的平底鞋，鹅卵石路面对高跟鞋不太友好。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **Széchenyi街中段**：最佳拍摄时间为清晨或午后阳光斜射时。从街道一侧拍摄另一侧连续的巴洛克建筑立面，利用延伸的街道线条和柔和的光影，营造出深邃的历史感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **市政厅钟楼视角**：如果钟楼开放，登顶后可拍摄老城红色屋顶全景与远处Avas山的同框画面，层次感极佳。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **某条小巷的入口**：选择一条有特色招牌或鲜花的狭窄巷弄入口，拍摄人物走入画面的背影，能生动传达“探索”的意境。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **Avas山坡民居前**：下午时分，从稍高的位置回拍老城部分屋顶和教堂尖顶，前景是古朴的民居墙壁，构图富有生活气息。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">尊重当地居民隐私，拍摄民居门窗或院内景物时需格外注意。雨天后的鹅卵石街道反光时拍照也别有韵味。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **经济之选**：老城边缘或火车站附近的精品旅馆或公寓，价格亲民，交通便利。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **舒适之选**：位于老城核心区或Széchenyi街上的三星级酒店，开窗即是历史景观，体验沉浸感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **特色之选**：Avas山脚下的经过改造的传统民宿，环境安静，能体验更地道的居住氛围。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">旺季（夏季和圣诞季）建议提前预订。住在老城内意味着夜晚和清晨可以独享宁静无人的街道，体验感大幅提升。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">米什科尔茨老城没有令人屏息的绝世景观，它的魅力在于那种不张扬的、渗入日常的历史感。它像一个仍然跳动着的古老心脏，让你在漫步中自然而然地与过去相连。如果你喜欢在旅行中感受真实的生活脉搏，而不仅仅是打卡地标，那么这里温润的时光和友善的氛围，会给你留下一段非常踏实而美好的记忆。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="公共区域全天开放。内部历史建筑（如市政厅、博物馆等）开放时间通常为周二至周日 10:00-18:00，周一闭馆。" />
                <InfoRow icon="🎫" label="门票" value="漫步老城街道免费。进入各博物馆或历史建筑需单独购票，成人票约1000-2000匈牙利福林（约3-6欧元）。" />
                <InfoRow icon="📍" label="地址" value="Miskolc, Széchenyi István utca 及周边区域，3525 Hungary" />
                <InfoRow icon="🚌" label="交通" value="从布达佩斯李斯特·费伦茨国际机场出发，可乘坐火车直达米什科尔茨（Miskolc-Tiszai火车站），车程约2-2.5小时。从火车站步行至老城核心区约15-20分钟。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
