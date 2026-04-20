import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '莫斯塔尔老桥 Stari Most｜凝视波黑伤痕与重生的翡翠之眼 - 最佳欧洲景点',
  description: '第一眼看到莫斯塔尔老桥，你会觉得它不像桥，更像一个悬浮在空中的奇迹。它那一道优雅得近乎轻盈的石拱，就那么静静地架在两岸陡峭的石灰岩峡谷之上，底下是泛着翡翠光泽、湍急冰冷的内雷特瓦河。石头是温暖的蜜色，在巴尔干半岛的阳光下，闪烁着几百年来被无数鞋底打磨出的温润光泽。你光是站在河岸这边看着，心里都会犯怵...',
}

export default function StariMostMostarPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '莫斯塔尔老桥', href: '/attractions/stari-most-mostar' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`莫斯塔尔老桥・Stari Most・波斯尼亚和黑塞哥维那・莫斯塔尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到莫斯塔尔老桥，你会觉得它不像桥，更像一个悬浮在空中的奇迹。它那一道优雅得近乎轻盈的石拱，就那么静静地架在两岸陡峭的石灰岩峡谷之上，底下是泛着翡翠光泽、湍急冰冷的内雷特瓦河。石头是温暖的蜜色，在巴尔干半岛的阳光下，闪烁着几百年来被无数鞋底打磨出的温润光泽。你光是站在河岸这边看着，心里都会犯怵：古人是怎么把石头垒得这么高、这么陡，又这么美的？
走近了，感官才真正被唤醒。脚下是光滑到有些溜脚的老石头，巨大的石板被岁月切割出细密的纹理。河风带着水汽扑面而来，混合着老城区咖啡馆飘来的、浓得化不开的波斯尼亚咖啡香，还有旁边烤肉铺子滋滋作响的Čevapi（一种烤肉饼）的烟熏味。耳朵里是多重奏：河水永不停歇的轰鸣，桥那头清真寺宣礼塔传来的悠扬唤拜声，街头艺人弹奏的悲伤的Sevdah民歌，以及游客们踩在石头上发出的清脆回响。你会发现，当地人也把这里当作生活的十字路口。老人们坐在桥头咖啡馆，一抽就是一下午的水烟；穿着足球衫的男孩们嬉笑着从你身边跑过；而最引人注目的，是那些皮肤晒成古铜色的桥夫——他们站在拱桥的最高点，如同雕塑，凝视着下方深渊般的河水，准备为了一笔小费纵身跃下。
这座桥的魅力，远不止于它的建筑之美。它有一种沉重的、磁石般的力量，吸引你站定，思考。你会看到桥两端的建筑上，依然留着90年代那场残酷战争留下的、密密麻麻的弹孔，像无法愈合的疮疤。而崭新的老桥，就矗立在这些伤痕之中，洁白、完整、近乎神圣。这种新与旧、毁灭与重生、伤痛与希望的极端对比，在同一个画面里猛烈地冲撞着你，让你瞬间明白，为什么这座桥会是整个国家的精神心脏。它不是冰冷的文物，它是一个活着的、呼吸着的见证者，每一天都在默默诉说着关于断裂与连接的故事。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到莫斯塔尔老桥，你会觉得它不像桥，更像一个悬浮在空中的奇迹。它那一道优雅得近乎轻盈的石拱，就那么静静地架在两岸陡峭的石灰岩峡谷之上，底下是泛着翡翠光泽、湍急冰冷的内雷特瓦河。石头是温暖的蜜色，在巴尔干半岛的阳光下，闪烁着几百年来被无数鞋底打磨出的温润光泽。你光是站在河岸这边看着，心里都会犯怵：古人是怎么把石头垒得这么高、这么陡，又这么美的？`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，感官才真正被唤醒。脚下是光滑到有些溜脚的老石头，巨大的石板被岁月切割出细密的纹理。河风带着水汽扑面而来，混合着老城区咖啡馆飘来的、浓得化不开的波斯尼亚咖啡香，还有旁边烤肉铺子滋滋作响的Čevapi（一种烤肉饼）的烟熏味。耳朵里是多重奏：河水永不停歇的轰鸣，桥那头清真寺宣礼塔传来的悠扬唤拜声，街头艺人弹奏的悲伤的Sevdah民歌，以及游客们踩在石头上发出的清脆回响。你会发现，当地人也把这里当作生活的十字路口。老人们坐在桥头咖啡馆，一抽就是一下午的水烟；穿着足球衫的男孩们嬉笑着从你身边跑过；而最引人注目的，是那些皮肤晒成古铜色的桥夫——他们站在拱桥的最高点，如同雕塑，凝视着下方深渊般的河水，准备为了一笔小费纵身跃下。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座桥的魅力，远不止于它的建筑之美。它有一种沉重的、磁石般的力量，吸引你站定，思考。你会看到桥两端的建筑上，依然留着90年代那场残酷战争留下的、密密麻麻的弹孔，像无法愈合的疮疤。而崭新的老桥，就矗立在这些伤痕之中，洁白、完整、近乎神圣。这种新与旧、毁灭与重生、伤痛与希望的极端对比，在同一个画面里猛烈地冲撞着你，让你瞬间明白，为什么这座桥会是整个国家的精神心脏。它不是冰冷的文物，它是一个活着的、呼吸着的见证者，每一天都在默默诉说着关于断裂与连接的故事。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`莫斯塔尔老桥`} />
                <InfoRow label="英文名称" value={`Stari Most`} />
                <InfoRow label="正式名称" value={`Stari Most`} />
                <InfoRow label="国家" value={`波斯尼亚和黑塞哥维那`} />
                <InfoRow label="城市" value={`莫斯塔尔`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座始建于16世纪的奥斯曼帝国杰作，在1992-95年波黑战争中被刻意炸毁，并于2004年依原样重建，成为国家和解与世界文化遗产的象征。`} />
                <InfoRow label="建筑特色" value={`一座优美的单孔石拱桥，以其极高的拱顶和近乎完美的弧度著称，横跨翠绿的内雷特瓦河，宛如一道凝固的彩虹。`} />
                <InfoRow label="建筑风格" value={`经典奥斯曼帝国时期建筑风格。`} />
                <InfoRow label="文化价值" value={`它不仅仅是一座桥，更是连接莫斯塔尔历史上东西方文化、天主教与伊斯兰教社区，以及战后破碎人心的精神纽带。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`桥梁及周边区域全天24小时开放。老桥博物馆夏季（4月至10月）开放时间为上午9点至晚上7点，冬季（11月至3月）为上午10点至下午4点。部分节假日（如波黑独立日、圣诞节）开放时间可能缩短。`} />
              <InfoRow label="门票价格" value={`步行过桥免费。老桥博物馆门票：成人约5欧元（或等值可兑换马克），学生及儿童有折扣。周边塔楼（如Halebija Tower）通常包含在博物馆联票内，单独登塔约2-3欧元。`} />
              <InfoRow label="地址" value={`Stari Most, Mostar 88000, Bosnia and Herzegovina`} />
              <InfoRow label="交通方式" value={`最近的国际机场是萨拉热窝机场（SJJ），或克罗地亚的杜布罗夫尼克机场（DBV）。从萨拉热窝中央汽车站乘坐大巴前往莫斯塔尔是最常见的方式，车程约2-2.5小时，班次频繁，沿途山景壮丽，建议提前在车站购票。抵达莫斯塔尔汽车站后，老桥位于老城区中心，步行约15-20分钟即可到达，跟着人流或“Stari Most”指示牌走即可。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从1566年讲起。当时，统治这片土地的奥斯曼帝国苏丹苏莱曼大帝，下令建造一座能永久连接内雷特瓦河两岸的桥梁。之前的木桥太不稳固，无法承载日益繁荣的贸易。这个艰巨的任务，落在了帝国首席建筑师米马尔·希南的得意门生肩上（尽管具体是谁仍有争议）。传说，为了建造这座前所未有的高拱桥，工人们用了特殊的混合材料，甚至将鸡蛋清混入灰浆以增加粘合度。工程持续了九年，当最后的脚手架拆除，那座石头单拱如新月般完美升起时，整个城市都沸腾了。它被命名为“Stari Most”，意思就是“老桥”。此后的四百多年里，它不仅是物理通道，更是莫斯塔尔作为东西方贸易和文化十字路口的灵魂。桥的两端，分别发展出以清真寺和集市为主的东岸穆斯林社区，以及以教堂和钟楼为主的西岸克罗地亚族天主教社区。桥，成了他们日常相遇、交易、交谈的共同基石。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`几个世纪的风雨和战乱，老桥都奇迹般地挺了过来。奥匈帝国的统治改变了城市风貌，但老桥依然是中心。二战时炸弹在它身边落下，它也安然无恙。它看着一代代莫斯塔尔人长大、老去。桥夫从桥上跳入冰冷河水的传统，也从17世纪开始，成为年轻男子勇气与成熟的成年礼。这座桥，已经深深烙印在城市和居民的集体记忆与身份之中。然而，最大的灾难在20世纪末降临。1992年，波黑战争爆发，莫斯塔尔陷入惨烈的围城。这座美丽的古城，因其混合人口成了民族冲突的焦点。老桥，这个连接的象征，成了眼中钉。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1993年11月9日，在一整天的持续炮击后，老桥那优美的石拱终于支撑不住，轰然塌入内雷特瓦河的滚滚绿波中。那一声巨响，不仅仅是一座建筑的倒塌，更是莫斯塔尔人心碎的声音，是不同族群间信任与共存可能性的彻底崩塌。一位当地诗人悲伤地写道：“他们杀死了我们的桥，就像杀死一个活生生的人。” 战后，断桥的残骸沉在河底，两岸的废墟遥相对望，仿佛一道无法跨越的鸿沟。重建老桥，成了愈合创伤、重建共同记忆的第一步。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`国际社会伸出了援手。一个由联合国教科文组织、世界银行以及多个国家组成的专家委员会成立，目标非常明确：必须“原样”重建。工人们从河底打捞起尽可能多的原桥石料（每一块都被编号），并采用16世纪相同的开采技术和工艺，从附近的采石场获取新石。这是一个考古级别的修复工程，耗时漫长而精细。2004年7月23日，新建成的老桥重新对外开放。那一天，阳光灿烂，当第一批人缓缓走过崭新的桥面时，许多老人泪流满面。它不再是“那座古桥”，而是一个名为“希望”的新生儿。2005年，它与莫斯塔尔老城一起，被列入联合国教科文组织世界遗产名录，评语中特别强调了其“作为国际协作与和解象征的普遍价值”。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正感受老桥的灵魂，建议你在莫斯塔尔停留一整晚。最佳抵达时间是午后，先在古城里安顿下来。下午三点后开始游览，此时光线开始变得金黄柔和，适合拍照，游客也相对比正午少一些。整个深度游览可以安排4-5小时，节奏要慢，多观察，多停留。先从西岸（克罗地亚族一侧）开始，这里地势较高，可以俯瞰桥的全貌，然后慢慢下到河边，过桥，探索东岸（穆斯林社区）迷宫般的集市和清真寺，最后在日落时分回到桥边，等待华灯初上。这样的路线既能领略建筑全貌，又能深入两岸不同的文化氛围，并在最美的光线下见证桥的昼夜交替。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`桥上石板异常光滑，尤其在潮湿天气，务必穿防滑性能好的鞋子，行走时多加小心。
尊重桥夫的职业，拍照或观看跳水表演后，如果觉得精彩，可以给予适量小费以示感谢（通常放在他们的帽子里）。
老城区小巷纵横，虽然安全，但建议提前在手机里存好酒店位置的地图，因为有些小路GPS信号可能不稳定。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午时分先登上西岸的钟楼或附近咖啡馆的露台，俯瞰老桥如白色新月般嵌入翠绿峡谷与红色屋顶之间的全景画卷。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着陡峭的、被岁月打磨得光滑如鹅卵石的古老台阶缓缓向下，用手触摸两旁石墙上清晰可见的战争弹孔，感受历史的切肤之痛。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在西岸桥头，静观那些古铜色皮肤的桥夫们如何用幽默和表演向来往游客募捐，然后像箭一样刺入下方冰冷的翡翠色河流。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`慢慢地、一步一步地走过拱桥光滑的脊背，在最高点停下，感受河风拂面，低头凝视令人眩晕的河水与远处连绵的山峦。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`过桥后立刻右转，钻入库贾·阿里克清真寺的庭院，脱鞋进入静谧的祈祷大厅，聆听内心的回声与窗外尘世的喧嚣。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在东岸的“老集市”（Kujundžiluk）狭窄巷弄里迷失自己，两旁是叮当作响的铜匠铺、香气扑鼻的香料摊和挂着华丽灯饰的纪念品商店。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在河岸边的传统餐厅找一张临水的桌子，点一盘烤肉拼盘和一杯当地的啤酒，看着灯光渐渐点亮桥梁和清真寺的尖塔。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`夜幕完全降临后，再次走到桥中央，看灯光为石桥披上金色的纱衣，倒映在漆黑的河水中，与星空连成一片。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`西岸河畔仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，站在内雷特瓦河西岸的河滩上，用广角镜头将整个石拱、一部分清真寺宣礼塔以及背后的山峦一同纳入画面，此时光线温暖，能拍出桥体最富层次的质感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`古桥拱顶捕捉跳水瞬间`}</h4>
                  <p className="text-sm text-gray-700">{`在桥上中段位置，使用长焦镜头对准最高点准备跳水的桥夫，以对岸古老的石头建筑为背景，可以拍到极具动感和故事性的决定性瞬间。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`东岸山腰平台俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`沿着东岸山坡向上走，有不少当地人家的平台或小咖啡馆露台，从这里可以俯拍老桥连接两岸老城红色屋顶的全景，夜晚灯光亮起时景色尤为梦幻。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`老集市巷弄框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`在东岸集市找一个挂满铜灯或彩布的小巷深处，以这些富有当地特色的物件作为前景框架，将远处老桥的拱形轮廓框在中间，形成强烈的纵深感和文化氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`当地人对拍照大多很友善，但拍摄集市摊主或特定人物时，最好先微笑示意获得同意。使用无人机拍摄前，务必了解当地法规，部分区域可能禁飞。桥体本身的灯光在日落后半小时到全黑之间最为柔和，是拍摄蓝调时刻黄金窗口。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-blue-800">{`住在东岸由奥斯曼时期老宅改造的石墙旅馆，房间环绕着安静的庭院，夜晚能听见流水声，早晨被宣礼塔的唤拜声轻柔唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`景观首选`}</h4>
                  <p className="text-sm text-green-800">{`西岸山坡上拥有直面老桥全景阳台的精品酒店，在私密露台上就能独享从朝霞到星空的完整风光，无需与游客拥挤。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-yellow-800">{`老城边缘由家庭经营的温馨民宿，主人会为你准备丰盛的波斯尼亚早餐，并热情地分享只有本地人才知道的城市故事和历史角落。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-purple-800">{`距离老城稍远但宁静的河畔度假酒店，拥有设计感十足的现代空间与泳池，提供逃离喧嚣的舒适基地，用车或步行往返老桥都很方便。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`预订时务必确认具体位置，住在老城核心区虽然方便，但夜晚酒吧区可能有些嘈杂，浅眠者可以选择稍外围但步行可达的区域。夏季是旺季，住宿紧张且价格上浮，提前数月预订是明智之举。大多数老宅改造的住宿没有电梯，携带大件行李会略有不便。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开莫斯塔尔很久之后，脑海里最清晰的画面，不是那座桥的形态，而是站在桥上时，心里那种复杂的、沉甸甸的平静。你脚下踩着的是崭新的石头，眼睛里看着的是古老的伤痕，耳朵里听着的是欢快的市井之声与悲伤的历史回响交织成的旋律。这座桥教你一堂关于“脆弱与坚韧”的深刻课程。人类可以多么轻易地摧毁美，摧毁连接，摧毁几个世纪积累起来的文明结晶——只需要几发炮弹，一瞬间的仇恨。但人类又可以多么执着地重建美，重建连接，从废墟中一片片捡回记忆的碎片，用最大的耐心和敬意，把它们重新拼合起来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个充斥着各种“断裂”的世界里，莫斯塔尔老桥的存在，是一种温柔的抵抗。它抵抗遗忘，抵抗简单的二元对立，抵抗那种认为伤痕无法弥合的绝望。它告诉你，桥，从来不只是为了从此岸到彼岸。它是为了让我们在中间相遇，在最高处停留，在风中一起眺望同一个方向。每一位热爱深度游的旅人，都应该来一次莫斯塔尔。不仅仅是为了一张明信片般的风景照，更是为了来上一堂无声的、关于战争与和平、毁灭与重生、隔阂与理解的课。你会带着一颗被轻微震动过、却更加完整的心离开。你会发现，这座桥，其实也悄悄地在你心里，架起了一些新的东西。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
