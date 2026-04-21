import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '迪茨 Diez｜住进伯爵城堡，探秘荷兰王室的德国巴洛克宫殿 - 最佳欧洲景点',
  description: '你从拉恩河对岸望向迪茨的第一眼，就会被那幅画面抓住：山顶上，深灰色的城堡塔楼像从岩石里生长出来一样，坚定地刺向天空，俯瞰着脚下那片红色、橙色和棕色瓦片铺成的老城屋顶海洋。空气中飘着附近面包房刚出炉的黑麦面包的微酸香气，混合着拉恩河带来的湿润水汽。穿过古老的石桥走进老城，你的耳朵会立刻被两种声音填满—',
}

export default function DiezCastleOraniensteinPalacePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '德国', href: '/destinations/europe' },
            { label: '迪茨', href: '/destinations/europe' },
            { label: '迪茨', href: '/attractions/diez-castle-oranienstein-palace' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`迪茨・Diez・德国・迪茨`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你从拉恩河对岸望向迪茨的第一眼，就会被那幅画面抓住：山顶上，深灰色的城堡塔楼像从岩石里生长出来一样，坚定地刺向天空，俯瞰着脚下那片红色、橙色和棕色瓦片铺成的老城屋顶海洋。空气中飘着附近面包房刚出炉的黑麦面包的微酸香气，混合着拉恩河带来的湿润水汽。穿过古老的石桥走进老城，你的耳朵会立刻被两种声音填满——教堂整点敲响的浑厚钟声，以及从城堡方向隐隐传来的、属于年轻人的欢快笑语。这太奇妙了，一座严肃的伯爵城堡，此刻正洋溢着青春的活力。
顺着陡峭的、被无数脚步磨得光滑的鹅卵石小径往上爬，当你气喘吁吁地抵达城堡庭院时，眼前的景象会瞬间让你忘记疲惫。这里没有冷冰冰的博物馆围栏，晒着太阳聊天的学生、晾在古老拱窗外的彩色毛巾、公共厨房里传出的煮意面声……这座始建于11世纪的堡垒，如今是德国最负盛名的青年旅舍之一。你可以触摸到那些冰凉的、坑洼不平的墙体巨石，同时又能看到玻璃门上贴着的本周活动通知。历史在这里不是被封存的标本，而是可以住进去、可以听见隔壁床铺翻身声的活生生的日常。
然而，迪茨的魔法不止于此。当你从城堡下山，沿着拉恩河往镇外漫步约二十分钟，穿过一片宁静的林地，另一个世界会豁然展开。奥拉宁施泰因宫，一座明黄色与白色相间的、巨大而对称的巴洛克宫殿，仿佛一位盛装的贵族，优雅地躺在河谷的草地上。这与山巅城堡的粗犷形成了极致对比。这里安静得能听见喷泉水珠溅落的声音，空气里是修剪整齐的草坪和古老黄杨树篱的清冽味道。你会恍惚觉得，山上的城堡是“工作”和“防御”的地方，而这里，则是贵族们真正用来“生活”、享受艺术与美景的私密乐园。这种在步行可达范围内，体验从中世纪军事强权到近代巴洛克精致美学的强烈反差，正是迪茨最核心、也最打动人心的魅力。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你从拉恩河对岸望向迪茨的第一眼，就会被那幅画面抓住：山顶上，深灰色的城堡塔楼像从岩石里生长出来一样，坚定地刺向天空，俯瞰着脚下那片红色、橙色和棕色瓦片铺成的老城屋顶海洋。空气中飘着附近面包房刚出炉的黑麦面包的微酸香气，混合着拉恩河带来的湿润水汽。穿过古老的石桥走进老城，你的耳朵会立刻被两种声音填满——教堂整点敲响的浑厚钟声，以及从城堡方向隐隐传来的、属于年轻人的欢快笑语。这太奇妙了，一座严肃的伯爵城堡，此刻正洋溢着青春的活力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "顺着陡峭的、被无数脚步磨得光滑的鹅卵石小径往上爬，当你气喘吁吁地抵达城堡庭院时，眼前的景象会瞬间让你忘记疲惫。这里没有冷冰冰的博物馆围栏，晒着太阳聊天的学生、晾在古老拱窗外的彩色毛巾、公共厨房里传出的煮意面声……这座始建于11世纪的堡垒，如今是德国最负盛名的青年旅舍之一。你可以触摸到那些冰凉的、坑洼不平的墙体巨石，同时又能看到玻璃门上贴着的本周活动通知。历史在这里不是被封存的标本，而是可以住进去、可以听见隔壁床铺翻身声的活生生的日常。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，迪茨的魔法不止于此。当你从城堡下山，沿着拉恩河往镇外漫步约二十分钟，穿过一片宁静的林地，另一个世界会豁然展开。奥拉宁施泰因宫，一座明黄色与白色相间的、巨大而对称的巴洛克宫殿，仿佛一位盛装的贵族，优雅地躺在河谷的草地上。这与山巅城堡的粗犷形成了极致对比。这里安静得能听见喷泉水珠溅落的声音，空气里是修剪整齐的草坪和古老黄杨树篱的清冽味道。你会恍惚觉得，山上的城堡是“工作”和“防御”的地方，而这里，则是贵族们真正用来“生活”、享受艺术与美景的私密乐园。这种在步行可达范围内，体验从中世纪军事强权到近代巴洛克精致美学的强烈反差，正是迪茨最核心、也最打动人心的魅力。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`迪茨`} />
                <InfoRow label="英文名称" value={`Diez`} />
                <InfoRow label="正式名称" value={`Diez Castle and Schloss Oranienstein`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`迪茨`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`作为前拿骚-迪茨伯爵领地的核心，是连接德国地方贵族与荷兰王室统治血脉的重要历史见证地。`} />
                <InfoRow label="建筑特色" value={`山巅的中世纪城堡与河畔谷地的宏大巴洛克宫殿，形成了一幅立体的、跨越数百年的权力与居住图景。`} />
                <InfoRow label="建筑风格" value={`城堡主体为罗马式与哥特式防御建筑，经多次改建；奥拉宁施泰因宫则是典型的荷兰古典主义巴洛克风格，庄严对称。`} />
                <InfoRow label="文化价值" value={`它完美诠释了欧洲贵族领地从军事要塞到舒适宫殿，再到融入现代公共生活的功能变迁史。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`迪茨城堡（现青年旅舍）公共区域与露台全天可自由参观，内部住宿区仅对住客开放。奥拉宁施泰因宫（Schloss Oranienstein）开放时间较为复杂：宫殿内部通常于4月至10月的周二至周日，每天11:00、14:00、15:00有固定导览团（德语），冬季仅周末开放或需提前预约。宫殿花园全年免费开放。出行前务必在其官网或当地旅游局确认最新时刻表。`} />
              <InfoRow label="门票价格" value={`迪茨城堡外部及小镇免费。奥拉宁施泰因宫导览游成人票约8欧元，优惠票约6欧元。花园免费。联票或特别展览票价可能浮动。`} />
              <InfoRow label="地址" value={`迪茨城堡：Schloßberg, 65582 Diez, Germany
奥拉宁施泰因宫：Schloss Oranienstein 1, 65582 Diez, Germany`} />
              <InfoRow label="交通方式" value={`最近的主要交通枢纽是法兰克福机场。从法兰克福中央火车站乘坐IC或RE列车前往林堡（Limburg）站，车程约1小时，班次频繁。从林堡火车站前广场，换乘471路或474路公交车，约15-20分钟即可抵达迪茨老城“Markt”站。如果自驾，从法兰克福沿A3高速公路至林堡，再转B417公路，有清晰路标指向迪茨，小镇外围有付费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "迪茨的故事，始于莱茵河支流拉恩河畔的那个战略制高点。大约在公元11世纪，为了控制这条重要的水路贸易通道，某位不知名的领主在一块巨大的玄武岩山丘上，垒起了第一块石头，迪茨城堡的雏形就此诞生。在接下来的几个世纪里，它就像一块磁石，吸引着纷争与权力。它最初属于法兰克尼亚的公爵们，后来在复杂的中世纪继承与联姻网络中，成为了“拿骚”这个显赫家族的重要支系——拿骚-迪茨伯爵的驻地。城堡在战火中一次次被摧毁，又一次次被重建、加固，墙体越来越厚，塔楼越来越高，记录着冷兵器时代领主间的摩擦与攻防。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间来到17世纪，欧洲的舞台风云变幻，迪茨的命运也因此迎来了一次意想不到的华丽转折。拿骚家族的一个分支，通过联姻和继承，竟然成为了荷兰的执政，乃至后来的王室——奥兰治家族。于是，这座德国小镇，与隔海相望的尼德兰共和国产生了千丝万缕的联系。1680年，一位来自荷兰的公主，拿骚-迪茨伯爵夫人阿尔贝蒂娜·阿格内丝，做出了一个决定：她厌倦了住在阴冷、不便的山顶城堡里。她要在风景优美、地势平坦的拉恩河谷，为自己建造一座符合当时最时髦品味的夏季行宫。这便是奥拉宁施泰因宫的起源。它的名字“Oranienstein”，直译就是“奥兰治之石”，赤裸裸地宣告着它与荷兰王室的直属血缘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "宫殿的建造本身就是一场横跨北海的文化迁徙。建筑师很大程度上借鉴了荷兰古典主义风格，强调严谨的对称、清晰的几何线条和庄严的立面。你能想象当时的场景吗？荷兰的工程师、法国的园林设计师、意大利的石膏匠人，可能都汇聚于此，将最新的欧洲艺术潮流注入这个德国山谷。宫殿内部更是极尽奢华，充满了描绘奥兰治家族伟业的壁画、来自东方的瓷器、以及精美的灰泥装饰。这里成了远离荷兰政治纷扰的宁静避风港，也是展示家族财富与权力的绝佳舞台。在接下来的百余年里，它一直是奥兰治-拿骚家族心爱的居所。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史的车轮滚滚向前。随着近代民族国家的形成和贵族权力的衰落，无论是山顶的城堡还是谷地的宫殿，都不可避免地走向了沉寂。城堡在19世纪后逐渐失去了军事意义，一度荒废。宫殿也在家族成员离世后空置，经历了作为军营、学校的多种身份。它们像两位退休的贵族，一个粗犷，一个优雅，但都共同面对着被时代遗忘的命运。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转机发生在20世纪。富有远见的当地人没有让这些珍贵的历史建筑彻底沦为废墟。上世纪中期，迪茨城堡被富有创意地改造为一家青年旅舍。这并非简单的废物利用，而是一种充满智慧的活化：让来自世界各地的年轻人住进历史里，用他们的脚步和笑声重新唤醒古老的墙壁。而奥拉宁施泰因宫，经过精心修缮，部分恢复了昔日的辉煌，作为博物馆向公众开放，另一部分则仍由荷兰王室使用，偶尔举行家族活动。于是，今天的迪茨呈现出一幅无比生动的画面：山顶上，千年城堡因青年旅舍而生机勃勃；山谷中，巴洛克宫殿作为文化遗产被妥善保存。它们共同讲述着一个关于权力、艺术、衰落与重生的，绵长而完整的故事。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天（6-8小时）来充分沉浸于迪茨的双重世界。最佳节奏是上午探索充满生活气息的山顶城堡与老城，下午沉浸在宁静华丽的巴洛克宫殿与花园。早晨9点左右抵达迪茨老城，这时游客稀少，阳光柔和，能拍到老城巷子和城堡最干净的画面。上午的行程以攀爬和探索为主，精力最充沛。午餐后，步行前往奥拉宁施泰因宫，此时宫内导览团开始，花园光线也正好。这样的安排错开了可能的团队游客高峰，也让你在体力消耗最大的上午完成登山，下午可以更悠闲地享受宫殿的艺术与宁静。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对舒适防滑的鞋，上下城堡的石阶在潮湿时非常滑。参观奥拉宁施泰因宫内部必须参加德语导览团，虽然听不懂但建筑和装饰本身已足够震撼，可提前在手机里存好宫殿简介。若想在城堡青年旅舍的餐厅用午餐（性价比极高！），最好上午爬山时就顺便预订好座位。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨先从老城中心的集市广场开始，摸一摸那尊憨厚的“迪茨之狮”铜像，感受石板路被晨光晒得微微发暖的触感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着面包房飘来的香气找到巷子里家族经营的面包坊，买一个刚出炉的“施佩克尔”果料面包当登山能量补给。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着清晰路标指示的“Zur Jugendherberge”小道开始登山，在陡峭的石阶转弯处记得回头，俯瞰拉恩河与老城屋顶构成的渐次苏醒的画卷。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开城堡青年旅舍厚重的大门，即使不是住客也大胆走进接待区，欣赏那保留着古老拱顶的公共客厅，感受历史空间与现代旅行者交汇的独特氛围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要登上城堡最高的露台或城墙，让360度的全景风吹走爬山的燥热，辨认远方林堡大教堂的双塔和蜿蜒如银色丝带的拉恩河。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后回到老城，在临河的某家咖啡馆外坐下，点一杯咖啡，看天鹅在河面划出涟漪，消化上午视觉与体力的双重冲击。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午餐后沿着拉恩河畔绿树成荫的步行道轻松漫步二十分钟，让心情从上午的中世纪切换到下午的巴洛克频道。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在奥拉宁施泰因宫入口处核对好导览团时间，如果来得及就先在法式园林里走走，沿着中轴线欣赏修剪完美的树篱和远处的宫殿立面。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`拉恩河对岸公路桥上的全景位`}</h4>
                  <p className="text-sm text-gray-700">{`日落前约一小时，使用中长焦镜头压缩空间，能将山顶城堡、山腰老城、蜿蜒河流一同纳入画面，天空常有暖色调云彩。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡青年旅舍顶层露台的框景`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点后，阳光充分照亮河谷时，利用古老的石砌拱窗或箭孔作为前景框架，拍摄窗外生机勃勃的城镇与田园风光。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`奥拉宁施泰因宫花园的对称构图`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光将宫殿立面完全照亮时，站在花园中轴线喷泉后方，低角度拍摄，让喷泉前景、笔直路径和宏伟宫殿形成强烈的纵深与对称美感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`老城巷子的细节捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚的侧光下，寻找一条有坡度的狭窄石板路，聚焦于被岁月打磨得光滑如镜的石块表面，以及两旁彩色木筋房的反光，营造故事感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在城堡青年旅舍内部拍摄时请务必尊重住客隐私，避免对准宿舍房间或私人区域。宫殿内部通常允许拍照但禁止使用闪光灯和三脚架。拉恩河谷在夏秋清晨常起薄雾，是拍摄梦幻氛围城堡照片的绝佳时机，但需早起和一点点运气。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`终极特色体验`}</h4>
                  <p className="text-sm text-blue-800">{`直接入住迪茨城堡青年旅舍，选择一间由古老石墙房间改造的多人间或双人间，在千年历史的拱顶下入睡，清晨独享整个城堡露台的无敌全景。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老城中心舒适之选`}</h4>
                  <p className="text-sm text-green-800">{`下榻位于集市广场旁的精品酒店，房间有现代化的设施却能透过木框窗看到古老的街景，下楼就是热闹的餐馆和咖啡馆，位置无可挑剔。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`宁静河畔度假屋`}</h4>
                  <p className="text-sm text-yellow-800">{`租住拉恩河对岸的一栋传统半木结构度假屋，拥有面向城堡和河流的私人露台，适合家庭或小团体，享受与风景融为一体的宁静夜晚。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`宫殿附近的乡村民宿`}</h4>
                  <p className="text-sm text-purple-800">{`选择奥拉宁施泰因宫周边葡萄园或农场里的民宿，环境极其安静，早晨在鸟鸣中醒来，可以散步前往宫殿花园，体验贵族般的田园清晨。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "迪茨是一个非常安全宁静的小镇，所有住宿区域治安都很好。如果目标是入住城堡青年旅舍，务必提前数月在其官网预订，尤其是旺季和周末，这里常常被学校团体和远足家庭订满。住在镇外民宿虽安静，但晚餐后步行回住处可能路灯较暗，建议随身带个小手电。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开迪茨许久后，我时常回想起那里的一种独特“声音”——不是单一的钟声或水声，而是一种混合的韵律：青年旅舍里不同语言交织的谈笑，与宫殿花园里近乎神圣的寂静，交替回荡在脑海里。这个地方教会我，历史并非总是沉重和需要屏息凝视的。它可以是一张青年旅舍的上下铺，是你与陌生旅人共享早餐时身后的那面千年石墙；它也可以是一种穿越时空的想象，当你在宫殿空旷的舞厅里，仿佛能听到几百年前裙摆扫过大理石地面的窸窣声响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求效率、一切都被加速的时代，迪茨提供了一种难得的“慢”与“层叠”的体验。它没有世界级景点的喧嚣，却有着更丰沛的层次感。它让你在同一天、步行可达的范围内，亲身经历了从防御到享乐、从石头到灰泥、从领主到平民、从废弃到新生的完整叙事。它告诉我们，伟大的遗产最好的归宿不是被真空封存，而是以一种充满尊重的、有机的方式重新编织进当代生活的经纬里。对于每一位厌倦走马观花、渴望触摸历史真实温度的深度旅者来说，迪茨就像一颗藏在拉恩河畔的时光胶囊，等待你去打开，并住在其中。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/gelnhausen-kaiserpfalz" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    盖
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">盖尔恩豪森（巴巴罗萨行宫）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gelnhausen (Kaiserpfalz)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/spalt-hopfenerlebnispfad" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施帕尔特啤酒花之乡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Spalt</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tittmoning-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蒂
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蒂特莫宁城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tittmoning Castle</p>
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
