import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '圣埃尼米深度旅游攻略：塔恩峡谷隐世小镇，漫步千年鹅卵石阶梯指南',
  description: '圣埃尼米（Sainte-Enimie）深度游攻略，带你探索法国最美村庄。揭秘中世纪修道院传说、鹅卵石巷弄打卡路线、峡谷秘境及实用避坑指南。',
}

export default function SainteEnimiePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '法国', href: '/destinations/france' },
            { label: '圣埃尼米', href: '/attractions/sainte-enimie' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`圣埃尼米・Sainte-Enimie・法国・洛泽尔省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你受够了人挤人的热门小镇，想找一个连时间都愿意放慢脚步的地方，那今天这份圣埃尼米私藏旅游攻略，就是为你准备的。它像一颗被塔恩峡谷温柔包裹的珍珠，藏在法国南部的洛泽尔省。这里没有大巴车的喧嚣，只有泉水潺潺、石板路回响，和一个关于中世纪公主修女的美丽传说。作为你的专属向导，这份自由行指南会带你穿过迷宫般的鹅卵石阶梯，抚摸被阳光晒暖的古老石墙，在峡谷的臂弯里喝一杯咖啡，真正体验什么叫“躲进世外桃源”。准备好了吗？我们出发吧。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，如果你受够了人挤人的热门小镇，想找一个连时间都愿意放慢脚步的地方，那今天这份圣埃尼米私藏旅游攻略，就是为你准备的。它像一颗被塔恩峡谷温柔包裹的珍珠，藏在法国南部的洛泽尔省。这里没有大巴车的喧嚣，只有泉水潺潺、石板路回响，和一个关于中世纪公主修女的美丽传说。作为你的专属向导，这份自由行指南会带你穿过迷宫般的鹅卵石阶梯，抚摸被阳光晒暖的古老石墙，在峡谷的臂弯里喝一杯咖啡，真正体验什么叫“躲进世外桃源”。准备好了吗？我们出发吧。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`圣埃尼米`} />
                <InfoRow label="英文名称" value={`Sainte-Enimie`} />
                <InfoRow label="正式名称" value={`Sainte-Enimie`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`洛泽尔省`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`圣埃尼米的名字，源于一位七世纪的公主——埃尼米。传说她容貌倾城，却不幸患上麻风病，为逃避政治婚姻，她遁世隐居，在塔恩峡谷的泉水中沐浴后竟奇迹般痊愈。为此，她决心在此修建修道院并终老，小镇因此诞生并得名。在中世纪，这里因她的圣迹和紧邻圣地亚哥朝圣之路支线（通往孔波斯特拉的“塞文之路”）而繁荣，成为重要的宗教与文化驿站。它的历史并非王侯将相的宏大叙事，而是一个关于信仰、治愈与个人选择的幽微故事。小镇因此与峡谷的自然力量（那眼治愈之泉至今仍在）深深绑定，它的存在本身，就是欧洲中世纪虔诚精神与自然崇拜交融的活化石，历经千年，安静地述说着人与地方之间那份神圣的联结。`} />
                <InfoRow label="建筑特色" value={`圣埃尼米的建筑之美，在于它完全“长”在峡谷的斜坡上。房屋依山而建，层层叠叠，主要采用当地出产的石灰岩。这种石头在阳光下呈现出从暖黄到淡金色的细腻变化，阴雨天则泛着清冷的灰蓝。屋顶是典型的塞文地区石板瓦，厚重、齐整，像一片片深灰色的鳞片。最迷人的是那些蜿蜒曲折的巷弄，路面全由巨大的鹅卵石铺就，这些石头被数个世纪的脚步磨得光滑圆润，在正午的阳光下像一条流动的银河，雨天则倒映着两旁石屋温暖窗灯的光晕。窗户窄小而深邃，窗台上必定点缀着天竺葵或矮牵牛，那抹怒放的绯红或娇紫， against 粗粝的石墙，是小镇最生动的表情。一切建筑都显得谦卑而坚固，仿佛是从山岩中自然生长出来的。`} />
                <InfoRow label="建筑风格" value={`小镇的整体风貌是质朴的罗曼式风格与强烈的本地乡土建筑的结合。你很难找到繁复的哥特尖塔或华丽的巴洛克装饰，这里的一切讲究实用与融合。罗曼式风格体现在其古老的圣埃尼米修道院教堂上：厚重的石墙、半圆形的拱券、小而高的窗户，给人一种沉稳、庇护的感觉。而更多的民居建筑则属于典型的“塞文建筑”：为了适应陡峭地形，房屋进深很浅但层高可能增加；为了抵御峡谷的强风和冬季严寒，外墙几乎不开大窗，门户也做得十分坚固。这种风格不是出自某个建筑大师的蓝图，而是当地居民数百年来与严酷而美丽的自然环境对话、妥协、共存的结果。它不追求炫耀，只追求生存与和谐，形成了一种独一无二的、带有土地呼吸感的建筑美学。`} />
                <InfoRow label="文化价值" value={`对现代人而言，圣埃尼米如同一剂温柔的“解药”。它代表的是一种近乎失传的“地方感”和慢生活哲学。小镇居民不足600人，许多人世代居住于此，他们守护着古老的传说，维护着祖辈的石屋，经营着家庭旅馆和小餐馆。这里每年举办的“中世纪节”，并非大型商业秀，而是社区居民自发穿上古装，在街巷里重现古老手工艺和集市，是真正意义上的文化传承。对于外来的访客，圣埃尼米提供了另一种生活范本：在峡谷的寂静中聆听自己的心跳，在泉水的清凉中感受自然的疗愈力。它提醒着我们，生活的丰富性不在于拥有多少，而在于感知多深。这个小村已然成为逃离现代性焦虑的一个符号，一个让人重新学会“停留”和“感受”的文化圣地。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 圣埃尼米一日游打卡路线攻略：从修道院到峡谷深处的完美步行指南`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`经典自由行漫步路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好了，收好这份路线图，我们花一天时间，把自己彻底交给这个小镇。上午（9:00-12:30）：从镇口的停车场（通常也是观景台）开始，先俯瞰整个小镇嵌在峡谷中的全景，拍下第一张打卡照。然后沿着主路下行，直奔镇中心的灵魂——圣埃尼米修道院教堂。花时间在这里静静感受，看看传说中的圣埃尼米石棺。出来后，别走大路，随意扎进任何一条向上的鹅卵石阶梯小道，比如著名的“Rue du Barry”，这才是探索的精髓。任由自己迷路，用手触摸冰凉的墙壁，用鼻子嗅闻老木门和鲜花的混合气味。中午（12:30-14:00）：找一家能看到溪流或拥有石头拱顶地下室的餐厅享用午餐。下午（14:00-17:30）：有两个选择，文化派可以参观小镇的老磨坊和民俗博物馆；自然派则强烈推荐沿着塔恩河岸散步，向下游方向走，你会看到翡翠般的河水和悬崖绝壁，景色壮丽。或者，勇敢一点，参加一个短途的峡谷独木舟项目，从水上仰望小镇，视角绝无仅有。傍晚（17:30以后）：回到镇上，在咖啡馆的露天座喝一杯，等待灯光陆续亮起，将石头房子染成蜜色，这是圣埃尼米最魔幻的时刻。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  “公主之泉”的静谧一隅：在修道院后方，藏着一处被绿荫遮盖的泉眼，这就是传说中治愈了圣埃尼米的泉水。这里异常安静，只能听到细不可闻的滴水声和远处的鸟鸣。石槽里蓄着清澈见底、冰凉刺骨的水，水面倒映着蕨类和苔藓的绿影。将手浸入水中，那种直通骨髓的凉意，会让你瞬间与那个千年前的传说产生连接，仿佛触摸到了故事本身的脉络。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  鹅卵石阶梯上的光影戏剧：午后，选一条狭窄的阶梯巷弄，比如“Calade”路段。阳光会从两侧石屋的缝隙中斜切下来，在凹凸不平的鹅卵石路面上投下锐利而明亮的光斑，与深沉的阴影形成强烈的黑白对比。你的脚步时而在光明中，时而又没入阴影，光斑随着时间缓慢移动，就像一场无声而缓慢的光影戏剧，充满了几何的美感和时间的诗意。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  某扇褪色的蓝色木门：在迷宫般的小巷里，你会偶遇一扇古老的木门。它的蓝色油漆早已在风雨和日照下斑驳褪色，露出底下木头的纹理和更早的绿色漆层。门上的铁制门环被磨得发亮，手柄的形状契合手掌的弧度。这扇门不通往某个著名景点，但它本身就是一件艺术品，记录了数代人的日常进出，颜色的层次就是时间的层次，静静地讲述着关于“家”的私人历史。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  从河面回望的城堡视角：如果你选择了独木舟或沿着河岸散步，一定要停下来，从塔恩河平静的水面上回望小镇。你会看到所有的房子像积木一样紧紧簇拥在一起，修道院教堂的钟楼成为制高点，背后是巍峨的石灰岩悬崖。这个角度下，圣埃尼米不再是一个地面上的村庄，而是一座从水里“生长”出来的、防御森严的岩石城堡，展现出它作为峡谷守卫者雄浑而孤独的另一面。`}</p>
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`最佳时间与交通陷阱：7-8月是法国度假季，小镇会热闹很多，建议选择5-6月或9月前往，气候宜人，游客较少。最关键的一点：自驾是最佳选择，但小镇内部道路极窄且多为单行线，禁止外来车辆进入核心区。务必把车停在镇口指定的停车场（付费），然后步行进入。依赖公共交通会很麻烦，班次稀少。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿着是头等大事：忘掉漂亮的皮鞋或凉鞋！一定要穿一双抓地力极好、鞋底厚的徒步鞋或运动鞋。那些古老的鹅卵石阶梯光滑且不平整，上下坡度大，普通的鞋子会让你举步维艰，甚至滑倒。夏季也要带一件薄外套，峡谷阴影处和清晨傍晚会很凉。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`避开“午餐拥堵”和语言准备：小镇餐馆不多，最好在12:15前或13:30后去找午餐位置，避开法国人集中的午餐高峰。虽然旅游区英语可行，但学会说一句法语问候“Bonjour”（你好）和“Merci”（谢谢），会得到当地人更热情的笑容。这里治安非常好，但依然建议看管好随身物品，尤其在拥挤的观景台。`}</p>
            </div>
          </Section>

          <Section title={`6. 圣埃尼米周边住宿与美食攻略：住在石头屋里，尝地道峡谷风味`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`想真正融入这里，建议至少住一晚。小镇及周边有很多由古老石屋改造的民宿（Chambre d‘hôtes）或小型酒店。推荐选择一家带露台或窗户直面峡谷的房间，清晨在薄雾和鸟鸣中醒来是无价体验。例如，Le Relais de Sainte-Enimie 酒店位置中心，由传统建筑改建，风格古朴。餐饮方面，一定要尝试本地特色。Le Toutim 餐厅拥有可爱的河边露台，提供用本地食材烹饪的现代法餐。务必尝尝 “阿尔卑斯山奶酪”（Aligot），这是一种混合了奶酪、土豆泥和大蒜的绵密美味，能量十足。还有 “洛泽尔扁香肠”（Saucisse de Lozère） 以及各种野生蘑菇菜肴。午餐简单点的话，街角面包店的三明治也美味无比。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  科斯洞穴（Grotte de la Couse）：从小镇驱车不远即可到达。这个洞穴不如那些世界知名的溶洞华丽，但正因如此，它保持了更多的原始感和探险趣味。在导游带领下，你能看到令人惊叹的石笋、石幔，以及史前人类留下的痕迹。从黑暗的地下世界归来，你会更加珍视地上峡谷的阳光与生机，形成奇妙的感官对比。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  卡斯泰尔布-城堡（Castelbouc）的废墟：沿着D907bis公路向峡谷上游行驶一段，你会看到河对岸悬崖上有一处令人震撼的城堡废墟。它孤悬于绝壁之巅，只剩下破败的塔楼和城墙骨架，在夕阳下呈现出悲壮而浪漫的剪影。无需特意前往，就在路边停车观赏、拍照，感受一下中世纪防御工事与自然天险结合所带来的那种苍凉史诗感，这是对圣埃尼米作为定居点历史的另一种视觉补充。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`圣埃尼米的灵魂，不在于某个惊世骇俗的建筑，而在于它整体构成的、一种近乎凝固的和谐。它是石头、流水、光线与人类故事的完美合奏。在这里，你最大的收获可能不是拍到了多少张照片，而是你的感官被重新打开，学会了用指尖阅读石头的年轮，用耳朵倾听泉水的低语，用整个身心去感受一种缓慢、坚韧而充满灵性的生活。它就像一枚被塔恩峡谷精心收藏的时光琥珀，清澈、宁静，却蕴含着跨越千年的生命力量。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/arles-amphitheatre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔勒古罗马竞技场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Arles Amphitheatre</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/perouges" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩鲁日古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pérouges</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/dinan-medieval-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迪南中世纪古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dinan</p>
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
