import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '维斯普雷姆老城 Veszprém Old Town｜漫步“皇后之城”，俯瞰巴洛克山脊线 - 最佳欧洲景点',
  description: '维斯普雷姆老城给我的第一感觉，就像走进了一本立体的童话书。它建在一座狭长的山脊上，当地人亲切地叫它“城堡山”。漫步在蜿蜒起伏的鹅卵石街道上，两旁是糖果色的巴洛克和古典主义风格小房子，粉的、黄的、绿的，可爱极了。这里被称为“皇后之城”，因为历史上匈牙利的皇后都在这里加冕，空气中仿佛都飘着一丝尊贵又浪漫...',
}

export default function VeszpremOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '维斯普雷姆老城', href: '/attractions/veszprem-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">维斯普雷姆老城・Veszprém Old Town・匈牙利・维斯普雷姆</h1>
          <p className="text-lg text-gray-600 mb-6">
            维斯普雷姆老城给我的第一感觉，就像走进了一本立体的童话书。它建在一座狭长的山脊上，当地人亲切地叫它“城堡山”。漫步在蜿蜒起伏的鹅卵石街道上，两旁是糖果色的巴洛克和古典主义风格小房子，粉的、黄的、绿的，可爱极了。这里被称为“皇后之城”，因为历史上匈牙利的皇后都在这里加冕，空气中仿佛都飘着一丝尊贵又浪漫的气息。站在山脊的边缘，视野豁然开朗，一边可以望见远处的巴拉顿湖波光，另一边则是宁静的城镇风光，那种居高临下、被历史和美景包围的感觉，特别治愈。整座老城不大，但一步一景，转角可能就遇到一座古老的小教堂或者一个开满鲜花的小庭院，节奏缓慢又惬意。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">维斯普雷姆老城给我的第一感觉，就像走进了一本立体的童话书。它建在一座狭长的山脊上，当地人亲切地叫它“城堡山”。漫步在蜿蜒起伏的鹅卵石街道上，两旁是糖果色的巴洛克和古典主义风格小房子，粉的、黄的、绿的，可爱极了。这里被称为“皇后之城”，因为历史上匈牙利的皇后都在这里加冕，空气中仿佛都飘着一丝尊贵又浪漫的气息。站在山脊的边缘，视野豁然开朗，一边可以望见远处的巴拉顿湖波光，另一边则是宁静的城镇风光，那种居高临下、被历史和美景包围的感觉，特别治愈。整座老城不大，但一步一景，转角可能就遇到一座古老的小教堂或者一个开满鲜花的小庭院，节奏缓慢又惬意。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="维斯普雷姆老城" />
                <InfoRow label="英文名称" value="Veszprém Old Town" />
                <InfoRow label="正式名称" value="Veszprém Old Town" />
                <InfoRow label="国家" value="匈牙利" />
                <InfoRow label="城市" value="维斯普雷姆" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="公共区域全天开放。城堡区内各博物馆及教堂开放时间各异，通常为周二至周日 10:00-18:00。" />
              <InfoRow label="门票价格" value="进入老城公共区域免费。参观城堡山上的主教宫、英雄门等历史建筑内部或博物馆需单独购票，成人票约1500-2500福林。" />
              <InfoRow label="地址" value="Veszprém, Vár utca， 8200 匈牙利" />
              <InfoRow label="交通方式" value="从布达佩斯李斯特·费伦茨国际机场出发，驾车沿M7高速公路转8号公路，约1.5小时可达。或从布达佩斯火车西站乘坐火车，约1小时40分钟抵达维斯普雷姆火车站，出站后步行上山约20分钟即到老城。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">维斯普雷姆的历史可以追溯到千年以前，这座山脊天然就是绝佳的防御要塞。据说早在公元9世纪，马扎尔人部落首领就在此建立了据点。它真正闪耀起来是在11世纪，匈牙利的第一位国王圣伊什特万一世在这里建立了主教区，并将这座城市赠予他的王后吉塞拉。从那时起，这里就成了名副其实的“皇后之城”，此后近800年里，匈牙利的皇后都在这里的教堂举行加冕仪式，想想就觉得仪式感满满，山脊上仿佛一直回响着皇冠落下的声音。不过，历史的道路从不平坦。老城在13世纪蒙古入侵和16世纪奥斯曼帝国扩张期间都遭受了严重破坏，那些彩色的巴洛克建筑其实很多是在18世纪重建后的面貌。走在街上，你能看到哥特式教堂的遗迹与华丽的巴洛克立面和谐共存，这就是它历经沧桑的证明。到了近代，它虽不再是政治中心，却完好保存了中世纪的街道格局和宁静的氛围，成了一座活的历史博物馆，让人能触摸到匈牙利王国昔日的荣光。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从山下的“英雄门”开始你的探索，这是进入老城的标志性入口。然后沿着主街Vár utca一路向上，参观沿途的教堂、广场和博物馆，最后到达山脊尽头的观景台，全程步行游览约需2-3小时。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>老城街道多为鹅卵石路面，建议穿一双舒适防滑的步行鞋。街道标识清晰，无需特别导航，随心漫步即可。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从宏伟的“英雄门”进入城堡山区域。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  参观圣米迦勒大教堂和相邻的哥特式小教堂遗迹。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  漫步主教宫广场，欣赏粉色的主教宫建筑。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  沿着山脊步道行走，从不同角度俯瞰城市全景。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  探访山脊尽头的火警瞭望塔和圣三一广场。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  从北侧步道下山，回望城堡山全景。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  英雄门前台阶</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为清晨或黄昏，阳光斜射在拱门上。从台阶下仰拍，可以将宏伟的门楼与天空一同纳入镜头，气势十足。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  山脊步道边缘</h4>
                  <p className="text-sm text-gray-700">午后顺光时分，以彩色的老城房屋为前景，将远处广阔的平原或城镇作为背景，画面层次丰富，色彩明快。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  圣三一广场观景台</h4>
                  <p className="text-sm text-gray-700">日落时分，在此拍摄老城屋顶的剪影和天际线的渐变色彩，浪漫而富有戏剧性。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  主教宫拱廊下</h4>
                  <p className="text-sm text-gray-700">利用拱门形成天然画框，拍摄广场上的人群或对面的教堂，增添故事感和纵深感。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 拍摄教堂内部前，请务必确认是否允许拍照，并关闭闪光灯以示尊重。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  预算型</h4>
                  <p className="text-sm text-blue-800">选择山脚下或火车站附近的现代酒店或公寓，价格实惠，交通便利。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  特色型</h4>
                  <p className="text-sm text-green-800">入住老城内由历史建筑改造的精品酒店或民宿，沉浸式体验古城夜晚的静谧。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  景观型</h4>
                  <p className="text-sm text-yellow-800">预订位于城堡山边缘、带有阳台的房间，醒来就能独享无敌全景。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  便捷型</h4>
                  <p className="text-sm text-purple-800">住在市中心步行街附近，餐饮购物选择多，步行上山也仅需10分钟。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">旺季（夏季和节假日）老城内的住宿非常紧俏，建议提前数月预订。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">维斯普雷姆老城是一座需要用心去漫步感受的珍宝。它没有大城市的喧嚣，却拥有沉淀了千年的故事和无处不在的精致细节。在这里，时间仿佛慢了下来，你可以真切地触摸到历史的纹理，感受到“皇后之城”残留的那份优雅与宁静。如果你厌倦了人潮，想寻找一个充满故事、风景如画又格外亲切的匈牙利古城，这里绝对会给你意想不到的惊喜。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
