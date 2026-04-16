import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '古比奥古城 Gubbio Old Town｜中世纪山城活化石，意大利最美的“灰城” - 最佳欧洲景点',
  description: '嘿，我跟你说，古比奥简直像从童话书里直接搬出来的！它整个儿“挂”在英吉诺山的斜坡上，层层叠叠的灰色石头房子沿着山势铺开，所以当地人叫它“灰城”。第一眼看到它，那种震撼感很难形容——一座活生生的中世纪古城，时间在这里好像被按了暂停键。走在窄窄的、陡峭的石头巷子里，两边是高耸的石墙，头顶是拱廊，脚下是光...',
}

export default function GubbioOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '古比奥古城', href: '/attractions/gubbio-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">古比奥古城・Gubbio Old Town・意大利・古比奥</h1>
          <p className="text-lg text-gray-600 mb-6">
            嘿，我跟你说，古比奥简直像从童话书里直接搬出来的！它整个儿“挂”在英吉诺山的斜坡上，层层叠叠的灰色石头房子沿着山势铺开，所以当地人叫它“灰城”。第一眼看到它，那种震撼感很难形容——一座活生生的中世纪古城，时间在这里好像被按了暂停键。走在窄窄的、陡峭的石头巷子里，两边是高耸的石墙，头顶是拱廊，脚下是光滑的鹅卵石，感觉下一秒就会有个穿着长袍的修士或者骑士从转角走出来。空气里有种古老、宁静又带点神秘的味道，特别奇妙。它不是那种精致到完美的景点，反而有种粗粝、真实的生活感，你能看到阳台上晾着的衣服，听到小巷深处传来的意大利语聊天声，历史和日常在这里完美地混在一起。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">嘿，我跟你说，古比奥简直像从童话书里直接搬出来的！它整个儿“挂”在英吉诺山的斜坡上，层层叠叠的灰色石头房子沿着山势铺开，所以当地人叫它“灰城”。第一眼看到它，那种震撼感很难形容——一座活生生的中世纪古城，时间在这里好像被按了暂停键。走在窄窄的、陡峭的石头巷子里，两边是高耸的石墙，头顶是拱廊，脚下是光滑的鹅卵石，感觉下一秒就会有个穿着长袍的修士或者骑士从转角走出来。空气里有种古老、宁静又带点神秘的味道，特别奇妙。它不是那种精致到完美的景点，反而有种粗粝、真实的生活感，你能看到阳台上晾着的衣服，听到小巷深处传来的意大利语聊天声，历史和日常在这里完美地混在一起。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="古比奥古城" />
                <InfoRow label="英文名称" value="Gubbio Old Town" />
                <InfoRow label="正式名称" value="Gubbio Old Town" />
                <InfoRow label="国家" value="意大利" />
                <InfoRow label="城市" value="古比奥" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="古城全天开放，城内各景点开放时间不一，通常为上午9:00至日落前1小时。" />
              <InfoRow label="门票价格" value="进入古城免费，城内主要景点如总督宫、大教堂等需单独购票，联票约12-15欧元。" />
              <InfoRow label="地址" value="Piazza Grande, 06024 Gubbio PG, Italy" />
              <InfoRow label="交通方式" value="从佩鲁贾圣弗朗西斯德阿西西国际机场出发，驾车约45分钟可达。从罗马乘火车至福松布罗内站后，需转乘巴士，总耗时约3小时。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">古比奥的历史可真是源远流长。它的故事要从公元前开始讲起，当时居住在这里的翁布里亚人留下了神秘的“古比奥铜表”，上面刻着古老的文字，现在可是镇馆之宝。到了罗马时代，这里建起了剧院，遗迹至今还能看到，坐在那些石阶上，你几乎能想象两千年前人们在这里看戏的热闹场面。真正让古比奥定型的是中世纪，特别是11到14世纪，它作为一个独立的城邦繁荣起来。那时候建的防御城墙、高塔、贵族宫殿和公共广场，构成了今天我们看到的城市骨架。走在 Piazza Grande 广场上，脚下是巨大的悬空结构支撑着广场，俯瞰着下面的山谷，你就能明白中世纪人选址和建造的智慧与野心——既是为了防御，也是为了彰显权力。文艺复兴时期它也沾了光，留下了一些精美的建筑细节。有趣的是，古比奥在近代并没有经历大规模工业化或现代化改造，这种“停滞”反而意外地保存了它的中世纪风貌。感觉它就像一个固执又优雅的老人，拒绝随波逐流，才把这份独一无二的时光礼物留给了我们。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从山下的圣方济各门开始，一路向上攀登，最终抵达山顶的圣乌巴尔多教堂，全程步行约需3-4小时。这是一条经典的“朝圣”路线，能由低到高完整体验古比奥的层次感和历史脉络。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>路线全程坡度较大，务必穿一双舒适防滑的步行鞋。部分小巷像迷宫，但主要街道标志清晰，跟着上坡的大方向走就不会错。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从圣方济各门进入，感受古城入口的厚重石墙。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  沿着主街 Via dei Consoli 上行，浏览两旁的中世纪店铺和建筑。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  抵达核心的格兰德广场，俯瞰壮观的山谷景色。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  参观广场旁的总督宫和大教堂，看内部艺术珍品。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  继续向上，乘坐特色“笼车”缆车或徒步登上山顶。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  在山顶的圣乌巴尔多教堂结束，享受全景并感受宁静氛围。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  格兰德广场边缘</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为清晨或黄昏，光线柔和。从广场石栏边向下俯拍，能将层层叠叠的灰色屋顶和远山一同纳入镜框，构图极具层次感和纵深感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  Via Baldassini 小巷</h4>
                  <p className="text-sm text-gray-700">午后阳光能射入窄巷时。拍摄巷子的纵深，两侧高墙形成天然引导线，尽头的光亮处常有惊喜（一扇门或一个转角），故事感十足。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  山顶圣乌巴尔多教堂前</h4>
                  <p className="text-sm text-gray-700">日落时分。以教堂建筑为前景，拍摄整个古比奥古城沐浴在金红色夕阳下的全景，是明信片级别的经典角度。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  “笼车”缆车内</h4>
                  <p className="text-sm text-gray-700">乘坐时。从移动的、镂空的缆车车厢里向外拍摄，能获得独特而动感的城市与山谷视角，非常有趣。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 古城色调以灰色、土黄色为主，穿着亮色衣服（如红色、蓝色）拍照会更突出人物。无人机飞行在历史城区可能有严格限制，需提前查询法规。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  古城中心历史酒店</h4>
                  <p className="text-sm text-blue-800">入住由古老宫殿改建的酒店，沉浸式体验中世纪氛围，但价格较高。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  半山腰家庭旅馆</h4>
                  <p className="text-sm text-green-800">性价比之选，通常由当地人经营，能享受宁静视野和家常美食。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  山下现代酒店</h4>
                  <p className="text-sm text-yellow-800">适合自驾旅客，停车方便，设施较新，需步行或开车上山游览。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  农庄住宿</h4>
                  <p className="text-sm text-purple-800">位于古城周边乡村，体验托斯卡纳-翁布里亚风格的田园生活，适合寻求宁静的度假者。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">古城内的住宿通常需要爬很多台阶才能到达，预订时请仔细查看位置描述，并根据自身体力情况选择。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">古比奥的美，不是那种张扬的、扑面而来的华丽，而是一种需要你慢慢走、细细品的沉静力量。它不讨好游客，只是静静地在那里，保持着千百年来自己的节奏和模样。离开的时候，你会觉得心里好像被那些灰色的石头、陡峭的小巷和温暖的夕阳填满了，是一种特别踏实、特别宁静的满足感。如果你想寻找一个真正逃离现代喧嚣、触摸中世纪灵魂的地方，古比奥绝对不会让你失望。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
