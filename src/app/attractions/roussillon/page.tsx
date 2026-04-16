import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '鲁西永（红土城） Roussillon｜上帝打翻的调色盘，普罗旺斯最浓烈的红色幻梦 - 最佳欧洲景点',
  description: '车子刚拐进鲁西永的地界，你就知道这里不一样。那不是你常见的普罗旺斯薰衣草紫或橄榄树绿，而是一种扑面而来的、带着体温的红色。空气里仿佛都飘着一层极细的、看不见的红色尘埃，阳光穿过时，整个世界都笼罩在一种温柔的、琥珀色的光晕里。第一眼望去，整个小镇就像是从地底下长出来的，而不是建在地面上的——那些房子紧...',
}

export default function RoussillonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '鲁西永（红土城）', href: '/attractions/roussillon' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`鲁西永（红土城）・Roussillon・法国・鲁西永`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚拐进鲁西永的地界，你就知道这里不一样。那不是你常见的普罗旺斯薰衣草紫或橄榄树绿，而是一种扑面而来的、带着体温的红色。空气里仿佛都飘着一层极细的、看不见的红色尘埃，阳光穿过时，整个世界都笼罩在一种温柔的、琥珀色的光晕里。第一眼望去，整个小镇就像是从地底下长出来的，而不是建在地面上的——那些房子紧紧依偎着赭红色的山崖，屋顶是陶土的红褐色，墙壁则是深深浅浅的橙、粉、黄，仿佛有人把整个秋天所有的暖色调都收集起来，随意又精心地泼洒在了这片山坡上。你甚至能闻到一种干燥的、带着泥土芬芳的独特气味，那是赭石粉末混合着百里香和松树树脂的味道，是这片土地最原始的呼吸。
沿着主路往上走，脚下的沙土路是鲜艳的橘红色，每一步都像踩在柔软的粉彩画上。小镇安静极了，只能听到自己的脚步声、远处咖啡馆隐约传来的杯碟轻碰声，以及永不缺席的、普罗旺斯那清脆的蝉鸣。当地人的生活节奏慢得让你不自觉地把手表摘掉。老太太们坐在彩色的门前慢条斯理地择着豆子，店主不急着招揽生意，只是把一筐筐用赭石染色的漂亮布料或手工皂摆在门外，任阳光把它们晒得香喷喷的。这里不像一个刻意经营的景点，更像一个依然在用自己土地的颜色，固执而骄傲地妆点日常的家园。
最打动人心的，是那种色彩的“活”性。它不是你去看一幅挂在博物馆里已经干涸的油画，而是你能亲眼目睹的色彩的源头和生命的延续。阳光在一天中游走，小镇的色调也随之魔术般变幻：清晨是带着露水湿气的、偏冷的玫瑰粉；正午阳光直射时，所有颜色都饱和到极致，明晃晃的，像一首嘹亮的进行曲；而到了傍晚，夕阳的余晖给一切镀上金边，那些红色变得深沉、内敛，仿佛大地在白天吸收的所有热量，此刻正缓缓释放出来，温暖而安详。在这里，颜色不是装饰，是骨骼，是血液，是这片土地讲述自己故事的语言。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子刚拐进鲁西永的地界，你就知道这里不一样。那不是你常见的普罗旺斯薰衣草紫或橄榄树绿，而是一种扑面而来的、带着体温的红色。空气里仿佛都飘着一层极细的、看不见的红色尘埃，阳光穿过时，整个世界都笼罩在一种温柔的、琥珀色的光晕里。第一眼望去，整个小镇就像是从地底下长出来的，而不是建在地面上的——那些房子紧紧依偎着赭红色的山崖，屋顶是陶土的红褐色，墙壁则是深深浅浅的橙、粉、黄，仿佛有人把整个秋天所有的暖色调都收集起来，随意又精心地泼洒在了这片山坡上。你甚至能闻到一种干燥的、带着泥土芬芳的独特气味，那是赭石粉末混合着百里香和松树树脂的味道，是这片土地最原始的呼吸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`沿着主路往上走，脚下的沙土路是鲜艳的橘红色，每一步都像踩在柔软的粉彩画上。小镇安静极了，只能听到自己的脚步声、远处咖啡馆隐约传来的杯碟轻碰声，以及永不缺席的、普罗旺斯那清脆的蝉鸣。当地人的生活节奏慢得让你不自觉地把手表摘掉。老太太们坐在彩色的门前慢条斯理地择着豆子，店主不急着招揽生意，只是把一筐筐用赭石染色的漂亮布料或手工皂摆在门外，任阳光把它们晒得香喷喷的。这里不像一个刻意经营的景点，更像一个依然在用自己土地的颜色，固执而骄傲地妆点日常的家园。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，是那种色彩的“活”性。它不是你去看一幅挂在博物馆里已经干涸的油画，而是你能亲眼目睹的色彩的源头和生命的延续。阳光在一天中游走，小镇的色调也随之魔术般变幻：清晨是带着露水湿气的、偏冷的玫瑰粉；正午阳光直射时，所有颜色都饱和到极致，明晃晃的，像一首嘹亮的进行曲；而到了傍晚，夕阳的余晖给一切镀上金边，那些红色变得深沉、内敛，仿佛大地在白天吸收的所有热量，此刻正缓缓释放出来，温暖而安详。在这里，颜色不是装饰，是骨骼，是血液，是这片土地讲述自己故事的语言。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`鲁西永（红土城）`} />
                <InfoRow label="英文名称" value={`Roussillon`} />
                <InfoRow label="正式名称" value={`Roussillon`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`鲁西永`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`欧洲最大、最重要的天然赭石矿床核心地带，其颜料曾染遍世界。`} />
                <InfoRow label="建筑特色" value={`所有房屋的外墙均用本地开采的赭石矿粉调和粉刷，形成从柠檬黄、杏子橙、火烈鸟粉到砖红、铁锈棕的完整暖色调色谱。`} />
                <InfoRow label="建筑风格" value={`纯粹的南法普罗旺斯乡村风格，因独一无二的矿物色彩而升华，成为人与自然材料共生的建筑典范。`} />
                <InfoRow label="文化价值" value={`一座活着的“地质色谱”与人类工艺博物馆，见证了从大地提取色彩并用于创造美学的千年传统。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇公共区域及户外赭石小径全天24小时开放。游客信息中心开放时间通常为夏季（4月至10月）9:30-12:30 & 13:30-18:30，冬季（11月至3月）时间缩短，通常为10:00-12:30 & 14:00-17:30，周日及节假日可能调整。赭石博物馆（Conservatoire des Ocres）开放时间类似，建议行前在其官网确认。圣诞节及元旦当天大多闭馆。`} />
              <InfoRow label="门票价格" value={`进入鲁西永小镇本身完全免费。官方规划的“赭石小径”徒步环路（Sentier des Ocres）收取维护费：成人票约3.5欧元，儿童（10岁以上）和学生票约2.5欧元，10岁以下免费。赭石博物馆门票约6欧元。部分提供导览游的本地机构价格在15-25欧元之间。`} />
              <InfoRow label="地址" value={`Place de la Mairie, 84220 Roussillon, France`} />
              <InfoRow label="交通方式" value={`公共交通较为局限但可行。最便捷的枢纽是阿维尼翁（Avignon）。从阿维尼翁中央火车站（Gare d‘Avignon Centre）外的公交总站，乘坐Trans Vaucluse公司的7路或15路巴士，目的地为“Apt”，在“Roussillon - Place de la Poste”站下车。车程约1小时15分钟，但班次稀疏，尤其是周末和冬季，一天可能只有3-4班，务必提前在Vaucluse公共交通官网查询最新时刻表。最推荐的方式是自驾，从阿维尼翁出发沿D900和D2公路向东北行驶约50分钟即达，小镇入口有多个付费停车场（如Parking des Ocres）。参加从阿维尼翁或艾克斯出发的一日游小团也是热门选择。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`鲁西永的故事，始于脚下这片燃烧般的土地。亿万年前，这里还是一片温暖的浅海，富含铁元素的沉积物慢慢堆积。随后地壳运动将它推上海平面，海水退去，铁元素在漫长的氧化过程中，形成了我们今天看到的、拥有超凡着色能力的赭石矿。人类发现它的美，是很早以前的事了。考古证据显示，史前人类就已经用这里的红色泥土在洞穴岩壁上作画。但真正让鲁西永登上世界舞台的，是古罗马人。他们不仅是高效的开采者，更将赭石广泛用于壁画、建筑涂料乃至化妆品，随着罗马帝国的商路，这种鲜艳稳定的颜料开始流向四方。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，鲁西永赭石的黄金时代，要等到18世纪。一位名叫让-艾蒂安·阿斯蒂埃的本地农民兼企业家，彻底改变了赭石的命运。他发现并通过改进的煅烧工艺，能够生产出颜色更鲜艳、更稳定的红色系列。阿斯蒂埃家族将开采、加工和销售规模化，建立了庞大的颜料工业。到了19世纪中叶，鲁西永地区一度供应了全球一半的天然赭石颜料。你可以想象那时的盛况：矿坑遍布山野，加工厂的烟囱昼夜冒烟，满载着红色、黄色粉末的木桶，通过马车运往马赛港，再从那里漂洋过海，去染红伦敦的砖房、巴黎艺术家的调色板，甚至遥远国度的宫殿墙壁。梵高在阿尔勒疯狂作画时，用的黄色和橙色颜料，很可能就来自这里。小镇因颜料而富庶，那些色彩斑斓的豪宅，正是那个繁荣时代的见证。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但合成颜料的发明，如同一盆冷水。20世纪初，化学家们在实验室里能更廉价、更批量地生产出各种颜色，天然赭石开采业几乎一夜之间凋零。矿场关闭，工人离去，鲁西永一度陷入沉寂，仿佛一段辉煌的历史即将被尘封。转折点出现在二战后，人们开始重新审视工业化和标准化的代价。艺术家、环保主义者和有远见的本地居民意识到，他们拥有的不是废弃的矿坑，而是独一无二的自然与文化遗产。于是，开采停止了，但保护与传承开始了。曾经的矿场被规划成地质保护区和徒步小径，旧的加工厂被改建成赭石博物馆和艺术中心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的鲁西永，完成了一次华丽的转型。它不再向大地索取颜料，而是把自己变成了一个巨大的、展示色彩美学的露天博物馆。那些曾经用来染世界的色彩，现在只用来染就自己的生活。艺术家们依然慕名而来，不是为了购买原料，而是来感受这色彩的源头活水。每一个来到这里的旅人，踩在红色的小径上，触摸着彩色的墙壁，其实都是在阅读一部由大地书写、由人类续写的，关于色彩、生存与美的长篇史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在早上九点前抵达，这时旅游大巴尚未涌入，晨光柔和，是感受小镇宁静本色和拍照的黄金时间。整个深度游览需要预留至少5-6小时，节奏宜慢不宜快。核心体验分为两部分：上午先用2-3小时沉浸在小镇巷弄的日常生活与建筑色彩中，感受人文气息；午后阳光最强时，正是进入赭石小径（Sentier des Ocres）的最佳时机，那时峡谷里的色彩在直射光下最为绚烂夺目，徒步约需1.5小时。这样的安排既能避开人流高峰，又能体验到光影变幻下鲁西永截然不同的两种魅力——生活的温度与地质的狂想。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`赭石小径的红色沙土很容易沾染鞋子衣裤，建议穿不怕脏的旧运动鞋或徒步鞋，浅色衣物需谨慎。
