import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '日利纳老城 Zilina Old Town｜漫步在中欧独一无二的“双层柱廊”广场，聆听瓦赫河畔的古老回音 - 最佳欧洲景点',
  description: '说实话，在踏进日利纳老城之前，我对这座斯洛伐克“北方门户”的想象，仅限于地图上一个交通枢纽的名字。然而，当我从喧闹的现代街道拐进那条狭窄的入口，眼前豁然开朗的瞬间，我被一种奇特的宁静击中了。那不是一个惊艳的、让你屏住呼吸的场面，而是一种沉稳的、被时光浸透的包容感。首先包裹你的是气味——石板缝里雨后青',
}

export default function ZilinaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '日利纳老城', href: '/attractions/zilina-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`日利纳老城・Zilina Old Town・斯洛伐克・日利纳`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，在踏进日利纳老城之前，我对这座斯洛伐克“北方门户”的想象，仅限于地图上一个交通枢纽的名字。然而，当我从喧闹的现代街道拐进那条狭窄的入口，眼前豁然开朗的瞬间，我被一种奇特的宁静击中了。那不是一个惊艳的、让你屏住呼吸的场面，而是一种沉稳的、被时光浸透的包容感。首先包裹你的是气味——石板缝里雨后青苔的湿润土腥味，混合着从某家老咖啡馆飘出的现磨咖啡豆醇香，还有远处面包店刚出炉的“洛肯奇”面包那种带着焦糖味的暖意。
然后，你的视线才会慢慢聚焦在眼前的奇迹上：玛丽亚广场。它不像那些拥挤的欧洲大广场那样张扬，而是一个规整、开阔的矩形。但真正让它与众不同的，是环绕四周的那一圈双层拱廊。对，两层！底层是粗壮敦实的石柱，撑起一条宽阔的步行廊道，当地人正不紧不慢地穿行，遛狗、买菜、闲聊。而在这之上，竟然还有一层轻盈许多的拱廊，像给广场戴上了一顶精致的石头冠冕。阳光透过两层拱廊，在地上投下复杂而富有韵律的光影迷宫，明明暗暗，仿佛在石板地上演奏着一首无声的复调音乐。
你很快会发现，这座广场是活的。它不是博物馆里的标本。早上，这里是热闹的集市，农夫们摆出新鲜的蘑菇和奶酪；午后，拱廊下的咖啡座坐满了晒太阳的老人，他们的斯洛伐语对话像温柔的背景音；傍晚，年轻人会聚集在广场中央的巴洛克瘟疫纪念柱下，那尊金光闪闪的圣母像在暮色中温柔俯视。这里没有汹涌的人潮，有的是小城自己的呼吸与心跳。哥特式的圣三一教堂钟楼定时敲响，钟声浑厚，在瓦赫河河谷间回荡，每一次敲击都像是在确认：时间在这里，走得格外庄重而耐心。
最打动我的，正是这种“日常的崇高”。那些宏伟的双层拱廊，几个世纪前是为商人遮风挡雨的交易场所，今天依然是人们遮阳避雨的日常通道。历史没有被供起来，它就是你脚下略微磨光的石板，是手边被无数代人依靠过的冰凉石柱。日利纳老城像一个低调而博学的长者，不急于炫耀，但只要你愿意停下脚步，细细阅读它立面上的每一道石刻、每一扇彩窗，它就会向你展开一部关于中欧小城生存、贸易、信仰与社区精神的厚重之书。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "说实话，在踏进日利纳老城之前，我对这座斯洛伐克“北方门户”的想象，仅限于地图上一个交通枢纽的名字。然而，当我从喧闹的现代街道拐进那条狭窄的入口，眼前豁然开朗的瞬间，我被一种奇特的宁静击中了。那不是一个惊艳的、让你屏住呼吸的场面，而是一种沉稳的、被时光浸透的包容感。首先包裹你的是气味——石板缝里雨后青苔的湿润土腥味，混合着从某家老咖啡馆飘出的现磨咖啡豆醇香，还有远处面包店刚出炉的“洛肯奇”面包那种带着焦糖味的暖意。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然后，你的视线才会慢慢聚焦在眼前的奇迹上：玛丽亚广场。它不像那些拥挤的欧洲大广场那样张扬，而是一个规整、开阔的矩形。但真正让它与众不同的，是环绕四周的那一圈双层拱廊。对，两层！底层是粗壮敦实的石柱，撑起一条宽阔的步行廊道，当地人正不紧不慢地穿行，遛狗、买菜、闲聊。而在这之上，竟然还有一层轻盈许多的拱廊，像给广场戴上了一顶精致的石头冠冕。阳光透过两层拱廊，在地上投下复杂而富有韵律的光影迷宫，明明暗暗，仿佛在石板地上演奏着一首无声的复调音乐。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你很快会发现，这座广场是活的。它不是博物馆里的标本。早上，这里是热闹的集市，农夫们摆出新鲜的蘑菇和奶酪；午后，拱廊下的咖啡座坐满了晒太阳的老人，他们的斯洛伐语对话像温柔的背景音；傍晚，年轻人会聚集在广场中央的巴洛克瘟疫纪念柱下，那尊金光闪闪的圣母像在暮色中温柔俯视。这里没有汹涌的人潮，有的是小城自己的呼吸与心跳。哥特式的圣三一教堂钟楼定时敲响，钟声浑厚，在瓦赫河河谷间回荡，每一次敲击都像是在确认：时间在这里，走得格外庄重而耐心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动我的，正是这种“日常的崇高”。那些宏伟的双层拱廊，几个世纪前是为商人遮风挡雨的交易场所，今天依然是人们遮阳避雨的日常通道。历史没有被供起来，它就是你脚下略微磨光的石板，是手边被无数代人依靠过的冰凉石柱。日利纳老城像一个低调而博学的长者，不急于炫耀，但只要你愿意停下脚步，细细阅读它立面上的每一道石刻、每一扇彩窗，它就会向你展开一部关于中欧小城生存、贸易、信仰与社区精神的厚重之书。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`日利纳老城`} />
                <InfoRow label="英文名称" value={`Zilina Old Town`} />
                <InfoRow label="正式名称" value={`Zilina Old Town`} />
                <InfoRow label="国家" value={`斯洛伐克`} />
                <InfoRow label="城市" value={`日利纳`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`斯洛伐克西北部的历史、贸易与行政中心，以1381年授予的《日利纳特权》法典闻名，是中欧城市自治的早期典范。`} />
                <InfoRow label="建筑特色" value={`拥有中欧罕见、斯洛伐克独一无二的双层连拱柱廊环绕的矩形主广场，形成宛如“露天宫殿”般的宏伟廊道空间。`} />
                <InfoRow label="建筑风格" value={`以哥特式为基础，历经文艺复兴与巴洛克风格的叠加与改造，形成和谐而层次丰富的城市肌理。`} />
                <InfoRow label="文化价值" value={`瓦赫河畔的“金十字路口”，见证了匈牙利王国时期的贸易繁荣、犹太社区的兴衰、以及斯洛伐克近代工业化与民族意识的觉醒。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`公共广场区域全天24小时开放。主要历史建筑（如圣三一教堂、布拉蒂斯拉瓦塔）内部开放时间通常为周二至周日 10:00 - 17:00（冬季可能缩短至16:00），周一闭馆。市政厅游客信息中心开放时间为工作日 9:00-17:00，周六 10:00-14:00。圣诞节、复活节等主要节假日，开放时间会有较大调整。`} />
              <InfoRow label="门票价格" value={`进入玛丽亚广场及福拉广场等公共区域免费。登上市政厅塔楼或参观小型博物馆展览门票约2-3欧元。圣三一教堂参观免费，但鼓励捐赠以维护古迹。学生、老人及团体通常有优惠。`} />
              <InfoRow label="地址" value={`斯洛伐克日利纳州日利纳市，010 01`} />
              <InfoRow label="交通方式" value={`从布拉迪斯拉发（Bratislava）或维也纳（Vienna）乘坐火车是最佳选择。从布拉迪斯拉发中央火车站出发，乘坐直达城际列车（InterCity），约2小时15分钟即可抵达日利纳主火车站，班次频繁，每小时至少一班。从日利纳火车站步行至老城玛丽亚广场仅需10-15分钟，一路下坡，非常轻松。若自驾，可将车停在老城边缘的公共停车场（如Centrum停车场），老城核心区为步行区。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "日利纳的故事，要从一条河和一条路讲起。瓦赫河如同一条银色的动脉，自古就从喀尔巴阡山脉的怀抱中奔流而出，而日利纳正好坐落在河谷开阔处，成为连接匈牙利平原与波兰、波西米亚山地的天然十字路口。早在13世纪，德国移民受匈牙利国王邀请来此定居，奠定了这座城市的初始格局。但真正赋予它灵魂的，是1381年。那一年，国王路易一世授予日利纳一份特殊的文件——《日利纳特权》。这份法律章程详细规定了市民的权利、自治法庭的运作和贸易规则，它像一颗种子，让城市自治和法治精神在这片土地上深深扎根。你可以想象，中世纪商人们如何手持这份特权文书，信心满满地在市场上进行交易，日利纳因此迅速繁荣，成为上匈牙利地区举足轻重的贸易中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "到了16世纪，财富的积累需要被看见、被彰显。于是，我们今天所见的城市核心——玛丽亚广场开始大规模重建。1520年的一场大火烧毁了大量木结构房屋，反而给了城市一个“升级”的机会。商人们竞相建造更坚固、更华丽的石屋，并且达成了一个惊人的共识：在自家门前统一建造拱廊。这不是国王的命令，而是市民社会的自发选择。最初的单层拱廊已经足够实用，但到了17世纪，一种近乎奢侈的集体审美诞生了：为什么不建两层？于是，文艺复兴的风潮带来了第二层更纤细、更具装饰性的拱廊。这不仅是美观，更是实力的象征——它意味着广场周边的每一户商家都财力雄厚，且愿意为公共空间的壮丽贡献力量。这种整齐划一又充满细节的建筑语言，让日利纳广场在当时的中欧独树一帜。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "18世纪是巴洛克的时代，情感需要宣泄。在广场中央，一座精美的圣母柱拔地而起，那是市民们对度过一场可怕瘟疫的感恩。与此同时，老城边缘的圣彼得保罗教堂被赋予华丽炫目的内部装饰，金色的灰泥雕塑仿佛要挣脱墙壁，直冲天国。然而，历史的旋律总是多声部的。几乎在同一时期，在福拉广场（另一个迷人的小广场）周边，一个繁荣的犹太社区悄然成长。他们建立了犹太会堂、学校和商店，形成了活跃的知识与商业生活。日利纳的包容性体现在此：天主教、路德教和犹太教社区在城墙内相对和谐地共存，每种信仰都在城市肌理上留下了自己的印记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "19世纪的工业革命蒸汽机轰鸣着改变了城市的天际线。日利纳成为斯洛伐克工业化的先驱，特别是纺织和机械工业。瓦赫河畔建起了工厂，铁路线穿城而过。老城似乎一度被遗忘在喧嚣的现代发展之外，但这某种程度上保护了它。两次世界大战的动荡，特别是二战期间犹太社区遭受的毁灭性打击，给城市留下了深深的伤痕。那些空置的房屋、沉默的会堂，都是无声的讲述者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "进入现代，当日利纳作为独立的斯洛伐克共和国的重要城市重新出发时，人们回过头，无比珍视地发现了老城这颗蒙尘的宝石。精心的修复工作持续了数十年，不是将它变成僵死的博物馆，而是小心翼翼地恢复其结构，注入新的生活功能。今天，你看到的不仅是保存完好的建筑群，更是一个社区在数百年动荡中顽强生存、不断适应、并始终努力保持尊严与美的动人故事。每一块石头，都记得。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在上午9点左右抵达玛丽亚广场，这时晨雾刚散，阳光正好斜射进拱廊，光影效果绝佳，游客也尚未到来。整体游览可以悠闲地进行，耗时约5-6小时，涵盖老城核心与周边精髓。路线设计为从心脏地带（玛丽亚广场）向外涟漪式扩散，先感受宏大的广场空间与地标建筑，再钻入小巷探寻隐秘的细节和副广场，最后登高望远或深入一座标志性教堂内部，完成从宏观到微观、再从微观回到宏观的完整体验。节奏宜慢，多留时间坐在拱廊下发呆、观察。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周六上午广场有热闹的农贸市场，是体验本地生活的好时机，但人流较多。穿着舒适的步行鞋至关重要，老城的石板路虽然美丽但凹凸不平。尽量不要在周日进行深度文化游览，因为许多小博物馆和商店可能关门。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先把自己浸泡在玛丽亚广场空灵的晨光里，顺时针沿着底层拱廊走一圈，用手指触摸那些被数百年脚步磨出凹痕的石柱基座。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在广场中央仰头旋转一圈，感受双层拱廊如同一个巨大的石头相框，将斯洛伐克湛蓝的天空裁剪成各种几何形状。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻着咖啡香钻进市政厅拱廊下那家最老的咖啡馆，点一杯浓缩咖啡，像本地人一样靠着石墙看广场缓缓苏醒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到隐蔽的入口攀爬上市政厅的钟楼，在狭窄的螺旋石阶尽头收获一个被红瓦屋顶和远处喀尔巴阡山峦环绕的360度全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过拱廊下的一条短巷突然闯入小巧宁静的福拉广场，寻找那面上墙绘有老城历史地图的墙壁，辨认你刚刚走过的街道。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在福拉广场角落的“米兰之家”巴洛克宫殿前驻足，欣赏其立面上那些顽皮的小天使灰塑雕像，他们仿佛在窃窃私语。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着略有坡度的卡普托瓦街向下漫步，让视线尽头的圣三一教堂哥特式尖塔始终作为指引，感受街道尺度的变化。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后走进圣三一教堂略显幽暗的内部，让眼睛适应光线后，去寻找那令人惊叹的网状肋拱穹顶和古老的圣母哀子像。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`玛丽亚广场东北角拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的斜阳会将长长的柱影投射在广场石板上，此时站在底层拱廊内，用拱门框住远处的瘟疫柱和教堂塔楼，形成强烈的纵深感和明暗对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`福拉广场东侧入口的拱门处`}</h4>
                  <p className="text-sm text-gray-700">{`清晨阳光恰好能照亮广场中心的小喷泉和彩色的房子立面，从这个门洞望进去，能得到一幅构图完美、色彩温润的“画中画”街景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`市政厅钟楼顶端`}</h4>
                  <p className="text-sm text-gray-700">{`带上广角镜头，将眼前层层叠叠、波浪般的红瓦屋顶与广场整齐的双层拱廊屋顶一并纳入镜中，远处若能有青山作为背景则更佳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣三一教堂内部中殿`}</h4>
                  <p className="text-sm text-gray-700">{`找准位置，仰拍那精妙绝伦的星形网状拱顶，利用教堂内部自然光线较弱的特点，采用慢速快门捕捉建筑结构的几何神圣之美。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`卡普托瓦街中段回望`}</h4>
                  <p className="text-sm text-gray-700">{`这是一条有坡度的小街，在下午顺光时，从下往上拍，可以拍出街道蜿蜒引导视线直达教堂尖塔的经典画面，两侧色彩柔和的老墙是绝佳前景。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用三脚架在教堂内部拍摄需格外安静，并尊重礼拜活动。拍摄当地人，尤其是市场商贩时，一个微笑和简单的事先示意（哪怕语言不通）会比直接举起相机礼貌得多。冬季雪后的老城格外上镜，但要注意保暖和防滑。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`下榻玛丽亚广场拱廊之上的“老城公寓”，推开木格窗就能俯瞰整个广场的日出与夜灯，听着市政厅的钟声入眠。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计师品味之选`}</h4>
                  <p className="text-sm text-green-800">{`福拉广场旁由历史建筑改造的精品设计酒店，房间保留了原始石墙与木梁，却搭配着最时髦的斯洛伐克当代家具与艺术，冲突又和谐。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`背包客社交之选`}</h4>
                  <p className="text-sm text-yellow-800">{`位于老城边缘一栋20世纪初优雅建筑里的青年旅舍，公共厨房宽敞明亮，老板是本地通，总能给你最地道的吃喝建议。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`宁静河景之选`}</h4>
                  <p className="text-sm text-purple-800">{`步行距离老城约15分钟的瓦赫河畔现代四星酒店，房间拥有直面河流与远处山景的阳台，在享受宁静自然的同时也能便捷探索历史。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "老城核心区的住宿周末可能较贵且抢手，提前数周预订是明智之举。住在拱廊楼上虽有情调，但需注意周六清晨市场搭建可能会有一些声响。日利纳整体治安良好，夜晚独自在老城漫步也感到安心。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开日利纳好些天了，但我的脑海里总会不时浮现出那些拱廊下的光影，以及那份深邃的宁静。它没有布拉格那般戏剧性的波澜壮阔，也没有维也纳那种帝国式的华丽辉煌。但恰恰是这份“平常的伟大”，让我念念不忘。在这个追求爆款、打卡速成的旅行时代，日利纳老城像一个坚定的反叛者。它不讨好、不喧嚣，只是静静地在瓦赫河畔，按照自己的节奏呼吸和生长。它告诉你，深度的旅行不是收集地名，而是去理解一个地方如何用石头、砖瓦和日常的生活，书写自己的编年史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，如果你厌倦了人潮，渴望一场真正能与历史对话、能听见自己内心回响的旅行，请一定要来日利纳。来这里，不仅仅是为了看中欧独一无二的双层柱廊广场，更是为了体验一种未被过度消费的、本真的欧洲小城灵魂。在这里，你会重新学会“漫步”的意义，会发现最动人的风景往往藏在光影交错的廊下，和当地人无意间投来的友善微笑里。日利纳是一部打开的石頭書，等待每一位有心人，来阅读它沉默而丰富的篇章。它或许不会是你欧洲之旅最响亮的名字，但很可能会成为你记忆中最沉静、最温暖的那一个角落。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
              <a href="/attractions/presov-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普雷绍夫老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Prešov Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/devin-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    德
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">德文城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Devín Castle</p>
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
