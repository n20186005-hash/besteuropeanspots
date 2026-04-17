import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Bunk\'Art 1 防核地堡｜潜入冷战心脏，在地拉那山体中探索阿尔巴尼亚最隐秘的时光胶囊 - 最佳欧洲景点',
  description: '想象一下，前一秒你还走在地拉那郊外一条普通得不能再普通的山坡路上，阳光刺眼，空气里是松树和尘土的味道。下一秒，一扇巨大、厚重、颜色灰败的钢铁门就毫无征兆地嵌在山体里，像一块冷酷的疤痕。门虚掩着，漏出里面深不见底的黑暗和一股嗖嗖的凉气——那是混合了混凝土、湿气和陈旧机械的独特气味。当你买票，推开那扇重...',
}

export default function BunkArt1Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: 'Bunk\'Art 1 防核地堡', href: '/attractions/bunk-art-1' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`Bunk'Art 1 防核地堡・Bunk'Art 1・阿尔巴尼亚・地拉那`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下，前一秒你还走在地拉那郊外一条普通得不能再普通的山坡路上，阳光刺眼，空气里是松树和尘土的味道。下一秒，一扇巨大、厚重、颜色灰败的钢铁门就毫无征兆地嵌在山体里，像一块冷酷的疤痕。门虚掩着，漏出里面深不见底的黑暗和一股嗖嗖的凉气——那是混合了混凝土、湿气和陈旧机械的独特气味。当你买票，推开那扇重达数吨的门，光线和声音仿佛瞬间被吸走，温度骤降，一种沉甸甸的寂静将你包裹。这不是普通的博物馆，这是一次垂直进入地心、也是平行穿越时光的坠落。
顺着主隧道向下走，脚步声在空旷的通道里发出清晰得令人心悸的回响。惨白的荧光灯管照亮了刷着绿漆的墙壁，地面是粗糙的水磨石。每一个转角都可能通向一个未知的空间：一间摆满了老式通讯设备的指挥室，红色电话机静默如谜；一个拥有上百个铺位的集体宿舍，冰冷的铁床架排列得整整齐齐；一个手术室，无影灯下不锈钢托盘泛着寒光；甚至还有一个简陋的淋浴间和厕所。你开始意识到，这个地堡是一个完整、封闭、试图复制地上世界一切功能的微型社会，一个为末日准备的“诺亚方舟”，只是船上载着的不是动物，而是权力的核心与一场永不想发生的战争的蓝图。
最震撼的，或许不是这些冰冷的空间，而是当你在某个展厅，看到墙上投射着恩维尔·霍查发表演讲的模糊黑白影像，声音在地道里嗡嗡回荡，而几步之遥，就是阿尔巴尼亚普通家庭在那些年使用的简陋物品和老照片。地上与地下，领袖与平民，宣传与生活，恐惧与日常，在这里被压缩在同一个幽闭的时空里。对于许多年长的阿尔巴尼亚人来说，这个地堡的存在本身就是一个公开的秘密，一个恐惧的象征；而对于年轻一代，这里更像一个超现实的历史课堂，他们带着好奇甚至一丝戏谑来这里“探险”。这种代际感知的差异，本身就构成了游览Bunk’Art最耐人寻味的部分。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下，前一秒你还走在地拉那郊外一条普通得不能再普通的山坡路上，阳光刺眼，空气里是松树和尘土的味道。下一秒，一扇巨大、厚重、颜色灰败的钢铁门就毫无征兆地嵌在山体里，像一块冷酷的疤痕。门虚掩着，漏出里面深不见底的黑暗和一股嗖嗖的凉气——那是混合了混凝土、湿气和陈旧机械的独特气味。当你买票，推开那扇重达数吨的门，光线和声音仿佛瞬间被吸走，温度骤降，一种沉甸甸的寂静将你包裹。这不是普通的博物馆，这是一次垂直进入地心、也是平行穿越时光的坠落。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`顺着主隧道向下走，脚步声在空旷的通道里发出清晰得令人心悸的回响。惨白的荧光灯管照亮了刷着绿漆的墙壁，地面是粗糙的水磨石。每一个转角都可能通向一个未知的空间：一间摆满了老式通讯设备的指挥室，红色电话机静默如谜；一个拥有上百个铺位的集体宿舍，冰冷的铁床架排列得整整齐齐；一个手术室，无影灯下不锈钢托盘泛着寒光；甚至还有一个简陋的淋浴间和厕所。你开始意识到，这个地堡是一个完整、封闭、试图复制地上世界一切功能的微型社会，一个为末日准备的“诺亚方舟”，只是船上载着的不是动物，而是权力的核心与一场永不想发生的战争的蓝图。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最震撼的，或许不是这些冰冷的空间，而是当你在某个展厅，看到墙上投射着恩维尔·霍查发表演讲的模糊黑白影像，声音在地道里嗡嗡回荡，而几步之遥，就是阿尔巴尼亚普通家庭在那些年使用的简陋物品和老照片。地上与地下，领袖与平民，宣传与生活，恐惧与日常，在这里被压缩在同一个幽闭的时空里。对于许多年长的阿尔巴尼亚人来说，这个地堡的存在本身就是一个公开的秘密，一个恐惧的象征；而对于年轻一代，这里更像一个超现实的历史课堂，他们带着好奇甚至一丝戏谑来这里“探险”。这种代际感知的差异，本身就构成了游览Bunk’Art最耐人寻味的部分。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`Bunk'Art 1 防核地堡`} />
                <InfoRow label="英文名称" value={`Bunk'Art 1`} />
                <InfoRow label="正式名称" value={`Bunk'Art 1`} />
                <InfoRow label="国家" value={`阿尔巴尼亚`} />
                <InfoRow label="城市" value={`地拉那`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`由阿尔巴尼亚前领导人恩维尔·霍查下令建造，曾是阿尔巴尼亚共产主义政权在冷战时期为应对核战争威胁而修建的最高级别、最隐秘的军事指挥与政治庇护所。`} />
                <InfoRow label="建筑特色" value={`一座深埋于地拉那郊区山体内部的五层地下迷宫，拥有超过100个房间、错综复杂的走廊和厚重的防爆门，完全自给自足，设计用于在完全封闭状态下维持政权核心数月运转。`} />
                <InfoRow label="建筑风格" value={`纯粹的冷战时期功能主义与军事堡垒风格，以裸露的钢筋混凝土、幽深的隧道和实用至上的内部布局为特征，毫无美学装饰，只为生存与威慑而建。`} />
                <InfoRow label="文化价值" value={`它是阿尔巴尼亚几十年孤立与偏执历史的终极物理象征，如今转型为博物馆，成为这个国家进行历史反思、揭开铁幕秘密、并向国民及世界讲述其独特冷战创伤的重要文化空间。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`周三至周日，上午9:00至下午4:00（最后入场时间下午3:00）。周一和周二闭馆维护。请注意，由于博物馆位于地下深处，内部温度常年恒定在约14-16摄氏度，建议无论外界天气如何，都携带一件外套。每年1月可能进行为期两周的年度深度维护，出行前建议查看官网公告。`} />
              <InfoRow label="门票价格" value={`全价票700列克（约合6欧元）。学生及65岁以上长者持有效证件可享优惠票500列克。12岁以下儿童在成人陪同下免费。门票包含所有展厅的参观。支持现金（阿尔巴尼亚列克或欧元）及国际信用卡支付。`} />
              <InfoRow label="地址" value={`Rruga Fadil Deliu, Tirana 1001, Albania`} />
              <InfoRow label="交通方式" value={`从地拉那国际机场出发，最方便的方式是乘坐出租车，车程约20-25分钟，费用大约1500-2000列克。若从地拉那市中心斯坎德培广场出发，可搭乘前往“Dajti山缆车站”方向的本地公交（小巴），在“Bunk’Art 1”站下车，车程约15分钟，班次频繁。自驾前往的游客，博物馆入口附近有免费但有限的停车位。请注意，博物馆入口并不显眼，是一个嵌在山体中的巨大混凝土门，请留意路标。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从那个被称为“巴尔干之鹰”的男人说起。恩维尔·霍查，阿尔巴尼亚劳动党的长期领袖，一个将斯大林主义奉为圭臬，却又与几乎所有前盟友——南斯拉夫、苏联、中国——先后决裂的孤岛统治者。在他的领导下，阿尔巴尼亚成了“欧洲唯一的社会主义明灯”，也是欧洲最封闭、最偏执的国家。冷战的风吹草动都让他寝食难安，尤其是核战争的阴影。于是，在1970年代，一项绝密工程启动了：在地拉那郊外的山体深处，为政权最高层打造一个能抵御核打击的终极庇护所和战时指挥中心。选址极其隐蔽，施工在绝对保密中进行，参与建设的工人和士兵大多不知道自己身在何处，又在为何而建。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这个地堡的建造，是霍查政权偏执心态的物理结晶。它不是一个简单的防空洞，而是一个五脏俱全的地下城市。工程持续数年，挖空了山体，用最坚固的钢筋混凝土浇筑出五层结构，最深处达地下数十米。这里有自己的独立发电系统、大型储水罐、空气过滤净化装置、食物储备仓库，甚至还有秘密的逃生通道。指挥室、会议室、机要通讯中心、领导人的私人套房、士兵营房、医院、厨房……一应俱全。设计目标是：在完全与外界隔绝的情况下，保障霍查及其核心圈、警卫部队等数百人存活并指挥国家长达数月。它就像一枚埋在地下的巨大“时间胶囊”，里面冻结着一个政权关于生存与权力的终极幻想。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史充满了讽刺。1985年霍查去世时，这个耗资巨大的地堡从未被启用过其核心功能。他的继任者们依然生活在这个封闭的堡垒国家里，直到1991年共产主义政权垮台。地堡的大门紧紧锁闭，逐渐被遗忘在荒草和山石之中，成为了一个怪诞的传说。新生的阿尔巴尼亚忙于应对剧变带来的混乱与希望，无人有暇顾及这个象征着旧时代恐惧的庞然大物。它在黑暗中沉默，混凝土墙壁上凝结的水珠，仿佛是那个冻结时代留下的冰冷泪水。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转折点发生在2014年。一群富有远见的历史学家和艺术家提出一个大胆设想：与其让这个黑暗的遗迹继续沉睡，不如将它打开，让阳光（即使是象征性的）照进这段被封存的历史。在各方努力下，“Bunk’Art 1”项目诞生了。它没有试图美化或简单谴责，而是通过精心的策展，将地堡本身作为最有力的展品，同时在各个房间布置了大量档案文件、照片、影像和实物，全景式地展现了霍查时代阿尔巴尼亚的社会、政治与文化。开幕那天，许多阿尔巴尼亚人第一次走进这里，他们触摸着冰冷的墙壁，看着父辈经历过的生活，心情复杂难言。这个曾经只为极少数人准备的秘密堡垒，终于向所有民众敞开了大门。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天，Bunk’Art 1已超越了单纯的博物馆范畴。它是一个进行国家记忆对话的论坛，一个艺术介入历史的场所（后来开放的Bunk’Art 2位于市中心，更侧重秘密警察历史）。在这里，你不仅能了解到政权的运作机制和冷战的宏观背景，更能透过无数个人故事——那些被监视、被流放、在匮乏中努力生活的普通人的故事——感受到历史的温度与重量。从为庇护权力而建，到为启迪公众而开，Bunk’Art 1完成了一次深刻的身份蜕变，成为阿尔巴尼亚直面过去、思考现在、走向未来的一个独特地标。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`强烈建议安排至少3-4小时进行深度游览。最佳抵达时间是开馆后不久的上午9:30，此时游客最少，你能独享许多幽暗通道带来的沉浸式压迫感与历史感。游览节奏宜慢不宜快，因为信息量巨大且环境特殊，需要时间消化和感受。整体路线遵循从外到内、从上到下的逻辑：先从入口处适应环境并了解概况，然后沿着主通道深入，逐层探索政治指挥区域、生活保障区域，最后在最底层感受其工程规模，再折返。中途可在原会议厅或休息区稍作停留，让自己的情绪从厚重的历史中抽离片刻。这样的安排能确保你在体力耗尽前，系统地完成这次地下时光之旅。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双舒适且防滑的鞋子，因为部分地面潮湿，且需要上下不少楼梯。内部几乎没有手机信号，请提前做好心理准备，这反而有助于你完全沉浸于展览。部分区域非常安静且灯光昏暗，独自游览时若感到不适，可返回主通道或有人流的展厅。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在入口处那扇令人望而生畏的巨型钢制防爆门前驻足片刻，感受它物理上的沉重与象征意义上的压迫感，这是进入另一个世界的仪式。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主倾斜隧道缓缓下行，让眼睛适应昏暗的光线，耳朵捕捉通风系统低沉的嗡鸣和远处传来的滴水声，身体感知温度的下降。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在第一个主要交叉口左转，探索那间宛如科幻场景的中央通讯指挥室，密密麻麻的交换机、控制板和那部著名的红色直通电话仿佛仍在等待一道永远不会下达的命令。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到领导人的私人套间区域，看看那间铺着简易地毯、放着老旧木质办公桌和铁架床的房间，想象权力核心在末日幻景下的“简朴”生活。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进宽阔的集体宿舍，在成排冰冷的双层铁床间穿行，触摸粗糙的军毯，体会普通士兵和工作人员在这个地下世界中作为“零件”的存在状态。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`深入地下层的技术保障区，仰头观看巨大的储水罐和嗡嗡作响的老式发电机模型，理解这个地下王国维持运转的生命线工程。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`不要错过那些布置在小型房间里的主题展览，比如关于日常生活的“蓝色工作服”、关于国家安全的“窥探之眼”，它们用细节填补了宏大叙事的空白。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在返回地面的上行路上，最后回望一眼那幽深的主走廊，将那种混合了历史沉重、人类执念与幸存庆幸的复杂感受封存于心。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`入口防爆门全景`}</h4>
                  <p className="text-sm text-gray-700">{`站在门外观景平台，用广角镜头将巨大的灰色钢门、裸露的山体岩石和“Bunk’Art 1”标志一同纳入画框，阴天或傍晚的均匀光线最能体现其冷峻质感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`中央通讯指挥室纵深`}</h4>
                  <p className="text-sm text-gray-700">{`站在房间入口处，利用对称构图，将两排老式控制台和尽头的阿尔巴尼亚国旗（展品）拍成深邃的透视效果，室内灯光本身就能营造出很好的氛围。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`漫长主隧道的一点透视`}</h4>
                  <p className="text-sm text-gray-700">{`选择一条无人、灯光整齐排列的笔直走廊，站在中间，将相机放低，捕捉隧道向黑暗中无限延伸的视觉冲击力，营造强烈的孤独与迷失感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`集体宿舍的重复结构`}</h4>
                  <p className="text-sm text-gray-700">{`侧身站在两排铁床之间，聚焦于床架形成的强烈重复线条和透视，可以适当提高ISO捕捉现场光，展现空间的规整与压抑。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从下层仰拍楼梯井`}</h4>
                  <p className="text-sm text-gray-700">{`找到连接各层的螺旋或直跑楼梯，从底部向上拍摄，将混凝土结构的几何美感和层层向上的压迫感结合在画面中。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`由于室内光线复杂且普遍较暗，建议使用大光圈镜头或提高相机感光度，三脚架在某些安静无人时段可以使用，但需注意不要阻碍通道。请尊重展览，切勿使用闪光灯拍摄脆弱的历史文件或物品。拍摄人物（包括其他游客）时请务必先征得同意。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`市中心便利之选`}</h4>
                  <p className="text-sm text-blue-800">{`斯坎德培广场周边的设计酒店或精品公寓，出门即是热闹的咖啡馆和步行街，让你从地下的沉重历史中回到活泼的当代地拉那怀抱。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`Pyramid of Tirana（地拉那金字塔）附近由共产主义时期建筑改造的时髦旅舍，本身就是一个建筑历史的对话，适合年轻的旅行者交流故事。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`宁静绿洲`}</h4>
                  <p className="text-sm text-yellow-800">{`靠近Grand Park of Tirana（地拉那大公园）的安静民宿或小型酒店，清晨可在湖边散步，呼吸新鲜空气，平复参观后可能起伏的心绪。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-purple-800">{`位于Blloku区（前领导人专属住宅区）的五星级酒店，如今这里是时尚餐厅和酒吧的聚集地，体验历史阶层区划的戏剧性转变与现代奢华。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`地拉那市区面积不大，住在市中心去往Bunk’Art 1交通都很方便。Blloku区夜生活丰富，但可能稍显喧闹；追求安静的游客可选择公园附近。建议提前在线预订，尤其在夏季旅游旺季。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`走出Bunk’Art 1，重新被地中海阳光拥抱的那一刻，你会有一种恍如隔世的感觉。皮肤上似乎还残留着地下的阴凉，但心里却被一种复杂的温暖填满。这种温暖，并非来自愉悦，而是来自理解。你刚刚穿行的，不仅仅是一个混凝土迷宫，更是一个国家集体的心理迷宫——那种在强敌环伺的想象中、在孤岛心态下滋生的恐惧、偏执与对绝对控制的渴望，被如此具象地浇筑在了岩石之中。它让你真切地触摸到，历史并非教科书上干瘪的年份，而是冰冷床架的温度、是红色电话机的沉默、是通风管道永无止境的低吟。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个被快速消费的风景和打卡文化充斥的时代，Bunk’Art 1提供了一种截然不同的旅行价值：它是一次向内、向下的深潜。它不提供轻松的美，只提供沉重的真。它迫使你思考权力与安全、隔离与开放、恐惧与记忆这些永恒的命题。对于每一位真正渴望理解欧洲复杂肌理、而不只是欣赏其表面风光的深度旅人来说，地拉那的这座山体迷宫，是一个无法绕开的里程碑。它提醒我们，光明灿烂的欧洲大陆之下，也埋藏着这样由钢铁混凝土构成的黑暗记忆。而直面这种黑暗，正是为了更珍惜我们走在地面阳光下的每一步自由。这，或许就是旅行最深刻的意义之一：在别人的历史坐标里，找到照亮自己前路的反思之光。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/berat-thousand-windows" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    培
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">培拉特（千窗之城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Berat</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/butrint-national-park" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布特林特</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Butrint</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kruja-castle-bazaar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克鲁亚</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kruja</p>
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
