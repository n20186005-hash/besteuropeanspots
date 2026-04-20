import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '斯皮什城堡 Spiš Castle｜中欧最大城堡遗址，荒芜山巅的史诗回响 - 最佳欧洲景点',
  description: '第一眼看到斯皮什城堡，你可能会倒吸一口凉气。它不像新天鹅堡那样精致梦幻，而更像一头匍匐在石灰岩山丘上的巨大石兽遗骸，骨骼嶙峋，沉默地向天空伸展。车子还在蜿蜒的乡间小路上，它灰黄色的轮廓就已经占据了整个地平线，那种扑面而来的荒凉与威严，瞬间让你的闲聊停止，心跳漏掉一拍。 把车停在山脚，沿着之字形的小路...',
}

export default function SpisCastleSlovakiaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '斯皮什城堡', href: '/attractions/spis-castle-slovakia' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`斯皮什城堡・Spiš Castle・斯洛伐克・泽拉 (Žehra) 附近`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到斯皮什城堡，你可能会倒吸一口凉气。它不像新天鹅堡那样精致梦幻，而更像一头匍匐在石灰岩山丘上的巨大石兽遗骸，骨骼嶙峋，沉默地向天空伸展。车子还在蜿蜒的乡间小路上，它灰黄色的轮廓就已经占据了整个地平线，那种扑面而来的荒凉与威严，瞬间让你的闲聊停止，心跳漏掉一拍。
把车停在山脚，沿着之字形的小路往上爬。风毫无遮挡地吹过山脊，带着野草和远处农田干燥的气息。耳边只有风声、自己的呼吸声，还有登山杖偶尔敲击碎石的脆响。越靠近，城堡废墟的细节越发清晰——高耸但已没有顶的主塔，绵延不绝的锯齿状城墙，还有无数个黑洞洞的窗口，像失去眼珠的眼眶，凝视着脚下碧绿如棋盘般的斯皮什盆地。你几乎能听到石头在阳光下细微的噼啪声，那是几个世纪的光和热在它身上留下的印记。
当地人管这里叫“我们的山巅守护神”。它虽然早已无人居住，却从未从人们的生活中消失。它的形象出现在邮票、硬币、甚至本地啤酒的标签上。孩子们在这里上历史课，新婚夫妇以它为背景拍摄婚纱照。它是一座“活着的废墟”，荒芜的外表下，依然跳动着地域认同的心脏。最打动人的，正是这种反差：极致的物理性荒废，与极致的精神性存在，在这里达成了奇妙的平衡。你不是在参观一个被精心修复的博物馆，而是在步入一首用石头写成的、关于时间、权力与遗忘的立体长诗。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到斯皮什城堡，你可能会倒吸一口凉气。它不像新天鹅堡那样精致梦幻，而更像一头匍匐在石灰岩山丘上的巨大石兽遗骸，骨骼嶙峋，沉默地向天空伸展。车子还在蜿蜒的乡间小路上，它灰黄色的轮廓就已经占据了整个地平线，那种扑面而来的荒凉与威严，瞬间让你的闲聊停止，心跳漏掉一拍。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`把车停在山脚，沿着之字形的小路往上爬。风毫无遮挡地吹过山脊，带着野草和远处农田干燥的气息。耳边只有风声、自己的呼吸声，还有登山杖偶尔敲击碎石的脆响。越靠近，城堡废墟的细节越发清晰——高耸但已没有顶的主塔，绵延不绝的锯齿状城墙，还有无数个黑洞洞的窗口，像失去眼珠的眼眶，凝视着脚下碧绿如棋盘般的斯皮什盆地。你几乎能听到石头在阳光下细微的噼啪声，那是几个世纪的光和热在它身上留下的印记。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当地人管这里叫“我们的山巅守护神”。它虽然早已无人居住，却从未从人们的生活中消失。它的形象出现在邮票、硬币、甚至本地啤酒的标签上。孩子们在这里上历史课，新婚夫妇以它为背景拍摄婚纱照。它是一座“活着的废墟”，荒芜的外表下，依然跳动着地域认同的心脏。最打动人的，正是这种反差：极致的物理性荒废，与极致的精神性存在，在这里达成了奇妙的平衡。你不是在参观一个被精心修复的博物馆，而是在步入一首用石头写成的、关于时间、权力与遗忘的立体长诗。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`斯皮什城堡`} />
                <InfoRow label="英文名称" value={`Spiš Castle`} />
                <InfoRow label="正式名称" value={`Spišský hrad / Spiš Castle`} />
                <InfoRow label="国家" value={`斯洛伐克`} />
                <InfoRow label="城市" value={`泽拉 (Žehra) 附近`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`斯洛伐克乃至中欧规模最宏大的城堡建筑群遗址，联合国教科文组织世界遗产。`} />
                <InfoRow label="建筑特色" value={`雄踞于石灰岩山巅的庞大防御工事群，融合了罗马式、哥特式与文艺复兴式建筑元素的石头史诗。`} />
                <InfoRow label="建筑风格" value={`以罗马式为基础，历经哥特式扩建与文艺复兴式改造的综合性防御城堡风格。`} />
                <InfoRow label="文化价值" value={`见证了匈牙利王国东部边疆的军事、政治与文化交流，是斯皮什地区历史与民族身份的核心象征。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`开放时间随季节变动。通常四月至十月开放，每天上午9点至下午7点，最后入场时间为关门前一小时。十一月只限周末开放。十二月到次年三月因天气原因及维护，通常关闭。具体日期每年可能微调，出发前务必查阅官网确认。`} />
              <InfoRow label="门票价格" value={`成人票约8欧元，学生及老年人优惠票约6欧元，家庭票（2大2小）约20欧元。部分区域（如博物馆主塔）需单独购票。城堡脚下有免费停车场，但步行上山约需15-20分钟；也可选择付费的接驳车服务。`} />
              <InfoRow label="地址" value={`Spišský hrad, 053 61 Žehra, Slovakia`} />
              <InfoRow label="交通方式" value={`最近的国际机场是波普拉德-塔特拉机场（Poprad-Tatry），距离约40公里。从机场或波普拉德火车站，可以乘坐当地的区域性巴士前往“Spišské Podhradie”小镇（班次约每小时一班，车程约50分钟），下车后需再打车或步行约3公里前往城堡山脚。自驾是最方便的方式，从波普拉德出发沿537号公路行驶，约30分钟即可抵达山脚停车场。火车也可到达Spišské Podhradie站，但班次较少。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`斯皮什城堡的故事，始于12世纪。那时，这片位于匈牙利王国东北边陲的土地，是抵御来自东方侵扰的重要前哨。最初的城堡是简单的罗马式建筑，由当地的斯拉夫贵族建造，但很快就被纳入了匈牙利王国的防御体系。它的地理位置太关键了——扼守着通往波兰和波罗的海的商路，俯瞰着肥沃的斯皮什盆地。可以说，谁控制了这座山丘，谁就捏住了地区的命脉。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡的黄金时代属于几个显赫的贵族家族。从13世纪到15世纪，它像一件珍贵的传家宝，在几个最有权势的家族手中流转。其中，扎波利斯基家族对城堡的塑造最为深刻。正是在他们手中，城堡从一座军事堡垒，演变为一座宏伟的、兼具居住与行政功能的贵族官邸。他们增建了宏伟的宫殿、精致的礼拜堂，引入了哥特式建筑风格。你可以想象，在那个时代，这里不仅是兵营，更是奢华的社交中心，大厅里烛火通明，回荡着音乐与不同语言的交谈声——匈牙利语、德语、斯拉夫语在此交汇，见证了斯皮什地区作为多元文化熔炉的独特历史。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，盛极必衰。17世纪，城堡迎来了它的转折点。一场灾难性的大火席卷了这座木石混合的建筑群。关于起火原因众说纷纭，有的说是雷击，有的说是驻军不慎。大火之后，城堡的主人——强大的恰基家族，做出了一个现实的决定：他们搬下了山，在山脚下更舒适、更易管理的平地上建造了新的庄园。从此，这座雄踞山巅数百年的巨人，被遗弃了。它不再是一个“家”，而彻底变回了一个纯粹的军事哨所，并在不久后，连这最后的军事功能也失去了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`18世纪后期，随着哈布斯堡王朝边境的稳固，城堡完全失去了战略价值，被彻底废弃。接下来的两百年，是自然与人为的双重侵蚀。风雨剥蚀着石墙，当地居民也“就地取材”，从废墟中搬走石块去修建自己的房屋。它缓慢而不可逆转地风化、坍塌，变回了山体的一部分。直到20世纪中期，考古学家和历史学家才重新发现了它的价值，开始了缓慢而持续的保护与修复工作。1993年，斯皮什城堡与附近的斯皮什卡 Kapitula 和泽拉教堂一起，被列入联合国教科文组织世界遗产名录，这头沉睡的石兽，终于以“文化遗产”的身份获得了新生。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`强烈建议预留至少4-5小时给这座庞大的城堡。最佳抵达时间是上午10点前，此时光线柔美，游客较少，且能避开正午最烈的日晒。游览节奏宜慢不宜快，这不是一场竞走，而是一次沉浸式的时空漫步。路线总体上遵循从外到内、由低到高的逻辑：先感受其作为防御工事的宏大体量，再深入核心区域探寻生活痕迹，最后登高望远，将一切尽收眼底。请务必穿着舒适牢固的徒步鞋，带上水和防晒用品，山路和废墟内地面崎岖不平。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡区域几乎没有遮阴处，夏季务必做好防晒，并携带充足饮用水。部分通道和台阶非常陡峭且没有护栏，参观时务必注意脚下安全，看好同行的小孩。山脚和城堡入口处有简易小卖部，但选择有限，建议自备少量零食。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从山脚停车场出发，沿着古老的之字形步道向上攀登，让身体在微微喘息中提前感知城堡居高临下的威严。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过巨大的外堡城门，首先进入视野开阔的第一庭院，在这里驻足片刻，顺时针环视绵延超过四公顷的城墙轮廓。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步入第二庭院，寻找那座保存相对完好的罗马式圆形礼拜堂，触摸它冰冷粗糙的石壁，感受城堡最古老的心跳。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`重点探索中央宫殿的废墟，在空旷的大厅基座和精美的哥特式窗框遗迹间，想象当年贵族宴饮与议事的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`攀爬通往主塔的狭窄石阶，在塔顶的平台上屏住呼吸，迎接360度无死角的震撼全景——斯皮什盆地、小镇与远方的塔特拉山脉尽在脚下。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`不要错过北侧的防御塔楼和城墙步道，从不同的角度回望城堡主体，你会更清晰地理解它多层次、立体化的防御设计。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山前，在城堡西侧的边缘找一块石头坐下，静静地看一场日落，看金色的光芒如何为这片废墟披上最悲壮又最温柔的外衣。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`主塔顶全景机位`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时是最佳时间，光线金黄柔和，面向西侧可以拍到城堡长长的影子投在丘陵上，面向东则能捕捉到盆地田野的丰富细节。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从外堡城墙仰拍主塔`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点左右，阳光能照亮主塔东侧，站在第一庭院靠近外城墙的位置，用广角镜头将残破高耸的主塔与天空一同纳入构图，突出其苍凉感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圆形礼拜堂内部框架`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光会从高处的小窗直射入礼拜堂内部，此时拍摄石砌拱门与光柱形成的几何明暗对比，极具神圣与岁月感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城堡远眺点`}</h4>
                  <p className="text-sm text-gray-700">{`在前往城堡的537号公路某个转弯处（有明显停车区），使用长焦镜头在清晨有薄雾时拍摄，能获得城堡如海市蜃楼般悬浮于山巅的经典画面。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`无人机飞行在城堡上空有严格限制，需提前申请许可，否则可能被罚款。室内博物馆区域通常禁止使用闪光灯和三脚架，以保护文物。尊重当地风俗，避免在不恰当的遗迹位置（如祭坛遗迹）拍摄轻佻的人像照片。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`性价比之选`}</h4>
                  <p className="text-sm text-blue-800">{`斯皮什波德格拉杰小镇上的家庭旅馆，房间干净温馨，主人会热情地为你手绘周边徒步地图，并推荐镇上最地道的烤肉店。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`入住城堡山脚下由传统农舍改造的石屋民宿，夜晚异常静谧，抬头便是星空下的城堡剪影，清晨在鸡鸣与教堂钟声中醒来。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`返回波普拉德，选择塔特拉山脚下的四星级温泉酒店，在徒步劳累一天后，用富含矿物质的温泉水舒缓身心，远眺雪山的晚餐更是无可挑剔。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`斯皮什波德格拉杰小镇住宿非常有限，尤其在夏季旺季，务必提前数月预订。山区夜晚降温明显，即使夏季也需准备一件外套。小镇治安极好，民风淳朴。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开斯皮什城堡时，我背包里好像装满了石头——不是实物，而是那种沉甸甸的、关于时间的质感。它教会我的，是一种关于“终结”的美学。我们习惯了看完美的东西，看被精心维护、功能齐全的历史。但斯皮什城堡恰恰以其不完美、以其坦然展示的衰败，给予我们更深的震撼。它没有被强行修复成原来的样子，它被允许老去，被允许以废墟的形式存在，而这反而让它更真实、更有力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、恐惧废弃的快节奏世界里，这样一座城堡就像一个巨大的隐喻。它提醒我们，一切繁华终将归于寂静，所有权力都会风化，而最持久的，可能是石头本身，以及它见证过的故事。来这里，不是为了收集一张打卡照片，而是为了体验一种辽阔的荒芜感，让山巅的风吹走内心的琐碎。你会带着一种奇怪的平静离开——知道了有些事物可以如此巨大，又如此安静地存在于时间的长河中，我们自己的那点烦恼，似乎也变得可以承受了。这，或许就是废墟给予现代旅人最珍贵的礼物。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
              <a href="/attractions/banska-stiavnica" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    班
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">班斯卡-什佳夫尼察</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Banská Štiavnica</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/old-town-presov" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普雷绍夫老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Old Town of Prešov</p>
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
