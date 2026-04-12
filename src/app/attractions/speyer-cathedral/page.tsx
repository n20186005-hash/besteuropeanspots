import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '施佩耶尔大教堂・Speyer Cathedral・德国・施佩耶尔 | 最佳欧洲景点',
  description: '探索施佩耶尔大教堂，罗马式建筑的千年丰碑，联合国教科文组织认定的世界文化遗产，现存世界上最大的罗马式教堂建筑，兼具宗教庄严、皇权象征与建筑艺术价值。',
}

export default function SpeyerCathedralPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '施佩耶尔大教堂', href: '/attractions/speyer-cathedral' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">施佩耶尔大教堂・Speyer Cathedral・德国・施佩耶尔</h1>
          <p className="text-lg text-gray-600 mb-6">
            施佩耶尔大教堂始建于1030年，由神圣罗马帝国皇帝康拉德二世下令修建，1981年被列入世界文化遗产。作为现存最大的罗马式教堂，它以红色砂岩为建材，融合对称庄重的建筑布局与精美的宗教文物，内部安葬着8位神圣罗马帝国皇帝与皇后，是皇权与宗教融合的象征，承载着德国千年的历史与建筑艺术底蕴。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              施佩耶尔大教堂始建于1030年，由神圣罗马帝国皇帝康拉德二世下令修建，1981年被列入世界文化遗产。作为现存最大的罗马式教堂，它以红色砂岩为建材，融合对称庄重的建筑布局与精美的宗教文物，内部安葬着8位神圣罗马帝国皇帝与皇后，是皇权与宗教融合的象征，承载着德国千年的历史与建筑艺术底蕴。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="施佩耶尔大教堂" />
                <InfoRow label="英文名称" value="Speyer Cathedral" />
                <InfoRow label="国家" value="德国（Germany）" />
                <InfoRow label="城市" value="施佩耶尔（Speyer）" />
                <InfoRow label="所属区域" value="德国莱茵兰-普法尔茨州（Rhineland-Palatinate）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="世界文化遗产、千年宗教圣地" />
                <InfoRow label="核心特色" value="罗马式建筑、皇权象征" />
                <InfoRow label="建筑价值" value="现存最大罗马式教堂、红色砂岩建材" />
                <InfoRow label="文化价值" value="8位神圣罗马帝国皇帝陵墓" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="教堂主体全年开放；4-9月9:00-19:00，10-3月9:00-17:00" />
              <InfoRow label="门票价格" value="教堂主体免费；帝王陵墓3.5欧元；观景台6欧元；联票8欧元" />
              <InfoRow label="地址" value="Domplatz 1, 67346 Speyer, Germany" />
              <InfoRow label="交通方式" value="从法兰克福乘ICE约1小时；从慕尼黑乘高速火车约2.5小时" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                施佩耶尔大教堂的历史，是神圣罗马帝国兴衰的缩影，也是罗马式建筑艺术发展的重要见证，其建造与发展始终与皇权、宗教紧密相连，历经近千年风雨洗礼，依然保留着原始的建筑风貌与深厚的历史底蕴，1981年，因其在罗马式建筑中的突出地位与完整的历史留存，被联合国教科文组织列入世界文化遗产名录，成为全人类共同的文化财富。
              </p>
              <p>
                公元1030年，神圣罗马帝国皇帝康拉德二世为彰显皇权威严、与前朝进行符号性竞争，下令在施佩耶尔修建一座超越班贝格大教堂的宏伟教堂，目标是打造当时基督教世界最大的教堂，以此确立施佩耶尔作为王朝中心的地位，构建属于法兰克尼亚王朝的“圣城”。这座教堂的修建，不仅是宗教信仰的体现，更是皇权宣传的重要载体，大教堂长达134米的走廊、对称庄重的布局，与城市主干道马克西米连大街遥相呼应，从视觉上强化了皇权的至高无上，整座城市仿佛成为大教堂的延伸。
              </p>
              <p>
                大教堂的建造耗时近30年，康拉德二世生前未能亲眼见证教堂完工，其遗体后来被安葬于教堂内部，成为首位安葬于此的神圣罗马帝国皇帝。此后，霍亨斯陶芬王朝、哈布斯堡王朝的多位君主也相继选择安葬在这里，最终形成了安葬8位皇帝与皇后的帝王陵墓，使施佩耶尔大教堂成为欧洲罕见的“帝王教堂”，进一步凸显了其皇权象征意义。
              </p>
              <p>
                11世纪至13世纪，随着神圣罗马帝国的繁荣与宗教势力的壮大，施佩耶尔大教堂迎来了第一次扩建与修缮，在保留罗马式核心风格的基础上，增添了部分哥特式元素，教堂的穹顶、拱券等结构得到加固与完善，内部装饰也更加精美，收藏了大量中世纪的宗教雕塑、彩绘玻璃与历史文物。这一时期，大教堂成为莱茵河流域重要的宗教圣地，吸引了大量信徒前来朝拜，也成为当时罗马式建筑艺术的典范，影响了欧洲多地教堂的建造风格。
              </p>
              <p>
                14世纪至16世纪，宗教改革席卷欧洲，施佩耶尔大教堂也受到一定影响，部分宗教文物遭到损毁，教堂的宗教地位有所下降，但建筑主体得以完整留存。这一时期，施佩耶尔凭借莱茵河的水运优势，商业贸易持续繁荣，大教堂作为城市的标志性建筑，依然是城市文化与精神的核心，周边逐渐形成了以大教堂为中心的商业与文化街区，进一步丰富了城市的风貌。
              </p>
              <p>
                17世纪至18世纪，巴洛克风格席卷欧洲，施佩耶尔大教堂也进行了部分巴洛克式改造，在教堂内部增添了华丽的装饰与雕塑，与原有罗马式建筑的庄重形成独特的对比，既保留了千年历史的厚重感，又融入了当时流行的建筑美学。这一时期，大教堂的修缮工作严格遵循“修旧如旧”的原则，确保建筑主体的原始风貌不受破坏。
              </p>
              <p>
                19世纪至20世纪初，德国政府加强了对施佩耶尔大教堂的保护与修缮，重点修复了因岁月侵蚀与战乱受损的建筑部分，重新整理了帝王陵墓的文物，完善了教堂的基础设施。这一时期，大教堂逐渐成为旅游景点，吸引着世界各地的游客前来探访，其罗马式建筑艺术与帝王陵墓的历史价值，进一步被世界认可。
              </p>
              <p>
                二战期间，施佩耶尔大教堂遭到一定程度的轰炸，部分建筑结构与内部文物受损，战后，德国政府投入大量资金进行修复，耗时多年，最终恢复了大教堂的原始风貌，不仅修复了受损的穹顶与拱券，还重新修复了彩绘玻璃与雕塑，使这座千年教堂再次焕发生机。如今，施佩耶尔大教堂不仅是一座宗教场所，更是一座承载着德国千年历史与建筑艺术的博物馆，每年吸引着数百万游客前来感受其独特的魅力。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（1.5-2小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从大教堂广场入口出发，首先欣赏大教堂的外观，红色砂岩墙体搭配绿色穹顶与红色塔楼，对称庄重的罗马式布局极具视觉冲击力，可驻足观赏建筑的细节与整体风貌，感受其千年的庄严与厚重。随后进入教堂主体，参观中殿与穹顶，中殿两侧的拱券排列整齐，穹顶高达33米，内部光线透过彩绘玻璃洒入，光影交错，营造出静谧神圣的宗教氛围。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  接着前往教堂后方的帝王陵墓，参观8位神圣罗马帝国皇帝与皇后的石棺，石棺上雕刻精美，承载着丰富的历史信息，可了解每位帝王的生平与历史功绩，感受皇权与宗教的深度融合。之后前往观景台，登上观景台可俯瞰整个施佩耶尔老城的风貌，远眺莱茵河的蜿蜒流淌，将大教堂、马克西米连大街与老城街巷尽收眼底，感受这座千年古城的独特韵味。最后在大教堂广场周边逛逛，欣赏广场周边的中世纪建筑与特色商铺，结束精华游览，全程涵盖大教堂的核心看点，节奏紧凑。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速体验大教堂精华
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（3-4小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加博物馆参观、美食体验与老城漫游，深入感受施佩耶尔的历史文化与当地风情。参观完帝王陵墓后，重点观赏教堂内部的宗教文物，包括中世纪的彩绘玻璃、宗教雕塑与壁画，这些文物细节精美，展现了当时高超的艺术水平，可慢慢品味其宗教内涵与艺术价值，也可租借导览器，了解每一件文物的历史背景。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  中午前往大教堂附近的特色餐厅，品尝莱茵兰-普法尔茨州的传统美食，如莱茵河鲜鱼、烤猪肉、土豆泥与当地特色的莱茵白葡萄酒，搭配黑麦面包，体验当地的饮食文化。下午参观施佩耶尔大教堂博物馆，馆内收藏了大量与大教堂相关的历史文物、建筑图纸、宗教艺术品，可深入了解大教堂的建造历程、修缮历史与罗马式建筑艺术的发展脉络。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  随后漫步于施佩耶尔老城的街巷，欣赏中世纪的半木结构房屋、复古商铺与露天咖啡馆，感受老城的市井烟火气；前往马克西米连大街，这条城市主干道与大教堂遥相呼应，两旁房屋鳞次栉比，可感受康拉德二世打造“圣城”的初心与城市布局的精妙。傍晚时分，前往莱茵河畔，漫步于河畔步道，欣赏夕阳下的莱茵河风光，远眺大教堂的剪影，氛围感拉满，结束深度游览，全方位感受施佩耶尔大教堂的魅力与老城的风情。
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
                  <p className="text-sm text-gray-700">这是拍摄大教堂全貌的最佳机位，以大教堂的正面主体为核心，红色砂岩墙体、绿色穹顶与红色塔楼清晰可见，对称庄重的罗马式布局极具视觉冲击力，搭配广场周边的中世纪建筑与过往行人，可完整展现大教堂的庄严与老城的烟火气。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 大教堂观景台</h4>
                  <p className="text-sm text-gray-700">这是拍摄施佩耶尔老城全景与莱茵河风光的绝佳机位，登上观景台，可俯瞰整个老城的街巷布局、马克西米连大街的延伸脉络，远眺莱茵河的蜿蜒流淌，大教堂的全貌与周边风光尽收眼底，画面兼具人文之韵与自然之美。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 教堂内部中殿</h4>
                  <p className="text-sm text-gray-700">这是拍摄罗马式建筑结构与光影之美的绝佳机位，中殿两侧的拱券排列整齐，高达33米的穹顶恢弘壮观，光线透过彩绘玻璃洒入，在地面与墙体上形成斑驳的光影，营造出静谧神圣的氛围。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 帝王陵墓内部</h4>
                  <p className="text-sm text-gray-700">这是拍摄历史细节与雕塑艺术的绝佳机位，8位帝王与皇后的石棺排列整齐，石棺上的雕刻精美细致，承载着丰富的历史信息与艺术价值，可捕捉雕塑的细节、石棺的纹理，感受皇权与历史的厚重。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 马克西米连大街远眺</h4>
                  <p className="text-sm text-gray-700">这是拍摄大教堂与城市布局的绝佳机位，马克西米连大街作为城市的中轴线，与大教堂遥相呼应，从大街中段远眺大教堂，可捕捉大教堂的穹顶与塔楼，搭配街道两旁的中世纪建筑，展现“圣城”的布局精妙与建筑之美。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 莱茵河畔远眺</h4>
                  <p className="text-sm text-gray-700">这是拍摄大教堂与自然风光融合的绝佳机位，漫步于莱茵河畔，远眺大教堂的红色墙体与绿色穹顶，搭配蜿蜒的莱茵河、河畔的绿植与远处的村落，画面优美和谐，兼具庄严与柔美。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 大教堂建筑色调以红色砂岩的暖色调为主，搭配绿色穹顶，建议穿搭浅色系、复古风格或大地色系衣物，形成和谐的色调</li>
                <li>• 拍摄教堂内部、帝王陵墓时，禁止使用闪光灯，避免损坏文物、影响其他游客与宗教活动</li>
                <li>• 禁止攀爬建筑、触摸雕塑与石棺，拍摄时避免影响他人通行，尊重当地的宗教习俗与游览规定</li>
                <li>• 傍晚时分的光线最适合拍摄，可呈现出温暖的氛围感，凸显大教堂的历史厚重感与柔美</li>
                <li>• 拍摄全景照时，可使用广角视角，完整展现大教堂、老城与莱茵河的绝美画面</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">施佩耶尔老城</h4>
                <p className="text-sm text-gray-700 mb-2">距离大教堂约5分钟步行路程，是德国保存完整的中世纪老城之一，街巷纵横交错，两侧是古朴的半木结构房屋、复古商铺与露天咖啡馆，充满中世纪风情。老城内还有施佩耶尔城门、老市政厅等历史建筑。</p>
                <div className="text-xs text-gray-500">🚶 步行5分钟 | 🏘️ 中世纪老城</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">施佩耶尔大教堂博物馆</h4>
                <p className="text-sm text-gray-700 mb-2">距离大教堂约3分钟步行路程，位于大教堂广场旁边，馆内收藏了大量与大教堂相关的历史文物、建筑图纸、宗教艺术品、帝王陵墓的相关展品，还有罗马式建筑的模型，可深入了解大教堂的建造历程。</p>
                <div className="text-xs text-gray-500">🚶 步行3分钟 | 🏛️ 宗教历史</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">莱茵河游船码头</h4>
                <p className="text-sm text-gray-700 mb-2">距离大教堂约10分钟步行路程，可乘坐游船游览莱茵河，沿途欣赏莱茵河的自然风光、河畔的古堡与村落，全程约1小时，途经多个景点，可从水上视角远眺施佩耶尔大教堂。</p>
                <div className="text-xs text-gray-500">🚶 步行10分钟 | 🚢 莱茵河风光</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">施佩耶尔犹太教堂与博物馆</h4>
                <p className="text-sm text-gray-700 mb-2">距离大教堂约8分钟步行路程，是一座融合了犹太文化与建筑艺术的场所，教堂内部装饰精美，博物馆内收藏了大量犹太文物、历史文献，可了解施佩耶尔的犹太历史与文化。</p>
                <div className="text-xs text-gray-500">🚶 步行8分钟 | ✡️ 犹太文化</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">施佩耶尔城堡遗址</h4>
                <p className="text-sm text-gray-700 mb-2">距离大教堂约15分钟步行路程，始建于中世纪，曾是神圣罗马帝国的防御要塞，如今虽为遗址，但依然能看到城墙、塔楼的遗迹，可感受中世纪的军事防御体系与历史沧桑。</p>
                <div className="text-xs text-gray-500">🚶 步行15分钟 | 🏰 城堡遗址</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">莱茵兰-普法尔茨州立博物馆</h4>
                <p className="text-sm text-gray-700 mb-2">距离大教堂约12分钟步行路程，位于施佩耶尔老城边缘，展示了莱茵兰-普法尔茨州从史前时期到现代的发展历程，收藏了大量历史文物、手工业制品、传统服饰与生活器具。</p>
                <div className="text-xs text-gray-500">🚶 步行12分钟 | 🏛️ 地方历史</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">大教堂周边区域</h4>
                  <p className="text-sm text-blue-800">首选区域，距离施佩耶尔大教堂、老城核心景点步行可达，周边有特色餐厅、咖啡馆、啤酒屋与纪念品商店，既能便捷游览核心景点，又能沉浸式感受中世纪老城的氛围。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">莱茵河畔住宿</h4>
                  <p className="text-sm text-green-800">距离大教堂约10-15分钟步行路程，可欣赏莱茵河风光，部分酒店自带观景露台，傍晚可欣赏夕阳下的莱茵河与大教堂剪影，适合喜欢浪漫氛围的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">火车站附近</h4>
                  <p className="text-sm text-yellow-800">距离施佩耶尔火车站步行10分钟可达，周边有餐厅、便利店，适合需要乘坐火车、巴士前往周边城市的游客，交通便利是主要优势。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端景观酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">以景观酒店与历史酒店为主，多位于大教堂周边或莱茵河畔，融合中世纪建筑元素与现代设施，自带观景露台、餐厅与休闲区，可欣赏大教堂全景或莱茵河风光，部分酒店由古老建筑改造而成。</p>
                  <div className="text-xs text-gray-500">🏰 历史建筑 | 🏞️ 莱茵河景观</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于大教堂周边或老城街巷，步行可达核心景点，房间干净整洁，设施齐全，部分酒店提供早餐与免费WiFi，部分酒店还提供大教堂、博物馆联票优惠。</p>
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
                    <p className="mb-2"><strong>旺季（5-10月）：</strong>春季气候宜人，夏季莱茵河风光优美，秋季色彩斑斓，游客较多，建议提前1-2个月预订</p>
                    <p className="mb-2"><strong>淡季（11月至次年4月）：</strong>可提前1-2周预订，价格相对实惠</p>
                    <p><strong>特色套餐：</strong>部分高端酒店推出住宿+游船游览、住宿+博物馆参观的优惠套餐</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>德国住宿通常不提供洗漱用品，需自带牙刷、牙膏、拖鞋等</p>
                    <p className="mb-2"><strong>特殊注意：</strong>莱茵河畔部分酒店地势较低，雨天可能会有潮湿情况，预订时可提前咨询</p>
                    <p><strong>注意事项：</strong>老城夜间非常安静，需保持安静；大部分酒店为无烟酒店</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                施佩耶尔大教堂，这座矗立在莱茵河畔的千年罗马式丰碑，历经近千年风雨洗礼，依然坚守着自身的庄严与厚重。在这里，你可以触摸红色砂岩的沧桑，感受罗马式建筑的匠心；可以探访帝王陵墓，探寻神圣罗马帝国的兴衰往事；可以登上观景台，俯瞰老城与莱茵河的绝美风光；可以漫步于老城街巷，体验当地的市井烟火与饮食风情。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                无论是独自旅行、情侣出游还是家庭度假，施佩耶尔大教堂都能给你带来难忘的旅行体验，让你在历史与自然的交融中，邂逅一段跨越千年的罗马式之约，爱上这座兼具庄严与柔美、古老与鲜活的欧洲宗教与建筑瑰宝。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在历史与自然的交融中，邂逅一段跨越千年的罗马式之约。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}