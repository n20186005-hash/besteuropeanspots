import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '德罗贝塔-图尔努塞维林 Drobeta-Turnu Severin｜在多瑙河铁门峡谷旁，触摸古罗马大桥的千年桥墩 - 最佳欧洲景点',
  description: '朋友，想象一下这个画面：你站在一片宽阔的、泛着灰绿色的河滩上，脚下不是细沙，而是被岁月和水流磨圆了棱角的卵石。前方，多瑙河——那条你在地理书上看过无数次的蓝色飘带——在这里完全变了脾气。河水是深沉的、近乎墨绿的颜色，流得又急又沉默，不像在维也纳那样温柔地华尔兹，而是在两山夹峙的峡谷里，带着一种亘古的',
}

export default function DrobetaTurnuSeverinPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '罗马尼亚', href: '/destinations/europe' },
            { label: '梅赫丁茨县', href: '/destinations/europe' },
            { label: '德罗贝塔-图尔努塞维林', href: '/attractions/drobeta-turnu-severin' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`德罗贝塔-图尔努塞维林・Drobeta-Turnu Severin・罗马尼亚・梅赫丁茨县`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下这个画面：你站在一片宽阔的、泛着灰绿色的河滩上，脚下不是细沙，而是被岁月和水流磨圆了棱角的卵石。前方，多瑙河——那条你在地理书上看过无数次的蓝色飘带——在这里完全变了脾气。河水是深沉的、近乎墨绿的颜色，流得又急又沉默，不像在维也纳那样温柔地华尔兹，而是在两山夹峙的峡谷里，带着一种亘古的、不容置疑的力量向前奔涌。风很大，从峡谷那头灌过来，带着河水的腥气和远处山林松针的清冷味道，把你的头发吹得乱飞。耳边只有风声、水声，还有偶尔掠过水面的不知名水鸟的尖鸣。
然后你转过身，就看到它们了——那些巨大的、敦实的、红褐色的砖石结构，半截埋在河岸的泥土和草丛里，半截倔强地探向水面。它们不像完整的建筑，没有拱门，没有雕刻，就是最朴素的几何体，像几个被遗忘的巨人留下的棋盘棋子。但正是这种残缺，这种近乎笨拙的沉默，让你瞬间屏住了呼吸。这就是图拉真大桥的桥墩，两千年前，它们曾支撑起一座跨越这天堑的、长达一公里的木石巨龙。如今，巨龙的身躯早已湮灭，只剩下这些最坚实的脚踝，还死死地咬着大地，任凭河水拍打，岁月冲刷。当地人在这里遛狗、钓鱼、跑步，孩子们在桥墩的阴影里追跑打闹，它不再是教科书上遥远的符号，而是他们日常生活里一个沉默而巨大的背景板。
最打动我的，是那种极致的反差与层叠感。你的左边，是原始、野性、奔腾不息的多瑙河与铁门峡谷的自然之力；你的右边，是这些人类意志最辉煌时留下的工程遗迹；而你的身后，则是颜色略显灰扑扑的、带着齐奥塞斯库时代印记的城镇建筑。古代、近代、现代，文明与自然，征服与共存，所有这些宏大命题，都压缩在这片小小的河滩上。它不精美，不华丽，甚至有些粗粝和落寞，但那种直击心灵的、关于时间与存在的震撼，比任何金碧辉煌的宫殿都要强烈。在这里，你触摸的不是石头，是时间的骨骼。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "朋友，想象一下这个画面：你站在一片宽阔的、泛着灰绿色的河滩上，脚下不是细沙，而是被岁月和水流磨圆了棱角的卵石。前方，多瑙河——那条你在地理书上看过无数次的蓝色飘带——在这里完全变了脾气。河水是深沉的、近乎墨绿的颜色，流得又急又沉默，不像在维也纳那样温柔地华尔兹，而是在两山夹峙的峡谷里，带着一种亘古的、不容置疑的力量向前奔涌。风很大，从峡谷那头灌过来，带着河水的腥气和远处山林松针的清冷味道，把你的头发吹得乱飞。耳边只有风声、水声，还有偶尔掠过水面的不知名水鸟的尖鸣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然后你转过身，就看到它们了——那些巨大的、敦实的、红褐色的砖石结构，半截埋在河岸的泥土和草丛里，半截倔强地探向水面。它们不像完整的建筑，没有拱门，没有雕刻，就是最朴素的几何体，像几个被遗忘的巨人留下的棋盘棋子。但正是这种残缺，这种近乎笨拙的沉默，让你瞬间屏住了呼吸。这就是图拉真大桥的桥墩，两千年前，它们曾支撑起一座跨越这天堑的、长达一公里的木石巨龙。如今，巨龙的身躯早已湮灭，只剩下这些最坚实的脚踝，还死死地咬着大地，任凭河水拍打，岁月冲刷。当地人在这里遛狗、钓鱼、跑步，孩子们在桥墩的阴影里追跑打闹，它不再是教科书上遥远的符号，而是他们日常生活里一个沉默而巨大的背景板。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动我的，是那种极致的反差与层叠感。你的左边，是原始、野性、奔腾不息的多瑙河与铁门峡谷的自然之力；你的右边，是这些人类意志最辉煌时留下的工程遗迹；而你的身后，则是颜色略显灰扑扑的、带着齐奥塞斯库时代印记的城镇建筑。古代、近代、现代，文明与自然，征服与共存，所有这些宏大命题，都压缩在这片小小的河滩上。它不精美，不华丽，甚至有些粗粝和落寞，但那种直击心灵的、关于时间与存在的震撼，比任何金碧辉煌的宫殿都要强烈。在这里，你触摸的不是石头，是时间的骨骼。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`德罗贝塔-图尔努塞维林`} />
                <InfoRow label="英文名称" value={`Drobeta-Turnu Severin`} />
                <InfoRow label="正式名称" value={`Drobeta-Turnu Severin`} />
                <InfoRow label="国家" value={`罗马尼亚`} />
                <InfoRow label="城市" value={`梅赫丁茨县`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`古罗马帝国征服达契亚、巩固多瑙河边疆的战略要冲，以及标志性工程图拉真大桥的北岸起点。`} />
                <InfoRow label="建筑特色" value={`沉默屹立于滔滔多瑙河水中的巨型砖石桥墩，是罗马工程学力量的直观残影。`} />
                <InfoRow label="建筑风格" value={`罗马工程奇迹与喀尔巴阡-巴尔干自然险峻地貌的震撼融合。`} />
                <InfoRow label="文化价值" value={`一处层叠了罗马军团、中世纪堡垒、现代航运与自然力量的露天历史书页，见证了文明与天堑的永恒对话。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`遗址公园及河岸区域全天开放。梅赫丁茨县博物馆（内含重要考古发现）开放时间为周二至周日 9:00-17:00，周一闭馆。具体开放时间可能因季节调整，冬季可能提前至16:00关门，建议行前查阅官网。`} />
              <InfoRow label="门票价格" value={`河岸遗址区域免费参观。梅赫丁茨县博物馆门票约15罗马尼亚列伊（约合3欧元），学生、老人享有半价优惠。临时特展可能额外收费。`} />
              <InfoRow label="地址" value={`Strada Independenței 2, Drobeta-Turnu Severin 220178, România`} />
              <InfoRow label="交通方式" value={`最近的主要机场是布加勒斯特亨利·科安德国际机场。从布加勒斯特北站乘坐火车前往德罗贝塔-图尔努塞维林火车站，车程约3.5-4.5小时，班次每日约5-6趟，建议提前在罗马尼亚铁路CFR官网购票，选择InterCity班次更为舒适快捷。从火车站出来，步行约20分钟或乘坐当地出租车（很便宜）即可抵达多瑙河畔的遗址区。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要讲清楚这里的故事，我们得把时钟拨回到公元101年。当时罗马帝国的皇帝图拉真，正盯着多瑙河南岸，对北岸那片叫达契亚的“野蛮人”土地虎视眈眈。达契亚人骁勇善战，且占据着喀尔巴阡山的天然屏障。多瑙河在这里收窄，形成险峻的“铁门”峡谷，是天赐的防线，但也成了罗马军团北进的最大障碍。图拉真是个实干家，他决定不绕路，就从这最险的地方，搭一座桥硬闯过去。于是，他请来了帝国最顶尖的建筑师——大马士革的阿波罗多罗斯。这位天才接到的，堪称古代世界的“终极工程挑战”：在流速极快、水深莫测的河上，建造史上第一座跨越如此宽阔天堑的大桥。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "阿波罗多罗斯的解决方案充满了罗马式的实用与魄力。他没有用传统的桥墩，而是先建造巨大的石砌墩台，再用木结构架起跨梁。据说动用了数百名工匠和士兵，历时可能数年。当这座拥有20个桥墩、总长超过1000米的巨桥最终落成时，它无疑是一个军事工程奇迹，也是罗马帝国实力赤裸裸的炫耀。军团、战车、补给辎重，轰隆隆地从桥上开过，直达达契亚腹地。这座桥是罗马长剑的延伸，是征服的序曲。达契亚战争结束后，这座桥继续作为连接帝国新行省与核心区域的生命线，繁荣了百余年。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，罗马的荣光终究会黯淡。随着帝国战略收缩，这座过于前出、维护成本极高的桥梁被有意废弃、拆毁。木质的桥面朽烂了，但那些深深扎根的石头桥墩，却顽强地留了下来，成为了河神的一部分。中世纪时，这里的故事换了一批主角。一座名为“塞维林”的堡垒在附近建立，守护着新的边疆。奥斯曼帝国的战旗也曾在此飘扬。地名从古罗马的“德罗贝塔”，演变成了融合了堡垒（Turnu）和圣徒名（Severin）的“图尔努塞维林”。那些桥墩静静地看着王朝更迭，看着商船和战船在它们身边来往，从历史的参与者，变成了历史的观察者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的巨变发生在20世纪。上世纪60年代，罗马尼亚与南斯拉夫合作，在铁门峡修建了庞大的水电大坝系统。水位永久抬升，淹没了无数沿岸的历史痕迹和自然景观。我们今天看到的桥墩，其实是当年考古学家们抢救性地加固和抬高后的结果——它们原本的位置更低。现代工程再次永久地改变了这里的地貌，但有趣的是，它也以一种意外的方式“保护”了这些古代遗迹，让它们免于被完全淹没或冲毁。如今，图拉真大桥的桥墩、中世纪的堡垒遗迹、现代化的港口与大坝，共同构成了这幅跨越两千年的、极其复杂的文明层积岩。它讲述的，从来不止是罗马的故事，而是人类如何一次次地试图驯服自然、定义边界，而自然又如何以更大的耐心，将一切慢慢收回自己节奏的永恒寓言。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`我强烈建议你留出完整的一天给这里，因为它的魅力需要慢下来才能体会。最好在清晨八九点就抵达多瑙河畔，这时游客极少，光线金黄柔和，能拍到最纯净的景色。整个游览节奏应该是“由内而外，再由古至今”：先从河岸与遗址的直观感受开始，沉浸于自然与历史的氛围；然后进入博物馆，让出土的文物为你补全故事的血肉；下午登上塞维林堡垒的遗迹，获得一个俯瞰全局的视野；最后，在黄昏时分回到河边，看夕阳将古老的桥墩和滚滚多瑙河染成金色，完成一次完整的情感闭环。这样安排，你既能感受到遗址的原始冲击力，又能理解其背后的深厚历史，不会走马观花。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周末和节假日午后，本地家庭来此休闲的人会增多，喜欢清静的话请尽量安排在工作日上午。河岸风大且阳光直射无遮挡，务必做好防风防晒措施，并穿一双适合走卵石路的结实鞋子。博物馆内展品说明以罗马尼亚语为主，可提前在手机下载好翻译软件辅助理解。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从“公民港”开始，沿着多瑙河畔的步行道慢慢向西走，让清凉的河风和澎湃的水声唤醒你的感官`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到那片开阔的卵石河滩，近距离观察、甚至用手触摸那些红褐色的图拉真大桥桥墩遗址，感受石头的粗糙与温度`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`转身步入梅赫丁茨县博物馆，在安静凉爽的展厅里，细细观看从桥墩附近发掘出的罗马铭文、工具和士兵遗物`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`爬上博物馆后方的小山丘，探寻中世纪“塞维林堡垒”所剩无几的城墙遗迹，从这里可以眺望多瑙河、现代城市与大坝`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着河岸继续散步到“水电站观景台”附近，换个角度观察峡谷的壮阔，并体会现代工程与古代遗迹并存的奇异景观`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一家河滨餐厅（哪怕只是简单的露台咖啡座），点一杯咖啡或当地葡萄酒，面对多瑙河发呆，看船只缓缓通过`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间充裕，可以驱车或参加乘船游览，深入铁门峡谷国家公园，从水面上回望遗址，感受更原始的自然力量`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前务必回到主桥墩遗址前，看着夕阳的余晖一点点为石头镀上暖光，直至夜幕降临，灯光在河对岸的塞尔维亚亮起`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`桥墩侧面逆光位`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时左右，站在河滩西侧，让太阳位于桥墩后方，可以拍出桥墩漆黑庄严的剪影与波光粼粼的金色河面，构图极具戏剧张力。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`博物馆二层露台全景`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点后阳光充足时，利用博物馆露台作为制高点，使用广角镜头将最近处的桥墩、中景的多瑙河、远景的铁门峡谷山峦一并纳入画面，层次感极强。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`卵石滩低角度特写`}</h4>
                  <p className="text-sm text-gray-700">{`蹲下或贴近地面，以布满纹理的古老卵石为前景，聚焦于一个桥墩被河水侵蚀的局部细节，能拍出充满时间质感和故事性的特写照片。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`塞维林堡垒土丘眺望点`}</h4>
                  <p className="text-sm text-gray-700">{`下午顺光时，从堡垒遗迹向河岸方向拍摄，可以将零星的中世纪墙砖作为前景框架，框住远处完整的现代城市与河景，形成古今对话。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`港口长焦压缩`}</h4>
                  <p className="text-sm text-gray-700">{`使用长焦镜头从港口方向拍摄对岸的桥墩遗址，可以压缩空间，让桥墩与后方峡口的山体叠在一起，突出其身处险要之地的地理环境。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄时请务必尊重遗址，不要为了取景攀爬或踩踏脆弱的桥墩结构。建议携带一支偏振镜（CPL），能有效消除河面反光，让水色更显深邃，并增强石头和天空的饱和度。多瑙河上的天气瞬息万变，暴雨后河水会变得浑浊湍急，是拍摄力量感画面的好时机，但要注意自身安全。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河景阳台民宿`}</h4>
                  <p className="text-sm text-blue-800">{`藏在老城居民区里的公寓，房东热情好客，最大的惊喜是那个小小的阳台正对着多瑙河，清晨可以就着峡谷的风和河面的晨光享用一杯自制果酱佐餐的早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老城中心精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`由一栋19世纪末的典雅建筑改造而成，房间挑高很高，铺着老旧但温润的木地板，位置极佳，步行去河边和博物馆都只要五分钟，晚上格外安静。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`港口现代设计酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在港口区，房间拥有巨大的落地窗，直面繁忙的河道与现代船舶，风格简约时尚，适合喜欢观察当代河运生活与古今景观碰撞的旅行者。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`峡谷入口家庭旅馆`}</h4>
                  <p className="text-sm text-purple-800">{`如果你自驾，不妨选择铁门峡谷国家公园入口处的家庭旅馆，被森林和山坡环绕，夜晚能听到纯粹的自然之声，白天则是徒步探索峡谷自然的完美起点。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小城的住宿整体价格非常友好，即使高端选择也远低于西欧标准，无需过早预订。老城区（Centru）治安良好，夜晚散步也很舒服。如果选择更偏远的乡村住宿，请确认是否有可靠的夜间交通或充足的停车位，并准备好应对更基本的设施条件。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开德罗贝塔-图尔努塞维林很久以后，我闭上眼睛，最先想起的不是那桥墩的样子，而是那种混合着水汽、风声和石头气味的空气。这个地方教会我一件事：真正的历史感，有时并非来自保存完好的华美殿堂，而是来自这种断裂的、沉默的、与自然重新纠缠在一起的遗迹。它不试图向你证明什么，不提供任何轻松愉悦的审美体验，它只是在那里，承受着，存在着。在当今这个一切都追求光鲜、快速、即时满足的世界里，这种“承受”的姿态，显得如此珍贵而富有哲理。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，如果你厌倦了那些被精心包装的、人潮汹涌的“必打卡”古迹，如果你想寻找一次能与大地、河流和真正的时间深度对话的旅行，请一定来这里。站在多瑙河铁门峡旁，你会感到自身的渺小，但同时也感到一种奇特的连接——与那些两千年前在此开石伐木的工匠，与那些目送帝国夕阳的士兵，与所有曾在此梦想、奋斗、最终又随水流逝的人们。这里没有答案，只有河流永恒的发问。而这，正是深度旅行所能带给我们的，最深沉的回响。它是一片被遗忘的边疆，却也是安放我们所有关于时间与存在之思绪的，最辽阔的中心。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/campulung-moldovenesc-woodcarving-museum" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    肯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">肯普隆格摩尔多韦内斯克木雕艺术博物馆</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Campulung Moldovenesc Museum of Woodcarving Art</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bucharest-old-town-historical-center" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布加勒斯特老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bucharest Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bistrita-evangelical-church-saxon-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    比
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">比斯特里察</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bistrița</p>
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
