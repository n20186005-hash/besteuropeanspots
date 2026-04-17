import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '凯日马罗克 Kežmarok｜探访独一无二的木制极地教堂与中世纪灵魂老城 - 最佳欧洲景点',
  description: '车子刚刚驶离波普拉德平坦的谷地，一片柔和的山丘轮廓线后，凯日马罗克那些彩色的、低矮的民居屋顶就跳进了视线。它不像那些张扬的旅游名城，第一眼的感觉是“静”，静得像一幅被阳光晒暖了边缘的旧油画。把车停在老城边缘，踏上石板路的第一步，一股混杂着木头陈香、远处面包店飘来的酵母味，还有雨后青苔气息的空气就裹住...',
}

export default function KezmarokWoodenArticChurchOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '凯日马罗克（木制极地教堂及老城）', href: '/attractions/kezmarok-wooden-artic-church-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`凯日马罗克（木制极地教堂及老城）・Kežmarok・斯洛伐克・凯日马罗克`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚刚驶离波普拉德平坦的谷地，一片柔和的山丘轮廓线后，凯日马罗克那些彩色的、低矮的民居屋顶就跳进了视线。它不像那些张扬的旅游名城，第一眼的感觉是“静”，静得像一幅被阳光晒暖了边缘的旧油画。把车停在老城边缘，踏上石板路的第一步，一股混杂着木头陈香、远处面包店飘来的酵母味，还有雨后青苔气息的空气就裹住了你。这里的声音是低分贝的：教堂钟声隔着几重屋顶传来，闷闷的；本地老太太提着编织袋走过的窸窣声；还有从某扇开着的窗里流泻出的、收音机里断断续续的民谣。
然后，你就看到了它——木制极地教堂。它藏在老城一片绿地后，远看像一座巨大而精致的、深棕色的玩具屋，带着一种天真的庄严感。走近了，才会被那完全由木材构筑的精密与宏伟所震撼。它没有石头的冷峻，松木和云杉的材质让它即使在阳光下也散发着一种温润的光泽。用手触摸外墙，能感到木纹在岁月里变得如丝绒般顺滑。推开那扇并不起眼的侧门，“吱呀”一声，仿佛打开了另一个时空的匣子。
内部的冲击是视觉与心灵的二重奏。眼睛首先被那绚烂到几乎不真实的彩绘所淹没——从天花板的蓝天白云与天使，到墙壁上布满的《圣经》故事场景，浓烈的蓝、金、红、绿在并不强烈的光线下幽幽发亮。这些画并非大师手笔，却因此更显质朴和虔诚，每一笔都仿佛能听到画师呼吸的声音。空气里是古老的木头、蜂蜡和一点点旧书籍的味道，沉静而安详。然后你会注意到那些细节：精雕细琢的讲坛、朴素的长椅、以及那个小小的、如同船舱般保护着的风琴楼厢。这不是一座让你惊叹建筑技术极限的教堂，而是一座让你想坐下来，静静感受信仰如何通过最谦卑的材料（木头）和最热烈的情感（彩绘）得以栖身的场所。
走出教堂，回到老城的街巷，你会发现这座城的节奏。中心广场上，文艺复兴式的市政厅塔楼安静地矗立，周围的咖啡馆外摆着三两桌椅。当地人并不匆忙，他们坐在长椅上聊天，或者在市场摊位前仔细挑选蔬菜。凯日马罗克的美，就在于这种“生活着”的历史感。木教堂不是孤立的博物馆展品，它是这个社区几个世纪以来呼吸、祈祷、庆祝的一部分。它的核心魅力，正是这种将惊世骇俗的世界遗产，无比自然地编织进日常生活的朴素纹理里的能力。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子刚刚驶离波普拉德平坦的谷地，一片柔和的山丘轮廓线后，凯日马罗克那些彩色的、低矮的民居屋顶就跳进了视线。它不像那些张扬的旅游名城，第一眼的感觉是“静”，静得像一幅被阳光晒暖了边缘的旧油画。把车停在老城边缘，踏上石板路的第一步，一股混杂着木头陈香、远处面包店飘来的酵母味，还有雨后青苔气息的空气就裹住了你。这里的声音是低分贝的：教堂钟声隔着几重屋顶传来，闷闷的；本地老太太提着编织袋走过的窸窣声；还有从某扇开着的窗里流泻出的、收音机里断断续续的民谣。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然后，你就看到了它——木制极地教堂。它藏在老城一片绿地后，远看像一座巨大而精致的、深棕色的玩具屋，带着一种天真的庄严感。走近了，才会被那完全由木材构筑的精密与宏伟所震撼。它没有石头的冷峻，松木和云杉的材质让它即使在阳光下也散发着一种温润的光泽。用手触摸外墙，能感到木纹在岁月里变得如丝绒般顺滑。推开那扇并不起眼的侧门，“吱呀”一声，仿佛打开了另一个时空的匣子。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`内部的冲击是视觉与心灵的二重奏。眼睛首先被那绚烂到几乎不真实的彩绘所淹没——从天花板的蓝天白云与天使，到墙壁上布满的《圣经》故事场景，浓烈的蓝、金、红、绿在并不强烈的光线下幽幽发亮。这些画并非大师手笔，却因此更显质朴和虔诚，每一笔都仿佛能听到画师呼吸的声音。空气里是古老的木头、蜂蜡和一点点旧书籍的味道，沉静而安详。然后你会注意到那些细节：精雕细琢的讲坛、朴素的长椅、以及那个小小的、如同船舱般保护着的风琴楼厢。这不是一座让你惊叹建筑技术极限的教堂，而是一座让你想坐下来，静静感受信仰如何通过最谦卑的材料（木头）和最热烈的情感（彩绘）得以栖身的场所。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走出教堂，回到老城的街巷，你会发现这座城的节奏。中心广场上，文艺复兴式的市政厅塔楼安静地矗立，周围的咖啡馆外摆着三两桌椅。当地人并不匆忙，他们坐在长椅上聊天，或者在市场摊位前仔细挑选蔬菜。凯日马罗克的美，就在于这种“生活着”的历史感。木教堂不是孤立的博物馆展品，它是这个社区几个世纪以来呼吸、祈祷、庆祝的一部分。它的核心魅力，正是这种将惊世骇俗的世界遗产，无比自然地编织进日常生活的朴素纹理里的能力。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`凯日马罗克（木制极地教堂及老城）`} />
                <InfoRow label="英文名称" value={`Kežmarok`} />
                <InfoRow label="正式名称" value={`Kežmarok`} />
                <InfoRow label="国家" value={`斯洛伐克`} />
                <InfoRow label="城市" value={`凯日马罗克`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座见证了宗教宽容、独特建筑智慧与多民族交融的东斯洛伐克珍宝之城。`} />
                <InfoRow label="建筑特色" value={`不使用一颗金属钉子，全由木头榫卯构建，并拥有罕见双层屋顶与内部精美彩绘的“极地教堂”典范。`} />
                <InfoRow label="建筑风格" value={`斯洛伐克本土木构建筑与北欧极地教堂风格的独特融合，并带有文艺复兴与巴洛克装饰元素。`} />
                <InfoRow label="文化价值" value={`作为历史上“斯帕蒂”地区（Szepes）德语、斯洛伐克、犹太等多民族文化共存的活化石，其木教堂是宗教少数派（新教）在压迫中争取信仰自由的无声丰碑。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`木制极地教堂（Wooden Artic Church）开放时间较为灵活，通常为5月至9月的周一至周六 9:00-17:00，周日仅在礼拜后开放（约13:00-16:00），10月至次年4月开放时间大幅缩短，需提前在当地旅游信息中心确认。老城区域全天可自由漫步，但各博物馆和小景点有各自开放时间，通常为10:00-16:00。冬季部分设施可能关闭，建议出行前查询。`} />
              <InfoRow label="门票价格" value={`木制极地教堂：成人票约4欧元，学生及老人票约2欧元。包含教堂和旁边小博物馆的联票约6欧元。老城区本身免费进入，但进入城堡、福音派学园博物馆等独立景点需单独购票，票价在3-5欧元不等。`} />
              <InfoRow label="地址" value={`Hlavné námestie 1, 060 01 Kežmarok, Slovakia`} />
              <InfoRow label="交通方式" value={`最近的国际机场是波普拉德-塔特拉机场（Poprad–Tatry Airport，约25公里），但航班极少。最便捷的方式是飞往维也纳或布拉迪斯拉发，然后乘火车。从布拉迪斯拉发中央火车站出发，有直达或经波普拉德换乘的列车前往凯日马罗克，全程约4-4.5小时，班次一天数趟。从波普拉德火车站换乘区域火车或巴士最为方便，车程约30分钟，班次频繁。自驾则沿E50公路行驶，从波普拉德下道后约20分钟即达。火车站步行至老城中心仅需10分钟。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`凯日马罗克的故事，始于中世纪一条繁忙贸易路线的十字路口。早在13世纪，这里就吸引了来自德意志的移民，他们带来了城市建设的经验，也让这里成为了“斯帕蒂”地区富裕的城镇之一。然而，真正塑造这座城市灵魂的，是一场席卷欧洲的信仰风暴——宗教改革。16世纪，新教思想如同野火般传入匈牙利王国（斯洛伐克当时是其一部分），凯日马罗克的许多德语和斯洛伐克居民都成为了路德宗的追随者。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但当时的天主教哈布斯堡王朝可不喜欢这个局面。他们颁布严苛的法令，剥夺新教徒建造石质教堂的权利。你可以想象那种困境：一群虔诚的信徒，拥有财富和社区，却被禁止用“永恒”的石头为他们的上帝建立家园。怎么办？凯日马罗克的人们展现出了令人惊叹的智慧与韧性。既然不能用石头，他们转向了脚下塔特拉山森林里最丰富的资源：木材。而且，他们要建的，不是一座简陋的棚屋，而是一座配得上他们信仰的、真正的教堂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，在1717年，一个大胆的计划启动了。他们从遥远的北欧汲取灵感——那里的人们擅长在严酷环境中建造木构教堂。本地杰出的木匠大师尤拉伊·穆特曼承担了设计。他们决定，这座教堂不能使用任何一颗金属钉子，以符合《圣经》中关于所罗门圣殿不用铁器的记载。全部依靠复杂的榫卯结构咬合。更天才的是，为了应对当地的气候并赋予建筑独特性，他们设计了独特的双层屋顶结构，外层保护内层，中间形成空气层以隔热防潮。工匠们花了近十年，将一根根巨大的原木雕琢、拼接。终于，在1927年，这座独一无二的“木制极地教堂”矗立起来，它是对信仰禁令最优雅、最坚定的回应，仿佛在沉默地宣告：精神的高度，从不取决于材料的贵贱。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`教堂内部那令人屏息的彩绘，则是另一个层级的传奇。它们主要出自18世纪中期的当地画家约翰·约翰森之子之手。他带领团队，用了数年时间，用鲜艳的矿物颜料，将整个木制内部变成了一个彩色的神学教科书。从创世纪到最后的审判，每一个画面都旨在教育和激励信徒。这些画风活泼，甚至有些“民间”，但正是这种质朴，让神圣的故事变得可亲可感。此后的几个世纪里，这座木教堂不仅是一个礼拜场所，更成为了凯日马罗克新教社区的骄傲与精神堡垒，历经风雨、火灾威胁（是的，木结构的噩梦）而幸存下来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`与此同时，凯日马罗克的老城也在书写自己的篇章。文艺复兴式的城堡俯瞰全城，诉说着贵族家族的权力更迭；中心广场上混合了哥特式、文艺复兴与巴洛克风格的建筑，记录着商业的繁荣；而曾经规模可观的犹太社区留下的会堂与街区，则提醒着这里文化拼图的另一块重要色彩。二战和共产主义时期带来了创伤与停滞，但也某种程度上冻结了时光。直到20世纪末，随着斯洛伐克独立与世界遗产的认可，凯日马罗克，连同它这颗木制的“心脏”，才重新被世界发现并珍视。它不再仅仅是宗教抗争的象征，而是人类在面对限制时，如何用创造力、社区力量和深沉的美感来超越障碍的永恒证明。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的凯日马罗克深度游需要大半天时间，从清晨开始最为理想。建议在上午9点前抵达，这时旅游团还未涌入，晨光柔和，老城刚刚苏醒，你能独享木教堂内部的宁静。整体游览节奏宜慢不宜快，核心是“沉浸”而非“打卡”。先从外围感受老城氛围，再深入探访木教堂的细节，随后漫步老城其他亮点，最后以一处高地或咖啡馆的视野收尾。这样的安排能让你由表及里地理解这座城镇的层次，从建筑奇观深入到它的历史脉搏与日常生活。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`木制教堂内部禁止拍照的区域请务必遵守，这是对礼拜场所的基本尊重，管理人员会友好但坚决地提醒。周末下午或宗教节日期间，教堂可能因活动突然关闭，行前最好在官网或信息中心二次确认。老城街道多为石板路，建议穿一双绝对舒适耐走的鞋子。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`趁着清晨的清爽空气，从老城边缘沿着宁静的、挂着露珠的街道慢慢走向中心广场，先不急于寻找目标，只是感受石板路的声音和两旁彩色房屋逐渐苏醒的气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在旅游信息中心稍作停留，拿上一份地图，然后穿过一片小小的绿地，从侧面第一次看到木制极地教堂那童话般的、深棕色双层屋顶的完整轮廓。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`轻轻推开教堂的侧门，让自己至少在里面待上半小时，什么也不做，只是坐在长椅上，让眼睛慢慢适应昏暗的光线，逐一辨认天花和墙壁上那些绚烂又有些天真烂漫的彩绘故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出教堂后，别错过旁边那座不起眼的小博物馆，里面陈列着教堂建造的模型、古老工具和文献，能帮你把刚才的震撼感受落实到具体的历史与技术细节上。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回到生机勃勃的中心广场，仰头欣赏白色文艺复兴市政厅塔楼，然后在广场周边的拱廊下随意逛逛，也许会遇到卖传统陶器或亚麻制品的小摊。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从广场向北漫步，去探访那座敦实的凯日马罗克城堡，虽然内部博物馆可看性一般，但它的外墙和庭院能让你感受到中世纪城镇的防御气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一条安静的小巷曲折穿行，目标是找到老犹太会堂的遗址或纪念牌，在寂静中回想这个多元文化之城里曾经活跃的另一股重要社群脉络。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，在离开前，找一家能看到市政厅塔楼的咖啡馆，点一杯斯洛伐克特色的茶饮或咖啡，坐下来，看着广场上的人来人往，将半日的见闻在脑海中慢慢沉淀。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`教堂北侧绿地仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`上午九点到十点间，阳光正好照亮教堂东侧立面，站在北侧绿地上，用广角镜头将教堂独特的双层木结构屋顶和背后的老城屋顶一同纳入画面，构图时让教堂占据三分之二，留出蓝天。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`内部彩绘天花板的细节特写`}</h4>
                  <p className="text-sm text-gray-700">{`如果允许拍照（务必先确认），进入教堂后，使用高感光度和大光圈，对准祭坛上方或中厅天花板的彩绘部分，等待一束从侧窗射入的光恰好照亮天使的面部或一片蓝色云朵，捕捉那神圣的光影。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`中心广场拱廊下的框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，阳光斜射进广场周围的拱廊，站在拱廊内，以古老的石柱和拱门为前景框架，拍摄广场中央的市政厅塔楼和来往的当地人，营造出穿越时空的叙事感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`老城小巷的纵深街景`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚日落前的一小时，找一条铺着石板、两侧是柔和小清新色彩房屋的小巷，从巷口向里拍摄，利用巷道的自然引导线，让温暖的夕阳光芒为路面和墙壁镀上一层金边，尽头可以是一个行走的老人或一盏刚亮起的灯。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在木教堂内拍照前，请务必征得管理员明确同意，并绝对禁止使用闪光灯，紫外线会对数百年历史的彩绘造成不可逆的损害。拍摄当地人，尤其是年长者，一个微笑和眼神交流的事先示意，远比长焦镜头偷拍来得尊重和友善。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`老城中心温馨民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在经过翻新但保留了古朴木梁结构的历史公寓里，房东妈妈可能会为你准备一份自制的果酱早餐，推开窗就是教堂钟声和广场的日常景象。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`塔特拉山脚家庭旅馆`}</h4>
                  <p className="text-sm text-green-800">{`位于城镇边缘安静街区，房间宽敞明亮，主人是户外爱好者，能给你提供最地道的徒步建议，晚上在花园里就能仰望星空下的塔特拉山影。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`波普拉德现代酒店（便捷之选）`}</h4>
                  <p className="text-sm text-yellow-800">{`如果追求标准化舒适和次日前往高塔特拉山徒步的便利，可以选择住在邻近的波普拉德市，那里有更多现代酒店选择，开车或乘火车往返凯日马罗克仅需二十分钟。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`凯日马罗克老城内真正的酒店很少，民宿和家庭旅馆是主流，通过预订平台沟通时不妨多问一句房东能否提供简单的当地早餐。城镇非常安全，夜晚安静似水，是深度休息的好地方。若逢夏季音乐节或文化节期间，需提前数周预订。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开凯日马罗克很久以后，脑海里最清晰的，不是某一张具体的照片，而是那种混合的感官记忆：木头温暖的触感、彩绘鲜艳却沉静的视觉、空气中那种旧时光特有的缓慢气息。这个地方有种奇特的魔力，它用一个世界级的建筑奇迹，告诉你的却是关于谦卑、韧性与社区力量的故事。那不用一钉一铁的教堂，仿佛在说：看，当人们的心凝聚在一起，用最触手可及的材料，也能创造出堪与巨石比肩的永恒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求宏大、高速与流量的时代，凯日马罗克是一座逆行的时钟。它邀请你慢下来，去触摸木头的纹理，去解读一幅朴素的壁画，去坐在广场上观察一次并不匆忙的日落。它提醒我们，真正的文化遗产，不仅是供人瞻仰的纪念碑，更是一种活着的、呼吸着的生活方式。对于每一位厌倦了浮光掠影的旅人，这里都是一剂良药。它让你相信，旅行的意义，不在于收集了多少个著名地标，而在于是否曾有一个地方，用它全部的细节和故事，轻轻地、却深刻地，改变了你观看世界的方式与内心的节奏。凯日马罗克，就是这样一个地方。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/banska-stiavnica" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    班
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">班斯卡什佳夫尼察</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Banská Štiavnica</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/trencin-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特伦钦城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trenčín Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/spis-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯皮什城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Spiš Castle</p>
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
