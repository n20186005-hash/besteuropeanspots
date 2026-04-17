import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '叶尔加瓦宫 Jelgava Palace｜波罗的海最大的巴洛克宫殿，一部在烈火与重生中写就的琥珀之地史诗 - 最佳欧洲景点',
  description: '当你从那条著名的、两侧矗立着古老林登树的林荫大道尽头望过去时，叶尔加瓦宫并不像你在维也纳或巴黎看到的那种精致、繁复到令人屏息的宫殿。它的第一眼印象是一种带着北方大地特有沉静感的宏伟。巨大的、近乎方正的体量稳稳地坐落在道加瓦河畔的平原上，那种柠檬黄色的外墙在波罗的海夏季漫长的日光下，泛着一种温暖而柔和...',
}

export default function JelgavaPalacePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '叶尔加瓦宫', href: '/attractions/jelgava-palace' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`叶尔加瓦宫・Jelgava Palace・拉脱维亚・叶尔加瓦`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你从那条著名的、两侧矗立着古老林登树的林荫大道尽头望过去时，叶尔加瓦宫并不像你在维也纳或巴黎看到的那种精致、繁复到令人屏息的宫殿。它的第一眼印象是一种带着北方大地特有沉静感的宏伟。巨大的、近乎方正的体量稳稳地坐落在道加瓦河畔的平原上，那种柠檬黄色的外墙在波罗的海夏季漫长的日光下，泛着一种温暖而柔和的光泽，不像金色那般炫耀，更像一块被岁月打磨温润的巨型琥珀。走近了，你会闻到空气中混合着青草、潮湿的泥土，以及从古老砖石缝隙里透出的、一丝凉凉的、属于历史的气味。周围安静极了，只有风吹过树梢的沙沙声，和远处偶尔传来的、属于拉脱维亚农业大学学生的自行车铃声与轻快交谈声。
这里早已不是戒备森严的贵族禁地。你会发现，宫殿前方广阔的草坪上，三三两两的学生坐着看书、聊天，或是仅仅躺着晒太阳。这座波罗的海最大的巴洛克宫殿，如今更像是一位慈祥的巨人，敞开怀抱，成了这座小城日常生活与学术脉搏的一部分。它的核心魅力，恰恰在于这种惊人的反差与融合——极致宏伟的建筑尺度，包裹着的却是无比平实、甚至有些朴素的当代生活。你穿过那标志性的拱形门洞进入内院，四四方方的天空被巴洛克式的山墙轮廓切割，脚步声在空旷的石板地上回响，那一刻，你仿佛能同时触摸到18世纪的野心与21世纪的宁静。
最打动人的，或许是那种无处不在的“修补”的痕迹。仔细看，有些窗框是崭新的白色木工，紧挨着的却是色泽深沉、布满风雨刻痕的旧构件；一面墙的石头颜色统一，另一面却有着明显的色差与接缝。这无声地诉说着它多舛的命运：大火、战争、被忽视，然后又一次次被需要、被改造、被赋予新的生命。它不是一件完美无瑕的博物馆展品，而是一部用砖石写就的、仍在续写中的史诗，每一道伤痕和修补都是它的句子。在这里，你感受到的不是遥不可及的帝王威严，而是一种属于整个民族的坚韧与务实——历史建筑不是供奉起来的标本，而是可以融入呼吸、承载未来的一副坚实骨架。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你从那条著名的、两侧矗立着古老林登树的林荫大道尽头望过去时，叶尔加瓦宫并不像你在维也纳或巴黎看到的那种精致、繁复到令人屏息的宫殿。它的第一眼印象是一种带着北方大地特有沉静感的宏伟。巨大的、近乎方正的体量稳稳地坐落在道加瓦河畔的平原上，那种柠檬黄色的外墙在波罗的海夏季漫长的日光下，泛着一种温暖而柔和的光泽，不像金色那般炫耀，更像一块被岁月打磨温润的巨型琥珀。走近了，你会闻到空气中混合着青草、潮湿的泥土，以及从古老砖石缝隙里透出的、一丝凉凉的、属于历史的气味。周围安静极了，只有风吹过树梢的沙沙声，和远处偶尔传来的、属于拉脱维亚农业大学学生的自行车铃声与轻快交谈声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里早已不是戒备森严的贵族禁地。你会发现，宫殿前方广阔的草坪上，三三两两的学生坐着看书、聊天，或是仅仅躺着晒太阳。这座波罗的海最大的巴洛克宫殿，如今更像是一位慈祥的巨人，敞开怀抱，成了这座小城日常生活与学术脉搏的一部分。它的核心魅力，恰恰在于这种惊人的反差与融合——极致宏伟的建筑尺度，包裹着的却是无比平实、甚至有些朴素的当代生活。你穿过那标志性的拱形门洞进入内院，四四方方的天空被巴洛克式的山墙轮廓切割，脚步声在空旷的石板地上回响，那一刻，你仿佛能同时触摸到18世纪的野心与21世纪的宁静。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，或许是那种无处不在的“修补”的痕迹。仔细看，有些窗框是崭新的白色木工，紧挨着的却是色泽深沉、布满风雨刻痕的旧构件；一面墙的石头颜色统一，另一面却有着明显的色差与接缝。这无声地诉说着它多舛的命运：大火、战争、被忽视，然后又一次次被需要、被改造、被赋予新的生命。它不是一件完美无瑕的博物馆展品，而是一部用砖石写就的、仍在续写中的史诗，每一道伤痕和修补都是它的句子。在这里，你感受到的不是遥不可及的帝王威严，而是一种属于整个民族的坚韧与务实——历史建筑不是供奉起来的标本，而是可以融入呼吸、承载未来的一副坚实骨架。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`叶尔加瓦宫`} />
                <InfoRow label="英文名称" value={`Jelgava Palace`} />
                <InfoRow label="正式名称" value={`Jelgava Palace`} />
                <InfoRow label="国家" value={`拉脱维亚`} />
                <InfoRow label="城市" value={`叶尔加瓦`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`曾是库尔兰和瑟米利亚公国鼎盛时期的政治与文化中心，见证了波罗的海德意志贵族权力的巅峰与陨落。`} />
                <InfoRow label="建筑特色" value={`波罗的海地区规模最宏大的巴洛克式宫殿建筑群，拥有独特的“口”字形平面布局与醒目的柠檬黄色外墙。`} />
                <InfoRow label="建筑风格" value={`巴洛克风格，但在屡次重建中融入了古典主义及后来的功能主义元素。`} />
                <InfoRow label="文化价值" value={`一座跨越三个世纪的“活化石”，其身份从公爵宫殿到军事总部，再到农业大学，生动诠释了拉脱维亚历史的层叠与韧性。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`宫殿内部（拉脱维亚农业大学区域）的公共开放区域通常为周一至周五上午9:00至下午5:00开放，周末和节假日可能关闭或缩短时间。历史展览部分的具体开放时间常有变动，强烈建议出发前在叶尔加瓦旅游官网或宫殿信息牌上确认。宫殿的外部庭院和花园全天24小时免费开放。`} />
              <InfoRow label="门票价格" value={`进入宫殿建筑主体（作为大学教学楼）免费。但参观特定的历史展览或参加官方导览团需要付费，成人票价约8-10欧元，学生及长者享有优惠票价约4-5欧元。导览团通常需要提前邮件或电话预约。`} />
              <InfoRow label="地址" value={`Lielā iela 2, Jelgava, LV-3001, Latvia`} />
              <InfoRow label="交通方式" value={`从拉脱维亚首都里加的国际机场（RIX）出发，最便捷的方式是乘坐出租车或网约车（Bolt）直接前往叶尔加瓦市，车程约45分钟至1小时，费用约30-40欧元。更经济的选择是：从里加中央火车站或汽车站乘坐火车或长途巴士，班次频繁，每半小时至一小时一班，车程约50分钟。抵达叶尔加瓦火车站或汽车站后，宫殿宏伟的黄色立面就在步行15分钟的范围内，沿着宁静的街道慢慢走过去是最好的方式。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从18世纪初讲起，那时的叶尔加瓦还叫“米塔乌”，是库尔兰和瑟米利亚公国繁荣的首都。公爵恩斯特·约翰·冯·比隆，一位权势滔天的人物（他甚至曾是俄国女皇安娜的情人与重臣），决心要有一座配得上其家族野心的宫殿。1738年，他请来了当时欧洲最炙手可热的设计师之一，意大利人巴尔托洛梅奥·拉斯特雷利——没错，就是后来设计了圣彼得堡冬宫和皇村的那位巨匠。拉斯特雷利勾勒出了一座前所未有的宏伟巴洛克蓝图，但工程浩大，直到比隆家族流放西伯利亚也未能完工。然而，这座未完成的宫殿已奠定了其不朽的格局。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的灾难与重生在1763年降临。一场毁灭性的大火几乎将宫殿化为灰烬。但库尔兰的贵族们没有放弃，他们再次聘请了拉斯特雷利的儿子，弗朗切斯科·拉斯特雷利，在废墟上依照原设计进行重建。到了1770年代，这座拥有超过400个房间、布局严整如棋盘的四翼宫殿终于屹立起来，成为波罗的海沿岸最令人惊叹的世俗建筑。整个19世纪，它都是波罗的海德意志贵族社会的璀璨中心，舞会、沙龙、外交斡旋在此轮番上演，空气里弥漫着香水、雪茄与权力的味道。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，20世纪的飓风彻底改变了它的轨迹。第一次世界大战期间，德国军队占领了这里，将其作为东部前线指挥部，华丽的厅堂里回荡起的是电报声与军事命令。1918年，拉脱维亚宣布独立，宫殿的部分区域曾短暂作为政府机构。但平静短暂，第二次世界大战的炮火再次撕裂这片土地。1944年，撤退的德军在叶尔加瓦与苏军爆发惨烈巷战，宫殿遭到严重炮击，内部精美的装饰、壁画、收藏几乎毁灭殆尽，只剩下被熏黑的外墙和空荡的骨架，如同一个巨大的、悲伤的废墟。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战后，面对满目疮痍的国家，苏联当局面临一个抉择：是修复这座象征“封建与资产阶级”过去的宫殿，还是将其推平？实用主义占据了上风。他们看到了这座巨大建筑的“使用价值”。于是，从1950年代开始，一场奇特的改造开始了。宫殿没有被恢复成博物馆，而是被“功能性”地修复，内部被分割成教室、实验室、图书馆和宿舍，成为了拉脱维亚农业大学的教学楼。巴洛克的山花下挂着苏维埃式的标语，昔日的舞厅里摆满了农学标本。这或许是一种另类的拯救——以融入日常生活的方式，让它避开了被彻底遗忘或拆除的命运。也正因如此，我们今天看到的叶尔加瓦宫，才拥有如此复杂而迷人的面孔：它是公爵的遗产，是战争的伤疤，也是无数拉脱维亚学子求知的平凡殿堂。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你在一个晴朗的上午抵达，预留出至少4到5个小时，进行一场“由外至内、由宏至微”的深度漫游。上午光线柔和，适合拍摄宫殿宏伟的立面与林荫大道。先从外部感受它庞大的尺度与宁静的周边环境，让自己适应这种历史与当下交织的独特氛围。然后，带着一种“探访一所古老大学”而非“参观博物馆”的心态进入内部，你会发现更多有趣的细节。这样的节奏让你有时间在参观略显肃穆的历史展览后，能在花园或河畔放松，消化那些厚重的历史故事，避免因信息过载而疲惫。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`宫殿内部很多区域是正常教学场所，游览时请保持安静，尊重学生和教职工，切勿擅自闯入标有“禁止入内”的区域。
由于功能是大学，内部指引可能不像博物馆那样清晰，不妨带着一点探索的心态，或者友好地向路过的工作人员问路。
拉脱维亚夏季蚊虫较多，如果计划在花园或河畔长时间停留，建议提前涂抹防蚊液。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从那条笔直的、通往宫殿正门的林荫大道起点开始你的朝圣，让视线随着两排参天古树一直延伸到那抹温暖的柠檬黄`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过巨大的拱形主门洞踏入静谧的内庭院，抬头感受被四四方方的巴洛克轮廓框住的拉脱维亚天空`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到面向内庭的主入口，推开那扇厚重的门，进入如今作为大学门厅的空间，立刻被高大简朴的厅堂和那面标志性的柠檬黄墙面所包裹`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主楼梯缓缓而上，想象18世纪的贵族裙摆拂过台阶，而今身边擦肩而过的则是抱着书本、步履匆匆的年轻学生`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找面向道加瓦河的那一侧长廊，在巨大的窗户前驻足，眺望窗外平静流淌的河水与对岸的森林，这是公爵当年最爱的风景`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果运气好遇到开放，去探访一下那个被称为“镜厅”或保留了一些历史痕迹的旧大厅，感受一下残存的石膏线脚和高高的天花板下凝固的时间`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在连接各翼的漫长回廊里慢慢行走，留意观察教室门牌、公告栏上的学生作品，还有那些新旧材料并存的建筑细节`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从宫殿东翼的一扇小门走出去，发现那片与宫殿相连的、不那么规整却生机勃勃的秘密花园，这里是当地学生偷闲的角落`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`林荫大道入口处仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚的黄金时刻，阳光斜射过林登树叶，在石板路上投下长长光影，将宫殿作为远景居中构图，能拍出极具纵深感和仪式感的画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`宫殿内庭院回廊二层角落`}</h4>
                  <p className="text-sm text-gray-700">{`站在回廊的阴影里，将镜头对准对面被阳光直射的、色彩饱满的柠檬黄墙面与拱窗，形成强烈的明暗与色彩对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`宫殿东翼通往秘密花园的小门框`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，利用古老的门洞作为天然画框，将门外郁郁葱葱的花草和远处宫殿的一角一同纳入镜中，层次感极佳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`主楼梯间的大吊灯下`}</h4>
                  <p className="text-sm text-gray-700">{`如果允许且光线合适，从楼梯中段向上仰拍，捕捉那盏可能并非古老却气势十足的大型吊灯，以及螺旋上升的楼梯曲线。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`宫殿西翼外侧的砖墙与常春藤`}</h4>
                  <p className="text-sm text-gray-700">{`寻找那些被茂密常春藤部分覆盖、砖石色泽深沉且带有明显修补痕迹的墙面，特写能诉说最沧桑的历史故事。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内光线通常较暗且为混合光源，建议提高ISO或使用大光圈镜头，尽量使用RAW格式以便后期调整白平衡。`}</li>
                <li>• {`拍摄学生或教职员工时，务必先征得对方同意，尊重他们的隐私，这是一个正在运作的校园。`}</li>
                <li>• {`尝试在不同天气拍摄，阴雨天的宫殿外墙会呈现出另一种冷峻、沉郁的质感，非常适合表达其历史厚重感。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在叶尔加瓦市中心一栋经过修复的新艺术风格公寓里，由热情的当地房东经营，早晨步行穿过宁静的街心公园就能望见宫殿的尖顶`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`下榻于历史中心一座由19世纪老邮局改造的精品设计酒店，房间保留着高高的天花板和复古元素，现代舒适的设施与怀旧氛围完美结合`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`入住道加瓦河畔唯一的四星级酒店，选择一间带有河景阳台的房间，傍晚时分可以一边享用晚餐，一边欣赏对岸宫殿在夕阳下的全景`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`学生之选`}</h4>
                  <p className="text-sm text-purple-800">{`尝试预订宫殿河对岸一栋安静的现代民宿，房间简洁明亮，阳台正对宫殿侧面，能以最本地化的视角观察这座建筑日与夜的变化`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`叶尔加瓦是个安静的小城，住宿选择不像里加那样丰富，尤其在夏季或学期活动期间，建议提前至少两周预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城市非常安全，夜间漫步也很惬意，可以选择住在市中心，方便探索除宫殿外的其他历史建筑，如叶尔加瓦圣三一教堂等。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果追求更多样的餐饮和夜生活，也可以选择住在里加，当天乘火车往返，车程短且班次多，是一种灵活的方案。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开叶尔加瓦宫很久以后，印象最深的不是它“波罗的海最大巴洛克宫殿”的头衔，而是那种奇特的、温暖而坚韧的混杂感。它不像许多古迹那样，被小心翼翼地从现实生活中剥离出来，供奉在玻璃罩里。它恰恰是深深植根于现实的泥土中，甚至有些“蓬头垢面”地活着。在这里，历史的尊严不是靠隔绝来保全的，而是通过每一天的使用、每一次的修补、每一代年轻生命的注入来延续的。这或许是一种更高形式的尊重——承认历史不是终点，而是我们共同站立并走向未来的基石。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个人人都追逐着完美滤镜下景点的时代，叶尔加瓦宫提供了一种更为珍贵、更富哲理的旅行体验。它告诉你，真正的伟大，或许不在于永远光鲜完美，而在于拥有承受毁灭并在废墟上一次次重建新生的勇气与韧性。它是一部石头写成的编年史，每一道裂缝都是一个章节，每一处修补都是一个转折。对于渴望深度游的灵魂来说，这里没有迪士尼式的童话幻境，有的是一整个民族复杂历史的真实截面，冷静、粗糙、充满伤痕，却也因此而拥有触手可及的温度和直抵人心的力量。来这里，不只是看一座宫殿，更是阅读一首关于生存、 adaptation（适应）与希望的、属于波罗的海的漫长史诗。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/blenheim-palace" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布伦古堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Blenheim Palace</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sigulda-medieval-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡古尔达中世纪城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sigulda Medieval Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/wuerzburg-residence" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维尔茨堡主教宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Würzburg Residence</p>
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
