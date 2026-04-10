import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科尔丘拉岛・Korčula・克罗地亚・科尔丘拉 | 最佳欧洲景点',
  description: '探索科尔丘拉岛，这座被誉为“亚得里亚海珍珠”的千年海岛，以其保存完好的中世纪老城区和马可波罗故乡的美誉闻名于世。',
}

export default function KorculaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '科尔丘拉岛', href: '/attractions/korcula' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">科尔丘拉岛・Korčula・克罗地亚・科尔丘拉</h1>
          <p className="text-lg text-gray-600 mb-6">
            科尔丘拉岛是亚得里亚海的一颗璀璨明珠，也是旅行家马可波罗的故乡，总面积约276平方公里，人口约1.6万。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              科尔丘拉岛是亚得里亚海的一颗璀璨明珠，也是旅行家马可波罗的故乡，总面积约276平方公里，人口约1.6万。岛屿以中世纪老城区为核心，留存着大量哥特式、文艺复兴式建筑，老城区街巷如叶脉般纵横交错，蓝瓦白墙的民居与蔚蓝的大海相映成趣。这里既有澄澈见底的海滨浴场、蜿蜒的海岸线，又有厚重的历史遗迹、独特的民俗文化，融合了地中海的浪漫与中世纪的古朴，是休闲度假、探寻历史、欣赏海岛风光的绝佳去处，也是感受克罗地亚多元文化的重要窗口。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="科尔丘拉岛" />
                <InfoRow label="英文名称" value="Korčula Island" />
                <InfoRow label="国家" value="克罗地亚（Croatia）" />
                <InfoRow label="城市" value="科尔丘拉（Korčula）" />
                <InfoRow label="所属区域" value="达尔马提亚地区" />
              </div>
              <div className="space-y-4">
                <InfoRow label="岛屿面积" value="约276平方公里" />
                <InfoRow label="人口" value="约1.6万" />
                <InfoRow label="距离本土" value="约15公里" />
                <InfoRow label="岛屿周长" value="约100公里" />
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">详细门票信息</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">马可波罗博物馆：</span>约8欧元/人</p>
                <p><span className="font-medium">圣马可大教堂：</span>约5欧元/人</p>
                <p><span className="font-medium">圣马可教堂钟塔登顶：</span>约5欧元/人</p>
                <p><span className="font-medium">老城区城墙：</span>约3欧元/人</p>
                <p><span className="font-medium">优惠政策：</span>学生半价，12岁以下儿童免费，65岁以上老人8折</p>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-green-900 mb-3">交通指南</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">外部交通：</span>杜布罗夫尼克机场→科尔丘拉岛码头（1.5小时）→渡轮（30分钟，10欧元/人）</p>
                <p><span className="font-medium">公共交通：</span>斯普利特→科尔丘拉岛码头（3小时，20欧元）→渡轮上岛</p>
                <p><span className="font-medium">市内交通：</span>老城区步行游览，观光巴士5欧元/天，摩托车租赁30-50欧元/天</p>
                <p><span className="font-medium">停车场：</span>老城区外专用停车场，收费约5欧元/天</p>
              </div>
            </div>
          </Section>

          <Section title="3. 历史背景">
            <p className="text-gray-700 leading-relaxed mb-4">
              科尔丘拉岛的历史可追溯至公元前4世纪，历经古希腊、古罗马、拜占庭、威尼斯共和国等多个政权的统治，千年的岁月沉淀，让这座海岛兼具多元文化底蕴，成为亚得里亚海沿岸历史最悠久的岛屿之一，而"马可波罗故乡"的美誉，更让它闻名世界。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              公元前4世纪，古希腊人首次登上科尔丘拉岛，在此建立定居点，将古希腊的文化与建筑风格带到岛上，留存下少量古希腊时期的陶器、石碑等文物，成为岛屿历史的开端。公元前2世纪，古罗马征服达尔马提亚地区，科尔丘拉岛成为古罗马的一部分，古罗马人在此修建道路、建筑，发展农业与渔业，推动了岛屿的发展，如今老城区的部分石板路仍保留着古罗马时期的痕迹。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              中世纪时期，科尔丘拉岛成为拜占庭帝国的领地，这一时期，岛屿的防御体系逐渐完善，老城区的城墙、塔楼开始修建，兼具防御与居住功能。14世纪，威尼斯共和国征服科尔丘拉岛，将其纳入威尼斯的统治范围，这一时期是岛屿发展的黄金时代，威尼斯人对老城区进行了大规模修缮与扩建，修建了圣马可大教堂、马可波罗故居等标志性建筑，将哥特式、文艺复兴式建筑风格融入当地，形成了如今老城区的建筑格局，同时推动了海上贸易的发展，让科尔丘拉岛成为亚得里亚海沿岸重要的贸易据点。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              13世纪，旅行家马可波罗出生于科尔丘拉岛，他在岛上度过了童年与少年时光，之后踏上了环球旅行的征程，写下了闻名世界的《马可波罗游记》，让科尔丘拉岛成为全球游客向往的目的地。如今，岛上仍留存着马可波罗故居与马可波罗博物馆，展示着他的生平事迹与旅行历程，成为岛屿最具代表性的人文景点。
            </p>
            <p className="text-gray-700 leading-relaxed">
              19世纪，随着威尼斯共和国的衰落，科尔丘拉岛被奥匈帝国接管，这一时期，岛屿的农业、渔业与旅游业逐渐发展，当地居民保留了传统的民俗文化，同时吸收了奥匈帝国的文化元素，形成了独特的地域文化。20世纪，克罗地亚独立后，科尔丘拉岛成为克罗地亚重要的旅游胜地，政府对岛上的历史遗迹进行了系统性修缮，严格遵循"修旧如旧"的原则，保留了老城区的历史原貌，同时完善了旅游配套设施，让这座千年海岛重新焕发活力。如今，科尔丘拉岛不仅是克罗地亚的旅游名片，更是亚得里亚海多元文化交融的见证，岛上的每一处建筑、每一条街巷，都镌刻着千年的沧桑与变迁，既有中世纪的古朴厚重，又有地中海的浪漫灵动，吸引着全球游客前来探寻马可波罗的足迹，感受海岛的独特魅力。
            </p>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">经典步行游览路线</h4>
                <p className="text-gray-700 mb-4">全程适合1天行程，节奏舒缓，兼顾打卡与深度体验</p>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">起点：科尔丘拉老城区入口</h5>
                    <p>设有游客中心，可领取导览手册、聘请当地导游（25欧元/小时，提供多语言讲解）</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第一站：老城区城墙（步行2分钟）</h5>
                    <p>中世纪建造，青灰色石块砌筑，周长约1.5公里，设有多个瞭望塔和城门，可远眺亚得里亚海</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第二站：马可波罗故居（步行3分钟）</h5>
                    <p>文艺复兴式建筑，留存马可波罗生活痕迹，内部陈列手稿、旅行用品等文物</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第三站：马可波罗博物馆（步行2分钟）</h5>
                    <p>共三层，展示马可波罗旅行历程、《马可波罗游记》不同版本及途经地区文物</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第四站：圣马可大教堂（步行5分钟）</h5>
                    <p>15-16世纪建造，哥特式与文艺复兴式融合风格，洁白外墙配蓝色圆顶，内部有古老壁画与雕塑</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第五站：圣马可教堂钟塔（步行1分钟）</h5>
                    <p>高达30米，登顶可360度俯瞰老城区、海岸线与亚得里亚海，拍摄海岛全景绝佳位置</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第六站：“思考之路”（步行4分钟）</h5>
                    <p>老城区唯一没有台阶的街巷，两侧蓝瓦白墙民居与特色小店，感受当地烟火气</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第七站：老城区街巷漫步</h5>
                    <p>随意漫步纵横街巷，欣赏古建筑、窗台绿植与特色纪念品商店，感受地中海浪漫风情</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第八站：海滨步道（步行8分钟）</h5>
                    <p>沿海岸线修建，全长约1公里，可漫步感受海风清凉，欣赏澄澈海水与远处船只</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">终点：老城区出口（步行5分钟）</h5>
                    <p>出口处有特色餐厅与纪念品商店，可品尝当地美食、购买海岛特色纪念品</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">温馨提示</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 老城区内路面多为石板路，部分路段较滑，建议穿舒适的防滑步行鞋</li>
                  <li>• 夏季海岛紫外线极强，需携带遮阳帽、防晒霜与饮用水</li>
                  <li>• 老城区内禁止大声喧哗、随意触摸建筑与文物，禁止攀爬城墙与钟塔</li>
                  <li>• 参观教堂时，需尊重当地宗教习俗，穿着得体，避免过于暴露</li>
                  <li>• 夏季是旅游旺季，游客较多，建议提前规划行程，避开人流高峰</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">圣马可教堂钟塔顶层</h4>
                  <p className="text-gray-700 text-sm">拍摄老城区全景最佳机位，可360度俯瞰蓝瓦白墙建筑群、纵横石板街巷、蜿蜒海岸线与蔚蓝亚得里亚海。最佳时间：傍晚17:00-19:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Panorama Korčula观景台</h4>
                  <p className="text-gray-700 text-sm">位于老城区背后山坡，步行15分钟，免费开放，视野广阔可完整拍摄老城区与亚得里亚海全景。最佳时间：清晨8:30-10:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">老城区“思考之路”</h4>
                  <p className="text-gray-700 text-sm">拍摄复古人文风照片核心机位，狭窄石板路平整宽阔，两侧蓝瓦白墙民居，窗台绿植与门口鲜花相互映衬。最佳时间：上午10:00-11:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">马可波罗故居门口</h4>
                  <p className="text-gray-700 text-sm">文艺复兴式建筑风格独特，石砌外墙、拱形门窗细节精致，门口铭牌与绿植相映成趣。最佳时间：上午9:00-10:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">海滨步道中段</h4>
                  <p className="text-gray-700 text-sm">拍摄海景与建筑融合经典机位，可拍摄老城区侧面轮廓与蔚蓝大海，海浪轻拍岸边，远处船只点缀其间。最佳时间：午后14:00-16:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">老城区城门观景台</h4>
                  <p className="text-gray-700 text-sm">位于城门上方，高度适中，可拍摄老城区入口与远处海岸线，城门石砌结构与蓝瓦白墙建筑相互呼应。最佳时间：傍晚16:00-17:00</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">拍照小贴士</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 最佳拍摄时间：清晨（8:30-10:30）和傍晚（17:00-19:00），光线柔和，游客较少</li>
                  <li>• 建议穿着纯色、简约风格衣物，如白色、浅蓝色、米白色，与蓝瓦白墙、蔚蓝大海形成呼应</li>
                  <li>• 拍摄全景时可使用广角镜头，拍摄细节时可使用长焦镜头，突出建筑雕花、窗台绿植</li>
                  <li>• 拍摄海景时可利用水面倒影，增加画面层次感；海岛风较大，注意稳定设备</li>
                  <li>• 禁止拍摄教堂内部隐私区域与居民私人住宅，遵守当地规定</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">渡轮可达岛屿</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">布拉奇岛</span>
                      <p className="text-sm text-gray-600">距离约40公里，渡轮1小时，15欧元/人。以金角沙滩闻名，欧洲最美丽沙滩之一</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">赫瓦尔岛</span>
                      <p className="text-sm text-gray-600">距离约50公里，渡轮1.5小时，18欧元/人。薰衣草田、古老城堡与高端酒店，浪漫奢华</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">巴迪亚岛</span>
                      <p className="text-sm text-gray-600">距离约3公里，小型渡轮15分钟，5欧元/人。小众海岛，植被繁茂，古老修道院</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">特色体验景点</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">剑舞表演场地</span>
                      <p className="text-sm text-gray-600">位于老城区城门附近，每天下午传统剑舞表演，免费观看，感受当地民俗魅力</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">杜布罗夫尼克老城区</span>
                      <p className="text-sm text-gray-600">距离约80公里，渡轮+大巴约2小时。世界文化遗产，厚重城墙环绕的中世纪古城</p>
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
                    <h5 className="font-medium">老城区内</h5>
                    <p>距离核心景点最近，步行即可抵达，多为传统石屋改造，氛围古朴浪漫，可深度感受中世纪街巷韵味</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">海滨沿岸</h5>
                    <p>视野开阔可欣赏海景，部分酒店设有海景露台，适合喜欢海景的游客，距离老城区约10-15分钟步行</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">岛屿周边村落</h5>
                    <p>性价比高，氛围静谧，适合喜欢安静、预算有限的游客，可乘坐观光巴士或出租车前往老城区</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">住宿类型推荐</h4>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">特色民宿</h5>
                    <p>老城区内有很多小众民宿，多由当地传统石屋改造，装修融合地中海风格与现代元素，40-80欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">自助公寓</h5>
                    <p>设施齐全，适合家庭或多人出行，30-60欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">精品海景酒店</h5>
                    <p>海滨沿岸有多家精品酒店，装修高端精致，部分设有私人海滩、海景泳池和露台，80-150欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">经济型酒店</h5>
                    <p>岛屿周边村落和老城区边缘有多家性价比高的酒店，设施标准化，干净整洁，20-45欧元/晚</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">预订注意事项</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 科尔丘拉岛旅游旺季为5-9月，游客较多，建议提前1-2个月预订</li>
                  <li>• 选择可免费取消的房源，以便灵活调整行程</li>
                  <li>• 自驾出行需确认住宿周边停车场位置与收费标准（5-10欧元/天）</li>
                  <li>• 老城区内的民宿多位于小巷深处，无电梯，携带大件行李需提前确认</li>
                  <li>• 春秋季（4-5月、9-10月）气候宜人，游客较少，住宿价格适中，是最佳时节</li>
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
                    <li>• 4-5月、9-10月：气候宜人，游客较少，住宿价格适中</li>
                    <li>• 5-9月：旅游旺季，活动丰富但游客较多</li>
                    <li>• 11-次年2月：旅游淡季，游客稀少，部分景点关闭</li>
                    <li>• 上午9:00-11:30：光线柔和，游客较少，便于拍摄</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">参观注意事项</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 老城区内路面多为石板路，部分路段较滑，建议穿舒适的防滑步行鞋</li>
                    <li>• 夏季海岛紫外线极强，需携带遮阳帽、防晒霜与饮用水</li>
                    <li>• 老城区内禁止大声喧哗、随意触摸建筑与文物</li>
                    <li>• 参观教堂时，需尊重当地宗教习俗，穿着得体</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">特色体验</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 登上圣马可教堂钟塔，360度俯瞰老城区与亚得里亚海</li>
                    <li>• 参观马可波罗故居与博物馆，探寻旅行家的足迹</li>
                    <li>• 漫步"思考之路"，感受中世纪街巷的地中海浪漫</li>
                    <li>• 在海滨步道欣赏澄澈海水与远处船只</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">实用信息</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 当地货币：欧元，部分地方支持克罗地亚库纳（1欧元≈7.5库纳）</li>
                    <li>• 语言：克罗地亚语，但旅游区英语基本通行</li>
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