import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布雷根茨老城 Bregenz｜博登湖畔最适合慢逛的山城之一 - 最佳欧洲景点',
  description: '布雷根茨老城依山面湖，既有中世纪 Oberstadt 的石巷和城门，也有博登湖边的开阔水景，是奥地利西端很适合半日慢游的湖畔古城。',
}

export default function BregenzPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '奥地利', href: '/destinations/austria' },
            { label: '布雷根茨', href: '/destinations/austria' },
            { label: '布雷根茨老城', href: '/attractions/bregenz' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">布雷根茨老城</h1>
          <p className="text-xl text-gray-600 mb-4">Bregenz</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">奥地利</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">布雷根茨</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">布雷根茨是奥地利最西端的州府，贴着博登湖东岸展开，城市一头连着湖水，一头顺着山坡慢慢爬进旧城区。第一次到这里很容易被湖边的现代剧场和港口吸走注意力，但真正耐逛的地方其实是山坡上的 Oberstadt，也就是大家常说的布雷根茨老城。石板巷、拱门、城墙残段、修道院和马丁塔被压缩在不大的范围里，走起来特别轻松。</p>
              <p className="text-gray-700 leading-relaxed mb-4">这里最迷人的地方在于节奏。你前一刻还在高处看红瓦屋顶和湖面反光，下一刻就能顺着窄巷走到咖啡馆门口，点一杯咖啡看本地人慢吞吞地过日子。和很多热门湖区城市相比，布雷根茨老城不算拥挤，也没有过分商业化，特别适合安排一个半天，慢慢把中世纪城镇的骨架和博登湖的开阔感一起看完。</p>
            </Section>
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">开放时间：老城街区本身全天开放，没有围栏也没有统一售票口。像马丁塔、旧市政厅附近的小型展馆和博物馆一般以白天时段开放，夏季通常比冬季更晚关门，周一和淡季容易缩短营业时间，出发前最好再看一下官网公告。</p>
              <p className="text-gray-700 leading-relaxed mb-4">门票：逛老城完全免费。若要进马丁塔或周边博物馆，成人票通常在 5 至 7 欧元之间，学生和长者会有优惠。真心建议把钱花在登高看景上，比单纯在巷子里快进式走一圈更值。</p>
              <p className="text-gray-700 leading-relaxed mb-4">地址：Oberstadt, 6900 Bregenz, Austria。</p>
              <p className="text-gray-700 leading-relaxed mb-4">交通：从苏黎世、慕尼黑或维也纳都有直达或一程换乘火车到 Bregenz Hbf；从火车站步行到 Oberstadt 约 10 至 15 分钟，也可转乘市内公交到 Oberstadt 站。自驾走 A14 高速从 Bregenz 出口进入市区，老城外围有港口和市中心停车场，停好车后步行上坡最省心。</p>
              <p className="text-gray-700 leading-relaxed mb-4">最佳游览季节：5 月到 9 月体验最稳，天气温和，湖边光线好，很多露天咖啡馆和湖上活动也都开起来了。秋天也很舒服，游客变少，天气清透，站在高处看湖面和远处山脊特别出片。</p>
              <p className="text-gray-700 leading-relaxed mb-4">建议游览时长：只逛老城核心大概 2 小时足够；如果你还想顺路走港口、坐缆车上 Pfander 或看一场湖上舞台，半天到一天更从容。</p>
              <p className="text-gray-700 leading-relaxed mb-4">注意事项：老城有不少上坡和石板路，鞋子一定要舒服。夏季午后湖边和山坡温差明显，别看白天晒得暖，傍晚风一起来还是得加件薄外套。自驾的话尽量别硬开进老城深处，路窄而且步行体验会被打断。</p>
            </Section>
            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">布雷根茨的历史很早，罗马时期这里就叫 Brigantium，是博登湖东岸重要的交通和防御节点。后来城市逐渐往山坡和湖边扩展，中世纪形成了今天 Oberstadt 的雏形。你在老城里走，会发现街道弯得很自然，房子也不是整齐划一地排开，那种不规则感就是老城长期一点点长出来的痕迹。</p>
              <p className="text-gray-700 leading-relaxed mb-4">最醒目的地标是马丁塔，洋葱顶远远就能认出来。它原本和教堂、防御工事一起构成了老城的核心视觉线索。后来哈布斯堡时期和更近代的城市发展，让布雷根茨有了更多行政、文化和港口功能，于是才形成今天这种很有意思的双重气质：山坡上是旧城，湖边是现代文化空间，两种节奏叠在一起却一点也不突兀。</p>
            </Section>
            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">最顺的走法是从火车站或港口一侧往上慢慢走。先在湖边看一下博登湖和湖上舞台，再顺着城区街道往 Oberstadt 方向爬坡，十几分钟后就会进入更安静的石板街区。建议先去马丁塔附近，把高处视角拿到手，再往周边巷子慢慢散开。</p>
              <p className="text-gray-700 leading-relaxed mb-4">从马丁塔出来后，不用特意查太细的路线，老城本身不大，适合随便拐巷子。很多细节都藏在窗框、门牌、拱门和小广场里。最后再从高处慢慢往湖边方向走下去，把红瓦屋顶、教堂塔楼和湖面一起收进视野，收尾会非常舒服。</p>
            </Section>
            <Section title="拍照机位">
              <p className="text-gray-700 leading-relaxed mb-4">第一处机位在马丁塔前的小广场，上午顺光，塔楼线条最干净，拍建筑和人像都稳。第二处在老城往下看的坡道边，下午光线斜着打过来，红瓦屋顶和远处湖面层次特别好。第三处是港口靠近湖边舞台的位置，傍晚能把湖、水面反光和山坡上的城市轮廓一起拍进来，特别适合收一张大景图。</p>
            </Section>
            <Section title="附近景点">
              <p className="text-gray-700 leading-relaxed mb-4">Pfander 山缆车非常值得顺路去，从市中心过去很方便，上山之后可以俯瞰博登湖和三国交界区域，天气好时视野特别夸张。要是你更偏爱现代建筑和展览，也可以去 Kunsthaus Bregenz，看完再回老城，风格反差会很有意思。</p>
              <p className="text-gray-700 leading-relaxed mb-4">另外湖边步道也别省略。布雷根茨最妙的一点，就是老城和湖景完全可以排进同半天里，不需要来回折腾。上半段逛历史，下半段看水色，整个节奏非常顺。</p>
            </Section>
            <Section title="住宿小贴士">
              <p className="text-gray-700 leading-relaxed mb-4">住火车站和港口附近最方便，交通好、餐厅密度也高，走到老城和湖边都不远。如果你更看重安静，可以选稍微往山坡方向的住宿，但要提前确认是不是需要拖着箱子走石板坡路。自驾的话优先选带停车位的酒店，布雷根茨市区不算难开，但临时找位会有点浪费时间。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="老城街区全天开放；马丁塔及周边展馆通常为白天时段开放，冬季会缩短，建议出发前查看官网最新安排。" />
                <InfoRow icon="🎫" label="门票" value="逛老城免费；马丁塔和周边小型博物馆成人票通常约 5 至 7 欧元。" />
                <InfoRow icon="📍" label="地址" value="Oberstadt, 6900 Bregenz, Austria" />
                <InfoRow icon="🚌" label="交通" value="从苏黎世、慕尼黑或维也纳都有直达或一程换乘火车到 Bregenz Hbf；从火车站步行到老城约 10 至 15 分钟，也可转乘公交到 Oberstadt 站。自驾走 A14 高速进城，建议停在市中心或港口停车场后步行上坡。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
