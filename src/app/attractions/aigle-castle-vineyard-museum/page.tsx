import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃格勒城堡 Aigle Castle｜葡萄园包围中的绝美葡萄酒博物馆堡垒 - 最佳欧洲景点',
  description: '朋友，想象一下这个画面：你刚从埃格勒小镇那些飘着咖啡香和新鲜面包气息的街道拐出来，一抬头，一座浅黄色的石头城堡就那样稳稳地坐在一整片倾斜的绿色画布上。那不是普通的绿，那是成千上万株葡萄藤，被修剪得整整齐齐，从山脚一直蔓延到城堡的墙角根，仿佛是大自然献上的最忠诚的卫兵。空气的味道瞬间变了，小镇的烟火气...',
}

export default function AigleCastleVineyardMuseumPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '埃格勒城堡', href: '/attractions/aigle-castle-vineyard-museum' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`埃格勒城堡・Aigle Castle・瑞士・埃格勒， 沃州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下这个画面：你刚从埃格勒小镇那些飘着咖啡香和新鲜面包气息的街道拐出来，一抬头，一座浅黄色的石头城堡就那样稳稳地坐在一整片倾斜的绿色画布上。那不是普通的绿，那是成千上万株葡萄藤，被修剪得整整齐齐，从山脚一直蔓延到城堡的墙角根，仿佛是大自然献上的最忠诚的卫兵。空气的味道瞬间变了，小镇的烟火气被一种清冽的、混合了泥土、植物汁液和远处雪山气息的风所取代。耳边是清脆的鸟鸣，还有风吹过藤叶那连绵不绝的、温柔的沙沙声，像海浪，但更轻，更密。
走近了，你会发现这座城堡和你印象中那些险峻的、高踞悬崖之巅的堡垒完全不同。它很“亲民”。厚重的石墙带着几个世纪风吹日晒的暖黄色调，几座圆塔像敦厚的守护者。最妙的是，你找不到一条所谓的“护城河”，环绕它的，是真正的、流淌着生命汁液的“葡萄藤之海”。当地的老农可能正开着小小的工作车在田垄间穿梭，对你投来一个朴实的微笑。这座城堡，早已褪去了军事的狰狞，彻底融入了这片土地的呼吸与脉搏之中，成为当地人生活与劳作背景里最坚实、也最浪漫的一部分。
它的核心魅力，就在于这种极致的反差与和谐。石头是冷的、硬的，代表着战争与隔离；而葡萄藤是活的、柔软的，代表着孕育与分享。当你推开那扇厚重的木门走进内部，这种反差达到了高潮——城堡不再陈列盔甲和火炮，取而代之的是一排排散发着橡木清香的古老酒桶、闪烁着琥珀光泽的蒸馏器，以及描绘着丰收狂欢的古老壁画。这里是一座献给酒神巴克斯的圣殿，每一个角落都在诉说着沃州乃至整个瑞士法语区，人们如何用耐心和智慧，将阳光、雨露和山石的味道，封存进一瓶瓶金色的琼浆里。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，想象一下这个画面：你刚从埃格勒小镇那些飘着咖啡香和新鲜面包气息的街道拐出来，一抬头，一座浅黄色的石头城堡就那样稳稳地坐在一整片倾斜的绿色画布上。那不是普通的绿，那是成千上万株葡萄藤，被修剪得整整齐齐，从山脚一直蔓延到城堡的墙角根，仿佛是大自然献上的最忠诚的卫兵。空气的味道瞬间变了，小镇的烟火气被一种清冽的、混合了泥土、植物汁液和远处雪山气息的风所取代。耳边是清脆的鸟鸣，还有风吹过藤叶那连绵不绝的、温柔的沙沙声，像海浪，但更轻，更密。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，你会发现这座城堡和你印象中那些险峻的、高踞悬崖之巅的堡垒完全不同。它很“亲民”。厚重的石墙带着几个世纪风吹日晒的暖黄色调，几座圆塔像敦厚的守护者。最妙的是，你找不到一条所谓的“护城河”，环绕它的，是真正的、流淌着生命汁液的“葡萄藤之海”。当地的老农可能正开着小小的工作车在田垄间穿梭，对你投来一个朴实的微笑。这座城堡，早已褪去了军事的狰狞，彻底融入了这片土地的呼吸与脉搏之中，成为当地人生活与劳作背景里最坚实、也最浪漫的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，就在于这种极致的反差与和谐。石头是冷的、硬的，代表着战争与隔离；而葡萄藤是活的、柔软的，代表着孕育与分享。当你推开那扇厚重的木门走进内部，这种反差达到了高潮——城堡不再陈列盔甲和火炮，取而代之的是一排排散发着橡木清香的古老酒桶、闪烁着琥珀光泽的蒸馏器，以及描绘着丰收狂欢的古老壁画。这里是一座献给酒神巴克斯的圣殿，每一个角落都在诉说着沃州乃至整个瑞士法语区，人们如何用耐心和智慧，将阳光、雨露和山石的味道，封存进一瓶瓶金色的琼浆里。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`埃格勒城堡`} />
                <InfoRow label="英文名称" value={`Aigle Castle`} />
                <InfoRow label="正式名称" value={`Château d'Aigle`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`埃格勒， 沃州`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座从中世纪军事要塞成功转型为世界级葡萄酒文化殿堂的标志性建筑。`} />
                <InfoRow label="建筑特色" value={`方形主体堡垒与圆形塔楼结合，被无边无际的葡萄梯田温柔环抱，形成刚毅与柔美并存的独特景观。`} />
                <InfoRow label="建筑风格" value={`主要体现中世纪晚期的萨瓦防御建筑风格，后经伯尔尼占领时期改建，融入瑞士文艺复兴元素。`} />
                <InfoRow label="文化价值" value={`不仅是沃州葡萄酒历史的活化石，更是阿尔卑斯山脚下风土人情的集中展示，见证了葡萄种植如何塑造一个地区的灵魂。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡庭院全年全天开放。葡萄酒博物馆内部开放时间：四月至十月，每日上午10点至下午6点；十一月至三月，周二至周日上午10点至下午5点，周一闭馆。每年12月25日和1月1日闭馆。夏季（7-8月）有时会延长开放至晚上7点，建议行前查阅官网确认。`} />
              <InfoRow label="门票价格" value={`博物馆成人票12瑞士法郎。优惠票（学生、持卡老人）10瑞士法郎。6至16岁儿童5瑞士法郎。6岁以下免费。家庭票（2成人+最多5名儿童）30瑞士法郎。持瑞士旅行通票（Swiss Travel Pass）可享受门票优惠。门票包含博物馆内所有展厅、历史房间和一部短片的参观。`} />
              <InfoRow label="地址" value={`Place du Château 1, 1860 Aigle, Switzerland`} />
              <InfoRow label="交通方式" value={`从日内瓦国际机场出发最方便。在机场火车站（Genève-Aéroport）乘坐直达的IR（城际快车）或区域列车（R）前往埃格勒（Aigle）火车站，车程约1小时10分钟，班次频繁，每小时至少有2-3班。从苏黎世机场出发，需在伯尔尼或洛桑转车一次，总车程约3小时。抵达埃格勒火车站后，出站步行即可到达城堡，大约需要15-20分钟。沿着清晰的路标，穿过宁静的小镇街道，一路向山坡上的城堡走去，本身就是一段美妙的预热。如果行李多或不想步行，火车站门口有出租车，5分钟车程即到。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`这个故事得从大约800年前讲起。那时候，掌控着从意大利到法国广阔领土的萨瓦伯爵家族，眼光锐利地盯上了罗讷河畔通往阿尔卑斯山辛普朗山口的重要通道。大约在12世纪末，他们决定在这里，埃格勒，建起一座坚固的堡垒，用来收税、驻军，控制往来商旅，也顺便震慑一下周边不太老实的势力。最初的城堡可能更简陋，主要是木结构，但它的战略位置已经奠定——背靠山丘，俯瞰整个河谷平原，眼前是一马平川的沃野。有意思的是，也许从那时起，城堡脚下的土地就已经开始种植葡萄了，毕竟，萨瓦的贵族老爷们行军打仗，也是需要好酒来鼓舞士气的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡真正迎来它第一个辉煌的改建时期，是在13世纪。石头取代了木材，高大的方形主楼（donjon）和防御墙被建立起来，奠定了我们今天看到的基本轮廓。它像一个沉默的巨人，看着山下的小镇逐渐繁荣，看着葡萄园的面积一年年扩大。然而，平静的日子在瑞士联邦扩张的浪潮中被打破。1475年，来自伯尔尼的军队在所谓的“勃艮第战争”中攻占了这里。这对城堡来说，是毁灭，也是新生。伯尔尼人可不像萨瓦伯爵那样只把它当个前哨站，他们要把这里变成统治沃州地区的一个重要行政中心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，在16世纪，伯尔尼的行政长官们对城堡进行了一次“文艺复兴式”的改造。他们增建了那些带有优雅弧线屋顶的塔楼，在内部装饰了华丽的木镶板和壁画，把阴森的兵营和牢房，变成了可以举办宴会和审理政务的明亮厅堂。城堡的功能彻底改变了，从纯粹的军事要塞，变成了地方权力、司法和经济的象征。你可以想象，那些伯尔尼来的长官们，坐在挂着厚重帷幔的房间里，处理完公务后，走到窗边，看着窗外自己管辖下那一片欣欣向荣的葡萄园，斟上一杯本地产的白葡萄酒，那滋味，一定混合着权力与风土的满足。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时光流转到18世纪末，法国大革命的浪潮也席卷了这里。伯尔尼的统治结束了，城堡失去了行政功能，命运一度飘摇，曾被用作监狱、仓库，甚至一度面临被拆毁卖石头的危险。但真正拯救它的，不是某个国王或将军，而是它脚下那片沉默的土地和土地上生长的作物。19世纪，沃州的葡萄酒产业蓬勃发展，埃格勒成为了重要的葡萄酒贸易中心。人们忽然发现，这座古老的城堡，不就是存放这段历史最好的容器吗？于是，在1971年，经过精心修缮，城堡摇身一变，成为了“沃州葡萄酒博物馆”。刀剑入库，酒香满楼。它的城墙见证的不再是攻城槌的撞击，而是每年葡萄成熟时，人们欢庆丰收的歌声与笑语。从守护领土，到守护一种生活方式和文化，埃格勒城堡完成了一次最美妙的蜕变。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要给埃格勒城堡一次完美的深度体验，我强烈建议你安排出至少4到5个小时，并且最好选择一个晴朗的上午开始。这样，你既能享受到清晨葡萄园通透清新的空气和柔和的光线，也有充足的时间在博物馆内细细品读，最后以一场悠闲的品酒作为旅程的完美句点。上午10点前抵达城堡外围是最佳时机，这时旅行团尚未涌入，你能独占那份宁静。整个游览节奏应该是“由外至内，由景至史，由眼至口”——先从宏大的自然与建筑景观开始，慢慢收缩焦点，深入建筑内部的历史细节，最后用味觉来铭记这一切。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`博物馆内的解说牌以法文为主，但有非常详尽的英文小册子可以领取，或者提前在手机上下载好官方音频导览App，体验会好很多。品酒室在下午5点后可能停止服务，想品尝的话建议早点规划。葡萄园小径是公共步行道，可以免费进入，但请绝对走在田垄间，不要踩踏或采摘葡萄藤。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从埃格勒火车站出发，不直接上山，而是先沿着站前大道向东走几分钟，拐入一条标有“Tour des Vignes”指示牌的安静小径，从侧面缓缓切入葡萄园的怀抱。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着这条被葡萄藤簇拥的缓坡小径向上走，不断回望，你会看到城堡在逐渐升高的葡萄梯田和背后巍峨的阿尔卑斯山衬映下，展现出的不同角度的雄姿。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡南侧不那么起眼的入口进入外围庭院，先别急着进主楼，在古老的石墙边找张长椅坐下，静静听听风声、鸟声和远处小镇偶尔传来的钟声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开博物馆厚重的木门，首先映入眼帘的是那个震撼的中庭，仰头看看文艺复兴时期绘制的木质回廊和华丽纹章，感受从军事堡垒向行政官邸转变的第一印象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着清晰的指示标志，依次探索那些改造自古老地窖和房间的展厅，亲手摸摸冰冷的榨酒石槽，凑近闻闻那些有百年历史的橡木酒桶散发出的陈香。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要在展示“葡萄酒与庆典”的房间里多停留，看看那些描绘乡村婚礼和丰收节狂欢的古老壁画和器具，想象几个世纪以来人们因这琥珀色液体而焕发的快乐。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上城堡主塔的螺旋石阶，在狭窄的观景窗前豁然开朗，将360度无死角的葡萄园全景、红色屋顶的小镇和远方连绵的雪山一次性尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`游览的最后，毫不犹豫地走向地下酒窖改建的品酒室，用一杯当地特色的沙斯拉白葡萄酒，让刚才看到的所有历史、风景与文化，在舌尖上完美融合。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡东南侧葡萄园小径的回头弯`}</h4>
                  <p className="text-sm text-gray-700">{`上午9-10点，阳光从侧后方照亮城堡，从这个角度可以拍出城堡被层叠的葡萄田托起，背景是深邃山谷的经典纵深画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主塔楼顶的西北角垛口`}</h4>
                  <p className="text-sm text-gray-700">{`下午日落前1-2小时，站在这里向西拍摄，能获得城堡投下的长长影子与沐浴在金色夕阳下无限延伸的葡萄园形成的强烈明暗对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`博物馆中庭仰望回廊`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射入天井时，利用建筑本身的几何线条，拍摄文艺复兴回廊在古老石墙上投下的规整光影构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城堡正面护墙边缘的低角度`}</h4>
                  <p className="text-sm text-gray-700">{`任何晴朗的白天，将相机贴近地面，以几株前景的葡萄藤或野草作为框架，拍摄城堡石墙耸立的雄伟感，突出其与土地的连接。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏光镜可以有效消除葡萄叶面的反光，让绿色的层次和城堡石墙的质感更加突出。航拍在此地受到严格限制，因为葡萄园是私人财产且靠近居民区，未经许可请勿使用无人机。尊重正在劳作的葡萄农，拍摄他们前最好先微笑示意。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`田园诗篇`}</h4>
                  <p className="text-sm text-blue-800">{`住在城堡山脚下葡萄园环绕的传统小木屋民宿，清晨推窗便是沾满露水的藤蔓，主人会奉上用自家葡萄酿制的早餐开胃酒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`小镇风情`}</h4>
                  <p className="text-sm text-green-800">{`埃格勒火车站旁一家由百年老宅改造的设计酒店，现代舒适的内部与古朴的石砌外墙结合，位置极佳，逛小镇和去城堡都举步可达。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`庄园奢享`}</h4>
                  <p className="text-sm text-yellow-800">{`距离埃格勒十分钟车程、独占一片山丘的五星级葡萄酒庄园酒店，每个房间都直面葡萄园和阿尔卑斯山，晚餐便是其自家酒窖搭配的米其林推荐料理。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`历史沉浸`}</h4>
                  <p className="text-sm text-purple-800">{`瓦莱州首府锡永市中心一家由修道院改建的精品酒店，风格独特，以此为基地可以同时探索埃格勒和周边数个著名的葡萄酒产区村庄。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（6-9月）和秋季葡萄收获季（9月底10月初）是绝对旺季，住宿必须提前数月预订。埃格勒小镇非常安全宁静，晚上可以放心散步。如果选择住在周边村庄，务必确认好公共交通的末班车时间，或者准备好自驾。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开埃格勒城堡的时候，我手里不仅仅多了一瓶当地产的葡萄酒，心里更像是被灌入了一种平静而丰盈的力量。这座城堡教会我的，是关于“转化”的最美一课。它告诉我，坚硬的石头可以被时光和人文软化，战争的壁垒可以转化为庆祝生命的殿堂。它的存在，就像一瓶伟大的葡萄酒本身——最初的葡萄可能承受过风雨，经历过压榨，在黑暗的桶中漫长陈年，但最终开启时，献给世人的却是无比复杂、醇香、能唤醒所有美好情感的琼浆。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求效率和速成的快节奏世界里，埃格勒城堡和它守护的葡萄园，共同构成了一种“慢生活”的隐喻。它提醒我们，有些价值需要时间的沉淀，有些美好源于与土地最亲密的联系。它不是一个与你保持距离、仅供仰望的纪念碑，而是一个你可以走进、触摸、甚至品尝的活的历史。对于每一位热爱深度游的旅人而言，这里不仅仅是一个景点，它是一个完整的感官与心灵的休憩之所。在这里，你能看到历史如何落地生根，文化如何破土发芽，最终，所有坚硬与苦涩的过往，都融汇成了杯中那一口令人微笑的、金色的温柔。这，难道不值得你专门为它而来一趟吗？`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/stein-am-rhein-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施泰因老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Stein am Rhein Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/murten-medieval-ramparts" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    穆
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">穆尔滕环湖古城墙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Murten (Morat) City Walls</p>
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
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
