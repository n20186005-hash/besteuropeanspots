import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '圣洛伦索-德埃尔埃斯科里亚尔 San Lorenzo de El Escorial｜西班牙帝国的心脏，一座冷峻花岗岩下的宏大叙事 - 最佳欧洲景点',
  description: '第一眼看到埃尔埃斯科里亚尔时，你会倒吸一口凉气，不是因为惊艳，而是因为一种压倒性的、近乎沉默的重量。它不像轻盈的宫殿，更像一座从瓜达拉马山灰色岩石中自然生长出来的巨大堡垒，方方正正，棱角分明，在西班牙炽烈的阳光下投下深不见底的影子。车子沿着山路盘旋而上，这个灰扑扑的庞然大物就那样冷峻地悬在天际线上，...',
}

export default function SanLorenzoDeElEscorialMonasteryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '圣洛伦索-德埃尔埃斯科里亚尔', href: '/attractions/san-lorenzo-de-el-escorial-monastery' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`圣洛伦索-德埃尔埃斯科里亚尔・San Lorenzo de El Escorial・西班牙・埃尔埃斯科里亚尔（马德里自治区）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到埃尔埃斯科里亚尔时，你会倒吸一口凉气，不是因为惊艳，而是因为一种压倒性的、近乎沉默的重量。它不像轻盈的宫殿，更像一座从瓜达拉马山灰色岩石中自然生长出来的巨大堡垒，方方正正，棱角分明，在西班牙炽烈的阳光下投下深不见底的影子。车子沿着山路盘旋而上，这个灰扑扑的庞然大物就那样冷峻地悬在天际线上，没有多余的装饰，只有无数扇排列整齐的窗户，像无数只沉默的眼睛，凝视着前来朝圣或窥探的每一个人。空气里是高原特有的干燥气息，混合着松树和岩石被晒暖的味道，但当你走近，那花岗岩墙体似乎能散发出一种物理性的凉意。
穿过那道简朴的国王门，你瞬间从一个世界跨入另一个世界。外部的炎热和光亮被隔绝，取而代之的是一种庄严的阴凉与幽暗。脚下是光滑得能照出人影的深色石板，脚步声在高达几十米的拱顶下回荡，形成一种空洞而遥远的回响。这里安静得能听到自己的呼吸，偶尔传来远处修士走过时黑袍的窸窣声。你突然明白了，这不是为了取悦感官而建的宫殿，而是一个为了沉思、祈祷、统治和安息而设计的精密机器。它的核心魅力，恰恰在于这种巨大的反差：外部是禁欲主义的堡垒，内部却藏着金碧辉煌的教堂、挂满大师杰作的画廊、藏有上古手稿的图书馆，以及安息着几乎所有西班牙国王的幽深陵寝。它是一枚硬币的两面，一面是面对上帝和死亡的绝对谦卑，一面是统治半个世界的无上权力。
当地人对它的感情复杂而深刻。它不仅是旅游指南上的五星景点，更是国家记忆的容器和地理坐标。你会发现，马德里的朋友谈起它，语气里总带着一丝敬畏，称它为“El Sitio”（那个地方）。周末，许多家庭会驱车来此，并不一定为进入修道院，而是在小镇广场上喝杯咖啡，让孩子在远处眺望这座“石头巨书”，感受那份历史的重量。它就像一位严厉的祖父，沉默地坐在山边，提醒着这个国家它曾经有过的全球帝国荣光，以及权力最终归于尘土的哲学命题。走在它的回廊里，你能触摸到的不仅是冰冷的石头，更是一段被凝固的、关于信仰、野心与死亡的宏大史诗。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到埃尔埃斯科里亚尔时，你会倒吸一口凉气，不是因为惊艳，而是因为一种压倒性的、近乎沉默的重量。它不像轻盈的宫殿，更像一座从瓜达拉马山灰色岩石中自然生长出来的巨大堡垒，方方正正，棱角分明，在西班牙炽烈的阳光下投下深不见底的影子。车子沿着山路盘旋而上，这个灰扑扑的庞然大物就那样冷峻地悬在天际线上，没有多余的装饰，只有无数扇排列整齐的窗户，像无数只沉默的眼睛，凝视着前来朝圣或窥探的每一个人。空气里是高原特有的干燥气息，混合着松树和岩石被晒暖的味道，但当你走近，那花岗岩墙体似乎能散发出一种物理性的凉意。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过那道简朴的国王门，你瞬间从一个世界跨入另一个世界。外部的炎热和光亮被隔绝，取而代之的是一种庄严的阴凉与幽暗。脚下是光滑得能照出人影的深色石板，脚步声在高达几十米的拱顶下回荡，形成一种空洞而遥远的回响。这里安静得能听到自己的呼吸，偶尔传来远处修士走过时黑袍的窸窣声。你突然明白了，这不是为了取悦感官而建的宫殿，而是一个为了沉思、祈祷、统治和安息而设计的精密机器。它的核心魅力，恰恰在于这种巨大的反差：外部是禁欲主义的堡垒，内部却藏着金碧辉煌的教堂、挂满大师杰作的画廊、藏有上古手稿的图书馆，以及安息着几乎所有西班牙国王的幽深陵寝。它是一枚硬币的两面，一面是面对上帝和死亡的绝对谦卑，一面是统治半个世界的无上权力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当地人对它的感情复杂而深刻。它不仅是旅游指南上的五星景点，更是国家记忆的容器和地理坐标。你会发现，马德里的朋友谈起它，语气里总带着一丝敬畏，称它为“El Sitio”（那个地方）。周末，许多家庭会驱车来此，并不一定为进入修道院，而是在小镇广场上喝杯咖啡，让孩子在远处眺望这座“石头巨书”，感受那份历史的重量。它就像一位严厉的祖父，沉默地坐在山边，提醒着这个国家它曾经有过的全球帝国荣光，以及权力最终归于尘土的哲学命题。走在它的回廊里，你能触摸到的不仅是冰冷的石头，更是一段被凝固的、关于信仰、野心与死亡的宏大史诗。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`圣洛伦索-德埃尔埃斯科里亚尔`} />
                <InfoRow label="英文名称" value={`San Lorenzo de El Escorial`} />
                <InfoRow label="正式名称" value={`皇家圣洛伦索-德埃尔埃斯科里亚尔修道院`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`埃尔埃斯科里亚尔（马德里自治区）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`菲利普二世统治时期西班牙帝国的政治、宗教与文化中心，被誉为“世界第八大奇迹”与“单调风格的丰碑”。`} />
                <InfoRow label="建筑特色" value={`以巨大、简洁、冷峻的灰色花岗岩砌筑而成的庞大矩形建筑群，严格遵循文艺复兴晚期的理性网格布局，外观近乎军事堡垒般朴素，内部却藏有极尽华丽的艺术珍品。`} />
                <InfoRow label="建筑风格" value={`西班牙文艺复兴建筑（埃雷拉风格）的巅峰代表，融合了反宗教改革的严峻精神与王室的无上权威，影响了整个伊比利亚半岛及殖民地的建筑美学。`} />
                <InfoRow label="文化价值" value={`是理解西班牙哈布斯堡王朝帝国理想、天主教信仰与君主权力的最佳实物教材，其建筑、图书馆与艺术收藏共同构成了一个“宇宙缩影”。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`4月至9月：周二至周日 10:00-20:00；10月至3月：周二至周日 10:00-18:00。每周一闭馆（若遇节假日则顺延至周二闭馆）。此外，每年1月1日、1月6日、5月1日、9月11日（当地节日）、12月24日、12月25日、12月31日全天闭馆。皇家陵寝的开放时间偶尔会因仪式活动临时调整，建议行前在其官网再次确认。图书馆和绘画馆的开放时段有时与主建筑群略有差异。`} />
              <InfoRow label="门票价格" value={`基础门票（包含皇宫、大教堂、陵寝、万神殿等主要区域）为12欧元。优惠票6欧元（适用于5-16岁儿童、25岁以下学生及65岁以上老人）。每周三下午对欧盟公民及长期居民免费（需出示证件），但非欧盟游客仍需购票。官方语音导览租赁费为4欧元。官网提前购票可避免排队，尤其在夏季和周末旺季强烈建议。`} />
              <InfoRow label="地址" value={`Av Juan de Borbón y Battemberg, s/n, 28200 San Lorenzo de El Escorial, Madrid, Spain`} />
              <InfoRow label="交通方式" value={`从马德里市中心出发最便捷。在马德里Moncloa公交枢纽（地铁3号线/6号线Moncloa站）乘坐664路或661路公共汽车，车程约50-60分钟，班次密集（高峰时段约每15-20分钟一班），单程票价约5欧元，可上车购票。乘坐火车（Cercanías C-3线）从马德里Atocha或Chamartín火车站出发至“El Escorial”站，车程约1小时，出站后还需步行约20分钟上坡路才能抵达修道院，适合喜欢漫步的旅客。自驾则沿A-6高速公路行驶，从第47号出口驶出，有指示清晰的停车场，但旺季车位紧张。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从1557年的圣金廷战役讲起。那一年8月10日，正是圣徒洛伦索的纪念日，西班牙国王菲利普二世的军队在弗兰德斯取得了对法军的决定性胜利。为了纪念这场胜利，并履行他父亲查理五世（神圣罗马帝国皇帝）渴望一个合适皇家陵寝的遗愿，这位以虔诚、审慎甚至有些阴郁著称的国王决定，建造一座集修道院、教堂、王宫、陵寝和学校于一体的宏大建筑。他选择了马德里西北方瓜达拉马山麓的这片荒凉之地，这里气候凉爽，远离首都的喧嚣，符合他静思与统治相结合的理想。菲利普二世不仅仅是一位赞助者，他是一位“总编辑”，事无巨细地审阅图纸，与他的首席建筑师胡安·德·埃雷拉通信商讨每一处细节，最终成就了这座没有一丝多余装饰、充满几何美感和理性秩序的“石制交响乐”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`建造过程本身就是一场史诗。从1563年奠基到1584年最后一块石头落下，超过1500名工人、石匠和艺术家在此劳作。菲利普二世在附近的山坡上建了一座小木屋，时常通过窗户监督工程的进展，那份专注，仿佛在雕琢一个献给上帝和帝国的永恒杰作。建筑风格彻底摒弃了当时欧洲流行的华丽巴洛克风，转向一种更为严肃、朴素、强调线条与体积的“埃雷拉风格”。整个建筑群呈一个巨大的网格状矩形，据说象征着圣洛伦索殉道时被炙烤的铁栅栏。这里成了西班牙帝国的神经中枢，菲利普二世在此统治着他的日不落帝国，从美洲的金银到菲律宾的香料，世界各地的消息汇聚于此，而国王则在简朴的房间里，在十字架和提香画作的注视下，做出影响历史的决策。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，埃尔埃斯科里亚尔的故事并未随着菲利普二世的去世而结束。它成为了西班牙波旁王朝的家族陵寝，历代国王和王后在此长眠。拿破仑战争期间，它遭受了洗劫，许多珍宝流失，但建筑的骨架奇迹般地保存了下来。它见证了西班牙从鼎盛到衰落的数个世纪，就像一个沉默的见证者。其图书馆收藏了超过4万册珍贵手稿和古籍，包括阿拉伯文、希伯来文和拉丁文的珍本，是文艺复兴时期人文主义思想的宝库。画廊里则悬挂着埃尔·格列柯、委拉斯开兹、提香、丁托列托等大师的杰作，它们不是随意装饰，而是经过精心挑选，构成了一套完整的宗教与王室图像学程序。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进皇家陵寝，你会经历整个游览中最令人心悸的部分。那是一个位于主祭坛正下方的八角形房间，用深色大理石和黄金装饰，26个华丽的大理石石棺呈环形排列，里面安息着从查理五世到阿方索十三世（除三位外）的所有西班牙君主。隔壁的“腐坏室”则更加令人深思，国王的遗体在入殓华丽石棺前，会在这里停放多年，直到彻底化为白骨。这种直白面对死亡的设计，是哈布斯堡王朝一种特有的、混合着骄傲与谦卑的死亡观：即便贵为国王，肉体终将腐朽；唯有灵魂与帝国的功业，有望在上帝和历史的殿堂中获得永生。埃尔埃斯科里亚尔，正是这种复杂精神的石头化身。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`一场完美的埃尔埃斯科里亚尔深度游，需要至少4-5个小时，并且强烈建议安排在下午。原因有二：一是上午从马德里来的大批旅行团尚未完全散去，下午相对清净；二是下午的阳光角度能让建筑外部灰色的花岗岩呈现出丰富的金色和暖灰色调，拍照极美。建议下午一点左右从马德里出发，两点多抵达。游览节奏宜慢不宜快，带着一种“朝圣”而非“打卡”的心态。先从外部远观，绕着建筑走小半圈，感受其体量，然后进入内部，按照“由外至内，由生至死”的逻辑，从明亮的庭院走向幽深的陵寝，最后以图书馆或画廊的艺术之光作为尾声。务必租用语音导览，其中的历史细节和故事是理解这座“石头巨书”的关键注释。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`进入教堂和陵寝区域，务必保持绝对安静并衣着得体（避免无袖上衣和过短的裤裙），否则可能会被工作人员劝阻。
内部路线是单向的，一旦错过某个房间很难返回，请在每个展厅仔细观看，尤其是菲利普二世的房间和图书馆，不要匆匆走过。
夏季山区下午也可能突然转凉，且建筑内部阴冷，建议带一件薄外套。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从正门前的“孤寂之椅”广场开始，后退百米，完整仰望这座建筑如同棋盘般的方正立面与后方山脉形成的威严构图。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过朴素的国王门，立刻右转进入“国王庭院”，感受被高大素净石墙环绕的静谧，并抬头看天空被框成完美的几何形状。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步入其心脏——圣洛伦索大教堂，让眼睛适应昏暗，然后聚焦于主祭坛后方高达30米的镀金神龛以及其下若隐若现的皇家陵寝入口。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着宏伟的主楼梯上到二层，探索菲利普二世那间异常简朴、只有一床一桌一椅的卧室，以及连接着他床边小窗可以直接望见大教堂主祭坛的私人祷告室。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下到建筑最核心也最沉重的部分——八角形的皇家陵寝，在幽暗的金色灯光下，静静环视那些承载着帝国历史的大理石棺。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从关于死亡的沉思中走出，来到与之形成鲜明对比的“大殿堂图书馆”，被其长达54米的华丽彩绘拱顶所震撼，并浏览玻璃柜中那些千年古卷。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过长长的“征战画廊”，欣赏描绘西班牙重大战役的恢弘壁画，体会这座建筑作为帝国凯旋纪念碑的另一面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，从侧门走出，绕到建筑北面的“水池花园”，坐在长椅上，看着修道院巨大的背影倒映在水中，在松涛声中消化一整天的历史信息与情感冲击。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`埃尔埃斯科里亚尔小镇后山的“菲利普二世之椅”观景台`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时最佳，长焦镜头可以压缩空间，将整个矩形修道院建筑群与远山、小镇一同纳入画框，形成绝佳的全景图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`国王庭院中央仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，站在庭院中心仰拍，能够获得极具对称感和几何美感的建筑线条，天空的蓝色与花岗岩的灰色形成鲜明对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`回廊庭院的光影走廊`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，阳光斜射进双层拱廊，会在石板地上投下规律的长长影子，选择一个拱门作为前景框架，拍摄走廊的纵深感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从大教堂内部拍摄主祭坛`}</h4>
                  <p className="text-sm text-gray-700">{`使用三脚架或调高ISO，在昏暗光线下捕捉祭坛金色装饰的细节与透过高窗射入的“神圣之光”，营造肃穆氛围。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`陵寝外的“腐坏室”通道口`}</h4>
                  <p className="text-sm text-gray-700">{`这个机位较隐蔽，可以拍到通向陵寝的旋转楼梯，利用墙壁上的壁灯作为光源，营造出幽深而神秘的戏剧性效果。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`建筑内部大部分区域严禁使用闪光灯和三脚架（尤其是画廊和图书馆），请务必遵守规定，依靠高感光度和相机防抖功能拍摄。`}</li>
                <li>• {`拍摄皇家陵寝内部是被绝对禁止的，请收起相机，用眼睛和心去感受那一刻的肃穆。外部庭院和水池花园则可以自由拍摄。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`埃尔埃斯科里亚尔小镇主广场旁的家庭旅馆，房间虽小但干净明亮，晚上能听到广场上悠闲的聊天声，清晨在面包房的香味中醒来，徒步五分钟即可抵达修道院。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`由17世纪贵族宅邸改造的精品酒店，隐藏在小镇蜿蜒的石板路巷弄里，房间保留了原始的石头墙壁和木梁，屋顶露台拥有眺望修道院尖塔的私密视角。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`位于瓜达拉马山国家公园内的历史庄园酒店，由古老的农庄改建，被松林和草场环绕，提供壁炉套房和山景泳池，是日间探索历史后回归自然静谧的完美选择。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`避世修行`}</h4>
                  <p className="text-sm text-purple-800">{`修道院附近由古老修道院部分建筑改建的简朴静修之所（有时对非信徒开放预订），提供极其简单的房间和膳食，让你能最大限度地沉浸在这片土地的精神氛围中。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇上的住宿在夏季周末和节假日非常紧俏，尤其是能看到修道院景色的房间，建议至少提前一个月预订。如果开车前来，务必确认酒店是否提供停车场，小镇中心停车位有限。山区夜晚温度比马德里低很多，即使夏季也需准备长袖衣物。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开埃尔埃斯科里亚尔回望时，夕阳正为它灰色的花岗岩披上一层悲壮的暖金色。我突然觉得，它不像一座建筑，更像一个巨大的、关于时间的寓言。它矗立在那里，不是为了让你感到愉悦或放松，而是为了让你感到渺小，让你思考权力、信仰、艺术与死亡这些宏大的命题。在这个追求即时快感和视觉刺激的时代，它的“单调”和“冷峻”成了一种稀缺的体验——一种强迫你慢下来、向内看的体验。走在那些无尽的长廊和庭院里，你仿佛能听到历史的低语，能触摸到菲利普二世那颗充满矛盾的心：既想建立一个永恒的上帝之城，又深知一切尘世繁华终将归于寂静的八角形墓室。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`每一位热爱深度游的旅人都该来这里，不仅仅是为了在清单上打勾，更是为了完成一次心灵的校准。它提醒我们，真正的伟大往往与朴素相伴，极致的权力最终直面的是同样的虚无。当你从幽暗的陵寝走出，重新踏入西班牙炽热的阳光之下，你会对眼前平凡的生活——一杯冰爽的桑格利亚酒，广场上孩子的笑声，远处连绵的青山——产生一种全新的、深刻的感激。埃尔埃斯科里亚尔是一座用石头写成的哲学书，它没有给出答案，却提出了所有最重要的问题。在当今这个快节奏的、碎片化的世界里，这样一个能让人驻足、沉思、并感到敬畏的地方，本身就是一种无价的宝藏。它让你带走的不只是照片，更是一份关于生命尺度的、沉甸甸的感悟。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/ubeda-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    乌
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">乌韦达古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Úbeda</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bardenas-reales-natural-park" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴尔德纳斯雷尔斯自然公园</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bardenas Reales</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/salamanca-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨拉曼卡老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Salamanca Old Town</p>
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
