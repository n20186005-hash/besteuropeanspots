import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '图宾根大学城 Tübingen｜内卡河畔的千年书香与青春协奏曲 - 最佳欧洲景点',
  description: '如果你问我图宾根是什么味道的，我会说，是初夏内卡河面上飘来的、混合了湿润水汽与岸边老房子木料清香的微凉气息，再搅进去一丝从街角面包店溜出来的黄油焦香。你的第一眼，大概率会被那排沿着河道曲线、漆成鹅黄、玫红、薄荷绿的木桁架老房子夺去呼吸。它们像一群挤在一起看热闹的彩色积木，倾斜的屋顶和探出的窗台几乎要...',
}

export default function TuebingenOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '图宾根大学城', href: '/attractions/tuebingen-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">图宾根大学城・Tübingen・德国・图宾根</h1>
          <p className="text-lg text-gray-600 mb-6">
            如果你问我图宾根是什么味道的，我会说，是初夏内卡河面上飘来的、混合了湿润水汽与岸边老房子木料清香的微凉气息，再搅进去一丝从街角面包店溜出来的黄油焦香。你的第一眼，大概率会被那排沿着河道曲线、漆成鹅黄、玫红、薄荷绿的木桁架老房子夺去呼吸。它们像一群挤在一起看热闹的彩色积木，倾斜的屋顶和探出的窗台几乎要吻到水面。但别急，真正让图宾根活起来的，是河上那一条条细长的平底船。穿着衬衫的学生船夫，用一根长长的竹篙，不紧不慢地将船撑过水面，船上或许是一群高声谈笑的朋友，或许是一对静静依偎的情侣。那“笃、笃”的竹篙点水声，是这座城市永恒的背景音。
