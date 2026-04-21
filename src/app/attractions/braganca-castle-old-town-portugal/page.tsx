import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布拉干萨城堡与老城 Bragança Castle｜葡萄牙最偏远王族故里的千年孤傲 - 最佳欧洲景点',
  description: '车子在绵延不绝的、被橡树与栗子树覆盖的山丘间穿行了似乎无穷无尽的时间后，一片突兀的、坚实的灰色轮廓突然出现在地平线的山脊上。那就是布拉干萨，它不像那些优雅的河边古城，它带着一种近乎粗野的骄傲，孤零零地矗立在葡萄牙与西班牙交接的荒原之上。第一眼，你感受到的不是美丽，而是一种沉重的、来自石头的沉默力量。...',
}

export default function BragancaCastleOldTownPortugalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '葡萄牙', href: '/destinations/portugal' },
            { label: '布拉干萨城堡与老城', href: '/attractions/braganca-castle-old-town-portugal' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`布拉干萨城堡与老城・Bragança Old Town and Castle・葡萄牙・布拉干萨`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在绵延不绝的、被橡树与栗子树覆盖的山丘间穿行了似乎无穷无尽的时间后，一片突兀的、坚实的灰色轮廓突然出现在地平线的山脊上。那就是布拉干萨，它不像那些优雅的河边古城，它带着一种近乎粗野的骄傲，孤零零地矗立在葡萄牙与西班牙交接的荒原之上。第一眼，你感受到的不是美丽，而是一种沉重的、来自石头的沉默力量。风在这里是永远的主角，它呼啸着穿过城墙的垛口，发出低沉的呜咽，带来清冷的、带着松针和远处荒野气息的空气。
走进萨莫拉门，时光仿佛瞬间被调慢了数个世纪。脚下是巨大花岗岩石板铺就的陡峭小路，被无数代人的鞋底磨得中心发亮、边缘粗粝。阳光在两侧高耸的石头房屋间切割出锋利的光与影。这里安静得惊人，只能听见自己的脚步声、风声，以及某扇木窗后隐约传来的收音机里的法多音乐。晾晒的衣物在狭窄的巷子上空飘荡，老妇人坐在门前的石阶上静静地剥着豆子，对你投来平静而略带好奇的一瞥——这里首先是一个活着的小社区，然后才是一个景点。生活的烟火气与历史的肃穆感，在这城墙内毫无间隙地交融着。
而这一切的中心，就是那座城堡。它不像浪漫的新天鹅堡，而更像一个攥紧的拳头，一座为战争而生的机器。爬上城墙，当你触摸到那些冰冷、粗糙、在千年风霜中变得黝黑的巨石时，一种奇特的感受会攫住你。你站的地方，是王国的尽头。向东望去，是无垠的西班牙土地，历史上多少威胁与入侵曾从那个方向涌来。这座城堡和老城，就像一个民族倔强的下巴，始终昂着，守卫着身后的一切。它的核心魅力，正是这种极致的“边缘感”——地理的边缘、历史的边缘，以及在现代世界中保持自我节奏的边缘。在这里，你触摸到的不仅是石头，更是一种近乎顽固的生存意志。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在绵延不绝的、被橡树与栗子树覆盖的山丘间穿行了似乎无穷无尽的时间后，一片突兀的、坚实的灰色轮廓突然出现在地平线的山脊上。那就是布拉干萨，它不像那些优雅的河边古城，它带着一种近乎粗野的骄傲，孤零零地矗立在葡萄牙与西班牙交接的荒原之上。第一眼，你感受到的不是美丽，而是一种沉重的、来自石头的沉默力量。风在这里是永远的主角，它呼啸着穿过城墙的垛口，发出低沉的呜咽，带来清冷的、带着松针和远处荒野气息的空气。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进萨莫拉门，时光仿佛瞬间被调慢了数个世纪。脚下是巨大花岗岩石板铺就的陡峭小路，被无数代人的鞋底磨得中心发亮、边缘粗粝。阳光在两侧高耸的石头房屋间切割出锋利的光与影。这里安静得惊人，只能听见自己的脚步声、风声，以及某扇木窗后隐约传来的收音机里的法多音乐。晾晒的衣物在狭窄的巷子上空飘荡，老妇人坐在门前的石阶上静静地剥着豆子，对你投来平静而略带好奇的一瞥——这里首先是一个活着的小社区，然后才是一个景点。生活的烟火气与历史的肃穆感，在这城墙内毫无间隙地交融着。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而这一切的中心，就是那座城堡。它不像浪漫的新天鹅堡，而更像一个攥紧的拳头，一座为战争而生的机器。爬上城墙，当你触摸到那些冰冷、粗糙、在千年风霜中变得黝黑的巨石时，一种奇特的感受会攫住你。你站的地方，是王国的尽头。向东望去，是无垠的西班牙土地，历史上多少威胁与入侵曾从那个方向涌来。这座城堡和老城，就像一个民族倔强的下巴，始终昂着，守卫着身后的一切。它的核心魅力，正是这种极致的“边缘感”——地理的边缘、历史的边缘，以及在现代世界中保持自我节奏的边缘。在这里，你触摸到的不仅是石头，更是一种近乎顽固的生存意志。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`布拉干萨城堡与老城`} />
                <InfoRow label="英文名称" value={`Bragança Old Town and Castle`} />
                <InfoRow label="正式名称" value={`布拉干萨城堡与历史中心`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`布拉干萨`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这里是葡萄牙最东北端的边境要塞，也是布拉干萨王朝——统治葡萄牙直至1910年的最后一个王室的发源地与命名地。`} />
                <InfoRow label="建筑特色" value={`一座完美保存的中世纪城堡与卵石街道的老城被巨大的锯齿状城墙完整地包裹在一起，像一枚被时光遗忘的石头徽章。`} />
                <InfoRow label="建筑风格" value={`以坚固的罗曼式与哥特式军事建筑为核心，融合了当地传统民居的朴素花岗岩风格。`} />
                <InfoRow label="文化价值" value={`是葡萄牙国家认同与独立精神的北方基石，保留了极其纯正且未被过度旅游打扰的边境山城生活样貌。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡与城墙：全年开放，每日上午9:00至下午7:00（夏季4月至9月），上午9:00至下午5:00（冬季10月至3月）。城堡主塔（唐若望塔）内部及军事博物馆：周二至周日开放，时间为上午10:00至下午5:30，周一闭馆。老城内各教堂及民俗博物馆开放时间较为灵活，建议上午10点后前往。元旦、复活节及圣诞节部分设施关闭。`} />
              <InfoRow label="门票价格" value={`进入老城及城墙区域免费。登上城堡主塔（唐若望塔）及参观内部军事博物馆：成人票3欧元，65岁以上及学生票1.5欧元，12岁以下儿童免费。每周日上午10点至下午2点免费入场。持有葡萄牙文化遗产联票有折扣。`} />
              <InfoRow label="地址" value={`Castelo de Bragança, 5300-025 Bragança, Portugal`} />
              <InfoRow label="交通方式" value={`布拉干萨地理位置偏远，是其魅力的一部分。最近的主要机场是波尔图国际机场。从波尔图出发最推荐自驾，沿A4公路向东行驶约2.5-3小时，沿途是连绵起伏的山丘和葡萄园，风景本身就是旅程。若乘坐公共交通：从波尔图坎帕汉火车站乘坐Regional列车至布拉干萨站，每天约4-5班车，车程约3.5-4小时，班次稀疏，务必提前查好时刻表。从布拉干萨火车站到老城，打车约10分钟，或可步行25分钟上山。城内游览主要靠双脚，老城街道陡峭且多为石板路。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`布拉干萨的故事，始于葡萄牙建国之初那充满硝烟与不确定性的岁月。12世纪，葡萄牙的第一位国王阿方索·亨里克斯的王国版图不断向北向东扩张，但新获得的领土暴露在强大的莱昂王国以及摩尔人势力的威胁之下。为了巩固这片遥远的东北边境，他的继任者桑乔一世下令在此修建一座坚固的城堡。1187年，特许状颁布，布拉干萨作为一个战略防御据点正式诞生。它的名字可能源于当地的凯尔特部落，寓意“崎岖之地”，这再贴切不过。最初的定居者是一群勇敢的士兵和农民，他们在这片高地上，依靠着城堡的保护，与严酷的自然和潜在的敌人争夺生存空间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡与城墙在随后的几个世纪里不断被加固、扩建，成为葡萄牙王国盾牌上最坚硬的一枚铆钉。然而，让布拉干萨真正载入史册的，是一个家族的决定。14世纪，葡萄牙王国陷入王位继承危机。1383年，国王费尔南多一世去世，没有男性继承人，他的女婿——卡斯蒂利亚的国王胡安一世试图吞并葡萄牙。一场决定民族命运的抗争爆发了。在这场战争中，一位名叫若昂·德·阿维斯的军事领袖脱颖而出，他是老国王的私生子，在阿尔茹巴罗塔战役中率领葡萄牙人奇迹般地以少胜多，保卫了独立。1385年，他被议会推举为葡萄牙国王，即若昂一世。为了奖赏在战争中立下赫赫战功的忠实伙伴，同时也是他的亲密好友——阿维斯骑士团团长唐·阿方索，新国王将布拉干萨公爵的头衔赐予了他。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`从此，阿方索和他的后代成为了布拉干萨公爵。这个家族在这座偏远的城堡中扎根、壮大，积累了巨大的财富和影响力。城堡内的主塔楼，被称为“唐若望塔”，就是这段辉煌时期的见证，它坚固而庄严，是公爵权力的象征。然而，命运的齿轮再次转动。1580年，葡萄牙国王塞巴斯蒂昂在北非战死，血脉断绝，西班牙的菲利普二世凭借武力与血缘关系兼并了葡萄牙，开始了长达60年的“伊比利亚联盟”时期。葡萄牙失去了独立，而布拉干萨公爵家族，作为国内最强大的贵族，成为了民族抵抗精神的潜在象征。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机在1640年来临。西班牙深陷内外战争，国力衰退。12月1日，一群葡萄牙贵族在里斯本发动起义，推翻西班牙总督。他们需要一位葡萄牙人来担任国王，目光自然而然地投向了第八代布拉干萨公爵——若昂。他血统高贵，实力雄厚，且（据说）最初有些犹豫，但最终被说服接受了王冠，成为葡萄牙国王若昂四世。偏远的边境城堡，竟走出了复兴王国的君主！布拉干萨王朝由此开创，并统治葡萄牙直至20世纪初君主制被推翻。颇具讽刺意味的是，成为王室发源地后，布拉干萨这座城市本身却逐渐被边缘化。王朝的中心南移至里斯本和辛特拉，这座北方山城慢慢褪去了政治光环，回归了它边境守卫的宁静本色，也因此意外地保存下了最原始的中世纪风貌，未被后来的巴洛克或现代风潮过多侵蚀，像一块凝固了时间的琥珀。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议至少安排一整天给布拉干萨。最好在上午十点前抵达，这时游客稀少，晨光给石头镀上一层金色，是最能体会其孤寂美感的时刻。整体游览节奏宜慢，因为这里的美在于沉浸和感受，而非打卡。从山脚下的新城区域开始，仰望城堡，然后步行上山从主城门进入，用整个上午和中午细细探索老城内的每一个角落、教堂和小广场。下午的重点是城堡和城墙，阳光西斜时光线最佳，适合拍照和远眺。傍晚时分，留在城墙上或找一家老城边缘的咖啡馆，看落日将整个石头城染成暖橘色，是全天的高潮。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿一双绝对舒适防滑的鞋，老城的所有路都是凹凸不平的石板路和陡坡。
这里餐馆不多且关门较早，尤其是晚上，最好在下午一点左右或晚上七点前解决正餐。
民风淳朴，但晚上巷道灯光昏暗，独自游览建议在天黑前结束老城内部的探索。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从山脚下仰望整座被城墙包裹的老城与城堡，感受它如同战舰般泊在山顶的震撼姿态`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过古老的萨莫拉门，立刻在游客中心旁那条陡峭的主石阶路“Rua do Santo Condestável”向上走，让脚步声在静谧的巷弄里回响`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`先去探访圣玛利亚主教堂，内部朴素得惊人，然后在它旁边的小广场“Largo da Sé”停下来，听风穿过回廊的声音`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着蜿蜒小巷随意漫步，一定会邂逅可爱的圣本托教堂和它外墙上的蓝白瓷砖画，以及那口著名的“母猪喷泉”`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从老城中心向北，穿过另一道拱门，直接进入城堡宏阔的外堡场，眼前豁然开朗，巨大的城堡主塔屹立在前`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要登上城堡主塔的顶端，在猎猎风声中360度环视，一边是葡萄牙的特拉什-蒙特什荒原，另一边是西班牙的苍茫大地`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着完整的城墙走上一圈，从不同角度俯瞰老城红色的屋顶和错综复杂的小巷，仿佛在阅读一幅立体的历史地图`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后从城墙西南角下来，去圣维森特教堂和旁边的民俗博物馆，看看当地传统农具和服饰，为石头的历史注入生活的温度`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡外堡场仰拍唐若望塔`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光能极致勾勒出塔楼花岗岩的粗粝质感与雄伟轮廓，用广角镜头将天空与巨石一同纳入。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`萨莫拉门内侧的拱门框架`}</h4>
                  <p className="text-sm text-gray-700">{`上午阳光照亮城门内部时，以拱门为画框，拍摄门外延伸向上的石板路与远处房屋，构图深邃。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城墙西南角全景位`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，站在此处向西拍摄，夕阳为连绵的红色屋顶镀上金边，远方山峦如黛，层次感极佳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`老城“母猪喷泉”旁的小巷`}</h4>
                  <p className="text-sm text-gray-700">{`利用午后狭窄巷弄中形成的光影切割线，拍摄当地居民走过或静态的石阶、木门，故事感强烈。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从城堡塔楼眺望西班牙方向`}</h4>
                  <p className="text-sm text-gray-700">{`使用长焦镜头，压缩远处荒野与丘陵的景深，捕捉天地苍茫、边境孤城的寂寥氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重居民隐私，拍摄人物（尤其是老人和儿童）前请务必微笑并手势询问，获得同意。`}</li>
                <li>• {`风非常大，尤其在城墙上，使用三脚架时务必注意稳定或使用高快门速度。`}</li>
                <li>• {`晨雾天气在这里是出片的绝佳机会，若遇上有薄雾的清晨，请一定要早起前往。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-blue-800">{`住在老城墙内由古老石屋改造的精品客栈，房间低矮的拱顶和厚重的墙壁让你彻底沉浸在中世纪氛围中，夜晚安静得只能听到风声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-green-800">{`位于新城区域但俯瞰老城的四星级设计酒店，拥有直面城堡的绝佳全景露台，在现代化舒适中坐享千年历史画卷。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-yellow-800">{`火车站附近由家族经营的温馨旅馆，主人会热情地为你手绘老城探索地图，并推荐只有本地人才知道的小餐馆。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`隐居之选`}</h4>
                  <p className="text-sm text-purple-800">{`距离城区车程15分钟左右的乡间农庄民宿，完全融入特拉什-蒙特什的自然乡村，夜晚星空璀璨，体验真正的边境乡村生活。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿数量极少且非常抢手，务必提前数月预订，且需做好房间较小、隔音一般（但异常安静）的准备。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果自驾，预订时一定要确认停车位，老城内绝对无法停车，通常需要停在山脚下的公共停车场。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`布拉干萨的冬季非常寒冷，选择古老石屋住宿时请确认供暖设施是否充足。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开布拉干萨许久后，那种感觉依然清晰：不是惊艳，而是一种沉甸甸的踏实感。在这个凡事追求快速、光滑、讨喜的时代，它显得如此“不合时宜”。它不讨好你，不提供轻松的愉悦，它只是沉默地、固执地站在那里，展现着历史原本的重量与粗粝。这种体验，在过度修饰的欧洲旅游版图上，已经太过稀缺。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它教会旅人的，或许正是一种关于“边缘”与“中心”的再思考。我们总向往中心——文化的中心、时尚的中心、权力的中心。但布拉干萨告诉我们，有时，真正的力量、真实的故事和未被稀释的灵魂，恰恰保存在边缘。作为葡萄牙王室的摇篮，它最终选择留在了地理和时间的边缘，守护着最初的模样。这何尝不是一种深刻的智慧与自信？所以，如果你厌倦了那些被旅行指南宠坏、被自拍杆占据的“必去之地”，如果你渴望一次真正能触摸到历史筋骨、感受到土地呼吸的旅行，请一定来布拉干萨。这里没有喧哗，只有风声与石头低语，而在这低语中，你能听见一个民族最坚韧的心跳。它不是一个景点，它是一个提醒，提醒我们有些事物，因其坚守，而成为永恒。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/alcobaca-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔科巴萨修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alcobaça Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/viseu-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维塞乌古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Viseu Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/almourol-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔莫罗城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Almourol Castle</p>
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
