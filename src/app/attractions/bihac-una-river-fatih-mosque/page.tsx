import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '比哈奇 Bihać ｜ 在蓝绿仙境乌纳河畔，邂逅一座被改写的教堂与囚禁时光的古塔 - 最佳欧洲景点',
  description: '朋友，想象一下，你转过一个街角，突然被一片炫目的、蓝绿到不真实的河水夺走了全部呼吸。那不是海，是乌纳河。它流过比哈奇的心脏，那种颜色像融化的绿松石混合了孔雀石，清澈得让你能数清水底每一颗光滑的鹅卵石。水声不是轰鸣，是持续不断的、温柔的哗哗声，像永不停歇的低语，伴随着空气里湿润的草木清香。当地人早已习',
}

export default function BihacUnaRiverFatihMosquePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '波斯尼亚和黑塞哥维那', href: '/destinations/europe' },
            { label: '比哈奇', href: '/destinations/europe' },
            { label: '比哈奇', href: '/attractions/bihac-una-river-fatih-mosque' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`比哈奇・Bihać・波斯尼亚和黑塞哥维那・比哈奇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，你转过一个街角，突然被一片炫目的、蓝绿到不真实的河水夺走了全部呼吸。那不是海，是乌纳河。它流过比哈奇的心脏，那种颜色像融化的绿松石混合了孔雀石，清澈得让你能数清水底每一颗光滑的鹅卵石。水声不是轰鸣，是持续不断的、温柔的哗哗声，像永不停歇的低语，伴随着空气里湿润的草木清香。当地人早已习惯了这份奢侈，他们在岸边垂钓，在古老的石桥上漫步，或干脆跳进夏天冰凉的河水里游泳——这条河不是风景明信片，是他们后院流淌的生命线。
而就在这片蓝绿色的仙境旁，一座敦实、略带朴拙的建筑物静静站立。那是法蒂希亚清真寺。它的轮廓没有典型奥斯曼清真寺那种圆顶的优雅，线条反而有种直来直去的坚硬感。走进去的一刹那，你会愣住。光线从高处的窗户斜射进来，照亮了内部裸露的、厚重的石墙和粗大的立柱。你的眼睛会不由自主地顺着柱子向上，寻找那本该存在的交叉拱顶——是的，那种感觉对了，这分明是一座哥特式教堂的骨架。空气微凉，带着石头和陈旧木材特有的气味，混合着淡淡的地毯织物味道。祈祷毯朝向麦加方向铺开，而你的历史感却在这里发生了奇妙的错位。
走出清真寺，不远处，一座坚固的方形石塔——船长塔，像一位沉默的哨兵注视着河流。它没有河水的灵动，只有岩石的沉重与冷峻。当你用手触摸它被岁月侵蚀得粗糙的表面，凉意会顺着指尖传上来。你能感觉到，这里的故事，远比河水要深，也远比石头要沉重。
这座城市最打动人的，就是这种极致的对比与融合。生机勃勃、几乎带有魔幻色彩的河水，与岸边承载着沉重、复杂历史的建筑并肩而立。一种轻盈的生命力，与一种沉郁的时光感，在这里达成了某种难以言喻的平衡。它不是纯粹的欢乐，也不是单一的悲伤，而是一种经过岁月淘洗后的、复杂的宁静。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "朋友，想象一下，你转过一个街角，突然被一片炫目的、蓝绿到不真实的河水夺走了全部呼吸。那不是海，是乌纳河。它流过比哈奇的心脏，那种颜色像融化的绿松石混合了孔雀石，清澈得让你能数清水底每一颗光滑的鹅卵石。水声不是轰鸣，是持续不断的、温柔的哗哗声，像永不停歇的低语，伴随着空气里湿润的草木清香。当地人早已习惯了这份奢侈，他们在岸边垂钓，在古老的石桥上漫步，或干脆跳进夏天冰凉的河水里游泳——这条河不是风景明信片，是他们后院流淌的生命线。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而就在这片蓝绿色的仙境旁，一座敦实、略带朴拙的建筑物静静站立。那是法蒂希亚清真寺。它的轮廓没有典型奥斯曼清真寺那种圆顶的优雅，线条反而有种直来直去的坚硬感。走进去的一刹那，你会愣住。光线从高处的窗户斜射进来，照亮了内部裸露的、厚重的石墙和粗大的立柱。你的眼睛会不由自主地顺着柱子向上，寻找那本该存在的交叉拱顶——是的，那种感觉对了，这分明是一座哥特式教堂的骨架。空气微凉，带着石头和陈旧木材特有的气味，混合着淡淡的地毯织物味道。祈祷毯朝向麦加方向铺开，而你的历史感却在这里发生了奇妙的错位。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走出清真寺，不远处，一座坚固的方形石塔——船长塔，像一位沉默的哨兵注视着河流。它没有河水的灵动，只有岩石的沉重与冷峻。当你用手触摸它被岁月侵蚀得粗糙的表面，凉意会顺着指尖传上来。你能感觉到，这里的故事，远比河水要深，也远比石头要沉重。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市最打动人的，就是这种极致的对比与融合。生机勃勃、几乎带有魔幻色彩的河水，与岸边承载着沉重、复杂历史的建筑并肩而立。一种轻盈的生命力，与一种沉郁的时光感，在这里达成了某种难以言喻的平衡。它不是纯粹的欢乐，也不是单一的悲伤，而是一种经过岁月淘洗后的、复杂的宁静。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`比哈奇`} />
                <InfoRow label="英文名称" value={`Bihać`} />
                <InfoRow label="正式名称" value={`Bihać`} />
                <InfoRow label="国家" value={`波斯尼亚和黑塞哥维那`} />
                <InfoRow label="城市" value={`比哈奇`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`中世纪十字路口的战略要塞，其命运在奥斯曼帝国与基督教世界的拉锯中被彻底改写，是波黑复杂历史的微型切片。`} />
                <InfoRow label="建筑特色" value={`清澈见底的乌纳河是城市流动的灵魂，而河畔矗立的法蒂希亚清真寺则拥有罕见的、由哥特式教堂直接转化而来的奇特身世。`} />
                <InfoRow label="建筑风格" value={`一种独特的历史层叠：以哥特式基督教堂的筋骨，披上了奥斯曼帝国清真寺的朴素外衣与宣礼塔。`} />
                <InfoRow label="文化价值" value={`见证了不同信仰与文明在此地并非只有冲突，更有实用主义的交融与并存，是理解巴尔干多元文化的一把钥匙。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城区域全天开放。法蒂希亚清真寺开放时间一般为每日上午9点至下午5点，但周五主麻日中午时段可能关闭。船长塔内部作为博物馆的开放时间通常为周二至周日上午10点至下午4点，周一及部分国家节假日闭馆。冬季（11月至3月）部分景点开放时间可能缩短，建议出行前再次确认。`} />
              <InfoRow label="门票价格" value={`乌纳河畔及老城漫步免费。法蒂希亚清真寺参观免费，但欢迎捐款以支持维护。船长塔博物馆门票通常为5波黑马克（约2.5欧元），学生、儿童及团体有优惠。具体票价可能有季节性调整。`} />
              <InfoRow label="地址" value={`波斯尼亚和黑塞哥维那，乌纳-萨纳州，比哈奇，77200`} />
              <InfoRow label="交通方式" value={`最近的主要国际机场是克罗地亚的萨格勒布机场（ZAG）或波黑首都的萨拉热窝机场（SJJ）。从萨格勒布机场，可搭乘机场大巴至萨格勒布中央汽车站，再转乘长途巴士前往比哈奇（车程约3-4小时，班次每日数班）。从萨拉热窝出发，长途巴士是更直接的选择（车程约4.5-5小时，沿途山路风景壮丽）。抵达比哈奇汽车站后，老城核心区步行可达，无需额外交通工具。建议提前在线查询巴士时刻表或在车站售票窗口购票。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "比哈奇的故事，就像乌纳河的河水，表面清澈平静，底下却暗流汹涌。早在罗马时代，这里就是一条重要的贸易路线。但真正塑造它命运的，是中世纪那场漫长的拉锯战。它曾是克罗地亚王国的一个重要要塞，一座坚固的“城”。我们今天看到的法蒂希亚清真寺，其前身圣安东尼教堂，大约就在那个时期（13-14世纪）以坚实的罗马晚期哥特式风格被建立起来，守护着基督徒的信仰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "命运的转折点发生在16世纪。奥斯曼帝国的铁骑如洪流般席卷巴尔干。1592年，比哈奇在经过短暂的抵抗后陷落。征服者来了，但他们面对这座坚固的石头教堂，做出了一個非常“实用主义”的决定：不摧毁，而是改造。教堂的钟楼被拆除，取而代之的是一座细长的木质宣礼塔（后来重建为石质）。内部基督教的圣坛、壁画被移除，面向东方的米哈拉布（祈祷壁龛）被建立起来。教堂的十字形平面被巧妙地适应了清真寺的聚集功能。就这样，一座哥特式教堂完成了它身份的“变身”，被重新命名为“法蒂希亚”（意为“征服者”）。这不仅仅是一座建筑的改变，它是一个时代的隐喻：新的统治覆盖了旧的秩序，但旧的骨骼依然清晰可辨。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "至于那座船长塔，它的建造时间可能与堡垒体系同期。在奥斯曼时期，它被用作监狱。但它的黑暗篇章远未结束。到了19世纪奥匈帝国统治时期，以及后来20世纪的南斯拉夫王国时期，这座塔一直是关押政治犯的可怕地方。冰冷的石墙听过太多无声的呐喊与绝望。二战期间，纳粹及其傀儡政权也将其用作监狱。可以说，这座塔几乎见证了近代巴尔干每一次政权更迭所带来的苦难，它是比哈奇乃至整个地区痛苦记忆的实体容器。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光流转到20世纪90年代。波黑战争爆发，比哈奇陷入了漫长的围城，遭受了巨大的创伤。战后，城市和人民开始艰难地愈合。法蒂希亚清真寺经过修缮，继续作为穆斯林社区的精神中心。船长塔则被改造成了一座小小的博物馆，试图用展览来诉说那段不应被遗忘的过去。乌纳河，一如既往地流淌，用它那奇迹般的蓝绿色，洗涤着战争的硝烟，也滋润着新生的希望。今天的比哈奇，游客逐渐增多，他们为河水而来，却不可避免地与这段层叠的历史相遇。这座城不再试图隐藏它的伤疤与复杂，而是将它们与自然之美一起，坦然呈现给世界。它的故事告诉我们，历史很少是非黑即白的，更多时候是各种颜色、各种声音交织在一起的，就像乌纳河的水，由无数溪流汇聚而成，最终呈现出一种独特的、令人难忘的色彩。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正感受比哈奇的灵魂，你需要放慢脚步，用一整天的时间让河流与历史的节奏渗透你。建议在清晨（8点左右）抵达，这时游客尚少，阳光温柔，乌纳河的水色在晨光中最为纯净动人。整体游览节奏应是“河边放松”与“历史沉思”的交替。上午专注于河流与老城的闲适漫步，下午深入探索两座核心历史建筑。傍晚时分，一定要留给河畔，看夕阳如何为古城镀上金边。这样的安排能让你既享受到自然之美带来的愉悦，又能从容地消化那些厚重的历史。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`参观法蒂希亚清真寺时，务必穿着得体（避免短裤、短裙和无袖上衣），女性进入主祈祷区通常会被要求包头巾，门口一般备有围巾可供使用。夏季周末河边和餐厅可能会比较拥挤，尽量错峰用餐。老城石板路不太平整，建议穿一双舒适耐磨的步行鞋。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨第一站就从乌纳河畔的斯瓦河桥开始，趴在栏杆上什么都不做，只是静静看着那蓝绿得不可思议的河水冲刷过古老的桥墩。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着左岸的步行道向北慢慢散步，穿过本地人遛狗和晨跑的小公园，从不同角度捕捉河心小岛和远处山峦的倒影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`折返回到老城中心，站在法蒂希亚清真寺朴素的庭院外，先观察它那混合了教堂坚固体格与清真寺宣礼塔的奇特轮廓。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`脱鞋步入清真寺内部，让眼睛适应昏暗的光线，然后找一个角落坐下，感受哥特式石柱与伊斯兰祈祷空间融合带来的那种时空错置感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`中午在清真寺附近找一家有露台的河边餐厅，点一份新鲜的烤鱼或传统的波斯尼亚肉盘，让味蕾也融入当地。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后前往不远处的船长塔，触摸它冰冷粗糙的外墙，然后走进内部的展厅，在寂静中阅读那些曾在此失去自由的人的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从塔楼出来，需要一点时间消化情绪，不妨钻进老城蜿蜒的后街小巷，看看那些挂着蕾丝窗帘的奥斯曼风格老房子和悠闲的居民。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前回到乌纳河边，找一张长椅坐下，看夕阳的余晖将河水染成琥珀色与玫瑰金，听流水声抚平一天的思绪。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`斯瓦河桥中段俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或上午光线最佳，将相机贴近水面，以低速快门拍出乌纳河如丝绸般流动的质感，对焦于河底的鹅卵石。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`法蒂希亚清真寺内部仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`选择正午前后阳光最强时，站在中殿，抬头拍摄高侧窗射入的光柱与粗大的哥特式石柱形成的强烈明暗对比与几何构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`船长塔与河流同框`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，走到乌纳河对岸（东岸），将庄严冷峻的船长塔作为前景，后方是蓝绿色的蜿蜒河水与色彩柔和的老城建筑，形成历史与自然的对话。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`老城小巷的生活瞬间`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚的“黄金时刻”，在小巷里等待，捕捉一位本地老人提着购物袋回家，阳光斜照在斑驳墙面的温馨场景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`乌纳河畔的日落全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前后半小时，在河岸公园开阔处，使用广角镜头，将绚烂的天空、金色的水面、行人剪影以及远处的山峦全部收纳进画面。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄乌纳河时，使用偏振镜（CPL）可以极大消除水面反光，让河底的奇幻色彩完全显现。在清真寺内部拍照务必保持绝对安静，绝对不要对着正在祈祷的人拍摄，并事先询问管理员是否允许室内摄影（通常允许，但需尊重）。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河景阳台民宿`}</h4>
                  <p className="text-sm text-blue-800">{`老城中心一栋奥斯曼风格老宅的顶层公寓，私人小阳台正对乌纳河，清晨在潺潺水声中醒来，夜晚伴着河面灯光入睡。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`精品设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`由一栋19世纪老建筑改造，保留了原始石墙与木梁，内部却是极简的现代设计，地理位置绝佳，步行到所有景点都在五分钟内。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`家庭经营客栈`}</h4>
                  <p className="text-sm text-yellow-800">{`位于宁静的住宅区，主人会热情地为你准备丰盛的波斯尼亚早餐，并分享那些旅行指南上没有的本地故事和隐藏角落。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`山间静谧度假屋`}</h4>
                  <p className="text-sm text-purple-800">{`如果你有车，可以考虑城外十分钟车程、坐落在森林边缘的木屋，享受绝对的宁静，夜晚星空璀璨，白天可徒步探索乌纳河上游的瀑布群。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "比哈奇老城区非常紧凑且安全，选择住在中心意味着你可以随时下楼到河边散步。夏季（7-8月）是旅游旺季，建议提前数周预订。许多家庭式民宿不通过大型平台预订，尝试通过本地旅游网站或直接电话联系，可能会有意外惊喜。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开比哈奇许久后，在我脑海里反复回放的，不是某个单独的宏伟画面，而是一种感觉。是手指触碰船长塔冰冷石墙时的战栗，与赤脚踩在清真寺温暖地毯上的柔软，这两种触感交织在一起的感觉。是乌纳河那近乎虚幻的蓝绿色带来的生命欢愉，与了解到这片土地曾历经的围困与苦难后，心中升起的沉静感慨。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个地方教会我的，是一种“承载”的美学。河水承载着时光，静静地流，冲刷不走所有伤痕，却能让它们变得光滑，成为历史肌理的一部分。建筑承载着记忆，教堂的骨架撑起了清真寺的穹顶，监狱的塔楼变成了反思的课堂。它们都没有试图抹去过去，而是选择将一层又一层的历史，像树木的年轮一样，坦诚地展露给你看。在这个常常追求“崭新”和“纯粹”的世界里，比哈奇以一种混杂的、不完美的、却无比真实的姿态存在着。它不急着给你答案，只是邀请你坐在它的河边，听水声，看光影，触摸石头，然后自己去感受那份复杂中的宁静，伤痕下的韧性。这大概就是深度旅行最珍贵的意义——不是收集景点，而是去往一个地方，让它的河流与故事，也缓缓流进你自己的生命里。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/pocitelj" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    波
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">波契泰利城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Počitelj</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/travnik" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特拉夫尼克</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Travnik</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/blagaj-tekija-dervish-monastery" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布拉加伊特基亚（布纳河泉眼的托钵僧修道院）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Blagaj Tekija</p>
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
