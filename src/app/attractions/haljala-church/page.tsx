import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '哈利亚拉 Haljala｜波罗的海的古老哨兵，屹立在松林与历史迷雾中的中世纪堡垒教堂 - 最佳欧洲景点',
  description: '当巴士把你扔在哈利亚拉那个安静得能听见自己呼吸的十字路口时，你可能会有一瞬间的恍惚：这就是那个传说中的古老据点？跟着路牌，踩着碎石子路往前走，两旁是漆成柔和色彩的木屋，院子里晾着衣服，偶尔有老人隔着栅栏好奇地打量你。空气里有松针、潮湿泥土和淡淡燃烧木柴的混合气味。然后，一个拐弯，它就这样毫无征兆地出',
}

export default function HaljalaChurchPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '爱沙尼亚', href: '/destinations/europe' },
            { label: '西维鲁县', href: '/destinations/europe' },
            { label: '哈利亚拉', href: '/attractions/haljala-church' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`哈利亚拉・Haljala・爱沙尼亚・西维鲁县`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当巴士把你扔在哈利亚拉那个安静得能听见自己呼吸的十字路口时，你可能会有一瞬间的恍惚：这就是那个传说中的古老据点？跟着路牌，踩着碎石子路往前走，两旁是漆成柔和色彩的木屋，院子里晾着衣服，偶尔有老人隔着栅栏好奇地打量你。空气里有松针、潮湿泥土和淡淡燃烧木柴的混合气味。然后，一个拐弯，它就这样毫无征兆地出现在眼前——不是缓缓展现，而是像一座灰色的、沉默的巨兽，突然从墨绿色的松林背景里升腾起来。
它的塔楼首先攫住你的目光。那不像你在欧洲常见的那种纤巧、指向天堂的尖塔，而是一座敦实的、近乎粗暴的方形堡垒。石块厚重，窗户狭小且高不可及，墙面在几个世纪的风雨侵蚀下呈现出深浅不一的灰褐色，爬满了斑驳的苔藓。它给人一种强烈的“拒绝”感，不是为了迎接信徒的仰望，而是为了抵御来自任何方向的箭矢与炮火。而紧紧依附在它身侧的木质教堂中殿，顶着暗红色的瓦顶，却显得低矮而亲切，仿佛是这个钢铁巨汉身上一块柔软的补丁。这种奇异的组合，瞬间就向你诉说了它的双重身份：既是灵魂的庇护所，也是肉体的避难所。
推开那扇厚重的木门，室内的光线陡然暗下来，混合着旧木头、尘封的书籍和微弱的蜡油气味涌入鼻腔。阳光从高处狭小的窗孔斜射进来，在长条木凳和粗糙的石板地上切出明晃晃的光柱，你能看见尘埃在光里缓慢舞蹈。这里没有巴黎圣母院那种令人眩晕的宏伟，也没有西斯廷教堂的精美绝伦，有的是一种磐石般的坚固和直抵人心的朴素。你会注意到，当地人来这里，动作很轻，眼神里有一种看待老祖父般的熟稔与敬重。对他们而言，这不仅是一座教堂，更是社区数百年来心跳的坐标，是战乱时躲藏的家，是和平时期庆祝婚礼、哀悼逝者的地方。
最打动人心的，恰恰是这种反差与融合。站在教堂院子里，一边是冰冷坚硬的军事遗迹，一边是炊烟袅袅的宁静村庄；一边是宏大叙事的战争历史，一边是具体而微的日常生活。哈利亚拉教堂的魅力，就在于它把这两种截然不同的脉搏，如此真实、如此不加修饰地并置在你面前，让你在沉默的巨石间，听见了历史的沉重叹息与生命延续的轻柔回音。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当巴士把你扔在哈利亚拉那个安静得能听见自己呼吸的十字路口时，你可能会有一瞬间的恍惚：这就是那个传说中的古老据点？跟着路牌，踩着碎石子路往前走，两旁是漆成柔和色彩的木屋，院子里晾着衣服，偶尔有老人隔着栅栏好奇地打量你。空气里有松针、潮湿泥土和淡淡燃烧木柴的混合气味。然后，一个拐弯，它就这样毫无征兆地出现在眼前——不是缓缓展现，而是像一座灰色的、沉默的巨兽，突然从墨绿色的松林背景里升腾起来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的塔楼首先攫住你的目光。那不像你在欧洲常见的那种纤巧、指向天堂的尖塔，而是一座敦实的、近乎粗暴的方形堡垒。石块厚重，窗户狭小且高不可及，墙面在几个世纪的风雨侵蚀下呈现出深浅不一的灰褐色，爬满了斑驳的苔藓。它给人一种强烈的“拒绝”感，不是为了迎接信徒的仰望，而是为了抵御来自任何方向的箭矢与炮火。而紧紧依附在它身侧的木质教堂中殿，顶着暗红色的瓦顶，却显得低矮而亲切，仿佛是这个钢铁巨汉身上一块柔软的补丁。这种奇异的组合，瞬间就向你诉说了它的双重身份：既是灵魂的庇护所，也是肉体的避难所。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "推开那扇厚重的木门，室内的光线陡然暗下来，混合着旧木头、尘封的书籍和微弱的蜡油气味涌入鼻腔。阳光从高处狭小的窗孔斜射进来，在长条木凳和粗糙的石板地上切出明晃晃的光柱，你能看见尘埃在光里缓慢舞蹈。这里没有巴黎圣母院那种令人眩晕的宏伟，也没有西斯廷教堂的精美绝伦，有的是一种磐石般的坚固和直抵人心的朴素。你会注意到，当地人来这里，动作很轻，眼神里有一种看待老祖父般的熟稔与敬重。对他们而言，这不仅是一座教堂，更是社区数百年来心跳的坐标，是战乱时躲藏的家，是和平时期庆祝婚礼、哀悼逝者的地方。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动人心的，恰恰是这种反差与融合。站在教堂院子里，一边是冰冷坚硬的军事遗迹，一边是炊烟袅袅的宁静村庄；一边是宏大叙事的战争历史，一边是具体而微的日常生活。哈利亚拉教堂的魅力，就在于它把这两种截然不同的脉搏，如此真实、如此不加修饰地并置在你面前，让你在沉默的巨石间，听见了历史的沉重叹息与生命延续的轻柔回音。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`哈利亚拉`} />
                <InfoRow label="英文名称" value={`Haljala`} />
                <InfoRow label="正式名称" value={`Haljala Church`} />
                <InfoRow label="国家" value={`爱沙尼亚`} />
                <InfoRow label="城市" value={`西维鲁县`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座教堂是爱沙尼亚北部保存最完好的中世纪乡村防御教堂之一，曾是条顿骑士团统治时期重要的边境宗教与军事据点。`} />
                <InfoRow label="建筑特色" value={`其最引人注目的特征是高大、敦实、几乎无窗的石灰岩塔楼，与相对精巧的木结构教堂中殿形成强烈对比，是功能决定形式的典型体现。`} />
                <InfoRow label="建筑风格" value={`主体为简洁朴素的波罗的海哥特式风格，但后期的巴洛克式尖顶和内部装饰为其增添了柔和的层次。`} />
                <InfoRow label="文化价值" value={`它不仅是宗教场所，更是爱沙尼亚数百年被征服历史、乡村社区韧性以及北欧与东欧文化在此交汇拉锯的沉默见证者。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`夏季（5月至9月）：每日上午10点至下午6点开放。冬季（10月至次年4月）：开放时间缩短，通常为上午11点至下午4点，且可能仅在周末开放，建议出行前务必在本地旅游信息网站确认。教堂有时会因私人仪式（如婚礼、洗礼）临时关闭，门口通常会张贴通知。`} />
              <InfoRow label="门票价格" value={`进入教堂区域免费。但进入教堂建筑内部参观，建议捐赠2-3欧元作为维护费用，投入门口的捐款箱。学生、儿童及团体无强制收费，但同样欢迎捐款。登临教堂塔楼（如有开放）可能需要额外支付少量费用（约2欧元）。`} />
              <InfoRow label="地址" value={`Haljala kirik, Kiriku tee, Haljala, 45401, Lääne-Viru maakond, Estonia`} />
              <InfoRow label="交通方式" value={`从爱沙尼亚首都塔林出发是唯一现实的选择。在塔林中央汽车站（Tallinna bussijaam）乘坐前往拉克韦雷（Rakvere）或基维厄利（Kiviõli）方向的长途巴士，告诉司机在“Haljala”站下车。车程大约1小时15分钟，班次每小时1-2班，可在Tpilet.ee网站或APP上提前购票查看时刻。下车后，你会看到一个宁静的乡村十字路口，沿着指向“Kirik”（教堂）的棕色路牌，步行穿过一片宁静的居民区，约10-15分钟即可看到教堂巍峨的身影矗立在树林边缘。自驾则是最方便的方式，从塔林沿E20公路向东，转入87号公路向北，车程约1小时，教堂旁有免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "哈利亚拉的故事，始于波罗的海沿岸那片总是被迷雾、森林和各方势力觊觎的土地。13世纪初，条顿骑士团挥舞着十字剑，从德意志一路向东征服，将基督教强加给这片土地上信奉原始宗教的爱沙尼亚人。哈利亚拉，这个坐落在重要陆路贸易通道上的定居点，自然成了骑士团必须牢牢控制的战略要点。大约在14世纪，他们决定在此建立一座教堂。但这里的“教堂”，从设计之初就绝非单纯的祈祷之所。建筑师脑子里想的首先是弓箭的射程、墙壁的厚度和围困时的储水能力。于是，那座令人过目不忘的堡垒塔楼被首先建造起来，它高耸、坚固，墙壁厚达两米，上层设有垛口和射击孔。在动荡的年代，它本身就是一座微型城堡，村民和神职人员可以在战乱来袭时退守其中，依靠储存的粮食和水源坚守待援。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "随后的几个世纪，哈利亚拉教堂目睹了所有权在强国之间像物件一样被转手。它经历了利沃尼亚战争的血雨腥风，见证了瑞典帝国与波兰-立陶宛联邦在此拉锯。教堂的石墙或许挡下了流矢，但无法阻止时代的洪流。有趣的是，在相对和平的17世纪瑞典统治时期，教堂进行了一次重要的“软化”改造。那个充满防御色彩的塔楼顶部，被加上了一个优雅的巴洛克式尖顶。这就像给一位身经百战的老兵戴上了一顶精致的礼帽，瞬间改变了整个建筑的气质。尖顶指向天空，仿佛在说，刀剑入鞘，信仰重新占据了主导。内部也增添了讲坛、雕刻精美的长椅和一些壁画，生活的气息开始渗入这座堡垒的每一个缝隙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，平静总是短暂的。18世纪初，大北方战争的战火席卷而来。俄国沙皇彼得大帝为了夺取波罗的海出海口，与瑞典王国展开了殊死搏斗。爱沙尼亚正是主战场之一。哈利亚拉这座扼守要道的教堂，不可避免地再次被卷入战争的漩涡。可以想象，它厚实的墙壁又一次庇护了逃难的村民，塔楼里或许曾驻扎过士兵。战争的结果是瑞典势力的消退和俄罗斯帝国的崛起，哈利亚拉也随之进入了长达两百年的俄治时期。教堂的日常功能虽然延续，但它的防御角色彻底成为了历史。它从一座活的堡垒，渐渐变成了一座地标，一个关于过往危险的纪念碑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "苏联时代带来了新的挑战——无神论的意识形态压制。许多教堂被关闭、改造甚至拆毁。哈利亚拉教堂奇迹般地得以保存，但可以想见，其宗教活动受到了极大限制，建筑也可能因缺乏维护而日益破败。直到1991年爱沙尼亚恢复独立，这座古老的教堂才真正迎来了新生。它被交还给信众，开始了缓慢而精细的修复。今天的哈利亚拉教堂，塔楼上的巴洛克尖顶依然在阳光下闪耀，厚重的石墙温暖地接纳着祈祷。它不再需要防御任何实体敌人的进攻，但它所承载的记忆——关于抵抗、生存、信仰的韧性——却比任何时期都更加清晰和珍贵，如同刻在石头上的古老符文，等待着每一位有心人的解读。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在上午十点前抵达，这时游客稀少，晨光正好从东侧洒在教堂塔楼上，光影效果绝佳。整个深度游览建议预留2.5至3小时。节奏宜慢不宜快，核心是感受氛围而非打卡。先从外部环绕一周，体会其作为防御工事的压迫感与作为乡村建筑的亲和力之间的对比；然后进入内部，在幽暗与宁静中触摸历史；最后在周边村落随意漫步，将这座建筑放回它赖以生存的生活图景中去理解。这样的安排能让你由远及近、由表及里，层层深入地体验哈利亚拉的多重灵魂。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`教堂内部地面可能不平且昏暗，务必穿一双舒适防滑的鞋子。
爱沙尼亚乡村地区英语普及度一般，教堂管理者可能只说爱沙尼亚语或俄语，一个微笑和简单的手势是最好的沟通方式。
尊重当地礼仪，如果内部正在举行小型仪式或有人安静祈祷，请保持绝对沉默并避免拍照。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从停车场那片柔软的草地上开始，先退后几十米，让自己能完整地仰视那座仿佛从大地深处生长出来的、带有巴洛克尖顶的灰色堡垒塔楼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺时针慢慢绕行教堂一周，用手指轻轻触摸那些冰凉、粗糙且布满深深凿痕的石灰岩墙砖，感受几个世纪风雨和战火留下的独特肌理。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`留心观察教堂厚重的南墙上那些位置极高、狭窄如缝隙的窗户，想象它们如何在黑暗年代既引入一丝微光，又完美地履行着防御职责。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从西侧那扇带有简单雕花的厚重木门进入教堂内部，让眼睛适应片刻昏暗，然后聆听绝对寂静中自己心跳的声音与远处隐约的鸟鸣。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`仔细寻找中殿里那些颜色已然黯淡的17-18世纪木质雕花长椅与讲坛，上面可能刻着船只、麦穗等象征世俗生活与救赎希望的朴素图案。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果开放且有体力，可以尝试攀登塔楼内部狭窄陡峭的石阶（请务必确认安全并量力而行），从昔日弓箭手守卫的窗口眺望无边的松林与红色屋顶的村落。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出教堂，到院子角落那些被青苔半覆的古老墓碑间静静走一走，读一读上面早已模糊的铭文，它们大多是爱沙尼亚语和德语的混合。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，沿着小路散步到附近的哈利亚拉村中心，在村里唯一的小杂货店买一瓶本地格瓦斯，坐在长椅上看着村民们不紧不慢地经过。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`教堂东南侧田野边缘`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，利用金色侧光拍摄教堂全景，将前景的野花或草甸纳入，突出其遗世独立的苍茫感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`塔楼底部仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`站在塔楼正下方，使用广角镜头垂直向上拍摄，捕捉堡垒般的石墙与巴洛克尖顶形成的强烈视觉冲突，构图极具张力。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`中殿内部光影`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个晴朗日子的中午前后，等待阳光从南侧高窗射入，在地板或长椅上形成明确的光斑，拍摄空无一人的座椅沉浸于神圣光线中的静谧画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`西立面门廊细节`}</h4>
                  <p className="text-sm text-gray-700">{`下午光线柔和时，近距离拍摄教堂入口处带有古老铁艺装饰的木门和石雕门框，特写其历经沧桑的纹理与质感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从墓园角度回望`}</h4>
                  <p className="text-sm text-gray-700">{`站在教堂墓园的古老墓碑之间，以石碑为前景框架，拍摄教堂建筑的后部与塔楼，营造一种历史层叠、生死守望的深沉意境。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用三脚架在教堂内部拍摄长时间曝光时，请确保绝对不妨碍他人，且最好事先征得管理者的默许。`}</li>
                <li>• {`无人机飞行在爱沙尼亚受到严格管制，尤其在上空有民居和教堂的区域，未经特别许可请勿起飞，以免触犯法律并打扰社区宁静。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济森林小屋`}</h4>
                  <p className="text-sm text-blue-800">{`位于哈利亚拉村外三公里处的松林湖畔，是一对老夫妻经营的简朴木屋，提供自制早餐，晚上可以围着篝火听他们讲本地传说。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`乡村家庭民宿`}</h4>
                  <p className="text-sm text-green-800">{`教堂步行五分钟可达的百年老木屋，主人是退休教师，房间整洁温暖，早餐的黑麦面包和自制果酱堪称一绝，能深度体验爱沙尼亚家庭生活。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特色庄园客栈`}</h4>
                  <p className="text-sm text-yellow-800">{`驾车十分钟可达的19世纪小型贵族庄园改造的客栈，房间宽敞充满古典气息，带有一个美丽的荒芜花园，适合追求宁静与历史氛围的旅人。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`现代设计度假屋`}</h4>
                  <p className="text-sm text-purple-800">{`位于拉克韦雷市郊的时尚独栋别墅，拥有桑拿房和全落地窗景观，适合作为探索整个西维鲁县地区的舒适基地，驾车往返哈利亚拉也很方便。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "哈利亚拉本地住宿选择极其有限且季节性很强，夏季务必提前数月预订。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果订不到，建议以附近的拉克韦雷市（Rakvere）作为住宿大本营，那是一个迷人的中世纪小镇，餐饮交通选择多得多，开车到哈利亚拉仅需15分钟。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开哈利亚拉的时候，我的背包里没有多一件纪念品，但心里却好像被那块沉重的石灰岩填满了一些说不清的东西。它不像那些世界闻名的地标，给你直接的、澎湃的美的冲击。它给你的是一种沉甸甸的“存在感”。你会反复想起那堵厚墙的触感，那种冰凉和粗糙，是上百个冬季的严寒和数十代人的触摸共同锻造的。这是一种需要耐心和安静才能接收到的频率。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求效率、热衷打卡的快节奏旅行时代，哈利亚拉这样的地方像一颗被遗忘在时间河床上的卵石。它没有迎合任何人的期待，只是静静地、本真地在那里，展示着历史未经打磨的原始面貌——既是信仰的温柔，也是生存的残酷。它提醒我们，欧洲的深度远不止于巴黎的铁塔或罗马的废墟，更在于这些散落在乡野之间、承载着具体社区全部记忆的“活化石”。来这里，不是为了一张漂亮的照片，而是为了完成一次与时间本身的对话。当你站在塔楼的阴影下，听见风吹过松林的涛声与几个世纪前或许并无二致时，你会明白，有些旅程，是为了让灵魂的根须触碰大地深处的记忆层。哈利亚拉，就是这样一个让匆忙世界暂停，让你听见历史深呼吸的地方。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/tartu-university-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塔尔图大学城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tartu University Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rakvere-medieval-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉克韦雷中世纪城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rakvere Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/haapsalu-castle-estonia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈普萨卢城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Haapsalu Castle</p>
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
