import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '瓦卢瓦地区克雷皮 Crépy-en-Valois｜巴黎森林边的时光胶囊，漫步完好的中世纪城墙与钟楼 - 最佳欧洲景点',
  description: '当你从火车站走出来，沿着一条安静的林荫道向坡上走，大约十分钟后，一个巨大的、由深灰色石块垒成的拱门突然出现在眼前，那就是圣但尼门。穿过门洞的刹那，就像被吸进了一个时间漩涡。车轮碾过鹅卵石街道的“咔嗒”声取代了汽车引擎的噪音，空气里飘着刚出炉的法棍那种微焦的麦香，混合着老石头在阳光下散发的、略带潮湿的',
}

export default function CrepyEnValoisPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '瓦卢瓦地区克雷皮', href: '/attractions/crepy-en-valois' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`瓦卢瓦地区克雷皮・Crépy-en-Valois・法国・瓦卢瓦地区克雷皮`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你从火车站走出来，沿着一条安静的林荫道向坡上走，大约十分钟后，一个巨大的、由深灰色石块垒成的拱门突然出现在眼前，那就是圣但尼门。穿过门洞的刹那，就像被吸进了一个时间漩涡。车轮碾过鹅卵石街道的“咔嗒”声取代了汽车引擎的噪音，空气里飘着刚出炉的法棍那种微焦的麦香，混合着老石头在阳光下散发的、略带潮湿的矿物质气息。这里的时光流速明显不同，几位老人坐在广场长椅上，面前摆着一盘未下完的国际象棋，他们的节奏慢得像墙上日晷的影子。
这里最打动人的，是那种“仍然活着”的中世纪感。城墙不是被圈起来的孤立遗迹，而是人们生活的一部分。你可能会看到某户人家的后院就直接倚靠着古老的城墙，藤蔓植物从垛口垂落；钟楼的影子缓缓扫过面包店的门脸，提醒着下午茶时间的到来。它不是博物馆，而是一个家园。走在主街（Rue du Général-de-Gaulle）上，两旁是色彩柔和的砖木结构房屋，有些窗台摆满了天竺葵。你听不到旅游团的喇叭声，只有咖啡馆里刀叉的轻响、书店门铃的叮咚，以及远处学校孩子们隐隐约约的嬉笑声。这种宁静的、属于本地人的生活气息，才是克雷皮真正的宝藏。
它的核心魅力在于一种反差——距离巴黎这个全球最喧嚣的都市之一仅一小时车程，你却踏入了一个仿佛被时光遗忘的静谧世界。森林（Compiegne森林的边缘）的气息近在咫尺，给古镇的石头带来一丝绿意的清凉。你可以用手触摸那些被数百年风雨打磨得光滑的城墙石块，感受历史的质地。在这里，你会理解什么是“地方精神”，它没有被全球化熨平，依然保持着独特的棱角与呼吸。当夕阳把钟楼染成蜂蜜金色，鸽群绕着它盘旋，你会感到一种深沉的平和，那是高速运转的现代生活中早已遗失的礼物。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你从火车站走出来，沿着一条安静的林荫道向坡上走，大约十分钟后，一个巨大的、由深灰色石块垒成的拱门突然出现在眼前，那就是圣但尼门。穿过门洞的刹那，就像被吸进了一个时间漩涡。车轮碾过鹅卵石街道的“咔嗒”声取代了汽车引擎的噪音，空气里飘着刚出炉的法棍那种微焦的麦香，混合着老石头在阳光下散发的、略带潮湿的矿物质气息。这里的时光流速明显不同，几位老人坐在广场长椅上，面前摆着一盘未下完的国际象棋，他们的节奏慢得像墙上日晷的影子。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里最打动人的，是那种“仍然活着”的中世纪感。城墙不是被圈起来的孤立遗迹，而是人们生活的一部分。你可能会看到某户人家的后院就直接倚靠着古老的城墙，藤蔓植物从垛口垂落；钟楼的影子缓缓扫过面包店的门脸，提醒着下午茶时间的到来。它不是博物馆，而是一个家园。走在主街（Rue du Général-de-Gaulle）上，两旁是色彩柔和的砖木结构房屋，有些窗台摆满了天竺葵。你听不到旅游团的喇叭声，只有咖啡馆里刀叉的轻响、书店门铃的叮咚，以及远处学校孩子们隐隐约约的嬉笑声。这种宁静的、属于本地人的生活气息，才是克雷皮真正的宝藏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力在于一种反差——距离巴黎这个全球最喧嚣的都市之一仅一小时车程，你却踏入了一个仿佛被时光遗忘的静谧世界。森林（Compiegne森林的边缘）的气息近在咫尺，给古镇的石头带来一丝绿意的清凉。你可以用手触摸那些被数百年风雨打磨得光滑的城墙石块，感受历史的质地。在这里，你会理解什么是“地方精神”，它没有被全球化熨平，依然保持着独特的棱角与呼吸。当夕阳把钟楼染成蜂蜜金色，鸽群绕着它盘旋，你会感到一种深沉的平和，那是高速运转的现代生活中早已遗失的礼物。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`瓦卢瓦地区克雷皮`} />
                <InfoRow label="英文名称" value={`Crépy-en-Valois`} />
                <InfoRow label="正式名称" value={`Crépy-en-Valois`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`瓦卢瓦地区克雷皮`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这里是强大的瓦卢瓦王朝的古老封地与起源地之一，曾是与法兰西王室血脉相连的权力中心。`} />
                <InfoRow label="建筑特色" value={`保存近乎完好的中世纪防御城墙体系与宏伟的砖石钟楼是其最醒目的标志，古镇肌理如同一个凝固的同心圆。`} />
                <InfoRow label="建筑风格" value={`典型的法国北部中世纪城镇风格，混合了罗马式的基础与哥特式的后期增建，朴素而坚固。`} />
                <InfoRow label="文化价值" value={`一个活生生的中世纪生活标本，没有过度商业化的侵扰，真实展现着法兰西乡村古镇的日常脉搏。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇街道及城墙区域全天24小时开放。圣托马斯教堂（Église Saint-Thomas）开放时间较为灵活，通常为每日9:00-18:00。市政厅钟楼（Beffroi）的参观需通过当地旅游局预约，一般在夏季（4月至9月）的周末下午有固定导览团，冬季仅接受团体预约。旅游局办公室工作时间为周二至周六 10:00-12:30, 14:00-18:00。建议行前务必查询官网或致电确认具体时刻。`} />
              <InfoRow label="门票价格" value={`漫步古镇、欣赏城墙与街道完全免费。进入圣托马斯教堂免费。攀登市政厅钟楼的导览参观费用约为5欧元/成人，学生及12岁以下儿童优惠价3欧元。当地旅游局提供的付费徒步导览（约2小时）价格在10-12欧元左右，非常推荐。`} />
              <InfoRow label="地址" value={`Office de Tourisme du Pays de Valois, 3 Place de l’Hôtel de Ville, 60800 Crépy-en-Valois, France`} />
              <InfoRow label="交通方式" value={`从巴黎出发最为便捷。在巴黎北站（Gare du Nord）乘坐开往拉昂（Laon）或圣康坦（Saint-Quentin）方向的TER列车，约40-50分钟即可直达克雷皮-昂-瓦卢瓦站（Gare de Crépy-en-Valois）。班次平日每小时约1-2班，周末略减，可在SNCF官网或APP提前购票，现场售票机亦可。从火车站步行至古镇中心（市政厅广场）仅需12-15分钟，沿着标识清晰的缓坡上行即可，这是一段完美的预热。若自驾，从巴黎戴高乐机场出发沿A1高速公路向北，于“Sortie 9”出口驶出，沿D332公路行驶约30分钟即达，古镇外围有多个免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要说清楚克雷皮的故事，就得从“瓦卢瓦”这个姓氏说起。中世纪早期，这片肥沃的土地属于一个强大的领主家族。公元10世纪左右，一位名叫瓦卢瓦的领主在这里的山丘上建立了一座坚固的城堡，这个家族便以地为姓，成为了“瓦卢瓦家族”。他们的势力不断膨胀，命运在14世纪发生了戏剧性的转折。1328年，法兰西卡佩王朝的直系血脉断绝，王位传到了瓦卢瓦家族的腓力六世手中。于是，克雷皮这个小镇，一夜之间成了孕育法国王室的摇篮之一。你可以想象，当时这里的城堡该是如何的车马喧嚣，贵族往来，它从一个边境要塞，一跃成为王国政治版图上的重要节点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，王室的荣耀并未长久地眷顾此地。随着瓦卢瓦王朝的君主们将统治中心稳固在巴黎和卢瓦尔河谷，克雷皮的战略重要性逐渐下降。但它作为一座边境堡垒的宿命，却让它卷入了无数次冲突的漩涡。最残酷的洗礼莫过于英法百年战争。这座小镇因其坚固的城墙，成为了兵家必争之地。它被占领，被夺回，被围攻，城墙在一次次的战火中损毁又重建。居民们生活在恐惧之中，钟楼不仅是报时工具，更是瞭望台和警报器。那些今天看来古朴动人的石头，每一块都可能见证过惨烈的攻防。战争在它的肌体上留下了深深的疤痕，也锻造了它坚韧的性格。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`中世纪晚期到文艺复兴时期，克雷皮慢慢从军事前线转变为宁静的农业和市集城镇。坚固的城墙保护下的生活逐渐安稳，城内建起了高大的圣托马斯教堂，钟楼也被加盖并成为市政厅的一部分，象征着市民权力的崛起。小镇的格局基本定型：同心圆状的街道围绕着中心高地，四座主要的城门控制着进出。它繁荣过，作为地区性的毛纺业和贸易中心。但更大的历史浪潮再次袭来，法国大革命的风暴席卷了这里，古老的城堡被部分拆毁，象征封建制度的遗迹被抹去，只有那些服务于市民的城墙和钟楼幸运地留存下来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`进入近现代，克雷皮像许多法国小镇一样，经历了工业化与战争的又一次考验。两次世界大战的阴影都曾掠过这里，但它奇迹般地没有遭到毁灭性破坏。战后，随着高速公路和铁路的发展，它似乎成了“被路过”的地方——人们匆匆前往巴黎或更北边，很少为它停留。这份“被忽略”，在某种意义上成了它的保护伞。没有大规模的重建和旅游开发，反而让其中世纪的风貌得以原汁原味地保存。今天的居民们珍视这份遗产，他们修缮老屋，维护城墙，不是为了吸引如织的游客，而是为了守护自己独一无二的家园。漫步其中，你触摸到的不仅是中世纪的历史，更是一部关于韧性、变迁与守护的、持续了千年的小镇史诗。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受克雷皮的灵魂，建议安排一整天时间，从巴黎早班火车抵达，傍晚悠闲返回。这样的节奏能让你避开可能的一日游小高峰（多在下午），并领略小镇从晨光到暮色的不同韵味。整体游览以步行完成，路线呈环形，从最具仪式感的圣但尼门进入，由外至内层层深入，最后在城堡遗址的高点俯瞰全城收尾。整个行程轻松且充满发现，关键在于“慢”，留出时间在广场发呆、在面包店排队、和遛狗的本地人微笑搭讪。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`钟楼内部楼梯极为狭窄陡峭且光线昏暗，穿着舒适的平底鞋是必须的，有幽闭恐惧症或行动不便者需慎重。
小镇餐馆不多且午休时间较长（约12:00-14:00为午餐服务），建议要么提前规划正餐，要么就像本地人一样去面包店和熟食店（charcuterie）采购美味的三明治。
这里的商店和博物馆周一基本休息，周二也可能不开放，安排行程时务必避开。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从火车站出来后别急着打车，务必沿着指示牌开始那十五分钟舒缓的上坡步行，让森林的空气和渐变的街景为你完成从现代到中世纪的过渡仪式`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过巍峨的圣但尼门时记得回头望一眼门拱内侧的古老铁闸滑槽，然后立刻被门内洒满阳光的鹅卵石广场和五彩小屋所拥抱`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着主街慢悠悠地晃荡，用鼻子寻找那家隐藏的“Au Pain d‘Antan”传统面包店，买一个还烫手的黄油可颂当早餐`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到主街尽头自然抵达宁静的圣托马斯教堂，走进去坐在长椅上，静静看阳光透过简单而美丽的彩窗在古老地砖上跳舞`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂侧门出来，拐进小巷去寻找与市政厅合体的那座方形钟楼，如果开放一定要爬上狭窄的旋转楼梯，让整个古镇的红瓦屋顶在你脚下铺展如画`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从钟楼下来后，沿着“Rue des Boucheries”等小巷随意探索，目标指向小镇最高处的城堡遗址公园，那里只剩下地基和一片绿草地，却是野餐和发呆的完美场所`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后一定要回到市政厅前的佛斯广场，在“Café de la Place”的露天座点一杯咖啡或本地啤酒，看着黄昏的光线一点点将钟楼的石头染成金黄`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果还有余力，不妨从圣让门出城，沿着残留的古城墙根走一段，从另一个角度仰望这座森林边堡垒的雄姿`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣但尼门内侧视角`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在门内的佛斯广场上，将古老的石门拱作为画框，对准里面色彩柔和的老房子和远处若隐若现的钟楼，营造深邃的穿越感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡遗址公园边缘`}</h4>
                  <p className="text-sm text-gray-700">{`晴天的下午，站在公园的草地上，以巨大的橡树为前景，拍摄对面圣托马斯教堂的后殿与钟楼同框的画面，绿树、红瓦、灰石构成典型法式小镇风景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`钟楼顶部俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`登顶后，尽量选择在侧光柔和的上午十点前或下午四点后，将相机或手机贴紧防护网，对准下方放射状展开的街道与层层叠叠的红瓦屋顶，捕捉其如迷宫般的几何美感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城墙根下的仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`从圣让门外的草地，用广角镜头仰拍一段保存完好的城墙与塔楼，最好能捕捉到墙体上茂密的爬山虎，凸显其沧桑与生命力。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`老街光影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`中午阳光直射时，别拍建筑全景，转而关注小巷（如Rue des Cordeliers）里阳光在鹅卵石和古老墙面形成的强烈明暗对比与光影图案。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄民居和私人花园时务必保持尊重，避免将镜头直接对准屋内或院中居民，法国人对隐私极为看重。`}</li>
                <li>• {`教堂内部通常允许拍照，但请绝对禁止使用闪光灯和三脚架，并保持肃静。`}</li>
                <li>• {`无人机飞行在古镇上空有严格限制，基本属于禁区，未经许可切勿起飞。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸式老城中心`}</h4>
                  <p className="text-sm text-blue-800">{`下榻“Hôtel des Trois Lions”这类由老房子改造的精品酒店，房间可能有着裸露的木梁和老式壁炉，晚上能听到钟楼报时的悠悠钟声，清晨被面包店的香气唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`静谧森林边缘`}</h4>
                  <p className="text-sm text-green-800">{`选择镇外Compiegne森林附近由农庄改造的民宿，享受绝对的宁静，晚上可能只有风声和猫头鹰的啼叫，白天可以徒步或骑行直接进入森林探索。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`便捷经济之选`}</h4>
                  <p className="text-sm text-yellow-800">{`火车站附近有简洁现代的连锁酒店，虽然少了古韵，但对于赶早班火车或预算有限的旅行者极为方便，且通常能享受到更宽敞的房间和免费停车。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`独家历史宅邸`}</h4>
                  <p className="text-sm text-purple-800">{`如果运气好或提前足够久预订，可能会遇到镇上个别将古老贵族宅邸出租的度假屋，体验一把当几天“瓦卢瓦领主”的感觉，拥有私人的小庭院或露台。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城中心的住宿数量非常有限，尤其是在夏季周末和节假日，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇治安极好，夜晚非常安静，独行旅人也完全不用担心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`住在老城内意味着需要将车停在城外的公共停车场（免费），拖着行李走几分钟鹅卵石路，但这份体验绝对值得。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开克雷皮，坐在返回巴黎的火车上，窗外的风景飞速倒退回那个霓虹闪烁的现代世界。但你的心里，好像被悄悄地塞进了一块那些古城墙上的、温润的石头。它沉甸甸的，带着阳光的温度和森林的湿气，让你在接下来的都市喧嚣中，能有一个可以随时回去的、宁静的支点。这就是克雷皮给予旅人最珍贵的礼物——不是一张明信片般的风景照，而是一种关于时间、关于持续性的深刻体验。它告诉你，历史不是教科书里死去的章节，它可以是一种呼吸，一种步调，是面包炉里每日升起的炊烟。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求“新”与“快”到了极致的时代，像克雷皮这样愿意“慢”下来、“旧”下去的地方，显得愈发稀有而重要。它不讨好所有人，只静静地做自己。对于每一位真正的深度游旅人来说，这里是一面镜子。它照见的，或许是我们内心对扎根感的渴望，对一种连续而非断裂的生活的向往。一生必去的清单上，不应该只有那些声名赫赫的地标，更需要这样一些能让你灵魂呼吸、能与本地生活脉搏同步跳动的隐秘角落。瓦卢瓦地区克雷皮，就是这个清单上，一个沉默却无比有力的名字。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/cordes-sur-ciel" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科尔德圣谢鲁</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cordes-sur-Ciel</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/conques-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    孔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">孔克修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Conques Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/riquewihr-alsace-france" className="block group">
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
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
