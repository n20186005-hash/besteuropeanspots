import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '贝兹道城堡 Béziers Castle｜俯瞰朗格多克葡萄园的古老要塞 - 最佳欧洲景点',
  description: '嘿，如果你来南法，千万别错过贝兹道城堡！它不像那些精致到有点“假”的宫殿，而是带着一股粗粝又真实的历史感。车子还没到，远远就能看到它雄踞在山丘之巅，像一位沉默的巨人守护着脚下的老城和远处一望无际的葡萄园。爬上去的过程有点小累，但当你气喘吁吁地站在城堡的石头露台上，瞬间就觉得值了——整个朗格多克地区的...',
}

export default function BeziersCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '法国', href: '/destinations/france' },
            { label: '贝兹道城堡', href: '/attractions/beziers-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">贝兹道城堡・Béziers Castle・法国・贝兹道</h1>
          <p className="text-lg text-gray-600 mb-6">
            嘿，如果你来南法，千万别错过贝兹道城堡！它不像那些精致到有点“假”的宫殿，而是带着一股粗粝又真实的历史感。车子还没到，远远就能看到它雄踞在山丘之巅，像一位沉默的巨人守护着脚下的老城和远处一望无际的葡萄园。爬上去的过程有点小累，但当你气喘吁吁地站在城堡的石头露台上，瞬间就觉得值了——整个朗格多克地区的风光像画卷一样在你脚下铺开，红瓦屋顶、蜿蜒的奥尔布河，还有阳光下闪闪发光的葡萄田，美得让人想立刻开瓶酒庆祝！城堡本身不算特别大，但走在那些古老的石墙和拱廊下，你能真切地触摸到时间的痕迹。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">嘿，如果你来南法，千万别错过贝兹道城堡！它不像那些精致到有点“假”的宫殿，而是带着一股粗粝又真实的历史感。车子还没到，远远就能看到它雄踞在山丘之巅，像一位沉默的巨人守护着脚下的老城和远处一望无际的葡萄园。爬上去的过程有点小累，但当你气喘吁吁地站在城堡的石头露台上，瞬间就觉得值了——整个朗格多克地区的风光像画卷一样在你脚下铺开，红瓦屋顶、蜿蜒的奥尔布河，还有阳光下闪闪发光的葡萄田，美得让人想立刻开瓶酒庆祝！城堡本身不算特别大，但走在那些古老的石墙和拱廊下，你能真切地触摸到时间的痕迹。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="贝兹道城堡" />
                <InfoRow label="英文名称" value="Béziers Castle" />
                <InfoRow label="正式名称" value="Béziers Castle" />
                <InfoRow label="国家" value="法国" />
                <InfoRow label="城市" value="贝兹道" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="4月至9月：每日 9:30 - 18:30；10月至3月：每日 10:00 - 17:00（每周二闭馆，节假日可能调整）。" />
              <InfoRow label="门票价格" value="成人票：8欧元；学生及65岁以上老人：6欧元；12岁以下儿童免费；家庭套票（2大2小）：20欧元。" />
              <InfoRow label="地址" value="Château de Béziers, 34500 Béziers, France" />
              <InfoRow label="交通方式" value="从最近的贝兹道火车站（Gare de Béziers）出发，步行约25分钟或乘坐当地公交（Line 1）至“Cathédrale”站，再步行10分钟上山即可抵达。从蒙彼利埃机场驾车前往约需1小时。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">贝兹道城堡的故事，简直就是一部浓缩的南法斗争史。它的前身可以追溯到罗马时代，但我们现在看到的这座石头堡垒，主要是在中世纪，特别是13世纪阿尔比十字军时期之后重建和加固的。那时候，贝兹道可是卡特里派（清洁派）的重要据点，结果在1209年遭遇了血腥的“贝兹道大屠杀”，城市和城堡都被严重摧毁。后来，法国王室为了巩固对朗格多克的控制，在原址上重建了这座城堡，让它成为了皇家权力的象征。漫步其中，你能看到不同时期的建筑风格混搭，比如厚重的罗马式地基和后来添加的哥特式窗棂。我特别喜欢站在主塔里，想象几百年前的领主就是从这里眺望自己的领地，防备着来自各方的威胁。到了近代，它一度被废弃，甚至沦为采石场（真是暴殄天物！），好在20世纪被列为历史古迹并得到了精心修复，才让我们今天能一睹它的风采。它不像巴黎的城堡那么华丽，却充满了真实、甚至有些残酷的历史记忆。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  游览建议用时约1.5-2小时。路线从城堡正门入口开始，先参观主体建筑和博物馆，然后登上主塔楼观景，最后沿着城墙漫步至花园，从侧门或原路返回出口。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>城堡内部分楼梯陡峭且狭窄，建议穿着舒适防滑的鞋子。塔楼内光线较暗，手机照明会很有帮助。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从正门进入，参观中央庭院和古老的水井。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  进入主堡内部，参观历史博物馆和骑士大厅。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  攀登狭窄的螺旋石梯，登上主塔楼观景台。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  沿着东侧城墙步行，欣赏城市与乡村的对比景观。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  参观下方的中世纪花园和草药园。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  从花园的小径返回出口或纪念品商店。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  主塔楼观景台</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为晴朗的下午日落前1小时。从垛口向外拍摄，可以将古老的石头前景与远处广阔的葡萄园和城镇全景一同纳入镜头，层次感极佳。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  城堡东侧城墙拐角</h4>
                  <p className="text-sm text-gray-700">上午光线较好。以厚重的城墙和拱形通道为框架，拍摄远处贝兹道圣纳泽尔大教堂的尖顶，形成古今对话的画面。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  中世纪花园入口拱门</h4>
                  <p className="text-sm text-gray-700">午后阳光斜射时。低角度仰拍拱门与后方高耸的城堡塔楼，能拍出极具纵深感和力量感的照片。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 使用广角镜头可以更好地捕捉城堡的宏伟和全景的壮阔。无人机飞行在城堡上空有严格限制，需提前查询法规。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  高端历史体验</h4>
                  <p className="text-sm text-blue-800">入住贝兹道老城内的精品酒店，如由历史建筑改造的酒店，沉浸式感受古城氛围。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  舒适便利之选</h4>
                  <p className="text-sm text-green-800">选择位于城堡山脚下或火车站附近的现代三星/四星酒店，交通和餐饮方便。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  经济实惠/特色民宿</h4>
                  <p className="text-sm text-yellow-800">预订周边乡村的民宿或庄园，体验真正的南法田园生活，开车前往城堡不远。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  葡萄园庄园</h4>
                  <p className="text-sm text-purple-800">租住在朗格多克产区的葡萄酒庄民宿，白天游览城堡，晚上品酒观星。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">夏季（7-8月）是旅游旺季，建议提前预订住宿。如果想看城堡夜景，住在老城步行可达的区域是最佳选择。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">贝兹道城堡或许没有金碧辉煌的装饰，但它用粗粝的石头、广阔的视野和沉甸甸的历史，给了我最真实的南法印象。这里不只是一个景点，更像一个时空交汇点。当你摸着冰凉的城墙，望着千年不变的葡萄田，会莫名地感到一种平静和连接。离开时，别忘了带上一瓶本地产的葡萄酒，这份微醺的记忆，会和城堡的风景一样长久。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
