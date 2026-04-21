import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '伊佐拉 Izola｜亚得里亚海畔被时光遗忘的岛屿渔镇，漫步威尼斯风情的狭窄巷弄与飘着海盐味的码头 - 最佳欧洲景点',
  description: '第一眼看到伊佐拉，你会觉得它不像一个景点，而像一位在午后阳光下打盹儿的老人。阳光把海面切成无数片碎金，毫不客气地泼洒在那些蜜糖色、赭石色的墙壁上。空气里的味道是分层的：最上层是干净的、带点咸腥的海风；往下走，是码头边咖啡馆飘出的浓缩咖啡的焦香；再深入那些窄得几乎只能容一人通过的巷子（他们叫它“cal',
}

export default function IzolaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '斯洛文尼亚', href: '/destinations/europe' },
            { label: '伊佐拉', href: '/destinations/europe' },
            { label: '伊佐拉', href: '/attractions/izola-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`伊佐拉・Izola・斯洛文尼亚・伊佐拉`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到伊佐拉，你会觉得它不像一个景点，而像一位在午后阳光下打盹儿的老人。阳光把海面切成无数片碎金，毫不客气地泼洒在那些蜜糖色、赭石色的墙壁上。空气里的味道是分层的：最上层是干净的、带点咸腥的海风；往下走，是码头边咖啡馆飘出的浓缩咖啡的焦香；再深入那些窄得几乎只能容一人通过的巷子（他们叫它“calle”，典型的威尼斯遗风），你会闻到老石头被太阳烘烤后散发的微暖气息，以及某户人家窗口飘出的炖鱼香味。这里没有匆忙的脚步声，只有海浪慵懒拍打防波堤的“哗——哗——”声，和远处教堂钟声穿过屋顶传来的悠长回响。
它最打动人心的，是一种“仍在生活”的真实感。清晨六点，曼德里亚克防波堤尽头已经热闹起来。穿着胶靴的渔夫们从漆成天蓝色的“巴萨”船上卸下一箱箱闪着银光的沙丁鱼，他们的交谈声短促而低沉，夹杂着铁钩碰撞的清脆声响。渔网像巨大的蕾丝窗帘一样铺展开来，在石地上进行修补和晾晒，空气里弥漫着海草和湿绳索的味道。你站在一旁，不会觉得自己是闯入者，反而像是被允许参观一个古老而有序的仪式。到了傍晚，渔民收工，游客散去，本地人接管了海滨长廊。孩子们踩着滑板车呼啸而过，老友们聚在长椅上，就着一瓶本地产的“雷弗斯科”红酒看日落，语速缓慢，笑声爽朗。你会发现，那些挂着“鱼贩”招牌的小店，早上真的在卖鱼；那些停满游艇的码头边上，依然系着用于日常捕鱼的木质小船。
走在迷宫般的巷弄里，你的肩膀常常会擦过两旁粗糙的石墙。抬起头，视线被悬挂在阳台外的衣物、花盆和晾晒的床单切割成一条条天空。这里的建筑并不宏伟，却充满细节：一扇褪色的绿色百叶窗，一个雕刻着海豚或船锚的石头门楣，一段铁艺的阳台栏杆早已锈出斑驳的图案。偶尔，你会撞见一座小小的广场，可能只比你家客厅大一点，中央有一口老井，旁边摆着两张咖啡桌，这就是社区的客厅。这种尺度让人安心，仿佛整个小镇是一个放大版的、可以居住的模型。
它的核心魅力，就在于这种“岛屿心态”的延续——即使地理上已与大陆相连，精神上仍保有一份自给自足的宁静和内向。这里没有庞大的旅游巴士，没有喧闹的纪念品连锁店。时间仿佛被海风腌渍过，变得绵长而富有弹性。你可以花一整个下午，看一位老匠人在港口边慢慢地为一艘小船刷上新漆，每一笔都从容不迫。这种专注于当下、与海洋节律同频的生活哲学，才是伊佐拉赠予旅人最珍贵的礼物。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一眼看到伊佐拉，你会觉得它不像一个景点，而像一位在午后阳光下打盹儿的老人。阳光把海面切成无数片碎金，毫不客气地泼洒在那些蜜糖色、赭石色的墙壁上。空气里的味道是分层的：最上层是干净的、带点咸腥的海风；往下走，是码头边咖啡馆飘出的浓缩咖啡的焦香；再深入那些窄得几乎只能容一人通过的巷子（他们叫它“calle”，典型的威尼斯遗风），你会闻到老石头被太阳烘烤后散发的微暖气息，以及某户人家窗口飘出的炖鱼香味。这里没有匆忙的脚步声，只有海浪慵懒拍打防波堤的“哗——哗——”声，和远处教堂钟声穿过屋顶传来的悠长回响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它最打动人心的，是一种“仍在生活”的真实感。清晨六点，曼德里亚克防波堤尽头已经热闹起来。穿着胶靴的渔夫们从漆成天蓝色的“巴萨”船上卸下一箱箱闪着银光的沙丁鱼，他们的交谈声短促而低沉，夹杂着铁钩碰撞的清脆声响。渔网像巨大的蕾丝窗帘一样铺展开来，在石地上进行修补和晾晒，空气里弥漫着海草和湿绳索的味道。你站在一旁，不会觉得自己是闯入者，反而像是被允许参观一个古老而有序的仪式。到了傍晚，渔民收工，游客散去，本地人接管了海滨长廊。孩子们踩着滑板车呼啸而过，老友们聚在长椅上，就着一瓶本地产的“雷弗斯科”红酒看日落，语速缓慢，笑声爽朗。你会发现，那些挂着“鱼贩”招牌的小店，早上真的在卖鱼；那些停满游艇的码头边上，依然系着用于日常捕鱼的木质小船。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走在迷宫般的巷弄里，你的肩膀常常会擦过两旁粗糙的石墙。抬起头，视线被悬挂在阳台外的衣物、花盆和晾晒的床单切割成一条条天空。这里的建筑并不宏伟，却充满细节：一扇褪色的绿色百叶窗，一个雕刻着海豚或船锚的石头门楣，一段铁艺的阳台栏杆早已锈出斑驳的图案。偶尔，你会撞见一座小小的广场，可能只比你家客厅大一点，中央有一口老井，旁边摆着两张咖啡桌，这就是社区的客厅。这种尺度让人安心，仿佛整个小镇是一个放大版的、可以居住的模型。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的核心魅力，就在于这种“岛屿心态”的延续——即使地理上已与大陆相连，精神上仍保有一份自给自足的宁静和内向。这里没有庞大的旅游巴士，没有喧闹的纪念品连锁店。时间仿佛被海风腌渍过，变得绵长而富有弹性。你可以花一整个下午，看一位老匠人在港口边慢慢地为一艘小船刷上新漆，每一笔都从容不迫。这种专注于当下、与海洋节律同频的生活哲学，才是伊佐拉赠予旅人最珍贵的礼物。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`伊佐拉`} />
                <InfoRow label="英文名称" value={`Izola`} />
                <InfoRow label="正式名称" value={`Izola`} />
                <InfoRow label="国家" value={`斯洛文尼亚`} />
                <InfoRow label="城市" value={`伊佐拉`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座从亚得里亚海中生长出的岛屿，历经威尼斯共和国数百年的雕琢，最终以填海的方式与大陆相连，成为守护斯洛文尼亚海岸传统渔港文化的活化石。`} />
                <InfoRow label="建筑特色" value={`紧密排列的暖色调石屋、高耸的威尼斯风格塔楼、晾晒在阳光下的彩色渔网、以及停泊着木质“巴萨”渔船的小小港湾共同构成了一幅立体而生动的渔镇画卷。`} />
                <InfoRow label="建筑风格" value={`威尼斯哥特式与文艺复兴风格在民用建筑上留下深刻烙印，混合着简单的本地巴洛克装饰和朴素的渔村实用主义结构。`} />
                <InfoRow label="文化价值" value={`这里是现代斯洛文尼亚海滨旅游业中一个难得的“非标本”存在，真实延续着捕鱼、晒网、修船的生活节奏，是亚得里亚海东北岸传统渔业社区文化的最后守望地之一。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城区全天开放，露天博物馆般的存在。主要历史建筑（如曼加尔特宫、市政厅）内部开放时间通常为周一至周五 9:00-17:00，周六 10:00-13:00，周日及主要节假日关闭。圣母升天教堂开放时间较为灵活，一般为每日 7:00-19:00。渔港码头区始终热闹，但深夜后归于宁静。建议出行前查看当地旅游信息中心公告，夏季（6-9月）部分文化活动可能延长开放。`} />
              <InfoRow label="门票价格" value={`进入伊佐拉老城镇本身完全免费，这是其迷人之处。参观个别历史建筑（如曼加尔特宫内的文化展览或临时艺术展）可能需要支付小额门票，通常在3-7欧元之间。港口乘船出海观光或前往附近海岛费用另计，短途游船约15-25欧元。镇上大部分教堂免费进入，但欢迎捐赠以维护古迹。`} />
              <InfoRow label="地址" value={`Ulica 9. avgusta 2, 6310 Izola, Slovenia`} />
              <InfoRow label="交通方式" value={`最近的国际机场是约60公里外的的里雅斯特机场（意大利）或80公里外的卢布尔雅那机场。最便捷的方式是先抵达斯洛文尼亚海滨重镇科佩尔，从科佩尔出发，乘坐本地巴士（Nomago或Arriva公司）前往伊佐拉仅需15-20分钟，班次频繁（高峰时段每15-20分钟一班），票价约1.5-2欧元，可直接上车向司机购买。自驾的话，沿着斯洛文尼亚海岸公路（E63）行驶，从科佩尔到伊佐拉有清晰路标，仅10分钟车程。若乘坐火车，可先到科佩尔火车站，再转乘上述巴士或出租车（约15欧元）。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "伊佐拉的故事，始于海中央的一小块岩石。早在罗马时期，这片海域就已有人捕鱼为生，但真正的定居点要等到动荡的中世纪。当时，大陆海岸常受海盗袭扰，渔民们便看中了离岸不远的一座小岛——它的名字“Izola”就源于拉丁语“Insula”，意为“岛屿”。在岛上，他们只需守住有限的入口，便能安居乐业。最初的社区简陋而坚固，一切以生存为中心。你可以想象，在星光照耀的夜晚，岛上的点点灯火倒映在黑丝绒般的海面上，如同一个孤独而倔强的星座。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "命运的转折发生在13世纪，强大的威尼斯共和国将其目光投向了伊斯特拉半岛。对于这个以海洋为命脉的帝国而言，伊佐拉这样的天然良港是不可多得的前哨。威尼斯人来了，带来了他们的法律、建筑审美和商业网络。他们将伊佐拉纳入了亚得里亚海贸易版图，橄榄油、葡萄酒、盐和——最重要的——鱼，从这里运往威尼斯。小镇的格局被重新规划：窄巷是为了遮荫和防御，中心广场用于集会和贸易，临海的建筑则建起坚固的墙壁以抵御风暴和可能的攻击。那些我们今天看到的、带有精美双联窗和石雕装饰的贵族宫殿（如曼加尔特宫），正是那个繁荣时期的产物。威尼斯统治下的伊佐拉，虽受管辖，却也欣欣向荣，成为了一个微缩版的威尼斯。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，帝国的太阳总会落下。随着威尼斯共和国的衰落，伊佐拉像一片落叶，在历史的洪流中飘荡。它先后被奥匈帝国、意大利统治，二战后又成为南斯拉夫的一部分。这些变迁在建筑和街巷上留下了层层叠叠的印记，就像一本被不同语言书写过的书。但无论统治者是谁，岛上的居民始终是那些渔民和他们的后代，大海是他们永恒的主宰。一个决定性的变化发生在19世纪：由于空间有限，岛屿发展受阻，人们开始填海，用碎石和泥土建造一道连接大陆的堤坝。起初只是为了方便，但渐渐地，堤坝越来越宽，最终，岛屿成了半岛。这个地理上的巨变，象征了伊佐拉从封闭走向开放，从纯粹的渔村转向与更广阔世界连接的社区。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "二战后，尤其是斯洛文尼亚独立后，整个海岸线迎来了旅游热潮。隔壁的皮兰因是作曲家塔尔蒂尼的故乡而声名大噪，科佩尔则发展为繁忙的商业港口。夹在两者之间的伊佐拉，面临着一个选择：是彻底改头换面迎合游客，还是坚守本色？小镇选择了中间道路——或许更偏向于后者。它没有大肆兴建豪华酒店，而是将老房子改造成亲切的家庭旅馆；没有把渔船全部换成观光船，而是保留了大部分渔业活动；没有将码头完全让给游艇，而是为本地渔民留下了最核心的泊位。今天，当你看到现代游艇旁边并排停靠着饱经风霜的木质渔船，当你在米其林推荐餐厅吃到最新鲜的、可能是当天早上才捕到的鱼时，你会明白，伊佐拉成功地在时代的浪潮中，守护了自己那颗作为“岛屿”和“渔镇”的初心。它的历史不是封存在博物馆玻璃柜里的，而是活在海风里、渔网的经纬间、以及每一块被海水气息浸润的石头中。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味伊佐拉，请务必给自己留出一整天的时间。最佳的抵达时间是清晨八点左右，这时阳光温柔，渔港刚刚苏醒，游客尚未涌入。整体节奏应该是“慢”。上午用来探索老城迷宫般的内核和感受渔港的活力，中午享用一顿漫长的海鲜午餐，下午则可以沿着海岸线散步，或深入防波堤和宁静的居民区，傍晚时分留给日落和海滨的悠闲时光。这样安排能让你经历小镇从早到晚的光影变化和活动节奏，从劳动者的忙碌切换到度假者的慵懒，完整地感受它的双重脉搏。全程步行即可，穿一双舒适且能应对石板路的鞋子是唯一需要做的准备。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`绝对不要试图在狭窄的主巷中疾走或撑开大伞，这不仅不礼貌，也让你无法融入当地缓慢的节奏。避开周六上午，这时本地家庭会涌入老城市场，虽然充满生活气息但异常拥挤。夏季正午阳光炽烈，尽量安排室内活动（如参观小博物馆或享受长午餐），将户外探索留给清晨和傍晚。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨先从主广场（Trg Mandrač）出发，站在那口古老的石井旁，看阳光刚刚照亮圣莫里斯教堂的钟楼塔尖，感受小镇在咖啡香气中缓缓睁开睡眼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过广场东侧不起眼的拱门，瞬间跌入“卡尔佩利亚巷”的狭窄世界，用指尖触摸两侧冰凉而粗糙的石墙，抬头寻找那些悬挂在头顶的褪色招牌和盛开的天空葵。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`让巷子自然地将你引向海滨长廊，在“渔网墙”前停下，看彩色的渔网在晨光中如同巨大的抽象艺术装置，背后是湛蓝的海水和摇晃的船桅。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着长廊向北慢行至曼德里亚克防波堤的尽头，观察渔民们结束晨捕归来的场景，聆听他们用斯洛文尼亚语夹杂着意大利语的交谈，空气里弥漫着浓烈的海产气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`折返并深入老城腹地，在迷宫般的巷道里“迷失”，不经意间发现藏匿于庭院中的小教堂、爬满葡萄藤的静谧角落，以及某扇半掩的门后传来的家常对话声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`攀上圣莫里斯教堂旁的观景平台，在正午阳光最烈时俯瞰整个红瓦屋顶的海洋、远处的大陆轮廓，以及如蓝色绸带般环绕的亚得里亚海。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选择一家港口边有着露天座位的“gostilna”（传统小餐馆），用一顿用时两小时的海鲜午餐犒劳自己，必点一份用本地橄榄油和香草烹饪的“伊斯特拉炖鱼”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午餐后沿着海岸线向南漫步，经过游艇码头，走向更生活化的“西蒙斯基”区，这里的海滩是本地家庭的乐园，节奏更加缓慢而真实。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 9 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前一刻，回到曼德里亚克防波堤或找一处海边的岩石坐下，静静看着夕阳将天空、海面和老城的墙壁染成金红，直到第一盏路灯在巷口亮起。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`曼德里亚克防波堤中段侧拍`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，站在防波堤一侧，以另一侧古老的石屋、系缆桩和停泊的渔船为前景，将暖金色的夕阳和波光粼粼的海面作为背景，捕捉归港船只的剪影。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣莫里斯教堂钟楼下的屋顶海洋`}</h4>
                  <p className="text-sm text-gray-700">{`登上教堂旁的观景平台，使用中长焦镜头压缩视线，在上午十点或下午四点光线侧射时，拍摄层层叠叠、铺满红色瓦片的屋顶波浪，一直延伸到湛蓝的海平面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“渔网墙”特写与光影`}</h4>
                  <p className="text-sm text-gray-700">{`清晨八点到九点之间，阳光以较低角度照射在港口边悬挂的彩色渔网上，走近拍摄特写，聚焦于渔网粗粝的纹理和透过网孔形成的独特光影图案，背景可虚化为朦胧的海港。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`卡尔佩利亚巷的纵深感`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射入窄巷时，站在巷口向内拍摄，利用两侧高耸的石墙形成天然的画框，捕捉巷道尽头那一抹明亮的海蓝色，以及可能恰好经过的行人模糊身影。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`西蒙斯基海滩的本地生活`}</h4>
                  <p className="text-sm text-gray-700">{`下午晚些时候，前往小镇南端的海滩，用长焦镜头远摄本地家庭游泳、孩童嬉戏、老人阅读的场景，以平静的海面和传统石屋为背景，捕捉未经修饰的日常瞬间。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重当地人的隐私，拍摄居民、特别是渔民劳作时，尽量保持距离或先微笑示意。使用偏振镜可以有效消除海面和石墙的反光，让色彩更饱和。尝试拍摄一些动态模糊的照片，如摇曳的船桅、飘扬的衣物，能更好地传达小镇悠闲的动感。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`港口边的老石屋民宿`}</h4>
                  <p className="text-sm text-blue-800">{`直接坐落于曼德里亚克港旁，由渔民旧居改造，房间保留了原始的石拱顶和木梁，清晨开窗就能看到渔船出港，夜晚在阳台上聆听轻柔的海浪声入睡。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`藏在巷弄深处的设计公寓`}</h4>
                  <p className="text-sm text-green-800">{`位于老城最静谧的卡尔佩利亚巷区域，房东是本地艺术家，公寓内部是极简的斯堪的纳维亚风，却透过古老的百叶窗俯瞰着内庭院的绿意，完美融合古今。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`家庭经营的“潘松”旅馆`}</h4>
                  <p className="text-sm text-yellow-800">{`由世代居住于此的家庭运营，房间朴实无华但一尘不染，老板娘会为你准备丰盛的自制早餐，包括她亲手腌制的鱼和果酱，并提供只有本地人才知道的小众散步路线。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`坐落在宁静西蒙斯基区的海滨酒店`}</h4>
                  <p className="text-sm text-purple-800">{`距离老城中心步行十分钟，享有更开阔的海景和私人海滩区域，氛围安静，适合家庭或寻求彻底放松的旅人，清晨可直接从酒店花园步入海中游泳。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（7-8月）务必提前数月预订，尤其是老城内的特色住宿极为抢手。选择住在老城内虽然可能楼梯陡峭、空间紧凑，但能获得无可替代的沉浸式体验。西蒙斯基区更为安静且停车相对方便，适合自驾旅客。无论住在哪里，夜晚的老城都非常安全，可以放心散步。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开伊佐拉许久后，印象最深的不是某个具体的建筑或风景，而是一种整体的“感觉”。那种感觉混合了石板路被晒暖后的温度，海风穿过巷子时的呜咽声，以及当地人脸上那种不慌不忙的神情。在这个效率至上的时代，伊佐拉像是一个温柔的悖论。它不追求宏大，不标榜奢华，只是日复一日地，在潮起潮落间，过着一种有根有据的生活。这里的价值，不在于“看到”了什么惊天动地的东西，而在于你“体验”到了一种正在消失的生活节奏和社区联结。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，每一位热爱深度游的旅人都该来一次伊佐拉，尤其当你对过度商业化、千篇一律的旅游目的地感到厌倦时。来这里，不是为了打卡，而是为了被“重置”。你会重新学会如何浪费一个下午——在无所事事中变得丰盈。你会理解，所谓“风景”，不仅仅是眼睛看到的画面，更是皮肤感受到的海风，舌尖尝到的海盐味，和心灵捕捉到的那份宁静。伊佐拉是一个提醒：在我们疯狂追逐远方的壮丽时，有时，最深度的旅行，恰恰是走入一个平凡小镇的日常肌理，并在其中，找到了自己内心久违的、从容的节拍。这片曾与世隔绝的岛屿，最终教会我们的，是如何与自己的内心和平共处。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/novo-mesto-slovenia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    诺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">诺沃梅斯托</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Novo Mesto</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kranj-historic-town-underground-tunnels" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克拉尼</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kranj</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ptuj-castle-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普图伊城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ptuj Castle</p>
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
