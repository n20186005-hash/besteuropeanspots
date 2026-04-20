import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '迪米察纳火药工坊 Dimitsana Gunpowder Mills｜隐藏在山谷中的希腊独立命脉 - 最佳欧洲景点',
  description: '车子沿着伯罗奔尼撒半岛腹地盘旋的山路向上爬升，当窗外的景色从橄榄园骤然变成深不见底的松林峡谷时，迪米察纳小镇就像鹰巢一样悬在对面山崖上。但我们的目的地不在镇上，而在它脚下那道被浓密树冠遮盖的卢西奥斯河峡谷深处。把车停在路旁一个不起眼的小空地，沿着一条湿漉漉的碎石小径往下走，世界瞬间安静了，只剩下自己...',
}

export default function DimitsanaGunpowderMillsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '迪米察纳（伯罗奔尼撒的火药加工中心遗址）', href: '/attractions/dimitsana-gunpowder-mills' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`迪米察纳（伯罗奔尼撒的火药加工中心遗址）・Dimitsana・希腊・伯罗奔尼撒半岛，阿卡迪亚地区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着伯罗奔尼撒半岛腹地盘旋的山路向上爬升，当窗外的景色从橄榄园骤然变成深不见底的松林峡谷时，迪米察纳小镇就像鹰巢一样悬在对面山崖上。但我们的目的地不在镇上，而在它脚下那道被浓密树冠遮盖的卢西奥斯河峡谷深处。把车停在路旁一个不起眼的小空地，沿着一条湿漉漉的碎石小径往下走，世界瞬间安静了，只剩下自己踩碎枯叶的沙沙声，以及一种越来越清晰的、低沉而恒久的轰鸣——那不是雷声，是无数条山涧溪流汇聚成的澎湃水声。空气变得冰凉而湿润，带着苔藓、腐烂木头和一种淡淡的、类似硝石的奇异气息。
顺着水声走到谷底，景象豁然开朗。阳光艰难地穿过高处的枝叶，在奔腾的溪流上洒下晃动的光斑。就在这溪流两岸，依附着陡峭的岩壁，你会看到一些低矮、粗糙的石屋废墟，它们几乎与背景的岩石同色，屋顶早已坍塌，只剩下被烟火熏得发黑的墙壁。几架巨大的木制水车骨架静静地躺在水边，有些还半浸在泛着白沫的激流里。这里没有丝毫宫殿或神庙的庄严，只有一种赤裸裸的、关于生产的朴素痕迹。然而，当你把手放在那些冰凉、被水流冲刷得光滑的石槽上时，一种强烈的历史电流会瞬间贯穿全身——就是在这里，就是利用这最简单的水力，硝石、硫磺和木炭被一次次捶打、研磨，化作了让一个古老民族重获新生的硝烟。
今天的峡谷是宁静的，只有徒步者和历史爱好者偶尔到访。但对于希腊人，尤其是伯罗奔尼撒的当地人来说，这个地方承载着近乎神圣的家族记忆。许多老人的曾祖父可能曾在这里秘密劳作。它不像卫城那样是文明的丰碑，而更像一个民族的伤疤与勋章并存之地，一种深植于土地和溪流中的韧性证明。它的核心魅力不在于视觉的宏伟，而在于一种“沉浸式理解”——理解一段历史如何从最具体的物理力量（落水的重力）中诞生，理解自由有时并非诞生于广场的呐喊，而是源于深山密林中这些单调而危险的水锤撞击声。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子沿着伯罗奔尼撒半岛腹地盘旋的山路向上爬升，当窗外的景色从橄榄园骤然变成深不见底的松林峡谷时，迪米察纳小镇就像鹰巢一样悬在对面山崖上。但我们的目的地不在镇上，而在它脚下那道被浓密树冠遮盖的卢西奥斯河峡谷深处。把车停在路旁一个不起眼的小空地，沿着一条湿漉漉的碎石小径往下走，世界瞬间安静了，只剩下自己踩碎枯叶的沙沙声，以及一种越来越清晰的、低沉而恒久的轰鸣——那不是雷声，是无数条山涧溪流汇聚成的澎湃水声。空气变得冰凉而湿润，带着苔藓、腐烂木头和一种淡淡的、类似硝石的奇异气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`顺着水声走到谷底，景象豁然开朗。阳光艰难地穿过高处的枝叶，在奔腾的溪流上洒下晃动的光斑。就在这溪流两岸，依附着陡峭的岩壁，你会看到一些低矮、粗糙的石屋废墟，它们几乎与背景的岩石同色，屋顶早已坍塌，只剩下被烟火熏得发黑的墙壁。几架巨大的木制水车骨架静静地躺在水边，有些还半浸在泛着白沫的激流里。这里没有丝毫宫殿或神庙的庄严，只有一种赤裸裸的、关于生产的朴素痕迹。然而，当你把手放在那些冰凉、被水流冲刷得光滑的石槽上时，一种强烈的历史电流会瞬间贯穿全身——就是在这里，就是利用这最简单的水力，硝石、硫磺和木炭被一次次捶打、研磨，化作了让一个古老民族重获新生的硝烟。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的峡谷是宁静的，只有徒步者和历史爱好者偶尔到访。但对于希腊人，尤其是伯罗奔尼撒的当地人来说，这个地方承载着近乎神圣的家族记忆。许多老人的曾祖父可能曾在这里秘密劳作。它不像卫城那样是文明的丰碑，而更像一个民族的伤疤与勋章并存之地，一种深植于土地和溪流中的韧性证明。它的核心魅力不在于视觉的宏伟，而在于一种“沉浸式理解”——理解一段历史如何从最具体的物理力量（落水的重力）中诞生，理解自由有时并非诞生于广场的呐喊，而是源于深山密林中这些单调而危险的水锤撞击声。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`迪米察纳（伯罗奔尼撒的火药加工中心遗址）`} />
                <InfoRow label="英文名称" value={`Dimitsana`} />
                <InfoRow label="正式名称" value={`The Gunpowder Mills of Dimitsana`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`伯罗奔尼撒半岛，阿卡迪亚地区`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`希腊独立战争（1821-1829年）期间最重要的火药生产中心，堪称现代希腊诞生的“秘密军火库”。`} />
                <InfoRow label="建筑特色" value={`因地制宜、巧妙利用湍急溪流水力驱动的隐蔽式手工作坊群。`} />
                <InfoRow label="建筑风格" value={`朴素至极的功能主义工业遗存，与自然岩石和森林融为一体。`} />
                <InfoRow label="文化价值" value={`见证了希腊民族为自由而战时，将智慧、自然力量与坚定意志相结合的非凡创造力。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`遗址区为露天环境，全天开放，可自由进入。附设的“迪米察纳露天水动力博物馆”开放时间更具参考性：夏季（4月至10月）通常为每天上午10点至下午6点；冬季（11月至3月）开放时间缩短，多为上午10点至下午4点，且周一可能闭馆。最佳参观季节是春季和秋季，气候宜人，绿意盎然或秋色绚烂。`} />
              <InfoRow label="门票价格" value={`遗址本身免费参观。若进入“迪米察纳露天水动力博物馆”参观，有象征性门票，约为2-3欧元。学生、老年人和儿童通常有优惠。具体价格可能微调，建议携带少量现金。`} />
              <InfoRow label="地址" value={`Dimitsana 220 07, Greece`} />
              <InfoRow label="交通方式" value={`从雅典国际机场出发，租车自驾是最推荐的方式。沿E94/E65高速公路向西南行驶，经过特里波利斯后转入山区道路，全程约200公里，需3-3.5小时。山路蜿蜒但路况良好，沿途风景壮丽。若依赖公共交通，可从雅典的基菲索斯长途汽车站乘坐巴士前往特里波利斯，再换乘前往迪米察纳镇的本地巴士，班次有限，日均2-3班，全程耗时约4.5-5小时以上，务必提前查好时刻表。小镇是探索遗址的完美基地。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从18世纪末的伯罗奔尼撒说起。那时，这里还处于奥斯曼帝国的统治之下。迪米察纳这座高踞在山顶的城镇，以其偏远和险峻，早已成为希腊文化和东正教信仰的一个隐秘堡垒，著名的“迪米察纳学校”培养了许多学者。然而，山下的卢西奥斯河峡谷，除了充沛的水力，还蕴藏着另一种资源：附近山区的洞穴能产出硝石（火药的关键成分）。不知从何时起，一些简单的、利用水流来捣碎矿物原料的作坊在这里悄然出现。起初，它们可能只是生产一些民用物品。但到了1821年，当希腊独立战争的烽火在伯罗奔尼撒率先点燃时，这些作坊的命运被彻底改变了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`起义军面对的是一个庞然大物般的帝国，他们最缺乏的正是现代战争的血脉：火药和子弹。传统的供应线被切断，他们必须自给自足。于是，迪米察纳峡谷从默默无闻的后勤角落，一跃成为战争中最关键、也最脆弱的战略心脏。当地的主教、修士和村民们展现出了惊人的组织和智慧。他们不仅扩大了生产规模，更将保密工作做到了极致。作坊分散在峡谷密林的不同地段，依靠复杂的水渠系统驱动水车，水车再带动沉重的木槌，日夜不息地捶打原料。生产是极其危险的，爆炸事故时有发生，但工人们依然坚守。整个生产网络就像峡谷本身一样——从外面看，只有森林和溪流；只有深入其中，才能听到那代表希望与反抗的规律捶打声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`关键人物并非某一位将军，而是一个匿名的集体。有史料提到，当地圣约翰修道院的修士们深度参与了组织和生产工作，将信仰的力量转化为实际的支援。峡谷生产的火药，被勇敢的民众和战士用驴队驮着，穿越奥斯曼军队的封锁线，运往迈索隆吉翁、纳夫普利翁等血腥战场。可以说，每一阵推动希腊独立事业前进的硝烟里，都混合着卢西奥斯河的水汽和迪米察纳工人的汗水。这里没有发生惊天动地的战役，但这里持续不断的低沉声响，却是那场战争中最持久、最重要的背景音之一。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战争结束后，统一的希腊王国建立了。随着现代工业化兵工厂的出现，这些简陋、效率有限的水力火药坊逐渐完成了历史使命，被废弃在日益茂盛的丛林之中。水车停止了转动，石屋被风雨侵蚀，曾经关乎国运的机密场所，慢慢变成了牧羊人避雨的地方和孩子们探险的乐园。它几乎要被时间彻底遗忘，成为峡谷自然循环的一部分。直到20世纪后期，随着人们对工业遗产和历史细节的重新审视，学者们才系统地回溯和评估了这些遗址的价值。它们不是被“重建”，而是被小心地“清理”和“标识”出来，最大程度地保留了其废弃后的原始状态——那种破败感，正是其历史叙述中不可或缺的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如今，当你漫步在遗址间，看到的不是光鲜的复原模型，而是真实的沧桑。一些主要工坊的位置立起了简单的说明牌，讲述着这里曾经的功能。峡谷上游建起了一座小巧但内容扎实的露天水动力博物馆，用实物和模型展示了从面粉研磨到火药制造等各种传统水力机械。这使得迪米察纳的叙事更加完整：它不仅是战争的记忆，更是人类如何驾驭自然力量的永恒范例。从粉碎谷物到粉碎压迫，驱动水车的同一条溪流，滋养了生命，也最终捍卫了生命的尊严。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`理想的深度游览需要安排大半天时间。建议上午约十点从小镇出发，此时峡谷光线逐渐充沛，温度适宜。整个行程节奏宜缓不宜急，核心是沉浸式的感知与想象。先参观峡谷上方的露天水动力博物馆，建立知识背景，耗时约1小时。然后沿着清晰标识的徒步小径下行，深入卢西奥斯河峡谷，逐一探访散布的各个火药工坊遗址，这段路程走走停停、拍照沉思，建议预留2-3小时。最后沿小径环线返回停车点或小镇。总耗时约4-5小时。这样安排的好处是，你能带着从博物馆获得的理解去“阅读”废墟，让沉默的石头开始诉说故事，整个体验会从视觉游览升华为一次深刻的历史共情。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双结实防滑的徒步鞋，小径潮湿且有碎石，普通运动鞋容易打滑。
峡谷内没有商业设施，记得从小镇带足饮用水和一点零食，但请务必带走所有垃圾。
保持安静是对历史遗址最好的尊重，避免喧哗，让你和他人都能沉浸在那份由自然与历史共同营造的静谧氛围中。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在峡谷上方博物馆附近的空地，先走进那座露天博物馆亲手摇动古老的水车模型，理解“水力”如何成为这一切的引擎。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着博物馆后方向下的石阶小径开始徒步，耳边溪流声越来越大，鼻腔里充满潮湿的森林气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在小径的第一个开阔拐角停下，俯瞰下方若隐若现的工坊废墟和奔腾的卢西奥斯河，尝试在脑海中抹去茂密的树木，想象200年前这里的繁忙与隐秘。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到谷底的主工坊群遗址，触摸那些被熏黑的墙壁和残存的水渠石槽，蹲下身观察水流依然如何沿着古老的路径奔涌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找那座保存相对完好、带有巨大水车轴孔的石屋废墟，站在屋内仰望天空，想象工人在此劳作时空气中弥漫的粉尘与紧张。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着溪流向上游或下游漫步，发现那些更为隐蔽、只剩地基的小型作坊遗迹，体会当时分散布局的军事智慧。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在溪流边找一块平坦的石头坐下，闭上眼睛，只听水声、风声和鸟鸣，然后尝试在想象中加入木槌规律的撞击声和工人们的低语。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着环线的上坡小径缓缓返回，途中回望峡谷，感受这段历史如何最终沉寂，又因我们的拜访而被重新激活。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`峡谷全景机位`}</h4>
                  <p className="text-sm text-gray-700">{`从下行的主要小径上，大约在全程三分之一处的一个之字形弯道，有一块天然巨石平台，上午十一点左右阳光能较好照亮峡谷对岸的岩壁和部分废墟，用广角镜头可以收纳溪流、森林与废墟的层次。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主工坊废墟内部`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，阳光近乎直射，会从没有屋顶的废墟墙壁上方投入光束，站在工坊内部角落，拍摄对面墙上光影分割的鲜明对比以及斑驳的熏黑痕迹，极具戏剧感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`溪流与水车遗迹`}</h4>
                  <p className="text-sm text-gray-700">{`下午两三点，阳光斜射入峡谷，在水面形成粼粼波光，寻找一处仍有完整木质结构残骸的水车位置，使用慢门（如1/4秒或更长）拍摄溪水流过残骸的动感，与静止的石头形成虚实对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`细节特写机位`}</h4>
                  <p className="text-sm text-gray-700">{`任何时间，专注于拍摄那些被水流打磨得圆润的石槽边缘、锈蚀的铁器残件、或是石缝中顽强生长的野花，使用大光圈虚化杂乱的背景，突出历史的质感与时间的流逝。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`峡谷内光线复杂，明暗对比强烈，建议使用RAW格式拍摄，以便后期更好地恢复阴影和高光细节。`}</li>
                <li>• {`考虑到环境潮湿多水，一个轻便的相机清洁布很有用。尽量避免在瀑布或急流正上方更换镜头。`}</li>
                <li>• {`尊重遗址，切勿为了拍照而攀爬或移动任何历史残骸，你的镜头应该记录它本来的状态。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`小镇家庭旅馆`}</h4>
                  <p className="text-sm text-blue-800">{`住在迪米察纳镇中心由石头老屋改造的家庭旅馆，主人会为你端上自家产的蜂蜜和果酱，傍晚在种满天竺葵的小阳台就能欣赏到峡谷方向的壮丽日落。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色石屋民宿`}</h4>
                  <p className="text-sm text-green-800">{`选择峡谷边缘一栋独立的历史石屋民宿，夜晚万籁俱寂，只有星空和潺潺水声伴你入眠，体验真正的“隐居”感。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`山景精品酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`入住小镇较高处经过现代设计的精品酒店，房间拥有整面玻璃窗，将连绵的群山和深邃的峡谷尽收眼底，在私密阳台享受早餐是绝佳开始。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`修道院静修体验`}</h4>
                  <p className="text-sm text-purple-800">{`如果时机合适且不介意简朴，可以尝试预订附近古老修道院提供的极简客房（通常需提前邮件询问并尊重宗教礼仪），这将是精神与历史双重意义上的深度沉浸。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`迪米察纳小镇本身非常安全，民风淳朴，但夜间山路照明有限，如果住在较偏远的民宿，建议天黑前返回。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`旺季（夏季和春秋假期）小镇住宿紧张，务必提前数周乃至数月预订，尤其是那些特色石屋。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`许多住宿地点不提供每日客房清洁，或需要与主人共用部分空间，预订时请确认细节，这正是体验本地生活的一部分。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开迪米察纳峡谷，重新回到山路上，耳朵里似乎还回荡着那混合的水声与想象中的捶打声。这个地方带给我的，不是那种面对伟大艺术时的眩晕感，而是一种沉甸甸的、近乎泥土般的踏实触动。它让你明白，历史的转折点不仅仅发生在王座厅和战场上，也同样发生在这条无名峡谷的每一滴落水中。在这里，自由不是一个抽象的口号，它是需要被捶打、研磨、提纯出来的物质，是工人们脸上混合着汗水和粉尘的专注，是夜晚运输队在山间小路上屏住的呼吸。这种将宏大叙事落实于具体物理过程的感知，无比珍贵。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求即时满足、信息爆炸的快节奏世界里，迪米察纳就像一剂温和而坚定的解毒剂。它要求你慢下来，徒步走近它；它要求你动用想象力，去倾听寂静中的回响；它最终告诉你，最持久的力量往往来自最朴素的原则——利用自然、集体协作、在隐秘中积蓄。每一位热爱深度游的旅人，都应该来这里上一堂不一样的“历史课”。这堂课没有金碧辉煌的教室，它的教材是溪流、石头和废墟，而它讲授的，是关于韧性、智慧以及一个民族如何亲手锻造自己命运的永恒故事。这不是一个你会用来打卡炫耀的地方，但它会悄无声息地住进你的记忆里，在日后某些时刻，给你一种沉静而坚实的力量。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/mycenae" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迈锡尼遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mycenae</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chania-venetian-harbour" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈尼亚威尼斯港</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Chania Venetian Harbour</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/meteora-monasteries-greece" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅黛奥拉（天空之城修道院）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Meteora</p>
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
