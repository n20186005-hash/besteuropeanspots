import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '赛伦奇 Szerencs Castle｜探访托卡伊葡萄酒门户的文艺复兴水上城堡与巧克力传奇 - 最佳欧洲景点',
  description: '车子沿着托卡伊产区蜿蜒的乡间小路行驶，空气里已经能嗅到一股湿润的、混合着泥土与即将成熟的葡萄的甜香。当赛伦奇小镇那些色彩柔和的房屋出现在视野尽头时，我并没有立刻看到城堡——直到转过一个弯，它就这么毫无征兆地、完整地铺陈在眼前。不是高高在上的险峻，而是一种沉稳的、平铺直叙的宏伟。四座坚实的塔楼像四位沉',
}

export default function SzerencsRenaissanceWaterCastleTokajPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '匈牙利', href: '/destinations/europe' },
            { label: '赛伦奇', href: '/destinations/europe' },
            { label: '赛伦奇', href: '/attractions/szerencs-renaissance-water-castle-tokaj' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`赛伦奇・Szerencs・匈牙利・赛伦奇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着托卡伊产区蜿蜒的乡间小路行驶，空气里已经能嗅到一股湿润的、混合着泥土与即将成熟的葡萄的甜香。当赛伦奇小镇那些色彩柔和的房屋出现在视野尽头时，我并没有立刻看到城堡——直到转过一个弯，它就这么毫无征兆地、完整地铺陈在眼前。不是高高在上的险峻，而是一种沉稳的、平铺直叙的宏伟。四座坚实的塔楼像四位沉默的巨人，守护着一个被水光环绕的方形岛屿。午后的阳光斜斜地打在蜜色的石墙上，护城河的水面波光粼粼，将城堡的倒影揉碎又重组，那一刻，时间仿佛被这潭静水吸附，缓慢得几乎停滞。
走进城堡脚下的公园，生活气息扑面而来。当地人推着婴儿车在树下散步，老人坐在长椅上看着报纸，孩子们绕着草坪奔跑嬉笑。城堡巨大的阴影温柔地覆盖着他们，它不再是教科书里冷冰冰的遗迹，而是小镇日常生活一个无比自然的地理背景和心理坐标。你能感觉到，这里的人们是以一种拥有者的从容，而非观光客的惊奇，与这座历史建筑共存。风从塔楼间穿过，带来远处咖啡馆飘出的烘焙香气，仔细分辨，那香气里似乎还残留着一丝若有若无的、极其隐秘的可可甜香，那是深植于这片土地记忆里的另一种味道。
最打动我的，是这种奇妙的层叠感。视觉上是文艺复兴的理性与优美，脚下是承载了数个世纪脚步声的石板，鼻尖萦绕着葡萄园的芬芳与历史的尘埃味，而耳畔似乎还能听到旧日巧克力工厂机器隐约的轰鸣。这座城堡像一块味道浓郁的文化千层酥，每一口咬下去，都是不同的时代滋味。它不试图讲述单一的故事，而是坦然地展示着自己作为防御工事、贵族宅邸、工业厂房乃至社区公园的每一种身份。这种坦率，让它拥有了一种别处少见的、厚重的真实感。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子沿着托卡伊产区蜿蜒的乡间小路行驶，空气里已经能嗅到一股湿润的、混合着泥土与即将成熟的葡萄的甜香。当赛伦奇小镇那些色彩柔和的房屋出现在视野尽头时，我并没有立刻看到城堡——直到转过一个弯，它就这么毫无征兆地、完整地铺陈在眼前。不是高高在上的险峻，而是一种沉稳的、平铺直叙的宏伟。四座坚实的塔楼像四位沉默的巨人，守护着一个被水光环绕的方形岛屿。午后的阳光斜斜地打在蜜色的石墙上，护城河的水面波光粼粼，将城堡的倒影揉碎又重组，那一刻，时间仿佛被这潭静水吸附，缓慢得几乎停滞。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走进城堡脚下的公园，生活气息扑面而来。当地人推着婴儿车在树下散步，老人坐在长椅上看着报纸，孩子们绕着草坪奔跑嬉笑。城堡巨大的阴影温柔地覆盖着他们，它不再是教科书里冷冰冰的遗迹，而是小镇日常生活一个无比自然的地理背景和心理坐标。你能感觉到，这里的人们是以一种拥有者的从容，而非观光客的惊奇，与这座历史建筑共存。风从塔楼间穿过，带来远处咖啡馆飘出的烘焙香气，仔细分辨，那香气里似乎还残留着一丝若有若无的、极其隐秘的可可甜香，那是深植于这片土地记忆里的另一种味道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动我的，是这种奇妙的层叠感。视觉上是文艺复兴的理性与优美，脚下是承载了数个世纪脚步声的石板，鼻尖萦绕着葡萄园的芬芳与历史的尘埃味，而耳畔似乎还能听到旧日巧克力工厂机器隐约的轰鸣。这座城堡像一块味道浓郁的文化千层酥，每一口咬下去，都是不同的时代滋味。它不试图讲述单一的故事，而是坦然地展示着自己作为防御工事、贵族宅邸、工业厂房乃至社区公园的每一种身份。这种坦率，让它拥有了一种别处少见的、厚重的真实感。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`赛伦奇`} />
                <InfoRow label="英文名称" value={`Szerencs`} />
                <InfoRow label="正式名称" value={`Szerencs Castle (Szerencsi Vár)`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`赛伦奇`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`赛伦奇城堡是匈牙利文艺复兴建筑在东北部地区的杰出代表，历史上既是防御要塞，也是文化中心，并因19世纪末成为匈牙利最大巧克力工厂的所在地而书写了独特的工业传奇。`} />
                <InfoRow label="建筑特色" value={`一座宏大的四方形建筑，四角各耸立着一座高耸的塔楼，被护城河环绕，形成典型的水上城堡格局，厚重墙体与优雅拱廊窗形成了力量与美感的独特平衡。`} />
                <InfoRow label="建筑风格" value={`以文艺复兴风格为主体，同时融合了晚期哥特式的结构元素和巴洛克后期的局部装饰，展现了16-18世纪匈牙利贵族建筑的演变脉络。`} />
                <InfoRow label="文化价值" value={`它不仅是建筑瑰宝，更是连接匈牙利贵族历史、托卡伊葡萄酒文化、以及近代糖果工业遗产的三重文化十字路口，承载着多层次的地方记忆。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡建筑群及博物馆的开放时间通常为每年4月1日至10月31日，周二至周日，上午10点至下午6点。11月至次年3月开放时间缩短，主要为周末开放，或仅接受团体预约。内部庭院和外部花园全年全天可自由参观。具体开放日期可能因临时活动或修复工程调整，建议出行前访问市旅游局官网确认。每年的葡萄酒节和巧克力节期间城堡会延长开放至深夜。`} />
              <InfoRow label="门票价格" value={`进入城堡庭院和外围公园免费。参观城堡主楼历史展览与博物馆的成人票约为2500匈牙利福林（约6.5欧元）。学生、老人及团体票享有优惠，约为1500福林。6岁以下儿童免费。购买包含导游讲解、葡萄酒品鉴或巧克力工坊体验的套票价格在5000-8000福林之间。支持现场购票，旺季时建议提前在线预订以避免排队。`} />
              <InfoRow label="地址" value={`Szerencs Vár, 3900 Szerencs, Kossuth Lajos utca 2, Hungary`} />
              <InfoRow label="交通方式" value={`从布达佩斯李斯特·费伦茨国际机场出发，最便捷的方式是租车自驾，沿M3高速公路向东行驶约220公里，转入37号公路，全程约2.5-3小时。使用公共交通：从布达佩斯东站（Keleti pályaudvar）乘坐火车前往米什科尔茨（Miskolc），车程约2小时，班次频繁。在米什科尔茨换乘前往赛伦奇的支线火车或巴士，车程约40分钟至1小时，巴士班次相对较少，需提前查好时刻表。从托卡伊镇自驾或乘出租车前来约20分钟。小镇内城堡位于中心，从火车站步行10分钟即达。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事要从十六世纪中叶讲起。当时，这片属于托卡伊黄金产区的土地，是匈牙利几大显赫家族博弈的舞台。赛伦奇的命运，与一个名叫巴拉沙·德涅什的贵族紧密相连。他并非皇室，却凭借出色的军事才能和政治手腕积累了巨大财富与影响力。大约在1550年代，他决心在此建造一座与家族地位相匹配的、既能彰显品味又能抵御动荡的宅邸。于是，一座借鉴了意大利文艺复兴理念，又深深扎根于中欧防御需求的方形水上城堡破土而出。四角的塔楼提供了无死角的瞭望与射击点，宽阔的护城河是第一道防线，而内部庭院环绕的拱廊和装饰精美的窗户，则诉说着主人对舒适生活与人文艺术的追求。城堡建成后，迅速成为上匈牙利地区文艺复兴文化的一个小中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，平静总是短暂。随之而来的奥斯曼帝国扩张的阴影，以及匈牙利内部连绵的战争，让城堡屡次易主，在费伦茨·拉科齐二世领导的独立战争期间，它更成为了一个重要的军事据点。墙壁上的弹孔，地下室加深的仓储空间，都是那个烽火年代的沉默证词。战争的硝烟散去后，城堡归于宁静，但已显露出破败的迹象。直到十八世纪，它被财力雄厚的切尔家族购入，进行了一次大规模的巴洛克风格翻新，加入了华丽的灰泥装饰和更大的窗户，试图洗去战争的伤痕，赋予它更多居住的温馨感。但城堡作为顶级贵族私邸的黄金时代，似乎已然逝去。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "命运的转折点在1893年到来，而且是以一种极为戏剧化的方式。一位名叫耶诺·格鲍尔的犹太裔企业家，以独特的眼光看中了这座宏大体量但略显落寞的城堡。他买下它，并非为了居住，而是要进行一项甜蜜的改造——他要在这里建立匈牙利最大、最现代化的巧克力与糖果工厂。想象一下那个场景：轰鸣的蒸汽机被运进古老的内庭，生产线取代了宴会厅，可可豆的香气盖过了旧日贵族花园的花香。城堡的厚重石墙成了绝佳的隔热层和天然仓库，护城河的水源或许也曾为工厂所用。在近半个世纪里，“城堡巧克力”名声大噪，产品远销奥匈帝国全境，这座文艺复兴建筑以另一种充满生命力的方式“活”了过来，成为了数百名小镇居民生计所系的地方。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "二战的炮火和其后的国有化浪潮，再次改写了城堡的篇章。工厂最终关闭，城堡一度陷入被遗忘的境地，沦为仓库甚至面临拆毁的危险。但小镇的人们没有忘记它。从二十世纪末开始，一场漫长而精细的修复工程启动了。人们小心翼翼地剥离后来添加的工厂设施，修复古老的壁画和石雕，清理护城河。目的不是将它还原到某个单一的“纯真”年代，而是尊重所有历史的层次。于是，我们今天看到的，是一座既能找到16世纪石砌工艺，又能看到19世纪工厂钢梁加固痕迹的城堡。它就像一位历经沧桑的老者，脸上的每道皱纹都是一个真实的故事，无需掩饰，自有其庄严与美丽。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的赛伦奇城堡深度游应该从一个清闲的上午开始，整体耗时大约4到5小时。建议在上午9点半左右抵达，这时旅行团尚未涌入，晨光柔和，是拍摄城堡外景和享受宁静庭院的最佳时机。游览节奏宜张弛有度：先从外部整体感受其气势与环境，再深入内部探究细节与历史，最后以品味当地特产收尾，让感官体验从视觉、触觉逐步过渡到味觉。这样的安排能让你由远及近、由表及里地层层揭开这座复合型遗产的面纱，而不至于被信息淹没。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周末下午城堡内部可能较拥挤，尽量将核心参观安排在上午。塔楼楼梯极为狭窄陡峭且昏暗，务必穿着舒适防滑的鞋子，有幽闭恐惧症或行动不便的游客需谨慎攀登。小镇部分餐馆周一休息，提前规划午餐地点。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`先从城堡南侧的正门大桥开始，慢慢走过护城河，感受脚步从现代小镇踏入历史岛屿那一瞬间的穿越感，并回头看看小镇建筑与城堡塔楼构成的和谐天际线。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`不要急着进入主楼，而是沿着护城河顺时针漫步一圈，从不同角度观察四座塔楼的细微差异和墙体上岁月留下的各种痕迹与修补的补丁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`通过古老的拱形门洞进入内庭，静静地站在中央，仰头环视四面由三层拱廊构成的回廊，想象它作为贵族庭院时的喧嚣和作为工厂中庭时的繁忙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观设在主楼内的历史展览，重点寻找那些关于巧克力工厂的老照片、旧广告和包装纸，让那些甜蜜的遗物为你讲述城堡最意想不到的篇章。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着狭窄的旋转石梯登上西北角的塔楼（如果开放），在制高点迎着风俯瞰整个赛伦奇小镇的红屋顶和远处无边无际的、如绿色地毯般铺开的托卡伊葡萄园。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡出来后，穿过公园，前往小镇上那些家族经营的小酒窖或品酒屋，点一杯当地的福尔明白葡萄酒，让舌尖体验这片风土的精华。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间允许，寻访镇上那家传承了老工厂配方的巧克力小店，买一块黑巧克力，在口中融化时品味历史与手艺交织的滋味。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前回到城堡公园，找一张面对西侧塔楼的长椅坐下，看夕阳的金色如何一点点浸染古老的石墙，直到灯光亮起，城堡倒映在夜幕下的护城河中。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`护城河东岸的草坪`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，以宽阔的水面为前景，拍摄城堡与四座塔楼完整的倒影，使用对称构图，能获得油画般宁静辉煌的效果。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`内庭二层拱廊的角落`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射入中庭时，站在对角线的拱廊下，拍摄光线在层层拱门和石板地上形成的强烈明暗对比与纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从城堡西北塔楼顶的垛口`}</h4>
                  <p className="text-sm text-gray-700">{`用中长焦镜头，透过古老的石砌垛口框取远处托卡伊山丘上整齐的葡萄园和零星的小教堂，形成历史框架与永恒田园风光的对话。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城堡后门小石桥侧后方`}</h4>
                  <p className="text-sm text-gray-700">{`清晨八点左右，阳光侧射，从这个低调的角度拍摄城堡局部墙体与一座塔楼的基部，强调石头粗糙的质感和常春藤攀附的生命力。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`小镇主街某段视角`}</h4>
                  <p className="text-sm text-gray-700">{`退到Kossuth Lajos utca中段，将街边的路灯、行人或电车作为前景，远拍城堡塔楼耸立于民居之上的日常风景，体现其融入社区的和谐。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`城堡内部展览区域通常禁止使用闪光灯和三脚架（尤其是空间狭窄处），以保护脆弱的展品和壁画。无人机飞行在历史遗迹上空受到严格管制，未经许可切勿放飞。尊重当地居民隐私，避免透过城堡周边民居的窗户进行拍摄。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温馨民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在城堡附近步行五分钟可达的百年老屋改造的民宿，主人会为你准备丰盛的匈牙利式早餐，并分享小镇不为人知的趣闻。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`葡萄酒庄园住宿`}</h4>
                  <p className="text-sm text-green-800">{`驱车十分钟前往托卡伊产区腹地的一家小型家庭酒庄，住在古老的酒窖上方翻新的客房，夜晚只有葡萄园的沙沙声和星星为伴。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特色酒店体验`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻由一栋十九世纪末新艺术风格别墅改造的精品酒店，房间挑高，装饰复古，仿佛回到了巧克力工厂鼎盛的繁华年代。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`预算便捷之选`}</h4>
                  <p className="text-sm text-purple-800">{`选择小镇边缘一家现代但干净的家庭旅馆，价格实惠，通常提供自行车租赁，方便你自由探索城堡和周边的乡村小径。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "托卡伊产区在九、十月的葡萄采收季以及节假日期间住宿非常紧张，务必提前数月预订。小镇治安良好，夜晚安静，但建议选择离城堡或主街较近、灯火通明的住处。许多庄园住宿位于乡下，晚间几乎没有公共交通，更适合自驾者。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开赛伦奇的时候，我嘴里似乎还留着那复杂的气息——石头的冷冽、葡萄酒的酸度、巧克力的微苦回甘。这座城堡教会我的，是关于“延续”的另一种定义。它没有被供奉在玻璃罩里，仅仅作为一件过去的标本而存在；相反，它勇敢地接纳了每一次命运的涂改，从堡垒到家园，从工厂到博物馆，每一次身份的转换或许都伴随着阵痛，却也注入了新的生命力。它让我看到，真正的文化遗产并非不朽，而是在不断的适应与再利用中，与一代代人的生活紧紧缠绕，从而获得不朽的意义。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求纯粹与“原汁原味”的世界里，赛伦奇城堡像是一个温和的反叛者。它坦然展示着自己的“不纯粹”：文艺复兴的骨架里留着战争的伤疤，贵族的气度中混杂着工业的油烟。可正是这种层叠与混杂，让它充满了人性的温度。它不仅仅是一个景点，更是一本立体的、可触摸的地方志。每一位来到这里的旅人，尝过这里的酒，听过这里的传奇，都会带走一个关于匈牙利更为丰满的印象——它不仅是英雄史诗和吉普赛旋律，也是甜腻的巧克力与金色的琼浆，是所有这一切在历史长河中缓慢发酵、最终融为一体的、深沉而甜蜜的味道。这，正是深度旅行所追寻的，超越风景的、直抵灵魂的共鸣。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/sumeg-castle-hungary" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    许
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">许迈格城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sümeg Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/heviz-thermal-lake" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    黑
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">黑维兹温泉湖</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hévíz</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sopron-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    肖
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">肖普朗老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sopron Old Town</p>
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
