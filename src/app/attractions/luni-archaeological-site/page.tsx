import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卢尼古罗马遗址 Luni Archaeological Site｜探秘古罗马月亮女神之城 - 最佳欧洲景点',
  description: '说实话，第一眼看到卢尼遗址，那种感觉挺奇妙的。它不像庞贝那样震撼完整，反而有种被时光温柔掩埋后又重新被发现的宁静感。你走在碎石铺成的古罗马大道上，两旁是剧场、神庙和民居的地基轮廓，阳光把断壁残垣的影子拉得老长。最让我印象深刻的是那座椭圆形的竞技场遗迹，虽然只剩下几层看台的石头基座，但你闭上眼睛，几乎...',
}

export default function LuniArchaeologicalSitePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '卢尼古罗马遗址', href: '/attractions/luni-archaeological-site' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">卢尼古罗马遗址・Luni Archaeological Site・意大利・卢尼（奥尔托诺沃市镇）</h1>
          <p className="text-lg text-gray-600 mb-6">
            说实话，第一眼看到卢尼遗址，那种感觉挺奇妙的。它不像庞贝那样震撼完整，反而有种被时光温柔掩埋后又重新被发现的宁静感。你走在碎石铺成的古罗马大道上，两旁是剧场、神庙和民居的地基轮廓，阳光把断壁残垣的影子拉得老长。最让我印象深刻的是那座椭圆形的竞技场遗迹，虽然只剩下几层看台的石头基座，但你闭上眼睛，几乎能听到两千年前战车飞驰而过的呼啸和观众的呐喊。风从利古里亚海吹来，带着咸味，拂过古老的马赛克碎片，这里曾经是繁华的港口和“月亮女神”之城，如今只剩下蝉鸣和考古学家小心翼翼刷土的沙沙声。整个氛围特别平和，适合慢慢走，慢慢想。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">说实话，第一眼看到卢尼遗址，那种感觉挺奇妙的。它不像庞贝那样震撼完整，反而有种被时光温柔掩埋后又重新被发现的宁静感。你走在碎石铺成的古罗马大道上，两旁是剧场、神庙和民居的地基轮廓，阳光把断壁残垣的影子拉得老长。最让我印象深刻的是那座椭圆形的竞技场遗迹，虽然只剩下几层看台的石头基座，但你闭上眼睛，几乎能听到两千年前战车飞驰而过的呼啸和观众的呐喊。风从利古里亚海吹来，带着咸味，拂过古老的马赛克碎片，这里曾经是繁华的港口和“月亮女神”之城，如今只剩下蝉鸣和考古学家小心翼翼刷土的沙沙声。整个氛围特别平和，适合慢慢走，慢慢想。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="卢尼古罗马遗址" />
                <InfoRow label="英文名称" value="Luni Archaeological Site" />
                <InfoRow label="正式名称" value="Luni Archaeological Site" />
                <InfoRow label="国家" value="意大利" />
                <InfoRow label="城市" value="卢尼（奥尔托诺沃市镇）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="夏季（4月1日-9月30日）：周二至周日 8:30 - 19:30；冬季（10月1日-3月31日）：周二至周日 8:30 - 17:30。每周一闭馆（法定节假日除外）。" />
              <InfoRow label="门票价格" value="全票：5欧元；优惠票（18-25岁欧盟公民）：2欧元；18岁以下及65岁以上欧盟公民免费。每月第一个周日免费开放。" />
              <InfoRow label="地址" value="Via Luni, 19034 Luni SP, Italy" />
              <InfoRow label="交通方式" value="从拉斯佩齐亚中央火车站（La Spezia Centrale）乘坐区域火车至Sarzana站（约10分钟），然后转乘当地巴士或出租车前往遗址（车程约15分钟）。从比萨国际机场自驾前往约需1小时。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">卢尼的故事要从公元前177年说起，那一年罗马人为了征服利古里亚部落并控制这里的港口与大理石资源，正式建立了这座殖民城市。它被命名为“卢尼”，源自罗马的月亮女神露娜，也许是因为这里的海湾在夜晚格外美丽。在罗马共和国和帝国时期，卢尼因为其战略港口和附近卡拉拉地区优质白色大理石的出口而繁荣一时，那些大理石被运往罗马，用来建造万神殿等伟大建筑。你可以想象一下，码头边起重机轰鸣，满载着巨型石料的船只驶向远方。公元5世纪后，随着蛮族入侵、疟疾肆虐以及港口淤塞，这座城市逐渐衰落，居民迁往内陆，它最终被遗弃，沉睡在泥土和荒草之下。直到19世纪，考古发掘才让它重见天日。走在遗址里，触摸那些被海风侵蚀了千年的石头，你会感到历史不是教科书上的一行字，而是脚下真真切切的温度，是一个文明从崛起到沉寂的完整呼吸。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  建议游览时间约2-3小时。路线呈环形，从入口处的博物馆开始，先了解背景，然后进入遗址区，依次参观广场、神庙、民居区，最后到达竞技场和港口遗迹，从另一个方向绕回入口。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>遗址内路径多为沙土和草地，建议穿舒适耐走的平底鞋或运动鞋。标识清晰，无需导航也能轻松游览。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  参观入口处的考古博物馆，观看出土雕塑和马赛克。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  步入古罗马广场，感受城市公共生活的中心。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  探索朱庇特神庙的地基和台阶。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  穿过典型的罗马中产阶级民居遗址，看残存的马赛克地板。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  抵达椭圆竞技场，想象当年的盛大场面。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  走向远处的港口遗迹区，眺望曾经的沧海桑田。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  竞技场看台高处</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为下午日落前1小时。从高处向下拍摄竞技场椭圆形全景，利用长阴影增强结构的立体感和沧桑感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  罗马大道中心点</h4>
                  <p className="text-sm text-gray-700">最佳时间为正午前后阳光直射时。站在道路中央，采用对称构图向前或向后拍摄，两侧的遗迹残墙形成自然的引导线，画面充满纵深感。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  博物馆外的廊柱遗迹</h4>
                  <p className="text-sm text-gray-700">最佳时间为清晨或晴天的上午。以单根或数根屹立的罗马柱为前景，聚焦于柱体的纹理和雕饰，虚化后方的绿色田野，营造孤独而永恒的氛围。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 请勿使用无人机（禁飞区），并避免为了拍照而攀爬或踩踏脆弱的古老墙体。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  经济便捷</h4>
                  <p className="text-sm text-blue-800">萨扎纳镇上的B&B或小型旅馆，价格亲民，乘车往返遗址方便。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  海滨风情</h4>
                  <p className="text-sm text-green-800">住在附近的海滨小镇莱里奇或韦内雷港，享受利古里亚海岸风光，自驾约20-30分钟可达遗址。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  古城体验</h4>
                  <p className="text-sm text-yellow-800">入住拉斯佩齐亚市中心的酒店，交通枢纽选择多，晚上可逛老城区。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  特色农庄</h4>
                  <p className="text-sm text-purple-800">遗址周边乡村有一些Agriturismo（农家乐），环境安静，可体验托斯卡纳-利古里亚边境的乡村生活。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">夏季是旅游旺季，海滨住宿需提前预订。如果想深度游览，住在萨扎纳是最折中方便的选择。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">卢尼像一首沉默的史诗，需要你静下心来聆听。它没有喧嚣的游客，只有风、石头和历史对话的声音。在这里，你能触摸到罗马帝国毛细血管末端的生活痕迹，那种繁华落尽后的平静格外动人。如果你厌倦了人挤人的热门景点，想找一个地方发呆、怀古，感受时间的重量，那么卢尼绝对不会让你失望。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
