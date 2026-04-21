import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '施瓦岑贝格 Schwarzenberg｜探访厄尔士山脉的隐秘王冠与那21天的自由传奇 - 最佳欧洲景点',
  description: '车子在厄尔士山脉郁郁葱葱的森林与河谷间盘旋，当你以为这只是一次寻常的德国山区之旅时，一片密集的红色屋顶突然从山脊后涌出，而最夺目的，是那座仿佛从巨大花岗岩瘤上直接生长出来的、有着奶油色墙壁和深色斜坡屋顶的城堡。施瓦岑贝格，这个名字意为“黑色山脉”，给你的第一印象却是一种明亮的宁静。把车停在老城边缘，',
}

export default function SchwarzenbergSaxonyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '德国', href: '/destinations/europe' },
            { label: '施瓦岑贝格', href: '/destinations/europe' },
            { label: '施瓦岑贝格', href: '/attractions/schwarzenberg-saxony' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`施瓦岑贝格・Schwarzenberg・德国・施瓦岑贝格`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在厄尔士山脉郁郁葱葱的森林与河谷间盘旋，当你以为这只是一次寻常的德国山区之旅时，一片密集的红色屋顶突然从山脊后涌出，而最夺目的，是那座仿佛从巨大花岗岩瘤上直接生长出来的、有着奶油色墙壁和深色斜坡屋顶的城堡。施瓦岑贝格，这个名字意为“黑色山脉”，给你的第一印象却是一种明亮的宁静。把车停在老城边缘，步行穿过安静的街巷，空气里有湿润的木头和刚刚割过的青草味道，混合着从某扇窗户里飘出的、淡淡的咖啡香。
走到集市广场，时间仿佛慢了下来。当地老人坐在长椅上晒太阳，脚边放着编织篮。广场中央的文艺复兴式喷泉发出潺潺水声，那是这里几个世纪以来的背景音。抬起头，你的视线无法不被那座山巅城堡所牵引。它不像新天鹅堡那样童话，也不像海德堡那样悲壮，它有一种朴素的、坚毅的存在感，仿佛一个沉默的守护者，看着脚下的城镇经历了无数个春夏秋冬。而紧挨着它山腰的，是圣乔治教堂细长的尖塔，与城堡的塔楼一高一低，构成了绝妙而和谐的二重奏。这种建筑与自然岩石浑然一体的画面，是任何明信片都无法完全传递的、属于此地的独家灵魂。
你会发现，这座小镇的核心魅力，远不止于这如画的风景。和当地人聊上几句，或者在城堡博物馆里多待一会儿，你就会触碰到一段温热的历史。1945年春天，就在这里，发生了一件近乎童话又无比真实的事情：在纳粹政权垮台、盟军和苏军都尚未抵达的“空窗期”，这里的居民自发成立了政府，让小镇奇迹般地独立了21天。这段被称为“施瓦岑贝格自由共和国”的历史，像一颗被精心保存在琥珀里的火花，让这座山城在厚重的矿业历史之外，多了一层关于勇气、自治与和平的独特光芒。行走在石板路上，你感觉脚下踩着的不仅是石头，还有一段关于普通人如何把握自己命运的、轻盈而珍贵的记忆。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子在厄尔士山脉郁郁葱葱的森林与河谷间盘旋，当你以为这只是一次寻常的德国山区之旅时，一片密集的红色屋顶突然从山脊后涌出，而最夺目的，是那座仿佛从巨大花岗岩瘤上直接生长出来的、有着奶油色墙壁和深色斜坡屋顶的城堡。施瓦岑贝格，这个名字意为“黑色山脉”，给你的第一印象却是一种明亮的宁静。把车停在老城边缘，步行穿过安静的街巷，空气里有湿润的木头和刚刚割过的青草味道，混合着从某扇窗户里飘出的、淡淡的咖啡香。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走到集市广场，时间仿佛慢了下来。当地老人坐在长椅上晒太阳，脚边放着编织篮。广场中央的文艺复兴式喷泉发出潺潺水声，那是这里几个世纪以来的背景音。抬起头，你的视线无法不被那座山巅城堡所牵引。它不像新天鹅堡那样童话，也不像海德堡那样悲壮，它有一种朴素的、坚毅的存在感，仿佛一个沉默的守护者，看着脚下的城镇经历了无数个春夏秋冬。而紧挨着它山腰的，是圣乔治教堂细长的尖塔，与城堡的塔楼一高一低，构成了绝妙而和谐的二重奏。这种建筑与自然岩石浑然一体的画面，是任何明信片都无法完全传递的、属于此地的独家灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你会发现，这座小镇的核心魅力，远不止于这如画的风景。和当地人聊上几句，或者在城堡博物馆里多待一会儿，你就会触碰到一段温热的历史。1945年春天，就在这里，发生了一件近乎童话又无比真实的事情：在纳粹政权垮台、盟军和苏军都尚未抵达的“空窗期”，这里的居民自发成立了政府，让小镇奇迹般地独立了21天。这段被称为“施瓦岑贝格自由共和国”的历史，像一颗被精心保存在琥珀里的火花，让这座山城在厚重的矿业历史之外，多了一层关于勇气、自治与和平的独特光芒。行走在石板路上，你感觉脚下踩着的不仅是石头，还有一段关于普通人如何把握自己命运的、轻盈而珍贵的记忆。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`施瓦岑贝格`} />
                <InfoRow label="英文名称" value={`Schwarzenberg`} />
                <InfoRow label="正式名称" value={`Schwarzenberg`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`施瓦岑贝格`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座在二战后因政治真空而意外诞生的、仅存续了21天的“自由共和国”，使其在德国现代史上留下了独一无二的传奇印记。`} />
                <InfoRow label="建筑特色" value={`文艺复兴风格的城堡雄踞于突兀的花岗岩山巅，与山腰的晚期哥特式教堂共同勾勒出厄尔士山脉最具代表性的天际线剪影。`} />
                <InfoRow label="建筑风格" value={`城堡主体为文艺复兴风格，后经多次修缮融合了巴洛克等元素；圣乔治教堂则是精美的萨克森晚期哥特式建筑典范。`} />
                <InfoRow label="文化价值" value={`不仅是厄尔士山脉矿业与手工业历史的见证者，更因那段短暂而勇敢的“自由插曲”，成为了欧洲平民自治与和平过渡的精神象征。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`施瓦岑贝格城堡博物馆开放时间：通常为周二至周日，上午10点至下午5点，冬季（11月至3月）可能缩短至下午4点闭馆或部分区域关闭，周一闭馆（节假日除外）。圣乔治教堂的开放时间较为灵活，通常在白天对游客开放，但举行礼拜时会暂时关闭参观。建议出行前通过当地旅游局官网核查最新时间，山区天气变化也可能影响开放。`} />
              <InfoRow label="门票价格" value={`施瓦岑贝格城堡博物馆门票：成人票价约6欧元，优惠票（学生、残疾人、团体）约4欧元，家庭票（2成人+最多4名儿童）约12欧元。6岁以下儿童免费。圣乔治教堂参观免费，但欢迎自愿捐赠以支持教堂维护。部分特展或城堡内的特别活动可能额外收费。`} />
              <InfoRow label="地址" value={`Schlossberg 1, 08340 Schwarzenberg, Germany`} />
              <InfoRow label="交通方式" value={`最近的国际机场是德累斯顿机场（DRS）。从德累斯顿主火车站（Dresden Hauptbahnhof）出发，乘坐区域列车（RE或RB线）前往茨维考（Zwickau），车程约1小时15分钟，班次每小时1-2班。在茨维考换乘前往施瓦岑贝格（Schwarzenberg）的支线火车或公交车，火车车程约30分钟，班次较疏，建议提前查询时刻表。更为灵活的方式是从茨维考或开姆尼茨（Chemnitz）租车自驾，沿B101公路行驶，约40-50分钟即可抵达这座山城。镇上景点集中，步行即可游览。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "施瓦岑贝格的故事，始于大地深处的财富。大约12世纪，人们在这片黑色的山脉（“Schwarzenberg”的字面意思）中发现了丰富的锡、铁和银矿脉。矿工和炼铁匠们沿着施瓦茨河定居下来，小镇的命运从此与叮当作响的矿石和炽热的炉火紧密相连。那座后来成为地标的城堡，最初在12世纪晚期被提及，它建立在陡峭的花岗岩山上，最初是为了保护这些珍贵的矿区和贸易路线。在接下来的几个世纪里，它先后属于不同的贵族领主，包括著名的舍恩堡家族，并在16世纪被改建为我们今天看到的文艺复兴风格宫殿，从一个军事要塞转变为舒适的领主居所。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，让施瓦岑贝格真正被历史铭记的，并非这些寻常的贵族更迭。时针拨到1945年4月，第二次世界大战已近尾声。纳粹德国政权土崩瓦解，美军从西边推进，苏联红军从东边逼近。而施瓦岑贝格，由于地处厄尔士山脉的复杂地形中，成了一个奇特的“盲区”。纳粹地方官员逃跑了，而盟军和苏军因为划定的占领区界线（就在附近）而都暂时没有进入。小镇突然发现自己处于一个权力的真空之中。就在这时，一群普通的市民站了出来，其中包括反法西斯主义者、社民党人、甚至一些前纳粹党员（为了自保）。他们组成了一个“反法西斯委员会”，在4月11日，几乎是平静地接管了市政厅。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，历史上最奇特的“国家”之一诞生了——“施瓦岑贝格自由共和国”。没有枪声，没有流血，市民们自发组织起来维持秩序，恢复水电供应，分发食物，甚至出版了自己的公报。一位名叫埃里希·施伦普的技工成为了领导人。在整整21天里，这座小山城像一个世外桃源，享受着战火中难以置信的和平与自治。它像一个短暂的梦，证明了即使在没有上级指令的极端情况下，社区自治与人性的秩序依然可以运作。直到5月初，根据雅尔塔协议，苏军正式接管了这个属于未来东德（苏占区）的区域，“共和国”才平静地解散，没有遭到报复。这段历史长期被东西德官方刻意淡化，直到两德统一后才被重新发掘和纪念。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战后，施瓦岑贝格随整个地区并入东德。城堡曾被用作青年旅舍和学校，一度略显破败。但小镇的工业基础，特别是传统的金属加工和玩具制造业，仍在持续。两德统一后，随着人口流失和产业转型，小镇经历了阵痛，但也因此保留了更多原汁原味的历史风貌，没有受到过度商业开发的侵蚀。1990年代起，当地开始精心修复城堡建筑群，将其变为了一座出色的地区博物馆。而那段“21天自由”的历史，也从尘封中走出，成为小镇最独特的精神遗产。今天，你看到的不仅是一个风景如画的山区古镇，更是一个承载了欧洲近代史复杂缩影、并闪烁着人性自主光辉的独特地点。岩石上的城堡是它的王冠，而那段短暂的自由岁月，则是王冠上最不可复制的宝石。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味施瓦岑贝格，建议安排一整天的时间，并在这里住上一晚，感受入夜后山城的宁静与清晨的薄雾。最佳抵达时间是上午九点左右，先沉浸于老城的日常生活氛围，然后上山探访城堡与教堂的核心历史区，下午深入博物馆了解细节，傍晚时分则留给一个俯瞰全景的浪漫时刻。这样的节奏张弛有度，既能全面探索，又能留有足够空间去感受和想象。请务必穿一双舒适耐走的鞋，因为上下城堡山路是石板坡道，颇具挑战但也充满乐趣。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周日和德国法定假日，大部分商店和餐厅会关门，但咖啡馆和博物馆通常开放，请提前规划用餐。
上山下山的小路在雨后或冬季可能湿滑结冰，务必注意脚下安全，尤其拍照时不要后退得太忘我。
小镇旅游信息中心就在集市广场边上，可以免费领取详细的地图，工作人员英语很好且非常乐于讲述本地故事。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从集市广场的文艺复兴喷泉开始，感受小镇跳动的心脏，看当地人在周三或周六的早市上采购新鲜奶酪和鲜花。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着有明显坡度的“城堡路”向上攀登，用手触摸路边那些被岁月磨得光滑的古老花岗岩护墙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先踏入位于城堡山腰的圣乔治教堂，让眼睛适应内部的幽暗，然后寻找那精美的网状拱顶和古老的木制祭坛。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂侧门走出，继续向上，穿过古老的城堡门洞，眼前豁然开朗，城堡建筑群环绕的宁静庭院就在眼前。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城堡博物馆里花上两小时，不仅要看矿石和武器，更要细细阅读关于1945年那“21天自由共和国”的珍贵文献和照片。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡最高的露台凭栏远眺，目之所及是厄尔士山脉绵延不绝的深绿色林海和红色屋顶的海洋。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后钻进广场边一家名为“Ratsschänke”的老牌酒馆，点一份地道的萨克森土豆汤和一杯本地黑啤酒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`趁黄昏光线最柔和时，步行到小镇西侧的“王子观景台”，回望整个施瓦岑贝格——城堡、教堂和万家灯火在暮色中渐次亮起。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡庭院东侧拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`下午三点后的斜阳会将石柱的长影投射在墙面上，利用拱门作为画框拍摄教堂尖塔，构图极具纵深感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣乔治教堂内部中殿`}</h4>
                  <p className="text-sm text-gray-700">{`避开正午强光，选择多云天气的上午，柔和的天光从侧窗洒入，能完美捕捉到网状拱顶那如蕾丝般精细的石雕质感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`集市广场向城堡仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨太阳刚升起或傍晚华灯初上时，以广场上古老的市政厅建筑为前景，将目光引向山顶被金色光线勾勒的城堡轮廓。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`“王子观景台”全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时抵达，使用中长焦镜头压缩空间，可以将山巅城堡、山腰教堂和老城屋顶层层叠叠的层次感表现得淋漓尽致。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在教堂内部拍照请务必关闭闪光灯，保持绝对安静，尊重正在祈祷的信徒。`}</li>
                <li>• {`使用无人机拍摄前，必须查询当地法规，城堡和教堂上空通常属于禁飞区，最佳全景其实从“王子观景台”用相机就能完美获得。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济之选`}</h4>
                  <p className="text-sm text-blue-800">{`“Am Schlossberg”家庭旅馆，房间虽简朴但一尘不染，老板娘会为你准备丰盛的萨克森式早餐篮，并热情分享只有本地人才知道的徒步小径。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`由一栋19世纪老宅改造的“Gasthof Schwarzenberg”酒店，木梁结构和复古家具韵味十足，其餐厅的烤鹿肉是厄尔士山脉的招牌美味。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车15分钟前往附近安静村庄的“Berg- & Schlosshotel”，这是一座建于1900年的优雅别墅，拥有能看到森林全景的温泉露台，是徒步归来后放松身心的完美绿洲。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "老城内的住宿非常紧俏，尤其是夏季和圣诞市场期间，建议至少提前两个月预订。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇治安极好，夜晚非常安静，可以放心地在星空下散步，但山区夜晚温差大，记得带件外套。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开施瓦岑贝格许久后，脑海中挥之不去的，不是某一张具体的明信片风景，而是一种感觉。那是一种厚重的历史与轻盈的自由奇迹交织在一起的复杂滋味。这座小镇用它岩石般沉默的城堡和教堂尖塔，讲述着几个世纪的矿业辛劳与贵族变迁，那是欧洲大地深沉的底色。而它同时，又用1945年春天那21个不可思议的日夜，向世界轻声证明：即使在最混乱的夹缝中，普通人对于秩序、和平与自我管理的渴望，也能如石缝中的野花般倔强绽放。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当今这个标签化、快节奏的旅行时代，施瓦岑贝格提供了一种截然不同的深度。它不迎合，不喧嚣，只是静静地伫立在山巅，等待那些愿意多走一段山路、多读一段历史的旅人。来这里，你不是为了打卡，而是为了完成一次小小的历史侦探，一次对人性中闪光时刻的致敬。当你最终站在观景台上，看着夜幕降临，城堡的灯火温暖地亮起，与山下民居的点点星光连成一片，你会明白，有些地方的美，在于它的故事让你相信，无论时代如何动荡，生活中总有一些坚守的宁静，和破土而出的、关于自由的微光。这正是深度旅行最珍贵的收获——带走一个故事，留下一份敬意。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/gorlitz-old-town-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格尔利茨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Görlitz Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/schloss-weissenstein-pommersfelden" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    魏
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">魏森施泰因宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Schloss Weißenstein (Pommersfelden)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/wolfenbuettel" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沃尔芬比特尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Wolfenbüttel</p>
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
