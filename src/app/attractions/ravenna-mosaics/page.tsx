import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '拉文纳马赛克群 Early Christian Monuments of Ravenna ｜ 沉浸于黄金与青金石的世界，聆听沉默的拜占庭圣咏 - 最佳欧洲景点',
  description: '如果你以为拉文纳只是一座安静的、有些褪色的意大利小城，那么，当你推开圣维塔莱教堂那扇厚重的木门时，你会被眼前的光芒瞬间夺去呼吸。外面是朴素的、属于尘世的红砖墙和意大利的烈日，里面却是一个悬浮着的、金色的宇宙。那不是灯光，是成千上万片金箔镶嵌成的马赛克，在幽暗的穹顶和拱廊上燃烧。空气里有陈旧石头的凉意...',
}

export default function RavennaMosaicsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '拉文纳马赛克群', href: '/attractions/ravenna-mosaics' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`拉文纳马赛克群・Early Christian Monuments of Ravenna・意大利・拉文纳`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`如果你以为拉文纳只是一座安静的、有些褪色的意大利小城，那么，当你推开圣维塔莱教堂那扇厚重的木门时，你会被眼前的光芒瞬间夺去呼吸。外面是朴素的、属于尘世的红砖墙和意大利的烈日，里面却是一个悬浮着的、金色的宇宙。那不是灯光，是成千上万片金箔镶嵌成的马赛克，在幽暗的穹顶和拱廊上燃烧。空气里有陈旧石头的凉意，混合着极淡的烛蜡气味，但你的所有感官都被眼睛所看到的东西占据了——一种沉默的、辉煌的轰鸣。
在这里，时间不是线性的，而是被镶嵌在墙壁上。在加拉·普拉西提阿陵墓那小小的、十字形的空间里，抬头是深邃如夜空的蓝色穹顶，上面布满了金色的星辰和十字架。那种蓝色，是用来自阿富汗的青金石磨成粉末制成的颜料，历经一千五百年，依然饱和得如同将一片浓缩的夜空扣在了头顶。你几乎能感觉到那位罗马公主长眠于此的、永恒的宁静。而在新圣阿波利纳雷教堂，长长的中殿两侧，是两排从绿色草地中走出的、庄严而温柔的圣徒与殉道者。他们穿着洁白的长袍，手持冠冕，踩着细碎的野花，在金色的背景上缓缓走向祭坛上方的巨大十字架。那不是一幅画，那是一支静默的、永恒的游行队伍。
这些马赛克，是拉文纳的心跳，也是它日常生活的背景音。你会发现，当地人的买菜之路，就穿行在这些世界遗产之间。孩子们在但丁墓前的广场上踢球，情侣在圣维塔莱教堂外的咖啡馆啜饮着咖啡，而他们的头顶和身后，是查士丁尼皇帝和狄奥多拉皇后奢华的宫廷仪仗。这种神圣与世俗毫无隔阂的交织，让拉文纳的震撼不是博物馆式的疏离，而是一种活生生的、被持续呼吸着的伟大。
最打动人的，或许是那种极致的对比与永恒的对话。建筑外表的极度谦卑，与内部装饰的极度荣耀；微小如指甲盖的玻璃与石头碎片，拼凑出涵盖天堂与尘世的宏大叙事；动荡的帝国兴衰、权力更迭，最终凝固为这些凝视着你的、平静而超然的眼神。来到这里，你不是在看“古迹”，你是走入了一个用光和色彩构筑的神学世界，在每一片闪烁的镶嵌画里，听到古代工匠的呼吸，与信仰最初、最纯粹的颤音。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果你以为拉文纳只是一座安静的、有些褪色的意大利小城，那么，当你推开圣维塔莱教堂那扇厚重的木门时，你会被眼前的光芒瞬间夺去呼吸。外面是朴素的、属于尘世的红砖墙和意大利的烈日，里面却是一个悬浮着的、金色的宇宙。那不是灯光，是成千上万片金箔镶嵌成的马赛克，在幽暗的穹顶和拱廊上燃烧。空气里有陈旧石头的凉意，混合着极淡的烛蜡气味，但你的所有感官都被眼睛所看到的东西占据了——一种沉默的、辉煌的轰鸣。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这里，时间不是线性的，而是被镶嵌在墙壁上。在加拉·普拉西提阿陵墓那小小的、十字形的空间里，抬头是深邃如夜空的蓝色穹顶，上面布满了金色的星辰和十字架。那种蓝色，是用来自阿富汗的青金石磨成粉末制成的颜料，历经一千五百年，依然饱和得如同将一片浓缩的夜空扣在了头顶。你几乎能感觉到那位罗马公主长眠于此的、永恒的宁静。而在新圣阿波利纳雷教堂，长长的中殿两侧，是两排从绿色草地中走出的、庄严而温柔的圣徒与殉道者。他们穿着洁白的长袍，手持冠冕，踩着细碎的野花，在金色的背景上缓缓走向祭坛上方的巨大十字架。那不是一幅画，那是一支静默的、永恒的游行队伍。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这些马赛克，是拉文纳的心跳，也是它日常生活的背景音。你会发现，当地人的买菜之路，就穿行在这些世界遗产之间。孩子们在但丁墓前的广场上踢球，情侣在圣维塔莱教堂外的咖啡馆啜饮着咖啡，而他们的头顶和身后，是查士丁尼皇帝和狄奥多拉皇后奢华的宫廷仪仗。这种神圣与世俗毫无隔阂的交织，让拉文纳的震撼不是博物馆式的疏离，而是一种活生生的、被持续呼吸着的伟大。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，或许是那种极致的对比与永恒的对话。建筑外表的极度谦卑，与内部装饰的极度荣耀；微小如指甲盖的玻璃与石头碎片，拼凑出涵盖天堂与尘世的宏大叙事；动荡的帝国兴衰、权力更迭，最终凝固为这些凝视着你的、平静而超然的眼神。来到这里，你不是在看“古迹”，你是走入了一个用光和色彩构筑的神学世界，在每一片闪烁的镶嵌画里，听到古代工匠的呼吸，与信仰最初、最纯粹的颤音。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`拉文纳马赛克群`} />
                <InfoRow label="英文名称" value={`Early Christian Monuments of Ravenna`} />
                <InfoRow label="正式名称" value={`Early Christian Monuments of Ravenna`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`拉文纳`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`公元5-6世纪西罗马帝国与东哥特王国的权力中心，以及后来拜占庭帝国在意大利的据点，其保存完好的早期基督教马赛克艺术是无与伦比的巅峰之作。`} />
                <InfoRow label="建筑特色" value={`外表朴拙的红砖建筑内，藏着以黄金、青金石和彩色玻璃片构成的、震撼人心的穹顶与墙壁马赛克。`} />
                <InfoRow label="建筑风格" value={`晚期罗马式与早期拜占庭风格的融合，体现从古典时代向中世纪过渡的独特风貌。`} />
                <InfoRow label="文化价值" value={`是古典艺术末期与基督教艺术早期发展最完整、最辉煌的见证，被誉为“马赛克之都”和“色彩的诗篇”。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`各景点开放时间不一，一般为夏季（4月至9月）9:00-19:00，冬季（10月至3月）9:00-17:00；周一大多关闭或仅下午开放。加拉·普拉西提阿陵墓等小景点需提前预约特定时段。具体请务必在出发前查询每个单体建筑的官方网站，节假日（如圣诞节、元旦）可能全天关闭。`} />
              <InfoRow label="门票价格" value={`推荐购买“拉文纳马赛克联票”，成人约12.5欧元，有效期一周，可进入圣维塔莱教堂、加拉·普拉西提阿陵墓、新圣阿波利纳雷教堂、尼安洗礼堂、大主教博物馆等五个核心景点。单景点门票约6-10欧元。18岁以下欧盟学生及65岁以上长者有折扣，6岁以下儿童免费。联票可在任一参与景点的售票处购买。`} />
              <InfoRow label="地址" value={`各景点分散于拉文纳历史中心。核心售票处/信息中心地址：Via San Vitale, 17, 48121 Ravenna RA, Italy`} />
              <InfoRow label="交通方式" value={`最近的国际机场是博洛尼亚机场，其次是里米尼机场。从博洛尼亚中央火车站乘坐区域火车前往拉文纳火车站，车程约1小时10分钟，班次频繁（约每小时一班）。从里米尼乘坐火车约需50分钟。抵达拉文纳火车站后，所有主要马赛克景点均在步行范围内（最远不超过25分钟）。城市很小，无需公共交通，漫步是最好的方式。火车票建议通过Trenitalia官网或App提前购买，常有折扣。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解拉文纳的黄金为何在此处闪耀，得把时钟拨回罗马帝国的黄昏。公元402年，面对蛮族日益紧迫的威胁，西罗马帝国皇帝霍诺留做了一个大胆的决定：将首都从米兰迁往拉文纳。选择这里并非偶然，拉文纳当时被沼泽和环礁湖环绕，易守难攻，像个天然的堡垒。于是，这座不起眼的海港城市，一夜之间成了帝国的中枢。帝国的余晖，最先照亮了这里的建筑。霍诺留的妹妹，那位强势而虔诚的加拉·普拉西提阿，成为了拉文纳早期艺术的奠基人。她建造了以自己名字命名的陵墓，虽然小巧，却用那星空般的穹顶，为拉文纳的马赛克艺术定下了神秘而内省的基调——艺术开始从歌颂外在的帝国伟业，转向探索内心的信仰宇宙。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`帝国终究倾覆了。公元476年，西罗马帝国灭亡，但拉文纳的故事并未结束。东哥特人的国王狄奥多里克在这里建立了他的王国。这位深受罗马文化熏陶的蛮族君主，将自己视为罗马传统的继承者。他带来的不仅是统治，还有新一轮的建设热潮。他修建了自己的陵墓（现为狄奥多里克陵墓），那是一整块伊斯特拉石凿成的巨大圆顶，风格粗犷雄浑，与精致的马赛克建筑截然不同，仿佛象征着两种文明的碰撞与并存。更重要的是，在他的宽容政策下，阿里乌派基督教（东哥特人信仰）与正统天主教得以共存，各自的教堂拔地而起，艺术在竞争中蓬勃发展。拉文纳成了那个混乱时代里，一个奇特的文化熔炉。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的黄金时代，随着查士丁尼皇帝的野心而来。这位志在恢复罗马帝国旧疆的拜占庭君主，在6世纪中期从东哥特人手中夺回了拉文纳。拉文纳成为了拜占庭帝国在意大利的Exarchate（总督区）首府，是连接东西方的桥梁。查士丁尼不惜重金，要将这里打造成彰显帝国权威与正统信仰的样板。圣维塔莱教堂就是这一时期最璀璨的明珠。当你仰望祭坛两侧那著名的镶嵌画：一侧是身穿紫袍、头戴光环的查士丁尼皇帝，手持圣餐盒；另一侧是珠光宝气、神色凛然的狄奥多拉皇后，手持圣杯。这不仅仅是肖像，这是一场精心的政治神学宣言。它宣告：世俗的皇权与神圣的教权在此合一，皇帝与皇后是神在尘世的代理人。拉文纳的马赛克艺术，在此达到了技艺与思想的双重巅峰，色彩更华丽，构图更复杂，人物的表情透出一种超然的、属于天国的宁静。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的潮水再次退去。拜占庭的统治逐渐衰弱，拉文纳的政治重要性不复往昔。沼泽淤塞，海港废弃，它渐渐从世界的中心变成了一个安静的省城。但或许正是这种“被遗忘”，奇迹般地保护了这些珍宝。它们没有被后来的巴洛克或文艺复兴浪潮所覆盖或改造，就那么原封不动地沉睡在那些朴实的红砖建筑里。地震、战争似乎都巧妙地绕开了这里。直到19世纪，当欧洲的浪漫主义者重新“发现”中世纪艺术时，拉文纳才再次进入世界的视野。但丁，这位意大利文学的巨匠，最终也流亡并安息于此，为这座“沉默之城”增添了另一层文学的辉光。今天的拉文纳，每一块马赛克都是一个时空胶囊，封印着帝国的野心、帝王的虔诚、神学的思辨，以及无数无名工匠将信仰研磨成粉末，再一片片拼贴成永恒的耐心。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`拉文纳的游览是一场精心安排的“光之朝圣”，建议安排整整一天时间（至少8小时）。最佳抵达时间是早上9点前，赶在第一批旅游大巴到达之前，先去最核心的圣维塔莱教堂，享受片刻的宁静。整体节奏应是“慢读”而非“快看”，因为马赛克需要时间让眼睛适应幽暗，更需要时间让心灵去感受。建议路线从城东的圣维塔莱教堂开始，这里是艺术巅峰，视觉冲击力最强。之后参观毗邻的加拉·普拉西提阿陵墓，体验从宏大叙事到极致内省的转换。上午剩余时间留给尼安洗礼堂和大主教博物馆。中午在古城中心悠闲午餐。下午步行至城西的新圣阿波利纳雷教堂，感受长廊圣徒队伍的震撼，并顺路拜访但丁墓。这样的动线符合历史脉络，也避免了来回折返，让你的步行本身就成为穿越历史的旅程。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿着舒适的平底鞋，教堂内的古老石板地面并不平整，且参观时常需长时间仰头。进入所有马赛克教堂内部都严禁使用闪光灯，这是对脆弱文物最基本的保护。警惕教堂外可能出现的“快速通道”骗局，所有官方售票处标识清晰，联票绝对是最划算的选择。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨第一站直奔圣维塔莱教堂，在几乎无人的中殿中央席地而坐，让眼睛慢慢适应昏暗，看第一缕阳光是否恰好能点亮祭坛右侧狄奥多拉皇后长袍上的珍珠。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`轻轻推开旁边加拉·普拉西提阿陵墓低矮的门，弯腰进入那个宝石匣般的空间，在绝对的静谧中仰头凝视那片闻名于世的、用青金石铺就的星空穹顶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步行至尼安洗礼堂，看八角形穹顶上那幅施洗约翰为赤裸的基督施洗的镶嵌画，感受水波荡漾的蓝色与古老异教海神形象的奇妙融合。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过热闹的市中心广场，在当地人青睐的馅饼店买一份Piadina（意式扁面包三明治），坐在长椅上边吃边看鸽子飞过古老的钟楼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午走进新圣阿波利纳雷教堂那条长长的、绿意盎然的巴西利卡中殿，缓缓前行，让两侧墙壁上绵延的圣徒与殉道者队伍，像一条时光之河将你包裹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在教堂尽头祭坛前回望来路，观察光线如何穿过高侧窗，为那些金色的马赛克背景和白色的长袍镶上动态的、流动的光边。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`带着满心的色彩踱步到但丁墓，这个小小的新古典主义庙宇在夕阳下泛着暖光，感受文学与视觉艺术在这座城市里达成的另一种永恒同盟。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前若有时间，可闲逛至人民广场，点一杯Aperol Spritz，看归家的拉文纳人穿行在那些藏着千年瑰宝的红砖建筑之间，生活与历史在此刻再无分别。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣维塔莱教堂中殿中央仰拍穹顶`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点后，阳光可能透过高窗，使用广角镜头并提高ISO，能捕捉到中央的羔羊图案与周围金色蔓藤花纹在幽蓝背景上的全景，注意避开射灯直射。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`加拉·普拉西提阿陵墓内拍摄星空穹顶`}</h4>
                  <p className="text-sm text-gray-700">{`将相机置于地面手动长时间曝光（需微型三脚架或稳定放置），可完美呈现那一片深邃的蓝与金色的星辰，这是最难拍但最值得尝试的机位。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`新圣阿波利纳雷教堂中段侧面拍摄圣徒队伍`}</h4>
                  <p className="text-sm text-gray-700">{`下午的阳光从西侧窗射入，形成光束，站在一侧廊柱下，拍摄对面的圣徒镶嵌画与延伸的柱廊，能获得极具纵深感与神圣氛围的照片。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`尼安洗礼堂中央向上拍摄施洗场景`}</h4>
                  <p className="text-sm text-gray-700">{`将镜头垂直向上，对准八角形穹顶的正中心，可以对称地捕捉到那幅著名的洗礼图以及周围使徒环列的壮观景象。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从圣维塔莱教堂外的花园回望建筑全景`}</h4>
                  <p className="text-sm text-gray-700">{`下午的侧光能勾勒出红色砖墙与白色大理石窗格的质感，将教堂的朴素外观与内部的金碧辉煌形成对比联想。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`马赛克表面反光复杂，建议携带偏振镜（CPL）以有效消除玻璃和金色底层的反光，让色彩更纯粹。室内光线极其昏暗，大光圈定焦镜头（如35mm f/1.4）比变焦镜头实用得多。记住，有些最美的画面无法被相机带走，放下镜头，用眼睛和心去浸泡其中，才是最重要的“拍摄”。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`古城中心历史公寓`}</h4>
                  <p className="text-sm text-blue-800">{`租住一套位于古老建筑顶层的翻新公寓，推开木窗就能看到教堂的钟楼，夜晚能听见石板路上归家的脚步声，体验最地道的拉文纳日常。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`由修道院改建的精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`选择一家隐于僻静小巷的酒店，房间有裸露的原始砖墙和高高的穹顶，早餐庭院里可能还保留着古老的井，静谧感十足。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`郊外田园农庄住宿`}</h4>
                  <p className="text-sm text-yellow-800">{`如果自驾，不妨住在几公里外被桃树和葡萄园环绕的Agriturismo（农庄旅馆），享受托斯卡纳-艾米利亚风格的家常盛宴，白天再进城朝圣。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济实用的火车站附近民宿`}</h4>
                  <p className="text-sm text-purple-800">{`对于预算有限的旅行者，火车站步行十分钟范围内有不少干净的家庭式民宿，主人通常会热情地给你手绘一张“私房马赛克地图”。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`拉文纳老城中心非常安全，夜晚漫步极具风情。夏季（6-8月）是旅游旺季，住宿紧张且价格上浮，建议至少提前一个月预订。如果选择农庄，务必确认是否有方便的交通工具在傍晚后进城或返回，因为公交班次晚间会大幅减少。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开拉文纳许久后，闭上眼睛，那片璀璨的金色和深邃的蓝色依然会浮现。它不像罗马的废墟那样诉说着权力的庞大与倾覆，也不像佛罗伦萨的杰作那样高唱着人性的苏醒。拉文纳的低语是关于“永恒”的。它告诉你，在帝国崩解、世事浮沉的混乱纪元，人类最深的渴望不是建造更高的城墙，而是在一方小小的穹顶之下，用最细微的手工——切割、粘贴、镶嵌——去构筑一个井然有序、光辉灿烂的彼岸世界。那些马赛克上的皇帝与皇后，圣徒与羔羊，他们的眼神都望向远方，一种超越了时间与苦难的平静。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求即时满足、图像飞速划过的时代，拉文纳提供了一种截然相反的体验。它要求你慢下来，走进去，适应黑暗，然后才能看见光。它要求你理解，最震撼人心的美，是由成千上万微不足道的碎片组成的。这何尝不是一种深刻的人生隐喻？我们琐碎的日常，或许就是那些朴素的彩色玻璃片，但在某种信念与匠心的凝聚下，未尝不能拼贴出属于自己生命的、闪着微光的图案。所以，每一位渴望深度旅行的灵魂，都应该来一次拉文纳。它不是一次简单的观光，而是一次心灵的显影。在这里，你会看见，人类在最不确定的时代，如何用最确定的手艺，将信仰与希望，牢牢地镶嵌在了石头与墙壁上，成为了穿越千年的、不灭的光。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/gubbio-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    古
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">古比奥古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gubbio Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/modica-baroque-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莫迪卡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Modica</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/castellarquato-medieval-village-italy" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿夸尔夸托</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Castell'Arquato</p>
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
