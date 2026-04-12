import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '洛尔施修道院・Lorsch Abbey・德国・洛尔施 | 最佳欧洲景点',
  description: '探索洛尔施修道院，加洛林文艺复兴的千年瑰宝，被誉为"加洛林文艺复兴时期的建筑明珠"，以独特的加洛林式建筑、深厚的宗教文化底蕴与珍贵的历史遗存闻名，是联合国教科文组织认定的世界文化遗产。',
}

export default function LorschAbbeyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '洛尔施修道院', href: '/attractions/lorsch-abbey' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">洛尔施修道院・Lorsch Abbey・德国・洛尔施</h1>
          <p className="text-lg text-gray-600 mb-6">
            洛尔施修道院是德国最具代表性的加洛林时期宗教遗迹之一，始建于公元764年，是神圣罗马帝国早期的权力与文化中心。现存核心建筑国王大厅堪称建筑典范，融合罗马式与早期哥特式风格，修道院还留存有中世纪图书馆遗迹与《洛尔施药典》相关遗存，漫步其中，可感受千年宗教文明的厚重与加洛林文艺复兴的璀璨，是探访德国中世纪历史与宗教文化的必游之地。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              洛尔施修道院是德国最具代表性的加洛林时期宗教遗迹之一，始建于公元764年，是神圣罗马帝国早期的权力与文化中心。现存核心建筑国王大厅堪称建筑典范，融合罗马式与早期哥特式风格，修道院还留存有中世纪图书馆遗迹与《洛尔施药典》相关遗存，漫步其中，可感受千年宗教文明的厚重与加洛林文艺复兴的璀璨，是探访德国中世纪历史与宗教文化的必游之地。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="洛尔施修道院" />
                <InfoRow label="英文名称" value="Lorsch Abbey" />
                <InfoRow label="国家" value="德国（Germany）" />
                <InfoRow label="城市" value="洛尔施（Lorsch）" />
                <InfoRow label="所属区域" value="德国黑森州（Hesse）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="加洛林文艺复兴遗迹、世界文化遗产" />
                <InfoRow label="核心特色" value="加洛林式建筑、宗教文化底蕴" />
                <InfoRow label="建筑价值" value="国王大厅、罗马式与早期哥特式融合" />
                <InfoRow label="文化价值" value="中世纪图书馆遗迹、《洛尔施药典》" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="修道院遗址及博物馆夏季10:00-18:00，冬季10:00-16:00；每周一闭馆；世界遗产公园全天开放" />
              <InfoRow label="门票价格" value="修道院遗址及博物馆成人票8欧元，优惠票5欧元；洛尔施历史联票12欧元" />
              <InfoRow label="地址" value="Klosterstraße 1, 64653 Lorsch, Germany" />
              <InfoRow label="交通方式" value="从法兰克福乘德铁约40分钟；从海德堡乘德铁约1小时10分钟；可乘坐3路巴士直达" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                洛尔施修道院的历史可追溯至加洛林王朝时期，其建造与发展见证了神圣罗马帝国早期的宗教兴盛与文化繁荣，是加洛林文艺复兴的重要载体，历经千年风雨，依然留存着不可替代的历史与文化价值。公元764年，在查理大帝之父丕平（Pippin）的授意下，洛尔施修道院正式动工修建，最初作为本笃会修道院，选址于莱茵河中游河谷的战略要地，既便于宗教传播，也利于交通与贸易往来，成为当时神圣罗马帝国的精神、权力与文化中心之一。
              </p>
              <p>
                修道院建成后，迅速发展成为中世纪欧洲重要的宗教与文化枢纽，拥有当时欧洲最大的图书馆之一，收藏了大量宗教典籍、哲学著作与科学文献，其中最具代表性的便是8世纪晚期编撰的《洛尔施药典》，这部著作被认为是科学用药的开山之作，于2013年入选联合国教科文组织世界记忆文献遗产，见证了中世纪欧洲医学的发展成就。此外，修道院还建有大面积的药草种植园，既是修行者自给自足的基础，也是当时交流医学知识的重要场所，推动了欧洲中世纪医学的进步。
              </p>
              <p>
                中世纪鼎盛时期，洛尔施修道院不仅是宗教修行的圣地，更是区域内的经济与文化中心，拥有大量土地与财产，吸引了无数修士、学者前来修行与研究，推动了文学、艺术、建筑等领域的发展。其核心建筑国王大厅（Torhalle）作为加洛林式建筑的典范，采用罗马式拱门、壁柱与半圆柱设计，风格庄重典雅，兼具实用与装饰功能，关于其最初用途至今尚无定论，推测可能是图书馆、法院大厅、宴会厅或接待大楼，甚至兼具多种功能，历经千年依然保持原貌，被誉为"加洛林文艺复兴时期的明珠"。
              </p>
              <p>
                16世纪宗教改革时期，洛尔施修道院遭受重创，大量典籍被损毁，修士被迫撤离，修道院逐渐衰落，部分建筑因无人维护而受损。17世纪至18世纪，受战争与世俗化影响，修道院进一步衰败，部分建筑被拆毁，仅国王大厅、部分围墙与附属设施得以留存。1803年，修道院被世俗化接管，成为当地政府管理的历史遗迹，随后多次组织修缮，严格遵循原始建筑工艺，尽力保留其原有风貌。二战期间，洛尔施小镇遭受轻微轰炸，修道院核心建筑凭借坚固的结构得以保存，仅部分附属设施受损。战后，当地政府对修道院进行了全面修缮与保护，1991年，洛尔施修道院被联合国教科文组织列入世界文化遗产名录，进一步提升了其国际影响力。2014年，恰逢修道院建成1250周年，世界遗产公园正式开幕，将修道院遗址与周边景观整合，丰富了游览体验。如今，洛尔施修道院不仅是一座历史遗迹，更是加洛林文艺复兴文明的见证者，承载着千年宗教与文化记忆，向世人展现着中世纪欧洲的文明底蕴与建筑智慧。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（2-3小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从洛尔施火车站出发，步行15分钟或乘坐3路巴士直达修道院入口，首先参观修道院核心区域——国王大厅，驻足欣赏其庄重典雅的加洛林式建筑，观察拱门、壁柱的细节设计，感受千年建筑的工艺之美，聆听工作人员讲解其历史用途与建筑特色。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  随后进入修道院博物馆，参观馆内收藏的《洛尔施药典》复制品、中世纪宗教文物、建筑构件与历史资料，了解修道院的发展历程与加洛林文艺复兴的文化成就。从博物馆出来后，漫步于修道院遗址公园，欣赏留存的围墙、回廊遗迹与中世纪花园，感受遗址的静谧与厚重，可在草坪上小憩，沉浸式体验中世纪宗教圣地的氛围。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  之后步行5分钟到达洛尔施小镇中心，逛逛古朴的街巷与复古商铺，感受小镇的烟火气，可购买当地手工艺品、纪念品作为留念，最后步行返回火车站或前往停车场，结束精华游览，全程路线紧凑，涵盖修道院核心看点与小镇特色。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速体验修道院精华
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（4-5小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加历史文化体验与小众景点游览，深入感受洛尔施的千年底蕴。参观完小镇中心后，前往洛尔施历史博物馆（联票包含），这里展示了洛尔施小镇从罗马时期到现代的发展历程，收藏了大量民俗文物、生活器具与历史照片，可了解小镇与修道院的共生关系，感受当地的人文风情。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  中午前往小镇中心的特色餐厅，品尝德国传统美食，如香肠拼盘、土豆泥、烤面包与当地特色的莱茵河鲜鱼，搭配正宗的德国啤酒或果汁，体验黑森州的饮食文化。下午前往世界遗产公园深处，漫步于河畔步道，欣赏莱茵河中游的自然风光，感受公园的静谧与惬意，这里也是拍摄修道院全景的绝佳位置之一。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  之后前往修道院旁的中世纪修士小屋，参观小屋内的生活设施与展品，了解中世纪修士的修行与生活场景，感受当时的宗教生活氛围。傍晚时分，返回修道院遗址，欣赏夕阳下的国王大厅与遗址景观，夕阳洒在建筑上，氛围感拉满，可在遗址旁的露天咖啡馆小坐，品尝当地甜点与咖啡，感受洛尔施小镇的夜晚氛围，结束深度游览。
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
                  <h4 className="font-semibold text-gray-900 mb-2">1. 国王大厅正前方广场</h4>
                  <p className="text-sm text-gray-700">这是拍摄国王大厅的最佳机位，可清晰捕捉国王大厅的完整形态，包括罗马式拱门、壁柱与半圆柱的细节，背景是修道院的围墙与绿植，既能展现建筑的庄重典雅，又能凸显加洛林式建筑的独特风格。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 世界遗产公园河畔步道</h4>
                  <p className="text-sm text-gray-700">这是拍摄修道院全景的最佳机位，从河畔视角可将国王大厅、修道院遗址与周边田园风光、莱茵河支流尽收眼底，画面开阔优美，兼具人文与自然之美。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 修道院博物馆露台</h4>
                  <p className="text-sm text-gray-700">这是拍摄国王大厅侧面的绝佳机位，露台地势稍高，可俯瞰国王大厅的侧面轮廓与修道院遗址的局部景观，背景是洛尔施小镇的古朴街巷，既能展现建筑的细节之美，又能融入小镇的人文氛围。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 修道院回廊遗迹旁</h4>
                  <p className="text-sm text-gray-700">这是拍摄遗址细节的绝佳机位，留存的回廊石柱、墙面纹理与雕刻痕迹清晰可见，充满历史沧桑感，这些遗迹记录了修道院的兴衰历程，是中世纪宗教建筑的缩影。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 小镇中心街巷路口</h4>
                  <p className="text-sm text-gray-700">这是拍摄修道院与小镇同框的绝佳机位，以小镇古朴的彩色民居为前景，远处的国王大厅隐约可见，既能捕捉到小镇的烟火气，又能展现修道院的标志性景观，是还原洛尔施小镇明信片场景的最佳位置。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 修道院花园草坪</h4>
                  <p className="text-sm text-gray-700">这是拍摄氛围感人像的绝佳机位，以国王大厅为背景，草坪为前景，周边绿植环绕，自带静谧浪漫的氛围，适合拍摄人像照与休闲风格的照片。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 修道院建筑以浅色系石材为主，风格庄重典雅，周边绿植繁茂，建议穿搭浅色系、复古风格或大地色系衣物，形成和谐的色调</li>
                <li>• 拍摄博物馆内部、文物展品时，禁止使用闪光灯，避免损坏文物、影响其他游客游览</li>
                <li>• 禁止攀爬建筑遗迹、触摸雕刻与文物，拍摄时避免影响他人通行，尊重当地的游览规定</li>
                <li>• 傍晚时分的光线最适合拍摄，可呈现出温暖的氛围感，凸显修道院的历史厚重感与浪漫气息</li>
                <li>• 拍摄建筑全景时，可使用广角视角，完整展现建筑、遗址与周边景观的绝美画面</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">洛尔施历史博物馆（Lorsch Historical Museum）</h4>
                <p className="text-sm text-gray-700 mb-2">距离修道院约5分钟步行路程，是了解洛尔施小镇历史的重要场所，展示了从罗马时期到现代的民俗文物、生活器具、历史照片与文献资料，重点介绍了小镇与修道院的共生关系。</p>
                <div className="text-xs text-gray-500">🚶 步行5分钟 | 🏛️ 历史文化</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">世界遗产公园（Lorsch World Heritage Park）</h4>
                <p className="text-sm text-gray-700 mb-2">与修道院相连，全天免费开放，公园内植被繁茂，河流蜿蜒，留存着修道院的部分附属遗迹，还有步道、草坪与休闲设施，可漫步、野餐、休闲放松。</p>
                <div className="text-xs text-gray-500">🚶 直接相连 | 🌿 自然景观</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">洛尔施小镇老城</h4>
                <p className="text-sm text-gray-700 mb-2">距离修道院约10分钟步行路程，保留着完整的中世纪街巷风貌，彩色的民居、古朴的商铺、露天咖啡馆与小广场相映成趣，充满宁静古朴的氛围。</p>
                <div className="text-xs text-gray-500">🚶 步行10分钟 | 🏘️ 小镇风情</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">莱茵河中游河谷步道</h4>
                <p className="text-sm text-gray-700 mb-2">距离修道院约20分钟步行路程，沿着步道可欣赏莱茵河中游的原生态风光，河畔植被茂密，村落古朴，可进行徒步、骑行等活动。</p>
                <div className="text-xs text-gray-500">🚶 步行20分钟 | 🌊 河畔风光</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">圣米迦勒教堂（St. Michael's Church）</h4>
                <p className="text-sm text-gray-700 mb-2">距离修道院约15分钟步行路程，是洛尔施小镇的另一座历史建筑，建于中世纪，融合罗马式与哥特式建筑风格，教堂内部彩绘玻璃、雕塑与壁画精美。</p>
                <div className="text-xs text-gray-500">🚶 步行15分钟 | ⛪ 宗教建筑</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">黑森州民俗博物馆（Hesse Folk Museum）</h4>
                <p className="text-sm text-gray-700 mb-2">距离修道院约25分钟车程，展示了黑森州的民俗文化、传统工艺与生活方式，收藏了大量民俗文物、传统服饰与手工艺品，可了解黑森州的地域文化。</p>
                <div className="text-xs text-gray-500">🚗 车程25分钟 | 🎭 民俗文化</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">修道院周边及小镇核心区域</h4>
                  <p className="text-sm text-blue-800">首选区域，距离洛尔施修道院、历史博物馆、小镇老城等核心景点步行可达，周边有特色餐厅、咖啡馆与纪念品商店，既能便捷游览景点，又能感受小镇的宁静氛围与中世纪风情。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">莱茵河畔住宿</h4>
                  <p className="text-sm text-green-800">位于河畔步道附近，可俯瞰莱茵河风光与田园景色，清晨能欣赏到河畔日出，环境静谧舒适，适合休闲度假、喜欢自然风光的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">火车站附近</h4>
                  <p className="text-sm text-yellow-800">距离车站步行10分钟可达，周边有餐厅、便利店，生活便利，适合需要乘坐火车、巴士前往周边城市的游客。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端精品酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于小镇核心区域或河畔，融合中世纪建筑元素与现代设施，自带观景露台、餐厅与休闲区，部分酒店由古老民居改造而成，可欣赏小镇或莱茵河风光。</p>
                  <div className="text-xs text-gray-500">🏰 历史体验 | 🏞️ 景观优美</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于小镇附近或火车站周边，步行可达核心景点，房间干净整洁，设施齐全，部分酒店提供早餐与免费WiFi，部分酒店还提供修道院、历史博物馆门票优惠。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭出游</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">多为家庭经营，风格温馨，部分民宿由中世纪民居改造而成，充满特色，还能感受当地居民的生活氛围，价格约20-40欧元/晚。</p>
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
                    <p className="mb-2"><strong>旺季（5-10月）：</strong>春季气候宜人，夏季田园风光优美，秋季色彩斑斓，游客较多，建议提前1-2个月预订</p>
                    <p className="mb-2"><strong>淡季（11月至次年4月）：</strong>可提前1-2周预订，价格相对实惠</p>
                    <p><strong>特色套餐：</strong>部分高端酒店推出住宿+修道院门票、住宿+田园徒步体验的优惠套餐</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>德国住宿通常不提供洗漱用品，需自带牙刷、牙膏等</p>
                    <p className="mb-2"><strong>特殊注意：</strong>小镇部分酒店位于鹅卵石街巷旁，地势有坡度且无电梯，预订时可提前咨询</p>
                    <p><strong>注意事项：</strong>小镇夜间非常安静，需保持安静；大部分酒店为无烟酒店</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                洛尔施修道院，这座矗立千年的加洛林时期瑰宝，历经风雨洗礼，依然保留着原始的建筑风貌与深厚的文化底蕴。在这里，你可以驻足国王大厅，触摸加洛林文艺复兴的建筑智慧；可以走进博物馆，探寻千年宗教与医学的发展历程；可以漫步于遗址公园与小镇街巷，感受中世纪的宁静与烟火气；可以漫步莱茵河畔，欣赏自然与人文交融的绝美风光。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                无论是独自旅行、情侣出游还是家庭度假，洛尔施修道院都能给你带来难忘的旅行体验，让你在历史与自然的交融中，邂逅一段跨越千年的加洛林文明之约，爱上这座兼具人文之韵与田园之美的千年小镇。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在历史与自然的交融中，邂逅一段跨越千年的加洛林文明之约。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}