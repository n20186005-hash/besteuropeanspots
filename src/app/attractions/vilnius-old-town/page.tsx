import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/Breadcrumb'
import { AttractionGallery } from '@/components/AttractionGallery'
import { InfoRow } from '@/components/InfoRow'
import { Section } from '@/components/Section'

export const metadata: Metadata = {
  title: '维尔纽斯老城旅游攻略 | 东欧最大中世纪古城 | 最佳欧洲景点',
  description: '维尔纽斯老城是东欧最大的中世纪古城，被联合国教科文组织列为世界文化遗产，也是2009年欧洲文化之都核心组成部分。实地走下来，这里没有过度商业化的喧嚣，红瓦错落的巴洛克建筑、蜿蜒的石板小巷、静谧的教堂广场，藏着立陶宛最纯粹的中世纪烟火气，是慢逛感受东欧人文与历史的绝佳去处。',
}

export default function VilniusOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '维尔纽斯老城', href: '/attractions/vilnius-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1569003339424-1b5d9b6e8b5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="维尔纽斯老城红瓦屋顶全景"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">维尔纽斯老城</h1>
                <p className="text-xl">Vilnius Old Town</p>
                <p className="text-lg mt-2">东欧最大中世纪古城 · 世界文化遗产</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">基本信息</h2>
                <div className="space-y-3">
                  <InfoRow label="英文名称" value="Vilnius Old Town" />
                  <InfoRow label="国家" value="立陶宛（Lithuania）" />
                  <InfoRow label="城市" value="维尔纽斯（Vilnius）" />
                  <InfoRow label="所属区域" value="立陶宛维尔纽斯市核心区，濒临尼里斯河与维尔尼亚河交汇处" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">核心特色</h2>
                <div className="space-y-4">
                  <InfoRow label="历史地位" value="东欧最大中世纪古城、联合国教科文组织世界文化遗产" />
                  <InfoRow label="文化地位" value="2009年欧洲文化之都核心组成部分" />
                  <InfoRow label="建筑特色" value="红瓦错落的巴洛克建筑、蜿蜒的石板小巷、静谧的教堂广场" />
                  <InfoRow label="游览体验" value="没有过度商业化的喧嚣，藏着立陶宛最纯粹的中世纪烟火气" />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">开放时间</h2>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-900 mb-2">🏛️ 老城整体</h3>
                  <p className="text-green-800">全年全天开放，无闭园时间，街巷24小时可通行，夜间也很安全，亲测深夜漫步能感受到不一样的静谧氛围</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">格季米纳斯塔楼</h3>
                    <p className="text-blue-800 text-sm">4月至10月10:00-18:00，11月至次年3月10:00-16:00，每周一闭馆，亲测冬季会提前10分钟停止入场</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-900 mb-2">维尔纽斯大教堂</h3>
                    <p className="text-purple-800 text-sm">7:00-19:00，免费开放，内部教堂塔楼9:00-18:00开放，夏季会延长至19:00</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-orange-900 mb-2">琥珀博物馆</h3>
                    <p className="text-orange-800 text-sm">10:00-18:00，每周一闭馆，法定节假日正常开放，具体以现场公告为准</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-red-900 mb-2">种族屠杀受害者博物馆</h3>
                    <p className="text-red-800 text-sm">周三至周六10:00-18:00，周日10:00-17:00，周一、周二闭馆</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">门票价格</h2>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-900 mb-2">🎫 老城整体</h3>
                  <p className="text-green-800">免费开放，无需购买门票，随便逛随便拍，这一点真的很友好</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">格季米纳斯塔楼</h3>
                    <p className="text-blue-800 text-sm">成人5欧元，12-18岁青少年3欧元，6-11岁儿童1.5欧元，5岁及以下免费，登顶需额外支付2欧元，亲测登顶视野绝了，值得花费</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-900 mb-2">维尔纽斯大教堂塔楼</h3>
                    <p className="text-purple-800 text-sm">成人3欧元，青少年2欧元，儿童免费，内部有17座古老钟表，登顶可俯瞰老城全景</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-orange-900 mb-2">琥珀博物馆</h3>
                    <p className="text-orange-800 text-sm">成人8欧元，12-18岁青少年4欧元，6岁及以下免费，持有立陶宛旅行通票可享受8折优惠</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-red-900 mb-2">种族屠杀受害者博物馆</h3>
                    <p className="text-red-800 text-sm">成人4欧元（约31元人民币），青少年2欧元，儿童免费</p>
                  </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="font-semibold text-yellow-900 mb-2">💳 老城通票</h3>
                  <p className="text-yellow-800">30欧元/人，包含5个核心景点（格季米纳斯塔楼、琥珀博物馆、大教堂塔楼等），有效期3天，个人建议时间充裕的话买通票，比单独买省不少钱，亲测划算</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">地址信息</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">🏛️ 老城核心区域</h3>
                  <p className="text-blue-800">Senamiestis, Vilnius 01123, Lithuania</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">格季米纳斯塔楼</h3>
                  <p className="text-green-800">Arsenalo Gatvė 5, 01121 Vilnius</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">维尔纽斯大教堂</h3>
                  <p className="text-purple-800">Katedros aikštė 2, 01128 Vilnius</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-2">琥珀博物馆</h3>
                  <p className="text-orange-800">Stiklių Gatvė 12, 01123 Vilnius</p>
                </div>
              </div>
            </div>

            <Section title="交通指南">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">✈️ 外部交通</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">飞机</h4>
                      <p className="text-gray-700 text-sm mb-2">抵达维尔纽斯国际机场（Vilnius Airport），机场距离老城约6公里</p>
                      <p className="text-blue-800 text-sm">乘坐机场快线火车，每30分钟一班，行程10分钟，票价4.5欧元，直达维尔纽斯中央火车站，再步行20分钟即可到老城核心区</p>
                      <p className="text-red-600 text-xs mt-2">也可打车，车程约15分钟，费用70-105欧元，亲测不建议打车，性价比不高</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">火车</h4>
                      <p className="text-gray-700 text-sm mb-2">从立陶宛其他城市（如考纳斯）乘火车至维尔纽斯中央火车站</p>
                      <p className="text-green-800 text-sm">步行20分钟可达老城，沿途能看到很多当地居民的日常，慢慢走很有感觉</p>
                      <p className="text-blue-600 text-xs mt-2">从周边国家（如波兰华沙）乘火车，约4小时可达，火车站有寄存行李的地方，5欧元/件/天</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🚶 市内交通</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">老城内部</h4>
                      <p className="text-gray-700 text-sm">为步行街，车辆禁止通行，全程靠步行即可，实地走下来，核心区域不大，逛起来很轻松</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-900 mb-2">周边交通</h4>
                      <p className="text-gray-700 text-sm mb-2">从老城到特拉凯城堡，可在中央火车站旁乘坐28路公交</p>
                      <p className="text-orange-800 text-sm">车程40分钟，票价2欧元/人，也可拼车，人均10欧元，亲测公交很方便，就是班次不多，建议提前查好时刻表</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-red-900 mb-2">自驾</h4>
                      <p className="text-gray-700 text-sm mb-2">老城周边有多个收费停车场，一小时2欧元</p>
                      <p className="text-red-800 text-sm">建议把车停在老城外围，步行进入，避免找不到车位，亲测老城内部无法开车，只能步行或骑行</p>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            <Section title="最佳游览季节">
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-900 mb-2">🌸 5月底至6月、9月至10月初（最佳推荐）</h3>
                  <p className="text-green-800">个人建议优先选这两个时间段，是维尔纽斯的春秋季，气候舒适，气温在15-25℃之间，不冷不热，游客也不多，拍照不会全是人</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="font-semibold text-yellow-900 mb-2">☀️ 夏季（6-8月）</h3>
                  <p className="text-yellow-800">旅游旺季，气温在18-28℃，阳光充足，适合户外活动，但游客较多，部分景点需要排队，亲测中午11点到下午3点人流最大，建议避开这个时段</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-semibold text-blue-900 mb-2">❄️ 冬季（11月至次年3月）</h3>
                  <p className="text-blue-800">气温较低，多雪，最低气温可达-10℃，但老城被白雪覆盖，红瓦配白雪，氛围感拉满，适合喜欢安静、想拍雪景的游客，就是出门要穿厚一点，亲测羽绒服、雪地靴是必备的</p>
                </div>
              </div>
            </Section>

            <Section title="建议游览时长">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-3">2-3小时</div>
                  <h3 className="font-semibold text-blue-900 mb-2">精华游</h3>
                  <p className="text-blue-800 text-sm">时间紧张的话，足够逛完核心景点（市政厅广场、大教堂、格季米纳斯塔楼、老城小巷），适合一日游中转的游客</p>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-3">4-5小时</div>
                  <h3 className="font-semibold text-green-900 mb-2">深度游</h3>
                  <p className="text-green-800 text-sm">喜欢慢逛，想感受老城的烟火气，拍拍照、尝尝当地美食，建议安排4-5小时，深度游览琥珀博物馆、犹太区、圣灵教堂等景点</p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-3">住一晚</div>
                  <h3 className="font-semibold text-purple-900 mb-2">深度体验</h3>
                  <p className="text-purple-800 text-sm">时间充裕，建议住一晚，傍晚逛老城，感受夕阳下的红瓦屋顶，夜晚看老城的灯光，清晨避开人流，独享静谧的石板小巷</p>
                </div>
              </div>
            </Section>

            <Section title="注意事项">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="text-brown-500 text-xl">👟</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">舒适鞋履</h4>
                        <p className="text-gray-700 text-sm">老城的街巷多为石板路，高低不平，有些地方还很狭窄，一定要穿舒适的步行鞋，亲测穿高跟鞋真的会累到不行，还容易崴脚</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-purple-500 text-xl">⛪</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">教堂礼仪</h4>
                        <p className="text-gray-700 text-sm">进入教堂参观时，要注意着装得体，避免穿短裤、短裙、背心，最好带一件薄外套，教堂内温度较低</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-blue-500 text-xl">📸</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">拍照礼仪</h4>
                        <p className="text-gray-700 text-sm">部分教堂内部禁止拍照，拍照前一定要看现场提示，不要违规</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="text-green-500 text-xl">🗣️</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">语言沟通</h4>
                        <p className="text-gray-700 text-sm">当地官方语言是立陶宛语，旅游区工作人员基本会说英语，日常沟通没问题，但一些小众小店的老板可能只会说立陶宛语</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-yellow-500 text-xl">💰</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">货币支付</h4>
                        <p className="text-gray-700 text-sm">当地货币是欧元，现金和信用卡普遍接受，部分小店、摊位只收现金，建议提前换一些小额欧元</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-red-500 text-xl">🔇</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">保持安静</h4>
                        <p className="text-gray-700 text-sm">夜间老城很安静，游客要注意保持安静，避免大声喧哗，影响当地居民休息，亲测老城夜间治安很好，但还是建议尽量结伴而行</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-900 mb-2">⚠️ 建筑保护</h4>
                  <p className="text-red-800 text-sm">老城的建筑保护得非常严格，实行"修旧如旧"的原则，很多墙体、街巷都是历史遗迹，不要随意触摸、刻画，也不要乱扔垃圾，尊重当地的保护规定</p>
                </div>
              </div>
            </Section>

            <Section title="历史背景">
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  走在维尔纽斯老城的石板路上，脚下的每一块石头都藏着岁月的痕迹，这座古城的历史可追溯至新石器时代，当时就有人类在此定居，格季米纳斯山更是自那时起就成为了人类活动的核心区域。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  14世纪，维尔纽斯成为立陶宛大公国的首都，此后逐步发展成为东欧的重要城市，1387年，维尔纽斯大教堂建成，历经多次改建，融合了哥特式、文艺复兴和巴洛克风格，成为立陶宛天主教徒心中最重要的圣地，见证了立陶宛历史上的诸多重大事件。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  中世纪至文艺复兴时期，老城迎来了鼎盛时期，修建了大量的巴洛克式建筑、教堂和宫殿，逐渐形成了如今的规模，成为东欧最大的中世纪古城，当时这里商贾云集，文化繁荣，犹太区更是成为了重要的文化枢纽，有着"北方耶路撒冷"的美誉。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  近代以来，维尔纽斯历经战乱与更迭，先后被波兰、沙俄、德国占领，1944年后成为立陶宛苏维埃社会主义共和国的一部分，1990年立陶宛恢复独立后，维尔纽斯再次成为首都，老城也得到了全面的保护与修缮。如今的老城，依然住着约2.7万当地居民，他们祖祖辈辈生活在这里，保留着传统的生活方式，古老的建筑与现代的生活气息完美融合，走在街巷里，既能看到斑驳的中世纪城墙，也能看到热闹的咖啡馆、手作小店，那种时光沉淀的静谧与烟火气，让人忍不住放慢脚步。2009年，维尔纽斯老城作为核心组成部分，成为"欧洲文化之都"，向全球展示着东欧的历史与人文魅力。
                </p>
              </div>
            </Section>

            <Section title="游览路线">
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">精华路线（2-3小时，适合时间紧张的游客）</h3>
                  <p className="text-gray-700 mb-4">市政厅广场→维尔纽斯大教堂→格季米纳斯塔楼→老城小巷→琥珀博物馆（可选）</p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <p className="text-gray-700"><strong>市政厅广场</strong> - 这里是老城的核心，广场上有古朴的市政厅，周边是色彩鲜艳的巴洛克建筑，很多当地年轻人在这里散步、聊天，充满了烟火气，可停留15分钟</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <p className="text-gray-700"><strong>维尔纽斯大教堂</strong> - 免费进入，教堂内部庄严肃穆，彩色玻璃窗、精美的壁画都值得一看，教堂旁的钟楼可以登顶，3欧元就能俯瞰老城全景，建议停留30分钟</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <p className="text-gray-700"><strong>格季米纳斯塔楼</strong> - 乘坐电梯或爬楼梯登顶，这里是拍摄老城全景的最佳位置，能看到密密麻麻的红瓦屋顶和远处的河流、山峦，建议停留20分钟</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                      <p className="text-gray-700"><strong>老城小巷</strong> - 小巷蜿蜒曲折，两旁是特色小店、咖啡馆和民宿，偶尔能看到当地居民坐在门口晒太阳，随手一拍都是氛围感照片，建议停留40分钟</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">深度路线（4-5小时，适合喜欢慢逛的游客）</h3>
                  <p className="text-gray-700 mb-4">精华路线全部内容→圣灵教堂→犹太区→种族屠杀受害者博物馆→老城城墙遗址</p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">+</div>
                      <p className="text-gray-700"><strong>圣灵教堂</strong> - 这座教堂是老城最古老的教堂之一，内部的彩色玻璃窗和壁画非常精美，人很少，很安静，适合静下心来感受，建议停留20分钟</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">+</div>
                      <p className="text-gray-700"><strong>犹太区</strong> - 这里曾经是庞大的犹太社区，如今还保留着圣咏犹太教堂、大屠杀纪念馆和宽容中心，逛的时候建议保持安静，感受那段沉重的历史，建议停留40分钟</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">+</div>
                      <p className="text-gray-700"><strong>种族屠杀受害者博物馆</strong> - 这座建筑曾是克格勃的总部，馆内展示了二战至20世纪60年代被前苏联杀害、监禁的立陶宛人的相关物件，氛围比较沉重，建议停留30分钟</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">+</div>
                      <p className="text-gray-700"><strong>老城城墙遗址</strong> - 这里保留着中世纪的城墙残垣，傍晚时分，夕阳洒在城墙上，很有历史厚重感，可停留15分钟，拍拍照、结束一天的游览</p>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            <Section title="拍照机位">
              <div className="space-y-6">
                <p className="text-gray-700 mb-4">实地亲测，老城有6个绝佳拍照机位，不管是专业摄影师还是普通游客，都能拍出明信片级别的照片，每个机位都具体好操作，新手也能轻松驾驭。</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-orange-50 to-red-100 p-4 rounded-lg">
                    <div className="text-2xl mb-2">🏰</div>
                    <h4 className="font-semibold text-gray-900 mb-2">格季米纳斯塔楼山顶</h4>
                    <p className="text-gray-700 text-sm mb-2">这是拍摄老城全景的最佳机位，没有之一。从塔楼登顶后，能360度俯瞰整个老城，密密麻麻的红瓦屋顶、蜿蜒的小巷、远处的尼里斯河和山峦，画面层次丰富，氛围感拉满</p>
                    <p className="text-xs text-orange-600"><strong>最佳时间：</strong>傍晚17:00-18:00拍摄，夕阳西下，阳光将红瓦染成金橙色，光影效果绝佳</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-4 rounded-lg">
                    <div className="text-2xl mb-2">⛪</div>
                    <h4 className="font-semibold text-gray-900 mb-2">维尔纽斯大教堂门口台阶</h4>
                    <p className="text-gray-700 text-sm mb-2">机位在大教堂正门前的台阶上，以大教堂的白色立面和52米高的钟楼为背景，既能拍教堂的整体风貌，也能拍人物与教堂的合影</p>
                    <p className="text-xs text-blue-600"><strong>最佳时间：</strong>正午拍摄，阳光充足，能清晰展现教堂的细节和建筑线条</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-4 rounded-lg">
                    <div className="text-2xl mb-2">🏘️</div>
                    <h4 className="font-semibold text-gray-900 mb-2">老城小巷（Bernardinu Gatvė街）</h4>
                    <p className="text-gray-700 text-sm mb-2">这条街被称为"琥珀街"，两旁是古朴的木屋和手作琥珀店，石板路蜿蜒曲折，充满了中世纪的韵味</p>
                    <p className="text-xs text-green-600"><strong>最佳时间：</strong>清晨7:00-8:00拍摄，此时没有人流，薄雾朦胧，光线柔和</p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-4 rounded-lg">
                    <div className="text-2xl mb-2">⛲</div>
                    <h4 className="font-semibold text-gray-900 mb-2">市政厅广场喷泉旁</h4>
                    <p className="text-gray-700 text-sm mb-2">机位在广场中央的喷泉旁，以市政厅和周边的巴洛克建筑为背景，喷泉作为前景，既能拍建筑全景，也能拍人物与喷泉的互动</p>
                    <p className="text-xs text-yellow-600"><strong>最佳时间：</strong>午后14:00-15:00拍摄，阳光洒在喷泉上，波光粼粼</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-4 rounded-lg">
                    <div className="text-2xl mb-2">🌈</div>
                    <h4 className="font-semibold text-gray-900 mb-2">圣灵教堂窗口</h4>
                    <p className="text-gray-700 text-sm mb-2">机位在圣灵教堂内部的窗口，透过彩色玻璃窗拍摄窗外的石板小巷，阳光透过彩色玻璃，在墙上投射出斑斓的光影</p>
                    <p className="text-xs text-purple-600"><strong>最佳时间：</strong>午后拍摄，光线充足，光影效果最好</p>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-slate-100 p-4 rounded-lg">
                    <div className="text-2xl mb-2">🏛️</div>
                    <h4 className="font-semibold text-gray-900 mb-2">老城城墙遗址</h4>
                    <p className="text-gray-700 text-sm mb-2">机位在城墙遗址的残垣上，以城墙为前景，拍摄远处的老城建筑和红瓦屋顶，画面充满历史厚重感</p>
                    <p className="text-xs text-gray-600"><strong>最佳时间：</strong>黄昏拍摄，夕阳的余晖洒在城墙上，暖色调的光线让画面更有故事感</p>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-900 mb-2">📸 拍照小贴士</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• 老城建筑色彩丰富，穿搭建议以浅色系、纯色为主，避免花哨，拍出来更出片</li>
                    <li>• 老城区分街巷较窄，建议带广角镜头，更能捕捉街巷的纵深感</li>
                    <li>• 拍摄当地居民时，一定要提前征得同意，尊重当地习俗</li>
                    <li>• 傍晚拍摄时，光线较暗，记得带三脚架，保证画面清晰</li>
                  </ul>
                </div>
              </div>
            </Section>

            <Section title="附近景点">
              <div className="space-y-6">
                <p className="text-gray-700 mb-4">维尔纽斯老城位于维尔纽斯市核心区，周边景点丰富，距离都不远，交通便捷，逛完老城后，可顺路游览，适合搭配老城形成一日或两日游行程，亲测每个景点都有独特的魅力，值得一去。</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-900 mb-2">🏰 特拉凯城堡（40分钟车程）</h4>
                    <p className="text-blue-800 text-sm mb-2">坐28路公交可直达，门票12欧元/人，是立陶宛最著名的城堡之一，建在湖心岛上，红墙绿水，像走进了童话世界</p>
                    <p className="text-blue-600 text-xs">亲测坐轮渡上城堡，拍湖面倒影特别好看，城堡内部是博物馆，展示着古代服饰、武器等文物</p>
                    <p className="text-green-600 text-xs mt-2">提醒：建议早点去，避开人流，湖边风大，记得带件薄外套</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-900 mb-2">🎓 维尔纽斯大学（步行10分钟）</h4>
                    <p className="text-green-800 text-sm mb-2">免费开放，是欧洲最古老的大学之一，校园内有13个壮观的庭院，哥特式教学楼、彩色玻璃窗的图书馆，都非常出片</p>
                    <p className="text-green-600 text-xs">亲测校园里的小花园很适合发呆，午后坐在长椅上，感受校园的静谧</p>
                    <p className="text-orange-600 text-xs mt-2">注意：逛的时候注意不要打扰学生上课，保持安静</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border-l-4 border-purple-500">
                    <h4 className="font-semibold text-purple-900 mb-2">🕊️ 安塔卡尼斯墓地（15分钟车程）</h4>
                    <p className="text-purple-800 text-sm mb-2">免费开放，是东欧最美的墓地之一，位于绿树成荫的郊外，安葬着许多在冲突中牺牲的人</p>
                    <p className="text-purple-600 text-xs">亲测黄昏去最有意境，夕阳透过树叶洒在墓碑上，很有氛围感</p>
                    <p className="text-red-600 text-xs mt-2">提醒：逛的时候一定要保持肃穆</p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-semibold text-orange-900 mb-2">🏛️ 立陶宛国家博物馆（步行15分钟）</h4>
                    <p className="text-orange-800 text-sm mb-2">门票6欧元/人，展示着立陶宛从古代到现代的历史文物、艺术品，能更全面地了解立陶宛的历史与文化</p>
                    <p className="text-orange-600 text-xs">亲测馆内有中文导览手册，不用担心看不懂，建议安排1-2小时游览</p>
                    <p className="text-blue-600 text-xs mt-2">适合：带孩子的家庭</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg border-l-4 border-indigo-500">
                  <h4 className="font-semibold text-indigo-900 mb-3">🎈 热气球之旅（10分钟车程到起飞点）</h4>
                  <p className="text-indigo-800 text-sm mb-2">票价约700元/人，时长1小时，是俯瞰维尔纽斯全景的另一种方式</p>
                  <p className="text-indigo-600 text-xs">亲测清晨乘坐热气球，能看到薄雾中的老城和河流，像仙境一样，手里端着一杯香槟，氛围感拉满</p>
                  <p className="text-green-600 text-xs mt-2">建议：提前预订，避免当天没有名额</p>
                </div>
              </div>
            </Section>

            <Section title="住宿小贴士">
              <div className="space-y-6">
                <p className="text-gray-700 mb-4">亲测维尔纽斯老城的住宿选择很丰富，从高端酒店到经济型民宿应有尽有，不用愁没地方住，重点分享一些实用建议和避坑要点，帮大家少走弯路，兼顾便利性与舒适性。</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-3">📍 位置选择</h4>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded">
                        <h5 className="font-medium text-blue-800 text-sm mb-1">🏆 优先推荐：老城内部或周边500米</h5>
                        <p className="text-blue-700 text-xs">步行可达核心景点，不用来回奔波，早上可以早起逛无人的老城，傍晚可以慢慢感受老城的夜景，体验感最佳</p>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <h5 className="font-medium text-green-800 text-sm mb-1">💰 预算有限：火车站附近</h5>
                        <p className="text-green-700 text-xs">交通便捷，步行20分钟可达老城，周边有很多餐厅、便利店，生活方便，就是距离核心景点稍远</p>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <h5 className="font-medium text-red-800 text-sm mb-1">❌ 不建议：距离老城1公里以上</h5>
                        <p className="text-red-700 text-xs">来回跑会很麻烦，尤其是晚上，不太方便</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-3">📅 预订技巧</h4>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded">
                        <h5 className="font-medium text-orange-800 text-sm mb-1">🔥 旺季（6-8月）</h5>
                        <p className="text-orange-700 text-xs">提前1-2个月预订，不仅能选到心仪的房型，价格也更实惠，避免出现无房或价格暴涨的情况</p>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <h5 className="font-medium text-blue-800 text-sm mb-1">❄️ 淡季（11月至次年3月）</h5>
                        <p className="text-blue-700 text-xs">提前1-2周预订，价格相对便宜，部分酒店还会推出住宿+景点套票，性价比很高</p>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <h5 className="font-medium text-purple-800 text-sm mb-1">🔍 看评价重点</h5>
                        <p className="text-purple-700 text-xs">重点关注交通便利性、卫生情况和隔音效果，尤其是老建筑改造的民宿，隔音可能不好</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-900 mb-3">⚠️ 避坑要点</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <span className="text-red-500 text-sm">🏢</span>
                        <p className="text-red-800 text-sm">老城很多住宿都是老建筑改造的，部分民宿没有电梯，行李多的朋友一定要提前问清楚</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-red-500 text-sm">🧴</span>
                        <p className="text-red-800 text-sm">大部分酒店和民宿不提供一次性洗漱用品，牙刷、牙膏、拖鞋一定要自带</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-red-500 text-sm">🛣️</span>
                        <p className="text-red-800 text-sm">不要选靠近主干道的住宿，虽然交通方便，但晚上会有车辆噪音，影响休息</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <span className="text-red-500 text-sm">🍳</span>
                        <p className="text-red-800 text-sm">预订时要看清楚是否含早餐，立陶宛的餐饮价格不算便宜，含早餐的住宿性价比更高</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-red-500 text-sm">🕐</span>
                        <p className="text-red-800 text-sm">入住时间通常是14:00以后，退房时间是11:00以前，如需提前入住或延迟退房，一定要提前和酒店沟通</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-red-500 text-sm">🔇</span>
                        <p className="text-red-800 text-sm">老城内部的小巷住宿更安静，氛围感更好</p>
                      </div>
                    </div>
                  </div>
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