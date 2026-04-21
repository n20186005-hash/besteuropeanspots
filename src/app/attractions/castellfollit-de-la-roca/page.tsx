import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡斯特利福利特德拉罗卡深度旅游攻略：悬崖小镇的震撼全景与避坑指南',
  description: '探索西班牙卡斯特利福利特德拉罗卡（Castellfollit de la Roca）的极致风光。这份深度游攻略带你漫步火山玄武岩悬崖，揭秘中世纪小镇的一日游路线、拍照打卡点和实用避坑贴士。',
}

export default function CastellfollitDeLaRocaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '西班牙', href: '/destinations/spain' },
            { label: '卡斯特利福利特德拉罗卡', href: '/attractions/castellfollit-de-la-roca' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卡斯特利福利特德拉罗卡・Castellfollit de la Roca・西班牙・赫罗纳`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，想象一下：你开车穿过加泰罗尼亚的绿色丘陵，一个转弯，眼前猛然出现一道长达一公里、高五十米的深色玄武岩绝壁，而一整片暖黄色的石头房子，就像被一只巨手小心翼翼地摆放在了这道刀削般的悬崖边缘，仿佛下一秒就要坠入下方的山谷河流。这不是电影场景，这就是卡斯特利福利特德拉罗卡，一个让你倒吸一口凉气的现实存在。今天这份卡斯特利福利特德拉罗卡私藏旅游攻略，就是你的专属向导。我们不止去看那个明信片角度的全景，更要走进它狭窄的街巷，听听石头讲述的火山与中世纪的故事，告诉你如何完美安排一日游路线，避开人流高峰，真正感受这座“悬空小镇”令人屏息的魅力。这份自由行指南，请收好。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，想象一下：你开车穿过加泰罗尼亚的绿色丘陵，一个转弯，眼前猛然出现一道长达一公里、高五十米的深色玄武岩绝壁，而一整片暖黄色的石头房子，就像被一只巨手小心翼翼地摆放在了这道刀削般的悬崖边缘，仿佛下一秒就要坠入下方的山谷河流。这不是电影场景，这就是卡斯特利福利特德拉罗卡，一个让你倒吸一口凉气的现实存在。今天这份卡斯特利福利特德拉罗卡私藏旅游攻略，就是你的专属向导。我们不止去看那个明信片角度的全景，更要走进它狭窄的街巷，听听石头讲述的火山与中世纪的故事，告诉你如何完美安排一日游路线，避开人流高峰，真正感受这座“悬空小镇”令人屏息的魅力。这份自由行指南，请收好。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卡斯特利福利特德拉罗卡`} />
                <InfoRow label="英文名称" value={`Castellfollit de la Roca`} />
                <InfoRow label="正式名称" value={`Castellfollit de la Roca`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`赫罗纳`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`别看它现在像个与世无争的“网红”小镇，这片玄武岩悬崖本身就是一部地球史书。大约在20万年前和10万年前，附近的火山先后两次剧烈喷发，炽热的熔岩流冷却后，形成了我们今天看到的上下两层、纹理分明的柱状玄武岩。而人类选择在此定居，则充满了中世纪的生存智慧。早在中世纪早期，人们就看中了这道天然屏障的防御价值——三面是垂直悬崖，易守难攻。小镇最早的文献记录可以追溯到11世纪，它曾是周边贵族领地争夺的焦点。在烽火连年的年代，这道悬崖就是村民最坚固的城墙。它不像那些拥有宏伟城堡的军事重镇，它的“堡垒”就是整个地貌本身。小镇的布局和存在，本身就是加泰罗尼亚地区中世纪乡村防御体系的一个活化石，见证了人们如何利用极端自然环境来构筑家园、抵御风险的古老智慧。`} />
                <InfoRow label="建筑特色" value={`小镇的建筑是大地色的乐章，完美地镶嵌在深灰色的玄武岩基座上。房屋多用当地开采的暖黄色砂岩石块砌成，经过风雨和阳光的打磨，呈现出蜂蜜色、赭石色到浅棕色的柔和渐变。屋顶是典型的加泰罗尼亚红瓦，在湛蓝天空下格外鲜艳。因为地基就是悬崖，许多房屋的后墙几乎与岩壁融为一体，甚至有些房间是直接凿岩而建，你可以用手触摸到那些冰凉、粗糙、布满气孔的火山岩墙面。街道狭窄得惊人，两人并肩而行已显局促，石板路被岁月磨得光滑，反射着巷子顶端“一线天”里漏下的光。阳台和窗台是绝对的亮点，铁艺栏杆早已锈迹斑斑，却更显韵味，上面永远盛开着天竺葵或九重葛，那一抹抹跳跃的紫红与玫红，是居民们对脚下万丈深渊最浪漫、最生活化的挑衅。整个小镇的建筑没有刻意雕琢的豪华，却有一种与险峻环境共生数百年的、浑然天成的坚韧美感。`} />
                <InfoRow label="建筑风格" value={`这里的建筑风格很难用单一的“哥特式”或“巴洛克”来定义，它是一种非常典型的加泰罗尼亚乡村民居与中世纪防御性聚落风格的混合体。所谓的“防御性”风格，在这里体现为建筑的“内向性”和“实用性”。为了最大化利用有限的平地并协同悬崖进行防御，房屋排列极度紧密，街巷如迷宫般狭窄曲折，这是为了迟滞可能攻入的敌人。窗户通常开得很小，且多朝向内侧街道或院子，而不是危险的悬崖外侧，这既能采光，又能减少暴露面。建筑立面简洁，几乎没有大型装饰，一切以坚固和节省空间为先。同时，你也能看到加泰罗尼亚乡村建筑的元素：比如拱形的石质门廊、厚重的木门、以及用于支撑上层建筑向外延伸的木质梁托。教堂的钟楼是少数具有更明显设计感的建筑，但其敦实的体量也更像一座瞭望塔。总之，这里的风格核心是“功能决定形式”，是生存美学在极端地理条件下的直接表达，比任何教科书上的风格都更生动、更震撼。`} />
                <InfoRow label="文化价值" value={`对当地人而言，这座小镇不止是一个家，更是一种身份象征和生存哲学的体现。生活在悬崖上，意味着每一天都在与一种壮丽的危险共舞。这塑造了居民们一种冷静、坚韧而又充满社区凝聚力的性格。小镇的年度节庆，如守护神节，游行队伍就在这些狭窄的悬崖街道上穿行，烟火仿佛在深渊之上绽放，这种庆祝充满了其他地方没有的、近乎仪式感的勇气。对现代社会而言，卡斯特利福利特德拉罗卡是一个强大的视觉和文化符号。它频繁出现在摄影作品、电影和纪录片中，象征着人类定居点与自然奇观之间那种惊心动魄的平衡。它提醒着每一位到访者：文明可以在最不可思议的地方扎根、绽放。它也让人们反思现代城市生活的平庸与安全，重新欣赏那种与自然环境直接对话、充满挑战的古老生活方式所蕴含的诗意和力量。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 卡斯特利福利特德拉罗卡一日游打卡路线攻略：从全景到巷弄`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行漫步路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的向导，我建议把游览时间控制在大半天，节奏放慢，好好感受。上午，千万别直接冲进小镇！先去Mirador de Castellfollit de la Roca（观景台）。这是拍摄小镇悬崖全景的经典机位，清晨或上午的光线最能勾勒出玄武岩的质感和房屋的轮廓。在这里震撼个够，拍完“标准照”。接着，开车或步行进入小镇，把车停在镇口的公共停车场（免费且位置充足）。中午，正是探索迷宫的好时候。从圣萨尔瓦多教堂（Iglesia de Sant Salvador）开始，它是小镇的中心和制高点。然后，放任自己在那些以“Carrer”（街道）命名的小巷里迷失吧，比如Carrer de la Font或Carrer del Fossar，感受两侧石墙的触感和头顶的花草。找一家悬崖边的餐厅享用午餐，记得预订靠窗位。下午，可以去小镇尽头的老墓地和它旁边的步行小径，那里有另一个角度回望小镇，更为静谧。如果体力好，可以沿着标记的小径下到悬崖底部的弗卢维亚河（Riu Fluvià）边，从下往上仰望，又是另一番骇人的壮观。傍晚前，可以回到观景台，看夕阳为悬崖小镇披上金红色的外衣。这份一日游路线松弛有度，兼顾了打卡与深度体验。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  教堂钟楼的视角：爬上圣萨尔瓦多教堂旁的平台，站在钟楼脚下。从这里向前望，你看到的不是街道，而是小镇的屋脊线——一片红瓦的海洋，在阳光下泛起波浪，而这片“海洋”的边界，就是那道笔直切向虚空的悬崖线。向后转，背对悬崖，你看到的则是绵延的丘陵和更远处的火山地貌。这个位置精准地定义了小镇的“前沿”与“后方”，是理解其地理格局的绝佳点位。钟楼的石头被风吹雨打得斑驳，缝隙里长出倔强的小草。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  某扇悬崖边的厨房窗户：留意那些朝向外侧悬崖的、为数不多的窗户。想象一下，几个世纪以来，小镇的主妇就站在这样的窗前洗碗、切菜，窗外不是花园，而是50米垂直落差下的树冠与河流。窗台上或许放着一盆罗勒，清新的香气与锅里炖菜的香味混合。这日常生活的烟火气，与窗外史诗般的险峻背景形成的对比，是小镇最动人、最真实的细节。光影在下午会斜射进这些窄窗，在古老的石质地板上投下明亮的光斑。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  悬崖尽头的老城墙遗迹：走到小镇最狭窄的尖端，这里残留着一段低矮的石墙。触摸这些石头，它们比房屋的石头更黑、更粗糙，这是最早的防御围墙遗迹。站在这里，风毫无阻挡地呼啸而来，吹得人衣衫猎猎作响。你的正前方是开阔的山谷，左右两侧皆是深渊，仿佛站在一艘巨大石船的船头。脚下石缝中，野花在风中剧烈摇曳却绝不倒下，像极了这座小镇的精神。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  通往墓地的小径光影：下午时分，走在通往老墓地的那条安静小径上。阳光被一侧的高墙和另一侧的柏树过滤，在地上洒下长长的、跳跃的光影条纹。周围极其安静，只能听到自己的脚步声和远处的鸟鸣。墓地本身小巧而肃穆，许多墓碑就朝向悬崖外的无限风光。这里没有阴森，只有一种奇特的宁静与豁达，生与死在此地都以最壮阔的自然为背景板，显得渺小而又永恒。`}</p>
            </div>
          </Section>

          <Section title={`5. 卡斯特利福利特德拉罗卡自由行避坑指南与行前须知`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  最佳游览时间与避开人流：小镇最拥挤的时间是夏季（7-8月）的上午11点至下午4点，旅游大巴会带来一日游团队。强烈建议在春季（5-6月）或秋季（9-10月）的工作日清晨前往。如果只能在旺季来，那就赶早（9点前到达观景台）或赶晚（下午5点后进入小镇），你会发现一个完全不同的、宁静的世界。晴朗的早晨和日落前是摄影的黄金时间，光线绝美。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  穿着与安全建议：务必穿一双绝对防滑、舒适的平底鞋！ 小镇的石板路古老光滑，尤其在潮湿时非常滑。街巷坡度大，台阶多，高跟鞋是“自杀式”选择。悬崖边虽然有护栏，但为了拍照也不要做出危险动作。风大时，在开阔地带站稳，帽子要抓牢。带一件防风外套，悬崖上无遮无拦，体感温度比下面低。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  交通与防盗须知：自驾是最方便的方式，使用“Castellfollit de la Roca”导航，镇口有清晰指示牌指向免费停车场。切勿尝试把车开进镇内小巷，那是居民的私人区域，且根本无法错车。小镇非常安全，民风淳朴，但任何旅游地都要保持基本警觉，随身包背在前面。在观景台停车时，也请勿在车内留下显眼的行李。`}</p>
            </div>
          </Section>

          <Section title={`6. 卡斯特利福利特德拉罗卡周边住宿与美食攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇本身住宿选择极少，更推荐住在车程15-20分钟内的更大城镇，如奥洛特（Olot）或贝萨卢（Besalú）。奥洛特是火山区的中心，酒店和餐厅选择多，性价比高；贝萨卢则是梦幻的中世纪古镇，住在那里等于多玩一个顶级景点。至于美食，在卡斯特利福利特德拉罗卡一定要找一家悬崖景观餐厅体验。推荐尝试地道的加泰罗尼亚乡村菜，比如用本地火山土灶烤制的“Carne a la brasa”（炭烤肉类），肉质带着烟熏香气；或是“Butifarra amb seques”（血肠配白豆），浓郁扎实。搭配一杯当地的埃斯塔特（Empordà）产区葡萄酒，对着深渊干杯，滋味非凡。镇上也有几家可爱的咖啡馆，点一杯咖啡和一份“Xuixo”（一种糖粉油炸奶油卷，赫罗纳特产），坐在广场上慢慢享用，看鸽子在悬崖边上盘旋。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  奥洛特火山区自然公园（La Zona Volcánica de la Garrotxa）：开车15分钟即到。这里完全是另一番地貌奇观！你可以轻松徒步走进死火山口，比如克罗斯卡达达火山（Volcà Croscat），亲眼看到火山喷发形成的多层次土层断面，色彩从砖红到炭黑，如同地球的千层蛋糕。公园内森林茂密，步道完善，是进行一场“地质学散步”的完美选择，让你彻底明白卡斯特利福利特那座悬崖的由来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  贝萨卢（Besalú）中世纪古镇：车程约20分钟。如果卡斯特利福利特是“自然奇观上的小镇”，那么贝萨卢就是“人文史诗中的古镇”。它拥有保存完好的11世纪罗马式拱桥、古老的犹太浴室（Micvé）和迷宫般的石头街道。这里的氛围更加宫廷和繁华，与卡斯特利福利特的险峻质朴形成鲜明而有趣的互补。一天内体验这两种截然不同的中世纪风情，会让你的加泰罗尼亚之旅层次无比丰富。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`卡斯特利福利特德拉罗卡的灵魂，在于那种极致的矛盾与和谐：人类最温情的家园烟火，被安放在大自然最冷峻严酷的舞台之上。它不像一座小镇，更像一个宣言，安静地诉说着关于生存、适应与美的古老故事。离开时，你会带走的不只是一张震撼的照片，更是一种视角——从此再看任何平凡的居所，或许都能想起，曾有一个地方的人们，选择在世界的边缘，热烈地生活。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/royal-monastery-of-santa-maria-de-guadalupe" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    瓜
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">瓜达卢佩圣玛利亚皇家修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Royal Monastery of Santa María de Guadalupe</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/buitrago-del-lozoya" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布伊特拉戈德尔洛索亚</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Buitrago del Lozoya</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/almagro-medieval-courtyard-theatre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔马格罗</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Almagro</p>
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
