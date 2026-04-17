import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '劳马古城 Old Rauma｜走入北欧保存最完好的木构童话镇 - 最佳欧洲景点',
  description: '第一眼看到劳马古城，你会误以为自己闯进了一本被遗忘的北欧童话书。这里没有高耸的尖塔或宏伟的广场，只有一片低矮、紧凑的木屋，像一群穿着深褐色外套、挤在一起取暖的老朋友。空气里有一股独特的味道——那是陈年松木被夏日阳光烘烤后散发出的微甜树脂香，混合着从某家后院飘来的、刚刚修剪过的青草气息。脚下是被岁月磨...',
}

export default function OldRaumaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '劳马古城', href: '/attractions/old-rauma' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`劳马古城・Old Rauma・芬兰・劳马`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到劳马古城，你会误以为自己闯进了一本被遗忘的北欧童话书。这里没有高耸的尖塔或宏伟的广场，只有一片低矮、紧凑的木屋，像一群穿着深褐色外套、挤在一起取暖的老朋友。空气里有一股独特的味道——那是陈年松木被夏日阳光烘烤后散发出的微甜树脂香，混合着从某家后院飘来的、刚刚修剪过的青草气息。脚下是被岁月磨得温润光滑的圆石路，走起来有点凹凸不平，鞋子与石头摩擦发出好听的沙沙声，仿佛在和你低声诉说着几百年的故事。
这不是一个冰冷的历史遗址，而是一个活生生的社区。白色的蕾丝窗帘在方格窗后轻轻摆动，窗台上摆着天竺葵，开得正艳。你可能会遇见一位老爷爷正慢悠悠地骑着他的老式自行车，车篮里装着刚买的黑麦面包；或者听到隔壁木工房里传来有节奏的敲击声。时间在这里仿佛调慢了流速，居民们依然在这些拥有两三百年历史的木屋里生活、煮咖啡、侍弄花草。古城的心脏是集市广场，不大，却充满人情味，每周的市集日，这里会摆满新鲜浆果、渔民带来的波罗的海鲱鱼，和当地奶奶手工编织的蕾丝。
它最打动人的魅力，正源于这种“活着”的质感。你感受到的不是被玻璃罩起来的辉煌过去，而是一种坚韧、朴素且充满生活智慧的传统，如何在现代世界里被温柔地守护着。每一扇门、每一处斑驳的油漆、甚至每一块为了防潮而垫在屋角的大石头，都写满了实用的生存哲学和对家园的深情。在这里，历史不是教科书上的章节，而是早晨咖啡的香气，是午后门廊下打盹的猫，是黄昏时分从港口方向传来的、若有若无的海风咸味。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到劳马古城，你会误以为自己闯进了一本被遗忘的北欧童话书。这里没有高耸的尖塔或宏伟的广场，只有一片低矮、紧凑的木屋，像一群穿着深褐色外套、挤在一起取暖的老朋友。空气里有一股独特的味道——那是陈年松木被夏日阳光烘烤后散发出的微甜树脂香，混合着从某家后院飘来的、刚刚修剪过的青草气息。脚下是被岁月磨得温润光滑的圆石路，走起来有点凹凸不平，鞋子与石头摩擦发出好听的沙沙声，仿佛在和你低声诉说着几百年的故事。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这不是一个冰冷的历史遗址，而是一个活生生的社区。白色的蕾丝窗帘在方格窗后轻轻摆动，窗台上摆着天竺葵，开得正艳。你可能会遇见一位老爷爷正慢悠悠地骑着他的老式自行车，车篮里装着刚买的黑麦面包；或者听到隔壁木工房里传来有节奏的敲击声。时间在这里仿佛调慢了流速，居民们依然在这些拥有两三百年历史的木屋里生活、煮咖啡、侍弄花草。古城的心脏是集市广场，不大，却充满人情味，每周的市集日，这里会摆满新鲜浆果、渔民带来的波罗的海鲱鱼，和当地奶奶手工编织的蕾丝。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它最打动人的魅力，正源于这种“活着”的质感。你感受到的不是被玻璃罩起来的辉煌过去，而是一种坚韧、朴素且充满生活智慧的传统，如何在现代世界里被温柔地守护着。每一扇门、每一处斑驳的油漆、甚至每一块为了防潮而垫在屋角的大石头，都写满了实用的生存哲学和对家园的深情。在这里，历史不是教科书上的章节，而是早晨咖啡的香气，是午后门廊下打盹的猫，是黄昏时分从港口方向传来的、若有若无的海风咸味。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`劳马古城`} />
                <InfoRow label="英文名称" value={`Old Rauma`} />
                <InfoRow label="正式名称" value={`Old Rauma`} />
                <InfoRow label="国家" value={`芬兰`} />
                <InfoRow label="城市" value={`劳马`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`北欧最大、保存最完好的木结构古城之一，是芬兰历史城区的杰出典范。`} />
                <InfoRow label="建筑特色" value={`密集而和谐的低矮木屋群，以古朴的深褐色为主调，点缀着白色窗框和缤纷的小花园。`} />
                <InfoRow label="建筑风格" value={`以北欧新文艺复兴风格为主，融合了本地传统木构技术与哥特复兴式细节。`} />
                <InfoRow label="文化价值" value={`一座“活着的博物馆”，生动展现了波罗的海地区传统木构城镇的社区生活、手工艺（特别是蕾丝制作）和航海贸易历史。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城区域本身是开放的居住区，全天24小时可自由漫步。区域内的小型博物馆和店铺开放时间各异，通常在夏季（6月至8月）工作日的10:00至17:00，周末11:00至15:00开放；冬季（9月至次年5月）开放时间大幅缩短或仅预约开放，许多私人木屋不对外开放参观。建议出发前在劳马旅游局官网确认具体景点的最新时间表。`} />
              <InfoRow label="门票价格" value={`漫步古城公共区域免费。进入核心的劳马博物馆（Rauma Museum）联票约为12欧元，包含两到三处历史建筑。学生、儿童及团体享有折扣，具体价格随季节微调。部分季节性开放的私人工艺作坊或艺术家工作室可能需要少量参观费或自愿捐赠。`} />
              <InfoRow label="地址" value={`Kauppakatu 13, 26100 Rauma, Finland`} />
              <InfoRow label="交通方式" value={`从赫尔辛基出发最方便。乘坐芬兰国铁（VR）的城际列车，从赫尔辛基中央火车站直达劳马火车站，车程约3小时，班次每日数趟，建议提前在线购票以获优惠。从劳马火车站到古城中心步行仅需15分钟，出租车5分钟即达。若自驾，从赫尔辛基沿E8公路向西北行驶约230公里，古城外围设有收费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`劳马的故事始于1442年，那一年它获得了城镇特许状，但这座城市的灵魂，早在维京时代就已在此地徘徊。它坐拥波罗的海畔天然良港的优势，注定与海洋和贸易血脉相连。十五、十六世纪，劳马作为汉萨同盟贸易网络中的重要一环而繁荣起来。你可以想象那时的码头是多么繁忙：运载着焦油、木材、黄油和皮革的船只从这里驶向欧洲大陆，又带回盐、布匹和葡萄酒。财富随着海浪涌来，城镇开始扩张，但一场几乎毁灭性的火灾，为它的未来定下了意想不到的基调。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1640年和1682年的两场大火，几乎将早期的木结构城镇夷为平地。这场灾难却成了重生的契机。当时的重建严格遵循了新的城镇规划法令：街道被拓宽以防火势蔓延，房屋必须采用更厚实的原木建造，并且相邻房屋的山墙不能紧贴，必须留出空隙。我们今天看到的古城格局，正是那次“凤凰涅槃”后的结果。街道网络像一幅严谨的网格，但漫步其中却丝毫感觉不到刻板，因为每栋房子都在统一的规则下，长出了自己独一无二的个性。工匠们运用传统的“圆木接榫”技术，不用一根钉子，就建起了这些能屹立数百年的家园。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`十八到十九世纪是劳马的“黄金时代”。航海业达到顶峰，拥有远洋船队的船主家族积累了巨大财富。这些新贵们不满足于朴素的木屋，他们请来建筑师，为房屋外观注入当时流行的新文艺复兴风格。于是，你看到了那些精美的装饰性木雕面板、优雅的顶棚镶边、还有被称为“风眼”的精致阁楼通气窗。门廊被精心设计，有些甚至像微缩的希腊神庙立面。这些装饰并非浮夸的炫耀，而是航海家庭向大海祈求平安的象征，也是财富与审美的低调宣言。与此同时，另一种细腻的艺术在妇女们手中诞生——劳马蕾丝。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`蕾丝制作传统大约在十八世纪中叶传入劳马，迅速成为镇上女性最重要的手工艺。在丈夫出海经年不归的日子里，妇女们聚在一起，用纤细的线轴编织出极其复杂精美的图案，最初是为了装饰自家的亚麻布制品，后来也用于补贴家用。这项技艺代代相传，让劳马蕾丝享誉世界，甚至成为芬兰国家身份的一个符号。当你今天在古城的小店里看到那些白发苍苍的“蕾丝奶奶”依然手指翻飞时，你看到的是一段流动的、坚韧的女性历史。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`进入二十世纪，当全球城镇都在追求“现代化”，纷纷拆旧建新时，劳马却走上了一条不同的路。当地人珍视他们的木屋遗产，展开了系统性的保护。这份执着在1991年得到了世界的认可，联合国教科文组织将老劳马列入世界遗产名录，理由是它“展现了北欧传统木构城镇的独特风貌，并且是一个保存完好的、活着的社区典范”。如今，古城里依然住着大约800位居民，他们与来自世界各地的游客共享着这片时空交织的奇妙街巷，让历史在咖啡杯的轻响和自行车的铃声中，继续呼吸。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正品味劳马，建议安排一整天时间，并抱着“迷失”的心态。最佳抵达时间是清晨九点前，此时旅游团尚未涌入，阳光斜射，给木屋外墙涂上金黄，本地居民开始一天的生活，烟火气十足。整体游览节奏务必放慢，以步行为唯一方式。路线可以设计为从外围感受整体氛围，再深入核心区域探访细节，最后在港口边以海景收尾。这样的安排能让你从宏观到微观，层层深入地体验这座木构古城的肌理与灵魂。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`古城内许多木屋是私人住宅，请务必尊重居民隐私，不要擅自进入花园或透过窗户张望。夏季是旅游旺季，中午至下午时段主街人流较多，建议将室内参观（如博物馆）安排在这时，清晨和黄昏则留给户外漫步。冬季来访虽冷，但雪覆木屋的景致绝美，且几乎独享整个古城，但需穿戴防滑保暖的鞋子。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从古老的“海之门”遗址附近进入，沿着主要街道Kauppakatu慢慢走，让眼睛适应那连绵不绝的深褐色木墙和纯净的白色窗框。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拐进窄得几乎只能容一人通过的“牵牛花小巷”，用手触摸那些因为无数人经过而被磨得发亮的原木墙角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在集市广场中央的旧市政厅（现为劳马博物馆主馆）前停下，听广场上的钟声，观察四周建筑山墙上各不相同的装饰性风向标。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访一家仍在运营的蕾丝工坊，静静看一会匠人如何将几十个线轴在垫枕上飞舞，编织出薄如蝉翼的复杂图案。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到那间不起眼的“基尔乔家博物馆”，钻进低矮的门洞，体验18世纪一个普通航海商人家中狭窄而温馨的真实生活空间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着铺满鹅卵石的“鞋匠街”往西走，留意那些门牌上的古老职业标志，想象这里曾经住满了为水手服务的手艺人。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到古城西端的港口区，坐在长椅上，看波罗的海平静的海水与停泊的白色帆船，感受海风如何塑造了这座城镇的性格。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在夕阳西下时，回到古城中心，找一家由老木屋改造的咖啡馆，点一杯芬兰咖啡配肉桂卷，看金色的余晖渐渐染红木屋的屋顶。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`“牵牛花小巷”纵深构图`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点的侧光最能凸显小巷的深邃与木纹的质感，站在巷口，将蜿蜒的小路和两侧高耸的木墙收入镜中，等待一个当地人骑车或走过作为点睛之笔。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`集市广场仰拍风向标`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗的白天，站在广场中心，用广角镜头仰拍旧市政厅的山墙，将精致的风向标、木雕装饰和芬兰的蓝天一同构进画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`蕾丝工坊的窗景特写`}</h4>
                  <p className="text-sm text-gray-700">{`早晨光线柔和时，从工坊窗外向内拍摄，聚焦于老人布满皱纹的双手、飞舞的线轴和已完成的蕾丝细节，营造故事感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`港口边的全景背影`}</h4>
                  <p className="text-sm text-gray-700">{`黄昏时分，走到港口防波堤上，以古城一片宁静的木屋屋顶为背景，拍摄人物看海的背影，色彩温暖，意境悠远。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`某处花园木门与信箱`}</h4>
                  <p className="text-sm text-gray-700">{`随时发现那些被主人精心打理的小花园，聚焦于色彩鲜艳的木门、古朴的信箱和一丛野花，捕捉古城生活化的诗意细节。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`芬兰人非常注重隐私，拍摄居民或他们的房屋内部务必事先征得同意，一个微笑和手势就能沟通。冬季拍摄雪景要注意相机电池保温，低温耗电极快。夏季的“白夜”时节，晚上十点后的光线依然梦幻柔和，是拍摄空寂街巷的黄金时间。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`古城核心民宿`}</h4>
                  <p className="text-sm text-blue-800">{`入住一栋经过现代化改造的18世纪木屋，睡在古老的木梁下，清晨被邻居家面包房的香气唤醒，房东老奶奶可能会请你喝自家熬的野莓汁。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`港口设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`坐落在古城边缘的现代设计酒店，房间拥有面朝波罗的海的巨大落地窗，在极简北欧风的空间里，将古城天际线与海景尽收眼底。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`家庭经营客栈`}</h4>
                  <p className="text-sm text-yellow-800">{`由古城内一栋宽敞的船长宅邸改建，房间不多但个性十足，保留了原有的壁炉和复古家具，提供丰盛的自制家庭早餐，主人能讲述很多本地轶事。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`郊区静谧小屋`}</h4>
                  <p className="text-sm text-purple-800">{`如果追求极致宁静，可以选择驱车十分钟可达的森林湖畔小木屋，体验纯正的芬兰“ mökki ”（夏季小屋）生活，晚上可能看到极光。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古城内的住宿数量非常有限，必须提前数月预订，尤其是夏季。选择古城外住宿通常性价比更高，且步行到古城也很方便。劳马整体治安极好，但老木屋隔音普遍较差，这是体验的一部分，请带上耳塞以备不时之需。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开劳马许久后，记忆里最鲜明的，可能不是某栋具体的房子，而是那种整体的、安宁的氛围。在这个追求高大、崭新和效率的时代，劳马固执地守护着一种“小”的哲学——低矮的房屋、狭窄的街巷、缓慢的节奏。它告诉你，幸福不一定需要宏伟的尺度，它可以存在于一扇擦得锃亮的窗户里，一盆盛开的天竺葵中，或者一次在自家门廊下与邻居的短暂寒暄。这座古城是一种生活的宣言，证明了历史不是前进的负担，而是可以紧紧拥抱的温暖根基。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`对于每一位厌倦了打卡式旅行、渴望触摸真实历史纹理的旅人来说，劳马都应该被列入清单。它不像巴黎或罗马那样用惊人的艺术杰作震撼你，而是用涓涓细流般的日常之美浸润你。在这里，你学会用不同的速度走路，用不同的方式观看。你会发现，真正的深度不在于知道了多少历史年份，而在于你是否能感受到，几百年前的海风，依然在今天吹拂着你的脸颊；是否能看到，时光如何将坚硬的木材变得温柔，又将普通人的生活智慧，沉淀为不朽的世界遗产。来劳马吧，不是为了看一个景点，而是为了体验一种未曾断绝的生活。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/tampere-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    坦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">坦佩雷老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tampere Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/riihimki" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    里
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">里希拉赫蒂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Riihimäki</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/suomenlinna-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    芬
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">芬兰堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Suomenlinna</p>
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
