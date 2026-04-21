import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科拉欣 Kolašin｜黑山北部的山林秘境与户外天堂 - 最佳欧洲景点',
  description: '嘿，如果你厌倦了亚得里亚海边的喧嚣，想一头扎进黑山的“绿色心脏”，那科拉欣绝对是个惊喜。第一眼看到它，你会觉得这是个被松林和群山温柔环抱的童话小镇，空气里都是清冽的松针香。夏天，这里是徒步者和山地自行车手的乐园，Biogradska Gora国家公园里那个祖母绿一样的冰川湖，美得让人屏住呼吸。冬天，...',
}

export default function KolaInPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '黑山', href: '/destinations/montenegro' },
            { label: '科拉欣', href: '/attractions/kola-in' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">科拉欣・Kolašin・黑山・科拉欣</h1>
          <p className="text-lg text-gray-600 mb-6">
            嘿，如果你厌倦了亚得里亚海边的喧嚣，想一头扎进黑山的“绿色心脏”，那科拉欣绝对是个惊喜。第一眼看到它，你会觉得这是个被松林和群山温柔环抱的童话小镇，空气里都是清冽的松针香。夏天，这里是徒步者和山地自行车手的乐园，Biogradska Gora国家公园里那个祖母绿一样的冰川湖，美得让人屏住呼吸。冬天，整个小镇就“变身”成一个热闹的滑雪度假村，从山上滑下来，眼前是连绵的雪松林，特别梦幻。这里节奏很慢，当地人超级友好，在木屋餐厅里吃一顿用山泉水炖的肉，再喝杯本地 rakija（水果白兰地），那种温暖踏实的感觉，是在海边找不到的。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">嘿，如果你厌倦了亚得里亚海边的喧嚣，想一头扎进黑山的“绿色心脏”，那科拉欣绝对是个惊喜。第一眼看到它，你会觉得这是个被松林和群山温柔环抱的童话小镇，空气里都是清冽的松针香。夏天，这里是徒步者和山地自行车手的乐园，Biogradska Gora国家公园里那个祖母绿一样的冰川湖，美得让人屏住呼吸。冬天，整个小镇就“变身”成一个热闹的滑雪度假村，从山上滑下来，眼前是连绵的雪松林，特别梦幻。这里节奏很慢，当地人超级友好，在木屋餐厅里吃一顿用山泉水炖的肉，再喝杯本地 rakija（水果白兰地），那种温暖踏实的感觉，是在海边找不到的。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="科拉欣" />
                <InfoRow label="英文名称" value="Kolašin" />
                <InfoRow label="正式名称" value="Kolašin" />
                <InfoRow label="国家" value="黑山" />
                <InfoRow label="城市" value="科拉欣" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="全年开放，但最佳旅游季节为夏季（6月-9月）和冬季（12月-3月）。具体活动（如缆车、滑雪场）运营时间需根据季节查询。" />
              <InfoRow label="门票价格" value="进入小镇本身免费。滑雪场、国家公园门票、缆车及各类户外活动（如徒步向导、漂流）需单独付费，价格不等。" />
              <InfoRow label="地址" value="Kolašin, Montenegro" />
              <InfoRow label="交通方式" value="从波德戈里察机场（TGD）出发，驾车沿E65/E80公路向北行驶，约1.5小时车程可达。从首都波德戈里察火车站也可乘坐火车或巴士，约2小时。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">科拉欣的故事，和黑山跌宕起伏的历史紧紧绑在一起。它的名字最早在17世纪的奥斯曼帝国文献中被提及，当时只是个位于重要贸易路线上的小定居点。真正让它登上历史舞台的，是19世纪黑山王子（后来是国王）尼古拉一世，他看中了这里战略位置和自然资源，将其发展为对抗奥斯曼帝国的前哨之一，并授予其城镇地位。你能感受到，小镇骨子里有种坚韧的山民气质。二战后，随着南斯拉夫时期旅游业的发展，科拉欣凭借其绝佳的自然环境，开始被建设成山地度假胜地，修建了早期的旅游设施。黑山独立后，尤其是近十几年，它更是迎来了新生，现代化的滑雪缆车、舒适的酒店和生态木屋纷纷建起，但那份原始的山林野趣却被很好地保留了下来。走在镇上，那些新旧交织的建筑，仿佛在默默讲述着从边境要塞到宁静桃源的有趣转变。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  建议安排1-2天深度游玩。核心路线围绕“小镇探索”和“自然沉浸”展开。上午从小镇中心出发，感受当地生活气息，下午深入Biogradska Gora国家公园进行轻徒步，环湖游览。全程轻松步行与短途车行结合。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>国家公园内徒步路径清晰，但建议下载离线地图或使用路标。穿一双舒适防滑的徒步鞋是必须的。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  漫步科拉欣主街，参观圣乔治教堂。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  驱车前往Biogradska Gora国家公园入口。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  徒步至Biogradsko湖，沿木质步道环湖一周。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  在湖边休息区野餐或品尝传统美食。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  （冬季）前往Kolašin 1450滑雪场体验滑雪或雪橇。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  返回小镇，在传统餐馆（Kod Pera na Brijegu）享用晚餐。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  Biogradsko湖观景台</h4>
                  <p className="text-sm text-gray-700">清晨或傍晚，阳光柔和时，从湖南侧的观景台拍摄，可将湖面倒影、原始森林和远山一同纳入镜头，画面宁静深邃。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  科拉欣小镇全景</h4>
                  <p className="text-sm text-gray-700">前往滑雪场缆车中站或附近高地，在晴朗天气拍摄小镇被茂密森林和雪山环绕的全景，层次感极强。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  国家公园森林步道</h4>
                  <p className="text-sm text-gray-700">阳光透过高大松树林形成丁达尔效应时，在林间小径低角度拍摄，充满神秘与生机。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  传统木屋餐厅露台</h4>
                  <p className="text-sm text-gray-700">夜晚，拍摄点着温暖灯光的木屋露台，背景是深蓝色的夜空和山影，氛围感十足。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 山区天气变化快，抓住晴朗的窗口期迅速拍摄。冬季拍摄雪景注意相机保暖和防潮。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  高端之选</h4>
                  <p className="text-sm text-blue-800">Bianca Resort & Spa，位于滑雪场附近，提供全套水疗服务和山景房，适合滑雪度假和放松。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  特色体验</h4>
                  <p className="text-sm text-green-800">Etno Selo Šljeme，传统的生态村落式酒店，由多栋木石小屋组成，体验原汁原味的山地生活。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  经济舒适</h4>
                  <p className="text-sm text-yellow-800">Hotel Lipa，位于镇中心，交通便利，性价比高，设施干净实用。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  民宿情怀</h4>
                  <p className="text-sm text-purple-800">寻找小镇或公园附近由家庭经营的公寓或别墅，能获得更本地化的体验。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">旺季（特别是圣诞、新年滑雪季）务必提前预订。喜欢安静的话，可以选择离小镇中心稍远、靠近森林的住宿。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">科拉欣就像一个懂得平衡之美的隐士，夏天用无边的绿意和湖光治愈你，冬天用纯净的雪场和暖炉拥抱你。它没有过度开发的浮躁，只有大山赋予的沉稳与慷慨。来这里，不只是看风景，更是把自己还给了自然。如果你渴望一段能深呼吸、能静静聆听风声与心跳的旅程，科拉欣不会让你失望。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
