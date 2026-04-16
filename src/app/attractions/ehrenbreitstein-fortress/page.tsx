import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃伦布赖特施泰因要塞 Ehrenbreitstein Fortress｜俯瞰莱茵河与摩泽尔河交汇的千年堡垒 - 最佳欧洲景点',
  description: '想象一下，你站在一座巨大无比的石头堡垒上，脚下是180米深的悬崖，眼前是两条翡翠色的河流——莱茵河与摩泽尔河，在古老的德意志之角完美交汇。这就是埃伦布赖特施泰因要塞给我的第一印象，不是精致，而是扑面而来的雄浑与霸气。坐着缆车缓缓上升，整个科布伦茨老城像玩具模型一样在脚下展开，那种感觉太震撼了。走进要...',
}

export default function EhrenbreitsteinFortressPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '埃伦布赖特施泰因要塞', href: '/attractions/ehrenbreitstein-fortress' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">埃伦布赖特施泰因要塞・Ehrenbreitstein Fortress・德国・科布伦茨</h1>
          <p className="text-lg text-gray-600 mb-6">
            想象一下，你站在一座巨大无比的石头堡垒上，脚下是180米深的悬崖，眼前是两条翡翠色的河流——莱茵河与摩泽尔河，在古老的德意志之角完美交汇。这就是埃伦布赖特施泰因要塞给我的第一印象，不是精致，而是扑面而来的雄浑与霸气。坐着缆车缓缓上升，整个科布伦茨老城像玩具模型一样在脚下展开，那种感觉太震撼了。走进要塞内部，你会发现它大得超乎想象，简直是一座石头迷宫。厚重的城墙、深邃的隧道、开阔的练兵场，每一步都能感受到它作为“欧洲最强大要塞之一”的过往。最棒的是，这里不仅是历史遗迹，更是一个绝佳的观景台，360度无死角，怎么拍都像明信片。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">想象一下，你站在一座巨大无比的石头堡垒上，脚下是180米深的悬崖，眼前是两条翡翠色的河流——莱茵河与摩泽尔河，在古老的德意志之角完美交汇。这就是埃伦布赖特施泰因要塞给我的第一印象，不是精致，而是扑面而来的雄浑与霸气。坐着缆车缓缓上升，整个科布伦茨老城像玩具模型一样在脚下展开，那种感觉太震撼了。走进要塞内部，你会发现它大得超乎想象，简直是一座石头迷宫。厚重的城墙、深邃的隧道、开阔的练兵场，每一步都能感受到它作为“欧洲最强大要塞之一”的过往。最棒的是，这里不仅是历史遗迹，更是一个绝佳的观景台，360度无死角，怎么拍都像明信片。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="埃伦布赖特施泰因要塞" />
                <InfoRow label="英文名称" value="Ehrenbreitstein Fortress" />
                <InfoRow label="正式名称" value="Ehrenbreitstein Fortress" />
                <InfoRow label="国家" value="德国" />
                <InfoRow label="城市" value="科布伦茨" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="4月至10月：每日 10:00 - 18:00；11月至3月：每日 10:00 - 17:00。部分博物馆和展览区域开放时间可能略有不同。" />
              <InfoRow label="门票价格" value="成人票：8欧元；优惠票（学生、残疾人等）：6欧元；家庭票（2成人+最多4名儿童）：18欧元。包含要塞缆车（Festungsbahn）的联票价格更高。" />
              <InfoRow label="地址" value="Ehrenbreitstein Fortress, 56077 Koblenz, Germany" />
              <InfoRow label="交通方式" value="从科布伦茨中央火车站（Koblenz Hbf）出发，步行至莱茵河畔的缆车站（Festungsbahn Talstation），乘坐缆车约5分钟即可直达要塞山顶。也可乘坐公交车至“Ehrenbreitstein”站，再步行约15分钟上山。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">埃伦布赖特施泰因的故事，简直是一部浓缩的欧洲军事史。它的历史可以追溯到公元1000年左右，最初只是一座简单的城堡。但真正让它名垂青史的，是法国大革命后的动荡时期。拿破仑的军队在1801年摧毁了当时属于特里尔选帝侯的旧城堡，这反而为它的重生埋下了伏笔。普鲁士王国在1815年维也纳会议后获得了莱茵兰地区，他们决定在这里建造一个前所未有的、永不陷落的堡垒，以威慑西边的法国。于是，从1817年到1828年，超过8000名工人日夜劳作，用最坚固的岩石建成了我们今天看到的这座庞然大物。它从未在实战中被攻克过，这本身就是一个传奇。漫步其中，你能看到各个时代的痕迹：从19世纪的炮台，到二战时作为难民营的印记，再到如今成为博物馆和文化场所。站在古老的炮口旁，看着下方和平流淌的河流和穿梭的游船，那种历史的沧桑与现实的宁静交织在一起的感觉，非常奇妙。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  游览建议安排2-3小时。路线从缆车站出口附近的要塞主入口开始，先参观核心的历史展览和博物馆，然后沿着城墙和防御工事顺时针游览，最后抵达视野最开阔的南侧观景平台，俯瞰德意志之角全景，最后经由主干道返回入口附近。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>要塞面积很大，上下坡和台阶较多，建议穿舒适的步行鞋。内部路标清晰，但拿一份免费地图会更方便。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从主入口进入，参观“要塞历史博物馆”，了解其建造背景。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  探索中央的“大庭院”，感受要塞内部的广阔空间。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  登上北侧的城墙和炮台，眺望科布伦茨老城和莱茵河。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  穿过地下隧道系统，体验当年士兵的通道。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  走到南侧的“观景台”，这里是拍摄德意志之角和两河交汇的绝佳位置。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  参观“莱茵兰博物馆”或根据兴趣观看临时特展。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  南侧观景台</h4>
                  <p className="text-sm text-gray-700"> 最佳拍摄时间是晴朗的下午，阳光照亮德意志之角纪念碑。用广角镜头可以完美捕捉两河交汇的“Y”字形奇观和科布伦茨城市全景。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  北侧城墙炮口处</h4>
                  <p className="text-sm text-gray-700"> 清晨或黄昏时分，光线柔和。将古老的铸铁炮管作为前景，聚焦后方莱茵河上的桥梁与老城红色屋顶，历史与现实的对比感极强。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  要塞缆车内</h4>
                  <p className="text-sm text-gray-700"> 在缆车上升或下降过程中，从空中俯拍德意志之角及科布伦茨城市风貌，动态感十足。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  大庭院拱门下</h4>
                  <p className="text-sm text-gray-700"> 利用拱门形成天然画框，拍摄庭院深处的建筑或人物剪影，构图富有层次感和故事感。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 使用无人机拍摄需提前查询并遵守当地法规，要塞部分区域可能禁飞。广角镜头在这里会非常有用。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  预算之选</h4>
                  <p className="text-sm text-blue-800"> 住在科布伦茨中央火车站附近，交通便利，有众多经济型酒店和民宿，搭乘公共交通去要塞很方便。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  景观之选</h4>
                  <p className="text-sm text-green-800"> 选择莱茵河或摩泽尔河畔的酒店，部分房间可直接欣赏到河对岸的要塞夜景，景色绝佳。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  特色之选</h4>
                  <p className="text-sm text-yellow-800"> 体验科布伦茨老城内的历史酒店，出门即是石板路和小酒馆，沉浸感强，步行至缆车站约10-15分钟。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  便捷之选</h4>
                  <p className="text-sm text-purple-800"> 直接预订要塞山脚下Ehrenbreitstein城区附近的住宿，早上可以避开人群，安静地步行上山。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">旅游旺季（夏季和圣诞节市场期间）科布伦茨住宿紧张，建议尽早预订。如果主要游览要塞，住在缆车站附近最为省时省力。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">埃伦布赖特施泰因要塞不仅仅是一个景点，它更像一个沉默的巨人，守护着河流与城市，也见证了数百年的和平与纷争。在这里，你能读到坚硬的历史，也能看到温柔的风景。当夕阳为巨大的石墙镀上金边，河面上的游船拉响汽笛，你会明白，为什么这座堡垒能成为科布伦茨乃至整个莱茵河谷不可替代的灵魂地标。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
