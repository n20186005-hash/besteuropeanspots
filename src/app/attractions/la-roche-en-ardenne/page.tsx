import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '拉罗什昂阿登・La Roche-en-Ardenne・比利时・阿登 | 最佳欧洲景点',
  description: '探索拉罗什昂阿登，比利时阿登地区的千年古镇，以中世纪城堡废墟为核心地标，融合军事历史、自然景观与人文底蕴。',
}

export default function LaRocheArdennePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '拉罗什昂阿登', href: '/attractions/la-roche-en-ardenne' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">拉罗什昂阿登・La Roche-en-Ardenne・比利时・阿登</h1>
          <p className="text-lg text-gray-600 mb-6">
            拉罗什昂阿登是比利时阿登地区的千年古镇，以中世纪城堡废墟为核心地标，依偎在乌尔特河畔，被茂密的森林与起伏的山丘环绕。这里既有城堡遗迹的古朴沧桑，又有河流与森林交织的自然之美，还留存着二战阿登战役的历史印记，兼具历史底蕴与户外休闲气息，是感受阿登地区独特风情、追溯欧洲中世纪与近代历史的必访之地。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              拉罗什昂阿登是比利时阿登地区的千年古镇，以中世纪城堡废墟为核心地标，依偎在乌尔特河畔，被茂密的森林与起伏的山丘环绕。这里既有城堡遗迹的古朴沧桑，又有河流与森林交织的自然之美，还留存着二战阿登战役的历史印记，兼具历史底蕴与户外休闲气息，是感受阿登地区独特风情、追溯欧洲中世纪与近代历史的必访之地。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="拉罗什昂阿登" />
                <InfoRow label="英文名称" value="La Roche-en-Ardenne" />
                <InfoRow label="国家" value="比利时（Belgium）" />
                <InfoRow label="城市" value="拉罗什昂阿登" />
                <InfoRow label="所属区域" value="比利时东南部阿登地区" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="阿登地区最具代表性的千年古镇" />
                <InfoRow label="核心特色" value="中世纪城堡废墟、乌尔特河风光" />
                <InfoRow label="文化价值" value="二战阿登战役历史印记" />
                <InfoRow label="自然特色" value="茂密森林与起伏山丘环绕" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="4-10月10:00-18:00；11-3月11:00-17:00（周一、周二闭馆）" />
              <InfoRow label="门票价格" value="城堡废墟成人8欧元；阿登战役博物馆成人7欧元；联票13欧元" />
              <InfoRow label="地址" value="La Roche-en-Ardenne, 6980 La Roche, Belgium" />
              <InfoRow label="交通方式" value="从布鲁塞尔乘火车至那慕尔转巴士约2.5小时；从列日乘巴士约1.5小时" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                拉罗什昂阿登的历史可追溯至公元8世纪，最初是阿登地区的一个小型村落，因地处乌尔特河沿岸的交通要道，逐渐发展成为区域性的商贸与军事据点。小镇的名字"La Roche"在法语中意为"岩石"，因镇中心的山丘多为岩石地貌，且城堡建于岩石之上而得名，其历史发展始终与军事防御、贵族统治和地区变迁紧密相连。
              </p>
              <p>
                10世纪至13世纪，是拉罗什昂阿登城堡的始建与扩建期。当时阿登地区战乱频繁，当地贵族为抵御外敌入侵，在镇中心的岩石山丘上修建了军事要塞，逐步扩建为兼具防御与居住功能的中世纪城堡。这一时期，城堡建成了高耸的主塔楼、坚固的防御城墙、吊桥与护城河等核心设施，建筑风格以罗马式为主，墙体厚重、塔楼挺拔，成为控制乌尔特河交通要道的重要军事据点，也成为当地贵族权力与地位的象征。小镇围绕城堡逐步发展，形成了错落有致的石质房屋与狭窄的街巷，奠定了如今老城区的格局。
              </p>
              <p>
                14世纪至16世纪，拉罗什昂阿登进入鼎盛时期。随着欧洲局势逐渐稳定，城堡的军事防御功能有所弱化，贵族对城堡进行了大规模修缮与扩建，融入了哥特式建筑元素，增设了华丽的礼拜堂、宴会厅与居住宫殿，提升了居住的舒适性与艺术性。这一时期，小镇凭借乌尔特河的航运优势，成为阿登地区的商贸重镇，主要经营木材、皮毛与手工制品贸易，经济繁荣，文化也随之发展，老城区内修建了多座教堂与公共建筑，形成了兼具军事、商贸与居住功能的综合性小镇。
              </p>
              <p>
                17世纪至19世纪，拉罗什昂阿登的地位逐渐衰落。受欧洲宗教战争与工业革命的影响，小镇的商贸活动逐渐萧条，城堡也因年久失修与战乱破坏，部分建筑坍塌，逐渐沦为废墟。这一时期，小镇人口减少，经济以农业与畜牧业为主，发展缓慢，但也因此保留了大量中世纪的建筑风貌与乡村风情，未受到大规模工业发展的破坏。此外，小镇还流传着关于城堡主人女儿贝尔特的传说，为这座废墟增添了神秘色彩。
              </p>
              <p>
                近代以来，拉罗什昂阿登的命运迎来转折。20世纪初，比利时政府开始重视对历史遗迹的保护，对城堡废墟进行了系统性的修缮，保留了其原始风貌，同时将其作为历史景点对外开放。二战期间，拉罗什昂阿登是阿登战役的重要战场之一，1944年希特勒发动的"莱茵河卫兵"计划在此展开激烈战斗，小镇遭到一定破坏，战后政府对小镇进行了重建，同时修建了阿登战役博物馆，纪念这场战役中的牺牲者，传承历史记忆。如今，拉罗什昂阿登已成为比利时著名的旅游小镇，既保留了中世纪的古朴风貌，又融合了二战历史记忆与自然休闲气息，每年吸引着大量游客前来探访。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐游览路线（2-3小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  镇主广场 → 城堡废墟 → 阿登战役博物馆 → 乌尔特河步道 → 老城区街巷 → 镇中心特色商铺与餐馆
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>可从镇主广场出发，全程步行游览，兼顾历史遗迹、自然景观与人文风情，可租赁语音导览（支持多语言），也可跟随当地导览团（约1小时，提供多语言服务）
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 镇主广场</h4>
                  <p className="text-sm text-gray-700 mb-2">作为小镇的核心区域，镇主广场矗立着市政厅、历史雕像与喷泉，周边环绕着古朴的石质房屋、特色商铺与餐馆，是当地市民休闲聚会的场所，充满复古气息。</p>
                  <div className="text-xs text-gray-500">🏛️ 镇中心 | 🏘️ 中世纪建筑</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 城堡废墟</h4>
                  <p className="text-sm text-gray-700 mb-2">从镇主广场步行5分钟即可抵达城堡废墟，沿着石板步道登山，沿途可欣赏小镇的全景与乌尔特河的风光。城堡废墟虽历经岁月沧桑，但仍能看出当年的宏伟格局。</p>
                  <div className="text-xs text-gray-500">🏰 城堡废墟 | 🌄 全景观景</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 阿登战役博物馆</h4>
                  <p className="text-sm text-gray-700 mb-2">从城堡废墟下来，步行10分钟即可抵达阿登战役博物馆，这座博物馆位于镇西部，前身是二战时期的军事建筑，如今被改造为展示阿登战役历史的专题博物馆。</p>
                  <div className="text-xs text-gray-500">🏛️ 二战博物馆 | 📚 历史文物</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 乌尔特河步道</h4>
                  <p className="text-sm text-gray-700 mb-2">从博物馆出来，步行5分钟即可抵达乌尔特河步道，这条步道沿着乌尔特河修建，全长约3公里，步道平缓，难度较低，适合徒步休闲，沿途风景秀丽。</p>
                  <div className="text-xs text-gray-500">🌊 河畔步道 | 🥾 徒步休闲</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 老城区街巷</h4>
                  <p className="text-sm text-gray-700 mb-2">沿着乌尔特河步道前行，即可进入老城区的狭窄街巷，这里的街巷由石板铺成，蜿蜒曲折，两旁是保存完好的中世纪石质房屋，部分房屋保留着原始的门窗与装饰。</p>
                  <div className="text-xs text-gray-500">🏘️ 中世纪街巷 | 🏪 特色商铺</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 镇中心特色商铺与餐馆</h4>
                  <p className="text-sm text-gray-700 mb-2">游览完老城区后，返回镇主广场周边，这里的特色商铺与餐馆集中，可购买当地特色纪念品，如手工木雕、陶艺制品等，也可品尝当地传统美食。</p>
                  <div className="text-xs text-gray-500">🍽️ 当地美食 | 🛍️ 特色购物</div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 城堡废墟入口机位</h4>
                  <p className="text-sm text-gray-700">位于城堡废墟的山脚入口处，采用仰拍角度，拍摄城堡的主塔楼与残存城墙，利用岩石地貌与绿植作为前景，凸显城堡的古朴沧桑与雄伟气势，能清晰展现中世纪军事要塞的轮廓。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 城堡塔楼顶端机位</h4>
                  <p className="text-sm text-gray-700">登上城堡塔楼顶端，采用俯瞰角度，拍摄拉罗什昂阿登镇与乌尔特河的全景，古朴的小镇、蜿蜒的河流、远处的阿登森林尽收眼底，画面开阔秀丽。建议日落时分拍摄，夕阳洒在河流与小镇上，光影绝美。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 乌尔特河桥梁机位</h4>
                  <p className="text-sm text-gray-700">位于乌尔特河上的古朴石桥上，采用平视角度，拍摄河流两岸的风光与石桥的倒影，石桥的古朴与河流的清澈相互映衬，搭配岸边的绿植与石质房屋，画面静谧优美，充满乡村气息。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. Les Crestelles观景台机位</h4>
                  <p className="text-sm text-gray-700">距离小镇约3公里，可驾车或乘坐观光巴士抵达，这里是米其林绿色指南推荐的观景台，采用平视角度，可俯瞰Maboge村、Crestelles景观与乌尔特河弯道，视野开阔，自然风光秀丽。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 老城区街巷机位</h4>
                  <p className="text-sm text-gray-700">在老城区的狭窄街巷中，采用侧拍或俯拍角度，拍摄街巷的延伸感，两旁的石质房屋、古朴的门窗与石板路相互映衬，充满中世纪的复古氛围。建议清晨拍摄，游客较少，能拍出更纯净、静谧的画面。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 阿登战役博物馆庭院机位</h4>
                  <p className="text-sm text-gray-700">在博物馆的庭院内，聚焦博物馆的建筑外观与庭院内的战争纪念雕塑，采用平视角度，拍摄建筑的细节与雕塑的轮廓，凸显二战历史的厚重感与严肃性。庭院内的绿植与雕塑、建筑相互搭配，画面庄重而有质感。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照注意事项</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 游览城堡废墟时，禁止攀爬残存城墙、刻画墙体，避免损坏文物</li>
                <li>• 拍摄博物馆内展品时，禁止使用闪光灯，保护文物</li>
                <li>• 户外拍摄时，注意脚下安全，尤其是城堡塔楼与河边步道区域，避免靠近边缘</li>
                <li>• 冬季小镇气温较低，部分路面可能结冰，拍摄时注意防滑</li>
                <li>• 遵守景区规定，不随意踩踏草坪、破坏植被，共同保护景区环境</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">巴伦城堡（Château de Barvaux）</h4>
                <p className="text-sm text-gray-700 mb-2">距离拉罗什昂阿登约15公里，驾车20分钟可达，是一座保存完好的中世纪城堡，始建于12世纪，融合了罗马式与哥特式建筑风格，城堡内部保留着中世纪的居住遗迹与装饰，周边环绕着美丽的花园与森林。</p>
                <div className="text-xs text-gray-500">🚗 车程20分钟 | 🏰 中世纪城堡</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">阿登森林步道</h4>
                <p className="text-sm text-gray-700 mb-2">距离拉罗什昂阿登约5公里，步行或驾车10分钟可达，这条步道贯穿阿登森林核心区域，全长约8公里，沿途风景秀丽，可欣赏茂密的森林、潺潺的溪流与古朴的村落，步道难度适中，适合徒步爱好者。</p>
                <div className="text-xs text-gray-500">🚶 步行10分钟 | 🌲 森林徒步</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">迪南小镇（Dinant）</h4>
                <p className="text-sm text-gray-700 mb-2">距离拉罗什昂阿登约40公里，驾车40分钟可达，是比利时著名的旅游小镇，坐落于默兹河（Meuse River）沿岸，以雄伟的迪南城堡、独特的Collegiate教堂与萨克斯风的发源地闻名。</p>
                <div className="text-xs text-gray-500">🚗 车程40分钟 | 🏘️ 河畔小镇</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">盟军航空纪念馆</h4>
                <p className="text-sm text-gray-700 mb-2">距离拉罗什昂阿登约3公里，位于Les Crestelles观景台附近，是为纪念二战期间在阿登战役中坠毁的盟军轰炸机而建，纪念馆内陈列着轰炸机残骸、历史照片与文献资料，还有纪念雕塑，诉说着二战时期的英雄事迹。</p>
                <div className="text-xs text-gray-500">🚗 车程3分钟 | 🕊️ 二战纪念馆</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">老城区内或镇主广场附近</h4>
                  <p className="text-sm text-blue-800">优先选择老城区内或靠近镇主广场的住宿，步行可达城堡废墟、博物馆与老城区核心景点，方便游览，同时能深度感受中世纪小镇的氛围。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">乌尔特河沿岸或镇边缘</h4>
                  <p className="text-sm text-green-800">如果喜欢安静，可选择乌尔特河沿岸或镇边缘的住宿，环境静谧，能欣赏到河流与森林风光，适合休息，适合喜欢自然风光的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">镇入口或停车场附近</h4>
                  <p className="text-sm text-yellow-800">若计划游览周边景点（如迪南小镇、巴伦城堡），可选择靠近镇入口或停车场的住宿，交通更便捷，便于驾车前往周边景点。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">可选择镇内的青年旅社，普遍干净整洁、价格实惠，大多步行可达核心景点，部分提供公共厨房，适合背包客与预算有限的游客。</p>
                  <div className="text-xs text-gray-500">💰 预算友好 | 🎒 背包客首选</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中档三星级酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">地理位置优越，房间舒适，部分设有餐厅，提供当地传统美食，适合家庭与情侣，性价比高，设施完善。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭出游</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高档四星级以上酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于乌尔特河沿岸或山丘旁，环境优雅，房间装饰精美，部分可欣赏到城堡或河流远景，设有露台与高级餐厅。</p>
                  <div className="text-xs text-gray-500">🏰 豪华住宿 | 🏞️ 河谷景观</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">家庭经营民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">多为石质建筑，装修古朴，常提供当地特色早餐，充满乡土气息，适合喜欢体验当地生活的游客，温馨舒适。</p>
                  <div className="text-xs text-gray-500">🏡 家庭氛围 | 🍳 特色早餐</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季预订：</strong>拉罗什昂阿登的旅游旺季为4月至10月，尤其是夏季（7-8月）与节假日，游客较多，建议提前1-2个月预订住宿</p>
                    <p className="mb-2"><strong>淡季优惠：</strong>冬季游客较少，可提前1-2周预订，部分住宿会推出优惠活动，性价比更高</p>
                    <p><strong>特色服务：</strong>部分住宿提供城堡、博物馆或Les Crestelles观景台门票折扣券，可节省游览成本</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>比利时的酒店与民宿通常不提供一次性洗漱用品，需自备牙刷、牙膏、毛巾等</p>
                    <p className="mb-2"><strong>电器准备：</strong>当地电压为230V，插头为Type F型，与德国、法国一致，可提前准备转换插头</p>
                    <p><strong>特殊注意：</strong>冬季拉罗什昂阿登气温较低，部分山区可能有降雪，住宿时可关注是否有供暖设施，避免影响休息</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                拉罗什昂阿登，这座依偎在乌尔特河畔的千年小镇，既有中世纪城堡的古朴沧桑，又有阿登森林的静谧秀丽，还有二战历史的厚重记忆。在这里，你可以漫步在城堡废墟之上，感受中世纪的军事智慧；穿梭在老城区街巷，探寻岁月的痕迹；行走在乌尔特河步道，拥抱自然的宁静；探访战役博物馆，铭记历史的厚重。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                希望这份攻略能帮助你更好地游览拉罗什昂阿登，深入了解比利时阿登地区的历史与文化，留下一段难忘的欧洲旅行记忆。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在千年古镇与自然风光的交融中，邂逅一段跨越时空的阿登之旅。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}