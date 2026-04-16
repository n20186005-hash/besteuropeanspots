import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '拉珀斯维尔城堡 Rapperswil Castle｜漫步瑞士湖畔上的玫瑰之城 - 最佳欧洲景点',
  description: '九月底的一个周五午后，我终于踏上了拉珀斯维尔的土地。午后的阳光毫不吝啬，把苏黎世湖晒得满湖碎光，波光粼粼的样子，晃得人眼睛都软了。从火车站一出来，整座小镇的慢节奏就扑面而来——没有匆匆赶路的人，没有刺...',
}

export default function RapperswilCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '拉珀斯维尔城堡', href: '/attractions/rapperswil-castle' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">拉珀斯维尔城堡</h1>
          <p className="text-xl text-gray-600 mb-4">Rapperswil Castle</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">瑞士</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">拉珀斯维尔</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">九月底的一个周五午后，我终于踏上了拉珀斯维尔的土地。午后的阳光毫不吝啬，把苏黎世湖晒得满湖碎光，波光粼粼的样子，晃得人眼睛都软了。从火车站一出来，整座小镇的慢节奏就扑面而来——没有匆匆赶路的人，没有刺耳的鸣笛声，那种松弛感，瞬间就抚平了我一路的疲惫，简直是“治愈系天花板”。早就听说这儿是“玫瑰之城”，我当时还暗自嘀咕：都九月底了，玫瑰估计早谢光了吧？不过既来之则安之，啥也不多想，直奔山头上的城堡就去了。</p>
              <p className="text-gray-700 leading-relaxed mb-4">城堡建得特别有气势，就在老城尽头一块突出来的岩石高地上，三座方形塔楼杵在那儿，老远就能看见，顶着澄澈的蓝天，底下是一片密密麻麻的红瓦屋顶，再往下，就是泛着光的苏黎世湖，随手一拍都是壁纸级别的画面。说实话，去之前我没抱太大期待，总觉得这就是个普通打卡点，走一圈、拍两张照就完事了，没想到一逛就停不下来，在里面晃悠了快两个小时。城堡周围全是玫瑰丛，虽说九月底已经过了盛花期，但还是有不少晚开的玫瑰在“倔强营业”，粉色、深红、鹅黄，一朵朵缀在灰色的石墙上，温柔得不像话。走到北坡的时候，突然听到一阵小孩子的尖叫，凑过去一看，好家伙，一群黇鹿正趴在山坡上晒太阳，懒懒散散的，特别可爱。我特意问了工作人员，这片鹿园从1871年就有了，还跟当年建城贵族的狩猎故事有关，现在成了大人小孩都爱蹲的“撸鹿宝地”（只能看不能撸哈）。</p>
            </Section>
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">开放时间：</p>
              <p className="text-gray-700 leading-relaxed mb-4">敲黑板！重点提醒！城堡博物馆和波兰国家博物馆，每周二到周日10点到17点开放，周一妥妥休息，别跑空！还有，别跟我一样傻，以为瑞士所有景点都全年无休，11月1日、12月24日到26日这几天，城堡是关门的，要是赶在这几天来，可就真的扑空啦，多尴尬。</p>
              <p className="text-gray-700 leading-relaxed mb-4">门票：</p>
              <p className="text-gray-700 leading-relaxed mb-4">价格给大家整理好啦，直接抄作业：成人14瑞士法郎，退休人员和学生有优惠，只要9瑞郎，6到16岁的小朋友6瑞郎，6岁以下的小朋友免费，带娃的可以参考下。</p>
              <p className="text-gray-700 leading-relaxed mb-4">地址：</p>
              <p className="text-gray-700 leading-relaxed mb-4">Lindenhügel， 8640 Rapperswil-Jona，直接导航就能到，不用绕路。</p>
              <p className="text-gray-700 leading-relaxed mb-4">交通：</p>
              <p className="text-gray-700 leading-relaxed mb-4">可以从苏黎世主火车站坐S5、S7或者S15号线火车，时间大概36到40分钟就能直达Rapperswil SG站，出站就是老城区，完全不用打车，步行五分钟就能走到城堡山脚，超级方便。</p>
              <p className="text-gray-700 leading-relaxed mb-4">最佳游览季节：</p>
              <p className="text-gray-700 leading-relaxed mb-4">真心建议，5月到10月来最合适！尤其是6月，玫瑰全盛的时候，超过15000株玫瑰一起绽放，整个城堡都被花海包围，空气里都是甜甜的花香，美到失语。</p>
              <p className="text-gray-700 leading-relaxed mb-4">但如果怕人多、想安安静静逛，9月底到10月初也超舒服，天气凉爽，游客少了一大半，逛起来特别自在。</p>
              <p className="text-gray-700 leading-relaxed mb-4">游览时长</p>
              <p className="text-gray-700 leading-relaxed mb-4">也给大家参考下：只逛城堡和周围，2到3小时就够了；要是想把湖边木桥、旧城小巷都逛一遍，建议预留半天时间，慢慢逛、慢慢感受，才不辜负这份松弛。</p>
              <p className="text-gray-700 leading-relaxed mb-4">注意事项：</p>
              <p className="text-gray-700 leading-relaxed mb-4">再给大家提几个小提醒，避坑不踩雷：城堡里的石阶特别多，一定要穿舒服的鞋子，别穿高跟鞋，不然逛完脚能疼到哭；鹿园里的小鹿可以看，但绝对不能喂食，只能看不能撸哈，工作人员会提醒的；山坡上风比较大，尤其是傍晚会明显降温，记得带一件薄外套，别着凉了哦。</p>
            </Section>
            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">关于这座城堡的历史，不用查资料，只要沿着老城的小巷往山上走，仔细观察就会发现有的窗户下面爬着细细的玫瑰藤，有的门口还会放着老旧的木椅子，一看就是住了好几代人的老宅子里，满满的生活气息儿。</p>
              <p className="text-gray-700 leading-relaxed mb-4">这座城堡大概在1200到1220年间，由拉珀斯维尔家族修建，后来被瑞士联邦接管，当过行政中心，也做过监狱，曾经一度破败得不成样子。这种状态直到1870年，才有了转机——一位波兰流亡伯爵租下了这座城堡，并且自掏腰包主持了修缮，还在里面成立了波兰国家博物馆，并一直保留到现在。</p>
              <p className="text-gray-700 leading-relaxed mb-4">逛城堡的时候你会发现，它没有其他古堡那种沉重的压迫感，不知道是不是玫瑰之城都缘故，她反而像一位坐在这里看尽了风雨的老人，安安静静地坐在苏黎世湖边儿，温柔又有力量。登上城墙边的大露台，眼前的景色瞬间铺开：对面的阿尔卑斯山格拉鲁斯山脉，在晴天里轮廓分明；老城区的钟楼尖顶就在脚下；火车缓缓从湖上木桥穿过，明轮船慢悠悠地划过水面，岁月静好大概就是这个样子。都说岁月静好总有人替你负重前行，这个人可能就是这座城吧。就在那一瞬间，拉珀斯维尔城堡几百年的故事，仿佛都化成了眼前的这幅画面，心里只剩一个念头：这地方，来对了，真好。这就是她的历史了</p>
            </Section>
            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">分享一下我当时的游览路线，亲测顺路又舒服，大家可以参考：从火车站出来，直接钻进旧城的主街，顺着缓坡慢慢往上走，路边有一家卖冰淇淋的小店，真心推荐开心果味，口感特别醇厚，顺一杯拿着边走边吃，幸福感拉满。路过圣约翰教堂的时候，可以进去转一圈，午后的阳光透过彩色玻璃窗，洒在教堂里，光影特别好看，安安静静坐两分钟，特别治愈。然后从教堂左侧的石阶继续往上，穿过城堡门洞，就进到内庭了。重点提醒！别像我一样傻乎乎地直奔博物馆，亲测先去北侧看鹿园更顺路，看完小鹿再往南走，就是那片玫瑰花圃和大露台，站在城墙边拍完照，再进博物馆慢慢逛，节奏刚刚好。逛完博物馆，别急着原路返回，从城堡南侧的石阶下去，有一条湖边步道，可以绕着城堡山脚走一圈，水边的芦苇被风吹得沙沙响，能看到远处停泊的帆船，还有漂在水面上的天鹅，视野特别开阔，跟从城墙上看是完全不一样的感觉，真心建议大家走一圈。</p>
            </Section>
            <Section title="拍照机位">
              <p className="text-gray-700 leading-relaxed mb-4">作为一个爱拍照的人，我特意记了几个出片机位，分享给大家，不用找角度，随手拍都好看：</p>
              <p className="text-gray-700 leading-relaxed mb-4">第一处，城堡主庭院正中央，上午10点到11点是顺光，人站在庭院中间，身后是城门洞和三座塔楼，拍人像的时候脸不会暗，成片自带欧洲古堡的高级感，氛围感直接拉满。</p>
              <p className="text-gray-700 leading-relaxed mb-4">第二处，北侧鹿园上方的城墙边，傍晚5点到6点是逆光，湖面会变成金色，要是能拍到人和鹿群同框，剪影超级有感觉，朋友圈发图绝对点赞爆棚。</p>
              <p className="text-gray-700 leading-relaxed mb-4">第三处，城堡南面玫瑰花圃靠近矮墙的拐角，下午2点到4点，能同时拍到玫瑰丛、三座塔楼和湖景，层次特别丰富，不管是拍风景还是拍人像，都很好看。</p>
              <p className="text-gray-700 leading-relaxed mb-4">第四处，从城堡往旧城方向下山的石阶路，第一个拐弯的平台，顺光的时候拍，背景是层层叠叠的红瓦屋顶和远山，特别能拍出欧洲小镇的肌理感，温柔又出片。</p>
              <p className="text-gray-700 leading-relaxed mb-4">第五处，别往人堆里挤！城堡东侧有一条不起眼的小路，通向葡萄园下方的观景台，上午侧光的时候几乎没人，能拍到整个城堡的完整轮廓，还有湖面的倒影，小众又高级，避开人群拍大片就靠它。</p>
            </Section>
            <Section title="附近景点">
              <p className="text-gray-700 leading-relaxed mb-4">附近的景点都在步行范围内，不用赶时间，慢慢逛就好：</p>
              <p className="text-gray-700 leading-relaxed mb-4">波兰博物馆就在城堡里，藏品不算特别多，但有不少波兰流亡社群的历史资料，要是对这段历史感兴趣，可以顺带看看，半小时就足够了，不耽误逛其他地方。</p>
              <p className="text-gray-700 leading-relaxed mb-4">圣约翰教堂紧挨着城堡西侧，免费开放，内部特别安静肃穆，逛的时候发现，靠门口的祈祷蜡烛台可以自行投币点燃，我当时坐了一会儿，听着远处传来的管风琴声音，整个人都静下来了，特别治愈。</p>
              <p className="text-gray-700 leading-relaxed mb-4">从山脚往湖边走，大概8分钟就能到那座木桥，全长八百多米，据说是瑞士最长的木桥，一直通向湖对岸的赫登。我当时本来想走到头看看，结果走到一半，湖风太大，吹得我直缩脖子，果断折返——这是我踩过的小坑，提醒大家，湖上风真的比岸边大很多，要是风大的话，就别硬往前走啦。</p>
              <p className="text-gray-700 leading-relaxed mb-4">沿着湖边散步的时候，阳光把路面晒得微微发烫，湖面上飘来一阵阵烤鱼和咖啡的混合香气，远处教堂的钟声隔一会儿就响一次，没有匆忙的脚步，没有嘈杂的声音，整个人的节奏都被这座小镇调慢了。</p>
              <p className="text-gray-700 leading-relaxed mb-4">如果时间充裕，还是可以坐船回苏黎世的，两小时左右的航程，从湖面上看城堡，又是另一种韵味，特别值得体验。</p>
            </Section>
            <Section title="住宿小贴士">
              <p className="text-gray-700 leading-relaxed mb-4">来拉珀斯维尔（Rapperswil-Jona）住了3天，踩过坑也挖到了宝，结合当地地形、景点位置和出行需求，整理了这份超实用的住宿小贴士，给后续来的小伙伴避坑，主打一个省心、舒适又贴合当地体验～</p>
              <p className="text-gray-700 leading-relaxed mb-4">首先说最火的老城区住宿，这里离拉珀斯维尔城堡最近，步行5-10分钟就能到城墙边，逛城堡、看苏黎世湖都特别方便。</p>
              <p className="text-gray-700 leading-relaxed mb-4">但真心提醒，带大行李箱、老人或小孩的小伙伴慎选！老城区的宅子大多是老建筑，即便经过修缮，也基本没有电梯，狭窄的楼梯+石板路，搬行李真的会累到怀疑人生。</p>
              <p className="text-gray-700 leading-relaxed mb-4">不过优点也足够吸引人，晚上八九点后，巷子里特别安静，暖黄的路灯照着石板路，偶尔能听到附近住户的钢琴声，晚风里带着苏黎世湖的湿润气息，这种静谧又治愈的氛围，是住酒店完全体验不到的，喜欢慢节奏、追求氛围感的小伙伴可以冲。</p>
              <p className="text-gray-700 leading-relaxed mb-4">如果是家庭出行、带娃或行李较多，优先选湖边或火车站附近的住宿，这两个位置是性价比和便捷度的天花板。</p>
              <p className="text-gray-700 leading-relaxed mb-4">湖边住宿大多能看到苏黎世湖景，早上醒来就能看到湖面波光粼粼，步行到城堡也不远，而且路面平坦，没有台阶，推婴儿车、拉行李箱都很轻松；火车站附近则主打出行便捷，不管是坐公交去周边小镇，还是返程，都不用绕路，周边还有超市、餐厅，买东西、吃正餐都很方便，省去很多奔波。</p>
              <p className="text-gray-700 leading-relaxed mb-4">关于郊区民宿，真心不建议为了省钱选太远的！我当时看到郊区民宿比市区便宜一半，一时心动订了，结果后悔到不行。</p>
              <p className="text-gray-700 leading-relaxed mb-4">拉珀斯维尔的郊区离市区和景点都比较远，晚上7点后公交班次就很少了，返程只能打车，我一次从市区打车回郊区，花了将近40瑞郎，折算下来比住市区还贵，而且晚上独自出行也不太方便，性价比极低。</p>
              <p className="text-gray-700 leading-relaxed mb-4">还有一个关键提醒：</p>
              <p className="text-gray-700 leading-relaxed mb-4">夏季来一定要提前订房！尤其是玫瑰季（当地玫瑰盛放的时节），拉珀斯维尔的房源会特别抢手，不管是老城区民宿还是湖边酒店，晚了不仅没好位置，价格还会涨不少，我提前两个月订的湖边民宿，比临期订便宜了近三分之一，还选到了看湖景的房间。</p>
              <p className="text-gray-700 leading-relaxed mb-4">最后补充两个小细节：</p>
              <p className="text-gray-700 leading-relaxed mb-4">一是老城区部分民宿没有空调，夏季来的话可以提前问清楚，避免闷热；</p>
              <p className="text-gray-700 leading-relaxed mb-4">二是住宿尽量选步行范围内有餐厅或超市的，晚上不想跑远，买瓶水、吃点简餐会很方便，也能更好地感受当地的烟火气。</p>
              <p className="text-gray-700 leading-relaxed mb-4">总的来说，追求氛围感选老城区（无行李/轻行李优先），追求便捷舒适选湖边或火车站附近，别为了省钱住郊区，夏季提前订房，这样在拉珀斯维尔的住宿体验会好很多～</p>
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
                <InfoRow icon="🕒" label="开放时间" value="全天开放" />
                <InfoRow icon="🎫" label="门票" value="免费" />
                <InfoRow icon="📍" label="地址" value="Schloss Rapperswil, Lindenhugel, 8640 Rapperswil-Jona, Switzerland" />
                <InfoRow icon="🚌" label="交通" value="从苏黎世中央车站乘 S5、S7 或 S15 约 35 至 40 分钟到 Rapperswil 站，出站步行约 8 分钟上城堡；从圣加仑乘 Voralpen-Express 约 50 分钟可达。自驾可走 A3 高速在 Rapperswil-Jona 下，停在 Bahnhof 或 Altstadt 周边停车场后步行进入老城。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
