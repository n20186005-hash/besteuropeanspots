import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '波雷奇 Poreč｜探访亚得里亚海畔的“黄金之城”，惊叹六世纪拜占庭马赛克巅峰之作 - 最佳欧洲景点',
  description: '你第一眼看到波雷奇，可能会误以为闯进了一幅褪了色的水彩画。阳光把亚得里亚海的水面劈成无数片碎银子，哗啦啦地涌向一片由蜂蜜色石头垒成的半岛。空气里是海盐、干燥的迷迭香和被阳光烘烤过的古老石灰岩混合的味道。老城小得可爱，从这头走到那头，不过是一首歌的时间。但你千万别被这悠闲的表象骗了，当你穿过那些挂着蕾',
}

export default function PorecEuphrasianBasilicaIstriaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '波雷奇', href: '/attractions/porec-euphrasian-basilica-istria' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`波雷奇・Poreč・克罗地亚・波雷奇，伊斯特拉县`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼看到波雷奇，可能会误以为闯进了一幅褪了色的水彩画。阳光把亚得里亚海的水面劈成无数片碎银子，哗啦啦地涌向一片由蜂蜜色石头垒成的半岛。空气里是海盐、干燥的迷迭香和被阳光烘烤过的古老石灰岩混合的味道。老城小得可爱，从这头走到那头，不过是一首歌的时间。但你千万别被这悠闲的表象骗了，当你穿过那些挂着蕾丝窗帘的民居，拐过一个不起眼的弯，眼前豁然开朗——尤弗拉西苏斯大教堂就那样安静地矗立着，它不是那种逼人的宏伟，而是一种沉静、持久、内敛的光芒，仿佛一块被时间打磨了千年的温润琥珀。
真正让你灵魂出窍的时刻，发生在你推开那扇厚重的木门，踏入大教堂主殿的瞬间。外面的海风与喧嚣被瞬间隔绝，一种带着凉意的、肃穆的寂静包裹了你。然后你抬起头，就在祭坛上方那半圆形的拱顶（他们称之为“半穹顶”）上，你看到了那片“天堂”。金色的背景像熔化的阳光，圣母玛利亚端坐其中，身着深蓝色长袍，怀抱着幼年的耶稣，眼神温柔而庄严地俯视众生。她身旁簇拥着天使和圣徒，衣袂的褶皱用细小的彩色玻璃和石块拼贴得栩栩如生，仿佛下一秒就会随风流动。那一刻，你不是在看一幅画，而是在凝视一片被凝固的、神圣的时光。光线从高窗流泻下来，在金色的马赛克上跳跃、舞蹈，让整个空间弥漫着一种非人间的、温暖而辉煌的光晕。你几乎能听见一千五百年前，工匠们用镊子小心翼翼镶嵌每一片金箔时，那虔诚的呼吸声。
走出教堂，回到现实，你会发现这座“黄金之城”的魔力是分层的。当地人早已习惯了与世界遗产为邻的生活。穿着拖鞋的老爷爷提着刚买的面包，慢悠悠地从宏伟的罗马式柱廊前走过；年轻的情侣坐在古罗马论坛的遗址石阶上，分享着一盒冰淇淋；咖啡馆的侍者熟练地在铺着大理石桌面的古桌上摆开一杯杯冒着泡的本地啤酒。历史在这里不是玻璃罩里的标本，而是每日生活的背景墙，是呼吸的空气。最动人的，莫过于傍晚时分，当钟楼的影子越拉越长，你会看到穿着白袍的唱诗班孩童，叽叽喳喳地跑进洗礼堂准备晚祷，那童稚的歌声与一千五百年的回音壁碰撞在一起，古老与现代，神圣与世俗，在此刻达成了完美的和解。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你第一眼看到波雷奇，可能会误以为闯进了一幅褪了色的水彩画。阳光把亚得里亚海的水面劈成无数片碎银子，哗啦啦地涌向一片由蜂蜜色石头垒成的半岛。空气里是海盐、干燥的迷迭香和被阳光烘烤过的古老石灰岩混合的味道。老城小得可爱，从这头走到那头，不过是一首歌的时间。但你千万别被这悠闲的表象骗了，当你穿过那些挂着蕾丝窗帘的民居，拐过一个不起眼的弯，眼前豁然开朗——尤弗拉西苏斯大教堂就那样安静地矗立着，它不是那种逼人的宏伟，而是一种沉静、持久、内敛的光芒，仿佛一块被时间打磨了千年的温润琥珀。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正让你灵魂出窍的时刻，发生在你推开那扇厚重的木门，踏入大教堂主殿的瞬间。外面的海风与喧嚣被瞬间隔绝，一种带着凉意的、肃穆的寂静包裹了你。然后你抬起头，就在祭坛上方那半圆形的拱顶（他们称之为“半穹顶”）上，你看到了那片“天堂”。金色的背景像熔化的阳光，圣母玛利亚端坐其中，身着深蓝色长袍，怀抱着幼年的耶稣，眼神温柔而庄严地俯视众生。她身旁簇拥着天使和圣徒，衣袂的褶皱用细小的彩色玻璃和石块拼贴得栩栩如生，仿佛下一秒就会随风流动。那一刻，你不是在看一幅画，而是在凝视一片被凝固的、神圣的时光。光线从高窗流泻下来，在金色的马赛克上跳跃、舞蹈，让整个空间弥漫着一种非人间的、温暖而辉煌的光晕。你几乎能听见一千五百年前，工匠们用镊子小心翼翼镶嵌每一片金箔时，那虔诚的呼吸声。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走出教堂，回到现实，你会发现这座“黄金之城”的魔力是分层的。当地人早已习惯了与世界遗产为邻的生活。穿着拖鞋的老爷爷提着刚买的面包，慢悠悠地从宏伟的罗马式柱廊前走过；年轻的情侣坐在古罗马论坛的遗址石阶上，分享着一盒冰淇淋；咖啡馆的侍者熟练地在铺着大理石桌面的古桌上摆开一杯杯冒着泡的本地啤酒。历史在这里不是玻璃罩里的标本，而是每日生活的背景墙，是呼吸的空气。最动人的，莫过于傍晚时分，当钟楼的影子越拉越长，你会看到穿着白袍的唱诗班孩童，叽叽喳喳地跑进洗礼堂准备晚祷，那童稚的歌声与一千五百年的回音壁碰撞在一起，古老与现代，神圣与世俗，在此刻达成了完美的和解。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`波雷奇`} />
                <InfoRow label="英文名称" value={`Poreč`} />
                <InfoRow label="正式名称" value={`Historic Complex of Poreč with the Euphrasian Basilica`} />
                <InfoRow label="国家" value={`克罗地亚`} />
                <InfoRow label="城市" value={`波雷奇，伊斯特拉县`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`克罗地亚保存最完好的拜占庭艺术瑰宝，伊斯特拉半岛基督教传播的灯塔。`} />
                <InfoRow label="建筑特色" value={`以尤弗拉西苏斯大教堂内举世无双的六世纪黄金马赛克祭坛拱顶为核心。`} />
                <InfoRow label="建筑风格" value={`早期基督教与拜占庭风格的完美融合，并带有独特的当地罗曼式元素。`} />
                <InfoRow label="文化价值" value={`见证了东罗马帝国在西地中海的最后辉煌，是东西方教会艺术交融的活化石。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`尤弗拉西苏斯大教堂建筑群开放时间随季节变化：夏季（5月至9月）通常为上午9:00至晚上8:00；冬季（10月至次年4月）缩短为上午10:00至下午4:00。教堂主体在弥撒期间可能暂停游客参观，具体时间表每周会张贴在入口处。古城区域全天24小时开放。建议出行前在伊斯特拉旅游局官网核对最新时间，宗教节日期间安排可能临时调整。`} />
              <InfoRow label="门票价格" value={`进入尤弗拉西苏斯大教堂建筑群（包括大教堂、洗礼堂、钟楼及圣器室）需购票。成人票价约为50库纳（约合7欧元）。学生、老年人及团体享有折扣价，约30库纳。6岁以下儿童免费。购买包含钟楼登顶的联票价格稍高，约70库纳。古城其他区域及海滨免费游览。`} />
              <InfoRow label="地址" value={`Eufrazijeva ulica 22, 52440 Poreč, Croatia`} />
              <InfoRow label="交通方式" value={`最近的国际机场是普拉机场（PUY），距离波雷奇约60公里。从机场可乘坐直达巴士，车程约1小时15分钟，班次较为稀疏，建议提前查询时刻表。从首都萨格勒布或斯普利特前来，可乘坐长途巴士，车程分别为3.5小时和6-7小时，班次频繁。自驾是最方便的方式，沿伊斯特拉半岛的优质公路行驶，风景优美。波雷奇老城为步行区，需将车停在城墙外的收费停车场，步行5分钟即可抵达大教堂。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "说起来，波雷奇的故事比它的马赛克还要层次丰富。早在古罗马时代，这个小半岛就因为其优良的港湾和战略位置，被罗马人看中，建起了一座名为“Parentium”的殖民城市。你可以想象，两千年前，这里停泊着来自地中海的商船，街道上是罗马士兵、商人和官吏。公元三世纪，当基督教还在帝国的阴影下艰难传播时，一群虔诚的信徒就已经在这里的地下，建立了秘密的礼拜场所。今天教堂的地下室，还能看到那些早期基督教徒留下的简单壁画和铭文，粗糙，但充满生命最初的炽热。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "历史的转折点，随着一位名叫尤弗拉西苏斯的主教到来而到来。那是公元六世纪中叶，查士丁尼大帝的东罗马帝国（拜占庭帝国）正处于收复西地中海失地的雄心之中。尤弗拉西苏斯主教，不仅是位宗教领袖，更是一位有着非凡眼光和雄厚财力的艺术赞助人。他决心摧毁已经破败的早期教堂，在原址上建造一座配得上上帝、也配得上帝国荣光的宏伟圣殿。他请来的工匠，极有可能来自帝国的核心——君士坦丁堡，或者至少是深受其风格影响的大师。他们带来了最精湛的拜占庭马赛克技艺，以及珍贵的材料：来自埃及的彩色玻璃、来自小亚细亚的宝石，以及最重要的——数以万计的金箔。这些金箔被夹在两层玻璃之间烧制，造就了那片永不褪色、随着光线变幻莫测的“天堂之金”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座教堂的建成，不仅仅是一座建筑的胜利，更是一个强大的文化宣言。它标志着在哥特人、伦巴第人等“蛮族”横扫西罗马帝国废墟的动荡世纪里，拜占庭的文明、艺术和正统基督教信仰，依然在这片遥远的半岛上牢牢扎根，熠熠生辉。教堂建筑群本身就是一个完美的早期基督教社区模型：主教堂负责主要的礼拜仪式，独立的八角形洗礼堂用于为信徒施洗，宏大的主教宫是管理和生活的中心，而那座高耸的钟楼（虽然建于几个世纪后）则是向整个社区和海上船只宣告时间的灯塔与地标。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当然，往后的岁月并非一帆风顺。威尼斯共和国统治时期，教堂的外观被加上了哥特式的玫瑰窗和文艺复兴时期的装饰，内部也增添了一些巴洛克风格的祭坛，但这片核心的马赛克却被奇迹般地保留了下来，未曾被覆盖或破坏。它经历了地震的晃动、战争的威胁，甚至近代的忽视，但终究挺了过来。当考古学家和艺术史学家在十九世纪重新“发现”它时，全世界都为之震惊。1997年，联合国教科文组织将整个波雷奇历史中心连同大教堂列入世界遗产名录，给出的评语是“拜占庭艺术在极大程度上幸存下来的最完整的典范之一”。这不仅仅是对其艺术价值的肯定，更是对一段顽强存续的文化记忆的最高致敬。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正感受波雷奇的精髓，建议你至少预留大半天的时间。最佳抵达时间是清晨九点前，那时的阳光温柔，游客未至，老城的石板路刚刚苏醒。你可以先从古城外围开始，慢慢向内“浸泡”，将高潮——大教堂的参观留在上午光线最佳、且精神状态最饱满的时候。整体游览节奏应该是“慢”的，这里不适合匆忙打卡，更适合漫无目的地闲逛和时不时地驻足发呆。路线大致呈一个环形，从北侧城门进入，漫步老街，深度探索教堂建筑群，登高望远，再穿行于古巷寻找罗马遗迹，最后在中心广场或海滨结束旅程，全程大约需要4-5小时。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`教堂内部严禁使用闪光灯，手机请调至静音，尊重正在祈祷的信徒。夏季中午前后教堂内和钟楼排队人数最多，建议要么赶早，要么傍晚再去。老城街道多为凹凸不平的石板路，务必穿一双舒适防滑的鞋子。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从北面的“德尔钦之门”进入老城，踩着被阳光晒得微暖的古老石板路开始探索。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`直接走向海边的尤弗拉西苏斯大教堂建筑群，先别急着进主殿，在庭院里感受一下千年建筑的宏伟尺度与宁静氛围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要登上那座可以俯瞰全城与大海的罗马式钟楼，台阶狭窄但顶部的风景绝对值回票价。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`主教堂内部，请务必在祭坛前找一张长椅坐下，花至少二十分钟，静静地抬头仰望，让那片璀璨的“天堂之金”彻底洗礼你的视觉与心灵。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观完主殿，别忘了看看相邻的圣器室和洗礼堂，那里藏着更多精美的早期马赛克碎片和建筑细节。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出教堂区域，拐进老城迷宫般的小巷，寻找那些古罗马时代的街道基石、镶嵌在墙垣里的石雕与铭文遗迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在老城中心的“马勒广场”找家露天咖啡馆坐下，点一杯伊斯特拉特产的黑松露意面或本地葡萄酒，看鸽子与游人共享悠闲。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分，沿着海滨大道“阳光海岸”散步，看夕阳把整座老城的石灰岩建筑染成蜜糖色，海面则化作一片燃烧的金箔。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`钟楼顶部全景机位`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚金色时刻登上钟楼，用广角镜头将红色的屋顶、蔚蓝的大海、教堂建筑群和远处的绿色半岛一同收入镜中。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`祭坛马赛克仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点后阳光从东窗射入照亮半穹顶时，关闭闪光灯，用大光圈镜头或手机的人像模式仰拍，重点捕捉圣母面部的柔和光晕与马赛克金色的流动感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老街纵深构图`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光斜射时，在老城“德卡曼斯街”利用两侧古老的黄色石墙形成自然框架，拍摄街道的纵深感和尽头若隐若现的大海一角。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`海滨落日剪影`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时在海滨大道靠近灯塔的位置，用长焦镜头拍摄教堂钟楼与老城轮廓的剪影，以波光粼粼的金色海面为背景。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`教堂内部绝对禁止使用三脚架和自拍杆。拍摄马赛克时，尝试捕捉局部细节的质感，比如一片衣褶或一个天使的面容，比拍摄全景更具艺术感染力。航拍器在古城及教堂上空有严格限制，未经许可请勿起飞。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`老城心脏体验`}</h4>
                  <p className="text-sm text-blue-800">{`入住由15世纪贵族宫殿改造的精品酒店，房间保留了原始的石拱顶和厚墙，推开古老的木格窗，听到的第一声便是教堂的钟声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`海滨悠闲之选`}</h4>
                  <p className="text-sm text-green-800">{`位于老城边缘的现代四星级酒店，拥有私人海滩和露台，部分房间的阳台直对亚得里亚海，躺在床上就能看日出。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`静谧花园民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`距离老城步行仅10分钟的安静街区，一栋家族经营的石头别墅，被柠檬树和橄榄树环绕，早餐能尝到房东自制的无花果酱和鲜榨果汁。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端设计酒店`}</h4>
                  <p className="text-sm text-purple-800">{`坐落在老城附近一个宁静半岛上的五星级酒店，极简主义设计与自然景观完美融合，无边泳池仿佛与大海连成一体，适合追求奢华与绝对安静的旅人。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（7-8月）是绝对旺季，住宿价格飙升且一房难求，务必提前至少三个月预订。选择老城内的住宿需注意，许多历史建筑没有电梯，行李搬运可能不便，但换来的是无与伦比的位置和氛围。如果想体验更地道的伊斯特拉乡村生活，可以考虑租车住在老城周围几公里内的内陆村庄，那里有许多由石头农舍改造的“Agriturismo”（农家乐），性价比极高。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开波雷奇很久以后，我闭上眼睛，脑海里浮现的不是某一张具体的明信片照片，而是一种感觉。那是一种被深厚的时间包裹的安宁感。在这个崇尚“新”与“快”的世界里，波雷奇倔强地守护着一种“旧”的、缓慢的韵律。它告诉我们，美可以如此脆弱——只是一片片细小的玻璃和石头，却也可以如此坚韧，跨越十五个世纪的风雨，依旧光芒四射，直抵人心。它不是一个冰冷的博物馆，而是一个依然跳动着生命脉搏的古老社区，信仰、艺术和日常生活在这里达成了奇妙的共生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，如果你厌倦了那些被游客挤爆的“必去清单”，渴望一场能真正沉静下来的旅行，请一定来波雷奇。来这里，不仅仅是为了看那举世闻名的马赛克，更是为了体验一种时间的密度。坐在千年历史的石阶上，感受亚得里亚海的风拂过脸颊，你会突然明白，有些地方存在的意义，就是为了提醒我们：人类最卓越的创造，和最平凡的幸福，都可以在时光的长河中，找到自己永恒的位置。这片“天堂之金”照亮的不只是古老的拱顶，或许也能照亮我们被现代生活磨得有些疲惫的内心。这，就是波雷奇馈赠给每一位深度旅人，最珍贵的礼物。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/nin" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    宁
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">宁</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Nin</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sibenik-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    希
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">希贝尼克老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Šibenik Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cavtat-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    察
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">察夫塔特</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cavtat</p>
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
