import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '孔克修道院・Conques Abbey・法国・孔克 | 最佳欧洲景点',
  description: '探索孔克修道院，法国中世纪罗马式建筑的典范，坐落于法国南部洛特峡谷旁的山丘之上，地处朝圣之路核心节点。',
}

export default function ConquesAbbeyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '孔克修道院', href: '/attractions/conques-abbey' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">孔克修道院・Conques Abbey・法国・孔克</h1>
          <p className="text-lg text-gray-600 mb-6">
            孔克修道院始建于11世纪，是法国著名罗马式建筑瑰宝，坐落于孔克中世纪村庄中心，地处朝圣之路关键站点。修道院以圣福瓦圣女遗骸为核心，拥有精美末日审判 tympanum、珍贵黄金宝藏与皮埃尔·苏拉奇现代彩色玻璃窗，留存着中世纪宗教文物，兼具宗教神圣性与建筑艺术价值，是追溯基督教朝圣历史、欣赏罗马式建筑的核心景点。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              孔克修道院始建于11世纪，是法国著名罗马式建筑瑰宝，坐落于孔克中世纪村庄中心，地处朝圣之路关键站点。修道院以圣福瓦圣女遗骸为核心，拥有精美末日审判 tympanum、珍贵黄金宝藏与皮埃尔·苏拉奇现代彩色玻璃窗，留存着中世纪宗教文物，兼具宗教神圣性与建筑艺术价值，是追溯基督教朝圣历史、欣赏罗马式建筑的核心景点。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="孔克修道院" />
                <InfoRow label="英文名称" value="Conques Abbey" />
                <InfoRow label="全称" value="Abbatiale Sainte-Foy de Conques（圣福瓦修道院）" />
                <InfoRow label="国家" value="法国（France）" />
                <InfoRow label="城市" value="孔克（Conques）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="所属区域" value="法国奥克西塔尼大区阿韦龙省" />
                <InfoRow label="历史地位" value="法国中世纪罗马式建筑的典范" />
                <InfoRow label="核心特色" value="朝圣之路核心节点，圣福瓦圣女遗骸供奉地" />
                <InfoRow label="建筑价值" value="11世纪罗马式建筑，融合现代彩色玻璃窗" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="修道院教堂每日7:30-22:00；宝藏室淡季10:00-16:30，旺季9:30-17:30" />
              <InfoRow label="门票价格" value="修道院教堂免费开放；宝藏室成人8欧元，青少年5欧元，儿童3欧元" />
              <InfoRow label="地址" value="Abbatiale Sainte-Foy, 12320 Conques, France" />
              <InfoRow label="交通方式" value="从图卢兹乘火车至罗德兹转巴士约2.5小时；从罗德兹乘巴士直达约1小时" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                孔克修道院的历史可追溯至8世纪，最初是为供奉圣福瓦圣女遗骸而建，历经千年修缮与扩建，逐渐发展成为欧洲中世纪重要的宗教圣地与朝圣节点，见证了基督教在欧洲的传播与发展，也承载着法国南部的历史与文化记忆，是罗马式建筑艺术的集大成者。
              </p>
              <p>
                8世纪至10世纪，是修道院的初创期。据传，圣福瓦圣女是3世纪的基督教殉道者，其遗骸最初安葬于阿让，8世纪时，为躲避宗教迫害，修士们将其遗骸迁移至孔克，修建了一座简易的小教堂，用于供奉圣物，这便是孔克修道院的雏形。这一时期，孔克地区人烟稀少，修道院主要作为修士修行、供奉圣物的场所，规模较小，建筑风格较为简朴，仅具备基本的宗教功能，逐渐成为当地基督教信徒的朝圣之地。
              </p>
              <p>
                11世纪至12世纪，孔克修道院进入鼎盛时期，成为欧洲重要的朝圣站点与罗马式建筑典范。11世纪初，当地修士与信徒出资，对修道院进行大规模扩建，采用罗马式建筑风格，修建了主教堂、回廊、宝藏室等建筑，形成了完整的修道院建筑群。这一时期，通往圣地亚哥-德孔波斯特拉的朝圣之路逐渐繁荣，孔克作为必经之地，修道院成为朝圣者的重要休憩与祈祷场所，吸引了大量来自欧洲各地的朝圣者，也积累了丰厚的捐赠，用于修道院的修缮与扩建。主教堂的末日审判 tympanum、黄金宝藏均在这一时期完成，成为修道院的标志性特色，罗马式建筑风格的厚重墙体、半圆拱券、高耸塔楼等元素尽显庄严大气。
              </p>
              <p>
                13世纪至16世纪，修道院维持繁荣，同时经历了多次修缮与改造。随着中世纪欧洲宗教文化的发展，修道院不断完善建筑设施，增设了修士宿舍、图书馆、厨房等，成为兼具宗教修行、文化传播与朝圣接待功能的综合性宗教场所。这一时期，修道院的图书馆收藏了大量中世纪宗教手稿与文献，成为当地重要的文化中心；同时，修道院周边逐渐形成了以服务朝圣者为主的村落，孔克镇也随之发展起来，形成了如今古朴的中世纪风貌。期间，修道院虽经历小规模战乱与自然灾害，但核心建筑与圣物得以保存，未遭到严重破坏。
              </p>
              <p>
                17世纪至19世纪，修道院历经动荡与衰落。17世纪，欧洲宗教改革爆发，基督教分裂，孔克修道院的影响力逐渐下降，朝圣者数量减少，修道院的修缮与维护陷入停滞。1789年法国大革命爆发后，修道院遭到冲击，部分建筑被损毁，珍贵文物被掠夺，修士被迫离开，修道院一度被改为公共设施，宗教功能几乎丧失。19世纪，法国政府开始重视历史文化遗产保护，将孔克修道院列为国家级历史遗迹，组织人员对受损建筑进行修复，恢复其罗马式建筑风貌，同时找回部分被掠夺的文物，重新整理宝藏室，让修道院逐渐恢复生机。
              </p>
              <p>
                20世纪至今，孔克修道院迎来全面保护与新生。20世纪初，法国政府对修道院进行系统性修缮，严格保留其罗马式建筑原貌，同时完善基础设施，增设游客服务设施。1980年，著名画家皮埃尔·苏拉奇为修道院主教堂设计了现代彩色玻璃窗，将当代艺术与中世纪建筑完美融合，为古老的修道院注入了新的活力。如今，孔克修道院不仅是法国重要的历史文化遗产与旅游景点，仍是基督教信徒的朝圣圣地，每年吸引着世界各地的游客与朝圣者前来，既保留着中世纪的宗教庄严，又融入了现代艺术的美感，成为历史与现代交融的典范。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐游览路线（2.5-3小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  镇中心广场 → 修道院入口 → 主教堂正门（末日审判 tympanum） → 主教堂内部 → 宝藏室 → 修道院回廊 → 苏拉奇彩色玻璃窗观景区 → 修道院庭院 → 修道院出口 → 孔克老城区
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>可从镇中心广场出发，全程步行游览，路线舒缓，兼顾宗教建筑、历史文物与乡村风情，可租赁语音导览（支持多语言），也可跟随当地导览团（需提前预约英文导览）
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 镇中心广场</h4>
                  <p className="text-sm text-gray-700 mb-2">作为孔克镇的核心区域，广场矗立着圣福瓦圣女雕像与古朴喷泉，周边环绕着中世纪石质房屋、特色商铺与咖啡馆，是当地市民与游客休闲聚会的场所。</p>
                  <div className="text-xs text-gray-500">🏛️ 镇中心 | 🏘️ 中世纪建筑</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 修道院入口</h4>
                  <p className="text-sm text-gray-700 mb-2">从镇中心广场步行2分钟即可抵达修道院入口，入口处是一座古朴的石质拱门，拱门上方雕刻着宗教图案与铭文，彰显着修道院的庄严。</p>
                  <div className="text-xs text-gray-500">🚶 步行2分钟 | 🏛️ 中世纪拱门</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 主教堂正门（末日审判 tympanum）</h4>
                  <p className="text-sm text-gray-700 mb-2">进入入口后，首先映入眼帘的是主教堂正门，正门上方的末日审判 tympanum是修道院的标志性景观，创作于12世纪，由124个彩色人物雕像组成。</p>
                  <div className="text-xs text-gray-500">⛪ 罗马式雕刻 | 🎨 末日审判</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 主教堂内部</h4>
                  <p className="text-sm text-gray-700 mb-2">进入主教堂，内部宽敞肃穆，采用罗马式建筑风格，厚重的石质墙体、半圆拱券与高耸的拱顶，营造出庄严神圣的氛围。</p>
                  <div className="text-xs text-gray-500">🏰 罗马式建筑 | 🕊️ 宗教氛围</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 宝藏室</h4>
                  <p className="text-sm text-gray-700 mb-2">从主教堂侧门进入宝藏室，这里是修道院的核心看点之一，收藏着欧洲中世纪最丰富的黄金工艺品与宗教圣物，其中最著名的便是圣福瓦圣女的金雕像。</p>
                  <div className="text-xs text-gray-500">💎 黄金宝藏 | 🏺 宗教圣物</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 修道院回廊</h4>
                  <p className="text-sm text-gray-700 mb-2">从宝藏室出来，步行5分钟即可抵达修道院回廊，回廊环绕着修道院庭院，采用罗马式拱券设计，墙面雕刻着精美的宗教图案与修士修行场景。</p>
                  <div className="text-xs text-gray-500">🏛️ 罗马式拱券 | 🧘 修士修行</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">7. 苏拉奇彩色玻璃窗观景区</h4>
                  <p className="text-sm text-gray-700 mb-2">回廊尽头便是苏拉奇彩色玻璃窗观景区，这里的彩色玻璃窗由著名画家皮埃尔·苏拉奇设计，于1980年安装完成，采用简洁的几何图案与深邃的色彩。</p>
                  <div className="text-xs text-gray-500">🌈 现代艺术 | 🎨 彩色玻璃</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">8. 修道院庭院</h4>
                  <p className="text-sm text-gray-700 mb-2">从观景区下来，即可抵达修道院庭院，庭院是当年修士们劳作、休息的场所，地面由石板铺成，周边环绕着古朴的石质建筑与绿植。</p>
                  <div className="text-xs text-gray-500">🌿 修道院庭院 | ⛲ 古朴喷泉</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">9. 修道院出口与孔克老城区</h4>
                  <p className="text-sm text-gray-700 mb-2">从庭院出发，步行5分钟即可抵达修道院出口，出口处设有纪念品商铺，可购买宗教主题纪念品与当地特色手工艺品。出修道院后，可漫步在孔克老城区。</p>
                  <div className="text-xs text-gray-500">🛍️ 纪念品 | 🏘️ 中世纪村庄</div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 主教堂正门 tympanum 特写机位</h4>
                  <p className="text-sm text-gray-700">位于主教堂正门前，采用平视角度，近距离拍摄末日审判 tympanum 的雕刻细节，清晰捕捉人物的神态、服饰与雕刻纹理，展现罗马式雕刻艺术的精湛。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 修道院全景机位</h4>
                  <p className="text-sm text-gray-700">位于镇中心广场旁的山丘小径上，采用平视角度，拍摄修道院的全貌，将修道院的罗马式塔楼、石质墙体与周边的中世纪村庄、山丘风光融为一体。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 回廊纵深感机位</h4>
                  <p className="text-sm text-gray-700">位于修道院回廊中段，采用侧拍角度，拍摄回廊的蜿蜒景象与拱券结构，利用拱券的对称美与线条感，凸显回廊的纵深感与庄严氛围。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 彩色玻璃窗光影机位</h4>
                  <p className="text-sm text-gray-700">位于主教堂内部靠近玻璃窗的位置，采用侧拍角度，拍摄阳光透过苏拉奇彩色玻璃窗形成的光影效果，将玻璃窗的色彩与教堂内部的石质建筑、宗教雕像融为一体。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 宝藏室圣物机位</h4>
                  <p className="text-sm text-gray-700">在宝藏室内指定拍摄区域，采用平视角度，拍摄圣福瓦圣女金雕像的特写，清晰展现雕像的黄金质感、宝石细节与精湛工艺，凸显中世纪金匠艺术的魅力。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 老城区与修道院远景机位</h4>
                  <p className="text-sm text-gray-700">位于孔克老城区的高处小径上，采用俯拍角度，拍摄修道院与老城区的全景，将中世纪石屋、蜿蜒石板路与修道院的塔楼同框，展现孔克镇的古朴风貌与修道院的庄严气势。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照注意事项</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 游览修道院时，禁止攀爬建筑、刻画墙体，避免损坏文物</li>
                <li>• 主教堂内禁止大声喧哗，拍摄时禁止使用闪光灯</li>
                <li>• 宝藏室部分展品禁止拍摄，需遵守现场指示</li>
                <li>• 户外拍摄时，注意脚下安全，避免踩踏草坪、破坏植被</li>
                <li>• 尊重宗教信仰，在祈祷区不随意拍摄、不打扰信徒</li>
                <li>• 遵守景区规定，共同保护历史遗迹与景区环境</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">孔克老城区（Conques Old Town）</h4>
                <p className="text-sm text-gray-700 mb-2">距离修道院约300米，步行5分钟可达，是孔克镇的核心区域，被评为"法国最美丽的村庄"之一，保留着完整的中世纪风貌。老城区街道蜿蜒曲折，由石板铺成，两侧是古朴的石质民居、特色商铺、咖啡馆与餐馆。</p>
                <div className="text-xs text-gray-500">🚶 步行5分钟 | 🏘️ 中世纪村庄</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">洛特峡谷（Gorges du Lot）</h4>
                <p className="text-sm text-gray-700 mb-2">距离修道院约15公里，驾车20分钟可达，乘坐出租车约25分钟可达，是法国南部最美丽的自然景观之一，峡谷两侧悬崖峭壁，洛特河蜿蜒流淌，两岸风光秀丽，兼具雄奇与秀美。</p>
                <div className="text-xs text-gray-500">🚗 车程20分钟 | 🏞️ 自然景观</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">穆瓦萨克修道院（Abbaye de Moissac）</h4>
                <p className="text-sm text-gray-700 mb-2">距离修道院约45公里，驾车50分钟可达，乘坐巴士约1小时可达，始建于7世纪，是法国另一座重要的罗马式建筑遗迹，与孔克修道院并称为"法国南部罗马式建筑双瑰宝"。</p>
                <div className="text-xs text-gray-500">🚗 车程50分钟 | ⛪ 罗马式建筑</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">圣西尔克-拉波皮村庄（Saint-Cirq-Lapopie）</h4>
                <p className="text-sm text-gray-700 mb-2">距离修道院约30公里，驾车35分钟可达，乘坐巴士约45分钟可达，同样被评为"法国最美丽的村庄"，坐落于洛特河畔的悬崖之上，保留着完整的中世纪石质建筑，建筑依山而建，错落有致。</p>
                <div className="text-xs text-gray-500">🚗 车程35分钟 | 🏰 悬崖村庄</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">修道院周边或镇中心</h4>
                  <p className="text-sm text-blue-800">优先选择修道院周边或镇中心的住宿，步行可达修道院、镇中心广场与老城区核心区域，方便游览，同时能深度感受孔克的中世纪古朴氛围。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">镇边缘或洛特峡谷附近</h4>
                  <p className="text-sm text-green-800">如果喜欢安静，可选择镇边缘或洛特峡谷附近的住宿，环境静谧，能欣赏到自然风光，适合休息，适合喜欢自然风光的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">镇入口或停车场附近</h4>
                  <p className="text-sm text-yellow-800">若计划游览周边景点（如穆瓦萨克修道院、洛特峡谷），可选择靠近镇入口或停车场的住宿，交通更便捷，便于驾车前往周边景点。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">可选择镇内的青年旅社，普遍干净整洁、价格实惠，大多步行可达核心景点，部分提供公共厨房，适合背包客与预算有限的游客。</p>
                  <div className="text-xs text-gray-500">💰 预算友好 | 🎒 背包客首选</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中档三星级酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">地理位置优越，房间舒适，部分设有餐厅，提供当地传统美食，适合家庭与情侣，性价比高，设施完善。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭出游</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高档四星级以上酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于修道院周边或洛特河畔，环境优雅，房间装饰精美，部分可欣赏到修道院或峡谷远景，设有露台与高级餐厅，适合追求品质的游客。</p>
                  <div className="text-xs text-gray-500">🏰 豪华住宿 | 🏞️ 自然景观</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">家庭经营民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">可选择老城区的家庭经营房源，多为石质建筑，装修古朴，常提供当地特色早餐，充满乡土气息，适合喜欢体验当地生活的游客。</p>
                  <div className="text-xs text-gray-500">🏡 家庭氛围 | 🍳 特色早餐</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季预订：</strong>孔克的旅游旺季为4月至10月，尤其是夏季（7-8月）与朝圣旺季（5月、9月），游客较多，建议提前1-2个月预订住宿</p>
                    <p className="mb-2"><strong>淡季优惠：</strong>冬季游客较少，可提前1-2周预订，部分住宿会推出优惠活动，性价比更高</p>
                    <p><strong>特色服务：</strong>部分住宿提供修道院宝藏室门票折扣券，可节省游览成本</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>法国的酒店与民宿通常不提供一次性洗漱用品，需自备牙刷、牙膏、毛巾等</p>
                    <p className="mb-2"><strong>电器准备：</strong>当地电压为230V，插头为Type F型，与德国、比利时一致，可提前准备转换插头</p>
                    <p><strong>特殊注意：</strong>冬季孔克气温较低，部分山区可能有降雪，住宿时可关注是否有供暖设施，避免影响休息</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                孔克修道院，这座矗立在法国南部山丘上的千年罗马式瑰宝，承载着欧洲中世纪的宗教文化与历史记忆，融合了建筑艺术的精湛、宗教信仰的庄严与现代艺术的活力，既有中世纪的古朴沧桑，又有法国南部乡村的温馨惬意。在这里，你可以驻足末日审判 tympanum 前，品味罗马式雕刻的魅力；漫步修道院回廊，感受修士们的修行日常；驻足宝藏室，探寻中世纪的金匠艺术；穿梭在孔克老城区，体验法国南部的乡村风情。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                希望这份攻略能帮助你更好地游览孔克修道院，深入了解法国南部的历史与文化，留下一段难忘的欧洲旅行记忆。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在千年修道院与法国南部乡村的交融中，邂逅一段跨越时空的宗教文化之旅。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}