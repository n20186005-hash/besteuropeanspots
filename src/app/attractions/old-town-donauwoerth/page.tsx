import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '多瑙沃特古城 Old Town of Donauwörth｜探访德国巴伐利亚的“时光琥珀”，沉醉于两河交汇处的中世纪慢生活 - 最佳欧洲景点',
  description: '说实话，在踏上多瑙沃特古城那些被岁月磨得发亮的鹅卵石路之前，我完全没料到它会如此迷人。我的第一印象来自气味——那是一种混合了老木头、潮湿石墙、远处面包房飘来的黄油香，还有从多瑙河与莱希河方向吹来的、带着水汽的清风的复杂气息。这气味一下子就抓住了你，告诉你：这里的故事，是沉淀下来的，是有分量的。 视觉...',
}

export default function OldTownDonauwoerthPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '德国', href: '/destinations/germany' },
            { label: '多瑙沃特', href: '/destinations/germany' },
            { label: '多瑙沃特古城', href: '/attractions/old-town-donauwoerth' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`多瑙沃特古城・Old Town of Donauwörth・德国・多瑙沃特`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，在踏上多瑙沃特古城那些被岁月磨得发亮的鹅卵石路之前，我完全没料到它会如此迷人。我的第一印象来自气味——那是一种混合了老木头、潮湿石墙、远处面包房飘来的黄油香，还有从多瑙河与莱希河方向吹来的、带着水汽的清风的复杂气息。这气味一下子就抓住了你，告诉你：这里的故事，是沉淀下来的，是有分量的。
视觉上更是应接不暇。从现代火车站区走过来，仿佛穿过一道无形的时空门。突然间，你被包围在糖果色的世界里。那些沿着“帝国大街”（Reichsstraße）排列的房子，每栋都有着不同深浅的粉、黄、蓝、绿，高耸的三角形山墙争奇斗艳，外墙上绘着古老的纹章或寓言画。阳光透过狭窄的街巷，在石板路上切出锐利的光影。最妙的是，你总能从房子的间隙里，瞥见一抹流动的蓝色——那是多瑙河或莱希河，像两条温柔的臂弯，将这座古城轻轻环抱。
这里不是冰冷的博物馆。当地人骑着自行车叮铃铃地从你身边穿过，主妇们在小广场的喷泉边闲聊，咖啡馆把桌椅摆到街上，老人们就着一杯啤酒能坐一下午。古城的心脏“市政厅广场”（Rathausplatz）上，那座有着精美湿壁画的晚期哥特式市政厅，如今依然在履行职能。你能真切地感受到，历史并未被封存，它就活在这些日常的声响、气味和节奏里，活在水流不息的河畔。
最打动人心的，或许是那份从容不迫的“慢”。这里没有汹涌的旅游团人潮，你有大把的时间，可以靠在莱希河畔的栏杆上，看天鹅梳理羽毛，看云影在古老桥梁的倒影里缓缓移动。你会不自觉地放慢脚步，去数一数圣乔治教堂塔楼上的钟，去辨认老房子门楣上的铁艺招牌。多瑙沃特的魅力，不在于某个惊世骇俗的单体建筑，而在于整个城镇氛围所构成的、一个完整而和谐的中世纪梦境。它就像一块被遗忘在时间河流中的琥珀，保存了某个时代最鲜活的生活气息。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`说实话，在踏上多瑙沃特古城那些被岁月磨得发亮的鹅卵石路之前，我完全没料到它会如此迷人。我的第一印象来自气味——那是一种混合了老木头、潮湿石墙、远处面包房飘来的黄油香，还有从多瑙河与莱希河方向吹来的、带着水汽的清风的复杂气息。这气味一下子就抓住了你，告诉你：这里的故事，是沉淀下来的，是有分量的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`视觉上更是应接不暇。从现代火车站区走过来，仿佛穿过一道无形的时空门。突然间，你被包围在糖果色的世界里。那些沿着“帝国大街”（Reichsstraße）排列的房子，每栋都有着不同深浅的粉、黄、蓝、绿，高耸的三角形山墙争奇斗艳，外墙上绘着古老的纹章或寓言画。阳光透过狭窄的街巷，在石板路上切出锐利的光影。最妙的是，你总能从房子的间隙里，瞥见一抹流动的蓝色——那是多瑙河或莱希河，像两条温柔的臂弯，将这座古城轻轻环抱。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里不是冰冷的博物馆。当地人骑着自行车叮铃铃地从你身边穿过，主妇们在小广场的喷泉边闲聊，咖啡馆把桌椅摆到街上，老人们就着一杯啤酒能坐一下午。古城的心脏“市政厅广场”（Rathausplatz）上，那座有着精美湿壁画的晚期哥特式市政厅，如今依然在履行职能。你能真切地感受到，历史并未被封存，它就活在这些日常的声响、气味和节奏里，活在水流不息的河畔。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，或许是那份从容不迫的“慢”。这里没有汹涌的旅游团人潮，你有大把的时间，可以靠在莱希河畔的栏杆上，看天鹅梳理羽毛，看云影在古老桥梁的倒影里缓缓移动。你会不自觉地放慢脚步，去数一数圣乔治教堂塔楼上的钟，去辨认老房子门楣上的铁艺招牌。多瑙沃特的魅力，不在于某个惊世骇俗的单体建筑，而在于整个城镇氛围所构成的、一个完整而和谐的中世纪梦境。它就像一块被遗忘在时间河流中的琥珀，保存了某个时代最鲜活的生活气息。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`多瑙沃特古城`} />
                <InfoRow label="英文名称" value={`Old Town of Donauwörth`} />
                <InfoRow label="正式名称" value={`Old Town of Donauwörth`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`多瑙沃特`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座在中世纪因盐路贸易而繁荣起来的帝国自由城市，见证了神圣罗马帝国的辉煌与欧洲商路变迁。`} />
                <InfoRow label="建筑特色" value={`色彩斑斓的联排山墙民居、高耸的教堂尖塔与宁静的河道交织，构成一幅典型的南德中世纪城镇画卷。`} />
                <InfoRow label="建筑风格" value={`以晚期哥特式与文艺复兴风格为主，夹杂着巴洛克元素，展现了从15到18世纪的建筑艺术演变。`} />
                <InfoRow label="文化价值" value={`这里是感受巴伐利亚施瓦本地区历史脉动与市民文化的活态样本，其“帝国自由城市”的传统至今影响着当地的身份认同。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城公共区域全天24小时开放。城内各博物馆、教堂等独立景点开放时间不一：帝国博物馆（Reichsstraße 街道）通常周二至周日 10:00-17:00 开放；圣十字教堂（Heilig-Kreuz-Kirche）通常每日 8:00-18:00 开放；圣乔治教堂（St. Georg）塔楼登顶仅在夏季（4月-10月）的周末下午开放。建议出行前具体查询，冬季部分景点开放时间缩短。`} />
              <InfoRow label="门票价格" value={`进入古城及漫步街道免费。主要收费景点：帝国博物馆门票约5欧元，学生票3欧元；圣乔治教堂塔楼登顶费用约2.5欧元。部分教堂接受自愿捐赠。持巴伐利亚宫殿联票可免费进入帝国博物馆。`} />
              <InfoRow label="地址" value={`Rathausgasse 1, 86609 Donauwörth, Germany`} />
              <InfoRow label="交通方式" value={`从慕尼黑中央火车站（München Hauptbahnhof）出发，乘坐区域火车（RB或RE）前往多瑙沃特火车站（Donauwörth Bahnhof），车程约1小时20分钟至2小时，班次频繁，每小时至少1-2班。从火车站步行至古城核心区约需15-20分钟，沿途有清晰指示牌。若自驾，可将车停放在古城边缘的“Parkhaus am Tanzhaus”停车场，步行进入老城。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲多瑙沃特的故事，就不得不提两条河。多瑙河与莱希河在这里交汇，这个得天独厚的地理位置，注定它从罗马时代起就是一个重要的渡口和据点。但真正让它登上历史舞台的，是中世纪那条大名鼎鼎的“盐路”。来自巴伐利亚和奥地利盐矿的珍贵白色晶体，被装载在沉重的货车上，沿着贸易路线向北运输，而多瑙沃特，正是这条生命线上的关键一站。商队在这里歇脚、交易、补充给养，金钱和货物如河水般流淌，财富也随之积累。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1276年，是一个关键年份。神圣罗马帝国皇帝鲁道夫一世授予多瑙沃特“帝国自由城市”的地位。这意味着它直接效忠于皇帝，而不受任何地方公爵或主教的管辖，拥有高度的自治权，可以自行征税、司法和铸币。你可以想象，当时的市民们是何等自豪！这种自由精神，塑造了城市独特的性格。财富阶层——那些成功的商人、船主和行会首领——开始竞相建造华美的住宅，我们今天看到的那些色彩斑斓的山墙民居，很多都源于那个自信蓬勃的时代。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，自由也意味着要自己面对命运的惊涛骇浪。这座城市的历史并非一帆风顺的田园诗。1607年，一场因宗教冲突引发的“多瑙沃特之辱”事件，成为了引爆欧洲三十年战争的导火索之一。这场席卷欧陆的惨烈战争，给城市带来了深重灾难。接着，拿破仑战争的风暴将它卷入了巴伐利亚王国的版图，帝国自由城市的荣光就此落幕。战争的创伤刻在了石头上，你可以在一些老建筑的墙面上，看到后来修补的痕迹，那是历史留下的疤痕。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但多瑙沃特有着顽强的生命力。十九世纪，随着铁路的到来，它迎来了新的角色。古城外建起了火车站和工业区，但令人欣慰的是，老城的核心区域奇迹般地未受现代工业建设的破坏。更重要的是，在第二次世界大战的最后阶段，当德国许多历史名城在轰炸中化为废墟时，多瑙沃特古城却因为其相对次要的战略地位（或者说，一点点幸运），得以基本完好地保存下来。这不能不说是历史的又一重眷顾。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战后的德国人，格外珍惜这些幸存的古老遗产。几十年来，当地居民和文物保护部门对古城进行了精心的、修旧如旧的维护。他们修复的不仅是砖石木瓦，更是一种历史记忆和家园认同。今天，当你漫步其中，你所体验的，是穿越数百年风雨却依然生机勃勃的市民文化，是盐路商队的驼铃声、帝国议会的辩论声、战争与和平的叹息声，层层叠叠，最终化作了河边咖啡馆里轻松的谈笑与教堂沉稳的钟鸣。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的多瑙沃特古城深度游，建议安排至少一整个下午加一个上午。最佳方式是前一天下午抵达，入住古城或河畔的酒店，趁着黄昏的“魔法时刻”开始第一次探索。这时游客稀少，光线金黄柔和，是拍照和感受古城宁静氛围的绝佳时机。第二天上午，可以从容地系统参观主要室内景点，如博物馆和教堂。这样的节奏让你既能捕捉到古城最美的光影，又能深入了解其历史内涵，而不至于匆忙。整体游览节奏宜慢，核心是“漫步”与“发现”，给自己迷路在小巷里的机会。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周日和法定假日，几乎所有商店和部分餐厅会关门，博物馆也可能闭馆，请尽量避免选择这天进行深度文化游览。穿着绝对舒适防滑的平底鞋，古城内全是凹凸不平的鹅卵石路面，高跟鞋是灾难。在主广场附近的餐厅用餐时，留意菜单是否标明“Touristenmenü”（游客套餐），这类套餐可能价格偏高且品质普通，多走两步钻进小巷里的家庭餐馆往往更有惊喜。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从古城地标“坦茨豪斯”（中世纪舞厅）出发，沿着石板路慢慢踱进迷宫般的彩色巷弄，让直觉引领你的脚步。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在“谷物市场”（Kornmarkt）小广场停下，坐在长椅上观察本地人的生活，听喷泉的水声与远处教堂钟声交织。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要登上圣乔治教堂的塔楼（如果开放），在狭窄的旋转石阶攀爬后，收获将整个古城红瓦屋顶与两条蜿蜒河流尽收眼底的震撼全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着“帝国大街”（Reichsstraße）漫步，细细欣赏每一栋山墙民居立面上精美的湿壁画、凸窗和古老的铁艺招牌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到莱希河畔，跨过古老的“木桥”（Holzbrücke），从对岸回望古城天际线，感受水流带来的清风与完全不同的视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探访市政厅广场，仰望那座布满壁画、像一本石头故事书的晚期哥特式市政厅，想象当年帝国自由城市议会的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在莱希河与多瑙河交汇处的河岸公园散步，看两条颜色略有差异的河水如何缠绵交融，这里是理解古城地理根源的所在。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分，找一家开在老房子里的传统酒馆（Gasthof），点一份施瓦本地区特色饺子（Maultaschen）和一杯本地啤酒，结束完美的一天。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`莱希河对岸仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，站在莱希河“木桥”西侧的河岸步道上，使用广角镜头，可以将古老的桥梁、色彩斑斓的房屋立面、圣乔治教堂的尖塔和它们在河水中的完美倒影一同纳入画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣乔治教堂塔楼鸟瞰`}</h4>
                  <p className="text-sm text-gray-700">{`登上塔楼后，在瞭望口的东南角，下午的阳光能均匀地洒在古城红瓦屋顶上，拍摄时注意将蜿蜒的多瑙河与莱希河作为视觉引导线，增强画面的纵深感和故事性。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`帝国大街光影走廊`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗日子的正午前后，阳光直射进狭窄的帝国大街，利用两侧高耸的山墙民居形成的天然框架进行构图，捕捉行人走过被光影切割的石板路的瞬间，充满戏剧感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`河畔屋影与天鹅`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，在莱希河畔靠近“磨坊”的地方，低角度拍摄，将悠闲的天鹅或水鸟作为前景，中景是河对岸古老房屋在水中的斑斓倒影，背景是朦胧的教堂尖塔，营造宁静诗意的氛围。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`小巷转角发现之美`}</h4>
                  <p className="text-sm text-gray-700">{`无需特定时间，在如“Hafnerstraße”这样的小巷里，寻找爬满藤蔓的墙角、古老的壁灯和彩绘的百叶窗，拍摄细节特写，这些角落藏着古城最生活化的美感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`建议携带一支广角镜头（拍摄街道全景和河岸景色）和一支大光圈定焦镜头（用于捕捉建筑细节和室内弱光环境）。尊重当地居民隐私，拍摄民居内部或居民特写前，请务必微笑并征得同意。多瑙河地区容易起晨雾，如果遇到，千万不要失望，这正是拍摄如梦似幻、宛若仙境的中古城景色的绝佳机会。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河畔历史客栈`}</h4>
                  <p className="text-sm text-blue-800">{`直接坐落在莱希河畔的老建筑里，房间的木头横梁诉说着百年历史，早晨在临河的小阳台上享用早餐，看天鹅从窗前游过，是融入古城生活的首选。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`古城中心精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`由一栋16世纪的商人宅邸改造而成，内部是现代化的舒适设计，却保留了古老的石墙和拱顶，位置极佳，出门就是最热闹的广场与小巷。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`家庭式施瓦本旅舍`}</h4>
                  <p className="text-sm text-yellow-800">{`位于古城安静一隅，由家族世代经营，房东老奶奶会为你准备丰盛的巴伐利亚式早餐，并提供只有当地人才知道的散步小径推荐，体验家一般的温暖。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`城外葡萄园度假屋`}</h4>
                  <p className="text-sm text-purple-800">{`如果自驾，可以选择古城附近山丘上的农庄或葡萄酒庄住宿，开车进城仅需十分钟，却能享受绝对的宁静，在夜空下俯瞰灯火阑珊的古城全貌，别有风味。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古城内的住宿通常不设大型停车场，需使用附近的公共停车场，预订时务必确认停车安排和额外费用。夏季（6-8月）和圣诞节市场期间（11月底-12月23日）是旺季，务必提前数月预订。选择住在古城内，夜晚和清晨的体验是无价的，你能独享一座空灵静谧的中世纪之城。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开多瑙沃特好些天了，但我的思绪还常常飘回那里。它带给我的，不是那种看过就忘的风景明信片式的美感，而是一种关于“时间”的深刻触动。在这个一切都在加速狂奔的世界里，多瑙沃特固执地保持着另一种节奏。它的时钟，似乎还按照河水流淌的速度、按照教堂钟声的间隔、按照面包在传统石炉里膨胀的韵律在走动。在这里，你会不由自主地反思，我们所谓的“进步”，是否也让我们遗失了一些宝贵的东西——比如那种与土地、与历史、与邻里深深联结的归属感，以及一份不急于被填满的从容。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位热爱深度游的旅人，都应该把多瑙沃特列入你的清单。不仅是为了看那些漂亮的房子和河流，更是为了来体验一种不同的可能性，一种历史并未远逝，而是温柔地包裹着当下生活的证明。它像一位沉稳的老者，不炫耀，不喧哗，只是静静地坐在两河交汇处，向你展示着：真正的富有，或许在于沉淀下来的故事，在于历经风雨后依然鲜艳的色彩，在于日复一日流淌不息的平凡而珍贵的日常。在这里走一遭，你的心会像被河水洗涤过一样，变得安静而丰盈。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
