import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '瓦龙城堡 Château d\'Oiron｜从文艺复兴珍奇屋到现代艺术圣地的时空穿越 - 最佳欧洲景点',
  description: '当你把车停在村口，沿着一条两侧种满老橡树的小路步行进去，第一眼看到瓦龙城堡时，它可能和你想象中那种剑拔弩张的堡垒不太一样。它舒展地卧在一片柔软的草坪后方，暖白色的石灰岩墙体在午后的阳光下泛着蜂蜜般的光泽，一排排高耸的格子窗井然有序，巨大的锥形屋顶覆盖着深灰色的板岩。与其说它威严，不如说它有一种沉静的',
}

export default function ChateauDoironPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/france' },
            { label: '德塞夫勒省', href: '/destinations/france' },
            { label: '瓦龙城堡', href: '/attractions/chateau-doiron' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`瓦龙城堡・Château d'Oiron・法国・德塞夫勒省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你把车停在村口，沿着一条两侧种满老橡树的小路步行进去，第一眼看到瓦龙城堡时，它可能和你想象中那种剑拔弩张的堡垒不太一样。它舒展地卧在一片柔软的草坪后方，暖白色的石灰岩墙体在午后的阳光下泛着蜂蜜般的光泽，一排排高耸的格子窗井然有序，巨大的锥形屋顶覆盖着深灰色的板岩。与其说它威严，不如说它有一种沉静的、书卷气的优雅。四周安静极了，只有风吹过树梢的沙沙声和远处不知名鸟儿的啼鸣，空气里混合着刚割过的青草香和古老石材散发出的、微凉的气息。你会觉得，这不像一个单纯的旅游景点，倒像一位沉思的学者，在乡间静静地住了几百年。
而真正的奇旅，从你踏进那座拱形大门后就开始了。瞬间，时光的规则在这里失效。你的左边，可能是布满16世纪壁画、描绘着神话场景的古老长廊，光线透过五彩玻璃，在地面投下梦幻的光斑；你的右边，一个完全由镜子构成的当代艺术装置，却把空间折叠、复制至无穷，让你瞬间迷失在虚实之间。那种感觉非常奇妙：你的指尖划过冰凉了五百年的石壁，眼睛却看着一件2003年创作的、会发出轻微电子蜂鸣声的雕塑。这里没有将历史供奉起来，而是让它活生生地、甚至有些顽皮地与当下碰撞。
最打动人的，或许是这种碰撞背后的“一致性”。城堡最初的女主人，克洛德·德·古菲耶，在16世纪创建了一个“珍奇屋”，里面塞满了来自新大陆的贝壳、化石、古代钱币和科学仪器，那是一个文艺复兴贵族对全世界好奇心的大爆发。而今天，城堡管理者邀请了全球近百位当代艺术家，以“珍奇屋”的精神为命题进行全新创作。于是，你看到了用数千枚邮票拼贴出的巨幅星空，听到了隐藏在老衣柜里的诗歌吟诵，甚至能闻到一幅由调香师特制的、试图“还原”蒙娜丽莎微笑气味的抽象画。历史不再是过去时，它成了一个持续进行的、邀请你参与的创造行为。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当你把车停在村口，沿着一条两侧种满老橡树的小路步行进去，第一眼看到瓦龙城堡时，它可能和你想象中那种剑拔弩张的堡垒不太一样。它舒展地卧在一片柔软的草坪后方，暖白色的石灰岩墙体在午后的阳光下泛着蜂蜜般的光泽，一排排高耸的格子窗井然有序，巨大的锥形屋顶覆盖着深灰色的板岩。与其说它威严，不如说它有一种沉静的、书卷气的优雅。四周安静极了，只有风吹过树梢的沙沙声和远处不知名鸟儿的啼鸣，空气里混合着刚割过的青草香和古老石材散发出的、微凉的气息。你会觉得，这不像一个单纯的旅游景点，倒像一位沉思的学者，在乡间静静地住了几百年。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而真正的奇旅，从你踏进那座拱形大门后就开始了。瞬间，时光的规则在这里失效。你的左边，可能是布满16世纪壁画、描绘着神话场景的古老长廊，光线透过五彩玻璃，在地面投下梦幻的光斑；你的右边，一个完全由镜子构成的当代艺术装置，却把空间折叠、复制至无穷，让你瞬间迷失在虚实之间。那种感觉非常奇妙：你的指尖划过冰凉了五百年的石壁，眼睛却看着一件2003年创作的、会发出轻微电子蜂鸣声的雕塑。这里没有将历史供奉起来，而是让它活生生地、甚至有些顽皮地与当下碰撞。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动人的，或许是这种碰撞背后的“一致性”。城堡最初的女主人，克洛德·德·古菲耶，在16世纪创建了一个“珍奇屋”，里面塞满了来自新大陆的贝壳、化石、古代钱币和科学仪器，那是一个文艺复兴贵族对全世界好奇心的大爆发。而今天，城堡管理者邀请了全球近百位当代艺术家，以“珍奇屋”的精神为命题进行全新创作。于是，你看到了用数千枚邮票拼贴出的巨幅星空，听到了隐藏在老衣柜里的诗歌吟诵，甚至能闻到一幅由调香师特制的、试图“还原”蒙娜丽莎微笑气味的抽象画。历史不再是过去时，它成了一个持续进行的、邀请你参与的创造行为。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`瓦龙城堡`} />
                <InfoRow label="英文名称" value={`Château d'Oiron`} />
                <InfoRow label="正式名称" value={`Château d'Oiron`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`德塞夫勒省`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座始于文艺复兴时期、因“珍奇屋”画廊而闻名遐迩的贵族庄园，如今是法国文化部旗下将厚重历史与前卫当代艺术进行永久性对话的国立先锋场所。`} />
                <InfoRow label="建筑特色" value={`融合了晚期哥特与早期文艺复兴风格的优雅建筑群，以其超长的画廊、装饰繁复的烟囱、马蹄形主楼梯及广阔的法式花园为标志。`} />
                <InfoRow label="建筑风格" value={`法国文艺复兴风格，带有部分中世纪防御结构的遗存痕迹。`} />
                <InfoRow label="文化价值" value={`其核心价值在于跨越五个世纪的收藏传统：从16世纪的好奇心柜（珍奇屋）到21世纪的委托创作当代艺术品，持续探索着“收藏”、“奇异”与“知识”的边界。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡通常于每年四月初至十一月初向公众开放。开放时间为每日上午10点至下午6点（最后入场时间下午5点）。冬季（十一月至次年三月）为闭馆维护期，仅接受团体预约。请注意，具体日期每年可能有微调，且每逢法国法定节假日（如5月1日）可能闭馆，出行前务必在其官网核对最新日历。`} />
              <InfoRow label="门票价格" value={`全价票：8欧元。优惠票：6.5欧元（适用于18-25岁青年、10人以上团体）。免费政策：18岁以下未成年人、欧盟境内26岁以下学生、残疾人士及其陪同者。此外，每年九月遗产日周末可免费参观。门票已包含领取语音导览设备的费用（提供多种语言，含中文）。`} />
              <InfoRow label="地址" value={`Château d'Oiron, 10 Rue du Château, 79100 Oiron, France`} />
              <InfoRow label="交通方式" value={`瓦龙城堡位于法国乡野，自驾是最便捷的方式。从巴黎出发，可乘TGV高速火车至昂热（Angers）或普瓦捷（Poitiers）站（约1.5-2小时车程），然后租车。从昂热驱车前往城堡约需1小时，从普瓦捷出发约45分钟。若依赖公共交通，可从普瓦捷火车站外乘坐前往Thouars方向的区域巴士（Rémi巴士），在“Oiron – Centre”站下车，但班次极为稀疏（平日每天仅2-3班），下车后需步行约15分钟至城堡，强烈建议提前查好时刻表并预留充足时间。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事要从15世纪末说起。这片土地属于显赫的古菲耶家族，他们不仅是国王身边的宠臣，更是文艺复兴思想在法国的热情拥趸。我们今天看到的城堡主体，就是在1520年到1650年间，由几代家族成员陆续修建和装饰而成的。他们摒弃了中世纪城堡的防御功能，转而追求明亮、对称和舒适，渴望在这里营造一个用于展示学识、举办沙龙、享受生活的“理想宫殿”。建筑本身就像一本打开的书，讲述着从哥特式向文艺复兴式过渡的美学历程。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但让瓦龙城堡在历史中留下璀璨一笔的，是一位女性——克洛德·德·古菲耶。在16世纪中叶，她发起并主导创建了城堡内那条长达数十米的“珍奇屋画廊”。这可不是普通的画廊，它是一个微观的宇宙。墙上绘满了精美的壁画，描绘着特洛伊战争、圣经故事，而墙边则陈列着数百个珍奇柜，里面分门别类地收藏着当时能搜集到的一切“奇物”：罗马时期的玻璃器皿、异域的兽角、矿物标本、天文器械，甚至还有传说中的“独角兽”角（实际上是独角鲸的长牙）。这个画廊不仅是财富的展示，更是知识、权力与世界视野的象征，吸引着当时欧洲的学者和贵族们慕名而来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，辉煌未能永远持续。法国大革命的风暴席卷而来，城堡被没收，家族流散。那些珍贵的收藏品大量流失，建筑本身也多次易主，一度被用作农场甚至学校。壁画被石灰覆盖，房间被隔断，花园荒芜。它就像一位流落民间的贵族，渐渐被人遗忘，在漫长的岁月里沉睡，任由时光在它的墙壁上刻下斑驳的痕迹。曾经的“奇观”之地，陷入了长达两个世纪的沉寂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转机发生在20世纪末。法国政府于1941年将其列为历史古迹，并于1990年正式收购。但修复者们面临一个关键抉择：是让它变回一个纯粹的、空洞的历史标本吗？当时的文化决策者做出了一个大胆到近乎冒险的决定——不以复原为终点，而以“重生”为起点。他们决定延续其“收藏与好奇”的基因，启动了一项名为“当代珍奇屋”的永久性艺术计划。自1993年起，他们委托来自世界各地的艺术家，以城堡的空间、历史和“珍奇屋”概念为灵感进行 site-specific（因地创作）的永久装置。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，瓦龙城堡开启了一段崭新的生命。艺术家们在此与幽灵对话：有的用现代材料回应古老的壁画主题，有的在废弃的房间里安装声音装置，让建筑本身“开口说话”，还有的用科技手段重新诠释“自然奇观”。这个过程并非没有争议，但它成功地将城堡从历史的陈列柜，变成了一个活着的、会呼吸的、不断激发思考的艺术有机体。它走过的路，仿佛一个完整的轮回：从文艺复兴的人文觉醒，到衰败没落，再到通过当代艺术实现精神的复兴与超越。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你在开馆后半小时左右抵达，这样既能避开可能的小型旅行团，又能在光线最柔和的上午细细品味建筑外观和花园。整个深度游览至少需要3到3.5小时。节奏不宜匆忙，这里不是一个“打卡”之地，而是一个需要你充分调动感官和想象力的体验场。先由外而内，在花园里感受城堡的全貌与气场；然后进入室内，严格按照语音导览的顺序游览（导览路线设计精妙，是理解“古今对话”的关键），在每个房间都留足时间，去观察、聆听甚至触摸（在允许的情况下）。最后，留出至少30分钟在书店和城堡咖啡馆回味，那里的艺术书籍和用本地食材制作的简单午餐，会是这次精神漫游的完美句点。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`部分当代艺术装置涉及微弱光线、镜面或声音，行走时请稍加留意脚下。城堡内很多艺术品可以拍照，但务必关闭闪光灯，并尊重“禁止拍摄”的标识。带孩子参观很有趣，但需看管好孩子，避免触碰一些精巧脆弱的展品。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从拱形门洞下的古老马厩开始，这里现已变成书店和售票处，先感受一下石头建筑内部的清凉与宁静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过铺着碎石的前院，不要急着进入主楼，向右拐个弯，先去看看那片静谧的倒影池和城堡的侧面轮廓。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主入口踏入，立刻被那座气势恢宏、装饰着精致浮雕的马蹄形主楼梯吸引，这是城堡第一个建筑高潮。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着语音导览的指引，首先探访底层那些略显低矮的“基础”房间，这里常陈列着最具有冲击力和互动性的当代装置。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`缓缓走上主楼梯，进入二楼的国王套房与大客厅，让眼睛适应从极简现代到极繁复古的华丽转换。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`重点沉浸在长达55米的“珍奇屋画廊”里，花时间细读壁画故事，并对比观看两侧古今交织的“奇珍”陈列。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开画廊尽头的小门，步入北翼的私人套房与小客厅，这里的艺术装置往往更加私密、感性，像是对历史的窃窃私语。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`游览结束时，从另一侧的楼梯下来，回到中庭，在咖啡馆的露天座坐下，面对花园，让所有感官印象慢慢沉淀。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡南侧池塘边`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，利用池塘作为前景拍摄城堡及其完美倒影，对称构图能极致展现文艺复兴建筑的几何美感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`珍奇屋画廊中段`}</h4>
                  <p className="text-sm text-gray-700">{`选择阳光充足的下午，站在画廊中央，用广角镜头捕捉两侧无尽延伸的拱廊与画框，让人物置于其中，形成穿越时空的纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`主楼梯顶部平台`}</h4>
                  <p className="text-sm text-gray-700">{`转身向下俯拍螺旋而下的阶梯与精美的浮雕栏杆，这个角度能完美展现楼梯作为建筑雕塑的优雅曲线与力量。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从花园尽头观景台回望`}</h4>
                  <p className="text-sm text-gray-700">{`午后顺光时，走到法式花园的轴线末端，将修剪整齐的绿植作为引导线，把整个城堡建筑收于一幅画面，展现其与自然环境的和谐。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`北翼某个窗口`}</h4>
                  <p className="text-sm text-gray-700">{`寻找一个挂着复古窗帘的窗洞，以窗为画框，拍摄窗外郁郁葱葱的庭院或远处乡村教堂的尖顶，营造“框中画”的古典意境。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内光线普遍较暗，建议使用大光圈镜头或提高ISO，三脚架在允许使用的区域会是好帮手。拍摄壁画和古董时，务必关闭任何补光设备，以免对脆弱颜料造成伤害。尊重其他参观者的体验，保持安静，快速构图。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`乡村民宿`}</h4>
                  <p className="text-sm text-blue-800">{`城堡附近村庄里由石头农舍改造的温馨民宿，主人会为你准备一篮本地出产的奶酪、苹果和面包作为早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`驱车约25分钟，在 historic town of Thouars 有一家由十七世纪驿站改造的精品酒店，内部融合了裸露的石墙和现代设计家具，风格呼应了瓦龙的精神。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`庄园酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`如果想体验更完整的法式田园诗意，可以选择30分钟车程外、位于葡萄园环绕中的一座18世纪小庄园，自带花园和泳池，静谧至极。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`城堡客房`}</h4>
                  <p className="text-sm text-purple-800">{`查询瓦龙城堡或附近其他小型城堡是否开放有限的“历史客房”预订，这是真正沉浸于历史氛围中的难得机会（通常需提前数月预定）。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "该地区是宁静的法国乡村，夜间几乎没有任何商业活动，建议在入住地或用完晚餐再返回。治安非常好，但公共交通几乎夜间停运，确保自驾是探索的基础。旺季（7-8月）住宿紧张，务必提前预订。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开瓦龙城堡很久以后，那种独特的混杂感依然会在某个时刻浮现心头。它不像那些被打磨得光滑完美的博物馆，一切都规整、正确，保持着礼貌的距离。这里是有温度的，甚至有点“吵闹”——五百年前的壁画在与今天的视频艺术争吵，古老的木地板在艺术家设置的声场中咯吱作响地应和。这种“不协调”恰恰是它最珍贵的地方。它勇敢地拒绝了成为一件历史的标本，而是选择成为一个持续生长的生命体，一个让过去与现在激烈对话、共同孵育未来的场所。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求效率、热衷贴标签的世界里，瓦龙提供了一种难得的“复杂性”体验。它告诉我们，历史不是沉重的包袱，也可以是轻盈的灵感；当代艺术不是冷漠的疏离，也可以是对历史最深情的回响。每一位热爱深度游的旅人，都应该来感受一次这种时空的错位与交融。它不仅仅是在参观一个城堡，更是在亲历一种看待历史、艺术乃至我们自身的好奇心如何跨越时间而永续的哲学。你会带着满脑子的疑问和画面离开，而这，正是一切真正旅程开始的标志。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/chateau-de-hautefort-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    欧
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">欧特福尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Hautefort</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/piana-corsica" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    皮
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">皮亚纳</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Piana</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/oingt" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    昂
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">昂村</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Oingt</p>
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
