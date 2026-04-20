import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '圣约翰副主教座堂 St. John‘s Co-Cathedral｜马耳他骑士团的心脏，黄金雕花的巴洛克震撼 - 最佳欧洲景点',
  description: '第一次见到圣约翰副主教座堂时，你可能会有点错愕。在瓦莱塔蜂蜜色石头建筑的街道中，它的外观太不起眼了，甚至有点严肃，像一座坚固的军事堡垒，方正、厚重，除了顶上的钟楼，几乎没有任何浮夸的装饰。你会怀疑，这真的是传说中那个“黄金教堂”吗？但当你推开那扇沉重的木门，瞬间，就像爱丽丝掉进了兔子洞，所有的光线、',
}

export default function StJohnsCoCathedralVallettaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '圣约翰副主教座堂', href: '/attractions/st-johns-co-cathedral-valletta' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`圣约翰副主教座堂・St. John‘s Co-Cathedral・马耳他・瓦莱塔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一次见到圣约翰副主教座堂时，你可能会有点错愕。在瓦莱塔蜂蜜色石头建筑的街道中，它的外观太不起眼了，甚至有点严肃，像一座坚固的军事堡垒，方正、厚重，除了顶上的钟楼，几乎没有任何浮夸的装饰。你会怀疑，这真的是传说中那个“黄金教堂”吗？但当你推开那扇沉重的木门，瞬间，就像爱丽丝掉进了兔子洞，所有的光线、色彩和声响都被重置了。外界的喧嚣被彻底隔绝，一股混合着古老石材的清凉气息、淡淡蜡烛蜡油味和一丝若有若无的熏香味道扑面而来。然后，你的眼睛需要好几秒钟来适应和消化眼前的景象——那是一种近乎失语的震撼。
你的脚下，是光滑如镜、由数百块彩色大理石精心镶嵌而成的骑士墓石板，每一块都是一个独特的纹章图案，踩在上面仿佛踏过一部立体的骑士团编年史。抬起头，整个拱顶是一个流动的、金色的天堂。炫目的金箔雕花缠绕着每一根梁柱，包裹着每一个拱肋，其间绘满了描绘圣约翰生平的宏大壁画。阳光从侧面高窗小心翼翼地探入，不是直射，而是被过滤、折射，变成无数道温柔的光束，打在那些黄金雕刻上，让整个空间弥漫着一种温暖、神圣、却又无比奢华的金色光芒。耳边只有游客极力压低的惊叹声、脚步声在空旷中产生的回响，以及远处小礼拜堂里隐约传来的祈祷低语。这里不像一个教堂，更像一个被时光精心封存起来的、属于骑士的黄金梦境。
这座教堂的心脏，是骑士团本身。八个礼拜堂分别献给骑士团下属的八个“语系”（或称为“骑士团”），比如普罗旺斯、奥弗涅、阿拉贡等等。每个小堂都是所属语系骑士们的安息之所和精神领地，他们在装饰上暗中较劲，比拼着谁的大理石更稀有，谁的雕刻更繁复，谁的祭坛画更名贵。走在其中，你能感受到那种微妙的竞争与集体荣誉感。直到今天，这里依然是瓦莱塔人生活的一部分。周末的清晨，当弥撒的钟声响起，本地居民会穿着得体地走进来，在卡拉瓦乔的画作下划着十字，在某个祖先骑士的墓板前默默驻足。游客的嘈杂与信徒的虔诚在此交织，让它不仅仅是一个博物馆，更是一个鲜活的、呼吸着的信仰中心。
最打动人心的，或许是那种极致的“反差感”。外表的谦逊与内在的辉煌，军事团体的纪律与艺术表达的狂放，死亡的肃穆（遍地墓板）与生命的绚烂（满目黄金），在这里达到了不可思议的平衡。尤其是当你站在奥弗贝格小堂里，凝视着卡拉瓦乔那幅巨大的《被斩首的圣施洗约翰》时——画中鲜血的暗红、皮肤的苍白、阴影的浓重，与周围金碧辉煌的环境形成尖锐的对比。那一刻你会明白，这座教堂最核心的魅力，不是炫耀财富，而是骑士们用最极致的物质形式，来表达他们最崇高的精神追求：荣耀、牺牲与永恒。它是一首用石头、黄金和颜料写成的史诗，等待着每一个走进来的人静静阅读。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一次见到圣约翰副主教座堂时，你可能会有点错愕。在瓦莱塔蜂蜜色石头建筑的街道中，它的外观太不起眼了，甚至有点严肃，像一座坚固的军事堡垒，方正、厚重，除了顶上的钟楼，几乎没有任何浮夸的装饰。你会怀疑，这真的是传说中那个“黄金教堂”吗？但当你推开那扇沉重的木门，瞬间，就像爱丽丝掉进了兔子洞，所有的光线、色彩和声响都被重置了。外界的喧嚣被彻底隔绝，一股混合着古老石材的清凉气息、淡淡蜡烛蜡油味和一丝若有若无的熏香味道扑面而来。然后，你的眼睛需要好几秒钟来适应和消化眼前的景象——那是一种近乎失语的震撼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你的脚下，是光滑如镜、由数百块彩色大理石精心镶嵌而成的骑士墓石板，每一块都是一个独特的纹章图案，踩在上面仿佛踏过一部立体的骑士团编年史。抬起头，整个拱顶是一个流动的、金色的天堂。炫目的金箔雕花缠绕着每一根梁柱，包裹着每一个拱肋，其间绘满了描绘圣约翰生平的宏大壁画。阳光从侧面高窗小心翼翼地探入，不是直射，而是被过滤、折射，变成无数道温柔的光束，打在那些黄金雕刻上，让整个空间弥漫着一种温暖、神圣、却又无比奢华的金色光芒。耳边只有游客极力压低的惊叹声、脚步声在空旷中产生的回响，以及远处小礼拜堂里隐约传来的祈祷低语。这里不像一个教堂，更像一个被时光精心封存起来的、属于骑士的黄金梦境。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座教堂的心脏，是骑士团本身。八个礼拜堂分别献给骑士团下属的八个“语系”（或称为“骑士团”），比如普罗旺斯、奥弗涅、阿拉贡等等。每个小堂都是所属语系骑士们的安息之所和精神领地，他们在装饰上暗中较劲，比拼着谁的大理石更稀有，谁的雕刻更繁复，谁的祭坛画更名贵。走在其中，你能感受到那种微妙的竞争与集体荣誉感。直到今天，这里依然是瓦莱塔人生活的一部分。周末的清晨，当弥撒的钟声响起，本地居民会穿着得体地走进来，在卡拉瓦乔的画作下划着十字，在某个祖先骑士的墓板前默默驻足。游客的嘈杂与信徒的虔诚在此交织，让它不仅仅是一个博物馆，更是一个鲜活的、呼吸着的信仰中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动人心的，或许是那种极致的“反差感”。外表的谦逊与内在的辉煌，军事团体的纪律与艺术表达的狂放，死亡的肃穆（遍地墓板）与生命的绚烂（满目黄金），在这里达到了不可思议的平衡。尤其是当你站在奥弗贝格小堂里，凝视着卡拉瓦乔那幅巨大的《被斩首的圣施洗约翰》时——画中鲜血的暗红、皮肤的苍白、阴影的浓重，与周围金碧辉煌的环境形成尖锐的对比。那一刻你会明白，这座教堂最核心的魅力，不是炫耀财富，而是骑士们用最极致的物质形式，来表达他们最崇高的精神追求：荣耀、牺牲与永恒。它是一首用石头、黄金和颜料写成的史诗，等待着每一个走进来的人静静阅读。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`圣约翰副主教座堂`} />
                <InfoRow label="英文名称" value={`St. John‘s Co-Cathedral`} />
                <InfoRow label="正式名称" value={`St. John’s Co-Cathedral`} />
                <InfoRow label="国家" value={`马耳他`} />
                <InfoRow label="城市" value={`瓦莱塔`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`马耳他骑士团在其鼎盛时期建造的信仰与权力中心，象征着骑士团在地中海的核心统治地位。`} />
                <InfoRow label="建筑特色" value={`外观如堡垒般朴素严谨，内部却极尽奢华，布满黄金雕花、华丽拱顶壁画与色彩斑斓的大理石镶嵌。`} />
                <InfoRow label="建筑风格" value={`以巴洛克风格为主导，内部装饰达到了欧洲巴洛克艺术的巅峰，堪称“黄金巴洛克”的典范。`} />
                <InfoRow label="文化价值" value={`一座融合了骑士团辉煌历史、顶级艺术珍品（包括卡拉瓦乔真迹）与深刻宗教意义的独特文化遗产。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`周一至周五上午9点至下午4点45分（最后入场时间下午4点15分）；周六上午9点30分至下午4点45分（最后入场时间下午4点15分）；周日及公共节假日仅下午1点至4点开放（最后入场时间下午3点30分），且上午举行弥撒不对外开放参观。注意：开放时间可能因宗教活动临时调整，尤其在圣诞节、复活节期间，出行前务必在其官网二次确认。每年1月1日、12月24日、12月25日、12月31日全天关闭。`} />
              <InfoRow label="门票价格" value={`成人票15欧元；60岁以上老年人、12-17岁青少年及全日制学生（凭有效证件）12欧元；11岁及以下儿童免费入场。门票包含语音导览器（有多种语言可选，含中文）或官方导览手册。请注意，门票为纸质票，需在入口处旁边的售票厅购买，不支持在线预订，旺季排队时间可能较长。`} />
              <InfoRow label="地址" value={`St. John‘s Co-Cathedral, St. John’s Street, Valletta, VLT 1010, Malta`} />
              <InfoRow label="交通方式" value={`从马耳他国际机场（MLA）出发，最经济的方式是乘坐公共巴士。出机场后找到巴士站，搭乘X4路巴士，方向为瓦莱塔，车程约30-40分钟，终点站即为瓦莱塔巴士总站。巴士班次频繁，约每15-20分钟一班，车票可在上车时用现金向司机购买（夏季2欧元，冬季1.5欧元），或提前购买预付费的Tallinja卡。从巴士总站步行至教堂约需10-15分钟，沿着共和国街走，在圣约翰街右转即到。若乘坐出租车，机场有固定票价至瓦莱塔，约20欧元，车程20分钟左右。自驾不推荐，瓦莱塔老城停车位极其紧张且昂贵。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事要从1565年那个炎热的夏天讲起。当时统治马耳他的圣约翰骑士团（也就是马耳他骑士团），刚刚经历了一场史诗般的“马耳他大围攻”，以少胜多，艰难击退了奥斯曼帝国苏莱曼大帝的大军。这场胜利让骑士团在欧洲声名鹊起，也让他们决心在马耳他建立一个永久、坚固的家园。于是，新任大团长让·德·拉·卡西埃决定，在精心规划的瓦莱塔新城中心，建造一座配得上骑士团荣耀的教堂。1573年，教堂奠基，设计由骑士团的首席军事建筑师吉罗拉莫·卡萨尔负责。他的设计思想很明确：外表必须坚固、朴素，符合骑士团作为军事修会的身份，像一座精神的堡垒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的内部其实也相当简朴，符合修道院的禁欲精神。但到了17世纪，情况彻底改变了。随着骑士团在地中海的地位日益稳固，财富不断积累，尤其是来自欧洲各国贵族成员带来的捐赠，他们决定将这座教堂变成展示其力量与虔诚的终极舞台。这个“镀金时代”的关键人物是骑士团大团长拉法尔·科托尼尔，以及后来的马蒂亚·普雷蒂——一位被从罗马邀请来的马耳他画家。普雷蒂的任务是为整个教堂拱顶创作壁画。你能想象吗？这位画家和他的学徒们，在脚手架上工作了整整五年，用湿壁画技法，将圣约翰的一生故事栩栩如生地铺满了近400平方米的拱顶。更惊人的是，所有壁画周围那些令人眼花缭乱的金色石膏雕花，也是他设计的。据说，为了达到最璀璨的效果，使用了大量的真金金箔。从此，教堂内部变成了我们现在看到的“黄金穹顶”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "与此同时，教堂的地面也开始了它的蜕变。来自骑士团八个语系的骑士们，竞相购买华丽的彩色大理石墓板，铺设在自己所属小堂的地面上。这些墓板不仅仅是装饰，更是墓碑，下面长眠着数百位骑士。每一块大理石都来自不同的地方——意大利的卡拉拉、比利时的黑色大理石、还有当地罕见的品种——被切割、打磨、镶嵌成复杂的纹章图案，记录着逝者的姓名、头衔和功绩。漫步其上，就像漫步在一个巨大的、庄严的棋盘上，每一步都踩在历史上。而教堂的艺术收藏巅峰，无疑是1608年卡拉瓦乔的抵达。这位当时因杀人而逃亡的天才画家，在短暂的马耳他停留期间，为骑士团创作了几幅杰作，其中最伟大的就是《被斩首的圣施洗约翰》。这幅画以其强烈的戏剧性和惊人的写实主义，成为了骑士团最珍贵的宝藏，也永远改变了这个教堂的艺术分量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "历史的浪潮并未停止冲刷这里。1798年，拿破仑率领法军占领马耳他，骑士团被驱逐。教堂经历了劫掠，许多银器和其他贵重物品被洗劫一空，但奇迹般地，建筑主体和主要艺术品得以保存。整个19世纪和20世纪早期，它作为英国殖民统治下的重要教堂存在。二战期间，马耳他遭受了猛烈的轰炸，瓦莱塔受损严重，但圣约翰教堂再次幸免于难，仿佛有神明庇佑。战后，它被精心修复，并在1970年代被授予“副主教座堂”的地位，与旧都姆迪纳的主教堂共享主教座堂的荣誉。1990年代至今，持续不断的科学修复工作让那些被岁月蒙尘的金色和壁画重现光彩。2018年，瓦莱塔整座古城被联合国教科文组织列为世界遗产，这座教堂无疑是皇冠上最璀璨的宝石。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天，当你走进这里，你看到的不仅仅是静止的历史。它仍然是一个活跃的宗教场所，定期举行弥撒和音乐会。它也是马耳他国家身份的象征，是每一个马耳他学童必须参观的历史课堂。从军事修会的虔诚起点，到巴洛克艺术的奢华巅峰，再到民族的文化心脏，圣约翰副主教座堂层层叠叠的历史，就封存在那无处不在的黄金、大理石和颜料之中，向每一个来访者无声地诉说着关于权力、信仰、艺术与时间的故事。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正领略这座教堂的魔力，请务必预留至少3到4个小时，并尽可能在上午9点开门时第一时间进入。早上的光线清透柔和，人潮尚未涌入，你能享受到近乎独享的宁静时刻。整体的游览节奏应该是“慢”。建议的路线是：先花点时间在教堂外部走走，感受其朴素的立面与军事建筑的威严；然后进入中殿，让自己彻底被最初的视觉震撼征服，不要急着走动，就站在原地仰头看，慢慢转一圈；接着，按照语音导览的提示，系统地参观两侧的八个语系小堂，每一个都值得细细品味其独特的装饰和墓板；之后，前往奥弗贝格小堂瞻仰卡拉瓦乔的杰作，在这里停留的时间不妨长一些；最后，参观完主祭坛后，别忘了教堂后部还连接着一个精美的回廊和一个小型的博物馆（珍藏着丰富的法衣、银器和手稿）。这样的安排让你由外而内、由整体到细节、由震撼到沉思，完成一次深度的精神与艺术之旅。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`绝对要避开上午11点至下午3点之间，这是大型旅行团集中涌入的高峰期，嘈杂的人声会彻底破坏教堂应有的神圣氛围。穿着必须得体，肩膀和膝盖以上必须遮盖，入口处会严格检查，围巾或披肩可以临时借用但最好自备。警惕教堂门口可能出现的非官方“导游”或声称能提供“快速通道”的人，门票只在官方售票厅出售。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`轻轻推开那扇厚重的木门让自己瞬间被中殿铺天盖地的黄金雕刻与彩色大理石震得说不出话`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到中殿尽头抬头凝视拱顶上马蒂亚·普雷蒂描绘的圣约翰生平壁画感受巴洛克艺术的动态与激情`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`放慢脚步仔细辨认脚下每一块彩色大理石墓板上雕刻的不同骑士纹章想象他们生前的故事`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`依次探访两侧的八个骑士语系小堂比较阿拉贡小堂的深红色大理石与普罗旺斯小堂的华丽祭坛`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在光线相对幽暗的奥弗贝格小堂里静静站在卡拉瓦乔那幅《被斩首的圣施洗约翰》前体会画中那份沉重的戏剧性`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到主祭坛后方欣赏那组精美的管风琴以及上方更为繁复的镀金装饰`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过一扇小门走进宁静的四方回廊这里绿意盎然是消化刚才所有视觉冲击的完美休憩点`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后进入附属的博物馆小心观看那些几个世纪前刺绣精美的祭袍和璀璨的圣器`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`中殿尽头祭坛前回望`}</h4>
                  <p className="text-sm text-gray-700">{`下午三点后阳光从西窗斜射而入为整个中殿的黄金雕刻镀上温暖的金色光芒构图时将拱顶的弧形与地面墓板的线条一同纳入`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`奥弗贝格小堂入口处拍摄卡拉瓦乔画作`}</h4>
                  <p className="text-sm text-gray-700">{`利用门框形成自然的画框聚焦于画作本身避开室内反射光线最好在无人遮挡的短暂时刻快速拍摄`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`仰拍拱顶壁画细节`}</h4>
                  <p className="text-sm text-gray-700">{`选择中段某个装饰极其繁复的拱肋下方使用广角镜头将金色的石膏雕花与壁画局部一同拍下展现令人眩晕的细节`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从回廊的拱门内拍摄教堂的侧面外墙`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏时分阳光以低角度照射在蜂蜜色的石墙上能拍出建筑朴素而坚实的质感与内部形成鲜明对比`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`贴近地面拍摄彩色大理石墓板特写`}</h4>
                  <p className="text-sm text-gray-700">{`选择一块纹样特别清晰颜色对比强烈的墓板低角度拍摄可以捕捉到大理石的光泽和精致的雕刻纹理`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`教堂内部严禁使用闪光灯和三脚架，这是为了保护珍贵的壁画和艺术品，请务必遵守。拍摄时请保持绝对的安静和快速，避免打扰正在祈祷的信徒。如果你的相机有较好的高感光度性能，会非常有帮助，因为内部光线总体偏暗。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在瓦莱塔城门附近由老房子改造的精致小酒店，虽然房间不大但充满个性，早上能听到海港传来的渡轮汽笛声，步行到教堂只要五分钟`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`入住一栋经过精心修复的16世纪骑士宫殿内的精品酒店，睡在古老的石拱顶下，想象自己是一名休假归来的骑士，感受真正的历史沉浸`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`选择坐落在瓦莱塔古城墙顶端的海景豪华酒店，在房间的私人阳台上就能俯瞰整个雄伟的大港景色，夜晚看着古城灯火步行去教堂周边散步无比惬意`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`历史沉浸`}</h4>
                  <p className="text-sm text-purple-800">{`租住老城中心一栋传统马耳他“宫殿”建筑里的自助式公寓，拥有标志性的彩色木头阳台，像当地人一样去街角面包店买早餐，彻底融入瓦莱塔的日常节奏`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "瓦莱塔的住宿非常紧俏，尤其是带有特色阳台和历史感的酒店，建议提前至少三个月预订。老城里很多建筑没有电梯，且街道起伏多台阶，携带大件行李会有些吃力，预订时最好确认一下。住在瓦莱塔城内虽然价格稍高，但能体验到夜晚和清晨游客散去后古城真正宁静迷人的模样，绝对物超所值。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走出圣约翰副主教座堂，重新回到瓦莱塔明媚得有些刺眼的阳光下，我会有好一阵恍惚。眼睛似乎还适应不了外面世界的“平淡”，脑海里依旧翻腾着那片金色的海洋。那种感觉，就像从一个漫长而华丽的梦境中突然醒来，指尖仿佛还残留着触摸冰凉大理石时的触感，鼻腔里还萦绕着那股独特的古老气息。这座教堂教会了我一件事：真正的伟大，往往始于最深刻的低调。骑士们将所有的荣耀、信仰和对永恒的渴望，都藏在了这扇朴素的大门之后，等待着愿意走进来的人去发现。它不是一个轻浮的炫耀，而是一份沉重的、用最极致物质形式承载的精神遗嘱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求快速打卡、光影浮掠的快节奏旅行时代，圣约翰副主教座堂是一个坚定的“逆行者”。它要求你慢下来，要求你付出时间，要求你用心去阅读每一块墓板上的纹章，去分辨壁画里每一个故事的细节。它不是一个能被相机镜头轻易概括的地方，它的震撼存在于整个空间的氛围，存在于光影的流动，存在于历史层层叠加的重量感。每一位热爱深度游的旅人都应该来这里，不仅仅是为了看一幅卡拉瓦乔，或者拍一张黄金穹顶的照片。而是为了体验那种极致的反差所带来的心灵冲击，为了理解人类如何可以用双手创造出同时象征权力与谦卑、死亡与辉煌、纪律与狂喜的复杂杰作。它是一枚时光胶囊，封存了一段骑士传奇，更封存了一种关于美与信仰的、永不褪色的追求。来到这里，你会记得，有些地方，真的可以照亮内心。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/cittadella-citadel-gozo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维多利亚城堡（戈佐岛城堡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cittadella</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/dingli-cliffs" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    丁
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">丁利悬崖</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dingli Cliffs</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/zelen--hora-pilgrimage-church" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    绿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">绿山圣约翰朝圣教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">The Pilgrimage Church of St. John of Nepomuk at Zelená hora</p>
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
