import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '克洛斯特新堡 Klosterneuburg｜紧邻维也纳的千年瑰宝，亲睹中世纪珐琅艺术巅峰“凡尔登祭坛” - 最佳欧洲景点',
  description: '如果你从维也纳那些炫目的环城大道拐出来，坐上晃晃悠悠的S40列车，不到半小时，窗外的风景就从都市的繁华切换成了多瑙河畔的田园诗意。克洛斯特新堡就这么安静地卧在一座缓坡上，远远望去，那片巨大的、带着墨绿色洋葱顶的巴洛克建筑群，不像一个景点，更像一个自给自足的小小王国。空气里有葡萄藤的清新气息，还夹杂着',
}

export default function KlosterneuburgAbbeyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '奥地利', href: '/destinations/europe' },
            { label: '克洛斯特新堡', href: '/destinations/europe' },
            { label: '克洛斯特新堡', href: '/attractions/klosterneuburg-abbey' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`克洛斯特新堡・Klosterneuburg・奥地利・克洛斯特新堡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`如果你从维也纳那些炫目的环城大道拐出来，坐上晃晃悠悠的S40列车，不到半小时，窗外的风景就从都市的繁华切换成了多瑙河畔的田园诗意。克洛斯特新堡就这么安静地卧在一座缓坡上，远远望去，那片巨大的、带着墨绿色洋葱顶的巴洛克建筑群，不像一个景点，更像一个自给自足的小小王国。空气里有葡萄藤的清新气息，还夹杂着一丝从古老石墙里透出来的、凉丝丝的时光味道。
走近了，那种压倒性的规模感才真正袭来。这可不是一座精致的“小”修道院，而是一座宫殿般的“大”修道院。穿过拱门走进主庭院，脚步声在四面环绕的宏伟立面前有了回音。这里没有维也纳斯蒂芬大教堂前那种汹涌的人潮，只有零星几个本地人安静地穿过院子，去旁边的教堂做午间祈祷。修士们的黑色长袍偶尔在廊柱下一闪而过，生活与信仰，历史与当下，在这里的节奏缓慢而扎实地交融在一起。
但真正的灵魂震撼，藏在建筑物内部。当你走进那略显昏暗的珍宝馆，站在“凡尔登祭坛”面前时，整个世界仿佛都安静了。起初你只会被它黄金的炫目光泽所吸引，但凑近了，呼吸都会不自觉地放轻。那是由51块精美绝伦的珐琅牌组成的圣经故事画册，蓝色深邃如夜空，绿色鲜活如初春的树叶，金色在灯光下流淌着温润的光泽。每一幅小画面里的人物都有细微到极致的表情，你能看到悲伤、虔诚、惊讶。这不仅仅是艺术品，这是近九百年前一位无名匠人，用火焰和矿物粉末书写下的、关于信仰与美的炽热诗篇。触摸不到，却能深深感受到那股穿透岁月的热量。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果你从维也纳那些炫目的环城大道拐出来，坐上晃晃悠悠的S40列车，不到半小时，窗外的风景就从都市的繁华切换成了多瑙河畔的田园诗意。克洛斯特新堡就这么安静地卧在一座缓坡上，远远望去，那片巨大的、带着墨绿色洋葱顶的巴洛克建筑群，不像一个景点，更像一个自给自足的小小王国。空气里有葡萄藤的清新气息，还夹杂着一丝从古老石墙里透出来的、凉丝丝的时光味道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走近了，那种压倒性的规模感才真正袭来。这可不是一座精致的“小”修道院，而是一座宫殿般的“大”修道院。穿过拱门走进主庭院，脚步声在四面环绕的宏伟立面前有了回音。这里没有维也纳斯蒂芬大教堂前那种汹涌的人潮，只有零星几个本地人安静地穿过院子，去旁边的教堂做午间祈祷。修士们的黑色长袍偶尔在廊柱下一闪而过，生活与信仰，历史与当下，在这里的节奏缓慢而扎实地交融在一起。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但真正的灵魂震撼，藏在建筑物内部。当你走进那略显昏暗的珍宝馆，站在“凡尔登祭坛”面前时，整个世界仿佛都安静了。起初你只会被它黄金的炫目光泽所吸引，但凑近了，呼吸都会不自觉地放轻。那是由51块精美绝伦的珐琅牌组成的圣经故事画册，蓝色深邃如夜空，绿色鲜活如初春的树叶，金色在灯光下流淌着温润的光泽。每一幅小画面里的人物都有细微到极致的表情，你能看到悲伤、虔诚、惊讶。这不仅仅是艺术品，这是近九百年前一位无名匠人，用火焰和矿物粉末书写下的、关于信仰与美的炽热诗篇。触摸不到，却能深深感受到那股穿透岁月的热量。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`克洛斯特新堡`} />
                <InfoRow label="英文名称" value={`Klosterneuburg`} />
                <InfoRow label="正式名称" value={`Klosterneuburg Abbey (Stift Klosterneuburg)`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`克洛斯特新堡`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`奥地利最古老、最重要的修道院之一，被誉为“奥地利的国家摇篮”，其建立与奥地利国家形成初期的历史紧密交织。`} />
                <InfoRow label="建筑特色" value={`一座融合了中世纪罗马式根基、恢弘巴洛克野心与19世纪历史主义风格的庞大建筑综合体，宛如一部立体的建筑史书。`} />
                <InfoRow label="建筑风格" value={`以壮丽的巴洛克风格为主导，其核心部分由奥地利伟大的巴洛克建筑师约瑟夫·恩格尔哈德·冯·埃尔拉赫父子设计。`} />
                <InfoRow label="文化价值" value={`不仅是一座活跃的宗教场所，更是欧洲艺术史的宝库，尤其以藏有12世纪无价之宝“凡尔登祭坛”而享有世界级声誉。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`修道院建筑群及博物馆全年开放，但开放时间分夏季（4月1日至10月31日）和冬季（11月1日至3月31日）。夏季：每日上午9点至下午6点，最后入场时间为下午5点。冬季：每日上午10点至下午5点，最后入场时间为下午4点。导览游每日固定时间举行（德语/英语），具体场次需提前在官网查询。重要宗教节日（如圣诞节、复活节）及元旦上午可能关闭或缩短开放时间，修道院教堂则全天对祈祷者开放。`} />
              <InfoRow label="门票价格" value={`基础门票（含博物馆及部分区域）：成人14欧元，优惠票（学生、65岁以上老人）12欧元，家庭票（2大+最多4小）29欧元。深度导览游（含珍宝馆及凡尔登祭坛重点讲解）：成人19欧元，优惠票16欧元。6岁以下儿童免费。建议购买“Klosterneuburg Plus”通票（约24欧元），包含深度导览、一杯修道院自产葡萄酒及纪念品折扣。门票可在线提前购买以避免排队。`} />
              <InfoRow label="地址" value={`Stiftsplatz 1, 3400 Klosterneuburg, Austria`} />
              <InfoRow label="交通方式" value={`从维也纳出发极为便利。最推荐乘坐S-Bahn（市郊铁路）：在维也纳市中心如Wien Mitte或Wien Franz-Josefs-Bahnhof车站，乘坐S40或S45线，方向为Tulln或Unter Purkersdorf，在“Klosterneuburg-Kierling”站下车，车程约25分钟，班次密集（高峰时段每10-15分钟一班）。出站后沿清晰路标步行约15分钟上山即可抵达修道院正门。亦可从维也纳Heiligenstadt地铁站（U4线终点）乘坐238路巴士，约20分钟直达修道院山脚下。自驾从维也纳市中心出发约30分钟，修道院设有收费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事得从一位名叫利奥波德三世的巴本堡边疆伯爵说起。这位被后世尊称为“圣人利奥波德”的贵族，在12世纪初决定在这里，他心爱的居所旁，建立一座新的修道院。传说他的新娘阿格尼丝的一条珍贵面纱被风吹走，多年后竟在一条开满鲜花的灌木丛上奇迹般地寻回，利奥波德视此为神迹，便在此地奠基。1133年，这座奥古斯丁修道院正式成立，它从诞生之初就不仅仅是修行之地，更是巴本堡家族权力与虔诚的象征，是奥地利领土形成初期的一个精神与政治核心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "修道院的早期荣耀，与一件杰作的诞生密不可分。就在修道院落成后不久，大约在1181年，一位来自法国凡尔登（是的，就是那个后来以条约闻名的凡尔登）的匠人尼古拉斯，完成了那件惊世骇俗的珐琅祭坛。这件作品采用了当时最顶尖的“景泰蓝”珐琅技术，将色彩永久熔铸在黄金底板上。它之所以被称为“凡尔登祭坛”，并非指明产地，而是为了向这位天才匠人致敬。祭坛最初被用作诵经台前的装饰屏，上面的画面就是给不识字的信徒们看的“图画圣经”。它见证了中世纪鼎盛时期，宗教艺术如何达到技艺与神学思想的完美融合。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光流转到18世纪，奥地利正处于哈布斯堡王朝的强盛时期。皇帝查理六世有一个宏大的梦想：他要把克洛斯特新堡修道院，打造成“奥地利的埃斯科里亚尔”（西班牙的皇家修道院建筑群）。他聘请了当时最显赫的建筑师家族——埃尔拉赫父子，来主持这项浩大的巴洛克化改造工程。我们今天看到的巨大穹顶、宏伟的立面、华丽的帝王阶梯，大多源于这个野心勃勃的计划。遗憾的是，皇帝在1740年去世，巨大的工程也随之停滞，只完成了规划中的一小部分。但这未完成的“帝国梦”，却给修道院留下了独一无二的混搭风貌：一边是极尽奢华的巴洛克大厅，另一边仍是古朴简单的中世纪回廊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在接下来的几个世纪里，修道院经历了风风雨雨，包括拿破仑战争的劫掠，但它始终是学术、酿酒（是的，这里的修士酿的葡萄酒非常有名）和慈善的中心。19世纪又进行了一些历史主义风格的修缮和补充，进一步丰富了它的建筑层次。尽管历经沧桑，修道院的核心社区——奥古斯丁教士会——从未中断，他们至今仍管理着这片庞大的产业，维护着古老的图书馆、档案馆和世界级的艺术收藏，让这个地方始终保持着鲜活的生命力。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天的时间，从容地感受这座“修道院之城”。最好在上午10点前抵达，既能避开可能的团队游客，也能享受到清晨柔和的光线。整体游览节奏宜慢不宜快，可以分为三大板块：上午重点探索建筑与博物馆（特别是凡尔登祭坛），中午在修道院酒庄或附近老城享用午餐，下午参加深度导览游深入通常不对外开放的区域（如图书馆或地下酒窖），最后在庭院或花园里静静回味。这样的安排能让你由表及里，从艺术观赏到生活体验，完整地理解这个地方的多重灵魂。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必提前在官网查看并预订深度导览游（特别是英语场次），这是进入图书馆等核心区域的唯一方式，现场很可能约满。参观教堂和部分区域时需穿着得体，避免无袖上衣和过短的裤裙。修道院内的博物馆和教堂区域禁止使用闪光灯，为保护千年祭坛，请务必遵守。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从气势恢宏的主庭院开始，仰头感受巴洛克立面的庄严与那些未完成部分留下的历史悬念。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随指示牌的引导直接前往博物馆，在静谧的展厅里让自己至少有半小时完全沉浸在“凡尔登祭坛”前，细细辨认每一块珐琅牌上的故事与情绪。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步入相邻的珍宝馆，让眼睛适应一下那些闪烁的金器、象牙雕刻和华丽祭服带来的视觉盛宴，它们讲述了修道院千年来的财富与虔诚。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上华丽的帝王阶梯，感受哈布斯堡王朝昔日的雄心，并在连接新旧建筑的廊道里体会时光交替的奇妙错觉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要参加一次定时的导览游，让修士或专业讲解员带你走进那座令人屏息的巴洛克图书馆，空气里弥漫着旧皮革与纸张的香气，知识被安静地供奉在雕花的胡桃木书架里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`导览通常会包含参观古老的回廊与修道院教堂，注意观察教堂里罗马式与哥特式元素如何与后来的巴洛克装饰共存。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间允许，走下蜿蜒的阶梯，探访修士们经营了数百年的地下酒窖，了解他们的酿酒哲学，并品尝一小杯修道院自产的白葡萄酒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，从建筑群中走出来，绕到南面的平台或花园，从这里回望整个修道院建筑群和多瑙河谷的景色，将历史的厚重与自然的开阔一同收纳心底。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`主庭院东南角仰拍穹顶`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点的侧光能完美勾勒出绿色洋葱顶和金色皇冠的轮廓，将宏伟的巴洛克立面作为背景，构图充满力量感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从修道院南侧下方葡萄园的小径回望`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落时分，柔和的光线会给整个建筑群披上金辉，多瑙河谷作为远景，能拍出修道院作为“山巅之城”的孤傲与宁静。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`巴洛克图书馆内部长焦捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`尽管禁止使用三脚架且光线较暗，但调高感光度，用长焦镜头捕捉一排排精雕细琢的书架走廊的纵深感，能拍出极具知识神圣感的画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`凡尔登祭坛细节特写`}</h4>
                  <p className="text-sm text-gray-700">{`利用展厅内专门设计的照明，将相机镜头尽可能贴近玻璃（注意避免反光），专注于单块珐琅牌上人物的面部表情或衣饰纹理，那穿越时空的工艺之美令人惊叹。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内拍摄尤其是对珍贵展品，请务必关闭闪光灯和提示音，保持安静。在修道院教堂内拍摄时，应优先尊重正在进行的宗教活动，避免将祈祷者作为主要拍摄对象。使用广角镜头能更好地捕捉庭院和大型厅堂的宏伟空间感。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在克洛斯特新堡老城中心的家庭式 Pension，房间干净明亮，推开窗就是爬满藤蔓的宁静小巷，早上步行两分钟就能融入当地人的面包店和咖啡馆氛围。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`下榻由历史建筑改造的精品酒店，房间可能保留了古老的拱顶或砖墙，现代设计与历史痕迹巧妙结合，酒店餐厅常常提供用修道院葡萄酒烹制的创意当地菜肴。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`选择多瑙河畔拥有全景露台的五星级酒店，在房间内就能将蜿蜒的河流和对岸的克洛斯特新堡全景尽收眼底，体验真正的“君王视野”。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`隐居情怀`}</h4>
                  <p className="text-sm text-purple-800">{`预订附近葡萄酒产区一家真正的农庄民宿，白天在葡萄园散步，夜晚在星空下品尝房东自酿的佳酿，享受纯粹的奥地利乡村宁静。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "克洛斯特新堡治安极好，夜晚安静祥和。如果计划深度游览修道院并品尝葡萄酒，非常建议在此留宿一晚，而非从维也纳匆匆往返。旅游旺季（夏季和圣诞季）房源紧俏，尤其是特色住宿，务必提前数月预订。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开克洛斯特新堡的时候，我脑子里盘旋的不是那些具体的建筑数据或历史年份，而是一种奇特的“完整感”。这里不像一些被精心供奉在玻璃罩里的博物馆遗迹，它太“活”了。你看到修士们抱着古籍匆匆走过图书馆，闻到酒窖里飘出的新酒清香，听到教堂里管风琴的试音，甚至能在礼品店买到他们自己种的苹果做的果酱。历史在这里不是标本，而是仍在流动的日常。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这或许就是它最打动人心的地方。它宏大，却因为持续的生命力而显得亲切；它古老，却因为那些仍在延续的传统而显得年轻。它静静矗立在维也纳的后花园，像一个沉稳的兄长，提醒着人们在帝国都城的炫目繁华之外，还有一种更深厚、更绵长的力量，源于信仰、源于土地、源于对手艺世代不息的坚守。来到这里，你不只是看了一件顶级国宝，更是触摸到了奥地利这个国家沉稳而富有韧性的文化脉搏。对于任何厌倦了走马观花，渴望一次触及灵魂的深度之旅的人来说，克洛斯特新堡都是一个不容错过的、能让你安静下来与历史对话的驿站。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/retz-windmill-wine-cellars" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    雷
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">雷茨</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Retz</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gmunden-lake-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格蒙登湖城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gmunden Lake City</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/innsbruck-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    因
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">因斯布鲁克老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Innsbruck Old Town</p>
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
