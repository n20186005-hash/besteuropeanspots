import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/Breadcrumb'
import fs from 'fs'
import path from 'path'
import { getCountrySlug } from '@/lib/countries'

export const metadata: Metadata = {
  title: '网站地图 | 最佳欧洲景点',
  description: '最佳欧洲景点网站完整导航，包含欧洲旅游景点的详细页面链接，涵盖法国、意大利、西班牙、德国等欧洲国家的历史古迹、城堡、修道院和自然景观。',
}

interface RegionGroup {
  region: string
  count: number
  countries: Array<{
    name: string
    slug: string
    count: number
  }>
}

async function getRegionGroups(): Promise<RegionGroup[]> {
  const filePath = path.join(process.cwd(), 'src', 'data', 'attractions.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const attractions = JSON.parse(fileContents) as Array<{
    country: string
    type: string
    region: string
  }>
  
  const groups = attractions.reduce((acc: Record<string, Record<string, number>>, attraction) => {
    const region = attraction.region || '其他'
    const country = attraction.country || '其他'
    if (!acc[region]) {
      acc[region] = {}
    }
    acc[region][country] = (acc[region][country] || 0) + 1
    return acc
  }, {})
  
  return Object.entries(groups)
    .map(([region, countriesMap]) => ({
      region,
      count: Object.values(countriesMap).reduce((sum, count) => sum + count, 0),
      countries: Object.entries(countriesMap)
        .map(([name, count]) => ({
          name,
          slug: getCountrySlug(name),
          count
        }))
        .sort((a, b) => b.count - a.count)
    }))
    .sort((a, b) => b.count - a.count)
}

async function getStats() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'attractions.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const attractions = JSON.parse(fileContents) as Array<{ type: string }>
  
  return {
    total: attractions.length,
    castle: attractions.filter(a => (a.type || '').includes('城堡') || (a.type || '').includes('要塞')).length,
    religion: attractions.filter(a => (a.type || '').includes('修道院') || (a.type || '').includes('教堂')).length,
    ruins: attractions.filter(a => (a.type || '').includes('遗迹') || (a.type || '').includes('古')).length,
    town: attractions.filter(a => (a.type || '').includes('古城') || (a.type || '').includes('老城')).length,
  }
}

export default async function SitemapPage() {
  const regionGroups = await getRegionGroups()
  const stats = await getStats()
  
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
            欢迎来到最佳欧洲景点！这里汇集了欧洲各地的历史古迹、自然风光和文化景点，为您提供详细的旅游攻略和实用信息。
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800 font-medium">
              🎯 当前收录景点总数：<span className="text-2xl font-bold">{stats.total}</span> 个
            </p>
            <p className="text-blue-600 text-sm mt-2">
              涵盖 {regionGroups.length} 个欧洲地区，包括城堡、修道院、古城、遗址、自然景观等多种类型
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
              {stats.castle}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              ⛪ 宗教建筑
            </h2>
            <p className="text-sm text-gray-600 mb-3">修道院、大教堂、宗教圣地</p>
            <div className="text-2xl font-bold text-green-600">
              {stats.religion}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              🏛️ 历史遗迹
            </h2>
            <p className="text-sm text-gray-600 mb-3">古罗马遗迹、古城遗址、考古发现</p>
            <div className="text-2xl font-bold text-purple-600">
              {stats.ruins}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              🏘️ 古城小镇
            </h2>
            <p className="text-sm text-gray-600 mb-3">中世纪古城、历史街区、传统村落</p>
            <div className="text-2xl font-bold text-orange-600">
              {stats.town}
            </div>
          </div>
        </div>

        {/* 按地区分类的国家列表 */}
        <div className="space-y-8">
          {regionGroups.map((group) => (
            <div key={group.region} className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-3">{getRegionFlag(group.region)}</span>
                {group.region}地区景点
                <span className="ml-3 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {group.count} 个景点
                </span>
              </h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {group.countries.map((country) => (
                  <Link 
                    key={country.name}
                    href={`/destinations/${country.slug}`} 
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow hover:border-blue-300 block text-center"
                  >
                    <h3 className="font-semibold text-gray-900 hover:text-blue-600 mb-1 text-sm">
                      {country.name}
                    </h3>
                    <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium mt-1">
                      {country.count} 个景点
                    </span>
                  </Link>
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
              <div className="text-3xl mb-3">🗺️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">目的地</h3>
              <p className="text-sm text-gray-600 mb-4">
                按国家浏览所有景点
              </p>
              <Link 
                href="/destinations" 
                className="inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
              >
                查看目的地
              </Link>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">⭐</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">精选榜单</h3>
              <p className="text-sm text-gray-600 mb-4">
                各类主题的精选景点推荐
              </p>
              <Link 
                href="/collections" 
                className="inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
              >
                查看榜单
              </Link>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">📖</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">景点百科</h3>
              <p className="text-sm text-gray-600 mb-4">
                详细的景点介绍与历史背景
              </p>
              <Link 
                href="/category/encyclopedia" 
                className="inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
              >
                探索百科
              </Link>
            </div>
          </div>
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