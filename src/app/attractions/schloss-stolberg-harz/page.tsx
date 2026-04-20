import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '施托尔贝格城堡 Schloss Stolberg｜哈茨山深处的“诸侯摇篮”与童话小镇之冠 - 最佳欧洲景点',
  description: '第一眼看到施托尔贝格城堡，你会感觉自己走进了一本精装的格林童话书扉页。它不是孤零零地矗立在山巅，而是像一位慈祥的祖父，将整个红瓦顶、木框架的小镇温柔地揽在膝下。你从山脚那些糖果色的小房子之间开始向上走，石板路被岁月磨得温润，空气中飘着烤姜饼和热红酒的淡淡甜香，还有从森林里吹来的、带着松针和苔藓清冽气...',
}

export default function SchlossStolbergHarzPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '施托尔贝格城堡', href: '/attractions/schloss-stolberg-harz' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`施托尔贝格城堡・Stolberg Castle・德国・韦尼格罗德`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到施托尔贝格城堡，你会感觉自己走进了一本精装的格林童话书扉页。它不是孤零零地矗立在山巅，而是像一位慈祥的祖父，将整个红瓦顶、木框架的小镇温柔地揽在膝下。你从山脚那些糖果色的小房子之间开始向上走，石板路被岁月磨得温润，空气中飘着烤姜饼和热红酒的淡淡甜香，还有从森林里吹来的、带着松针和苔藓清冽气息的风。随着你步步登高，城堡的轮廓愈发清晰——那些坚固的石墙、高耸的塔楼，在午后的阳光下呈现出蜂蜜般的暖色调，与深绿色的哈茨山林形成绝妙的对比。
当你终于站在城堡广场上，喘着气，回身俯瞰，那一刻的震撼难以言表。整个韦尼格罗德小镇像一幅细腻的模型画卷在你脚下铺开，屋顶的波浪层层叠叠，一直蔓延到远方森林的边缘。耳边只有风声、鸟鸣，和远处市政厅钟楼传来的悠扬报时钟声。你会发现，城堡不仅仅是景点，它依然是小镇生活的“心脏”。你会看到本地老人坐在广场长椅上晒太阳，孩子们在城墙边追逐，那是一种被历史承托着的、安宁而扎实的日常。
走进城堡内部，时光流速仿佛骤然改变。厚重的木门在你身后关上，将现代世界的喧嚣隔绝。光线透过古老的菱形玻璃窗变得朦胧，空气里有股好闻的、旧木头、石蜡和一点点陈旧织物混合的味道，那是几个世纪沉淀下来的气息。走廊里挂着历代伯爵的肖像，他们的目光深邃，仿佛在无声地讲述着权力、野心与家族传承的故事。这里最打动人心的，正是一种“延续感”。它不是冰冷的博物馆，而是一个家族的千年家园，每一块地毯、每一件家具，都似乎还残留着生活的温度。
而城堡的灵魂，或许藏在那些不那么起眼的细节里。比如骑士大厅里被无数舞步打磨光滑的地板，仿佛还能听到昔日宴会的回响；图书馆里皮革书脊的触感，散发着知识与时光的芬芳；甚至一扇望向幽深内院的窄窗，框住一角天空和一只悄然掠过的飞鸟。在这里，你触摸到的不是一段死去的过去，而是一个依然在缓慢呼吸的、活生生的历史肌体。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到施托尔贝格城堡，你会感觉自己走进了一本精装的格林童话书扉页。它不是孤零零地矗立在山巅，而是像一位慈祥的祖父，将整个红瓦顶、木框架的小镇温柔地揽在膝下。你从山脚那些糖果色的小房子之间开始向上走，石板路被岁月磨得温润，空气中飘着烤姜饼和热红酒的淡淡甜香，还有从森林里吹来的、带着松针和苔藓清冽气息的风。随着你步步登高，城堡的轮廓愈发清晰——那些坚固的石墙、高耸的塔楼，在午后的阳光下呈现出蜂蜜般的暖色调，与深绿色的哈茨山林形成绝妙的对比。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你终于站在城堡广场上，喘着气，回身俯瞰，那一刻的震撼难以言表。整个韦尼格罗德小镇像一幅细腻的模型画卷在你脚下铺开，屋顶的波浪层层叠叠，一直蔓延到远方森林的边缘。耳边只有风声、鸟鸣，和远处市政厅钟楼传来的悠扬报时钟声。你会发现，城堡不仅仅是景点，它依然是小镇生活的“心脏”。你会看到本地老人坐在广场长椅上晒太阳，孩子们在城墙边追逐，那是一种被历史承托着的、安宁而扎实的日常。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进城堡内部，时光流速仿佛骤然改变。厚重的木门在你身后关上，将现代世界的喧嚣隔绝。光线透过古老的菱形玻璃窗变得朦胧，空气里有股好闻的、旧木头、石蜡和一点点陈旧织物混合的味道，那是几个世纪沉淀下来的气息。走廊里挂着历代伯爵的肖像，他们的目光深邃，仿佛在无声地讲述着权力、野心与家族传承的故事。这里最打动人心的，正是一种“延续感”。它不是冰冷的博物馆，而是一个家族的千年家园，每一块地毯、每一件家具，都似乎还残留着生活的温度。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而城堡的灵魂，或许藏在那些不那么起眼的细节里。比如骑士大厅里被无数舞步打磨光滑的地板，仿佛还能听到昔日宴会的回响；图书馆里皮革书脊的触感，散发着知识与时光的芬芳；甚至一扇望向幽深内院的窄窗，框住一角天空和一只悄然掠过的飞鸟。在这里，你触摸到的不是一段死去的过去，而是一个依然在缓慢呼吸的、活生生的历史肌体。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`施托尔贝格城堡`} />
                <InfoRow label="英文名称" value={`Stolberg Castle`} />
                <InfoRow label="正式名称" value={`Schloss Stolberg`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`韦尼格罗德`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`施托尔贝格家族超过千年统治的核心与象征，被誉为“德国诸侯的摇篮”，深刻影响了神圣罗马帝国的政治格局。`} />
                <InfoRow label="建筑特色" value={`一座雄踞于哈茨山脊之上的宏伟建筑群，融合了中世纪防御工事的厚重与文艺复兴宫殿的优雅，其标志性的高耸塔楼与红瓦屋顶构成了小镇的绝对视觉中心。`} />
                <InfoRow label="建筑风格" value={`以文艺复兴风格为主导，并在多次重建中融入了后哥特式、巴洛克及历史主义元素，形成独特的层叠式建筑风貌。`} />
                <InfoRow label="文化价值" value={`不仅是权力与建筑的丰碑，更是欧洲贵族文化、矿业历史与浪漫主义文学（与诗人歌德的渊源）交汇的活态见证。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡主体及博物馆的开放时间为每年4月至10月，每天上午10点至下午5点；11月至次年3月，开放时间缩短为上午11点至下午4点，且每周一闭馆进行维护。请注意，城堡内部导览团有固定时间，通常为整点或半点出发，冬季班次会减少。城堡公园全年免费开放。特殊节假日（如圣诞节期间）可能有特别活动或临时关闭安排，出行前务必查看官网公告。`} />
              <InfoRow label="门票价格" value={`标准成人票为8欧元，含博物馆及部分房间参观。包含深度导览团的联票价格为14欧元。优惠票适用于学生、残疾人及团体，价格为6欧元。6至14岁儿童票为4欧元，6岁以下儿童免费。家庭票（2大2小）为18欧元。持有“哈茨山脉卡”或特定合作机构会员卡可享受9折优惠。门票可在城堡入口处购买，旺季时建议通过官网提前预订以避免排队。`} />
              <InfoRow label="地址" value={`Schlossberg 1, 06536 Südharz, 德国`} />
              <InfoRow label="交通方式" value={`最近的国际机场是莱比锡/哈勒机场或汉诺威机场。从这两个机场出发，都需要先乘坐火车到韦尼格罗德主火车站。以莱比锡/哈勒机场为例：在机场火车站乘坐区域列车（RE）至哈勒主火，换乘前往韦尼格罗德的火车，全程约需2.5至3小时，班次每小时1-2班。抵达韦尼格罗德火车站后，最佳方式是步行！小镇本身就如童话，从火车站沿着清晰的路标步行上山约需20-25分钟，沿途经过美丽的木桁架房屋老街，本身就是游览的一部分。也可以乘坐当地的出租车，约5分钟车程。自驾游游客可将车停在山脚下的收费停车场，然后步行上山。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起施托尔贝格城堡的故事，得把时钟拨回到将近一千年前。大约在11世纪左右，施托尔贝格家族的祖先，一位名叫“弗拉内”的贵族，看中了哈茨山脉这道战略要冲，在此建立了最初的堡垒。那时候，这里还纯粹是为了军事防御，控制着重要的矿产和贸易路线。这个家族就像一颗坚韧的种子，在这片岩石土壤中扎下了根。到了12世纪，他们正式获得了“施托尔贝格伯爵”的头衔，这座城堡的名字，也开始与整个地区的命运紧密相连。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`家族的命运在13世纪迎来了一次至关重要的飞跃。通过精明的联姻和政治联盟，施托尔贝格家族将势力范围大大扩张，分裂出了多个支系，他们的后代遍布图林根、莱茵兰等地，成为了神圣罗马帝国内一股不可小觑的力量。正因如此，城堡才有了“诸侯摇篮”这个霸气又贴切的绰号。想象一下，在中世纪的帝国议会上，可能有好几位诸侯都流淌着施托尔贝格的血脉，这座深山里的城堡，无形中影响着千里之外的政治棋局。这段时期，城堡不断扩建，从单纯的要塞逐渐增添了居住功能，石头建筑里开始透出一点对舒适生活的追求。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，和平与繁荣并非永恒的主题。16世纪，宗教改革的浪潮也席卷了这里。施托尔贝格家族较早地接受了新教路德宗，这使得城堡一度成为当地宗教改革的一个小中心。但更严峻的考验来自战争。十七世纪的三十年战争，那场几乎撕裂了整个欧洲的浩劫，也给城堡带来了深重灾难。1642年，皇帝的军队占领并严重破坏了城堡。我们今天看到的建筑，大部分已不是最初的中世纪模样，而是战火后重建的结果。这场重建，恰好赶上了文艺复兴风格的流行，于是，城堡褪去了一些战争的阴霾，披上了更多人文主义的优雅外衣。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时光流转到18、19世纪，当城堡的军事意义逐渐褪去，它迎来了新的角色——作为家族主要的居住宫殿和文化遗产的守护者。值得一提的是，大文豪歌德与这里渊源颇深。他曾多次到访哈茨山区，并与当时的伯爵有交往。传说中城堡的景致与氛围，或许也曾给这位浪漫主义巨匠带来过灵感。城堡内部的装潢，也从这时起积累了更多巴洛克和历史主义的风格元素，房间变得更加精致、私密，充满了贵族生活的细节。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`进入20世纪，这座历经沧桑的城堡面临着最大的生存危机。二战后，它所在的区域属于东德，家族财产被收归国有，城堡一度被用作养老院和学校，不可避免地遭到了损耗。转机发生在两德统一后。经过复杂的谈判，施托尔贝格家族收回了城堡产权。但他们没有将其变为纯粹的私人宅邸，而是与基金会合作，投入巨资进行了一场漫长而精细的修复。今天的城堡，既是一个向公众开放的博物馆，也是一个仍在履行部分居住和礼仪功能的历史家园。它像一个从漫长睡梦中醒来的巨人，拍了拍身上的灰尘，将千年的故事，向每一个来访者娓娓道来。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要彻底感受施托尔贝格城堡的魅力，建议安排一整天的时间。最佳抵达时间是上午9点半左右，此时小镇刚刚苏醒，上山的小路清静，光线柔和，适合拍照。整体游览节奏宜松不宜紧，遵循“由外至内，由远及近”的原则。上午先专注于城堡外部和宏观感受，下午再沉浸于内部博物馆的细节。这样安排是因为上午体力充沛，适合登高和户外探索，而下午当阳光变得炙热或天气变化时，躲进充满故事的室内房间正是最佳选择。别忘了留出时间在山顶和小镇里无所事事地闲逛，这才是体验其灵魂的关键。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`参加德语导览团是深入了解城堡内部历史的关键，即使你听不懂，也能进入不向散客开放的区域，很多英语资料可供索要。城堡内部分楼梯狭窄且陡峭，地面也可能不平，务必穿着舒适防滑的鞋子，女士尽量避免细高跟鞋。小镇和城堡在冬季（11月-3月）可能被冰雪覆盖，景色绝美但行走需格外小心，部分区域可能关闭，出行前务必查询最新情况。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从山脚下的集市广场开始，沿着“城堡小径”标志，踏着斑驳的石板路穿过童话般的木桁架房屋老街缓缓向上攀登。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在第一个观景平台驻足，回望韦尼格罗德小镇如玩具积木般的全景，并调整呼吸准备迎接城堡的第一次全景亮相。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从古老的“骑士门”进入城堡外院，摸一摸门口历经风霜的石墙，感受一下防御工事的厚重与坚固。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随导览团的脚步，首先踏入气势恢宏的“骑士大厅”，仰望华丽的木制天花板，想象这里曾举办过的盛大宴会与庆典。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在家族肖像画廊里慢慢踱步，从那些威严的面孔和服饰的变迁中，直观地阅读这个家族近五百年的兴衰史。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花至少半小时泡在展示矿业历史和本地民俗的侧翼博物馆里，了解是哪些力量真正塑造了哈茨山区的骨骼与血肉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡西侧的露台花园离开主建筑，在修剪整齐的花圃和古老树木的环绕下，找一个长椅坐下，对着远山发一会儿呆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山时不要走原路，选择另一条穿过宁静住宅区的小径，你会看到当地人是如何与这座庞然大物朝夕相伴地生活。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`小镇市政厅广场仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光时分，从广场喷泉附近用长焦镜头拍摄，可以将城堡塔楼与前景色彩缤纷的木架房屋完美压缩在同一画面，充满童话感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡东侧城墙步道`}</h4>
                  <p className="text-sm text-gray-700">{`清晨太阳初升时，沿着城墙向东南方向行走，阳光会为整个城堡建筑群勾勒出金色的轮廓，并且能拍到城堡与山下小镇清晨炊烟一同醒来的生动场景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`骑士大厅内部光影`}</h4>
                  <p className="text-sm text-gray-700">{`在中午阳光最盛时，等待光线从高大的南窗射入，照亮大厅中央古老的石板地面和部分陈设，迅速捕捉下这道瞬息万变的历史光束。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`后花园拱门框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`站在露台花园通往下方园林的石拱门下，将拱门作为天然画框，拍摄远处层峦叠嶂的哈茨山森林，营造出“景中有景”的深邃意境。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城堡北面森林小径`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗的傍晚，步行至城堡北面约500米处的森林小路上，可以拍到城堡背靠深蓝渐变色天空的剪影，显得格外神秘而孤傲。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机拍摄前，务必确认当地法规，城堡及小镇上空可能有飞行限制。室内拍摄严禁使用闪光灯，昏暗环境下可适当提高ISO，保护珍贵的古董家具和织物。拍摄当地居民尤其是老人和儿童时，请务必先微笑示意并获得同意，尊重他们的隐私。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`童话小屋体验`}</h4>
                  <p className="text-sm text-blue-800">{`直接住在城堡山脚下的百年木桁架房屋里，这些由家庭经营的民宿房间低矮温暖，晚上能听见木质结构轻微的吱呀声，早晨在布满鲜花的阳台上就能看到城堡塔尖。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史氛围沉浸`}</h4>
                  <p className="text-sm text-green-800">{`选择小镇中心广场旁的精品酒店，由老邮局改造而成，内部是复古装饰与现代舒适的完美结合，出门便是热闹的集市和咖啡馆，生活气息浓郁。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`山林静谧之选`}</h4>
                  <p className="text-sm text-yellow-800">{`距离小镇2公里左右、坐落在哈茨山森林边缘的度假公寓，独享绝对的宁静，夜晚只有星空与风声，适合想要彻底放松、徒步深入的旅行者。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端贵族幻想`}</h4>
                  <p className="text-sm text-purple-800">{`实际上城堡内没有酒店，但小镇有几家由古老贵族别墅改造的高级住所，提供管家式服务，房间充满古董家具，让你无限接近昔日伯爵的生活氛围。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`旺季（夏季和圣诞市场期间）住宿非常紧俏，务必提前数月预订，尤其是周末。小镇治安极好，夜晚安静，但许多老房子隔音一般，这是体验的一部分。选择住宿时，注意是否提供停车位，小镇中心停车位有限且可能需要额外付费。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开施托尔贝格城堡好多天后，我闭上眼，脑海里浮现的不是某个具体的房间或画面，而是一种混合的感觉：是石板路的凉意透过鞋底，是森林空气的清澈，是古老房间里那种特殊的宁静，还有从高处俯瞰时，内心莫名升起的一种平和。这座城堡教会我，真正的历史不是教科书上冰冷的名字和年份，而是一种可以呼吸、可以触摸的“场域”。它让你相信，那些关于王国、贵族、骑士与传说的故事，并非全然虚幻，它们就曾发生在这些石头和木材构筑的空间里，其回声至今仍在梁柱间轻微嗡鸣。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求快速、崭新和刺激的时代，施托尔贝格提供了一种截然不同的旅行价值：慢下来的深刻。它不给你即时的感官轰炸，而是邀请你走进一段绵长而连续的时光。在这里，你会感受到一种罕有的“延续性”——从中世纪到文艺复兴，从战争毁坏到精心重建，从家族私有到向公众开放，它就像一个活生生的生命体，不断地适应、变化，却从未断绝其核心的脉搏。对于每一位厌倦了打卡式旅游，渴望与一个地方产生更深层联结的旅人来说，这里不是目的地，而是一次时间的沉浸式对话。它让你明白，最美的风景，往往与最厚重的时间沉淀在一起，等待着一颗愿意慢下来、细细聆听的心。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
