import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布雷达 Breda｜探访荷兰最宁静的贝居安会院与拿骚家族皇权摇篮 - 最佳欧洲景点',
  description: '说实话，在抵达布雷达之前，我对它的想象无非是又一座精致的荷兰运河小镇。但当我从火车站走出来，沿着宽阔的林荫道向老城走去时，空气里的感觉就不同了。这里没有阿姆斯特丹那种扑面而来的旅游喧嚣，也没有乌特列支大学城的年轻躁动。阳光透过高大栗树的叶子，在红砖人行道上洒下晃动的光斑，耳边是电车叮叮当当驶过的规律...',
}

export default function BredaBeguinageNassauPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '布雷达', href: '/attractions/breda-beguinage-nassau' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`布雷达・Breda・荷兰・布雷达`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，在抵达布雷达之前，我对它的想象无非是又一座精致的荷兰运河小镇。但当我从火车站走出来，沿着宽阔的林荫道向老城走去时，空气里的感觉就不同了。这里没有阿姆斯特丹那种扑面而来的旅游喧嚣，也没有乌特列支大学城的年轻躁动。阳光透过高大栗树的叶子，在红砖人行道上洒下晃动的光斑，耳边是电车叮叮当当驶过的规律声响，混合着咖啡馆飘出的现磨咖啡豆香气。当地人骑着样式老旧的自行车从容地从你身边掠过，车篮里装着刚买的面包和鲜花。这是一种被精心呵护的、不张扬的富足与安宁。
而这份安宁最极致的体现，就在那座隐匿于市中心的贝居安会院。穿过一扇毫不起眼的拱形木门，仿佛突然按下了世界的静音键。门外的车流声、谈话声瞬间消失，取而代之的是脚踩在细碎砂石小径上的沙沙声，以及无处不在的、湿润的青草与泥土气息。眼前是一个被低矮白色小屋环绕的完美绿色庭院，中央草坪修剪得如同绒毯，古老的梨树投下斑驳的阴影。这里不是博物馆，而是依然有人居住的家园。你会看到某扇窗台上放着喝了一半的茶杯，某户门前停着一辆女式自行车，生活在此安静地流淌，神圣与世俗的边界在这里温柔地模糊了。
但布雷达绝不仅仅只有宁静。当你从会院出来，拐个弯，宏大的格罗特教堂尖塔便赫然耸立眼前。这座晚期哥特式的巨物提醒着你，这座城市曾处于欧洲权力博弈的漩涡中心。教堂里安葬着最早的拿骚家族成员，他们的野心、联姻与征战，最终孕育了今天的荷兰王室。走在城堡广场上，抚摸西班牙厅文艺复兴风格的立面，你能感受到另一种截然不同的力量——属于诸侯、统治与扩张的力量。布雷达最迷人的矛盾就在这里：一方是内向的、寻求心灵庇护的女性社区；另一方是外向的、企图留名青史的贵族王朝。它们奇迹般地共存于同一片城墙之内。
所以，布雷达的核心魅力，就在于这种“双重灵魂”。它让你在同一天里，既能体验到近乎冥想的寂静，又能翻阅一部波澜壮阔的王朝史诗。这种静谧与雄心的对话，贯穿在每一条运河的倒影里，每一块广场的铺路石下。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`说实话，在抵达布雷达之前，我对它的想象无非是又一座精致的荷兰运河小镇。但当我从火车站走出来，沿着宽阔的林荫道向老城走去时，空气里的感觉就不同了。这里没有阿姆斯特丹那种扑面而来的旅游喧嚣，也没有乌特列支大学城的年轻躁动。阳光透过高大栗树的叶子，在红砖人行道上洒下晃动的光斑，耳边是电车叮叮当当驶过的规律声响，混合着咖啡馆飘出的现磨咖啡豆香气。当地人骑着样式老旧的自行车从容地从你身边掠过，车篮里装着刚买的面包和鲜花。这是一种被精心呵护的、不张扬的富足与安宁。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而这份安宁最极致的体现，就在那座隐匿于市中心的贝居安会院。穿过一扇毫不起眼的拱形木门，仿佛突然按下了世界的静音键。门外的车流声、谈话声瞬间消失，取而代之的是脚踩在细碎砂石小径上的沙沙声，以及无处不在的、湿润的青草与泥土气息。眼前是一个被低矮白色小屋环绕的完美绿色庭院，中央草坪修剪得如同绒毯，古老的梨树投下斑驳的阴影。这里不是博物馆，而是依然有人居住的家园。你会看到某扇窗台上放着喝了一半的茶杯，某户门前停着一辆女式自行车，生活在此安静地流淌，神圣与世俗的边界在这里温柔地模糊了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但布雷达绝不仅仅只有宁静。当你从会院出来，拐个弯，宏大的格罗特教堂尖塔便赫然耸立眼前。这座晚期哥特式的巨物提醒着你，这座城市曾处于欧洲权力博弈的漩涡中心。教堂里安葬着最早的拿骚家族成员，他们的野心、联姻与征战，最终孕育了今天的荷兰王室。走在城堡广场上，抚摸西班牙厅文艺复兴风格的立面，你能感受到另一种截然不同的力量——属于诸侯、统治与扩张的力量。布雷达最迷人的矛盾就在这里：一方是内向的、寻求心灵庇护的女性社区；另一方是外向的、企图留名青史的贵族王朝。它们奇迹般地共存于同一片城墙之内。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，布雷达的核心魅力，就在于这种“双重灵魂”。它让你在同一天里，既能体验到近乎冥想的寂静，又能翻阅一部波澜壮阔的王朝史诗。这种静谧与雄心的对话，贯穿在每一条运河的倒影里，每一块广场的铺路石下。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`布雷达`} />
                <InfoRow label="英文名称" value={`Breda`} />
                <InfoRow label="正式名称" value={`Breda`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`布雷达`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`荷兰独立战争中具有关键战略意义的要塞城市，更是奥兰治-拿骚家族的权力发祥地，与荷兰王室血脉直接相连。`} />
                <InfoRow label="建筑特色" value={`完美融合了中世纪幽静的宗教社区、宏伟的晚期哥特式教堂与文艺复兴时期权贵府邸的城镇风貌。`} />
                <InfoRow label="建筑风格" value={`以北布拉班特省的晚期哥特式风格为主导，混合了文艺复兴与古典主义的元素。`} />
                <InfoRow label="文化价值" value={`是一座活着的“叠影之城”，虔诚朴素的贝居安女修士精神与雄心勃勃的欧洲王室家族史诗在此和谐共生。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`贝居安会院庭院全天开放，住宅为私人区域请勿打扰。格罗特教堂开放时间通常为周一至周六上午10点至下午5点，周日用于礼拜下午开放。城堡广场区域可随时游览，但内部建筑（如西班牙厅）有特定的导览时间，通常需提前预约。建议出行前在官网核实，荷兰的公共假日可能会影响开放安排。`} />
              <InfoRow label="门票价格" value={`漫步古城本身免费。格罗特教堂参观自愿捐赠，建议2-5欧元。进入城堡广场的西班牙厅或参与城堡导览费用约为10-15欧元。城市博物馆门票约12欧元。贝居安会院免费进入，但欢迎向维护基金会进行小额捐款。`} />
              <InfoRow label="地址" value={`Begijnhof Breda, 4811 XT Breda, Netherlands`} />
              <InfoRow label="交通方式" value={`从阿姆斯特丹史基浦机场出发最便捷：乘坐直达的城际列车（Intercity）前往布雷达中央车站，车程约1小时10分钟，班次频繁，每15-30分钟一班，可在机场火车站直接购票或使用OV卡。从鹿特丹中央车站出发更近，车程仅25分钟。布雷达古城非常紧凑，从中央火车站步行约15分钟即可抵达贝居安会院和主广场，沿途风景优美。城内租一辆自行车是体验本地生活的最佳方式。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解布雷达，钥匙就在“拿骚”这个姓氏里。故事得追溯到中世纪晚期，当时这片土地属于布拉班特公爵。一个来自德国莱茵兰的家族——拿骚家族，通过精明的婚姻和政策，在1403年获得了布雷达领主的头衔。他们可不是来此养老的，第一代领主恩格尔伯特一世就开始将布雷达从一个集镇，改造为一个配得上其野心的驻地。他建造了坚固的城堡（今天城堡广场的前身），并围绕它规划城市布局。你可以说，布雷达的“城市人格”中，那份骄傲与秩序的底色，就是从这时开始涂抹的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`家族的腾飞在16世纪到来。威廉一世，也就是著名的“沉默者威廉”，继承了布雷达的爵位。他最初是西班牙国王在尼德兰地区最显赫、最受信任的贵族之一，据说在布雷达的城堡里过着极其奢华的生活。然而，宗教迫害和专制统治最终点燃了他的反抗之心。尽管布雷达本身并非起义的起点，但它作为威廉的重要领地和战略要塞，瞬间被推到了荷兰独立战争（八十年战争）的风口浪尖。这座城市在西班牙与荷兰起义军之间反复易手，最著名的事件莫过于1590年的“潜船计”，一群荷兰士兵躲藏在运泥炭的船里，奇袭并夺回了被西班牙占领的城堡。这段刀光剑影的历史，为古城的砖石增添了一层坚韧的底色。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当我们在贝居安会院的静谧中沉醉时，很难想象这片净土也诞生于那个动荡的年代。会院成立于1267年，但在1535年左右迁到了现在的位置。贝居安女修士是一种独特的存在，她们发誓保持贞洁与服从，但并不立下永久的修道院誓言，可以保留个人财产，随时离开。在宗教改革与战争频仍的年代，这样一个为女性提供精神寄托与实质庇护的社区，其价值无法估量。它像风暴眼中的一颗明珠，无论外面的世界是拿骚家族的辉煌还是西班牙军队的铁蹄，门内的世界始终维持着祈祷、劳作与互助的日常节奏。这种坚韧的温柔，本身就是一种力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战争结束后，拿骚家族的命运与荷兰共和国的命运紧紧捆绑。布雷达虽然不再是政治中心，但作为奥兰治家族的祖地，它享有特殊的荣耀。17、18世纪，城市继续繁荣，建造了许多美丽的商人房屋和公共建筑。拿破仑时代，它一度被法国吞并，城堡被改造为军事学院。有趣的是，这座学院一直存续至今，为荷兰军队培养军官，所以你在街上看到穿着制服的年轻学员，可别惊讶——那是历史在现代的延续。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的布雷达，巧妙地将所有这些层次的历史编织进了城市肌理。你看到的不再是非此即彼的片段，而是一个连贯的叙事：从封建领主的雄心，到独立战争的烽火，再到黄金时代的余晖，以及贯穿始终的、平凡人对安宁生活的追求。它没有试图将某一段历史供奉起来，而是让它们全部成为当下生活自然而然的一部分。这就是为什么走在布雷达，你感觉不到历史的沉重，只感到一种深厚的、被时间滋养的从容。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你在一个晴朗的早晨，大约9点前抵达布雷达中央车站。这样你可以迎着清新的晨光开始探索，完美避开可能的人群（虽然这里游客本就不多）。整体游览可以安排充实的一整天，节奏宜慢不宜快，核心是体会“静谧”与“历史”两种情绪的交替。路线设计为一条环线，从最具生活气息的火车站区域开始，先沉浸于贝居安会院的宁静，再步入拿骚家族的宏大历史现场，最后沿着运河感受城市的日常脉搏，在傍晚时分回到起点附近用餐。这样的安排符合认知的节奏，由静入动，再由历史回归生活。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`教堂和博物馆通常在周一闭馆或开放时间缩短，务必提前规划。布雷达非常安全，但自行车道与人行道有时区分不明显，注意避让高速骑行的本地人。穿着舒适的步行鞋至关重要，因为最美的风景都在需要漫步探索的街巷里。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从火车站出来先别急着看地图，任由自己沿着那条漂亮的林荫道（Wilhelminasingel）被引向老城，感受本地人通勤的日常气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到那扇低调的绿色木门，悄悄走进贝居安会院的庭院，在中央的长椅上坐至少二十分钟，看光与影在草坪和白屋墙上缓慢移动。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从会院的南门出来，眼前豁然开朗，径直走向那座庞然大物——格罗特教堂，别忘了进入地下的王子礼拜堂，在幽静中瞻仰早期拿骚家族成员的华美石棺。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观完教堂后，绕到它的东侧，步入宏大的城堡广场，仰视那栋有着精美山墙的西班牙厅，想象沉默者威廉曾在此举行盛宴。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过广场，找一条小路下到运河边（比如穿过Kasteelplein街），沿着蜿蜒的Ginneken运河散步，看天鹅游过两岸色彩柔和的百年老屋倒影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻着麦芽香气找到本地著名的“德 Beyerd”酿酒厂酒吧，在它的露天座点一杯当地酿造的Bredaas啤酒，观察往来行人。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`用下午的时光漫无目的地钻进老城东北部的那些鹅卵石巷弄，比如在Haagweg或Ginnekenmarkt附近，总有令人惊喜的小店和咖啡馆等你发现。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间和体力允许，登上格罗特教堂的塔楼（需预约导览），在黄昏时分俯瞰全城，看砖红色的屋顶在夕阳下连绵成温暖的海洋。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`贝居安会院中央庭院的长椅视角`}</h4>
                  <p className="text-sm text-gray-700">{`选择午后两三点，阳光斜射时，从长椅位置拍摄一侧的白屋与梨树，将绿草作为前景，构图力求极简与对称，捕捉神圣的几何美感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`格罗特教堂北侧运河桥上的倒影`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚光线柔和时，站在教堂北面小桥（靠近Kasteelplein）上，将教堂雄伟的侧面与尖塔连同其在运河中的完美倒影一同纳入镜头，使用低角度以增强气势。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城堡广场西班牙厅的山墙特写`}</h4>
                  <p className="text-sm text-gray-700">{`下午的阳光能很好地照亮西班牙厅精致的文艺复兴式山墙，站在广场对面，用长焦镜头压缩空间，聚焦于山墙上的雕塑细节和砖石纹理，拍出历史的浮雕感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`Ginneken运河某段弯曲处的街景`}</h4>
                  <p className="text-sm text-gray-700">{`找一个运河弧线优美的地方，等待一艘小船或几只天鹅进入画面，将运河的弧线、色彩斑斓的房屋、对岸的行人一同构成一幅生动的本地生活画卷，最佳时间是晴朗的白天。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`老城巷弄中的一扇门或一个角落`}</h4>
                  <p className="text-sm text-gray-700">{`放弃宏大叙事，在Haagweg附近的巷子里寻找一扇漆色斑驳的蓝色门、一个爬满藤蔓的墙角，利用侧光突出质感，拍出充满故事感和岁月痕迹的特写。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在贝居安会院拍照务必保持绝对的安静与尊重，切勿对着住宅的窗户拍摄，以免打扰居民。荷兰天气多变，善用阴天均匀柔和的光线拍摄建筑细节，而蓝天白云则更适合拍摄运河与广场的全景。无人机飞行在城市中心有严格限制，未经许可请勿使用。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史中心民宿`}</h4>
                  <p className="text-sm text-blue-800">{`入住运河边一栋17世纪商人房屋的阁楼改造的公寓，拥有倾斜的木梁天花板和能看到河流的小窗户，晚上能听到教堂钟声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计型酒店体验`}</h4>
                  <p className="text-sm text-green-800">{`选择由老邮局改造的现代设计酒店，混凝土结构与古典外观碰撞，屋顶酒吧拥有俯瞰全城的最佳视角，适合追求风格的城市探索者。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`宁静庄园风格`}</h4>
                  <p className="text-sm text-yellow-800">{`位于老城边缘一座带私人花园的精品酒店，房间宽敞优雅，早餐在花房里进行，仿佛住在某位拿骚贵族朋友的乡村别墅里，离喧嚣一步之遥却又置身事外。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`实用便捷之选`}</h4>
                  <p className="text-sm text-purple-800">{`火车站附近的高评价现代酒店，交通极度便利，房间明亮整洁，是探索了一天之后想要迅速得到舒适休息的完美基地。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果追求极致宁静，请务必选择房间不临街的住宿，因为老城某些街道在周末夜晚可能比较热闹。布雷达酒店数量有限，尤其在夏季或大型活动期间，提前数月预订是明智之举。住在历史中心意味着一切都可以步行到达，完全无需用车。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开布雷达好些日子了，我脑海里反复回放的，不是某座建筑的具体轮廓，而是两种感觉的交替：一种是贝居安会院里，那阳光照射下青草蒸发出的、带着凉意的清香；另一种是格罗特教堂地窖中，石头棺椁散发出的、沉甸甸的微冷。这两种气息，一暖一冷，一升一沉，恰好构成了这座城市的全部呼吸。它告诉我，历史不仅仅是王侯将相的丰功伟绩，更是无数平凡个体对一片安宁屋檐的世代守护。在布雷达，宏伟史诗与静谧日常不是对立章节，而是同一本书的上下两页，你可以随时翻阅、对照、沉思。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个人人追逐“必打卡”网红景点的时代，布雷达提供了一种稀缺的旅行价值：深度的浸润感。它不需要你惊叹，只邀请你体会。体会权力与信仰如何塑造空间，体会战争与和平如何在砖石上留下年轮，更体会一座城市如何在数百年变迁中，始终为自己保留一个宁静的、青翠的、向内探寻的角落。对于真正的深度游旅人而言，来这里不仅仅是为了看另一个地方，更是为了验证一种可能：一种让历史活着并与现代温柔共处的可能。这份不张扬的、厚重的从容，足以让任何匆忙的脚步慢下来，让任何浮躁的心沉静下去。这，或许就是旅行能带给我们的最好礼物。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/harlingen-frisian-port-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈灵根</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Harlingen</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/oudewater-witch-weighing-house" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥德瓦特女巫称重房</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Oudewater Witch Weighing House</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kampen-hanza-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    坎
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">坎彭汉萨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kampen Hanseatic Old Town</p>
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
