import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '瓦拉日丁 Varaždin｜迷失在金色的巴洛克梦境，克罗地亚被遗忘的前首都 - 最佳欧洲景点',
  description: '你从萨格勒布驶来的巴士上跳下，踏入瓦拉日丁的第一刻，时光就慢了下来，空气里仿佛都飘着一种蜂蜜色的甜腻。这不是那种气势汹汹、让你屏住呼吸的宏伟，而是一种温柔的、全方位的包裹。眼前的一切——从市政厅奶油黄的立面，到旁边咖啡馆杏红色的遮阳棚，再到脚下被岁月磨得温润发亮的鹅卵石——都笼罩在一种统一的、暖洋洋...',
}

export default function BaroqueVarazdinPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '瓦拉日丁', href: '/attractions/baroque-varazdin' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`瓦拉日丁・Varaždin・克罗地亚・瓦拉日丁`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你从萨格勒布驶来的巴士上跳下，踏入瓦拉日丁的第一刻，时光就慢了下来，空气里仿佛都飘着一种蜂蜜色的甜腻。这不是那种气势汹汹、让你屏住呼吸的宏伟，而是一种温柔的、全方位的包裹。眼前的一切——从市政厅奶油黄的立面，到旁边咖啡馆杏红色的遮阳棚，再到脚下被岁月磨得温润发亮的鹅卵石——都笼罩在一种统一的、暖洋洋的调子里。对，就是巴洛克，但不是维也纳或罗马那种帝王将相的炫目巴洛克，这里是“居家版”的，带着中欧小镇特有的精致与腼腆。
你的鼻子会先于眼睛捕捉到线索。清晨，刚出炉的克罗地亚传统糕点“布雷克”的黄油香，从面包房虚掩的门缝里钻出来，混合着街角花店湿润的泥土和玫瑰气息。马蹄声“哒哒”地敲在石头上，不是为游客表演，而是本地的观光马车正载着早起的居民穿过广场。你抬起头，圣尼古拉斯教堂的双子塔楼刺向湛蓝的天空，塔尖上的风向标金光闪闪，而在它们之下，每一栋联排别墅的窗框都被漆成不同的柔和色彩：薄荷绿、淡鹅黄、婴儿粉。阳台上的铁艺花纹蜿蜒如藤蔓，垂下天竺葵的瀑布。这里没有突兀的现代建筑来打断你的凝视，整座老城就像一首精心谱写的巴洛克协奏曲，每一个音符都落在该落的位置。
当地人骑着自行车叮铃铃地掠过，车篮里装着新鲜的蔬果。老先生们坐在广场的长椅上，就着一小杯浓咖啡，能看一上午的鸽子。瓦拉日丁的魅力，就在于它不是一个僵化的博物馆。这些美轮美奂的建筑里，依然住着人，开着律师事务所、牙医诊所、画廊和书店。历史不是被关在玻璃柜里，而是依然在呼吸，是日常生活的一部分。你仿佛能听见几个世纪前，那些贵族和富商们，在决定将这里建设成配得上首都之名的城市时，对“美”和“秩序”所怀有的那份近乎固执的坚持。
最打动人的，或许是那份“曾经沧海”的从容。它当过首都，经历过辉煌，也被大火烧毁过，最终褪去了政治中心的喧嚣，安心做回一个宁静的文化重镇。这份经历赋予它一种独特的厚度——既有首都的格局与典雅，又有小镇的亲切与闲适。走在街上，你不会感到被历史压迫，反而像被一位穿着体面、谈吐优雅的老绅士邀请，去他打理得井井有条的花园里，喝一杯下午茶，听他娓娓道来那些过去的好时光。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你从萨格勒布驶来的巴士上跳下，踏入瓦拉日丁的第一刻，时光就慢了下来，空气里仿佛都飘着一种蜂蜜色的甜腻。这不是那种气势汹汹、让你屏住呼吸的宏伟，而是一种温柔的、全方位的包裹。眼前的一切——从市政厅奶油黄的立面，到旁边咖啡馆杏红色的遮阳棚，再到脚下被岁月磨得温润发亮的鹅卵石——都笼罩在一种统一的、暖洋洋的调子里。对，就是巴洛克，但不是维也纳或罗马那种帝王将相的炫目巴洛克，这里是“居家版”的，带着中欧小镇特有的精致与腼腆。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你的鼻子会先于眼睛捕捉到线索。清晨，刚出炉的克罗地亚传统糕点“布雷克”的黄油香，从面包房虚掩的门缝里钻出来，混合着街角花店湿润的泥土和玫瑰气息。马蹄声“哒哒”地敲在石头上，不是为游客表演，而是本地的观光马车正载着早起的居民穿过广场。你抬起头，圣尼古拉斯教堂的双子塔楼刺向湛蓝的天空，塔尖上的风向标金光闪闪，而在它们之下，每一栋联排别墅的窗框都被漆成不同的柔和色彩：薄荷绿、淡鹅黄、婴儿粉。阳台上的铁艺花纹蜿蜒如藤蔓，垂下天竺葵的瀑布。这里没有突兀的现代建筑来打断你的凝视，整座老城就像一首精心谱写的巴洛克协奏曲，每一个音符都落在该落的位置。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当地人骑着自行车叮铃铃地掠过，车篮里装着新鲜的蔬果。老先生们坐在广场的长椅上，就着一小杯浓咖啡，能看一上午的鸽子。瓦拉日丁的魅力，就在于它不是一个僵化的博物馆。这些美轮美奂的建筑里，依然住着人，开着律师事务所、牙医诊所、画廊和书店。历史不是被关在玻璃柜里，而是依然在呼吸，是日常生活的一部分。你仿佛能听见几个世纪前，那些贵族和富商们，在决定将这里建设成配得上首都之名的城市时，对“美”和“秩序”所怀有的那份近乎固执的坚持。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，或许是那份“曾经沧海”的从容。它当过首都，经历过辉煌，也被大火烧毁过，最终褪去了政治中心的喧嚣，安心做回一个宁静的文化重镇。这份经历赋予它一种独特的厚度——既有首都的格局与典雅，又有小镇的亲切与闲适。走在街上，你不会感到被历史压迫，反而像被一位穿着体面、谈吐优雅的老绅士邀请，去他打理得井井有条的花园里，喝一杯下午茶，听他娓娓道来那些过去的好时光。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`瓦拉日丁`} />
                <InfoRow label="英文名称" value={`Varaždin`} />
                <InfoRow label="正式名称" value={`Varaždin`} />
                <InfoRow label="国家" value={`克罗地亚`} />
                <InfoRow label="城市" value={`瓦拉日丁`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`克罗地亚历史上短暂而辉煌的首都（1756-1776年），被誉为“克罗地亚的巴洛克明珠”。`} />
                <InfoRow label="建筑特色" value={`一座保存近乎完好的巴洛克露天博物馆，宫殿、教堂、塔楼与联排别墅构成和谐统一的金色与柔彩立面画卷。`} />
                <InfoRow label="建筑风格" value={`以晚期巴洛克和洛可可风格为主导，混杂了哥特式、文艺复兴及古典主义元素。`} />
                <InfoRow label="文化价值" value={`体现了18世纪中欧城镇规划的典范，是克罗地亚民族文化与贵族生活艺术的鲜活见证。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`瓦拉日丁古城本身全天开放，但其核心历史建筑群有各自的时间：瓦拉日丁城堡（市博物馆）夏季（4月至10月）通常为周二至周五 10:00-17:00，周末 10:00-13:00；冬季时间缩短，周一闭馆。老市政厅塔楼观景台开放时间类似，但常仅在晴朗天气开放。圣尼古拉斯教堂等宗教场所一般在白天对游客开放，但需避开弥撒时间（通常为周日早晨及每日早晚）。建议在5月至9月的最佳旅行季来访，活动最丰富。`} />
              <InfoRow label="门票价格" value={`进入古城街区免费。主要收费点：瓦拉日丁城堡（市博物馆）成人票约40库纳（约5.3欧元），学生及儿童有优惠。老市政厅塔楼登顶约20库纳。购买“瓦拉日丁卡”可能提供多个景点的折扣联票，约70库纳。具体票价可能随季节微调。`} />
              <InfoRow label="地址" value={`Grad Varaždin, 42000 Varaždin, 克罗地亚`} />
              <InfoRow label="交通方式" value={`从克罗地亚首都萨格勒布出发最为便捷。萨格勒布国际机场（ZAG）是主要入口。从机场乘坐机场巴士或出租车到萨格勒布中央巴士站（Autobusni kolodvor），车程约30分钟。从巴士站乘坐频繁的长途巴士前往瓦拉日丁，几乎每小时一班，车程约1.5小时，票价约60-80库纳，车上购票或提前在线购买。火车也可抵达瓦拉日丁火车站，但班次较少，耗时约2小时。自驾是最灵活的方式，沿A4高速公路向北行驶约80公里，1小时即可到达。古城中心为步行区，建议将车停在周边的公共停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`瓦拉日丁的故事，始于一座坚固的堡垒。早在12世纪，为了抵御来自东方的威胁，一座中世纪城堡在德拉瓦河畔拔地而起，这就是今天瓦拉日丁城堡的前身。在随后的几百年里，它一直是克罗地亚边境军事防御体系中的重要一环，石头垒起的厚墙见证过无数的烽烟与对峙。但命运的转折点，往往始于和平。15世纪，瓦拉日丁被赐予克罗地亚的古老贵族家族，从此，军事要塞的底色上，开始逐渐涂抹上贵族生活的华彩。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正让瓦拉日丁脱胎换骨的，是17世纪末到18世纪。那是一个属于巴洛克的时代，艺术与建筑的风从维也纳、从意大利吹遍整个中欧。而瓦拉日丁，凭借其富庶的贵族阶层和新兴的商人阶级，热情地拥抱了这场美的革命。一场灾难意外地成为了催化剂：1776年，一场毁灭性的大火几乎吞噬了整个木结构为主的老城。但瓦拉日丁人没有在灰烬中哭泣，他们看到了重建的机会。在城市规划师和建筑师的主导下，一座按照当时最先进理念设计的新城从废墟上崛起：笔直的街道，规整的街区，以及统一采用砖石和灰泥建造、装饰着华丽灰塑和浮雕的建筑立面。防火，也成为了美学的动力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`就在这时，历史的聚光灯打在了它身上。1756年，为了躲避萨格勒布肆虐的瘟疫，克罗地亚总督府（相当于政府）决定临时迁都至相对安全且条件优越的瓦拉日丁。这“临时”一待就是二十年。这二十年，是瓦拉日丁的黄金时代。它成为了克罗地亚政治、文化和社交生活的绝对中心。贵族们争相在此建造或改建宫殿，以彰显自己的地位和品味；艺术家、音乐家和工匠们汇聚于此；舞会、音乐会、戏剧演出日夜不休。城市的每一个角落都在述说着繁华与精致。虽然1776年的大火后，总督府迁回了萨格勒布，但首都的基因已深深刻入城市的肌理。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`19世纪以后，瓦拉日丁渐渐归于平静，从政治舞台的中心退居为一座重要的区域文化城市。这份“退隐”反而成了它最大的幸运。它没有经历剧烈的工业化冲击，后来的战争创伤也相对较轻，使得那大片大片的18世纪巴洛克和古典主义建筑得以奇迹般地完整保存下来。20世纪，明智的当地人意识到了这笔遗产的无价，开始了系统性的保护和修复。他们守护的不仅是一栋栋房子，更是一个时代的梦想与生活方式的标本。今天的瓦拉日丁，就像一枚被时间琥珀完整封存起来的巴洛克徽章，当你漫步其中，指尖触碰那些温润的石墙，仿佛还能感受到两个半世纪前，那位“临时首都”跳动着的、优雅而炽热的心。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受瓦拉日丁的巴洛克韵律，建议安排一整天时间。最好在上午九点左右抵达，这时晨光斜射，给建筑立面镀上最美的金色，游客也尚未涌入。游览节奏宜慢不宜快，核心在于“沉浸”与“散步”。路线可以设计成一个环线，从城市的历史心脏——主广场开始，先向上探索至象征权力的城堡，再穿过宁静的公园，最终抵达充满艺术哀愁的墓地，最后绕回中心品味建筑细节。这样的安排既能把握宏观历史脉络，又能捕捉微观生活气息，傍晚时分回到广场，看着华灯初上，体验会非常完整。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周末的广场和教堂周边可能举行婚礼，安静观看是种乐趣，但注意避免打扰。古城石板路穿舒适的平底鞋是绝对必要的。一些小型私人宫殿博物馆可能只在门口有不起眼的标识，大胆按门铃询问，常有惊喜。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从遍布着露天咖啡馆和老式路灯的斯塔罗斯纳·特广场（主广场）开始，仰头细细品味那有着洋葱形穹顶和精美壁画的老市政厅巴洛克塔楼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过广场北侧的小巷，来到圣尼古拉斯教堂前，花点时间辨认它混合了哥特、巴洛克和古典主义的奇特而和谐的外立面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着弗兰耶·拉奇基街漫步，像检阅仪仗队一样欣赏两侧鳞次栉比的贵族宫殿，注意每扇大门上各不相同的家族纹章和石雕。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走过横跨护城河的石桥，进入瓦拉日丁城堡厚重的大门，在中庭的古老桑树下想象一下当年贵族骑士们在此集结的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城堡内部的市博物馆里，别错过那些展示18世纪本地时尚、家居和艺术的展厅，感受当年首都居民的日常生活品味。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡后门出来，一头扎进绿意盎然的城市公园，在玫瑰园的长椅上休息，听喷泉潺潺，看当地人遛狗散步。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要在日落前走到著名的瓦拉日丁墓地，这里不是阴森之地，而是堪称露天雕塑博物馆，成千上万的绿植雕塑在夕阳下如同一个宁静的绿色梦境。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`趁着天未全黑，绕回老城中心的某条小街，找一家有百年地窖的餐厅，用一顿融合了奥地利与巴尔干风味的晚餐结束这完美的一天。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡桥仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，站在城堡前的石桥上，将古老的石桥拱门作为画框，拍摄其后沐浴在金色光线中、倒映在护城河里的完整城堡立面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`市政厅塔楼视角`}</h4>
                  <p className="text-sm text-gray-700">{`登上老市政厅塔楼观景台（如果开放），在上午光线清澈时，用广角镜头俯瞰整个主广场和放射状的老城街道，捕捉红瓦屋顶与彩色立面的几何韵律。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`弗兰耶·拉奇基街纵深`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光洒满街道时，站在街道一端，利用两侧连续的巴洛克宫殿立面形成的自然引导线，拍出极具纵深感且色彩斑斓的街景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`墓地绿植雕塑特写`}</h4>
                  <p className="text-sm text-gray-700">{`午后光线柔和时，在瓦拉日丁墓地中寻找那些被修剪成天使、十字架或家族徽章形状的柏树或黄杨木雕塑，用大光圈镜头拍摄充满超现实艺术感的特写。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`骑士广场拱门`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚蓝调时刻，在骑士广场的回廊下，拍摄透过拱门看到的、灯火初上的圣尼古拉斯教堂塔楼，古典的构图带有电影感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效减少巴洛克建筑立面上华丽灰塑的反光，让色彩更饱和。拍摄墓地雕塑时请始终保持肃穆和尊重，避免拍摄正在进行的悼念活动或特写墓碑上的私人信息。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史中心民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在主广场旁一栋18世纪商人宅邸的顶层公寓，拥有原始的木质横梁和一个小阳台，清晨推开窗就能闻到咖啡香并独享广场全景。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计型花园酒店`}</h4>
                  <p className="text-sm text-green-800">{`选择坐落在古城边缘一座19世纪别墅里的精品酒店，房间简约现代，但最大的亮点是那个种满古老玫瑰和紫藤的隐秘后院花园，早餐就在树下享用。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`庄园式宁静体验`}</h4>
                  <p className="text-sm text-yellow-800">{`位于城郊一座修复的19世纪小庄园内，房间宽敞充满古董家具，提供自行车，可以骑行穿过田野和树林，以另一种节奏探索瓦拉日丁。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`城堡景观酒店`}</h4>
                  <p className="text-sm text-purple-800">{`一家由历史建筑改造的中高端酒店，部分房间拥有直视瓦拉日丁城堡的绝佳视角，尤其是夜晚城堡打光后，在窗边小酌一杯的画面无比浪漫。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`旺季（夏季音乐节期间和初秋）务必提前数月预订，尤其是中心区的特色住宿。古城内停车位紧张，选择住宿时务必确认是否提供停车位或方便的公共停车场信息。住在中心虽然方便，但周末夜晚广场周围的酒吧可能有些许噪音，偏好绝对安静的话可考虑稍外围的庄园或别墅酒店。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开瓦拉日丁许久，闭上眼睛，脑海里浮现的不是某一座具体的建筑，而是一种整体的、蜂蜜色的氛围，一种从容不迫的节奏。在这个一切追求“新”和“快”的世界里，瓦拉日丁的存在，像是一个温柔而坚定的反驳。它告诉你，美可以不是侵略性的，优雅可以渗透在每一块砖石和每一次日常的转身里。它曾是聚光灯下的主角，懂得高光时刻的华彩；而后甘于退居幕后，将那份修养内化为骨子里的气质，这种自知与从容，尤为动人。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`对于真正热爱深度游的旅人来说，瓦拉日丁绝不仅仅是两小时就能逛完的“巴洛克街区”。它是一个需要你放下清单、允许自己迷路、用心去呼吸的时空胶囊。在这里，你能触摸到中欧小城在特定历史节点上所能达到的文明与审美的巅峰状态，而且它如此鲜活，从未死去。它邀请你体验的，是一种“慢下来生活”的可能性。当你在黄昏的墓地公园，看到那些被精心修剪成艺术品的绿树，你会明白，这里的人们对美的追求，甚至延伸到了生命的终点。这份对生活全方位、贯穿始终的诗意雕琢，才是瓦拉日丁留给世界最珍贵的礼物，值得你专程而来，住上一晚，让自己彻底沉浸在那片金色的、悠长的梦境里。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/korcula" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科尔丘拉岛</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Korčula</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/pula-arena" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普拉竞技场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pula Arena</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rijeka-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    里
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">里耶卡老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rijeka Old Town</p>
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
