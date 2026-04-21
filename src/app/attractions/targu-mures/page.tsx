import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '特尔古穆列什・Târgu Mureș・罗马尼亚・穆列什 | 最佳欧洲景点',
  description: '探索特尔古穆列什，这座位于罗马尼亚特兰西瓦尼亚中部的文化名城，以其宏伟的文化宫和独特的双语文化而闻名。',
}

export default function TarguMuresPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '罗马尼亚', href: '/destinations/romania' },
            { label: '特尔古穆列什', href: '/attractions/targu-mures' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">特尔古穆列什・Târgu Mureș・罗马尼亚・穆列什</h1>
          <p className="text-lg text-gray-600 mb-6">
            特尔古穆列什是特兰西瓦尼亚中部的文化名城，以宏伟的文化宫闻名遐迩。作为匈牙利族裔聚居城市，这里独特的双语文化氛围和传统美食为旅行增添了别样体验。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              特尔古穆列什是特兰西瓦尼亚中部的文化名城，以宏伟的文化宫闻名遐迩。文化宫建于1913年，采用新艺术风格，拥有令人叹为观止的彩绘玻璃穹顶和镜厅，是罗马尼亚新艺术建筑的巅峰之作。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              城市的玫瑰广场绿意盎然，中世纪堡垒保存完好。作为匈牙利族裔聚居城市，这里独特的双语文化氛围和传统美食为旅行增添了别样体验。
            </p>
            <p className="text-gray-700 leading-relaxed">
              特尔古穆列什融合了罗马尼亚和匈牙利两种文化，街头巷尾都能听到双语交谈，建筑风格也体现了这种多元文化的交融，是体验特兰西瓦尼亚地区独特文化魅力的绝佳目的地。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="特尔古穆列什" />
                <InfoRow label="英文名称" value="Târgu Mureș" />
                <InfoRow label="国家" value="罗马尼亚" />
                <InfoRow label="城市" value="穆列什" />
                <InfoRow label="建造年代" value="文化宫建于1913年" />
              </div>
              <div className="space-y-4">
                <InfoRow label="开放时间" value="文化宫周二至周五9:00–17:00，周末10:00–16:00" />
                <InfoRow label="闭馆时间" value="周一闭馆" />
                <InfoRow label="门票价格" value="文化宫成人票15 RON（约3 EUR）；城市堡垒免费" />
                <InfoRow label="建议游览" value="半天至1天" />
                <InfoRow label="最佳季节" value="5月至9月" />
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">详细门票信息</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">文化宫：</span>成人票15 RON（约3 EUR），需在入口处购票</p>
                <p><span className="font-medium">城市堡垒：</span>免费参观</p>
                <p><span className="font-medium">特色体验：</span>彩绘玻璃穹顶和镜厅参观</p>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-green-900 mb-3">交通指南</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">火车：</span>从克卢日-纳波卡乘火车约3小时</p>
                <p><span className="font-medium">大巴：</span>从锡比乌乘大巴约3小时</p>
                <p><span className="font-medium">飞机：</span>特尔古穆列什有国际机场，距市区约14公里</p>
              </div>
            </div>
          </Section>

          <Section title="3. 历史背景">
            <p className="text-gray-700 leading-relaxed mb-4">
              特尔古穆列什的历史可以追溯到中世纪时期，最初是特兰西瓦尼亚地区的一个重要商贸中心。由于其地处穆列什河畔的优越地理位置，逐渐成为连接匈牙利平原和特兰西瓦尼亚高原的重要枢纽。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              16世纪时，特尔古穆列什成为特兰西瓦尼亚公国的重要城市，在匈牙利王国和奥斯曼帝国的争夺中发挥了重要的军事和政治作用。城市的中世纪堡垒就是在这一时期修建的，用于防御外敌入侵。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              19世纪末至20世纪初，随着奥匈帝国的统治，特尔古穆列什经历了快速的城市发展。1913年建成的文化宫就是这一时期最重要的建筑成就，体现了新艺术风格的精髓，成为城市的新地标。
            </p>
            <p className="text-gray-700 leading-relaxed">
              20世纪以来，特尔古穆列什作为罗马尼亚和匈牙利文化交流的重要中心，保留了两国文化的特色。如今，这座城市以其独特的双语文化、新艺术建筑和传统美食，成为特兰西瓦尼亚地区文化旅游的重要目的地。
            </p>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">经典半日游路线</h4>
                <p className="text-gray-700 mb-4">适合时间有限的游客，重点参观文化宫和玫瑰广场</p>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p><span className="font-medium">上午 (9:00-12:00):</span> 文化宫参观 → 彩绘玻璃穹顶 → 镜厅 → 玫瑰广场漫步</p>
                  <p><span className="font-medium">中午 (12:00-14:00):</span> 广场周边用餐 → 品尝当地特色美食</p>
                  <p><span className="font-medium">下午 (14:00-16:00):</span> 中世纪堡垒 → 城市博物馆 → 购物和咖啡时光</p>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">深度一日游路线</h4>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p><span className="font-medium">上午:</span> 文化宫深度参观 → 新艺术建筑群 → 历史街区漫步</p>
                  <p><span className="font-medium">中午:</span> 传统餐厅用餐 → 品尝库尔特什卡拉奇</p>
                  <p><span className="font-medium">下午:</span> 中世纪堡垒 → 民族博物馆 → 手工艺品市场</p>
                  <p><span className="font-medium">傍晚:</span> 穆列什河畔漫步 → 欣赏日落美景</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">文化宫彩绘玻璃穹顶</h4>
                <p className="text-gray-700 text-sm">新艺术风格的杰作，彩色玻璃在阳光下呈现出绚丽的光影效果，是拍摄建筑艺术的最佳位置</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">玫瑰广场中央</h4>
                <p className="text-gray-700 text-sm">广场中央的喷泉和花坛，四周环绕着色彩缤纷的建筑，是拍摄城市风光的经典机位</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">中世纪堡垒城墙</h4>
                <p className="text-gray-700 text-sm">保存完好的中世纪防御工事，石砌城墙厚重古朴，可俯瞰整个城市风貌</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">穆列什河畔</h4>
                <p className="text-gray-700 text-sm">河畔的步行道和绿地，可拍摄城堡倒影和自然风光，黄昏时分尤为美丽</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">镜厅内部</h4>
                <p className="text-gray-700 text-sm">文化宫内的镜厅金碧辉煌，水晶吊灯和镜面装饰营造出奢华典雅的氛围</p>
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-purple-900 mb-3">拍照小贴士</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• 最佳拍摄时间：上午9:00-11:00和下午15:00-17:00，光线柔和</li>
                <li>• 文化宫内部拍摄需遵守规定，部分区域可能禁止拍照</li>
                <li>• 建议使用广角镜头拍摄建筑全景，长焦镜头捕捉细节</li>
                <li>• 傍晚时分可在河畔拍摄日落和城市剪影</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">市内景点</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">中世纪堡垒</span>
                      <p className="text-sm text-gray-600">保存完好的中世纪防御工事，可俯瞰城市全景</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">民族博物馆</span>
                      <p className="text-sm text-gray-600">展示特兰西瓦尼亚地区的民俗文化和传统手工艺品</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">手工艺品市场</span>
                      <p className="text-sm text-gray-600">当地传统手工艺品和纪念品，体验当地文化氛围</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">周边景点</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">锡比乌老城</span>
                      <p className="text-sm text-gray-600">约3小时车程，特兰西瓦尼亚地区的另一座历史名城</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">布拉索夫</span>
                      <p className="text-sm text-gray-600">约2.5小时车程，著名的黑教堂和议会广场所在地</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">穆列什河谷</span>
                      <p className="text-sm text-gray-600">自然风光优美，适合徒步和骑行活动</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿推荐">
            <div className="space-y-6">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">市中心住宿</h4>
                <div className="space-y-3 text-gray-700">
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">文化宫周边酒店</h5>
                    <p className="text-sm">步行即可到达主要景点，交通便利，部分酒店保留有新艺术风格装饰</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">玫瑰广场附近</h5>
                    <p className="text-sm">位于市中心核心区域，周边餐厅、咖啡馆和商店众多</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">特色住宿体验</h4>
                <div className="space-y-3 text-gray-700">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">历史建筑改造酒店</h5>
                    <p className="text-sm">由历史建筑改造而成，保留原有建筑特色，体验当地历史文化</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">家庭式民宿</h5>
                    <p className="text-sm">当地家庭经营的民宿，可深入了解当地生活方式和文化传统</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">预订建议</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 夏季（5-9月）是旅游旺季，建议提前2-3周预订住宿</li>
                  <li>• 选择可免费取消的房源，以便灵活调整行程</li>
                  <li>• 部分民宿房东会说双语，可咨询当地旅游信息</li>
                  <li>• 市中心住宿价格适中，性价比高于大城市</li>
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
                    <li>• 5月-9月：气候舒适，城市节庆活动多</li>
                    <li>• 7月-8月：文化活动和音乐节丰富</li>
                    <li>• 避开冬季：天气寒冷，部分景点可能关闭</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">语言提示</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 官方语言：罗马尼亚语和匈牙利语</li>
                    <li>• 旅游区英语基本通行</li>
                    <li>• 建议下载离线翻译工具</li>
                    <li>• 部分标识仅有当地语言</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">特色美食</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 库尔特什卡拉奇：传统匈牙利糕点</li>
                    <li>• 罗马尼亚炖菜：当地传统菜肴</li>
                    <li>• 特兰西瓦尼亚葡萄酒：当地特色酒品</li>
                    <li>• 匈牙利鱼汤：传统民族美食</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">实用信息</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 货币：罗马尼亚列伊（RON）</li>
                    <li>• 电压：230V，插头为Type F型</li>
                    <li>• 紧急电话：112</li>
                    <li>• 时区：东欧时间（EET）</li>
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