import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '多瑙沃特古城 Danube Old Town｜漫步巴伐利亚的彩色童话小镇 - 最佳欧洲景点',
  description: '嘿，我跟你说，多瑙沃特古城简直像个被时光遗忘的糖果盒子！第一眼看到那条五彩斑斓的“帝国街”，我下巴都快惊掉了——两排紧挨着的房子，每栋颜色都不同，鹅黄、淡粉、天蓝、薄荷绿，在阳光下闪闪发光，感觉像走进了童话绘本里。石板路被岁月磨得光滑，走在上面哒哒作响，空气里飘着刚出炉的面包香和咖啡味儿。最妙的是，...',
}

export default function DanubeOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '多瑙沃特古城', href: '/attractions/danube-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">多瑙沃特古城・Danube Old Town・德国・多瑙沃特</h1>
          <p className="text-lg text-gray-600 mb-6">
            嘿，我跟你说，多瑙沃特古城简直像个被时光遗忘的糖果盒子！第一眼看到那条五彩斑斓的“帝国街”，我下巴都快惊掉了——两排紧挨着的房子，每栋颜色都不同，鹅黄、淡粉、天蓝、薄荷绿，在阳光下闪闪发光，感觉像走进了童话绘本里。石板路被岁月磨得光滑，走在上面哒哒作响，空气里飘着刚出炉的面包香和咖啡味儿。最妙的是，这里没有大批旅行团的喧嚣，你可以慢悠悠地逛，看老太太在窗台浇花，或者干脆在街角的长椅上发呆，看多瑙河的支流静静穿过小城。那种安逸又鲜活的氛围，让人瞬间忘了所有烦恼。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">嘿，我跟你说，多瑙沃特古城简直像个被时光遗忘的糖果盒子！第一眼看到那条五彩斑斓的“帝国街”，我下巴都快惊掉了——两排紧挨着的房子，每栋颜色都不同，鹅黄、淡粉、天蓝、薄荷绿，在阳光下闪闪发光，感觉像走进了童话绘本里。石板路被岁月磨得光滑，走在上面哒哒作响，空气里飘着刚出炉的面包香和咖啡味儿。最妙的是，这里没有大批旅行团的喧嚣，你可以慢悠悠地逛，看老太太在窗台浇花，或者干脆在街角的长椅上发呆，看多瑙河的支流静静穿过小城。那种安逸又鲜活的氛围，让人瞬间忘了所有烦恼。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="多瑙沃特古城" />
                <InfoRow label="英文名称" value="Danube Old Town" />
                <InfoRow label="正式名称" value="Danube Old Town" />
                <InfoRow label="国家" value="德国" />
                <InfoRow label="城市" value="多瑙沃特" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="古城区域全天开放，内部各博物馆及教堂开放时间不一，通常为10:00-17:00。" />
              <InfoRow label="门票价格" value="进入古城免费。部分博物馆、塔楼需单独购票，成人票约3-8欧元。" />
              <InfoRow label="地址" value="Rathausgasse 1, 86609 Donauwörth, Germany" />
              <InfoRow label="交通方式" value="从慕尼黑中央火车站乘坐区域火车（RE）前往多瑙沃特火车站，车程约1小时。出站后步行约10-15分钟即可抵达古城核心区。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">多瑙沃特的故事，可以说是一部浓缩的巴伐利亚边疆史。它的起源要追溯到一千多年前，大概公元10世纪左右，最初只是一个在多瑙河浅滩上的贸易站和渡口——这也是它名字里“沃特”（渡口）的由来。因为守着河道这个黄金位置，商贾云集，小镇迅速富裕起来。到了13世纪，它被神圣罗马帝国皇帝直接管辖，成了所谓的“帝国自由城市”，那条著名的“帝国街”就是这段荣耀时期的见证。你可以想象一下，中世纪时这里该有多热闹，各地的货物在这里集散。不过福祸相依，重要的地理位置也让它成了兵家必争之地。在三十年代战争期间，小镇遭受了严重的破坏，那段历史想起来就让人觉得沉重。战后，坚韧的当地人又一点点把它重建起来，那些漂亮的巴洛克和文艺复兴风格的山墙，很多都是那时候的杰作。漫步其中，我总觉得每一块砖石都在低声讲述着生存与复兴的故事。到了19世纪，它并入了巴伐利亚王国，一直安静地守护着多瑙河畔的这份美丽至今。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从古城西端的“帝国街”南端入口开始，一路向北漫步这条主街，欣赏两侧彩色房屋，然后向东折向市政厅广场，最后前往河边的圣十字教堂。全程步行游览，慢慢逛加拍照大约需要2-3小时。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>古城不大，完全不需要地图，随心而走就是最好的探索。记得穿一双舒适的平底鞋，石板路走久了还是有点考验脚力的。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从帝国街南端拱门进入，感受被彩色房屋包围的梦幻感。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  漫步帝国街，留意两侧建筑精美的壁画和凸窗。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  抵达市政厅广场，参观文艺复兴风格的市政厅外立面。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  参观广场旁的赖希斯街博物馆，了解古城历史。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  走向多瑙河畔，远观和走近圣十字教堂。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  在河边的步道散步，从水面上回望古城风貌。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  帝国街中段</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为晴天的上午10点或下午3点后，阳光斜射，色彩饱和度最高。站在街道中央，用长焦镜头压缩空间，能拍出彩色房屋层层叠叠的童话感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  市政厅广场喷泉前</h4>
                  <p className="text-sm text-gray-700">以文艺复兴风格的市政厅建筑为背景，人物在喷泉旁，构图经典。下午光线柔和时效果最佳。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  多瑙河对岸</h4>
                  <p className="text-sm text-gray-700">黄昏时分，走到河对岸的人行桥上，可以拍摄圣十字教堂和古城建筑群在水中的倒影，画面宁静而富有诗意。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 拍摄居民房屋时请保持礼貌，尽量避免将镜头直接对准私人窗户。飞无人机在当地可能有严格限制，需提前查询法规。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  古城中心历史酒店</h4>
                  <p className="text-sm text-blue-800">选择帝国街或市政厅广场旁的精品酒店，沉浸式体验古城氛围，价格中等偏上。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  多瑙河畔旅馆</h4>
                  <p className="text-sm text-green-800">位于圣十字教堂附近，开窗见河，风景优美，性价比高。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  火车站附近现代酒店</h4>
                  <p className="text-sm text-yellow-800">适合自驾或赶早班车的旅客，住宿条件新，价格实惠，步行到古城约15分钟。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">旺季（夏季和圣诞市场期间）建议提前预订。住在古城内虽然价格稍高，但能享受清晨和夜晚没有游客的静谧时光，非常值得。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">多瑙沃特古城的美，不在于有多么震撼的奇观，而在于那种渗入骨髓的宁静与温馨。它像一个活生生的、会呼吸的历史博物馆，每一抹色彩都有温度，每一处转角都有故事。离开的时候，心里装满了彩色的回忆和河风的清凉，这是一个会让你想念，并渴望再次回来的地方。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
