import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '恩克赫伊曾 Enkhuizen｜推开荷兰黄金时代的木门，走进一个活着的东印度公司古港 - 最佳欧洲景点',
  description: '走出恩克赫伊曾火车站的那一刻，你首先闻到的是一种混合的气息——北海吹来的、带着咸味和海藻清冽的微风，隐约缠绕着从某户人家厨房窗口飘出的、热腾腾的苹果派甜香。你的耳朵立刻被占领了：不是城市的喧嚣，而是无数海鸥高亢而悠长的鸣叫，它们像白色的音符，在湛蓝的天幕上划出弧线，背景音是远处港口桅杆与缆绳在风中有...',
}

export default function EnkhuizenHistoricHarbourPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '恩克赫伊曾', href: '/attractions/enkhuizen-historic-harbour' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`恩克赫伊曾・Enkhuizen・荷兰・恩克赫伊曾`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`走出恩克赫伊曾火车站的那一刻，你首先闻到的是一种混合的气息——北海吹来的、带着咸味和海藻清冽的微风，隐约缠绕着从某户人家厨房窗口飘出的、热腾腾的苹果派甜香。你的耳朵立刻被占领了：不是城市的喧嚣，而是无数海鸥高亢而悠长的鸣叫，它们像白色的音符，在湛蓝的天幕上划出弧线，背景音是远处港口桅杆与缆绳在风中有节奏的、温柔的叩击声。眼前，是一条笔直的、通向水边的林荫道，阳光透过树叶洒在古老的砖石路上，斑斑驳驳。就在路的尽头，一抹明亮的蓝色在跳动——那是海，或者说，是曾经的大海须德海的一部分。你会瞬间明白，你踏入的不是一个单纯的“旅游点”，而是一个依然靠着水、呼吸着水、梦着水的活生生的港口小镇。
沿着运河向老港走去，时间仿佛自动调慢了流速。河水是墨绿色的，近乎静止，完美地倒映着两岸那些有着数百年历史的阶梯式山墙房屋。这些房子不是呆板的展品，它们的窗台上放着天竺葵的花箱，白色的蕾丝窗帘被风吹得微微鼓起，自行车就随意地靠在褪色的木门边。你可能会看到一位老先生，正从临河的小门里探出身，用长柄网兜打捞着水面的落叶。他冲你点点头，仿佛你只是又一个普通的邻居。这里的魔力在于那种“仍在使用中”的质感：古老的东印度公司仓库，现在可能是艺术家的工作室或一家独立书店；曾经用来吊装香料的木质起重机旁，停靠着私家的小游艇。历史在这里没有成为标本，它只是换了一种更悠闲的方式在继续生活。
走到老港的入口，那座名为“德罗梅达里斯”的厚重砖塔楼会镇住你的视线。它像一位沉默的哨兵，见证了无数商船的启航与归来。站在这里，闭上眼睛，你能几乎听到17世纪的喧嚣：码头工人们的号子、装着胡椒和瓷器的板车滚过鹅卵石路的辘辘声、水手们用各种语言叫嚷着。但睁开眼，却是午后宁静的阳光，几个年轻人在港边的长椅上喝着啤酒，一群鸭子排着队笨拙地爬上岸边。这种强烈的时空叠印，正是恩克赫伊曾最打动人心的核心——它骄傲地展示着自己的过往，却丝毫不沉溺于怀旧，而是将那份辉煌与沧桑，统统化作了今日平静且充满生活底色的日常。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`走出恩克赫伊曾火车站的那一刻，你首先闻到的是一种混合的气息——北海吹来的、带着咸味和海藻清冽的微风，隐约缠绕着从某户人家厨房窗口飘出的、热腾腾的苹果派甜香。你的耳朵立刻被占领了：不是城市的喧嚣，而是无数海鸥高亢而悠长的鸣叫，它们像白色的音符，在湛蓝的天幕上划出弧线，背景音是远处港口桅杆与缆绳在风中有节奏的、温柔的叩击声。眼前，是一条笔直的、通向水边的林荫道，阳光透过树叶洒在古老的砖石路上，斑斑驳驳。就在路的尽头，一抹明亮的蓝色在跳动——那是海，或者说，是曾经的大海须德海的一部分。你会瞬间明白，你踏入的不是一个单纯的“旅游点”，而是一个依然靠着水、呼吸着水、梦着水的活生生的港口小镇。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`沿着运河向老港走去，时间仿佛自动调慢了流速。河水是墨绿色的，近乎静止，完美地倒映着两岸那些有着数百年历史的阶梯式山墙房屋。这些房子不是呆板的展品，它们的窗台上放着天竺葵的花箱，白色的蕾丝窗帘被风吹得微微鼓起，自行车就随意地靠在褪色的木门边。你可能会看到一位老先生，正从临河的小门里探出身，用长柄网兜打捞着水面的落叶。他冲你点点头，仿佛你只是又一个普通的邻居。这里的魔力在于那种“仍在使用中”的质感：古老的东印度公司仓库，现在可能是艺术家的工作室或一家独立书店；曾经用来吊装香料的木质起重机旁，停靠着私家的小游艇。历史在这里没有成为标本，它只是换了一种更悠闲的方式在继续生活。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走到老港的入口，那座名为“德罗梅达里斯”的厚重砖塔楼会镇住你的视线。它像一位沉默的哨兵，见证了无数商船的启航与归来。站在这里，闭上眼睛，你能几乎听到17世纪的喧嚣：码头工人们的号子、装着胡椒和瓷器的板车滚过鹅卵石路的辘辘声、水手们用各种语言叫嚷着。但睁开眼，却是午后宁静的阳光，几个年轻人在港边的长椅上喝着啤酒，一群鸭子排着队笨拙地爬上岸边。这种强烈的时空叠印，正是恩克赫伊曾最打动人心的核心——它骄傲地展示着自己的过往，却丝毫不沉溺于怀旧，而是将那份辉煌与沧桑，统统化作了今日平静且充满生活底色的日常。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`恩克赫伊曾`} />
                <InfoRow label="英文名称" value={`Enkhuizen`} />
                <InfoRow label="正式名称" value={`Enkhuizen`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`恩克赫伊曾`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它曾是荷兰东印度公司（VOC）辉煌时期的六大港口之一，被誉为“西弗里斯兰的珍珠”，是荷兰黄金时代全球贸易网络上一个不可或缺的枢纽。`} />
                <InfoRow label="建筑特色" value={`拥有异常完整且仍在呼吸的17世纪运河景观，大量阶梯山墙、红砖仓库与富商宅邸并肩而立，木制驳船轻轻磕碰着古老的码头。`} />
                <InfoRow label="建筑风格" value={`典型的荷兰黄金时代风格，以简洁优雅的砖砌结构、装饰性山墙、大型矩形窗户为特征，处处体现着实用主义与商业繁荣的结合。`} />
                <InfoRow label="文化价值" value={`这里不是一个冻结的博物馆，而是一部仍在书写的、关于海洋、贸易与社区生活的活态编年史，是理解荷兰民族性与海洋精神的核心切片。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城镇公共区域全天24小时开放。主要博物馆及历史建筑开放时间通常为：旺季（4月至10月）每日10:00-17:00；淡季（11月至3月）多数博物馆周二至周日开放，时间可能缩短或需预约。圣诞节、新年当天大部分室内场馆关闭。运河游船服务通常在4月至10月运行，具体班次受天气影响。`} />
              <InfoRow label="门票价格" value={`漫步古城本身免费。进入主要博物馆需购票：须德海博物馆（Zuiderzeemuseum）露天区域加室内展馆联票成人约18欧元；“我们的船在港口”（Museum “Ons’ Lieve Heer op Solder”）门票成人约10欧元。持有荷兰博物馆卡（Museumkaart）可免费进入大部分合作博物馆。6-17岁青少年及65岁以上长者享受折扣票，5岁以下儿童免费。部分历史建筑内咖啡馆消费即视为支持维护。`} />
              <InfoRow label="地址" value={`Drommedaris, Oude Haven 1, 1601 EM Enkhuizen, Netherlands`} />
              <InfoRow label="交通方式" value={`从阿姆斯特丹史基浦机场（AMS）出发最为方便：在机场地下火车站直接乘坐前往恩克赫伊曾的火车。通常需要在阿姆斯特丹中央车站（Amsterdam Centraal）换乘一次，总旅程约1小时15分钟至1.5小时。火车班次频繁，约每半小时一班，无需提前购票，可在车站自动售票机或使用OV交通卡直接刷卡上车。抵达恩克赫伊曾火车站后，出站即见古老城镇风貌，步行约10分钟即可到达老港（Oude Haven）核心区。若自驾，可将车停在城镇边缘的停车场（如‘P+R Enkhuizen’），然后步行或租用自行车进入古镇，古镇内街道狭窄多为步行区。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`恩克赫伊曾的故事，始于一片水的恩赐与挑战。早在中世纪，这里就是一个不起眼的渔村，人们依靠北海鲱鱼捕捞为生。转折点发生在15世纪末，当一道保护性的堤坝建成，一个安全的避风港得以形成。到了16世纪，随着荷兰反抗西班牙统治的八十年战争爆发，许多南方的商人和工匠北逃，将资本和技术带到了像恩克赫伊曾这样的城镇。它就像一块海绵，迅速吸收了这些养分，开始茁壮成长。当历史步入17世纪——荷兰的黄金时代，恩克赫伊曾迎来了它命运的巅峰。1602年，荷兰东印度公司（VOC）成立，这是一个堪比现代跨国企业的巨无霸，拥有发动战争、建立殖民地、谈判条约的权力。恩克赫伊因其优越的港口条件和造船技术，成为VOC的六大“商会”城市之一。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下那个时代的港口吧。巨大的东印度公司仓库沿运河一字排开，里面堆满了从亚洲运来的、令人眩晕的财富：中国的丝绸和瓷器、印度的棉布和宝石、锡兰的肉桂、摩鹿加群岛的肉豆蔻和丁香。空气里常年弥漫着异国香料那浓郁而辛辣的复合香气。码头边，那些准备远航的“东印度商人”级巨舰，船体庞大，配备了数十门火炮，它们不仅仅商船，更是移动的堡垒。恩克赫伊曾的船坞里灯火通明，工匠们夜以继日地建造和维护着这支舰队。城镇里挤满了水手、商人、地图绘制员和冒险家，酒馆和旅馆生意兴隆。市政厅变得富丽堂皇，市民们竞相建造最能彰显财富的运河宅邸，那个时代特有的自信与繁荣，被一砖一瓦地砌进了城市的肌理。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，盛极必衰是历史的常态。18世纪，随着英法竞争加剧、VOC管理腐败、以及第四次英荷战争的沉重打击，公司的业务急转直下。更致命的打击来自拿破仑的大陆封锁政策，它几乎掐断了荷兰的海上贸易生命线。恩克赫伊曾的港口逐渐淤塞，曾经繁忙的航道对于新时代更大的蒸汽轮船来说已经太浅。财富和人才随着潮水般退去，这座城镇仿佛被时间遗忘，陷入了一种深沉的睡眠。但也正是这种“被遗忘”，意外地成为了它的守护神。因为缺乏资金进行大规模现代化改造，那些17、18世纪的建筑得以原封不动地保存下来，像一枚被琥珀封存起来的昆虫，完整保留了黄金时代的样貌。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间的齿轮再次转动，已经到了20世纪。一项巨大的工程改变了北荷兰的地理格局：须德海围海造田工程。曾经威胁城镇的大海变成了安全的艾瑟尔湖。恩克赫伊曾从一座“海港”变成了“湖港”，它的命运也迎来了新的转机。人们开始重新发现它的历史价值。1948年，一个宏大的露天博物馆——须德海博物馆开始筹建。它的理念独具匠心：不仅仅展示物品，而是将整个艾瑟尔湖区域的历史建筑、船只、甚至生活方式整体搬迁、复原于此。你可以说，恩克赫伊曾不仅保存了自己的历史，它还慷慨地成为了整个地区海洋记忆的保管者。从那时起，它缓缓苏醒，不再是那个沉睡的巨人，而是化身为一位宁静而博学的叙事者，向来访者低声诉说着关于海洋、勇气、兴衰与坚韧的漫长故事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味恩克赫伊曾，你需要整整一天，并且把心情调到“慢速档”。建议在上午9点前抵达，这时游客尚未涌入，晨光温柔，是拍摄运河与建筑倒影的黄金时间。整体游览耗时约6-8小时，节奏应是走走停停，像当地人一样在长椅上发呆，在咖啡馆观望。路线设计为从火车站自然漫步至老港核心，然后像波纹一样扩散探索周边的运河街区与博物馆，最后在黄昏时分回到水边，结束这沉浸式的一天。这样安排能让你先建立整体印象，再深入历史细节，最后以感性的方式回味。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周六上午城镇有露天市集，充满活力，但主街人会较多，喜欢清静的话可以避开这个时段。城镇非常安全，几乎没有针对游客的骗局，但骑自行车的人速度很快，在人行道上行走时请注意避让。一定要穿一双绝对舒适的平底鞋，因为鹅卵石路面对脚踝是持续的考验。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一早从火车站出来，顺着那条绿树成荫的街道毫不犹豫地走向水光闪烁的方向，让德罗梅达里斯塔楼成为你的第一个航标`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在塔楼下的老港入口处停留片刻，找一张面向港口的长椅坐下，看船只轻轻摇晃，想象几个世纪前这里停满东印度商船的壮观景象`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着Oude Haven（老港）北岸漫步，仔细观察那些巨大的砖砌仓库山墙，寻找上面可能刻着的建造年份和船锚等海事符号`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拐进那些与主运河垂直的、更狭窄安静的小巷，比如Breedstraat或Venedie，这里的居民住宅更为密集，生活气息扑面而来`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选择一家临水的咖啡馆享用午餐，务必点一份当地特色的烟熏鳗鱼三明治，让味蕾也参与到这场历史之旅中`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午前往须德海博物馆的露天区域，这不仅仅是一个博物馆，更是一个完整的、从各地搬迁而来的渔村，请预留至少两小时在这里穿梭`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间和体力允许，登上西教堂（Westerkerk）的塔楼，这是全城的制高点，俯瞰红瓦屋顶、纵横运河汇入广阔湖面的景色无比震撼`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分回到内港（Binnenhaven），这里的氛围更加私密宁静，看夕阳将古老的木船和砖墙染成金黄，为一天画上完美的句号`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`德罗梅达里斯塔楼与老港拱桥同框`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前半小时，站在塔楼西侧的拱桥上，将古老的石桥拱洞作为前景框架，拍摄塔楼在水中的完美倒影。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`佛摩尔街（Venedie）的运河视角`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光西斜时，站在这条狭窄运河的某座小桥中央，利用两侧色彩柔和的山墙民居形成的天然“夹景”，拍摄运河笔直延伸的纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`须德海博物馆的码头木桩阵`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个阴天或多云的天气，在博物馆的旧码头区，低角度仰拍那些布满岁月痕迹的、高高耸立的系船木桩，它们像沉默的士兵，极具力量感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`西教堂塔楼顶的全景`}</h4>
                  <p className="text-sm text-gray-700">{`登塔后，不要只拍大景，尝试将镜头对准近处一片密集的红瓦屋顶和烟囱，让远处艾瑟尔湖的淡蓝色水平线作为背景，构成几何与色彩的协奏。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`荷兰的光线在清晨和黄昏时最为柔和魔幻，被称为“黄金时刻”，务必珍惜这两个时段。拍摄当地居民或他们的房屋时，请务必保持礼貌，先微笑示意，如果对方表现出不愿被拍，请立即尊重地放下相机。运河的水面反光很强，可以考虑携带一块偏振镜来消除反光，让水下的石头和倒影更清晰。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`运河畔的温馨民宿`}</h4>
                  <p className="text-sm text-blue-800">{`选择一栋17世纪商人住宅改造的B&B，房间有着低矮的木梁和望向运河的小窗，早晨女主人会端来手工果酱和现煮咖啡。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史建筑里的精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`下榻由古老烟草仓库精心修复而成的设计酒店，内部是极简主义的北欧风格，与厚重的砖墙形成奇妙对话，顶楼房间享有港口视野。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`充满故事的船长之家`}</h4>
                  <p className="text-sm text-yellow-800">{`入住港口边一栋曾属于一位东印度公司船长的房子，房间内装饰着古老的海图、地球仪和船模，睡在历史里不再是比喻。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`现代舒适的码头边公寓`}</h4>
                  <p className="text-sm text-purple-800">{`如果偏好自助，可以租赁码头新区一套现代化的公寓，拥有宽敞的露台，晚上可以伴着轻轻的波涛声入睡，体验新旧交融的港口生活。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（6-8月）是旺季，住宿非常紧张，建议至少提前两个月预订。老城中心的住宿可能楼梯陡峭且没有电梯，预订时请注意。住在运河区内虽然氛围绝佳，但夜晚非常安静，喜欢夜生活的人可能会觉得过于沉寂。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开恩克赫伊曾许久后，我发现自己最常回味的，不是某座具体的建筑或某件展品，而是一种整体的“感觉”。那是一种被水、风和缓慢时光共同浸泡过的宁静。在这个一切追求速度和效率的世界里，恩克赫伊曾像是一个温柔的悖论。它曾经是世界贸易网络的心脏，搏动得那样激烈而快速；而如今，它选择成为一段平稳的、深长的呼吸。它告诉你，辉煌可以过去，财富可以消散，但生活本身，那种在晨光中推开窗、在黄昏里沿着水边散步的日常，才是最终的锚点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，来这里不是为了收集景点打卡，而是为了经历一场“时间的疗愈”。你会看到，历史不是教科书上冰冷的知识点，而是门楣上被海风腐蚀的纹章，是咖啡馆老人脸上的皱纹，是码头边仍在使用的、被磨得发亮的系缆石。恩克赫伊曾教会我的，是一种深度的驻足。它让每一位匆匆旅人慢下来，去倾听砖石的诉说，去感受潮汐的韵律，去理解一个民族如何从大海中获取勇气，又将这份勇气化为平淡而坚韧的日常。它不仅仅是一个必去的目的地，更是一个让心灵重新校准的港湾。在这里，你走过的不是街道，而是时间的河床；你呼吸的不仅是空气，更是历史的尘埃与未来的微风交织而成的、生命的味道。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/oudewater-witch-weighing-house" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥德瓦特女巫称重房</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Oudewater Witch Weighing House</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gouda-cheese-market" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    豪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">豪达奶酪小镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gouda</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/thorn-white-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    托
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">托伦白村</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Thorn</p>
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
