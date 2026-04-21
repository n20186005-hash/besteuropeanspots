import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '雷根斯堡石桥・Regensburg Stone Bridge・德国・雷根斯堡 | 最佳欧洲景点',
  description: '探索雷根斯堡石桥，多瑙河畔的中世纪建筑瑰宝，被誉为"多瑙河畔的中世纪建筑丰碑"，以精湛的建筑工艺、悠久的历史底蕴与绝美的多瑙河风光闻名，是中世纪欧洲石拱桥的典范。',
}

export default function RegensburgBridgePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '德国', href: '/destinations/germany' },
            { label: 'Regensburg', href: '/destinations/germany' },
            { label: '雷根斯堡石桥', href: '/attractions/regensburg-stone-bridge' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">雷根斯堡石桥・Regensburg Stone Bridge・德国・雷根斯堡</h1>
          <p className="text-lg text-gray-600 mb-6">
            雷根斯堡石桥是德国最古老且保存完好的石拱桥之一，横跨多瑙河，连接雷根斯堡老城与对岸城区。桥身兼具实用与防御功能，融合罗马式与哥特式建筑风格，桥面蜿蜒，桥墩稳固，历经近千年风雨依然完好。漫步桥上，可俯瞰多瑙河全景与老城中世纪建筑群，既能感受古代桥梁工艺的精湛，又能领略多瑙河畔的人文与自然之美，是探访雷根斯堡的必游地标。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              雷根斯堡石桥是德国最古老且保存完好的石拱桥之一，横跨多瑙河，连接雷根斯堡老城与对岸城区。桥身兼具实用与防御功能，融合罗马式与哥特式建筑风格，桥面蜿蜒，桥墩稳固，历经近千年风雨依然完好。漫步桥上，可俯瞰多瑙河全景与老城中世纪建筑群，既能感受古代桥梁工艺的精湛，又能领略多瑙河畔的人文与自然之美，是探访雷根斯堡的必游地标。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="雷根斯堡石桥" />
                <InfoRow label="英文名称" value="Regensburg Stone Bridge" />
                <InfoRow label="国家" value="德国（Germany）" />
                <InfoRow label="城市" value="雷根斯堡（Regensburg）" />
                <InfoRow label="所属区域" value="德国巴伐利亚州" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="中世纪建筑丰碑、石拱桥典范" />
                <InfoRow label="核心特色" value="石拱桥建筑、多瑙河风光" />
                <InfoRow label="建筑价值" value="罗马式与哥特式融合" />
                <InfoRow label="文化价值" value="世界文化遗产组成部分" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="石桥全天免费开放；桥塔博物馆夏季10:00-17:00，冬季10:00-16:00，每周一闭馆" />
              <InfoRow label="门票价格" value="石桥免费开放；桥塔博物馆5欧元；雷根斯堡老城联票15欧元" />
              <InfoRow label="地址" value="Steinerne Brücke, 93047 Regensburg, Germany" />
              <InfoRow label="交通方式" value="从慕尼黑乘德铁约1小时30分钟；从纽伦堡乘德铁约1小时；可乘坐1路、5路巴士直达" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                雷根斯堡石桥的历史可追溯至中世纪，其建造与雷根斯堡古城的发展息息相关，见证了多瑙河流域的贸易繁荣与历史变迁，是中世纪欧洲桥梁建筑的杰出代表。雷根斯堡作为多瑙河畔的千年古城，自古罗马时期便是重要的交通枢纽与贸易重镇，当时多瑙河上仅有简易木桥，无法满足日益频繁的贸易往来与军事运输需求，修建一座坚固耐用的石拱桥成为当时的迫切需求。
              </p>
              <p>
                1135年，雷根斯堡石桥正式动工修建，由当时欧洲顶尖的建筑师与工匠主持建造，耗时11年，于1146年正式竣工，建成后成为当时欧洲最大的石拱桥，也是近800年间多瑙河上唯一一座石拱桥，被誉为"中世纪的工程奇迹"。石桥全长336米，宽8米，共有16个半圆形桥墩，桥身采用当地坚硬的花岗岩砌筑，桥墩设计巧妙，呈流线型，可有效抵御多瑙河的洪水冲击，展现了中世纪欧洲精湛的桥梁建筑工艺。
              </p>
              <p>
                中世纪时期，雷根斯堡石桥不仅是连接多瑙河南北两岸的交通要道，更是欧洲重要的贸易枢纽，来自欧洲各地的商人通过石桥往来于多瑙河两岸，交易粮食、布匹、盐铁等商品，带动了雷根斯堡古城的经济繁荣，也让雷根斯堡成为神圣罗马帝国的重要城市之一。同时，石桥还兼具军事防御功能，桥两端设有坚固的桥塔，可抵御外敌入侵，桥面上设有防御工事，是中世纪城市防御体系的重要组成部分。
              </p>
              <p>
                16世纪至18世纪，受宗教改革与战争影响，雷根斯堡石桥曾遭受轻微损坏，部分桥墩与桥面出现裂痕，当地政府多次组织修缮，严格遵循原始建筑工艺，保留了石桥的原有风貌。1809年，拿破仑军队入侵雷根斯堡，石桥曾被部分炸毁，战后当地耗时5年时间进行修复，恢复了石桥的原貌。19世纪，随着铁路与公路的修建，石桥的交通功能逐渐减弱，但作为历史遗迹被妥善保护起来。二战期间，雷根斯堡老城遭受了一定程度的轰炸，但雷根斯堡石桥凭借坚固的结构，仅受到轻微损坏，成为少数在二战中保存完好的中世纪建筑之一。战后，当地政府对石桥进行了全面修缮，同时将其纳入雷根斯堡老城世界文化遗产保护范围，加强对石桥的日常维护与保护。如今，雷根斯堡石桥不仅是一座历史遗迹，更是雷根斯堡城市精神的象征，承载着多瑙河流域的千年历史与文化，向世人展现着中世纪欧洲的建筑智慧与文明底蕴。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（2-3小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从雷根斯堡中央火车站出发，步行15分钟或乘坐1路巴士直达石桥北桥头，首先参观石桥本身，漫步在蜿蜒的桥面，欣赏16个流线型桥墩与多瑙河的壮阔风光，驻足观察桥身的石刻细节，感受中世纪建筑工艺的精湛。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  随后登上桥塔博物馆（5欧元/人），登顶桥塔可俯瞰整个雷根斯堡老城全景、多瑙河全貌与石桥的完整形态，感受"一桥横跨多瑙，两岸尽是中世纪风情"的绝美意境。从桥塔下来后，沿着石桥北桥头进入雷根斯堡老城核心区域，步行5分钟到达老城市场广场，这里是老城的中心，矗立着精美的雷根斯堡市政厅，建筑融合哥特式与文艺复兴风格，广场周边是色彩斑斓的中世纪建筑、复古商铺与露天咖啡馆。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  最后步行10分钟到达雷根斯堡大教堂，欣赏教堂的哥特式尖顶与精美浮雕，结束精华游览，全程路线紧凑，涵盖石桥核心看点与老城标志性景观。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速领略石桥魅力
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（4-5小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加历史文化体验与小众景点游览，深入感受雷根斯堡的千年底蕴。参观完雷根斯堡大教堂后，前往罗马博物馆（联票包含），这里展示了雷根斯堡罗马时期的文物、遗迹与历史资料，可了解雷根斯堡从罗马驿站到中世纪重镇的发展历程，感受多元文化的交融。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  中午前往老城中心的特色餐厅，品尝德国传统美食，如烤猪肘、香肠、土豆泥与当地特色的多瑙河鲜鱼，搭配正宗的德国啤酒，体验巴伐利亚的饮食文化。下午从罗马博物馆出发，步行15分钟到达多瑙河南岸的Stadtamhof区，这里是雷根斯堡的小众秘境，保留着古朴的中世纪民居与宁静的街巷，可漫步在河畔步道，从南岸视角拍摄石桥与老城全景，感受多瑙河的静谧与惬意。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  之后前往石桥旁的中世纪防御塔楼，参观塔楼内的防御设施与历史展品，了解石桥的军事防御历史。傍晚时分，返回石桥桥面，欣赏夕阳下的多瑙河与老城风光，夕阳洒在桥身与建筑上，氛围感拉满，之后可在桥头的露天咖啡馆小坐，品尝当地甜点与咖啡，感受雷根斯堡的夜晚氛围，结束深度游览。
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
                  <h4 className="font-semibold text-gray-900 mb-2">1. 石桥桥面中央</h4>
                  <p className="text-sm text-gray-700">这是拍摄石桥本身的最佳机位，可清晰捕捉石桥的蜿蜒弧度、16个流线型桥墩与桥面的石刻细节，背景是壮阔的多瑙河与远处的老城建筑群，既能展现石桥的雄伟气势，又能凸显中世纪建筑的精致感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 桥塔博物馆顶端</h4>
                  <p className="text-sm text-gray-700">这是拍摄雷根斯堡全景的最佳机位，登顶桥塔，可360度俯瞰整个雷根斯堡老城、多瑙河全貌与石桥的完整形态，老城的中世纪建筑错落有致，多瑙河蜿蜒流淌，石桥横跨河面，画面壮阔而优美。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 多瑙河南岸步道</h4>
                  <p className="text-sm text-gray-700">这是拍摄石桥与老城倒影的绝佳机位，沿着南岸步道漫步，多瑙河水澄澈，能清晰倒映出石桥的桥身、桥墩与老城的建筑、教堂尖顶，岸边的绿植与古朴的步道相映成趣，自带静谧浪漫的氛围。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 老城市场广场东侧</h4>
                  <p className="text-sm text-gray-700">这是拍摄石桥与老城同框的绝佳机位，以色彩斑斓的中世纪建筑为前景，远处的石桥横跨多瑙河，背景是雷根斯堡大教堂的尖顶，既能捕捉到老城的烟火气，又能展现石桥的标志性景观，是还原雷根斯堡明信片场景的最佳位置。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 石桥北桥头石刻旁</h4>
                  <p className="text-sm text-gray-700">这是拍摄石桥细节的绝佳机位，桥身的石刻图案、花岗岩纹理与中世纪工匠的雕刻痕迹清晰可见，这些石刻记录了石桥的建造历史与当时的生活场景，充满历史厚重感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 多瑙河游船甲板</h4>
                  <p className="text-sm text-gray-700">这是拍摄石桥动态视角的绝佳机位，乘坐多瑙河游船（全程约1小时，票价18欧元/人），从河面上拍摄石桥的侧面全貌，游船缓缓移动，可捕捉到石桥与多瑙河、老城建筑群的不同角度，画面灵动而有层次。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 石桥与老城建筑以浅色系、罗马式与哥特式为主，多瑙河呈现出澄澈的碧蓝色，建议穿搭浅色系、复古风格或大地色系衣物，形成和谐的色调</li>
                <li>• 拍摄桥塔博物馆内部、罗马博物馆时，禁止使用闪光灯，避免影响其他游客游览</li>
                <li>• 禁止攀爬石桥桥墩、触摸石刻文物，拍摄时避免影响他人通行，尊重当地的游览规定</li>
                <li>• 傍晚时分的光线最适合拍摄，可呈现出温暖的氛围感，凸显石桥的浪漫与历史厚重感</li>
                <li>• 拍摄石桥全景时，可使用广角视角，完整展现石桥、多瑙河与老城的绝美风光</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">雷根斯堡老城（Regensburg Old Town）</h4>
                <p className="text-sm text-gray-700 mb-2">距离石桥约5分钟步行路程，是雷根斯堡世界文化遗产的核心组成部分，保留着完整的中世纪风貌，核心景点有雷根斯堡市政厅、雷根斯堡大教堂、罗马博物馆、老城市场广场等。</p>
                <div className="text-xs text-gray-500">🚶 步行5分钟 | 🏛️ 世界文化遗产</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">圣埃默兰宫（Schloss St. Emmeram）</h4>
                <p className="text-sm text-gray-700 mb-2">距离石桥约20分钟步行路程，曾是皇家邮政企业家族图恩与塔克西斯家族的官邸，是新文艺复兴风格的代表性建筑，宫殿内的大理石楼梯大厅、华丽的房间与精致的壁画极具特色。</p>
                <div className="text-xs text-gray-500">🚶 步行20分钟 | 🏰 宫殿文化</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">多瑙河游船码头</h4>
                <p className="text-sm text-gray-700 mb-2">距离石桥约10分钟步行路程，可乘坐多瑙河游船，沿途欣赏多瑙河的河畔风光、古朴村落与中世纪建筑，全程约1小时，票价18欧元/人。</p>
                <div className="text-xs text-gray-500">🚶 步行10分钟 | 🚢 游船观光</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">罗马博物馆（Römisches Museum）</h4>
                <p className="text-sm text-gray-700 mb-2">距离石桥约8分钟步行路程，位于雷根斯堡老城核心区域，展示了雷根斯堡罗马时期的文物、遗迹与历史资料，可了解雷根斯堡从罗马驿站到中世纪重镇的发展历程。</p>
                <div className="text-xs text-gray-500">🚶 步行8分钟 | 🏺 罗马历史</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">雷根斯堡大教堂（Regensburg Cathedral）</h4>
                <p className="text-sm text-gray-700 mb-2">距离石桥约10分钟步行路程，是德国南部最具代表性的哥特式教堂之一，教堂尖顶高达105米，内部彩绘玻璃、雕塑与壁画精美绝伦，可免费进入参观。</p>
                <div className="text-xs text-gray-500">🚶 步行10分钟 | ⛪ 哥特式教堂</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">多瑙河自然公园（Danube Nature Park）</h4>
                <p className="text-sm text-gray-700 mb-2">距离石桥约25分钟车程，是多瑙河流域的重要自然景观，公园内植被茂密，河流蜿蜒，可进行徒步、野餐、垂钓等休闲活动。</p>
                <div className="text-xs text-gray-500">🚗 车程25分钟 | 🌿 自然景观</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">石桥周边及老城核心区域</h4>
                  <p className="text-sm text-blue-800">首选区域，距离雷根斯堡石桥、市政厅、大教堂等核心景点步行可达，周边有特色餐厅、咖啡馆与纪念品商店，既能便捷游览景点，又能感受老城的静谧氛围与中世纪风情。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">多瑙河畔住宿</h4>
                  <p className="text-sm text-green-800">位于河畔步道附近，可俯瞰多瑙河与石桥风光，清晨能欣赏到河畔日出，环境静谧舒适，适合休闲度假、喜欢自然风光的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">火车站附近</h4>
                  <p className="text-sm text-yellow-800">距离车站步行10分钟可达，周边有餐厅、便利店，生活便利，适合需要乘坐火车、巴士前往周边城市的游客。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端精品酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于老城核心区域或多瑙河畔，融合中世纪建筑元素与现代设施，自带观景露台、餐厅与休闲区，部分酒店由古老贵族宅邸改造而成。</p>
                  <div className="text-xs text-gray-500">🏰 历史体验 | 🏞️ 景观优美</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于老城附近或火车站周边，步行可达核心景点，房间干净整洁，设施齐全，部分酒店提供早餐与免费WiFi，部分酒店还提供桥塔博物馆、多瑙河游船门票优惠。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭出游</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">多为家庭经营，风格温馨，部分民宿由老城中世纪民居改造而成，充满特色，还能感受当地居民的生活氛围，价格约25-45欧元/晚。</p>
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
                    <p className="mb-2"><strong>旺季（5-10月）：</strong>春季气候宜人，夏季多瑙河风光优美，秋季色彩斑斓，游客较多，建议提前1-2个月预订</p>
                    <p className="mb-2"><strong>淡季（11月至次年4月）：</strong>可提前1-2周预订，价格相对实惠</p>
                    <p><strong>特色套餐：</strong>部分高端酒店推出住宿+桥塔博物馆门票、住宿+多瑙河游船体验的优惠套餐</p>
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
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                雷根斯堡石桥，这座横跨多瑙河的中世纪石拱桥，历经近千年风雨洗礼，依然矗立如初，既有精湛的建筑工艺，又有深厚的历史底蕴，更有绝美的自然与人文风光。在这里，你可以漫步在蜿蜒的桥面，触摸中世纪工匠的智慧结晶；可以登上桥塔，俯瞰多瑙河与老城的全景，感受千年古城的魅力；可以走进周边的博物馆与宫殿，探寻雷根斯堡的多元历史；可以乘坐游船，从河面上欣赏石桥的雄伟，感受多瑙河的静谧与壮阔。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                无论是独自旅行、情侣出游还是家庭度假，雷根斯堡石桥都能给你带来难忘的旅行体验，让你在历史与自然的交融中，邂逅一段跨越千年的多瑙河之约，爱上这座兼具人文之韵与自然之美的中世纪瑰宝。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在历史与自然的交融中，邂逅一段跨越千年的多瑙河之约。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}