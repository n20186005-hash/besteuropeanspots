import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '海达尔木板教堂 Heddal Stave Church｜挪威现存最大、童话三重顶尖的木构奇观 - 最佳欧洲景点',
  description: '车子刚转过一个平缓的山坡，它就像从一本厚重的北欧童话书中直接立起来的一样，猝不及防地占据了我的整个视野。海达尔木板教堂就那样安静地坐在一片修剪整齐的墨绿色草坪中央，背后是绵延的、色调稍浅的挪威森林和淡蓝的天空。第一眼，你绝不会把它和寻常的石头教堂混淆——它通体是深邃的、历经风霜的焦糖棕色，三层陡峭的...',
}

export default function HeddalStaveChurchPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '挪威', href: '/destinations/norway' },
            { label: '诺托登', href: '/destinations/norway' },
            { label: '海达尔木板教堂', href: '/attractions/heddal-stave-church' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`海达尔木板教堂・Heddal Stave Church・挪威・诺托登`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚转过一个平缓的山坡，它就像从一本厚重的北欧童话书中直接立起来的一样，猝不及防地占据了我的整个视野。海达尔木板教堂就那样安静地坐在一片修剪整齐的墨绿色草坪中央，背后是绵延的、色调稍浅的挪威森林和淡蓝的天空。第一眼，你绝不会把它和寻常的石头教堂混淆——它通体是深邃的、历经风霜的焦糖棕色，三层陡峭的坡屋顶像叠罗汉似的层层收拢，指向天际，最顶端立着金色的风信鸡。那种姿态，不像在祈求，更像是一种骄傲的、从大地生长出来的宣言。空气里有清冷的松木香，混杂着雨后泥土的湿润气息。
走近了，木头的气息更浓郁了。那不是新砍伐木材的刺鼻味，而是八百年来阳光、雨水、霜雪浸透后的深沉味道，厚重而温润。用手轻轻触碰外墙的木板，纹理粗糙而坚实，每一道沟壑都像是时间的年轮。教堂四周静极了，只有远处森林里偶尔传来的鸟鸣，和风吹过屋檐下那些古老木雕时发出的、极其细微的呜咽声。你会注意到那些雕饰——门楣上盘绕的龙形生物，张牙舞爪，眼神却似乎有些迷茫；还有那些简约的十字架图案，与龙纹交织在一起。这种奇异的和谐，仿佛在低声讲述一个关于征服与妥协、遗忘与铭记的漫长故事。
推开那扇厚重低矮的木门，仿佛跨入了另一个时空。外界的明亮被瞬间过滤成一种柔和、幽暗的金色。光线从高处小而精致的玻璃窗斜射进来，在空气中形成一道道清晰的光柱，光柱里尘埃缓缓浮动。你的眼睛需要一点时间来适应，然后，一个由无数笔直原木支撑起的、高耸而幽深的空间便在眼前展开。那些主要的立柱，被称为“木板”，粗壮得惊人，直接扎根于地下的基石。空气中弥漫着古老的蜡、木头和一种难以言喻的、类似干草药的味道。这里没有繁复的大理石雕塑或绚丽的壁画，所有的美都来自于结构本身——纵横交错的梁架、精巧的支撑、被无数信徒手掌摩挲得发亮的木长椅。一种朴素而强大的精神力量，充斥在这个木头的殿堂里。
你会发现，它并非一个孤立在时间之外的博物馆。旁边的墓园打理得整洁，偶尔有当地居民前来静静驻足。夏天，这里会举行传统的婚礼和弥撒，风琴声会再次回荡在这古老的木梁之间。它不仅仅是游客镜头里的奇观，更是社区记忆与生活的一部分，是连接着维京先祖与现代挪威人的一条坚韧的、木质的纽带。这份依然跳动着的生命力，或许才是它最动人的核心。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子刚转过一个平缓的山坡，它就像从一本厚重的北欧童话书中直接立起来的一样，猝不及防地占据了我的整个视野。海达尔木板教堂就那样安静地坐在一片修剪整齐的墨绿色草坪中央，背后是绵延的、色调稍浅的挪威森林和淡蓝的天空。第一眼，你绝不会把它和寻常的石头教堂混淆——它通体是深邃的、历经风霜的焦糖棕色，三层陡峭的坡屋顶像叠罗汉似的层层收拢，指向天际，最顶端立着金色的风信鸡。那种姿态，不像在祈求，更像是一种骄傲的、从大地生长出来的宣言。空气里有清冷的松木香，混杂着雨后泥土的湿润气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，木头的气息更浓郁了。那不是新砍伐木材的刺鼻味，而是八百年来阳光、雨水、霜雪浸透后的深沉味道，厚重而温润。用手轻轻触碰外墙的木板，纹理粗糙而坚实，每一道沟壑都像是时间的年轮。教堂四周静极了，只有远处森林里偶尔传来的鸟鸣，和风吹过屋檐下那些古老木雕时发出的、极其细微的呜咽声。你会注意到那些雕饰——门楣上盘绕的龙形生物，张牙舞爪，眼神却似乎有些迷茫；还有那些简约的十字架图案，与龙纹交织在一起。这种奇异的和谐，仿佛在低声讲述一个关于征服与妥协、遗忘与铭记的漫长故事。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`推开那扇厚重低矮的木门，仿佛跨入了另一个时空。外界的明亮被瞬间过滤成一种柔和、幽暗的金色。光线从高处小而精致的玻璃窗斜射进来，在空气中形成一道道清晰的光柱，光柱里尘埃缓缓浮动。你的眼睛需要一点时间来适应，然后，一个由无数笔直原木支撑起的、高耸而幽深的空间便在眼前展开。那些主要的立柱，被称为“木板”，粗壮得惊人，直接扎根于地下的基石。空气中弥漫着古老的蜡、木头和一种难以言喻的、类似干草药的味道。这里没有繁复的大理石雕塑或绚丽的壁画，所有的美都来自于结构本身——纵横交错的梁架、精巧的支撑、被无数信徒手掌摩挲得发亮的木长椅。一种朴素而强大的精神力量，充斥在这个木头的殿堂里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你会发现，它并非一个孤立在时间之外的博物馆。旁边的墓园打理得整洁，偶尔有当地居民前来静静驻足。夏天，这里会举行传统的婚礼和弥撒，风琴声会再次回荡在这古老的木梁之间。它不仅仅是游客镜头里的奇观，更是社区记忆与生活的一部分，是连接着维京先祖与现代挪威人的一条坚韧的、木质的纽带。这份依然跳动着的生命力，或许才是它最动人的核心。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`海达尔木板教堂`} />
                <InfoRow label="英文名称" value={`Heddal Stave Church`} />
                <InfoRow label="正式名称" value={`Heddal Stave Church`} />
                <InfoRow label="国家" value={`挪威`} />
                <InfoRow label="城市" value={`诺托登`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`挪威现存28座中世纪木板教堂中规模最宏伟的一座，是中世纪北欧木质建筑技艺与基督教文化融合的巅峰之作。`} />
                <InfoRow label="建筑特色" value={`拥有如同童话城堡般的壮观三重尖顶结构，全部由巨大原木（“木板”/stave）通过复杂的榫卯和木钉结构搭建而成，不使用一根金属钉子。`} />
                <InfoRow label="建筑风格" value={`以罗马式建筑为基底，融合了北欧维京传统的龙饰雕刻和后期哥特式尖顶元素的独特挪威木板教堂风格。`} />
                <InfoRow label="文化价值" value={`是理解前基督教时期北欧信仰如何与中世纪欧洲基督教文明碰撞、共生与演变的“活化石”，承载着挪威的民族精神与身份认同。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`每年六月至八月中旬每日开放，时间为上午10点至下午5点；五月及九月通常仅在周末开放，或需提前预约；冬季（十月至次年四月）原则上关闭，但可通过当地旅游局预约极少数团体参观。具体日期每年可能有微调，强烈建议出发前在其官方网站或诺托登旅游局页面进行最终确认。`} />
              <InfoRow label="门票价格" value={`成人票价为130挪威克朗；学生及长者（67岁以上）票价为100挪威克朗；儿童（6-15岁）票价为70挪威克朗；6岁以下免费；家庭票（2成人+2儿童）为350挪威克朗。门票包含教堂内部导览（夏季通常每半小时有英语或挪威语导览）及旁边的木板教堂博物馆入场费。`} />
              <InfoRow label="地址" value={`Heddalsvegen 412, 3676 Notodden, Norway`} />
              <InfoRow label="交通方式" value={`从奥斯陆出发最为便捷。自驾：沿E134公路向西行驶约1小时45分钟即可直达，教堂外有免费停车场。公共交通：从奥斯陆中央火车站乘坐区间列车（Regionaltog）至诺托登站（Notodden stasjon），车程约2小时，班次每天约5-6班。抵达诺托登火车站后，可转乘当地巴士（约10分钟）或直接步行（约3公里，35分钟，沿途风景优美）前往教堂。从桑德尔福德（Sandefjord）机场自驾前往约需1小时20分钟。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`关于海达尔木板教堂的诞生，本身就裹着一层传奇的迷雾。当地流传着一个美丽的传说：教堂的建造者名为“农夫 Finn”，他遇到了五位神秘的巨人。作为帮助他一夜之间运送来所有建筑木材的回报，巨人提出了两个苛刻的条件：要么猜出其中一位巨人的名字，要么交出他的眼睛乃至生命。就在木材全部就位、巨人前来索酬的紧要关头，农夫 Finn 听到了巨人之妻在林中哼唱的摇篮曲，歌中正呼唤着她丈夫的名字——“西格德”。农夫 Finn 高声喊出了这个名字，破解了咒语，巨人们瞬间消失，而教堂得以建成。这个融合了北欧萨迦神话色彩的故事，暗示着这座建筑的诞生，是一场凡人与超自然力量的较量，也隐喻着基督教在挪威扎根时与本土原始信仰的激烈碰撞。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`抛开传说，历史学者们推测教堂大约建于13世纪中期，也就是1240年前后。那时的挪威，虽已皈依基督教近两个世纪，但古老的北欧众神信仰和精灵传说依然深深植根于民间生活的土壤。建造这样一座规模宏大的教堂，不仅是一项宗教工程，更是新兴王权与教会权威的彰显。建造者们采用了北欧先祖们最擅长的材料——森林里取之不尽的木材，和最精湛的造船与木工技艺。那些复杂的榫卯结构、巨大的龙骨般的中央立柱，无不闪烁着维京长船建造技术的影子。可以说，这座教堂是用“异教”的双手，塑造了一个基督教的神圣空间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在随后的几百年里，它并非一帆风顺。宗教改革的风暴席卷北欧，教堂内部许多天主教装饰被移除或覆盖。岁月和气候更是无情的对手。木质结构面临着腐烂、虫蛀和变形的永恒威胁。19世纪时，它已显得破败不堪，差点面临被拆除的命运。幸运的是，一场全国性的民族浪漫主义运动兴起，挪威人开始急切地寻找能代表自身独特民族身份的历史遗迹。海达尔，作为最大、最壮观的木板教堂，自然成为了国宝级的象征。19世纪50年代和20世纪50年代，它经历了两次大规模的精湛修复。工匠们严格遵循中世纪技法，替换朽坏的木料，加固结构，尽可能保留每一片能保留的原始木材。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最近一次重大挑战发生在20世纪90年代。研究人员发现，长期的地基潮湿问题严重威胁到核心木结构的稳定。一场堪比外科手术的抢救工程随即展开：整个教堂被巨大的钢架结构小心翼翼地整体抬升，工程师们在下方重新修建了防水防潮的现代化地基，再将教堂毫发无损地放回原处。这项工程，是现代科技对古老文明的一次充满敬意的拥抱。今天，你步入教堂时脚下坚实的感觉，正是这次跨世纪对话的结果。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如今，它依然履行着作为一座活跃教堂的职能，每年举行弥撒和婚礼。同时，它也是一座无价的博物馆，向每一位来访者诉说着一个民族如何用自己熟悉的语言（木材与雕刻），去理解和接纳一种外来的信仰，并最终创造出一种独一无二、震撼人心的美丽。从维京时代的巨木，到中世纪信徒的祈祷，再到现代工程师的守护，海达尔木板教堂的故事，是一部用木头书写的、活的挪威史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排至少3-4小时进行深度游览。最佳抵达时间是上午10点刚开放时，既能避开可能出现的午后旅行团，又能享受到清晨柔和的光线，非常适合外部拍照。整体节奏宜缓不宜急，遵循“由外至内，由宏观至细节”的原则。首先花足够时间环绕教堂外部，欣赏其恢弘结构和精美雕饰；然后在导览时间进入内部，聆听专业讲解，感受空间与光影的魔力；最后参观一旁的木板教堂博物馆，将直观感受升华为历史认知。如果时间充裕，不妨在教堂周围的草地上野餐，或在森林小径散步，让这份古老沉静的氛围慢慢沉淀。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季（6月中至8月中）是唯一能稳定进入教堂内部的时段，其他时间务必提前在官网或旅游局确认，避免吃闭门羹。
进入教堂内部必须跟随导览团，不可自由行动，请尊重这一规定，并保持安静。
挪威天气多变，即便夏季也可能微凉有雨，建议穿一双适合在草地和石板路上行走的舒适鞋子，并备一件防风外套。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从停车场穿过草坪，先远远地凝视教堂完整的、如森林堡垒般的三重尖顶轮廓，感受它最初带给你的视觉冲击。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`缓步绕行教堂一周，仔细观察西门上方那些精美而神秘的龙形与藤蔓交织的浮雕，想象它们背后的传说。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在导览员的带领下，弯腰穿过低矮的西门，让眼睛在昏暗的光线中适应，然后抬头仰望那令人惊叹的、由粗大木柱和纵横梁架构成的内部高耸空间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`静静坐在中殿古老的木长椅上，抬头看阳光从高侧窗射入，在木柱和地板上画出移动的光斑，聆听导览员讲述“木板”结构的秘密和教堂的历史沉浮。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`仔细观赏内部为数不多的中世纪原物——如那个简朴的罗马式祭坛和墙上褪色的壁画痕迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出教堂，到旁边的木板教堂博物馆，通过模型、工具和历史照片，深入了解这种独特建筑技艺的方方面面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，在教堂后方宁静的古老墓园里慢走一圈，看看那些覆满青苔、刻着 rune 字母般古老字体的墓碑，体会时间的层叠。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`教堂东南侧草坪远端`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚时分，从这里可以拍下教堂三个尖顶与背后绵延森林、前方静谧墓园同框的经典全景，构图时让教堂占据画面右侧三分之二。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`西门浮雕特写`}</h4>
                  <p className="text-sm text-gray-700">{`上午的阳光能恰好照亮西门上方的木雕，使用大光圈镜头近距离拍摄，让盘龙的细节和历经风雨的木纹质感成为绝对主角。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`内部中殿仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`在导览允许且不使用闪光灯的情况下，站在中殿中央，将相机紧贴地面向上仰拍，捕捉那些交错的原木梁架形成的有力几何线条，营造强烈的纵深感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`教堂北侧阴影面`}</h4>
                  <p className="text-sm text-gray-700">{`下午的阳光会使教堂焦糖色的木墙呈现出丰富的色泽层次，寻找有青苔的石基与木质墙壁结合的角落，拍摄充满质感的细节。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`教堂内部严禁使用三脚架和闪光灯，高感光度和稳定的手持技巧是必须的。`}</li>
                <li>• {`尊重宗教场所的庄严性，拍摄时避免干扰正在进行中的仪式或静默祷告的访客。`}</li>
                <li>• {`挪威的“黄金时刻”（日出后和日落前一小时）光线极为柔和美妙，若能在此时间段游览，外部拍摄效果会大幅提升。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济舒适之选`}</h4>
                  <p className="text-sm text-blue-800">{`诺托登市中心的“维肯酒店”，由老建筑改造，交通便利，房间简洁温馨，下楼就是咖啡馆和超市，充满小镇生活气息。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色历史体验`}</h4>
                  <p className="text-sm text-green-800">{`距离教堂约15分钟车程的“海达尔农场客栈”，是一座建于18世纪的古朴农庄，提供家庭式客房和地道的挪威家常晚餐，夜晚格外宁静。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端设计享受`}</h4>
                  <p className="text-sm text-yellow-800">{`特雷德隆地区的“特雷德隆庄园酒店”，坐落在群山环绕的湖畔，由著名建筑师设计，将北欧极简美学与自然风光完美结合，提供顶级的桑拿和湖景露台。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`独特野趣尝试`}</h4>
                  <p className="text-sm text-purple-800">{`在诺托登附近的森林或湖边合法露营区搭建帐篷，夜晚在万籁俱寂中仰望纯净的北欧星空，清晨在鸟鸣中醒来，获得最贴近自然的体验。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`诺托登并非旅游热点城市，住宿选择相对有限，尤其在夏季，建议提前数周甚至数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果选择住在奥斯陆，当日往返海达尔完全可行，但会损失掉清晨和傍晚与教堂独处的宝贵时光，以及体验挪威小镇风情的机会。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`留意住宿是否提供自行车租赁，骑自行车沿着乡间小路探索教堂周边区域，会是另一种美妙的体验。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开海达尔很久以后，闭上眼，我依然能清晰地闻到那股混合了陈年松木、冷冽空气和干草的味道。这座教堂给我的震撼，并不仅仅在于它的高大或古老。它是一种证明，证明人类可以用最谦卑的材料——来自森林的树木，去搭建一个足以触摸天际、安放信仰的场所。在石头城堡遍地的欧洲，它以一种截然不同的、充满体温的木质语言，讲述着挪威的故事。那种语言里有维京人劈波斩浪的勇敢，有山民面对严冬的坚韧，也有一种对自然既敬畏又依赖的亲密情感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切追求坚固不朽、快速更迭的时代，海达尔木板教堂的存在，像一种温柔的提醒。它告诉我们，真正的永恒，或许不在于材料的坚硬，而在于形式的真诚与记忆的延续。它需要一代代人小心翼翼的呵护，如同呵护一段随时可能随风而逝的低语。它不是一个冰冷的纪念碑，而是一个依然呼吸着的生命体。每一位到访的旅人，在这里收获的不会只是一张构图完美的照片，而是一种沉静下来的力量，一种对“何以为家，何以为信仰”的、跨越八百年的木质回响。这，正是深度旅行最珍贵的意义——去遇见那些截然不同的世界观，并从中照见自己。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/urnes-stave-church" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    乌
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">乌尔内斯木板教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Urnes Stave Church</p>
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
              <a href="/attractions/lesund" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥勒松老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ålesund</p>
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
