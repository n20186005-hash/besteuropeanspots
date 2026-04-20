import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃尔穆波利 锡罗斯岛｜希腊新古典主义的双子山城与失落的“女王”传奇 - 最佳欧洲景点',
  description: '船缓缓靠岸时，你第一眼看到的绝不会是常见的、散落的白房子蓝教堂。埃尔穆波利扑面而来的是一种庄严的都市气派。巨大的新古典主义立面沿着弧形海湾一字排开，粉彩色的市政厅、带钟楼的市政市场、有着高大拱廊的剧院，它们不像海岛装饰，倒像缩微版的雅典或维也纳被搬到了爱琴海中央。空气里有海水的咸湿，混合着港口咖啡馆...',
}

export default function ErmoupoliSyrosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '埃尔穆波利（锡罗斯岛）', href: '/attractions/ermoupoli-syros' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`埃尔穆波利（锡罗斯岛）・Ermoupoli・希腊・锡罗斯岛`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`船缓缓靠岸时，你第一眼看到的绝不会是常见的、散落的白房子蓝教堂。埃尔穆波利扑面而来的是一种庄严的都市气派。巨大的新古典主义立面沿着弧形海湾一字排开，粉彩色的市政厅、带钟楼的市政市场、有着高大拱廊的剧院，它们不像海岛装饰，倒像缩微版的雅典或维也纳被搬到了爱琴海中央。空气里有海水的咸湿，混合着港口咖啡馆飘出的浓郁希腊咖啡香，以及从老式五金店铺里散出的淡淡机油味。出租车司机在码头用夹杂意大利语和希腊语的调子招揽生意，远处山巅传来隐约的钟声——不止一种，那是天主教与东正教堂钟声在空气中微妙的交织。
但这座城的魔法在于它的垂直维度。你的视线会不由自主地被两座对峙的山丘牵引。右边是瓦普区，陡峭的岩壁上，一座座像豪华邮轮船头般的豪宅昂然矗立，巨大的落地窗反射着粼粼波光，那是19世纪船王们的“海景城堡”。左边则是层层叠叠、迷宫般的阿诺锡罗斯，蜿蜒的石阶小路在雪白的房屋间攀升，直插云霄，最终抵达山顶那座红色的天主教主教座堂。城市的声音是分层的：港口是渡轮汽笛与摩托车的喧嚣；半山腰是晾晒衣服的拍打声和邻居隔着阳台的聊天声；山顶则只有风声与钟鸣。
这里不是为游客存在的明信片小镇。港口边的“阿波罗”剧院里，可能正在排练一场古典戏剧；市政厅广场上，老人们永远在争论政治；狭窄的“瓦尔瓦基街”上，裁缝店、铜匠铺和传统糖果店依然在为本地居民服务。埃尔穆波利的魅力，在于它既承载着一段辉煌、宏大的国家历史，又完好地保存着日常生活的烟火温度。它是一座依然在呼吸、在工作的“活化石”城市，让你仿佛能触摸到希腊刚独立时，那股充满野心与希望的时代脉搏。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`船缓缓靠岸时，你第一眼看到的绝不会是常见的、散落的白房子蓝教堂。埃尔穆波利扑面而来的是一种庄严的都市气派。巨大的新古典主义立面沿着弧形海湾一字排开，粉彩色的市政厅、带钟楼的市政市场、有着高大拱廊的剧院，它们不像海岛装饰，倒像缩微版的雅典或维也纳被搬到了爱琴海中央。空气里有海水的咸湿，混合着港口咖啡馆飘出的浓郁希腊咖啡香，以及从老式五金店铺里散出的淡淡机油味。出租车司机在码头用夹杂意大利语和希腊语的调子招揽生意，远处山巅传来隐约的钟声——不止一种，那是天主教与东正教堂钟声在空气中微妙的交织。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但这座城的魔法在于它的垂直维度。你的视线会不由自主地被两座对峙的山丘牵引。右边是瓦普区，陡峭的岩壁上，一座座像豪华邮轮船头般的豪宅昂然矗立，巨大的落地窗反射着粼粼波光，那是19世纪船王们的“海景城堡”。左边则是层层叠叠、迷宫般的阿诺锡罗斯，蜿蜒的石阶小路在雪白的房屋间攀升，直插云霄，最终抵达山顶那座红色的天主教主教座堂。城市的声音是分层的：港口是渡轮汽笛与摩托车的喧嚣；半山腰是晾晒衣服的拍打声和邻居隔着阳台的聊天声；山顶则只有风声与钟鸣。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里不是为游客存在的明信片小镇。港口边的“阿波罗”剧院里，可能正在排练一场古典戏剧；市政厅广场上，老人们永远在争论政治；狭窄的“瓦尔瓦基街”上，裁缝店、铜匠铺和传统糖果店依然在为本地居民服务。埃尔穆波利的魅力，在于它既承载着一段辉煌、宏大的国家历史，又完好地保存着日常生活的烟火温度。它是一座依然在呼吸、在工作的“活化石”城市，让你仿佛能触摸到希腊刚独立时，那股充满野心与希望的时代脉搏。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`埃尔穆波利（锡罗斯岛）`} />
                <InfoRow label="英文名称" value={`Ermoupoli`} />
                <InfoRow label="正式名称" value={`Ermoupoli, Syros`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`锡罗斯岛`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`19世纪希腊独立后的第一个现代都市和重要港口，被誉为“基克拉泽斯群岛的女王”。`} />
                <InfoRow label="建筑特色" value={`两座山丘（天主教与东正教）簇拥着华丽的新古典主义港口城市，形成绝无仅有的“双子山城”立体景观。`} />
                <InfoRow label="建筑风格" value={`以宏伟的新古典主义公共建筑为核心，融合了威尼斯时期的中世纪元素与岛民自建的简约“海岛风”住宅。`} />
                <InfoRow label="文化价值" value={`是希腊近代化、宗教宽容（天主教与东正教和谐共存）以及航运业兴衰的鲜活见证。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`整个城镇全天可自由漫步。主要公共建筑如市政厅（Miaoulis广场）工作日通常上午8点至下午3点开放，但可能因市政活动关闭。阿诺锡罗斯区（Ano Syros）的中世纪街区与瓦普区（Vaporia）的豪宅外部可随时参观，内部多为私人住宅。各大教堂开放时间不一，通常为上午9点至下午1点，以及傍晚5点至8点。夏季（5月至9月）所有场所开放时间可能延长，冬季可能缩短或提前关闭。重要节庆日（如希腊独立日）广场会有活动，但部分办公室关闭。`} />
              <InfoRow label="门票价格" value={`探索城镇本身无需门票。进入特定博物馆或展览（如锡罗斯工业博物馆）可能需要小额门票，约3-5欧元。登上阿诺锡罗斯区的圣乔治主教座堂（Catholic Cathedral of Saint George）俯瞰全景免费，但欢迎捐赠。主要费用在于交通、住宿和餐饮。`} />
              <InfoRow label="地址" value={`Ermoupoli 841 00, Greece`} />
              <InfoRow label="交通方式" value={`最便捷是飞往雅典国际机场（ATH），然后从雅典比雷埃夫斯港乘渡轮前往锡罗斯岛。高速船（如SeaJets）航程约2.5-3小时，普通渡轮约4小时。建议提前在线（如Ferryhopper）购票，夏季班次频繁但需预订。抵达锡罗斯岛港口即是埃尔穆波利市中心。岛上无机场，从其他基克拉泽斯岛屿（如米科诺斯、圣托里尼）也有渡轮直达。岛上交通可步行探索老城，或乘坐本地巴士前往偏远海滩，出租车在港口广场容易找到。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从1821年希腊独立战争说起。当时，许多从希俄斯、普萨拉、小亚细亚等地遭受战火蹂躏的岛屿逃出来的难民，在爱琴海上漂泊，寻找新的家园。他们发现了锡罗斯岛——一个在当时主要由天主教徒居住、相对平静的岛屿。难民们，大多是东正教徒，没有选择去挤占山顶上已有的中世纪天主教城镇（阿诺锡罗斯），而是在山下的天然良港旁，从零开始，搭建起简陋的棚屋。谁也没想到，这个仓促建立的难民定居点，命运之轮开始疯狂转动。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`由于它位于爱琴海的中心位置，以及当时奥斯曼帝国势力尚未完全退去的复杂局势中，这个新建的港口迅速成为了一个安全的中立贸易港。它吸引了来自整个地中海东部的商人、船东和手工艺者。财富以惊人的速度涌入。到了1830年代，这个新兴的城镇已经被正式命名为“埃尔穆波利”（意为“赫尔墨斯之城”，献给商业之神），并被定为新成立的希腊王国的重要省份首府。这是希腊第一个按照现代城市规划理念建造的城市，充满了象征新生国家抱负的雄心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，你看到了那些今天依然震撼人心的建筑。一位名叫威廉·冯·魏勒的德国建筑师被请来，绘制了城市的蓝图。希腊本土最优秀的建筑师，如桑蒂斯和赞托斯，在这里大展拳脚。用岛上特产的白色大理石和灰色岩石，他们建起了宏伟的市政厅（仿照慕尼黑宫殿）、带多立克柱廊的市政市场、以及被誉为“小斯卡拉”的阿波罗剧院——这是整个希腊最早的歌剧剧院之一。船运大亨们则在面海的陡峭瓦普区，争相建造最气派的豪宅，巨大的窗户仿佛在炫耀他们与海洋的亲密关系和对财富的掌控。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`整个19世纪，埃尔穆波利都是希腊的造船业、商业和文化中心，其繁荣程度甚至超过了雅典。蒸汽机在这里被引进，第一家报社在此成立。独特的社区结构也稳固下来：东正教徒主导着山下繁华的港口商业区和新古典主义“下城”，而天主教徒依然盘踞在山上蜿蜒的中世纪“上城”。两者虽有区分，却罕有冲突，共同塑造了城市独特的天际线。然而，随着比雷埃夫斯港的崛起和苏伊士运河的开通，埃尔穆波利在20世纪初逐渐失去了它的航运霸主地位，“女王”的光环开始黯淡。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`之后的岁月里，它经历了一段沉寂，仿佛时间的流速在这里变慢了。但也正是这种“被遗忘”，使它奇迹般地躲过了过度旅游化的侵蚀，完整保留了新古典主义城市肌理和那份混合着辉煌记忆与平静日常的复杂气质。今天，当你走在它的街道上，你行走的不仅是一座美丽的城镇，更是一本关于希腊如何步入现代国家的立体史书，每一级石阶，每一扇彩色的木门，都在低语着一个时代的传奇与叹息。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你至少留出一整天的时间，来细细品味这座双面之城。理想的开始是清晨（8点左右），趁着一日游的游客尚未从其他岛屿抵达，独享港口区的宁静晨光。整体游览节奏应该是“先下后上，环线串联”。上午精力充沛时，探索平地的港口与新古典主义核心区，了解其宏大的历史叙事；午后气温升高时，转入瓦普区绿树成荫的豪宅巷道和凉爽的阿诺锡罗斯迷宫，感受生活气息与宗教氛围；傍晚时分，则必须选择一个山顶，等待爱琴海日落将整个大理石之城染成金色。这样的安排能让你在光影最佳的时刻出现在最佳的位置，并完美体验城市从庄严到亲密的层次变化。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`攀登阿诺锡罗斯的山路多为石板台阶，请务必穿一双绝对舒适防滑的鞋子，高跟鞋在这里是“灾难级”选择。
夏季正午阳光非常暴烈，瓦普区和山顶几乎无遮无挡，请做好防晒并携带充足饮水，建议将最耗体力的爬山活动安排在清晨或傍晚。
岛上猫咪众多且不怕人，请勿随意喂食，安静欣赏它们在各家门槛上晒太阳的慵懒姿态就好。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从港口码头出发，第一站就走向那座气势恢宏的粉灰色市政厅，用手触摸它冰凉的大理石立柱，感受新古典主义的庄严力量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`绕到市政厅后面的瓦尔瓦基街，把自己丢进狭窄的巷弄，看看那些还在营业的老式作坊，闻闻空气中弥漫的蜂蜜和杏仁糖的甜香。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着海的方向漫步到瓦普区，沿着“船长大街”行走，仰望那些如同定格在惊涛骇浪中的白色豪宅，想象船长夫人们曾在怎样的露台上眺望远航的归帆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一条最陡的阶梯开始向阿诺锡罗斯攀登，在曲折回转中迷失方向，与提着菜篮回家的老太太擦肩而过，听她友好地说一声“Yiasou”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最终抵达山顶的圣乔治天主教主教座堂，在教堂前开阔的平台上静坐片刻，聆听不同于东正教堂的钟声，俯瞰脚下整个城市如模型般铺展。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从山的另一侧蜿蜒而下，特意穿过那些晾满衣服、摆满盆栽的居民小巷，感受石板路被午后阳光烘烤后散发的温热。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前一小时，前往阿诺锡罗斯山腰某个朝西的露天咖啡馆，点一杯冰弗雷普，看着夕阳将瓦普区的豪宅、港口的新古典建筑群依次点燃成火红色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`夜幕降临时，回到米阿乌利斯广场，加入当地人的晚间散步仪式，看华灯初上，新古典主义建筑在灯光下显现出与白日截然不同的戏剧性面孔。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`瓦普区最前端岩石观景台`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，以嶙峋的礁石和湛蓝的爱琴海为前景，拍摄那些如白色帆船般的豪宅剪影，构图时让建筑占据画面上半部。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从阿诺锡罗斯半山腰向东俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`清晨八至九点，阳光照亮港口建筑立面时，使用长焦镜头压缩空间，捕捉新古典主义建筑群错落有致的层次感与港口船只构成的繁忙画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`米阿乌利斯广场钟楼仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`正午当阳光直射时，站在广场中心仰拍市政厅钟楼，利用强烈的明暗对比突出建筑精美的石材雕刻细节。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`阿诺锡罗斯迷宫小巷`}</h4>
                  <p className="text-sm text-gray-700">{`下午四五点，当阳光斜射入狭窄巷道，在洁白的墙壁上投下长长的阴影时，等待一个当地居民（如骑自行车的小孩或拎着布袋的老爷爷）走入光影，拍下充满生活气息的瞬间。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从海上回望双山城`}</h4>
                  <p className="text-sm text-gray-700">{`如果你乘坐渡轮离开，务必在船驶离港口时到甲板上，用广角镜头拍摄埃尔穆波利两座山丘环抱海湾的完整全景，这是它得名“双山城”的标准肖像。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重当地居民隐私，拍摄居民或他们房屋内部前，请务必先用微笑和手势征得同意。许多小巷是私人空间延伸。`}</li>
                <li>• {`教堂内部通常允许拍照，但请关闭闪光灯，并保持肃静。弥撒期间绝对不要拍照或四处走动。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`港口怀旧风`}</h4>
                  <p className="text-sm text-blue-800">{`位于码头附近一栋19世纪新古典主义建筑内的精品酒店，天花板高悬，阳台正对渡轮往来景象，清晨在房间就能闻到海风与咖啡香。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`阿诺锡罗斯隐居所`}</h4>
                  <p className="text-sm text-green-800">{`由山顶传统石屋改造的民宿，拥有俯瞰全城与爱琴海的绝美露台，每天在鸽群盘旋和教堂钟声中醒来，真正融入中世纪山城生活。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`瓦普区艺术之家`}</h4>
                  <p className="text-sm text-yellow-800">{`船东老宅改造的设计师酒店，保留了原始的拱形石窗和船木地板，房间里装饰着现代艺术画作，在古典奢华与简约设计中找到平衡。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济社交之选`}</h4>
                  <p className="text-sm text-purple-800">{`米阿乌利斯广场旁的家庭式旅馆，房间简单干净，老板热情好客，下楼就是城市客厅，完美体验当地人“晚上出来散步聊天”的核心生活节奏。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`阿诺锡罗斯区的住宿需要爬很多台阶，行李搬运是挑战，但换来的宁静和视野无与伦比，适合轻装行者。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（7-8月）是旺季，需提前数月预订，尤其是特色精品酒店。春秋季（5-6月，9-10月）气候宜人，价格更优，是更明智的选择。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`港口区夜间可能会有渡轮引擎声和摩托车声，对声音敏感者建议选择更高处的住宿。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开埃尔穆波利许久后，印象最深的可能不是某座建筑，而是那种奇特的“复合感”。它不像那些纯粹为了美而存在的岛屿小镇，它的美是功能与野心、历史与日常共同作用的副产品。走在这里，你能同时感受到一个新兴国家想要跻身欧洲文明的迫切雄心，和一个海岛社区数百年未变的、缓慢而亲密的邻里生活。这种宏大的历史叙事与细微的当下脉搏，在这座双山城里，不是割裂的，而是像那两座山丘一样，相互对峙，又相互依存，共同构成完整的风景。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求快速打卡、体验趋同的世界里，埃尔穆波利提供了一种难得的“深度”。它要求你付出体力去攀登，去迷路，去在那些看似不起眼的街角发现仍在敲打铜器的老工匠。它不急于讨好你，只是从容地展现它的多层次：既是失落的“女王”，也是鲜活的“家园”。对于真正的深度旅行者来说，这里藏着希腊灵魂中除了古老神话和蓝白浪漫之外的另一个维度——那个近代的、奋斗的、在商业与艺术中寻找自我定位的希腊。来到这里，你不只是在参观一个景点，而是在阅读一座依然在呼吸的、立体的城市传记，它会让你对爱琴海、对希腊的理解，变得丰厚而复杂得多。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/epidaurus-theatre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃皮达鲁斯古剧场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Epidaurus Theatre</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/papigo-villages-zagori" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    帕
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">帕皮戈（扎戈里山区传统石屋村落）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Papigo (Zagori Stone Villages)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sanctuary-of-apollo-at-delphi" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    德
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">德尔斐阿波罗神庙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Delphi</p>
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
