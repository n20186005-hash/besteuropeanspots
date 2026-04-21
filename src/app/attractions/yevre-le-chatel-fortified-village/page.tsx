import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '耶夫勒尔沙泰勒 Yèvre-le-Châtel｜被玫瑰花包裹的中世纪时光胶囊 - 最佳欧洲景点',
  description: '车子在仿佛没有尽头的麦田和向日葵田间转了个弯，一片突兀的、灰白色的岩石山丘骤然撞进视野。那上面立着的，不是精致的城堡，而是几座巨大、沉默、被时间啃噬出无数缺口的圆形塔楼，像几个疲惫却依然不肯倒下的巨人。这就是我对耶夫勒尔沙泰勒的第一眼，一种粗粝的、近乎疼痛的震撼。空气里有干草、尘土和远处农场飘来的淡',
}

export default function YevreLeChatelFortifiedVillagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/france' },
            { label: '卢瓦雷省', href: '/destinations/france' },
            { label: '耶夫勒尔沙泰勒', href: '/attractions/yevre-le-chatel-fortified-village' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`耶夫勒尔沙泰勒・Yèvre-le-Châtel・法国・卢瓦雷省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在仿佛没有尽头的麦田和向日葵田间转了个弯，一片突兀的、灰白色的岩石山丘骤然撞进视野。那上面立着的，不是精致的城堡，而是几座巨大、沉默、被时间啃噬出无数缺口的圆形塔楼，像几个疲惫却依然不肯倒下的巨人。这就是我对耶夫勒尔沙泰勒的第一眼，一种粗粝的、近乎疼痛的震撼。空气里有干草、尘土和远处农场飘来的淡淡牲畜气味，耳边只有风穿过塔楼空洞窗眼时发出的、类似口哨般的呜咽声。
但当你沿着缓坡走近，奇迹发生了。坚硬的军事线条开始被柔软的生命力包裹。几乎每一段残破的石墙脚下，每一处废弃的窗台上，甚至那些狰狞的裂缝里，都爬满了、绽开着、垂吊着无比繁盛的玫瑰花。不是花园里那种被精心修剪的品种，而是野蛮生长的、花瓣层叠的古老蔷薇，粉的像霞，红的像火，白的像雪。那股甜而不腻的香气，混合着古老石头在阳光下散发的微热气息，构成了这里独一无二的嗅觉印记。一个戴着草帽的老奶奶正慢悠悠地给自家门前的花浇水，对你露出缺了牙但无比灿烂的微笑，仿佛守着这片巨大废墟生活，是天底下最自然不过的事。
这里的核心魅力，就在于这种极致的矛盾与和谐。它曾是刀剑与鲜血的堡垒，如今却是鲜花与静谧的村庄。那些高耸的塔楼诉说着权力的野心与战争的残酷，而盘踞其上的玫瑰，则像时间这位最伟大的诗人，写下了一首关于征服、衰落、遗忘与重生的温柔长诗。你站在这里，脚下可能曾是骑士们踱步的岗哨，如今却只有蜜蜂在花间嗡嗡忙碌。这种强烈的时空叠印感，不需要任何解说牌，便能直击心灵。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子在仿佛没有尽头的麦田和向日葵田间转了个弯，一片突兀的、灰白色的岩石山丘骤然撞进视野。那上面立着的，不是精致的城堡，而是几座巨大、沉默、被时间啃噬出无数缺口的圆形塔楼，像几个疲惫却依然不肯倒下的巨人。这就是我对耶夫勒尔沙泰勒的第一眼，一种粗粝的、近乎疼痛的震撼。空气里有干草、尘土和远处农场飘来的淡淡牲畜气味，耳边只有风穿过塔楼空洞窗眼时发出的、类似口哨般的呜咽声。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但当你沿着缓坡走近，奇迹发生了。坚硬的军事线条开始被柔软的生命力包裹。几乎每一段残破的石墙脚下，每一处废弃的窗台上，甚至那些狰狞的裂缝里，都爬满了、绽开着、垂吊着无比繁盛的玫瑰花。不是花园里那种被精心修剪的品种，而是野蛮生长的、花瓣层叠的古老蔷薇，粉的像霞，红的像火，白的像雪。那股甜而不腻的香气，混合着古老石头在阳光下散发的微热气息，构成了这里独一无二的嗅觉印记。一个戴着草帽的老奶奶正慢悠悠地给自家门前的花浇水，对你露出缺了牙但无比灿烂的微笑，仿佛守着这片巨大废墟生活，是天底下最自然不过的事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的核心魅力，就在于这种极致的矛盾与和谐。它曾是刀剑与鲜血的堡垒，如今却是鲜花与静谧的村庄。那些高耸的塔楼诉说着权力的野心与战争的残酷，而盘踞其上的玫瑰，则像时间这位最伟大的诗人，写下了一首关于征服、衰落、遗忘与重生的温柔长诗。你站在这里，脚下可能曾是骑士们踱步的岗哨，如今却只有蜜蜂在花间嗡嗡忙碌。这种强烈的时空叠印感，不需要任何解说牌，便能直击心灵。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`耶夫勒尔沙泰勒`} />
                <InfoRow label="英文名称" value={`Yèvre-le-Châtel`} />
                <InfoRow label="正式名称" value={`Yèvre-le-Châtel`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`卢瓦雷省`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座曾扼守巴黎至奥尔良战略要道的军事堡垒，在英法百年战争的烽烟中扮演了关键的前哨角色。`} />
                <InfoRow label="建筑特色" value={`四座雄健的圆形塔楼构成的方形堡垒布局，是13世纪军事防御建筑的典范，其废墟与娇艳的玫瑰花丛形成了强烈的视觉与意蕴对比。`} />
                <InfoRow label="建筑风格" value={`13世纪盛期的军事哥特式风格，坚固、实用、充满几何力量感。`} />
                <InfoRow label="文化价值" value={`一个活生生的中世纪乡村切片，见证了从军事要塞到宁静农庄的变迁，是法兰西民族历史层叠沉淀的绝佳微观样本。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`村庄及堡垒遗迹全年24小时开放，可自由漫步。内部小型历史展览馆开放时间较为弹性，通常为每年四月至十月的周末下午14:00-18:00，建议行前在卢瓦雷省旅游官网查看最新公告。冬季来访虽略显寂寥，但能独享整个废墟的苍茫感。`} />
              <InfoRow label="门票价格" value={`进入村庄和探索堡垒废墟完全免费，这是它最迷人的慷慨之处。若想支持当地社区维护，可以在村口的小纪念品店自愿捐款或购买一张手绘明信片。小型展览馆偶尔收取2-3欧元的象征性费用。`} />
              <InfoRow label="地址" value={`Yèvre-le-Châtel, 45300, Loiret, France`} />
              <InfoRow label="交通方式" value={`耶夫勒尔沙泰勒深藏于法国乡村，抵达本身就是一场探险。最便捷的路径是从巴黎出发。首先乘坐火车（TER或Intercités）从巴黎奥斯特里茨火车站前往皮蒂维耶站，车程约1小时15分钟，班次每天约6-8班。抵达皮蒂维耶后，公共交通变得稀少，最推荐的方式是预订当地的出租车（车程约20分钟）或在旅游旺季查询罕见的乡村巴士班次。自驾无疑是最自由的选择，从巴黎出发沿A6和N20公路行驶，转入乡间小道，约1.5小时可达，沿途是典型的博斯田野风光。请务必提前下载离线地图，这里的手机信号像个任性的孩子。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事得从一片叫做“博斯”的广阔平原说起。这里土地肥沃，但也一马平川，无险可守。在巴黎和奥尔良这两座重要城市之间，需要一些“钉子”来锁住通道。于是，在12世纪末13世纪初，某个我们已不知其名的领主，选中了耶夫勒尔这座石灰岩小山丘。他看中的是它的视野：站在丘顶，方圆数十里的动静尽收眼底。最初的木质堡垒立了起来，但很快，更坚固、更永久性的石头建筑取代了它。我们今天看到的四座圆塔堡垒的雏形，就在那个风起云涌的年代奠定。选择圆形塔楼而非方形，是军事智慧的一大进步——它能更好地防御攻城槌的撞击，消除防守死角。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座堡垒真正被推上历史的前台，是在那场漫长的、塑造了英法两国民族意识的英法百年战争期间。它属于奥尔良公爵的领地，而奥尔良，是瓦卢瓦王朝王冠上的明珠，也是英格兰人垂涎的目标。耶夫勒尔沙泰勒成了巴黎方向英军南下威胁奥尔良时，必须拔除或绕行的硬钉子。可以想象，那些岁月里，塔楼上的烽火时常燃起，钟声急促，士兵在城垛上紧张地眺望着北方扬起的尘烟。它可能经历了围困，见证了小规模的惨烈冲突，但历史文献的细节已然模糊，只留下石头上的伤疤作为沉默的证词。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战争终于结束了，法兰西走向统一与王权强化。像耶夫勒尔这样的封建领主私人堡垒，其军事价值逐渐褪色，甚至成了中央政权眼中的潜在威胁。它没有被拆除，而是被缓慢地“遗忘”。领主家族可能搬去了更舒适的城市官邸，堡垒的一部分被改建成庄园住宅，更多的部分则交给了时间和风雨。石料被附近的村民悄悄取走去盖房子或畜栏，塔楼成了鸽子的家园，城墙内长出了野草和灌木。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到浪漫主义的风吹过19世纪的欧洲。诗人和画家们开始迷恋“废墟之美”，那些残缺的、爬满藤蔓的中世纪遗迹被赋予了忧郁而崇高的美学价值。耶夫勒尔沙泰勒的命运齿轮再次转动，不过这次是朝向永恒的诗意。人们不再视其为无用的破石头，而是一个逝去时代的象征。更重要的是，不知从何时起，或许是某位怀有浪漫情怀的村民妻子，在第一株玫瑰种下之后，鲜花与废墟的传奇正式开场。玫瑰一年年蔓延，用极致的柔美，反衬并抚慰着极致的刚硬与苍凉。它从一个军事要塞，变成了一个关于时间与生命的隐喻。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`请务必给自己预留完整的大半天时间（至少4-5小时），这里不适合匆匆打卡。最佳的抵达时间是清晨九点前或午后三点后，光线斜射，赋予废墟和玫瑰更戏剧化的光影，也能避开偶尔到来的旅游小巴。整个游览节奏应该是缓慢的、漫无目的的“迷失”。建议先从外围整体感受它的气势，然后深入村庄的脉络，最后攀上堡垒的核心，在制高点让思绪随风飘散。整个过程就像阅读一本厚重的历史小说，需要慢慢翻页，细细品味字里行间的气息。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿着绝对舒适的步行鞋，村里的路全是古老的碎石和石板，高跟鞋和脆弱鞋底会是一场灾难。夏季务必携带驱蚊水和防晒帽，废墟间草木茂盛，小生物颇多。村里没有ATM机，餐馆也只有一两家且营业时间随性，建议自带一些饮用水和简单零食。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`让脚步在通往村庄的主路上慢下来，先别急着进村，从远处那片向日葵田的边缘回望，拍下堡垒雄踞山丘的第一张全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着蜿蜒的上坡小路走进低矮的石头拱门，瞬间被玫瑰的香气和满眼的缤纷所包围，仿佛踏入一个被施了魔法的结界。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`用指尖轻轻触摸主塔楼下那些被岁月打磨得温润的巨大石块，寻找上面可能存在的石匠标记或古老的刻痕。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要绕到堡垒的北侧下方，那里人迹罕至，可以清晰看到堡垒底部与原生岩层融为一体的震撼结构，感受它从大地中生长出来的力量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选一段有树荫的残墙根坐下，什么都不做，只是听风声、鸟鸣，看光影在石面上缓慢移动，让自己彻底“沉”在这片时空里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访村里那间总是半开着门的小小圣高尔教堂，里面的昏暗光线和简单壁画有着直抵人心的宁静力量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在村子最高点的塔楼废墟旁，找到那家由老房子改造的茶室，点一杯薄荷茶或本地苹果汁，坐在爬满蔷薇的露台上，将整个博斯平原尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开前，去村口那间兼作邮局的小纪念品店，挑一张手绘的村庄水彩画明信片，让那位和蔼的店主老爷爷为你盖上独有的风景邮戳。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`堡垒南侧向日葵田边的土路`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，金红色的光线会为灰白色的塔楼镀上温暖轮廓，用广角镜头将前景的向日葵与背景的堡垒一同纳入，构成生命与历史对话的绝佳画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`村庄中心喷泉广场仰拍视角`}</h4>
                  <p className="text-sm text-gray-700">{`站在古老的石雕喷泉旁，以广场上高大的梧桐树树叶作为自然画框，向上仰拍被玫瑰簇拥的教堂钟楼和背后耸立的堡垒塔尖，层次感极其丰富。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`东面塔楼废墟的内部`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光垂直射入时，进入半坍塌的塔楼内部，抬头拍摄“一线天”般的景象，光线从残缺的圆形顶部倾泻而下，照亮空气中飞舞的微尘，充满神圣的废墟感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`玫瑰覆盖的西面城墙长镜头`}</h4>
                  <p className="text-sm text-gray-700">{`清晨露水未干时，沿着西面城墙步行，用长焦镜头捕捉爬满整个墙面的蔷薇特写，将娇艳欲滴的花朵与斑驳沧桑的石墙纹理压缩在同一平面，对比惊人。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重隐私，拍摄村民和他们的住所前，请务必先微笑并征求同意。使用无人机在当地是敏感行为，理论上需要申请且可能打扰村庄宁静，强烈不建议在此飞无人机。多利用自然光线，这里的夜景缺乏照明，并不适合夜间拍摄。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`质朴乡间民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在村里石头老屋改造的民宿阁楼里，木梁低矮，窗户正对一片玫瑰园，清晨会被鸡鸣和面包房的隐约香气唤醒，老板娘会为你准备装在手编篮子里、铺着格子布的丰盛早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`舒适家庭酒店`}</h4>
                  <p className="text-sm text-green-800">{`驱车十分钟可达的邻近小镇上，由世代经营的家庭旅馆，房间宽敞明亮，带有能看见田野的小阳台，老板熟知所有本地传说，晚餐的家常法式炖菜味道堪称一绝。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特色庄园体验`}</h4>
                  <p className="text-sm text-yellow-800">{`距离村庄约二十分钟车程的一座十八世纪狩猎庄园改造的精品酒店，房间充满古董家具，花园里有百年古树和池塘，晚餐是使用本地食材的精致套餐，仿佛住进一部法国电影。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-purple-800">{`在更远一些的、同样古老的镇子上，下榻于一间由修道院回廊部分建筑修复而成的酒店，石墙厚重寂静，庭院中古井依然，能提供一种更深沉的历史沉浸感。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "耶夫勒尔沙泰勒本身住宿极其有限且很快订满，建议至少提前两个月规划。周边乡村治安极好，但入夜后真正万籁俱寂，几乎没有夜生活。选择住在这里，就是为了享受这种与世隔绝的宁静，请准备好书籍、音乐和自己的思绪作为最好的伴侣。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开耶夫勒尔沙泰勒很久以后，脑海里挥之不去的，不是某座具体的塔楼，也不是某一丛特别艳丽的玫瑰，而是一种整体的、氤氲的氛围。那是一种深刻的宁静，但这种宁静并非虚无，它是由历史的重量、时间的韧性、自然生命力的蓬勃，共同酿造出来的。它告诉你，再坚固的堡垒也会倒塌，再激烈的战争也会平息，但美与生命，总会找到自己的方式，在断壁残垣上重新绽放。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求效率、热衷打卡、一切都被加速的快节奏时代，耶夫勒尔沙泰勒是一剂有效的解药。它没有什么惊天动地的必看瑰宝，它的价值就在于它的“无用”——它只是一段时光的忠实留存，一个任你投射情感与思考的空白画布。它邀请你停下来，不仅仅是身体的停留，更是心灵的驻足。在这里，你能触摸到历史并非教科书上冰冷的章节，而是一层又一层温暖或冰冷的生活印记；你能看到时间并非毁灭者，而是一位最耐心的艺术家，用风雨和花草作为刻刀与画笔。每一位热爱深度游的旅人，都该来此感受一下这种“废墟之上的温柔”，这趟旅程关乎历史，更关乎我们如何在变迁的世界里，安放自己的内心。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/chateau-de-montsegur" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蒙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蒙塞居尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Montségur</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/eguisheim-alsace" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃吉赛姆</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Eguisheim</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/forteresse-de-salses" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨尔斯要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Forteresse de Salses</p>
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
