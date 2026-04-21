import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '申根 Schengen｜签下“无国界欧洲”的莫泽尔河畔葡萄酒村 - 最佳欧洲景点',
  description: '想象一下，你拐下高速公路，驶入一条被葡萄园夹道欢迎的安静小路。空气瞬间变得不一样了，湿润的、带着河泥与成熟葡萄甜香的风拂过脸颊。然后，莫泽尔河那宽阔的、泛着银灰色光泽的河面就这么毫无预警地展开在眼前。对岸，是德国墨绿色的山峦；左边，是法国隐约的屋舍。而你站立的地方，就是这个名叫“申根”的卢森堡小村庄...',
}

export default function SchengenVillagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '卢森堡', href: '/destinations/luxembourg' },
            { label: '申根（缔造欧洲无国界公约的酿酒小村）', href: '/attractions/schengen-village' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`申根（缔造欧洲无国界公约的酿酒小村）・Schengen・卢森堡・雷米希`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下，你拐下高速公路，驶入一条被葡萄园夹道欢迎的安静小路。空气瞬间变得不一样了，湿润的、带着河泥与成熟葡萄甜香的风拂过脸颊。然后，莫泽尔河那宽阔的、泛着银灰色光泽的河面就这么毫无预警地展开在眼前。对岸，是德国墨绿色的山峦；左边，是法国隐约的屋舍。而你站立的地方，就是这个名叫“申根”的卢森堡小村庄。它的宁静几乎带着催眠的魔力，耳边只有河水缓缓的流淌声、蜜蜂在路边野花间的嗡嗡声，以及远处某扇门被轻轻关上的闷响。
你沿着河岸散步，会看到当地人推着婴儿车慢跑，老人们在长椅上分享一瓶刚刚从合作社买来的雷司令。咖啡馆的露天座，人们用卢森堡语、德语或法语闲聊，手边无一例外都放着一杯晶莹的葡萄酒。时间在这里的流速，仿佛被莫泽尔河调和得格外缓慢、醇厚。一切都太“普通”了，普通到你几乎要忘记自己正站在一个史诗级概念的源头。直到你看见河畔那座并不起眼的白色纪念碑，或者那块指向法、德、卢三国的路牌，那个瞬间，一种奇妙的电流会窜过你的脊背——就是这里，这个闻得到酒香、听得到水流的地方，签下了那份让“边境”一词对欧洲人意义彻底改变的《申根协定》。
它的核心魅力，正在于这种极致的反差与融合。这里没有布鲁塞尔欧盟总部那种严肃的官僚气，也没有斯特拉斯堡欧洲议会大厦的现代冷感。历史的决定性瞬间，发生在一条名为“公主号”的葡萄酒品鉴船上，背景是酒杯的轻碰与酿酒师的谈笑。欧洲最宏大的“自由”理想，其诞生地竟如此充满生活气息，如此谦卑地嵌入在一片田园风光之中。你来这里，不仅是朝圣一个政治符号，更是体验一种理念如何从土地中生长出来：开放、流动、共享，就像莫泽尔河的河水，以及两岸人民世代共享的葡萄园。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下，你拐下高速公路，驶入一条被葡萄园夹道欢迎的安静小路。空气瞬间变得不一样了，湿润的、带着河泥与成熟葡萄甜香的风拂过脸颊。然后，莫泽尔河那宽阔的、泛着银灰色光泽的河面就这么毫无预警地展开在眼前。对岸，是德国墨绿色的山峦；左边，是法国隐约的屋舍。而你站立的地方，就是这个名叫“申根”的卢森堡小村庄。它的宁静几乎带着催眠的魔力，耳边只有河水缓缓的流淌声、蜜蜂在路边野花间的嗡嗡声，以及远处某扇门被轻轻关上的闷响。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你沿着河岸散步，会看到当地人推着婴儿车慢跑，老人们在长椅上分享一瓶刚刚从合作社买来的雷司令。咖啡馆的露天座，人们用卢森堡语、德语或法语闲聊，手边无一例外都放着一杯晶莹的葡萄酒。时间在这里的流速，仿佛被莫泽尔河调和得格外缓慢、醇厚。一切都太“普通”了，普通到你几乎要忘记自己正站在一个史诗级概念的源头。直到你看见河畔那座并不起眼的白色纪念碑，或者那块指向法、德、卢三国的路牌，那个瞬间，一种奇妙的电流会窜过你的脊背——就是这里，这个闻得到酒香、听得到水流的地方，签下了那份让“边境”一词对欧洲人意义彻底改变的《申根协定》。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，正在于这种极致的反差与融合。这里没有布鲁塞尔欧盟总部那种严肃的官僚气，也没有斯特拉斯堡欧洲议会大厦的现代冷感。历史的决定性瞬间，发生在一条名为“公主号”的葡萄酒品鉴船上，背景是酒杯的轻碰与酿酒师的谈笑。欧洲最宏大的“自由”理想，其诞生地竟如此充满生活气息，如此谦卑地嵌入在一片田园风光之中。你来这里，不仅是朝圣一个政治符号，更是体验一种理念如何从土地中生长出来：开放、流动、共享，就像莫泽尔河的河水，以及两岸人民世代共享的葡萄园。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`申根（缔造欧洲无国界公约的酿酒小村）`} />
                <InfoRow label="英文名称" value={`Schengen`} />
                <InfoRow label="正式名称" value={`Schengen`} />
                <InfoRow label="国家" value={`卢森堡`} />
                <InfoRow label="城市" value={`雷米希`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一个因一份在河上葡萄酒品鉴船上签署的协定，而永远改变了整个欧洲大陆旅行与生活方式的微型地标。`} />
                <InfoRow label="建筑特色" value={`毫无恢弘宫殿或城堡，只有沿河舒展的、漆成暖色调的宁静民居、古老的酒庄建筑，以及几座极具象征意义的现代纪念碑。`} />
                <InfoRow label="建筑风格" value={`典型的莫泽尔河畔村落风格，夹杂着战后功能性建筑与充满寓意的当代景观设计。`} />
                <InfoRow label="文化价值" value={`它既是欧洲一体化最具体、最成功的象征，也是卢森堡摩泽尔葡萄酒产区千年生活方式的鲜活延续，两种叙事在此奇妙交融。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`村庄全天可自由漫步。核心历史景点“申根协定纪念碑”及“欧洲博物馆”开放时间为：每年4月至10月，周二至周日上午10点至下午5点；11月至次年3月，仅周末上午11点至下午4点开放。博物馆周一闭馆，公共假期开放时间可能临时调整，行前建议查阅官网。`} />
              <InfoRow label="门票价格" value={`进入申根村及在河畔、葡萄园漫步完全免费。“欧洲博物馆”门票为成人5欧元，学生及65岁以上长者3欧元，12岁以下儿童免费。持有卢森堡旅游卡可享8折优惠。`} />
              <InfoRow label="地址" value={`Rue Robert Goebbels, 5441 Schengen, Luxembourg`} />
              <InfoRow label="交通方式" value={`申根村位于卢森堡东南角，莫泽尔河畔。最近的国际机场是卢森堡芬德尔机场，驾车约需40分钟。最浪漫的方式是乘坐火车：从卢森堡市中央火车站出发，乘坐前往沃尔默丹格方向的区域性列车，在“雷米希”站下车，车程约35分钟，班次每小时1-2班。出站后，转乘570路公共巴士，约10分钟即可抵达“Schengen，Bréck”站（申根桥站），下车即达村中心。自驾则沿A13/E44高速公路，从“Schengen”出口下，有免费停车场。购票建议使用卢森堡全国通用的“mKaart”交通卡，非常便捷。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲申根的故事，得先忘掉“协定”，回到它作为村庄的千年身份。早在罗马时期，莫泽尔河这段蜿蜒的水道就是重要的航运通道。中世纪，这里属于卢森堡伯爵的领地，村民们的主要营生就是种植葡萄、酿造葡萄酒，并将酒桶装上平底船，运往下游的贸易城镇。河对岸的领土几经易手，在德意志诸邦与法兰西王国之间摇摆，但申根村的日常生活，始终围绕着葡萄的春华秋实、酒的发酵与沉淀。它一直是个安静的、边界上的存在，见证过军队渡河，也经历过关税壁垒，但河水的流动和葡萄酒的贸易，总能在政治的缝隙间找到自己的路。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间快进到二十世纪下半叶。二战的创伤让欧洲的政治家们痛定思痛，渴望找到一种超越民族国家仇恨、促进永久和平的路径。经济上的“欧洲煤钢共同体”已初见成效，但人员流动的壁垒依然森严，边境检查站排起的长龙，是分裂最直观的象征。当时，法国、德国、荷兰、比利时、卢森堡这五个相邻国家，开始秘密探讨取消内部边境管制的大胆设想。选择在哪里签署这份注定载入史册的文件呢？他们需要一处具有象征意义、且能保证绝对隐私的地点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`目光投向了卢森堡这个“欧洲的调解人”，又进一步聚焦到莫泽尔河上。最终，他们选定了停泊在申根村附近河段的一艘游船——“MS Princesse Marie-Astrid”号。这是一艘葡萄酒品鉴船，属于卢森堡国家，平时用于推广摩泽尔产区的佳酿。选择它，寓意深刻：葡萄酒是欧洲最古老的共享文化之一，而河流，象征着连接与流动。1985年6月14日，五国的部长们登上了这艘船。没有镁光灯的追逐，会议在品酒室中进行。据说，桌上有产自当地的雷司令。在讨论了技术细节后，他们签署了《关于逐步取消共同边界检查的协定》，这就是后来闻名世界的《申根协定》的雏形。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，签署只是开始。由于涉及复杂的法律协调和安全保障（尤其是如何应对跨国犯罪），协定的真正实施被推迟了整整十年。直到1995年3月26日，首批七个国家才正式取消了相互间的边境检查。谁也没想到，这个以“申根”命名的新体系会像滚雪球般扩大，如今已涵盖二十多个欧洲国家。而申根村自己，则经历了一场奇特的“身份觉醒”。它突然被推到了世界地图上，成为无数教科书、新闻报导中的名词。村民们一开始是惊讶，甚至有些不知所措，但很快，他们以其特有的务实和幽默接纳了这一切。他们依然是酿酒师和果农，但同时，也成了“欧洲统一”活生生的门面。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，村子里陆续建起了纪念场所：河岸上立起了三根高大的不锈钢柱，象征着法国、德国和卢森堡三国边界的交汇；一块厚重的花岗岩纪念碑上，镌刻着缔约国的名字和欧盟的星环；后来，又设立了“欧洲博物馆”，用互动的方式讲述这段历史。但最重要的是，村庄的本色从未改变。你依然可以走进家族经营了四代人的酒窖，品尝用同样古老的葡萄品种酿出的酒，听庄主用浓重的口音说：“自由旅行很好，但让酒变得美好的，是这里的‘风土’，是我们脚下这片永远不会移动的土地。”两种叙事——宏大的欧洲理想与微小的本地传统，在这里达成了最动人的和解。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要深度感受申根，建议安排一整天时间，从清晨到日暮。上午九点左右抵达最佳，此时旅行团尚未涌入，村庄沐浴在柔和的晨光中，适合静静体会它的本真面貌。整体游览节奏应极其缓慢，以“漫步”和“体验”为主，而非“打卡”。路线设计为一条沿着莫泽尔河岸的环形漫步，串联起自然风光、历史纪念地和本土生活场景，总耗时约6-8小时，其中包含一次悠长的午餐和至少两次品酒体验。这样的安排能让你同时触摸到申根的“肉体”（葡萄酒村）与“灵魂”（欧洲象征）。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周末午后可能会有较多自驾前来的周边游客，想拍摄宁静的河畔景色最好安排在上午。参观家庭酒庄品酒时，无须购买昂贵酒款，礼貌询问品尝最基础的干型雷司令即可，庄主通常很热情。村庄道路平坦，但前往葡萄园观景台有小段缓坡，建议穿舒适的步行鞋。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在村口的免费停车场，深吸一口混合着葡萄藤与河水气息的空气，开始你的漫步。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先走向莫泽尔河畔，找到那三根高耸的银色钢柱纪念碑，用手触摸冰凉的不锈钢，感受脚下土地连接着三个国家。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着河岸向西漫步，留意对岸德国村庄的尖顶教堂和法国方向的缓坡，在“三国交界点”的标志牌前拍一张富有哲学意味的纪念照。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拐进村里安静的小街，寻找一家门口挂着古老招牌的家庭式酒庄，推门进去体验一次地道的摩泽尔雷司令品鉴。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在河畔的露天餐厅找一张能看到水光的桌子，点一份用本地白葡萄酒烹制的河鱼，配上卢森堡土豆煎饼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后去“欧洲博物馆”花上一小时，通过那些老照片和互动屏幕，深入了解协定签署前后那些不为人知的细节。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从博物馆出来，沿着葡萄园间的徒步小径向山丘上走一段，回头俯瞰申根村全景以及如玉带般的莫泽尔河。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落时分回到河畔，在“申根协定”签署原址的纪念石碑旁坐下，看夕阳将河水和对岸的葡萄园染成金红色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`莫泽尔河畔仰拍三根钢柱纪念碑`}</h4>
                  <p className="text-sm text-gray-700">{`选择晴朗的清晨，阳光从东侧照射，站在纪念碑南侧的草坪上，用广角镜头低角度仰拍，将银色的钢柱、蓝天和部分河面收入画面，构图极具冲击力和象征性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`葡萄园山腰俯瞰村庄与三国远景`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点光线最为柔和时，沿着村后标有“Schengen-Weinwanderweg”的葡萄园小径上行约15分钟，有一处自然形成的观景台，可拍摄申根村红色屋顶群、蜿蜒的莫泽尔河以及对岸德、法两国领土的辽阔全景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“公主号”酿酒船纪念点侧拍`}</h4>
                  <p className="text-sm text-gray-700">{`在村庄主码头附近，找到标记协定签署原址的解说牌和纪念石，下午利用侧光拍摄，将解说牌的文字、纪念石与背景中静静流淌的莫泽尔河一同构入图中，故事感极强。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`欧洲广场上的环形地砖与教堂钟楼`}</h4>
                  <p className="text-sm text-gray-700">{`黄昏“蓝调时刻”（日落后半小时内），在欧洲游客中心前的环形广场上，地面铺有欧盟星环图案，蹲下以低角度拍摄，将发光的星环地砖作为前景，远处村庄教堂的温暖灯光钟楼作为背景，冷暖色调对比迷人。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效消除河面及植物叶面的反光，让葡萄园和河景的色彩更饱和浓郁。拍摄当地居民或酒庄内部场景前，请务必先微笑并征得对方同意，这是一种基本的尊重。无人机飞行在卢森堡受到严格管制，尤其在历史地标和边境区域，未经特别许可请勿起飞。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河畔老屋民宿`}</h4>
                  <p className="text-sm text-blue-800">{`直接住在莫泽尔河岸边的百年石砌老屋里，房东是一对退休的酿酒师夫妇，早餐会奉上自家果园的果酱和新鲜烘培的面包，晚上能听到温柔的流水声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`中世纪修道院改造的精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`位于邻近的雷米希镇，由一座13世纪修道院精心修复而成，房间拥有原始的拱顶石墙和现代设计家具，酒店餐厅的酒单囊括了整个摩泽尔产区的精华。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`山顶葡萄园庄园酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在申根村背后的山丘顶端，被自家的葡萄园环绕，每个房间都带一个可以俯瞰三国风景的露台，傍晚酒店会组织住客在葡萄园中品酒散步。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济友好的河景青年旅舍`}</h4>
                  <p className="text-sm text-purple-800">{`在申根村步行可达的距离内，有一家干净现代的青旅，宿舍和私人房间都能看到河景，公共厨房设施完善，很容易结识来自世界各地的背包客。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`申根村本身住宿选择非常有限且很快订满，强烈建议提前数月预订，或将范围扩大到车程10分钟内的雷米希镇，选择更多。莫泽尔河谷治安极好，夜晚独自在河畔散步也非常安全。如果夏季来访，优先选择带空调的住宿，因为河谷地带夏日可能较为闷热。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开申根的时候，我的背包里多了一瓶当地小酒庄产的晚收雷司令，酒标朴素，只印着村庄的名字和年份。我一直在想，这份改变了数亿人生活方式的《申根协定》，其精神内核或许早已藏在这片土地的风土里。酿酒师们最懂得“开放”与“交流”的意义：不同的葡萄品种可以混酿，河对岸的种植技术可以借鉴，最好的酒要分享给远道而来的客人。那份在品酒船上签署的文件，与其说是一个政治发明，不如说是将这种沿河而生、因酒而兴的文化本能，提炼并升华到了整个大陆的尺度。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个充斥着壁垒与隔阂言论的时代，申根的存在，像是一个温柔而坚定的提醒。它告诉你，伟大的理念不必诞生于宏伟的殿堂，它可以来自一条河、一艘船、一群热爱自己家园但也向往更广阔连接的人们。这里没有震撼眼球的奇观，但它给予旅人的，是一种更深沉的、关乎信任与共享的感动。你会看到，边界可以消失，而家园感却得以在更大的维度上重建。每一位热爱深度游的旅人，都该来这个村子走一走，不是为了护照上多一个戳，而是来触摸一下现代欧洲最美好理想的、那带着酒香与泥土气的原始温度。在这里，你会相信，连接远比隔绝，更接近人性的本质。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/beaufort-castles" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博福尔城堡遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Beaufort Castles</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/echternach-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃希特纳赫修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Echternach Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vianden-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维安登城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vianden Castle</p>
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
