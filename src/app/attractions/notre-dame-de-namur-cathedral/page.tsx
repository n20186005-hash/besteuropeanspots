import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '那慕尔圣母大教堂 Notre-Dame de Namur Cathedral｜俯瞰默兹河的巴洛克珍宝 - 最佳欧洲景点',
  description: '第一眼看到那慕尔圣母大教堂，你一定会被它那宏伟的巴洛克式圆顶和居高临下的气势所震撼。它不像那些藏在老城巷子里的教堂，而是大大方方地坐落在山顶，俯瞰着脚下蜿蜒的默兹河和整个那慕尔城。走进教堂内部，光线透过高高的穹顶洒下来，照亮了繁复的金色装饰和精美的壁画，那种庄严又华丽的氛围瞬间就把人包裹住了。最让我...',
}

export default function NotreDameDeNamurCathedralPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '比利时', href: '/destinations/belgium' },
            { label: '那慕尔圣母大教堂', href: '/attractions/notre-dame-de-namur-cathedral' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">那慕尔圣母大教堂・Notre-Dame de Namur Cathedral・比利时・那慕尔</h1>
          <p className="text-lg text-gray-600 mb-6">
            第一眼看到那慕尔圣母大教堂，你一定会被它那宏伟的巴洛克式圆顶和居高临下的气势所震撼。它不像那些藏在老城巷子里的教堂，而是大大方方地坐落在山顶，俯瞰着脚下蜿蜒的默兹河和整个那慕尔城。走进教堂内部，光线透过高高的穹顶洒下来，照亮了繁复的金色装饰和精美的壁画，那种庄严又华丽的氛围瞬间就把人包裹住了。最让我着迷的是它那种“混搭”感，既有巴洛克的热情奔放，又保留了哥特式的骨架，仿佛在无声地讲述着几个世纪以来不断重建和演变的故事。站在教堂前的广场上回望城市，你会觉得，这里不仅是信仰的殿堂，更是那慕尔当之无愧的城市之冠。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">第一眼看到那慕尔圣母大教堂，你一定会被它那宏伟的巴洛克式圆顶和居高临下的气势所震撼。它不像那些藏在老城巷子里的教堂，而是大大方方地坐落在山顶，俯瞰着脚下蜿蜒的默兹河和整个那慕尔城。走进教堂内部，光线透过高高的穹顶洒下来，照亮了繁复的金色装饰和精美的壁画，那种庄严又华丽的氛围瞬间就把人包裹住了。最让我着迷的是它那种“混搭”感，既有巴洛克的热情奔放，又保留了哥特式的骨架，仿佛在无声地讲述着几个世纪以来不断重建和演变的故事。站在教堂前的广场上回望城市，你会觉得，这里不仅是信仰的殿堂，更是那慕尔当之无愧的城市之冠。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="那慕尔圣母大教堂" />
                <InfoRow label="英文名称" value="Notre-Dame de Namur Cathedral" />
                <InfoRow label="正式名称" value="Notre-Dame de Namur Cathedral" />
                <InfoRow label="国家" value="比利时" />
                <InfoRow label="城市" value="那慕尔" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="每日上午9:00至下午6:00开放。" />
              <InfoRow label="门票价格" value="免费进入。" />
              <InfoRow label="地址" value="Place Saint-Aubain, 5000 Namur, Belgium" />
              <InfoRow label="交通方式" value="从布鲁塞尔南站（Brussels-South）乘坐火车至那慕尔站（Namur Station），车程约1小时。出站后步行约15分钟即可抵达教堂所在的山顶。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">那慕尔圣母大教堂的故事，可以说是一部浓缩的“建筑抗争史”。它的前身可以追溯到11世纪，最初是一座罗马式教堂。但命运多舛，在1695年，法国国王路易十四的军队炮轰那慕尔城时，这座老教堂遭到了严重破坏。于是，在18世纪初，人们决定在原址上重建一座更宏伟的教堂，这就是我们今天看到的巴洛克风格主体的由来。建筑师是来自意大利的加埃塔诺·马泰奥·皮索尼，他带来了当时欧洲大陆最时髦的巴洛克设计，尤其是那个巨大的圆顶，成了城市的新地标。不过，历史似乎喜欢开玩笑，教堂在19世纪又经历了一次火灾。这次重建时，人们又为它增添了一些新古典主义的元素。所以，当你漫步其中，仔细观察那些柱子、拱廊和装饰，能感受到不同时代留下的层叠印记。它不仅仅是教堂，更像一位历经沧桑、不断换上时代新装的长者，沉默地见证着那慕尔的兴衰起伏。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  游览建议从教堂前广场开始，由外至内，最后登高望远。全程慢慢欣赏约需1-1.5小时。路线终点可以设在教堂侧面的观景平台。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>教堂位于山顶，从火车站走来有一段上坡路，建议穿着舒适的鞋子。内部光线较暗，适应一下再慢慢观看细节。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从圣奥班广场仰望教堂宏伟的巴洛克正立面和巨大圆顶。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  进入主殿，欣赏中央穹顶下的华丽装饰与主祭坛。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  参观侧面的小礼拜堂，留意其中精美的雕塑和绘画。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  寻找并观察教堂内混合的建筑风格细节（如哥特式拱窗与巴洛克装饰）。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  走出教堂，绕到建筑侧面或后方，俯瞰默兹河与那慕尔老城全景。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  圣奥班广场远眺点</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为晴天的上午，阳光照亮教堂正面。从广场稍远处拍摄，可将宏伟的圆顶和正立面完整纳入镜头，凸显其威严。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  主殿中央仰拍</h4>
                  <p className="text-sm text-gray-700">任何时间进入室内均可。站在主祭坛前仰拍巨大的穹顶内部，利用自然光展现其华丽的壁画和结构之美。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  教堂侧面观景台</h4>
                  <p className="text-sm text-gray-700">傍晚时分最佳。以默兹河和老城的红色屋顶为前景或背景，拍摄教堂的侧面轮廓，画面富有层次感和生活气息。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 室内拍摄务必关闭闪光灯，保持安静。使用广角镜头能更好地捕捉穹顶的震撼效果。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  预算之选</h4>
                  <p className="text-sm text-blue-800">住在那慕尔火车站附近的商务酒店或连锁酒店，交通便利，性价比高。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  特色之选</h4>
                  <p className="text-sm text-green-800">选择默兹河畔或老城内的精品酒店或民宿，体验更地道的瓦隆风情，步行至教堂约10-15分钟。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  景观之选</h4>
                  <p className="text-sm text-yellow-800">寻找位于较高处的住宿，部分房间可能直接享有俯瞰城市或远眺教堂的景观。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">那慕尔城市不大，住在市中心区域步行游览各景点都非常方便。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">那慕尔圣母大教堂留给我的，是一种沉稳而包容的力量感。它历经战火与重建，融合了不同的建筑语言，最终安然屹立于山巅，守护着脚下的河流与城市。在这里，你能感受到历史的重量，也能享受到俯瞰众生的宁静视野。它不张扬，却绝对令人难忘，是读懂那慕尔这座城市气质的关键一站。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
