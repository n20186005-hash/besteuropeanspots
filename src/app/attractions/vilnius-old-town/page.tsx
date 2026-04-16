import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '维尔纽斯老城 Vilnius Old Town｜波罗的海的巴洛克露天博物馆 - 最佳欧洲景点',
  description: '走进维尔纽斯老城，就像一头扎进了一本厚重的、用石头写成的故事书。这里没有那种拒人千里的精致感，反而有种随性又充满生命力的气息。鹅卵石小路弯弯曲曲，不知道下一秒会把你引向一座安静的巴洛克教堂庭院，还是一个飘着咖啡香的小广场。最让我着迷的是那种混搭风——哥特式的圣安娜教堂精致得像姜饼屋，旁边可能就是苏联...',
}

export default function VilniusOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '维尔纽斯老城', href: '/attractions/vilnius-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">维尔纽斯老城・Vilnius Old Town・立陶宛・维尔纽斯</h1>
          <p className="text-lg text-gray-600 mb-6">
            走进维尔纽斯老城，就像一头扎进了一本厚重的、用石头写成的故事书。这里没有那种拒人千里的精致感，反而有种随性又充满生命力的气息。鹅卵石小路弯弯曲曲，不知道下一秒会把你引向一座安静的巴洛克教堂庭院，还是一个飘着咖啡香的小广场。最让我着迷的是那种混搭风——哥特式的圣安娜教堂精致得像姜饼屋，旁边可能就是苏联时期的老建筑，再转个弯，犹太区的历史痕迹又悄然浮现。在老城的高处，格迪米纳斯塔楼静静矗立，俯瞰着这片由红屋顶、教堂尖顶和庭院组成的迷宫。在这里，最好的游览方式就是“迷路”，每一个转角都有惊喜。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">走进维尔纽斯老城，就像一头扎进了一本厚重的、用石头写成的故事书。这里没有那种拒人千里的精致感，反而有种随性又充满生命力的气息。鹅卵石小路弯弯曲曲，不知道下一秒会把你引向一座安静的巴洛克教堂庭院，还是一个飘着咖啡香的小广场。最让我着迷的是那种混搭风——哥特式的圣安娜教堂精致得像姜饼屋，旁边可能就是苏联时期的老建筑，再转个弯，犹太区的历史痕迹又悄然浮现。在老城的高处，格迪米纳斯塔楼静静矗立，俯瞰着这片由红屋顶、教堂尖顶和庭院组成的迷宫。在这里，最好的游览方式就是“迷路”，每一个转角都有惊喜。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="维尔纽斯老城" />
                <InfoRow label="英文名称" value="Vilnius Old Town" />
                <InfoRow label="正式名称" value="Vilnius Old Town" />
                <InfoRow label="国家" value="立陶宛" />
                <InfoRow label="城市" value="维尔纽斯" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="全天开放（公共区域）。内部各教堂、博物馆等景点开放时间各异，通常为10:00-18:00。" />
              <InfoRow label="门票价格" value="进入老城区域免费。内部各景点单独收费，如维尔纽斯大教堂塔楼门票约6欧元，圣安娜教堂参观免费（建议捐赠）。" />
              <InfoRow label="地址" value="Vilniaus senamiestis, 01143 Vilnius, Lithuania" />
              <InfoRow label="交通方式" value="从维尔纽斯国际机场出发：乘坐1号或2号巴士至“火车站”或“大教堂广场”站，车程约20-25分钟。从维尔纽斯中央火车站出发：步行约15-20分钟即可到达老城边缘。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">维尔纽斯老城的故事，得从14世纪立陶宛大公格迪米纳斯的一个梦说起。传说他梦见山丘上一只巨大的铁狼嚎叫，声音响彻四方。解梦人说这预示着要在此建立一座伟大的城市。于是，维尔纽斯就在格迪米纳斯塔楼所在的山丘上诞生了。中世纪时，它已是东欧重要的政治和商业中心，后来成了波兰-立陶宛联邦的一部分，这让天主教、东正教、犹太教等多种文化在这里交融共生，留下了风格各异的建筑。你可以从圣安娜教堂的烈焰般的哥特式线条，看到当时工匠的极致追求；从维尔纽斯大学这座东欧最古老的大学建筑群里，感受到文艺复兴的气息。然而历史并非总是温情，老城也见证了二战和苏联时期的创伤，犹太区几乎被摧毁。但立陶宛人像守护珍宝一样守护着这里，一砖一瓦地修复。1994年，它被列入世界遗产，不仅因为它的美，更因为它是一部立陶宛乃至整个波罗的海地区坎坷而坚韧的立体史书。走在街上，你能触摸到的不仅是冰冷的石头，更是几个世纪以来人们的信仰、智慧与生命力。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从老城的“客厅”——大教堂广场开始，先感受宏大气氛，然后登上格迪米纳斯塔楼俯瞰全景。之后深入老城迷宫般的街道，探访标志性教堂和宁静庭院，最后在皮利斯街附近结束。全程步行，慢慢逛大约需要4-5小时。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>老城街道像迷宫，可以放心随意探索，不必严格遵循路线。使用手机地图导航会很方便。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  起点大教堂广场，参观维尔纽斯大教堂及钟楼。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  登上格迪米纳斯塔楼，俯瞰老城全景。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  漫步至圣安娜教堂和伯纳丁教堂，欣赏哥特式建筑瑰宝。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  探访维尔纽斯大学建筑群，感受古老学术氛围。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  穿过黎明之门，这是老城九座城门中唯一留存的一座。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  在皮利斯街附近结束，这里是老城最古老的街道之一。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  格迪米纳斯塔楼观景台</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为晴天的清晨或傍晚。从塔楼向西拍摄，可以捕捉到老城连绵的红屋顶、教堂尖顶与蜿蜒的维尔尼亚河同框的经典全景。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  圣安娜教堂前的小桥</h4>
                  <p className="text-sm text-gray-700">全天皆可，但下午阳光能较好照亮教堂立面。站在教堂前的小桥上拍摄，可以利用河道作为前景，将圣安娜教堂精致的哥特式立面与水中倒影一同纳入镜头。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  黎明之门内部</h4>
                  <p className="text-sm text-gray-700">白天光线从窗户照射进来时。从城门内侧向上仰拍，可以拍到光线穿过窗户照亮古老壁画的神圣氛围感照片。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  皮利斯街的鹅卵石路</h4>
                  <p className="text-sm text-gray-700">清晨或午后行人较少时。在街道中央低角度拍摄，让蜿蜒的鹅卵石路引向远处的教堂尖顶，富有纵深感。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 拍摄教堂内部前请务必确认是否允许拍照，并永远关闭闪光灯，以示尊重。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  高端历史体验</h4>
                  <p className="text-sm text-blue-800">选择老城广场周边的精品酒店，由历史建筑改建，位置绝佳。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  中档舒适之选</h4>
                  <p className="text-sm text-green-800">入住老城边缘或Užupis对岸区域的现代设计酒店，安静且性价比高。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  经济便利</h4>
                  <p className="text-sm text-yellow-800">老城内或火车站附近有众多评价不错的青年旅舍和民宿。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  艺术氛围</h4>
                  <p className="text-sm text-purple-800">可以考虑住在Užupis“对岸共和国”区域，体验独特的波西米亚艺术社区氛围。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">夏季旅游旺季需提前预订。住在老城内虽然方便，但夜间酒吧区可能有些喧闹。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">维尔纽斯老城不是一个被精心包装的旅游产品，它真实、复杂，带着历史的皱纹和生活的温度。在这里，你能感受到一种平静而坚韧的力量。它或许没有西欧名城那般声名显赫，但正是这份低调与真实，让每一次不经意的邂逅都显得格外动人。如果你厌倦了人潮，想找一个可以静静品味历史、慢慢浪费时光的地方，这里再合适不过了。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