然后你走上河岸，钻进那些窄得只容一人通过的巷子，比如著名的“法官巷”。脚下的鹅卵石被无数代人的鞋底磨得光滑如镜，两旁山墙高耸，几乎遮住了天空，只留下一线光带，打在墙面那些古老而俏皮的木雕装饰上——可能是一个吐着舌头的鬼脸，也可能是一个酿酒师的标志。你忽然意识到，这里的每一栋房子都不是冰冷的博物馆展品，楼下的花店、书店、小酒馆照常营业，楼上的窗台晾晒着衣物，种满了天竺葵。学术的严肃与生活的烟火，在这里没有界限。
最打动我的，是那种无处不在的、从容不迫的智慧氛围。它不是高高在上的，而是流淌在街角书店的橱窗里，溶解在街头哲学家般的辩论声中，隐藏在集市广场上那个一手拎着菜篮子、一手夹着厚厚古籍的老教授的背影里。图宾根的核心魅力，就在于这种“活着的传统”。大学不是围墙内的孤岛，它就是古城的骨骼、血液和呼吸。你感受到的，是一个历经近550年书香熏陶的社区，如何将深刻的思考化为日常的优雅。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">如果你问我图宾根是什么味道的，我会说，是初夏内卡河面上飘来的、混合了湿润水汽与岸边老房子木料清香的微凉气息，再搅进去一丝从街角面包店溜出来的黄油焦香。你的第一眼，大概率会被那排沿着河道曲线、漆成鹅黄、玫红、薄荷绿的木桁架老房子夺去呼吸。它们像一群挤在一起看热闹的彩色积木，倾斜的屋顶和探出的窗台几乎要吻到水面。但别急，真正让图宾根活起来的，是河上那一条条细长的平底船。穿着衬衫的学生船夫，用一根长长的竹篙，不紧不慢地将船撑过水面，船上或许是一群高声谈笑的朋友，或许是一对静静依偎的情侣。那“笃、笃”的竹篙点水声，是这座城市永恒的背景音。</p>
              <p className="text-gray-700 leading-relaxed mb-4">然后你走上河岸，钻进那些窄得只容一人通过的巷子，比如著名的“法官巷”。脚下的鹅卵石被无数代人的鞋底磨得光滑如镜，两旁山墙高耸，几乎遮住了天空，只留下一线光带，打在墙面那些古老而俏皮的木雕装饰上——可能是一个吐着舌头的鬼脸，也可能是一个酿酒师的标志。你忽然意识到，这里的每一栋房子都不是冰冷的博物馆展品，楼下的花店、书店、小酒馆照常营业，楼上的窗台晾晒着衣物，种满了天竺葵。学术的严肃与生活的烟火，在这里没有界限。</p>
              <p className="text-gray-700 leading-relaxed mb-4">最打动我的，是那种无处不在的、从容不迫的智慧氛围。它不是高高在上的，而是流淌在街角书店的橱窗里，溶解在街头哲学家般的辩论声中，隐藏在集市广场上那个一手拎着菜篮子、一手夹着厚厚古籍的老教授的背影里。图宾根的核心魅力，就在于这种“活着的传统”。大学不是围墙内的孤岛，它就是古城的骨骼、血液和呼吸。你感受到的，是一个历经近550年书香熏陶的社区，如何将深刻的思考化为日常的优雅。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="图宾根大学城" />
                <InfoRow label="英文名称" value="Tübingen" />
                <InfoRow label="正式名称" value="Tübingen" />
                <InfoRow label="国家" value="德国" />
                <InfoRow label="城市" value="图宾根" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="一座被学术灵魂彻底浸润的千年古城，是德国“大学城”最经典、最生动的代名词。" />
                <InfoRow label="建筑特色" value="内卡河两岸密密麻麻、色彩斑斓的木桁架房屋，与蜿蜒陡峭的鹅卵石小巷共同构成宛如立体绘本的童话街景。" />
                <InfoRow label="建筑风格" value="从中世纪晚期到文艺复兴风格的木桁架建筑为主，点缀着哥特式的教堂和巴洛克式的大学建筑细节。" />
                <InfoRow label="文化价值" value="见证了从中世纪修道院学校到现代卓越大学的完整教育史，是德国人文主义传统与市井生活气息无缝交融的活化石。" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="老城街道及公共区域全天开放。重要建筑如老大学楼、圣乔治教堂、霍亨图宾根城堡等内部参观时间各异：通常为周二至周日10:00-17:00，周一闭馆或开放时间缩短。圣诞市场期间（11月下旬至12月23日）及大学假期时，城内氛围与部分机构开放时间会有显著变化。建议行前在官网核实。" />
              <InfoRow label="门票价格" value="漫步老城免费。进入霍亨图宾根城堡庭院免费，城堡博物馆门票约5欧元。圣乔治教堂塔楼登顶约2欧元。内卡河上的传统平底船（Stocherkahn）游览约8-10欧元/人。学生、儿童、团体均有优惠。" />
              <InfoRow label="地址" value="老城核心区：Am Markt, 72070 Tübingen, Germany" />
              <InfoRow label="交通方式" value="从斯图加特机场（STR）出发最便捷：乘坐S-Bahn（S2或S3线）直达斯图加特主火车站，耗时约30分钟。在斯图加特主火车站转乘区域火车（RE或RB），约40-60分钟即可抵达图宾根主火车站，班次密集，每20-30分钟一班。从图宾根主火车站出来，步行15分钟或乘坐多路公交车（如1, 2, 3, 4, 11路）在“Stadtmitte”或“Holzmarkt”下车，即刻投入老城怀抱。建议购买巴登-符腾堡州日票（Baden-Württemberg-Ticket）或使用德铁APP提前购票。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">故事要从公元1078年说起，那时“杜宾根”这个名字第一次出现在文献上，指的是内卡河畔一处由当地贵族修建的城堡。中世纪时，它靠着葡萄酒贸易和集市渐渐繁荣起来，成了一个典型的施瓦本小镇。命运的转折点发生在1477年，那一年，符腾堡伯爵埃伯哈德五世做了一件影响深远的事：他创立了图宾根大学。在当时，这可不是为了赶时髦，而是有着深刻的政治和宗教考量——伯爵需要为自己的领地培养神学家、法学家和行政官员，以巩固统治。最初的大学就设在老城中心的奥古斯丁修道院里，朗朗书声第一次回荡在这些古老的石墙之间。</p>
              <p className="text-gray-700 leading-relaxed mb-4">大学成立没多久，就撞上了席卷欧洲的宗教改革浪潮。16世纪初，一位名叫菲利普·梅兰希通的天才青年被请到了图宾根，他不仅是马丁·路德的亲密战友，更是被誉为“德国的老师”。他为图宾根大学设计了新的课程体系，将其打造成了新教人文主义的重要堡垒。从此，图宾根的学术基因里，就深深烙印下了独立思考与批判精神。接下来的几百年，它像一个稳定的磁场，吸引着各路思想者。天文学家开普勒曾在此求学，哲学家黑格尔和谢林在这里既是同窗又是室友，诗人荷尔德林则在一座塔楼里度过了他精神世界最后的、也是极为丰产的三十年。</p>
              <p className="text-gray-700 leading-relaxed mb-4">这座城与它的大学，在战争与和平的交替中相依为命。它幸运地躲过了二战炮火的严重摧残，那些歪歪扭扭的木桁架房子才得以完整保留。战后，大学急速扩张，学生人数从几千暴涨到近三万，但奇妙的是，古城并未被现代化的庞然大物吞噬。新的学院和研究所被巧妙地安置在城区外围或山坡上，而老城的核心，依然留给小巷、咖啡馆、小书店和那些世代居住于此的市民。漫步其中，你还能找到1477年大学成立时的原始建筑“老礼堂”，也能看到20世纪60年代学生运动时涂鸦的残迹——它们层层叠叠，共同构成了这部活的史书。</p>
              <p className="text-gray-700 leading-relaxed mb-4">今天，当你看到骑着自行车的诺贝尔奖得主与买菜的老太太在集市上擦肩而过，当你在传统的学生酒馆里听到关于最新量子物理的激烈讨论，你就明白了。图宾根的历史不是封存在玻璃柜里的，它是一场从未间断的对话，发生在古老的石墙之间，由一代又一代的教授、学生和市民，用思想、生活与热爱共同书写。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  要真正品尝图宾根的韵味，请务必预留一整天时间。最佳的抵达时间是早上九点前，这时游客尚未涌入，阳光刚刚照亮内卡河的波光，你可以独享老城的宁静晨曲。整体游览节奏应是“慢”字诀，以散步和发呆为主，路线是一个从河边到山丘再回到河边的环形。上午先沿内卡河与老城低处的巷弄探访，感受市井活力；午后登上城堡山，俯瞰全景并参观博物馆；傍晚时分回到河畔，体验平底船或是在哲学家小径上等待日落。这样安排能让你完整地体验从具体而微的细节到宏大画卷，再到内心沉淀的全过程。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>周一很多博物馆和小型景点闭馆，务必避开这天进行深度文化游览。老城街道多为崎岖不平的鹅卵石，请务必穿一双绝对舒适防滑的鞋子。许多地道的小酒馆和餐厅在下午两点到六点之间可能休息，规划午餐和晚餐时间要留心。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从集市广场的文艺复兴喷泉出发，摸一摸代表城市四大阶层的雕像，感受一下几个世纪以来市民生活的中心脉搏。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">钻进通往内卡河的下坡小巷，让脚步在古老的鹅卵石上打滑，两旁的木桁架房子像彩色画廊一样向你挤压过来。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">站在内卡桥上，向左看是霍亨图宾根城堡威严的侧影，向右看是挤满彩色房屋的河道弯角和平底船码头，这是明信片视角的诞生地。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">去圣乔治教堂内部静坐片刻，仰头看看那些复杂的晚期哥特式网状拱顶，然后鼓起勇气登上狭窄的螺旋塔楼，让整个红屋顶森林在你脚下展开。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">在山脚下的“Platanenallee”梧桐大道找一位学生船夫，跳上一条传统的平底船，让他用长篙带你缓缓滑过水面，从独一无二的角度仰望那些似乎要倒进河里的老房子。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">穿过热闹的“Kornhaus”谷物仓库广场，如今它是学生咖啡馆的聚集地，随便选一家坐下，点一杯“Viertele”（四分之一升）当地葡萄酒，看人来人往。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">拜访那座紧邻内卡河的“荷尔德林塔”，走进诗人曾居住的小房间，想象他在精神困境中仍写出“人，诗意地栖居”这句名言的场景。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">在日落前，沿着内卡河对岸的“哲学家小径”漫步，这是黑格尔、谢林等哲人当年散步沉思的路，如今你也能在此收获俯瞰古城与大学的黄金时刻。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 内卡桥东侧栏杆处</h4>
                  <p className="text-sm text-gray-700">清晨或傍晚柔和光线下，使用中焦段镜头，将河道弯角处密集的彩色木桁架房屋与一两只停泊的平底船一同纳入构图，画面充满宁静的生活诗意。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 圣乔治教堂塔楼顶部</h4>
                  <p className="text-sm text-gray-700">登上塔楼后，将相机镜头从防护网的缝隙中伸出，拍摄老城红色屋顶如波浪般涌向远方内卡河与绿色丘陵的360度全景，最佳时间是雨过天晴的午后。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 荷尔德林塔对岸的河畔</h4>
                  <p className="text-sm text-gray-700">黄昏时分，天空呈现蓝调时刻，以平静的河水为前景，拍摄亮起温暖灯光的荷尔德林塔及其在水中的完美倒影，营造静谧而富有文学感的氛围。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. “Bursagasse”巷子入口</h4>
                  <p className="text-sm text-gray-700">下午阳光斜射时，站在巷口向内拍摄，利用巷道的纵深感，让两侧高大、倾斜的木桁架山墙形成天然的画框，捕捉一位当地居民或学生自然走过的瞬间。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 霍亨图宾根城堡的露台</h4>
                  <p className="text-sm text-gray-700">利用城堡露台的矮墙作为自然前景，拍摄脚下整个图宾根老城、内卡河以及远方田野的广阔景深，尤其适合在春季树木新绿或秋季层林尽染时拍摄。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 携带一个轻便的定焦镜头（如35mm或50mm）非常适合捕捉老城狭窄巷弄的氛围感。拍摄居民或学生时请务必保持尊重，微笑示意或事后道谢是应有的礼貌。尝试在阴天拍摄，柔和的散射光更能体现木桁架建筑丰富的色彩和纹理细节。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">预算之选</h4>
                  <p className="text-sm text-blue-800">老城内由历史住宅改造的温馨家庭旅馆，房间天花板是裸露的古老木梁，早餐是女主人自制的果酱和新鲜烘焙的Brezen（德国碱水结），晚上能听到远处教堂的悠扬钟声。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">特色体验</h4>
                  <p className="text-sm text-green-800">住在内卡河畔一栋拥有500年历史的木桁架建筑里，房间窗户直接探向河道，清晨在平底船的划水声中醒来，仿佛自己也成了老城画卷中的一笔。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">高端享受</h4>
                  <p className="text-sm text-yellow-800">位于古城制高点、由霍亨图宾根城堡部分建筑改建的豪华酒店，不仅拥有无可匹敌的俯瞰全景，其房间内饰完美融合了古董家具与现代设计，并提供产自酒店自有葡萄园的珍酿。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">学者之风</h4>
                  <p className="text-sm text-purple-800">大学周边由古老学院建筑管理的宾客公寓，风格简朴而充满书卷气，你可能与来访的客座教授为邻，在公共厨房里就能展开一场有趣的跨文化交流。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">图宾根是热门会议和开学季目的地，务必提前数月预订，尤其是周末和夏季。住在老城内虽氛围绝佳，但需忍受夜间酒吧区的轻微嘈杂和禁止车辆通行的不便——行李可能需要手提一段路。如果追求绝对宁静，可以选择河对岸或城堡山更高处的住处，步行下山进入老城也只需十分钟。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开图宾根很久以后，我记忆最深的不是某个具体的建筑，而是一种整体的“感觉”。那是一种被智慧与时间共同浸泡过的、温和而坚定的氛围。在这个凡事求快、追求颠覆的世界里，图宾根像一条沉稳流淌的内卡河，它不抗拒变化——你看得到最前沿的实验室和思潮，但它更懂得守护那些恒久的价值：对知识的敬畏，对生活的热爱，对历史的尊重。它告诉你，传统不是枷锁，而是让创新扎根更深的肥沃土壤；学术不是象牙塔，而是可以与市集喧哗、孩童嬉笑、河水汤汤和谐共存的日常风景。</p>
              <p className="text-gray-700 leading-relaxed mb-4">这就是为什么，每一位真正的深度旅行者都应该来图宾根住上几天。它不是一个用来“打卡”的景点清单，而是一个需要你用脚步丈量、用呼吸感受、用心跳共鸣的生命体。在这里，你会放下急匆匆的行程表，愿意花一个下午看河水流淌，花一个晚上在小酒馆里听陌生人讨论哲学。你会被提醒，旅行的意义不仅仅是去看不同的风景，更是去体验一种不同的、可能更完整的生活节奏与精神状态。图宾根，这座内卡河畔的千年古城，最终赠与你的，或许正是一份“诗意栖居”的短暂可能，和一份关于深度与从容的悠长回味。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
