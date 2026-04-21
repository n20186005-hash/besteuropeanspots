import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '圣安德烈 Szentendre｜多瑙河湾的彩色宝石，匈牙利最波西米亚的艺术灵魂 - 最佳欧洲景点',
  description: '当你从火车站或码头走出来，第一口呼吸到的空气就带着不同——那是多瑙河特有的、湿润中夹杂着青草与水汽的味道，混合着远处咖啡馆飘来的浓缩咖啡香和新鲜烘焙的肉桂卷甜香。你的耳朵立刻被一种轻盈的嘈杂声充满：不是大城市的车马喧嚣，而是鹅卵石路上行李箱轮子咕噜噜的滚动声、某扇窗后传来的手风琴试音、以及游客们发现...',
}

export default function SzentendreArtTownHungaryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '匈牙利', href: '/destinations/hungary' },
            { label: '圣安德烈', href: '/destinations/hungary' },
            { label: '圣安德烈（艺术小镇）', href: '/attractions/szentendre-art-town-hungary' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`圣安德烈（艺术小镇）・Szentendre・匈牙利・圣安德烈`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你从火车站或码头走出来，第一口呼吸到的空气就带着不同——那是多瑙河特有的、湿润中夹杂着青草与水汽的味道，混合着远处咖啡馆飘来的浓缩咖啡香和新鲜烘焙的肉桂卷甜香。你的耳朵立刻被一种轻盈的嘈杂声充满：不是大城市的车马喧嚣，而是鹅卵石路上行李箱轮子咕噜噜的滚动声、某扇窗后传来的手风琴试音、以及游客们发现又一个彩色角落时压低的惊叹声。圣安德烈不是一座死气沉沉的博物馆，它是一个被画笔和陶土赋予了生命的立体调色盘。
沿着主街（Fő tér）向小镇中心走去，你会立刻明白为什么它被称为“艺术小镇”。几乎每一栋房子都不是单调的。明黄色的墙面配着天蓝色的窗框，辣椒红色的屋顶下是苹果绿的门廊，阳台上永远垂吊着盛开的天竺葵，像不小心打翻的颜料罐，泼洒出最欢快的旋律。这里的颜色不是后来为了旅游粉刷的，而是一种深入骨髓的生活美学。你会看到留着络腮胡的老爷爷在自家地下室的工作室里拉坯，陶轮转动的嗡嗡声如同镇子的背景音；画廊的橱窗里，水彩画上的多瑙河夕阳正与门外真实的河光山色对话。
小镇的心脏是主广场，那里矗立着塞尔维亚商人们建立的十字纪念柱。广场四周的咖啡馆将桌椅漫不经心地摆放在阳光下，本地老人喝着 Espresso 看着报纸，仿佛周遭川流不息的游客只是流动的背景板。在这里，艺术不是高高在上的展览品，而是弥漫在空气里、渗透在砖缝中、流淌在人们指尖的日常。你可以花一整个下午，什么“景点”也不进，就迷失在那些狭窄的、仿佛通往另一个世纪的巷弄里，每一次转角都可能遇见一个寂静的小教堂、一个爬满葡萄藤的静谧庭院，或是一家散发着松节油气味的画家工作室。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你从火车站或码头走出来，第一口呼吸到的空气就带着不同——那是多瑙河特有的、湿润中夹杂着青草与水汽的味道，混合着远处咖啡馆飘来的浓缩咖啡香和新鲜烘焙的肉桂卷甜香。你的耳朵立刻被一种轻盈的嘈杂声充满：不是大城市的车马喧嚣，而是鹅卵石路上行李箱轮子咕噜噜的滚动声、某扇窗后传来的手风琴试音、以及游客们发现又一个彩色角落时压低的惊叹声。圣安德烈不是一座死气沉沉的博物馆，它是一个被画笔和陶土赋予了生命的立体调色盘。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`沿着主街（Fő tér）向小镇中心走去，你会立刻明白为什么它被称为“艺术小镇”。几乎每一栋房子都不是单调的。明黄色的墙面配着天蓝色的窗框，辣椒红色的屋顶下是苹果绿的门廊，阳台上永远垂吊着盛开的天竺葵，像不小心打翻的颜料罐，泼洒出最欢快的旋律。这里的颜色不是后来为了旅游粉刷的，而是一种深入骨髓的生活美学。你会看到留着络腮胡的老爷爷在自家地下室的工作室里拉坯，陶轮转动的嗡嗡声如同镇子的背景音；画廊的橱窗里，水彩画上的多瑙河夕阳正与门外真实的河光山色对话。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇的心脏是主广场，那里矗立着塞尔维亚商人们建立的十字纪念柱。广场四周的咖啡馆将桌椅漫不经心地摆放在阳光下，本地老人喝着 Espresso 看着报纸，仿佛周遭川流不息的游客只是流动的背景板。在这里，艺术不是高高在上的展览品，而是弥漫在空气里、渗透在砖缝中、流淌在人们指尖的日常。你可以花一整个下午，什么“景点”也不进，就迷失在那些狭窄的、仿佛通往另一个世纪的巷弄里，每一次转角都可能遇见一个寂静的小教堂、一个爬满葡萄藤的静谧庭院，或是一家散发着松节油气味的画家工作室。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`圣安德烈（艺术小镇）`} />
                <InfoRow label="英文名称" value={`Szentendre`} />
                <InfoRow label="正式名称" value={`Szentendre`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`圣安德烈`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`多瑙河湾的瑰宝，数个世纪以来是塞尔维亚移民的文化堡垒和匈牙利现代艺术的重要发源地与避风港。`} />
                <InfoRow label="建筑特色" value={`蜿蜒的鹅卵石街道两旁，密集排列着巴洛克、洛可可和古典主义风格的彩色民居，红瓦黄墙，高低错落，如同从童话中直接搬出。`} />
                <InfoRow label="建筑风格" value={`以南斯拉夫（塞尔维亚）巴洛克风格为主体，混合了匈牙利民俗元素和中欧古典主义细节，形成了独一无二的“圣安德烈风格”。`} />
                <InfoRow label="文化价值" value={`一个活着的艺术社区，见证了不同民族（匈牙利、塞尔维亚、克罗地亚等）的文化交融，并持续滋养着从陶瓷、绘画到现代数字艺术的创作生命。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇本身全天开放。核心博物馆（如费伦茨·卡洛伊博物馆、塞尔维亚东正教教堂博物馆）通常开放时间为周二至周日 10:00-18:00（夏季可能延长），周一闭馆。各画廊和小型博物馆开放时间不一，建议行前查询。多数商店和餐厅在下午五六点后依然营业，但部分工作室可能随艺术家心情开放。`} />
              <InfoRow label="门票价格" value={`漫步小镇免费。主要博物馆通票约 3000 福林（约8欧元），可参观镇内四到五个主要博物馆。单个博物馆票价在 1000-1500 福林不等。塞尔维亚教堂群内部参观需购票，约 800 福林。学生、老年人和家庭通常有优惠。`} />
              <InfoRow label="地址" value={`Szentendre, 2000 Hungary`} />
              <InfoRow label="交通方式" value={`从布达佩斯出发是最佳选择。在布达佩斯 Batthyány tér 地铁站旁的 HEV 郊区铁路站乘坐 H5 线，终点站就是圣安德烈，车程约 40 分钟，班次频繁（约10-20分钟一班），可使用布达佩斯公共交通日票或单独购票。更具风情的方式是夏季（通常5月至9月）从布达佩斯维加多（Vigadó）广场的码头乘坐多瑙河游船，顺流而下，航程约1-1.5小时，沿途风光绝美。自驾则沿 11号公路向北，约30分钟车程，但小镇中心停车位紧张。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`圣安德烈的故事，是一部关于逃亡、庇护与重生的史诗。它的名字源自一位公元一世纪的圣徒安德烈，但让它真正塑形的，是十七世纪末那场改变中欧格局的大迁徙。随着奥斯曼土耳其的军队如潮水般退去，大批塞尔维亚和希腊的商人与手工业者，为了逃离仍然被土耳其控制的巴尔干半岛，沿着多瑙河北上，寻找新的家园。多瑙河在此温柔地拐了一个弯，形成一片肥沃的冲积平原，这群精明的南斯拉夫移民便在此停驻，建起了他们的新“贝尔格莱德”。他们带来了东正教的信仰、巴尔干的建筑审美和经商的智慧。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`整个18世纪，是圣安德烈作为塞尔维亚文化堡垒的黄金时代。富裕的商人家族竞相建造最华丽的住宅和教堂，以彰显其财富与虔诚。你如今看到的那些色彩斑斓的巴洛克式建筑，其核心风格正是“塞尔维亚巴洛克”——它比维也纳或布拉格的巴洛克更加质朴、更具乡土气息，装饰喜欢用柔和的曲线和生动的植物图案，教堂的钟楼往往纤细高耸，带着一丝东方韵味。小镇里一下子建起了七座塞尔维亚东正教教堂，比鳞次栉比的民居还要密集，钟声在不同时辰交错响起，仿佛一首永恒的复调圣歌。商人们将从巴尔干、波兰甚至远至威尼斯运来的货物在这里集散，小镇码头终日繁忙，多瑙河上帆影不绝。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，多瑙河的河水能带来财富，也能带来历史的转折。十九世纪，随着铁路的兴建和布达佩斯的迅猛崛起，圣安德烈的商业地位逐渐衰落。它仿佛被时间遗忘，凝固在了十八世纪的色彩里。但这恰恰为它的第二次生命埋下了伏笔。二十世纪初，一批敏感的匈牙利艺术家——画家、雕塑家、作家——在喧嚣的现代工业浪潮中，感到迷茫与窒息。他们开始逃离布达佩斯，寻找能够安放灵魂的净土。于是，他们发现了这个沉睡的、色彩斑斓的、物价低廉的河边小镇。一个名叫“圣安德烈艺术家殖民地”的群落悄然形成。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这群艺术家中，最著名的包括画家费伦茨·卡洛伊和雕塑家玛格丽特·科瓦奇。他们不是来这里采风，而是真正地住下，将工作室设在老民居里，在巷弄间写生，画镇上的老人、河上的渔夫、市场的农妇。他们将匈牙利民间艺术的元素与欧洲现代派思潮相结合，开创了一种独特的新艺术风格。小镇的宁静与绚丽的色彩，成了他们取之不尽的灵感源泉。即便在二战和其后的动荡岁月里，这里依然是艺术家们心灵的避风港。玛格丽特·科瓦奇创作的陶瓷雕塑，那些充满生命力的农妇和动物形象，其灵魂就深深植根于这座小镇的泥土之中。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味圣安德烈，你需要一整天的时间，并抱着“迷失”的心态。建议早上九点前从布达佩斯出发，乘坐HEV列车抵达，完美避开一日游大部队的高峰。整个游览节奏应该是松弛的，以漫步和发呆为主，穿插参观一两个核心博物馆。上午光线最佳，适合穿梭在彩巷中拍照，并参观玛格丽特·科瓦奇博物馆感受艺术灵魂。中午在主广场选一家看得见纪念柱的餐厅享用午餐。下午可以深入河滨散步，参观塞尔维亚教堂博物馆，然后把时间留给街头巷尾的数不清的小画廊和工艺品店。日落时分，务必回到多瑙河畔，看夕阳将河水和对岸的山林染成金黄。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇中心部分街道鹅卵石凹凸不平，务必穿一双绝对舒适防滑的步行鞋。
许多小型画廊和工作室允许安静参观，但拍照前务必征得主人同意，这是基本的尊重。
如果时间充裕，非常推荐在小镇住一晚，黄昏之后和清晨时分，当一日游客散去，小镇会展现出它最本真、最宁静的魔幻面貌。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从火车站出来，先别急着冲进中心，绕道小镇西侧安静的Kucorgó utca小巷，这里藏着色彩最和谐、生活气息最浓的民居群。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着缓缓上坡的阿尔科什瓦里街走向主广场，让视线逐一掠过那些粉蓝、鹅黄、淡绿的门脸和精心装饰的铸铁招牌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在主广场的塞尔维亚东正教圣母领报教堂前驻足，仰头看看那洋葱头式的铜绿色穹顶，然后走进旁边的布拉戈维斯特恩斯卡教堂博物馆，感受拜占庭艺术的华丽与宁静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午餐后，钻进从主广场辐射出去的任意一条鹅卵石小道，比如Görög utca，探索那些可能只有一扇小窗的工作室，看玻璃后面的艺术家正在创作什么。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着标记找到Rácz温泉遗址，想象几个世纪前商旅在此泡澡解乏的场景，然后顺着台阶下到多瑙河畔的步行道。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在河滨步道慢慢向东走，远眺对岸的维谢格拉德山和河心岛，直到看见那排著名的“艺术家之屋”彩色木楼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`折返时从Bercsényi楼梯爬回小镇高处，在楼梯顶端回望，你会收获一个电影镜头般的河湾全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把最后的时光留给一家临河的咖啡馆露台，点一杯当地特色的“玛莉亚·特蕾西亚”热红酒或杏子白兰地，等待灯火逐一亮起。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`Bercsényi楼梯顶端俯拍河湾`}</h4>
                  <p className="text-sm text-gray-700">{`黄昏日落前一小时，阳光从侧面照亮河面和对岸山林，用长焦压缩空间，将蜿蜒的多瑙河、河滨建筑与远山叠在一起，色彩层次极佳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主广场十字纪念柱与彩色建筑群`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点前，阳光能均匀洒在广场东侧的建筑立面上，蹲低角度，将十字柱作为前景，聚焦后面色彩斑斓的房子，画面充满故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`Görög utca小巷纵深`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，太阳在头顶，狭窄的巷子两边高墙会形成天然的柔光箱，光线均匀，适合拍摄人物走在鹅卵石路上，两侧门窗色彩饱和的画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`玛格丽特·科瓦奇博物馆内的庭院`}</h4>
                  <p className="text-sm text-gray-700">{`这里的光影在任何晴天都充满戏剧性，白色墙面和陶器雕塑构成极简构图，下午三四点的斜射光能为雕塑拉出长长的影子，充满艺术感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`多瑙河畔仰拍小镇建筑群`}</h4>
                  <p className="text-sm text-gray-700">{`从河滨步道靠近码头的位置，用广角镜头仰拍，将蓝天、彩色房屋的立面、红色的屋顶和教堂尖塔一同纳入，雨后初晴的傍晚，天空色彩最丰富。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`小镇居民非常注重隐私，拍摄民居门窗或院内景象时，请快速且保持距离，避免长时间对准别人家拍摄。`}</li>
                <li>• {`许多室内博物馆和教堂内部完全禁止拍照，或有闪光灯禁令，请严格遵守规定，用心用眼睛记录往往比拍照收获更多。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河景艺术公寓`}</h4>
                  <p className="text-sm text-blue-800">{`位于一栋18世纪修复的黄色建筑顶层，带一个私密的小露台，正对多瑙河与对岸的群山，清晨在咖啡香气中看河上晨雾是最奢侈的享受。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老城中心画廊民宿`}</h4>
                  <p className="text-sm text-green-800">{`由一对画家夫妇经营，本身就是一个温馨的画廊，每间房装饰着主人的原创作品，早餐是女主人自制的杏子酱和新鲜糕点，艺术氛围直接拉满。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`静谧花园老宅酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`藏在小镇高地一条安静巷子的尽头，拥有一个种满玫瑰和薰衣草的秘密花园，房间保留了原始的木梁和彩绘天花板，晚上只能听到风吹过树叶的沙沙声。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计感精品酒店`}</h4>
                  <p className="text-sm text-purple-800">{`由酿酒厂旧址改造，将工业风的钢架结构与复古家具巧妙融合，房间宽敞 loft 风格，酒店自带的餐厅是本地美食家的聚集地，晚上酒吧很有情调。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`旺季（6-8月及圣诞市场期间）务必提前数月预订，尤其是特色民宿，非常抢手。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇治安非常好，夜晚独自在中心区域行走也很安全，但依然建议选择照明良好的街道。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`住在老城中心虽然方便，但周末晚上可能能听到主广场附近酒吧的隐约音乐声，如果对声音极其敏感，可以选择稍靠外围但步行可达的住处。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开圣安德烈的时候，我的行李箱里多了一个手工烧制的小陶罐，上面画着多瑙河的波浪纹。它不完美，甚至有点歪斜，但握在手里有种温润的踏实感。这大概就是圣安德烈留给我的最终印象——一种不完美的、手工的温度。在这个越来越标准化、数字化的世界里，它固执地保存着一种慢的、需要亲手去触摸和创造的生活哲学。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里不仅仅是一个“好看”的拍照背景板。它是一首由多瑙河水谱曲、由历代移民与艺术家填词的活着的诗篇。它告诉我们，文化在最艰难的迁徙中也能扎根开花，艺术在最平凡的市井生活中也能找到不竭的源泉。当你坐在河边的长椅上，看着夕阳将一切染成蜂蜜色，你会感觉到一种久违的平静。那种平静，来自于与一段深沉历史的和解，来自于对一种精致又质朴的生活美学的亲眼见证。圣安德烈像一颗被多瑙河精心打磨了数百年的彩色卵石，温润、坚定、闪闪发光。它值得你停下匆忙的脚步，花上一整天，甚至更久，去真正地走进去，呼吸它的空气，触摸它的墙壁，聆听它还在继续书写的故事。这是一次献给眼睛与心灵的深度SPA，更是一场关于如何生活的温柔启示。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kalocsa-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    考
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">考洛乔老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kalocsa Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gyula-water-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    久
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">久洛城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gyula Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/pannonhalma-archabbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    潘
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">潘诺恩哈尔马千年修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pannonhalma Archabbey</p>
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
