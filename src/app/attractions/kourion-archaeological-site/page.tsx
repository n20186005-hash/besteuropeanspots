import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '库里翁 Kourion | 悬崖上的古罗马剧场，与地中海的千年对望 - 最佳欧洲景点',
  description: '车子拐下主干道，驶入一条被夹竹桃和橄榄树簇拥的小路，远远地，你就能看见那片高耸于蔚蓝地中海之上的土黄色遗迹。第一印象不是精致，而是一种粗粝的、磅礴的生命力。风是这里永恒的背景音，它从海面上毫无遮拦地冲上悬崖，穿过那些断裂的石柱，发出“呜呜”的呜咽，又带来浓烈的、属于阳光、干燥岩石和远处松树的混合气味...',
}

export default function KourionArchaeologicalSitePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '库里翁', href: '/attractions/kourion-archaeological-site' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`库里翁・Kourion・塞浦路斯・利马索尔区（确切地点靠近埃皮斯科皮村）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子拐下主干道，驶入一条被夹竹桃和橄榄树簇拥的小路，远远地，你就能看见那片高耸于蔚蓝地中海之上的土黄色遗迹。第一印象不是精致，而是一种粗粝的、磅礴的生命力。风是这里永恒的背景音，它从海面上毫无遮拦地冲上悬崖，穿过那些断裂的石柱，发出“呜呜”的呜咽，又带来浓烈的、属于阳光、干燥岩石和远处松树的混合气味。脚下是晒得发烫的沙土路，蜥蜴“嗖”地一下从脚边窜进石缝。这里没有围墙的束缚，遗址就那么坦荡地铺展在天地之间，仿佛一座被时间突然凝固的城市，刚刚还人声鼎沸，下一秒居民就消失不见，只留下舞台、豪宅和浴室，任由风吹日晒。
而这一切的视觉焦点，无疑是那座依悬崖而建的古罗马剧场。它不像你在罗马或雅典看到的那些被现代城市包围的剧场，它是完全野生的、与自然共存的。当你一步步走上台阶，视线逐渐拔高，眼前豁然开朗的瞬间，呼吸真的会为之一滞。不是舞台，不是石阶，而是那片无限延伸的、绸缎般的湛蓝地中海，完整地构成了剧场的天然背景幕布。你可以想象，两千年前的观众坐在这里，观看欧里庇得斯的悲剧时，剧中人物的命运与眼前这片深邃莫测的大海交织在一起，该是何等震撼的体验。即便在今天，你只是静静坐着，听风掠过耳畔，看海浪在百米之下拍打出白色碎沫，一种跨越千年的寂静与澎湃便会同时涌上心头。
走下剧场，钻进那些残留着墙壁的街区，才能真正触摸到古库里翁人的生活温度。在“尤斯托留斯之家”，你会与那些惊人的马赛克地板迎面相遇。它们被保护性的顶棚遮盖着，光线从侧面打进来，让那些用细小石块拼出的图案——游动的鱼儿、衔着橄榄枝的鸽子、几何纹样——泛着温润的光泽。最著名的一幅描绘了“萨米安的少女”，人物线条优雅灵动。你蹲下身细看，仿佛能听到当年宅邸里宴饮的谈笑声，闻到葡萄酒的香气。而在遗址的另一端，早期基督教洗礼堂的遗迹则静静诉说着另一个时代的信仰更迭。这里不仅是观光客的打卡地，更是当地塞浦路斯人周末散步、孩子们学习历史的露天课堂，古老文明就这样自然地融入了现代生活的肌理。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子拐下主干道，驶入一条被夹竹桃和橄榄树簇拥的小路，远远地，你就能看见那片高耸于蔚蓝地中海之上的土黄色遗迹。第一印象不是精致，而是一种粗粝的、磅礴的生命力。风是这里永恒的背景音，它从海面上毫无遮拦地冲上悬崖，穿过那些断裂的石柱，发出“呜呜”的呜咽，又带来浓烈的、属于阳光、干燥岩石和远处松树的混合气味。脚下是晒得发烫的沙土路，蜥蜴“嗖”地一下从脚边窜进石缝。这里没有围墙的束缚，遗址就那么坦荡地铺展在天地之间，仿佛一座被时间突然凝固的城市，刚刚还人声鼎沸，下一秒居民就消失不见，只留下舞台、豪宅和浴室，任由风吹日晒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而这一切的视觉焦点，无疑是那座依悬崖而建的古罗马剧场。它不像你在罗马或雅典看到的那些被现代城市包围的剧场，它是完全野生的、与自然共存的。当你一步步走上台阶，视线逐渐拔高，眼前豁然开朗的瞬间，呼吸真的会为之一滞。不是舞台，不是石阶，而是那片无限延伸的、绸缎般的湛蓝地中海，完整地构成了剧场的天然背景幕布。你可以想象，两千年前的观众坐在这里，观看欧里庇得斯的悲剧时，剧中人物的命运与眼前这片深邃莫测的大海交织在一起，该是何等震撼的体验。即便在今天，你只是静静坐着，听风掠过耳畔，看海浪在百米之下拍打出白色碎沫，一种跨越千年的寂静与澎湃便会同时涌上心头。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走下剧场，钻进那些残留着墙壁的街区，才能真正触摸到古库里翁人的生活温度。在“尤斯托留斯之家”，你会与那些惊人的马赛克地板迎面相遇。它们被保护性的顶棚遮盖着，光线从侧面打进来，让那些用细小石块拼出的图案——游动的鱼儿、衔着橄榄枝的鸽子、几何纹样——泛着温润的光泽。最著名的一幅描绘了“萨米安的少女”，人物线条优雅灵动。你蹲下身细看，仿佛能听到当年宅邸里宴饮的谈笑声，闻到葡萄酒的香气。而在遗址的另一端，早期基督教洗礼堂的遗迹则静静诉说着另一个时代的信仰更迭。这里不仅是观光客的打卡地，更是当地塞浦路斯人周末散步、孩子们学习历史的露天课堂，古老文明就这样自然地融入了现代生活的肌理。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`库里翁`} />
                <InfoRow label="英文名称" value={`Kourion`} />
                <InfoRow label="正式名称" value={`Kourion Archaeological Site`} />
                <InfoRow label="国家" value={`塞浦路斯`} />
                <InfoRow label="城市" value={`利马索尔区（确切地点靠近埃皮斯科皮村）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`塞浦路斯岛上最壮观、保存最完好的古罗马遗址之一，见证了从希腊化时代到早期基督教时代的地中海文明变迁。`} />
                <InfoRow label="建筑特色" value={`古罗马城市规划与壮丽自然景观的完美结合，其悬崖剧场和精美马赛克地砖堪称典范。`} />
                <InfoRow label="建筑风格" value={`典型的罗马希腊化风格，并融合了拜占庭早期基督教元素。`} />
                <InfoRow label="文化价值" value={`一座生动展示古罗马帝国边疆城市生活图景，以及早期基督教文明如何在此生根发芽的露天博物馆。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年开放，夏季（4月-9月）通常为早上8:30至晚上7:30；冬季（10月-3月）通常为早上8:30至下午5:00。最后入场时间为关闭前30分钟。节假日开放时间可能缩短，建议行前在塞浦路斯旅游局官网二次确认。`} />
              <InfoRow label="门票价格" value={`入场费约为4.5欧元。学生及65岁以上长者享有优惠票价。有时会与附近的阿波罗神庙遗址出售联票，约8.5欧元，有效期一天。每月第一个周日免费入场（若该日为公共假日则顺延）。`} />
              <InfoRow label="地址" value={`Kourion Archaeological Site, Episkopi, Limassol District, Cyprus. 邮编：CY-4630`} />
              <InfoRow label="交通方式" value={`从拉纳卡国际机场出发，最方便的方式是租车自驾，沿A1和A6高速公路向利马索尔方向行驶，车程约1小时。若乘坐公共交通，可先从机场乘公交到利马索尔市中心（约1小时），再换乘16路公交车（利马索尔-帕福斯线）在“Kourion”站下车，班次约每小时一班，从利马索尔出发车程约30分钟。打车从利马索尔市中心前往约需25-30欧元。自驾车可将车停在遗址入口处的大型免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`库里翁的故事，得从更早的时候说起。早在公元前十三世纪，迈锡尼希腊人就已经踏足这片肥沃的沿海土地，并在此建立了定居点，成为后来希腊殖民的基石。但真正让库里翁登上历史舞台的，是亚历山大大帝死后那段纷争的希腊化时代。大约在公元前三世纪，它成为了托勒密埃及王国统治下的一个繁荣城邦。那时的库里翁，就已经因其战略性的悬崖位置和富庶的农业、铜矿出口而闻名。你可以想象，港口里泊满了商船，将塞浦路斯的葡萄酒、橄榄油和铜锭运往地中海的各个角落。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`罗马的到来改变了一切，也将库里翁推向了巅峰。公元前58年，塞浦路斯并入罗马帝国，库里翁作为重要的行政和商业中心，迎来了它的黄金时代。罗马人带来了他们精湛的工程技术和城市规划理念。我们今天看到的宏伟剧场，就是在公元二世纪左右，依托天然悬崖坡地重建或大规模修缮的。他们建造了复杂的公共浴场系统，铺设了用马赛克装饰的豪华别墅，建立了带有柱廊的繁华市集。这座城市变得如此富足，以至于在公元四世纪一位名叫尤斯托留斯的富裕公民，能够捐资修建了一座带有精美马赛克和私人浴室的大型宅邸，其遗迹至今令人惊叹。罗马的和平与秩序，让这座边疆城市享受了长达数个世纪的繁荣。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的剧本总是充满转折。公元一世纪中叶，基督教的种子随着使徒保罗和巴拿巴的传教之旅播撒到了塞浦路斯。库里翁逐渐出现了基督徒社群。到了罗马帝国晚期，特别是君士坦丁大帝宣布基督教合法化之后，这座城市的信仰面貌开始彻底改变。公元四世纪到五世纪，大型的基督教巴西利卡式教堂在库里翁拔地而起，其中就包括遗址区内那座拥有精美马赛克地板的洗礼堂。你可以看到，洗礼堂的马赛克图案充满了基督教符号，如十字架、葡萄和鸟儿，与旁边罗马别墅里神话主题的马赛克形成了鲜明对比，生动记录了这座城市从多神信仰向一神信仰转变的心灵史。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但库里翁的繁荣，最终被大自然的力量无情打断。公元四世纪后期，一系列毁灭性的地震袭击了塞浦路斯岛，库里翁首当其冲。考古证据显示，城市遭受了灾难性的破坏，许多建筑倒塌，供水系统被毁。尽管居民们努力重建，但城市的元气已伤。祸不单行，公元七世纪，阿拉伯舰队开始频繁袭击塞浦路斯海岸，位于暴露位置的库里翁变得极易受到攻击。在这样持续的地震威胁和海盗侵扰的双重压力下，居民们最终选择了放弃，逐渐迁移到了更内陆、更安全的定居点。这座曾经喧闹的城市，就这样缓缓沉寂下来，石头被岁月剥蚀，泥土逐渐掩埋了街道，直到它被漫长的时光遗忘，变成牧羊人放羊时脚下的一片土丘。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到十九世纪末，专业的考古发掘才让库里翁重见天日。考古学家们小心翼翼地拂去沙土，让剧场重新露出弧形的轮廓，让马赛克重现斑斓的色彩。如今，我们漫步其间，指尖拂过被海风磨圆了的石柱，看到的不仅是一座古城的废墟，更是一部镌刻在石头上的史诗。它讲述了人类如何依海而生、筑城而居，如何经历信仰的嬗变，又如何在天灾人祸面前做出生存的抉择。每一个角落，都回荡着穿越千年的低语。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`为了获得最完整体验，强烈建议在早上九点前抵达。此时的阳光角度柔和，能为遗址和摄影提供绝佳光线，更重要的是能避开大部分旅游团和午后的酷热。整个深度游览大约需要3到4小时。路线设计遵循从视觉震撼到细节探究的逻辑：先直奔最具冲击力的悬崖剧场，把握住清晨人少的静谧时刻；然后自西向东，依次探访贵族住宅区、公共生活区和宗教建筑区，最后以参观现场博物馆收尾，将看到的实物与历史背景串联起来。节奏上宜慢不宜快，留足时间坐下感受，这才是解锁库里翁魅力的关键。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双舒适耐走的封闭式鞋子，遗址地面多沙土碎石且崎岖不平，凉鞋或高跟鞋会非常痛苦。
塞浦路斯阳光极其强烈，务必戴帽子、涂高倍数防晒霜，并携带至少一升水，遗址内几乎没有遮荫和补给点。
夏季游览务必将核心参观时间安排在上午十点前或下午四点后，否则正午的酷热会极大地消耗体力并影响体验。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在入口处的树荫下，先别急着进去，从停车场边缘就能远眺整个遗址在悬崖上铺开的磅礴全景`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直走向古罗马剧场，沿着石阶爬到最高处，找一个正对地中海的位置静静坐下，让眼睛和心灵同时被这无与伦比的景观充满`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从剧场下来后向北探索，踏入“尤斯托留斯之家”被保护的遗址内部，蹲下来细细观赏那些描绘着神话场景和动植物、色彩依旧鲜活的马赛克地板`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`接着去参观紧邻的早期基督教洗礼堂遗址，对比其简洁的几何马赛克与罗马别墅的奢华图案，感受文明信仰的变迁`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着清晰的主干道向东漫步，路过宏伟的公共浴场废墟，想象罗马市民在此社交、沐浴的热闹场景`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到遗址的东端，站在那排矗立的罗马柱廊遗迹前，眺望下方绿色的平原和更远处的群山，感受这座城市昔日的规模`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要留出时间，在遗址边缘找一块远离路径的阴凉巨石坐下，就只是听着风声和海浪声，看鹰隼在悬崖上空盘旋`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后回到入口附近的小型现场博物馆，看看从这里出土的陶器、雕像和珠宝，为你刚才看到的宏大场景补上细腻的注脚`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`悬崖剧场全景机位`}</h4>
                  <p className="text-sm text-gray-700">{`从停车场走向入口的路上，有一处略高的土坡，用长焦镜头可以框取整个剧场背靠蓝宝石般大海的经典画面，最佳时间是日出后一小时或日落前一小时。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`剧场中心海景框`}</h4>
                  <p className="text-sm text-gray-700">{`坐在剧场最底层的表演区中心石座上，让同行者从上层观众席向下俯拍，能将你、古老的石阶和浩瀚的地中海一同纳入构图，形成强烈的纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`尤斯托留斯之家马赛克俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`蹲在保护棚的边缘，将相机尽可能放低，平行于地面拍摄马赛克局部特写，可以完美避开护栏，让千年前的图案仿佛就在眼前铺展。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`柱廊大道透视感`}</h4>
                  <p className="text-sm text-gray-700">{`站在公共浴场附近的柱廊遗迹起点，使用广角镜头顺着残存的柱基向前拍摄，强烈的透视线条能将视线引向远方的天空与山峦。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`遗址与人的对比`}</h4>
                  <p className="text-sm text-gray-700">{`让你的同伴站在一片巨大断墙或石门框的剪影中，从远处拍摄，用人的渺小衬托遗迹的沧桑与自然的永恒，特别有故事感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`黄金时刻（日出后和日落前）的光线能为这片土黄色的石头镀上温暖的金色，是出片的绝佳时机，尽量避免在正午顶光下拍摄。`}</li>
                <li>• {`拍摄马赛克等精细文物时，请绝对不要使用闪光灯，强烈的光线会对历经千年的矿物颜料造成不可逆的损害。`}</li>
                <li>• {`使用无人机拍摄前，务必确认当地法规，并注意悬崖边强劲且紊乱的海风，对飞行器操控是极大挑战。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`利马索尔市中心老港附近的家庭式公寓，价格亲民，步行可达各种餐厅超市，晚上还能漫步海滨大道，感受现代塞浦路斯的活力。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`埃皮斯科皮村或附近村庄里由传统石屋改造的精品民宿，拥有宁静的庭院和私家葡萄园，主人通常会奉上自制果酱和欢迎酒，深度融入当地生活。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`利马索尔南部海岸线上一线海景的五星级度假村，拥有私人沙滩、多个泳池和一流的水疗中心，在饱览历史沧桑后，可以在此享受极致的放松与奢华。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`历史沉浸`}</h4>
                  <p className="text-sm text-purple-800">{`帕福斯方向海岸边的灯塔附近，有由古老庄园修复的酒店，风格复古静谧，既能方便前往库里翁，也能探索另一处世界遗产帕福斯考古公园。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果计划探索塞浦路斯西南部多个考古遗址，租车是必须的，因此住宿地点可以更灵活，不必拘泥于利马索尔市区。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`利马索尔的夜生活相对丰富，餐厅选择也多；而住在遗址附近的村庄则更加宁静，能体验到真正的乡村夜晚，只有星空与虫鸣。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季是旅游旺季，尤其是沿海酒店，务必提前数月预订才能锁定心仪的房间和价格。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开库里翁的时候，我耳朵里似乎还灌满着风声，手里仿佛还攥着一把被阳光晒得温热的沙土。这个地方给我的触动，远远超出了一个“景点”的范畴。它不像那些被精心供奉在玻璃柜里的文物，需要你屏息凝神、带着敬畏去瞻仰。恰恰相反，它邀请你坐下，躺下，甚至孩子们可以在那些古老的石头上奔跑嬉戏。它以一种不可思议的开放和坦率，将两千年的时光断层赤裸裸地展露在你面前。在这里，历史不是教科书上冰冷的年份，而是你能用脚踩到的石板路，能用皮肤感受到的地中海烈风，是眼前这片蓝得让人心醉、却又曾见证无数贸易与战火的海。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个被信息爆炸和快速消费裹挟的世界里，库里翁像一位沉默的智者，提供了一种截然不同的时间尺度。它提醒我们，文明会崛起，也会因一场地震或一次选择而湮没；最豪华的宅邸，最终留下的可能只是一幅地板上的画；而最恒久的背景音，是风和海浪。它教会我们的，或许不是关于罗马建筑的具体知识，而是一种关于“存在”的哲学。当你坐在那个剧场里，望着同一片大海，与两千年前的古人共享同一片视野和风声时，你会感到一种深切的连接与平静。那种感觉，是在任何喧嚣的现代都市都无法觅得的。这就是为什么，每一位不满足于走马观花、渴望在旅途中触碰时间本质的旅人，都应该来这里，花上一个下午，什么都不做，就只是“存在”于这片悬崖之上。这趟旅程，会成为你记忆里一块坚实的、发着光的马赛克。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/paphos-archaeological-park" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    帕
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">帕福斯考古公园</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Paphos Archaeological Park</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/choirokoitia-neolithic-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    乔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">乔伊鲁科蒂亚</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Choirokoitia</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/hala-sultan-tekke-salt-lake-larnaca" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈拉苏丹特克</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hala Sultan Tekke</p>
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
