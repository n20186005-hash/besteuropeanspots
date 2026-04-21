import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '高亚国家公园 Gauja National Park｜拉脱维亚“小瑞士”，密林深处的红砖城堡与史诗河谷 - 最佳欧洲景点',
  description: '车子刚驶离里加的平坦街道，窗外的世界就陡然变了颜色。空气骤然清冽起来，带着松针、潮湿苔藓和远处河流的混合气息。这不是你想象中那种修剪整齐的欧洲公园，而是一片近乎原始的、呼吸着的巨肺。高亚河像一条碧绿的绸带，在深深切割的河谷中蜿蜒，两岸是高达90米的砂岩悬崖，被千百年来的风和水雕琢成奇异的形状。阳光费',
}

export default function GaujaNationalParkLatviaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '拉脱维亚', href: '/destinations/latvia' },
            { label: '高亚国家公园', href: '/attractions/gauja-national-park-latvia' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`高亚国家公园・Gauja National Park・拉脱维亚・维泽梅地区（主要门户城镇：锡古尔达、采西斯）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚驶离里加的平坦街道，窗外的世界就陡然变了颜色。空气骤然清冽起来，带着松针、潮湿苔藓和远处河流的混合气息。这不是你想象中那种修剪整齐的欧洲公园，而是一片近乎原始的、呼吸着的巨肺。高亚河像一条碧绿的绸带，在深深切割的河谷中蜿蜒，两岸是高达90米的砂岩悬崖，被千百年来的风和水雕琢成奇异的形状。阳光费力地穿透云杉和松树交织的顶棚，在林间空地上投下晃动的光斑，脚下是厚厚一层柔软的、发出吱呀声响的松针地毯。你瞬间就明白了，为什么这里被叫作“小瑞士”——但这里没有阿尔卑斯的喧嚣，只有波罗的海特有的、沉静的磅礴。
这片土地的心跳，远不止于自然。就在你以为要彻底迷失在绿色中时，转过一个弯，一座由暗红色砖石砌成的城堡塔楼，赫然从森林顶端探出头来。那不是迪士尼式的完美童话城堡，而是带着风霜蚀刻的痕迹、断壁残垣与顽强屹立共存的史诗。它安静地矗立在那里，仿佛森林是它忠诚的守卫，也是它试图挣脱的囚笼。这种自然与人文遗迹如此紧密、如此野性地纠缠在一起的景象，是高亚最独特的魅力。你看到的不仅是风景，更是一本摊开在大地上的立体史书。
当地人把这里当作灵魂的后院。你会遇到穿着专业装备的徒步家庭，父亲指着树根旁的蘑菇低声讲解；会遇到在河边平坦砂岩上铺开野餐毯的青年，分享着黑麦面包和奶酪；更会遇见在古老的、被称为“歌山”的山丘下静静坐着的老人，也许他正在心里默念一首祖辈传唱的、关于森林与骑士的达伊纳（拉脱维亚民歌）。在这里，人与自然、与历史的关系不是疏远的观赏，而是日常的、亲密的共生。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子刚驶离里加的平坦街道，窗外的世界就陡然变了颜色。空气骤然清冽起来，带着松针、潮湿苔藓和远处河流的混合气息。这不是你想象中那种修剪整齐的欧洲公园，而是一片近乎原始的、呼吸着的巨肺。高亚河像一条碧绿的绸带，在深深切割的河谷中蜿蜒，两岸是高达90米的砂岩悬崖，被千百年来的风和水雕琢成奇异的形状。阳光费力地穿透云杉和松树交织的顶棚，在林间空地上投下晃动的光斑，脚下是厚厚一层柔软的、发出吱呀声响的松针地毯。你瞬间就明白了，为什么这里被叫作“小瑞士”——但这里没有阿尔卑斯的喧嚣，只有波罗的海特有的、沉静的磅礴。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这片土地的心跳，远不止于自然。就在你以为要彻底迷失在绿色中时，转过一个弯，一座由暗红色砖石砌成的城堡塔楼，赫然从森林顶端探出头来。那不是迪士尼式的完美童话城堡，而是带着风霜蚀刻的痕迹、断壁残垣与顽强屹立共存的史诗。它安静地矗立在那里，仿佛森林是它忠诚的守卫，也是它试图挣脱的囚笼。这种自然与人文遗迹如此紧密、如此野性地纠缠在一起的景象，是高亚最独特的魅力。你看到的不仅是风景，更是一本摊开在大地上的立体史书。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地人把这里当作灵魂的后院。你会遇到穿着专业装备的徒步家庭，父亲指着树根旁的蘑菇低声讲解；会遇到在河边平坦砂岩上铺开野餐毯的青年，分享着黑麦面包和奶酪；更会遇见在古老的、被称为“歌山”的山丘下静静坐着的老人，也许他正在心里默念一首祖辈传唱的、关于森林与骑士的达伊纳（拉脱维亚民歌）。在这里，人与自然、与历史的关系不是疏远的观赏，而是日常的、亲密的共生。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`高亚国家公园`} />
                <InfoRow label="英文名称" value={`Gauja National Park`} />
                <InfoRow label="正式名称" value={`Gauja National Park`} />
                <InfoRow label="国家" value={`拉脱维亚`} />
                <InfoRow label="城市" value={`维泽梅地区（主要门户城镇：锡古尔达、采西斯）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`波罗的海地区历史最悠久、规模最大的国家公园，是拉脱维亚自然与民族精神的象征。`} />
                <InfoRow label="建筑特色" value={`中世纪红砖城堡废墟与全新木质观景塔在原始森林中奇妙共存，形成时空对话。`} />
                <InfoRow label="建筑风格" value={`以中世纪利沃尼亚骑士团城堡的哥特式红砖建筑为核心，融合了当地传统的木结构建筑艺术。`} />
                <InfoRow label="文化价值" value={`见证了利沃尼亚骑士团、瑞典王国、沙俄等势力的兴衰，其森林与河谷是拉脱维亚民歌和传说的源泉。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`公园全年24小时开放，但内部具体景点（如图雷达城堡、采西斯城堡博物馆等）有独立开放时间。通常夏季（5月至9月）为10:00-18:00，冬季缩短至10:00-16:00或17:00。自然小径、露营地不受限。重要提示：10月至次年4月，部分景点周一闭馆，且冬季大雪可能临时关闭部分徒步路线。`} />
              <InfoRow label="门票价格" value={`进入国家公园本身免费。内部景点单独收费：图雷达城堡博物馆约8欧元，采西斯城堡博物馆联票约10欧元。有学生、儿童及家庭优惠票。公园内的冒险公园（如锡古尔达的缆车、雪橇轨道、蹦极）需额外购票，项目价格在5-30欧元不等。`} />
              <InfoRow label="地址" value={`Gauja National Park, Sigulda, Latgale suburb, LV-2150, Latvia （游客中心地址）`} />
              <InfoRow label="交通方式" value={`从首都里加出发是最佳选择。里加中央火车站每小时有频繁的电气火车开往锡古尔达，车程约1小时，票价仅几欧元，沿途风景如画。自驾同样方便，沿A2公路向北行驶约50公里即达锡古尔达入口，约45分钟。公园内部景点分散，建议在锡古尔达或采西斯小镇租自行车（夏季）或自驾，部分偏远河谷区域需依赖徒步。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "高亚河谷的故事，始于冰河退去后留下的丰厚沙土与深邃沟壑。但让它登上历史舞台的，是13世纪那把带着十字架印记的利剑。当时，属于日耳曼势力的利沃尼亚骑士团为了征服和教化波罗的海南岸的古老部落，沿着高亚河这条天然通道建造了一系列坚固的城堡。1207年，在图雷达的悬崖上，第一块红砖被砌下。采西斯、锡古尔达的城堡紧随其后。这些城堡不仅仅是军事要塞，更是经济、行政和宗教中心。红砖在当时是昂贵且先进的建材，它们宣告着新秩序的到来，也与森林的翠绿、砂岩的土黄形成了永恒的色彩冲撞。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "随后的几百年，这片土地成为了各方势力角逐的棋盘。骑士团内部争斗，与立陶宛大公国联姻，又一同抵抗条顿骑士团的东进。图雷达城堡甚至一度成为利沃尼亚骑士团大团长的驻地。16世纪的利沃尼亚战争像一场风暴，瑞典人、波兰-立陶宛人、沙俄在此反复拉锯，城堡在炮火中易手、损毁、重建。你可以想象，在某个秋日的黄昏，守卫士兵从塔楼望向窗外，脚下是燃烧的森林与漂着浮尸的幽暗河水，那是何等的苍凉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当战争的硝烟逐渐散去，城堡的军事意义褪去，它们慢慢被遗忘，被森林悄然吞噬。石头崩塌，藤蔓爬上墙头，狐狸在曾是宴会大厅的地基里做窝。然而，另一种文化力量却在这片土地上悄然生长。拉脱维亚的农民和伐木工，这些大地的真正子民，在森林的庇护下，保存了自己的语言、多神教的信仰和无数民歌传说。那些关于“歌山”下埋藏着宝藏、关于森林精灵和湖泊女神的传说，让高亚的每一块石头、每一片树林都充满了灵性。19世纪民族觉醒时期，知识分子们深入这片河谷，采集民歌，寻找民族身份的根源。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "进入20世纪，经历了两次世界大战的创伤和苏联时期，拉脱维亚人将高亚河谷视为民族精神的堡垒。1963年，它被确立为苏联第一个（也是拉脱维亚第一个）国家公园，这背后是对自然与文化双重遗产的坚定保护意志。独立后，保护工作更加系统。如今，你看到的那些看似古朴的木制观景塔、徒步栈道，都是精心设计、融入环境的现代作品。修复城堡时，人们也刻意保留了部分废墟状态，不去“完整复原”，因为时光的残缺本身，就是最真实的历史叙事。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`强烈建议安排至少整整两天时间，才能触及高亚的灵魂。第一天聚焦于锡古尔达周边，以人文历史与壮丽全景为主；第二天深入采西斯地区，探索更幽静的森林与城堡核心。最佳的抵达时间是清晨，在游客大巴到来之前，独享森林的宁静与晨光。整体节奏宜慢不宜快，多留出时间发呆、徒步和偶遇。自驾或搭配火车与自行车是最灵活的方式。这样的安排能让你由表及里，从震撼的观景体验到深度的历史沉浸，完整感受公园的多重面貌。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`林间小径湿滑，务必穿着防滑耐磨的徒步鞋，雨季最好准备防水鞋套。公园内手机信号时有时无，提前在游客中心领取纸质地图至关重要。对野生动物（包括蚊虫）保持尊重距离，不要采摘不认识的蘑菇和浆果。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从锡古尔达的空中缆车开始，横越高亚河谷，在微风中俯瞰脚下如绿色深渊般的森林与蜿蜒的碧绿河带。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`踏上图雷达城堡废墟，用手触摸那些冰冷粗糙的红砖，沿着狭窄的螺旋石阶登上主塔，想象骑士们曾在此守望的边境风云。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步行穿过著名的“画家之路”小径，在每一个天然观景台驻足，看阳光如何将对面的砂岩悬崖染成金黄。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在锡古尔达小镇找一家家庭餐馆，必点一份用当地森林浆果制作的甜点和一杯清凉的拉脱维亚啤酒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第二天清晨驱车前往采西斯，步入那座巨大而完整的红砖城堡内部，在昏暗的地牢、礼拜堂和骑士大厅里聆听语音导览讲述的悲欢离合。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡后门悄无声息地融入“公园公园”的森林步道，寻找那棵被称为“伟大松树”的500岁树王，感受它的沉默与能量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着高亚河岸的平缓步道悠闲骑行或散步，直到找到一个只有流水声与鸟鸣的私人河湾，脱下鞋袜感受冰凉的河水。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前登上采西斯城堡旁的现代木制观景塔，看夕阳的余晖将整片森林、城堡屋顶和远方的小镇镀上一层温暖的琥珀色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`图雷达城堡废墟仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午日落前一小时，站在城堡废墟下方的草地上，用广角镜头仰拍，将沧桑的红砖断墙与背后无尽的森林天空一同纳入画面，构图时让藤蔓植物作为自然画框。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`锡古尔达缆车中段全景`}</h4>
                  <p className="text-sm text-gray-700">{`选择晴朗的傍晚乘坐缆车，在缆车行进至河谷正中央时，将相机紧贴玻璃，拍摄脚下深邃的绿色河谷、蜿蜒的高亚河以及对岸悬崖上的城堡剪影，形成动静结合的全景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`采西斯城堡内院光影`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，进入城堡内部方形庭院，寻找阳光从四周高墙顶端斜射入内院的光柱，拍摄光影在古老砖石地面和墙壁上形成的几何图案，等待一两个游客走入光中成为点睛之笔。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`伟大松树低角度拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`清晨林间薄雾未散时，躺在这棵巨松前方的地上，用超广角镜头从树根向上拍摄，捕捉它无比粗壮的树干如通天柱般伸向被树冠切割成碎片的天光，展现生命的庄严。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`高亚河湾长曝光`}</h4>
                  <p className="text-sm text-gray-700">{`在游客稀少的河湾，将相机固定在三脚架上，使用减光镜进行长时间曝光（数秒至数十秒），将流淌的河水雾化成柔滑的丝绸，与岸边清晰的岩石和森林倒影形成质感对比。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效消除树叶和水面的反光，让森林的绿色更加浓郁深沉。拍摄城堡内部或博物馆展品前，务必确认是否允许使用闪光灯，通常都是禁止的。尊重当地人的隐私，拍摄人物前最好先微笑示意。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`森林秘境小屋`}</h4>
                  <p className="text-sm text-blue-800">{`租住在锡古尔达森林深处的传统木屋，晚上在露台上就能看见毫无光污染的璀璨星空，被松涛声和壁炉的噼啪声包围。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史中心客栈`}</h4>
                  <p className="text-sm text-green-800">{`下榻采西斯城堡广场旁由古老商宅改造的精品客栈，房间天花板还保留着原始的木梁，推开窗就是石板路和城堡塔楼，完美融入中世纪氛围。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`河谷视野设计酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`选择锡古尔达悬崖边上的现代设计酒店，拥有整面的落地玻璃窗，在房间内就能享受270度的河谷全景，体验自然与设计的交融。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`背包客之家与桑拿`}</h4>
                  <p className="text-sm text-purple-800">{`入住锡古尔达河畔友好的青年旅舍，晚上和来自世界各地的旅人交流故事，然后体验一次地道的拉脱维亚森林桑拿，用橡树叶束拍打身体，再到凉风中冷却，极致放松。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（6-8月）和秋季赏叶季（9月底-10月初）住宿非常紧俏，务必提前数月预订。冬季很多森林小木屋和露营地会关闭，但小镇上的酒店照常营业，是体验冰雪童话世界的绝佳时机。公园内大部分住宿地点都非常安全宁静。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开高亚国家公园许久后，那股混合着松脂、潮湿泥土和古老砖石的气味，依然会偶尔窜入你的记忆。它带给你的震撼，不同于巴黎的奢华或罗马的恢弘，而是一种沉静而持久的力量。在这里，你仿佛能听到时间流动的两种声音：一种是地质时间，缓慢到以冰川和河流为单位，雕刻出深邃的河谷；另一种是人类时间，充满了战争、信仰、歌声与遗忘，在红砖城堡上刻下斑驳的印记。而森林，默默见证着一切，包容着一切，也最终覆盖一切。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个我们被碎片信息和虚拟世界包围的时代，高亚提供了一种珍贵的“深潜”体验。它要求你放下手机（因为常常没信号），用双脚去丈量土地，用皮肤去感受风，用全部感官去打开自己。它告诉你，历史不只在博物馆的玻璃柜里，更在森林中每一块长满青苔的石头下，在河流冲刷的每一道岩层纹理中。来这里，不是为了打卡，而是为了进行一次自我与自然、与历史深处的对话。你会发现，这片拉脱维亚的“小瑞士”，拥有的不仅是风景，更是一个古老灵魂缓慢而深沉的呼吸。这是每一位渴望真实触碰世界的旅人，都不应错过的心灵栖息地。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/rundale-palace" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    伦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">伦达莱宫（波罗的海的凡尔赛宫）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rundāle Palace</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/riga-art-nouveau-architecture" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    里
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">里加新艺术建筑群</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Art Nouveau architecture in Riga</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/aglona-basilica" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿格洛纳大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Aglona Basilica</p>
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
