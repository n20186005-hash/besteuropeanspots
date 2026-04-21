import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奥索尔 Osor｜探访亚得里亚海被遗忘的古罗马海港，在雕塑与海风中寻一场时空对话 - 最佳欧洲景点',
  description: '你第一眼看到奥索尔，可能会以为它只是亚得里亚海星罗棋布的岛屿中又一个沉睡的小渔村。但当你把车停在运河边，双脚踩上那些被海风和无数脚步磨得发亮的灰白色石板路时，一种奇异的时空错位感便悄然降临。耳边是清澈见底的运河里潺潺的水流声，混合着咸湿的海风味道，以及从墙角盛开的夹竹桃丛中飘来的、若有若无的甜香。这',
}

export default function OsorCroatiaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '克罗地亚', href: '/destinations/europe' },
            { label: '滨海和山区县（位于茨雷斯岛与洛希尼岛交界处）', href: '/destinations/europe' },
            { label: '奥索尔', href: '/attractions/osor-croatia' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`奥索尔・Osor・克罗地亚・滨海和山区县（位于茨雷斯岛与洛希尼岛交界处）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼看到奥索尔，可能会以为它只是亚得里亚海星罗棋布的岛屿中又一个沉睡的小渔村。但当你把车停在运河边，双脚踩上那些被海风和无数脚步磨得发亮的灰白色石板路时，一种奇异的时空错位感便悄然降临。耳边是清澈见底的运河里潺潺的水流声，混合着咸湿的海风味道，以及从墙角盛开的夹竹桃丛中飘来的、若有若无的甜香。这里的“居民”似乎不只是那些坐在广场长椅上眯着眼晒太阳的寥寥几位老人，还有散落在每个角落、仿佛从大地中生长出来的石头雕塑。
这些雕塑就是奥索尔的灵魂。它们不是被隆重地供奉在博物馆的聚光灯下，而是随意地、甚至有些“野生”地出现在你散步的每一个转角：一尊抽象的人形石雕倚在老教堂斑驳的墙根，仿佛在聆听几个世纪前的祷告；一组几何切割的花岗岩作品就放在古老的罗马城墙遗址旁，坚硬的现代线条与风化的古代石块进行着一场无声的辩论；甚至在海堤边，你都能看到面对大海沉思的铜像，背影融进亚得里亚海永不疲倦的蔚蓝里。艺术在这里不是展示品，而是生活的一部分，是呼吸。
当地的老人会向你点头致意，他们早已习惯了与这些“石头的邻居”共存。午后，你能看到猫在雕塑的阴影下打盹，蜜蜂在环绕着雕塑基座的野花丛中忙碌。这里没有喧嚣的旅游纪念品商店，只有一两家小小的咖啡馆，飘出浓缩咖啡的醇厚香气。奥索尔最打动人的，正是这份极致的宁静与丰饶的精神世界的结合。它像一本打开在阳光下的立体历史艺术书，海风是翻动书页的手，而你，是一位被允许静静阅读的幸运访客。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你第一眼看到奥索尔，可能会以为它只是亚得里亚海星罗棋布的岛屿中又一个沉睡的小渔村。但当你把车停在运河边，双脚踩上那些被海风和无数脚步磨得发亮的灰白色石板路时，一种奇异的时空错位感便悄然降临。耳边是清澈见底的运河里潺潺的水流声，混合着咸湿的海风味道，以及从墙角盛开的夹竹桃丛中飘来的、若有若无的甜香。这里的“居民”似乎不只是那些坐在广场长椅上眯着眼晒太阳的寥寥几位老人，还有散落在每个角落、仿佛从大地中生长出来的石头雕塑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些雕塑就是奥索尔的灵魂。它们不是被隆重地供奉在博物馆的聚光灯下，而是随意地、甚至有些“野生”地出现在你散步的每一个转角：一尊抽象的人形石雕倚在老教堂斑驳的墙根，仿佛在聆听几个世纪前的祷告；一组几何切割的花岗岩作品就放在古老的罗马城墙遗址旁，坚硬的现代线条与风化的古代石块进行着一场无声的辩论；甚至在海堤边，你都能看到面对大海沉思的铜像，背影融进亚得里亚海永不疲倦的蔚蓝里。艺术在这里不是展示品，而是生活的一部分，是呼吸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地的老人会向你点头致意，他们早已习惯了与这些“石头的邻居”共存。午后，你能看到猫在雕塑的阴影下打盹，蜜蜂在环绕着雕塑基座的野花丛中忙碌。这里没有喧嚣的旅游纪念品商店，只有一两家小小的咖啡馆，飘出浓缩咖啡的醇厚香气。奥索尔最打动人的，正是这份极致的宁静与丰饶的精神世界的结合。它像一本打开在阳光下的立体历史艺术书，海风是翻动书页的手，而你，是一位被允许静静阅读的幸运访客。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`奥索尔`} />
                <InfoRow label="英文名称" value={`Osor`} />
                <InfoRow label="正式名称" value={`Osor`} />
                <InfoRow label="国家" value={`克罗地亚`} />
                <InfoRow label="城市" value={`滨海和山区县（位于茨雷斯岛与洛希尼岛交界处）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座曾在古罗马时期连接达尔马提亚海岸与内陆贸易、繁华一时的战略海港，后在历史长河中归于沉寂，如今化身为一座宁静的露天古典雕塑博物馆。`} />
                <InfoRow label="建筑特色" value={`罗马与中世纪遗迹（城墙、教堂、地基）与数十件来自“奥索尔雕塑家聚会”的现代石雕作品奇妙共生，毫无违和感。`} />
                <InfoRow label="建筑风格" value={`杂糅了古罗马的实用主义、早期基督教的简朴、威尼斯哥特式的痕迹以及当代抽象艺术的前卫表达。`} />
                <InfoRow label="文化价值" value={`它是克罗地亚“雕塑之城”传统的活态体现，是古老历史层与当代艺术创作进行无声而深刻对话的罕见场所。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`露天遗址及城镇区域全天开放。奥索尔考古博物馆开放时间：夏季（5月至9月）每日 9:00 - 19:00；冬季（10月至次年4月）周一至周五 10:00 - 14:00，周末需提前致电预约。圣玛丽大教堂开放时间较为灵活，通常每日 9:00 - 17:00 可入内参观，但偶尔因私人活动关闭。建议出行前查看当地旅游局官网的实时更新。`} />
              <InfoRow label="门票价格" value={`进入奥索尔古城本身免费。考古博物馆门票：成人约30库纳（约4欧元），学生及65岁以上老人享半价优惠，7岁以下儿童免费。教堂参观免费，但欢迎捐赠以支持维护。部分特殊临时展览或音乐会可能单独收费。`} />
              <InfoRow label="地址" value={`Osor 10, 51554 Osor, Croatia`} />
              <InfoRow label="交通方式" value={`奥索尔位置较为特殊，位于茨雷斯岛（Cres）和洛希尼岛（Lošinj）之间，通过一座可开合的小石桥相连。最便捷的方式是自驾。从最近的里耶卡机场（RJK）出发，驾车约2小时，需经过一座收费大桥上岛。也可从首都萨格勒布乘长途巴士到里耶卡，再换乘前往茨雷斯岛的马利洛希尼（Mali Lošinj）的巴士，在奥索尔站下车，总耗时约4-5小时，班次每日约3-4班，夏季稍多。岛上公共交通不便，租车是探索该区域的最佳选择。如果从洛希尼岛过来，步行穿过那座著名的石桥本身就是一种仪式性的体验。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事要从两千多年前说起。当时，这里可不叫奥索尔，它有一个响亮得多的罗马名字——Apsorus。你脚下这些看似随意散落的巨石，当年可是坚固的城墙和码头的一部分。得益于那条狭窄却至关重要的奥索尔海峡（如今是一条人工运河），这座小城成了罗马人控制亚得里亚海北部的关键海军基地和贸易枢纽。来自整个帝国的商船在这里停靠，卸下橄榄油、葡萄酒和精美的陶器，再装上伊斯特拉半岛的木材和石材。你可以想象一下当年的盛景：码头上人声鼎沸，不同语言的叫卖声混杂，仓库里堆满货物，身穿托加袍的罗马官员在广场上巡视。那时的奥索尔，是个充满野心与活力的地方。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，帝国的夕阳总会落下。随着西罗马帝国的崩溃，奥索尔的命运开始颠簸。但它并未彻底消亡，而是转身投入了基督教的怀抱。早期的基督教徒在这里建立了教堂，你如今看到的圣玛丽大教堂，其地基就深深扎在罗马时代的废墟之上。中世纪时，它先后受到克罗地亚王国、威尼斯共和国的深刻影响。威尼斯人那精明的商业头脑和强大的海军力量，曾为奥索尔带来一段复兴的时光，城防被加固，建筑也染上了些许威尼斯哥特式的风格。但地理位置的敏感性也意味着它始终是兵家必争之地，斯拉夫人、奥斯曼土耳其的威胁如同海上的乌云，时聚时散。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的转折点，或许源于自然的伟力与航路的变化。海峡的泥沙逐渐淤积，更大的船只无法通行，商业重心转移到了更深水良港的里耶卡。奥索尔就像一位退役的老水手，慢慢地、不可逆转地沉寂下来。辉煌褪去，人口流失，它几乎要被世界遗忘，只剩下坚固的石头建筑和海风年复一年的低语。时间走到了20世纪后半叶，一位名叫卡米尔·托姆帕（Kamil Tompa）的雕塑家偶然发现了这里。他被此地时空凝结般的氛围和高质量的石材所震撼，萌生了一个天才般的想法：为何不将这座古城本身，变成一个露天雕塑工作室和展览场？" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，从1970年开始，“奥索尔雕塑家聚会”诞生了。每年夏天，来自克罗地亚乃至世界各地的雕塑家们汇聚于此，以当地开采的石料为媒介，在海天之间、古迹之旁进行创作。作品完成后，就永久地留在了它们诞生的地方。这不是一个短期的艺术节，而是一项持续了半个多世纪的“在地艺术植入”工程。古老的罗马城墙、中世纪的教堂广场、宁静的运河畔，一件件充满现代感的雕塑被“栽种”下去。它们没有破坏历史的肌理，反而像一种当代的注解，激活了沉睡的记忆。奥索尔，就这样完成了一次惊人的蜕变——从尘封的历史地图上的一个名字，重生为一个活着的、呼吸着的、过去与现在持续对话的艺术圣地。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`游览奥索尔，精髓在于“慢”和“散漫”。建议在上午十点前抵达，这时阳光明媚却尚未灼热，游客稀少，整个小镇仿佛刚从海中醒来。整体耗时约3-4小时，节奏务必放慢。这是一次感官与思维的漫步，而非景点打卡。路线设计为一个小环线，从连接两岛的石桥开始，深入古镇核心，再沿着运河和海堤返回，确保你能从不同角度感受这座“露天博物馆”的层次感。重点是留出足够的时间发呆、观察细节，并让那些雕塑与古迹的对话，真正进入你的心里。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇地面多为古老石板路，凹凸不平，务必穿一双舒适防滑的步行鞋。夏季午间阳光非常强烈，帽子、墨镜和防晒霜必不可少。这里几乎没有商业氛围，餐馆选择极少且关门较早，建议自备一些零食和水，或者计划好在岛上其他小镇用正餐。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先踏上那座标志性的可开合小石桥，站在正中，感受脚下分隔茨雷斯与洛希尼岛的运河海水在流动，回望两边的古老房屋。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`信步走进主广场，让目光缓缓扫过广场上姿态各异的现代雕塑，然后定格在它们身后那座拥有浑厚钟楼的圣玛丽大教堂立面上。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开大教堂沉重的木门，让眼睛适应内部幽暗的光线，寻找那些古老的石刻圣像和残留的拜占庭风格壁画碎片。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂侧门出来，径直走进广场旁的奥索尔考古博物馆，在小巧的展厅里透过出土的罗马马赛克、陶器和硬币，拼凑出Apsorus港昔日的繁华图景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着博物馆后方的小路登上残留的古城墙遗址，触摸粗糙的岩石，并从这里俯视整个奥索尔的红瓦屋顶与远处湛蓝的海峡。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下到城墙根，沿着运河边的步道悠闲散步，重点关注那些“栖息”在水边、与倒影为伴的雕塑作品，看光线如何在水波和石头上跳舞。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，穿过安静的居民小巷，回到海堤，找一张面对大海的长椅坐下，什么都不做，只是听海浪声，看对岸洛希尼岛的绿意。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`石桥全景机位`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，从奥索尔一侧的运河岸边，用广角镜头拍摄石桥、两岸彩色房屋及水中倒影，对称构图能产生油画般的宁静美感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`广场雕塑与教堂的对话`}</h4>
                  <p className="text-sm text-gray-700">{`上午阳光洒满广场时，选择一尊前景的现代抽象雕塑，将对焦放在后方古老的圣玛丽大教堂钟楼上，利用虚实和材质对比讲述时空故事。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城墙上的俯瞰视角`}</h4>
                  <p className="text-sm text-gray-700">{`下午稍晚时分，登上城墙残垣，以古镇红瓦屋顶为前景，将蜿蜒的运河和远处洛希尼岛的森林与大海纳入镜框，层次极其丰富。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`运河边的雕塑倒影`}</h4>
                  <p className="text-sm text-gray-700">{`在无风的晴朗午后，蹲在运河边，将镜头贴近水面，拍摄岸边雕塑及其清晰倒影，形成虚实交融的趣味构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`海堤长椅与落日`}</h4>
                  <p className="text-sm text-gray-700">{`日落后约半小时的“蓝色时刻”，从海堤远端回拍，以孤独的长椅和沉思的人形雕塑为焦点，背景是泛着微光的海面和渐变的天空，充满故事感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄居民或当地老人时，请务必先微笑并取得对方同意，这里生活氛围宁静，尊重隐私尤为重要。使用无人机理论上需要申请，且可能干扰安宁，不建议在此飞航拍。最好的“镜头”是你的眼睛和记忆，不妨放下手机，用更多时间去感受。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`怀旧时光`}</h4>
                  <p className="text-sm text-blue-800">{`住在奥索尔城内仅有的几家由石头老屋改造的公寓里，推开木窗就是运河风景，夜晚能听到清晰的水流声，真正融入古镇的脉搏。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`自然栖居`}</h4>
                  <p className="text-sm text-green-800">{`选择运河对岸洛希尼岛一侧、被松林环绕的精品民宿，每天清晨步行两分钟过桥进入奥索尔，享受独占整个古镇晨光的特权。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`海岛生活`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车15分钟入住洛希尼岛主要城镇马利洛希尼（Mali Lošinj）的海滨酒店，那里有更多餐饮选择，将奥索尔作为白日探幽的后花园，体验动静结合。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`奢华避世`}</h4>
                  <p className="text-sm text-purple-800">{`预订茨雷斯岛或洛希尼岛上隐藏在山丘橄榄园中的高端设计别墅，拥有无边泳池和私人厨师，将奥索尔的宁静升华至极致享受。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥索尔本身住宿极为有限且条件简朴，旺季（7-8月）必须提前数月预订。如果追求舒适便利，住在马利洛希尼是更实际的选择，但会失去“独占古镇”的奇妙晨昏体验。整个区域治安极好，民风淳朴，夜晚独自散步也非常安全。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开奥索尔许久，那混合着海盐、石头与迷迭香的气息，似乎还停留在感官的记忆里。这个地方教会我的，是关于时间的一种全新理解。时间在这里并非一条单向流逝的直线，而是一个可以折叠、交错、对话的场域。古罗马的城墙石与二十一世纪的抽象雕塑并肩而立，它们没有彼此征服，而是在亚得里亚海永恒的阳光下，达成了某种沉默的和解。我们总在追寻“古老”与“原汁原味”，但奥索尔告诉我们，真正的生命力不在于凝固在过去，而在于允许新的故事在旧的基石上生长。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求效率、喧嚣不断的时代，奥索尔像一处精神上的“避风港”。它没有令人惊叹的庞大体量，没有必须完成的打卡清单。它的魅力是渗透性的，需要你停下脚步，坐下，呼吸，等待那个瞬间——当海风吹过，松涛声、教堂钟声、运河的水声与那些无声的雕塑仿佛开始共同讲述一个悠长故事时，你便触摸到了这个地方的灵魂。每一位热爱深度游的旅人，都该来一次奥索尔。它不仅是一个目的地，更是一次心灵的练习：练习如何在一片宁静中，聆听历史的回响，欣赏艺术的当下，并最终，找回与自己内心对话的节奏。这，或许才是旅行能带给我们的、最珍贵的礼物。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/salona-roman-ruins-dalmatia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨罗纳古城废墟</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Salona Ruins</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sibenik-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    希
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">希贝尼克大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Šibenik Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sibenik-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    希
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">希贝尼克老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Šibenik Old Town</p>
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
