import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '塞克什白堡老城 Székesfehérvár Old Town｜千年加冕古都的慢时光回廊 - 最佳欧洲景点',
  description: '穿过那道低调的城门，时间仿佛立刻被调慢了速率。第一眼看到的不是恢弘的景观，而是一种被蜂蜜色阳光浸透的宁静。脚下的石板路被几个世纪的人来人往打磨得温润发亮，缝隙里长出倔强的青苔。空气里有股好闻的旧时光味道——是古老石墙在阳光下散发出的微暖气息，混合着从街角面包房飘来的、新鲜出炉的“波尔图”甜面包的黄油...',
}

export default function SzekesfehervarOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '塞克什白堡老城', href: '/attractions/szekesfehervar-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">塞克什白堡老城・Székesfehérvár Old Town・匈牙利・塞克什白堡</h1>
          <p className="text-lg text-gray-600 mb-6">
            穿过那道低调的城门，时间仿佛立刻被调慢了速率。第一眼看到的不是恢弘的景观，而是一种被蜂蜜色阳光浸透的宁静。脚下的石板路被几个世纪的人来人往打磨得温润发亮，缝隙里长出倔强的青苔。空气里有股好闻的旧时光味道——是古老石墙在阳光下散发出的微暖气息，混合着从街角面包房飘来的、新鲜出炉的“波尔图”甜面包的黄油香，还有远处花园里隐约的玫瑰花香。
