import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '塔拉斯普城堡 Tarasp Castle｜雄踞悬崖的千年白色巨人，聆听瑞士恩嘎丁山谷最孤傲的心跳 - 最佳欧洲景点',
  description: '第一眼看到塔拉斯普城堡，你会忘记呼吸。它不是缓缓出现在地平线上，而是像一头巨大的、沉睡的白色史前巨兽，骤然从翠绿的山丘和深蓝色的恩嘎丁天空之间崛起，带着一种近乎傲慢的孤独感，牢牢楔入你的视野。车子在盘山公路上每转过一个弯，它就变得更大、更不真实一些。那种白，不是娇柔的雪白，而是经历了千年风吹日晒后，...',
}

export default function TaraspCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '瑞士', href: '/destinations/switzerland' },
            { label: '格劳宾登州，塔拉斯普村', href: '/destinations/switzerland' },
            { label: '塔拉斯普城堡（恩嘎丁山谷的守护者）', href: '/attractions/tarasp-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`塔拉斯普城堡（恩嘎丁山谷的守护者）・Tarasp Castle・瑞士・格劳宾登州，塔拉斯普村`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到塔拉斯普城堡，你会忘记呼吸。它不是缓缓出现在地平线上，而是像一头巨大的、沉睡的白色史前巨兽，骤然从翠绿的山丘和深蓝色的恩嘎丁天空之间崛起，带着一种近乎傲慢的孤独感，牢牢楔入你的视野。车子在盘山公路上每转过一个弯，它就变得更大、更不真实一些。那种白，不是娇柔的雪白，而是经历了千年风吹日晒后，一种粗粝的、带着历史包浆的骨白色，在阿尔卑斯刺眼的阳光下，反射出沉默而坚硬的光。
当你把车停在山脚下那个宁静得只剩下溪流声和牛铃声的小村庄，开始沿着蜿蜒的碎石小径向上徒步时，所有的感官才真正苏醒。空气里是干草、松针和远处高山牧场传来的淡淡粪肥气味，混合成一种极其洁净又原始的土地气息。你的脚步声、略微急促的呼吸声，是这环境中唯一的节奏。直到走近了，你才听见风穿过城堡高塔窗洞时发出的呜咽，像一声悠长的叹息。城堡脚下，零星散落着几户人家，木屋阳台开满了天竺葵，一位老奶奶正不紧不慢地收着晾晒的床单——这座庞然大物，对他们而言不是景点，而是生活里一个沉默而坚实的背景，是每日推开窗就能见到的老邻居。
穿过厚重的拱形城门，踏入内庭的瞬间，时间流速陡然变缓。石头庭院被高墙围合，阳光只能斜斜地切下一角，明暗对比异常强烈。脚下是凹凸不平、被无数脚步磨得温润的原石地面。这里没有喧嚣的旅游团，没有叫卖声，只有一种巨大的、被精心维护着的寂静。你突然明白了这座城堡最核心的魅力：它不是一件被圈禁起来的文物，而是一个被爱唤醒的活体。从里到外，从每一块修补过的石砖到大厅里光泽柔润的古董家具，都透着一股“家”的温度。它孤傲地屹立了千年，如今却以一种最私密、最温柔的方式，向你敞开心扉。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到塔拉斯普城堡，你会忘记呼吸。它不是缓缓出现在地平线上，而是像一头巨大的、沉睡的白色史前巨兽，骤然从翠绿的山丘和深蓝色的恩嘎丁天空之间崛起，带着一种近乎傲慢的孤独感，牢牢楔入你的视野。车子在盘山公路上每转过一个弯，它就变得更大、更不真实一些。那种白，不是娇柔的雪白，而是经历了千年风吹日晒后，一种粗粝的、带着历史包浆的骨白色，在阿尔卑斯刺眼的阳光下，反射出沉默而坚硬的光。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你把车停在山脚下那个宁静得只剩下溪流声和牛铃声的小村庄，开始沿着蜿蜒的碎石小径向上徒步时，所有的感官才真正苏醒。空气里是干草、松针和远处高山牧场传来的淡淡粪肥气味，混合成一种极其洁净又原始的土地气息。你的脚步声、略微急促的呼吸声，是这环境中唯一的节奏。直到走近了，你才听见风穿过城堡高塔窗洞时发出的呜咽，像一声悠长的叹息。城堡脚下，零星散落着几户人家，木屋阳台开满了天竺葵，一位老奶奶正不紧不慢地收着晾晒的床单——这座庞然大物，对他们而言不是景点，而是生活里一个沉默而坚实的背景，是每日推开窗就能见到的老邻居。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过厚重的拱形城门，踏入内庭的瞬间，时间流速陡然变缓。石头庭院被高墙围合，阳光只能斜斜地切下一角，明暗对比异常强烈。脚下是凹凸不平、被无数脚步磨得温润的原石地面。这里没有喧嚣的旅游团，没有叫卖声，只有一种巨大的、被精心维护着的寂静。你突然明白了这座城堡最核心的魅力：它不是一件被圈禁起来的文物，而是一个被爱唤醒的活体。从里到外，从每一块修补过的石砖到大厅里光泽柔润的古董家具，都透着一股“家”的温度。它孤傲地屹立了千年，如今却以一种最私密、最温柔的方式，向你敞开心扉。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`塔拉斯普城堡（恩嘎丁山谷的守护者）`} />
                <InfoRow label="英文名称" value={`Tarasp Castle`} />
                <InfoRow label="正式名称" value={`Tarasp Castle`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`格劳宾登州，塔拉斯普村`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座见证了千年欧洲领主纷争、数度易主却从未被武力攻克的传奇堡垒，最终成为瑞士境内极少数由私人完整修复并拥有的国家级历史纪念碑。`} />
                <InfoRow label="建筑特色" value={`一座宛如从山岩中生长出来的庞大白色城堡建筑群，拥有高耸的主塔、层层叠叠的防御工事、童话般的红色尖顶以及保存完好的文艺复兴时期内部大厅。`} />
                <InfoRow label="建筑风格" value={`以中世纪罗马式与哥特式防御建筑为核心，混合了后期文艺复兴与巴洛克风格的内部装饰，形成独特的“恩嘎丁-提洛尔”山地城堡风格。`} />
                <InfoRow label="文化价值" value={`它是下恩嘎丁地区罗曼什语言与文化的精神象征，其保存与修复史本身就是一部关于文化传承、私人情怀与历史责任的现代史诗。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡通常于每年六月至十月中旬对公众开放，具体为每周二至周日的上午10点至下午5点。最后入场时间为下午4点。七月和八月为旺季，每天开放。请注意，城堡内部仅限导览游进入，导览团通常每小时或每半小时一团，淡季时可能减少为每日两至三团。冬季（十月下旬至次年五月）城堡外部可以远观，但内部关闭维护。前往前务必在官网或当地旅游信息中心确认最新时刻表。`} />
              <InfoRow label="门票价格" value={`成人票约为18瑞士法郎。优惠票（学生、老年人、团体）约为15瑞士法郎。家庭票（2成人+最多4名儿童）有优惠。6岁以下儿童免费。门票费用已包含强制参加的导览游（提供德语、英语、意大利语讲解册或部分时段有英语导览）。仅参观城堡庭院和咖啡馆无需门票。`} />
              <InfoRow label="地址" value={`Tarasp Castle, 7553 Tarasp, Switzerland`} />
              <InfoRow label="交通方式" value={`最近的国际机场是苏黎世机场或意大利的米兰马尔彭萨机场。最经典的火车之旅是从苏黎世或库尔出发，乘坐著名的雷蒂亚铁路（RhB）窄轨火车，穿行于联合国教科文组织世界遗产阿尔布拉线/伯尔尼纳线景观中，抵达风景如画的施库奥尔（Scuol）车站。从施库奥尔火车站前广场，换乘前往塔拉斯普村的邮政巴士（PostBus），约10-15分钟即可到达城堡山脚下的小村广场，班次每小时至少一班。全程从苏黎世出发约需3.5-4小时，但火车本身就是顶级体验。自驾可将车停在山下村庄的指定停车场，然后沿着标志清晰的徒步小径步行约15-20分钟上山。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起塔拉斯普的故事，得把时钟拨回到公元11世纪那个蛮荒与信仰交织的年代。那时候，这片山谷还不属于瑞士，它是神圣罗马帝国边疆一块富饶又危险的领地。据说，最早在这里打下第一块基石的，是一位名叫“塔拉斯普”的骑士，城堡和村庄因此得名。但真正让城堡初具规模的，是此后统治这里近五百年的“塔拉斯普领主”家族。他们可不是什么善男信女，而是靠着收取过路费、经营银矿和时不时搞点“骑士劫掠”生意发家的地方豪强。那些厚达数米的城墙、陡峭的悬崖基座、层层设防的城门，都是为了应对邻邦的嫉妒和山下商旅的怒火。有趣的是，虽然战火频仍，但凭借天险，塔拉斯普城堡在冷兵器时代从未被正面攻陷过，它就像一块啃不动的硬骨头，倔强地矗立着。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转折发生在16世纪初，一场没有硝烟的战争改变了它的命运——宗教改革。当时的领主乌尔里希·冯·塔拉斯普是个狂热的天主教徒，而他统治的恩嘎丁山谷大部分地区却皈依了新教。信仰的撕裂让他众叛亲离，最终在1548年，面对内忧外患，乌尔里希不得不做出一个痛苦的决定：将祖传的城堡和领地，卖给了信奉天主教的奥地利哈布斯堡王朝。从此，这座城堡飘扬起奥地利的旗帜，成为哈布斯堡在阿尔卑斯山南麓的一个重要前哨。奥地利人带来了新的管理方式和文艺复兴的风潮，城堡内部一些最华美的房间，比如装饰着精美灰泥天花板和华丽壁炉的大厅，就是在这个时期改建的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的洪流从未停歇。1803年，拿破仑重组欧洲版图，将包括塔拉斯普在内的这片土地划给了瑞士。城堡从此成了瑞士联邦的财产，但尴尬的是，它身处一个以新教为主的国度，自身却是个天主教的“遗孤”，用途不明。在之后的近一个世纪里，它被用作过仓库、监狱，甚至一度面临被拆除卖石的命运。它就像一个被遗忘的巨人，在风吹雨打中迅速衰败，壁画剥落，屋顶坍塌，几乎沦为废墟。直到1900年，一位来自德国德累斯顿的“骑士”出现了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这位“骑士”不是中世纪的那种，而是一位名叫卡尔·奥古斯特·林德（Karl August Linger）的古怪天才，他是发明家、艺术家，更是位梦想家。他几乎是疯狂地爱上了这座废墟，倾尽全部家财从瑞士政府手中买下了城堡。此后的几十年，他把自己变成了一个中世纪工匠，亲自设计、筹款、监督修复。他修复的不只是石头和木头，更是一个关于骑士精神与家园的梦。他去世后，他的后代继承了他的遗志，至今，林德家族仍居住并守护着这座城堡。这是一个现代童话：一位 outsider 用毕生的爱，拯救并复活了一个国家的记忆。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正品味塔拉斯普，请务必安排一整天的时间给这个角落。建议早上十点前从施库奥尔出发，搭乘早班邮政巴士抵达塔拉斯普村。先在村里闲逛片刻，感受一下被城堡阴影笼罩的宁静，然后在十点半左右开始徒步上山，此时光线柔和，气温适宜。参加上午的导览团（通常11点左右有一场），能在人流相对较少时深入城堡核心。导览结束后，不要急着离开，一定要在城堡咖啡馆的露台上享用一顿简单的午餐，对着无敌山谷景致发呆。下午可以细细探索城堡外围的防御工事和小径，从不同角度欣赏它的雄姿。最后，在傍晚光影最魔幻的时刻下山，回到村庄，或许还能赶上小教堂的晚钟。这样的节奏让你既能吸收密集的历史信息，又有足够的时间让这座城堡的氛围慢慢浸润你。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`导览团是进入城堡内部的唯一方式，且名额有限，强烈建议在官网提前预订，尤其是在七月和八月的旺季。
上山徒步小径虽已修缮，但仍是碎石坡路，请务必穿一双舒适防滑的徒步鞋，高跟鞋或皮鞋会让你寸步难行。
恩嘎丁山区天气变化极快，即使夏日也请随身携带一件防风外套或薄羽绒，城堡高处风大且温度可能骤降。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从村庄广场开始，沿着两旁开满野花、标记清晰的“通往城堡”徒步小径缓缓上行，让身体和心情都做好朝圣的准备。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过那座横跨深涧、令人腿软的古老石桥，站在桥中央感受脚下虚空与眼前巨岩带来的双重震撼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随导览员推开那扇厚重包铁的木门，踏入光线幽暗的骑士大厅，第一时间去触摸那些冰凉但纹路清晰的千年石墙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在挂满历代主人肖像的长廊里驻足，仔细听向导讲述林德家族修复城堡时那些近乎偏执的趣闻轶事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上狭窄蜿蜒的螺旋楼梯，抵达视野豁然开朗的主塔顶楼，360度环视被雪峰环绕的恩嘎丁山谷全境。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`导览结束后，一定要去城堡庭院角落那个由古老马厩改造的小咖啡馆，点一杯本地草药茶，坐在露天长椅上什么也不做。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着城堡东侧的防御墙小路走一圈，从每一个垛口望出去，你都会发现一幅构图截然不同的中世纪风景画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山时选择另一条穿过林间的小路，回头望，城堡在暮色中亮起暖黄色的灯，像一枚镶嵌在山体中的古老琥珀。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡远眺全景机位`}</h4>
                  <p className="text-sm text-gray-700">{`自驾或乘巴士从施库奥尔驶往塔拉斯普村的路上，在即将进入村庄前的最后一个大弯道处，有一片开阔的草地，下午顺光时能拍到城堡矗立于绿色山坡与背后雄伟雪峰之间的标准明信片角度。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`古桥仰拍压迫感视角`}</h4>
                  <p className="text-sm text-gray-700">{`站在通往城堡主入口的古石桥桥头，用广角镜头向上仰拍，将桥的弧线与高耸入云的白色城堡塔楼一同纳入画面，清晨或傍晚的低角度光线能强化石头的质感和建筑的雄伟。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`庭院拱门框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`进入城堡内庭后，找到连接不同院落的那座低矮罗马式拱门，透过深沉的拱门门洞去拍摄对面被阳光照亮的塔楼或鲜花装点的窗台，形成绝佳的景深和框架构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`塔楼顶层的守望者视角`}</h4>
                  <p className="text-sm text-gray-700">{`登上主塔后，不要只拍风景，将相机镜头对准垛口本身，让厚重的石头前景虚化，聚焦于远方山谷的田园村落和蜿蜒河流，拍出“中世纪守卫眼中的世界”之感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`山下村庄的烟火气对照`}</h4>
                  <p className="text-sm text-gray-700">{`下山后，在塔拉斯普村的小教堂附近，以本地人色彩斑斓的木屋阳台和盛开的鲜花为前景，背景是云雾缭绕中的城堡，拍出历史巨人与宁静日常共存的生动一刻。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`城堡内部绝大多数房间禁止拍照，以保护珍贵的壁画和家具，请务必遵守规定，导览员会明确告知可拍摄的区域。`}</li>
                <li>• {`使用无人机在瑞士受到严格管制，在城堡及村庄上空飞行基本不被允许，请勿尝试，以免面临高额罚款。`}</li>
                <li>• {`山区光线强烈且反差大，拍摄建筑外部时建议使用RAW格式，方便后期调整高光和阴影细节，还原石头墙面的丰富层次。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`山村秘境`}</h4>
                  <p className="text-sm text-blue-800">{`塔拉斯普村里仅有的一家家庭式旅馆，房间不多但一尘不染，老板娘会端出自制的恩嘎丁果酱早餐，夜晚安静得只能听到星星的声音。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`温泉小镇核心`}</h4>
                  <p className="text-sm text-green-800">{`住在山下的施库奥尔镇，选择一家带罗马-爱尔兰浴场历史的温泉酒店，白天探访城堡，晚上用富含矿物质的温泉水洗去一身疲惫。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高山牧场体验`}</h4>
                  <p className="text-sm text-yellow-800">{`在城堡对面的半山腰上，有几家由传统高山牧屋改造的民宿，需要开车或徒步一段才能到达，推开窗就是与城堡平视的震撼视角，伴随牛铃声入眠。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计美学隐居`}</h4>
                  <p className="text-sm text-purple-800">{`恩嘎丁山谷以低调奢华的设计酒店闻名，在邻近的切勒里纳或圣莫里茨寻找一家，在极简主义与自然相融的空间里，回味白日城堡的厚重历史。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`塔拉斯普村的住宿极为有限，必须提前数月预订，尤其夏季和滑雪季。住在施库奥尔是更灵活舒适的选择，交通和餐饮选择都丰富得多。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`恩嘎丁地区治安极好，但山区住宿普遍不配备空调，夏季夜晚凉爽，冬季暖气充足，请放心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`许多传统家庭旅馆的入住和退房时间可能比较早，并且周日很多商店和餐厅关门，计划行程时需留意。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开塔拉斯普很久以后，那座白色城堡的形象并没有在记忆中模糊，反而愈发清晰。它带给我的触动，远不止于建筑的精美或历史的厚重。在这个一切都被加速、被消费、被简单标签化的时代，塔拉斯普像是一个固执的“异类”。它没有选择成为一个人声鼎沸的主题公园，也没有沦为一个仅供远观的冰冷地标。它选择了一条更艰难、也更珍贵的路：作为一个被深爱着的“家”而存在。这份爱，来自一个多世纪前那个异乡人林德先生，也延续于他后代默默的守护之中。你在这里感受到的每一份宁静、看到的每一处修缮细节，都是这份爱的实体化。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位热爱深度游的旅人，都该来一次塔拉斯普。它教会我们的，或许正是“深度”二字的真谛。深度游不仅仅是看更多的房间，记更多的年份，而是去感知一个地方的心跳，去理解它何以成为如今的模样。在这里，你会看到历史不是教科书上干巴巴的条文，而是家族兴衰、个人抉择与时代洪流交织成的动人故事；你会看到文化传承不是政府的口号，可以是一个人倾家荡产的浪漫与坚持。这座孤傲的城堡，最终用它被爱重塑的生命，温暖了每一个前来拜访的人。它静静地告诉你：有些美好，值得用一生去守护；有些旅程，能让你看见时间深处最坚韧的光。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/alpina-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔卑纳城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alpina Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/spiez-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施皮茨城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Spiez Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lunigo-roman-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卢
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卢尼古罗马遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Roman Ruins of Lunnigo</p>
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
