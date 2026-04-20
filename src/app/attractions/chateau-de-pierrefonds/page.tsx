import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '皮埃尔丰城堡 Château de Pierrefonds｜维奥莱-勒-杜克杰作，从中世纪废墟到奇幻电影殿堂 - 最佳欧洲景点',
  description: '你还记得小时候故事书里画的城堡吗？有尖尖的塔楼，有环绕的河水，有飘扬的旗帜，好像下一秒就有骑士骑着马从吊桥上冲出来。当我开车穿过贡比涅森林，一个转弯，皮埃尔丰城堡就那么毫无预兆地出现在山坡上时，我差点惊呼出来——它简直是把那个童年的幻想，一丝不差地从纸页上搬到了现实里。它不是伫立，而是“盘踞”在一座...',
}

export default function ChateauDePierrefondsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '皮埃尔丰城堡', href: '/attractions/chateau-de-pierrefonds' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`皮埃尔丰城堡・Château de Pierrefonds・法国・皮埃尔丰`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你还记得小时候故事书里画的城堡吗？有尖尖的塔楼，有环绕的河水，有飘扬的旗帜，好像下一秒就有骑士骑着马从吊桥上冲出来。当我开车穿过贡比涅森林，一个转弯，皮埃尔丰城堡就那么毫无预兆地出现在山坡上时，我差点惊呼出来——它简直是把那个童年的幻想，一丝不差地从纸页上搬到了现实里。它不是伫立，而是“盘踞”在一座石灰岩山丘上，八座戴着锥形帽子的塔楼像巨人的手指紧紧扣住大地，米黄色的石墙在午后的阳光下泛着蜂蜜般温润的光泽，倒映在平静如镜的护城河里。风穿过森林带来松针和泥土的清新气味，而城堡沉默着，那种庞大而完整的姿态，带着一种近乎天真的戏剧感，瞬间攫住了你的呼吸。
把车停好，步行穿过小村庄。路边的民居墙上爬着蔷薇，面包店飘出黄油的香气，几个老人坐在广场长椅上晒太阳，一切都慵懒寻常。而他们的后院，就是那座史诗级的城堡。这种奇异的反差感很有意思——对游客而言是震撼的奇观，对他们而言，只是每日推开窗就能看见的、熟悉到几乎成为背景的一部分的邻居。走近城堡，脚下的木板吊桥发出空洞的声响，桥下深绿的护城河水几乎静止不动。巨大的闸门和铁制吊闸的遗迹提醒着你这里曾经的军事身份，但门上精致的雕刻和盾形纹章，又透着一股不属于残酷战场的、近乎炫耀的优雅。
一旦穿过门洞，踏入内院（chemise），景象豁然开朗。这个被高大城墙围合的空地，曾是集结军队和举办比武的地方，如今空旷宁静。阳光斜斜地照进来，把塔楼的影子拉得老长。抬起头，你会看到环绕二层的一圈精美绝伦的长廊（galerie），那些纤细的石柱和拱券，轻盈得仿佛与下方厚重的防御工事来自两个世界。空气中有一股独特的、属于古老建筑内部的气味：潮湿的石头、陈年的木头，或许还有一点点铁器氧化后的淡淡金属味。偶尔有鸽子从塔楼箭孔里扑棱棱飞起，翅膀的声音在石壁间回荡，更衬得周遭一片寂静。这里最打动人心的，或许正是这种复杂的混合体：它既是坚不可摧的堡垒，又是一件精心雕琢的艺术品；它诞生于权力的算计，却因后世一个天才的浪漫狂想，而获得了第二次，甚至更为璀璨的生命。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你还记得小时候故事书里画的城堡吗？有尖尖的塔楼，有环绕的河水，有飘扬的旗帜，好像下一秒就有骑士骑着马从吊桥上冲出来。当我开车穿过贡比涅森林，一个转弯，皮埃尔丰城堡就那么毫无预兆地出现在山坡上时，我差点惊呼出来——它简直是把那个童年的幻想，一丝不差地从纸页上搬到了现实里。它不是伫立，而是“盘踞”在一座石灰岩山丘上，八座戴着锥形帽子的塔楼像巨人的手指紧紧扣住大地，米黄色的石墙在午后的阳光下泛着蜂蜜般温润的光泽，倒映在平静如镜的护城河里。风穿过森林带来松针和泥土的清新气味，而城堡沉默着，那种庞大而完整的姿态，带着一种近乎天真的戏剧感，瞬间攫住了你的呼吸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`把车停好，步行穿过小村庄。路边的民居墙上爬着蔷薇，面包店飘出黄油的香气，几个老人坐在广场长椅上晒太阳，一切都慵懒寻常。而他们的后院，就是那座史诗级的城堡。这种奇异的反差感很有意思——对游客而言是震撼的奇观，对他们而言，只是每日推开窗就能看见的、熟悉到几乎成为背景的一部分的邻居。走近城堡，脚下的木板吊桥发出空洞的声响，桥下深绿的护城河水几乎静止不动。巨大的闸门和铁制吊闸的遗迹提醒着你这里曾经的军事身份，但门上精致的雕刻和盾形纹章，又透着一股不属于残酷战场的、近乎炫耀的优雅。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`一旦穿过门洞，踏入内院（chemise），景象豁然开朗。这个被高大城墙围合的空地，曾是集结军队和举办比武的地方，如今空旷宁静。阳光斜斜地照进来，把塔楼的影子拉得老长。抬起头，你会看到环绕二层的一圈精美绝伦的长廊（galerie），那些纤细的石柱和拱券，轻盈得仿佛与下方厚重的防御工事来自两个世界。空气中有一股独特的、属于古老建筑内部的气味：潮湿的石头、陈年的木头，或许还有一点点铁器氧化后的淡淡金属味。偶尔有鸽子从塔楼箭孔里扑棱棱飞起，翅膀的声音在石壁间回荡，更衬得周遭一片寂静。这里最打动人心的，或许正是这种复杂的混合体：它既是坚不可摧的堡垒，又是一件精心雕琢的艺术品；它诞生于权力的算计，却因后世一个天才的浪漫狂想，而获得了第二次，甚至更为璀璨的生命。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`皮埃尔丰城堡`} />
                <InfoRow label="英文名称" value={`Château de Pierrefonds`} />
                <InfoRow label="正式名称" value={`Château de Pierrefonds`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`皮埃尔丰`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座从中世纪皇家堡垒废墟中“重生”，并因19世纪天才建筑师维奥莱-勒-杜克的浪漫主义修复而永载史册的纪念碑，它定义了后世对中世纪城堡的想象。`} />
                <InfoRow label="建筑特色" value={`宛如从童话书中直接走出的完整防御体系，拥有八座巍峨的塔楼、雄浑的城墙、深阔的护城河以及内部令人惊叹的新哥特式装饰与长廊。`} />
                <InfoRow label="建筑风格" value={`原址为中世纪军事堡垒，经19世纪修复后，呈现为一种融合了13-14世纪法国哥特式军事建筑元素与19世纪浪漫主义诠释的“风格式修复”典范。`} />
                <InfoRow label="文化价值" value={`超越了历史遗迹本身，成为法国遗产保护哲学演变的活教材，并因其极具戏剧性的外观，成为众多影视作品（如《梅林传奇》、《游客》）中幻想国度的代名词。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡全年开放，但时间随季节变化。通常夏季（5月至9月）开放时间为9:30-18:00；冬季（10月至次年4月）开放时间缩短至10:00-17:30，最后入场时间为关闭前45分钟。城堡每周二闭馆（除7、8月外），并会在1月1日、5月1日及12月25日关闭。内部小教堂和某些展厅的开放时间可能更为有限，建议出发前在官网确认最新安排。`} />
              <InfoRow label="门票价格" value={`成人标准门票为8欧元。持有欧盟居民证的18-25岁青年可享优惠价5欧元。18岁以下未成年人、残疾人士及其陪同者免费入场。每年11月至次年3月的第一个周日对所有游客免费开放。提供语音导览设备租赁，费用约为3欧元。官网提前购票可避免旺季排队。`} />
              <InfoRow label="地址" value={`Rue Viollet-le-Duc, 60350 Pierrefonds, France`} />
              <InfoRow label="交通方式" value={`皮埃尔丰城堡位于巴黎东北方向。最便捷的方式是自驾，从巴黎出发经A1高速公路，在“Compiègne sud”出口下，沿D335和D973公路行驶约15分钟即可抵达，全程约1.5小时。城堡附近有免费停车场。若搭乘公共交通，可从巴黎北站（Gare du Nord）乘坐TER区间火车前往贡比涅（Compiègne），车程约1小时，班次约每小时一班。抵达贡比涅火车站后，转乘前往皮埃尔丰的本地巴士（通常为Gare Routière站发车的线路），车程约20分钟，但巴士班次较少，尤其是在周末和淡季，务必提前查好时刻表。最灵活的方案是火车抵达贡比涅后，打车前往城堡，约15-20欧元。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`皮埃尔丰的故事，要从一个王室旁支的雄心说起。12世纪，这里就有了领主的小堡垒，但真正让它登上历史舞台的，是法国王室那位著名的“奥尔良公爵”路易。这位查理六世国王的弟弟，在14世纪末动荡的英法百年战争期间，急需一个坚固的据点来巩固自己在瓦卢瓦地区的势力。于是，从1393年开始，他在旧堡垒的基础上，倾注巨资，建造了一座当时最先进的军事要塞。想想看那个年代，战火纷飞，城堡的设计毫无花哨，一切为了生存：厚重的双层城墙、可多角度射击的塔楼、深挖的护城河，还有那个时代罕见的、能抵御火炮轰击的倾斜墙基。皮埃尔丰成了奥尔良派系的关键棋子，在王室斗争和地方冲突中扮演着冷酷的角色。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，城堡的军事生涯并未持续太久。到了17世纪初，法国政局稳定，中央集权加强，这些地方大贵族的堡垒反而成了王权的潜在威胁。1617年，摄政太后玛丽·德·美第奇下令，摧毁那些可能被叛乱者利用的城堡。皮埃尔丰不幸名列其中。军队系统地拆除了它的屋顶，炸塌了部分塔楼和城墙，只留下一个庞大而残缺的躯壳。此后两百年，它被遗忘了，成了当地人眼中一片浪漫的废墟，藤蔓爬上断壁，鸟儿在空荡的厅堂筑巢，如同睡美人，在森林的怀抱中缓缓沉睡、风化。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机出现在19世纪。那是一个浪漫主义席卷欧洲的时代，人们突然为中世纪的废墟之美而疯狂。拿破仑三世，这位有着宏大帝国梦想的皇帝，在附近的贡比涅修建了行宫，时常来此狩猎。1857年，他的皇后欧仁妮在一次散步中“发现”了这片令人心碎的美丽废墟，并向皇帝提议修复它。于是，一个决定皮埃尔丰命运的人物登场了：维奥莱-勒-杜克。这位当时已因修复巴黎圣母院而声名鹊起的建筑大师，接到了一项前所未有的任务——不是简单地加固遗迹，而是“完整地修复”一座城堡，让它成为“一座封建领主住所的教科书式典范”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`勒-杜克是个天才，也是个“危险的”梦想家。他没有拘泥于废墟原有的每一块石头，而是将其视为一个“完成品”的初稿。他运用渊博的中世纪知识，结合大胆的想象力，开始了这项浩大的工程。他重建了所有塔楼和屋顶，设计了那些美轮美奂的内部大厅和长廊。但请注意，他加入了许多原城堡可能根本没有的元素：比如那些充满象征意义的雕塑、那些复杂华丽的壁炉、还有那个被称为“骑士厅”的宏大空间。他的修复，本质上是一场创造。他试图呈现的不是1393年的皮埃尔丰，而是他心目中“一个理想的中世纪城堡应该有的样子”。这项工程持续了近四十年，直到他去世后，由他的女婿继续完成。争议也随之而来：这是修复还是伪造？是保护还是破坏？皮埃尔丰成了遗产保护史上最著名的案例，至今仍在引发讨论。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`颇具讽刺意味又理所当然的是，这座因军事目的诞生、又因政治目的被毁的城堡，在“重生”后，却彻底告别了硝烟。它先是被用作拿破仑三世偶尔来访的别馆，后来则主要作为一座博物馆式的建筑珍品。它的坚固和完整，在两次世界大战中奇迹般地未受严重损伤。而到了20世纪末21世纪初，它的命运再次转折——那戏剧性十足、充满棱角与阴影的外观，恰好完美契合了影视导演对奇幻中世纪的想象。当它成为BBC剧集《梅林传奇》中的卡美洛王国，或是电影《游客》中的背景时，皮埃尔丰完成了一次现代意义上的加冕：它从历史的遗骸，变成了全球流行文化中梦幻的图标。它的石头里，于是同时凝固了中世纪的野心、19世纪的浪漫，和21世纪的幻梦。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`强烈建议你在开园后半小时内抵达（夏季即10点前，冬季10点半前），用一整个上午的时光（约3.5-4小时）来慢慢品味这座城堡。清晨的光线柔和，能将城堡的石墙照得金黄，而且旅游团大军尚未抵达，你能享受近乎独享的宁静。游览节奏宜缓不宜急，先从外部整体感受其磅礴气势，再深入内部探究令人眼花缭乱的细节。路线设计为由外至内，由下至上，最后登高望远，形成一个完整的体验闭环。这样的安排能让你逐步从视觉震撼，过渡到对建筑细节和历史层次的深度理解。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡内部房间众多且结构复杂，虽然指示清晰，但拿一份免费的平面图会很有帮助。内部许多房间地板为原始石砖或木地板，且楼梯陡峭狭窄，务必穿着绝对舒适防滑的鞋子。冬季城堡内部非常阴冷，即使室外有阳光，也建议比平常多穿一件保暖衣物。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从跨越护城河的木制吊桥开始你的探险，仰头感受那巨大门洞带来的压迫感与迎接感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步入宽阔的内院（chemise），顺时针缓步一圈，抬头仔细观察连接各塔楼的那一层精美绝伦的骑士长廊。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`通过东南角的楼梯进入主堡内部，首先被“卫士厅”高达18米的宏伟穹顶和那些仿中世纪风格的壁画与雕塑震慑。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着指示探索“领主起居室”、“小教堂”和“皇后客厅”，留意每个房间壁炉上极其繁复、讲述不同故事的雕刻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到并踏入那个被称为“骑士厅”或“大礼堂”的核心空间，让目光跟随两排巨型石柱延伸至尽头的王座台。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着塔楼内狭窄的石阶盘旋而上，登上城堡的屋顶平台或最高的塔楼，将贡比涅森林的浩瀚绿海尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开主建筑后，别忘沿着护城河外围的小径走一段，从各个角度回望城堡，你会发现每个面的表情都截然不同。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后回到山脚下的小村庄，在广场边的咖啡馆点一杯咖啡，看着城堡的背影，慢慢消化刚才经历的一切。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`护城河东南角倒影点`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前半小时，阳光正面照亮城堡主体时，蹲在河边寻找能将塔楼与完整倒影一同纳入镜头的角度，使用偏振镜消除水面反光效果更佳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`内院仰望骑士长廊`}</h4>
                  <p className="text-sm text-gray-700">{`接近正午时分，阳光直射入内院时，站在庭院中心偏西侧，用广角镜头仰拍，将一圈石柱长廊与后方高耸的塔楼尖顶一同构成极具纵深感的画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“卫士厅”穹顶之下`}</h4>
                  <p className="text-sm text-gray-700">{`利用室内昏暗的光线，将相机置于地面向上拍摄宏伟的肋状拱顶，若能捕捉到一束从高窗射入的光线则为神作，建议使用三脚架长时间曝光。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`西南侧外围森林边缘`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，从城堡西南方向的森林小径回头望，利用树木作为前景框架，拍摄城堡全景，此时光线为侧光，能极好地勾勒出城堡的立体感和石材质感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`城堡内部允许拍照，但严禁使用闪光灯和三脚架（除非获得特殊许可），这是为了保护那些脆弱的19世纪彩绘和装饰。无人机飞行在城堡上空是严格禁止的。尝试拍摄一些细节，如铁艺门锁、怪兽状滴水嘴或壁画局部，它们往往比全景更能诉说故事。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`亲切家庭民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在城堡山脚下由当地人家经营的B&B，房间窗户就对着塔楼，早晨在鸟鸣和面包香中醒来，主人会告诉你那些旅游书上没有的城堡轶事。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`森林静修之所`}</h4>
                  <p className="text-sm text-green-800">{`距离城堡几分钟车程、隐藏在贡比涅森林中的独栋小木屋，完全沉浸在自然里，晚上可以听着松涛看城堡在月光下的剪影，适合追求静谧的旅人。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`贡比涅帝国风格酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`若想兼顾城市便利与城堡访问，可入住贡比涅市中心由拿破仑三世时期建筑改造的精品酒店，体验皇家小镇的优雅，开车前往城堡仅需15分钟。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`特色历史宅邸`}</h4>
                  <p className="text-sm text-purple-800">{`选择皮埃尔丰村里一栋18世纪的石屋改造的度假屋，拥有古老的花园和露台，自己下厨烹饪当地食材，像当地人一样生活几天。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（尤其是7、8月）和周末的住宿非常紧俏，务必提前数月预订。皮埃尔丰 village非常安全宁静，但夜间照明较少，如果住在森林或偏远住所，建议天黑前熟悉周边环境。住在村里虽然餐厅选择有限，但那份推窗见城堡的体验是无价的。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开皮埃尔丰很久以后，我脑子里反复回味的，不是它某个具体的厅堂或某座塔楼，而是一种强烈的感觉：关于“真实”的辩论。我们总执迷于寻找“原汁原味”的历史，仿佛只有未被触碰的废墟才够纯粹。但皮埃尔丰坦然地站在那里，告诉你另一个故事——它是一部由不同时代共同书写的、尚未完结的史书。勒-杜克的修复无疑是一种“创作”，但他创作的基础是对中世纪精神深入骨髓的理解。他补全的，是一个时代的梦想，而不仅仅是砖石。于是，我们今天看到的，既是19世纪对14世纪的深情致敬，也是一件独立的、属于19世纪的伟大艺术作品。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个快节奏的、热衷于复制粘贴的世界里，皮埃尔丰像一颗固执的、拒绝被简单归类的时间胶囊。它提醒我们，文化遗产的生命力不在于永恒不变的凝固，而在于持续不断的对话与诠释。它之所以值得每一个深度旅行者前来，正是因为它迫使你思考：历史是什么？是冰冷的客观事实，还是一代代人不断投射其情感与理想的镜面？走在它的长廊下，你触摸到的每一块石头都可能是新的，但那股子想要建造一个完美堡垒、一个传奇家园的渴望，却是穿越数百年来到你面前的、无比真实的热情。来这里，不是为了寻找历史的终点，而是为了见证想象的力量如何能让废墟开花，如何让一座城堡，在两个时代里，都活得如此灿烂辉煌。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bourscheid-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布尔沙伊德城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bourscheid Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/smederevo-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯梅代雷沃城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Smederevo Fortress</p>
                  </div>
                </div>
              </a>
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
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
