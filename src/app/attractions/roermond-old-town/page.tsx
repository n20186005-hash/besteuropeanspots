import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '鲁尔蒙德老城 Roermond Old Town｜漫步在马斯河畔的彩色历史画卷 - 最佳欧洲景点',
  description: '嘿，如果你喜欢那种不慌不忙、一步一景的小城漫步，鲁尔蒙德老城绝对是个惊喜。这里没有阿姆斯特丹的喧嚣，取而代之的是马斯河温柔的波光和两岸彩色的山形墙房子。第一眼看到老城，你会觉得像走进了一本立体的历史画册，鹅卵石小路弯弯曲曲，不知名的巷子口总藏着可爱的咖啡馆。最迷人的是那种氛围——教堂的钟声定时响起，...',
}

export default function RoermondOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '鲁尔蒙德老城', href: '/attractions/roermond-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">鲁尔蒙德老城・Roermond Old Town・荷兰・鲁尔蒙德</h1>
          <p className="text-lg text-gray-600 mb-6">
            嘿，如果你喜欢那种不慌不忙、一步一景的小城漫步，鲁尔蒙德老城绝对是个惊喜。这里没有阿姆斯特丹的喧嚣，取而代之的是马斯河温柔的波光和两岸彩色的山形墙房子。第一眼看到老城，你会觉得像走进了一本立体的历史画册，鹅卵石小路弯弯曲曲，不知名的巷子口总藏着可爱的咖啡馆。最迷人的是那种氛围——教堂的钟声定时响起，河边的人们悠闲地喝着啤酒，空气里混合着咖啡香和河水微腥的气息。它不是那种需要你“打卡”的景点，而是邀请你“生活”片刻的地方。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">嘿，如果你喜欢那种不慌不忙、一步一景的小城漫步，鲁尔蒙德老城绝对是个惊喜。这里没有阿姆斯特丹的喧嚣，取而代之的是马斯河温柔的波光和两岸彩色的山形墙房子。第一眼看到老城，你会觉得像走进了一本立体的历史画册，鹅卵石小路弯弯曲曲，不知名的巷子口总藏着可爱的咖啡馆。最迷人的是那种氛围——教堂的钟声定时响起，河边的人们悠闲地喝着啤酒，空气里混合着咖啡香和河水微腥的气息。它不是那种需要你“打卡”的景点，而是邀请你“生活”片刻的地方。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="鲁尔蒙德老城" />
                <InfoRow label="英文名称" value="Roermond Old Town" />
                <InfoRow label="正式名称" value="Roermond Old Town" />
                <InfoRow label="国家" value="荷兰" />
                <InfoRow label="城市" value="鲁尔蒙德" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="公共区域全天开放，城内各商店、餐厅及教堂等具体开放时间各异。" />
              <InfoRow label="门票价格" value="进入老城区域免费，参观城内特定景点（如圣克里斯托弗大教堂）可能需要门票。" />
              <InfoRow label="地址" value="Roermond City Centre, 6041 GM Roermond, Netherlands" />
              <InfoRow label="交通方式" value="从最近的埃因霍温机场出发，乘坐火车直达鲁尔蒙德站，车程约1小时。从火车站步行至老城中心仅需5-10分钟。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">鲁尔蒙德的故事，可以说是一部浓缩的荷兰南部编年史。它的名字最早在10世纪的文件中被提及，但真正作为城市发展起来是在13世纪，当时它获得了城市权，并因为位于马斯河的战略位置而繁荣起来，成了贸易和宗教中心。你如今看到的圣克里斯托弗大教堂，那座雄伟的哥特式建筑，就是从1410年开始修建的，它见证了城市的黄金时代。不过，历史也有残酷的一面，尤其是在二战末期。1945年，撤退的德军炸毁了马斯河上的所有桥梁，并严重破坏了老城中心，包括那座美丽的市政厅。现在漫步在老城，你会发现很多建筑看起来“古色古香”，但其实都是战后精心重建的。这种“重生”的感觉特别打动我，它让历史不是冰冷的石头，而是一种坚韧的生命力。今天的鲁尔蒙德，完美融合了这段厚重的历史与现代化的活力（比如它旁边就是欧洲著名的设计师奥特莱斯），这种反差本身也很有趣。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从标志性的马斯河老石桥（Oude Roermondse Brug）开始，过桥进入老城核心区，沿着鹅卵石主街漫步，探访大教堂和市场广场，最后绕回河畔。全程步行缓慢游览，大约需要2-3小时。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>老城不大，完全不需要导航，随心所欲地迷路才是最佳体验。记得穿一双舒适的平底鞋，因为鹅卵石路面对高跟鞋不太友好。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从老石桥过河，欣赏马斯河与老城天际线的经典视角。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  进入马克特街（Marktstraat），感受两旁色彩缤纷的历史建筑。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  参观圣克里斯托弗大教堂，仰望其高耸的塔楼。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  来到市集广场（Markt），看看修复后的市政厅和历史建筑立面。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  随意钻进一条小巷，比如Zwartbroekstraat，发现小众的店铺或庭院。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  沿河岸散步，找一家露天咖啡馆坐下，结束旅程。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  老石桥中段</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为清晨或日落时分。面向老城方向拍摄，可以将教堂塔楼、彩色房屋和河面倒影一同纳入画面，效果宁静而经典。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  市集广场一角</h4>
                  <p className="text-sm text-gray-700">下午阳光能较好照亮广场建筑立面。以市政厅为背景，拍摄广场上的人群和咖啡馆露台，充满生活气息。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  马斯河对岸的河滨步道</h4>
                  <p className="text-sm text-gray-700">蓝调时刻（日落后）。拍摄老城整体的灯火倒映在河中的景象，色彩斑斓，浪漫梦幻。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 尊重当地居民隐私，避免透过窗户拍摄私人住宅内部。使用无人机前，请务必查阅当地法规。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  奢华之选</h4>
                  <p className="text-sm text-blue-800">入住老城内的精品设计酒店，如由历史建筑改造的酒店，沉浸式体验古城夜晚的静谧。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  性价比之选</h4>
                  <p className="text-sm text-green-800">选择火车站附近的中档酒店，步行到老城方便，且通常性价比更高。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  特色之选</h4>
                  <p className="text-sm text-yellow-800">预订马斯河畔的B&B（民宿），开窗即是河景，享受被水声唤醒的早晨。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  便利之选</h4>
                  <p className="text-sm text-purple-800">对于购物爱好者，可以选择毗邻设计师奥特莱斯购物村的酒店，兼顾游览与购物。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">旺季（特别是夏季和圣诞市场期间）建议提前预订。住在老城内虽然价格稍高，但能获得独一无二的夜间和清晨体验，此时游客稀少，古城完全属于你。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">鲁尔蒙德老城就像一个善于讲故事的老人，不疾不徐，用砖瓦、河流和钟声诉说着过往。它或许没有世界级的知名度，但正是这份低调的优雅和劫后重生的从容，让它显得格外真实和温暖。在这里，旅行的意义从“观看”变成了“感受”，非常推荐给想寻找欧洲小镇宁静本味的你。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
