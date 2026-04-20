import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '佩雷帕蒂斯城堡 Château de Peyrepertuse｜探访盘踞石灰岩山脊的“天空之城”，卡特里派最后堡垒 - 最佳欧洲景点',
  description: '当你第一次从蜿蜒的山路某个转弯处望见它时，肯定会忍不住发出一声低呼。那景象太不真实了，就像某个电影特效团队把一整座灰白色的石头城市，用强力胶水粘在了一道刀劈斧削般的石灰岩山脊上。它不像那些坐落在丘陵上的温柔城堡，佩雷帕蒂斯是生长出来的，是从岩石的骨骼里刺出来的。天空湛蓝得刺眼，衬得那座孤悬于海拔近8',
}

export default function ChateauDePeyrepertusePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '佩雷帕蒂斯城堡', href: '/attractions/chateau-de-peyrepertuse' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`佩雷帕蒂斯城堡・Château de Peyrepertuse・法国・奥德省，杜雅`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你第一次从蜿蜒的山路某个转弯处望见它时，肯定会忍不住发出一声低呼。那景象太不真实了，就像某个电影特效团队把一整座灰白色的石头城市，用强力胶水粘在了一道刀劈斧削般的石灰岩山脊上。它不像那些坐落在丘陵上的温柔城堡，佩雷帕蒂斯是生长出来的，是从岩石的骨骼里刺出来的。天空湛蓝得刺眼，衬得那座孤悬于海拔近800米空中的废墟，充满了拒绝与沉默的力量。
开车到山脚的小村庄杜雅克，空气立刻变得不同。干燥的空气中混杂着迷迭香、百里香被烈日烘烤后的浓郁香气，还有风吹过无数石灰岩缝隙发出的、类似呜咽的细微哨音。开始攀登吧。所谓的路，其实是在岩石上凿出或搭建出的之字形小径，粗糙的石阶被无数访客的鞋底磨得微微发亮。你的膝盖开始感觉到压力，呼吸变得粗重，但每一次抬头，那座城堡都以新的、更威严的角度压迫下来。这本身就是一种朝圣，用身体的疲劳去接近一个逝去时代的固执灵魂。
终于穿过低矮的门洞，进入城堡内部。你会瞬间被一种巨大的“空”所笼罩。这里没有华丽的厅堂，没有精致的装饰，只有无尽的风，呼啸着穿过没有屋顶的大厅、绕过倒塌的墙垛。脚下是坑洼不平的岩石地面，阳光把残墙的影子拉得老长。站在东端圣乔治城堡的尖端，仿佛站在世界的尽头。脚下是令人眩晕的、直落300米的绝壁，放眼望去，是如同绿色海浪般翻滚起伏的科比耶尔山脉，一直延伸到天际线处朦胧的地中海。在这里，你触摸到的每一块冰冷石头，都浸透着孤独、防御和一种近乎绝望的坚毅。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你第一次从蜿蜒的山路某个转弯处望见它时，肯定会忍不住发出一声低呼。那景象太不真实了，就像某个电影特效团队把一整座灰白色的石头城市，用强力胶水粘在了一道刀劈斧削般的石灰岩山脊上。它不像那些坐落在丘陵上的温柔城堡，佩雷帕蒂斯是生长出来的，是从岩石的骨骼里刺出来的。天空湛蓝得刺眼，衬得那座孤悬于海拔近800米空中的废墟，充满了拒绝与沉默的力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`开车到山脚的小村庄杜雅克，空气立刻变得不同。干燥的空气中混杂着迷迭香、百里香被烈日烘烤后的浓郁香气，还有风吹过无数石灰岩缝隙发出的、类似呜咽的细微哨音。开始攀登吧。所谓的路，其实是在岩石上凿出或搭建出的之字形小径，粗糙的石阶被无数访客的鞋底磨得微微发亮。你的膝盖开始感觉到压力，呼吸变得粗重，但每一次抬头，那座城堡都以新的、更威严的角度压迫下来。这本身就是一种朝圣，用身体的疲劳去接近一个逝去时代的固执灵魂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`终于穿过低矮的门洞，进入城堡内部。你会瞬间被一种巨大的“空”所笼罩。这里没有华丽的厅堂，没有精致的装饰，只有无尽的风，呼啸着穿过没有屋顶的大厅、绕过倒塌的墙垛。脚下是坑洼不平的岩石地面，阳光把残墙的影子拉得老长。站在东端圣乔治城堡的尖端，仿佛站在世界的尽头。脚下是令人眩晕的、直落300米的绝壁，放眼望去，是如同绿色海浪般翻滚起伏的科比耶尔山脉，一直延伸到天际线处朦胧的地中海。在这里，你触摸到的每一块冰冷石头，都浸透着孤独、防御和一种近乎绝望的坚毅。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`佩雷帕蒂斯城堡`} />
                <InfoRow label="英文名称" value={`Château de Peyrepertuse`} />
                <InfoRow label="正式名称" value={`Château de Peyrepertuse`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`奥德省，杜雅`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`法国现存规模最大、气势最恢弘的卡特里派城堡之一，被誉为“奥德省五大子爵城堡”之首，是中世纪军事建筑与自然险要地势完美结合的典范。`} />
                <InfoRow label="建筑特色" value={`如同一艘巨石战舰，沿着近800米长的狭窄石灰岩山脊铺展而建，分为下城堡（Château Bas）和圣乔治城堡（San Jordi）上下两部分，通过著名的“圣路易阶梯”垂直相连，充分利用悬崖绝壁形成天然屏障。`} />
                <InfoRow label="建筑风格" value={`典型的中世纪军事防御建筑，融合了早期罗马式与晚期哥特式加固元素，其设计核心并非奢华居住，而是纯粹为战争和生存服务。`} />
                <InfoRow label="文化价值" value={`见证了13世纪阿尔比十字军讨伐卡特里派（清洁派）异端的血腥历史，是清洁派信徒最后的避难所和精神堡垒，承载着一段被主流历史刻意边缘化的悲壮记忆。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年开放，但具体时间随季节大幅变动。通常一月至三月、十一月和十二月，开放时间为上午10点至下午5点；四月、五月、九月和十月，开放时间延长至上午9点至下午6点或7点；夏季六月至八月，开放时间最长，为上午9点至晚上8点。城堡可能在恶劣天气（强风、冰雪）或维护期间临时关闭，冬季部分日期可能仅周末开放。出发前务必在官网查看最新公告。`} />
              <InfoRow label="门票价格" value={`成人票8欧元。优惠票（学生、12-17岁青少年）6.5欧元。12岁以下儿童免费。另有家庭套票等优惠。门票仅在城堡入口处现场购买，接受现金和部分信用卡。持有奥德省或周边地区多个城堡的联票可能享有折扣。`} />
              <InfoRow label="地址" value={`Château de Peyrepertuse, 11350 Duilhac-sous-Peyrepertuse, France`} />
              <InfoRow label="交通方式" value={`城堡地理位置极为偏远，公共交通极其不便，强烈建议自驾。最近的国际机场是图卢兹-布拉尼亚克机场或佩皮尼昂机场，车程均约1.5-2小时。从卡尔卡松或佩皮尼昂火车站租车出发是最佳选择，沿A61高速公路行驶，转入D117和D14等省道，进入科比耶尔山区。最后一段是蜿蜒的山路，路窄弯急，需谨慎驾驶。从山脚下的杜雅克村停车场到城堡入口还需徒步攀登约15-20分钟的山路。完全依赖公交几乎不可能抵达。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`佩雷帕蒂斯的故事，远比石头本身更厚重、更复杂。早在11世纪甚至更早，这座难以企及的山巅就被西哥特人或当地领主看中，修建了最初的简陋哨所。但它真正被推上历史的风口浪尖，是在12世纪。当时，一种被称为卡特里派或清洁派的基督教异端思潮，在朗格多克地区，尤其是图卢兹、阿尔比一带蓬勃生长。他们提倡清贫、简朴，反对天主教会的腐败与奢华，赢得了大量平民甚至贵族的追随。佩雷帕蒂斯，因其无与伦比的天然防御，成为了这些“异端”信徒和领主们的重要堡垒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1209年，教皇英诺森三世发起阿尔比十字军，旨在用武力根除卡特里派。这是一场漫长而残酷的战争，充满了屠杀和背叛。北方的法兰西贵族在西蒙·德·蒙福尔的率领下，如铁锤般砸向南方的“异端”土地。许多卡特里派城堡在血与火中陷落，但佩雷帕蒂斯因其天险，一度安然无恙。它像一个沉默的见证者，俯瞰着山下平原发生的种种悲剧。转折点在1240年到来。当时，城堡的领主支持了图卢兹伯爵雷蒙德七世的反抗起义。法王路易九世（圣路易）的军队兵临山下。传说中，国王的工程师在绝壁上奇迹般地建造了那道高达数米、近乎垂直的“圣路易阶梯”，将上下城堡打通，从而实现了战术合围。最终，城堡不是被武力攻破，而是通过谈判投降，避免了毁灭。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`成为王室财产后，佩雷帕蒂斯的角色转变了。它从卡特里派的避难所，变成了法兰西王国监视和防御阿拉贡王国（现在的西班牙）的前线堡垒。整个13世纪末到14世纪，王室投入巨资对其进行大规模加固和扩建，修建了我们今天看到的宏伟外墙、塔楼和内部建筑。它成为了边境线上的一颗坚固牙齿。然而，随着1659年《比利牛斯条约》签订，法国与西班牙的边界南移，佩雷帕蒂斯彻底失去了战略价值。军队撤走，它被遗弃在荒凉的山顶，任由风雨和时间侵蚀。石头被附近村民拆去盖房，木材腐烂，它渐渐变回了最初的样子——一堆与山脊融为一体的、充满传奇的巨石。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到19世纪，它作为历史遗迹的价值被重新发现。20世纪开始了断断续续的修复和保护工作。如今，它不再属于任何领主或国王，它属于风，属于鹰，属于每一个愿意跋涉而来，聆听石头诉说那段关于信仰、迫害与坚韧往事的人。行走其间，你踩踏的不仅是石头，更是层层叠叠、被封存了几个世纪的历史尘埃。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议预留至少3-4小时进行完整探索。最佳抵达时间是清晨（城堡一开门）或傍晚（关门前2-3小时），以避开正午的酷热和夏季的人流，同时光线最为柔和迷人。游览节奏应是“慢爬、细看、静坐”。攀登山路是体验不可或缺的一部分，不要急于赶路。进入城堡后，按照从下到上、由外至内的顺序，让自己慢慢沉浸其中。这是一次体力与历史想象力的双重漫步，重点不在于“看完”所有角落，而在于感受那种举世隔绝的氛围。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿着坚固防滑的徒步鞋，山路和城堡内地面全是粗糙不平的岩石，高跟鞋或凉鞋是灾难。
夏季上山必须携带足量饮用水（至少1升/人），山上毫无遮挡，阳光暴晒，且城堡内没有饮用水补给点。
切勿为了拍照而攀爬没有防护的残墙或靠近悬崖边缘，山风瞬息万变，且许多石头结构并不稳固。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从山脚停车场开始，先别急着埋头爬山，回头看一眼城堡全景，体会它盘踞山脊的压迫感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着之字形山路向上攀登，在喘息时触摸路边岩壁，寻找古老凿刻或顽强生长在石缝里的野花。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主入口进入下城堡，站在空旷的“练兵场”，感受风在这里加速穿过的呼啸声，想象士兵在此集结。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探索下城堡残存的厅堂与蓄水池遗迹，留意那些为生存而设计的朴素细节，比如收集雨水的沟槽。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`鼓起勇气，攀爬那座著名的、在岩壁上开凿的“圣路易阶梯”，体验中世纪士兵垂直调动的惊心动魄。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上顶部的圣乔治城堡，一定要走到最东端的三角形平台上，在那里面对深渊和无限远景静立几分钟。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在上下城堡之间的城墙步道上慢慢行走，从不同角度俯瞰内外截然不同的风景——一侧是险峻山谷，一侧是相对平缓的来路。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果还有精力，寻找一下隐藏在废墟中的小礼拜堂遗址，那里往往有最精致的石雕残片和一份特别的宁静。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`杜雅克村停车场远眺机位`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，使用长焦镜头压缩空间，能拍出城堡如海市蜃楼般悬浮于金色山脊上的经典画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`下城堡主门洞框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`上午时分，阳光能照亮门洞内部，以门洞为画框，将门外绵延的群山和盘山路作为背景，形成强烈纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣路易阶梯仰拍视角`}</h4>
                  <p className="text-sm text-gray-700">{`正午前后阳光直射时，站在阶梯底部向上拍摄，能清晰展现阶梯在绝壁上开凿的险峻线条和攀登者的剪影。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`上城堡西侧城墙步道`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚蓝调时刻，从这里可以拍到下城堡的剪影与远方逐渐点亮灯火的平原村庄，形成冷暖对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`圣乔治城堡尖端自拍点`}</h4>
                  <p className="text-sm text-gray-700">{`请同伴从后方几米处低角度拍摄，能将你、脚下的万丈深渊以及无垠的山脉全景一同纳入画面，极具冲击力。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`山区光线变化极快，建议使用RAW格式拍摄，以便后期调整高反差场景下的阴影与高光细节。`}</li>
                <li>• {`航拍能获得最震撼的视觉效果，但务必提前查询并严格遵守法国的无人机飞行法规，该区域可能属于限制区。`}</li>
                <li>• {`尊重遗迹，绝不为了构图移动任何一块石头或残片，也避免使用过于刺眼的补光灯干扰其他游客的体验。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`山脚村庄的质朴民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在杜雅克或附近如鲁克图尔的小村庄里，醒来开窗就是城堡雄姿，夜晚无比静谧，只有星空和虫鸣。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`中世纪修道院改造的精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`距离城堡车程半小时内，有几座由古老修道院修复的酒店，石墙、回廊、幽静花园，氛围感直接拉满。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`科比耶尔葡萄酒产区的庄园住宿`}</h4>
                  <p className="text-sm text-yellow-800">{`如果追求更多舒适和美食，可以选择住在产区内的特色庄园，白天探访城堡，晚上品尝本地葡萄酒。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`卡尔卡松古城外的舒适旅馆`}</h4>
                  <p className="text-sm text-purple-800">{`若想以卡尔卡松为基地辐射游览多个城堡，可以选择古城外停车方便的现代旅馆，兼顾便利与性价比。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（7-8月）是绝对旺季，务必提前数月预订心仪的特色住宿，尤其是村庄内的民宿很快会被订空。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`山区村庄夜晚几乎没有商业活动，餐饮选择也极少，预订时确认是否含早餐，并做好在住宿处用晚餐或驱车外出觅食的准备。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果对夜间绝对黑暗和寂静不太适应，或许选择稍远一点、略有规模的小镇住宿会是更放松的选择。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开佩雷帕蒂斯很久之后，那种站在世界边缘的感觉依然会清晰地回来。它不像许多景点那样，给你直接的、愉悦的感官享受。它给你的，是一种“空腹感”。一种被巨大的自然力量和沉重的历史掏空，又同时被填进了一些更坚硬东西的感觉。在这里，辉煌不是用金箔和彩绘来定义的，而是用坚持的长度、生存的难度来衡量的。每一道为了在绝壁上取水而开凿的沟渠，每一堵为了抵御北方寒风而加厚的石墙，都在无声地讲述着人类意志所能达到的极限。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个一切都被加速、被平滑、被便捷化的世界里，佩雷帕蒂斯的存在是一种必要的“反叛”。它强迫你慢下来，用汗水而非快门去接近；它拒绝被轻易消费，只向那些愿意付出体力与诚意的访客袒露心扉。它不是一个关于胜利的故事，而是一个关于幸存、关于在边缘地带如何保持尊严的故事。拜访它，就像打开了一本用石头写成的哲学书。你会明白，有些地方的美，源于其深刻的孤独与坚韧。这种美，能让你在回到自己拥挤喧闹的世界后，心头始终保有一片高处的、清冽而自由的风。这正是深度旅行所能给予我们的，最珍贵的礼物。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/minerve-cathar-citadel" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    米
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">米内尔沃</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Minerve</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sarlat-la-caneda-medieval-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨拉拉卡内达</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sarlat-la-Canéda</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/pezenas-languedoc" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩泽纳斯（莫里哀钟爱的十七世纪古典喜剧之城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pézenas</p>
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
