import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '瓦茨拉托特植物园 Vácrátot Botanical Garden｜探秘中欧绿色宝库与浪漫废墟园林 - 最佳欧洲景点',
  description: '朋友，想象一下，当你推开那扇并不算起眼的铁艺大门，第一个迎接你的不是售票员，而是一阵混合了潮湿泥土、百年冷杉树脂和远处不知名野花的、极其复杂又清新的气味。这气味瞬间把你从匈牙利的乡间公路，拽入了一个截然不同的、绿意汹涌的世界。你的脚下是一条宽阔的砂石路，两旁是参天大树构成的深邃走廊，阳光挣扎着从层叠',
}

export default function VacratotBotanicalGardenHungaryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '匈牙利', href: '/destinations/europe' },
            { label: '瓦茨拉托特 (属佩斯州)', href: '/destinations/europe' },
            { label: '瓦茨拉托特植物园', href: '/attractions/vacratot-botanical-garden-hungary' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`瓦茨拉托特植物园・Vácrátot Botanical Garden・匈牙利・瓦茨拉托特 (属佩斯州)`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，当你推开那扇并不算起眼的铁艺大门，第一个迎接你的不是售票员，而是一阵混合了潮湿泥土、百年冷杉树脂和远处不知名野花的、极其复杂又清新的气味。这气味瞬间把你从匈牙利的乡间公路，拽入了一个截然不同的、绿意汹涌的世界。你的脚下是一条宽阔的砂石路，两旁是参天大树构成的深邃走廊，阳光挣扎着从层叠的叶隙间筛下来，在地上形成晃动的金色光斑。安静极了，只有你自己的脚步声，以及远远近近、层层叠叠的鸟鸣——那是啄木鸟的笃笃声，山雀的清亮叫声，还有某种你从未听过的、婉转如笛的啼鸣。这不是一个冰冷的“植物标本库”，而是一个活着的、呼吸着的巨大生命体。
沿着主路慢慢走，你会发现这里藏着许多“房间”。是的，就像一座没有屋顶的宫殿，每个由树篱、坡地或溪流隔开的区域，都是一个风格迥异的展厅。拐个弯，你可能突然闯进一片绚烂到不真实的杜鹃花谷，四月里这里像是打翻了调色盘；再走几步，是一片静谧的湖泊，水面上睡莲正酣，倒映着天空和岸边一棵姿态忧伤的垂柳。最奇妙的是当地人对待这里的态度。你会看到头发花白的老教授，拿着笔记本，对着一株小草凝神记录；也会看到年轻的父母推着婴儿车，在草坪上铺开野餐垫；还有艺术系的学生，坐在废墟水车旁速写。这里分明是他们巨大的后花园，是书房，也是客厅。
而最扣人心弦的，莫过于那些“刻意”的荒凉。在园林深处，你会与一座爬满藤蔓的废弃水车坊和磨坊废墟不期而遇。红砖残破，拱门半坍，流水却依旧在石渠里潺潺不息。这种将“时间流逝之美”精心设计进景观的哲思，是典型的浪漫主义情怀。它不是在展示完美的当下，而是在吟诵自然的轮回与历史的叹息。这一刻，你感受到的不是植物学的严谨，而是一种深沉的诗意。这座园子最核心的魅力，或许就在于它完美平衡了科学的理性与艺术的感性，让你在获得知识的同时，灵魂也得到了彻底的松绑。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "朋友，想象一下，当你推开那扇并不算起眼的铁艺大门，第一个迎接你的不是售票员，而是一阵混合了潮湿泥土、百年冷杉树脂和远处不知名野花的、极其复杂又清新的气味。这气味瞬间把你从匈牙利的乡间公路，拽入了一个截然不同的、绿意汹涌的世界。你的脚下是一条宽阔的砂石路，两旁是参天大树构成的深邃走廊，阳光挣扎着从层叠的叶隙间筛下来，在地上形成晃动的金色光斑。安静极了，只有你自己的脚步声，以及远远近近、层层叠叠的鸟鸣——那是啄木鸟的笃笃声，山雀的清亮叫声，还有某种你从未听过的、婉转如笛的啼鸣。这不是一个冰冷的“植物标本库”，而是一个活着的、呼吸着的巨大生命体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "沿着主路慢慢走，你会发现这里藏着许多“房间”。是的，就像一座没有屋顶的宫殿，每个由树篱、坡地或溪流隔开的区域，都是一个风格迥异的展厅。拐个弯，你可能突然闯进一片绚烂到不真实的杜鹃花谷，四月里这里像是打翻了调色盘；再走几步，是一片静谧的湖泊，水面上睡莲正酣，倒映着天空和岸边一棵姿态忧伤的垂柳。最奇妙的是当地人对待这里的态度。你会看到头发花白的老教授，拿着笔记本，对着一株小草凝神记录；也会看到年轻的父母推着婴儿车，在草坪上铺开野餐垫；还有艺术系的学生，坐在废墟水车旁速写。这里分明是他们巨大的后花园，是书房，也是客厅。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而最扣人心弦的，莫过于那些“刻意”的荒凉。在园林深处，你会与一座爬满藤蔓的废弃水车坊和磨坊废墟不期而遇。红砖残破，拱门半坍，流水却依旧在石渠里潺潺不息。这种将“时间流逝之美”精心设计进景观的哲思，是典型的浪漫主义情怀。它不是在展示完美的当下，而是在吟诵自然的轮回与历史的叹息。这一刻，你感受到的不是植物学的严谨，而是一种深沉的诗意。这座园子最核心的魅力，或许就在于它完美平衡了科学的理性与艺术的感性，让你在获得知识的同时，灵魂也得到了彻底的松绑。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`瓦茨拉托特植物园`} />
                <InfoRow label="英文名称" value={`Vácrátot Botanical Garden`} />
                <InfoRow label="正式名称" value={`匈牙利国家植物园 - 瓦茨拉托特
(Hungarian National Botanical Garden - Vácrátot)`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`瓦茨拉托特 (属佩斯州)`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`匈牙利植物学的摇篮与活体博物馆，拥有全国最庞大、最系统的植物收藏。`} />
                <InfoRow label="建筑特色" value={`新古典主义庄园宅邸与精心规划的浪漫主义英式风景园林的完美融合，点缀着刻意营造的“如画”废墟。`} />
                <InfoRow label="建筑风格" value={`以19世纪盛行的英式风景园林风格为主轴，辅以新古典主义庄园建筑及仿哥特式水车废墟。`} />
                <InfoRow label="文化价值" value={`它不仅是植物的庇护所，更承载了匈牙利贵族对自然哲学、美学追求以及科学启蒙的时代精神。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`每年4月1日至10月31日对外开放，每日上午9:00至下午6:00（最后入场时间为下午5:00）。温室开放时间通常为上午10:00至下午4:00。冬季（11月至次年3月）仅周末和法定节假日开放，时间为上午10:00至下午4:00，且部分户外区域和温室可能关闭维护。重大节假日如圣诞节、元旦可能闭馆，建议行前查看官网公告。`} />
              <InfoRow label="门票价格" value={`成人票：2200匈牙利福林（约合6欧元）。学生及退休人士优惠票：1100匈牙利福林。6岁以下儿童、残疾人及一名陪同者免费。家庭票（2成人+最多3名儿童）有优惠。每月第一个周六对所有人免票。园内导游讲解服务需额外付费并提前预约。`} />
              <InfoRow label="地址" value={`Vácrátot, Fő u. 2-4, 2164 Hungary`} />
              <InfoRow label="交通方式" value={`从布达佩斯出发最为方便。在布达佩斯“Örs vezér tere”地铁站旁的巴士总站，乘坐前往瓦茨拉托特方向的区域巴士（如“Volánbusz”公司的线路），车程约50分钟至1小时，班次在工作日较为频繁（约每小时一班），周末减少。告诉司机在“Vácrátot, Botanikus kert”下车。自驾从布达佩斯沿21号公路向北，约40公里，车程40分钟，园区入口附近有免费停车场。最悠闲的方式是乘坐从布达佩斯西火车站出发的慢速区域火车，但班次少且需在Gödöllő换乘巴士，适合不赶时间的深度游旅客。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个故事的开端，与一位名叫费伦茨·瓦格纳的匈牙利贵族息息相关。19世纪上半叶，欧洲的精英们正痴迷于两种潮流：一是对异域植物和科学分类学的狂热；二是源自英国的“风景如画”美学，认为经过设计的“自然”景观，比规整的法式花园更能激发人的情感。瓦格纳男爵正是这两大潮流的忠实拥趸。大约在1827年，他决定在自己的瓦茨拉托特庄园土地上，实现一个梦想：创建一个不仅用于休闲，更用于科学研究和教育的植物园。这本身就是一个非常具有启蒙精神的举动。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他请来了当时顶尖的园林建筑师，以英式风景园林为蓝本进行规划。但他们做的远不止挖湖堆山、种植树木。瓦格纳有着惊人的全球网络，通过外交官、探险家和学者，从世界各地收集植物种子和活体植株。商船和驿车将来自喜马拉雅的山花、北美的巨杉、日本的枫树种子，源源不断地运到这个匈牙利内陆的小村庄。你可以想象，当第一株来自远东的奇异灌木在这里开花时，给当地的园丁和访客带来了何等的震撼。这座园子逐渐成为一个微缩的世界植物窗口。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，任何美好的故事都难逃时代的波澜。二战末期，激烈的战火蔓延至此，庄园建筑和部分园区遭受了严重破坏。那些精心培育的植物，许多在炮火和疏于照料中消亡。战后，庄园被国有化。这看似是另一个危机，却意外地成为了转机。1949年，匈牙利科学院接手了这片满目疮痍的土地，并赋予了它一个新的、更崇高的使命：成为国家植物园。科学院的介入，意味着系统性的重建和科学的规划。它从一座贵族的私人收藏，升格为属于整个国家的自然遗产与研究中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "接下来的几十年，是默默修复与蓬勃扩张的时期。科学家们不仅恢复了旧观，更按照植物地理学和分类学原理，建立了系统收集区、岩石园、药用植物园、温室群等。那个浪漫的水车废墟被保留了下来，作为历史层积的一部分，默默诉说着前尘往事。今天，你漫步园中，每一棵树下、每一片花丛中，都叠加着至少三层历史：19世纪贵族的浪漫梦想，20世纪战火的残酷伤痕，以及战后至今科学家们孜孜不倦的守护与重建。它不再只是“瓦格纳的园子”，而是一部用绿叶和鲜花写就的，关于匈牙利近代自然观、社会变迁与坚韧精神的立体史书。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正领略这座植物园的精华，我强烈建议你留出整整一天时间，并选择在非周末的清晨抵达。上午9点开门就进去，这时光线柔和，游客稀少，园子还带着露水的气息，是最能感受其宁静魔力的时刻。整体游览耗时约5-6小时，节奏宜慢不宜快。路线设计上，建议先宏观后微观：从开阔的风景园林和湖泊开始，让感官完全沉浸于整体的自然氛围中；中午前后进入温室和精密布置的系统收集区，进行知识性的探索；下午则在喜欢的区域（如废墟或杜鹃花谷）随意坐下发呆，或进行二次深度游。这样的安排符合人体感官从接受到聚焦的规律，也能完美避开可能出现的午后旅游团小高峰。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`园内餐饮点很少且简单，强烈建议在布达佩斯或瓦茨拉托特小镇买好简单的三明治、水果和水，来一次真正的林中野餐。一定要穿最舒适、不怕脏的步行鞋，因为砂石路和草地小径会走很远，且雨后部分区域可能泥泞。夏季务必携带驱蚊剂，湖泊和阴凉丛林处蚊虫较多。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从正门进入后，别急着跑，先在那条宏伟的林荫主道上深呼吸，感受两旁百年古树形成的绿色穹顶所带来的庄严与宁静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`信步向左拐入英式风景园林的核心区，沿着蜿蜒小径走向那座明镜般的湖泊，看天鹅划过水面，从对岸欣赏庄园宅邸倒映在水中的完美画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`绕湖半周后去寻找那片隐藏在密林边缘的浪漫废墟——红砖水车坊，站在残破的拱门下倾听流水声，触摸爬满墙壁的常春藤。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`转身走向公园东侧规模宏大的系统收集区，像阅读一部活的植物百科全书一样，从阿尔卑斯高山植物区慢慢逛到北美乔木区。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在收集区旁的玫瑰园或鸢尾园的长椅上稍坐片刻，让眼睛被绚烂的色彩洗礼，同时也能看到园丁们日常精细护理的工作场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`中午时分步入那座巨大的历史温室，在潮湿温热的空气里邂逅热带雨林的蕨类、沙漠的仙人掌以及各种奇形怪状的食虫植物。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从温室出来后，如果正值花期（通常是四月末五月初），一定要跋涉到公园南端的杜鹃谷与槭树园，那里有全园最爆炸性的色彩盛宴。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，在离开前，回到主宅邸前的开阔草坪，找个树荫躺下，纯粹地发呆，看云朵飘过古老的屋顶，让一整天的绿色记忆在脑海里沉淀。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`湖泊北岸侧拍宅邸倒影`}</h4>
                  <p className="text-sm text-gray-700">{`下午三点后的侧光条件下，站在湖北岸稍微偏西的位置，将新古典主义的庄园主体与其在水中完整的倒影一同纳入画面，前景可以带上几枝垂柳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`温室内部仰拍穹顶结构`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个阳光灿烂的正午，走进温室内，将镜头对准钢铁与玻璃构成的精美弧形穹顶，等待一束阳光恰好穿透水汽形成丁达尔效应，捕捉光线的轨迹。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`水车废墟框架式构图`}</h4>
                  <p className="text-sm text-gray-700">{`利用废墟残存的红砖拱门作为天然画框，将焦点对准拱门后方流淌的溪流或一片葱郁的森林，营造出“废墟中窥见生机”的强烈对比与纵深。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`杜鹃花谷俯拍花海`}</h4>
                  <p className="text-sm text-gray-700">{`如果恰逢花期，找到谷地边缘的一处小坡，从稍高的位置向下拍摄，让绚烂的杜鹃花丛充满整个前景和中景，远景则可带入一些高大的乔木树冠。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`系统收集区小径引导线`}</h4>
                  <p className="text-sm text-gray-700">{`在松柏类植物区，找一条两侧植物排列整齐的砂石小径，蹲低机位，让小路形成的视觉引导线延伸至远方光线明亮的开口处，营造幽深宁静的探索感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用微距镜头可以捕捉到众多奇特植物的细节，如食虫植物的捕虫器或苔藓的微观世界。注意有些珍稀植物区域可能立有禁止踏入的标识，务必在步道上拍摄，尊重科研保护区的规定。秋季是拍摄彩叶和废墟沧桑感的黄金季节，色彩层次极佳。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温馨民宿之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在瓦茨拉托特小镇本地人经营的乡村民宿里，清晨在鸡鸣狗吠中醒来，步行十分钟就能抵达植物园，晚上还能向房东学习几句地道的匈牙利语。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`布达佩斯便捷之选`}</h4>
                  <p className="text-sm text-green-800">{`选择布达佩斯市中心“特蕾西亚城”附近的精品设计酒店，白天享受都市繁华，清晨跳上巴士就能快速投入自然怀抱，体验城市与田园的完美切换。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`庄园沉浸之选`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车前往附近格德勒镇，入住真正的巴洛克式宫殿酒店，在镀金大厅用早餐，感受昔日奥匈帝国贵族的气息，与植物园的浪漫风格一脉相承。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`自然疗愈之选`}</h4>
                  <p className="text-sm text-purple-800">{`住在多瑙河湾附近的山顶木屋度假村，白天逛园子，傍晚在露台上一边喝着本地葡萄酒，一边俯瞰多瑙河壮丽的转弯处，将自然体验扩展到更宏大的尺度。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "瓦茨拉托特本身是非常安宁的小镇，治安极好，但夜间娱乐选择极少，适合纯粹寻求宁静的旅客。若选择住在布达佩斯，务必查清前往Örs vezér tere巴士站的公交线路，避免清晨手忙脚乱。旺季（春末夏初）时，格德勒的宫殿酒店非常紧俏，需提前数月预订。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开瓦茨拉托特植物园很久以后，我发现自己最常回忆起的，并非某一种珍奇植物的模样，而是一种整体的“感觉”。那是一种被无比丰饶、却又无比有序的生命所温柔包裹的安心感。在这个信息爆炸、一切追求即时满足的时代，这座园子像是一个固执的逆行者。它要求你慢下来，用脚步丈量，用眼睛仔细观察叶片脉络的差异，用耳朵分辨不同鸟类的鸣唱。它不提供刺激的娱乐项目，它的奖赏是发现一朵按时开放的小花，是听懂风穿过不同树冠时声音的微妙变化。这种奖赏，直抵内心最宁静的角落。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，我认为每一位自称热爱深度游的旅人，都应该来这里看看。它不仅仅是一个景点，更是一种方法论，一种关于如何与自然、与历史、也与自己内心相处的生活哲学。在这里，你能看到人类对知识的热爱可以如何与对美的追求和谐共生，能看到一个民族如何从战火灰烬中小心翼翼地捧出并修复文明的绿芽。它教会我们，真正的深度，不在于打卡了多少个地方，而在于你是否允许某个地方的气息、光线和节奏，真正地渗透进你的生命记忆里。瓦茨拉托特，就是这样一个值得你交付一整天时光，让它来重塑你感官的地方。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/early-christian-necropolis-pecs-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩奇早期基督教陵墓</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Early Christian Necropolis of Pécs</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/eger-castle-bull-blood-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃格尔城堡与公牛血产区</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Eger Castle & Egri Bikavér Region</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bekescsaba-hungary" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝凯什乔包</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Békéscsaba</p>
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
