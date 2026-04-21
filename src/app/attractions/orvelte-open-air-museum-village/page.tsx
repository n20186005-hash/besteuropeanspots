import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奥尔韦尔特 Orvelte｜没有汽车的活体民俗木屋村落 - 最佳欧洲景点',
  description: '车子驶离主干道，拐进一条被高大橡树荫庇的小路，世界瞬间就安静了。把车停在村外的树林边，脚步踏上第一条砂石小径的那一刻，你就把二十一世纪的喧嚣彻底关在了身后。首先拥抱你的是一种深沉的寂静，只有风穿过芦苇屋顶的沙沙声，和远处隐约的几声羊咩。空气里有股好闻的味道，是陈年木头被阳光晒暖后散发出的淡淡松脂香，...',
}

export default function OrvelteOpenAirMuseumVillagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '荷兰', href: '/destinations/netherlands' },
            { label: '德伦特省', href: '/destinations/netherlands' },
            { label: '奥尔韦尔特', href: '/attractions/orvelte-open-air-museum-village' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`奥尔韦尔特・Orvelte・荷兰・德伦特省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶离主干道，拐进一条被高大橡树荫庇的小路，世界瞬间就安静了。把车停在村外的树林边，脚步踏上第一条砂石小径的那一刻，你就把二十一世纪的喧嚣彻底关在了身后。首先拥抱你的是一种深沉的寂静，只有风穿过芦苇屋顶的沙沙声，和远处隐约的几声羊咩。空气里有股好闻的味道，是陈年木头被阳光晒暖后散发出的淡淡松脂香，混杂着刚刚修剪过的草坪的清新，还有从某家后院飘来的、燃烧果木的炊烟气息。
眼前的景象，像一幅被时光仔细封存、如今又缓缓展开的古典油画。一条蜿蜒的砂石主路两旁，排列着一栋栋巧克力棕色的木屋。它们低矮、敦实，巨大的斜坡屋顶几乎要垂到地面，上面铺着厚厚一层金灰色的芦苇，在午后的光线下泛着丝绸般的光泽。这些房子没有一丝一毫的张扬，仿佛不是被建造出来的，而是像蘑菇一样，从这片富含泥炭的德伦特土地里自然生长出来的。奇妙的是，这里听不到一声引擎的轰鸣，看不到一辆汽车的影子。只有自行车铃的清脆声响，马车驶过时轱辘压在砂石上的咯吱声，以及孩子们光着脚在路边玩耍的笑语。这不是一个舞台布景，你看，那户人家的窗台上真的晾着洗好的桌布，另一家的花园里，老爷爷正慢悠悠地修剪着他的玫瑰丛。
它的核心魅力，就在于这种“活着的静止”。时间在这里被巧妙地揉捏了：建筑是两百年前的，生活方式却自然而然地延续至今。铁匠铺里炉火正红，叮当的敲打声不是为了表演，而是在为邻居打造一把合用的火钳；木鞋作坊里，刨花飞舞，工匠正在制作一双真正能穿的鞋子。你逛的不仅是博物馆，更是一个功能完整的微型社会。当夕阳把木屋的轮廓拉得长长的，炊烟从烟囱袅袅升起，你会恍惚觉得，自己并非一个外来游客，而是不小心闯入了某个平行时空里，一个更温柔、更缓慢、更贴近土地本真的荷兰。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子驶离主干道，拐进一条被高大橡树荫庇的小路，世界瞬间就安静了。把车停在村外的树林边，脚步踏上第一条砂石小径的那一刻，你就把二十一世纪的喧嚣彻底关在了身后。首先拥抱你的是一种深沉的寂静，只有风穿过芦苇屋顶的沙沙声，和远处隐约的几声羊咩。空气里有股好闻的味道，是陈年木头被阳光晒暖后散发出的淡淡松脂香，混杂着刚刚修剪过的草坪的清新，还有从某家后院飘来的、燃烧果木的炊烟气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`眼前的景象，像一幅被时光仔细封存、如今又缓缓展开的古典油画。一条蜿蜒的砂石主路两旁，排列着一栋栋巧克力棕色的木屋。它们低矮、敦实，巨大的斜坡屋顶几乎要垂到地面，上面铺着厚厚一层金灰色的芦苇，在午后的光线下泛着丝绸般的光泽。这些房子没有一丝一毫的张扬，仿佛不是被建造出来的，而是像蘑菇一样，从这片富含泥炭的德伦特土地里自然生长出来的。奇妙的是，这里听不到一声引擎的轰鸣，看不到一辆汽车的影子。只有自行车铃的清脆声响，马车驶过时轱辘压在砂石上的咯吱声，以及孩子们光着脚在路边玩耍的笑语。这不是一个舞台布景，你看，那户人家的窗台上真的晾着洗好的桌布，另一家的花园里，老爷爷正慢悠悠地修剪着他的玫瑰丛。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，就在于这种“活着的静止”。时间在这里被巧妙地揉捏了：建筑是两百年前的，生活方式却自然而然地延续至今。铁匠铺里炉火正红，叮当的敲打声不是为了表演，而是在为邻居打造一把合用的火钳；木鞋作坊里，刨花飞舞，工匠正在制作一双真正能穿的鞋子。你逛的不仅是博物馆，更是一个功能完整的微型社会。当夕阳把木屋的轮廓拉得长长的，炊烟从烟囱袅袅升起，你会恍惚觉得，自己并非一个外来游客，而是不小心闯入了某个平行时空里，一个更温柔、更缓慢、更贴近土地本真的荷兰。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`奥尔韦尔特`} />
                <InfoRow label="英文名称" value={`Orvelte`} />
                <InfoRow label="正式名称" value={`Orvelte`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`德伦特省`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一个为拯救散落乡间的传统德伦特民居而被“创造”出来的活体博物馆村落。`} />
                <InfoRow label="建筑特色" value={`由数十栋保护完好的古老萨克森风格木架农舍组成，茅草屋顶低矮绵长，如同从黑土中生长出来。`} />
                <InfoRow label="建筑风格" value={`德伦特传统乡村建筑风格，以木结构、芦苇茅草顶和典型的“长屋”形式著称。`} />
                <InfoRow label="文化价值" value={`它并非冻结的历史标本，而是一个仍在呼吸的社区，真实保存并延续了荷兰东部乡村的生活智慧与手工业传统。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`村落公共区域全年全天开放，但室内博物馆、部分工坊和商店的开放时间各异。核心参观区（博物馆区域）通常为每年四月至十月，每日上午10点至下午5点开放；十一月至次年三月，仅周末和学校假期开放，时间为上午11点至下午4点。具体工坊（如铁匠铺、木鞋作坊）的开放日建议出行前在官网查看最新日程。`} />
              <InfoRow label="门票价格" value={`进入奥尔韦尔特村落本身免费。若参观中央的露天博物馆区域（包括数间历史房屋和展览），需购买门票。成人票约为8.5欧元，65岁以上长者及4-12岁儿童约为6欧元，4岁以下免费。持有博物馆卡可免费进入博物馆区域。部分体验活动（如乘坐马车）需额外付费。`} />
              <InfoRow label="地址" value={`Hoofdstraat 13, 9441 PN Orvelte, Netherlands`} />
              <InfoRow label="交通方式" value={`从阿姆斯特丹史基浦机场出发，最便捷的方式是乘坐火车。在机场火车站乘坐直达火车前往阿森站，车程约1小时45分钟，班次频繁（约每半小时一班）。抵达阿森后，在车站前的公交站换乘59路或73路公交车（方向：埃门），在“Orvelte, Dorpshuis”站下车，车程约20分钟，但请注意公交车班次较少（通常每小时1-2班），周末班次更少。强烈建议下载荷兰公交APP“9292”或“NS Reisplanner”查询实时时刻表。自驾是最灵活的选择，村落外围设有停车场（付费），停好车后步行进入无车区。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`讲奥尔韦尔特的故事，得先从它所在的这片土地——德伦特省说起。这里是荷兰的“荒原之心”，历史上遍布泥炭沼泽、石楠荒原和稀疏的森林，土地贫瘠，生活艰苦。正是在这样的环境中，催生了一种独特的建筑智慧：萨克森式长屋。农民们用当地橡木造出坚固的木架，用芦苇捆扎出厚实保暖的屋顶，将人、牲畜和储物空间统统容纳在一个巨大而倾斜的屋顶之下，以抵御严酷的北地风雪。几百年来，这样的农舍星星点点散布在乡野之间，构成了德伦特独有的地貌。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，时间进入二十世纪，现代化履带无情碾过。二战后，荷兰农业改革和机械化进程加速，许多古老农舍被废弃、倒塌，或被拆毁以腾出土地。到了1950年代，一批有识之士开始痛心疾首：这些承载着数代人生活记忆、体现着独特地域文化的建筑，正在以惊人的速度消失。当时，一位名叫扬·赫尔特曼的学校校长和一位名叫阿里·克莱因的建筑师，在考察一处即将被推平的农庄时，萌生了一个近乎疯狂的想法：与其眼睁睁看着它们消亡，不如把那些最具代表性、状态最堪忧的古老建筑，一块木头一块砖石地小心拆解，然后集中迁移到一个地方，重新搭建起来，形成一个“建筑保护区”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这个想法得到了当时德伦特省古迹保护协会的大力支持。他们选中了奥尔韦尔特——一个当时仅有几户人家、但村落肌理尚存的小定居点。这里的环境与原址相似，且远离工业区。从1960年代开始，一场宏大的“建筑迁徙”开始了。工匠们像进行精密外科手术一样，为那些濒危的农舍编号、测量、拆解，然后将所有原材料运到奥尔韦尔特，按照原貌一丝不苟地重建。这不仅仅是搬运房子，更是搬运了一段段具体而微的历史。第一批迁来的建筑中，就包括那栋著名的“赫林卡农场”，它成了整个项目的基石和信心的来源。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`随着一栋栋建筑在此“安家落户”，奥尔韦尔特逐渐成形。但创始者们并没有满足于创建一个静态的露天博物馆。他们有一个更远大的愿景：要让这个地方“活”起来。他们鼓励手工艺人入驻这些老房子，开设真正营业的铁匠铺、木工坊、奶酪场。他们允许人们购买这里的房产，但前提是必须严格遵守保护规定，维持建筑的历史外观。于是，一个奇妙的共生体诞生了：博物馆区域向游客展示历史，而私人居住区则延续着真实的乡村生活。马车和自行车被定为内部主要交通工具，“无汽车”的规则被确立并坚守至今，这才造就了那份独一无二的宁静。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的奥尔韦尔特，已经走过了半个多世纪。它从一项紧急的文化抢救行动，演变成一个自我维持、充满生机的社区和文化地标。当年那些被拯救的老木屋，如今窗明几净，里面住着热爱传统的新居民，经营着充满创意的小店。它证明了保护与发展并非悖论，历史不是包袱而是滋养未来的土壤。当你抚摸那些被岁月打磨得温润的门框时，你触摸的不仅是木头，更是几代荷兰人对于自身文化根脉的深情与执着。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议一大早就出发，最好能在上午十点前抵达。这样你能独享村落苏醒时最宁静纯净的时光，光线也最为柔和迷人。整个游览无需匆忙，请至少预留一整天（5-6小时）来沉浸式体验。节奏应该是慢悠悠的散步、好奇的窥探和随性的停留。路线大致呈一个环形：从游客中心获取地图和信息开始，沿着主街由东向西探索主要建筑和工坊，然后拐入北侧更生活化的住宅区和静谧小径，最后在南部靠近牧场和池塘的区域完成循环。重点是跟随你的感官和兴趣，随时可以偏离“路线”，或许拐角处一只晒太阳的猫，或一家飘出烘焙香味的面包房，才是你旅程中最难忘的片段。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周末和荷兰公共假期人流会显著增多，若追求极致宁静，请尽量选择工作日到访。
村落内部全是砂石路和稍不平整的小径，穿一双舒适耐走的平底鞋远比时尚的鞋子重要。
请始终记住这里是人们的家园，拍照时请保持礼貌距离，不要随意探头进入私人花园或窗户。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先去主街起点的游客中心，拿一份地图并听听工作人员热情洋溢的本地故事推荐。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着砂石铺就的Hoofdstraat主街慢慢向西走，让目光滑过每一栋茅草屋顶木屋各不相同的山花造型和门廊细节。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要推开那间铁匠铺吱呀作响的木门，让炉火的热浪和金属撞击声将你瞬间拉回前工业时代。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拐进主街北侧一条不起眼的小巷，去看看当地居民精心打理的后花园，那里往往藏着最生动的日常风景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在主街中段的乡村咖啡馆找一张户外桌子坐下，点一杯加了奶沫的荷式咖啡和一片苹果派，看马车慢悠悠地从眼前经过。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探索村落西侧那些通往森林和牧场边缘的静谧小径，听听鸟鸣和自己的脚步声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访一下那座仍在运作的“羊角”农场，看看黑头羊，了解德伦特传统的畜牧业。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在夕阳西下前，回到村落东侧的池塘边，看金色的光如何把整排木屋和它们在水中的倒影染成温暖的蜜色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`主街西端尽头回望`}</h4>
                  <p className="text-sm text-gray-700">{`下午四至六点的侧逆光能让茅草屋顶产生毛茸茸的金边，用长焦压缩街道纵深感，将马车和行人融入画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`铁匠铺或木鞋作坊门口`}</h4>
                  <p className="text-sm text-gray-700">{`捕捉工匠专注工作的侧影，利用门框形成自然画框，室内暖黄的灯光与室外冷调光线形成对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`村落中心的小池塘边`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏时分，利用平静的水面拍摄木屋和树木的完美倒影，构图时让实景与倒影对称。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`北侧牧场边的木质栅栏处`}</h4>
                  <p className="text-sm text-gray-700">{`以粗糙的栅栏为前景，聚焦后方悠闲吃草的羊群和背景里如模型般的茅草屋群，营造田园诗般的层次感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从村外停车场的树林边缘远眺`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时，晨雾尚未完全散去时，可以拍到整个村落笼罩在柔光薄雾中、宛若仙境的 panoramic 全景。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`建议携带一支变焦范围较大的镜头，以便灵活捕捉从建筑细节到广阔场景的不同画面。`}</li>
                <li>• {`尊重居民隐私，尽量避免将镜头直接对准屋内或正在私人庭院中的人们，如需拍摄建议先微笑询问。`}</li>
                <li>• {`荷兰天气多变，阴雨天的漫射光其实非常适合拍摄木屋的质感和色彩，别让雨天阻止你探索。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`村落入口附近由农舍改造的家庭式B&B，房东老太太会为你准备丰盛的德伦特风味早餐，包括自制果酱和新鲜鸡蛋。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`住在村里那间由古老谷仓修复而成的精品酒店，屋顶保留着原始木梁，但内部是极简舒适的北欧设计，夜晚安静得只能听到风声。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车十分钟可达的森林环抱中的设计庄园酒店，房间拥有全景落地窗直面荒野，提供米其林推荐级别的餐厅和顶级水疗。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`童话小屋`}</h4>
                  <p className="text-sm text-purple-800">{`预订村落核心区一两间对外短租的历史木屋，真正体验入夜后万籁俱寂、只有壁炉柴火噼啪作响的穿越之感。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`奥尔韦尔特村内的住宿数量非常有限，且极其抢手，务必提前数月预订，尤其是在夏季和学校假期。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`村落及周边地区治安极好，夜晚独自散步也非常安全，但照明较少，建议带个小手电体验真正的星空之夜。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果住在村外，请务必确认交通方式，因为夜间可能没有公共交通返回村落。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开奥尔韦尔特许久之后，那个画面还会不时在脑海里浮现：黄昏的砂石路上，一个金发小女孩骑着她的红色小自行车，铃声叮铃铃地响着，消失在了一栋巨大茅草屋顶的拐角。没有汽车尾气，没有电子屏幕的荧光，只有最纯粹的生活的声音和轨迹。这个地方给我的，远不止一次怀旧之旅或建筑鉴赏。它像一剂温柔的镇静剂，安抚着被现代生活过度刺激的神经。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切追求更快、更高效、更互联的世界里，奥尔韦尔特固执地选择了一种相反的节奏。它证明了“慢”本身具有不可替代的价值，证明了我们可以有另一种与科技共存的方式——不是被其奴役，而是将其作为工具，去更好地守护那些让我们之所以为“人”的温暖、社群感和与土地的联结。它不是一个逃离现实的乌托邦，而是一个可行的、关于如何生活的备选答案。对于每一位渴望深度游的旅人而言，来这里不仅仅是为了看古老的房子，更是为了体验一种几乎被遗忘的生活密度，感受时间如何可以被拉长、被品味。它提醒我们，真正的富足，或许就藏在最简单的日常里，在一栋能为你遮风挡雨的木屋，一条能让你安心散步的小路，和一个不需要鸣笛也能彼此问候的社区之中。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kasteel-de-haar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克莱沃城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kasteel de Haar</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/breda-beguinage-nassau" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布雷达</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Breda</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/middelburg-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    米
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">米德尔堡老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Middelburg Old Town</p>
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
