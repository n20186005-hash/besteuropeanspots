import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奥朗日凯旋门与古罗马剧场・Orange Roman Theatre・法国・奥朗日 | 最佳欧洲景点',
  description: '探索奥朗日凯旋门与古罗马剧场，法国最完整的古罗马遗迹组合，被联合国教科文组织列为世界文化遗产，拥有近2000年历史的古罗马建筑杰作。',
}

export default function OrangeRomanTheatrePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '奥朗日凯旋门与古罗马剧场', href: '/attractions/orange-roman-theatre' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">奥朗日凯旋门与古罗马剧场・Orange Roman Theatre・法国・奥朗日</h1>
          <p className="text-lg text-gray-600 mb-6">
            奥朗日凯旋门与古罗马剧场是法国最完整的古罗马遗迹组合，坐落于奥朗日市区，始建于公元前1世纪至公元1世纪。凯旋门雕刻精美，纪念罗马帝国的和平与繁荣；古罗马剧场规模宏大，是西欧保存最完好的古罗马剧场之一，至今仍用于举办演出，二者共同承载着古罗马文明的辉煌，是感受古罗马建筑艺术与历史氛围的绝佳去处。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              奥朗日凯旋门与古罗马剧场是法国最完整的古罗马遗迹组合，坐落于奥朗日市区，始建于公元前1世纪至公元1世纪。凯旋门雕刻精美，纪念罗马帝国的和平与繁荣；古罗马剧场规模宏大，是西欧保存最完好的古罗马剧场之一，至今仍用于举办演出，二者共同承载着古罗马文明的辉煌，是感受古罗马建筑艺术与历史氛围的绝佳去处。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="奥朗日凯旋门与古罗马剧场" />
                <InfoRow label="英文名称" value="Orange Roman Theatre and Triumphal Arch" />
                <InfoRow label="国家" value="法国（France）" />
                <InfoRow label="城市" value="奥朗日市（Orange, Vaucluse）" />
                <InfoRow label="地区" value="普罗旺斯-阿尔卑斯-蓝色海岸大区" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="联合国教科文组织世界文化遗产" />
                <InfoRow label="建筑特色" value="古罗马帝国在高卢地区的杰出遗迹" />
                <InfoRow label="建筑风格" value="恢弘的古罗马建筑风格" />
                <InfoRow label="文化价值" value="探寻古罗马文明、感受普罗旺斯人文风情" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="凯旋门全天免费开放；古罗马剧场分季节调整" />
              <InfoRow label="门票价格" value="凯旋门免费；古罗马剧场成人9.5欧元，优惠票7.5欧元" />
              <InfoRow label="地址" value="凯旋门：Place de l'Arc de Triomphe, 84100 Orange, France；古罗马剧场：Place de l'Amphithéâtre, 84100 Orange, France" />
              <InfoRow label="交通方式" value="从奥朗日火车站步行15分钟可达凯旋门；Local巴士1路、3路直达" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                奥朗日凯旋门与古罗马剧场是古罗马帝国统治高卢地区的重要历史见证，始建于公元前1世纪至公元1世纪，历经近2000年的风雨变迁，见证了古罗马帝国的兴衰、高卢地区的历史更迭与文化融合，从最初的军事纪念、娱乐场所，逐步沦为废墟，最终被修复保护，成为全球闻名的世界文化遗产，完整保留了古罗马建筑的风貌与历史痕迹。
              </p>
              <p>
                公元前1世纪至公元1世纪，是两处遗迹的始建与鼎盛期。奥朗日在古罗马时期是重要的军事要塞与殖民城市，地处隆河河谷，地理位置优越，是古罗马帝国控制高卢南部的战略要地。古罗马剧场始建于公元前20年左右，耗时6年竣工，建成于公元4年，由古罗马皇帝奥古斯都下令修建，是西欧保存最完好的古罗马剧场之一，剧场正面长103米，可容纳近9000名观众，主要用于举办戏剧、歌剧、角斗等娱乐活动，是当时奥朗日市民的主要休闲场所，也是古罗马文明在高卢地区传播的重要载体。奥朗日凯旋门建于公元10至25年，属于奥古斯都统治时期的建筑，是为纪念建立奥朗日罗马殖民地的第二高卢军团老兵而建，也是从奥古斯都统治时期保存下来的外省凯旋门中最精美、最有意义的一个，用以纪念罗马帝国统治下的和平与繁荣。
              </p>
              <p>
                这一时期，剧场与凯旋门相辅相成，构成了奥朗日古罗马城的核心格局。剧场采用典型的古罗马建筑风格，以巨石为主要建筑材料，设有舞台、观众席、后台等完整区域，舞台背景墙高大厚重，装饰有精美的浮雕与柱式，尽显恢弘气势；凯旋门采用单拱结构，高约19米、宽约14米，墙体雕刻有精美的浅浮雕，内容包括被俘的高卢人、罗马士兵、 maritime treasures等，既彰显了罗马帝国的军事威严，也体现了当时高超的雕刻艺术水平。此外，剧场周边还建有古罗马神庙、广场等建筑，形成了完整的古罗马建筑群，见证了奥朗日在古罗马时期的繁荣景象。
              </p>
              <p>
                公元5世纪至19世纪，两处遗迹历经动荡与损毁。公元5世纪，罗马帝国衰落，奥朗日被西哥特人占领，古罗马剧场与凯旋门遭到一定程度的损毁，剧场的部分座椅、浮雕被拆除，用于建造其他建筑，凯旋门的部分雕刻也因战乱受损。中世纪时期，剧场被改为防御工事，部分区域被改造为住宅、仓库，凯旋门则被用作进入城镇的大门，逐渐被人们遗忘。18世纪至19世纪，法国政府开始重视历史遗迹保护，对凯旋门与古罗马剧场进行了初步修复，清理废墟、加固墙体，逐步恢复了遗迹的原貌，让这两处古老的古罗马遗迹重新被世人关注。
              </p>
              <p>
                20世纪至今，两处遗迹迎来系统性保护与复兴。1981年，奥朗日凯旋门与古罗马剧场一同被联合国教科文组织列为世界文化遗产，成为全球游客探寻古罗马文明的重要景点。20世纪以来，法国政府多次对两处遗迹进行系统性修复，严格遵循"修旧如旧"的原则，保留了古罗马建筑的原始风貌，同时完善了周边的游览设施，方便游客参观。如今，古罗马剧场依然保持着活力，每年7-8月都会举办歌剧节，上演歌剧、音乐会等演出，让古老的剧场重新焕发新生；凯旋门则成为奥朗日的城市象征，吸引着数百万游客前来参观，感受古罗马帝国的辉煌历史与建筑艺术魅力。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线（2-2.5小时，兼顾历史遗迹与人文气息）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  奥朗日火车站 → 凯旋门（Arc de Triomphe d'Orange） → 奥朗日老城街巷 → 古罗马剧场（Théâtre Antique d'Orange） → 剧场周边休闲区 → 出口
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>全程步行游览，路线平缓，可租赁语音导览或跟随当地导览团，深入感受两处遗迹的历史底蕴与建筑美学
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">奥朗日火车站</h4>
                  <p className="text-sm text-gray-700 mb-2">从火车站出发，步行15分钟即可抵达凯旋门，沿途可欣赏奥朗日市区的街景，感受普罗旺斯小镇的宁静氛围。</p>
                  <div className="text-xs text-gray-500">🚂 火车站出发 | 🚶 步行15分钟</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">凯旋门（Arc de Triomphe d'Orange）</h4>
                  <p className="text-sm text-gray-700 mb-2">单拱结构，通体由当地巨石砌成，高大恢弘，墙体上的浅浮雕保存完好，可近距离观赏浮雕细节。</p>
                  <div className="text-xs text-gray-500">🏛️ 单拱结构 | 🎨 精美浮雕</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">奥朗日老城街巷</h4>
                  <p className="text-sm text-gray-700 mb-2">老城街巷蜿蜒曲折，保留着古罗马时期的街巷格局与普罗旺斯特色石屋，建筑色彩明快，周边有众多特色商铺。</p>
                  <div className="text-xs text-gray-500">🏘️ 普罗旺斯石屋 | 🛍️ 特色商铺</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">古罗马剧场（Théâtre Antique d'Orange）</h4>
                  <p className="text-sm text-gray-700 mb-2">西欧保存最完好的古罗马剧场之一，剧场正面长103米，可容纳近9000名观众，舞台背景墙高大厚重，装饰精美。</p>
                  <div className="text-xs text-gray-500">🎭 古罗马剧场 | 🏟️ 9000观众容量</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">剧场内部游览</h4>
                  <p className="text-sm text-gray-700 mb-2">参观舞台区域、留存遗迹，了解古罗马时期戏剧演出模式；舞台后方设有小型展厅，展示剧场历史文物。</p>
                  <div className="text-xs text-gray-500">🎪 舞台区域 | 🖼️ 历史展厅</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">剧场周边休闲区</h4>
                  <p className="text-sm text-gray-700 mb-2">设有座椅、草坪，环境清幽，可在此稍作休息，放松身心，周边有小型商铺与咖啡馆。</p>
                  <div className="text-xs text-gray-500">🌳 休闲草坪 | ☕ 咖啡馆</div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 凯旋门全景机位</h4>
                  <p className="text-sm text-gray-700">位于凯旋门正前方的广场上，采用平视角度，拍摄凯旋门的完整全景，清晰捕捉单拱结构的恢弘气势与墙体的浮雕细节。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 凯旋门浮雕特写机位</h4>
                  <p className="text-sm text-gray-700">位于凯旋门墙体旁，采用近距离平视角度，聚焦墙体上的浅浮雕，清晰捕捉被俘高卢人、罗马士兵等雕刻细节。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 剧场全景机位</h4>
                  <p className="text-sm text-gray-700">位于剧场观众席最高处，采用俯拍角度，拍摄剧场的整体格局，清晰捕捉舞台、观众席、通道的完整布局。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 剧场舞台特写机位</h4>
                  <p className="text-sm text-gray-700">位于剧场观众席中部，采用平视角度，拍摄舞台背景墙的完整立面，聚焦墙面的浮雕、柱式与装饰细节。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 山顶俯瞰机位</h4>
                  <p className="text-sm text-gray-700">位于剧场后方的圣欧特罗普山公园山顶，采用俯拍角度，将古罗马剧场的全貌与奥朗日市区的风光融为一体。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 老城与遗迹同框机位</h4>
                  <p className="text-sm text-gray-700">位于奥朗日老城街巷与凯旋门连接处，采用平视角度，将凯旋门与老城的普罗旺斯石屋、街巷融为一体。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 游览两处遗迹时，禁止攀爬建筑、刻画墙体与浮雕，避免损坏文物</li>
                <li>• 禁止在剧场观众席、凯旋门周边追逐打闹，注意脚下安全</li>
                <li>• 剧场内拍摄时禁止使用闪光灯，避免损坏浮雕与文物</li>
                <li>• 尊重当地市民的休闲活动，不随意打扰他人；遵守景区规定，共同保护历史遗迹</li>
                <li>• 歌剧节期间拍摄演出需遵守现场规定，禁止随意拍摄舞台画面</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">奥朗日博物馆（Musée d'Orange）</h4>
                <p className="text-sm text-gray-700 mb-2">距离古罗马剧场约500米，步行7分钟可达，收藏着大量古罗马时期的文物、浮雕、铭文与老照片，详细介绍奥朗日的古罗马历史。</p>
                <div className="text-xs text-gray-500">🏛️ 步行7分钟 | 🏺 古罗马文物</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">圣欧特罗普山公园（Parc Colline Saint-Eutrope）</h4>
                <p className="text-sm text-gray-700 mb-2">距离古罗马剧场约300米，步行5分钟可达，位于剧场后方的山丘上，登上山顶可俯瞰古罗马剧场与奥朗日市区的全景。</p>
                <div className="text-xs text-gray-500">🚶 步行5分钟 | 🌄 俯瞰全景</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">阿维尼翁教皇宫（Palais des Papes）</h4>
                <p className="text-sm text-gray-700 mb-2">距离奥朗日约25公里，驾车25分钟可达，是联合国教科文组织世界文化遗产，始建于14世纪，是中世纪西方世界最大的哥特式宫殿。</p>
                <div className="text-xs text-gray-500">🚗 驾车25分钟 | 🏰 哥特式宫殿</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">加尔桥（Pont du Gard）</h4>
                <p className="text-sm text-gray-700 mb-2">距离奥朗日约35公里，驾车35分钟可达，是古罗马时期的水利工程杰作，由三层石拱构成，横跨加尔河，气势恢弘。</p>
                <div className="text-xs text-gray-500">🚗 驾车35分钟 | 🌉 古罗马水利工程</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">奥朗日市区或遗迹周边</h4>
                  <p className="text-sm text-blue-800">步行可达凯旋门、古罗马剧场与老城街巷，交通便捷，同时能深度感受奥朗日的历史氛围与普罗旺斯小镇风情。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">距离市区1-2公里的乡村民宿</h4>
                  <p className="text-sm text-green-800">环境静谧，能欣赏到普罗旺斯田园风光，乘坐巴士10分钟即可抵达遗迹，适合喜欢安静的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">靠近高速公路入口或巴士站</h4>
                  <p className="text-sm text-yellow-800">便于驾车或乘坐巴士前往周边景点（如阿维尼翁教皇宫、加尔桥），交通更便捷。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">普遍干净整洁、价格实惠，大多步行可达公交站，部分提供公共厨房，适合背包客与预算有限的游客。</p>
                  <div className="text-xs text-gray-500">💰 价格实惠 | 🎒 背包客友好</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中档三星级酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于市区核心区域，房间舒适，部分设有餐厅，提供当地普罗旺斯特色美食，适合家庭与情侣。</p>
                  <div className="text-xs text-gray-500">⭐ 舒适整洁 | 🍽️ 特色餐厅</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高档四星级及以上酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于市区近郊或田园之中，环境优雅，房间装饰精美，部分可欣赏到剧场或田园风光，设有露台与高级餐厅。</p>
                  <div className="text-xs text-gray-500">🏨 环境优雅 | 🍷 高级餐厅</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">特色民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">可选择市区的石质民居改造的房源或乡村民宿，装修充满普罗旺斯风情，常提供当地特色早餐，部分还可体验葡萄酒品鉴。</p>
                  <div className="text-xs text-gray-500">🏡 普罗旺斯风情 | 🍇 葡萄酒品鉴</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季预订：</strong>奥朗日的旅游旺季为4-10月（春秋季气候适宜，7-8月歌剧节期间游客最多），游客较多，建议提前1-2个月预订住宿</p>
                    <p className="mb-2"><strong>淡季优惠：</strong>冬季游客较少，可提前1-2周预订，部分住宿会推出优惠活动，性价比更高</p>
                    <p><strong>预订咨询：</strong>预订时可关注是否包含早餐，部分住宿提供古罗马剧场门票折扣券；若自驾出行，可提前咨询是否提供免费停车服务</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>法国的酒店与民宿通常不提供一次性洗漱用品，需自备牙刷、牙膏、毛巾等</p>
                    <p className="mb-2"><strong>电器准备：</strong>当地电压为230V，插头为Type F型，可提前准备转换插头</p>
                    <p><strong>气候注意：</strong>夏季奥朗日气候炎热干燥，建议携带防晒用品、帽子与饮用水；冬季气温温和，无需厚重衣物</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                奥朗日凯旋门与古罗马剧场，这两处矗立在普罗旺斯小镇上的古罗马遗迹，承载着近2000年的历史记忆，融合了古罗马建筑的恢弘与普罗旺斯的浪漫，兼具历史厚重感与自然美感。在这里，你可以驻足凯旋门旁，触摸古老的浮雕，追忆古罗马帝国的辉煌；漫步剧场之中，感受近万人剧场的壮阔，聆听历史的回响；穿梭老城街巷，体验普罗旺斯的慢生活节奏；远眺田园风光，感受小镇的宁静惬意。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                希望这份攻略能帮助你更好地游览奥朗日凯旋门与古罗马剧场，深入了解古罗马文明与普罗旺斯文化，留下一段难忘的法国南部旅行记忆。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在古罗马帝国的辉煌历史与普罗旺斯的浪漫风情中，邂逅一段跨越时空的文明之旅。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}