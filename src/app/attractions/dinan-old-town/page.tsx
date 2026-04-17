import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '迪南老城 Dinan Old Town｜悬崖上的中世纪时光胶囊，漫步布列塔尼的童话 - 最佳欧洲景点',
  description: '第一次见到迪南，我感觉自己像是不小心翻开了童话书的一页。车子还在环绕着山谷行驶，远远地，它就出现在那片陡峭的悬崖顶上——一大片密密麻麻的灰色、褐色和奶油色的屋顶，簇拥着一座挺拔的教堂钟楼，被一道厚重的、锯齿状的石头城墙像臂弯一样紧紧环抱着。那景象不是“壮观”，而是一种“坚定”，像一个历经沧桑却依然腰...',
}

export default function DinanOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '迪南老城', href: '/attractions/dinan-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`迪南老城・Dinan Old Town・法国・迪南`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一次见到迪南，我感觉自己像是不小心翻开了童话书的一页。车子还在环绕着山谷行驶，远远地，它就出现在那片陡峭的悬崖顶上——一大片密密麻麻的灰色、褐色和奶油色的屋顶，簇拥着一座挺拔的教堂钟楼，被一道厚重的、锯齿状的石头城墙像臂弯一样紧紧环抱着。那景象不是“壮观”，而是一种“坚定”，像一个历经沧桑却依然腰杆笔直的老贵族，静静俯瞰着脚下蜿蜒的兰斯河和翠绿的山谷。
把车停在城墙外，穿过古老的圣路易门走进老城，时间立刻慢了下来，甚至可以说是凝固了。脚下是巨大、光滑、被岁月磨得发亮的鹅卵石，走起来有轻微的“哒哒”声，在狭窄的街巷里回响。空气里有种特别好闻的混合气味：潮湿石板缝里青苔的土腥味、从面包店飘出的热黄油和焦糖的甜香、还有古老木梁散发出的、类似蜂蜜和旧书籍的沉稳味道。阳光被高耸的木筋墙房屋切割成一条条光带，明晃晃地打在五彩斑斓的橱窗上——那里陈列着手绘的陶器、蕾丝织物，还有印着布列塔尼传统图案的瓷器。当地人推着自行车与你擦肩而过，用法语和轻快的布列塔尼语打着招呼，街角咖啡馆的老先生就着一小杯浓缩咖啡看报纸，仿佛外面的世界与他无关。这里最打动人心的，不是某个单一的宏伟建筑，而是那种完整得令人惊叹的生活氛围，中世纪的城市骨架里，依然跳动着现代而温暖的心脏。
顺着主街“钟楼街”（Rue de l’Horloge）往上走，坡度越来越陡，两旁的木筋墙房屋也愈发倾斜、古旧，有些二楼甚至凸出来，几乎要和对面的房子“握手”。这些房子的木梁上雕刻着古怪的小人、动物和花纹，每一栋都有自己的表情。不时会经过一个拱门，探头进去，里面可能是一个种满天竺葵的静谧庭院，或是传来叮当敲打声的铁匠铺。你突然就明白了，迪南的魅力在于它的“可阅读性”——每一块石头、每一道木纹、每一处转弯，都在无声地讲述着至少六百年前的故事。
走到老城的最高处，站在圣索沃尔教堂前的广场上回望，视野豁然开朗。你会看到整个老城的屋顶层层叠叠，一直延伸到远处雄伟的城堡塔楼和城墙。而当你走到城墙边，扶着冰冷的垛口向下望去，又是另一番震撼景象：悬崖近乎垂直地插入山谷，兰斯河像一条碧绿的丝带静静流淌，河畔的港口小镇显得那么小巧，红色的屋顶与绿色的河水相映成趣。这种从“城中山”到“山下城”的强烈空间对比，这种被历史包裹又被自然拥抱的双重体验，便是迪南独一无二、让人瞬间沉静下来的魔力。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一次见到迪南，我感觉自己像是不小心翻开了童话书的一页。车子还在环绕着山谷行驶，远远地，它就出现在那片陡峭的悬崖顶上——一大片密密麻麻的灰色、褐色和奶油色的屋顶，簇拥着一座挺拔的教堂钟楼，被一道厚重的、锯齿状的石头城墙像臂弯一样紧紧环抱着。那景象不是“壮观”，而是一种“坚定”，像一个历经沧桑却依然腰杆笔直的老贵族，静静俯瞰着脚下蜿蜒的兰斯河和翠绿的山谷。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`把车停在城墙外，穿过古老的圣路易门走进老城，时间立刻慢了下来，甚至可以说是凝固了。脚下是巨大、光滑、被岁月磨得发亮的鹅卵石，走起来有轻微的“哒哒”声，在狭窄的街巷里回响。空气里有种特别好闻的混合气味：潮湿石板缝里青苔的土腥味、从面包店飘出的热黄油和焦糖的甜香、还有古老木梁散发出的、类似蜂蜜和旧书籍的沉稳味道。阳光被高耸的木筋墙房屋切割成一条条光带，明晃晃地打在五彩斑斓的橱窗上——那里陈列着手绘的陶器、蕾丝织物，还有印着布列塔尼传统图案的瓷器。当地人推着自行车与你擦肩而过，用法语和轻快的布列塔尼语打着招呼，街角咖啡馆的老先生就着一小杯浓缩咖啡看报纸，仿佛外面的世界与他无关。这里最打动人心的，不是某个单一的宏伟建筑，而是那种完整得令人惊叹的生活氛围，中世纪的城市骨架里，依然跳动着现代而温暖的心脏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`顺着主街“钟楼街”（Rue de l’Horloge）往上走，坡度越来越陡，两旁的木筋墙房屋也愈发倾斜、古旧，有些二楼甚至凸出来，几乎要和对面的房子“握手”。这些房子的木梁上雕刻着古怪的小人、动物和花纹，每一栋都有自己的表情。不时会经过一个拱门，探头进去，里面可能是一个种满天竺葵的静谧庭院，或是传来叮当敲打声的铁匠铺。你突然就明白了，迪南的魅力在于它的“可阅读性”——每一块石头、每一道木纹、每一处转弯，都在无声地讲述着至少六百年前的故事。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走到老城的最高处，站在圣索沃尔教堂前的广场上回望，视野豁然开朗。你会看到整个老城的屋顶层层叠叠，一直延伸到远处雄伟的城堡塔楼和城墙。而当你走到城墙边，扶着冰冷的垛口向下望去，又是另一番震撼景象：悬崖近乎垂直地插入山谷，兰斯河像一条碧绿的丝带静静流淌，河畔的港口小镇显得那么小巧，红色的屋顶与绿色的河水相映成趣。这种从“城中山”到“山下城”的强烈空间对比，这种被历史包裹又被自然拥抱的双重体验，便是迪南独一无二、让人瞬间沉静下来的魔力。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`迪南老城`} />
                <InfoRow label="英文名称" value={`Dinan Old Town`} />
                <InfoRow label="正式名称" value={`Historic Centre of Dinan`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`迪南`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`布列塔尼地区保存最完好的中世纪防御城镇之一，见证了英法百年战争及布列塔尼公国的兴衰。`} />
                <InfoRow label="建筑特色" value={`以宏伟的城堡、环绕近3公里的完整石砌城墙、陡峭鹅卵石街道两侧鳞次栉比的木筋墙（半木结构）房屋为核心，形成从悬崖顶端延伸至港口、层次分明的立体古城。`} />
                <InfoRow label="建筑风格" value={`中世纪哥特式与文艺复兴风格在石砌防御工事与民居上交融，木筋墙建筑则体现典型的布列塔尼及诺曼底地方特色。`} />
                <InfoRow label="文化价值" value={`一座活生生的中世纪城市建筑博物馆，其城市肌理、市集传统与手工匠人文化，完美展现了布列塔尼地区的历史身份与韧性。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`公共区域全天开放。主要室内景点如迪南城堡（Château de Dinan）和圣索沃尔教堂（Église Saint-Sauveur）通常开放时间为：夏季（4月至9月）上午10点至下午6点，冬季（10月至3月）上午10点至下午5点，周二可能闭馆。城墙步道（Remparts）的入口开放时间依季节调整，通常为日出至日落。建议出行前查阅各景点官网确认，部分景点在圣诞节和元旦不开放。`} />
              <InfoRow label="门票价格" value={`进入老城本身免费。参观主要景点需单独购票：迪南城堡（含博物馆）门票约6欧元，圣索沃尔教堂免费进入（鼓励捐赠），城墙步道免费，钟楼（Tour de l‘Horloge）门票约4欧元。可考虑购买“迪南通票”（约10欧元），涵盖城堡、钟楼和城墙博物馆。优惠政策：学生、65岁以上老人及家庭通常有折扣，18岁以下青少年免费。`} />
              <InfoRow label="地址" value={`Place du Champ, 22100 Dinan, France`} />
              <InfoRow label="交通方式" value={`从最近的雷恩布列塔尼机场（Rennes–Saint-Jacques Airport）出发，搭乘机场巴士至雷恩火车站（约20分钟），然后转乘TER区域火车直达迪南火车站（约1小时，班次每小时1-2班）。从巴黎蒙帕纳斯车站乘坐TGV高速列车至雷恩（约1.5小时），再转TER至迪南（总耗时约3小时）。自驾从雷恩出发沿N137公路向北，转D794公路即可抵达（约50分钟）。城内交通全靠步行，火车站到老城中心（钟楼广场）是15分钟的上坡路，也可乘坐当地小巴（Navette）。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`迪南的故事，始于公元9世纪前后，在一片名为“Dinan”的高地之上。最初，这里可能只是河流转弯处的一个凯尔特人定居点，战略位置并不突出。然而，到了11世纪，随着布列塔尼公国势力的扩张，这片俯瞰兰斯河深谷的悬崖高地，其军事价值被一位名叫里瓦隆的领主敏锐地发现了。他在此修建了第一座木制堡垒，控制了从海岸通往内陆的水陆要道，迪南作为要塞城镇的命运齿轮，从此开始转动。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正让迪南在历史上留下浓墨重彩一笔的，是14世纪那场漫长的英法百年战争，以及布列塔尼公国那剪不断理还乱的内部分裂。当时，布列塔尼公爵无嗣而终，两位继承人——夏尔·德·布卢瓦和让·德·蒙福尔——为争夺爵位大打出手，背后分别站着法国国王和英格兰国王。迪南，这座坚固的城镇，成了双方反复争夺的焦点。1341年，著名的“三十人决斗”就在这里上演——双方各派30名骑士在迪南城墙下进行了一场中世纪“锦标赛”式的惨烈厮杀，最终以法方支持者的胜利告终，但战争远未停止。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`说到迪南，就绕不开那位传奇的布列塔尼骑士——贝特朗·杜·盖克兰。这位出生在迪南附近的“布列塔尼之鹰”，是法国查理五世麾下的名将。1357年，在一场与英军的围城战中，一段充满骑士浪漫色彩的插曲发生了。传说，当时英军指挥官托马斯·坎特伯雷扣押了迪南守城将领的妻子，以此要挟。为了营救她，杜·盖克兰向坎特伯雷发起了单人决斗的挑战。在一场惊心动魄的马上长枪对决后，杜·盖克兰获胜，不仅救回了人质，还迫使英军解除了围困。尽管这段故事的细节可能被后世演义，但它深深烙印在迪南的城市记忆里，杜·盖克兰的骑马雕像至今仍矗立在老城中心，成为这座城市不屈精神的象征。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战火淬炼了迪南的筋骨。从14世纪到15世纪，历任领主和公爵不惜重金，将原本的木栅栏和土墙，改建为我们今天看到的、由坚硬花岗岩砌成的宏伟城墙。这道全长近3公里、设有四座主城门和十余座塔楼的防御工事，是法国保存最完好的中世纪城墙之一。同时，和平时期的迪南也因港口贸易（特别是帆布和木材）而繁荣富庶。富商们竞相在城内建造华美的木筋墙房屋，哥特式的圣索沃尔教堂被不断扩建，那座精美的钟楼（Tour de l‘Horloge）也在15世纪末由富裕的市民捐资建成，象征着城市自治的骄傲。城墙之内，一个融合了军事防御、商业活力和宗教生活的完整中世纪城市生态，被奇迹般地固定了下来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`此后的数百年，当法国其他许多城镇被现代化进程或战火摧毁重建时，迪南却因为地理位置相对偏僻，经济发展放缓，意外地“沉睡”了过去。它的城墙没有被拆毁以拓宽道路，它的老房子没有被推倒建造新式公寓。这种“被遗忘”反而成了一种幸运的保存。直到19世纪，浪漫主义的画家和作家“重新发现”了这座时光停滞的小城，其如画的中世纪风貌才开始吸引外界的目光。今天，走在迪南的街道上，你所触摸到的石头，你所仰望的木梁，绝大部分都真实地穿越了五百年以上的光阴。它不是一个重建的“仿古”景区，而是一部用石头、木头和生命写就的、依然在呼吸的立体史书。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要充分领略迪南的层次与韵味，建议安排一整天的时间，并选择在上午9点前抵达。这样的安排能让你避开一日游的人潮，享受老城清晨的宁静光影。整体游览节奏应是“先内后外，自上而下，再自下而上”。先从高处老城核心区开始，沉浸在巷陌之间，然后沿着城墙漫步，俯瞰全景，接着挑战著名的“老鹰之路”下到港口，在河边午餐休息，最后可以选择乘船或慢慢爬回老城，从不同角度感受这座立体城市的空间魔法。全程步行，舒适鞋子是绝对必需品。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`鹅卵石路面非常湿滑，尤其是在雨后或清晨，务必穿防滑性能好的徒步鞋或运动鞋，高跟鞋在这里绝对是“灾难”。
老城中心餐馆价格较高且容易客满，若想经济用餐，可以走到城墙外围的居民区，或直接在港口区的餐厅享用午餐，景色和性价比往往更优。
周日和法国法定假日，许多小商店和博物馆可能关门，但咖啡馆和餐厅照常营业，规划行程时需特别注意。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从标志性的圣路易门进入老城，立刻右转爬上古老的城墙步道，迎着晨光俯瞰红瓦屋顶的海洋和远处翠绿的山谷。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着城墙走到迪南城堡，参观内部的历史博物馆，亲手触摸那些冰冷的盔甲和古老的挂毯，了解骑士时代的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡出来，钻进迷宫般的钟楼街和小热尔街，用指尖划过那些雕刻着古怪图案的深色木梁，寻找最美的木筋墙房屋角度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在钟楼广场的露天咖啡馆坐下来，点一杯苹果酒配一份可丽饼，看着古老的钟楼指针缓缓移动，彻底融入当地的慢节奏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着陡峭蜿蜒、被称为“老鹰之路”的鹅卵石坡道（Rue du Petit-Fort）小心翼翼地走下悬崖，一路感受脚下石头的湿滑和历史感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`抵达河畔的港口区，在兰斯河边找一张长椅坐下，静静欣赏对岸悬崖上拔地而起的宏伟城墙与房屋，感受强烈的视觉对比。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果有余力且时间允许，可以乘坐传统的平底游船在兰斯河上泛舟半小时，从水面中央仰望悬崖上的迪南，视角无比震撼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，可以选择乘坐老式的小火车或沿着另一条缓坡慢慢步行回到山顶老城，在夕阳时分再次登上城墙，看金色的光芒为古城披上外衣。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`港口仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`午后阳光照亮悬崖正面时，站在港口区的兰斯河对岸或小桥上，用广角镜头将古老的石桥、河面倒影与悬崖顶端巍峨的城墙、教堂钟楼一同纳入画面，层次感极强。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`钟楼街光影走廊`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚太阳位置较低时，站在钟楼街中段向东或向西拍摄，利用狭窄街道形成的天然“引导线”，捕捉阳光穿过木筋墙房屋缝隙形成的光束，以及被照亮的鹅卵石路面，氛围感十足。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城墙转角俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`从圣路易门附近的城墙步道向东南方向走，有一个突出的转角，这里可以拍摄到老城连绵的屋顶、圣索沃尔教堂的后殿以及更远方开阔的田园风光，适合用长焦镜头压缩空间。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`老鹰之路的纵深`}</h4>
                  <p className="text-sm text-gray-700">{`站在“老鹰之路”的中段向上或向下拍摄，利用Z字形的陡峭坡道和两侧古老的石墙作为框架，捕捉行人行走的动态或静止的空镜，能完美体现迪南的立体感和历史纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`圣索沃尔教堂玫瑰窗内部`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，阳光恰好能透进教堂西立面的玫瑰窗，站在中殿后方，对准祭坛方向，可以拍到彩绘玻璃将绚丽光影投射在古老石柱和地面上的神圣画面。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重当地居民隐私，拍摄木筋墙房屋的美丽庭院或橱窗时，尽量避免将屋内的主人或清晰的生活细节拍入镜头。使用无人机在迪南老城上空飞行受到严格限制，基本不被允许，切勿擅自放飞。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-blue-800">{`入住老城中心一栋14世纪木筋墙房屋改造的精品酒店，睡在古老的橡木横梁下，清晨被石板街上清扫的声音和远处教堂的钟声温柔唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`景观首选`}</h4>
                  <p className="text-sm text-green-800">{`选择坐落在港口区、紧邻兰斯河的特色旅馆，房间窗户正对悬崖上的古城，夜晚当城墙被灯光点亮，你便能独享一幅绝美的中世纪夜景画。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-yellow-800">{`住在老城外围步行10分钟范围内的舒适民宿或小酒店，价格亲民，通常由热情的主人经营，能提供最地道的早餐和游玩建议，体验真正的法式家庭氛围。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-purple-800">{`下榻位于迪南近郊古堡或庄园改造的豪华酒店，享受静谧的花园、水疗中心，并在米其林推荐的餐厅用餐，将中世纪的探索与法式的精致生活完美结合。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿房间可能较小且楼梯陡峭（受历史建筑限制），预订时需留意；而港口区的住宿夜晚非常安静，但往返老城中心需要爬坡。夏季（7-8月）是绝对旺季，住宿需提前数月预订，而春秋两季则是最佳选择，天气宜人且游客相对较少。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开迪南很久以后，我脑海中反复回味的，不是某一张具体的明信片风景，而是一种整体的“感觉”。那是一种脚踏在真正历史之上的踏实感，是眼睛被丰富的细节和和谐的色调喂饱后的满足感，更是一种心灵从喧嚣日常中抽离、安住于另一种时间流速里的宁静感。在这个一切都在追求更快、更新、更刺激的时代，迪南倔强地、优雅地慢着。它的价值，不在于提供了多么惊心动魄的游乐项目，而在于它本身就是一座完整的世界，邀请你进来，只是散步、观察、呼吸和感受。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了那些挤满游客、充斥着纪念品商店的“古镇”，如果你心底还藏着对童话世界的些许相信，如果你渴望一场能真正触摸到时光纹路的旅行，那么，请一定把迪南放入你的清单。它或许没有巴黎的光芒万丈，没有蔚蓝海岸的奢华慵懒，但它拥有一种更为稀缺和深沉的东西——时间的重量与生活的温度。在这里，你会明白，真正的奢侈不是金碧辉煌，而是一座古城，历经千年风雨，依然能如此生动、如此完整地向你低语它的故事。这不仅仅是一次旅行，更像是一次与历史和自我平静相处的疗愈。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/parnu-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    派
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">派尔努老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pärnu Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/szkesfehrvr" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塞
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塞克什白堡老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Székesfehérvár</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tetovo-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    泰
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">泰托沃老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tetovo Old Town</p>
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
