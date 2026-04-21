import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '尚蒂伊城堡 Château de Chantilly｜漂浮在水上的艺术宫殿与仅次于卢浮宫的名画收藏 - 最佳欧洲景点',
  description: '朋友，想象一下，你穿过一片沙沙作响的古老森林，空气中满是湿润的泥土和树皮的味道。阳光透过高高的树冠，在路上洒下晃动的光斑。然后，森林豁然开朗，一片巨大的、镜子般平静的湖水在你面前展开。而在湖的对岸，那就是它——尚蒂伊城堡。它不是突兀地耸立着，而是优雅地“坐”在水面上，那些奶白色的石墙、尖尖的墨绿色屋',
}

export default function ChateauDeChantillyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/france' },
            { label: '尚蒂伊市', href: '/destinations/france' },
            { label: '尚蒂伊城堡', href: '/attractions/chateau-de-chantilly' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`尚蒂伊城堡・Château de Chantilly・法国・尚蒂伊市`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，你穿过一片沙沙作响的古老森林，空气中满是湿润的泥土和树皮的味道。阳光透过高高的树冠，在路上洒下晃动的光斑。然后，森林豁然开朗，一片巨大的、镜子般平静的湖水在你面前展开。而在湖的对岸，那就是它——尚蒂伊城堡。它不是突兀地耸立着，而是优雅地“坐”在水面上，那些奶白色的石墙、尖尖的墨绿色屋顶，连同空中的云朵，都完完整整地倒映在湖中。那一瞬间，你会忘记呼吸，仿佛闯进了一个从未醒来的童话。水是它永恒的舞台，晨雾是它的面纱，天鹅与野鸭是它忠实的演员。
走近它，你会听到两种交织的声音。一种是绝对的静谧，来自湖面、来自修剪得一丝不苟的草坪、来自城堡内部那些厚重挂毯与镶木地板。另一种则是充满生命力的律动——清脆的马蹄声从远处传来，混合着驯马师的低语。这里不仅仅是座城堡，更是一个活着的世界。在本地人眼中，尚蒂伊是“他们的”赛马圣地，是周末全家来野餐的巨大公园，是骄傲的文化地标，但又不是巴黎那种令人窒息的拥挤名胜。你会看到老先生牵着狗在花园里散步，情侣在长椅上分享一个长棍面包，孩子们追着鸽子跑。城堡的倒影在水里微微荡漾，生活的气息则在岸边真实地流淌。
而当你踏入城堡内部，真正的震撼才刚刚开始。那种感觉，不像走进博物馆，而像不小心闯进了一位品位极高、富可敌国的老贵族尚未收拾的私人宅邸。走廊里挂着的不是“展品”，而是仿佛主人昨天刚买回来欣赏的“画”。拉斐尔、波提切利、普桑、安格尔……这些如雷贯耳的名字，他们的杰作就那样“随意”地、密集地挂在墙上，近得几乎可以感受到画布的温度。光线从高大的窗户透进来，照亮了空气中漂浮的微尘，也照亮了画中圣人袍子的褶皱、少女脸颊的红晕。空气里有一股老房子特有的味道，混合着古老的木头、书籍和一点点防虫剂的气味。在这里，艺术不是被供奉的，而是生活的一部分，是呼吸的空气。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "朋友，想象一下，你穿过一片沙沙作响的古老森林，空气中满是湿润的泥土和树皮的味道。阳光透过高高的树冠，在路上洒下晃动的光斑。然后，森林豁然开朗，一片巨大的、镜子般平静的湖水在你面前展开。而在湖的对岸，那就是它——尚蒂伊城堡。它不是突兀地耸立着，而是优雅地“坐”在水面上，那些奶白色的石墙、尖尖的墨绿色屋顶，连同空中的云朵，都完完整整地倒映在湖中。那一瞬间，你会忘记呼吸，仿佛闯进了一个从未醒来的童话。水是它永恒的舞台，晨雾是它的面纱，天鹅与野鸭是它忠实的演员。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走近它，你会听到两种交织的声音。一种是绝对的静谧，来自湖面、来自修剪得一丝不苟的草坪、来自城堡内部那些厚重挂毯与镶木地板。另一种则是充满生命力的律动——清脆的马蹄声从远处传来，混合着驯马师的低语。这里不仅仅是座城堡，更是一个活着的世界。在本地人眼中，尚蒂伊是“他们的”赛马圣地，是周末全家来野餐的巨大公园，是骄傲的文化地标，但又不是巴黎那种令人窒息的拥挤名胜。你会看到老先生牵着狗在花园里散步，情侣在长椅上分享一个长棍面包，孩子们追着鸽子跑。城堡的倒影在水里微微荡漾，生活的气息则在岸边真实地流淌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而当你踏入城堡内部，真正的震撼才刚刚开始。那种感觉，不像走进博物馆，而像不小心闯进了一位品位极高、富可敌国的老贵族尚未收拾的私人宅邸。走廊里挂着的不是“展品”，而是仿佛主人昨天刚买回来欣赏的“画”。拉斐尔、波提切利、普桑、安格尔……这些如雷贯耳的名字，他们的杰作就那样“随意”地、密集地挂在墙上，近得几乎可以感受到画布的温度。光线从高大的窗户透进来，照亮了空气中漂浮的微尘，也照亮了画中圣人袍子的褶皱、少女脸颊的红晕。空气里有一股老房子特有的味道，混合着古老的木头、书籍和一点点防虫剂的气味。在这里，艺术不是被供奉的，而是生活的一部分，是呼吸的空气。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`尚蒂伊城堡`} />
                <InfoRow label="英文名称" value={`Château de Chantilly`} />
                <InfoRow label="正式名称" value={`Château de Chantilly`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`尚蒂伊市`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`法国文艺复兴与启蒙时代的璀璨明珠，孔代亲王家族的政治与文化心脏，见证了数个世纪的权力更迭与艺术收藏传奇。`} />
                <InfoRow label="建筑特色" value={`由护城河与湖泊环绕，宛如漂浮于水面的梦幻宫殿，集城堡主体、恢宏的文艺复兴风格马厩与法式花园于一体。`} />
                <InfoRow label="建筑风格" value={`主体建筑为法国文艺复兴风格，内部装饰极尽奢华的新文艺复兴与19世纪折衷主义风格，花园则是经典的勒诺特式法式园林与英式风景园林的完美结合。`} />
                <InfoRow label="文化价值" value={`拥有法国最伟大、最完整的古典绘画收藏之一“孔代博物馆”，被誉为“卢浮宫之外的卢浮宫”，同时是活着的文化遗产，延续着法式贵族生活艺术与顶级马术传统。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡、花园与马厩的开放时间随季节变化。通常花园全年开放，城堡内部（孔代博物馆）开放时间为上午10点至下午6点。从4月到10月，花园开放至晚上8点；11月到3月，花园在黄昏关闭。大马厩开放时间通常与城堡同步。请注意，城堡内部每周二闭馆，但花园与马厩周二开放。具体日期请务必在行前访问官网核实，因为冬季可能有短暂休整期。`} />
              <InfoRow label="门票价格" value={`全票（城堡、花园、大马厩）价格约为17欧元。优惠票（学生、10-17岁青少年）约为13.5欧元。10岁以下儿童免费。仅参观花园和大马厩的票价更低。强烈建议提前在线购票，可以避免现场排长队，有时还有小幅折扣。持有巴黎博物馆通票的游客需注意，尚蒂伊通常不包含在内。`} />
              <InfoRow label="地址" value={`Château de Chantilly, 60500 Chantilly, France`} />
              <InfoRow label="交通方式" value={`从巴黎出发是最佳选择。在巴黎北站搭乘前往Creil或Amiens方向的TER火车，在“Chantilly-Gouvieux”站下车，车程约25分钟，班次频繁（约每小时2-3班）。出站后，步行穿过一片宁静的森林和赛马场即可到达城堡，步行约25-30分钟，这段路本身就很惬意。也可以从车站门口搭乘公交（但班次较少）或乘坐出租车（约10分钟车程）。自驾的话，从巴黎经A1高速公路向北约50公里，出口标注“Chantilly”，城堡有大型停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "说起尚蒂伊的故事，得从一个比国王还有权势的家族讲起——孔代家族。他们是波旁王室的分支，在法国历史上翻云覆雨。最早，这里只是一座中世纪堡垒。到了16世纪，权力达到顶峰的蒙莫朗西元帅，也就是安妮·德·蒙莫朗西，他看中了这块风水宝地，决定把堡垒推倒，建一座配得上自己地位的文艺复兴宫殿。他请来了当时最好的工匠，建起了我们现在看到的城堡雏形。可惜，这位元帅后来失势被斩首，城堡也被王室收回。但故事没完，他的后代通过联姻，又把城堡弄了回来，并传给了他的外孙，也就是大名鼎鼎的“大孔代”亲王。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "大孔代是法国历史上最杰出的军事统帅之一，也是个品味超凡的文化赞助人。他在投石党运动中叱咤风云，晚年则退居尚蒂伊，把这里变成了全巴黎，不，是全欧洲最时髦的沙龙。哲学家、诗人、剧作家、科学家，像莫里哀、拉封丹、塞维涅夫人，都是这里的常客。他扩建花园，引水造湖，举办奢华无比的宴会。你能想象吗？莫里哀的经典剧作《讨厌鬼》就是在这里首演的，就在城堡的剧场里，演给一群最挑剔的贵族看。大孔代为尚蒂伊注入了灵魂——一种兼收并蓄的、智慧与享乐并重的贵族精神。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，法国大革命的浪潮没能放过这里。1793年，城堡被洗劫一空，那些无价的藏书、绘画、家具被运走，建筑本身也被革命政府当成“封建余孽”给拆毁了。直到19世纪中叶，这片美丽的废墟才迎来了它的“救世主”——最后一位孔代亲王，路易六世·亨利·德·波旁。这位公爵没有直系后代，他做了一个惊人的决定：倾尽所有财富和毕生精力，重建尚蒂伊城堡，不是为了自己居住，而是为了把他惊人的艺术收藏安放于此，并留给法国人民。他重建的不是原来的中世纪风格，而是一座更符合当时浪漫主义审美的、梦幻般的新文艺复兴宫殿。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他真正的激情在于收藏。这位公爵是当时最顶级的收藏家，他痴迷于古典大师绘画，在艺术品市场上一掷千金，与整个欧洲的皇室和富豪竞争。他把拉斐尔的《三美神》、波提切利的《秋》等无数珍宝收入囊中。他立下遗嘱：城堡连同里面所有的收藏，必须原封不动地捐给法兰西学术院，并永久对公众开放，但绝不允许任何一件作品被外借或移动位置。这就是为什么你今天能看到如此密集、如此原真性的陈列——你看到的，正是19世纪末一位伟大收藏家客厅和画廊最真实的模样。他于1830年去世，城堡依约捐赠，成为我们今天看到的孔代博物馆。从军事要塞到文化沙龙，从革命废墟到艺术圣殿，尚蒂伊的命运，就是一部缩微的、充满戏剧性的法国文明史。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要完整感受尚蒂伊的魅力，你需要预留整整一天时间。建议早上10点前抵达，这时旅行团尚未涌入，晨光柔和，湖面如镜，是拍照和享受花园宁静的黄金时段。整体的游览节奏应该是“由外至内，再由静至动”。上午先沉浸在外部的自然与建筑之美中，下午再进入城堡内部细细品味艺术收藏，最后以充满活力的大马厩参观收尾。这样的安排能让你感官的体验富有层次，不会因为一开始就面对海量艺术品而感到疲劳。记得穿一双非常舒适的鞋，因为你会在花园里走很多路。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周二城堡内部闭馆，但花园和马厩开放，如果只想看外观和自然风光可以选这天，但会错过核心艺术收藏。花园面积非常大，内部有小火车穿梭于主要景点之间，如果走累了可以购票乘坐。城堡内部严禁使用闪光灯，为了保护那些脆弱的古老画作，请务必遵守。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`先从城堡正面的小法式花园开始，顺着中央轴线远眺城堡在水中的完美倒影，感受勒诺特式园林的几何秩序之美。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`然后沿着大运河畔的宽阔林荫道一直走到运河尽头的草坪，这里视野开阔，是回望城堡全景的绝佳地点。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`绕到城堡侧后方，探索那片充满浪漫野趣的英中式花园，在蜿蜒小径、假山石窟与瀑布溪流间享受意想不到的静谧。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从花园入口进入城堡内部，先在底层大厅感受新文艺复兴建筑的宏伟，然后沿着华丽的“猴子画廊”楼梯上楼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在二楼的绘画长廊里花上至少一个小时，放慢脚步，近距离端详那些毫无玻璃遮挡的文艺复兴大师杰作。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`别忘了探访城堡内精美绝伦的图书馆，仰望那些直通天花板的古老书架，想象公爵在此翻阅古籍的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出城堡，穿过宽阔的草坪，前往那座宛如宫殿的“大马厩”，在充满干草和马匹气息的圆形大厅里等待马术表演开场。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间允许，在日落时分回到城堡前方的湖边，找一张长椅坐下，看金色的夕阳为白色城堡披上最后一道光辉。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡正面湖对岸的堤坝上`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前半小时，利用湖面作为前景，拍摄城堡与其完美倒影的对称构图，长焦镜头可以压缩空间，让城堡显得更近更壮观。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`大运河尽头的水池旁`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光从侧面照亮城堡时，站在水池边，将笔直的大运河作为引导线，将视线引向远方的城堡，构图极具纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`英中式花园的“哲学家小屋”前`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，穿过小屋的门框或窗户拍摄城堡的局部，框架构图能让画面更有故事感和层次感，仿佛一幅古老的油画。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`大马厩内部圆形穹顶下`}</h4>
                  <p className="text-sm text-gray-700">{`白天室内光线充足时，仰拍巨大的巴洛克式穹顶与华丽的吊灯，利用广角镜头展现其惊人的空间尺度与建筑细节，等待一匹马匹走过可增添生气。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄花园时，尝试加入人物（可以是同伴或远处的游客）作为比例尺，能更好地衬托出花园和建筑的宏大。航拍器在城堡及花园上空是严格禁止飞行的，请勿尝试。雨天或阴天其实别有一番韵味，湖面雾气弥漫时，城堡会显得更加神秘梦幻。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`森林小屋体验`}</h4>
                  <p className="text-sm text-blue-800">{`入住隐匿于尚蒂伊森林边缘的独栋小木屋，清晨在鸟鸣中醒来，推开窗就能呼吸到带着松香的空气，骑车几分钟便能抵达城堡。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史中心精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`选择位于尚蒂伊小镇中心广场旁的石砌老宅酒店，房间古朴温馨，晚上可以溜达去本地人聚集的小酒馆，感受真正的法式小镇夜生活。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高尔夫与水疗度假村`}</h4>
                  <p className="text-sm text-yellow-800">{`对于追求放松的旅行者，城堡附近有几家附带高尔夫球场的高端度假村，提供顶级水疗和泳池，适合在暴走一天后彻底舒缓身心。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`巴黎当日往返`}</h4>
                  <p className="text-sm text-purple-800">{`如果行程紧张，完全可以从巴黎市中心乘坐火车轻松一日游，尚蒂伊的魔力足以在一天内给你留下深刻印象，晚上再回到巴黎的灯火中。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尚蒂伊本身是一个非常安全宁静的小镇，治安极好。如果选择住在镇上，晚上餐馆关门较早（通常晚9点后），建议提前安排晚餐。旺季（尤其是夏季周末和赛马日）城堡周边的住宿会很紧张，务必提前数月预订。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开尚蒂伊的时候，我脑子里挥之不去的不是某一幅具体的画，也不是某一个建筑的细节，而是一种整体的、丰盈的“感觉”。它不同于那些仅供仰望的、冰冷的历史遗迹。在这里，美是流动的，是水上的倒影，是马蹄踏过沙地的声音，是画中人物注视你的眼神。它告诉你，贵族的精神遗产，不仅仅是财富与权力，更是一种对美近乎偏执的守护、整理与传承。那位奥马勒公爵，他重建城堡、搜集珍宝，并非为了炫耀，而是搭建了一座跨越时间的桥梁，把他认为最珍贵的人类文明结晶，小心翼翼地交付给未来，交付给每一个像我们一样偶然到访的普通人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当今这个一切都追求快速、碎片化、数字化的世界里，尚蒂伊提供了一种近乎奢侈的深度体验。它要求你慢下来，用一整天的时间，去走，去看，去感受。它不提供捷径，巨大的花园需要你亲自用脚步丈量，浩繁的藏画需要你静下心来凝视。但它回报你的，是一种久违的、沉浸式的满足感。你会觉得，你不是一个匆匆过客，而是在某个下午，有幸受邀进入了一位古老朋友的家，听他通过建筑、绘画、花园和马匹，娓娓道来一个关于法兰西的、漫长而优雅的故事。这，正是深度旅行的意义所在。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/vezelay-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    韦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">韦兹莱隐修院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vézelay Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/roussillon" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    鲁
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">鲁西永（红土城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Roussillon</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-beynac" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝纳克城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Beynac</p>
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
