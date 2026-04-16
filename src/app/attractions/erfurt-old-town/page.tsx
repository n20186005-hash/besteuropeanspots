import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃尔福特老城 Erfurt Old Town｜漫步中世纪“图林根罗马”，邂逅教堂与商桥的千年对话 - 最佳欧洲景点',
  description: '走进埃尔福特老城，就像一头扎进了一本保存完好的中世纪故事书。第一眼就会被大教堂山那对“双子星”——圣玛利亚大教堂和圣塞维里教堂震撼到，它们并肩矗立在台阶之上，气势恢宏。然后，你的目光一定会被那座独一无二的“商人桥”吸引，桥上密密麻麻盖满了彩色木筋房，里面住着人、开着店，桥下是潺潺流水，这可不是什么电...',
}

export default function ErfurtOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '埃尔福特老城', href: '/attractions/erfurt-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">埃尔福特老城・Erfurt Old Town・德国・埃尔福特</h1>
          <p className="text-lg text-gray-600 mb-6">
            走进埃尔福特老城，就像一头扎进了一本保存完好的中世纪故事书。第一眼就会被大教堂山那对“双子星”——圣玛利亚大教堂和圣塞维里教堂震撼到，它们并肩矗立在台阶之上，气势恢宏。然后，你的目光一定会被那座独一无二的“商人桥”吸引，桥上密密麻麻盖满了彩色木筋房，里面住着人、开着店，桥下是潺潺流水，这可不是什么电影布景，是真实生活了数百年的“水上社区”。在老城石板路上闲逛，两边是各种糖果色的文艺复兴和哥特式建筑，转角可能就遇上一个宁静的修道院庭院。这里的氛围特别奇妙，既有厚重的历史感，又充满了活生生的烟火气，像个低调而华丽的宝藏小城。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">走进埃尔福特老城，就像一头扎进了一本保存完好的中世纪故事书。第一眼就会被大教堂山那对“双子星”——圣玛利亚大教堂和圣塞维里教堂震撼到，它们并肩矗立在台阶之上，气势恢宏。然后，你的目光一定会被那座独一无二的“商人桥”吸引，桥上密密麻麻盖满了彩色木筋房，里面住着人、开着店，桥下是潺潺流水，这可不是什么电影布景，是真实生活了数百年的“水上社区”。在老城石板路上闲逛，两边是各种糖果色的文艺复兴和哥特式建筑，转角可能就遇上一个宁静的修道院庭院。这里的氛围特别奇妙，既有厚重的历史感，又充满了活生生的烟火气，像个低调而华丽的宝藏小城。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="埃尔福特老城" />
                <InfoRow label="英文名称" value="Erfurt Old Town" />
                <InfoRow label="正式名称" value="Erfurt Old Town" />
                <InfoRow label="国家" value="德国" />
                <InfoRow label="城市" value="埃尔福特" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="公共区域全天开放。内部景点（如大教堂、商人桥房屋）开放时间各异，通常为上午10点至下午5点。" />
              <InfoRow label="门票价格" value="进入老城区域免费。内部景点单独收费，例如大教堂参观免费，登塔约2欧元；商人桥个别博物馆门票约5-8欧元。" />
              <InfoRow label="地址" value="Altstadt, 99084 Erfurt, Germany" />
              <InfoRow label="交通方式" value="从埃尔福特-魏玛机场（ERF）乘坐出租车约20分钟可达老城。从埃尔福特中央火车站（Erfurt Hbf）步行约15-20分钟即可进入老城核心区。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">埃尔福特老城的故事，得从8世纪左右说起，当时这里就因为处在重要的贸易路线上而开始繁荣。到了中世纪，它更是因为一种植物——菘蓝（用来制作蓝色染料的作物）而富甲一方，成了“图林根的罗马”。14世纪建成的商人桥可太有代表性了，起初就是为了商业，后来人们直接在桥上盖房子，成了欧洲罕见的有人居住的桥屋建筑群，一直延续到今天。宗教改革家马丁·路德曾在这里的奥古斯丁修道院学习生活，给老城留下了深刻的印记。老城在二战中幸运地躲过了大规模破坏，所以我们现在能看到这么多原汁原味的中世纪和文艺复兴建筑。漫步其中，抚摸那些古老的墙壁，你能真切感受到从商人、修士到普通市民，层层叠叠的生活记忆都沉淀在这里了。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从中心地标大教堂山开始，俯瞰全城后下山深入街巷，最后以漫步商人桥和河岸作为终点，全程步行约3-4小时，轻松惬意。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>老城非常适合步行探索，穿一双舒适的鞋子是关键。可以不用严格遵循路线，随意拐进感兴趣的小巷更有惊喜。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  登上大教堂山台阶，参观双子座教堂及广场。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  下山步行至市政厅广场，欣赏文艺复兴风格的市政厅外墙。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  穿梭于老城小巷，寻找漂亮的木筋房和宁静的修道院庭院。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  前往克雷默桥（商人桥），漫步桥上店铺，欣赏桥屋景观。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  沿盖拉河岸行走，从不同角度拍摄商人桥全景。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  在 Fischmarkt 鱼市广场周边选择一家咖啡馆休息。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  大教堂山台阶下</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为清晨或傍晚蓝调时刻，仰拍圣玛利亚大教堂和圣塞维里教堂的雄伟双塔，构图极具冲击力。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  克雷默桥（商人桥）中段</h4>
                  <p className="text-sm text-gray-700">白天光线充足时，拍摄桥两侧色彩斑斓、错落有致的木筋房，充满生活气息的独特画面。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  盖拉河对岸（小威尼斯区）</h4>
                  <p className="text-sm text-gray-700">日落时分，将商人桥、桥屋与水中倒影一同纳入镜头，景色如画。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  Fischmarkt 鱼市广场</h4>
                  <p className="text-sm text-gray-700">以“持剑男子”雕像和背后色彩缤纷的文艺复兴建筑为背景，拍摄经典的城市广场照片。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 拍摄桥上居民房屋时请注意礼貌，避免过度打扰私人空间。使用广角镜头能更好地捕捉教堂和桥梁的宏大场景。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  高端选择</h4>
                  <p className="text-sm text-blue-800">入住老城中心广场附近的精品酒店，开窗即是历史景观。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  中端选择</h4>
                  <p className="text-sm text-green-800">选择商人桥或盖拉河畔的特色旅馆，体验水上人家的独特氛围。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  经济选择</h4>
                  <p className="text-sm text-yellow-800">老城边缘或火车站附近的现代酒店或公寓，性价比高，步行可达核心区。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  特色选择</h4>
                  <p className="text-sm text-purple-800">尝试由历史建筑改造的民宿，深入感受老房子的魅力。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">旺季（尤其是圣诞市场期间）建议提前预订。住在老城内虽然价格稍高，但能享受清晨和夜晚无游客的静谧时刻，体验更佳。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">埃尔福特老城有一种不张扬却直抵人心的美。它不像那些名声在外的旅游大城那样喧嚣，而是安安静静地在那里，把中世纪的风华和日常的温情完美融合。当你站在商人桥上，看着人们从那些有几百年历史的窗子里探出头来，你会觉得历史从未远去，它就在每一块石板、每一栋彩色的房子里呼吸着。这是一个值得你慢下来，用心去散步、去发现的地方。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
