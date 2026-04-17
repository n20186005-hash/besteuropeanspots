import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '巴赛阿波罗神庙 Temple of Apollo Epicurius｜深藏希腊荒山的“孤独巨著”，失落的建筑奇迹 - 最佳欧洲景点',
  description: '车子在伯罗奔尼撒半岛腹地那仿佛没有尽头的橄榄树林和光秃秃的石灰岩山丘间颠簸，你会开始怀疑导航是不是开了个残酷的玩笑。这里除了偶尔掠过的鹰隼和风吹过灌木丛的沙沙声，什么都没有。然后，在一个急转弯之后，它出现了——不是想象中的雄伟山门或热闹的考古公园，而是一栋巨大的、灰色的现代帐篷形建筑，突兀地矗立在海...',
}

export default function TempleOfApolloEpicuriusBassaePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '巴赛的阿波罗·伊壁鸠鲁神庙', href: '/attractions/temple-of-apollo-epicurius-bassae' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`巴赛的阿波罗·伊壁鸠鲁神庙・Temple of Apollo Epicurius at Bassae・希腊・巴赛（伯罗奔尼撒半岛西南部山区）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在伯罗奔尼撒半岛腹地那仿佛没有尽头的橄榄树林和光秃秃的石灰岩山丘间颠簸，你会开始怀疑导航是不是开了个残酷的玩笑。这里除了偶尔掠过的鹰隼和风吹过灌木丛的沙沙声，什么都没有。然后，在一个急转弯之后，它出现了——不是想象中的雄伟山门或热闹的考古公园，而是一栋巨大的、灰色的现代帐篷形建筑，突兀地矗立在海拔1130米的荒凉山脊上，像一艘坠毁在异星上的太空船。那一刻的错愕感无比真实。
走近那栋保护性帐篷，空气变得清冷而稀薄，带着碎石和干草的尘土气息。帐篷的入口很不起眼，但当你掀开厚重的门帘走进去，时间瞬间凝固了。昏暗的光线从帐篷顶部和四周滤入，尘埃在光柱中缓缓舞蹈。你的眼睛需要几秒钟来适应，然后，那泛着蜜糖般光泽的石灰岩柱列，便如同从大地骨骼中生长出来一般，森然耸立在你面前。它不是完整的，许多部分已经坍塌，但残留的38根多立克柱依然以绝对的力量感攫住你的呼吸。这里安静得能听到自己的心跳，以及风穿过帐篷缝隙时发出的、如同古老叹息般的呜咽声。它不是德尔斐那样众人朝圣的喧嚣圣地，它是只为真正“寻找者”准备的、一场与绝对孤独和绝对美学的私人对话。
这座神庙最动人的，是它那种“被遗弃的完美”。建筑师伊克蒂诺斯（他也是雅典帕特农神庙的设计者）仿佛在这里进行了一场不受任何世俗干扰的建筑实验。你将看到，外廊是雄浑质朴的多立克柱，内殿却立着优雅的爱奥尼柱，而在神庙最深处、神像原本放置的位置，赫然矗立着一根精美的科林斯柱——这是人类历史上最早被使用的科林斯柱头之一。这种在单一建筑中融合三种古典柱式的壮举，空前绝后。它不像其他神庙那样面向东方，而是罕见地南北朝向，据说为了让晨光在特定时日精准地照亮内殿神像。站在这片废墟中，你能感受到的不是怀古的伤感，而是一种令人震颤的智力上的崇高：在如此偏远、艰苦之地，古人竟以如此精密的计算和超凡的美感，建造了这样一件献给神祇、也献给人类自身智慧极限的礼物。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在伯罗奔尼撒半岛腹地那仿佛没有尽头的橄榄树林和光秃秃的石灰岩山丘间颠簸，你会开始怀疑导航是不是开了个残酷的玩笑。这里除了偶尔掠过的鹰隼和风吹过灌木丛的沙沙声，什么都没有。然后，在一个急转弯之后，它出现了——不是想象中的雄伟山门或热闹的考古公园，而是一栋巨大的、灰色的现代帐篷形建筑，突兀地矗立在海拔1130米的荒凉山脊上，像一艘坠毁在异星上的太空船。那一刻的错愕感无比真实。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近那栋保护性帐篷，空气变得清冷而稀薄，带着碎石和干草的尘土气息。帐篷的入口很不起眼，但当你掀开厚重的门帘走进去，时间瞬间凝固了。昏暗的光线从帐篷顶部和四周滤入，尘埃在光柱中缓缓舞蹈。你的眼睛需要几秒钟来适应，然后，那泛着蜜糖般光泽的石灰岩柱列，便如同从大地骨骼中生长出来一般，森然耸立在你面前。它不是完整的，许多部分已经坍塌，但残留的38根多立克柱依然以绝对的力量感攫住你的呼吸。这里安静得能听到自己的心跳，以及风穿过帐篷缝隙时发出的、如同古老叹息般的呜咽声。它不是德尔斐那样众人朝圣的喧嚣圣地，它是只为真正“寻找者”准备的、一场与绝对孤独和绝对美学的私人对话。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座神庙最动人的，是它那种“被遗弃的完美”。建筑师伊克蒂诺斯（他也是雅典帕特农神庙的设计者）仿佛在这里进行了一场不受任何世俗干扰的建筑实验。你将看到，外廊是雄浑质朴的多立克柱，内殿却立着优雅的爱奥尼柱，而在神庙最深处、神像原本放置的位置，赫然矗立着一根精美的科林斯柱——这是人类历史上最早被使用的科林斯柱头之一。这种在单一建筑中融合三种古典柱式的壮举，空前绝后。它不像其他神庙那样面向东方，而是罕见地南北朝向，据说为了让晨光在特定时日精准地照亮内殿神像。站在这片废墟中，你能感受到的不是怀古的伤感，而是一种令人震颤的智力上的崇高：在如此偏远、艰苦之地，古人竟以如此精密的计算和超凡的美感，建造了这样一件献给神祇、也献给人类自身智慧极限的礼物。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`巴赛的阿波罗·伊壁鸠鲁神庙`} />
                <InfoRow label="英文名称" value={`Temple of Apollo Epicurius at Bassae`} />
                <InfoRow label="正式名称" value={`Temple of Apollo Epicurius at Bassae`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`巴赛（伯罗奔尼撒半岛西南部山区）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`古希腊建筑史上最神秘、最先进、最孤独的杰作，也是第一个被列入联合国教科文组织世界遗产名录的希腊遗址。`} />
                <InfoRow label="建筑特色" value={`在荒凉险峻的山脊上，奇迹般地融合了多立克、爱奥尼和科林斯三种柱式，拥有独特的室内设计（包括现存最早使用的科林斯柱）和精确的天文朝向。`} />
                <InfoRow label="建筑风格" value={`古典希腊时期建筑，体现了从古朴向古典完美过渡的风格，并大胆进行了突破性创新。`} />
                <InfoRow label="文化价值" value={`是献给“拯救者”阿波罗的至高谢礼，见证了古希腊宗教虔诚与建筑智慧在极端环境下的完美结合，其设计影响了后世无数建筑。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`通常为每日上午8:00至下午3:00。请注意，开放时间可能因季节（冬季可能缩短）、天气状况和工作人员配备而略有调整，且极为依赖天气，强风或暴雨时会完全关闭。由于位置偏远，强烈建议出发前通过希腊文化部官网或当地旅游信息中心核实。全年无休，但节假日开放时间需特别确认。`} />
              <InfoRow label="门票价格" value={`全价票约为12欧元。欧盟学生及65岁以上长者享有半价优惠。欧盟公民（需出示身份证件）在特定文化日（如每年9月的最后一个周末）可免费入场。18岁以下青少年免费。现场购票，仅接受现金（欧元）。`} />
              <InfoRow label="地址" value={`Figaleia, 270 61, 希腊`} />
              <InfoRow label="交通方式" value={`这是一个“朝圣”般的旅程。最近的国际机场在卡拉马塔或雅典。从雅典出发是主流选择：先自驾或乘长途巴士约3.5小时到达奥林匹亚或安德利察伊纳镇。之后的路是真正的挑战——你需要一辆结实耐用的汽车，驶上蜿蜒崎岖、几乎没有标识的山路，车程约1-1.5小时。没有可靠的公共交通直达。也可以从卡拉马塔或皮尔戈斯镇出发，但山路同样艰辛。自驾是唯一推荐的方式，务必使用离线地图，加满油，并在白天行驶。全程耗时（从雅典算起）至少需要4-5小时单程。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要追溯到公元前5世纪。伯罗奔尼撒半岛上的菲加利亚城邦，正被一场可怕的瘟疫所折磨。绝望之中，人们向医药与光明之神阿波罗祈祷，并许下诺言：若能驱除瘟疫，他们将建造一座最宏伟的神庙来献给作为“拯救者”（Epicurius）的阿波罗。神祇似乎听到了祈祷，瘟疫退去。于是，菲加利亚人决定兑现誓言。他们没有选择容易到达的平原或海边，而是将地址定在了这片远离城市、高踞山巅的古老圣地。有人说，这是为了更接近天空与神明；也有人说，这里本就有一个更古老的祭祀遗址。无论原因为何，这个决定注定了这座神庙非凡的命运。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`他们请来了当时最负盛名的建筑师——刚完成雅典卫城帕特农神庙巨作的伊克蒂诺斯。对于这位大师而言，巴赛或许是他的“实验室”和“自留地”。远离了雅典民主城邦那些挑剔的公民和官僚委员会的监督，他在这里获得了前所未有的创作自由。于是，我们看到了那些突破常规的大胆设计：他将传统的长方形式样略作调整，采用了更狭长的比例。他不仅在外观上使用了标准的六柱多立克立面，更在内部玩起了“柱式游戏”——用爱奥尼柱式营造内殿的优雅回廊，并最终，在最核心的圣所里，创造性地“发明”并竖立起那根华丽如茛苕叶绽放的科林斯石柱。这不仅仅是一座神庙，这是一部用石头写就的建筑宣言，宣告着从古朴的沉重向古典的精致与均衡的进化。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在随后的千年里，随着古典世界的衰落、基督教的兴起，这座深山中的神庙逐渐被世人遗忘。它没有被改建成教堂，也没有被大规模地掠夺石材（或许正是因为它太难到达），只是静静地被遗弃在山风中。粗粝的岩石、暴雨、地震和野蛮生长的植被成为了它新的主人。直到1765年，一位法国建筑师在荒山考察时偶然“重新发现”了它，欧洲考古界才为之震动。十九世纪初，一群外国探险家（包括那些同样搬走了埃尔金大理石的人）来到了这里。他们切割并运走了神庙内殿大量精美的浮雕饰带，这些描绘着希腊人与亚马逊人、拉庇泰人与半人马搏斗场景的大理石板，如今静静地躺在伦敦大英博物馆的展厅里，与它们出生的那座荒山神庙隔着千山万水。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`二十世纪，为了保护这座暴露在严酷山风中、不断风化的脆弱遗迹，希腊政府做出了一个大胆而充满争议的决定：为它建造一个巨大的永久性保护帐篷。于是，在1980年代，那个巨大的灰色钢结构拔地而起，将整座神庙完全笼罩。这破坏了遗址“原始”的视觉景观，招致许多批评，但也确实减缓了石材的恶化。当你今天站在帐篷下，触摸那些依然冰凉但相对完好的柱身时，你会明白这种保护的无奈与必要。它从一个被自然遗忘的废墟，变成了一个被现代技术精心“封装”的文物，这种身份的转变，本身也是它漫长历史中一个充满现代性的章节。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`这是一次需要全心投入的“一日远征”。建议在清晨尽早从你的基地（如奥林匹亚或安德利察伊纳）出发，争取在上午10点前抵达神庙。这样既能避开正午最灼热的山地阳光（尽管有帐篷，但内部仍很闷热），也能享受相对柔和的光线用于拍照。整体游览时间建议预留至少2小时，因为路途本身占用了大半天，必须让这趟跋涉物有所值。节奏要慢，这里不适合匆匆打卡。先绕行帐篷外围感受环境之苍凉，再进入内部细细品味每一处建筑细节，最后静坐片刻，体会那种与世隔绝的宁静。参观完毕后，可以驾车前往不远处的菲加利亚小镇用一顿迟来的午餐，那里有地道的山村小馆。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿着牢固防滑的徒步鞋，遗址内外的地面遍布碎石和 uneven terrain。
自带充足的饮用水和少量高能量零食，山顶没有任何商店或售货机，最近的补给点也在山下的村庄。
山区天气瞬息万变，即使夏日也请带一件防风外套，帐篷内比外面阴冷很多。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨驱车盘山而上时，记得摇下车窗，感受海拔升高带来的气温变化和越来越纯净的空气。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在简陋的停车场，先别急着进去，绕着巨大的白色保护帐篷走一圈，从各个角度仰望它和背后荒芜山脊形成的奇特景观。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`低头寻找散落在遗址周围的古老建筑石料碎片，想象它们两千多年前原本的位置。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入保护棚内，首先在外廊的多立克柱列间静立几分钟，让你的眼睛和心灵适应这昏暗而神圣的时空转换。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`缓缓步入内殿（cella），抬头仔细寻找并辨认那些支撑屋顶的爱奥尼柱和那根独一无二的科林斯柱。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到神庙最北端的圣所位置，抬头看看屋顶结构（如果可见），想象当年阿波罗神像就安放在这里，沐浴着特殊角度的阳光。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果工作人员允许且状态良好，可以尝试从特定的侧面角度，观察神庙地基如何与崎岖的山岩浑然一体。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观结束出来，在遗址边缘找一块平坦的石头坐下，什么也不做，只是聆听风声，俯瞰脚下延绵到天际的群山与河谷。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`保护帐篷东南侧的外围斜坡`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，阳光西斜时，从这个角度可以拍摄到帐篷的几何结构与背后苍凉山脉的对比，构图时让帐篷占据画面一侧，留出大片天空和山体。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`帐篷内部，从西北角向东南角拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`利用内部昏暗的光线，将对焦放在一根清晰的多立克柱上，让后方排列的柱列在景深中逐渐虚化，形成强烈的纵深感与历史朦胧感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`特写科林斯柱头`}</h4>
                  <p className="text-sm text-gray-700">{`需要长焦镜头或手机放大功能，在允许的最近距离内，捕捉茛苕叶雕刻的精致细节，侧光（中午前后有光从帐篷侧窗射入时最佳）能突出叶片的立体感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从停车场回望全景`}</h4>
                  <p className="text-sm text-gray-700">{`在离开前，用广角镜头拍摄一张神庙保护棚矗立于荒凉山顶的全景，将蜿蜒的山路也纳入构图，凸显其“遗世独立”的选址特点。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`帐篷内部光线非常暗且不均，提高ISO不可避免，尝试将相机稳定在石头上进行长时间曝光，能获得更干净的画面。绝对禁止使用三脚架（通常会被工作人员制止）。闪光灯不仅无用（距离太远），而且会破坏神圣氛围，严禁使用。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`山村隐居`}</h4>
                  <p className="text-sm text-blue-800">{`菲加利亚小镇上由家族经营的石头民宿，晚上能看见璀璨到不可思议的银河，主人会端来自酿的酸味葡萄酒和炖山菜。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`古典基地`}</h4>
                  <p className="text-sm text-green-800">{`选择住在奥林匹亚的精品酒店，白天探访完孤独的神庙，晚上回到这个古典运动的圣地，在满是橄榄树香的花园里回味一天的时空穿越。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`海岸喘息`}</h4>
                  <p className="text-sm text-yellow-800">{`如果你受不了连日山区的荒凉，可以住在卡拉马塔海滨的舒适酒店，用爱琴海的湛蓝和美味橄榄油来抚慰探秘归来后疲惫的身心。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`生态野趣`}</h4>
                  <p className="text-sm text-purple-800">{`伯罗奔尼撒半岛深处的一些生态村落提供改造过的传统石屋，体验完全自给自足的田园生活，是消化巴赛那种原始感的绝佳延续。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`山区民宿设施可能比较基本，热水和WiFi信号时好时坏，但这正是体验的一部分。夏季是旺季，但巴赛本身游客始终不多，住宿无需过分提前预订，但抵达当天傍晚再找可能会选择有限。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开巴赛，重新驶入盘山公路，后视镜里那顶灰色的帐篷逐渐缩小，最后消失在嶙峋的山线之后。那一刻的感受非常复杂：有一种完成朝圣后的释然，更有一种巨大的失落感，仿佛刚刚告别了一个只对你诉说秘密的老朋友。它不像雅典卫城那样永远沐浴在荣光与聚光灯下，它承受的，是千年的遗忘、刺骨的山风和现代人充满争议的保护。但正是这种“不完美”的境遇，让它更加真实，更加动人。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都被便捷化、景观化的时代，巴赛阿波罗神庙固执地保持着它的难度和孤独。它拒绝被轻易消费，要求每一位访客付出时间、耐心和体力。而这，或许正是深度旅行最珍贵的意义所在。它让你记住的，不仅仅是那根最早出现的科林斯柱的建筑史意义，更是你在荒芜山路上的颠簸，是帐篷里那冰冷石头的气息，是在绝顶之上与千古寂静的对望。它告诉你，有些美，注定无法被复制、被搬运、被简化；它们只能站在那里，等你穿过千山万水，亲自前来，完成一场沉默而盛大的对话。这，就是我们必须去巴赛的理由。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/meteora-monasteries" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅黛奥拉悬空修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Meteora</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/monemvasia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莫奈姆瓦夏</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Monemvasia</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/molyvos-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莫利沃斯（依山傍海的石头城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Molyvos</p>
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
