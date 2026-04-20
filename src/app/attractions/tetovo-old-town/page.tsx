import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '泰托沃老城｜人均几十，解锁百年多元风情 - 最佳欧洲景点',
  description: '泰托沃老城是北马其顿泰托沃市的灵魂所在，藏着巴尔干半岛的多元风情，奥斯曼风格的彩绘清真寺、石板铺就的蜿蜒街巷与基督教教堂交相辉映，烟火气与历史感交织。',
}

export default function TetovoOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '泰托沃老城', href: '/attractions/tetovo-old-town' },
          ]}
        />
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">泰托沃老城</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">🇲🇰 北马其顿 · 泰托沃</span>
            <span className="mr-4">•</span>
            <span>古城</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-800 leading-relaxed">
              泰托沃老城是北马其顿泰托沃市的灵魂所在，藏着巴尔干半岛的多元风情，奥斯曼风格的彩绘清真寺、石板铺就的蜿蜒街巷与基督教教堂交相辉映，烟火气与历史感交织。这里没有过度商业化，当地人的生活节奏缓慢，漫步其间，既能触摸古老建筑的纹路，也能邂逅最真实的北马其顿市井生活，是欧洲小众旅行中不可错过的静谧之地。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">开放时间</h2>
              <p className="text-gray-700 mb-4">
                泰托沃老城整体全年全天开放，无闭园时间，可随时进入游览。核心景点彩绘清真寺开放时间为8:00-18:00，每周五中午12:00-14:00为祈祷时间，不对外开放；阿拉巴蒂巴巴修道院开放时间为9:00-17:00，冬季（11月至次年3月）会提前至16:00闭院，法定节假日正常开放，具体可提前查看现场公告。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">门票</h2>
              <p className="text-gray-700 mb-4">
                老城整体免费开放，无需购买门票即可自由游览所有街巷和公共区域。彩绘清真寺门票为50代纳尔（约合人民币7元），12岁以下儿童、65岁以上老人免费；阿拉巴蒂巴巴修道院门票为40代纳尔（约合人民币5.6元），学生凭学生证可享受半价优惠。亲测真的很实惠，花一杯饮料的钱就能感受百年历史，性价比拉满。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">地址</h2>
              <p className="text-gray-700 mb-4">
                北马其顿泰托沃市老城区（Old Town Tetovo, 1200 Tetovo, North Macedonia），核心区域围绕彩绘清真寺周边，街巷纵横交错，建议以清真寺为起点开始游览，不容易迷路。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">交通</h2>
              <p className="text-gray-700 mb-4">
                外部交通方面，从北马其顿首都斯科普里出发，可乘坐城际大巴前往泰托沃，车程约1小时，票价250代纳尔（约合人民币35元），每小时一班，车站就在斯科普里市中心，很好找；也可自驾前往，沿A1高速公路行驶，车程约50分钟，老城周边有免费露天停车场，不过车位较少，建议早到。内部交通方面，老城街巷狭窄，车辆无法通行，全程只能步行，其实也不远，慢慢逛反而能发现更多惊喜。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">最佳游览季节</h2>
              <p className="text-gray-700 mb-4">
                亲测最佳游览季节是7-10月，这段时间泰托沃的天气最为舒适，平均气温在18-29℃，阳光充足且降水较少，非常适合步行游览，既能避开夏日酷暑，也能躲过冬季的湿冷。我当时是9月初去的，白天穿短袖加薄外套刚好，傍晚有点凉，早晚温差不大，不用带太多厚重衣物。提醒一句，5-6月是当地的雨季，经常会下阵雨，逛起来很不方便，别像我朋友一样，雨天去踩了一身泥。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">建议游览时长</h2>
              <p className="text-gray-700 mb-4">
                如果只是逛核心区域，打卡彩绘清真寺、主广场和主要街巷，2-3小时就足够了；如果喜欢慢逛，想走进小巷深处，感受当地人的生活，逛逛手作小店、尝尝当地小吃，建议预留4-5小时，我当时慢悠悠逛了一下午，还在一家本地咖啡馆歇了会儿，感觉特别惬意，其实没必要赶时间，慢下来才能体会老城的韵味。
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">注意事项</h2>
            <p className="text-gray-700 mb-4">
              石板路真的很废脚，我当天穿了双看起来软其实不顶走的小白鞋，逛两小时脚后跟直接磨红，后来在路边小店临时买了双便宜布鞋才救回来——真心建议直接穿运动鞋，别为了拍照硬扛。当地以伊斯兰教和东正教为主，进入彩绘清真寺需脱鞋，穿着要得体，不能穿短裤、短裙和无袖上衣，我当时差点因为穿了短裤被拦在门外，还好带了一条丝巾裹上才得以进入。老城的小店大多只收现金，移动支付很少普及，建议提前兑换好代纳尔，不用换太多，够买门票和小吃就好，我当时没换现金，想买当地的蜂蜜饼干都没买成，特别遗憾。另外，当地人大多说塞尔维亚-克罗地亚语和阿尔巴尼亚语，旅游区的工作人员会简单英语，但口音较重，沟通时可以放慢语速，实在不行就用手势，亲测很管用。
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">历史背景</h2>
            <p className="text-gray-700 mb-4">
              泰托沃老城的历史可以追溯到15世纪，当时这里是奥斯曼帝国在巴尔干半岛的重要据点，也是连接东西方贸易的交通枢纽，因此留下了大量奥斯曼风格的建筑，其中最具代表性的就是彩绘清真寺，建于15世纪末，墙壁上的彩绘历经数百年依然鲜艳，是奥斯曼建筑艺术的瑰宝。中世纪时期，这里逐渐成为多民族、多宗教共存的地方，基督教教堂与清真寺并肩而立，形成了独特的多元文化氛围。
            </p>
            <p className="text-gray-700 mb-4">
              走在老城的石板路上，能看到斑驳的城墙、古老的门窗，每一处都藏着故事，不像其他老城那样商业化，这里的历史感是融入生活的，清晨能看到当地人在广场上散步、聊天，傍晚能闻到家家户户飘来的食物香气，那种静谧又温暖的氛围，是我在其他欧洲老城很少感受到的。近代以来，泰托沃老城虽然经历过战乱，但大部分古老建筑都被完好保留下来，如今依然是当地居民的主要居住地，没有过度开发，保留着最原始的烟火气，也成为了北马其顿最具代表性的历史文化景点之一。
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">游览路线</h2>
            <p className="text-gray-700 mb-4">
              这座小城逛起来节奏很舒服，如果只想走马观花看看精华，两三个小时足够。一般会从彩绘清真寺出发，再走到老城主广场，顺路看看圣尼古拉斯教堂，最后在手作小店街区慢慢逛。不过我自己走的时候，从清真寺出来就有点累，索性钻进旁边小巷里的一家本地咖啡馆坐了二十分钟，也没特意去圣尼古拉斯教堂，反倒无意间发现一家本地人常光顾的蜂蜜小店。店主特别热情，还邀请我品尝了当地蜂蜜，口感很纯粹，这种不期而遇的惊喜，比照着攻略一个个打卡有意思多了。时间紧张的话，真的不必把所有景点都走完。
            </p>
            <p className="text-gray-700 mb-4">
              想慢慢感受这座城市的话，可以留出四五个小时走一条更深入的路线。时间充裕的话，我常建议别人不要只逛老城中心——不妨多往外走几步咯。从主街往城外慢悠悠晃个十几分钟哪怕一小时又怎么样呢出来玩不就是要这种松弛感，路线上可以经过阿拉巴蒂巴巴修道院。这一路没什么游客扎堆的景点，路两旁都是当地人住了好几代的老房子，墙皮斑驳，没有高楼大厦的压迫感老旧却亲切，和老家房子一样看着就让人踏实。
            </p>
            <p className="text-gray-700 mb-4">
              从修道院出来后，不必急着原路返回。不妨拐进附近的居民区，随便走一走。那里游客就不多了，路上看到的基本上是本地人。你可以静下来观察下他们的生活细节和我们有什么不同，融入其中想象下自己生活在这里的话，每天也是这样子的作息加上家人朋友如果也是在这里是不是反倒让整个巷子活了起来。和都市里匆忙的节奏相比，这里的一切都像被时光轻轻托着——那种不慌不忙的烟火气，其实比什么风景都更能让人松一口气。
            </p>
            <p className="text-gray-700 mb-4">
              逛到腿酸了，就在街边找一家本地人开的小餐馆坐下来歇一下小腿肚子，点一份本地美食尝尝，补充下能量 会有和逛千篇一律美食街不同的体验，味道实在又地道。
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">拍照机位</h2>
            <p className="text-gray-700 mb-4">
              拍照的话，可以不同的角度和切景多试试。彩绘清真寺正门的台阶是经典角度，可以完整拍下整座建筑，彩绘和穹顶都能清晰入镜。建议上午九十点左右过去，光线柔和，能很好地呈现彩绘细节，不容易出现强光反光。我当时起晚了，十一点多才到，阳光太烈，照片反光严重，等到下午三点多再拍，效果就好很多，所以不用死守时间，根据当天光线灵活调整就好。
            </p>
            <p className="text-gray-700 mb-4">
              老城主广场旁的钟楼露台也很值得上去，站在上面可以俯瞰整座老城，红瓦屋顶、蜿蜒的石板路和远处的山峦层层叠叠，画面很有层次。傍晚六七点是最佳时间，夕阳把老城染成温暖的金黄色，氛围感很足，随手一拍都带着生活气息。
            </p>
            <p className="text-gray-700 mb-4">
              老城的小巷也很适合拍照，随便一个转角都很有感觉。以石板路为前景，两旁是色彩明快的老建筑，再配上路边的绿植，很容易拍出氛围感照片。穿浅色系衣服会更协调，我当时穿了一件白衬衫，拍出来干净又清爽。
            </p>
            <p className="text-gray-700 mb-4">
              如果去了阿拉巴蒂巴巴修道院，庭院也是不错的打卡点，古树、石凳搭配古朴的石质建筑，风格简约又有质感，适合拍人像。上午光线柔和，拍出来很安静。只是要注意尊重当地习俗，不要拍摄内部的宗教文物。
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">附近景点</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">1. 泰托沃城堡</h3>
                <p className="text-gray-700 text-sm">
                  距离老城约10分钟车程，可乘坐当地的小型巴士前往，票价10代纳尔，也可步行前往，约25分钟。城堡建于14世纪，是当时的军事要塞，如今只剩下残垣断壁，但站在城堡上可以俯瞰整个泰托沃市的风光，特别壮阔。我当时去的时候，城堡里没有太多游客，很安静，能感受到历史的沧桑感，提醒大家，城堡的台阶比较陡峭，穿运动鞋会更方便，而且上面没有遮阳的地方，夏天去要做好防晒。
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">2. 普雷斯帕湖</h3>
                <p className="text-gray-700 text-sm">
                  距离老城约40分钟车程，是北马其顿、阿尔巴尼亚和希腊三国交界的湖泊，湖水清澈湛蓝，周边群山环绕，风光旖旎。可乘坐环湖游船游览，票价200代纳尔，全程约1小时，能欣赏到湖光山色，还能看到湖边的小村庄，特别治愈。我当时去的时候是下午，湖边有点风，建议带一件薄外套，而且湖边的餐厅价格有点贵，建议提前带点零食和水。
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">3. 泰托沃博物馆</h3>
                <p className="text-gray-700 text-sm">
                  距离老城约5分钟步行路程，门票30代纳尔，里面展示了泰托沃的历史文物、民俗文化和传统手工艺品，能更深入地了解当地的历史。我个人反而觉得博物馆没必要特意去，里面的展品不多，而且大多没有英文介绍，看不懂的话会觉得很无聊，不如多花点时间逛老城的小巷。
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">4. 比斯特里察瀑布</h3>
                <p className="text-gray-700 text-sm">
                  距离老城约30分钟车程，瀑布不算特别大，但周边的自然风光很美，绿树成荫，溪水潺潺，适合喜欢户外的游客。建议夏季前往，水量充足，拍照更好看，而且周边有徒步小径，可徒步欣赏美景，提醒大家，徒步时要穿舒适的鞋子，小径有些湿滑，注意安全。
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">住宿小贴士</h2>
            <p className="text-gray-700 mb-4">
              位置选择上，首选老城内部，步行就能逛遍所有景点，能充分感受老城的烟火气，晚上也很安静，适合休息。我住的那家三楼民宿没电梯，我一个28寸箱子硬生生扛上去，老板看到都笑了，后来发现同条街就有带电梯的小酒店，价格差不多，行李多的真别逞强。其次可以选择老城周边500米范围内的住宿，价格比老城内部稍低，交通也很方便，步行几分钟就能到老城核心区域。
            </p>
            <p className="text-gray-700 mb-4">
              如果预算有限，可选择火车站附近的住宿，交通便捷，适合需要乘坐大巴前往周边景点的游客，火车站附近有很多餐厅和便利店，生活也很便利。预订技巧方面，泰托沃的旅游旺季是7-10月，这段时间游客较多，住宿需求量大，建议提前1-2个月预订，避免出现无房或价格上涨的情况；淡季（11月至次年5月）游客较少，可提前1-2周预订，价格相对实惠，部分住宿还会推出优惠活动。
            </p>
            <p className="text-gray-700 mb-4">
              预订住宿的时候，一定要仔细看评价，重点看卫生和交通是不是方便，尤其是老城里面的民宿。很多老建筑改的民宿，卫生条件差别特别大，我当时就是没仔细看评价，住的那家民宿卫生间有点异味，挺影响体验的。还有几个避坑点跟大家说下：当地大部分住宿都不提供一次性洗漱用品，牙刷、牙膏、拖鞋这些一定要自己带。我当时就忘了带拖鞋，只能光脚在房间里走，别提多不方便了。
            </p>
            <p className="text-gray-700 mb-4">
              另外，住宿一般是14点以后才能入住，11点前要退房，如果想提前入住或者延迟退房，一定要提前跟老板沟通，不然可能会额外收费。还有，老城周边的民宿大多是本地人家庭经营的，晚上10点以后一定要安静点，别影响人家休息，不然会被房东提醒的。
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
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
      </div>
    </div>
  )
}