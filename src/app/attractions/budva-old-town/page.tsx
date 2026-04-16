import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布德瓦老城 Budva Old Town｜亚得里亚海畔的千年石头迷宫 - 最佳欧洲景点',
  description: '一脚踏进布德瓦老城，就像瞬间掉进了一个用蜂蜜色石头砌成的童话迷宫。狭窄的巷子弯弯曲曲，阳光只能从缝隙里漏下一点点，石板路被岁月磨得光滑发亮。耳边是海浪轻轻拍打城墙根的声音，空气里混着海水的咸味和旁边小餐馆飘出的咖啡香。这里完全没有大城市的喧嚣，只有猫咪在墙头打盹，老爷爷在巷口下棋。爬到古老的城墙上，...',
}

export default function BudvaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '布德瓦老城', href: '/attractions/budva-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">布德瓦老城・Budva Old Town・黑山・布德瓦</h1>
          <p className="text-lg text-gray-600 mb-6">
            一脚踏进布德瓦老城，就像瞬间掉进了一个用蜂蜜色石头砌成的童话迷宫。狭窄的巷子弯弯曲曲，阳光只能从缝隙里漏下一点点，石板路被岁月磨得光滑发亮。耳边是海浪轻轻拍打城墙根的声音，空气里混着海水的咸味和旁边小餐馆飘出的咖啡香。这里完全没有大城市的喧嚣，只有猫咪在墙头打盹，老爷爷在巷口下棋。爬到古老的城墙上，眼前豁然开朗——蔚蓝的亚得里亚海就在脚下，红瓦屋顶层层叠叠，那种中世纪韵味和海滨风情的混搭，真的太有感觉了。它不像一些修复过度的古城，这里的生活气息特别浓，你会觉得时间在这里慢了下来。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">一脚踏进布德瓦老城，就像瞬间掉进了一个用蜂蜜色石头砌成的童话迷宫。狭窄的巷子弯弯曲曲，阳光只能从缝隙里漏下一点点，石板路被岁月磨得光滑发亮。耳边是海浪轻轻拍打城墙根的声音，空气里混着海水的咸味和旁边小餐馆飘出的咖啡香。这里完全没有大城市的喧嚣，只有猫咪在墙头打盹，老爷爷在巷口下棋。爬到古老的城墙上，眼前豁然开朗——蔚蓝的亚得里亚海就在脚下，红瓦屋顶层层叠叠，那种中世纪韵味和海滨风情的混搭，真的太有感觉了。它不像一些修复过度的古城，这里的生活气息特别浓，你会觉得时间在这里慢了下来。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="布德瓦老城" />
                <InfoRow label="英文名称" value="Budva Old Town" />
                <InfoRow label="正式名称" value="Budva Old Town" />
                <InfoRow label="国家" value="黑山" />
                <InfoRow label="城市" value="布德瓦" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="全天开放（城墙和部分博物馆开放时间各异，通常为夏季9:00-00:00，冬季9:00-17:00）" />
              <InfoRow label="门票价格" value="进入老城免费。登上城墙门票约2-3欧元，部分博物馆单独收费约2-5欧元。" />
              <InfoRow label="地址" value="Stari Grad, Budva, Montenegro" />
              <InfoRow label="交通方式" value="从蒂瓦特机场出发，乘坐出租车或机场巴士约20-30分钟车程即可抵达布德瓦，老城位于海滨步行可达。从首都波德戈里察机场出发，车程约1小时。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">布德瓦老城的故事，简直是一部浓缩的地中海史诗。传说它由希腊英雄卡德摩斯建立，够古老吧？考古发现这里早在公元前5世纪就有人居住了。后来罗马人来了，留下了痕迹。但真正塑造了今天我们看到这座石头城的，是威尼斯共和国。从15世纪到18世纪，威尼斯人统治了这里将近400年，他们修建了坚固的星形城墙、堡垒和塔楼，用来抵御奥斯曼帝国的进攻。你在城里看到的很多建筑风格，都带着浓浓的威尼斯烙印。历史上它经历过地震，最严重的一次是1979年，几乎把老城夷为平地。但黑山人硬是一块石头一块石头地按原样把它重建了起来，这份执着让人感动。如今，它既是受保护的文化遗产，又是充满活力的生活社区，这种古今交融的状态特别迷人。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从面朝大海的主城门（Sea Gate）进入，顺时针沿着城墙漫步，再深入迷宫般的内巷探索，最后在海边城墙结束。全程慢慢逛下来大约需要2-3小时，如果参观博物馆和教堂则需要更久。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>巷子像迷宫，但不用担心迷路，朝着海的方向或者高处走总能找到方向。建议穿一双舒适的平底鞋，石板路不太平整。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从“海之门”进入，感受古老城门与蔚蓝大海的强烈对比。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  沿着北侧城墙步行，俯瞰老城屋顶和亚得里亚海全景。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  参观地标圣伊万教堂，看其独特的钟楼。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  钻进中心广场周围的小巷，迷失在石头迷宫和特色小店中。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  走到南端的城堡和堡垒，这里是拍摄老城与大海的绝佳位置。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  从“陆之门”附近走出，或在海边城墙下的咖啡馆休息。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  城堡城墙之上</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为日落前黄金一小时。从城墙垛口向外拍摄，可以将老城的红瓦屋顶、教堂钟楼和蔚蓝大海一同纳入镜头，层次感极佳。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  “海之门”入口处</h4>
                  <p className="text-sm text-gray-700">上午阳光能照亮门洞时。从城外向内拍摄，捕捉穿越古老拱门进入中世纪街巷的纵深感。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  圣伊万教堂钟楼下</h4>
                  <p className="text-sm text-gray-700">下午时分。仰拍钟楼与一角蓝天，凸显其石砌建筑的沧桑与精致。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  海边步道望向老城</h4>
                  <p className="text-sm text-gray-700">清晨或傍晚。从海滨大道拍摄老城城墙全景，水中倒影非常美。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 老城内部小巷光线较暗，建议调高相机感光度或使用大光圈镜头。尊重当地居民隐私，避免对着住户门窗直接拍摄。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  高端海景之选</h4>
                  <p className="text-sm text-blue-800">入住老城城墙外的高级酒店或度假村，开窗即是无敌海景和老城全景。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  特色体验之选</h4>
                  <p className="text-sm text-green-800">预订老城内由石头老屋改造的精品民宿，沉浸式感受中世纪氛围。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  性价比之选</h4>
                  <p className="text-sm text-yellow-800">选择布德瓦新城（与老城仅隔一条海滨大道）的公寓或家庭旅馆，步行几分钟即可到达老城，生活便利。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  安静度假之选</h4>
                  <p className="text-sm text-purple-800">住在老城附近山腰上的酒店，可以俯瞰整个布德瓦湾和老城，视野开阔。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">夏季是旺季，老城内住宿非常紧俏，务必提前数月预订。选择老城内住宿需注意，夜间可能不如新城安静。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">布德瓦老城最打动我的，是它那种毫不做作的“活着”的状态。它不仅是游客的景点，更是黑山人日常生活的家园。在古老的城墙下喝杯咖啡，看海浪日复一日地拍打岩石，你会明白为什么这里被称为“黑山的明珠”。它小巧、精致、充满故事，是亚得里亚海岸线上一个不容错过的温柔角落。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
