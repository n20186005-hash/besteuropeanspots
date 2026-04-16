import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '诺维萨德要塞 Petrovaradin Fortress｜多瑙河畔的“多瑙河上的直布罗陀” - 最佳欧洲景点',
  description: '嘿，如果你来诺维萨德，一定不能错过河对岸那座“趴”在山上的大家伙——诺维萨德要塞。第一眼看到它，你会觉得它像个从历史书里走出来的巨人，沉稳地守护着脚下的多瑙河和整个城市。爬上山坡，走进那厚重的石墙，瞬间就远离了城市的喧嚣。这里视野无敌，整个诺维萨德的红屋顶和老城区教堂的尖顶都在你脚下铺开，多瑙河像一...',
}

export default function PetrovaradinFortressPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '诺维萨德要塞', href: '/attractions/petrovaradin-fortress' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">诺维萨德要塞</h1>
          <p className="text-xl text-gray-600 mb-4">Petrovaradin Fortress</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">塞尔维亚</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">诺维萨德</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">嘿，如果你来诺维萨德，一定不能错过河对岸那座“趴”在山上的大家伙——诺维萨德要塞。第一眼看到它，你会觉得它像个从历史书里走出来的巨人，沉稳地守护着脚下的多瑙河和整个城市。爬上山坡，走进那厚重的石墙，瞬间就远离了城市的喧嚣。这里视野无敌，整个诺维萨德的红屋顶和老城区教堂的尖顶都在你脚下铺开，多瑙河像一条闪闪发光的丝带缓缓流过。要塞里现在充满了艺术气息，有很多画家的工作室，鹅卵石小路特别有感觉。最神奇的是那座著名的“醉酒钟楼”，它的时针和分针是反着装的，据说为了让河上的船夫在远处也能看清时间。站在这里，吹着河风，你会感觉历史和现代生活以一种特别悠闲的方式融合在了一起。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">地下隧道导览游是热门项目，通常每天有固定场次（如11:00, 13:00, 15:00等），且有人数限制，强烈建议提前预订。夏季（7月）这里会举办盛大的EXIT音乐节，届时整个要塞会变成狂欢的海洋，但部分常规参观可能会受影响。冬季部分室内场馆开放时间可能缩短。要塞内咖啡馆和餐厅营业时间独立于参观时间。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">诺维萨德要塞的故事，简直就是一部欧洲军事史的微缩剧本。我们现在看到的宏伟石堡，主要建于1692年至1780年之间，由哈布斯堡王朝的军事工程师们设计建造，用来抵御奥斯曼帝国的进攻。但你如果往下挖，会发现它的“地基”更古老——古罗马时代这里就有营地，后来中世纪匈牙利人也建过城堡。奥地利人接手后，把它打造成了当时最先进的堡垒之一，据说地下有四层、长达16公里的隧道网络，像座迷宫，士兵和物资能在里面秘密移动。它最辉煌（或者说最紧张）的时刻是在1848-1849年革命期间，经历了残酷的围攻。时过境迁，枪炮声早已远去，这座曾经的军事巨人慢慢“退休”了。二战后，它逐渐向公众开放，艺术家们搬了进来，古老的兵营变成了画室。最让我感慨的是，它从一座分隔两岸的军事壁垒，变成了连接城市文化与历史的象征，每年夏天的EXIT音乐节更是让全世界的年轻人在这里狂欢，这大概是当年的建造者们怎么也想不到的结局吧。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">推荐游览时间约2-3小时。路线从穿过Varadin大桥、从主入口（Stari Grad门）进入要塞开始，先感受整体气势并俯瞰全景，然后探索上城区的主要广场和钟楼，接着可以选择参加地下隧道导览（核心体验），最后在要塞城墙或咖啡馆放松，欣赏多瑙河日落。路线终点可设在要塞内的餐厅或礼品店附近。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从主入口（Stari Grad门）进入，感受巨大防御工事的震撼。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  登上城墙或观景平台，360度俯瞰诺维萨德城市全景和多瑙河。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  参观地标“醉酒钟楼”及上城区广场，感受艺术氛围。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  参加地下隧道导览游（强烈推荐），探索神秘的军事迷宫。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  漫步至下城区，参观“荣耀之门”和圣母教堂。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  在城墙边的长椅或咖啡馆休息，享受宁静时光。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">地下隧道内阴凉潮湿，温度较低，建议带一件薄外套。要塞内上下坡和台阶较多，请穿舒适的步行鞋。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **Varadin大桥上**：最佳拍摄时间为清晨或傍晚蓝调时刻。从桥上面向要塞拍摄，可以将多瑙河、大桥和宏伟的要塞全景一同纳入镜头，构图非常大气。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **上城区观景平台**：最佳时间为白天光线充足时。以“醉酒钟楼”为前景，诺维萨德城市天际线为背景，是经典明信片角度。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **要塞城墙垛口**：最佳时间为日落时分。透过古老的石砌垛口框架，拍摄多瑙河上的夕阳和行驶的船只，画面富有层次感和故事感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **地下隧道入口处**：利用隧道口的拱形结构和昏暗光线，拍摄人物剪影或探索感十足的氛围照。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">使用广角镜头可以更好地捕捉要塞的宏伟和全景。夜间要塞会有灯光照明，拍摄夜景也别有风味。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **预算之选**：诺维萨德市中心（左岸）的青年旅舍或经济型酒店，价格实惠，夜生活丰富，过桥即可到达要塞。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **特色之选**：Petrovaradin堡垒区（右岸）的民宿或小型精品酒店，真正住在历史氛围里，清晨和夜晚的堡垒格外宁静。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **高端之选**：多瑙河畔的五星级酒店，享受河景房，同时便捷前往市中心和要塞。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **音乐节之选**：若为EXIT音乐节前来，可提前数月预订堡垒内的露营区或附近的公寓，体验最地道的节日氛围。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">音乐节期间（7月初）住宿非常紧张且价格飙升，务必尽早预订。平时选择住在左岸市中心会更方便就餐和体验城市生活。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">诺维萨德要塞给我的感觉，就像一位历经沧桑却变得温和睿智的老兵。它不再挥舞刀剑，而是摊开手掌，向每一个来访者展示历史的纹路和当下的美好。在这里，你能触摸到冰冷的战争石墙，也能感受到炙热的艺术心跳；能听到风中遥远的故事，也能看到眼前流淌的蓝色多瑙河。它不仅仅是诺维萨德的地标，更是这座城市的灵魂客厅，安静地讲述着过去，也愉快地拥抱着现在和未来。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="要塞地面区域全天24小时开放。地下隧道导览游、博物馆及艺术工作室开放时间一般为周二至周日 10:00-18:00（夏季可能延长），周一闭馆。具体时间随季节变动，建议行前查询官网。" />
                <InfoRow icon="🎫" label="门票" value="进入要塞城堡区域免费。参观地下隧道、博物馆或参加导览游需购票，成人票价约300-600第纳尔（约合3-6欧元），学生、儿童及团体有优惠。" />
                <InfoRow icon="📍" label="地址" value="Petrovaradin Fortress, Petrovaradin, Novi Sad 21131, Serbia" />
                <InfoRow icon="🚌" label="交通" value="从贝尔格莱德尼古拉·特斯拉机场出发：可乘坐机场大巴或打车至诺维萨德市中心（车程约1-1.5小时），再从市中心步行穿过Varadin大桥即达要塞山脚下（步行约15-20分钟），或乘坐当地公交车（如线路3、9、60等）至Petrovaradin站。从诺维萨德火车站/汽车站：打车约10分钟，或乘坐公交车至市中心后步行过桥。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
