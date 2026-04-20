import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '皮兰老城 Piran｜威尼斯的绝美倒影，亚得里亚海畔的慢时光琥珀 - 最佳欧洲景点',
  description: '车子在科佩尔拐向海边公路的那一刻，亚得里亚海那种特有的、蓝到发脆的颜色就毫无征兆地撞进了眼睛里。但当皮兰终于在视线尽头出现时，你会忘记所有关于“蓝”的描述——那是一座从海平面生长出来的、由蜜糖色砖石和陶土红屋顶堆叠成的立体迷宫，被阳光晒得暖融融的，像一块被时光遗忘在海岬尖上的巨大琥珀。我把车停在城外...',
}

export default function PiranOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '皮兰老城', href: '/attractions/piran-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`皮兰老城・Piran・斯洛文尼亚・皮兰`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在科佩尔拐向海边公路的那一刻，亚得里亚海那种特有的、蓝到发脆的颜色就毫无征兆地撞进了眼睛里。但当皮兰终于在视线尽头出现时，你会忘记所有关于“蓝”的描述——那是一座从海平面生长出来的、由蜜糖色砖石和陶土红屋顶堆叠成的立体迷宫，被阳光晒得暖融融的，像一块被时光遗忘在海岬尖上的巨大琥珀。我把车停在城外，拖着箱子走在通往老城的缓坡上，第一口呼吸就充满了复杂的气味：海风里鲜明的咸味，路边小餐馆飘出的烤鱼和橄榄油的香气，还有从那些年深日久的石墙缝隙里透出来的、淡淡的潮润与历史尘埃混合的味道。耳边是海鸥永不疲倦的鸣叫，混杂着远处码头缆绳轻拍桅杆的脆响。
走进塔尔蒂尼广场，空间豁然开朗。这里没有车，只有光。下午四点的阳光斜斜地打在广场四周那些威尼斯式连廊的建筑立面上，把每一扇窗户、每一道装饰线脚都勾勒得金光闪闪。当地人管这里叫“皮兰的客厅”，一点也不假。孩子们踩着滑板车呼啸而过，老人们坐在长椅上用斯洛文尼亚语慢悠悠地聊天，咖啡馆的侍者端着托盘在露天座位间灵巧地穿梭，杯碟碰撞发出清脆好听的叮当声。广场中央光滑的石板地，因为数百年来被无数脚步打磨，在阳光下泛着温润如玉的光泽。那一刻你突然明白，这不是一个仅供观赏的博物馆，而是一个依然蓬勃跳动着的心脏，只是它的节拍，是潮汐的涨落和教堂钟声的韵律。
而皮兰最打动人心的魅力，在于它的“褶皱”里。你需要离开主广场，钻进那些仅容两人错身而过的小巷。脚下的鹅卵石被磨得光滑如卵，高跟鞋在这里是绝对的灾难。两旁的房子挨得如此之近，以至于在楼上打开窗户，几乎能和对面的邻居握手。晾衣绳横跨小巷，印着朴素花纹的床单在微风中轻轻摆动，投下晃动的影子。偶然一扇虚掩的门后，传来电视新闻的声音和炖菜的香味，那是寻常人家的烟火气，被密封在这些古老的石头容器里，历久弥新。在这里，壮丽的海景与琐碎的日常只有一墙之隔，历史的厚重与生活的轻盈完美地交织在一起。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在科佩尔拐向海边公路的那一刻，亚得里亚海那种特有的、蓝到发脆的颜色就毫无征兆地撞进了眼睛里。但当皮兰终于在视线尽头出现时，你会忘记所有关于“蓝”的描述——那是一座从海平面生长出来的、由蜜糖色砖石和陶土红屋顶堆叠成的立体迷宫，被阳光晒得暖融融的，像一块被时光遗忘在海岬尖上的巨大琥珀。我把车停在城外，拖着箱子走在通往老城的缓坡上，第一口呼吸就充满了复杂的气味：海风里鲜明的咸味，路边小餐馆飘出的烤鱼和橄榄油的香气，还有从那些年深日久的石墙缝隙里透出来的、淡淡的潮润与历史尘埃混合的味道。耳边是海鸥永不疲倦的鸣叫，混杂着远处码头缆绳轻拍桅杆的脆响。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进塔尔蒂尼广场，空间豁然开朗。这里没有车，只有光。下午四点的阳光斜斜地打在广场四周那些威尼斯式连廊的建筑立面上，把每一扇窗户、每一道装饰线脚都勾勒得金光闪闪。当地人管这里叫“皮兰的客厅”，一点也不假。孩子们踩着滑板车呼啸而过，老人们坐在长椅上用斯洛文尼亚语慢悠悠地聊天，咖啡馆的侍者端着托盘在露天座位间灵巧地穿梭，杯碟碰撞发出清脆好听的叮当声。广场中央光滑的石板地，因为数百年来被无数脚步打磨，在阳光下泛着温润如玉的光泽。那一刻你突然明白，这不是一个仅供观赏的博物馆，而是一个依然蓬勃跳动着的心脏，只是它的节拍，是潮汐的涨落和教堂钟声的韵律。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而皮兰最打动人心的魅力，在于它的“褶皱”里。你需要离开主广场，钻进那些仅容两人错身而过的小巷。脚下的鹅卵石被磨得光滑如卵，高跟鞋在这里是绝对的灾难。两旁的房子挨得如此之近，以至于在楼上打开窗户，几乎能和对面的邻居握手。晾衣绳横跨小巷，印着朴素花纹的床单在微风中轻轻摆动，投下晃动的影子。偶然一扇虚掩的门后，传来电视新闻的声音和炖菜的香味，那是寻常人家的烟火气，被密封在这些古老的石头容器里，历久弥新。在这里，壮丽的海景与琐碎的日常只有一墙之隔，历史的厚重与生活的轻盈完美地交织在一起。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`皮兰老城`} />
                <InfoRow label="英文名称" value={`Piran`} />
                <InfoRow label="正式名称" value={`皮兰市政厅（皮兰历史中心区）`} />
                <InfoRow label="国家" value={`斯洛文尼亚`} />
                <InfoRow label="城市" value={`皮兰`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`亚得里亚海北岸保存最完好的威尼斯风格城镇之一，见证了海上共和国贸易与文化在此地数个世纪的深刻烙印。`} />
                <InfoRow label="建筑特色" value={`密集的橙红色屋顶群如鱼鳞般铺满向海延伸的狭长半岛，狭窄的“ Calle”式小巷与开阔的海滨广场形成戏剧性对比。`} />
                <InfoRow label="建筑风格" value={`威尼斯哥特式与文艺复兴风格主导，混搭了本地朴素的民居特色。`} />
                <InfoRow label="文化价值" value={`是斯洛文尼亚海滨文化的灵魂所在，浓缩了拉丁、斯拉夫与地中海文明的交融与共生。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`皮兰老城街道及海滨区域全天24小时开放。内部主要景点开放时间各异：圣乔治教堂钟楼夏季（4月至10月）通常为上午9点至晚上8点，冬季缩短至下午4点关闭；皮兰城墙的开放时间与钟楼类似，但天气恶劣时会关闭；塞尔吉·马舍拉海事博物馆开放时间为周二至周日上午10点至下午6点；皮兰水族馆开放时间为上午9点至下午5点。请注意，许多小型博物馆和画廊在冬季（11月至3月）的周一闭馆，且开放时间可能临时调整，建议出行前查阅最新官网信息。`} />
              <InfoRow label="门票价格" value={`进入皮兰老城街区免费。登圣乔治教堂钟楼门票约3欧元。登上皮兰城墙（Mesto Obzidje）门票约2欧元。塞尔吉·马舍拉海事博物馆门票约4欧元。皮兰水族馆门票约8欧元。有提供包含多个景点的联票，价格约10欧元，可在游客中心购买。学生、儿童和老人通常享有折扣。`} />
              <InfoRow label="地址" value={`6330 Piran, Slovenia`} />
              <InfoRow label="交通方式" value={`最近的主要机场是意大利的里雅斯特机场（TRS），距离约40公里，或斯洛文尼亚的卢布尔雅那机场（LJU），距离约130公里。最方便的公共交通枢纽是斯洛文尼亚的科佩尔市（Koper）火车站或汽车站。从科佩尔汽车站乘坐11路或12路本地巴士，约20-30分钟即可直达皮兰巴士站，班次频繁（高峰时段每15-20分钟一班），单程票价约2欧元，车上可向司机购票（建议备好零钱）。自驾车请注意，皮兰老城内严格限制车辆进入，必须将车停放在城外的付费停车场（如Forana停车场），然后步行进入。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`皮兰的故事，从一开始就写在了它的地理位置上。这个伸向大海的狭长半岛，像一根敏感的手指，早早地就触摸到了地中海的贸易脉搏。早在古罗马时期，这里就因盐田而有了定居点，“皮兰”这个名字很可能就源于希腊语的“pyrgos”（灯塔或塔楼）。但真正塑造了它灵魂样貌的，是威尼斯共和国。从13世纪晚期开始，威尼斯的目光投向了这个具有战略意义的港口，经过一系列或明或暗的运作与征服，皮兰在13世纪末被正式纳入威尼斯治下，这一待就是将近五百年。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你可以把这五百年想象成一场缓慢而深刻的“威尼斯化”输液。威尼斯的统治者不仅带来了法律和税收官，更带来了他们的建筑大师、艺术家和生活方式。圣乔治教堂那座俯瞰全城的钟楼，分明是威尼斯圣马可钟楼的微缩翻版；广场周围带有连续拱廊的建筑立面，是典型的威尼斯文艺复兴风格；甚至那错综复杂如迷宫般的小巷网络，其设计逻辑也源于对海风流通和防御的考虑，与威尼斯本岛如出一辙。皮兰成为了威尼斯共和国在伊斯特拉半岛最重要的前哨之一，它的繁荣与海上贸易紧密相连，本地出产的盐、橄榄油和葡萄酒被运往各地，换回财富与文化。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，天下没有不散的宴席。1797年，随着拿破仑的铁蹄踏破威尼斯共和国的千年迷梦，皮兰也迎来了命运的转折点。它先后被纳入拿破仑的意大利王国和伊利里亚省。拿破仑倒台后，根据维也纳会议的安排，皮兰又成了奥匈帝国的一部分，从一座意大利风格的海港城镇，变成了哈布斯堡王朝治下的滨海疗养地。这段时期，城镇的防御工事失去了军事意义，部分城墙被拆除，城市开始向半岛更宽阔的基部缓慢扩展。但老城核心区，因为其地理限制和经济重心的转移，奇迹般地保持了原貌，仿佛时间的流速在这里变慢了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`二十世纪的动荡给了皮兰另一重身份。一战结束后，它随着整个伊斯特拉半岛被划归意大利。二战的烽火与冷战的地缘政治，最终让它在1954年成为了南斯拉夫社会主义联邦共和国的一部分。这是一个充满张力的时期：一方面，这座深深烙印着拉丁天主教文化的城镇，被并入了以斯拉夫文化和东正教为主体的国家；另一方面，作为南斯拉夫面向西方的窗口之一，皮兰的旅游业开始萌芽，吸引了众多来自社会主义阵营内部的游客。它成为了一个文化交融的奇特样本，你或许能在某条小巷里，听到意大利语、斯洛文尼亚语和塞爾維亞-克罗地亚语交织的对话。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到1991年斯洛文尼亚独立，皮兰才真正作为这个新生国家珍贵的文化遗产，被系统性地保护和珍视。它没有被过度商业化，没有允许大型酒店破坏天际线，而是小心翼翼地修复每一栋老建筑，维护着那份浑然天成的古朴与宁静。今天的皮兰，就像一位历经沧桑却风度依旧的贵族，它的每一道皱纹里都藏着故事——威尼斯的荣光、奥匈的秩序、南斯拉夫的多元，最终都沉淀为斯洛文尼亚人脸上那份面对大海的从容与骄傲。它不再是一个贸易要塞，而是成为了一个关于时间、海洋与人文之美的宁静注脚。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味皮兰，我强烈建议你至少留出一整天的时间，并抱着“迷失”的心态。最佳抵达时间是清晨，大约八点左右，这时旅游团的大巴还未涌入，阳光温柔，老城刚刚苏醒。从停车场或巴士站步行进入老城，先不要急着冲向地标，而是让自己被小巷带着走。整体的节奏应该是“上午深入褶皱，中午登高望远，下午沿海沉思，傍晚沉浸广场”。这样的安排能让你体验到皮兰从静谧到生动，再到浪漫的全天韵律变化，并完美避开最拥挤的登塔时段。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双绝对舒适、适合长时间行走的平底鞋，老城的每一块鹅卵石都在考验你的脚踝。提前换一些欧元现金，许多小巷里的小型家庭餐馆、冰淇淋店或工艺品店可能只收现金。如果想进入教堂内部参观，请注意避开中午的弥撒时间（通常是12点左右），并确保衣着得体（避免无袖上衣和过短的裤裙）。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从塔尔蒂尼广场开始你的旅程，用手掌抚摸一下小提琴家塔尔蒂尼铜像的基座，感受石头被晨光晒出的微温。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`随意挑一条从广场辐射出去的小巷钻进去，比如“Ulica IX. korpusa”，让好奇心做你的向导，留意那些门楣上的古老石刻和窗台上的天竺葵。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着小巷自然上坡的走向，你会被引向圣乔治教堂，先不急着进去，绕到教堂东侧的平台，那里是眺望红色灯塔和克罗地亚海岸线的秘密角落。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`买票登上圣乔治教堂的钟楼，在盘旋而上的狭窄石阶里喘息，只为在顶端收获那一瞬间令人屏息的、360度无死角的红屋顶与碧海全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从钟楼下来，顺着指示牌去寻找一段保存完好的中世纪城墙（Obzidje na mihi），花一点时间走在城垛上，想象守卫士兵昔日眺望的海平面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山回到海滨，沿着“Piranski ribič”码头一路漫步到最尖端的“皮兰角”和红色灯塔，看海浪拍打礁石，感受半岛尽头天地开阔的孤寂感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`折返后参观塞尔吉·马舍拉海事博物馆，在小而精致的展厅里，通过古老的航海图、船模和渔夫的工具，读懂这座城市与大海的生死契约。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`将黄昏时光留给塔尔蒂尼广场，找一家咖啡馆的户外座位，点一杯本地产的“Teran”红酒，看着广场的光影变幻，等待华灯初上。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣乔治教堂钟楼顶端`}</h4>
                  <p className="text-sm text-gray-700">{`这是无可争议的全景之王，最佳时间是晴朗的上午十点前或下午四点后，光线柔和，能拍出屋顶丰富的色彩层次和深邃的海景，使用广角镜头可以囊括半岛的优美曲线。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“Prešernovo nabrežje”海滨步道回望老城`}</h4>
                  <p className="text-sm text-gray-700">{`从主码头边的步道向老城方向拍摄，可以将一排排色彩柔和的建筑、停泊的彩色小船和教堂钟楼一同纳入画面，日落前半小时的黄金光线会让整个场景温暖如油画。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“Ulica IX. korpusa”小巷纵深`}</h4>
                  <p className="text-sm text-gray-700">{`选择一条有陡峭台阶和两侧高墙的小巷，站在较低处向上拍摄，利用石阶的线条引导视线至小巷尽头的一抹蓝天或海光，清晨或傍晚的侧光能强化石壁的质感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`皮兰城墙上的视角`}</h4>
                  <p className="text-sm text-gray-700">{`站在面向内陆一侧的城墙上，可以拍摄到红屋顶层层叠叠、错落有致地蔓延至绿色丘陵的经典画面，下午的光线最能凸显屋顶的红色与植被的绿色对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`皮兰角红色灯塔旁`}</h4>
                  <p className="text-sm text-gray-700">{`以灯塔为前景或框架，拍摄亚得里亚海的波澜和远处朦胧的海岸线，尤其适合在暴风雨来临前或日出时分，捕捉天空戏剧性的色彩。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜（CPL）可以有效减少海面的反光，让海水颜色更显湛蓝，并增强云层的立体感。海风常常带有水汽和盐分，请注意保护相机镜头，随时准备好清洁工具。尊重当地居民隐私，避免将镜头直接对准他人住宅的窗户或阳台。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`位于老城边缘一栋17世纪石头房子里的家庭式公寓，房东老奶奶会送你一瓶自酿的橄榄油，晚上能听到隐约的海浪声，却不必拖着行李在鹅卵石上艰难跋涉。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`由一座古老盐仓改造的精品酒店，房间保留了原始的粗粝石墙和木梁，但配备了最现代的设施，躺在浴缸里就能透过小窗看到一角海景，历史和舒适在这里无缝衔接。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在皮兰半岛僻静一隅的五星级设计酒店，拥有无边泳池和私人海滩，每间客房都有巨大的落地窗和直面大海的露台，是将亚得里亚海美景私享到底的奢华选择。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`隐居之趣`}</h4>
                  <p className="text-sm text-purple-800">{`老城中心某条静谧小巷顶层的复古小阁楼，需要通过狭窄的旋转楼梯才能到达，空间不大却温馨无比，有一个种满鲜花的小露台，是像本地人一样生活的完美据点。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`皮兰老城内部几乎完全步行，车辆无法进入，预订时一定要确认酒店/民宿提供的具体行李协助方案（如手推车或接送服务）。夏季（7-8月）是绝对旺季，房价高昂且一房难求，务必提前数月预订。皮兰整体治安极好，深夜在巷弄中行走也倍感安全，但选择住宿时仍建议查看其他住客关于周边噪音（特别是临近酒吧的房源）的评价。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开皮兰的那个傍晚，我坐在码头的石阶上，看着最后一抹霞光把圣乔治教堂的钟楼染成金色，然后慢慢褪成静谧的蓝。脚边清澈的海水里，小鱼在摇曳的水草间穿梭，对岸意大利的灯火星星点点亮起。那一刻，我心里涌起的不是游览完一个景点的满足，而是一种奇特的安宁感。皮兰的美，不在于有多么惊世骇俗的建筑或波澜壮阔的历史，而在于它把所有庞大的叙事——威尼斯的野心、帝国的更迭、时代的变迁——都消化成了生活本身细腻的纹理。它是一本用石头、海水和日常生活写就的史书，每一页都散发着阳光和海盐的味道。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个人人追逐网红地标、旅行变成打卡竞赛的时代，皮兰固执地保持着自己的步调。它提醒我们，一个地方的魅力，可以存在于一条不知名小巷里转角遇到的光影中，存在于市场鱼贩熟练的操刀声里，存在于午后广场上那片无人打扰的、温暖的寂静中。它不需要你膜拜，只邀请你融入。对于每一位厌倦了浮光掠影、渴望真正触摸一地脉搏的旅人来说，皮兰就是一味解药。它让你慢下来，呼吸，倾听，然后发现：最深度的旅行，不是去了多远的地方，而是你有多深地，走进了那个地方的时光里，并心甘情愿地，被它的节奏轻轻拥抱。这，或许就是皮兰老城赠予我们最珍贵的礼物。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/postojna-cave" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    波
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">波斯托伊娜溶洞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Postojna Cave</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/skocjan-caves" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    什
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">什科茨扬溶洞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Škocjan Caves</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/piran-salt-pans-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    皮
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">皮兰盐田与老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Piran Salt Pans & Old Town</p>
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
