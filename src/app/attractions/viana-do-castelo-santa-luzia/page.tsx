import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '维亚纳堡 Viana do Castelo｜登上圣卢西亚山，在大西洋风与河海交汇处邂逅众神之光 - 最佳欧洲景点',
  description: '如果你从波尔图沿着海岸线北上，车窗左侧开始不断闪过一片片银亮的反光，那是大西洋。然后，毫无预兆地，一座覆盖着深绿色森林的浑圆山丘出现在平原尽头，而在山丘之巅，稳稳地坐着一个巨大的、同样覆盖着绿色铜锈的圆顶建筑，像一顶被上帝无意间遗落在此的王冠。这就是你对维亚纳堡的第一眼。风立刻变得不一样了，咸腥、湿...',
}

export default function VianaDoCasteloSantaLuziaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '葡萄牙', href: '/destinations/portugal' },
            { label: '维亚纳堡（俯瞰大西洋与利马河的圣卢西亚圣殿之城）', href: '/attractions/viana-do-castelo-santa-luzia' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`维亚纳堡（俯瞰大西洋与利马河的圣卢西亚圣殿之城）・Viana do Castelo・葡萄牙・维亚纳堡区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`如果你从波尔图沿着海岸线北上，车窗左侧开始不断闪过一片片银亮的反光，那是大西洋。然后，毫无预兆地，一座覆盖着深绿色森林的浑圆山丘出现在平原尽头，而在山丘之巅，稳稳地坐着一个巨大的、同样覆盖着绿色铜锈的圆顶建筑，像一顶被上帝无意间遗落在此的王冠。这就是你对维亚纳堡的第一眼。风立刻变得不一样了，咸腥、湿润，带着远方海藻和被阳光烤热的松树气味，哗啦啦地灌满你的车厢。你知道，目的地到了。
把行李扔在客栈，我迫不及待地走向那座山。山脚下的老城区是活色生香的。蓝白瓷砖装饰的建筑外墙下，咖啡馆的遮阳棚被海风吹得噗噗作响，老人们用快得听不懂的葡萄牙语谈论着今天的鱼市。穿过古老的共和国广场，鹅卵石路面被岁月打磨得光滑如镜，折射着北大西洋特有的清冽天光。你的目标很明确——山顶的圣殿。但别急，先让自己融入这股缓慢的、与潮汐同步的节奏里。卖花姑娘的推车上，绣球花开得比海还要蓝；面包店飘出的，是黄油与焦糖的暖香。这里的人们早已习惯了那座山和山上的圣殿，它是生活背景里永恒的一部分，是出海丈夫归航时第一眼寻找的灯塔，是节日里人们举着蜡烛蜿蜒登山的终点。
选择登山缆车是明智的。这是一趟穿越时间的旅程。吱吱呀呀的老式车厢沿着陡峭的山坡攀升，脚下是逐渐展开的、令人屏息的拼图：红瓦屋顶的老城像一块精致的模型，利马河闪着银灰色的光芒，温柔地蜿蜒着投入大西洋那片无垠的深蓝之中。海与河的界限在入海口交融成一道模糊的、牛奶咖啡色的分界线。风越来越大，缆车微微晃动，你的心却奇异地安宁下来。当缆车门打开，山顶清冷而猛烈的风瞬间拥抱了你，混合着岩石、苔藓和远处海洋的气息。你转过身，圣卢西亚圣殿那巨大的石砌立面就这样毫无保留地矗立在眼前，不是压迫，而是一种磐石般的接纳。
那一刻你明白了它的核心魅力。它不仅仅是一座教堂，它是一个地理与精神的绝对坐标。在这里，自然界的两种伟大力量——河流的宁静归宿与海洋的狂野未知——在你的脚下交汇。而人类，用信仰与石头，在这交汇点的最高处，竖起了一个永恒的惊叹号。它关乎眺望，关乎守护，关乎在世界的边缘寻找一个立足点。你听到的不仅是风声，还有几个世纪以来，水手、朝圣者、村民在此发出的、混合着祈祷、叹息与归家欢笑的回响。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果你从波尔图沿着海岸线北上，车窗左侧开始不断闪过一片片银亮的反光，那是大西洋。然后，毫无预兆地，一座覆盖着深绿色森林的浑圆山丘出现在平原尽头，而在山丘之巅，稳稳地坐着一个巨大的、同样覆盖着绿色铜锈的圆顶建筑，像一顶被上帝无意间遗落在此的王冠。这就是你对维亚纳堡的第一眼。风立刻变得不一样了，咸腥、湿润，带着远方海藻和被阳光烤热的松树气味，哗啦啦地灌满你的车厢。你知道，目的地到了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`把行李扔在客栈，我迫不及待地走向那座山。山脚下的老城区是活色生香的。蓝白瓷砖装饰的建筑外墙下，咖啡馆的遮阳棚被海风吹得噗噗作响，老人们用快得听不懂的葡萄牙语谈论着今天的鱼市。穿过古老的共和国广场，鹅卵石路面被岁月打磨得光滑如镜，折射着北大西洋特有的清冽天光。你的目标很明确——山顶的圣殿。但别急，先让自己融入这股缓慢的、与潮汐同步的节奏里。卖花姑娘的推车上，绣球花开得比海还要蓝；面包店飘出的，是黄油与焦糖的暖香。这里的人们早已习惯了那座山和山上的圣殿，它是生活背景里永恒的一部分，是出海丈夫归航时第一眼寻找的灯塔，是节日里人们举着蜡烛蜿蜒登山的终点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`选择登山缆车是明智的。这是一趟穿越时间的旅程。吱吱呀呀的老式车厢沿着陡峭的山坡攀升，脚下是逐渐展开的、令人屏息的拼图：红瓦屋顶的老城像一块精致的模型，利马河闪着银灰色的光芒，温柔地蜿蜒着投入大西洋那片无垠的深蓝之中。海与河的界限在入海口交融成一道模糊的、牛奶咖啡色的分界线。风越来越大，缆车微微晃动，你的心却奇异地安宁下来。当缆车门打开，山顶清冷而猛烈的风瞬间拥抱了你，混合着岩石、苔藓和远处海洋的气息。你转过身，圣卢西亚圣殿那巨大的石砌立面就这样毫无保留地矗立在眼前，不是压迫，而是一种磐石般的接纳。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`那一刻你明白了它的核心魅力。它不仅仅是一座教堂，它是一个地理与精神的绝对坐标。在这里，自然界的两种伟大力量——河流的宁静归宿与海洋的狂野未知——在你的脚下交汇。而人类，用信仰与石头，在这交汇点的最高处，竖起了一个永恒的惊叹号。它关乎眺望，关乎守护，关乎在世界的边缘寻找一个立足点。你听到的不仅是风声，还有几个世纪以来，水手、朝圣者、村民在此发出的、混合着祈祷、叹息与归家欢笑的回响。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`维亚纳堡（俯瞰大西洋与利马河的圣卢西亚圣殿之城）`} />
                <InfoRow label="英文名称" value={`Viana do Castelo`} />
                <InfoRow label="正式名称" value={`Viana do Castelo`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`维亚纳堡区`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座象征着信仰、航海与守护的灯塔，既是葡萄牙北部最重要的朝圣地之一，也是俯瞰大西洋与利马河入海口的“上帝之窗”。`} />
                <InfoRow label="建筑特色" value={`一座20世纪初的新拜占庭风格巨构，融合了罗马式建筑的厚重与东方元素的华丽，其巨大的绿色铜制圆顶是数十公里外海面上船只的醒目航标。`} />
                <InfoRow label="建筑风格" value={`新拜占庭风格（Neo-Byzantine），兼具罗马复兴式（Romanesque Revival）的庄严元素。`} />
                <InfoRow label="文化价值" value={`它见证了葡萄牙从大航海时代的辉煌到现代宗教虔诚的延续，是地理与精神双重意义上的制高点，凝聚了当地人对海洋的敬畏与对圣卢西亚（光明之神）的笃信。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`圣卢西亚圣殿（Basílica de Santa Luzia）开放时间为每日上午9:00至下午7:00（夏季延长至晚上8:00）。教堂内部的博物馆及登顶电梯开放时间略有不同，通常为上午10:00至下午6:00。山顶观景平台全天开放。请注意，每年1月1日、12月25日及宗教仪式期间，开放时间可能临时调整，建议出行前在市政旅游官网核查。山脚下的历史城区街道与广场则全天可自由漫步。`} />
              <InfoRow label="门票价格" value={`进入圣卢西亚圣殿主体教堂免费。登顶电梯（通往穹顶外部观景回廊）票价：成人5欧元，65岁以上老人及13-25岁青年3.5欧元，12岁以下儿童免费。教堂地下博物馆门票：3欧元。另有电梯+博物馆联票，售价7欧元。购票处位于圣殿入口左侧的小厅内，支持现金与信用卡支付。`} />
              <InfoRow label="地址" value={`Monte de Santa Luzia, 4900-858 Viana do Castelo, Portugal`} />
              <InfoRow label="交通方式" value={`从波尔图弗朗西斯科·萨·卡内罗机场（OPO）出发最便捷。在机场乘坐地铁E线（Violet Line）至终点站Campanhã火车站（约30分钟，每20-30分钟一班，票价约2.5欧元）。在Campanhã站换乘葡萄牙国铁（CP）的市区线（Urbanos）或区域线（Regional）前往维亚纳堡站（Viana do Castelo），车程约1小时15分钟至2小时，班次频繁，票价约8-12欧元。到达维亚纳堡火车站后，出站即可看见圣卢西亚山。强烈推荐乘坐始于1912年的古老登山缆车（Elevador de Santa Luzia），车站距火车站步行约10分钟，缆车约10分钟直达山顶，单程票价2.5欧元，运营时间为上午9点至傍晚，风景绝佳。也可选择出租车（约10分钟）或步行登山（约40分钟陡峭山路）。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从罗马人说起，当然，那时候还没有这座圣殿。利马河口这片肥沃的土地和天然良港，早已是商船停泊的驿站。但真正让“圣卢西亚”这个名字与这座山联系起来的，是一段混合了传说与虔诚的中世纪往事。据说，在某个遥远的年代，一艘遭遇风暴的船只在此危在旦夕，船员们向殉道圣女圣卢西亚——那位被尊为“光明守护者”的西西里圣女——祈祷。突然，一道神奇的光从这座山顶射出，指引他们安全靠岸。为了感恩，水手们在山顶竖起了一个十字架和小礼拜堂。从此，这座山成了水手们出海前祈求平安、归来后答谢神恩的地方，圣卢西亚也成了这座沿海城镇的守护神。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间快进到19世纪末。葡萄牙的海洋帝国荣光虽已褪色，但航海文化与宗教信仰依然深深植根于北部人民的生活中。当时的维亚纳堡凭借鳕鱼捕捞和贸易相当富庶，市民们渴望为他们的守护神建造一座配得上其荣光、也能彰显城市实力的宏伟圣殿。1883年，一个全国性的委员会成立，专门为建造新圣殿募资。有趣的是，资金大部分来自普通民众、渔民社区和海外侨民的涓涓细流般的捐赠，这使这座建筑从一开始就带着浓厚的民间色彩。工程拖了很久，直到1903年才最终选定建筑师米格尔·文图拉·泰拉的设计方案。他是一位深受当时流行的“浪漫民族主义”影响的建筑师，从葡萄牙丰富的建筑遗产中汲取灵感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`泰拉交出的答卷是震撼的。他没有选择葡萄牙南部曼努埃尔风格那种繁复的海事装饰，而是将目光投向了更古老、更普世的意象：罗马式建筑的坚实厚重，与拜占庭风格的中央穹顶和华丽内饰。这或许是一种隐喻：罗马式象征着扎根大地的永恒信仰，拜占庭则连接着东西方，呼应着葡萄牙航海家曾探索过的遥远世界。建造过程本身就是一场史诗。巨大的花岗岩从本地采石场一块块运上山，工人们在几乎垂直的山坡上开辟道路。1918年，第一次世界大战的阴影笼罩欧洲时，它的主体结构才刚刚封顶。内部的工程，尤其是那些令人叹为观止的马赛克镶嵌画和彩绘玻璃，又持续了数十年。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你知道吗，这座圣殿几乎是在战争中“偷来”的时间中完工的。第二次世界大战期间，葡萄牙虽然中立，但世界并不平静。也许正是外部的动荡，让当地社区更专注于完成这个属于自己精神世界的庇护所。1943年，内部的马赛克工程仍在继续，艺术家们用数以百万计的小瓷片，拼贴出圣经场景和圣卢西亚的生平，金色的背景在从穹顶高窗射入的光线下熠熠生辉，仿佛把天堂的一角带到了人间。最终，在1959年，这座历时超过半个世纪建设的圣殿，被教皇若望二十三世升格为“宗座圣殿”，为其传奇的诞生史画上了一个神圣的句号。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如今，当你抚摸它那被海风侵蚀出颗粒感的石墙，你触摸到的不仅是石头，更是一段由信仰、社区力量、艺术坚持和对海洋的深深依赖共同写就的编年史。它没有皇室的血统，却有着最坚实的民众根基。它见证了这个城镇从帆船时代走到今天，始终是那个在风暴中为游子点亮一盏灯的家。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要完美体验维亚纳堡的精髓，请务必预留完整的一天。最佳抵达时间是上午9点左右，趁旅游团尚未涌入，先在山脚下老城区享受宁静的晨间氛围。整体游览节奏应是“先抑后扬”——从平缓的历史街区开始，逐步向神圣的山巅进发，最后在落日时分达到情感与视觉的高潮。建议上午9:00-11:30漫步老城，11:30乘坐缆车上山，中午在山顶简单午餐并游览圣殿内部，下午重点放在圣殿穹顶观景和环绕山丘的徒步小径，傍晚时分守候日落。这样安排既能避开人流高峰（特别是登顶电梯的排队），又能捕捉到一天中光线最富戏剧性变化的时刻，充分感受从人间烟火到天堂视角的完整旅程。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`登顶电梯空间狭小且偶尔需要排队，中午至下午是高峰，建议利用午餐时间（下午1点左右）或临近关闭前（下午5点后）前往，人会少很多。山顶风大温度低，即使山下炎热也务必带一件防风外套。圣殿是活跃的宗教场所，进入内部请保持安静并着装得体（避免无袖上衣和过短的裤裙）。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从火车站出来，先别急着上山，拐进旁边小巷里那家飘着浓郁咖啡香的“Adega do Soares”咖啡馆，像本地人一样点一份“galão”（牛奶咖啡）和新鲜出炉的“pastel de nata”，让甜腻的蛋香唤醒味蕾。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着利马河畔的码头区慢慢走，看彩色的小渔船随着波浪轻轻摇晃，空气中弥漫着绳索、沥青和淡淡鱼腥的味道，想象几个世纪前这里堆满鳕鱼干的繁忙景象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过装饰着精美曼努埃尔风格窗户的旧海关大楼，钻进老城中心的共和国广场，坐在喷泉边观察带着篮子匆匆采购的主妇和悠闲下棋的老人们，让小镇的日常脉搏感染你。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到那座始于1912年的淡黄色登山缆车站，买一张单程票，跳进吱呀作响的木制车厢，体验随着视野豁然开朗而心跳加速的十分钟攀升。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出缆车站，先别直奔圣殿大门，向左沿着山坡走一小段，那里有个被松树环绕的观景台，可以第一次毫无遮挡地俯瞰利马河以优雅的弧线投入大西洋怀抱的全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入圣殿内部，让你的眼睛适应片刻昏暗，然后抬头凝视中殿尽头祭坛上方巨大的马赛克基督像，感受金色背景在从高处窗格透入的光束中如微波般荡漾的神圣静谧。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要乘坐内部电梯登上穹顶外部回廊，让猛烈的山风瞬间吹乱你的头发，然后扶着古老的石栏，进行一场360度的缓慢旋转，将城镇、河流、森林、沙丘、海洋乃至远方的山脉尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从圣殿后方的小门出来，踏上那条被称作“Caminho dos Sentimentos”（情感之路）的环山小径，在松涛与鸟鸣中徒步约半小时，从不同角度回望圣殿雄伟的侧影与背影。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`缆车中段抓拍`}</h4>
                  <p className="text-sm text-gray-700">{`在缆车上升至三分之二高度、刚刚越过一片树林时，迅速转身对准车厢玻璃，可以拍到圣殿穹顶与山下老城、利马河同框的经典纵深画面，最佳时间是上午侧光时。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣殿正门仰拍与海景融合`}</h4>
                  <p className="text-sm text-gray-700">{`站在圣殿前广场的西南角，使用广角镜头低角度仰拍，将巨大的石砌门廊、绿色穹顶与背景里一片蔚蓝的大西洋全部囊括入镜，下午阳光照亮建筑正面时效果最佳。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`穹顶回廊人物剪影`}</h4>
                  <p className="text-sm text-gray-700">{`在穹顶回廊上，让你的同伴站在面向大西洋的拱窗前，在日落前约一小时的黄金时刻，以人物剪影为前景，拍摄窗外那幅由蜿蜒河流、金色沙丘和粼粼海面构成的史诗级画卷。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`后山小径上的圣殿背影`}</h4>
                  <p className="text-sm text-gray-700">{`沿着“情感之路”走到山脊的另一侧，你会找到一块突出的岩石，从这里可以平视甚至略微仰视圣殿的后殿与穹顶，将其与茂密的森林植被一同构图，清晨或傍晚的柔和光线能赋予石头温暖的色调。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`山脚渔港的远眺`}</h4>
                  <p className="text-sm text-gray-700">{`日落之后华灯初上时，回到河口的渔港区，用长焦镜头对准山顶，圣殿的灯光亮起，宛如悬浮在深蓝天幕中的金色宝石，与水中倒影相映成趣。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`山顶强风对三脚架稳定性是极大考验，建议使用重型三脚架或寻找有遮挡的机位。拍摄教堂内部前请务必确认是否允许（通常允许但不允许使用闪光灯和三脚架），并绝对尊重正在进行的宗教活动。航拍能获得无与伦比的视角，但务必提前查询葡萄牙无人机法规，并避开人群与圣殿上空。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河景阳台民宿`}</h4>
                  <p className="text-sm text-blue-800">{`选择老城河边一栋18世纪商人宅邸改造的民宿，房间拥有高大的木窗和一个小巧的铁艺阳台，清晨在河面晨雾与渔船发动机的嗡嗡声中醒来，晚上看圣殿山的灯光倒映在漆黑的水面上。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`山顶隐居者小屋`}</h4>
                  <p className="text-sm text-green-800">{`就在圣殿山腰，由守山人石屋改造的独栋小屋，被桉树和松树环绕，拥有私密的花园和直面大西洋的露台，夜晚只有风声与星空为伴，是彻底逃离尘嚣的隐秘之所。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计感历史宫殿酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻位于共和国广场旁的“Viana Castelo Hotel”，这座经过精心修复的历史建筑将古典石膏天花与当代设计家具完美融合，屋顶酒吧是欣赏圣殿山日落全景的绝佳地点，无需与游客拥挤。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`海滨冲浪者驿站`}</h4>
                  <p className="text-sm text-purple-800">{`如果热爱海洋，不妨住在城外几公里处的卡布德蒙德海滩（Praia do Cabedelo）附近，选择一家充满活力的冲浪客栈，白天在海浪中嬉戏，傍晚看着夕阳从圣卢西亚山的方向沉入海平面之下。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（6月至9月）是旺季，尤其是周末和宗教节日期间，住宿非常紧张且价格昂贵，务必提前数月预订。老城区住宿最具氛围，但街道狭窄，自驾停车是巨大挑战，建议选择提供停车场的酒店或使用城外的公共停车场。山腰或山顶的住宿极为稀少且需要步行一段路，但换来的是无价的宁静与景观。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开维亚纳堡很久以后，我时常在拥挤地铁的喧嚣中，或面对电脑屏幕的疲惫时，忽然想起站在圣卢西亚山顶被风吹得几乎站不稳的那个瞬间。那一刻，世界是如此的清晰和辽阔：脚下是人类精心构筑的家园，红瓦连绵，秩序井然；眼前是自然原初的力量，河流温柔，海洋狂放，无边无际。而我就站在那条清晰的分界线上，仿佛同时触碰到了文明的温度与荒野的自由。这座圣殿教会我的，不是某种具体的教义，而是一种“俯瞰”的智慧。它邀请你暂时离开生活的平面，上升到某个高度，回望自己的来路与周遭的脉络。你会发现，那些日常的烦忧，在如此宏大的尺度下，变得微小而宁静。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个快节奏的、常常让人感到迷失的时代，维亚纳堡是一个珍贵的“锚点”。它不仅仅是一个旅游目的地，更是一种心灵状态的隐喻。它提醒我们，人类需要这样的高处——无论是物理上的还是精神上的——需要那些耗费数代人心血建起的、看似“无用”的美丽事物，来安放我们的敬畏、感恩与眺望远方的渴望。每一位热爱深度游的旅人，都应该来一次这里。不是为了打卡一张照片，而是为了亲身站上那个交界点，让大西洋的风穿透你的身体，感受那种被历史和自然双重洗礼后的通透与平和。你会带着这份“俯瞰”的视角离开，而这份视角，或许就是它在你我生命中点亮的一盏，小小的、永不熄灭的圣卢西亚之光。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/amarante-portugal-tamega-river" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿马兰特（塔梅加河畔的浪漫小镇）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Amarante</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/coimbra-university-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科英布拉大学城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Coimbra</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/mafra-national-palace" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马夫拉宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mafra National Palace</p>
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
