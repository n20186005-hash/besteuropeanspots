import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '特里尔主教堂・Trier Cathedral・德国・特里尔 | 最佳欧洲景点',
  description: '探索特里尔主教堂，千年圣境中的罗马式建筑瑰宝，联合国教科文组织认定的世界文化遗产，德国最古老的大教堂，兼具罗马式、哥特式建筑风格。',
}

export default function TrierCathedralPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '特里尔主教堂', href: '/attractions/trier-cathedral' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">特里尔主教堂・Trier Cathedral・德国・特里尔</h1>
          <p className="text-lg text-gray-600 mb-6">
            特里尔主教堂始建于4世纪，是德国最古老的基督教大教堂，1986年列入世界文化遗产。它以罗马式建筑为核心，融合哥特式元素，以红色砂岩为建材，内部珍藏有珍贵宗教文物与圣物，见证了罗马帝国的兴衰与基督教在欧洲的传播，是宗教信仰、历史传承与建筑艺术的完美融合，也是特里尔千年古城的精神象征。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              特里尔主教堂始建于4世纪，是德国最古老的基督教大教堂，1986年列入世界文化遗产。它以罗马式建筑为核心，融合哥特式元素，以红色砂岩为建材，内部珍藏有珍贵宗教文物与圣物，见证了罗马帝国的兴衰与基督教在欧洲的传播，是宗教信仰、历史传承与建筑艺术的完美融合，也是特里尔千年古城的精神象征。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="特里尔主教堂" />
                <InfoRow label="英文名称" value="Trier Cathedral" />
                <InfoRow label="国家" value="德国（Germany）" />
                <InfoRow label="城市" value="特里尔（Trier）" />
                <InfoRow label="所属区域" value="德国莱茵兰-普法尔茨州（Rhineland-Palatinate）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="世界文化遗产、德国最古老大教堂" />
                <InfoRow label="核心特色" value="罗马式与哥特式建筑融合" />
                <InfoRow label="建筑价值" value="红色砂岩建材、近1700年历史" />
                <InfoRow label="文化价值" value="珍贵宗教文物与圣物收藏" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="教堂主体全年开放；周一至周六10:00-16:00，周日12:30-16:00" />
              <InfoRow label="门票价格" value="教堂主体免费；教堂博物馆成人5欧元；珍宝馆联票5.5欧元" />
              <InfoRow label="地址" value="Domplatz 1, 54290 Trier, Germany" />
              <InfoRow label="交通方式" value="从法兰克福乘ICE约1.5小时；从科隆乘高速火车约1小时" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                特里尔主教堂的历史，是德国基督教发展的缩影，也是古罗马文明与中世纪宗教文化交融的见证，其建造与发展跨越近1700年，历经罗马帝国、中世纪、宗教改革、二战等多个历史时期，始终是基督教在欧洲的重要圣地，1986年，因其在宗教历史与建筑艺术上的突出地位，与特里尔罗马遗迹、圣母教堂一同被联合国教科文组织列入世界文化遗产名录，成为全人类共同的文化财富。
              </p>
              <p>
                公元326年，罗马皇帝君士坦丁大帝皈依基督教后，下令在特里尔修建一座宏伟的基督教教堂，作为罗马帝国西部的宗教中心，这便是特里尔主教堂的雏形。当时的特里尔是罗马帝国的西部首都，也是欧洲重要的政治、经济与文化中心，这座教堂的修建，不仅标志着基督教在罗马帝国的合法化，也奠定了特里尔作为基督教圣地的地位。最初的教堂为巴西利卡式建筑，采用罗马帝国时期的建筑工艺，以砖块为主要建材，规模宏大，是当时欧洲最具影响力的基督教建筑之一。
              </p>
              <p>
                公元5世纪至8世纪，罗马帝国衰落，特里尔先后被法兰克人、西哥特人统治，主教堂也历经战乱与损毁，部分建筑结构遭到破坏，宗教活动一度陷入低谷。这一时期，教堂多次进行小规模修缮，在保留罗马式核心风格的基础上，增添了早期中世纪的建筑元素，逐步形成了兼具罗马式与中世纪风格的建筑风貌，同时，教堂内开始收藏宗教文物与圣物，逐渐成为区域内的宗教圣地。
              </p>
              <p>
                公元9世纪至12世纪，随着查理曼帝国的崛起与基督教势力的壮大，特里尔主教堂迎来了第一次大规模扩建与修缮。这一时期，教堂主体被重建，采用罗马式建筑风格，以红色砂岩为主要建材，增设了塔楼、拱券等结构，内部装饰也更加精美，绘制了大量宗教壁画、雕刻了宗教雕塑，同时，教堂成为特里尔主教的驻地，宗教地位进一步提升，吸引了大量信徒前来朝拜，也成为当时罗马式建筑艺术的典范。
              </p>
              <p>
                13世纪至15世纪，哥特式建筑风格席卷欧洲，特里尔主教堂也进行了哥特式改造，在教堂的西侧、南侧增设了哥特式尖拱、飞扶壁与彩绘玻璃，与原有罗马式建筑的庄重形成独特的对比，既保留了千年历史的厚重感，又融入了当时流行的建筑美学。这一时期，教堂的珍宝馆开始扩建，收藏了大量珍贵的宗教文物，包括圣物、手稿、金银器等，成为欧洲重要的宗教文物收藏地之一。
              </p>
              <p>
                16世纪至18世纪，宗教改革席卷欧洲，特里尔主教堂作为天主教教堂，受到了一定影响，部分宗教文物遭到损毁，教堂的宗教地位有所下降，但建筑主体得以完整留存。这一时期，特里尔凭借摩泽尔河的水运优势，商业贸易持续繁荣，大教堂作为城市的标志性建筑，依然是城市文化与精神的核心，周边逐渐形成了以大教堂为中心的商业与文化街区，进一步丰富了城市的风貌。
              </p>
              <p>
                19世纪至20世纪初，德国政府加强了对特里尔主教堂的保护与修缮，重点修复了因岁月侵蚀与战乱受损的建筑部分，重新整理了教堂内的文物与圣物，完善了教堂的基础设施。这一时期，大教堂逐渐成为旅游景点，吸引着世界各地的游客前来探访，其罗马式与哥特式融合的建筑风格、深厚的宗教历史底蕴，进一步被世界认可。
              </p>
              <p>
                二战期间，特里尔主教堂遭到一定程度的轰炸，部分建筑结构与内部文物受损，战后，德国政府投入大量资金进行修复，耗时多年，最终恢复了大教堂的原始风貌，不仅修复了受损的塔楼、拱券与彩绘玻璃，还重新整理了珍宝馆的文物，使这座千年教堂再次焕发生机。如今，特里尔主教堂不仅是一座宗教场所，更是一座承载着德国千年历史与建筑艺术的博物馆，每年吸引着数百万游客前来感受其独特的魅力。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（1.5-2小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从大教堂广场入口出发，首先欣赏大教堂的外观，红色砂岩墙体搭配罗马式塔楼与哥特式尖拱，融合两种建筑风格的独特风貌极具视觉冲击力，可驻足观赏建筑的细节与整体风貌，感受其千年的庄严与厚重。随后进入教堂主体，通过安检后，参观中殿与穹顶，中殿两侧的拱券排列整齐，穹顶恢弘壮观，内部光线透过彩绘玻璃洒入，光影交错，营造出静谧神圣的宗教氛围。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  接着前往教堂内部的圣坛区域，观赏精美的宗教雕塑与壁画，感受宗教艺术的魅力，随后参观教堂的珍宝馆（需单独购票），欣赏馆内收藏的圣物、金银器、中世纪手稿等珍贵文物，了解每一件文物的历史背景与宗教内涵。之后前往教堂的地下室，这里保留着罗马帝国时期的建筑遗迹，可触摸千年砖块的沧桑，感受古罗马文明与基督教文化的交融。最后在大教堂广场周边逛逛，欣赏广场周边的中世纪建筑与特色商铺，结束精华游览，全程涵盖大教堂的核心看点，节奏紧凑。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速体验大教堂精华
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（3-4小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加博物馆参观、美食体验与老城漫游，深入感受特里尔的历史文化与当地风情。参观完教堂地下室后，重点观赏教堂内部的彩绘玻璃与宗教雕塑，这些文物细节精美，展现了当时高超的艺术水平，可慢慢品味其宗教内涵与艺术价值，也可租借导览器，了解每一件文物的历史背景。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  中午前往大教堂附近的特色餐厅，品尝莱茵兰-普法尔茨州的传统美食，如摩泽尔河鲜鱼、烤猪肉、土豆泥与当地特色的摩泽尔白葡萄酒，搭配黑麦面包，体验当地的饮食文化。下午参观特里尔主教堂博物馆（Museum am Dom），馆内收藏了大量与大教堂相关的历史文物、建筑图纸、宗教艺术品，可深入了解大教堂的建造历程、修缮历史与罗马式、哥特式建筑艺术的发展脉络。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  随后漫步于特里尔老城的街巷，欣赏中世纪的半木结构房屋、复古商铺与露天咖啡馆，感受老城的市井烟火气；前往与大教堂相邻的圣母教堂，参观这座与主教堂齐名的宗教建筑，感受两座教堂的建筑风格差异与宗教底蕴。傍晚时分，前往摩泽尔河畔，漫步于河畔步道，欣赏夕阳下的摩泽尔河风光，远眺大教堂的剪影，氛围感拉满，结束深度游览，全方位感受特里尔主教堂的魅力与老城的风情。
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
                  <h4 className="font-semibold text-gray-900 mb-2">1. 大教堂广场正面</h4>
                  <p className="text-sm text-gray-700">这是拍摄大教堂全貌的最佳机位，以大教堂的正面主体为核心，红色砂岩墙体、罗马式塔楼与哥特式尖拱清晰可见，融合两种建筑风格的布局极具视觉冲击力，搭配广场周边的中世纪建筑与过往行人，可完整展现大教堂的庄严与老城的烟火气。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 大教堂塔楼观景台</h4>
                  <p className="text-sm text-gray-700">这是拍摄特里尔老城全景与摩泽尔河风光的绝佳机位，登上塔楼观景台，可俯瞰整个老城的街巷布局、周边的历史建筑，远眺摩泽尔河的蜿蜒流淌，大教堂的全貌与周边风光尽收眼底，画面兼具人文之韵与自然之美。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 教堂内部中殿</h4>
                  <p className="text-sm text-gray-700">这是拍摄罗马式与哥特式建筑融合之美与光影之美的绝佳机位，中殿两侧的罗马式拱券排列整齐，穹顶恢弘壮观，哥特式彩绘玻璃点缀其间，光线透过彩绘玻璃洒入，在地面与墙体上形成斑驳的光影，营造出静谧神圣的氛围。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 教堂珍宝馆内</h4>
                  <p className="text-sm text-gray-700">这是拍摄宗教文物细节与艺术价值的绝佳机位，馆内收藏的圣物、金银器、中世纪手稿等文物细节精美，承载着丰富的历史信息与宗教内涵，可捕捉文物的细节、纹理与光泽，感受宗教艺术的魅力。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 圣母教堂广场远眺</h4>
                  <p className="text-sm text-gray-700">这是拍摄特里尔主教堂与相邻建筑呼应之美的绝佳机位，从圣母教堂广场远眺主教堂，可捕捉主教堂的塔楼与主体建筑，搭配圣母教堂的哥特式轮廓，展现两座宗教建筑的和谐共生，凸显特里尔的宗教文化底蕴。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 摩泽尔河畔远眺</h4>
                  <p className="text-sm text-gray-700">这是拍摄大教堂与自然风光融合的绝佳机位，漫步于摩泽尔河畔，远眺大教堂的红色墙体与塔楼，搭配蜿蜒的摩泽尔河、河畔的绿植与远处的村落，画面优美和谐，兼具庄严与柔美。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 大教堂建筑色调以红色砂岩的暖色调为主，搭配哥特式彩绘玻璃的绚丽色彩，建议穿搭浅色系、复古风格或大地色系衣物，形成和谐的色调</li>
                <li>• 拍摄教堂内部、珍宝馆时，禁止使用闪光灯，避免损坏文物、影响其他游客与宗教活动</li>
                <li>• 禁止攀爬建筑、触摸雕塑与文物，拍摄时避免影响他人通行，尊重当地的宗教习俗与游览规定</li>
                <li>• 傍晚时分的光线最适合拍摄，可呈现出温暖的氛围感，凸显大教堂的历史厚重感与柔美</li>
                <li>• 拍摄全景照时，可使用广角视角，完整展现大教堂、老城与摩泽尔河的绝美画面</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">特里尔老城</h4>
                <p className="text-sm text-gray-700 mb-2">距离大教堂约3分钟步行路程，是德国保存完整的中世纪老城之一，也是世界文化遗产的一部分，街巷纵横交错，两侧是古朴的半木结构房屋、复古商铺与露天咖啡馆，充满中世纪风情。</p>
                <div className="text-xs text-gray-500">🚶 步行3分钟 | 🏘️ 中世纪老城</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">特里尔圣母教堂</h4>
                <p className="text-sm text-gray-700 mb-2">距离大教堂约1分钟步行路程，与主教堂相邻，是一座纯哥特式建筑，始建于13世纪，内部装饰精美，彩绘玻璃、宗教雕塑极具艺术价值，与主教堂的罗马式风格形成鲜明对比。</p>
                <div className="text-xs text-gray-500">🚶 步行1分钟 | ⛪ 哥特式建筑</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">特里尔主教堂博物馆（Museum am Dom）</h4>
                <p className="text-sm text-gray-700 mb-2">距离大教堂约2分钟步行路程，位于大教堂广场旁边，馆内收藏了大量与大教堂相关的历史文物、建筑图纸、宗教艺术品，还有罗马式与哥特式建筑的模型。</p>
                <div className="text-xs text-gray-500">🚶 步行2分钟 | 🏛️ 宗教历史</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">罗马桥（Trier Roman Bridge）</h4>
                <p className="text-sm text-gray-700 mb-2">距离大教堂约10分钟步行路程，始建于公元170年，是德国最古老的罗马式桥梁，横跨摩泽尔河，桥面保存完好，可漫步于桥上，欣赏摩泽尔河风光。</p>
                <div className="text-xs text-gray-500">🚶 步行10分钟 | 🌉 古罗马桥梁</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">黑门（Porta Nigra）</h4>
                <p className="text-sm text-gray-700 mb-2">距离大教堂约8分钟步行路程，是特里尔最著名的罗马遗迹之一，始建于公元2世纪，是罗马帝国时期的城门，墙体呈黑色，规模宏大，保存完整。</p>
                <div className="text-xs text-gray-500">🚶 步行8分钟 | 🏛️ 罗马城门</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">特里尔罗马浴场（Trier Roman Baths）</h4>
                <p className="text-sm text-gray-700 mb-2">距离大教堂约15分钟步行路程，是古罗马帝国时期最大的浴场之一，始建于公元4世纪，如今虽为遗址，但依然能看到浴场的主体结构、温泉池、更衣室等遗迹。</p>
                <div className="text-xs text-gray-500">🚶 步行15分钟 | 🛁 古罗马浴场</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">大教堂周边区域</h4>
                  <p className="text-sm text-blue-800">首选区域，距离特里尔主教堂、圣母教堂、老城核心景点步行可达，周边有特色餐厅、咖啡馆、啤酒屋与纪念品商店，既能便捷游览核心景点，又能沉浸式感受中世纪老城的氛围。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">摩泽尔河畔</h4>
                  <p className="text-sm text-green-800">距离大教堂约10-15分钟步行路程，可欣赏摩泽尔河风光，部分酒店自带观景露台，傍晚可欣赏夕阳下的摩泽尔河与大教堂剪影，适合喜欢浪漫氛围的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">火车站附近</h4>
                  <p className="text-sm text-yellow-800">距离特里尔火车站步行10分钟可达，周边有餐厅、便利店，适合需要乘坐火车、巴士前往周边城市的游客，交通便利是主要优势。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端景观酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">以景观酒店与历史酒店为主，多位于大教堂周边或摩泽尔河畔，融合罗马式、中世纪建筑元素与现代设施，自带观景露台、餐厅与休闲区，可欣赏大教堂全景或摩泽尔河风光。</p>
                  <div className="text-xs text-gray-500">🏰 历史建筑 | 🏞️ 摩泽尔河景观</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于大教堂周边或老城街巷，步行可达核心景点，房间干净整洁，设施齐全，部分酒店提供早餐与免费WiFi，部分酒店还提供大教堂、博物馆联票优惠。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭出游</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">多为家庭经营，风格温馨，部分民宿由中世纪半木结构房屋改造而成，充满特色，还能感受当地居民的生活氛围，价格约25-38欧元/晚，适合预算有限的游客。</p>
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
                    <p className="mb-2"><strong>旺季（5-10月）：</strong>春季气候宜人，夏季摩泽尔河风光优美，秋季色彩斑斓，游客较多，建议提前1-2个月预订</p>
                    <p className="mb-2"><strong>淡季（11月至次年4月）：</strong>可提前1-2周预订，价格相对实惠</p>
                    <p><strong>特色套餐：</strong>部分高端酒店推出住宿+游船游览、住宿+博物馆参观的优惠套餐</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>德国住宿通常不提供洗漱用品，需自带牙刷、牙膏、拖鞋等</p>
                    <p className="mb-2"><strong>特殊注意：</strong>摩泽尔河畔部分酒店地势较低，雨天可能会有潮湿情况，预订时可提前咨询</p>
                    <p><strong>注意事项：</strong>老城夜间非常安静，需保持安静；大部分酒店为无烟酒店</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-amber-50 to-purple-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                特里尔主教堂，这座矗立在摩泽尔河畔的千年圣境，历经近1700年风雨洗礼，依然坚守着自身的庄严与厚重。在这里，你可以触摸罗马帝国时期的砖块沧桑，感受罗马式与哥特式建筑的匠心融合；可以探访珍宝馆，探寻宗教圣物与千年文物的奥秘；可以登上塔楼，俯瞰老城与摩泽尔河的绝美风光；可以漫步于老城街巷，体验当地的市井烟火与饮食风情。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                无论是独自旅行、情侣出游还是家庭度假，特里尔主教堂都能给你带来难忘的旅行体验，让你在历史与自然的交融中，邂逅一段跨越千年的宗教与建筑之约，爱上这座兼具庄严与柔美、古老与鲜活的欧洲千年古城。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在历史与自然的交融中，邂逅一段跨越千年的宗教与建筑之约。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}