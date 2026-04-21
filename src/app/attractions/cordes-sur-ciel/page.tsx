import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科尔德圣谢鲁 Cordes-sur-Ciel｜漂浮在云端的法国最美中世纪石头城 - 最佳欧洲景点',
  description: '第一次看到科尔德圣谢鲁，你会怀疑自己是不是闯进了一本童话书的扉页。汽车还在蜿蜒的山路上爬坡，它就已经猝不及防地闯入视野——一整片蜂蜜色与赭石色的石头房屋，紧紧依偎着圆锥形的山巅，尖顶的教堂像是王冠上的宝石。在清晨的薄雾或傍晚的霞光里，那些石头仿佛失去了重量，整座小镇轻盈地“漂浮”在云海与绿色丘陵之上...',
}

export default function CordesSurCielPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '法国', href: '/destinations/france' },
            { label: '科尔德圣谢鲁', href: '/attractions/cordes-sur-ciel' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`科尔德圣谢鲁・Cordes-sur-Ciel・法国・科尔德（位于塔恩省）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一次看到科尔德圣谢鲁，你会怀疑自己是不是闯进了一本童话书的扉页。汽车还在蜿蜒的山路上爬坡，它就已经猝不及防地闯入视野——一整片蜂蜜色与赭石色的石头房屋，紧紧依偎着圆锥形的山巅，尖顶的教堂像是王冠上的宝石。在清晨的薄雾或傍晚的霞光里，那些石头仿佛失去了重量，整座小镇轻盈地“漂浮”在云海与绿色丘陵之上，“Sur-Ciel”（在天空之上）这个名字，从此不再是诗意的比喻，而是你亲眼所见的现实。
把车停在山脚，选择步行上山，是开启这场时空之旅最正确的仪式。你的双脚会率先接触到历史：那条被称为“大坡道”的主路，由被七百年人迹磨得温润发亮的圆石铺成，蜿蜒陡峭。攀登时，你会听见自己轻轻的喘息声，混合着石缝间野草与百里香的干燥香气。路两旁是巨石垒成的坚固房屋，厚实的木门上钉着巨大的铁环。偶尔，一扇彩绘玻璃窗后传来杯碟轻碰的脆响，或是某位老妇人晾晒床单时哼唱的奥克语老调，提醒你这不仅是景点，更是数百个家庭世代生活的家园。
当你终于穿过圣米歇尔门那幽深的拱洞，时间仿佛瞬间被调慢了。面前是纵横交错如迷宫般的小巷，阴影与阳光在石墙上切割出明锐的几何图形。空气里弥漫着旧书、蜡染布料和刚烤好的“油条”（一种本地特色甜点）的混合气味。最令人屏息的是那些哥特式房屋的立面：上面雕刻着栩栩如生的神话生物、优雅的圣人、繁复的花草纹样。你可以花上一个下午，什么都不做，就仰着头，寻找石头上微笑的恶魔、弹奏鲁特琴的天使，那是中世纪石匠留给世界的温柔密码。
夜幕降临时，游人散去，小镇显露出它最本真的灵魂。街灯次第亮起，在古老的石头上投下琥珀色的光晕。你坐在广场边的咖啡馆，点一杯本地产的紫葡萄酒，看最后一丝天光从圣米歇尔教堂的塔尖褪去。万籁俱寂中，只有风穿过窄巷的呜咽，和远处丘陵上蟋蟀的合唱。那一刻你会明白，科尔德守护的不仅仅是一些石头房子，更是一种缓慢、专注、与天地共呼吸的生活哲学。它悬于天地之间，像一个古老的、关于美与坚韧的梦。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一次看到科尔德圣谢鲁，你会怀疑自己是不是闯进了一本童话书的扉页。汽车还在蜿蜒的山路上爬坡，它就已经猝不及防地闯入视野——一整片蜂蜜色与赭石色的石头房屋，紧紧依偎着圆锥形的山巅，尖顶的教堂像是王冠上的宝石。在清晨的薄雾或傍晚的霞光里，那些石头仿佛失去了重量，整座小镇轻盈地“漂浮”在云海与绿色丘陵之上，“Sur-Ciel”（在天空之上）这个名字，从此不再是诗意的比喻，而是你亲眼所见的现实。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`把车停在山脚，选择步行上山，是开启这场时空之旅最正确的仪式。你的双脚会率先接触到历史：那条被称为“大坡道”的主路，由被七百年人迹磨得温润发亮的圆石铺成，蜿蜒陡峭。攀登时，你会听见自己轻轻的喘息声，混合着石缝间野草与百里香的干燥香气。路两旁是巨石垒成的坚固房屋，厚实的木门上钉着巨大的铁环。偶尔，一扇彩绘玻璃窗后传来杯碟轻碰的脆响，或是某位老妇人晾晒床单时哼唱的奥克语老调，提醒你这不仅是景点，更是数百个家庭世代生活的家园。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你终于穿过圣米歇尔门那幽深的拱洞，时间仿佛瞬间被调慢了。面前是纵横交错如迷宫般的小巷，阴影与阳光在石墙上切割出明锐的几何图形。空气里弥漫着旧书、蜡染布料和刚烤好的“油条”（一种本地特色甜点）的混合气味。最令人屏息的是那些哥特式房屋的立面：上面雕刻着栩栩如生的神话生物、优雅的圣人、繁复的花草纹样。你可以花上一个下午，什么都不做，就仰着头，寻找石头上微笑的恶魔、弹奏鲁特琴的天使，那是中世纪石匠留给世界的温柔密码。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`夜幕降临时，游人散去，小镇显露出它最本真的灵魂。街灯次第亮起，在古老的石头上投下琥珀色的光晕。你坐在广场边的咖啡馆，点一杯本地产的紫葡萄酒，看最后一丝天光从圣米歇尔教堂的塔尖褪去。万籁俱寂中，只有风穿过窄巷的呜咽，和远处丘陵上蟋蟀的合唱。那一刻你会明白，科尔德守护的不仅仅是一些石头房子，更是一种缓慢、专注、与天地共呼吸的生活哲学。它悬于天地之间，像一个古老的、关于美与坚韧的梦。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`科尔德圣谢鲁`} />
                <InfoRow label="英文名称" value={`Cordes-sur-Ciel`} />
                <InfoRow label="正式名称" value={`Cordes-sur-Ciel`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`科尔德（位于塔恩省）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`13世纪初为抵御阿尔比十字军战争而建立的“防御性新城”的典范，曾是朗格多克地区繁荣的皮革与纺织品贸易中心。`} />
                <InfoRow label="建筑特色" value={`如同从石灰岩山脊上自然生长出来的、层层叠叠的鹅卵石街道与蜂蜜色石头房屋，拥有法国南部最精美的民用哥特式立面群。`} />
                <InfoRow label="建筑风格" value={`南部哥特式风格为主，融合了防御工事的粗犷与市民建筑的优雅雕刻。`} />
                <InfoRow label="文化价值" value={`一座活着的13世纪博物馆，完美保存了中世纪城镇的空间格局、建筑技艺与手工艺传统，是感受南法“奥克西坦”文化精神的绝佳之地。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇本身全天开放，街道和公共区域可自由漫步。主要的历史建筑（如雅各宾之家博物馆、圣米歇尔教堂）开放时间通常为上午10点至下午6点（4月至10月），冬季（11月至3月）可能缩短至下午5点关闭或仅在周末开放。部分私人艺廊和工坊的营业时间较为随意，建议午后前往。每年1月部分设施可能关闭维护，7、8月旅游旺季时所有设施基本全开。小镇旅游局全年提供导览服务，需提前预约。`} />
              <InfoRow label="门票价格" value={`进入小镇免费。参观雅各宾之家博物馆约5欧元，联票（包含多个小型博物馆）约8欧元。登临部分古城墙塔楼可能有2-3欧元的自愿捐赠。镇上的主要教堂免费进入。导游步行游览费用约每人10-15欧元，时长1.5小时。`} />
              <InfoRow label="地址" value={`Place de la Halle, 81170 Cordes-sur-Ciel, France`} />
              <InfoRow label="交通方式" value={`最近的国际机场是图卢兹-布拉尼亚克机场。从图卢兹出发，最推荐的方式是自驾（约1小时车程），沿A68高速向北至加亚克出口，再跟随“Cordes-sur-Ciel”路牌行驶约20分钟即可抵达山脚停车场。若乘坐公共交通，可从图卢兹马塔比奥火车站乘坐TER火车至加亚克站（约50分钟，班次每小时1-2班），然后在加亚克火车站外的公交站换乘前往科尔的德的支线巴士（班次稀少，每天约3-4班，车程30分钟，务必提前在旅游局官网查询最新时刻表）。小镇建于山顶，车辆需停在山下指定停车场，然后步行或搭乘付费的迷你摆渡小火车（约3欧元）上山。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从1222年说起。那时候，法国南部朗格多克地区正深陷一场以信仰为名的残酷战争——阿尔比十字军征讨。为了镇压被视为异端的卡特里派（又称纯洁派），北方的贵族和骑士在教宗的号召下蜂拥南下，战火与鲜血染红了这片富庶的土地。就在这样的动荡中，一位关键人物登场了：图卢兹伯爵雷蒙德七世。这位精明的统治者，一方面需要安抚北方的征服者，另一方面更要保护自己的子民和领地。于是，他下令在一座地势险要、易守难攻的山丘上，建立一座全新的、坚固的城镇。这既是为流离失所的农民提供庇护所，也是在边境地带钉下一颗战略钉子。科尔德的诞生，从一开始就充满了防御的基因，它的每一道城墙、每一座城门，都是乱世求生的宣言。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最初的居民主要是来自周边地区的难民。他们依循“防御性新城”的规划理念，沿着山脊一圈圈建造房屋，外墙彼此相连，形成一道天然的防御环。中心是市场和教堂，街道狭窄曲折，足以让入侵者晕头转向。令人意外的是，和平很快降临。得益于伯爵给予的免税等特权，以及小镇扼守贸易路线的绝佳位置，科尔德并没有一直扮演军事堡垒的角色，反而迅速走向了惊人的繁荣。13世纪末到14世纪中叶，是它的“黄金时代”。皮革工匠、纺织商人和香料贩子在这里积累了巨额财富。钱袋子鼓起来的富商们，开始竞相攀比，不是比谁的车更豪华，而是比谁的房子立面更精美。于是，一种独特的“南部哥特式”民用建筑风格在这里绽放：他们在石头上雕刻出无比繁复、充满想象力的图案——藤蔓、花卉、寓言故事、奇珍异兽。这些雕刻不再是宗教的附属，而是市民骄傲、财富与艺术趣味的直接展示，让科尔德赢得了“百个哥特式立面之城”的美誉。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，命运的急转弯总是来得突然。1348年，黑死病的幽灵席卷欧洲，这座拥挤的山城未能幸免，人口锐减。紧接着是英法百年战争的波及，以及后来宗教战争的再次摧残。贸易路线改变了，财富烟消云散。科尔德就像一位盛装过后突然家道中落的贵族，陷入了长达数个世纪的沉睡与遗忘。石头建筑依然坚固，但许多房屋空了，华丽的雕刻逐渐被风雨侵蚀。它变成了一座几乎被时间冻结的“遗迹”，静静地待在它的山巅，主要靠着农业维持着微弱的心跳。正是这种被主流遗忘的幸运，让它奇迹般地躲过了大规模的城市改造和现代化破坏，完整保留了中世纪的肌理。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机出现在20世纪。先是诗人、画家们如同发现瑰宝一般重新找到了这里，被它超越时代的美所震撼。接着，“法国最美村庄”协会将它列为第一批成员，它“天空之城”的梦幻形象开始通过摄影和文字传播出去。但真正的拯救者，是战后一批有远见的居民和文化遗产保护者。他们没有把这里变成僵硬的博物馆，而是发起了精心的修复运动，同时鼓励手工艺人、艺术家入驻空置的老屋。今天，你在小巷里遇见的玻璃匠、陶艺师、书籍装帧师，正是这种活态保护哲学的化身。科尔德的故事，是一个关于毁灭与幸存、繁华与沉寂、最终在当代重获新生的完整轮回。它的每一块石头，都吸饱了八百年的阳光、风雨、战火、笑声与叹息。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你务必在清晨9点前抵达山脚停车场，这是避开一日游人潮、独享小镇宁静魔力的黄金时间。整体游览需要留出至少5-6小时，节奏宜慢不宜快。上午光线柔和，适合专注欣赏建筑立面和拍照；中午在广场享用漫长的午餐，感受本地生活节奏；下午则深入小巷探索工坊和博物馆，最后在黄昏时分寻找一个制高点，等待日落与华灯初上。这样的安排能让你体验到科尔德从晨雾到星夜不同侧面的美，完成一次完整的时空沉浸之旅。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`切勿穿着高跟鞋或薄底鞋，陡峭湿滑的圆石路是它们的天敌，一双抓地力好的徒步鞋或运动鞋是必需品。小镇许多小店和餐厅在下午1点到3点之间会午休关门，规划购物和用餐时间要注意。对待居民的花园和私人空间请保持尊重，拍照前最好微笑示意。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从山脚“大坡道”底端开始，用双脚缓缓攀登那条被岁月磨光的圆石主路，感受身体的微微喘息与逐渐展开的壮阔视野。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过阴凉宏伟的圣米歇尔门拱洞，让眼睛适应光线后，立刻右转进入“商人广场”，仰望周围那些布满精致石雕的13世纪哥特式豪宅立面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着“钟楼街”向上，让耳朵引领你找到那座挂着古老铁钟的钟楼，并在旁边的“油条”老店买一根热腾腾的糖霜螺旋脆饼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`漫步到小镇顶端的“草地广场”，这里是曾经的集市和集会地，坐在古老的梧桐树下，俯瞰整个塔恩河谷如画卷般在脚下铺展。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`钻进一条任意吸引你的狭窄拱廊小巷，比如“皮革匠街”，用手指触摸冰凉的石墙，寻找墙上古老的标记，并随意探访一两家正在工作的手工艺人小店。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观雅各宾之家博物馆，在这座曾经的商人宅邸里，通过古老的家具、工具和壁画，拼凑出中世纪市民生活的生动图景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前回到圣米歇尔教堂内静坐片刻，聆听风琴若有似无的试音，看最后的光线透过玫瑰窗，在石柱上投下彩色的光斑。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂旁的“骑士步道”沿着古城墙漫步一小段，找一张面向西方山谷的长椅，静静看着夕阳将整座石头城染成金红色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`山谷仰拍全景位`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前，从D600公路靠近“观景台”的路边停车区，使用长焦镜头压缩空间，能拍到小镇如鹰巢般雄踞山巅、常被云雾缠绕的经典“天空之城”画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣米歇尔门光影巷`}</h4>
                  <p className="text-sm text-gray-700">{`上午八九点阳光斜射入城门时，站在门洞内侧向外拍摄，门洞成为天然画框，框住远处阳光照耀的房屋和蓝天，光影对比极具戏剧性。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`商人广场立面细节`}</h4>
                  <p className="text-sm text-gray-700">{`正午前后阳光直射时，是拍摄哥特式立面石雕细节的最佳时间，立体感最强，建议使用偏振镜消除石头反光，专注捕捉人脸、怪兽或花卉的局部特写。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`草地广场梧桐树下`}</h4>
                  <p className="text-sm text-gray-700">{`下午晚些时候，坐在广场西侧梧桐树的阴影里，以树冠为前景，拍摄阳光下色彩温暖的广场建筑和远处绵延的丘陵，构图富有层次和生机。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`小巷拱廊框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`任意一条有拱廊的小巷（如Grande Rue Raymond VII），站在巷子一端，利用深邃的拱廊形成强烈的透视引导线，将视线引向巷末的光亮或行人，故事感十足。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`航拍无人机在法国历史古迹上空飞行有严格限制，在科尔德这样的保护区内基本禁止，未经许可切勿起飞。拍摄居民或手工艺人时，请务必先友好询问，获得同意后再拍，这是基本的礼貌。雨天或雨后，湿漉漉的石板路会反射灯光和倒影，是拍出氛围感大片的好时机。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`老石屋民宿`}</h4>
                  <p className="text-sm text-blue-800">{`入住一栋由14世纪石屋改造的民宿，房间里有裸露的原木横梁和古老的壁炉，早晨会被天窗洒下的阳光和房东准备的自家果酱早餐唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`艺术家之家客栈`}</h4>
                  <p className="text-sm text-green-800">{`小镇高处一家由画家经营的精品客栈，每个房间装饰风格迥异，充满艺术气息，露台花园是私享日落全景的绝密地点，晚上还可能听到主人弹奏吉他。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`山脚葡萄园农庄`}</h4>
                  <p className="text-sm text-yellow-800">{`如果不介意住在山下，可以选择周边葡萄园里的乡村农庄，享受绝对的静谧，夜晚星空璀璨，白天还能参与简单的农活，体验真正的南法乡村生活。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端隐居酒店`}</h4>
                  <p className="text-sm text-purple-800">{`小镇入口处一所由贵族宅邸改建的五星级酒店，拥有宁静的内庭花园和米其林推荐餐厅，水疗中心用的是本地草药，是攀登游览一天后极致放松的奢华选择。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇内的住宿数量有限且非常抢手，尤其在夏季和周末，务必提前数月预订。住在山上的好处是能体验入夜后和清晨游人散尽时的绝妙氛围，但需要自己拖行李爬一段坡。山下住宿停车方便且价格稍低，但需依赖摆渡车或步行上山，请根据自身体力权衡。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开科尔德许多天后，我的脑海里依然会不时浮现那个画面：黄昏的微光中，一位老奶奶坐在自家雕刻着葡萄藤的门槛上，静静地剥着豆子。她的身后是拥有七百年历史的石墙，面前是延伸到天际的绿色山谷。那一刻，历史不再是教科书上冰冷的章节，而是与当下呼吸共存的日常。科尔德教会我的，正是这种“深度的在场感”——美与历史，从来不是用来远远瞻仰的标本，而是可以走进、触摸、并与之共同生活的一段绵延的时间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都在追求更快、更高效、更刺激的时代，科尔德像一位沉着的时间智者，悬于天地之间。它存在的意义，或许就是为我们提供一次“精神上的减速”。当你走过那些需要低头小心迈步的古老台阶，当你花十分钟只为看清一块石雕上的故事，当你被迫放下手机因为小巷里没有信号，你的感官会重新变得敏锐，你的内心会自然沉静下来。它告诉我们，真正的奢华不是物质的堆砌，而是拥有不被干扰的时间、保存完好的记忆、以及与自然和历史保持亲密对话的能力。每一位热爱深度游的旅人，都应该来科尔德住上一晚，不仅仅是为了看一座美丽的小镇，更是为了让自己浸入一种不同的时间流速里，找回那种专注、宁静与敬畏之心。这趟旅程，最终将成为抚慰现代心灵的一剂良药。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/beauvais-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博韦大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Beauvais Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/roussillon-ochre-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    鲁
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">鲁西永（普罗旺斯赭石红土城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Roussillon</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bourges-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布尔日大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bourges Cathedral</p>
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
