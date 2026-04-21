import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '韦莱斯 Veles｜探访北马其顿山城，仰望如混凝土之花绽放的震撼二战纪念碑 - 最佳欧洲景点',
  description: '第一眼看到它的时候，我甚至忘了呼吸。你从韦莱斯那些带着奥斯曼风情的红瓦屋顶间穿过，一抬头，它就撞进了你的视线——那不是一座“建筑”，更像是一个从大地深处生长出来的、灰白色的巨大有机体。它静默地矗立在陡峭的山坡上，俯瞰着脚下蜿蜒如银练的瓦尔达尔河。午后的阳光正烈，给混凝土粗糙的表面镀上一层金色的硬壳，',
}

export default function VelesKosturnicaMemorialPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '北马其顿', href: '/destinations/europe' },
            { label: '韦莱斯', href: '/destinations/europe' },
            { label: '韦莱斯', href: '/attractions/veles-kosturnica-memorial' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`韦莱斯・Veles・北马其顿・韦莱斯`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到它的时候，我甚至忘了呼吸。你从韦莱斯那些带着奥斯曼风情的红瓦屋顶间穿过，一抬头，它就撞进了你的视线——那不是一座“建筑”，更像是一个从大地深处生长出来的、灰白色的巨大有机体。它静默地矗立在陡峭的山坡上，俯瞰着脚下蜿蜒如银练的瓦尔达尔河。午后的阳光正烈，给混凝土粗糙的表面镀上一层金色的硬壳，那些尖锐的、向外辐射的“花瓣”轮廓，在巴尔干清澈得惊人的蓝天背景下，切割出极具力量感的几何图形。风很大，在山谷间呼啸，穿过纪念碑那些空灵的缝隙，发出一种低沉而悠远的呜鸣，像是大地在叹息。
我沿着之字形的小路向上爬，脚下是干燥的泥土和碎石子，空气里混合着野生百里香的辛辣香气和烈日炙烤岩石的尘土味。走近了，才越发感到那种非人的尺度带来的压迫感。它不是用来亲近的，是用来仰望和思考的。混凝土的表面布满时间的痕迹，雨水冲刷的流纹，深浅不一的污渍，还有角落里一些模糊的涂鸦。奇妙的是，这种粗粝和破败感，非但没有削弱它的威严，反而增添了一种真实的、属于这个地区的沉重感。几个当地的少年坐在低一层的平台上，喝着汽水，低声说笑，他们身后就是那个象征着牺牲与抗争的庞然大物。这一刻，纪念碑不再是教科书里的图片，它成了这个社区背景的一部分，是年轻人聚会的老地方，是承载着复杂记忆的日常地景。
钻进它的“花心”，是另一种完全不同的体验。外面的世界——河流、城镇、远山——被那些巨大的混凝土臂膀框成了一幅幅流动的画。喧嚣的风在这里变成了穿堂而过的气流，光线从各个意想不到的角度射入，在冰冷的地面上投下不断变幻的、锋利的光影。这里异常安静，安静得能听到自己的心跳。这个空间仿佛一个现代主义的教堂中殿，没有神像，没有祭坛，供奉的是一种名为“记忆”的抽象之物。你可以触摸墙壁，感受混凝土的冰冷与粗糙，然后想象半个多世纪前，人们是如何怀着怎样的激情与理想，将这样的形体从图纸变为现实，矗立在这片经历过太多战火与伤痛的土地上。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一眼看到它的时候，我甚至忘了呼吸。你从韦莱斯那些带着奥斯曼风情的红瓦屋顶间穿过，一抬头，它就撞进了你的视线——那不是一座“建筑”，更像是一个从大地深处生长出来的、灰白色的巨大有机体。它静默地矗立在陡峭的山坡上，俯瞰着脚下蜿蜒如银练的瓦尔达尔河。午后的阳光正烈，给混凝土粗糙的表面镀上一层金色的硬壳，那些尖锐的、向外辐射的“花瓣”轮廓，在巴尔干清澈得惊人的蓝天背景下，切割出极具力量感的几何图形。风很大，在山谷间呼啸，穿过纪念碑那些空灵的缝隙，发出一种低沉而悠远的呜鸣，像是大地在叹息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "我沿着之字形的小路向上爬，脚下是干燥的泥土和碎石子，空气里混合着野生百里香的辛辣香气和烈日炙烤岩石的尘土味。走近了，才越发感到那种非人的尺度带来的压迫感。它不是用来亲近的，是用来仰望和思考的。混凝土的表面布满时间的痕迹，雨水冲刷的流纹，深浅不一的污渍，还有角落里一些模糊的涂鸦。奇妙的是，这种粗粝和破败感，非但没有削弱它的威严，反而增添了一种真实的、属于这个地区的沉重感。几个当地的少年坐在低一层的平台上，喝着汽水，低声说笑，他们身后就是那个象征着牺牲与抗争的庞然大物。这一刻，纪念碑不再是教科书里的图片，它成了这个社区背景的一部分，是年轻人聚会的老地方，是承载着复杂记忆的日常地景。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "钻进它的“花心”，是另一种完全不同的体验。外面的世界——河流、城镇、远山——被那些巨大的混凝土臂膀框成了一幅幅流动的画。喧嚣的风在这里变成了穿堂而过的气流，光线从各个意想不到的角度射入，在冰冷的地面上投下不断变幻的、锋利的光影。这里异常安静，安静得能听到自己的心跳。这个空间仿佛一个现代主义的教堂中殿，没有神像，没有祭坛，供奉的是一种名为“记忆”的抽象之物。你可以触摸墙壁，感受混凝土的冰冷与粗糙，然后想象半个多世纪前，人们是如何怀着怎样的激情与理想，将这样的形体从图纸变为现实，矗立在这片经历过太多战火与伤痛的土地上。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`韦莱斯`} />
                <InfoRow label="英文名称" value={`Veles`} />
                <InfoRow label="正式名称" value={`韦莱斯`} />
                <InfoRow label="国家" value={`北马其顿`} />
                <InfoRow label="城市" value={`韦莱斯`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座纪念二战期间（1941-1944）在韦莱斯及周边地区牺牲的南斯拉夫游击队员和革命者的标志性纪念碑。`} />
                <InfoRow label="建筑特色" value={`一个由巨大混凝土“花瓣”构成的抽象雕塑，从山坡上拔地而起，形似一朵绽开的花朵或一颗恒星，内部形成一个可进入的沉思空间。`} />
                <InfoRow label="建筑风格" value={`野兽派（粗野主义）与纪念性抽象雕塑的融合。`} />
                <InfoRow label="文化价值" value={`它不仅是对牺牲者的缅怀，更是前南斯拉夫时期“斯波梅尼克”（Spomenik）纪念碑建筑美学的杰出代表，体现了用现代艺术语言诠释集体记忆和乌托邦理想的独特尝试。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`纪念碑区域全天24小时开放，可自由前往。纪念碑内部空间（“花蕊”部分）开放时间不定，通常仅在特定纪念日或有预约的导览时开放。建议最佳参观时间为日出至日落之间，以确保安全并获得最佳视野和光线。`} />
              <InfoRow label="门票价格" value={`免费。这是一座公共纪念空间，无需门票。若想参加有组织的内部导览（极少数情况），可能需要联系当地文化部门或旅游信息中心询问详情，通常也仅为捐赠形式。`} />
              <InfoRow label="地址" value={`Kosturnica Memorial, 1400 Veles, North Macedonia`} />
              <InfoRow label="交通方式" value={`从首都斯科普里出发是最佳选择。在斯科普里中央巴士站乘坐前往韦莱斯（Veles）的巴士，车程约1小时，班次频繁（约每半小时一班），票价低廉。抵达韦莱斯巴士站后，纪念碑是城市最显著的地标，抬头可见。推荐步行前往：从市中心沿“Goce Delchev”街向山的方向走，随后跟随指向“Spomenik Kosturnica”的路牌或当地人指引，开始一段约20-30分钟的上坡步行。体力不佳者可考虑搭乘出租车（告诉司机去“Kosturnica Spomenik”），车程约5-10分钟。自驾游客可将车停在山坡下的小型免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要理解科斯图尔尼察纪念碑，你必须先理解韦莱斯，理解马其顿这片土地在20世纪漩涡中的命运。这里从来都是文明的十字路口，但在近代，它最深重的伤痕来自于二战。1941年，轴心国军队占领了南斯拉夫，韦莱斯被划归保加利亚管辖。随之而来的是压迫、抵抗与血火。在周边的群山之中，由共产党领导的南斯拉夫民族解放游击队迅速壮大，韦莱斯地区成了活跃的抵抗据点。战斗是残酷的，牺牲无处不在。这座纪念碑所纪念的，正是那些没有留下名字、或名字已被风化的年轻战士，他们在黑暗岁月里，选择了为一种模糊但充满希望的未来而战。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战争结束了，但记忆需要形状。在铁托领导下的南斯拉夫社会主义联邦共和国，一种独特的纪念文化诞生了。政府发起了在全国范围内修建“斯波梅尼克”（意为纪念碑）的运动，旨在超越民族分野，构建一个统一的“南斯拉夫”身份和二战胜利叙事。这些纪念碑往往委托给当时最前卫的雕塑家和建筑师，鼓励他们打破传统英雄雕像的窠臼，用抽象的、充满力量感的现代形式来表达牺牲、斗争与兄弟团结。科斯图尔尼察纪念碑正是这一波艺术与政治浪潮下的产物。它建于1970年代，具体的设计师信息在历史变迁中已有些模糊（常见归于当地或贝尔格莱德的艺术家集体），但这恰恰反映了它作为一项“国家工程”的性质。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字“Kosturnica”直译是“骨灰盒”或“藏骸所”，这直接指向了其所在地的历史——这里曾是一个战场，掩埋着许多无名烈士的遗骸。选择这样一个具有强烈象征意义的地点，建造一个形如绽放花朵或永恒之星的纪念碑，其寓意是深刻而矛盾的：既承认死亡的冰冷事实（混凝土的粗粝、空间的冷峻），又歌颂牺牲所换来的新生与希望（花朵的形态、向上的动势）。这是一种用极致现代主义美学来消化历史创伤的尝试，充满了那个时代的理想主义色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史继续向前滚动。1990年代，南斯拉夫解体，北马其顿独立。意识形态更迭，曾经被广泛宣扬的“兄弟团结与统一”叙事变得尴尬甚至被有意遗忘。许多前南地区的“斯波梅尼克”陷入了无人问津、任其衰败的境地。韦莱斯的这座纪念碑也经历了同样的命运。官方的纪念活动减少了，维护经费中断了，它孤独地站在山坡上，逐渐被风雨侵蚀，被涂鸦覆盖，从国家记忆的象征，变成了一个晦涩而庞大的现代废墟。本地年轻人或许知道它关于战争的故事，但更多的情感联结，可能来自这里是约会、看日落、逃离小镇沉闷的场所。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "有趣的是，近十年来，随着全球对粗野主义建筑和冷战历史遗迹的兴趣复兴，以及社交媒体对独特视觉景观的追捧，像科斯图尔尼察这样的纪念碑迎来了意想不到的“第二春”。它不再仅仅是沉重的历史课本，而被旅行者、摄影师和艺术史学者重新发现，视为一种震撼人心的、具有极高美学价值的“失落乌托邦”遗迹。它的形象在互联网上传播，吸引着世界各地的好奇者前来探访。今天，当你在黄昏时分站在它面前，感受的是一种多层次的厚重：战争的惨烈、社会主义时期的理想与实验、后冷战时代的遗忘与转型，以及当下全球文化对其进行的重新解读与消费。它是一朵用混凝土浇筑的、关于记忆本身的花朵，每一道裂缝里，都塞满了复杂的历史回音。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议将整个探访安排为半日行程。最好在午后稍晚，比如下午三点左右抵达韦莱斯市中心。这样你可以先感受山下小镇的生活气息，避开正午最酷热的爬山时段，并且确保在日落前一小时左右抵达纪念碑，那是光线最魔幻、拍照最美的黄金时刻。整体耗时约3-4小时，节奏应是“先抑后扬”：从平淡日常的街市开始，缓缓爬升，最终抵达充满视觉与思想冲击的纪念碑，在落日余晖中完成这次朝圣。这样的安排让你能用身体感知从“生活”到“纪念”的空间过渡，体验更加完整和深刻。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿一双绝对舒适、防滑的徒步鞋，上山的路部分是土石路，有些陡峭。夏季务必携带足量饮用水，山上毫无遮挡，非常炎热且没有补给点。纪念碑内部和周围地面可能有碎石和杂物，探索时注意脚下安全，尤其照看好小朋友。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在韦莱斯巴士站下车后，先别急着上山，穿过马路到主街逛逛那些卖日用品和新鲜果蔬的小店，听听周围清脆的马其顿语，让自己融入小镇的日常脉搏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一家街角的传统咖啡馆（kafana），点一小杯浓郁的土耳其咖啡，坐在室外看行人匆匆，为接下来的爬山积蓄一点咖啡因和闲情。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`开始沿着清晰的山路向纪念碑方向步行，途中会经过一些安静的居民区，看看阳台上盛开的天竺葵和偶尔对你微笑的老人。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当道路变得陡峭，喘息声加重时，记得回头望，脚下韦莱斯城的红色屋顶和瓦尔达尔河的河谷景色会像画卷一样徐徐展开，越来越壮阔。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`终于抵达纪念碑所在的平台，先不要急着拍照，静静地绕着它走一圈，从每一个角度感受它巨大形体与周围山峦、天空的关系。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进纪念碑的内部空间，找一处背阴的墙壁靠坐片刻，感受穿堂风的凉意，看光影在地上缓慢移动，体会这个“现代圣殿”的静谧与空灵。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时机正好，等待日落。看夕阳的暖光如何将冰冷的混凝土染成琥珀色、粉紫色，看城镇的灯火逐一亮起，与纪念碑的剪影构成一幅超现实的画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`趁着天未全黑，沿着有照明的主路下山，回到镇上找一家河边餐厅，用一顿美味的马其顿烤肉大餐来慰劳自己，并与当地人聊聊他们眼中的这座山上的“巨花”。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`纪念碑正前方远景`}</h4>
                  <p className="text-sm text-gray-700">{`站在山坡下第一个大转弯处的空地上，用长焦镜头压缩空间，将纪念碑的完整形态与山下城镇的屋顶、河流一同纳入画面，最佳时间是下午侧光时，立体感最强。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`内部仰拍“花瓣”`}</h4>
                  <p className="text-sm text-gray-700">{`走进纪念碑中心，将相机紧贴地面向上垂直仰拍，可以拍到数片巨大混凝土“花瓣”向中心聚拢并切割天空的震撼构图，正午时分阳光直射时，光影对比最为戏剧化。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`侧面剪影与人物`}</h4>
                  <p className="text-sm text-gray-700">{`日落前后半小时，请同伴走到纪念碑某个“花瓣”的弧形开口处，拍摄其剪影，人物的小与建筑的巨大会形成强烈对比，金色或深蓝色的天空是绝佳背景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从纪念碑俯瞰城镇`}</h4>
                  <p className="text-sm text-gray-700">{`利用纪念碑本身的框架结构，比如从一个较小的三角形缝隙中向外拍摄，将远处蜿蜒的河流和城镇作为焦点，营造一种“窥视历史与当下”的窥视感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`无人机视角（如允许且安全）`}</h4>
                  <p className="text-sm text-gray-700">{`从纪念碑正上方垂直俯瞰，是展现其完美辐射对称形态和抽象花朵造型的唯一角度，清晨或傍晚光线柔和时拍摄最佳。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重此地作为纪念场所的肃穆性，避免轻浮或戏谑的摆拍。使用无人机前，务必了解当地法规，并注意强风天气，山谷中风势多变强劲。混凝土表面在阴天时色彩灰暗沉闷，尽量选择晴朗天气的黄金时刻拍摄，才能捕捉到它光影交织的质感美。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济实用之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在韦莱斯市中心如“Hotel Veles”这样的老牌酒店，价格亲民，位置绝佳，推开窗就是老街市井气息，晚上散步去河边餐馆非常方便。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验之选`}</h4>
                  <p className="text-sm text-green-800">{`尝试寻找斯科普里往返的当日游，但若想深度感受，斯科普里有大量设计型公寓或精品酒店，作为探索韦莱斯的大本营，夜生活和文化生活丰富得多。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受之选`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车约40分钟返回斯科普里，入住瓦尔达尔河畔的五星级酒店，在顶楼酒吧啜饮一杯，遥想白天所见的那朵山间混凝土之“花”，让历史与现代的碰撞在思绪中延续。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`隐居自然之选`}</h4>
                  <p className="text-sm text-purple-800">{`韦莱斯周边乡村有一些家庭经营的农庄（etno house），提供传统石屋住宿和家常菜肴，适合想彻底安静并深入体验马其顿乡村生活的旅行者。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "韦莱斯本身游客稀少，住宿选择有限且条件较为基础，提前预订并非必须，但若追求舒适，更建议以斯科普里为基地进行一日游。小镇治安良好，夜晚安静，但娱乐活动较少。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开韦莱斯很久之后，那朵混凝土之花的形象依然会冷不丁地闯入我的脑海。它不像那些精雕细琢、充满甜美故事的古迹，让人轻易地喜爱或赞叹。它带着一种生硬的、甚至是不适的美感，强迫你去面对一些宏大的、沉重的问题：关于战争与和平，关于记忆如何被塑造又被遗忘，关于乌托邦的理想如何凝结为冰冷的形体，最终又如何在时间中慢慢风化。这种思考的涩感，正是深度旅行最珍贵的收获之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个世界上，太多景点被驯化、被包装成易于消费的明信片。而韦莱斯的科斯图尔尼察纪念碑，依然保持着它的“野生”状态。它不讨好，不解释，只是沉默地矗立在那里，任凭阳光风雨和历史的尘埃在身上留下痕迹。正是这种真实与复杂，让它具有了直抵人心的力量。对于热爱深度游的旅人而言，它不仅仅是一个拍照点，更是一个进行历史沉思和美学体验的独特场域。来这里，你不只是看一座纪念碑，你是透过一个时代的棱镜，观看一片土地的灵魂，并在这朵永不凋零的混凝土之花下，与自己关于记忆、时间和意义的内心对话。这，或许就是旅行的最深意义。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/prilep-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普里莱普老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Prilep Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/prilep-markovi-kuli" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普里莱普</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Prilep</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/galicnik-traditional-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    加
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">加利奇尼克</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Galičnik</p>
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
