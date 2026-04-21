import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '欧伦城堡深度旅游攻略：悬崖上的童话与朝圣之地俯瞰指南',
  description: '探索葡萄牙欧伦城堡（Castle of Ourém）深度游攻略。登上陡峭山顶，揭秘奇特双塔防御城堡，获取最佳打卡攻略，并解锁俯瞰法蒂玛圣地的绝密视角。',
}

export default function OuremCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '葡萄牙', href: '/destinations/europe' },
            { label: '圣塔伦区', href: '/destinations/europe' },
            { label: '欧伦城堡', href: '/attractions/ourem-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`欧伦城堡・Castle of Ourém・葡萄牙・圣塔伦区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果让我推荐一个能瞬间让你感觉穿越到中世纪骑士传说里，同时又能获得“上帝视角”的地方，那一定是欧伦城堡。它不像里斯本的热闹，也没有波尔图的酒香，但它就那么孤傲又奇特地杵在圣塔伦区一座笔直的山尖上，像一块被时光遗忘的巨石堡垒。今天这份欧伦城堡私藏旅游攻略，就是你的专属自由行指南。我会带你一起喘着气爬完最后一段坡，当山风呼啸着吹过耳边，眼前猛地展开那两座标志性的圆锥形塔楼和脚下无与伦比的辽阔平原时，你会明白所有的攀登都值了。这不仅仅是一个景点，这是一次关于毅力、历史和信仰俯瞰的沉浸式体验。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友，如果让我推荐一个能瞬间让你感觉穿越到中世纪骑士传说里，同时又能获得“上帝视角”的地方，那一定是欧伦城堡。它不像里斯本的热闹，也没有波尔图的酒香，但它就那么孤傲又奇特地杵在圣塔伦区一座笔直的山尖上，像一块被时光遗忘的巨石堡垒。今天这份欧伦城堡私藏旅游攻略，就是你的专属自由行指南。我会带你一起喘着气爬完最后一段坡，当山风呼啸着吹过耳边，眼前猛地展开那两座标志性的圆锥形塔楼和脚下无与伦比的辽阔平原时，你会明白所有的攀登都值了。这不仅仅是一个景点，这是一次关于毅力、历史和信仰俯瞰的沉浸式体验。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`欧伦城堡`} />
                <InfoRow label="英文名称" value={`Castle of Ourém`} />
                <InfoRow label="正式名称" value={`Castle of Ourém`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`圣塔伦区`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`欧伦城堡的历史，是一部写在悬崖上的葡萄牙王国边境史诗。在基督教王国与摩尔人势力拉锯的时期，这个扼守高地的位置具有无与伦比的战略价值。12世纪，葡萄牙第一任国王阿方索·亨里克从摩尔人手中夺取了这里，它从此成为王国向北扩张和巩固内陆的重要前哨。但让它真正在葡萄牙民族传奇中留下浪漫一笔的，是15世纪的传奇人物——第一代欧伦伯爵，唐·阿方索。他是航海家恩里克王子的亲密伙伴，一位战功赫赫的骑士。传说他为了爱情（一位美丽的摩尔公主）而建造或改建了这座城堡，赋予其独特的宫殿与防御结合的特征。城堡见证了葡萄牙从收复失地运动到开启大航海时代的过渡期，它既是军事要塞，也是贵族权力的象征，其双重圆锥塔楼的奇特设计，在当时欧洲的防御建筑中都堪称独树一帜，彰显了那个时代葡萄牙人的雄心与创新精神。`} />
                <InfoRow label="建筑特色" value={`第一眼看到欧伦城堡，你一定会被它的“超现实感”击中。它不像寻常城堡那样四平八稳，而是完全顺应着嶙峋山脊的走向，建筑与巨石浑然一体。最吸睛的无疑是那两座**双重圆锥形塔楼**，它们像一对巨大的石制尖顶帽，又像是从山体中生长出来的巨型竹笋。塔身由厚重的浅黄色石灰石砌成，石块粗糙而坚固，历经风雨侵蚀后呈现出斑驳的蜂蜜色与灰白色纹理。塔楼并非完美的圆锥，而是带有清晰的、一层层向上收分的棱面，这是当年搭建脚手架和施工的痕迹，如今成了独特的岁月肌理。连接双塔的主楼墙体高大敦实，窗户狭小。走近触摸，石墙冰凉粗粝，缝隙间也许还能找到小小的蕨类植物。整座城堡没有任何多余的装饰，它的全部美学就在于那种基于地形和功能的、近乎野蛮的几何力量感，在澄澈的蓝天背景下，勾勒出极具冲击力的剪影。`} />
                <InfoRow label="建筑风格" value={`欧伦城堡是**晚期哥特式军事建筑**与早期**曼努埃尔风格**萌芽期特征的混合体，你可以称之为“葡萄牙独特的防御-宫殿式风格”。经典的哥特式元素体现在其作为要塞的本质：高耸、难以攀爬的位置，厚重的墙体，以及防御用的雉堞和狭小的射箭孔。然而，那标志性的双重圆锥形塔楼，则跳脱了传统北欧哥特式方塔或圆塔的范式。这种圆锥造型在葡萄牙建筑中有所出现，尤其是在曼努埃尔风格时期（与大航海时代相关），常被用于灯塔或纪念性塔楼。在欧伦城堡，它可能更早地被应用，体现了葡萄牙建筑在地理大发现前夕的一种本土化探索和创新欲望。它不是繁复的，而是用一种简洁、雄浑的几何形态，表达着权力与守望。城堡内部的拱顶和空间布局，也显示了从纯粹军事堡垒向兼具居住舒适性的贵族官邸过渡的特点。`} />
                <InfoRow label="文化价值" value={`对于葡萄牙人而言，欧伦城堡远远不止是一座古老的石头建筑。它是民族坚韧精神的物理象征——建立在最艰难之地，守望国土。同时，因为那段关于唐·阿方索伯爵与摩尔公主的爱情传说，它也被赋予了“浪漫堡垒”的色彩，成为了当地文化遗产中关于包容与爱情故事的一个载体。而在现代，其最深刻的文化价值或许在于它所提供的那个**独一无二的视角**。从城堡的城墙望出去，世界著名的**法蒂玛圣母朝圣地**尽收眼底。你可以清晰地看到圣殿广场巨大的几何轮廓和圣殿本身。这个视角巧妙地将葡萄牙的世俗军事历史与其深厚的天主教信仰并置在同一画面中，引发无限遐思。对于来访者，尤其是朝圣者而言，在欧伦城堡俯瞰法蒂玛，是一种将历史、风景与灵性沉思结合在一起的深刻体验，这是任何一张航拍图都无法替代的。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 欧伦城堡一日游打卡路线攻略：从攀登到俯瞰法蒂玛全记录`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的专属向导，这份自由行指南请收好！我们的欧伦城堡一日游，主打一个“由远及近，由下至上”的沉浸感。**上午（10:00-12:30）**：建议从山脚下的**欧伦历史小镇（Vila Medieval de Ourém）** 开始。别急着上山，先在铺着鹅卵石的宁静老街巷里走走，看看古老的喷泉和民居，感受一下“山脚下的生活”。从这里仰视城堡，那种压迫感和雄伟感最强。然后，做好心理准备，开始沿着清晰但陡峭的步行小径或公路向上攀登（约20-30分钟），这是体验城堡“险要”的第一课。**中午（12:30-14:30）**：抵达城堡入口。先别急着冲进去，在城墙外的空地上喘口气，拍下双塔的全貌。随后进入城堡内部探索，主广场、蓄水池遗址、各个塔楼的基座都值得一看。午餐可以简单解决，或者在城堡附近的长椅上享用自带简餐，伴着山风和全景。**下午（14:30-17:00）**：重点来了！花至少一个小时，沿着城墙慢慢走，从每一个角度寻找和辨认远处**法蒂玛**的建筑。西北角的视野通常最开阔。静静欣赏，拍照，感受这份宁静与宏大。然后可以下山，回到历史小镇，在咖啡馆坐坐。**傍晚**：如果体力允许且自驾，可以驱车前往法蒂玛（约15分钟车程），亲身体验朝圣地的夜晚氛围，与白天俯瞰的视角形成奇妙的呼应。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>双重圆锥塔楼的近观与触摸</strong>：远看震撼，近看更觉其工艺的不可思议。站在塔楼脚下抬头仰望，圆锥的弧线仿佛要压下来。用手触摸那些巨大的石块，感受数百年日晒雨淋留下的温度差——向阳面温暖干燥，背阴处冰凉湿滑。仔细观察石块间的接缝，想象当年工匠们是如何在没有现代机械的情况下，将这些巨石精准地垒砌成如此规则的圆锥体。这是整座城堡的灵魂所在。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>“国王之眼”窗户</strong>：在主楼朝向法蒂玛方向的某一面，留意寻找一个相对较大、带有石雕窗框的窗户。我把它叫做“国王之眼”。当年，城堡的主人或许就站在这里，巡视着他的领地，远眺着远方的地平线。如今，你站在同样的位置，视线可以毫无阻挡地穿越数公里，直接落在法蒂玛圣殿的圆形广场上。这一眼，连接了权力与信仰，过去与现在。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>城堡庭院中的古老蓄水池</strong>：在城堡内部广场的中心或一侧，你会发现一个巨大的、以精美石块砌成的方形或圆形蓄水池遗址。这是城堡的生命线。蹲下身，看着深邃的池底（现在通常是干的），想象在围城时期，这池水是如何维系着守卫者的生存。石壁上可能覆盖着青苔，阳光斜射入池中，形成一道光柱，更添几分历史的幽深感。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>城墙边缘的“凌空视角”</strong>：一定要鼓起勇气，走到城墙边缘的垛口（注意安全！）。抓住粗糙的石块，探出一点点身子。向下看，是令人眩晕的、几乎垂直的悬崖峭壁，植被稀疏，岩石裸露。向前看，则是无限延伸的平原，田畴、道路、村镇像模型一样铺开，而法蒂玛的建筑群在其中显得格外规整和醒目。风在这里变得猛烈，呼啸着穿过垛口，这一刻你最能体会城堡作为“鹰巢”的孤高与战略性。" }} />
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>交通与攀登是最大挑战</strong>：这里没有缆车！公共交通班次有限，最方便是自驾。停车场在山脚下小镇，然后需要<strong>步行上山</strong>。路径是清晰的，但部分路段非常陡峭，请务必穿<strong>防滑、舒适的运动鞋或登山鞋</strong>。高跟鞋、皮鞋是绝对禁忌。夏天请清晨或傍晚登山，避开正午烈日，带足饮水。这是一次轻度徒步，请量力而行。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>避开人流与最佳时间</strong>：欧伦城堡不算大众景点，但周末和葡萄牙节假日当地人较多。<strong>最佳游览时间是工作日清晨或春季/秋季的平日下午</strong>，光线柔和，人少，俯瞰视野最清晰。夏季中午暴晒且可能因热浪空气通透度下降。城堡本身内部空间不大，精髓在室外和城墙，所以即使入口人多，分散到城墙上也会很快安静下来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>设施与准备</strong>：城堡是遗迹，<strong>内部几乎没有商业设施</strong>（无咖啡馆、无餐厅、小卖部也时有时无）。请务必在山下小镇买好水和零食。卫生间设施也可能非常简陋或只在入口处有。提前查好开放时间（谷歌地图或官网），以免吃闭门羹。另外，山上风大，温差可能明显，即使是夏季也建议带一件防风外套。" }} />
            </div>
          </Section>

          <Section title={`6. 欧伦城堡周边住宿与美食攻略：山脚下的小镇风情`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "住宿首选欧伦历史小镇（Vila Medieval de Ourém）里的<strong>家庭旅馆或乡村客栈</strong>。它们大多由古老的石屋改建，房间不多但充满特色，老板通常非常热情，能给你讲很多本地故事。晚上小镇极其安静，只有星星和远处城堡的轮廓，体验真正的中世纪村落夜晚。如果追求更多设施，可以住在车程约10-15分钟的<strong>法蒂玛（Fátima）</strong>，那里有从大型酒店到 pilgrim hostel 的各种选择，餐饮购物也更方便。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "美食方面，在山脚下小镇，找一家写着 “<strong>Tasca</strong>” 或 “<strong>Regional</strong>” 的小餐馆。一定要试试<strong>圣塔伦地区的特色菜</strong>，比如用大面包碗盛放的 “<strong>Açorda à Alentejana</strong>”（蒜香香菜面包浓汤），或者各种烤肉和炖菜。甜点可以尝 “<strong>Queijadas de Ourem</strong>”，这是一种本地特色的奶酪小蛋挞，甜而不腻。在一家名叫 “<strong>O Caçador</strong>” 的家庭式餐厅，你能吃到非常地道的野味和农家菜，分量实在，就像去葡萄牙奶奶家吃饭一样温暖。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>法蒂玛圣母朝圣地（Fátima）</strong>：这几乎是欧伦城堡之旅的“另一半”。从城堡上你已经凝视了它很久，是时候亲身走进这个全球最重要的天主教朝圣地之一。感受<strong>圣殿广场</strong>的宏大，在<strong>显灵小教堂</strong>前静思，如果恰逢每月13日（5-10月），更能目睹万人烛光游行的震撼场面。从宗教、建筑到人文体验，这里都与悬崖上的城堡形成绝妙的互补。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>古老的欧伦桥（Ponte Medieval de Ourém）</strong>：下山后，不妨沿着河流散散步，寻找这座位于小镇入口附近的中世纪石桥。它静卧在绿树掩映的溪流之上，桥拱优美，石头上布满青苔。这里几乎没有游客，只有流水鸟鸣。站在桥上回望山顶的城堡，你会获得另一个经典而宁静的视角，完美结束一天的时空穿梭之旅。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "欧伦城堡的灵魂，在于那份极致的“对峙感”——它与险峻地形的对峙，军事防御与浪漫传说的对峙，以及城堡所代表的尘世权力与它日夜守望的信仰圣地之间的无言对话。它不止是石头，更是一个悬浮在天空与大地、历史与当下之间的沉思平台。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/ponta-delgada-azores" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蓬
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蓬塔德尔gada（黑白玄武岩拼花人行道与古典建筑交织的火山岛之都）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ponta Delgada</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/mertola-guide" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅尔图拉</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mértola</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/castelo-de-vide-judaica" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡斯特卢-迪维迪（阿连特茹的犹太遗风小镇）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Castelo de Vide</p>
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
