import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '维谢格拉德 Visegrád｜云端皇宫废墟与多瑙河湾绝景 - 最佳欧洲景点',
  description: '相信我，去维谢格拉德之前，千万别吃太饱。因为你即将经历的，是一场对小腿肚的虔诚朝圣。把车停在半山腰，或者从渡轮码头晃晃悠悠地走上来，抬头望去，那条蜿蜒向上的碎石小径，消失在密林的尽头，而你知道，那座传说中的“云端皇宫”就在山顶等着。一开始，你还能闲情逸致地听听鸟叫，闻着松针和泥土被阳光晒暖的清新气味...',
}

export default function VisegradCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '维谢格拉德（多瑙河湾的云端皇宫遗址）', href: '/attractions/visegrad-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`维谢格拉德（多瑙河湾的云端皇宫遗址）・Visegrád・匈牙利・维谢格拉德（佩斯州）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`相信我，去维谢格拉德之前，千万别吃太饱。因为你即将经历的，是一场对小腿肚的虔诚朝圣。把车停在半山腰，或者从渡轮码头晃晃悠悠地走上来，抬头望去，那条蜿蜒向上的碎石小径，消失在密林的尽头，而你知道，那座传说中的“云端皇宫”就在山顶等着。一开始，你还能闲情逸致地听听鸟叫，闻着松针和泥土被阳光晒暖的清新气味。但走着走着，呼吸就开始和脚步同频，汗水悄悄沁出。直到一个拐角，树林突然向两旁退开，一片令人瞬间屏息的景象撞进眼里。
那不是一座孤零零的城堡，而是一大片依着山势铺开的、蜂蜜色的石头废墟，像巨人的骨骼般嶙峋地指向湛蓝的天空。多瑙河在这里甩出了一个近乎完美的马蹄形大湾，翠绿色的河水像柔软的绸带，静静地环绕着对岸的群山和山脚下彩色的房子。风声立刻变得不一样了，它在残存的拱门和窗洞间穿梭，发出低沉又空旷的呜咽，仿佛在代替那些逝去的国王和骑士，继续吟唱。脚下每一块被磨得发亮的石板，都曾被无数鞋履踏过，有沉重的铁靴，也有华丽的宫廷舞鞋。
你会发现，本地人把这里当成自家的后花园。周末常看到一家老小带着野餐篮上来，老人们坐在废墟的矮墙上，指着远处的河湾给孙辈讲故事；年轻的情侣则找个安静的角落，分享一副耳机。它不像布达佩斯城堡山那样游人如织，这里有一种共享秘密的亲密感。它的核心魅力，就在于这种极致的反差：攀登的艰辛与登顶后视觉盛宴的极致奖励；昔日皇家权力中心的喧嚣与今日废墟之上永恒的宁静。你触摸着冰冷的石墙，感受到的不仅是历史，还有一种站在世界之巅、时间之外的辽阔与孤独。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`相信我，去维谢格拉德之前，千万别吃太饱。因为你即将经历的，是一场对小腿肚的虔诚朝圣。把车停在半山腰，或者从渡轮码头晃晃悠悠地走上来，抬头望去，那条蜿蜒向上的碎石小径，消失在密林的尽头，而你知道，那座传说中的“云端皇宫”就在山顶等着。一开始，你还能闲情逸致地听听鸟叫，闻着松针和泥土被阳光晒暖的清新气味。但走着走着，呼吸就开始和脚步同频，汗水悄悄沁出。直到一个拐角，树林突然向两旁退开，一片令人瞬间屏息的景象撞进眼里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`那不是一座孤零零的城堡，而是一大片依着山势铺开的、蜂蜜色的石头废墟，像巨人的骨骼般嶙峋地指向湛蓝的天空。多瑙河在这里甩出了一个近乎完美的马蹄形大湾，翠绿色的河水像柔软的绸带，静静地环绕着对岸的群山和山脚下彩色的房子。风声立刻变得不一样了，它在残存的拱门和窗洞间穿梭，发出低沉又空旷的呜咽，仿佛在代替那些逝去的国王和骑士，继续吟唱。脚下每一块被磨得发亮的石板，都曾被无数鞋履踏过，有沉重的铁靴，也有华丽的宫廷舞鞋。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你会发现，本地人把这里当成自家的后花园。周末常看到一家老小带着野餐篮上来，老人们坐在废墟的矮墙上，指着远处的河湾给孙辈讲故事；年轻的情侣则找个安静的角落，分享一副耳机。它不像布达佩斯城堡山那样游人如织，这里有一种共享秘密的亲密感。它的核心魅力，就在于这种极致的反差：攀登的艰辛与登顶后视觉盛宴的极致奖励；昔日皇家权力中心的喧嚣与今日废墟之上永恒的宁静。你触摸着冰冷的石墙，感受到的不仅是历史，还有一种站在世界之巅、时间之外的辽阔与孤独。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`维谢格拉德（多瑙河湾的云端皇宫遗址）`} />
                <InfoRow label="英文名称" value={`Visegrád`} />
                <InfoRow label="正式名称" value={`Visegrád`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`维谢格拉德（佩斯州）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`14世纪匈牙利安茹王朝的荣耀中心，见证了中欧王权的巅峰与博弈，著名的“维谢格拉德集团”也以此地为名。`} />
                <InfoRow label="建筑特色" value={`雄踞于多瑙河湾之巅的防御性宫殿复合体，将军事要塞的险峻与皇家宫殿的奢华罕见地融为一体。`} />
                <InfoRow label="建筑风格" value={`以哥特式为核心，混合了文艺复兴早期元素，但现存主体是经现代考古发掘和部分修复的壮丽废墟。`} />
                <InfoRow label="文化价值" value={`它是匈牙利民族精神的象征地之一，其废墟美学与山河全景共同讲述着王朝兴衰，是解读中欧历史的一把关键钥匙。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡区（上城堡）开放时间随季节变化极大：4月至10月，通常为每天上午9点至下午5点，夏季（7-8月）可能延长至下午6点；11月至3月，开放时间大幅缩短，通常为周二至周日上午10点至下午4点，周一闭馆，且冬季常因天气（如大雪、结冰）临时关闭。下城堡及所罗门塔的开放时间较为稳定，但建议出行前务必查询官方网站，因为匈牙利这类古迹的管理非常“随性”，可能因维修、考古或节庆活动调整。`} />
              <InfoRow label="门票价格" value={`上城堡（主宫殿遗址）成人票约为2200匈牙利福林（约6欧元），学生及老人票有折扣。下城堡和所罗门塔通常有联票，价格在3500福林左右。如果自驾，山下停车场另收费。门票价格每年可能有小幅上涨，且福林汇率波动大，建议准备少量现金。6岁以下儿童免费。`} />
              <InfoRow label="地址" value={`Visegrád, Fő utca 31, 2025 Hungary`} />
              <InfoRow label="交通方式" value={`从布达佩斯出发是最佳选择。火车+巴士：从布达佩斯Nyugati火车站乘坐火车到Nagymaros-Visegrád站（约40-50分钟，班次频繁），出站后即是多瑙河渡轮码头，乘坐小渡轮（仅几分钟）到达对岸的维谢格拉德，下船后沿着清晰路标步行20分钟上山，或搭乘稀少的本地巴士前往城堡脚下。自驾：从布达佩斯沿11号公路向北，约45分钟车程，风景极佳，有清晰路标指向城堡停车场（停车后仍需徒步15分钟上山）。巴士：从布达佩斯Árpád híd汽车站有直达维谢格拉德的巴士，但班次较少，耗时约1.5小时。最推荐火车+渡轮的组合，体验多瑙河摆渡的乐趣。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲维谢格拉德的故事，得先从一场可怕的灾难说起。1241年，蒙古铁骑如飓风般席卷匈牙利，几乎将王国摧毁。幸存下来的贝拉四世国王痛定思痛，发起了一场轰轰烈烈的“城堡修筑运动”。维谢格拉德这座扼守多瑙河战略弯道的山头，自然成了首选。最初的堡垒纯粹是为了防御，粗糙、坚固，充满了恐惧的痕迹。但历史的转折点在一个世纪后到来。1308年，安茹家族的查理·罗伯特加冕为匈牙利国王，这位有着法国和意大利血统的君主，渴望建立一个强大、文明、能与西欧宫廷媲美的中心。他的目光，落在了维谢格拉德。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，奇迹发生了。查理·罗伯特，尤其是他的儿子拉约什大王，将这座军事要塞彻底改造。他们请来了法国和意大利的建筑师、工匠，花费巨资，在山顶建造了一座前所未有的“宫殿城堡”。想象一下，在14世纪中叶，当欧洲各地的使节沿着险峻的山路来到这里，穿过重重防御后，看到的不是阴暗的兵营，而是一座拥有喷泉花园、装饰着华丽壁画和雕塑、窗户能俯瞰无敌河景的奢华宫殿。拉约什大王在这里接见神圣罗马帝国皇帝，举办骑士比武和盛大庆典，维谢格拉德成了中欧最耀眼的政治与文化舞台，是匈牙利黄金时代的象征。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，所有的黄金时代都有落幕之时。1526年，匈牙利军队在莫哈奇战役中被奥斯曼帝国击溃，王国解体。维谢格拉德的命运急转直下。它虽然坚守了很长时间，但最终在17世纪被哈布斯堡王朝的军队为了不让其落入土耳其人之手而主动炸毁。辉煌的宫殿在硝烟中化为废墟，渐渐被泥土和荒草掩埋，被人遗忘。往日的歌声变成了山风的哭泣，宫廷的灯火化作了天上的星辰。它沉睡了近三百年。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到20世纪，考古学家们的铲子才小心翼翼地拨开历史的尘埃，让这座沉睡的巨人逐渐苏醒。一砖一瓦的清理，一幅壁画的复原，一个地窖的发现，都像拼图一样，慢慢重现了它昔日的轮廓。现代的修复非常克制，没有把它重建得金碧辉煌，而是保留了废墟那种震撼人心的残缺美。更妙的是，20世纪90年代，匈牙利、波兰和捷克斯洛伐克的领导人选择在这里会晤，成立了“维谢格拉德集团”，这个古老的名字再次成为中欧合作的象征。从防御蒙古的堡垒，到辉煌的皇家宫殿，再到被遗忘的废墟，最终成为区域合作的标志，维谢格拉德的层叠历史，本身就是一部欧洲的微型史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的维谢格拉德之旅需要一整天，并且强烈建议从布达佩斯早出发。理想节奏是：上午约9点抵达山下小镇，先感受宁静的河滨氛围，然后以充沛的体力攻克上城堡；下午探索下城堡和小镇，傍晚在多瑙河畔等待日落。这样安排既能避开可能出现的午后旅行团，也能享受晨光与夕照两种截然不同的城堡光影。整体游览是自下而上的“朝圣”过程，体力消耗中等偏上，请务必穿着最舒适的步行鞋。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必带足水和少量零食，山顶只有一个小纪念品亭，补给选项有限。穿着防滑耐磨的徒步鞋是关键，部分碎石路段很滑。夏季注意防晒，山上几乎没有遮阴处；冬季则要格外小心冰面。山下小镇的公共厕所是上山前最后的“现代化设施”。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`先从维谢格拉德小镇的渡轮码头或主街开始，在河畔的咖啡馆喝一小杯浓缩咖啡，看着平静的多瑙河和对岸的青山醒醒神。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着清晰标记的“Castle”小路开始向上攀登，穿过安静的居民区和林间小道，感受从市井生活向历史秘境过渡的奇妙过程。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先到达并参观宏伟的所罗门塔和下城堡，这里展陈丰富，是了解城堡整体历史和防御体系的绝佳课前预习。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`继续向上，挑战最后一段也是最陡峭的山路，当气喘吁吁地穿过古老的山门，巨大宫殿废墟的全景将作为给你的终极奖赏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在废墟中放任自己迷路，用手触摸不同建筑石材的纹理，寻找那些幸存下来的石雕细节和曾被宏伟窗框框住的河湾风景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到那个位于最西端的突出观景台，站在那里，让360度的多瑙河湾全景狂风般灌入你的眼睛和记忆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山时选择另一条小径，或许会经过一片安静的林地墓园，感受历史尘埃落定后的平和。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回到小镇，找一家有露台的餐厅，点一份炖牛肉或烤鳟鱼，就着金色的夕阳和眼前的城堡山影，慢慢回味这一天的攀登与穿越。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`从多瑙河对岸的Nagymaros镇一侧拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`最佳时间是晴朗的清晨或日落前，使用长焦镜头可以压缩空间，拍出城堡巍然立于河湾山巅、与水中倒影相映成画的经典明信片角度。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`上城堡主废墟的拱门框架`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，阳光从西侧照射，站在某个完好的拱门或窗洞内，以废墟为前景框架，将对岸的田野、河流与远山收纳其中，构图极具故事感和纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`所罗门塔的环形露台`}</h4>
                  <p className="text-sm text-gray-700">{`这里可以拍到维谢格拉德红色屋顶小镇与多瑙河同框的生动画面，建议使用广角镜头，将塔楼的石砖作为画面一角，展现人文与自然的结合。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`山顶观景台的360度全景`}</h4>
                  <p className="text-sm text-gray-700">{`这是拍摄多瑙河马蹄形大弯的绝对机位，日出和日落时分光影变幻最富戏剧性，拍视频延时摄影会有震撼效果。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`下山小径的回望视角`}</h4>
                  <p className="text-sm text-gray-700">{`在徒步下山途中，有几个转弯处可以回望城堡，这时城堡在侧逆光中呈现剪影或金边效果，结合蜿蜒的山路，能拍出很有征程感的照片。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效减少中世纪石墙表面的反光，并让天空与多瑙河的蓝色更饱和。航拍器在这里理论上可以飞，但必须严格遵守匈牙利法规，且强风天气非常多，务必谨慎。尊重古迹，避免为了拍照攀爬禁止进入的脆弱废墟区域。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河畔温馨民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在维谢格拉德小镇临水的传统房子里，清早被波光唤醒，晚上枕着潺潺水声入眠，房东老太太可能会请你尝一口自酿的杏子白兰地。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`选择小镇上由老建筑改造的精品酒店，房间保留了原始的石墙或木梁，却配备了最现代舒适的设施，露台正对城堡山，一杯葡萄酒在手，夜景无敌。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`山林隐居小屋`}</h4>
                  <p className="text-sm text-yellow-800">{`如果追求极致宁静，可以预订城堡山背后山林里的独栋小木屋，完全沉浸在大自然中，只有鸟鸣和风声为伴，体验一把现代隐士的感觉。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`对岸Nagymaros的河景公寓`}</h4>
                  <p className="text-sm text-purple-800">{`从另一个角度拥有维谢格拉德，乘坐渡轮即可往来，性价比往往更高，且能拍摄到城堡的日出晨雾绝景。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（6-8月）和周末预订要趁早，这里很受布达佩斯人周末度假的青睐。小镇治安极好，夜晚安静得只有虫鸣。如果不开车，住宿尽量选在渡轮码头或巴士站步行可达范围内，会方便很多。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开维谢格拉德时，我的小腿还在隐隐发酸，但心里却被一种奇特的充实感填满了。这种充实，不是来自于获取了多少知识，而是来自于一种“经历”——你用身体的力量丈量了历史的高度，用疲惫换来了穿越时空的视角。站在那片废墟上，你不会仅仅觉得自己是个游客，更像是一个时间的访客，一个故事的倾听者。那些石头不会说话，但风声、光影、还有脚下这片土地承载的记忆，都在以一种更磅礴的方式诉说。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求快速、便捷、新鲜刺激的世界里，维谢格拉德提供了一种相反的旅行价值：它要求你付出一点体力，忍受一点不确定（比如那变化莫测的开放时间），然后馈赠你无法用相机完全承载的广阔，和一种深沉的宁静。它提醒我们，有些最美的风景，需要转身离开主路，向上攀登才能看见；有些最动人的历史，就静默地存在于残缺与不朽之间。它不是一生必去的清单上一个打勾的项目，而是一个可以让你停下来，喘口气，回望山河与来路的地方。这，或许就是深度旅行最珍贵的意义。当你日后回想起多瑙河，记忆里不会只有布达佩斯的议会大厦，还会有这个云端之上，风之宫殿的悠长回响。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/veszprem-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维斯普雷姆老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Veszprém Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kalocsa-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    考
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">考洛乔老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kalocsa Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/eger-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃格尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Eger Castle</p>
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
