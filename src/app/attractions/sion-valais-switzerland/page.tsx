import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '锡永 Sion｜探秘七千年历史的双堡石头城与阳光河谷 - 最佳欧洲景点',
  description: '朋友，想象一下你走出锡永火车站的那个瞬间。还没等你打开手机地图，目光就被前方两座陡然隆起的岩石山丘牢牢抓住——它们不像普通的山，更像是大地突然伸出的两根巨大拇指，每一根“拇指”的顶端，都稳稳地坐镇着一片灰黄色的石头建筑群，在瓦莱州近乎奢侈的阳光下，散发着古老而沉默的金色光泽。左边那座带有完整城堡轮廓...',
}

export default function SionValaisSwitzerlandPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '锡永', href: '/attractions/sion-valais-switzerland' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`锡永・Sion・瑞士・锡永`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下你走出锡永火车站的那个瞬间。还没等你打开手机地图，目光就被前方两座陡然隆起的岩石山丘牢牢抓住——它们不像普通的山，更像是大地突然伸出的两根巨大拇指，每一根“拇指”的顶端，都稳稳地坐镇着一片灰黄色的石头建筑群，在瓦莱州近乎奢侈的阳光下，散发着古老而沉默的金色光泽。左边那座带有完整城堡轮廓的是瓦莱里纳城堡，它像一个骄傲但已破败的君王；右边那座，顶着一座教堂尖塔的，是瓦莱城堡。这就是锡永给你的第一眼，霸道、直接，充满了地理上的戏剧性，仿佛整个城市的故事，都被浓缩和托举到了这两座山上。
沿着指示牌走向老城，你会立刻被一种干燥、温暖、带着些微尘土和迷迭香气息的空气包围。这是典型的阿尔卑斯南部山谷的气息。脚下的石板路被磨得光滑，路两旁是带有厚重木门廊和石砌窗台的房屋，很多窗台上怒放着天竺葵，那种鲜红色，与土黄色的石墙、湛蓝得没有一丝杂质的天空，碰撞出无比鲜活的生命力。你很快会发现，本地人的生活节奏就流淌在这些陡峭的街巷里。面包店里飘出刚烤好的“黑麦面包”的酸香，街角小咖啡馆的露台上，老人们端着小小的 espresso 杯，用很快的法语闲聊，目光偶尔扫过远处山巅的城堡——那对他们而言不是景点，而是生活背景的一部分，是时间本身。
而锡永最打动人心的，正是这种“层叠感”。你站在老城的广场上，脚下是21世纪的咖啡座和周五集市；抬头望去，是中世纪的主教城堡和教堂；而当你走进州立考古博物馆，看到的却是从这两座山丘上挖掘出的、来自新石器时代的燧石工具和青铜器。七千年的历史，被垂直地压缩在这片不到几平方公里的山谷里。它不是被精心供奉在玻璃罩中的古董，而是一种持续至今的、呼吸着的存在。当地人依然在城堡山脚下的葡萄园里耕作，生产出强劲的菲丹（Fendant）白葡萄酒。历史在这里，就是昨日、今日与明日共饮的一杯酒。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，想象一下你走出锡永火车站的那个瞬间。还没等你打开手机地图，目光就被前方两座陡然隆起的岩石山丘牢牢抓住——它们不像普通的山，更像是大地突然伸出的两根巨大拇指，每一根“拇指”的顶端，都稳稳地坐镇着一片灰黄色的石头建筑群，在瓦莱州近乎奢侈的阳光下，散发着古老而沉默的金色光泽。左边那座带有完整城堡轮廓的是瓦莱里纳城堡，它像一个骄傲但已破败的君王；右边那座，顶着一座教堂尖塔的，是瓦莱城堡。这就是锡永给你的第一眼，霸道、直接，充满了地理上的戏剧性，仿佛整个城市的故事，都被浓缩和托举到了这两座山上。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`沿着指示牌走向老城，你会立刻被一种干燥、温暖、带着些微尘土和迷迭香气息的空气包围。这是典型的阿尔卑斯南部山谷的气息。脚下的石板路被磨得光滑，路两旁是带有厚重木门廊和石砌窗台的房屋，很多窗台上怒放着天竺葵，那种鲜红色，与土黄色的石墙、湛蓝得没有一丝杂质的天空，碰撞出无比鲜活的生命力。你很快会发现，本地人的生活节奏就流淌在这些陡峭的街巷里。面包店里飘出刚烤好的“黑麦面包”的酸香，街角小咖啡馆的露台上，老人们端着小小的 espresso 杯，用很快的法语闲聊，目光偶尔扫过远处山巅的城堡——那对他们而言不是景点，而是生活背景的一部分，是时间本身。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而锡永最打动人心的，正是这种“层叠感”。你站在老城的广场上，脚下是21世纪的咖啡座和周五集市；抬头望去，是中世纪的主教城堡和教堂；而当你走进州立考古博物馆，看到的却是从这两座山丘上挖掘出的、来自新石器时代的燧石工具和青铜器。七千年的历史，被垂直地压缩在这片不到几平方公里的山谷里。它不是被精心供奉在玻璃罩中的古董，而是一种持续至今的、呼吸着的存在。当地人依然在城堡山脚下的葡萄园里耕作，生产出强劲的菲丹（Fendant）白葡萄酒。历史在这里，就是昨日、今日与明日共饮的一杯酒。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`锡永`} />
                <InfoRow label="英文名称" value={`Sion`} />
                <InfoRow label="正式名称" value={`Sion`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`锡永`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座拥有超过七千年连续居住史的古城，是瑞士瓦莱州的政治与文化心脏，其山巅双堡见证了从史前到主教统治时代的权力更迭与阿尔卑斯山区的文明交融。`} />
                <InfoRow label="建筑特色" value={`两座分别矗立于独立山丘之上的中世纪城堡与教堂建筑群，与山下错落的红瓦老城、现代街区形成震撼的垂直景观，被誉为“石头与光的史诗”。`} />
                <InfoRow label="建筑风格" value={`融合了罗马式、哥特式以及后来的防御工事风格，圣殿教堂内藏有世界上最古老的仍在演奏的管风琴之一（约1430年）。`} />
                <InfoRow label="文化价值" value={`它不仅是地理上的要冲，更是理解瑞士法语区文化、阿尔卑斯山生活方式和欧洲教会与世俗权力博弈的活态教科书。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`瓦莱里纳城堡（Tourbillon）和瓦莱城堡（Valère）的开放时间随季节变化：通常夏季（5月至9月）为上午10点至下午6点，冬季（10月至次年4月）开放时间缩短或仅周末开放，具体需查询官网；圣殿教堂（Basilique de Valère）的开放时间与城堡分开，通常在工作日的特定时间和周末开放；建议出行前务必在瓦莱州旅游局网站核对最新信息，冬季部分区域可能因维护关闭。`} />
              <InfoRow label="门票价格" value={`瓦莱里纳城堡和瓦莱城堡（含圣母教堂）通常有联票，成人约8-12瑞士法郎；仅参观圣殿教堂内部有时免费，但登上塔楼或进入风琴博物馆需单独购票（约5瑞士法郎）；持有瑞士旅行通票（Swiss Travel Pass）可能享受折扣或部分免费；6-16岁青少年及学生有优惠，6岁以下儿童免费。`} />
              <InfoRow label="地址" value={`Place de la Planta, 1950 Sion, Switzerland`} />
              <InfoRow label="交通方式" value={`从日内瓦国际机场（GVA）出发最便捷：乘坐直达火车（IC/IR系列）前往锡永，车程约1小时50分钟，每小时至少一班；从苏黎世机场（ZRH）出发，需在伯尔尼或洛桑换乘一次，总车程约3小时。到达锡永火车站后，两座城堡山丘（Valère 和 Tourbillon）就在站外清晰可见，步行15-20分钟即可进入老城并开始攀登。市内公交系统完善，但探索老城和城堡最佳方式就是步行。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲锡永的故事，我们得把时钟拨回到遥远得难以想象的新石器时代。考古学家们在那两座标志性的山丘——瓦莱里纳和瓦莱——上，发现了最早的定居痕迹。为什么是这里？很简单，这两块巨大的岩石山丘易于防御，俯瞰着整个罗纳河谷地，是控制东西交通的天然堡垒。最早的先民就在这里，看着冰川退去，河谷变得丰饶。时间快进到罗马时代，这里成为了一个重要的驿站。但锡永真正的命运转折点，发生在中世纪早期，大约6世纪左右，这里成为了锡永主教区的中心。主教们不仅掌管灵魂，也掌管土地和权力，他们需要一座配得上其权威的“宝座”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，大约在11到13世纪，我们今天看到的建筑奇迹开始成形。在瓦莱山丘上，信徒们开始建造圣殿教堂（Valère Basilica），这是一座兼具宗教与防御功能的坚固堡垒式教堂。而真正让它名垂青史的，是教堂里那架建造于约1430年的管风琴。当你走进略显幽暗的教堂内部，看到那挂在西廊上、装饰着天使和纹章的木制琴箱时，很难想象近六百年来，它的声音一直在这石壁间回荡。它被认为是世界上最古老的、仍可演奏的原始管风琴。每年的夏季古乐节，乐师们会用这架“活化石”演奏，那声音不是通过音响放大出来的精致音色，而是一种带着木头呼吸声、风箱摩擦声的直接、质朴的历史低语，仿佛能触摸到中世纪修士的灵魂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`对面的瓦莱里纳山丘也不甘示弱。主教们在那里建造了更加宏伟的宫殿式城堡，作为他们的世俗居所。整个中世纪，锡永的主教们就在这两座山丘间来回，在教堂祈祷，在城堡统治。然而，权力的游戏注定伴随硝烟。1475年，野心勃勃的勃艮第公爵“大胆查理”的军队席卷而来，瓦莱里纳城堡在战火中被严重破坏。虽然它后来被修复，但命运的齿轮已然转动。1798年，法国大革命的风暴刮进了瓦莱州，世俗权力被终结，主教统治的时代落下帷幕。瓦莱里纳城堡被遗弃，逐渐风化为我们今天看到的浪漫主义废墟——只剩下巍峨的外墙和塔楼骨架，在夕阳下像一首石头写成的悲怆诗。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但锡永的故事没有结束。它从主教的宝座，平稳转型为瓦莱州的首府。那些古老的宫殿建筑成为了州政府办公室和博物馆。葡萄种植和酿酒的传统被发扬光大，城市向平坦的河谷扩张。今天，当你漫步城中，你会看到中世纪的石桥下流淌着灌溉葡萄园的水渠，现代化的音乐学校隔壁就是12世纪的小教堂。历史没有断裂，而是在这里完成了奇妙的融合与转化。两座山丘不再是隔绝的权力象征，而是整个社区共同的记忆图腾和灵魂高地，守护着山下日夜不息的生活之河。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要深度体验锡永，我强烈建议你留出完整的一天。最佳抵达时间是早上9点前，这时阳光正好照亮瓦莱城堡的正面，游客尚少，老城刚刚苏醒。整个游览节奏应该是“先高后低，先远观后沉浸”。上午趁体力充沛、光线最佳时，攀爬两座山丘，俯瞰全景并参观核心历史遗迹；下午回到老城，慢节奏地穿街走巷，品尝本地美食和美酒；傍晚时分，则可以找一个能看到山丘的露天座位，看落日为双堡镀上金边。这样的安排能让你从宏观到微观，全方位感受锡永的时空层叠之美。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`攀爬山丘务必穿一双绝对舒适防滑的鞋，部分路段是原始岩石和砂土路，高跟鞋或光滑底鞋是灾难。夏季上山请带足饮用水，山上几乎没有售卖点，且日照强烈。老城不少小店和博物馆中午有较长的休息时间（例如12:00-14:00），规划参观时需注意。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从火车站出来，首先别急着上山，穿过罗纳河上的小桥到对岸，找个开阔处静静仰望双堡并立的全景，让这个标志性画面刻入脑海`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选择先攀登瓦莱山丘，沿着之字形坡道缓缓上行，沿途回头俯瞰老城红色屋顶在脚下逐渐展开如同地图`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入瓦莱城堡的圣殿教堂，在幽静中寻找那架世界最古老的管风琴，并登上钟楼体验主教昔日俯瞰领地的视角`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过连接两座山丘下方的老城区主干道，在本地人常去的面包店买一个夹着香肠的法式长棍三明治当作便携午餐`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`开始攀爬瓦莱里纳城堡的废墟，在断壁残垣间想象它昔日的奢华，并坐在城墙阴影下边吃午餐边享受360度的无敌山谷视野`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后深入老城迷宫般的后街小巷，寻找那些有着精美文艺复兴时期外墙壁画和古老喷泉的静谧角落`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`将下午的最后时光留给州立历史与考古博物馆，让那些从山丘上出土的史前工具和罗马马赛克为你上午的所见补上最深厚的注脚`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前务必赶到老城边缘的某片葡萄园小径，看着夕阳的暖光依次染红瓦莱里纳城堡的残墙和瓦莱教堂的尖塔`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`瓦莱山丘南侧葡萄园仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前一小时，从山脚葡萄园的小径向上拍摄，能将城堡、教堂与绿意盎然的葡萄藤一同纳入画框，构图饱满富有生机`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣殿教堂内管风琴局部特写`}</h4>
                  <p className="text-sm text-gray-700">{`利用教堂窗格射入的侧光（上午为佳），聚焦管风琴古朴的木雕细节，营造神圣而神秘的历史氛围`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`瓦莱里纳城堡废墟拱门下框景`}</h4>
                  <p className="text-sm text-gray-700">{`站在城堡主塔的残存拱门或窗框内，以门框为画框，将对面的瓦莱城堡和老城作为远景拍摄，形成强烈的古今对话感`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`老城街巷光影长廊`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，阳光斜射入狭窄的石板街巷，捕捉光线照亮墙壁上文艺复兴壁画、窗台鲜花与行人身影的瞬间，富有生活故事感`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从州政府广场远眺双堡`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚蓝调时刻，在Place de la Planta广场以现代雕塑或喷泉为前景，拍摄华灯初上与暮色中双堡的剪影，体现时空交融`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`教堂内部拍摄前务必查看是否有禁止拍照的标识，尤其在进行礼拜活动时绝对禁止。使用无人机在瑞士有严格规定，城镇及历史遗迹上空通常禁飞，未经许可切勿尝试。尊重当地居民隐私，避免对着私人住宅的窗户长时间拍摄。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`老城心脏历史宅邸`}</h4>
                  <p className="text-sm text-blue-800">{`入住一栋由16世纪贵族宅邸改造的精品酒店，踩着吱呀作响的原木楼梯回到房间，石墙的凉意与窗外的城堡景致让你一夜梦回文艺复兴`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`葡萄园间的静谧民宿`}</h4>
                  <p className="text-sm text-green-800">{`选择坐落在锡永城郊葡萄田中的独栋农舍，清晨在鸟鸣中醒来，房东会为你准备用自家果园水果制作的丰盛早餐，享受纯粹的瓦莱乡村宁静`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`现代设计感峡谷视图酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`位于罗纳河畔的新兴街区，房间拥有整面落地窗和私人阳台，直面双堡山丘，在极简舒适的设计中同时拥有最震撼的古典风景画`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`山间徒步者小屋体验`}</h4>
                  <p className="text-sm text-purple-800">{`对于户外爱好者，不妨预订附近山腰上真正的徒步木屋，条件简单但无比纯粹，夜晚只有繁星与山谷的灯火为伴，体验阿尔卑斯山民的原始浪漫`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季旅游旺季和葡萄酒节期间（如9月收获季），住宿非常紧张，务必提前数月预订。老城内的酒店多有特色但停车位有限，自驾需提前确认停车安排。选择郊外住宿虽然安静，但晚上进入老城就餐可能需要短程公交或打车。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开锡永许久，我脑海中最常浮现的，不是某一张具体的明信片风景，而是一种感觉——一种“厚重”与“轻盈”奇妙共存的感觉。厚重的是那七千年的时间沉积，是石头城堡的沧桑，是管风琴每一个音符里承载的世纪。而轻盈的，是这里无处不在的阳光，是空气中飘散的酒香，是当地人在历史遗迹旁坦然生活的自在笑容。锡永教会我，历史不一定是沉重的负担，它可以像这两座山丘一样，成为生活的基石与背景，给予人认同感和延续的力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求新、快、变的时代，锡永的存在像一种温柔的抵抗。它不张扬，不喧哗，只是静静地坐在山谷里，任凭王朝更替、风云变幻，它自巍然。它告诉我们，真正的深度不是去追逐一个个孤立的景点，而是去感受一个地方如何与它的过去共处，如何将时光酿进每一杯酒、刻进每一块石头、融入每一天的日常烟火里。对于每一位厌倦了浮光掠影、渴望触摸欧洲文明真实肌理的旅人来说，锡永就是那本打开在山巅与河谷之间的、活生生的立体史书，值得你放慢脚步，用一整天，去读懂它一页页石头上写就的诗行。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/rhine-falls" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沙夫豪森莱茵瀑布</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rhine Falls</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gruyeres-medieval-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格吕耶尔中世纪小镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gruyères</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tarasp-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塔拉斯普城堡（恩嘎丁山谷的守护者）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tarasp Castle</p>
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
