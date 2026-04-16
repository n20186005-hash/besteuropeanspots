import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '帕伦西亚老城 Palencia Old Town｜漫步卡斯蒂利亚的隐秘宝石，感受时光凝固的广场与教堂 - 最佳欧洲景点',
  description: '说实话，来帕伦西亚老城之前，我完全没料到它会这么迷人。这里没有马德里的喧嚣，也没有巴塞罗那的游客潮，它就是一座安安静静、干干净净的卡斯蒂利亚古城。第一印象就是那种被阳光晒得暖洋洋的蜂蜜色石头房子，沿着蜿蜒的鹅卵石小巷排开。空气里飘着咖啡香和刚出炉的面包味。最让我心动的是主广场（Plaza Mayor...',
}

export default function PalenciaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '帕伦西亚老城', href: '/attractions/palencia-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">帕伦西亚老城・Palencia Old Town・西班牙・帕伦西亚</h1>
          <p className="text-lg text-gray-600 mb-6">
            说实话，来帕伦西亚老城之前，我完全没料到它会这么迷人。这里没有马德里的喧嚣，也没有巴塞罗那的游客潮，它就是一座安安静静、干干净净的卡斯蒂利亚古城。第一印象就是那种被阳光晒得暖洋洋的蜂蜜色石头房子，沿着蜿蜒的鹅卵石小巷排开。空气里飘着咖啡香和刚出炉的面包味。最让我心动的是主广场（Plaza Mayor），它不像其他大城市的广场那样宏伟到让人有距离感，反而像个亲切的社区客厅，当地人坐在露天咖啡馆里看报纸、聊天，鸽子在广场上悠闲踱步。走在老城里，你随时会撞见一座罗马式教堂的敦厚背影，或者一个藏着精美浮雕的古老门廊，那种历史感是浸润在日常烟火气里的，特别舒服。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">说实话，来帕伦西亚老城之前，我完全没料到它会这么迷人。这里没有马德里的喧嚣，也没有巴塞罗那的游客潮，它就是一座安安静静、干干净净的卡斯蒂利亚古城。第一印象就是那种被阳光晒得暖洋洋的蜂蜜色石头房子，沿着蜿蜒的鹅卵石小巷排开。空气里飘着咖啡香和刚出炉的面包味。最让我心动的是主广场（Plaza Mayor），它不像其他大城市的广场那样宏伟到让人有距离感，反而像个亲切的社区客厅，当地人坐在露天咖啡馆里看报纸、聊天，鸽子在广场上悠闲踱步。走在老城里，你随时会撞见一座罗马式教堂的敦厚背影，或者一个藏着精美浮雕的古老门廊，那种历史感是浸润在日常烟火气里的，特别舒服。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="帕伦西亚老城" />
                <InfoRow label="英文名称" value="Palencia Old Town" />
                <InfoRow label="正式名称" value="Palencia Old Town" />
                <InfoRow label="国家" value="西班牙" />
                <InfoRow label="城市" value="帕伦西亚" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="全天开放（公共区域），各教堂及博物馆开放时间不一，通常为10:00-14:00及16:00-19:00。" />
              <InfoRow label="门票价格" value="老城区街道及主要广场免费。进入圣米格尔教堂等部分教堂免费，圣安东尼奥教堂博物馆门票约3欧元。" />
              <InfoRow label="地址" value="Casco Antiguo, 34001 Palencia, Spain" />
              <InfoRow label="交通方式" value="从马德里巴拉哈斯机场出发，可乘坐高铁（AVE）至帕伦西亚-吉列尔车站，车程约2小时15分钟。从车站步行至老城区约15-20分钟。从巴利亚多利德机场出发，驾车或乘坐巴士约45分钟可达。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">帕伦西亚的历史可以追溯到罗马时代，但老城今天的面貌主要成形于中世纪。公元11世纪，随着基督教王国从摩尔人手中收复失地运动的推进，这里逐渐成为卡斯蒂利亚王国的一个重要据点。你可以把老城想象成一层层叠起来的历史蛋糕：最底下是古罗马的零星痕迹，中间厚厚的是中世纪的肌理。漫步时看到的很多罗马式教堂，比如雄伟的圣米格尔教堂，就是12-13世纪的产物，那种坚固、简朴的风格，特别有穿越感。到了文艺复兴和巴洛克时期，又给城市增添了不少华丽的宫殿立面，像市政厅那栋楼就很有看头。让我感慨的是，这座城市在历史上不算特别显赫，没经历过太多毁灭性的战乱，所以这种连续、平和的累积感特别强。它就像一位低调的贵族，家底丰厚但不张扬，每一块石头都写着平静的岁月。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从心脏地带主广场（Plaza Mayor）出发，先感受城市氛围，然后向北探索主要的教堂和古老街道，最后到达河边的绿地。全程步行，悠闲游览大约需要3-4小时。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>老城不大，完全不需要地图，随心所欲地迷路也是乐趣。记得穿一双舒适的平底鞋，鹅卵石路面对高跟鞋不太友好。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从主广场出发，欣赏市政厅建筑和广场周边拱廊。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  向北步行至圣米格尔教堂，参观其著名的罗马式立面。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  沿着 Calle Mayor 主街漫步，留意两侧的历史建筑和商铺。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  参观圣巴勃罗教堂及其附近的教区博物馆。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  走到卡里翁河畔，看看老桥和 San Francisco 绿地。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  主广场拱廊下</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为晴天的上午或黄昏，阳光斜射形成美丽光影。从拱廊内向外拍摄广场上的人物和建筑，层次感极佳。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  圣米格尔教堂侧面小巷</h4>
                  <p className="text-sm text-gray-700">午后时分，阳光照亮教堂的罗马式石墙和狭窄的巷道，能拍出极具历史感和纵深感的照片。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  卡里翁河老桥</h4>
                  <p className="text-sm text-gray-700">傍晚时分，以老桥为前景，拍摄对岸老城建筑的天际线倒映在河中，画面宁静而优美。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 尊重当地居民隐私，拍摄小巷和居民阳台时尽量避免特写。教堂内部通常允许拍照，但请勿使用闪光灯。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  高端选择</h4>
                  <p className="text-sm text-blue-800">入住老城边缘或主广场附近的四星级酒店，如 Eurostars Palencia，位置便利，设施现代。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  中端舒适</h4>
                  <p className="text-sm text-green-800">选择老城内由历史建筑改建的精品酒店或特色旅馆，能深度体验古城氛围。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  经济实惠</h4>
                  <p className="text-sm text-yellow-800">老城外围步行可达的区域有不少性价比高的旅馆和公寓式酒店。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  独特体验</h4>
                  <p className="text-sm text-purple-800">考虑租赁老城中心一栋古老公寓楼里的度假公寓，像当地人一样生活几天。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">老城内部以石板路为主，拖行李可能略有不便，选择住宿时可以留意酒店是否提供搬运服务或选择靠近入口的住处。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">帕伦西亚老城给我的感觉，像是一本被轻轻合上、书页微微泛黄的旧书。它不急于向你炫耀什么，只是静静地在那里，等着有缘人慢慢翻阅。如果你厌倦了景点打卡的匆忙，想要找一个地方，纯粹地走走停停，喝杯咖啡，看看当地人的生活，那么这里再合适不过了。它用那种不施粉黛的日常之美，温柔地留住了时光，也一定会留住你的心。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
