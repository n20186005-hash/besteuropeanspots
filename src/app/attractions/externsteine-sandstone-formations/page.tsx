import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃克斯施泰因 Externsteine｜探秘条顿森林中的异教圣地与通天石阵 - 最佳欧洲景点',
  description: '当你把车停在条顿堡森林边缘的停车场，沿着指示牌走上一条被厚厚山毛榉和橡树遮蔽的小径时，世界立刻安静了下来。空气里是潮湿的泥土、腐烂树叶和清新松针混合的味道，脚下是松软的林间土地。走了大约十分钟，光线逐渐变亮，然后，毫无征兆地，它们就那样撞进了你的视野——五根巨大的、灰黄色的砂岩柱，像被某个远古巨神随...',
}

export default function ExternsteineSandstoneFormationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '埃克斯施泰因', href: '/attractions/externsteine-sandstone-formations' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`埃克斯施泰因・Externsteine・德国・霍恩埃姆斯-锡尔马赫地区，靠近代特莫尔德市`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你把车停在条顿堡森林边缘的停车场，沿着指示牌走上一条被厚厚山毛榉和橡树遮蔽的小径时，世界立刻安静了下来。空气里是潮湿的泥土、腐烂树叶和清新松针混合的味道，脚下是松软的林间土地。走了大约十分钟，光线逐渐变亮，然后，毫无征兆地，它们就那样撞进了你的视野——五根巨大的、灰黄色的砂岩柱，像被某个远古巨神随意插在地上的手指，突兀而威严地耸立在林间空地与一片宁静的湖水之间。那一刻，你几乎要停下呼吸。这不是科隆大教堂那种人力创造的宏伟，而是一种更原始、更沉默的震撼。岩石表面布满了风雨侵蚀的深深纹路，顶端生长着顽强的灌木和小树，仿佛它们本身就是活着的、会呼吸的庞然大物。
走近一些，你会听到风声穿过岩石缝隙发出的低吟，混合着远处湖面野鸭的叫声和树林的沙沙声。触摸那些岩石，手感粗糙而凉爽，即使是在盛夏的午后。然后你的目光会被吸引到中间那根最高岩柱（大约38米）的半腰处：那里赫然开凿着一扇窗，一个石室，外面雕刻着巨大的、线条古朴到有些笨拙的浮雕。那是著名的“耶稣下十字架”图，但整体氛围和你见过的任何教堂浮雕都不同。它被直接雕刻在大自然的本体上，基督教的故事仿佛是被强行注入这片古老异教景观的一个外来符号，充满了某种紧张而迷人的张力。
这里没有城市的喧嚣，但绝非无人问津。你会遇到背着专业相机的沉默老者，凝视岩石良久；会遇到嬉笑打闹、试图攀爬（禁止的！）的青少年；还会遇到打扮得像从奇幻小说里走出来的新异教信徒，他们安静地坐在湖边冥想，或是在特定的节气前来举行仪式。埃克斯施泰因就是这样，它不仅仅是“景点”，更是深深嵌入当地人心灵图景的一个符号，一个承载了从原始崇拜、民族起源到自然灵性等各种想象的容器。它的核心魅力，就在于这种多层次的神秘感——地质的奇观、历史的谜题、信仰的战场，以及每个人都能在此投射自我内心故事的空白画布。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你把车停在条顿堡森林边缘的停车场，沿着指示牌走上一条被厚厚山毛榉和橡树遮蔽的小径时，世界立刻安静了下来。空气里是潮湿的泥土、腐烂树叶和清新松针混合的味道，脚下是松软的林间土地。走了大约十分钟，光线逐渐变亮，然后，毫无征兆地，它们就那样撞进了你的视野——五根巨大的、灰黄色的砂岩柱，像被某个远古巨神随意插在地上的手指，突兀而威严地耸立在林间空地与一片宁静的湖水之间。那一刻，你几乎要停下呼吸。这不是科隆大教堂那种人力创造的宏伟，而是一种更原始、更沉默的震撼。岩石表面布满了风雨侵蚀的深深纹路，顶端生长着顽强的灌木和小树，仿佛它们本身就是活着的、会呼吸的庞然大物。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近一些，你会听到风声穿过岩石缝隙发出的低吟，混合着远处湖面野鸭的叫声和树林的沙沙声。触摸那些岩石，手感粗糙而凉爽，即使是在盛夏的午后。然后你的目光会被吸引到中间那根最高岩柱（大约38米）的半腰处：那里赫然开凿着一扇窗，一个石室，外面雕刻着巨大的、线条古朴到有些笨拙的浮雕。那是著名的“耶稣下十字架”图，但整体氛围和你见过的任何教堂浮雕都不同。它被直接雕刻在大自然的本体上，基督教的故事仿佛是被强行注入这片古老异教景观的一个外来符号，充满了某种紧张而迷人的张力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里没有城市的喧嚣，但绝非无人问津。你会遇到背着专业相机的沉默老者，凝视岩石良久；会遇到嬉笑打闹、试图攀爬（禁止的！）的青少年；还会遇到打扮得像从奇幻小说里走出来的新异教信徒，他们安静地坐在湖边冥想，或是在特定的节气前来举行仪式。埃克斯施泰因就是这样，它不仅仅是“景点”，更是深深嵌入当地人心灵图景的一个符号，一个承载了从原始崇拜、民族起源到自然灵性等各种想象的容器。它的核心魅力，就在于这种多层次的神秘感——地质的奇观、历史的谜题、信仰的战场，以及每个人都能在此投射自我内心故事的空白画布。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`埃克斯施泰因`} />
                <InfoRow label="英文名称" value={`Externsteine`} />
                <InfoRow label="正式名称" value={`Externsteine`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`霍恩埃姆斯-锡尔马赫地区，靠近代特莫尔德市`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这片石阵是北欧日耳曼民族异教信仰与基督教文化在德国土地上剧烈碰撞与融合的罕见物理见证。`} />
                <InfoRow label="建筑特色" value={`一组拔地而起、鬼斧神工的砂岩柱群，其上雕刻有中世纪早期的基督教浮雕，并人工开凿了石窟、楼梯与祭坛。`} />
                <InfoRow label="建筑风格" value={`原始自然形态与加洛林/奥托时期罗马式雕刻艺术的粗犷结合。`} />
                <InfoRow label="文化价值" value={`一个被神话、传说、民族浪漫主义乃至现代政治意识形态不断重塑和解读的“德国记忆之石”。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`遗址公园全年全天24小时开放。访客中心和信息牌的开放时间通常为每年4月至10月，每日上午9点至傍晚6点；11月至次年3月开放时间缩短，并可能因天气关闭。登顶石塔和参观石窟内部需在访客中心购票并由向导带领，团队导览通常在旺季（4-10月）的每日固定时间进行，淡季需提前预约。`} />
              <InfoRow label="门票价格" value={`进入遗址公园本身免费。登顶高塔和参观核心石窟的导览票价为：成人6欧元，优惠票（学生、残疾人等）4欧元，家庭票（2成人+最多3名儿童）15欧元。6岁以下儿童免费。建议在官网或访客中心查看最新的导览团时间表并提前购票。`} />
              <InfoRow label="地址" value={`Externsteine 1, 32805 Horn-Bad Meinberg, Germany`} />
              <InfoRow label="交通方式" value={`最近的国际机场是多特蒙德机场或汉诺威机场，但最便捷的交通枢纽是代特莫尔德火车站。从代特莫尔德火车站出发，乘坐前往霍恩-巴特迈因贝格的792路公共汽车（方向：Horn, ZOB），在“Externsteine”站下车，车程约25分钟，每小时1-2班。自驾是最灵活的方式，从代特蒙德或帕德博恩经A33/B239号公路均可抵达，遗址旁设有大型收费停车场（每日约3-5欧元）。骑自行车沿条顿堡森林的众多步道前来也是当地人的热门选择。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`关于埃克斯施泰因的故事，始于大约七千万年前的白垩纪晚期。那时，这里还是一片浅海，细密的沙粒层层沉积，在巨大的压力下变成了砂岩。随后的地壳运动将这片岩层推出海面，又经过数百万年冰河时期的水蚀风侵，较软的岩层被剥去，留下最坚硬的这部分，形成了我们今天看到的突兀石柱群。早在人类出现之前，它们就已经静静地矗立在这里，俯瞰着森林的变迁。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`人类的故事大约从旧石器时代就开始了。考古学家在岩石周围发现了燧石工具，证明史前猎人曾在此活动。但真正将埃克斯施泰因推向历史舞台中央的，是公元前后的日耳曼部落。尤其是切鲁西人，他们曾在这片森林中赢得了著名的条顿堡森林战役，重创了罗马军团。许多学者相信，如此奇特而醒目的地标，不可能不被当时的日耳曼人赋予神圣意义。岩石顶部的人工平台、精确对齐夏至日出的窗口式壁龛，都强烈暗示这里曾是祭祀日耳曼神明（也许是太阳神）的异教圣地。传说中，这里就是萨克森英雄维杜金德抵抗查理曼大帝基督教化战争的重要据点。那段历史没有文字记载，只留下岩石上那些用途不明的凿痕和洞穴，任由后人想象。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间跳到公元8-12世纪，基督教势力已然稳固。为了彻底征服这片土地的“异教之灵”，修士们来到了埃克斯施泰因。他们做了一件极具象征意义的事：在最大的岩石上，开凿了一个小礼拜堂和苦修石窟，并在岩壁雕刻了那幅著名的“耶稣下十字架”浮雕。浮雕的风格是粗犷的罗马式，有趣的是，在浮雕中，代表异教世界象征的月神树（Irminsul）被描绘成折断、俯伏在十字架下的形象。这是一次赤裸裸的、刻在石头上的意识形态宣言：基督已战胜旧神。岩石顶部的异教祭坛被改造成了基督教的小圣坛。这个过程，就是一部微缩的德国早期基督教化史。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`此后数百年，埃克斯施泰因相对沉寂，被当地领主拥有，作为边境地标和采石场（少量）。它的重新被发现和神话化，要等到18-19世纪的浪漫主义时期。诗人和画家们涌向这里，在他们笔下，这些岩石成了纯粹“德意志精神”的象征，是未被罗马和拉丁文化污染的、属于森林与民族的原始纪念碑。这股风潮在20世纪被纳粹意识形态狂热地利用。海因里希·希姆莱领导的“祖先遗产学会”坚信这里是日耳曼民族的“世界中心”圣地，投入大量“研究”并计划将其建成庞大的党卫队 cult 中心。二战末期，盟军炸弹险些将其摧毁。这段黑暗历史，为岩石蒙上了另一层难以抹去的阴影。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战后，埃克斯施泰因回归平静，成为自然保护区和国家纪念地。考古研究仍在继续，争论也从未停止：它究竟是重要的日耳曼圣地，还是一个被后世（尤其是浪漫主义和纳粹时期）过度诠释的普通地标？或许，正是这种没有定论的神秘，这种叠加了自然、史前、中世纪和近现代多重图层的复杂身份，才让埃克斯施泰因如此独一无二，持续吸引着朝圣者、游客、学者和梦想家前来，寻找他们各自心中的答案。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正感受埃克斯施泰因的魔力，建议预留至少4-5小时。最佳抵达时间是工作日的清晨（9点前）或傍晚日落前，既能避开旅游巴士的人潮，又能捕捉到最美的光线（尤其是对于摄影）。游览节奏应是“由外向内，由静到动”：先围绕外围感受其整体气势与自然环境，再深入核心探索人工雕凿的细节。从访客中心开始，逆时针绕湖一周是完美的序曲，然后重点参观石窟、浮雕，最后（如果体力胆量俱佳）登顶俯瞰森林。整个过程更像一次轻微的徒步与历史沉思的结合，请务必穿着舒适耐走的鞋子。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`登顶的楼梯非常狭窄、陡峭且昏暗，有严重幽闭恐惧症、眩晕症或行动不便的游客请慎重考虑。
岩石区域禁止攀爬（除了指定的登顶楼梯），罚款很高，请务必遵守，既为安全也为保护这脆弱的砂岩表面。
森林地区天气多变，即便夏季也建议带一件防风外套，鞋子必须防滑，因为岩石附近和森林小径可能潮湿苔滑。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在访客中心稍作停留，拿一份地图，了解基本的岩石形成与历史分期的介绍，但不必深陷学术细节，保留你的第一眼惊喜`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从访客中心后面出发，沿着韦勒贝克湖平静的岸边逆时针漫步，从各个角度仰望岩石群在水中的倒影，感受它们作为整体景观的和谐与突兀`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到湖对岸后，穿过小桥，接近最大岩石的基座，找到那个被栅栏保护但清晰可见的“下十字架”浮雕，花时间仔细观察那些古朴的人物线条和被折断的异教象征`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随指示牌进入岩石内部，弯腰穿过低矮的人工隧道，登上在岩石内部凿出的狭窄旋梯，体验中世纪修士苦修时的封闭与上升感`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上岩柱顶部的平台，抓紧栏杆，迎接着你的将是360度无垠的条顿堡森林绿海，如果天气晴朗，试着找到那个对准夏至日出方向的小壁龛`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从另一侧楼梯下来后，去探访旁边相对低矮岩石上的其他石窟，比如那个带有石床和壁龛的所谓“隐士居所”，想象千年前在此居住之人的心境`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开主岩群，沿着森林小径走上不远处的观景山丘，从这个经典的距离再次回望整个石阵，将刚才所有的细节体验整合成一幅完整的画面`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间充裕，在返回停车场的路上，可以选择一条更长的森林环线步道，让刚刚被历史信息充满的大脑在纯粹的自然的宁静中得到放松和沉淀`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`湖面倒影全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或风平浪静的傍晚，站在湖的西北侧岸边，使用广角镜头，将五根主岩柱及其在水中的完美倒影一同摄入画面，构图力求对称宁静`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`浮雕特写与光影`}</h4>
                  <p className="text-sm text-gray-700">{`下午偏西的阳光会斜射在“下十字架”浮雕上，此时靠近拍摄，利用岩石本身的纹理和光影突出雕刻的深度与沧桑感，可尝试黑白模式`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`岩顶视角俯瞰森林`}</h4>
                  <p className="text-sm text-gray-700">{`登顶后，将相机镜头从平台边缘稍稍伸出（注意安全），向下俯拍森林树冠的绵延绿海，或平拍另一根岩柱的侧面，展现其孤高之感`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`森林缝隙框景`}</h4>
                  <p className="text-sm text-gray-700">{`在观景山丘或外围森林中，寻找天然的前景框架（如树叶、枝干），将远处的石阵作为焦点框在其中，营造一种“林中秘境”的发现感`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`星空下的石阵`}</h4>
                  <p className="text-sm text-gray-700">{`如果你有幸在夏秋晴朗的夜晚停留（确保安全且被允许），在湖边架起三脚架，用长曝光捕捉岩石在璀璨星空下的剪影，神秘感十足`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效减少湖面反光，让倒影更清澈，并增强砂岩色彩的饱和度。`}</li>
                <li>• {`尊重在此进行宗教或冥想活动的人士，未经明确许可，避免近距离对准他们拍摄，这是基本的礼貌。`}</li>
                <li>• {`无人机飞行在自然保护区有严格限制，通常禁止，起飞前务必查清当地最新法规。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`森林疗愈之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在步行可达埃克斯施泰因的森林小木屋或生态民宿，夜晚聆听纯粹的虫鸣与风声，清晨在鸟叫声中醒来，直接融入自然氛围`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史城镇体验`}</h4>
                  <p className="text-sm text-green-800">{`选择住在15公里外、充满文艺复兴风情的代特莫尔德老城中心，傍晚在古朴的集市广场用餐，享受完城市便利后再驱车短途前往探秘`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特色庄园酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻条顿堡森林周边由古老农庄或贵族宅邸改造的乡村酒店，享受传统的德国乡村早餐和田园风光，体验一把“森林贵族”的闲适`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`温泉放松组合`}</h4>
                  <p className="text-sm text-purple-800">{`前往附近的巴特迈因贝格（Bad Meinberg）温泉镇，入住一家带温泉浴场的酒店，白天探索巨石，晚上用温暖的泉水舒缓徒步的疲劳`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季和秋季的周末务必提前很久预订，这里是德国人热门的短途度假地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`森林周边的住宿非常安静，但夜间几乎没有任何商业活动，适合追求静谧的旅行者。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果主要依靠公共交通，强烈建议选择代特莫尔德或霍恩-巴特迈因贝格火车站附近的住宿，连通性最好。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开埃克斯施泰因很久之后，那片森林的气息和岩石沉默的姿态，依然会不时地回到你的脑海里。它不像那些金碧辉煌的宫殿教堂，用压倒性的华丽让你瞬间惊叹然后遗忘。相反，它是一种缓慢的渗透。你记得的是那种感觉：站在自然造物的宏伟面前的人类渺小感，触摸历史岩石时的时空交错感，以及面对一个没有标准答案的谜题时，内心被激起的无尽好奇与想象。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都被过度解释、标签化和快速消费的时代，埃克斯施泰因保留了一种珍贵的“未完成性”和“开放性”。它是地质学的标本，是考古学的遗址，是宗教史的战场，是政治史的伤疤，但同时，它也可以只是你个人一次郊游的目的地，一片让你觉得平静的奇怪石头。它不强迫你接受某个单一的叙事，而是允许你带着自己的问题、自己的背景，去与之对话，去编织属于自己的故事。这种自由，在如今高度策划的旅游体验中，是如此稀有而宝贵。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位不满足于走马观花，渴望在旅途中触碰土地深层记忆、并反观自身的深度旅人，都应该来一次埃克斯施泰因。它教给你的，或许不是某个具体的历史知识，而是一种态度：如何在一片风景中，同时看到自然的时间、人类的时间和属于自己的时间，并学会与所有这些层次的沉默与谜团共处。这是一次走向外在奇观的旅程，更是一次走向内心深处的邀请。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/burg-eltz" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃尔茨城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Burg Eltz</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ehrenbreitstein-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科布伦茨埃伦布赖特施泰因要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ehrenbreitstein Fortress</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/regensburg-stone-bridge" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    雷
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">雷根斯堡石桥</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Regensburg Stone Bridge</p>
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
