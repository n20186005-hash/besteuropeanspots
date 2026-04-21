import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '克雷姆尼察Kremnica｜探访欧洲仍在运转的古老“金币之城” - 最佳欧洲景点',
  description: '车子刚驶入克雷姆尼察河谷，你的目光就会被那座山丘牢牢抓住。那不是单纯的城堡，而是一整座从山顶“生长”下来的彩色城镇。红、黄、绿、蓝的屋顶像一块块巨大的积木，层层叠叠，簇拥着中央那座挺拔的圣凯瑟琳教堂钟塔。空气里有股清冽的味道，混合着松针、远处面包房的焦香，还有一丝若有若无的……金属气息？对，就是那种...',
}

export default function KremnicaMintTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '斯洛伐克', href: '/destinations/slovakia' },
            { label: '克雷姆尼察（行政上属班斯卡-比斯特理察州）', href: '/destinations/slovakia' },
            { label: '克雷姆尼察', href: '/attractions/kremnica-mint-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`克雷姆尼察・Kremnica・斯洛伐克・克雷姆尼察（行政上属班斯卡-比斯特理察州）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚驶入克雷姆尼察河谷，你的目光就会被那座山丘牢牢抓住。那不是单纯的城堡，而是一整座从山顶“生长”下来的彩色城镇。红、黄、绿、蓝的屋顶像一块块巨大的积木，层层叠叠，簇拥着中央那座挺拔的圣凯瑟琳教堂钟塔。空气里有股清冽的味道，混合着松针、远处面包房的焦香，还有一丝若有若无的……金属气息？对，就是那种冷冰冰的、硬邦邦的感觉，提醒着你，这座看似童话般的小镇，骨子里流淌着的是黄金与白银的血液。
把车停好，走上被几个世纪的人流磨得光滑发亮的石板主街，声音的层次感就出来了。最底层是游客的嗡嗡低语和相机快门声，之上是咖啡馆杯碟的轻碰，再往上，你开始能分辨出一种独特的、有节奏的“叮当”声，沉闷而坚定，从某个厚重的建筑深处传来。那不是教堂钟声，那是铸币厂的冲压机，还在工作。这种古今交织的错位感，是克雷姆尼察给你的第一个，也是最持久的魔法。当地人早已习惯了这背景音，老太太提着菜篮从容走过，仿佛那声音是她的心跳。这里的核心魅力，不是什么惊天动地的废墟，而是一种罕见的“连续性”——从1335年第一枚金币诞生起，造钱的使命从未真正中断。
爬到城镇广场，阳光正好洒在瘟疫纪念柱的圣母像上。广场不大，三面环绕着色彩柔和的文艺复兴联排屋，大多有着精致的拱廊。你会看到旅游局、咖啡馆，还有居民自家敞开的窗户。这里没有迪士尼式的刻意复古，生活就在历史里从容地展开。最震撼的一刻，是当你走进广场边的铸币厂博物馆，穿过介绍历史的展厅，推开一扇厚重的隔音门。瞬间，那“叮当”声被放大成震耳欲聋的轰鸣。巨大的机械在运转，穿着工装的技术人员（他们可能就是某位工匠的第N代传人）正将金属条送入机器。热气和机油味扑面而来。玻璃窗后，一枚枚闪亮的现代斯洛伐克欧元硬币正被生产出来。历史书上的名词，就这样变成了眼前震动着地板的生产线。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子刚驶入克雷姆尼察河谷，你的目光就会被那座山丘牢牢抓住。那不是单纯的城堡，而是一整座从山顶“生长”下来的彩色城镇。红、黄、绿、蓝的屋顶像一块块巨大的积木，层层叠叠，簇拥着中央那座挺拔的圣凯瑟琳教堂钟塔。空气里有股清冽的味道，混合着松针、远处面包房的焦香，还有一丝若有若无的……金属气息？对，就是那种冷冰冰的、硬邦邦的感觉，提醒着你，这座看似童话般的小镇，骨子里流淌着的是黄金与白银的血液。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`把车停好，走上被几个世纪的人流磨得光滑发亮的石板主街，声音的层次感就出来了。最底层是游客的嗡嗡低语和相机快门声，之上是咖啡馆杯碟的轻碰，再往上，你开始能分辨出一种独特的、有节奏的“叮当”声，沉闷而坚定，从某个厚重的建筑深处传来。那不是教堂钟声，那是铸币厂的冲压机，还在工作。这种古今交织的错位感，是克雷姆尼察给你的第一个，也是最持久的魔法。当地人早已习惯了这背景音，老太太提着菜篮从容走过，仿佛那声音是她的心跳。这里的核心魅力，不是什么惊天动地的废墟，而是一种罕见的“连续性”——从1335年第一枚金币诞生起，造钱的使命从未真正中断。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`爬到城镇广场，阳光正好洒在瘟疫纪念柱的圣母像上。广场不大，三面环绕着色彩柔和的文艺复兴联排屋，大多有着精致的拱廊。你会看到旅游局、咖啡馆，还有居民自家敞开的窗户。这里没有迪士尼式的刻意复古，生活就在历史里从容地展开。最震撼的一刻，是当你走进广场边的铸币厂博物馆，穿过介绍历史的展厅，推开一扇厚重的隔音门。瞬间，那“叮当”声被放大成震耳欲聋的轰鸣。巨大的机械在运转，穿着工装的技术人员（他们可能就是某位工匠的第N代传人）正将金属条送入机器。热气和机油味扑面而来。玻璃窗后，一枚枚闪亮的现代斯洛伐克欧元硬币正被生产出来。历史书上的名词，就这样变成了眼前震动着地板的生产线。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`克雷姆尼察`} />
                <InfoRow label="英文名称" value={`Kremnica`} />
                <InfoRow label="正式名称" value={`Kremnica`} />
                <InfoRow label="国家" value={`斯洛伐克`} />
                <InfoRow label="城市" value={`克雷姆尼察（行政上属班斯卡-比斯特理察州）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`14至17世纪，这里曾是神圣罗马帝国乃至整个中欧最大、最重要的铸币中心，其铸造的“克雷姆尼察金币”是当时国际贸易的硬通货。`} />
                <InfoRow label="建筑特色" value={`一座完美融合了防御、居住、行政和工业功能的立体山城，从山顶城堡到山腰彩色民居，再到山谷的铸币厂，层次分明，宛如中世纪社会的活态剖面图。`} />
                <InfoRow label="建筑风格" value={`以哥特式为核心基底，大量融合了文艺复兴和巴洛克式的装饰元素，形成独特的“矿业城镇”建筑风格，色彩明快，坚固实用。`} />
                <InfoRow label="文化价值" value={`它不仅是一座保存完好的中世纪城镇，更是一个持续运作超过700年的技术传统和金融历史的活态纪念碑，见证了欧洲货币经济的血脉流动。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`克雷姆尼察城堡及博物馆的开放时间较为复杂：历史铸币厂博物馆全年开放，夏季（5月-9月）一般为9:00-17:00，冬季（10月-4月）缩短为10:00-16:00，每周一闭馆。城堡主塔和防御工事通常在5月至10月间开放，具体时间可能微调，冬季只接受团体预约。建议出行前务必查看官网或当地旅游局的最新公告。城市本身是开放的，街道、广场和教堂可随时漫步。`} />
              <InfoRow label="门票价格" value={`铸币厂博物馆门票约为8欧元，提供英语导览。城堡区域门票约5欧元，登塔另需少量费用。有学生、老年人和家庭套票优惠。最超值的是“克雷姆尼察通票”，约12欧元，包含博物馆、城堡和城市历史展览。`} />
              <InfoRow label="地址" value={`Štefánikovo námestie 16/23, 967 01 Kremnica, Slovakia`} />
              <InfoRow label="交通方式" value={`最近的主要交通枢纽是班斯卡-比斯特理察市。从首都布拉迪斯拉发或科希策乘火车到班斯卡-比斯特理察（约2.5-3.5小时），然后转乘当地巴士前往克雷姆尼察（车程约40分钟，班次每小时1-2班，可在车站售票处或上车向司机购票）。如果你自驾，从班斯卡-比斯特理察沿537号公路向北开约30公里即达，古城外有付费停车场。这小城不通火车，巴士是最靠谱的公共选择。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从更早的时候说起。这片斯洛伐克中部山区的土壤下，埋藏着让人疯狂的财富——黄金。13世纪末，德国矿工们来到这里，像发现了新大陆。但真正改变一切的时刻，是1328年，匈牙利国王查理一世授予这片新兴矿区“皇家自由采矿城镇”的特权。这意味着巨大的自治权和财富。短短几年后，1335年，另一位国王查理·罗伯特大手一挥，决定在此建立皇家铸币厂。为什么是这里？因为金子就在家门口，省去了长途运输的风险和成本。于是，克雷姆尼察的命运齿轮，伴随着第一炉熔化的金水，开始以金币的形态飞速旋转。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`整个14、15世纪，是克雷姆尼察的黄金时代。它铸造的“弗洛林”金币，以其近乎完美的成色和重量，赢得了全欧洲的信任。从威尼斯到布鲁日，商人们认这个“牌子”。铸币厂成了城镇跳动的心脏，也吸引了最好的工匠、建筑师和商人。财富滚滚而来，人们开始用石头和艺术装点家园。山顶上，原本木质的城堡被改建成坚固的石堡，俯瞰并保护着下面的财富源泉。圣凯瑟琳教堂拔地而起，成为信仰和社区的中心。城镇用围墙把自己紧紧包裹，墙内是令人艳羡的繁荣，墙外是虎视眈眈的觊觎者。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，没有永恒的高峰。16世纪，奥斯曼帝国的扩张像阴影一样笼罩匈牙利王国。1526年莫哈奇战役的惨败后，王国分裂，克雷姆尼察成了对抗土耳其人的前线堡垒之一。城堡的防御工事被大大加强，那些我们今天看到的坚固棱堡和火药库，大多是那个紧张时代的产物。战乱影响了金矿开采，但铸币厂却因为要为战争融资而更加忙碌，只不过，金币里黄金的含量，开始悄悄地、无奈地降低。财富在战争的熔炉里被重新锻造，时而膨胀，时而缩水。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间的车轮转到18世纪，玛丽亚·特蕾莎女皇时代带来了新的变革。这位强权的统治者对铸币厂进行了现代化改造，引入了更先进的机械和技术。克雷姆尼察开始生产更大规模的铜币和银币，服务于庞大的哈布斯堡帝国。也正是在这个时期，城镇的巴洛克风格装饰流行起来，许多哥特式的老房子被赋予了新的华丽立面，形成了我们今天看到的混搭风貌。它从一座“金币专家”，转型成了服务于帝国庞大经济机器的“全能造币厂”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`20世纪的风暴席卷了这里两次。奥匈帝国解体后，克雷姆尼察归属新成立的捷克斯洛伐克。铸币厂继续运转，为国家生产硬币。二战后，共产主义时期，它依然没有停工，甚至为其他社会主义国家代工硬币。1993年天鹅绒分离后，斯洛伐克独立，克雷姆尼察铸币厂顺理成章地成为了这个新生国家的官方造币厂。如今，它一面为斯洛伐克生产流通的欧元硬币，一面用那些传承了百年的精湛工艺，打造收藏级的纪念币和奖章。从封建王国的金弗洛林，到欧盟的欧元，它的产品见证了整个欧洲的货币史。战争、政权更迭、意识形态变迁，什么都未能让它彻底沉默。这种坚韧的连续性，才是它最伟大的传奇。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`我强烈建议你安排至少一整晚的停留，才能真正感受这座城的昼夜韵律。理想的节奏是：第一天下午抵达，办理入住后，先从山脚开始，轻松漫步，适应氛围；第二天上午进行深度核心参观。这样安排能避开一日游的人潮，在清晨和傍晚独享古城的宁静。整体游览时间约需6-8小时，不包括往返交通和休闲用餐。重点是理解“城堡-城镇-铸币厂”这三者之间地理与功能上的联系。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`铸币厂车间的参观有时会因生产任务临时关闭，出发前最好上官网确认或当天早上致电询问。小镇很多小巷坡度很陡，请务必穿一双防滑舒适的鞋子。当地人的英语普及度不算高，但非常友善，准备好翻译软件或肢体语言，微笑是最好的通行证。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午三四点先从老城广场的文艺复兴拱廊下开始，点一杯本地啤酒，观察广场上逐渐柔和的光影和放松下来的居民。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着主街向上，不经意地拐进一条狭窄的台阶小巷，让好奇心带你探索那些连接不同层级街道的秘密通道。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`赶在闭馆前进入铸币厂博物馆，先快速浏览历史展陈，把最宝贵的时间留给那扇隔音门后依然在轰鸣生产的现代车间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前奋力爬上城堡山，穿过厚重的城门，站在棱堡的废墟上，看夕阳把整个彩色屋顶的海洋染成金黄，并遥望远处曾经的金矿山脉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚上在老广场找一家有地窖的餐厅，尝尝斯洛伐克的山地菜，比如“羊奶酪面疙瘩”，感受石头墙壁里渗出的几个世纪的凉意。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第二天一早，趁旅行团还未抵达，重返寂静的圣凯瑟琳教堂内部，仔细欣赏其哥特式祭坛和墙上古老的矿工壁画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`用整个上午的时间，慢慢探索城堡建筑群内部的历史展览，钻进阴暗的地牢，再攀爬教堂钟塔，从最高点重新审视昨日走过的每一步路。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山时绕道城镇东侧，去看看那些外表朴素、曾居住着矿工和工匠的街区，想象一下中世纪日常生活的嘈杂与烟火气。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡北侧棱堡边缘`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，以残存的防御墙垛为前景框架，将下方层层叠叠、沐浴在暖金色夕阳下的彩色屋顶老街作为全景主体，捕捉“金币之城”的辉煌一刻。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`铸币厂博物馆连接走廊的圆窗`}</h4>
                  <p className="text-sm text-gray-700">{`上午光线射入时，从这个古老的石制圆窗向外拍摄，可以将窗框作为画框，精准捕捉到对面圣凯瑟琳教堂尖塔的局部，构成一幅极富几何感和历史层次感的画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老街“Radničné námestie”台阶顶端`}</h4>
                  <p className="text-sm text-gray-700">{`清晨八点左右，阳光斜射入狭窄的台阶巷，站在高处向下拍，利用石板路形成的自然引导线，捕捉光影切割出的明暗对比以及远处渐次升起的屋顶线条。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣凯瑟琳教堂内部祭坛侧方`}</h4>
                  <p className="text-sm text-gray-700">{`避开正午强光，选择下午室内光线相对均匀时，站在侧廊，利用教堂长椅形成的纵深线条，将目光引导至华丽的哥特式主祭坛，拍摄出庄严而深邃的空间感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城镇全景远眺点（位于537公路刚进城的路边）`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗的白天任意时间，用长焦镜头从山谷对面拍摄，可以压缩空间，让山顶城堡、山腰城镇和谷底建筑浑然一体，清晰展现其独特的立体山城结构。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在铸币厂生产车间内，出于安全和保密原因，是严格禁止拍照和摄影的，请务必遵守规定，但在博物馆的历史展区可以随意拍摄。使用偏振镜可以有效消除古城建筑彩绘外墙和屋顶瓦片上的反光，让色彩更加饱和鲜艳。拍摄当地居民，尤其是老人时，请先微笑示意获得默许，这是一种尊重。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温馨家庭民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在老城广场旁一栋16世纪联排屋的顶层阁楼改造的公寓里，木梁斜顶，窗户正对着圣凯瑟琳教堂的钟楼，夜晚的钟声就是你的天然闹钟。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史特色酒店`}</h4>
                  <p className="text-sm text-green-800">{`由一座文艺复兴晚期贵族宅邸修复而成的小型精品酒店，房间保留了原始的石头墙壁和拱顶，早餐在有着壁画的地窖餐厅享用，仿佛住在博物馆里。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`郊外宁静疗愈所`}</h4>
                  <p className="text-sm text-yellow-800">{`位于城镇边缘森林山坡上的现代木屋民宿，拥有面对山谷的无敌全景露台，晚上只有风声和虫鸣，白天散步即可进入徒步小径。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`性价比快捷之选`}</h4>
                  <p className="text-sm text-purple-800">{`城门附近一家干净简单的旅馆，由热情的中年夫妇经营，虽然装修朴素，但位置极佳，价格实惠，主人能提供最地道的游玩和就餐建议。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季和秋季的周末（尤其是附近有节日时）房间非常紧俏，务必提前数周甚至数月预订。老城内的住宿多位于受保护的历史建筑中，可能没有电梯，行李搬运需要一点体力。住在城内晚上极其安静安全，可以享受空无一人的中世纪街巷漫步，这是过夜游客独有的特权。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开克雷姆尼察时，我的口袋里多了一枚小小的纪念币，是在博物馆商店买的，上面压印着古老的城堡图案。捏着这枚冰凉的金属片，我忽然明白了这座城的全部意义。我们看过太多辉煌的废墟，它们讲述着“曾经伟大”的故事，令人唏嘘。但克雷姆尼察不同，它讲述的是一个“从未停止”的故事。那回荡了七百年的“叮当”声，是一种倔强的生命体征。它告诉我们，传统不是放在玻璃柜里观赏的，而是可以像一条河流，不断吸纳新的支流（战争、技术、政权），改变形态（从金币到欧元），却始终向着同一个方向流淌——那就是生活本身，是社区赖以生存的技艺和认同。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求快速迭代、数字虚拟的时代，站在克雷姆尼察的城堡上，触摸着那些因为无数矿工和铸币匠人手掌摩擦而变得温润的石头，你会感受到一种截然不同的时间尺度。这里的时间不是碎片化的信息流，而是像铸造一枚金币那样，需要熔炼、锤炼、打磨，最终沉淀出有重量、可触摸的价值。它提醒我们，有些根基性的东西——比如对手艺的尊重，对承诺的坚守（就像那枚金币的成色），对家园层累的建设——才是抵御时间洪流最坚硬的“金属”。对于热爱深度游的旅人而言，这里不仅仅是一个景点，更是一个关于时间、技艺和延续性的深刻寓言。它让你相信，历史从未真正过去，它只是换了一种方式，在每一枚闪亮的硬币里，在每一记沉闷的“叮当”声中，继续呼吸。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
              <a href="/attractions/bojnice-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博伊尼采城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bojnice Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/spis-castle-slovakia" className="block group">
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
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
