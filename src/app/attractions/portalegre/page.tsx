import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '波塔莱格雷 Portalegre｜探寻葡萄牙挂毯之魂与山间巴洛克珍宝 - 最佳欧洲景点',
  description: '车子驶离开阔的、橡树点缀的阿连特茹平原，缓缓爬升，圣马梅德山脉墨绿色的轮廓在远处变得越来越清晰。然后，就在一个转弯之后，波塔莱格雷出现了——它不是那种突兀地矗立在平原上的城堡城市，而是仿佛从山峦的褶皱里自然生长出来。赭石色的城堡塔楼从一片绵延的、白得晃眼的房屋屋顶中探出头，在午后强烈的阳光下，像一块',
}

export default function PortalegrePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '波塔莱格雷', href: '/attractions/portalegre' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`波塔莱格雷・Portalegre・葡萄牙・波塔莱格雷`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶离开阔的、橡树点缀的阿连特茹平原，缓缓爬升，圣马梅德山脉墨绿色的轮廓在远处变得越来越清晰。然后，就在一个转弯之后，波塔莱格雷出现了——它不是那种突兀地矗立在平原上的城堡城市，而是仿佛从山峦的褶皱里自然生长出来。赭石色的城堡塔楼从一片绵延的、白得晃眼的房屋屋顶中探出头，在午后强烈的阳光下，像一块巨大的蜜糖。你的第一印象不是宏伟，而是一种奇妙的和谐，一种被群山轻轻揽在怀里的安宁。
停好车，走进老城，感官立刻被激活。脚下是光滑的小石板铺成的波浪形路面，葡萄牙人叫它“calçada portuguesa”，走起来有细微的起伏感。空气里飘着混合的气息：咖啡的焦香从老式咖啡馆敞开的门里溢出，阳光炙烤着石灰墙壁散发出干燥的、矿物质的味道，偶尔一阵微风，会送来从某个隐蔽庭院里逸出的橙花或茉莉的甜香。声音是慵懒的：远处教堂整点的钟声浑厚而悠长，近处是街角老人们用浓重口音的葡萄牙语聊天的嗡嗡声，还有头顶铸铁阳台上海棠花盆栽被水滴溅到的细微声响。这里没有游客的喧嚣，时间以阿连特茹的方式流淌，缓慢而扎实。
而真正让这座城市与众不同的“心跳声”，藏匿在那些看似普通的街巷深处。那是一种低沉、规律、富有节奏的“咔嗒”声，从一栋朴素的现代建筑里传来。循声而去，便是国家挂毯制造工坊。走进去，仿佛踏入了一个由经纬线构成的魔法世界。巨大的织机前，工坊匠人（他们更应被称为艺术家）正全神贯注，用灵巧的手将数不清的彩色羊毛纱线，按照墙上的巨幅画稿，一点一点“编织”成油画般的画面。光线从高窗落下，照亮空气中飞舞的微尘和匠人专注的侧脸。那一刻你突然明白，波塔莱格雷的魂，不仅仅在石头上，更在这些经纬交错、永不褪色的纤维里。它是一座用手工的温度，对抗时光流逝的城市。
傍晚时分，最好的方式是漫无目的地迷失在老城。你会邂逅那些令人屏息的巴洛克府邸门户——例如卡萨博物馆那雕刻着繁复花纹、充满动感的石质立面，阳光斜射，在门廊上投下深邃的阴影，华丽得仿佛在无声地诉说十八世纪贵族们的野心与风雅。这些建筑与山下平民的白色小屋、街头玩耍的孩子、提着菜篮的主妇共同构成了城市鲜活的肌理。波塔莱格雷的魅力，就在于这种强烈的反差与融合：边境要塞的粗犷与挂毯艺术的极致精细，山城的质朴与巴洛克的奢华，全部被巧妙地编织进了同一幅生活画卷里。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子驶离开阔的、橡树点缀的阿连特茹平原，缓缓爬升，圣马梅德山脉墨绿色的轮廓在远处变得越来越清晰。然后，就在一个转弯之后，波塔莱格雷出现了——它不是那种突兀地矗立在平原上的城堡城市，而是仿佛从山峦的褶皱里自然生长出来。赭石色的城堡塔楼从一片绵延的、白得晃眼的房屋屋顶中探出头，在午后强烈的阳光下，像一块巨大的蜜糖。你的第一印象不是宏伟，而是一种奇妙的和谐，一种被群山轻轻揽在怀里的安宁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "停好车，走进老城，感官立刻被激活。脚下是光滑的小石板铺成的波浪形路面，葡萄牙人叫它“calçada portuguesa”，走起来有细微的起伏感。空气里飘着混合的气息：咖啡的焦香从老式咖啡馆敞开的门里溢出，阳光炙烤着石灰墙壁散发出干燥的、矿物质的味道，偶尔一阵微风，会送来从某个隐蔽庭院里逸出的橙花或茉莉的甜香。声音是慵懒的：远处教堂整点的钟声浑厚而悠长，近处是街角老人们用浓重口音的葡萄牙语聊天的嗡嗡声，还有头顶铸铁阳台上海棠花盆栽被水滴溅到的细微声响。这里没有游客的喧嚣，时间以阿连特茹的方式流淌，缓慢而扎实。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而真正让这座城市与众不同的“心跳声”，藏匿在那些看似普通的街巷深处。那是一种低沉、规律、富有节奏的“咔嗒”声，从一栋朴素的现代建筑里传来。循声而去，便是国家挂毯制造工坊。走进去，仿佛踏入了一个由经纬线构成的魔法世界。巨大的织机前，工坊匠人（他们更应被称为艺术家）正全神贯注，用灵巧的手将数不清的彩色羊毛纱线，按照墙上的巨幅画稿，一点一点“编织”成油画般的画面。光线从高窗落下，照亮空气中飞舞的微尘和匠人专注的侧脸。那一刻你突然明白，波塔莱格雷的魂，不仅仅在石头上，更在这些经纬交错、永不褪色的纤维里。它是一座用手工的温度，对抗时光流逝的城市。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "傍晚时分，最好的方式是漫无目的地迷失在老城。你会邂逅那些令人屏息的巴洛克府邸门户——例如卡萨博物馆那雕刻着繁复花纹、充满动感的石质立面，阳光斜射，在门廊上投下深邃的阴影，华丽得仿佛在无声地诉说十八世纪贵族们的野心与风雅。这些建筑与山下平民的白色小屋、街头玩耍的孩子、提着菜篮的主妇共同构成了城市鲜活的肌理。波塔莱格雷的魅力，就在于这种强烈的反差与融合：边境要塞的粗犷与挂毯艺术的极致精细，山城的质朴与巴洛克的奢华，全部被巧妙地编织进了同一幅生活画卷里。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`波塔莱格雷`} />
                <InfoRow label="英文名称" value={`Portalegre`} />
                <InfoRow label="正式名称" value={`Portalegre`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`波塔莱格雷`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`葡萄牙阿连特茹地区北部的历史与文化中心，以国家级的挂毯制造业和融合了防御与优雅气质的巴洛克建筑群闻名。`} />
                <InfoRow label="建筑特色" value={`坚固的城堡与蜿蜒的城墙，包裹着充满生活气息的、以白色房屋和精美铸铁阳台为特色的老城区，其间点缀着装饰繁复的巴洛克贵族府邸。`} />
                <InfoRow label="建筑风格" value={`以中世纪的军事哥特式城堡为基础，城内建筑呈现从曼努埃尔式、文艺复兴到巴洛克风格的层叠演变，尤其以18世纪的民用巴洛克建筑最为突出。`} />
                <InfoRow label="文化价值" value={`不仅是葡萄牙东部边境的历史见证，更是国家级手工艺术“波塔莱格雷挂毯”的诞生地与守护者，代表着葡萄牙工艺与艺术的巅峰结合。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城市本身全天开放。核心景点如Portalegre城堡、大教堂、挂毯制造工坊及主要博物馆开放时间一般为周二至周日，上午10:00至下午13:00，下午14:00至18:00（冬季可能提前至17:00关闭）。周一及主要节假日（如1月1日、12月25日）闭馆。挂毯工坊的参观强烈建议提前在其官网或通过旅游中心预约，因为涉及工坊运作时段。夏季（7-8月）部分景点可能延长开放至19:00。`} />
              <InfoRow label="门票价格" value={`Portalegre城堡：约2欧元。波塔莱格雷大教堂：免费进入，珍宝室或回廊可能收费1-2欧元。国家挂毯制造工坊（Manufactura de Tapeçarias de Portalegre）：导览参观约5欧元。城市博物馆网络联票约6欧元，可参观3-4个主要博物馆。65岁以上长者、学生及12岁以下儿童普遍享有半价或免费优惠。每月第一个周日多数国立博物馆免费。`} />
              <InfoRow label="地址" value={`Largo do Município, 7300-110 Portalegre, Portugal`} />
              <InfoRow label="交通方式" value={`从里斯本机场出发最为便捷。在机场乘坐地铁红线到Oriente火车站，换乘葡萄牙铁路（CP）的“区域线”列车前往波塔莱格雷。直达车次较少，通常需要在Entroncamento或Abrantes换乘一次，全程约3.5至4小时。也可以从里斯本的Sete Rios巴士站乘坐Rede Expressos长途大巴，班次相对频繁，车程约3小时，直达波塔莱格雷巴士站。自驾是最灵活的方式，沿A6高速至Elvas附近转A23高速，再转IP2国道，约2.5小时。城内街道狭窄，建议将车停在城墙外的公共停车场，以步行为主探索。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "波塔莱格雷的故事，始于一道山脉和一片平原的交界处。早在罗马时代，这里就是一条重要通道的关口，但真正赋予它名字和形体的，是十三世纪的葡萄牙国王阿方索三世。传说国王在此狩猎时，遇到一道难以逾越的城门或障碍，他喊道：“Porta-alegre!”（意为“快乐的城门”或“坚固的城门”），地名由此而来。这更像一个美好的附会，但其背后是现实的政治与军事需求。当时王国正在向南进行“收复失地运动”，圣马梅德山脉是天然的防御屏障，在此建立前哨据点，俯瞰通往西班牙的平原，至关重要。最初的城堡和城墙就此奠基，波塔莱格雷从诞生起，骨子里就刻着“边境”与“防御”的基因。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "随后的几个世纪，它作为边境要塞的命运波澜起伏。在1383-1385年的葡萄牙王位继承危机中，它坚定地支持后来的若昂一世大师，并在关键的阿尔茹巴罗塔战役前，为王国军队提供了重要支持，从而赢得了王室的青睐和一系列特权。地理位置带来了风险，也带来了机遇。十六世纪，随着葡萄牙海外探险的辉煌，来自巴西的财富和来自欧洲的文化新风也吹进了这座山城。一些本地贵族开始积累财富，最初的曼努埃尔式和文艺复兴风格的建筑开始点缀城区，城市逐渐从单纯的军事堡垒，向区域行政与商业中心转型。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，真正让波塔莱格雷脱胎换骨的，是十七世纪末至整个十八世纪。一方面，葡萄牙从西班牙统治下恢复独立后，边境防御被再次强调，城堡得到了加固和现代化改造。另一方面，也是更重要的，是巴西黄金时代的财富大量涌入葡萄牙本土。波塔莱格雷的贵族和富商家族——如乌尔萨家族、卡列罗斯家族——凭借贸易和土地积累了惊人财富。他们不再满足于祖传的朴素宅邸，竞相聘请建筑师和艺术家，兴建或改造府邸。于是，我们今天看到的那种极具戏剧性和装饰性的民用巴洛克风格爆发式地涌现：纹章雕刻繁复的石质立面、精美的锻铁阳台、绘有神话场景的瓷砖壁画、金碧辉煌的家庭礼拜堂……这段时期，波塔莱格雷为自己披上了一件华丽而优雅的外衣，从“战士”变成了“绅士”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "十九世纪的战火与动荡，尤其是拿破仑入侵时期的破坏，给城市的发展按下了暂停键。但它真正的文化救赎与全球声望，却来自二十世纪一场看似偶然的艺术合作。1946年，法国画家让·吕尔萨参观葡萄牙后，被阿连特茹的光线和色彩震撼，但他的现代挂毯创作在法国高布林工坊遇到了技术瓶颈。他独具慧眼地发现了波塔莱格雷一家濒临倒闭的传统毛纺厂里，一种独特的“经纬双点”手工打结技法。这种技法能完美复制绘画的笔触、色彩渐变和细节，是机器无法替代的。在他的推动下，国家挂毯制造工坊成立。吕尔萨、维依拉·达席尔瓦等现代艺术大师的画作被编织成不朽的挂毯，这一古老的技艺被注入了现当代艺术的灵魂，工坊由此起死回生，并一跃成为世界顶尖的手工挂毯艺术中心。这不仅拯救了一门手艺，更重新定义了波塔莱格雷的文化身份。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如今，漫步城中，你能清晰地阅读这部层叠的历史：城堡的垛口诉说着中世纪的警惕，巴洛克府邸的涡卷装饰炫耀着十八世纪的繁荣，而挂毯工坊里永不停歇的织机声，则宣告着这座城市在当代的创造力与生命力。它经历了从军事前哨到贵族领地，再到艺术圣地的蜕变，每一次转型都深深烙刻在它的石头与经纬之中。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天半的时间深度探索波塔莱格雷。第一天上午抵达后，从至高点城堡开始，建立空间方位感，然后下山沉浸于老城街巷，重点感受巴洛克府邸的细节与生活气息，并将下午的核心留给需要预约的挂毯工坊导览。第二天上午可以补访头天遗漏的博物馆或教堂内部，午后则留一点时间驱车前往近郊的圣马梅德山脉自然公园进行短途徒步，从自然角度回望这座城市。这样的节奏张弛有度，兼顾了历史、艺术、市井生活与自然风光。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周日和周一大部分博物馆及工坊关闭，务必避开这两天进行核心文化参观。工坊导览非常热门，至少提前一周在其官网预约。老城街道多陡峭石板路，务必穿一双绝对舒适防滑的步行鞋。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨先从古老的圣维森特门进入老城，顺着陡峭而安静的小巷一路向上，去触摸Portalegre城堡那被阳光晒得温热的城墙，在塔楼上等待第一缕阳光完全照亮山下白茫茫的屋顶海洋。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡西门下来，不知不觉就融入了迷宫般的Rua 19 de Junho街，放慢脚步，抬头寻找那些装饰着家族纹章、栩栩如生石雕和精美锻铁栏杆的巴洛克府邸大门，比如卡列罗斯公爵宫。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`绕到背后参观波塔莱格雷大教堂，它的外表朴实如堡垒，但走进去却会被曼努埃尔风格的肋拱顶和镀金木雕祭坛那种内敛的华丽所震撼，记得去回廊看看。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要在预约的时间走进国家挂毯制造工坊，跟随向导，近距离看匠人如何将一幅毕加索或葡萄牙大师的画作用无数彩线一点点“编织”出来，听那富有韵律的织机声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午餐后，去城市博物馆（设在华丽的乌尔萨宫）逛逛，这里不仅展示了本地考古和历史，其本身宫殿房间的装饰、瓷砖和天花板就是一部立体的巴洛克艺术教科书。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚前，散步到Jardim do Tarro公园，这里是本地人休闲的中心，坐在长椅上，看孩子们嬉戏，背景是矗立在城市高处的城堡剪影，感受山城日常的脉搏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐找一家老城区的“tasca”（传统小餐馆），尝尝阿连特茹风味的炖菜、黑猪肉和浓郁的本地红酒，和邻桌的当地人微笑致意。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果有第二天，留出两小时开车到圣马梅德山脉的瞭望点，从森林和巨石的环绕中，回望晨雾里或夕阳下安然坐落于山坳中的波塔莱格雷全景。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡主塔楼顶层`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，利用侧光拍摄老城连绵的白色屋顶、远处的圣马梅德山脉以及点缀其间的教堂钟楼，构图时可将部分古城墙作为前景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`卡列罗斯公爵宫（Palácio dos Caldeira）正门`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光能照亮其精美的巴洛克石雕立面时，使用定焦镜头贴近拍摄门廊细节，捕捉雕塑的光影质感，注意避开停放的车辆。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`国家挂毯制造工坊内部（在允许拍摄的区域）`}</h4>
                  <p className="text-sm text-gray-700">{`对准正在工作的匠人背影和巨大的织机局部，利用室内柔和的自然光，提高ISO，捕捉那种专注的氛围和彩色纱线的纹理，构图可包含一部分墙上的设计原稿。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从Rua do Elvas街某个上坡拐角处`}</h4>
                  <p className="text-sm text-gray-700">{`清晨逆光拍摄，以老巷两侧的白墙和石板路为引导线，将远处城堡的塔楼作为焦点，常有本地居民走过，能增添生活气息。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`圣马梅德山脉的“Miradouro da Serra”观景台`}</h4>
                  <p className="text-sm text-gray-700">{`长焦镜头的理想地点，在晴朗的傍晚，可以压缩空间，拍摄被金色夕阳笼罩的整个波塔莱格雷城市轮廓，城堡尤为突出。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`工坊内拍摄务必先征得许可，绝对禁止使用闪光灯，以免影响匠人工作和伤害古老织物。拍摄当地居民，尤其是老人，一个微笑和示意的手势能换来更自然的表情。阿连特茹的阳光非常强烈，正午时分光线生硬，适合拍摄建筑阴影构成的抽象图案，而非全景。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`奢华历史沉浸`}</h4>
                  <p className="text-sm text-blue-800">{`下榻由18世纪贵族府邸改造的Convento da Provença酒店，房间拥有原始的石头墙壁、拱顶和高挑的天花板，庭院里有一个古老的橙树花园，静谧得能听到泉水声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计艺术之选`}</h4>
                  <p className="text-sm text-green-800">{`位于老城中心的设计酒店，每间客房都以一位与波塔莱格雷挂毯合作过的艺术家为主题装饰，甚至陈列着小幅挂毯作品，是艺术爱好者的天堂。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`山脉边的乡村旅舍`}</h4>
                  <p className="text-sm text-yellow-800">{`开车十分钟即可到达圣马梅德山脚下的乡村客栈，石头房子配有壁炉，早晨在露台上享用早餐，眼前是郁郁葱葱的山景和清新无比的空气。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`市中心舒适公寓`}</h4>
                  <p className="text-sm text-purple-800">{`租住一套带小阳台的老城公寓，早上能听到教堂钟声，下楼就是面包店和咖啡馆，像本地人一样去市场买菜，体验最地道的山城日常。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "波塔莱格雷治安非常好，夜晚独自行走也很安全。夏季（7-8月）和挂毯艺术节期间住宿紧张，需提前数月预订。选择老城住宿意味着要应对狭窄街道和停车挑战，但换来的是无与伦比的沉浸感；选择郊区住宿则更宁静，适合自驾者。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开波塔莱格雷许久后，闭上眼，脑海里响起的不是某段具体的旋律，而是那交织在一起的声音：织机规律沉稳的咔嗒声，教堂钟声在群山间的回响，咖啡馆里瓷杯轻碰的脆响。这些声音构成了这座城市的节奏，一种不慌不忙、专注于当下的节奏。在这个凡事追求效率与速成的时代，这里依然固执地相信“慢”的价值——用数月甚至数年的时间，将一幅画编织进永恒；用几个世纪的耐心，让建筑与山峦长成一体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它教会我的，是一种深藏的韧性。作为边境要塞，它历经战火却未被摧毁；作为艺术堡垒，它守护着一门近乎失传的手艺，并将其推向世界之巅。这种韧性不是咄咄逼人的，而是像阿连特茹的软木橡树一样，外表朴实，内心却无比强大。波塔莱格雷不是明信片上那种一眼惊艳的目的地，它需要你停下脚步，用掌心去感受石头的温度，用眼睛去阅读门廊上的故事，用心去聆听经纬线里的低语。当你终于读懂它，你会收获一种罕见的、厚重的满足感。你会明白，有些地方存在的意义，就是为了提醒我们：真正的美与价值，往往藏在深处，经得起最缓慢的凝视，和最悠长的时光。这，正是深度旅行者所追寻的珍宝。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/alcobaca-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔科巴萨修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alcobaça Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/capela-dos-ossos-faro" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    法
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">法鲁人骨礼拜堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Capela dos Ossos (Faro)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/estoi-palace" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃什托伊宫（埃什托伊庄园）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Estoi Palace (Palácio de Estoi)</p>
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
