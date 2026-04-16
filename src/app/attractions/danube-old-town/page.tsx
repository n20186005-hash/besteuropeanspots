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
            { label: '景点', href: '/attractions' },
            { label: '多瑙沃特古城', href: '/attractions/danube-old-town' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">多瑙沃特古城</h1>
          <p className="text-xl text-gray-600 mb-4">Danube Old Town</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">德国</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">多瑙沃特</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">嘿，我跟你说，多瑙沃特古城简直像个被时光遗忘的糖果盒子！第一眼看到那条五彩斑斓的“帝国街”，我下巴都快惊掉了——两排紧挨着的房子，每栋颜色都不同，鹅黄、淡粉、天蓝、薄荷绿，在阳光下闪闪发光，感觉像走进了童话绘本里。石板路被岁月磨得光滑，走在上面哒哒作响，空气里飘着刚出炉的面包香和咖啡味儿。最妙的是，这里没有大批旅行团的喧嚣，你可以慢悠悠地逛，看老太太在窗台浇花，或者干脆在街角的长椅上发呆，看多瑙河的支流静静穿过小城。那种安逸又鲜活的氛围，让人瞬间忘了所有烦恼。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">古城公共区域全年全天开放。但需注意，内部景点如赖希斯街博物馆、圣十字教堂等，冬季（11月-3月）开放时间可能缩短，或周一闭馆。学生、儿童及团体通常享有门票折扣，建议在景点入口处查看最新价目表。部分历史建筑内部不允许使用闪光灯拍照。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">多瑙沃特的故事，可以说是一部浓缩的巴伐利亚边疆史。它的起源要追溯到一千多年前，大概公元10世纪左右，最初只是一个在多瑙河浅滩上的贸易站和渡口——这也是它名字里“沃特”（渡口）的由来。因为守着河道这个黄金位置，商贾云集，小镇迅速富裕起来。到了13世纪，它被神圣罗马帝国皇帝直接管辖，成了所谓的“帝国自由城市”，那条著名的“帝国街”就是这段荣耀时期的见证。你可以想象一下，中世纪时这里该有多热闹，各地的货物在这里集散。不过福祸相依，重要的地理位置也让它成了兵家必争之地。在三十年代战争期间，小镇遭受了严重的破坏，那段历史想起来就让人觉得沉重。战后，坚韧的当地人又一点点把它重建起来，那些漂亮的巴洛克和文艺复兴风格的山墙，很多都是那时候的杰作。漫步其中，我总觉得每一块砖石都在低声讲述着生存与复兴的故事。到了19世纪，它并入了巴伐利亚王国，一直安静地守护着多瑙河畔的这份美丽至今。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">推荐从古城西端的“帝国街”南端入口开始，一路向北漫步这条主街，欣赏两侧彩色房屋，然后向东折向市政厅广场，最后前往河边的圣十字教堂。全程步行游览，慢慢逛加拍照大约需要2-3小时。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从帝国街南端拱门进入，感受被彩色房屋包围的梦幻感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  漫步帝国街，留意两侧建筑精美的壁画和凸窗。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  抵达市政厅广场，参观文艺复兴风格的市政厅外立面。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  参观广场旁的赖希斯街博物馆，了解古城历史。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  走向多瑙河畔，远观和走近圣十字教堂。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  在河边的步道散步，从水面上回望古城风貌。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">古城不大，完全不需要地图，随心而走就是最好的探索。记得穿一双舒适的平底鞋，石板路走久了还是有点考验脚力的。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **帝国街中段**：最佳拍摄时间为晴天的上午10点或下午3点后，阳光斜射，色彩饱和度最高。站在街道中央，用长焦镜头压缩空间，能拍出彩色房屋层层叠叠的童话感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **市政厅广场喷泉前**：以文艺复兴风格的市政厅建筑为背景，人物在喷泉旁，构图经典。下午光线柔和时效果最佳。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **多瑙河对岸**：黄昏时分，走到河对岸的人行桥上，可以拍摄圣十字教堂和古城建筑群在水中的倒影，画面宁静而富有诗意。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">拍摄居民房屋时请保持礼貌，尽量避免将镜头直接对准私人窗户。飞无人机在当地可能有严格限制，需提前查询法规。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **古城中心历史酒店**：选择帝国街或市政厅广场旁的精品酒店，沉浸式体验古城氛围，价格中等偏上。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **多瑙河畔旅馆**：位于圣十字教堂附近，开窗见河，风景优美，性价比高。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **火车站附近现代酒店**：适合自驾或赶早班车的旅客，住宿条件新，价格实惠，步行到古城约15分钟。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">旺季（夏季和圣诞市场期间）建议提前预订。住在古城内虽然价格稍高，但能享受清晨和夜晚没有游客的静谧时光，非常值得。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">多瑙沃特古城的美，不在于有多么震撼的奇观，而在于那种渗入骨髓的宁静与温馨。它像一个活生生的、会呼吸的历史博物馆，每一抹色彩都有温度，每一处转角都有故事。离开的时候，心里装满了彩色的回忆和河风的清凉，这是一个会让你想念，并渴望再次回来的地方。</p>
            </Section>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <p className="text-sm text-gray-600 text-center">
                本文由旅行作者 Winter Grady 实地走访整理，专注欧洲小众景点深度攻略，持续分享真实游览体验。
              </p>
              <p className="text-xs text-gray-500 text-center mt-2">
                本站内容仅供旅行参考使用，商务合作与转载事宜请通过联系页脚提交申请。
              </p>
              <p className="text-xs text-gray-500 text-center">
                管理团队保留所有内容版权，未经许可禁止搬运、摘抄或商用。
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">实用信息</h3>
              <div className="space-y-4">
                <InfoRow icon="🕒" label="开放时间" value="古城区域全天开放，内部各博物馆及教堂开放时间不一，通常为10:00-17:00。" />
                <InfoRow icon="🎫" label="门票" value="进入古城免费。部分博物馆、塔楼需单独购票，成人票约3-8欧元。" />
                <InfoRow icon="📍" label="地址" value="Rathausgasse 1, 86609 Donauwörth, Germany" />
                <InfoRow icon="🚌" label="交通" value="从慕尼黑中央火车站乘坐区域火车（RE）前往多瑙沃特火车站，车程约1小时。出站后步行约10-15分钟即可抵达古城核心区。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
