import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '海尔贝施泰因城堡 Herberstein Castle｜峡谷中的骑士古堡与生命花园 - 最佳欧洲景点',
  description: '当你第一次驱车接近海尔贝施泰因时，它并不会像新天鹅堡那样戏剧性地出现在明信片般的山巅。相反，你需要沿着一条蜿蜒下降的窄路，驶入一个被茂密森林包裹的、越来越深的峡谷。空气骤然变得清凉湿润，充满了苔藓、腐殖土和溪流的气息。然后，在某个拐角，它出现了——不是整体，而是一角塔楼或一段城墙，从墨绿的树冠间探出...',
}

export default function HerbersteinCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '奥地利', href: '/destinations/austria' },
            { label: '海尔贝施泰因城堡', href: '/attractions/herberstein-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`海尔贝施泰因城堡・Herberstein Castle・奥地利・圣约翰`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你第一次驱车接近海尔贝施泰因时，它并不会像新天鹅堡那样戏剧性地出现在明信片般的山巅。相反，你需要沿着一条蜿蜒下降的窄路，驶入一个被茂密森林包裹的、越来越深的峡谷。空气骤然变得清凉湿润，充满了苔藓、腐殖土和溪流的气息。然后，在某个拐角，它出现了——不是整体，而是一角塔楼或一段城墙，从墨绿的树冠间探出头来，牢牢抓附在近乎垂直的灰白色岩壁上。那种感觉不像参观，更像是一次“发现”，仿佛闯入了一个被时光遗忘的隐秘王国。
穿过横跨在深邃涧谷之上的石桥，轰鸣的水声从脚下传来。城堡入口并不张扬，但一进去，世界的喧嚣就被隔绝在外。你会立刻被两种并行的魔力吸引。一边是石头的气息：古老城门洞下的阴凉、庭院里被岁月磨光的铺路石、骑士大厅里冷冽而干燥的空气。另一边，却是蓬勃的生命之音：从隔壁动物园方向隐隐传来的奇异鸟鸣、孩子们的欢笑、以及风中混合着的干草与动物的气味。这种历史沧桑感与鲜活生命力的奇异共存，是海尔贝施泰因最初也最持久的魅力。
在当地人心中，这里远不止是一个景点。它是周末全家出行的目的地，孩子们来看狮子与长颈鹿，长辈们在巴洛克花园的长椅上享受阳光。它是学校生物课的户外课堂，也是年轻人举办森林婚礼的梦幻场地。城堡咖啡馆里飘出的现磨咖啡香和刚出炉的苹果卷（Apfelstrudel）的甜香，与几个世纪前可能飘荡在此处的烤肉与麦酒香气隐隐重叠。这座城堡活着，以一种出乎意料又无比亲切的方式，深深嵌入了现代生活的肌理。
最打动人的，或许正是这种毫不违和的多重性。你可以上一刻还在惊叹于大厅天花板上一幅17世纪的寓言壁画，下一刻就从窗口望见一只优雅的雪豹在下方岩坡上漫步。历史不是被封存在玻璃柜里，而是与奔跑、吼叫、飞翔的生命共享同一片峡谷的阳光与风雨。这种奇妙的对话，让坚硬的石头有了温度，也让鲜活的生命承载了时间的重量。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你第一次驱车接近海尔贝施泰因时，它并不会像新天鹅堡那样戏剧性地出现在明信片般的山巅。相反，你需要沿着一条蜿蜒下降的窄路，驶入一个被茂密森林包裹的、越来越深的峡谷。空气骤然变得清凉湿润，充满了苔藓、腐殖土和溪流的气息。然后，在某个拐角，它出现了——不是整体，而是一角塔楼或一段城墙，从墨绿的树冠间探出头来，牢牢抓附在近乎垂直的灰白色岩壁上。那种感觉不像参观，更像是一次“发现”，仿佛闯入了一个被时光遗忘的隐秘王国。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过横跨在深邃涧谷之上的石桥，轰鸣的水声从脚下传来。城堡入口并不张扬，但一进去，世界的喧嚣就被隔绝在外。你会立刻被两种并行的魔力吸引。一边是石头的气息：古老城门洞下的阴凉、庭院里被岁月磨光的铺路石、骑士大厅里冷冽而干燥的空气。另一边，却是蓬勃的生命之音：从隔壁动物园方向隐隐传来的奇异鸟鸣、孩子们的欢笑、以及风中混合着的干草与动物的气味。这种历史沧桑感与鲜活生命力的奇异共存，是海尔贝施泰因最初也最持久的魅力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当地人心中，这里远不止是一个景点。它是周末全家出行的目的地，孩子们来看狮子与长颈鹿，长辈们在巴洛克花园的长椅上享受阳光。它是学校生物课的户外课堂，也是年轻人举办森林婚礼的梦幻场地。城堡咖啡馆里飘出的现磨咖啡香和刚出炉的苹果卷（Apfelstrudel）的甜香，与几个世纪前可能飘荡在此处的烤肉与麦酒香气隐隐重叠。这座城堡活着，以一种出乎意料又无比亲切的方式，深深嵌入了现代生活的肌理。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，或许正是这种毫不违和的多重性。你可以上一刻还在惊叹于大厅天花板上一幅17世纪的寓言壁画，下一刻就从窗口望见一只优雅的雪豹在下方岩坡上漫步。历史不是被封存在玻璃柜里，而是与奔跑、吼叫、飞翔的生命共享同一片峡谷的阳光与风雨。这种奇妙的对话，让坚硬的石头有了温度，也让鲜活的生命承载了时间的重量。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`海尔贝施泰因城堡`} />
                <InfoRow label="英文名称" value={`Herberstein Castle`} />
                <InfoRow label="正式名称" value={`Schloss Herberstein`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`圣约翰`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座跨越七个多世纪、从未离开创始家族掌握的古老堡垒，如今演变为欧洲最独特的历史与自然生命交汇之所。`} />
                <InfoRow label="建筑特色" value={`雄踞于嶙峋石灰岩山脊之上，融合了坚固的中世纪防御工事与后来增添的宜居宫殿翼楼，形成错落有致的建筑群。`} />
                <InfoRow label="建筑风格" value={`以厚重的晚期哥特式为核心，点缀着文艺复兴时期的优雅拱廊与巴洛克式的华丽内部装饰，是一部立体的建筑史书。`} />
                <InfoRow label="文化价值" value={`它代表了奥地利贵族庄园从封闭的军事据点，向开放的自然哲学与公众教育中心转变的活态标本。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡与动物园的开放时间根据季节有显著变化。通常，夏季（四月至十月）每天上午9:00至下午6:00开放，最后入场时间为下午5:00。冬季（十一月至三月）开放时间缩短，通常为上午10:00至下午4:00，且部分周一会闭馆维护。动物园区域在恶劣天气（如暴雪、雷暴）下部分室外展区可能临时关闭。重要节假日如圣诞节（12月24-25日）和新年（1月1日）全天关闭，建议行前务必在其官方网站查看最新日历。`} />
              <InfoRow label="门票价格" value={`门票采用组合票制。标准成人票（包含城堡导览、动物园及所有花园）约为24欧元。6至15岁青少年票约为12欧元，家庭票（2成人+最多3名儿童）约为54欧元，性价比很高。持有学生证、残疾人证及65岁以上老人可享受约2欧元的折扣。门票在线预订有时会有小幅优惠，但现场购票也很方便。需要注意的是，单独参观动物园或仅参观城堡的票种选择较少，联票是最佳选择。`} />
              <InfoRow label="地址" value={`Herberstein 1, 8222 St. Johann bei Herberstein, Austria`} />
              <InfoRow label="交通方式" value={`从最近的国际机场格拉茨机场（GRZ）出发，最佳方式是租车自驾，沿B72公路向东行驶约40分钟即可抵达，沿途施泰尔马克州的绿色丘陵风光本身就是享受。若依靠公共交通，可从格拉茨中央火车站（Graz Hauptbahnhof）乘坐区域火车（S-Bahn）到“St. Johann bei Herberstein”站，车程约35分钟，班次每小时1-2班。但从火车站到城堡还有约3公里的路程，可以选择乘坐等候在站外的少量出租车（需提前电话预约），或者在天气晴好时，沿着指示清晰的乡间小路徒步30-40分钟，这段徒步会先让你领略到城堡所在的深邃峡谷地貌。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要追溯到13世纪中期。当时，这片险峻的峡谷是施泰尔马克公爵领地东部边境的一道天然屏障。大约在1260年左右，一个名叫“奥托·冯·海尔贝施泰因”的骑士获得了这块土地，并以自己的名字在此修筑了第一座堡垒。最初的城堡纯粹是为了防御，控制峡谷通道，风格必然粗犷而坚固。有趣的是，从那时起至今的750多年里，这座城堡的所有权从未通过出售易主，一直在海尔贝施泰因家族的血脉中传承，这在整个欧洲都极为罕见，也为它积累了一层又一层连续的历史年轮。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`中世纪晚期的海尔贝施泰因家族凭借这里的战略地位和自身的勇武，地位不断上升。到了15世纪，城堡进行了大规模扩建，增强了其防御能力，我们今天看到的许多核心结构，比如那厚重的城墙和主塔，都成形于这个战乱频仍的时代。然而，随着火药武器的出现和边境局势的稳定，城堡的军事价值逐渐降低。16世纪文艺复兴的春风吹进了这座峡谷。当时的主人，西格蒙德·冯·海尔贝施泰因，是一位受过良好教育、游历甚广的人文主义者。他不再满足于住在阴暗的堡垒里，于是大兴土木，增建了拥有明亮大窗户和优雅拱廊的居住翼楼。城堡开始从“要塞”向“家园”转变，房间变得宽敞，墙上出现了壁画，引入了当时最新的生活理念。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`17世纪的巴洛克风潮则为其内部空间注入了奢华与戏剧性。华丽的灰泥装饰、宏大的宴会厅、视野开阔的露台相继出现。尤其是那个时期建造的巴洛克花园，试图以几何秩序“驯服”峡谷一侧的野性自然，至今仍是城堡最美的装饰之一。家族成员中不乏学者、博物学家和艺术赞助人，城堡里积累起大量的藏书、科学仪器和艺术收藏。可以说，到18世纪，海尔贝施泰因已经从一个武士之家，彻底转变为了一个崇尚知识与美学的贵族文化沙龙。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的第二次巨变发生在20世纪下半叶。1960年代，当时的城堡主人决定将家族对自然的热爱付诸一个更大胆的实践：在城堡所属的广阔林地与草地中，建立一座现代动物园。这不是一个随意的决定，而是秉承了欧洲贵族私设“珍奇屋”和 menagerie（皇家动物园）的传统，但将其彻底现代化、科学化。动物园专注于濒危物种的保育，尤其是大型猫科动物和食草动物，其圈舍设计尽可能模拟自然栖息地，与峡谷地貌完美融合。于是，这座见证了骑士、贵族与学者故事的古老石堡，找到了一个充满生命力的新使命。它不再仅仅是家族的历史陈列馆，更成为一个向公众开放，致力于自然保护与教育的生命殿堂，完成了从私人堡垒到公共财富的华丽转身。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天时间（至少6小时）进行深度游览，节奏宜舒缓。最佳抵达时间是上午9点30分开门后不久，此时旅游团尚未大量涌入，动物们也最为活跃。整体游览应采用“由外至内，由自然至历史”的节奏。上午先探索充满活力的动物园与花园，让感官被自然生命唤醒；午后当阳光最盛时，转入凉爽的城堡内部，沉浸于数百年的历史叙事中。这样的安排符合光线变化，也能有效错开人流，并在体力下降时进入更多需要静心观赏的室内区域。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`动物园面积很大且多坡，务必穿一双非常舒适耐走的鞋。峡谷天气多变，即使是夏季也建议带一件轻便防风外套。城堡内部部分房间温度较低且地面光滑，穿着需兼顾保暖与防滑。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主入口径直走下斜坡，首先让自己沉浸在童话般的“峡谷世界”中，倾听溪流与鸟鸣的交响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着清晰标示的环形小径穿越动物园，重点在开阔的非洲草原区等待长颈鹿优雅地走过以城堡为背景的山坡。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在动物园中部的休息点喝一杯饮品，观察一旁岩山上雪豹慵懒的姿态，对比其柔韧与城堡的刚硬。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从动物园绕回，在正午前踏入城堡宁静的巴洛克花园，在玫瑰与黄杨拼成的图案间寻找俯瞰峡谷的最佳视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参加定时的德语/英语城堡导览（或租用语音向导），从阴暗的地窖开始，聆听关于囚犯与储酒的古老传说。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`缓缓登上主楼，让眼睛适应骑士大厅的宏伟，特别注意那些未被战争摧毁的、颜色依然鲜亮的家族纹章壁画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在文艺复兴翼楼的拱廊下驻足，感受从庭院吹来的风，想象贵族们曾在此争论哲学或欣赏音乐的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`结束室内游览后，一定要去城堡露台咖啡馆，点一份经典的“海尔贝施泰因蛋糕”，对着峡谷全景消化一整天的见闻。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`峡谷入口仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光时分，站在进入城堡区前的停车平台附近，用长焦镜头压缩空间，捕捉城堡建筑群层叠错落、与背后森林岩壁融为一体的壮观景象。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`巴洛克花园框景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，站在花园下层几何花坛的尽头，利用整齐的黄杨绿篱作为前景框，将远处的城堡主塔和飞舞的鸽群一同收纳进画面，营造秩序与历史感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`动物园与城堡结合`}</h4>
                  <p className="text-sm text-gray-700">{`在非洲动物区靠近城堡围墙的观景台，等待长颈鹿或斑马走到画面中景，以远处坚实的城堡石墙为背景，拍下自然生灵与古老人类造物同框的独特时刻。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`骑士大厅的窗景`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光透过古老的菱形玻璃窗投入昏暗大厅时，聚焦于窗框本身以及在地板上投下的、随着尘埃舞动的光影图案，捕捉时间流动的静谧瞬间。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城堡桥下溪流慢门`}</h4>
                  <p className="text-sm text-gray-700">{`如果带有三脚架，可以在参观结束后，走到城堡入口石桥的下游溪边，用慢门拍摄丝绸般的流水，以桥洞和上方城堡的一角为静态背景，画面充满动与静的哲学。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用变焦镜头非常有用，便于捕捉远处岩壁上的动物和建筑细节。请注意，在城堡内部某些特定房间（会有明确标识）是禁止摄影的，多为保护脆弱的壁画和纺织品。拍摄动物时请关闭闪光灯，以免惊吓它们。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温馨家庭旅馆`}</h4>
                  <p className="text-sm text-blue-800">{`住在城堡附近小镇“圣约翰”的家庭式旅馆，主人常是世代居住于此的当地人，能为你讲述地图上没有的峡谷传说，早餐桌上的果酱是自家院子出品。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史庄园体验`}</h4>
                  <p className="text-sm text-green-800">{`距离城堡车程15分钟范围内，有几座由昔日贵族庄园改造的精品酒店，住客可以骑着酒店的马匹在森林中漫游，从另一个角度感受海尔贝施泰因的土地。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`现代设计隐居`}</h4>
                  <p className="text-sm text-yellow-800">{`如果你偏爱简洁，格拉茨市区有不少设计酒店是不错选择，白天深入峡谷探秘，夜晚回到城市的咖啡馆与酒吧，享受古今生活的双重节奏。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`自然疗愈民宿`}</h4>
                  <p className="text-sm text-purple-800">{`峡谷周边散落着提供“森林浴”体验的民宿，有的甚至拥有自己的有机花园和桑拿木屋，适合在一天的步行后彻底放松身心。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季和秋季周末的住宿非常紧俏，尤其是城堡周边的特色住所，务必提前数月预订。施泰尔马克州乡间治安极好，但夜间道路照明较少，如果自驾需留意。选择格拉茨住宿则能获得更多餐饮选择，但需付出每日往返的通勤时间。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开海尔贝施泰因时，我背包里仿佛装满了矛盾却又和谐的东西：岩石的冷峻与动物的体温，盔甲的铁锈味与玫瑰的花香，骑士的古老誓言与孩子面对犀牛时发出的纯粹惊叹。这座城堡教会我的，是一种“层叠的智慧”。它没有试图将历史做成一个僵化的标本，也没有将自然圈养成纯粹的背景。它让它们共存、对话，甚至彼此滋养。走在其中，你能感觉到时间不是一条直线，而是一个漩涡，中世纪的刀光剑影、文艺复兴的思想火花、巴洛克的审美激情，以及当代对生命万物的关怀，所有这些层次都同时在场，都在低语。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、热衷贴标签的世界里，海尔贝施泰因是一个温柔的抵抗。它拒绝被简单地定义为“城堡”或“动物园”。它邀请你慢下来，去发现峡谷里一块可能见证过无数次攻防的岩石，现在正被一只蜥蜴惬意地晒着太阳；去理解一个曾经只为保护一个家族的空间，如今如何敞开怀抱，保护着来自遥远大陆的众多生命。它告诉我们，真正的深度，不在于历史的久远或收藏的珍贵，而在于一种持续演进、包容万千的生命力。每一位热爱深度游的旅人，都应该来这里上一堂无声的课——关于时间、生命，以及如何让一座古老的石堡，在21世纪依然跳动着一颗温暖而年轻的心。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/admont-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿德蒙特修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Admont Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/scharding-baroque-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    谢
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">谢尔丁</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Schärding</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/st-wolfgang-white-horse-inn-pilgrimage-church" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣沃尔夫冈（白马酒店与绝美朝圣教堂）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">St. Wolfgang im Salzkammergut</p>
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
