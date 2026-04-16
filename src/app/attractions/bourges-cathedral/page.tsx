import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布尔日大教堂 Bourges Cathedral｜法国哥特艺术瑰宝，震撼的彩绘玻璃画廊 - 最佳欧洲景点',
  description: '第一眼看到布尔日大教堂，你绝对会被它的“宽度”震撼到！它不像巴黎圣母院那样追求冲天的高度，而是以一种无比舒展、沉稳的姿态横亘在布尔日的天际线下，像一座巨大的石制山脉。走进内部，那种空旷、深邃的空间感瞬间将你包裹。最绝的是它的彩绘玻璃窗，阳光好的时候，整个教堂内部就像一个流动的、五彩斑斓的光之海洋。那...',
}

export default function BourgesCathedralPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '布尔日大教堂', href: '/attractions/bourges-cathedral' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">布尔日大教堂・Bourges Cathedral・法国・布尔日</h1>
          <p className="text-lg text-gray-600 mb-6">
            第一眼看到布尔日大教堂，你绝对会被它的“宽度”震撼到！它不像巴黎圣母院那样追求冲天的高度，而是以一种无比舒展、沉稳的姿态横亘在布尔日的天际线下，像一座巨大的石制山脉。走进内部，那种空旷、深邃的空间感瞬间将你包裹。最绝的是它的彩绘玻璃窗，阳光好的时候，整个教堂内部就像一个流动的、五彩斑斓的光之海洋。那些13世纪的蓝色、红色、金色的光芒透过玻璃，在地面和石柱上投下梦幻的光影，你会感觉自己不是在看窗户，而是在看一部用光和色彩讲述的中世纪史诗。空气里混合着古老的石头气息和一丝蜡烛的味道，安静得能听到自己的呼吸声，特别治愈。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">第一眼看到布尔日大教堂，你绝对会被它的“宽度”震撼到！它不像巴黎圣母院那样追求冲天的高度，而是以一种无比舒展、沉稳的姿态横亘在布尔日的天际线下，像一座巨大的石制山脉。走进内部，那种空旷、深邃的空间感瞬间将你包裹。最绝的是它的彩绘玻璃窗，阳光好的时候，整个教堂内部就像一个流动的、五彩斑斓的光之海洋。那些13世纪的蓝色、红色、金色的光芒透过玻璃，在地面和石柱上投下梦幻的光影，你会感觉自己不是在看窗户，而是在看一部用光和色彩讲述的中世纪史诗。空气里混合着古老的石头气息和一丝蜡烛的味道，安静得能听到自己的呼吸声，特别治愈。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="布尔日大教堂" />
                <InfoRow label="英文名称" value="Bourges Cathedral" />
                <InfoRow label="正式名称" value="Bourges Cathedral" />
                <InfoRow label="国家" value="法国" />
                <InfoRow label="城市" value="布尔日" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="教堂主体：全年开放，通常为上午9:00至下午7:15（夏季可能延长，冬季可能缩短）。塔楼和地下室有特定开放时段，需单独查询。" />
              <InfoRow label="门票价格" value="进入教堂主体免费。登塔楼和参观珍宝室需要购票，成人票价约8欧元，有优惠票价（学生、儿童等）。" />
              <InfoRow label="地址" value="Place Étienne Dolet, 18000 Bourges, France" />
              <InfoRow label="交通方式" value="从巴黎奥利机场或戴高乐机场出发，可乘坐TGV高速火车至布尔日站，车程约1小时40分钟至2小时。从布尔日火车站步行至大教堂约15-20分钟。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">布尔日大教堂的故事始于1195年，当时的布尔日大主教亨利·德·苏利决心建造一座能与巴黎圣母院媲美，甚至超越它的宏伟教堂。选址很有意思，是在一片沼泽地上，这给建造带来了巨大挑战，但也让后来的建筑基础工程显得格外了不起。整个建造过程断断续续持续了近一个半世纪，直到13世纪末才基本完工。它完美体现了法国哥特式建筑从早期向盛期的过渡，尤其是它独创性的“五进式”设计——也就是没有明显的耳堂，侧廊一层套一层，形成了无比开阔、连贯的内部空间，这在当时是革命性的。大教堂幸运地躲过了法国大革命的严重破坏，也基本避开了两次世界大战的炮火，使得它那些无与伦比的13世纪彩绘玻璃窗（总计超过2000平方米！）得以近乎完整地保存下来。1992年，它被联合国教科文组织列为世界遗产。站在这里，你触摸的每一块石头，看到的每一片玻璃，都是中世纪工匠们用信仰和时间凝结的杰作，那种穿越时空的对话感非常强烈。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  建议游览时间约1.5-2小时。从西立面正门（Portail Royal）进入，先感受中殿的宏伟和彩绘玻璃，然后顺时针或逆时针参观侧廊及后殿回廊，最后可考虑登塔楼（北塔）或参观地下室。终点可回到中殿前方静坐片刻。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>教堂内部光线较暗，适应一下才能更好地欣赏彩窗细节。地面是古老石板，建议穿舒适的平底鞋。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  仰望西立面正门，欣赏精美的“最后审判”雕塑。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  步入中殿，抬头感受惊人的拱顶高度和开阔空间。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  细细观赏北侧廊和南侧廊一系列13世纪的彩绘玻璃窗。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  绕行至后殿（chevet），从外部欣赏飞扶壁的壮观结构。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  进入后殿回廊，感受更私密的祈祷空间和更多彩窗。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  （可选）登上北塔“黄油塔”，俯瞰布尔日老城全景。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  埃蒂安·多莱广场（教堂前广场）</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为晴朗的下午，阳光能照亮西立面。用广角镜头拍摄大教堂全貌，突出其宽阔稳重的气势。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  中殿内部，面向西窗</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为上午，阳光从背后射入。背对祭坛，拍摄中殿纵深和尽头玫瑰窗的光影，能拍出强烈的空间透视感和神圣光束。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  后殿外部花园</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为黄昏“蓝调时刻”。从花园小径拍摄后殿高耸的飞扶壁和塔楼剪影，构图非常优美，富有建筑韵律感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  侧廊彩绘玻璃窗下</h4>
                  <p className="text-sm text-gray-700">任何有阳光的时间。近距离拍摄玻璃细节，或拍摄彩色光影投射在石柱和地面上的人物剪影，故事感十足。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 教堂内允许拍照，但请勿使用闪光灯和三脚架，并保持安静，尊重礼拜者。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  预算型</h4>
                  <p className="text-sm text-blue-800">选择布尔日火车站附近的连锁酒店或经济型旅馆，交通便利，性价比高。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  舒适型</h4>
                  <p className="text-sm text-green-800">入住老城区内的精品酒店或特色民宿，步行即可到达大教堂，更能体验古城夜晚的宁静氛围。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  特色型</h4>
                  <p className="text-sm text-yellow-800">寻找由历史建筑改造的酒店，如下午能望见教堂塔楼的房间，将历史感融入住宿体验。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">旅游旺季（特别是夏季音乐节期间）建议提前预订。住在老城区，晚上可以欣赏大教堂的夜景灯光，非常迷人。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">布尔日大教堂带给我的，不是那种咄咄逼人的震撼，而是一种深沉、宁静的感动。它像一个宽厚的长者，不张扬，却用最绚烂的光和最坚实的石头，默默守护着这座城市八百年的记忆。在这里待上半天，让那些古老的色彩洗涤眼睛，让心灵在空旷中沉静下来，你会明白为什么它被称为“法国哥特艺术的巅峰之一”。这绝对是一次值得专程前往的灵魂之旅。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