小镇许多巷弄陡峭且铺着光滑的鹅卵石，下雨后会非常湿滑，务必注意脚下安全。
夏季正午非常炎热，赭石小径内几乎没有遮荫，务必携带充足的饮用水、戴上帽子和太阳镜。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在主停车场后，先别急着进镇，走到旁边的观景台（Point de Vue）俯瞰整个红土城全景，看晨光如何一层层唤醒那些沉睡的色彩。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从色彩斑斓的“大路”（Rue du Four）开始漫无目的地闲逛，任由自己被各种色调的门窗、楼梯和墙角牵引，时不时探头看看那些种满天竺葵和橄榄树的私家小院。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要踏入肃穆的圣米歇尔教堂（Église Saint-Michel），感受内部被赭石色调渲染的独特光影，与外部世界的浓烈形成有趣的反差。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在镇中心的城堡广场（Place du Château）找一家咖啡馆的露天座位坐下，点一杯 espresso，看彩色的房子、绿色的悬铃木和蓝天组成完美的构图。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进赭石博物馆（前身为阿斯蒂埃工厂），亲手触摸不同编号的赭石样本，了解从矿石到颜料的神奇转化过程。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午从博物馆旁的入口进入赭石小径，沿着规划好的木栈道在红色与黄色的砂岩峡谷中穿行，仿佛漫步在火星表面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`徒步结束后，从另一条路绕回小镇，可以去本地画廊和工艺品店逛逛，寻找用传统赭石颜料制作的画作或陶器作为独特纪念。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前回到观景台或找个高处，看夕阳为整个小镇披上最后也是最华丽的一层金色绸缎。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡广场东侧小巷的拐角`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点的侧光能完美勾勒出鹅黄色墙壁的质感和阴影，将路过的当地人或一只慵懒的猫纳入前景，画面立刻充满故事感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`赭石小径峡谷底部仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射谷底，站在栈道最低处向上拍摄，能获得红色砂岩与蓝天形成强烈对比的震撼构图，色彩饱和度达到顶峰。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`镇外D106公路某个转弯处`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，驱车停在路边安全处，用长焦镜头压缩空间，可以拍到鲁西永小镇如同燃烧的宝石般镶嵌在翠绿山谷中的全景明信片角度。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`老房子门前色彩对比处`}</h4>
                  <p className="text-sm text-gray-700">{`寻找一扇被漆成地中海蓝或森林绿的门窗，它突兀地镶嵌在赭红色的墙面上，这种冲突的色彩搭配在柔和的晨光或夕阳光下拍摄效果极佳。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄当地居民或他们的私人财产（如精美的门廊）时，请务必先微笑示意并获得同意，尊重他们的隐私和日常生活。`}</li>
                <li>• {`使用偏振镜（CPL）可以有效地减少赭石表面和树叶的反光，让红色和绿色更加深沉浓郁，尤其在晴朗的中午效果显著。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`色彩艺术家之家`}</h4>
                  <p className="text-sm text-blue-800">{`住在镇中心一栋18世纪的赭石老宅里，主人是位退休画家，每个房间都用一种特定的赭石色调命名，早餐在种满柠檬树的内庭享用。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`宁静田园公寓`}</h4>
                  <p className="text-sm text-green-800">{`位于小镇边缘一个安静的区域，带有一个可以俯瞰整个吕贝隆山谷的私人露台，厨房设备齐全，适合想自己做饭、体验慢生活的家庭或情侣。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`前矿场主庄园`}</h4>
                  <p className="text-sm text-yellow-800">{`距离小镇步行10分钟的一座19世纪优雅庄园，拥有宽敞的花园和泳池，房间保留了原有的高高的天花板和复古家具，充满历史感。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计感赭石旅馆`}</h4>
                  <p className="text-sm text-purple-800">{`由本地设计师将传统赭石元素与现代极简风格巧妙融合的精品酒店，浴室里提供的沐浴用品都加入了天然的赭石粉末，体验独一无二。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`鲁西永非常小，夜生活几乎为零，夜晚极其安静，只适合追求静谧和星空的人。大部分餐馆在晚上九点后停止供餐，建议提前安排好晚餐。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（7-8月）是绝对旺季，住宿需提前数月预订，且价格高昂。更推荐在五月、六月或九月前来，气候宜人，色彩依旧绚烂，游客相对较少。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开鲁西永很久以后，闭上眼睛，那片红色依然会像底片一样显影在记忆里。但回想起来，最触动我的，或许不是那惊心动魄的色彩本身，而是这里的人们与色彩相处的方式。他们没有把这片大地赐予的宝藏封存进玻璃柜，也没有仅仅将它作为吸引游客的噱头。而是让它继续呼吸，继续生长，继续成为窗台上的一盆花、门廊前的一把椅子、日常生活里一抹不经意的背景。在这里，美不是被供奉的，是被使用的；历史不是被缅怀的，是被活着的。这种与自身传统、与自然环境自然而然、血肉相连的状态，在当今这个处处追求颠覆和流量的世界里，显得如此珍贵而富有力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你也厌倦了那些被精心包装却千篇一律的风景，渴望一种更原始、更直击心灵的感动，那么请来鲁西永吧。它不仅仅是一个“彩色小镇”。它是一个关于起源的故事——颜色的起源，一个产业的起源，一种生活美学的起源。站在这片燃烧的土地上，你会真切地感受到，人类最初拿起画笔、涂抹墙壁的那种冲动从何而来。你会理解，美从来不是抽象的，它首先来自我们脚下的大地，来自我们对这片土地的感知、利用与热爱。这是一堂用整个身心去体验的，关于色彩、时间与归属感的深刻课程，足以让任何一位旅人，在归来后，用全新的、更敏锐的目光，重新审视自己周围世界的颜色。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
