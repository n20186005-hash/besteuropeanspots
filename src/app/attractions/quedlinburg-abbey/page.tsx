import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奎德林堡修道院・Quedlinburg Abbey・德国・奎德林堡 | 最佳欧洲景点',
  description: '探索奎德林堡修道院，千年圣境与中世纪瑰宝，联合国教科文组织认定的世界文化遗产，是德国中世纪宗教建筑与世俗权力交融的典范，承载着千年的宗教底蕴与历史记忆。',
}

export default function QuedlinburgAbbeyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '奎德林堡修道院', href: '/attractions/quedlinburg-abbey' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">奎德林堡修道院・Quedlinburg Abbey・德国・奎德林堡</h1>
          <p className="text-lg text-gray-600 mb-6">
            奎德林堡修道院始建于公元936年，是一座融合罗马式与哥特式元素的宗教建筑群，位于德国奎德林堡城堡山。修道院由圣塞尔瓦蒂乌斯教堂和圣维塔利教堂组成，内部留存大量中世纪宗教文物、壁画与王室墓葬，周边环绕着保存完好的中世纪老城，既是重要的宗教圣地，也是研究中世纪欧洲宗教、政治与建筑艺术的珍贵实例。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              奎德林堡修道院始建于公元936年，是一座融合罗马式与哥特式元素的宗教建筑群，位于德国奎德林堡城堡山。修道院由圣塞尔瓦蒂乌斯教堂和圣维塔利教堂组成，内部留存大量中世纪宗教文物、壁画与王室墓葬，周边环绕着保存完好的中世纪老城，既是重要的宗教圣地，也是研究中世纪欧洲宗教、政治与建筑艺术的珍贵实例。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="奎德林堡修道院" />
                <InfoRow label="英文名称" value="Quedlinburg Abbey" />
                <InfoRow label="国家" value="德国（Germany）" />
                <InfoRow label="城市" value="奎德林堡（Quedlinburg）" />
                <InfoRow label="所属区域" value="德国萨克森-安哈尔特州（Saxony-Anhalt）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="世界文化遗产、千年宗教圣地" />
                <InfoRow label="核心特色" value="罗马式与哥特式建筑、宗教建筑群" />
                <InfoRow label="建筑价值" value="圣塞尔瓦蒂乌斯教堂、圣维塔利教堂" />
                <InfoRow label="文化价值" value="中世纪宗教文物、王室墓葬" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="修道院全年开放，夏季9:00-17:00，冬季10:00-16:00；每周一闭馆" />
              <InfoRow label="门票价格" value="教堂内部免费；修道院博物馆7欧元；导览票额外3.5欧元" />
              <InfoRow label="地址" value="Schloßberg 1, 06484 Quedlinburg, Germany" />
              <InfoRow label="交通方式" value="从柏林乘Flixbus约3小时；从马格德堡乘火车约1小时" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                奎德林堡修道院的历史可追溯至公元936年，其发展历程与神圣罗马帝国的崛起、萨克森地区的宗教演变及世俗权力的更迭紧密相连，历经千年风雨，始终是德国中世纪宗教与政治交融的核心场所，承载着深厚的历史与文化价值，1994年，修道院与奎德林堡老城、城堡一同被联合国教科文组织列入世界文化遗产名录，成为全人类共同的文化财富。
              </p>
              <p>
                公元936年，神圣罗马帝国皇帝亨利一世（Emperor Henry I）去世后，其遗孀玛蒂尔德皇后（Empress Matilda）为纪念丈夫、弘扬基督教信仰，在奎德林堡修建了这座修道院，最初为世俗女修道院（Frauenstift），专门接纳贵族女性修行，同时承担着宗教祭祀、文化传承与区域管理的职能，成为当时萨克森地区重要的宗教与文化中心。修道院最初采用罗马式建筑风格，规模较小，主要由教堂与修士居所组成，是亨利一世家族的重要祭祀场所。
              </p>
              <p>
                10世纪至12世纪，随着神圣罗马帝国的繁荣与宗教势力的壮大，奎德林堡修道院迎来了第一次大规模扩建，工匠们耗时近200年，将修道院扩建为包含圣塞尔瓦蒂乌斯教堂（St. Servatius Church）和圣维塔利教堂（St. Vitus Church）两座核心建筑的建筑群，融合了罗马式与早期哥特式建筑风格，成为当时德国北部规模最大、最华丽的宗教建筑群之一。这一时期，修道院不仅是宗教圣地，还成为世俗权力的象征，玛蒂尔德皇后将大量土地与财富捐赠给修道院，使其拥有广阔的领地与雄厚的经济实力，甚至有权参与区域政治事务，成为奎德林堡地区的实际统治者之一。
              </p>
              <p>
                12世纪至15世纪，奎德林堡修道院进入鼎盛时期，内部收藏了大量珍贵的宗教文物、手稿与艺术品，包括《撒母尔圣福音集》手稿本、早期圣遗物箱、中世纪壁画等，成为中世纪欧洲重要的文化宝库。修道院的修士与修女们不仅致力于宗教修行，还积极推动文化教育与手工业发展，创办了修道院学校，培养了大量宗教与文化人才，同时带动了周边纺织、酿酒等手工业的兴起，推动了奎德林堡老城的繁荣。这一时期，修道院的建筑风格进一步完善，圣塞尔瓦蒂乌斯教堂的穹顶、圣维塔利教堂的彩绘玻璃等均在这一时期完成，尽显中世纪建筑艺术的庄严与精美。
              </p>
              <p>
                16世纪，宗教改革席卷德国，奎德林堡修道院受到重大冲击，从罗马天主教堂转变为新教（路德宗）教堂，修道院的世俗权力被削弱，部分宗教文物被转移或损毁，修士与修女的数量也大幅减少。但修道院的核心建筑与部分珍贵文物得以留存，并且保留了天主教与新教文化交融的独特风貌，成为研究宗教改革时期德国宗教文化变迁的重要实例。
              </p>
              <p>
                19世纪至20世纪初，德国政府与宗教团体对奎德林堡修道院进行了多次大规模修缮，严格遵循原始建筑工艺，修复了受损的穹顶、彩绘玻璃与壁画，还原了修道院的中世纪风貌，同时将部分建筑改造为博物馆，展示修道院的历史文物与发展历程。这一时期，修道院逐渐成为旅游景点，吸引着世界各地的游客前来探访。二战期间，奎德林堡修道院幸运地避开了大规模轰炸，核心建筑与内部文物得以完整留存，成为德国少数未遭战争严重破坏的中世纪宗教建筑群。战后，德国政府进一步加强了对修道院的保护与修缮，完善了基础设施，使其成为兼具宗教活动、文化展示与旅游观光功能的场所。如今，奎德林堡修道院不仅是一座活跃的宗教场所，更是德国中世纪建筑艺术、宗教文化与世俗历史的重要载体，每年吸引着大量游客与宗教信徒前来探访，见证着千年岁月的沧桑与辉煌。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（1.5-2小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从修道院入口进入，首先参观修道院广场，广场两侧是古朴的石质围墙与中世纪附属建筑，可欣赏修道院的整体外观轮廓，感受宗教建筑的庄严氛围。随后进入圣塞尔瓦蒂乌斯教堂，教堂为罗马式穹顶结构，内部宽敞明亮，墙壁上留存着中世纪壁画，描绘着宗教故事与亨利一世家族的事迹，祭坛上摆放着精美的宗教雕塑，尽显神圣与庄严。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  接着前往圣维塔利教堂，这座教堂融合了罗马式与哥特式元素，彩绘玻璃色彩鲜艳，描绘着耶稣的生平与宗教典故，阳光透过玻璃洒入，光影交错，营造出静谧而神圣的氛围。之后参观修道院博物馆，欣赏馆内收藏的中世纪手稿、圣遗物箱、宗教雕塑等文物，了解修道院的千年历史与文化底蕴。最后登上城堡山观景台，俯瞰奎德林堡老城的全貌，密密麻麻的半木结构房屋错落有致，古朴典雅，结束精华游览，全程路线紧凑，涵盖修道院核心看点。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速体验修道院精华
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（3-4小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加文物细节观赏、导览体验与周边关联景点游览，深入感受修道院的千年宗教底蕴与建筑艺术魅力。参观完修道院博物馆后，重点观赏馆内的《撒母尔圣福音集》手稿本与早期圣遗物箱，这些文物距今已有上千年历史，是中世纪宗教文化的珍贵见证，可仔细品味其精湛的工艺与深厚的文化内涵。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  中午前往修道院周边的特色餐厅，品尝萨克森-安哈尔特州的传统美食，如德式烤猪肘、土豆泥、酸菜与当地特色的黑麦面包，搭配正宗的德国黑啤酒或果汁，体验当地的饮食文化。下午参加修道院的英语或德语导览活动，由专业导览员讲解修道院的建筑结构、宗教典故与文物背景，深入了解罗马式建筑的工艺精髓与奎德林堡修道院在中世纪的重要地位。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  之后参观修道院的附属建筑——修士居所与修道院庭院，修士居所内展示了中世纪修士与修女的生活场景，收藏着大量古老的宗教服饰、生活用品与手工业制品；修道院庭院内种植着古老的绿植与花卉，环境静谧优美，可在庭院的长椅上休息，感受修道院的宁静与神圣。傍晚时分，返回城堡山观景台，欣赏夕阳下的奎德林堡老城，夕阳洒在古朴的房屋上，暖意融融，氛围感拉满，结束深度游览。
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
                  <h4 className="font-semibold text-gray-900 mb-2">1. 城堡山观景台</h4>
                  <p className="text-sm text-gray-700">这是拍摄修道院与老城全景的最佳机位，观景台地势较高，可360度俯瞰整个奎德林堡修道院的轮廓、圣塞尔瓦蒂乌斯教堂的穹顶与奎德林堡老城的全貌，密密麻麻的半木结构房屋错落有致，古朴典雅，远处的青山与老城相映成趣，画面开阔大气，兼具人文与自然之美。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 修道院正面广场</h4>
                  <p className="text-sm text-gray-700">这是拍摄修道院外观的绝佳机位，以圣塞尔瓦蒂乌斯教堂的罗马式穹顶、圣维塔利教堂的哥特式尖拱与厚重的石质墙体为主体，可清晰捕捉修道院的建筑特色，穹顶的圆润与尖拱的挺拔形成鲜明对比，尽显宗教建筑的庄严与厚重。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 修道院回廊</h4>
                  <p className="text-sm text-gray-700">这是拍摄建筑细节与氛围感的绝佳机位，回廊采用罗马式拱券设计，石柱排列整齐，墙壁上留存着中世纪壁画的碎片，光影透过拱券洒入，营造出静谧而古朴的氛围。建议选择阴天或午后拍摄，光线柔和，可拍摄回廊的对称构图、石柱的细节与壁画的痕迹。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 圣塞尔瓦蒂乌斯教堂内部</h4>
                  <p className="text-sm text-gray-700">这是拍摄教堂内部建筑与文物的绝佳机位，教堂的罗马式穹顶、两侧的壁画与祭坛上的雕塑错落有致，细节精美，可捕捉教堂内部的神圣氛围与建筑艺术之美。建议选择晴天的上午拍摄，光线透过彩绘玻璃洒入，光影交错，可拍摄穹顶全景、壁画特写与雕塑细节。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 圣维塔利教堂彩绘玻璃前</h4>
                  <p className="text-sm text-gray-700">这是拍摄光影与色彩的绝佳机位，教堂内的彩绘玻璃色彩鲜艳，描绘着宗教故事，阳光透过玻璃洒在地面上，形成斑斓的光影，氛围感十足。建议选择晴天的中午拍摄，光线充足，可拍摄彩绘玻璃的特写、光影的变化，也可拍摄人物与光影的互动。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 老城街巷远眺修道院</h4>
                  <p className="text-sm text-gray-700">这是拍摄修道院与老城融合的绝佳机位，在奎德林堡老城的古朴街巷中，抬头可远眺城堡山上的修道院，以错落的半木结构房屋为前景，远处的修道院矗立在山顶，画面兼具宗教建筑的庄严与小镇的古朴，氛围感十足。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 修道院建筑以石质结构为主，色调厚重，周边老城房屋多为暖色调，建议穿搭浅色系、复古风格或大地色系衣物，形成和谐的色调</li>
                <li>• 拍摄教堂内部文物、壁画与彩绘玻璃时，禁止使用闪光灯，避免损坏文物、影响其他游客与宗教活动</li>
                <li>• 禁止攀爬修道院墙体、触摸雕塑与文物，拍摄时避免影响他人通行，尊重当地的宗教习俗与游览规定</li>
                <li>• 傍晚时分的光线最适合拍摄，可呈现出温暖的氛围感，凸显修道院的神圣与历史厚重感</li>
                <li>• 拍摄全景照时，可使用广角视角，完整展现修道院、老城与青山的绝美画面</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">奎德林堡老城</h4>
                <p className="text-sm text-gray-700 mb-2">距离修道院约10分钟步行路程，是一座保存完好的中世纪小镇，1994年与修道院一同被列入世界文化遗产，街巷纵横交错，遍布色彩斑斓的半木结构房屋、复古商铺与露天咖啡馆，充满浓郁的中世纪风情。</p>
                <div className="text-xs text-gray-500">🚶 步行10分钟 | 🏘️ 中世纪小镇</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">奎德林堡城堡（Quedlinburg Castle）</h4>
                <p className="text-sm text-gray-700 mb-2">距离修道院约5分钟步行路程，与修道院相连，始建于10世纪，是一座保存完好的中世纪城堡，曾是亨利一世家族的居所与奎德林堡地区的权力中心。城堡融合罗马式与哥特式建筑风格。</p>
                <div className="text-xs text-gray-500">🚶 步行5分钟 | 🏰 中世纪城堡</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">奎德林堡民俗博物馆（Quedlinburg Folk Museum）</h4>
                <p className="text-sm text-gray-700 mb-2">距离修道院约12分钟步行路程，位于老城中心，展示了奎德林堡从古代到现代的民俗文化、传统工艺与生活方式，收藏了大量民俗文物、传统服饰、手工业制品与生活器具。</p>
                <div className="text-xs text-gray-500">🚶 步行12分钟 | 🎭 民俗文化</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">塞尔克塔尔蒸汽火车（Selketalbahn）</h4>
                <p className="text-sm text-gray-700 mb-2">距离修道院约20分钟步行路程，可乘坐蒸汽火车穿越塞尔克塔尔山谷，沿途欣赏青山、河谷与中世纪村落的风光，全程约1小时，途经多个小众景点，可从自然视角感受奎德林堡的柔美风光。</p>
                <div className="text-xs text-gray-500">🚶 步行20分钟 | 🚂 蒸汽火车</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">圣约翰教堂（St. John's Church）</h4>
                <p className="text-sm text-gray-700 mb-2">距离修道院约8分钟步行路程，是一座小型罗马式教堂，始建于12世纪，内部留存着精美的彩绘玻璃与雕塑，环境静谧神圣，是奎德林堡小众宗教景点，适合喜欢安静、想要避开人群的游客。</p>
                <div className="text-xs text-gray-500">🚶 步行8分钟 | ⛪ 小众宗教</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">奎德林堡考古博物馆（Quedlinburg Archaeological Museum）</h4>
                <p className="text-sm text-gray-700 mb-2">距离修道院约15分钟步行路程，位于老城边缘，展示了奎德林堡地区从史前时期到中世纪的考古发现，收藏了大量石器、陶器、金属器等文物，可了解奎德林堡的早期历史与人类文明发展。</p>
                <div className="text-xs text-gray-500">🚶 步行15分钟 | 🏺 考古文化</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">城堡山周边区域</h4>
                  <p className="text-sm text-blue-800">首选区域，距离奎德林堡修道院与奎德林堡城堡步行可达，周边有特色餐厅、咖啡馆与纪念品商店，既能便捷游览核心景点，又能感受中世纪城堡与宗教建筑的氛围，适合想要深度体验奎德林堡历史文化的游客。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">老城中心住宿</h4>
                  <p className="text-sm text-green-800">距离修道院约10-15分钟步行路程，周边遍布半木结构房屋与复古商铺，生活便利，可沉浸式感受中世纪小镇的风情，适合喜欢人文小镇、想要体验当地烟火气的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">火车站附近</h4>
                  <p className="text-sm text-yellow-800">距离奎德林堡火车站步行10分钟可达，周边有餐厅、便利店，适合需要乘坐火车、巴士前往周边城市的游客，交通便利是主要优势。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端景观酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于城堡山周边或老城制高点，融合中世纪建筑元素与现代设施，自带观景露台、餐厅与休闲区，可欣赏修道院、城堡与老城全景，部分酒店由古老建筑改造而成，风格独特。</p>
                  <div className="text-xs text-gray-500">🏰 城堡景观 | 🏞️ 老城全景</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于老城中心或火车站周边，步行可达修道院与老城核心区域，房间干净整洁，设施齐全，部分酒店提供早餐与免费WiFi，部分酒店还提供修道院与城堡联票优惠。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭出游</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">多为家庭经营，风格温馨，部分民宿由中世纪半木结构房屋改造而成，充满特色，还能感受当地居民的生活氛围，价格约25-40欧元/晚，适合预算有限的游客。</p>
                  <div className="text-xs text-gray-500">💰 预算友好 | 🏡 家庭氛围</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">适合独自旅行或预算有限的游客，价格实惠，通常位于交通便利的位置，可结识来自世界各地的游客，价格约15-25欧元/晚，设施简洁实用，社交氛围浓厚。</p>
                  <div className="text-xs text-gray-500">🎒 背包客首选 | 🌍 国际交流</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季（5-10月）：</strong>春季气候宜人，夏季山谷风光优美，秋季色彩斑斓，游客较多，建议提前1-2个月预订</p>
                    <p className="mb-2"><strong>淡季（11月至次年4月）：</strong>可提前1-2周预订，价格相对实惠</p>
                    <p><strong>特色套餐：</strong>部分高端酒店推出住宿+修道院门票、住宿+蒸汽火车体验的优惠套餐</p>
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
                奎德林堡修道院，这座矗立在城堡山之巅的千年圣境，历经近千年风雨洗礼，依然保留着原始的建筑风貌与深厚的宗教底蕴。在这里，你可以漫步于两座核心教堂，触摸中世纪宗教艺术的匠心；可以走进博物馆，探寻修道院的千年往事与神圣罗马帝国的兴衰；可以登上观景台，俯瞰奎德林堡老城的古朴与柔美；可以逛逛中世纪街巷，感受当地的烟火气与静谧氛围。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                无论是独自旅行、情侣出游还是家庭度假，奎德林堡修道院都能给你带来难忘的旅行体验，让你在历史与自然的交融中，邂逅一段跨越千年的宗教文化之约，爱上这座兼具宗教之庄严、建筑之精美与小镇之古朴的中世纪瑰宝。
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