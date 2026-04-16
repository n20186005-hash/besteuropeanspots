import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '克莱沃城堡 Kasteel de Haar｜荷兰最奢华的中世纪复兴城堡与梦幻花园 - 最佳欧洲景点',
  description: '朋友，想象一下，你穿过一片宁静的荷兰乡村，突然，一座拥有尖塔、护城河和吊桥的童话城堡跃然眼前，那就是克莱沃城堡给我的第一印象！它不像有些古堡那样沧桑破败，而是像刚从童话书里搬出来一样，精致、华丽，甚至有点“新”。走进城堡内部更是震撼，仿佛穿越到了19世纪末的顶级贵族派对现场。每个房间都极尽奢华，从宴...',
}

export default function KasteelDeHaarPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '克莱沃城堡', href: '/attractions/kasteel-de-haar' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">克莱沃城堡・Kasteel de Haar・荷兰・乌特勒支附近的海尔许霍瓦德</h1>
          <p className="text-lg text-gray-600 mb-6">
            朋友，想象一下，你穿过一片宁静的荷兰乡村，突然，一座拥有尖塔、护城河和吊桥的童话城堡跃然眼前，那就是克莱沃城堡给我的第一印象！它不像有些古堡那样沧桑破败，而是像刚从童话书里搬出来一样，精致、华丽，甚至有点“新”。走进城堡内部更是震撼，仿佛穿越到了19世纪末的顶级贵族派对现场。每个房间都极尽奢华，从宴会厅的水晶吊灯到卧室的丝绸壁毯，无不透露着当年范·祖伦家族（城堡主人）的财富与品味。最让我流连的是那个巨大的法式花园，修剪整齐的树篱、宁静的湖泊和浪漫的小径，逛起来特别舒服。这里既有历史的厚重感，又有一种精心维护的梦幻氛围，特别适合拍美照和悠闲地度过一天。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">朋友，想象一下，你穿过一片宁静的荷兰乡村，突然，一座拥有尖塔、护城河和吊桥的童话城堡跃然眼前，那就是克莱沃城堡给我的第一印象！它不像有些古堡那样沧桑破败，而是像刚从童话书里搬出来一样，精致、华丽，甚至有点“新”。走进城堡内部更是震撼，仿佛穿越到了19世纪末的顶级贵族派对现场。每个房间都极尽奢华，从宴会厅的水晶吊灯到卧室的丝绸壁毯，无不透露着当年范·祖伦家族（城堡主人）的财富与品味。最让我流连的是那个巨大的法式花园，修剪整齐的树篱、宁静的湖泊和浪漫的小径，逛起来特别舒服。这里既有历史的厚重感，又有一种精心维护的梦幻氛围，特别适合拍美照和悠闲地度过一天。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="克莱沃城堡" />
                <InfoRow label="英文名称" value="Kasteel de Haar" />
                <InfoRow label="正式名称" value="Kasteel de Haar" />
                <InfoRow label="国家" value="荷兰" />
                <InfoRow label="城市" value="乌特勒支附近的海尔许霍瓦德" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="城堡内部：周二至周日 11:00-17:00（最后入场时间16:00）；花园与公园：每日10:00-17:00。城堡内部通常在周一及部分节假日（如圣诞节、元旦）关闭，具体日期每年略有调整。" />
              <InfoRow label="门票价格" value="成人票（城堡+花园）：€19.00；仅花园票：€7.50。4-12岁儿童有优惠票，4岁以下免费。官网在线购票可能享有小幅折扣。" />
              <InfoRow label="地址" value="Kasteellaan 1, 3455 RR Haarzuilens, Netherlands" />
              <InfoRow label="交通方式" value="从阿姆斯特丹史基浦机场出发，最便捷的方式是乘坐火车至乌特勒支中央车站（约30分钟），然后在车站外的公交站换乘127路公交车，在“Haarzuilens, Kasteel”站下车（约25分钟），步行几分钟即可到达城堡入口。从乌特勒支市中心自驾前往约需20分钟。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">克莱沃城堡的故事就像一部跨越了几个世纪的连续剧。它的起源可以追溯到13世纪，最初是一座简单的防御性堡垒。不过，在经历了数百年的风雨、战火和继承纠纷后，到19世纪时，老城堡已经几乎沦为一片浪漫的废墟。真正的转折点发生在1892年，城堡传到了埃蒂安·范·祖伦男爵和他那位来自罗斯柴尔德银行家族的妻子海伦手中。这对富可敌国的夫妇决定——不是修复，而是彻底重建！他们聘请了著名的荷兰建筑师皮埃尔·库伊珀斯（也是阿姆斯特丹中央车站和国家博物馆的设计者），进行了一场浩大的“中世纪复兴”工程。库伊珀斯保留了部分中世纪结构，但更多地是创造了一座融合了中世纪外观和19世纪最先进舒适设施的“梦幻城堡”，甚至为此重建了整个海尔许霍瓦德村庄来匹配城堡的风格。工程持续了近20年，最终在1912年完工。二战期间，城堡曾被德军征用，战后归还家族。如今，城堡仍为范·祖伦家族所有，但作为博物馆向公众开放。漫步其中，你不仅能感受到中世纪的氛围，更能体会到19世纪末欧洲顶级富豪对“完美家园”的极致追求，那种新旧交织的感觉非常独特。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐游览时间为3-4小时。路线通常从城堡正门外的护城河和吊桥开始，先游览壮观的外部建筑，然后进入城堡内部跟随导览参观主要厅室，最后花1-1.5小时悠闲地探索巨大的花园和公园。终点通常是花园的出口或城堡咖啡馆。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>内部参观必须跟随导览团，英语团次有限，建议提前查好时间或预订。花园面积很大，穿一双舒适的步行鞋非常必要。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从正门跨越护城河与吊桥，感受城堡的宏伟第一印象。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  进入城堡内部，依次参观奢华的大厅、宴会厅、骑士厅和私人礼拜堂。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  上楼探索装饰华丽的卧室、书房等私人生活空间。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  导览结束后，自由漫步于城堡后方巨大的法式花园。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  探索公园内的湖泊、林间小道和浪漫的鹿园。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  在城堡咖啡馆或花园露台休息，享用茶点。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  护城河前正面全景</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为上午或日落前，阳光能照亮城堡正面。站在吊桥入口附近，将城堡的倒影和护城河一同摄入画面，效果非常经典。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  法式花园树篱迷宫</h4>
                  <p className="text-sm text-gray-700">下午光线柔和时，站在花园中心轴线回望城堡，利用几何形状的树篱作为前景，能拍出极具对称感和纵深感的照片。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  城堡后方湖泊倒影</h4>
                  <p className="text-sm text-gray-700">晴朗无风的早晨，在湖泊对岸拍摄，城堡和树林的倒影清晰完美，画面宁静如画。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  玫瑰园拱门</h4>
                  <p className="text-sm text-gray-700">夏季玫瑰花盛开时，以拱门为框，拍摄后面的城堡塔楼，充满浪漫和层次感。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 城堡内部禁止拍照，请尊重规定。外部和花园区域可以尽情拍摄，使用无人机需要提前申请特别许可。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  高端历史体验</h4>
                  <p className="text-sm text-blue-800">入住乌特勒支市中心的Grand Hotel Karel V，这是一家由历史建筑改造的五星级酒店，风格与城堡遥相呼应。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  中档便捷之选</h4>
                  <p className="text-sm text-green-800">选择乌特勒支中央车站附近的NH Utrecht，交通极其便利，方便前往城堡及探索乌特勒支老城。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  经济舒适型</h4>
                  <p className="text-sm text-yellow-800">考虑乌特勒支市郊或机场附近的宜必思或假日酒店，性价比高，适合自驾游客。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  独特乡村风情</h4>
                  <p className="text-sm text-purple-800">在海尔许霍瓦德村庄内寻找特色民宿(B&B)，体验与城堡为邻的宁静清晨。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">乌特勒支作为交通枢纽，住宿选择远多于城堡周边的小村庄，且餐饮和娱乐选择也更丰富，建议将住宿定在乌特勒支。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">克莱沃城堡带给我的，是一种精心编织的梦幻感。它不像那些饱经沧桑的古迹让人感慨时光无情，而是展现了人类如何用财富和热情去复活一个童话。无论是站在华丽的宴会厅想象昔日的衣香鬓影，还是在静谧的花园里享受片刻安宁，这里都能满足你对欧洲城堡最浪漫的想象。它完美、精致，甚至有点不真实，但正是这份极致的浪漫，让它成为逃离日常、走进故事书里的绝佳目的地。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
