import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '纳沙泰尔城堡与大教堂 Neuchâtel Castle｜沉浸在湖光山色中的中世纪权力与信仰之巅 - 最佳欧洲景点',
  description: '记得我第一次见到它，是在一个秋日的黄昏。刚从纳沙泰尔火车站走出来，一抬头，就被湖对岸那片景象钉在了原地。夕阳正把最后一抹熔金般的色彩泼洒在纳沙泰尔湖面上，而湖的那一头，一整座赭石色的山丘被一座威严的城堡和一座挺拔的教堂所“加冕”。它们不是孤立的两座建筑，而是一个浑然天成的整体，城堡敦实厚重，教堂的尖...',
}

export default function NeuchatelCastleCollegiateChurchPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '瑞士', href: '/destinations/switzerland' },
            { label: '纳沙泰尔城堡与大教堂', href: '/attractions/neuchatel-castle-collegiate-church' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`纳沙泰尔城堡与大教堂・Neuchâtel Castle・瑞士・纳沙泰尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`记得我第一次见到它，是在一个秋日的黄昏。刚从纳沙泰尔火车站走出来，一抬头，就被湖对岸那片景象钉在了原地。夕阳正把最后一抹熔金般的色彩泼洒在纳沙泰尔湖面上，而湖的那一头，一整座赭石色的山丘被一座威严的城堡和一座挺拔的教堂所“加冕”。它们不是孤立的两座建筑，而是一个浑然天成的整体，城堡敦实厚重，教堂的尖塔却轻盈地刺向开始泛起粉紫色的天空，那种力量与优雅的对比，在湖光的映衬下，美得令人忘了呼吸。空气里有凉丝丝的湖水气味，混合着从老城方向飘来的、刚刚出炉的“牛角面包”的黄油香。耳边是叮叮当当的电车声和隐约传来的法语交谈声，轻快得像一串跳跃的音符。这座城堡与教堂，可不是博物馆里冰冷的展品，它就是纳沙泰尔人生活的背景板。你看，沿着湖滨道跑步的人，目光总会掠过湖面投向它；坐在露天咖啡馆里啜饮着本地白葡萄酒的情侣，以它为见证；就连放学回家的孩子们，也习惯了在它的影子下追逐嬉戏。它那么高大，却又那么亲切，仿佛一位沉默而可靠的家族长者，静静地守护着山下的万家灯火。
真正开始向上走，穿过那些用本地黄色砂岩建成、被岁月打磨得温润光滑的老城街道时，你才能体会到它的核心魅力，那是一种“攀登历史”的切身感。脚下的石板路微微陡峭，缝隙里长着青苔，街道两旁是精致的手表店和书店，橱窗里反射着城堡逐渐放大的身影。这种攀登不是单纯的物理运动，更像是一种仪式——你正离开现代生活的平面，一步步走向这座城市在时间维度上的起点。随着高度攀升，城市的喧嚣渐渐沉下去，取而代之的是风吹过教堂塔楼时发出的、低沉而悠远的呜鸣。当你喘着气，终于站在城堡前的广场（Place du Château）上时，整个纳沙泰尔湖如同一条巨大的、闪着银光的缎子，平铺在你脚下，远方的阿尔卑斯山在天际线上勾勒出锯齿状的淡影。那一刻你会明白，选址于此的先民拥有多么绝佳的战略与审美眼光。这里既能御敌于外，又将天堂般的美景尽收眼底。权力与信仰，防御与眺望，世俗与神圣，所有这些看似矛盾的元素，在这里被和谐地统一在了同一片山丘之上。
最打动我的，或许是这里散发出的那种“活着的宁静”。它不像一些被完全博物馆化的城堡那样只剩下空壳。城堡的一部分至今仍是纳沙泰尔州政府的办公地，你能看到穿着得体的公务员们拿着文件匆匆穿过古老的拱门，历史以一种极其自然的方式延续着它的功用。而在教堂内部，当午后阳光穿过那些13世纪的彩色玻璃窗，在斑驳的石柱和地板上投下五彩斑斓的光影时，时间仿佛凝固了。这里没有巴黎圣母院那样的人声鼎沸，常常只有零星几个访客，或是一个静静坐在长椅上祈祷的老妇人。空气中飘散着淡淡的旧木头、石蜡和灰尘混合的气味，那是属于 centuries 的、安宁而神圣的气息。你可以坐在角落里，听着自己的心跳慢慢平复，看光柱里微尘舞动，感受一种在现代都市里早已失传的、缓慢而深沉的时间流速。这就是纳沙泰尔城堡与大教堂最核心的魅力——它不仅仅是一个景点，更是一个让你能够同时触摸到历史脉搏、自然壮美和当下生活温度的、独一无二的存在。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`记得我第一次见到它，是在一个秋日的黄昏。刚从纳沙泰尔火车站走出来，一抬头，就被湖对岸那片景象钉在了原地。夕阳正把最后一抹熔金般的色彩泼洒在纳沙泰尔湖面上，而湖的那一头，一整座赭石色的山丘被一座威严的城堡和一座挺拔的教堂所“加冕”。它们不是孤立的两座建筑，而是一个浑然天成的整体，城堡敦实厚重，教堂的尖塔却轻盈地刺向开始泛起粉紫色的天空，那种力量与优雅的对比，在湖光的映衬下，美得令人忘了呼吸。空气里有凉丝丝的湖水气味，混合着从老城方向飘来的、刚刚出炉的“牛角面包”的黄油香。耳边是叮叮当当的电车声和隐约传来的法语交谈声，轻快得像一串跳跃的音符。这座城堡与教堂，可不是博物馆里冰冷的展品，它就是纳沙泰尔人生活的背景板。你看，沿着湖滨道跑步的人，目光总会掠过湖面投向它；坐在露天咖啡馆里啜饮着本地白葡萄酒的情侣，以它为见证；就连放学回家的孩子们，也习惯了在它的影子下追逐嬉戏。它那么高大，却又那么亲切，仿佛一位沉默而可靠的家族长者，静静地守护着山下的万家灯火。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正开始向上走，穿过那些用本地黄色砂岩建成、被岁月打磨得温润光滑的老城街道时，你才能体会到它的核心魅力，那是一种“攀登历史”的切身感。脚下的石板路微微陡峭，缝隙里长着青苔，街道两旁是精致的手表店和书店，橱窗里反射着城堡逐渐放大的身影。这种攀登不是单纯的物理运动，更像是一种仪式——你正离开现代生活的平面，一步步走向这座城市在时间维度上的起点。随着高度攀升，城市的喧嚣渐渐沉下去，取而代之的是风吹过教堂塔楼时发出的、低沉而悠远的呜鸣。当你喘着气，终于站在城堡前的广场（Place du Château）上时，整个纳沙泰尔湖如同一条巨大的、闪着银光的缎子，平铺在你脚下，远方的阿尔卑斯山在天际线上勾勒出锯齿状的淡影。那一刻你会明白，选址于此的先民拥有多么绝佳的战略与审美眼光。这里既能御敌于外，又将天堂般的美景尽收眼底。权力与信仰，防御与眺望，世俗与神圣，所有这些看似矛盾的元素，在这里被和谐地统一在了同一片山丘之上。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动我的，或许是这里散发出的那种“活着的宁静”。它不像一些被完全博物馆化的城堡那样只剩下空壳。城堡的一部分至今仍是纳沙泰尔州政府的办公地，你能看到穿着得体的公务员们拿着文件匆匆穿过古老的拱门，历史以一种极其自然的方式延续着它的功用。而在教堂内部，当午后阳光穿过那些13世纪的彩色玻璃窗，在斑驳的石柱和地板上投下五彩斑斓的光影时，时间仿佛凝固了。这里没有巴黎圣母院那样的人声鼎沸，常常只有零星几个访客，或是一个静静坐在长椅上祈祷的老妇人。空气中飘散着淡淡的旧木头、石蜡和灰尘混合的气味，那是属于 centuries 的、安宁而神圣的气息。你可以坐在角落里，听着自己的心跳慢慢平复，看光柱里微尘舞动，感受一种在现代都市里早已失传的、缓慢而深沉的时间流速。这就是纳沙泰尔城堡与大教堂最核心的魅力——它不仅仅是一个景点，更是一个让你能够同时触摸到历史脉搏、自然壮美和当下生活温度的、独一无二的存在。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`纳沙泰尔城堡与大教堂`} />
                <InfoRow label="英文名称" value={`Neuchâtel Castle`} />
                <InfoRow label="正式名称" value={`Château de Neuchâtel et la Collégiale`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`纳沙泰尔`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`纳沙泰尔州近千年历史的权力核心与精神象征，见证了从伯爵领地到瑞士州府的完整政治与宗教变迁。`} />
                <InfoRow label="建筑特色" value={`一座完美融合防御性城堡结构与优雅晚期罗马式教堂的建筑群，雄踞山丘，俯瞰整个纳沙泰尔湖与城市。`} />
                <InfoRow label="建筑风格" value={`以罗马式为基础，杂糅了哥特式、文艺复兴及新古典主义元素的混合风格，如同一部立体的建筑编年史。`} />
                <InfoRow label="文化价值" value={`瑞士法语区文化认同的重要地标，体现了伯尔尼统治时期与本地传统之间复杂而微妙的共生关系。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡庭院及外部区域全年24小时开放。城堡塔楼及部分历史房间（现为州政府办公地）仅在特定导览团开放，导览团时间为每年4月至10月的每周二、周四、周六下午2点，冬季（11月至3月）仅周六下午2点有团，节假日可能调整或关闭。大教堂开放时间为每日上午9点至下午6点（夏季延长至下午7点），周日礼拜期间（上午10点）游客请保持安静。`} />
              <InfoRow label="门票价格" value={`城堡外部及庭院免费。历史房间及塔楼导览团：成人12瑞士法郎，学生及老年人10瑞士法郎，12岁以下儿童免费。大教堂免费进入，但欢迎捐赠以支持维护。导览团建议提前在旅游局官网预约。`} />
              <InfoRow label="地址" value={`Place du Château 1, 2000 Neuchâtel, Switzerland`} />
              <InfoRow label="交通方式" value={`从苏黎世机场（ZRH）出发：乘坐火车至苏黎世主火车站（约10分钟），转乘直达纳沙泰尔的城际列车（IC），车程约1小时40分钟，班次每小时1-2班。从日内瓦机场（GVA）出发：乘坐火车至日内瓦主火车站（约7分钟），转乘直达纳沙泰尔的列车，车程约1小时20分钟，班次密集。抵达纳沙泰尔火车站后，出站即可看见湖对岸山丘上的城堡。步行上山是最佳体验，沿着清晰的路标穿过老城，约需15-20分钟缓坡；也可在火车站前乘坐1路巴士至“Place du Château”站，车程5分钟。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起这座山丘的故事，得把时钟拨回到将近一千年前。大约在12世纪初，一位名叫乌尔里希二世（Ulrich II）的伯爵决定在这里建造他的权力堡垒。为什么选这里？你站在山顶一看就全明白了：西面和南面是陡峭的山坡，易守难攻；东面和北面俯瞰着肥沃的湖滨平原与重要的贸易路线。最初的城堡很可能就是简单的木石结构，但它奠定了此后一切的基础。到了12世纪末，与城堡仅一步之遥的地方，一座献给圣母玛利亚的学院教堂（也就是今天的大教堂）开始兴建。这可不是巧合，它标志着统治者将神权与世俗权力紧密捆绑的意图——我的宝剑保护你的灵魂，你的祈祷则为我的统治赋予神圣合法性。教堂的建筑风格是当时流行的罗马式，厚重、坚固，但已经开始出现向轻盈哥特式过渡的尖拱窗。你能想象吗，在中世纪的鼎盛时期，这座山丘上同时回响着骑士铠甲碰撞的金属声、工匠雕刻石像的敲击声，以及修道士们日复一日的拉丁文诵经声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`历史的转折点在16世纪轰轰烈烈地到来。宗教改革的浪潮从邻近的日内瓦席卷而来，纳沙泰尔在1530年正式接受了新教信仰。这场变革的推动者，是那位著名的改革家纪尧姆·法雷尔（Guillaume Farel）。你可以想象一下当时的情景：教堂内的圣像被移走，彩绘壁画被石灰覆盖，华丽的祭坛被简朴的讲道台取代。城堡的主人，奥尔良-隆格维尔家族，也成为了新教徒。城堡与大教堂的功能关系发生了微妙变化，它们从“神圣罗马帝国框架下的天主教双中心”，转变为了“伯尔尼保护下的新教州府核心”。教堂内部变得极其朴素，但也许正是这种朴素，让空间本身和透过窗户的自然光，拥有了另一种震撼人心的力量。城堡则在16到17世纪间经历了多次改建和加固，增加了文艺复兴风格的窗饰和内部装饰，反映出当时领主对舒适性与防御性的双重追求。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，命运似乎喜欢开玩笑。1707年，随着奥尔良-隆格维尔家族男性继承人的断绝，纳沙泰尔的主权引发了一场复杂的国际争端。最终，普鲁士国王凭借遥远的血缘关系，成为了纳沙泰尔的亲王。但这更像是一个名义上的头衔，实际控制权逐渐落入了强大的瑞士邦联成员——伯尔尼的手中。这段时间，城堡成为了伯尔尼派来的总督（Bailiff）的官邸。你如果参加导览团，还能看到那个时期留下的华丽大厅和壁画，其中不乏对伯尔尼熊标志的宣扬。这是一种非常有趣的“借居”状态：城堡象征着本地传统，而它的主人却是外来的管理者。这种张力，反而催生了一种独特的政治文化，即纳沙泰尔人在伯尔尼的框架下，小心翼翼地维护着自己的法语文化和地方自治权。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`19世纪初，拿破仑战争改写了欧洲地图，也彻底改变了纳沙泰尔的命运。1815年，纳沙泰尔决定加入瑞士联邦，同时（颇为戏剧性地）结束了对普鲁士国王的臣属关系，成为一个独立的共和国与州。城堡，这个千年权力的舞台，自然而然地成为了新生的纳沙泰尔州政府的所在地，这个角色一直延续到今天。19世纪也是“修缮”与“再发现”的时代。人们对中世纪遗产的兴趣复苏，大教堂和城堡都经历了一系列“修复”，试图找回它们“原本的”中世纪风貌，尽管其中不可避免地掺杂了19世纪的浪漫想象。例如，教堂的塔楼就是在那个时期被加高成了现在这样更显挺拔的样子。从伯爵堡垒到总督府，再到州政府，这座城堡几乎没有一天闲置过，它就像一块不断被书写和重写的羊皮纸，每一层权力更迭都在它的石头和木梁上留下了或深或浅的印记。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走到今天，当你漫步在城堡庭院里，看到的不仅是古老的城墙和井台，还有州政府工作人员停在角落的自行车，和窗台上精心打理的鲜花。它完美诠释了欧洲许多古迹最动人的生存状态：没有被供奉在神坛上，而是被温柔地编织进当代生活的经纬之中。它见证过伯爵的雄心、改革家的激情、总督的权谋和共和国的理想，如今，它安静地履行着作为州行政中心的日常职能，同时向每一个来访者敞开怀抱，讲述那段湖光山色间跌宕起伏的千年往事。历史在这里，从未死去，它只是换了一种方式，在每一个阳光明媚的工作日里，继续呼吸。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整体验这个地方的灵魂，我强烈建议预留出至少4-5个小时，并选择一个工作日的上午开始。为什么呢？上午的阳光从东面照亮城堡和教堂的正面，拍照光线绝佳，而且游客相对稀少，你能独享那份宁静。早晨也是当地市场活跃的时候，能感受到老城的生活气息。理想的节奏是“由远及近，由外而内”：先从湖对岸和山下老城建立整体印象，再攀登山丘深入核心，最后在内部静静品味。下午则可以安排参观城堡内部的导览团（如果时间凑巧），或在教堂里坐一会儿，享受光影变幻。这样的安排顺应了地理和光线的自然逻辑，也让你的体验从宏观震撼逐步过渡到微观沉浸。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避免周日早上前往，因为教堂有礼拜活动，不适合游客参观，且许多商店和咖啡馆关门。参加城堡导览团务必提前在纳沙泰尔旅游局官网查看确切时间并预约，现场名额非常有限。攀登老城街道请一定穿一双舒适防滑的鞋子，那些美丽的砂岩路面在潮湿时相当滑。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从纳沙泰尔湖滨的“港口”开始，先隔着宽阔的湖面远眺山丘上城堡与教堂构成的完整天际线，建立最初的地理与美学认知。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着湖边散步道向西，慢慢走进老城（Vieux Neuchâtel）的迷宫，让双脚感受那些被磨得发亮的砂岩台阶和拱廊下的阴凉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在老城中心寻访一下低调的“正义女神”喷泉，听流水潺潺，感受这座城市自中世纪以来的自治传统。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从Rue du Château开始正式的“朝圣”攀登，留意沿途那些有着精美浮雕的古老建筑立面和历史铭文。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先抵达城堡前的广场，在这里360度转一圈，将湖泊、城市、远山和脚下中世纪屋顶的红色海洋尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走入大教堂内部，让眼睛适应昏暗的光线，然后找一个位置坐下，静静观察阳光如何透过彩色玻璃窗，随时间在地面移动作画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间合适，参加一次城堡历史房间的导览团，站在装饰着壁画的大厅里，听讲解员讲述伯爵、总督和共和国秘书们在此留下的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡西侧的城墙步道走下去，换个角度回望教堂的飞扶壁和塔楼，并在途中的小平台上找张长椅坐下，像当地人一样享受片刻闲暇。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`湖对岸（Quai Ostervald）长焦拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`清晨日出后一小时或黄昏日落前一小时，使用长焦镜头压缩空间，可以拍到城堡、教堂倒映在平静湖面中的经典对称全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡广场东南角仰拍教堂塔楼`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点左右，阳光能完美照亮塔楼石面，以天空为背景仰拍，凸显其直插云霄的哥特式线条与轻盈感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`大教堂中殿侧廊光影`}</h4>
                  <p className="text-sm text-gray-700">{`下午两三点，阳光西斜，透过南侧廊的彩色玻璃窗，会在古老的石柱和地板上投射出长长的、色彩斑斓的光斑，蹲低机位捕捉光影与几何结构的交错。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城堡西侧城墙步道俯瞰老城`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚时分，夕阳给老城的红色屋顶镀上金边，从这里可以拍摄到屋顶海洋、远处湖泊和教堂塔楼同框的富有层次感的画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`老城Rue du Château中段回望`}</h4>
                  <p className="text-sm text-gray-700">{`在攀登途中找个有藤蔓或鲜花的门廊作为前景，回望来路，可以拍到蜿蜒向上的石板街巷与山顶城堡一角构成的富有故事感的画面。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄湖面倒影时，建议使用CPL偏振镜，可以有效减少湖面反光，让倒影更清晰。在教堂内部拍摄时，请绝对关闭闪光灯和快门提示音，使用高感光度相机或大光圈镜头，依靠自然光进行创作，这是对礼拜场所的基本尊重。瑞士空域管理严格，未经特殊许可，严禁使用无人机拍摄城堡及教堂区域。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`下榻于老城中心一栋16世纪联排别墅改造的精品酒店，房间保留了原始的木头横梁和石墙，晚上能听到远处教堂隐约的钟声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`湖景设计风尚`}</h4>
                  <p className="text-sm text-green-800">{`选择湖边一家现代设计酒店，拥有直面纳沙泰尔湖和城堡山丘的无敌落地窗，早晨在房间里就能欣赏到湖面升腾的晨雾环绕古堡的仙境画面。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`本地生活体验`}</h4>
                  <p className="text-sm text-yellow-800">{`入住山坡上一家由家族经营的传统旅馆，房间朴素但一尘不染，早餐能尝到女主人自制的果酱和本地蜂蜜，还能获得老板亲绘的徒步私房路线图。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`静谧山居度假`}</h4>
                  <p className="text-sm text-purple-800">{`在俯瞰湖泊和城市的稍远山腰上，有一家由19世纪别墅改建的小型豪华酒店，带一个迷人的花园露台，适合晚上一边品着当地葡萄酒一边看城堡灯火。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`纳沙泰尔治安极好，无论住在老城还是湖边都无需担心。如果夏季（6-8月）或重大节庆（如葡萄酒节）期间来访，务必提前至少两个月预订，尤其是湖景房非常抢手。住在老城虽然风情十足，但请注意部分酒店可能没有电梯，且停车位紧张，更适合轻装简行的旅人。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开纳沙泰尔很久之后，我脑海里时常浮现的，不是某一张具体的明信片般的风景，而是一种混合的感觉：是脚踩古老砂岩的坚实触感，是湖风拂过脸颊的清凉，是教堂里那片沉静的光，以及看到州政府职员骑着自行车穿过城堡拱门时，那种历史与当下奇妙交织的会心一笑。这个地方教会我，最深度的旅行，不是追逐一个又一个的地标打卡，而是去感受一个地方层叠的时间。在这里，你能同时触碰到11世纪的基石、16世纪的信仰革命、18世纪的政治博弈和21世纪的日常公文，它们没有被割裂，而是像一首复杂的复调音乐，和谐地共鸣在这同一片山丘上。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求速成、关注点快速切换的时代，纳沙泰尔城堡与大教堂像一位沉稳的叙事者，它讲述的故事漫长而连贯。它提醒我们，文明是在延续与变革的张力中前进的，真正的力量不在于一味地破旧立新，而在于懂得如何让古老的基石托起当代的生活。对于每一位厌倦了浮光掠影、渴望在旅途中获得宁静与思辨的旅人来说，这里都是一个必访的目的地。它不会用喧嚣的娱乐刺激你，但它会赠予你一片广阔的湖光山色，一段可触摸的千年史，和一个让内心彻底沉静下来的午后。当你下山，重新汇入湖边的人流，你会感到自己的一部分，已经留在了那座山丘上，变得和那里的石头一样，更坚实，也更通透了一些。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/abbey-of-saint-gall-library" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣加仑修道院图书馆</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Abbey of Saint Gall</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/murten-old-town-walls" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    穆
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">穆尔滕老城及城墙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Murten Old Town and City Walls</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/thun-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    图
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">图恩城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Thun Castle</p>
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
