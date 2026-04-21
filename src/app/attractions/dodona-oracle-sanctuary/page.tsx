import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '多多纳神谕所深度旅游攻略：倾听千年橡树宙斯低语的自由行指南',
  description: '探索希腊最古老的神谕中心多多纳（Dodona）。这份深度游攻略带你揭秘祭司如何解读橡树叶声，包含完整的一日游路线、避坑指南与周边玩法。',
}

export default function DodonaOracleSanctuaryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '希腊', href: '/destinations/greece' },
            { label: '多多纳', href: '/attractions/dodona-oracle-sanctuary' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`多多纳・Dodona・希腊・伊庇鲁斯`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你觉得德尔斐已经够神秘了，那我今天这份**多多纳私藏旅游攻略**，可要彻底刷新你对“古老”的认知。想象一下，在希腊西北部伊庇鲁斯连绵的群山环抱中，隐藏着一个比德尔斐还要早上千年的圣地。这里没有德尔斐的游人如织，只有风吹过山谷的呜咽，和脚下碎石诉说的、真正属于神话时代的故事。作为你的专属向导，这份**多多纳自由行指南**就为你揭开它的面纱。这里的神谕，并非来自地缝的蒸汽，而是来自一棵巨大神圣橡树的树叶沙沙声——祭司们坚信，那是宙斯本尊在低语。今天的旅程，不止是看一堆石头遗迹，更是一场学习如何“倾听”的练习。准备好你的好奇心，我们出发吧。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友，如果你觉得德尔斐已经够神秘了，那我今天这份<strong>多多纳私藏旅游攻略</strong>，可要彻底刷新你对“古老”的认知。想象一下，在希腊西北部伊庇鲁斯连绵的群山环抱中，隐藏着一个比德尔斐还要早上千年的圣地。这里没有德尔斐的游人如织，只有风吹过山谷的呜咽，和脚下碎石诉说的、真正属于神话时代的故事。作为你的专属向导，这份<strong>多多纳自由行指南</strong>就为你揭开它的面纱。这里的神谕，并非来自地缝的蒸汽，而是来自一棵巨大神圣橡树的树叶沙沙声——祭司们坚信，那是宙斯本尊在低语。今天的旅程，不止是看一堆石头遗迹，更是一场学习如何“倾听”的练习。准备好你的好奇心，我们出发吧。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`多多纳`} />
                <InfoRow label="英文名称" value={`Dodona`} />
                <InfoRow label="正式名称" value={`Dodona`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`伊庇鲁斯`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`在希腊众神谕所中，多多纳的辈分绝对是“祖师爷”级别。它的起源模糊在神话与史前传说的迷雾里，荷马在《伊利亚特》中就提到，阿喀琉斯的父亲曾向“橡树旁的宙斯”祈求。学者们认为，它的崇拜可能始于公元前二千纪，最初供奉的是一位前希腊时代的母神或地神，后来才与宙斯崇拜融合。这意味着，当雅典卫城还只是个构想，当罗马还只是台伯河边的村落时，多多纳的橡树叶就已经在传达神意了。它的地位独特而原始：不同于德尔斐服务于城邦政治与殖民，多多纳更贴近个人与日常生活。古希腊世界的普通人，会千里迢迢来到这里，问询关于婚姻、生意、疾病、失窃物品的琐事。它就像一个跨越千年的“人生答疑热线”，只不过接线员是宙斯，信号是风声。在古典时期，它虽然被德尔斐的光芒掩盖，但始终是希腊世界极受尊敬的圣地之一，其影响力持续到罗马时代早期，直到基督教崛起，这古老的声音才最终沉寂。`} />
                <InfoRow label="建筑特色" value={`踏入遗址，首先震撼你的不是宏伟，而是一种苍凉、原始的力量感。建筑大多使用当地的灰褐色石灰岩，经过千年风霜，呈现出一种温暖又冷峻的色调。遗址的核心是那个巨大的**古希腊剧场**，它嵌在山坡上，保存之完好令人惊叹。73排观众席呈完美的扇形展开，能容纳约1.8万人，是希腊最大的剧场之一。石凳被岁月磨得光滑，在午后阳光下泛着蜜糖般的光泽。想象一下，这里曾上演过悲剧，声音能清晰地传到最远一排。剧场的上方，是神谕所和神庙的废墟。你会看到圣殿（Hierón）的基座，石头上留着立柱的凹槽。最神圣的区域用矮墙标示，中心就是那棵**神圣橡树**的所在地（现在有一棵小橡树作为象征）。附近的“ Bouleuterion”（议事厅）遗址，石头堆叠得有些杂乱，却依稀能辨出方形结构的轮廓。整个遗址没有耀眼的马赛克或精美的浮雕，它的美在于粗粝的质感和与自然地形浑然一体的布局，仿佛这些建筑是从山体中生长出来的。`} />
                <InfoRow label="建筑风格" value={`多多纳的建筑主要体现了**古典时期晚期到希腊化时期**的风格，并带有明显的因地制宜的朴素感。那个巨大的剧场是典型的希腊化风格代表作：规模宏大，利用自然坡度，视野开阔，追求实用性和容纳能力。它的“管弦乐队”区域（舞台前圆形场地）是完整的圆形，比古典时期更早的半圆形形制更为先进，用于举办音乐比赛和公民集会。至于神庙建筑，由于屡遭破坏（特别是公元前219年埃托利亚人的入侵），重建多次，风格上更偏重实用主义的多立克式。柱子粗壮，线条简洁，没有过多装饰，这与圣地原始的、与自然对话的属性非常契合。建筑的布局也很有趣，它不是中轴线对称的庄严排列，而是围绕着神圣橡树这一核心自然元素，呈一种有机的、散落的状态。你可以说这里的建筑风格是“朴素的古典主义”，它服务于功能——容纳朝圣者、进行仪式、保护圣树，而非一味追求视觉的奢华，这反而让它有了一种德尔斐所不具备的、接地气的神圣感。`} />
                <InfoRow label="文化价值" value={`多多纳的文化价值，在于它揭示了古希腊宗教中**极其原始而感性的一面**。在哲学与理性萌芽的希腊，这里保留了一条直通万物有灵时代的通道。倾听树叶声、铜釜嗡鸣声、鸽子咕咕声（另一种传说）来获取神谕，这是一种基于“感知”而非“解读”的沟通。它对当地伊庇鲁斯人而言，是身份与独立的象征。在长期被强大的南方城邦（如雅典、斯巴达）视为边缘“蛮族”的背景下，拥有一个如此古老、连荷马都提及的泛希腊圣地，是他们的文化骄傲。对于现代社会，多多纳的价值是一种提醒：在科技时代，我们是否遗忘了另一种“聆听”的能力？聆听自然细微的变化，聆听内心的直觉。遗址本身也是一个持续的文化现场，夏季，那个古老的剧场会重新“复活”，举办戏剧节和音乐会。当现代艺术的声音再次回荡在这千年石壁间，与想象中的橡树叶沙沙声重叠时，那种跨越时空的文化对话，本身就是无价之宝。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 多多纳遗址一日游打卡路线攻略：从神谕所到希腊最大剧场`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行精华步行路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的向导，我建议把一天的美好时光都留给这里，节奏放缓，用心感受。**上午**：最好早点从约阿尼纳出发，避开暑热。抵达后，先在**售票处旁的小博物馆**热身（虽然小，但藏品关键）。花20分钟看看那些刻满问题的铅板、还愿小雕像，你会对接下来的废墟有具体想象。然后，正式进入遗址。别急着冲，站在高处俯瞰整个山谷和剧场，拍张全景。接着，直奔最核心的**神谕区**——那圈矮墙围起的橡树象征处。闭上眼睛站一会儿，听听今天的风声，完成你与宙斯“神交”的仪式。**中午**：从神谕区慢慢走下，进入那个令人震撼的**大剧场**。此时阳光正好，坐在最高一排的石凳上，拿出简单的午餐（三明治、水果），一边吃一边幻想公元3世纪这里座无虚席的盛况。这是属于你的“包场”时刻。**下午**：饭后精力恢复，可以细致探索剧场细节，走到圆形“管弦乐队”区域中心喊一嗓子，听听回声。然后去探索西侧的**神庙遗址**（雅典娜神庙等）和**议事厅**废墟。最后，如果还有时间，沿着遗址边缘的小路散散步，从不同角度回望剧场，你会发现它在不同光线下有不同的表情。日落前，心满意足地离开。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>神圣橡树的“回声”</strong>：在神谕区中心，你会看到那棵现代种植的小橡树。关键不是看树，而是感受那个“场”。蹲下来，触摸周围那些古老、被磨得光滑的基石。想象一下，当年那棵参天古橡树就立于此，祭司们屏息凝神，从千百种自然风声里，精准捕捉那被认为是“宙斯之声”的特定沙沙响。这一刻，神话变成了可感知的物理现象。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>剧场最高排的帝王视野</strong>：一定要爬上73排观众席的<strong>最顶端</strong>。当你气喘吁吁地坐下转身，眼前的景象会让你忘记疲劳。整个马蹄形剧场尽收脚下，远处是坦佩隆山脉的绿色波浪。试着对你的同伴（或自己）轻轻说句话，声音清晰得惊人。古希腊人惊人的声学设计，在此刻与你直接对话。这个视角，是任何攻略图片都无法给予的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>刻满焦虑的铅板</strong>：在博物馆里，仔细寻找那些小小的、卷曲的<strong>铅板</strong>。上面刻着古人的问题：“赫拉克莱德斯是否偷了我的钱？”“我该娶谁为妻？”“我的病能好吗？”字迹歪斜，却充满真实的焦虑与期盼。这些铅板曾被卷起，扔向圣所，等待神谕的解答。它们比任何宏伟雕像都更动人，是穿越千年的、鲜活的人间烟火。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>祭坛的沧桑石面</strong>：在神庙区附近，寻找那些大型的<strong>祭坛基石</strong>。石面并不平整，布满斑驳的坑洼和深色的沉积痕迹。那不仅仅是风化，很可能是在漫长岁月里，无数祭酒（葡萄酒、牛奶、蜂蜜）浇灌、血液浸染后留下的“记忆”。将手轻轻覆上，冰凉粗糙的触感，直接连接着数千年的虔诚与祈愿。" }} />
            </div>
          </Section>

          <Section title={`5. 多多纳自由行避坑指南与行前关键须知`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>时间与天气是王道</strong>：<strong>最佳游览时间是春季（4-6月）和秋季（9-10月）</strong>。夏季（7-8月）非常炎热，遗址毫无遮荫，务必戴宽檐帽、墨镜，涂抹高倍数防晒霜，并携带大量饮用水。冬季则可能多雨寒冷，山路湿滑。尽量<strong>工作日早上开门时抵达</strong>，你能享受几乎无人的静谧，光线也最适合拍照。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>交通是最大挑战，建议自驾</strong>：多多纳的公共交通极其不便。从最近的城镇约阿尼纳（Ioannina）出发，每天可能只有一两班巴士，且耗时不定。<strong>最可靠的方式是租车自驾</strong>，车程约30分钟，自由度也高。如果实在无法自驾，可以考虑从约阿尼纳参加半日游旅行团或预订出租车（需提前谈好往返价格和等待时间）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>穿着与装备务必讲究</strong>：遗址内全是<strong>凹凸不平的碎石路和草地</strong>，绝对不要穿凉鞋或高跟鞋！一定要穿<strong>舒适防滑的运动鞋或登山鞋</strong>。穿着建议分层，山区天气多变，一件防风外套很有用。带上小背包，装水、防晒用品和少量零食，遗址内无任何售卖点。" }} />
            </div>
          </Section>

          <Section title={`6. 多多纳周边住宿与伊庇鲁斯美食攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "多多纳遗址本身附近几乎没有住宿和商业设施。你的大本营应该设在<strong>约阿尼纳</strong>。推荐住在<strong>约阿尼纳老城（城堡内）或傍湖的区域</strong>。城堡内有由奥斯曼时期老宅改造的精品酒店，充满历史感，推窗即是石板小巷。湖景酒店则能让你在帕姆沃提斯湖的晨雾中醒来。美食是伊庇鲁斯之旅的亮点！在约阿尼纳，一定要尝试：<strong>派馅饼</strong>（当地特色，馅料是野菜、乳酪等）、用湖中特产<strong>鳗鱼或鳟鱼</strong>制作的菜肴、以及各种美味的<strong>乳制品</strong>（伊庇鲁斯以优质牧草闻名）。在老城找一家热闹的“ taverna”，点上一盘混合烤蘑菇（山区盛产）、一份炖羊肉，佐以本地葡萄酒，为探索古老神迹的一天画上完美的现代句点。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>约阿尼纳城堡与老城</strong>：从多多纳返回约阿尼纳后，一定要留时间给这里。这座<strong>巨大的湖畔城堡</strong>本身就是一座活生生的博物馆，里面有奥斯曼时期的清真寺（现为市政博物馆）、菲蒂耶清真寺、阿里帕夏的奢华宫殿遗址，以及著名的犹太会堂。在老城迷宫般的银器店小巷里穿梭，听工匠敲打银器的叮当声，与多多纳的远古感形成奇妙对照。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>帕姆沃提斯湖与“岛村”</strong>：租条小船或搭乘渡轮，前往湖中心的<strong>小岛</strong>。岛上如童话般，有建于13世纪的修道院群（特别是菲洛忒圣母院和圣潘捷雷伊蒙修道院），绿树掩映，宁静出尘。在岛上的咖啡馆喝一杯希腊咖啡，看湖光山色，能瞬间洗去所有旅途疲惫。这片湖光山色，或许正是古代祭司们灵感的来源之一。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "多多纳的灵魂，不在于惊世骇俗的建筑残骸，而在于那份<strong>未被过度修饰的原始真诚</strong>。它教会你的不是仰望，而是俯身倾听——倾听风，倾听石，倾听自己内心深处那些细微如橡树叶沙沙响的直觉。当你离开时，带走的不是一张与完美古迹的合影，而是一双被训练过的、更善于在寂静中捕捉回响的耳朵。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kastellorizo-island-megisti" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡斯特罗里佐岛（梅吉斯蒂）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kastellorizo (Megisti)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/nafplio-greece" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    纳
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">纳夫普利翁</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Nafplio</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/mount-athos" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿索斯山</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mount Athos</p>
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
