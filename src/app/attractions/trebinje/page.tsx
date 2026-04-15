import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '巴尔干小众目的地指南｜波黑特雷比涅老城，人少景美超治愈 - 最佳欧洲景点',
  description: '特雷比涅老城是一座藏在波黑最南端、距离克罗地亚杜布罗夫尼克仅约30公里的小镇，坐落在特雷比什尼察河沿岸的山谷里，四周山丘环绕，往南再走十来公里就到亚得里亚海边了。老城核心区不大，鹅卵石窄巷纵横交错，石...',
}

export default function TrebinjePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '特雷比涅老城', href: '/attractions/trebinje' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">特雷比涅老城</h1>
          <p className="text-xl text-gray-600 mb-4">Trebinje</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">波黑</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">特雷比涅</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">特雷比涅老城是一座藏在波黑最南端、距离克罗地亚杜布罗夫尼克仅约30公里的小镇，坐落在特雷比什尼察河沿岸的山谷里，四周山丘环绕，往南再走十来公里就到亚得里亚海边了。老城核心区不大，鹅卵石窄巷纵横交错，石砌老屋外墙上爬满了葡萄藤和青苔，河岸两侧是茂密的老梧桐树，夏天树荫浓得能把整条步道遮住。我走在街上逛着逛着发现，这里没有杜布罗夫尼克那种拥挤的人潮，也没有莫斯塔尔那种旅游团大巴排着队的喧嚣，满城是一种说不清的松弛感。亲测下来，特雷比涅旅游特别适合想慢下来的人，无论是特雷比涅一个人背包游、波黑小众景点深度探索，还是和伴侣牵着手在河边散步，都能在这里找到属于自己的节奏。有小孩的家庭也不会太累，老城里几乎没有陡坡和长台阶，推着婴儿车走起来很轻松，整座城平缓得就像本地人的性子。</p>
              <p className="text-gray-700 leading-relaxed mb-4">基本信息方面，波黑特雷比涅老城本身是一个开放的历史街区，不设统一门票，核心景点散落在老城及周边，游览时随时可以进出。城里的赫塞戈瓦奇卡博物馆开放时间为周二至周日10:00-18:00（周一闭馆），门票约5波黑马克（折合约2.5欧元）。距离老城约5公里的特弗多什修道院每日9:00-17:00开放，免门票入场。</p>
              <p className="text-gray-700 leading-relaxed mb-4">老城边缘的布兰科维奇塔在工作日9:00-16:00开放，周末需要预约，门票约3波黑马克（折合1.5欧的样子）。</p>
              <p className="text-gray-700 leading-relaxed mb-4">夏季旺季（5月至9月）个别小景点可能延后些关门，</p>
              <p className="text-gray-700 leading-relaxed mb-4">冬季（11月至2月）部分场所下午三四点就收工了，要去的行程要规划好。</p>
              <p className="text-gray-700 leading-relaxed mb-4">老城广场和河边步道全年全天免费开放，春夏交替时节游客最多，想安静逛的话真心建议挑春秋的清晨或黄昏时候去。</p>
              <p className="text-gray-700 leading-relaxed mb-4">最佳游览季节这块，亲测5月到6月初、9月到10月中旬最舒服。</p>
              <p className="text-gray-700 leading-relaxed mb-4">白天阳光温暖但不灼人，石板路被晒得微微发烫踩上去有种懒洋洋的踏实感，空气里飘着河水的潮湿气息和街边咖啡馆飘出来的烤肉香。</p>
              <p className="text-gray-700 leading-relaxed mb-4">7月到8月的特雷比涅白天能热到三十五六度，河边的梧桐树荫下还算能待，但中午的石板老城简直是蒸笼，热得人连相机都懒得举。</p>
              <p className="text-gray-700 leading-relaxed mb-4">10月中下旬到11月秋日的晚风微凉，河面起雾时老城轮廓若隐若现，很有巴尔干秋天那种苍凉的美感，就是拍照容易手抖。</p>
              <p className="text-gray-700 leading-relaxed mb-4">冬季（12月到2月）很安静，城里几乎没什么游客，咖啡馆老板有空跟你聊一下午，但很多民宿歇业，餐厅选择也少一半。</p>
            </Section>
            <Section title="建议游览时长">
              <p className="text-gray-700 leading-relaxed mb-4">我踩过的小坑是：千万别把特雷比涅当成两小时匆匆打卡的地方。</p>
              <p className="text-gray-700 leading-relaxed mb-4">老城核心区走路逛一圈确实只要一两个小时，但实话跟你说，那根本感受不到这座城的气质。</p>
              <p className="text-gray-700 leading-relaxed mb-4">我第一天就是下午三点才到，拍了桥看了老城广场，五点半就坐上了回杜布罗夫尼克的车，回去后满脑子都是不甘心。</p>
              <p className="text-gray-700 leading-relaxed mb-4">第二天专门多留了半天，才发现前一天压根没逛透。</p>
              <p className="text-gray-700 leading-relaxed mb-4">如果想真正沉浸下来，在老城巷子里迷路式溜达、在河边坐着喝咖啡看水鸟、爬上赫塞戈瓦奇卡格拉查尼察教堂俯瞰河谷，至少留四到五个小时。</p>
              <p className="text-gray-700 leading-relaxed mb-4">如果还要去特弗多什修道院品葡萄酒，最好安排大半天甚至住一晚，慢慢悠悠才对得起这座小城。</p>
            </Section>
            <Section title="注意事项">
              <p className="text-gray-700 leading-relaxed mb-4">这里我踩过的坑绝对值得记下来。</p>
              <p className="text-gray-700 leading-relaxed mb-4">第一，大部分小酒庄和街边咖啡馆只收现金，波黑马克BAM或欧元都行，但找零通常给BAM，我当时兜里只有卡，想买杯手冲咖啡都喝不上，只能看着隔壁桌慢悠悠喝完一壶，馋得不行。</p>
              <p className="text-gray-700 leading-relaxed mb-4">第二，老城里的石头路面被几百年的脚步磨得又光又滑，穿平底鞋最稳，穿皮鞋或硬底凉鞋走快了容易打滑。</p>
              <p className="text-gray-700 leading-relaxed mb-4">第三，波黑与克罗地亚之间的那个边境检查站有时候会排长队，尤其旺季夏天，从杜布罗夫尼克坐大巴来特雷比涅的朋友记得预留足够的时间，别卡着点儿赶车排队时间要预算进去。</p>
              <p className="text-gray-700 leading-relaxed mb-4">第四，手机信号在老城深处部分窄巷不太稳定，下载离线地图再出发，我因为没下载结果在老城边上的岔路口绕了二十分钟，直到闻到河边草香才走对方向。</p>
            </Section>
            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">这一块的话，如果像维基百科那样给你列年份编年表儿，我猜你十行就看不下去了。</p>
              <p className="text-gray-700 leading-relaxed mb-4">说实话，特雷比涅这里的历史感不是靠数字和大事记堆出来的，而是时间刻在每一块被岁月磨圆的鹅卵石里。</p>
              <p className="text-gray-700 leading-relaxed mb-4">第一次文献中提到这座城市是大约在10世纪的，但真正定型是在奥斯曼统治的几个世纪历史里。</p>
              <p className="text-gray-700 leading-relaxed mb-4">如果你漫步在老城的窄巷中，你能摸到那些奥斯曼时期的石墙，墙面粗粝、温吞，被午后的阳光烤得温热，石缝里还长着不知名的细草。</p>
              <p className="text-gray-700 leading-relaxed mb-4">最让人触动的还是一座叫阿尔斯拉纳吉奇的石桥儿，横跨整条特雷比什尼察河，建于1574年。</p>
              <p className="text-gray-700 leading-relaxed mb-4">听本地人说这桥原本不在这里，是因为上世纪60年代因为修水坝，把这整座桥被一块石头一块石头地拆下来，搬到上游5公里处重新搭建起来了。</p>
              <p className="text-gray-700 leading-relaxed mb-4">我在桥下站了很久，摸到石块上斑驳的水痕和青苔，心想一座桥都能被如此珍视地搬走重建，这城里的人对历史和记忆的执念可见一斑。</p>
              <p className="text-gray-700 leading-relaxed mb-4">在老城东侧的赫塞戈瓦奇卡格拉查尼察教堂，如果不说你一定看不出来这虽说是2000年才建成的现代建筑，但它完全仿照科索沃一座14世纪的格拉查尼察修道院建造，砖石结构配华丽壁画，山顶上白得晃眼。站在山腰回望老城，那些奥斯曼、奥匈时期、南斯拉夫年代层层叠叠的屋顶轮廓线，比任何一本历史教科书都更直接地告诉你什么叫“岁月堆积”。</p>
            </Section>
            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">亲测这样走最顺。从老城西侧的自由广场出发</p>
              <p className="text-gray-700 leading-relaxed mb-4">先站在广场中央那几棵几百年树龄的老梧桐树下感受一下，树干粗到两三个人才能合抱，树荫底下常年坐着喝波斯尼亚咖啡的本地老头。</p>
              <p className="text-gray-700 leading-relaxed mb-4">然后穿进老城窄巷，往河边方向走，中途会经过赫塞戈维纳博物馆，感兴趣可以进去看民俗服饰和本地老物件。</p>
              <p className="text-gray-700 leading-relaxed mb-4">逛着逛着走到阿尔斯拉纳吉奇桥，这座石桥在上午9点到11点的顺光下拍出来特别立体，桥拱倒映在翠绿的河水中像一幅画。</p>
              <p className="text-gray-700 leading-relaxed mb-4">过桥后沿着河边步道往东走大约十五分钟，河对岸是层层叠叠的红瓦屋顶和远处黛青色的山峦，水的颜色从近处的翡翠绿渐变成远处的深蓝。</p>
              <p className="text-gray-700 leading-relaxed mb-4">接着掉头往南上茨尔克维纳山，爬到赫塞戈瓦奇卡格拉查尼察教堂大概要二十分钟的上坡路，不算陡但太阳晒着有点累，记得带水。</p>
              <p className="text-gray-700 leading-relaxed mb-4">从教堂门口的露天剧场看台往下俯瞰，整座老城、特雷比什尼察河弯道、远处阿尔斯拉纳吉奇桥和亚得里亚海的蓝影尽收眼底，傍晚五六点的逆光把老城笼在一层金粉色的薄雾里，出片率极高。</p>
              <p className="text-gray-700 leading-relaxed mb-4">如果有时间，真心建议坐车去西边约5公里的特弗多什修道院，这座15世纪的修道院里有几面保存了五百多年的壁画，颜色虽然斑驳但还能看清圣经故事的细节，僧侣们现在还在这里酿酒，可以在修道院里尝一杯本地日拉夫卡白葡萄酒。逛完特弗多什修道院再回老城吃晚饭，时间刚好。</p>
              <p className="text-gray-700 leading-relaxed mb-4">拍照机位我整理了几个亲测实拍效果最好的。第一个是老城自由广场上的老梧桐树下，下午三四点树影斑驳，光线从叶缝漏下来洒在石板地上，人像侧脸出片很有胶片质感。第二个是阿尔斯拉纳吉奇桥东南侧的河边步道，上午9-11点顺光，桥的四个半圆拱洞和河面倒影拍出来层次分明，桥身米白色的石灰岩在晨光里泛着暖调。第三个在赫塞戈瓦奇卡格拉查尼察教堂前的露天剧场最上面一排看台，傍晚5-6点逆光，远处阿尔斯拉纳吉奇桥、特雷比什尼察河、老城红瓦屋顶和更远处的山脊线全收进画面，夕阳把河水照成碎金，整个特雷比涅古城攻略里最值得等的一个机位就是这里。第四个是特弗多什修道院的葡萄园入口处，下午顺光拍葡萄藤和老石墙，有种托斯卡纳式的松弛感。第五个是老城内通往河边的某条窄巷拐角，具体位置是广场往东第一条巷子走到尽头左拐的石阶，早上9点阳光刚好照亮巷口一面爬满爬山虎的老墙，墙面墨绿夹着暗红，拍半身人像复古感拉满。</p>
            </Section>
            <Section title="附近景点">
              <p className="text-gray-700 leading-relaxed mb-4">实地走下来觉得最值得，也最顺道逛的是特弗多什修道院，从老城打车过去约5公里，车费大概5到7欧元，你也可以租自行车沿着河边骑过去大概二十多分钟，其实小路骑车可能更方便。修道院里弥漫着一种说不清的宁静气氛，老橄榄树和葡萄园环绕着石砌院落，空气中感觉有股淡淡的焚香和葡萄酒香混在一起的味道鼻子灵的可以帮我验证下我有没有感觉对。逛完特弗多什修道院，如果不想去哪里就没必要特意再去别的地方打卡了，莫斯塔尔虽然名气大，但从这里坐大巴要三个多小时，当天往返太赶太折腾。如果是自驾的朋友，可以去特雷比涅以北的杜布罗夫尼克老城，开车大约40分钟，但说真的，在杜布罗夫尼克挤完人群再回到特雷比涅河边安静坐下，那种体验式的反差才让人觉得特雷比涅的珍贵。</p>
            </Section>
            <Section title="住宿小贴士">
              <p className="text-gray-700 leading-relaxed mb-4">纯个人体验总结仅供参考哈。</p>
              <p className="text-gray-700 leading-relaxed mb-4">在特雷比涅老城里的民宿氛围极好，推开木窗就是几百年的石头老巷，夜里能听到特雷比什尼察河的水声和远处教堂偶尔敲响的钟声，完全像住进了一幅老画里然后你就是那个画中人的赶脚。</p>
              <p className="text-gray-700 leading-relaxed mb-4">如果喜欢新房子，那建议你选河对岸的新城区住宿，楼层低、路平、搬行李轻松，走路到老城也就过一座桥的事。</p>
              <p className="text-gray-700 leading-relaxed mb-4">预订技巧上，夏天旺季至少提前两到三周订房，小城民宿数量有限。</p>
              <p className="text-gray-700 leading-relaxed mb-4">郊区便宜的农家乐房间大还能免费停车，开车的方便，如果没自驾的话晚上公交车班次很少，末班车大约晚上八九点就没有了，打车回郊区一趟要10到15欧元，算下来可能比住城里还贵些。</p>
              <p className="text-gray-700 leading-relaxed mb-4">另外不少民宿老板自己也会酿些葡萄酒，入住时不妨问上一句儿，说不定能蹭上一小杯家酿日拉夫卡或者弗拉纳茨，怎么说呢，那种口感带着淡淡的果香和橡木桶的微涩，比店里卖的体验实在是有意思多了。</p>
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
                <InfoRow icon="📍" label="地址" value="请参考地图导航" />
                <InfoRow icon="🚌" label="交通" value="建议步行或公共交通" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
