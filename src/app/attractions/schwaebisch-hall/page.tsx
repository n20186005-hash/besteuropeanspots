import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '施瓦本哈尔古城・Schwäbisch Hall・德国・施瓦本哈尔 | 最佳欧洲景点',
  description: '探索施瓦本哈尔古城，德国巴登-符腾堡州的千年盐都明珠，以独特的盐文化、精美的哥特式与巴洛克式建筑、蜿蜒的鹅卵石街巷闻名，被誉为"内卡河畔的盐都瑰宝"。',
}

export default function SchwaebischHallPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '施瓦本哈尔古城', href: '/attractions/schwaebisch-hall' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">施瓦本哈尔古城・Schwäbisch Hall・德国・施瓦本哈尔</h1>
          <p className="text-lg text-gray-600 mb-6">
            施瓦本哈尔古城是德国南部内卡河畔的千年盐都，保留着完整的中世纪风貌。核心看点为市政厅、圣米迦勒教堂、盐井遗迹与鹅卵石街巷，兼具盐文化底蕴与中世纪建筑美感，建筑色彩雅致，街巷古朴静谧，既能探寻千年盐贸易的辉煌过往，又能感受德国南部小城的淳朴烟火气，是体验中世纪欧洲城镇风情、了解盐文化的绝佳去处。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              施瓦本哈尔古城是德国南部内卡河畔的千年盐都，保留着完整的中世纪风貌。核心看点为市政厅、圣米迦勒教堂、盐井遗迹与鹅卵石街巷，兼具盐文化底蕴与中世纪建筑美感，建筑色彩雅致，街巷古朴静谧，既能探寻千年盐贸易的辉煌过往，又能感受德国南部小城的淳朴烟火气，是体验中世纪欧洲城镇风情、了解盐文化的绝佳去处。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="施瓦本哈尔古城" />
                <InfoRow label="英文名称" value="Schwäbisch Hall Old Town" />
                <InfoRow label="国家" value="德国（Germany）" />
                <InfoRow label="城市" value="施瓦本哈尔（Schwäbisch Hall）" />
                <InfoRow label="所属区域" value="德国巴登-符腾堡州海尔布隆县" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="千年盐都、中世纪贸易重镇" />
                <InfoRow label="核心特色" value="盐文化、哥特式与巴洛克建筑" />
                <InfoRow label="建筑价值" value="市政厅、圣米迦勒教堂" />
                <InfoRow label="文化价值" value="盐井遗迹、鹅卵石街巷" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="古城整体全天开放，核心景点夏季9:00-17:00，冬季10:00-16:00；市政厅每周一闭馆" />
              <InfoRow label="门票价格" value="古城公共区域免费开放，市政厅6欧元，圣米迦勒教堂塔楼2欧元，盐井博物馆8欧元" />
              <InfoRow label="地址" value="Marktplatz 1, 74523 Schwäbisch Hall, Germany" />
              <InfoRow label="交通方式" value="从斯图加特乘德铁直达约45分钟；从慕尼黑乘德铁约2小时30分钟；可乘坐3路巴士" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                施瓦本哈尔古城的历史可追溯至公元前5世纪，最早由凯尔特人在此定居，因当地富含盐矿，凯尔特人便开始简易开采盐资源，成为区域内最早的盐产地之一，当时主要以盐为交换媒介，逐渐形成小型聚落，奠定了千年盐都的基础。罗马帝国时期，施瓦本哈尔成为罗马帝国南部边境的重要盐贸易驿站，罗马人在此修建了规范的盐井与运输道路，将当地的盐运往罗马帝国各地，盐贸易逐渐兴起，成为区域经济的核心支柱，遗址内至今仍保留着罗马时期的盐井遗迹与运输道路残骸。
              </p>
              <p>
                西罗马帝国灭亡后，施瓦本哈尔先后被日耳曼部落、法兰克人统治，盐贸易持续发展，逐渐成为中世纪欧洲重要的盐产地与贸易重镇。中世纪早期，施瓦本哈尔凭借盐资源的优势，吸引了大量商人与工匠聚集，修建了坚固的城墙与防御塔楼，同时，基督教文化开始在此传播，修建了简易的教堂与修道院，形成了"盐贸易+宗教文化"的发展格局。
              </p>
              <p>
                12世纪至15世纪，施瓦本哈尔迎来了发展的黄金时期，成为神圣罗马帝国的自由城市，拥有独立的行政与司法权，盐贸易规模达到顶峰，当时的盐不仅供应德国南部，还远销法国、瑞士、奥地利等周边国家，带动了纺织、皮革、酿酒等相关产业的发展，城市人口大幅增长，修建了大量中世纪风格的建筑，包括市政厅、圣米迦勒教堂、贵族宅邸与盐商商铺。1386年，市政厅动工修建，耗时12年完工，融合了哥特式与文艺复兴风格，底层曾作为盐贸易交易大厅，见证了当时盐贸易的辉煌，至今仍保留着当年的交易柜台与盐储存仓库。
              </p>
              <p>
                16世纪至18世纪，受宗教改革与战争影响，施瓦本哈尔的盐贸易逐渐衰落，但城市建设持续发展，圣米迦勒教堂经过扩建，成为德国南部最具代表性的哥特式教堂之一，教堂内的彩绘玻璃、雕塑与壁画，记录了当地的历史与宗教文化。这一时期，许多盐商宅邸被改造为贵族府邸，建筑风格逐渐融合巴洛克元素，形成了"哥特式+巴洛克"的独特建筑风貌，成为古城的标志性特色。19世纪，随着铁路与公路的修建，施瓦本哈尔的交通更加便捷，旅游业逐渐兴起，当地开始注重古城风貌的保护，对中世纪建筑进行修缮与保护，保留了古城的原有格局与风貌。二战期间，施瓦本哈尔古城未遭受大规模破坏，大量中世纪建筑得以完整保留，成为德国南部保存最完好的中世纪老城之一。近代以来，施瓦本哈尔因其独特的盐文化、完整的中世纪建筑与淳朴的小城风情，吸引了全球各地的游客，成为德国南部知名的旅游胜地。如今，古城依然保留着千年以来的风貌，中世纪的鹅卵石街巷、哥特式与巴洛克式建筑、盐井遗迹，与蜿蜒的内卡河交相辉映，成为一座"活态的中世纪盐都博物馆"，承载着德国南部的多元历史与盐文化，向世人展现着千年盐都的独特魅力。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（2-3小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从施瓦本哈尔火车站出发，步行10分钟或乘坐3路巴士直达老城入口，前往游客中心领取游览地图，随后直奔市场广场，这里是老城的中心，矗立着精美的市政厅，建筑外观典雅，正面的浮雕讲述着施瓦本哈尔的盐贸易历史，可驻足参观市政厅外观，感受其哥特式与文艺复兴融合的建筑美感。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  随后前往圣米迦勒教堂，步行约5分钟即可到达，教堂矗立在山坡之上，哥特式尖顶挺拔壮观，内部彩绘玻璃、雕塑与壁画精美绝伦，可免费进入参观，登顶塔楼（2欧元/人）可俯瞰老城全景与内卡河风光。之后漫步至老城核心街巷，鹅卵石铺就的街道蜿蜒曲折，两侧是色彩雅致的中世纪建筑、复古商铺与露天咖啡馆，可逛逛当地的盐制品商店、手工艺品店，感受老城的烟火气。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  最后前往内卡河畔步道，沿着河畔漫步，欣赏蜿蜒的河流与两岸的古城建筑，岸边的绿植与古朴的桥梁相映成趣，感受河畔小城的静谧惬意，游览结束后，可在河畔的特色餐厅，品尝当地的传统美食与啤酒，购买老城特色的盐制品、手工艺品，结束精华游览。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速体验古城精华
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（4-5小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加盐文化体验、小众遗迹与美食体验，深入感受施瓦本哈尔古城的历史、文化与民俗魅力。参观完内卡河畔步道后，前往盐井博物馆，这里展示了施瓦本哈尔千年盐贸易的历史、盐开采工艺与盐制品，可参观古老的盐井、盐储存仓库，亲手体验简单的盐制作过程，感受盐文化的深厚底蕴。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  随后预约老城深度导览（导览费8欧元/人，全程1.5小时，有德、英两种语言可选），跟随导览深入了解老城的历史变迁、盐贸易的兴衰、建筑特色与隐藏的历史细节，重点参观未完全开放的中世纪盐商宅邸、古老的修道院遗迹与盐贸易交易遗址，聆听市政厅作为盐交易大厅的过往与神圣罗马帝国时期的盐贸易故事。中午前往老城中心的特色餐厅，品尝德国传统美食，如烤猪肘、香肠、土豆泥与当地特色的盐渍湖鲜，搭配正宗的施瓦本哈尔啤酒，体验德国南部的饮食文化。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  下午前往老城外围的中世纪城墙遗迹，这里保留着当年的城墙与防御塔楼，可漫步在城墙上，感受中世纪的防御体系，俯瞰老城与内卡河的全景。之后前往当地的盐制品工坊，参观盐制品的制作过程，品尝特色盐渍甜点、盐味啤酒，购买正宗的当地盐制品作为伴手礼。傍晚时分，返回市场广场，欣赏夕阳下的市政厅与广场风光，夕阳洒在建筑上，氛围感拉满，之后可在露天咖啡馆小坐，品尝当地甜点与咖啡，感受老城的夜晚氛围，结束深度游览。
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
                  <h4 className="font-semibold text-gray-900 mb-2">1. 市场广场中央</h4>
                  <p className="text-sm text-gray-700">这是拍摄施瓦本哈尔标志性景观的绝佳机位，精美的市政厅作为核心主体，建筑上的浮雕与哥特式尖顶清晰可见，背景是蜿蜒的鹅卵石街巷与色彩雅致的中世纪建筑，既能捕捉到老城的标志性元素，又能展现中世纪城镇的整体风貌。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 圣米迦勒教堂塔楼顶端</h4>
                  <p className="text-sm text-gray-700">这是拍摄老城全景与内卡河风光的最佳机位，登上教堂塔楼，可俯瞰整个施瓦本哈尔古城的全貌，蜿蜒的鹅卵石街巷、错落有致的中世纪建筑、翠绿的屋顶，搭配蜿蜒的内卡河与远处的山峦，画面壮阔而优美。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 内卡河畔步道</h4>
                  <p className="text-sm text-gray-700">这是拍摄河畔风光与建筑倒影的绝佳机位，沿着内卡河畔漫步，河水澄澈，能清晰倒映出老城的建筑、桥梁与教堂尖顶，岸边的绿植与古朴的桥梁相映成趣，自带静谧浪漫的氛围。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 老城核心街巷</h4>
                  <p className="text-sm text-gray-700">这是拍摄中世纪街巷与人文气息的绝佳机位，鹅卵石铺就的街道蜿蜒曲折，两侧是色彩雅致的中世纪建筑、复古窗台与盛开的鲜花，偶尔有当地居民与游客穿梭，充满烟火气与复古氛围。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 盐井博物馆庭院</h4>
                  <p className="text-sm text-gray-700">这是拍摄盐文化遗迹与复古氛围的绝佳机位，庭院内保留着古老的盐井、盐储存仓库与盐交易柜台，建筑风格古朴，充满历史厚重感，可拍摄盐井的细节特写、复古场景照。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 中世纪城墙遗迹</h4>
                  <p className="text-sm text-gray-700">这是拍摄古城全景与防御建筑的绝佳机位，站在城墙上，可拍摄老城的局部风貌与内卡河的局部河畔风光，城墙的斑驳痕迹与远处的建筑、河流相映成趣，自带复古苍凉的氛围。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 老城建筑以浅色系、哥特式与巴洛克式为主，内卡河呈现出澄澈的碧绿色，建议穿搭浅色系、复古风格或大地色系衣物</li>
                <li>• 拍摄教堂内部、盐井博物馆时，禁止使用闪光灯，避免影响其他游客游览</li>
                <li>• 禁止攀爬建筑、触摸文物，拍摄时避免影响他人，尊重当地的游览规定</li>
                <li>• 傍晚时分的光线最适合拍摄，可呈现出温暖的氛围感，凸显古城的浪漫与历史厚重感</li>
                <li>• 拍摄古城全景时，可使用广角视角，完整展现老城、内卡河与远山的绝美风光</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">海尔布隆古城（Heilbronn Old Town）</h4>
                <p className="text-sm text-gray-700 mb-2">距离施瓦本哈尔约25分钟车程，是内卡河畔的重要城市，保留着大量中世纪与文艺复兴时期的建筑，核心景点有海尔布隆市政厅、圣 Kilian 教堂、内卡河畔长廊等。</p>
                <div className="text-xs text-gray-500">🚗 车程25分钟 | 🏛️ 内卡河城市</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">罗滕堡老城（Rothenburg ob der Tauber）</h4>
                <p className="text-sm text-gray-700 mb-2">距离施瓦本哈尔约1小时车程，是德国最著名的中世纪老城之一，保留着完整的中世纪城墙、城门与建筑，核心景点有罗滕堡市政厅、圣雅各布教堂、城堡花园等。</p>
                <div className="text-xs text-gray-500">🚗 车程1小时 | 🏰 童话小镇</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">内卡河游船码头</h4>
                <p className="text-sm text-gray-700 mb-2">距离施瓦本哈尔古城约10分钟步行路程，可乘坐内卡河游船，全程约1小时，票价15欧元/人，沿途欣赏内卡河的河畔风光、古朴村落与中世纪建筑。</p>
                <div className="text-xs text-gray-500">🚶 步行10分钟 | 🚢 游船观光</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">施瓦本哈尔盐矿遗址</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城约15分钟车程，是施瓦本哈尔千年盐贸易的重要遗迹，保留着古老的盐矿、开采设备与运输道路，可参观盐矿遗址，了解盐开采的历史与工艺。</p>
                <div className="text-xs text-gray-500">🚗 车程15分钟 | ⛏️ 盐文化遗迹</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">霍恩洛厄城堡（Hohenlohe Castle）</h4>
                <p className="text-sm text-gray-700 mb-2">距离施瓦本哈尔约40分钟车程，是一座建于中世纪的城堡，保留着完整的城堡城墙、塔楼与庭院，登顶城堡可俯瞰周边的乡村风光与内卡河流域。</p>
                <div className="text-xs text-gray-500">🚗 车程40分钟 | 🏰 中世纪城堡</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">内卡河自然保护区</h4>
                <p className="text-sm text-gray-700 mb-2">距离施瓦本哈尔约20分钟车程，是内卡河流域的重要自然景观，保护区内植被茂密，河流蜿蜒，可进行徒步、野餐、垂钓等休闲活动。</p>
                <div className="text-xs text-gray-500">🚗 车程20分钟 | 🌿 自然保护</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">老城核心区域</h4>
                  <p className="text-sm text-blue-800">首选区域，距离市场广场、市政厅、圣米迦勒教堂等核心景点步行可达，周边有特色餐厅、咖啡馆与盐制品商店，既能便捷游览景点，又能感受老城的静谧氛围与盐都风情。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">内卡河畔住宿</h4>
                  <p className="text-sm text-green-800">位于河畔步道附近，可俯瞰内卡河风光，清晨能欣赏到河畔日出，环境静谧舒适，适合休闲度假、喜欢自然风光的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">火车站附近</h4>
                  <p className="text-sm text-yellow-800">距离车站步行10分钟可达，周边有餐厅、便利店，生活便利，适合需要乘坐火车、巴士前往周边城市的游客。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端古堡酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于老城核心区域或内卡河畔，融合中世纪建筑元素与现代设施，自带观景露台、餐厅与休闲区，部分酒店由古老盐商宅邸或贵族府邸改造而成。</p>
                  <div className="text-xs text-gray-500">🏰 古堡体验 | 🏞️ 景观优美</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于老城附近或火车站周边，步行可达核心景点，房间干净整洁，设施齐全，部分酒店提供早餐与免费WiFi，部分酒店还提供盐井博物馆、内卡河游船门票优惠。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭出游</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">多为家庭经营，风格温馨，部分民宿由老城中世纪民居改造而成，充满特色，还能感受当地居民的生活氛围，价格约20-40欧元/晚。</p>
                  <div className="text-xs text-gray-500">💰 预算友好 | 🏡 家庭氛围</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">适合独自旅行或预算有限的游客，价格实惠，通常位于交通便利的位置，可结识来自世界各地的游客，价格约12-20欧元/晚。</p>
                  <div className="text-xs text-gray-500">🎒 背包客首选 | 🌍 国际交流</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季（5-10月）：</strong>春季气候宜人，夏季河畔风光优美，秋季色彩斑斓，游客较多，建议提前1-2个月预订</p>
                    <p className="mb-2"><strong>淡季（11月至次年4月）：</strong>可提前1-2周预订，价格相对实惠</p>
                    <p><strong>特色套餐：</strong>部分高端酒店推出住宿+盐井博物馆门票、住宿+内卡河游船体验的优惠套餐</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>德国住宿通常不提供洗漱用品，需自带牙刷、牙膏等</p>
                    <p className="mb-2"><strong>特殊注意：</strong>老城部分酒店位于鹅卵石街巷旁，地势有坡度且无电梯，预订时可提前咨询</p>
                    <p><strong>注意事项：</strong>老城夜间非常安静，需保持安静；大部分酒店为无烟酒店</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                施瓦本哈尔古城，这座矗立在内卡河畔的千年盐都，历经千年岁月沉淀，既有中世纪建筑的精致典雅，又有盐文化的深厚底蕴，更有内卡河畔的静谧惬意与小城的淳朴烟火气。在这里，你可以漫步在蜿蜒的鹅卵石街巷，触摸中世纪的建筑痕迹；可以走进盐井博物馆与盐矿遗址，探寻千年盐贸易的辉煌过往；可以登上教堂塔楼与城墙，俯瞰老城与内卡河的绝美风光；可以品尝正宗的德国美食与啤酒，品味岁月的醇香与当地的盐韵风情。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                无论是独自旅行、情侣出游还是家庭度假，施瓦本哈尔古城都能给你带来难忘的旅行体验，让你在静谧与厚重的交融中，邂逅一段跨越千年的盐都之约，爱上这座兼具人文之韵与自然之美的中世纪瑰宝。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在静谧与厚重的交融中，邂逅一段跨越千年的盐都之约。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}