import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '诺昂维克｜在乔治·桑的庄园与中世纪壁画中，寻回法国的静谧灵魂 - 最佳欧洲景点',
  description: '车子驶离沙托鲁，窗外的风景立刻切换成法国腹地最经典的模板：起伏的麦田像一块块暖黄色的绒毯，间或点缀着墨绿色的树林，和几处红瓦屋顶的农舍。空气中飘着干草和泥土被太阳晒过的气味，宁静得能听见自己的呼吸。当你按照路牌拐进诺昂维克村，时间仿佛自动调慢了流速。第一眼看到乔治·桑的庄园时，你可能会有点意外——它',
}

export default function NohantVicSandEstatePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '诺昂维克', href: '/attractions/nohant-vic-sand-estate' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`诺昂维克・Nohant-Vic・法国・安德尔省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶离沙托鲁，窗外的风景立刻切换成法国腹地最经典的模板：起伏的麦田像一块块暖黄色的绒毯，间或点缀着墨绿色的树林，和几处红瓦屋顶的农舍。空气中飘着干草和泥土被太阳晒过的气味，宁静得能听见自己的呼吸。当你按照路牌拐进诺昂维克村，时间仿佛自动调慢了流速。第一眼看到乔治·桑的庄园时，你可能会有点意外——它没有恢弘的门楼，没有修剪得一丝不苟的法式园林，只是一座被高大树木环抱的、有着浅色墙壁和灰蓝色百叶窗的安静大房子。那种感觉，不像拜访一位文豪纪念馆，更像去探访一位久居乡间的、有品味的老朋友的家。
推开那扇绿色的木门，院子里的世界将你温柔包裹。花园是“野生”的，或者说，是被精心设计成看似未经设计的样子。玫瑰沿着小径肆意生长，老苹果树投下斑驳的阴影，不知名的野花从草丛里探出头。你能立刻想象乔治·桑穿着她那身著名的男士长袍，叼着烟斗，在这片树荫下散步构思的样子。这里最动人的不是奢华，而是一种充盈的、充满生命力的“生活感”。书房窗外的光线，客厅里钢琴的位置，餐桌上仿佛刚刚摆好的瓷器，都在低声诉说：艺术不是悬在空中的神坛，它就生长于每日的饮食起居、朋友的笑谈与花园的四季更迭之中。
而当你从这份充满人文温度的宁静中抽身，驱车或骑车前往两公里外的维克村，另一种截然不同却同样震撼的宁静在等待你。圣雅各小教堂孤零零地站在田野边缘，外表粗粝得像一块被遗忘的巨石。当你用从庄园取来的沉重钥匙打开那扇吱呀作响的木门，昏暗的光线瞬间被墙壁上汹涌的色彩点燃。那种冲击是沉默而剧烈的。近千年前的画师们用最质朴却最有力的线条和颜色，将整个基督教的世界观——天堂的荣光、最后的审判、圣徒的故事——全部泼洒在这小小的空间里。这里的宁静是神圣的、跨越时空的，带着矿物颜料和古老石头的气息。从乔治·桑的文学沙龙，到农民们跪拜的壁画教堂，短短几公里，你便穿越了法国精神世界的两层厚重基底。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子驶离沙托鲁，窗外的风景立刻切换成法国腹地最经典的模板：起伏的麦田像一块块暖黄色的绒毯，间或点缀着墨绿色的树林，和几处红瓦屋顶的农舍。空气中飘着干草和泥土被太阳晒过的气味，宁静得能听见自己的呼吸。当你按照路牌拐进诺昂维克村，时间仿佛自动调慢了流速。第一眼看到乔治·桑的庄园时，你可能会有点意外——它没有恢弘的门楼，没有修剪得一丝不苟的法式园林，只是一座被高大树木环抱的、有着浅色墙壁和灰蓝色百叶窗的安静大房子。那种感觉，不像拜访一位文豪纪念馆，更像去探访一位久居乡间的、有品味的老朋友的家。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "推开那扇绿色的木门，院子里的世界将你温柔包裹。花园是“野生”的，或者说，是被精心设计成看似未经设计的样子。玫瑰沿着小径肆意生长，老苹果树投下斑驳的阴影，不知名的野花从草丛里探出头。你能立刻想象乔治·桑穿着她那身著名的男士长袍，叼着烟斗，在这片树荫下散步构思的样子。这里最动人的不是奢华，而是一种充盈的、充满生命力的“生活感”。书房窗外的光线，客厅里钢琴的位置，餐桌上仿佛刚刚摆好的瓷器，都在低声诉说：艺术不是悬在空中的神坛，它就生长于每日的饮食起居、朋友的笑谈与花园的四季更迭之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而当你从这份充满人文温度的宁静中抽身，驱车或骑车前往两公里外的维克村，另一种截然不同却同样震撼的宁静在等待你。圣雅各小教堂孤零零地站在田野边缘，外表粗粝得像一块被遗忘的巨石。当你用从庄园取来的沉重钥匙打开那扇吱呀作响的木门，昏暗的光线瞬间被墙壁上汹涌的色彩点燃。那种冲击是沉默而剧烈的。近千年前的画师们用最质朴却最有力的线条和颜色，将整个基督教的世界观——天堂的荣光、最后的审判、圣徒的故事——全部泼洒在这小小的空间里。这里的宁静是神圣的、跨越时空的，带着矿物颜料和古老石头的气息。从乔治·桑的文学沙龙，到农民们跪拜的壁画教堂，短短几公里，你便穿越了法国精神世界的两层厚重基底。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`诺昂维克`} />
                <InfoRow label="英文名称" value={`Nohant-Vic`} />
                <InfoRow label="正式名称" value={`乔治·桑庄园与圣雅各教堂`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`安德尔省`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这里是19世纪法国文学巨匠乔治·桑生活、创作并接待整个欧洲文艺圈的核心领地，同时也是保存了罕见完整12世纪罗马式壁画、堪称“乡下西斯廷”的圣雅各教堂所在地。`} />
                <InfoRow label="建筑特色" value={`乔治·桑的庄园是一座典型的贝里地区乡村宅邸，不张扬的灰蓝色百叶窗与宁静花园是其标志；而圣雅各教堂则是一座外表极其朴素、内藏惊人绚丽壁画瑰宝的罗马式小殿堂。`} />
                <InfoRow label="建筑风格" value={`庄园属于18-19世纪法国乡村住宅风格，内部装饰混搭了古典主义与浪漫主义时期的生活气息；教堂是纯粹的12世纪罗马式建筑，拥有典型的半圆形后殿和厚重的墙壁。`} />
                <InfoRow label="文化价值" value={`它见证了法国浪漫主义文学与音乐的黄金时代，是女性意识与创作自由的象征地；同时，教堂壁画是理解中世纪法国乡村信仰与艺术传播的独一无二的活化石。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`乔治·桑庄园：通常于每年四月初至十一月初开放，具体日期每年微调。开放时间为每日10:00至18:00（夏季可能延长至19:00），最后入场时间为闭馆前一小时。每周二闭馆（七月和八月除外）。圣雅各小教堂：全年开放，但内部参观钥匙需在乔治·桑庄园的售票处或旁边的小旅游办公室领取，开放时间与庄园售票处同步。冬季（十一月至次年三月）教堂内部参观需提前致电当地旅游局预约。`} />
              <InfoRow label="门票价格" value={`乔治·桑庄园全价票：9欧元。优惠票（学生、教师等）：7欧元。18岁以下青少年及26岁以下欧盟居民免费。与圣雅各教堂的联票（强烈推荐）：12欧元。请注意，教堂本身无门票，但领取钥匙需出示庄园门票或购买联票。现场购票为主，旺季建议早到。`} />
              <InfoRow label="地址" value={`乔治·桑庄园：2 Place Sainte-Anne, 36400 Nohant-Vic, France
圣雅各教堂：Le Bourg, 36400 Vic, France (距离庄园约2公里)`} />
              <InfoRow label="交通方式" value={`从巴黎出发：最便捷的方式是乘坐火车。从巴黎奥斯特里茨车站乘坐Intercités列车前往沙托鲁站，车程约2小时15分钟，班次每日约4-5班，建议提前在SNCF官网或APP购票以获取优惠。抵达沙托鲁后，最佳选择是租车自驾前往诺昂维克（车程约25分钟），出租车费用较高且需提前预约。也可以乘坐当地极为稀疏的公交（如Rémi 3号线），但班次极少（每天可能只有2-3班），耗时约50分钟，务必提前查好时刻表。从沙托鲁火车站租车是探索这个宁静乡村区域最自由的方式。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个故事有两个并行的主角，相隔七百年，却在这片土地上奇妙地共振。先说离我们近的这位。1840年，已经凭借《印第安娜》等小说名声大噪的乔治·桑，从她祖母那里继承了这座诺昂的庄园。对于厌倦了巴黎喧嚣、渴望自由与自然的她来说，这里成了完美的避难所和创作源泉。她不是来此隐居，而是将这里打造成了一个光芒四射的文化磁场。你能想象吗？肖邦在这里度过了七个夏天，庄园里那台普雷耶尔钢琴上，诞生了《雨滴前奏曲》和大部分《夜曲》。李斯特和 Marie d‘Agoult 在此陷入热恋又激烈争吵。小说家巴尔扎克、福楼拜，诗人缪塞，画家德拉克罗瓦……半个法国文艺圈都曾是这里的座上宾。乔治·桑穿着长裤，抽着雪茄，白天管理庄园、与农民交谈，夜晚则与朋友们在沙龙里激辩到天明。这座房子见证了浪漫主义最炽热的梦想，也庇护了最私密的情感纠葛。肖邦病弱的身体在乡间空气中得到舒缓，他与乔治·桑复杂的关系，也像园中的玫瑰，既有芬芳也有尖刺。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而当我们把目光投向更久远的时空，维克的圣雅各教堂的故事则更加神秘。12世纪，随着圣地亚哥朝圣之路的兴盛，这条贯穿法国的“大路”沿途修建了无数小教堂，圣雅各教堂便是其中之一。它的建造者已不可考，很可能是一群当地的石匠和画师。最初的教堂内部，从半圆后殿到拱顶，每一寸墙面都被绚丽的壁画覆盖，就像一本给不识字的信徒们阅读的石头圣经。然而，历史的尘埃渐渐将其掩埋。不知从哪个世纪起，可能是为了“现代化”，人们在壁画上刷上了一层厚厚的石灰，将这些惊人之作彻底封存、遗忘。它们就那样沉睡了几百年，仿佛从未存在过。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转机发生在19世纪。1849年，一位名叫朱尔斯·费弗尔的古董商偶然发现了这些壁画的边缘。他小心翼翼地剥离了一小块石灰，露出了下面鲜艳的色彩。这个消息，传到了当时正居住在诺昂庄园的乔治·桑耳中。对历史、民俗和神秘事物充满兴趣的她，立刻意识到了其价值，并利用自己的影响力呼吁保护和修复。这不能不说是一种奇妙的缘分——一位追求精神自由与现世幸福的现代作家，成了古老信仰艺术最有力的守护者之一。经过漫长而谨慎的修复，这些壁画终于重见天日，它们描绘的基督 Pantocrator（全能者）、二十四位长老、圣徒传奇等场景，以其粗犷有力的线条和饱满的情绪，展现了与巴黎圣礼拜教堂那种宫廷风格完全不同的、充满乡土生命力的罗马式艺术巅峰。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排完整的一天，充分沉浸在这“一文一史”的双重奏中。最佳节奏是上午参观乔治·桑庄园，午后探访圣雅各教堂。早上十点左右抵达庄园，这时游客相对较少，花园晨露未晞，光线柔和。先在花园里漫步，感受宁静气息，再进入宅邸内部参观，耗时约2-2.5小时。中午可以在诺昂村内或附近小镇找家乡村餐馆享用传统法餐。下午驱车或租用自行车前往维克村（骑行约15分钟，沿途风景极佳），用钥匙打开教堂门，独自面对千年壁画，这种私密的震撼体验是无价的。整体游览时间约4-5小时，请务必留足时间发呆和感受。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必提前在乔治·桑庄园官网确认开放日期，避免周二白跑一趟（夏季除外）。领取教堂钥匙可能需要押证件或小额押金，建议准备一些现金零钱。参观教堂内部时请绝对保持安静，这不仅是对神圣空间的尊重，也能让你更好地捕捉那种穿越时空的共鸣。穿着舒适的步行鞋，因为你会想要在乡间小路上走一走。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在清晨的静谧中先步入庄园花园，沿着砂石小径感受玫瑰、紫藤与老树的气息，想象乔治·桑在此构思的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开宅邸大门，从门厅开始，仔细观察那些肖像画、家具摆设和日常物件，感受一个活生生的19世纪知识分子家庭氛围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要在底层的小剧场停留，看看那些由乔治·桑的孙女们手绘的舞台布景，触摸到家族传承的创造力。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走上二楼，在乔治·桑那间著名的工作室里驻足，看她写作的桌子、收藏的矿物标本，感受能量在此凝聚。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在肖邦居住过的房间和那架著名的钢琴前静静聆听（哪怕只是想象中的音符），感受音乐与文学在此交融的痕迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后，骑车或开车穿过阳光下的麦田，前往维克村，寻找那座被田野包围的、毫不起眼的圣雅各教堂。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`用那把古老的钥匙费力地打开厚重的木门，让你的眼睛在昏暗光线中适应，然后迎接壁画色彩带来的瞬间灵魂冲击。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`绕着教堂内部慢慢走一圈，最后坐在长椅上，什么也不做，只是感受千年时光在四壁流淌的绝对寂静。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`庄园花园的玫瑰拱门下`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到六点，夕阳斜射，光线穿过花叶形成斑驳光影，以房屋的灰蓝色百叶窗为背景，拍摄人像或静物极具故事感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`乔治·桑书房窗口向内拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`上午光线最佳，从窗外向内拍下书桌、书籍和窗台上的小物件，营造“作家刚刚离开”的偷窥感与生活气息。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣雅各教堂壁画特写（关闭闪光灯）`}</h4>
                  <p className="text-sm text-gray-700">{`利用从门口和高窗射入的自然侧光（上午或下午均可），聚焦于壁画中某个生动的人物面部或象征图案，捕捉矿物颜料在粗糙墙面上呈现的质感与生命力。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从维克村田野远眺教堂全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，金黄色的阳光洒在教堂的石墙上，站在对面的田埂上，将教堂、田野和天空一同收入镜头，拍下它孤独而坚韧的原始美感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`庄园内小剧场的观众席视角`}</h4>
                  <p className="text-sm text-gray-700">{`利用室内灯光，从观众席望向小小的舞台和手绘布景，营造出一种亲密、温馨且充满艺术气息的构图。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`教堂内部严禁使用闪光灯和三脚架（如需长时间曝光拍摄，必须事先获得特别许可），闪光会永久性损害古老的颜料。尊重隐私，庄园内部分区域可能禁止摄影，请留意标识。最好的“照片”往往是用心感受后的记忆，不妨放下相机，用一些时间单纯地用眼睛去“拍摄”细节。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`乡村民宿之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在诺昂维克村由石头农舍改造的家庭式民宿，主人会为你准备自家果园的果酱早餐，夜晚能看见真正的星空，听到田野里的虫鸣。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色庄园体验`}</h4>
                  <p className="text-sm text-green-800">{`选择沙托鲁附近一座18世纪的贵族庄园改建的精品酒店，体验法式古典优雅，有些还带葡萄园和泳池，开车去景点很方便。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`历史磨坊旅馆`}</h4>
                  <p className="text-sm text-yellow-800">{`在安德尔河畔找一家由古老水磨坊改造的旅馆，听着潺潺水声入睡，清晨在河边散步，享受百分百的法国乡村静谧。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`便捷城镇酒店`}</h4>
                  <p className="text-sm text-purple-800">{`如果想节省预算且偏好便利，沙托鲁市中心的连锁酒店或设计酒店是不错选择，选择多，餐饮方便，作为探索周边乡村的基地很合适。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "诺昂维克本村的住宿选择非常有限且极其抢手，尤其是旅游旺季（春末至秋初），务必提前数月预订。如果住在沙托鲁，虽然需要每天开车往返，但晚餐选择丰富很多，可以体验更多当地小馆子。乡村地区总体治安极好，但夜晚道路照明不足，驾车需小心。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开诺昂维克的时候，我的背包里没有多出什么纪念品，但心里却被填得满满的。那种充实感很特别，它不是观光打卡后的满足，而更像是在精神上完成了一次深长的呼吸，吸进了田野的宁静，也吸进了历史和艺术沉淀下的养分。这个地方教会我一件事：真正的深度，往往不在于景观的宏大，而在于它能否让你与另一种时间、另一种生命状态真诚相对。在乔治·桑的庄园，你面对的是19世纪一个杰出女性如何用智慧和热情构建自己的理想国，将生活本身活成最动人的作品。在维克的教堂，你面对的是中世纪普通人最虔诚的信仰表达，那些画师的无名，更凸显了艺术本身超越个体的永恒力量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个快得令人眩晕的时代，诺昂维克像一颗被时光轻轻包裹的琥珀。它提醒着我们，创作可以源于对一片土地深沉的爱，信仰可以如此朴素而绚烂地表达，而“宁静”本身，就是一种需要被重新发现和珍视的强大力量。它可能不会给你带来即时的感官刺激，但它会像一粒种子，悄悄落在你心里。在未来的某个忙碌或焦躁的瞬间，你或许会突然想起贝里乡间的那个午后，想起花园里的玫瑰香，想起教堂壁画上那道凝视千年的目光，然后，长长地、缓缓地，舒一口气。这就是它值得被列入清单的原因——它不是景点，它是一个让灵魂恢复弹性的地方。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/chateau-de-la-roche-jagu" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉罗什雅居城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de la Roche-Jagu</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-chantilly" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    尚
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">尚蒂伊城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Chantilly</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/carcassonne-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡尔卡松城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Carcassonne Castle</p>
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
