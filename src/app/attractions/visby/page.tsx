import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '维斯比老城・Visby・瑞典・哥特兰岛 | 最佳欧洲景点',
  description: '探索维斯比老城，这座位于瑞典哥特兰岛的中世纪古城，以其保存完好的城墙、鹅卵石街道和历史建筑而闻名。',
}

export default function VisbyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '维斯比老城', href: '/attractions/visby' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">维斯比老城・Visby・瑞典・哥特兰岛</h1>
          <p className="text-lg text-gray-600 mb-6">
            维斯比老城是瑞典哥特兰岛上的一颗中世纪明珠，以其保存完好的城墙、鹅卵石街道和历史建筑而闻名。这座联合国教科文组织世界遗产城市展现了汉萨同盟时期的辉煌历史。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              维斯比老城位于瑞典哥特兰岛，是北欧保存最完好的中世纪城市之一。这座古城以其环绕城市的城墙、鹅卵石街道、古老的教堂废墟和玫瑰覆盖的小屋而闻名。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              维斯比的历史可以追溯到维京时代，但在汉萨同盟时期（12-14世纪）达到鼎盛。城市保留了中世纪的城市布局和建筑风格，被誉为"玫瑰之城"和"波罗的海的明珠"。
            </p>
            <p className="text-gray-700 leading-relaxed">
              老城的核心区域被3.5公里长的中世纪城墙环绕，城墙上有44座塔楼。城内有200多座中世纪建筑，包括15座教堂废墟，展现了丰富的历史文化遗产。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="维斯比老城" />
                <InfoRow label="英文名称" value="Visby Old Town" />
                <InfoRow label="地理位置" value="瑞典・哥特兰岛" />
                <InfoRow label="建造年代" value="公元11世纪" />
                <InfoRow label="景点级别" value="联合国教科文组织世界遗产" />
              </div>
              <div className="space-y-4">
                <InfoRow label="开放时间" value="全年开放" />
                <InfoRow label="门票价格" value="免费进入老城" />
                <InfoRow label="最佳游览" value="5月-9月" />
                <InfoRow label="游览时长" value="1-2天" />
                <InfoRow label="官方网站" value="www.gotland.net" />
              </div>
            </div>
          </Section>

          <Section title="3. 历史背景">
            <p className="text-gray-700 leading-relaxed mb-4">
              维斯比的历史可以追溯到维京时代，公元900年左右就有人类居住。城市在12世纪成为汉萨同盟的重要成员，是波罗的海地区最重要的贸易中心之一。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              1361年，丹麦国王瓦尔德玛四世征服哥特兰岛，维斯比成为丹麦的一部分。中世纪后期，城市逐渐衰落，但正是这种衰落使得中世纪的建筑得以完好保存。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              1645年，根据布朗塞布隆条约，哥特兰岛归属瑞典。19世纪以来，维斯比逐渐恢复生机，成为重要的文化和旅游中心。
            </p>
            <p className="text-gray-700 leading-relaxed">
              1995年，维斯比老城被联合国教科文组织列为世界遗产，被誉为"北欧保存最完好的中世纪商业城市"。
            </p>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">经典一日游路线</h4>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-medium">上午 (9:00-12:00):</span> 从港口出发 → 漫步城墙 → 参观圣玛丽大教堂 → 游览主要街道</p>
                  <p><span className="font-medium">中午 (12:00-14:00):</span> 在老城广场用餐 → 参观植物园</p>
                  <p><span className="font-medium">下午 (14:00-17:00):</span> 探索教堂废墟 → 参观博物馆 → 购物和咖啡时光</p>
                  <p><span className="font-medium">傍晚 (17:00-19:00):</span> 城墙漫步 → 观赏日落 → 晚餐</p>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">深度两日游路线</h4>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-medium">第一天:</span> 城墙完整游览 → 主要教堂参观 → 历史博物馆 → 老城区漫步</p>
                  <p><span className="font-medium">第二天:</span> 周边海滩 → 植物园深度游 → 手工艺品店 → 当地美食品尝</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照打卡点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">城墙全景</h4>
                  <p className="text-gray-700 text-sm">从城墙上的多个观景点可以拍摄到整个老城的全貌，特别是日落时分最为壮观。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">圣玛丽大教堂</h4>
                  <p className="text-gray-700 text-sm">哥特兰岛最大的教堂，其独特的建筑风格和玫瑰窗是绝佳的拍摄对象。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">鹅卵石街道</h4>
                  <p className="text-gray-700 text-sm">蜿蜒的中世纪街道，两旁是彩色的小屋，充满童话般的氛围。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">植物园</h4>
                  <p className="text-gray-700 text-sm">拥有200多种玫瑰的植物园，是拍摄花卉和自然景观的好地方。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">港口风光</h4>
                  <p className="text-gray-700 text-sm">维斯比港口的海景和老城天际线相映成趣，是经典的明信片画面。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">教堂废墟</h4>
                  <p className="text-gray-700 text-sm">15座教堂废墟各有特色，展现了中世纪宗教建筑的庄严与沧桑。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="6. 周边景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">哥特兰岛景点</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">Lummelunda洞穴</span>
                      <p className="text-sm text-gray-600">壮观的地下溶洞系统，距离维斯比约20公里</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">Tofta海滩</span>
                      <p className="text-sm text-gray-600">哥特兰岛最美丽的沙滩之一</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">Fårö岛</span>
                      <p className="text-sm text-gray-600">导演英格玛·伯格曼的故乡，独特的岩石地貌</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">文化体验</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">中世纪周</span>
                      <p className="text-sm text-gray-600">每年8月举办的大型中世纪文化节</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">手工艺品市场</span>
                      <p className="text-sm text-gray-600">传统瑞典手工艺品和当地特产</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">美食体验</span>
                      <p className="text-sm text-gray-600">品尝当地特色菜肴和海鲜</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿推荐">
            <div className="space-y-6">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">老城内部住宿</h4>
                <div className="space-y-3 text-gray-700">
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">中世纪风格酒店</h5>
                    <p className="text-sm">位于城墙内的精品酒店，保留中世纪建筑风格，价格较高但体验独特</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">家庭旅馆</h5>
                    <p className="text-sm">温馨的家庭式住宿，价格适中，可以体验当地生活</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">周边住宿选择</h4>
                <div className="space-y-3 text-gray-700">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">港口附近酒店</h5>
                    <p className="text-sm">海景房，交通便利，适合自驾游客</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">青年旅社</h5>
                    <p className="text-sm">经济实惠的选择，适合背包客和年轻游客</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">住宿贴士</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 夏季是旅游旺季，建议提前预订住宿</li>
                  <li>• 老城内的住宿价格较高，但体验更加authentic</li>
                  <li>• 考虑选择包含早餐的住宿，方便开始一天的游览</li>
                  <li>• 关注住宿的取消政策，灵活应对行程变化</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="8. 实用贴士">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">交通指南</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 从斯德哥尔摩乘飞机约1小时</li>
                    <li>• 从尼奈斯港乘渡轮约3.5小时</li>
                    <li>• 城内步行游览最佳</li>
                    <li>• 可租用自行车环岛游</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">最佳游览时间</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 5-9月：气候温和，玫瑰盛开</li>
                    <li>• 8月：中世纪周活动</li>
                    <li>• 避开冬季：天气寒冷，部分景点关闭</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">注意事项</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 鹅卵石路面，穿舒适的鞋子</li>
                    <li>• 夏季阳光强烈，注意防晒</li>
                    <li>• 尊重当地文化和历史遗迹</li>
                    <li>• 部分教堂废墟需要门票</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">特色体验</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 参加城墙导览游</li>
                    <li>• 品尝当地特色菜肴</li>
                    <li>• 购买手工艺品纪念品</li>
                    <li>• 观看中世纪表演</li>
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