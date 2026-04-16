import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '施托尔贝格城堡 Stolberg Castle｜哈茨山上的童话城堡与贵族传奇 - 最佳欧洲景点',
  description: '第一眼看到施托尔贝格城堡，你一定会忍不住“哇”出声来！它就那么安静又骄傲地矗立在哈茨山一座绿色山丘上，红瓦尖顶在阳光下闪闪发光，像极了从童话书里直接搬出来的场景。沿着蜿蜒的石板路爬上去，空气里都是森林和古老石头混合的清新味道。走进城堡庭院，时间仿佛慢了下来，你可以抚摸那些斑驳的城墙，想象几百年前的贵...',
}

export default function StolbergCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '施托尔贝格城堡', href: '/attractions/stolberg-castle' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">施托尔贝格城堡</h1>
          <p className="text-xl text-gray-600 mb-4">Stolberg Castle</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">德国</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">施托尔贝格</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">第一眼看到施托尔贝格城堡，你一定会忍不住“哇”出声来！它就那么安静又骄傲地矗立在哈茨山一座绿色山丘上，红瓦尖顶在阳光下闪闪发光，像极了从童话书里直接搬出来的场景。沿着蜿蜒的石板路爬上去，空气里都是森林和古老石头混合的清新味道。走进城堡庭院，时间仿佛慢了下来，你可以抚摸那些斑驳的城墙，想象几百年前的贵族们也曾在这里散步。城堡内部更是宝藏，华丽的骑士厅、古老的家具，还有那个能俯瞰整个彩色小镇和连绵山峦的塔楼视野，绝对会让你觉得不虚此行。这里没有大城市的喧嚣，只有一种被历史和自然温柔包裹的宁静感。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">城堡内部开放时间有季节性，冬季（11月-3月）仅周末开放，计划冬季游览请务必提前官网确认。门票对6岁以下儿童免费。城堡内部分区域（如塔楼）楼梯较陡且狭窄，行动不便者需注意。城堡内设有咖啡馆，但选择有限，建议可在山下小镇用餐后再上山游览。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">施托尔贝格城堡的故事，得从近千年前说起。大约在11世纪，为了守护哈茨山区的矿产和贸易路线，最初的堡垒在这里建立起来。不过，我们今天看到的这座浪漫主义风格的城堡，主要归功于斯托尔贝格家族。这个家族从12世纪开始就统治着这片土地，城堡也成了他们世代相传的家。听着导览讲解，你会感觉像在追一部漫长的家族连续剧——有权力斗争，有联姻结盟，也有文化繁荣。特别值得一提的是，在16世纪宗教改革时期，城堡曾是重要的新教中心之一，留下了不少历史印记。可惜的是，城堡在19世纪经历了一场大火，部分建筑被毁。但后来的重建工作非常用心，不仅修复了损毁部分，还增添了许多浪漫主义的装饰元素，让城堡看起来更像我们梦想中的样子。漫步其中，你能从厚重的石墙、华丽的穹顶和家族肖像画里，清晰地触摸到这段跨越几个世纪的贵族兴衰史，感觉特别奇妙。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">推荐游览路线从城堡山脚下的主入口开始，先游览外部庭院和防御工事，然后进入城堡主体建筑参观内部房间和博物馆，最后登顶塔楼结束。全程慢慢逛下来大约需要2-3小时。路线终点在塔楼观景台。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从主城门进入，感受城堡的宏伟气势。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  穿过外庭院，参观古老的防御城墙和炮台。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  进入主楼，依次参观骑士厅、宴会厅和家族起居室。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  游览地方历史博物馆，了解城堡和地区的往事。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  沿着螺旋楼梯登上城堡塔楼。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  在塔楼顶部的观景台，360度欣赏哈茨山全景。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">城堡内部标识清晰，但部分房间光线较暗，可以打开手机手电筒辅助观看。登塔楼梯狭窄且旋转多，建议穿着舒适防滑的鞋子。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **小镇中心广场远眺点**：最佳拍摄时间为清晨或傍晚，阳光为城堡镀上金边。从广场仰拍，能将城堡全景与山下彩色房屋一同纳入镜头，构图富有层次感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **城堡主庭院拱门下**：上午光线最佳。利用拱门作为天然画框，拍摄内部庭院和主楼建筑，营造穿越时空的纵深感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **塔楼观景台**：全天皆可，晴朗的下午视野最通透。以垛口为前景，拍摄远处绵延的哈茨山脉和森林，画面辽阔震撼。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **城堡西侧花园小径**：下午侧光时分。从侧面拍摄城堡轮廓与花园花草，显得浪漫而宁静。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">使用无人机拍摄需提前查询当地法规，城堡上空可能有飞行限制。室内博物馆区域通常禁止使用闪光灯。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **城堡酒店**：预算充足可选城堡内或紧邻城堡的精品酒店，体验贵族氛围，推窗即是景。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **山下小镇民宿**：性价比之选，施托尔贝格镇中心有许多温馨的家庭旅馆，步行上山方便，更能体验小镇风情。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **哈茨山区度假屋**：适合自驾家庭或团体，在周边森林村庄租一栋木屋，享受静谧的自然环境，开车短程即可抵达城堡。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">旺季（夏季和圣诞市场期间）住宿紧张，建议提前数月预订。小镇民宿通常包含丰盛的德式早餐，是开始一天旅程的好方式。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">施托尔贝格城堡带给我的，不仅仅是一次眼睛的旅行，更是一次心灵的沉淀。它没有那种咄咄逼人的壮观，却用它的童话颜值和厚重历史，温柔地抓住了你的心。站在塔楼上，看着夕阳把小镇染成暖金色，你会明白为什么这里被称为“哈茨山的珍珠”。如果你想逃离日常，找一个能同时满足你对浪漫幻想和历史好奇的地方，这里绝对会是答案。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="城堡庭院全年开放，城堡内部及博物馆开放时间：4月至10月，每日10:00-17:00；11月至3月，周六、周日及节假日11:00-16:00。" />
                <InfoRow icon="🎫" label="门票" value="城堡庭院免费进入。城堡内部及博物馆导览游：成人8欧元，优惠票（学生、残疾人等）6欧元，家庭票（2大+最多4小）20欧元。部分特殊展览需额外付费。" />
                <InfoRow icon="📍" label="地址" value="Schlossberg 1, 06547 Stolberg (Harz), Germany" />
                <InfoRow icon="🚌" label="交通" value="从最近的莱比锡/哈雷机场出发，乘坐火车至“Berga-Kelbra”站，转乘公交至施托尔贝格镇中心，步行约15分钟上山即可抵达，全程约2-2.5小时。从柏林自驾约3小时。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
