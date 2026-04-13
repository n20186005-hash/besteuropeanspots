import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/Breadcrumb'
import { AttractionGallery } from '@/components/AttractionGallery'
import { InfoRow } from '@/components/InfoRow'
import { Section } from '@/components/Section'

export const metadata: Metadata = {
  title: '派尔努老城旅游攻略 | 爱沙尼亚夏都 | 最佳欧洲景点',
  description: '派尔努老城是爱沙尼亚西南部的海滨温泉小镇，被誉为“爱沙尼亚的夏都”。这里保留了汉萨同盟时期成片的彩色木质建筑，依偎着波罗的海的细软白沙滩，天然温泉资源丰富，游客远少于塔林老城，节奏缓慢悠闲，是体验波罗的海小众度假风情的绝佳去处。',
}

export default function ParnuOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '派尔努老城', href: '/attractions/parnu-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="派尔努老城彩色木质建筑"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">派尔努老城</h1>
                <p className="text-xl">Pärnu Old Town</p>
                <p className="text-lg mt-2">爱沙尼亚的夏都 · 波罗的海小众度假胜地</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">基本信息</h2>
                <div className="space-y-3">
                  <InfoRow label="中文名称" value="派尔努老城" />
                  <InfoRow label="英文名称" value="Pärnu Old Town" />
                  <InfoRow label="国家" value="爱沙尼亚（Estonia）" />
                  <InfoRow label="城市" value="派尔努（Pärnu）" />
                  <InfoRow label="所属区域" value="爱沙尼亚西南部，派尔努县首府" />
                  <InfoRow label="地理位置" value="波罗的海派尔努湾沿岸" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">核心特色</h2>
                <div className="space-y-4">
                  <InfoRow label="历史地位" value="汉萨同盟重要贸易港口，爱沙尼亚传统夏都" />
                  <InfoRow label="文化地位" value="2024年欧洲文化之都塔尔图联动核心城市" />
                  <InfoRow label="核心特色" value="中世纪木质建筑、温泉养生、海滨风光、原生慢生活氛围" />
                  <InfoRow label="游客体验" value="游客远少于塔林老城，节奏缓慢悠闲，小众度假风情" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">开放时间</h2>
                <div className="space-y-3">
                  <InfoRow label="小镇本身" value="全年全天开放，无闭园时间" />
                  <InfoRow label="派尔努温泉浴场" value="5月1日至9月30日9:00-22:00；10月1日至次年4月30日10:00-20:00" />
                  <InfoRow label="派尔努博物馆" value="4月至10月10:00-18:00；11月至次年3月11:00-17:00（每周一闭馆）" />
                  <InfoRow label="圣伊丽莎白教堂" value="5月至9月10:00-18:00；10月至次年4月11:00-16:00" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">门票价格</h2>
                <div className="space-y-3">
                  <InfoRow label="派尔努温泉浴场" value="成人22欧元（含3小时体验），青少年14欧元，6-12岁儿童8欧元，5岁及以下免费" />
                  <InfoRow label="派尔努博物馆" value="成人6欧元，青少年3欧元，儿童免费" />
                  <InfoRow label="圣伊丽莎白教堂" value="免费参观，登塔3欧元" />
                  <InfoRow label="爱沙尼亚旅行通票" value="可享受门票7.5折优惠" />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">地址信息</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">派尔努老城</h3>
                  <p className="text-blue-800">Pärnu Old Town, 80010 Pärnu, Estonia</p>
                  <p className="text-sm text-blue-600 mt-1">核心区域：鲁特利大街至海滨大道之间</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">派尔努温泉浴场</h3>
                  <p className="text-green-800">Pärnu Rannahotell Spa, Ranna pst 1, 80012 Pärnu</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">派尔努博物馆</h3>
                  <p className="text-purple-800">Aia 18, 80010 Pärnu, Estonia</p>
                </div>
              </div>
            </div>

            <Section title="交通指南">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">🚂 火车</h3>
                  <p className="text-gray-700">从塔林乘火车约2小时直达派尔努火车站，步行15分钟即可进入老城</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">🚌 大巴</h3>
                  <p className="text-gray-700">从塔尔图乘大巴约2.5小时可达，大巴站就在老城边缘</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">🚗 自驾</h3>
                  <p className="text-gray-700">沿E67高速公路行驶，老城周边有多个免费和收费停车场</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                <p className="text-yellow-800"><strong>小镇内交通：</strong>公交1路、3路覆盖老城与海滨，单程1.5欧元，可上车现金购票</p>
              </div>
            </Section>

            <Section title="最佳游览季节">
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-900 mb-2">🌞 6-8月（最佳季节）</h3>
                  <p className="text-green-800">气温在18-25℃之间，海滨浴场全面开放，小镇会举办音乐节、啤酒节等各种活动，氛围最热闹</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-semibold text-blue-900 mb-2">🌸 5月 & 9月（次佳选择）</h3>
                  <p className="text-blue-800">人少安静，住宿价格便宜30%左右，适合喜欢慢游的游客</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
                  <h3 className="font-semibold text-gray-900 mb-2">❄️ 冬季</h3>
                  <p className="text-gray-800">可体验室内温泉和圣诞市集，但海滨活动全部暂停，白天时间较短</p>
                </div>
              </div>
            </Section>

            <Section title="建议游览时长">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">2-3小时</div>
                  <p className="text-blue-800">精华游，可逛完老城核心区域</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">4-5小时</div>
                  <p className="text-green-800">深度游，加入博物馆和温泉体验</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">1天</div>
                  <p className="text-purple-800">充分享受海滨和温泉，建议安排1天时间</p>
                </div>
              </div>
            </Section>

            <Section title="注意事项">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 text-xl">☀️</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">防晒必备</h4>
                      <p className="text-gray-700 text-sm">夏季波罗的海紫外线很强，即使阴天也要做好防晒</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-500 text-xl">🏖️</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">海边防风</h4>
                      <p className="text-gray-700 text-sm">海边风大，建议带一件薄外套</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-xl">♨️</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">温泉装备</h4>
                      <p className="text-gray-700 text-sm">温泉浴场需自带泳衣、毛巾和拖鞋，现场租赁一套要15欧元</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-brown-500 text-xl">👠</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">舒适鞋履</h4>
                      <p className="text-gray-700 text-sm">老城街巷多为凹凸不平的石板路，千万别穿高跟鞋</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-red-500 text-xl">🚭</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">禁烟规定</h4>
                      <p className="text-gray-700 text-sm">爱沙尼亚全国大部分公共场所禁止吸烟，违反会被罚款50欧元以上</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-purple-500 text-xl">🔇</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">安静环境</h4>
                      <p className="text-gray-700 text-sm">当地居民非常注重安静，晚上10点以后不要在居民区大声喧哗</p>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            <Section title="历史背景">
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  派尔努的历史最早可以追溯到13世纪，当时条顿骑士团在这里建立了城堡，随后加入汉萨同盟，成为波罗的海重要的木材和谷物贸易港口。因为当地木材资源极其丰富，几乎所有建筑都用木头建造，这也形成了派尔努老城独一无二的风貌。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  后来派尔努先后被瑞典、俄罗斯统治，19世纪时，俄罗斯贵族发现了这里的温泉资源和优美的海滨风光，纷纷在这里修建别墅和浴场，派尔努逐渐成为俄罗斯帝国的避暑胜地。当时很多著名的作家、音乐家都曾来这里度假，留下了不少故事。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  二战期间，派尔努老城幸运地躲过了大规模轰炸，大部分17、18世纪的木质建筑都完好保存了下来。现在走在老城的街巷里，你还能看到那些刷着彩色油漆的木屋，窗户上挂着蕾丝窗帘，门口种着绣球花和天竺葵，时间仿佛在这里慢了下来。如今派尔努依然是爱沙尼亚人最爱的度假地，每年夏天，很多北欧人也会开着房车来这里避暑，小镇没有过度商业化，保留着最纯粹的海滨小镇气息。
                </p>
              </div>
            </Section>

            <Section title="游览路线">
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">精华路线（2-3小时）</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <p className="text-gray-700">从火车站出发，步行10分钟到<strong>鲁特利大街</strong>，这是老城最主要的商业街，两边都是彩色的木质房子，有很多咖啡馆、纪念品店和面包店</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <p className="text-gray-700">走到大街中段就是<strong>圣伊丽莎白教堂</strong>，这是老城最高的建筑，白色的尖顶在红瓦屋顶中特别显眼。花3欧元登塔，能俯瞰整个老城的红瓦屋顶和远处的波罗的海</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <p className="text-gray-700">从教堂下来，步行5分钟到<strong>老城广场</strong>，广场中央有一个19世纪的喷泉，周围是露天餐厅</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                      <p className="text-gray-700">然后沿着海滨大道一直走到<strong>派尔努沙滩</strong>，沙滩是细腻的白色石英沙，踩上去特别软，夏天可以在这里游泳、晒太阳</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">深度路线（4-5小时）</h3>
                  <p className="text-gray-700 mb-4">在精华路线的基础上，增加派尔努博物馆、红塔和温泉体验：</p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">+</div>
                      <p className="text-gray-700"><strong>派尔努博物馆</strong>就在老城广场旁边，里面展示了当地从汉萨同盟时期到现在的历史，还有很多渔民和盐工的生活用品</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">+</div>
                      <p className="text-gray-700">步行10分钟到<strong>红塔</strong>，这是老城仅存的一座中世纪防御塔，现在里面有一个小型展览，展示了派尔努的防御历史</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">+</div>
                      <p className="text-gray-700">下午可以去<strong>派尔努温泉浴场</strong>体验3小时的温泉，这里的温泉水含有丰富的矿物质，对皮肤和关节都有好处</p>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            <Section title="拍照机位">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                  <div className="text-2xl mb-2">⛪</div>
                  <h4 className="font-semibold text-gray-900 mb-2">圣伊丽莎白教堂塔顶</h4>
                  <p className="text-gray-700 text-sm mb-2">俯瞰老城全景的最佳机位，成片的红瓦屋顶尽收眼底，远处是蓝色的波罗的海</p>
                  <p className="text-xs text-blue-600"><strong>最佳时间：</strong>上午9-11点，光线柔和</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-4 rounded-lg">
                  <div className="text-2xl mb-2">🏘️</div>
                  <h4 className="font-semibold text-gray-900 mb-2">鲁特利大街中段</h4>
                  <p className="text-gray-700 text-sm mb-2">木质房子颜色最鲜艳，鹅黄色、淡粉色、天蓝色的房子挨在一起，特别有童话感</p>
                  <p className="text-xs text-orange-600"><strong>最佳时间：</strong>正午，阳光充足</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-blue-100 p-4 rounded-lg">
                  <div className="text-2xl mb-2">🌊</div>
                  <h4 className="font-semibold text-gray-900 mb-2">海滨大道木栈道</h4>
                  <p className="text-gray-700 text-sm mb-2">以白色沙滩和蓝色大海为背景，画面特别干净</p>
                  <p className="text-xs text-cyan-600"><strong>最佳时间：</strong>傍晚6-7点，夕阳金色</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-4 rounded-lg">
                  <div className="text-2xl mb-2">⛲</div>
                  <h4 className="font-semibold text-gray-900 mb-2">老城广场喷泉</h4>
                  <p className="text-gray-700 text-sm mb-2">周围是彩色建筑和露天咖啡馆，能拍到很多人文瞬间</p>
                  <p className="text-xs text-green-600"><strong>最佳时间：</strong>上午10点，人少画面干净</p>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-pink-100 p-4 rounded-lg">
                  <div className="text-2xl mb-2">🏰</div>
                  <h4 className="font-semibold text-gray-900 mb-2">红塔旁的小巷</h4>
                  <p className="text-gray-700 text-sm mb-2">几乎没有游客，保留了最原始的中世纪风貌，细节特别丰富</p>
                  <p className="text-xs text-red-600"><strong>特色：</strong>阴天拍摄也很有复古感</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-100 p-4 rounded-lg">
                  <div className="text-2xl mb-2">🏊</div>
                  <h4 className="font-semibold text-gray-900 mb-2">温泉浴场露台</h4>
                  <p className="text-gray-700 text-sm mb-2">可以拍到温泉泳池和大海的结合，蓝色的泳池和蓝色的大海连成一片</p>
                  <p className="text-xs text-indigo-600"><strong>最佳时间：</strong>午后2-3点，波光粼粼</p>
                </div>
              </div>
            </Section>

            <Section title="附近景点">
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900 text-lg mb-2">🌲 索梅萨雷国家公园（30分钟车程）</h4>
                  <p className="text-gray-700 mb-2">最推荐的周边景点，有大片原始森林和沼泽，还有很长的海滨木栈道。运气好的话还能看到海豹在海边晒太阳，特别治愈。</p>
                  <p className="text-sm text-green-600">里面的徒步路线难度都不大，全家出游也完全没问题</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900 text-lg mb-2">🏛️ 卡德里奥格庄园（40分钟车程）</h4>
                  <p className="text-gray-700 mb-2">以前俄罗斯贵族的避暑别墅，巴洛克风格的建筑特别精致，庄园里的花园打理得很整齐，走在里面就像走进了油画里。</p>
                  <p className="text-sm text-blue-600">里面的博物馆展示了贵族当年的生活起居，拍照也很出片</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900 text-lg mb-2">🏰 维尔扬迪老城（1小时车程）</h4>
                  <p className="text-gray-700 mb-2">每年7月有中世纪节，来自欧洲各地的人穿着中世纪的服装，在街上表演剑术、舞蹈，还有很多传统美食摊。</p>
                  <p className="text-sm text-purple-600">平时去的话，这里也很安静，完整的城堡遗址能让人感受到中世纪的氛围</p>
                </div>
              </div>
            </Section>

            <Section title="住宿小贴士">
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">🏖️ 首选位置：海滨区</h4>
                  <p className="text-blue-800 mb-2">个人真心推荐海滨区，离沙滩就5分钟步行，早上拉开窗帘就能看到大海，傍晚吹着海风散步，特别惬意。</p>
                  <p className="text-sm text-blue-600">而且离温泉浴场也近，泡完温泉就能步行回去休息</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">💰 预算充足</h4>
                    <p className="text-green-800 text-sm">选海滨的温泉度假酒店，自带温泉泳池，不用额外花钱去温泉浴场，早上还能在海景餐厅吃早餐</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 mb-2">💳 预算中等</h4>
                    <p className="text-yellow-800 text-sm">选老城或海滨区之间的中端酒店，干净整洁，步行能到所有景点，每晚大概80欧元，还含早餐</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">🏠 预算有限</h4>
                    <p className="text-orange-800 text-sm">选当地的家庭民宿，大多是当地人自己住的房子改的，风格很温馨，有的还带厨房，淡季住一晚才40多欧元</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">🏨 青年旅社</h4>
                    <p className="text-purple-800 text-sm">适合独自旅行的年轻人，价格便宜，还能认识世界各地的朋友</p>
                  </div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-900 mb-2">⚠️ 重要提醒</h4>
                  <ul className="text-red-800 text-sm space-y-1">
                    <li>• 旺季6-8月一定要提前1-2个月订房，很多热门民宿提前半个月就订满了</li>
                    <li>• 爱沙尼亚的酒店和民宿几乎都不提供一次性洗漱用品，一定要提前准备好</li>
                    <li>• 入住时间一般是14点以后，退房是11点以前，想延迟退房要提前沟通</li>
                    <li>• 晚上10点以后一定要小声说话，当地人很注重休息</li>
                    <li>• 大部分酒店都是无烟酒店，房间里绝对不能抽烟，违反会被罚款</li>
                  </ul>
                </div>
              </div>
            </Section>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-2">本文由旅行作者 Winter Grady 实地走访整理</p>
                <p className="text-gray-500 text-xs">专注欧洲小众景点深度攻略，持续分享真实游览体验</p>
                <p className="text-gray-500 text-xs mt-2">本站内容仅供旅行参考使用，商务合作与转载事宜请通过联系页脚提交申请</p>
                <p className="text-gray-500 text-xs">管理团队保留所有内容版权，未经许可禁止搬运、摘抄或商用</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}