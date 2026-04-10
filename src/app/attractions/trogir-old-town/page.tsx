import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '特罗吉尔古城・Trogir Old Town・克罗地亚・特罗吉尔 | 最佳欧洲景点',
  description: '探索特罗吉尔古城，这座镶嵌在亚得里亚海沿岸的中世纪明珠，以融合哥特式、文艺复兴式与巴洛克式的建筑风貌闻名于世。',
}

export default function TrogirOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '特罗吉尔古城', href: '/attractions/trogir-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">特罗吉尔古城・Trogir Old Town・克罗地亚・特罗吉尔</h1>
          <p className="text-lg text-gray-600 mb-6">
            特罗吉尔古城是一座镶嵌在亚得里亚海沿岸的中世纪明珠，以融合哥特式、文艺复兴式与巴洛克式的建筑风貌闻名于世。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              特罗吉尔古城是一座镶嵌在亚得里亚海沿岸的中世纪明珠，坐落于狭长小岛上，兼具历史厚重感与地中海浪漫气息。作为世界文化遗产，古城完整保留了中世纪的城市格局，石板街巷蜿蜒曲折，哥特式、文艺复兴式与巴洛克式建筑交相辉映，教堂、城堡、宫殿与民居错落分布，既有宗教建筑的庄严，也有海滨小城的灵动，是多元文化交融的缩影，静谧而鲜活，承载着克罗地亚千年的历史记忆与人文底蕴。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="特罗吉尔古城" />
                <InfoRow label="英文名称" value="Trogir Old Town" />
                <InfoRow label="全称" value="Historic City of Trogir" />
                <InfoRow label="国家" value="克罗地亚（Croatia）" />
                <InfoRow label="城市" value="特罗吉尔（Trogir）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="所属区域" value="达尔马提亚地区" />
                <InfoRow label="地理位置" value="亚得里亚海沿岸小岛" />
                <InfoRow label="世界遗产" value="1997年列入" />
                <InfoRow label="建筑风格" value="哥特式、文艺复兴式、巴洛克式融合" />
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">详细门票信息</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">古城整体：</span>免费开放</p>
                <p><span className="font-medium">圣劳伦斯大教堂：</span>约8欧元/人</p>
                <p><span className="font-medium">学生票：</span>4欧元/人（凭有效证件）</p>
                <p><span className="font-medium">儿童政策：</span>12岁以下儿童免费</p>
                <p><span className="font-medium">老人优惠：</span>65岁以上老人8折（6.4欧元/人）</p>
                <p><span className="font-medium">卡梅尔伦戈城堡：</span>约5欧元/人</p>
                <p><span className="font-medium">圣尼克劳斯修道院：</span>约4欧元/人</p>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-green-900 mb-3">交通指南</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">斯普利特机场：</span>→特罗吉尔（15分钟车程或20分钟出租车，约12欧元）</p>
                <p><span className="font-medium">斯普利特市区：</span>→特罗吉尔（40分钟大巴，8欧元，每30分钟1班）</p>
                <p><span className="font-medium">希贝尼克：</span>→特罗吉尔（40分钟大巴，8欧元）</p>
                <p><span className="font-medium">市内交通：</span>古城步行游览，观光巴士3欧元/天，出租车起步价3欧元</p>
                <p><span className="font-medium">停车场：</span>古城外专用停车场，收费约5欧元/天</p>
              </div>
            </div>
          </Section>

          <Section title="3. 历史背景">
            <p className="text-gray-700 leading-relaxed mb-4">
              特罗吉尔古城的历史可追溯至公元前3世纪，历经古希腊、古罗马、威尼斯共和国、奥匈帝国等多个政权的统治，见证了达尔马提亚地区千年的政权更迭与文化融合，是克罗地亚历史最悠久的古城之一，其城市格局与建筑遗存完整保留了中世纪的风貌，被誉为"中世纪城市的活化石"。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              公元前3世纪，古希腊人在这片狭长的海岛上建立了定居点，将其命名为"Tragurion"，意为"山羊岛"，当时这里是重要的海上贸易中转站，凭借优越的地理位置，逐渐发展成为亚得里亚海沿岸的重要城邦。古罗马统治时期，古城得到进一步发展，修建了道路、城墙、公共建筑等设施，奠定了如今的城市格局，当时的建筑风格以古罗马式为主，留存至今的古罗马城墙与石板路，依然能窥见当年的繁华。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              中世纪时期，特罗吉尔成为威尼斯共和国的领地，这一时期是古城发展的黄金时代，也是建筑艺术的鼎盛时期。威尼斯人对古城进行了大规模的修缮与扩建，将哥特式建筑风格引入古城，同时保留了古罗马与古希腊的建筑遗存，随后随着文艺复兴运动的兴起，文艺复兴式与巴洛克式建筑元素逐渐融入，形成了多元建筑风格交融的独特风貌。13世纪至15世纪，圣劳伦斯大教堂、卡梅尔伦戈城堡、市政厅等核心建筑相继建成，成为古城的标志性建筑，其中圣劳伦斯大教堂更是融合了哥特式与文艺复兴式风格，历经近200年建造完成，是达尔马提亚地区建筑艺术的典范。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              值得一提的是，特罗吉尔古城在历史上多次遭遇战乱与自然灾害，但凭借坚固的建筑与当地居民的保护，大部分建筑遗存得以完好保留。16世纪，威尼斯共和国对古城的城墙进行了加固，抵御了外敌入侵；19世纪，奥匈帝国统治时期，政府对古城的破损建筑进行了修复，严格遵循"修旧如旧"的原则，确保建筑原貌不被破坏；20世纪，克罗地亚独立后，政府将古城列为重点文物保护单位，投入大量资金进行系统性修缮，同时完善了周边的旅游配套设施，让这座千年古城重新焕发活力。
            </p>
            <p className="text-gray-700 leading-relaxed">
              此外，特罗吉尔古城还因独特的建筑风貌，成为众多影视作品的取景地，其中最著名的便是《权力的游戏》，古城内的石板街巷、教堂与城堡多次出现在剧中，成为全球权游粉丝的必访打卡地，进一步提升了其国际知名度。如今，这座千年古城不仅是克罗地亚的历史文化瑰宝，更是亚得里亚海沿岸多元文化交融的见证，每一条石板路、每一座建筑，都镌刻着岁月的沧桑与人文的温度，吸引着全球游客前来探寻其背后的历史故事。
            </p>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">经典步行游览路线</h4>
                <p className="text-gray-700 mb-4">全程适合半天至一天行程，节奏舒缓，兼顾打卡与深度体验</p>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">起点：特罗吉尔古城北入口</h5>
                    <p>设有游客中心，可领取导览手册、咨询游览路线，周边有停车场与特色商铺</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第一站：古城入口广场（步行即刻）</h5>
                    <p>广场上有古老雕塑与喷泉，周边环绕特色餐厅与纪念品商店，感受古城烟火气</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第二站：圣劳伦斯大教堂（步行2分钟）</h5>
                    <p>古城核心地标，可进入内部参观，欣赏哥特式与文艺复兴式融合建筑细节、壁画与雕塑</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第三站：市政厅与城市柱廊（步行1分钟）</h5>
                    <p>市政厅为巴洛克式建筑，城市柱廊保留中世纪风貌，是当年市民集会场所</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第四站：圣尼克劳斯修道院（步行3分钟）</h5>
                    <p>始建于14世纪，内部收藏14至18世纪画作与文物，氛围静谧，感受宗教文化庄严</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第五站：卡梅尔伦戈城堡（步行5分钟）</h5>
                    <p>位于古城南端海滨，中世纪防御城堡，保留完整防御体系，可登城墙欣赏海滨风光</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第六站：古城石板街巷漫步</h5>
                    <p>沿着蜿蜒石板街巷漫步，欣赏中世纪民居、特色民宿与小众商铺，感受当地日常生活</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第七站：海滨步道（步行3分钟）</h5>
                    <p>沿海岸线漫步，感受海风清凉，欣赏澄澈海水与远处船只，享受海滨静谧</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第八站：古城露天市集（步行可达）</h5>
                    <p>位于古城西侧，每周六开放，售卖新鲜海鲜、手工艺品与特色美食，品尝地道克罗地亚美食</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">终点：古城北入口（步行5分钟）</h5>
                    <p>出口处有公交站与出租车停靠点，可前往其他景点或返回住宿地点</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">温馨提示</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 古城内石板路狭窄且部分路段较滑，建议穿舒适的防滑步行鞋</li>
                  <li>• 参观教堂与修道院时，需穿着得体，避免过于暴露，尊重当地宗教习俗</li>
                  <li>• 禁止大声喧哗、随意触摸建筑与文物，禁止使用闪光灯拍摄内部文物</li>
                  <li>• 旺季（7-8月）游客较多，建议错峰前往，避免拥挤</li>
                  <li>• 夏季气温较高，紫外线较强，需携带遮阳帽、防晒霜与饮用水</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">圣劳伦斯大教堂塔楼顶层</h4>
                  <p className="text-gray-700 text-sm">拍摄古城全景最佳机位，360度俯瞰整个特罗吉尔古城、石板街巷、周边建筑与亚得里亚海。最佳时间：傍晚17:00-19:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">卡梅尔伦戈城堡城墙</h4>
                  <p className="text-gray-700 text-sm">拍摄古城与海景融合核心机位，可拍摄古城整体轮廓与蔚蓝亚得里亚海。最佳时间：上午10:00-11:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">古城石板街巷</h4>
                  <p className="text-gray-700 text-sm">拍摄复古人文风照片绝佳机位，狭窄石板路蜿蜒曲折，两侧中世纪石砌民居。最佳时间：上午9:00-10:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">海滨步道中段</h4>
                  <p className="text-gray-700 text-sm">拍摄古城侧面与海景经典机位，可拍摄古城石砌城墙、错落建筑与蔚蓝大海。最佳时间：午后14:00-16:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">圣劳伦斯大教堂正面广场</h4>
                  <p className="text-gray-700 text-sm">拍摄大教堂正面全景核心机位，哥特式尖拱、精美雕刻与文艺复兴式线条清晰可见。最佳时间：上午9:00-11:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">古城制高点观景台</h4>
                  <p className="text-gray-700 text-sm">免费开放机位，视野广阔，可拍摄古城与亚得里亚海全景。最佳时间：清晨8:30-9:30</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">拍照小贴士</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 最佳拍摄时间：清晨（8:30-10:30）和傍晚（17:00-19:00），光线柔和，游客较少</li>
                  <li>• 建议穿着纯色、简约风格衣物，如白色、米白色、浅蓝色，与复古建筑、蔚蓝大海形成呼应</li>
                  <li>• 拍摄建筑全景时可使用广角镜头，拍摄细节时可使用长焦镜头，突出建筑雕刻、石砌纹理</li>
                  <li>• 拍摄海景时，可利用水面倒影，增加画面层次感；教堂内部禁止使用闪光灯</li>
                  <li>• 禁止拍摄居民私人住宅与内部隐私区域，遵守当地规定</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">步行可达景点</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">契奥沃岛（Ciovo Island）</span>
                      <p className="text-sm text-gray-600">距离古城约1公里，步行15分钟。宁静海滨小岛，细腻沙滩与澄澈海水，免费开放</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">特罗吉尔海滨长廊</span>
                      <p className="text-sm text-gray-600">古城周边，步行3分钟。沿海岸线延伸，绿植、休息长椅与特色餐厅，免费开放</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">短途出行景点</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">斯普利特老城区</span>
                      <p className="text-sm text-gray-600">距离约30公里，大巴40分钟，8欧元。世界文化遗产，戴克里先宫为核心</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">克尔卡国家公园</span>
                      <p className="text-sm text-gray-600">距离约25公里，出租车30分钟或公交40分钟。克尔卡瀑布为核心，门票约8欧元/人</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">布拉克岛（Brač Island）</span>
                      <p className="text-sm text-gray-600">距离约40公里，渡轮1.5小时，16欧元/人。金角沙滩闻名，欧洲最美丽沙滩之一</p>
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
                    <h5 className="font-medium">古城内</h5>
                    <p>距离核心景点最近，步行即可抵达，多为传统石屋改造，氛围古朴静谧，可深度感受中世纪街巷韵味</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">海滨沿岸</h5>
                    <p>视野开阔可欣赏海景，部分酒店设有海景露台，适合喜欢海景的游客，距离古城约10-15分钟步行</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">市区周边</h5>
                    <p>性价比高，价格相对实惠，适合预算有限的游客，可乘坐公交或出租车前往古城，车程约5-10分钟</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">契奥沃岛</h5>
                    <p>宁静氛围，特色民宿与度假酒店，适合喜欢安静、想深度感受海岛风情的游客</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">住宿类型推荐</h4>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">特色民宿</h5>
                    <p>古城内有很多小众民宿，多由当地传统石屋改造，装修融合地中海风格与现代元素，30-70欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">自助公寓</h5>
                    <p>设施齐全，适合家庭或多人出行，25-60欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">精品海景酒店</h5>
                    <p>海滨沿岸与契奥沃岛上有多家精品酒店，装修高端精致，部分设有私人海滩、海景泳池和露台，70-130欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">经济型酒店</h5>
                    <p>市区周边和古城边缘有多家性价比高的酒店，设施标准化，干净整洁，18-35欧元/晚</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">预订注意事项</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 特罗吉尔旅游旺季为5-9月，尤其是7-8月，游客较多，建议提前1-2个月预订</li>
                  <li>• 选择可免费取消的房源，以便灵活调整行程</li>
                  <li>• 自驾出行需确认住宿周边停车场位置与收费标准（4-9欧元/天）</li>
                  <li>• 古城内的民宿多位于小巷深处，无电梯，携带大件行李需提前确认</li>
                  <li>• 春秋季（4-5月、9-10月）气候最宜人，游客较少，住宿价格适中，是最佳时节</li>
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
                    <li>• 古城内石板路狭窄且部分路段较滑，建议穿舒适的防滑步行鞋</li>
                    <li>• 参观教堂与修道院时，需穿着得体，避免过于暴露，尊重当地宗教习俗</li>
                    <li>• 禁止大声喧哗、随意触摸建筑与文物，禁止使用闪光灯拍摄内部文物</li>
                    <li>• 旺季（7-8月）游客较多，建议错峰前往，避免拥挤</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">特色体验</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 登上圣劳伦斯大教堂塔楼，360度俯瞰古城与亚得里亚海全景</li>
                    <li>• 漫步古城石板街巷，感受多元建筑风格交融的独特魅力</li>
                    <li>• 参观卡梅尔伦戈城堡，体验中世纪军事防御氛围</li>
                    <li>• 在海滨步道欣赏澄澈海水与远处船只，享受地中海海滨静谧</li>
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