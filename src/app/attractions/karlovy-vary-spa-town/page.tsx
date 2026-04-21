import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡罗维发利 Karlovy Vary ｜ 建在陡峭山谷中的波西米亚温泉之王 - 最佳欧洲景点',
  description: '你第一眼看见卡罗维发利，会觉得整个小镇像是被一只温柔的手小心翼翼地放进了陡峭的绿色山谷褶皱里。特普拉河穿城而过，空气里永远飘着一股淡淡的、类似煮鸡蛋的硫磺味，但奇怪的是，这味道并不恼人，反而混合着河边糕饼店飘出的热腾腾的温泉薄饼（oplatky）的焦糖香气，变成了一种独特的、令人安心的背景气味。清晨',
}

export default function KarlovyVarySpaTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '捷克', href: '/destinations/czech-republic' },
            { label: '卡罗维发利', href: '/destinations/czech-republic' },
            { label: '卡罗维发利', href: '/attractions/karlovy-vary-spa-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卡罗维发利・Karlovy Vary・捷克・卡罗维发利`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼看见卡罗维发利，会觉得整个小镇像是被一只温柔的手小心翼翼地放进了陡峭的绿色山谷褶皱里。特普拉河穿城而过，空气里永远飘着一股淡淡的、类似煮鸡蛋的硫磺味，但奇怪的是，这味道并不恼人，反而混合着河边糕饼店飘出的热腾腾的温泉薄饼（oplatky）的焦糖香气，变成了一种独特的、令人安心的背景气味。清晨的薄雾还缠绕在山腰时，当地人已经拿着他们色彩斑斓的、带有一个小吸嘴的陶瓷温泉杯，不紧不慢地走向最近的长廊。那杯子可不是普通的纪念品，它是开启这里所有仪式的钥匙——你得学着像他们一样，接着从某个华丽喷嘴里涌出的、热乎乎（有些高达70多度！）的温泉水，一边小口啜饮，一边沿着装饰着繁复铁艺花纹的回廊慢慢散步。这就是卡罗维发利的节奏：慢，且带着一种仪式感。阳光渐渐升高，照亮了那些淡黄、浅粉、薄荷绿的外墙，新艺术风格的曲线在墙上蔓延伸展，铸铁长廊的镂空花纹在地面上投下精致的光影。这里最打动人心的，正是这种奇妙的结合——极致的人工雕琢之美（那些长廊的精细程度让人屏息），与大地深处自然力量的慷慨馈赠，在一个充满生活气息的山谷里，达成了完美的和谐。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你第一眼看见卡罗维发利，会觉得整个小镇像是被一只温柔的手小心翼翼地放进了陡峭的绿色山谷褶皱里。特普拉河穿城而过，空气里永远飘着一股淡淡的、类似煮鸡蛋的硫磺味，但奇怪的是，这味道并不恼人，反而混合着河边糕饼店飘出的热腾腾的温泉薄饼（oplatky）的焦糖香气，变成了一种独特的、令人安心的背景气味。清晨的薄雾还缠绕在山腰时，当地人已经拿着他们色彩斑斓的、带有一个小吸嘴的陶瓷温泉杯，不紧不慢地走向最近的长廊。那杯子可不是普通的纪念品，它是开启这里所有仪式的钥匙——你得学着像他们一样，接着从某个华丽喷嘴里涌出的、热乎乎（有些高达70多度！）的温泉水，一边小口啜饮，一边沿着装饰着繁复铁艺花纹的回廊慢慢散步。这就是卡罗维发利的节奏：慢，且带着一种仪式感。阳光渐渐升高，照亮了那些淡黄、浅粉、薄荷绿的外墙，新艺术风格的曲线在墙上蔓延伸展，铸铁长廊的镂空花纹在地面上投下精致的光影。这里最打动人心的，正是这种奇妙的结合——极致的人工雕琢之美（那些长廊的精细程度让人屏息），与大地深处自然力量的慷慨馈赠，在一个充满生活气息的山谷里，达成了完美的和谐。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卡罗维发利`} />
                <InfoRow label="英文名称" value={`Karlovy Vary`} />
                <InfoRow label="正式名称" value={`卡罗维发利温泉小镇`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`卡罗维发利`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`欧洲最负盛名、历史最悠久的温泉疗养胜地之一，自14世纪以来便是欧洲贵族与文化艺术名流的“社交客厅与健康殿堂”。`} />
                <InfoRow label="建筑特色" value={`沿着蜿蜒的特普拉河峡谷而建，由一连串精美绝伦、风格各异的温泉回廊与色彩柔和的巴洛克、新艺术风格建筑构成一幅立体画卷。`} />
                <InfoRow label="建筑风格" value={`以巴洛克、新艺术运动风格为主，混搭古典主义与当地波西米亚特色，其标志性的铸铁雕花温泉回廊是世界建筑装饰艺术的瑰宝。`} />
                <InfoRow label="文化价值" value={`不仅是物理意义上的疗愈之地，更是数百年来欧洲社会、文化、艺术交流的熔炉，见证了从中世纪皇室到现代大众温泉养生文化的完整演变。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`温泉长廊及公共泉眼全年全天24小时开放，可随时免费饮用温泉水。各大温泉浴场和博物馆有独立营业时间，通常为上午9点至下午6点，部分历史浴场（如玛利亚温泉疗养院）的参观仅限导览团，需提前预约。重要提示：许多温泉回廊内的精美公共饮水处是永不关闭的。冬季（11月至3月）部分户外活动或游船可能暂停，但小镇核心体验不受影响。`} />
              <InfoRow label="门票价格" value={`小镇本身免门票。主要费用在于温泉体验：饮用温泉水完全免费（需自购或租赁特色温泉杯）。参观代表性历史建筑内部（如磨坊温泉长廊上层、玛利亚温泉疗养院导览）费用约150-350捷克克朗（6-14欧元）。完整的温泉疗养套餐（包含浴场、按摩、理疗）价格从数千到上万克朗不等，可按需选择单次体验（如一小时古典温泉浴约600克朗/24欧元）。学生、老人通常享有博物馆门票折扣。`} />
              <InfoRow label="地址" value={`Karlovy Vary, 360 01, Czech Republic`} />
              <InfoRow label="交通方式" value={`从布拉格出发是最佳选择：1. 火车：从布拉格 hlavní nádraží 中央火车站乘坐直达列车，约3小时15分钟，班次每天约5-6班，风景优美，推荐购买捷克铁路（ČD）的固定班次票，提前在线购买可能有折扣。2. 巴士：从布拉格Florenc汽车站乘坐RegioJet或FlixBus，车程约2小时，班次频繁（几乎每小时一班），价格通常比火车便宜，是性价比之选。3. 自驾：沿D6/E48高速公路向西行驶约130公里，约1小时45分钟，小镇外围有大型停车场，建议将车停在酒店或停车场后步行游览（中心区停车困难且昂贵）。小镇内部完全依靠步行，地形有起伏，请穿舒适的鞋子。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事要从一次皇家狩猎说起。传说在1358年左右，波西米亚国王兼神圣罗马帝国皇帝查理四世，在追捕一头鹿时，发现了这里从地下喷涌而出的热泉。那只受伤的鹿跳入热泉，伤口竟迅速愈合后逃之夭夭。这个传说为小镇披上了第一层神秘色彩，查理四世随后在此建立了疗养地，并以自己的名字命名为“查理的温泉”（Karlsbad）。最初的规模很小，但温泉的神奇疗效随着商旅和朝圣者口耳相传，名声渐渐越过波西米亚的边界。到了16、17世纪，它已经成为哈布斯堡王朝贵族和欧洲其他王公显贵的疗养首选。然而，命运给了小镇重重一击。1604年，一场毁灭性的大火几乎将木制建筑的小镇夷为平地。但浴火重生后，人们开始用石头重建，巴洛克风格的建筑逐渐占据主导，赋予了小镇最初的经典风貌。真正让卡罗维发利登上欧洲社交与文化顶峰的，是18、19世纪。那是它的“黄金时代”。沙俄的彼得大帝、奥地利的玛丽亚·特蕾莎女皇、诗人歌德、音乐家贝多芬、肖邦……几乎你能想到的欧洲名人录上的一半名字，都曾在此流连。他们不仅来疗养，更是来社交、来创作、来享受生活。巨大的需求催生了建筑奇迹。19世纪中后期，随着铁路开通，小镇迎来了建设高潮。当时最顶尖的建筑师们被请来，他们不再满足于单一的巴洛克，而是将当时最时髦的新艺术运动风格淋漓尽致地运用在公共建筑上。于是，我们看到了奇迹般的铸铁作品——比如1881年建成的磨坊温泉长廊，长达132米，124根科林斯柱支撑着绘有寓言壁画的华丽天花板，两侧排列着五个温泉源头，其宏伟犹如一座水的宫殿。另一个标志，市场温泉长廊，则像一件精致的白色蕾丝刺绣，纯铸铁结构轻盈剔透，仿佛童话中的亭阁。两次世界大战和冷战时期，小镇经历了沉寂，但随着天鹅绒革命后捷克对外开放，它又重新找回了那份从容不迫的优雅，不再是少数权贵的禁脔，而是向所有寻求片刻宁静与疗愈的旅人敞开怀抱。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的卡罗维发利一日深度游，是一场从“品水”到“读城”的沉浸式体验。建议前一晚抵达并住下，第二天清晨8点左右开始游览，此时晨雾未散，游客稀少，光线柔和。整体耗时约6-8小时，节奏务必放慢，核心是沿着特普拉河两岸，由下而上、再由上而下地穿梭于各个温泉长廊与历史建筑之间。这样的安排能让你先感受最经典的核心景观，再探索高处的宁静视野，最后在傍晚时分回到中心，体验华灯初上时小镇的浪漫氛围。请务必留出充足的“发呆”和“饮水”时间，这才是精髓。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`饮用不同温度的温泉水时，请小口慢饮，给身体适应的时间，并遵循当地建议的饮用量（通常一天不超过1-2升）。
小镇石板路多且有坡度，请务必穿一双绝对舒适、防滑的步行鞋，高跟鞋在这里是“灾难级”选择。
购买温泉杯时，选择带吸嘴的陶瓷杯是正宗体验，但注意不同泉眼的水温很高，小心烫手，使用吸嘴可以避免烫伤。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第一站从最壮观的磨坊温泉长廊开始，在清晨的宁静中细细仰望那124根立柱和天花板上的华美壁画，并用温泉杯依次品尝长廊内五个温度、口味各异的泉眼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过小桥来到对岸童话般的市场温泉长廊，在它纯白镂空的铸铁穹顶下，接一杯最热的“市场温泉”，感受蒸汽扑面而来的震撼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着河边坡道向上，来到宏伟的新洛可可风格沙多瓦温泉回廊，这里曾是最大的饮用温泉大厅，感受其内部空间的恢弘与历史气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`继续沿河漫步，你会看到河岸建筑外墙上一幅幅巨大的新艺术风格壁画和浮雕，放慢脚步，把它们当作露天的艺术画廊来欣赏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在普普大饭店（Grandhotel Pupp）前驻足，这座电影《皇家赌场》取景地的奢华酒店，本身就是一部立体的新艺术建筑史书。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`乘坐复古的黛安娜索道缆车登上山顶，在黛安娜瞭望塔俯瞰整个小镇像一幅彩色画卷铺展在翠绿山谷中的全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后，去河畔任何一家老咖啡馆，点一份现烤的温泉薄饼和一杯咖啡，像当地人一样享受下午茶时光。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分，再次漫步到温泉区，看华灯初上的长廊和建筑倒映在特普拉河中，与白天的景色截然不同，充满静谧的魔法。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`市场温泉长廊正面全景`}</h4>
                  <p className="text-sm text-gray-700">{`上午9-10点，阳光正好从东侧洒向长廊纯白的主体，站在河对岸的小桥上，将长廊精致的铁艺、背后色彩斑斓的建筑以及河面倒影一同纳入镜头，构图饱满而富有层次。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`磨坊温泉长廊内部纵深`}</h4>
                  <p className="text-sm text-gray-700">{`选择下午阳光斜射入长廊的时刻（约3-4点），站在长廊一端，利用两侧规律的柱廊形成强烈的透视纵深感，等待一位手持温泉杯的游客走入画面中央，增添故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从黛安娜瞭望塔俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗的日落前一小时，登上瞭望塔，用长焦镜头捕捉蜿蜒的特普拉河如同缎带串起两岸色彩柔和、错落有致的建筑群，远处山峦叠嶂，光线温暖而富有质感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`特普拉河岸仰拍建筑壁画`}</h4>
                  <p className="text-sm text-gray-700">{`午后时分，沿着河流西岸（温泉长廊对岸）行走，抬头寻找外墙上巨大的新艺术风格壁画或浮雕，用广角镜头低角度仰拍，将建筑、艺术与天空融为一体，极具视觉冲击力。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄当地人饮用温泉水或疗养者时，请务必保持尊重，先微笑示意或征得同意，避免近距离特写，以不打扰他人的沉浸体验为前提。`}</li>
                <li>• {`利用温泉杯作为前景或道具拍摄长廊细节（如铁艺花纹）是很好的创意，但请小心放置杯子，不要阻碍通道或让热水洒出。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住“普普大饭店”或同等级别的老牌宫殿酒店，在铺着厚地毯的走廊、挂着水晶吊灯的大厅和俯瞰小镇的房间里，彻底体验一次黄金时代的奢华遗风。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`中心便利之选`}</h4>
                  <p className="text-sm text-green-800">{`选择位于市场温泉长廊或磨坊温泉长廊附近由老建筑改造的精品酒店或公寓，推窗即见风景，下楼就能接温泉，将最宝贵的时间都留给漫步与体验。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`静谧山腰之选`}</h4>
                  <p className="text-sm text-yellow-800">{`住在小镇两侧山坡上的家庭式民宿或小型设计酒店，每天需要步行一段坡路上下，但换来的是绝对宁静的夜晚和清晨被鸟鸣与森林气息唤醒的私密享受。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`疗养体验之选`}</h4>
                  <p className="text-sm text-purple-800">{`预订一家正宗的温泉疗养酒店（如玛利亚温泉疗养院附属酒店），不仅住宿，还能享受包含温泉浴、理疗和医生咨询的全套古典疗养套餐，进行一场彻底的身心重启。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（6-8月）和圣诞市场期间是绝对旺季，务必提前至少2-3个月预订，尤其是热门的历史酒店。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "选择住在中心区虽然方便，但晚上可能仍能听到河边餐厅酒吧的隐约人声，追求绝对安静的旅人请仔细查看酒店评价或选择半山位置。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开卡罗维发利好几天，手指似乎还能回忆起那种陶瓷温泉杯特有的温润触感，鼻腔里也仿佛残留着一丝矿物质水的独特气息。这个地方教会我的，是一种近乎失传的“慢的哲学”。在一个追求高效和即时满足的时代，它固执地维持着一种古老的节奏：你必须停下脚步，拿起一个特定的杯子，走到一个特定的泉眼，等待，接水，然后小口小口地，在散步中完成一次饮用。这个过程无法被加速，也无法被数字化。它用这种温和的强制力，让你重新与自己的身体、与当下、与周遭的建筑细节建立连接。它不仅仅是一个“景点”，更是一个巨大的、开放式的疗愈剧场。在这里，疗愈不只是浸泡在热水里，更是眼睛被那些精美铁艺抚慰，是脚步被有弹性的石板路按摩，是心灵被数百年来无数在此寻求安宁的灵魂所共振。每一位热爱深度游的旅人都该来这里，不是为了打卡，而是为了体验一种不同的时间维度——一种属于温泉、属于散步、属于安静凝视的时间。当你沿着长廊走完一圈，喝下几杯味道各异的温泉水，你会感觉卸下的不只是旅途的疲惫，更有一些积攒在内心的、现代生活的坚硬颗粒，被这山谷里的温热与美丽悄然融化。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/karlovy-vary-colonnades" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡罗维发利温泉回廊</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Karlovy Vrum Colonnades</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/klatovy-catacombs" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克拉托维耶稣会教堂与地下墓穴</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Klatovy Catacombs</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sedlec-ossuary-kutna-hora-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    库
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">库特纳霍拉（人骨教堂及老城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kutná Hora (Sedlec Ossuary & Old Town)</p>
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
