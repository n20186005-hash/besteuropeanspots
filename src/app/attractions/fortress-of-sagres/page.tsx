import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '萨格里什要塞 Fortress of Sagres｜悬崖尽头的航海罗盘，大航海时代梦开始的地方 - 最佳欧洲景点',
  description: '车子沿着阿尔加维西海岸一路奔驰，当繁华的海滨度假区被甩在身后，眼前的地貌变得越来越粗犷、荒凉。直到路的尽头，一片仿佛被巨斧劈开的赭色悬崖横亘在面前，萨格里什要塞就这么毫无预警地出现了。第一眼望去，它不像一座童话里的城堡，没有华丽的塔楼，只有一道绵长、低矮、被海风侵蚀成土黄色的石墙，沉默地趴伏在大地的',
}

export default function FortressOfSagresPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '萨格里什要塞', href: '/attractions/fortress-of-sagres' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`萨格里什要塞・Fortress of Sagres・葡萄牙・萨格里什， 阿尔加维地区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着阿尔加维西海岸一路奔驰，当繁华的海滨度假区被甩在身后，眼前的地貌变得越来越粗犷、荒凉。直到路的尽头，一片仿佛被巨斧劈开的赭色悬崖横亘在面前，萨格里什要塞就这么毫无预警地出现了。第一眼望去，它不像一座童话里的城堡，没有华丽的塔楼，只有一道绵长、低矮、被海风侵蚀成土黄色的石墙，沉默地趴伏在大地的边缘。但那种震撼，是直击心灵的。推开车门，第一个扑向你的是风，永不停歇、带着咸湿水汽和野草气息的强风，它呼啸着穿过耳畔，像是数百年来无数航海故事的低语。
走过售票处那扇简朴的石砌拱门，你就正式踏入了这个“世界的尽头”。脚下是坚实粗糙的地面，眼前豁然开朗。与其说这是一座要塞的内部，不如说是一片朝向大洋的荒原。最夺人眼球的，是地面上那个直径达43米的巨大石砌圆环——著名的“风之玫瑰”罗盘。它由数十块长条石放射状排列而成，尽管历经沧桑，图案依旧清晰。站在这个巨大罗盘的中心点，四面八方只有海、风和天空。你会情不自禁地张开双臂，感受那股仿佛能将你托起的力量。这里没有精致的博物馆展柜，历史就写在这寸草不生的岩石上，融在每一阵风里。
在当地人心中，萨格里什角不仅仅是一个景点。清晨，你会看到垂钓者坐在悬崖边缘，鱼竿伸向下方咆哮的蔚蓝；黄昏，冲浪爱好者们结束了一天的追逐，会来这里静坐，看落日沉入海平线。这座要塞早已超越了军事意义，成为一种精神图腾。它最打动人心的地方，正是这种极致的空旷与孤寂。在这里，你听不到城市的喧嚣，只有海浪永无止境地拍打悬崖的轰鸣，像是地球沉稳的心跳。它迫使你安静下来，面对最纯粹的天地，然后思考：当年那些即将驶向未知海域的年轻人，站在这同样的悬崖边，望着同一片无尽的大西洋，心中是恐惧更多，还是梦想更炽烈？`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子沿着阿尔加维西海岸一路奔驰，当繁华的海滨度假区被甩在身后，眼前的地貌变得越来越粗犷、荒凉。直到路的尽头，一片仿佛被巨斧劈开的赭色悬崖横亘在面前，萨格里什要塞就这么毫无预警地出现了。第一眼望去，它不像一座童话里的城堡，没有华丽的塔楼，只有一道绵长、低矮、被海风侵蚀成土黄色的石墙，沉默地趴伏在大地的边缘。但那种震撼，是直击心灵的。推开车门，第一个扑向你的是风，永不停歇、带着咸湿水汽和野草气息的强风，它呼啸着穿过耳畔，像是数百年来无数航海故事的低语。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走过售票处那扇简朴的石砌拱门，你就正式踏入了这个“世界的尽头”。脚下是坚实粗糙的地面，眼前豁然开朗。与其说这是一座要塞的内部，不如说是一片朝向大洋的荒原。最夺人眼球的，是地面上那个直径达43米的巨大石砌圆环——著名的“风之玫瑰”罗盘。它由数十块长条石放射状排列而成，尽管历经沧桑，图案依旧清晰。站在这个巨大罗盘的中心点，四面八方只有海、风和天空。你会情不自禁地张开双臂，感受那股仿佛能将你托起的力量。这里没有精致的博物馆展柜，历史就写在这寸草不生的岩石上，融在每一阵风里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当地人心中，萨格里什角不仅仅是一个景点。清晨，你会看到垂钓者坐在悬崖边缘，鱼竿伸向下方咆哮的蔚蓝；黄昏，冲浪爱好者们结束了一天的追逐，会来这里静坐，看落日沉入海平线。这座要塞早已超越了军事意义，成为一种精神图腾。它最打动人心的地方，正是这种极致的空旷与孤寂。在这里，你听不到城市的喧嚣，只有海浪永无止境地拍打悬崖的轰鸣，像是地球沉稳的心跳。它迫使你安静下来，面对最纯粹的天地，然后思考：当年那些即将驶向未知海域的年轻人，站在这同样的悬崖边，望着同一片无尽的大西洋，心中是恐惧更多，还是梦想更炽烈？`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`萨格里什要塞`} />
                <InfoRow label="英文名称" value={`Fortress of Sagres`} />
                <InfoRow label="正式名称" value={`Fortaleza de Sagres`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`萨格里什， 阿尔加维地区`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这里是15世纪葡萄牙航海家亨利王子的战略基地，被誉为欧洲大航海时代的摇篮和起点。`} />
                <InfoRow label="建筑特色" value={`一座坐落于近乎垂直的悬崖海角之上的庞大防御工事，以其标志性的“风之玫瑰”罗盘图案广场而闻名。`} />
                <InfoRow label="建筑风格" value={`以简约、实用的军事曼努埃尔风格为主，后期融入了文艺复兴时期的防御元素。`} />
                <InfoRow label="文化价值" value={`象征着人类探索未知世界的勇气与雄心，是地理大发现时代留存至今最富有精神感召力的地标之一。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`夏季（5月至9月）开放时间为上午9:30至晚上8:00；冬季（10月至次年4月）开放时间为上午9:00至下午5:30。最后入场时间为关闭前30分钟。全年开放，但圣诞节（12月25日）和元旦（1月1日）关闭。天气恶劣（如强风）时，外部区域可能临时关闭以确保安全。`} />
              <InfoRow label="门票价格" value={`成人票价为3欧元。65岁以上老人及持有有效学生证的青年（15-25岁）可享受5折优惠，票价为1.5欧元。14岁以下儿童免费入场。持有葡萄牙文化遗产7日通票可免费进入。门票在入口处现场购买，支持现金和信用卡支付。`} />
              <InfoRow label="地址" value={`Fortaleza de Sagres, 8650-360 Sagres, Portugal`} />
              <InfoRow label="交通方式" value={`最近的国际机场是法鲁机场（FAO）。从法鲁机场出发，最便捷的方式是租车自驾，沿A22高速公路西行，转入N125和N268公路，全程约100公里，耗时1小时15分钟左右。若使用公共交通，先从法鲁机场乘巴士或出租车到法鲁火车站，再乘坐火车到拉古什（Lagos），耗时约1.5小时。从拉古什火车站外的巴士站，乘坐前往萨格里什的巴士（约每1-2小时一班），车程约40分钟，在萨格里什镇中心下车后，步行约20-30分钟或搭乘当地出租车即可抵达要塞入口。巴士班次在冬季会减少，建议提前在拉古什的巴士站确认时刻表。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从一位几乎从未亲自远航的王子说起。1419年，葡萄牙国王若昂一世的第三子——唐·阿方索·恩里克，也就是我们熟知的亨利王子，被任命为阿尔加维的总督。这位对航海、数学和地图学充满热情的王子，没有选择繁华的里斯本或拉古什，而是将目光投向了欧洲大陆的西南角，这个叫做萨格里什的荒凉海岬。为什么是这里？因为它三面环海，扼守着通往非洲西海岸和大西洋群岛的航线，是绝佳的瞭望哨和出发基地。更因为它的与世隔绝，正好可以让他远离宫廷的纷扰，专心致志地经营他那项伟大的“事业”：探索海洋。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，萨格里什从一个小渔村，迅速变成了15世纪欧洲最顶尖的“航海科技与思想中心”。亨利王子在这里汇集了当时地中海世界最优秀的人才：来自马略卡岛的犹太地图绘制师，精通阿拉伯星盘和象限仪的穆斯林天文学家，经验丰富的意大利和北欧船长，还有胆大包天的葡萄牙本土水手。他们在这个海风呼啸的堡垒里争吵、计算、绘制星图、改进卡拉维尔帆船。那些改变了世界的地图，在烛光下被一次次修改；那些关于季风、洋流和海岸线的破碎信息，在这里被拼接成航海的秘籍。可以说，达·伽马绕过好望角的航线，麦哲伦环球航行的勇气种子，最早都是在这个罗盘广场上被孕育出来的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最初的堡垒规模远不如今日所见。它更像一个功能齐全的航海学院和造船厂。我们今天看到的绵延数百米的城墙，主要是在16世纪后，为了抵御北非海盗和西班牙舰队的威胁而不断加固扩建的。要塞的命运并非一帆风顺。1587年，著名的英国海盗弗朗西斯·德雷克爵士袭击并严重破坏了这里。而更大的打击来自1755年那场摧毁里斯本的大地震，剧烈的震动引发海啸，萨格里什要塞的大部分建筑轰然倒塌，沉入海底或化为废墟，只剩下今天我们看到的这些坚固墙基和那个神秘的罗盘广场。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在随后的几个世纪里，萨格里什渐渐被遗忘，重新变回一个偏远的渔村角落。直到20世纪，人们才重新认识到它无可比拟的历史价值。考古发掘慢慢展开，那个被沙土掩埋的罗盘广场重见天日。1960年，为纪念亨利王子逝世500周年，葡萄牙政府对其进行了系统的修复和加固。不过，修复工作非常谨慎，没有试图重建昔日的宫殿或塔楼，而是着重保护那份苍凉的遗址感。他们明白，萨格里什的力量不在于华丽的建筑，而在于这片土地本身所承载的、面向未知的雄心。如今，它安静地矗立在原地，不再发射战船，而是继续发射着关于探索与勇气的永恒信号。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在下午早些时候（例如2点后）抵达萨格里什要塞。这个时间点避开了可能的人流小高峰（通常上午有旅游团），并且有充足的时间在内部探索，最终在黄昏时分迎接震撼的日落，那是要塞一天中最美的时刻。整体游览需要预留至少2.5到3.5小时。节奏应该是缓慢而沉浸式的：先沿着城墙感受其宏大的尺度，再深入中心区域细细品味罗盘广场和教堂遗址，最后在悬崖边缘找一个安静角落坐下，让感官完全被自然和历史的力量所包裹。这样的安排能让你从容地走过历史的脉络，并在光影最魔幻的时刻，与这座要塞的灵魂对话。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双防滑、抓地力好的鞋子，悬崖边缘没有护栏，地面岩石可能因海风常年吹拂而变得光滑。要塞内几乎没有遮阴处，阳光和海风都极其强烈，必须做好防晒（帽子、墨镜、防晒霜）和防风（一件防风外套）准备。千万不要为了拍照而跨越安全警戒线，悬崖边缘的岩石结构可能并不稳固。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主入口进入后，不要急着冲向中心，先向右拐，沿着高耸的南侧城墙慢慢行走，让大西洋的壮阔全景逐渐展开在你左侧。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到城墙尽头，在圣维森特角的绝壁上方停下，感受脚下的海浪在数十米深的洞穴中轰鸣撞击，化作碎玉般的白色泡沫。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`折返回来，径直走向要塞心脏——那个巨大的“风之玫瑰”石砌罗盘，站在它的正中心，闭上眼睛感受四面八方吹来的风，想象自己是航海图上的一个原点。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观罗盘广场北侧那间小巧的白色教堂（努萨·森霍拉·达·格拉萨教堂），走进昏暗的内部，看看那尊朴素的航海保护神像和挂满的渔船模型还愿物。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找城墙上一处面向西方的古老炮位，倚靠在冰冷的石垛上，看着夕阳将整个海面、悬崖和城墙染成从金黄到绯红的渐变色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落之后，人群散去，沿着东侧较为低矮的城墙往回走，看晚霞的余晖在粗糙的石墙上留下最后一道温暖的光边。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开前，在出口处的小型博物馆里快速浏览一下那些出土的陶器碎片和航海仪器复制品，为刚才的感性体验加上一个理性的注脚。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`南侧城墙中段缺口处`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后，阳光西斜，从这个缺口可以框进蜿蜒的城墙曲线、罗盘广场的一角以及远方无尽的海洋，构图极具层次感和故事性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`罗盘广场的放射线尽头`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，趴在一条放射状的石条末端低角度拍摄，让石条作为引导线直指远处海平线上的落日，拍出穿越时空的纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣维森特角悬崖视角`}</h4>
                  <p className="text-sm text-gray-700">{`清晨（如果开放）或光线柔和的下午，将相机贴近地面，拍摄长满顽强野花的悬崖边缘与下方深邃蔚蓝的海水、以及远处另一处海角的对比，表现自然的野性之美。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`要塞东墙与灯塔同框`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚蓝调时刻，从要塞外部靠近灯塔的步道上，用长焦镜头压缩空间，将古朴的要塞城墙与现代化的红白条纹灯塔一同纳入画面，形成历史与当下的对话。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`这里的风极大，使用三脚架时一定要确保绝对稳定，最好在三脚架下方悬挂重物。拍摄海景时，可以尝试使用减光镜（ND滤镜）来延长曝光时间，将澎湃的海浪雾化成柔滑的丝绸质感。尊重环境，不要为了构图而踩踏或移动那些已有数百年历史的脆弱石砌结构。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`冲浪者之选`}</h4>
                  <p className="text-sm text-blue-800">{`萨格里什镇中心步行可达的冲浪主题旅舍，氛围轻松国际化的公共厨房里总能交到朋友，租一块板第二天清早就能去世界级浪点`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`悬崖隐居`}</h4>
                  <p className="text-sm text-green-800">{`坐落在要塞附近私人地块上的极简主义几何白色别墅，拥有无遮挡的全海景落地窗和私人露台，夜晚只听得到海浪声`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`渔港风情`}</h4>
                  <p className="text-sm text-yellow-800">{`位于萨格里什小渔港码头边的家庭式客栈，房间窗户正对归航的渔船，早晨能被海鲜市场热闹却不吵闹的市井声唤醒`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`自然疗愈`}</h4>
                  <p className="text-sm text-purple-800">{`距离要塞车程十分钟、隐藏在海岸松林中的生态度假村，采用可持续设计，拥有盐水泳池和瑜伽平台，是暴走一天后放松身心的完美绿洲`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`萨格里什不是一个夜生活丰富的城镇，夜晚的宁静是其魅力的一部分。夏季（尤其是八月）住宿非常紧张，价格也最高，务必提前数月预订。如果想获得更丰富的餐饮选择，可以考虑住在拉古什，但会失去清晨或黄昏独享要塞氛围的珍贵机会。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开萨格里什很久之后，那风声和海浪声似乎还留在耳朵里。我发现，它给我的不是一种关于辉煌胜利的激昂感，而是一种深沉的宁静与清醒。在这个被社交媒体和即时信息填满的时代，我们似乎知道很多，却又对真正的“未知”充满恐惧。而萨格里什，这个面向虚无浩瀚的所在，像一个巨大的心灵净化器。它让你站在人类知识曾经终结的地方，回头看看我们来时的路，再望向我们去往的方向。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位热爱深度游的旅人，都应该来这里站一站。不是为了收集又一个世界遗产的图章，而是为了完成一次与自己内心的对话。在这里，你会明白，真正的探索精神，不在于征服了多少土地，而在于永远保持对远方的渴望，并敢于在风浪中校准自己的罗盘。当夕阳最后一丝光辉沉入亨利王子的海平面之下，灯光亮起的不是一座城堡，而是你心中那颗或许已被日常尘封的、好奇的星星。这就是萨格里什永不褪色的魔力，它不是一个终点，而是一个起点，永远都是。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/piodao-schist-village-portugal" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    皮
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">皮奥当</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Piódão</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/obidos-wedding-town-portugal" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥比杜什婚礼之城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Óbidos</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/coimbra-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科英布拉老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Coimbra Old Town</p>
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
