import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '克罗梅日什总主教宫 Kroměříž Archbishop‘s Palace｜欧洲花园明珠与哈布斯堡文化绿洲 - 最佳欧洲景点',
  description: '穿过克罗梅日什老城那些被阳光晒得暖洋洋的鹅卵石小巷，一个拐弯，那座蜜糖色的宫殿就毫无预兆地撞进了眼帘。它不是那种咄咄逼人的宏伟，而是一种沉静的、被岁月打磨过的壮丽。宫殿前宽阔的荣誉庭院空无一人，只有鸽群扑棱翅膀的声音和远处花园飘来的隐隐青草香。你立刻就会感到，这里的时间流速和外面那个世界不太一样。它...',
}

export default function KromerizArchbishopsPalacePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '捷克', href: '/destinations/czech-republic' },
            { label: '克罗梅日什', href: '/destinations/czech-republic' },
            { label: '克罗梅日什总主教宫', href: '/attractions/kromeriz-archbishops-palace' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`克罗梅日什总主教宫・Kroměříž Archbishop's Palace・捷克・克罗梅日什`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`穿过克罗梅日什老城那些被阳光晒得暖洋洋的鹅卵石小巷，一个拐弯，那座蜜糖色的宫殿就毫无预兆地撞进了眼帘。它不是那种咄咄逼人的宏伟，而是一种沉静的、被岁月打磨过的壮丽。宫殿前宽阔的荣誉庭院空无一人，只有鸽群扑棱翅膀的声音和远处花园飘来的隐隐青草香。你立刻就会感到，这里的时间流速和外面那个世界不太一样。它不是一座冰冷的博物馆，而像一个刚刚摘下主教冠冕、换上便服的老贵族，正邀请你到他的书房和花园里坐坐。
走进宫殿内部，空气立刻变得清凉，混合着旧木头、蜂蜡和一丝若有若无的油画颜料气味。阳光被高大的窗户切割成一道道金色的光柱，悬浮在空气中，照亮了飞舞的微尘。最震撼的莫过于会议厅，那不是金碧辉煌的堆砌，而是一种深沉的、富有学养的气度。巨大的水晶吊灯默然垂挂，墙上的丝绸壁毯描绘着神话故事，而当你抬头仰望那布满精美湿壁画的天花板时，你会感觉自己不是游客，而是某个午后误入主教私人沙龙的不速之客，连呼吸都不自觉地放轻了。
而真正的灵魂，在墙外的花园里。穿过一道低矮的拱门，仿佛踏入了另一个次元。眼前豁然开朗的是乐谱花园，典型的巴洛克式几何美学。修剪得如同绿色雕塑的紫杉树篱，组成迷宫般的图案；长长的喷泉水渠倒映着蓝天，水声潺潺是唯一的背景乐。但别止步于此，继续往里走，跨过一座小桥，风格陡然一变，进入了鲜花花园。这里是色彩的爆炸，是香气的交响曲。成排的玫瑰、鸢尾、大丽花争奇斗艳，嗡嗡的蜜蜂是这里最忙碌的居民。空气甜得发腻，混合着湿润的泥土芬芳。当地人推着婴儿车，或捧着本书坐在长椅上，这座花园是他们日常生活里最奢侈的一部分。
这里最打动人心的，是一种“完整”的魅力。它不像许多景点那样，宫殿是宫殿，花园是花园。在克罗梅日什，艺术、建筑、自然与生活被完美地编织在了一起。你可以上午在画廊里与提香笔下的人物神交，下午就在他曾凭窗眺望过的花园里，躺在他可能曾踏足过的草坪上晒太阳。这种时空的交叠与沉浸，才是它无与伦比的馈赠。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过克罗梅日什老城那些被阳光晒得暖洋洋的鹅卵石小巷，一个拐弯，那座蜜糖色的宫殿就毫无预兆地撞进了眼帘。它不是那种咄咄逼人的宏伟，而是一种沉静的、被岁月打磨过的壮丽。宫殿前宽阔的荣誉庭院空无一人，只有鸽群扑棱翅膀的声音和远处花园飘来的隐隐青草香。你立刻就会感到，这里的时间流速和外面那个世界不太一样。它不是一座冰冷的博物馆，而像一个刚刚摘下主教冠冕、换上便服的老贵族，正邀请你到他的书房和花园里坐坐。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进宫殿内部，空气立刻变得清凉，混合着旧木头、蜂蜡和一丝若有若无的油画颜料气味。阳光被高大的窗户切割成一道道金色的光柱，悬浮在空气中，照亮了飞舞的微尘。最震撼的莫过于会议厅，那不是金碧辉煌的堆砌，而是一种深沉的、富有学养的气度。巨大的水晶吊灯默然垂挂，墙上的丝绸壁毯描绘着神话故事，而当你抬头仰望那布满精美湿壁画的天花板时，你会感觉自己不是游客，而是某个午后误入主教私人沙龙的不速之客，连呼吸都不自觉地放轻了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而真正的灵魂，在墙外的花园里。穿过一道低矮的拱门，仿佛踏入了另一个次元。眼前豁然开朗的是乐谱花园，典型的巴洛克式几何美学。修剪得如同绿色雕塑的紫杉树篱，组成迷宫般的图案；长长的喷泉水渠倒映着蓝天，水声潺潺是唯一的背景乐。但别止步于此，继续往里走，跨过一座小桥，风格陡然一变，进入了鲜花花园。这里是色彩的爆炸，是香气的交响曲。成排的玫瑰、鸢尾、大丽花争奇斗艳，嗡嗡的蜜蜂是这里最忙碌的居民。空气甜得发腻，混合着湿润的泥土芬芳。当地人推着婴儿车，或捧着本书坐在长椅上，这座花园是他们日常生活里最奢侈的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里最打动人心的，是一种“完整”的魅力。它不像许多景点那样，宫殿是宫殿，花园是花园。在克罗梅日什，艺术、建筑、自然与生活被完美地编织在了一起。你可以上午在画廊里与提香笔下的人物神交，下午就在他曾凭窗眺望过的花园里，躺在他可能曾踏足过的草坪上晒太阳。这种时空的交叠与沉浸，才是它无与伦比的馈赠。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`克罗梅日什总主教宫`} />
                <InfoRow label="英文名称" value={`Kroměříž Archbishop's Palace`} />
                <InfoRow label="正式名称" value={`Kroměříž Archbishop's Palace`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`克罗梅日什`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`曾是摩拉维亚地区奥洛穆茨总主教的夏季行宫与行政中心，也是哈布斯堡帝国重要的政治与文化策源地之一。`} />
                <InfoRow label="建筑特色" value={`集巴洛克宫殿的庄严与“欧洲花园明珠”的浪漫于一体，其内部画廊藏有欧洲顶级艺术珍品，外部花园是景观设计的典范。`} />
                <InfoRow label="建筑风格" value={`主体宫殿为巴洛克风格，经重建后融合了晚期文艺复兴与早期巴洛克元素；花园则是经典的巴洛克式园林与英式风景园林的杰出结合。`} />
                <InfoRow label="文化价值" value={`作为联合国教科文组织世界遗产，它不仅见证了中欧教会权力的辉煌，更因其无价的艺术收藏（尤其提香、丁托列托等大师画作）和开创性的花园设计，成为欧洲艺术史与园林史上不可或缺的一页。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`宫殿开放时间因季节和区域（如图书馆、画廊）而异，通常为4月至10月，周二至周日 9:00-17:00；11月至3月开放时间缩短或仅周末开放，且主要游览区为画廊。乐谱花园全年开放，夏季（4-9月）大致为8:00-19:00，冬季开放时间缩短。宫殿与花园的具体开放日及时间每年可能微调，冬季部分室内区域可能关闭维护，务必出行前在官网核实最新时刻表。圣诞节及元旦期间通常闭馆。`} />
              <InfoRow label="门票价格" value={`门票分多种组合。仅参观宫殿画廊（含会议厅）成人票价约180捷克克朗。宫殿画廊+乐谱花园联票约220捷克克朗。花园单独门票约80捷克克朗。家庭票、学生票（需出示有效证件）、老年票及6岁以下儿童免票均有优惠。部分特别展览或导览团（如塔楼、图书馆）需额外付费且需提前预约。`} />
              <InfoRow label="地址" value={`Sněmovní náměstí 1, 767 01 Kroměříž, Czechia`} />
              <InfoRow label="交通方式" value={`从布拉格出发最为方便。在布拉格中央火车站（Hlavní nádraží）乘坐火车前往克罗梅日什站（Kroměříž），车程约2-2.5小时，有直达或经布尔诺（Brno）中转的班次，建议选择直达以节省时间，班次频率约每小时1-2班，可通过捷克铁路（ČD）官网或App购票。从克罗梅日什火车站步行至总主教宫约20-25分钟，穿过宁静的老城区即可抵达，沿途风景优美。也可在火车站前乘坐本地公交（如2路、4路）至“Sněmovní náměstí”或“Zámecká”站下车。若自驾，可将车停在老城外围的公共停车场，再步行进入。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事的开端，其实源于一场巨大的毁灭。早在中世纪，这里就有一座属于奥洛穆茨主教的城堡，但让它浴火重生的，是十七世纪那场席卷欧洲的三十年战争。1643年，瑞典军队如风暴般席卷了摩拉维亚，将当时的城堡几乎夷为平地。战火平息后，一位雄心勃勃的主教——卡尔二世·利希滕斯坦-卡斯泰尔科恩登上历史舞台。他决定不再修补旧疤，而是要建造一座配得上其地位与时代的新宫殿。于是，他请来了意大利裔的帝国宫廷建筑师费利切·阿波斯托洛和乔瓦尼·彼得罗·腾卡拉，将意大利的巴洛克风潮带到了这片中欧腹地。从1664年开始，一座崭新的、融合了晚期文艺复兴秩序与早期巴洛克华丽感的宫殿拔地而起，它不仅是主教的夏宫，更旨在成为摩拉维亚地区的文化与行政中心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，命运似乎总爱考验这座宫殿。不到二十年，1685年，一场起因于粗心工匠的大火再次吞噬了它，内部精美的装饰和早期的艺术收藏化为灰烬。这次，接力棒交到了另一位传奇人物手中——主教卡雷尔·利奥波德·冯·特劳特曼斯多夫。他展现了惊人的魄力与品味，不仅以更快的速度重建宫殿，更将重点放在了内涵的填充上。他是一位狂热的艺术收藏家，利用其广泛的人脉和财富，从意大利、荷兰等地大量购藏文艺复兴和巴洛克大师的画作。提香的《阿波罗与马尔西亚斯》、丁托列托的《沐浴的苏珊娜》等无价之宝，就这样跨越千山万水，来到了克罗梅日什的墙壁上，奠定了其画廊世界级声誉的基石。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`十八世纪，宫殿迎来了其政治高光时刻。得益于特劳特曼斯多夫主教打下的良好基础，这里优雅舒适的环境和远离维也纳政治漩涡的宁静，使其成为帝国议会青睐的场所。尤其是在1848年欧洲革命风起云涌之时，面对维也纳街头的骚乱，年轻的奥皇斐迪南一世和他的朝廷选择移驾至此。克罗梅日什总主教宫临时扮演了帝国首都的角色，著名的“克罗梅日什议会”在这里召开，试图为风雨飘摇的哈布斯堡帝国制定一部宪法。虽然会议最终未能阻止革命的浪潮，但这段插曲让这座宫殿的名字永远镌刻在了中欧近代政治史的卷册中。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`与宫殿本身的命运交织并行的，是其花园的传奇。乐谱花园的早期设计可追溯到文艺复兴时期，但在十七世纪后期，被按照最时髦的法国巴洛克园林风格进行了彻底改造，由建筑师乔瓦尼·彼得罗·腾卡拉规划，打造出精确的几何对称、漫长的透视轴线和水景剧场。而鲜花花园的诞生则更晚，也更浪漫。十九世纪中叶，随着英式风景园林在欧洲的流行，当时的主教决定在巴洛克花园旁，打造一个更自然、更充满花卉色彩的浪漫空间。于是，在著名园林设计师安东·阿尔钦的妙手下，这片原先用于实用种植的土地，变成了一个拥有精美温室、蜿蜒小径和数千种花卉的梦幻之地，与严谨的乐谱花园形成了戏剧性的对话。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`二战及之后的共产主义时期，宫殿与花园曾被国有化，经历了不同程度的忽视与损毁。但幸运的是，其核心结构和艺术收藏被奇迹般地保存下来。1998年，因其在建筑、艺术收藏和园林设计上无与伦比的综合价值，克罗梅日什总主教宫及花园被联合国教科文组织列为世界文化遗产。这不仅仅是一顶桂冠，更是一个承诺，确保这座历经战火、火灾与时代变迁的文化绿洲，能够继续以其静谧而深厚的美，滋养着未来无数个世纪的访客。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议将整个游览安排为完整的一天，节奏松弛有度。最好在上午9点半左右抵达，此时游客尚少，光线柔和。上午的2-2.5小时专注探索宫殿内部，从宏大的仪式空间到珍宝般的画廊，沉浸于艺术与历史之中。随后在老城区找一家舒适的餐馆享用午餐，尝尝摩拉维亚本地菜。下午的3-4小时完全交给花园，先在乐谱花园感受巴洛克的理性之美，再漫无目的地迷失在鲜花花园的色彩与香气里，最后在花园深处的池塘边或某个僻静长椅上发呆。这样的安排顺应了从室内到户外、从历史沉思到自然放松的完美节奏。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`宫殿内部画廊严禁触摸画作且禁止使用闪光灯，部分房间可能要求穿鞋套，请遵守规定。花园面积巨大，请务必穿着舒适且适合长时间走路的鞋子。夏季花园内蚊虫可能较多，建议备好驱蚊液。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从荣誉庭院开始，仰视宫殿主立面的庄严，感受那份迎接一天开始的静谧力量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`直接进入心脏地带会议厅，让眼睛适应昏暗，然后慢慢欣赏从地板到天花板的每一个奢华细节与神话壁画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`带着一丝敬畏走进相连的宫殿画廊，在那些世界级名画前长久驻足，寻找提香画作中动人心魄的戏剧性笔触。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从宫殿侧门走出，穿过那道不起眼的拱门，瞬间置身于乐谱花园笔直的中轴线上，直面远处的精美柱廊与喷泉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着水渠漫步，探索两侧由树篱构成的“绿色房间”和迷宫，听喷泉的水声成为唯一的向导。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跨过小桥进入鲜花花园，让自己被汹涌的花海和馥郁的香气淹没，顺时针沿着小径探索中央的圆形喷泉和古老的温室。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到花园最深处那个被垂柳环绕的池塘，坐在水边，看天鹅游弋，将半天的行走疲惫全部卸下。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在黄昏时分回到乐谱花园的柱廊下，回望披上金色夕阳的宫殿背影，捕捉一天中最温柔的时刻。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`乐谱花园主轴回望宫殿`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光，站在花园中轴线喷泉附近，将长长的水渠作为引导线，捕捉宫殿建筑与水中倒影的对称之美。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`鲜花花园圆形喷泉俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚光线柔和时，站在喷泉旁的小坡上，以圆形喷泉和花坛为前景，将后方宏伟的巴洛克温室作为背景，构图饱满而富有层次。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`宫殿画廊的天窗光影`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗的正午时分，站在画廊中央，等待阳光从天窗直射而下，形成一道神圣的光柱笼罩在古老的地板上，快速抓拍这转瞬即逝的戏剧性光线。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`乐谱花园树篱迷宫俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`从迷宫旁的土坡或柱廊二楼（若开放），用广角镜头拍摄迷宫错综复杂的几何图案与在其中嬉戏的人们，充满趣味与形式感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在花园中使用无人机通常被严格禁止，需提前申请特殊许可。拍摄当地人，尤其是花园中的居民时，请保持礼貌，最好先微笑示意获得同意。利用雨后湿润的地面或清晨的露珠，能拍出更加生动、色彩饱和的花园照片。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`老城中心秘密`}</h4>
                  <p className="text-sm text-blue-800">{`藏身于主广场旁百年建筑内的设计酒店，房间拥有裸露的原始砖墙和现代家具，开窗就能闻到楼下面包店的香气。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`花园边上的人家`}</h4>
                  <p className="text-sm text-green-800">{`由花园园丁旧居改造的家庭式公寓，带一个小露台，晚上能听见风吹过树篱的沙沙声，主人会送你自家种的苹果。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`主教官邸体验`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在宫殿建筑群侧翼的精品酒店，部分房间保留了古老的壁画天花板，让你真正住在世界遗产里，享受清晨独享花园的特权。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`摩拉维亚田园诗`}</h4>
                  <p className="text-sm text-purple-800">{`驱车十分钟可达的郊外乡村旅馆，被苹果园和池塘包围，提供丰盛的家常晚餐和地窖里的自酿葡萄酒，是彻底放松的完美终点。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（尤其是七月八月）和周末的住宿非常紧俏，建议至少提前两个月预订。老城内的住宿停车位有限，自驾旅客需提前咨询酒店停车安排。选择住在老城或花园附近，可以享受清晨和傍晚游客散去后，独享世界遗产的宁静时刻，这绝对是值得的投资。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开克罗梅日什总主教宫很久之后，脑海里挥之不去的，不是某幅具体的名画，也不是某处精确的景观，而是一种混合的感觉——那种旧木头的气味、花园里潮湿的泥土芬芳、喷泉永不停歇的潺潺水声，以及午后阳光在宫殿地板上缓慢移动的光斑。它不像那些让人瞬间屏息的景点，用绝对的壮观征服你；它更像一泓深泉，你需要静下来，靠近它，才能看见自己倒影的同时，也看清了水面下那深邃、丰富而层层叠叠的历史沉积。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求快速、刺激和“出片”的时代，克罗梅日什提供了一种近乎“古老”的旅行价值：深度沉浸与缓慢发现。它要求你付出时间，用脚步去丈量花园的每一个角落，用耐心去读懂一幅画背后的故事。在这里，你会重新学会“停留”的意义。它不仅仅是一个旅游目的地，更是一个提醒：最美的文化景观，是那些将艺术、自然与人类生活智慧无缝融合的地方。它们讲述的，不是孤立的辉煌，而是一个关于守护、传承以及在动荡世界中创造永恒之美的故事。对于任何一位厌倦了走马观花、渴望在旅途中获得内心宁静与历史对话的旅人来说，这里都应该是清单上不可错过的一站。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/lednice-valtice" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莱
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莱德尼采–瓦尔季采庄园</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lednice–Valtice Cultural Landscape</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/znojmo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    兹
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">兹诺伊莫古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Znojmo</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/brno" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布尔诺老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Brno</p>
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
