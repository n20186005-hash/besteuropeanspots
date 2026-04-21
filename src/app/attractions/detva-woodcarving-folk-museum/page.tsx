import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '杰特瓦木雕与民俗露天博物馆 Detva Woodcarving and Folk Museum｜探访波拉纳山脚下，雕刻在木头上的彩色灵魂 - 最佳欧洲景点',
  description: '车子刚在波拉纳山脚下停稳，你就知道自己来对了地方。空气里有一股特别的香味——不是花香，而是松木、油漆和雨后泥土混合的、扎实而温暖的气息。眼前并不是你想象中那种规整的博物馆大楼，而是一片缓缓上升的草坡，像个被上帝无意间打翻了的调色盘。几十座、不，是上百座巨大的木十字架，就这么毫无章法又无比和谐地“长”',
}

export default function DetvaWoodcarvingFolkMuseumPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '斯洛伐克', href: '/destinations/europe' },
            { label: '代特瓦', href: '/destinations/europe' },
            { label: '杰特瓦木雕与民俗露天博物馆', href: '/attractions/detva-woodcarving-folk-museum' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`杰特瓦木雕与民俗露天博物馆・Detva Woodcarving and Folk Museum・斯洛伐克・代特瓦`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚在波拉纳山脚下停稳，你就知道自己来对了地方。空气里有一股特别的香味——不是花香，而是松木、油漆和雨后泥土混合的、扎实而温暖的气息。眼前并不是你想象中那种规整的博物馆大楼，而是一片缓缓上升的草坡，像个被上帝无意间打翻了的调色盘。几十座、不，是上百座巨大的木十字架，就这么毫无章法又无比和谐地“长”在草地上、树林边。它们每一座都比人还高，通体被涂上大胆鲜明的色彩：天空蓝、罂粟红、麦田金，在斯洛伐克清透的阳光下，耀眼得近乎天真。
走近了，那寂静中蕴含的喧哗才真正将你淹没。你听见风吹过木头顶端小型遮雨檐的细微呜咽，听见自己踩在草地上的沙沙声，但更响亮的，是那些沉默木头上迸发出的“声音”。每一个十字架都是一本立体的家族史诗。基座上雕刻着栩栩如生的圣徒面容，他们眉间是东正教圣像画般的沉静哀伤；十字架的横梁与竖梁交汇处，缠绕着玫瑰与葡萄藤的浮雕，那是生命与丰饶的象征；而在最下方，你常会看到一幅微缩的场景：一个农夫在犁地，一个女人在纺织，或是一家人围坐在桌旁。雕刻的刀法称不上学院派的精致，有些线条甚至显得笨拙，但那份从木头纹理里生长出来的诚恳与力量，直击人心。你会看到当地的老妇人，颤巍巍地走到某一个十字架前，用手帕轻轻擦拭雕像上的灰尘，然后画一个十字，静静站一会儿。那一刻你明白，这里不是冰冷的展区，而是他们生活与记忆的一部分，是连接逝者与生者、土地与天空的活着的桥梁。
最打动人心的，是那份在极度悲伤中开出的绚烂之花。这些十字架大多是为纪念逝去的亲人而立，本是哀悼的符号。但代特瓦的工匠们，却用最饱满的色彩、最旺盛的植物纹样、最朴素的劳动场景去装饰它。死亡在这里不是终结的黑色，而是被转化成了蓝色的永恒、红色的热爱、金色的希望，以及那永不停息的、关于播种与收获的生命循环。站在这片山坡上，你感受到的不是阴郁，而是一种磅礴的、扎根于泥土的乐观精神。它告诉你，最深的纪念，不是沉溺于泪水，而是用力地、色彩斑斓地继续生活下去。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子刚在波拉纳山脚下停稳，你就知道自己来对了地方。空气里有一股特别的香味——不是花香，而是松木、油漆和雨后泥土混合的、扎实而温暖的气息。眼前并不是你想象中那种规整的博物馆大楼，而是一片缓缓上升的草坡，像个被上帝无意间打翻了的调色盘。几十座、不，是上百座巨大的木十字架，就这么毫无章法又无比和谐地“长”在草地上、树林边。它们每一座都比人还高，通体被涂上大胆鲜明的色彩：天空蓝、罂粟红、麦田金，在斯洛伐克清透的阳光下，耀眼得近乎天真。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走近了，那寂静中蕴含的喧哗才真正将你淹没。你听见风吹过木头顶端小型遮雨檐的细微呜咽，听见自己踩在草地上的沙沙声，但更响亮的，是那些沉默木头上迸发出的“声音”。每一个十字架都是一本立体的家族史诗。基座上雕刻着栩栩如生的圣徒面容，他们眉间是东正教圣像画般的沉静哀伤；十字架的横梁与竖梁交汇处，缠绕着玫瑰与葡萄藤的浮雕，那是生命与丰饶的象征；而在最下方，你常会看到一幅微缩的场景：一个农夫在犁地，一个女人在纺织，或是一家人围坐在桌旁。雕刻的刀法称不上学院派的精致，有些线条甚至显得笨拙，但那份从木头纹理里生长出来的诚恳与力量，直击人心。你会看到当地的老妇人，颤巍巍地走到某一个十字架前，用手帕轻轻擦拭雕像上的灰尘，然后画一个十字，静静站一会儿。那一刻你明白，这里不是冰冷的展区，而是他们生活与记忆的一部分，是连接逝者与生者、土地与天空的活着的桥梁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动人心的，是那份在极度悲伤中开出的绚烂之花。这些十字架大多是为纪念逝去的亲人而立，本是哀悼的符号。但代特瓦的工匠们，却用最饱满的色彩、最旺盛的植物纹样、最朴素的劳动场景去装饰它。死亡在这里不是终结的黑色，而是被转化成了蓝色的永恒、红色的热爱、金色的希望，以及那永不停息的、关于播种与收获的生命循环。站在这片山坡上，你感受到的不是阴郁，而是一种磅礴的、扎根于泥土的乐观精神。它告诉你，最深的纪念，不是沉溺于泪水，而是用力地、色彩斑斓地继续生活下去。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`杰特瓦木雕与民俗露天博物馆`} />
                <InfoRow label="英文名称" value={`Detva Woodcarving and Folk Museum`} />
                <InfoRow label="正式名称" value={`Detva Woodcarving and Folk Museum`} />
                <InfoRow label="国家" value={`斯洛伐克`} />
                <InfoRow label="城市" value={`代特瓦`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这里是斯洛伐克上赫龙地区民间木雕艺术活态传承的核心圣地，其庞大的木制十字架群是欧洲独一无二的露天宗教艺术收藏。`} />
                <InfoRow label="建筑特色" value={`并非宏伟建筑，而是一片与自然山坡、森林和传统墓地融为一体的露天空间，核心展品是数百座雕刻繁复、色彩鲜艳的巨型木制十字架。`} />
                <InfoRow label="建筑风格" value={`斯洛伐克民间木雕与彩绘风格，融合了巴洛克式的繁复装饰与本地质朴的自然崇拜美学。`} />
                <InfoRow label="文化价值" value={`它是一座没有围墙的“悲伤教堂”，以最生动直观的方式记录了当地人的信仰、家族记忆与战胜苦难的生命力，是物质与非物质文化遗产的完美结合体。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`五月至九月：每日上午9:00至下午6:00，最晚入场时间为下午5:00。
十月至四月：仅在周二至周日上午10:00至下午4:00开放，周一闭馆。每年一月至二月为冬季维护期，完全关闭，出行前务必在官网确认。
重大节假日（如圣诞节、复活节）开放时间可能临时调整。`} />
              <InfoRow label="门票价格" value={`成人票：8欧元。
学生票（需持有效国际学生证）及65岁以上长者：5欧元。
家庭票（2大+最多3名15岁以下儿童）：18欧元。
6岁以下儿童及持有效证件的残疾人免费。
门票包含露天博物馆区域、室内民俗展览馆的参观以及一次约20分钟的雕刻技艺展示讲解。`} />
              <InfoRow label="地址" value={`Múzeum drevených krížov， Krížová 127, 962 12 Detva, Slovakia`} />
              <InfoRow label="交通方式" value={`最近的国际机场是科希策机场或布拉迪斯拉发机场，但最便捷的中转枢纽是班斯卡-比斯特里察市。
从班斯卡-比斯特里察火车站前的主汽车站，乘坐前往代特瓦的巴士，车程约45分钟至1小时，班次在工作日较为密集（约每小时一班），周末会减少。
抵达代特瓦镇中心后，博物馆位于镇郊的波拉纳山麓，从汽车站步行过去需要25-30分钟，或者可以搭乘当地的出租车（车程约5分钟）。如果你自驾，从班斯卡-比斯特里察出发沿R2公路行驶约30公里，博物馆外有免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要理解这片彩色十字架森林的由来，你得把时钟拨回近两百年前，并走进波拉纳山脚下那些冒着炊烟的木头农舍。19世纪的上赫龙地区，土地算不上肥沃，生活对于代特瓦的农民来说，是日复一日与严苛自然搏斗的艰辛故事。天主教是他们坚实的精神支柱，但去一趟遥远的石砌教堂并非易事。于是，一种更亲切、更触手可及的信仰表达方式在民间萌芽——为自己家的农场、为逝去的至亲，竖立一座木制的十字架。最初的十字架可能非常朴素，但斯洛伐克人灵魂中那种对美的天然渴望，很快让事情变得不一样。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里就必须提到那些无名亦或是有名的“Majstri”（大师/工匠）了。他们往往是农夫本人，在冬闲时节，当大雪封山，户外劳作停止，他们便在温暖的作坊里，对着从自家林场砍来的上好松木或橡木，开始神圣的创作。雕刻的技艺是父子相传、邻里相授的。没有图纸，图样都在心里：从教堂壁画上看来的圣像姿态，从自然中观察到的花草形态，还有日常生活中最熟悉的劳作工具。渐渐地，一套独特的视觉语言形成了：圣乔治屠龙保卫家园的英勇，圣母玛利亚抚慰人心的温柔，守护牲畜的圣温德林，以及那些镰刀、纺锤、蜂箱的图案，全部被虔诚而生动地刻了上去。上色用的也是自家调制的矿物颜料，色泽浓烈持久，仿佛要把对抗漫长灰暗冬季的所有热情，都倾注在这木头上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，这片土地在20世纪经历了巨大的动荡。两次世界大战的阴影，社会主义时期对宗教活动的限制，都曾让这一传统面临中断的风险。公共场合的宗教表达受到压制，但深植于家庭与血脉中的记忆却无法被轻易抹去。一些家庭冒着风险，仍将十字架悄悄立在了更偏僻的家族墓地上或森林边缘。这些十字架，成了沉默的抵抗者，承载的不仅是信仰，更是对自身文化身份的坚守。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转机发生在20世纪后期。随着社会开放，人们开始重新审视并珍视自己的文化根脉。当地有识之士意识到，这些散落各处、日益朽坏的艺术瑰宝急需系统性的保护。于是，“木雕十字架博物馆”的构想被提出。这绝非简单地把十字架收集起来堆放，而是一次充满敬意的迁徙与重建。工作人员遍访山野乡村，征得家族同意后，将那些因风吹日晒而濒临损毁、或是因为土地规划面临拆除的古老十字架，小心翼翼地迁移到这片精心挑选的山坡上。每一座十字架都被修复、加固，并记录了它背后的家族故事。这里，于是从一个“墓地”，升华为一座没有围墙的露天圣殿，一部立体的民间艺术编年史。今天，你看到的不仅是艺术品，更是一个社区用双手守护自己灵魂的动人史诗。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你在一个晴朗的上午，最好是工作日前来，能获得最宁静的体验。整个游览需要预留至少3到4小时，节奏宜慢不宜快。上午的光线最适合拍照，而且气候凉爽，便于你在户外山坡漫步。抵达后，先别急着冲向十字架群，应该从入口处的室内民俗展览馆开始。这里规模不大，但能快速为你构建文化背景，让你了解工具、颜料和传统服饰，之后面对那些庞大的十字架时，你不再是看热闹的外行，而是能读懂故事的知音。从展馆出来后，沿着清晰的主路径上山，让景观由疏到密，情绪逐渐累积。最后在墓地区域达到情感共鸣的高潮，然后你可以绕到侧面的小径下山，从不同角度回望这片彩色森林，并在出口处的工作坊观摩匠人现场雕刻，为旅程画上一个生动的句号。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`这片区域基本上是露天环境，斯洛伐克的天气说变就变，务必随身携带一件防水外套或雨伞。参观墓地部分时，请保持肃静和敬意，不要触摸或倚靠十字架。山路小径有些地方是天然土路，建议穿着舒适防滑的鞋子。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`先走进那栋朴素的木屋室内展馆，在略显昏暗的光线下仔细看看玻璃柜里那些雕刻刀的不同刃口和已经干涸成块的古老颜料罐。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着缓坡小径正式开始露天之旅，让第一座独立在开阔草坪上的蓝色十字架用它巨大的身影和精细的葡萄藤雕刻迎接你。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过一片小桦树林，眼前豁然开朗，你会发现自己置身于十字架“丛林”中，可以近距离观察每一座十字架上截然不同的圣徒面容和生活场景浮雕。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着小路走到山坡较高处的传统墓地复原区，这里的十字架最为密集，请放慢脚步，阅读一些铁皮小牌上简短的家庭故事，感受最深沉的纪念氛围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从墓地另一侧的一条安静小径下山，回头望去，你能看到十字架群与背后波拉纳山森林层次交错的壮丽全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后一定不要错过那个冒着木头清香的现场雕刻工作坊，看一位老匠人如何用最简单的工具让一块平凡的木料焕发生命。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间充裕，坐在入口处附近的长椅上发会儿呆，看光影在彩色木雕上移动，或许还能遇到前来维护自家十字架的家庭，那会是额外的馈赠。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`山坡底部仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏时分，站在入口草坪上，用广角镜头仰拍，将数座高大的彩色十字架与广阔的蓝天、波拉纳山的轮廓一同纳入画面，色彩与自然的对比极具冲击力。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`十字架丛林特写时刻`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点后，阳光能较好地照亮十字架侧面，选择一座雕刻特别精美的，贴近拍摄其局部细节，如圣徒的脸庞或缠绕的花纹，利用大光圈虚化背景的其他十字架，突出主体故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`传统墓地俯拍视角`}</h4>
                  <p className="text-sm text-gray-700">{`走到墓地区域的最高点，向下俯拍，可以捕捉到十字架层层叠叠、错落有致的韵律感，最佳光线在下午，那时影子会被拉长，增加画面的深度和肃穆感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`工匠工作坊纪实抓拍`}</h4>
                  <p className="text-sm text-gray-700">{`在工作坊窗外或获得允许后室内拍摄，捕捉老匠人全神贯注雕刻的瞬间，木屑飞扬的动感与老人沉静的面容形成动人对比，使用自然侧光最能体现质感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`利用侧光或逆光拍摄，能极大强化木雕的立体感和色彩的通透度。建议携带一支变焦镜头，方便在全景与特写之间切换。请注意，如果看到有家庭正在某座十字架前举行小型纪念活动，请主动暂停拍摄，以示尊重。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`山居木屋体验`}</h4>
                  <p className="text-sm text-blue-800">{`就在波拉纳山脚附近的几家传统木制民宿，晚上能听见森林的呼吸，主人通常会端出家庭腌制的奶酪和自酿的梅子白兰地招待你。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`小镇家庭旅馆`}</h4>
                  <p className="text-sm text-green-800">{`住在代特瓦镇中心安静街区的家庭旅馆，价格亲切，早晨可以像本地人一样去面包店买新鲜出炉的“罗日基”，体验小镇的苏醒。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`班斯卡-比斯特里察历史酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`如果追求更多设施和餐饮选择，可以住在半小时车程外的州府班斯卡-比斯特里察，选择一家由老建筑改造的精品酒店，同时游览那座迷人的中世纪广场。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`波拉纳山森林疗愈酒店`}</h4>
                  <p className="text-sm text-purple-800">{`对于想深度融入自然的人，山上有专注于宁静与疗愈的精品酒店，拥有直面森林的落地窗和桑拿房，是徒步探索山区后完美的放松归宿。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "代特瓦小镇非常安全宁静，但夜生活几乎为零，享受的是绝对的静谧。山区的民宿和酒店在夏季徒步旺季和冬季滑雪季非常紧俏，务必提前数月预订。如果选择住在外地，务必查好返回的巴士末班车时间。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开杰特瓦的时候，我的手指似乎还残留着触摸那些古老木纹的粗糙感，眼底烙印着那片灿烂到近乎执拗的色彩。这里教会我的，远不止于一种民间艺术形式。它展示了一种如何与苦难共处、甚至将其点化成美的古老智慧。生活在这里的人们，面对贫瘠的土地、严酷的寒冬和不可避免的死亡，他们没有选择灰暗的默从，而是举起了刻刀和画笔，把所有的思念、所有的希冀、所有对日常生活的热爱，都凝固成了一座座向阳而立的彩色纪念碑。这不是粉饰太平，而是一种更深沉、更有力量的勇气。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当今这个追求高效、流于表面的快节奏世界里，杰特瓦像一颗被时光妥善保存的琥珀。它提醒着我们，真正的深度不在于去了多少个国家，打卡了多少个景点，而在于你是否愿意停下来，去读懂一个地方用木头、色彩和信仰书写的灵魂密码。每一位热爱深度游的旅人，都应该来这里站一站。你会带走的不只是照片，更是一种震撼心灵的感悟：原来人类精神的富饶，可以如此朴素，又如此辉煌。它让你相信，无论世界如何变迁，总有一些美好的事物，像这些山脚下的十字架一样，深深扎根，默默绚烂。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/stara-lubovna" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯塔拉柳博夫尼亚城堡与露天民俗博物馆</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Stará Ľubovňa Castle & Open-Air Museum</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rozhnava-mining-town-clock-tower" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    罗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">罗日尼亚瓦</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rožňava</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bytca-manor-house-slovakia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    比
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">比特恰庄园</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bytča Manor House</p>
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
