import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '南特机械岛 Les Machines de l\'île｜凡尔纳科幻与达芬奇机械的蒸汽朋克奇境 - 最佳欧洲景点',
  description: '我第一次听说南特机械岛时，脑子里浮现的是游乐园的过山车和闪亮的霓虹灯。但当我真正走出南特火车站，沿着卢瓦尔河向旧船厂区走去时，扑面而来的是一种完全不同的气息。空气里没有糖霜的甜腻，而是一种混合了河水微腥、远处传来的淡淡机油味，以及秋天法国梧桐落叶的泥土气息。巨大的旧工业起重机像沉默的钢铁恐龙骨架矗立...',
}

export default function LesMachinesDeLIleNantesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '南特机械岛', href: '/attractions/les-machines-de-l-ile-nantes' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`南特机械岛・Les Machines de l'île de Nantes・法国・南特`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`我第一次听说南特机械岛时，脑子里浮现的是游乐园的过山车和闪亮的霓虹灯。但当我真正走出南特火车站，沿着卢瓦尔河向旧船厂区走去时，扑面而来的是一种完全不同的气息。空气里没有糖霜的甜腻，而是一种混合了河水微腥、远处传来的淡淡机油味，以及秋天法国梧桐落叶的泥土气息。巨大的旧工业起重机像沉默的钢铁恐龙骨架矗立在河边，而你的目的地，就藏在这些历史的巨人之间。
然后，你听到了。那不是音乐，是一种低沉、缓慢、富有韵律的“咯吱……吭……哧……”声，像极了某种巨兽的呼吸与心跳。循着声音转过一个街角，你就看到了它——那头十二米高、八米宽的机械巨象。它正载着满背惊叹的游客，在花岗岩铺就的广场上漫步，巨大的木制耳朵缓缓扇动，钢骨构成的象鼻灵活地卷曲、喷出带着凉意的水雾。阳光穿透水雾，折射出小小的彩虹。那一刻，你突然理解了“蒸汽朋克”这个词不再是书本上的概念，而是一种可触摸、可乘坐、甚至会对你眨眨眼的现实。你仿佛站在了儒勒·凡尔纳（他正是南特人）的笔记本里，或者列奥纳多·达·芬奇那未完工的草稿边。
这里最迷人的不是机械的庞大，而是它鲜活的“生命感”。走进那栋由旧造船厂车间改造的“机械长廊”，你就像进入了一个巨兽的孵化器。天花板下悬挂着半成品的苍鹭骨架，工人们（他们自称“机械师”）正拿着工具，像外科医生一样为一只有着金属羽毛的蜻蜓调试关节。空气里满是松木、亚麻籽油和焊接金属的独特味道。你可以凑近看每一个齿轮的咬合，触摸那些被手工打磨得温润的木制部件。这里没有“请勿触摸”的冰冷警告，取而代之的是鼓励你去转动曲柄、拉动杠杆，亲身感受机械传动带来的奇妙力量。这种参与感，让冷硬的机械拥有了温度。
更重要的是，这个奇幻世界并非悬浮于空中，它深深地扎根在南特这座城市的肌理里。本地人带着孩子来这里，就像去公园一样平常。你会看到头发花白的老人指着巨大的联动装置，跟孙子讲述过去这里是如何制造出远洋巨轮的。机械岛用一种极致浪漫的方式，缝合了这座城市因造船业衰落而留下的心理伤疤，将沉重的工业遗产，变成了承载无限想象力的飞毯。它不是对过去的简单怀念，而是一场面向未来的、欢快的庆祝。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`我第一次听说南特机械岛时，脑子里浮现的是游乐园的过山车和闪亮的霓虹灯。但当我真正走出南特火车站，沿着卢瓦尔河向旧船厂区走去时，扑面而来的是一种完全不同的气息。空气里没有糖霜的甜腻，而是一种混合了河水微腥、远处传来的淡淡机油味，以及秋天法国梧桐落叶的泥土气息。巨大的旧工业起重机像沉默的钢铁恐龙骨架矗立在河边，而你的目的地，就藏在这些历史的巨人之间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然后，你听到了。那不是音乐，是一种低沉、缓慢、富有韵律的“咯吱……吭……哧……”声，像极了某种巨兽的呼吸与心跳。循着声音转过一个街角，你就看到了它——那头十二米高、八米宽的机械巨象。它正载着满背惊叹的游客，在花岗岩铺就的广场上漫步，巨大的木制耳朵缓缓扇动，钢骨构成的象鼻灵活地卷曲、喷出带着凉意的水雾。阳光穿透水雾，折射出小小的彩虹。那一刻，你突然理解了“蒸汽朋克”这个词不再是书本上的概念，而是一种可触摸、可乘坐、甚至会对你眨眨眼的现实。你仿佛站在了儒勒·凡尔纳（他正是南特人）的笔记本里，或者列奥纳多·达·芬奇那未完工的草稿边。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里最迷人的不是机械的庞大，而是它鲜活的“生命感”。走进那栋由旧造船厂车间改造的“机械长廊”，你就像进入了一个巨兽的孵化器。天花板下悬挂着半成品的苍鹭骨架，工人们（他们自称“机械师”）正拿着工具，像外科医生一样为一只有着金属羽毛的蜻蜓调试关节。空气里满是松木、亚麻籽油和焊接金属的独特味道。你可以凑近看每一个齿轮的咬合，触摸那些被手工打磨得温润的木制部件。这里没有“请勿触摸”的冰冷警告，取而代之的是鼓励你去转动曲柄、拉动杠杆，亲身感受机械传动带来的奇妙力量。这种参与感，让冷硬的机械拥有了温度。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`更重要的是，这个奇幻世界并非悬浮于空中，它深深地扎根在南特这座城市的肌理里。本地人带着孩子来这里，就像去公园一样平常。你会看到头发花白的老人指着巨大的联动装置，跟孙子讲述过去这里是如何制造出远洋巨轮的。机械岛用一种极致浪漫的方式，缝合了这座城市因造船业衰落而留下的心理伤疤，将沉重的工业遗产，变成了承载无限想象力的飞毯。它不是对过去的简单怀念，而是一场面向未来的、欢快的庆祝。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`南特机械岛`} />
                <InfoRow label="英文名称" value={`Les Machines de l'île de Nantes`} />
                <InfoRow label="正式名称" value={`Les Machines de l’île`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`南特`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一个诞生于21世纪初、根植于南特深厚工业与科幻血脉的当代艺术奇迹，彻底重塑了城市的废弃工业区。`} />
                <InfoRow label="建筑特色" value={`并非传统建筑，而是由钢铁、木材与想象力构成的巨型可动机械生物群落，坐落于改造后的旧造船厂厂房内。`} />
                <InfoRow label="建筑风格" value={`蒸汽朋克幻想主义，融合了工业时代的扎实结构与文艺复兴时期的机械美学灵感。`} />
                <InfoRow label="文化价值" value={`将城市沉重的工业历史转化为轻盈的梦幻叙事，是艺术重生、城市更新与全民想象力教育的杰出范本。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`开放时间因季节和具体场馆而异。机械长廊和工坊通常全年开放（除12月25日和1月1日），夏季（7月-8月）每天10:00-19:00；春秋季（4月-6月，9月-10月）开放时间多为10:00-18:00；冬季（11月-3月）开放时间缩短，通常为10:00-17:00，且每周一闭馆。乘坐机械大象和海洋世界旋转木马的场次需提前在官网查询并预订，尤其是旺季，场次非常抢手。建议出行前务必查看官网最新时刻表。`} />
              <InfoRow label="门票价格" value={`有多种票务组合。单参观机械长廊：成人票9.5欧元，优惠票（4-17岁、学生等）7.5欧元。机械大象乘坐体验：成人票9.5欧元，优惠票7.5欧元。海洋世界旋转木马：按不同“生物”等级票价在6.5至9欧元之间。有家庭套票和包含主要项目的“护照”通票（成人约23欧元，儿童约18.5欧元），性价比最高。4岁以下儿童在大人陪同下免费进入长廊，但乘坐项目可能需购票。`} />
              <InfoRow label="地址" value={`Parc des Chantiers, Boulevard Léon Bureau, 44200 Nantes, France`} />
              <InfoRow label="交通方式" value={`从南特大西洋机场（NTE）出发：最便捷方式是乘坐机场穿梭巴士（Navette Aéroport）直达南特火车站（Gare de Nantes），车程约20分钟，每20-30分钟一班。从火车站出发，机械岛就在卢瓦尔河对岸的旧造船厂区。你可以选择：1. 步行：从火车站出口朝河方向走，穿过著名的“安妮·德·布列塔尼桥”（Passage Anne-de-Bretagne）即达，全程约15-20分钟，沿途风景很好。2. 电车：乘坐1号线（Direction François Mitterrand）或2号线（Direction Orvault）至“Chantiers Navals”站下车，车程约5分钟。建议购买南特公共交通的单日通票，非常方便。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解机械岛的诞生，你得先回到二十世纪中叶的南特。那时的卢瓦尔河畔，可不是现在这般充满艺术气息。巨大的造船厂里灯火通明，敲打钢铁的轰鸣声响彻云霄，这里是法国最重要的造船基地之一，成千上万的工人在这里挥洒汗水，建造着驶向世界各地的船舶。南特的命运与海洋、与钢铁紧紧捆绑。然而，随着全球化产业转移，上世纪七八十年代，造船业无可挽回地衰落了。船厂接连关闭，巨大的吊机和厂房被废弃，生锈的钢铁骨架对着河流，像一个个被时代遗弃的巨兽。整个街区陷入了漫长的沉寂与迷茫，那是工业革命后许多城市共同的阵痛。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机源于一个天马行空的艺术构想。时间来到新世纪之初，南特市政府决心彻底活化这片巨大的滨水工业遗址。他们不是要推倒重建高楼，而是要注入一个独一无二的灵魂。这时，两位关键人物登场了：弗朗索瓦·德拉罗齐埃和皮埃尔·奥雷菲斯。他们一个是剧场导演，一个是机械设计师，共同痴迷于“移动剧场”和“街头巨型装置”。他们的灵感源泉直接锚定在南特最骄傲的两位儿子身上：科幻小说之父儒勒·凡尔纳，以及虽非南特人却代表机械美学巅峰的列奥纳多·达·芬奇。一个想法逐渐成型：为何不创造一个凡尔纳笔下的世界，用达·芬奇草图中的机械原理，制造出真实存在的、可供人乘坐嬉戏的巨兽呢？`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这个听起来像疯子的点子，却被市政当局勇敢地采纳了。2004年，项目正式启动。团队没有选择现代化的工厂，而是特意入驻了荒废的“大西洋造船厂”旧车间。他们把这里变成了一个开放式的创作实验室。你想象一下那个场景：在充满历史尘埃的厂房里，现代的木匠、焊工、雕刻师和工程师们，围着图纸和模型，争论着一只机械蚂蚁的腿部该用什么样的联动结构，或者一条机械蝠鲼的翅膀如何扇动才能既优美又符合流体力学。所有机械的核心，都遵循着达·芬奇时代就有的原理：齿轮、连杆、曲轴、滑轮，没有电子芯片和复杂的编程，全靠精妙的机械传动。这既是对古典智慧的致敬，也赋予了这些造物一种原始而坦诚的生命力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2007年，第一个震撼世界的明星——机械大象——正式亮相。当这个重达48吨的庞然大物迈出第一步，从工坊走向广场时，整个南特都沸腾了。它不仅仅是一个景点，更成为了一个文化符号，一个宣告城市从工业“制造”转向创意“智造”的宣言。随后，奇幻的“海洋世界旋转木马”在2012年登场，这不是普通的旋转木马，而是一座高达25米、拥有三层海底世界的机械海洋馆，你可以骑乘机械螃蟹、驾驶机械鹦鹉螺号，甚至置身于巨大的机械翻车鱼腹中旋转。每一个新成员的加入，都像是为这个持续生长的机械生态圈添上了一块瑰丽的拼图。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如今，机械岛的故事还在继续。它已经从一个项目，演变成一个持续创作和扩张的生态系统。新的机械生物在不断被设计和制造，旧船厂的其他区域被改造成创意园区、餐厅和酒吧。它吸引着全球的艺术家和工程师前来驻留合作。这里发生过最动人的一幕或许是：当年造船厂的老工人们回访此地，他们抚摸着机械巨象的钢铁支架，眼中含泪，不是悲伤，而是看到自己曾经工作的场所、自己熟悉的钢铁与齿轮，以一种如此诗意和快乐的方式获得了新生。机械岛用它的奇幻叙事，完成了一场跨越时空的和解与传承。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受机械岛的魔力，建议至少预留一整个白天。最佳抵达时间是上午9点半左右，此时游客相对较少，光线柔和适合拍照。游览节奏宜慢不宜快，核心是体验和互动，而非赶场。建议的完美动线是：先在外围感受宏观震撼，再深入内部探索机械奥秘，最后通过亲身体验将想象力升至顶峰。整体耗时约6-7小时，包括午餐和休息时间。这样的安排能让你由远及近、由表及里地沉浸其中，并在精力最充沛的时候体验最有趣的项目。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必、务必提前在官方网站上预订机械大象和海洋世界旋转木马的乘坐票，尤其是旺季，现场几乎不可能买到当天的票。穿着舒适耐走的鞋子，因为园区地面多为石板和工业风地面，且需要上下楼梯探索工坊。如果带孩子，留出更多时间在互动区域，他们的好奇心和动手欲望会在这里得到极大满足。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从旧造船厂区的步行道远远眺望机械大象在广场上漫步的宏伟身姿，感受工业遗址与奇幻生物并存的超现实画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步入“机械长廊”的主展厅，仰头凝视那些悬挂在半空、仿佛处于永恒运动中的机械生物原型与骨架。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在长廊的互动区亲手转动巨大的“机械树”根部的曲柄，看着头顶复杂的齿轮系统将你的力量传递开来，让树梢的机械鸟开始啄食。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟着导览员（或自己探索）深入“画廊”工坊，看机械师们如何像培育生命一样将图纸上的草图变为一个个活动的关节与翅膀。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`预订并乘坐一趟下午场的机械大象，在它平稳而有力的步伐中升高至它的背脊，以八米高的独特视角俯瞰整个机械岛和卢瓦尔河。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`紧接着去体验“海洋世界旋转木马”，选择第二层或第三层一个造型奇特的海洋生物坐骑，沉浸在三十分钟光怪陆离的海底旋转之旅中。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在机械岛附属的“香蕉仓库”餐厅或周边的河畔咖啡馆享用一顿迟来的午餐，回味刚才的奇幻经历。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落时分，沿着卢瓦尔河畔散步，回望亮起灯光的旧厂房和隐约可见的机械轮廓，感受白日幻想沉淀后的宁静与满足。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`旧船厂起重机下仰拍机械大象`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点侧光时，站在广场边缘，以生锈的红色钢铁起重机为前景框架，捕捉机械大象从中走过的瞬间，工业沧桑与奇幻生命对比强烈。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`机械长廊中央仰角`}</h4>
                  <p className="text-sm text-gray-700">{`利用广角镜头，站在“机械树”正下方向上拍摄，将错综复杂的齿轮、链条和悬挂的巨鸟骨架全部收入画面，构图充满几何张力。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`海洋世界旋转木马外部全景`}</h4>
                  <p className="text-sm text-gray-700">{`黄昏蓝调时刻（日落后半小时），站在旋转木马对面的人行道上，等所有灯光亮起，拍摄这座巨大、华丽、缓慢旋转的“海底机械城堡”，长时间曝光可以拉出流动的光轨。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`卢瓦尔河对岸远景`}</h4>
                  <p className="text-sm text-gray-700">{`从安妮·德·布列塔尼桥或更南边的河岸，用长焦镜头压缩空间，将机械岛所在的旧厂房群、远处的南特圣彼得大教堂尖塔一同纳入镜头，讲述新与旧、幻想与历史的对话。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内工坊区域允许拍照，但请尊重工作人员，不要使用闪光灯以免影响他们精细的工作。拍摄机械师工作时最好先微笑示意。视频录制非常出彩，特别是记录机械运动的细节声音和节奏，别忘了开启高质量录音。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`设计爱好者之选`}</h4>
                  <p className="text-sm text-blue-800">{`位于机械岛对岸创意区的“SOZO Hotel”，由一座美丽的19世纪新哥特式教堂改造而成，内部是极简现代设计，住在历史建筑里感受前沿创意，步行至机械岛仅五分钟。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验首选`}</h4>
                  <p className="text-sm text-green-800">{`机械岛官方合作伙伴“Radisson Blu Hotel Nantes”，部分房间拥有直面机械岛和大象广场的绝佳视野，晚上可以看着灯光下的巨象安然入眠。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`温馨家庭民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`隐藏在机械岛后方“Ile de Nantes”岛上的宁静公寓，房东常是本地艺术家，装饰充满个性，自带小厨房，适合家庭或小团体，体验南特人的日常。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端河景享受`}</h4>
                  <p className="text-sm text-purple-800">{`位于市中心但靠近河边的“Hôtel La Pérouse”，拥有典雅的法式风格和顶层的河景露台酒吧，既能便捷到达机械岛，又能享受南特经典的都市优雅。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`机械岛所在的“Ile de Nantes”岛近年来发展迅速，遍布创意工作室和精品店，晚上很安全且有生活气息。如果想体验更古典的南特老城风情，可以选择住在布列塔尼公爵城堡附近，乘坐电车过来也很方便。旺季（夏季和学校假期）住宿非常紧张，提前两个月预订是明智之举。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开南特很多天后，我脑子里挥之不去的，不是某个具体的机械形象，而是一种感觉——一种关于“可能”的兴奋感。在我们这个时代，科技日益隐形和抽象，一切仿佛都由看不见的代码和算法驱动。但机械岛反其道而行，它把所有的奥秘都袒露给你看：你看得见每一根连杆的推动，听得见每一个齿轮的咬合，摸得到木材的纹路和钢铁的冰凉。它用一种近乎笨拙的诚实，重建了人与机械之间最原初的、充满好奇与敬畏的联系。它告诉你，想象力可以如此具体，如此坚实，甚至可以承载你的体重，带你去往一个八米高的童话视角。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这个地方之所以必须列入清单，远不止因为它独特、好玩、拍照好看。更因为，它代表了一种极其珍贵的生活态度：用无边的浪漫去拥抱沉重的历史，用孩童般的玩乐心去解构复杂的现实。南特没有试图忘记它作为工业重镇的过去，而是为那段钢铁记忆，举办了一场盛大、持续、且欢迎所有人参与的嘉年华。在这里，你会被提醒，无论年纪多大，内心深处那个渴望探索、渴望动手创造、渴望看到神话成真的小孩，一直都在。前往机械岛，不仅仅是一次旅行，更是一次对自身想象力的朝圣与重启。在那些咯吱作响的齿轮交响乐中，你会找回一种久违的、确信世界仍然充满奇妙可能的快乐。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/collioure-harbour-fauvist-painters" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科利尤尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Collioure</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/salers-medieval-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨莱尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Salers</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/dinan-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迪南老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dinan Old Town</p>
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
