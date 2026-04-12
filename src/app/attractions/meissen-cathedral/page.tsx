import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '迈森大教堂・Meissen Cathedral・德国・迈森 | 最佳欧洲景点',
  description: '探索迈森大教堂，易北河畔的哥特式宗教瑰宝，以81米高的双尖塔、精美的哥特式建筑和珍贵的宗教文物闻名，是萨克森州最具代表性的哥特式建筑之一，也是德国中世纪宗教建筑的典范。',
}

export default function MeissenCathedralPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '迈森大教堂', href: '/attractions/meissen-cathedral' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">迈森大教堂・Meissen Cathedral・德国・迈森</h1>
          <p className="text-lg text-gray-600 mb-6">
            迈森大教堂始建于1260年，完工于1410年，是一座融合哥特式与新哥特式元素的宗教建筑，位于德国迈森城堡山。教堂主体为哥特式厅堂结构，拥有81米高的双尖塔，内部留存奥托一世夫妇雕塑、克拉纳赫工作室壁画等珍贵文物，登顶可俯瞰易北河与迈森老城全景，既是萨克森州重要的宗教圣地，也是中世纪建筑艺术与宗教文化融合的生动见证。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              迈森大教堂始建于1260年，完工于1410年，是一座融合哥特式与新哥特式元素的宗教建筑，位于德国迈森城堡山。教堂主体为哥特式厅堂结构，拥有81米高的双尖塔，内部留存奥托一世夫妇雕塑、克拉纳赫工作室壁画等珍贵文物，登顶可俯瞰易北河与迈森老城全景，既是萨克森州重要的宗教圣地，也是中世纪建筑艺术与宗教文化融合的生动见证。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="迈森大教堂" />
                <InfoRow label="英文名称" value="Meissen Cathedral" />
                <InfoRow label="国家" value="德国（Germany）" />
                <InfoRow label="城市" value="迈森（Meissen）" />
                <InfoRow label="所属区域" value="德国萨克森州（Saxony）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="萨克森州哥特式建筑代表、宗教圣地" />
                <InfoRow label="核心特色" value="哥特式建筑、双尖塔、宗教文物" />
                <InfoRow label="建筑价值" value="哥特式与新哥特式融合、81米双尖塔" />
                <InfoRow label="文化价值" value="奥托一世雕塑、克拉纳赫工作室壁画" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="教堂全年开放，夏季9:00-17:00，冬季10:00-16:00；每周一闭馆" />
              <InfoRow label="门票价格" value="教堂内部免费；登双尖塔8欧元；导览票额外4欧元" />
              <InfoRow label="地址" value="Domplatz 2, 01662 Meissen, Germany" />
              <InfoRow label="交通方式" value="从德累斯顿乘S-Bahn约30分钟；从莱比锡乘德铁约1小时20分钟" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                迈森大教堂的历史可追溯至公元968年，其发展历程与迈森公国的崛起、萨克森州的宗教演变紧密相连，历经近千年风雨，始终保持着核心建筑风貌，成为德国东部中世纪宗教建筑的标杆，承载着萨克森州的宗教、政治与文化记忆。公元968年，神圣罗马帝国皇帝奥托一世（Emperor Otto I）在迈森建立教区，修建了第一座罗马式教堂，作为教区的核心宗教场所，这便是迈森大教堂的雏形，当时的教堂主要以石质结构为主，规模较小，主要用于宗教祭祀与教区管理。
              </p>
              <p>
                12世纪末，随着迈森公国的繁荣与宗教势力的壮大，原有罗马式教堂已无法满足宗教活动的需求，教区决定重建教堂，采用当时盛行的哥特式建筑风格。1260年，教堂重建工程正式启动，工匠们耗时150年，于1410年完成主体建筑的修建，建成后的教堂为哥特式厅堂结构，拥有宽敞的中殿、精美的彩绘玻璃与高耸的拱顶，成为当时萨克森州规模最大、最华丽的宗教建筑之一。
              </p>
              <p>
                1425年，萨克森选帝侯、韦廷王朝的弗雷德里克一世（Margrave Frederick I）在教堂内修建了王子礼拜堂（Prince's Chapel），将其作为韦廷王朝的家族墓地，礼拜堂内安葬着多位韦廷王朝的国王与王后，成为迈森公国权力的象征。这一时期，教堂的建筑风格进一步完善，内部增添了大量哥特式雕塑与壁画，其中包括奥托一世与妻子意大利的阿德莱德（Adelaide of Italy）的雕像，以及著名画家卢卡斯·克拉纳赫工作室（Studio of Lucas Cranach the Elder）创作的宗教壁画，尽显宗教艺术的庄严与精美。
              </p>
              <p>
                1581年，宗教改革席卷德国，迈森教区被解散，迈森大教堂从罗马天主教堂转变为新教（路德宗）教堂，成为萨克森州福音路德教会的重要场所。宗教改革期间，教堂内的部分天主教元素被保留，同时新增了新教的宗教符号与装饰，形成了天主教与新教文化交融的独特风貌。1591年，教堂内修建了一座设计独特的布道坛，坛身设有一扇禁止公众进入的门，成为教堂的标志性文物之一。
              </p>
              <p>
                19世纪末至20世纪初，迈森大教堂迎来了一次大规模的修缮与扩建，建筑师卡尔·舍费尔（Carl Schäfer）设计并修建了两座81米高的新哥特式双尖塔，于1909年完工，这两座尖塔成为迈森城市天际线的标志性景观，也让教堂的哥特式风格更加鲜明。此次修缮严格遵循原始建筑工艺，修复了受损的拱顶、彩绘玻璃与雕塑，还原了教堂的中世纪风貌。二战期间，迈森大教堂幸运地避开了大规模轰炸，核心建筑与内部文物得以完整留存，成为德国东部少数未遭战争严重破坏的中世纪宗教建筑。战后，德国政府与宗教团体多次对教堂进行修缮与保护，重点修复了战争期间轻微受损的彩绘玻璃与雕塑，同时完善了教堂的基础设施，使其成为兼具宗教活动、文化展示与旅游观光功能的场所。如今，迈森大教堂不仅是一座活跃的宗教场所，更是德国中世纪建筑艺术与宗教文化的重要载体，每年吸引着世界各地的游客与宗教信徒前来探访。教堂内的博物馆收藏着大量中世纪的宗教文物、雕塑、壁画与历史文献，详细记录了教堂的发展历程与萨克森州的宗教文化，成为研究中世纪欧洲宗教、建筑与社会生活的重要场所。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（1.5-2小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从教堂入口进入，首先参观教堂大门与门廊，大门采用哥特式尖拱设计，门楣上雕刻着圣约翰、圣多纳图斯与奥托一世的雕像，细节精美，尽显宗教建筑的庄严。随后进入教堂中殿，中殿高达32米，采用哥特式肋架拱顶，两侧的彩绘玻璃描绘着宗教故事，阳光透过玻璃洒入，光影交错，营造出静谧而神圣的氛围。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  接着前往唱诗班席位，席位两侧的墙壁上布满了卢卡斯·克拉纳赫工作室创作的宗教壁画，描绘了耶稣的生平与宗教典故，色彩鲜艳，笔触细腻，是中世纪宗教艺术的珍品。之后参观王子礼拜堂，礼拜堂内安葬着韦廷王朝的多位王室成员，祭坛上摆放着精美的弗莱芒祭坛画，礼拜堂的穹顶与墙壁上雕刻着复杂的花纹，尽显王室的威严与宗教的庄严。最后登双尖塔，俯瞰易北河蜿蜒流淌的身姿与迈森老城的全貌，远处的青山与河畔的半木结构房屋交相辉映，画面开阔优美，结束精华游览，全程路线紧凑，涵盖教堂核心看点。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速体验教堂精华
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（3-4小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加文物细节观赏、导览体验与周边关联景点游览，深入感受教堂的千年宗教底蕴与建筑艺术魅力。参观完王子礼拜堂后，前往教堂内的博物馆，欣赏馆内收藏的中世纪宗教文物、雕塑、手稿与历史文献，包括1591年修建的布道坛复制品、奥托一世夫妇的原始雕塑碎片等，了解教堂的发展历程与中世纪的宗教文化。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  中午前往教堂周边的特色餐厅，品尝萨克森州的传统美食，如烤香肠、土豆汤、德式苹果派与当地特色的易北河鲜鱼，搭配正宗的德国啤酒或果汁，体验当地的饮食文化。下午参加教堂的英语或德语导览活动，由专业导览员讲解教堂的建筑结构、宗教典故与文物背景，深入了解哥特式建筑的工艺精髓与迈森大教堂的历史价值。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  之后参观教堂的附属建筑——教士住宅与教堂庭院，教士住宅内展示了中世纪教士的生活场景，收藏着大量古老的宗教服饰与生活用品；教堂庭院内种植着古老的绿植与花卉，环境静谧优美，可在庭院的长椅上休息，感受教堂的宁静与神圣。傍晚时分，返回双尖塔，欣赏夕阳下的易北河与迈森老城，夕阳洒在河面上，波光粼粼，老城的房屋被染成温暖的金色，氛围感拉满，结束深度游览。
                </p>
                <div className="text-sm text-green-800 bg-green-100 p-3 rounded">
                  <strong>适合人群：</strong>喜欢细致游览的游客，想要深度体验历史文化
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 双尖塔顶端</h4>
                  <p className="text-sm text-gray-700">这是拍摄迈森全景的最佳机位，登顶81米高的双尖塔，可360度俯瞰整个迈森大教堂的轮廓、易北河蜿蜒流淌的身姿与迈森老城的全貌，远处的青山与河畔的半木结构房屋交相辉映，画面开阔大气，兼具人文与自然之美。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 教堂正面广场</h4>
                  <p className="text-sm text-gray-700">这是拍摄教堂外观的绝佳机位，以教堂的哥特式大门、双尖塔与厚重的石质墙体为主体，可清晰捕捉教堂的哥特式建筑特色，尖塔的高耸挺拔与大门的精美雕刻形成鲜明对比，尽显宗教建筑的庄严与厚重。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 易北河畔步道</h4>
                  <p className="text-sm text-gray-700">这是拍摄教堂与易北河同框的绝佳机位，以易北河为前景，远处的迈森大教堂矗立在城堡山之巅，背景是连绵的青山，既能展现教堂的雄伟，又能凸显易北河的柔美，画面静谧优美。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 教堂中殿内部</h4>
                  <p className="text-sm text-gray-700">这是拍摄教堂内部建筑的绝佳机位，中殿的哥特式肋架拱顶、两侧的彩绘玻璃与墙壁上的壁画错落有致，细节精美，可捕捉教堂内部的神圣氛围与建筑艺术之美。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 王子礼拜堂内</h4>
                  <p className="text-sm text-gray-700">这是拍摄宗教文物与雕塑的绝佳机位，礼拜堂内的弗莱芒祭坛画、王室墓碑与雕塑细节精美，色彩鲜艳，可捕捉中世纪宗教艺术的精髓。拍摄时禁止使用闪光灯，建议选择光线柔和的时段。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 城堡山观景台</h4>
                  <p className="text-sm text-gray-700">这是拍摄教堂与阿尔布雷希茨堡同框的绝佳机位，观景台地势稍高，可同时拍摄到迈森大教堂的双尖塔与毗邻的阿尔布雷希茨堡，背景是易北河与迈森老城，画面兼具宗教建筑与中世纪城堡的特色。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 教堂建筑以石质结构为主，色调厚重，周边有易北河与青山环绕，建议穿搭浅色系、复古风格或大地色系衣物，形成和谐的色调</li>
                <li>• 拍摄教堂内部文物、壁画与雕塑时，禁止使用闪光灯，避免损坏文物、影响其他游客与宗教活动</li>
                <li>• 禁止攀爬教堂墙体、触摸雕塑与文物，拍摄时避免影响他人通行，尊重当地的宗教习俗与游览规定</li>
                <li>• 傍晚时分的光线最适合拍摄，可呈现出温暖的氛围感，凸显教堂的神圣与历史厚重感</li>
                <li>• 拍摄教堂与易北河同框时，可使用广角视角，完整展现教堂、河流与青山的绝美画面</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">阿尔布雷希茨堡（Albrechtsburg Castle）</h4>
                <p className="text-sm text-gray-700 mb-2">距离教堂约5分钟步行路程，是一座保存完好的中世纪城堡，始建于11世纪，是欧洲最古老的城堡之一，曾是韦廷王朝的居所与权力中心。城堡融合罗马式与哥特式建筑风格。</p>
                <div className="text-xs text-gray-500">🚶 步行5分钟 | 🏰 中世纪城堡</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">迈森瓷器博物馆（Meissen Porcelain Museum）</h4>
                <p className="text-sm text-gray-700 mb-2">距离教堂约15分钟步行路程，位于迈森老城，是世界上最古老的瓷器博物馆之一，展示了迈森瓷器从发明到现代的发展历程，收藏着大量精美的迈森瓷器珍品。</p>
                <div className="text-xs text-gray-500">🚶 步行15分钟 | 🏺 瓷器文化</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">迈森老城</h4>
                <p className="text-sm text-gray-700 mb-2">距离教堂约15分钟步行路程，是一座保存完好的中世纪小镇，街巷纵横交错，遍布色彩斑斓的半木结构房屋、复古商铺与露天咖啡馆，充满浓郁的中世纪风情。</p>
                <div className="text-xs text-gray-500">🚶 步行15分钟 | 🏘️ 中世纪小镇</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">易北河游船</h4>
                <p className="text-sm text-gray-700 mb-2">迈森码头距离教堂约20分钟步行路程，可乘坐易北河游船，沿途欣赏易北河两岸的风光、中世纪城堡与特色小镇，游船全程约1小时，途经阿尔布雷希茨堡、迈森大教堂等景点。</p>
                <div className="text-xs text-gray-500">🚶 步行20分钟 | 🚢 易北河风光</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">迈森民俗博物馆（Meissen Folk Museum）</h4>
                <p className="text-sm text-gray-700 mb-2">距离教堂约10分钟步行路程，位于迈森老城，展示了迈森从古代到现代的民俗文化、传统工艺与生活方式，收藏了大量民俗文物、传统服饰、手工业制品与生活器具。</p>
                <div className="text-xs text-gray-500">🚶 步行10分钟 | 🎭 民俗文化</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">圣约翰教堂（St. John's Church）</h4>
                <p className="text-sm text-gray-700 mb-2">距离教堂约8分钟步行路程，是一座小型哥特式教堂，始建于13世纪，内部留存着精美的彩绘玻璃与雕塑，环境静谧神圣，是迈森小众宗教景点。</p>
                <div className="text-xs text-gray-500">🚶 步行8分钟 | ⛪ 小众宗教</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">城堡山周边区域</h4>
                  <p className="text-sm text-blue-800">首选区域，距离迈森大教堂与阿尔布雷希茨堡步行可达，周边有特色餐厅、咖啡馆与纪念品商店，既能便捷游览核心景点，又能感受中世纪城堡与宗教建筑的氛围。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">易北河畔住宿</h4>
                  <p className="text-sm text-green-800">距离易北河步行可达，可欣赏易北河夜景与日出，环境静谧舒适，适合休闲度假、喜欢自然风光的游客，可体验河畔生活与易北河美景。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">火车站附近</h4>
                  <p className="text-sm text-yellow-800">距离迈森老城站或迈森火车站步行10-15分钟可达，周边有餐厅、便利店，生活便利，适合需要乘坐火车、巴士前往周边城市的游客。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端景观酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于易北河畔或城堡山周边，融合中世纪建筑元素与现代设施，自带观景露台、餐厅与休闲区，可欣赏易北河全景或教堂、城堡风光，部分酒店由古老建筑改造而成。</p>
                  <div className="text-xs text-gray-500">🏰 城堡景观 | 🏞️ 易北河景</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于迈森老城中心或车站周边，步行可达教堂与易北河畔，房间干净整洁，设施齐全，部分酒店提供早餐与免费WiFi，部分酒店还提供大教堂与阿尔布雷希茨堡联票优惠。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭出游</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">多为家庭经营，风格温馨，部分民宿由中世纪半木结构房屋改造而成，充满特色，还能感受当地居民的生活氛围，价格约28-45欧元/晚，适合预算有限的游客。</p>
                  <div className="text-xs text-gray-500">💰 预算友好 | 🏡 家庭氛围</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">适合独自旅行或预算有限的游客，价格实惠，通常位于交通便利的位置，可结识来自世界各地的游客，价格约16-28欧元/晚，设施简洁实用，社交氛围浓厚。</p>
                  <div className="text-xs text-gray-500">🎒 背包客首选 | 🌍 国际交流</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季（5-10月）：</strong>春季气候宜人，夏季易北河风光优美，秋季色彩斑斓，游客较多，建议提前1-2个月预订</p>
                    <p className="mb-2"><strong>淡季（11月至次年4月）：</strong>可提前1-2周预订，价格相对实惠</p>
                    <p><strong>特色套餐：</strong>部分高端酒店推出住宿+大教堂门票、住宿+易北河游船的优惠套餐</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>德国住宿通常不提供洗漱用品，需自带牙刷、牙膏、拖鞋等</p>
                    <p className="mb-2"><strong>特殊注意：</strong>城堡山周边部分酒店位于山坡上，地势有坡度且无电梯，预订时可提前咨询</p>
                    <p><strong>注意事项：</strong>老城夜间非常安静，需保持安静；大部分酒店为无烟酒店</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                迈森大教堂，这座矗立在易北河畔城堡山之巅的哥特式宗教瑰宝，历经近千年风雨洗礼，依然保留着原始的建筑风貌与深厚的宗教底蕴。在这里，你可以漫步于教堂的中殿与礼拜堂，触摸中世纪宗教艺术的匠心；可以走进博物馆，探寻教堂的千年往事与萨克森州的宗教演变；可以登顶双尖塔，俯瞰易北河与老城的绝美风光；可以逛逛古朴老城，感受迈森的烟火气与静谧氛围。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                无论是独自旅行、情侣出游还是家庭度假，迈森大教堂都能给你带来难忘的旅行体验，让你在历史与自然的交融中，邂逅一段跨越千年的宗教文化之约，爱上这座兼具宗教之庄严、建筑之精美与自然之秀美的易北河瑰宝。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在历史与自然的交融中，邂逅一段跨越千年的宗教文化之约。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}