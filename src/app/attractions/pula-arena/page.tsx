import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '普拉竞技场・Pula Arena・克罗地亚・普拉 | 最佳欧洲景点',
  description: '探索普拉竞技场，这座世界上保存最完整的古罗马竞技场之一，承载着古罗马帝国的辉煌记忆。',
}

export default function PulaArenaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '普拉竞技场', href: '/attractions/pula-arena' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">普拉竞技场・Pula Arena・克罗地亚・普拉</h1>
          <p className="text-lg text-gray-600 mb-6">
            普拉竞技场是古罗马帝国时期遗留的圆形角斗场，建于公元前27年至公元68年，是世界上唯一完整保存了所有罗马建筑结构的竞技场。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              普拉竞技场是古罗马帝国时期遗留的圆形角斗场，建于公元前27年至公元68年，历时近百年建成，是世界上唯一完整保存了所有罗马建筑结构的竞技场，也是欧洲第三大古罗马竞技场。它矗立在普拉市中心，全部由石块筑成，呈椭圆形，规模恢弘，兼具军事防御与娱乐功能，如今既是展示古罗马建筑艺术的重要遗址，也是举办音乐会、歌剧等文化活动的重要场所，浓缩了普拉千年的历史与人文底蕴。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="普拉竞技场" />
                <InfoRow label="英文名称" value="Pula Arena" />
                <InfoRow label="全称" value="Amphitheatrum Pulaense" />
                <InfoRow label="国家" value="克罗地亚（Croatia）" />
                <InfoRow label="城市" value="普拉（Pula）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="所属区域" value="伊斯特拉半岛西南沿海" />
                <InfoRow label="建造年代" value="公元前27年-公元68年" />
                <InfoRow label="建筑特色" value="保存最完整的古罗马竞技场" />
                <InfoRow label="容量规模" value="可容纳2万余名观众" />
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">详细门票信息</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">成人门票：</span>约15欧元/人</p>
                <p><span className="font-medium">学生票：</span>7.5欧元/人（凭有效证件）</p>
                <p><span className="font-medium">儿童政策：</span>12岁以下儿童免费</p>
                <p><span className="font-medium">老人优惠：</span>65岁以上老人免费入场</p>
                <p><span className="font-medium">家庭套票：</span>2大1小约30欧元</p>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-green-900 mb-3">开放时间</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">4-5月：</span>8:00-21:00</p>
                <p><span className="font-medium">6-8月：</span>8:00-22:00（21:00停止入园）</p>
                <p><span className="font-medium">9月：</span>8:00-21:00</p>
                <p><span className="font-medium">10月：</span>8:00-19:00</p>
                <p><span className="font-medium">11月-次年3月：</span>9:00-17:00</p>
              </div>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-yellow-900 mb-3">交通指南</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">普拉机场：</span>→竞技场（15分钟车程或20分钟出租车，约10欧元）</p>
                <p><span className="font-medium">萨格勒布：</span>→普拉（4小时大巴，25欧元，每天8-10班）</p>
                <p><span className="font-medium">威尼斯：</span>→普拉（渡轮2.5小时，35欧元/人）</p>
                <p><span className="font-medium">市内交通：</span>步行10分钟可达，观光巴士4欧元/天</p>
                <p><span className="font-medium">停车场：</span>周边专用停车场，收费约6欧元/天</p>
              </div>
            </div>
          </Section>

          <Section title="3. 历史背景">
            <p className="text-gray-700 leading-relaxed mb-4">
              普拉竞技场的历史可追溯至古罗马帝国时期，其建造历程贯穿了奥古斯都与克劳狄乌斯两个王朝，是古罗马帝国在伊斯特拉半岛统治地位的重要象征，也是古罗马建筑艺术在巴尔干半岛的杰出代表，历经近2000年的沧桑，依然完整保留着当年的宏伟风貌，被誉为"古罗马帝国的活化石"。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              公元前27年，古罗马帝国征服伊斯特拉半岛后，普拉成为帝国在亚得里亚海东岸的重要军事要塞与商业重镇。为彰显帝国的强盛与威严，同时满足当地贵族与民众的娱乐需求，当时的统治者下令修建这座圆形竞技场，工程始于奥古斯都王朝，完成于克劳狄乌斯王朝，历时近百年，动用了大量的人力、物力与财力，全部采用当地出产的石灰岩砌筑而成，未使用一钉一铆，仅凭石块的咬合与重力稳固成型，展现了古罗马人高超的建筑技艺。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              在古罗马时期，普拉竞技场是举办角斗表演、野兽搏斗、战车比赛等娱乐活动的核心场所，可容纳2万余名观众，是当时伊斯特拉半岛最大的公共娱乐设施。角斗士们在这里奋力厮杀，野兽在这里激烈搏斗，战车在这里疾驰角逐，每一场表演都能引来全场观众的欢呼，成为古罗马人休闲娱乐、彰显力量的重要场所。除了娱乐功能，竞技场还兼具军事防御作用，其坚固的墙体与完善的防御体系，在战乱时期可作为防御工事，保护城内居民的安全。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              古罗马帝国衰落之后，普拉竞技场历经了多个政权的统治，先后被拜占庭帝国、威尼斯共和国、奥匈帝国等管辖，期间多次遭遇战乱、地震等自然灾害的破坏，但凭借其坚固的建筑结构与当地居民的保护，大部分建筑遗存得以完好保留。中世纪时期，威尼斯共和国统治普拉，曾将竞技场改为城堡，加固墙体、增设防御设施，用于抵御外敌入侵；16世纪，竞技场的部分石块被拆去修建普拉的教堂与城墙，导致其局部受损，但核心结构依然完整；19世纪，奥匈帝国统治时期，政府开始对竞技场进行系统性修复，严格遵循"修旧如旧"的原则，还原其古罗马时期的原貌；20世纪，克罗地亚独立后，将普拉竞技场列为国家级重点文物保护单位，投入大量资金进行修缮与保护，同时完善周边旅游配套设施，让这座千年古迹重新焕发活力。
            </p>
            <p className="text-gray-700 leading-relaxed">
              如今，普拉竞技场不仅是克罗地亚的历史文化瑰宝，也是全球古罗马文化爱好者的朝圣地，每年吸引着数百万游客前来参观。同时，它还是普拉重要的文化活动举办地，夏季经常举办音乐会、歌剧、芭蕾舞表演等活动，古老的竞技场与现代文化艺术碰撞，形成了独特的人文氛围，让千年古迹在新时代焕发新的生机。此外，普拉竞技场还因独特的建筑风貌，成为众多影视作品的取景地，进一步提升了其国际知名度，成为普拉乃至克罗地亚的城市名片。
            </p>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">经典步行游览路线</h4>
                <p className="text-gray-700 mb-4">全程建议安排2小时左右，节奏舒缓，兼顾打卡与深度体验</p>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">起点：普拉竞技场主入口</h5>
                    <p>设有游客中心，可领取导览手册、咨询游览路线，周边有纪念品商店与休息区</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第一站：竞技场广场（步行即刻）</h5>
                    <p>广场上有古罗马雕塑与绿植，可拍摄竞技场全景，感受宏伟气势</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第二站：竞技场底层</h5>
                    <p>角斗士、野兽待命区域，留存牢笼、休息室与通道，墙壁可见当年刻痕</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第三站：中层看台</h5>
                    <p>贵族与平民观赛区域，俯瞰竞技场内部全貌，欣赏石块砌筑的拱券结构</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第四站：顶层环形走廊</h5>
                    <p>拍摄普拉全景绝佳位置，270度俯瞰普拉市区、老城区与亚得里亚海</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第五站：竞技场博物馆（东侧）</h5>
                    <p>免费开放，收藏古罗马文物、角斗士武器、陶器等，参观时间约20分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第六站：普拉老城区漫步（步行5分钟）</h5>
                    <p>保留古罗马、拜占庭、威尼斯时期建筑，石板街巷蜿蜒，特色商铺遍布</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">终点：竞技场主入口（步行5分钟）</h5>
                    <p>出口处有公交站与出租车停靠点，可前往其他景点或返回住宿地点</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">温馨提示</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 竞技场内部石阶较陡，部分路段较滑，建议穿舒适的防滑步行鞋</li>
                  <li>• 参观底层通道时，光线较暗，可携带手电筒或打开手机手电筒</li>
                  <li>• 禁止大声喧哗、随意触摸建筑墙体与文物，禁止使用闪光灯拍摄文物</li>
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
                  <h4 className="font-semibold text-gray-900 mb-2">竞技场主入口广场</h4>
                  <p className="text-gray-700 text-sm">拍摄竞技场正面全景核心机位，灰白色石墙、高大拱券清晰可见。最佳时间：上午9:00-11:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">竞技场顶层环形走廊</h4>
                  <p className="text-gray-700 text-sm">拍摄普拉全景最佳机位，270度俯瞰普拉市区、老城区与亚得里亚海。最佳时间：傍晚17:00-19:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">竞技场中层看台</h4>
                  <p className="text-gray-700 text-sm">拍摄竞技场内部全景核心机位，俯瞰内部结构，欣赏拱券结构。最佳时间：上午10:00-11:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">竞技场底层通道</h4>
                  <p className="text-gray-700 text-sm">拍摄氛围感大片绝佳机位，狭窄通道、斑驳石墙、昏暗光线。建议穿着深色衣物形成对比</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">普拉老城区街巷</h4>
                  <p className="text-gray-700 text-sm">拍摄街巷与竞技场同框照片，展现古今交融韵味。最佳时间：上午9:00-10:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">竞技场周边海滨步道</h4>
                  <p className="text-gray-700 text-sm">拍摄竞技场侧面与蔚蓝亚得里亚海，清新治愈画面。最佳时间：午后14:00-16:00</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">拍照小贴士</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 最佳拍摄时间：清晨（8:30-10:30）和傍晚（17:00-19:00），光线柔和，游客较少</li>
                  <li>• 建议穿着纯色、简约风格衣物，如白色、米白色、黑色，与灰白色石墙、蔚蓝大海形成呼应</li>
                  <li>• 拍摄建筑全景时可使用广角镜头，拍摄细节时可使用长焦镜头，突出石墙纹理、拱券结构</li>
                  <li>• 拍摄底层通道时，可利用光影对比，增强画面氛围感</li>
                  <li>• 禁止拍摄文物内部敏感区域，遵守当地规定，尊重历史遗存</li>
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
                      <span className="font-medium">普拉老城区</span>
                      <p className="text-sm text-gray-600">距离竞技场约5分钟步行路程，保留古罗马、拜占庭、威尼斯时期建筑，免费开放</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">罗马神庙（Temple of Augustus）</span>
                      <p className="text-sm text-gray-600">距离竞技场约8分钟步行路程，建于公元前2年，门票约3欧元/人</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">巴拉克拉瓦海滩（Bacvice Beach）</span>
                      <p className="text-sm text-gray-600">距离竞技场约15分钟步行路程，沙滩细腻，海水澄澈湛蓝，免费开放</p>
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
                      <span className="font-medium">普拉城堡（Pula Castle）</span>
                      <p className="text-sm text-gray-600">距离竞技场约10分钟步行路程，中世纪城堡，门票约5欧元/人</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">罗维尼小镇（Rovinj）</span>
                      <p className="text-sm text-gray-600">距离普拉约40公里，大巴1小时，票价约8欧元，伊斯特拉半岛最美海滨小镇之一</p>
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
                    <h5 className="font-medium">竞技场周边或老城区</h5>
                    <p>距离核心景点最近，步行即可抵达，多为传统石屋改造，氛围古朴静谧</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">海滨沿岸</h5>
                    <p>视野开阔可欣赏海景，部分酒店设有海景露台，距离竞技场约10-15分钟步行</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">市区周边</h5>
                    <p>性价比高，价格相对实惠，可乘坐公交或出租车前往竞技场，车程约5-10分钟</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">住宿类型推荐</h4>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">特色民宿</h5>
                    <p>老城区与竞技场周边有很多小众民宿，多由当地传统石屋改造，装修融合古罗马元素与地中海风格，35-80欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">自助公寓</h5>
                    <p>设施齐全，适合家庭或多人出行，30-70欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">精品海景酒店</h5>
                    <p>海滨沿岸有多家精品酒店，装修高端精致，部分设有私人海滩、海景泳池和露台，80-140欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">经济型酒店</h5>
                    <p>市区周边和竞技场边缘有多家性价比高的酒店，设施标准化，干净整洁，20-40欧元/晚</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">预订注意事项</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 普拉旅游旺季为5-9月，尤其是7-8月，游客较多，建议提前1-2个月预订</li>
                  <li>• 选择可免费取消的房源，以便灵活调整行程</li>
                  <li>• 自驾出行需确认住宿周边停车场位置与收费标准（5-10欧元/天）</li>
                  <li>• 老城区内的民宿多位于小巷深处，无电梯，携带大件行李需提前确认</li>
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
                    <li>• 竞技场内部石阶较陡，部分路段较滑，建议穿舒适的防滑步行鞋</li>
                    <li>• 参观底层通道时，光线较暗，可携带手电筒或打开手机手电筒</li>
                    <li>• 禁止大声喧哗、随意触摸建筑墙体与文物，禁止使用闪光灯拍摄文物</li>
                    <li>• 旺季（7-8月）游客较多，建议错峰前往，避免拥挤</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">特色体验</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 登上竞技场顶层，270度俯瞰普拉市区、老城区与亚得里亚海全景</li>
                    <li>• 参观竞技场底层通道，感受古罗马角斗士待命的历史氛围</li>
                    <li>• 漫步普拉老城区，欣赏古罗马、拜占庭、威尼斯时期建筑</li>
                    <li>• 在竞技场博物馆深入了解古罗马时期的历史与文化</li>
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