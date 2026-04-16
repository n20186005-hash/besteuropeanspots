import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '林多斯卫城 Lindos Acropolis｜悬崖之巅的三千年文明交响 - 最佳欧洲景点',
  description: '当你第一眼从公路上望见林多斯卫城时，它会让你瞬间屏住呼吸。那不是什么温柔的山丘，而是一块巨大的、光秃秃的灰色石灰岩，像一头沉睡的史前巨兽，从湛蓝的爱琴海和雪白糖霜般的小镇屋顶中猛然崛起，带着一种不容置疑的威严。车子盘旋而下，离小镇越近，那卫城的轮廓就越发清晰，你几乎能感觉到它投下的、跨越了三千年的阴...',
}

export default function LindosAcropolisPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '林多斯卫城', href: '/attractions/lindos-acropolis' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">林多斯卫城・Lindos Acropolis・希腊・罗德岛（林多斯镇）</h1>
          <p className="text-lg text-gray-600 mb-6">
            当你第一眼从公路上望见林多斯卫城时，它会让你瞬间屏住呼吸。那不是什么温柔的山丘，而是一块巨大的、光秃秃的灰色石灰岩，像一头沉睡的史前巨兽，从湛蓝的爱琴海和雪白糖霜般的小镇屋顶中猛然崛起，带着一种不容置疑的威严。车子盘旋而下，离小镇越近，那卫城的轮廓就越发清晰，你几乎能感觉到它投下的、跨越了三千年的阴影。
