import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '洛雷托旅游攻略与自由行指南：探秘天使搬运的圣屋，最完整的朝圣地深度游',
  description: '探索意大利洛凯大区的洛雷托（Loreto），一份超详细的深度游攻略，带你走进包裹着传说中“圣母故居”的宏伟圣殿，揭秘其历史、建筑与文化。',
}

export default function LoretoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '洛雷托', href: '/attractions/loreto' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`洛雷托・Loreto・意大利・马尔凯`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你计划一趟意大利中部深度游，有一个地方，你可能在旅游手册上不常看到，但它却是欧洲信仰史上一个极其重量级的存在——洛雷托。今天这份私藏旅游攻略，就带你躲开人潮汹涌的大热门，来到这座安详的山顶小镇。它的核心，是那座传说由天使从巴勒斯坦“空运”而来的“圣母玛利亚故居”（Santa Casa）。想象一下，一整座石屋，跨越地中海，被天使搬运至此？这个故事本身就如同神迹。作为你的专属向导，这份自由行指南请收好，我们将不止是看一座教堂，而是去触摸一段活生生的信仰传奇，感受几个世纪以来，无数朝圣者在此留下的温度与祈祷。相信我，这趟旅程的震撼，远超你的预期。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，如果你计划一趟意大利中部深度游，有一个地方，你可能在旅游手册上不常看到，但它却是欧洲信仰史上一个极其重量级的存在——洛雷托。今天这份私藏旅游攻略，就带你躲开人潮汹涌的大热门，来到这座安详的山顶小镇。它的核心，是那座传说由天使从巴勒斯坦“空运”而来的“圣母玛利亚故居”（Santa Casa）。想象一下，一整座石屋，跨越地中海，被天使搬运至此？这个故事本身就如同神迹。作为你的专属向导，这份自由行指南请收好，我们将不止是看一座教堂，而是去触摸一段活生生的信仰传奇，感受几个世纪以来，无数朝圣者在此留下的温度与祈祷。相信我，这趟旅程的震撼，远超你的预期。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`洛雷托`} />
                <InfoRow label="英文名称" value={`Loreto`} />
                <InfoRow label="正式名称" value={`Loreto`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`马尔凯`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`洛雷托在欧洲宗教历史中扮演着一个独一无二、近乎神话的角色。它的核心地位完全源自那个始于13世纪末的传说：在十字军东征末期，随着基督教势力在圣地的衰退，圣母玛利亚在拿撒勒的故居（据传是天使报喜发生之地）面临被毁的危险。于是，在1291年，一群天使将这间简陋的石屋整体搬运，先越过地中海抵达今天克罗地亚的雷卡纳蒂（史称“天使的第一次搬运”），后又因战乱，于1294年由天使再次“空运”到如今洛雷托所在的月桂树林中。尽管这听起来像纯粹的传说，但教廷在历史上进行了漫长而严肃的调查，无数的朝圣记录、早期文献以及后来对圣屋石材的科学分析（发现其确实不属于意大利本土，而是与巴勒斯坦地区的石材相符），都为这个传说增添了神秘色彩。自15世纪起，洛雷托正式成为与罗马、圣地亚哥齐名的天主教世界最重要的朝圣地之一，受到历代教皇的推崇和保护。无数国王、贵族、艺术家和普通信徒跋涉而来，它不仅是信仰的灯塔，也深刻影响了文艺复兴时期的艺术与建筑风格。`} />
                <InfoRow label="建筑特色" value={`矗立在洛雷托山顶的，是一座令人屏息的宏伟建筑群——洛雷托圣母圣殿（Basilica della Santa Casa）。从远处看，它更像一座巨大的堡垒或宫殿，庞大的砖石结构庄严稳重，顶部是文艺复兴风格的圆顶，由伟大的建筑师布拉曼特和桑加罗等人设计完成。但真正的精髓在内部。教堂本身是一座华美的“外壳”，而它包裹的核心，正是那座传说中的朴素石屋——“圣屋”。当你走进教堂内部，强烈的对比会瞬间击中你：四周是极致华丽的大理石浮雕、壁画、镀金装饰，属于典型的文艺复兴晚期和巴洛克风格；而在教堂正中央，被一道精美绝伦的大理石屏壁（圣屋神龛）环绕保护的，正是那面粗糙、暗沉、由原始砂岩砌成的墙壁。这面墙没有任何粉饰，赤裸地展现着时间的痕迹。神龛由多位文艺复兴大师雕刻，讲述着圣母生平和天使搬运圣屋的故事，其精细繁复与内部圣屋的质朴原始形成了戏剧性的对话，仿佛在诉说：所有人类的艺术辉煌，都只是为了供奉那份最初、最朴素的信仰。`} />
                <InfoRow label="建筑风格" value={`洛雷托圣殿是一座融合了多种风格的建筑杰作，主要以文艺复兴和巴洛克风格为主导。教堂的主体结构，包括其雄伟的立面和宏伟的穹顶，是文艺复兴时期追求对称、和谐与古典比例的典范。布拉曼特设计的圆顶，灵感直接来源于罗马万神殿，宏大而庄严，象征着神性的完美。而内部，当你走进环绕圣屋的神龛时，风格则过渡到了奢华绚烂的巴洛克。这座由白色大理石雕刻而成的巨大屏壁，由包括桑索维诺在内的多位大师历时近一个世纪完成。上面充满了动态的雕塑、扭曲的柱式、繁复的装饰和戏剧性的光影效果——这正是巴洛克艺术的精髓：用强烈的情感、流动的线条和炫目的技艺来激发信徒的虔诚与敬畏。你可以看到天使们奋力“搬运”房屋的生动场景，人物衣袂飘飘，充满力量感。简而言之，建筑本身在用最古典的形式“供奉”，而内部的装饰则在用最激情的方式“叙述”，共同将朝圣者的情绪推向高潮。`} />
                <InfoRow label="文化价值" value={`对于当地人乃至全世界的信徒而言，洛雷托早已超越了一个旅游景点，它是一个活着的“呼吸的圣迹”。几个世纪以来，这里被认为是家庭和旅途的保护地，许多新婚夫妇、即将远行的海员和移民都会来此祈求平安。圣殿内悬挂的无数还愿物——小画、模型船、拐杖、军牌——无声地诉说着一个个关于拯救、治愈与感恩的故事，形成了一个充满人情味的信仰档案馆。对现代社会而言，它更是一座无价的“露天艺术博物馆”，汇集了从梅洛佐·达·福尔利、卢卡·西诺雷利到提香等文艺复兴巨匠的壁画和穹顶画。它深刻影响了欧洲“圣屋”崇拜的传播，世界各地（从捷克到美国）出现了许多仿建洛雷托圣屋的教堂。来到这里，你会感受到一种穿越时间的连接：一边是科技发达的21世纪，一边是人们依然用最古老的方式——步行、跪拜、触摸墙壁——来寻求心灵慰藉。这种传统与当下的并存，正是洛雷托独特的文化温度。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 洛雷托一日游打卡路线攻略：从圣屋朝圣到山顶漫步`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`经典自由行路线推荐`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好啦，路线规划好了，咱们就按一天来玩，节奏张弛有度。上午（9:00-12:30）：沉浸圣殿。 建议你一早抵达，避开大型朝圣团。先从圣殿广场（Piazza della Madonna）开始，仰拍一下教堂雄伟的立面和钟楼。进入教堂后，别急着冲向中央，先沿着外围回廊走走，让你的眼睛适应一下内部辉煌的光线。然后，慢慢接近中央的圣屋神龛。跟着朝圣者的队伍，你可以进入神龛内部，亲手触摸那面原始的砂岩墙壁，感受那份粗粝的质感，那一刻非常奇妙。别忘了抬头看绚烂的穹顶壁画。之后，去参观圣器室和宝库，那里收藏着无价的艺术品和还愿物。中午（12:30-14:00）：古城午餐。 从教堂出来，钻进旁边迷宫般的中世纪老街，找一家本地小馆子。务必尝尝马尔凯大区的特色，比如用当地橄榄油烹制的橄榄阿斯科拉内（橄榄酿肉）或手工意面。下午（14:00-17:00）：探索与俯瞰。 饭后可以参观一下主教宫殿和市立美术馆。随后，一定要进行一项绝佳体验：登上圣殿的屋顶露台（通常有导游带领）。在那里，你可以近距离欣赏布拉曼特设计的穹顶，并获得俯瞰整个古镇和远处亚得里亚海的360度无敌视野。最后，沿着古城墙散步，在静谧的巷弄里买点手工宗教纪念品或当地特产。傍晚时分，在广场边的咖啡馆喝一杯，看夕阳为白色的圣殿染上金辉，完美结束一天。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  圣屋的“黑色圣母像”： 在圣屋内部神龛的尽头，供奉着一尊被称为“洛雷托圣母”的木质雕像。她并非古老原件（原像在1921年的一场火灾中被毁），但复制品依然承载着无数祈祷。雕像通体呈深黑色，这是几个世纪以来蜡烛和油灯烟熏的痕迹，赋予了它一种沉静而深邃的庄严感。仔细看她的面部，雕刻风格是典型的晚期哥特式，带着一丝悲悯与温柔。无数朝圣者在此长久凝视、轻声祷告，空气中弥漫着蜂蜡和旧木头的混合气味，氛围极其肃穆而感人。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  神龛浮雕《天使搬运圣屋》： 在大理石神龛的正面，找到由桑索维诺雕刻的这幅著名浮雕。它生动地展现了传说场景：一群健壮有力的天使，仿佛顶着狂风，奋力扛起一座有门窗的石屋，在云层中飞翔。其中一个天使的动态尤为精彩，他肌肉紧绷，衣袍被风拉扯得向后飞扬，充满了巴洛克艺术的动感与戏剧性。光影打在浮雕的凹凸处，让整个故事仿佛要从石头中跃然而出，这是将神话“可视化”的巅峰之作。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  宝库中的“还愿物墙”： 在圣殿的宝库博物馆里，有一整面墙专门陈列着古老的还愿物。这里没有昂贵的金银，大多是简陋的铅板画、素描，或是一些小巧的个人物品。一幅褪色的画可能描绘着一艘在风暴中幸存的帆船；一个粗糙的士兵身份牌可能代表着从战场归来。每一件物品背后都是一个鲜活的生命和一段绝望中获救的故事。静静浏览这面墙，你会感受到信仰最个人化、最脆弱也最坚韧的一面，这是任何教科书都无法给予的震撼。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  穹顶下的管风琴与声学： 如果幸运，你可能会遇到教堂里奏响巨大的历史管风琴。请一定停下来，抬头闭上眼睛聆听。巴洛克风格的音乐在宏伟的穹顶下回荡、升腾，音符仿佛沿着壁画中天使们的路径一直攀爬到天际。这种空间的混响效果是无与伦比的，声音不再只是听觉，它变成了一种可以触摸的、笼罩全身的物理存在。那一刻，建筑、艺术与音乐合为一体，完成了对神圣空间的终极定义。`}</p>
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  着装与礼仪是第一要务： 这是活跃的朝圣地，不是普通博物馆。无论男女，请务必避免穿着无袖上衣、短裤或短裙。入口处会有工作人员检查，不合规会被要求披上提供的披肩（可能需要小额捐赠）或拒绝进入。进入圣屋神龛内部时，请保持绝对安静，手机静音，不要拍照（外部可以拍）。尊重正在祈祷的人，这是最基本的礼貌。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  巧妙避开人流高峰： 大型朝圣团通常集中在周末上午，特别是宗教节日期间。最佳游览时间是工作日的下午。如果你想参加圣屋内的弥撒，感受氛围，可以提前在官网查好时间。登顶参观（上露台）通常需要参加定时的小型导览团，名额有限，建议一到就先去信息中心预约，避免错过。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  交通与财物安全： 洛雷托小镇不通火车，最近的主要火车站在安科纳或雷卡纳蒂。从那里需要换乘地方巴士（CONTRAM公司线路）或打车。务必提前查好巴士时刻表，下午班次可能较少，错过末班车会很不便。小镇非常安全，但教堂和拥挤的圣屋内部仍是小偷可能利用的地方，背包建议前置，贵重物品贴身放好。`}</p>
            </div>
          </Section>

          <Section title={`6. 洛雷托周边住宿与美食攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`洛雷托本身是个小镇，住宿选择不多但极具特色。强烈推荐住在古镇内的精品酒店或家庭旅馆（B&B），比如由古老修道院改建的酒店，石头墙壁、木质横梁，氛围感拉满。晚上和清晨，当一日游的游客散去，你可以独享古城静谧的街巷和圣殿的夜景，体验会提升好几个等级。如果追求更多选择和便利，也可以住在十几分钟车程外的海滨城市安科纳或文雅小镇雷卡纳蒂，通过公共交通往返。美食方面，一定要在古城里找一家地道餐馆。马尔凯大区的美食被严重低估！推荐尝尝：`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`Vincisgrassi：一种类似千层面的奢华肉酱宽面，芝士浓郁，是本地骄傲。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`Olive all‘ascolana：去核的巨型橄榄塞入肉馅，裹上面包屑油炸，外酥里嫩，必点开胃菜。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当地白葡萄酒：如Verdicchio dei Castelli di Jesi，清爽酸冽，完美搭配海鲜和油炸菜肴。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`广场边的Caffè Centrale是喝咖啡、看街景的好地方。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  雷卡纳蒂（Recanati）： 距离洛雷托仅15分钟车程。这里是浪漫主义诗人贾科莫·莱奥帕尔迪的故乡。你可以参观他的故居博物馆，感受意大利文学的灵魂。小镇本身非常优美，坐落在一座山脊上，有另一个绝佳的观景平台，可以同时眺望亚得里亚海和内陆的群山，视野开阔，与洛雷托的宗教氛围形成有趣的文人气息互补。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  里帕特兰索内（Ripatransone）： 被称为“马尔凯的阳台”，驾车约40分钟。这座中世纪山顶小镇拥有号称“意大利最窄的巷子”（Vicolo più stretto d‘Italia），仅宽38厘米！充满趣味。这里的视野同样壮观，且游客更少，更能体验原汁原味的马尔凯山区小镇风情。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`洛雷托的灵魂，在于那个“包裹”的隐喻：最华美的人类艺术殿堂，小心翼翼地包裹着最朴素、最原始的神圣核心。它告诉我们，信仰或许始于一个简单的传说、一面粗糙的石墙，但人类却用几个世纪的爱、敬畏与才华，为之建造了最辉煌的注解。来这里，你触摸的不是冰冷的历史，而是一代又一代人滚烫的虔诚与希望。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/vicenza-olympic-theater" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维琴察奥林匹克剧院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Teatro Olimpico Vicenza</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/teatro-farnese" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    法
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">法尔内塞剧院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Teatro Farnese</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lucca-old-town-walls" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卢
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卢卡古城墙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lucca Old Town</p>
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
