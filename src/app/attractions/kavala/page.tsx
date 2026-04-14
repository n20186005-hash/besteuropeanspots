import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '希腊小众旅行攻略｜卡瓦拉老城实用指南，新手轻松出行 - 最佳欧洲景点',
  description: '帕纳吉亚（Panagia）是卡瓦拉的老城，一座从爱琴海边拔地而起的半岛，像阶梯剧场一样层层叠到山顶。铺满鹅卵石的窄巷、褪色的奥斯曼豪宅，还有随时能瞄见的海景，让它比希腊大多数岛屿都更耐逛。...',
}

export default function KavalaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '卡瓦拉老城', href: '/attractions/kavala' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">卡瓦拉老城</h1>
          <p className="text-xl text-gray-600 mb-4">Kavala</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">希腊</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">卡瓦拉</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">帕纳吉亚（Panagia）是卡瓦拉的老城，一座从爱琴海边拔地而起的半岛，像阶梯剧场一样层层叠到山顶。铺满鹅卵石的窄巷、褪色的奥斯曼豪宅，还有随时能瞄见的海景，让它比希腊大多数岛屿都更耐逛。</p>
            </Section>
            <Section title="建议游览时长">
              <p className="text-gray-700 leading-relaxed mb-4">逛老城窄巷+爬城堡+发呆喝咖啡，至少4小时。别像我一样把城堡放最后一站，爬到顶太阳都快下山了。</p>
            </Section>
            <Section title="注意事项">
              <p className="text-gray-700 leading-relaxed mb-4">优先选抓地力好的鞋子如果没有建议穿防滑平底鞋！那些磨得发亮的石板路雨后很滑。带现金，至少30欧，很多老城小馆子不收卡。周日很多店铺关门。</p>
            </Section>
            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">老城叫帕纳吉亚（Panagia），意思是“圣母”，建在港口东边的半岛上，整座城从海平面一路爬到山顶。卡瓦拉的历史能追溯到公元前7世纪，当时萨索斯岛的希腊人来这儿建了个叫尼亚波利斯（Neapolis）的殖民地，看中的是航道和金矿。之后它被拜占庭、威尼斯人轮流坐庄，名字也改成了赫里斯图波利斯（Christoupoli）。1391年拜占庭城堡被毁，奥斯曼人在15世纪又用本地花岗岩重建了现在的城堡，还在16世纪修了那座标志性的水渠卡马雷斯（Kamares）。走在老城那些歪歪扭扭的巷子里，你可能会突然撞见哈利勒·贝伊清真寺的红墙，或者伊马雷特那栋融合了西方和奥斯曼风格的建筑群。这座城最迷人的地方，就是历史没有躺在教科书里，而是活在每一块被踩得发亮的石头里。</p>
            </Section>
            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">从港口边的穆罕默德·阿里广场出发，先看看那座18世纪豪宅改造的博物馆，他在这儿出生，后来成了埃及的统治者。然后沿着石板路往上走，两边的老商铺卖香料、手工皂和金银首饰。走到卡马雷斯水渠底下抬头看，60个拱门整整齐齐排开，25米高，拍照很出片。接着穿过帕纳吉亚区的迷宫窄巷，墙上时不时冒出一丛开得正艳的夹竹桃，或者一只猫蹲在石墙上晒太阳。走到最顶上就是15世纪的城堡，爬上圆塔或者城墙，整个卡瓦拉的红色屋顶、港口和远处的爱琴海全收进眼底。逛完城堡顺着另一边的台阶慢慢下到港口，找家海鲜小馆坐下，吹着海风吃盘烤章鱼。</p>
            </Section>
            <Section title="拍照机位">
              <p className="text-gray-700 leading-relaxed mb-4">卡马雷斯水渠正下方的石板路上，下午4点到5点顺光，拱门的阴影和阳光交错，拍人像很有光影感。城堡的圆塔顶上，傍晚6点半到7点半，逆光下的爱琴海泛着金光，港口和红色屋顶全在脚下，这是整个城市最震撼的角度。老城里那条叫“Panagia”的上坡窄巷，拐角处有一面粉刷成明黄色的墙，上午10点前光线柔和，拍半身人像衬得肤色很好。穆罕默德·阿里广场西侧的石阶上，上午9-11点顺光，背景是故居的奥斯曼式木窗和远处的海。</p>
            </Section>
            <Section title="附近景点">
              <p className="text-gray-700 leading-relaxed mb-4">逛完老城顺坡溜到港口，走路不到5分钟，傍晚渔船回港，在港口的Nemesis餐厅点杯酒看日落很惬意。卡瓦拉考古博物馆在老城脚下，门票4欧，逛一圈大概45分钟。真心值得专门花半天去腓立比考古遗址，联合国教科文组织世界遗产，距离卡瓦拉只有15公里。从老城打车过去单程约15欧，或者坐本地公交车。那里有罗马广场、大剧场和使徒保罗被关过的监狱，夏季8:00-20:00开放，门票包含在考古遗址和博物馆的通票里（20欧）。</p>
            </Section>
            <Section title="住宿小贴士">
              <p className="text-gray-700 leading-relaxed mb-4">住老城区的民宿？说实话氛围是真没得挑。推开窗就是石板路、彩色老墙，晚上躺在床上还能听见海浪拍港口的闷响。但我踩过的小坑你一定得听：老房子全是那种又窄又陡的木头楼梯，我那次拎了个28寸的箱子，吭哧吭哧爬了二十多级石阶才到三楼，手掌磨得通红，半路还歇了两回。真心建议，行李超过20寸就别跟自己过不去了，住新城吧。港口边那些酒店就挺稳当，平地拖箱，脚都不用抬一下，走到老城入口也就晃个10分钟。预订的时候留个心眼，翻翻评论区，看见“stairs”或者“steep steps”这几个字你就懂了，这是老城住宿的隐藏雷点。对了，别像我一样图便宜住到郊区去。省下来那十几欧房费，晚上八点以后公交一停，全得贴给出租车，一趟就七八欧，打两趟比住市中心还贵。卡瓦拉整体住宿比雅典便宜一截，旺季（6月到9月）提前两三周订比较稳，不然好的港口位置就被抢光了。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="老城区全天开放。城堡（Kavala Fortress）旺季（4月-10月）8:00-20:00，淡季（11月-3月）8:00-16:00。" />
                <InfoRow icon="🎫" label="门票" value="进老城免费。城堡全价票旺季4.5欧、淡季4欧，优惠票（6-18岁及团体）旺季2.5欧、淡季2欧，6岁以下免票。穆罕默德·阿里故居博物馆门票5欧。" />
                <InfoRow icon="📍" label="地址" value="Old Town of Kavala, Kavala, Greece。" />
                <InfoRow icon="🚌" label="交通" value="亲测最舒服是飞到塞萨洛尼基（SKG），机场出门就有KTEL大巴直达卡瓦拉，车程约2小时，票价15-18欧。卡瓦拉也有小机场（KVA），但航班很少，从雅典飞过来落地后打车到市区30分钟，约30-35欧。市内从公交总站走到老城入口也就10分钟，打车起步价3.5欧。
最佳季节
4-6月或9-10月。6月初正午鹅卵石路烫脚，真心建议避开7-8月的正午。9月底有海节，港口有音乐会和烤海鲜。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
