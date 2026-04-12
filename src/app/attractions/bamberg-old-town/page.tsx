import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '班贝格老城・Bamberg Old Town・德国・班贝格 | 最佳欧洲景点',
  description: '探索班贝格老城，莱茵河畔的中世纪瑰宝，联合国教科文组织认定的世界文化遗产，德国保存最完整的中世纪老城之一，兼具宗教庄严、建筑美学与市井烟火。',
}

export default function BambergOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '班贝格老城', href: '/attractions/bamberg-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">班贝格老城・Bamberg Old Town・德国・班贝格</h1>
          <p className="text-lg text-gray-600 mb-6">
            班贝格老城始建于公元902年，坐落于两河交汇处，1993年被列入世界文化遗产。老城保留了完整的中世纪布局，融合罗马式、哥特式与巴洛克式建筑风格，核心看点包括班贝格大教堂、老市政厅、小威尼斯等，既有宗教建筑的庄严，又有河畔民居的柔美，是中世纪欧洲城市规划与建筑艺术的珍贵实例，承载着弗兰肯地区千年的历史与文化底蕴。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              班贝格老城始建于公元902年，坐落于两河交汇处，1993年被列入世界文化遗产。老城保留了完整的中世纪布局，融合罗马式、哥特式与巴洛克式建筑风格，核心看点包括班贝格大教堂、老市政厅、小威尼斯等，既有宗教建筑的庄严，又有河畔民居的柔美，是中世纪欧洲城市规划与建筑艺术的珍贵实例，承载着弗兰肯地区千年的历史与文化底蕴。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="班贝格老城" />
                <InfoRow label="英文名称" value="Bamberg Old Town" />
                <InfoRow label="国家" value="德国（Germany）" />
                <InfoRow label="城市" value="班贝格（Bamberg）" />
                <InfoRow label="所属区域" value="德国巴伐利亚州（Bavaria）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="世界文化遗产、千年古城" />
                <InfoRow label="核心特色" value="中世纪布局、两河交汇" />
                <InfoRow label="建筑价值" value="班贝格大教堂、老市政厅、小威尼斯" />
                <InfoRow label="文化价值" value="弗兰肯地区历史文化" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="老城公共区域全年全天开放；班贝格大教堂9:00-17:00；老市政厅9:00-17:00" />
              <InfoRow label="门票价格" value="老城公共区域免费；班贝格大教堂6欧元；老市政厅8欧元；联票12欧元" />
              <InfoRow label="地址" value="Altstadt Bamberg, 96047 Bamberg, Germany" />
              <InfoRow label="交通方式" value="从慕尼黑乘ICE约1.5小时；从纽伦堡乘火车约40分钟" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                班贝格老城的历史可追溯至公元902年，其发展历程与神圣罗马帝国的兴衰、弗兰肯地区的宗教演变及商业繁荣紧密相连，历经千年风雨，始终是巴伐利亚州北部的宗教、政治与文化中心，1993年，因其完整保留了中世纪城市布局与建筑风貌，被联合国教科文组织列入世界文化遗产名录，成为全人类共同的文化财富。
              </p>
              <p>
                公元902年，巴伐利亚公爵路德维希四世在雷格尼茨河与美因河交汇处修建城堡，作为防御要塞与居所，这便是班贝格老城的雏形。彼时，这里地处两河交汇的交通要道，凭借便利的水运条件，逐渐发展成为区域性的商业集散地，吸引了大量商人、工匠在此定居，形成了最初的街巷与民居。
              </p>
              <p>
                11世纪至13世纪，随着神圣罗马帝国的繁荣与宗教势力的壮大，班贝格迎来了第一次发展鼎盛期。1007年，神圣罗马帝国皇帝亨利二世将班贝格升格为主教辖区，修建了班贝格大教堂，此后，大教堂成为老城的核心，周边逐渐修建起修道院、主教宫、市政厅等建筑，形成了“宗教中心+商业中心”的城市格局。这一时期，老城的建筑风格以罗马式为主，随后逐渐融入哥特式元素，班贝格大教堂的穹顶、老市政厅的哥特式尖拱均在这一时期初步建成，成为中世纪建筑艺术的重要代表。
              </p>
              <p>
                14世纪至16世纪，班贝格凭借优越的地理位置，商业贸易持续繁荣，成为弗兰肯地区重要的粮食、葡萄酒与手工业集散地，纺织、酿酒、金属加工等手工业迅速发展，带动了老城的扩张与民居的修建。这一时期，老城的街巷布局逐渐完善，半木结构房屋、石质民居错落有致，形成了如今我们看到的中世纪街巷风貌；同时，宗教文化持续发展，班贝格大教堂经过多次扩建，成为融合罗马式、哥特式与巴洛克式元素的综合性建筑，内部收藏了大量珍贵的宗教文物与艺术品。
              </p>
              <p>
                17世纪至18世纪，巴洛克风格席卷欧洲，班贝格老城也迎来了建筑风格的革新，许多古老建筑被改造为巴洛克式，老市政厅、主教宫等建筑增添了华丽的装饰与雕塑，与原有中世纪建筑交相辉映，形成了独特的建筑风貌。这一时期，班贝格的宗教地位进一步提升，成为巴伐利亚州北部重要的宗教圣地，吸引了大量信徒前来朝拜，同时，文化教育也逐渐发展，创办了多所学校与图书馆，推动了当地文化的传承与发展。
              </p>
              <p>
                19世纪至20世纪初，德国政府加强了对班贝格老城的保护与修缮，严格遵循“修旧如旧”的原则，修复了受损的建筑与街巷，保留了老城的原始风貌。这一时期，老城逐渐成为旅游景点，吸引着世界各地的游客前来探访，同时，当地的酿酒业持续发展，班贝格啤酒成为当地的特色名片，进一步提升了老城的知名度。二战期间，班贝格老城幸运地避开了大规模轰炸，核心建筑与街巷得以完整留存，成为德国少数未遭战争严重破坏的中世纪老城。战后，德国政府进一步加大保护力度，完善了老城的基础设施，规范了旅游开发，既保留了老城的历史韵味，又提升了游客的游览体验。如今，班贝格老城不仅是一座兼具宗教、文化与商业功能的古城，更是德国中世纪城市发展的活化石，每年吸引着数百万游客前来感受其千年魅力。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（1.5-2小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从老城入口（大教堂广场附近）出发，首先参观班贝格大教堂，这座融合多风格的宗教建筑，内部有亨利二世夫妇的陵墓、精美的彩绘玻璃与宗教雕塑，可感受其庄严的宗教氛围。随后前往大教堂广场，欣赏广场周边的主教宫、中世纪民居，感受老城的核心风貌。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  接着步行至老市政厅，这座建在桥上的独特建筑，外观华丽，融合哥特式与巴洛克式风格，内部展示了班贝格的历史文物与城市发展历程，可登上市政厅露台，欣赏雷格尼茨河的风光。之后前往小威尼斯，漫步于河畔，欣赏色彩斑斓的河畔民居、古老的码头与悠闲的游船，感受老城的柔美与烟火气。最后在小威尼斯周边的特色商铺逛逛，购买当地手工艺品与啤酒，结束精华游览，全程涵盖老城核心看点，节奏紧凑。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速体验老城精华
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（3-4小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加博物馆参观、美食体验与小众景点游览，深入感受班贝格老城的历史文化与当地风情。参观完班贝格大教堂后，重点观赏教堂内的亨利二世陵墓、圣坛雕塑与中世纪壁画，品味其精湛的工艺与深厚的宗教内涵。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  中午前往老城中心的特色餐厅，品尝弗兰肯地区的传统美食，如弗兰肯烤猪肘、土豆饺子、酸菜与当地特色的班贝格啤酒，搭配黑麦面包，体验当地的饮食文化。下午参观班贝格历史博物馆，馆内收藏了大量中世纪的文物、手工业制品与历史文献，可了解班贝格的千年发展历程；随后前往圣米迦勒教堂，这座哥特式教堂安静古朴，内部留存着精美的彩绘玻璃与雕塑，适合避开人群，感受宗教的静谧。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  之后漫步于老城的小众街巷，欣赏半木结构房屋的细节、复古商铺与露天咖啡馆，感受老城的市井烟火气；傍晚时分，返回小威尼斯，乘坐游船游览雷格尼茨河，从水上视角欣赏老城的建筑与风光，夕阳洒在河畔，氛围感拉满，结束深度游览，全方位感受班贝格老城的魅力。
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
                  <h4 className="font-semibold text-gray-900 mb-2">1. 老市政厅露台</h4>
                  <p className="text-sm text-gray-700">这是拍摄雷格尼茨河与小威尼斯全景的最佳机位，露台地势适中，可俯瞰小威尼斯的河畔民居、古老码头与流淌的河水，远处的中世纪建筑错落有致，画面兼具自然之美与人文之韵。建议选择晴天的午后拍摄，光线充足，能清晰展现河畔建筑的色彩与河水的清澈。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 班贝格大教堂广场</h4>
                  <p className="text-sm text-gray-700">这是拍摄大教堂与老城核心风貌的绝佳机位，以大教堂的穹顶与哥特式尖塔为主体，搭配广场周边的主教宫、中世纪石质建筑，可清晰捕捉老城的宗教氛围与建筑特色。建议选择晴天的上午拍摄，光线柔和，可拍摄大教堂的全貌、广场的细节与过往的行人。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 小威尼斯河畔步道</h4>
                  <p className="text-sm text-gray-700">这是拍摄河畔民居与烟火气的绝佳机位，步道紧邻雷格尼茨河，可近距离拍摄色彩斑斓的半木结构民居、挂在窗前的鲜花与停泊的游船，画面温馨柔美，充满市井气息。建议选择阴天或午后拍摄，光线柔和，可拍摄民居的细节、河水的倒影。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 班贝格大教堂内部</h4>
                  <p className="text-sm text-gray-700">这是拍摄宗教建筑与文物细节的绝佳机位，教堂内部的穹顶、彩绘玻璃、圣坛雕塑与壁画错落有致，细节精美，可捕捉宗教建筑的庄严与艺术之美。建议选择晴天的上午拍摄，光线透过彩绘玻璃洒入，光影交错，可拍摄穹顶全景、壁画特写与雕塑细节。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 雷格尼茨河游船</h4>
                  <p className="text-sm text-gray-700">这是拍摄老城全景与水上视角的绝佳机位，乘坐游船沿雷格尼茨河行驶，可拍摄两岸的中世纪建筑、老市政厅与小威尼斯，画面连贯优美，能完整展现老城“河在城中、城在河畔”的独特风貌。建议选择傍晚拍摄，光线温暖，可拍摄夕阳下的老城轮廓与河水的波光。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 老城小众街巷</h4>
                  <p className="text-sm text-gray-700">这是拍摄复古氛围感与人文细节的绝佳机位，老城的窄巷纵横交错，两侧是古朴的半木结构房屋、复古商铺与露天咖啡馆，充满中世纪风情。建议选择午后或傍晚拍摄，光线柔和，可拍摄街巷的纵深、房屋的细节与过往的行人。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 老城建筑色调丰富，河畔民居多为暖色调，教堂与石质建筑多为冷色调，建议穿搭浅色系、复古风格或大地色系衣物，形成和谐的色调</li>
                <li>• 拍摄教堂内部文物、壁画与彩绘玻璃时，禁止使用闪光灯，避免损坏文物、影响其他游客与宗教活动</li>
                <li>• 禁止攀爬建筑、触摸雕塑与文物，拍摄时避免影响他人通行，尊重当地的宗教习俗与游览规定</li>
                <li>• 傍晚时分的光线最适合拍摄，可呈现出温暖的氛围感，凸显老城的历史厚重感与柔美</li>
                <li>• 拍摄全景照时，可使用广角视角，完整展现老城、河流与建筑的绝美画面</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">班贝格主教宫（Bamberg Residenz）</h4>
                <p className="text-sm text-gray-700 mb-2">距离老城核心区域约5分钟步行路程，与班贝格大教堂相邻，始建于17世纪，是一座融合巴洛克式与洛可可式风格的宫殿，曾是班贝格主教的居所。宫殿内部装饰华丽，设有多个展厅，收藏着中世纪的艺术品、宫廷用品与历史文献。</p>
                <div className="text-xs text-gray-500">🚶 步行5分钟 | 🏰 巴洛克宫殿</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">班贝格历史博物馆（Historisches Museum Bamberg）</h4>
                <p className="text-sm text-gray-700 mb-2">距离老城核心区域约8分钟步行路程，位于老城中心，展示了班贝格从史前时期到现代的发展历程，收藏了大量中世纪的文物、手工业制品、传统服饰与生活器具，可深入了解班贝格的历史文化与地域特色。</p>
                <div className="text-xs text-gray-500">🚶 步行8分钟 | 🏛️ 历史文化</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">圣米迦勒教堂（St. Michael's Church）</h4>
                <p className="text-sm text-gray-700 mb-2">距离老城核心区域约10分钟步行路程，是一座哥特式教堂，始建于12世纪，内部留存着精美的彩绘玻璃、雕塑与壁画，环境静谧神圣，游客较少，适合喜欢安静、想要避开人群的游客。</p>
                <div className="text-xs text-gray-500">🚶 步行10分钟 | ⛪ 小众宗教</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">班贝格啤酒厂（Bamberg Brewery）</h4>
                <p className="text-sm text-gray-700 mb-2">距离老城核心区域约15分钟步行路程，班贝格是德国著名的啤酒之乡，这座啤酒厂始建于17世纪，保留了传统的酿酒工艺，可参观啤酒酿造过程，品尝正宗的班贝格啤酒，了解当地的啤酒文化。</p>
                <div className="text-xs text-gray-500">🚶 步行15分钟 | 🍺 啤酒文化</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">雷格尼茨河游船码头（Regnitz River Cruise Port）</h4>
                <p className="text-sm text-gray-700 mb-2">距离小威尼斯约3分钟步行路程，可乘坐游船游览雷格尼茨河，沿途欣赏老城的建筑、河畔风光与周边村落，全程约1小时，途经多个景点，可从水上视角感受班贝格的柔美。</p>
                <div className="text-xs text-gray-500">🚶 步行3分钟 | 🚢 游船体验</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">班贝格民俗博物馆（Bamberg Folk Museum）</h4>
                <p className="text-sm text-gray-700 mb-2">距离老城核心区域约12分钟步行路程，位于老城边缘，展示了弗兰肯地区的民俗文化、传统工艺与生活方式，收藏了大量民俗文物、传统农具与手工业制品，可了解当地居民的生活场景与地域文化。</p>
                <div className="text-xs text-gray-500">🚶 步行12分钟 | 🎭 民俗文化</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">老城核心区域</h4>
                  <p className="text-sm text-blue-800">首选区域，距离班贝格大教堂、老市政厅、小威尼斯等核心景点步行可达，周边有特色餐厅、咖啡馆、啤酒屋与纪念品商店，既能便捷游览核心景点，又能沉浸式感受中世纪老城的氛围。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">雷格尼茨河畔</h4>
                  <p className="text-sm text-green-800">距离老城核心区域约5-10分钟步行路程，可欣赏河畔风光，部分酒店自带观景露台，傍晚可欣赏夕阳下的小威尼斯，适合喜欢浪漫氛围的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">火车站附近</h4>
                  <p className="text-sm text-yellow-800">距离班贝格火车站步行10分钟可达，周边有餐厅、便利店，适合需要乘坐火车、巴士前往周边城市的游客，交通便利是主要优势。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端景观酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">以景观酒店与宫廷式酒店为主，多位于老城核心区域或河畔，融合中世纪建筑元素与现代设施，自带观景露台、餐厅与休闲区，可欣赏老城全景或河畔风光，部分酒店由古老建筑改造而成。</p>
                  <div className="text-xs text-gray-500">🏰 宫廷风格 | 🏞️ 河畔景观</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于老城核心区域或火车站周边，步行可达核心景点，房间干净整洁，设施齐全，部分酒店提供早餐与免费WiFi，部分酒店还提供大教堂、老市政厅联票优惠。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭出游</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">多为家庭经营，风格温馨，部分民宿由中世纪半木结构房屋改造而成，充满特色，还能感受当地居民的生活氛围，价格约28-45欧元/晚，适合预算有限的游客。</p>
                  <div className="text-xs text-gray-500">💰 预算友好 | 🏡 家庭氛围</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">适合独自旅行或预算有限的游客，价格实惠，通常位于交通便利的位置，可结识来自世界各地的游客，价格约18-28欧元/晚，设施简洁实用，社交氛围浓厚。</p>
                  <div className="text-xs text-gray-500">🎒 背包客首选 | 🌍 国际交流</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季（5-10月）：</strong>春季气候宜人，夏季河畔风光优美，秋季色彩斑斓，游客较多，建议提前1-2个月预订</p>
                    <p className="mb-2"><strong>淡季（11月至次年4月）：</strong>可提前1-2周预订，价格相对实惠</p>
                    <p><strong>特色套餐：</strong>部分高端酒店推出住宿+啤酒厂体验、住宿+游船游览的优惠套餐</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>德国住宿通常不提供洗漱用品，需自带牙刷、牙膏、拖鞋等</p>
                    <p className="mb-2"><strong>特殊注意：</strong>河畔部分酒店地势较低，雨天可能会有潮湿情况，预订时可提前咨询</p>
                    <p><strong>注意事项：</strong>老城夜间非常安静，需保持安静；大部分酒店为无烟酒店</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                班贝格老城，这座依偎在雷格尼茨河与美因河交汇处的千年古城，历经近千年风雨洗礼，依然保留着原始的中世纪风貌与深厚的文化底蕴。在这里，你可以漫步于大教堂广场，触摸宗教建筑的匠心；可以徜徉在小威尼斯河畔，感受市井烟火的柔美；可以走进老市政厅，探寻老城的千年往事；可以品尝正宗的班贝格啤酒，体验弗兰肯地区的饮食风情。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                无论是独自旅行、情侣出游还是家庭度假，班贝格老城都能给你带来难忘的旅行体验，让你在历史与自然的交融中，邂逅一段跨越千年的中世纪之约，爱上这座兼具庄严与柔美、古老与鲜活的欧洲瑰宝。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在历史与自然的交融中，邂逅一段跨越千年的中世纪之约。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}