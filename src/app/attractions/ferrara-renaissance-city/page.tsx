import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '费拉拉 Ferrara｜在自行车轮上慢品一座被时光遗忘的文艺复兴“理想城” - 最佳欧洲景点',
  description: '如果你和我一样，是骑着一辆叮当作响的老式自行车进入费拉拉的，那你一定会懂我接下来说的那种感觉。没有罗马的喧嚣，没有佛罗伦萨的拥挤，车轮碾过被岁月打磨得光滑的鹅卵石，声音清脆又柔和。第一眼望去，是无穷无尽的、温暖的赭红色——那是本地砖石在阳光下独有的色泽，从巍峨的埃斯特城堡，到街边不起眼的民居外墙，整...',
}

export default function FerraraRenaissanceCityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '费拉拉文艺复兴城市', href: '/attractions/ferrara-renaissance-city' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`费拉拉文艺复兴城市・Ferrara・意大利・费拉拉`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`如果你和我一样，是骑着一辆叮当作响的老式自行车进入费拉拉的，那你一定会懂我接下来说的那种感觉。没有罗马的喧嚣，没有佛罗伦萨的拥挤，车轮碾过被岁月打磨得光滑的鹅卵石，声音清脆又柔和。第一眼望去，是无穷无尽的、温暖的赭红色——那是本地砖石在阳光下独有的色泽，从巍峨的埃斯特城堡，到街边不起眼的民居外墙，整个城市仿佛被罩在一个巨大而温柔的滤镜里。空气中有股好闻的味道，是清晨咖啡香混合着旧书卷气，还有从某户人家窗台飘来的淡淡天竺葵花香。
这里的街道宽得不像话，尤其是那条著名的“九月二十日大街”，你简直可以在路中间跳华尔兹。这就是文艺复兴时期“理想城市”的遗产——埃斯特家族请来天才建筑师，硬是在中世纪杂乱无章的肌理上，划出了笔直、开阔、充满几何美感的轴线。奇妙的是，你只要拐一个弯，就可能钻进一条只有一人宽的幽深小巷，两旁是斑驳的砖墙，头顶是一线天光。这种开阔与幽秘、规整与随意的对比，是费拉拉最迷人的韵律。
最打动我的，是这座城市活生生的呼吸感。它不是一座博物馆式的化石。清晨，主座教堂广场旁的老咖啡馆里，银发的老先生们拿着报纸争论不休；中午，学生们骑着车从大学里涌出，笑声洒满街道；傍晚，全城的人似乎都涌上了环绕古城的巨大城墙——那不是冰冷的遗迹，而是一个长达九公里的空中公园。人们在上面跑步、遛狗、约会、看日落。这座建于15-16世纪的防御工事，如今成了费拉拉人最日常的健身房和客厅。这种历史与生活的无缝对接，让费拉拉有了温度。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果你和我一样，是骑着一辆叮当作响的老式自行车进入费拉拉的，那你一定会懂我接下来说的那种感觉。没有罗马的喧嚣，没有佛罗伦萨的拥挤，车轮碾过被岁月打磨得光滑的鹅卵石，声音清脆又柔和。第一眼望去，是无穷无尽的、温暖的赭红色——那是本地砖石在阳光下独有的色泽，从巍峨的埃斯特城堡，到街边不起眼的民居外墙，整个城市仿佛被罩在一个巨大而温柔的滤镜里。空气中有股好闻的味道，是清晨咖啡香混合着旧书卷气，还有从某户人家窗台飘来的淡淡天竺葵花香。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里的街道宽得不像话，尤其是那条著名的“九月二十日大街”，你简直可以在路中间跳华尔兹。这就是文艺复兴时期“理想城市”的遗产——埃斯特家族请来天才建筑师，硬是在中世纪杂乱无章的肌理上，划出了笔直、开阔、充满几何美感的轴线。奇妙的是，你只要拐一个弯，就可能钻进一条只有一人宽的幽深小巷，两旁是斑驳的砖墙，头顶是一线天光。这种开阔与幽秘、规整与随意的对比，是费拉拉最迷人的韵律。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动我的，是这座城市活生生的呼吸感。它不是一座博物馆式的化石。清晨，主座教堂广场旁的老咖啡馆里，银发的老先生们拿着报纸争论不休；中午，学生们骑着车从大学里涌出，笑声洒满街道；傍晚，全城的人似乎都涌上了环绕古城的巨大城墙——那不是冰冷的遗迹，而是一个长达九公里的空中公园。人们在上面跑步、遛狗、约会、看日落。这座建于15-16世纪的防御工事，如今成了费拉拉人最日常的健身房和客厅。这种历史与生活的无缝对接，让费拉拉有了温度。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`费拉拉文艺复兴城市`} />
                <InfoRow label="英文名称" value={`Ferrara`} />
                <InfoRow label="正式名称" value={`Ferrara`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`费拉拉`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`埃斯特家族统治下的“理想城市”典范，其文艺复兴时期的城市规划直接影响后世的都市设计。`} />
                <InfoRow label="建筑特色" value={`宏伟的红砖建筑群、令人惊叹的宽阔笔直街道与隐秘的中世纪小巷交织，形成了独特的城市肌理。`} />
                <InfoRow label="建筑风格" value={`文艺复兴早期风格与中世纪哥特风格的完美融合，尤以“钻石宫”立面和埃斯特城堡的堡垒式结构为代表。`} />
                <InfoRow label="文化价值" value={`一座活着的、未被过度旅游开发的文艺复兴城市，其城市布局和生活方式依然保持着几个世纪前的宁静与优雅。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城市本身全天开放。主要景点如埃斯特城堡、主教座堂等通常开放时间为上午9:00至下午6:00，部分博物馆周一闭馆。圣诞节及元旦当天大部分室内景点关闭。建议出行前在官网查询具体时间，夏季可能延长开放。`} />
              <InfoRow label="门票价格" value={`探索古城街道和城墙完全免费。进入主要景点需购票：埃斯特城堡联票约12欧元，含多个博物馆的通票约15欧元。欧盟学生及26岁以下青年有优惠，65岁以上老人也可享受折扣。部分教堂免费但鼓励捐款。每月第一个周日许多国立博物馆免费。`} />
              <InfoRow label="地址" value={`Piazza del Municipio, 1, 44121 Ferrara FE, Italy`} />
              <InfoRow label="交通方式" value={`从最近的博洛尼亚古列尔莫·马可尼机场出发，最便捷的方式是乘坐机场巴士到博洛尼亚中央火车站，然后转乘火车。从博洛尼亚到费拉拉的火车班次极其频繁，约每20-30分钟一班，车程仅25-30分钟，票价约5欧元。从费拉拉火车站步行至古城中心仅需15分钟，你也可以在站前租一辆自行车，这才是打开这座城市的正确方式。如果自驾，请注意古城核心区是交通限制区，需将车停在城墙外的停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`费拉拉的故事，是一部由一个野心勃勃的家族书写的传奇。一切要从埃斯特家族说起。这个家族在13世纪成为费拉拉的领主，但他们并不满足于仅仅统治一座城市。在精明强干的尼科洛三世和他的儿子莱奥内洛的时代，费拉拉开始吸引整个意大利半岛的学者、诗人和艺术家。这里成了早期文艺复兴一个耀眼却常被后世忽略的灯塔。但真正的转折点，发生在博尔索·埃斯特和埃尔科莱一世·埃斯特统治时期。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`博尔索公爵是个极有品味又热爱排场的人。他做了一件疯狂的事：聘请了当时最伟大的画家之一，弗朗切斯科·德尔·科萨，用一系列令人瞠目结舌的湿壁画，覆盖了他宫殿（现为斯齐法诺亚宫）的整个大厅。壁画描绘了月份、星座、神话与宫廷生活，绚烂夺目，至今仍是意大利文艺复兴艺术的巅峰之作之一。而他的兄弟埃尔科莱一世，则是个更有远见的城市规划者。1492年，没错，就是哥伦布发现新大陆的那一年，他启动了一项雄心勃勃的工程——扩建费拉拉。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这就是著名的“埃尔科莱式扩建”。他请来建筑师比亚焦·罗塞蒂，像在一张白纸上作画一样，规划了城市的新区。笔直宽阔的街道、宏伟的广场、对称的布局，这一切都基于一种全新的、以人为本的理念。罗塞蒂设计的“钻石宫”，其外立面布满了近万块切割成钻石棱面状的石灰华石，在阳光下闪烁着不可思议的光芒，仿佛一座巨大的宝石宫殿，成为了文艺复兴建筑史上最奇特的瑰宝之一。这一时期，费拉拉云集了像诗人阿里奥斯托（《疯狂的奥兰多》在此写成）、画家曼泰尼亚等巨匠，文化与艺术的繁荣达到了顶峰。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，盛极而衰是历史的常律。1598年，由于缺乏合法男性继承人，埃斯特家族被迫将费拉拉交还给教皇国。这个决定对城市来说是毁灭性的。教皇的统治僵化而保守，曾经活跃的思想被钳制，繁华的宫廷迅速衰落，许多贵族和艺术家纷纷离开。费拉拉仿佛被按下了暂停键，从此沉睡。经济停滞，发展缓慢，它渐渐从文艺复兴的前沿阵地，变成了一个宁静的省级城镇。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`塞翁失马，焉知非福。正是这种“被遗忘”，意外地保护了费拉拉。它没有经历后来工业化浪潮的粗暴改造，也没有因为过度旅游而面目全非。埃尔科莱一世时期规划的笔直街道、罗塞蒂设计的那些美丽宫殿、环绕城市的巨大砖砌城墙，都近乎完整地保存了下来。直到20世纪，当人们重新审视文艺复兴时，才惊觉这里保存着一座“活化石”。1995年，费拉拉被联合国教科文组织列为世界遗产，理由正是它“保留了完好的文艺复兴城市肌理，并展示了早期城市规划理念对后世的影响”。它从沉睡中醒来，却依然优雅从容。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味费拉拉，你需要一整天，外加一辆自行车。我强烈建议你前一晚抵达，第二天清晨就开始探索。整个路线节奏舒缓，以骑行和漫步结合。上午聚焦于古城中心震撼人心的地标，感受埃斯特家族的权势；午后则深入幽静的街区和小巷，体验本地生活；傍晚一定要留给壮丽的城墙，这是高潮也是总结。这样的安排能让你避开主要景点的少量人潮，同时在不同光线下欣赏城市变幻的美。总耗时约8-9小时，包括悠闲的午餐和咖啡时间。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`大多数博物馆和宫殿在周一关闭，务必避开这天进行深度文化游。
