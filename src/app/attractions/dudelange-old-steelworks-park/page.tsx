import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '迪德朗日老钢铁厂遗址公园 Dudelange Old Steelworks Park｜钢铁森林重生记 - 卢森堡最震撼的后工业奇观',
  description: '朋友，想象一下，你正走在一条寻常的卢森堡小城街道上，两边是安静的住宅和咖啡馆。然后一个转弯，世界陡然切换了频道。一片钢铁的原始丛林毫无预兆地撞进你的视野——不是精致的、博物馆里擦拭得锃亮的展品，而是庞大的、生着深深红褐色铁锈的巨物。两座宛如外星堡垒的高炉沉默地刺向天空，纵横交错的管道和传送带骨架如同',
}

export default function DudelangeOldSteelworksParkPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '卢森堡', href: '/destinations/luxembourg' },
            { label: '阿尔泽特河畔埃施', href: '/destinations/luxembourg' },
            { label: '迪德朗日老钢铁厂遗址公园', href: '/attractions/dudelange-old-steelworks-park' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`迪德朗日老钢铁厂遗址公园・Dudelange Old Steelworks Park・卢森堡・阿尔泽特河畔埃施`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，你正走在一条寻常的卢森堡小城街道上，两边是安静的住宅和咖啡馆。然后一个转弯，世界陡然切换了频道。一片钢铁的原始丛林毫无预兆地撞进你的视野——不是精致的、博物馆里擦拭得锃亮的展品，而是庞大的、生着深深红褐色铁锈的巨物。两座宛如外星堡垒的高炉沉默地刺向天空，纵横交错的管道和传送带骨架如同巨兽的肋骨，肆无忌惮地暴露在空气里。这就是迪德朗日老钢厂给你的第一眼，不是美，是震撼，一种近乎粗野的、压倒性的存在感。
你的脚踩在地面上，是细碎的铁屑、沙土和顽强钻出的野草混合的奇特触感。空气中飘散着一股很特别的味道，不是难闻的工业废气，而是经年雨水洗刷后钢铁特有的、微凉的金属腥气，混杂着夏天蒿草干燥的清香，还有一点点远处森林飘来的松针味。风穿过那些巨大的钢铁桁架和空洞的炉腔，发出时而低沉呜咽、时而尖锐呼啸的声音，像是这头巨兽沉睡中缓慢的呼吸。阳光透过钢铁骨架的缝隙，在布满苔藓和地衣的地面上投下锐利而变幻的光影迷宫。
最打动人的，是这里“活”着的状态。它不是一个被精心封存、仅供瞻仰的标本。你会看到穿着运动服的人在生锈的煤气罐改造成的攀岩墙上挑战自我；涂鸦艺术家在高炉的混凝土基座上留下色彩斑斓的创作；周末的傍晚，旧铸造车间的空地上会支起幕布，变成露天电影院，人们带着毯子和零食，在钢铁的环抱下看一部老电影。这座昔日的“大黑块”（Massenoire曾是它的绰号），彻底融入了迪德朗日人的日常生活，从生产的中心变成了生活的背景、记忆的容器和创意的画布。
它的核心魅力，正在于这种惊人的转化。你能同时读到两个截然相反的叙事：一个是关于力量、煤炭、熔化的铁水、汗水和噪音的工业史诗；另一个则是关于寂静、衰败、植物的入侵、记忆的沉淀与社区的重新定义。这两种能量在此地激烈地对话、交融，最终达成一种充满张力的和解。它不是一座甜甜的美化过的公园，而是一首用钢铁、红锈和野花写成的、关于时间与重生的立体诗。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，想象一下，你正走在一条寻常的卢森堡小城街道上，两边是安静的住宅和咖啡馆。然后一个转弯，世界陡然切换了频道。一片钢铁的原始丛林毫无预兆地撞进你的视野——不是精致的、博物馆里擦拭得锃亮的展品，而是庞大的、生着深深红褐色铁锈的巨物。两座宛如外星堡垒的高炉沉默地刺向天空，纵横交错的管道和传送带骨架如同巨兽的肋骨，肆无忌惮地暴露在空气里。这就是迪德朗日老钢厂给你的第一眼，不是美，是震撼，一种近乎粗野的、压倒性的存在感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你的脚踩在地面上，是细碎的铁屑、沙土和顽强钻出的野草混合的奇特触感。空气中飘散着一股很特别的味道，不是难闻的工业废气，而是经年雨水洗刷后钢铁特有的、微凉的金属腥气，混杂着夏天蒿草干燥的清香，还有一点点远处森林飘来的松针味。风穿过那些巨大的钢铁桁架和空洞的炉腔，发出时而低沉呜咽、时而尖锐呼啸的声音，像是这头巨兽沉睡中缓慢的呼吸。阳光透过钢铁骨架的缝隙，在布满苔藓和地衣的地面上投下锐利而变幻的光影迷宫。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，是这里“活”着的状态。它不是一个被精心封存、仅供瞻仰的标本。你会看到穿着运动服的人在生锈的煤气罐改造成的攀岩墙上挑战自我；涂鸦艺术家在高炉的混凝土基座上留下色彩斑斓的创作；周末的傍晚，旧铸造车间的空地上会支起幕布，变成露天电影院，人们带着毯子和零食，在钢铁的环抱下看一部老电影。这座昔日的“大黑块”（Massenoire曾是它的绰号），彻底融入了迪德朗日人的日常生活，从生产的中心变成了生活的背景、记忆的容器和创意的画布。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，正在于这种惊人的转化。你能同时读到两个截然相反的叙事：一个是关于力量、煤炭、熔化的铁水、汗水和噪音的工业史诗；另一个则是关于寂静、衰败、植物的入侵、记忆的沉淀与社区的重新定义。这两种能量在此地激烈地对话、交融，最终达成一种充满张力的和解。它不是一座甜甜的美化过的公园，而是一首用钢铁、红锈和野花写成的、关于时间与重生的立体诗。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`迪德朗日老钢铁厂遗址公园`} />
                <InfoRow label="英文名称" value={`Dudelange Old Steelworks Park`} />
                <InfoRow label="正式名称" value={`迪德朗日老钢铁厂遗址与文化公园`} />
                <InfoRow label="国家" value={`卢森堡`} />
                <InfoRow label="城市" value={`阿尔泽特河畔埃施`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`卢森堡南部“红土之国”工业时代最后的，也是最宏伟的钢铁巨兽遗骸，见证了国家百年经济命脉的兴衰。`} />
                <InfoRow label="建筑特色" value={`生锈的钢铁巨构、庞大的工业空间尺度与肆意生长的自然植被形成了极具冲击力的对比美学。`} />
                <InfoRow label="建筑风格" value={`粗野主义工业风与生态再生主义相结合的后工业景观。`} />
                <InfoRow label="文化价值" value={`从污染与轰鸣的工业伤疤，成功转型为承载集体记忆、艺术与社区活力的公共空间典范。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`公园绿地及主要厂区结构24小时免费开放。旧发电厂改造的“Massenoire”文化中心开放时间较为复杂：通常周二至周五下午1点至6点，周末上午11点至下午6点开放。每年10月至次年3月的部分周一及法定假日可能闭馆。厂区内的特定艺术装置或临时展览开放时间需单独查询官网。建议游览前确认最新信息。`} />
              <InfoRow label="门票价格" value={`进入公园及露天厂区完全免费。进入“Massenoire”文化中心内部参观常规展览免费，但部分特展或艺术活动可能收取5-15欧元不等的费用。语音导览租赁费用约为3欧元。针对学生、65岁以上老人及团体有相应折扣。`} />
              <InfoRow label="地址" value={`Rue du Centenaire 2, 3475 Dudelange, Luxembourg`} />
              <InfoRow label="交通方式" value={`从卢森堡市出发最为方便：在卢森堡中央火车站（Gare Centrale）乘坐前往“Dudelange-Ville”或“Dudelange-Centre”的列车，车程约25-30分钟，班次密集，约每20分钟一班。抵达迪德朗日火车站后，出站沿“Rue de l‘Usine”（工厂街）步行约15-20分钟即可抵达公园北入口。也可以从火车站搭乘市内公交（如507路）至“Dudelange， Ancien Haut-Fourneau”站，下车即是。自驾游客可将车停放在公园指定的免费停车场（P+R）。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从19世纪末讲起，那时卢森堡南部这片富含铁矿的“红土”地带，就像突然被点亮的火炬。1882年，迪德朗日发现了优质的矿脉，资本的洪流立刻涌入。短短几年，一座庞大的钢铁联合体在这片宁静的河谷拔地而起，烟囱如同森林，日夜喷吐着浓烟，高炉的火光把夜空都映成橘红色。它成了这个新兴工业国的骄傲，也是无数家庭生计的依靠。想象一下鼎盛时期的场景：上万名工人——其中很多是来自意大利、葡萄牙的移民——在这里轮班劳作，火车的汽笛声、炼焦厂的轰鸣、钢铁撞击的巨响交织成永不间断的工业交响曲。整个迪德朗日镇都因它而脉动，空气里永远漂浮着煤灰和氧化铁的味道。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，就像所有依赖传统重工业的地区一样，命运的转折在20世纪后期悄然降临。70年代的石油危机、全球钢铁市场的激烈竞争，让成本高昂的欧洲钢铁业陷入寒冬。对于迪德朗日钢厂，致命的打击来自欧盟的产业调整政策。曾经日夜不息的高炉，在1986年的某一天，永远地熄灭了火焰。最后的铁水流出，冷却，凝结成一块无人问津的废铁。工厂大门紧闭，机器沉寂，上万名工人失去了工作。这个曾带给小镇繁荣与身份的巨兽，瞬间变成了一个巨大的、丑陋的、散发着衰败气息的工业伤疤，沉重地压在所有人的心头。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`之后的十几年，这里是一片被遗忘的荒原。大自然率先开始了它的“收复”行动：野草从铁轨的缝隙中钻出，攀爬植物缠绕上冷却塔，鸟儿在空荡荡的厂房里筑巢，雨水在生锈的钢板上蚀刻出褐红色的泪痕。与此同时，关于这片土地的争论从未停止：是全部拆除，盖上崭新的住宅楼？还是让它自生自灭？拆除的成本天文数字，而彻底抹去这段历史，又让许多老工人和市民感到心痛。就在这僵持与迷茫中，一种新的眼光开始萌芽——为什么不把它保留下来呢？不是作为工厂，而是作为一段无法复制的历史，一个独一无二的巨大空间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`21世纪初，一个充满魄力的改造计划终于成型。目标不再是“隐藏”或“美化”这片废墟，而是“转化”和“激活”。建筑师和景观设计师们做了极其克制的干预：他们清理了危险部分，加固了主要结构，但保留了绝大部分的锈迹、破损和时间的痕迹。他们铺设了步道，引入了灯光，但没有试图把这里变成修剪整齐的英式花园。他们把最大的铸造车间清空，留下震撼的穹顶和立柱，将其变成一个可举办音乐会、展览和市集的巨型“城市客厅”。这个改造过程本身，就是一次深刻的社会疗愈，它承认过去的伤痛，也赋予其全新的、积极的意义。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天，当你漫步其中，你走过的每一步都踩着层层叠叠的历史。你触摸的锈蚀栏杆上，可能有某个意大利焊工手掌的余温；你站立的观景平台，曾是工程师监控铁水奔流的地方。这里不再有熔炉的炙热，但另一种温度——记忆的温度、社区的温度、艺术创造的温度——正在这些冰冷的钢铁骨架中重新生长出来。它从一部关于生产的机器，变成了一本关于时间、变迁与人类韧性的立体教科书。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受这片钢铁森林的日与夜，我强烈建议你安排一个完整的下午，从日头西斜时开始，一直待到华灯初上。整个游览大约需要3-4小时，节奏宜慢不宜快。下午三四点抵达最佳，此时阳光角度变低，光线变得金黄而绵长，能完美勾勒出钢铁结构的凌厉轮廓，并在废墟间投下戏剧性的长长阴影。你可以先花时间探索户外宏大的厂区，感受自然光的魔法；当日落时分，光线变得柔和魔幻，是拍照的黄金时刻；之后如果赶上文化中心开放，可以进入室内空间，感受由工业穹顶改造而成的艺术氛围；夜幕降临时，园区精心设计的灯光装置亮起，又会呈现出一幅完全不同的、赛博朋克般的未来图景。这样的时间安排，能让你见证这片空间在光的不同演绎下变幻的多重性格。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双舒适防滑的鞋子，因为很多地方是原始的钢铁网格地面或粗糙混凝土，高跟鞋和拖鞋是灾难。厂区很多区域没有遮挡，晴天非常晒，记得戴帽子和带足饮用水。部分锈蚀严重的结构和高空平台设有护栏，但游览时仍需注意安全，尤其照看好小朋友。部分室内空间（如文化中心）有明确的闭馆时间，建议提前查好，规划好进入时间。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从北门入口沿着昔日运送矿石的生锈铁轨和传送带骨架走向开阔地，让两座并肩屹立的巨型高炉以最震撼的方式闯入你的视野。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`鼓起勇气爬上连接高炉的之字形钢铁楼梯，站在炉顶的观景平台，让狂风穿过身体，同时俯瞰整个厂区如同精密而残破的电路板般在脚下展开。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从高炉下来，钻进阴暗庞大的旧鼓风车间内部，感受那份被巨大钢铁容器包裹的、带有回音的绝对寂静，仔细辨认墙面上褪色的安全生产标语和不知名工人的涂鸦。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着被野花镶边的步道走向中心的“铸造车间广场”，找一张由旧铁轨枕木改造的长椅坐下，看滑板少年在混凝土斜坡上飞舞，感受这个核心公共空间的生活气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果开放，一定要进入“Massenoire”文化中心内部，仰望那高达数十米、由巨型桁架支撑的震撼屋顶，感受工业尺度如何转化为艺术展览的庄严背景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落时分，绕到厂区西侧的沉淀池（现已成池塘）边，看锈红色的高炉剪影、池中芦苇的倒影与天边燃烧的晚霞构成一幅超现实主义的画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在天色将暗未暗时，前往旧煤气罐区域，等待园区景观灯逐一亮起，看冰冷的钢铁被温暖的琥珀色灯光勾勒，仿佛巨兽骨骼被重新注入灵魂。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`高炉剪影与晚霞`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，站在西侧池塘边，使用长焦镜头压缩空间，将两座高炉的黑色剪影与水中倒影、天空的丰富色彩一同纳入构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`钢铁森林的纵深`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射时，站在旧轧钢车间长长的通道中，利用两侧重复的、生锈的钢铁柱廊形成强烈的透视和几何韵律感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`生锈的细节与生命特写`}</h4>
                  <p className="text-sm text-gray-700">{`下午的侧光下，贴近那些爬满藤蔓的管道或锈蚀出丰富肌理的钢板，用大光圈虚化背景，拍摄铁锈的质感、雨水的痕迹与一朵小野花的鲜明对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`内部空间的穹顶光影`}</h4>
                  <p className="text-sm text-gray-700">{`若文化中心开放，下午的阳光可能从高侧窗射入，站在中厅抬头拍摄巨大的工业桁架与光束形成的明暗对比，极具神圣感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`全景俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`登上高炉顶的观景平台，用广角镜头拍摄360度全景，将脚下错综复杂的厂区、远处的小镇屋顶以及更远处翠绿的山丘一同收进画面，讲述工业与自然共存的当下故事。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`广角镜头和长焦镜头在这里都非常有用，广角能 capture 惊人的空间尺度，长焦则能捕捉有趣的细节和压缩远景。阴天其实非常适合拍摄，均匀的光线能让钢铁的质感和锈色更突出，减少高反差。如果使用无人机，务必提前查询卢森堡关于无人机飞行的严格规定，厂区部分区域可能禁飞。尊重他人隐私，拍摄正在进行活动的人群时最好先征得同意。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`迪德朗日火车站旁一家老牌家庭旅馆，房间朴素但一尘不染，老板是个退休钢铁工人，早餐时会跟你滔滔不绝地讲厂子当年的故事。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`位于老厂区边缘由当年工程师住宅改造的精品民宿“铸造间小屋”，保留了红砖墙和工业风格家具，晚上安静得能听到风吹过钢铁结构的细微声响。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车15分钟可达的摩泽尔河谷葡萄园中的一家四星级庄园酒店，在露台享用着当地起泡酒，遥望夜幕下被灯光点亮的钢铁厂轮廓，体验冰与火般的感官碰撞。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`便捷都市之选`}</h4>
                  <p className="text-sm text-purple-800">{`住在卢森堡市中心，乘火车轻松往返，白天探索钢铁废墟，晚上回到中世纪老城享受美食和夜景，体验现代卢森堡的双面传奇。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果选择住在迪德朗日本地，更能深入感受这座工人小镇夜间宁静友好的社区氛围，餐馆价格也比卢森堡市亲民许多。夏季和周末有文化活动时，周边住宿会比较紧俏，建议提前预订。虽然卢森堡治安极佳，但厂区公园夜间照明主要集中于步道，独自夜游建议结伴并保持在主要路径上。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开迪德朗日很久之后，那片钢铁森林的景象还会时常在脑海里浮现。它给我的触动，远远超出了一个“景点”的范畴。在这个热衷于建造崭新光鲜之物的世界，这里却勇敢地保留了一份“残破”的真实。它不回避历史中粗粝、沉重甚至痛苦的部分，但恰恰是这种不回避，赋予它一种直击人心的诚实力量。在这里，你能触摸到时间的质地——不是平滑流逝的，而是充满了断裂、锈蚀、生长与转化的复杂质感。它告诉我们，结束并非消亡，而可能是另一种更具深意的开始。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了那些被过度修饰、千篇一律的风景，如果你想寻找一个能让你静下来思考时间、工业文明与自然生命之间宏大命题的地方，请一定来迪德朗日看看。它不是一个提供轻松愉悦的童话乐园，它是一个需要你用心去阅读和感受的厚重文本。在这里，你会明白，美不仅可以存在于宫殿教堂的精致雕花里，也可以磅礴地绽放在一片生锈的钢铁、一丛顽强的野草和一代人集体记忆的转化之中。这是一堂关于毁灭与重生、人类力量与自然韧性的，无比生动的露天哲学课。专程为它而来，绝对值得。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bourglinster-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布尔格林斯特城堡（隐秘的十二世纪贵族双堡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bourglinster Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vianden-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    菲
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">菲安登城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vianden Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/neumunster-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    诺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">诺伊明斯特修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Neumünster Abbey</p>
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
