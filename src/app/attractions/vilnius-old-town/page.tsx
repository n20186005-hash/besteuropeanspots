import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '维尔纽斯老城 Vilnius Old Town｜巴洛克明珠与开放式艺术画廊 - 最佳欧洲景点',
  description: '朋友，想象一下，你在一个微凉的清晨抵达这里。脚下的鹅卵石被露水打得发亮，泛着湿润的深灰色光泽，蜿蜒的小巷像迷宫一样在你面前展开。空气里有种特别的味道——是陈旧木头混合着远处面包房飘来的焦香，还有从无数教堂门扉里渗出的、淡淡的蜡烛和旧书的气味。你抬起头，视线会被无数教堂的尖顶和穹顶切割成不规则的天空，...',
}

export default function VilniusOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '维尔纽斯老城', href: '/attractions/vilnius-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`维尔纽斯老城・Vilnius Old Town・立陶宛・维尔纽斯`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，你在一个微凉的清晨抵达这里。脚下的鹅卵石被露水打得发亮，泛着湿润的深灰色光泽，蜿蜒的小巷像迷宫一样在你面前展开。空气里有种特别的味道——是陈旧木头混合着远处面包房飘来的焦香，还有从无数教堂门扉里渗出的、淡淡的蜡烛和旧书的气味。你抬起头，视线会被无数教堂的尖顶和穹顶切割成不规则的天空，巴洛克式的山墙上，石膏雕刻的天使和圣人在晨曦中仿佛刚刚苏醒。
这里不像一个纯粹的旅游区，它就是维尔纽斯跳动的心脏。你会看到西装革履的年轻人拎着公文包匆匆穿过古老的拱门去上班，老太太提着一篮子鲜花慢悠悠地走向市场，而穿着连帽衫的学生则坐在长椅上，对着笔记本电脑，背后就是一座有六百年历史的砖墙。钟声从不同的方向传来，先是圣约翰教堂清脆的钟鸣，接着是圣凯瑟琳教堂更深沉的回响，它们在空中交织，成为老城永不间断的背景音。这种日常与神圣、历史与当下的无缝交织，是维尔纽斯老城最打动人心的魔力。
而它的核心魅力，在于一种近乎天真的“混搭”美感。你不会看到那种被过度修复、整齐划一的“古镇”。相反，在一栋气派的文艺复兴宫殿旁边，可能就是一栋油漆斑驳、带着苏联时期印记的公寓楼；一条静谧的、挂着复古街灯的小巷尽头，突然会出现一幅占据整面墙壁的现代涂鸦。这种不协调本身，构成了一种强大的生命力，它诚实地展示了这座城市层叠的历史，以及它在创伤与复兴中顽强生存的痕迹。在这里漫步，你不是在参观一个凝固的标本，而是在阅读一本活着的、页码有些混乱却异常精彩的城市日记。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，想象一下，你在一个微凉的清晨抵达这里。脚下的鹅卵石被露水打得发亮，泛着湿润的深灰色光泽，蜿蜒的小巷像迷宫一样在你面前展开。空气里有种特别的味道——是陈旧木头混合着远处面包房飘来的焦香，还有从无数教堂门扉里渗出的、淡淡的蜡烛和旧书的气味。你抬起头，视线会被无数教堂的尖顶和穹顶切割成不规则的天空，巴洛克式的山墙上，石膏雕刻的天使和圣人在晨曦中仿佛刚刚苏醒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里不像一个纯粹的旅游区，它就是维尔纽斯跳动的心脏。你会看到西装革履的年轻人拎着公文包匆匆穿过古老的拱门去上班，老太太提着一篮子鲜花慢悠悠地走向市场，而穿着连帽衫的学生则坐在长椅上，对着笔记本电脑，背后就是一座有六百年历史的砖墙。钟声从不同的方向传来，先是圣约翰教堂清脆的钟鸣，接着是圣凯瑟琳教堂更深沉的回响，它们在空中交织，成为老城永不间断的背景音。这种日常与神圣、历史与当下的无缝交织，是维尔纽斯老城最打动人心的魔力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而它的核心魅力，在于一种近乎天真的“混搭”美感。你不会看到那种被过度修复、整齐划一的“古镇”。相反，在一栋气派的文艺复兴宫殿旁边，可能就是一栋油漆斑驳、带着苏联时期印记的公寓楼；一条静谧的、挂着复古街灯的小巷尽头，突然会出现一幅占据整面墙壁的现代涂鸦。这种不协调本身，构成了一种强大的生命力，它诚实地展示了这座城市层叠的历史，以及它在创伤与复兴中顽强生存的痕迹。在这里漫步，你不是在参观一个凝固的标本，而是在阅读一本活着的、页码有些混乱却异常精彩的城市日记。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`维尔纽斯老城`} />
                <InfoRow label="英文名称" value={`Vilnius Old Town`} />
                <InfoRow label="正式名称" value={`Vilnius Old Town`} />
                <InfoRow label="国家" value={`立陶宛`} />
                <InfoRow label="城市" value={`维尔纽斯`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`欧洲现存规模最大、保存最完好的中世纪古城之一，是立陶宛大公国辉煌历史的活化石与见证者。`} />
                <InfoRow label="建筑特色" value={`一座由鹅卵石小巷、隐秘庭院和超过四十座风格各异的教堂构成的“露天建筑博物馆”，巴洛克风格尤为突出。`} />
                <InfoRow label="建筑风格" value={`哥特式、文艺复兴式、巴洛克式和新古典主义风格完美交融，以娇艳繁复的巴洛克建筑为主导旋律。`} />
                <InfoRow label="文化价值" value={`不仅是立陶宛的国家心脏，更以其悠久的历史包容性，成为多元文化（立陶宛、波兰、犹太、俄罗斯等）共存的永恒象征。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`整个老城区域全天24小时开放，可自由漫步。内部的重要景点（如教堂、博物馆、钟楼等）则有各自的开放时间，通常在上午10点至下午6点之间，周一许多博物馆闭馆。夏季（5月至9月）开放时间普遍延长，冬季可能缩短。重要节假日如圣诞节、复活节期间，开放时间会有较大调整，建议行前在具体景点的官方网站确认。`} />
              <InfoRow label="门票价格" value={`漫步老城街区本身免费。进入个别景点需购票：维尔纽斯大教堂珍宝馆约4欧元，圣安妮教堂免费但欢迎捐赠，登上格迪米纳斯塔楼约5欧元，维尔纽斯大学古典主义院落群通票约5欧元。学生、老年人和儿童通常享有半价优惠。推荐购买“维尔纽斯城市卡”，可无限次乘坐公共交通并免费或优惠进入多数主要景点。`} />
              <InfoRow label="地址" value={`Vilniaus senamiestis, 01143 Vilnius, Lithuania`} />
              <InfoRow label="交通方式" value={`从维尔纽斯国际机场出发：最便捷的方式是搭乘机场巴士88路或3G路，约20分钟直达市中心火车站/汽车站区域，车费约1欧元，班次频繁。从火车站/汽车站区域步行至老城核心区仅需10-15分钟。出租车前往老城费用约为15-20欧元，Uber或本地Bolt应用更实惠。若自驾，老城边缘有多个付费停车场，但强烈不建议开车进入狭窄的老城街道。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事得从一头狼开始讲起。传说中，立陶宛大公格季米纳斯在附近狩猎时，梦见一只身披铁甲的狼站在山丘上嚎叫，声震四方。巫师解梦说，这预示着在此地建城，其声名将远播世界。于是，1323年，格季米纳斯大公在维尔尼亚河和涅里斯河交汇的山丘上修筑城堡，并向德意志商人、手工艺人和修士发出邀请，维尔纽斯由此诞生。这座从一开始就带着开放基因的城市，迅速成为连接东西欧贸易与文化的重要枢纽，立陶宛大公国的荣耀时代就此开启。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时光流转到16世纪，这里迎来了它的“黄金时代”。随着1569年波兰-立陶宛联邦的成立，维尔纽斯不仅是政治中心，更一跃成为整个中东欧的文化与科学重镇。1579年，耶稣会士在此建立了维尔纽斯大学，它是东欧最古老的大学之一，吸引了无数学者。正是在这个时期，巴洛克之风从罗马和西欧吹来，并在这里找到了最狂热的土壤。富有的贵族和教会竞相聘请意大利建筑师，将原本哥特式的城市面貌，一点点改造成我们今天看到的、充满动态曲线、华丽装饰和戏剧性光影的巴洛克杰作。圣彼得和圣保罗教堂就是登峰造极的产物，内部那超过两千尊石膏雕塑，仿佛要将整个天堂的故事都搬进人间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的画卷从不只有金边。随后的几个世纪，维尔纽斯在战火与帝国更迭中浮沉。它先后被沙俄帝国占领，在一战后的短暂独立后，又经历了二战纳粹的残酷统治，以及长达半个世纪的苏联时期。这段灰暗岁月在城市肌体上留下了深刻的伤痕——宏伟的教堂被改为仓库或博物馆，犹太区几乎被彻底抹去，斯大林式的方盒子建筑在老城边缘拔地而起。但立陶宛人守护记忆的方式是沉默而坚韧的，他们尽可能地在巴洛克浮雕下生活，在苏维埃公寓里藏匿圣像，让文化的根脉在冻土下悄然延续。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机出现在1990年。立陶宛在维尔纽斯宣布从苏联独立，老城中心的电视塔成了争夺自由的战场。独立后，这座城市像一位从长眠中醒来的巨人，开始了缓慢而精细的修复。更重要的是，一种新的精神在老城孕育。1997年，艺术家们在老城边缘、破败的乌祖皮斯（对岸共和国）宣布“独立”，成立了拥有自己的国旗、货币（兑换率是1乌祖皮斯元换1个微笑）和宪法的“微国家”。这个带着幽默与叛逆的举动，象征着维尔纽斯灵魂的回归——自由、创意、包容与自嘲。如今，当你漫步其中，看到的不仅是修复一新的巴洛克立面，更是那段从铁狼之梦开始，历经辉煌、磨难，最终在玩笑与艺术中重获新生的、无比丰饶的历史。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正品味维尔纽斯老城的精髓，我建议你留出整整一天时间，并穿上最舒适的那双步行鞋。最佳的游览节奏是从黎明开始，趁着游客大军尚未涌入，体验老城最静谧神圣的时刻；上午专注探索核心的历史与宗教建筑群；下午则留给那些隐秘的庭院、独立艺术区和散漫的咖啡馆时光；傍晚则登上山丘或找到河岸边，看夕阳为这座巴洛克之城镀上金边。这样的安排能让你充分感受它从晨祷到夜生活的完整脉搏，理解它为何既是圣地，又是充满活力的现代家园。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`老城的鹅卵石路面非常美丽但也非常考验鞋子和脚踝，绝对不要为了好看穿高跟鞋或硬底鞋。
许多小咖啡馆和家庭餐厅只接受现金（立特或欧元），逛小巷时记得备一些零钱。
在教堂内请保持安静并遵守拍照规定，有些禁止拍照，有些允许但不允许使用闪光灯。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`天刚蒙蒙亮时，从标志性的“黎明之门”进入老城，在门内小礼拜堂的柔和烛光和圣母像前感受这座城市虔诚的起点。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过门洞径直走向气势恢宏的大教堂广场，在空旷的广场上仰望白色新古典主义立面和独立的钟楼，想象昔日大公在此加冕的盛景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着圣安妮街漫步，让视线被那座由33种不同形状红砖砌成的、蕾丝般精美的哥特式杰作——圣安妮教堂彻底俘获。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拐进书卷气弥漫的圣约翰街，买一张门票潜入维尔纽斯大学建筑群，在中世纪的回廊、巴洛克式的图书馆和无数个静谧的庭院里迷一次路。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从大学区域穿出，来到总统府前宽敞的庭院，如果恰逢卫兵换岗，可以停下来看看这庄重又略带羞涩的仪式。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着皮利斯街继续向东，让热闹的游客商店逐渐被更本地化的画廊和工作室取代，最终抵达充满波西米亚气息的乌祖皮斯区，在“天使”雕塑下许个愿。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在乌祖皮斯的河岸边找张长椅坐下，看对岸老城的屋顶和教堂尖顶在夕阳下连成一片温暖的剪影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当晚霞褪去，循着灯光和音乐声回到老城中心，找一家地窖餐厅，用一碗热腾腾的“cepelinai”（土豆饺子）和一杯当地蜂蜜啤酒结束完美的一天。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`黎明之门内部仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在门洞内侧，抬头拍摄拱顶和小礼拜堂的窗格，将行走的人影作为剪影，能拍出极具纵深感和故事感的宗教氛围画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`三十字架山丘俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，从格迪米纳斯塔楼旁的小径爬上三十字架山丘，用中长焦镜头捕捉老城全景，鳞次栉比的红色屋顶与散落其间的教堂穹顶、尖塔构成绝佳构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣安妮教堂正面仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光斜射时，站在教堂正对面狭窄的街道上，用广角镜头仰拍，让繁复到令人窒息的红砖哥特式立面充满整个画框，展现其“石头交响乐”的极致细节。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`乌祖皮斯桥头拍“天使”`}</h4>
                  <p className="text-sm text-gray-700">{`黄昏蓝调时刻，站在乌祖皮斯一侧的桥头，将桥上的“天使”雕塑作为前景，对焦于后方被灯光点亮的黎明之门和老城建筑，冷暖色调对比极具电影感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`维尔纽斯大学大庭院拱窗`}</h4>
                  <p className="text-sm text-gray-700">{`中午阳光直射庭院时，找到二层的一个拱形窗框，将相机伸出窗外向下拍摄，可以框住下方回廊中行走的学生和老师，形成生动的“画中画”效果。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`老城建筑密集，巷子狭窄，携带一枚定焦镜头（如35mm）比变焦镜头更能让你融入环境，捕捉更自然的瞬间。`}</li>
                <li>• {`拍摄居民和街头艺人时，一个微笑和眼神交流通常能换来更生动的表情，如果对方明显回避，请尊重其隐私。`}</li>
                <li>• {`冬季雪后的老城是摄影天堂，但要做好设备保暖防潮，且白日很短，黄金拍摄时间大约在下午三点到四点之间。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`位置至上之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在市政厅广场附近一栋15世纪建筑改造的公寓里，每天清晨都能独占空无一人的广场，听自己的脚步声在历史中回响。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`文艺灵魂之选`}</h4>
                  <p className="text-sm text-green-800">{`藏身于乌祖皮斯区一栋艺术家经营的精品酒店，每间客房由不同本地艺术家设计，晚上还能溜达去隔壁的独立画廊参加小型展览开幕。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-yellow-800">{`入住由修道院厢房改造的静谧酒店，房间保留着原始的石头墙壁和拱顶，花园与老城墙遗迹相连，仿佛住在博物馆的延伸部分。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端景观之选`}</h4>
                  <p className="text-sm text-purple-800">{`选择老城边缘、涅里斯河畔的高层现代设计酒店，在落地窗前的浴缸里泡个澡，便能将格迪米纳斯塔楼和老城全景尽收眼底。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城中心的许多历史建筑酒店没有电梯，预订时如果行李沉重最好确认这一点或要求低楼层房间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季和圣诞市场期间住宿非常紧俏，价格也高，至少提前两个月预订是明智之举。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`住在乌祖皮斯区晚上非常安静且有特色，但前往老城最核心区域需要步行约15-20分钟或过桥，请根据体力权衡。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开维尔纽斯老城许久后，我发现自己最怀念的，不是某一座具体的教堂，也不是某一张美丽的照片，而是那种走在其中，内心莫名平静和充盈的感觉。它不像一些被精心供奉起来的古城，只供人瞻仰；它更像一位充满智慧的长者，身体上布满沧桑的疤痕，却依然热情地生活着，宽容地接纳着一切新旧事物在自己身上发生。你可以在庄严的教堂里沉思，也可以在搞怪的涂鸦前大笑；可以追溯沉重的历史，也可以享受当下的一杯好咖啡。这种复杂性和包容度，让它显得无比真实，也无比珍贵。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、一切都被简化和标签化的时代，维尔纽斯老城的存在本身就是一个温柔的抵抗。它告诉我们，历史不必是单一的叙事，美丽可以存在于混杂甚至破损之中，而一座城市的灵魂，恰恰在于它能够层叠地承载记忆，并依然为今天的生活和明天的梦想留下空间。来这里，不仅仅是为了看东欧最美的巴洛克，更是为了体验一种生存的韧性、文化的厚度和自由的芬芳。它或许不会用最直接的方式震撼你，却会像那些蜿蜒的小巷一样，悄悄潜入你的记忆，成为你心中一处可以随时回去漫步的、宁静而丰饶的精神故园。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