进入主教座堂内部有着装要求，需遮盖肩膀和膝盖，短裤和吊带裙可能会被拒绝入内。
费拉拉道路多为鹅卵石，穿一双舒适柔软的平底鞋或运动鞋至关重要，高跟鞋在这里寸步难行。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从雄踞水中的埃斯特城堡开始，穿过吊桥进入内部，在布满壁画的房间和开阔的屋顶平台感受统治者的威仪与视野。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步行至几步之遥的主教座堂广场，仰望那座融合了罗马、哥特、文艺复兴三种风格的奇特大理石立面，然后钻进旁边热闹的早市。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`骑上自行车，沿着宽阔笔直的“九月二十日大街”向北滑行，感受文艺复兴城市规划的开阔感，直到被“钻石宫”那面闪闪发光的宝石立面惊艳得停下。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拐入钻石宫西侧的静谧街区，这里是犹太区，在错综复杂的小巷和安静的庭院间穿行，寻找那些记录着古老社区历史的铭牌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从犹太区向西骑行几分钟，抵达巨大的斯齐法诺亚宫，在“月之厅”花上一小时，沉浸在描绘星空与宫廷生活的绝世湿壁画前。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`将自行车靠墙放好，爬上附近一段保存完好的文艺复兴城墙，沿着这条“空中绿色长廊”散步或骑行，从另一种高度俯瞰红瓦屋顶的海洋。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前半小时，找到城墙西南角靠近圣乔瓦尼堡垒的段落，这里是观看夕阳将整个城市染成金红色的最佳剧场。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐前回到市中心，在加富尔广场找一家露天餐馆坐下，点一杯本地出产的博斯克酒，看着广场上的灯光渐次亮起。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`埃斯特城堡护城河倒影`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，站在城堡东侧的吊桥边，利用平静的水面拍摄城堡与天空的完美对称倒影，画面宁静而富有历史感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“钻石宫”立面特写`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点的斜阳是魔法时刻，阳光以低角度照射在钻石棱面的石头上，能拍出每块石头都在燃烧般的璀璨质感和深邃阴影。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`犹太区小巷光影`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，当阳光垂直射入狭窄的小巷，会在古老的砖石地面上投下锐利而迷人的光影分割线，构图时捕捉一个骑车或行走的当地人背影作为点睛之笔。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城墙日落全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，在城墙西南段（近Porta San Giovanni），使用长焦镜头压缩空间，将远处的主教座堂钟楼、成片的红瓦屋顶和绚烂的天空压缩在同一画面中。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`斯齐法诺亚宫壁画细节`}</h4>
                  <p className="text-sm text-gray-700">{`室内拍摄需关闭闪光灯，提高ISO，对准“月之厅”壁画中人物精美的服饰或星空图案的特写，能传达出令人震撼的艺术细节。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`多云的天气其实是拍摄费拉拉红砖建筑的福音，均匀的散射光能更好地呈现建筑纹理和色彩，避免正午的强烈顶光。`}</li>
                <li>• {`拍摄居民或商铺内部前，请务必先微笑并征得同意，这里的人们友善但注重隐私。`}</li>
                <li>• {`尝试用慢速快门（如1/15秒）跟拍一辆在鹅卵石上骑行的自行车，能拍出动态模糊的背景与清晰主体的结合，非常有故事感。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`古城中心温馨公寓`}</h4>
                  <p className="text-sm text-blue-800">{`住在经过翻修的历史建筑顶层，拥有一个可以俯瞰错落红瓦屋顶和教堂钟楼的小露台，体验一把“本地贵族”的视野。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`文艺复兴宫殿改造的精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`由一座16世纪的贵族府邸精心修复而成，保留了原始的拱顶、壁画和壁炉，服务生会向你讲述每个角落的故事。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`城墙内的宁静民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`位于安静的犹太区，由一户热情的艺术家庭经营，早晨会为你准备丰盛的自制艾米利亚早餐，包括当地特色的南瓜馅意式馄饨。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`郊外农庄体验`}</h4>
                  <p className="text-sm text-purple-800">{`如果你有车，不妨住在城外几公里处的典型艾米利亚农庄，被梨树和葡萄园环绕，晚上能听到虫鸣，品尝农场自产的奶酪和葡萄酒。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`费拉拉治安非常好，老城中心夜晚也很宁静安全，可以放心散步。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`旺季（春季和初秋）住宿紧俏，尤其是周末，务必提前数周预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`许多小型民宿不设24小时前台，预订时请确认好入住时间并保持沟通。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开费拉拉好些日子了，我脑海里最清晰的画面，不是某座具体的宫殿，而是黄昏时城墙上那些跑步的身影，被夕阳拉得很长。那一刻我突然明白，费拉拉最珍贵的遗产，不是石头，不是壁画，而是一种活法。它证明了，伟大的历史遗产不必被供奉在玻璃柜后，它可以是一条每天跑步的跑道，一条骑车送孩子上学的巷子，一个和朋友傍晚碰头的广场。历史在这里没有死去，它只是融入了呼吸的节奏，变成了生活本身。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求效率、追求“网红打卡”的旅行时代，费拉拉像一位沉默而睿智的长者，它教会我们“慢”的哲学。它不需要你匆匆忙忙赶景点，它邀请你租一辆自行车，漫无目的地迷失在它红砖的迷宫里，在城墙上看一次完整的日落，在广场上发一场无关紧要的呆。它告诉我们，旅行的深度，不在于你收集了多少个著名地标，而在于你是否真正进入了一个地方的时光与呼吸。如果你厌倦了人潮，渴望一场与文艺复兴灵魂的真切对话，那么，请来费拉拉。这里没有喧嚣的答案，只有宁静的、等着你用车轮和脚步去丈量的问题。它是一首写在砖石上的、关于理想生活的长诗，至今仍在被轻轻吟诵。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/venaferro-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    韦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">韦纳夫罗古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Venaferro Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bovino-historic-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博维诺古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bovino</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/spoleto-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯波莱托古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Spoleto</p>
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
