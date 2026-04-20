import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '希克洛什城堡 Siklós Castle｜匈牙利南部“葡萄园中的珍珠”，罕见完好融合文艺复兴风情的活态要塞 - 最佳欧洲景点',
  description: '车子沿着蜿蜒的乡间小路驶近希克洛什，最先闯入视野的，不是高耸的塔楼，而是环绕着整个丘陵的、一望无际的翠绿葡萄园。然后，那座蜜糖色的城堡才像从大地自然生长出来一样，稳稳地坐在山丘顶端，在午后的阳光下泛着温暖的光泽。它不像有些城堡那样孤傲冰冷，反而有种被岁月驯服后的柔和。空气里混合着新鲜泥土、葡萄藤叶的...',
}

export default function SiklosCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '希克洛什城堡', href: '/attractions/siklos-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`希克洛什城堡・Siklós Castle・匈牙利・巴兰尼亚州，希克洛什镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着蜿蜒的乡间小路驶近希克洛什，最先闯入视野的，不是高耸的塔楼，而是环绕着整个丘陵的、一望无际的翠绿葡萄园。然后，那座蜜糖色的城堡才像从大地自然生长出来一样，稳稳地坐在山丘顶端，在午后的阳光下泛着温暖的光泽。它不像有些城堡那样孤傲冰冷，反而有种被岁月驯服后的柔和。空气里混合着新鲜泥土、葡萄藤叶的清香，还有远处不知谁家院子里飘来的炖肉香气，那一刻你就知道，这座城堡从未死去，它只是换了一种方式，继续呼吸和生活着。
穿过宁静得能听见自己脚步声的小镇主街，顺着略有坡度的石子路向上走，城堡巨大的轮廓逐渐清晰。你能清晰地看到城墙底部深色、粗糙的原始巨石，那是它作为要塞的坚实骨骼；而上层的窗户、拱廊和装饰性的山墙，则被刷成了柔和的黄色与白色，线条优雅，那是它后来被赋予的文艺复兴“皮肤”。走进拱形大门洞的瞬间，声音仿佛被过滤了——外面的车马声消失了，取而代之的是庭院里喷泉的潺潺水声，咖啡馆露台上瓷器碰撞的清脆响声，以及鸽子在拱廊下扑棱翅膀的声音。庭院中央，一棵老菩提树撑开巨大的华盖，树荫下摆着几张桌子，几个当地人正慢悠悠地喝着咖啡，仿佛这座拥有七百年历史的城堡庭院，只是他们家门口再平常不过的广场。
最打动人心的，正是这种“活着的”气息。这里没有那种博物馆式的、令人屏息的肃穆。地下酒窖里陈列着本地产的优质红酒，骑士大厅变成了举办婚礼的浪漫场地，曾经的马厩被改造成了舒适的客房。你可能会碰到一位侍者，他的祖辈或许就是城堡的守卫；也可能在转角遇到一位正在给壁画做修复的工匠，他会停下来，用带着口音的英语向你解释某块石雕的来历。希克洛什的魅力不在于惊天动地的传奇，而在于一种绵长而坚韧的“日常性”。它告诉我们，历史最好的保存方式，不是真空封存，而是让它继续成为生活的一部分，呼吸、生长，并散发出新的活力。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子沿着蜿蜒的乡间小路驶近希克洛什，最先闯入视野的，不是高耸的塔楼，而是环绕着整个丘陵的、一望无际的翠绿葡萄园。然后，那座蜜糖色的城堡才像从大地自然生长出来一样，稳稳地坐在山丘顶端，在午后的阳光下泛着温暖的光泽。它不像有些城堡那样孤傲冰冷，反而有种被岁月驯服后的柔和。空气里混合着新鲜泥土、葡萄藤叶的清香，还有远处不知谁家院子里飘来的炖肉香气，那一刻你就知道，这座城堡从未死去，它只是换了一种方式，继续呼吸和生活着。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过宁静得能听见自己脚步声的小镇主街，顺着略有坡度的石子路向上走，城堡巨大的轮廓逐渐清晰。你能清晰地看到城墙底部深色、粗糙的原始巨石，那是它作为要塞的坚实骨骼；而上层的窗户、拱廊和装饰性的山墙，则被刷成了柔和的黄色与白色，线条优雅，那是它后来被赋予的文艺复兴“皮肤”。走进拱形大门洞的瞬间，声音仿佛被过滤了——外面的车马声消失了，取而代之的是庭院里喷泉的潺潺水声，咖啡馆露台上瓷器碰撞的清脆响声，以及鸽子在拱廊下扑棱翅膀的声音。庭院中央，一棵老菩提树撑开巨大的华盖，树荫下摆着几张桌子，几个当地人正慢悠悠地喝着咖啡，仿佛这座拥有七百年历史的城堡庭院，只是他们家门口再平常不过的广场。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，正是这种“活着的”气息。这里没有那种博物馆式的、令人屏息的肃穆。地下酒窖里陈列着本地产的优质红酒，骑士大厅变成了举办婚礼的浪漫场地，曾经的马厩被改造成了舒适的客房。你可能会碰到一位侍者，他的祖辈或许就是城堡的守卫；也可能在转角遇到一位正在给壁画做修复的工匠，他会停下来，用带着口音的英语向你解释某块石雕的来历。希克洛什的魅力不在于惊天动地的传奇，而在于一种绵长而坚韧的“日常性”。它告诉我们，历史最好的保存方式，不是真空封存，而是让它继续成为生活的一部分，呼吸、生长，并散发出新的活力。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`希克洛什城堡`} />
                <InfoRow label="英文名称" value={`Siklós Castle`} />
                <InfoRow label="正式名称" value={`Siklós Castle`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`巴兰尼亚州，希克洛什镇`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`作为匈牙利南部巴兰尼亚州保存最完好、从未被彻底摧毁的中世纪城堡之一，它在数百年间一直是防御奥斯曼土耳其帝国入侵的关键要塞，并成功转型为一座融合了军事防御与贵族优雅生活的独特建筑。`} />
                <InfoRow label="建筑特色" value={`一座罕见地将粗犷的哥特式防御工事与精美的文艺复兴风格宫殿庭院和谐融为一体的“活城堡”，至今仍作为酒店、餐厅和博物馆充满生机。`} />
                <InfoRow label="建筑风格" value={`以晚期哥特式军事建筑为基础，在15-16世纪逐步增添了浓郁的匈牙利文艺复兴风格装饰，形成了独特的“过渡时期”建筑典范。`} />
                <InfoRow label="文化价值" value={`它不仅是一座石头写就的史书，更是一个持续运作的社区核心，完美诠释了匈牙利南部葡萄酒产区将历史遗产融入当代日常生活的智慧与温度。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`旺季（4月1日至10月31日）：每天上午9点至下午6点开放，最后入场时间为下午5点。
淡季（11月1日至3月31日）：周二至周日上午10点至下午4点开放，每周一闭馆（除非是法定节假日）。城堡在12月24日、25日、31日和1月1日全天关闭。每年1月通常会进行为期两周的年度维护，具体日期提前官网通知。`} />
              <InfoRow label="门票价格" value={`成人票：2800匈牙利福林（约合7欧元）。
学生票（需持有效国际学生证）及6-26岁青少年：1400匈牙利福林。
6岁以下儿童免费。
家庭套票（2成人+最多3名儿童）：7000匈牙利福林。
购买门票后可免费领取语音导览设备（含中文选项）。每月第一个周日对欧盟公民免费开放（其他国籍游客仍需购票）。`} />
              <InfoRow label="地址" value={`Siklós, Vár u. 1-3, 7800 Hungary`} />
              <InfoRow label="交通方式" value={`从最近的国际机场（佩奇-波加尼国际机场，代码：QPJ）出发：机场规模较小，航班有限。更常见的路线是从布达佩斯或维也纳入境。
从布达佩斯出发：在布达佩斯南部的Népliget汽车站乘坐长途巴士前往希克洛什镇，车程约3-3.5小时，班次每天约4-5班，建议提前在FlixBus官网查询和购票。或乘坐火车从布达佩斯Déli火车站到佩奇（Pécs），车程约2.5-3小时，再从佩奇火车站前的公交站转乘前往希克洛什的本地巴士（约45分钟车程），本地巴士班次较密集，每小时约1-2班。
自驾：从佩奇沿M60/57号公路向南行驶约30公里，跟着棕色“Vár”（城堡）旅游指示牌即可轻松抵达城堡山脚下。小镇有免费公共停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`希克洛什的故事，始于匈牙利王国巩固其南部边境的时代。早在13世纪，这里就已经有了防御工事的雏形，但真正让它登上历史舞台的，是14世纪的匈牙利安茹王朝。国王拉约什一世将这片土地赐予了强大的匈牙利贵族家族，城堡开始了它的第一次重要扩建。石头取代了木材，塔楼拔地而起，它成为了俯瞰整个巴兰尼亚平原、监控通往亚得里亚海商路的重要据点。然而，城堡最初的建造者可能怎么也想不到，它最严峻的考验，会在两个世纪后来自东方。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`15世纪末到16世纪，奥斯曼土耳其帝国的阴影如同铁幕般笼罩整个东南欧。希克洛什因其坚固的城防，成为了南匈牙利抵抗入侵的前沿堡垒之一。1526年莫哈奇战役的惨败后，匈牙利王国分崩离析，南部大片领土沦陷。但希克洛什却奇迹般地顶住了一波又一波的围攻。这不仅要归功于它不断加固的城墙和巧妙的地形，更要归功于它的主人——尤其是16世纪初的领主帕洛奇家族。他们没有仅仅将城堡视为军事堡垒，而是在战火稍歇的间隙，为它注入了文艺复兴的优雅灵魂。他们增建了带有精美拱廊的宫殿庭院，用当时最时尚的匈牙利文艺复兴风格装饰厅堂的窗户和墙面。于是在烽火连天的岁月里，这座城堡内部竟绽放出人文主义的花朵，形成了外刚内柔的奇异反差。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`奥斯曼的统治最终还是到来了，城堡在1543年被占领。但有趣的是，征服者并未摧毁它，而是将其纳入自己的边境防御体系，并进行了加固。这段长达近150年的“土耳其时期”，在城堡的建筑上留下了独特的痕迹，比如某些穹顶的样式和浴室的遗迹。直到1686年，哈布斯堡王朝的军队才将其收复。收复后的城堡迎来了新的主人——显赫的巴蒂亚尼家族。18世纪，在玛丽亚·特蕾莎女皇统治的辉煌时期，城堡经历了最后一次重大的巴洛克风格改造，内部装潢变得更加奢华，以适应贵族生活的需要。它从刀光剑影的前线要塞，彻底转变为一座彰显地位与财富的乡间宫殿。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，平静并未持续太久。二十世纪的战火再次波及此地。二战末期，撤退的德军曾在此负隅顽抗，城堡遭受了炮火损伤。战后，它像许多贵族财产一样被收归国有，一度面临荒废的危机。但幸运的是，当地人和有远见的文物保护者看到了它的价值。从上世纪六十年代开始，一场漫长而细致的修复工程启动了。修复者们没有选择将它变成一座空洞的纪念碑，而是创造性地提出了“活态保护”的理念。于是，酒窖重新飘出酒香，房间挂上了酒店的窗帘，厨房升起了炊烟。今天的希克洛什，是匈牙利将文化遗产进行创造性再利用的成功典范。它的每一块石头，既诉说着国王、骑士、征服者和伯爵夫人的往事，也记录着当代工匠、厨师、酿酒师和游客的故事，是一部从未完结的编年史。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在上午9点半左右抵达，这时晨雾刚刚散去，阳光将城堡映照得格外清晰，旅游团的大巴还未到来，你能独享一份宁静。整体游览需要预留至少4-5小时，节奏宜慢不宜快，因为这座城堡的魅力需要细细品味。建议的路线是：先由外而内感受其整体气势与周边环境，再深入内部探索从地牢到宫殿的立体空间，最后以一场感官盛宴（品酒或用餐）和山顶的俯瞰作为完美收尾。这样的安排能让你在视觉、历史和味觉上，对希克洛什获得一个立体而饱满的认知。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡内部分楼梯陡峭且台阶高度不一，建议穿着绝对舒适防滑的鞋子，女士尽量避免高跟鞋。
小镇和城堡内的部分小店、咖啡馆可能只接受现金（福林），尽管大部分餐厅和售票处可以刷卡，但备一些小面额现金总是更方便。
如果时间充裕，尽量避开周一前往，因为小镇上的一些特色小店和周边小型博物馆可能在周一休息。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从小镇广场沿着古老的“城堡街”缓步上行，让两旁色彩柔和的民居和爬满藤蔓的围墙为你铺垫即将到来的历史氛围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过那道厚重的哥特式拱门进入主庭院，立刻在菩提树下的喷泉边驻足片刻，感受阳光透过拱廊在石板地上画出的光影，听一听这座城堡心脏地带的生活脉搏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着指示牌探索阴凉而神秘的城堡地牢与防御工事底层，用手触摸冰凉粗糙的墙砖，想象士兵们在此守卫的漫长夜晚。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着文艺复兴风格的华丽石阶拾级而上，进入装饰着壁画和古老瓷炉的骑士大厅，留意窗框上精致的石雕，那是文艺复兴工匠留下的优雅签名。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要登上主塔楼的观景台，在这里360度环视，将巴兰尼亚州连绵的丘陵、整齐的葡萄园、红色的屋顶和远处教堂的尖顶尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访城堡小教堂，这里静谧的气氛与精美的祭坛画，会让你瞬间沉静下来，体会到即使在战乱年代，人们对信仰与美的追求也从未停止。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城堡露台的餐厅或酒窖酒吧坐下，点一杯本地特产的红酒（比如著名的“公牛血”或希克洛什本地酒），配上一份传统匈牙利炖牛肉，让味蕾也参与这场历史之旅。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在黄昏时分离开前，再次绕到城堡南侧的外墙下，看夕阳的余晖将整座建筑染成金红色，这时它看起来不像一座堡垒，更像一个温暖而巨大的家园。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡南侧山坡的葡萄园中`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前两小时，从较低的角度仰拍，能将宏伟的城堡墙体与前景的葡萄藤蔓一同纳入画面，展现其“葡萄园守护者”的姿态。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主庭院东侧拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点至正午时分，阳光会斜射入拱廊，形成强烈的明暗对比和延伸的光影线条，人物站在光柱中或靠在石柱上，能拍出极具戏剧感和空间感的照片。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`主塔楼顶的西北角垛口`}</h4>
                  <p className="text-sm text-gray-700">{`任何晴朗的白天，将相机镜头透过古老的石砌垛口框取远处小镇的红色屋顶和教堂塔楼，能创作出有深度、有故事性的“画中画”构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`骑士大厅的文艺复兴风格窗边`}</h4>
                  <p className="text-sm text-gray-700">{`下午的阳光会透过窗户，在室内投下温暖的光斑，让人物坐在窗边的长椅上，侧脸望向窗外或手中的书籍，能捕捉到宁静而富有历史感的瞬间。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`建议携带一个广角镜头（拍摄庭院和建筑全景）和一个定焦大光圈镜头（在室内弱光环境下捕捉细节和人物）。三脚架在拍摄塔楼夜景或室内慢门时非常有用，但需注意不妨碍其他游客。城堡内部博物馆区域通常禁用闪光灯，请自觉遵守。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`极致体验`}</h4>
                  <p className="text-sm text-blue-800">{`直接住在城堡内部的“城堡酒店”客房，这些房间由古老的宫室修复而成，保留了原始的石头墙壁和木梁，夜晚当游客散去，你便能独享一座空灵而神秘的千年古堡。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`小镇中心风情`}</h4>
                  <p className="text-sm text-green-800">{`选择镇广场旁由百年老宅改造的精品民宿，房东太太通常会准备丰盛的 homemade 早餐，傍晚可以轻松融入当地人在广场散步聊天的日常节奏。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`田园诗画`}</h4>
                  <p className="text-sm text-yellow-800">{`预订城堡山脚下或附近葡萄园中的度假农庄，醒来推开窗便是满眼绿意，有些农庄还提供自行车租赁，让你能自由探索周边的葡萄酒之路。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`便捷城市之选`}</h4>
                  <p className="text-sm text-purple-800">{`如果追求更多的餐饮和夜生活选择，可以住在30分钟车程外的佩奇市（Pécs）市中心，那里有众多设计酒店和热闹的咖啡馆文化，白天再来希克洛什一日游。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡酒店的房间数量非常有限，且极其受欢迎，尤其是在夏季和婚礼旺季，务必提前至少3-4个月预订。希克洛什小镇本身非常安全宁静，夜晚几乎没有任何喧闹，适合寻求静谧放松的旅行者。如果选择住在佩奇，可以利用晚上欣赏这座“欧洲文化之都”美丽的夜景和丰富的音乐会活动。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开希克洛什的时候，我背包里没有多一件纪念品，但心里却好像被填满了些什么。那不是看到绝世奇观后的震撼，而是一种温暖的、踏实的平静。这座城堡用它自己的存在方式，向我悄悄诉说了一个关于“韧性”和“融合”的真理。它见过旌旗招展，也听过哀鸿遍野；它的墙砖感受过战锤的撞击，也沐浴过文艺复兴的暖阳。但它没有在任何一个身份里固步自封——从要塞到宫殿，从废墟到酒店，它总能找到与新时代对话的方式，将历史的重量转化为生活的滋养。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求快速消费、打卡即走的世界里，希克洛什像一个沉稳的长者，邀请你慢下来。它不急于向你展示所有，而是让你在庭院里的一杯咖啡中，在酒窖里的一次碰杯中，在夕阳下与当地老人的一次点头微笑中，自己去发现、去拼接它的故事。它告诉我们，最深度的旅行，不是收集了多少地标，而是你是否曾真正地“进入”过一个地方的生活脉络，是否曾感受到时间在那里流动的独特韵律。如果你也厌倦了浮光掠影，渴望一次与历史、与土地、与普通人生活真诚相对的旅程，那么，请务必来希克洛什住上几天。让这座“活着的城堡”，治愈你的匆忙，并教会你，如何与过去温柔共存。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/gyor" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    杰
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">杰尔古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Győr</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ferrara-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    费
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">费拉拉城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ferrara Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sopron" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    肖
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">肖普朗老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sopron</p>
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
