import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '曼托瓦古城・Mantua・意大利・曼托瓦 | 最佳欧洲景点',
  description: '探索曼托瓦古城，伦巴第的文艺复兴水城与千年人文秘境，被明乔河环绕，素有"北方威尼斯"之称，是2008年联合国教科文组织认定的世界文化遗产，承载着贡扎加家族的权力传奇与文艺复兴时期的艺术瑰宝。',
}

export default function MantuaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '曼托瓦古城', href: '/attractions/mantua-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">曼托瓦古城・Mantua・意大利・曼托瓦</h1>
          <p className="text-lg text-gray-600 mb-6">
            曼托瓦古城是意大利北部伦巴第大区的历史名城，被明乔河环绕，是文艺复兴时期的重要城邦。古城完整保留了中世纪与文艺复兴风格建筑，核心景点包括公爵宫、泰宫、圣安德烈亚大教堂等，藏有大量文艺复兴时期的壁画与艺术品，见证了贡扎加家族的辉煌，兼具水城灵秀与人文底蕴，是感受意大利北方历史与艺术魅力的核心地标。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              曼托瓦古城是意大利北部伦巴第大区的历史名城，被明乔河环绕，是文艺复兴时期的重要城邦。古城完整保留了中世纪与文艺复兴风格建筑，核心景点包括公爵宫、泰宫、圣安德烈亚大教堂等，藏有大量文艺复兴时期的壁画与艺术品，见证了贡扎加家族的辉煌，兼具水城灵秀与人文底蕴，是感受意大利北方历史与艺术魅力的核心地标。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="曼托瓦古城" />
                <InfoRow label="英文名称" value="Mantua" />
                <InfoRow label="国家" value="意大利（Italy）" />
                <InfoRow label="城市" value="曼托瓦（Mantova）" />
                <InfoRow label="所属区域" value="意大利伦巴第大区曼托瓦省" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="世界文化遗产、文艺复兴水城" />
                <InfoRow label="核心特色" value="水城风貌、文艺复兴艺术" />
                <InfoRow label="建筑价值" value="中世纪与文艺复兴风格融合" />
                <InfoRow label="文化价值" value="贡扎加家族权力传奇" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="古城整体全天开放，核心景点夏季9:00-18:00，冬季9:00-17:00；每周一多数景点闭馆" />
              <InfoRow label="门票价格" value="古城免费开放，公爵宫成人票12欧元，优惠票6欧元；泰宫成人票10欧元，优惠票5欧元" />
              <InfoRow label="地址" value="Centro Storico di Mantova, 46100 Mantova MN, Italy" />
              <InfoRow label="交通方式" value="从罗马乘高铁约2.5小时直达；从米兰乘高铁约1小时直达" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                曼托瓦古城的历史源远流长，最早可追溯至公元前6世纪，由伊特鲁里亚人建立，最初是一个小型聚居地，因地处明乔河沿岸，凭借便利的水运逐渐发展为重要的商业据点。公元前222年，曼托瓦被罗马人征服，成为罗马帝国的重要城镇，期间修建了大量公共建筑、道路与水利设施，为古城的发展奠定了基础，如今古城地下仍保留着部分罗马时期的遗迹。
              </p>
              <p>
                中世纪时期，曼托瓦先后被伦巴第人、法兰克人统治，逐渐发展为一个独立的城邦。1328年，贡扎加家族夺取曼托瓦的统治权，建立了贡扎加公国，开启了对曼托瓦长达近400年的统治，这一时期也是曼托瓦历史上最辉煌的阶段。贡扎加家族不仅注重政治与经济的发展，更大力扶持文化艺术，将曼托瓦打造成意大利北部重要的文艺复兴文化中心。
              </p>
              <p>
                15世纪中叶，贡扎加家族的卢多维科三世侯爵邀请著名艺术家安德烈亚·曼特尼亚、安东尼奥·皮萨内洛等前来曼托瓦，装饰宫殿与教堂，留下了大量珍贵的壁画与雕塑作品。曼特尼亚为贡扎加家族绘制的肖像画与宫廷壁画，将人文主义思想融入艺术创作，成为文艺复兴时期的艺术典范。这一时期，曼托瓦的建筑风格也逐渐从哥特式向文艺复兴式转变，公爵宫、泰宫等标志性建筑相继建成，兼具权力象征与艺术美感。
              </p>
              <p>
                16世纪，贡扎加家族的权力达到顶峰，曼托瓦成为欧洲重要的政治、文化与艺术交流中心，吸引了众多学者、诗人与艺术家前来，城堡与宫殿成为文化交流的重要场所，藏书室收藏了大量珍贵的手稿、书籍与艺术品，彰显了当时的文化繁荣。但随着16世纪末欧洲战乱频繁，贡扎加家族的势力逐渐衰落，1707年，曼托瓦被纳入哈布斯堡王朝的统治范围，此后又历经拿破仑统治、意大利统一等历史变迁。
              </p>
              <p>
                近代以来，曼托瓦古城虽历经战乱与岁月侵蚀，但大部分建筑与城市格局得以完整保留。2008年，曼托瓦古城与周边的萨比奥内塔古城一同被联合国教科文组织列为世界文化遗产，理由是其完整保留了中世纪至文艺复兴时期的城市风貌，以及大量珍贵的艺术遗迹，成为研究意大利北方历史、建筑与文化的重要基地。如今，曼托瓦古城不仅是意大利重要的旅游景点，更是一座活着的历史博物馆，承载着千年的人文底蕴与艺术魅力。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（2-3小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从古城主入口进入，首先前往百草广场（Piazza delle Erbe），这是曼托瓦古城的核心广场，广场上有13世纪的法理宫（Palazzo della Ragione）与圣安德烈亚大教堂的侧面，周边环绕着复古商铺与咖啡馆，可感受古城的市井烟火气，拍摄复古街景。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  随后前往圣安德烈亚大教堂（Basilica di Sant'Andrea di Mantova），这座融合罗马式与哥特式风格的教堂，外墙雕刻精美，内部藏有曼特尼亚等著名艺术家的壁画与雕塑，重点欣赏教堂内的圣坛与穹顶壁画，感受宗教艺术的庄严与精美。之后前往公爵宫（Palazzo Ducale），这是贡扎加家族的宫殿，内部布局恢弘，房间内摆放着中世纪至文艺复兴时期的家具、挂毯与艺术品，墙面的壁画展现了贡扎加家族的生活场景与历史事件，重点参观宫殿内的壁画展厅与藏书室。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  最后前往明乔河滨河步道，沿河岸漫步，欣赏古城的水城风貌，远处的城堡与红瓦民居倒映在河水中，画面极具氛围感；游览结束后，可在广场周边的纪念品商店，购买壁画复制品、手工饰品等特色纪念品，结束精华游览。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速体验古城精华
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（4-5小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加泰宫、圣乔治城堡与小众景点探访，深入感受曼托瓦的历史与艺术魅力。参观完明乔河滨河步道后，前往泰宫（Palazzo Te），这座文艺复兴风格的宫殿是贡扎加家族的夏季行宫，宫殿内的壁画堪称艺术瑰宝，尤其是"巨人厅"的壁画，展现了神话故事与宫廷生活，细节精美，值得细细品味。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  随后前往圣乔治城堡（Castello San Giorgio），这座中世纪防御城堡位于明乔河畔，是曼托瓦古城的防御核心，城堡内保留着瞭望塔、地牢、议事厅等遗迹，登上瞭望塔可俯瞰整个古城与明乔河风光，感受中世纪城堡的防御气势。之后预约古城深度导览（导览费10欧元/人，全程1小时，有意大利语、英语两种语言可选），跟随导览深入了解古城的建筑工艺、壁画历史与贡扎加家族的传奇故事，重点参观小众遗迹与隐藏的壁画展厅。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  中午前往古城内的特色餐厅，品尝曼托瓦传统美食，如意大利烩饭、烤羊排、曼托瓦特色甜点与当地葡萄酒，体验伦巴第大区的饮食文化；下午前往维吉尔广场（Piazza Virgiliana），广场上有维吉尔雕像，可俯瞰明乔河与古城全景，适合漫步休憩、拍摄全景照；傍晚时分，返回百草广场，欣赏夕阳下的古城建筑，夕阳洒在红瓦屋顶与河面上，氛围感拉满，结束深度游览。
                </p>
                <div className="text-sm text-green-800 bg-green-100 p-3 rounded">
                  <strong>适合人群：</strong>喜欢细致游览的游客，想要深度体验老城文化
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 明乔河滨河步道</h4>
                  <p className="text-sm text-gray-700">拍摄古城水城风貌的最佳机位，站在步道上，可将古城的红瓦民居、桥梁与明乔河的流水同框，河水清澈，建筑倒映在水中，画面灵动柔美。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 百草广场</h4>
                  <p className="text-sm text-gray-700">广场是拍摄古城市井氛围的绝佳机位，法理宫的哥特式塔楼、圣安德烈亚大教堂的侧面建筑与周边的复古商铺、行人相映成趣，自带古朴文艺的氛围。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 公爵宫露台</h4>
                  <p className="text-sm text-gray-700">公爵宫的露台是拍摄古城全景的最佳机位之一，可将整个古城的街巷格局、明乔河风光与远处的田园景色尽收眼底，红瓦屋顶错落有致，河流环绕其间。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 泰宫巨人厅</h4>
                  <p className="text-sm text-gray-700">泰宫内部的巨人厅是拍摄文艺复兴壁画的绝佳机位，壁画覆盖整个墙面与穹顶，细节精美，色彩浓郁，展现了神话故事的恢弘场景。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 圣乔治城堡瞭望塔</h4>
                  <p className="text-sm text-gray-700">登上瞭望塔顶端，可拍摄古城与明乔河的全景，城堡的防御城墙、远处的桥梁与河面上的船只相映成趣，既有军事建筑的雄浑，又有水城的灵动。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 古城石板街巷</h4>
                  <p className="text-sm text-gray-700">古城内的石板街巷狭窄古朴，两侧是文艺复兴风格的民居，墙面爬满绿色藤蔓，自带复古氛围感。可站在街巷中间，拍摄街巷的延伸感。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 古城的建筑以红瓦、米白色墙面为主，搭配明乔河的湛蓝，建议穿搭素色、浅色系或复古风格衣物，形成和谐的色调</li>
                <li>• 拍摄水城风光时，可利用水面倒影，增加画面的层次感</li>
                <li>• 拍摄壁画时，禁止使用闪光灯，尊重当地文化</li>
                <li>• 禁止攀爬建筑与城墙，拍摄时避免影响其他游客游览</li>
                <li>• 傍晚时分的光线最适合拍摄，可呈现出温暖的氛围感</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">萨比奥内塔古城</h4>
                <p className="text-sm text-gray-700 mb-2">距离曼托瓦古城约30分钟车程，是2008年与曼托瓦一同被列入世界文化遗产的小城，保留着完整的文艺复兴时期城市格局，核心景点有萨比奥内塔城堡、市政厅、教堂等。</p>
                <div className="text-xs text-gray-500">🚗 车程30分钟 | 🏛️ 文艺复兴古城</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">明乔河公园</h4>
                <p className="text-sm text-gray-700 mb-2">距离曼托瓦古城约10分钟步行路程，沿明乔河修建，公园内种植着高大的树木，设有座椅与观景平台，可欣赏明乔河的流水风光与野生动物。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行10分钟 | 🌊 自然景观</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">科学比比亚纳剧院</h4>
                <p className="text-sm text-gray-700 mb-2">距离曼托瓦古城约7分钟步行路程，建于18世纪，是一座保存完好的巴洛克式剧院，内部装饰精美，可观看歌剧、音乐会等演出。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行7分钟 | 🎭 艺术表演</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">曼托瓦国家考古博物馆</h4>
                <p className="text-sm text-gray-700 mb-2">距离曼托瓦古城约8分钟步行路程，馆内收藏了曼托瓦及周边地区出土的古希腊、古罗马、中世纪时期的文物，包括陶器、雕塑、兵器、手稿等。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行8分钟 | 🏺 考古文化</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">维罗纳古城</h4>
                <p className="text-sm text-gray-700 mb-2">距离曼托瓦古城约1小时车程，是罗密欧与朱丽叶的故乡，保留着大量中世纪与文艺复兴时期的建筑，核心景点有朱丽叶故居、维罗纳竞技场、百草广场等。</p>
                <div className="text-xs text-gray-500">🚗 车程1小时 | 🏛️ 浪漫文化</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">曼托瓦犹太区</h4>
                <p className="text-sm text-gray-700 mb-2">距离曼托瓦古城约10分钟步行路程，是欧洲保存较完整的犹太区之一，保留着犹太教堂、民居与商铺，街巷狭窄古朴，充满独特的文化氛围。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行10分钟 | 🕍 小众文化</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">古城核心区域</h4>
                  <p className="text-sm text-blue-800">首选区域，距离百草广场、公爵宫、圣安德烈亚大教堂等核心景点步行可达，周边有特色餐厅、咖啡馆与纪念品商店，既能便捷游览景点，又能感受古城的古朴氛围。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">曼托瓦火车站附近</h4>
                  <p className="text-sm text-green-800">距离车站步行10分钟可达，周边有餐厅、便利店，生活便利，适合需要乘坐火车前往周边城市的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">明乔河沿岸</h4>
                  <p className="text-sm text-yellow-800">距离古城约15分钟步行路程，可欣赏河景，环境静谧舒适，适合喜欢自然景观的游客。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端文艺复兴风格景观酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于古城核心区域，融合中世纪建筑元素与现代设施，自带观景露台与餐厅，部分酒店由古老宫殿改造而成，可欣赏古城全景或河景。</p>
                  <div className="text-xs text-gray-500">💎 文艺复兴体验 | 🏞️ 景观优美</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于古城附近或车站周边，步行可达核心景点，房间干净整洁，设施齐全，部分酒店提供早餐与免费WiFi，价格约35-70欧元/晚。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭出游</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">多为家庭经营，风格温馨，部分民宿由古城民居改造而成，充满特色，价格约18-35欧元/晚，还能感受当地居民的生活氛围。</p>
                  <div className="text-xs text-gray-500">💰 预算友好 | 🏡 家庭氛围</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">适合独自旅行或预算有限的游客，价格实惠，通常位于交通便利的位置，可结识来自世界各地的旅行者，价格约12-25欧元/晚。</p>
                  <div className="text-xs text-gray-500">🎒 背包客首选 | 🌍 国际交流</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季（6-9月）：</strong>夏季气候宜人，游客较多，曼托瓦文艺复兴节期间，建议提前1-2个月预订</p>
                    <p className="mb-2"><strong>淡季（12月至次年5月）：</strong>可提前1-2周预订，价格相对实惠</p>
                    <p><strong>特色套餐：</strong>部分高端酒店推出住宿+景点联票的优惠套餐</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>意大利住宿通常不提供洗漱用品，需自带牙刷、牙膏等</p>
                    <p className="mb-2"><strong>特殊注意：</strong>古城部分酒店位于石板街巷旁，无电梯，预订时可提前咨询</p>
                    <p><strong>注意事项：</strong>古城及周边夜间安静，需保持安静；大部分酒店为无烟酒店</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                曼托瓦古城，这座被明乔河环抱的千年水城，历经两千余年的岁月沉淀，既有中世纪的古朴厚重，又有文艺复兴的艺术璀璨，承载着贡扎加家族的权力传奇与意大利北方的人文底蕴。在这里，你可以漫步在石板街巷，触摸历史的痕迹；可以走进宫殿与教堂，欣赏文艺复兴时期的艺术瑰宝；可以沿明乔河漫步，感受水城的灵秀柔美；可以品尝当地特色美食与葡萄酒，体验伦巴第大区的市井烟火。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                无论是独自旅行、情侣出游还是家庭度假，曼托瓦古城都能给你带来难忘的旅行体验，让你在古朴静谧的氛围中，邂逅一段跨越千年的人文与艺术之约，爱上这座兼具历史厚重与文艺气息的意大利北方名城。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在古朴静谧的氛围中，邂逅一段跨越千年的人文与艺术之约。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}