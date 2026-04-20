import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '萨尔甘斯城堡 Sargans Castle｜白墙红顶的河谷卫士，俯瞰三国边境的千年传奇 - 最佳欧洲景点',
  description: '第一眼看到萨尔甘斯城堡，你会觉得它不像那些遥远冰冷的石造巨兽，而像一个从童话书里走出来、却意外肩负起守卫职责的巨人。它就在那里，稳稳地坐在一座林木葱郁的小山丘上，白墙红顶，配色干净得近乎天真。但当你走近，从萨尔甘斯小镇那些安静的街道仰头望去，那种居高临下的压迫感便悄然弥漫。它扼守的，是脚下那片豁然开',
}

export default function SargansCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '萨尔甘斯城堡', href: '/attractions/sargans-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`萨尔甘斯城堡・Sargans Castle・瑞士・萨尔甘斯镇（Sargans）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到萨尔甘斯城堡，你会觉得它不像那些遥远冰冷的石造巨兽，而像一个从童话书里走出来、却意外肩负起守卫职责的巨人。它就在那里，稳稳地坐在一座林木葱郁的小山丘上，白墙红顶，配色干净得近乎天真。但当你走近，从萨尔甘斯小镇那些安静的街道仰头望去，那种居高临下的压迫感便悄然弥漫。它扼守的，是脚下那片豁然开朗的莱茵河谷平原，视线毫无阻拦地可以扫向远方的阿尔卑斯山余脉，以及更远处那个邮票大小的列支敦士登公国。那一刻你明白了，它的童话感只是表象，骨子里是历经风霜的警觉。
沿着蜿蜒的上山小径走，脚踩在被打磨光滑的石板上，两旁是灌木和野花的淡淡香气。越往上，风越大，你能听见风穿过古老橡树叶子的沙沙声，混合着自己略显急促的呼吸声。当你终于穿过最后一道坡，站在城堡巨大的木门前，它的尺度感才真实袭来。那白墙近看并不平整，带着雨水冲刷的痕迹和微小的裂缝，红色屋顶的瓦片在阳光下闪着湿润的光。空气中有一股好闻的味道——是石头被太阳晒暖的气息，混合着从下方餐厅飘来的、若有若无的烤肉和新鲜面包的香气。城堡脚下，小镇的红色屋顶像积木一样铺开，火车站偶尔传来火车进站的轻微鸣笛，生活的声音如此平和，与头顶这座静默的守卫者形成奇妙的和谐。
最打动人的，是它那种“仍在呼吸”的状态。这里不只是一个购票参观的景点。你可能会碰到本地中学生在这里上历史课，听老师指着城墙讲解中世纪战役；周末的庭院里，常常举办着小型的婚礼，新娘的白纱在古老的石墙前飞扬；而那家开在城堡里的餐厅，露台上总是坐满了喝着午后咖啡、看着风景闲聊的当地人。城堡对他们而言，不是教科书上的图片，而是童年爬过的山丘，是第一次约会的餐厅，是家族庆典的背景板。它从冰冷的军事堡垒，温柔地转型成了社区温暖的客厅，这种角色的蜕变，让它充满了人性的温度。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到萨尔甘斯城堡，你会觉得它不像那些遥远冰冷的石造巨兽，而像一个从童话书里走出来、却意外肩负起守卫职责的巨人。它就在那里，稳稳地坐在一座林木葱郁的小山丘上，白墙红顶，配色干净得近乎天真。但当你走近，从萨尔甘斯小镇那些安静的街道仰头望去，那种居高临下的压迫感便悄然弥漫。它扼守的，是脚下那片豁然开朗的莱茵河谷平原，视线毫无阻拦地可以扫向远方的阿尔卑斯山余脉，以及更远处那个邮票大小的列支敦士登公国。那一刻你明白了，它的童话感只是表象，骨子里是历经风霜的警觉。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`沿着蜿蜒的上山小径走，脚踩在被打磨光滑的石板上，两旁是灌木和野花的淡淡香气。越往上，风越大，你能听见风穿过古老橡树叶子的沙沙声，混合着自己略显急促的呼吸声。当你终于穿过最后一道坡，站在城堡巨大的木门前，它的尺度感才真实袭来。那白墙近看并不平整，带着雨水冲刷的痕迹和微小的裂缝，红色屋顶的瓦片在阳光下闪着湿润的光。空气中有一股好闻的味道——是石头被太阳晒暖的气息，混合着从下方餐厅飘来的、若有若无的烤肉和新鲜面包的香气。城堡脚下，小镇的红色屋顶像积木一样铺开，火车站偶尔传来火车进站的轻微鸣笛，生活的声音如此平和，与头顶这座静默的守卫者形成奇妙的和谐。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，是它那种“仍在呼吸”的状态。这里不只是一个购票参观的景点。你可能会碰到本地中学生在这里上历史课，听老师指着城墙讲解中世纪战役；周末的庭院里，常常举办着小型的婚礼，新娘的白纱在古老的石墙前飞扬；而那家开在城堡里的餐厅，露台上总是坐满了喝着午后咖啡、看着风景闲聊的当地人。城堡对他们而言，不是教科书上的图片，而是童年爬过的山丘，是第一次约会的餐厅，是家族庆典的背景板。它从冰冷的军事堡垒，温柔地转型成了社区温暖的客厅，这种角色的蜕变，让它充满了人性的温度。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`萨尔甘斯城堡`} />
                <InfoRow label="英文名称" value={`Sargans Castle`} />
                <InfoRow label="正式名称" value={`Sargans Castle`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`萨尔甘斯镇（Sargans）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座城堡是掌控莱茵河谷上游关键隘口的战略锁钥，历史上是划分圣加仑、库尔和列支敦士登领土的伯爵权力中心。`} />
                <InfoRow label="建筑特色" value={`一座融合了坚实防御功能与童话般外观的堡垒，标志性的白墙与深红色陡峭屋顶在绿色山丘上形成鲜明对比，主塔楼（Bergfried）厚重敦实，是整个建筑群的视觉与防御核心。`} />
                <InfoRow label="建筑风格" value={`主要体现了中世纪晚期的防御性建筑特点，并融入了后来几个世纪的居住性改造，是军事建筑向宜居庄园演变的典型样本。`} />
                <InfoRow label="文化价值" value={`它不仅是军事历史的纪念碑，更是一个“活着的”社区地标，作为地方博物馆、餐厅和庆典场所，深深嵌入当地人的日常生活与集体记忆之中。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡博物馆和餐厅的开放时间随季节变化。通常，博物馆在每年四月至十月的周二至周日开放，时间为上午10点至下午5点；十一月到次年三月可能仅周末开放或提前预约。城堡的室外区域（城墙、庭院）全年开放。餐厅的营业时间更灵活，通常午市和晚市都开放，但冬季的周一可能休息。重大节假日如圣诞节、新年期间安排会有变动，出行前务必查阅官网最新公告。`} />
              <InfoRow label="门票价格" value={`进入城堡庭院和外部区域免费。城堡博物馆门票为成人8瑞士法郎，学生及 seniors（长者）6瑞士法郎，6至16岁儿童4瑞士法郎，家庭票（2大2小）20瑞士法郎。持有瑞士博物馆通票可免费入场。餐厅消费另计。有时会举办特别主题导览或夜间活动，票价在25-40瑞士法郎不等。`} />
              <InfoRow label="地址" value={`Schloss 1, 7320 Sargans, Switzerland`} />
              <InfoRow label="交通方式" value={`从苏黎世国际机场（ZRH）出发最为便捷。在机场火车站乘坐直达萨尔甘斯的火车，车程约1小时10分钟，班次频繁，每小时至少有2-3班。如果你从苏黎世市中心出发，车程约1小时。抵达萨尔甘斯火车站后，出站就能看到山丘上的城堡，步行上山大约需要15-20分钟，是一条清晰、坡度适中的小径。也可以乘坐当地巴士（如巴士线号）到“Sargans， Post”站，再步行5分钟至山脚。建议使用瑞士旅行通票（Swiss Travel Pass），火车巴士全包。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`萨尔甘斯的故事，几乎就是莱茵河谷这条欧洲血脉的微观史诗。早在罗马时代，这里可能就有一个瞭望点，监视着南北交通。但城堡真正意义上的诞生，要追溯到中世纪盛期，大约12世纪左右。当时，控制这个隘口，就意味着控制了从苏黎世湖地区通往库尔、乃至意大利的重要商路，以及肥沃的河谷农田。最初的建造者，很可能是那些势力渐长的本地贵族，他们用粗糙的石头垒起了第一座塔楼，宣告了对这片土地的主权。然而，真正让萨尔甘斯登上历史舞台的，是哈布斯堡家族。这个后来统治半个欧洲的家族，在早期扩张中敏锐地意识到了此地的价值。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡的命运随着主人的更迭和战争的硝烟起伏。它最辉煌也最紧张的时期，是作为萨尔甘斯伯爵的领地中心。伯爵们不断加固城墙，扩建居住空间，让这座堡垒既能抵御外敌，也能舒适地生活。你能想象，在寒冷的冬夜，伯爵一家围坐在大厅的壁炉边，而哨兵则在塔楼顶层，警惕地注视着河谷中任何可疑的火把移动。1490年，一场被称为“瑞士战争”的冲突席卷这里，城堡经历了围困和破坏，但最终顽强地留存了下来。战争改变了政治格局，萨尔甘斯地区最终并入了瑞士联邦，城堡的军事重要性逐渐降低，但它作为地方行政中心和象征的地位却保留了下来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间的河流进入近代，城堡不可避免地面临着所有古老建筑的共同命运：废弃与遗忘。当枪炮的射程超越城墙的高度，它的防御功能彻底成为历史。有很长一段时间，它只是山丘上一个日渐倾颓的石头影子。转机发生在19世纪末20世纪初，那是一个浪漫主义与民族历史意识觉醒的时代。瑞士人开始回头寻找自己的根，这些城堡被视为国家历史的珍贵遗存。于是，一场精心的修复工程开始了。修复者们没有把它变成迪士尼式的幻景，而是尽可能地依据历史文献，恢复了它中世纪晚期的风貌，尤其是那标志性的白墙红顶，让城堡重新成为地标。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的城堡，是几次生命叠加的结果。它的一部分成为了出色的地方博物馆，收藏着从史前到现代的当地文物，那些古老的纹章、武器和家居用品，静静诉说着伯爵与平民的生活。另一部分，则被巧妙地改造成了一家餐厅和活动场所。这或许是最妙的安排——历史没有被封存在玻璃柜里，而是继续为今天的人们提供庇护、欢乐和美食。当你坐在露台上，用着现代的刀叉品尝瑞士传统奶酪火锅时，头顶是13世纪的木梁，脚下是15世纪的地砖，这种时间的叠响，是萨尔甘斯城堡给予访客最独特的礼物。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议用一个完整的上午或下午来深度探索萨尔甘斯城堡，整体耗时大约3-4小时。最佳抵达时间是上午10点博物馆刚开门时，或者下午3点以后，这样可以避开可能的午餐人群，光线也最适合拍照。游览节奏应该是“由外向内，由下至上，最后归于平静”。先从山脚小镇的视角仰望，建立整体印象；然后上山，在城墙外围感受其防御体系；进入内部后，先参观博物馆了解其灵魂，再登上塔楼获取征服者的视野；最后在餐厅或庭院休息，让历史感慢慢沉淀。这样的安排既能保证逻辑上的理解层层递进，也能让身体和感官得到张弛有度的体验。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿一双绝对舒适、防滑的徒步鞋，上山的小径虽有石板，但部分路段可能有碎石和树根。餐厅和博物馆小卖部不一定接受所有国际信用卡，准备一些瑞士法郎现金更稳妥。如果是夏季周末前来，尽量早到，因为城堡餐厅很受当地人欢迎，露台的好位置很快会被占满。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从萨尔甘斯火车站出口抬头锁定城堡目标，然后不慌不忙地穿过宁静小镇，在面包店买一个刚出炉的“黄油辫子面包”作为能量补给。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着清晰标识的“Weg zum Schloss”小径开始缓步登山，在第一个拐角处的长椅稍作停留，回望身后越来越开阔的莱茵河谷平原。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡侧面古老的防御土墙和壕沟遗迹进入，亲手触摸那些冰凉、粗糙的巨大石块，想象弓箭手曾在此守卫。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过厚重的拱形门洞进入中央庭院，立刻被四周高耸的白墙和红色屋顶包围，感受空间从开阔到围合的瞬间切换。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`先拜访城堡博物馆，花时间看看那些展现伯爵家族兴衰的古老契约、盔甲和日常生活器皿，特别留意那个精致的河谷地形沙盘。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着狭窄而陡峭的螺旋石阶奋力爬上主塔楼的顶层，当冷风扑面而来时，收获那360度无死角的、令人屏息的隘口全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城堡餐厅的露台或室内找一张靠窗的桌子，点一份用本地食材烹制的午餐或一块经典的瑞士樱桃蛋糕，看着风景慢慢享用。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`饭后在城墙散步道上轻松漫步，从不同角度俯瞰山脚下的红顶小镇和更远处的田园风光，直到心满意足再慢慢下山。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`山脚葡萄园经典全景位`}</h4>
                  <p className="text-sm text-gray-700">{`从城堡南侧下方的葡萄种植园小路往回拍，最佳时间是日出后一小时或日落前一小时，柔和的金色光线会勾勒出城堡白墙红顶的鲜明轮廓，用长焦镜头可以压缩空间，将城堡与后方的山脉叠在一起。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`庭院拱门框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`站在庭院通往花园的石拱门下，将拱门作为天然画框，框住对面主塔楼的一角，拍摄时等待一两个游客走入画面增添生气，阴天时光线均匀反而能突出石头的质感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`塔楼窗口窥视列支敦士登`}</h4>
                  <p className="text-sm text-gray-700">{`在主塔楼顶层的东面窗口，将相机镜头对准窗口本身，把远处列支敦士登的群山和隐约的城镇纳入窗口之中，形成一种“窥探另一个国家”的奇妙构图，建议使用小光圈保证前后景都清晰。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城墙散步道俯视角`}</h4>
                  <p className="text-sm text-gray-700">{`沿着北侧城墙行走，找到一个能将垛口、脚下的石板路以及山下小镇的红色屋顶同时纳入画面的角度，采用低机位拍摄，让前景的古老石墙占据一部分画面，引导视线延伸至远方的现代生活。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`餐厅露台温馨生活感`}</h4>
                  <p className="text-sm text-gray-700">{`在餐厅露台享用咖啡时，将桌上的咖啡杯、蛋糕碟作为前景，背景虚化处是城堡厚重的石墙和远处的山谷，捕捉这种历史与现代休闲生活交融的宁静瞬间，光线宜选午后温暖的侧光。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`无人机飞行在瑞士受到严格管制，城堡及周边空域很可能属于禁飞区，起飞前务必查阅官方地图并获得许可。拍摄餐厅内部或博物馆展品前，最好礼貌询问是否允许。利用早晚的“黄金时刻”和“蓝色时刻”，你能拍到城堡灯光初亮、天空呈现深邃蓝色的魔幻时刻，远比正午的平光照片有韵味。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在山脚小镇上的“Gasthof Löwen”家庭旅馆，这是一栋有百年历史的老建筑，房间整洁温馨，老板会热情地告诉你只有本地人才知道的观看城堡夜景的小角落，含早的房费里包括地道的农家蜂蜜和酸奶。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`直接入住城堡！没错，城堡有一小部分被改建为非常独特的客房，数量极少需要提前很久预订，在这里过夜意味着在游客散尽后，你能独享整个庭院星空下的静谧，清晨在数百年的历史墙壁环绕中醒来。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车15分钟前往附近的巴德拉格斯（Bad Ragaz）温泉度假镇，那里有五星级的温泉酒店，你可以白天探索城堡的历史沧桑，晚上回到现代奢华的怀抱，在阿尔卑斯山泉水疗中舒缓爬山的疲劳，享受极致的反差体验。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`中转便捷`}</h4>
                  <p className="text-sm text-purple-800">{`选择萨尔甘斯火车站步行5分钟范围内的现代商务酒店，对于利用瑞士通票进行多点游览的旅客极为方便，早班火车出发和晚班火车到达都无缝衔接，且通常能免费取消，为行程提供最大灵活性。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`旺季（夏季和圣诞期间）城堡客房和附近特色住宿非常紧俏，建议至少提前3-4个月预订。小镇萨尔甘斯本身非常安全宁静，夜晚散步很有情调。如果选择住在巴德拉格斯，虽然价格较高，但可以结合世界顶级的塔米纳温泉体验，将历史探索与养生度假完美结合。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开萨尔甘斯城堡下山时，我的脚步比上来时慢了许多。不仅仅是因为腿有些酸，更是因为心里被一种沉甸甸的充实感填满了。这座城堡教给我的，是关于“守护”的另一种定义。它最初用刀剑和城墙守护领土，后来用博物馆和文献守护记忆，而现在，它用一片美丽的风景、一顿可口的饭菜、一个举办婚礼的庭院，守护着当地人对家园的认同感和日常生活的幸福感。它的角色在变，但内核从未改变——它始终是这片土地的卫士，只是守护的方式，从对抗变成了拥抱。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个快得让人眩晕的时代，萨尔甘斯城堡像一个坚定的时空坐标。它提醒我们，有些东西是值得屹立千年的，不是因为它从未改变，而是因为它懂得如何随着时间流淌而优雅地蜕变。它不是一个被玻璃罩起来的标本，而是一棵仍然在生长的老树，年轮里刻满了故事，枝叶间却依然沐浴着今天的阳光。对于每一个厌倦了打卡式旅游、渴望触摸历史真实纹理的旅人来说，这里不仅仅是一个景点。它是一个可以让你坐下来，听着风声，望着三国边境的风景，慢慢思考时间、变迁与何为永恒的地方。这趟拜访，像是一次与一位智慧老者的对话，他沉默寡言，却用他存在的每一个细节，告诉你关于坚持与柔软的全部哲理。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/peles-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡纳亚佩莱斯城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Peleș Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lunigo-roman-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卢
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卢尼古罗马遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Roman Ruins of Lunnigo</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/mystras-byzantine-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    米
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">米斯特拉斯拜占庭遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mystras</p>
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
