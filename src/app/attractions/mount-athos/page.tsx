import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿索斯山 Mount Athos｜仅限男性的神秘国度，悬崖上的千年东正教修道院群 - 最佳欧洲景点',
  description: '当你乘坐那艘略显陈旧的小渡轮，缓缓离开乌拉努波利斯喧嚣的码头，朝着爱琴海碧蓝的深处驶去时，一种奇特的剥离感便开始蔓延。手机信号逐渐消失，现代世界的嘈杂被海浪声和引擎单调的轰鸣取代。然后，在遥远的海平面上，一道青灰色的、林木茂密的巨大山脊轮廓浮现出来，那就是圣山——阿索斯。随着船只靠近，你能清晰地看见...',
}

export default function MountAthosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '阿索斯山', href: '/attractions/mount-athos' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿索斯山・Mount Athos・希腊・中马其顿`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你乘坐那艘略显陈旧的小渡轮，缓缓离开乌拉努波利斯喧嚣的码头，朝着爱琴海碧蓝的深处驶去时，一种奇特的剥离感便开始蔓延。手机信号逐渐消失，现代世界的嘈杂被海浪声和引擎单调的轰鸣取代。然后，在遥远的海平面上，一道青灰色的、林木茂密的巨大山脊轮廓浮现出来，那就是圣山——阿索斯。随着船只靠近，你能清晰地看见，在几乎垂直的悬崖峭壁之上，镶嵌着一座座由深色石材筑成的庞大建筑群，它们有着红色的圆顶、高耸的塔楼和坚固的围墙，不像普通的修道院，更像神话中巨人建造的堡垒，沉默而威严地凝视着海洋。空气里是纯粹的海盐味，混合着远处山林飘来的松柏与野草的气息。
踏上达夫尼那个简单到几乎原始的小港口，时间仿佛被调慢了不止一个刻度。这里没有汽车喇叭，没有商业广告，只有几个留着大胡子的修士安静地引导着访客，他们穿着黑色的长袍，眼神平静而深邃。道路是原始的土路或石板路，连接着隐没在栗子树和橡树林中的各个修道院。你听到的声音是多样的：回荡在山谷间的教堂钟声，深沉而悠远；修士们在礼拜时吟唱的拜占庭圣歌，那是一种没有乐器伴奏、纯粹由人声发出的复调旋律，古老、神秘，直击灵魂；风吹过森林的沙沙声，以及自己踏在古老石阶上的脚步声。光线透过茂密的树冠，在布满青苔的小径上投下斑驳晃动的影子。
阿索斯山不是一个“景点”，它是一个独立运转了千年的微型国度，一个只属于男性（且主要是寻求与神对话的男性）的平行宇宙。这里的核心魅力绝非视觉的奇观，而是一种极致的沉浸式体验——体验一种近乎停滞的时间，一种高度自律的简朴生活，一种将精神世界置于物质世界之上的生存状态。修士们自己种菜、酿酒、烤面包、修缮房屋、抄写古籍。拜访者在这里不再是消费者，而是短暂融入其节奏的参与者。最动人的时刻往往发生在傍晚：在某个千年历史的修道院食堂，与修士们和朝圣者一同沉默地用餐，只有一位修士在诵读圣人的生平。粗糙的木桌，简单的豆汤和黑面包，烛光在古老的壁画上跳跃，那一刻，你会真切地感受到什么是“神圣的日常”。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你乘坐那艘略显陈旧的小渡轮，缓缓离开乌拉努波利斯喧嚣的码头，朝着爱琴海碧蓝的深处驶去时，一种奇特的剥离感便开始蔓延。手机信号逐渐消失，现代世界的嘈杂被海浪声和引擎单调的轰鸣取代。然后，在遥远的海平面上，一道青灰色的、林木茂密的巨大山脊轮廓浮现出来，那就是圣山——阿索斯。随着船只靠近，你能清晰地看见，在几乎垂直的悬崖峭壁之上，镶嵌着一座座由深色石材筑成的庞大建筑群，它们有着红色的圆顶、高耸的塔楼和坚固的围墙，不像普通的修道院，更像神话中巨人建造的堡垒，沉默而威严地凝视着海洋。空气里是纯粹的海盐味，混合着远处山林飘来的松柏与野草的气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`踏上达夫尼那个简单到几乎原始的小港口，时间仿佛被调慢了不止一个刻度。这里没有汽车喇叭，没有商业广告，只有几个留着大胡子的修士安静地引导着访客，他们穿着黑色的长袍，眼神平静而深邃。道路是原始的土路或石板路，连接着隐没在栗子树和橡树林中的各个修道院。你听到的声音是多样的：回荡在山谷间的教堂钟声，深沉而悠远；修士们在礼拜时吟唱的拜占庭圣歌，那是一种没有乐器伴奏、纯粹由人声发出的复调旋律，古老、神秘，直击灵魂；风吹过森林的沙沙声，以及自己踏在古老石阶上的脚步声。光线透过茂密的树冠，在布满青苔的小径上投下斑驳晃动的影子。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`阿索斯山不是一个“景点”，它是一个独立运转了千年的微型国度，一个只属于男性（且主要是寻求与神对话的男性）的平行宇宙。这里的核心魅力绝非视觉的奇观，而是一种极致的沉浸式体验——体验一种近乎停滞的时间，一种高度自律的简朴生活，一种将精神世界置于物质世界之上的生存状态。修士们自己种菜、酿酒、烤面包、修缮房屋、抄写古籍。拜访者在这里不再是消费者，而是短暂融入其节奏的参与者。最动人的时刻往往发生在傍晚：在某个千年历史的修道院食堂，与修士们和朝圣者一同沉默地用餐，只有一位修士在诵读圣人的生平。粗糙的木桌，简单的豆汤和黑面包，烛光在古老的壁画上跳跃，那一刻，你会真切地感受到什么是“神圣的日常”。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿索斯山`} />
                <InfoRow label="英文名称" value={`Mount Athos`} />
                <InfoRow label="正式名称" value={`Mount Athos`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`中马其顿`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`自1054年以来，它一直是东正教世界的精神中心和自治修道院共和国，享有独特的政教合一自治地位。`} />
                <InfoRow label="建筑特色" value={`数十座宏伟的修道院如同坚固的城堡，矗立在半岛陡峭的悬崖与密林之中，多数围绕一个中央教堂庭院（Kyriakon）建造，包含教堂、食堂、图书馆、修士居所和防御塔楼。`} />
                <InfoRow label="建筑风格" value={`以拜占庭风格为绝对主导，融合后拜占庭、希腊民间及少量受十字军影响的防御建筑元素，形成独特的“阿索斯山风格”。`} />
                <InfoRow label="文化价值" value={`一个活着的拜占庭博物馆，保留了千年未断的禁欲主义灵修传统、古老的礼仪和手工艺，是人类非物质文化的孤岛。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年开放，但访问受到严格限制。非东正教男性访客每日仅限10人，且需提前数月申请入境许可（“diamonitirion”）。修道院有严格的日常作息，对访客开放参观的时间通常为日出后至日落前，具体时间各修道院略有不同，并严格遵守宗教节日和斋戒期安排。每年女性（包括所有雌性动物）均被禁止进入半岛。`} />
              <InfoRow label="门票价格" value={`无传统意义上的门票。但获得入境许可需要支付一笔行政费用，约25欧元。此外，在修道院住宿（如获批准）通常需要自愿捐赠，金额不拘，用于支持修道院的运营。从乌拉努波利斯（Ouranoupoli）乘船前往达夫尼（Dafni）港口的船票需另购，单程约10欧元。`} />
              <InfoRow label="地址" value={`Agio Oros, 63086, Greece`} />
              <InfoRow label="交通方式" value={`首先需抵达希腊北部城市塞萨洛尼基（Thessaloniki）。从塞萨洛尼基机场或市区汽车站，乘坐KTEL巴士前往滨海小镇乌拉努波利斯（Ouranoupoli），车程约2.5-3小时，班次每天数班。在乌拉努波利斯，你必须向阿索斯山 Pilgrims’ Bureau 出示你的入境许可，然后乘坐每日早晨约9:30出发的渡轮前往阿索斯山唯一的港口达夫尼（Dafni），航行约2小时。半岛内部交通依靠从达夫尼港出发的旧式巴士，路线有限，连接主要修道院，更多时候需要徒步。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`关于阿索斯山的神圣起源，流传最广的传说是与圣母玛利亚有关。据说在公元49年，圣母玛利亚乘坐的船只在前往塞浦路斯的途中遭遇风暴，漂流到了阿索斯半岛。她上岸后，被这里惊人的美丽与宁静所震撼，于是祈愿这里成为她的花园和后花园，并得到了神的应许。从此，这片土地被宣告为“圣母的领地”，其他女性便被禁止踏入，以保持其纯粹的奉献氛围。这个美丽的传说为半岛的性别禁令蒙上了一层神圣的面纱，也奠定了其作为东正教最神圣场所的基石。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的修道院定居始于公元9世纪后期。一位名叫圣亚他那修（St. Athanasius the Athonite）的修士，在拜占庭帝国皇帝尼基弗鲁斯二世·福卡斯的支持和资助下，于962年在半岛的南端建立了第一座有组织的大型修道院——大劳拉修道院（Great Lavra）。这不仅仅是一座建筑，它确立了一套完整的共同生活（coenobitic）制度，成为后来所有阿索斯修道院的蓝本。圣亚他那修堪称阿索斯的“总设计师”，他的到来标志着半岛从零星隐士的隐居地，转变为一个制度化的修道院共和国。拜占庭帝国的黄金时代为阿索斯带来了滚滚财源和皇家特权，一座又一座宏伟的修道院如雨后春笋般建立起来，吸引了来自保加利亚、塞尔维亚、格鲁吉亚、俄罗斯等整个东正教世界的修士。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，神圣并不意味着平静。阿索斯山的历史充满了劫难。1204年，第四次十字军东征攻陷君士坦丁堡，法兰克骑士们也没放过这片“富得流油”的圣地，许多修道院遭到洗劫。14世纪，它一度受到塞尔维亚帝国的保护，获得了新的捐赠。但更大的危机来自奥斯曼土耳其帝国的征服。1453年君士坦丁堡陷落后，阿索斯山的修士们以惊人的政治智慧与新的穆斯林统治者周旋。他们向苏丹缴纳巨额贡赋，换来了惊人的自治权——保留其宗教传统、内部管理和大部分财产。在奥斯曼统治的近四百年里，阿索斯山成了东正教信仰和希腊文化的“诺亚方舟”，许多在帝国其他地区被压制或流失的文化遗产在这里得以保存和延续。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`近代以来，它经历了火灾、衰落、修士减少的危机，但也迎来了复兴。19世纪，俄罗斯的虔诚信徒提供了大量捐助，使得一些修道院重现辉煌。两次世界大战和其后的希腊内战都给半岛带来了冲击。但真正让其特质凝固下来的，是1924年颁布的《阿索斯山宪章》，它正式确立了半岛作为“修道院共和国”的自治地位，直属希腊国家管理，并由20座主要修道院的代表组成神圣社区（Holy Community）进行治理。今天，当你行走其间，看到的不仅是拜占庭的遗产，更是保加利亚、塞尔维亚、俄罗斯等国家修道院的文化印记，它们共同组成了这个与世隔绝又连接着整个东正教世界的独特拼图。它像一块活化石，并非死气沉沉，而是在严格的戒律下，缓慢而坚定地呼吸着。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`深度体验阿索斯山至少需要两天一夜，最好安排三天两夜。建议在获得许可后，乘坐最早一班从乌拉努波利斯出发的渡轮（约9:30），于中午前抵达达夫尼港。第一天下午集中拜访港口附近或交通较便利的2-3座修道院，并在其中一座预定过夜。第二天全天用于徒步和拜访更深山或更偏远的修道院，体验不同的建筑风格和氛围，傍晚前返回达夫尼附近住宿。第三天上午可进行最后的参观或静思，乘坐午后的渡轮离开。这样的节奏避免了匆忙，让你有时间参与修道院的日常礼仪（如晚祷和晨祷），并与修士进行简单交流，真正感受这里的时空节奏。记住，这里的游览不是“打卡”，而是“朝圣”与“观察”。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必提前至少半年通过你所在国家的希腊领事馆或专业的朝圣机构申请入境许可，自行申请流程复杂且成功率低。严格遵守所有规定：着装庄重（长裤、有袖上衣），内部多数区域严禁拍照，保持绝对安静，禁止吸烟饮酒。切勿尝试以任何方式带女性进入或靠近边界，这是极其严重的冒犯。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在达夫尼港口下船后，先别急着赶路，在简陋的咖啡馆喝杯希腊咖啡，观察一下往来于尘世与圣域之间的修士和工人，感受最初的氛围转换。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`搭乘半岛的老旧巴士或沿着海岸小路徒步一小时，前往半岛上最古老、最宏伟的大劳拉修道院，仰望其高耸的防御塔楼，并在主教堂里沉浸于满墙金色背景的拜占庭壁画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在征得同意后，于日落时分安静地坐在某所修道院面向爱琴海的露台上，看夕阳将修道院的石墙染成蜜金色，听钟声依次在各山谷间响起。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在收留你过夜的修道院食堂，与众人一同默默享用简单的晚餐，体验绝对安静中只有诵读声陪伴的进食，感受社群与灵修的结合。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第二天清晨，在大多数人还未醒来时，参加修道院庄严而漫长的晨祷仪式，在摇曳的油灯光和熏香中，听修士们吟唱那仿佛来自中世纪的和声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选择一条连接两座修道院的山林小径进行徒步，比如从圣保罗修道院到新斯基提修道院的路径，在寂静的森林中独自行走，偶尔邂逅独居的隐士小屋。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访一座像西蒙诺佩特拉这样的修道院，它惊人地建造在悬崖之巅，你需要攀登长长的之字形阶梯才能抵达，切身感受修士们选择与世隔绝的物理决心。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开前的上午，去一所修道院的纪念品商店（往往很小），不是购买俗气的礼物，而是请修士为你和亲友写下祈福的纸条，或请一本他们自己印刷的祈祷文。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`渡轮接近半岛时的海上全景`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个晴朗的下午回程时拍摄，侧光能勾勒出山脉与修道院建筑的立体轮廓，用长焦镜头压缩空间，展现悬崖建筑的险峻。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`大劳拉修道院外的橄榄树林`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，站在树林边缘，将古老的橄榄树树干作为前景，拍摄后方沐浴在柔和光线中的修道院城堡全貌，增加画面层次和岁月感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`西蒙诺佩特拉修道院的仰拍视角`}</h4>
                  <p className="text-sm text-gray-700">{`从山脚下徒步路径的拐角处，使用广角镜头仰拍，捕捉修道院如同从悬崖上生长出来的震撼效果，最好有流云掠过增加动感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`修道院庭院内的建筑细节`}</h4>
                  <p className="text-sm text-gray-700">{`选择正午阳光直射时，专注于拍摄教堂的红色圆顶与蓝天对比、古老石墙的斑驳纹理、或是走廊拱门形成的光影几何图案。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`达夫尼港口栈桥的回望`}</h4>
                  <p className="text-sm text-gray-700">{`离开时在栈桥上，用中焦段拍摄港口、山坡上的小教堂与背景中层叠的山峦，构成一幅宁静的告别画面，寓意从此岸回望彼岸。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`绝大多数修道院内部（尤其是教堂、食堂、图书馆）严格禁止摄影，请务必尊重。拍摄修士本人必须事先获得明确许可，且不要使用闪光灯或做出干扰其祈祷生活的行为。将更多精力用于用眼睛和心灵去记录，而非仅仅通过取景器。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`修道院客房体验`}</h4>
                  <p className="text-sm text-blue-800">{`提前通过传真或电话（是的，这里常用传真）向你心仪的修道院申请，获得批准后可入住极其简朴但一尘不染的修士客房，睡在硬板床上，与修士们共度完整的礼仪日。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`达夫尼港口简易旅馆`}</h4>
                  <p className="text-sm text-green-800">{`位于港口旁，提供最基本的床位和热水，适合行程灵活、希望节省时间的访客，方便早晚乘船，能听到整点的钟声和海浪声。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`卡里埃斯小镇的朝圣者之家`}</h4>
                  <p className="text-sm text-yellow-800">{`半岛“首府”卡里埃斯有几处由修道院联合运营的招待所，条件比单一修道院稍好，位置中心，便于探索不同区域的修道院。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`乌拉努波利斯的海滨酒店`}</h4>
                  <p className="text-sm text-purple-800">{`如果无法在半岛内过夜，或想有更舒适的休整，可选择山脚小镇乌拉努波利斯的家庭式酒店，清晨推开窗便是海景和对岸朦胧的圣山轮廓。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`修道院的住宿申请最好提前数月进行，且很可能没有确认回执，需要一定的耐心和缘分。半岛内所有住宿都没有现代娱乐设施，天黑后非常安静，请准备好书籍或日记本。如果选择住在山下，意味着你每天需要花费近4小时在往返渡轮上，会大大压缩深入的游览时间。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开阿索斯山的渡轮上，回望那渐行渐远的青翠山峦，你会感觉像从一个漫长的、清醒的梦中醒来。手指间或许还残留着古老烛台的温热，耳朵里似乎还回荡着拜占庭圣歌的余韵，鼻腔里则混合着焚香、旧书和山间清冽空气的记忆。这里没有提供任何感官上的奢华享受，相反，它提供了一种奢侈的“匮乏”——对信息、对噪音、对物质选择、对时间焦虑的暂时性匮乏。正是在这种匮乏留下的巨大空白里，你被迫与自己的思绪独处，开始重新感知一些最本质的东西：一片面包的味道，一线阳光的温度，一步一个台阶的实在感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个万物互联、节奏疯狂的时代，阿索斯山的存在本身就是一个奇迹，一个温柔的“反叛”。它固执地守护着一套与主流世界完全不同的价值观和时间表。它提醒我们，文明还有另一种可能——不是向上、向外无限扩张，而是向内、向深处静默地扎根。每一位热爱深度游的旅人都应该来此，并非为了猎奇“男人国”的标签，而是为了体验这场独一无二的“时空隔离实验”。你会明白，旅行最深刻的收获，有时不是看到了多么壮丽的风景，而是进入了一个截然不同的生活节奏和思想维度，从而照见自己日常的轨迹。阿索斯山不会给你答案，但它会给你一个无比安静的房间，让你听见自己内心问题的回响。这，或许才是它馈赠给现代人最珍贵的礼物。`}</p>
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
              <a href="/attractions/temple-of-apollo-epicurius" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴赛阿波罗神庙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Temple of Apollo Epicurius</p>
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
