import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '利托米什尔 Litomyšl｜斯美塔那的故乡与文艺复兴刮画城堡 - 最佳欧洲景点',
  description: '第一次看到利托米什尔城堡时，我愣住了。那不是一个冰冷、威严的石头巨物，而像一本巨大的、被阳光晒得暖洋洋的立体故事书，摊开在捷克东部舒缓的丘陵之间。它的外墙不是光滑的石材，而是覆盖着成千上万幅浅浮雕般的刮画——飞禽走兽、神话人物、战争场景、蔓藤花纹……在午后柔和的光线下，这些赭石色背景上的白色图案仿佛...',
}

export default function LitomyslCastleAndHistoricCenterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '捷克', href: '/destinations/czech-republic' },
            { label: '利托米什尔市，帕尔杜比采州', href: '/destinations/czech-republic' },
            { label: '利托米什尔', href: '/attractions/litomysl-castle-and-historic-center' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`利托米什尔・Litomyšl・捷克・利托米什尔市，帕尔杜比采州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一次看到利托米什尔城堡时，我愣住了。那不是一个冰冷、威严的石头巨物，而像一本巨大的、被阳光晒得暖洋洋的立体故事书，摊开在捷克东部舒缓的丘陵之间。它的外墙不是光滑的石材，而是覆盖着成千上万幅浅浮雕般的刮画——飞禽走兽、神话人物、战争场景、蔓藤花纹……在午后柔和的光线下，这些赭石色背景上的白色图案仿佛在轻轻呼吸、低语。你忍不住想走近，用手指去触摸那些历经四百多年风雨、却依然线条清晰的刻画，感受工匠们当年用简单工具创造不朽的虔诚与温度。
穿过拱门进入城堡庭院，那种被艺术包围的感觉更加强烈。三层的回廊环绕着宁静的内院，每一面墙都是一幅连续的画卷。空气中混合着古老石头的清凉气息、从后面法式花园飘来的玫瑰与割草后的青草香。偶尔，从城堡深处的某个窗口，会流淌出钢琴练习曲的片段——这里毕竟是斯美塔那的故乡，音乐是渗入砖缝的灵魂。你会发现，这座宏伟建筑并非与世隔绝的博物馆，它的一侧是宁静的贵族花园，另一侧则直接俯瞰着小镇色彩柔和的巴洛克式山墙屋顶和教堂尖塔，居民在城堡脚下的咖啡馆悠闲地喝着啤酒，孩子们在广场上追逐鸽子。城堡就这么自在地“生长”在小镇的肌理里，既是历史的王冠，也是日常生活的背景板。
最打动我的，正是这种“高贵”与“亲切”不可思议的融合。它没有拒人千里的傲气，反而有一种被精心呵护的、鲜活的生命力。你可以花几个小时，像个解密者一样，细细解读外墙上一格一格的刮画故事；也可以只是坐在庭院的长椅上，看光影在浮雕上缓慢移动，听远处修道院的钟声准时敲响。在这里，艺术不是被供奉在玻璃柜里的珍品，而是你呼吸的空气、脚下的石板路、目光所及的每一寸风景。利托米什尔让你相信，美可以如此具象、如此可亲，并且历经数个世纪，依然在哺育着一方水土的灵魂。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一次看到利托米什尔城堡时，我愣住了。那不是一个冰冷、威严的石头巨物，而像一本巨大的、被阳光晒得暖洋洋的立体故事书，摊开在捷克东部舒缓的丘陵之间。它的外墙不是光滑的石材，而是覆盖着成千上万幅浅浮雕般的刮画——飞禽走兽、神话人物、战争场景、蔓藤花纹……在午后柔和的光线下，这些赭石色背景上的白色图案仿佛在轻轻呼吸、低语。你忍不住想走近，用手指去触摸那些历经四百多年风雨、却依然线条清晰的刻画，感受工匠们当年用简单工具创造不朽的虔诚与温度。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过拱门进入城堡庭院，那种被艺术包围的感觉更加强烈。三层的回廊环绕着宁静的内院，每一面墙都是一幅连续的画卷。空气中混合着古老石头的清凉气息、从后面法式花园飘来的玫瑰与割草后的青草香。偶尔，从城堡深处的某个窗口，会流淌出钢琴练习曲的片段——这里毕竟是斯美塔那的故乡，音乐是渗入砖缝的灵魂。你会发现，这座宏伟建筑并非与世隔绝的博物馆，它的一侧是宁静的贵族花园，另一侧则直接俯瞰着小镇色彩柔和的巴洛克式山墙屋顶和教堂尖塔，居民在城堡脚下的咖啡馆悠闲地喝着啤酒，孩子们在广场上追逐鸽子。城堡就这么自在地“生长”在小镇的肌理里，既是历史的王冠，也是日常生活的背景板。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动我的，正是这种“高贵”与“亲切”不可思议的融合。它没有拒人千里的傲气，反而有一种被精心呵护的、鲜活的生命力。你可以花几个小时，像个解密者一样，细细解读外墙上一格一格的刮画故事；也可以只是坐在庭院的长椅上，看光影在浮雕上缓慢移动，听远处修道院的钟声准时敲响。在这里，艺术不是被供奉在玻璃柜里的珍品，而是你呼吸的空气、脚下的石板路、目光所及的每一寸风景。利托米什尔让你相信，美可以如此具象、如此可亲，并且历经数个世纪，依然在哺育着一方水土的灵魂。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`利托米什尔`} />
                <InfoRow label="英文名称" value={`Litomyšl`} />
                <InfoRow label="正式名称" value={`Litomyšl Castle`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`利托米什尔市，帕尔杜比采州`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`联合国教科文组织世界遗产，是欧洲文艺复兴建筑与中欧本土传统完美结合的典范，更是“捷克音乐之父”贝德里赫·斯美塔那的出生地与精神故乡。`} />
                <InfoRow label="建筑特色" value={`拥有超过8000幅手工刮画（sgraffito）装饰的宏伟外立面，图案无一雷同，被誉为“立体的文艺复兴诗篇”。`} />
                <InfoRow label="建筑风格" value={`文艺复兴风格，融合了波希米亚本土的建筑传统与意大利的建筑理念。`} />
                <InfoRow label="文化价值" value={`一个将建筑艺术、音乐灵魂与宁静小镇生活融为一体的人文高地，是理解捷克民族精神与艺术传承的活态教科书。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡主体及主要展览区开放时间随季节变动：四月至十月，周二至周日 9:00 - 17:00（最晚入场16:00）；十一月至三月，仅周末 10:00 - 15:00 开放，且主要参观内容为导游带领的定时导览团，需提前查询当日场次。城堡剧院、酒窖等附属空间开放时间不同。全年周一闭馆（除法定假日外），圣诞节及新年期间有特殊闭馆安排。`} />
              <InfoRow label="门票价格" value={`城堡参观分为多条线路，基础线路（包含代表房间、城堡剧院）成人票价为180捷克克朗，优惠票（学生、老人）140捷克克朗。家庭套票（2大2小）约480克朗。仅参观城堡剧院或酒窖有单独小门票（约80克朗）。花园免费开放。建议提前在线购票以确保导览团席位，现场购票可能需等待。`} />
              <InfoRow label="地址" value={`Jiráskova 93, 570 01 Litomyšl, Czechia`} />
              <InfoRow label="交通方式" value={`从布拉格出发最为便捷：在布拉格主火车站（Praha hl.n.）乘坐前往捷克-特热博瓦（Česká Třebová）或布尔诺（Brno）方向的城际列车（IC或EC），在“Choceň”站下车（约1.5小时），然后转乘区域火车或巴士前往利托米什尔（约20-30分钟）。全程总耗时约2-2.5小时。从布尔诺出发有直达巴士，约1小时40分钟。小镇内所有景点步行可达，火车站步行至城堡约15分钟。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`利托米什尔的故事，始于一个关于爱情、野心与艺术鉴赏力的家族传奇。16世纪中叶，波希米亚贵族瓦茨拉夫·哈耶克·佩恩施泰因伯爵，为了迎娶西班牙贵族小姐玛利亚·曼里克·德·拉拉，决心建造一座配得上这段显赫婚姻的宅邸。他请来的意大利建筑师乔瓦尼·巴蒂斯塔·奥斯塔尔，没有照搬亚平宁半岛的样式，而是做了一次天才般的本土化实验。他采用了当时中欧流行的三翼宫殿布局，但外墙装饰，则引入了意大利文艺复兴时期流行的“Sgraffito”刮画技术。然而，奥斯塔尔让本地工匠自由发挥，于是，墙面上涌现的不再是古典神祇，而是充满波希米亚民间趣味的图案、象征家族荣耀的纹章、以及来自《圣经》和古代历史的故事场景。这座城堡从诞生之日起，就注定是一座文化交融的纪念碑。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡在接下来的几个世纪里，命运随着主人的更迭而起伏。它经历过战火的威胁，也享受过和平年代的繁荣。18世纪，城堡迎来了另一个高光时刻——特拉特曼斯多夫家族对内部进行了大规模的巴洛克式改造，其中最璀璨的明珠，便是在东翼建造的城堡剧院。这个几乎完整保存至今的剧院，是欧洲现存最古老的贵族私人剧院之一。木制的机械舞台、手绘的帆布背景、精美的宫廷包厢，仿佛将18世纪的夜晚凝固其中。你可以想象，当年贵族们身着华服，坐在这里观看莫扎特歌剧首演时的盛况。剧院的存在，为这座视觉艺术的圣殿，注入了流动的听觉灵魂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而真正让利托米什尔的名字镌刻进捷克民族心扉的，是1824年，在城堡酿酒师的小屋里，一个男婴的啼哭。他便是贝德里赫·斯美塔那。虽然斯美塔那幼年便随家迁往他处，但故乡的山水、城堡的轮廓、广场的钟声，成了他音乐中永恒的底色。他的交响诗套曲《我的祖国》里流淌的爱国深情，源头正是这片土地。每年夏天举办的“斯美塔那的利托米什尔”歌剧音乐节，让城堡庭院和剧院里重新充满他的乐章。音乐，成了城堡在新时代的脉搏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`二十世纪的动荡同样在这里留下印记。二战期间，城堡曾被纳粹占用；共产主义时期，它被收归国有，一度面临荒废。但幸运的是，它的核心价值从未被彻底遗忘。坚韧的当地人和有识之士，开始了漫长而精细的修复工作。1999年，利托米什尔城堡以其独一无二的文艺复兴刮画建筑群和完整的文化遗产价值，被列入联合国教科文组织世界遗产名录。这不仅是对其过去辉煌的认可，更是对其未来生命的保障。今天的城堡，不仅是旅游目的地，更是活跃的文化中心、音乐会场地、艺术工作坊和学校的延伸课堂。它从一座贵族的私宅，真正变成了全体人民，乃至全世界访客共同珍视的宝藏。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要完整领略利托米什尔的魅力，建议安排一整天时间。最佳策略是早上从布拉格或布尔诺出发，争取在十点前抵达小镇。这个时间游客尚未大批涌入，阳光角度也最适合欣赏城堡东立面和广场的建筑细节。游览节奏应张弛有度：上午聚焦城堡核心区域（内部房间、剧院），用心听导览，沉浸于历史；下午则留给花园、小镇街巷和斯美塔那相关景点，感受其生活化的一面。傍晚时分，当旅行团散去，是漫步和拍照的黄金时间。这样的安排既能深入理解其文化内核，又不失悠闲探索的乐趣。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡内部参观必须参加定时导览团（有捷克语和英语可选），务必提前在官网查好英语团时间并预留名额，现场买票很可能需要等待一两个小时。周一大部分室内场馆关闭，但小镇和城堡外部依然可逛，请据此规划行程。小镇路面多为石板路，请务必穿一双舒适耐走的鞋子。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨先别急着进城堡，在被誉为“捷克最美广场之一”的利托米什尔主广场（Smetanovo náměstí）找家咖啡馆坐下，喝一杯醇厚的捷克咖啡，看阳光如何慢慢点亮那些五彩的巴洛克和古典主义立面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从广场北侧沿着舒缓的坡道走向城堡，在进入大门前，务必停下脚步，从左到右细细端详外墙上一幅接一幅、栩栩如生的文艺复兴刮画故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随导览团步入城堡内部，在装饰华丽的代表房间里，听讲解员讲述佩恩施泰因家族的兴衰与那些精致家具、壁画背后的轶事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要在古老的城堡剧院里多停留一会儿，试着想象舞台机械运转、烛光摇曳下，一场两百多年前的宫廷演出正在上演。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡侧门进入法式花园，沿着修剪整齐的树篱散步，走到花园尽头的山坡上，回望城堡全景和它身后的小镇屋顶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探访城堡酿酒厂建筑内的贝德里赫·斯美塔那出生纪念馆，在那个简朴的小房间里，感受伟大音乐家人生起点的温度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过宁静的修道院花园，走进曾经的皮亚里斯特修道院，如今这里是令人惊叹的现代艺术画廊，古典建筑与现代展品的碰撞极具冲击力。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前回到主广场，登上旧市政厅的塔楼，在钟声里俯瞰被金色夕阳笼罩的整个小镇与城堡，结束完美的一天。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡广场仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，阳光从西面照亮城堡主立面，站在广场喷泉附近，用广角镜头将宏伟的刮画城堡与前景的巴洛克雕塑一同纳入画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡花园回廊倒影`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或雨后的上午，花园水池平静无波时，在回廊靠近水池的一侧，可以拍摄城堡倒映在水中的对称完美影像，充满静谧感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`刮画特写与光影`}</h4>
                  <p className="text-sm text-gray-700">{`正午前后，阳光直射时浮雕感最强，寻找图案特别丰富的一幅刮画（如寓言场景），贴近拍摄，捕捉石材的质感与阴影形成的戏剧性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`斯美塔那纪念馆窗景`}</h4>
                  <p className="text-sm text-gray-700">{`在作曲家出生房间的窗口向外拍摄，将窗框作为画框，构图囊括窗外城堡的一角与红瓦屋顶，寓意音乐与故乡的联结。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`修道院画廊旋转楼梯`}</h4>
                  <p className="text-sm text-gray-700">{`在皮亚里斯特修道院内部的现代画廊区域，找到那个极简主义的白色旋转楼梯，从上方向下俯拍，能获得具有强烈几何美感的构图。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄城堡外部刮画时，注意观察光线角度，侧光最能突出浮雕的立体感。尊重隐私，避免用长焦镜头窥探城堡对面私人住宅的窗户。小镇居民生活宁静，拍摄街头人物时请尽量保持距离或先微笑示意。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`老城心脏之选`}</h4>
                  <p className="text-sm text-blue-800">{`主广场旁一栋16世纪市民住宅改造的精品酒店，房间拥有古老的木梁天花板，晚上枕着广场轻柔的喧闹声入眠，清晨在咖啡香中醒来。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`城堡视野民宿`}</h4>
                  <p className="text-sm text-green-800">{`坐落在城堡附近山坡上的家庭式民宿，主人热情好客，从早餐室的窗户就能望见城堡的塔楼，步行至小镇中心仅需五分钟。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`修道院静谧客房`}</h4>
                  <p className="text-sm text-yellow-800">{`由历史建筑改造的独特住宿，位于宁静的修道院区域，房间挑高极高，充满历史感，提供绝对的宁静，适合寻求避世感的旅人。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`郊外田园庄园`}</h4>
                  <p className="text-sm text-purple-800">{`距离小镇几分钟车程的乡村庄园酒店，周围是田野和森林，提供骑马、骑行等户外活动，体验完浓郁的历史后，在此彻底放松身心。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季音乐节期间（六月左右）住宿非常紧张，务必提前数月预订。小镇治安极佳，夜间行走非常安全。选择住在老城内虽然价格略高，但能获得沉浸式的体验，省去交通烦恼。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开利托米什尔好些天了，但我的指尖仿佛还能触碰到那些外墙刮画微微粗糙的质感，耳朵里还回响着从某扇敞开的窗户里飘出的、生涩却认真的钢琴练习曲。这个地方教会我的，是一种关于“传承”的温柔定义。它不是一个僵死在历史书里的名字，而是依然在生长、在呼吸的有机体。贵族创造了它的形，艺术家注入了它的魂，而一代代平凡的当地人，用日常的经过、节庆的装饰、细心的维护，赋予了它绵延不绝的生命力。在这里，你会看到管理员老太太像擦拭自家家具一样， lovingly 拂过剧院包厢的栏杆；你会听到咖啡馆老板如数家珍地向客人介绍外墙某幅刮画讲述的古老寓言。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求速度与噱头的世界里，利托米什尔是一种倔强而美好的“慢”。它不急于向你炫耀什么，只是静静在那里，等你愿意放慢脚步，去阅读一堵墙，去聆听一个庭院里的回声，去理解一片土地如何孕育出震动民族的音符。它告诉我们，真正的深度，不在于打卡了多少个景点，而在于你是否允许自己与一个地方产生细腻的、多维度的连接——视觉的、听觉的、历史的、情感的。如果你也渴望一场能沉淀在心里的旅行，那么请务必来利托米什尔。让它用石头上的诗篇和空气中的旋律，为你讲述一个关于美、坚韧与家园的，永远不会结束的故事。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/karlovy-vary-spa-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡罗维发利温泉镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Karlovy Vary</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/slavonice-renaissance-frescoes" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯拉沃尼采</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Slavonice</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/znojmo-historic-center-underground-labyrinth" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    兹
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">兹诺伊莫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Znojmo</p>
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
