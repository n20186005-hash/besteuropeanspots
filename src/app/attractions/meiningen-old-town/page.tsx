import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '迈宁根老城 Meiningen Old Town｜图林根的文化瑰宝，漫步在剧院与历史的交响中 - 最佳欧洲景点',
  description: '走进迈宁根老城，就像不小心闯进了一本保存完好的历史画册。第一眼就会被集市广场上那些色彩柔和、立面装饰着精美浮雕的桁架房屋吸引，它们肩并肩站在一起，仿佛在低声诉说着几个世纪的故事。这里的空气里都飘着艺术和音乐的味道，毕竟，这里可是被誉为“剧院城”的地方！你可以想象一下，在鹅卵石铺成的小巷里闲逛，转角可...',
}

export default function MeiningenOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '迈宁根老城', href: '/attractions/meiningen-old-town' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">迈宁根老城</h1>
          <p className="text-xl text-gray-600 mb-4">Meiningen Old Town</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">德国</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">迈宁根</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">走进迈宁根老城，就像不小心闯进了一本保存完好的历史画册。第一眼就会被集市广场上那些色彩柔和、立面装饰着精美浮雕的桁架房屋吸引，它们肩并肩站在一起，仿佛在低声诉说着几个世纪的故事。这里的空气里都飘着艺术和音乐的味道，毕竟，这里可是被誉为“剧院城”的地方！你可以想象一下，在鹅卵石铺成的小巷里闲逛，转角可能就遇上一座华丽的剧院，或者一个藏着珍贵手稿的博物馆。整个老城的氛围是那种悠闲又带着点骄傲的文化感，不喧闹，但底蕴十足，特别适合放慢脚步，感受图林根州独有的那份精致与宁静。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">集市广场周边的建筑和街道全天可自由游览。但需要注意的是，老城内的重要文化场馆，如迈宁根剧院、迈宁根博物馆等的开放时间可能随季节调整，冬季开放时间可能缩短。许多博物馆对学生、儿童和团体有优惠票价，建议行前查看官网。部分历史建筑内部仅在特定导览团开放，需提前预约。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">迈宁根老城的故事，可以说是一部浓缩的萨克森-迈宁根公国兴衰史。它的黄金时代大概要从19世纪算起，当时在公爵格奥尔格二世的统治下，这里可不是个普通小镇，而是整个欧洲的文化焦点之一。这位公爵是个狂热的艺术赞助人，他一手打造了闻名遐迩的“迈宁根宫廷剧院”和其剧团。这个剧团牛到什么程度呢？它巡演全欧洲，重新定义了舞台布景和集体表演，连斯坦尼斯拉夫斯基都深受其影响！你走在老城里，那些新文艺复兴风格的华丽建筑，比如现在的州立剧院，就是那个辉煌时代的直接产物。二战期间，迈宁根幸运地躲过了大规模破坏，所以这些历史风貌才得以完整保存。今天，当你抚摸那些古老墙壁时，仿佛还能感受到当年首演之夜前，演员们既紧张又兴奋的脉搏跳动。从一座公爵的官邸城镇，到一个区域性文化中心，迈宁根老城用它一砖一瓦，记录下了从政治到艺术的权力交接。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">推荐游览时长约2-3小时。路线以中央的集市广场为起点和核心，先领略老城风貌，再探访周边的文化地标，最后可以漫步至城堡公园区域，形成一个环线。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从集市广场开始，欣赏环绕广场的彩色桁架建筑和市政厅。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  参观广场旁的迈宁根博物馆，了解城市历史与文化。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  步行至不远处的迈宁根州立剧院，欣赏其宏伟的建筑外观。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  沿着剧院街漫步，感受老城街巷的宁静氛围。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  前往埃利斯堡城堡，参观城堡建筑并俯瞰城市。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  最后漫步至毗邻的英式景观公园放松休息。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">老城面积不大，非常适合步行探索，无需复杂导航。建议穿着舒适的平底鞋，因为大部分是鹅卵石路面。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **集市广场中心**：最佳拍摄时间为清晨或午后，阳光洒在彩色房屋立面上时。从广场中央拍摄，可以囊括市政厅和一圈历史建筑的全景，画面富有层次感和生活气息。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **剧院广场前的街道**：下午光线柔和时最佳。站在街道一端，以宏伟的州立剧院建筑为背景，捕捉行人或电车经过的瞬间，能拍出很有故事感的城市街景。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **城堡公园的池塘边**：晴朗的傍晚，利用水池倒影拍摄埃利斯堡城堡或公园中的古典亭阁，能获得对称而宁静的画面。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">拍摄建筑立面时，注意避开停放的车辆，寻找干净的角度。室内博物馆通常禁止使用闪光灯。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **中档/特色之选**：选择老城广场或附近的历史酒店或精品旅馆，沉浸感最强，出行便利。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **经济实惠之选**：火车站周边或老城外围的现代酒店或民宿，性价比高，步行到老城也不远。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **独特体验之选**：考虑入住由历史建筑改造的公寓或乡村风格的客栈，体验当地生活。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">如果计划观看剧院演出，建议提前预订老城内的住宿，方便散场后步行返回。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">迈宁根老城就像一个低调而内涵丰富的绅士，它没有夸张的喧嚣，却用满城的艺术气息和历史质感将你温柔包围。在这里，每一步都能踩到文化的音符，每一眼都能看到时光的雕刻。如果你厌倦了人潮汹涌的热门景点，渴望一场安静而深刻的文化漫步，那么迈宁根老城绝对会给你带来意想不到的惊喜和满足。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="公共区域全天开放；内部建筑（如博物馆、剧院）开放时间各异，通常为周二至周日 10:00-17:00。" />
                <InfoRow icon="🎫" label="门票" value="老城公共区域免费；参观特定博物馆或参加导览游需购票，成人票约5-8欧元。" />
                <InfoRow icon="📍" label="地址" value="Markt, 98617 Meiningen, Germany" />
                <InfoRow icon="🚌" label="交通" value="从最近的埃尔福特机场出发，乘坐火车约1.5小时可抵达迈宁根火车站，出站后步行约10-15分钟即可进入老城核心区。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
