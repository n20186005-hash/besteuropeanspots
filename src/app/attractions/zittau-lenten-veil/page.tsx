import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '齐陶巨型四旬期帷幕 Zittau Lenten Veil｜探秘欧洲仅存的中世纪巨幅“禁欲之布” - 最佳欧洲景点',
  description: '说真的，当我按照导航找到这个地方时，第一反应是：“就这？”它不像科隆大教堂那样用尖塔刺破天空宣告存在，也不像新天鹅堡那样在童话山崖上招摇。它只是齐陶老城里一栋不太起眼的、有着尖拱窗的砖石建筑，安静地杵在街角，旁边是家飘着咖啡香的面包房。推开那扇厚重的木门，外面的市井喧哗像被一刀切断。空气瞬间变得清凉...',
}

export default function ZittauLentenVeilPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '齐陶大帷幕博物馆', href: '/attractions/zittau-lenten-veil' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`齐陶大帷幕博物馆・Zittau・德国・齐陶`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说真的，当我按照导航找到这个地方时，第一反应是：“就这？”它不像科隆大教堂那样用尖塔刺破天空宣告存在，也不像新天鹅堡那样在童话山崖上招摇。它只是齐陶老城里一栋不太起眼的、有着尖拱窗的砖石建筑，安静地杵在街角，旁边是家飘着咖啡香的面包房。推开那扇厚重的木门，外面的市井喧哗像被一刀切断。空气瞬间变得清凉、沉静，带着一丝老建筑特有的、类似旧书和石头混合的淡淡气味。
我的眼睛花了几秒钟适应昏暗。然后，我就被“钉”在了原地。在展厅的尽头，整整一面墙，被一幅巨大的、泛着象牙黄光泽的亚麻布完全占据。它大得超乎想象，像一片温柔的、有质感的古老月光，从高处垂落下来。这就是那幅著名的“四旬期帷幕”。我慢慢走近，脚步声在空旷的殿堂里回响。起初它看起来像一片巨大的空白，但渐渐地，上面用蛋彩颜料绘制的四十个圣经故事场景，如同显影般浮现在亚麻的经纬之间。你能看到颜料的龟裂，时间的磨损，但那些线条，那些人物惊恐或虔诚的表情，却有着一种直击人心的朴素力量。
你忽然就明白了它的用途——在复活节前的四十天斋戒期，它被悬挂在教堂祭坛前，将华丽的圣像、金光闪闪的祭器全部遮盖。信徒们面对的就是这片巨大的“空白”和上面的圣经故事。没有视觉的狂欢，只有内心的自省与故事的沉思。这种“以遮蔽来揭示”的宗教智慧，此刻以一种无比直观、无比物理的方式震撼着你。它不是挂在墙上的画，它是一件曾经被使用、被需要、充满功能性的圣物。你能想象几个世纪前，农夫、工匠、主妇站在它面前，在漫长的斋月里，一天天看着这些画面，默默祈祷的场景。艺术不是用来欣赏的，信仰不是用来谈论的，生活与神圣在此没有隔阂。
今天，齐陶人谈起它，语气里有一种深藏的、复杂的自豪。不仅仅是因为它“世界唯一”的标签，更因为这幅帷幕的命运和这座边境小城的命运紧紧缠绕。它经历过战火，被隐藏，被遗忘，又在统一后被精心修复，重新成为城市的灵魂。它不再遮盖祭坛，却揭开了历史的一角，让每一个来访者都能触摸到时间那厚重而柔软的质地。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`说真的，当我按照导航找到这个地方时，第一反应是：“就这？”它不像科隆大教堂那样用尖塔刺破天空宣告存在，也不像新天鹅堡那样在童话山崖上招摇。它只是齐陶老城里一栋不太起眼的、有着尖拱窗的砖石建筑，安静地杵在街角，旁边是家飘着咖啡香的面包房。推开那扇厚重的木门，外面的市井喧哗像被一刀切断。空气瞬间变得清凉、沉静，带着一丝老建筑特有的、类似旧书和石头混合的淡淡气味。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`我的眼睛花了几秒钟适应昏暗。然后，我就被“钉”在了原地。在展厅的尽头，整整一面墙，被一幅巨大的、泛着象牙黄光泽的亚麻布完全占据。它大得超乎想象，像一片温柔的、有质感的古老月光，从高处垂落下来。这就是那幅著名的“四旬期帷幕”。我慢慢走近，脚步声在空旷的殿堂里回响。起初它看起来像一片巨大的空白，但渐渐地，上面用蛋彩颜料绘制的四十个圣经故事场景，如同显影般浮现在亚麻的经纬之间。你能看到颜料的龟裂，时间的磨损，但那些线条，那些人物惊恐或虔诚的表情，却有着一种直击人心的朴素力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你忽然就明白了它的用途——在复活节前的四十天斋戒期，它被悬挂在教堂祭坛前，将华丽的圣像、金光闪闪的祭器全部遮盖。信徒们面对的就是这片巨大的“空白”和上面的圣经故事。没有视觉的狂欢，只有内心的自省与故事的沉思。这种“以遮蔽来揭示”的宗教智慧，此刻以一种无比直观、无比物理的方式震撼着你。它不是挂在墙上的画，它是一件曾经被使用、被需要、充满功能性的圣物。你能想象几个世纪前，农夫、工匠、主妇站在它面前，在漫长的斋月里，一天天看着这些画面，默默祈祷的场景。艺术不是用来欣赏的，信仰不是用来谈论的，生活与神圣在此没有隔阂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天，齐陶人谈起它，语气里有一种深藏的、复杂的自豪。不仅仅是因为它“世界唯一”的标签，更因为这幅帷幕的命运和这座边境小城的命运紧紧缠绕。它经历过战火，被隐藏，被遗忘，又在统一后被精心修复，重新成为城市的灵魂。它不再遮盖祭坛，却揭开了历史的一角，让每一个来访者都能触摸到时间那厚重而柔软的质地。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`齐陶大帷幕博物馆`} />
                <InfoRow label="英文名称" value={`Zittau`} />
                <InfoRow label="正式名称" value={`齐陶大帷幕博物馆（藏有巨型四旬期斋戒帷幕）`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`齐陶`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`欧洲现存最大、保存最完好的中世纪四旬期帷幕，是理解中世纪晚期宗教实践与民众信仰的独一无二的实物丰碑。`} />
                <InfoRow label="建筑特色" value={`博物馆本身由一座哥特式教堂改建而成，其核心并非建筑结构，而是内部如同神圣剧场般陈列的罕见巨型亚麻布帷幕，营造出极具仪式感的沉浸式观展空间。`} />
                <InfoRow label="建筑风格" value={`建筑主体为质朴的萨克森哥特式风格，内部展陈设计则充满现代极简主义精神，以突出文物的本体。`} />
                <InfoRow label="文化价值" value={`它是一件罕见的“隐形”艺术品，其诞生、隐藏、重见天日的过程，本身就是一部浓缩的中欧地区宗教动荡与文化遗产顽强生存的史诗。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`博物馆开放时间为周二至周日的上午10点至下午5点，周一闭馆（除非是法定节假日）。特别注意，存放“大帷幕”的主展厅有时会因微气候维护在下午4点后停止进入，建议最晚在3点半前抵达。每年1月的前两周为深度维护期，不对外开放。`} />
              <InfoRow label="门票价格" value={`成人票8欧元，学生、残障人士及65岁以上长者票价为5欧元。持有“萨克森州博物馆通票”可免费进入。家庭票（2位成人+最多3名18岁以下儿童）为18欧元。每周四下午1点后，门票对所有人半价开放。`} />
              <InfoRow label="地址" value={`Museum Kirche zum Heiligen Kreuz，Klosterstraße 3，02763 Zittau，Germany`} />
              <InfoRow label="交通方式" value={`从最近的国际机场德累斯顿机场（DRS）出发，乘坐机场快线S2号线前往德累斯顿中央火车站（约25分钟）。在德累斯顿中央火车站搭乘开往齐陶（Zittau）的区域火车（RE2线），车程约1小时20分钟，每小时一班。抵达齐陶火车站后，出站即是老城区，博物馆位于镇中心，步行只需8分钟，跟着“Lenten Veil”的棕色旅游指示牌即可轻松找到。如果从波兰的波古佳尼采或捷克的利贝雷茨自驾过来，车程均在45分钟以内，老城周边有多个付费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从1472年说起。那时的齐陶，是波西米亚王国治下一个富裕的商贸城镇，羊毛和布料生意让它积累了令人艳羡的财富。虔诚的市民们决定为他们的圣十字教堂制作一件配得上其声望的圣物——一幅巨大的斋戒帷幕。你能想象那个场景吗？本地的画家和织工们，或许就在某个阳光充足的作坊里，展开这匹长达八米多、宽六米多的上好亚麻布。他们没有画板，这布就是他们的天地。他们用矿物和植物研磨成的颜料，混合蛋清，一笔一笔地，将《旧约》和《新约》里的关键故事，从创世纪到最后的审判，精心编排成四十个画面。这不是给王公贵族看的艺术，这是给所有识字或不识字的平信徒准备的“穷人圣经”。它的每一个褶皱，都可能凝结着某个工匠的呼吸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`此后的近百年，每年春天，这幅巨大的布幔都会在教堂里升起，宣告四旬斋期的开始。它目睹了宗教改革的浪潮冲刷这片土地，新教与天主教的拉锯让许多类似的圣像圣物被付之一炬。但齐陶的这幅帷幕奇迹般地留存了下来，或许是因为它本身叙事性的功能大于偶像崇拜，或许是当地市民对它有着特别的眷恋。它从祭坛前被小心取下，收藏起来，成了一段沉默的记忆。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的劫难在近代。二战末期，这座边境城市在战火中严重受损。混乱中，有远见的市民将这幅珍贵的帷幕和其他艺术品一起，转移到了城外一个偏僻城堡的地窖里。它在那里一躺就是几十年，度过了冷战的分隔岁月。东德时期，它曾被短暂发现并研究，但巨大的体积和脆弱的状况让它难以公开展示，几乎再次被遗忘。它就像这座城市本身，被铁幕遮蔽，从欧洲的主流视野中消失了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机随着两德统一而来。1990年代，人们在一个档案馆的库存清单里重新发现了它。当修复专家们再次展开它时，所有人都倒吸一口凉气：时间、潮湿、不当的折叠留下了深深的伤痕。一项长达数年的、堪称史诗级的修复工程开始了。来自德国和波兰的专家们组成团队，像进行外科手术一样，为这幅巨布清洁、加固、修补。他们甚至专门为它设计建造了我们现在看到的这个博物馆展厅，拥有恒温恒湿系统和独一无二的悬挂结构，让它能首次以最完整、最安全的方式展现在世人面前。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2000年，当它最终重新悬挂起来时，对齐陶来说，这不只是一件文物的回归，更是一种历史身份和文化记忆的完整归位。这幅帷幕经历了信仰的狂热、战争的摧毁、意识形态的遮蔽，最终在和平与合作的年代重获新生。它不再只是一块布，它是这座城市坚韧灵魂的象征，是欧洲分裂与重逢的沉默见证者。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正感受齐陶帷幕的震撼，我强烈建议你安排一个完整的上午或下午，至少预留3-4小时。最佳抵达时间是开馆后一小时（上午11点左右），这时晨间的团队游客尚未大批涌入，你能享受一段相对宁静的初遇。整个游览节奏应该是缓慢的、沉思式的，切忌匆忙。路线设计上，先从“预热”开始，了解背景，再进入主展厅迎接那决定性的震撼瞬间，最后通过细节观察和周边探索来沉淀感受。这样的安排能让你由浅入深，让这次参观从“观看”升华为一次“体验”。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`主展厅内严禁使用闪光灯，并且请务必保持低声交谈，以维持那里特有的沉思氛围。穿着舒适的鞋子非常重要，因为你会在那幅巨大的帷幕前来回走动、长时间站立。如果遇到德语导游团，不必避开，往往能从导游生动的讲解中捕捉到不少有趣的历史花絮。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进门后先在接待区稍作停留，别急着冲向主厅，看看那里陈列的帷幕局部细节复制品和小型解说模型。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进第一个介绍性的侧厅，通过生动的多媒体和出土文物，让15世纪齐陶的商贸繁华与宗教生活在你脑中鲜活起来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`然后，深吸一口气，穿过一道特意设计的、光线幽暗的短廊，仿佛进行一场小小的仪典准备，走向主展厅。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`主展厅的门是敞开的，你的第一眼应该留给那幅从远处望去的、完整的、巨幅的帷幕全景，让那种尺度的震撼力直接冲击你。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`慢慢走近帷幕，从最左侧开始，沿着它缓缓向右移动，尝试辨认上面连环画般的四十个场景，别担心看不懂，旁边的电子屏有逐图详解。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要走到帷幕的正后方去看看，那里有特制的灯光装置，能让你看到亚麻布本身的纹理和颜料渗透的奇妙质感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观完主展厅，别忘了楼上还有一个夹层空间，那里是拍摄帷幕全景的绝佳机位，也能看到一些修复过程中留下的工具和档案。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，在出口处的博物馆商店里，可以找到印制精美的画册和以帷幕图案设计的独特文创，带一份有深度的纪念品回家。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`主展厅正中央靠后位置`}</h4>
                  <p className="text-sm text-gray-700">{`使用广角镜头，将整个帷幕作为主体，同时纳入一部分教堂风格的拱顶和地面，构图强调其巨大与神圣感，下午室内自然光最充足时拍摄。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`帷幕左侧约三米处`}</h4>
                  <p className="text-sm text-gray-700">{`聚焦于帷幕的局部细节，例如“创造夏娃”或“出埃及记”场景，利用展厅设置的聚焦灯光，突出颜料裂纹和亚麻布质感，适合用中焦段镜头。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从二楼夹层的观景平台俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`这是一个全景机位，可以拍到访客在帷幕前仰视的场景，形成人与物的尺度对比，建议使用栏杆作为前景框架。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`博物馆建筑外立面与街道结合`}</h4>
                  <p className="text-sm text-gray-700">{`下午日落前，阳光会给砖石外墙镀上金色，从街对面拍摄博物馆入口和旁边面包房的招牌，能捕捉到它融入日常生活的宁静一刻。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内光线非常暗，建议使用大光圈镜头或提高ISO，三脚架通常不允许在主展厅使用。最重要的不是追求技术完美的照片，而是用镜头捕捉那种氛围和质感——亚麻的柔软、颜料的古朴、空间的肃穆。记得关闭所有快门声音和提示音，这是对展品和其他参观者基本的尊重。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`老城心脏之选`}</h4>
                  <p className="text-sm text-blue-800">{`直接住在集市广场旁经过修复的百年历史酒店里，推开木质窗扇就能听到广场喷泉的水声，步行三分钟即可抵达博物馆。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`选择由一栋16世纪商人住宅改造的精品旅馆，房间保留了原始的粗木梁和砖墙，早餐在种满香草的内庭花园享用，充满历史感。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`宁静民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`住在齐陶老城边缘一处安静的民宿，主人是退休的历史老师，能为你讲述许多关于帷幕和城市的小故事，体验真正的当地生活。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-purple-800">{`驱车十五分钟前往奥得河畔一座18世纪的宁静庄园酒店，享受萨克森乡村的田园风光，在一天的深度历史之旅后彻底放松身心。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`齐陶是一个非常安全、宁静的小城，夜间行走毫无压力。旺季（5-10月）的周末住宿比较紧张，特别是广场周围的酒店，建议提前数周预订。如果想体验更地道的氛围，可以考虑住在河对岸的波兰小镇，价格往往更实惠，过桥即到德国，也是一种独特的边境体验。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开齐陶很久以后，我脑子里反复回响的不是某个具体的画面，而是一种感觉——一种关于“遮蔽”与“显现”、“沉默”与“诉说”的深刻矛盾感。在这个信息爆炸、一切都被迫切要求“展示”的时代，这件伟大的文物却源于一种主动的“遮盖”行为。它提醒我们，有些深刻的意义，恰恰需要在隐藏和静默中才能孕育；有些真正的看见，需要先学会不看那些浮于表面的华丽。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，齐陶的这座博物馆，不仅仅是一个放置珍贵文物的地方。它更像一个精神的减速带，一个沉思的避难所。在这里，时间以亚麻布磨损的经纬来计算，价值以幸存的故事来衡量。它告诉我们，文化最坚韧的力量，往往不在于它有多么耀眼夺目，而在于它如何能在黑暗的地窖里、在历史的夹缝中，默默保存住自己最核心的叙事，等待重见光明的那一天。对于厌倦了打卡式旅游、渴望与历史进行一场安静而深入对话的旅人来说，专程来到这座德国东部的小城，站在那幅巨大的、温柔的“空白”面前，是一次触及旅行本质的体验。你看的不是一件“东西”，而是一段完整的历史呼吸。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/lindau-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    林
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">林道老城区</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lindau Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/burg-rheinstein" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莱
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莱茵施泰因城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Burg Rheinstein</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/celle-half-timbered-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    策
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">策勒（五百座木骨架房屋之城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Celle</p>
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
