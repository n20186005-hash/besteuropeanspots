import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '斯雷姆斯基卡尔洛夫奇 Sremski Karlovci｜塞尔维亚的巴洛克心脏与甜蜜酒乡 - 最佳欧洲景点',
  description: '车子缓缓驶离贝尔格莱德的喧嚣，窗外的风景逐渐被平缓的、绿意盎然的伏伊伏丁那平原所取代。就在你几乎要沉醉于这片“塞尔维亚粮仓”的宁静时，一片柔和的、如同从旧画册里直接剪贴下来的彩色屋顶群，簇拥着一座蓝顶钟楼，突然出现在小山坡上。那第一眼的印象，不像是一座城镇，更像是一个精心布置的沙盘模型，小巧、精致，...',
}

export default function SremskiKarlovciBaroqueWineTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '塞尔维亚', href: '/destinations/serbia' },
            { label: '伏伊伏丁那', href: '/destinations/serbia' },
            { label: '斯雷姆斯基卡尔洛夫奇（巴洛克酒乡）', href: '/attractions/sremski-karlovci-baroque-wine-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`斯雷姆斯基卡尔洛夫奇（巴洛克酒乡）・Sremski Karlovci・塞尔维亚・伏伊伏丁那`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子缓缓驶离贝尔格莱德的喧嚣，窗外的风景逐渐被平缓的、绿意盎然的伏伊伏丁那平原所取代。就在你几乎要沉醉于这片“塞尔维亚粮仓”的宁静时，一片柔和的、如同从旧画册里直接剪贴下来的彩色屋顶群，簇拥着一座蓝顶钟楼，突然出现在小山坡上。那第一眼的印象，不像是一座城镇，更像是一个精心布置的沙盘模型，小巧、精致，带着一种不真实的甜美。空气立刻变得不一样了，五月的风里混着丁香花若有似无的香气，以及一种更深沉的、从古老石缝和地下酒窖里渗出来的，甜润的葡萄酒醇香。
走进中心广场，时间仿佛被调慢了发条。阳光把巴洛克建筑立面的鹅黄、淡粉和薄荷绿照得发亮，几位老人坐在长椅上，慢悠悠地聊着天，声音轻得融进了背景里。鸽子在圣尼古拉斯教堂前的空地上踱步，教堂的钟声每隔一刻钟就当当响起，声音清澈而安宁，不是提醒，更像是一种抚慰。这里没有游客的洪流，只有本地人日常生活的潺潺溪流：主妇提着篮子从市场回来，神学院的学生抱着书本匆匆穿过拱廊，咖啡馆的侍者不慌不忙地擦拭着露天座椅。你立刻会明白，斯雷姆斯基卡尔洛夫奇不是一个“景点”，而是一个仍然在呼吸、在跳动的生活中心。
而它最核心的魅力，是一种奇特的“甜蜜的沉重”。甜蜜，来源于它闻名遐迩的伯尔默特甜酒，那种琥珀色的液体承载着阳光的味道；来源于它建筑色彩的柔和与街道尺度的宜人。沉重，则来自于脚下这片土地所见证的无数历史转折——决定帝国疆界的条约在此签署，流亡的塞尔维亚精神在此坚守，民族复兴的火种在此点燃。你品尝着杯中蜜酒，舌尖是甜美的，但思绪却飘向几个世纪前的风云际会。这种感官的愉悦与历史的深邃交织在一起，形成了独一无二的吸引力，让你想在这里坐下，什么也不做，只是感受这种被时光充分浸泡过的、沉甸甸的宁静。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子缓缓驶离贝尔格莱德的喧嚣，窗外的风景逐渐被平缓的、绿意盎然的伏伊伏丁那平原所取代。就在你几乎要沉醉于这片“塞尔维亚粮仓”的宁静时，一片柔和的、如同从旧画册里直接剪贴下来的彩色屋顶群，簇拥着一座蓝顶钟楼，突然出现在小山坡上。那第一眼的印象，不像是一座城镇，更像是一个精心布置的沙盘模型，小巧、精致，带着一种不真实的甜美。空气立刻变得不一样了，五月的风里混着丁香花若有似无的香气，以及一种更深沉的、从古老石缝和地下酒窖里渗出来的，甜润的葡萄酒醇香。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进中心广场，时间仿佛被调慢了发条。阳光把巴洛克建筑立面的鹅黄、淡粉和薄荷绿照得发亮，几位老人坐在长椅上，慢悠悠地聊着天，声音轻得融进了背景里。鸽子在圣尼古拉斯教堂前的空地上踱步，教堂的钟声每隔一刻钟就当当响起，声音清澈而安宁，不是提醒，更像是一种抚慰。这里没有游客的洪流，只有本地人日常生活的潺潺溪流：主妇提着篮子从市场回来，神学院的学生抱着书本匆匆穿过拱廊，咖啡馆的侍者不慌不忙地擦拭着露天座椅。你立刻会明白，斯雷姆斯基卡尔洛夫奇不是一个“景点”，而是一个仍然在呼吸、在跳动的生活中心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而它最核心的魅力，是一种奇特的“甜蜜的沉重”。甜蜜，来源于它闻名遐迩的伯尔默特甜酒，那种琥珀色的液体承载着阳光的味道；来源于它建筑色彩的柔和与街道尺度的宜人。沉重，则来自于脚下这片土地所见证的无数历史转折——决定帝国疆界的条约在此签署，流亡的塞尔维亚精神在此坚守，民族复兴的火种在此点燃。你品尝着杯中蜜酒，舌尖是甜美的，但思绪却飘向几个世纪前的风云际会。这种感官的愉悦与历史的深邃交织在一起，形成了独一无二的吸引力，让你想在这里坐下，什么也不做，只是感受这种被时光充分浸泡过的、沉甸甸的宁静。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`斯雷姆斯基卡尔洛夫奇（巴洛克酒乡）`} />
                <InfoRow label="英文名称" value={`Sremski Karlovci`} />
                <InfoRow label="正式名称" value={`Sremski Karlovci`} />
                <InfoRow label="国家" value={`塞尔维亚`} />
                <InfoRow label="城市" value={`伏伊伏丁那`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这里是1699年结束大土耳其战争的《卡尔洛瓦茨条约》签订地，塞尔维亚东正教的文化、教育与精神中心，更是享誉巴尔干的葡萄酒发源地。`} />
                <InfoRow label="建筑特色" value={`紧凑而和谐的小镇广场被色彩柔和的巴洛克、古典主义风格建筑环抱，形成一幅如舞台布景般的立体画卷。`} />
                <InfoRow label="建筑风格" value={`以18-19世纪的巴洛克风格为主，混搭了新古典主义与塞尔维亚民族复兴式样，呈现出独特的“伏伊伏丁那巴洛克”风貌。`} />
                <InfoRow label="文化价值" value={`一个将东正教信仰、塞尔维亚启蒙运动的历史记忆与源远流长的葡萄种植传统完美融合的活态文化标本。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇本身全天开放。主要建筑景点（如教堂、神学院、博物馆）的开放时间一般为夏季（4月-10月）上午9点至下午6点，冬季（11月-3月）上午10点至下午4点，周一多数闭馆。具体酒窖和品酒室的参观需要提前预约，时间灵活。`} />
              <InfoRow label="门票价格" value={`进入小镇免费。参观圣尼古拉斯教堂免费；神学院内部参观可能有少量捐赠建议；小镇博物馆门票约200第纳尔（约合1.7欧元）；主要的费用在于品酒体验，一次基础的品酒之旅（包含3-4种葡萄酒及伯尔默特甜酒）价格在800-1500第纳尔（约7-13欧元）之间。`} />
              <InfoRow label="地址" value={`Trg Branka Radičevića 1, 21205 Sremski Karlovci, Serbia`} />
              <InfoRow label="交通方式" value={`从贝尔格莱德尼古拉·特斯拉国际机场出发，最便捷的方式是乘坐出租车或预约接送车直达，车程约45分钟到1小时。从贝尔格莱德市区出发，可以在中央巴士站乘坐前往诺维萨德方向的巴士，告诉司机在斯雷姆斯基卡尔洛夫奇下车，车程约1小时，班次频繁，每小时至少1-2班。也可以从诺维萨德乘坐62路本地巴士，约20分钟即可抵达。自驾是最自由的选择，从贝尔格莱德沿E70高速公路向西北行驶，路况良好。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起斯雷姆斯基卡尔洛夫奇的故事，得把时钟拨回到罗马帝国时代。这片俯瞰着多瑙河支流的肥沃丘陵，早就因为得天独厚的地理环境而被人青睐，罗马人在这里留下了痕迹。但真正让它走上历史前台的，是17世纪末那场席卷东南欧的战争硝烟。当时，奥斯曼帝国的势力与哈布斯堡王朝在这里激烈碰撞。1699年，就在小镇上一座不起眼的房子里（原址上后来建起了著名的“和平咖啡馆”），双方代表签订了《卡尔洛瓦茨条约》。这份条约不仅重新划定了中欧的版图，更重要的是，它使得包括斯雷姆斯基卡尔洛夫奇在内的大片土地脱离了奥斯曼帝国数百年的统治，回到了哈布斯堡的管辖之下。你可以想象，在那个信息闭塞的年代，这座小镇的名字随着和平的消息传遍欧洲各国宫廷时，是何等的光荣时刻。这份“和平诞生地”的基因，从此深植于小镇的灵魂之中。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`和平带来了稳定，也带来了新的主人和规划。18世纪，在哈布斯堡王朝的统治下，小镇迎来了它的黄金建设期。信奉天主教的奥地利当局，与本地虔诚的塞尔维亚东正教居民，形成了一种微妙的共生关系。为了彰显帝国的荣耀与文化，巴洛克建筑风格被引入，中心广场的格局被精心设计。然而，塞尔维亚人的民族精神并未熄灭。1708年，这里建立了塞尔维亚人在哈布斯堡统治下的第一所东正教神学院，后来更升格为大学（虽然后来迁址）。这座神学院不仅是宗教教育的殿堂，更成了塞尔维亚语言、文学和历史研究的摇篮，在奥斯曼统治的阴霾之外，保存并滋养了塞尔维亚文化的火种。那些巴洛克式的建筑外壳下，跳动的是一个民族顽强不息的心脏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果说神学院守护的是精神的火种，那么遍布小镇内外的葡萄园，则养育了人们的身体与生活情趣。葡萄酒酿造的传统在这里源远流长，但真正的传奇始于19世纪初。一家本地酒庄的主人，偶然发现了一种特殊的酿造方法，将晚收的葡萄经过自然浓缩和橡木桶陈酿，得到了一种色泽金黄、口感如蜜般浓稠丰腴的甜酒，这就是后来闻名世界的“伯尔默特”。它很快成为奥匈帝国宫廷的宠儿，甚至得到了“国王之酒”的美誉。葡萄酒的繁荣为小镇带来了财富，那些漂亮的酒庄别墅和精致的民居，很多都得益于这“甜蜜的黄金”。酿酒不仅是产业，更成了家族传承的技艺和社交生活的核心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`进入20世纪，小镇经历了战争与政权更迭的风雨，从奥匈帝国到南斯拉夫王国，再到后来的南斯拉夫社会主义联邦共和国。它的角色从边境重镇变成了宁静的学术与农业中心。著名的神学院继续运作，而葡萄酒合作社则维系着酿酒传统。即便在动荡的岁月里，小镇的巴洛克风貌奇迹般地得到了较好的保存，没有遭受严重的战火破坏。当塞尔维亚进入新时代，斯雷姆斯基卡尔洛夫奇那份沉淀了几个世纪的优雅、宁静与甜蜜，重新被世人所发现。它不再仅仅是历史课本上的一个名词，而是一个可以触摸、可以品味、可以沉浸其中的活态博物馆，向每一个来访者诉说着关于和平、信仰、文化与生活艺术的悠长故事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正领略斯雷姆斯基卡尔洛夫奇的精髓，建议安排一整天的悠闲时光。最好在上午九点左右抵达，这时阳光柔和，小镇刚刚苏醒，游客稀少，你能独占那份宁静。整体的节奏应该是“慢”。用大半天时间，以中心广场为圆心，慢慢步行探索各个角落，把建筑欣赏、历史了解和最重要的品酒体验无缝衔接起来。下午是品酒的最佳时段，也让感官的愉悦达到高潮。这样的安排既能避开可能的午后炎热，又能让你在黄昏时分，看到小镇在金色光线中最迷人的样子，最后带着微醺的满足感离开。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双非常舒适的步行鞋，小镇虽然不大，但石板路和上下坡会考验你的脚力。
如果是在夏秋季节的周末来访，建议提前电话预约心仪的酒庄品酒，以免遇到小型团队客满的情况。
不要只是品酒，务必尝尝小镇餐厅里用本地葡萄酒入菜的特色料理，比如葡萄酒炖牛肉，风味绝佳。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨第一站直奔中心广场，坐在长椅上感受阳光一点点爬满色彩柔和的巴洛克立面，听圣尼古拉斯教堂的钟声划破宁静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进圣尼古拉斯教堂内部，让眼睛适应昏暗的光线后，抬头仰望那令人屏息的华丽镀金圣像壁和穹顶壁画，感受东正教艺术的震撼力。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂出来，绕到侧面爬上古老的钟楼（如果开放），在狭窄的旋转楼梯后收获一个俯瞰全镇红屋顶、绿葡萄园和远处多瑙河平原的明信片视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访广场另一侧庄严的塞尔维亚东正教神学院，在安静的庭院和拱廊下漫步，想象几个世纪以来这里走出的学者与神职人员。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`随意钻进一条从广场辐射出去的石板小巷，循着隐约的酒香找到一家家族经营的地下酒窖，准备开启今日的重头戏——品酒之旅。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在酒窖主人热情的指引下，从干爽的白葡萄酒尝到醇厚的红葡萄酒，最后以镇店之宝“伯尔默特”甜酒收尾，听他讲述每款酒背后的风土故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`品酒过后，带着愉悦的微醺感，漫步到小镇边缘的葡萄园步道，近距离看看那些孕育了神奇的葡萄藤，眺望整个小镇如积木玩具般坐落在丘陵上。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`将最后的时光留给广场上的“和平咖啡馆”，点一杯传统的土耳其咖啡或本地草药茶，坐在百年前签订和平条约的象征之地，看日落光影为小镇谢幕。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣尼古拉斯教堂钟楼顶层`}</h4>
                  <p className="text-sm text-gray-700">{`登上钟楼，用广角镜头拍摄中心广场全景，最佳时间是上午十点前或下午四点后，光线斜射，建筑立体感最强，色彩最饱和。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`神学院拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`站在拱廊的一头，利用拱门的天然画框，拍摄纵深感的柱廊与尽头的绿植庭院，对称构图能带来宁静而神圣的视觉感受。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`某家族酒窖内部`}</h4>
                  <p className="text-sm text-gray-700">{`征得主人同意后，拍摄橡木桶阵列与昏黄灯光交织的场景，对焦在酒桶的纹理或一杯倒好的伯尔默特甜酒上，营造温暖而富有故事感的氛围。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`和平咖啡馆的临街阳台`}</h4>
                  <p className="text-sm text-gray-700">{`坐在阳台的座位上，以咖啡杯为前景，拍摄楼下广场上往来的人们和色彩缤纷的建筑立面，捕捉充满生活气息的欧式街景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`某条无名小巷的转角`}</h4>
                  <p className="text-sm text-gray-700">{`午后时分，寻找一条爬满藤蔓的安静小巷，等待阳光将婆娑的树影投射在鹅黄色的墙壁上，拍摄光影与色彩构成的抽象画面。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`教堂内部通常允许拍照，但严禁使用闪光灯，并务必保持肃静，尊重正在祈祷的信众。`}</li>
                <li>• {`拍摄当地人，尤其是老人时，一个微笑和眼神征询是基本的礼貌，他们通常很友善，但直接镜头怼脸很不妥。`}</li>
                <li>• {`夏季光线强烈，建议携带一个小型反光板或利用建筑物的白色墙面为面部补光，尤其在逆光拍摄人像时。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`广场附近由老房子改造的家庭旅馆，房间小巧干净，房东妈妈会为你准备丰盛的 homemade 早餐，并分享只有本地人才知道的葡萄园秘密角落。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`住在小镇外围一个家族经营的葡萄酒庄园里，房间窗户正对无边无际的葡萄园，晚上安静得只能听见风声，清晨在鸟鸣中醒来，并包含私人品酒体验。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻于镇中心一座经过精心修复的19世纪贵族别墅精品酒店，保留了原始的木地板和高挑天花板，浴缸是老式爪足浴缸，露台正对教堂钟楼，尽享尊贵与浪漫。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`宁静之选`}</h4>
                  <p className="text-sm text-purple-800">{`选择靠近小镇入口处、被大花园环绕的宁静宾馆，这里离中心区步行仅五分钟，却独享一份隐秘，花园里种满了玫瑰和薰衣草，香气袭人。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季和初秋（葡萄收获季）是绝对旺季，务必提前至少一个月预订住宿，尤其是特色酒庄和精品酒店。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`许多家庭旅馆不提供电梯，如果行李沉重或有老人同行，预订时最好确认一楼是否有房间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇治安极好，夜晚漫步非常安全，但多数餐厅和酒窖关门较早（晚9点左右），安排晚餐请注意时间。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开斯雷姆斯基卡尔洛夫奇的时候，我胃里装着温暖的甜酒，相机里装着斑斓的色彩，但心里装着一种更沉静的东西。它不像那些宏伟都城那样用磅礴的气势震撼你，而是用一种细微的、持续渗透的方式，安抚你。它让你相信，历史不只有金戈铁马的巨响，更有在条约签订后，人们回到家园，重新种下葡萄藤，修建学校，在咖啡馆里谈论诗歌与未来的那份坚韧与希望。这个小镇，本身就是一首关于“重建”与“甜蜜生活”的散文诗。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求快速和刺激的时代，斯雷姆斯基卡尔洛夫奇的存在，像是一个温柔的提醒。它告诉你，有些价值需要缓慢的沉淀：一栋建筑的颜色需要几百年的风雨来调和，一款美酒的风味需要几代人的耐心来等待，而一种文化的自信与从容，更需要在一片和平的土地上深深扎根。对于每一位渴望深度游的旅人，这里不仅仅是一个打卡点，更是一个让你“停下来”的驿站。在这里，你可以练习“浪费”时间——把时间“浪费”在一杯酒漫长的回味里，浪费在一场漫无目的的巷弄探索中，浪费在广场长椅上看着云朵飘过教堂尖顶的彻底放空里。然后你会发现，这种“浪费”，或许是旅途中最奢侈、最滋养心灵的收获。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/nis-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    尼
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">尼什古堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Niš Fortress</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/petrovaradin-fortress-novi-sad" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    诺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">诺维萨德要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Novi Sad Fortress</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/manasija-monastery-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马纳西亚修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Manasija Monastery</p>
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
