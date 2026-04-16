import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '圣安德烈 Szentendre｜多瑙河畔的调色盘，匈牙利最迷人的艺术飞地 - 最佳欧洲景点',
  description: '火车缓缓驶过多瑙河上的铁桥，窗外的景色从布达佩斯的都市轮廓，切换成河湾、远山和一片簇拥在山坡上的、像被打翻的颜料盒染过的屋顶。这就是你对圣安德烈（Szentendre）的第一眼印象——明媚、跳跃，带着一股直接撞进怀里的热烈。走出小小的火车站，潮湿的河风里混着咖啡香和刚出炉的“ kürtőskalác...',
}

export default function SzentendreArtTownHungaryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '圣安德烈', href: '/attractions/szentendre-art-town-hungary' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">圣安德烈・Szentendre・匈牙利・圣安德烈镇</h1>
          <p className="text-lg text-gray-600 mb-6">
            火车缓缓驶过多瑙河上的铁桥，窗外的景色从布达佩斯的都市轮廓，切换成河湾、远山和一片簇拥在山坡上的、像被打翻的颜料盒染过的屋顶。这就是你对圣安德烈（Szentendre）的第一眼印象——明媚、跳跃，带着一股直接撞进怀里的热烈。走出小小的火车站，潮湿的河风里混着咖啡香和刚出炉的“ kürtőskalács”（烟囱卷）的焦糖甜味，顺着坡道往上走，脚下是几百年被磨得光滑温润的鹅卵石，发出哒哒的清脆回响。