走进林多斯那迷宫般的巷子，准备攀登。空气里混合着九重葛的甜香、被阳光烤热的石头气味，以及从海那边吹来的、微咸的风。你的耳朵会先于眼睛进入状态：驴铃叮当作响，那是当地人为不想爬陡坡的游客准备的“出租车”；小酒馆里传来盘子清脆的碰撞声和希腊语的谈笑；你的登山鞋踩在被人流和时光打磨得光滑如镜的石阶上，发出坚实的回响。而你的眼睛，则一直被上方那些巨大的、沉默的石头牵引着。
攀爬的过程本身就是一种朝圣。你会路过一些刷得雪白的房子，阳台上晾着色彩鲜艳的床单，老奶奶坐在门洞里安静地做着针线活。生活在这里依然鲜活，与头顶那肃穆的历史遗迹形成奇妙的共生。当你终于穿过那座由圣约翰骑士团修建的巍峨拱门，踏上卫城平台的那一刻，所有的感官喧嚣突然沉寂。风，只剩下浩荡的风声，从四面八方涌来，灌满你的耳朵和衣襟。眼前是无边无际的、闪烁着碎钻般光芒的爱琴海，以及三座海湾那令人心醉的蔚蓝弧线。
这时，你才会真正注意到脚下的遗迹。那不是一座完整的神庙或城堡，而是一首用残缺的柱子、倾颓的城墙和地基的线条写成的石头之诗。阳光尖锐而慷慨，将多利安柱的每一道凹槽都雕刻出深邃的阴影。最动人的，莫过于那座小小的、建于公元4世纪的雅典娜·林迪亚神庙遗址。它站在悬崖的最边缘，几根柱子孤独地指向天空。站在这里，你突然明白了古人选择此地祭祀智慧女神的原因：这不是逃避，而是拥抱。拥抱风，拥抱海，拥抱整个世界。那种开阔与自由，便是最极致的智慧。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">当你第一眼从公路上望见林多斯卫城时，它会让你瞬间屏住呼吸。那不是什么温柔的山丘，而是一块巨大的、光秃秃的灰色石灰岩，像一头沉睡的史前巨兽，从湛蓝的爱琴海和雪白糖霜般的小镇屋顶中猛然崛起，带着一种不容置疑的威严。车子盘旋而下，离小镇越近，那卫城的轮廓就越发清晰，你几乎能感觉到它投下的、跨越了三千年的阴影。</p>
              <p className="text-gray-700 leading-relaxed mb-4">走进林多斯那迷宫般的巷子，准备攀登。空气里混合着九重葛的甜香、被阳光烤热的石头气味，以及从海那边吹来的、微咸的风。你的耳朵会先于眼睛进入状态：驴铃叮当作响，那是当地人为不想爬陡坡的游客准备的“出租车”；小酒馆里传来盘子清脆的碰撞声和希腊语的谈笑；你的登山鞋踩在被人流和时光打磨得光滑如镜的石阶上，发出坚实的回响。而你的眼睛，则一直被上方那些巨大的、沉默的石头牵引着。</p>
              <p className="text-gray-700 leading-relaxed mb-4">攀爬的过程本身就是一种朝圣。你会路过一些刷得雪白的房子，阳台上晾着色彩鲜艳的床单，老奶奶坐在门洞里安静地做着针线活。生活在这里依然鲜活，与头顶那肃穆的历史遗迹形成奇妙的共生。当你终于穿过那座由圣约翰骑士团修建的巍峨拱门，踏上卫城平台的那一刻，所有的感官喧嚣突然沉寂。风，只剩下浩荡的风声，从四面八方涌来，灌满你的耳朵和衣襟。眼前是无边无际的、闪烁着碎钻般光芒的爱琴海，以及三座海湾那令人心醉的蔚蓝弧线。</p>
              <p className="text-gray-700 leading-relaxed mb-4">这时，你才会真正注意到脚下的遗迹。那不是一座完整的神庙或城堡，而是一首用残缺的柱子、倾颓的城墙和地基的线条写成的石头之诗。阳光尖锐而慷慨，将多利安柱的每一道凹槽都雕刻出深邃的阴影。最动人的，莫过于那座小小的、建于公元4世纪的雅典娜·林迪亚神庙遗址。它站在悬崖的最边缘，几根柱子孤独地指向天空。站在这里，你突然明白了古人选择此地祭祀智慧女神的原因：这不是逃避，而是拥抱。拥抱风，拥抱海，拥抱整个世界。那种开阔与自由，便是最极致的智慧。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="林多斯卫城" />
                <InfoRow label="英文名称" value="Lindos Acropolis" />
                <InfoRow label="正式名称" value="Lindos Acropolis" />
                <InfoRow label="国家" value="希腊" />
                <InfoRow label="城市" value="罗德岛（林多斯镇）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="爱琴海东南部最重要的多利安人城邦之一，罗德岛三大古典城邦的心脏，是一座跨越古希腊、罗马、拜占庭、骑士团和奥斯曼时代的露天历史博物馆。" />
                <InfoRow label="建筑特色" value="一座从海拔116米的嶙峋巨岩上拔地而起的天然堡垒，白色房屋构成的现代小镇如贝壳般簇拥在其脚下，形成了海、天、石、屋的绝妙几何构图。" />
                <InfoRow label="建筑风格" value="多层文明堆叠的典范，以宏伟的多利安柱式雅典娜神庙遗址为核心，融合了古希腊神庙、拜占庭教堂、中世纪骑士城堡要塞和奥斯曼时期防御工事的遗迹。" />
                <InfoRow label="文化价值" value="不仅是一座军事要塞，更是古希腊航海智慧、中世纪骑士精神与爱琴海岛屿生活哲学在悬崖峭壁上共同谱写的史诗。" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="夏季（4月1日至10月31日）通常为每天上午8:00至晚上7:40，最后入场时间为晚上7:15；冬季（11月1日至3月31日）通常为每天上午8:30至下午3:00。开放时间可能因天气或特殊活动临时调整，节假日（如复活节）可能完全关闭，出发前务必在希腊文化部官网进行最终确认。" />
              <InfoRow label="门票价格" value="标准票价为12欧元（夏季），冬季可能略有下调。欧盟学生、65岁以上欧盟公民以及18岁以下青少年可凭有效证件免费入场。门票为单次入场有效，不可重复进出。" />
              <InfoRow label="地址" value="Acropolis of Lindos, Lindos 851 07, Greece" />
              <InfoRow label="交通方式" value="从罗德岛迪亚戈拉斯国际机场出发，最便捷的方式是租车或预约出租车，沿东海岸公路向南行驶约55公里，车程约1小时即可抵达林多斯镇外围的停车场。从罗德岛市（港口）出发，可乘坐频繁的KTEL长途巴士，班次在夏季每30-60分钟一班，车程约1.5小时，终点站为林多斯镇中心巴士站。请注意，所有车辆禁止进入林多斯镇中心的迷宫般小巷，从镇中心或停车场到卫城山脚都需要步行，最后一段是陡峭的上坡路，可选择步行（约15-20分钟）或乘坐当地人的驴子（需付费，约5-10欧元）。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">林多斯的故事，始于神话与现实的模糊交界。传说中，它的建立与太阳神赫利俄斯的孙子林多斯有关。但真正将它推上历史舞台的，是约公元前10世纪登陆于此的多利安人。这些来自希腊大陆的勇悍部族，一眼相中了这块三面环海的天然巨石。它易守难攻，拥有两个优良的天然港湾（今称圣保罗湾和林多斯主湾），是建立海上贸易据点和抵御海盗的绝佳地点。很快，林多斯便凭借其卓越的航海技术发展成为强大的城邦，与伊阿利索斯、卡米罗斯并列为罗德岛的三大古典城邦，并共同缔造了后来声名显赫的罗德岛联邦。它的海军曾远征四方，甚至在公元前6世纪于小亚细亚建立了殖民地。</p>
              <p className="text-gray-700 leading-relaxed mb-4">卫城的灵魂，无疑是献给雅典娜·林迪亚的神庙。早在公元前6世纪，这里就已建有古老的神龛。但让它达到荣耀顶点的，是公元前4世纪兴建的那座气势恢宏的多利安柱式神庙。林多斯的雅典娜崇拜极为独特，她不仅是智慧女神，更是水手的保护神。航海者在出发前和归来后，都会在此献上祭品，感谢她的庇佑。神庙里曾供奉着一件非同寻常的祭品——据古希腊历史学家希罗多德记载，埃及法老阿马西斯曾赠予林多斯一件用亚麻制成的胸甲，上面用金银丝线绣满了精美的图案。这件珍宝，正是林多斯航海贸易与外交实力的象征。</p>
              <p className="text-gray-700 leading-relaxed mb-4">然而，历史的潮水有起有落。随着罗德岛新城的崛起，林多斯的政治地位逐渐下降，但它作为宗教圣地的光辉并未完全熄灭。罗马人来了，他们尊重并维护了这里的圣地。时间来到中世纪，一场地震严重损坏了古典建筑，但卫城的战略价值被新的主人——圣约翰骑士团（又称医院骑士团）敏锐地捕捉到了。14世纪末至15世纪初，这些来自欧洲的骑士将这里改建为抵御奥斯曼帝国进攻的关键海岸要塞。我们今天看到的雄伟拱门、厚重城墙和高耸的塔楼，大部分都是那个时期的产物。他们巧妙地将古希腊和罗马的遗迹作为地基，在废墟之上建造起一个坚固的军事堡垒。你能在石墙上看到清晰的骑士团纹章——那著名的“耶路撒冷十字”。</p>
              <p className="text-gray-700 leading-relaxed mb-4">坚固的堡垒也未能永远抵挡历史的洪流。1522年，罗德岛最终被苏莱曼大帝的奥斯曼军队征服，林多斯卫城也随之易主。奥斯曼人继续将其作为驻军点使用，但卫城的心脏——那古典的神庙区域，则逐渐被遗忘，任由风吹日晒，缓慢地回归石头最初的模样。直到19世纪，随着考古学的兴起和欧洲旅行者的到来，这片沉睡在悬崖上的文明层才再次震惊世界。考古学家们小心翼翼地剥离去中世纪和奥斯曼时期的附加建筑，让古典时代的线条重新浮现。今天我们所见的，正是这次“考古剥离”后的结果：骑士城堡的墙体内，包裹着古希腊神庙的骨架；拜占庭小教堂的遗迹，与罗马时期的台阶比邻而居。每一步，你都在不同文明的断层中穿越。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  完美的林多斯卫城之旅，是一场与酷热和人群的巧妙周旋，更是一场从世俗生活到历史苍穹的渐进式体验。强烈建议你在清晨刚开门（8:00）或下午临近关闭前（夏季傍晚6点后）抵达。这两个时段光线最为魔幻（前者清澈锐利，后者金黄温暖），温度相对宜人，旅行团大军尚未抵达或已经撤离。整体游览应预留至少3-4小时，其中攀登和下山（含小镇漫步）约需1-1.5小时，在卫城遗址上沉浸式游览需2小时以上。节奏宜慢不宜快，这是一处需要你用身体去感受高度、风和光线，用心去聆听石头沉默回声的地方。路线设计为由下至上，由外至内，最后让无敌海景作为震撼的终章。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>务必穿一双鞋底防滑、支撑性好的徒步鞋或运动鞋，山顶风极大且地面是光滑的古代岩石和沙砾，高跟鞋或凉鞋是绝对的危险选择。
