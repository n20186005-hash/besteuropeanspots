import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '戈斯拉尔老城 Goslar｜千年帝国皇城与木筋屋的童话世界 - 最佳欧洲景点',
  description: '第一次走进戈斯拉尔老城，你会误以为自己不小心闯进了一本立体打开的格林童话。不是那种迪士尼化的甜美，而是带着烟熏火燎历史感、真正有血有肉的古老故事。从火车站走出来，穿过一道不起眼的城门，时间“唰”地一声就慢了下来。脚下是千百年来被马蹄和脚步磨得温润发亮的黑色玄武岩鹅卵石路，踩上去有种奇特的坚实感。空气...',
}

export default function GoslarOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '戈斯拉尔老城', href: '/attractions/goslar-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`戈斯拉尔老城・Goslar・德国・戈斯拉尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一次走进戈斯拉尔老城，你会误以为自己不小心闯进了一本立体打开的格林童话。不是那种迪士尼化的甜美，而是带着烟熏火燎历史感、真正有血有肉的古老故事。从火车站走出来，穿过一道不起眼的城门，时间“唰”地一声就慢了下来。脚下是千百年来被马蹄和脚步磨得温润发亮的黑色玄武岩鹅卵石路，踩上去有种奇特的坚实感。空气里飘着复杂的味道——刚出炉的德式椒盐卷饼的碱水香气，从古老建筑木缝里透出的、略带潮湿的木头味，还有远处咖啡店飘来的醇厚焦香。
所有感官的焦点，毫无意外地，都被那些房子夺走了。它们不是整齐划一的，而是像一群穿着五彩花衣、互相依偎着取暖的老人，挤挤挨挨地站满了每一条小巷。这就是德国最引以为傲的半木结构建筑，当地人叫它“Fachwerkhaus”。黑色的木条在白色或彩色的墙体上构成各种几何图形——菱形、十字形、太阳纹，每一栋都有自己的“表情”。有些木梁已经弯曲，仿佛承载了太多故事；有些窗台上盛开着天竺葵，鲜红的花朵在深色木头的映衬下，迸发出惊人的生命力。你几乎能听到木头在午后阳光的烘烤下，发出细微的、满足的“噼啪”声。
市场的钟声从广场方向传来，那是老城永恒的心跳。当你走到市场广场，豁然开朗的视野会让你忍不住深吸一口气。广场中央是那座著名的帝国之鹰喷泉，水流潺潺。而广场三面，被三栋风格迥异的宏伟建筑守护着：凯撒沃思（Kaiserworth）行会建筑、市政厅，以及拥有两座不对称塔楼的集市教堂。这里是戈斯拉尔的客厅，当地人在这里碰头、购物、坐在露天咖啡座看游人如织。你会看到牵着狗的老人，追逐鸽子的孩子，还有支着画板试图捕捉光影的艺术家。这座古城不是僵死的博物馆，它呼吸着，生活着，千年的历史就沉淀在每日的面包香气和邻里寒暄里。
最打动人心的，或许是那种奇特的“层次感”。表面上看，它是明信片般的童话小镇；但稍一深入，你就会触摸到它钢铁般的另一面——帝国皇权的威严，矿工井下艰辛的汗水，汉萨商人的精明与冒险。这种甜美与粗粝、梦幻与现实、乡土与世界性的完美交织，正是戈斯拉尔独一无二的灵魂。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一次走进戈斯拉尔老城，你会误以为自己不小心闯进了一本立体打开的格林童话。不是那种迪士尼化的甜美，而是带着烟熏火燎历史感、真正有血有肉的古老故事。从火车站走出来，穿过一道不起眼的城门，时间“唰”地一声就慢了下来。脚下是千百年来被马蹄和脚步磨得温润发亮的黑色玄武岩鹅卵石路，踩上去有种奇特的坚实感。空气里飘着复杂的味道——刚出炉的德式椒盐卷饼的碱水香气，从古老建筑木缝里透出的、略带潮湿的木头味，还有远处咖啡店飘来的醇厚焦香。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所有感官的焦点，毫无意外地，都被那些房子夺走了。它们不是整齐划一的，而是像一群穿着五彩花衣、互相依偎着取暖的老人，挤挤挨挨地站满了每一条小巷。这就是德国最引以为傲的半木结构建筑，当地人叫它“Fachwerkhaus”。黑色的木条在白色或彩色的墙体上构成各种几何图形——菱形、十字形、太阳纹，每一栋都有自己的“表情”。有些木梁已经弯曲，仿佛承载了太多故事；有些窗台上盛开着天竺葵，鲜红的花朵在深色木头的映衬下，迸发出惊人的生命力。你几乎能听到木头在午后阳光的烘烤下，发出细微的、满足的“噼啪”声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`市场的钟声从广场方向传来，那是老城永恒的心跳。当你走到市场广场，豁然开朗的视野会让你忍不住深吸一口气。广场中央是那座著名的帝国之鹰喷泉，水流潺潺。而广场三面，被三栋风格迥异的宏伟建筑守护着：凯撒沃思（Kaiserworth）行会建筑、市政厅，以及拥有两座不对称塔楼的集市教堂。这里是戈斯拉尔的客厅，当地人在这里碰头、购物、坐在露天咖啡座看游人如织。你会看到牵着狗的老人，追逐鸽子的孩子，还有支着画板试图捕捉光影的艺术家。这座古城不是僵死的博物馆，它呼吸着，生活着，千年的历史就沉淀在每日的面包香气和邻里寒暄里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，或许是那种奇特的“层次感”。表面上看，它是明信片般的童话小镇；但稍一深入，你就会触摸到它钢铁般的另一面——帝国皇权的威严，矿工井下艰辛的汗水，汉萨商人的精明与冒险。这种甜美与粗粝、梦幻与现实、乡土与世界性的完美交织，正是戈斯拉尔独一无二的灵魂。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`戈斯拉尔老城`} />
                <InfoRow label="英文名称" value={`Goslar`} />
                <InfoRow label="正式名称" value={`Goslar`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`戈斯拉尔`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`神圣罗马帝国的心脏、汉萨同盟的关键成员、德国千年采矿历史的活化石。`} />
                <InfoRow label="建筑特色" value={`半木结构（木筋屋）建筑的露天博物馆，色彩斑斓的山墙鳞次栉比地排列在蜿蜒的鹅卵石街道两旁。`} />
                <InfoRow label="建筑风格" value={`以中世纪晚期至文艺复兴时期的半木结构建筑为主，混杂着罗马式、哥特式及19世纪历史主义风格的宏伟公共建筑。`} />
                <InfoRow label="文化价值" value={`作为保存完好的中世纪城镇典范，及其与拉默尔斯伯格矿山超过千年的共生关系，于1992年被联合国教科文组织整体列为世界文化遗产。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`戈斯拉尔老城街道和广场全天24小时开放。城内各博物馆和历史建筑（如皇帝行宫、市政厅、矿山博物馆）开放时间各不相同，一般为上午10点至下午5点。多数室内景点周一闭馆，或仅在下午开放。圣诞市场期间（11月底至12月23日）及夏季旅游旺季（5月至9月）部分景点会延长开放时间。出行前务必查询具体景点的官网，以防因私人活动或维修而临时关闭。`} />
              <InfoRow label="门票价格" value={`漫步老城街区免费。参观核心景点需购票：皇帝行宫成人票7.5欧元，优惠票4.5欧元；市政厅历史展厅成人票5欧元；世界文化遗产Rammelsberg矿山博物馆及井下游览联票约25欧元。推荐购买“戈斯拉尔卡”（Goslar Card），可在酒店或旅游信息中心购买，包含市内公共交通和多数主要景点的折扣。6岁以下儿童普遍免费，家庭票优惠力度大。`} />
              <InfoRow label="地址" value={`Markt 1, 38640 Goslar, Germany`} />
              <InfoRow label="交通方式" value={`从最近的主要交通枢纽汉诺威机场出发，最便捷的方式是乘坐火车。在汉诺威机场火车站搭乘区域列车（RE或RB线）前往汉诺威中央火车站，车程约20分钟，班次密集。在汉诺威中央火车站换乘前往戈斯拉尔的直达区域列车（如RE4），车程约1小时15分钟，每小时至少1-2班。到达戈斯拉尔火车站后，老城核心区就在步行范围内，出站后沿着清晰的指示牌步行约10-15分钟即可抵达市场广场。自驾可将车停放在老城外围的停车场（如“Schuhhof”停车场），老城内部为步行区。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起戈斯拉尔的故事，得从地底下的宝藏开始。公元968年，在附近的拉默尔斯伯格山，人们发现了巨大的银矿脉。这个消息像野火一样传遍了欧洲，也传到了当时神圣罗马帝国皇帝奥托一世的耳朵里。财富意味着权力，皇帝们迅速行动了起来。他的儿子奥托二世和孙子奥托三世在这里修建了坚固的行宫，戈斯拉尔一夜之间从偏僻山村变成了帝国的北方中心。想象一下，在11世纪，当绝大多数欧洲人还住在简陋的茅屋时，这里已经举办着决定帝国命运的宫廷会议，来自欧洲各地的使节穿梭在初具规模的街道上。亨利三世皇帝尤其钟爱这里，他不仅扩建了行宫，更将戈斯拉尔称为“他最珍爱的住所”。那段时期，帝国的皇冠、宝剑和权杖都曾保存在这里的行宫教堂中，戈斯拉尔是不折不扣的“皇城”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`矿藏带来的不仅是皇权，更是滚滚财富。到了12、13世纪，戈斯拉尔凭借其丰富的银、铜、铅矿，加入了强大的汉萨同盟——一个主宰北欧贸易的商业联盟。富商和行会们有钱了，他们不再满足于简陋的房屋。于是，老城里开始“生长”出我们今天看到的那些美轮美奂的木筋屋。每一栋夸张的山墙、每一扇华丽的凸窗、每一幅梁柱上的彩绘，都是主人财富和地位的炫耀。市政厅被扩建得美轮美奂，内部那个金碧辉煌的“宣誓厅”满是镀金皮革墙饰，无声地诉说着当年的富庶。戈斯拉尔成为了一个自治的城市共和国，市民的腰杆挺得比许多贵族还直。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的车轮从不只走向繁荣。16世纪的宗教改革带来了动荡，三十年战争（1618-1648）的炮火更是重创了这座城市。帝国皇权早已衰落，戈斯拉尔失去了政治上的特殊地位。更致命的是，到了19世纪中期，表层矿藏逐渐枯竭，城市的经济命脉受到了威胁。戈斯拉尔仿佛一位落魄的贵族，陷入了漫长的沉睡，它的建筑也蒙上了灰尘。但塞翁失马，焉知非福。正是因为经济停滞、无力进行大规模现代化改造，戈斯拉尔老城才意外地躲过了二战炮火的毁灭和战后推土机式的重建，近乎完整地保留了其中世纪的风貌。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机出现在二战后。人们重新发现了这座“沉睡美人”的价值。精心的修复工作开始了，不是推倒重建，而是像修复一件古老乐器般，小心翼翼地清理每一根木梁，加固每一面墙体。1992年，联合国教科文组织将戈斯拉尔老城和拉默尔斯伯格矿山一起列入世界遗产名录，理由是它们“共同展现了欧洲采矿历史和技术发展的卓越典范”，以及“一个保存完好的中世纪历史城镇与工业景观的独特结合”。古老的矿山停止了开采，变成了讲述千年工业文明的博物馆。戈斯拉尔终于醒来，不再是依靠矿产，而是依靠它无价的历史与记忆，迎来了新的生命篇章。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受戈斯拉尔的魔力，建议预留一整天时间。最佳抵达时间是上午9点左右，这时旅游团尚未涌入，晨光斜射在木筋屋的立面上，光影效果绝佳，市场广场上的商店刚刚开门，充满本地生活气息。整体游览节奏应该是“慢走细看”，路线可以设计成一个环线，从心脏地带市场广场开始，先感受宏大的公共建筑和城市脉搏，然后深入小巷，在迷宫般的木筋屋街区中迷失，最后探访帝国权力的象征——皇帝行宫，并以矿业历史收尾。这样安排能让你从宏观到微观，从世俗生活到帝国权力，层层深入地理解这座城市。全程步行即可，务必穿一双绝对舒适的鞋子，因为鹅卵石路虽然美丽，但对脚底是个考验。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周末和夏季午后是旅游团高峰时段，市场广场和主街会非常拥挤，建议将核心广场游览安排在早晨或傍晚。参观教堂和行宫内部时，注意遵守安静礼仪，部分区域禁止拍照会有明确标识。哈尔茨山区天气多变，即使是夏天也请随身带一件防风外套或雨伞。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨第一站直奔市场广场，在帝国之鹰喷泉边坐下，看着面包店开门、市政厅钟楼敲响钟声，感受老城从睡梦中苏醒的鲜活气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进市政厅内部，一定要找到那个被称为“拱顶厅”的世界遗产中心，通过现代多媒体展览快速建立起对戈斯拉尔千年历史的立体认知。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从广场东北角钻进那条名叫“霍肯街”的狭窄小巷，让身体两侧近乎相触的古老木筋屋包裹你，仔细辨认门楣上的古老铭文和梁柱上的神秘雕刻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着“护士街”漫步，寻找那栋有着精美文艺复兴雕刻的“布里斯特木筋屋”，想象16世纪一位成功商人是如何在此生活和接待宾客的。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上位于老城高处的皇帝行宫，站在宏伟的罗马式大厅里，凝视墙上那幅巨型帝国历史画，遥想当年皇帝和选帝侯们在此议事的景象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从行宫的花园平台远眺，将整个老城红色屋顶的海洋和远处哈尔茨山的轮廓尽收眼底，这是理解城市地理格局的最佳视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午将时光切换到工业时代，前往市郊的拉默尔斯伯格矿山博物馆，戴上安全帽跟随向导深入古老的矿道，亲手触摸冰冷的矿石墙壁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分回到老城，随意选一条白天没走过的小巷漫无目的地闲逛，等待夕阳为每一栋木筋屋镶上金边，然后找一家有数百年历史的地下餐厅享用一顿丰盛的哈尔茨山区晚餐。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`市场广场东南角建筑的回廊下`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点的光线最为理想，可以以拱廊为前景框架，拍摄广场全景、喷泉和市政厅的哥特式山墙，构图富有纵深感和层次感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`霍肯街中段仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光能勉强照进狭窄的巷子，此时抬头拍摄两侧木筋屋山墙向中间天空收拢的震撼视角，能完美体现“街道如河床”的挤压感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`皇帝行宫前的台阶上`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前半小时，背对行宫大门，使用广角镜头拍摄，可以将前景的行宫建筑、中景层层叠叠的老城屋顶和远景的哈尔茨山脉全部纳入画中，气势恢宏。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`老城城墙边的“水渠小道”旁`}</h4>
                  <p className="text-sm text-gray-700">{`这里有一条清澈的水渠沿街流淌，找一个有鲜花的窗台做近景，拍摄木筋屋倒映在水中的对称画面，尤其雨后初晴时，色彩饱和度极高。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄木筋屋局部细节时，尝试寻找有特色门环、古老招牌或窗台鲜花的构图，故事感远胜于单纯拍摄建筑整体。尊重居民隐私，避免将镜头对准明显是私人居住的窗户内部。冬季雪后的戈斯拉尔宛如童话，但要注意保暖和防滑，相机电池在低温下耗电极快。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住市场广场旁一栋有500年历史的木筋屋改造的精品酒店，木梁低矮触手可及，晚上听着市政厅的钟声入睡，清晨在百年面包房的香气中醒来。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`家庭温馨之选`}</h4>
                  <p className="text-sm text-green-800">{`老城边缘一处由传统哈尔茨风格农舍改造的家庭旅馆，主人会为你准备丰盛的农家早餐，并在壁炉边向你讲述家族世代居住于此的故事。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计美学之选`}</h4>
                  <p className="text-sm text-yellow-800">{`一间由旧矿山行政大楼改建的现代设计酒店，内部是极简工业风，却拥有俯瞰整个老城和历史矿山的无敌视野，体验历史与当代的强烈对话。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`山间静谧之选`}</h4>
                  <p className="text-sm text-purple-800">{`位于哈尔茨山森林边缘的一间度假屋，需要短途驾车或搭乘登山小火车抵达，推开窗是满眼苍翠和鸟鸣，夜晚星空璀璨，适合寻求彻底宁静的旅人。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城核心区的酒店大多由历史建筑改造，可能没有电梯，隔音也相对一般，但氛围无与伦比。如果自驾，务必确认酒店是否提供停车位，老城内停车位稀缺且昂贵。旺季（夏季、圣诞市场期间）必须提前数月预订，平日则选择余地较大。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开戈斯拉尔许久，闭上眼，脑海里浮现的不是某个单独的宏伟画面，而是一种混合的、温暖的感官记忆：是鹅卵石硌着脚底的触感，是木头上阳光烘烤后的气味，是喷泉水流不息的潺潺声，是椒盐卷饼刚出炉的咸香。这座城教会我，真正的历史不是教科书上冰冷的名字和年份，而是渗透在日常生活纹理里的温度。它没有被供在神坛上，而是依然被居民用来居住、行走、买卖、庆祝。这种“活着的遗产”，比任何彻底博物馆化的古城都更有力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、崇尚新奇的快节奏世界里，戈斯拉尔提供了一种截然不同的时间尺度。它提醒我们，有些价值需要千年的沉淀，有些美丽源于时光的包浆。它既是童话的，又是真实的；既是柔美的，又是坚硬的。它告诉我们，一个地方的伟大，可以不仅仅源于一场著名的战役或一位天才的艺术家，也可以源于无数代普通矿工、商人、木匠和主妇日复一日的劳作与生活。每一位热爱深度游的旅人都应该来这里，不仅仅是为了拍照，更是为了上一堂关于时间、坚韧与生活之美的，无声却深刻的课。在这里，你会找到一种罕见的、扎实的安宁。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
