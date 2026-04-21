import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '圣阿涅斯 Sainte-Agnès｜欧洲海拔最高的滨海村落，悬于悬崖之上的天空之城 - 最佳欧洲景点',
  description: '第一眼看见圣阿涅斯，你会觉得它不像一个村庄，更像一个奇迹，或者说，一个倔强的梦。当你驾车从蔚蓝海岸边那条叫人心跳加速的盘山公路不断向上、再向上，车窗一侧是越来越深的山谷，另一侧是逐渐在脚下铺陈开的、如蓝宝石般闪烁的地中海全景。就在你以为山路快到尽头时，一片暖黄色的屋顶和石墙，突然从灰绿色的山岩和橄榄...',
}

export default function SainteAgnesFrancePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/france' },
            { label: '滨海阿尔卑斯省', href: '/destinations/france' },
            { label: '圣阿涅斯', href: '/attractions/sainte-agnes-france' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`圣阿涅斯・Sainte-Agnès・法国・滨海阿尔卑斯省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看见圣阿涅斯，你会觉得它不像一个村庄，更像一个奇迹，或者说，一个倔强的梦。当你驾车从蔚蓝海岸边那条叫人心跳加速的盘山公路不断向上、再向上，车窗一侧是越来越深的山谷，另一侧是逐渐在脚下铺陈开的、如蓝宝石般闪烁的地中海全景。就在你以为山路快到尽头时，一片暖黄色的屋顶和石墙，突然从灰绿色的山岩和橄榄树丛中“生长”出来，紧紧贴在近乎垂直的崖壁上。那一刻，你完全理解了“悬空”二字的含义——它就像一个巨型的鹰巢，筑在离海面八百米高的悬崖边缘，俯瞰着脚下芒通镇的红色屋顶和意大利边境线。
把车停在村口的小广场，推开车门的第一口空气就让你沉醉。那是一种奇妙的混合：干燥温暖的石头被烈日晒过后散发出的矿物质气味，角落里野生迷迭香和百里香被风揉碎的辛辣香气，还夹杂着从下方千米之遥的海面升腾上来的、若有似无的咸腥水汽。耳朵里很安静，只有风吹过窄巷时发出的、如同吹过瓶口般的呜咽声，以及远处某扇木窗被推开时“吱呀”一声的慵懒。阳光在这里变得极其纯粹而强烈，它把每一块历经风雨的方形石块都照得棱角分明，在墙壁上投下深邃如刀刻的阴影。
这里没有匆匆的游客，时间仿佛被山风吹慢了。你遇到的可能是拄着拐杖、慢悠悠去面包店买长棍的老奶奶，她的皱纹里藏着山村所有的故事；也可能是正在自家门廊下修理旧桌椅的手艺人，敲打声在寂静的巷弄里传出老远。咖啡馆只有零星两三家，露天座位寥寥无几，但一杯浓缩咖啡的时间，足以让你看尽光影在对面石墙上的移动，听邻桌几位老人用浓重的南部口音争论着昨天的滚球比赛。圣阿涅斯的核心魅力，就在于这种极致的反差与和谐的统一：它是欧洲大陆上海拔最高的滨海村庄，将地中海的狂野浪漫与阿尔卑斯山区的坚韧沉静不可思议地融合在了一起。你站在这里，左手是深邃的内陆群山，右手是无垠的蔚蓝大海，仿佛同时触摸到了法国的两种灵魂。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看见圣阿涅斯，你会觉得它不像一个村庄，更像一个奇迹，或者说，一个倔强的梦。当你驾车从蔚蓝海岸边那条叫人心跳加速的盘山公路不断向上、再向上，车窗一侧是越来越深的山谷，另一侧是逐渐在脚下铺陈开的、如蓝宝石般闪烁的地中海全景。就在你以为山路快到尽头时，一片暖黄色的屋顶和石墙，突然从灰绿色的山岩和橄榄树丛中“生长”出来，紧紧贴在近乎垂直的崖壁上。那一刻，你完全理解了“悬空”二字的含义——它就像一个巨型的鹰巢，筑在离海面八百米高的悬崖边缘，俯瞰着脚下芒通镇的红色屋顶和意大利边境线。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`把车停在村口的小广场，推开车门的第一口空气就让你沉醉。那是一种奇妙的混合：干燥温暖的石头被烈日晒过后散发出的矿物质气味，角落里野生迷迭香和百里香被风揉碎的辛辣香气，还夹杂着从下方千米之遥的海面升腾上来的、若有似无的咸腥水汽。耳朵里很安静，只有风吹过窄巷时发出的、如同吹过瓶口般的呜咽声，以及远处某扇木窗被推开时“吱呀”一声的慵懒。阳光在这里变得极其纯粹而强烈，它把每一块历经风雨的方形石块都照得棱角分明，在墙壁上投下深邃如刀刻的阴影。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里没有匆匆的游客，时间仿佛被山风吹慢了。你遇到的可能是拄着拐杖、慢悠悠去面包店买长棍的老奶奶，她的皱纹里藏着山村所有的故事；也可能是正在自家门廊下修理旧桌椅的手艺人，敲打声在寂静的巷弄里传出老远。咖啡馆只有零星两三家，露天座位寥寥无几，但一杯浓缩咖啡的时间，足以让你看尽光影在对面石墙上的移动，听邻桌几位老人用浓重的南部口音争论着昨天的滚球比赛。圣阿涅斯的核心魅力，就在于这种极致的反差与和谐的统一：它是欧洲大陆上海拔最高的滨海村庄，将地中海的狂野浪漫与阿尔卑斯山区的坚韧沉静不可思议地融合在了一起。你站在这里，左手是深邃的内陆群山，右手是无垠的蔚蓝大海，仿佛同时触摸到了法国的两种灵魂。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`圣阿涅斯`} />
                <InfoRow label="英文名称" value={`Sainte-Agnès`} />
                <InfoRow label="正式名称" value={`Sainte-Agnès`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`滨海阿尔卑斯省`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一处见证了从罗马瞭望哨到中世纪堡垒，再到现代“最美法国村庄”称号获得的千年战略与生活史诗。`} />
                <InfoRow label="建筑特色" value={`依悬崖绝壁而建，层层叠叠的暖黄色石屋仿佛从山岩中生长出来，与嶙峋的地中海山石和蔚蓝海岸线构成一幅立体的画卷。`} />
                <InfoRow label="建筑风格" value={`典型的中世纪普罗旺斯-阿尔卑斯山村风格，混搭了后期防御工事的军事建筑元素。`} />
                <InfoRow label="文化价值" value={`它是生活与防御智慧的结合体，完美诠释了地中海沿岸山民如何在险峻之地构建家园、抵御外敌并创造出独特高山海洋文化的坚韧精神。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`村庄全年24小时开放，可自由漫步于公共区域。村内的小型地方博物馆和堡垒内部开放时间有季节性变动，通常为四月至十月，每天上午10点至下午6点开放，冬季（十一月至三月）可能仅在周末或预约开放。村中的教堂通常在白天开放。建议出行前查看滨海阿尔卑斯省旅游局官网确认最新动态。`} />
              <InfoRow label="门票价格" value={`进入圣阿涅斯村庄本身完全免费。参观村内的“中世纪堡垒遗址”和“地方历史博物馆”需要购买联票，成人票价约为5欧元，学生及65岁以上老人优惠票价约为3欧元，12岁以下儿童免费。部分季节性展览可能额外收费。`} />
              <InfoRow label="地址" value={`Place de la Mairie, 06500 Sainte-Agnès, France`} />
              <InfoRow label="交通方式" value={`最近的国际机场是法国尼斯的蔚蓝海岸机场，火车枢纽是芒通火车站。从尼斯机场出发：最便捷的方式是租车自驾，沿A8高速公路向东行驶，从“芒通”出口下，然后跟随“Sainte-Agnès”的路牌，沿着蜿蜒崎岖但风景绝美的D22公路盘山而上，全程约1小时15分钟。公共交通较为周折：先从尼斯乘坐TER火车抵达芒通（约35分钟，班次频繁），然后在芒通巴士站换乘途经圣阿涅斯的山区巴士（Zou!线路12路），每天约有4-5班车，车程约40分钟，务必提前在Zou!官网核对时刻表，山区巴士班次稀少，错过一班可能要等很久。强烈建议自驾，能最大程度享受沿途山海景观的驾驶乐趣。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`圣阿涅斯的故事，始于罗马人那双善于发现战略要地的眼睛。早在两千多年前，罗马帝国的军团沿着利古里亚海岸线扩张时，就已经注意到了这座突兀地伸向地中海的悬崖。他们在此建立了一个简易的瞭望哨，不是为了居住，而是为了监视。从这八百米的高度，视线可以毫无阻碍地覆盖从摩纳哥到意大利文蒂米利亚的大片海域和海岸线，任何船只或军队的异动都难逃法眼。罗马人撤离后，这片悬崖在漫长的岁月里归于寂静，只剩下狂风与鹰隼为伴，但它作为天然要塞的潜力，早已被刻进了地理的基因里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的转折点发生在中世纪，那是个战乱频仍、领主纷争的年代。大约在12世纪，统治这一地区的热那亚贵族或本地领主，决定在这座“不可攀登”的悬崖上筑起堡垒，建立定居点。想想看当时的工程有多么艰巨：所有石料要么就地开采，要么从山下靠人力和牲畜一点一点驮上来；水源是最大的难题，他们必须巧妙地收集雨水，或者从山岩缝隙中寻找泉水。但这一切都是值得的。建成的圣阿涅斯堡垒成了一个一夫当关、万夫莫开的绝佳防御点，控制着山下肥沃的沿海平原和重要的盐路。村庄围绕着堡垒层层向下修建，迷宫般的狭窄巷道不仅是为了节省空间，更是为了防御——入侵者即使攻入村口，也会在这些岔路众多的石巷中迷失方向，成为屋顶上守军弓箭的活靶子。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`村庄的名字“圣阿涅斯”据说源自一位公元3世纪的罗马少女殉道者，但当地的传说则更为浪漫。相传一位名叫阿涅斯的年轻牧羊女，为躲避战乱或迫婚，逃到了这座悬崖上，她的纯洁和虔诚感动了山神，让她在此安居，村庄因此得名。这个名字赋予了这片军事要塞一丝温柔的色彩。在相对和平的时期，村民们依靠山间的梯田种植橄榄、葡萄和无花果，在陡峭的坡地上放牧山羊。他们发展出了独特的高山海滨生活技艺，用山石建房，用橄榄油点灯，用晒干的海草和羊粪肥田。圣阿涅斯成了一个自给自足而又与世隔绝的微观世界。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`近代的战争再次证明了它的战略价值。在第二次世界大战期间，法国在圣阿涅斯下方的山体内部，修建了庞大的“阿尔卑斯防线”堡垒群的一部分，作为抵御意大利军队从东面进攻的屏障。这些混凝土工事如今依然存在，有些向公众开放，冰冷的机枪口与上方中世纪温暖的石屋形成了跨越时空的对话。战后，随着法国农村人口向城市迁移，圣阿涅斯也一度面临被遗弃的命运，许多石屋空空如也。转机发生在20世纪后期，“法国最美村庄”协会的评选改变了它的轨迹。圣阿涅斯凭借其无与伦比的地理位置和保存完好的中世纪风貌成功入选，吸引了艺术家、作家和寻求宁静生活的城市人前来，老房子被精心修复，村庄重新焕发了生机，从一座军事堡垒，真正变成了一座令人向往的“天空之城”。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`理想的游览应该安排整整大半天的时间，从午后开始最为美妙。建议大约下午两点抵达，这时山间的晨雾早已散尽，光线明亮饱满，最适合初探村庄。用两个小时悠闲地穿梭于迷宫般的上村巷弄，感受它的静谧与细节。然后在下午四点左右，当阳光开始变得金黄柔和时，前往堡垒遗址和观景台，这是拍摄全景和欣赏“黄金时刻”的绝佳时机。傍晚时分，留在村里用一顿晚餐，看着灯火逐一亮起，与星空和山下的海岸线灯光交相辉映，是为完美的结束。这样的节奏避开了可能的中午酷热，也抓住了最美的光影，更能体验村庄从日落到入夜的不同韵味。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿一双绝对舒适防滑的鞋子，村里的路全是凹凸不平的石头台阶和斜坡，高跟鞋在这里是灾难。
夏季日照极其强烈，且村庄几乎没有树荫，务必戴好帽子、墨镜并涂抹高倍数防晒霜。
村里的餐厅和小商店不多，且关门较早（尤其淡季），最好自备一些饮水，并提前规划好用餐。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主停车场走进村庄，立刻把自己丢进那条名为“Rue du Château”的主巷，任由脚步被光滑的鹅卵石和头顶偶尔出现的拱廊引导。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要推开那扇厚重的木门，走进简朴而宁静的圣阿涅斯教堂，让眼睛适应昏暗的光线后，去寻找那些质朴的乡村宗教壁画和雕塑。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`像寻宝一样探索那些分支出去的死胡同和隐秘的台阶，你会突然撞见一个种满天竺葵的小庭院，或者一个可以望见海平线一角的私人视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着明确的指示牌，朝着村庄最高处的堡垒遗址攀登，沿途回望，你会发现每升高一步，脚下的地中海画卷就展开得更辽阔一分。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在堡垒遗址的废墟断墙上，什么都不做，只是感受狂风从四面八方吹来，想象中世纪哨兵在此值守时看到的同样风景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从堡垒下来后，绕到村庄的东侧，那里有几条僻静的小路通向更原始的橄榄树林，是感受山村田园气息的好地方。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐时间，选择一家拥有露台的餐厅，点一份用本地草药烹制的山羊奶酪和一杯普罗旺斯桃红葡萄酒，等待夜幕降临。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果宿在村里，入夜后务必再次出门散步，在没有光污染的狭窄天空下，仰望银河，并俯瞰山下如金色项链般璀璨的芒通海岸线。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`堡垒遗址西侧断墙边`}</h4>
                  <p className="text-sm text-gray-700">{`日落前约一小时，阳光从侧面打亮古老的石墙，以此为前景，将广角镜头对准脚下无限延伸的地中海和海岸线，能拍出极具纵深感和历史感的史诗画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`村庄中层“Rue de la Poissonnerie”巷口`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，阳光能射入巷道，利用巷道的天然框架构图，聚焦于远处湛蓝的海面，前景是质感粗糙的黄色石墙和窗台上的鲜花，形成色彩与纹理的完美对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从D22公路的某个之字弯回望`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，在进入村庄前的一个开阔弯道停车，用长焦镜头压缩空间，拍摄村庄整体镶嵌在悬崖上的全景，晨雾或晚霞会让画面充满仙气。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`教堂内部彩色玻璃窗下`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，当阳光垂直穿透那面小小的、色彩鲜艳的现代派彩色玻璃窗时，蹲下来低角度拍摄，捕捉光影投射在古老石地板上的奇幻色彩图案。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`村子东面橄榄园中的石径`}</h4>
                  <p className="text-sm text-gray-700">{`下午稍晚时候，采用逆光拍摄，阳光勾勒出橄榄树扭曲枝干的轮廓和毛茸茸的银色叶片，以远处朦胧的村庄建筑为背景，充满宁静的诗意。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`这里的风非常大，尤其是在堡垒高处，使用三脚架时务必确保其稳定，或者提高ISO手持拍摄。`}</li>
                <li>• {`拍摄当地居民或他们的私有财产（如漂亮的庭院）前，请务必先微笑并征得同意，这里是很安静的居住社区。`}</li>
                <li>• {`尝试用不同白平衡设置，傍晚时分的“阴影”或“阴天”模式能强化金色光线，让石屋看起来更温暖。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`极致体验之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在村庄最顶端的“堡垒景观”石屋民宿，由15世纪的牧羊人石屋修复而成，原始的拱顶和壁炉得以保留，躺在卧室的床上就能透过小窗看到星空下的地中海。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`艺术家之家`}</h4>
                  <p className="text-sm text-green-800">{`选择一位法国画家经营的精品客栈，每个房间都以一种颜色命名，装饰着主人的原创画作，清晨可在种满薰衣草的露台上享用早餐，直面无敌海景。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`温馨家庭旅馆`}</h4>
                  <p className="text-sm text-yellow-800">{`由本地一家人经营的舒适小旅馆，位于村庄中心安静角落，女主人会为你准备丰盛的 homemade 普罗旺斯晚餐，并热情分享村庄的老故事。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`山间隐居之所`}</h4>
                  <p className="text-sm text-purple-800">{`村庄外围不远处独栋的古老农舍，完全被橄榄树和杏树包围，拥有私密的花园和泳池，适合寻求绝对静谧和想要自驾探索周边山路的旅行者。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`村庄内的住宿数量非常有限，尤其在夏季和节假日，必须提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`大部分老房子改建的住宿没有电梯，需要提着行李爬楼梯，预订时最好确认。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`住在村里意味着夜晚和清晨将独享这份宁静，但也要接受餐饮选择有限、且没有任何夜生活的事实。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开圣阿涅斯许久之后，我发现自己最常回味的，不是某张拍下的照片，而是那种站在世界边缘的奇妙感觉。在那个悬空的地方，你同时被两种巨大的力量所包裹：一种是山的沉静与坚韧，它教会你如何扎根于嶙峋的岩石，在贫瘠中寻找生机；另一种是海的辽阔与变幻，它提醒你世界何其广大，生命理应向往自由与深邃。圣阿涅斯就是这两股力量对话的桥梁，它自身的存在，就是一种温柔的奇迹。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求效率、一切扁平化的快节奏世界里，圣阿涅斯固执地保持着自己的“高度”和“难度”。它不通高铁，没有网红打卡套餐，你需要付出一点耐心，沿着曲折的山路亲自去抵达它。但正是这份“不易”，过滤掉了喧嚣，守护了它的本真。来这里，不是为了收集又一个地名，而是为了体验一种截然不同的时空维度——在这里，衡量距离的不是公里，而是海拔；标记时间的不是钟表，而是光影在山墙上的缓慢移动。对于每一位渴望深度游的灵魂来说，圣阿涅斯不仅仅是一个景点，它是一个提醒：最美的风景，往往需要我们离开平坦的捷径，鼓起勇气，去攀登。当你最终站在那悬崖之巅，听风过耳，看海无涯，你会明白，所有的跋涉都是值得的。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/ville-close-de-concarneau" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    孔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">孔卡尔诺封闭之城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ville Close de Concarneau</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/beauvais-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博韦大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Beauvais Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/abbey-of-sainte-foy-conques" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    孔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">孔克修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Abbey of Sainte-Foy</p>
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
