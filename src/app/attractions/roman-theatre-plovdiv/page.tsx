import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '普罗夫迪夫罗马剧场 Roman Theatre of Plovdiv｜深藏在保加利亚千年古城山丘中的壮丽遗迹，至今仍在演出的古罗马剧场 - 最佳欧洲景点',
  description: '朋友，想象一下这个场景：你刚刚在普罗夫迪夫老城那些弯弯曲曲、铺着鹅卵石的小巷里转得有点晕，两旁的彩色奥斯曼时期老房子和卖着手工陶器的小店让人目不暇接。然后，你跟着隐约的人声和路牌，拐过一个不起眼的街角，忽然间，一切都豁然开朗。不是慢慢出现，而是“哗”地一下，一整片巨大的、泛着蜂蜜色光芒的扇形石阶剧场...',
}

export default function RomanTheatrePlovdivPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '普罗夫迪夫罗马剧场', href: '/attractions/roman-theatre-plovdiv' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`普罗夫迪夫罗马剧场・Roman Theatre of Plovdiv・保加利亚・普罗夫迪夫`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下这个场景：你刚刚在普罗夫迪夫老城那些弯弯曲曲、铺着鹅卵石的小巷里转得有点晕，两旁的彩色奥斯曼时期老房子和卖着手工陶器的小店让人目不暇接。然后，你跟着隐约的人声和路牌，拐过一个不起眼的街角，忽然间，一切都豁然开朗。不是慢慢出现，而是“哗”地一下，一整片巨大的、泛着蜂蜜色光芒的扇形石阶剧场，就毫无防备地撞进了你的视野，嵌在翠绿的山坡与澄澈的蓝天之间。那一瞬间的震撼，有点像第一次看到大海，空气都安静了几秒。
你顺着台阶走下去，脚底传来的是被两千年来无数鞋底磨得温润光滑的大理石的触感，微微有些凉。坐在任何一层座位上，抬头是舞台后方那两层精致的、带着科林斯柱式的舞台背景墙遗迹，虽然残缺，但那些雕刻的卷草纹和神像轮廓依然清晰有力。闭上眼睛，你能听到风声穿过石缝的细微呜咽，远处城市模糊的车流声像海浪一样涌来又退去，偶尔夹杂着几声教堂的钟响。最奇妙的是空气里的味道，是干燥的岩石味、山坡上松树和野草混合的清香，还有一丝若有若无的、来自历史深处的尘土气息。你会发现，不少当地老人就静静地坐在高处的石阶上，晒着太阳，看着书，或者只是发呆，这剧场早已是他们日常生活里一个自然而然的角落，而不是一个被玻璃罩起来的博物馆。
它的核心魅力，正在于这种“活着”的质感。这不是一个仅供凭吊的废墟。每到夏日夜晚，当灯光亮起，舞台被照亮，这里就会变回它最初的功能——一个充满欢笑、音乐与戏剧的聚会中心。你能看到穿着礼服的人们拾级而上，寻找自己的座位，乐团在古老的舞台上调试琴弦，而星空就是最宏伟的天花板。这种古今之间的无缝切换，让石头有了温度，让历史有了呼吸。它讲述的不是一个已经终结的故事，而是一个跨越了二十个世纪，至今仍在精彩上演的传奇。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，想象一下这个场景：你刚刚在普罗夫迪夫老城那些弯弯曲曲、铺着鹅卵石的小巷里转得有点晕，两旁的彩色奥斯曼时期老房子和卖着手工陶器的小店让人目不暇接。然后，你跟着隐约的人声和路牌，拐过一个不起眼的街角，忽然间，一切都豁然开朗。不是慢慢出现，而是“哗”地一下，一整片巨大的、泛着蜂蜜色光芒的扇形石阶剧场，就毫无防备地撞进了你的视野，嵌在翠绿的山坡与澄澈的蓝天之间。那一瞬间的震撼，有点像第一次看到大海，空气都安静了几秒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你顺着台阶走下去，脚底传来的是被两千年来无数鞋底磨得温润光滑的大理石的触感，微微有些凉。坐在任何一层座位上，抬头是舞台后方那两层精致的、带着科林斯柱式的舞台背景墙遗迹，虽然残缺，但那些雕刻的卷草纹和神像轮廓依然清晰有力。闭上眼睛，你能听到风声穿过石缝的细微呜咽，远处城市模糊的车流声像海浪一样涌来又退去，偶尔夹杂着几声教堂的钟响。最奇妙的是空气里的味道，是干燥的岩石味、山坡上松树和野草混合的清香，还有一丝若有若无的、来自历史深处的尘土气息。你会发现，不少当地老人就静静地坐在高处的石阶上，晒着太阳，看着书，或者只是发呆，这剧场早已是他们日常生活里一个自然而然的角落，而不是一个被玻璃罩起来的博物馆。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，正在于这种“活着”的质感。这不是一个仅供凭吊的废墟。每到夏日夜晚，当灯光亮起，舞台被照亮，这里就会变回它最初的功能——一个充满欢笑、音乐与戏剧的聚会中心。你能看到穿着礼服的人们拾级而上，寻找自己的座位，乐团在古老的舞台上调试琴弦，而星空就是最宏伟的天花板。这种古今之间的无缝切换，让石头有了温度，让历史有了呼吸。它讲述的不是一个已经终结的故事，而是一个跨越了二十个世纪，至今仍在精彩上演的传奇。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`普罗夫迪夫罗马剧场`} />
                <InfoRow label="英文名称" value={`Roman Theatre of Plovdiv`} />
                <InfoRow label="正式名称" value={`Roman Theatre of Plovdiv`} />
                <InfoRow label="国家" value={`保加利亚`} />
                <InfoRow label="城市" value={`普罗夫迪夫`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座建于公元2世纪的剧场是巴尔干半岛上保存最完好、最宏伟的古罗马剧场之一，见证了古罗马帝国在色雷斯地区的鼎盛统治与文化传播。`} />
                <InfoRow label="建筑特色" value={`剧场巧妙地依着泰克西姆山丘的自然坡度而建，呈完美的半圆形，拥有28排大理石座位，可容纳约5000至7000名观众，其音响效果历经两千年依然卓越。`} />
                <InfoRow label="建筑风格" value={`典型的古罗马建筑风格，融合了希腊化时期的剧场布局与罗马工程技术，装饰上带有鲜明的罗马帝国图拉真时代特征。`} />
                <InfoRow label="文化价值" value={`它不仅仅是一个考古遗址，更是一个活着的文化场所，如今每年夏季都会举办歌剧、音乐会和戏剧节，是连接保加利亚古老历史与现代艺术生活的独特桥梁。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`夏季（4月至10月）每天上午9:00至下午6:00开放。冬季（11月至3月）开放时间缩短为上午9:00至下午5:00。如果当晚有音乐会或戏剧演出，剧场会提前一小时清场为演出做准备，普通参观届时将停止。每年的具体开放时间可能会有微调，建议行前查看官网公告。平安夜和元旦上午可能闭馆。`} />
              <InfoRow label="门票价格" value={`成人票价为10保加利亚列弗（约5欧元）。学生（需出示有效国际学生证）和退休人士可享受半价优惠，票价为5列弗。7岁以下儿童免费入场。家庭套票（两位成人加最多三名儿童）价格为25列弗。门票可在入口处的售票亭现场购买，只接受现金（保加利亚列弗）。旺季偶尔排队，但队伍移动速度很快。`} />
              <InfoRow label="地址" value={`ул. “Цар Ивайло” 4, 4000 Plovdiv Center, Plovdiv, Bulgaria`} />
              <InfoRow label="交通方式" value={`从普罗夫迪夫国际机场出发：最便捷的方式是乘坐出租车，车程约20-25分钟，费用大约15-20列弗。也可以乘坐公交，在机场外乘坐“Plovdiv Airport”公交站的公交车前往市中心（如29路），在“Център”或“Поща”站下车后，跟随路标步行约15分钟上山即可到达，总耗时约50分钟。从普罗夫迪夫中央火车站出发：步行是最佳选择，从火车站沿着主干道向东步行，穿过马里查河，进入老城区（Старият град），随后顺着石板路向小山丘攀登，全程约25-30分钟即可抵达剧场入口。体力不佳者也可在火车站前乘坐任意前往老城方向的公交车（如4路、18路），在“Старият град”站下车后步行5分钟上山。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从将近两千年前说起。当时，这里不叫普罗夫迪夫，而是罗马帝国色雷斯行省的重要城市——菲利波波利。大约在公元2世纪，也就是罗马皇帝图拉真和哈德良统治的黄金时代，这座城市达到了空前的繁荣。据说，剧场的建造就是为了满足当时城市精英和公民日益增长的文化娱乐需求，同时也是彰显罗马帝国权威与文明的标志。你能想象吗？在那个年代，来自帝国各地的演员、乐师和诗人汇聚于此，用希腊语或拉丁语上演着悲剧、喜剧和各式庆典，而穿着托加袍的罗马官员、当地色雷斯贵族以及普通市民，就坐在这同一片石阶上，为精彩演出鼓掌喝彩。剧场不仅是娱乐中心，也是重要的社交与政治集会场所。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，帝国的辉煌并非永恒。随着罗马帝国的分裂和衰微，菲利波波利也经历了蛮族入侵、火灾和地震。到了中世纪早期，这座曾经繁华的剧场逐渐被废弃、遗忘。它坚固的大理石座位成了方便的“采石场”，被当地人一块块拆走，用于建造教堂、房屋甚至城墙。泥土和瓦砾逐年堆积，将这座宏伟的建筑彻底掩埋在了数米深的地下。山坡上建起了新的房屋和街道，一代又一代的普罗夫迪夫人在这片土地上生活，全然不知自己的脚下沉睡着一个古老的奇迹。历史在这里开了一个漫长的玩笑，将一段璀璨的文明深深藏起。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间快进到20世纪。上世纪60年代，普罗夫迪夫的城市建设如火如荼。一次大规模的山体加固和施工工程在这片区域展开。工人们用推土机和铲子挖掘山坡时，突然，他们的工具碰到了异常坚硬且平整的石头。随着挖掘深入，雕刻精美的石像和巨大规整的石块重见天日。考古学家们闻讯赶来，经过小心翼翼的清理，这座沉睡了十几个世纪的罗马剧场，像一位从长眠中苏醒的巨人，再次向世界展露了它的雄姿。它的发现过程本身就充满了戏剧性，几乎像是命运的安排。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`自那以后，一场漫长而精细的修复工程开始了。考古学家和建筑专家们像玩最复杂的拼图游戏，根据散落的构件和古老的图纸，尽可能地将剧场复原。令人惊叹的是，尽管经历了掠夺和掩埋，剧场的整体结构和大部分座位竟然奇迹般地保存完好。更让人拍案叫绝的是它的声学效果——经过测试，站在舞台中心低声说话，声音竟然能清晰地传到最远的座位。从1970年代起，人们开始重新思考它的用途。为什么不让他重新“活”过来呢？于是，自1981年起，中断了十几个世纪的舞台灯光再次在这里点亮。如今，它不仅是保加利亚最重要的考古发现之一，更成为了普罗夫迪夫乃至整个国家的文化心脏，每年夏季的“普罗夫迪夫古剧场艺术节”吸引着全球的艺术爱好者。从罗马帝国的娱乐殿堂，到中世纪的废墟，再到现代的文化地标，它的故事，本身就是一部关于毁灭、发现与重生的伟大史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`我强烈建议你将探访剧场的时间安排在下午。这样，你可以先在老城里悠闲地逛一逛，感受一下这座“七丘之城”的日常生活气息，吃个午饭。然后在下午三四点左右，当太阳开始西斜，光线变得金黄而柔和时，再前往剧场。这个时间既能避开正午最灼热的阳光（夏季尤为重要），又能幸运地捕捉到夕阳为古老石材披上金色外衣的绝美时刻，如果运气好，还能一直待到华灯初上，感受日夜交替时分的魔幻氛围。整个深度游览过程，包括拍照、静坐感受和细细观摩细节，建议预留至少2到3个小时。节奏要不疾不徐，让自己完全沉浸其中。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季阳光强烈，剧场内几乎没有遮阴处，务必携带防晒霜、帽子和充足的饮用水。穿着舒适防滑的鞋子非常关键，因为大理石台阶在干燥和潮湿时都可能有点滑。提前在官网或当地旅游信息中心查询演出日程，如果你的参观日有演出，下午的清场时间会提前，需要规划好时间。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`先从老城中心布满画廊和工艺品店的主街拐进那条通往剧院的上坡小路，让期待感随着脚步慢慢攀升。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到剧场最上方的入口处，先别急着下去，停下来深吸一口气，让那扇形展开的壮阔全景第一次完整地冲击你的视觉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着最侧边的台阶缓步向下走，用手触摸那些冰凉而光滑的大理石座位边缘，感受岁月留下的独特包浆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直走到舞台正前方的乐池区域，转过身抬头仰望，想象自己是一位古罗马演员，面对满座观众的视野与心情。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`仔细探寻舞台后方那面残存的两层楼背景墙，寻找上面雕刻的狄俄尼索斯（酒神）神龛以及各种神话人物的痕迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`挑一个视线正对舞台中央的座位坐下，闭上眼睛，倾听风声、鸟鸣和远处城市的声音在这天然音响设备中的回响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间允许，沿着观众席最外缘走一圈，从各个不同的角度观察剧场与背后老城红瓦屋顶和现代城市天际线构成的层次。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果恰逢演出季的夜晚，务必留下来，体验星空下古剧场被现代灯光和音乐重新赋予灵魂的震撼时刻。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`剧场最高处入口外侧的围墙边`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后，阳光从西面打来，可以拍摄到剧场完整的半圆形结构镶嵌在山体中的全景，将老城屋顶作为前景的一部分。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`舞台正前方约第十排座位的中轴线位置`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，利用侧光拍摄舞台背景墙的浮雕细节，石头的纹理和雕刻的阴影会显得格外深邃立体。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从剧场最底层乐池区域向上仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚蓝调时刻，当天空呈现深蓝色而剧场灯光刚刚亮起时，拍摄观众席的弧形曲线与星空相接的画面，极具戏剧张力。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`剧场东侧上方的山坡小径上`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或上午，从这里可以获得一个略带俯角的视角，将剧场的扇形结构与整个普罗夫迪夫城市的现代景观一同纳入镜头，形成古今对话。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`演出期间在指定的摄影区域`}</h4>
                  <p className="text-sm text-gray-700">{`使用长焦镜头捕捉舞台上表演者的动态与古老石质背景融合的瞬间，注意关闭闪光灯，利用舞台现有灯光营造氛围感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`建议携带一支广角镜头（如16-35mm）来捕捉剧场的宏伟全景，同时一支中长焦镜头（如70-200mm）对于抓取建筑细节和演出特写至关重要。三脚架在非演出时间的普通参观中可以使用，但一旦有演出筹备或进行，通常会被禁止。永远尊重正在进行的演出和表演者，即使允许拍照，也应保持安静和隐蔽。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`老城山脚下的家庭式客栈，房间虽小但充满保加利亚传统装饰，主人会为你准备丰盛的 homemade 早餐，并从露台指给你看剧场所在的山坡。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`由一座19世纪复兴风格老宅改造的精品酒店，位于老城安静的石板路旁，保留了原始的木质天花板和壁炉，步行至剧场仅需8分钟，仿佛住在历史里。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在罗多彼山脉边缘的五星级度假酒店，拥有俯瞰全城和无边际泳池的绝佳视野，在房间阳台用一杯保加利亚红酒搭配剧场夜景是至高享受。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计师之选`}</h4>
                  <p className="text-sm text-purple-800">{`市中心由共产主义时期建筑巧妙改造的现代设计酒店，融合了工业风与保加利亚民俗元素，提供别致的城市视角，打车去老城和剧场非常方便。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果选择住在老城区的特色酒店，请注意很多房屋是受保护的历史建筑，没有电梯，且行李箱在鹅卵石路上拖动会非常困难，建议携带轻便行李。夏季（尤其是艺术节期间）和周末的住宿非常紧俏，务必提前数周甚至数月预订。老城区域夜晚非常安全宁静，但酒吧和餐厅聚集的街道在周末晚上会比较热闹。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开剧场很久之后，那幅画面依然会清晰地印在脑海里：一边是凝固了时间的、沉默而威严的古代石阶；另一边是流动的、鲜活的现代人的笑声与音乐。普罗夫迪夫罗马剧场最打动我的，正是这种奇妙的平衡感。它没有将自己封闭在历史的象牙塔里，也没有为了迎合现代而变得轻浮。它坦然地展示着自己的残缺与沧桑，每一道裂缝都在讲述过去的故事，同时又慷慨地敞开怀抱，让今天的我们能够走进去，坐下来，成为它漫长生命故事中新的一页。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求崭新、快速和效率的世界里，这个地方提醒着我们另一种可能：真正的永恒不在于永不改变，而在于拥有包容变迁的韧性。它从一座娱乐建筑变成采石场，又变成废墟，最后重获新生，成为艺术与美的容器。它的存在本身，就是一种深刻的慰藉。它告诉我们，文明的火种可能会被掩埋，但永远不会真正熄灭。对于每一位渴望深度旅行的灵魂来说，这里不仅仅是一个“景点”，更是一个能让你安静下来，与时空对话的驿站。坐在那些被阳光晒得温热的石头上，你会感觉到自己与两千年前的某个观众，共享着同一片视野，同一种对美的感动。这种连接，跨越了语言与时代，或许就是我们不断出发，去寻找这些古老地方的最深层的意义吧。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/plovdiv-roman-theatre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普罗夫迪夫古罗马剧场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Plovdiv Roman Theatre</p>
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
