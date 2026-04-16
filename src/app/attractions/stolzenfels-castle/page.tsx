import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '施托尔岑费尔斯城堡 Stolzenfels Castle｜莱茵河畔的浪漫主义瑰宝 - 最佳欧洲景点',
  description: '想象一下，你乘着莱茵河的游船，两岸是连绵的葡萄园和古老的小镇，然后，一座童话般的奶油色城堡突然出现在半山腰的绿树丛中，尖顶在阳光下闪闪发光——那就是施托尔岑费尔斯城堡给你的第一眼震撼。它不像那些威严冷峻的军事堡垒，反而像一位优雅的贵族，慵懒地倚在莱茵河畔，俯瞰着千年流淌的河水。走近了，你会发现它的细...',
}

export default function StolzenfelsCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '施托尔岑费尔斯城堡', href: '/attractions/stolzenfels-castle' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">施托尔岑费尔斯城堡</h1>
          <p className="text-xl text-gray-600 mb-4">Stolzenfels Castle</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">德国</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">科布伦茨</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">想象一下，你乘着莱茵河的游船，两岸是连绵的葡萄园和古老的小镇，然后，一座童话般的奶油色城堡突然出现在半山腰的绿树丛中，尖顶在阳光下闪闪发光——那就是施托尔岑费尔斯城堡给你的第一眼震撼。它不像那些威严冷峻的军事堡垒，反而像一位优雅的贵族，慵懒地倚在莱茵河畔，俯瞰着千年流淌的河水。走近了，你会发现它的细节美得惊人：精致的塔楼、浪漫的庭院、爬满藤蔓的城墙，还有从露台望出去那幅绝美的莱茵河谷全景画。整个氛围是宁静而梦幻的，仿佛走进了19世纪浪漫主义诗人的画卷里，时间在这里都慢了下来。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">城堡内部参观通常需要1-2小时。开放时间会因季节和特殊活动（如私人活动）临时调整，出行前建议查看官网最新公告。门票可在城堡入口处购买。城堡内部部分区域（如骑士大厅、国王卧室）有导游讲解（德语），可租用语音导览器（含英语）。请注意，城堡建在山坡上，从停车场或码头到入口有一段上坡路，穿着舒适的鞋子很重要。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">施托尔岑费尔斯城堡的故事，是一部从废墟到浪漫主义象征的华丽转身史。它的“前半生”始于13世纪中叶，由特里尔大主教下令建造，主要是个收税的关卡城堡，扼守着莱茵河的要道。可惜在17世纪的“九年战争”中被法国军队摧毁，此后近150年都只是一片令人唏嘘的废墟。转机出现在19世纪初，当时这片废墟作为礼物，被莱茵兰的民众赠予了普鲁士的王储——也就是后来的腓特烈·威廉四世。这位深受浪漫主义思潮影响的王子，对中世纪的骑士传说和莱茵河风光无比着迷，他决定不重建一座军事堡垒，而是要打造一个属于自己的“浪漫主义梦想之家”。于是，从1836年到1842年，在著名建筑师卡尔·弗里德里希·辛克尔的指导下，城堡在废墟之上“重生”了。新生的城堡融合了中世纪哥特式和新哥特式的风格，内部装潢极尽华丽，充满了对中世纪骑士精神的致敬。它迅速成为德国浪漫主义建筑的典范，也成了王室招待贵宾、举办盛宴的奢华场所。漫步其中，你能强烈感受到那个时代人们对“往昔荣光”的诗意想象与再造。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">推荐游览路线从城堡主庭院开始，依次参观内部华丽厅室，最后登上露台俯瞰莱茵河，全程约1.5小时。路线清晰，基本为单向参观。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  穿过主城门，进入宁静的城堡内庭院。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  参观一楼的骑士大厅，欣赏华丽的壁画和盔甲。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  上楼游览国王和王后的豪华起居室与会客厅。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  漫步穿过浪漫的柱廊和花园庭院。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  登上城堡的露台或高塔，享受无与伦比的莱茵河全景。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">城堡内部房间标识清晰，按顺序参观即可。部分楼梯较窄且陡，建议轻装出行。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **莱茵河对岸远眺点**：最佳拍摄时间为清晨或傍晚，阳光为城堡披上金色。从河对岸的小路或乘船时拍摄，可以拍到城堡与莱茵河、森林融为一体的全景明信片角度。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **城堡主露台**：下午顺光时拍摄最佳。以莱茵河蜿蜒的河道和远处的科布伦茨市为背景，人物或单纯风景都极具层次感和故事感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **内庭院拱廊下**：利用拱门形成天然画框，拍摄庭院中心的喷泉或对面的塔楼，能拍出富有纵深感和古典韵味的照片。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">使用无人机拍摄需提前查询当地法规。室内展厅通常禁止使用闪光灯。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **城堡山脚小镇（Stolzenfels区域）**：有几家温馨的家庭旅馆和民宿，推开窗就能看到城堡，环境安静，价格适中。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **科布伦茨市中心**：酒店选择多，从经济型到豪华型都有，餐饮和交通便利，可乘坐公交或游船轻松往返城堡。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **莱茵河畔酒店**：选择科布伦茨沿河区域的酒店，部分房间可直接欣赏河景与远山上的城堡，体验浪漫的河畔之夜。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">旅游旺季（夏季和葡萄酒节期间）科布伦茨住宿紧张，建议提前预订。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">施托尔岑费尔斯城堡不仅仅是一座建筑，它更像一个被实现的美好梦境。它把莱茵河的壮丽、浪漫主义的幻想和王室的奢华完美地糅合在一起。离开时，你带走的不仅是相机里的美景，更是那种置身于童话中、被历史与自然温柔包裹的宁静感受。如果你来莱茵河，请一定为它留出半天时间，它绝不会让你失望。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="4月至10月：每日 10:00 - 18:00；11月至次年3月：仅周六、周日及节假日 10:00 - 17:00。最后入场时间为闭馆前半小时。" />
                <InfoRow icon="🎫" label="门票" value="成人票：6欧元；优惠票（学生、残疾人等）：4欧元；家庭票（2成人+最多4名儿童）：12欧元。18岁以下儿童免费。" />
                <InfoRow icon="📍" label="地址" value="Stolzenfels Castle, 56075 Koblenz, Germany" />
                <InfoRow icon="🚌" label="交通" value="从科布伦茨中央火车站（Koblenz Hbf）出发，可乘坐650路公交车至“Stolzenfels Schloss”站下车，车程约15分钟。或从科布伦茨市中心码头乘坐KD游船至“Stolzenfels”码头下船，步行上山约10-15分钟。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
