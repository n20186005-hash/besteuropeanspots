import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '施泰因老城 Stein am Rhein Old Town｜莱茵河畔的露天壁画博物馆 - 最佳欧洲景点',
  description: '第一眼看到施泰因老城，你会以为自己不小心闯进了一本立体的童话故事书！它就安安静静地躺在莱茵河边，最绝的是那一栋栋紧挨着的半木结构老房子，每一栋的外墙上都画满了精美绝伦的湿壁画。这些壁画可不是简单的装饰，上面画着神话故事、家族徽章、还有各种有趣的寓言场景，色彩历经几百年依然鲜艳。走在石板铺成的主街上，...',
}

export default function SteinAmRheinOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '施泰因老城', href: '/attractions/stein-am-rhein-old-town' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">施泰因老城</h1>
          <p className="text-xl text-gray-600 mb-4">Stein am Rhein Old Town</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">瑞士</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">施泰因</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">第一眼看到施泰因老城，你会以为自己不小心闯进了一本立体的童话故事书！它就安安静静地躺在莱茵河边，最绝的是那一栋栋紧挨着的半木结构老房子，每一栋的外墙上都画满了精美绝伦的湿壁画。这些壁画可不是简单的装饰，上面画着神话故事、家族徽章、还有各种有趣的寓言场景，色彩历经几百年依然鲜艳。走在石板铺成的主街上，两边是挂着铁艺招牌的面包店和咖啡馆，空气里飘着刚烤好的面包香。莱茵河就在几步开外缓缓流过，河水绿得像翡翠，天鹅悠闲地游来游去。整个小镇的氛围就是那种慢悠悠、暖洋洋的中世纪调调，时间在这里好像都走得特别慢。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">老城街道和广场全天可自由漫步。主要景点如市政厅（以其辉煌的文艺复兴大厅和壁画闻名）和林德乌尔姆博物馆（展示19世纪资产阶级生活）的开放时间可能随季节调整，冬季可能缩短或周一闭馆。建议出行前在官网确认。瑞士旅行通票（Swiss Travel Pass）通常涵盖区域交通，并可享受部分博物馆门票折扣。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">施泰因的故事，可以说是一部“因河而兴”的编年史。它的名字“Stein am Rhein”直译就是“莱茵河畔的石头”，早在11世纪，这里就因为其优越的河运位置，由圣乔治修道院的修士们建立并发展起来。到了中世纪晚期，施泰因成了重要的贸易枢纽，来自南德的布料、东方的香料都在此集散，财富滚滚而来。这股财富最直接的体现，就是15到16世纪，那些富商们竞相为自己临街的房屋外墙请画师绘制华丽的湿壁画，这几乎成了一场无声的炫富大赛，也让施泰因赢得了“壁画之城”的美誉。漫步其中，你能从壁画上读到《圣经》故事、看到神话英雄，甚至发现一些幽默的市井生活描绘。1525年，施泰因加入了瑞士联邦，但它的繁荣在近代因贸易路线改变而逐渐平静下来。然而，塞翁失马，这份“平静”反而完好地保存了其中世纪的风貌。想想看，我们今天看到的这些色彩斑斓的房子，几百年前的商人、主妇和孩子们也曾从同样的窗户向外张望，这种感觉真的很奇妙。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">推荐游览时长约2-3小时。路线从老城西端的莱茵河石桥（Rheinbrücke）开始，过桥后进入主街（Understadt），一路向东漫步欣赏两侧壁画房屋，最终抵达市政厅广场（Rathausplatz）和圣乔治修道院（Kloster St. Georgen），形成一个环线。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从莱茵河石桥远眺老城全景，拍下经典明信片角度。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  进入主街（Understadt），慢慢欣赏两侧房屋上精美的湿壁画。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  在市政厅广场驻足，仔细观赏市政厅外墙最著名的壁画群。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  参观广场旁的圣乔治修道院，感受古老的宁静氛围。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  沿着河岸步道散步，从水边回望老城建筑倒影。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  找一家临河的咖啡馆坐下，享受悠闲的午后时光。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">小镇很小，完全不需要地图，随心所欲地穿行小巷更有趣。建议穿舒适的平底鞋，石板路略有不平。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **莱茵河石桥上**：最佳拍摄时间为清晨或傍晚光线柔和时。从桥中央向老城方向拍摄，可以将一排彩色壁画房子、教堂尖顶和背后的青山一同纳入镜头，构图经典。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **市政厅广场**：上午阳光能较好照亮市政厅壁画立面。仰拍市政厅装饰华丽的山墙和壁画细节，色彩和雕塑的丰富度极具冲击力。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **河岸步道**：晴朗的白天均可。以平静的莱茵河水为前景，拍摄老城建筑在水中的倒影，画面宁静优美。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **主街小巷口**：利用小巷的纵深感，拍摄两侧布满壁画的房屋向远处延伸，很有故事感。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">拍摄房屋壁画时请注意不要打扰到楼内的居民。有些壁画在背光面，可能需要寻找合适角度避免阴影。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **精品酒店**：选择老城内或紧邻河岸的精品酒店，开窗即是风景，体验沉浸式中世纪氛围。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **家庭旅馆/民宿**：住在当地居民经营的民宿中，更能感受小镇的日常生活，通常性价比更高。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **周边乡村旅舍**：如果自驾，可以选择施泰因周边葡萄园或乡村地区的安静旅舍，享受田园风光。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **沙夫豪森市区酒店**：作为交通枢纽的沙夫豪森市有更多现代酒店选择，乘车往返施泰因也很方便。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">老城内的住宿数量有限且非常热门，尤其是旺季，务必提前预订。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">施泰因老城就像一个被时光精心封存的珠宝盒，不大，但每一寸都闪着温润的光。它没有大城市的喧嚣，有的只是莱茵河的潺潺水声、壁画上凝固的故事、和咖啡杯里飘散的香气。在这里，你会不自觉地放慢脚步，抬头细看每一幅画，猜想它背后的故事。这是一个能让你真正“停下来”的地方，离开时，心里装满了童话般的色彩和宁静。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="全天开放（公共区域）。内部博物馆等景点开放时间各异，通常为10:00-17:00。" />
                <InfoRow icon="🎫" label="门票" value="进入老城区域免费。参观市政厅（Rathaus）内部壁画或林德乌尔姆博物馆（Museum Lindwurm）等单独景点需购票，成人票约5-8瑞士法郎。" />
                <InfoRow icon="📍" label="地址" value="Rathausplatz 1, 8260 Stein am Rhein, Switzerland" />
                <InfoRow icon="🚌" label="交通" value="从苏黎世机场出发：乘坐火车至沙夫豪森（Schaffhausen），再换乘区域火车或巴士前往施泰因，全程约1小时15分钟。从沙夫豪森火车站出发，乘坐巴士约30分钟即可抵达老城中心。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