随身携带至少1升的饮用水和防晒用品（帽子、太阳镜、高倍数防晒霜），整个攀登过程和山顶都几乎没有任何遮荫处，爱琴海的阳光极其猛烈。
警惕山下那些过于热情的“驴的士”经营者，如果选择骑驴上山，务必在出发前明确谈好价格（通常到山门口约5-10欧），并确认是否包含回程。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">先从林多斯镇中心广场那棵巨大的梧桐树下出发，沿着主商业街向卫城方向漫步，感受两旁白色小屋和纪念品店铺交织的鲜活市井气息。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">走到山脚下，别急着上山，向右拐个弯，绕到卫城巨岩的东侧，从这里仰望骑士城堡壁垒与悬崖融合的雄姿，感受其作为天然堡垒的压迫感。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">开始攀登古老的“圣阶”，在灼热的石阶上喘息时，别忘了回头俯瞰，林多斯镇层层叠叠的白色屋顶和蔚蓝海湾构成的明信片视角在每一步都在变化。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">穿过那座刻有骑士团纹章的厚重拱门进入要塞内部，先别直奔中心的古典遗址，而是沿着中世纪城墙向北走一段，从骑士的视角审视他们的防御体系和无垠海面。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">来到遗址区的核心，绕着公元前4世纪的雅典娜·林迪亚神庙遗址慢慢走一圈，用手触摸那些被海风侵蚀了二十多个世纪的柱基，想象当年航海者在此祈祷的景象。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">走到卫城最南端的悬崖边缘，那里有一块平坦的岩石，仿佛是天然的观景台，毫无遮挡地面对圣保罗湾的湛蓝海水和远处海天一色的地平线。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从南端折返，探访遗址西侧保留的拜占庭时期圣约翰教堂遗迹，注意看地面上色彩暗淡但线条依然可辨的马赛克镶嵌画痕迹。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">最后，从西侧的出口下山，选择一条与上山时不同的小径，你会穿过更宁静的居民区，直接下到林多斯主海滩，用清凉的海水洗去一身的历史尘埃与疲惫。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 小镇屋顶仰拍全景</h4>
                  <p className="text-sm text-gray-700">下午四点到六点，从镇子西北方向的某条小巷向上拍摄，让洁白的房顶作为前景，衬托出山顶卫城废墟的沧桑与雄伟，光线温暖且侧逆光能勾勒出建筑的轮廓。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 悬崖边缘人像剪影</h4>
                  <p className="text-sm text-gray-700">日落前半小时，站在雅典娜神庙遗址旁的悬崖边，以浩瀚的爱琴海和圣保罗湾为背景拍摄人物剪影，意境苍茫辽阔，极具史诗感。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 多利安柱廊的光影</h4>
                  <p className="text-sm text-gray-700">正午时分光线从上而下直射，走进神庙遗址的柱廊内部，捕捉阳光在多利安柱凹槽间形成的强烈明暗对比和几何阴影，能拍出极具结构感和历史感的画面。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 骑士拱门框架构图</h4>
                  <p className="text-sm text-gray-700">清晨或傍晚，站在拱门内侧向外拍摄，用厚重的石门框柱远处的碧海蓝天和白色小镇，形成强烈的画框效果和纵深感。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 从圣保罗湾回望</h4>
                  <p className="text-sm text-gray-700">如果你有体力，可以步行到对面的圣保罗湾海滩，在下午用长焦镜头从海平面高度拍摄整个卫城巨岩的全貌，它像一艘永不沉没的巨石战舰航行在蓝海之中。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 卫城遗址内部严禁使用无人机进行拍摄，这是希腊文化遗产保护的严格规定，违者将面临高额罚款。</li>
                <li>• 正午的阳光虽然强烈，但对于拍摄建筑结构和岩石质感却是最佳时机，记得使用小光圈（如f/8-f/16）来获得足够的景深和清晰度。</li>
                <li>• 尊重遗址，切勿为了拍照而攀爬、倚靠或踩踏任何古老的墙体与柱石，这些行为不仅是失礼的，更会对脆弱的历史遗迹造成不可逆的损害。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">隐匿石巷之选</h4>
                  <p className="text-sm text-blue-800">住在林多斯镇中心由传统“船长之家”改造的精品洞穴酒店，纯白的拱形房间配有基克拉迪风格的装饰，从屋顶露台能瞥见卫城的一角，夜晚异常宁静。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">海景阳台之选</h4>
                  <p className="text-sm text-green-800">位于林多斯主海滩上方悬崖上的家庭式公寓，拥有面朝大海的私人阳台，清晨在涛声中醒来，用一杯希腊咖啡开始一天，步行至卫城山脚仅需十分钟。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">沉浸历史之选</h4>
                  <p className="text-sm text-yellow-800">选择镇口一家由中世纪建筑修复的小型奢华酒店，保留了原始的石头墙壁和拱顶，现代舒适设施一应俱全，仿佛住在历史博物馆里，体验骑士时代末期的氛围。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">放松度假之选</h4>
                  <p className="text-sm text-purple-800">如果不介意离小镇稍远（车程5分钟），可以选择位于Vlycha海滩附近的全包式度假村，那里拥有宽阔的泳池和花园，适合家庭，游览完厚重的历史后可以彻底放松。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">夏季（6-9月）林多斯的住宿非常紧俏，且价格昂贵，务必提前至少3-4个月预订，尤其是那些位置绝佳的特色小酒店。</p>
              <p className="text-gray-700 leading-relaxed mb-4">镇内几乎所有住宿都无法直接开车抵达，需要将车停在外围停车场后，由房东带领或自己拖着行李走一段石板路，这是体验的一部分，请轻装简行。</p>
              <p className="text-gray-700 leading-relaxed mb-4">林多斯的夜晚治安良好，但小巷错综复杂且照明有限，建议保存好住宿的位置地图，以免尽兴游览后迷路。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开林多斯卫城很久以后，闭上眼睛，我依然能感受到那里呼啸的风，和脚下岩石被阳光炙烤后传来的、亘古不变的温热。它留给我的，不是一个具体的历史知识点，而是一种关于“层叠”的深刻意象。文明在这里从未被彻底推翻重建，而是像地壳运动一样，一层覆盖一层，相互挤压、融合，最终长成了悬崖上这株奇异而坚韧的石头之树。古希腊人对理性与美的追求，中世纪骑士对信仰与力量的执着，以及奥斯曼帝国实用的军事考量，都在同一片岩石上留下了无法磨灭的指纹。</p>
              <p className="text-gray-700 leading-relaxed mb-4">在这个追求崭新、快速和效率的时代，林多斯卫城像一块固执的“时间的琥珀”。它提醒我们，真正的伟大往往不是瞬间的爆发，而是在漫长的时光中，与风、与海、与入侵者、与遗忘本身进行的一场沉默而坚韧的对话。它不完美，它残破，但它因此拥有了无比丰富的表情和无法被复制的灵魂。每一位热爱深度游的旅人都该来这里，不仅仅是为了看一片震撼的风景或一堆古老的石头，更是为了获得一种视角——站在人类文明累积的断层上，俯瞰时间的深渊与生命的辽阔。那一刻，你会明白，历史从未远去，它只是化作了吹过耳畔的海风，和你脚下这片坚实而温暖的土地。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
