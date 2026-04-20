import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '霍伦 Hoorn｜邂逅荷兰东印度公司的黄金时代 - 漫步在画中的运河与山形墙之间 - 最佳欧洲景点',
  description: '从霍伦火车站走出来的那一刻，你就被扔进了一幅巨大的、充满生活气息的古典油画里。空气里有北海吹来的、微咸而清冽的风，混合着运河边咖啡馆飘出的现磨咖啡香。眼前的一切都是紧凑而鲜活的：窄窄的运河像闪亮的银带，切割开一排排色彩柔和、顶着一道道华丽山形墙的老房子。那些山形墙啊，有阶梯式的，有钟形的，每一座都像...',
}

export default function HoornNetherlandsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '霍伦', href: '/attractions/hoorn-netherlands' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`霍伦・Hoorn・荷兰・霍伦`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`从霍伦火车站走出来的那一刻，你就被扔进了一幅巨大的、充满生活气息的古典油画里。空气里有北海吹来的、微咸而清冽的风，混合着运河边咖啡馆飘出的现磨咖啡香。眼前的一切都是紧凑而鲜活的：窄窄的运河像闪亮的银带，切割开一排排色彩柔和、顶着一道道华丽山形墙的老房子。那些山形墙啊，有阶梯式的，有钟形的，每一座都像戴了一顶独一无二的帽子，在北方变幻的光线下，砖红的墙面时而温暖如蜜，时而沉静如铁。耳边是清脆的自行车铃声，本地人骑着车，从你身边轻盈地掠过，消失在又一条石板小巷深处。
你顺着人流，自然而然就走到了罗德施泰因广场 (Rode Steen)。这里与其说是一个景点，不如说是整座城市的心脏和客厅。广场中央矗立着扬·彼得松·科恩 (Jan Pieterszoon Coen) 的雕像，这位充满争议的东印度公司总督目光坚定地望向他曾掌控的东方海域。但当地人似乎早已习惯了与历史共处，他们悠闲地坐在雕像下的长椅上晒太阳，孩子们绕着底座追逐嬉戏。广场一侧是宏伟的西弗里斯博物馆，它本身就是一座17世纪的瑰宝，另一侧则是各种小酒馆，下午时分就已经坐满了喝啤酒聊天的人们。历史在这里不是被封存的标本，而是日常呼吸的一部分。
最让人心动的，是沿着老港口 (Oude Haven) 的那一圈漫步。海水轻轻拍打着古老的系船柱，桅杆林立的复古帆船静静停泊，其中那艘著名的“哈尔林恩号”复制品会让你瞬间恍惚。闭上眼睛，仿佛能听到几个世纪前这里震耳欲聋的喧嚣：水手的号子、起重机的吱呀、商贩的叫卖、即将远航东方寻宝的船只启锚时铁链的哗啦声。空气中似乎还残留着那时堆积如山的香料——肉豆蔻、胡椒、肉桂——那令人眩晕的财富气味。但睁开眼，一切又归于宁静的当下，只有海鸥的鸣叫和风中旗帜的猎猎声。
而真正让我感到这座城市温度的，是那些不经意的小细节：一扇窗台上盛开的天竺葵，一座小桥边写着17世纪房主名字的门牌，码头边那个指向世界各大港口方向的古老航标。还有那个著名的“霍伦男孩”雕像，他站在水边，永远眺望着大海，代表着这座城市无数出海未归的儿子与父亲。霍伦的魅力，就在于这种宏阔历史与细腻人性的交织，它不只是一个辉煌的过去，更是一个被历史深深滋养、却活得自在从容的现在。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`从霍伦火车站走出来的那一刻，你就被扔进了一幅巨大的、充满生活气息的古典油画里。空气里有北海吹来的、微咸而清冽的风，混合着运河边咖啡馆飘出的现磨咖啡香。眼前的一切都是紧凑而鲜活的：窄窄的运河像闪亮的银带，切割开一排排色彩柔和、顶着一道道华丽山形墙的老房子。那些山形墙啊，有阶梯式的，有钟形的，每一座都像戴了一顶独一无二的帽子，在北方变幻的光线下，砖红的墙面时而温暖如蜜，时而沉静如铁。耳边是清脆的自行车铃声，本地人骑着车，从你身边轻盈地掠过，消失在又一条石板小巷深处。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你顺着人流，自然而然就走到了罗德施泰因广场 (Rode Steen)。这里与其说是一个景点，不如说是整座城市的心脏和客厅。广场中央矗立着扬·彼得松·科恩 (Jan Pieterszoon Coen) 的雕像，这位充满争议的东印度公司总督目光坚定地望向他曾掌控的东方海域。但当地人似乎早已习惯了与历史共处，他们悠闲地坐在雕像下的长椅上晒太阳，孩子们绕着底座追逐嬉戏。广场一侧是宏伟的西弗里斯博物馆，它本身就是一座17世纪的瑰宝，另一侧则是各种小酒馆，下午时分就已经坐满了喝啤酒聊天的人们。历史在这里不是被封存的标本，而是日常呼吸的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最让人心动的，是沿着老港口 (Oude Haven) 的那一圈漫步。海水轻轻拍打着古老的系船柱，桅杆林立的复古帆船静静停泊，其中那艘著名的“哈尔林恩号”复制品会让你瞬间恍惚。闭上眼睛，仿佛能听到几个世纪前这里震耳欲聋的喧嚣：水手的号子、起重机的吱呀、商贩的叫卖、即将远航东方寻宝的船只启锚时铁链的哗啦声。空气中似乎还残留着那时堆积如山的香料——肉豆蔻、胡椒、肉桂——那令人眩晕的财富气味。但睁开眼，一切又归于宁静的当下，只有海鸥的鸣叫和风中旗帜的猎猎声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而真正让我感到这座城市温度的，是那些不经意的小细节：一扇窗台上盛开的天竺葵，一座小桥边写着17世纪房主名字的门牌，码头边那个指向世界各大港口方向的古老航标。还有那个著名的“霍伦男孩”雕像，他站在水边，永远眺望着大海，代表着这座城市无数出海未归的儿子与父亲。霍伦的魅力，就在于这种宏阔历史与细腻人性的交织，它不只是一个辉煌的过去，更是一个被历史深深滋养、却活得自在从容的现在。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`霍伦`} />
                <InfoRow label="英文名称" value={`Hoorn`} />
                <InfoRow label="正式名称" value={`Hoorn`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`霍伦`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`荷兰东印度公司 (VOC) 的六大商会总部之一，17世纪荷兰黄金时代全球贸易网络的核心枢纽与财富心脏。`} />
                <InfoRow label="建筑特色" value={`完美保存了17世纪鼎盛时期的城市肌理，密集的运河、港口与数百座华丽的山形墙商人豪宅构成了鲜活的露天建筑博物馆。`} />
                <InfoRow label="建筑风格" value={`以荷兰文艺复兴风格和古典主义风格为主的山形墙建筑，砖石结构，装饰精致，体现了黄金时代的富裕与审美。`} />
                <InfoRow label="文化价值" value={`这里不仅是航海传说的起点（合恩角得名于此），更是一座将全球贸易史、海洋野心与市民日常生活无缝编织在一起的活态文化遗产。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`整座古城全天开放。主要室内景点（如西弗里斯博物馆、霍伦博物馆、20世纪博物馆）开放时间通常为周二至周日 10:00 - 17:00，周一闭馆或缩短开放时间。具体时间随季节（尤其是冬季）调整，行前务必查阅官网。码头区的船只游览通常在四月至十月运营。`} />
              <InfoRow label="门票价格" value={`漫步古城免费。西弗里斯博物馆 (Westfries Museum) 成人票约12.5欧元，持博物馆卡 (Museumkaart) 免费。霍伦博物馆 (Museum Hoorn) 成人票约8欧元。20世纪博物馆 (Museum van de 20e Eeuw) 成人票约10欧元。联票或有折扣，学生及65岁以上老人通常有优惠。`} />
              <InfoRow label="地址" value={`Grote Noord 2, 1621 EM Hoorn, Netherlands`} />
              <InfoRow label="交通方式" value={`从阿姆斯特丹中央车站 (Amsterdam Centraal) 搭乘前往霍伦方向的列车（Sprinter或Intercity），约30-40分钟即可直达霍伦火车站。班次非常频繁，高峰时段每15-20分钟一班，无需提前购票，可在车站OV售票机或使用OV交通卡直接刷卡上车。从霍伦火车站步行至古城中心（如罗德施泰因广场）仅需10分钟，沿途风景已非常迷人。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从更早的时候说起。大约在14世纪，霍伦作为一个渔村在须德海（现在的艾瑟尔湖）南岸悄然生长。它的名字可能源于“角”（Horne），指代这片伸入水中的土地。得益于优越的港口位置，它很快加入了强大的汉萨同盟，通过贸易鲱鱼和啤酒积累了最初的资本。到了16世纪，荷兰反抗西班牙统治的八十年战争爆发，霍伦坚定地站在了起义者一边，这场战争虽然带来了破坏，但也催生了独立与冒险的精神土壤，为接下来的大航海时代做好了准备。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的命运转折点发生在1602年。那一年，为了避免内部竞争，几家荷兰贸易公司合并成立了著名的荷兰东印度公司（VOC），而霍伦，凭借其雄厚的资本和航海传统，成为了公司六大商会（Kamers）总部之一。从这一刻起，霍伦被注入了疯狂的活力。城市的财富如洪水般涌来。商人们投资组建船队，从这里的港口出发，绕过好望角，驶向神秘的东方——印度尼西亚、斯里兰卡、日本。他们带回的不仅是胡椒、丁香、茶叶、瓷器，还有令人难以置信的利润。霍伦的街头，一夜之间挤满了暴富的船长、精明的商人和怀揣梦想的水手。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座城市的面貌被彻底重塑。我们今天看到的那些优雅的运河和豪宅，几乎全部建于17世纪，也就是荷兰的“黄金时代”。成功的商人们争相建造最能彰显财富与品位的住宅，山形墙的设计竞赛仿佛一场无声的时尚秀。市政厅、秤量房等公共建筑也拔地而起，极尽奢华。也正是在这个辉煌时期，1616年，霍伦之子威廉·斯豪滕和雅各布·勒梅尔发现了南美洲最南端的海岬，并以家乡之名命名为“合恩角”（Kaap Hoorn），将这个小镇的名字永远刻在了世界地图上。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，盛极必衰。18世纪，随着荷兰东印度公司因腐败、竞争和战争走向衰落，霍伦的黄金时代也缓缓落幕。更大的打击来自自然：1840年，一条连接阿姆斯特丹的铁路绕过霍伦修建，使它的交通重要性下降；而1932年完成的阿夫鲁戴克大堤坝，将原本的须德海变成了内湖艾瑟尔湖，霍伦从此失去了直接通往北海的通道，从一个世界级海港“降级”为一个湖畔历史名城。繁荣的潮水退去，留下的是一个精美但一度陷入沉睡的贝壳。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但霍伦的故事没有结束。20世纪中后期，人们意识到他们拥有的不是一座废弃的港口，而是一件无价的历史珍宝。精心的保护和修复开始了。老建筑没有被推倒，而是被赋予了新的生命——变成了博物馆、公寓、餐厅和商店。那些曾经停满东印度商船的码头，如今停泊着游艇和复古帆船，迎来了世界各地的游客。霍伦完成了一次优雅的转型，从追逐全球财富的急先锋，变成了守护自身历史与生活美学的隐士。它把惊心动魄的航海史诗，酿成了一杯可以慢慢品味的醇酒。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你安排整整一天给霍伦，最好选择一个晴朗的平日（避开周末的喧嚣），乘坐早班火车从阿姆斯特丹出发，大约上午九点半抵达。这样的安排能让你在游客大军到来前，独享古城清晨的宁静光影。整体游览节奏宜慢不宜快，核心是“漫步”与“感受”。路线会从火车站开始，以顺时针方向环绕古城核心区，最后抵达风景如画的老港口，全程步行即可，耗时约6-8小时，包含了深入参观一两个博物馆、在运河边午餐、以及傍晚在港口发呆的时间。这样设计的逻辑是，先建立对城市格局的宏观印象，再层层深入历史的细节，最后在落日余晖中体会这座海港之城的昔日辉煌与今日宁静。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避免周日来访，许多商店和部分博物馆会关门或缩短营业时间，城市氛围会略显冷清。古城内停车位紧张且昂贵，强烈建议使用公共交通。北荷兰省的天气说变就变，即便夏日也请务必带一件防风外套。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从火车站南广场出来，别急着看地图，先让自己迷失在通往市中心那些挂着花篮的静谧小巷里，感受砖石路面在脚下传来的踏实感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`毫无悬念地让自己被引向罗德施泰因广场，在科恩雕像下驻足片刻，然后绕到西弗里斯博物馆的背面，欣赏它那装饰着精美雕刻的山形墙侧面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要走进西弗里斯博物馆，哪怕只看一层，让那些黄金时代的油画、家具和航海地图把你瞬间拉回400年前商贾云集的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从博物馆出来，穿过广场，拐进北侧的小街，找到那家藏着“霍伦男孩”雕像的安静角落，读一读旁边铭牌上关于等待与思念的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着运河向西漫步，留心观察每一座山形墙的形状和门楣上的雕刻，试着猜猜它们的主人曾是船长、香料商还是市政官员。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在运河边的某家棕色咖啡馆找张靠窗的桌子坐下，点一份荷兰苹果派和一杯咖啡，像本地人一样看着窗外的船只缓缓经过桥洞。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`饭后散步去古老的西门（Oosterpoort），这是古城唯一留存下来的城门，站在门下想象昔日商队从这里进出城市的繁忙景象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`将一天的高潮留给黄昏时的老港口，坐在岸边的长椅上，看夕阳将古老的船只、砖房和天空染成一片温暖的金红色，直到灯光渐次亮起。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`罗德施泰因广场东侧桥头`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光，将科恩雕像、博物馆山形墙与广场上的咖啡馆人群一同纳入镜框，营造历史与生活的对话感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`老港口最西端的防波堤上`}</h4>
                  <p className="text-sm text-gray-700">{`日出时分或黄昏，利用长焦镜头压缩空间，将著名的“霍伦男孩”雕像作为前景，背后是桅杆林立的复古船队和色彩斑斓的老建筑，形成动人的层次。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`西弗里斯博物馆内庭院`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，站在二楼回廊向下俯拍，捕捉阳光在黑白相间的大理石地砖上形成的几何光影，以及庭院中那座古老的日晷。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`任何一条东西向的运河小桥中央`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚的低角度光线，蹲下身子将相机贴近水面，拍摄两岸山形墙建筑在水中的完美倒影，以及偶尔划过的一只天鹅或小船。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`荷兰北部的光线柔和而多变，阴天时适合拍摄建筑细节和浓郁的色彩，晴天则要抓住清晨与黄昏的黄金时刻。在博物馆内部拍摄前，务必确认是否允许使用闪光灯和三脚架，通常都是禁止的。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`设计感之选`}</h4>
                  <p className="text-sm text-blue-800">{`由黄金时代商人豪宅改造的精品酒店，房间保留着裸露的原始木梁和壁炉，浴室却配备最现代的雨淋花洒，在历史感中享受极致舒适。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`运河景观民宿`}</h4>
                  <p className="text-sm text-green-800">{`住在某条安静运河边的带阁楼公寓里，早晨被透过斜窗的阳光和水面反射的波光唤醒，厨房里可以自己煮一壶咖啡，体验本地人的日常。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`港口历史客栈`}</h4>
                  <p className="text-sm text-yellow-800">{`选择老港口边一栋17世纪的海员旅馆旧址，房间窗户正对泊满船只的港湾，夜晚能听到轻柔的水声，沉浸感十足。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`城外宁静庄园`}</h4>
                  <p className="text-sm text-purple-800">{`如果自驾，可以考虑城外艾瑟尔湖畔的现代设计酒店，拥有无敌湖景和安静的花园，与古城的喧嚣保持一段诗意的距离。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古城内的住宿数量有限且非常抢手，尤其是在夏季和周末，务必提前数月预订。住在中心区虽然方便，但请注意老房子的楼梯通常陡峭狭窄，携带大件行李会是个挑战。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开霍伦很久以后，我发现自己最常回忆起的，不是某个具体的博物馆展品或建筑细节，而是一种整体的、氤氲的氛围。那是一种在别处很难找到的平衡感——辉煌的历史与平实的当下之间，没有隔着冰冷的玻璃或森严的栏杆，而是像运河的水与岸边的石阶一样，亲密无间地交融在一起。你会看到一个刚从超市出来的老太太，推着小车从一栋国宝级的山形墙豪宅门前走过；你会看到年轻的情侣，坐在价值连城的古董码头边分享一支冰淇淋。历史在这里没有成为发展的负担或橱窗里的标本，它被消化、吸收，变成了这座城市从容不迫的底气和生活美学的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、不断刷新高度的世界里，霍伦像一位智慧的长者，安静地坐在水边，它讲述的恰恰是另一种成功学：不是一味地向前狂奔，而是在某个时刻懂得转身，珍惜并温柔地对待自己来时的路。它告诉我们，一个地方的伟大，不仅可以体现在它征服世界时的雄心，更可以体现在它回归本心后的宁静与丰盈。对于每一位渴望深度游的旅人来说，霍伦是一堂无声却深刻的历史课，也是一次心灵的舒缓按摩。在这里，你不仅能走进荷兰黄金时代最生动的剖面，更能收获一种关于如何与时间相处、如何让历史滋养而非禁锢当下的珍贵启迪。这，或许才是旅行能带给我们的最宝贵的礼物。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/zierikzee-historic-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    济
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">济里克泽历史老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Zierikzee</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/fort-bourtange" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布尔坦赫星形要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Fort Bourtange</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/koppelpoort" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿默斯福特中世纪城门</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Koppelpoort</p>
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
