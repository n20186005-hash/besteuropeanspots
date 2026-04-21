import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '波特斯 Potes｜被群山与古桥温柔环抱的西班牙“小威尼斯” - 最佳欧洲景点',
  description: '当你把车停在镇外，或者从巴士上走下来，第一眼看到波特斯的时候，你可能会觉得时间在这里故意放慢了脚步。它不是那种会让你“哇”一声惊呼的宏伟之地，而是一种温柔的、绿色的、石头般的拥抱。你的鼻子会先于眼睛察觉到它的存在——那是从山上吹下来的清冽空气，混合着潮湿石头、燃烧木柴（即使在夏天，老房子里也总飘出这...',
}

export default function PotesCantabriaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '西班牙', href: '/destinations/spain' },
            { label: '坎塔布里亚自治区', href: '/destinations/spain' },
            { label: '波特斯', href: '/attractions/potes-cantabria' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`波特斯・Potes・西班牙・坎塔布里亚自治区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你把车停在镇外，或者从巴士上走下来，第一眼看到波特斯的时候，你可能会觉得时间在这里故意放慢了脚步。它不是那种会让你“哇”一声惊呼的宏伟之地，而是一种温柔的、绿色的、石头般的拥抱。你的鼻子会先于眼睛察觉到它的存在——那是从山上吹下来的清冽空气，混合着潮湿石头、燃烧木柴（即使在夏天，老房子里也总飘出这种气味）和咖啡馆里飘出的浓郁咖啡香。耳边是永恒的、欢快的背景音：德瓦河和奎维加河两条溪流在鹅卵石河床上永不停歇的潺潺声，像在低声诉说着千百年的故事。
你的脚步会很自然地被引向那些桥。它们不是什么建筑杰作，没有精雕细琢的栏杆，只是敦厚、实用、被岁月磨得光滑的石头拱桥。站在桥上，看着碧绿的河水从桥洞下穿过，流向那些依山而建、色彩斑驳的老房子，红的瓦，黄的墙，木头的阳台被天竺葵和牵牛花淹没。你会看到当地人——不是游客，是真正的波特斯人——提着篮子不紧不慢地走过，或者在桥边的小酒吧外站着，喝一杯早晨的咖啡，聊着天。这里的生活，是围绕着这些桥和广场展开的，它们是小镇的客厅和走廊。
而当你抬起头，视野的尽头永远是那片无与伦比的绿色帷幕——欧洲之巅山脉（Picos de Europa）连绵的、锯齿状的山峰。无论你在小镇的哪个角落，那雄伟的山峦都沉默地矗立在那里，像是小镇的守护神，也定义了这里的气质：坚韧、宁静，与自然有着最亲密的联系。波特斯的魅力，就在于这种极致的和谐——人类用石头和智慧建造的家园，谦卑地、美丽地镶嵌在上帝创造的山河之间。它不是景点，它就是生活本身，一种让你想深吸一口气，然后彻底松弛下来的生活。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你把车停在镇外，或者从巴士上走下来，第一眼看到波特斯的时候，你可能会觉得时间在这里故意放慢了脚步。它不是那种会让你“哇”一声惊呼的宏伟之地，而是一种温柔的、绿色的、石头般的拥抱。你的鼻子会先于眼睛察觉到它的存在——那是从山上吹下来的清冽空气，混合着潮湿石头、燃烧木柴（即使在夏天，老房子里也总飘出这种气味）和咖啡馆里飘出的浓郁咖啡香。耳边是永恒的、欢快的背景音：德瓦河和奎维加河两条溪流在鹅卵石河床上永不停歇的潺潺声，像在低声诉说着千百年的故事。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你的脚步会很自然地被引向那些桥。它们不是什么建筑杰作，没有精雕细琢的栏杆，只是敦厚、实用、被岁月磨得光滑的石头拱桥。站在桥上，看着碧绿的河水从桥洞下穿过，流向那些依山而建、色彩斑驳的老房子，红的瓦，黄的墙，木头的阳台被天竺葵和牵牛花淹没。你会看到当地人——不是游客，是真正的波特斯人——提着篮子不紧不慢地走过，或者在桥边的小酒吧外站着，喝一杯早晨的咖啡，聊着天。这里的生活，是围绕着这些桥和广场展开的，它们是小镇的客厅和走廊。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而当你抬起头，视野的尽头永远是那片无与伦比的绿色帷幕——欧洲之巅山脉（Picos de Europa）连绵的、锯齿状的山峰。无论你在小镇的哪个角落，那雄伟的山峦都沉默地矗立在那里，像是小镇的守护神，也定义了这里的气质：坚韧、宁静，与自然有着最亲密的联系。波特斯的魅力，就在于这种极致的和谐——人类用石头和智慧建造的家园，谦卑地、美丽地镶嵌在上帝创造的山河之间。它不是景点，它就是生活本身，一种让你想深吸一口气，然后彻底松弛下来的生活。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`波特斯`} />
                <InfoRow label="英文名称" value={`Potes`} />
                <InfoRow label="正式名称" value={`Potes`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`坎塔布里亚自治区`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`曾是莱昂王国重要的伯爵领地中心，也是通往圣地亚哥朝圣之路北线的关键驿站，见证了中世纪西班牙北部的权力更迭与宗教文化传播。`} />
                <InfoRow label="建筑特色" value={`由石头、木材和瓦片构成的山地建筑群，依偎在两条清澈河流交汇处，以四座古拙的石拱桥为纽带，连接起层层叠叠的古老房屋和防御塔楼。`} />
                <InfoRow label="建筑风格" value={`坎塔布里亚山地民用建筑与防御工事的混合体，质朴而坚固，带有浓厚的罗马式和哥特式遗风。`} />
                <InfoRow label="文化价值" value={`一座活着的“博物馆”，完美保存了西班牙北部山地小镇的传统生活方式、建筑美学与节奏，是体验真正坎塔布里亚乡村灵魂的窗口。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇全天开放，街道、广场及河岸可随时漫步。主要历史建筑（如钟楼、圣文森特教堂）通常开放时间为上午10点至下午2点，下午4点至晚上7点。夏季（7-8月）开放时间可能延长，冬季（11月至次年3月）部分室内景点可能缩短开放或周一闭馆。具体请以各景点现场公告为准。`} />
              <InfoRow label="门票价格" value={`小镇本身免费进入。部分历史建筑如钟楼（Torre del Infantado）可能收取小额门票（约2-3欧元），用于维护。教堂通常免费，但欢迎捐赠。建议随身准备一些硬币零钱。`} />
              <InfoRow label="地址" value={`Plaza de la Independencia, 1, 39570 Potes, Cantabria, Spain`} />
              <InfoRow label="交通方式" value={`最近的机场是桑坦德机场（Santander Airport，约100公里）或毕尔巴鄂机场（Bilbao Airport，约160公里）。从这两个机场均可租车自驾前往，这是最推荐的方式，沿途可欣赏壮丽的坎塔布里亚山脉风光，车程约1.5-2.5小时。公共交通稍显复杂：可从桑坦德市或毕尔巴鄂市乘坐长途巴士前往小镇Caboalles或Panama站，再换乘前往Potes的当地巴士（班次较少，尤其是周末和节假日，请务必提前查询ALSA或Autobuses Palomera公司时刻表）。从最近的主要火车站（桑坦德或毕尔巴鄂）出发，同样需结合长途巴士，总耗时可能超过3小时。因此，强烈建议自驾，以获得最大的旅行自由度。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起波特斯的故事，你得先把时钟拨回到公元十世纪左右。那时候，这片被群山守护的肥沃谷地，已经吸引了一些人在此定居。它的名字“Potes”据说源于拉丁语的“pontes”，意思是“桥”。这再贴切不过了，因为从诞生之初，它的命运就和跨越河流紧紧相连。中世纪早期，随着莱昂王国的基督教势力向北推进和重建，波特斯因其战略位置（扼守进入欧洲之巅山脉的通道）和肥沃的土地，逐渐变得重要起来。它成为了一个叫做列巴纳（Liébana）的伯爵领地的中心。你可以想象一下，一位伯爵在这里建起了他的堡垒和塔楼，农民和工匠在城堡的庇护下，沿着河流两岸搭建起房屋和磨坊，用石头筑起桥梁，连接起两岸的生活。小镇最初的轮廓，就在那时形成了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间来到十四世纪，一个关键的人物登场了：唐·特略（Don Tello），他是卡斯蒂利亚国王的兄弟，也是列巴纳的领主。他大力扶持波特斯，授予它市场特权。这意味着四面八方——山区、海岸、甚至更远地方的人们——都可以定期来这里赶集、交易。每周四的集市传统，就是从那时开始的，并一直延续到今天。想想看，几百年来，同样的广场上，回荡着同样的买卖声、牲畜的叫声、人们的交谈声，小镇的经济脉搏因此而强劲跳动。也是在这个时期，那些我们今天看到的、最标志性的石桥和防御塔楼（比如坚固的Infantado塔楼）被建造或加固起来，它们既是实用的交通和防御设施，也是领主权力和城镇繁荣的象征。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但波特斯的历史并非只有领主和集市。它还有一条隐秘的、精神层面的脉络——圣地亚哥朝圣之路。虽然最著名的法国之路在南边，但沿着西班牙北部海岸延伸的“北方之路”同样是一条古老的朝圣路径。波特斯，恰恰是这条路上一个重要的内陆岔路口和补给站。疲惫的朝圣者们从海岸线拐进来，在这里的教堂（如圣文森特教堂）祈祷、休息，获取继续深入山区前往圣地亚哥的勇气和给养。这些风尘仆仆的旅人带来了远方的故事、不同的文化和虔诚的信仰，它们像细雨一样，悄无声息地渗透进波特斯的石头缝隙里，丰富了小镇的精神底蕴。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，和平并非永恒。到了十九世纪初，拿破仑的军队横扫欧洲，西班牙也陷入惨烈的独立战争。波特斯所在的坎塔布里亚山区，成为了激烈的游击战场。法国军队曾占领并破坏了这个小镇，那些古老的石桥和塔楼见证了枪炮与刀剑。战争给小镇留下了伤痕，但也激发了当地人民强烈的独立和反抗精神。战后，像许多西班牙乡村一样，波特斯经历了缓慢的恢复和一段相对沉寂的时期，直到二十世纪中后期，随着公路的开通和旅游业的发展，这座沉睡在群山中的宝石，才再次向世界展现出它那未经雕琢的、永恒的美。今天的繁荣，是建立在它数个世纪以来作为市集、驿站和家园的深厚根基之上的。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味波特斯，请务必安排一整天的时间，甚至在此住上一晚。理想的状态是在上午十点前抵达，那时旅游巴士还未涌入，小镇沐浴在柔和的晨光中，属于本地人的生活刚刚开始。建议的游览节奏是“先全景，再细节，后沉浸”。先从外围的高处或河边整体感受小镇与山川的构图，然后深入迷宫般的老街，逐一探访那些地标，最后把自己融入广场或河岸咖啡馆的悠闲氛围里，等待黄昏的魔法降临。这样的安排能让你体验到小镇从清晨的宁静、白日的活力到傍晚的温馨的完整韵律。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周三和周六上午有传统集市，虽然热闹但也拥挤，若想体验本地生活可前往，若追求绝对宁静则建议避开这两个时段。小镇街道多为鹅卵石路面且有起伏，请务必穿一双舒适防滑的步行鞋。这里的商家和居民都非常友善，但小镇节奏很慢，点餐或购物时请多一份耐心，享受这种慢本身就是旅行的一部分。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨先从镇外德瓦河对岸的小径开始，找一个能同时将四座石桥、层层叠叠的橘红色屋顶和背后巍峨的欧洲之巅群山框入眼帘的位置，静静感受这份如画般的宁静构图。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着河岸漫步，依次走过古老的圣卡耶塔诺桥和坎德拉里亚桥，把手放在冰凉粗糙的石头桥栏上，低头看碧绿的河水急速穿过桥洞，激起白色的水花。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过桥，让自己迷失在错综复杂的老城区石板巷弄里，抬头留意那些古老的木质阳台、斑驳的家族纹章石雕，以及从窗户里探出头来的茂盛花草。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到并仰望那座敦实的、用巨石砌成的Infantado钟楼，想象它在中世纪作为防御堡垒和权力象征的威严模样。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进安静阴凉的圣文森特教堂，在略显昏暗的光线下寻找那些罗马式风格的遗迹，感受几个世纪以来朝圣者和村民在此祷告累积的沉静气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在午餐时间，一定要挤进主广场（独立广场）周围某家人声鼎沸的小酒馆，点一份当地特色的炖山羊肉或豆子炖肉，和当地人一起享用。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后沿着奎维加河 quieter 的一岸散步，寻找那些仍在运作的老水车磨坊的遗迹，听听水声和鸟鸣交织的自然乐章。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把黄昏时分留给坎德拉里亚桥附近，找一家户外咖啡馆坐下，点一杯苹果酒或咖啡，看夕阳的金色光芒如何一点点为石桥、塔楼和远处的雪山镀上暖调的光晕。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`德瓦河东岸远景位`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时内，站在通往Fuente Dé公路的东侧高坡上，使用长焦镜头压缩空间，可以拍出古桥、塔楼与背后雪山同框的经典明信片角度。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`坎德拉里亚桥洞框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光西斜时，站在桥下河岸的石阶上，以古老的石头桥洞作为前景框架，拍摄对岸色彩斑斓的房屋和远处的山峦，层次感极强。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老城区巷弄光影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射时，寻找那些狭窄巷子，捕捉阳光照射在斑驳黄色墙面上、与深蓝色木窗和鲜花形成的强烈色彩与光影对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`Infantado塔楼仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午晚些时候，站在塔楼脚下的小广场仰拍，利用广角镜头突出塔楼的雄伟质感，同时将一角蓝天和飘过的云朵纳入画面，增加动感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`奎维加河畔慢门流水`}</h4>
                  <p className="text-sm text-gray-700">{`阴天或光线柔和时，在河畔使用三脚架和减光镜，以慢速快门将潺潺流水拍成丝绸般的雾状，与岸边坚硬的石头和绿植形成动静对比。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄当地居民，尤其是长者，请务必先微笑并征得同意，一个简单的“¿Foto？”和友善的眼神就能打开沟通之门。小镇许多角落都很上镜，不妨多留意门窗、楼梯、晾晒的衣物等生活细节。无人机飞行在西班牙受到严格管制，在历史城镇中心上空飞行基本被禁止，请务必遵守当地法规。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河景阳台民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在老桥边一栋翻新过的百年石屋三楼，私人小阳台正对坎德拉里亚桥和流水，夜晚在流水声中入眠，清晨被桥上的脚步声和阳光唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`山中隐居客栈`}</h4>
                  <p className="text-sm text-green-800">{`位于小镇边缘略高的坡地上，由农舍改造，房间是原始的木头和石墙，早餐有自家果园的果酱，露台能俯瞰整个小镇屋顶的波浪和远山全景。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`家庭式舒适旅舍`}</h4>
                  <p className="text-sm text-yellow-800">{`由热情好客的当地家庭经营，位置就在主广场旁，房间干净温馨，老板娘会给你手绘地图并推荐连导游书上都找不到的徒步小径。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`精品设计酒店`}</h4>
                  <p className="text-sm text-purple-800">{`坐落在镇中心一座精心修复的历史建筑内，完美融合了原始的石头拱顶、木梁等元素与现代斯堪的纳维亚风格的设计，细节处处体现质感。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（7-8月）和节假日（如圣周）是绝对旺季，住宿需提前数月预订。小镇夜间极其安静安全，可以放心散步。选择住宿时，如果对噪音敏感，请尽量避免直接面向主广场的房间，尽管景色好，但周末夜晚可能持续到较晚。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开波特斯许久之后，我发现自己最怀念的，不是某一张具体的照片，也不是某一顿美味，而是一种整体的“感觉”。那是一种双脚踩在坚实又光滑的鹅卵石上的触感，是眼睛里永远有绿色山川作为背景的安全感，是耳朵里持续不断的、令人心安的白噪音——流水声、钟声、低语的人声。在这个被群山深情环抱的小小世界里，现代社会的喧嚣和焦虑仿佛被那一道道石桥和一层层山峦过滤掉了，只剩下生活最本真、最朴素的节奏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个处处追求“网红”、“打卡”和“震撼”的时代，波特斯就像一个温和的反叛者。它不张扬，不讨好，只是静静地、美丽地存在着，按照它自己的千年韵律呼吸。它提醒着我们，旅行的意义，有时候不在于收集了多少地标，而在于你是否真正地“进入”了一个地方，像当地人一样在桥上站一会儿，无所事事地看一会儿水，允许自己被那种缓慢而坚实的安宁所浸透。如果你也渴望在旅途中找到一处能让心跳同步放缓，能让灵魂深呼吸的所在，那么，这个坎塔布里亚的“桥之镇”，值得你跨越山海，前来与它共度一段时光。它或许不会改变你的人生，但一定会温柔地安抚你的旅途。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/segovia-aqueduct" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塞
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塞哥维亚罗马水道桥</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Segovia Aqueduct</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/caceres-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡塞雷斯老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cáceres Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/albarracin-medieval-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔瓦拉辛</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Albarracín</p>
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
