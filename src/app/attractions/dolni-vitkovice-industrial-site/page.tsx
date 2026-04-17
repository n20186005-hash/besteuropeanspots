import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '下维特科维采 Dolní Vítkovice｜探访“捷克庞贝”，在硬核钢铁巨兽的体内聆听工业时代心跳 - 最佳欧洲景点',
  description: '朋友，想象一下，你站在一座沉默的钢铁森林里。眼前不是树木，而是交错攀升到天际的生锈管道，是如同巨兽肋骨般的传送带廊桥，是几座红砖砌成、顶端还冒着（早已不再冒烟的）铁皮烟囱的庞然大物。空气里有一种独特的味道，不是花香，而是淡淡的、沉积了上百年的金属、煤炭和机油混合的气味，厚重又带着一丝苍凉。这就是下维...',
}

export default function DolniVitkoviceIndustrialSitePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '下维特科维采工业遗址', href: '/attractions/dolni-vitkovice-industrial-site' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`下维特科维采工业遗址・Dolní Vítkovice・捷克・奥斯特拉瓦`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，你站在一座沉默的钢铁森林里。眼前不是树木，而是交错攀升到天际的生锈管道，是如同巨兽肋骨般的传送带廊桥，是几座红砖砌成、顶端还冒着（早已不再冒烟的）铁皮烟囱的庞然大物。空气里有一种独特的味道，不是花香，而是淡淡的、沉积了上百年的金属、煤炭和机油混合的气味，厚重又带着一丝苍凉。这就是下维特科维采给你的第一印象——一种近乎神圣的、硬核的压迫感与美感。
耳朵里最先捕捉到的不是城市的喧嚣，而是风穿过钢铁骨架缝隙时发出的低沉呜鸣，时而像叹息，时而像遥远的号角。阳光从交错的钢梁间切割下来，在地面投下锋利又变幻莫测的光影。你脚下踩着的不是泥土，而是被煤渣和铁屑浸染成深黑色的土地。但奇妙的是，就在这巨兽的脚下，你看到当地年轻人踩着滑板从厂房墙边掠过，父母推着婴儿车在旧铁轨旁散步，咖啡馆的露天座位就摆在一个巨大的齿轮雕塑旁边。这个曾经代表污染与劳苦的地方，如今已深深织入了奥斯特拉瓦人的日常生活，成为一种带着骄傲的复杂记忆。
它的核心魅力，正在于这种强烈的反差与对话。你能触摸到工业时代最原始、最粗粝的力量——那些为了冶炼钢铁而建造的、毫无装饰的庞然结构，本身就是一种震撼人心的建筑宣言。但同时，你又能看到艺术如何在这里野蛮生长：涂鸦爬上了冷却塔，交响音乐会就在高炉前举行，曾经的煤气储罐变成了超现代的会议中心。这里讲述的不是怀旧，而是一个城市、一个地区如何勇敢地正视自己的过去，并从中锻造出全新的未来。在这里走一遭，你感受到的是一部用钢铁、火焰与汗水写就的史诗，它关乎劳动、梦想、衰落与重生。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，想象一下，你站在一座沉默的钢铁森林里。眼前不是树木，而是交错攀升到天际的生锈管道，是如同巨兽肋骨般的传送带廊桥，是几座红砖砌成、顶端还冒着（早已不再冒烟的）铁皮烟囱的庞然大物。空气里有一种独特的味道，不是花香，而是淡淡的、沉积了上百年的金属、煤炭和机油混合的气味，厚重又带着一丝苍凉。这就是下维特科维采给你的第一印象——一种近乎神圣的、硬核的压迫感与美感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`耳朵里最先捕捉到的不是城市的喧嚣，而是风穿过钢铁骨架缝隙时发出的低沉呜鸣，时而像叹息，时而像遥远的号角。阳光从交错的钢梁间切割下来，在地面投下锋利又变幻莫测的光影。你脚下踩着的不是泥土，而是被煤渣和铁屑浸染成深黑色的土地。但奇妙的是，就在这巨兽的脚下，你看到当地年轻人踩着滑板从厂房墙边掠过，父母推着婴儿车在旧铁轨旁散步，咖啡馆的露天座位就摆在一个巨大的齿轮雕塑旁边。这个曾经代表污染与劳苦的地方，如今已深深织入了奥斯特拉瓦人的日常生活，成为一种带着骄傲的复杂记忆。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，正在于这种强烈的反差与对话。你能触摸到工业时代最原始、最粗粝的力量——那些为了冶炼钢铁而建造的、毫无装饰的庞然结构，本身就是一种震撼人心的建筑宣言。但同时，你又能看到艺术如何在这里野蛮生长：涂鸦爬上了冷却塔，交响音乐会就在高炉前举行，曾经的煤气储罐变成了超现代的会议中心。这里讲述的不是怀旧，而是一个城市、一个地区如何勇敢地正视自己的过去，并从中锻造出全新的未来。在这里走一遭，你感受到的是一部用钢铁、火焰与汗水写就的史诗，它关乎劳动、梦想、衰落与重生。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`下维特科维采工业遗址`} />
                <InfoRow label="英文名称" value={`Dolní Vítkovice`} />
                <InfoRow label="正式名称" value={`Dolní Vítkovice Industrial Heritage Site`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`奥斯特拉瓦`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`欧洲保存最完整、规模最大的重工业遗址之一，被誉为“捷克工业革命的摇篮”和“中欧的钢铁心脏”。`} />
                <InfoRow label="建筑特色" value={`由焦化厂、高炉群、钢铁厂和煤矿组成的庞大复合体，以裸露的钢铁结构、锈蚀的管道、砖砌厂房和宛如科幻场景的巨型工业装置为标志。`} />
                <InfoRow label="建筑风格" value={`19-20世纪工业建筑风格，兼具新古典主义砖砌建筑与纯粹功能主义的钢铁结构。`} />
                <InfoRow label="文化价值" value={`后工业时代转型的全球典范，将废弃的“工业伤疤”成功转化为融合教育、文化、艺术与科技的多功能公共空间，是理解捷克近代史与社会变迁的活化石。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`园区外部公共区域全天24小时开放。主要室内展览场馆、高炉观景台及导游参观的开放时间为：夏季（4月至10月）周二至周日 10:00-18:00，冬季（11月至3月）周二至周日 10:00-17:00，周一闭馆（法定节假日除外）。每年的12月24日、25日及1月1日闭馆。灯光秀和特殊夜间活动通常在夏季周末晚间举行，具体时间需参考官网。`} />
              <InfoRow label="门票价格" value={`园区入场免费。参观核心设施需购票：高炉观景台+“巨人世界”永久展览联票成人350捷克克朗，学生及65岁以上老人280捷克克朗，家庭票（2大2小）850捷克克朗。仅参观“巨人世界”展览成人250捷克克朗。6岁以下儿童免费。提供英语、捷克语导游服务，需额外付费并提前预约。`} />
              <InfoRow label="地址" value={`Ruská 2993, 703 00 Ostrava-Vítkovice, Czechia`} />
              <InfoRow label="交通方式" value={`从奥斯特拉瓦·莫什诺夫国际机场出发：乘坐333路公交车至“Hlavní nádraží”（中央火车站），换乘1、2、8或18路有轨电车至“Dolní oblast Vítkovice”站下车即达，全程约50分钟。从奥斯特拉瓦中央火车站出发：直接乘坐上述有轨电车，约15分钟可达。有轨电车班次频繁，约5-10分钟一班，上车前在站台的自动售票机购票即可，建议购买90分钟有效的单次票。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`这个故事要从将近两百年前说起。1830年，奥匈帝国贵族大公雨果·弗兰茨·萨利姆决定在这片富含黑煤的土地上，点燃第一座焦炭炉。当时的奥斯特拉瓦地区还是一片田园风光，但地下沉睡的“黑金”即将彻底改变它的命运。最初的工厂规模很小，但随着铁路时代的到来，对钢铁的需求爆炸式增长。到了19世纪下半叶，下维特科维采已经演变成一个不断扩张的工业怪物，烟囱林立，火光映红夜空，吸引了来自帝国各地，尤其是贫困乡村的工人前来寻找生计。他们在这里建造了不仅是工厂，还有一整个工人的城邦——宿舍、学校、医院，一个自给自足的小社会。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`两次世界大战的炮火，反而让这座钢铁厂的重要性飙升。它成了帝国和后来捷克军工的脊梁，日夜不停地生产着战争所需的钢铁。二战期间，这里被纳粹德国占领并全力运转，同时也成了抵抗运动的温床。1945年，工厂在激烈的战火中受损，但很快，在战后国有化的浪潮中，它被赋予了新的政治使命，成为社会主义捷克工业化的旗舰象征。五六十年代是它的黄金时代，高炉的火焰从未熄灭，工人们被塑造为国家英雄，整个城市都弥漫着一种建设新世界的雄心与烟尘。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，故事的转折发生在1989年的天鹅绒革命之后。随着计划经济体系的崩塌和全球钢铁产业的转移，这个巨人在90年代迅速失血。1998年，最后一座高炉熄火，铁水凝固在沟槽里，喧嚣了160年的厂区陷入死寂。上万工人失业，整个城市陷入了深深的迷茫。这个占地巨大的遗址成了奥斯特拉瓦胸口一道不知该如何处理的、锈迹斑斑的伤疤。是拆掉它，抹去这段沉重记忆，还是想办法让它重生？`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`关键人物登场了。一批有远见的城市规划师、历史学家和本地活动家站了出来，他们坚信这片废墟的价值。在他们的推动下，2002年，这里被宣布为国家文化遗产。真正的奇迹始于2008年，当地政府与私人资本合作，启动了一项雄心勃勃的改造计划。他们没有选择简单的博物馆化，而是进行了一场大胆的“功能移植”：将高炉改造成观景台和科技博物馆，将煤气储罐变成音乐厅，在铸造车间里举办毕业典礼和摇滚音乐节。这个过程犹如一场精密的考古与外科手术，既要保留工业遗产的原始灵魂，又要为其注入21世纪的活力。今天，你看到的每一个灯光艺术装置，每一场在高炉前举办的毕业典礼，都是这场伟大重生剧的鲜活一幕。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受下维特科维采的日与夜，建议你安排一整天的时间。最好在上午9点半左右抵达，这时阳光正好能照亮高炉群的东侧立面，光线通透，旅游团也尚未涌入。上午先专注于户外宏大结构的探索和核心场馆的参观，沉浸于历史的厚重。中午可以在园区内的工业风格餐厅用餐。下午则可以放慢节奏，探索一些改建的艺术空间和细节，感受新旧交融的趣味。如果恰逢周末，务必留到傍晚以后，因为这里的夜景和可能举办的灯光秀或露天活动，才是将工业废墟的魔幻感推向顶峰的体验。这样的节奏让你既能读懂它的过去，也能拥抱它的现在。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双舒适耐脏的徒步鞋，因为场地很大且地面多为碎石和金属残渣。冬季来访寒风凛冽，厂区空旷无遮挡，保暖措施要做足。参加导游团是深入了解细节的最佳方式，特别是技术历史爱好者，建议提前在线预订英语导览。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主入口的旧火车站广场开始，沿着锈蚀的铁轨向那三座巍峨的高炉塔群走去，感受尺度带来的最初震撼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`排队登上“高炉观景台”，沿着当年工人巡检的钢铁步道盘旋而上，在59米高的顶端将整个钢铁丛林和奥斯特拉瓦城市全景尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走入高炉底部的“巨人世界”互动展览，亲手触摸矿石标本，通过多媒体了解从煤炭到钢铁的魔法旅程，聆听老工人口述的历史录音。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过连接厂区的空中廊桥，脚下是深不见底的旧矿坑和静止的巨型料斗，体验一把昔日工程师的视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探访由旧锅炉房改造的多功能厅“ Gong”，看看现代玻璃幕墙如何与斑驳的砖墙进行一场冷静的对话。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在厂区角落的“斯塔拉·阿罗洛玛”咖啡馆歇脚，这家由旧行政楼改造的咖啡馆里还保留着社会主义时期的瓷砖和家具。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果体力允许，步行十五分钟到附近的“米哈尔”矿区，下到真正的煤矿巷道里，亲身体验矿工在漆黑地下工作的滋味。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`夜幕降临时，找一个正对高炉群的开阔地，等待遗址景观照明系统点亮，看冰冷的钢铁巨兽在灯光下焕发出戏剧性的瑰丽色彩。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`高炉观景台顶部环拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午日落前一小时，以西南方向的旧厂房屋顶和远处城市天际线为背景，用广角镜头捕捉钢铁结构的几何线条与柔和的夕阳金光形成的对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“U6”科技博物馆前的广场仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨阳光照亮高炉群正面时，站在广场中央低角度向上拍摄，将巨大的管道结构与蓝天一同框入，凸显其磅礴气势。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`旧煤气储罐“Gasometer”内部`}</h4>
                  <p className="text-sm text-gray-700">{`利用储罐改建后巨大的弧形穹顶和内部钢骨结构，拍摄极具对称性和未来感的建筑内部人像或空景，任何光线时间都能出片。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`连接厂区的空中钢铁廊桥中段`}</h4>
                  <p className="text-sm text-gray-700">{`在桥上进行框架式构图，以廊桥本身的钢铁结构为前景框，聚焦远处色彩鲜艳的涂鸦墙壁或正在举办活动的广场人群。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`“米哈尔”矿区井架下`}</h4>
                  <p className="text-sm text-gray-700">{`利用矿区巨大的木质井架作为视觉焦点，在阴天或蓝色时刻拍摄，能营造出更为深沉、具有历史叙事感的黑白或低饱和度画面。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏光镜可以有效减少钢铁表面的反光，让锈蚀的质感更突出。无人机飞行在此区域受到严格管制，未经许可严禁起飞。尊重场地，不要为了拍照攀爬禁止进入的废弃设备，既危险也可能损坏遗产。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`工业风情之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住由矿工宿舍巧妙改造的“Dolní Oblast”设计酒店，房间保留了粗犷的混凝土墙面和工业灯具，窗外就是高炉夜景。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`市中心便捷之选`}</h4>
                  <p className="text-sm text-green-800">{`奥斯特拉瓦市中心河畔的“Imperial Hotel Ostrava”，这是一座装饰艺术风格的历史建筑，乘坐有轨电车直达遗址，兼顾舒适与交通便利。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特色公寓体验`}</h4>
                  <p className="text-sm text-yellow-800">{`在Vítkovice工人居住区租一间世纪中叶风格的老公寓，体验当地社区的真实氛围，早晨去街角面包店买新鲜出炉的“rohlík”。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`静谧高端之选`}</h4>
                  <p className="text-sm text-purple-800">{`位于城市边缘森林旁的“Lysá hora”精品酒店，提供远离尘嚣的宁静，适合自驾旅客，房间宽敞且配有完善的疗愈设施。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`奥斯特拉瓦不是热门旅游城市，住宿价格普遍亲民且无需过早预订。Vítkovice社区治安良好，充满生活气息，晚上可以散步探索。若夏季来访且想参加晚间活动，住在步行可达遗址的范围内会非常方便。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开下维特科维采很久以后，那片钢铁森林的影子还会留在脑海里。它给我的震撼，不同于教堂的 spiritual 或宫殿的奢华，而是一种更接地气、更关乎人类集体命运的力量。我们走过太多歌颂神权与王权的地方，但这里，每一块砖、每一根钢梁，歌颂的是无数普通人的劳动、智慧与汗水。它提醒我们，现代世界是如何在高温、粉尘和震耳欲聋的噪音中被锻造出来的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求光滑、精致、虚拟化的时代，下维特科维采像一块拒绝被磨平的粗砺宝石。它不回避曾经的污染与艰辛，也不沉溺于伤感的怀旧，而是选择了一种最勇敢的姿态——直面过去，然后与之共舞，创造未来。它告诉我们，遗产不一定是优美的，但一定是真实的；重生不意味着遗忘，而是在理解的基础上重新想象。对于任何想超越明信片风景、去触摸一个民族真实筋骨与灵魂的深度旅者来说，这里都是一堂无法替代的必修课。来听听铁锈中的风声吧，那是一曲关于工业、记忆与希望的，未完成的交响乐。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/znojmo-historic-center-underground-labyrinth" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    兹
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">兹诺伊莫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Znojmo</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/karlovy-vary-spa-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡罗维发利温泉镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Karlovy Vary</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/telc-water-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    泰
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">泰尔奇水上城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Telč Water Castle</p>
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
