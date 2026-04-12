import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃希特纳赫修道院・Echternach Abbey・卢森堡・埃希特纳赫 | 最佳欧洲景点',
  description: '探索埃希特纳赫修道院，卢森堡的千年宗教文化瑰宝，欧洲中世纪宗教文化与抄经艺术的重要发源地，圣威利布罗德修道院。',
}

export default function EchternachAbbeyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '埃希特纳赫修道院', href: '/attractions/echternach-abbey' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">埃希特纳赫修道院・Echternach Abbey・卢森堡・埃希特纳赫</h1>
          <p className="text-lg text-gray-600 mb-6">
            埃希特纳赫修道院始建于公元698年，由卢森堡守护圣人圣威利布罗德创立，是卢森堡最古老的本笃会修道院。它融合罗马式与哥特式建筑风格，曾是欧洲重要的抄经中心，留存有珍贵的中世纪手稿与宗教文物，每年举办独特的圣灵降临节舞蹈游行，见证了千年宗教传播与文化交融，是卢森堡宗教文化与历史遗产的核心象征。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              埃希特纳赫修道院始建于公元698年，由卢森堡守护圣人圣威利布罗德创立，是卢森堡最古老的本笃会修道院。它融合罗马式与哥特式建筑风格，曾是欧洲重要的抄经中心，留存有珍贵的中世纪手稿与宗教文物，每年举办独特的圣灵降临节舞蹈游行，见证了千年宗教传播与文化交融，是卢森堡宗教文化与历史遗产的核心象征。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="埃希特纳赫修道院" />
                <InfoRow label="英文名称" value="Echternach Abbey" />
                <InfoRow label="国家" value="卢森堡（Luxembourg）" />
                <InfoRow label="城市" value="埃希特纳赫（Echternach）" />
                <InfoRow label="所属区域" value="卢森堡东部埃希特纳赫区" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="卢森堡最古老的本笃会修道院" />
                <InfoRow label="核心特色" value="罗马式与哥特式建筑融合" />
                <InfoRow label="文化价值" value="欧洲中世纪抄经中心" />
                <InfoRow label="宗教地位" value="圣威利布罗德修道院" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="修道院主体全年开放；4-10月8:00-18:00，11-3月9:00-16:00" />
              <InfoRow label="门票价格" value="修道院主体免费；博物馆成人3欧元，老人1.5欧元，21岁以下免费" />
              <InfoRow label="地址" value="11, parvis de la basilique, L-6486 Echternach, Luxembourg" />
              <InfoRow label="交通方式" value="从卢森堡市乘高速火车约30分钟；乘城际巴士约40分钟" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                埃希特纳赫修道院的历史，是卢森堡宗教文化传承的缩影，其建造与发展跨越近1300年，历经中世纪的鼎盛、战乱的损毁、近代的修复与现代的保护，始终是埃希特纳赫城市历史的核心印记，也是欧洲中世纪宗教与文化发展的重要见证，承载着本笃会的修行传统与抄经艺术的辉煌成就。
              </p>
              <p>
                公元698年，来自北umbria的传教士、卢森堡守护圣人圣威利布罗德，在奥伦的伊尔米娜公主的资助下，于埃希特纳赫建立了这座本笃会修道院，任命自己为第一任院长。彼时，埃希特纳赫已是罗马时期的重要定居点，曾有一座1世纪的罗马别墅，6世纪时被特里尔教区改建为小型修道院，圣威利布罗德在此基础上扩建，使其成为当时西欧重要的传教中心之一。圣威利布罗德凭借其出色的传教能力，被称为"弗里斯兰人的使徒"，修道院也因此获得了广泛的支持与影响力。
              </p>
              <p>
                公元700年，在赫斯塔的丕平的资助下，圣威利布罗德在修道院内建成了第一座教堂，此后，修道院得到了卡洛林王朝的持续庇护。公元714年，卡洛林王朝的创始人查理·马特将其子矮子丕平在埃希特纳赫修道院洗礼，进一步提升了修道院的地位。公元739年，圣威利布罗德在修道院去世，被安葬在教堂的小礼拜堂内，这里很快成为朝圣胜地，尤其是在他被封圣后，吸引了大量信徒前来朝拜。
              </p>
              <p>
                公元751年，矮子丕平宣布埃希特纳赫修道院为"皇家修道院"，赋予其豁免权，此后修道院逐渐成为"帝国修道院"，拥有独立的司法权与税收权，成为卢森堡最具权力的机构之一。在第三任院长比奥拉德的带领下，修道院迎来鼎盛时期，比奥拉德深受查理曼大帝的赏识，后被提拔为桑斯大主教，查理曼大帝在其去世后曾直接管辖修道院一年。
              </p>
              <p>
                中世纪时期，埃希特纳赫修道院成为欧洲最重要的抄经中心之一，其抄经室影响力深远。由于圣威利布罗德的北umbria与爱尔兰背景，修道院内的修士们融合了岛屿风格与罗马半安色尔字体，抄写了大量珍贵的手稿，包括《奥格斯堡福音书》《马斯特里赫特福音书》《特里尔福音书》等，这些手稿不仅是宗教经典的载体，更是中世纪书法与绘画艺术的杰作，为研究欧洲中世纪文化提供了重要的实物资料。
              </p>
              <p>
                中世纪后期，随着封建割据加剧与宗教改革的兴起，埃希特纳赫修道院的影响力逐渐下降，部分建筑因战乱与岁月侵蚀遭到损坏。16世纪宗教改革期间，修道院被新教势力占领，大量手稿与文物遭到损毁或流失，修士们被迫撤离，修道院一度陷入沉寂。17世纪，天主教势力重新掌控埃希特纳赫，修道院得以重建与修复，新增了哥特式建筑元素，恢复了宗教活动，但规模已不及鼎盛时期。
              </p>
              <p>
                18世纪末，法国大革命爆发，卢森堡被法国占领，埃希特纳赫修道院被世俗化，部分建筑被改为公共设施，修士们被驱逐，修道院的部分石材被拆去修建其他建筑，进一步遭到损毁。19世纪至20世纪初，卢森堡政府开始重视对历史遗迹的保护与修缮，埃希特纳赫修道院作为核心文化遗产，迎来了第一次大规模修复，重点加固了受损的墙体、穹顶与回廊，清理了遗址内的杂物，还原了修道院的主体轮廓，同时建立了修道院博物馆，收藏与展示留存的手稿、文物。
              </p>
              <p>
                二战期间，埃希特纳赫修道院遭到一定程度的轰炸，部分建筑与文物受损，战后，卢森堡政府投入大量资金进行修复，耗时多年，不仅修复了受损的建筑部分，还对修道院博物馆进行了扩建，收集了更多与修道院历史相关的文物与手稿复制品。如今，埃希特纳赫修道院不仅是一座宗教场所，更是一座文化博物馆，每年吸引着大量游客与信徒前来，感受千年宗教文化的魅力，见证卢森堡的历史变迁。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（1.5-2小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从修道院入口出发，首先参观修道院广场，这里设有修道院简介牌与历史时间线，可初步了解修道院的建造历程与历史变迁，广场上矗立着圣威利布罗德的雕像，可驻足合影。随后进入修道院主体——圣威利布罗德大教堂，教堂内部融合罗马式与哥特式建筑风格，穹顶高耸，彩绘玻璃窗色彩斑斓，可欣赏祭坛、圣威利布罗德的陵墓与中世纪壁画，感受宗教建筑的庄严与神圣。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  接着前往修道院回廊，回廊采用罗马式拱券结构，石柱上雕刻着精美的花纹，墙面留存着中世纪的涂鸦与铭文，是修士们当年修行、冥想与交流的场所，可漫步于回廊，感受静谧的宗教氛围。之后参观修道院博物馆，欣赏馆内收藏的中世纪手稿复制品、宗教雕塑、陶器与钱币，了解修道院的抄经历史与宗教文化，重点观看《奥格斯堡福音书》复制品，感受中世纪抄经艺术的精湛。最后前往修道院庭院，欣赏庭院内的绿植与古朴建筑，结束精华游览，全程涵盖修道院的核心看点，节奏紧凑。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速体验修道院精华
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（3-4小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加周边文化体验、美食体验与历史探索，深入感受埃希特纳赫的宗教文化与市井风情。参观完博物馆后，重点游览修道院的细节区域，包括抄经室遗址、修士宿舍遗址与古老的厨房，可租借导览器，了解每一处细节的历史背景，感受修士们当年的生活与修行场景。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  中午前往修道院附近的特色餐厅，品尝卢森堡传统美食，如卢森堡土豆饼、烟熏猪肉配酸菜、奶酪火锅，搭配当地特色的雷司令白葡萄酒，体验当地的饮食文化，部分餐厅还提供与修道院历史相关的特色餐点。下午前往紧邻修道院的埃希特纳赫抄经工作室，体验简易的抄经活动，感受中世纪抄经艺术的魅力，可将自己抄写的作品作为纪念带走。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  随后漫步于埃希特纳赫老城街巷，欣赏古朴的半木结构房屋、复古商铺与露天咖啡馆，感受老城的市井烟火气；前往Sauer河畔，漫步于河畔步道，欣赏河水潺潺、绿植繁茂的自然景观，远眺修道院的轮廓，感受自然与人文的交融。傍晚时分，返回修道院，欣赏夕阳下的修道院剪影，感受千年宗教遗迹的沧桑与柔美，结束深度游览，全方位感受埃希特纳赫修道院的魅力与卢森堡的文化底蕴。
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
                  <h4 className="font-semibold text-gray-900 mb-2">1. 修道院广场正面</h4>
                  <p className="text-sm text-gray-700">这是拍摄修道院全貌的最佳机位，以修道院的主入口与圣威利布罗德雕像为核心，罗马式与哥特式融合的建筑轮廓、高耸的穹顶与精美的雕刻清晰可见，展现出宗教建筑的庄严与恢弘，搭配广场上的绿植与古朴石板路，可完整呈现修道院的历史厚重感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 修道院回廊内侧</h4>
                  <p className="text-sm text-gray-700">这是拍摄建筑细节与氛围感的绝佳机位，回廊的罗马式拱券、雕刻精美的石柱、斑驳的墙面，都承载着千年的岁月痕迹，可捕捉回廊的纵深效果与细节纹理，仿佛穿越回中世纪的修行时光。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 圣威利布罗德大教堂内部穹顶</h4>
                  <p className="text-sm text-gray-700">这是拍摄教堂内部宏伟感的绝佳机位，抬头仰望，高耸的穹顶搭配彩绘玻璃窗，光线透过玻璃窗洒入，形成斑驳的光影，展现出宗教建筑的神圣与庄严。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 修道院博物馆手稿展示区</h4>
                  <p className="text-sm text-gray-700">这是拍摄人文细节的绝佳机位，馆内的中世纪手稿复制品、古老的书籍与宗教文物，承载着修道院的抄经历史与文化底蕴，可近距离拍摄手稿的字迹、绘画细节，展现中世纪抄经艺术的精湛。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. Sauer河畔远眺</h4>
                  <p className="text-sm text-gray-700">这是拍摄修道院与自然景观呼应之美的绝佳机位，漫步于Sauer河畔步道，远眺修道院的轮廓，搭配蜿蜒的河水、岸边的绿植与远处的老城建筑，展现埃希特纳赫的人文与自然交融之美。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 修道院庭院角落</h4>
                  <p className="text-sm text-gray-700">这是拍摄静谧氛围感的绝佳机位，庭院内的绿植、古朴的石桌石凳与修道院的墙体相互映衬，营造出静谧、清幽的氛围，仿佛能感受到当年修士们修行的宁静。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 修道院建筑色调以浅灰色石材的冷色调为主，建议穿搭素色、简约风格或复古风格衣物，形成和谐的色调</li>
                <li>• 拍摄时禁止使用闪光灯（尤其是博物馆内），禁止攀爬墙体、触摸文物，避免损坏遗迹，拍摄时避免影响他人祈祷与游览，尊重当地的宗教习俗</li>
                <li>• 上午与傍晚的光线最适合拍摄，可呈现出不同的氛围感，上午凸显建筑细节，傍晚凸显静谧与浪漫</li>
                <li>• 拍摄全景照时，可使用广角视角，完整展现修道院的宏伟轮廓与周边风光</li>
                <li>• 拍摄细节照时，可近距离聚焦雕刻、手稿等细节，展现中世纪艺术的匠心</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">埃希特纳赫老城</h4>
                <p className="text-sm text-gray-700 mb-2">距离修道院约3分钟步行路程，是卢森堡保存完整的中世纪老城之一，街巷纵横交错，两侧是古朴的半木结构房屋、复古商铺、露天咖啡馆与传统餐厅，充满中世纪风情。</p>
                <div className="text-xs text-gray-500">🚶 步行3分钟 | 🏘️ 中世纪老城</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Sauer河畔步道</h4>
                <p className="text-sm text-gray-700 mb-2">距离修道院约5分钟步行路程，蜿蜒的Sauer河穿城而过，河畔步道绿植繁茂，景色优美，可漫步于步道，欣赏河水潺潺、两岸的田园风光，远眺修道院与老城的轮廓。</p>
                <div className="text-xs text-gray-500">🚶 步行5分钟 | 🌊 河畔风光</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">圣威利布罗德雕像广场</h4>
                <p className="text-sm text-gray-700 mb-2">距离修道院约1分钟步行路程，广场上矗立着卢森堡守护圣人圣威利布罗德的雕像，雕像高大庄严，周边环绕着绿植与座椅，是纪念圣威利布罗德、感受宗教文化的重要场所。</p>
                <div className="text-xs text-gray-500">🚶 步行1分钟 | 🗿 圣人雕像</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">埃希特纳赫罗马别墅遗址</h4>
                <p className="text-sm text-gray-700 mb-2">距离修道院约10分钟步行路程，是1世纪罗马时期的别墅遗址，如今虽为废墟，但依然能看到别墅的地基、墙体遗迹，可感受埃希特纳赫的罗马时期历史。</p>
                <div className="text-xs text-gray-500">🚶 步行10分钟 | 🏛️ 罗马遗迹</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">埃希特纳赫民俗博物馆</h4>
                <p className="text-sm text-gray-700 mb-2">距离修道院约8分钟步行路程，馆内收藏了大量卢森堡传统民俗文物，包括农具、服饰、家具、手工艺品等，展现了埃希特纳赫当地的民俗文化与生活方式。</p>
                <div className="text-xs text-gray-500">🚶 步行8分钟 | 🏛️ 民俗文化</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">穆勒塔尔自然公园</h4>
                <p className="text-sm text-gray-700 mb-2">距离修道院约15分钟车程，是卢森堡著名的自然景观公园，有着"卢森堡小瑞士"的美誉，公园内有峡谷、森林、溪流等自然景观，还有徒步步道与攀岩场地。</p>
                <div className="text-xs text-gray-500">🚗 车程15分钟 | 🏞️ 自然景观</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">修道院周边区域</h4>
                  <p className="text-sm text-blue-800">首选区域，距离埃希特纳赫修道院、老城、Sauer河畔步行可达，周边有特色餐厅、咖啡馆、纪念品商店，既能便捷游览核心景点，又能沉浸式感受中世纪宗教文化氛围。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Sauer河畔</h4>
                  <p className="text-sm text-green-800">距离修道院约5分钟步行路程，可欣赏Sauer河风光，部分酒店自带观景露台，傍晚可欣赏夕阳下的河畔与修道院剪影，适合喜欢浪漫氛围的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">火车站附近</h4>
                  <p className="text-sm text-yellow-800">距离埃希特纳赫火车站步行10分钟可达，周边有餐厅、便利店，适合需要乘坐火车、巴士前往卢森堡市或德国特里尔的游客，交通便利是主要优势。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端历史酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">以历史酒店与景观酒店为主，多位于修道院周边或Sauer河畔，融合中世纪建筑元素与现代设施，自带观景露台、餐厅与休闲区，可欣赏修道院全景或Sauer河风光。</p>
                  <div className="text-xs text-gray-500">🏰 历史建筑 | 🏞️ Sauer河景观</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于修道院周边或老城街巷，步行可达核心景点，房间干净整洁，设施齐全，部分酒店提供早餐与免费WiFi，部分酒店还提供修道院与周边景点联票优惠。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭出游</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">多为家庭经营，风格温馨，部分民宿融入中世纪与宗教元素，充满特色，还能感受当地居民的生活氛围，价格约25-35欧元/晚，适合预算有限的游客。</p>
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
                    <p className="mb-2"><strong>旺季（5-10月）：</strong>春季气候宜人，夏季风光优美，秋季色彩斑斓，且圣灵降临节舞蹈游行在5-6月举办，游客较多，建议提前1-2个月预订</p>
                    <p className="mb-2"><strong>淡季（11月至次年4月）：</strong>可提前1-2周预订，价格相对实惠</p>
                    <p><strong>特色套餐：</strong>部分高端酒店推出住宿+修道院导览、住宿+穆勒塔尔自然公园徒步的优惠套餐</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>卢森堡住宿通常不提供洗漱用品，需自带牙刷、牙膏、拖鞋等</p>
                    <p className="mb-2"><strong>特殊注意：</strong>修道院周边部分酒店地势较高，步行前往景点需注意安全，雨天路面较滑，建议穿防滑鞋</p>
                    <p><strong>注意事项：</strong>老城与修道院周边夜间非常安静，需保持安静；大部分酒店为无烟酒店</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                埃希特纳赫修道院，这座矗立在埃希特纳赫老城的千年宗教遗存，历经近1300年风雨洗礼，依然坚守着自身的庄严与厚重。在这里，你可以触摸中世纪的石材墙体，感受罗马式与哥特式建筑的匠心巧思；可以漫步于静谧的回廊，想象当年修士们修行与抄经的场景；可以探访周边的历史遗迹，解读埃希特纳赫的千年变迁；可以漫步于老城街巷，体验当地的市井烟火与饮食风情。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                无论是独自旅行、情侣出游还是家庭度假，埃希特纳赫修道院都能给你带来难忘的旅行体验，让你在宗教与自然的交融中，邂逅一段跨越千年的文化之约，爱上这座兼具古老底蕴与鲜活气息的卢森堡千年古城。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在宗教与自然的交融中，邂逅一段跨越千年的文化之约。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}