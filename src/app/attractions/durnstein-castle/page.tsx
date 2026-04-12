import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '杜恩施泰因城堡・Dürnstein Castle・奥地利・杜恩施泰因 | 最佳欧洲景点',
  description: '探索杜恩施泰因城堡，奥地利下奥地利州杜恩施泰因市的标志性景点，坐落于瓦豪河谷山巅，始建于12世纪，因关押狮心王理查的历史而声名远播。',
}

export default function DurnsteinCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '杜恩施泰因城堡', href: '/attractions/durnstein-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">杜恩施泰因城堡・Dürnstein Castle・奥地利・杜恩施泰因</h1>
          <p className="text-lg text-gray-600 mb-6">
            杜恩施泰因城堡是奥地利下奥地利州杜恩施泰因市的标志性景点，坐落于瓦豪河谷山巅，始建于12世纪，是中世纪军事防御古堡的典型遗存。城堡以石砌残垣、防御塔楼为特色，因关押狮心王理查的历史而声名远播，周边环绕着多瑙河与梯田葡萄园，既有古堡的沧桑厚重，又有河谷的灵秀旖旎，是感受中世纪历史与多瑙河风光交融之美的绝佳去处。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              杜恩施泰因城堡是奥地利下奥地利州杜恩施泰因市的标志性景点，坐落于瓦豪河谷山巅，始建于12世纪，是中世纪军事防御古堡的典型遗存。城堡以石砌残垣、防御塔楼为特色，因关押狮心王理查的历史而声名远播，周边环绕着多瑙河与梯田葡萄园，既有古堡的沧桑厚重，又有河谷的灵秀旖旎，是感受中世纪历史与多瑙河风光交融之美的绝佳去处。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="杜恩施泰因城堡" />
                <InfoRow label="英文名称" value="Dürnstein Castle (Kuenringer Castle)" />
                <InfoRow label="国家" value="奥地利（Austria）" />
                <InfoRow label="城市" value="杜恩施泰因（Dürnstein）" />
                <InfoRow label="所属区域" value="奥地利下奥地利州，瓦豪河谷中段" />
              </div>
              <div className="space-y-4">
                <InfoRow label="地理位置" value="多瑙河上游瓦豪河谷，河谷北侧山巅" />
                <InfoRow label="始建年代" value="12世纪初" />
                <InfoRow label="历史地位" value="关押英格兰狮心王理查的传奇城堡" />
                <InfoRow label="文化地位" value="瓦豪河谷世界文化遗产核心组成部分" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="城堡遗址全年开放，建议游览时段：夏季8:00-18:00，冬季9:00-17:00" />
              <InfoRow label="门票价格" value="城堡遗址免费向公众开放；导览讲解20欧元/组（最多6人）" />
              <InfoRow label="地址" value="Burgruine Dürnstein, 3601 Dürnstein, Austria" />
              <InfoRow label="交通方式" value="从维也纳乘火车约1.5小时，从萨尔茨堡约2小时；步行25-30分钟上山" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                杜恩施泰因城堡的历史可追溯至12世纪初，其雏形是一座木质防御堡垒，由当时统治瓦豪河谷地区的昆林格家族修建，最初用于防御多瑙河航运路线，守护当地的葡萄酒贸易与盐业运输安全。瓦豪河谷自古便是多瑙河沿岸的交通要道，也是奥地利重要的葡萄酒产区，而杜恩施泰因作为河谷中段的核心小镇，城堡的修建成为保障区域贸易安全的关键。
              </p>
              <p>
                12世纪末，杜恩施泰因城堡迎来了其历史上最著名的事件——关押英格兰狮心王理查。1192年，狮心王理查在第三次十字军东征结束后返程，途经奥地利时，因与奥地利公爵利奥波德五世结怨，被俘虏并关押在杜恩施泰因城堡的塔楼之中，关押时长近一年。这段历史让杜恩施泰因城堡声名远播，也为城堡增添了浓厚的传奇色彩。
              </p>
              <p>
                13世纪，昆林格家族衰落，城堡被哈布斯堡家族接管，随后进行了大规模扩建，将木质堡垒改建为石砌城堡，增设了防御塔楼、城墙与瞭望台，强化了其军事防御功能。此时的杜恩施泰因城堡成为哈布斯堡家族统治下奥地利东部地区的重要军事据点。
              </p>
              <p>
                17世纪，欧洲爆发三十年战争，杜恩施泰因城堡作为重要的军事据点遭到战火侵袭，大部分建筑被损毁，仅剩下部分石砌城墙与塔楼得以留存。战争结束后，城堡逐渐沦为废墟，但其残垣断壁依然矗立在山巅，成为瓦豪河谷一道独特的历史景观。
              </p>
              <p>
                20世纪初，杜恩施泰因城堡被奥地利政府列为历史文物保护单位，工作人员对城堡遗址进行了保护性修缮，严格遵循"修旧如旧"的原则，保留了城堡的原始残貌与历史痕迹，同时修建了简易的徒步小径与安全防护设施，方便游客前往参观。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（2-3小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从杜恩施泰因小镇中心出发，沿标记清晰的徒步小径前往城堡，沿途可欣赏两岸的梯田葡萄园与多瑙河风光，感受瓦豪河谷的田园气息。抵达城堡遗址后，首先参观城堡的石砌城墙与防御塔楼，触摸千年历史的痕迹；随后登上最高的瞭望塔楼，俯瞰多瑙河全景、杜恩施泰因小镇与周边的青山绿水；最后漫步城堡遗址周边，打卡狮心王理查关押处的纪念标识，拍摄城堡残垣与河谷的同框美景。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速体验城堡精华
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（4-5小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加小镇游览、修道院参观、河谷徒步及当地美食体验。参观完城堡遗址后，沿徒步小径返回小镇中心，漫步小镇的石板街巷，欣赏色彩鲜艳的中世纪木屋；随后前往杜恩施泰因修道院，参观这座拥有蓝白色塔楼的巴洛克式建筑；离开修道院后，沿多瑙河沿岸的徒步道前行，途经葡萄园、古朴码头与休闲驿站；最后前往小镇内的特色餐厅，品尝当地传统美食，如烤鳟鱼、土豆饺子、杏子甜点等，搭配当地产的雷司令白葡萄酒。
                </p>
                <div className="text-sm text-green-800 bg-green-100 p-3 rounded">
                  <strong>适合人群：</strong>喜欢细致游览的游客，想要深度体验瓦豪河谷文化
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-800 mb-2">游览小贴士</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• 城堡徒步小径部分路段较陡峭、多碎石，建议穿着舒适的步行鞋</li>
                <li>• 夏季（6-8月）建议避开11:00-14:00的高峰时段，携带防晒用品</li>
                <li>• 冬季部分路段可能结冰，需注意安全，可携带防滑鞋套</li>
                <li>• 参观城堡遗址时，请勿攀爬残垣断壁，遵守文物保护规定</li>
                <li>• 徒步路线沿途无售卖点，建议提前准备好饮用水</li>
              </ul>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 多瑙河畔码头</h4>
                  <p className="text-sm text-gray-700">拍摄城堡全景的最佳机位，以湛蓝的多瑙河为前景，城堡矗立在山巅之上，背景是翠绿的山峦与梯田葡萄园，画面层次丰富。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 城堡瞭望塔楼</h4>
                  <p className="text-sm text-gray-700">俯瞰瓦豪河谷全景的绝佳机位，可将多瑙河、杜恩施泰因小镇、两岸的葡萄园与青山尽收眼底。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 徒步小径中途观景台</h4>
                  <p className="text-sm text-gray-700">以层层叠叠的梯田葡萄园为前景，城堡矗立在山巅，背景是清澈的多瑙河，充满田园诗意与历史沧桑感。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 杜恩施泰因修道院露台</h4>
                  <p className="text-sm text-gray-700">可将城堡、修道院塔楼与小镇建筑同框，既有宗教建筑的精致，又有古堡的沧桑。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 多瑙河游船甲板</h4>
                  <p className="text-sm text-gray-700">游船缓缓行驶在多瑙河上，可从不同角度拍摄城堡与河谷的风光，画面灵动自然。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 小镇高处观景台</h4>
                  <p className="text-sm text-gray-700">可将城堡、多瑙河与小镇的古朴木屋尽收眼底，红瓦屋顶与湛蓝河水、翠绿山峦相互映衬。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 城堡遗址以灰色石砌残垣为主，建议穿搭浅色系或亮色衣物</li>
                <li>• 拍摄河谷场景时，可携带草帽、丝巾等道具增强氛围感</li>
                <li>• 傍晚拍摄时建议携带三脚架，保证画面清晰</li>
                <li>• 徒步拍摄时注意脚下安全，避免在陡峭路段停留过久</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">杜恩施泰因修道院</h4>
                <p className="text-sm text-gray-700 mb-2">距离城堡约1.2公里，步行20分钟可达，巴洛克风格的古老修道院，以蓝白色相间的塔楼而闻名。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行20分钟 | ⭐ 宗教建筑</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">梅尔克修道院</h4>
                <p className="text-sm text-gray-700 mb-2">距离杜恩施泰因约20分钟车程，奥地利最宏伟的巴洛克式修道院之一，藏书上万册古籍。</p>
                <div className="text-xs text-gray-500">🚗 车程20分钟 | ⭐ 人文景观</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">克雷姆斯小镇</h4>
                <p className="text-sm text-gray-700 mb-2">距离杜恩施泰因约15分钟车程，瓦豪河谷东端起点的中世纪古镇，石板路与彩色木屋。</p>
                <div className="text-xs text-gray-500">🚗 车程15分钟 | ⭐ 古镇风情</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">阿格斯坦城堡</h4>
                <p className="text-sm text-gray-700 mb-2">距离杜恩施泰因约30分钟车程，另一座多瑙河畔的中世纪古堡遗址，拍摄九曲十八弯的绝佳地点。</p>
                <div className="text-xs text-gray-500">🚗 车程30分钟 | ⭐ 古堡景观</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">瓦豪河谷葡萄园</h4>
                <p className="text-sm text-gray-700 mb-2">杜恩施泰因周边遍布梯田葡萄园，奥地利重要的葡萄酒产区，可品尝正宗瓦豪雷司令白葡萄酒。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行10分钟 | 🍷 葡萄酒文化</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">施皮茨小镇</h4>
                <p className="text-sm text-gray-700 mb-2">距离杜恩施泰因约40分钟车程，瓦豪河谷核心小镇，多瑙河畔的红瓦木屋与大片葡萄园。</p>
                <div className="text-xs text-gray-500">🚗 车程40分钟 | ⭐ 自然风光</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">河谷景观区域</h4>
                  <p className="text-sm text-blue-800">首选住宿区域，距离多瑙河与城堡较近，步行即可抵达徒步小径起点，推窗即可欣赏多瑙河与葡萄园风光。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">小镇中心区域</h4>
                  <p className="text-sm text-green-800">距离特色餐厅、小店与游客中心较近，能充分感受小镇的人文氛围与烟火气，生活便利。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">火车站附近</h4>
                  <p className="text-sm text-yellow-800">交通便捷，适合需要乘坐火车前往周边景点的游客，周边有许多餐厅和便利店。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端河谷度假酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于多瑙河畔，自带观景露台、餐厅与葡萄酒品鉴区，提供游船租赁等服务。</p>
                  <div className="text-xs text-gray-500">💎 适合追求高品质住宿</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于小镇中心或河谷附近，步行可达核心景点，性价比突出。</p>
                  <div className="text-xs text-gray-500">⭐ 适合大多数游客</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">民宿/青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">家庭经营，风格温馨，部分带厨房可自炊，价格实惠。</p>
                  <div className="text-xs text-gray-500">💰 适合预算有限游客</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季（6-8月、10月）：</strong>建议提前1-2个月预订</p>
                    <p className="mb-2"><strong>淡季（11月-次年5月）：</strong>可提前1-2周预订</p>
                    <p><strong>特色套票：</strong>部分河谷酒店推出住宿+葡萄酒品鉴套餐</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>自带洗漱用品、拖鞋</p>
                    <p className="mb-2"><strong>入住时间：</strong>通常为14:00后，退房11:00前</p>
                    <p><strong>注意事项：</strong>河谷区域多为无烟酒店，需遵守规定</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                杜恩施泰因城堡，这座矗立在瓦豪河谷山巅的中世纪古堡遗址，历经千年战火与风雨侵蚀，依然以残垣断壁诉说着过往的传奇。它既有中世纪军事堡垒的冷峻沧桑，又有瓦豪河谷的灵秀旖旎；既有狮心王理查关押的传奇故事，又有葡萄酒文化的醇厚绵长。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                在这里，你可以漫步古堡残垣，触摸千年历史的痕迹；可以登上塔楼远眺，领略多瑙河的蜿蜒与壮阔；可以漫步河谷街巷，感受小镇的宁静与烟火。无论是独自旅行、情侣出游还是家庭度假，杜恩施泰因城堡都能给你带来难忘的旅行体验。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在历史与自然的交融中，读懂奥地利的独特魅力，爱上这片充满诗意与传奇的河谷土地。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}