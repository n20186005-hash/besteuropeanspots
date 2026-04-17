import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '圣米良德拉科戈利亚 San Millán de la Cogolla｜探访西班牙语诞生地的千年双子修道院 - 最佳欧洲景点',
  description: '车子在拉里奥哈连绵起伏的葡萄园丘间穿行，当你以为这趟旅程的主题只是醇酒与阳光时，道路突然拐进一个幽深、宁静得仿佛被时间遗忘的山谷。空气瞬间变得清凉，耳边只剩下溪流潺潺和风过树林的沙沙声。然后，你看到了它们——不是一座，而是两座修道院，像一对沉默的兄弟，一上一下地锚定在苍翠的山坡上。上面的那座（苏素）',
}

export default function SanMillanDeLaCogollaSusoYusoMonasteriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '圣米良德拉科戈利亚（上苏素与下尤索修道院）', href: '/attractions/san-millan-de-la-cogolla-suso-yuso-monasteries' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`圣米良德拉科戈利亚（上苏素与下尤索修道院）・San Millán de la Cogolla (Monasteries of Suso and Yuso)・西班牙・圣米良德拉科戈利亚`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在拉里奥哈连绵起伏的葡萄园丘间穿行，当你以为这趟旅程的主题只是醇酒与阳光时，道路突然拐进一个幽深、宁静得仿佛被时间遗忘的山谷。空气瞬间变得清凉，耳边只剩下溪流潺潺和风过树林的沙沙声。然后，你看到了它们——不是一座，而是两座修道院，像一对沉默的兄弟，一上一下地锚定在苍翠的山坡上。上面的那座（苏素）几乎与赭黄色的山岩融为一体，显得古老、谦卑而神秘；下面的那座（尤索）则有着规整的庭院和庄严的立面，透露出沉稳的力量。那一刻你会明白，你来到的不仅仅是一个旅游点，而是一个文明的“子宫”。
走近下尤索修道院，厚重的木门后是一片豁然开朗的回廊。午后阳光斜射进来，在蜂蜜色的石柱上切割出分明的光影。空气里有种好闻的旧木头、陈年书籍和一丝若有若无的薰香混合的味道，宁静得能听到自己脚步声的回响。偶尔有身着黑袍的修士悄然走过，他们的存在让这里不是冰冷的博物馆，而是一个仍然呼吸着的信仰与学术生活的场所。然而，真正的魔力藏在山上。当你跟随向导，沿着一条古老的之字形小径向上苏素攀登时，每走一步，时间就仿佛倒退一个世纪。你的手心可能会触碰到路旁岩石上被无数前人磨得光滑的痕迹。
当你最终弯腰进入那个低矮、由天然洞穴扩建而成的石窟教堂时，一种近乎神圣的震撼会攫住你。光线从狭小的窗户吝啬地透入，照亮空气中飞舞的微尘。这里没有金碧辉煌的装饰，只有粗粝的岩石、简单的拱券和千年不变的寂静。但就在这看似原始的黑暗中，僧侣们曾就着油灯的微光，在羊皮纸上书写。你忍不住会想象，第一个将拉丁文圣经旁的注释写成当地通俗罗曼斯语的修士，当他落下笔时，是否听到了一个全新语言的第一声心跳？这个山谷的宁静，守护了那一声微弱却足以改变世界的心跳。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在拉里奥哈连绵起伏的葡萄园丘间穿行，当你以为这趟旅程的主题只是醇酒与阳光时，道路突然拐进一个幽深、宁静得仿佛被时间遗忘的山谷。空气瞬间变得清凉，耳边只剩下溪流潺潺和风过树林的沙沙声。然后，你看到了它们——不是一座，而是两座修道院，像一对沉默的兄弟，一上一下地锚定在苍翠的山坡上。上面的那座（苏素）几乎与赭黄色的山岩融为一体，显得古老、谦卑而神秘；下面的那座（尤索）则有着规整的庭院和庄严的立面，透露出沉稳的力量。那一刻你会明白，你来到的不仅仅是一个旅游点，而是一个文明的“子宫”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近下尤索修道院，厚重的木门后是一片豁然开朗的回廊。午后阳光斜射进来，在蜂蜜色的石柱上切割出分明的光影。空气里有种好闻的旧木头、陈年书籍和一丝若有若无的薰香混合的味道，宁静得能听到自己脚步声的回响。偶尔有身着黑袍的修士悄然走过，他们的存在让这里不是冰冷的博物馆，而是一个仍然呼吸着的信仰与学术生活的场所。然而，真正的魔力藏在山上。当你跟随向导，沿着一条古老的之字形小径向上苏素攀登时，每走一步，时间就仿佛倒退一个世纪。你的手心可能会触碰到路旁岩石上被无数前人磨得光滑的痕迹。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你最终弯腰进入那个低矮、由天然洞穴扩建而成的石窟教堂时，一种近乎神圣的震撼会攫住你。光线从狭小的窗户吝啬地透入，照亮空气中飞舞的微尘。这里没有金碧辉煌的装饰，只有粗粝的岩石、简单的拱券和千年不变的寂静。但就在这看似原始的黑暗中，僧侣们曾就着油灯的微光，在羊皮纸上书写。你忍不住会想象，第一个将拉丁文圣经旁的注释写成当地通俗罗曼斯语的修士，当他落下笔时，是否听到了一个全新语言的第一声心跳？这个山谷的宁静，守护了那一声微弱却足以改变世界的心跳。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`圣米良德拉科戈利亚（上苏素与下尤索修道院）`} />
                <InfoRow label="英文名称" value={`San Millán de la Cogolla (Monasteries of Suso and Yuso)`} />
                <InfoRow label="正式名称" value={`圣米良·德拉科戈利亚的上苏素与下尤索修道院`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`圣米良德拉科戈利亚`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`被联合国教科文组织誉为“西班牙语的摇篮”，这里保存着最早包含西班牙语（卡斯蒂利亚语）书面痕迹的手抄本。`} />
                <InfoRow label="建筑特色" value={`两座修道院分处同一山谷的不同山坡，上苏素是嵌入山岩的西哥特-摩尔式早期石窟修道院，下尤索则是山下规模宏大、气势庄严的文艺复兴-巴洛克式建筑群，形成跨越千年的时空对话。`} />
                <InfoRow label="建筑风格" value={`上苏素：西哥特后期、摩尔式（穆德哈尔）与罗马式风格的混合体；下尤索：以文艺复兴风格为主，辅以华丽的巴洛克细节。`} />
                <InfoRow label="文化价值" value={`不仅是宗教圣地，更是西班牙语言、文学和民族认同的源头，见证了拉丁文向罗曼斯语（早期西班牙语）的演变关键过程。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`上苏素修道院（Suso）开放时间严格受限，必须通过下尤索修道院（Yuso）的导览团进入。导览团通常每天有5-6个固定时段（例如10:00， 11:30， 13:00， 16:00， 17:30），每次参观人数上限为18人，夏季可能增加场次。下尤索修道院可独立参观，开放时间一般为周二至周日10:00-13:30， 16:00-18:30（冬季下午关闭时间可能提前）。强烈建议出发前在拉里奥哈旅游局官网或致电修道院确认最新时刻表，因为开放时间会因宗教活动、修缮和季节（冬季常缩水）频繁调整。周一通常闭馆。`} />
              <InfoRow label="门票价格" value={`参观必须购买联票。标准票价约为12欧元，包含下尤索修道院自主参观及上苏素修道院的强制导览。优惠票价（学生、65岁以上长者）约为10欧元。10岁以下儿童可能免费。门票仅能在下尤索修道院的游客中心购买，无法在线预订，且上苏素导览团名额先到先得，旺季（夏季和节假日）务必尽早抵达购票。`} />
              <InfoRow label="地址" value={`Monasterio de Yuso, 26226 San Millán de la Cogolla, La Rioja, Spain`} />
              <InfoRow label="交通方式" value={`最近的主要城市是洛格罗尼奥（Logroño）和布尔戈斯（Burgos）。从马德里或巴塞罗那可乘高铁或飞机至洛格罗尼奥。从洛格罗尼奥出发，最推荐的方式是自驾，沿LR-111公路向北行驶约45分钟即可抵达科戈利亚村，沿途是连绵的葡萄园和山丘，风景极美。若使用公共交通，情况稍复杂：先从洛格罗尼奥乘区域巴士到纳赫拉（Nájera）镇，班次约每天2-3班，车程40分钟；再从纳赫拉换乘极稀疏的本地出租车或预约车辆前往14公里外的修道院（无固定公交线路）。务必提前规划好返程交通。团队游巴士通常从洛格罗尼奥或哈罗出发。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从一位名叫埃米利安努斯（Emilianus）的年轻牧羊人讲起，后来的人们尊称他为圣米良。公元5世纪末，他出生于比利牛斯山附近一个贫寒家庭。据说他因虔诚和智慧被任命为牧师，但他的布道方式过于朴素直接，批评了神职人员的奢靡，最终选择远离尘嚣，来到这个偏僻的科戈利亚山谷隐居修行。他栖身的山洞，就是今天上苏素修道院最古老的核心。追随他的信徒们逐渐聚集，在他去世后（约公元574年），围绕他的墓穴，修建起一个简单的宗教社区。最初，这里只是一个由石窟和小礼拜堂构成的隐修地，充满了苦行与冥想的气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`摩尔人来了又走，给这片土地留下了深刻的文化层。你能在上苏素的建筑中清晰地看到这段交融史：最古老的墓穴和石窟是西哥特风格的，而后来增建的那排优雅的连拱廊，其马蹄形的拱券无疑是摩尔式（穆德哈尔）艺术的杰作，仿佛将科尔多瓦清真寺的片段搬到了这北方山谷。再后来，罗马式的圆拱和简朴的线条叠加其上。这座建筑本身就是一部“石头写成的历史书”，记录着伊比利亚半岛上基督教与伊斯兰文明的碰撞与共存。正是在这种相对隔离却又文化交融的环境中，修道院的抄写室（scriptorium）持续运转着。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然后，时间来到公元10世纪或11世纪的某一天。一位（或几位）无名的修士，在抄写一本拉丁文圣经或宗教法典时，遇到了难点。或许是为了帮助记忆，或许是为了向文化程度不高的同伴解释，他在页边空白处，用当时人们日常交流的语言——一种源于拉丁、但已演变了的罗曼斯方言——写下了注释和翻译。这些看似随手的笔记，就是后来震惊学术界的《埃米利亚嫩斯注释》（Glosas Emilianenses）。其中那些用早期卡斯蒂利亚语（西班牙语前身）和巴斯克语写下的句子，被语言学家认定为迄今发现的最早的西班牙语书面证据。这颗语言的种子，就在这昏暗的抄写室里，悄然萌芽。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了16世纪，下方的山谷平地兴建起了更为宏伟和舒适的下尤索修道院，以容纳越来越多的修士和彰显修会的荣耀。文艺复兴的风潮带来了对称的布局、古典的柱式和宏大的教堂。著名的天主教双王——伊莎贝尔和费尔南多，也曾是它的资助者。上苏素则逐渐被“封存”起来，成为一座受敬仰的遗迹。下尤索在随后的几个世纪里不断被装饰，尤其是那个令人惊叹的巴洛克风格圣器室，里面收藏着无数金银宝石装饰的圣物箱和一幅幅巨幅油画，极尽奢华，与山上洞穴的简朴形成戏剧性的对比。它经历了没收教产的动荡，但始终是学术研究的中心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天，这两座修道院被联合列入世界遗产名录。它们不仅是信仰的纪念碑，更被西班牙乃至整个西语世界视为精神与文化认同的基石。皇家西班牙语学院也在这里设立了分支机构。当你站在连接古今的双子修道院之间，你会感受到一种强大的连续性：从牧羊人的隐修洞穴，到学者笔下的方言注释，再到如今全球五亿多人使用的语言，这条文化的溪流，源头就在这寂静的山谷里，从未干涸。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天时间（约5-6小时）进行沉浸式游览。最佳安排是上午约9:30抵达下尤索修道院的游客中心，立即购买包含当天上午或中午上苏素导览团的门票。通常购票后会有一些等待时间，正好用来自主参观宏伟的下尤索修道院，仔细看它的教堂、回廊和珍宝馆。然后根据导览团约定时间，提前10分钟在指定地点集合，乘坐修道院安排的小巴（或跟随向导步行）前往上苏素。中午参观完上苏素后，返回下尤索区域，在附近的乡村餐厅享用一顿悠闲的拉里奥哈午餐。下午若有时间，可以漫步连接两座修道院的古老小径（步行约25分钟），从不同角度感受山谷的宁静与建筑的壮美。这样的节奏张弛有度，既能保证跟上珍贵的导览团，又能有充足时间消化厚重的历史信息。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必提前在官网或电话确认开放时间和导览团安排，避免白跑一趟，尤其是冬季和周一。
上苏素修道院内部严禁拍照摄影，请绝对遵守规定，用心和眼睛去记录。
山区天气多变，即便夏季也请带一件薄外套，并穿上舒适耐磨的步行鞋。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先在下尤索修道院游客中心购票并确认好上苏素导览团的具体时间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`利用等待时间沉浸式探索下尤索修道院，重点感受其文艺复兴回廊的几何光影与巴洛克圣器室的惊人奢华。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`按时在指定地点集合，怀着一份朝圣般的心情，乘坐小巴或跟随向导前往上方那座宛如从山体中生长出来的上苏素修道院。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在上苏素昏暗而神圣的石窟教堂内静立片刻，想象千年前修士们在摇曳烛光下书写那些决定语言命运的手稿。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`仔细观看展示的复制品，试着辨认那古老手抄本页边最早的西班牙语“注释”，完成与源头的直接对视。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`返回山谷后，找一家能看到修道院全景的乡村餐厅，点一份用本地葡萄酒烹制的菜肴，让味蕾也加入这场历史对话。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果体力允许，饭后沿着古老的“圣米良小径”散散步，从不同视角回望这两座跨越时空的建筑，整理纷繁的思绪。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`山谷公路拐弯处全景位`}</h4>
                  <p className="text-sm text-gray-700">{`在抵达村子前的LR-111公路某个拐角，可以停下车子，拍摄两座修道院一上一下镶嵌在绿色山谷中的经典全景构图，清晨或黄昏的光线最为柔和动人。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`下尤索修道院回廊光影`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个晴朗的上午，站在回廊一角，等待阳光将拱廊的影子精确地投射在对面的石墙上，形成强烈的明暗对比与几何美感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`上苏素修道院外部仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`在导览团开始前或结束后，从它前方的空地仰拍，将那座融合了西哥特、摩尔和罗马式风格的独特立面与背后的山岩天空一同纳入镜头。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`修道院间古老步道侧拍点`}</h4>
                  <p className="text-sm text-gray-700">{`走在连接两院的步道上，找到一个能同时框住下方尤索的规整庭院与上方苏素古朴侧影的角度，这张照片最能体现二者的时空对话。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏光镜可以有效减少石质建筑表面的反光，并让天空的蓝色和山谷的绿色更加饱和。`}</li>
                <li>• {`尊重宗教场所的严肃性，在教堂内部和修士生活区即使允许拍照，也应保持安静，关闭闪光灯和快门声音。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`乡村之家体验`}</h4>
                  <p className="text-sm text-blue-800">{`科戈利亚村里由石头农舍改造的家庭旅馆，主人可能会和你分享家酿的葡萄酒，夜晚安静得只能听到溪流声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史城镇便捷选`}</h4>
                  <p className="text-sm text-green-800">{`住在14公里外迷人的纳赫拉镇，这里选择更多，有中世纪城堡和修道院，可以体验更活泼的西班牙小镇夜生活。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`葡萄园中的隐居`}</h4>
                  <p className="text-sm text-yellow-800">{`拉里奥哈葡萄酒产区内遍布的田园酒店，通常由古老的酒庄改造而成，被无尽的葡萄园环绕，适合追求宁静与美酒的旅人。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`首府城市综合基地`}</h4>
                  <p className="text-sm text-purple-800">{`住在洛格罗尼奥，享受丰富的餐饮选择（别错过著名的 Laurel 街吧！），以这里为辐射中心，自驾探索整个拉里奥哈地区。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`科戈利亚村本身住宿极其有限，旺季必须提前数月预订。如果预订不到，纳赫拉或洛格罗尼奥是更可靠的选择。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`拉里奥哈地区治安非常好，乡村地区民风淳朴，可以放心慢游。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开圣米良德拉科戈利亚时，我的背包里没有多一件纪念品，但心里却仿佛被塞进了一整个宇宙的重量。那重量不是负担，而是一种奇特的充实感。在这个一切都在追求更新、更快、更响亮的时代，这个山谷教会我的是“源头”的力量与“寂静”的价值。我们使用的每一个词，说出的每一句话，都不是凭空而来，它们有来处，有温度，有故事。站在那个简陋的石窟里，我触摸到的不是冰冷的石头，而是语言第一次被赋予形状的瞬间，是思想开始挣脱单一框架、向更广阔人群流淌的起点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，为什么要来这里？不仅是为了看两座漂亮的古老建筑，也不仅是为了打卡一个世界遗产。是为了完成一次精神的寻根。无论你是否说西班牙语，在这里你都能感受到人类文明中某种共通的、珍贵的东西：即对知识的虔诚守护，在寂静中迸发的创造，以及文化像溪流一样，如何从最细微的泉眼开始，最终汇聚成浩瀚的海洋。当你被日常的喧嚣裹挟时，想想这个西班牙的山谷吧。那里有永恒的宁静，和一颗千年前跳动的、依然能让我们共鸣的心脏。这，或许就是深度旅行所能给予我们最宝贵的礼物。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/plaza-mayor-de-chinchon" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    钦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">钦琼</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Chinchón</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/royal-palace-of-olite" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥利特王宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Royal Palace of Olite</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ourense" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥伦塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ourense</p>
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
