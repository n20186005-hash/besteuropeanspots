import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '肖普朗老城 Old Town of Sopron｜漫步“匈牙利最忠诚之城”的中世纪迷宫 - 最佳欧洲景点',
  description: '一脚踏进肖普朗老城，就像不小心掉进了一个琥珀色的时间胶囊。这里没有布达佩斯那样汹涌的人潮，时间仿佛被鹅卵石小路和蜂蜜色墙壁调慢了。老城中心被一圈保存完好的中世纪城墙温柔地环抱着，你会看到哥特式、文艺复兴式和巴洛克式的建筑肩并肩站在一起，像一群穿着不同时代华服却相处融洽的老朋友。我最爱在黄昏时分，爬上...',
}

export default function OldTownOfSopronPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '匈牙利', href: '/destinations/hungary' },
            { label: '肖普朗老城', href: '/attractions/old-town-of-sopron' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">肖普朗老城・Old Town of Sopron・匈牙利・肖普朗</h1>
          <p className="text-lg text-gray-600 mb-6">
            一脚踏进肖普朗老城，就像不小心掉进了一个琥珀色的时间胶囊。这里没有布达佩斯那样汹涌的人潮，时间仿佛被鹅卵石小路和蜂蜜色墙壁调慢了。老城中心被一圈保存完好的中世纪城墙温柔地环抱着，你会看到哥特式、文艺复兴式和巴洛克式的建筑肩并肩站在一起，像一群穿着不同时代华服却相处融洽的老朋友。我最爱在黄昏时分，爬上那座醒目的火灾瞭望塔，看着夕阳把整个老城的屋顶染成金红色，那一刻，真的能理解为什么这里被称为“匈牙利最忠诚之城”——它忠诚地守护着几百年前的模样和氛围，等着你来发现。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">一脚踏进肖普朗老城，就像不小心掉进了一个琥珀色的时间胶囊。这里没有布达佩斯那样汹涌的人潮，时间仿佛被鹅卵石小路和蜂蜜色墙壁调慢了。老城中心被一圈保存完好的中世纪城墙温柔地环抱着，你会看到哥特式、文艺复兴式和巴洛克式的建筑肩并肩站在一起，像一群穿着不同时代华服却相处融洽的老朋友。我最爱在黄昏时分，爬上那座醒目的火灾瞭望塔，看着夕阳把整个老城的屋顶染成金红色，那一刻，真的能理解为什么这里被称为“匈牙利最忠诚之城”——它忠诚地守护着几百年前的模样和氛围，等着你来发现。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="肖普朗老城" />
                <InfoRow label="英文名称" value="Old Town of Sopron" />
                <InfoRow label="正式名称" value="Old Town of Sopron" />
                <InfoRow label="国家" value="匈牙利" />
                <InfoRow label="城市" value="肖普朗" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="全天开放（公共区域）。城内各博物馆、教堂等独立景点开放时间各异，通常为周二至周日 10:00-18:00。" />
              <InfoRow label="门票价格" value="进入老城区域免费。参观内部景点需单独购票，如火灾瞭望塔门票约1500福林，圣三位一体柱广场旁的博物馆门票约1000-2000福林。" />
              <InfoRow label="地址" value="Sopron, Várkerület, 9400 Hungary" />
              <InfoRow label="交通方式" value="从布达佩斯出发，乘坐火车约2-2.5小时直达肖普朗火车站，火车站步行至老城中心仅需5-10分钟。从维也纳出发，车程约1小时。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">肖普朗的故事始于古罗马时代，当时这里是一个叫“Scarbantia”的定居点，老城广场上至今还能看到罗马广场的遗迹。不过，让它真正焕发光彩的是中世纪。13世纪，蒙古入侵后，国王鼓励修建石质城墙，我们现在看到的城市轮廓和防御体系基本在那时奠定。老城的心脏—— Fő tér（主广场）周围，开始涌现出精美的市民住宅和公共建筑。16世纪奥斯曼帝国占领匈牙利大部分地区时，肖普朗成了重要的文化和贸易中心，许多贵族和商人迁居于此，带来了文艺复兴的风潮，你能在建筑立面的雕刻和庭院中看到这些痕迹。最传奇的一笔在1921年，当地居民公投决定留在匈牙利而非归属奥地利，因此赢得了“最忠诚之城”的称号。二战中老城受损严重，但战后人们几乎是一砖一瓦地按原样修复了它。走在今天的老城，你抚摸的墙壁，既是中世纪的馈赠，也是20世纪人们深爱故乡的证明。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  建议从象征性的主城门（Fő tér起点）进入，顺时针环绕老城核心区，重点游览主广场、瞭望塔及周边小巷，最后可探索一段城墙。轻松游览约需3-4小时。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>老城不大，非常适合随意迷路探索。建议穿舒适的平底鞋，鹅卵石路面高跟鞋是“灾难”。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从主广场的圣三位一体柱开始，欣赏环绕广场的混搭风格建筑立面。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  参观地标建筑火灾瞭望塔，登顶俯瞰全城屋顶全景。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  走进狭窄的“小巷”，寻找隐藏的文艺复兴庭院和拱门。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  参观斯托诺收藏馆，感受一个古老市民家庭的内部陈设。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  沿着残留的中世纪城墙漫步一段，触摸历史。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  探索老城地下酒窖（如有开放），了解城市的另一面。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  火灾瞭望塔顶部</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为日落前半小时。从塔顶向四周拍摄，可得到老城红色屋顶与远处青山交织的全景鸟瞰图。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  主广场圣三位一体柱前</h4>
                  <p className="text-sm text-gray-700">最佳时间为上午，阳光照亮巴洛克雕像。以色彩斑斓的建筑立面（如“药房之家”）为背景拍摄人物或柱体本身，画面丰富有层次。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  “小巷”入口拱门处</h4>
                  <p className="text-sm text-gray-700">午后光线斜射入小巷时。从较暗的拱门内向明亮的石板路和两侧暖黄色墙壁拍摄，形成强烈的纵深感与明暗对比。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  城墙公园段</h4>
                  <p className="text-sm text-gray-700">晴天任意时间。以爬满藤蔓的古老石墙为前景，拍摄后面的塔楼或民居，营造古朴宁静的氛围。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 尊重当地居民隐私，拍摄民居庭院或窗户前最好先观察是否允许。小巷光线较暗，建议使用大光圈镜头。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  奢华之选</h4>
                  <p className="text-sm text-blue-800">入住老城广场旁的精品历史酒店，如Hotel Sopron，开窗即是中世纪景观。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  中档优选</h4>
                  <p className="text-sm text-green-800">选择老城边缘经过修复的传统公寓，体验本地生活，性价比高。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  经济实惠</h4>
                  <p className="text-sm text-yellow-800">住在火车站附近或新城区的现代宾馆或民宿，步行到老城也很方便。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  独特体验</h4>
                  <p className="text-sm text-purple-800">寻找由古老酒窖改造的特色住宿，感受地下的凉爽与神秘。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">旺季（夏季和圣诞集市期间）老城内住宿紧俏，需提前预订。住在城内夜晚格外安静，氛围绝佳。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">肖普朗老城不是那种用宏伟震撼你的地方，它是以一种细腻的、生活化的温情将你包裹。在这里，历史不是教科书上的名词，而是你指尖触碰的冰凉石墙，是面包店飘出的香气混合着古老木头的味道。它像一个低调而富有的老朋友，不张扬，但肚子里装满了故事，等着你用散步的速度，来倾听和感受。如果你厌倦了打卡式的旅行，这里会是让你慢下来、心静下来的完美一站。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
