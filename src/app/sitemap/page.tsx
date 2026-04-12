import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '网站地图 | 最佳欧洲景点',
  description: '最佳欧洲景点网站完整导航，包含100个欧洲旅游景点的详细页面链接，涵盖法国、意大利、西班牙、德国等欧洲国家的历史古迹、城堡、修道院和自然景观。',
}

interface AttractionGroup {
  region: string
  attractions: Array<{
    name: string
    englishName: string
    slug: string
    country: string
    city: string
    type: string
  }>
}

async function getAttractions(): Promise<AttractionGroup[]> {
  const attractions = await import('@/data/attractions.json').then(m => m.default)
  
  // 按地区分组
  const groups = attractions.reduce((acc: Record<string, typeof attractions>, attraction) => {
    const region = attraction.region || '其他'
    if (!acc[region]) {
      acc[region] = []
    }
    acc[region].push(attraction)
    return acc
  }, {})
  
  // 转换为数组并排序
  return Object.entries(groups)
    .map(([region, attractions]) => ({
      region,
      attractions: attractions.sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'))
    }))
    .sort((a, b) => a.region.localeCompare(b.region, 'zh-CN'))
}

export default async function SitemapPage() {
  const attractionGroups = await getAttractions()
  const totalAttractions = attractionGroups.reduce((sum, group) => sum + group.attractions.length, 0)
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '网站地图', href: '/sitemap' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">网站地图</h1>
          <p className="text-lg text-gray-600 mb-6">
            欢迎来到最佳欧洲景点！这里汇集了100个欧洲各地的历史古迹、自然风光和文化景点，为您提供详细的旅游攻略和实用信息。
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800 font-medium">
              🎯 当前收录景点总数：<span className="text-2xl font-bold">{totalAttractions}</span> 个
            </p>
            <p className="text-blue-600 text-sm mt-2">
              涵盖 {attractionGroups.length} 个欧洲国家及地区，包括城堡、修道院、古城、遗址、自然景观等多种类型
            </p>
          </div>
        </div>

        {/* 快速导航区域 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              🏰 城堡要塞
            </h2>
            <p className="text-sm text-gray-600 mb-3">中世纪城堡、军事要塞、防御工事</p>
            <div className="text-2xl font-bold text-blue-600">
              {attractionGroups.reduce((sum, group) => 
                sum + group.attractions.filter(a => a.type.includes('城堡') || a.type.includes('要塞')).length, 0
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              ⛪ 宗教建筑
            </h2>
            <p className="text-sm text-gray-600 mb-3">修道院、大教堂、宗教圣地</p>
            <div className="text-2xl font-bold text-green-600">
              {attractionGroups.reduce((sum, group) => 
                sum + group.attractions.filter(a => a.type.includes('修道院') || a.type.includes('教堂')).length, 0
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              🏛️ 历史遗迹
            </h2>
            <p className="text-sm text-gray-600 mb-3">古罗马遗迹、古城遗址、考古发现</p>
            <div className="text-2xl font-bold text-purple-600">
              {attractionGroups.reduce((sum, group) => 
                sum + group.attractions.filter(a => a.type.includes('遗迹') || a.type.includes('古')).length, 0
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              🏘️ 古城小镇
            </h2>
            <p className="text-sm text-gray-600 mb-3">中世纪古城、历史街区、传统村落</p>
            <div className="text-2xl font-bold text-orange-600">
              {attractionGroups.reduce((sum, group) => 
                sum + group.attractions.filter(a => a.type.includes('古城') || a.type.includes('老城')).length, 0
              )}
            </div>
          </div>
        </div>

        {/* 按地区分类的完整景点列表 */}
        <div className="space-y-8">
          {attractionGroups.map((group) => (
            <div key={group.region} className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-3">{getRegionFlag(group.region)}</span>
                {group.region}地区景点
                <span className="ml-3 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {group.attractions.length} 个景点
                </span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {group.attractions.map((attraction) => (
                  <div key={attraction.slug} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow hover:border-blue-300">
                    <Link href={`/attractions/${attraction.slug}`} className="block">
                      <h3 className="font-semibold text-gray-900 hover:text-blue-600 mb-2 text-sm">
                        {attraction.name}
                      </h3>
                      <p className="text-xs text-gray-500 mb-2 font-medium">
                        {attraction.englishName}
                      </p>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-gray-600">
                          {attraction.country}
                        </span>
                        <span className="text-xs text-gray-500">
                          {attraction.city}
                        </span>
                      </div>
                      <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                        {attraction.type}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 主要功能页面区域 */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">网站功能页面</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🏠</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">首页</h3>
              <p className="text-sm text-gray-600 mb-4">
                欧洲最佳景点推荐与概览
              </p>
              <Link 
                href="/" 
                className="inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
              >
                访问首页
              </Link>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">景点列表</h3>
              <p className="text-sm text-gray-600 mb-4">
                浏览所有欧洲旅游景点
              </p>
              <Link 
                href="/attractions" 
                className="inline-block px-4 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors"
              >
                查看景点
              </Link>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">隐私政策</h3>
              <p className="text-sm text-gray-600 mb-4">
                个人信息保护政策说明
              </p>
              <Link 
                href="/privacy-policy" 
                className="inline-block px-4 py-2 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700 transition-colors"
              >
                查看政策
              </Link>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">📄</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">服务条款</h3>
              <p className="text-sm text-gray-600 mb-4">
                网站使用条款与条件
              </p>
              <Link 
                href="/terms-of-service" 
                className="inline-block px-4 py-2 bg-orange-600 text-white text-sm rounded-md hover:bg-orange-700 transition-colors"
              >
                查看条款
              </Link>
            </div>
          </div>
        </div>

        {/* 页脚说明 */}
        <div className="mt-12 text-center text-gray-600 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">关于最佳欧洲景点</h3>
          <p className="mb-4">
            本网站致力于为您提供最全面、最详细的欧洲旅游景点信息，涵盖历史古迹、自然风光、文化景观等各类景点。
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-6 text-sm">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">🌍 覆盖广泛</h4>
              <p>涵盖欧洲30+国家及地区的100个精选景点</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">📖 内容详实</h4>
              <p>每个景点包含8大板块的详细旅游信息</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">🎯 实用性强</h4>
              <p>提供交通、住宿、拍照等实用旅游攻略</p>
            </div>
          </div>
          <p className="text-sm mt-6">
            如有任何问题或建议，欢迎通过网站联系方式与我们取得联系
          </p>
        </div>
      </div>
    </div>
  )
}

// 辅助函数：获取地区旗帜图标
function getRegionFlag(region: string): string {
  const flags: Record<string, string> = {
    '法国': '🇫🇷',
    '意大利': '🇮🇹',
    '西班牙': '🇪🇸',
    '葡萄牙': '🇵🇹',
    '德国': '🇩🇪',
    '奥地利': '🇦🇹',
    '瑞士': '🇨🇭',
    '比利时': '🇧🇪',
    '荷兰': '🇳🇱',
    '卢森堡': '🇱🇺',
    '英国': '🇬🇧',
    '爱尔兰': '🇮🇪',
    '丹麦': '🇩🇰',
    '挪威': '🇳🇴',
    '瑞典': '🇸🇪',
    '芬兰': '🇫🇮',
    '冰岛': '🇮🇸',
    '捷克': '🇨🇿',
    '斯洛伐克': '🇸🇰',
    '波兰': '🇵🇱',
    '匈牙利': '🇭🇺',
    '斯洛文尼亚': '🇸🇮',
    '克罗地亚': '🇭🇷',
    '波黑': '🇧🇦',
    '塞尔维亚': '🇷🇸',
    '黑山': '🇲🇪',
    '北马其顿': '🇲🇰',
    '阿尔巴尼亚': '🇦🇱',
    '希腊': '🇬🇷',
    '罗马尼亚': '🇷🇴',
    '保加利亚': '🇧🇬',
    '爱沙尼亚': '🇪🇪',
    '拉脱维亚': '🇱🇻',
    '立陶宛': '🇱🇹',
    '马耳他': '🇲🇹',
    '塞浦路斯': '🇨🇾',
    '其他': '🌍'
  }
  return flags[region] || '🌍'
}