import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科英布拉老城・Coimbra・葡萄牙・科英布拉 | 最佳欧洲景点',
  description: '探索科英布拉老城，葡萄牙故都的千年人文与学府秘境，以欧洲最古老的科英布拉大学为核心，融合罗曼式、哥特式、巴洛克式建筑风格。',
}

export default function CoimbraOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '科英布拉老城', href: '/attractions/coimbra-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">科英布拉老城・Coimbra・葡萄牙・科英布拉</h1>
          <p className="text-lg text-gray-600 mb-6">
            科英布拉老城是葡萄牙千年故都与文化地标，依托科英布拉大学而生，保留了中世纪街巷、古教堂、学府建筑等大量遗迹。这里依山傍水，建筑风格多元，既有罗马式的古朴、哥特式的典雅，又有巴洛克式的华丽，兼具故都的历史厚重与学府的人文气息，是领略葡萄牙中世纪文化、学术底蕴与市井风情，感受伊比利亚半岛文化交融魅力的核心目的地。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              科英布拉老城是葡萄牙千年故都与文化地标，依托科英布拉大学而生，保留了中世纪街巷、古教堂、学府建筑等大量遗迹。这里依山傍水，建筑风格多元，既有罗马式的古朴、哥特式的典雅，又有巴洛克式的华丽，兼具故都的历史厚重与学府的人文气息，是领略葡萄牙中世纪文化、学术底蕴与市井风情，感受伊比利亚半岛文化交融魅力的核心目的地。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="科英布拉老城" />
                <InfoRow label="英文名称" value="Coimbra Old Town" />
                <InfoRow label="国家" value="葡萄牙（Portugal）" />
                <InfoRow label="城市" value="科英布拉（Coimbra）" />
                <InfoRow label="所属区域" value="葡萄牙中部科英布拉区，蒙德古河沿岸" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史起源" value="古罗马时期，1139年成为葡萄牙故都" />
                <InfoRow label="建筑风格" value="罗曼式、哥特式、巴洛克式融合" />
                <InfoRow label="核心景点" value="科英布拉大学、若昂尼娜图书馆、老教堂" />
                <InfoRow label="特色" value="千年学府、故都文化、学术底蕴" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="老城全天开放；大学夏季9:00-18:00，冬季10:00-17:00；教堂9:00-17:30" />
              <InfoRow label="门票价格" value="老城免费；大学联票成人12欧元；老教堂3欧元，新教堂2欧元；团体8折优惠" />
              <InfoRow label="地址" value="Baixa de Coimbra, 3000-308 Coimbra, Portugal" />
              <InfoRow label="交通方式" value="从里斯本乘火车约1小时30分钟，从波尔图约1小时；火车站乘公交2站可达" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                科英布拉老城的历史渊源可追溯至古罗马时期，当时这里是古罗马重要的军事与商业据点，留存有大量古罗马时期的建筑遗迹与文物，为老城的发展奠定了基础。“科英布拉（Coimbra）”之名由来已久，9世纪时改用附近天主教区之名，称“Conimbria”或“Conimbriga”，“Conim”是当地前凯尔特部落名，“briga”为凯尔特语“城堡”之意，意为“科宁人的城堡”，彰显了其早期的防御属性。
              </p>
              <p>
                1139年，葡萄牙国王阿丰索一世在奥里基之役大破穆斯林军队，始建葡萄牙王国，定都科英布拉，此后相继有六位葡王出生于此，科英布拉成为葡萄牙早期的政治、文化与宗教中心，迎来第一个发展鼎盛期。这段时期，老城不断扩建，修建了大量宗教建筑与行政设施，老教堂、城墙、古街巷等逐步成型，基督教文化在此落地生根，成为伊比利亚半岛基督教文化传播的重要节点。
              </p>
              <p>
                12至13世纪，科英布拉的宗教与文化发展达到顶峰，老教堂（始建于1162年）建成，最初为罗马式建筑，后逐步融入哥特式、文艺复兴式元素，成为混合型建筑，全部采用黄色砂岩方石砌筑，宛如城堡，兼具宗教功能与防御作用，其拱形侧门的雕花与马赛克装饰，还留存着伊斯兰文化的痕迹，见证了伊比利亚半岛文化的交融。1290年，葡王迪尼什在里斯本创建葡萄牙第一所大学，为科英布拉的学术发展埋下伏笔。
              </p>
              <p>
                13世纪下半叶，葡萄牙首都迁至里斯本，科英布拉的政治地位有所下降，但文化与学术地位并未削弱。1537年，葡萄牙第一所大学正式迁至科英布拉，成为今天的科英布拉大学，这是欧洲最古老的大学之一，也是科英布拉老城的核心灵魂。此后，老城围绕大学逐步发展，学者、工匠、商人纷纷聚集，形成了兼具学术氛围与市井烟火气的独特风貌，法学院、图书馆、学生宿舍等建筑陆续建成，建筑风格融合了罗曼式与哥特式，尽显典雅庄重。
              </p>
              <p>
                20世纪以来，葡萄牙政府将科英布拉老城列为国家级历史遗迹，加大保护与修缮力度，完善基础设施，增设游客服务中心与导览标识，让老城既能承载千年历史，又能适配现代游览需求。如今，科英布拉大学依然是葡萄牙的顶尖学府，老城则成为全球游客感受葡萄牙故都文化、学术底蕴与中世纪风情的重要窗口，每年吸引数十万游客前来探访，重温千年人文传奇。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（2-3小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从科英布拉火车站出发，乘坐1路公交抵达大学站，步行3分钟进入老城核心区域，以科英布拉大学为起点。首先参观大学法学院庭院，欣赏罗马式石门、大理石雕塑与赭红色屋瓦，感受学术建筑的典雅庄重，这里的柱墙、壁面镌有精美的圣徒雕像与盾徽，尽显中世纪建筑的精致；随后前往若昂尼娜图书馆，观赏华丽的巴洛克式装饰、珍贵的古籍与壁画，感受百年学府的书香气息（需提前预约）。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  参观完图书馆后，前往老教堂，漫步这座混合型风格的宗教建筑，欣赏黄色砂岩墙体、精致的拱形门雕与马赛克装饰，感受宗教文化与建筑艺术的交融；随后走出教堂，漫步老城核心街巷，欣赏蜿蜒的石板路、错落的复古民居与精致的窗台装饰，感受市井烟火气；最后前往蒙德古河沿岸步道，远眺河面风光，休息片刻后，沿原路返回，结束精华游览。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速体验老城精华
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（4-5小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加大学博物馆探访、民俗体验与美食品尝，深入感受老城的多元魅力。参观完蒙德古河步道后，返回老城，前往科英布拉大学博物馆，观赏古代手稿、学术文物、艺术品等，了解大学的发展历程与葡萄牙的学术文化；随后前往新教堂，欣赏巴洛克式外墙与内部华丽的壁画、雕塑，对比老教堂的古朴与新教堂的精致。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  离开教堂后，深度漫步老城街巷，探访当地的民俗小店，购买传统手工艺品、葡萄酒与特色甜点，感受当地的民俗风情；随后前往圣米格尔山观景台，徒步20分钟，登顶俯瞰整座老城与蒙德古河的全景，感受依山傍水的独特风貌；徒步结束后，前往老城內的特色餐厅，品尝葡萄牙中部传统美食，如葡式炖菜、烤鳕鱼、奶酪蛋挞等，搭配当地产的白葡萄酒，体验葡萄牙的饮食文化；傍晚时分，再次返回大学区域，欣赏夕阳下的学府建筑，感受夜幕降临前的静谧氛围，结束深度游览。
                </p>
                <div className="text-sm text-green-800 bg-green-100 p-3 rounded">
                  <strong>适合人群：</strong>喜欢细致游览的游客，想要深度体验老城文化
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-800 mb-2">游览小贴士</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• 进入教堂与大学室内区域需着装端庄，避免穿着短裤、短裙、露肩装</li>
                <li>• 若昂尼娜图书馆内禁止拍照、触摸展品，参观时需保持安静，遵守工作人员指引</li>
                <li>• 夏季（6-8月）是旅游旺季，大学与教堂参观人数较多，建议错峰前往</li>
                <li>• 老城街巷多石板路、台阶较多，建议穿着舒适的步行鞋</li>
                <li>• 老城周边售卖点较少，建议提前准备好饮用水与小零食</li>
                <li>• 参观大学部分区域需跟随导览，禁止擅自进入未开放区域</li>
              </ul>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 圣米格尔山观景台</h4>
                  <p className="text-sm text-gray-700">拍摄科英布拉老城全景的最佳机位，从这里可将整座老城的蜿蜒街巷、科英布拉大学建筑群、老教堂与蒙德古河尽收眼底，依山傍水的格局清晰可见。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 科英布拉大学法学院庭院</h4>
                  <p className="text-sm text-gray-700">法学院的罗马式石门与庭院是拍摄学术复古氛围的核心机位，厚重的石质石门、精致的大理石雕塑、牙白色柱墙与赭红色屋瓦相互映衬，尽显中世纪学术建筑的典雅庄重。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 老城石板街巷拐角</h4>
                  <p className="text-sm text-gray-700">科英布拉老城的石板街巷蜿蜒错落，是拍摄复古氛围感的绝佳机位，以斑驳的石板路为前景，两侧的复古民居、窗台鲜花与挂着灯笼的店铺相互映衬，既有中世纪的静谧感，又有市井的烟火气。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 老教堂拱形门旁</h4>
                  <p className="text-sm text-gray-700">老教堂的拱形侧门是拍摄宗教建筑特写的小众机位，六层门拱券、各具特色的柱式纹饰与马赛克装饰，尽显建筑的精致与文化交融的痕迹，黄色砂岩墙体在光线照射下更具质感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 蒙德古河沿岸步道</h4>
                  <p className="text-sm text-gray-700">这里是拍摄老城与河流同框的绝佳机位，以蒙德古河为前景，远处的老城建筑群与圣米格尔山在背景中矗立，河水潺潺，绿植繁茂，画面清新自然，兼具人文底蕴与自然美感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 若昂尼娜图书馆门口</h4>
                  <p className="text-sm text-gray-700">图书馆的巴洛克式大门是拍摄华丽建筑特写的机位，精致的雕花、华丽的曲线造型与柔和的色彩，尽显巴洛克艺术的优雅，门口的石柱与浮雕细节丰富，搭配复古的门扉，氛围感十足。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 老城建筑以暖色调为主，建议穿搭浅色系衣物（如白色、米色），形成柔和对比，提升照片质感</li>
                <li>• 拍摄街巷时，可携带书籍、复古帽子等道具，增强学术与复古氛围</li>
                <li>• 室内拍摄时，避免使用闪光灯，以免影响建筑装饰</li>
                <li>• 尊重当地规定，图书馆内部、教堂祭坛区域禁止拍照，拍摄人物时需提前征得同意</li>
                <li>• 徒步拍摄时，注意脚下的石板路与台阶，避免滑倒</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">科英布拉大学博物馆</h4>
                <p className="text-sm text-gray-700 mb-2">距离老城核心区域约300米，步行5分钟可达，馆内收藏了葡萄牙第一所大学的历史文物、古代手稿、学术仪器、艺术品等，是了解科英布拉学术文化与大学发展历程的重要去处。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行5分钟 | 🏛️ 学术文化</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">蒙德古河游船</h4>
                <p className="text-sm text-gray-700 mb-2">距离老城核心区域约800米，步行10分钟可达游船码头，乘坐游船沿蒙德古河行驶，可从水上欣赏老城全景、圣米格尔山与沿岸风光，游船全程40分钟。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行10分钟 | 🚢 河景风光</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">蒙桑托小镇</h4>
                <p className="text-sm text-gray-700 mb-2">距离科英布拉老城约30分钟车程，是一座保留完好的中世纪小镇，小镇内鹅卵石街巷蜿蜒交错，复古民居错落有致，还有古老的城堡遗址与民俗小店，氛围静谧复古。</p>
                <div className="text-xs text-gray-500">🚗 车程30分钟 | 🏘️ 中世纪小镇</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">科英布拉植物园</h4>
                <p className="text-sm text-gray-700 mb-2">距离老城约1.5公里，乘坐4路公交可直达，是葡萄牙最古老的植物园之一，园内绿植繁茂，种植了大量珍稀植物、花卉与树木，还有复古的亭台、喷泉与雕塑。</p>
                <div className="text-xs text-gray-500">🚌 公交直达 | 🌳 植物园</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">圣克拉拉修道院</h4>
                <p className="text-sm text-gray-700 mb-2">距离老城约2公里，乘坐7路公交可直达，始建于14世纪，是一座融合了哥特式与巴洛克式风格的修道院，院内保留了大量壁画、雕塑与古籍，环境清幽，静谧庄重。</p>
                <div className="text-xs text-gray-500">🚌 公交直达 | ⛪ 宗教文化</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">阿尔科巴萨修道院</h4>
                <p className="text-sm text-gray-700 mb-2">距离科英布拉老城约45分钟车程，是葡萄牙著名的世界文化遗产，始建于12世纪，融合了罗曼式与哥特式建筑风格，修道院规模宏大，建筑精致，院内的教堂、回廊、图书馆均极具艺术价值。</p>
                <div className="text-xs text-gray-500">🚗 车程45分钟 | 🏛️ 世界文化遗产</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">老城核心区域</h4>
                  <p className="text-sm text-blue-800">首选区域，距离科英布拉大学、老教堂、古街巷等核心景点较近，步行即可抵达，周边环境安静复古，推窗即可欣赏老城风貌。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">火车站附近</h4>
                  <p className="text-sm text-green-800">交通便捷，距离火车站步行5-10分钟，适合需要乘坐火车前往周边景点的游客，周边有餐厅、便利店，生活便利。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">蒙德古河沿岸</h4>
                  <p className="text-sm text-yellow-800">距离老城约1公里，环境清幽，推窗即可欣赏河景，适合休闲度假的游客，可沿河散步，感受自然之美。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端文化主题酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于老城核心区域，部分由历史建筑改建而成，融合了复古与现代元素，自带餐厅、观景露台，部分房型可欣赏大学或河景。</p>
                  <div className="text-xs text-gray-500">💎 文化体验 | 🏰 历史建筑</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于火车站附近或老城外围，步行可达核心景点，房间干净整洁，设施齐全，价格适中，性价比突出。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭情侣</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">多为家庭经营，风格温馨，部分民宿带有厨房，可自己烹饪，价格实惠，还能感受当地居民的生活氛围。</p>
                  <div className="text-xs text-gray-500">💰 预算友好 | 🏡 家庭氛围</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">适合独自旅行或预算有限的游客，价格实惠，通常位于交通便利的位置，可结识来自世界各地的旅行者。</p>
                  <div className="text-xs text-gray-500">🎒 背包客首选 | 🌍 国际交流</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季（6-8月、10月）：</strong>建议提前1-2个月预订，秋季风光最佳，也是大学开学季</p>
                    <p className="mb-2"><strong>淡季（11月-次年5月）：</strong>可提前1-2周预订，价格相对实惠</p>
                    <p><strong>文化套餐：</strong>部分高端酒店推出住宿+大学联票的优惠套餐</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>葡萄牙住宿通常不提供洗漱用品，需自备牙刷、牙膏等</p>
                    <p className="mb-2"><strong>货币注意：</strong>葡萄牙通用欧元，酒店均支持欧元支付</p>
                    <p><strong>注意事项：</strong>老城夜间安静，需保持安静；大部分酒店为无烟酒店</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                科英布拉老城，这座矗立在蒙德古河畔的千年故都，历经近千年的风雨变迁，依然以典雅的学府建筑、古朴的宗教遗迹、蜿蜒的复古街巷，诉说着葡萄牙的人文传奇与历史底蕴。它既有故都的庄严厚重，又有学府的书香气息；既有宗教文化的静谧庄重，又有市井生活的烟火温情；既有不同建筑风格的碰撞交融，又有自然与人文的和谐共生。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                在这里，你可以漫步大学庭院，感受百年学术的温度；可以走进古教堂，触摸宗教文化的印记；可以穿梭街巷，感受中世纪的复古氛围；可以漫步河畔，领略自然的旖旎风光。无论是独自旅行、情侣出游还是家庭度假，科英布拉老城都能给你带来难忘的旅行体验。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在历史与文化的浸润中，读懂葡萄牙中部的独特魅力，爱上这片兼具人文底蕴与自然之美的土地。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}