import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '策勒 Celle｜穿越回德国的木构童话，探秘五百座彩色木骨架房屋的迷宫 - 最佳欧洲景点',
  description: '当你的双脚第一次踩上策勒老城那些被岁月磨得温润发亮的鹅卵石路面时，会有一种奇妙的错觉——仿佛不是走进了一个地方，而是跌进了一本立体、彩色的童话书里。空气里飘着淡淡的、好闻的木头香气，混合着从街角面包房溢出的新鲜酵母和焦糖的甜香。抬头望去，视线立刻就被淹没了：一栋接一栋、挤挤挨挨的木骨架房屋，像一群穿...',
}

export default function CelleHalfTimberedTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '德国', href: '/destinations/germany' },
            { label: '策勒', href: '/destinations/germany' },
            { label: '策勒（五百座木骨架房屋之城）', href: '/attractions/celle-half-timbered-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`策勒（五百座木骨架房屋之城）・Celle・德国・策勒`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你的双脚第一次踩上策勒老城那些被岁月磨得温润发亮的鹅卵石路面时，会有一种奇妙的错觉——仿佛不是走进了一个地方，而是跌进了一本立体、彩色的童话书里。空气里飘着淡淡的、好闻的木头香气，混合着从街角面包房溢出的新鲜酵母和焦糖的甜香。抬头望去，视线立刻就被淹没了：一栋接一栋、挤挤挨挨的木骨架房屋，像一群穿着华丽戏服的老朋友，正弯下腰，用它们倾斜的屋檐和雕花的窗台，亲昵地跟你打招呼。那些深棕、赭石、墨绿的木梁，在白色或淡黄色墙面的映衬下，勾勒出菱形、十字形、太阳纹等数不清的图案，在午后斜阳里投下深邃而温暖的光影。
这里的声音是轻柔而富有生活韵律的。没有刺耳的汽车鸣笛，只有游客轻微的惊叹、咖啡馆杯碟碰撞的清脆声、以及本地老奶奶骑着自行车掠过石板路时链条发出的规律咔哒声。你会看到窗台上怒放的天竺葵，在色彩斑驳的木窗前红得格外热烈；会看到厚重的橡木门上，黄铜门环被无数只手抚摸得锃亮。策勒最动人的地方，在于它不是一个冰冷的标本。这些拥有四百年甚至更久历史的房子里，依然开着时装店、书店、牙医诊所和温馨的公寓。历史不是被供在博物馆里，而是晾晒在阳台上的一床碎花棉被，是面包师清晨推开那扇吱呀作响的厚重木门时带出的第一缕热气。
它的核心魅力，是一种近乎奢侈的“完整感”。不像那些只有一两条明星街的古镇，策勒的老城是一个由无数小巷交织成的、完完整整的迷宫。转过一个街角，你会遇到一座外墙画满圣经故事壁画的华丽山墙屋；再拐一个弯，一栋有着夸张巴洛克涡卷装饰的转角楼会让你忍不住笑出来，像个淘气的巨人把石膏奶油挤满了房子外立面。这种探索的惊喜连绵不绝，因为据说这里拥有超过五百栋这样的木骨架房屋，几乎没有一栋重复。它不是舞台布景，而是一个仍然在缓慢呼吸、带着体温的古老有机体，让你心甘情愿地迷路其中。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你的双脚第一次踩上策勒老城那些被岁月磨得温润发亮的鹅卵石路面时，会有一种奇妙的错觉——仿佛不是走进了一个地方，而是跌进了一本立体、彩色的童话书里。空气里飘着淡淡的、好闻的木头香气，混合着从街角面包房溢出的新鲜酵母和焦糖的甜香。抬头望去，视线立刻就被淹没了：一栋接一栋、挤挤挨挨的木骨架房屋，像一群穿着华丽戏服的老朋友，正弯下腰，用它们倾斜的屋檐和雕花的窗台，亲昵地跟你打招呼。那些深棕、赭石、墨绿的木梁，在白色或淡黄色墙面的映衬下，勾勒出菱形、十字形、太阳纹等数不清的图案，在午后斜阳里投下深邃而温暖的光影。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里的声音是轻柔而富有生活韵律的。没有刺耳的汽车鸣笛，只有游客轻微的惊叹、咖啡馆杯碟碰撞的清脆声、以及本地老奶奶骑着自行车掠过石板路时链条发出的规律咔哒声。你会看到窗台上怒放的天竺葵，在色彩斑驳的木窗前红得格外热烈；会看到厚重的橡木门上，黄铜门环被无数只手抚摸得锃亮。策勒最动人的地方，在于它不是一个冰冷的标本。这些拥有四百年甚至更久历史的房子里，依然开着时装店、书店、牙医诊所和温馨的公寓。历史不是被供在博物馆里，而是晾晒在阳台上的一床碎花棉被，是面包师清晨推开那扇吱呀作响的厚重木门时带出的第一缕热气。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，是一种近乎奢侈的“完整感”。不像那些只有一两条明星街的古镇，策勒的老城是一个由无数小巷交织成的、完完整整的迷宫。转过一个街角，你会遇到一座外墙画满圣经故事壁画的华丽山墙屋；再拐一个弯，一栋有着夸张巴洛克涡卷装饰的转角楼会让你忍不住笑出来，像个淘气的巨人把石膏奶油挤满了房子外立面。这种探索的惊喜连绵不绝，因为据说这里拥有超过五百栋这样的木骨架房屋，几乎没有一栋重复。它不是舞台布景，而是一个仍然在缓慢呼吸、带着体温的古老有机体，让你心甘情愿地迷路其中。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`策勒（五百座木骨架房屋之城）`} />
                <InfoRow label="英文名称" value={`Celle`} />
                <InfoRow label="正式名称" value={`Celle`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`策勒`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`德国北部保存最完好、规模最大的木骨架房屋建筑群所在地，被誉为“吕讷堡石楠草原的珍宝”，奇迹般地在二战中毫发无伤。`} />
                <InfoRow label="建筑特色" value={`密集而和谐的木骨架房屋森林，每一栋的外露木构架色彩与图案都独一无二，构成立体的几何画卷。`} />
                <InfoRow label="建筑风格" value={`以文艺复兴和巴洛克风格为主导的木骨架建筑，夹杂着少数华丽的洛可可和古典主义装饰立面。`} />
                <InfoRow label="文化价值" value={`一座“活着的建筑博物馆”，其城市肌理与建筑细节完整记录了从中世纪晚期到近代的汉萨同盟城市生活与工艺美学。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城街区全天开放。主要室内景点如策勒宫殿、博曼博物馆等开放时间通常为周二至周日10:00-17:00，周一闭馆（节假日除外）。圣诞市场期间及夏季可能延长开放。具体景点开放时间建议出行前在官网二次确认。`} />
              <InfoRow label="门票价格" value={`漫步老城街区免费。策勒宫殿（含宫殿博物馆与礼拜堂）成人票约8欧元，优惠票约6欧元。博曼博物馆（ Bomann Museum）成人票约6欧元。常设联票（宫殿+博物馆）约12欧元。6岁以下儿童免费，家庭票优惠。持有下萨克森州票等可享受折扣。`} />
              <InfoRow label="地址" value={`Markt 14-16, 29221 Celle, Germany`} />
              <InfoRow label="交通方式" value={`从最近的主要国际机场汉诺威机场出发最为便捷。在汉诺威机场火车站直接乘坐开往策勒的区域火车（RB或RE线路），车程约35-40分钟，班次频繁，每小时至少2-3班。从汉诺威中央火车站出发车程约20分钟。抵达策勒火车站后，出站即可看到老城指向标，步行约10-15分钟穿过现代城区即可到达梦幻的木骨架房屋老城核心区。自驾可将车停在老城周边的公共停车场（如“Trift”或“Blumlage”停车场），然后步行进入。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`策勒的故事，始于它作为一座坚固城堡的起源。早在公元10世纪，萨克森公爵们就在这里，阿拉河蜿蜒处的一个沙洲上，建立了一座城堡，用于控制重要的盐道贸易。到了13世纪，这座“Kellu”（源于河流名）已经发展成为一个有模有样的集镇。但真正让策勒穿上今天这件华丽外衣的，是两场大火与一次漫长的黄金时代。1378年，一场几乎吞噬全城的大火后，人们开始用更坚固、更防火（相对而言）的石基搭配木骨架的方式重建家园，这奠定了城市的基本建筑格局。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`策勒命运的转折点在于1292年，它成为了不伦瑞克-吕讷堡公爵的官方居所。尤其是从1378年到1705年，策勒宫殿一直是韦尔夫家族一个分支的驻地。这座由城堡改建而成的宫殿，为小镇带来了贵族气韵和稳定的繁荣。但真正让民间建筑百花齐放的，是16至18世纪。当时，策勒是繁荣的亚麻布贸易中心和法院所在地，富裕的商人、手工艺人和官员们竞相建造最能彰显自己财富与品味的住宅。他们请来最好的木匠，在房屋的山墙、门槛、窗楣上，用木梁拼出复杂的家族纹章、象征美德的图案，甚至讽刺时弊的滑稽画。文艺复兴的理性几何与后来巴洛克的繁复曲线，就这样被永远冻结在了这些木头与灰泥的结构中。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里不得不提策勒的“幸运之神”。当第二次世界大战的硝烟席卷欧洲，无数像吕贝克、汉堡这样的历史名城被炸成废墟时，策勒却因为一个“美丽的误会”而幸免于难。传说，盟军飞行员接到轰炸一座“大型石油设施”的命令，而策勒附近确实有一个炼油厂。但飞行员在空中将月光下波光粼粼的阿拉河及周边湿地，误认为是巨大的储油罐湖，从而将主要炸弹投向了那片无害的沼泽。也有说法是策勒因其保存完好的历史价值被特意从轰炸名单中剔除。无论如何，当1945年和平降临时，这座拥有数百年历史的木构之城几乎完好无损地沉睡着，成了德国北部一个不可思议的时光胶囊。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战后，策勒人怀着敬畏与感恩之心，开始了细致入微的修复与保护工作。他们不仅仅是修补木头和粉刷墙面，更是复活了一种生活方式。今天，当你走在街上，看到那些标有建造年代（比如“1571”）的房子，下面可能是一家时髦的设计师买手店，这种奇妙的时空叠合，正是策勒生命力的最好证明。它没有在历史中凝固，而是在每个精心养护的窗台花箱里，在每个点亮温暖橱窗的冬日夜晚，续写着它的童话。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味策勒，请务必安排一整天时间，并奉上你悠闲散步的耐心。建议早上九点左右抵达，这时旅行团还未涌入，晨光正温柔地唤醒那些彩色立面。整个游览节奏宜慢不宜快，核心就是“迷失”在老城纵横交错的巷弄里。路线可以设计为一个从外围到核心、再向河边延伸的环线，总耗时约6-8小时，包含参观一两个室内景点、长时间发呆和午餐。这样安排既能捕捉到晨昏不同光影下的城市之美，又能深入体验其日常生活的脉搏。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周六上午市政厅广场有热闹的每周市集，是感受本地生活气的绝佳机会，但也会人流密集，喜欢清静的朋友可以错开此时段。
老城街道几乎全是凹凸不平的鹅卵石路，请务必穿一双绝对舒适耐走的平底鞋，高跟鞋在这里是“刑具”。
许多小店铺和咖啡馆在周日下午或周一不营业，规划行程时建议提前查询。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从策勒火车站出来，先别急着钻进老城，绕到东侧的“Blumlage”街区，从外围远远欣赏那片由无数尖顶和山墙构成的、如同从地上生长出来的奇幻天际线。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`让你的探索从宏伟的文艺复兴式市政厅开始，在市政厅广场上转个圈，感受被五颜六色、高低错落的木骨架房屋四面环绕的震撼开场。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到并走进赫尔茨格城堡，不仅在城堡博物馆看韦尔夫家族的奢华旧物，更要站在城堡礼拜堂内仰望那座令人窒息的全金箔巴洛克祭坛。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`钻进老城腹地，沿着博纳街慢慢逛，让你的手指轻轻划过那些历经风雨的、温暖的原木梁柱，仔细辨认上面雕刻的古老符号与故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`用点时间寻找那栋被称为“施泰赫迪恩屋”的古老药店，站在街对面，欣赏它外墙上精美绝伦的、描绘着哲学与科学寓言故事的文艺复兴彩绘。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午时分，走进那座拥有白色高耸尖塔的城市教堂，在静谧的中殿里坐下来，听一听古老的管风琴是否恰好响起。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂后方溜进城堡花园，沿着阿拉河的支流散步，从水面的倒影里欣赏老城背影的另一种柔美。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚前，回到阿拉河的主河道边，找一家有露天座位的咖啡馆，点一杯咖啡或当地啤酒，看着夕阳给对岸层层叠叠的木屋屋顶镀上金边，等待路灯一盏盏亮起。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`市政厅广场东南角仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，利用广角镜头将广场上最华丽的那排彩色木骨架房屋与高耸的市政厅塔楼一同纳入画面，捕捉建筑群的磅礴气势与丰富色彩。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`博纳街中段纵深构图`}</h4>
                  <p className="text-sm text-gray-700">{`中午阳光直射时，站在街道中央，利用两侧对称的木构建筑形成的天然“画框”，拍摄街道向远处延伸的深邃透视感，木梁的阴影会强化线条美。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城堡花园河畔倒影`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗无风的日落前一小时，在城堡花园的河畔小径，蹲下身子低机位拍摄，将阿拉河水面上老城建筑与天空的完美倒影一并收入镜中，营造梦幻对称。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城市教堂尖顶与木屋同框`}</h4>
                  <p className="text-sm text-gray-700">{`从老城小巷中寻找一个缝隙，让远处教堂白色的哥特式尖塔作为背景，前景是色彩饱满的木骨架房屋山墙，形成材质与时代的戏剧性对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`赫尔茨格城堡内院拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`下午的阳光斜射进城堡内院时，站在拱廊下，利用拱门作为前景框架，拍摄内院中精致的文艺复兴立面与漫步的游客，故事感十足。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`策勒的光影在日出后两小时和日落前两小时最为柔和迷人，是拍摄木骨架房屋色彩和纹理的黄金时间，正午的强光容易让画面反差过大。`}</li>
                <li>• {`使用偏振镜可以有效减少木窗玻璃的反光，让您拍到窗内温馨的摆设与窗外鲜花的更多细节。`}</li>
                <li>• {`请务必尊重当地居民隐私，避免将镜头对准明确挂着“禁止拍照”标识的私人庭院或直接拍摄住户的室内空间。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`火车站附近步行十分钟内的现代舒适型酒店，房间明亮宽敞，性价比极高，适合作为探索老城的完美后勤基地。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`老城中心一栋拥有四百年历史的木骨架房屋改造的家庭式酒店，楼梯吱呀作响，梁柱低矮温暖，每晚都像睡在历史的怀抱里。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`位于宫殿附近由贵族宅邸修复的精品设计酒店，将古典建筑骨架与现代极简内饰完美融合，并提供顶级的本地早餐与管家服务。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`家庭出游`}</h4>
                  <p className="text-sm text-purple-800">{`阿拉河畔带小庭院的静谧公寓民宿，自带厨房，可以自己烹饪，清晨在鸟鸣与流水声中醒来，体验一把“本地人”的生活。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`旺季（夏季、圣诞市场期间）务必提前数月预订，尤其是老城内的特色住宿非常抢手。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`选择老城核心区的住宿需注意，许多历史建筑没有电梯，且隔音可能相对现代建筑稍弱，但这正是历史魅力的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果追求绝对宁静，河畔或花园旁的住宿是上佳之选，能避开主要旅游街道傍晚的人声。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开策勒很久以后，我发现自己最怀念的，不是某栋具体房子的华丽装饰，而是那种整个人被温和的、有生命的历史紧紧包裹的感觉。在这个一切都被加速、被数字化、被标准化复制的时代，策勒像一位从容的长者，它不言不语，只是静静存在着，用每一道木纹、每一块斑驳的墙漆告诉你：有些东西，需要时间的亲手触摸才能形成；有些美，来自于不完美中的和谐与坚持。它不是冰冷宏伟、需要仰视的纪念碑，而是可以亲近、可以触摸的温暖存在。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`来这里，不仅仅是为了看五百座房子，更是为了体验一种“完整性”。这种完整，是城市肌理的完整，是历史层叠的完整，更是生活与遗产水乳交融的完整。它让你相信，人类可以创造如此美丽而坚固的家园，并且有能力将它温柔地传递给未来。对于每一位厌倦了浮光掠影、渴望在旅途中获得内心宁静与真实触感的旅人来说，策勒都是一个必须慢下来、住下来、用心去感受的梦境。它不张扬，却足够厚重，足以安放你对欧洲的所有古典想象，并在你心里种下一片永不褪色的、彩色的木头森林。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/burg-rheinstein" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莱
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莱茵施泰因城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Burg Rheinstein</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/monschau-half-timbered-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蒙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蒙绍半木结构小镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Monschau</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/hameln-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈默尔恩老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hameln Old Town</p>
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
