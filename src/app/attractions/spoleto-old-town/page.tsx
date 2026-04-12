import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '斯波莱托古城・Spoleto・意大利・斯波莱托 | 最佳欧洲景点',
  description: '探索斯波莱托古城，翁布里亚山区的千年艺术与历史秘境，兼具古罗马遗迹、中世纪宗教文化与文艺复兴艺术，以伦巴第家族建筑、古罗马剧院遗址及菲利波·利比珍贵壁画闻名，是深度感受意大利中部人文与艺术之美的小众目的地。',
}

export default function SpoletoOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '斯波莱托古城', href: '/attractions/spoleto-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">斯波莱托古城・Spoleto・意大利・斯波莱托</h1>
          <p className="text-lg text-gray-600 mb-6">
            斯波莱托古城始建于公元前6世纪，坐落于意大利翁布里亚山区亚平宁山脉脚下，是翁布里亚地区重要的历史古城。古城保留着古罗马剧院、德鲁索拱门等遗迹，拥有多座中世纪教堂，以斯波莱托大教堂内菲利波·利比的《圣母加冕图》壁画为标志，融合古罗马、中世纪与文艺复兴文化，静谧古朴，是感受意大利中部人文与艺术魅力的核心地标。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              斯波莱托古城始建于公元前6世纪，坐落于意大利翁布里亚山区亚平宁山脉脚下，是翁布里亚地区重要的历史古城。古城保留着古罗马剧院、德鲁索拱门等遗迹，拥有多座中世纪教堂，以斯波莱托大教堂内菲利波·利比的《圣母加冕图》壁画为标志，融合古罗马、中世纪与文艺复兴文化，静谧古朴，是感受意大利中部人文与艺术魅力的核心地标。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="斯波莱托古城" />
                <InfoRow label="英文名称" value="Spoleto" />
                <InfoRow label="国家" value="意大利（Italy）" />
                <InfoRow label="城市" value="斯波莱托（Spoleto）" />
                <InfoRow label="所属区域" value="意大利翁布里亚大区佩鲁贾省" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="千年古城、伦巴第公国首府" />
                <InfoRow label="核心特色" value="古罗马遗迹、中世纪建筑、文艺复兴艺术" />
                <InfoRow label="艺术价值" value="菲利波·利比壁画、珍贵宗教艺术" />
                <InfoRow label="文化价值" value="古罗马、中世纪、文艺复兴文化融合" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="古城整体全天开放，内部景点夏季9:00-18:00，冬季9:00-17:00；每周一闭馆" />
              <InfoRow label="门票价格" value="古城免费开放，古罗马剧院成人票10欧元，优惠票5欧元；12岁以下儿童免费" />
              <InfoRow label="地址" value="Centro Storico di Spoleto, 06049 Spoleto PG, Italy" />
              <InfoRow label="交通方式" value="从罗马乘火车约2.5小时直达；从佩鲁贾乘巴士约1小时直达" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                斯波莱托古城的历史可追溯至公元前6世纪，最初是伊特鲁里亚人的定居点，因地处亚平宁山脉交通要道，是连接意大利中部与南部的重要枢纽，逐渐发展为区域重镇。公元前3世纪，罗马人征服此地，将其纳入罗马共和国版图，斯波莱托成为古罗马重要的军事与商业据点，当时已形成规整的街巷格局，修建了城墙、城门、神庙、剧院等建筑，其中德鲁索拱门（建于公元1世纪）与古罗马剧院至今保存完好，成为古罗马文明在翁布里亚地区的重要见证。
              </p>
              <p>
                公元5世纪，罗马帝国衰落，斯波莱托成为东哥特王国的重要城市，随后在公元6世纪被伦巴第人征服，成为伦巴第公国的首府之一。伦巴第家族在此修建了大量恢弘建筑，进一步完善了古城的格局，同时将日耳曼文化与当地的罗马文化、宗教文化相融合，形成了独特的文化风貌。这一时期，斯波莱托成为翁布里亚地区重要的宗教中心，修建了圣萨瓦尔托教堂、圣阿萨诺教堂等多座宗教建筑，圣萨瓦尔托教堂坐落于古墓地附近，保留着古朴的宗教氛围，其周边的圣蓬齐亚诺教堂则被典型的翁布里亚罗马式建筑环绕。
              </p>
              <p>
                中世纪时期，斯波莱托凭借其重要的战略地位与宗教影响力，成为翁布里亚地区的政治、文化与商业中心，古城内的建筑不断修缮与扩建，形成了中世纪罗马式、哥特式建筑交融的风貌。文艺复兴时期，斯波莱托虽未成为文艺复兴运动的核心区域，但也深受人文主义思想的影响，众多艺术家在此留下了珍贵的艺术作品，其中最具代表性的便是菲利波·利比——这位美第奇家族最宠爱的画家，晚年在斯波莱托创作，其完成于15世纪的壁画《圣母加冕图》至今照亮着斯波莱托大教堂，成为文艺复兴艺术在翁布里亚地区的重要瑰宝。
              </p>
              <p>
                17世纪至19世纪，斯波莱托经历了多次战乱与地震的破坏，古城内的部分建筑受损严重，但当地居民始终坚持修复，保留了古城的核心格局与历史风貌。19世纪末，意大利统一后，政府开始对斯波莱托的历史遗迹进行系统性保护，修复了古罗马剧院、德鲁索拱门与中世纪教堂，同时保留了古城的街巷肌理与石质建筑特色。
              </p>
              <p>
                20世纪以来，斯波莱托逐渐成为意大利小众旅游目的地，因其深厚的历史底蕴、珍贵的艺术遗产与静谧的田园氛围，吸引着世界各地的游客前来探访。如今，斯波莱托依然保留着古朴的生活气息，当地居民在古城内世代居住，传统的手工业与饮食文化得以传承，每年还会举办国际艺术节，让千年古城在艺术的滋养下焕发新的生机，成为一座兼具历史、宗教与艺术之美的小众古城。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（2-3小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从斯波莱托火车站出发，步行10分钟抵达古城入口，首先参观德鲁索拱门，这座建于公元1世纪的古罗马拱门，位于梅卡托广场南部，被圣阿萨诺教堂环绕，采用巨石砌筑，保留着古罗马时期的建筑工艺，拱门浮雕虽有磨损，但依然能看出当年的恢弘气势。随后进入古城核心区域，漫步在古罗马时期遗留的石板街巷，感受规整的街巷格局，欣赏两侧的石质民居与中世纪商铺，体验古城的静谧氛围。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  之后前往古罗马剧院，这座建于公元前1世纪的古罗马剧院，是斯波莱托最具代表性的古罗马遗迹，剧院依山而建，可容纳数千人，保留着完整的舞台与观众席，如今依然会举办露天演出，站在这里能直观感受古罗马时期的娱乐文化；参观结束后，前往斯波莱托大教堂，这座融合了罗马式与哥特式建筑风格的教堂，内部装饰精美，重点欣赏菲利波·利比的《圣母加冕图》壁画，感受文艺复兴艺术的魅力；最后前往梅卡托广场，这里是斯波莱托的生活中心，周边有当地的特色商铺与餐厅，可短暂休息，感受古城的市井烟火气，结束精华游览。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速体验古城精华
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（4-5小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加小众遗迹参观、艺术品鉴与美食品尝，深入感受斯波莱托的人文与艺术魅力。参观完斯波莱托大教堂后，预约古城深度导览（导览费15欧元/人，全程1.5小时，有意大利语、英语两种语言可选），跟随导览深入了解古城的街巷历史、建筑工艺与艺术文化，重点参观圣阿萨诺教堂（地下室墙壁布满壁画，极具历史价值）、圣蓬齐亚诺教堂与斯波莱托考古博物馆，考古博物馆内收藏了古罗马时期的陶器、雕塑、钱币等文物，可详细了解斯波莱托的古罗马历史与文明。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  导览结束后，前往圣萨瓦尔托教堂，距离古城中心约800米，步行10分钟可达，这座建于4世纪的教堂坐落于古墓地附近，氛围古朴清幽，可感受宗教修行的庄严与宁静；随后前往古城周边的丘陵步道，徒步1小时左右，欣赏亚平宁山脉的田园风光，远处的山脉与近处的农田、果园相映成趣，风景宜人，同时可俯瞰古城全景。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  中午前往古城内的特色餐厅，品尝斯波莱托传统美食，如翁布里亚风味意面、烤蔬菜、当地特色奶酪与葡萄酒，体验斯波莱托的饮食文化；下午前往斯波莱托民俗博物馆，距离古城中心约600米，步行8分钟可达，馆内展示了斯波莱托的传统手工业、农耕文化与民俗风情，可了解当地居民的生活方式；傍晚时分，返回梅卡托广场，欣赏夕阳下的古城全景，夕阳洒在石质建筑与教堂尖顶上，呈现出温暖的金色，氛围感拉满，结束深度游览。
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
                <li>• 参观教堂壁画时，禁止使用闪光灯，避免损坏文物</li>
              </ul>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 古罗马剧院顶端</h4>
                  <p className="text-sm text-gray-700">拍摄古城全景的最佳机位，登上古罗马剧院的最高处，可将斯波莱托古城的完整街巷格局、石质建筑与远处的亚平宁山脉尽收眼底，古罗马剧院的遗迹与中世纪教堂的尖顶相映成趣，画面层次感十足。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 斯波莱托大教堂钟楼</h4>
                  <p className="text-sm text-gray-700">教堂钟楼是斯波莱托古城的制高点之一，登上钟楼，可俯瞰古城中心的梅卡托广场与周边的街巷建筑，感受古城的静谧氛围，同时能拍摄到教堂的哥特式尖顶、石质外墙与内部的部分壁画（可透过窗户拍摄），凸显宗教建筑的庄重与艺术感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 德鲁索拱门旁街巷</h4>
                  <p className="text-sm text-gray-700">德鲁索拱门周边的石板街巷狭窄幽深，两侧是古朴的石质民居，墙面爬满绿植，拱门与街巷形成独特的视觉层次，自带复古静谧的氛围，站在街巷中，可拍摄拱门的全貌与街巷的延伸感，搭配当地居民的生活场景，增添画面的烟火气。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 梅卡托广场中央</h4>
                  <p className="text-sm text-gray-700">梅卡托广场是斯波莱托古城的核心，广场周边环绕着中世纪建筑与特色商铺，广场中央有喷泉与雕塑，是拍摄古城人文氛围的绝佳机位。可拍摄广场的全貌，捕捉当地居民的休闲场景，展现古城的市井生活，同时可将德鲁索拱门与广场建筑同框拍摄，凸显古城的历史底蕴。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 古城外围丘陵步道</h4>
                  <p className="text-sm text-gray-700">丘陵步道沿途风景优美，可拍摄古城的远景与亚平宁山脉的田园风光，步道旁的野花、果园与远处的古城相映成趣，自带清新自然的氛围，同时可捕捉到古城与山脉交融的绝美画面。建议选择日落时分拍摄，夕阳洒在山区与古城上，呈现出温暖的色调。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 圣阿萨诺教堂地下室</h4>
                  <p className="text-sm text-gray-700">圣阿萨诺教堂地下室的墙壁布满壁画，壁画色彩浓郁、细节精美，是拍摄艺术特写的绝佳机位，可近距离拍摄壁画的细节，展现中世纪宗教艺术的魅力。建议选择上午拍摄，利用室内自然光线，避免使用闪光灯，拍摄出壁画的细腻质感。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 古城以石质建筑的浅灰色、米白色为主，搭配教堂的深色尖顶，建议穿搭素色或低饱和色衣物，形成和谐的色调</li>
                <li>• 拍摄建筑全景时，可采用广角视角，凸显建筑的恢弘与街巷的规整</li>
                <li>• 拍摄壁画特写时，可采用微距视角，捕捉细节美感</li>
                <li>• 尊重当地文化与居民生活，拍摄人物时需提前征得同意</li>
                <li>• 禁止攀爬古建筑，拍摄时避免损坏文物</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">圣萨瓦尔托教堂</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城中心约800米，步行10分钟可达，建于4世纪，坐落于古墓地附近，保留着古朴的宗教氛围，教堂内部装饰简洁，周边环绕着翁布里亚典型的石质建筑，是了解斯波莱托中世纪宗教文化的重要场所。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行10分钟 | ⛪ 宗教遗迹</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">斯波莱托城堡</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城约1公里，步行15分钟可达，建于中世纪，是伦巴第家族统治时期的重要建筑，城堡依山而建，保留着完整的城墙与塔楼，登上城堡可俯瞰整个斯波莱托古城与亚平宁山脉风光。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行15分钟 | 🏰 中世纪建筑</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">翁布里亚乡村步道</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城约2公里，步行25分钟可达，是一条贯穿翁布里亚田园的徒步路线，沿途有茂密的森林、蜿蜒的溪流与广阔的农田，可感受翁布里亚山区的自然清新，徒步全程约1.5小时，难度适中。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行25分钟 | 🏞️ 自然风光</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">阿西西古城</h4>
                <p className="text-sm text-gray-700 mb-2">距离斯波莱托约45公里，车程约1小时，是一座以宗教文化闻名的中世纪古城，保留着完整的中世纪街巷与宗教建筑，是圣方济各会的发源地，1997年被联合国教科文组织列为世界文化遗产。</p>
                <div className="text-xs text-gray-500">🚗 车程1小时 | 🏰 中世纪古城</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">佩鲁贾古城</h4>
                <p className="text-sm text-gray-700 mb-2">距离斯波莱托约60公里，车程约1.5小时，是翁布里亚大区的首府，保留着古罗马遗迹、中世纪建筑与文艺复兴时期的艺术品，是翁布里亚地区的文化与商业中心。</p>
                <div className="text-xs text-gray-500">🚗 车程1.5小时 | 🏛️ 历史文化</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">托迪古镇</h4>
                <p className="text-sm text-gray-700 mb-2">距离斯波莱托约50公里，车程约1小时，是一座坐落在丘陵上的中世纪古镇，保留着完整的中世纪街巷与石质建筑，古镇的全景极具视觉冲击力，同时盛产葡萄酒，可品尝当地特色葡萄酒。</p>
                <div className="text-xs text-gray-500">🚗 车程1小时 | 🍷 葡萄酒文化</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">古城核心区域</h4>
                  <p className="text-sm text-blue-800">首选区域，距离德鲁索拱门、古罗马剧院、斯波莱托大教堂等核心景点较近，步行即可抵达，周边环境静谧古朴，推窗即可欣赏古城的石质建筑与街巷风貌。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">古城外围丘陵地带</h4>
                  <p className="text-sm text-green-800">距离古城步行15分钟可达，周边是田园风光，环境清幽，可欣赏亚平宁山脉美景，适合喜欢自然、追求安静的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">火车站或巴士站附近</h4>
                  <p className="text-sm text-yellow-800">距离车站步行10分钟可达，周边有餐厅、便利店，生活便利，适合需要乘坐火车或巴士前往周边景点的游客。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端景观主题酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于古城核心区域或丘陵地带，融合了复古与现代元素，自带花园、观景露台与餐厅，可欣赏古城或山脉风光，提供导览预约、艺术品鉴、葡萄酒品鉴等特色服务。</p>
                  <div className="text-xs text-gray-500">💎 景观体验 | 🏞️ 古城风光</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于古城附近或车站周边，步行可达核心景点，房间干净整洁，设施齐全，价格约75-125欧元/晚，性价比突出，适合大多数游客。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭出游</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">多为家庭经营，风格温馨，部分民宿带有厨房，可自己烹饪，价格约35-70欧元/晚，还能感受当地居民的生活氛围，体验地道的意大利生活。</p>
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
                    <p className="mb-2"><strong>旺季（6-9月）：</strong>夏季避暑旺季，恰逢国际艺术节，建议提前1-2个月预订</p>
                    <p className="mb-2"><strong>淡季（12月至次年5月）：</strong>可提前1-2周预订，价格相对实惠</p>
                    <p><strong>特色套餐：</strong>部分高端酒店推出住宿+艺术导览、徒步体验的优惠套餐</p>
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
                斯波莱托古城，这座藏在意大利翁布里亚山区的千年秘境，历经两千多年的岁月沉淀，既有古罗马遗迹的恢弘厚重，也有中世纪宗教建筑的庄严静谧，更有文艺复兴艺术的璀璨夺目。在这里，你可以漫步古罗马石板街巷，触摸历史的岁月纹理；可以走进中世纪教堂，欣赏珍贵的壁画艺术，感受宗教的庄严与宁静；可以徒步丘陵步道，欣赏亚平宁山脉的田园美景；可以品尝当地特色美食与葡萄酒，体验翁布里亚的饮食文化。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                无论是独自旅行、情侣出游还是家庭度假，斯波莱托古城都能给你带来难忘的旅行体验，让你在静谧古朴的氛围中，邂逅一段跨越时空的人文与艺术之约，爱上这座兼具历史厚重与艺术清新的意大利小众古城。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在静谧古朴的氛围中，邂逅一段跨越时空的人文与艺术之约。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}