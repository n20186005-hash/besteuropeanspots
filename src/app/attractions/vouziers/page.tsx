import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '武济耶 Vouziers｜寻找罗兰·加洛斯与三个文艺复兴大门的奇迹 - 最佳欧洲景点',
  description: '车子驶离主干道，弯进阿登地区起伏的绿色丘陵中，武济耶就这么安静地出现在一片林野的怀抱里。没有蜂拥的游客大巴，没有招摇的纪念品商店，空气中弥漫着刚割过的草香和淡淡的面包烘焙气息。你把车停在市政厅前不大的广场上，推开车门的瞬间，最先听到的是喷泉潺潺的水声，以及远处教堂钟楼传来的、慢悠悠的报时钟响。时间在',
}

export default function VouziersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/france' },
            { label: '武济耶镇，阿登省', href: '/destinations/france' },
            { label: '武济耶', href: '/attractions/vouziers' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`武济耶・Vouziers・法国・武济耶镇，阿登省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶离主干道，弯进阿登地区起伏的绿色丘陵中，武济耶就这么安静地出现在一片林野的怀抱里。没有蜂拥的游客大巴，没有招摇的纪念品商店，空气中弥漫着刚割过的草香和淡淡的面包烘焙气息。你把车停在市政厅前不大的广场上，推开车门的瞬间，最先听到的是喷泉潺潺的水声，以及远处教堂钟楼传来的、慢悠悠的报时钟响。时间在这里，像是被调慢了好几拍。当地人骑着自行车叮铃铃经过，朝你这个生面孔投来友善而略带好奇的一瞥，然后继续他们的日常——去面包店，去咖啡馆，去街心花园的长椅上坐着晒太阳。这就是武济耶给你的第一印象：一个活着的、呼吸着的法国乡间小镇，从容不迫。
然而，就在这日常景致的几步之遥，两种截然不同的震撼在等待着你。一转身，圣莫里尔教堂那面巨大的砂岩立面就毫无预兆地撞进你的眼帘。它不是巴黎圣母院那种直插云霄的巍峨，而是一种横向铺陈的、厚重而精致的华丽。最惊人的是，它并排开着三扇巨大的门！每一扇都被繁复的文艺复兴式雕刻所包裹，有涡卷，有壁柱，有神祗和圣人的雕像在壁龛里静静凝视。阳光斜射过来，在石头的凹凸起伏间拉出长长的、戏剧性的阴影，让那些四百多年前的纹样仿佛在呼吸、在述说。你忍不住走近，用手指轻轻拂过被岁月打磨得温润的石头表面，冰凉而坚实。这种“三门并立”的格局，在整个法国都凤毛麟角，它静静地立在这里，却像一个被遗忘的华丽乐章。
而当你顺着安静的街道，走向小镇边缘那片开阔的公共墓地时，空气里的氛围彻底改变了。这里极其整洁、肃穆，绿草如茵，白色的十字架整齐排列。你几乎不用寻找，就能看到那个被法国国旗——蓝、白、红三色——所环绕的墓冢。它朴素得惊人，就是一个简单的石制十字架，上面刻着名字：ROLAND GARROS。周围偶尔有新鲜的鲜花。你站在那里，头顶是法国东北部开阔的、常常风云变幻的天空。一片寂静中，你仿佛能听到一个世纪前，螺旋桨撕裂空气的尖啸，能想象那位酷爱网球、更痴迷飞行的勇敢者，如何在这片天空上划过最后的轨迹。英雄的归宿，竟是在这样一个平凡而安宁的角落，这种反差带来的触动，深沉而持久。
小镇的魅力，就在于这种奇妙的并存。极致的建筑艺术与深沉的历史纪念，都被巧妙地编织进一片田园牧歌的日常经纬里。它不喧嚣，不张扬，只是静静地在那里，等待那些愿意偏离常规路线、渴望触摸真实历史纹理和静谧生活脉搏的旅人。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子驶离主干道，弯进阿登地区起伏的绿色丘陵中，武济耶就这么安静地出现在一片林野的怀抱里。没有蜂拥的游客大巴，没有招摇的纪念品商店，空气中弥漫着刚割过的草香和淡淡的面包烘焙气息。你把车停在市政厅前不大的广场上，推开车门的瞬间，最先听到的是喷泉潺潺的水声，以及远处教堂钟楼传来的、慢悠悠的报时钟响。时间在这里，像是被调慢了好几拍。当地人骑着自行车叮铃铃经过，朝你这个生面孔投来友善而略带好奇的一瞥，然后继续他们的日常——去面包店，去咖啡馆，去街心花园的长椅上坐着晒太阳。这就是武济耶给你的第一印象：一个活着的、呼吸着的法国乡间小镇，从容不迫。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，就在这日常景致的几步之遥，两种截然不同的震撼在等待着你。一转身，圣莫里尔教堂那面巨大的砂岩立面就毫无预兆地撞进你的眼帘。它不是巴黎圣母院那种直插云霄的巍峨，而是一种横向铺陈的、厚重而精致的华丽。最惊人的是，它并排开着三扇巨大的门！每一扇都被繁复的文艺复兴式雕刻所包裹，有涡卷，有壁柱，有神祗和圣人的雕像在壁龛里静静凝视。阳光斜射过来，在石头的凹凸起伏间拉出长长的、戏剧性的阴影，让那些四百多年前的纹样仿佛在呼吸、在述说。你忍不住走近，用手指轻轻拂过被岁月打磨得温润的石头表面，冰凉而坚实。这种“三门并立”的格局，在整个法国都凤毛麟角，它静静地立在这里，却像一个被遗忘的华丽乐章。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而当你顺着安静的街道，走向小镇边缘那片开阔的公共墓地时，空气里的氛围彻底改变了。这里极其整洁、肃穆，绿草如茵，白色的十字架整齐排列。你几乎不用寻找，就能看到那个被法国国旗——蓝、白、红三色——所环绕的墓冢。它朴素得惊人，就是一个简单的石制十字架，上面刻着名字：ROLAND GARROS。周围偶尔有新鲜的鲜花。你站在那里，头顶是法国东北部开阔的、常常风云变幻的天空。一片寂静中，你仿佛能听到一个世纪前，螺旋桨撕裂空气的尖啸，能想象那位酷爱网球、更痴迷飞行的勇敢者，如何在这片天空上划过最后的轨迹。英雄的归宿，竟是在这样一个平凡而安宁的角落，这种反差带来的触动，深沉而持久。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇的魅力，就在于这种奇妙的并存。极致的建筑艺术与深沉的历史纪念，都被巧妙地编织进一片田园牧歌的日常经纬里。它不喧嚣，不张扬，只是静静地在那里，等待那些愿意偏离常规路线、渴望触摸真实历史纹理和静谧生活脉搏的旅人。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`武济耶`} />
                <InfoRow label="英文名称" value={`Vouziers`} />
                <InfoRow label="正式名称" value={`Vouziers`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`武济耶镇，阿登省`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一个因一位国家英雄的安息而永远铭刻在法国航空史与民族记忆中的宁静小镇。`} />
                <InfoRow label="建筑特色" value={`拥有极其罕见、气势恢宏的带三个独立文艺复兴式雕刻大门的教堂立面，被誉为“阿登的石头交响乐”。`} />
                <InfoRow label="建筑风格" value={`火焰哥特式向文艺复兴风格过渡的珍贵范例，外立面装饰华丽，内部朴素庄严。`} />
                <InfoRow label="文化价值" value={`这里交织着对勇气与创新的永恒致敬（罗兰·加洛斯）和对本土建筑艺术瑰宝的默默坚守（圣莫里尔教堂）。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`圣莫里尔教堂通常在白天对游客开放，具体时间为上午9点至下午6点，冬季可能提前至下午5点关闭。内部参观免费，但请保持安静，可能偶遇弥撒活动。罗兰·加洛斯墓地所在的市政公墓全年全天开放，但建议在日出至日落间前往。小镇旅游局（通常位于市政厅内）开放时间为周一至周六上午10点至中午12点，下午2点至5点，周日及节假日休息。`} />
              <InfoRow label="门票价格" value={`圣莫里尔教堂免费参观，欢迎自愿捐赠以支持维护。小镇所有公共区域及罗兰·加洛斯墓地均无门票。小镇历史展览（如有）可能收取少量费用，约3-5欧元。`} />
              <InfoRow label="地址" value={`Place de l'Hôtel de Ville, 08400 Vouziers, France`} />
              <InfoRow label="交通方式" value={`武济耶是一个宁静的法国小镇，公共交通班次有限，最适合自驾探索。从巴黎出发，自驾沿A4高速公路向东前往兰斯方向，转入D987/D946公路向北，全程约2.5至3小时。若乘坐火车，可从巴黎东站乘坐TGV至香槟-阿登地区的首府沙勒维尔-梅济耶尔，车程约1.5小时，然后转乘当地TER列车或巴士前往武济耶，巴士班次较少，需提前查询时刻表，总耗时约3-4小时。最近的大型国际机场是巴黎戴高乐机场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "武济耶的故事，在很长一段时间里，都只是默兹河支流畔一个普通集镇的故事，围绕着农业、贸易和那座始建于中世纪的圣莫里尔教堂展开。直到16世纪，一场雄心勃勃的重建，为它留下了最独特的印记。那时的武济耶或许迎来了一段繁荣期，教区居民决定赋予他们的教堂一个配得上新时代的面孔。我们已无从知晓那位建筑师的名字，但他一定是个大胆而富有创意的人。他没有遵循常见的单门或双门设计，而是决定建造一个拥有三个同等规模、同样精美入口的宏伟立面。这不仅仅是为了壮观，在宗教象征意义上，三也代表着圣三位一体。工匠们用当地的砂岩，一刀一刀地刻出优雅的古典柱式、缠绕的茛苕叶、象征性的贝壳与丰饶角。这座立面成了火焰哥特式风格向文艺复兴过渡的活化石，它没有意大利式的奔放，却带着法国北方特有的庄重与精细的平衡。当它最终矗立起来时，一定成了整个阿登地区的骄傲。此后的几百年，教堂内部在法国大革命中遭受过损毁，又被朴素地修复，但那个非凡的立面，却奇迹般地历经风雨战火，保存了下来，像一个沉默的守护者，看顾着小镇的晨昏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间的指针猛然跳到20世纪初，一个与石头教堂截然不同的名字，将武济耶推向了全法国的视线中心：罗兰·加洛斯。他本名欧仁·阿德里安·罗兰·乔治·加洛斯，是个充满冒险精神的年轻人，热爱体育，尤其是网球，但他真正的激情在天空。他是最早一批特技飞行员，在航空业刚刚萌芽的年代一次次挑战极限。1913年，他完成了人类历史上第一次不着陆飞越地中海的壮举，从法国土伦飞到突尼斯，震惊世界。然而，真正让他成为民族英雄的，是在第一次世界大战的硝烟中。加洛斯不仅是战斗机飞行员，更是一位发明家。他设计了一种装置，让机枪子弹能够通过螺旋桨旋转的间隙射出，而不打中桨叶，这极大地提高了空战效率。1915年4月，他的飞机被德军击中，迫降在敌方阵地，他和他的秘密装置一起被俘。历经数年战俘营的磨难后，他于1918年成功逃脱，并迫不及待地重返蓝天，加入他心爱的飞行队。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "悲剧发生在1918年10月5日，战争结束前一个多月。加洛斯驾驶着他的战机，在香槟-阿登前线巡逻，地点就在武济耶附近。一场激烈的空战过后，他的飞机坠毁在这片土地上，年仅29岁。他的遗体被找到后，最初安葬在坠机地点。但法国人民无法接受他们的英雄长眠在荒野。经过慎重考虑，他的遗骨被迁葬到他生前最后一次执行任务区域附近一个宁静、完整且被尊敬的小镇——武济耶的公共墓地。从此，这个小镇的名字，便与法国航空先驱的荣光与牺牲紧紧联系在一起。后来，为纪念他，巴黎最重要的网球场馆以他的名字命名，这就是如今举办法国网球公开赛的“罗兰·加洛斯球场”。但真正的罗兰·加洛斯，他的身体和灵魂，永远安息在武济耶这片安静的土地下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "二十世纪的风雨继续洗礼着武济耶。两次世界大战，阿登地区都是惨烈的战场。小镇本身在战火中遭受了创伤，许多建筑被毁，但圣莫里尔教堂那珍贵的立面，再次幸免于难，或许连炮火都对这艺术杰作心存一丝敬畏。战后，小镇如同法国许多地方一样，慢慢重建，恢复宁静。罗兰·加洛斯的墓地，成为了一处爱国主义教育的圣地，每年纪念日，都会有官方仪式和民众自发前来献花。而那座有三个大门的教堂，则继续作为社区信仰与生活的中心，见证着婚礼、洗礼和葬礼，聆听着一代代武济耶人的祈祷与告解。历史在这里沉淀为两层：一层是遥远的、艺术的文艺复兴荣光，凝固在石头上；另一层是近世的、关乎勇气与牺牲的集体记忆，沉淀在土地里。它们共同构成了武济耶不可复制的灵魂。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议用一个完整而悠闲的白天来感受武济耶。最好在上午十点左右抵达，这时小镇刚刚苏醒，阳光柔和，适合拍照和漫步。整体游览节奏应放得非常慢，重在体验氛围而非赶景点。先从市政厅广场开始，建立方位感，然后去震撼的教堂立面细细品味，进入内部感受宁静。下午的重点是罗兰·加洛斯墓地，那是一个需要静默与反思的空间。最后，用一杯咖啡或一次河边散步来结束旅程。这样的安排让你既能欣赏建筑奇观，又能沉浸于历史情怀，同时不错过小镇本身的日常生活节奏。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇餐馆不多且午休时间较长，建议提前安排午餐或自备简单野餐在河边享用。参观墓地时请保持绝对的肃静与尊重，这是安息之地而非旅游景点。如果你对航空史特别感兴趣，可以结合参观沙勒维尔-梅济耶尔（车程约40分钟）的航空博物馆，获得更完整的背景知识。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从市政厅广场的古老喷泉旁出发，感受小镇平静的早晨，观察当地人如何开始他们的一天。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直走向圣莫里尔教堂，站在广场中央，花至少十五分钟从各个角度仰望那不可思议的、拥有三个文艺复兴大门的砂岩立面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开中间那扇厚重的木门走入教堂内部，让眼睛适应从华丽到朴素的光线转换，坐在长椅上静静聆听自己的呼吸和偶尔响起的脚步声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着指示清晰的小路步行约十分钟，穿过宁静的住宅区，来到绿草如茵的市政公墓，在排列整齐的十字架中找到被法国国旗环绕的罗兰·加洛斯之墓。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回到镇中心，在“飞行员咖啡馆”或面包店旁的露天座位点一杯浓缩咖啡，看着街景，回味刚才跨越几个世纪的所见所感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间充裕，在傍晚时分散步到附近的默兹河支流岸边，看夕阳将天空染成罗兰·加洛斯曾经飞翔过的颜色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第二天清晨，可以驱车前往小镇周边阿登森林的蜿蜒小路，想象百年前战机掠过树梢的景象，完成一次时空的闭环。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`教堂正面全景机位`}</h4>
                  <p className="text-sm text-gray-700">{`站在市政厅广场喷泉附近，用广角镜头将三个宏伟的入口和教堂钟楼一同纳入画面，最佳光线在上午十点前或下午三四点后，侧光能完美勾勒石雕的立体感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`石门雕刻特写机位`}</h4>
                  <p className="text-sm text-gray-700">{`贴近中间或左侧大门，聚焦于文艺复兴雕刻的细节，如涡卷、人脸或纹章，利用柔和的漫射光（阴天或阴影下）最能表现石头的质感和岁月痕迹。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`墓地静默构图机位`}</h4>
                  <p className="text-sm text-gray-700">{`在罗兰·加洛斯墓前一段距离，以简洁的白色十字架和飘扬的三色旗为主体，将后方整齐排列的其他墓冢作为延伸的背景，营造出肃穆、秩序与孤独感，清晨或黄昏的低角度光线最佳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`小镇生活场景机位`}</h4>
                  <p className="text-sm text-gray-700">{`在主干道旁的小咖啡馆外，捕捉当地人坐在露天座位看报、聊天的瞬间，将教堂钟楼或老建筑门面作为背景，体现历史与日常的交融。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`默兹河畔倒影机位`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，走到小镇边缘的河边，拍摄教堂或老房子在水中的倒影，色彩温暖，画面宁静。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用长焦镜头可以远距离捕捉教堂立面雕刻的细节，而不必打扰可能正在门前进行的宗教活动。在教堂内部拍摄时，务必关闭闪光灯，并绝对避免在举行仪式时拍照。尝试拍摄一些空景，比如无人的广场长椅、墓前的鲜花、咖啡馆门口的单车，这些画面往往比标准景点照更能传递情感。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`镇中心复古小旅馆`}</h4>
                  <p className="text-sm text-blue-800">{`由一栋19世纪老宅改造，房间不大但充满温馨的复古装饰，老板会热情地给你讲述小镇不为人知的故事，早餐的牛角包是镇上面包房直供的。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`郊外田园风光民宿`}</h4>
                  <p className="text-sm text-green-800">{`坐落在离镇子几分钟车程的农庄里，房间窗户正对着无尽的田野和森林，夜晚星空璀璨，绝对寂静，你能听到的只有风声和远处的犬吠。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特色历史建筑体验`}</h4>
                  <p className="text-sm text-yellow-800">{`如果运气好，可以找到镇上由老医生诊所或学校改造的独特住宿，保留了高高的天花板和旧式壁炉，让你睡在真正有故事的空间里。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`附近森林木屋`}</h4>
                  <p className="text-sm text-purple-800">{`对于追求极致宁静和自然感的旅行者，驱车十五分钟进入阿登森林，有设施齐全的独栋木屋可供租住，清晨在露台就能看到林间薄雾，完全与世隔绝。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "武济耶本身住宿选择非常有限，旺季（夏季和纪念日前后）务必提前数周预订。住在镇上可以享受夜晚和清晨绝无游客的宁静，但餐饮选择少；选择郊外住宿则需要有车。无论住在哪里，请准备好享受一个早睡的、真正放松的夜晚，这里的夜晚属于星空和寂静。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开武济耶的时候，我的车里没有多一件纪念品，但心中却装满了一种沉甸甸的、复杂的宁静。这个地方教会我，深刻的历史并不总存在于宏伟的都城和喧嚣的遗址。它可以栖息在一座小镇独一无二的教堂立面上，那三个沉默的大门，仿佛在无声地宣讲着文艺复兴的思潮如何涓滴至此；它也可以安眠在一片朴素公墓的十字架下，那里躺着一个国家关于飞翔、勇气与牺牲的全部记忆。武济耶的魅力，正在于它将这两种“重”，举重若轻地安放于一片田园牧歌的“轻”之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当今这个追求高效、打卡、刺激的旅行时代，武济耶像是一个固执的逆行者。它不提供便捷的交通，没有眼花缭乱的娱乐，甚至需要你带着一份对历史的敬意和内心的安静才能抵达。但恰恰是这份“不便”与“平淡”，过滤掉了浮光掠影的喧嚣，留下了真正渴望深度连接的旅人。在这里，你不是一个消费者，而是一个短暂的参与者，一个安静的聆听者。你聆听石头诉说的艺术野心，聆听天空残留的英雄传说，更聆听当下小镇生活平稳而真实的心跳。这种将辉煌历史与平凡当下并置的体验，让你不由得思考：何为永恒？是石头上不朽的雕刻，是史书中记载的名字，还是这日复一日、生生不息的简单生活本身？武济耶没有给出答案，它只是让你带着问题离开。而这，或许正是深度旅行最珍贵的礼物。如果你厌倦了表面的繁华，渴望一次能沉静心灵、触碰历史真实质感的旅程，那么，请务必来武济耶看看。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/gargilesse-dampierre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    加
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">加尔日莱斯-当皮埃尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gargilesse-Dampierre</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bergerac-dordogne-france" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝热拉克</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bergerac</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vezelay-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    韦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">韦兹莱隐修院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vézelay Abbey</p>
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
