import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '图恩城堡与老城 Thun Castle｜站在中世纪塔楼之巅，将阿尔卑斯山与碧蓝湖泊拥入怀中 - 最佳欧洲景点',
  description: '朋友，你想象过站在童话书的封面上是什么感觉吗？来图恩吧。当你从火车站走出来，第一眼看到的绝不是冰冷的现代建筑，而是一座坚实的、带着四顶“尖帽子”的石头城堡，稳稳地坐落在小山丘上，背后是如黛的远山和湛蓝得不像话的天空。那股子扑面而来的安定感，瞬间就让你旅行的脚步慢了下来。空气中混合着好闻的味道——从河...',
}

export default function ThunCastleOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '瑞士', href: '/destinations/switzerland' },
            { label: '图恩', href: '/destinations/switzerland' },
            { label: '图恩城堡与老城', href: '/attractions/thun-castle-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`图恩城堡与老城・Thun Castle and Old Town・瑞士・图恩`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，你想象过站在童话书的封面上是什么感觉吗？来图恩吧。当你从火车站走出来，第一眼看到的绝不是冰冷的现代建筑，而是一座坚实的、带着四顶“尖帽子”的石头城堡，稳稳地坐落在小山丘上，背后是如黛的远山和湛蓝得不像话的天空。那股子扑面而来的安定感，瞬间就让你旅行的脚步慢了下来。空气中混合着好闻的味道——从河边飘来的清澈水汽，面包店里刚出炉的“楚格樱桃蛋糕”的甜香，还有老房子木头窗台上天竺葵散发的淡淡植物气息。
顺着石板路往上走，你会发现这座城堡可不是孤零零的“景点”，它就像一位慈祥的祖父，静静俯瞰着脚下充满活力的孙辈们——那座五彩斑斓的老城。阿勒河碧绿湍急的河水穿城而过，哗哗的水声是永恒的背景音。河两岸是连排的、有着陡峭屋顶和精美彩绘立面的老房子，底层不是飘着咖啡香的书店，就是摆满奶酪和巧克力的食杂铺。当地人推着自行车与你擦肩而过，用柔软的瑞士德语互相问候，生活的气息和历史的气场在这里交融得没有丝毫缝隙。
而当你买票进入城堡，爬上那狭窄的回旋石梯，一步步迈向塔楼顶端时，心跳会随着海拔升高而加速。最后推开那扇小木门，整个世界“哗”地一下在你眼前铺开——这，就是最极致的奖赏。近处是红色屋顶的海洋，整齐得像乐高积木；翡翠般的阿勒河画出一个优美的“S”形，将老城温柔拥抱；视线延伸出去，是宽阔如海的图恩湖，在阳光下闪烁着万片金鳞；而最远处，雪顶的阿尔卑斯群峰——艾格峰、僧侣峰、少女峰——像一道梦幻的白色幕墙，矗立在世界的尽头。风很大，吹得头发乱飞，但你只想静静地站着，让眼睛饱餐这顿风景的盛宴，那一刻，你会真切地理解，为什么中世纪的公爵要在这里建立权力中心。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，你想象过站在童话书的封面上是什么感觉吗？来图恩吧。当你从火车站走出来，第一眼看到的绝不是冰冷的现代建筑，而是一座坚实的、带着四顶“尖帽子”的石头城堡，稳稳地坐落在小山丘上，背后是如黛的远山和湛蓝得不像话的天空。那股子扑面而来的安定感，瞬间就让你旅行的脚步慢了下来。空气中混合着好闻的味道——从河边飘来的清澈水汽，面包店里刚出炉的“楚格樱桃蛋糕”的甜香，还有老房子木头窗台上天竺葵散发的淡淡植物气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`顺着石板路往上走，你会发现这座城堡可不是孤零零的“景点”，它就像一位慈祥的祖父，静静俯瞰着脚下充满活力的孙辈们——那座五彩斑斓的老城。阿勒河碧绿湍急的河水穿城而过，哗哗的水声是永恒的背景音。河两岸是连排的、有着陡峭屋顶和精美彩绘立面的老房子，底层不是飘着咖啡香的书店，就是摆满奶酪和巧克力的食杂铺。当地人推着自行车与你擦肩而过，用柔软的瑞士德语互相问候，生活的气息和历史的气场在这里交融得没有丝毫缝隙。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而当你买票进入城堡，爬上那狭窄的回旋石梯，一步步迈向塔楼顶端时，心跳会随着海拔升高而加速。最后推开那扇小木门，整个世界“哗”地一下在你眼前铺开——这，就是最极致的奖赏。近处是红色屋顶的海洋，整齐得像乐高积木；翡翠般的阿勒河画出一个优美的“S”形，将老城温柔拥抱；视线延伸出去，是宽阔如海的图恩湖，在阳光下闪烁着万片金鳞；而最远处，雪顶的阿尔卑斯群峰——艾格峰、僧侣峰、少女峰——像一道梦幻的白色幕墙，矗立在世界的尽头。风很大，吹得头发乱飞，但你只想静静地站着，让眼睛饱餐这顿风景的盛宴，那一刻，你会真切地理解，为什么中世纪的公爵要在这里建立权力中心。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`图恩城堡与老城`} />
                <InfoRow label="英文名称" value={`Thun Castle and Old Town`} />
                <InfoRow label="正式名称" value={`Thun Castle and Old Town`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`图恩`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座城堡是瑞士德语区保存最完好的中世纪城堡之一，是伯尔尼高地领主权力的历史象征与控制图恩湖与阿尔卑斯山通道的战略钥匙。`} />
                <InfoRow label="建筑特色" value={`最震撼的是其四座巨大的塔楼（尤其是雄伟的主塔）和锯齿形的屋顶轮廓线，以及内部令人叹为观止的12世纪骑士大厅。`} />
                <InfoRow label="建筑风格" value={`典型的霍亨施陶芬王朝时期的中世纪城堡建筑，融合了罗马式与早期哥特式元素，并带有鲜明的伯尔尼地方防御工事特色。`} />
                <InfoRow label="文化价值" value={`它不仅是一座军事堡垒，更是一个活生生的文化容器，其城堡博物馆珍藏了从史前到近代的区域历史，是理解伯尔尼高地文化与身份认同的核心所在。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`图恩城堡博物馆开放时间：四月至十月，每天上午10点至下午5点；十一月至三月，除周一闭馆外，每天下午1点至4点开放。城堡塔楼和屋顶观景台全年开放，时间与博物馆同步，但冬季可能因天气临时关闭。老城区的商店和咖啡馆营业时间各异，通常为上午9点至傍晚6点30分，周日部分店铺休息。重要提示：圣诞节、新年及瑞士国庆日（8月1日）开放时间可能有特殊调整，建议行前官网复核。`} />
              <InfoRow label="门票价格" value={`城堡博物馆及塔楼联票：成人15瑞士法郎，优惠票（学生、老人）13瑞士法郎，6-16岁儿童5瑞士法郎，家庭票（2成人+最多4名儿童）32瑞士法郎。仅参观城堡庭院和部分外部区域免费。持有瑞士旅行通票（Swiss Travel Pass）可免费进入博物馆。老城区街道及河畔漫步完全免费。`} />
              <InfoRow label="地址" value={`Schlossberg 1, 3600 Thun, Switzerland`} />
              <InfoRow label="交通方式" value={`从苏黎世机场出发最便捷：搭乘每小时数班的直达火车（IC或IR线），约1小时20分钟直达图恩火车站，车厢宽敞舒适，沿途湖光山色已值回票价。从因特拉肯东站出发更近，火车车程仅需30分钟，班次密集如同通勤列车。图恩火车站是中心枢纽，出站后，城堡那座标志性的塔楼就是你的天然路标。步行是最佳方式：从站前广场径直向前，穿过阿勒河上漂亮的木制顶棚桥，顺着略有坡度的石板路向上，大约10-15分钟轻松漫步即可抵达城堡脚下。市内也有公交车，但步行才能真正感受这座城的脉搏。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`时光倒流回12世纪末，那时的欧洲，是强权家族用石头书写领土野心的时代。图恩城堡的故事，始于一个名叫贝特霍尔德五世的公爵，他是强大的策林根家族最后一位统治者。这位公爵是个精明的战略家，他的目光锁定了阿勒河从图恩湖流出的这个咽喉要道。在这里建一座城堡，就等于扼住了从伯尔尼高地通往阿尔卑斯山口的贸易与军事路线，还能把脚下肥沃的平原和背后的湖泊尽收眼底。于是，一座带有巨大方形主塔和坚固城墙的罗马式城堡拔地而起，其中最了不起的成就，是那个跨度惊人、没有任何中间支柱的骑士大厅——它至今仍是欧洲同类大厅中最宏伟的之一，当你站在空旷的大厅中央，仰望粗壮的橡木横梁，依然能感受到当年公爵宴请骑士、商议征伐时的磅礴气势。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，策林根家族的气运没有持续太久。1218年，贝特霍尔德五世去世，没有留下直系继承人，权力出现了真空。这时，另一股力量迅速填补进来——来自北方的伯尔尼城。伯尔尼的贵族们敏锐地抓住了这个机会，他们将图恩及其城堡纳入麾下。此后的几百年里，图恩城堡不再是某个公爵的私人宅邸，而变成了伯尔尼共和国派驻地方的行政长官的官邸和法庭。城堡内部被不断改造，增加了居住的舒适性，但那份军事防御的威严始终未减。它见证了中世纪晚期贵族间的纷争，也经历了宗教改革时期的动荡，厚重的石墙默默承受着一切。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`历史的车轮滚到18世纪末，整个欧洲都被法国大革命的浪潮席卷，瑞士也未能幸免。1798年，法国军队入侵，古老的瑞士联邦瓦解。拿破仑重新绘制了欧洲地图，图恩一度成为新成立的“赫尔维蒂共和国”一个州的州府。城堡的功能也随之转变，它先后被用作军械库和监狱。你能想象吗？那些曾经悬挂盾牌和旗帜的墙壁，可能曾回荡过铁链的声响。直到19世纪中叶，现代瑞士联邦成立，社会趋于稳定，人们才开始用新的眼光审视这座古老的建筑——不再仅仅是权力与镇压的象征，更是共同的历史遗产。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转折点发生在1886年，图恩的历史协会接管了城堡，并决定将其设立为博物馆。这是一个极具远见的决定。工人们小心翼翼地修缮古老的厅堂，学者们开始系统地收集从史前石器、罗马硬币到中世纪盔甲、农民家具等一切能讲述这片土地故事的物件。今天，当你漫步在博物馆的展厅里，看到的不仅是一件件古董，更是一部立体的、生动的伯尔尼高地编年史。从城堡的瞭望塔到地方博物馆，图恩城堡完美地诠释了“物尽其用”和“文化传承”，它就像一棵老树，年轮里刻满了时代的变迁，却始终扎根于这片它守护了千年的土地。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`我强烈建议你安排整整一天的时间给图恩，它值得你慢下来品味。最佳抵达时间是早上9点左右，那时老城的店铺刚刚开门，游客尚未大批涌入，阳光正好温柔地洒在彩绘立面上。整体游览节奏应该是“先高后低，先内后外”：上午精力充沛时先攻占城堡，在博物馆里沉浸于历史，在塔楼饱览全景；中午下山，在老城寻一家河边餐馆享用午餐，感受当地的生活气息；下午则悠闲地探索老城街巷和湖畔风光。这样的安排既避免了下午登塔的疲惫与人流，又能让你在一天中看到这座城市光影变换的不同面貌。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡塔楼的旋转楼梯非常狭窄且陡峭，上下楼时请务必抓紧扶手，穿一双舒适防滑的鞋子比什么都重要。
老城区的石板路虽然迷人但有些凹凸不平，拉杆行李箱推行会比较困难，建议轻装简行或将大件行李寄存在火车站。
瑞士的商店和博物馆非常守时，午餐时间（通常中午12点到下午2点）很多餐馆人气很旺，建议要么提早要么稍晚前去，避免长时间等位。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一早先去城堡脚下的售票处，避开旅行团的高峰，买好门票径直登上那令人屏息的主塔楼，把晨光中的阿尔卑斯山与湖泊全景深深印入脑海。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从塔楼下来后，一定要花至少一个半小时沉浸在那座无与伦比的12世纪骑士大厅和五层楼高的城堡博物馆里，用手指触摸那些冷冰冰的盔甲和温润的古老家具，听它们无声地诉说故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡西门下山，沿着“Obere Hauptgasse”主街漫步，别忘了时不时钻进那些如毛细血管般细窄的拱廊小巷，抬头看看那些绘有精致图案的凸窗和古老的门环。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到阿勒河边，一定要去走一走那座带木制顶棚的“Mühleplatz”桥，站在桥中央，看碧绿的河水从脚下奔腾而过，两岸色彩缤纷的老房子倒映在水中，如同一幅流动的油画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午餐就在河边找一家有露天座位的餐厅，点一份经典的瑞士土豆饼（Rösti）配当地香肠，看着天鹅在近处游弋，享受一顿视觉与味觉的双重盛宴。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`饭后再沿着河岸向下游散步，穿过宁静的住宅区，一直走到图恩湖的北岸，选一张湖滨长椅坐下，看帆船点点，远望城堡在山丘上的剪影，让时光慢慢流淌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果还有余力且天气晴好，可以乘坐湖上游船进行一段短途巡航，从水面上回望城堡与老城，角度截然不同，你会再次被它的壮丽所折服。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分，折返老城，此时店铺的灯光渐次亮起，找一家传统的“Conditorei”（糕点咖啡馆），品尝一块地道的“图恩湖蛋糕”，为这完美的一天画上甜蜜的句点。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡主塔楼顶层西侧垛口`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光时分，将相机对准远处的雪山与湖泊，让城堡厚重的石墙作为前景框架，能拍出极具层次感和史诗感的画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`骑士大厅中央仰拍屋顶木梁`}</h4>
                  <p className="text-sm text-gray-700">{`利用广角镜头，在白天室内灯光与从高侧窗射入的自然光混合的光线下，垂直向上拍摄那恢弘的木质天花板结构，对称构图能带来强烈的视觉冲击力。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`阿勒河上带顶棚的木桥中间段`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚光线柔和时，以桥的木质框架为引导线，拍摄河水奔流导向远处城堡的纵深感画面，长曝光片刻能让水流如丝绸般柔滑。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`老城“Untere Hauptgasse”街道拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光强烈时，拱廊下形成美妙的光影走廊，等待一个当地人骑自行车或提着手袋经过的瞬间，捕捉动静结合、充满生活气息的街头影像。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`图恩湖北岸的“Schadaupark”公园草坪`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，从这里可以拍到城堡、老城建筑群与它们在湖中倒影的完美全景，使用长焦镜头可以压缩空间，让城堡与背后的雪山显得更加紧密壮观。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在城堡博物馆内部拍摄时，请务必遵守规定，部分特殊展品可能禁止使用闪光灯，安静拍摄是对历史和其他参观者的尊重。`}</li>
                <li>• {`无人机飞行在瑞士受到严格管制，特别是在历史建筑和城镇上空，未经特殊许可严禁起飞，否则可能面临高额罚款。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`下榻老城内由16世纪贵族宅邸改造的精品酒店，房间保留着古老的木梁和石墙，推开窗就是潺潺河水声，晚上仿佛睡在一部历史小说里。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`湖景度假风范`}</h4>
                  <p className="text-sm text-green-800">{`选择图恩湖东岸一家拥有私人码头和小花园的家庭式湖畔旅馆，清晨在阳台上就能看到雪山倒影在平静湖面，房东太太会为你准备丰盛的农家早餐。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计旅者心头好`}</h4>
                  <p className="text-sm text-yellow-800">{`住在火车站附近一栋由旧工厂改造的现代设计酒店，工业风 loft 空间与阿尔卑斯山景形成奇妙碰撞，是探索古城后回归舒适的完美巢穴。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`山间静谧归宿`}</h4>
                  <p className="text-sm text-purple-800">{`如果自驾，可以入住城堡后方山坡上被森林环绕的静谧民宿，这里能收获俯瞰整个图恩盆地、远眺群峰的独家视角，夜晚星空无比清晰。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`图恩是个非常安全宁静的小城，无论住在老城还是湖边，治安都无需担心。夏季旅游旺季和圣诞节市场期间住宿非常紧俏，务必提前数月预订才能锁中心仪的选择。许多家庭旅馆不提供全天候前台服务，预订时确认好入住时间并保持沟通顺畅至关重要。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开图恩好些日子了，我脑海里最常浮现的，不是某一张具体的明信片般的照片，而是一种混合的感觉——是塔楼顶上那清冽的风吹在脸上的触感，是骑士大厅里那种穿越时空的宁静肃穆，是坐在河边听着流水声发呆时内心的那份彻底平和。在这个效率至上、一切追求“网红同款”的时代，图恩提供了一种截然相反的旅行价值。它不张扬，不炫技，只是从容地、完好地保存着一个中世纪城镇该有的样子，并把阿尔卑斯山与湖泊这份天地间最奢侈的礼物，作为日常背景慷慨地赠与每一个生活于此或偶然到访的人。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`我想，这就是深度旅行的意义吧。不是为了打卡，而是为了让自己沉浸在一个不同的时空维度里。在图恩，你能同时触摸到历史的厚重石墙与自然的永恒山水，能体会到人类社群在壮丽环境中的精巧建构与恬淡生活。它像一个优雅的隐喻，告诉我们，真正的力量不是征服，而是守护；真正的富有，是拥有一片值得守护的美景与一段值得传颂的历史。每一位渴望在旅途中找到安宁、获得启发的灵魂，都应该来图恩住上几日，让城堡的塔楼为你指引方向，让老城的河水洗去浮躁，你会带走一份关于何为“美好生活”的、清晰而坚定的答案。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
