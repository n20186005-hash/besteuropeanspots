import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '曼托瓦 Mantua｜被三湖环绕的贡扎加王朝珍宝，意北最被低估的文艺复兴水城 - 最佳欧洲景点',
  description: '当你第一眼看到曼托瓦，你会怀疑自己是不是闯进了一幅湿壁画。火车缓缓驶近，窗外不是典型的意大利山丘，而是一片辽阔如镜的水面，倒映着天际线和一座仿佛从水中直接生长出来的城市轮廓。三片巨大的湖泊——上湖、中湖、下湖——像温柔的手臂将古城环抱，阳光洒在湖面，碎成千万片金子，有天鹅和白鹭慢悠悠地划过。那股气味...',
}

export default function MantuaCityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '曼托瓦', href: '/attractions/mantua-city' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`曼托瓦・Mantua・意大利・曼托瓦`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你第一眼看到曼托瓦，你会怀疑自己是不是闯进了一幅湿壁画。火车缓缓驶近，窗外不是典型的意大利山丘，而是一片辽阔如镜的水面，倒映着天际线和一座仿佛从水中直接生长出来的城市轮廓。三片巨大的湖泊——上湖、中湖、下湖——像温柔的手臂将古城环抱，阳光洒在湖面，碎成千万片金子，有天鹅和白鹭慢悠悠地划过。那股气味是混合的：水边略带腥甜的湿润空气，和从老城飘来的、刚出炉的意式面包的焦香。
走进古城，你立刻会感受到两种节奏的交织。在气派的索尔代洛广场，时间仿佛是凝固的。巨大的公爵宫建筑群沉默矗立，红砖墙在午后阳光下泛着温暖的蜜色，你几乎能想象出当年贵族们穿着天鹅绒长袍从这里走过的窸窣声。但只需拐进旁边一条狭窄的拱廊小巷，生活的气息便扑面而来。主妇从高窗探出身来晾晒衣物，自行车铃叮当作响，小餐馆里飘出炖肉和鼠尾草的浓郁香气。当地人不是在咖啡馆外站着喝一杯浓缩咖啡，就是在湖边慢跑。这座城不是仅供瞻仰的纪念碑，它被呼吸着，生活着。
而曼托瓦最摄人心魄的魅力，在于那种“意外的发现”。你可能只是为了举世闻名的“婚礼房”壁画而去公爵宫，却被走廊尽头一扇偶然打开的门后，那个充满异国情调、墙壁画满孔雀和奇花异草的“镜厅”震撼得说不出话。你在泰宫里，本打算匆匆掠过那些古典雕塑，却被引到一个不起眼的房间，抬头看见曼特尼亚绘制的天顶壁画——那些嬉戏的小天使和蓝天白云，以惊人的透视技巧让你产生屋顶完全敞开的错觉，一种纯粹的、文艺复兴式的欢乐瞬间将你吞没。这里没有佛罗伦萨或罗马那样迫人的游客洪流，艺术和奇迹就安静地藏在下一道门廊后面，等待有缘人的一次转角相遇。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你第一眼看到曼托瓦，你会怀疑自己是不是闯进了一幅湿壁画。火车缓缓驶近，窗外不是典型的意大利山丘，而是一片辽阔如镜的水面，倒映着天际线和一座仿佛从水中直接生长出来的城市轮廓。三片巨大的湖泊——上湖、中湖、下湖——像温柔的手臂将古城环抱，阳光洒在湖面，碎成千万片金子，有天鹅和白鹭慢悠悠地划过。那股气味是混合的：水边略带腥甜的湿润空气，和从老城飘来的、刚出炉的意式面包的焦香。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进古城，你立刻会感受到两种节奏的交织。在气派的索尔代洛广场，时间仿佛是凝固的。巨大的公爵宫建筑群沉默矗立，红砖墙在午后阳光下泛着温暖的蜜色，你几乎能想象出当年贵族们穿着天鹅绒长袍从这里走过的窸窣声。但只需拐进旁边一条狭窄的拱廊小巷，生活的气息便扑面而来。主妇从高窗探出身来晾晒衣物，自行车铃叮当作响，小餐馆里飘出炖肉和鼠尾草的浓郁香气。当地人不是在咖啡馆外站着喝一杯浓缩咖啡，就是在湖边慢跑。这座城不是仅供瞻仰的纪念碑，它被呼吸着，生活着。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而曼托瓦最摄人心魄的魅力，在于那种“意外的发现”。你可能只是为了举世闻名的“婚礼房”壁画而去公爵宫，却被走廊尽头一扇偶然打开的门后，那个充满异国情调、墙壁画满孔雀和奇花异草的“镜厅”震撼得说不出话。你在泰宫里，本打算匆匆掠过那些古典雕塑，却被引到一个不起眼的房间，抬头看见曼特尼亚绘制的天顶壁画——那些嬉戏的小天使和蓝天白云，以惊人的透视技巧让你产生屋顶完全敞开的错觉，一种纯粹的、文艺复兴式的欢乐瞬间将你吞没。这里没有佛罗伦萨或罗马那样迫人的游客洪流，艺术和奇迹就安静地藏在下一道门廊后面，等待有缘人的一次转角相遇。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`曼托瓦`} />
                <InfoRow label="英文名称" value={`Mantua`} />
                <InfoRow label="正式名称" value={`Mantua`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`曼托瓦`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`意大利文艺复兴时期最辉煌、最稳定的宫廷之一，贡扎加家族统治超过四个世纪的“完美之城”。`} />
                <InfoRow label="建筑特色" value={`一座被人工湖系统巧妙护卫的“岛城”，城内则是宏伟宫殿、优雅广场与中世纪小巷的华丽交响。`} />
                <InfoRow label="建筑风格" value={`以中世纪为基础，历经文艺复兴、矫饰主义乃至新古典主义的层层叠加，形成和谐的整体。`} />
                <InfoRow label="文化价值" value={`一个将政治野心、艺术赞助与乌托邦城市规划梦想紧密结合的活态博物馆，见证了从宫廷画家曼特尼亚到建筑师阿尔伯蒂的创造力。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城本身全天开放。核心景点如公爵宫、泰宫等开放时间通常为周二至周日 8:30-19:00（最后入场时间为18:30），周一闭馆。具体开放时间随季节略有调整，冬季可能缩短。圣安德烈亚大教堂等宗教场所开放时间更为灵活，但中午常有休息时段。建议行前在官网确认，并注意许多景点在每月第一个周日免费开放。`} />
              <InfoRow label="门票价格" value={`古城本身无需门票。主要景点单独售票，也有联票。例如，公爵宫门票约15欧元，泰宫约12欧元。可购买“曼托瓦博物馆卡”（约20欧元），有效期内可进入多个市立博物馆和宫殿。欧盟18-25岁公民及教师有折扣，18岁以下及65岁以上欧盟公民通常免费。部分教堂免费进入，但参观珍宝室或登顶需小额捐赠。`} />
              <InfoRow label="地址" value={`Piazza Sordello, 40, 46100 Mantova MN, Italy`} />
              <InfoRow label="交通方式" value={`最近的主要国际机场是米兰马尔彭萨机场或维罗纳瓦莱里奥卡图洛机场。从米兰中央火车站乘坐火车前往曼托瓦约需1.5-2小时，有直达或经米兰罗加雷多中转的列车，班次频繁。从维罗纳出发则更近，火车约40分钟。曼托瓦火车站距离古城中心约1.5公里，可搭乘公交或悠闲地步行20分钟穿过绿意盎然的公园和护城河进入古城。自驾可将车停在古城外围的收费停车场，古城内为交通限制区。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`曼托瓦的故事，绕不开一个传奇家族——贡扎加。在1328年，路易吉·贡扎加通过不那么光彩但非常有效的手段，成为了这座城市的统治者，开启了家族近四百年的统治序幕。但真正把曼托瓦点石成金的，是15世纪的卢多维科三世·贡扎加。这位侯爵是个不折不扣的人文主义者和艺术痴迷者。他不满足于仅仅拥有权力，更想打造一个象征智慧与美的“理想国”。他请来了当时最顶尖的艺术家，其中最重要的两位，注定将曼托瓦的名字刻入艺术史册：一位是建筑师莱昂·巴蒂斯塔·阿尔伯蒂，他设计了恢弘的圣安德烈亚大教堂；另一位，则是年轻的画家安德烈亚·曼特尼亚，侯爵几乎把他当成家人，给予他前所未有的创作自由。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`曼特尼亚在公爵宫内的“婚礼房”留下的壁画，是文艺复兴艺术一次革命性的宣言。走进这个房间，你会被一种近乎眩晕的错觉所包围。墙壁上的壁画描绘了卢多维科三世家族的宫廷生活场景，但妙处在于，曼特尼亚用精湛的透视法，把墙壁“打开”了，画中的立柱、阳台和天空与真实的建筑结构无缝衔接，贵族、仆人、马匹和小狗仿佛就生活在墙后的另一个空间里。更惊人的是天花板上绘制的圆形栏杆，一群小天使和侍女嬉笑着向下张望，透视缩略技巧运用得如此大胆，让你必须站在房间正中心抬头看，才能获得最完美的视觉体验。这不是装饰，这是一场四百多年前的“沉浸式戏剧”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`贡扎加家族的野心并未止步。到了16世纪，侯爵费德里科二世迎娶了哈布斯堡家族的公主，为了彰显实力与品味，他下令建造一座纯粹的“欢乐宫”，即泰宫。这座建筑本身就是矫饰主义风格的典范，外观质朴甚至有些粗犷，内部却是一个充满古典隐喻和感官惊喜的迷宫。除了曼特尼亚那个著名的天顶画，这里还有朱利奥·罗马诺设计的“巨人厅”。走进这个房间的瞬间，你会感到天地倾覆——整个穹顶和四壁画满了奥林匹斯众神与巨人们激烈战斗的场面，肌肉虬结的巨人被坍塌的立柱和岩石压倒，扭曲的身体似乎要从墙上向你砸来。这是一种充满戏剧性和压迫感的艺术，与“婚礼房”的典雅秩序形成了鲜明对比，展示了文艺复兴晚期艺术家探索情感表达的极致。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，再辉煌的宫廷也难敌时代的洪流。1627年，贡扎加家族直系血脉断绝，曼托瓦公国陷入继承战争。最悲惨的一击发生在1630年，在西班牙和神圣罗马帝国军队的围困和随之而来的劫掠中，曼托瓦遭到了毁灭性的破坏。无数艺术珍品被洗劫一空，人口因战争和瘟疫锐减。曾经的“完美之城”迅速衰落，沉睡了近三百年。它像一位被遗忘的贵族，静静躺在湖水之中，直到意大利统一后，才逐渐被重新发现和修复。正是这段漫长的沉寂，意外地保护了它，使它没有经历大规模的现代化改造，将那个文艺复兴之梦，近乎完整地封存至今。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`理想的曼托瓦深度游览需要至少一整天，最好能住上一晚，感受它从晨雾到华灯初上的不同面貌。建议在早上九点左右抵达索尔代洛广场，这时阳光正好洒在公爵宫正面，游客尚未涌入。上午专注于公爵宫及其无与伦比的壁画，需要至少3小时沉浸其中。午餐后，散步穿过古城中心，前往圣安德烈亚大教堂和罗泰德广场，感受城市的宗教与市民生活脉搏。下午的重点是泰宫，预留2小时。傍晚时分，一定要留给湖泊，沿着湖滨散步是融入当地节奏的最佳方式。这样的安排张弛有度，既能深入艺术殿堂，又不错过水城的生活气息。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`许多宫殿和教堂在中午12:30至15:00之间有长长的午休闭馆时间，务必提前规划好行程或利用这个时间享受漫长的意式午餐。购买“曼托瓦博物馆卡”非常划算，但需注意它可能不包含所有你想看的小景点。夏季湖边蚊虫较多，记得携带防蚊液。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从索尔代洛广场开始，仰视公爵宫威严的立面和钟楼，感受贡扎加权力中心的第一印象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`钻进公爵宫迷宫般的数百个房间，在“婚礼房”中心站定，花十分钟静静欣赏曼特尼亚创造的透视奇迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探索完宫廷的奢华后，从侧门出来，迷失在“兄弟区”错综复杂的红砖小巷和安静的内庭之中。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在熙攘的“百草广场”找一家露天座位，点一份当地特色的南瓜馅意饺，看着广场上的古老建筑和热闹市井。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`怀着朝圣的心走进圣安德烈亚大教堂，在阿尔伯蒂设计的巨大穹顶下感受空间的肃穆与升腾。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步行至略显偏僻的泰宫，在“巨人厅”里体验朱利奥·罗马诺带来的那种天崩地裂的视觉冲击力。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当夕阳西下，从古城任意一个城门走出，沿着明乔河或上湖的步道漫步，看霞光把湖水、古城墙和远处的天际线染成金色与玫红。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`入夜后再次回到索尔代洛广场，在空旷的广场上听自己的脚步声回响，仰望被灯光勾勒出的宫殿剪影。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`公爵宫对面拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点的侧光能将宫殿的红砖质感与拱廊的深邃阴影完美结合，构图中纳入局部拱顶框架，人物可站在光中形成剪影。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`泰宫“巨人厅”门口向内拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`利用门框作为画框，捕捉室内游客仰望震撼天顶画的瞬间，注意调高感光度以应对室内昏暗光线。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣乔治桥中央`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落时分，以此处为起点，可以拍摄曼托瓦古城建筑群倒映在平静湖面上的经典全景，使用长焦镜头压缩空间感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`百草广场的拱廊柱间`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光强烈时，躲在拱廊阴影里，拍摄广场上钟楼与人群的活动，明暗对比强烈，富有生活气息。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`维吉尔公园临湖长椅`}</h4>
                  <p className="text-sm text-gray-700">{`黄昏蓝调时刻，坐在长椅上以低角度拍摄，将前景的湖中芦苇、中景的天鹅与背景灯火初上的古城一并纳入镜头。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内壁画严禁使用闪光灯，许多房间光线昏暗，建议携带大光圈镜头或使用相机的高感光度性能。航拍器在古城及湖泊上空飞行有严格限制，需提前查询当地法规。拍摄当地人，尤其是市场商贩，一个友好的微笑和事先示意会比举起就拍获得更生动的表情。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住古城墙内由古老宅邸改建的家庭旅馆，房间虽小但充满历史感，老板会热情地为你手绘一份只有本地人才知道的美食地图。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`下榻位于一栋15世纪宫殿内的精品酒店，睡在带有原始壁画天花板的房间里，清晨在私人内院花园享用早餐，仿佛自己是贡扎加家族的宾客。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`选择坐落在上湖畔的五星级度假酒店，拥有直面湖泊和无边泳池的露台，在私密的水疗中心放松后，可以享受一顿以湖鱼为主角的米其林星级晚餐。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`避世首选`}</h4>
                  <p className="text-sm text-purple-800">{`租下明乔河边一栋经过现代化改造的古老农舍，骑着酒店提供的自行车沿着河岸探索，体验被田园与水道包围的宁静乡村生活。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古城内的住宿更能体验中世纪氛围，但停车可能不便且夜晚非常安静；湖滨酒店景色无敌，但距离核心景点需步行10-15分钟。曼托瓦在歌剧节或美食节期间非常火爆，务必提前数月预订。无论住在哪里，请准备好聆听教堂的钟声，它们是这座古城不变的时间背景音。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开曼托瓦许久后，我发现自己最常回忆起的，不是某幅具体的壁画，而是一种整体的感觉。那是一种被水包裹的宁静，一种在宏伟与日常之间自如切换的节奏。它不像威尼斯那样彻底为游客而生，也不像米兰那样步履匆匆。曼托瓦有一种自在的、向内生长的力量。它辉煌过，也几乎被遗忘，正是这种起伏的命运，赋予它一种宠辱不惊的淡然气质。在这里，艺术不是高高在上供奉在神坛的，它就在你拐弯的巷口，在你午餐餐厅的隔壁，在你窗外那片波光粼粼的湖水的对岸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率和爆点的时代，曼托瓦像一首需要耐心聆听的复调音乐。它教会旅人慢下来，去发现“次要”景点里的主要感动，去欣赏湖面光影一小时内的变幻，去体会一座城市如何与水共生数百年。它或许永远不会成为欧洲旅行清单上的第一名，但正因为如此，它才得以保存那份珍贵的本真与静谧。对于每一位厌倦了打卡、渴望在旅行中与历史和文化进行一场深度对话的人来说，曼托瓦都是一个必然的、美丽的答案。它等在那里，不喧哗，自有声。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/orvieto" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥尔维耶托古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Orvieto</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/spoleto-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯波莱托古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Spoleto</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/palmanova-star-fortress-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    帕
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">帕尔马诺瓦</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Palmanova</p>
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
