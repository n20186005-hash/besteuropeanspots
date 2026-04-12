import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '特里尔竞技场・Trier Amphitheater・德国・特里尔 | 最佳欧洲景点',
  description: '探索特里尔竞技场，古罗马帝国的千年竞技遗存，联合国教科文组织认定的世界文化遗产，德国现存最完整、规模最大的古罗马竞技场之一。',
}

export default function TrierAmphitheaterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '特里尔竞技场', href: '/attractions/trier-amphitheater' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">特里尔竞技场・Trier Amphitheater・德国・特里尔</h1>
          <p className="text-lg text-gray-600 mb-6">
            特里尔竞技场始建于公元160-170年，是古罗马帝国西部首都特里尔的标志性遗存，1986年列入世界文化遗产。它以当地红色砂岩为建材，呈椭圆形布局，可容纳约15000名观众，曾用于角斗士比赛、动物搏斗等公共娱乐活动，见证了古罗马的繁荣与衰落，是古罗马建筑工艺的杰出代表，也是解读欧洲古代文明的重要窗口。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              特里尔竞技场始建于公元160-170年，是古罗马帝国西部首都特里尔的标志性遗存，1986年列入世界文化遗产。它以当地红色砂岩为建材，呈椭圆形布局，可容纳约15000名观众，曾用于角斗士比赛、动物搏斗等公共娱乐活动，见证了古罗马的繁荣与衰落，是古罗马建筑工艺的杰出代表，也是解读欧洲古代文明的重要窗口。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="特里尔竞技场" />
                <InfoRow label="英文名称" value="Trier Amphitheater" />
                <InfoRow label="国家" value="德国（Germany）" />
                <InfoRow label="城市" value="特里尔（Trier）" />
                <InfoRow label="所属区域" value="德国莱茵兰-普法尔茨州（Rhineland-Palatinate）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="世界文化遗产、古罗马竞技场" />
                <InfoRow label="核心特色" value="红色砂岩建材、椭圆形布局" />
                <InfoRow label="建筑价值" value="可容纳15000名观众、拱券结构" />
                <InfoRow label="文化价值" value="角斗士比赛、动物搏斗场所" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="全年开放；4-10月9:00-18:00，11-3月10:00-16:00" />
              <InfoRow label="门票价格" value="成人10欧元；优惠票7欧元；家庭票22欧元；罗马遗迹联票18欧元" />
              <InfoRow label="地址" value="Amphitheaterstraße 1, 54290 Trier, Germany" />
              <InfoRow label="交通方式" value="从法兰克福乘ICE约1.5小时；从科隆乘高速火车约1小时" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                特里尔竞技场的历史，是古罗马帝国西部兴衰的缩影，其建造与发展跨越近2000年，历经古罗马帝国的鼎盛、衰落，中世纪的改造与近代的保护，始终是特里尔城市历史的核心印记，1986年，因其在古罗马建筑与历史文化上的突出地位，与特里尔其他罗马遗迹一同被联合国教科文组织列入世界文化遗产名录，成为全人类共同的文化财富。
              </p>
              <p>
                公元160年至170年，正值古罗马帝国鼎盛时期，特里尔作为罗马帝国西部首都，是欧洲重要的政治、经济与文化中心，人口众多，商业繁荣。为满足市民的公共娱乐需求，罗马皇帝马可·奥勒留下令修建这座竞技场，耗时约10年建成，建成后成为特里尔最大的公共娱乐场所，也是古罗马帝国西部最宏伟的竞技场之一。竞技场以当地盛产的红色砂岩为主要建材，采用古罗马经典的拱券结构，整体呈椭圆形，周长约300米，高约30米，可容纳15000名观众，规模仅次于罗马斗兽场，展现了古罗马高超的建筑工艺与工程实力。
              </p>
              <p>
                建成后的特里尔竞技场，主要用于举办角斗士比赛、动物搏斗、战车比赛以及戏剧表演等公共娱乐活动，是古罗马人休闲娱乐、彰显帝国实力的重要场所。角斗士比赛作为最受欢迎的项目，吸引着来自各地的观众，场面激烈壮观；动物搏斗则多为狮子、熊等猛兽之间的争斗，或是猛兽与奴隶、战俘的对抗，成为当时古罗马社会的真实写照。此外，竞技场还会在重大节日举办庆典活动，成为凝聚市民情感、巩固帝国统治的重要载体。
              </p>
              <p>
                公元4世纪，罗马帝国逐渐衰落，特里尔的政治地位下降，竞技场的维护也逐渐松懈，部分建筑结构因岁月侵蚀与战乱遭到损坏，公共娱乐活动逐渐减少。公元5世纪，罗马帝国灭亡后，特里尔先后被法兰克人、西哥特人统治，竞技场失去了原本的功能，沦为采石场，大量石材被拆去修建教堂、城堡等建筑，导致竞技场的看台、墙体遭到严重损毁，仅保留了主体结构。
              </p>
              <p>
                中世纪时期，竞技场被改造为防御工事与住宅，部分区域被村民占用，搭建了简易房屋，形成了小型村落。这一时期，竞技场的建筑结构进一步被破坏，拱券坍塌、墙体开裂，原本宏伟的竞技场所剩无几，但主体轮廓依然清晰可见，成为中世纪特里尔城市防御体系的一部分。
              </p>
              <p>
                19世纪至20世纪初，德国政府开始重视对特里尔罗马遗迹的保护与修缮，特里尔竞技场作为核心遗迹之一，迎来了第一次大规模修复。修复工作重点加固了受损的墙体、拱券，清理了遗址内的杂物，还原了竞技场的主体轮廓，同时对周边环境进行了整治，使其逐渐成为旅游景点，吸引着世界各地的游客前来探访。这一时期，考古学家在竞技场遗址内发现了大量古罗马时期的文物，包括陶器、钱币、武器等，为研究古罗马历史与文化提供了重要的实物资料。
              </p>
              <p>
                二战期间，特里尔竞技场遭到一定程度的轰炸，部分墙体与拱券受损，战后，德国政府投入大量资金进行修复，耗时多年，不仅修复了受损的建筑部分，还搭建了防护设施，防止遗址进一步被侵蚀。如今，特里尔竞技场不仅是一座历史遗迹，更是一座露天博物馆，每年吸引着数百万游客前来，感受古罗马帝国的辉煌与沧桑，解读欧洲古代文明的魅力。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（1.5-2小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从景区入口出发，首先参观竞技场入口广场，这里设有景区简介牌与历史 timeline，可初步了解竞技场的建造历程与历史变迁。随后进入竞技场主体区域，沿着环形步道漫步，欣赏竞技场的整体布局与建筑结构，观察红色砂岩墙体上的雕刻痕迹与拱券设计，感受古罗马建筑的匠心。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  接着前往底层通道，这里是当年角斗士、猛兽的入场通道，通道内保留着古罗马时期的砖块与排水系统，可近距离触摸千年历史的痕迹，想象当年竞技活动的盛大场面。之后登上西侧看台，这里是观赏竞技场全景的最佳位置，可俯瞰整个竞技场的内部结构，远眺特里尔老城与周边的罗马遗迹，感受古罗马帝国的宏伟气魄。最后参观景区内的小型展厅，欣赏考古发现的古罗马文物，了解竞技场的历史功能与社会意义，结束精华游览，全程涵盖竞技场的核心看点，节奏紧凑。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速体验竞技场精华
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（3-4小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加周边遗迹参观、美食体验与历史探索，深入感受特里尔的古罗马文化底蕴。参观完展厅后，重点游览竞技场的细节区域，包括看台的座位分区、当年的裁判席、贵宾席，以及墙体上的雕刻图案，这些细节展现了古罗马的社会等级与文化特色，可租借导览器，了解每一处细节的历史背景。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  中午前往竞技场附近的特色餐厅，品尝莱茵兰-普法尔茨州的传统美食，如烤猪肘、香肠拼盘、土豆泥与当地特色的摩泽尔白葡萄酒，搭配黑麦面包，体验当地的饮食文化。下午前往紧邻竞技场的特里尔罗马浴场遗址，参观这座古罗马帝国时期最大的浴场之一，感受古罗马人的生活方式与建筑工艺，与竞技场形成联动游览，全方位了解古罗马文明。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  随后漫步于竞技场周边的古罗马道路遗迹，欣赏当年古罗马人修建的石板路，感受特里尔作为古罗马西部首都的历史氛围；前往特里尔罗马博物馆，馆内收藏了大量与竞技场、罗马浴场相关的文物，包括雕塑、陶器、钱币等，可深入了解古罗马的建筑工艺、社会生活与文化艺术。傍晚时分，返回竞技场，欣赏夕阳下的竞技场剪影，感受千年遗迹的沧桑与柔美，结束深度游览，全方位感受特里尔竞技场的魅力与古罗马文明的底蕴。
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
                  <h4 className="font-semibold text-gray-900 mb-2">1. 竞技场入口广场正面</h4>
                  <p className="text-sm text-gray-700">这是拍摄竞技场全貌的最佳机位，以竞技场的主入口为核心，红色砂岩墙体、巨大的拱券与椭圆形轮廓清晰可见，展现出古罗马建筑的恢弘气势，搭配广场上的古罗马风格雕塑与绿植，可完整呈现竞技场的庄严与厚重。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 西侧看台制高点</h4>
                  <p className="text-sm text-gray-700">这是拍摄竞技场内部全景的绝佳机位，登上西侧看台最高处，可俯瞰整个竞技场的内部结构，环形看台、底层通道、中央竞技区尽收眼底，能清晰看到座位分区与拱券布局，展现古罗马建筑的对称之美与工程实力。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 底层通道入口</h4>
                  <p className="text-sm text-gray-700">这是拍摄历史细节与氛围感的绝佳机位，底层通道的拱门、斑驳的砂岩墙体、古老的砖块，都承载着千年的沧桑，可捕捉通道的纵深效果与细节纹理，仿佛穿越回古罗马时期。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 竞技场东侧墙体</h4>
                  <p className="text-sm text-gray-700">这是拍摄建筑细节的绝佳机位，东侧墙体保存相对完整，上面保留着古罗马时期的雕刻痕迹与拱券结构，红色砂岩在光线的照射下呈现出温暖的色调，细节丰富。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 竞技场周边石板路远眺</h4>
                  <p className="text-sm text-gray-700">这是拍摄竞技场与周边遗迹呼应之美的绝佳机位，漫步于竞技场周边的古罗马石板路上，远眺竞技场的轮廓，搭配远处的罗马浴场遗址与老城建筑，展现特里尔古罗马遗迹的整体风貌。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 竞技场夜间灯光机位</h4>
                  <p className="text-sm text-gray-700">这是拍摄氛围感夜景的绝佳机位，傍晚时分，竞技场会亮起暖黄色的灯光，照亮红色砂岩墙体，与夜色形成鲜明对比，营造出庄严而浪漫的氛围。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 竞技场建筑色调以红色砂岩的暖色调为主，建议穿搭浅色系、复古风格或大地色系衣物，形成和谐的色调</li>
                <li>• 拍摄时禁止攀爬墙体、触摸文物，避免损坏遗迹，拍摄时避免影响他人通行，尊重当地的游览规定</li>
                <li>• 傍晚时分的光线最适合拍摄，可呈现出温暖的氛围感，凸显竞技场的历史厚重感</li>
                <li>• 拍摄全景照时，可使用广角视角，完整展现竞技场的宏伟轮廓与周边风光</li>
                <li>• 拍摄细节照时，可近距离聚焦砂岩纹理与雕刻痕迹，展现古罗马建筑的匠心</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">特里尔罗马浴场（Trier Roman Baths）</h4>
                <p className="text-sm text-gray-700 mb-2">距离竞技场约2分钟步行路程，是古罗马帝国时期最大的浴场之一，始建于公元4世纪，如今虽为遗址，但依然能看到浴场的主体结构、温泉池、更衣室、桑拿房等遗迹，可感受古罗马人的生活方式与建筑工艺。</p>
                <div className="text-xs text-gray-500">🚶 步行2分钟 | 🛁 古罗马浴场</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">特里尔罗马博物馆（Römer Museum Trier）</h4>
                <p className="text-sm text-gray-700 mb-2">距离竞技场约5分钟步行路程，位于罗马浴场旁边，馆内收藏了大量古罗马时期的文物，包括雕塑、陶器、钱币、武器等，还有竞技场、罗马浴场的建筑模型，可深入了解古罗马的历史文化。</p>
                <div className="text-xs text-gray-500">🚶 步行5分钟 | 🏛️ 罗马文物</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">黑门（Porta Nigra）</h4>
                <p className="text-sm text-gray-700 mb-2">距离竞技场约10分钟步行路程，是特里尔最著名的罗马遗迹之一，始建于公元2世纪，是罗马帝国时期的城门，墙体呈黑色，规模宏大，保存完整，可登上城门，俯瞰老城风光。</p>
                <div className="text-xs text-gray-500">🚶 步行10分钟 | 🏛️ 罗马城门</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">特里尔老城</h4>
                <p className="text-sm text-gray-700 mb-2">距离竞技场约10分钟步行路程，是德国保存完整的中世纪老城之一，也是世界文化遗产的一部分，街巷纵横交错，两侧是古朴的半木结构房屋、复古商铺与露天咖啡馆，充满中世纪风情。</p>
                <div className="text-xs text-gray-500">🚶 步行10分钟 | 🏘️ 中世纪老城</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">特里尔主教堂</h4>
                <p className="text-sm text-gray-700 mb-2">距离竞技场约15分钟步行路程，是德国最古老的大教堂，兼具罗马式、哥特式建筑风格，内部珍藏有珍贵宗教文物与圣物，见证了罗马帝国的兴衰与基督教在欧洲的传播。</p>
                <div className="text-xs text-gray-500">🚶 步行15分钟 | ⛪ 古老大教堂</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">摩泽尔河畔</h4>
                <p className="text-sm text-gray-700 mb-2">距离竞技场约20分钟步行路程，蜿蜒的摩泽尔河穿城而过，河畔风光优美，可漫步于河畔步道，欣赏河水潺潺、绿植繁茂的自然景观，远眺老城与罗马遗迹的轮廓。</p>
                <div className="text-xs text-gray-500">🚶 步行20分钟 | 🌊 摩泽尔河风光</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">竞技场周边区域</h4>
                  <p className="text-sm text-blue-800">首选区域，距离特里尔竞技场、罗马浴场、罗马博物馆步行可达，周边有特色餐厅、咖啡馆、纪念品商店，既能便捷游览核心罗马遗迹，又能沉浸式感受古罗马文化氛围。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">摩泽尔河畔</h4>
                  <p className="text-sm text-green-800">距离竞技场约20分钟步行路程，可欣赏摩泽尔河风光，部分酒店自带观景露台，傍晚可欣赏夕阳下的河畔与罗马遗迹剪影，适合喜欢浪漫氛围的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">火车站附近</h4>
                  <p className="text-sm text-yellow-800">距离特里尔火车站步行10分钟可达，周边有餐厅、便利店，适合需要乘坐火车、巴士前往周边城市的游客，交通便利是主要优势。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端历史酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">以历史酒店与景观酒店为主，多位于竞技场周边或摩泽尔河畔，融合古罗马建筑元素与现代设施，自带观景露台、餐厅与休闲区，可欣赏竞技场全景或摩泽尔河风光。</p>
                  <div className="text-xs text-gray-500">🏰 历史建筑 | 🏞️ 摩泽尔河景观</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于竞技场周边或老城街巷，步行可达核心景点，房间干净整洁，设施齐全，部分酒店提供早餐与免费WiFi，部分酒店还提供罗马遗迹联票优惠。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭出游</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">多为家庭经营，风格温馨，部分民宿融入古罗马元素，充满特色，还能感受当地居民的生活氛围，价格约28-40欧元/晚，适合预算有限的游客。</p>
                  <div className="text-xs text-gray-500">💰 预算友好 | 🏡 家庭氛围</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">适合独自旅行或预算有限的游客，价格实惠，通常位于交通便利的位置，可结识来自世界各地的游客，价格约16-26欧元/晚，设施简洁实用，社交氛围浓厚。</p>
                  <div className="text-xs text-gray-500">🎒 背包客首选 | 🌍 国际交流</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季（5-10月）：</strong>春季气候宜人，夏季风光优美，秋季色彩斑斓，游客较多，建议提前1-2个月预订</p>
                    <p className="mb-2"><strong>淡季（11月至次年4月）：</strong>可提前1-2周预订，价格相对实惠</p>
                    <p><strong>特色套餐：</strong>部分高端酒店推出住宿+罗马遗迹联票、住宿+游船游览的优惠套餐</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>德国住宿通常不提供洗漱用品，需自带牙刷、牙膏、拖鞋等</p>
                    <p className="mb-2"><strong>特殊注意：</strong>竞技场周边部分酒店地势较高，步行前往景点需注意安全，雨天路面较滑，建议穿防滑鞋</p>
                    <p><strong>注意事项：</strong>老城与竞技场周边夜间非常安静，需保持安静；大部分酒店为无烟酒店</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-red-50 to-amber-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                特里尔竞技场，这座矗立在特里尔老城的千年遗存，历经近2000年风雨洗礼，依然坚守着自身的恢弘与厚重。在这里，你可以触摸古罗马时期的红色砂岩，感受拱券建筑的匠心巧思；可以漫步于环形看台，想象当年竞技活动的盛大场面；可以探访周边罗马遗迹，解读古罗马帝国的辉煌历史；可以漫步于老城街巷，体验当地的市井烟火与饮食风情。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                无论是独自旅行、情侣出游还是家庭度假，特里尔竞技场都能给你带来难忘的旅行体验，让你在历史与自然的交融中，邂逅一段跨越千年的古罗马之约，爱上这座兼具古老底蕴与鲜活气息的欧洲千年古城。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在历史与自然的交融中，邂逅一段跨越千年的古罗马之约。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}