import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '拉罗谢特城堡废墟 Larochette Castle｜悬崖上的中世纪悲歌与绝美山谷 - 最佳欧洲景点',
  description: '朋友，想象一下这个场景：你开着车，在卢森堡宛如波浪般起伏的绿色丘陵间穿行，忽然，导航提示你即将进入一个山谷。就在拐过一个弯道的瞬间，它猝不及防地撞进你的视野——一座巨大、苍灰、棱角分明的石头遗迹，像一头沉睡的巨兽，傲然盘踞在百米高的狭长砂岩山脊之上。下方，是红、黄、蓝屋顶错落拼贴成的童话小镇拉罗谢特...',
}

export default function LarochetteCastleRuinsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '拉罗谢特城堡废墟', href: '/attractions/larochette-castle-ruins' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`拉罗谢特城堡废墟・Larochette Castle・卢森堡・拉罗谢特`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下这个场景：你开着车，在卢森堡宛如波浪般起伏的绿色丘陵间穿行，忽然，导航提示你即将进入一个山谷。就在拐过一个弯道的瞬间，它猝不及防地撞进你的视野——一座巨大、苍灰、棱角分明的石头遗迹，像一头沉睡的巨兽，傲然盘踞在百米高的狭长砂岩山脊之上。下方，是红、黄、蓝屋顶错落拼贴成的童话小镇拉罗谢特，安静地躺在深绿色山谷的怀抱里。那种强烈的对比，那种废墟的荒蛮之美与山下人间烟火的温柔并置，会让你瞬间屏住呼吸。
停好车，沿着小镇主街向山脚走。空气里有新鲜烘焙的面包香，混合着雨后泥土和青苔的味道。你能听见咖啡馆外杯碟的轻响，和远处溪流的潺潺水声。但你的目光总是不由自主地被牵引向上，望向那些残缺的塔楼和高墙。开始爬山吧，穿过茂密的林地，脚下的石板路被岁月和无数脚步打磨得光滑。越往上，小镇的喧闹越远，只剩下风吹过古老橡树林的沙沙声，和不知名鸟儿的鸣叫。当你终于穿过那道破败的拱门，真正站在城堡的庭院中央时，一种奇异的宁静会包裹住你。这里没有精美绝伦的装饰，只有裸露的巨石、空荡的窗洞、顽强生长在墙缝间的野花。
然而，这才是它最打动人心的魅力所在。它没有被过度修复成一个光鲜的旅游样板，而是坦然地以废墟的姿态存在。你可以触摸冰凉的、粗糙的墙壁，想象八百年前石匠的手温；可以透过没有玻璃的窗户框，看一幅流动的、镶着绿色山谷边的天然油画。阳光透过肋状拱顶的残骸，在地上画出清晰又转瞬即逝的光影。这里没有解说牌式的说教，历史是用你的双脚去丈量，用你的眼睛去阅读每一道裂痕，用你的心去感受那种宏大的失落与永恒并存的美。它不仅仅是一个景点，更像一个露天的、充满哲思的剧场，上演着一出名为“时光”的默剧。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，想象一下这个场景：你开着车，在卢森堡宛如波浪般起伏的绿色丘陵间穿行，忽然，导航提示你即将进入一个山谷。就在拐过一个弯道的瞬间，它猝不及防地撞进你的视野——一座巨大、苍灰、棱角分明的石头遗迹，像一头沉睡的巨兽，傲然盘踞在百米高的狭长砂岩山脊之上。下方，是红、黄、蓝屋顶错落拼贴成的童话小镇拉罗谢特，安静地躺在深绿色山谷的怀抱里。那种强烈的对比，那种废墟的荒蛮之美与山下人间烟火的温柔并置，会让你瞬间屏住呼吸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`停好车，沿着小镇主街向山脚走。空气里有新鲜烘焙的面包香，混合着雨后泥土和青苔的味道。你能听见咖啡馆外杯碟的轻响，和远处溪流的潺潺水声。但你的目光总是不由自主地被牵引向上，望向那些残缺的塔楼和高墙。开始爬山吧，穿过茂密的林地，脚下的石板路被岁月和无数脚步打磨得光滑。越往上，小镇的喧闹越远，只剩下风吹过古老橡树林的沙沙声，和不知名鸟儿的鸣叫。当你终于穿过那道破败的拱门，真正站在城堡的庭院中央时，一种奇异的宁静会包裹住你。这里没有精美绝伦的装饰，只有裸露的巨石、空荡的窗洞、顽强生长在墙缝间的野花。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，这才是它最打动人心的魅力所在。它没有被过度修复成一个光鲜的旅游样板，而是坦然地以废墟的姿态存在。你可以触摸冰凉的、粗糙的墙壁，想象八百年前石匠的手温；可以透过没有玻璃的窗户框，看一幅流动的、镶着绿色山谷边的天然油画。阳光透过肋状拱顶的残骸，在地上画出清晰又转瞬即逝的光影。这里没有解说牌式的说教，历史是用你的双脚去丈量，用你的眼睛去阅读每一道裂痕，用你的心去感受那种宏大的失落与永恒并存的美。它不仅仅是一个景点，更像一个露天的、充满哲思的剧场，上演着一出名为“时光”的默剧。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`拉罗谢特城堡废墟`} />
                <InfoRow label="英文名称" value={`Larochette Castle`} />
                <InfoRow label="正式名称" value={`Larochette Castle (Ruins)`} />
                <InfoRow label="国家" value={`卢森堡`} />
                <InfoRow label="城市" value={`拉罗谢特`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`曾是卢森堡中部穆勒塔尔地区最具战略意义和财富的贵族联合城堡之一，见证了中世纪领主权力的分割与兴衰。`} />
                <InfoRow label="建筑特色" value={`一座由不同家族分庭抗礼、在狭长岩脊上建起的“双子城堡”式防御工事废墟，与下方色彩斑斓的小镇形成绝妙对比。`} />
                <InfoRow label="建筑风格" value={`以罗曼式为基础，后期融合了哥特式军事建筑元素的防御型城堡。`} />
                <InfoRow label="文化价值" value={`是卢森堡“城堡之路”上的瑰宝，其废墟状态本身成为一种强烈的美学与文化符号，象征着时光的力量与历史的无常。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年开放，外部区域24小时可游览。城堡废墟主体及内部参观区域（包括主塔楼和小型博物馆）开放时间通常为：每年4月1日至10月31日，每天上午10点至下午5点。11月至次年3月期间，城堡主体内部可能关闭或仅在周末开放，出行前务必查阅卢森堡城堡与遗迹官方网站获取最新信息。国家法定假日（如圣诞节、元旦）通常关闭。`} />
              <InfoRow label="门票价格" value={`成人票5欧元。优惠票（学生、65岁以上长者）4欧元。12岁以下儿童免费。持有卢森堡卡（Luxembourg Card）可免费进入。门票包含进入废墟所有区域及内部小型历史展览。`} />
              <InfoRow label="地址" value={`2 Rue du Château, L-7622 Larochette, Luxembourg`} />
              <InfoRow label="交通方式" value={`从卢森堡市（卢森堡芬德尔机场或中央火车站）出发是最佳选择。在卢森堡中央火车站外的公交枢纽，乘坐111路公共汽车，方向为“迪基希（Diekirch）”，在“拉罗谢特，市政厅（Larochette, Hôtel de Ville）”站下车，车程约35-40分钟，每小时至少一班。下车后跟着清晰的褐色城堡标志步行，穿过迷人的小镇中心，沿着略有坡度的石板路向上，约10-15分钟即可抵达城堡山脚入口。卢森堡全国公共交通免费，无需购票，这是最便捷经济的方式。自驾的话，从卢森堡市沿N7公路向东北方向行驶约20公里，小镇有收费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`拉罗谢特的故事，始于一片岩石。早在10世纪，这块俯瞰着白恩兹河谷和重要贸易路线的巨大砂岩山脊，其战略价值就被人们发现。最初可能只是一个简单的木质瞭望塔，但在欧洲那个城堡林立的年代，石头才是权力最稳固的象征。到了11世纪，随着神圣罗马帝国势力的巩固，一位名叫“拉罗谢特”的领主在这里用石头奠定了家族基业，“岩石上的城堡”之名由此而来。最初的中心城堡规模不大，但足以震慑四方。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转折点出现在12世纪。就像许多中世纪贵族家族的故事一样，传承与分裂是主旋律。拉罗谢特领主家族没有直系男性继承人，城堡的所有权通过联姻，落入了两个强大的贵族家族手中：冯·冯斯多夫家族和冯·德·马尔克家族。你能想象吗？这两个家族没有选择争夺，而是做了一个非常“中世纪”的决定：共享。他们以城堡中央的庭院为界，一东一西，各自建造属于自己的宫殿、塔楼和生活区，共用外墙和部分防御设施。于是，拉罗谢特城堡变成了一座罕见的“双子城堡”，两个家族在同一片屋檐下，维持着微妙的平衡与竞争。我们今天看到的废墟中，那些风格略有差异的建筑部分，正是这场权力“同居”的无声证明。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡的黄金时代在14到16世纪。得益于卢森堡地区铁矿石的贸易，这两个家族都积累了巨额财富。他们不断扩建、加固自己的领地。西侧的冯斯多夫家建起了宏伟的五层主楼，拥有宽敞的大厅和华丽的哥特式窗户；东侧的马尔克家也不甘示弱，修筑了坚固的方形主塔和复杂的防御工事。那段时期，城堡里应该充满了骑士的铠甲碰撞声、宴会上的音乐声、以及商议领地事务的低声交谈。它不仅是军事堡垒，更是地区行政、经济和社交的中心，威风凛凛。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但烈火与毁灭，似乎是中世纪城堡难以逃脱的宿命。1565年，一场灾难性的大火席卷了城堡。关于火灾的起因众说纷纭，有说是雷击，也有说是厨房用火不慎。但可以确定的是，木质的屋顶、地板和内装在这场大火中化为灰烬，只留下无法燃烧的石壳。更具悲剧性的是，当时城堡的两个主人家族似乎都陷入了财务或继承危机，再也没有财力和意愿去修复这座巨大的、已被文艺复兴时代逐渐抛弃的军事堡垒。于是，它被遗弃了。曾经回荡着欢声笑语的厅堂，成了野鸽和蝙蝠的巢穴；精美的石雕在风吹雨打中慢慢模糊；雄伟的塔楼在一次次冬季冻融中悄然崩塌。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`此后的三百多年，它就像一则被遗忘的寓言，静静矗立在山巅，逐渐被森林和蔓藤吞噬，成为当地人口中一个带着淡淡忧伤的传说。直到19世纪末，浪漫主义思潮席卷欧洲，人们开始重新欣赏废墟之美，将其视为民族历史和文化的浪漫象征。卢森堡也开始重视这些沉默的见证者。20世纪后期，系统的考古发掘和谨慎的加固工程得以展开，不是为了重建，而是为了稳住时光，确保这座“岩石上的悲歌”不会彻底消失。今天，我们脚下的每一块石头，都是这部长达千年、关于权力、财富、意外与遗忘的史诗中的一个字符。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`强烈建议将游览安排在下午。午后抵达拉罗谢特小镇，可以先在山下享受一顿悠闲的午餐，感受本地生活气息。然后约在下午三点左右开始上山，此时太阳开始西斜，光线变得金黄柔和，正是拍摄城堡和山谷的绝佳时机。整体游览时间建议预留2.5至3小时。节奏应该是慢的、沉浸式的。先在山脚仰望，建立整体印象；再爬山，在过程中感受环境的过渡；进入废墟后，不要急着走遍每个角落，而是多停留，在不同位置坐下，感受光影变化和空间的寂静。这样安排，你最终可以在日落时分，沐浴着一天中最美的光线，俯瞰山谷小镇华灯初上的魔幻时刻，为旅程画上完美句号。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿一双绝对防滑耐走的鞋子，城堡内部地面不平，常有碎石和湿滑的青苔。
废墟内部几乎没有照明和商业设施，请自带一瓶水和小零食，但请务必带走所有垃圾。
如果遇到雨天，石阶会非常滑，建议改期；但雨后的废墟，石头颜色更深，植被更翠绿，拍照别有风味。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先在山脚下的小镇广场，仰头喝一口水，好好端详城堡在岩脊上展开的完整剪影，辨认那些主要的塔楼轮廓。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着标志清晰的“Château”小路开始上山，在茂密的橡树和山毛榉林中穿行，留意脚下古老石阶被磨出的凹痕。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡西侧较低的门楼进入，瞬间踏入被高大石墙包围的宁静世界，第一个动作通常是驻足，深深吸一口带着凉意的空气。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直走向西侧冯斯多夫宫遗址的巨大外壳，抬头看那五层楼高的残壁和空荡荡的巨型哥特窗，想象当年宴会的光景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过中央庭院，探索东侧马尔克家族区域更显敦实厚重的方形主塔基座，试着攀爬狭窄的旋转石梯到达上层平台。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到北侧城墙的步道，那里是俯瞰拉罗谢特全镇红屋顶与远处绵延森林的、毫无遮挡的绝佳观景台。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，在夕阳西下时，选择一处面向西方的断壁残垣安静坐下，看金色的光芒如何一寸寸抚摸过古老的石头，直至暮色四合。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`小镇主街尽头仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，阳光从侧面照亮城堡岩壁，站在镇中心通往城堡的小路起点，用长焦压缩空间，将色彩缤纷的房屋前景与威严的灰色废墟同框。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`西宫哥特式窗框构图`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，阳光呈暖金色，站在西侧宫殿内部，透过巨大的、没有玻璃的尖拱窗向外拍摄，将窗框作为画框，框住远方郁郁葱葱的山谷和天空。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`北城墙观景台全景`}</h4>
                  <p className="text-sm text-gray-700">{`蓝调时刻（日落后的半小时），小镇灯光初亮，城堡轮廓尚存，在此用三脚架长曝光，能拍出冷暖色调对比、静谧而富有故事感的梦幻大片。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`废墟细节光影`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光强烈时，不必强拍全景，转而关注细节，如阳光在粗糙石墙上投射的清晰光影、墙缝中迎风摇曳的野花、一道弧形的罗马式拱门残迹，用微距或浅景深突出质感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`无人机飞行在卢森堡受到严格管制，尤其在历史遗迹上空，未经许可请勿放飞。`}</li>
                <li>• {`尊重遗迹，切勿为了拍照攀爬明确标有禁止进入的区域或摇摇欲坠的墙体。`}</li>
                <li>• {`人物剪影在巨大的窗洞或城墙缺口前会非常出彩，建议同伴穿着颜色简单的衣物。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`小镇温馨民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在拉罗谢特镇中心一栋有着淡黄色外墙的百年老屋里，房东老奶奶会给你手绘小镇地图，早晨在爬满葡萄藤的小阳台上就能看到城堡尖顶。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`森林疗愈居所`}</h4>
                  <p className="text-sm text-green-800">{`预订穆勒塔尔森林边缘的现代风格木屋民宿，被松涛声包围，拥有面向森林的落地窗和私人桑拿，开车到城堡仅需5分钟。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`河谷设计酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`位于邻近更热闹的埃希特纳赫镇，一家由修道院改造的设计酒店，将历史感与极简现代完美融合，提供高品质的餐饮，适合对住宿品味有要求的旅行者。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`卢森堡市便捷选择`}</h4>
                  <p className="text-sm text-purple-800">{`如果你留恋都市便利，住在卢森堡市中心的酒店，搭乘免费的公交车当日往返，既能深度游览废墟，晚上还能享受首都的夜景和美食。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`拉罗谢特小镇非常安静，夜间几乎没有任何娱乐活动，喜欢夜生活的朋友建议住卢森堡市。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（7-8月）是旅游旺季，卢森堡和周边地区的住宿都很紧张，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穆勒塔尔地区以徒步和山地车闻名，选择森林附近的住宿，第二天可以无缝衔接户外活动。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开拉罗谢特城堡时，我的背包里好像没有增加什么纪念品，但心里却沉甸甸地装满了东西。那是一种复杂的情绪，混杂着对时光暴力的敬畏，和对这种“不完美”状态的深深着迷。我们习惯了参观那些被修复得金碧辉煌的宫殿，它们告诉我们历史“曾经有多辉煌”；而拉罗谢特这样的废墟，却在向我们展示辉煌“如何落幕”，以及落幕之后，生命（比如那些墙缝里的花）和宁静如何重新占据舞台。这是一种更深刻、更哲学的历史教育。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、新鲜和完美体验的快节奏世界里，这样一座废墟提供了一种难得的“减速”和“沉思”的空间。它不讨好你，不提供便捷的娱乐，它只是沉默地在那里，要求你付出一点点体力，付出一点点想象力，去主动完成历史的拼图。当你站在那儿，感受着山风穿过空荡的窗洞，发出类似箫声的鸣响时，你会突然明白，有些美，正在于残缺，在于未完成，在于留白。它不是一个句号，而是一个意味深长的省略号，邀请每一个来访者，用自己的感悟去填写后面的内容。这，正是深度旅行的真谛——不是收集目的地，而是收集触动心灵的视角。拉罗谢特城堡废墟，就是这样一个能悄然改变你观看世界方式的、一生必去之地。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/esch-sur-sure" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃施河畔绍尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Esch-sur-Sûre</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/esch-sur-sure-luxembourg" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃施叙尔叙尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Esch-sur-Sûre</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/beaufort-castle-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博福尔城堡遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Beaufort Castle</p>
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
