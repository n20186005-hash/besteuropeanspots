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

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">米什科尔茨老城・Miskolc Old Town・匈牙利・米什科尔茨</h1>
          <p className="text-lg text-gray-600 mb-6">
            嘿，如果你厌倦了布达佩斯的喧嚣，想找个更有生活气息和历史厚度的匈牙利老城逛逛，米什科尔茨老城绝对是个惊喜。第一眼看到那些被岁月磨得光滑的鹅卵石街道和色彩柔和的巴洛克建筑外墙，你会感觉时间都慢了下来。这里不像纯粹的旅游区，更像是本地人依然在其中买菜、喝咖啡的生活剧场。空气里混合着新鲜面包的香气和从老咖啡馆飘出的醇厚味道。走在狭窄的巷弄里，不经意抬头就能看到精美的锻铁招牌或斑驳的壁画，那种“发现”的乐趣特别棒。整个氛围是慵懒而真实的，仿佛一位亲切的老者在阳光下讲述着过往。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">嘿，如果你厌倦了布达佩斯的喧嚣，想找个更有生活气息和历史厚度的匈牙利老城逛逛，米什科尔茨老城绝对是个惊喜。第一眼看到那些被岁月磨得光滑的鹅卵石街道和色彩柔和的巴洛克建筑外墙，你会感觉时间都慢了下来。这里不像纯粹的旅游区，更像是本地人依然在其中买菜、喝咖啡的生活剧场。空气里混合着新鲜面包的香气和从老咖啡馆飘出的醇厚味道。走在狭窄的巷弄里，不经意抬头就能看到精美的锻铁招牌或斑驳的壁画，那种“发现”的乐趣特别棒。整个氛围是慵懒而真实的，仿佛一位亲切的老者在阳光下讲述着过往。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="米什科尔茨老城" />
                <InfoRow label="英文名称" value="Miskolc Old Town" />
                <InfoRow label="正式名称" value="Miskolc Old Town" />
                <InfoRow label="国家" value="匈牙利" />
                <InfoRow label="城市" value="米什科尔茨" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="公共区域全天开放。内部历史建筑（如市政厅、博物馆等）开放时间通常为周二至周日 10:00-18:00，周一闭馆。" />
              <InfoRow label="门票价格" value="漫步老城街道免费。进入各博物馆或历史建筑需单独购票，成人票约1000-2000匈牙利福林（约3-6欧元）。" />
              <InfoRow label="地址" value="Miskolc, Széchenyi István utca 及周边区域，3525 Hungary" />
              <InfoRow label="交通方式" value="从布达佩斯李斯特·费伦茨国际机场出发，可乘坐火车直达米什科尔茨（Miskolc-Tiszai火车站），车程约2-2.5小时。从火车站步行至老城核心区约15-20分钟。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">米什科尔茨老城的故事，可以说是匈牙利北部一部生动的编年史。它的起源可以追溯到中世纪早期，但真正开始繁荣是在14世纪，当时获得了皇家自由城镇的地位。你可以想象一下，几百年前，这里就是商队往来、手工业者聚集的热闹之地。老城在历史上命运多舛，经历了蒙古入侵、土耳其统治时期的破坏，但总能在废墟中重生，这种韧性让人感慨。到了18世纪，巴洛克建筑风潮席卷这里，我们今天看到的许多优雅的联排别墅和市政建筑，都是那个经济文化复兴时期的产物。19世纪，随着工业革命，米什科尔茨发展成为重要的工业中心，老城则保留了其文化和商业核心的角色。走在街上，你能感受到这种层叠的历史感——中世纪的街道布局、巴洛克的立面、19世纪的店铺招牌和谐共存。二战的炮火再次带来了创伤，但战后的修复工作相当用心，努力保留了历史的灵魂而非推倒重来。如今，它不再是权力或财富的中心，却成了城市记忆最温暖的容器，这种身份的转变本身就很有味道。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从主广场（Széchenyi István tér）的市政厅前出发，沿着Széchenyi街向东北方向漫步，穿梭于连接主街的小巷中，最后抵达Avas山脚下的老街区。全程步行游览约需2-3小时，节奏悠闲，适合边走边看边拍照。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>老城区域不大，无需专门导航，随意探索小巷更有趣。建议穿一双舒适的平底鞋，鹅卵石路面对高跟鞋不太友好。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从市政厅（Városháza）前的主广场开始，感受老城的中心气场。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  沿着Széchenyi István utca主街漫步，欣赏两侧色彩缤纷的巴洛克式建筑立面。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  拐进Kazinczy utca等小巷，探索隐藏的小型画廊、古董店和传统咖啡馆。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  参观奥特沃什·约瑟夫博物馆，了解城市与地区的自然历史。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  走向Avas山方向，看看山坡上更古老的民居和圣史蒂芬教堂（Szent István-templom）。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  在Avasi广场附近找家露天咖啡馆休息，观察本地人的生活。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  Széchenyi街中段</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为清晨或午后阳光斜射时。从街道一侧拍摄另一侧连续的巴洛克建筑立面，利用延伸的街道线条和柔和的光影，营造出深邃的历史感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  市政厅钟楼视角</h4>
                  <p className="text-sm text-gray-700">如果钟楼开放，登顶后可拍摄老城红色屋顶全景与远处Avas山的同框画面，层次感极佳。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  某条小巷的入口</h4>
                  <p className="text-sm text-gray-700">选择一条有特色招牌或鲜花的狭窄巷弄入口，拍摄人物走入画面的背影，能生动传达“探索”的意境。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  Avas山坡民居前</h4>
                  <p className="text-sm text-gray-700">下午时分，从稍高的位置回拍老城部分屋顶和教堂尖顶，前景是古朴的民居墙壁，构图富有生活气息。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 尊重当地居民隐私，拍摄民居门窗或院内景物时需格外注意。雨天后的鹅卵石街道反光时拍照也别有韵味。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  经济之选</h4>
                  <p className="text-sm text-blue-800">老城边缘或火车站附近的精品旅馆或公寓，价格亲民，交通便利。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  舒适之选</h4>
                  <p className="text-sm text-green-800">位于老城核心区或Széchenyi街上的三星级酒店，开窗即是历史景观，体验沉浸感。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  特色之选</h4>
                  <p className="text-sm text-yellow-800">Avas山脚下的经过改造的传统民宿，环境安静，能体验更地道的居住氛围。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">旺季（夏季和圣诞季）建议提前预订。住在老城内意味着夜晚和清晨可以独享宁静无人的街道，体验感大幅提升。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">米什科尔茨老城没有令人屏息的绝世景观，它的魅力在于那种不张扬的、渗入日常的历史感。它像一个仍然跳动着的古老心脏，让你在漫步中自然而然地与过去相连。如果你喜欢在旅行中感受真实的生活脉搏，而不仅仅是打卡地标，那么这里温润的时光和友善的氛围，会给你留下一段非常踏实而美好的记忆。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
