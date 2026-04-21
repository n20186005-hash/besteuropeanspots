import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '图尔奈大教堂 Tournai Cathedral｜探秘西欧唯一拥有五座塔楼的千年教堂瑰宝 - 最佳欧洲景点',
  description: '当你从图尔奈蜿蜒的老城街巷中钻出来，一抬头，那景象会让人瞬间忘记呼吸。它不是一座，也不是两座，而是五座巨大的塔楼，像一群沉默的岩石巨人，手挽手地矗立在城市的心脏。那种扑面而来的体积感和重量感，是照片完全无法传达的。阳光在灰色砂岩上跳跃，把上千年的风霜雨雪都镀上了一层柔光。空气里有股特别的味道——老石...',
}

export default function TournaiCathedralPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '比利时', href: '/destinations/belgium' },
            { label: '图尔奈圣母主教座堂', href: '/attractions/tournai-cathedral' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`图尔奈圣母主教座堂・Tournai Cathedral・比利时・图尔奈`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你从图尔奈蜿蜒的老城街巷中钻出来，一抬头，那景象会让人瞬间忘记呼吸。它不是一座，也不是两座，而是五座巨大的塔楼，像一群沉默的岩石巨人，手挽手地矗立在城市的心脏。那种扑面而来的体积感和重量感，是照片完全无法传达的。阳光在灰色砂岩上跳跃，把上千年的风霜雨雪都镀上了一层柔光。空气里有股特别的味道——老石头微微的凉意，混合着远处面包店飘来的黄油香气，还有蜡烛熄灭后那一点点温暖的蜡味。
走近了，你会听到城市的声音在这里奇妙地分层。外面广场上是孩子们踩着滑板车掠过的唰唰声、咖啡馆杯碟的轻碰；而一旦你穿过那扇厚重的木门，所有喧闹立刻被一道无形的墙隔绝在外。里面是另一个世界：巨大罗曼式拱廊下深邃的宁静，偶尔传来某个角落游客压低嗓门的惊叹回声，还有你自己的脚步声在空旷中产生的回响，像心跳一样清晰。这不是一个冰冷的博物馆，当地老人会安静地坐在长椅上祈祷，烛光在圣母像前摇曳，管理圣器室的老先生会对你微笑点头。它活着，呼吸着，依然是这座小城灵魂的锚点。
最震撼的对比，就藏在它的建筑结构里。当你站在中殿，环顾四周，是典型的12世纪罗曼式风格——敦实、厚重、稳固，圆拱像巨人的肋骨，撑起一片略显昏暗但无比安心的空间，仿佛大地本身的力量在此凝固。然后，你沿着通道往前走，毫无预兆地，眼前突然豁然开朗，一片轻盈、纤细、充满向上动感的早期哥特式圣坛像一道光注入视野。巨大的彩色玻璃窗让阳光变成七彩的瀑布倾泻而下。那一刻，你仿佛亲眼目睹了欧洲建筑史在一个空间里完成了一次伟大的交接棒——从大地的厚重，飞向天空的轻盈。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你从图尔奈蜿蜒的老城街巷中钻出来，一抬头，那景象会让人瞬间忘记呼吸。它不是一座，也不是两座，而是五座巨大的塔楼，像一群沉默的岩石巨人，手挽手地矗立在城市的心脏。那种扑面而来的体积感和重量感，是照片完全无法传达的。阳光在灰色砂岩上跳跃，把上千年的风霜雨雪都镀上了一层柔光。空气里有股特别的味道——老石头微微的凉意，混合着远处面包店飘来的黄油香气，还有蜡烛熄灭后那一点点温暖的蜡味。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，你会听到城市的声音在这里奇妙地分层。外面广场上是孩子们踩着滑板车掠过的唰唰声、咖啡馆杯碟的轻碰；而一旦你穿过那扇厚重的木门，所有喧闹立刻被一道无形的墙隔绝在外。里面是另一个世界：巨大罗曼式拱廊下深邃的宁静，偶尔传来某个角落游客压低嗓门的惊叹回声，还有你自己的脚步声在空旷中产生的回响，像心跳一样清晰。这不是一个冰冷的博物馆，当地老人会安静地坐在长椅上祈祷，烛光在圣母像前摇曳，管理圣器室的老先生会对你微笑点头。它活着，呼吸着，依然是这座小城灵魂的锚点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最震撼的对比，就藏在它的建筑结构里。当你站在中殿，环顾四周，是典型的12世纪罗曼式风格——敦实、厚重、稳固，圆拱像巨人的肋骨，撑起一片略显昏暗但无比安心的空间，仿佛大地本身的力量在此凝固。然后，你沿着通道往前走，毫无预兆地，眼前突然豁然开朗，一片轻盈、纤细、充满向上动感的早期哥特式圣坛像一道光注入视野。巨大的彩色玻璃窗让阳光变成七彩的瀑布倾泻而下。那一刻，你仿佛亲眼目睹了欧洲建筑史在一个空间里完成了一次伟大的交接棒——从大地的厚重，飞向天空的轻盈。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`图尔奈圣母主教座堂`} />
                <InfoRow label="英文名称" value={`Tournai Cathedral`} />
                <InfoRow label="正式名称" value={`Notre-Dame Cathedral in Tournai`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`图尔奈`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`比利时的“教堂之母”，西欧罗曼式向哥特式过渡的活化石建筑，世界文化遗产。`} />
                <InfoRow label="建筑特色" value={`五座巍峨的塔楼构成独一无二的天际线，融合了厚重的罗曼式中殿与优雅的早期哥特式圣坛。`} />
                <InfoRow label="建筑风格" value={`罗曼式与早期哥特式的完美融合。`} />
                <InfoRow label="文化价值" value={`见证了比利时法语区的千年宗教、艺术与城市发展史，其珍宝收藏是低地国家中世纪艺术的巅峰体现。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`教堂主体全年开放，但具体开放时间因季节和宗教活动而异，通常为上午9:30至下午5:30（冬季可能提前至下午5点关闭）。珍宝室和塔楼参观有独立且更严格的开放时间表，通常为下午1:30至5:30，且周一不开放。强烈建议出发前查阅官网，因为弥撒期间部分区域会临时关闭，且开放时间可能因修缮工程而调整。`} />
              <InfoRow label="门票价格" value={`进入教堂主体免费。参观珍宝室和登上塔楼需要购票。珍宝室票价约为6欧元，塔楼攀爬票价约为5欧元，通常有联票优惠。学生、老年人和团体有折扣，12岁以下儿童在成人陪同下免费。购票处位于教堂侧面或游客中心。`} />
              <InfoRow label="地址" value={`Place de l‘Évêché 1, 7500 Tournai, Belgium`} />
              <InfoRow label="交通方式" value={`最近的国际机场是布鲁塞尔机场或里尔机场。从布鲁塞尔中央火车站乘坐前往图尔奈的IC火车，车程约1小时，班次频繁。从里尔欧洲站乘坐TER区域火车，车程仅约30分钟。抵达图尔奈火车站后，教堂是城市的绝对中心，步行约10-15分钟即可到达。沿着清晰的路标穿过老城区，石板路会直接将你引向宏伟的塔楼群。市内公共交通不必要，步行是最佳探索方式。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起它的故事，那得把时间轴拉回到将近一千年前。图尔奈在历史上可比今天风光多了，它曾是法兰克王国的重要中心，甚至出过国王。大约在12世纪初，大概就是咱们宋朝的时候，这里的主教们决定建造一座配得上城市地位的教堂。最初的工程气势磅礴，他们采用了当时最流行的罗曼式风格，用了本地开采的蓝色石灰岩。你能想象吗，工人们一锤一凿，花了大概大半个世纪，才建成了我们今天看到的这座拥有巨大中殿和耳堂的庞然大物。那五座塔楼，从一开始就是设计的一部分，不是为了别的，就是为了彰显权力与信仰的至高无上，要让从斯海尔德河上来往的船只，从好几里外就能望见这片神圣的剪影。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`教堂的“青春期”经历了一次关键的风格转型。到了13世纪，哥特式风潮从法国吹来，那种渴望接近上帝、让建筑向上飞升的念头击中了当时的主教。于是，一场大胆的“外科手术”开始了：他们把原来罗曼风格的圣坛（就是祭坛所在的最东头部分）给拆了！在原址上，从1243年开始，工匠们修建了一个全新的、充满先锋精神的早期哥特式圣坛。这是建筑史上一次惊人的冒险，新旧风格如此激烈又如此和谐地碰撞在一起。你可以想象新旧两派工匠可能发生的争论，但最终，艺术追求战胜了守旧，给后世留下了一部立体的建筑教科书。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当然，千年的生命不可能一帆风顺。1699年，一场灾难性的大火席卷了中殿，木制屋顶和许多内部装饰化为灰烬。但比利时人的坚韧在废墟上闪光。他们并没有推倒重来，而是精心修复，并增加了华丽的巴洛克式装饰，比如那些精美的忏悔室。火灾后的重建，反而为它增添了另一层历史的纹理。近代最大的威胁来自战争。二战期间，图尔奈遭到猛烈轰炸，一颗炸弹甚至穿透了屋顶，幸运的是它没有爆炸，被英勇的工兵移除。教堂奇迹般地幸存，但周围的街区已成瓦砾。它像一位沉默的见证者，屹立不倒，看着城市在创伤中重生。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`进入21世纪，新的挑战来自于自然和时间。由于地下水位变化和石材本身的老化，这座巨人的结构出现了问题。尤其是那巍峨的塔楼，一度面临风险。从2006年开始，一项史无前例的、耗资数千万欧元的巨型修缮工程启动。工人们搭起了比教堂本身还复杂的脚手架，像给巨人做精密手术一样，一块石头一块石头地进行检测、加固和替换。这个过程本身就是奇观，你可以看到最古老的工艺与现代科技如何携手，只为让下一个千年的人们，依然能领略这份震撼。它不再只是一座教堂，而是人类守护共同文化遗产的决心象征。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要获得最完美的图尔奈大教堂体验，我强烈建议你安排出完整的一个下午。最好在午后一点左右抵达，这时上午的游客潮稍退，光线也从侧面开始为建筑勾勒出迷人的轮廓。整体游览需要3到4小时，节奏应该是“由外到内，由下至上，由宏观到细节”。先从外部环绕一周，感受其磅礴体量；接着进入教堂主体，在静谧中感受空间对比；然后重点参观珍宝室，欣赏无价的艺术品；如果体力允许，最后攀登塔楼，将整个古城尽收眼底。这样的安排能让你对这座建筑的解读层层深入，从视觉震撼到心灵触动。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`参观前务必查询官网确认珍宝室和塔楼的开放时间，它们经常因维护或天气原因关闭。内部请绝对保持安静和尊重，拍照关闭闪光灯。穿着需得体，避免无袖上衣和过短的裤子或裙子。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从老城广场的咖啡馆出发，端着你的咖啡，让那五座塔楼作为指南针，沿着石板路不疾不徐地向它走去。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先别急着进门，花二十分钟顺时针绕着教堂外墙走一圈，用手触摸那些被岁月打磨得光滑或布满坑洼的蓝色石材，抬头寻找外墙上的古怪雕刻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从西门（正门）轻轻推开沉重的木门进入，立刻在中殿中央站定几分钟，让你的眼睛适应昏暗，感受罗曼式空间的浑厚力量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`然后慢慢向前走，直到突然步入早期哥特式圣坛的七彩光瀑之下，回头对比，体会那跨越百年的建筑革命在你眼前上演。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花时间寻找那些藏在角落的宝贝：鲁本斯画派的祭坛画、文艺复兴时期的雕像、以及记录着1699年大火后重建的巴洛克式讲道坛。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从侧门出来，前往珍宝室，在那里你会被中世纪金匠和织工的精湛技艺惊得目瞪口呆，特别是那些闪闪发光的圣物匣。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果开放且你还有脚力，一定要去攀爬那数百级旋转石阶登上塔楼，途中在不同高度的观景台喘息和眺望。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从塔楼下来后，回到教堂内，找一张长椅静静地坐一会儿，看着光影移动，听一次整点的钟声轰鸣着穿透古老的石材。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`教堂南侧广场仰拍五塔全景`}</h4>
                  <p className="text-sm text-gray-700">{`下午三到五点，阳光从西面打亮塔楼正面，退后到广场边缘用广角镜头将五座塔楼和部分建筑立面一同收入镜中，构图时让塔楼占据画面上三分之二。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`中殿与圣坛交接处的拱门下`}</h4>
                  <p className="text-sm text-gray-700">{`站在罗曼式中殿最后，将哥特式圣坛作为画面中心，利用拱门形成天然画框，捕捉两种风格同框的戏剧性对比，侧面的彩色玻璃光斑是绝佳点缀。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`珍宝室内的“圣母”圣物匣特写`}</h4>
                  <p className="text-sm text-gray-700">{`将相机镜头紧贴展柜玻璃（注意避免反光），使用大光圈对准金光熠熠、镶嵌宝石的圣物匣细节，中世纪工匠的錾刻花纹在柔和的室内灯光下会呈现出丝绸般的质感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`塔楼中层观景台俯瞰红色屋顶老城`}</h4>
                  <p className="text-sm text-gray-700">{`登上塔楼中途的观景平台，将相机镜头从石质箭垛的方形孔洞中伸出，以孔洞为前景框架，拍摄脚下如波浪般连绵的图尔奈传统红砖屋顶和远处蜿蜒的斯海尔德河。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`教堂内部光线复杂，调高ISO并使用RAW格式拍摄能保留更多暗部细节。飞无人机拍摄全景需要提前向当地市政部门申请特别许可，在历史中心区通常严格受限。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`老城中心历史宅邸`}</h4>
                  <p className="text-sm text-blue-800">{`入住一栋由18世纪贵族宅邸改造的精品酒店，房间有裸露的原始石墙和木梁，推开窗户就能直接与教堂的塔楼对视，夜晚钟声是天然的催眠曲。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`斯海尔德河畔设计师酒店`}</h4>
                  <p className="text-sm text-green-800">{`选择河对岸一家现代设计酒店，拥有面对教堂的绝佳全景露台，在日落时分点一杯本地啤酒，看夕阳为五座塔楼依次点上金灯，是摄影发烧友的梦想。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`宁静家庭旅馆`}</h4>
                  <p className="text-sm text-yellow-800">{`藏在教堂背后小巷里由一家人经营的温馨B&B，女主人会为你准备丰盛的瓦隆式早餐，并从后院摘来新鲜香草，出门拐个弯就是教堂侧门。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`城郊田园风情民宿`}</h4>
                  <p className="text-sm text-purple-800">{`如果想体验更宁静的比利时乡村，可以租一辆自行车，住在几公里外斯海尔德河湾处的农场民宿，清晨在薄雾和牛铃声中醒来，远眺田野尽头教堂的朦胧剪影。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`图尔奈是非常安全的城市，但老城中心石板路拖行李箱可能不便，选择住宿时留意是否有电梯或位于一楼。夏季旅游旺季和周末务必提前预订，尤其是能看到教堂景观的房间非常抢手。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开图尔奈很久之后，那五座塔楼的形象还会不时在脑海里浮现。它给我的感觉，不像科隆大教堂那样是纯粹技术胜利的宣言，也不像一些乡村小教堂那样只是提供片刻安宁。它更像一个睿智而饱经风霜的老者，身上带着不同时代的伤疤与勋章，却依然平静地站在那里，日复一日地注视着脚下城市的生息。它把建筑的“矛盾”变成了最动人的和谐——厚重与轻盈，昏暗与光明，罗马的遗产与哥特的梦想，全部被包容在同一个空间里。这何尝不是一种伟大的人生隐喻？`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求新鲜刺激、一切速成的时代，图尔奈大教堂是一种“逆潮流”的存在。它要求你慢下来，花时间去绕行、去仰望、去攀爬、去静静地坐在那里等待光影移动。它不给你即时的、喧哗的快乐，而是提供一种深沉的、关于时间与坚韧的震撼。当你触摸那些石头，你触摸的是整整一千年的雨雪、战火、信仰和人类的匠心。它提醒我们，有些美需要穿越漫长的岁月才能淬炼而成，有些价值值得我们搭起巨大的脚手架，耗尽一代人的心血去守护。对于每一位渴望在旅行中触摸历史真实脉搏，而不仅仅是打卡拍照的深度游者来说，图尔奈不是目的地，它是一个值得专程前往的、关于永恒的生命课堂。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
