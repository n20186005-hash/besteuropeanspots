import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '约阿尼纳老城 Ioannina Old Town｜漫步在帕姆沃蒂斯湖畔的奥斯曼风情古城 - 最佳欧洲景点',
  description: '想象一下，你站在帕姆沃蒂斯湖边，对岸就是一片依山而建、白墙红瓦的老城，湖面倒映着城堡的轮廓，几只天鹅缓缓游过——这就是约阿尼纳老城给你的第一眼震撼。这里不像雅典卫城那样充满古典希腊的肃穆，而是一种奇妙的混合体：狭窄的鹅卵石小巷、带有精美木雕阳台的奥斯曼时期老宅、东正教教堂的钟声与远处清真寺唤礼塔的剪...',
}

export default function IoanninaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '约阿尼纳老城', href: '/attractions/ioannina-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">约阿尼纳老城・Ioannina Old Town・希腊・约阿尼纳</h1>
          <p className="text-lg text-gray-600 mb-6">
            想象一下，你站在帕姆沃蒂斯湖边，对岸就是一片依山而建、白墙红瓦的老城，湖面倒映着城堡的轮廓，几只天鹅缓缓游过——这就是约阿尼纳老城给你的第一眼震撼。这里不像雅典卫城那样充满古典希腊的肃穆，而是一种奇妙的混合体：狭窄的鹅卵石小巷、带有精美木雕阳台的奥斯曼时期老宅、东正教教堂的钟声与远处清真寺唤礼塔的剪影交织在一起。空气中飘着现煮希腊咖啡和烤肉的香气，巷子里的银器作坊传来叮叮当当的敲打声，老师傅们还在用几个世纪传下来的手艺制作著名的约阿尼纳银饰。走在其中，你会感觉自己穿越到了一个时间流速不同的地方，历史在这里不是教科书，而是触手可及的墙壁、声音和味道。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">想象一下，你站在帕姆沃蒂斯湖边，对岸就是一片依山而建、白墙红瓦的老城，湖面倒映着城堡的轮廓，几只天鹅缓缓游过——这就是约阿尼纳老城给你的第一眼震撼。这里不像雅典卫城那样充满古典希腊的肃穆，而是一种奇妙的混合体：狭窄的鹅卵石小巷、带有精美木雕阳台的奥斯曼时期老宅、东正教教堂的钟声与远处清真寺唤礼塔的剪影交织在一起。空气中飘着现煮希腊咖啡和烤肉的香气，巷子里的银器作坊传来叮叮当当的敲打声，老师傅们还在用几个世纪传下来的手艺制作著名的约阿尼纳银饰。走在其中，你会感觉自己穿越到了一个时间流速不同的地方，历史在这里不是教科书，而是触手可及的墙壁、声音和味道。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="约阿尼纳老城" />
                <InfoRow label="英文名称" value="Ioannina Old Town" />
                <InfoRow label="正式名称" value="Ioannina Old Town" />
                <InfoRow label="国家" value="希腊" />
                <InfoRow label="城市" value="约阿尼纳" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="老城区域全天开放，内部各博物馆、城堡等景点开放时间各异，通常为周二至周日 8:30-15:00。" />
              <InfoRow label="门票价格" value="进入老城区域免费。参观内部城堡（Its Kale）、阿里帕夏博物馆等单独景点需购票，票价约2-6欧元。" />
              <InfoRow label="地址" value="Ioannina Old Town, Ioannina 452 21, Greece" />
              <InfoRow label="交通方式" value="从约阿尼纳国家机场（IOA）出发，乘坐出租车约20分钟即可抵达老城。从雅典乘火车或长途巴士至约阿尼纳市巴士总站，再换乘市内公交或步行约15-20分钟可达老城边缘。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">约阿尼纳老城的故事，是一部浓缩的巴尔干史诗。它的繁荣始于拜占庭时期，但真正留下深刻烙印的是奥斯曼土耳其帝国长达近五个世纪的统治。当你走在“城堡”（Kastro）区域内，那厚重的城墙和坚固的堡垒，大部分都是奥斯曼时代的产物。老城最传奇的人物莫过于阿里帕夏，这位18世纪末19世纪初的实际统治者，被称为“约阿尼纳的雄狮”。他半独立于奥斯曼苏丹，将这里变成了一个繁荣的文化与商业中心，他的宫廷甚至吸引了英国诗人拜伦来访。阿里帕夏的故事充满权谋与浪漫，最终他在湖心岛上的修道院被苏丹的刺客追杀身亡，为老城增添了一抹悲剧色彩。19世纪后期，随着希腊独立战争，这里回归希腊。但奥斯曼的建筑、穆斯林社区（尽管大部分在人口交换后迁离）的痕迹与东正教传统深深融合，形成了今天你看到的独特文化拼图。站在城堡高处，俯瞰湖泊与城市，你能感受到层层历史就像老房子的墙皮，剥开一层，底下还有更古老的故事。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从临湖的Mavili广场附近进入老城，先沿湖漫步感受全景，然后上行深入城堡区和迷宫般的老街巷，最后参观核心博物馆。全程步行游览约需3-4小时，轻松探索则可能需要大半天。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>老城小巷如迷宫，但迷失其中正是乐趣所在，主要路标指向城堡和湖泊即可。一定要穿非常舒适的平底鞋。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从湖滨步道开始，欣赏帕姆沃蒂斯湖和老城全景。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  通过主城门进入“城堡”区域，感受厚重的防御工事。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  漫步阿斯兰帕夏清真寺广场，参观周边的历史建筑。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  钻入老城狭窄的市集小巷，寻找银器作坊和传统咖啡馆。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  参观Its Kale城堡内的阿里帕夏博物馆和拜占庭博物馆。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  从城堡高处俯瞰，结束游览。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  帕姆沃蒂斯湖对岸</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为清晨或日落时分，湖面平静，可拍摄老城城堡群与水中倒影的全景，氛围感十足。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  阿斯兰帕夏清真寺前广场</h4>
                  <p className="text-sm text-gray-700">上午阳光能较好照亮清真寺立面，以清真寺唤礼塔和老建筑为背景，拍摄建筑细节和广场生活场景。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  Its Kale城堡城墙之上</h4>
                  <p className="text-sm text-gray-700">全天皆可，但傍晚光线最佳。从制高点向下拍摄，可捕捉红瓦屋顶层层叠叠、小巷蜿蜒直至湖边的经典构图。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  老城银器街巷</h4>
                  <p className="text-sm text-gray-700">利用狭窄巷道的纵深感，拍摄匠人工作的场景或挂着传统招牌的店铺门面，充满生活气息。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 拍摄当地居民或工匠前，最好先微笑示意并获得同意，以示尊重。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  老城内精品酒店/传统旅馆</h4>
                  <p className="text-sm text-blue-800">沉浸式体验奥斯曼老宅风情，但可能需提行李走台阶。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  帕姆沃蒂斯湖畔现代酒店</h4>
                  <p className="text-sm text-green-800">视野开阔，设施较新，步行至老城约5-10分钟。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  新城区的商务型酒店</h4>
                  <p className="text-sm text-yellow-800">性价比高，选择多，乘坐公交或打车前往老城方便。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  特色民宿</h4>
                  <p className="text-sm text-purple-800">分散在老城边缘或安静街区，能更深入了解当地人的生活。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">若选择老城内住宿，请确认酒店是否提供行李搬运协助，因为车辆通常无法直达门口。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">约阿尼纳老城的美，在于它的复杂与和谐。它没有试图抹去任何一段历史，而是让拜占庭的根基、奥斯曼的躯干和现代希腊的灵魂共生于此。这里不只是一个旅游景点，更是一个仍然呼吸着的社区。离开时，你带走的可能不是某张明信片般的标准照片，而是午后小巷里咖啡的香气、银器敲打的节奏，以及那种在历史夹缝中悠然自得的南欧慢生活气息。如果你厌倦了只有古迹的废墟，渴望一个活着的、有烟火气的历史小镇，这里绝对会给你惊喜。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
