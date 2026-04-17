import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '圣玛利亚大教堂 St. Mary‘s Basilica｜聆听每整点从高塔传出的悲壮号角，瞻仰世界最大的中世纪木雕祭坛 - 最佳欧洲景点',
  description: '你第一眼看见圣玛利亚大教堂，多半会先愣一下——这两座塔楼，怎么一高一矮，还戴着颜色不一样的“帽子”？高的那座戴着金色的王冠，在阳光下闪闪发光，像个骄傲的卫兵；矮的那座则是朴素的绿色尖顶，像个沉默的修士。它们就这么并排站着，守卫着克拉科夫这片全世界最大的中世纪广场，足足有七百多年了。这个不按常理出牌的...',
}

export default function StMarysBasilicaKrakowPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '圣玛利亚大教堂', href: '/attractions/st-marys-basilica-krakow' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`圣玛利亚大教堂・St. Mary‘s Basilica・波兰・克拉科夫`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼看见圣玛利亚大教堂，多半会先愣一下——这两座塔楼，怎么一高一矮，还戴着颜色不一样的“帽子”？高的那座戴着金色的王冠，在阳光下闪闪发光，像个骄傲的卫兵；矮的那座则是朴素的绿色尖顶，像个沉默的修士。它们就这么并排站着，守卫着克拉科夫这片全世界最大的中世纪广场，足足有七百多年了。这个不按常理出牌的开场，瞬间就勾起了你全部的好奇心。
走近了，那种压迫感才真正袭来。整座教堂是用一种深红褐色的砖块砌成的，不是我们常见的光滑石材，每一块砖都保留着手工的痕迹和岁月的斑驳。下午的阳光斜斜地打在墙面上，把砖缝里的阴影拉得很长，整面墙仿佛有了生命，在静静地呼吸。空气里有一种特殊的味道——是广场上咖啡摊飘来的香气，混合着古老砖石在阳光下散发出的、略带尘土气的暖意，还有从教堂门内逸出的、清冷的蜡烛和旧木头的气息。最动人的声音，当然是每到整点，从那座较高的塔楼窗户里传出的号角声。那声音并不雄壮，反而带着一种戛然而止的悲凉，在每个方向吹奏一遍后，便突然中断。广场上所有人，无论游客还是本地人，都会在这一刻停下脚步，仰头静听。那一刻，时间仿佛凝固了。
对于克拉科夫人来说，这座教堂远不止是一个景点。它是生活的背景音，是情感的坐标。你会看到穿着笔挺西装的老先生在长椅上安静地读报，旁边可能就坐着一位刚刚买完菜、来这里歇脚的老太太。穿着校服的少年少女们在广场上追逐，而他们的父母或许正在教堂里点上一支蜡烛。结婚的新人一定会来这里拍照，接受路人的祝福。它威严，却不疏离；它古老，却充满了鲜活的烟火气。它的核心魅力，就在于这种神圣与日常的无缝交融。你来到这里，不仅是参观一座伟大的建筑，更是参与一场持续了数个世纪的、平静而坚韧的日常生活仪式。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你第一眼看见圣玛利亚大教堂，多半会先愣一下——这两座塔楼，怎么一高一矮，还戴着颜色不一样的“帽子”？高的那座戴着金色的王冠，在阳光下闪闪发光，像个骄傲的卫兵；矮的那座则是朴素的绿色尖顶，像个沉默的修士。它们就这么并排站着，守卫着克拉科夫这片全世界最大的中世纪广场，足足有七百多年了。这个不按常理出牌的开场，瞬间就勾起了你全部的好奇心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，那种压迫感才真正袭来。整座教堂是用一种深红褐色的砖块砌成的，不是我们常见的光滑石材，每一块砖都保留着手工的痕迹和岁月的斑驳。下午的阳光斜斜地打在墙面上，把砖缝里的阴影拉得很长，整面墙仿佛有了生命，在静静地呼吸。空气里有一种特殊的味道——是广场上咖啡摊飘来的香气，混合着古老砖石在阳光下散发出的、略带尘土气的暖意，还有从教堂门内逸出的、清冷的蜡烛和旧木头的气息。最动人的声音，当然是每到整点，从那座较高的塔楼窗户里传出的号角声。那声音并不雄壮，反而带着一种戛然而止的悲凉，在每个方向吹奏一遍后，便突然中断。广场上所有人，无论游客还是本地人，都会在这一刻停下脚步，仰头静听。那一刻，时间仿佛凝固了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`对于克拉科夫人来说，这座教堂远不止是一个景点。它是生活的背景音，是情感的坐标。你会看到穿着笔挺西装的老先生在长椅上安静地读报，旁边可能就坐着一位刚刚买完菜、来这里歇脚的老太太。穿着校服的少年少女们在广场上追逐，而他们的父母或许正在教堂里点上一支蜡烛。结婚的新人一定会来这里拍照，接受路人的祝福。它威严，却不疏离；它古老，却充满了鲜活的烟火气。它的核心魅力，就在于这种神圣与日常的无缝交融。你来到这里，不仅是参观一座伟大的建筑，更是参与一场持续了数个世纪的、平静而坚韧的日常生活仪式。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`圣玛利亚大教堂`} />
                <InfoRow label="英文名称" value={`St. Mary‘s Basilica`} />
                <InfoRow label="正式名称" value={`Bazylika Mariacka`} />
                <InfoRow label="国家" value={`波兰`} />
                <InfoRow label="城市" value={`克拉科夫`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`克拉科夫的城市心脏与精神象征，其每日准时的号角声是波兰不屈民族精神的永恒回响。`} />
                <InfoRow label="建筑特色" value={`标志性的两座不对称塔楼，以及由四千万块手工烧制砖砌成的宏伟“砖砌哥特式”立面。`} />
                <InfoRow label="建筑风格" value={`哥特式建筑，具体属于波兰独特的“砖砌哥特式”风格。`} />
                <InfoRow label="文化价值" value={`维特·斯特沃什创作的木质祭坛是欧洲晚期哥特式雕塑的巅峰之作，而延续数个世纪的“海纳尔号角”传统则是活态文化遗产。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`周一至周六：11:15 - 18:00（最后入场17:30）；周日及宗教节日：14:00 - 18:00（最后入场17:30）。
请注意：开放时间会因弥撒而随时调整，通常在周一至周六的早上和周日全天，主殿不对外开放参观，游客只能在指定区域安静观看。每年1月1日、复活节周日、11月1日、12月25日全天关闭。塔楼开放时间独立，通常为4月至10月的周二、周四、周六上午（具体时间窗口很短，需提前在官网确认）。`} />
              <InfoRow label="门票价格" value={`教堂主殿门票：成人票约25兹罗提（约5.5欧元），优惠票（学生、儿童等）约15兹罗提（约3.3欧元）。塔楼攀登票单独出售，约15-20兹罗提。
购票须知：门票包含语音导览（有中文选项），需在教堂广场东北角的游客中心购买，不能直接从教堂入口购买。每周日可免费入内参加礼拜，但不得进行观光游览和拍照。`} />
              <InfoRow label="地址" value={`plac Mariacki 5, 31-042 Kraków, Poland`} />
              <InfoRow label="交通方式" value={`从克拉科夫·巴利斯国际机场出发：最便捷的是乘坐火车。机场火车站有直达克拉科夫主火车站的列车，车程约20分钟，班次频繁。从克拉科夫主火车站步行至圣玛利亚大教堂约需15-20分钟，一路穿过老城区风景极佳。或者，在火车站前搭乘任意前往“Rynek Główny”（中央集市广场）的有轨电车，坐2-3站即可。从火车站打车前往约需10分钟。
如果你已在克拉科夫老城，那么步行是唯一也是最好的方式。它雄踞在中央集市广场东北角，无论从哪个方向，都能看到它那两座不对称的高塔。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`这座教堂的故事，始于一场灾难。更早的罗马式教堂在13世纪末蒙古人入侵后的混乱中被焚毁。克拉科夫的市民们决定，要在废墟上建起一座配得上这座正在崛起的王室之都的新教堂。他们选择了当时最先进、也最能体现城市财富的技术——烧制砖块。想象一下14世纪的建筑工地：无数的砖窑在城外冒着烟，工匠们用木板模具制作出一块块砖坯，烧制后再用马车运到广场。一块块深红色的砖被精巧地垒砌起来，形成了我们如今看到的宏伟骨架。这座教堂的兴建，本身就是一首由普通市民谱写的城市复兴之歌。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了15世纪，教堂迎来了它最辉煌的艺术瑰宝。一位来自德国纽伦堡的天才木雕师——维特·斯特沃什，接到了一个史诗级的委托：为教堂的主祭坛创作一幅祭坛画。这位大师带领助手，用了整整12年时间，将12吨的椴木，变成了一个高达13米、宽11米的惊世之作。当帷幕拉开，人们看到的是圣母玛利亚安详升入天国的中心场景，周围环绕着数百个栩栩如生的人物、天使和繁复的装饰。这不仅是宗教艺术品，更是当时欧洲社会面貌的百科全书，人物的表情、衣褶的纹理，都充满了戏剧性的现实主义色彩。直到今天，你站在它面前，依然能感受到那种扑面而来的、摄人心魄的创作能量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而那座较高的塔楼，则承载着波兰历史上最悲壮的一个传说。相传在13世纪蒙古入侵时，一位名叫海纳尔的瞭望哨兵在塔楼上吹响号角发出警报，却被一支利箭射穿喉咙，号声戛然而止。为了纪念这位英雄，克拉科夫延续了一个传统：每小时整点，都会有一名号手打开塔楼窗户，向着四个方向吹奏同一段号角旋律，并且同样在最高音处突然中断。这个仪式，在纳粹占领期间未曾中断，在铁幕时期也未曾中断。它已经超越了传说本身，成为波兰民族坚韧与守望精神的象征。那中断的号音，不是结束，而是一个永不终结的承诺。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`教堂在漫长的岁月里经历了无数次修缮和增补。内部华丽的彩绘和镀金装饰大多来自后来的巴洛克和文艺复兴时期，与哥特式的骨架形成了奇妙的对话。二战期间，纳粹将斯特沃什祭坛拆卸并运回德国，波兰的文物保护者们冒死隐藏了记录其结构的图纸。战后，凭着这些图纸和坚定的意志，这件国宝才得以被寻回并完美复原。当你今天站在完整如初的祭坛前，你所看到的，不仅仅是中世纪的艺术，更是波兰人民守护自身文化身份的惊人决心。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的体验从清晨开始。建议在早上9点前抵达教堂广场，这时游客大军尚未涌入，阳光柔和，你能独占广场，静静欣赏两座塔楼在晨光中的轮廓，并等待9点的第一次号角。之后立即前往游客中心购买门票（通常9点或9点半开门），争取成为第一批进入主殿的游客，享受片刻的宁静。整体游览建议预留至少2.5至3小时：主殿内部仔细观赏约需1.5小时（务必租用语音导览），若有机会攀登塔楼则需额外预留40分钟（包括排队和攀登）。中午前后，阳光会透过彩色玻璃窗将教堂内部渲染得五彩斑斓，是拍摄内部光影的黄金时间。游览节奏应该是“外-内-上”的结合：先在外部感受其城市地标的气势，再进入内部沉浸于艺术与信仰的震撼，最后（如果体力允许）登高俯瞰，将整个克拉科夫老城的红色屋顶尽收眼底，完成一次从宏观到微观，再从微观回到宏观的完整旅程。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周日和宗教节日弥撒期间，游客活动严格受限，如果你主要为观光而来，请务必避开这些时间。
教堂内部严禁使用闪光灯和三脚架，手机请务必调至静音，保持绝对的安静是对信仰最基本的尊重。
攀登塔楼的楼梯极其狭窄、陡峭且昏暗，只允许单人单向通行，有幽闭恐惧症、高血压或严重膝盖问题者请绝对不要尝试。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`赶在游客中心开门前，先在空旷的广场上找个长椅坐下，看着晨光一点点染金圣玛利亚大教堂那两座不对称的塔楼`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`成为第一批进入主殿的访客，让你的眼睛先在幽暗的光线中适应，然后缓缓走向那尊高达13米的维特·斯特沃什木质祭坛`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花至少二十分钟，绕着祭坛慢慢走，用语音导览的灯光仔细查看每一幅浮雕里人物的生动表情和衣饰的精妙细节`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`抬头仰望教堂中殿那繁星般璀璨的蓝色穹顶壁画，上面绘制的金色星星在从高窗射入的光柱中仿佛真的在闪烁`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找那根由铁链悬挂在侧廊的“死刑犯绞绳”，触摸它粗糙的表面，听语音导览讲述中世纪城市法律的严酷往事`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着狭窄的回旋石梯登上塔楼（如果开放），在气喘吁吁到达顶部后，从瞭望窗口俯瞰整个如棋盘格般规整的克拉科夫老城全景`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回到阳光下的广场，在正对教堂正门的著名“亚当·密茨凯维奇纪念碑”台阶上坐下，点一杯咖啡，看马车嘚嘚驶过，彻底融入这幅活着的城市画卷`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`教堂正门前广场的东南角`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏时分，利用广场的石板地面作为前景，可以拍摄到两座塔楼完整的倒影，以及金色王冠塔尖被阳光点亮的瞬间`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主殿内南侧侧廊中部`}</h4>
                  <p className="text-sm text-gray-700">{`上午十一点左右，阳光穿透南面高大的彩色玻璃窗，会在古老的石柱和地面上投射下梦幻般的彩色光斑，等待一束光正好照亮祈祷的信徒或孤独的长椅`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`祭坛正前方约十米处的地面标记点`}</h4>
                  <p className="text-sm text-gray-700">{`使用广角镜头仰拍，可以将整个宏伟祭坛的复杂结构和教堂高耸的拱顶一同纳入画面，展现出无与伦比的纵深感`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`塔楼顶部的东北侧瞭望口`}</h4>
                  <p className="text-sm text-gray-700">{`如果你成功登顶，这里是拍摄克拉科夫老城红色屋顶海洋以及远处瓦维尔城堡的经典机位，建议使用中焦段以避免画面过于杂乱`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`内部光线非常昏暗，尽量使用大光圈镜头或提高ISO，保持相机稳定，宁可照片暗一些后期调整，也不要使用闪光灯亵渎圣所。`}</li>
                <li>• {`拍摄当地人，尤其是祈祷者时，请务必保持距离并征得同意，这里首先是他们心灵的圣地，其次才是我们的摄影对象。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`藏在教堂广场旁边小巷里的百年公寓改造民宿，推开木格窗就能听到整点的号角声，房东老奶奶会为你准备地道的波兰苹果派当早餐`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`由15世纪贵族宅邸修复的精品酒店，距离教堂仅三分钟步行，石墙、木梁和古董家具营造出浓郁的历史感，水疗中心却藏在古老的地窖拱顶下`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计风潮`}</h4>
                  <p className="text-sm text-yellow-800">{`开在翻新历史建筑里的现代设计酒店，房间拥有直面教堂塔楼的巨大落地窗，在极简主义的舒适氛围中，与中世纪地标进行一场跨越时空的对话`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-purple-800">{`坐落在维斯瓦河畔、拥有私人花园的五星级宫殿酒店，虽然步行到教堂需要十五分钟，但可以在河景露台享用香槟早餐，远眺圣玛利亚大教堂的剪影融入老城天际线`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`教堂广场周边是克拉科夫最核心、最安全的区域，夜晚灯火通明，人流不息，但正对广场的房间可能会在周末夜晚受到酒吧人声的轻微干扰。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`克拉科夫夏季音乐节和圣诞集市期间酒店异常紧俏，如果计划此时到访，务必提前至少三个月预订。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开圣玛利亚大教堂很久之后，那每小时一次的、中断的号角声，还会在你脑海里定时响起。它提醒你的，不仅仅是那个悲壮的传说，更是一种关于“坚持”的朴素哲学。这座教堂本身，就是这种哲学的化身。从一块块砖的垒砌，到祭坛上一刀刀的雕刻，再到数个世纪里无论战乱与和平都准时响起的号音——它向我们展示了一种沉静而坚韧的力量。在这个追求瞬时满足、万物速朽的时代，这种需要数代人接力的、缓慢而笃定的建造与守护，显得尤为珍贵。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，你来这里，不只是看一座漂亮的教堂，看一个巨大的木雕。你是来聆听一座城市的心跳，来触摸一段从未断裂的历史脉搏。当你在略显昏暗的殿堂里，与那些仰望祭坛的本地人站在一起时；当你气喘吁吁爬上塔楼，看到那个狭窄的、号手站了七百多年的窗口时，你会明白，有些地方之所以伟大，不仅在于它的砖石与艺术，更在于它被一代又一代人，用最日常的信仰、最固执的传统、甚至是用生命，注入其中的灵魂。圣玛利亚大教堂，就是这样一个活着的灵魂。它值得你穿越大半个欧洲，来静静地待上一个下午，让自己被这种深沉而绵长的回响，轻轻震动。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/great-reformed-church-debrecen" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    德
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">德布勒森大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Great Reformed Church</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/borgund-stave-church" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博尔贡木板教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Borgund Stave Church</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/zelen--hora-pilgrimage-church" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    绿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">绿山圣约翰朝圣教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">The Pilgrimage Church of St. John of Nepomuk at Zelená hora</p>
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
