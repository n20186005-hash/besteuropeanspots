import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '古比奥古城 Gubbio Old Town｜被封存在中世纪的翁布里亚石头史诗 - 最佳欧洲景点',
  description: '当你第一眼看到古比奥，它不像一个城镇，更像一座从山体中生长出来的、巨大而沉默的灰色王冠。车子还在山间公路上盘旋，它就已经悬在天际线上，层层叠叠的房屋紧贴着陡峭的山坡，仿佛随时会顺着石阶流淌下来，却又被时光牢牢地凝固在了那里。空气里有一股独特的味道，是清冷的山风混合着古老石墙在阳光下散发出的干燥尘土气...',
}

export default function GubbioOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '古比奥古城', href: '/attractions/gubbio-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`古比奥古城・Gubbio Old Town・意大利・古比奥`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你第一眼看到古比奥，它不像一个城镇，更像一座从山体中生长出来的、巨大而沉默的灰色王冠。车子还在山间公路上盘旋，它就已经悬在天际线上，层层叠叠的房屋紧贴着陡峭的山坡，仿佛随时会顺着石阶流淌下来，却又被时光牢牢地凝固在了那里。空气里有一股独特的味道，是清冷的山风混合着古老石墙在阳光下散发出的干燥尘土气，还有从某扇木窗里飘出的、慢炖了一上午的肉酱的浓郁香气。
走进康索利宫拱门下那道阴凉的大门，你才算真正踏入了古比奥的脉搏。脚下是数百年被无数鞋底打磨得光滑如镜的石板路，脚步声在这里被放大，带着清脆的回响。光线在这里被切割——头顶是一线狭窄的、意大利独有的湛蓝天空，两旁是高耸的石壁，阳光只能在某些特定的时辰，斜斜地刺入巷道，在墙上投下锐利而明亮的光斑，照亮某扇褪色的绿色百叶窗，或是阳台上那盆正在盛放的红色天竺葵。当地人提着购物袋不慌不忙地从你身边走过，用那种快速而抑扬顿挫的翁布里亚方言交谈着，声音在石壁间碰撞。对他们而言，这不是一个博物馆，这就是家，是每天去买面包的巷子，是傍晚和朋友喝杯咖啡的广场。
而古比奥的心脏，无疑是那座令人屏息的宏伟大广场——Piazza Grande。它更像一个巨大的空中露台，一侧是庄严的公爵宫，另外三面则是悬崖般的支撑结构，让你毫无防备地直面脚下广阔的平原和远山。站在广场边缘，风毫无阻拦地吹来，你能听见教堂的钟声从不同方向、以微小的时差陆续响起，混着广场上咖啡馆杯碟碰撞的清脆声音和游客隐约的惊叹。这一刻，中世纪与现代，寂静与喧闹，人类的造物与自然的壮阔，以一种不可思议的方式达成了平衡。这种震撼，不是来自某个孤立的建筑，而是来自整个城镇与地形完美融合所产生的那种压倒性的、史诗般的气场。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你第一眼看到古比奥，它不像一个城镇，更像一座从山体中生长出来的、巨大而沉默的灰色王冠。车子还在山间公路上盘旋，它就已经悬在天际线上，层层叠叠的房屋紧贴着陡峭的山坡，仿佛随时会顺着石阶流淌下来，却又被时光牢牢地凝固在了那里。空气里有一股独特的味道，是清冷的山风混合着古老石墙在阳光下散发出的干燥尘土气，还有从某扇木窗里飘出的、慢炖了一上午的肉酱的浓郁香气。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进康索利宫拱门下那道阴凉的大门，你才算真正踏入了古比奥的脉搏。脚下是数百年被无数鞋底打磨得光滑如镜的石板路，脚步声在这里被放大，带着清脆的回响。光线在这里被切割——头顶是一线狭窄的、意大利独有的湛蓝天空，两旁是高耸的石壁，阳光只能在某些特定的时辰，斜斜地刺入巷道，在墙上投下锐利而明亮的光斑，照亮某扇褪色的绿色百叶窗，或是阳台上那盆正在盛放的红色天竺葵。当地人提着购物袋不慌不忙地从你身边走过，用那种快速而抑扬顿挫的翁布里亚方言交谈着，声音在石壁间碰撞。对他们而言，这不是一个博物馆，这就是家，是每天去买面包的巷子，是傍晚和朋友喝杯咖啡的广场。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而古比奥的心脏，无疑是那座令人屏息的宏伟大广场——Piazza Grande。它更像一个巨大的空中露台，一侧是庄严的公爵宫，另外三面则是悬崖般的支撑结构，让你毫无防备地直面脚下广阔的平原和远山。站在广场边缘，风毫无阻拦地吹来，你能听见教堂的钟声从不同方向、以微小的时差陆续响起，混着广场上咖啡馆杯碟碰撞的清脆声音和游客隐约的惊叹。这一刻，中世纪与现代，寂静与喧闹，人类的造物与自然的壮阔，以一种不可思议的方式达成了平衡。这种震撼，不是来自某个孤立的建筑，而是来自整个城镇与地形完美融合所产生的那种压倒性的、史诗般的气场。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`古比奥古城`} />
                <InfoRow label="英文名称" value={`Gubbio Old Town`} />
                <InfoRow label="正式名称" value={`Gubbio Old Town`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`古比奥`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`被誉为“中世纪之城”的古比奥，是意大利保存最完好的中世纪城镇之一，其城市格局与建筑风貌自14世纪以来几乎未曾改变，是了解翁布里亚内陆历史与文化的活化石。`} />
                <InfoRow label="建筑特色" value={`古城依蒙特因吉诺山而建，层层叠叠的浅灰色石灰岩建筑从山脚蔓延至山顶，形成宏伟的阶梯状立体景观，狭窄的巷道、拱廊和陡峭的石阶构成了迷人的迷宫。`} />
                <InfoRow label="建筑风格" value={`以典型的意大利中世纪罗马风与哥特式风格为主，建筑多采用本地出产的浅灰色石灰岩，质朴而庄严，并受到文艺复兴早期风格的些许影响。`} />
                <InfoRow label="文化价值" value={`古比奥不仅是一个建筑奇迹，更是古老传统的守护者，每年举行的“蜡烛赛跑”是起源于中世纪、充满象征意义的民俗盛事，持续塑造着社区的集体身份与精神。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古比奥古城本身是开放的城镇，全天24小时可进入。但城内主要景点（如公爵宫、罗马剧场、大教堂、圣方济各洞穴）有各自的开放时间，一般为夏季（4月至10月）上午10:00至下午1:00，下午3:00至6:00；冬季（11月至3月）时间缩短，部分景点周一关闭。最重要的“蜡烛赛跑”节庆活动在每年5月15日举行，全城氛围热烈，但部分道路会封闭。建议出行前在官网或当地旅游信息中心确认最新时刻表。`} />
              <InfoRow label="门票价格" value={`进入古城免费。参观单个主要景点门票约5-8欧元。公爵宫联票（含市立博物馆）约10欧元。罗马剧场遗址门票约4欧元。通常有学生、老人及家庭优惠票。建议购买“古比奥博物馆通票”，约12欧元，可覆盖大部分付费景点，性价比极高。`} />
              <InfoRow label="地址" value={`Piazza Grande, 06024 Gubbio PG, Italy`} />
              <InfoRow label="交通方式" value={`古比奥没有机场和主要火车站，抵达需借助周边交通枢纽。最近的主要火车站是佩鲁贾（约40分钟车程）或福松布罗内（约30分钟车程），可从罗马或佛罗伦萨乘火车抵达这两个站点。从佩鲁贾火车站前，有定期的E442路巴士直达古比奥，车程约50分钟，班次平日约每小时一班，周日减少，建议提前在佩鲁贾巴士站（位于火车站旁）的售票厅或烟草店购票。自驾是最方便的方式，从佩鲁贾沿SS298国道向东北行驶约35公里即到，古城外有大型付费停车场（如Parcheggio Piazza 40 Martiri），切勿尝试开车进入狭窄的中世纪老城区。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古比奥的故事，比“中世纪”要古老得多。早在罗马时代之前，古老的翁布里亚人就已经在这座陡峭的山上定居。真正的“出生证明”，是那七块著名的“古比奥铜表”——上面刻着古意大利语的铭文，内容是关于当地一个祭司团的宗教仪规，其历史可追溯到公元前3至1世纪。这些铜板是理解前罗马时代意大利宗教与社会结构的无价之宝，如今就珍藏在城里的市立博物馆里。它们沉默地告诉我们，这座山的灵性地位，早在两千多年前就已确立。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`罗马人来了，他们带来了秩序与工程奇迹。在山脚下相对平缓的谷地，他们建造了一座繁荣的罗马城镇，至今仍能看到保存完好的罗马剧场遗迹，那些斑驳的石砌座位圈，在夕阳下泛着暖金色的光。然而，随着罗马帝国的崩溃和蛮族入侵的动荡，安全再次成为首要考量。人们放弃了山谷中易于攻占的城镇，重新退守到易守难攻的山丘之上。这个决定，塑造了今天我们看到的古比奥的基本形态——一个为了生存而紧紧拥抱悬崖的堡垒之城。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`中世纪是古比奥的黄金时代，也是其定型之时。作为独立的城邦，它曾与强大的佩鲁贾激烈竞争。13世纪建造的宏伟大广场和康索利宫（又名“执政官宫”），就是其财富与自治骄傲的宣言。那宫殿的外观，是典型的意大利中世纪公共建筑风格，坚固、冷峻、充满权威感。随后，古比奥落入蒙特费尔特罗家族的控制之下。这位著名的文艺复兴雇佣兵首领兼艺术赞助人，在15世纪为古比奥留下了另一颗明珠——公爵宫。与外部街道的粗犷不同，公爵宫内庭院优雅和谐的比例、精美的石雕装饰，透露着文艺复兴新风潮的悄然吹入。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`此后的几个世纪，古比奥仿佛被遗忘在了时光里。它没有经历大规模的工业化或现代扩张，因其地形限制，发展缓慢。这种“停滞”，反而成了它最大的幸运。它完整地保存了中世纪的城市肌理、建筑风貌，乃至一种缓慢的生活节奏。它的历史不是断裂的篇章，而是一层又一层缓慢沉积的岩层，从翁布里亚人、罗马人、中世纪市民到文艺复兴领主，每一层都清晰可辨，共同构成了这座“石头之城”独一无二的厚重灵魂。今天，当你迷失在那些仿佛没有尽头的石阶小巷时，你踩过的每一步，都可能是在重复一个中世纪樵夫、一个文艺复兴信使，或是一个十九世纪主妇的日常路径。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议一大早就抵达古比奥（最好在上午9点前），这时旅游巴士尚未涌入，阳光温柔，古城刚刚苏醒，是感受其宁静本色的最佳时机。整个深度游览需要一整天（约6-8小时）。路线设计为从山脚向上攀爬，最后乘坐著名的“上山缆车”从山顶轻松返回，这样最省力且能体验渐入佳境的乐趣。节奏宜慢，多在小巷中随意探索，累了就在广场咖啡馆坐下观察过往行人。傍晚时分，一定要留在古城，看夕阳的金辉将整片石灰岩建筑群点燃成蜂蜜色，这是古比奥魔法时刻的开端。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`古城内几乎所有道路都是石板与台阶，务必穿一双绝对舒适防滑的步行鞋，高跟鞋在这里是“灾难”。
许多小巷非常狭窄且岔路多，谷歌地图可能失灵，享受迷路的乐趣吧，但大致记住“向上”是往大广场和城堡，“向下”是回停车场的方向。
当地餐馆的午休时间很长（大约下午1点到晚上7点不营业），规划好午餐时间，或者提前在熟食店买些美味的三明治野餐。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从古城南端的圣方济各城门进入，沿着Via dei Consoli主街开始缓坡上行，感受两侧高耸石壁带来的压迫感与穿越感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在宏伟的康索利宫前驻足，仔细欣赏其外墙上那些见证了无数市政公告的石刻和带有岁月包浆的青铜雕像。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要进入宫殿内部，爬上塔楼，从制高点获得一个如鹰隼般俯瞰整个古城红色屋顶与错综复杂巷道的震撼视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过拱门来到令人豁然开朗的Piazza Grande大广场，在悬崖边缘的长椅上坐下，让山风吹拂，静静地看平原上的光影变幻至少二十分钟。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从广场一侧的巷子穿出，去探访那座略显隐蔽却充满虔诚气息的圣方济各洞穴，传说圣方济各曾在此与狼交谈。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着指示牌下山，去探访山脚绿意盎然的罗马剧场遗址，抚摸那些冰凉的古罗马石块，感受历史的层叠。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`乘坐古比奥标志性的“上山缆车”（更像一个个露天鸟笼），在吱呀作响声中悬空攀升至蒙特因吉诺山巅的圣乌巴尔多大教堂。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在山上教堂前的空地等待日落，看脚下整个古比奥古城逐渐点亮灯火，如同一盘散落在山间的璀璨星辰。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`大广场悬崖边缘仰拍康索利宫`}</h4>
                  <p className="text-sm text-gray-700">{`下午晚些时候，阳光从侧面照亮宫殿立面，站在广场边缘以平原为背景仰拍，能获得建筑与自然交织的宏伟构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`Via Baldassini 巷道的阶梯视角`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或午后，阳光能射入这条著名的陡峭阶梯巷，站在中段向上或向下拍摄，能捕捉到光线切割石阶、光影明暗对比极强的戏剧性画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从罗马剧场远眺古城全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一个小时，走到剧场遗址的草坪上，用长焦镜头压缩空间，将古老的罗马石拱作为前景，框住远处山坡上沐浴在金色夕阳中的整个中世纪古城。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`“上山缆车”内的移动全景`}</h4>
                  <p className="text-sm text-gray-700">{`在缆车攀升过程中，将相机镜头贴近缆车铁网（注意安全），拍摄脚下逐渐远去的城市屋顶海洋和不断扩展的平原景色，极具动感和层次感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`圣乌巴尔多大教堂前俯瞰夜景`}</h4>
                  <p className="text-sm text-gray-700">{`日落后蓝色时刻，在山顶教堂前架起三脚架，用长曝光拍摄古城灯火初上、蜿蜒如金色脉络的梦幻夜景。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重当地居民隐私，拍摄阳台或窗户内的景象时需格外谨慎，最好征得同意。使用无人机在历史中心上空飞行通常被严格禁止，需查询当地具体法规。古比奥的光影变化极快，尤其在狭窄巷道中，建议使用RAW格式拍摄以便后期调整光比。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史中心石屋民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在经过精心修复的14世纪石质建筑里，厚重的木梁天花板和原始的壁炉还在，清晨推开吱呀作响的木窗，看到的是被晨光染红的对面房屋的石墙和邻居家晾晒的床单。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`修道院改造的静谧酒店`}</h4>
                  <p className="text-sm text-green-800">{`由古老的修道院改建而成，房间环绕着宁静的回廊庭院，极简的装修风格与古老的石拱形成对话，这里唯一的声响是早晚隐约的钟声和喷泉的水流，是寻求内心平静的理想选择。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`山顶田园农庄`}</h4>
                  <p className="text-sm text-yellow-800">{`位于古城对面山坡上的家庭经营农庄，房间拥有直面古比奥全景的私人露台，主人会提供用自产食材制作的丰盛早餐，晚上在无光污染的夜空下，古城就像一座浮在黑暗中的金色模型。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`公爵宫旁的设计酒店`}</h4>
                  <p className="text-sm text-purple-800">{`坐落在核心位置一栋历史建筑内，内部是当代意大利设计，巨大的玻璃窗将中世纪景观引入室内，屋顶露台酒吧是晚上小酌一杯并欣赏星空下古城轮廓的绝密地点。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古城内的住宿非常抢手，尤其是带景观的房间，务必提前数月预订。住在历史中心意味着需要拖着行李走过一段石板路，酒店通常不提供停车位，需停放在城外停车场。翁布里亚的夜晚非常宁静安全，可以放心在古城小巷中夜游，感受与白日截然不同的神秘氛围。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开古比奥许久后，闭上眼睛，脑海里浮现的不是某个具体的教堂立面或雕像，而是一种整体的感觉：那种石头冰凉的触感、脚步在幽深巷弄里的回响、以及从高处俯瞰时，心中升起的既渺小又豁达的复杂情绪。这座城教会你的，不是关于某个艺术流派的历史知识，而是一种关于“坚韧”与“融合”的生存智慧。它教会你，人类社区如何巧妙地顺应而非征服自然的天堑，如何将防御的 necessity 转化为建筑的崇高，如何在漫长的岁月里，将每一天平凡的生活，沉淀进每一块石头的纹理之中。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求崭新、快速和效率的世界里，古比奥像一座固执的、关于缓慢与持久的时间纪念碑。它不提供刺激的娱乐，不迎合便捷的消费，它只提供一段纯粹的“沉浸”——沉浸于一种早已消逝的时空尺度里。来这里，你不是为了收集打卡照片，而是为了让自己的心跳，有机会和这座千年古城的脉搏同步，变得沉静、清晰、充满回响。对于任何一位渴望在旅途中触及历史质感、而不仅仅是掠过其表面的深度旅者来说，古比奥不是景点，它是一种必要的修行。它让你相信，有些美好，真的可以战胜时间，在群山环抱中，寂静地、辉煌地屹立至今。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
