import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '格拉多古城・Grado・意大利・格拉多 | 最佳欧洲景点',
  description: '探索格拉多古城，意大利亚得里亚海岸的千年阳光秘境，素有"太阳之岛"的美誉，融合古罗马遗迹、中世纪建筑与海滨风光，是兼具千年历史底蕴、海滨风情与温泉养生特色的古城。',
}

export default function GradoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '格拉多', href: '/destinations/italy' },
            { label: '格拉多古城', href: '/attractions/grado' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">格拉多古城・Grado・意大利・格拉多</h1>
          <p className="text-lg text-gray-600 mb-6">
            格拉多古城是意大利北部亚得里亚海岸的千年瑰宝，曾是古罗马重要港口与早期基督教核心教区，有"新阿奎莱亚"之称。古城融合古罗马遗迹、中世纪建筑与海滨风光，核心亮点为圣欧费米亚大教堂的精美马赛克壁画与原生态泻湖景观，兼具历史厚重感与自然灵动感，是感受古罗马文化、基督教传承与地中海海滨风情的绝佳去处。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              格拉多古城是意大利北部亚得里亚海岸的千年瑰宝，曾是古罗马重要港口与早期基督教核心教区，有"新阿奎莱亚"之称。古城融合古罗马遗迹、中世纪建筑与海滨风光，核心亮点为圣欧费米亚大教堂的精美马赛克壁画与原生态泻湖景观，兼具历史厚重感与自然灵动感，是感受古罗马文化、基督教传承与地中海海滨风情的绝佳去处。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="格拉多古城" />
                <InfoRow label="英文名称" value="Grado" />
                <InfoRow label="国家" value="意大利（Italy）" />
                <InfoRow label="城市" value="格拉多（Grado）" />
                <InfoRow label="所属区域" value="意大利弗留利-威尼斯朱利亚大区戈里齐亚省" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="千年古城、早期基督教核心教区" />
                <InfoRow label="核心特色" value="古罗马遗迹、中世纪建筑、海滨风光" />
                <InfoRow label="建筑价值" value="圣欧费米亚大教堂、马赛克壁画" />
                <InfoRow label="自然价值" value="原生态泻湖景观、地中海海滨风情" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="古城整体全天开放，核心景点夏季9:00-18:00，冬季9:00-17:00" />
              <InfoRow label="门票价格" value="古城公共区域免费开放，大教堂特展区4欧元，考古博物馆6欧元" />
              <InfoRow label="地址" value="Piazza della Basilica, 34073 Grado GO, Italy" />
              <InfoRow label="交通方式" value="从罗马乘高铁至乌迪内换乘区域火车，全程约4.5小时；从威尼斯乘长途巴士约1.5小时直达" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                格拉多古城的历史源远流长，最早可追溯至古罗马时期，当时被称为"Ad Aquae Gradatae"，是船只进入纳蒂萨河（今纳蒂索内河）、前往上游阿奎莱亚的首个港口，凭借优越的海滨地理位置，逐渐成为古罗马北方重要的贸易中转站，主要经营木材、海鲜、皮革等商品，同时也是古罗马军队的重要补给港口，遗址内至今仍保留着古罗马时期的码头地基与道路遗迹。
              </p>
              <p>
                公元4世纪，基督教传入格拉多，这座海滨小城逐渐成为早期基督教的重要传播中心。公元452年，匈奴王阿提拉率军入侵意大利，阿奎莱亚遭到毁灭性破坏，阿奎莱亚主教尼切塔曾短暂避难于格拉多，同年，格拉多第一座大教堂——圣玛利亚感恩教堂与洗礼堂建成，开启了格拉多基督教文化的辉煌历程。公元568年，伦巴第人入侵意大利并占领阿奎莱亚，阿奎莱亚大主教保利努斯一世避难于仍受拜占庭统治的格拉多，公元579年，阿奎莱亚大主教区正式迁移至格拉多，格拉多成为大主教的永久驻地，也因此被称为"新阿奎莱亚"，成为当时基督教在欧洲北方的核心教区之一。
              </p>
              <p>
                中世纪时期，格拉多凭借泻湖与海滨的地理优势，逐渐发展为重要的渔业与贸易中心，泻湖周边的渔民修建了大量茅草屋顶的简易房屋（Casoni），这些房屋成为格拉多独特的民俗景观，渔民们常年在泻湖劳作，仅在寒冷季节返回古城居住。这一时期，格拉多修建了大量中世纪建筑，包括圣欧费米亚大教堂、市政厅、古老城墙等，形成了如今错落有致的古城格局，同时，这里也是著名诗人比亚焦·马里诺的出生地，诗人用当地威尼斯方言歌颂这座岛屿的美丽与风情。
              </p>
              <p>
                1873年，医生朱塞佩·巴雷拉伊在格拉多建立了面向儿童的海滨疗养院，凭借当地宜人的气候与优质的海滨环境，格拉多逐渐成为知名的温泉疗养胜地，尤其受到奥地利民众的喜爱，成为欧洲贵族休闲度假的首选之地。近代以来，格拉多始终注重历史遗迹与自然环境的保护，既保留了千年历史的建筑遗存，又守护了泻湖的原生态风貌，如今，这座古城不仅是旅游胜地，更是融合历史、文化、自然与养生的独特秘境，向人们诉说着亚得里亚海岸的千年沧桑与辉煌。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（2-3小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从古城游客中心出发，领取游览地图后，首先前往圣欧费米亚大教堂，这座始建于公元5世纪的基督教教堂，是格拉多古城的标志性建筑，外墙采用古罗马砖石结构，古朴厚重，内部最具看点的是马赛克壁画，覆盖教堂地面与墙面，色彩鲜艳、细节精美，融合了基督教教义与古罗马艺术风格，重点欣赏主祭坛前的马赛克地面与墙面的宗教壁画，感受早期基督教艺术的魅力。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  随后漫步至古城核心广场——主教广场，广场环绕圣欧费米亚大教堂，周边是中世纪市政厅与复古商铺，广场上设有露天咖啡馆与座椅，可驻足休憩，感受古城的悠闲氛围，重点观察广场周边的中世纪建筑细节与雕塑遗存。之后前往格拉多考古博物馆，馆内收藏了古城内发掘的大量文物，包括古罗马时期的陶器、雕塑、金币、手稿，以及早期基督教的壁画残片、墓碑等，通过文物展览，可深入了解格拉多的千年历史发展与文化传承，重点参观古罗马港口遗迹展区与基督教文物展区。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  最后前往泻湖沿岸步道，这条步道沿着泻湖延伸，可欣赏到原生态的泻湖景观，远处是错落的渔民小屋（Casoni），近处是清澈的湖水与水鸟，感受自然与人文的交融，游览结束后，可在古城核心区域的纪念品商店，购买马赛克复制品、当地海鲜制品、泻湖特色手工艺品等，结束精华游览。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速体验古城精华
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（4-5小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加小众遗迹、泻湖探秘与当地美食体验，深入感受格拉多的历史、自然与民俗魅力。参观完泻湖沿岸步道后，前往古城东侧的古罗马码头遗迹，这里曾是古罗马时期的重要贸易港口，如今仍能看到石砌地基与航道遗迹，可想象昔日港口的繁忙景象，重点观察码头的建筑工艺与历史痕迹。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  随后预约古城深度导览（导览费8欧元/人，全程1小时，有意大利语、英语两种语言可选），跟随导览深入了解古城的历史变迁、建筑特色与隐藏的历史细节，重点参观未完全发掘的古罗马民居遗迹与中世纪手工业作坊遗址，聆听渔民文化与基督教传播的相关故事。中午前往古城内的特色餐厅，品尝格拉多传统美食，如地中海烤海鲜、意大利海鲜烩饭、当地特色面包与白葡萄酒，体验弗留利-威尼斯朱利亚大区的饮食文化，推荐尝试当地特色的泻湖鲜鱼料理，口感鲜嫩，风味独特。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  下午前往泻湖生态区，可乘坐小型游船（票价10欧元/人，全程40分钟）游览泻湖，近距离观察水鸟、芦苇丛与渔民小屋，感受原生态的自然之美，游船会停靠渔民小屋周边，可下车参观，了解当地渔民的传统生活方式。傍晚时分，返回主教广场，欣赏夕阳下的圣欧费米亚大教堂与古城全景，夕阳洒在古老的砖石建筑上，搭配泻湖的余晖，氛围感拉满，之后可在广场周边的露天咖啡馆小坐，品尝当地甜点与咖啡，感受古城的夜晚氛围，结束深度游览。
                </p>
                <div className="text-sm text-green-800 bg-green-100 p-3 rounded">
                  <strong>适合人群：</strong>喜欢细致游览的游客，想要深度体验古城文化
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 圣欧费米亚大教堂正门台阶</h4>
                  <p className="text-sm text-gray-700">拍摄古城标志性建筑的最佳机位之一，站在台阶上，可完整拍摄大教堂的正面全貌，砖石外墙搭配古朴的拱门，凸显中世纪建筑的庄严与厚重，背景是古城的石板街巷。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 大教堂内部马赛克壁画前</h4>
                  <p className="text-sm text-gray-700">拍摄宗教艺术特写的绝佳机位，大教堂内的马赛克壁画色彩鲜艳、细节精美，涵盖宗教故事与古罗马人的生活场景，拍摄时可采用平视或轻微仰拍视角。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 泻湖沿岸步道中段</h4>
                  <p className="text-sm text-gray-700">这里是拍摄古城与泻湖结合的最佳机位，步道一侧是古城的低矮建筑，另一侧是清澈的泻湖与远处的渔民小屋，可将建筑、湖水、芦苇丛同框，画面清新自然。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 主教广场中央</h4>
                  <p className="text-sm text-gray-700">这是拍摄古城烟火气的绝佳机位，广场上的露天咖啡馆、复古商铺、往来的游客，搭配周边的中世纪建筑，能捕捉到古城的悠闲氛围，画面充满生活气息。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 古罗马码头遗迹旁</h4>
                  <p className="text-sm text-gray-700">这里是拍摄历史与自然交融的绝佳机位，码头的石砌地基延伸至泻湖，周边是芦苇丛与水鸟，既有古罗马遗迹的古朴，又有泻湖的灵动。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 古城石板街巷深处</h4>
                  <p className="text-sm text-gray-700">古城内的石板街巷狭窄古朴，两侧是低矮的中世纪建筑与盛开的鲜花，自带复古清新氛围，是拍摄人像与氛围感照片的绝佳机位。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 古城建筑以砖石色调为主，泻湖呈现出清澈的蓝色，建议穿搭浅色系、清新风格或复古风格衣物，形成和谐的色调</li>
                <li>• 拍摄马赛克壁画时，禁止使用闪光灯，尊重文物保护规定</li>
                <li>• 禁止攀爬遗迹、触摸文物，拍摄时避免影响其他游客游览与古城保护</li>
                <li>• 傍晚时分的光线最适合拍摄，可呈现出温暖的氛围感，凸显古城的古朴与灵动</li>
                <li>• 拍摄泻湖全景时，可使用广角视角，完整展现泻湖的原生态风貌与古城的布局</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">阿奎莱亚遗址</h4>
                <p className="text-sm text-gray-700 mb-2">距离格拉多古城约15分钟车程，是1998年联合国教科文组织认定的世界文化遗产，曾是古罗马帝国北方重镇，保留着完整的古罗马广场、剧院、神庙、码头等遗迹。</p>
                <div className="text-xs text-gray-500">🚗 车程15分钟 | 🏛️ 古罗马遗址</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">马拉诺泻湖自然保护区</h4>
                <p className="text-sm text-gray-700 mb-2">距离格拉多古城约10分钟车程，与格拉多泻湖相连，是原生态的自然保护区，拥有大片芦苇丛、湿地与丰富的水鸟资源。</p>
                <div className="text-xs text-gray-500">🚗 车程10分钟 | 🌿 自然保护区</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">戈里齐亚古城</h4>
                <p className="text-sm text-gray-700 mb-2">距离格拉多古城约20分钟车程，是弗留利-威尼斯朱利亚大区戈里齐亚省的首府，保留着大量中世纪与文艺复兴时期的建筑。</p>
                <div className="text-xs text-gray-500">🚗 车程20分钟 | 🏛️ 中世纪古城</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">格拉多海滩</h4>
                <p className="text-sm text-gray-700 mb-2">距离格拉多古城约5分钟步行路程，是亚得里亚海沿岸的优质海滩，沙滩细腻，海水清澈，周边有海滨步道、餐厅与咖啡馆。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行5分钟 | 🏖️ 海滨风光</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">科利奥葡萄酒产区</h4>
                <p className="text-sm text-gray-700 mb-2">距离格拉多古城约25分钟车程，是意大利著名的葡萄酒产区之一，盛产白葡萄酒与红葡萄酒，周边有众多酒庄。</p>
                <div className="text-xs text-gray-500">🚗 车程25分钟 | 🍷 葡萄酒文化</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">的里雅斯特古城</h4>
                <p className="text-sm text-gray-700 mb-2">距离格拉多古城约1小时车程，是意大利东北部重要的港口城市，融合了意大利、奥地利、斯洛文尼亚等多元文化。</p>
                <div className="text-xs text-gray-500">🚗 车程1小时 | 🌍 多元文化</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">古城核心区域</h4>
                  <p className="text-sm text-blue-800">首选区域，距离圣欧费米亚大教堂、主教广场、考古博物馆等核心景点步行可达，周边有特色餐厅、咖啡馆与纪念品商店，既能便捷游览景点，又能感受古城的古朴氛围。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">格拉多海滩附近</h4>
                  <p className="text-sm text-green-800">距离古城核心区域约5分钟步行路程，可欣赏海滨风光，环境静谧舒适，适合休闲度假、喜欢看海的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">格拉多火车站附近</h4>
                  <p className="text-sm text-yellow-800">距离车站步行10分钟可达，周边有餐厅、便利店，生活便利，适合需要乘坐火车前往周边城市的游客。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端海滨景观酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于海滩附近或泻湖周边，融合地中海建筑元素与现代设施，自带观景露台、游泳池与私人海滩区域，部分酒店由古老建筑改造而成。</p>
                  <div className="text-xs text-gray-500">🏖️ 海滨体验 | 🏞️ 景观优美</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于古城附近或海滩周边，步行可达核心景点与海滩，房间干净整洁，设施齐全，部分酒店提供早餐与免费WiFi，价格约30-60欧元/晚。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭出游</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">多为家庭经营，风格温馨，部分民宿由古城民居改造而成，充满特色，价格约15-30欧元/晚，还能感受当地居民的生活氛围。</p>
                  <div className="text-xs text-gray-500">💰 预算友好 | 🏡 家庭氛围</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">适合独自旅行或预算有限的游客，价格实惠，通常位于交通便利的位置，可结识来自世界各地的旅行者，价格约10-20欧元/晚。</p>
                  <div className="text-xs text-gray-500">🎒 背包客首选 | 🌍 国际交流</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季（6-9月）：</strong>夏季气候宜人，是海滨度假与温泉疗养的最佳时期，游客较多，建议提前1-2个月预订</p>
                    <p className="mb-2"><strong>淡季（12月至次年5月）：</strong>可提前1-2周预订，价格相对实惠</p>
                    <p><strong>特色套餐：</strong>部分高端酒店推出住宿+温泉疗养、住宿+景点联票的优惠套餐</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>意大利住宿通常不提供洗漱用品，需自带牙刷、牙膏等</p>
                    <p className="mb-2"><strong>特殊注意：</strong>古城内部分酒店位于石板街巷旁，无电梯，预订时可提前咨询</p>
                    <p><strong>注意事项：</strong>古城及海滩周边夜间安静，需保持安静；大部分酒店为无烟酒店</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                格拉多古城，这座被誉为"太阳之岛"的海滨秘境，历经两千余年的沧桑变迁，既有古罗马时期的贸易繁华，又有早期基督教的庄严神圣，更有地中海海滨的清新灵动。在这里，你可以漫步在中世纪的石板街巷，触摸千年之前的砖石痕迹；可以走进圣欧费米亚大教堂，欣赏精美的马赛克壁画，感受早期基督教艺术的魅力；可以漫步泻湖沿岸，邂逅原生态的自然之美；可以前往海滨沙滩，享受地中海的阳光与海风。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                无论是独自旅行、情侣出游还是家庭度假，格拉多古城都能给你带来难忘的旅行体验，让你在古朴与清新的交融中，邂逅一段跨越千年的亚得里亚海岸之约，爱上这座兼具历史厚重与海滨风情的意大利北部名城。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在古朴与清新的交融中，邂逅一段跨越千年的亚得里亚海岸之约。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}