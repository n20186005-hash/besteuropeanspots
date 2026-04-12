import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '莱博德普罗旺斯・Les Baux-de-Provence・法国・普罗旺斯 | 最佳欧洲景点',
  description: '探索莱博德普罗旺斯，普罗旺斯地区最具代表性的中世纪山城，坐落于石灰岩山丘之上，以嶙峋怪石、中世纪城堡废墟闻名。',
}

export default function LesBauxDeProvencePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '莱博德普罗旺斯', href: '/attractions/les-baux-de-provence' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">莱博德普罗旺斯・Les Baux-de-Provence・法国・普罗旺斯</h1>
          <p className="text-lg text-gray-600 mb-6">
            莱博德普罗旺斯是普罗旺斯标志性中世纪山城，坐落于石灰岩山丘之上，以"石头城"为特色，保留着完整的中世纪石质建筑、城堡废墟与古朴街巷。这里兼具军事遗迹的沧桑、艺术小镇的灵动与乡村田园的静谧，周边环绕着薰衣草田与橄榄林，是感受普罗旺斯历史底蕴、自然美景与人文风情的绝佳去处，也是众多艺术家的灵感源泉。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              莱博德普罗旺斯是普罗旺斯标志性中世纪山城，坐落于石灰岩山丘之上，以"石头城"为特色，保留着完整的中世纪石质建筑、城堡废墟与古朴街巷。这里兼具军事遗迹的沧桑、艺术小镇的灵动与乡村田园的静谧，周边环绕着薰衣草田与橄榄林，是感受普罗旺斯历史底蕴、自然美景与人文风情的绝佳去处，也是众多艺术家的灵感源泉。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="莱博德普罗旺斯" />
                <InfoRow label="英文名称" value="Les Baux-de-Provence" />
                <InfoRow label="国家" value="法国（France）" />
                <InfoRow label="城市" value="莱博德普罗旺斯" />
                <InfoRow label="所属区域" value="法国普罗旺斯-阿尔卑斯-蓝色海岸大区罗讷河口省" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="普罗旺斯地区最具代表性的中世纪山城" />
                <InfoRow label="核心特色" value="石灰岩山丘上的"石头城"" />
                <InfoRow label="文化价值" value="以嶙峋怪石、中世纪城堡废墟闻名" />
                <InfoRow label="建筑价值" value="完整的中世纪石质建筑群" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="小镇全天开放；莱博德城堡淡季10:00-16:30，旺季9:30-18:00" />
              <InfoRow label="门票价格" value="小镇免费；城堡成人12欧元，青少年8欧元，儿童5欧元" />
              <InfoRow label="地址" value="Les Baux-de-Provence, 13520 Bouches-du-Rhône, France" />
              <InfoRow label="交通方式" value="从马赛乘巴士约1.5小时；从阿尔勒乘巴士约40分钟" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                莱博德普罗旺斯的历史可追溯至公元前6世纪，最初是凯尔特人定居点，因地处石灰岩山丘之上，地势险要、易守难攻，逐渐发展成为军事要塞，历经千年变迁，见证了普罗旺斯地区的政权更迭与文化融合，从军事要塞逐步发展为兼具历史、艺术与乡村风情的特色小镇。
              </p>
              <p>
                公元前6世纪至公元5世纪，是小镇的初创与发展期。凯尔特人在此定居，利用当地丰富的石灰岩资源，修建了简易的防御工事，形成了最初的村落雏形。罗马帝国统治时期，这里成为重要的军事据点，罗马人扩建了防御设施，铺设了石板路，促进了当地的贸易与文化发展，小镇逐渐形成一定规模，成为普罗旺斯内陆的重要交通节点。这一时期，当地的石灰岩开采业开始兴起，为后续的建筑发展奠定了基础。
              </p>
              <p>
                6世纪至15世纪，莱博德普罗旺斯进入鼎盛时期，成为普罗旺斯地区最具影响力的军事要塞与贵族领地。6世纪，当地贵族Les Baux家族开始统治这里，家族势力不断扩张，曾统治普罗旺斯79个城镇和堡垒，成为当时普罗旺斯地区最强大的贵族家族之一。这一时期，家族出资修建了莱博德城堡，加固了防御工事，城堡依山而建，墙体由巨大的石灰岩砌成，设有瞭望塔、护城河与城门，成为当时最坚固的军事要塞之一。同时，小镇内修建了大量石质民居、教堂与商铺，形成了完整的中世纪街巷格局，逐渐成为周边地区的商业与文化中心。
              </p>
              <p>
                16世纪至18世纪，小镇历经动荡与衰落。16世纪，法国宗教战争爆发，莱博德普罗旺斯因地处战略要地，成为双方争夺的焦点，城堡与小镇建筑遭到严重破坏，人口大量流失。17世纪，主教黎塞留为平定当地叛乱，彻底铲除了城堡的防御工事，城堡逐渐沦为废墟，Les Baux家族势力也随之衰落。法国大革命爆发后，小镇进一步遭到冲击，部分历史建筑被损毁，贵族逃离，小镇逐渐沉寂，成为以农业与石灰岩开采为主的普通村落。
              </p>
              <p>
                19世纪至今，莱博德普罗旺斯迎来复兴与新生。19世纪末，法国政府开始重视历史文化遗产保护，将莱博德普罗旺斯列为国家级历史遗迹，组织人员对受损建筑进行修复，保留了中世纪石质建筑的原貌与街巷格局。20世纪初，众多艺术家被小镇的古朴风貌与自然美景吸引，纷纷前来定居、创作，为小镇注入了艺术活力，逐渐发展成为艺术小镇。如今，莱博德普罗旺斯不仅是法国重要的历史文化遗产与旅游景点，仍是普罗旺斯地区的艺术中心之一，每年吸引着世界各地的游客与艺术家前来，既保留着中世纪的沧桑韵味，又融入了现代艺术的灵动气息，成为历史与现代、自然与人文交融的典范。此外，这里还是但丁创作《神曲》的灵感来源地之一，北方不远处的地狱谷战场，为但丁提供了丰富的创作素材。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐游览路线（2.5-3小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  小镇入口 → 主街巷（Rue Principale） → 莱博德城堡 → 城堡瞭望台 → 中世纪教堂（Église Saint-Vincent） → 艺术画廊 → 小镇广场 → 薰衣草观景台 → 小镇出口（可前往周边橄榄林）
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>可从小镇入口停车场出发，全程步行游览，路线舒缓，兼顾历史遗迹、艺术景观与乡村风情，可租赁语音导览（支持多语言），也可跟随当地导览团（约1.5小时，提供英、法双语服务，需提前预约）
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 小镇入口</h4>
                  <p className="text-sm text-gray-700 mb-2">从停车场步行5分钟即可抵达小镇入口，入口处是一座古朴的石质拱门，拱门上方雕刻着小镇的名称与历史铭文，彰显着中世纪的沧桑韵味。</p>
                  <div className="text-xs text-gray-500">🚶 步行5分钟 | 🏛️ 中世纪拱门</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 主街巷（Rue Principale）</h4>
                  <p className="text-sm text-gray-700 mb-2">进入入口后，便是小镇的主街巷，街巷由石板铺成，蜿蜒曲折，两侧是清一色的石质民居，墙体由当地石灰岩砌成，屋顶覆盖着红色瓦片。</p>
                  <div className="text-xs text-gray-500">🏘️ 石质民居 | 🌿 中世纪风貌</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 莱博德城堡</h4>
                  <p className="text-sm text-gray-700 mb-2">沿主街巷步行10分钟即可抵达莱博德城堡，城堡坐落于小镇最高处，是小镇的标志性景观，如今虽为废墟，但仍能看出当年的雄伟气势。</p>
                  <div className="text-xs text-gray-500">🏰 城堡废墟 | ⛰️ 山顶要塞</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 城堡瞭望台</h4>
                  <p className="text-sm text-gray-700 mb-2">从城堡废墟步行3分钟即可抵达瞭望台，这里是小镇的制高点，视野开阔，可俯瞰整个莱博德普罗旺斯的全貌。</p>
                  <div className="text-xs text-gray-500">🌅 观景平台 | 🏞️ 全景视野</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 中世纪教堂（Église Saint-Vincent）</h4>
                  <p className="text-sm text-gray-700 mb-2">从城堡下来，沿街巷步行5分钟即可抵达中世纪教堂，教堂始建于12世纪，采用罗马式建筑风格，石质墙体厚重，半圆拱券设计。</p>
                  <div className="text-xs text-gray-500">⛪ 罗马式教堂 | 🎨 中世纪壁画</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 艺术画廊</h4>
                  <p className="text-sm text-gray-700 mb-2">教堂周边分布着多家艺术画廊，展示着当地艺术家与外来艺术家的作品，涵盖油画、雕塑、摄影等多种艺术形式。</p>
                  <div className="text-xs text-gray-500">🎨 艺术画廊 | 🖼️ 当代艺术</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">7. 小镇广场</h4>
                  <p className="text-sm text-gray-700 mb-2">沿街巷步行5分钟即可抵达小镇广场，广场是小镇的核心区域，地面由石板铺成，周边环绕着石质建筑、咖啡馆与商铺。</p>
                  <div className="text-xs text-gray-500">🏛️ 中心广场 | ☕ 休闲氛围</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">8. 薰衣草观景台</h4>
                  <p className="text-sm text-gray-700 mb-2">从广场步行8分钟即可抵达薰衣草观景台，这里位于小镇边缘，周边种植着大片薰衣草（6-8月盛开），每年夏季，紫色的薰衣草田随风摇曳。</p>
                  <div className="text-xs text-gray-500">🌸 薰衣草田 | 📸 拍照胜地</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">9. 小镇出口与周边橄榄林</h4>
                  <p className="text-sm text-gray-700 mb-2">从观景台步行5分钟即可抵达小镇出口，出口处设有纪念品商铺与停车场。出小镇后，可前往周边的橄榄林。</p>
                  <div className="text-xs text-gray-500">🛍️ 纪念品 | 🌿 田园风光</div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 城堡废墟特写机位</h4>
                  <p className="text-sm text-gray-700">位于莱博德城堡内部，采用平视或仰拍角度，拍摄城堡残留的城墙、瞭望塔与城门，清晰捕捉石灰岩建筑的纹理与沧桑感，展现中世纪军事要塞的雄伟气势。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 小镇全景机位</h4>
                  <p className="text-sm text-gray-700">位于城堡瞭望台，采用俯拍角度，拍摄整个莱博德普罗旺斯的全貌，将错落有致的石质民居、蜿蜒的石板街巷、周边的橄榄林与薰衣草田融为一体。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 主街巷纵深感机位</h4>
                  <p className="text-sm text-gray-700">位于主街巷中段，采用侧拍角度，拍摄蜿蜒的石板街巷与两侧的石质民居，利用街巷的线条感与石质建筑的对称美，凸显街巷的纵深感与复古氛围。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 薰衣草田与小镇同框机位</h4>
                  <p className="text-sm text-gray-700">位于薰衣草观景台，采用平视角度，将紫色薰衣草田与石质小镇、蓝天白云同框，展现普罗旺斯的浪漫与古朴交融之美。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 中世纪教堂细节机位</h4>
                  <p className="text-sm text-gray-700">位于中世纪教堂正门前，采用平视角度，拍摄教堂的罗马式拱券、石质墙体与门窗装饰，清晰捕捉建筑的细节与艺术美感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 橄榄林田园机位</h4>
                  <p className="text-sm text-gray-700">位于小镇出口周边的橄榄林，采用平视或侧拍角度，拍摄大片的橄榄树与远处的山丘、石质小镇，展现普罗旺斯的田园风光。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照注意事项</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 游览小镇时，禁止攀爬城堡废墟、刻画石质建筑，避免损坏文物</li>
                <li>• 教堂内禁止大声喧哗，拍摄时禁止使用闪光灯</li>
                <li>• 薰衣草田内禁止踩踏、采摘，避免破坏植被</li>
                <li>• 户外拍摄时，注意脚下安全，避免在石板路上滑倒</li>
                <li>• 尊重当地居民的生活，不随意拍摄居民住宅与私人区域</li>
                <li>• 遵守景区规定，共同保护历史遗迹与景区环境</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">阿尔勒（Arles）</h4>
                <p className="text-sm text-gray-700 mb-2">距离小镇约20公里，驾车25分钟可达，乘坐巴士40分钟可达，是普罗旺斯地区重要的历史文化名城，也是梵高曾经居住与创作的地方。阿尔勒保留着完整的罗马遗迹。</p>
                <div className="text-xs text-gray-500">🚗 车程25分钟 | 🏛️ 罗马遗迹</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">瓦朗索勒薰衣草田（Valensole Lavender Fields）</h4>
                <p className="text-sm text-gray-700 mb-2">距离小镇约45公里，驾车50分钟可达，是普罗旺斯最著名的薰衣草田之一，每年6-8月，大片的薰衣草盛开，紫色的花海随风摇曳。</p>
                <div className="text-xs text-gray-500">🚗 车程50分钟 | 🌸 薰衣草花海</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">圣雷米普罗旺斯（Saint-Rémy-de-Provence）</h4>
                <p className="text-sm text-gray-700 mb-2">距离小镇约30公里，驾车35分钟可达，乘坐巴士1小时可达，是一座古朴的普罗旺斯小镇，保留着完整的中世纪风貌，也是梵高精神病院的所在地。</p>
                <div className="text-xs text-gray-500">🚗 车程35分钟 | 🏘️ 中世纪小镇</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">卡马格湿地（Camargue）</h4>
                <p className="text-sm text-gray-700 mb-2">距离小镇约60公里，驾车1小时可达，是法国最大的湿地保护区，也是普罗旺斯独特的自然景观之一。湿地内芦苇丛生，湖泊密布。</p>
                <div className="text-xs text-gray-500">🚗 车程1小时 | 🌿 自然湿地</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">小镇内住宿</h4>
                  <p className="text-sm text-blue-800">优先选择小镇内的住宿，步行可达小镇核心景点、主街巷与城堡，方便游览，同时能深度感受中世纪石质小镇的古朴氛围。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">小镇边缘或周边乡村</h4>
                  <p className="text-sm text-green-800">如果喜欢安静，可选择小镇边缘或周边的乡村民宿，环境静谧，能欣赏到普罗旺斯的田园风光，适合休息。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">小镇入口或停车场附近</h4>
                  <p className="text-sm text-yellow-800">若计划游览周边景点（如阿尔勒、瓦朗索勒薰衣草田），可选择靠近小镇入口或停车场的住宿，交通更便捷。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">可选择小镇内的青年旅社，普遍干净整洁、价格实惠，大多步行可达核心景点，部分提供公共厨房，适合背包客与预算有限的游客。</p>
                  <div className="text-xs text-gray-500">💰 预算友好 | 🎒 背包客首选</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中档三星级酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">地理位置优越，房间舒适，部分设有餐厅，提供普罗旺斯传统美食，适合家庭与情侣，性价比高，设施完善。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭出游</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高档四星级以上酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于小镇高处或周边乡村，环境优雅，房间装饰精美，部分可欣赏到小镇全景或薰衣草田风光，设有露台与高级餐厅，适合追求品质的游客。</p>
                  <div className="text-xs text-gray-500">🏰 豪华住宿 | 🏞️ 自然景观</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">特色民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">可选择小镇内的石质民居改造的房源，装修古朴，充满普罗旺斯风情，常提供当地特色早餐，充满乡土气息，适合喜欢体验当地生活的游客。</p>
                  <div className="text-xs text-gray-500">🏡 石质民居 | 🍳 特色早餐</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季预订：</strong>莱博德普罗旺斯的旅游旺季为6-8月（薰衣草盛开期）与4-5月、9-10月（春秋季），游客较多，建议提前1-2个月预订住宿</p>
                    <p className="mb-2"><strong>淡季优惠：</strong>冬季游客较少，可提前1-2周预订，部分住宿会推出优惠活动，性价比更高</p>
                    <p><strong>特色服务：</strong>部分住宿提供莱博德城堡门票折扣券，可节省游览成本</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>法国的酒店与民宿通常不提供一次性洗漱用品，需自备牙刷、牙膏、毛巾等</p>
                    <p className="mb-2"><strong>电器准备：</strong>当地电压为230V，插头为Type F型，与德国、比利时一致，可提前准备转换插头</p>
                    <p><strong>特殊注意：</strong>夏季普罗旺斯气温较高，住宿时可关注是否有空调设施，避免影响休息</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                莱博德普罗旺斯，这座矗立在普罗旺斯山丘上的中世纪石头城，承载着千年的历史记忆，融合了军事遗迹的沧桑、艺术小镇的灵动与田园风光的静谧。在这里，你可以漫步石板街巷，触摸石质建筑的纹理；驻足城堡废墟，追忆中世纪的峥嵘岁月；徜徉薰衣草田，感受普罗旺斯的浪漫气息；穿梭艺术画廊，品味当代艺术的魅力。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                希望这份攻略能帮助你更好地游览莱博德普罗旺斯，深入了解普罗旺斯的历史与文化，留下一段难忘的法国南部旅行记忆。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在千年石头城与普罗旺斯田园风光的交融中，邂逅一段跨越时空的艺术文化之旅。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}