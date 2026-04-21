import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '博希尼湖 Lake Bohinj｜斯洛文尼亚的阿尔卑斯山隐世明珠，比布莱德更原始宁静的仙境 - 最佳欧洲景点',
  description: '第一眼看到博希尼湖，你会瞬间忘记呼吸。这不是布莱德湖那种精心装扮、如同明信片般的精致美，而是一种庞大、原始、甚至带着些许威严的宁静。湖水是那种深邃的、吸收了万千松树与天空色彩的翡翠绿，静静地躺在由特里格拉夫国家公园巨大岩壁环抱的怀抱里。空气中弥漫着清冽的、带着松针和湿润苔藓味道的气息，偶尔传来远处牛',
}

export default function LakeBohinjPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '斯洛文尼亚', href: '/destinations/europe' },
            { label: '上卡尼奥拉地区，博希尼镇', href: '/destinations/europe' },
            { label: '博希尼湖', href: '/attractions/lake-bohinj' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`博希尼湖・Lake Bohinj・斯洛文尼亚・上卡尼奥拉地区，博希尼镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到博希尼湖，你会瞬间忘记呼吸。这不是布莱德湖那种精心装扮、如同明信片般的精致美，而是一种庞大、原始、甚至带着些许威严的宁静。湖水是那种深邃的、吸收了万千松树与天空色彩的翡翠绿，静静地躺在由特里格拉夫国家公园巨大岩壁环抱的怀抱里。空气中弥漫着清冽的、带着松针和湿润苔藓味道的气息，偶尔传来远处牛铃铛沉甸甸的“叮咚”声，那是高山牧场的回响。阳光穿过云层，在湖面投下斑驳的光影，光线随着山风推移，仿佛整片湖泊都在缓慢地呼吸。
你的视线很难不被湖畔那座小小的、有着深灰色陡峭屋顶的圣约翰教堂所吸引。它不像那些大教堂般咄咄逼人，而是谦卑地、坚定地立在卵石滩与森林的交界处，仿佛是从这片土地里自然生长出来的。几个当地人划着小船从教堂前经过，他们向你点头微笑，那笑容和这里的湖水一样，没有过度热情，只有一种“你也找到这里了”的会心与坦然。这里没有成群的旅行团，没有喧嚣的游船马达，时间仿佛被湖水浸泡过，流淌得缓慢而厚重。
最令人震撼的，是湖泊尽头那面几乎垂直的、令人屏息的巨大岩壁。那是特里格拉夫峰群的北壁，在晴天里呈现冷峻的灰白色，云雾缭绕时则若隐若现，宛如神话中巨神的座椅。这种极致的自然造物与湖畔微小人文痕迹的并置，产生了一种难以言喻的张力。你会感到自身的渺小，同时又因置身于这幅亿万年的画卷中而感到一种深沉的归属感。博希尼的魅力，就在于这份未被过度打扰的“完整性”——完整的静谧，完整的自然力量，以及人与这片山水之间那份延续了数个世纪的、默契的凝视。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一眼看到博希尼湖，你会瞬间忘记呼吸。这不是布莱德湖那种精心装扮、如同明信片般的精致美，而是一种庞大、原始、甚至带着些许威严的宁静。湖水是那种深邃的、吸收了万千松树与天空色彩的翡翠绿，静静地躺在由特里格拉夫国家公园巨大岩壁环抱的怀抱里。空气中弥漫着清冽的、带着松针和湿润苔藓味道的气息，偶尔传来远处牛铃铛沉甸甸的“叮咚”声，那是高山牧场的回响。阳光穿过云层，在湖面投下斑驳的光影，光线随着山风推移，仿佛整片湖泊都在缓慢地呼吸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你的视线很难不被湖畔那座小小的、有着深灰色陡峭屋顶的圣约翰教堂所吸引。它不像那些大教堂般咄咄逼人，而是谦卑地、坚定地立在卵石滩与森林的交界处，仿佛是从这片土地里自然生长出来的。几个当地人划着小船从教堂前经过，他们向你点头微笑，那笑容和这里的湖水一样，没有过度热情，只有一种“你也找到这里了”的会心与坦然。这里没有成群的旅行团，没有喧嚣的游船马达，时间仿佛被湖水浸泡过，流淌得缓慢而厚重。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最令人震撼的，是湖泊尽头那面几乎垂直的、令人屏息的巨大岩壁。那是特里格拉夫峰群的北壁，在晴天里呈现冷峻的灰白色，云雾缭绕时则若隐若现，宛如神话中巨神的座椅。这种极致的自然造物与湖畔微小人文痕迹的并置，产生了一种难以言喻的张力。你会感到自身的渺小，同时又因置身于这幅亿万年的画卷中而感到一种深沉的归属感。博希尼的魅力，就在于这份未被过度打扰的“完整性”——完整的静谧，完整的自然力量，以及人与这片山水之间那份延续了数个世纪的、默契的凝视。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`博希尼湖`} />
                <InfoRow label="英文名称" value={`Lake Bohinj`} />
                <InfoRow label="正式名称" value={`Lake Bohinj`} />
                <InfoRow label="国家" value={`斯洛文尼亚`} />
                <InfoRow label="城市" value={`上卡尼奥拉地区，博希尼镇`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座由冰川雕刻而成的湖泊，是斯洛文尼亚境内最大、最深的永久性天然湖泊，也是朱利安阿尔卑斯山心脏地带千年不变的自然与文化地标。`} />
                <InfoRow label="建筑特色" value={`湖畔的圣约翰教堂是一座拥有数百年历史的罗马式建筑，以其陡峭的板岩屋顶、独立的钟楼和内部珍贵的哥特式湿壁画而闻名。`} />
                <InfoRow label="建筑风格" value={`教堂主体为朴素的罗马式风格，后期融入了哥特式和巴洛克式的内部装饰元素。`} />
                <InfoRow label="文化价值" value={`它不仅是斯洛文尼亚高山文化的宁静守护者，体现了人与自然共生的古老智慧，也是现代人寻找内心平静与精神原点的象征之地。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`湖区自然公园全年全天24小时开放。湖畔的圣约翰教堂（Cerkev sv. Janeza Krstnika）通常在夏季（6月至9月）上午9点至晚上7点开放，冬季开放时间缩短，约为上午10点至下午4点，具体请以教堂门口告示为准。萨维奇山口缆车（Vogel Cable Car）运营时间随季节变化：夏季通常从早上8点运行至晚上7点，冬季滑雪季从早上8点运行至下午4点，春秋季可能有维护期，出行前务必查阅官网最新时刻表。所有设施在圣诞节和元旦可能关闭或缩短时间。`} />
              <InfoRow label="门票价格" value={`进入博希尼湖自然公园区域免费。圣约翰教堂参观免费，但欢迎捐款以支持维护。萨维奇缆车（Vogel Cable Car）往返票价：成人约25-30欧元，儿童、学生和老人有优惠票，通常6岁以下免费。停车场收费：湖畔主要停车场（如Ribčev Laz）按小时或天收费，全天约5-10欧元。租船（手划船、脚踏船、SUP桨板）价格约为每小时10-20欧元。`} />
              <InfoRow label="地址" value={`Lake Bohinj, 4265 Bohinjsko Jezero, Slovenia`} />
              <InfoRow label="交通方式" value={`从斯洛文尼亚首都卢布尔雅那出发是最佳选择。在卢布尔雅那中央汽车站（Avtobusna postaja Ljubljana）乘坐前往博希尼（Bohinj）或博希尼斯卡比斯特里察（Bohinjska Bistrica）的直达巴士，车程约1小时45分钟至2小时，班次在夏季较多（每天约10-12班），冬季减少，建议提前在巴士站或通过Avtobusna postaja Ljubljana官网查询并购买车票。如果自驾，从卢布尔雅那沿A1/E61高速公路向西北方向行驶，在Lesce-Bled出口下高速，随后沿通往博希尼的公路（路线S201）行驶约25公里即可抵达湖畔的里布切夫拉兹村（Ribčev Laz），全程约1小时15分钟。火车也可抵达，但更复杂：从卢布尔雅那乘坐火车到耶塞尼采（Jesenice）或博希尼斯卡比斯特里察，再转乘当地巴士前往湖区。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "博希尼湖的故事，远比任何文字记载要古老。它的诞生源于数万年前第四纪冰川的缓慢撤退。巨大的冰川像最耐心的雕刻家，以千年为单位，磨蚀着朱利安阿尔卑斯山的岩石，最终留下了这个长约4.2公里、最深处达45米的巨大凹槽。冰川融水注入，形成了我们今天看到的这颗高山明珠。在人类踪迹出现之前，这里只有风声、水声和野兽的啼鸣，湖水像一面镜子，独自映照着星辰与山脉的变迁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最早被这里丰沛水源和肥沃河谷吸引的，是史前时代的居民。但真正让博希尼进入稳定历史叙事的，是中世纪早期的斯拉夫定居者。“Bohinj”这个名字本身源自斯拉夫语，意为“神的地方”或“富饶之地”，足见先民对它的敬畏与依赖。他们在此放牧、耕种，木材和铁器加工也逐渐发展。而那座如今成为地标的圣约翰教堂，其最早的罗马式部分大约建于11至12世纪。它最初可能只是一个为湖畔居民和往来于博希尼山谷与萨瓦河谷的商旅提供精神慰藉的小礼拜堂。教堂墙壁内那些可追溯到14至15世纪的哥特式湿壁画，描绘了圣克里斯托弗、圣乔治屠龙等场景，它们不仅仅是宗教艺术，更是那个时代普通山民世界观和信仰的鲜活档案。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "漫长的岁月里，博希尼山谷的生活节奏与阿尔卑斯的季节紧密相连。春天融雪，夏日放牧，秋天收获，冬季围炉。湖泊是生活的背景，而非观赏的对象。这种状态一直持续到19世纪。随着浪漫主义思潮在欧洲蔓延，阿尔卑斯山的壮丽开始吸引探险家和早期旅行者。博希尼湖因其更偏远、更“野生”的特质，首先吸引了地质学家、植物学家和真正的户外爱好者。1906年，湖边建起了第一家旅馆“兹拉塔尔”（Zlatorog），以当地神话中的金色羚羊命名，标志着现代旅游的萌芽。但即便如此，通往这里的道路依然艰难，它得以保留了其孤傲的气质。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "二十世纪的战火与政治变革同样在这里留下了印记。在两次世界大战期间及之后的领土变迁中，这片土地的身份在不断变化。二战期间，特里格拉夫山区是斯洛文尼亚游击队员重要的活动基地，湖泊的深邃与森林的茂密提供了天然的庇护。战后，随着南斯拉夫时期基础设施的建设和特里格拉夫国家公园于1981年的建立，博希尼湖被系统地保护起来，避免了过度开发。1991年斯洛文尼亚独立后，这里成为了国家自然遗产的骄傲。旅游业发展了起来，缆车建成了，徒步路线被标记完善，但发展的主旋律始终是可持续与尊重自然。今天的博希尼，是冰川、中世纪信仰、高山农牧文化和现代生态保护理念层层叠加的结果，每一层都清晰可辨，共同谱写着这首安静而磅礴的阿尔卑斯史诗。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正领略博希尼的魂魄，建议安排一整天的时间，并遵循“由近及远，由静至动”的节奏。最好在清晨（8点前）抵达湖畔的里布切夫拉兹（Ribčev Laz），此时游客未至，湖面平如镜，是感受其原始宁静的黄金时刻。上午以湖畔漫步和人文探访为主，沉浸于教堂与湖光山色的静态画卷。中午前后，可以体验一下湖水或乘坐缆车跃升维度。下午则留给一次轻量级的徒步，从高处或另一个角度回望湖泊。傍晚时分回到湖畔，等待日落金山，完成一场完整的感官仪式。这样的安排能让你从多个维度，由表及里地深入博希尼的世界。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季周末和节假日午后湖区停车场可能爆满，务必早到或考虑使用公共交通。湖区天气瞬息万变，即使夏日也需备好防风防雨外套和保暖中层。尊重自然，步道上的所有动植物都不要打扰，垃圾务必随身带走。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨第一站就从里布切夫拉兹的石桥开始，看着奶白色的冰川湖水从桥下奔流而出，深吸一口混合着水汽与冷杉清香的空气。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着北岸的步道悠闲地向西走，脚下的碎石沙沙作响，一路欣赏对岸的雪山在湖中愈发清晰的倒影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探访那座仿佛从童话中走出的圣约翰教堂，用手触摸它冰凉粗糙的石墙，仰头辨认室内壁画上依稀可辨的古老故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在教堂旁的卵石滩找一块平整的大石头坐下，什么也不做，只是看野鸭凫水，听风声掠过湖面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`乘坐萨维奇缆车直上近1600米的山腰，在轰隆声中感受海拔急速提升，回头俯瞰博希尼湖逐渐变成山坳里一块狭长的翡翠。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在缆车站上方的观景台或高山牧场餐厅点一份简单的当地奶酪拼盘，就着无与伦比的全景享受一顿“空中午餐”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选择一条标识清晰的下山徒步路线（如通往乌坎茨（Ukanc）的路径），穿过开满野花的高山草甸和幽静的松林，用脚步丈量阿尔卑斯的肌理。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前返回湖东岸，静静看着夕阳的余晖将特里格拉夫群峰的岩壁依次点燃，从金色变为玫瑰红，最后沉入深蓝的暮色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`石桥与教堂同框`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在石桥靠岸一侧，用长焦镜头压缩空间，将前景的石桥、中景的圣约翰教堂和背景的雄浑山体一同纳入画面，构图极为经典。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`北岸步道倒影拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`无风的清晨，在北岸步道中段寻找一处前景有岩石或野花的位置，利用湖面完美的镜面效果，拍摄山脉与天空的清晰倒影，画面宁静而对称。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`萨维奇缆车俯瞰全景`}</h4>
                  <p className="text-sm text-gray-700">{`搭乘缆车升至中段时，转身面向后方，用广角镜头拍摄缆车厢、下方缩小的森林与湖泊、以及远方层层叠叠的山脉，极具纵深感与故事性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`乌坎茨村湖畔木桩`}</h4>
                  <p className="text-sm text-gray-700">{`在湖泊最西端的乌坎茨村（Ukanc），找到那些深入水中的古老木桩，以木桩为引导线，拍摄湖面延伸至远处萨维奇山（Mt. Vogel）的深邃景观，尤其适合阴天营造氛围感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`教堂内部壁画细节`}</h4>
                  <p className="text-sm text-gray-700">{`利用教堂门廊或窗户投入的柔和的侧光，近距离拍摄湿壁画斑驳的细节，手动调低曝光以突出历史的沧桑质感，注意关闭闪光灯。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄高山牧场上的牛羊或牧民小屋时，请保持礼貌距离，使用长焦镜头，避免惊扰牲畜和私人财产。冬季拍摄雪景时，注意相机电池保温，并防止剧烈温差导致的镜头起雾。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`湖畔民宿体验`}</h4>
                  <p className="text-sm text-blue-800">{`住在里布切夫拉兹或乌坎茨的家族经营民宿里，推开窗就是湖光山色，主人会为你准备用本地食材制作的丰盛早餐，晚上还能听到关于“兹拉塔尔”金羚羊的古老传说。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`高山牧场小屋`}</h4>
                  <p className="text-sm text-green-800">{`预订一间萨维奇山腰上的传统高山木屋住宿，在徒步一天后享受热腾腾的炖菜，夜晚在没有光污染的环境下仰望震撼的阿尔卑斯星空，清晨在牛铃声中醒来。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计感山林酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`选择坐落在博希尼山谷森林边缘的现代设计酒店，巨大的落地窗将自然变成流动的壁画，桑拿房和户外热水浴池能让你在星空下舒缓徒步后的疲惫双腿。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`自带厨房的湖畔公寓`}</h4>
                  <p className="text-sm text-purple-800">{`在斯托德·佛拉（Stod Fara）或湖边其他安静村落租一间公寓，去本地市场采购新鲜食材，像当地人一样生活，傍晚在阳台上看着群山慢慢变暗，亲手做一顿晚餐。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季和滑雪季是绝对旺季，务必提前数月预订，尤其是周末。选择离湖稍远几步的村落住宿，往往更安静且性价比更高。许多传统住宿不提供空调，但山区夜晚凉爽，通常无需担心。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开博希尼湖很久以后，脑海里挥之不去的，不是某一张具体的明信片风景，而是一种整体的“感觉”。那是一种被巨大安宁包裹的、近乎失语的体验。在这个被社交媒体和快速消费主义驱动的时代，博希尼提供了一种珍贵的“冗余”——空间的冗余、时间的冗余和静默的冗余。它不急于向你展示什么，不提供琳琅满目的娱乐项目，它只是存在在那里，强大、古老而沉默。你需要做的，只是放下手机，停下脚步，让自己的呼吸节奏慢慢与湖水的脉动、与山风的起伏同步。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这正是它值得每一位深度旅行者专程来访的原因。布莱德湖像一首精巧的十四行诗，而博希尼，则是一部厚重的自然史诗。它让我们记起，旅行不仅仅是空间的移动，更是内心的沉降。在这里，你可以重新学习“观看”，学习“聆听”，学习与一个不迎合你的、自有其节奏的世界共处。那座湖畔的小教堂，就像是人类精神在面对无垠自然时，既谦卑又坚韧的注脚。当你把双脚浸入冰凉的湖水，当你在高山牧场的风中眯起眼睛，你会感到某种现代生活中早已遗忘的、与土地和天空的原始连接被悄然接通。博希尼不是景点，它是一种状态，一次关于宁静与回归的、深刻的地理疗愈。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/postojna-cave" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    波
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">波斯托伊纳溶洞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Postojna Cave</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/celje-castle-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    采
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">采列城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Celje Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/piran-salt-pans-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    皮
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">皮兰盐田与老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Piran Salt Pans & Old Town</p>
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
