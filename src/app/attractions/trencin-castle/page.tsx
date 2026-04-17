import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '特伦钦城堡 Trenčín Castle｜雄踞岩壁俯瞰河谷的中世纪要塞，探寻斯洛伐克的“爱之井”传奇 - 最佳欧洲景点',
  description: '你从特伦钦老城那些色彩柔和的巴洛克建筑间穿行而过，一抬头，它就在那里。特伦钦城堡不像童话里那种尖顶轻盈的宫殿，它是一块从大地里生长出来的、沉甸甸的岩石。巨大的城墙和塔楼，以一种不容置疑的姿态，牢牢抓握住那座孤峰般的石灰岩山体，在瓦赫河上空投下威严的阴影。走近山脚，风从河谷吹来，带着青草和远处森林的湿...',
}

export default function TrencinCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '特伦钦城堡', href: '/attractions/trencin-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`特伦钦城堡・Trenčín Castle・斯洛伐克・特伦钦州，特伦钦市`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你从特伦钦老城那些色彩柔和的巴洛克建筑间穿行而过，一抬头，它就在那里。特伦钦城堡不像童话里那种尖顶轻盈的宫殿，它是一块从大地里生长出来的、沉甸甸的岩石。巨大的城墙和塔楼，以一种不容置疑的姿态，牢牢抓握住那座孤峰般的石灰岩山体，在瓦赫河上空投下威严的阴影。走近山脚，风从河谷吹来，带着青草和远处森林的湿润气息，也隐隐带来高处旗杆上旗帜猎猎作响的声音。
开始沿着之字形的坡道向上攀登，脚下的石板被无数代人的脚步打磨得光滑。路边的野花在石缝间摇曳，偶尔有蝴蝶飞过，这与头顶上那座冷峻石堡形成了奇妙的对比。你会听到自己的呼吸声，还有树林里鸟雀的啁啾。越往上走，城市的喧嚣——电车的叮当声、咖啡馆的细语——就越发遥远，仿佛正在一步步脱离21世纪，退回到一个由石头和钢铁意志构筑的时代。当你终于穿过厚重的拱形门洞，进入第一个庭院，一股混合着古老石材、苔藓和木头的气味扑面而来，那是时间本身的味道。
站在城堡的露天平台上，整座特伦钦城像一幅微缩模型在你脚下铺开。红瓦屋顶连成温柔的波浪，教堂的绿色尖顶点缀其间，瓦赫河像一条银色的缎带缓缓流向远方。此时此刻，你才完全理解这座城堡的意义：它绝非一座孤芳自赏的博物馆，而是数百年来这片土地真正的“主人”和“守护者”。它监视着河谷的贸易路线，庇护着山下的子民，也震慑着远方的来敌。你能感觉到，斯洛伐克厚重历史的心跳，就在这些石墙之间搏动。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你从特伦钦老城那些色彩柔和的巴洛克建筑间穿行而过，一抬头，它就在那里。特伦钦城堡不像童话里那种尖顶轻盈的宫殿，它是一块从大地里生长出来的、沉甸甸的岩石。巨大的城墙和塔楼，以一种不容置疑的姿态，牢牢抓握住那座孤峰般的石灰岩山体，在瓦赫河上空投下威严的阴影。走近山脚，风从河谷吹来，带着青草和远处森林的湿润气息，也隐隐带来高处旗杆上旗帜猎猎作响的声音。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`开始沿着之字形的坡道向上攀登，脚下的石板被无数代人的脚步打磨得光滑。路边的野花在石缝间摇曳，偶尔有蝴蝶飞过，这与头顶上那座冷峻石堡形成了奇妙的对比。你会听到自己的呼吸声，还有树林里鸟雀的啁啾。越往上走，城市的喧嚣——电车的叮当声、咖啡馆的细语——就越发遥远，仿佛正在一步步脱离21世纪，退回到一个由石头和钢铁意志构筑的时代。当你终于穿过厚重的拱形门洞，进入第一个庭院，一股混合着古老石材、苔藓和木头的气味扑面而来，那是时间本身的味道。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`站在城堡的露天平台上，整座特伦钦城像一幅微缩模型在你脚下铺开。红瓦屋顶连成温柔的波浪，教堂的绿色尖顶点缀其间，瓦赫河像一条银色的缎带缓缓流向远方。此时此刻，你才完全理解这座城堡的意义：它绝非一座孤芳自赏的博物馆，而是数百年来这片土地真正的“主人”和“守护者”。它监视着河谷的贸易路线，庇护着山下的子民，也震慑着远方的来敌。你能感觉到，斯洛伐克厚重历史的心跳，就在这些石墙之间搏动。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`特伦钦城堡`} />
                <InfoRow label="英文名称" value={`Trenčín Castle`} />
                <InfoRow label="正式名称" value={`Trenčín Castle`} />
                <InfoRow label="国家" value={`斯洛伐克`} />
                <InfoRow label="城市" value={`特伦钦州，特伦钦市`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`斯洛伐克最重要的城堡之一，见证了中世纪匈牙利王国西北边境的军事、政治与贵族权力更迭。`} />
                <InfoRow label="建筑特色" value={`一座融合了罗马式、哥特式与文艺复兴风格的庞大建筑群，傲然耸立在陡峭的石灰岩悬崖之上，俯瞰整个瓦赫河谷。`} />
                <InfoRow label="建筑风格" value={`主体为哥特式军事与居住建筑，部分塔楼保留罗马式基础，后期添加了文艺复兴式的宫殿细节。`} />
                <InfoRow label="文化价值" value={`不仅是一座防御工事，更是承载了“爱之井”浪漫传说、铭刻着古罗马军团足迹的文化地标，体现了中欧地区多元历史的层叠。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`开放时间随季节变动较大。每年4月及10月：通常为周二至周日，9:00-17:00（最后入场16:00）。5月至9月：每天开放，时间延长至9:00-18:00（最后入场17:00）。11月至次年3月：仅周末开放，时间为10:00-15:00，且主要区域开放，部分建筑可能关闭。具体开放日期和内部宫殿的导览团时间，强烈建议出行前在其官方网站或当地旅游信息中心进行最终确认，冬季天气恶劣时可能临时关闭。`} />
              <InfoRow label="门票价格" value={`门票分为多种组合。基础成人票（包含庭院、城墙、部分展览）约8欧元。包含所有宫殿内部导览的完整通票约12欧元。学生、儿童及老人享有折扣，家庭票通常很划算。城堡下方的旅游局或城堡入口处可直接购票，部分线上平台可预订。`} />
              <InfoRow label="地址" value={`Matúšova ulica 75/19, 911 01 Trenčín, Slovakia`} />
              <InfoRow label="交通方式" value={`最近的国际机场是布拉迪斯拉发机场（BTS）或维也纳机场（VIE）。从布拉迪斯拉发中央火车站乘坐火车至特伦钦火车站是最佳选择，车程约1.5-2小时，班次频繁。从特伦钦火车站出来，城堡就如同明信片一样矗立在你的正前方。步行穿过老城，沿着缓坡向上约15-20分钟即可抵达城堡大门。也可以乘坐当地的公交车到山脚。自驾车可将车停在老城区的停车场，然后步行上山。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`这座城堡的故事，要从岩石本身说起。早在古罗马时代，这块战略要地就被看中了。城堡岩壁上一处著名的罗马铭文，证明了公元179年，第二罗马军团曾在此驻扎，以对抗北方的日耳曼部落。这块石头，是城堡最早的历史胎记。然而，城堡真正的崛起是在大摩拉维亚帝国崩溃之后，大约在11世纪，一座早期的石质堡垒在这里建立，成为匈牙利王国防御西北边境、抵御波西米亚和波兰势力的关键棋子。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡命运的转折点，与一个强大的贵族家族紧密相连——扎波亚家族。13世纪末，他们获得了这块领地，并着手将城堡扩建为一个强大的军事和行政中心。这里最脍炙人口的传说也源于此时：据说，城堡的主人，英俊的骑士佐博尔，俘虏了美丽的土耳其公主法蒂玛。奥斯曼帝国苏丹派出大军兵临城下，要求释放公主。佐博尔提出了一个苛刻的条件：除非苏丹的士兵能在城堡的岩石中凿出一口深井，否则绝不放人。为了心爱的女儿，苏丹的士兵们日以继夜地挖掘。历经三年，泉水终于涌出，法蒂玛获释，有情人终成眷属。这口“爱之井”至今仍在城堡最深处的庭院里，深达80米，诉说着超越战争的浪漫。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了14-16世纪，城堡迎来了它的黄金时代。它被转让给另一位权倾朝野的人物——匈牙利国王拉约什一世的大臣斯提博尔。在他的经营下，城堡不仅加固了防御，更兴建了宏伟的哥特式宫殿，内部装饰华美，从一个纯粹的军事堡垒转变为兼具舒适性的贵族官邸。文艺复兴之风也吹进了这山巅，增添了新的窗户、拱廊和装饰细节。那些年，城堡里举办宴会，回荡着音乐，是王国西北部无可争议的权力与文化的中心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，盛极而衰是历史的规律。17世纪，城堡卷入了反对哈布斯堡王朝的起义，并在战火中严重受损。18世纪初的一场大火更是给予了它致命一击，内部精美的木质结构化为灰烬，宏伟的宫殿沦为废墟。此后数百年，它被遗弃在山顶，任凭风雨侵蚀，只剩下坚固的外墙和塔楼，如同巨兽的骨架，沉默地诉说着昔日的辉煌。直到上世纪50年代，系统的考古研究和修复工作才开始，一点一点地将这个沉睡的巨人唤醒，让它以博物馆的形式，向我们敞开怀抱。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在上午9点左右抵达山脚，此时阳光正好照亮城堡的东侧立面，拍照光线绝佳，且旅游团尚未大批到来。整个深度游览需要预留至少4-5小时，包括上山下山、仔细参观内部展览和悠闲地享受山顶风光。游览节奏宜慢不宜快，先在外部感受其宏伟，再进入内部探究其细节，最后在平台上静坐片刻，让历史的回声与眼前的风景融为一体。这样的安排能让你从宏观到微观，全面体验城堡的每一个魅力层次。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿着绝对舒适的徒步鞋，上下山的石板路和城堡内无数的台阶对脚是巨大考验。内部宫殿参观通常必须参加定时出发的斯洛伐克语或英语导览团，请在山下售票处就问清下一团的时间并提前购票。夏季请带足水和防晒用品，山顶几乎无遮荫处。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从老城广场出发，沿着通往城堡的标识，缓缓走上那条被岁月磨亮的坡道，感受逐渐远离尘嚣的过程。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过低矮的防御外门，进入第一个开阔的骑士庭院，在这里第一次回头俯瞰，看特伦钦老城的屋顶在脚下如画卷般展开。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到并凝视那口传奇的“爱之井”，用手触摸冰凉的井沿，想象数百年前士兵为爱情开凿岩石的叮当声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随导览进入斯提博尔宫殿的核心区域，在空旷而高大的哥特式大厅里，聆听脚步的回声，仰望巨大的壁炉和残存的石刻纹章。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`攀爬狭窄的螺旋石梯，登上最高的瞭望塔，让360度的狂风裹挟着你，将瓦赫河谷与远方白喀尔巴阡山脉的壮丽尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访城堡内的小教堂，在静谧的光线中看祭坛上斑驳的壁画，感受即便在军事堡垒中心，灵魂也需要一个栖息的角落。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在二层的露台咖啡馆稍作停留，点一杯传统的斯洛伐克茶或咖啡，就着无与伦比的风景，翻阅一下刚买的城堡历史画册。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山前，别忘了绕到城堡西侧的城墙边，等待傍晚的夕阳将整个石头建筑染成温暖的蜜糖金色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`瓦赫河对岸的远眺点`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，在河对岸的步行道或公园里，用长焦镜头压缩空间，可以拍到城堡完整倒映在河水中的经典全景，天空布满晚霞时效果最佳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“爱之井”井口俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射井底时，将相机贴近井口边缘向下拍摄，能捕捉到深邃的圆形井壁和底部若隐若现的水光，构成极具几何美感和故事感的画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城堡最高塔楼窗口框景`}</h4>
                  <p className="text-sm text-gray-700">{`登上主塔后，不要只拍外面，利用厚重的石制窗框作为前景，框住窗外远处的田野、城镇或山脉，形成画中有画的强烈层次感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`斯提博尔宫长廊光影`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，当阳光以低角度射入宫殿长廊，会在石板地面投下长长的窗棱影子，站在光影交界处拍摄人物剪影或空镜头，氛围感十足。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`东侧城墙仰角`}</h4>
                  <p className="text-sm text-gray-700">{`清晨从城堡内部靠近东侧城墙的位置，向上仰拍厚重的防御墙体和碉楼，利用蓝天作为背景，突出其雄浑险峻的军事建筑特征。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`城堡内部大部分展览区域禁止使用闪光灯，请务必遵守。使用无人机拍摄需要提前申请特别许可，在斯洛伐克对文化遗产上空飞行管制严格。人物拍摄建议穿着色彩简单的衣物，与古老的石墙背景更搭。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`老城中心经济之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住老城广场旁经过翻新的历史公寓，推开木框窗就能与城堡对望，晚上伴着广场柔和的灯光和咖啡馆的音乐入眠。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`城堡山脚特色酒店`}</h4>
                  <p className="text-sm text-green-800">{`选择直接坐落在城堡山门附近的精品酒店，由老房子改造，内部是现代的舒适，外部是厚重的历史，位置便利到无可附加。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`瓦赫河畔设计旅馆`}</h4>
                  <p className="text-sm text-yellow-800">{`位于河对岸安静区域的一家设计型旅馆，房间拥有直面城堡的落地窗或阳台，清晨在私人空间就能独享城堡从晨雾中苏醒的全程。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`郊外田园庄园体验`}</h4>
                  <p className="text-sm text-purple-800">{`若自驾，不妨选择距离特伦钦约15分钟车程的乡村庄园酒店，住进真正的斯洛伐克乡村，享受田园晚餐后，回望山巅上被灯光点亮的城堡，如童话梦境。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`特伦钦老城区域非常安全且宁静，夜晚散步很舒服。夏季和重要文化节庆期间（如城堡节）住宿非常紧张，务必提前数月预订。选择河对岸住宿需考虑步行过桥到老城约需10-15分钟，但景观回报率极高。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开特伦钦城堡时，你的小腿肌肉会记得那些台阶，你的相机里会存满光影，但最深层的记忆，是那种“重量感”。那不是负面的沉重，而是一种扎实的、让人心安的沉淀。在这个一切皆可虚拟、快速迭代的世界里，你需要触摸一些真正厚重的东西——触摸那些被无数双手砌起、被风雨雕刻了八百年的石头。你会意识到，历史不是教科书上扁平的文字，它是你脚下凹凸不平的石板，是井底传来的幽深回响，是高处狂风刮过耳边的力度。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这个地方教会我，真正的力量往往与孤独并存。城堡雄踞山巅，视野无敌，但也必须承受最先到来的风暴和最刺骨的寒风。它像极了那些守护着传统、记忆与文化认同的所在，在时代的洪流中，固执地锚定在原地，提醒着来来往往的人们：我们从何处来。所以，每一位热爱深度游的旅人，都应该来一次特伦钦。不仅仅是为了一张明信片照片，更是为了让自己站在那块岩石上，让河谷的风吹散些许浮躁，切身地去感受一下，什么叫作“不朽的时光”。在这里，你会找到久违的关于“永恒”的错觉，以及继续前行的、沉静的力量。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/citadelle-de-namur" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    那
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">那慕尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Citadelle de Namur</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/esch-sur-sure-luxembourg" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃施叙尔叙尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Esch-sur-Sûre</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cite-royale-de-loches" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    洛
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">洛什王家古堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Royal Citadel of Loches</p>
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
