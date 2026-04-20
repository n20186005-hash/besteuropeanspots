import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '凯瑟斯贝格 Kaysersberg｜葡萄酒香漫溢的阿尔萨斯最美小镇 - 最佳欧洲景点',
  description: '车子沿着蜿蜒的D28公路驶入山谷，当第一眼看到凯瑟斯贝格时，我仿佛不小心闯进了一本立体的童话书。那种感觉不是“壮观”，而是“心尖被轻轻捏了一下”的温柔。整座小镇像一块从山间生长出来的彩色姜饼，被茂密的森林和整齐的葡萄园梯田温柔地环抱着。空气中浮动着一种清甜的、复合的气味——刚割过的青草香，家家户户窗...',
}

export default function KaysersbergAlsacePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '凯瑟斯贝格', href: '/attractions/kaysersberg-alsace' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`凯瑟斯贝格・Kaysersberg・法国・凯瑟斯贝格（上莱茵省）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着蜿蜒的D28公路驶入山谷，当第一眼看到凯瑟斯贝格时，我仿佛不小心闯进了一本立体的童话书。那种感觉不是“壮观”，而是“心尖被轻轻捏了一下”的温柔。整座小镇像一块从山间生长出来的彩色姜饼，被茂密的森林和整齐的葡萄园梯田温柔地环抱着。空气中浮动着一种清甜的、复合的气味——刚割过的青草香，家家户户窗台上天竺葵的淡淡花香，还有一丝若有若无的、从古老酒窖石缝里渗出来的葡萄酒和木桶的陈年气息。
我沿着鹅卵石铺就的主街慢慢往里走，脚下是几个世纪以来被无数脚步打磨得光滑温润的石板。最妙的是那条穿城而过的韦斯河，河水清亮得能看见底下每一块鹅卵石，它哗啦啦的声响是小镇永恒的背景音乐，盖过了游客的嘈杂，让一切都安静下来。河边那些歪歪扭扭的半木结构房子，每一栋的斜梁、雕花、窗棂颜色都不同，鹅黄、淡粉、薄荷绿、矢车菊蓝……它们在午后的阳光下，把自己的影子投在潺潺的流水上，晃啊晃的，像一幅永不干涸的水彩画。当地的老人就坐在自家门口的木椅上晒太阳，身边可能趴着一只慵懒的猫，他们冲你点点头，眼神里没有对外来者的好奇，只有一种“我家很美吧，欢迎来看看”的淡然自豪。
走到小镇的中心，那座带屋顶的古老石桥赫然出现。它不像威尼斯叹息桥那般华丽，也不像伦敦塔桥那般雄伟，它就是朴实地、稳稳地连接着两岸的生活。桥下，河水奔腾；桥内，光线从木窗斜射进来，照亮空气中飞舞的微尘。站在桥中央向两边望去，一边是层层叠叠的彩色屋顶和远处山顶城堡的废墟剪影，另一边是露天咖啡座传来的杯盘轻响和人们低语的法语与阿尔萨斯方言。那一刻你会明白，凯瑟斯贝格不是一个“景点”，它是一个活着的、呼吸着的有机体，葡萄酒是它的血液，木筋房是它的骨骼，而这条河，是它生生不息的心跳声。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子沿着蜿蜒的D28公路驶入山谷，当第一眼看到凯瑟斯贝格时，我仿佛不小心闯进了一本立体的童话书。那种感觉不是“壮观”，而是“心尖被轻轻捏了一下”的温柔。整座小镇像一块从山间生长出来的彩色姜饼，被茂密的森林和整齐的葡萄园梯田温柔地环抱着。空气中浮动着一种清甜的、复合的气味——刚割过的青草香，家家户户窗台上天竺葵的淡淡花香，还有一丝若有若无的、从古老酒窖石缝里渗出来的葡萄酒和木桶的陈年气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`我沿着鹅卵石铺就的主街慢慢往里走，脚下是几个世纪以来被无数脚步打磨得光滑温润的石板。最妙的是那条穿城而过的韦斯河，河水清亮得能看见底下每一块鹅卵石，它哗啦啦的声响是小镇永恒的背景音乐，盖过了游客的嘈杂，让一切都安静下来。河边那些歪歪扭扭的半木结构房子，每一栋的斜梁、雕花、窗棂颜色都不同，鹅黄、淡粉、薄荷绿、矢车菊蓝……它们在午后的阳光下，把自己的影子投在潺潺的流水上，晃啊晃的，像一幅永不干涸的水彩画。当地的老人就坐在自家门口的木椅上晒太阳，身边可能趴着一只慵懒的猫，他们冲你点点头，眼神里没有对外来者的好奇，只有一种“我家很美吧，欢迎来看看”的淡然自豪。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走到小镇的中心，那座带屋顶的古老石桥赫然出现。它不像威尼斯叹息桥那般华丽，也不像伦敦塔桥那般雄伟，它就是朴实地、稳稳地连接着两岸的生活。桥下，河水奔腾；桥内，光线从木窗斜射进来，照亮空气中飞舞的微尘。站在桥中央向两边望去，一边是层层叠叠的彩色屋顶和远处山顶城堡的废墟剪影，另一边是露天咖啡座传来的杯盘轻响和人们低语的法语与阿尔萨斯方言。那一刻你会明白，凯瑟斯贝格不是一个“景点”，它是一个活着的、呼吸着的有机体，葡萄酒是它的血液，木筋房是它的骨骼，而这条河，是它生生不息的心跳声。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`凯瑟斯贝格`} />
                <InfoRow label="英文名称" value={`Kaysersberg`} />
                <InfoRow label="正式名称" value={`Kaysersberg`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`凯瑟斯贝格（上莱茵省）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座被誉为“阿尔萨斯葡萄酒之都”的瑰宝小镇，其名字本身就是一部帝国史，意为“皇帝的城堡”。`} />
                <InfoRow label="建筑特色" value={`被清澈的韦斯河一分为二的彩色木筋房小镇，中心矗立着一座文艺复兴时期带屋顶的古桥和一座威严的帝国城堡废墟。`} />
                <InfoRow label="建筑风格" value={`典型的阿尔萨斯半木结构民居风格，融合了中世纪防御工事、罗马式与哥特式宗教建筑以及文艺复兴时期的民用建筑。`} />
                <InfoRow label="文化价值" value={`这里是阿尔萨斯文化、美食与葡萄酒传统的完美交汇点，是诺贝尔奖得主阿尔伯特·施韦泽医生的故乡，也是法国“最美小镇”协会的创始成员之一。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇公共区域全年全天开放。主要历史景点如圣十字教堂、老城堡遗址、地方博物馆等开放时间各异，通常为上午10点至下午5点或6点。圣诞市场期间（通常为11月底至12月底）小镇中心会特别装扮并延长开放至夜晚。部分餐厅、酒窖和小型家庭作坊有午休习惯，大约在下午2点至5点关闭，建议提前规划。`} />
              <InfoRow label="门票价格" value={`进入小镇本身免费。参观老城堡遗址免费，但通往塔楼的楼梯有时会因维护关闭。地方博物馆门票约为5欧元。其他体验如品酒、工作坊等费用不一。搭乘镇上旅游小火车游览的费用约为8欧元。圣诞市场期间进入免费，但品尝美食和热红酒需要付费。`} />
              <InfoRow label="地址" value={`Rue du Général de Gaulle, 68240 Kaysersberg, France`} />
              <InfoRow label="交通方式" value={`从巴黎出发：最便捷的方式是搭乘TGV高铁至斯特拉斯堡火车站，车程约2小时。从斯特拉斯堡火车站，你可以租车自驾（约1小时车程，沿A35/E25高速公路行驶），这是探索阿尔萨斯葡萄酒之路最自由的方式。或者，从斯特拉斯堡车站外的公交总站乘坐Flixbus或当地公交车，有直达或经停科尔马的班车前往凯瑟斯贝格，车程约1.5小时，但班次较少，需提前查好时刻表。
从科尔马出发：科尔马是最近的交通枢纽，距离仅约12公里。在科尔马火车站外的公交站乘坐106路或140路公交车，约30-40分钟即可抵达凯瑟斯贝格中心，车次较为频繁（大约每小时一班）。打车是最方便但最贵的选择，约需15-20分钟。自驾则只需15分钟，沿着D11或D28公路穿越葡萄园风景绝佳。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从罗马人说起。早在两千多年前，精明的罗马士兵就看中了这片肥沃的山谷和战略位置，他们在这里种植了第一批葡萄藤，为这片土地注入了最初的酒神基因。但真正让凯瑟斯贝格登上历史舞台的，是神圣罗马帝国的皇帝们。公元13世纪初，霍亨斯陶芬王朝的腓特烈二世皇帝下令，在俯瞰山谷的陡峭山脊上，建造一座坚固的城堡，以巩固帝国在阿尔萨斯的统治。这座城堡被命名为“Kaysersberg”——“皇帝的城堡”，小镇也因此得名，并迅速在帝国的庇护下繁荣起来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`中世纪是凯瑟斯贝格的黄金时代。它加入了强大的“德卡波莱”同盟，这是一个由阿尔萨斯十个帝国自由城市组成的商业和军事联盟，相当于中世纪的“经济特区”。凭借葡萄酒贸易的特权和坚固的城防，财富滚滚而来。你可以想象那时的场景：满载着橡木桶的马车从陡峭的街道驶向莱茵河码头；来自各地的商人在广场上讨价还价；工匠行会在木筋房里制作精美的家具和铁器。然而，繁荣也引来了觊觎。整个中世纪和近代早期，凯瑟斯贝格就像一颗镶嵌在法德边界上的明珠，在两大强权的拉锯战中不断易手。它经历了无数次围攻、战火和瘟疫的洗礼。那座曾经象征皇权的城堡，最终在1632年的三十年代战争中被瑞典军队摧毁，只留下废墟沉默地诉说着权力的无常。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战争与和平交替上演，但生活总要继续。小镇的人们学会了在夹缝中生存的智慧，并把对生活的热爱倾注在建造家园和酿造美酒上。文艺复兴时期，富裕的葡萄酒商人和行会建造了我们今天看到的那些最精美的木筋房，它们门楣上的雕刻不仅有宗教符号，还有葡萄、酒桶和丰收的图案，彰显着主人的身份。那座坚固的圣十字教堂也在这一时期扩建，其内部华丽无比的木雕祭坛，出自大师之手，是阿尔萨斯地区晚期哥特艺术的瑰宝。更为珍贵的是，小镇孕育了阿尔伯特·施韦泽——那位在20世纪毅然放弃优越的学者和音乐家生活，前往非洲加蓬创办医院，并因此获得诺贝尔和平奖的伟人。他的故居至今保存完好，提醒着人们这片土地深厚的人文主义传统。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`二十世纪的两次世界大战，给阿尔萨斯带来了深重的身份撕裂和肉体创伤。凯瑟斯贝格也未能幸免，它遭受了猛烈的轰炸。但奇迹般地，小镇核心的历史建筑在战火中大部分留存了下来。战后，怀着对家园深沉的爱，居民们一砖一瓦地精心修复了被毁的房屋，并且没有将其变成僵化的博物馆，而是让它们继续充满烟火气地活着。1979年，法国“最美小镇”协会成立，凯瑟斯贝格与另外几个小镇共同成为创始成员，这不仅仅是一个称号，更是对当地人世代守护文化遗产的至高认可。如今，当你漫步其中，你触摸到的每一块木头、每一块石头，都叠加着帝国的野心、商人的精明、战火的创伤，以及最终，普通人对美好生活那朴素而坚韧的守望。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味凯瑟斯贝格，建议你在一个非周末的清晨抵达，这样能避开大巴旅游团，享受小镇苏醒时分最本真的宁静。整个深度游览大约需要5-6小时，节奏宜慢不宜快。上午专注于探索建筑、历史和登高望远，中午享用一顿地道的阿尔萨斯午餐，下午则沉浸在葡萄酒文化和河边漫步的慵懒氛围中。这样的安排能让你完整地经历小镇从晨光到午后暖阳的光影变幻，感受它不同时段的美。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇中心的街道多为鹅卵石路，请务必穿一双舒适防滑的鞋子，高跟鞋在这里简直是“刑具”。许多小酒窖和餐厅只收现金或法国本土的银行卡，出发前最好准备一些欧元现金。如果你想拜访阿尔伯特·施韦泽故居博物馆，请注意它的开放时间非常有限，通常只在下午开放几个小时，务必提前在官网确认。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在镇口的免费停车场，然后徒步穿过古老的石砌城门，让自己瞬间从现代社会步入中世纪的世界。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主街（共和街）缓缓上行，用指尖感受那些半木结构房屋上雕刻的葡萄、怪兽和圣经故事，留意每家店铺充满童趣的手绘招牌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在镇中心广场稍作停留，仰望圣十字教堂那高耸的哥特式塔楼，并走进教堂内部，在幽暗的光线中寻找那座令人震撼的彩色鎏金木雕祭坛。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂后面的一条隐秘小径开始攀登，穿过居民的后花园和葡萄田，一路喘着气爬到山顶的老城堡废墟脚下。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在城堡仅存的塔楼基座上，喘匀气后转身，你会收获整个阿尔萨斯山谷最无与伦比的明信片视角——彩色小镇全景就在你脚下铺开。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后，目标明确地走向那座带屋顶的古老石桥，在桥内的阴凉处站一会儿，听流水声被桥体放大成轰鸣，看光柱透过木板缝隙照射进来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`过桥后钻进河对岸的任何一家家庭式酒窖，不用害羞，点一份由当地庄主亲自讲解的品酒套餐，让雷司令和琼瑶浆的香气在舌尖跳舞。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，沿着韦斯河岸的绿荫小径随意散步，看野鸭嬉水，找一张长椅坐下，什么也不做，只是发呆，让小镇的节奏彻底同化你。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡废墟山顶全景位`}</h4>
                  <p className="text-sm text-gray-700">{`最佳时间是清晨日出后一小时或傍晚日落前一小时，此时光线柔和，侧光能完美勾勒出小镇木筋房的立体感和葡萄园的层次，使用广角镜头将废墟作为前景，小镇作为中景，远山作为背景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`带顶古桥内部框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`下午三点左右，阳光会以较低角度射入桥内，形成迷人的光影通道，站在桥的一端，利用桥廊的木结构形成自然的画框，聚焦于另一端走来的行人或彩色房屋，营造深邃的叙事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`韦斯河畔倒影拍摄点`}</h4>
                  <p className="text-sm text-gray-700">{`选择无风的清晨，在城堡桥下游的某个平静河段，蹲下身子将相机镜头尽量贴近水面，拍摄岸边五彩房屋和鲜花的完美倒影，对称构图会让照片充满静谧的童话感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣十字教堂侧面小巷`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，当阳光直射无法拍摄大场景时，可以钻进教堂侧面狭窄的“小威尼斯”区域，利用两侧高耸的木筋房形成狭窄的“一线天”，拍摄人物走在光影斑驳石板路上的背影，极具纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`某家酒窖的窗户边`}</h4>
                  <p className="text-sm text-gray-700">{`预订一家有临街窗台的餐厅或咖啡馆内部座位，在下午茶时分，从内向外拍摄，将一杯金黄色的琼瑶浆葡萄酒或精致的当地糕点作为前景，虚化窗外走过的行人和古老街道，生活气息扑面而来。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`当地居民非常注重隐私，拍摄私人住宅尤其是居民在家中的场景时，务必保持尊重，最好事先微笑示意或避免拍摄。使用无人机在法国小镇上空飞行有严格规定，通常需要提前申请许可，在未明确允许的情况下请不要起飞，以免惹来麻烦。最美的照片往往需要耐心，等一辆闯入画面的汽车离开，等一群鸽子突然飞过塔楼，这些瞬间都值得等待。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河畔梦幻阁楼`}</h4>
                  <p className="text-sm text-blue-800">{`一栋16世纪磨坊主住宅改造的公寓，卧室的斜屋顶木梁触手可及，推开窗就能听到韦斯河的潺潺水声，房东会为你准备好当地起泡酒作为欢迎礼。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`葡萄园农庄体验`}</h4>
                  <p className="text-sm text-green-800">{`住在小镇边缘一个世代经营的家庭葡萄农庄里，清晨在鸡鸣鸟叫中醒来，步行两分钟就能置身于漫山遍野的葡萄藤中，晚上还能参与庄主的收工品酒会。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`历史中心精品酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`由一座文艺复兴时期商人豪宅修复而成，房间环绕着一个静谧的内庭花园，古董家具与现代设施完美结合，下楼就是最热闹的广场，位置无可挑剔。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`隐居山林小屋`}</h4>
                  <p className="text-sm text-purple-800">{`对于追求绝对宁静的旅人，可以选择小镇上方森林里的独立木屋，拥有超大全景露台，私密性极佳，夜晚只见小镇灯火如星河，抬头便是璀璨星空。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`凯瑟斯贝格本身非常安全，但夏季（尤其是圣诞市场期间）住宿极为紧俏，必须提前数月预订。如果你开车前来，务必确认住宿地点是否提供停车场，镇内停车位非常有限且昂贵。选择住在当地人经营的民宿，不仅是获得深度体验的捷径，还能直接从主人那里听到许多旅行指南上找不到的故事和秘闻。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开凯瑟斯贝格好几天了，我的舌尖似乎还残留着琼瑶浆那种独特的荔枝与蜂蜜的混合香气，耳朵里也仿佛还能听见韦斯河永不停歇的欢快奔腾。但最让我念念不忘的，不是某个具体的画面，而是一种感觉——一种被时光温柔包裹，得以短暂喘息的感觉。在这个一切追求高效、快速、爆炸性体验的时代，凯瑟斯贝格固执地保持着另一种节奏。它的美，不在于惊心动魄，而在于细水长流的妥帖。它的历史，不是被封存在玻璃罩里的标本，而是被酿进了酒里，砌进了墙里，融进了每天的面包香气和傍晚散步的日常里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你也厌倦了在各大景点间疲于奔命的打卡，如果你渴望的旅行不只是“看到”，更是“感受到”和“融入”，那么请一定要来凯瑟斯贝格。来这里，学着像当地人一样，花一个小时品一杯酒，花一个下午看河水流动，花一辈子去守护和热爱自己的家园。这座阿尔萨斯山谷里的小镇，它会轻声告诉你：所谓永恒，并非坚不可摧的石头城堡，而是流淌在日常生活里，那份平凡却坚韧的、对美的执着与传承。这份领悟，或许就是这趟旅程能带给你的，最珍贵的礼物。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/collioure-harbour-fauvist-painters" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科利尤尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Collioure</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sarlat-la-caneda-medieval-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨拉拉卡内达</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sarlat-la-Canéda</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/riquewihr-alsace-fairytale-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    里
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">里屈埃维</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Riquewihr</p>
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
