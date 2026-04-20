import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '杜恩施泰因修道院 Dürnstein Abbey｜瓦豪河谷的蓝色珍珠与囚禁国王的传奇 - 最佳欧洲景点',
  description: '第一眼看到杜恩施泰因修道院，你一定会发出轻声的惊叹。它不是矗立在平地，而是以一种近乎优雅的姿态，“生长”在多瑙河畔一片陡峭的岩石山丘上。背后是连绵起伏、被整齐葡萄园覆盖的丘陵，面前是宛若玉带、静静流淌的墨绿色多瑙河。而其中最抓人眼球的，绝对是那座修长而精致的钟楼——它被涂上了极其特别的钴蓝色，点缀着...',
}

export default function DuernsteinAbbeyWachauPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '杜恩施泰因修道院', href: '/attractions/duernstein-abbey-wachau' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`杜恩施泰因修道院・Dürnstein Abbey・奥地利・杜恩施泰因 (Dürnstein)`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到杜恩施泰因修道院，你一定会发出轻声的惊叹。它不是矗立在平地，而是以一种近乎优雅的姿态，“生长”在多瑙河畔一片陡峭的岩石山丘上。背后是连绵起伏、被整齐葡萄园覆盖的丘陵，面前是宛若玉带、静静流淌的墨绿色多瑙河。而其中最抓人眼球的，绝对是那座修长而精致的钟楼——它被涂上了极其特别的钴蓝色，点缀着金色的星辰装饰，在阳光下闪闪发光，像一颗被遗落在青山绿水间的巨大宝石。那种蓝，不是地中海式的鲜亮，而是一种带着灰调的、沉静又高贵的蓝，与奥地利常有的铅灰色天空形成奇妙的和谐。
走近它，你需要穿过杜恩施泰因这个迷你却精致的小镇。石板路两旁是爬满藤蔓的古老房舍，空气中混合着咖啡香、刚出炉的“林茨蛋糕”的甜腻气息，以及从酒窖里飘出的淡淡葡萄酒香。当地人并不把修道院当作一个遥远的景点，而是生活背景的一部分。你会看到散步的老人习惯性地朝它的方向望一眼，就像确认一位老朋友是否安好。沿着略有坡度的蜿蜒小径向上，你的耳边会逐渐安静下来，只剩下自己的脚步声、鸟鸣，以及从多瑙河面传来的、隐约的轮船汽笛声。
当你终于站在修道院教堂门口，推开那扇厚重的木门，外面的世界瞬间被隔绝。一种混合着古老木头、冷冽石头和淡淡蜡烛味的特殊气息扑面而来。内部是典型的巴洛克奢华，金箔、大理石、精美的灰泥浮雕和大幅的宗教壁画充斥着视线。然而，最动人的不是极致的华丽，而是当你走到侧廊，透过一扇拱窗望出去的那一刻——窗框恰好将山下小镇的红色屋顶、蜿蜒的多瑙河以及对岸的葡萄园丘陵裁剪成一幅活的油画。光影在精美的 stucco 装饰上缓缓移动，这一刻，你会明白，这座建筑的精髓在于它与这片土地的完美交融，它既是一处宗教圣地，也是一个为这片绝世风光而设的、无比华丽的观景框。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到杜恩施泰因修道院，你一定会发出轻声的惊叹。它不是矗立在平地，而是以一种近乎优雅的姿态，“生长”在多瑙河畔一片陡峭的岩石山丘上。背后是连绵起伏、被整齐葡萄园覆盖的丘陵，面前是宛若玉带、静静流淌的墨绿色多瑙河。而其中最抓人眼球的，绝对是那座修长而精致的钟楼——它被涂上了极其特别的钴蓝色，点缀着金色的星辰装饰，在阳光下闪闪发光，像一颗被遗落在青山绿水间的巨大宝石。那种蓝，不是地中海式的鲜亮，而是一种带着灰调的、沉静又高贵的蓝，与奥地利常有的铅灰色天空形成奇妙的和谐。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近它，你需要穿过杜恩施泰因这个迷你却精致的小镇。石板路两旁是爬满藤蔓的古老房舍，空气中混合着咖啡香、刚出炉的“林茨蛋糕”的甜腻气息，以及从酒窖里飘出的淡淡葡萄酒香。当地人并不把修道院当作一个遥远的景点，而是生活背景的一部分。你会看到散步的老人习惯性地朝它的方向望一眼，就像确认一位老朋友是否安好。沿着略有坡度的蜿蜒小径向上，你的耳边会逐渐安静下来，只剩下自己的脚步声、鸟鸣，以及从多瑙河面传来的、隐约的轮船汽笛声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你终于站在修道院教堂门口，推开那扇厚重的木门，外面的世界瞬间被隔绝。一种混合着古老木头、冷冽石头和淡淡蜡烛味的特殊气息扑面而来。内部是典型的巴洛克奢华，金箔、大理石、精美的灰泥浮雕和大幅的宗教壁画充斥着视线。然而，最动人的不是极致的华丽，而是当你走到侧廊，透过一扇拱窗望出去的那一刻——窗框恰好将山下小镇的红色屋顶、蜿蜒的多瑙河以及对岸的葡萄园丘陵裁剪成一幅活的油画。光影在精美的 stucco 装饰上缓缓移动，这一刻，你会明白，这座建筑的精髓在于它与这片土地的完美交融，它既是一处宗教圣地，也是一个为这片绝世风光而设的、无比华丽的观景框。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`杜恩施泰因修道院`} />
                <InfoRow label="英文名称" value={`Dürnstein Abbey`} />
                <InfoRow label="正式名称" value={`Dürnstein Abbey (Stift Dürnstein)`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`杜恩施泰因 (Dürnstein)`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座修道院因与英格兰狮心王理查一世的囚禁传说紧密相连而闻名于世，是瓦豪河谷世界文化遗产中最具传奇色彩的地标之一。`} />
                <InfoRow label="建筑特色" value={`其巴洛克风格的蓝色钟楼堪称奥地利明信片级别的景观，独特的钴蓝色与白色装饰在葡萄园与多瑙河的映衬下无比夺目。`} />
                <InfoRow label="建筑风格" value={`主体建筑为巴洛克风格，由著名建筑师约瑟夫·芒格纳斯特等人设计，但其基址可追溯至更早的中世纪奥古斯丁修道院。`} />
                <InfoRow label="文化价值" value={`它不仅是巴洛克艺术的瑰宝，更是瓦豪河谷千年历史、葡萄酒文化与多瑙河贸易航线兴衰的无声见证者。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`修道院教堂全年对游客开放，通常为每天上午9点至傍晚6点，冬季可能提前至下午5点关闭。修道院博物馆和部分内部区域的开放时间较短，一般为每年四月至十月的上午10点至下午4点。具体时间可能因宗教活动或私人活动临时调整，建议行前查看官网公告。登顶蓝色塔楼的时间通常与博物馆开放时间一致。`} />
              <InfoRow label="门票价格" value={`进入修道院教堂区域免费。参观修道院博物馆及登顶标志性的蓝色塔楼需购买门票，成人票价约为6欧元。学生、老年人和团体通常享有折扣价。持有瓦豪河谷地区通票可能有优惠。具体票价以现场公示为准。`} />
              <InfoRow label="地址" value={`Stift Dürnstein, A-3601 Dürnstein, Austria`} />
              <InfoRow label="交通方式" value={`从维也纳出发最为方便。在维也纳中央火车站（Wien Hauptbahnhof）乘坐开往林茨（Linz）或克雷姆斯（Krems）的区域列车（RJ或REX），在克雷姆斯火车站下车，车程约1小时，班次频繁。从克雷姆斯火车站前，换乘邮政巴士（Postbus）WL1线前往杜恩施泰因，车程约20分钟，巴士每小时至少一班。更富诗意的选择是乘坐多瑙河游船，从克雷姆斯或梅尔克上船，在杜恩施泰因码头下船，步行5分钟即可抵达山脚下，船班季节性强，通常从四月运营到十月。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起杜恩施泰因修道院，就绕不开一段充满骑士浪漫与政治阴谋的传奇。时间回到1192年，第三次十字军东征归途中的英格兰国王“狮心王”理查一世，在维也纳附近被他的死敌——奥地利公爵利奥波德五世俘虏。传说中，这位叱咤风云的国王就被秘密关押在杜恩施泰因城堡的遗迹中，而那座城堡的废墟，至今仍高高矗立在修道院上方的山巅。故事的结局众所周知：理查的忠实吟游诗人布隆德尔一路寻访，最终在杜恩施泰因附近唱起了只有他们二人知道的歌曲，并听到了城堡内传来的和唱，从而确定了国王的囚禁之地。这段传说为这片土地蒙上了一层永恒的浪漫面纱，虽然历史学家对确切地点仍有争议，但杜恩施泰因已经永远和狮心王的名字绑在了一起。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而修道院本身的故事则始于稍晚一些的1410年。一群奥古斯丁修会的教士来到这里，建立了修道院。在随后的几个世纪里，它逐渐成为瓦豪河谷地区的宗教与文化中心。然而，真正让它焕发如今这般巴洛克光彩的，是17世纪末至18世纪初的那场大规模重建。当时的修道院院长雄心勃勃，决心要建造一座配得上这片绝景、也能彰显教会荣耀的新建筑。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，在1710年至1740年间，我们今天看到的大部分巴洛克建筑拔地而起。主持设计的建筑师约瑟夫·芒格纳斯特和后来的雅各布·普兰德陶尔等人，都是当时奥地利巴洛克建筑界的翘楚。他们大胆地采用了当时极为昂贵和罕见的钴蓝色颜料来装饰钟楼，使其从数公里外就能被一眼识别，成为多瑙河航道上最醒目的地标。这抹蓝色不仅是一种审美选择，更是一种权力的宣告——看，我们拥有财富和品位，能驾驭如此不凡的色彩。内部繁复到令人眼花缭乱的金色灰泥装饰、出自名家之手的壁画和雕塑，无不诉说着那个时代天主教会在反宗教改革运动后的自信与辉煌。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的浪潮总在起伏。1788年，皇帝约瑟夫二世推行了严厉的宗教改革，解散了这座修道院，其财产被没收，建筑一度荒废。幸运的是，它并未被彻底摧毁。后来几经易手，直到20世纪初，它被梅克伦堡-施威林家族购得并进行了谨慎的修复。如今，它虽然不再有常驻的修道士，但得到了精心的维护，作为一座活的历史纪念碑、博物馆和举办文化活动的场所，继续向世人讲述着瓦豪河谷千年的故事，从骑士传说，到巴洛克的荣光，再到今日的宁静与诗意。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`理想的游览从清晨开始，大约上午九点前抵达杜恩施泰因小镇。这时旅游团的大巴还未涌入，小镇和山径都还保持着宁静。整个深度游览建议留出4到5小时。节奏应该是悠闲的、沉浸式的，核心在于“上山”与“入内”的结合。先从山脚下的小镇和河岸感受氛围，然后沿着指示清晰的步道攀爬至山顶城堡废墟，这是消耗体力、也是获得全景视野的阶段。下山后，再进入修道院建筑内部，感受其艺术的精妙与空间的宁静，这恰好是一个从外在宏大到内在深邃的完美体验闭环。最后留些时间在葡萄园间的小径散步，或是在小镇酒馆坐下，让所有的感官印象慢慢沉淀。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`攀登城堡废墟的路径是原始的土石路，请务必穿着舒适防滑的徒步鞋，下雨天后道路会非常泥泞湿滑。
小镇和修道院咖啡馆在下午茶时段（约3-5点）可能人满为患，如果想安静享用咖啡和蛋糕，建议错峰或提前找好位置。
多瑙河游船班次有限且受季节和天气影响极大，如果计划乘船离开，务必提前查好时刻表并预留充足时间走到码头。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从杜恩施泰因小镇中心的石板主街开始漫步，路过那些外墙色彩柔和、挂着铁艺招牌的古老房屋和家族酒馆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着清晰的路标，开始沿着“城堡之路”向上攀登，在林木掩映的石阶与土路间穿梭，感受腿部微微发酸和心跳加速。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站上克恩滕城堡废墟的断壁残垣，喘着气，享受360度无死角的震撼全景，将蓝色修道院、翡翠色多瑙河与无尽葡萄园尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后，买票进入修道院内部，让眼睛适应从明亮到幽暗的光线变化，静静欣赏中殿那令人屏息的巴洛克奢华装饰。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`务必找到那扇能将窗外风景变成画作的侧廊拱窗，在那里发呆几分钟，听任时光与光影在古老的石壁上流淌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上蓝色钟楼内部狭窄的旋转楼梯，在塔楼的小露台上感受微风，以飞鸟的视角重新审视你刚刚攀登过的山丘与走过的小镇。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观完修道院博物馆，了解其历史与艺术收藏后，走到建筑外侧的露台，那里是拍摄蓝色钟楼与多瑙河同框的经典角度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，沿着修道院旁的葡萄园小径往东走一段，在一个无人的弯道回望，看整座建筑群在夕阳下逐渐变成一幅宁静的剪影。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡废墟山顶向西俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏时分，从此处用长焦镜头拍摄，可以将蓝色的修道院钟楼作为焦点，前景是小镇的红屋顶，背景是蜿蜒的多瑙河与层层叠叠的丘陵，构图极具层次感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`修道院回廊拱门框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`上午光线射入回廊时，选择一扇拱门作为画框，将对面的葡萄园山景或多瑙河一角框入其中，形成天然的景深和故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`多瑙河对岸的远眺点`}</h4>
                  <p className="text-sm text-gray-700">{`自驾或骑行可以过桥到多瑙河北岸，在沿途的任意一个葡萄园观景台停下，用广角镜头拍摄修道院雄踞于整片山崖与小镇之上的全景，特别适合表现其与环境的关系。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`修道院下方葡萄园小径仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光照亮钟楼侧面时，从东侧的葡萄园小径向上仰拍，让饱满的葡萄串或藤蔓作为前景，衬托出蓝天下的蓝色塔楼，画面充满生机与地域特色。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`小镇主街的纵深视角`}</h4>
                  <p className="text-sm text-gray-700">{`趁着清晨街巷无人的时候，站在主街一端，利用石板路形成的自然引导线，将视线引向街道尽头的修道院山门，捕捉小镇日常与神圣地标共存的瞬间。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以极大增强蓝天与白云的对比度，并消除葡萄叶和水面的反光，让瓦豪河谷的色彩更加饱和纯净。`}</li>
                <li>• {`在修道院教堂内部拍摄是允许的，但请务必关闭闪光灯，保持绝对的安静，并尊重正在祈祷或参观的其他人，有些特定区域（如祭坛后方）可能禁止拍摄。`}</li>
                <li>• {`利用多瑙河上游船经过时划出的波纹作为前景，可以给平静的河面照片增加动感和趣味，耐心等待一艘漂亮的白色游船进入你的取景框。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河景情怀之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住小镇中心一家有着数百年历史的石造建筑家庭旅馆，房间的木梁天花板吱呀作响，推开窗就能看到多瑙河的波光与对岸的葡萄园，晚上在花园里品尝主人自酿的雷司令。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`葡萄园中的隐居`}</h4>
                  <p className="text-sm text-green-800">{`选择山坡上一栋由古老农舍改造的精品民宿，被自家的葡萄园环绕，每天在鸟鸣中醒来，步行五分钟即可到达修道院，私密性极佳，仿佛拥有了整片山谷。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端历史沉浸`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻克雷姆斯或施皮茨附近一座由古老修道院或城堡改建的五星级酒店，享受极致的服务与历史氛围，在房间的露台上就能远眺杜恩施泰因的蓝色塔楼，将瓦豪河谷的精华尽收眼底。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`骑行旅者驿站`}</h4>
                  <p className="text-sm text-purple-800">{`如果你是骑行多瑙河小道的爱好者，可以选择小镇或邻近村庄专为骑行者设计的舒适客栈，提供安全的自行车库存、维修工具和富含碳水的美味早餐，与来自世界各地的同道中人交流路线。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`瓦豪河谷地区尤其是杜恩施泰因这样的热门小镇，夏季和秋季葡萄收获季的住宿非常紧俏，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`住在小镇内固然方便，但夜晚非常安静，餐饮选择有限；住在稍远一点的村庄或克雷姆斯，选择更多且价格可能更优，但需要依赖公共交通或自驾。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`许多家庭经营的民宿和酒店都附带自己的酒窖，入住时不妨询问是否有品酒体验或酒庄参观活动，这是深入当地文化的绝佳方式。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开杜恩施泰因的时候，我背包里最重的不是行李，而是满心的宁静与一种奇特的充实感。这个地方教会我的，不是某个具体的历史知识点，而是一种关于“风景”与“故事”如何水乳交融的体验。它让你用身体去记忆——攀登废墟时肌肉的酸楚，是触摸历史所需的力气；站在塔楼里感受到的、裹挟着河风与葡萄藤气息的微风，是这片土地千年的呼吸。蓝色钟楼不再只是一个建筑符号，而是成为了你视觉记忆里一个温暖的坐标，一种沉静的、属于奥地利的蓝。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率和打卡的世界里，杜恩施泰因修道院代表了一种相反的旅行哲学：它值得你专程为它停留，花上半天时间，什么也不做，只是看光影在山坡上游走，听钟声在河谷间回荡。它融合了传说的大气、历史的厚重、艺术的精妙与自然的纯粹。它告诉我们，最美的风景往往需要一点攀登才能领略，最动人的故事常常藏在华丽外表之下需要静静聆听的细节里。无论你是追寻狮心王足迹的历史迷，还是沉醉于巴洛克艺术的审美家，抑或只是一个渴望在山水间获得片刻安宁的旅人，杜恩施泰因都会慷慨地赠予你一份独一无二的、关于多瑙河的记忆。这份记忆，足以在往后许多个平凡的日子里，为你闪动一抹沉静而高贵的蓝光。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bad-ischl" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴德伊舍</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bad Ischl</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gmunden-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格蒙登城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gmunden Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gmunden-lake-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格蒙登湖城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gmunden Lake City</p>
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
