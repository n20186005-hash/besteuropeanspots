import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '韦兹莱修道院・Vézelay Abbey・法国・韦兹莱 | 最佳欧洲景点',
  description: '探索韦兹莱修道院，1979年被联合国教科文组织列为世界文化遗产，是罗马式艺术的杰出杰作，以圣玛丽·玛德琳遗骨圣地、恢弘的建筑格局与深厚的宗教历史闻名。',
}

export default function VezelayAbbeyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '韦兹莱修道院', href: '/attractions/vezelay-abbey' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">韦兹莱修道院・Vézelay Abbey・法国・韦兹莱</h1>
          <p className="text-lg text-gray-600 mb-6">
            韦兹莱修道院坐落于韦兹莱山城的山丘之巅，始建于9世纪，是罗马式建筑的经典代表，也是中世纪重要的宗教圣地。修道院以圣玛丽·玛德琳遗骨为核心，建筑恢弘庄重，拥有精美的柱头浮雕与拉丁十字布局，曾是十字军东征的集结地，承载着深厚的宗教与历史记忆，是感受中世纪宗教文化与建筑艺术的绝佳去处。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              韦兹莱修道院坐落于韦兹莱山城的山丘之巅，始建于9世纪，是罗马式建筑的经典代表，也是中世纪重要的宗教圣地。修道院以圣玛丽·玛德琳遗骨为核心，建筑恢弘庄重，拥有精美的柱头浮雕与拉丁十字布局，曾是十字军东征的集结地，承载着深厚的宗教与历史记忆，是感受中世纪宗教文化与建筑艺术的绝佳去处。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="韦兹莱修道院" />
                <InfoRow label="英文名称" value="Vézelay Abbey" />
                <InfoRow label="正式名称" value="Basilica of Sainte-Marie-Madeleine" />
                <InfoRow label="国家" value="法国（France）" />
                <InfoRow label="城市" value="韦兹莱市（Vézelay, Yonne）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="1979年被联合国教科文组织列为世界文化遗产" />
                <InfoRow label="建筑特色" value="罗马式艺术的杰出杰作" />
                <InfoRow label="建筑风格" value="罗马式建筑风格" />
                <InfoRow label="文化价值" value="圣玛丽·玛德琳遗骨圣地、十字军东征集结地" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="修道院开放时间分季节调整：旺季9:00-18:00，淡季9:30-16:30" />
              <InfoRow label="门票价格" value="成人门票9欧元，优惠票6欧元，6岁以下儿童免费" />
              <InfoRow label="地址" value="Vézelay Abbey, 24 Rue Saint-Pierre, 89450 Vézelay, France" />
              <InfoRow label="交通方式" value="从韦兹莱火车站步行15分钟可达山脚下，再沿石阶步行10分钟抵达入口" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                韦兹莱修道院的历史可追溯至9世纪，历经近1200年的风雨变迁，见证了中世纪宗教的兴衰、十字军东征的壮阔与勃艮第地区的历史更迭，从一座小型本笃会修道院，逐步发展为中世纪重要的宗教圣地与罗马式建筑杰作，最终成为全球闻名的世界文化遗产，完整保留了中世纪宗教建筑的风貌与历史痕迹。
              </p>
              <p>
                9世纪至12世纪，是修道院的始建与鼎盛期。公元858年，韦兹莱修道院始建，最初为一座小型本笃会修道院，规模较小，主要用于修士修行。11世纪，修道院因宣称拥有圣玛丽·玛德琳的遗骨而声名鹊起，成为中世纪基督教世界的重要朝圣地，吸引了来自欧洲各地的朝圣者，修道院也随之扩建，逐步形成了如今的规模与格局。这一时期，修道院采用典型的罗马式建筑风格，以巨石为主要建筑材料，建成了拉丁十字形的教堂、回廊、修士宿舍等建筑，其中教堂的柱头浮雕极具特色，共99组，充满想象力，宛如中世纪的连环画，展现了宗教故事与当时的社会生活。
              </p>
              <p>
                12世纪至13世纪，韦兹莱修道院达到鼎盛，成为十字军东征的重要集结地。1146年，圣伯纳德曾在此布道，号召信徒参加第二次十字军东征；1190年，腓力二世与理查一世也曾在此集结军队，开启第三次十字军东征的征程，这让韦兹莱修道院在中世纪的宗教与政治舞台上占据了重要地位。这一时期，修道院的建筑进一步完善，新增了地下室、祭坛等区域，地下室用于供奉圣玛丽·玛德琳的遗骨，装饰有精美的青铜圣物盒，2015年的修复工作还发现了12世纪的彩色壁画，其中包括"荣耀中的基督"拱顶石，尽显中世纪宗教艺术的精湛。此外，修道院还是圣雅各朝圣之路的重要节点，承载着朝圣文化的传承。
              </p>
              <p>
                14世纪至19世纪，修道院历经动荡与损毁。14世纪，黑死病席卷欧洲，韦兹莱的人口锐减，朝圣者数量大幅减少，修道院逐渐衰落，部分建筑因缺乏维护而损毁。宗教改革时期，修道院遭到严重破坏，圣玛丽·玛德琳的遗骨被遗失，部分浮雕、雕塑被损毁或拆除。1793年法国大革命期间，修道院被世俗化，部分建筑被改为监狱、仓库，进一步加剧了损毁。19世纪，建筑师维奥莱-勒-杜克对修道院进行了系统性修复，严格遵循"修旧如旧"的原则，修复了受损的墙体、浮雕与拱顶，让这座古老的修道院重新焕发活力，逐步恢复了中世纪的风貌。
              </p>
              <p>
                20世纪至今，修道院迎来保护与复兴。1979年，韦兹莱修道院被联合国教科文组织列为世界文化遗产，成为全球游客探寻中世纪宗教文化与罗马式建筑艺术的重要景点。20世纪以来，法国政府多次对修道院进行修复与维护，重点保护柱头浮雕、彩色壁画等文物，同时完善了周边的游览设施，方便游客参观。如今，韦兹莱修道院依然是重要的宗教场所，定期举办宗教仪式，同时作为旅游景点，吸引着数百万游客前来，感受中世纪的宗教底蕴与建筑艺术魅力。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线（1.5-2小时，兼顾宗教遗迹与建筑景观）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  修道院山脚下停车场 → 朝圣石阶 → 修道院入口（游客服务中心） → 教堂正面（tympanum浮雕） → 中殿 → 回廊 → 地下室（圣玛丽·玛德琳遗骨供奉处） → 修道院博物馆 → 山顶观景台 → 出口（可前往韦兹莱老城）
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>全程步行游览，路线平缓，可租赁语音导览或跟随当地导览团，深入感受修道院的历史底蕴与建筑美学
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">朝圣石阶</h4>
                  <p className="text-sm text-gray-700 mb-2">从停车场出发，沿蜿蜒的朝圣石阶步行10分钟可达修道院入口，石阶两侧种植着绿植，沿途可欣赏韦兹莱山城的石屋建筑与周边田园风光。</p>
                  <div className="text-xs text-gray-500">🚶 朝圣之路 | 🏔️ 山城风光</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">教堂正面（tympanum浮雕）</h4>
                  <p className="text-sm text-gray-700 mb-2">采用罗马式建筑风格，墙体由巨石砌成，恢弘庄重，正面的tympanum浮雕是核心景观，分为上下两部分，雕刻精美，寓意深刻。</p>
                  <div className="text-xs text-gray-500">⛪ 罗马式建筑 | 🎨 精美浮雕</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中殿</h4>
                  <p className="text-sm text-gray-700 mb-2">采用拉丁十字布局，长约120米，高大的拱顶气势恢宏，光线透过彩色玻璃窗洒入，营造出庄严而静谧的宗教氛围。</p>
                  <div className="text-xs text-gray-500">✝️ 拉丁十字布局 | 🌈 彩色玻璃窗</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">回廊</h4>
                  <p className="text-sm text-gray-700 mb-2">回廊环绕着教堂，采用罗马式拱券结构，墙面简洁，地面铺设石板，环境清幽，是修士们曾经修行、冥想的地方。</p>
                  <div className="text-xs text-gray-500">🕊️ 静谧回廊 | 🧘 修行冥想</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">地下室（圣玛丽·玛德琳遗骨供奉处）</h4>
                  <p className="text-sm text-gray-700 mb-2">这里是修道院的核心圣地，供奉着圣玛丽·玛德琳的遗骨（复制品），地下室的墙体上保留着12世纪的彩色壁画，色彩依然鲜艳。</p>
                  <div className="text-xs text-gray-500">💀 圣骨供奉 | 🎨 12世纪壁画</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">山顶观景台</h4>
                  <p className="text-sm text-gray-700 mb-2">这里是韦兹莱的制高点，可俯瞰整个韦兹莱山城的全貌，错落有致的石屋、蜿蜒的街巷与周边的勃艮第田园风光融为一体。</p>
                  <div className="text-xs text-gray-500">🌄 俯瞰全景 | 🏞️ 勃艮第田园</div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 修道院全景机位</h4>
                  <p className="text-sm text-gray-700">位于山脚下的朝圣石阶中段，采用仰拍角度，拍摄修道院的完整全景，清晰捕捉教堂的恢弘轮廓、罗马式拱顶与山丘的地形优势。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. tympanum浮雕特写机位</h4>
                  <p className="text-sm text-gray-700">位于教堂正面tympanum浮雕前，采用近距离平视角度，聚焦浮雕的细节，清晰捕捉人物的神态、服饰与雕刻纹理。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 中殿光影机位</h4>
                  <p className="text-sm text-gray-700">位于教堂中殿中部，采用平视角度，拍摄中殿的拱顶与光影效果，捕捉阳光透过彩色玻璃窗洒入的光影，搭配高大的拱券与柱头浮雕。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 回廊静谧机位</h4>
                  <p className="text-sm text-gray-700">位于回廊内侧，采用侧拍角度，拍摄回廊的拱券结构与墙面，搭配回廊内的座椅与光影，捕捉回廊的静谧氛围。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 山顶全景机位</h4>
                  <p className="text-sm text-gray-700">位于山顶观景台，采用俯拍角度，将韦兹莱修道院的全貌与韦兹莱山城、周边田园风光融为一体，展现山城的古朴与田园的静谧。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 柱头浮雕细节机位</h4>
                  <p className="text-sm text-gray-700">位于教堂中殿或回廊的柱头旁，采用近距离特写角度，聚焦柱头浮雕的细节，捕捉浮雕上的人物、花卉与故事场景。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 游览修道院时，禁止攀爬建筑、刻画墙体与浮雕，避免损坏文物</li>
                <li>• 教堂内、地下室禁止大声喧哗，保持安静，尊重宗教仪式</li>
                <li>• 地下室拍摄时禁止使用闪光灯，避免损坏彩色壁画</li>
                <li>• 尊重当地修士与朝圣者的活动，不随意打扰他人</li>
                <li>• 遵守景区规定，共同保护历史遗迹与景区环境，不随意丢弃垃圾</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">韦兹莱老城（Vieux Vézelay）</h4>
                <p className="text-sm text-gray-700 mb-2">距离修道院约300米，步行5分钟可达，是韦兹莱的历史核心区域，保留着完整的中世纪街巷格局与石屋建筑，街巷蜿蜒曲折，建筑古朴典雅。</p>
                <div className="text-xs text-gray-500">🚶 步行5分钟 | 🏘️ 中世纪街巷</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">圣雅各朝圣之路（Way of St. James）</h4>
                <p className="text-sm text-gray-700 mb-2">韦兹莱修道院是圣雅各朝圣之路的重要节点，从修道院出发，可沿朝圣之路徒步，沿途经过田园、村庄与教堂，风景清幽，充满朝圣氛围。</p>
                <div className="text-xs text-gray-500">🚶 朝圣徒步 | ⛪ 宗教氛围</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">勃艮第葡萄酒庄园（Burgundy Wine Estate）</h4>
                <p className="text-sm text-gray-700 mb-2">距离韦兹莱约15公里，驾车20分钟可达，韦兹莱地处勃艮第葡萄酒产区，周边有众多小型葡萄酒庄园，可前往庄园参观，了解葡萄酒的酿造过程。</p>
                <div className="text-xs text-gray-500">🚗 驾车20分钟 | 🍷 勃艮第葡萄酒</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">约讷河畔博物馆（Musée de la Yonne）</h4>
                <p className="text-sm text-gray-700 mb-2">距离韦兹莱约25公里，驾车30分钟可达，位于约讷河畔，收藏着大量勃艮第地区的历史文物、民俗展品与艺术作品，详细介绍了约讷省的历史变迁。</p>
                <div className="text-xs text-gray-500">🚗 驾车30分钟 | 🏛️ 勃艮第历史文化</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">韦兹莱老城或修道院周边</h4>
                  <p className="text-sm text-blue-800">步行可达修道院、老城街巷与观景台，交通便捷，同时能深度感受中世纪山城的氛围，晚上还可欣赏山城的夜景。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">距离山城1-2公里的乡村民宿</h4>
                  <p className="text-sm text-green-800">环境静谧，能欣赏到勃艮第田园风光，步行或乘坐巴士10分钟即可抵达修道院，适合喜欢安静的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">靠近朝圣之路入口或庄园附近</h4>
                  <p className="text-sm text-yellow-800">若计划徒步圣雅各朝圣之路或游览周边葡萄酒庄园，可选择靠近朝圣之路入口或庄园附近的住宿，交通更便捷。</p>
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
                  <p className="text-sm text-gray-700 mb-2">多位于老城核心区域，房间舒适，部分设有餐厅，提供当地勃艮第特色美食与葡萄酒，适合家庭与情侣。</p>
                  <div className="text-xs text-gray-500">⭐ 舒适整洁 | 🍽️ 勃艮第美食</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高档四星级及以上酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于山城近郊的田园之中，环境优雅，房间装饰精美，部分可欣赏到修道院或田园风光，设有露台与高级餐厅。</p>
                  <div className="text-xs text-gray-500">🏨 环境优雅 | 🍷 高级餐厅</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">特色民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">可选择老城的石质民居改造的房源或乡村民宿，装修古朴，充满中世纪风情，常提供当地特色早餐，部分还可体验葡萄酒品鉴。</p>
                  <div className="text-xs text-gray-500">🏡 中世纪风情 | 🍇 葡萄酒品鉴</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季预订：</strong>韦兹莱的旅游旺季为4-10月（春秋季气候适宜，景色优美，6月夏至日有光影奇观），游客较多，建议提前1-2个月预订住宿</p>
                    <p className="mb-2"><strong>淡季优惠：</strong>冬季游客较少，可提前1-2周预订，部分住宿会推出优惠活动，性价比更高</p>
                    <p><strong>预订咨询：</strong>预订时可关注是否包含早餐，部分住宿提供修道院门票折扣券，可节省游览成本</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>法国的酒店与民宿通常不提供一次性洗漱用品，需自备牙刷、牙膏、毛巾等</p>
                    <p className="mb-2"><strong>电器准备：</strong>当地电压为230V，插头为Type F型，可提前准备转换插头</p>
                    <p><strong>气候注意：</strong>夏季韦兹莱气候温和，早晚温差较大，建议携带薄外套；冬季气温较低，部分乡村民宿采用壁炉供暖</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                韦兹莱修道院，这座矗立在勃艮第山丘之巅的中世纪宗教圣地，承载着近1200年的历史记忆，融合了罗马式建筑的恢弘、宗教文化的庄严与田园风光的静谧，兼具历史厚重感与自然美感。在这里，你可以驻足教堂正面，触摸精美的浮雕，感受中世纪雕刻艺术的精湛；漫步中殿与回廊，聆听历史的回响，感受宗教的静谧；登顶观景台，俯瞰山城与田园，享受远离喧嚣的惬意；穿梭老城街巷，体验中世纪山城的慢生活节奏。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                希望这份攻略能帮助你更好地游览韦兹莱修道院，深入了解中世纪宗教文化与罗马式建筑艺术，留下一段难忘的法国勃艮第旅行记忆。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在罗马式建筑的恢弘与勃艮第田园风光的交融中，邂逅一段跨越时空的宗教文化之旅。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}