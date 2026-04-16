import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '博福尔城堡遗址 Beaufort Castles｜探寻荒芜中世纪废墟与精美文艺复兴宫殿的双面传奇 - 最佳欧洲景点',
  description: '第一眼看到博福尔城堡，你会有点恍惚，仿佛时间在这里被粗暴地撕成了两半。左边，是彻底“躺平”的中世纪废墟，巨大的石块随意堆叠，高塔只剩下骨架，倔强的藤蔓和野蔷薇像绿色的火焰，疯狂地吞噬着每一道石缝，在风中发出沙沙的轻响，那是岁月啃食石头的声音。空气里弥漫着潮湿的苔藓味、陈年岩石的尘土气，还有一丝若有若...',
}

export default function BeaufortCastlesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '博福尔城堡遗址', href: '/attractions/beaufort-castles' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`博福尔城堡遗址・Beaufort Castles・卢森堡・博福尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到博福尔城堡，你会有点恍惚，仿佛时间在这里被粗暴地撕成了两半。左边，是彻底“躺平”的中世纪废墟，巨大的石块随意堆叠，高塔只剩下骨架，倔强的藤蔓和野蔷薇像绿色的火焰，疯狂地吞噬着每一道石缝，在风中发出沙沙的轻响，那是岁月啃食石头的声音。空气里弥漫着潮湿的苔藓味、陈年岩石的尘土气，还有一丝若有若无的、属于地下酒窖的凉意。偶尔有乌鸦从残破的拱券间掠过，叫声在空腔里回荡，格外苍凉。
然而，当你把视线转向右侧，画风突变。一座规整、优雅、有着对称窗户和漂亮斜屋顶的宫殿静静矗立，墙面是温暖的蜂蜜色，窗框漆成墨绿，整洁得像是昨天才有人离开。强烈的对比让你瞬间怔住——这不是一座城堡，这是两座！它们背靠背生长在同一片岩基上，却一个诉说着毁灭与遗忘，一个低语着精致与生存。这种奇异的并置，正是博福尔最扣人心弦的魔法。
在当地人眼里，这里与其说是个景点，不如说是个巨大的、露天的社区客厅和自然公园。你会看到遛狗的老人慢悠悠地沿着城墙根散步，年轻的情侣带着野餐垫坐在宫殿前的草坪上晒太阳，孩子们在废墟的安全区域玩捉迷藏，笑声撞在古老的石壁上，又轻快地弹回来。城堡的影子长长地投在草地上，时间在这里变得很慢，很柔软。它不再是教科书里冰冷的名字，而是小镇呼吸的一部分，是日常风景里沉默而威严的背景。
而它的核心魅力，就在于这种“未完成”和“已精致”之间的张力。你可以在废墟中攀爬，触摸那些被风雨打磨得光滑的旋梯扶手，想象骑士沉重的脚步声；然后转身走进宫殿，在那些挂着肖像画的客厅、铺着木地板的舞厅里，嗅到文艺复兴时期贵族对美好生活的热烈追求。一趟旅程，两种截然相反的生命体验，从战争的粗粝到和平的优雅，全部浓缩在这片小小的山丘上。这感觉，就像同时读一首豪迈的史诗和一本细腻的日记。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到博福尔城堡，你会有点恍惚，仿佛时间在这里被粗暴地撕成了两半。左边，是彻底“躺平”的中世纪废墟，巨大的石块随意堆叠，高塔只剩下骨架，倔强的藤蔓和野蔷薇像绿色的火焰，疯狂地吞噬着每一道石缝，在风中发出沙沙的轻响，那是岁月啃食石头的声音。空气里弥漫着潮湿的苔藓味、陈年岩石的尘土气，还有一丝若有若无的、属于地下酒窖的凉意。偶尔有乌鸦从残破的拱券间掠过，叫声在空腔里回荡，格外苍凉。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，当你把视线转向右侧，画风突变。一座规整、优雅、有着对称窗户和漂亮斜屋顶的宫殿静静矗立，墙面是温暖的蜂蜜色，窗框漆成墨绿，整洁得像是昨天才有人离开。强烈的对比让你瞬间怔住——这不是一座城堡，这是两座！它们背靠背生长在同一片岩基上，却一个诉说着毁灭与遗忘，一个低语着精致与生存。这种奇异的并置，正是博福尔最扣人心弦的魔法。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当地人眼里，这里与其说是个景点，不如说是个巨大的、露天的社区客厅和自然公园。你会看到遛狗的老人慢悠悠地沿着城墙根散步，年轻的情侣带着野餐垫坐在宫殿前的草坪上晒太阳，孩子们在废墟的安全区域玩捉迷藏，笑声撞在古老的石壁上，又轻快地弹回来。城堡的影子长长地投在草地上，时间在这里变得很慢，很柔软。它不再是教科书里冰冷的名字，而是小镇呼吸的一部分，是日常风景里沉默而威严的背景。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而它的核心魅力，就在于这种“未完成”和“已精致”之间的张力。你可以在废墟中攀爬，触摸那些被风雨打磨得光滑的旋梯扶手，想象骑士沉重的脚步声；然后转身走进宫殿，在那些挂着肖像画的客厅、铺着木地板的舞厅里，嗅到文艺复兴时期贵族对美好生活的热烈追求。一趟旅程，两种截然相反的生命体验，从战争的粗粝到和平的优雅，全部浓缩在这片小小的山丘上。这感觉，就像同时读一首豪迈的史诗和一本细腻的日记。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`博福尔城堡遗址`} />
                <InfoRow label="英文名称" value={`Beaufort Castles`} />
                <InfoRow label="正式名称" value={`Beaufort Castles`} />
                <InfoRow label="国家" value={`卢森堡`} />
                <InfoRow label="城市" value={`博福尔`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座见证了卢森堡边境领主八百年权力更迭、战争与和平的史诗级建筑群，从军事要塞优雅转身为舒适宫殿的罕见范例。`} />
                <InfoRow label="建筑特色" value={`由两部分组成：西侧是爬满藤蔓、塔楼倾颓的粗犷中世纪城堡废墟；东侧则是保存完好、线条规整的文艺复兴风格宫殿，形成极其鲜明的对比与对话。`} />
                <InfoRow label="建筑风格" value={`中世纪罗曼式与哥特式军事建筑，与后期文艺复兴及巴洛克风格民用宫殿的共生体。`} />
                <InfoRow label="文化价值" value={`它不仅是一座城堡，更是一部以石头写就的立体历史书，生动展现了欧洲贵族生活方式从防御为主到追求艺术与舒适的深刻演变。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡及宫殿区域通常在每年3月中旬至11月初对公众开放，具体日期每年略有调整。开放时间为每日上午10:00至下午6:00，最后入场时间为闭馆前一小时。冬季（11月至次年3月）通常关闭维护，但外部场地仍可参观。复活节、圣诞节等主要节假日开放时间可能变动，建议行前务必查阅官网最新公告。`} />
              <InfoRow label="门票价格" value={`参观分为两部分：中世纪城堡遗址门票为成人5欧元；文艺复兴宫殿门票为成人7欧元。购买联票（含两者）为成人10欧元。学生、65岁以上长者及团体可享受相应优惠，需出示有效证件。12岁以下儿童在成人陪同下免费入场。门票仅支持现场现金购买，不支持在线预订。`} />
              <InfoRow label="地址" value={`Beaufort Castles, 24 Rue du Château, 6310 Beaufort, Luxembourg`} />
              <InfoRow label="交通方式" value={`从卢森堡市出发最为便捷。在卢森堡中央火车站外的公交站，乘坐111路或171路公交车，方向标示为“埃希特纳赫 (Echternach)”。约45分钟后在“Beaufort, Um Duerf”站下车，随后沿着清晰的棕色旅游指示牌步行约15分钟穿过宁静的博福尔小镇即可抵达城堡山脚下。公交车班次平日约每小时一班，周末及节假日班次减少，建议提前查询时刻表。若自驾，可使用上述地址导航，城堡入口附近有免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事的开端要追溯到公元11世纪，那时这片土地是神圣罗马帝国边境的一片森林与丘陵。最早在此筑起简易防御工事的，是被称为“博福尔的瓦尔特”的家族。他们不是什么名震天下的君王，而是依靠这片战略要地逐步崛起的边境领主。最初的城堡简陋极了，就是用当地的灰蓝色岩石垒起一座主塔，外加一圈木栅栏，功能纯粹是为了瞭望和保护家族那点可怜的财产。你能想象，在潮湿多雾的清晨，第一代瓦尔特推开木门，看到的只是茫茫林海和自己呼出的白气，野心和恐惧一样微小。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机出现在12世纪。随着家族通过联姻和效忠获得了更多财富与权力，城堡开始了第一次“扩建装修”。石头围墙取代了木栅，更多的塔楼被建立起来，特别是那座今天依然倔强矗立的“主塔”，成为了力量的象征。城堡变成了一个微型的自治世界，里面有大厅、厨房、礼拜堂，甚至关押犯人的地牢。这里经历过无数次小规模的冲突、围攻和谈判，墙壁上的箭痕和加固的痕迹，都是那段“边境日常”的无声日记。城堡的名字“Beaufort”，意为“美丽的要塞”，或许正是主人在那充满不确定性的时代里，一种美好的自我祝愿。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，真正的戏剧性转折发生在16世纪。当文艺复兴的春风吹过阿尔卑斯山，也撩动了卢森堡贵族的心。当时的主人，博福尔家族的后裔（此时已通过继承关系易主），做出了一个大胆的决定：老城堡太阴暗、太不舒服了！他们不再满足于仅仅做一个武装到牙齿的领主，而是想活得像个真正的“绅士”。于是，就在老城堡东侧一箭之地，他们聘请工匠，开始建造一座全新的、充满对称美感和采光窗户的宫殿。哥特式的尖拱被罗马式的圆拱取代，防御性的狭小箭窗变成了宽敞的、可以眺望风景的玻璃窗。宫殿内部出现了华丽的灰泥天花板、铺着地砖的走廊和专门用于社交宴会的宽敞大厅。新旧城堡并肩而立，像一个穿着破旧铠甲的武士，身边站着一位衣冠楚楚的绅士，画面既古怪又和谐。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`可惜，好景不长。随着欧洲政治格局变化，这个家族在17世纪后期逐渐没落。精美的文艺复兴宫殿被出售、转手，一度改为农场甚至工厂，内部被分割得面目全非。而那座古老的中世纪城堡，则在30年战争的炮火中严重受损，随后被彻底废弃，任由风雨侵蚀，成为了藤蔓和鸟类的乐园。两座建筑一同陷入了漫长的沉睡，在近三百年的时光里，渐渐被当地人视为一个略带忧伤的风景，一个“闹鬼”的传说之地，直到20世纪才被卢森堡政府收购并开始缓慢的修复。尤其对于中世纪废墟，采取了“修旧如旧，维持其浪漫废墟状态”的保守策略，没有去重建它，而是加固它，让那种荒凉的美感得以永恒凝固。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`强烈建议在一个晴朗的工作日上午前往，大约9点半从卢森堡市出发，10点半前抵达。这样既能避开周末可能的人流，又能享受清晨柔和的光线。整体游览时间建议预留至少3.5至4小时，节奏要不紧不慢。我们的路线将遵循“由荒入精，由外至内”的哲学：先从最具冲击力的中世纪废墟外部开始，感受其原始的苍凉；然后进入废墟内部探索攀爬；稍事休息后，再步入精致的文艺复兴宫殿，体验秩序的复苏；最后在周边自然中回味。这样的顺序能让你清晰感受到时光的流动和文明的嬗变，情感体验会有强烈的起伏和对比。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`中世纪废墟内部台阶陡峭且湿滑，务必穿着防滑性能好的结实鞋子，女士请避免高跟鞋或凉鞋。宫殿内部禁止使用闪光灯拍照，且部分房间地板为原始老木板，行走时请轻声。城堡范围内手机信号可能不稳定，建议提前下载好地图或相关信息。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从停车场沿着林荫小路步行上山，让那座分裂的双子城堡在树影缝隙间缓缓露出全貌，制造第一个视觉震撼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`毫不犹豫地先左转，沿着布满青苔的古老步道环绕中世纪废墟外围，用手掌感受不同年代石墙那冰凉而粗糙的质地差异。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从指定的安全入口进入废墟内部，小心翼翼地爬上通往主塔顶层的螺旋石阶，在每一个箭窗停留，想象守卫昔日望出去的风景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在主塔残存的最高平台上深吸一口气，360度环视卢森堡东部连绵的森林与田野，这是城堡选址战略意义的直观证明。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从废墟出来，在连接两座建筑的绿地长椅上坐一会儿，喝口水，完成从“中世纪战士”到“文艺复兴访客”的心理过渡。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开文艺复兴宫殿那扇厚重的木门，立刻被内部修复一新的宁静氛围、抛光木地板的光泽和墙上的家族肖像画所包围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在宫殿一层的古老酒窖停留，这里被改造成了一个小型品酒室，可以品尝用城堡周边葡萄酿造的当地白葡萄酒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开建筑主体，不要急着走，绕到宫殿后面的法式花园遗迹和池塘边散步，这里是观察两座建筑侧面剪影对比的绝佳位置。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`废墟东侧仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午三点后，阳光西斜，站在废墟东面的草地上仰拍，能将爬满藤蔓的残破主塔与后方完整的文艺复兴宫殿尖顶一同纳入画面，形成毁灭与新生的强烈构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`宫殿长廊窗景`}</h4>
                  <p className="text-sm text-gray-700">{`上午十一点左右，阳光能恰好洒入宫殿二楼的长廊，站在长廊尽头向窗户方向拍摄，能捕捉到光线在古老地板上拉出的长长光影，以及窗外绿意盎然的框景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`连接区域的拱门框架`}</h4>
                  <p className="text-sm text-gray-700">{`站在连接中世纪废墟与宫殿的那道石砌拱门下，以拱门为画框，向外拍摄远处的森林和天空，这个机位巧妙利用了建筑本身的结构，讲述“穿越”的故事。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`废墟主塔内部旋梯`}</h4>
                  <p className="text-sm text-gray-700">{`利用手机的超广角功能，站在螺旋石阶梯的底部向上拍摄，能拍出岩石层层盘旋、通向一线光明的极具张力和纵深感的照片。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`池塘倒影视角`}</h4>
                  <p className="text-sm text-gray-700">{`黄昏前，走到宫殿后方的小池塘对岸，利用平静的水面拍摄城堡群的倒影，此时的天空色彩丰富，能为照片增添静谧而梦幻的氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄废墟时，可以刻意寻找岩石的粗糙纹理、藤蔓的缠绕细节、光影在残墙上的切割，这些特写比全景更能传递时间的质感。请注意尊重场所，不要为了拍照攀爬禁止区域或踩踏受保护的遗迹部分。飞无人机在此地通常被严格禁止，请勿尝试。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`小镇家庭民宿`}</h4>
                  <p className="text-sm text-blue-800">{`博福尔镇上由祖宅改造的温馨民宿，主人会为你准备装满当地食材的欢迎篮，夜晚安静得只能听到教堂钟声和风声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`森林边缘设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`开车约10分钟，位于穆勒塔尔（小瑞士）区域的设计师酒店，房间拥有全景落地窗，直面连绵的森林树冠，充满现代与自然的对话。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`埃希特纳赫古镇酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`住在15分钟车程外的世界文化遗产小镇埃希特纳赫，选择一栋沿河的历史建筑酒店，夜晚可以漫步在古镇鹅卵石街道上，体验更丰富的餐饮选择。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`田园奢华庄园`}</h4>
                  <p className="text-sm text-purple-800">{`对于追求极致体验的旅行者，附近有改建自18世纪贵族庄园的五星级酒店，坐拥大片私人公园和葡萄园，提供米其林级别的餐饮和水疗服务，让你彻底沉浸在卢森堡的宁静奢华之中。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`卢森堡乡村的住宿资源不算特别充裕，尤其是在旅游旺季（春末至秋初），建议至少提前一个月预订。博福尔本地非常安全，但夜间照明较少，如果住在镇上，建议携带一个小手电以备散步之需。选择埃希特纳赫的住宿则意味着更热闹的夜晚和更多的餐厅选择。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开博福尔很久以后，脑海里反复回放的，不是某个具体的房间或塔楼，而是那种弥漫在空气中的、巨大的“时间差”。站在那片草地上，左耳仿佛还能听见废墟里传来的、想象中的兵器交击与战马嘶鸣，右耳却已萦绕着宫殿窗口飘出的、虚幻的舞会乐章与酒杯轻碰声。这种时空叠加的眩晕感，是任何一本历史书或纪录片都无法给予的。它让你真切地触摸到，历史不是一条平滑向前的直线，而是一层层堆叠、覆盖、有时又并置的复杂地层。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个人人追逐崭新与完美的时代，博福尔的价值恰恰在于它的“不完整”和“矛盾”。它没有试图修复一切，假装辉煌从未陨落；也没有彻底抛弃过去，只展示光鲜的一面。它诚实地保留了毁灭的痕迹，也精心呵护着重生的果实。这种坦诚，赋予它一种惊人的生命力。它告诉我们，文明的故事既有高歌猛进的建造，也有默默承受的衰败，而两者的共存，才是完整的真相。对于真正渴望深度的旅人来说，这里不是一个打卡点，而是一个沉思的驿站。在这里，你与自己关于时间、永恒与人类足迹的对话，会比你在任何一座完美无瑕的宫殿里所进行的，都要深刻得多。这，或许就是废墟与宫殿并存的博福尔，留给世界最珍贵的一份礼物。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
