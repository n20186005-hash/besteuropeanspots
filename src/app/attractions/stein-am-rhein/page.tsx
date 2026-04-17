import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '施泰因 Stein am Rhein｜莱茵河畔的湿壁画童话镇，漫步千年时光画廊 - 最佳欧洲景点',
  description: '我记得走下火车桥，第一眼望见施泰因老城时，呼吸都停了一拍。那不是一个“景点”，那根本是一本被忽然打开的、巨大而华丽的立体故事书，猝不及防地摊开在莱茵河碧蓝的臂弯里。阳光正好，空气里有河水湿润的清新，混合着从河边咖啡馆飘来的现磨咖啡香。所有的喧嚣——火车的隆隆声、现代世界的浮躁——瞬间被那道古老的城门...',
}

export default function SteinAmRheinPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '施泰因', href: '/attractions/stein-am-rhein' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`施泰因・Stein am Rhein・瑞士・施泰因`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`我记得走下火车桥，第一眼望见施泰因老城时，呼吸都停了一拍。那不是一个“景点”，那根本是一本被忽然打开的、巨大而华丽的立体故事书，猝不及防地摊开在莱茵河碧蓝的臂弯里。阳光正好，空气里有河水湿润的清新，混合着从河边咖啡馆飘来的现磨咖啡香。所有的喧嚣——火车的隆隆声、现代世界的浮躁——瞬间被那道古老的城门过滤在外。眼前，石板路被岁月打磨得温润发亮，蜿蜒着伸向彩绘楼宇夹峙的深处。
走进镇中心的市政厅广场（Rathausplatz），你会忍不住原地转圈，因为目光根本不知道该先落在哪里。每一幢房子的正面都是一幅巨大的画布，上面画着圣经故事、古代英雄、寓言人物，还有炫耀财富与地位的行会标志。那些赭石红、明黄、深绿的颜色，历经数百年依然鲜艳得惊人。白鹤巢装饰的山墙尖顶刺向湛蓝的天空，凸窗上的小雕像仿佛在窃窃私语。这不是冰冷的博物馆陈列，这是几百年前人们日常生活的门面，是他们对美的追求、对信仰的虔诚、对成功的骄傲，全都毫无保留地“写”在了墙上。你能听到的，只有游客压低了的赞叹声、相机快门声，以及广场喷泉淙淙的水流声，那是小镇永恒的背景音。
莱茵河就在几步之遥的地方静静流淌，天鹅优雅地划开水波。河边长椅上坐着晒太阳的老人，和看天鹅看得入迷的孩童。你会发现，这些令人惊叹的湿壁画建筑，一楼很多就是面包店、肉铺、咖啡馆和小旅馆。居民推着自行车从16世纪的拱门下穿过，在画着圣乔治屠龙图案的房子前停下，掏出钥匙打开家门——历史在这里不是被供奉起来的，而是依然在呼吸、在被使用的生活本身。这种极致的美丽与平常日子水乳交融的状态，正是施泰因最核心、也最打动人心的魔力。它让你相信，童话镇是真实存在的，而且里面一直住着幸福的人。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`我记得走下火车桥，第一眼望见施泰因老城时，呼吸都停了一拍。那不是一个“景点”，那根本是一本被忽然打开的、巨大而华丽的立体故事书，猝不及防地摊开在莱茵河碧蓝的臂弯里。阳光正好，空气里有河水湿润的清新，混合着从河边咖啡馆飘来的现磨咖啡香。所有的喧嚣——火车的隆隆声、现代世界的浮躁——瞬间被那道古老的城门过滤在外。眼前，石板路被岁月打磨得温润发亮，蜿蜒着伸向彩绘楼宇夹峙的深处。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进镇中心的市政厅广场（Rathausplatz），你会忍不住原地转圈，因为目光根本不知道该先落在哪里。每一幢房子的正面都是一幅巨大的画布，上面画着圣经故事、古代英雄、寓言人物，还有炫耀财富与地位的行会标志。那些赭石红、明黄、深绿的颜色，历经数百年依然鲜艳得惊人。白鹤巢装饰的山墙尖顶刺向湛蓝的天空，凸窗上的小雕像仿佛在窃窃私语。这不是冰冷的博物馆陈列，这是几百年前人们日常生活的门面，是他们对美的追求、对信仰的虔诚、对成功的骄傲，全都毫无保留地“写”在了墙上。你能听到的，只有游客压低了的赞叹声、相机快门声，以及广场喷泉淙淙的水流声，那是小镇永恒的背景音。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`莱茵河就在几步之遥的地方静静流淌，天鹅优雅地划开水波。河边长椅上坐着晒太阳的老人，和看天鹅看得入迷的孩童。你会发现，这些令人惊叹的湿壁画建筑，一楼很多就是面包店、肉铺、咖啡馆和小旅馆。居民推着自行车从16世纪的拱门下穿过，在画着圣乔治屠龙图案的房子前停下，掏出钥匙打开家门——历史在这里不是被供奉起来的，而是依然在呼吸、在被使用的生活本身。这种极致的美丽与平常日子水乳交融的状态，正是施泰因最核心、也最打动人心的魔力。它让你相信，童话镇是真实存在的，而且里面一直住着幸福的人。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`施泰因`} />
                <InfoRow label="英文名称" value={`Stein am Rhein`} />
                <InfoRow label="正式名称" value={`Stein am Rhein`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`施泰因`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座因莱茵河贸易而繁荣、其近乎完美的中世纪晚期城市风貌被完好“冻结”保存至今的珍宝小镇。`} />
                <InfoRow label="建筑特色" value={`以主街两旁密集的、拥有陡峭山形墙和凸窗的商人住宅为核心，其外墙覆盖着精美绝伦、色彩鲜艳的湿壁画与华丽的凸窗装饰。`} />
                <InfoRow label="建筑风格" value={`以晚期哥特式与文艺复兴风格为主，湿壁画主题则横跨文艺复兴、矫饰主义直至巴洛克时期。`} />
                <InfoRow label="文化价值" value={`它是一部露天的、关于中世纪市民文化、行会荣耀与宗教叙事的立体教科书，是阿尔卑斯以北湿壁画艺术的巅峰展示长廊。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇街道及广场全天24小时开放。主要历史建筑内部（如市政厅、圣乔治修道院博物馆）的开放时间一般为：4月至10月 10:00-17:00，11月至3月开放时间缩短或仅周末开放，具体需查询官网。圣诞节、元旦及部分瑞士公共假日可能闭馆。小镇游客信息中心工作时间为周一至周五 9:00-12:00， 13:30-17:00。`} />
              <InfoRow label="门票价格" value={`漫步小镇本身免费。进入圣乔治修道院博物馆（含修道院教堂及博物馆）需购票，成人约8-10瑞士法郎，学生及团体有优惠。市政厅部分区域可能收取小额入场费或接受捐赠。建议购买沙夫豪森州博物馆通票，可涵盖周边多个景点。`} />
              <InfoRow label="地址" value={`Rathausplatz 1, 8260 Stein am Rhein, Switzerland`} />
              <InfoRow label="交通方式" value={`从苏黎世机场或苏黎世中央火车站出发最为便捷。在苏黎世中央火车站（Zurich HB）乘坐开往沙夫豪森（Schaffhausen）或辛根（Singen）方向的区域火车（S-Bahn），约每小时2-3班。在“施泰因-下莱茵河畔”站（Stein am Rhein， Unterseen）下车，车程约1小时10分钟。出火车站后，过桥步行约10分钟即可到达老城核心区。另一种极具风情的方式是乘坐莱茵河游船往返于沙夫豪森与施泰因之间，航程约1.5-2小时，风光绝美，但班次较少，需提前查询时刻表。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲施泰因的故事，就得从莱茵河说起。这条欧洲的“黄金水道”是它的生命线。早在公元1000年左右，一座本笃会修道院就在此建立，修士们掌控着渡口，小镇围绕修道院逐渐成型。但真正让施泰因“起飞”的，是1225年它被划归给康斯坦茨主教，并获得了举办市场和征收关税的宝贵特权。想象一下，中世纪的商船满载着食盐、谷物、葡萄酒和纺织品，从博登湖驶向北海，施泰因就成了一个关键的中转站和税卡。财富，像莱茵河的河水一样，开始源源不断地涌入。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了15世纪，施泰因迎来了它的“黄金时代”。富裕起来的商人和行会（比如酿酒师、裁缝、鞋匠）不再满足于朴素的木结构房子，他们竞相建造以石头为底、拥有气派山墙和凸窗的豪宅。光有石头还不够，那时印刷术还未普及，书本昂贵，如何彰显自己的品味、信仰和财富呢？答案就是：把故事画在墙上。于是，一种独特的“外墙文化”诞生了。他们请来最好的画师，用湿壁画技术，将宗教教诲、古典神话、家族纹章甚至行业场景，浓墨重彩地描绘在房子的正立面。每一幅画都是一个宣言，一次炫耀，一堂给所有路过者的公共课。广场周围的建筑，就像一场无声但华丽的竞赛，最终形成了今天我们看到的、无与伦比的整体效果。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，命运也有转折。1499年，瑞士邦联与神圣罗马帝国皇帝马克西米利安一世的军队在施泰因附近爆发战争，小镇部分被毁。但坚韧的市民很快重建了家园，许多我们现在看到的湿壁画，正是重建后的16世纪作品，风格也从纯粹的哥特式融入了更多文艺复兴的优雅与人文气息。随着近代贸易路线的改变，施泰因的经济地位逐渐下滑，但塞翁失马，焉知非福。正因为发展停滞，它才意外地避免了大规模的现代化改造和战争摧残（瑞士的中立地位保护了它），那些脆弱而美丽的湿壁画得以幸存。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`我们今天能看到的景象，还要特别感谢19世纪末、20世纪初的文物保护意识觉醒。当地居民和机构开始系统地清洁、修复这些珍贵的外墙画作，让被煤烟和岁月掩埋的色彩重见天日。他们所做的，不仅仅是修复颜料，更是小心翼翼地维持了整个古镇的生活脉络。没有将居民迁出做成空洞的博物馆，而是让老房子继续发挥居住和商业功能。正是这种“活态保护”的理念，让施泰因在1945年赢得了第一个保护奖项，并在今天依然闪耀着独一无二的、既有历史深度又有生活温度的光芒。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完全沉浸于施泰因的魔法，建议安排一整天时间。最佳的抵达时间是清晨（9点前），这时旅行团的大巴还未涌入，阳光温柔地斜照在湿壁画上，色彩最为饱满柔和，石板路上也只有本地人匆忙的身影。整个游览节奏应是“慢”字当头，以市政厅广场为核心放射状探索小巷，中午在河边午餐，下午可以乘船游河或登上霍恩克林根城堡俯瞰全景，傍晚时分再回到广场，感受华灯初上与落日余晖交织时分的宁静。这样的安排既能捕捉光影最美的时刻，又能体验到小镇从清晨的苏醒到夜晚的安详的完整韵律。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避开周末和盛夏的中午，那是人流的最高峰，会严重影响观赏和拍照体验。尊重私人住宅，湿壁画建筑很多是民宅，拍照时请保持安静，不要打扰居民。穿一双绝对舒适的平底鞋，因为石板路起伏不平，而且探索小巷和爬山都需要好脚力。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从火车站出来，别急着过桥，先在莱茵河对岸驻足几分钟，拍下小镇与教堂尖塔倒映在水中的经典明信片视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过古老的城门，任由自己迷失在通向市政厅广场的、那些挂着繁花的小巷里，让惊喜循序渐进。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在市政厅广场中央的喷泉边坐下，花上至少半小时，像阅读一本巨著般，顺时针慢慢“解读”环绕你的每一栋湿壁画建筑的山墙、凸窗和壁画细节。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开圣乔治修道院厚重的木门，踏入中世纪回廊的静谧与清凉，对比外墙的喧嚣华丽与内院的沉思氛围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着莱茵河岸向北漫步，经过系满小巧游艇的码头，一直走到古老的木质廊桥，看天鹅在桥墩间嬉戏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`鼓起勇气爬上小镇后方森林覆盖的山丘，抵达霍恩克林根城堡的露台，为自己赢得一幅囊括红屋顶、蓝河水和远方田野的360度全景画卷。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间和预算允许，跳上一艘白色的游船，让莱茵河的风拂过脸庞，从水上看小镇的天际线缓缓移动，是完全不同的体验。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落时分，回到主街，找一家有户外座位的餐厅，点一份当地的白葡萄酒和炸鱼，看着壁画建筑在暖黄色灯光下苏醒成另一个梦幻版本。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`莱茵河对岸（北岸）的草坪或小路`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，使用长焦镜头压缩空间，能拍出建筑群、教堂尖塔与它们在水中完美倒影的对称构图，天鹅入画更是点睛之笔。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`市政厅广场东南角仰拍“白鹤”楼`}</h4>
                  <p className="text-sm text-gray-700">{`上午的阳光能很好地照亮这幅最著名的湿壁画，将华丽的山墙、凸窗和栩栩如生的白鹤巢与一角蓝天一同纳入镜头。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“下门”城门洞内向外拍摄主街`}</h4>
                  <p className="text-sm text-gray-700">{`利用城门洞形成天然画框，将目光引导向色彩缤纷、纵深感的湿壁画街道，人物穿行其间能增加生动感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`霍恩克林根城堡的观景台`}</h4>
                  <p className="text-sm text-gray-700">{`下午顺光时分，使用广角镜头，将前景的城堡石砖与中景的小镇红色屋顶、蜿蜒的莱茵河以及远景的农田和山脉全部收纳，层次感极强。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`河边码头拍摄建筑水影`}</h4>
                  <p className="text-sm text-gray-700">{`在无风的晴朗日，靠近水边，放低机位，可以拍到湿壁画建筑及其清晰倒影，画面纯净而富有诗意。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄湿壁画时，注意光线角度，侧光能更好地展现壁画纹理和凹凸感，避免正午的顶光。广角镜头对于捕捉广场全景和狭窄街道的纵深感至关重要。请务必关闭闪光灯，强光会对数百年的颜料造成不可逆的伤害，这也是对居民的尊重。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济之选`}</h4>
                  <p className="text-sm text-blue-800">{`老城墙边由家族经营的小旅馆，房间虽小但一尘不染，早餐室的窗户正对着内院花园，老板娘会热情地为你手绘步行地图。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`经典体验`}</h4>
                  <p className="text-sm text-green-800">{`位于市政厅广场一侧、本身就是受保护历史建筑的酒店，住在画满壁画的房子里，夜晚当游客散去，你可以独享被历史环抱的静谧时刻。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`河景享受`}</h4>
                  <p className="text-sm text-yellow-800">{`莱茵河畔带阳台的精品公寓，清晨在私人阳台上伴着河面的薄雾和天鹅的叫声喝咖啡，夜晚看对岸灯火与星光共舞。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`乡间风情`}</h4>
                  <p className="text-sm text-purple-800">{`小镇外步行15分钟可达的田园民宿，周围是苹果园和麦田，主人会邀请你品尝自家酿的苹果酒，享受纯粹的瑞士乡村宁静。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇中心住宿数量有限且非常抢手，尤其是旺季（6-9月及圣诞市场期间），务必提前数月预订。施泰因治安极好，夜晚漫步非常安全。如果自驾前来，需提前确认酒店是否提供停车位，老城内停车位稀缺且昂贵，通常酒店会指引你去附近的公共停车场。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开施泰因很久以后，闭上眼睛，脑海里浮现的不是某一幅具体的壁画，而是一种整体的、温暖的、近乎不真实的氛围感。那是一种被极致的美学、有序的安宁和深厚的历史共同包裹的感觉。在这个每秒都在迭代的世界里，施泰因像一块被时光精心包裹起来的琥珀，里面的每一个细节——从门环的形状到窗台的花朵——都凝固着某个时代人类对“美好生活”的集体想象与实践。它证明了，实用与艺术、居住与鉴赏、过去与现在，并非一定要割裂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它更像一个温柔的提醒：深度旅行，有时候不是为了猎奇或打卡，而是为了去寻找这样一种“完整性”。在一个地方，你能看到它的源头，看懂它如何生长，并欣慰地发现它依然健康地活着。施泰因就是这样一个完整的宇宙。它值得你专程为它安排一次旅程，放缓脚步，花时间去“阅读”每一面墙，去河边发一会儿呆，去和面包店老板聊上两句。它会回报给你的，是一种久违的内心平静，以及一种确信：世界上确实存在一些地方，它们坚定地守护着自己的节奏和容颜，并因此让所有到访者的心灵，得到了一次深深的抚慰与富足。这，便是专程拜访施泰因的全部意义。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/fribourg-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    弗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">弗里堡老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Fribourg Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/appenzell-traditional-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿彭策尔传统村落</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Appenzell</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/slavonice-renaissance-frescoes" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯拉沃尼采</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Slavonice</p>
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
