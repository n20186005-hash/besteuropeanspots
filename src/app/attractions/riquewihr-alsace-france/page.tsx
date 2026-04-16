import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '里屈埃维 Riquewihr｜法国童话小镇 被时光凝固的葡萄酒乡珍宝 - 最佳欧洲景点',
  description: '推开那道古老的、带着厚重铁饰的城门，你就把21世纪甩在了身后。时间在这里不是向前，而是像藤蔓一样，温柔地盘绕回旋。第一眼是色彩的洪流——鹅黄、淡粉、天蓝、翠绿，一栋栋歪歪扭扭的木筋墙房子肩并肩挤在狭窄的铺石路两旁，仿佛喝醉了酒的甜蜜巨人。午后的阳光斜斜地切下来，把木梁上几百年的雕花阴影拉得老长，投在...',
}

export default function RiquewihrAlsaceFrancePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '里屈埃维', href: '/attractions/riquewihr-alsace-france' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`里屈埃维・Riquewihr・法国・里屈埃维`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`推开那道古老的、带着厚重铁饰的城门，你就把21世纪甩在了身后。时间在这里不是向前，而是像藤蔓一样，温柔地盘绕回旋。第一眼是色彩的洪流——鹅黄、淡粉、天蓝、翠绿，一栋栋歪歪扭扭的木筋墙房子肩并肩挤在狭窄的铺石路两旁，仿佛喝醉了酒的甜蜜巨人。午后的阳光斜斜地切下来，把木梁上几百年的雕花阴影拉得老长，投在脚下被岁月打磨得光滑如镜的石板路上。空气里有股复杂的甜香，是刚刚出炉的“库格霍夫”蛋糕的黄油味，是沿街窗台上天竺葵的泥土气息，但更浓郁、更根植于这片土地的，是从每一条小巷深处、从每一扇厚重木门后幽幽飘来的葡萄酒香，那是橡木桶、成熟葡萄和漫长时光共同发酵的味道。
耳朵里听到的声音是慵懒而富有生活韵律的。不是游客的喧嚣——虽然这里从不缺访客，而是更本真的声响：二楼某扇窗户被推开时木质窗框发出的“吱呀”声，街角酒窖里老板用阿尔萨斯方言和熟客闲聊的模糊低语，还有你的鞋跟敲在古老路面上发出的清脆回响。你会看到一位老奶奶，正小心翼翼地从屋里搬出一盆新的鲜花，挂在早已被花朵压弯的铁钩上；酒庄的伙计推着满载空酒瓶的小推车，车轮碾过石板路的咕噜声由远及近。在这里，美丽不是被供奉的展品，它就是日常生活本身，是每一扇擦得锃亮的窗户，每一块精心维护的木雕。
它的核心魅力，在于这种惊人的、近乎固执的“完整”。它不是孤零零的一两座古迹，而是一整个完好的生态。城墙还在，城门还在，护城河（如今是花园）的轮廓还在。你手里握着的，不是一张博物馆门票，而是一把开启一个活着的、呼吸着的十六世纪的钥匙。这里的居民依然住在这些“古董”房子里，经营着祖传的酒窖，维护着祖先留下的雕刻。这种持续的生命力，让它的美超越了明信片般的表象，有了温度和心跳。你不是在参观一个景点，而是短暂地闯入了一个被时光格外眷恋的平行世界，一个关于美、传统与乡土之情的、具体而微的乌托邦。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`推开那道古老的、带着厚重铁饰的城门，你就把21世纪甩在了身后。时间在这里不是向前，而是像藤蔓一样，温柔地盘绕回旋。第一眼是色彩的洪流——鹅黄、淡粉、天蓝、翠绿，一栋栋歪歪扭扭的木筋墙房子肩并肩挤在狭窄的铺石路两旁，仿佛喝醉了酒的甜蜜巨人。午后的阳光斜斜地切下来，把木梁上几百年的雕花阴影拉得老长，投在脚下被岁月打磨得光滑如镜的石板路上。空气里有股复杂的甜香，是刚刚出炉的“库格霍夫”蛋糕的黄油味，是沿街窗台上天竺葵的泥土气息，但更浓郁、更根植于这片土地的，是从每一条小巷深处、从每一扇厚重木门后幽幽飘来的葡萄酒香，那是橡木桶、成熟葡萄和漫长时光共同发酵的味道。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`耳朵里听到的声音是慵懒而富有生活韵律的。不是游客的喧嚣——虽然这里从不缺访客，而是更本真的声响：二楼某扇窗户被推开时木质窗框发出的“吱呀”声，街角酒窖里老板用阿尔萨斯方言和熟客闲聊的模糊低语，还有你的鞋跟敲在古老路面上发出的清脆回响。你会看到一位老奶奶，正小心翼翼地从屋里搬出一盆新的鲜花，挂在早已被花朵压弯的铁钩上；酒庄的伙计推着满载空酒瓶的小推车，车轮碾过石板路的咕噜声由远及近。在这里，美丽不是被供奉的展品，它就是日常生活本身，是每一扇擦得锃亮的窗户，每一块精心维护的木雕。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，在于这种惊人的、近乎固执的“完整”。它不是孤零零的一两座古迹，而是一整个完好的生态。城墙还在，城门还在，护城河（如今是花园）的轮廓还在。你手里握着的，不是一张博物馆门票，而是一把开启一个活着的、呼吸着的十六世纪的钥匙。这里的居民依然住在这些“古董”房子里，经营着祖传的酒窖，维护着祖先留下的雕刻。这种持续的生命力，让它的美超越了明信片般的表象，有了温度和心跳。你不是在参观一个景点，而是短暂地闯入了一个被时光格外眷恋的平行世界，一个关于美、传统与乡土之情的、具体而微的乌托邦。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`里屈埃维`} />
                <InfoRow label="英文名称" value={`Riquewihr`} />
                <InfoRow label="正式名称" value={`Riquewihr`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`里屈埃维`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`阿尔萨斯葡萄酒之路上最璀璨的明珠，一座自16世纪以来外观几乎未曾改变的中世纪防御城镇。`} />
                <InfoRow label="建筑特色" value={`完美保存了木筋墙（半木结构）房屋的密集街区，房屋色彩斑斓，装饰着繁复的雕刻和鲜花。`} />
                <InfoRow label="建筑风格" value={`典型的阿尔萨斯文艺复兴风格，融合了德国木框架建筑的精巧与法国装饰艺术的浪漫。`} />
                <InfoRow label="文化价值" value={`一个活着的博物馆，不仅展示了建筑，更延续了以葡萄酒为核心的传统社区生活与文化。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇本身为开放式居住区，全年全天可自由漫步。镇内主要博物馆及部分历史建筑开放时间各异，一般夏季（4月至10月）为10:00-12:30，14:00-18:00；冬季开放时间缩短或部分关闭。多数家庭酒窖和品酒屋开放时间为10:00-12:00，14:00-18:00。建议行前查询具体场馆的官网或留意店铺门上的营业牌。`} />
              <InfoRow label="门票价格" value={`进入里屈埃维古城本身完全免费。参观镇内博物馆（如杜德博物馆、地方历史博物馆）通常需要购买门票，成人票价约5-7欧元，有学生及团体优惠。参加品酒体验或酒窖导览需单独付费，价格从10欧元（基础品尝）到数十欧元（精品酒庄深度体验）不等。`} />
              <InfoRow label="地址" value={`1 Rue du Général de Gaulle, 68340 Riquewihr, France`} />
              <InfoRow label="交通方式" value={`最近的国际机场是斯特拉斯堡机场（SXB）或巴塞尔 - 米卢斯 - 弗赖堡欧洲机场（BSL）。从斯特拉斯堡火车站乘坐区域列车（TER）至科尔马（Colmar），车程约30分钟，班次频繁。从科尔马火车站外乘坐106路公交（Transports en Commun de Colmar et Environs），方向“Riquewihr / Hunawihr”，约25分钟即可直达里屈埃维小镇入口的停车场，班次约每小时1-2班，周末和节假日会减少，务必提前查询时刻表。自驾是最方便的方式，小镇外有大型收费停车场（P1， P2），步行2分钟即可进入古城。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要听懂里屈埃维的故事，你得先听懂葡萄藤的语言。它的命运，从一开始就和一种神奇的浆果——雷司令葡萄——紧紧缠绕在一起。早在公元8世纪，这里就有了葡萄种植的痕迹，但真正的转折点是在13世纪，它成为了符腾堡公爵的领地。公爵们很有眼光，看中了这个山谷肥沃的土壤和向阳的坡地，于是赐予了它“自由城”的特权，鼓励葡萄酒贸易。到了16世纪，里屈埃维迎来了它的黄金时代。那些你现在看到的、美得令人窒息的多彩木筋墙房子，大多就建于这个时期。它们不是贵族的宫殿，而是富裕的葡萄酒商和桶匠的宅邸。房子越高大，雕花越繁复，就证明主人的生意越成功。你能在门楣上看到葡萄串的雕刻，在窗棂边发现酒桶的图案，整座小镇就是一部用木头和石头写成的葡萄酒商业史诗。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，财富也引来了觊觎。为了保卫他们的葡萄园和美酒，小镇修建了坚固的防御工事，我们今天看到的雄伟的城门和部分城墙，就是那个动荡时代的遗产。它见证了无数次冲突，在阿尔萨斯这片法德反复争夺的土地上，它像一个沉默而坚韧的哨兵。真正让它免于毁灭的传奇，发生在第二次世界大战末期。1944年底，德军在撤退时，奉命炸毁这座具有战略意义的小镇。据说，是一位当地的葡萄酒酿造师，冒着生命危险，深夜偷偷切断了通往炸药的引线。这个故事在镇里口耳相传，虽然细节已不可考，但它象征着当地人对家园深入骨髓的爱。当硝烟散去，人们走出地窖，发现他们的房子、他们的街道奇迹般地幸存了下来，只是窗台上的花枯萎了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战后，法国政府将里屈埃维列为“法国最美乡村”，并投入巨资进行极其精心的修复和保护。但这里的保护不是把它们变成冰冷的博物馆，而是遵循“活着”的原则。政府制定了严苛的规定：任何外墙的修缮必须使用传统材料和工艺，颜色必须从历史色谱中挑选。于是，你看到的面包房，可能已经烤了三百年的面包；你进去品酒的那个酒窖，地下的拱顶酒窖可能建于1732年，而地上部分依然是家族在经营。现代化被巧妙地隐藏起来：电缆埋在地下，卫星天线绝不允许出现在临街的屋顶。时间在这里仿佛被施了魔法，走得异常缓慢。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天，当你漫步其中，你走过的每一步，其实都踩在层层叠叠的历史上。脚下石板路的下方，可能还有更古老的中世纪路面；你手扶的那根发黑的木梁，可能曾见证过三十年战争的难民，也听过庆祝丰收的欢歌。它的历史不是写在牌子上的冰冷文字，而是弥漫在空气中的酒香，是木头上阳光的温度，是居民眼神里那份对传统的从容自豪。它没有变成主题公园，因为它从未停止生活。每一瓶新酿的葡萄酒，都是为这部延续了八百年的故事，写下新的、充满希望的一页。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`理想的游览应该始于早上九点之后，此时旅游巴士尚未抵达，小镇刚刚苏醒，光线柔和，是拍照和感受宁静氛围的黄金时间。建议安排至少5-6小时进行深度探索，节奏宜慢不宜快，核心在于“漫步”与“体验”，而非“打卡”。路线设计为一条顺时针的环形漫步，从主城门进入，先领略主街的繁华与建筑精华，然后钻入侧面的小巷探索更生活化的角落，参观博物馆了解历史，务必安排一场品酒体验连接古今，最后登上城墙遗迹俯瞰全景，在黄昏时分结束旅程。这样既能抓住最美光线，又能避开中午主干道的人流高峰，全方位沉浸式感受小镇的昼夜韵律。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避免周六下午和周日全天前往，那是本地家庭和附近居民出游的高峰，主街会非常拥挤。穿着绝对舒适的平底鞋，那些古老的石板路虽然美丽，但对高跟鞋和行李箱轮子极不友好。对热情邀请你进店品酒的店主报以微笑，但无需有压力，选择那些有家庭照片和历史物件陈列的店，体验会更地道。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从标志性的“上层门”进入，让那道厚重的拱门将你正式迎入这个中世纪的世界。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着共和国街慢慢向前走，仰头细细品味每一栋房屋不同的木雕主题——天使、葡萄、星辰或是古怪的兽脸。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拐进一条安静的小巷，比如“酿酒师街”，听自己的脚步声在两侧高墙间回响，偷窥居民精心打理的内院花园。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进杜德博物馆，在这座最华丽的文艺复兴宅邸里，想象十六世纪葡萄酒商巨贾的日常生活与奢华品味。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一家家族经营的小酒窖推门而入，在昏暗凉爽的地下品酒室，让第四代庄主为你讲述风土并品尝几种不同等级的雷司令。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从“下层门”附近的台阶爬上残留的城墙步道，沿着曾经的防御工事走一段，从高处凝视那片如绿色海洋般环绕小镇的葡萄园。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在黄昏降临时回到主街，店铺陆续打烊，游客散去，此时小镇重归本地居民，坐在广场长椅上看暖黄的灯光逐一亮起，点亮每一扇彩窗。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城门内仰拍街道`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或午后稍晚，站在“上层门”内侧的拱门下，用广角镜头框住向内延伸的、两侧布满彩色房屋的共和国街，等待一个没有行人的瞬间，拍出时空隧道的纵深感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“小偷塔”侧面的小巷`}</h4>
                  <p className="text-sm text-gray-700">{`从共和国街拐进通往小偷塔的小巷，下午的阳光会照亮一侧爬满藤蔓的石墙和塔身，用长焦镜头压缩空间，捕捉光影在古老石材上切割出的几何图案。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`某扇鲜花的窗前`}</h4>
                  <p className="text-sm text-gray-700">{`不必刻意寻找，漫步时留意那些花朵开得最盛的窗台，以木筋墙为背景，将盛放的天竺葵或牵牛花作为前景焦点，营造出“画中画”的浪漫构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城墙步道俯瞰全景`}</h4>
                  <p className="text-sm text-gray-700">{`从“下层门”附近的城墙步道向西拍摄，最佳时间是日落前半小时，金黄的阳光洒满全镇的屋顶和远处的葡萄园，用中焦段捕捉小镇与自然交融的田园诗画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`杜德博物馆庭院`}</h4>
                  <p className="text-sm text-gray-700">{`参观博物馆时，别忘了在其内院抬头拍摄，将文艺复兴风格的华丽雕花长廊与中央的一小片天空一同纳入镜头，展现建筑内部的精巧与静谧。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`阿尔萨斯地区居民注重隐私，拍摄美丽的房屋外部毫无问题，但请避免将镜头直接对准屋内或院中休息的居民。利用雨后湿润的石板路，它能反射灯光和颜色，让照片色彩更加饱和、生动。不妨尝试拍摄一些细节：门环上的锈迹、木雕上的裂纹、酒窖门上的古老锁具，这些特写能讲述更深层的故事。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`葡萄园环绕的宁静民宿`}</h4>
                  <p className="text-sm text-blue-800">{`预订小镇边缘或附近葡萄园山丘上的农家民宿，清晨在鸟鸣中醒来，开窗便是无尽的葡萄藤蔓和薄雾，主人通常会奉上自家酿造的欢迎酒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老城中心的家庭式公寓`}</h4>
                  <p className="text-sm text-green-800">{`租住一栋经过现代化改造的历史木筋墙房屋顶层公寓，拥有裸露的原始木梁和小巧的露台，傍晚当游客散去，你便拥有独享一座空城的特权。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`科尔马市的精品设计酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`如果追求更丰富的夜生活和餐饮选择，可以住在一刻钟车程外的科尔马，那里有由古老建筑改造的精品酒店，现代舒适与历史感兼备，以此为基地探索整个阿尔萨斯葡萄酒之路。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`附近村庄的田园旅馆`}</h4>
                  <p className="text-sm text-purple-800">{`选择与里屈埃维相邻的如胡纳维或凯塞斯贝尔这样同样美丽但更清静的村庄入住，享受更加原汁原味的乡村宁静，并体验骑车穿梭于葡萄园小径间的乐趣。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`里屈埃维镇内住宿数量非常有限且极其抢手，尤其是旅游旺季（夏季、圣诞集市期间），必须提前数月预订。住在镇外意味着你需要自驾或留意公交末班车时间。无论住在哪里，请务必体验一次阿尔萨斯传统的“床与早餐”民宿，这是了解当地人生活的绝佳窗口。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开里屈埃维的时候，你带走的可能不止是几瓶好酒，还有一种对“保存”的全新理解。在这个推崇推倒重建、追求日新月异的时代，这里的人们用近乎固执的温柔，守护着祖先留下的每一块砖木，每一寸风景。他们守护的不仅仅是旅游资产，更是一种生活方式，一种与土地、与季节、与家族记忆紧密相连的根脉。你会明白，真正的奢华不是金碧辉煌，而是时间沉淀下来的那份从容不迫的完整。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，这里不仅仅是一个“拍照很好看”的小镇。它是一个证据，证明人类可以与自己历史和解并共处；它是一个港湾，让疲惫于喧嚣的灵魂得以片刻停泊；它更是一首看得见、摸得着、闻得到的三维田园诗。每一位热爱深度游的旅人都该来此，不是为了收集又一个地名，而是来上一堂关于美、永恒与乡土之情的沉浸式课程。在这里，你会慢下来，你会注意到木头上阳光移动的痕迹，你会品出酒里风土的故事。最终，你会带着一颗被古典的宁静重新校准过的心，回到自己的世界。而那份被葡萄酒和鲜花浸润过的记忆，将会在很长很长时间里，持续地为你提供温柔的慰藉。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
