import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '诺奇古城・Norcia・意大利・诺奇 | 最佳欧洲景点',
  description: '探索诺奇古城，藏在意大利翁布里亚山区的人文与自然瑰宝，圣本笃会的发源地，保留着古罗马街巷格局、中世纪石质建筑与田园风光，是感受意大利小众人文与自然之美的绝佳目的地。',
}

export default function NorciaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '诺奇', href: '/destinations/italy' },
            { label: '诺奇古城', href: '/attractions/norcia-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">诺奇古城・Norcia・意大利・诺奇</h1>
          <p className="text-lg text-gray-600 mb-6">
            诺奇古城始建于古罗马时期，是圣本笃会的发源地，坐落于意大利翁布里亚山区。古城保留着古罗马街巷格局、中世纪石质建筑与宗教遗迹，融合了古罗马军事文化、中世纪宗教文明与田园风情，盛产松露等特色美食。这里远离喧嚣，静谧古朴，既有历史的厚重感，又有自然的清新感，是感受意大利中部小众人文与自然之美的核心地标。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              诺奇古城始建于古罗马时期，是圣本笃会的发源地，坐落于意大利翁布里亚山区。古城保留着古罗马街巷格局、中世纪石质建筑与宗教遗迹，融合了古罗马军事文化、中世纪宗教文明与田园风情，盛产松露等特色美食。这里远离喧嚣，静谧古朴，既有历史的厚重感，又有自然的清新感，是感受意大利中部小众人文与自然之美的核心地标。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="诺奇古城" />
                <InfoRow label="英文名称" value="Norcia" />
                <InfoRow label="国家" value="意大利（Italy）" />
                <InfoRow label="城市" value="诺奇（Norcia）" />
                <InfoRow label="所属区域" value="意大利翁布里亚大区佩鲁贾省" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="圣本笃会发源地、古罗马军事要塞" />
                <InfoRow label="核心特色" value="古罗马遗迹、中世纪建筑、田园风光" />
                <InfoRow label="特色产品" value="松露、香肠、奶酪、葡萄酒" />
                <InfoRow label="文化价值" value="宗教文化、军事历史、田园风情" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="古城整体全天开放，内部景点夏季9:00-18:00，冬季9:00-17:00；每周一闭馆" />
              <InfoRow label="门票价格" value="古城免费开放，考古博物馆成人票8欧元，优惠票4欧元；12岁以下儿童免费" />
              <InfoRow label="地址" value="Centro Storico di Norcia, 06046 Norcia PG, Italy" />
              <InfoRow label="交通方式" value="从罗马乘火车到佩鲁贾，再转巴士约1.5小时；从佩鲁贾乘巴士直达约1.5小时" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                诺奇古城的历史可追溯至公元前4世纪，最初是古罗马的军事要塞，因地处亚平宁山脉咽喉地带，是连接意大利中部与南部的交通要道，具有重要的战略地位。古罗马时期，诺奇被称为"Nursia"，是古罗马重要的军事重镇，当时已形成规整的街巷格局，修建了城墙、城门、神庙、剧院等建筑，成为古罗马文明在中部山区的重要据点。
              </p>
              <p>
                公元5世纪，罗马帝国衰落，诺奇逐渐成为宗教文化的聚集地，这里是圣本笃会的发源地——圣本笃（基督教重要圣人，本笃会创始人）于公元480年出生于诺奇，青年时期在诺奇周边的山洞中修行，后来创立了本笃会，制定了严格的修会规则，对基督教的发展产生了深远影响。中世纪时期，诺奇成为翁布里亚地区重要的宗教中心，修建了大量的教堂、修道院，其中圣本笃教堂、圣彼得教堂等成为当时宗教建筑的典范，吸引了众多信徒前来朝拜。
              </p>
              <p>
                文艺复兴时期，诺奇虽未成为文艺复兴运动的核心区域，但也受到了人文主义思想的影响，对古城内的建筑进行了修缮与改造，将中世纪的哥特式建筑风格与文艺复兴时期的古典美学相结合，形成了独特的建筑风貌。这一时期，诺奇的手工业与农业逐渐发展，成为翁布里亚山区的商业重镇，盛产羊毛、葡萄酒与松露，贸易往来频繁，进一步推动了古城的繁荣。
              </p>
              <p>
                17世纪至19世纪，诺奇经历了多次战乱与地震的破坏，古城内的部分建筑受损严重，但当地居民始终坚持修复，保留了古城的核心格局与历史风貌。19世纪末，意大利统一后，政府开始对诺奇的历史遗迹进行系统性保护，修复了古罗马城墙、城门与中世纪教堂，同时保留了古城的街巷肌理与石质建筑特色。
              </p>
              <p>
                20世纪以来，诺奇逐渐成为意大利小众旅游目的地，因其静谧的田园风光、深厚的宗教文化与完整的历史遗迹，吸引着世界各地的游客前来探访。1997年，诺奇周边的圣本笃修道院遗址被联合国教科文组织列入世界文化遗产名录，进一步提升了诺奇的文化地位。如今，诺奇依然保留着古朴的生活气息，当地居民在古城内世代居住，传统的手工业与饮食文化得以传承，成为一座兼具历史、宗教与自然之美的小众古城。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（2-3小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从诺奇巴士站出发，步行5分钟抵达古城入口，首先参观古罗马城门（Porta San Pietro），这是诺奇古城现存最完整的古罗马城门，建于公元前2世纪，采用巨石砌筑，保留着古罗马时期的建筑工艺，城门上的浮雕虽有磨损，但依然能看出当年的恢弘气势。随后进入古城核心区域，漫步在古罗马时期遗留的石板街巷，感受规整的街巷格局，欣赏两侧的石质民居与中世纪商铺，体验古城的静谧氛围。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  之后前往圣本笃教堂，这座教堂始建于中世纪，是诺奇最具代表性的宗教建筑，融合了哥特式与文艺复兴式建筑风格，内部装饰精美，收藏了大量中世纪的壁画、雕塑与宗教文物，是了解圣本笃会文化的核心场所；参观结束后，前往诺奇考古博物馆，馆内收藏了古罗马时期的陶器、雕塑、钱币等文物，快速了解诺奇的古罗马历史与文明；最后前往古城中心的人民广场，这里是诺奇的生活中心，周边有当地的特色商铺与餐厅，可短暂休息，感受古城的市井烟火气，结束精华游览。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速体验古城精华
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（4-5小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加小众遗迹参观、田园徒步与美食品尝，深入感受诺奇的人文与自然魅力。参观完诺奇考古博物馆后，预约古城深度导览（导览费12欧元/人，全程1.5小时，有意大利语、英语两种语言可选），跟随导览深入了解古城的街巷历史、建筑工艺与宗教文化，重点参观古罗马剧院遗址、中世纪城墙遗址等小众遗迹，感受诺奇的历史变迁。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  导览结束后，前往圣本笃修道院遗址，距离古城约2公里，步行20分钟可达，这里是圣本笃修行的地方，保留着修道院的残垣断壁与圣本笃修行的山洞，静谧清幽，可感受宗教修行的庄严与宁静；随后前往古城周边的丘陵步道，徒步1小时左右，欣赏翁布里亚山区的田园风光，远处的亚平宁山脉与近处的农田、果园相映成趣，风景宜人。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  中午前往古城内的特色餐厅，品尝诺奇传统美食，如松露意面、诺奇香肠、烤羊排等，搭配当地产的葡萄酒，体验诺奇的饮食文化；下午前往诺奇民俗博物馆，距离古城中心约500米，步行7分钟可达，馆内展示了诺奇的传统手工业、农耕文化与民俗风情，可了解当地居民的生活方式；傍晚时分，返回人民广场，欣赏夕阳下的古城全景，夕阳洒在石质建筑上，呈现出温暖的金色，氛围感拉满，结束深度游览。
                </p>
                <div className="text-sm text-green-800 bg-green-100 p-3 rounded">
                  <strong>适合人群：</strong>喜欢细致游览的游客，想要深度体验老城文化
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-800 mb-2">游览小贴士</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• 古城内石板街巷坡度较大，需穿着舒适的步行鞋</li>
                <li>• 夏季（6-8月）气候炎热，建议携带遮阳帽、防晒霜与饮用水</li>
                <li>• 冬季（12月至次年2月）山区气温较低，建议携带保暖衣物</li>
                <li>• 参观宗教场所需穿着得体，避免短裤、短裙与露肩装</li>
                <li>• 古城内部分街巷狭窄，禁止大声喧哗，尊重当地居民的生活</li>
                <li>• 导览服务需提前在官网预约，避免排队等待</li>
              </ul>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 古罗马城门顶端</h4>
                  <p className="text-sm text-gray-700">拍摄古城全景的最佳机位，登上古罗马城门顶端，可将诺奇古城的完整街巷格局、石质建筑与周边的丘陵风光尽收眼底，古罗马城墙蜿蜒曲折，与远处的亚平宁山脉相映成趣，画面层次感十足。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 圣本笃教堂钟楼</h4>
                  <p className="text-sm text-gray-700">教堂钟楼是诺奇古城的制高点之一，登上钟楼，可俯瞰古城中心的人民广场与周边的街巷建筑，感受古城的静谧氛围，同时能拍摄到教堂的哥特式尖顶与石质外墙，凸显宗教建筑的庄重与精美。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 古城石板街巷深处</h4>
                  <p className="text-sm text-gray-700">古城的石板街巷狭窄幽深，两侧是古朴的石质民居，墙面爬满绿植，自带复古静谧的氛围，站在街巷深处，可拍摄街巷的延伸感，搭配当地居民的生活场景，增添画面的烟火气。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 人民广场中央</h4>
                  <p className="text-sm text-gray-700">人民广场是诺奇古城的核心，广场周边环绕着中世纪建筑与特色商铺，广场中央有喷泉与雕塑，是拍摄古城人文氛围的绝佳机位。可拍摄广场的全貌，捕捉当地居民的休闲场景，展现古城的市井生活。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 圣本笃修道院遗址观景台</h4>
                  <p className="text-sm text-gray-700">修道院遗址旁的观景台是拍摄田园风光与古城远景的绝佳机位，站在观景台上，可俯瞰诺奇古城与周边的丘陵农田，远处的亚平宁山脉层峦叠嶂，近处的农田绿意盎然，画面清新自然。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 古城外围丘陵步道</h4>
                  <p className="text-sm text-gray-700">丘陵步道沿途风景优美，可拍摄古城的远景与山区的田园风光，步道旁的野花、果园与远处的古城相映成趣，自带清新自然的氛围。建议选择晴天的上午或傍晚拍摄，光线柔和。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 古城以石质建筑的浅灰色、米白色为主，建议穿搭素色或低饱和色衣物，形成和谐的色调</li>
                <li>• 拍摄建筑全景时，可采用广角视角，凸显建筑的恢弘与街巷的规整</li>
                <li>• 拍摄田园风光时，可聚焦光影与色彩对比，展现自然的清新感</li>
                <li>• 尊重当地文化与居民生活，拍摄人物时需提前征得同意</li>
                <li>• 禁止攀爬古建筑，拍摄时避免损坏文物</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">圣本笃修道院遗址</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城约2公里，步行20分钟可达，是圣本笃修行的地方，保留着修道院的残垣断壁、圣本笃修行的山洞与中世纪的宗教遗迹，静谧清幽，充满宗教氛围。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行20分钟 | ⛪ 宗教遗迹</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">翁布里亚国家公园</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城约10公里，车程约20分钟，是意大利中部最大的国家公园之一，园内有茂密的森林、蜿蜒的溪流、广阔的草原与丰富的野生动物，可进行徒步、露营、野餐等活动。</p>
                <div className="text-xs text-gray-500">🚗 车程20分钟 | 🏞️ 自然景观</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">阿西西古城</h4>
                <p className="text-sm text-gray-700 mb-2">距离诺奇约40公里，车程约1小时，是一座以宗教文化闻名的中世纪古城，保留着完整的中世纪街巷与宗教建筑，是圣方济各会的发源地，1997年被联合国教科文组织列为世界文化遗产。</p>
                <div className="text-xs text-gray-500">🚗 车程1小时 | 🏰 中世纪古城</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">诺奇松露市场</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城中心约300米，步行4分钟可达，是当地最具烟火气的场所，市场内售卖新鲜的松露、香肠、奶酪、葡萄酒等当地特产，还有各类小吃摊位。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行4分钟 | 🏪 当地市场</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">佩鲁贾古城</h4>
                <p className="text-sm text-gray-700 mb-2">距离诺奇约60公里，车程约1.5小时，是翁布里亚大区的首府，保留着古罗马遗迹、中世纪建筑与文艺复兴时期的艺术品，是翁布里亚地区的文化与商业中心。</p>
                <div className="text-xs text-gray-500">🚗 车程1.5小时 | 🏛️ 历史文化</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">蒙特普齐亚诺古镇</h4>
                <p className="text-sm text-gray-700 mb-2">距离诺奇约80公里，车程约2小时，是一座坐落在丘陵上的中世纪古镇，以生产葡萄酒闻名，保留着完整的中世纪街巷与石质建筑，古镇的全景极具视觉冲击力。</p>
                <div className="text-xs text-gray-500">🚗 车程2小时 | 🍷 葡萄酒文化</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">古城核心区域</h4>
                  <p className="text-sm text-blue-800">首选区域，距离古罗马城门、圣本笃教堂等核心景点较近，步行即可抵达，周边环境静谧古朴，推窗即可欣赏古城的石质建筑与街巷风貌。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">古城外围丘陵地带</h4>
                  <p className="text-sm text-green-800">距离古城步行15分钟可达，周边是田园风光，环境清幽，可欣赏山区美景，适合喜欢自然、追求安静的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">诺奇巴士站附近</h4>
                  <p className="text-sm text-yellow-800">距离巴士站步行5分钟可达，周边有餐厅、便利店，生活便利，适合需要乘坐巴士前往周边景点的游客。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端田园主题酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于古城外围的丘陵地带，融合了复古与现代元素，自带花园、观景露台与餐厅，可欣赏山区与古城风光，提供松露品鉴等特色服务。</p>
                  <div className="text-xs text-gray-500">💎 田园体验 | 🏞️ 山区风光</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于古城附近或巴士站周边，步行可达核心景点，房间干净整洁，设施齐全，价格约70-120欧元/晚，性价比突出。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭出游</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">多为家庭经营，风格温馨，部分民宿带有厨房，可自己烹饪，价格实惠，还能感受当地居民的生活氛围，体验地道的意大利生活。</p>
                  <div className="text-xs text-gray-500">💰 预算友好 | 🏡 家庭氛围</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">适合独自旅行或预算有限的游客，价格实惠，通常位于交通便利的位置，可结识来自世界各地的旅行者，适合背包客和年轻游客。</p>
                  <div className="text-xs text-gray-500">🎒 背包客首选 | 🌍 国际交流</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季（6-9月）：</strong>夏季避暑旺季，田园风光最佳，建议提前1-2个月预订</p>
                    <p className="mb-2"><strong>淡季（12月至次年5月）：</strong>可提前1-2周预订，价格相对实惠</p>
                    <p><strong>特色套餐：</strong>部分高端酒店推出住宿+松露品鉴、徒步体验的优惠套餐</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>意大利住宿通常不提供洗漱用品，需自备牙刷、牙膏等</p>
                    <p className="mb-2"><strong>特殊注意：</strong>古城周边部分酒店位于丘陵地带，无电梯，预订时可提前咨询</p>
                    <p><strong>注意事项：</strong>古城及周边夜间安静，需保持安静；大部分酒店为无烟酒店</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                诺奇古城，这座藏在意大利翁布里亚山区的小众瑰宝，历经两千多年的岁月沉淀，既有古罗马军事要塞的恢弘遗迹，也有中世纪宗教文化的深厚底蕴，更有田园风光的清新自然。在这里，你可以漫步古罗马石板街巷，触摸历史的岁月纹理；可以走进中世纪教堂，感受宗教的庄严与宁静；可以徒步丘陵步道，欣赏翁布里亚山区的田园美景；可以品尝松露美食，体验当地的饮食文化。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                无论是独自旅行、情侣出游还是家庭度假，诺奇古城都能给你带来难忘的旅行体验，让你在静谧古朴的氛围中，邂逅一段跨越时空的人文与自然之约，爱上这座兼具历史厚重与自然清新的意大利小众古城。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在静谧古朴的氛围中，邂逅一段跨越时空的人文与自然之约。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}