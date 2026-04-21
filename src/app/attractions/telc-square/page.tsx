import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '特尔奇广场・Telč Square・捷克・特尔奇 | 最佳欧洲景点',
  description: '探索特尔奇广场，捷克东南部摩拉维亚地区的历史中心核心，联合国教科文组织世界文化遗产，以色彩斑斓的文艺复兴与巴洛克风格建筑和独特的三角形广场格局闻名。',
}

export default function TelcSquarePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '捷克', href: '/destinations/czech-republic' },
            { label: '特尔奇广场', href: '/attractions/telc-square' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">特尔奇广场・Telč Square・捷克・特尔奇</h1>
          <p className="text-lg text-gray-600 mb-6">
            特尔奇广场是捷克东南部摩拉维亚地区的历史中心核心，联合国教科文组织世界文化遗产，以色彩斑斓的文艺复兴与巴洛克风格建筑和独特的三角形广场格局闻名。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              特尔奇广场是特尔奇历史中心的灵魂所在，始建于14世纪，呈独特的三角形布局，环绕着数十栋保存完好的文艺复兴与巴洛克风格民居，彩色立面、精美山墙与拱形拱廊相得益彰。广场被两大湖泊环绕，融合了哥特式、巴洛克式建筑特色，兼具历史厚重感与童话般的精致感，是研究中欧中世纪城镇规划与建筑艺术的重要范本，也是休闲漫步、摄影打卡的绝佳去处。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="特尔奇广场" />
                <InfoRow label="英文名称" value="Telč Square" />
                <InfoRow label="捷克语名" value="Naměstí Zachariáše z Hradce" />
                <InfoRow label="国家" value="捷克（Czech Republic）" />
                <InfoRow label="城市" value="特尔奇（Telč）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="所属区域" value="捷克东南部摩拉维亚地区" />
                <InfoRow label="地理位置" value="靠近波希米亚边界，距离奥地利边境约25公里" />
                <InfoRow label="历史地位" value="联合国教科文组织世界文化遗产" />
                <InfoRow label="建筑特色" value="色彩斑斓的文艺复兴与巴洛克风格建筑" />
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">详细门票信息</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">广场公共区域：</span>免费开放</p>
                <p><span className="font-medium">特尔奇城堡（含导览）：</span>成人40捷克克朗/人，学生20捷克克朗/人</p>
                <p><span className="font-medium">圣灵教堂：</span>成人20捷克克朗/人，学生10捷克克朗/人</p>
                <p><span className="font-medium">民俗展馆：</span>成人25捷克克朗/人，学生15捷克克朗/人</p>
                <p><span className="font-medium">团体优惠：</span>10人及以上可提前联系景区预约，享受10%团体优惠</p>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-green-900 mb-3">开放时间</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">广场整体：</span>全天免费开放</p>
                <p><span className="font-medium">核心建筑（4-5月、9-10月）：</span>9:00-17:00（16:30停止入场）</p>
                <p><span className="font-medium">核心建筑（6-8月）：</span>8:30-18:00（17:30停止入场）</p>
                <p><span className="font-medium">核心建筑（11月-次年3月）：</span>10:00-16:00（15:30停止入场）</p>
                <p><span className="font-medium">建议游览时长：</span>2-3小时</p>
              </div>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-yellow-900 mb-3">交通指南</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">布拉格瓦茨拉夫·哈维尔国际机场：</span>→特尔奇（180公里，自驾2小时，走D1高速公路转R35公路）</p>
                <p><span className="font-medium">公共交通（布拉格）：</span>布拉格中央火车站→特尔奇火车站（2.5小时火车，20欧元/人）→步行15分钟到广场</p>
                <p><span className="font-medium">奥地利维也纳出发：</span>自驾2小时车程，城际巴士至特尔奇汽车站（12欧元/人，每天3-4班）</p>
                <p><span className="font-medium">市内交通：</span>特尔奇老城区（含广场）以步行为主，街巷狭窄禁止机动车通行</p>
                <p><span className="font-medium">停车场：</span>广场外围停车场，收费约50-70捷克克朗/天，步行5分钟抵达广场中心</p>
              </div>
            </div>
          </Section>

          <Section title="3. 历史背景">
            <p className="text-gray-700 leading-relaxed mb-4">
              特尔奇广场的历史可追溯至13世纪，其发展历程与特尔奇城镇的兴起、战火洗礼、建筑风格演变紧密相连，是摩拉维亚地区中世纪至文艺复兴时期城镇发展的重要见证，1992年随特尔奇历史中心一同被联合国教科文组织列入《世界文化遗产名录》，被誉为"摩拉维亚的文艺复兴珍珠"。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              13世纪，特尔奇所在的森林地带开始出现居民区，当时的居民以农业、手工业为生，逐渐形成了小规模的聚居点。1335年，这里被改造成设防的皇家城堡，周围环绕着居民住宅与教堂，形成了以城堡为核心、简易广场为中心的城镇雏形，此时的广场以木质建筑为主，布局较为简陋，主要用于集市贸易与居民聚集。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              14世纪末，特尔奇遭遇一场大火，环绕广场的木质房屋几乎全部被毁，当地居民随后改用石头重建建筑，奠定了广场的石砌建筑基础。这一时期，哥特式建筑风格盛行，广场周边修建了哥特式风格的城堡、教堂与民居，石砌墙体、尖拱门窗成为主要特色，同时广场被改造为三角形布局，增设了喷泉与雕塑，逐渐形成了兼具防御、贸易与居住功能的城镇中心。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              15世纪至17世纪，特尔奇迎来文化与建筑的繁荣期，尤其是在赫拉德茨的撒迦利亚统治时期，城市经济快速发展，广场周边的建筑迎来大规模改造与扩建。这一时期，文艺复兴风格传入，与当地哥特式建筑元素融合，形成了独特的地域建筑风格，广场周边的民居纷纷增设彩色立面、精美山墙与拱形拱廊，装饰变得更加精致，同时修建了圣灵教堂等标志性建筑，广场成为当时摩拉维亚地区重要的文化与贸易中心。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              17世纪至19世纪，巴洛克风格逐渐兴起，广场周边的部分建筑被改造为巴洛克风格，增添了华丽的雕刻与彩绘，进一步丰富了广场的建筑风貌。这一时期，中欧地区战乱频繁，特尔奇因地处内陆，未遭受严重的战火侵袭，广场的建筑格局与风貌得以完整保留。同时，当地居民注重建筑的修缮与保护，确保了文艺复兴、哥特式、巴洛克等多种风格的延续，形成了"一步一景、一景一韵"的独特景观。
            </p>
            <p className="text-gray-700 leading-relaxed">
              20世纪以来，特尔奇广场的历史价值与建筑价值逐渐被人们发现，当地政府开始加大对广场及周边建筑的保护与修缮力度，对受损的建筑进行系统性修复，严格保留原有格局与建筑特色，禁止过度商业化开发，让广场始终保持着中世纪城镇的古朴风貌。1992年，特尔奇历史中心（含广场）因其完整的城镇格局、独特的建筑风格与深厚的历史底蕴，被联合国教科文组织列入《世界文化遗产名录》，成为全球关注的中世纪城镇典范。如今，特尔奇广场不仅是捷克重要的历史文化地标，也是欧洲知名的旅游目的地，每年吸引大量游客前来感受中世纪城镇风情、欣赏独特的建筑艺术、体验当地的民俗文化。
            </p>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">经典游览路线</h4>
                <p className="text-gray-700 mb-4">全程以"广场探秘+建筑赏鉴+湖畔漫步"为主题，难度适中，全程以步行为主，适合各类游客，建议安排2-3小时</p>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">起点：特尔奇游客咨询点</h5>
                    <p>可领取导览手册、寄存行李，咨询游览路线与民俗体验项目信息</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第一站：特尔奇广场入口</h5>
                    <p>欣赏广场的三角形布局，打卡广场入口的复古雕塑与石砌拱门，感受中世纪城镇的入口氛围，停留约15分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第二站：广场中心喷泉</h5>
                    <p>广场的核心景观，喷泉雕刻精美，周边环绕着彩色民居，可拍摄喷泉与建筑的同框画面，感受广场的热闹气息，停留约20分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第三站：广场周边彩色民居</h5>
                    <p>漫步广场周边，欣赏数十栋文艺复兴与巴洛克风格的彩色民居，重点观赏民居的彩色立面、精美山墙与拱形拱廊，了解每栋建筑的历史背景，游览约40分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第四站：圣灵教堂</h5>
                    <p>位于广场西侧，是哥特式与巴洛克风格融合的代表建筑，内部保留着中世纪壁画与雕塑，氛围庄严静谧，参观约25分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第五站：特尔奇城堡</h5>
                    <p>位于广场北侧，是广场周边最具代表性的建筑，参观城堡内部的展厅、庭院，了解特尔奇的历史发展，可登上城堡塔楼俯瞰广场全景，参观约40分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第六站：民俗展馆</h5>
                    <p>位于广场东侧，展示着当地的历史文物、传统农具、民俗服饰与手工艺品，可了解特尔奇的民俗文化与生活方式，参观约25分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第七站：湖畔步道</h5>
                    <p>从广场南侧出发，漫步在萨哈瓦湖北岸步道，欣赏广场建筑与湖面的倒影，可投喂天鹅、拍照打卡，感受湖畔的宁静风光，游览约30分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">终点：广场周边民俗商店</h5>
                    <p>购买当地手工艺品、特色美食，品尝当地传统甜点与饮品，结束游览</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">温馨提示</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 广场周边街巷多为石板路面，部分路段较为狭窄，行走时需注意安全，老人与小孩建议有人陪同</li>
                  <li>• 参观教堂、城堡与展馆时，需保持安静，禁止大声喧哗，尊重当地的宗教习俗与文化传统</li>
                  <li>• 周一部分室内展馆（民俗展馆、城堡内部部分展厅）闭馆，仅开放户外区域，前往前需提前确认</li>
                  <li>• 旺季（6-8月）游客较多，建议错峰前往，避免拥挤</li>
                  <li>• 湖畔步道部分路段靠近水面，需注意安全，看管好孩子</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">特尔奇城堡塔楼</h4>
                  <p className="text-gray-700 text-sm">拍摄广场全景核心机位，登上塔楼可俯瞰整个三角形广场全貌，彩色民居环绕广场，中心喷泉点缀其间，远处湖畔风光尽收眼底。最佳时间：上午10:00-11:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">广场中心喷泉旁</h4>
                  <p className="text-gray-700 text-sm">拍摄建筑与人文绝佳机位，以喷泉为前景拍摄周边彩色民居，建筑彩色立面、精美山墙与喷泉相互映衬，可捕捉游客漫步场景。最佳时间：上午9:30-10:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">湖畔步道中段</h4>
                  <p className="text-gray-700 text-sm">拍摄湖景与建筑倒影绝佳机位，从步道上远眺可拍摄广场建筑与湖面完美倒影，天鹅游过湖面时画面更具灵动性。最佳时间：傍晚17:00-18:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">彩色民居拱廊下</h4>
                  <p className="text-gray-700 text-sm">拍摄建筑细节绝佳机位，近距离拍摄民居拱形拱廊、彩色立面与精美雕刻，可展现文艺复兴与巴洛克风格建筑细节。最佳时间：上午11:00-12:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">圣灵教堂门口</h4>
                  <p className="text-gray-700 text-sm">拍摄哥特式与巴洛克风格融合建筑绝佳机位，教堂尖拱门窗、精美雕塑与周边彩色民居形成鲜明对比。最佳时间：午后14:00-15:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">广场西侧小巷</h4>
                  <p className="text-gray-700 text-sm">拍摄小众氛围感照片绝佳机位，狭窄石板小巷两侧是彩色民居，阳光透过街巷缝隙洒下，光影斑驳。最佳时间：上午10:30-11:30</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">拍照小贴士</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 最佳拍摄时间为清晨（9:00-11:00）和傍晚（17:00-18:00），光线柔和，光影层次丰富，且游客较少</li>
                  <li>• 建议穿着简约清新风格衣物，如白色、浅蓝色、米白色，避免过于花哨，与彩色建筑、湖畔风光形成呼应</li>
                  <li>• 拍摄广场全景与湖景时可使用广角镜头，展现广场宏伟与湖景开阔，拍摄细节时可使用长焦镜头，突出建筑雕刻、彩绘与色彩细节</li>
                  <li>• 参观教堂、城堡内部时，部分区域禁止拍照或需关闭闪光灯，需遵守现场提示</li>
                  <li>• 拍摄当地居民时，需提前征得对方同意，尊重当地风俗习惯</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">近距离景点</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">特尔奇城堡花园</span>
                      <p className="text-sm text-gray-600">距离广场约500米，步行10分钟可达。典型欧洲古典花园，园内种植各类花卉、灌木与树木，设有喷泉、雕塑与休闲步道，免费开放</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">萨哈瓦湖游船码头</span>
                      <p className="text-sm text-gray-600">距离广场约800米，步行15分钟可达。可乘坐游船游览萨哈瓦湖，欣赏湖面风光与周边田园建筑，游船票价约50捷克克朗/人</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">特尔奇民俗村落</span>
                      <p className="text-sm text-gray-600">距离广场约3公里，打车10分钟可达。保存完好摩拉维亚民俗村落，建筑风格与广场周边相似，可参观传统民居、体验民俗手工艺</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">稍远距离景点</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">伊赫拉瓦老城</span>
                      <p className="text-sm text-gray-600">距离特尔奇约25公里，自驾30分钟可达。摩拉维亚地区重要城市，老城保留大量中世纪建筑、广场与教堂，建议安排半天行程</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">特雷比奇岩窟教堂</span>
                      <p className="text-sm text-gray-600">距离特尔奇约40公里，自驾45分钟可达。独特岩窟教堂，建于12世纪，开凿于岩石之中，内部保留中世纪壁画与雕塑，门票约30捷克克朗/人</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿推荐">
            <div className="space-y-6">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">住宿位置选择</h4>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">特尔奇广场内部或周边500米范围</h5>
                    <p>距离核心景点最近，可步行抵达广场、城堡、教堂等景点，周边多为传统建筑改造民宿与精品酒店，氛围古朴典雅</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">老城区外围</h5>
                    <p>距离广场约1-2公里，以经济型酒店为主，环境安静，性价比高，适合预算有限或喜欢宁静氛围的游客</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">湖畔区域</h5>
                    <p>距离广场约1公里，以田园民宿与精品酒店为主，可欣赏湖畔风光，适合喜欢湖景、想远离喧嚣的游客</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">住宿类型推荐</h4>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">特色民俗民宿</h5>
                    <p>广场周边有很多小众民宿，多由当地传统文艺复兴风格民居改造，装修融合中世纪建筑元素与现代舒适设施，保留彩色立面、拱形门窗等特色，价格约40-80欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">湖畔民宿</h5>
                    <p>湖畔民宿环境清幽，部分民宿自带观景露台，可欣赏湖景与日落，价格约45-85欧元/晚，适合家庭或多人出行、喜欢湖景的游客</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">经济型酒店</h5>
                    <p>老城区外围有多家性价比高的酒店，设施标准化，干净整洁，提供基础住宿服务，价格约25-50欧元/晚，适合预算有限的游客</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">精品酒店</h5>
                    <p>广场周边有少量高端精品酒店，装修精致，配套完善，提供贴心服务，价格约80-150欧元/晚，适合追求高品质住宿体验的游客</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">预订注意事项</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 特尔奇地区旅游旺季为5-9月，尤其是7-8月与9月中旬民俗节日期间，游客较多，住宿紧张，建议提前1个月预订</li>
                  <li>• 预订时注意查看住宿的取消政策，尽量选择可免费取消的房源，以便灵活调整行程</li>
                  <li>• 若自驾出行，需提前确认住宿周边的停车场位置与收费标准，老城区内部禁止机动车通行，外围停车场收费约50-70捷克克朗/天</li>
                  <li>• 广场周边的民宿多位于石板街巷深处，部分无电梯，携带大件行李的游客可选择有行李搬运服务的住宿</li>
                  <li>• 春秋季（4-5月、9-10月）气候最宜人，游客较少，住宿价格适中，是前往的最佳时节</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="8. 实用贴士">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">最佳游览时间</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 4-5月、9-10月：气候宜人，游客较少，住宿价格适中，还能避开旺季人流</li>
                    <li>• 5-9月：旅游旺季，活动丰富但游客较多，9月中旬可参与当地民俗节日</li>
                    <li>• 11-次年2月：旅游淡季，游客稀少，部分湖畔民宿可能临时关闭</li>
                    <li>• 上午9:30-11:30：游客较少，光线柔和，便于观赏建筑细节与拍摄</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">参观注意事项</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 广场周边街巷多为石板路面，部分路段较为狭窄，行走时需注意安全</li>
                    <li>• 参观教堂、城堡与展馆时，需保持安静，禁止大声喧哗，尊重当地宗教习俗与文化传统</li>
                    <li>• 周一部分室内展馆闭馆，仅开放户外区域，前往前需提前确认</li>
                    <li>• 湖畔步道部分路段靠近水面，需注意安全，看管好孩子</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">特色体验</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 登上特尔奇城堡塔楼，俯瞰整个三角形广场全貌与湖畔风光</li>
                    <li>• 漫步广场周边，欣赏数十栋文艺复兴与巴洛克风格的彩色民居</li>
                    <li>• 参观圣灵教堂，欣赏哥特式与巴洛克风格融合的建筑艺术</li>
                    <li>• 湖畔步道漫步，欣赏广场建筑与湖面的完美倒影</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">实用信息</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 当地货币：捷克克朗，部分地方支持欧元（1欧元≈24捷克克朗）</li>
                    <li>• 语言：捷克语，但旅游区英语基本通行</li>
                    <li>• 电压：230V，插头为Type F型</li>
                    <li>• 紧急电话：112（欧洲统一紧急电话）</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}