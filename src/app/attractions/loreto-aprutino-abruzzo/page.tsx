import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '洛雷托阿普鲁蒂诺 Loreto Aprutino｜橄榄油与陶瓷的千年山城，未被游客惊扰的意大利灵魂 - 最佳欧洲景点',
  description: '车子在阿布鲁佐起伏的绿色丘陵间盘旋而上，当洛雷托阿普鲁蒂诺那一片蜜糖色的石屋群突然从橄榄树林的掩映中浮现时，你会忍不住深吸一口气。它不像托斯卡纳的那些明星小镇那样被精心妆点，而是带着一种粗粝而真实的美，仿佛就是从这片赭色土地里自然生长出来的。摇下车窗，第一口呼吸到的空气是清冽的，混杂着远处松林、干燥',
}

export default function LoretoAprutinoAbruzzoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '意大利', href: '/destinations/europe' },
            { label: '洛雷托阿普鲁蒂诺', href: '/destinations/europe' },
            { label: '洛雷托阿普鲁蒂诺', href: '/attractions/loreto-aprutino-abruzzo' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`洛雷托阿普鲁蒂诺・Loreto Aprutino・意大利・洛雷托阿普鲁蒂诺`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在阿布鲁佐起伏的绿色丘陵间盘旋而上，当洛雷托阿普鲁蒂诺那一片蜜糖色的石屋群突然从橄榄树林的掩映中浮现时，你会忍不住深吸一口气。它不像托斯卡纳的那些明星小镇那样被精心妆点，而是带着一种粗粝而真实的美，仿佛就是从这片赭色土地里自然生长出来的。摇下车窗，第一口呼吸到的空气是清冽的，混杂着远处松林、干燥的石头和一丝隐约的、清苦的草本香气——那是成千上万棵橄榄树在阳光下蒸腾出的气息。
把车停在城墙外的空地，步行穿过古老的石门，你就进入了另一个时间维度。脚下是被几个世纪的人来人往磨得光滑甚至有些凹陷的石板路，缝隙里长出顽强的青草。耳边异常宁静，只有自己的脚步声、远处某扇木窗被推开的吱呀声，以及不知从哪个庭院飘来的模糊意大利语交谈声和锅铲的轻响。这里没有旅游团的喇叭声，生活是这里绝对的主角。老太太们坐在自家门槛上摘菜，大叔在巷子口的小工坊里敲打着什么，空气里飘着午餐的蒜香和番茄酱的酸甜味。这座城不是用来“观看”的布景，它依然在有力地跳动，而它的心跳，就是橄榄油和陶土。
它的核心魅力正在于此：一种极致的“在地性”。所有让你心动的事物，都深深扎根于此地。那金黄透亮、带着新鲜青草和杏仁气息的顶级橄榄油，就来自你窗外山坡上那些遒劲的老树。那些色彩浓郁、描绘着太阳、葡萄和神鸟图案的彩陶盘子与酒壶，仍由本地家族在古老的窑炉里烧制。在这里，你品尝的风味、触摸的器物、走过的街道，是一个完整不可分割的生态系统，讲述着人与土地之间古老而珍贵的契约。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子在阿布鲁佐起伏的绿色丘陵间盘旋而上，当洛雷托阿普鲁蒂诺那一片蜜糖色的石屋群突然从橄榄树林的掩映中浮现时，你会忍不住深吸一口气。它不像托斯卡纳的那些明星小镇那样被精心妆点，而是带着一种粗粝而真实的美，仿佛就是从这片赭色土地里自然生长出来的。摇下车窗，第一口呼吸到的空气是清冽的，混杂着远处松林、干燥的石头和一丝隐约的、清苦的草本香气——那是成千上万棵橄榄树在阳光下蒸腾出的气息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "把车停在城墙外的空地，步行穿过古老的石门，你就进入了另一个时间维度。脚下是被几个世纪的人来人往磨得光滑甚至有些凹陷的石板路，缝隙里长出顽强的青草。耳边异常宁静，只有自己的脚步声、远处某扇木窗被推开的吱呀声，以及不知从哪个庭院飘来的模糊意大利语交谈声和锅铲的轻响。这里没有旅游团的喇叭声，生活是这里绝对的主角。老太太们坐在自家门槛上摘菜，大叔在巷子口的小工坊里敲打着什么，空气里飘着午餐的蒜香和番茄酱的酸甜味。这座城不是用来“观看”的布景，它依然在有力地跳动，而它的心跳，就是橄榄油和陶土。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的核心魅力正在于此：一种极致的“在地性”。所有让你心动的事物，都深深扎根于此地。那金黄透亮、带着新鲜青草和杏仁气息的顶级橄榄油，就来自你窗外山坡上那些遒劲的老树。那些色彩浓郁、描绘着太阳、葡萄和神鸟图案的彩陶盘子与酒壶，仍由本地家族在古老的窑炉里烧制。在这里，你品尝的风味、触摸的器物、走过的街道，是一个完整不可分割的生态系统，讲述着人与土地之间古老而珍贵的契约。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`洛雷托阿普鲁蒂诺`} />
                <InfoRow label="英文名称" value={`Loreto Aprutino`} />
                <InfoRow label="正式名称" value={`Loreto Aprutino`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`洛雷托阿普鲁蒂诺`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`阿布鲁佐大区保存最完好的中世纪山城之一，也是意大利特级初榨橄榄油的核心产区与古老陶瓷艺术的重镇。`} />
                <InfoRow label="建筑特色" value={`典型的意大利山城格局，房屋层层叠叠如梯田般环绕山丘，中心矗立着中世纪城堡与古老教堂，狭窄的阶梯小巷（vicoli）和拱门串联起整个社区。`} />
                <InfoRow label="建筑风格" value={`以中世纪和文艺复兴时期的民间石砌建筑为主，混杂着后期巴洛克式的教堂装饰元素，整体呈现出质朴而坚固的乡土风格。`} />
                <InfoRow label="文化价值" value={`这里生动展示了土地（橄榄种植）、手工艺（陶瓷制作）与社区生活如何历经千年仍紧密交织，是理解意大利内陆“慢生活”哲学与匠人精神的活态博物馆。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城全天开放。主要室内景点如奇科-巴贝里尼宫陶瓷博物馆的开放时间为周二至周日上午10点至下午1点，下午3点至6点（冬季可能缩短至下午5点）；夏季（7-8月）可能增加晚间开放时段。城堡参观通常需预约或跟随当地导游安排。建议行前查询市政官网或当地旅游信息中心确认，许多小型工坊和橄榄油庄园的参观需提前电话预定。`} />
              <InfoRow label="门票价格" value={`进入古城本身免费。奇科-巴贝里尼宫陶瓷博物馆门票约5欧元，学生及65岁以上老人优惠票价约3欧元。城堡参观费用根据导游行程约10-15欧元。部分橄榄油厂提供付费品鉴之旅，价格在15-25欧元不等，通常包含导览、品鉴和一小瓶橄榄油纪念品。`} />
              <InfoRow label="地址" value={`Piazza Garibaldi, 1, 65014 Loreto Aprutino PE, Italy`} />
              <InfoRow label="交通方式" value={`最近的主要机场是佩斯卡拉阿布鲁佐国际机场，距离约50公里。从机场出发，最便捷的方式是租车自驾，沿SS151公路向西南方向行驶，约1小时车程即可抵达这座山城。若乘坐公共交通，可从佩斯卡拉火车站乘坐区间火车至洛雷托阿普鲁蒂诺站，班次较为稀疏，每天约4-6班，车程约40分钟；但请注意，火车站位于山下的新城区，需再转乘出租车或预约当地接驳车上山至古城中心，这段盘山路约10分钟。建议自驾，能自由探索周边橄榄园和山谷景色。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "洛雷托的故事，始于山丘本身的战略意义。早在罗马时代之前，这片俯瞰着肥沃河谷与东西交通要道的山脊就有人定居。但真正赋予它雏形的，是中世纪的动荡。大约在10-11世纪，随着沿海地区频繁遭受萨拉森海盗袭击，内陆的山丘成为人们寻求庇护的自然选择。居民们用当地采掘的石头，依着山势一圈圈建造房屋和防御墙，最终形成了一个易于防守的蜗牛壳状社区。山顶的位置留给了权力与信仰的中心——城堡和教堂。13世纪，这里成为著名的阿奎诺家族领地的一部分，开始了相对稳定的发展期。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，真正塑造了洛雷托经济命脉与文化身份的，并非某位叱咤风云的君主，而是两种看似平常的物产：橄榄与陶土。中世纪晚期，本笃会修士可能引入了更系统的橄榄种植技术。阿布鲁佐独特的微气候——凉爽的山风与充足的日照结合，使得这里的橄榄果香气格外复杂，酸度适中。橄榄油很快超越了自给自足的范畴，成为重要的贸易商品。本地贵族，比如后来的巴贝里尼家族（对，就是那个出了教皇的罗马豪门的分支），投资建设了大型橄榄压榨作坊。你如今在古城里看到的许多古老石屋的地下室，曾经都是储藏橄榄油的油窖，石壁上仍渗透着无法抹去的油润光泽。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "几乎与橄榄油产业同时蓬勃发展的，是陶瓷艺术。这得益于山丘周边优质的陶土矿。起初，陶器是实用的：储存橄榄油的陶罐、家庭用的水瓮和餐具。但艺术的火焰很快在实用中燃起。文艺复兴时期，受到邻近地区如卡斯泰利陶瓷的影响，洛雷托的陶匠开始尝试锡釉彩绘。他们发展出了独特的 iconography：灿烂的黄色太阳（象征此地充沛的阳光）、深蓝色的葡萄藤（代表当地的葡萄酒）、风格化的鸟类和花卉，构图饱满而充满生命力。这些图案不是凭空想象的，它们直接来源于窗外的田园风光和日常的丰收喜悦。陶瓷工坊往往世代相传，父亲将釉料配方和笔触秘诀口授给儿子。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "近代，洛雷托也经历了统一战争和两次世界大战的冲击，但偏居一隅的位置某种程度上保护了它。它没有经历大规模的工业化改造，传统的农业节奏和手工艺在家族中顽强存续。上世纪下半叶，当意大利许多农村地区面临人口流失时，洛雷托的居民却选择留下，并开始有意识地复兴他们的传统。年轻的农学家用现代科学培育古老的橄榄树种，年轻的艺术家重新解读传统的陶瓷图案。正是这种深厚的根基与主动的传承，使得你今天看到的洛雷托，不是一个凝固的化石，而是一棵老树发出的新枝，生机勃勃。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味洛雷托，请务必安排一整天的时间，并抱着散步和发现的心态。建议在上午九点左右抵达，这时阳光正好洒满东面的房屋，小城刚刚苏醒，店铺陆续开门，光线最适合拍照。整个游览节奏应该非常缓慢，上午专注于探索城堡、主教堂和陶瓷博物馆，沉浸在其历史与艺术氛围中。中午一定要在当地 trattoria 享用漫长午餐，品尝用本地橄榄油烹饪的菜肴。下午的节奏更慢，可以安排参观一家橄榄油厂或陶瓷工坊，深入了解制作过程，然后任由自己在迷宫般的小巷中迷失，感受日常生活的脉动。傍晚时分，驱车或步行到古城对面的山坡，等待日落金色的光芒将整个石头城染成琥珀色，为这一天画上完美句号。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周六上午古城中心有小型市集，能买到最新鲜的本地农产品和手工奶酪，是融入当地氛围的好机会，但主干道会比较拥挤。
参观橄榄油厂或陶瓷工坊务必提前电话预约，直接上门很可能吃闭门羹，这些多是家庭经营，时间安排很灵活。
穿着绝对舒适的平底鞋，这里的路全是凹凸不平的石头台阶和陡坡，高跟鞋会是一场灾难，也便于你随时走进橄榄园田埂。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主城门 Porta da Capo 进入，让脚步带领你沿着最宽阔的 Via del Baio 向上，感受石板路的坡度与两旁斑驳石墙带来的时光倒流感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直前往山顶的卡斯泰洛（城堡）广场，虽然城堡内部不常开放，但站在广场边缘的矮墙旁，你能拥有俯瞰整个阿布鲁佐丘陵与橄榄园海洋的360度全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`转身走进毗邻的圣母领报主教座堂，在幽暗静谧的内部寻找那些珍贵的木雕唱诗班座椅和祭坛画，让眼睛适应从明亮到昏暗的光线变化。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山几步便来到奇科-巴贝里尼宫，花上一个小时沉浸在陶瓷博物馆里，近距离观察那些从中世纪到近代的彩陶珍宝，读懂图案里的古老故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午餐时间，随意钻进一条小巷，找一家门口写着“Cucina Casareccia”（家常菜）的小餐馆，点一份用“Dritta”橄榄油淋透的烤面包片和手工“Chitarra”意面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午预约参观一家家族经营的橄榄油厂，在凉爽的车间里听主人讲解从采摘到冷压的全过程，最后让那口辛辣中带苦的崭新油液在舌尖绽放。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访一家仍在运作的陶瓷工坊，看匠人如何将一团泥巴在转盘上幻化成形，再用细笔蘸取矿物颜料画出那些传承了几个世纪的太阳与藤蔓。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前，让自己彻底迷失在那些名为“vicolo”的仅容一人通过的阶梯小巷里，聆听阳台上的天竺葵被风吹动的声音，邂逅一扇精美的古老门环或墙角的圣母壁龛。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡广场西侧矮墙边`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，以广阔的橄榄园山谷为前景，将远处层叠的石头房屋和城堡塔楼框入镜头，能拍到温暖的金色侧光与逐渐亮起的万家灯火。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣母领报教堂门廊下`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点后，阳光会斜射进柱廊，站在阴影里向外拍摄拱门框住的广场生活场景，如聊天的人群、驶过的摩托车，形成强烈的明暗对比与故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`陶瓷工坊的窗台`}</h4>
                  <p className="text-sm text-gray-700">{`征得主人同意后，将色彩斑斓、等待晾干的陶盘陶罐作为前景，透过它们拍摄窗外古老的石墙和一片蓝天，画面充满手工的温度与生命力。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从 SS151 公路某个弯道回望`}</h4>
                  <p className="text-sm text-gray-700">{`在离开或抵达时，寻找一个能安全停车的弯道，用长焦镜头压缩空间，拍摄整个山城屹立于丘陵之巅的远景，清晨常有薄雾环绕，仙境感十足。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄当地居民，尤其是老人和在工坊里工作的匠人，请务必先微笑并用手势询问，获得默许后再拍摄，尊重他们的隐私和生活节奏。`}</li>
                <li>• {`小巷中光线复杂，建议使用RAW格式拍摄，以便后期能更好地调整暗部细节和高光，还原石材质感与色彩。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`古城核心体验`}</h4>
                  <p className="text-sm text-blue-800">{`入住由16世纪贵族宫殿改造的精品酒店，房间拥有原始的石头拱顶和厚重的木门，早餐能尝到房东自家庄园产的橄榄油和果酱。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`橄榄园中的农庄`}</h4>
                  <p className="text-sm text-green-800">{`住在古城外步行可达的橄榄园农庄，独立石屋带厨房，晚上安静得只能听见风声和虫鸣，白天可以跟随主人一起去田间劳作学习。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`山下新城区现代公寓`}</h4>
                  <p className="text-sm text-yellow-800">{`如果自驾且追求便利，可以选择山下新城区的现代化公寓，停车方便，空间宽敞，开车上山仅需五分钟，性价比很高。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`艺术家之家民宿`}</h4>
                  <p className="text-sm text-purple-800">{`租住本地陶瓷艺术家或画家的工作室兼住所，房间里装饰着主人的作品，能听到最地道的艺术故事，甚至可能受邀参加工作室的小型聚会。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "古城内的住宿数量非常有限，且大多不能停车（需停在城外指定区域），务必提前数月预订，尤其是夏季和橄榄收获季（10-11月）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果选择农庄住宿，请准备好面对真正的乡村宁静，晚上几乎没有商业活动，但星空会无比璀璨，是城市无法想象的体验。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开洛雷托阿普鲁蒂诺时，我背包里多了一小瓶深绿色的橄榄油和一个手绘的陶制小碟。但我知道，我带走的远不止这些。我带走的，是一种关于“深厚”的体验。在这个凡事求新求快的时代，这里的一切都在反向而行，追求着与时间的深度结合。每一滴橄榄油，是当年阳光雨露与百年老树根系共同作用的结果；每一笔陶瓷上的彩绘，都链接着数百年前某个无名匠人的手腕动作。在这里，你能触摸到一种沉静的信心——相信土地不会辜负辛勤，相信手艺可以穿越世代，相信一个社区可以围绕最质朴的生产方式紧密凝聚，历经风雨而容颜不改。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它或许没有令人瞠目的世界级地标，但它拥有的，是更难得的完整性与真实性。对于厌倦了景点打卡、渴望理解一地之魂的旅人来说，洛雷托是一剂温柔的解毒剂。它教会你用舌尖去品尝风土，用指尖去触摸传承，用一颗慢下来的心去漫步和观察。它让你相信，世界上还有一些角落，古老的生活方式不是表演，而是依然鲜活的呼吸。来到这里，你不是一个旁观者，你被邀请进入一个延续了千年的循环之中——那橄榄树年年结出的新果，那陶土被不断重塑的生命，以及山丘上那盏在夜幕降临时，依旧为你、也为所有归家人点亮的温暖灯火。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/schmalkalden-city-guide" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施马尔卡尔登</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Schmalkalden</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sabbioneta-ideal-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨比奥内塔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sabbioneta</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/la-romieu" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉罗米约</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">La Romieu</p>
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
