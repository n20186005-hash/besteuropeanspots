import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃尔 Erl｜极小村落与宏大剧院的反差诗意，穿越四百年的信仰与激情 - 最佳欧洲景点',
  description: '车子转过一个普通的阿尔卑斯山谷弯道，导航显示目的地就在前方，可眼前除了点缀着鲜花的木头农舍、安静的牧场和耳边清脆的牛铃声，你几乎要怀疑自己走错了地方。埃尔，这个名字念起来短促有力，它也确实小得惊人，小到五分钟就能从村头走到村尾。然而，就在这片田园诗般的宁静之中，两座庞然大物毫无征兆地闯入了视野，那种',
}

export default function ErlPassionPlaysPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '埃尔', href: '/attractions/erl-passion-plays' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`埃尔・Erl・奥地利・埃尔村`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子转过一个普通的阿尔卑斯山谷弯道，导航显示目的地就在前方，可眼前除了点缀着鲜花的木头农舍、安静的牧场和耳边清脆的牛铃声，你几乎要怀疑自己走错了地方。埃尔，这个名字念起来短促有力，它也确实小得惊人，小到五分钟就能从村头走到村尾。然而，就在这片田园诗般的宁静之中，两座庞然大物毫无征兆地闯入了视野，那种冲击力，我至今想起还会心跳加速。
左手边，是洁白如雪的节日剧院大厅，像一块被上帝不小心遗落在此的精美婚礼蛋糕，或者说，更像一个从童话插图里直接搬出来的、过于完美的玩具宫殿。它的线条优雅圆润，窗棂装饰着细腻的金边，在阿尔卑斯清澈的阳光下，白得耀眼，白得不真实。而仅仅百米之遥，与之深情“对峙”的，是那座激情剧院。我的天，那完全像是来自另一个星系的造物。巨大、厚重、棱角分明，由无数片深灰色的玄武岩板覆盖，它不像建在大地上，而像从大地深处生长出来的黑色晶体，沉默、冷峻，充满无法言说的力量感。山风穿过山谷，带来松针和湿润泥土的气息，同时也轻抚过这两座建筑——一个仿佛在轻盈地呼吸，另一个则在低沉吟诵。
你很快会发现，这两个剧院并非外来之物，它们深深扎根在当地人的脉搏里。小酒馆里，喝着啤酒、脸颊红润的老爷爷，可能正是上一届激情剧中扮演罗马百夫长的演员；打理着旅馆的老板娘，或许整个家族都为剧院的建设出过力。在这里，戏剧不是遥远的艺术，而是邻里间的共同记忆，是冬天围着火炉反复打磨的台词，是每个六年周期来临时，全村上下一起心跳加速的期待。那种将极其古老的虔诚与极其前卫的表达融为一体的勇气，让这个弹丸之地，拥有了撼动灵魂的密度。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子转过一个普通的阿尔卑斯山谷弯道，导航显示目的地就在前方，可眼前除了点缀着鲜花的木头农舍、安静的牧场和耳边清脆的牛铃声，你几乎要怀疑自己走错了地方。埃尔，这个名字念起来短促有力，它也确实小得惊人，小到五分钟就能从村头走到村尾。然而，就在这片田园诗般的宁静之中，两座庞然大物毫无征兆地闯入了视野，那种冲击力，我至今想起还会心跳加速。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "左手边，是洁白如雪的节日剧院大厅，像一块被上帝不小心遗落在此的精美婚礼蛋糕，或者说，更像一个从童话插图里直接搬出来的、过于完美的玩具宫殿。它的线条优雅圆润，窗棂装饰着细腻的金边，在阿尔卑斯清澈的阳光下，白得耀眼，白得不真实。而仅仅百米之遥，与之深情“对峙”的，是那座激情剧院。我的天，那完全像是来自另一个星系的造物。巨大、厚重、棱角分明，由无数片深灰色的玄武岩板覆盖，它不像建在大地上，而像从大地深处生长出来的黑色晶体，沉默、冷峻，充满无法言说的力量感。山风穿过山谷，带来松针和湿润泥土的气息，同时也轻抚过这两座建筑——一个仿佛在轻盈地呼吸，另一个则在低沉吟诵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你很快会发现，这两个剧院并非外来之物，它们深深扎根在当地人的脉搏里。小酒馆里，喝着啤酒、脸颊红润的老爷爷，可能正是上一届激情剧中扮演罗马百夫长的演员；打理着旅馆的老板娘，或许整个家族都为剧院的建设出过力。在这里，戏剧不是遥远的艺术，而是邻里间的共同记忆，是冬天围着火炉反复打磨的台词，是每个六年周期来临时，全村上下一起心跳加速的期待。那种将极其古老的虔诚与极其前卫的表达融为一体的勇气，让这个弹丸之地，拥有了撼动灵魂的密度。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`埃尔`} />
                <InfoRow label="英文名称" value={`Erl`} />
                <InfoRow label="正式名称" value={`Erl Passion Play Theatre and Festival Hall`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`埃尔村`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`欧洲最重要、历史最悠久的民间宗教戏剧传统圣地之一，其激情剧演出传统已持续超过四百年。`} />
                <InfoRow label="建筑特色" value={`现代与古典的并置与对话，以极具雕塑感和未来感的黑色玄武岩“激情剧院”，与如童话般纯白优雅的新巴洛克“节日剧院大厅”形成震撼对比。`} />
                <InfoRow label="建筑风格" value={`激情剧院为当代解构主义建筑，节日剧院大厅为新巴洛克风格。`} />
                <InfoRow label="文化价值" value={`承载了蒂罗尔地区乃至德语世界深厚的民间信仰与社区文化，是将古老宗教仪式转化为永恒艺术表达的活态文化纪念碑。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`激情剧院导览参观时间通常为每年五月至十月的周二至周六下午2点至5点，具体需提前在官网查询；激情剧上演期间（每六年一次，下一次为2025年）及夏季音乐节期间，开放时间变动极大，节日剧院大厅在无演出时可预约参观。冬季（十一月至次年四月）参观基本关闭，仅接受团队预约。`} />
              <InfoRow label="门票价格" value={`激情剧院导览参观：成人12欧元，优惠票（学生、 seniors）10欧元；节日剧院大厅参观：8欧元；两馆联票：16欧元。观看激情剧演出票价因座位区域而异，通常在30-150欧元之间；夏季蒂罗尔音乐节演出票价另计。所有门票强烈建议提前在线预订。`} />
              <InfoRow label="地址" value={`Passionsspielhaus, 6343 Erl, Austria`} />
              <InfoRow label="交通方式" value={`最近的国际机场是德国慕尼黑机场（约110公里）或奥地利因斯布鲁克机场（约80公里）。从慕尼黑中央火车站乘坐EC列车前往库夫施泰因（约1小时），换乘区域火车（Tirol S-Bahn）至“Erl”站（约20分钟），出站后步行15分钟即达剧院。从因斯布鲁克出发，乘火车至“Erl”站约50分钟。村子极小，所有景点步行可达。巴士班次稀疏，自驾最为方便，剧院区域有充足免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事要从1613年那个可怕的夏天说起。黑死病的阴影如同阿尔卑斯山间的浓雾，笼罩了整个蒂罗尔地区。埃尔村的居民们在绝望中向上帝许愿：若能幸免于难，他们将每十年上演一次耶稣受难剧，以谢神恩。瘟疫奇迹般地绕过了这个村庄，村民们信守诺言，在村中的空地上搭起简陋的木台，用最质朴的方言和全部的身心，开始了第一次《埃尔激情剧》的演出。那时的演员全是农民、牧民和手工业者，台词带着泥土味，情感却炽热如火山熔岩。这个传统，就此像一颗坚韧的种子，在阿尔卑斯的岩缝中扎下了根。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此后的几个世纪，战争、政权更迭、启蒙运动的思潮冲击，都未能让这颗种子枯萎。它顽强地存活着，从十年一次，到后来固定为每六年一次。演出地点从露天场地，搬进了木结构的棚屋，再搬进更体面的建筑。但核心从未改变：演员始终是本地人，一代传一代；台词始终用蒂罗尔方言；那份源于求生本能、进而化为社区凝聚力的虔诚，始终是戏剧跳动的灵魂。你会发现，这不是专业剧团的作品，而是一个村庄用集体生命谱写的史诗。二战后的1950年代，随着演出规模和观众人数的爆炸式增长，建造一个永久性的、专业的剧院成为必然。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "历史的转折点，掌握在一个看似不可能的人手中：一位名叫约瑟夫的当地农民兼石匠。他不仅是激情剧的忠实演员和推动者，更怀着一个惊人的梦想——要为这部神圣的戏剧建造一个配得上它精神力量的永恒之家。他没有选择保守地复制一座传统歌剧院，而是将目光投向了未来。命运使然，他的儿子，赫尔曼，成为了一位才华横溢的建筑师。父亲提供了无与伦比的信念和当地人的全力支持，儿子则用惊世骇俗的设计予以回应。当赫尔曼拿出那座以黑色玄武岩包裹、形如巨大磐石或远古祭坛的方案时，可以想象在当时引起的争议。但它最终在1970年代拔地而起，其震撼的形式，完美外化了激情剧本身的苦难、重量与永恒性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那么，那座纯白色的节日剧院大厅又是从何而来？它诞生于一个更“世俗”却同样美好的愿望。埃尔人不仅想每六年演一次神剧，他们还想让优美的歌剧、交响乐常年回荡在山谷中。于是，在激情剧院对面，一座精致、欢快、充满19世纪优雅情调的新巴洛克风格音乐厅在1997年落成。它就像激情剧院的“光明天使”，二者一黑一白，一重一轻，一个关乎牺牲与救赎，一个关乎欢愉与升华。它们并肩站立，仿佛在无声地讲述一个完整的奥地利故事：关于信仰如何催生艺术，社区如何塑造文化，以及一个村庄，如何用最大的胆魄，守护最古老的承诺，并拥抱最广阔的世界。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在下午早些时候（2点左右）抵达，这样可以完美衔接下午的导览游，并有充足的时间在光影最美的黄昏沉浸感受建筑与环境的对话。整体游览需要至少3-4小时，节奏宜慢不宜快。先参观节日剧院大厅，感受其精致与轻盈，作为情绪的铺垫；随后在导览员的带领下深度探索激情剧院的内部奥秘，了解其建筑巧思和历史故事；最后在周边自由漫步，让震撼的视觉对比慢慢沉淀。如果时间充裕，一定要在村里用晚餐，体验夜幕降临时，两座剧院在灯光下展现出的不同性格。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`参观极度依赖导览，务必提前在官网查好英语或德语导览团的时间并预约，现场几乎无法临时加入。
穿着绝对舒适的步行鞋，因为不仅要在剧院内部上下楼梯，探索周边山坡小径也是体验不可或缺的一部分。
如果是非演出季前来，请享受这份近乎包场的宁静；若恰逢演出季（每六年一次），那将是完全不同的、如同朝圣般的沸腾体验，需提前一年以上规划行程。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`先从纯白色的节日剧院大厅开始，推开那扇厚重的木门，让自己瞬间被内部金碧辉煌的洛可可式装饰和天鹅绒座椅的静谧所包围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟着导览员穿过地下通道进入激情剧院，在踏入主演出厅的刹那，感受那由混凝土、木材和极度克制设计所营造出的、近乎神圣的肃穆与空灵。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`爬上激情剧院侧面狭窄的阶梯，来到可以俯瞰整个山谷和对面白色剧院的屋顶露台，让山风猛烈地吹过，体会建筑与自然力量的交织。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在连接两座剧院的广阔广场上找一个长椅坐下，静静观察黑白双雄在阿尔卑斯光线变化中呈现出的不同色调与情绪。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要去剧院附设的小博物馆，看看那些跨越了几个世纪的、手写的剧本、粗糙而真挚的旧道具，以及村民演员们泛黄的照片。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`黄昏时分，沿着剧院背后那条通往山坡的小径走一小段，回望整个建筑群，看灯光次第亮起，黑色剧院如沉稳的山体，白色剧院则像一颗温暖的珍珠。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在村里唯一的百年老店“金羊”餐馆点一份蒂罗尔饺子，听听邻桌的老先生们用方言热烈讨论着下一届演出谁该扮演彼拉多。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`村庄西侧小山坡的草地上`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，从此处可以拍摄到两座剧院并置于田园风光中的全景，黑色建筑的冷峻与白色建筑的柔美在暖色调夕阳下对比达到极致。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`激情剧院内部中庭`}</h4>
                  <p className="text-sm text-gray-700">{`利用其巨大的混凝土结构形成的几何线条，在正午阳光透过高侧窗形成强烈光柱时，拍摄极具抽象感和神圣感的建筑光影。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`节日剧院大厅的正门台阶下`}</h4>
                  <p className="text-sm text-gray-700">{`采用低角度仰拍，将精美的白色巴洛克立面与湛蓝的天空一同纳入镜头，营造童话般的梦幻效果。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`连接两座建筑的玻璃廊桥内部`}</h4>
                  <p className="text-sm text-gray-700">{`以框架构图方式，透过玻璃窗格拍摄另一座剧院，形成“画中画”的独特视觉趣味。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`村口老旧木屋的窗台前`}</h4>
                  <p className="text-sm text-gray-700">{`将富有生活气息的木屋窗台与鲜花作为前景，远处模糊的剧院轮廓作为背景，拍出人文与宏大并存的叙事感照片。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`内部参观时，务必询问并遵守剧院的摄影规定，演出厅内通常禁止使用闪光灯和三脚架。`}</li>
                <li>• {`阿尔卑斯山区天气瞬息万变，抓住雨后初晴或山间有薄雾的时机，往往能拍出最具戏剧性和氛围感的作品。`}</li>
                <li>• {`拍摄当地村民或演员（如果在排练）时，请务必先微笑示意并获得许可，这里的人们友好但重视隐私。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济之选`}</h4>
                  <p className="text-sm text-blue-800">{`“青山”家庭旅馆，由热情好客的本地夫妇经营，房间整洁得像祖母的家，早餐的 homemade 果酱和新鲜面包能让你能量满满地开始探索。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`“演员之家”农庄，主人一家世代参与激情剧演出，住在厚重的木屋里，晚上围着壁炉听主人讲述幕后故事，是深入了解当地灵魂的绝佳方式。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计风尚`}</h4>
                  <p className="text-sm text-yellow-800">{`位于库夫施泰因镇的“艺术酒店”，如果你更偏好现代舒适的设施，这家开车15分钟可达的设计酒店拥有俯瞰城堡的露台和顶级的SPA。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端隐逸`}</h4>
                  <p className="text-sm text-purple-800">{`距离埃尔车程25分钟的“温泉山庄酒店”，坐落在静谧的山谷中，拥有天然的阿尔卑斯温泉，在看完震撼的剧院后，来此泡在温泉里仰望星空是终极享受。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃尔村内住宿极其有限且非常抢手，尤其在演出季，必须提前至少半年至一年预订。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果住在库夫施泰因等邻近城镇，虽然选择更多，但会错过清晨和夜晚山谷与剧院独有的宁静氛围，以及和本地人深入交流的机会。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "许多家庭旅馆只收现金或本地银行转账，预订时务必确认支付方式。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开埃尔很久以后，那黑白双塔的形象依然会时常清晰地浮现在我的脑海里。它给我的震撼，远远超过了许多世界闻名的地标。因为在这里，你看到的不是权力与财富的炫耀，而是一个社区关于信仰、记忆与未来的全部叙事，被凝固成了如此极致、如此勇敢的建筑语言。那个黑色的剧院，它沉重吗？是的，它承载着四百年的生与死、恐惧与希望。但它同时也轻盈无比，因为它源于一个如此纯粹、如此坚定的集体愿望。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求效率、追求速成、一切都在快速迭代的世界里，埃尔像是一个倔强的异数。它用六年一个周期的漫长等待，提醒我们有些东西值得用一生去准备和守候；它用一个村庄对抗全世界的文化气魄，告诉我们真正的文化生命力永远根植于最普通的土壤。当你站在那个广场上，左边是纯洁的欢愉，右边是深沉的牺牲，你会感到一种完整的人性被铺陈开来。这不仅仅是一次建筑或戏剧的朝圣，更是一场关于“共同体”何以可能、文化如何真正活着的深刻一课。每一位渴望在旅行中找到故事深度，而不仅仅是风景明信片的旅人，都应该来埃尔，听听山谷的风声里，那穿越了四个世纪的、依然炽热的回响。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/stift-zwettl-austria" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    茨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">茨韦特尔修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Stift Zwettl</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/duernstein-wachau" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    杜
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">杜伦斯泰因</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dürnstein</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bregenz-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布雷根茨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bregenz Old Town</p>
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
