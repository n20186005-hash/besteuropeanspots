import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '林道老城区 Lindau Old Town｜博登湖上的明珠，穿越千年时光的湖岛老城 - 最佳欧洲景点',
  description: '你第一眼见到林道老城，大概率是从船上，或者从连接大陆的那条细长堤道上。它就像一枚被不小心遗落在巨大蓝丝绒盘子——博登湖上的彩色宝石，远远地，安静地，却又闪闪发光。当船缓缓靠岸，首先迎接你的是混合着水藻清甜与岸边咖啡馆烘焙香气的湖风，耳边是鸥鸟的鸣叫和缆绳碰撞码头的沉闷响声。然后，那两座著名的地标才清...',
}

export default function LindauOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '林道老城区', href: '/attractions/lindau-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`林道老城区・Lindau Old Town・德国・林道`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼见到林道老城，大概率是从船上，或者从连接大陆的那条细长堤道上。它就像一枚被不小心遗落在巨大蓝丝绒盘子——博登湖上的彩色宝石，远远地，安静地，却又闪闪发光。当船缓缓靠岸，首先迎接你的是混合着水藻清甜与岸边咖啡馆烘焙香气的湖风，耳边是鸥鸟的鸣叫和缆绳碰撞码头的沉闷响声。然后，那两座著名的地标才清晰地映入眼帘：高大的、白红相间的新灯塔，以及它前方那座神情略带忧郁、却坚定望向阿尔卑斯山方向的石狮子。这个港口入口，仿佛是通往另一个时空的奇幻之门。
踏上岛屿，脚下的感觉立刻不同了。汽车声被隔绝在外，取而代之的是石板路被行李箱轮子或鞋跟叩响的清脆哒哒声。小巷窄得可爱，两边的房子争先恐后地向你展示它们的年纪和美貌。鹅黄色的外墙，朱红色的窗棂，描绘着圣经故事或商船图案的鲜艳壁画爬满了山墙，阳台上垂下瀑布般的天竺葵，红得像要燃烧起来。你忍不住会想，住在这样房子里的人，每天推开窗就是碧波万顷和雪山轮廓，该是一种怎样的心情？答案就在街上。你不难看到头发银白的老夫妇，慢悠悠地牵着狗，在面包店前用当地方言闲聊；骑自行车的学生从你身边灵巧地穿过，车铃叮叮当当；咖啡馆露天座永远是满的，人们似乎有大把时间，只为了一杯咖啡和一片湖光。
这里最打动人心的，是一种奇妙的“悬浮感”。你明明身处一个充满历史厚重感的千年古镇，每一块石头都可能藏着故事，但环绕四周的却是无比开阔、流动而现代的自然景观——博登湖的浩渺烟波，和对岸瑞士与奥地利境内阿尔卑斯山的连绵雪线。历史被湖水温柔地包裹着，既不封闭，也不张扬。你能在中世纪城门下闻到鱼餐厅里飘出的油炸白鱼的香气，能在古老的市政厅广场听到街头艺人演奏的爵士乐。这种时空交错却不违和的融洽，让林道老城不像一个冰冷的博物馆，而是一个依然在从容呼吸、带着体温的活生生的家园。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你第一眼见到林道老城，大概率是从船上，或者从连接大陆的那条细长堤道上。它就像一枚被不小心遗落在巨大蓝丝绒盘子——博登湖上的彩色宝石，远远地，安静地，却又闪闪发光。当船缓缓靠岸，首先迎接你的是混合着水藻清甜与岸边咖啡馆烘焙香气的湖风，耳边是鸥鸟的鸣叫和缆绳碰撞码头的沉闷响声。然后，那两座著名的地标才清晰地映入眼帘：高大的、白红相间的新灯塔，以及它前方那座神情略带忧郁、却坚定望向阿尔卑斯山方向的石狮子。这个港口入口，仿佛是通往另一个时空的奇幻之门。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`踏上岛屿，脚下的感觉立刻不同了。汽车声被隔绝在外，取而代之的是石板路被行李箱轮子或鞋跟叩响的清脆哒哒声。小巷窄得可爱，两边的房子争先恐后地向你展示它们的年纪和美貌。鹅黄色的外墙，朱红色的窗棂，描绘着圣经故事或商船图案的鲜艳壁画爬满了山墙，阳台上垂下瀑布般的天竺葵，红得像要燃烧起来。你忍不住会想，住在这样房子里的人，每天推开窗就是碧波万顷和雪山轮廓，该是一种怎样的心情？答案就在街上。你不难看到头发银白的老夫妇，慢悠悠地牵着狗，在面包店前用当地方言闲聊；骑自行车的学生从你身边灵巧地穿过，车铃叮叮当当；咖啡馆露天座永远是满的，人们似乎有大把时间，只为了一杯咖啡和一片湖光。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里最打动人心的，是一种奇妙的“悬浮感”。你明明身处一个充满历史厚重感的千年古镇，每一块石头都可能藏着故事，但环绕四周的却是无比开阔、流动而现代的自然景观——博登湖的浩渺烟波，和对岸瑞士与奥地利境内阿尔卑斯山的连绵雪线。历史被湖水温柔地包裹着，既不封闭，也不张扬。你能在中世纪城门下闻到鱼餐厅里飘出的油炸白鱼的香气，能在古老的市政厅广场听到街头艺人演奏的爵士乐。这种时空交错却不违和的融洽，让林道老城不像一个冰冷的博物馆，而是一个依然在从容呼吸、带着体温的活生生的家园。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`林道老城区`} />
                <InfoRow label="英文名称" value={`Lindau Old Town`} />
                <InfoRow label="正式名称" value={`Lindau Old Town`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`林道`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`博登湖地区保存最完好的中世纪湖岛城镇之一，曾是神圣罗马帝国重要的帝国自由城市和汉萨同盟成员。`} />
                <InfoRow label="建筑特色" value={`完整体现了从哥特式到文艺复兴、巴洛克及青年风格派的建筑演变，尤以色彩明快、壁画鲜艳的阶梯山墙民居和雄伟的港口标志性建筑群著称。`} />
                <InfoRow label="建筑风格" value={`南德博登湖地区特有的色彩明快、装饰丰富的混合风格，深受南德、瑞士及意大利北部建筑影响。`} />
                <InfoRow label="文化价值" value={`德国“湖畔慢生活”哲学与千年商贸活力的生动结合，是阿尔卑斯山麓与碧波之间独特人文地理的缩影。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城区为开放区域，全天可进入。区内主要建筑如新灯塔（Mangturm）和狮子像可全天观赏。登顶老灯塔（Neuer Leuchtturm）参观内部及眺望台的开放时间为每年4月至10月，每日10:00-19:00；11月至次年3月通常关闭维护。市政厅建筑外部可随时参观，内部仅在特定展览或活动日开放。各博物馆（市立博物馆、海港博物馆等）开放时间不一，通常为周二至周日10:00-17:00，周一闭馆，冬季可能缩短开放时间。具体开放日期建议行前查阅官网，因天气和节假日可能临时调整。`} />
              <InfoRow label="门票价格" value={`进入林道老城区本身免费。登顶老灯塔（Neuer Leuchtturm）需购票，成人约3欧元，优惠票约1.5欧元。参观市立博物馆（Stadtmuseum）成人票约5欧元。其他小型展览或教堂塔楼可能有单独小额门票（1-3欧元）。博登湖游船票价为浮动制，根据航线长短从8欧元至30欧元不等，有日票可选。6岁以下儿童通常免费，学生、团体享有折扣。`} />
              <InfoRow label="地址" value={`Lindau Island, 88131 Lindau (Bodensee), Germany`} />
              <InfoRow label="交通方式" value={`从最近的大型国际机场出发：1. 慕尼黑机场（MUC）：最便捷的选择。在机场火车站乘坐直达IC或ICE列车前往林道总站（Lindau Hbf），车程约2.5-3小时，每小时至少一班。火车最终会驶上堤道，直接抵达与老城区一桥之隔的主岛火车站，体验奇妙。2. 苏黎世机场（ZRH）：也可选择，车程约1.5-2小时，需在罗曼斯霍恩（Romanshorn）或圣加仑（St. Gallen）等地中转一次。从林道主岛火车站出站后，步行过桥（约5-10分钟）即进入老城区核心。若自驾，车辆只能停在岛外的几个大型停车场（如"P1 Inselhalle"），然后步行或乘坐短途巴士上岛。强烈建议体验一次博登湖游船，从邻近的腓特烈港（Friedrichshafen）、布雷根茨（Bregenz）或康斯坦茨（Konstanz）乘船抵达林道港口，从湖上欣赏老城全貌是最佳的登场方式。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`林道的故事始于罗马帝国后期，但真正让它登上历史舞台的，是公元9世纪。当时，这里只是湖中一个荒芜的小岛，是渔民和隐修僧侣躲避大陆战乱的天然避难所。岛上建起了本笃会修道院，慢慢吸引了寻求保护的居民，一个聚落围绕修道院悄然生长。它的命运转折点在13世纪，通过一纸神圣罗马帝国皇帝颁发的特许状，林道成为了“帝国自由城市”。这意味着它直接效忠于皇帝，而不是任何地方公爵或主教，拥有了自治权、司法权和至关重要的——免税进行贸易的权利。这颗湖中的种子，开始迸发出惊人的商业活力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`整个中世纪鼎盛时期，林道就像博登湖上的一只精明蜘蛛，编织起一张连接南北欧的贸易网。它的船只满载着来自意大利的丝绸、香料，来自北方的毛皮、琥珀，在湖上穿梭，并通过陆路转运至奥格斯堡、慕尼黑等地。15世纪，它加入了强大的汉萨同盟，财富与地位达到顶峰。今天老城里那些最华丽、带有精美阶梯式山墙的商人宅邸，比如“Haus zum Cavazzen”，就是那个黄金时代的无声宣言。当时的市政厅外墙，也被绘上了巨幅壁画，不仅为了美观，更是为了向四方商旅和使节炫耀城市的富庶与威严。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，湖水的庇佑并不能完全隔绝陆地上的风云。十七世纪的三十年战争给林道带来了重创，瑞典军队一度占领了这里。战后，它的政治地位也发生了动摇。但林道人似乎总有一种湖民特有的韧性。十八、十九世纪，当它的政治光环逐渐褪去，它却意外地迎来了另一种繁荣——作为风景疗养地的兴起。阿尔卑斯山和博登湖的湖光山色吸引了欧洲的贵族和文艺界名流，歌德、莫扎特都曾在此驻足。为了让贵宾们留下深刻的第一印象，林道决定打造一个无与伦比的“门面”。于是，在1856年，那座如今成为象征的港口工程竣工了：6米高的巴伐利亚石狮（象征着当时已统治此地的巴伐利亚王国）和33米高的新灯塔（当时是德国南部第一座灯塔）相对而立，守卫着港口。这只狮子面朝奥地利，仿佛在平静地宣示主权，又像在默默守望故乡。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`近代，铁路和公路桥的修建，结束了林道岛屿与世隔绝的状态。二战中，它幸运地逃过了大规模轰炸，使得中世纪的城镇肌理得以完整保存。如今，它不再需要凭借军事或商业力量来证明自己。它的存在本身，就是一部镌刻在石头和湖水里的编年史。从修道院的虔敬，到商人的精明，从帝国城市的骄傲，到疗养胜地的闲适，层层叠叠的时代印记，都被完好地封存在这不到一平方公里的岛屿上，等待着每一位放慢脚步的旅人来细细阅读。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正品味林道老城，建议安排整整一天时间。最佳的抵达时间是清晨，趁着一日游的旅行团尚未涌入，阳光刚刚洒满港口，给石狮子和灯塔镀上金边。整体游览节奏应是“慢”字当头，从外围的湖光山色逐步深入到小巷的生活肌理。建议路线：先从港口地标开始，建立整体印象，然后顺时针沿着湖岸漫步，感受它的开阔，再钻入迷宫般的中心小巷，探寻历史的细节，最后在傍晚时分回到湖边，欣赏日落与华灯初上的双重美景。这样由外至内、再由内至外的循环，能让你充分体会林道“一半湖水，一半历史”的独特魅力。记得穿一双绝对舒适的鞋，因为石板路虽然美丽，但对脚底并不算太友好。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周末和夏季午后是人流高峰，尽量将核心小巷的探索安排在上午或傍晚。岛上的餐厅价格略高，若想节约预算，可以走到与主岛相连的陆地区域就餐，选择更多。许多小巷地面是古老的鹅卵石，务必穿底厚防滑的鞋子，高跟鞋在这里绝对是灾难。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨第一缕阳光中，站在码头边，看朝阳将阿尔卑斯山雪峰染成粉色，同时照亮港口那威严的石狮子和红白条纹灯塔的塔身。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`伸手抚摸一下历经风雨的巴伐利亚石狮冰凉而粗糙的脚掌，然后顺着灯塔旁的阶梯登上堤坝，回望老城沐浴在晨光中的全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从港口向内走，立刻被宏伟的、布满鲜艳文艺复兴时期壁画的市政厅立面所吸引，在它前面的小广场石阶上坐一会儿，看鸽子起飞降落。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`转入市政厅后方那条最窄的“偷吻小巷”，侧身走过时想象几个世纪前的情侣在此匆匆相会的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找老城里最古老的建筑圣彼得教堂，走进它那略显昏暗的 interior，感受自10世纪以来就一直在此延续的静谧祈祷氛围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在 Maximilianstraße 这条主街上随意挑一家有百年历史的咖啡馆，坐在露天位置，点一份经典的苹果卷配鲜奶油，观察街头的众生相。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`逛一逛那些橱窗精美的手工艺品店或本地设计店，或许能淘到一件以湖景或狮子为灵感的独特纪念品。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分，一定要沿着南侧的湖滨步道走一走，找一张长椅坐下，看天鹅游弋，游船归港，等待对岸山峦的轮廓逐渐融入暮色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`港口堤坝回望全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前半小时，站在连接灯塔的堤坝上，用广角镜头将石狮、灯塔、老城彩色房屋以及远方的阿尔卑斯山一同纳入画面，构图力求湖面平衡。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`狮子与灯塔特写同框`}</h4>
                  <p className="text-sm text-gray-700">{`上午阳光侧射时，蹲在码头地面低位，用长焦镜头压缩空间，让雄狮坚实的背影与挺拔的灯塔形成一近一远、一重一轻的生动对话。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`市政厅壁画光影`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光西斜时，市政厅立面的壁画色彩最为饱和生动，寻找壁画前有树木光影点缀的角度，让冰冷的建筑故事带上自然的温度。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`Maximilianstraße 拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，主街两侧的拱廊提供了完美的散射光，拍摄行走的人物或有特色的橱窗，能获得柔和而富有生活气息的街拍照片。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`湖岸晚餐长椅视角`}</h4>
                  <p className="text-sm text-gray-700">{`蓝调时刻（日落后天未全黑），从湖岸餐厅区看向亮起暖黄色灯光的老城建筑轮廓，水面倒影粼粼，能拍出极具氛围感的夜景。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`博登湖水域反射光线强烈，白天拍摄建议携带偏振镜，以消除水面反光并让天空色彩更浓郁。拍摄居民或私人庭院时请务必保持尊重，先微笑示意。飞无人机在居民区上空有严格限制，需提前查询当地法规。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`湖景阳台民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在老城边缘一栋17世纪商人宅邸的顶层公寓，私人小阳台正对无垠湖面与雪山，清晨在鸥鸟叫声中醒来，感觉自己拥有了整个博登湖。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史中心静谧公寓`}</h4>
                  <p className="text-sm text-green-800">{`由老药房改造的现代风格公寓，藏在一条安静的死胡同里，内部是极简设计，推开厚重的木窗却是满眼古老壁画和石板路，体验时空交融的奇妙。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`家庭经营湖畔旅馆`}</h4>
                  <p className="text-sm text-yellow-800">{`位于主岛火车站附近，由热情的老夫妇打理，房间布置温馨质朴，早餐的蜂蜜是自家亲戚蜂场产的，还能拿到主人手绘的私房散步地图。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`大陆区现代设计酒店`}</h4>
                  <p className="text-sm text-purple-800">{`如果不执着于必须睡在岛上，与老城一桥之隔的陆地区有不少现代舒适的酒店，视野开阔，停车方便，性价比更高，步行入城也只需十分钟。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿房源紧俏，尤其是带湖景的，必须提前数月预订。岛上夜晚极为安静安全，但大部分历史建筑没有电梯，携带大件行李需留意。夏季博登湖区域蚊虫较多，建议选择有纱窗的住处。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开林道老城时，我的背包里没有多出什么沉重的纪念品，但心里却被塞进了一种关于“时间”的全新感知。这里教会我的，不是历史事件的简单罗列，而是一种时间如何与空间、与自然共处的高级哲学。你看，那些八百岁的房子，并没有被供奉起来，里面依然飘出咖啡香和洗衣液的味道；那座曾经指引商船归家的灯塔，如今仍在为游艇和观光船闪烁，功能变了，关怀未改。历史在这里不是断代的标本，而是像湖水一样，是流动的、可触摸的当下背景音。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个人人都追逐“高效”“打卡”的时代，林道老城像一个固执而优雅的逆行者。它用纵横交错的小巷让你迷路，迫使你慢下来；它用一片无边无际的湖水挡住你的去路，邀请你发呆。它不给你任何“快速了解我”的捷径，却在你放下攻略、随意坐在某处台阶上看云卷云舒时，把最精髓的东西——那种存在于阿尔卑斯山风与博登湖波之间的、从容不迫的生活节奏，悄悄注入你的身体里。这大概就是深度旅行最珍贵的馈赠：你不仅看到了一个地方，更在不知不觉中，被它的呼吸频率所感染，带走了一小片它那湖光山色般的心境。林道就是这样一个地方，它让你觉得，穿越千山万水而来，只为在这一刻，学会如何“浪费”一个完美的、什么也不做的湖边午后。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/hartenfels-castle-torgau-spiral-staircase" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈滕费尔斯城堡（绝美螺旋阶梯）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hartenfels Castle (Torgau)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/wartburg-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    瓦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">瓦尔特堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Wartburg Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/corvey-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科尔维修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Corvey Abbey</p>
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