老城的心脏是主广场，这里没有游客的喧哗，更像是本地人客厅的延伸。老人们坐在长椅上，用我听不懂的匈牙利语轻声交谈，手边放着折叠的报纸。鸽子在圣伊什特万国王雕像的肩头踱步。广场周围的建筑外墙涂抹着柔和的鹅黄、粉橙和浅绿色，巴洛克式的涡卷和浮雕在午后的光影里投下深邃的轮廓。你几乎能想象，几个世纪前，身着华服的贵族与主教们也曾走过同样的街道，前往那座命运多舛的大教堂举行加冕典礼。这里的魅力不在于震撼，而在于一种深沉的、渗透在每一块砖石里的历史质感，它不急于诉说，只等你静静聆听。
转到僻静的小巷，氛围变得更加私密。一扇厚重的橡木门上，铁制门环被岁月磨得锃亮。透过某座宫殿庭院的铁艺大门，可以瞥见精心打理的小花园，紫藤花从凉棚上垂下。偶尔有电车叮叮当当地从外围街道驶过，那清脆的声音反而加深了小巷的幽静。你会发现，这座“白堡”并不苍白，它的色彩是内敛而丰富的，它的故事都写在建筑的肌理里，写在居民不疾不徐的脚步里。
最打动人的，或许是这种“活着”的历史感。这里不是被圈起来供人观赏的博物馆，而是依然跳动着的城市心脏。书店、咖啡馆、家庭作坊式的陶瓷店就开在拥有数百年历史的拱廊之下。历史不是背景板，它就是日常生活本身。这种亲切的、未被过度旅游化的真实，让你感觉自己不是一个闯入者，而是一个有幸被允许分享片刻宁静时光的客人。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">穿过那道低调的城门，时间仿佛立刻被调慢了速率。第一眼看到的不是恢弘的景观，而是一种被蜂蜜色阳光浸透的宁静。脚下的石板路被几个世纪的人来人往打磨得温润发亮，缝隙里长出倔强的青苔。空气里有股好闻的旧时光味道——是古老石墙在阳光下散发出的微暖气息，混合着从街角面包房飘来的、新鲜出炉的“波尔图”甜面包的黄油香，还有远处花园里隐约的玫瑰花香。</p>
              <p className="text-gray-700 leading-relaxed mb-4">老城的心脏是主广场，这里没有游客的喧哗，更像是本地人客厅的延伸。老人们坐在长椅上，用我听不懂的匈牙利语轻声交谈，手边放着折叠的报纸。鸽子在圣伊什特万国王雕像的肩头踱步。广场周围的建筑外墙涂抹着柔和的鹅黄、粉橙和浅绿色，巴洛克式的涡卷和浮雕在午后的光影里投下深邃的轮廓。你几乎能想象，几个世纪前，身着华服的贵族与主教们也曾走过同样的街道，前往那座命运多舛的大教堂举行加冕典礼。这里的魅力不在于震撼，而在于一种深沉的、渗透在每一块砖石里的历史质感，它不急于诉说，只等你静静聆听。</p>
              <p className="text-gray-700 leading-relaxed mb-4">转到僻静的小巷，氛围变得更加私密。一扇厚重的橡木门上，铁制门环被岁月磨得锃亮。透过某座宫殿庭院的铁艺大门，可以瞥见精心打理的小花园，紫藤花从凉棚上垂下。偶尔有电车叮叮当当地从外围街道驶过，那清脆的声音反而加深了小巷的幽静。你会发现，这座“白堡”并不苍白，它的色彩是内敛而丰富的，它的故事都写在建筑的肌理里，写在居民不疾不徐的脚步里。</p>
              <p className="text-gray-700 leading-relaxed mb-4">最打动人的，或许是这种“活着”的历史感。这里不是被圈起来供人观赏的博物馆，而是依然跳动着的城市心脏。书店、咖啡馆、家庭作坊式的陶瓷店就开在拥有数百年历史的拱廊之下。历史不是背景板，它就是日常生活本身。这种亲切的、未被过度旅游化的真实，让你感觉自己不是一个闯入者，而是一个有幸被允许分享片刻宁静时光的客人。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="塞克什白堡老城" />
                <InfoRow label="英文名称" value="Székesfehérvár Old Town" />
                <InfoRow label="正式名称" value="Székesfehérvár Historical Centre" />
                <InfoRow label="国家" value="匈牙利" />
                <InfoRow label="城市" value="塞克什白堡" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="匈牙利王国的第一个首都，长达五个世纪的国王加冕与安葬之地，堪称匈牙利的“摇篮”。" />
                <InfoRow label="建筑特色" value="呈现出一幅从罗马式地基、哥特式骨架、巴洛克外衣到新古典主义点缀的生动建筑史画卷，小巧而密集。" />
                <InfoRow label="建筑风格" value="以巴洛克风格为主导，融合了中世纪遗迹、浪漫主义复兴与新艺术运动的元素，形成和谐而富有层次的整体。" />
                <InfoRow label="文化价值" value="是匈牙利国家认同与基督教信仰扎根的核心象征地，其地下考古层如同这个民族的历史基因库。" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="公共区域全天开放。区域内各博物馆、教堂等独立场馆开放时间各异，通常为周二至周日 10:00-18:00，周一闭馆。圣伊什特万大教堂的开放时间较为复杂，夏季（4月至10月）通常为9:00-17:00，冬季缩短至10:00-16:00，且周日早晨仅供礼拜。建议行前在官网或游客中心核实具体日期安排。" />
              <InfoRow label="门票价格" value="老城街区本身免费开放。进入主要场馆需单独购票：主教宫殿展览约2000匈牙利福林，圣安娜教堂钟楼眺望约1500福林，城市博物馆常设展览约1800福林。持“塞克什白堡卡”可在多数场馆享受折扣。学生、老年人和家庭有相应优惠，需出示有效证件。" />
              <InfoRow label="地址" value="Székesfehérvár, 8000 Hungary" />
              <InfoRow label="交通方式" value="从布达佩斯出发最为方便。在布达佩斯南部的Népliget汽车站乘坐长途巴士，约1小时车程，班次频繁（约每20-30分钟一班），可直接抵达塞克什白堡的汽车总站，老城就在步行范围内。从布达佩斯火车西站乘坐火车约1小时10分钟，但火车站距离老城中心稍远，需换乘本地公交或步行15-20分钟。自驾沿M7高速公路向南行驶约65公里，老城周边有多个付费停车场。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">要理解塞克什白堡的分量，得从一位伟大的国王说起。公元1000年，伊什特万一世在此加冕，成为匈牙利第一位基督教国王。他选择这片土地，建立了匈牙利第一个首都，并在此兴建了宏伟的圣母升天大教堂。这不是随意的选择，这里地处王国中心，地势平坦，水源充足，象征着新生王国的稳固与统一。从那时起，这座城就被赋予了神圣的使命。接下来的几百年里，它拥有了一个无上光荣的称号——“加冕之城”。整整37位匈牙利国王在这里戴上圣冠，其中15位也最终长眠于此。大教堂不仅是信仰的中心，更是王权的基石，它的祭坛之下，安放着这个王国最伟大的君主们。你可以想象，中世纪鼎盛时期，每一次加冕礼都是全欧洲瞩目的盛事，贵族、骑士、外国使节云集，这座小城是何等荣耀与繁华。</p>
              <p className="text-gray-700 leading-relaxed mb-4">然而，历史的剧本从不只有华彩乐章。16世纪，奥斯曼帝国的铁蹄踏碎了中欧的平静。1526年莫哈奇战役的惨败，是匈牙利乃至整个中欧的噩梦开端。塞克什白堡未能幸免。1543年，土耳其军队攻陷了这座荣耀之城。那不仅是军事的占领，更是文化的劫难。象征着王国灵魂的圣母升天大教堂，这座见证了无数辉煌时刻的建筑，被入侵者系统地拆毁，珍贵的石材被运去修建城堡和清真寺。超过一个半世纪的土耳其占领，几乎将地上的辉煌抹平。老城的面貌被彻底改变，教堂变成了清真寺，街道布局也按东方城镇的样式调整。那段黑暗岁月，是镌刻在城市记忆中最深的伤痕。</p>
              <p className="text-gray-700 leading-relaxed mb-4">转机出现在17世纪末，哈布斯堡王朝的军队终于将土耳其人驱逐。但光复带来的并非简单的复原。城市迎来了新的主人和新的时代精神——巴洛克风格。在哈布斯堡王朝和天主教会的推动下，一座全新的、巴洛克风格的城市在废墟上涅槃重生。我们今天看到的鹅黄色主教宫殿、装饰着华丽浮雕的市政厅、曲线优美的圣安娜教堂，大多是这个时期的产物。建筑者们或许怀着对往昔荣耀的追忆，但更多地是展现新时代的自信与虔诚。他们在旧地基上建起新楼宇，用新的艺术语言覆盖了战争的创伤。老城的网格状街道布局得以保留，但每一座新建的建筑，都在诉说着从废墟中站起的决心。</p>
              <p className="text-gray-700 leading-relaxed mb-4">19世纪，民族复兴的春风吹遍了匈牙利。塞克什白堡作为“国家摇篮”的象征意义被重新挖掘和歌颂。浪漫主义的思潮让人们对中世纪遗迹产生了浓厚兴趣。考古发掘开始了，人们小心翼翼地清理出古老大教堂的地基和国王们的石棺。这些发现震撼了全国，它们不仅是文物，更是民族精神的物证。20世纪，尽管经历了战争的再次洗礼，保护和修复工作从未停止。如今，当你漫步老城，你看到的是一个跨越千年的立体叙事：地下是考古学家揭示的中世纪基石与王室遗存，地面是优雅从容的巴洛克街道生活，而在人们的言谈与骄傲的眼神中，则流淌着那份从未中断的对自身历史的珍视。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  建议选择一个晴朗的上午，约9点左右抵达，这时柔和的晨光最适合拍照，游客也尚未涌入。整个深度游览需要5-6小时，节奏宜慢不宜快，核心是沉浸与感受。路线设计为环线，从象征起点的“废墟花园”开始，经历广场的开放、宫殿的庄严、教堂的灵性、小巷的静谧，最后在城市的制高点俯瞰全景作为结束，完成一次从历史到当下、从宏观到细节的完整体验。中午可以在主广场旁的餐厅享用一顿地道的匈牙利午餐，作为中途的美好休憩。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>周二至周五上午是老城最清静的时候，周末本地家庭出游较多。老城地面多为石板路，请务必穿一双舒适防滑的鞋子。部分博物馆内禁止拍照，尤其是有宗教圣物或脆弱考古发现的区域，进入前请留意标识。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从“废墟花园”开始你的朝圣，赤脚踏上或用手触摸那些暴露在天空下的巨大白色石基，那里曾是匈牙利荣耀的源头——圣母升天大教堂的根基。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">踱步到主广场中央，仰头凝视圣伊什特万骑马雕像威严的侧影，然后顺时针环绕广场一周，细看每一栋巴洛克立面上不同的神话人物与花卉雕刻。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">推开主教宫殿厚重的木门，沿着宽阔的楼梯走上二层，在那些悬挂着历代主教肖像的长廊里感受宗教权力在此地的绵延。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">一定要走进圣安娜教堂，在略显幽暗的内殿里静坐片刻，等待管风琴的试音声突然充满整个空间，那是直抵心灵的震颤。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">拐进广场东北方向的Zichy Mihály街，这条小巷藏着许多新艺术风格的住宅立面，仔细寻找门楣上精美的铁艺装饰和彩绘陶瓷拼贴。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">找到通往圣伊什特万大教堂新教堂的后街，从侧面那个不起眼的小门进入地宫，在昏暗的灯光下近距离观看考古发掘出的古老石棺与柱础。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">登上圣安娜教堂的钟楼，旋转的铁制楼梯狭窄而陡峭，但登顶后豁然开朗，整个老城红色的屋顶如同波浪般在你脚下铺展。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">最后回到主广场，选择一家有户外座位的咖啡馆，点一杯浓郁的匈牙利咖啡和一块本地特色的“塞克什白堡卷”，看着广场上的生活缓缓流动。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 主教宫殿前广场东侧</h4>
                  <p className="text-sm text-gray-700">下午三点后的斜阳能将宫殿的巴洛克立面勾勒出金色的轮廓，用拱门作为前景框架构图，可以捕捉到建筑与光影的戏剧性对话。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 圣安娜教堂钟楼顶部</h4>
                  <p className="text-sm text-gray-700">日落前一小时登上钟楼，向西拍摄，夕阳会为老城的屋顶镀上温暖的金红色，并能将远处现代城区的轮廓也纳入画面，形成古今对话。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. “废墟花园”北侧矮墙边</h4>
                  <p className="text-sm text-gray-700">清晨阳光角度较低时，从这里可以拍摄到散落的古老石基、后方的绿树与现代教堂尖顶的三层叠景，寓意着时间的层叠。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. Zichy Mihály街中段</h4>
                  <p className="text-sm text-gray-700">寻找一段墙面有斑驳剥落痕迹的巷子，利用巷道的纵深感，拍摄人物行走其中的背影，两侧色彩柔和的新艺术风格建筑是绝佳的背景板。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 主广场喷泉旁</h4>
                  <p className="text-sm text-gray-700">以广场中心的喷泉和圣伊什特万雕像为焦点，使用广角镜头低角度仰拍，能将雕像、蓝天和周围环抱的巴洛克建筑穹顶一同纳入，画面充满张力。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 匈牙利人对历史遗迹非常尊重，拍照时请尽量避免为了构图而攀爬古迹或踏入明确标识的保护区域。教堂内部若允许拍照，请务必关闭闪光灯，保持肃静。当地人通常不介意被摄入街景，但拍摄特写前一个友好的微笑和示意是很好的礼貌。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">历史中心客栈</h4>
                  <p className="text-sm text-blue-800">由一栋18世纪商人宅邸改造的家庭式酒店，房间天花板还保留着 original 的彩绘木梁，早餐在种满天竺葵的庭院里享用，老板娘会和你分享老城的秘闻。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">广场设计酒店</h4>
                  <p className="text-sm text-green-800">坐落主广场一角，将巴洛克外壳与斯堪的纳维亚风格的室内设计完美结合，房间拥有直面广场的阳台，是观察本地生活百态的绝佳舞台。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">静谧花园公寓</h4>
                  <p className="text-sm text-yellow-800">位于老城边缘一条安静小巷内，是一套带小厨房的独立公寓，房东会在冰箱里准备好欢迎饮料和本地葡萄酒，让你有像当地人一样“回家”的感觉。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">郊外庄园体验</h4>
                  <p className="text-sm text-purple-800">如果追求极致宁静，可以考虑城外5公里处一座19世纪的贵族庄园改建的精品酒店，骑马穿过庄园的林地后，回到有壁炉的图书馆喝一杯白兰地。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">老城内的住宿数量有限且非常抢手，尤其是在夏季 festivals 期间，务必提前数月预订。城区很小，住在核心区外步行10分钟范围内的区域，性价比更高，且同样安静便捷。匈牙利酒店通常不提供牙刷拖鞋等一次性用品，需自备。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开塞克什白堡老城时，我的背包里没有多出什么纪念品，但心里却好像被填进了一些沉甸甸的、温暖的东西。那不仅仅是对一段古老历史的认知，更像是一种关于“坚韧”的具身体验。你亲眼看到了，一个地方可以如何从荣耀的顶峰跌落，被摧毁，被占领，被几乎遗忘，然后又如何从最深的废墟里，一砖一瓦地，重新建立起自己的美丽与尊严。它的新衣裳（巴洛克风格）或许源于外来的统治者，但穿在身上后，却逐渐长成了自己肌肤的一部分，承载起了自己旧日的灵魂。</p>
              <p className="text-gray-700 leading-relaxed mb-4">在这个凡事求新求快、热点转瞬即逝的世界里，塞克什白堡提供了一种截然不同的时间维度。它提醒我们，有些价值——比如对根源的记忆、对创伤的愈合、在变迁中保持自我的连续——是需要以世纪为单位来衡量和培育的。它不张扬，不喧哗，只是安然地存在于多瑙河畔的平原上，像一位静默的智者。对于真正的深度旅行者来说，这里更像是一个心灵的驿站。它让你暂时离开那些标志性的、明信片式的欧洲风景，去触摸历史更复杂、更真实的纹理，去感受一座城市如何在跌宕命运中，守护住了自己那颗跳动不息的心脏。这趟旅程，最终会成为你理解中欧，乃至理解文明韧性的一个关键注脚。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
