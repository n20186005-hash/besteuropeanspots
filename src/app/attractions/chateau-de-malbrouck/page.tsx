import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '马尔旺城堡 Château de Malbrouck｜摩泽尔河畔的防御艺术杰作 - 最佳欧洲景点',
  description: '第一眼看到马尔旺城堡，它就像是从童话书里直接搬出来的！这座石头堡垒雄踞在一座绿色山丘上，被茂密的森林环绕，四个角上耸立着醒目的圆塔，气势十足。走近了才发现，它保存得异常完好，护城河、吊桥、厚重的城墙，中世纪防御体系一目了然。走进城堡内部，感觉瞬间穿越了。阳光透过狭小的窗户射进来，在古老的石墙上投下光...',
}

export default function ChateauDeMalbrouckPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '马尔旺城堡', href: '/attractions/chateau-de-malbrouck' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">马尔旺城堡・Château de Malbrouck・法国・梅斯泰尔</h1>
          <p className="text-lg text-gray-600 mb-6">
            第一眼看到马尔旺城堡，它就像是从童话书里直接搬出来的！这座石头堡垒雄踞在一座绿色山丘上，被茂密的森林环绕，四个角上耸立着醒目的圆塔，气势十足。走近了才发现，它保存得异常完好，护城河、吊桥、厚重的城墙，中世纪防御体系一目了然。走进城堡内部，感觉瞬间穿越了。阳光透过狭小的窗户射进来，在古老的石墙上投下光影，你可以沿着螺旋楼梯爬上塔楼，从垛口望出去，摩泽尔河谷的田园风光尽收眼底，心旷神怡。这里没有过度商业化的喧嚣，更多的是历史的厚重感和宁静。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">第一眼看到马尔旺城堡，它就像是从童话书里直接搬出来的！这座石头堡垒雄踞在一座绿色山丘上，被茂密的森林环绕，四个角上耸立着醒目的圆塔，气势十足。走近了才发现，它保存得异常完好，护城河、吊桥、厚重的城墙，中世纪防御体系一目了然。走进城堡内部，感觉瞬间穿越了。阳光透过狭小的窗户射进来，在古老的石墙上投下光影，你可以沿着螺旋楼梯爬上塔楼，从垛口望出去，摩泽尔河谷的田园风光尽收眼底，心旷神怡。这里没有过度商业化的喧嚣，更多的是历史的厚重感和宁静。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="马尔旺城堡" />
                <InfoRow label="英文名称" value="Château de Malbrouck" />
                <InfoRow label="正式名称" value="Château de Malbrouck" />
                <InfoRow label="国家" value="法国" />
                <InfoRow label="城市" value="梅斯泰尔" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="通常为每年3月中旬至11月初，每日开放，具体时间：夏季（4月-9月）10:00-18:00，春秋季（3月、10月、11月）时间可能缩短，建议出行前查询官网确认。冬季（12月-2月）通常关闭维护。" />
              <InfoRow label="门票价格" value="成人票约8欧元，优惠票（学生、儿童、团体等）约6欧元，6岁以下儿童免费。家庭套票及特定展览期间票价可能变动。" />
              <InfoRow label="地址" value="Château de Malbrouck, 57480 Manderen, France" />
              <InfoRow label="交通方式" value="从卢森堡机场出发，驾车约50分钟（45公里）。从法国梅斯火车站出发，驾车约1小时（70公里）。公共交通不便，建议自驾前往。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">马尔旺城堡的故事始于1419年，当时阿尔诺六世·德·西尔克获得了在此建造一座坚固宅邸的许可，最初的目的是为了彰显家族权力和防御。不过，我们今天看到的城堡主体，其实是在15世纪末、16世纪初由后来的主人大规模重建和加固而成的，形成了经典的四方格局与四座圆塔。它的名字“马尔旺”其实是个“美丽的错误”，源于18世纪初西班牙王位继承战争时期，英国马尔伯勒公爵曾在此附近驻扎，他的名字“Marlborough”被当地人念成了“Malbrouck”，并从此与城堡绑定。在随后的几个世纪里，城堡命运多舛，一度被废弃甚至沦为采石场，几乎沦为废墟。直到20世纪90年代，当地政府决定对其进行一次雄心勃勃的、长达数年的全面修复工程，不是重建，而是精心地“缝合”历史，让它重获新生。1998年重新开放后，它不仅是博物馆，更成为了一个活生生的文化中心。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  游览建议用时2-3小时。从城堡外的停车场和入口广场开始，穿过护城河上的桥进入主庭院，然后按照顺时针方向，依次参观各层展厅、登上主塔楼俯瞰全景，最后在城堡外围漫步一圈，感受其宏伟外观。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>城堡内楼梯陡峭且多为石阶，建议穿着舒适防滑的鞋子。部分区域指示清晰，可自由探索。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  穿过护城河与吊桥，进入城堡主庭院。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  参观一楼及二楼的常设展览，了解中世纪生活与城堡历史。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  攀爬螺旋楼梯，登上主塔楼的观景平台。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  沿着城墙步道走一段，感受防御体系。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  从庭院不同角度仰望四座圆塔和建筑立面。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  走出城堡，在周边小径上回望城堡全景。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  城堡前方山坡草坪</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为晴朗的下午，阳光照亮城堡正面。从稍远距离拍摄，可将城堡全景与前景绿草一同纳入，构图宏伟。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  主塔楼观景台</h4>
                  <p className="text-sm text-gray-700">最佳时间为上午至中午，顺光拍摄摩泽尔河谷。从垛口向外拍摄，以古老的石窗为前景，框出远处的田园森林，层次感强。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  城堡主庭院中心</h4>
                  <p className="text-sm text-gray-700">最佳时间为正午前后，阳光直射庭院。仰拍四周高墙与塔楼，突出建筑的围合感和向上的纵深感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  护城河与吊桥处</h4>
                  <p className="text-sm text-gray-700">最佳时间为侧光柔和的清晨或傍晚。近距离拍摄吊桥、城门与水面的倒影，突出城堡的防御特征和宁静氛围。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 使用广角镜头可更好地捕捉城堡全景和庭院空间。室内展览区域请注意是否允许拍照。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  城堡附近乡村民宿</h4>
                  <p className="text-sm text-blue-800">体验宁静的法国乡村生活，开车前往城堡仅需10-15分钟。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  锡尔克小镇酒店</h4>
                  <p className="text-sm text-green-800">选择更多，生活设施便利，位于城堡约20分钟车程处，性价比高。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  卢森堡市酒店</h4>
                  <p className="text-sm text-yellow-800">适合想结合城市观光与城堡游览的游客，车程约50分钟，住宿品质高，选择丰富。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  梅斯市中心酒店</h4>
                  <p className="text-sm text-purple-800">文化氛围浓厚，可作为探索洛林大区的基地，车程约1小时。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">若计划深度游览该区域，建议住在法国一侧的乡村或小镇，更能沉浸于当地氛围。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">马尔旺城堡最打动我的，是它那份“重生”后的从容与坚实。它不像一些过度修缮的城堡那样崭新得令人出戏，而是恰到好处地保留了岁月的痕迹，同时又充满了活力。在这里，你能触摸到冷硬的石头，也能感受到历史的温度；你能读到战争的往事，也能享受此刻的宁静。它是一座会“呼吸”的城堡，非常值得你专程前来，花一个下午，慢慢走，慢慢看，让自己沉浸在中世纪的想象与眼前的美景之中。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
