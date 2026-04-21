import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '泽蒙老城 Zemun Old Town｜多瑙河畔的彩色童话小镇 - 最佳欧洲景点',
  description: '想象一下，你从贝尔格莱德喧闹的市中心跳上一辆老式电车，二十分钟后，就像穿越了一样，眼前突然出现一个色彩斑斓、节奏缓慢的河边小镇——这就是泽蒙给我的第一印象。它和多瑙河对岸的贝尔格莱德简直是两个世界！鹅卵石铺成的小路蜿蜒向上，两旁是刷成鹅黄、浅粉、天蓝的奥斯曼风格老房子，阳台上永远摆着盛开的鲜花。最迷...',
}

export default function ZemunOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '塞尔维亚', href: '/destinations/serbia' },
            { label: '泽蒙老城', href: '/attractions/zemun-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">泽蒙老城・Zemun Old Town・塞尔维亚・贝尔格莱德</h1>
          <p className="text-lg text-gray-600 mb-6">
            想象一下，你从贝尔格莱德喧闹的市中心跳上一辆老式电车，二十分钟后，就像穿越了一样，眼前突然出现一个色彩斑斓、节奏缓慢的河边小镇——这就是泽蒙给我的第一印象。它和多瑙河对岸的贝尔格莱德简直是两个世界！鹅卵石铺成的小路蜿蜒向上，两旁是刷成鹅黄、浅粉、天蓝的奥斯曼风格老房子，阳台上永远摆着盛开的鲜花。最迷人的是那股闲散劲儿，老爷爷们在街角咖啡馆下棋，情侣们手牵手沿着多瑙河岸散步，空气里混合着咖啡香和河水的气息。爬到小镇最高处的千禧塔，整个老城的红屋顶和多瑙河的波光尽收眼底，那一刻，你会觉得时间都慢了下来。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">想象一下，你从贝尔格莱德喧闹的市中心跳上一辆老式电车，二十分钟后，就像穿越了一样，眼前突然出现一个色彩斑斓、节奏缓慢的河边小镇——这就是泽蒙给我的第一印象。它和多瑙河对岸的贝尔格莱德简直是两个世界！鹅卵石铺成的小路蜿蜒向上，两旁是刷成鹅黄、浅粉、天蓝的奥斯曼风格老房子，阳台上永远摆着盛开的鲜花。最迷人的是那股闲散劲儿，老爷爷们在街角咖啡馆下棋，情侣们手牵手沿着多瑙河岸散步，空气里混合着咖啡香和河水的气息。爬到小镇最高处的千禧塔，整个老城的红屋顶和多瑙河的波光尽收眼底，那一刻，你会觉得时间都慢了下来。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="泽蒙老城" />
                <InfoRow label="英文名称" value="Zemun Old Town" />
                <InfoRow label="正式名称" value="Zemun Old Town" />
                <InfoRow label="国家" value="塞尔维亚" />
                <InfoRow label="城市" value="贝尔格莱德" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="全天开放（街道及公共区域），内部景点如千禧塔等开放时间各异，通常为10:00-18:00。" />
              <InfoRow label="门票价格" value="进入老城区域免费。登千禧塔门票约200第纳尔（约合1.7欧元）。" />
              <InfoRow label="地址" value="Zemun, Belgrade, Serbia" />
              <InfoRow label="交通方式" value="从贝尔格莱德尼古拉·特斯拉国际机场出发，乘坐出租车约30分钟可达。从贝尔格莱德市中心（如共和国广场）乘坐15、84或706路公交车，约20-30分钟即可抵达泽蒙老城区。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">泽蒙的故事，可以说是一部“边界小镇”的变迁史。它的历史比贝尔格莱德还要悠久，最早可以追溯到古罗马时期。但让它真正形成独特风貌的，是奥斯曼帝国时代。当时，泽蒙是奥斯曼帝国的边境重镇，而多瑙河对岸的贝尔格莱德则属于奥匈帝国，一道河，隔开了两个帝国、两种文明。你能在老建筑上看到这种交融：有些房子带着明显的奥斯曼木结构阳台，而街巷布局又有中欧小镇的影子。最有意思的是那座地标千禧塔，它建于1896年，当时泽蒙已归属奥匈帝国，建塔是为了庆祝匈牙利人在喀尔巴阡盆地定居1000周年，塔身却是中世纪城堡的风格，站在上面，仿佛能听到历史的回响。一战后，泽蒙才随着塞尔维亚一起，融入了南斯拉夫，并最终成为贝尔格莱德的一个区。走在街上，这种层层叠叠的历史感无处不在，它不像博物馆那么严肃，而是活在了每一块鹅卵石和每一面斑驳的墙漆里。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从多瑙河畔的泽蒙码头开始，沿河散步后钻进老城小巷，一路向上攀登至千禧塔俯瞰全景，最后下山在主干道品尝美食。全程步行，悠闲游览约需3-4小时。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>老城小路多坡且铺着鹅卵石，建议穿一双舒适防滑的鞋子。小镇不大，无需精确导航，随意探索小巷常有惊喜。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从泽蒙码头出发，沿着多瑙河岸散步，看天鹅和旧渔船。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  转入Donji Grad区，漫步彩色的主街Gospodska。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  参观圣尼古拉斯教堂，感受安静的宗教氛围。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  沿着蜿蜒的上坡小路，向千禧塔方向攀登。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  登上千禧塔，360度俯瞰老城屋顶与多瑙河。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  下山后在Glavna街找一家传统餐厅（Kafana）享用晚餐。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  千禧塔观景台</h4>
                  <p className="text-sm text-gray-700">日落时分，拍摄塔楼本身与远处贝尔格莱德城市天际线的剪影，效果震撼。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  多瑙河岸步道</h4>
                  <p className="text-sm text-gray-700">清晨或傍晚，以停泊的小船和河面为前景，拍摄对岸色彩缤纷的老房子倒影。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  Gospodska街巷</h4>
                  <p className="text-sm text-gray-700">午后阳光斜射时，捕捉小巷的纵深感与墙面斑驳的色彩，充满生活气息。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  圣尼古拉斯教堂旁</h4>
                  <p className="text-sm text-gray-700">从教堂侧面的小广场，拍摄教堂钟楼与后方千禧塔同框的画面。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 小镇居民生活于此，拍照时请保持礼貌，避免过度打扰私人院落和居民。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  高端河景之选</h4>
                  <p className="text-sm text-blue-800">入住泽蒙水岸的精品酒店，开窗即是多瑙河风光。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  特色体验之选</h4>
                  <p className="text-sm text-green-800">选择老城内的传统风格民宿，沉浸式体验小镇生活。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  性价比之选</h4>
                  <p className="text-sm text-yellow-800">住在泽蒙与贝尔格莱德市区交界处的公寓或酒店，交通便利，价格适中。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  背包客之选</h4>
                  <p className="text-sm text-purple-800">贝尔格莱德市中心有丰富的青旅选择，可乘公交轻松往返泽蒙。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">若想深度感受泽蒙宁静的早晚氛围，非常推荐在此住一晚，与一日游的体验截然不同。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">泽蒙老城就像贝尔格莱德偷偷藏起来的一块宝石，不那么张扬，却充满温情。它用彩色的墙壁、蜿蜒的小路和温柔的河风，轻轻抚平了旅人的匆忙。这里不适合打卡，只适合浪费时光。当你坐在河边的长椅上，看夕阳把多瑙河染成金色，你会明白，有些地方，是用来感受和记住的。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
