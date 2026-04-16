import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '普雷绍夫老城 Prešov Old Town｜漫步斯洛伐克东部“盐都”的彩色巴洛克时光 - 最佳欧洲景点',
  description: '走进普雷绍夫老城，就像不小心闯进了一本褪色的童话书。第一眼就会被主街上那一排排糖果色的巴洛克建筑外墙迷住——粉的、鹅黄的、薄荷绿的，在阳光下温柔得不像话。这里没有布拉格那样的人潮汹涌，时间仿佛被调慢了半拍，你可以悠闲地踩着鹅卵石小路，听自己的脚步声在古老的拱廊下回响。空气里混合着咖啡香和从面包房飘出...',
}

export default function PresovOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '普雷绍夫老城', href: '/attractions/presov-old-town' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">普雷绍夫老城</h1>
          <p className="text-xl text-gray-600 mb-4">Prešov Old Town</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">斯洛伐克</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">普雷绍夫</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">走进普雷绍夫老城，就像不小心闯进了一本褪色的童话书。第一眼就会被主街上那一排排糖果色的巴洛克建筑外墙迷住——粉的、鹅黄的、薄荷绿的，在阳光下温柔得不像话。这里没有布拉格那样的人潮汹涌，时间仿佛被调慢了半拍，你可以悠闲地踩着鹅卵石小路，听自己的脚步声在古老的拱廊下回响。空气里混合着咖啡香和从面包房飘出的甜味，偶尔有电车叮叮当当地从街角驶过，提醒你这依然是一座活着的古城。最让我心动的是那些建筑立面上精致的灰泥雕塑和铁艺招牌，每一个细节都在默默讲述着这座“盐都”昔日的富足与骄傲。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">老城广场及街道全天可自由漫步。圣尼古拉斯主教座堂（Dóm sv. Mikuláša）的塔楼开放时间可能随季节调整，冬季可能缩短。市政厅内的博物馆周一通常闭馆。多数景点对学生、儿童和老年人有优惠票价，建议参观前查看最新信息。老城中心为步行区，自驾需将车停放在周边停车场。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">普雷绍夫的故事，可以说是一部“因盐而兴”的编年史。早在中世纪，这里就因为丰富的盐矿资源而迅速发展起来，到了14世纪，它已经获得了自由皇家城市的地位，财富滚滚而来。你如今看到的那些华丽巴洛克建筑，大多是在17-18世纪城市经济鼎盛时期修建或改建的，商人们竞相用最时尚的立面装饰自己的宅邸，仿佛一场无声的炫富比赛。老城中心的圣尼古拉斯主教座堂是个地标，它的历史可以追溯到14世纪，不过现在我们看到的雄伟样貌主要是18世纪巴洛克改造后的结果。历史上，普雷绍夫一直是多元文化交汇点，斯洛伐克人、德国人、犹太人、匈牙利人都曾在这里留下深刻印记。二战期间，老城遭受了严重破坏，特别是犹太社区的悲剧。战后，人们精心修复了这些彩色建筑，让老城重焕生机。走在街上，你能感受到这种历史的层叠感——中世纪的根基、巴洛克的华丽外表，以及社会主义时期留下的些许痕迹，它们共同构成了这座古城独特而复杂的性格。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">推荐从主街（Hlavná ulica）北端的圣尼古拉斯主教座堂开始，向南漫步，穿过整个色彩斑斓的老城核心区，终点可以设在南端的方济各会教堂或附近的咖啡馆。全程步行游览约需2-3小时，节奏非常轻松。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  仰望圣尼古拉斯主教座堂的哥特式外观与巴洛克塔楼。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  漫步主街，欣赏两侧连绵的彩色巴洛克市民建筑。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  参观老市政厅，了解城市历史。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  寻找散落在街巷中的精美铁艺招牌和雕塑细节。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  探访宁静的方济各会教堂及其庭院。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  在主教座堂附近的“酒窖”餐厅或主街咖啡馆小憩。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">老城不大，完全不需要地图，随意逛逛就是最好的方式。记得穿一双舒适的平底鞋，鹅卵石路面虽然好看但有点硌脚。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **主街中段仰拍**：最佳时间是午后阳光斜射时，以彩色建筑立面为背景，拍摄人物行走或仰望的瞬间，充满故事感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **圣尼古拉斯主教座堂前广场**：清晨人少时，拍摄教堂塔楼与周围古典建筑的完整构图，天空干净，画面宁静。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **某条小巷入口**：利用拱门或巷口作为天然画框，捕捉向内延伸的鹅卵石小道和两侧暖色调墙壁，层次感强。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **寻找特色铁艺招牌**：近距离特写那些造型独特的酒吧、药店招牌，搭配斑驳的墙面，复古味道十足。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">建筑色彩在阴天会显得暗淡，晴天拍摄效果最佳。尊重当地居民隐私，避免透过窗户向私人庭院内拍摄。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **历史中心酒店**：选择主街或广场旁的精品酒店，开窗即是百年风景，价格中上。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **舒适公寓**：老城边缘有许多 renovated apartment，性价比高，带小厨房，适合家庭或长住。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **经济型旅馆**：火车站附近有干净简单的旅馆，步行10-15分钟可达老城，预算友好。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **郊外民宿**：如果自驾，可以考虑城郊安静村庄的民宿，体验斯洛伐克乡村生活。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">老城内的住宿数量有限且更受欢迎，尤其是旺季，建议提前预订。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">普雷绍夫老城就像一个被低调珍藏的宝盒，它没有响彻世界的名号，却拥有最抚慰人心的日常之美。在这里，历史不是冰冷遥远的展品，而是化作了窗台上的鲜花、咖啡馆里飘出的笑语、和墙壁上温柔的色彩。如果你厌倦了打卡式的奔波，想找一个地方真正地“漫步”和“感受”，那么这座斯洛伐克的彩色古城，一定会用它的宁静与诗意，为你留下一段闪着柔光的记忆。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="公共区域全天开放。内部各博物馆、教堂等景点开放时间各异，通常为周二至周日 10:00-17:00。" />
                <InfoRow icon="🎫" label="门票" value="进入老城区域免费。参观内部景点需单独购票，如圣尼古拉斯主教座堂塔楼门票约3欧元，市政厅博物馆门票约2欧元。" />
                <InfoRow icon="📍" label="地址" value="Hlavná ulica, 080 01 Prešov, Slovakia" />
                <InfoRow icon="🚌" label="交通" value="从最近的科希策国际机场（Košice International Airport）出发，驾车或乘坐出租车约30分钟即可抵达普雷绍夫市中心。从斯洛伐克首都布拉迪斯拉发乘坐火车约需4-5小时。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