这个小镇的声音是独特的。它不是寂静，而是一种饱满的“嗡嗡”声。主广场（Fő tér）上，手风琴艺人拉奏着吉普赛旋律，声音飘过广场中央的“商旅十字架”；隔壁小巷的画廊里，传来画家和访客低声探讨笔触的絮语；而那些紧闭的、颜色鲜艳的木门后面，或许正有陶轮在转动，或画刷在画布上沙沙作响。圣安德烈不是一个被供起来的博物馆，它是一个仍在呼吸、创作的艺术有机体。当地人——无论是世代居住于此的匈牙利人，还是后来迁入的艺术家——都习惯在下午端着小小的浓缩咖啡杯，坐在自家门前的石阶上，看来往的游客，也看光影在对面墙上缓慢爬行。
它的核心魅力，就在于这种“生活的艺术化”。艺术不是高悬在殿堂，而是渗进了每一条缝隙：窗台上的天竺葵是色彩搭配，晾晒的桌布是随风飘动的画布，就连肉铺橱窗里悬挂的香肠，都排列出一种粗犷的韵律感。你在这里最深的感受不是“观赏”，而是“浸泡”。浸泡在一种对美毫不费力、却又深入骨髓的日常追求里，它抚平了旅人的焦虑，让你不由自主地放慢脚步，眼睛变得像孩子一样，重新对形状和颜色敏感起来。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">火车缓缓驶过多瑙河上的铁桥，窗外的景色从布达佩斯的都市轮廓，切换成河湾、远山和一片簇拥在山坡上的、像被打翻的颜料盒染过的屋顶。这就是你对圣安德烈（Szentendre）的第一眼印象——明媚、跳跃，带着一股直接撞进怀里的热烈。走出小小的火车站，潮湿的河风里混着咖啡香和刚出炉的“ kürtőskalács”（烟囱卷）的焦糖甜味，顺着坡道往上走，脚下是几百年被磨得光滑温润的鹅卵石，发出哒哒的清脆回响。</p>
              <p className="text-gray-700 leading-relaxed mb-4">这个小镇的声音是独特的。它不是寂静，而是一种饱满的“嗡嗡”声。主广场（Fő tér）上，手风琴艺人拉奏着吉普赛旋律，声音飘过广场中央的“商旅十字架”；隔壁小巷的画廊里，传来画家和访客低声探讨笔触的絮语；而那些紧闭的、颜色鲜艳的木门后面，或许正有陶轮在转动，或画刷在画布上沙沙作响。圣安德烈不是一个被供起来的博物馆，它是一个仍在呼吸、创作的艺术有机体。当地人——无论是世代居住于此的匈牙利人，还是后来迁入的艺术家——都习惯在下午端着小小的浓缩咖啡杯，坐在自家门前的石阶上，看来往的游客，也看光影在对面墙上缓慢爬行。</p>
              <p className="text-gray-700 leading-relaxed mb-4">它的核心魅力，就在于这种“生活的艺术化”。艺术不是高悬在殿堂，而是渗进了每一条缝隙：窗台上的天竺葵是色彩搭配，晾晒的桌布是随风飘动的画布，就连肉铺橱窗里悬挂的香肠，都排列出一种粗犷的韵律感。你在这里最深的感受不是“观赏”，而是“浸泡”。浸泡在一种对美毫不费力、却又深入骨髓的日常追求里，它抚平了旅人的焦虑，让你不由自主地放慢脚步，眼睛变得像孩子一样，重新对形状和颜色敏感起来。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="圣安德烈" />
                <InfoRow label="英文名称" value="Szentendre" />
                <InfoRow label="正式名称" value="Szentendre" />
                <InfoRow label="国家" value="匈牙利" />
                <InfoRow label="城市" value="圣安德烈镇" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="多瑙河湾的心脏，数百年来作为多元文化（特别是塞尔维亚人）的避难所和艺术家的灵感源泉，被誉为“匈牙利的艺术之都”。" />
                <InfoRow label="建筑特色" value="陡峭的鹅卵石街道两旁，密集排列着色彩明快（鹅黄、天蓝、桃粉、草绿）的巴洛克与洛可可风格市民住宅，红瓦屋顶层层叠叠，构成童话般的立体景观。" />
                <InfoRow label="建筑风格" value="以南斯拉夫（塞尔维亚）巴洛克风格为主导，混合了匈牙利民间元素和中欧古典主义，形成独特的“圣安德烈风格”。" />
                <InfoRow label="文化价值" value="一个活生生的、由移民社群塑造的文化共生体典范，其艺术遗产与持续活跃的当代艺术场景无缝衔接，是理解中欧文化交融的微型百科全书。" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="小镇本身全天开放。各博物馆、画廊开放时间不一，通常为周二至周日 10:00-18:00（部分冬季缩短至16:00关门）。多数小型画廊和工作室在周一休息，但主街上的商店和咖啡馆通常全年无休。重要节日如圣诞节、新年当天，大部分机构会闭馆。" />
              <InfoRow label="门票价格" value="进入小镇免费。主要景点如费伦茨·卡洛伊博物馆（Károly Ferenczy Museum）成人票约1800福林，塞尔维亚教会艺术博物馆（Serbian Ecclesiastical Art Museum）成人票约1200福林。通票不常见。学生、老人、团体通常有折扣（需出示有效证件）。许多私人画廊和工作室免费参观。" />
              <InfoRow label="地址" value="Szentendre, Hungary, 2000" />
              <InfoRow label="交通方式" value="从布达佩斯出发最便捷。在布达佩斯市中心的巴蒂亚尼广场（Batthyány tér）或新佩斯（Újpest-Városkapu）地铁站，乘坐郊区火车（HÉV）H5线，终点站就是圣安德烈。车程约40分钟，班次频繁（高峰时段10-15分钟一班）。建议购买单程票或日票（涵盖布达佩斯市内交通及HÉV）。自驾则沿11号公路向北行驶约20公里，小镇周边有收费停车场。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">圣安德烈的故事，始于一场悲伤的迁徙。时间倒回17世纪末，奥斯曼土耳其的军队如乌云压境，席卷巴尔干。大批塞尔维亚东正教信徒，为了躲避迫害和战火，在领袖的带领下，沿着多瑙河北上逃亡。当他们抵达这个多瑙河拐弯处、被山丘环绕的宁静村落时，决定停下脚步，在此重建家园和信仰。这些塞尔维亚商人、工匠和神职人员，带来了他们故乡的建筑技艺、宗教传统和生活方式，将这里变成了一个繁华的“塞尔维亚小镇”。你在今天看到的七座东正教教堂（其中最著名的是圣彼得保罗大教堂），以及那些带有典型巴尔干风情的庭院和高耸的钟楼，都是那个时期留下的深刻烙印。</p>
              <p className="text-gray-700 leading-relaxed mb-4">小镇的命运在19世纪末迎来了第二次转折。随着铁路的通达，它优美的风景和独特的风情，吸引了一群来自布达佩斯的年轻画家。他们厌倦了学院的刻板，渴望在自然和纯朴的民间生活中寻找新的灵感。领头人之一是卡罗伊·费伦茨（Károly Ferenczy），后来成为匈牙利印象派的大师。他们在这里建立艺术家聚居地，租下便宜的房屋作为画室，将多瑙河的波光、彩色的房舍、劳作的人们——整个小镇变成了他们巨大的户外写生簿。这个“圣安德烈艺术家群落”迅速壮大，吸引了雕塑家、陶瓷艺术家、作家，让小镇正式加冕为匈牙利的“艺术之都”。那段时光，空气里都飘着松节油和自由思想的味道。</p>
              <p className="text-gray-700 leading-relaxed mb-4">然而，20世纪的动荡并未绕过这片世外桃源。两次世界大战、匈牙利动荡的政局，尤其是二战后的共产主义时期，对艺术创作进行了严格管控。许多艺术家陷入沉默或离开，小镇的艺术活力一度被冻结。但有趣的是，正是那段时期，官方将其定位为“露天民俗博物馆”和旅游目的地，反而意外地保护了其完整的建筑风貌，未被大规模的工业化建设破坏。铁幕落下后，艺术的灵魂再次苏醒。</p>
              <p className="text-gray-700 leading-relaxed mb-4">今天的圣安德烈，是这几层历史的完美结晶。塞尔维亚社群的后裔依然在此生活，东正教堂的钟声按时响起；老一辈艺术家的故居变成了博物馆（如费伦茨·卡洛伊博物馆），讲述着辉煌过往；而更重要的是，新一代的创作者——画家、首饰设计师、动画师、玻璃艺术家——重新填满了那些老房子，开设了数不清的工作室和个性小店。它从一个被迫的避难所，到主动选择的灵感之地，再到历经风雨的文化幸存者，最终演变成今天这个既承载厚重记忆、又充满轻盈创造力的迷人混合体。它的历史，就写在那一道道墙壁不同颜色的漆层之下，也写在每一个坐在河边写生的年轻人的画板之上。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  完美的圣安德烈之旅，需要一整个白天来“浪费”。建议搭乘早班HÉV火车（9点左右抵达），这时旅游团大军尚未涌入，晨光柔和，小镇刚刚苏醒，是拍照和感受宁静氛围的黄金时间。整体游览节奏务必“慢”，核心思想不是打卡，而是游荡和发现。上午可以聚焦于主广场周边及山丘上的教堂，下午则留给河畔漫步和钻进小巷深处探索私人画廊与工坊。傍晚时分，一定要留给多瑙河畔的日落。这样安排，你既能捕捉到小镇在晨光、正午艳阳和黄昏暖调下的不同面孔，也能有充足的时间与某件艺术品或某位艺术家进行不期而遇的深度对话。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>周六上午主广场有热闹的露天市集，能买到本地农产品和手工艺品，但人也最多，喜欢清静请避开此时段。小镇坡多路滑，务必穿一双绝对舒适防滑的鞋子。许多私人画廊和工作室允许安静参观拍照，但请务必先眼神或言语示意，尊重创作者的空间。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">清早从火车站出来，先别急着上山，绕到背后的多瑙河岸，看晨雾从河面升起，对岸的维谢格拉德山峦若隐若现。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">沿着陡峭的加姆里格特街（Gömörgő utca）往上爬，让身体微微出汗，在第一个拐角处回头，收获一个俯瞰红瓦屋顶与河流的惊喜框景。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">在主广场的商旅十字架下站一会儿，听钟楼报时，观察四周七栋颜色各异的巴洛克建筑如何像舞台布景一样包围着你。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">选一座最有眼缘的东正教堂走进去（推荐布拉戈维斯坦斯卡教堂），让眼睛适应昏暗，然后被金色圣像屏（iconostasis）上闪烁的烛光和浓烈的宗教绘画瞬间击中。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">钻进主广场旁任何一条如毛细血管般细窄的小巷（比如阿尔科什街 Alkotmány utca），彻底迷路，用指尖触摸两旁房屋冰凉而斑驳的彩色墙壁。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">在巷子深处找一个挂着“Műterem”（工作室）牌子的小画廊推门进去，和可能正在工作的艺术家聊两句，看看画框背后的故事。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">下午回到多瑙河畔，找一张长椅坐下，什么都不做，就看渡轮来回，天鹅游弋，时间像河水一样缓慢而金光闪闪地流淌。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">日落前，爬到山丘顶端的塞尔维亚教堂墓地，在一片古老的十字架林中，等待夕阳把整个小镇和多瑙河染成蜜糖般的琥珀金色。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 多瑙河对岸（需乘渡轮或从火车站后方小路走到河边特定角度）</h4>
                  <p className="text-sm text-gray-700">黄昏日落时分，使用长焦镜头可以压缩空间，拍出小镇建筑层叠倒映在金色河面上的全景明信片照片。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 主广场东侧咖啡馆的二楼露台</h4>
                  <p className="text-sm text-gray-700">上午十点后，阳光正好照亮广场西侧那一排彩色建筑立面，点一杯咖啡，可以俯拍广场人流与建筑色彩的生动构图。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 加姆里格特街（Gömörgő utca）中段的拐角处</h4>
                  <p className="text-sm text-gray-700">清晨或下午晚些时候，阳光斜射，利用陡峭的石阶作为引导线，向上拍摄夹道而立的鲜艳房屋与一线蓝天，极具纵深感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 任意一条狭窄小巷的入口</h4>
                  <p className="text-sm text-gray-700">正午时分，当阳光直射入巷口，而巷内依然幽深，形成强烈明暗对比，站在光暗交界处拍向深处，能捕捉到光影雕刻出的戏剧性空间。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 山顶墓地古老的石头十字架之间</h4>
                  <p className="text-sm text-gray-700">以十字架为前景框架，在日落前半小时拍摄远处沐浴在暖光中的小镇屋顶与多瑙河湾，营造历史与永恒交织的静谧氛围。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 小镇居民以这些彩色房子为家，拍摄门窗和阳台时请注意隐私，避免长时间对准住户室内。教堂内部通常允许拍照，但严禁使用闪光灯和三脚架，并保持绝对肃静。尝试拍一些细节：门上的铸铁把手、窗台的陶罐、墙上剥落的漆皮，这些都是小镇故事的微小注脚。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">情怀之选</h4>
                  <p className="text-sm text-blue-800">入住一栋由18世纪塞尔维亚商人住宅改造的精品客栈，房间保留了原始的彩绘木天花板和厚重的木门，院子里的老葡萄藤下就是早餐地点。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">艺术沉浸</h4>
                  <p className="text-sm text-green-800">下榻由当地知名画家工作室改建的迷你酒店，每间客房风格迥异，仿佛睡在一幅幅不同的画作里，店主早上会分享小镇不为人知的艺术八卦。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">河景享受</h4>
                  <p className="text-sm text-yellow-800">选择多瑙河畔第一排的现代设计酒店，拥有全景落地窗和私人阳台，夜晚看对岸灯火与河中星辉共舞，清晨在波光中醒来。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">预算惊喜</h4>
                  <p className="text-sm text-purple-800">藏在老城深处由家庭运营的公寓式客房，带一个小厨房，主人会送你自制的果酱，并热情地在地图上标出他最喜欢的秘密观景点。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">老城中心区的住宿夜晚非常安静，但停车位是巨大挑战，自驾者务必确认酒店是否提供停车位。小镇治安极好，但老房子隔音普遍不佳，这是体验的一部分。旺季（夏季周末和圣诞集市期间）住宿紧俏且价格飙升，务必提前数月预订。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开圣安德烈的时候，我的背包里没有多少实物纪念品，但感官和记忆却像被彻底清洗并重新染上了颜色。那种感觉非常奇特，它不像参观一个伟大的宫殿那样带来震撼的压迫感，而更像是在一个老朋友舒适、杂乱又满是宝藏的工作室里待了一整天，身心都被一种温暖、创造性的宁静所充满。你会记得手指划过粗粝彩墙的触感，记得某个画廊里一幅小画对你心事的悄然击中，记得河边长椅上那个对着流水发呆的、仿佛时间停滞的下午。</p>
              <p className="text-gray-700 leading-relaxed mb-4">在这个效率至上、人人追求“速览”的世界里，圣安德烈固执地代表着另一种存在逻辑：慢，小，深。它证明了美不需要宏伟的尺度，深刻的传承可以与活泼的当下共生。它是一曲献给流浪者、创造者和生活家的温柔颂歌。每一位热爱深度游的旅人都该来这里，不仅仅是为了一张照片，而是为了让自己重新学会“观看”，学会在一条不知名的小巷尽头，为一扇完美的蓝色木门而心跳加速，学会相信日常即艺术，生活本身，就是最伟大的作品。来这里，找回你眼睛里的光，和心里那个还能被色彩与故事轻易打动的自己。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
