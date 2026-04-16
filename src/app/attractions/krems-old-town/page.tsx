import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '克雷姆斯老城 Krems Old Town｜漫步多瑙河畔的中世纪时光胶囊 - 最佳欧洲景点',
  description: '想象一下，你沿着缓缓流淌的多瑙河散步，一转弯，就撞进了一片鹅卵石铺就的童话世界——这就是克雷姆斯老城给我的第一印象。它不像那些被游客挤爆的大城市，这里安静得能听见自己的脚步声在古老巷弄里回响。阳光透过彩绘的房屋外墙，把影子拉得长长的，空气里飘着附近酒馆传来的咖啡香和刚出炉的苹果卷的甜味。老城就像个被...',
}

export default function KremsOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '克雷姆斯老城', href: '/attractions/krems-old-town' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">克雷姆斯老城</h1>
          <p className="text-xl text-gray-600 mb-4">Krems Old Town</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">奥地利</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">克雷姆斯</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">想象一下，你沿着缓缓流淌的多瑙河散步，一转弯，就撞进了一片鹅卵石铺就的童话世界——这就是克雷姆斯老城给我的第一印象。它不像那些被游客挤爆的大城市，这里安静得能听见自己的脚步声在古老巷弄里回响。阳光透过彩绘的房屋外墙，把影子拉得长长的，空气里飘着附近酒馆传来的咖啡香和刚出炉的苹果卷的甜味。老城就像个被时光遗忘的角落，城门、钟楼、巴洛克式的立面都保存得完好无损，走在这里，你会不自觉地放慢脚步，感觉自己不是游客，而是不小心闯入了某部中世纪电影的主角。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">老城本身作为开放式街区全年无休。但需注意，城内主要的博物馆如葡萄酒博物馆、 caricature museum 等，周一大多闭馆，冬季（11月至次年3月）开放时间可能缩短。持有“下奥地利州卡”（Niederösterreich-CARD）可免费进入多个合作博物馆。部分教堂在举行宗教活动时会限制游客进入。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">克雷姆斯的故事，得从一千多年前说起。公元995年，它第一次出现在文献记录里，那时就已经是个重要的贸易据点了，因为它正好卡在多瑙河航道和陆路商道的十字路口上，想不繁华都难。到了中世纪，它更是风光无限，靠着盐和葡萄酒贸易富得流油，还在12世纪建起了坚固的城墙和城门来保护自己的财富，我们今天看到的斯坦纳门（Steiner Tor）就是那时候的杰作，也是奥地利现存最古老的中世纪城门之一，像个忠诚的卫士一样站了几百年。15、16世纪是它的黄金时代，那些华丽的巴洛克和文艺复兴风格的市民住宅、教堂和修道院，大多是在这个时期修建或改建的，走在街上，仿佛还能闻到当年商贾云集的喧嚣和酒香。不过，历史总有起伏，后来贸易路线改变，它的地位有所下降，反而因祸得福，躲过了大规模的战火和现代化改造，把中世纪的肌理完整地“冻龄”保存了下来。如今，它不仅是世界文化遗产“瓦豪河谷”的起点，更是一座活生生的建筑史教科书，每一块石头都在低声讲述着葡萄酒、贸易与时光的故事。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">推荐从标志性的斯坦纳门（Steiner Tor）进入老城，作为游览起点。一路向东，沿着主街（Obere Landstraße）漫步，欣赏两侧历史建筑，最终抵达多瑙河畔的克雷姆斯码头。全程步行，悠闲游览约需2-3小时。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从斯坦纳门进入，感受中世纪城门的宏伟。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  沿主街漫步，欣赏彩绘的巴洛克立面与古老店招。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  参观哥特式的圣维特教堂（Pfarrkirche St. Veit）。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  逛逛小巷里的传统手工艺品店和葡萄酒酒庄。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  走到多瑙河畔，在码头边欣赏河谷风光。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">老城不大，完全不需要地图，随心所欲地在小巷中迷路也是一种乐趣。建议穿一双舒适的平底鞋，因为鹅卵石路面虽然风情万种，但对高跟鞋不太友好。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **斯坦纳门前**：清晨或傍晚，从城门外侧拍摄，利用石拱门作为画框，突出历史的纵深感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **主街拱廊下**：上午阳光斜射时，捕捉光影在鹅卵石街道和彩色建筑立面上交织的斑驳效果。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **河畔码头**：日落时分，以多瑙河和远山为背景，拍摄老城轮廓与钟楼的剪影，宁静而富有诗意。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">老城建筑色彩丰富，阴天也能拍出油画般的质感。注意尊重当地居民隐私，避免对着住户窗户拍摄。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **老城内精品酒店**：位置核心，开窗即是历史街景，体验沉浸式中世纪氛围。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **多瑙河畔酒店**：视野开阔，可欣赏河景与老城全景，清晨傍晚散步极佳。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **火车站附近民宿**：性价比高，交通便利，适合预算有限的旅行者。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **瓦豪河谷葡萄酒庄园**：位于城郊山坡，享受田园风光与本地美酒，需短途车程。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">旺季（夏季和葡萄收获季）建议提前预订。住在老城内虽然价格稍高，但能独享清晨与夜晚无人打扰的静谧时刻，非常值得。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">克雷姆斯老城就像一个温和、内敛的长者，不张扬，却充满故事。它没有令人窒息的拥挤，只有流淌的多瑙河和凝固的时光相伴。在这里，最好的旅行方式就是“浪费”时间——坐在广场边喝一杯本地产的雷司令，看鸽子飞过钟楼尖顶。如果你想寻找一个能真正放松脚步、触摸历史纹理的欧洲小镇，来克雷姆斯就对了。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="公共区域全天开放。城内各博物馆、教堂等独立景点开放时间各异，通常为周二至周日 10:00-17:00。" />
                <InfoRow icon="🎫" label="门票" value="进入老城区域免费。参观城内博物馆、艺术馆等需单独购票，票价约5-12欧元不等。" />
                <InfoRow icon="📍" label="地址" value="Krems an der Donau, 3500 Krems, Austria" />
                <InfoRow icon="🚌" label="交通" value="从维也纳国际机场出发，可乘坐火车直达克雷姆斯火车站（Krems Bahnhof），车程约1小时。从火车站步行至老城中心仅需10-15分钟。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
