import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '戈斯拉尔古城・Goslar Old Town・德国・戈斯拉尔 | 最佳欧洲景点',
  description: '探索戈斯拉尔古城，哈尔茨山下的中世纪银都瑰宝，被誉为"没有城墙的博物馆"，以保存完好的中世纪木桁架建筑、悠久的银矿历史与浓厚的人文氛围闻名，是联合国教科文组织认定的世界文化遗产。',
}

export default function GoslarOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '戈斯拉尔古城', href: '/attractions/goslar-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">戈斯拉尔古城・Goslar Old Town・德国・戈斯拉尔</h1>
          <p className="text-lg text-gray-600 mb-6">
            戈斯拉尔古城是德国保存最完整的中世纪古城之一，始建于公元922年，因拉默尔斯贝格银矿崛起而兴盛。古城内遍布色彩斑斓的木桁架房屋、哥特式与罗马式教堂，留存着帝王行宫、市政厅等历史建筑，兼具银矿文化与中世纪宫廷风情，漫步其中，可沉浸式感受千年银都的辉煌与中世纪小镇的静谧，是探访德国中世纪历史、建筑与矿业文明的必游之地。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              戈斯拉尔古城是德国保存最完整的中世纪古城之一，始建于公元922年，因拉默尔斯贝格银矿崛起而兴盛。古城内遍布色彩斑斓的木桁架房屋、哥特式与罗马式教堂，留存着帝王行宫、市政厅等历史建筑，兼具银矿文化与中世纪宫廷风情，漫步其中，可沉浸式感受千年银都的辉煌与中世纪小镇的静谧，是探访德国中世纪历史、建筑与矿业文明的必游之地。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="戈斯拉尔古城" />
                <InfoRow label="英文名称" value="Goslar Old Town" />
                <InfoRow label="国家" value="德国（Germany）" />
                <InfoRow label="城市" value="戈斯拉尔（Goslar）" />
                <InfoRow label="所属区域" value="德国下萨克森州（Lower Saxony）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="世界文化遗产、千年银都" />
                <InfoRow label="核心特色" value="中世纪木桁架建筑、银矿历史" />
                <InfoRow label="建筑价值" value="帝王行宫、市政厅、木桁架房屋" />
                <InfoRow label="文化价值" value="矿业文明、中世纪宫廷风情" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="古城公共区域全天免费开放；核心景点夏季10:00-17:00，冬季10:00-16:00；每周一闭馆" />
              <InfoRow label="门票价格" value="古城免费；帝王行宫7.5欧元，拉默尔斯贝格矿山博物馆12欧元；世界遗产联票20欧元" />
              <InfoRow label="地址" value="Altstadt Goslar, 38640 Goslar, Germany" />
              <InfoRow label="交通方式" value="从汉堡乘德铁约2小时；从汉诺威乘德铁约1小时20分钟；可乘坐801、802路巴士直达" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                戈斯拉尔古城的历史可追溯至公元922年，其崛起与衰落始终与拉默尔斯贝格银矿的命运紧密相连，历经千年风雨，见证了神圣罗马帝国的辉煌、矿业文明的兴盛与衰落，最终成为保存完整的中世纪古城典范，承载着德国中世纪的历史与文化记忆。公元922年，人们在哈尔茨山脉脚下发现了丰富的银矿资源，戈斯拉尔凭借得天独厚的地理位置，迅速成为银矿开采与贸易的核心区域，逐渐发展成为一座繁华的城镇，开启了"千年银都"的辉煌历程。
              </p>
              <p>
                中世纪鼎盛时期，戈斯拉尔是神圣罗马帝国的重要城市，也是欧洲最富有的城市之一，银矿开采带来的巨额财富，推动了城市的快速发展，也吸引了神圣罗马帝国的皇帝在此修建行宫。公元1040年至1050年，帝王行宫（Kaiserpfalz）正式建成，此后的200多年里，这里成为德国乃至欧洲历史的重要舞台，多位神圣罗马帝国皇帝在此居住、理政，举办宫廷仪式，戈斯拉尔也因此获得"帝王之城"的美誉。当时，戈斯拉尔的银矿不仅供应欧洲各国的货币铸造，还支撑着神圣罗马帝国的经济与军事发展，古城内遍布富商宅邸、行会建筑与宗教场所，木桁架建筑、哥特式教堂鳞次栉比，呈现出一派繁荣景象。
              </p>
              <p>
                除了银矿贸易，戈斯拉尔在中世纪还是重要的手工业与文化中心，当地的金属加工、纺织、酿酒等手工业十分发达，生产的兵器、纺织品远销欧洲各地。同时，古城内聚集了大量学者、工匠与艺术家，推动了文学、艺术、建筑等领域的发展，留存至今的木桁架建筑、教堂雕塑与壁画，都展现了中世纪欧洲的艺术成就。值得一提的是，戈斯拉尔还是中世纪欧洲"女巫审判"的重要场所，最后一位女巫于1657年在此被处决，这段历史也成为古城历史的重要组成部分。
              </p>
              <p>
                16世纪至18世纪，随着银矿资源逐渐枯竭，戈斯拉尔的经济开始衰落，加上宗教改革与战争的影响，古城的发展陷入停滞，部分建筑因无人维护而受损，但核心风貌得以保留。19世纪，工业革命兴起，戈斯拉尔尝试转型，但其发展速度缓慢，也正因为如此，古城的中世纪风貌没有被大规模的工业建设所破坏，成为欧洲少有的保存完整的中世纪古城。1988年，拉默尔斯贝格矿山正式停止运作，这座拥有千年开采历史的矿山，成为记录欧洲早期矿业文明的重要遗址。
              </p>
              <p>
                二战期间，戈斯拉尔古城幸运地避开了大规模轰炸，核心建筑与街巷基本完好，成为少数在二战中保存完整的德国中世纪古城。战后，当地政府对古城进行了全面修缮与保护，严格遵循原始建筑工艺，尽力保留其中世纪风貌。1992年，戈斯拉尔古城与拉默尔斯贝格矿山、上哈尔茨山水资源管理系统一同被联合国教科文组织列入世界文化遗产名录，认可其在矿业文明、建筑艺术与历史传承方面的独特价值。如今，戈斯拉尔古城不仅是一座历史遗迹，更是中世纪银矿文明与欧洲中世纪城市发展的见证者，吸引着世界各地的游客前来探寻其千年魅力。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（2-3小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从戈斯拉尔火车站出发，步行10分钟到达古城入口，首先前往古城中心的市政厅广场，广场上矗立着哥特式风格的市政厅，建筑外观精美，墙面雕刻细腻，可驻足欣赏其独特的建筑风貌。随后参观帝王行宫，走进行宫内部，参观皇帝寝宫、议事大厅与博物馆，欣赏馆内收藏的中世纪文物、宫廷用品与历史资料，了解神圣罗马帝国皇帝在戈斯拉尔的活动历程，感受宫廷文化的魅力。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从帝王行宫出来后，漫步于古城的木桁架街巷，欣赏色彩斑斓的中世纪木桁架房屋，这些房屋大多建于16-18世纪，外观错落有致，门窗、墙面装饰精美，充满浓郁的中世纪风情，可逛逛街巷旁的复古商铺、手工艺品店与露天咖啡馆，感受古城的烟火气。之后前往圣彼得教堂（St. Peter's Church），这座建于中世纪的罗马式教堂，内部彩绘玻璃、雕塑与壁画精美，可免费进入参观，感受宗教文化的庄严与厚重。最后返回市政厅广场，购买当地特色纪念品，结束精华游览，全程路线紧凑，涵盖古城核心看点与标志性景观。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速体验古城精华
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（4-5小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加银矿文化体验与小众景点游览，深入感受戈斯拉尔的千年底蕴。参观完圣彼得教堂后，前往拉默尔斯贝格矿山博物馆，乘坐矿山电梯深入地下巷道，参观古老的采矿设备、矿道遗迹，感受中世纪矿工的劳作场景，了解银矿开采的历史与工艺，沉浸式体验千年银都的矿业文明，博物馆内还有专业讲解员，可详细了解矿山的发展历程与欧洲早期矿业的进步。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  中午前往古城中心的特色餐厅，品尝下萨克森州的传统美食，如烤猪肉、香肠、土豆泥与当地特色的矿山风味菜肴，搭配正宗的德国啤酒或果汁，体验当地的饮食文化。下午前往茨温格塔楼，这座中世纪防御塔楼高达26米，直径26米，曾是欧洲最坚固的防御工事之一，可容纳1000人躲避围攻，登顶塔楼可俯瞰整个戈斯拉尔古城全景与哈尔茨山脉的绝美风光，感受古城与自然的和谐交融。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  之后前往圣彼得教堂遗址（St.-Peters-Stift Ruine），距离古城中心仅241米，参观留存的教堂遗迹，感受历史的沧桑与厚重，这里也是拍摄古城人文景观的绝佳位置。傍晚时分，返回古城街巷，欣赏夕阳下的木桁架房屋与古城景观，夕阳洒在色彩斑斓的建筑上，氛围感拉满，可在街巷旁的露天咖啡馆小坐，品尝当地甜点与咖啡，感受戈斯拉尔古城的夜晚氛围，结束深度游览。
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
                  <h4 className="font-semibold text-gray-900 mb-2">1. 市政厅广场中央</h4>
                  <p className="text-sm text-gray-700">这是拍摄古城核心风貌的最佳机位，可清晰捕捉市政厅的哥特式建筑全貌，背景是色彩斑斓的木桁架房屋与热闹的广场氛围，既能展现古城的庄重与繁华，又能凸显中世纪建筑的独特风格。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 茨温格塔楼顶端</h4>
                  <p className="text-sm text-gray-700">这是拍摄戈斯拉尔全景的最佳机位，登顶塔楼，可360度俯瞰整个古城的木桁架街巷、帝王行宫、圣彼得教堂，远处的哈尔茨山脉连绵起伏，画面开阔优美，兼具人文与自然之美。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 拉默尔斯贝格矿山入口</h4>
                  <p className="text-sm text-gray-700">这是拍摄矿业文明与古城同框的绝佳机位，以矿山的古老建筑与矿道入口为前景，远处的古城木桁架房屋与哈尔茨山脉为背景，既能展现千年银矿的历史沧桑，又能凸显古城与矿业的紧密联系。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 古城木桁架街巷深处</h4>
                  <p className="text-sm text-gray-700">这是拍摄古城细节与人文氛围的绝佳机位，纵横交错的鹅卵石街巷、色彩斑斓的木桁架房屋、复古的门窗装饰，充满中世纪韵味，可捕捉街巷的静谧与烟火气。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 帝王行宫露台</h4>
                  <p className="text-sm text-gray-700">这是拍摄帝王行宫与古城局部的绝佳机位，露台地势稍高，可俯瞰帝王行宫的庭院与周边的木桁架建筑，既能展现帝王行宫的庄重典雅，又能融入古城的整体风貌。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 哈尔茨山脉山脚步道</h4>
                  <p className="text-sm text-gray-700">这是拍摄古城与自然交融的绝佳机位，以哈尔茨山脉的青山为背景，前景是戈斯拉尔古城的轮廓与木桁架建筑，画面静谧优美，兼具自然与人文之美。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 古城建筑以色彩斑斓的木桁架为主，风格活泼且富有层次感，周边有青山环绕，建议穿搭浅色系、复古风格或大地色系衣物，形成和谐的色调</li>
                <li>• 拍摄博物馆内部、矿山巷道与文物展品时，禁止使用闪光灯，避免损坏文物、影响其他游客游览</li>
                <li>• 禁止攀爬建筑、触摸雕刻与文物，拍摄时避免影响他人通行，尊重当地的游览规定</li>
                <li>• 傍晚时分的光线最适合拍摄，可呈现出温暖的氛围感，凸显古城的浪漫与历史厚重感</li>
                <li>• 拍摄建筑全景时，可使用广角视角，完整展现古城、矿山与哈尔茨山脉的绝美画面</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">拉默尔斯贝格矿山（Rammelsberg Mine）</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城约3公里，车程10分钟，步行约30分钟，是世界文化遗产的重要组成部分，拥有千年银矿开采历史，直至1988年停止运作，如今以博物馆与遗址的形式对外开放，可深入地下巷道，参观采矿设备与矿道遗迹，了解欧洲早期矿业文明。</p>
                <div className="text-xs text-gray-500">🚗 车程10分钟 | ⛏️ 矿业文明</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">茨温格塔楼（Zwinger Tower）</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城中心约5分钟步行路程，是中世纪戈斯拉尔的重要防御工事，建于中世纪，高达26米，内部留存着防御设施与历史展品，登顶可俯瞰古城全景与哈尔茨山脉风光。</p>
                <div className="text-xs text-gray-500">🚶 步行5分钟 | 🏰 历史建筑</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">圣彼得教堂遗址（St.-Peters-Stift Ruine）</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城中心仅241米，是戈斯拉尔的古老宗教遗迹，建于中世纪，现存部分围墙与建筑构件，充满历史沧桑感，可感受中世纪宗教文化的痕迹，也是拍摄人文景观的绝佳位置。</p>
                <div className="text-xs text-gray-500">🚶 步行3分钟 | ⛪ 历史遗迹</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">上哈尔茨山水资源管理系统</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城约15分钟车程，是世界文化遗产的组成部分，始建于中世纪，是欧洲早期水资源管理的典范，包含水渠、水坝、水车等设施，可了解中世纪人们利用水资源进行采矿、灌溉的智慧。</p>
                <div className="text-xs text-gray-500">🚗 车程15分钟 | 🌊 水资源管理</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">戈斯拉尔民俗博物馆（Goslar Folk Museum）</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城中心约10分钟步行路程，展示了戈斯拉尔从古代到现代的民俗文化、传统工艺与生活方式，收藏了大量民俗文物、传统服饰、手工业制品与生活器具，可了解当地的地域文化与居民生活。</p>
                <div className="text-xs text-gray-500">🚶 步行10分钟 | 🎭 民俗文化</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">哈尔茨山脉徒步步道</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城约10分钟车程，是哈尔茨山脉的经典徒步路线，步道沿途植被繁茂，青山环绕，可欣赏原生态的自然风光，还能俯瞰戈斯拉尔古城全景，适合喜欢自然景观、想要徒步休闲的游客。</p>
                <div className="text-xs text-gray-500">🚗 车程10分钟 | 🥾 自然徒步</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">古城核心区域</h4>
                  <p className="text-sm text-blue-800">首选区域，距离市政厅、帝王行宫、木桁架街巷等核心景点步行可达，周边有特色餐厅、咖啡馆与纪念品商店，既能便捷游览景点，又能感受古城的中世纪氛围与烟火气。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">哈尔茨山脉周边</h4>
                  <p className="text-sm text-green-800">距离山脉徒步步道较近，可俯瞰山脉风光与古城全景，清晨能欣赏到山间日出，环境静谧舒适，适合休闲度假、喜欢自然风光的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">火车站附近</h4>
                  <p className="text-sm text-yellow-800">距离车站步行10分钟可达，周边有餐厅、便利店，生活便利，适合需要乘坐火车、巴士前往周边城市的游客。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端精品酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于古城核心区域，融合中世纪木桁架建筑元素与现代设施，自带观景露台、餐厅与休闲区，部分酒店由古老富商宅邸改造而成，可欣赏古城全景。</p>
                  <div className="text-xs text-gray-500">🏰 历史体验 | 🏞️ 景观优美</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于古城附近或火车站周边，步行可达核心景点，房间干净整洁，设施齐全，部分酒店提供早餐与免费WiFi，部分酒店还提供拉默尔斯贝格矿山、帝王行宫门票优惠。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭出游</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">多为家庭经营，风格温馨，部分民宿由中世纪木桁架房屋改造而成，充满特色，还能感受当地居民的生活氛围，价格约25-45欧元/晚。</p>
                  <div className="text-xs text-gray-500">💰 预算友好 | 🏡 家庭氛围</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">适合独自旅行或预算有限的游客，价格实惠，通常位于交通便利的位置，可结识来自世界各地的游客，价格约15-25欧元/晚。</p>
                  <div className="text-xs text-gray-500">🎒 背包客首选 | 🌍 国际交流</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季（5-10月）：</strong>春季气候宜人，夏季山间风光优美，秋季色彩斑斓，游客较多，建议提前1-2个月预订</p>
                    <p className="mb-2"><strong>淡季（11月至次年4月）：</strong>可提前1-2周预订，价格相对实惠</p>
                    <p><strong>特色套餐：</strong>部分高端酒店推出住宿+矿山博物馆门票、住宿+山间徒步体验的优惠套餐</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>德国住宿通常不提供洗漱用品，需自带牙刷、牙膏等</p>
                    <p className="mb-2"><strong>特殊注意：</strong>古城部分酒店位于鹅卵石街巷旁，地势有坡度且无电梯，预订时可提前咨询</p>
                    <p><strong>注意事项：</strong>古城夜间非常安静，需保持安静；大部分酒店为无烟酒店</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                戈斯拉尔古城，这座矗立在哈尔茨山下的千年银都，历经千年风雨洗礼，依然保留着原始的中世纪风貌与深厚的矿业文明底蕴。在这里，你可以漫步于木桁架街巷，触摸中世纪建筑的匠心；可以走进帝王行宫，探寻神圣罗马帝国的宫廷往事；可以深入矿山巷道，感受千年银矿的辉煌；可以登顶塔楼，俯瞰古城与青山交融的绝美风光；可以逛逛古朴街巷，感受小镇的烟火气与静谧氛围。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                无论是独自旅行、情侣出游还是家庭度假，戈斯拉尔古城都能给你带来难忘的旅行体验，让你在历史与自然的交融中，邂逅一段跨越千年的中世纪银都之约，爱上这座兼具人文之韵、矿业之魂与自然之美的千年瑰宝。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在历史与自然的交融中，邂逅一段跨越千年的中世纪银都之约。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}