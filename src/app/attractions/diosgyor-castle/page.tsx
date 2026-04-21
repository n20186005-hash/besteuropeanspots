import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '迪欧什焦尔城堡旅游攻略：揭秘匈牙利“王后城堡”的中世纪浪漫',
  description: '探索匈牙利Diósgyőr Castle（迪欧什焦尔城堡）深度游攻略。这座宏伟的四塔中世纪要塞，曾是匈牙利王后的专属订婚礼物。涵盖门票交通、打卡路线与避坑指南。',
}

export default function DiosgyorCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '匈牙利', href: '/destinations/europe' },
            { label: '米什科尔茨', href: '/destinations/europe' },
            { label: '迪欧什焦尔城堡', href: '/attractions/diosgyor-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`迪欧什焦尔城堡・Diósgyőr Castle・匈牙利・米什科尔茨`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你对欧洲城堡的印象还停留在迪士尼童话里的尖顶，那么今天这份**迪欧什焦尔城堡私藏旅游攻略**，可能会彻底颠覆你的想象。它不在热闹的布达佩斯，而是低调地藏在匈牙利东北部工业城市米什科尔茨的郊外，被一片葱郁的橡树林温柔环抱。远远望去，四座坚实的塔楼守卫着一个方正、厚重的石头庭院，不像新天鹅堡那样轻盈梦幻，却充满了中世纪骑士般的硬朗与忠诚。它最动人的头衔是“王后城堡”——在14-15世纪，这里曾是历代匈牙利王后收到的最尊贵的订婚礼物。这份**自由行指南**，就是要带你穿过护城河上的吊桥，走进这段被石头封存的、关于权力、爱情与守护的往事，并告诉你如何避开人流，独享这份来自中世纪的厚重浪漫。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友，如果你对欧洲城堡的印象还停留在迪士尼童话里的尖顶，那么今天这份<strong>迪欧什焦尔城堡私藏旅游攻略</strong>，可能会彻底颠覆你的想象。它不在热闹的布达佩斯，而是低调地藏在匈牙利东北部工业城市米什科尔茨的郊外，被一片葱郁的橡树林温柔环抱。远远望去，四座坚实的塔楼守卫着一个方正、厚重的石头庭院，不像新天鹅堡那样轻盈梦幻，却充满了中世纪骑士般的硬朗与忠诚。它最动人的头衔是“王后城堡”——在14-15世纪，这里曾是历代匈牙利王后收到的最尊贵的订婚礼物。这份<strong>自由行指南</strong>，就是要带你穿过护城河上的吊桥，走进这段被石头封存的、关于权力、爱情与守护的往事，并告诉你如何避开人流，独享这份来自中世纪的厚重浪漫。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`迪欧什焦尔城堡`} />
                <InfoRow label="英文名称" value={`Diósgyőr Castle`} />
                <InfoRow label="正式名称" value={`Diósgyőr Castle`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`米什科尔茨`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`迪欧什焦尔城堡在欧洲中世纪历史中扮演着一个极为特殊且浪漫的角色。它的核心地位并非源于惨烈的著名战役，而是与匈牙利王室的婚姻和女性权力紧密相连。14世纪，强大的安茹王朝国王拉约什一世（路易大帝）将这座原本用于防御的城堡，改造并赠予了他的王后，开创了一个延续近百年的传统。从此，它成为历代匈牙利王后的法定财产和专属订婚礼物，是她们独立权力和尊贵身份的实物象征。想象一下，一位远道而来的公主，在这里接过城堡的钥匙，这不仅是一份聘礼，更意味着她在这片陌生土地上拥有了属于自己的领地和庇护所。在皇权更迭、政局动荡的中世纪，这样一座坚固的城堡，是王后们最实际的安全保障和经济基础。因此，它的历史叙事跳脱了纯粹的军事攻防，更多地与宫廷政治、王室联姻以及中世纪女性的地位交织在一起，这在欧洲城堡史中是独一无二的，让它从一众“国王的城堡”中脱颖而出，成为一朵承载着柔韧力量的“石头玫瑰”。`} />
                <InfoRow label="建筑特色" value={`迪欧什焦尔城堡的外观极具辨识度，是匈牙利境内保存最完好的中世纪四塔方形城堡典范。它整体呈一个规整的四边形，四角各矗立着一座圆柱形的塔楼，像四位沉默的巨人，共同托起一片方形天空。墙体由当地开采的深灰色和赭石色石材砌成，厚重而粗粝，阳光照射下，岩石的颗粒质感清晰可见，仿佛能触摸到几个世纪的风霜。城堡外围曾环绕着宽阔的护城河（现已干涸，遗迹犹存），唯一的入口通过一座木制吊桥连接，完美还原了中世纪要塞的防御姿态。走入内庭，你会被一种奇特的“完整性”所震撼——四周是三层高的连贯建筑，底层是拱廊，上层是宫殿房间，所有建筑都被包裹在统一的城墙内，形成一个内向的、自成一体的世界。与许多只剩断壁残垣的城堡不同，迪欧什焦尔经过精心修复，屋顶覆盖着深红色的石板瓦，塔楼顶部的锥形尖顶完好无损，在蓝天映衬下，勾勒出坚实而优美的天际线，既有军事建筑的雄浑，又不失王室居所的精致气度。`} />
                <InfoRow label="建筑风格" value={`迪欧什焦尔城堡主要体现了中世纪罗马式风格向哥特式风格的过渡，并带有鲜明的匈牙利本土 adaptation（适应）。你可以从它厚重敦实的墙体、较小的窗户以及半圆形的拱门和拱廊中，看到罗马式风格强调防御与稳固的特点。同时，建筑细节也开始出现哥特式的萌芽，比如某些窗户的顶部开始出现轻微的尖拱形态，以及内部空间追求更高的垂直感。不过，它最显著的风格特征是“四塔方形城堡”的布局，这是一种流行于13-14世纪中欧，特别是匈牙利地区的城堡形制。这种风格的核心是实用性与象征性的结合：四座塔楼提供了无死角的防御视野和火力支援，而方正的庭院则便于驻军和举行仪式，象征着秩序与权威。在这里，风格不是炫技式的装饰，而是功能与地位的直接表达。每一块石头、每一个射击孔，都在诉说着它作为王室要塞兼宫殿的双重身份。这种质朴、强悍而又规整的美学，与后来华丽繁复的巴洛克宫殿形成鲜明对比，让你能最直观地感受到中世纪匈牙利王国的力量与审美。`} />
                <InfoRow label="文化价值" value={`对于现代匈牙利人，尤其是米什科尔茨的居民而言，迪欧什焦尔城堡远不止是一个旅游景点。它是城市历史的根脉，是地域自豪感的源泉。在经历了奥斯曼帝国的破坏和漫长岁月的遗忘后，20世纪下半叶开始的系统性修复与重建，本身就是一场伟大的文化复兴运动。今天的城堡不再有王后居住，但它“活”在了另一种形式中——它成为了一个活跃的文化中心。每年夏季举办的“迪欧什焦尔城堡骑士节”是匈牙利最负盛名的历史重演活动之一。届时，城堡“复活”为喧闹的中世纪市集，铁匠铺火花四溅，骑士们披甲持矛进行马上枪术比赛，空气中弥漫着烤肉和麦酒香气。这不仅仅是一场表演，更是当代匈牙利人连接祖先记忆、传承民族精神的生动课堂。它让厚重的历史变得可触摸、可参与，孩子们在这里第一次理解了“骑士精神”与“王后传说”。因此，这座城堡的文化价值在于它成功地从一件静态的历史文物，转变为一个动态的、持续产出新文化内容与社区认同的“生命体”。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 迪欧什焦尔王后城堡一日游打卡路线攻略`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`从米什科尔茨出发的完美自由行路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的专属向导，这份**自由行指南**为你规划了一条轻松又充实的路线。建议你上午10点左右从米什科尔茨市中心搭乘2路有轨电车出发，约20分钟就能抵达“迪欧什焦尔城堡”站。下车后，跟着指示牌穿过一片宁静的居民区，城堡的塔楼会渐渐从树梢后浮现。上午时光，先别急着进内庭，沿着城堡外围走一圈，从不同角度欣赏四塔的雄姿和护城河遗迹，感受它的防御体系。随后过吊桥进入内庭，参观城堡历史博物馆，了解“王后礼物”的由来。中午，就在城堡脚下的花园餐厅享用一顿地道的匈牙利午餐。下午是重头戏，深入探索修复后的宫殿房间，在王后大厅凭窗远眺，然后一定要登上西南角的主塔楼，这里是俯瞰整个城堡庭院和远方山景的绝佳**打卡点**。如果恰逢夏季骑士节，整个下午都可以沉浸在热闹的中世纪氛围里。傍晚时分，当游客散去，在城墙散步，看夕阳为石墙镀上金红色，是最有韵味的时刻。最后乘电车返回市区，结束这趟穿越时空的一日之旅。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1. 主塔螺旋楼梯的光影游戏：</strong> 攀登西南主塔的螺旋石梯是必须的体验。楼梯狭窄盘旋，石阶被无数双脚磨得中心微微凹陷，光滑沁凉。最妙的是光线从塔身高处狭小的箭孔斜射进来，在旋转的墙壁上投下移动的、锐利的光斑。你向上攀爬时，光影在你身边流转，仿佛穿越一条通往14世纪的时光隧道。当你气喘吁吁登上塔顶，推开木门，豁然开朗的视野便是对你所有努力的最佳奖赏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>2. 王后寝宫复原的蓝丝绒帷幔：</strong> 在二楼复原的王后寝宫里，注意看那张四柱床和窗户边悬挂的帷幔。它们使用的是一种深蓝色的丝绒，颜色浓郁得像午夜的天空。尽管是复制品，但材质的选择极其考究。想象一下，当烛火摇曳，厚重的丝绒不仅能御寒，更将房间笼罩在一种私密、静谧的蓝色光晕中。手指轻轻拂过织物表面，那份柔滑与微凉，瞬间将王后远离家乡、在此安寝的孤独与尊贵感拉到你眼前。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>3. 骑士大厅的铠甲与壁炉：</strong> 大厅里陈列的一整套15世纪风格的板甲，并非冰冷的摆设。走近细看，盔甲关节处精巧的铆接和活动设计，胸甲上锤锻出的仿肌肉线条，都展现着中世纪工匠的功能美学。尤其要观察壁炉，它大得足以站进一个人，炉膛上方的石质烟罩雕刻着简单的纹章。冬日，当炉火熊熊燃烧，热量通过巨大的石壁辐射到整个大厅，铠甲的表面也会映出跳动的火光，骑士们的聚会该是多么温暖而豪迈的场景。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>4. 东塔楼窗框外的风景画：</strong> 东塔楼的一个房间，保留着古老的石质窗框。不要只看房间内部，请务必走到窗前。这个特定的窗口，如同一个天然的画框，将远处米什科尔茨的城市轮廓和更苍翠的比克山自然保护区框成一幅活生生的风景画。现代与自然在古老的石框内和谐共存，这个视角提醒着你，城堡始终是这片土地的守望者，无论时代如何变迁。" }} />
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "首先，<strong>避开人流</strong>的关键在于时间选择。城堡最热闹的是夏季周末，尤其是骑士节期间，人潮汹涌。若想享受宁静，最好在平日或春秋季的上午早点到。其次，<strong>穿着建议</strong>务必重视：城堡内多为石阶、石板地和螺旋楼梯，且部分路段不平整，<strong>绝对不要</strong>穿高跟鞋或底滑的鞋子，一双舒适耐磨的运动鞋或徒步鞋是保障你安全畅游的“最佳装备”。关于<strong>门票与交通</strong>：门票可在入口处购买，但官网有时会发布临时闭馆或特殊活动信息，行前最好简单查阅一下。从米什科尔茨市中心来的2路电车班次频繁，不用担心交通，但回程时留意末班车时间（通常较晚）。最后，城堡内部有些房间较暗，如果想看清细节或拍照，一个小手电筒或手机电筒会很有用。夏季塔楼内可能闷热，记得带水。" }} />
            </div>
          </Section>

          <Section title={`6. 迪欧什焦尔城堡周边住宿与美食攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡脚下就有一家氛围十足的餐厅 <strong>“Kastélykert”</strong>（意为城堡花园），强烈推荐在这里解决午餐。他们的露台正对城堡城墙，景致无敌。一定要试试匈牙利国菜“古拉什”炖牛肉，汤汁浓郁，牛肉酥烂，配上面疙瘩，能量满满。还有经典的“匈牙利鱼汤”，酸辣开胃。如果想吃点轻食，他们的煎饼和当地奶酪拼盘也不错。住宿方面，如果你想沉浸在中世纪氛围里，可以考虑预订米什科尔茨市中心一些具有历史特色的精品酒店或公寓。虽然城堡内不能住宿，但市区选择更多，交通也方便。有些民宿主人甚至会为你讲述更多关于城堡的本地传说。如果想体验更静谧的乡村，城堡附近也有家庭经营的“农家乐”式住宿，醒来就能听到鸟鸣，远眺城堡塔楼。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从城堡出发，有两个<strong>小众景点推荐</strong>非常值得延伸探索。一是 <strong>Miskolctapolca的洞穴浴场</strong>，乘坐几站电车即可到达。这是一个天然洞穴内的温泉浴场，在钟乳石洞中畅游，体验冰火两重天的奇妙感（从中世纪石堡到地下温泉，堪称完美搭配）。二是 <strong>Avas山观景台与改革教堂</strong>，位于米什科尔茨市中心另一侧。登上Avas山，可以俯瞰整个米什科尔茨的城市全景，尤其黄昏时分，看城市灯光亮起，与白天探访的古堡形成古今对话。山上的中世纪改革教堂本身也是一座低调的瑰宝。这两个地方都能让你从不同维度，更深入地理解这片土地的自然与人文。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "迪欧什焦尔城堡的灵魂，在于它将“坚固”与“馈赠”这两个矛盾的词完美融合在了一起。它用最坚硬的石头，筑起了一座关于柔软情感——爱情、承诺与庇护——的永恒象征。在这里，你触摸到的不仅是冰冷的城墙，更是一把把曾经交到王后手中的、象征独立与尊荣的温暖钥匙。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/s-rospatak-renaissance-castle-and-college" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沙罗什保陶克</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sárospatak</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/visegrad-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维谢格拉德（多瑙河湾的云端皇宫遗址）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Visegrád</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cegled-calvinist-great-church" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    采
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">采格莱德加尔文派大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cegléd Calvinist Great Church</p>
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
