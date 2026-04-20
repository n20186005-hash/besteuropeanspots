import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '凯里尼亚港与城堡 Kyrenia Harbour & Castle｜邂逅2400年前沉船的威尼斯古堡，在地中海最诗意的港口看日落 - 最佳欧洲景点',
  description: '想象一下，你从一条蜿蜒的、飘着茉莉花香的小巷里钻出来，眼前豁然开朗。一片温柔的、蓝得不像话的地中海海湾，像一块巨大的、微微晃动的丝绒，毫无保留地铺展在你面前。这就是凯里尼亚港给你的第一记视觉直拳。空气是咸的，混合着烤鱼、新鲜油漆（总有小船在修补）和浓烈咖啡的复杂气味。耳边是叮叮当当的缆绳敲打桅杆声，...',
}

export default function KyreniaHarbourCastleShipwreckMuseumPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '凯里尼亚港与城堡（塞浦路斯）', href: '/attractions/kyrenia-harbour-castle-shipwreck-museum' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`凯里尼亚港与城堡（塞浦路斯）・Kyrenia Harbour & Castle・塞浦路斯（事实上由北塞浦路斯土耳其共和国控制）・凯里尼亚（当地土耳其语称“吉尔内”，Girne）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下，你从一条蜿蜒的、飘着茉莉花香的小巷里钻出来，眼前豁然开朗。一片温柔的、蓝得不像话的地中海海湾，像一块巨大的、微微晃动的丝绒，毫无保留地铺展在你面前。这就是凯里尼亚港给你的第一记视觉直拳。空气是咸的，混合着烤鱼、新鲜油漆（总有小船在修补）和浓烈咖啡的复杂气味。耳边是叮叮当当的缆绳敲打桅杆声，像风铃，但又更结实；是渔民用你听不懂的土耳其语高声交谈的笑声；是海浪轻轻拍打古老石砌防波堤的、永恒的叹息声。
港口呈完美的马蹄形，被色彩柔和的威尼斯式建筑环绕——那些有着木制百叶窗和鲜艳阳台的建筑，如今大多是餐厅和咖啡馆。而真正统治这一切的，是港口北端那座雄赳赳的、土黄色的凯里尼亚城堡。它不像童话里的城堡那么纤细精致，它矮壮、沉稳、棱角分明，像一个攥紧的拳头，深深地嵌入海中。阳光打在古老的石墙上，每一块石头都吸饱了热量，散发出干燥的历史气味。当地人早已习惯了它的存在，老人们坐在海堤上钓一整天的鱼，情侣们在城墙根下的长椅上看日落，它不再是遥远的景点，而是小镇日常生活最坚实、最沉默的背景板。
但这里最打动人心的，远不止这如明信片般的美景。城堡内部隐藏着一个足以让时间静止的秘密——那艘来自公元前4世纪的古希腊沉船。当你从阳光灿烂的港口走进城堡阴凉、厚实的内部，沿着石阶下行，你会感到一阵凉意袭来。然后，你就在一个特别设计的展厅里，与它面对面了。它那么小，那么脆弱，龙骨和部分船板静静地躺在那里，像一个沉睡千年的巨人骨骸。那一刻，港口咖啡馆的喧嚣、游艇的汽笛声全部消失了，你听到的只有自己心跳的声音，以及穿越两千四百年的、无声的海浪回响。这就是凯里尼亚的魔力：它将地中海的日常诗意，与人类历史的深邃重量，不可思议地融合在了这一个小小的马蹄形港湾里。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下，你从一条蜿蜒的、飘着茉莉花香的小巷里钻出来，眼前豁然开朗。一片温柔的、蓝得不像话的地中海海湾，像一块巨大的、微微晃动的丝绒，毫无保留地铺展在你面前。这就是凯里尼亚港给你的第一记视觉直拳。空气是咸的，混合着烤鱼、新鲜油漆（总有小船在修补）和浓烈咖啡的复杂气味。耳边是叮叮当当的缆绳敲打桅杆声，像风铃，但又更结实；是渔民用你听不懂的土耳其语高声交谈的笑声；是海浪轻轻拍打古老石砌防波堤的、永恒的叹息声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`港口呈完美的马蹄形，被色彩柔和的威尼斯式建筑环绕——那些有着木制百叶窗和鲜艳阳台的建筑，如今大多是餐厅和咖啡馆。而真正统治这一切的，是港口北端那座雄赳赳的、土黄色的凯里尼亚城堡。它不像童话里的城堡那么纤细精致，它矮壮、沉稳、棱角分明，像一个攥紧的拳头，深深地嵌入海中。阳光打在古老的石墙上，每一块石头都吸饱了热量，散发出干燥的历史气味。当地人早已习惯了它的存在，老人们坐在海堤上钓一整天的鱼，情侣们在城墙根下的长椅上看日落，它不再是遥远的景点，而是小镇日常生活最坚实、最沉默的背景板。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但这里最打动人心的，远不止这如明信片般的美景。城堡内部隐藏着一个足以让时间静止的秘密——那艘来自公元前4世纪的古希腊沉船。当你从阳光灿烂的港口走进城堡阴凉、厚实的内部，沿着石阶下行，你会感到一阵凉意袭来。然后，你就在一个特别设计的展厅里，与它面对面了。它那么小，那么脆弱，龙骨和部分船板静静地躺在那里，像一个沉睡千年的巨人骨骸。那一刻，港口咖啡馆的喧嚣、游艇的汽笛声全部消失了，你听到的只有自己心跳的声音，以及穿越两千四百年的、无声的海浪回响。这就是凯里尼亚的魔力：它将地中海的日常诗意，与人类历史的深邃重量，不可思议地融合在了这一个小小的马蹄形港湾里。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`凯里尼亚港与城堡（塞浦路斯）`} />
                <InfoRow label="英文名称" value={`Kyrenia Harbour & Castle`} />
                <InfoRow label="正式名称" value={`Kyrenia Castle and the Shipwreck Museum`} />
                <InfoRow label="国家" value={`塞浦路斯（事实上由北塞浦路斯土耳其共和国控制）`} />
                <InfoRow label="城市" value={`凯里尼亚（当地土耳其语称“吉尔内”，Girne）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座扼守港口的堡垒，是塞浦路斯千年历史的微缩剧场，历经拜占庭、十字军、威尼斯和奥斯曼等七大王朝的兴衰更迭。`} />
                <InfoRow label="建筑特色" value={`一座由厚重石灰岩垒砌而成的菱形海上堡垒，完美融合了中世纪军事建筑的粗犷与威尼斯文艺复兴时期棱堡的几何美学。`} />
                <InfoRow label="建筑风格" value={`主体为典型的中世纪十字军城堡风格，后经威尼斯人加固改造，融入了文艺复兴时期的棱堡防御体系，呈现出独特的混合风格。`} />
                <InfoRow label="文化价值" value={`它不仅是一座军事堡垒，更是一座时间胶囊，其内部的沉船博物馆珍藏着世界上保存最完好的古希腊时期商船遗骸，是研究古代地中海贸易的无价之宝。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡与沉船博物馆开放时间：夏季（4月-10月）通常为上午9:00至下午6:45；冬季（11月-3月）通常为上午9:00至下午4:45。请注意，具体时间可能因年份和当地政策有微调，且斋月期间可能会缩短。港口区域是24小时开放的公共空间，但餐厅和咖啡馆的营业时间一般为上午10点至午夜。`} />
              <InfoRow label="门票价格" value={`进入城堡和沉船博物馆需购票。目前票价约为70土耳其新里拉（价格随汇率浮动，约合7-8欧元）。学生通常有折扣。港口区域、滨海长廊和城堡外围的城墙步道是免费参观的。购票点在城堡入口处，只接受现金（土耳其里拉）支付。`} />
              <InfoRow label="地址" value={`Kyrenia Castle, Girne, Kuzey Kıbrıs Türk Cumhuriyeti （邮编：99300）`} />
              <InfoRow label="交通方式" value={`最近的机场是埃爾詹機場（Ercan Airport，ECN），位于尼科西亚附近。从埃爾詹機場前往凯里尼亚，最便捷的方式是预订私人接送或乘坐出租车，车程约45分钟至1小时。如果从塞浦路斯南部的拉纳卡国际机场（LCA）入境，需要穿越联合国缓冲区（绿线），过程较复杂，建议提前查询最新过境政策并租车或包车，车程约1.5小时。在凯里尼亚城内，港口和城堡位于市中心，所有地方均可轻松步行到达。如果住在稍远的地方，本地有小巴（dolmuş）服务，但班次不固定。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲凯里尼亚城堡的故事，我们不能从石头开始，而要从那艘船开始。大约在公元前300多年，一艘满载着杏仁、陶罐和磨石的希腊商船，正平静地行驶在地中海上。它的目的地可能是这座当时叫“基里尼亚”的繁荣港口。一场突如其来的风暴，或是海盗的袭击，让它在离港口咫尺之遥的地方沉没，连同它未竟的航程和船员的命运，一起被泥沙温柔地封存。直到2300多年后的1965年，一位当地的潜水员偶然发现了它。这艘被命名为“凯里尼亚沉船”的遗迹，因其惊人的完整度轰动了考古界，它像一把钥匙，瞬间打开了通往古希腊世界海上贸易的鲜活窗口。而发现它的城堡，历史则要厚重和血腥得多。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡最初的基石，传说由拜占庭人在7世纪为了抵御阿拉伯海盗的侵扰而筑下。但它真正成型，是在十字军东征的浪潮中。12世纪，拜占庭帝国对塞浦路斯的控制力减弱，一位名叫伊萨克·科穆宁的贵族在这里自立为王。他的统治短暂而动荡，最终被第三次十字军东征的领袖——英格兰的“狮心王”理查一世击败。理查把塞浦路斯卖给了耶路撒冷的圣殿骑士团，城堡也随之易主，开始被大规模加固，奠定了我们今天看到的十字军城堡的基本格局。高耸的方形主塔、厚重的城墙，都是为了那个刀剑与信仰碰撞的时代而建。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，城堡最戏剧性的篇章属于威尼斯共和国。1489年，威尼斯人控制了塞浦路斯，他们以精明的商人眼光审视着凯里尼亚港——这是一个绝佳的贸易和军事据点。面对日益强大的奥斯曼帝国威胁，威尼斯工程师被派来彻底改造这座中世纪城堡。他们削平了旧有的塔楼，沿着海岸线修建了低矮而厚实的棱堡。这种新式的星形堡垒设计，是为了更好地抵御当时开始普及的火炮攻击。你现在看到的城堡那独特的菱形轮廓和面向大海的霸气姿态，正是威尼斯军事工程的杰作。他们试图把这里打造成一个永不沉没的磐石。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但历史总有它的讽刺。1570年，奥斯曼帝国的大军如海啸般席卷塞浦路斯。尼科西亚迅速陷落，但凯里尼亚城堡在威尼斯指挥官路易吉·布拉加丁的坚守下，顶住了长达一年的围攻。最终，在弹尽粮绝、援军无望的情况下，布拉加丁选择了体面的投降。然而，奥斯曼苏丹塞利姆二世背信弃义，对守军和指挥官进行了残忍的处决。这段惨烈的历史，为城堡的石墙又浸染了一层悲壮的色彩。奥斯曼人占领后，城堡继续被用作军事要塞和监狱，并在里面修建了清真寺。从那时起直到20世纪中期，它静静地矗立着，看着港口的风帆变成了蒸汽船，再变成游艇，它自身也从战争机器，慢慢变成了历史的叙述者。而那艘沉睡海底的古船，最终在城堡里找到了永久的归宿，让这座堡垒的故事，从战争与征服，延伸到了更古老、更沉默的关于航行、贸易与人类联结的主题上。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受凯里尼亚的日与夜，我强烈建议你安排一整天的时间。最好的节奏是上午专注于城堡和博物馆的历史沉浸，下午在港口享受慵懒的地中海生活气息，傍晚则留给无与伦比的日落。建议早上9点半左右抵达城堡门口，这时旅行团大军尚未抵达，阳光也还柔和，你能享受一段相对宁静的探索时光。在城堡内部可以慢慢逛上2-3个小时。中午出城堡后，直接在港口找一家看得见风景的餐馆享用午餐。下午的时光可以完全放空，沿着防波堤散步，或者坐在咖啡馆观察来往的人群。整个路线的精髓在于张弛有度，将历史的厚重与假期的闲适完美结合。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡内部石阶多且陡峭，阳光照射强烈，务必穿一双舒适防滑的鞋，并准备好帽子、太阳镜和充足的水。
港口餐厅价格参差，避开那些有“拉客”服务的，选择本地人多的家庭式餐馆，通常价格更实在，海鲜更新鲜。
如果对北塞浦路斯的政治状态敏感，避免与当地人讨论相关话题，保持尊重与礼貌，这里的人们非常友好热情。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从港口南侧的滨海长廊开始散步，看着阳光慢慢把对面城堡的轮廓染成金色，渔民正从小船上卸下银光闪闪的渔获。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`买票进入城堡后，先别急着上楼，径直去往底层的沉船博物馆，在几乎无人的展厅里独自面对那艘穿越了二十四世纪时光的古船骨架。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着城堡内部曲折的石阶向上探索，用手触摸那些被无数代士兵、囚徒和游客磨得光滑的墙壁，在瞭望孔里窥见一片湛蓝的、被城墙框住的地中海。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要爬上城堡西端的威尼斯棱堡最高处，360度环绕一圈，将整个马蹄形港口、背后苍茫的凯里尼亚山脉和远方的海平线尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡出来，带着历史的感慨，在港口边挑选一家有露天座位的家庭餐馆，点一份烤章鱼和当地沙拉，让味蕾也融入这片海。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后最热的时候，躲进一家有荫凉的老字号冰淇淋店，尝尝独特的乳香糖口味，然后随便找一张面对游艇码头的长椅，无所事事地看船进船出。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当太阳开始西斜，沿着北侧的防波堤一直走到尽头的老灯塔，这里是看城堡全景和日落的最佳位置，看着夕阳把城堡和整个港湾点燃。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落后别急着离开，等待港口的灯光一盏盏亮起，城堡被灯光打亮，找一家水边的酒吧，听着现场音乐，用一杯当地的“拉克”酒或冰啤酒结束完美的一天。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`防波堤尽头的老灯塔旁`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，用长焦镜头压缩空间，将古老的灯塔、城堡的剪影与辉煌的日落霞光一同纳入画面，海面会变成金色和紫色的绸缎。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`沉船博物馆展厅入口内侧`}</h4>
                  <p className="text-sm text-gray-700">{`利用展厅入口作为画框，聚焦内部被精心照亮的沉船遗骸，构图上让古老的石拱门与更古老的船体形成双重时间层次感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城堡西侧威尼斯棱堡的炮口处`}</h4>
                  <p className="text-sm text-gray-700">{`上午侧光时分，将相机镜头贴近冰冷的铸铁炮身，透过炮口向外拍摄，形成一个完美的圆形取景框，框住外面蔚蓝的海港和彩色小船。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`港口北侧的小片碎石滩`}</h4>
                  <p className="text-sm text-gray-700">{`清晨顺光时，蹲低机位，以水面为前景拍摄城堡在水中的倒影，让城堡的雄伟与水的柔静形成对比，画面干净而富有张力。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城堡顶部西南角的垛口`}</h4>
                  <p className="text-sm text-gray-700">{`下午晚些时候，光线变得金黄柔和，从这里可以俯拍港口蜿蜒的防波堤和密集的游艇桅杆，呈现出港口充满生活气息的几何美感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在沉船博物馆内，务必遵守规定，禁止使用闪光灯，微弱的环境光下建议使用大光圈镜头和高感光度相机，以保护珍贵的文物。`}</li>
                <li>• {`拍摄当地人，尤其是年长的渔民或店主时，请先报以微笑并征得对方同意，一个友好的手势就能打开沟通的大门。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`港口核心区之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住一栋由奥斯曼时期老宅改造的石砌精品酒店，房间有手工雕刻的木制天花板和对着内庭的小阳台，夜晚能听到从港口隐约传来的音乐声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`山景与海景兼顾`}</h4>
                  <p className="text-sm text-green-800">{`选择坐落在城堡后方山坡上的家庭式公寓，主人会为你准备丰盛的早餐篮，在私人露台上可以同时俯瞰城堡全貌和远处的群山，享受宁静。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端沉浸体验`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻港口最前端的历史建筑酒店，部分房间拥有直接伸向海面的露台，仿佛住在船上，清晨在枕边海浪声中醒来，与城堡隔水相望。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`背包客社交之选`}</h4>
                  <p className="text-sm text-purple-800">{`位于老城小巷里的友好青年旅舍，由一个热情的本地家庭经营，公共天台是夜晚结识各国旅伴、分享故事并远眺城堡灯火的绝佳地点。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`旺季（6月至9月）港口边的住宿非常紧俏且价格高昂，提前数月预订是明智之举；如果想获得更本地化的体验，可以考虑住在老城小巷里，步行到港口也只需5-10分钟。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`凯里尼亚总体治安良好，但老城部分小巷夜间照明较暗，建议选择离主路较近的住宿，或者夜晚结伴同行。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开凯里尼亚许久，我发现自己最常回忆起的，不是某个具体的画面，而是一种感觉。那是历史与当下在此地奇妙的共生感。你脚下踩着威尼斯人砌的石头，眼里看着奥斯曼时期留下的清真寺穹顶，手里触摸着古希腊沉船的玻璃展柜，而窗外，21世纪的游艇正拉响汽笛，准备出海。时光在这里不是一条直线，而是一个漩涡，所有层次都和谐地重叠在这个小小的港湾里。城堡不再是冰冷的防御工事，因为那艘沉船的入住，它变成了一位慈祥的守护者，守护着一段更古老、更关乎普通人的记忆——关于一次出航，一次贸易，一次未归的远行。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个快节奏、追求崭新体验的世界里，凯里尼亚提醒着我们另一种深度。它告诉你，真正的魅力往往在于层叠的痕迹。战争与和平，征服与贸易，宏伟叙事与日常生活，都在这里留下了自己的印记，却没有彼此覆盖。每一位热爱深度游的旅人都应该来这里，不仅仅是为了看一座城堡或一艘古船，更是为了体验这种时间的密度。你会坐在防波堤上，看着落日把千年的石头染红，突然明白，旅途中最珍贵的，正是这些让历史变得可触摸、可呼吸、可与一杯傍晚的咖啡共饮的时刻。凯里尼亚，就是这样一个让人学会与时间温柔相处的角落。`}</p>
            </div>
          </Section>

        </div>
      </div>
    </div>
  )
}
