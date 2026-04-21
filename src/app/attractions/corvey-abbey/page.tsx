import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科尔维修道院 Corvey Abbey｜易北河畔的千年智慧宝库与加洛林遗珍 - 最佳欧洲景点',
  description: '嘿，朋友，想象一下这个场景：你穿过赫克斯特那个安静得能听见自己脚步声的小村庄，沿着易北河畔一条白杨树夹道的小路慢慢走。然后，毫无预兆地，一片巨大的、蜂蜜色的建筑群在河流弯道后的平地上铺展开来。那不是险峻山崖上的城堡，而是一种沉稳的、平铺直叙的宏伟，像一本厚重的古籍静静摊开在绿野之上。第一眼看到科尔维...',
}

export default function CorveyAbbeyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '德国', href: '/destinations/germany' },
            { label: '北莱茵-威斯特法伦州，赫克斯特市附近', href: '/destinations/germany' },
            { label: '科尔维修道院', href: '/attractions/corvey-abbey' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`科尔维修道院・Corvey Abbey・德国・北莱茵-威斯特法伦州，赫克斯特市附近`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，想象一下这个场景：你穿过赫克斯特那个安静得能听见自己脚步声的小村庄，沿着易北河畔一条白杨树夹道的小路慢慢走。然后，毫无预兆地，一片巨大的、蜂蜜色的建筑群在河流弯道后的平地上铺展开来。那不是险峻山崖上的城堡，而是一种沉稳的、平铺直叙的宏伟，像一本厚重的古籍静静摊开在绿野之上。第一眼看到科尔维修道院，你不会有那种惊艳的尖叫，而是一种深深的吸气——它的气场不是炫耀，是积淀。
走近了，那种穿越时空的混淆感才真正袭来。你的左边，是有着巨大山墙和规整窗户的巴洛克式宫殿，优雅得一丝不苟，仿佛随时会有戴着假发的贵族从门廊走出。而你的正前方，却矗立着一座看似朴素、甚至有些粗粝的石质门楼，那就是闻名于世的加洛林西立面，来自公元9世纪。你的脚踩在庭院古老的石板上，声音空洞；空气里是旧书、陈年木头和一点点河岸水汽混合的味道。奇怪的是，这里明明曾是权力的中心，如今却弥漫着一种图书馆般的、沉思的宁静。几个本地人推着自行车穿过庭院，去教堂里点一支蜡烛，仿佛这只是他们日常散步路过的一个老邻居，而不是什么世界遗产。这种奇异的“日常神圣感”，正是科尔维最初打动我的地方。
而它的心脏，藏在巴洛克的外表之下。当你踏入那座举世闻名的图书馆，时间真的停止了。那不是昏暗的密室，而是一个高达两层、被成千上万册古老皮质书脊覆盖的明亮殿堂。阳光从高高的窗户斜射进来，在空气中画出清晰的光柱，细小的尘埃在其中缓缓舞蹈。你可以闻到皮革、羊皮纸和岁月那股干燥而温暖的气息。寂静是如此之深，你几乎能听见几个世纪以来，那些本笃会修士翻动书页、羽毛笔划过纸面的沙沙声。这里曾藏书超过七万卷，是当时北欧最重要的知识灯塔。站在那些必须用梯子才能取到顶层书籍的雕花木梯前，你会真切地感到，智慧是有体积、有重量、甚至有温度的。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，想象一下这个场景：你穿过赫克斯特那个安静得能听见自己脚步声的小村庄，沿着易北河畔一条白杨树夹道的小路慢慢走。然后，毫无预兆地，一片巨大的、蜂蜜色的建筑群在河流弯道后的平地上铺展开来。那不是险峻山崖上的城堡，而是一种沉稳的、平铺直叙的宏伟，像一本厚重的古籍静静摊开在绿野之上。第一眼看到科尔维修道院，你不会有那种惊艳的尖叫，而是一种深深的吸气——它的气场不是炫耀，是积淀。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，那种穿越时空的混淆感才真正袭来。你的左边，是有着巨大山墙和规整窗户的巴洛克式宫殿，优雅得一丝不苟，仿佛随时会有戴着假发的贵族从门廊走出。而你的正前方，却矗立着一座看似朴素、甚至有些粗粝的石质门楼，那就是闻名于世的加洛林西立面，来自公元9世纪。你的脚踩在庭院古老的石板上，声音空洞；空气里是旧书、陈年木头和一点点河岸水汽混合的味道。奇怪的是，这里明明曾是权力的中心，如今却弥漫着一种图书馆般的、沉思的宁静。几个本地人推着自行车穿过庭院，去教堂里点一支蜡烛，仿佛这只是他们日常散步路过的一个老邻居，而不是什么世界遗产。这种奇异的“日常神圣感”，正是科尔维最初打动我的地方。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而它的心脏，藏在巴洛克的外表之下。当你踏入那座举世闻名的图书馆，时间真的停止了。那不是昏暗的密室，而是一个高达两层、被成千上万册古老皮质书脊覆盖的明亮殿堂。阳光从高高的窗户斜射进来，在空气中画出清晰的光柱，细小的尘埃在其中缓缓舞蹈。你可以闻到皮革、羊皮纸和岁月那股干燥而温暖的气息。寂静是如此之深，你几乎能听见几个世纪以来，那些本笃会修士翻动书页、羽毛笔划过纸面的沙沙声。这里曾藏书超过七万卷，是当时北欧最重要的知识灯塔。站在那些必须用梯子才能取到顶层书籍的雕花木梯前，你会真切地感到，智慧是有体积、有重量、甚至有温度的。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`科尔维修道院`} />
                <InfoRow label="英文名称" value={`Corvey Abbey`} />
                <InfoRow label="正式名称" value={`Corvey Abbey`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`北莱茵-威斯特法伦州，赫克斯特市附近`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`作为少数保存下来的加洛林时期西部建筑范例，它是查理曼帝国在萨克森地区传播基督教与文化的前哨，被誉为“北方的蒙特卡西诺”。`} />
                <InfoRow label="建筑特色" value={`独特的加洛林时期西立面（西构）与内部壮丽的巴洛克式宫殿建筑和图书馆惊人地共存。`} />
                <InfoRow label="建筑风格" value={`以加洛林时期建筑为基础，核心部分在17-18世纪被改建为巴洛克式修道院及亲王主教宫殿。`} />
                <InfoRow label="文化价值" value={`不仅是宗教圣地，更是中世纪欧洲文学与知识的中心（拥有巨大图书馆），其变迁史堪称一部浓缩的欧洲宗教与贵族权力演变史。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`宫殿与展览区域开放时间因季节而异：通常四月至十月，周二至周日，上午10点至下午6点；十一月至三月，开放时间缩短，且可能仅周末开放或需预约。皇家大厅、图书馆及教堂的导览团有固定时间，通常为每天下午2点。冬季（约12月中旬至2月初）可能有长时间闭馆维护期，出行前务必在其官网确认最新时间。`} />
              <InfoRow label="门票价格" value={`成人票约8欧元，含宫殿、展览及花园的常规参观。仅参观教堂免费。提供家庭票、学生票及团体票优惠。参加包含皇家大厅和图书馆的深度导览团需额外支付约5欧元费用，且必须提前预订。`} />
              <InfoRow label="地址" value={`Corvey, 37671 Höxter, Germany`} />
              <InfoRow label="交通方式" value={`最近的国际机场是汉诺威机场或帕德博恩机场。从汉诺威中央火车站出发，乘坐区域火车（RE）前往奥滕施泰因方向，在赫克斯特站下车，车程约1小时45分钟，每小时至少一班车。从赫克斯特火车站出发，可以步行约30分钟穿过宁静的村庄和易北河畔的草地抵达修道院，这是最推荐的方式；也可乘坐当地罕见的出租车，约5分钟车程。如果自驾，A44和A7高速公路均可方便抵达，景点外有充足的免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲科尔维的故事，我们得把时钟拨回1200多年前。那时，查理曼大帝的帝国正如日中天，但帝国东北部的萨克森地区，那些信奉着古老日耳曼神灵的部族还在顽强抵抗。公元815年，查理曼的儿子，虔诚者路易，做出了一个极具战略眼光的决定：在易北河与威悉河之间的战略要地，建立一座新的修道院。它被命名为“Corbeia Nova”（新科尔维），源自它在法国科尔比的母院。这不仅仅是一座修道院，它是一把插入异教腹地的文化利剑，一个巩固帝国边疆、传播基督教信仰和加洛林文艺复兴成果的前哨站。最初的建筑是木制的，修士们在战战兢兢中垦荒、祈祷，并努力将拉丁文经典和神学思想抄写在珍贵的羊皮纸上。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的黄金时代在9世纪到来。公元822年，一位来自法国奥尔良的贵族青年来到这里，他的名字叫安斯加尔。谁也没想到，这个在科尔维潜心学习的年轻人，日后会被誉为“北欧使徒”。他从这里出发，前往丹麦和瑞典传教，成为了斯堪的纳维亚第一位大主教。科尔维，由此成了向北方蛮荒之地输送文明火种的灯塔。也正是这个时期，那座今天看来略显朴素、却让考古学家为之疯狂的加洛林西立面被建立起来。这种带有塔楼和内部礼拜堂的西立面结构，是加洛林王朝独有的建筑创新，全欧洲只剩寥寥几处，而科尔维的这是最古老、最完整之一。它像一位沉默的千岁老兵，见证了帝国最辉煌的扩张。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，中世纪的欧洲没有永恒的和平。科尔维在随后的几个世纪里，经历了无数次劫难：维京人的掠袭像来自北方的寒流，将它洗劫一空；地方领主们的权力争夺让它烽火不断。但它就像河边的芦苇，一次次在灰烬中重生。真正的转折点在16世纪的宗教改革和三十年代战争。战火几乎将它夷为平地，著名的图书馆也损失惨重。但凤凰涅槃的故事才刚要开始。1667年，科隆选帝侯兼帕德博恩亲王主教将这里作为自己的夏宫，开始了大规模的巴洛克式改建。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，我们看到了今天这种奇妙的“混搭”。冷酷的战争废墟上，长出了优雅华丽的巴洛克宫殿。原本的罗马式教堂被包裹进了新的巴洛克外衣里，内部装饰着炫目的灰泥雕塑和壁画。那座堪称艺术品的图书馆大厅，正是在这个时期诞生，成为了贵族知识和品味的炫耀。修道院变成了世俗亲王主教的宫殿，修士变成了服务宫廷的学者。这种从神圣修道院到世俗权力中心的转变，本身就是一个绝佳的欧洲历史切片。它安稳地度过了世俗化运动，成为了当地贵族的私人宅邸，直到被国家接管。2014年，联合国教科文组织将它的名字列入世界遗产名录，理由正是它“对加洛林时代建筑和艺术的独特见证”，以及“作为中世纪早期欧洲文化传播中心”的非凡意义。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要彻底感受科尔维修道院的双重灵魂——古老的加洛林根基与华丽的巴洛克化身，建议你留出至少4-5小时的完整时间。最佳抵达时间是上午10点开门前后，这时晨雾可能还未从易北河面完全散去，光线柔和，游客稀少。游览节奏应该是“外-内-静”：先从外部整体感受建筑群的规模和地理环境，再深入宫殿内部，沉浸于巴洛克的奢华与图书馆的震撼，最后在教堂和花园里寻找内心的宁静。务必提前查好并预订下午的深度导览团，因为只有跟随向导，你才能踏入那间禁止普通游客自由进入、藏有最珍贵古籍的“密室”图书馆和皇家大厅，这是整个旅程的高光时刻。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`深度导览团（特别是德语团）非常抢手，务必在官网提前数天甚至数周预订，这是理解此地精髓的关键。宫殿内部地面多为光滑的古老木板或石材，建议穿一双绝对舒适防滑的鞋子。花园和河岸区域夏季蚊虫较多，记得备好驱蚊液。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从易北河对岸的草地小径开始，远远地拍下修道院宫殿群与河流、森林相依的全景，体会它作为“河边堡垒”的最初意境。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过古老的石桥走进开阔的中央庭院，站在原地缓缓转一圈，让眼睛对比左侧巴洛克宫殿的繁复与正前方加洛林西立面的古朴，完成第一次时空切换。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随上午的常规参观路线，走进宫殿内部，在那些天花板布满神话壁画、墙壁镶着镜子的巴洛克大厅里，想象一下昔日亲王主教在此宴饮的浮华场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要在中午光线最好的时候踏入那座两层高的巴洛克图书馆，看着阳光如何为千万册古籍镀上金边，并找到那架通往知识云端的华丽旋梯。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参加下午的深度导览团，屏住呼吸跟随向导打开那扇锁着的门，进入不对普通游客开放的古老书库，近距离观察那些中世纪手稿的笔迹与插画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`导览结束后，独自走进修道院教堂，这里的内核仍是古老的罗马式巴西利卡，在烛光摇曳的主祭坛前静坐片刻，聆听自己的心跳与历史的回声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂侧门出来，漫步到宫殿后方广阔的英式花园和毗邻的古老橡树林，沿着易北河岸散步，从另一个角度回望这座建筑，完成从喧嚣历史到自然宁静的过渡。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果还有余力，步行返回赫克斯特老城，在市政厅广场边的咖啡馆坐下，点一杯当地的啤酒，回味刚才经历的那场跨越千年的漫游。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`易北河东岸仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，站在河对岸的农田小径上，用广角镜头将静静的河水、前景的绿草、中景的石桥与背景的整个宫殿建筑群一同纳入画面，构图力求平稳开阔，突出其“平原王者”的气度。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`巴洛克图书馆中轴线对称构图`}</h4>
                  <p className="text-sm text-gray-700">{`下午两点左右，阳光西斜能照入图书馆深处，站在大厅正中央，将两侧高耸到天花板的深色橡木书架、中央的阅览长桌以及尽头的华丽窗户作为透视焦点，拍出极具纵深感与神圣知识感的画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`西立面（加洛林门楼）细节特写`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，能最清晰地拍出西立面上那些千年石砖的肌理、狭窄窗孔的比例以及上方后来加建的巴洛克山墙与古老部分的结合处，这是建筑考古爱好者的最爱。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`宫殿回廊的光影游戏`}</h4>
                  <p className="text-sm text-gray-700">{`晴天的上午，阳光会透过回廊的拱窗，在斑驳的砖石地面上投下规律的光影，找一个角度，让一道光斑恰好落在一扇古老的木门上或你的脚边，拍出静谧而富有哲思的氛围照。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`图书馆内严格禁止使用闪光灯和三脚架（除非有特殊许可），为了保护古籍，请务必遵守。拍摄教堂内部宗教仪式或祈祷者时，请保持绝对尊重和安静，最好事先用眼神征得同意或远远拍摄环境氛围。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河畔宁静民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在赫克斯特老城边缘、直接面对易北河的家庭式旅馆，清早推开窗就能看到河面薄雾和对岸若隐若现的修道院轮廓，晚上伴着潺潺水声入眠。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`修道院自身的历史客房`}</h4>
                  <p className="text-sm text-green-800">{`科尔维修道院建筑群内就有少量由古老厢房改造的精品客房，入住其中意味着在游客散尽后，你能独享整个庭院星空下的寂静，真正“住在历史里”。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`附近葡萄园农庄酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车约20分钟，入住威悉河畔山丘上的家族经营农庄酒店，房间露台正对连绵的葡萄园，品尝当地产的雷司令，从另一种田园诗的角度回味你的文化之旅。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`帕德博恩现代设计酒店`}</h4>
                  <p className="text-sm text-purple-800">{`如果追求都市便利，可住在半小时车程外的帕德博恩市，选择市中心由历史建筑改造的设计酒店，享受现代舒适与周边丰富餐饮夜生活，将科尔维作为一日深度探险的目的地。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`赫克斯特是非常安宁的小城，治安极好，但夜晚娱乐活动较少，适合喜欢静养的旅人。如果选择旺季（尤其是夏秋之交）来访，修道院内的客房和周边特色住宿需要提前很久预订。自驾者选择住宿地点会更灵活。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开科尔维修道院好几天了，但我脑海里总重复着那个画面：一边是精致到奢靡的巴洛克灰泥装饰，天使在云端飞舞；另一边是粗糙简朴、几乎没有任何装饰的加洛林石墙，沉稳如大地。它们被强行组合在同一栋建筑里，却意外地达成了一种和解，一种关于时间与存在的哲学对话。这提醒着我们，历史从来不是单一纯粹的，文明就像一条河，总是在不断的覆盖、冲刷、融合中向前流淌。科尔维不是那种让你激动到跳跃的地方，它更像一位智慧的老者，你只需坐在他身边，就能获得一种深沉的平静。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求“网红打卡”和速成体验的时代，科尔维修道院提供了一种截然相反的旅行价值——慢下来，去辨认不同时代的砖石，去想象不同身份的人（修士、贵族、学者、农民）如何在同一片土地上看待信仰、权力与知识。它告诉你，真正的深度不是看到了多少，而是感受到了多少层次的“时间”。当你站在图书馆里，被知识的物理重量所包围时，你会重新思考“阅读”和“传承”的意义。所以，如果你厌倦了浮光掠影，渴望一次能沉入历史河床底部的旅行，那么，请一定来易北河畔，拜访这位沉默的千岁巨人。它不会给你瞬间的刺激，但会给你一种可以带走、并长久回味的内在力量。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/liebfrauenkirche-limburg" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    林
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">林堡圣母教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Liebfrauenkirche Limburg</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/altstadt-amberg" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    安
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">安贝格老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Amberg Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/speyer-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施佩耶尔大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Speyer Cathedral</p>
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
