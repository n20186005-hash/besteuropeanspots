import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '班斯卡-比斯特里察老城广场 倾斜钟塔｜探访昔日“铜都”的心脏与那座倔强倾斜了四个世纪的钟楼 - 最佳欧洲景点',
  description: '第一眼看到班斯卡-比斯特里察的老城广场，你可能会愣了一下。它不像布拉格广场那样恢弘得令人屏息，也没有维也纳广场那种严整的皇家气派。它的魅力是慢慢渗出来的，像一杯需要细细品味的当地梅子白兰地。早晨的阳光斜斜地打在那些粉彩色的墙面上——鹅黄、淡绿、珊瑚粉，每一栋房子的颜色都像是被岁月磨去了棱角，变得格外...',
}

export default function BanskaBystricaLeaningClockTowerSquarePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '斯洛伐克', href: '/destinations/slovakia' },
            { label: '班斯卡-比斯特里察', href: '/destinations/slovakia' },
            { label: '班斯卡-比斯特里察老城广场与倾斜钟塔', href: '/attractions/banska-bystrica-leaning-clock-tower-square' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`班斯卡-比斯特里察老城广场与倾斜钟塔・Banská Bystrica Old Town Square & Leaning Clock Tower・斯洛伐克・班斯卡-比斯特里察`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到班斯卡-比斯特里察的老城广场，你可能会愣了一下。它不像布拉格广场那样恢弘得令人屏息，也没有维也纳广场那种严整的皇家气派。它的魅力是慢慢渗出来的，像一杯需要细细品味的当地梅子白兰地。早晨的阳光斜斜地打在那些粉彩色的墙面上——鹅黄、淡绿、珊瑚粉，每一栋房子的颜色都像是被岁月磨去了棱角，变得格外温柔。空气中飘着一丝咖啡香，混合着从附近面包房传来的、热腾腾的酵母味，还有石板路被夜露浸润后特有的、清冽的石头气息。
广场上最抓人眼球的，无疑是那座白色的钟塔。但等等，它怎么是歪的？那不是你的错觉。这座建于16世纪的塔楼，真的以一种倔强而又略显顽皮的姿态，清晰地朝东南方向倾斜着。看着它，你会不自觉地也跟着歪一下头，心里泛起一种奇妙的亲切感——它不完美，它有“缺陷”，但它就这样站了四百多年，成了这座城市最诚实的地标。钟声响起时，声音似乎也因为那倾斜的角度，传播得有些悠扬和不规则，像一位老者在略带沙哑地讲述故事。
这里远不止是一个旅游景点。上午十点，你会看到提着菜篮子的老奶奶慢悠悠地穿过广场，去市场买菜；穿着西装的上班族在喷泉旁的长椅上匆匆吃完一个三明治；几个学生靠着倾斜钟塔的基座，笑着讨论什么。这个广场，依然是这座城市跳动的心脏。它的核心魅力，就在于这种毫无隔阂的“活着”的状态。历史不是被锁在玻璃柜里，而是砌在每一块墙砖里，流淌在每一个在此生活的普通人的日常中。你感受到的，是一个历经矿业辉煌、战争创伤，却始终保持着从容与韧性的中欧小城的全部温度。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到班斯卡-比斯特里察的老城广场，你可能会愣了一下。它不像布拉格广场那样恢弘得令人屏息，也没有维也纳广场那种严整的皇家气派。它的魅力是慢慢渗出来的，像一杯需要细细品味的当地梅子白兰地。早晨的阳光斜斜地打在那些粉彩色的墙面上——鹅黄、淡绿、珊瑚粉，每一栋房子的颜色都像是被岁月磨去了棱角，变得格外温柔。空气中飘着一丝咖啡香，混合着从附近面包房传来的、热腾腾的酵母味，还有石板路被夜露浸润后特有的、清冽的石头气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`广场上最抓人眼球的，无疑是那座白色的钟塔。但等等，它怎么是歪的？那不是你的错觉。这座建于16世纪的塔楼，真的以一种倔强而又略显顽皮的姿态，清晰地朝东南方向倾斜着。看着它，你会不自觉地也跟着歪一下头，心里泛起一种奇妙的亲切感——它不完美，它有“缺陷”，但它就这样站了四百多年，成了这座城市最诚实的地标。钟声响起时，声音似乎也因为那倾斜的角度，传播得有些悠扬和不规则，像一位老者在略带沙哑地讲述故事。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里远不止是一个旅游景点。上午十点，你会看到提着菜篮子的老奶奶慢悠悠地穿过广场，去市场买菜；穿着西装的上班族在喷泉旁的长椅上匆匆吃完一个三明治；几个学生靠着倾斜钟塔的基座，笑着讨论什么。这个广场，依然是这座城市跳动的心脏。它的核心魅力，就在于这种毫无隔阂的“活着”的状态。历史不是被锁在玻璃柜里，而是砌在每一块墙砖里，流淌在每一个在此生活的普通人的日常中。你感受到的，是一个历经矿业辉煌、战争创伤，却始终保持着从容与韧性的中欧小城的全部温度。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`班斯卡-比斯特里察老城广场与倾斜钟塔`} />
                <InfoRow label="英文名称" value={`Banská Bystrica Old Town Square & Leaning Clock Tower`} />
                <InfoRow label="正式名称" value={`Námestie SNP with the Leaning Clock Tower`} />
                <InfoRow label="国家" value={`斯洛伐克`} />
                <InfoRow label="城市" value={`班斯卡-比斯特里察`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这里是斯洛伐克中部昔日“铜矿帝国”的经济与行政中心，也是二战后斯洛伐克民族起义的精神象征地。`} />
                <InfoRow label="建筑特色" value={`广场被一圈色彩柔和、高度不一的文艺复兴与巴洛克风格市民房屋环绕，中心矗立着因地基不稳而明显倾斜的白色钟塔，形成独特的天际线。`} />
                <InfoRow label="建筑风格" value={`混合了哥特式（钟塔基座）、文艺复兴（广场大部分房屋立面）及后期巴洛克修复风格的和谐共生体。`} />
                <InfoRow label="文化价值" value={`是了解斯洛伐克矿业历史、中世纪城市自治以及20世纪反法西斯抗争历史的活态露天博物馆。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`广场全天24小时开放。倾斜钟塔的博物馆和观景台开放时间较为复杂：夏季（5月至9月）通常为周二至周日 9:00-17:00，冬季（10月至次年4月）开放时间缩短为10:00-15:00，且周一闭馆。每年1月可能有为期两周的维护性关闭。重要节假日（如圣诞节、元旦）前最好在当地旅游信息中心网站二次确认。`} />
              <InfoRow label="门票价格" value={`进入广场免费。攀登倾斜钟塔参观博物馆和观景台需购票：标准成人票约4欧元，学生、儿童及65岁以上长者享受半价优惠，6岁以下儿童免费。家庭票（2大2小）约10欧元。门票通常在现场塔底的小售票处购买。`} />
              <InfoRow label="地址" value={`Námestie SNP 1, 974 01 Banská Bystrica, Slovakia`} />
              <InfoRow label="交通方式" value={`从首都布拉迪斯拉发出发最方便：乘坐火车，从布拉迪斯拉发主站到班斯卡-比斯特里察火车站，车程约3-3.5小时，班次频繁（约每小时一班），建议提前在斯洛伐克铁路官网购票可选折扣价。从科希策国际机场出发则需先乘巴士或火车到科希策市中心，再转乘火车（约2.5小时）抵达。抵达班斯卡-比斯特里察火车站后，广场就在市中心，步行约15-20分钟即可到达，或乘坐市内公交（1、2路等）在“Námestie SNP”站下车即到。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要说清这座广场和那座歪塔的故事，就得把时钟拨回到中世纪。那时候，班斯卡-比斯特里察可了不得，它的地下埋藏着欧洲最富饶的铜矿。从13世纪开始，德国的萨克森矿工们被特许权吸引而来，在这里建立了高度自治的矿业城镇。财富像泉水一样从地底涌出，这座广场，当时可能还只是一个热闹的市集，周围开始为那些富有的矿主和商人修建起华丽的住宅。最初的钟塔，在1552年矗立起来时，是笔直的。它既是瞭望塔，也是警钟楼，守护着这座“铜都”的财富与安宁。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，大地似乎并不甘心一直被掏空。由于地下矿道纵横交错，部分区域被采空，地基开始发生缓慢而不均匀的下沉。到了17世纪，人们惊恐地发现，他们引以为傲的钟塔，开始慢慢 leaning 了！当时的工程师想尽办法加固，但倾斜已然无法逆转。1689年一场灾难性的大火席卷了全城，广场周围的木质房屋化为灰烬，但石质的钟塔却奇迹般地幸存了下来，只是被熏得更黑了。灾后重建时，人们用当时流行的巴洛克风格装饰了房屋立面，于是我们今天看到的，就是这种色彩明快、装饰精巧的模样，与那栋严肃歪斜的哥特式钟塔形成了跨越时空的对话。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间快进到20世纪，广场被赋予了全新的、沉重的意义。1944年，斯洛伐克民族起义在这里爆发，广场成为了反抗纳粹占领的指挥中心和精神象征。如今广场的全名“斯洛伐克民族起义广场”就源于此。你可以想象，在那个烽火连天的年代，这座倾斜的钟塔依然默默注视着广场上聚集的人群、激昂的演讲、以及后来的悲壮与牺牲。战后，在社会主义时期，广场周边不可避免地增添了一些那个时代的建筑，但它们并没有吞噬掉古老的核心，反而形成了一种奇特的历史层次感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如今，当你站在广场中央环顾四周，就像在阅读一本立体的历史书。那一圈色彩房子，是中世纪矿业财富的余晖；那座歪塔，是大自然力量与人类建筑较量的无声证明；广场的名字和那些纪念碑，铭刻着20世纪的抗争与民族记忆。它没有在某个时代凝固，而是一直在呼吸、在生长、在承载。这种连续不断的“层叠”，才是它最深厚的历史肌理。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受这里的韵味，建议安排一整个白天。最佳抵达时间是清晨8点左右，这时游客还未涌入，阳光柔和，你能看到广场最本真、最生活化的一面。整体游览节奏宜慢不宜快，核心在于“浸泡”而非“打卡”。上午以广场和钟塔为核心，深入感受建筑与晨间氛围；中午在广场周边寻找地道餐馆午餐；下午则扩展到广场辐射出的几条古老街巷和重要博物馆，了解更完整的历史脉络。这样的安排能让你从感官体验到知识获取，层层深入地理解这座城市。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`钟塔楼梯非常狭窄陡峭且光线昏暗，穿一双舒适防滑的平底鞋是绝对必要的，背包过大也可能被要求寄存。广场及周边餐馆在周末中午常常爆满，最好错峰用餐或提前一天简单预订。对历史文化特别感兴趣的朋友，不妨先去旅游信息中心（通常就在广场一角）聘请一位本地向导，他们能讲出很多旅游手册上没有的生动轶事。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨第一站就从抚摸倾斜钟塔脚下那些被无数人摩挲得温润的古老石基开始，仰头感受它那岌岌可危又稳如泰山的矛盾美感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺时针绕着广场走一圈，仔细观察每一栋彩色房屋立面上各不相同的文艺复兴壁画、徽章和石雕窗棂，猜猜它们曾经的主人是谁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要登上钟塔的观景台，在狭窄的螺旋石阶盘旋而上时感受塔身的倾斜，并在顶层将五彩斑斓的广场屋顶和远处翠绿的山丘一并收入眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从广场南侧的小拱门钻进去，探索那些如血管般延伸出去的、铺着鹅卵石的静谧小巷，这里藏着许多手艺作坊和古老酒窖的入口。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午餐时间回到广场，选择一家有户外座位的餐厅，点一份斯洛伐克特色的“羊奶酪面疙瘩”，边吃边看来往的行人和广场中央的雕塑群。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午前往几步之遥的斯洛伐克民族起义博物馆，在那座现代主义的巨大混凝土建筑里，通过丰富的史料理解1944年那段决定性的历史。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果还有余力，从广场向北散步十分钟，去探访那座与矿业历史息息相关的圣母升天教堂，看看里面精美的矿工主题祭坛画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分再度回到广场，找一张长椅坐下，看着夕阳的金辉将白色钟塔的倾斜身影拉得更长，等待广场华灯初上的魔幻时刻。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`广场东北角仰拍钟塔`}</h4>
                  <p className="text-sm text-gray-700">{`下午三到五点，阳光从西南方照射，能清晰地勾勒出钟塔倾斜的轮廓与白色的塔身，以彩色房屋为背景，构图极具戏剧张力。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`钟塔观景台俯拍广场全景`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点后光线充足时，将相机镜头贴近观景台的铁网孔洞，可以拍出五彩屋顶如积木般铺展的经典画面，远处山峦作为自然背景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`南侧小巷拍摄钟塔侧影`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前半小时，从小巷深处回望，利用巷道的纵深感作为框架，捕捉钟塔在两侧古老山墙间“挤”出来的独特身影。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`市政厅拱门下的对称构图`}</h4>
                  <p className="text-sm text-gray-700">{`站在连接广场与另一区域的拱门下，将拱门作为画框，拍摄框内远处的钟塔与行人，形成完美的景深与对称美。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`喷泉旁的人文瞬间`}</h4>
                  <p className="text-sm text-gray-700">{`全天皆可，但以午后为佳，聚焦于喷泉边休息的当地人、嬉戏的孩童或街头艺人，将倾斜的钟塔作为背景虚化，讲述生动的广场故事。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机拍摄前务必查询当地法规，历史城区中心通常有严格限制。拍摄当地居民，尤其是长者，请务必先微笑示意并获得默许，这是基本的尊重。冬季雪后是拍摄的绝佳时机，白雪覆盖的彩色屋顶与白色钟塔会构成一幅梦幻的单色调画面。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`广场旁一栋16世纪商人宅邸改造的精品酒店，房间保留了原始的拱形石顶和木梁，晚上能听到隐约的钟声，仿佛睡在历史里。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`现代便利之选`}</h4>
                  <p className="text-sm text-green-800">{`步行至广场仅5分钟的四星级设计酒店，拥有全景玻璃餐厅，可以一边享用丰盛早餐一边远眺钟塔，设施新颖且服务国际化。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`温馨家庭之选`}</h4>
                  <p className="text-sm text-yellow-800">{`位于安静小巷中的家庭式公寓，由一对老夫妇经营，房间带有小厨房和阳台，主人会热情地为你介绍只有本地人才知道的美食角落。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`自然风光之选`}</h4>
                  <p className="text-sm text-purple-800">{`坐落在城市边缘山坡上的小木屋民宿，需要乘坐一小段公交，但推窗即是森林与远山，适合自驾且追求静谧晨昏的旅行者。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`广场周边的老建筑酒店虽然风情十足，但隔音可能相对现代酒店稍差，浅眠者建议备上耳塞。夏季和圣诞市场期间是旺季，住宿非常紧俏，务必提前至少两个月预订。城市治安总体很好，但选择较偏远住宿时，建议确认好夜间返回的交通方式。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开班斯卡-比斯特里察很久以后，我脑海里最清晰的画面，依然是那座倾斜的钟塔。它不像比萨斜塔那样举世闻名，被无数的脚手架和修复工程包围。它就在这里，带着一点任性的歪斜，安静地存在于人们的日常生活里。这种“不完美的坦然”，或许正是这个地方最打动我的内核。它告诉我们，历史无需被粉饰得完美无缺，伤疤、错误、甚至因自然之力造成的“瑕疵”，共同构成了真实的、有血有肉的过往。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、追求“网红打卡”完美角度的快节奏旅行时代，班斯卡-比斯特里察的广场和钟塔提供了一种截然不同的价值。它邀请你停下来，不只是拍一张证明“我来过”的照片，而是去触摸那些冰凉的石头，去聆听那不太规整的钟声，去理解一层层历史如何像地质沉积岩一样在这里叠加。它让你看到，一个地方真正的魅力，不在于它有多符合明信片的标准，而在于它有多少未被磨灭的故事和持续跳动的生活脉搏。对于任何一位渴望超越表面、渴望与目的地进行深度精神对话的旅人来说，这里都是一堂关于历史韧性、生活本真与接受不完美的、无声却深刻的必修课。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/levoca-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莱
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莱沃恰老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Levoča Old Town</p>
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
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
