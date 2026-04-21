import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '萨莱尔 Salers｜火山岩上的黑色隐秘古镇 - 最佳欧洲景点',
  description: '车子沿着康塔尔火山公园蜿蜒的公路爬升，当一片沉静的、近乎墨黑色的屋顶群突然从苍翠的山脊线上浮现时，你便知道，萨莱尔到了。那种第一眼的冲击很奇异——它不是明信片式的明媚，而是一种庄重、孤傲、甚至带点忧郁的气质。仿佛这座小镇不是建在山上，而是从这座古老的火山心脏里，自己生长出来的黑色结晶。 停好车，穿过...',
}

export default function SalersMedievalVillagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '法国', href: '/destinations/france' },
            { label: '萨莱尔', href: '/attractions/salers-medieval-village' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`萨莱尔・Salers・法国・萨莱尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着康塔尔火山公园蜿蜒的公路爬升，当一片沉静的、近乎墨黑色的屋顶群突然从苍翠的山脊线上浮现时，你便知道，萨莱尔到了。那种第一眼的冲击很奇异——它不是明信片式的明媚，而是一种庄重、孤傲、甚至带点忧郁的气质。仿佛这座小镇不是建在山上，而是从这座古老的火山心脏里，自己生长出来的黑色结晶。
停好车，穿过低矮的拱形石门，你便正式踏入了另一个时间的维度。脚下是数百年被脚步磨得温润光滑的黑色火山岩石板路，缝隙里长着茸茸的青苔。空气是清冽的，带着高山牧场的草腥味，和远处人家壁炉里飘出的淡淡柴火香。目之所及，全是那种深沉的灰黑色石块垒起的房屋，它们紧密地簇拥着，沉默而坚固。阳光在这里变得很有戏剧性，它无法照亮整片建筑，只能像舞台追光一样，斜斜地切过那些雕着花环、怪兽或家族纹章的石头窗框，在厚重的墙壁上投下锐利而短暂的光影。偶尔有清脆的马蹄声“嗒嗒”响起，那是当地导游驾着的马车，声音在石壁间回荡，更衬出小巷的幽深与宁静。
这里几乎没有“游客”与“生活”的界限。你会看到白发的老奶奶坐在自家雕刻精美的石窗台下，安静地织着毛线，她的家门虚掩着，里面飘出炖菜的香气。广场上的咖啡馆里，几个戴着贝雷帽的老先生可能正在玩着一局漫长的滚球游戏，或者只是啜饮着本地生产的烈酒“水银酒”（Eau-de-vie），望着远处的峡谷发呆。萨莱尔的核心魅力，就在于这种凝固的庄严与流淌的日常之间，所形成的奇妙张力。它不是博物馆，它是一个依然在沉稳呼吸的古老生命体。
最打动人的，或许是那份极致的“统一感”。没有一栋建筑跳脱出来炫耀自己，所有的黑色房屋都谦卑而骄傲地组成一个整体，共同抵御着山间的风雨和流逝的时间。这种视觉上的和谐，带来一种深邃的宁静感，让你不由自主地放慢脚步，压低声音，生怕惊扰了这份持续了五百年的、黑色的梦。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子沿着康塔尔火山公园蜿蜒的公路爬升，当一片沉静的、近乎墨黑色的屋顶群突然从苍翠的山脊线上浮现时，你便知道，萨莱尔到了。那种第一眼的冲击很奇异——它不是明信片式的明媚，而是一种庄重、孤傲、甚至带点忧郁的气质。仿佛这座小镇不是建在山上，而是从这座古老的火山心脏里，自己生长出来的黑色结晶。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`停好车，穿过低矮的拱形石门，你便正式踏入了另一个时间的维度。脚下是数百年被脚步磨得温润光滑的黑色火山岩石板路，缝隙里长着茸茸的青苔。空气是清冽的，带着高山牧场的草腥味，和远处人家壁炉里飘出的淡淡柴火香。目之所及，全是那种深沉的灰黑色石块垒起的房屋，它们紧密地簇拥着，沉默而坚固。阳光在这里变得很有戏剧性，它无法照亮整片建筑，只能像舞台追光一样，斜斜地切过那些雕着花环、怪兽或家族纹章的石头窗框，在厚重的墙壁上投下锐利而短暂的光影。偶尔有清脆的马蹄声“嗒嗒”响起，那是当地导游驾着的马车，声音在石壁间回荡，更衬出小巷的幽深与宁静。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里几乎没有“游客”与“生活”的界限。你会看到白发的老奶奶坐在自家雕刻精美的石窗台下，安静地织着毛线，她的家门虚掩着，里面飘出炖菜的香气。广场上的咖啡馆里，几个戴着贝雷帽的老先生可能正在玩着一局漫长的滚球游戏，或者只是啜饮着本地生产的烈酒“水银酒”（Eau-de-vie），望着远处的峡谷发呆。萨莱尔的核心魅力，就在于这种凝固的庄严与流淌的日常之间，所形成的奇妙张力。它不是博物馆，它是一个依然在沉稳呼吸的古老生命体。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，或许是那份极致的“统一感”。没有一栋建筑跳脱出来炫耀自己，所有的黑色房屋都谦卑而骄傲地组成一个整体，共同抵御着山间的风雨和流逝的时间。这种视觉上的和谐，带来一种深邃的宁静感，让你不由自主地放慢脚步，压低声音，生怕惊扰了这份持续了五百年的、黑色的梦。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`萨莱尔`} />
                <InfoRow label="英文名称" value={`Salers`} />
                <InfoRow label="正式名称" value={`Salers`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`萨莱尔`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座被时光封存的石头古镇，是奥弗涅地区保存最完好的文艺复兴瑰宝之一，见证了当地贵族与“萨莱尔牛”黄金时代的兴衰。`} />
                <InfoRow label="建筑特色" value={`几乎所有建筑均由本地出产的深灰色火山岩（玄武岩）砌成，形成独特而统一的黑色调，配以高耸的石板屋顶和精雕细琢的文艺复兴风格窗棂。`} />
                <InfoRow label="建筑风格" value={`以坚固的晚期哥特式防御结构为基础，融合了精致优雅的法式文艺复兴装饰元素。`} />
                <InfoRow label="文化价值" value={`它不仅是建筑化石，更是一座活着的“萨莱尔牛”文化圣地，这种以其命名的红棕色高贵牛种，至今仍是法国顶级牛肉的代名词和当地牧民的身份图腾。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇公共区域全天开放。小镇内的萨莱尔公牛博物馆、圣母升天教堂内部、以及部分塔楼，通常在夏季（5月至9月）的每日10:00-12:30及14:00-18:00开放；冬季开放时间缩短或仅周末开放，行前务必查阅官网确认具体日期与时间。小镇游客信息中心工作时间为周一至周六9:30-12:30，14:00-18:00。`} />
              <InfoRow label="门票价格" value={`进入萨莱尔古镇本身完全免费。主要收费景点包括：萨莱尔公牛博物馆（Maison des Templiers），票价约6欧元；登上市政厅钟楼（需询问游客中心），票价约3欧元。学生、儿童及团体通常有优惠票价。`} />
              <InfoRow label="地址" value={`Place Tyssandier d'Escous， 15140 Salers， France`} />
              <InfoRow label="交通方式" value={`萨莱尔位于法国中部腹地，最近的国际机场是克莱蒙-费朗机场（CFE），距离约90公里。从机场租车自驾是最佳选择，沿A75高速公路向南，在Massiac出口下，再沿D680/D35公路行驶约30分钟，全程约1.5小时。若依赖公共交通，可从克莱蒙-费朗火车站（Gare de Clermont-Ferrand）乘坐区域火车（TER Auvergne）到达莫里亚克（Mauriac）站，车程约1.5小时，但班次稀少（每天约2-3班）。从莫里亚克火车站至萨莱尔尚有约15公里路程，可搭乘极其有限的当地巴士（需提前查询时刻表），或预约出租车，耗时约20分钟。强烈建议自驾，以便灵活探索周边壮丽的火山自然公园。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`萨莱尔的故事，始于更早的混沌年代。这片土地最初是高卢人的据点，罗马人也曾在此留下痕迹，但真正让它登上历史舞台的，是中世纪的动荡。大约在公元十世纪左右，为了抵御维京人的侵袭和周边领主的纷争，当地领主选择在这个地势险要的火山岩山嘴上，建立一座坚固的设防村落。最初的萨莱尔，只是一圈粗糙的城墙和塔楼，守护着里面的居民和牲口，它的颜色，自诞生之日起，就注定与脚下这片深色火山岩融为一体。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇命运的第一次转折点，与宗教和军事息息相关。它一度是圣殿骑士团在奥弗涅地区的重要据点，那些黑衣骑士的身影曾在这里的石板路上匆匆来往。然而，真正的黄金时代，要到十五世纪末才降临。那时的法国正逐渐从百年战争的疮痍中恢复，中央王权加强，社会趋于稳定。萨莱尔当地的贵族——萨莱尔家族，因其忠诚和服务，被法国国王授予了重要的司法和行政权力，这里成了整个上奥弗涅地区的“官首府”。一时间，法官、税吏、律师和富有的地主乡绅蜂拥而至。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这些新兴的精英阶层口袋里有了钱，第一件事就是重建家园，但他们要的不是堡垒，而是彰显财富与品味的宅邸。于是，一场静默的建筑革命在黑色岩石上发生了。他们保留了祖宅厚重的外墙和防御性的整体格局（这是深植于血液中的谨慎），却请来能工巧匠，在面向街道的立面上，尽情施展文艺复兴的艺术。你看那些窗户：原本狭小的射击孔，被扩大成了优雅的竖长窗；冰冷的石框周围，雕刻出精美的菱形图案、缠绕的花枝、甚至俏皮的小天使；门楣上刻下了家族的徽章，骄傲地宣示主权。这些华丽的细节，如同给坚硬的武士铠甲绣上了丝绸的花边，形成了一种萨莱尔独有的、刚柔并济的建筑语言。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`财富的源泉，来自漫山遍野的草地和那些牛。是的，就是后来闻名于世的“萨莱尔牛”。这种牛体型高大，毛色是深红褐色，性格沉稳而强壮，非常适合在奥弗涅的山区放牧。萨莱尔的贵族和农民们精心培育着这个品种，它们提供的肉质鲜美，牛皮优质，让小镇积累了惊人的财富。可以说，是这些牛，用一茬又一茬的青草，反刍出了那些精美的石雕窗棂。小镇的繁荣持续了近两个世纪，直到路易十四时代，随着省级行政机构的迁移，萨莱尔的政治光环逐渐褪去，重新归于寂静，像一位退休的贵族，依靠着丰厚的祖产（牧场），安然度日。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`正是这种“过早”的衰落，意外地保护了它。因为没有经历后来的工业化和大规模城市改造，萨莱尔完整地保存了其黄金时代的样貌。那些黑色的文艺复兴宅邸，没有被迫穿上现代的外衣，它们只是静静地老去，石板屋顶长出了地衣，石雕被风雨磨得更加柔和。直到二十世纪，人们才重新发现这座“被遗忘的宝石”，并将其列为法国最美村庄之一。今天的萨莱尔，不再掌管司法，却掌管着一种关于时间、石头与坚韧生活的美学。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要最完整地感受萨莱尔的灵魂，建议安排一个下午加傍晚的时间。最好在午后两三点左右抵达，这时旅行团大多开始离开，小镇重归宁静，阳光的角度也最适合欣赏那些石刻的立体感。整个游览节奏应当极其缓慢，以步行为主，路线呈一个环绕小镇中心区域的环形。从主停车场出发，先由外向内感受其防御格局，再深入核心广场体验其生活脉搏，最后绕到小镇边缘，俯瞰壮丽的自然峡谷，完成从人文到自然的视觉过渡。全程慢慢走、慢慢看、慢慢拍照，大约需要3到4小时，务必留出时间在广场咖啡馆无所事事地坐一会儿，这才是精髓。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双绝对舒适防滑的步行鞋，这里的石板路古老且常有坡度，高跟鞋是灾难。
小镇很多小巷非常安静且住户密集，拍照和游览时请保持低声，尊重当地居民的隐私和生活。
夏季的午后人流较少，是探索的最佳时段；冬季部分餐馆和博物馆可能歇业，但雪中的黑色古镇别有风味，出行前务必确认。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主停车场出来，先别急着进小镇，绕到东侧的草坪边缘，那里可以远远看到萨莱尔如同黑色王冠般矗立在绿色山脊上的完整侧影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过低矮而厚重的圣玛丽门，让自己正式进入中世纪，立刻注意脚下石板路的光滑和两侧石墙的冰凉触感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主街（Rue de la Martille）缓坡向上，仔细打量每一栋宅邸立面上不同的石雕细节，猜测它们背后家族的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`抵达小镇的心脏——梯桑迪埃·德斯库广场，在中央的古老铸铁水泵边驻足，观察四周文艺复兴风格的精美建筑立面如何围合成一个露天沙龙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观广场旁的圣母升天教堂，感受其内部朴素的哥特式空间与外部华丽火焰式门廊的对比，并留意那些为祈求牲畜平安而供奉的还愿牌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从广场西南侧的小巷穿出，来到小镇的“阳台”——巴尔康德杜方丹，这里没有任何建筑遮挡，眼前豁然开朗，是俯瞰阿尔图河谷和远方火山群峰的绝佳位置。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着城墙遗迹下方的步道漫步，从另一个角度回望小镇层层叠叠的黑色屋顶和石板瓦，聆听风声和远处牛铃声的交响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在黄昏时分回到主广场，选择一家咖啡馆的露天座位，点一杯本地特产的开胃酒或热巧克力，看着广场上的光影从金黄变为玫红，等待路灯点亮石墙的温暖一刻。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣玛丽门内侧仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，阳光从门洞斜射入内，站在门内向外拍，可以捕捉到光线切割门洞、照亮内部石板路的强烈纵深感，人物剪影走入光中是绝佳点缀。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`梯桑迪埃·德斯库广场东南角`}</h4>
                  <p className="text-sm text-gray-700">{`利用广场上的古老铸铁水泵作为前景，以文艺复兴风格的市政厅大楼为背景，在日落前半小时的“黄金时刻”拍摄，温暖的阳光会给黑色建筑镀上金边。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`巴尔康德杜方丹观景台`}</h4>
                  <p className="text-sm text-gray-700">{`这是拍摄萨莱尔全景与自然风光结合的最佳地点，建议在晴朗的傍晚使用长焦镜头，将远处层叠的火山山脉作为背景，压缩空间，突出小镇作为“山脊堡垒”的孤立与雄伟。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣母升天教堂侧面小巷`}</h4>
                  <p className="text-sm text-gray-700">{`寻找一条狭窄的小巷，以教堂厚重的扶壁和飞扶券为框架，构图时让小巷尽头露出一片明亮的峡谷风光，形成强烈的明暗与空间对比。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`萨莱尔的建筑以深色为主，拍摄时注意避免曝光不足导致一片死黑，可适当增加曝光补偿或使用HDR模式保留暗部细节。`}</li>
                <li>• {`尊重当地居民，避免将镜头直接对准在自家门口或窗口的居民进行拍摄，如需拍摄人物融入场景的照片，最好事先微笑示意或保持足够距离。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`情怀之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在镇上由十六世纪贵族宅邸改造的家庭旅馆，房间保留着巨大的石砌壁炉和厚重的木梁，女主人会为你准备用萨莱尔牛肉制作的丰盛早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`静谧享受`}</h4>
                  <p className="text-sm text-green-800">{`选择小镇边缘几栋带花园的石屋民宿，这里更加安静，晚上可以躺在花园躺椅上，看到毫无光污染的璀璨星空，耳边只有风声。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`沉浸体验`}</h4>
                  <p className="text-sm text-yellow-800">{`预订镇上唯一的精品酒店，它由几栋相连的历史建筑构成，内部装饰完美融合了古董家具和现代舒适，部分房间拥有直面峡谷的私人小阳台。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`周边隐居`}</h4>
                  <p className="text-sm text-purple-800">{`如果自驾，可以考虑住在萨莱尔附近乡村的独立农庄或牧人小屋，真正体验“萨莱尔牛”的牧场生活，清晨在奶牛的哞叫声中醒来。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`萨莱尔古镇内的住宿数量非常有限，尤其在夏季和节假日，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇入夜后极为安静，几乎没有任何夜生活，商店和餐厅也关门较早，但这正是体验其纯粹中世纪氛围的宝贵时刻，请享受这份宁静。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开萨莱尔时，我的手里仿佛还残留着那些火山岩石墙的粗糙触感，鼻腔里还萦绕着柴火与干草混合的、属于山地的气味。这个地方教给我的，不是某种炫目的美学，而是一种关于“持久”的深沉力量。在一切都追求快速迭代、光鲜亮丽的今天，萨莱尔固执地保持着它的黑色、它的沉重、它的缓慢。它不讨好任何人，只是静静地坐在火山之上，与风霜为伴，与牛群为邻。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它让我思考，什么才是真正的遗产？不仅仅是那些雕刻精美的窗户，更是窗户后面，延续了数个世纪的那种与土地紧密相连的生活方式，是人们对一种特定牛种的深情与骄傲，是 community 共同维护这份独特风貌的默契。萨莱尔是一座活着的纪念碑，纪念着人类如何用最本地的材料，在最艰苦的环境里，建立起不仅是栖身之所，更是尊严与美。每一个热爱深度游的旅人，都应该来感受一次这种“黑色的光芒”。它不会让你热血沸腾，但会像一杯醇厚的陈年烈酒，缓缓地、持久地温暖你的内心，让你在往后纷扰的日子里，记得世上还有这样一个地方，时间是以石头的纹理和青苔生长的速度来计算的。这份宁静而坚韧的记忆，本身就是一种力量。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/sarlat-la-caneda-medieval-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨拉拉卡内达</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sarlat-la-Canéda</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/uzes-duchy-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    于
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">于泽斯公国古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Uzès</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kaysersberg" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    凯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">凯斯贝格小镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kaysersberg</p>
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
