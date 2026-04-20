import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '吉马良斯历史中心 Historic Centre of Guimarães｜葡萄牙的摇篮，每一步都踩在中世纪浪漫的石板路上 - 最佳欧洲景点',
  description: '当我第一脚踏上吉马良斯历史中心那些被岁月打磨得光滑如镜的黑色玄武岩石板路时，耳边仿佛响起了一声悠长的叹息——那是历史在呼吸。清晨的阳光斜斜地切过狭窄的“Rua de Santa Maria”街道，两旁的白色房屋被染上蜂蜜色的光晕，那些木制窗棂和锻铁阳台的影子，在古老的墙面上拉出长长的、安静的几何图形...',
}

export default function HistoricCentreGuimaraesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '吉马良斯历史中心', href: '/attractions/historic-centre-guimaraes' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`吉马良斯历史中心・Historic Centre of Guimarães・葡萄牙・吉马良斯`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当我第一脚踏上吉马良斯历史中心那些被岁月打磨得光滑如镜的黑色玄武岩石板路时，耳边仿佛响起了一声悠长的叹息——那是历史在呼吸。清晨的阳光斜斜地切过狭窄的“Rua de Santa Maria”街道，两旁的白色房屋被染上蜂蜜色的光晕，那些木制窗棂和锻铁阳台的影子，在古老的墙面上拉出长长的、安静的几何图形。空气里有刚烤好的“pão de centeio”（黑麦面包）的微酸香气，混合着从街角花店溢出的湿润泥土味，还有一种属于石头、苔藓和时间本身的、清冷而宁静的气息。
这里不像一个博物馆，更像一个刚刚苏醒的古老社区。老太太们提着网兜从面包房出来，低声交谈着；店铺的老板不紧不慢地用长杆撑开百叶窗，铁钩与木头发出的碰撞声清脆又熟悉。我跟着本地人的脚步，不知不觉就迷失在迷宫般的巷弄里。每一个转角都可能藏着一座带徽章的贵族宅邸门户，或是一个贴着蓝白瓷砖（Azulejos）的静谧内院。生活的烟火气与历史的厚重感在这里没有界限，你看到的是被继续使用着、热爱着的历史，而不是被玻璃罩起来的标本。
最打动我的，是那种无处不在的“尺度感”。街道的宽度刚好容得下亲密的交谈，广场的大小恰好能聚集社区的人群，却又不会让人感到空旷或压迫。站在中心的“橄榄树广场”（Largo da Oliveira），看着那座建于14世纪的哥特式拱廊“Salado纪念碑”，我忽然明白了什么是“城市的客厅”。老人们坐在长椅上晒太阳，鸽子在石砖地上踱步，咖啡馆的遮阳伞下传来瓷器轻碰的叮当声。这一切都围绕着广场中央那棵象征性的橄榄树（尽管已是替代品）发生，仿佛千年来，社区生活的核心从未改变。这里没有里斯本的喧嚣，没有波尔图的酒香四溢，它拥有的是一种沉静的、根源性的自信。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当我第一脚踏上吉马良斯历史中心那些被岁月打磨得光滑如镜的黑色玄武岩石板路时，耳边仿佛响起了一声悠长的叹息——那是历史在呼吸。清晨的阳光斜斜地切过狭窄的“Rua de Santa Maria”街道，两旁的白色房屋被染上蜂蜜色的光晕，那些木制窗棂和锻铁阳台的影子，在古老的墙面上拉出长长的、安静的几何图形。空气里有刚烤好的“pão de centeio”（黑麦面包）的微酸香气，混合着从街角花店溢出的湿润泥土味，还有一种属于石头、苔藓和时间本身的、清冷而宁静的气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里不像一个博物馆，更像一个刚刚苏醒的古老社区。老太太们提着网兜从面包房出来，低声交谈着；店铺的老板不紧不慢地用长杆撑开百叶窗，铁钩与木头发出的碰撞声清脆又熟悉。我跟着本地人的脚步，不知不觉就迷失在迷宫般的巷弄里。每一个转角都可能藏着一座带徽章的贵族宅邸门户，或是一个贴着蓝白瓷砖（Azulejos）的静谧内院。生活的烟火气与历史的厚重感在这里没有界限，你看到的是被继续使用着、热爱着的历史，而不是被玻璃罩起来的标本。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动我的，是那种无处不在的“尺度感”。街道的宽度刚好容得下亲密的交谈，广场的大小恰好能聚集社区的人群，却又不会让人感到空旷或压迫。站在中心的“橄榄树广场”（Largo da Oliveira），看着那座建于14世纪的哥特式拱廊“Salado纪念碑”，我忽然明白了什么是“城市的客厅”。老人们坐在长椅上晒太阳，鸽子在石砖地上踱步，咖啡馆的遮阳伞下传来瓷器轻碰的叮当声。这一切都围绕着广场中央那棵象征性的橄榄树（尽管已是替代品）发生，仿佛千年来，社区生活的核心从未改变。这里没有里斯本的喧嚣，没有波尔图的酒香四溢，它拥有的是一种沉静的、根源性的自信。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`吉马良斯历史中心`} />
                <InfoRow label="英文名称" value={`Historic Centre of Guimarães`} />
                <InfoRow label="正式名称" value={`Historic Centre of Guimarães`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`吉马良斯`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`被誉为“葡萄牙民族的摇篮”，葡萄牙的第一位国王阿方索·恩里克斯在此出生并由此开启了建国征程。`} />
                <InfoRow label="建筑特色" value={`完好保存了从中世纪到十九世纪的民用建筑演变脉络，从古朴的石砌贵族宅邸到装饰着精美铁艺阳台和瓷砖的联排房屋，和谐共处。`} />
                <InfoRow label="建筑风格" value={`以中世纪结构和布局为核心，融合了罗马式、哥特式、曼努埃尔式以及后来的巴洛克和新古典主义元素，形成独特的葡萄牙北部建筑风貌。`} />
                <InfoRow label="文化价值" value={`一座活生生的中世纪城市标本，其有机的街巷网络、公共空间与历史建筑共同诠释了葡萄牙独特民族认同的形成过程。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`历史中心为全天24小时开放的公共区域，其街道、广场可自由漫步。区域内的主要景点（如吉马良斯城堡、布拉干萨公爵宫、圣米格尔教堂等）有独立开放时间，通常为夏季（4月至10月）上午10点至下午6点，冬季（11月至3月）上午9点至下午5点，周一普遍闭馆。重要节日如圣诞节和元旦可能全天关闭。`} />
              <InfoRow label="门票价格" value={`进入历史中心街区本身免费。内部主要景点需单独购票：吉马良斯城堡门票约2欧元；布拉干萨公爵宫门票约5欧元；购买联票（城堡+公爵宫+阿尔贝托·桑帕约博物馆）约6欧元，性价比更高。青年、学生及65岁以上老人享有半价优惠，12岁以下儿童免费。部分博物馆在每个月的第一个周日免费开放。`} />
              <InfoRow label="地址" value={`Largo da Oliveira, 4800-438 Guimarães, Portugal`} />
              <InfoRow label="交通方式" value={`最便捷的方式是从波尔图出发。从波尔图弗朗西斯科·圣卡塔琳娜地铁站旁的巴士总站（Campo 24 de Agosto）乘坐直达大巴（运营商如“GetBus”或“Rede Expressos”），车程约1小时，班次频繁（约每半小时至一小时一班），票价约8欧元。或从波尔图-坎帕汉火车站乘坐火车，约1.5小时抵达吉马良斯火车站，出站后步行15-20分钟即可进入历史中心核心区。自驾可将车停在历史中心外围的停车场（如“Parque da Cidade”），然后步行进入。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲吉马良斯的故事，我们得回到公元10世纪。那时，这片土地还在莱昂王国的版图内，为了抵御北方的摩尔人和诺曼人入侵，一位名叫穆马多娜·迪亚斯的贵族妇女在此建造了一座修道院。围绕这座修道院，一个定居点逐渐形成，这就是吉马良斯的雏形。它的名字“Guimarães”很可能就源于这位奠基者“Vimaranes”的变体。但真正让这个小城登上历史舞台的，是一场改变伊比利亚半岛格局的家庭纷争。勃艮第的亨利伯爵被封为葡萄牙伯爵，并将宫廷设在了吉马良斯。他的儿子，就是后来大名鼎鼎的阿方索·恩里克斯。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`传说阿方索·恩里克斯就出生在如今圣米格尔教堂旁的一座简单塔楼里。这位充满雄心的年轻伯爵不甘心只做莱昂王国的一个封臣。在12世纪30年代，他与自己的母亲（也是他的政治对手）特蕾莎夫人发生了激烈冲突。据说，决定性的“圣马梅德战役”就发生在吉马良斯城外。阿方索赢得了胜利，并在1139年宣布自己为葡萄牙国王，开启了独立王国的征程。因此，吉马良斯城堡——那座由他母亲扩建的、敦实的罗马式堡垒，不仅仅是一座军事建筑，它更像一个石头铸就的“子宫”，孕育了一个国家的独立梦想。城墙上那句著名的铭文“Aqui nasceu Portugal”（葡萄牙诞生于此）绝非虚言。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`独立后的几个世纪，吉马良斯虽然不再是政治中心，但作为王室青睐的住所和北方贵族的重镇，它继续繁荣发展。15世纪，第一任布拉干萨公爵在历史中心北侧的山坡上修建了奢华的宫殿，那融合了北欧与摩尔风格的建筑，见证了葡萄牙航海时代前夕贵族生活的奢华。城市的肌理也在生长，那些我们今天漫步的街道，如连接城堡与旧修道院的“Rua de Santa Maria”，就是中世纪城市规划的经典范例。工匠、商人、修士和贵族在这里比邻而居，形成了功能混合、层次丰富的社区。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间来到19世纪和20世纪，当葡萄牙许多古老城市在现代化浪潮中改头换面时，吉马良斯却因为相对的“边缘化”而意外地保存完好。它的历史中心没有遭到大刀阔斧的拆建。也正因如此，当你在那些小巷中穿行时，你能清晰地“阅读”到从罗马式到新古典主义的建筑层理，就像阅读一本立体的历史教科书。1995年，它被列入联合国教科文组织世界遗产名录，评语精准地捕捉了它的价值：它“ exceptionally well-preserved example of the evolution of a medieval settlement into a modern town”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如今，行走其中，你能感受到历史不是僵硬的过去式。学生们在古老的拱廊下写生，艺术家的工作室藏在老宅深处，时尚咖啡馆开在有着数百年历史的石墙内。它没有被做成一个冰冷的化石，而是在持续的、有尊严的日常生活中，完成了历史的传承。这或许就是吉马良斯最了不起的地方：它不仅见证了葡萄牙的诞生，更用一种温柔而坚韧的方式，活出了历史在当下的最佳模样。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受吉马良斯的灵魂，我强烈建议安排一整天时间，并务必在清晨抵达。清晨的光线柔和，游客稀少，你能独享古城苏醒时的宁静与魔力。整体的游览节奏应该是“先高后低，先外后内”：上午精力充沛时，先去俯瞰全城的制高点，探访城堡与宫殿，理解其宏大的历史叙事；午后则沉浸在中世纪街巷的细节与日常氛围中，慢慢品味，累了就在广场咖啡馆发呆。这样的安排张弛有度，既涵盖了主要地标，又留足了迷失与发现的空间。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`历史中心的石板路很美但也很滑，尤其是雨后，请务必穿一双舒适防滑的鞋子。
许多小博物馆和教堂中午有较长的闭馆休息时间（通常从12:30到14:00），规划室内参观时请注意避开。
遇到热情的当地人邀请你去某家“亲戚的店”，请礼貌但坚定地婉拒，这里民风淳朴，但基本的旅行警惕心仍需保持。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`趁着晨雾尚未完全散去，从历史中心边缘沿着缓坡步行至吉马良斯城堡，用手触摸那些冰冷粗粝的巨石，想象阿方索·恩里克斯童年在此眺望的风景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡步行一分钟，探访那座小巧古朴的圣米格尔教堂，在据说曾为葡萄牙第一位国王受洗的罗马式洗礼盆前静立片刻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山前往宏伟的布拉干萨公爵宫，沉浸在那些高耸的砖砌烟囱、华丽的宴会厅和收藏的挂毯所展现的15世纪贵族奢华生活中。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从公爵宫后门走出，正式踏入历史中心的核心迷宫，沿着标志性的“Rua de Santa Maria”石板路向下漫步，仔细观察每一扇门楣上的家族徽章和古老的石窗。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`让这条古老街道将你自然引至心脏地带——橄榄树广场，在哥特式拱廊下的露天座椅点一杯浓咖啡，看广场上的生活剧慢慢上演。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从广场穿过另一个美丽的拱门，进入圣蒂亚哥广场，这里氛围更开阔，是欣赏连绵的葡式联排房屋和市政厅古典立面的绝佳地点。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`任由好奇心带领你钻进任何一条吸引你的狭窄侧巷，比如“Rua da Rainha”，去发现那些隐藏的瓷砖壁画、静谧的内院和家庭经营的小店铺。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在傍晚时分，登上历史中心南侧的“Penha”山（可乘缆车），在落日余晖中回望整个吉马良斯古城，看橙色的屋顶在暮色中连绵成一片温暖的海洋。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`布拉干萨公爵宫庭院仰拍角楼`}</h4>
                  <p className="text-sm text-gray-700">{`下午三点后的侧光时分，站在庭院一角仰拍那些独特的圆锥形砖砌烟囱，以一角蓝天为背景，能拍出极具几何美感和历史感的画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣米格尔教堂门框取景城堡`}</h4>
                  <p className="text-sm text-gray-700">{`站在圣米格尔教堂低矮的罗马式门洞内，将古老的石质门框作为前景画框，对准远处山丘上的吉马良斯城堡，能构图出一幅“穿越之门”般的经典历史画卷。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`橄榄树广场拱廊柱廊光影`}</h4>
                  <p className="text-sm text-gray-700">{`选择晴天的正午前后，阳光能直射入广场的哥特式拱廊，利用廊柱投下的强烈明暗交替的阴影，拍摄人物走过或静态的建筑细节，充满戏剧感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`Rua de Santa Maria街道纵深`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚的黄金时段，在这条主干道的某段较直的部分，利用两侧色彩柔和的古老房屋作为引导线，拍摄街道向远处延伸的纵深场景，捕捉石板路的光泽和生活的气息。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`Penha山顶全景俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时抵达山顶观景台，使用长焦镜头压缩空间，聚焦历史中心一片密集的橙红色屋顶，其中点缀着教堂的钟楼和城堡的轮廓，温暖而富有层次。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`当地人非常以他们的城市为荣，拍摄居民或店铺内部前，请务必先微笑并用手势征得同意，这是基本的尊重。`}</li>
                <li>• {`使用无人机拍摄在法律上受到严格限制，尤其在历史中心上空，未经特别许可请勿起飞，以免引起不必要的麻烦和罚款。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史中心心脏入住`}</h4>
                  <p className="text-sm text-blue-800">{`选择橄榄树广场或圣蒂亚哥广场旁由16世纪老宅修复的精品酒店，晚上等一日游游客散去后，你就能独占整个月光下的中世纪广场，听远处教堂钟声回荡。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色家庭旅馆体验`}</h4>
                  <p className="text-sm text-green-800">{`隐藏在Rua de Santa Maria小巷深处的家庭经营客栈，房间可能不大，但老板会把你当家人，早晨在古老的石砌厨房里和你分享地道的“葡萄”早餐和城市秘闻。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`现代设计融合古迹`}</h4>
                  <p className="text-sm text-yellow-800">{`位于历史中心边缘一栋经过大胆改造的历史建筑内的设计酒店，内部是极简当代风格，窗外却是古老的教堂尖顶，体验一场时空对话。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`宁静山间度假屋`}</h4>
                  <p className="text-sm text-purple-800">{`如果你自驾，可以选择位于Penha山半腰的独立石屋，被绿树环绕，拥有绝佳的私人露台，可以一边烧烤一边俯瞰山下灯火璀璨的古城夜景。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`历史中心内的住宿多为老建筑，隔音可能相对一般，但换来的是无与伦比的位置和氛围，怕吵的旅客可以准备一副耳塞。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季和周末是当地节庆的高峰期（如每年的“吉马良斯城市节”），住宿会很紧张且价格飙升，务必提前数月预订。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开吉马良斯许久，我发现自己最怀念的，不是某个具体的城堡或宫殿，而是一种“感觉”。那种走在被千万双脚磨光的石板路上，与千年前某个工匠或商人踏在同一个凸起或凹陷处的连接感。在这个追求新、快、炫的世界里，吉马良斯像一位沉静的长者，它不慌张，不炫耀，只是从容地活着，把历史穿在身上，如日常的衣衫。它告诉我们，根源不是用来朝拜的遥远图腾，而是可以行走其上、生活其中的坚实大地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了那些被精心包装、人潮汹涌的“必到景点”，如果你想寻找一个能让你安静下来，用指尖触摸时间纹理，并能真切感知到一个民族从哪里走来的地方，那么请来吉马良斯。它或许不会用惊艳的奇观冲击你，但它会用一种缓慢而坚定的渗透力，将一种关于起源、延续和归属的宁静力量，注入你的步伐和记忆里。这里不仅是葡萄牙的地理摇篮，更是一种生活哲学的摇篮：告诉我们，在飞速旋转的时代，如何与自己的过去温柔共存，并走得从容不迫。这，或许才是旅行能带给我们的，最深刻的礼物。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/alcobaca-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔科巴萨修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alcobaça Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/coimbra" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科英布拉老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Coimbra</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/batalha-monastery" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴塔利亚修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Batalha Monastery</p>
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
