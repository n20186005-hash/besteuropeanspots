import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '谢夫勒斯谷地 Chevreuse Valley｜巴黎南部的隐秘桃源，漫步中世纪洗练房与城堡俯瞰的浪漫运河 - 最佳欧洲景点',
  description: '说实话，当你从略显嘈杂的RER列车踏上圣雷米站台，再跳上那趟穿梭于乡间的小巴士时，可能还没意识到自己即将闯入一个怎样的世界。车窗外，巴黎南郊的平缓逐渐被起伏的丘陵取代，绿意越来越浓，直到巴士在一个小巧的圆形广场停下。你下车，深吸一口气，空气里是湿润的青草味、淡淡的野花香，还有远处面包房飘来的、暖烘烘',
}

export default function ChevreuseValleyMadelaineCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '谢夫勒斯谷地', href: '/attractions/chevreuse-valley-madelaine-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`谢夫勒斯谷地・Chevreuse Valley・法国・谢夫勒斯（伊夫林省）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，当你从略显嘈杂的RER列车踏上圣雷米站台，再跳上那趟穿梭于乡间的小巴士时，可能还没意识到自己即将闯入一个怎样的世界。车窗外，巴黎南郊的平缓逐渐被起伏的丘陵取代，绿意越来越浓，直到巴士在一个小巧的圆形广场停下。你下车，深吸一口气，空气里是湿润的青草味、淡淡的野花香，还有远处面包房飘来的、暖烘烘的黄油香气——巴黎的那种咖啡与香烟的紧张感，瞬间被抛到了九霄云外。
第一眼总会不由自主地向上望去。玛德莱娜城堡就那么自然而然地盘踞在长满树木的山丘顶上，它不是那种精致到发腻的宫殿，而是由粗糙的米白色石头垒成，带着一种饱经风霜的、沉默而威严的气度。它俯瞰着的，是整个谢夫勒斯谷地。而你的探索，最好从脚下开始。沿着“Grande Rue”向下，你会遇见那条著名的伊维特河运河。河水是沉静的碧绿色，流速缓慢，几乎听不到声音，只有阳光在水面上碎成千万片晃动的金箔。河岸边，就是那一排传说中的洗练房了。这些有着斜顶的小小石屋，墙壁被岁月染成深灰，木门吱呀作响。闭上眼睛，你几乎能听见几个世纪前，小镇妇女们在这里捶打衣物的啪嗒声、潺潺的流水声，以及她们交谈的嗡嗡细语——那是一种属于日常生活的、安稳而绵长的回响。
小镇本身就像是从童话书里掉出来的一页。主街两侧是有着彩色木筋墙的老房子，有些墙壁上爬满了紫藤或蔷薇。鹅卵石铺就的小路被无数双脚打磨得光滑温润，高跟鞋踩上去会发出好听的清脆声响。当地人的生活节奏就摊开在这里：老先生在咖啡馆外的小桌上看报，主妇提着长长的法棍匆匆走过，花店门口的大猫懒洋洋地晒着太阳。城堡是历史的守护神，而运河与洗练房是生活的脉络，它们一起，让谢夫勒斯不仅仅是一个“景点”，而是一个仍然在深深呼吸着的、活着的故乡。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "说实话，当你从略显嘈杂的RER列车踏上圣雷米站台，再跳上那趟穿梭于乡间的小巴士时，可能还没意识到自己即将闯入一个怎样的世界。车窗外，巴黎南郊的平缓逐渐被起伏的丘陵取代，绿意越来越浓，直到巴士在一个小巧的圆形广场停下。你下车，深吸一口气，空气里是湿润的青草味、淡淡的野花香，还有远处面包房飘来的、暖烘烘的黄油香气——巴黎的那种咖啡与香烟的紧张感，瞬间被抛到了九霄云外。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一眼总会不由自主地向上望去。玛德莱娜城堡就那么自然而然地盘踞在长满树木的山丘顶上，它不是那种精致到发腻的宫殿，而是由粗糙的米白色石头垒成，带着一种饱经风霜的、沉默而威严的气度。它俯瞰着的，是整个谢夫勒斯谷地。而你的探索，最好从脚下开始。沿着“Grande Rue”向下，你会遇见那条著名的伊维特河运河。河水是沉静的碧绿色，流速缓慢，几乎听不到声音，只有阳光在水面上碎成千万片晃动的金箔。河岸边，就是那一排传说中的洗练房了。这些有着斜顶的小小石屋，墙壁被岁月染成深灰，木门吱呀作响。闭上眼睛，你几乎能听见几个世纪前，小镇妇女们在这里捶打衣物的啪嗒声、潺潺的流水声，以及她们交谈的嗡嗡细语——那是一种属于日常生活的、安稳而绵长的回响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇本身就像是从童话书里掉出来的一页。主街两侧是有着彩色木筋墙的老房子，有些墙壁上爬满了紫藤或蔷薇。鹅卵石铺就的小路被无数双脚打磨得光滑温润，高跟鞋踩上去会发出好听的清脆声响。当地人的生活节奏就摊开在这里：老先生在咖啡馆外的小桌上看报，主妇提着长长的法棍匆匆走过，花店门口的大猫懒洋洋地晒着太阳。城堡是历史的守护神，而运河与洗练房是生活的脉络，它们一起，让谢夫勒斯不仅仅是一个“景点”，而是一个仍然在深深呼吸着的、活着的故乡。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`谢夫勒斯谷地`} />
                <InfoRow label="英文名称" value={`Chevreuse Valley`} />
                <InfoRow label="正式名称" value={`玛德莱娜城堡与谢夫勒斯历史谷地`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`谢夫勒斯（伊夫林省）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座矗立于谷地之上的玛德莱娜城堡，是法兰西岛地区保存最完好的中世纪防御城堡之一，数个世纪以来既是军事要塞，也是当地领主权力的象征，守护着通往巴黎南部的宁静谷地。`} />
                <InfoRow label="建筑特色" value={`城堡完美融合了厚重的军事防御结构（如主塔、城垛、吊桥遗迹）与后来增添的、更具生活气息的文艺复兴风格窗户与内部空间，如同一本立体的建筑史书。`} />
                <InfoRow label="建筑风格" value={`以罗曼式与哥特式军事建筑为主体，后期融入了文艺复兴式的居住性改造。`} />
                <InfoRow label="文化价值" value={`这里不仅是历史遗迹，更完整保存了一种与自然和谐共处的法兰西乡村生活图景——运河、洗练房、磨坊与古老村落，共同构成了远离都市喧嚣的“慢生活”文化样本。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`玛德莱娜城堡内部参观通常为每年4月至10月，周二至周日 10:00-18:00，冬季（11月至3月）开放时间缩短为周末及节假日 10:00-17:00，周一闭馆。谢夫勒斯谷地自然区域及运河步道全年全天开放，但历史洗练房建筑群内部展示区开放时间与城堡大致同步，建议出行前在官网核查具体日期。节假日如圣诞节、元旦可能关闭。`} />
              <InfoRow label="门票价格" value={`玛德莱娜城堡全价门票约8欧元，优惠票（学生、65岁以上老人）约6欧元。谢夫勒斯谷地自然区域及运河畔公共步道免费开放。部分特展或导览团需额外付费，价格约3-5欧元。持有巴黎博物馆通票的游客可享受城堡门票折扣。`} />
              <InfoRow label="地址" value={`Château de la Madeleine, 78460 Chevreuse, France`} />
              <InfoRow label="交通方式" value={`从巴黎市中心出发最便捷。乘坐RER B线（往圣雷米方向）至“Saint-Rémy-lès-Chevreuse”站，这是终点站，全程约45-60分钟。出站后，在车站广场转乘公交59路（方向Chevreuse - Mairie），约10分钟即可抵达谢夫勒斯小镇中心，下车后步行5分钟可达城堡山脚。公交班次平日约每半小时一班，周末频率降低，建议提前查询时刻表。若自驾，从巴黎出发沿A10高速公路向南，从“Saint-Rémy-lès-Chevreuse”出口下，沿D906公路行驶约10分钟即可到达，小镇外围有付费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "谢夫勒斯的故事，离不开那座山丘和它顶上的巨石。早在公元11世纪，这片肥沃的谷地就因为其战略位置（位于巴黎与沙特尔之间的要道）而受到关注。最初的领主在这里修建了一个简陋的木制堡垒，用以控制河谷并征收过往商旅的税费。谁也没想到，这个小小的据点，会成为未来数个世纪权力博弈的舞台。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "到了12世纪，石头取代了木头。在法国国王与地方贵族关系微妙的年代，谢夫勒斯的领主们——最初是蒙莫朗西家族，后来是著名的哈考特家族——开始建造我们今天看到的这座石质城堡的核心部分，也就是那座敦实的主塔。它不是为了享受，而是为了生存。城堡见证了英法百年战争的动荡，也曾庇护过当地的百姓。有趣的是，尽管它是一座军事堡垒，但随着时间的推移，和平的岁月让它逐渐增添了生活的气息。15世纪末到16世纪初，文艺复兴的风也吹进了这个谷地。当时的领主对城堡进行了大规模的改造，增加了更大、更明亮的窗户，修建了更舒适的居所，那些防御用的箭孔旁，出现了雕刻着花纹的窗框。城堡从一个纯粹的军事机器，开始向一个带有贵族趣味的住所转变。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，真正的戏剧性变化发生在城堡之外。17世纪，一位颇具远见的领主——查尔斯·德·洛林，也就是谢夫勒斯公爵，他做了一件影响谷地至今的事：他下令开凿并拓宽了伊维特河的运河。他的目的很实际：为了运输建造凡尔赛宫所需的巨石和木材。这条运河成了谷地的经济命脉。沿着河岸，一座座洗练房和磨坊如雨后春笋般建立起来。洗练房，这个听起来古老的名词，是当时社区生活的中心。妇女们在这里劳作、交谈，河水冲刷的不仅是亚麻布，也流淌着邻里间的所有新闻与秘密。谢夫勒斯因此繁荣起来，它不再仅仅是一个领主城堡下的附庸，而是一个拥有自己产业和生命节奏的小镇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "法国大革命的浪潮同样席卷了这里。城堡被没收，一度面临被拆毁的命运。幸运的是，它最终被保留下来，但功能已然改变。它先后做过仓库、学校，甚至监狱，那些华丽的房间一度空空荡荡，只剩下墙壁回响着平民的足音。直到20世纪，当地政府意识到它的价值，开始了漫长而细致的修复工作。而那条运河和洗练房，则一直默默服务到上世纪中叶，才逐渐退出历史舞台，变成了如今我们看到的、宁静如画的历史风景线。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受谢夫勒斯的灵魂，你需要预留一整天的时间，并抱着漫步和发现的心态。强烈建议在上午九点前抵达小镇，这时游客稀少，晨光柔和，是拍摄城堡和运河的黄金时间。整体的节奏应该是“先高后低，再融入”——即上午探索山丘上的城堡，汲取历史的厚重；中午至下午漫步运河与小镇街道，感受生活的脉动；傍晚时分在河边或田野边放松，看日落余晖。这样的安排能让你在体力最充沛时爬山，在最温暖的光线下体验小镇的悠闲，并避开一日游旅行团的高峰（他们通常在上午十点后抵达）。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双绝对舒适的步行鞋，上山的小径是原始的石土路，小镇街道也是凹凸的鹅卵石，高跟鞋是自讨苦吃。
夏季前来务必携带驱蚊水，河谷水边蚊虫较多，尤其是在黄昏时分。
小镇的餐厅和商店在下午一点到三点之间可能有午休习惯，计划午餐或购物时需留意时间。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一早趁薄雾未散时，从小镇中心沿着标识清晰的“Sentier des Maréchaux”小径徒步上山，穿过橡树林去朝拜山巅的玛德莱娜城堡。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城堡的露台上凭栏而立，让目光跟随伊维特河碧绿的丝带蜿蜒穿过整个被晨光镀上金边的葱茏谷地。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`细细探索城堡内部阴凉的石厅与螺旋楼梯，用手触摸那些冰凉的、刻有石匠标记的墙壁，想象骑士与贵妇曾在此穿梭。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后径直走向运河边，顺着水流的方向，逐一探访那些像古董玩具般排列在岸边的、有着墨绿色木门的古老洗练房。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在运河最静谧的一段找张长椅坐下，什么也不做，只是看野鸭排队巡游，听风吹过杨树叶的沙沙声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回到镇上，在“Grande Rue”找一家家庭餐馆享用漫长的午餐，必点一道用当地食材烹制的传统法式炖菜。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后在小镇迷宫般的后巷随意穿行，惊喜于某个转角突然出现的鲜花盛放的小庭院，或是爬满葡萄藤的古老石墙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前，散步到小镇边缘的田野或草地，回望被夕阳染成蜂蜜色的城堡剪影，为这一天画上完美的句号。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡南侧山坡的葡萄园边缘`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时，从这里可以仰拍到城堡巍然屹立于山巅，前景是葡萄藤的秩序线条，构图极具层次感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`运河中段洗练房群的倒影`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗无风的上午十点左右，蹲在河对岸，将水面完整的倒影与实体的石屋一同纳入镜头，画面宁静而对称。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“Rue de la Corne”小巷的纵深`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点的侧光下，站在小巷一端，利用鹅卵石路和两侧古老的木筋墙建筑形成的天然引导线，拍出深邃的历史感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从城堡露台向西北方向俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚日落前半小时，光线最柔和温暖，能将整个谢夫勒斯小镇的红瓦屋顶、蜿蜒的运河以及远处的森林田野全部收纳，构成一幅经典的谷地全景图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`伊维特河上的小石桥`}</h4>
                  <p className="text-sm text-gray-700">{`利用桥洞作为天然画框，拍摄桥下缓缓流过的河水及对岸的绿植，营造幽静而私密的氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效消除运河水面不必要的反光，让洗练房倒影和河底的水草更加清晰翠绿。`}</li>
                <li>• {`尊重当地居民隐私，拍摄民居庭院或窗户内景前最好征得同意，法国人非常注重私人空间。`}</li>
                <li>• {`无人机飞行在城堡及小镇上空有严格限制，基本属于禁飞区，起飞前务必查清法规，避免高额罚款。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`运河畔的静谧石屋民宿`}</h4>
                  <p className="text-sm text-blue-800">{`推开木窗就能看到潺潺流水和古老的洗练房屋顶，夜晚枕着水声入眠，房东老太太会为你准备地道的家庭果酱早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`藏身于百年老宅的精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`位于小镇中心广场，房间保留了原始的橡木梁和壁炉，现代舒适的浴室与古老结构完美结合，天台酒吧能望见城堡灯光。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`城堡山脚下的田园客栈`}</h4>
                  <p className="text-sm text-yellow-800">{`由旧农舍改造，房间宽敞朴素，带有一个种满香草的小花园，适合家庭入住，清晨会被花园里的鸟鸣和教堂钟声唤醒。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`巴黎近郊的设计师公寓`}</h4>
                  <p className="text-sm text-purple-800">{`如果你不想离开都市太远，可以选择位于RER终点站圣雷米镇上的现代公寓，交通极其便利，同样能享受乡间的宁静清晨。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（6月至8月）和秋季观赏旺季（9月底至10月初）住宿非常紧张，务必提前至少两个月预订。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇治安极好，夜晚非常宁静，但大部分民宿和酒店没有电梯，携带大件行李的游客需要留意。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "选择住在圣雷米镇虽然方便，但会错过谢夫勒斯清晨与黄昏那种独一无二的、与世隔绝的宁静氛围，建议至少在小镇住上一晚。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开谢夫勒斯，坐回开往巴黎的RER列车时，那种感觉非常奇妙。短短几十分钟，你就从一个能听见自己心跳和流水声的世界，重新汇入了都市轰鸣的脉搏。但你知道，有些东西被留在了心里。那不仅仅是一张城堡的明信片，或是一条运河的照片，而是一种完整的生活节奏和空间感的体验。在这个被效率和时间表驱赶的时代，谢夫勒斯像是一个被无意中保存下来的琥珀。它告诉你，生活可以有另一种密度：用脚步丈量从家到河边洗练房的距离，用整个下午观察光影在石墙上的移动，用一顿漫长的午餐来交谈而非刷手机。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它之所以珍贵，恰恰在于它的“不完美”和“不宏大”。它没有凡尔赛的极致奢华，没有圣米歇尔山的那种戏剧性孤绝。它就是法国千百个普通乡村中的一个，只不过它幸运地将中世纪的城堡、文艺复兴的改造、工业革命的运河遗产，以及那份持续至今的、对日常生活的专注，层层叠叠地、完好地保存了下来。它让你看到的，不是一个被供奉在玻璃柜里的“历史”，而是一棵依然在生长的、年轮清晰可见的活着的树。对于每一位厌倦了景点打卡、渴望真正触摸欧洲肌理的旅人来说，谢夫勒斯不是一道匆匆掠过的风景，而是一剂让你慢下来、深呼吸、并重新学会“感受”的解药。这，或许才是深度旅行最本真的意义。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/chateau-de-hautefort" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    欧
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">欧特福尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Hautefort</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/riquewihr-alsace-fairytale-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    里
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">里屈埃维</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Riquewihr</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/salers-medieval-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨莱尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Salers</p>
                  </div>
                </div>
              </a>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
