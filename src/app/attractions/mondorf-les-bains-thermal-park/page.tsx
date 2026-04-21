import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '蒙多夫莱班 Mondorf-les-Bains｜卢森堡的优雅时光胶囊，在宏大的古典疗养公园里做一场19世纪的梦 - 最佳欧洲景点',
  description: '当我第一次走出蒙多夫莱班的火车站，空气里那股子混合了湿润泥土、淡淡硫磺和刚修剪过的草坪的气息，就轻柔地拽住了我的衣角。这不像卢森堡其他地方那种岩石城堡的冷峻感，而是一种被阳光晒暖了的、懒洋洋的柔软。沿着安静的小路走不到十分钟，一片极其开阔的、绿得发亮的视野豁然展开——这就是那座传说中的温泉公园。第一',
}

export default function MondorfLesBainsThermalParkPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '卢森堡', href: '/destinations/europe' },
            { label: '蒙多夫莱班', href: '/destinations/europe' },
            { label: '蒙多夫莱班', href: '/attractions/mondorf-les-bains-thermal-park' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`蒙多夫莱班・Mondorf-les-Bains・卢森堡・蒙多夫莱班`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当我第一次走出蒙多夫莱班的火车站，空气里那股子混合了湿润泥土、淡淡硫磺和刚修剪过的草坪的气息，就轻柔地拽住了我的衣角。这不像卢森堡其他地方那种岩石城堡的冷峻感，而是一种被阳光晒暖了的、懒洋洋的柔软。沿着安静的小路走不到十分钟，一片极其开阔的、绿得发亮的视野豁然展开——这就是那座传说中的温泉公园。第一眼，你绝不会想到这是在卢森堡，它更像法国某个低调的度假地，或是维也纳郊区的一座皇家夏宫。那种规整的、对称的宏大之美，带着19世纪特有的自信和从容，一下子就把时钟拨慢了一百年。
公园中心，那座米黄色的宏伟疗养宫（Domaine Thermal）静静矗立。它不是城堡，却有着城堡般的体量；它不是宫殿，却散发着宫殿般的优雅。午后的阳光斜打在它立面的壁柱和拱窗上，投下长长的、线条分明的影子。我听见的声音很奇特：不是游客的喧哗，而是喷泉规律的汩汩声，是远处网球场上清脆的击球声，是推着婴儿车的年轻父母用法语和卢森堡语低声交谈的絮语，还有我自己的脚步声，在宽阔的砂砾小径上发出好听的沙沙声。这里似乎是全镇居民的客厅和后花园，遛狗的、慢跑的、坐在铁艺长椅上读报的老先生，每个人都怡然自得，仿佛这座公园是他们日常生活里一个再自然不过的呼吸器官。
最打动我的，是那种无处不在的“疗愈”氛围，它超越了单纯的温泉泡浴。这是一种对整体生活美学的疗愈。你可以看到精心维护的花坛里，玫瑰与薰衣草排列成严谨的几何图案；你可以闻到从古老温室（Orangerie）飘出的、混合了热带植物与潮湿土壤的温热气息；你可以触摸到那些被岁月打磨得光滑的石灰华栏杆。这一切都服务于一个核心：让人平静下来，优雅下来，像过去那些来此“取水”疗养的绅士淑女一样，专注于自己的身体、感官与闲暇。在这里，“慢”不是一种选择，而是被空间设计所规定的唯一节奏。它像一枚来自“美好时代”的时光胶囊，封装着一种关于健康、优雅与社交的、近乎失传的生活理想。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当我第一次走出蒙多夫莱班的火车站，空气里那股子混合了湿润泥土、淡淡硫磺和刚修剪过的草坪的气息，就轻柔地拽住了我的衣角。这不像卢森堡其他地方那种岩石城堡的冷峻感，而是一种被阳光晒暖了的、懒洋洋的柔软。沿着安静的小路走不到十分钟，一片极其开阔的、绿得发亮的视野豁然展开——这就是那座传说中的温泉公园。第一眼，你绝不会想到这是在卢森堡，它更像法国某个低调的度假地，或是维也纳郊区的一座皇家夏宫。那种规整的、对称的宏大之美，带着19世纪特有的自信和从容，一下子就把时钟拨慢了一百年。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公园中心，那座米黄色的宏伟疗养宫（Domaine Thermal）静静矗立。它不是城堡，却有着城堡般的体量；它不是宫殿，却散发着宫殿般的优雅。午后的阳光斜打在它立面的壁柱和拱窗上，投下长长的、线条分明的影子。我听见的声音很奇特：不是游客的喧哗，而是喷泉规律的汩汩声，是远处网球场上清脆的击球声，是推着婴儿车的年轻父母用法语和卢森堡语低声交谈的絮语，还有我自己的脚步声，在宽阔的砂砾小径上发出好听的沙沙声。这里似乎是全镇居民的客厅和后花园，遛狗的、慢跑的、坐在铁艺长椅上读报的老先生，每个人都怡然自得，仿佛这座公园是他们日常生活里一个再自然不过的呼吸器官。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动我的，是那种无处不在的“疗愈”氛围，它超越了单纯的温泉泡浴。这是一种对整体生活美学的疗愈。你可以看到精心维护的花坛里，玫瑰与薰衣草排列成严谨的几何图案；你可以闻到从古老温室（Orangerie）飘出的、混合了热带植物与潮湿土壤的温热气息；你可以触摸到那些被岁月打磨得光滑的石灰华栏杆。这一切都服务于一个核心：让人平静下来，优雅下来，像过去那些来此“取水”疗养的绅士淑女一样，专注于自己的身体、感官与闲暇。在这里，“慢”不是一种选择，而是被空间设计所规定的唯一节奏。它像一枚来自“美好时代”的时光胶囊，封装着一种关于健康、优雅与社交的、近乎失传的生活理想。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`蒙多夫莱班`} />
                <InfoRow label="英文名称" value={`Mondorf-les-Bains`} />
                <InfoRow label="正式名称" value={`蒙多夫莱班温泉公园与疗养区 (Parc Thermal et Domaine Thermal de Mondorf-les-Bains)`} />
                <InfoRow label="国家" value={`卢森堡`} />
                <InfoRow label="城市" value={`蒙多夫莱班`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`19世纪中后期席卷欧洲的温泉疗养狂潮在卢森堡的完美结晶，代表了当时上流社会对健康、休闲与社交生活的最高追求。`} />
                <InfoRow label="建筑特色" value={`气势恢宏的新古典主义与巴洛克复兴风格疗养宫建筑群，与精心规划的、充满对称美学的大型法式园林和谐共生。`} />
                <InfoRow label="建筑风格" value={`以新古典主义为主，融合了第二帝国时期的巴洛克装饰元素，整体呈现出一种庄重、优雅且略带华丽感的疗养地风格。`} />
                <InfoRow label="文化价值" value={`它不仅仅是一个温泉，更是一个活着的“美好时代”社交剧场，见证了从贵族沙龙到现代大众健康生活的观念变迁。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`温泉公园（Parc Thermal）全年24小时免费开放。核心的“温泉疗养宫”（Domaine Thermal）及温泉水疗中心开放时间通常为周一至周日 9:00 - 22:00，具体服务（如理疗、泳池）时段各异，冬季（11月至次年3月）可能缩短开放时间。建议行前在其官网确认最新时刻表，节假日如圣诞节和元旦当天可能关闭或调整。`} />
              <InfoRow label="门票价格" value={`进入温泉公园本身免费。使用“温泉疗养宫”内的设施（如温泉水疗泳池、桑拿区、健身房）需购票。单日通行证约25-35欧元，多次卡和家庭套票有优惠。65岁以上长者及特定时段（如傍晚票）可能有折扣。具体的理疗服务（按摩、泥浴等）需额外付费并强烈建议提前预约。`} />
              <InfoRow label="地址" value={`1 Avenue des Bains, 5610 Mondorf-les-Bains, Luxembourg`} />
              <InfoRow label="交通方式" value={`从卢森堡芬德尔国际机场出发，最便捷的方式是乘坐出租车，约25分钟车程，费用约50-60欧元。若乘坐公共交通，可在机场乘坐29路巴士至卢森堡中央火车站（Gare Centrale），换乘火车前往“Mondorf-les-Bains”站。火车班次频繁，约每小时1-2班，车程30-40分钟。从卢森堡市中央火车站也有直达火车。抵达小镇火车站后，步行约10-15分钟即可到达温泉公园。卢森堡全国公共交通免费，这是一个巨大福利。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "蒙多夫莱班的故事，始于一次偶然的发现，却兴起于一个时代的狂热。早在19世纪40年代，当地人在寻找盐矿时，意外钻探出了富含矿物质和气体的温热泉水。最初，这眼泉水只是本地人好奇的对象。但消息很快传到了当时统治卢森堡的荷兰-卢森堡大公威廉二世（同时也是荷兰国王）的耳中。这位君主敏锐地嗅到了机遇——在那个年代，温泉疗养地是欧洲王室和贵族中最时髦的社交与健康目的地，比如英国的巴斯、德国的巴登-巴登。若能打造一个卢森堡自己的温泉胜地，不仅能促进经济，更能提升公国的国际形象。于是，在王室的支持下，开发计划正式启动。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正让蒙多夫莱班脱胎换骨的，是1865年那次雄心勃勃的设计竞赛。中标的设计师们心怀一个宏大的蓝图：不仅要建一个浴场，更要创造一个集治疗、休闲、社交于一体的乌托邦式社区。他们从法国和奥地利的顶级温泉胜地汲取灵感，决定采用当时最流行也最显庄重的新古典主义风格，并融入了巴洛克式的装饰元素，以彰显其奢华与品味。疗养宫的主楼、宏伟的柱廊、对称的配楼、以及那个巨大的、规则式的法式花园（Parc Thermal）开始从图纸变为现实。石材来自本地，工匠汇集四方，一座崭新的人造“乐园”在卢森堡南部的田园风光中拔地而起。到19世纪80年代，它已经吸引了来自德国、法国、比利时的富裕客户，火车站特意扩建，以迎接乘坐豪华列车前来的贵宾。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，二十世纪的两次世界大战给了这个优雅梦境沉重一击。地处德法边境的卢森堡是兵家必争之地，蒙多夫莱班未能幸免。疗养宫一度被征用为军事医院或指挥部，精美的花园无人照料，建筑也遭到不同程度的损坏。更根本的冲击来自于社会结构的巨变和医学观念的革新。随着现代医学的发展，传统的“温泉疗法”不再被视为万能灵药；旧式的贵族沙龙文化也逐渐式微。二战后的蒙多夫莱班一度陷入沉寂，像一个过气的明星，空有华丽的躯壳，却失去了灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转机发生在二十世纪后期。人们对于“健康”的定义重新变得宽广，不仅治疗疾病，更追求身心的平衡与放松。温泉文化从“医疗”转向了“康养”与“ wellness”。卢森堡政府与私人资本看到了这座历史遗产的新价值，开始了一系列精心的修复与现代化改造。他们保留了疗养宫建筑群那令人惊叹的历史外壳，而在内部注入了21世纪的科技与舒适：现代化的水疗泳池、先进的理疗设备、五星级的酒店服务。古老的温室被修复，公园里的每一棵树、每一盏复古街灯都被悉心维护。今天的蒙多夫莱班，成功地将自己从一件“历史标本”转型为一个“活着的传统”。它既承载着往昔的荣光，又满足着当代人对逃离压力、寻求宁静的渴望，完成了一次优雅的世纪穿越。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受蒙多夫莱班的双重魅力——历史的厚重与现代的闲适，建议安排一整天的时间。最佳抵达时间是上午九点左右，此时公园里阳光和煦，游人稀少，你能独占那份宁静。整体游览节奏应遵循“由外至内，由静至动”的原则：先花两个小时在宏大的户外公园里漫步，让身心彻底沉浸于19世纪的园林美学中；午后进入疗养宫内部，体验现代温泉水疗的舒适；傍晚时分，则在小镇中心享用一顿悠闲的晚餐，感受本地生活气息。这样的安排既能深度探索，又不会过于劳累，完美契合了此地“疗愈”的主题。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`疗养宫内部的温泉水疗区非常受欢迎，尤其是周末，强烈建议提前在其官网预订门票和理疗服务，以免失望而归。进入水疗泳池和桑拿区必须穿着泳衣，且通常禁止携带手机拍照，请提前做好准备，专注于体验。小镇整体非常安全宁静，但公园面积很大，建议穿着舒适的步行鞋。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从火车站出来，沿着种满七叶树的林荫大道“Avenue des Bains”慢行，让小镇的宁静氛围为你洗去旅途的尘埃。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从公园正门的宏伟铁艺大门进入，首先让自己迷失在笔直的椴树林荫道与对称的几何形花坛所构成的视觉盛宴里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`漫步到公园中心的圆形大喷泉旁，坐在长椅上，看阳光在水珠上折射出彩虹，静静观察本地人如何享用他们的公共花园。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进那座标志性的米黄色疗养宫主楼，即使不泡温泉，也一定要在大厅里仰望那装饰着精美浮雕的高挑穹顶，感受旧日的辉煌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果你选择了水疗体验，那就把自己交给温暖的富含矿物质的泉水，在历史建筑的环抱中享受一次彻底的身心放松。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观公园一侧的古老温室（Orangerie），感受里面潮湿温暖的空气，与那些来自异域的棕榈和花卉进行一场沉默的对话。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过公园，来到小镇另一侧更生活化的区域，找一家街角的咖啡馆，点一杯卢森堡本地啤酒或咖啡，看夕阳将远处的教堂尖塔染成金色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐务必尝试一家以本地食材为主的餐厅，或许能碰上用附近摩泽尔河谷葡萄酿造的白葡萄酒，为这一天画上完美的味觉句号。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`疗养宫正立面全景`}</h4>
                  <p className="text-sm text-gray-700">{`站在公园中心喷泉广场的轴线上，用广角镜头拍摄，最佳时间是下午三四点，阳光从侧面照亮建筑的立柱和雕塑，能拍出新古典主义的宏伟与立体感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`椴树林荫道纵深`}</h4>
                  <p className="text-sm text-gray-700">{`选择任何一条笔直的林荫道，站在一端，利用树木形成的自然透视线构图，清晨或傍晚的低角度阳光能穿透树叶，形成迷人的光影隧道。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`温室内部光影`}</h4>
                  <p className="text-sm text-gray-700">{`在温室内，寻找阳光透过弧形玻璃屋顶洒在热带植物叶片上的时刻，对准那些被照亮的细节，可以拍出充满生命感与古典气息的静物画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`公园铁艺长椅与喷泉`}</h4>
                  <p className="text-sm text-gray-700">{`选取一个装饰精美的复古铁艺长椅作为前景，后方是圆形的喷泉和疗养宫的侧影，构图平衡而富有故事感，适合表达宁静怀旧的情绪。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`小镇街景与疗养宫远景`}</h4>
                  <p className="text-sm text-gray-700">{`从小镇中心的教堂附近往回望，可以将本地生活的红屋顶、街灯与远处公园里的疗养宫穹顶一同纳入画面，展现历史遗产与当代社区的融合。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在公共公园区域拍照完全自由，但请始终尊重他人隐私，避免对准正在休息或理疗的陌生人特写。疗养宫建筑外部可以尽情拍摄，但内部水疗区域严禁使用相机或手机，这是为了保障所有客人的隐私与放松体验。卢森堡的天气多变，随身带一块镜头布，以应对温泉区附近可能的水汽。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`下榻于“温泉疗养宫”建筑群内的五星级酒店，房间拥有挑高天花板和古典装饰，推开窗就是百年公园，清晨可以在鸟鸣中独自享受空无一人的花园。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`精品设计之选`}</h4>
                  <p className="text-sm text-green-800">{`小镇中心由古老宅邸改造的精品设计酒店，现代简约的室内风格与古老石墙形成有趣对话，步行至公园仅需五分钟，非常适合追求格调的年轻旅行者。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`宁静家庭之选`}</h4>
                  <p className="text-sm text-yellow-800">{`位于公园边缘地带带小花园的家庭式公寓，空间宽敞，配有简易厨房，可以像当地人一样去市场买菜自己烹饪，享受一段慢节奏的定居式旅行。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济便捷之选`}</h4>
                  <p className="text-sm text-purple-800">{`火车站附近干净舒适的连锁酒店或民宿，价格亲民，交通极其方便，虽然看不到公园景色，但足以作为一个舒适安稳的歇脚处。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果计划体验多次温泉水疗，住在疗养宫酒店通常能获得住宿与水疗的优惠套餐，性价比很高。夏季和周末是本地人的度假高峰，住宿非常紧俏，务必提前数月预订。小镇夜间极其安静，治安极佳，完全可以放心在晚饭后于公园周边散步。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开蒙多夫莱班的时候，我背包里似乎被偷偷塞进了一些不一样的东西。不是硫磺的气味，也不是花园里的花香，而是一种对“时间”新的感知方式。在这个一切都追求即时、效率和爆炸性刺激的世界里，这里固执地守护着一种“缓慢的治愈”。它提醒我们，健康不仅仅是体检报告上的数字，更是一种状态——一种让感官苏醒、让心神安宁、让自己与自然和美和谐共处的状态。那些来此散步的老人、嬉戏的孩子、牵手的情侣，他们都在实践着一种古老而又现代的生活哲学：认真地对待闲暇，优雅地照料自身。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，如果你厌倦了打卡式的奔波，如果你的灵魂渴望一次真正的深呼吸，请务必把蒙多夫莱班放入你的清单。它可能没有惊心动魄的奇观，但它提供了一处难得的“空白”——一段可以被优雅填满的时光，一场在宏大历史布景下的宁静独处。在这里，你不是一个旁观历史的游客，而是可以暂时栖居其中的体验者。你会带着被熨帖过的神经和一颗平静许多的心离开，并且，在往后纷扰的日常里，你会不时想起那个午后，阳光透过椴树叶，在砂砾路上洒下的一地碎金。那便是它赠予你的，一份悠长的回响。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bourglinster-resistance-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博尔滕斯（隐秘的抵抗之村）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bourglinster</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ettelbruck-patton-memorial-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃特尔布吕克</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ettelbruck</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/mersch-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅尔施城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mersch Castle</p>
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
