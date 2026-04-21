import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '亚伊采历史溯源｜瀑布上的波斯尼亚和黑塞哥维那王国之都，南斯拉夫诞生的传奇前夜',
  description: '揭秘波斯尼亚和黑塞哥维那“鸡蛋城”亚伊采：瀑布上的王国之都，末代国王殉难地，铁托诞生的南斯拉夫传奇。走进瀑布轰鸣声中的千年史诗。',
}

export default function JajceBosniaWaterfallFortressHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '波斯尼亚和黑塞哥维那', href: '/destinations/europe' },
            { label: '中波斯尼亚州', href: '/destinations/europe' },
            { label: '亚伊采', href: '/attractions/jajce-bosnia-waterfall-fortress-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`亚伊采・Jajce・波斯尼亚和黑塞哥维那・中波斯尼亚州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在波斯尼亚和黑塞哥维那的心脏地带，有一座将瀑布轰鸣当作永恒背景音乐的中世纪古城。它并非寻常的山间要塞，而是两个王国先后陨落与一个现代国家奇迹诞生的十字路口。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里是<strong>亚伊采</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "作为<strong>波斯尼亚王国最后的王都</strong>，它见证了王冠坠地、信仰更迭的悲壮瞬间。数百年后，它又化身<strong>南斯拉夫联邦的“产房”</strong>，在二战硝烟中接生了一个崭新的国家构想。瀑布依旧奔腾，冲刷着岩石，也冲刷着被层层叠叠的历史浸透的城墙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "抛开游玩攻略，走进亚伊采的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`亚伊采`} />
                <InfoRow label="英文名称" value={`Jajce`} />
                <InfoRow label="正式名称" value={`Jajce`} />
                <InfoRow label="国家" value={`波斯尼亚和黑塞哥维那`} />
                <InfoRow label="城市" value={`中波斯尼亚州`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "亚伊采的故事，始于湍急的河流与坚硬的山岩之间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字 <strong>Jajce</strong>，在斯拉夫语中意为 <strong>“小鸡蛋”</strong>。关于这个可爱名字的由来，流传最广的传说是关于城市的形状——从高处俯瞰，被普利瓦河与弗尔巴斯河环绕的城堡山丘，宛如一枚躺在河网摇篮中的蛋。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但更可能的历史渊源，与一次充满象征意义的奠基有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "现代考古将城市的初步建立定在 <strong>14世纪</strong>。当时，统治此地的科特罗马尼奇王朝正处在权力上升期。他们需要一座易守难攻、又能彰显王权的堡垒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "亚伊采的地理位置堪称天选：河流在此交汇，形成天然屏障；高耸的岩壁是绝佳的防御基础；充沛的水流则能驱动 mills，滋养城民。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>赫沃耶·武克契奇·赫尔瓦蒂尼奇</strong>，这位权倾一时的贵族，在 <strong>1421年</strong> 被正式记载为城市的强化建设者。他扩建了宏伟的要塞，使其成为家族权力中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座“鸡蛋城”从诞生之初，就注定了不平凡的命运。它不是一个缓慢生长的居民点，而是一颗被精心放置在战略棋盘上的“王棋”，等待着被推至历史舞台的中央，承担起王国最后堡垒的重任。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "亚伊采的历史，是由三声沉重的“落幕”与一声嘹亮的“开幕”所构成的交响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一幕：王国之殇 (1463年)</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "15世纪中叶，奥斯曼帝国的铁蹄震动着巴尔干。<strong>波斯尼亚王国</strong>的最后一位国王，<strong>斯捷潘·托马舍维奇</strong>，将王庭迁至他认为固若金汤的亚伊采。这座瀑布上的城堡，成了王国最后的希望与墓碑。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“苏丹的军队像黑云一样压向城墙。我们听见瀑布的水声里，夹杂着异教徒的战吼。” ——后世编年史对围城战的想象描述。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1463年</strong>，经过惨烈抵抗，亚伊采最终陷落。国王被俘并被处决。波斯尼亚王国的独立时代，随着瀑布的水汽一同蒸发。奥斯曼人在城堡上升起了新月旗，但令人惊奇的是，他们并未摧毁城内的<strong>圣玛丽教堂</strong>和众多的<strong>波格米勒派墓碑</strong>。这种并存，让亚伊采成了一个奇特的历史切片。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二幕：帝国轮转 (19世纪)</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥斯曼的统治持续了四百余年，直到 <strong>1878年</strong> 柏林会议后，奥匈帝国接手。新的主人带来了火车、电报和中央供暖。他们在城堡下建起了精致的欧式别墅，瀑布被规划成欧洲最早的水电站之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "亚伊采的肌理上，从此叠加了东西方的印记。宣礼塔的剪影旁，立起了巴洛克式的屋顶。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第三幕：国家诞生 (1943年)</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这是亚伊采最辉煌，也最被后世铭记的时刻。<strong>第二次世界大战</strong>期间，这里成为南斯拉夫游击队抵抗运动的核心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1943年11月29日</strong>，在纳粹占领军的眼皮底下，于亚伊采一所不起眼的建筑里，<strong>反法西斯民族解放委员会</strong>召开了第二次会议。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是在这次会议上，做出了奠定战后格局的历史性决议：<strong>剥夺流亡国王的权力，宣告新的、联邦制的南斯拉夫国家成立</strong>。约瑟普·布罗兹·铁托被授予元帅军衔。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“在瀑布的轰鸣声中，我们宣布了一个新国家的诞生。这声音盖过了全欧洲的炮火。” ——一位与会游击队员后来的回忆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "亚伊采，由此被冠以 <strong>“南斯拉夫的摇篮”</strong> 称号。这场在危难中举行的“建国会议”，其勇气与象征意义，至今仍在巴尔干的历史回音壁上震荡。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这座小城交织的命运线上，有两个人的身影被永恒定格：一位是亡国之君，另一位是建国之父。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>斯捷潘·托马舍维奇：末代国王的76天</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的故事充满了悲剧与讽刺。<strong>斯捷潘</strong>本是<strong>塞尔维亚专制国</strong>的统治者，于 <strong>1459年</strong> 因奥斯曼入侵而流亡。随后，他通过婚姻继承了波斯尼亚王位。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "为了换取和平幻想，他甚至向罗马教皇求助，并公开宣布放弃本土的波格米勒派（被视为异端），改信天主教，以期获得西方支援。这一举动却激怒了国内部分贵族，也未能等来真正的援军。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他将王国最后的筹码押在亚伊采的险峻上。<strong>1463年</strong> 春天，奥斯曼苏丹穆罕默德二世的大军兵临城下。围城战异常激烈，传说中，守军甚至利用瀑布的水流制造洪水冲击敌军。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但实力悬殊。城破后，斯捷潘在附近的科奇奇要塞被俘。关于他的结局，流传着两个版本：奥斯曼官方史书称他因反抗而被斩首；而当地一则更富文学色彩的传说则称，苏丹给了他一个选择——改信伊斯兰教，便可保全性命与富贵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说中，国王拒绝了。他被处死于今日竖立着十字架的山坡上。他的统治仅持续了短短<strong>两年</strong>，在亚伊采的时间，更是只有绝望的<strong>76天</strong>。他留下的，除了悲剧，便是城堡中那座他为宣誓天主教信仰而匆忙修建的<strong>小教堂遗迹</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>约瑟普·布罗兹·铁托：在瀑布声中成为元帅</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "铁托与亚伊采的关联，则是一段险中求胜的传奇。<strong>1943年</strong>，作为游击队最高指挥官的铁托，正领导着欧洲战场最顽强的抵抗运动之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "选择亚伊采作为召开第二次AVNOJ会议的地点，是一次极具胆略的赌博。当时，德军正发动第六次大规模攻势，意图一举歼灭游击队主力。亚伊采本身也并非绝对安全的后方。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "会议在极度保密和警戒下进行。代表们穿越封锁线，秘密汇集于此。正是在这里，铁托的领袖地位被正式以国家形式确认，他被授予 <strong>“南斯拉夫元帅”</strong> 军衔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一个广为流传的轶事是，在会议期间，铁托曾站在要塞城墙边，眺望着脚下轰鸣的瀑布，对身边的同志说：“听这水声，它永远不会停止。就像我们的斗争。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这次会议的精神与决议，赋予了游击队超越军事层面的政治合法性，为战后南斯拉夫联邦的版图奠定了法理基础。如今，会议旧址已成为博物馆，里面陈列着那张著名的照片：神色坚定的代表们，身后是简陋的木屋，而历史就在这一刻被改写。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "亚伊采对于铁托，并非故乡，却是他政治生命的“出生证明”签署地。一亡一兴，两位都与王权相关的巨人，让亚伊采成了巴尔干命运转折点的最生动注脚。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "瀑布的轰鸣，滋养了无数神秘的想象。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最动人的传说，关乎城市本身。人们说，亚伊采的守护神并非圣人，而是那条创造瀑布的<strong>水之龙</strong>。它沉睡在普利瓦河地下溶洞的深处，它的呼吸化为地表永不枯竭的湍流，它的梦境则化为环绕古城的雾气。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每当城市面临危难，瀑布的水声会变得异常汹涌，那是巨龙在深渊中翻身的警示。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于 <strong>“国王的宝藏”</strong> ，则有另一个版本。传说末代国王斯捷潘·托马舍维奇在城破前，将波斯尼亚和黑塞哥维那王国的国宝与大量黄金秘密藏于城堡之下错综复杂的地道或附近某个洞穴中。几个世纪以来，无数寻宝者试图破解这个谜题，但都以失败告终。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "老人们说，宝藏被国王的诅咒守护着，只有心无贪念、真正热爱这片土地的人，才能在月圆之夜瀑布呈现银白色时，瞥见入口的微光。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而城市下方庞大的 <strong>“普利瓦湖与溶洞群”</strong> 本身，就是传说的舞台。其中一个溶洞深处，有一处被称作“教堂”的巨大穹窿，洞壁上有难以解释的古老刻痕。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地人说，那是中世纪 <strong>“波格米勒派”</strong> 异端教徒秘密集会的地点。他们在瀑布的巨响掩护下诵读自己的经文，相信流动的水能净化灵魂，并将他们的信仰铭刻在石头上，等待后人发现。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，与真实的历史层层交融。当你触摸城堡冰凉的石头，聆听震耳欲聋的水声，你会感到历史书之外的亚伊采——一个由巨龙、国王亡灵和异端信仰共同守护的、充满灵性的地方。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日的亚伊采，瀑布依旧奔腾不息。那声音，是这座城市最深沉的历史独白。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它诉说着一个本土王国如何在内忧外患中，将最后的尊严寄托于山河之险，最终依然湮没于时代洪流的悲怆。城墙上的弹孔，是近代战争叠加的伤痕。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它更宣告着一个现代联邦国家如何在最黑暗的战争岁月里，于同一座城堡下，凭借理想与勇气“无中生有”的壮举。这种强烈的历史反差——<strong>毁灭与新生、终结与开端在同一点爆发</strong>——正是亚伊采独一无二的人文魅力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在亚伊采，你不是在参观一个静止的博物馆。你是在站立在一个<strong>历史的断层带上</strong>。脚下是奥斯曼的地基，眼前是中世纪的教堂塔楼，耳畔是奥匈帝国水电站的余音，脑海中回响着1943年那份改变地图的宣言。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有宏大叙事的炫耀，只有层层沉淀的具体与真实。每一阵穿过石缝的风，都带着不同时代的回音。读懂亚伊采，便是读懂了巴尔干半岛的缩影——一部关于生存、抵抗、变迁与身份寻找的千年史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的价值，远不止于一张瀑布与城堡的明信片风景。它是一个活的课堂，教你聆听历史的多声部合唱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？如何抵达瀑布最佳观景台、探寻地下溶洞、解读要塞每一块砖石的故事，交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/blagaj-tekke-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布拉加伊特基亚修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Blagaj Tekke</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vjetrenica-cave" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    风
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">风洞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vjetrenica Cave</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/jajce-waterfall-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    亚
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">亚伊采</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Jajce</p>
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
