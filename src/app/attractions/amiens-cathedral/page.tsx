import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '亚眠大教堂 Amiens Cathedral｜法国最高的中世纪教堂，石雕圣经的震撼殿堂 - 最佳欧洲景点',
  description: '第一眼看到亚眠大教堂，你绝对会被它的“身高”震撼到！它可是法国最高的中世纪教堂，那种直插云霄的哥特式尖顶，感觉能把你的视线一直拉到天堂去。走进里面，空间大得惊人，光线透过巨大的彩绘玻璃窗洒下来，整个殿堂都笼罩在一种神圣又宁静的光晕里。最不能错过的就是西立面上那些密密麻麻的雕塑，简直像一本立体的石头圣...',
}

export default function AmiensCathedralPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '亚眠大教堂', href: '/attractions/amiens-cathedral' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">亚眠大教堂・Amiens Cathedral・法国・亚眠</h1>
          <p className="text-lg text-gray-600 mb-6">
            第一眼看到亚眠大教堂，你绝对会被它的“身高”震撼到！它可是法国最高的中世纪教堂，那种直插云霄的哥特式尖顶，感觉能把你的视线一直拉到天堂去。走进里面，空间大得惊人，光线透过巨大的彩绘玻璃窗洒下来，整个殿堂都笼罩在一种神圣又宁静的光晕里。最不能错过的就是西立面上那些密密麻麻的雕塑，简直像一本立体的石头圣经，讲述着成千上万个宗教故事。站在它面前，你会瞬间明白，为什么中世纪的人们愿意花上几百年时间，用信仰和双手垒起这样的奇迹。那种庄严与精致的结合，让人忍不住屏住呼吸。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">第一眼看到亚眠大教堂，你绝对会被它的“身高”震撼到！它可是法国最高的中世纪教堂，那种直插云霄的哥特式尖顶，感觉能把你的视线一直拉到天堂去。走进里面，空间大得惊人，光线透过巨大的彩绘玻璃窗洒下来，整个殿堂都笼罩在一种神圣又宁静的光晕里。最不能错过的就是西立面上那些密密麻麻的雕塑，简直像一本立体的石头圣经，讲述着成千上万个宗教故事。站在它面前，你会瞬间明白，为什么中世纪的人们愿意花上几百年时间，用信仰和双手垒起这样的奇迹。那种庄严与精致的结合，让人忍不住屏住呼吸。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="亚眠大教堂" />
                <InfoRow label="英文名称" value="Amiens Cathedral" />
                <InfoRow label="正式名称" value="Amiens Cathedral" />
                <InfoRow label="国家" value="法国" />
                <InfoRow label="城市" value="亚眠" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="4月1日至9月30日：8:30-18:15；10月1日至3月31日：8:30-17:45。弥撒期间部分区域可能受限。" />
              <InfoRow label="门票价格" value="进入教堂免费。登塔楼和参观宝藏室需购票，成人约8欧元，优惠票约6欧元。" />
              <InfoRow label="地址" value="30 Place Notre Dame, 80000 Amiens, France" />
              <InfoRow label="交通方式" value="从巴黎戴高乐机场乘坐TGV高速火车至亚眠站，约1小时10分钟。从亚眠火车站步行至大教堂约15分钟。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">亚眠大教堂的故事始于1220年，当时一场大火烧毁了原来的罗马式教堂。为了彰显城市的财富和信仰，主教决定建造一座前所未有的宏伟新教堂。在建筑师罗贝尔·德·吕扎什的带领下，工程飞速进行，奇迹般地在短短几十年内就完成了主体结构，这在中世纪是惊人的速度。13世纪是它的黄金时代，那些精美绝伦的雕塑，尤其是西立面著名的“美丽上帝”雕像和描绘圣经故事的浮雕带，都是这个时期完成的。它见证了英法百年战争的动荡，也经历了法国大革命的冲击，一些雕塑遭到了破坏。19世纪，在建筑大师维奥莱-勒-杜克的主持下进行了一次重要的修复，让我们今天看到的它更加完整。1981年，它被列入联合国教科文组织世界遗产名录。走在里面，抚摸那些被岁月打磨光滑的石柱，你能感受到近八百年的祈祷、希望和历史沉淀下来的重量，它不仅仅是一座建筑，更是一部石头写成的编年史。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  建议游览时间约1.5-2小时。从西面主广场开始，先欣赏外部雕塑，然后进入中殿，一路向东走到唱诗班和后殿，最后可根据时间选择登塔或参观侧廊小礼拜堂。路线清晰，呈线性。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>教堂地面平坦，适合步行。如果想登塔，需要爬几百级狭窄的旋转楼梯，请评估自身体力并穿舒适的鞋子。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  西立面外观：仔细观赏“美丽上帝”雕像和门廊上的圣经故事浮雕。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  步入中殿：感受42米高的拱顶和深邃的纵向空间。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  参观唱诗班：欣赏精致的16世纪橡木雕刻座椅。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  寻找彩绘玻璃：观察不同时期（13世纪和现代）玻璃窗的光影艺术。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  漫步侧廊与小礼拜堂：发现一些安静的祈祷空间和艺术品。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  （可选）登南塔楼：俯瞰亚眠城市全景和教堂的飞扶壁结构。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  主广场远眺点</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为晴天的上午或傍晚，阳光能照亮西立面。从广场远端拍摄，可囊括教堂全貌和宏伟的阶梯，效果震撼。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  中殿仰拍视角</h4>
                  <p className="text-sm text-gray-700">站在中殿中央，将镜头垂直向上，拍摄高耸的肋拱顶和天窗，能完美展现哥特式建筑的垂直感与神圣空间。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  “美丽上帝”雕像特写</h4>
                  <p className="text-sm text-gray-700">在西立面中央门廊，下午光线较好。近距离拍摄这尊著名的基督雕像，捕捉其宁静祥和的面部细节。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  南侧街道视角</h4>
                  <p className="text-sm text-gray-700">从Rue Cormont街拍摄教堂侧面和飞扶壁，构图富有层次感和建筑的结构美，尤其适合建筑摄影爱好者。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 教堂内部允许拍照，但请勿使用闪光灯和三脚架，弥撒期间请避免拍摄。尊重祈祷者。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  经济型</h4>
                  <p className="text-sm text-blue-800">宜必思尚品亚眠大教堂酒店，位置极佳，步行2分钟即到教堂。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  舒适型</h4>
                  <p className="text-sm text-green-800">玛尔桑酒店，位于历史中心，由古老建筑改建，风格独特。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  高端型</h4>
                  <p className="text-sm text-yellow-800">亚眠卡特勒酒店，五星级豪华酒店，提供顶级的服务和设施，距离教堂稍有一段步行距离但很安静。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">建议选择老城区（市中心）的住宿，不仅方便游览大教堂，也能轻松探索亚眠的其他景点和运河风光。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">亚眠大教堂带给我的，是一种沉静而持久的力量。它不像巴黎圣母院那样充满戏剧性，却以其无与伦比的完整性和高度，默默诉说着信仰的虔诚与工匠的执着。离开时，脑海里留下的不仅是石头的冰冷，更是光影的流动和历史的余温。如果你路过法国北部，请一定为它停留半天，这份来自13世纪的震撼，值得你专程到访。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
