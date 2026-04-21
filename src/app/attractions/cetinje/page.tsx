import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '探访黑山旧都采蒂涅｜景点、路线、体验一篇搞定 - 最佳欧洲景点',
  description: '从科托尔沿着著名的蛇形公路上山，说实话我没想到去采蒂涅的这段路会这么绕，二十五道发卡弯一个接一个，耳膜随着海拔升高微微发胀。沿途能从高处俯瞰科托尔湾的全貌，橘红色的屋顶像积木一样层层叠叠地码在山脚下，...',
}

export default function CetinjePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '黑山', href: '/destinations/montenegro' },
            { label: '采蒂涅老城', href: '/attractions/cetinje' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">采蒂涅老城</h1>
          <p className="text-xl text-gray-600 mb-4">Cetinje</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">黑山</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">采蒂涅</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">从科托尔沿着著名的蛇形公路上山，说实话我没想到去采蒂涅的这段路会这么绕，二十五道发卡弯一个接一个，耳膜随着海拔升高微微发胀。沿途能从高处俯瞰科托尔湾的全貌，橘红色的屋顶像积木一样层层叠叠地码在山脚下，说实话这风景绝对值回票价，不过如果容易晕车真心建议提前吃颗药，别像我一样空腹上路。差不多一个小时之后，车子驶入一片灰绿色的高原盆地，采蒂涅就这么安静地出现在眼前，跟海岸边那些挤满游人的城镇完全是两个世界，空气里弥漫着山间特有的松香和湿润泥土味，街面上行人稀稀拉拉的，偶尔有鸽子扑棱着翅膀从头顶飞过。</p>
              <p className="text-gray-700 leading-relaxed mb-4">采蒂涅是黑山的旧都，这座藏在洛夫琴山脚下的小城在1878年到1914年间一直是国家的政治与文化心脏，今天仍保留着黑山总统的官邸。整座小城的气质很特别，街道两旁是色调素雅的欧式老建筑，淡黄、灰白、浅蓝的墙面被岁月磨得有些斑驳，不少前外国使馆散落在其中，加上四处飘散的新鲜烘焙咖啡豆的香气，让这里既有几分没落旧王朝的矜持，又有寻常居民区的烟火气。核心街道Njegoševa是一条宽阔的步行街，基本上所有的景点都分布在这条街或附近，非常适合慢悠悠地闲逛，脚底踩在光滑的石板路上能感觉到夏日的余温。</p>
            </Section>
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">开放时间：采蒂涅修道院全年免费开放，通常对游客开放的时间是早上八点到傍晚六点，早上八点如果赶巧还能碰上东正教礼拜。尼古拉国王博物馆及比利亚尔达博物馆的开放时间是每天上午九点到下午五点。</p>
              <p className="text-gray-700 leading-relaxed mb-4">门票：修道院主体参观免费，但里面的珍宝室需要单独付2欧元，通常只接待团体游客。尼古拉国王博物馆单买5欧元，你也可以买一张10欧元的联票，把比利亚尔达、国家博物馆和美术馆都逛了。如果你打算去洛夫琴山上的涅戈什陵墓，可以在采蒂涅的国立博物馆买20欧元的全包联票，连陵墓的门票都包含在内，比到了山上单买划算不少。到了洛夫琴山那边还需要额外付洛夫琴国家公园入园费3欧元，以及陵墓单独门票成人8欧元（学生4欧元）。</p>
              <p className="text-gray-700 leading-relaxed mb-4">地址：Njegoševa及周边街区（国王尼古拉广场及Dvorski Trg附近），公交站设在老体育酒店隔壁，离镇中心走路大概十分钟。</p>
              <p className="text-gray-700 leading-relaxed mb-4">交通：从科托尔长途车站有频繁的大巴直达采蒂涅，班次每天超过两班，车费大概6欧元，单程一个小时出头，车上直接跟司机买票就行。从布德瓦坐大巴过来也是差不多的价钱，车程一小时不到。采蒂涅的公交站特别小，连个像样的售票窗口都没有，亲测完全不用担心，司机在车上就会主动收钱。老城很小，脚程快的一两个小时就能把核心区逛完，基本不需要打车，慢慢走慢慢看最舒服。</p>
              <p className="text-gray-700 leading-relaxed mb-4">最佳游览季节：亲测建议安排在四月到六月或九月到十月，这几个月山里气候干爽，上午阳光照在老墙上那种暖融融的色调特别出片，石板路也不像盛夏那样烫脚。七、八月白天虽然暖和但正午紫外线很强，而且从海岸线过来的旅游大巴会把小镇变得嘈杂很多。每年的十一月至次年三月则是湿冷季节，这边部分博物馆可能会缩短开放时间。</p>
              <p className="text-gray-700 leading-relaxed mb-4">建议游览时长：老城核心区逛下来大概两到三小时，也就半天时间，安排半天不紧不慢刚刚好。如果是想连着把洛夫琴山的陵墓或斯库台湖游船一块儿安排，真心建议预留完整的一天完美。</p>
              <p className="text-gray-700 leading-relaxed mb-4">注意事项：这是个常被忽略的小细节，虽然每次都提及抱歉还是要强调下哦——进修道院穿短裤是不让进的，膝盖和肩膀都得遮住。</p>
              <p className="text-gray-700 leading-relaxed mb-4">另外很多小店和街边小摊只收现金，真心建议兜里备个二三十欧元，以免像我一样看到大爷卖冰镇柠檬水想买却发现兜里全是卡。还有一点，洛夫琴山上的停车场很小，夏天旺季可能得把车停到五百米开外的路边然后走上去，这点踩过的小坑得提前提醒一下。</p>
            </Section>
            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">逛着逛着发现，采蒂涅这座城市本身就像一本摊开的巴尔干史书，不需要生硬地去背那个年代，走在大街上自然而然就能感受到一种混合着韧劲与沧桑的人文氛围。修道院最初的根基可以追溯到1484年，但是期间反复被奥斯曼军队摧毁又重建啦，今天的建筑是在1927年最后修复完成的，外表看上去沉稳质朴，像一座低调的石砌要塞。走进院子里，香火和焚香的气息淡淡地飘散在空气中，有黑衣修士匆匆穿过连廊，完全不像一个仅供游客观光景点的样子，而是真正在延续着某种精神生活的地方。沿着Njegoševa继续走，街旁那些褪色的大使馆旧址特别有意思——法国使馆外墙上贴着淡蓝和柠檬黄的瓷砖，俄罗斯使馆是桃粉色的，英国使馆破旧得已经改成了音乐学院。这些建筑让我想到一百多年前欧洲列强都纷纷在这里派驻使节的盛况，如今的采蒂涅虽然把行政首都的地位让给了波德戈里察，但那种深藏于山间的旧都气韵，依然完好地沉淀在每一面斑驳的墙壁里。</p>
            </Section>
            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">真心建议从国王尼古拉广场起步，整个老城像一个扁扁的长方形，沿着Njegoševa这条主街一直走基本就不会错。第一站先去看街东头那尊伊万·茨尔诺耶维奇的铜像，然后就近转进右手边的比利亚尔达（台球厅），这里曾是涅戈什大公的寓所，如今改成了博物馆，里面有一张从科托尔千里迢迢扛上山的台球桌和一具巨大的黑山浮雕地形图，踏在木质地板上有轻微的吱呀声。接着穿过广场走两步就到了采蒂涅修道院，看完珍宝室和庭院后可以绕到背后上坡，步行大概三百米抵达鹰岩观景台，从那里回看整个修道院的灰瓦屋顶和远处层叠的山脉，视角特别舒服。从修道院下来再往西边走几步，就能看到那座小型精巧的法院教堂。接着调头往回走，去尼古拉国王博物馆，里面的宫廷装饰和船模都保留了十九世纪末的原貌。逛完这片核心区如果还有力气，顺着街边那些前大使馆一路溜达到公交站附近，算是对这座“大使馆之城”的小彩蛋探秘。</p>
            </Section>
            <Section title="拍照机位">
              <p className="text-gray-700 leading-relaxed mb-4">首推修道院西侧庭院入口的拱门处，上午九点到十一点光线从东边打过来，拱门内侧的石砌纹理被照得明暗分明，穿过门洞拍人像或单纯拍建筑都很有质感。第二处是Njegoševa主街法国大使馆外墙前，下午三四点之后外墙上的柠檬黄和淡蓝瓷砖在夕阳斜射下色彩饱和度极高，适合拍带复古感的街景人像，把斑驳的老墙当作背景。第三处在修道院正门对面的人行道旁蹲下来仰拍，傍晚五点到六点左右山间的逆光笼罩着修道院的轮廓，恰好能拍到钟楼与山脊线重叠的剪影效果，氛围感非常强。真心建议别只在街面上拍，偶尔拐进旁边的岔巷里，那些窄巷中的老楼梯和爬满藤蔓的石墙，上午九点前顺光拍出来肌理感特别好。</p>
            </Section>
            <Section title="附近景点">
              <p className="text-gray-700 leading-relaxed mb-4">逛完古城顺道走过去最值得推荐的是洛夫琴山上的涅戈什陵墓，从采蒂涅开车大概二十分钟，沿途会经过洛夫琴国家公园的收费口（每人3欧元）。到了山腰的停车场之后还得爬四百六十多级石阶才能到达陵墓，海拔一千六百多米，走快了有点喘，但爬到顶之后看到那个三百六十度的全景平台，说实话真的会有想哭的冲动——整个黑山海岸线、斯库台湖乃至阿尔巴尼亚的远山全都铺在脚底下。陵墓本身由著名雕塑家伊万·梅什特罗维奇设计，巨大的黑色花岗岩雕像和两侧石雕女神像都非常震撼。采蒂涅修道院的珍宝室据说还收藏着第一本西里尔字母印刷的《八声部礼拜书》，可惜我当时没赶上开放时间。另外如果时间充裕，可以开车十五分钟左右到里耶卡茨尔诺耶维恰的老桥，那里能看斯库台湖的宽阔水面，桥下常有渔夫在船上晒网，河面漂着睡莲，鸟叫声此起彼伏，像一副活的山水画。</p>
            </Section>
            <Section title="住宿小贴士">
              <p className="text-gray-700 leading-relaxed mb-4">个人体感在采蒂涅过夜跟在海岸城市完全是两种感觉。</p>
              <p className="text-gray-700 leading-relaxed mb-4">这边的老城核心区步行街两侧有不少民宿，位置好到出门就是博物馆和咖啡馆，夜里推开木窗能看见路灯把石板路照得泛黄，氛围感拉满。</p>
              <p className="text-gray-700 leading-relaxed mb-4">如果想住得宽敞便宜些，可以往公交站方向找，那边有些家庭经营的旅馆价格更低，门口停车位也更方便。预订的时候一定记得看清楚有没有空调，</p>
              <p className="text-gray-700 leading-relaxed mb-4">如果你是夏天来这个儿山里夏天白天虽凉快，但老房子顶楼下午晒了一整天之后屋里还是挺闷的。</p>
              <p className="text-gray-700 leading-relaxed mb-4">另外郊区的住宿虽然价格更实惠些，但夜间公交班次真心少得可怜，没有租车的话晚上从洛夫琴山看完日落回来会比较麻烦，这点得提前想好。</p>
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
                <InfoRow icon="📍" label="地址" value="Njegoseva, 81250 Cetinje, Montenegro" />
                <InfoRow icon="🚌" label="交通" value="从波德戈里察汽车站乘大巴约 45 至 60 分钟直达采蒂涅；从科托尔或布德瓦过来通常约 1 小时。自驾可走 E65 或 E80 以及 Kotor serpentine 公路上山，市中心多为路边停车位，步行即可串联修道院、博物馆与旧使馆区。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
