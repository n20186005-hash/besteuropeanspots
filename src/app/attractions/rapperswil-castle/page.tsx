import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '拉珀斯维尔城堡 Rapperswil Castle｜苏黎世湖畔的玫瑰与骑士传说 - 最佳欧洲景点',
  description: '嘿，如果你来苏黎世湖区，千万别错过拉珀斯维尔这个童话般的小镇，而它的心脏就是山顶那座拉珀斯维尔城堡。第一眼看到它，你会觉得像走进了中世纪故事书——赭石色的塔楼矗立在蓝天和碧绿的苏黎世湖之间，脚下是开满玫瑰的花园，风里都是花香。爬上古堡的城墙，那种感觉太棒了！一边是红瓦屋顶、蜿蜒小巷的老城，像精致的模...',
}

export default function RapperswilCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '拉珀斯维尔城堡', href: '/attractions/rapperswil-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">拉珀斯维尔城堡・Rapperswil Castle・瑞士・拉珀斯维尔</h1>
          <p className="text-lg text-gray-600 mb-6">
            嘿，如果你来苏黎世湖区，千万别错过拉珀斯维尔这个童话般的小镇，而它的心脏就是山顶那座拉珀斯维尔城堡。第一眼看到它，你会觉得像走进了中世纪故事书——赭石色的塔楼矗立在蓝天和碧绿的苏黎世湖之间，脚下是开满玫瑰的花园，风里都是花香。爬上古堡的城墙，那种感觉太棒了！一边是红瓦屋顶、蜿蜒小巷的老城，像精致的模型；另一边是波光粼粼、帆船点点的广阔湖面，一直延伸到远处的雪山。城堡里还有个波兰博物馆，讲述着一段跨越国界的友谊历史，让石头城堡多了几分人文的温情。这里没有熙熙攘攘的旅行团，更多的是当地散步的家庭和依偎的情侣，氛围悠闲又浪漫。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">嘿，如果你来苏黎世湖区，千万别错过拉珀斯维尔这个童话般的小镇，而它的心脏就是山顶那座拉珀斯维尔城堡。第一眼看到它，你会觉得像走进了中世纪故事书——赭石色的塔楼矗立在蓝天和碧绿的苏黎世湖之间，脚下是开满玫瑰的花园，风里都是花香。爬上古堡的城墙，那种感觉太棒了！一边是红瓦屋顶、蜿蜒小巷的老城，像精致的模型；另一边是波光粼粼、帆船点点的广阔湖面，一直延伸到远处的雪山。城堡里还有个波兰博物馆，讲述着一段跨越国界的友谊历史，让石头城堡多了几分人文的温情。这里没有熙熙攘攘的旅行团，更多的是当地散步的家庭和依偎的情侣，氛围悠闲又浪漫。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="拉珀斯维尔城堡" />
                <InfoRow label="英文名称" value="Rapperswil Castle" />
                <InfoRow label="正式名称" value="Rapperswil Castle" />
                <InfoRow label="国家" value="瑞士" />
                <InfoRow label="城市" value="拉珀斯维尔" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="城堡庭院及花园全年24小时开放。城堡博物馆开放时间：4月至10月，每日10:00-17:00；11月至次年3月，周六、周日及节假日13:00-17:00。" />
              <InfoRow label="门票价格" value="城堡庭院及花园免费。城堡博物馆：成人8瑞士法郎，儿童（6-16岁）4瑞士法郎，家庭票（2成人+2儿童）20瑞士法郎。" />
              <InfoRow label="地址" value="Schloss Rapperswil, 8640 Rapperswil-Jona, 瑞士" />
              <InfoRow label="交通方式" value="从苏黎世机场出发：乘坐火车至拉珀斯维尔站（Rapperswil Bahnhof），车程约45分钟。出站后，沿老城街道步行上山约10-15分钟即可抵达城堡。从苏黎世主火车站出发，火车车程约35分钟。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">拉珀斯维尔城堡的故事始于13世纪初，大约1220年，由拉珀斯维尔家族建造，最初是为了控制从苏黎世湖通往内陆的重要贸易路线，是一座典型的防御性城堡。想象一下，当年骑士们就在这些城垛上巡逻。到了14世纪，城堡被强大的哈布斯堡家族占领，见证了中世纪权力的更迭。但城堡最动人的篇章发生在19世纪。1870年，一位流亡的波兰伯爵——弗拉迪斯拉夫·布罗埃尔-普拉特尔，买下了当时已成废墟的城堡并进行了大规模修复。他不仅让城堡重获新生，更在城堡内建立了波兰博物馆，以感谢瑞士对波兰流亡者的接纳。从此，这座瑞士城堡与波兰文化结下了不解之缘，直到今天。走在城堡里，你能同时感受到瑞士的中世纪坚实和波兰的浪漫爱国情怀，这种奇妙的融合让它格外独特。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐游览路线从山脚下的老城开始，步行上山，全程悠闲游览约需1.5-2小时。起点为拉珀斯维尔火车站，终点在城堡最高处的观景塔楼，沿途可体验从古镇到城堡的完整氛围。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>上山小路是铺着鹅卵石的坡道，建议穿一双舒适防滑的鞋子。小镇路标清晰，跟着“Schloss”的棕色指示牌走就不会迷路。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从火车站出发，穿过老城彩绘房屋的小巷步行上山。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  进入免费的城堡庭院，欣赏厚重的石墙和建筑外观。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  参观城堡内的波兰博物馆，了解其独特的历史渊源。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  登上城堡城墙，360度环览苏黎世湖和老城全景。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  漫步城堡脚下的玫瑰园，欣赏上百种玫瑰与湖景。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  从花园小径下山，回到湖边码头区域。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  城堡城墙西侧</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为下午，阳光柔和。拍摄角度是背对城墙，以苏黎世湖和远山为背景，拍摄人物或城堡塔楼剪影，效果大气磅礴。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  玫瑰园中心喷泉旁</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间是六月玫瑰盛开时的清晨。拍摄角度是以喷泉为前景，城堡塔楼为中景，湖面为背景，画面层次丰富，色彩浪漫。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  老城上坡的拐角处</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为上午，顺光。拍摄角度是从下往上仰拍，捕捉城堡巍然耸立于石板路尽头的经典画面，故事感十足。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 使用广角镜头可以更好地捕捉城堡与湖景的壮阔全景。玫瑰园花期在5月底至9月，此时拍照色彩最美。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  经济之选</h4>
                  <p className="text-sm text-blue-800">拉珀斯维尔或邻近约纳（Jona）的B&B或小型旅馆，价格亲民，体验本地生活。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  品质之选</h4>
                  <p className="text-sm text-green-800">拉珀斯维尔老城内的精品酒店，开窗即是中世纪街景，步行至城堡仅5分钟。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  景观之选</h4>
                  <p className="text-sm text-yellow-800">苏黎世湖边的酒店，部分房间拥有直面湖水和城堡的绝佳阳台景观。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  便捷之选</h4>
                  <p className="text-sm text-purple-800">苏黎世市中心酒店，搭乘火车往返拉珀斯维尔非常方便，适合想集中游览多个城市的游客。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">夏季旅游旺季和周末，湖边小镇住宿紧俏，建议提前预订。住在拉珀斯维尔可以享受清晨和傍晚游客稀少时的宁静城堡。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">拉珀斯维尔城堡不像那些充满王权争斗故事的宏伟宫殿，它更像一位温和的守护者，安静地坐在湖边，看尽了几个世纪的帆影与花开。这里既有历史的厚重感，又被玫瑰、湖风与跨越国界的情谊软化得格外动人。它是一个让你慢下来，用心感受风景、历史和当下宁静片刻的地方，离开时，心里会装满湖光山色和花香。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
