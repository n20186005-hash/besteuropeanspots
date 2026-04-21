import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '塞克什白堡老城 Székesfehérvár | 走进匈牙利中世纪古都 - 最佳欧洲景点',
  description: '塞克什白堡（Székesfehérvár）当地人习惯叫它“白城”，是匈牙利第九大城市，也是中欧外多瑙地区的重要枢纽。这座距离布达佩斯仅60公里的老城，在10到16世纪曾是匈牙利王国的加冕之都，37位国...',
}

export default function SzkesfehrvrPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '匈牙利', href: '/destinations/hungary' },
            { label: '塞克什白堡老城', href: '/attractions/szkesfehrvr' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">塞克什白堡老城</h1>
          <p className="text-xl text-gray-600 mb-4">Székesfehérvár</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">匈牙利</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">塞克什白堡</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">塞克什白堡（Székesfehérvár）当地人习惯叫它“白城”，是匈牙利第九大城市，也是中欧外多瑙地区的重要枢纽。这座距离布达佩斯仅60公里的老城，在10到16世纪曾是匈牙利王国的加冕之都，37位国王在此戴上王冠，15位国王长眠于此。如今漫步老城，巴洛克建筑的暖黄色墙面、街角咖啡馆飘来的甜香、石板路上偶尔穿过的本地居民，让这里弥漫着一种不紧不慢的生活气息。如果你喜欢避开人潮、真正走进一座城市的历史脉搏里，塞克什白堡这个小众目的地，亲测很对味。</p>
            </Section>
            <Section title="最佳游览季节">
              <p className="text-gray-700 leading-relaxed mb-4">晚春（5月-6月）和初秋（9月-10月）是最舒服的时节。气温在18-25度之间，阳光洒在巴洛克立面上那种金色光影特别出片，穿件薄外套就能逛一整天。7-8月虽然热闹，还有皇家日（Royal Days）等节庆活动，但正午太阳晒得石板路发烫。冬天来的话很多博物馆缩短开放时间，人少是少了，但也冷清。</p>
              <p className="text-gray-700 leading-relaxed mb-4">建议游览时长	老城核心区慢悠悠逛下来3-4小时足够把主要景点看一遍。如果想把Bory城堡、城市博物馆、大教堂内部都认真走完，建议预留一整天。我那次是上午10点到，下午4点多走，中间还在一家街边咖啡馆坐了大半小时发呆，节奏刚刚好。如果你时间紧，半天也能把老城精华逛完，但会有点赶。</p>
            </Section>
            <Section title="注意事项">
              <p className="text-gray-700 leading-relaxed mb-4">①匈牙利使用福林（HUF），虽然大商场和餐厅能刷卡，老城里一些小店、街边摊、部分博物馆只收现金，亲测至少要备5000-10000福林应急。</p>
              <p className="text-gray-700 leading-relaxed mb-4">②火车票建议提前在官网买或到车站自助机购买，别像我一样在窗口排队错过了最近一班车。</p>
              <p className="text-gray-700 leading-relaxed mb-4">③老城石板路凹凸不平，穿高跟鞋或薄底鞋走久了脚会疼，平底鞋是王道。</p>
              <p className="text-gray-700 leading-relaxed mb-4">④大部分教堂入内参观需保持安静，穿长衣裤。</p>
              <p className="text-gray-700 leading-relaxed mb-4">⑤夏季注意防晒，老城遮阴的地方没有想象中多。</p>
              <p className="text-gray-700 leading-relaxed mb-4">⑥部分博物馆周一闭馆，提前查好时间别跑空。</p>
            </Section>
            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">说实话，走进塞克什白堡老城的那一刻，历史不是那种写在教科书里的年份数字，而是渗透在每一块石砖里的体感。这座城的匈牙利语名字本身就很有分量——“szék”意为王座，“fehérvár”意为白色城堡，合起来就是“王座之白城”。</p>
              <p className="text-gray-700 leading-relaxed mb-4">公元972年，盖萨大公在此筑城；他的儿子伊什特万一世于1000年在这里加冕为匈牙利第一位国王，从此塞克什白堡成为匈牙利王国500多年的加冕与安葬圣地。37位国王在这座城戴上王冠，15位国王长眠于当年那座恢弘的圣母升天大教堂之下。</p>
              <p className="text-gray-700 leading-relaxed mb-4">走在市政厅广场（Városház tér）上，面前那座黄白相间的圣伊什特万大教堂（Szent István-székesegyház）的墙面，据说有一部分石料就取自中世纪那座被毁的老教堂废墟。这种感觉很奇妙——脚下踩的石板、眼前看到的墙面，都是历史的“再利用”。广场中央矗立着一个巨大的球形十字架权标（Országalma），由三只石狮托举，上面刻着1001、1688、1938三个年份，分别代表建国、哈布斯堡王朝收复和加冕900周年。傍晚时分，夕阳从西边斜照过来，权标的影子拖得长长的，当地老人坐在旁边的长椅上晒太阳聊天，那一瞬间你会觉得历史不是一个遥远的词，而是这片土地上的日常呼吸。</p>
              <p className="text-gray-700 leading-relaxed mb-4">逛着逛着发现，塞克什白堡的“白城”之名，据说源于当年城墙使用了白色石灰石砌筑，阳光下闪闪发亮，故而得名。虽然今天已经看不到完整的白色城墙，但老城里巴洛克建筑的浅色立面，在秋日午后依旧泛着温润的暖白光，仿佛在无声回应着千年前的记忆。</p>
              <p className="text-gray-700 leading-relaxed mb-4">我最被打动的是王宫遗址公园（Ruins Garden）。这里保留着11世纪圣母升天大教堂的地基遗迹，那些残存的半米多高的弧形墙基和柱础，就原样保存在草地上。公园里有一座以匈牙利国土轮廓为造型的纪念碑，凹陷处积着雨水，像历史的泪痕。站在遗址中间，四周是居民遛狗、小孩嬉闹的寻常画面，头顶的钟声悠悠响起——中世纪与新生活就这样毫无违和地融合在一起。说实话，这种不刻意、不声张的历史存在感，比任何博物馆里的展柜都更触动人心。</p>
            </Section>
            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">我的亲测步行路线是这样的，全程不用坐车，一路走一路看：</p>
              <p className="text-gray-700 leading-relaxed mb-4">从火车站出发——出站后沿着指路牌往“Belváros / City Center”方向走，大约15-20分钟就进入老城范围。路上会经过一片安静的住宅区，能看到本地人日常生活的小细节，比如谁家阳台上挂着的红辣椒、窗台上摆着的天竺葵。</p>
              <p className="text-gray-700 leading-relaxed mb-4">第一站：加冕遗址公园（Ruins Garden / Koronázó tér） ——建议把这里作为老城探索的起点，因为从这里你能最直观地理解这座城市的千年根基。遗址公园免费开放，清晨光线从东边照过来的时候，残存的石墙地基在草地上投下长长的影子，氛围感拉满。公园里的匈牙利地图纪念碑是出片的好位置。</p>
              <p className="text-gray-700 leading-relaxed mb-4">第二站：圣安娜小教堂（Szent Anna-kápolna） ——从遗址公园往北走不到200米就到了。这座建于15世纪的小教堂是塞克什白堡现存最古老的建筑，曾经是当年圣母升天大教堂的一部分。虽然小，但那种低调的古朴气质反而特别耐看。</p>
              <p className="text-gray-700 leading-relaxed mb-4">第三站：市政厅广场（Városház tér）和圣伊什特万大教堂——沿着Fő utca主街往北走5分钟，就到了老城的心脏地带。广场上的球形权标（Országalma）是必看的城标。圣伊什特万大教堂的黄白色巴洛克立面在上午9-11点的顺光下特别鲜艳，内部彩绘玻璃和精致雕刻也值得进去坐一坐。主教宫（Püspöki Palota）就在教堂斜对面，优雅的巴洛克对称立面配着灰泥装饰，随手一拍都像欧洲明信片。</p>
              <p className="text-gray-700 leading-relaxed mb-4">第四站：主街Fő utca漫步——从广场沿着Fő utca往北走，这条步行街两边是巴洛克风格的商铺建筑，现在变成了咖啡馆、餐厅、画廊和手工艺品店。逛着逛着发现街边有一家老式糖果店，橱窗里摆着五颜六色的手工糖果，推门进去一股甜甜的糖浆味扑面而来，忍不住买了包蜂蜜杏仁糖边走边吃。街角偶尔能听到街头艺人拉小提琴的声音，和面包店飘出的甜香混在一起，整个人都松弛下来。</p>
              <p className="text-gray-700 leading-relaxed mb-4">第五站：花钟（Virágóra） ——在主街中段，一个用当季鲜花拼成钟面的大花钟静静旋转。春夏时节玫瑰和薰衣草把钟面填得满满的，整点时候风铃草会轻轻颤动。说实话，亲测上午9点左右光线最好，人也不多。</p>
              <p className="text-gray-700 leading-relaxed mb-4">第六站（可选）：Bory城堡——如果你有一整天时间，真心建议坐32路公交去城北的Bory城堡看看。这是一座由雕塑家Bory Jenő为爱妻亲手建造的童话式城堡，离老城约4公里，公交车程15分钟左右。城堡门票3000福林（约7.5欧元），每一块石头都雕着故事，塔楼上还能俯瞰周围村庄全景，个人觉得非常值。</p>
              <p className="text-gray-700 leading-relaxed mb-4">踩过的小坑：我一开始没做功课，以为从火车站到老城这段路有公交，结果找了半天没找到，后来才知道其实公交线路不多，直接走路反而最快。别像我一样在车站附近绕了半天。</p>
            </Section>
            <Section title="拍照机位">
              <p className="text-gray-700 leading-relaxed mb-4">亲测在塞克什白堡拍了上百张照片，以下几个机位出片率最高：</p>
              <p className="text-gray-700 leading-relaxed mb-4">市政厅广场球形权标正前方——站在权标正西侧约10米处，上午9-11点顺光拍摄，权标的三只石狮和圣伊什特万大教堂的黄白立面同框，层次感非常强。如果用广角镜头还能把主教宫的巴洛克立面也收入画面。</p>
              <p className="text-gray-700 leading-relaxed mb-4">遗址公园匈牙利地图纪念碑——清晨8-9点，太阳从东边斜照过来，纪念碑的金属轮廓泛着冷冽的光，凹陷处的积水反射天空。从纪念碑南侧低角度仰拍，能把纪念碑的轮廓和背后残存的中世纪墙基一起框进去，历史的厚重感扑面而来。</p>
              <p className="text-gray-700 leading-relaxed mb-4">圣伊什特万大教堂正立面台阶——下午4-6点逆光拍摄人像，夕阳透过教堂彩绘玻璃的暖光洒在台阶上，人物轮廓被镀上一层金色光晕，氛围感绝了。如果站在Fő utca北端回望教堂，能把整条巴洛克老街收进画面。</p>
              <p className="text-gray-700 leading-relaxed mb-4">Fő utca主街中央——站在主街中段花钟附近，面朝南拍摄。下午3-5点，阳光从建筑间隙斜穿过来，石板路面上的光影切割非常好看，加上两侧暖色墙面和偶尔经过的行人，特别适合拍街景人文。建议用中长焦压缩空间感。</p>
              <p className="text-gray-700 leading-relaxed mb-4">Bory城堡塔楼——如果你去了Bory城堡，一定要爬上塔楼。下午4点左右光线最柔和，俯瞰周围的村庄和自然风光，画面自带一种童话滤镜。</p>
            </Section>
            <Section title="附近景点">
              <p className="text-gray-700 leading-relaxed mb-4">逛完塞克什白堡老城，附近还有几个地方亲测可以顺道安排上：</p>
              <p className="text-gray-700 leading-relaxed mb-4">巴拉顿湖（Lake Balaton） ——中欧最大的淡水湖，从塞克什白堡往南开车约40-50分钟就能到。湖水在阳光下蓝得发亮，湖边的小镇如巴拉顿城堡（Balatonföldvár）和蒂豪尼（Tihany）都有不错的湖景观景点。如果你是夏天来，沿着湖滨散步吹风特别惬意，湖区还有温泉浴场可以泡。真心没必要专门安排一整天，逛完白城顺道过去看个日落就挺好。</p>
              <p className="text-gray-700 leading-relaxed mb-4">韦伦采湖（Lake Velence） ——就在塞克什白堡东边，距离不到15公里。这个湖比巴拉顿湖小很多，但更安静，本地人周末喜欢来这里野餐钓鱼。如果你自驾的话，从布达佩斯过来途中会经过，可以在湖边停一脚。</p>
              <p className="text-gray-700 leading-relaxed mb-4">布达佩斯 ——作为匈牙利首都，布达佩斯本身就是一个巨大的景点集合。从塞克什白堡坐火车回布达佩斯只需45-60分钟。建议把白城安排在布达佩斯行程中作为一日游，早上出发晚上返回，节奏刚刚好。</p>
            </Section>
            <Section title="住宿小贴士">
              <p className="text-gray-700 leading-relaxed mb-4">塞克什白堡住宿选择不算特别多，但价格比布达佩斯便宜一大截。亲测住过两次，分享几点真实感受：</p>
              <p className="text-gray-700 leading-relaxed mb-4">老城区内的公寓（Apartman）是最推荐的选择。住在Városház tér或Fő utca附近，出门就是咖啡馆和景点，晚上街上安静下来，打开窗户能听见远处教堂的钟声。不过说实话，老城区的老房子大多没有电梯，楼梯又窄又陡，订房前一定看清楚有没有电梯。</p>
              <p className="text-gray-700 leading-relaxed mb-4">如果自驾或者预算有限，住在火车站附近的民宿也是不错的选择，价格更实惠，而且停车方便。但要注意晚间公交车班次比较少，回程最好预留时间步行（约20分钟）或叫出租车（打车到老城约1500-2000福林，4-5欧元）。</p>
              <p className="text-gray-700 leading-relaxed mb-4">建议提前至少两周预订，尤其是8月皇家日期间，老城区房源会非常紧俏。我上次临时起意周五晚上想订周六的房间，结果市中心方圆一公里内全满，最后住到了郊区。别像我一样临时抱佛脚。另外，匈牙利福林的汇率波动比较大，建议用欧元或美元在市区兑换处换汇，避免在火车站或机场换（汇率通常不划算）。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="老城街区全天开放。各景点开放时间不一：圣伊什特万大教堂通常每日10:00-18:00开放，夏季可能延长；加冕遗址公园和中世纪废墟花园常年开放；市政厅平时不对外开放，但每年8月16-20日市政厅开放日活动期间可入内参观。部分博物馆（如Bella Italia Museum）周一至周五10:00-13:00、周六10:00-13:00及16:00-18:00开放，且2月、5月、8月和11月闭馆。逛着逛着发现匈牙利不少博物馆冬天会缩短营业时间，夏季来最省心。" />
                <InfoRow icon="🎫" label="门票" value="老城街道和广场免费漫步。圣伊什特万大教堂免费入内（登塔可能需要单独购票，约800-1000福林）。加冕遗址公园免费参观。城市博物馆（Várostörténeti Múzeum）门票约800-1200福林，学生半价。Bory城堡门票3000福林（约7.5欧元）。市政厅开放日活动通常免费。真心建议随身带些现金福林，有些小博物馆和街边摊只收现金，我就是没带现金在路边想买烟囱卷（kürtőskalács）结果尴尬了。" />
                <InfoRow icon="📍" label="地址" value="匈牙利中部，费耶尔州首府，布达佩斯西南方向约60公里处。老城核心区域集中在Városház tér（市政厅广场）及Fő utca（主街）一带，所有主要景点都在这片步行可达的范围内。
交通	从布达佩斯出发最方便的是火车，在布达佩斯Déli火车站（Déli pályaudvar）乘坐直达列车，每20-30分钟一班，车程约45-60分钟。火车票可以在匈牙利铁路官网或车站售票机购买。抵达塞克什白堡火车站后，步行到老城区约15-20分钟，沿着指路牌走就行。如果你要去稍远的Bory城堡，在火车站附近乘坐32路或26A路公交车可达。亲测从车站步行进城那段路没啥遮阳，夏天记得戴帽子。" />
                <InfoRow icon="🚌" label="交通" value="建议步行或公共交通" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
