import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '蒙特布兰克 Montblanc｜探访圣乔治屠龙传说之地与1.5公里完美城墙 - 最佳欧洲景点',
  description: '车子刚拐出最后一片橄榄树林，那座小镇就像从一本褪色的中世纪手抄本里直接跳出来的一样，猝不及防地撞进眼帘。它不是平铺在大地上，而是“长”在一座柔和的山丘上。一整圈暗金色的石头城墙，像给山丘戴上了一顶巨大而粗粝的王冠，数十座高高低低的方塔、圆塔，就是王冠上坚硬的宝石。那一刻，时间仿佛“咔嗒”一声被拨回了',
}

export default function MontblancMedievalWalledTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '西班牙', href: '/destinations/europe' },
            { label: '蒙特布兰克', href: '/destinations/europe' },
            { label: '蒙特布兰克', href: '/attractions/montblanc-medieval-walled-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`蒙特布兰克・Montblanc・西班牙・蒙特布兰克`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚拐出最后一片橄榄树林，那座小镇就像从一本褪色的中世纪手抄本里直接跳出来的一样，猝不及防地撞进眼帘。它不是平铺在大地上，而是“长”在一座柔和的山丘上。一整圈暗金色的石头城墙，像给山丘戴上了一顶巨大而粗粝的王冠，数十座高高低低的方塔、圆塔，就是王冠上坚硬的宝石。那一刻，时间仿佛“咔嗒”一声被拨回了七百年前。空气中飘着干热的尘土味、远处松林的气息，还有一种石头被烈日烘烤后特有的、暖洋洋的矿物味道。
把车停在城墙外的现代街区，步行穿过圣米格尔门低矮的拱洞，就像穿过一道时间的阀门。门洞内壁的石块被无数代人的手、牲畜的脊背、马车的轮毂磨得油光水亮，凉意瞬间包裹全身。门内，世界变了。喧闹消失了，只剩下自己的脚步声在窄巷里清脆的回响。主街两旁是蜂蜜色的石头房子，带着精致的哥特式窗户和满是铁锈的阳台，阳台上垂下的天竺葵开得正烈，红得像要滴下来。 locals 的生活节奏慢得让人心静，老人在门洞下打着盹儿，主妇从二楼窗口探出身子和街对面的邻居聊着天，那声音在石壁间轻轻碰撞、回荡。这里不是一个被供起来的博物馆，而是一个依然呼吸着、心跳着的活生生的家。
它的核心魅力，就在于这种“完整感”。你不只是来看一座孤零零的城堡或教堂，你是走进了一个被时光胶囊完整封存的中世纪宇宙。那1.5公里连绵的城墙，不是背景，而是这个宇宙的边界和骨架。你可以亲手触摸那些冰凉的巨石，想象士兵在上面巡逻；可以仰望塔楼，猜测哪里是箭孔，哪里曾倾倒过滚烫的油。而圣乔治屠龙的传说，为这片坚硬的石头世界注入了一股滚烫的、英雄主义的血液。在这里，龙不是遥不可及的童话，它就蛰伏在城墙外的山谷里，而勇气与守护的故事，就铭刻在每一块城砖上，流淌在每个加泰罗尼亚人的文化基因里。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子刚拐出最后一片橄榄树林，那座小镇就像从一本褪色的中世纪手抄本里直接跳出来的一样，猝不及防地撞进眼帘。它不是平铺在大地上，而是“长”在一座柔和的山丘上。一整圈暗金色的石头城墙，像给山丘戴上了一顶巨大而粗粝的王冠，数十座高高低低的方塔、圆塔，就是王冠上坚硬的宝石。那一刻，时间仿佛“咔嗒”一声被拨回了七百年前。空气中飘着干热的尘土味、远处松林的气息，还有一种石头被烈日烘烤后特有的、暖洋洋的矿物味道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "把车停在城墙外的现代街区，步行穿过圣米格尔门低矮的拱洞，就像穿过一道时间的阀门。门洞内壁的石块被无数代人的手、牲畜的脊背、马车的轮毂磨得油光水亮，凉意瞬间包裹全身。门内，世界变了。喧闹消失了，只剩下自己的脚步声在窄巷里清脆的回响。主街两旁是蜂蜜色的石头房子，带着精致的哥特式窗户和满是铁锈的阳台，阳台上垂下的天竺葵开得正烈，红得像要滴下来。 locals 的生活节奏慢得让人心静，老人在门洞下打着盹儿，主妇从二楼窗口探出身子和街对面的邻居聊着天，那声音在石壁间轻轻碰撞、回荡。这里不是一个被供起来的博物馆，而是一个依然呼吸着、心跳着的活生生的家。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的核心魅力，就在于这种“完整感”。你不只是来看一座孤零零的城堡或教堂，你是走进了一个被时光胶囊完整封存的中世纪宇宙。那1.5公里连绵的城墙，不是背景，而是这个宇宙的边界和骨架。你可以亲手触摸那些冰凉的巨石，想象士兵在上面巡逻；可以仰望塔楼，猜测哪里是箭孔，哪里曾倾倒过滚烫的油。而圣乔治屠龙的传说，为这片坚硬的石头世界注入了一股滚烫的、英雄主义的血液。在这里，龙不是遥不可及的童话，它就蛰伏在城墙外的山谷里，而勇气与守护的故事，就铭刻在每一块城砖上，流淌在每个加泰罗尼亚人的文化基因里。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`蒙特布兰克`} />
                <InfoRow label="英文名称" value={`Montblanc`} />
                <InfoRow label="正式名称" value={`Montblanc Medieval Walled Town`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`蒙特布兰克`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`加泰罗尼亚地区保存最完好、防御体系最完整的中世纪围城之一，也是圣乔治屠龙传说的文化发源地与核心象征。`} />
                <InfoRow label="建筑特色" value={`一座雄踞于山坡上的石造堡垒，拥有全长1.5公里、基本连贯的锯齿状城墙与多达31座形态各异的防御塔楼，构成令人过目不忘的天际线。`} />
                <InfoRow label="建筑风格" value={`以罗曼式为基础，融合了哥特式军事建筑元素的加泰罗尼亚中世纪防御建筑典范。`} />
                <InfoRow label="文化价值" value={`是加泰罗尼亚民族精神与传奇（圣乔治节）的活态载体，完美体现了中世纪城镇规划、社区生活与防御需求的紧密结合。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城墙及塔楼外围可全天24小时自由漫步参观。进入部分修复的塔楼内部（如圣乔治塔）或登上城墙步行道，需参考市政旅游局组织的导览团时间，通常为工作日上下午各一场，周末场次增加，冬季（11月至次年2月）部分塔楼可能关闭维护。小镇内的教堂和博物馆有独立开放时间，一般为周二至周六10:00-14:00 & 16:00-19:00，周日仅上午开放，周一闭馆。重大节日如圣乔治节（四月）期间，所有设施开放时间延长。`} />
              <InfoRow label="门票价格" value={`漫步古城街道及观赏外围城墙完全免费。参加官方导游带领的“城墙与塔楼”深度游览团，票价约8-10欧元，包含进入2-3座塔楼内部。学生及65岁以上老人享有约2欧元优惠。12岁以下儿童在成人陪同下免费。小镇内的圣玛利亚教堂参观自愿捐赠约2欧元。建议在旅游信息中心购买“蒙特布兰克通票”，约12欧元，包含导览团和主要博物馆门票。`} />
              <InfoRow label="地址" value={`Plaça dels Angels, 1, 43400 Montblanc, Tarragona, Spain`} />
              <InfoRow label="交通方式" value={`从巴塞罗那埃尔普拉特机场（BCN）出发，最佳方式是租车自驾，沿AP-7高速公路向西南行驶约110公里，从“Montblanc”出口下，全程约1小时15分钟，沿途风景优美。若乘坐公共交通，先从机场乘坐火车或巴士到巴塞罗那Sants火车站，换乘前往莱里达（Lleida）方向的R14或R15区域火车，在“Montblanc”站下车，车程约1小时40分钟，班次每小时1-2班。火车站距离古城入口圣米格尔门约1.5公里，可步行（20分钟上坡路）或乘坐等候的出租车（约5欧元）。从塔拉戈纳市出发自驾约45分钟，火车约30分钟。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "蒙特布兰克的故事，始于一片空旷的山丘和一段迫在眉睫的恐惧。公元9世纪后期，随着基督教王国从摩尔人手中逐步收复伊比利亚半岛东北部，法兰克国王“秃头”查理为了巩固这片新边界，下令在此建立防御据点。最初，它只是几座简陋的瞭望塔和围绕教堂搭建的几户人家，目的是监视弗朗科里河河谷，那个时代，山谷深处可能随时会冒出摩尔人的骑兵。它的名字“Montblanc”（白色的山）或许就源于那时山丘上裸露的白色石灰岩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但真正让蒙特布兰克脱胎换骨的，是12世纪阿拉贡国王阿方索一世颁发的一纸特许状。这位雄心勃勃的国王需要忠诚而强大的前线堡垒，他赋予了定居在这里的居民特殊的权利和自治权，吸引了大批工匠、商人和骑士家族前来。石头房子如雨后春笋般沿着山势层层叠叠地建起来，社区形成了。到了13世纪，随着边境线南推，直接的军事威胁减小，但地方贵族间的冲突和匪患依然存在。于是，整个社区决定做一件了不起的事：为他们共同的家，修筑一道不可逾越的屏障。这不是国王的命令，而是市民集体的意志。他们集资、出力，花了近一个世纪的时间，用本地采石场运来的坚固岩石，一尺一寸地垒起了那道全长1.5公里、拥有31座塔楼和4座主城门的宏伟城墙。这道墙不仅防外敌，更定义了“我们”与“外面”的世界，凝聚了一个城镇的认同。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而大约在同一时期，一个传奇故事悄然降临，并永远地改变了这个地方的精神气质。那就是圣乔治屠龙救公主的传说。虽然圣乔治是泛基督教世界的圣徒，但在加泰罗尼亚，这个故事找到了它最确切的“发生地”。传说中，恶龙就盘踞在蒙特布兰克城墙外的洞穴里（今天还能指认“龙洞”的位置），为祸乡里，要求每日献祭少女。当轮到公主时，骑士圣乔治英勇出现，经过激战，最终用长矛刺死恶龙。龙血流淌之地，长出了一朵鲜红的玫瑰，乔治将其献给了公主。这个融合了勇气、牺牲与浪漫的故事，完美契合了这片土地上人们对抗自然与人为威胁的记忆。蒙特布兰克欣然拥抱了这个传说，它成为了城镇的守护神话，圣乔治节（Sant Jordi）也成为了这里乃至整个加泰罗尼亚最盛大、最富情感的节日。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城墙见证了后来的风风雨雨：14世纪的瘟疫黑死病曾让这里十室九空；15世纪的内战烽火在墙面上留下了炮击的凹痕；随着火器的发明，高耸的石墙渐渐失去了军事意义，一度面临被拆除的命运，因为人们觉得它阻碍了城镇向平原扩张。幸运的是，一部分墙体被整合进了新建的民居之中，得以保存。真正的转折点发生在20世纪，人们重新发现了它的历史与美学价值。一场缓慢而精心的修复运动开始了，不是为了把它变成迪士尼乐园，而是为了加固这些沧桑的骨骼，清理被堵塞的通道，让后人能重新行走其上，感受那段历史。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的蒙特布兰克深度游，需要一整天的时间（至少6-8小时），并强烈建议安排过夜，以感受清晨与黄昏古城独有的静谧魔法。建议在上午9点前抵达，此时旅游团尚未涌入，阳光柔和，最适合拍照和沉浸式漫步。游览节奏宜慢不宜快，核心思路是“先外后内，先高后低”：上午趁体力好，先完成部分城墙环线徒步，从外部和顶部把握古城的全貌与气势；下午深入迷宫般的老街巷，探索细节、传说和当地生活。傍晚则是等待金色夕阳洒满城墙的绝佳时刻。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿最舒适耐磨的平底鞋，古城内全是高低起伏的鹅卵石路和台阶，高跟鞋是“酷刑”。夏季来访务必戴帽子和备足水，城墙上游览毫无遮阴，日照极其强烈。老城内餐馆价格合理，但晚上打烊较早（加泰罗尼亚风格晚9点后才是正经晚餐时间），规划好用餐时间。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从最主要的圣米格尔门进入，让自己成为今天第一批踏过那光滑石板路的访客，静静聆听老城苏醒的声音。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着主街卡尔梅大街向上漫步，在旅游局拿份地图，然后毫不犹豫地先爬上圣乔尔迪塔附近的城墙段，让整个红色瓦顶的老城在脚下铺开。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着城墙步行道向东漫步至圣安东门，仔细观察不同塔楼的构造差异和墙外曾经是护城河的田园风光。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城墙下来后，钻进主街旁岔开的一条窄巷，去寻找那口传说中的“公主井”，想象被献祭的公主曾在此哭泣。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`中午前拜访高大的圣玛利亚教堂，在哥特式殿堂的阴凉中静坐片刻，寻找与圣乔治传说相关的雕塑与画作。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在老广场找一家有遮阳棚的餐厅享用漫长的加泰罗尼亚午餐，必点当地产的葡萄酒和“圣乔治”蘑菇。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午穿梭于如血管般交织的次要街巷，比如工匠街，留意门楣上的古老徽章和阳台上繁花似锦的小世界。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前一小时，再次登上西侧的城墙（如靠近圣米格尔门那段），找一块城垛坐下，看夕阳如何将整圈城墙和塔楼染成燃烧般的金红色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城西北角葡萄园远眺全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前两小时，从C-37公路驶向古城方向，在距离约1公里处的一片葡萄田边停车，可以用长焦镜头拍到城墙、塔楼与背后群山层叠的壮丽全景，阳光正好侧照在墙面上。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣米格尔门拱洞框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点前，阳光能照进城门洞，站在门内向外拍，用深邃的拱洞作为天然画框，框住门外现代化的街景和远山，形成强烈的时光对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣乔尔迪塔城墙转角制高点`}</h4>
                  <p className="text-sm text-gray-700">{`登上此段城墙，将相机放在垛口上，向南拍摄卡尔梅大街蜿蜒伸向教堂的经典街景，两旁是密密麻麻的红色屋顶，最佳光线在下午三四点。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`老广场钟楼与生活瞬间`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，坐在广场咖啡馆，用中焦段捕捉广场上当地人聊天、孩子嬉戏的生活场景，以古老的钟楼或石拱廊作为背景，画面充满故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`“龙洞”方向仰拍城墙`}</h4>
                  <p className="text-sm text-gray-700">{`从古城南侧下方的小路，抬头仰拍雄踞于山崖之上的城墙和塔楼，角度险峻震撼，傍晚时分城墙被夕阳照亮而背景是深蓝色天空时效果最佳。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机拍摄前务必查询当地法规，古城及城墙周边可能有空域限制。拍摄当地居民，尤其是老人，请务必先微笑示意获得默许，尊重他们的隐私。室内博物馆和教堂内部通常禁止使用闪光灯和三脚架。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`城墙内的历史宅邸`}</h4>
                  <p className="text-sm text-blue-800">{`选择一栋由14世纪贵族宅邸修复的精品酒店，睡在古老的石墙和木梁之下，夜晚能听到广场传来的隐约钟声，清晨打开窗就是无人的石板巷。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`山脚下带泳池的乡村酒店`}</h4>
                  <p className="text-sm text-green-800">{`对于自驾者，古城外不远处常有由农庄改造的舒适酒店，拥有宁静的花园和泳池，白天探索古城后，晚上回来享受田园静谧和星空。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`老城门旁的舒适民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`住在圣米格尔门或圣安东门附近由家庭经营的民宿，主人能告诉你地图上没有的秘闻，早餐会吃到自家果园的水果和新鲜压榨的果汁。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`城外现代区的性价比之选`}</h4>
                  <p className="text-sm text-purple-800">{`如果预算极其有限，城墙外步行10分钟的现代街区有不少干净简洁的公寓式酒店，价格亲民，且停车方便，是实用的落脚点。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果计划在四月圣乔治节期间来访，必须提前至少三个月预订住宿，那是一年中最火爆的时候。古城内的住宿通常不设电梯，且房间可能不大，追求的是历史氛围而非豪华设施。夏季（7-8月）非常炎热，确认住宿是否有空调至关重要。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开蒙特布兰克许久，闭上眼睛，脑海里最先浮现的，不是某座具体的塔楼，也不是某幅教堂壁画，而是一种整体的、沉甸甸的“存在感”。它不像那些喧嚣的世界级景点，用辉煌的单一建筑轰炸你的感官，而是用一圈沉默的石头城墙，为你圈出了一段完整的时间。在这里，你不需要匆忙赶场，只需要沿着城墙的走向，慢慢地走，让手心贴上那些被晒得发热又或是沁着夜凉的石块。每一步，都踩在历史真实的肌理上。你会突然理解，中世纪的人们对“安全”和“社区”的渴望有多么具体——那一堵墙，就是他们全部的世界，是生老病死、爱恨情仇的舞台边界。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求效率、一切都在快速迭代的世界里，蒙特布兰克提供了一种罕见的“确定性”。石头城墙依然在那里，传说依然在被讲述，春天到来时，玫瑰依然会开，书籍依然会被赠送。它告诉我们，有些东西是可以穿越时间的洪流留存下来的，不是作为废墟，而是作为依然跳动的心脏。对于每一位热爱深度游的旅人来说，这里不是打卡点，而是一次时间旅行的邀请，一场关于“守护”之意义的沉思。它让你暂时脱离碎片化的当下，沉浸在一个完整的故事里，然后带着那份由石头和传说共同赋予的沉静力量，回到自己的生活中。这，或许就是旅行的最高意义。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/frigiliana-guide" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    弗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">弗里希利亚纳</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Frigiliana</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/baeza-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴埃萨古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Baeza Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/royal-monastery-of-santa-maria-de-guadalupe" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    瓜
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">瓜达卢佩圣玛利亚皇家修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Royal Monastery of Santa María de Guadalupe</p>
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
